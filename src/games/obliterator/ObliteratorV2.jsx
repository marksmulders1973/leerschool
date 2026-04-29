import { useEffect, useRef, useState } from "react";
import {
  PHYSICS,
  updatePlayer,
  resolveCollision,
  pickupCollision,
  makePlayer,
} from "./engine/physics.js";
import { multiplierFor, pointsFor } from "./systems/score.js";
import {
  levelFromScore,
  speedFor,
  spawnIntervalFor,
  obstacleVarietyFor,
  powerupChanceFor,
} from "./systems/difficulty.js";
import { loadUnlocked, processEvent } from "./systems/achievements.js";
import { ACHIEVEMENTS, TOTAL_ACHIEVEMENTS } from "./data/achievementsData.js";
import { themeForLevel } from "./data/themes.js";
import { playSound, unlockAudio, setMuted, isMuted } from "./audio.js";
import { makeRng, dailySeed, todayUtcString } from "./seed.js";
import SecondChance from "./SecondChance.jsx";
import supabase from "../../supabase.js";

// Max keer dat een speler een tweede-kans-quiz mag doen per run.
// Voorkomt oneindig spelen via vragen, maar geeft genoeg ademruimte
// (eerste 2 voelen "gratis", 3e is laatste kans).
const MAX_SECOND_CHANCES = 3;

const CANVAS_W = 360;
const CANVAS_H = 540;
const HIGH_SCORE_KEY = "obliterator_v2_highscore";

/**
 * OBLITERATOR V2 — modulaire runner-game met polish:
 * audio, power-ups echt aangesloten, start-scherm, countdown,
 * combo-tier flash, obliterate-window hint, leaderboard.
 *
 * Phases: "start" | "countdown" | "playing" | "paused" | "gameover"
 */
export default function ObliteratorV2({
  playerName = "Speler",
  onClose,
  onScoreSubmit,
  // PvP-modus: als pvpMatch + pvpSub gegeven zijn, draait de game in
  // duel-modus met seeded RNG, opponent-ghost-render en eindscherm.
  pvpMatch = null,
  pvpSub = null,
  pvpRole = null, // "host" of "guest"
  pvpStartsAt = null, // timestamp (ms) voor sync-start
  onChallengeFriend = null, // callback voor "Daag vriend uit"-knop op startscherm
}) {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const phaseRef = useRef("start");
  const unlockedRef = useRef(loadUnlocked());
  // PvP: opponent-state uit ontvangen ticks. Houden in ref zodat we hem
  // 60fps kunnen renderen zonder elke tick een React-re-render te triggeren.
  const opponentRef = useRef({ y: PHYSICS.groundY - PHYSICS.playerSize, score: 0, alive: true });
  const isPvP = !!(pvpMatch && pvpSub);

  const [phase, setPhase] = useState("start");
  const [hud, setHud] = useState({ score: 0, combo: 0, level: 1, lives: 3, mult: 1 });
  const [achievementToast, setAchievementToast] = useState(null);
  const [tierFlash, setTierFlash] = useState(null);
  const [muted, setMutedState] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    try { return parseInt(localStorage.getItem(HIGH_SCORE_KEY) || "0", 10) || 0; }
    catch { return 0; }
  });
  const [countdown, setCountdown] = useState(3);
  // Daily Challenge state — wordt gezet vóór startCountdown bij daily-knop
  const [isDaily, setIsDaily] = useState(false);
  // Achievements-overzicht overlay (los van phase, kan vanuit elke fase)
  const [showAchievements, setShowAchievements] = useState(false);
  // Tellen we direct hoeveel er unlocked zijn — herrekenen na elke unlock
  const [unlockedCount, setUnlockedCount] = useState(unlockedRef.current.size);
  // Tweede-kans-feature: hoe vaak deze run al gebruikt.
  // Ref-versie zodat de game-loop (createt 1x in useEffect[]) altijd de
  // verse waarde leest — anders stale-closure die altijd 0 ziet.
  const [secondChancesUsed, setSecondChancesUsed] = useState(0);
  const secondChancesUsedRef = useRef(0);

  // Sync phase met ref voor de game loop
  useEffect(() => { phaseRef.current = phase; }, [phase]);
  useEffect(() => { secondChancesUsedRef.current = secondChancesUsed; }, [secondChancesUsed]);

  // Init state on mount
  useEffect(() => {
    stateRef.current = createGameState({ isDaily: false });
  }, []);

  // ── PvP: opponent-tick listener + auto-start ─────────────────
  useEffect(() => {
    if (!isPvP || !pvpSub) return;
    // Hook tick-handler in (vorige handlers blijven, bv. presence)
    const channel = pvpSub.channel;
    const tickHandler = ({ payload }) => {
      if (!payload || payload.from === pvpRole) return;
      opponentRef.current = {
        y: payload.y,
        score: payload.score,
        alive: payload.alive,
        weapon: !!payload.weapon,
      };
    };
    channel.on("broadcast", { event: "tick" }, tickHandler);

    // Start direct met seeded RNG. Countdown sync via pvpStartsAt.
    const seedRng = makeRng(pvpMatch.seed);
    stateRef.current = createGameState({ rng: seedRng });
    setSecondChancesUsed(0);
    setHud({ score: 0, combo: 0, level: 1, lives: 3, mult: 1 });

    const msToStart = Math.max(0, (pvpStartsAt || Date.now() + 3000) - Date.now());
    setPhase("countdown");
    setCountdown(Math.max(1, Math.ceil(msToStart / 1000)));
    playSound("countdown");
    let n = Math.max(1, Math.ceil(msToStart / 1000));
    const id = setInterval(() => {
      n--;
      if (n > 0) {
        setCountdown(n);
        playSound("countdown");
      } else {
        clearInterval(id);
        playSound("start");
        setPhase("playing");
      }
    }, 700);

    return () => {
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPvP]);

  // ───────────────────────── Game loop ─────────────────────────
  useEffect(() => {
    let raf;
    let lastSpawnTime = 0;
    let lastHudPush = 0;

    const tick = (ts) => {
      const s = stateRef.current;
      if (!s) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const ph = phaseRef.current;

      // Render altijd — ook in pause/start zodat scherm leeft
      if (ph !== "playing") {
        // Particles blijven nog kort doorlopen voor visuele continuïteit
        s.particles = s.particles
          .map((p) => ({ ...p, x: p.x + p.vx, y: p.y + p.vy, life: p.life - 1, vy: p.vy + 0.3 }))
          .filter((p) => p.life > 0);
        if (s.shake > 0) s.shake = Math.max(0, s.shake - 0.6);
        render(canvasRef.current, s, /*hintHighlight*/ null);
        raf = requestAnimationFrame(tick);
        return;
      }

      // ─── Update (alleen tijdens playing) ─────────────────
      const newLevel = levelFromScore(s.score);
      if (newLevel !== s.level) {
        s.level = newLevel;
        s.theme = themeForLevel(newLevel);
        emitParticles(s, "level_up", PHYSICS.playerX + 20, s.player.y);
        playSound("level_up");
        const ach = processEvent({ type: "level_up" }, s, unlockedRef.current);
        if (ach.length) showAchievement(ach[0]);
      }

      // Power-up modifiers
      const now = performance.now();
      const slowmoActive = now < s.slowmoUntil;
      const multBoostActive = now < s.multiplierBoostUntil;
      const speed = speedFor(s.level) * (slowmoActive ? 0.5 : 1);

      // Input → physics. Speel jump-sound alleen als de tap daadwerkelijk
      // resulteerde in een sprong (op de grond stond + getapt).
      const willJump = s.input.tapped && s.player.onGround;
      updatePlayer(s.player, s.input);
      if (willJump) playSound("jump");
      s.input.tapped = false;

      // Spawn — gebruikt s.rng zodat de Daily Challenge deterministisch is.
      if (ts - lastSpawnTime > spawnIntervalFor(s.level)) {
        // Tijdens safe-zone na schans: skip grond-obstakels (Mark's eis:
        // niet direct op spike landen na schans/loop).
        if (now >= s.noObstaclesUntil) {
          spawnObstacle(s);
        }
        lastSpawnTime = ts;
        if (s.rng() < powerupChanceFor(s.level)) spawnPowerup(s);
        if (s.rng() < 0.4) spawnStar(s);
        // 🌀 Warp tunnel: 2% per spawn-tick, alleen tot level 7.
        if (s.level <= 7 && s.rng() < 0.02) spawnWarp(s);
        // 🛹 Schans/looping: 2% per spawn-tick, alleen tot level 7.
        if (s.level <= 7 && s.rng() < 0.02) spawnRamp(s);
      }

      // ⚡ Wapen-tick: auto-fire + alien-spawn als wapen actief.
      tickWeapon(s, multBoostActive);

      // Move + collide obstakels
      let hintObstacle = null; // dichtsbijzijnde obstakel in obliterate-zone
      for (const o of s.obstacles) {
        o.x -= speed;
        if (o.dy) {
          o.phase = (o.phase || 0) + 0.07;
          o.y = o.baseY + Math.sin(o.phase) * 24;
        }

        // Visual hint: obstakel binnen "perfecte zone" 0-50px voor player en speler kan jumpen
        const dx = o.x - PHYSICS.playerX;
        if (!o.scored && dx > -20 && dx < 60 && (!hintObstacle || dx < hintObstacle.x - PHYSICS.playerX)) {
          hintObstacle = o;
        }

        const result = resolveCollision(s.player, o);
        if (result === "hit") {
          handleHit(s, o);
          if (s.lives <= 0) {
            handleDeath(s);
            return;
          }
          o.scored = true;
        } else if (result === "obliterate") {
          handleObliterate(s, o, multBoostActive);
        } else if (result === "jump") {
          handleJump(s, multBoostActive);
          o.scored = true;
        }
      }
      s.obstacles = s.obstacles.filter((o) => o.x > -50 && !o.dead);

      // Power-ups
      for (const p of s.powerups) {
        p.x -= speed;
        if (pickupCollision(s.player, p)) {
          handlePowerup(s, p);
          p.dead = true;
        }
      }
      s.powerups = s.powerups.filter((p) => p.x > -50 && !p.dead);

      // Sterren
      for (const star of s.stars) {
        star.x -= speed;
        if (pickupCollision(s.player, star)) {
          const earned = pointsFor("collect", s.combo) * (multBoostActive ? 2 : 1);
          s.score += earned;
          emitParticles(s, "collect", star.x, star.y);
          playSound("collect");
          star.dead = true;
        }
      }
      s.stars = s.stars.filter((st) => st.x > -50 && !st.dead);

      // 🛸 Aliens — bewegen langzamer dan obstakels, lichte wave.
      for (const a of s.aliens) {
        a.x -= speed * 0.55;
        a.phase += 0.08;
        a.y += a.dy + Math.sin(a.phase) * 0.4;
      }
      s.aliens = s.aliens.filter((a) => a.x > -60 && !a.dead);

      // ⚡ Lasers — naar rechts, raak aliens.
      for (const l of s.lasers) {
        l.x += 9;
        for (const a of s.aliens) {
          if (a.dead) continue;
          if (
            l.x < a.x + a.w &&
            l.x + l.w > a.x &&
            l.y < a.y + a.h &&
            l.y + l.h > a.y
          ) {
            handleAlienHit(s, a, multBoostActive);
            a.dead = true;
            l.dead = true;
            break;
          }
        }
      }
      s.lasers = s.lasers.filter((l) => !l.dead && l.x < CANVAS_W + 20);

      // 🌀 Warp-tunnels — speler die erin springt warpt levels omhoog.
      for (const w of s.warps) {
        w.x -= speed;
        w.rot += 0.06;
        if (pickupCollision(s.player, w)) {
          handleWarp(s, w);
          w.dead = true;
        }
      }
      s.warps = s.warps.filter((w) => w.x > -80 && !w.dead);

      // 🛹 Schansen + loopings — bij contact: super-jump + collectibles.
      for (const r of s.ramps) {
        r.x -= speed;
        if (pickupCollision(s.player, r)) {
          handleRamp(s, r, speed);
          r.dead = true;
        }
      }
      s.ramps = s.ramps.filter((r) => r.x > -60 && !r.dead);

      // 💎 Collectibles (hartjes, ringen) — bewegen mee, pak op bij overlap.
      for (const c of s.collectibles) {
        c.x -= speed;
        if (pickupCollision(s.player, c)) {
          handleCollectible(s, c, multBoostActive);
          c.dead = true;
        }
      }
      s.collectibles = s.collectibles.filter((c) => c.x > -40 && !c.dead);

      // Particles
      s.particles = s.particles
        .map((p) => ({ ...p, x: p.x + p.vx, y: p.y + p.vy, life: p.life - 1, vy: p.vy + 0.3 }))
        .filter((p) => p.life > 0);

      // Schermshake decay
      if (s.shake > 0) s.shake = Math.max(0, s.shake - 0.6);

      // ─── Render ─────────────────────────────────────
      render(canvasRef.current, s, hintObstacle);

      // PvP: teken tegenstander als gekleurde ghost-orb. Eigen kleur is
      // theme.accent, opponent krijgt blauw of rood al naargelang rol.
      if (isPvP && opponentRef.current && canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        const opp = opponentRef.current;
        const oppColor = pvpRole === "host" ? "#ff5252" : "#42a5f5";
        const oppX = PHYSICS.playerX + 8; // iets verschoven zodat hij niet over jou ligt
        ctx.save();
        ctx.globalAlpha = opp.alive ? 0.55 : 0.25;
        ctx.fillStyle = oppColor;
        ctx.shadowBlur = 18;
        ctx.shadowColor = oppColor;
        ctx.beginPath();
        ctx.arc(
          oppX + PHYSICS.playerSize / 2,
          opp.y + PHYSICS.playerSize / 2,
          PHYSICS.playerSize / 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
        ctx.restore();
      }

      // HUD update — niet elke frame
      if (ts - lastHudPush > 100) {
        setHud({
          score: Math.floor(s.score),
          combo: s.combo,
          level: s.level,
          lives: s.lives,
          mult: multiplierFor(s.combo).mult,
          slowmoActive,
          multBoostActive,
          shieldActive: s.shieldActive,
          weaponActive: now < s.weaponUntil,
          weaponSecondsLeft: Math.max(0, Math.ceil((s.weaponUntil - now) / 1000)),
        });
        lastHudPush = ts;

        // PvP: 10Hz tick (elke 100ms zelfde als HUD).
        if (isPvP && pvpSub) {
          pvpSub.sendTick({
            y: s.player.y,
            vy: s.player.vy,
            score: Math.floor(s.score),
            alive: s.lives > 0,
            weapon: now < s.weaponUntil,
          });
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ─── Input ───────────────────────────────────────────
  useEffect(() => {
    const handleTap = (e) => {
      e.preventDefault();
      unlockAudio();

      // Phase-aware: start → er zijn 2 knoppen op de overlay (normal/daily),
      // dus we starten hier NIET automatisch op tik op canvas. Tik op de
      // knop in de Overlay zelf doet dat.
      if (phaseRef.current === "start") return;
      if (phaseRef.current !== "playing") return;
      if (stateRef.current) stateRef.current.input.tapped = true;
    };
    const handleKey = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        handleTap(e);
      } else if (e.code === "Escape") {
        if (phaseRef.current === "playing") setPhase("paused");
        else if (phaseRef.current === "paused") setPhase("playing");
      } else if (e.code === "KeyM") {
        toggleMute();
      }
    };
    window.addEventListener("keydown", handleKey);
    const c = canvasRef.current;
    c?.addEventListener("touchstart", handleTap, { passive: false });
    c?.addEventListener("mousedown", handleTap);
    return () => {
      window.removeEventListener("keydown", handleKey);
      c?.removeEventListener("touchstart", handleTap);
      c?.removeEventListener("mousedown", handleTap);
    };
  }, []);

  // ─── Phase-handlers ──────────────────────────────────
  function startCountdown(opts = {}) {
    const daily = !!opts.daily;
    setIsDaily(daily);
    // Re-init state met juiste rng voor deze run
    stateRef.current = createGameState({
      isDaily: daily,
      dailyDate: daily ? todayUtcString() : null,
    });
    setHud({ score: 0, combo: 0, level: 1, lives: 3, mult: 1 });
    setSecondChancesUsed(0);
    setPhase("countdown");
    setCountdown(3);
    playSound("countdown");
    let n = 3;
    const id = setInterval(() => {
      n--;
      if (n > 0) {
        setCountdown(n);
        playSound("countdown");
      } else {
        clearInterval(id);
        playSound("start");
        setPhase("playing");
      }
    }, 700);
  }

  function restart() {
    // Bewaar daily-mode tussen runs zodat speler dezelfde challenge opnieuw doet
    setPhase("start");
  }

  function toggleMute() {
    const next = !isMuted();
    setMuted(next);
    setMutedState(next);
  }

  // ─── Event-handlers (muteren state direct) ──────────
  function handleObliterate(s, obstacle, multBoost) {
    const prevMult = multiplierFor(s.combo).mult;
    const earned = pointsFor("obliterate", s.combo) * (multBoost ? 2 : 1);
    s.score += earned;
    s.combo += 2;
    s.bestCombo = Math.max(s.bestCombo, s.combo);
    s.totalObliterates++;
    obstacle.dead = true;
    emitParticles(s, "obliterate", obstacle.x, obstacle.y);
    s.shake = 6;
    playSound("obliterate");
    checkTierFlash(prevMult, s.combo);
    const ach = processEvent({ type: "obliterate" }, s, unlockedRef.current);
    if (ach.length) showAchievement(ach[0]);
  }

  function handleJump(s, multBoost) {
    const prevMult = multiplierFor(s.combo).mult;
    const earned = pointsFor("jump", s.combo) * (multBoost ? 2 : 1);
    s.score += earned;
    s.combo += 1;
    s.bestCombo = Math.max(s.bestCombo, s.combo);
    checkTierFlash(prevMult, s.combo);
    const ach = processEvent({ type: "jump" }, s, unlockedRef.current);
    if (ach.length) showAchievement(ach[0]);
  }

  function handleHit(s, obstacle) {
    if (s.shieldActive) {
      s.shieldActive = false;
      emitParticles(s, "shield", PHYSICS.playerX, s.player.y);
      obstacle.dead = true;
      playSound("powerup"); // shield-pop
      return;
    }
    s.lives = Math.max(0, s.lives - 1);
    s.combo = 0;
    s.shake = 14;
    emitParticles(s, "hit", obstacle.x, obstacle.y);
    playSound("hit");
  }

  function handlePowerup(s, p) {
    s.score += pointsFor("powerup", s.combo);
    emitParticles(s, "powerup", p.x, p.y);
    playSound("powerup");
    const now = performance.now();
    if (p.kind === "shield") s.shieldActive = true;
    else if (p.kind === "slowmo") s.slowmoUntil = now + 3000;
    else if (p.kind === "multiplier") s.multiplierBoostUntil = now + 5000;
    else if (p.kind === "weapon") {
      s.weaponUntil = now + 20000;
      s.weaponSpawnedAliens = 0;     // reset budget van 3 aliens
      s.weaponLastSpawn = now;       // wacht ~6 sec voor eerste alien
      s.weaponLastShot = 0;          // direct mogen schieten
    }
  }

  // Wapen actief? → auto-fire elke ~600ms. Alien-spawning: 3 stuks
  // verdeeld over de 20 sec. Wordt aangeroepen vanuit de game-loop.
  function tickWeapon(s, multBoost) {
    const now = performance.now();
    if (now >= s.weaponUntil) return;
    // Auto-fire
    if (now - s.weaponLastShot > 600) {
      spawnLaser(s);
      playSound("shoot");
      s.weaponLastShot = now;
    }
    // Aliens budget = 3 over 20 sec. Plant ze ongeveer elke 5-7 sec.
    if (s.weaponSpawnedAliens < 3 && now - s.weaponLastSpawn > 5000 + Math.random() * 1500) {
      spawnAlien(s);
      s.weaponSpawnedAliens += 1;
      s.weaponLastSpawn = now;
    }
  }

  // Speler heeft alien geraakt met laser → punten + particles + sfx.
  function handleAlienHit(s, alien, multBoost) {
    s.score += pointsFor("powerup", s.combo) * (multBoost ? 2 : 1); // ~200 base
    emitParticles(s, "obliterate", alien.x + alien.w / 2, alien.y + alien.h / 2);
    playSound("boom");
  }

  // 🛹 Speler raakt schans/looping → super-jump + collectibles + safe-zone.
  function handleRamp(s, ramp, speed) {
    const isLoop = ramp.type === "loop";
    s.player.vy = -17; // super-jump
    s.player.onGround = false;
    s.player.didTap = false;
    // Safe-zone: 1.5 sec geen grond-obstakels (Mark's eis: niet direct op spike landen)
    s.noObstaclesUntil = performance.now() + 1500;
    spawnRampCollectibles(s, isLoop, speed);
    playSound(isLoop ? "warp" : "powerup"); // loop = warp-toon (omhoog), schans = pickup-toon
    emitParticles(s, "powerup", ramp.x, ramp.y);
    s.score += isLoop ? 100 : 50; // bonus voor het raken zelf
  }

  // 💎 Speler pakt hartje of ring tijdens vlucht.
  function handleCollectible(s, c, multBoost) {
    if (c.kind === "heart") {
      s.lives = Math.min(5, s.lives + 1);
      emitParticles(s, "powerup", c.x, c.y);
      playSound("powerup");
    } else {
      // Ring → +50 punten × multiplier
      s.score += 50 * (multBoost ? 2 : 1);
      emitParticles(s, "collect", c.x, c.y);
      playSound("collect");
    }
  }

  // Speler raakt warp-portal → 1-3 levels omhoog (cap 10).
  function handleWarp(s, w) {
    const jump = 1 + Math.floor(s.rng() * 3); // 1, 2 of 3
    const newLevel = Math.min(10, s.level + jump);
    const actualJump = newLevel - s.level;
    if (actualJump <= 0) return;
    s.level = newLevel;
    s.theme = themeForLevel(newLevel);
    // Ook score-boost zodat voortgang voelbaar is
    s.score += 250 * actualJump;
    s.shake = Math.min(20, 6 + actualJump * 4);
    playSound("warp");
    // Per gewarpt level een level-up flash
    for (let i = 0; i < actualJump; i++) {
      setTimeout(() => playSound("level_up"), 120 * i);
    }
    emitParticles(s, "level_up", w.x + w.w / 2, w.y + w.h / 2);
  }

  function checkTierFlash(prevMult, newCombo) {
    const newMult = multiplierFor(newCombo).mult;
    if (newMult > prevMult) {
      const tier = multiplierFor(newCombo);
      setTierFlash({ text: tier.label || `×${tier.mult}`, t: Date.now() });
      playSound("combo_tier");
      setTimeout(() => setTierFlash(null), 1200);
    }
  }

  // Wordt aangeroepen als s.lives === 0. Beslist of we de tweede-kans-modal
  // tonen of meteen game-over draaien. Leest uit ref omdat de game-loop in
  // useEffect[] een stale closure heeft op state.
  // In PvP-modus: geen tweede kans (zou de duel onderbreken). Direct
  // pvp-finished phase, eigen score wordt gefinaliseerd.
  function handleDeath(s) {
    if (isPvP) {
      // Stuur laatste tick met alive=false zodat tegenstander dat ziet
      if (pvpSub) {
        pvpSub.sendTick({
          y: s.player.y,
          vy: s.player.vy,
          score: Math.floor(s.score),
          alive: false,
          weapon: false,
        });
      }
      setPhase("pvp-finished");
      return;
    }
    if (secondChancesUsedRef.current < MAX_SECOND_CHANCES) {
      // Bevries: zet phase op "second-chance". Loop pauseert vanzelf
      // omdat phaseRef.current !== "playing".
      playSound("hit");
      setPhase("second-chance");
      return;
    }
    triggerGameOver(s);
  }

  // Speler heeft X vragen goed beantwoord → krijgt X levens en gaat door.
  // Score blijft staan, combo reset, obstakels gewist (1 sec respijt).
  function handleSecondChanceContinue(extraLives) {
    const s = stateRef.current;
    if (!s || extraLives < 1) {
      // Geen levens verdiend → gewone game-over
      if (s) triggerGameOver(s);
      return;
    }
    s.lives = extraLives;
    s.combo = 0;
    s.shieldActive = false;
    s.obstacles = [];
    s.powerups = [];
    s.aliens = [];
    s.lasers = [];
    s.warps = [];
    s.ramps = [];
    s.collectibles = [];
    s.weaponUntil = 0;
    s.noObstaclesUntil = 0;
    s.player = makePlayer();
    setSecondChancesUsed((n) => n + 1);
    setHud((h) => ({ ...h, lives: extraLives, combo: 0, mult: 1 }));
    setPhase("playing");
  }

  // Speler kiest "stoppen" in tweede-kans-modal → reguliere game-over.
  function handleSecondChanceGiveUp() {
    const s = stateRef.current;
    if (s) triggerGameOver(s);
  }

  function triggerGameOver(s) {
    const finalScore = Math.floor(s.score);
    playSound("game_over");
    // High-score lokaal bijwerken
    let wasNewHigh = false;
    try {
      const prev = parseInt(localStorage.getItem(HIGH_SCORE_KEY) || "0", 10) || 0;
      if (finalScore > prev) {
        localStorage.setItem(HIGH_SCORE_KEY, String(finalScore));
        setHighScore(finalScore);
        wasNewHigh = true;
      }
    } catch {}
    setPhase("gameover");
    onScoreSubmit?.({
      score: finalScore,
      level: s.level,
      bestCombo: s.bestCombo,
      obliterates: s.totalObliterates,
      isNewHigh: wasNewHigh,
      isDaily: s.isDaily,
      dailyDate: s.dailyDate,
    });
  }

  function showAchievement(ach) {
    setAchievementToast(ach);
    setUnlockedCount(unlockedRef.current.size);
    setTimeout(() => setAchievementToast(null), 2400);
  }

  // ────────────────────────────────────────────────────
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 480,
        margin: "0 auto",
        padding: 12,
        boxSizing: "border-box",
      }}
    >
      <canvas
        ref={canvasRef}
        width={CANVAS_W}
        height={CANVAS_H}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          background: "#000",
          touchAction: "none",
          borderRadius: 18,
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      />

      {/* HUD — alleen tijdens playing/paused */}
      {(phase === "playing" || phase === "paused") && (
        <HUD
          {...hud}
          highScore={highScore}
          muted={muted}
          onPause={() => setPhase("paused")}
          onMute={toggleMute}
        />
      )}

      {/* PvP score-bar bovenaan tijdens spel */}
      {isPvP && (phase === "playing" || phase === "paused" || phase === "pvp-finished") && (
        <PvPScoreBar
          you={{
            name: playerName,
            score: hud.score,
            color: pvpRole === "host" ? "#42a5f5" : "#ff5252",
            label: pvpRole === "host" ? "Blauw" : "Rood",
            alive: hud.lives > 0,
          }}
          opponent={{
            name: pvpRole === "host" ? pvpMatch.guest_name : pvpMatch.host_name,
            score: opponentRef.current.score,
            color: pvpRole === "host" ? "#ff5252" : "#42a5f5",
            label: pvpRole === "host" ? "Rood" : "Blauw",
            alive: opponentRef.current.alive,
          }}
        />
      )}

      {phase === "start" && (
        <StartScreen
          highScore={highScore}
          onStartNormal={() => startCountdown({ daily: false })}
          onStartDaily={() => startCountdown({ daily: true })}
          onShowAchievements={() => setShowAchievements(true)}
          onChallengeFriend={onChallengeFriend}
          unlockedCount={unlockedCount}
          dailyDate={todayUtcString()}
        />
      )}
      {phase === "countdown" && <CountdownOverlay n={countdown} />}
      {phase === "paused" && (
        <PauseMenu onResume={() => setPhase("playing")} onQuit={onClose} />
      )}
      {phase === "second-chance" && (
        <SecondChance
          playerName={playerName}
          chancesUsed={secondChancesUsed}
          maxChances={MAX_SECOND_CHANCES}
          onContinue={handleSecondChanceContinue}
          onGiveUp={handleSecondChanceGiveUp}
        />
      )}
      {phase === "gameover" && (
        <GameOverScreen
          score={hud.score}
          level={hud.level}
          highScore={highScore}
          isNewHigh={hud.score >= highScore && hud.score > 0}
          playerName={playerName}
          isDaily={isDaily}
          onReplay={restart}
          onClose={onClose}
        />
      )}
      {phase === "pvp-finished" && pvpMatch && (
        <PvPEndScreen
          yourName={playerName}
          yourScore={hud.score}
          yourRole={pvpRole}
          opponentName={pvpRole === "host" ? pvpMatch.guest_name : pvpMatch.host_name}
          opponentScore={opponentRef.current.score}
          opponentAlive={opponentRef.current.alive}
          matchCode={pvpMatch.id}
          pvpSub={pvpSub}
          onClose={onClose}
        />
      )}
      {tierFlash && <TierFlash text={tierFlash.text} />}
      {achievementToast && <AchievementToast {...achievementToast} />}
      {showAchievements && (
        <AchievementsScreen
          unlockedRef={unlockedRef}
          onClose={() => setShowAchievements(false)}
        />
      )}
    </div>
  );
}

// ═══════════════════════ Game state ═══════════════════════

function createGameState(opts = {}) {
  const isDaily = !!opts.isDaily;
  const dailyDate = opts.dailyDate || null;
  // rng: deterministisch bij Daily, anders Math.random.
  const rng = opts.rng || (isDaily ? makeRng(dailySeed()) : Math.random);
  return {
    score: 0,
    combo: 0,
    bestCombo: 0,
    lives: 3,
    level: 1,
    totalObliterates: 0,
    theme: themeForLevel(1),
    input: { tapped: false },
    player: makePlayer(),
    obstacles: [],
    powerups: [],
    stars: [],
    particles: [],
    aliens: [],            // 🛸 vijanden tijdens weapon-modus
    lasers: [],            // ⚡ auto-fire projectielen
    warps: [],             // 🌀 portals naar hogere levels
    ramps: [],             // 🛹 schansen + loopings
    collectibles: [],      // 💎 hartjes (+leven) en ringen (+score) tijdens schans
    noObstaclesUntil: 0,   // safe-zone na schans/loop — geen grond-obstakels
    shake: 0,
    shieldActive: false,
    slowmoUntil: 0,
    multiplierBoostUntil: 0,
    weaponUntil: 0,        // wapen-modus actief tot deze ms
    weaponSpawnedAliens: 0,// max 3 aliens per weapon-burst
    weaponLastSpawn: 0,    // ms van laatste alien-spawn
    weaponLastShot: 0,     // ms van laatste auto-fire
    rng,
    isDaily,
    dailyDate,
  };
}

function spawnObstacle(s) {
  const types = obstacleVarietyFor(s.level);
  const type = types[Math.floor(s.rng() * types.length)];
  // Tuning 2026-04-29: Mark wil 50% minder grond-hindernissen (spikes/blocks/
  // walls/doubles). Als RNG een grond-type kiest, met 50% kans helemaal niet
  // spawnen. "moving" (zwevend) blijft volledig — dan blijft er gameplay over.
  if (type !== "moving" && s.rng() < 0.5) return;
  const presets = {
    block: { w: 30, h: 30, y: PHYSICS.groundY - 30 },
    spike: { w: 22, h: 28, y: PHYSICS.groundY - 28 },
    wall: { w: 26, h: 56, y: PHYSICS.groundY - 56 },
    moving: { w: 26, h: 26, baseY: PHYSICS.groundY - 100, y: PHYSICS.groundY - 100, dy: 1, phase: 0 },
    double: { w: 60, h: 30, y: PHYSICS.groundY - 30 },
  };
  s.obstacles.push({ x: CANVAS_W + 30, type, scored: false, dead: false, ...presets[type] });
}

function spawnPowerup(s) {
  // 4 power-ups in rotation; weapon ~25% kans (gelijk verdeeld).
  const kinds = ["shield", "slowmo", "multiplier", "weapon"];
  s.powerups.push({
    x: CANVAS_W + 20,
    y: PHYSICS.groundY - 90,
    kind: kinds[Math.floor(s.rng() * kinds.length)],
    w: 26,
    h: 26,
    dead: false,
  });
}

// 🛸 Alien — vliegt hoog, langzamer dan obstakels. Geactiveerd alleen
// tijdens weapon-modus. Mark wil "3 aliens per 20 sec wapen".
function spawnAlien(s) {
  // Hoogte tussen y=60 en y=160 (ruim boven jump-bereik).
  s.aliens.push({
    x: CANVAS_W + 30,
    y: 60 + s.rng() * 100,
    w: 28,
    h: 24,
    dy: (s.rng() - 0.5) * 0.6, // lichte verticale drift
    phase: s.rng() * Math.PI * 2,
    dead: false,
    hp: 1,
  });
}

// ⚡ Laser — projectiel vanuit speler horizontaal naar rechts.
function spawnLaser(s) {
  s.lasers.push({
    x: PHYSICS.playerX + 30,
    y: s.player.y + 10,
    w: 14,
    h: 4,
    dead: false,
  });
}

// 🛹 Schans of looping — beide triggeren super-jump. 70% schans, 30% loop.
// Loop = extended schans: meer ringen + gegarandeerd hartje.
function spawnRamp(s) {
  const isLoop = s.rng() < 0.3;
  s.ramps.push({
    x: CANVAS_W + 30,
    y: PHYSICS.groundY - 26,
    w: 36,
    h: 26,
    type: isLoop ? "loop" : "schans",
    dead: false,
  });
}

// Plaatst hartjes + ringen langs de boog van een super-jump zodat de speler
// ze tijdens de vlucht oppakt. Wiskunde: speler-y(t) = y₀ + (-17)t + 0.35t²
// (jumpVelocity -17, gravity 0.7). Wereld beweegt links met `speed`, dus
// een collectible op x = playerX + speed·t ontmoet de speler bij frame t.
function spawnRampCollectibles(s, isLoop, speed) {
  // Frames: midden van de stijg-/daal-fase, plus piek.
  // Boog duurt ~48 frames. Ringen op 8/16/24/32/40, hartje op 24 (piek).
  const frames = isLoop ? [8, 14, 20, 26, 32, 38, 44] : [10, 20, 30, 40];
  for (const t of frames) {
    const y = PHYSICS.groundY - PHYSICS.playerSize + (-17 * t) + 0.5 * 0.7 * t * t;
    s.collectibles.push({
      x: PHYSICS.playerX + speed * t,
      y: Math.max(50, y - 6),
      w: 18,
      h: 18,
      kind: "ring",
      dead: false,
    });
  }
  // Hartje: bij loop altijd, bij schans 25% kans. Op het piekmoment (t=24).
  if (isLoop || s.rng() < 0.25) {
    const t = 24;
    const y = PHYSICS.groundY - PHYSICS.playerSize + (-17 * t) + 0.5 * 0.7 * t * t;
    s.collectibles.push({
      x: PHYSICS.playerX + speed * t,
      y: Math.max(40, y - 18),
      w: 22,
      h: 22,
      kind: "heart",
      dead: false,
    });
  }
}

// 🌀 Warp tunnel — portal-cirkel die over de baan beweegt. Bij contact:
// 1-3 levels omhoog. Niet voor level 8+ (cap is 10, weinig zin).
function spawnWarp(s) {
  s.warps.push({
    x: CANVAS_W + 40,
    y: PHYSICS.groundY - 80, // op springbare hoogte
    w: 50,
    h: 60,
    rot: 0,
    dead: false,
  });
}

function spawnStar(s) {
  s.stars.push({
    x: CANVAS_W + 20,
    y: PHYSICS.groundY - 60 - s.rng() * 70,
    w: 16,
    h: 16,
    dead: false,
  });
}

function emitParticles(s, kind, x = PHYSICS.playerX, y = 200) {
  const presets = {
    obliterate: { count: 28, speed: 7, color: s.theme.accent, life: 32 },
    hit: { count: 14, speed: 5, color: "#ff5252", life: 26 },
    level_up: { count: 60, speed: 9, color: s.theme.accent, life: 70 },
    collect: { count: 8, speed: 3, color: "#ffd54f", life: 20 },
    powerup: { count: 16, speed: 5, color: "#80deea", life: 28 },
    shield: { count: 20, speed: 4, color: "#42a5f5", life: 24 },
  };
  const cfg = presets[kind] || presets.hit;
  for (let i = 0; i < cfg.count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = cfg.speed * (0.4 + Math.random() * 0.6);
    s.particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      color: cfg.color,
      life: cfg.life,
      size: 2 + Math.random() * 4,
    });
  }
}

// ═══════════════════════ Render ═══════════════════════

function render(canvas, s, hintObstacle) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;

  const shx = (Math.random() - 0.5) * s.shake;
  const shy = (Math.random() - 0.5) * s.shake;
  ctx.save();
  ctx.translate(shx, shy);

  // Achtergrond gradient
  const grd = ctx.createLinearGradient(0, 0, 0, H);
  grd.addColorStop(0, s.theme.bg[0]);
  grd.addColorStop(1, s.theme.bg[1]);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, W, H);

  // Slowmo-tint
  if (performance.now() < s.slowmoUntil) {
    ctx.fillStyle = "rgba(171, 71, 188, 0.18)";
    ctx.fillRect(0, 0, W, H);
  }

  // Grond
  ctx.fillStyle = s.theme.ground;
  ctx.fillRect(0, PHYSICS.groundY, W, H - PHYSICS.groundY);

  // Sterren
  for (const star of s.stars) {
    ctx.fillStyle = "#ffd54f";
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#ffd54f";
    ctx.beginPath();
    ctx.arc(star.x + star.w / 2, star.y + star.h / 2, star.w / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  // Power-ups
  for (const p of s.powerups) {
    const colors = {
      shield: "#42a5f5",
      slowmo: "#ab47bc",
      multiplier: "#ffd54f",
      weapon: "#ff5252",
    };
    ctx.fillStyle = colors[p.kind] || s.theme.accent;
    ctx.shadowBlur = 14;
    ctx.shadowColor = colors[p.kind] || s.theme.accent;
    ctx.beginPath();
    ctx.arc(p.x + p.w / 2, p.y + p.h / 2, p.w / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#fff";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";
    const icons = { shield: "🛡", slowmo: "⏱", multiplier: "×", weapon: "⚡" };
    ctx.fillText(icons[p.kind] || "?", p.x + p.w / 2, p.y + p.h / 2 + 5);
  }

  // 🌀 Warp-tunnels — concentric draaiende ringen, blauw/cyaan.
  for (const w of s.warps) {
    const cx = w.x + w.w / 2;
    const cy = w.y + w.h / 2;
    const rings = 4;
    for (let r = 0; r < rings; r++) {
      const radius = (w.w / 2) * (1 - r * 0.18);
      const hue = 180 + r * 12;
      ctx.strokeStyle = `hsla(${hue}, 90%, 60%, ${0.85 - r * 0.15})`;
      ctx.lineWidth = 3;
      ctx.shadowBlur = 14;
      ctx.shadowColor = `hsl(${hue}, 90%, 60%)`;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, w.rot + r * 0.4, w.rot + r * 0.4 + Math.PI * 1.6);
      ctx.stroke();
    }
    ctx.shadowBlur = 0;
  }

  // 🛹 Schansen & loopings
  for (const r of s.ramps) {
    if (r.type === "loop") {
      // Looping: gele cirkel-arc
      const cx = r.x + r.w / 2;
      const cy = r.y + r.h / 2;
      ctx.strokeStyle = "#ffeb3b";
      ctx.lineWidth = 4;
      ctx.shadowBlur = 14;
      ctx.shadowColor = "#ffeb3b";
      ctx.beginPath();
      ctx.arc(cx, cy - 8, r.w / 2 + 4, 0, Math.PI * 2);
      ctx.stroke();
      // Tweede ring binnen voor diepte
      ctx.strokeStyle = "rgba(255, 235, 59, 0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy - 8, r.w / 2 - 2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;
    } else {
      // Schans: groene driehoek-helling (hoog rechts)
      ctx.fillStyle = "#00c853";
      ctx.shadowBlur = 12;
      ctx.shadowColor = "#69f0ae";
      ctx.beginPath();
      ctx.moveTo(r.x, r.y + r.h);
      ctx.lineTo(r.x + r.w, r.y);
      ctx.lineTo(r.x + r.w, r.y + r.h);
      ctx.closePath();
      ctx.fill();
      // Pijl-omhoog op de schans
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = "bold 14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("↗", r.x + r.w * 0.65, r.y + r.h * 0.5);
      ctx.shadowBlur = 0;
    }
  }

  // 💎 Collectibles
  for (const c of s.collectibles) {
    const cx = c.x + c.w / 2;
    const cy = c.y + c.h / 2;
    if (c.kind === "heart") {
      ctx.shadowBlur = 16;
      ctx.shadowColor = "#ff5252";
      ctx.fillStyle = "#ff5252";
      ctx.font = "bold 22px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("❤️", cx, cy + 8);
      ctx.shadowBlur = 0;
    } else {
      // Ring: cyan cirkel met holle midden
      ctx.strokeStyle = "#00e5ff";
      ctx.lineWidth = 3;
      ctx.shadowBlur = 12;
      ctx.shadowColor = "#00e5ff";
      ctx.beginPath();
      ctx.arc(cx, cy, c.w / 2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
  }

  // 🛸 Aliens
  for (const a of s.aliens) {
    if (a.dead) continue;
    const cx = a.x + a.w / 2;
    const cy = a.y + a.h / 2;
    // Body (UFO-disc)
    ctx.fillStyle = "#ff8a80";
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#ff5252";
    ctx.beginPath();
    ctx.ellipse(cx, cy, a.w / 2, a.h / 2.5, 0, 0, Math.PI * 2);
    ctx.fill();
    // Cockpit
    ctx.fillStyle = "#ffeb3b";
    ctx.beginPath();
    ctx.ellipse(cx, cy - 5, a.w / 4, a.h / 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  // ⚡ Lasers
  for (const l of s.lasers) {
    ctx.fillStyle = "#ffeb3b";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#ff5252";
    ctx.fillRect(l.x, l.y, l.w, l.h);
    ctx.shadowBlur = 0;
  }

  // Obstakels
  for (const o of s.obstacles) {
    const isHint = o === hintObstacle;
    if (isHint) {
      // Ring rondom obstakel
      ctx.strokeStyle = "#ffeb3b";
      ctx.lineWidth = 3;
      ctx.shadowBlur = 18;
      ctx.shadowColor = "#ffeb3b";
      ctx.strokeRect(o.x - 4, o.y - 4, o.w + 8, o.h + 8);
      ctx.shadowBlur = 0;
    }
    ctx.fillStyle = s.theme.obstacle;
    if (o.type === "spike") {
      ctx.beginPath();
      ctx.moveTo(o.x, o.y + o.h);
      ctx.lineTo(o.x + o.w / 2, o.y);
      ctx.lineTo(o.x + o.w, o.y + o.h);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.fillRect(o.x, o.y, o.w, o.h);
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.fillRect(o.x, o.y, o.w, 3);
    }
  }

  // Player (orb met glow)
  const pulse = s.player.didTap ? 1.15 : 1;
  ctx.fillStyle = s.theme.accent;
  ctx.shadowBlur = 24;
  ctx.shadowColor = s.theme.accent;
  ctx.beginPath();
  ctx.arc(
    PHYSICS.playerX + PHYSICS.playerSize / 2,
    s.player.y + PHYSICS.playerSize / 2,
    (PHYSICS.playerSize / 2) * pulse,
    0,
    Math.PI * 2
  );
  ctx.fill();
  ctx.shadowBlur = 0;

  // Shield-ring
  if (s.shieldActive) {
    ctx.strokeStyle = "#42a5f5";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(
      PHYSICS.playerX + PHYSICS.playerSize / 2,
      s.player.y + PHYSICS.playerSize / 2,
      PHYSICS.playerSize / 2 + 6,
      0,
      Math.PI * 2
    );
    ctx.stroke();
  }

  // Multiplier-glow
  if (performance.now() < s.multiplierBoostUntil) {
    ctx.strokeStyle = "#ffd54f";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(
      PHYSICS.playerX + PHYSICS.playerSize / 2,
      s.player.y + PHYSICS.playerSize / 2,
      PHYSICS.playerSize / 2 + 10,
      0,
      Math.PI * 2
    );
    ctx.stroke();
  }

  // Particles
  for (const p of s.particles) {
    ctx.globalAlpha = Math.max(0, p.life / 30);
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  }
  ctx.globalAlpha = 1;

  ctx.restore();
}

// ═══════════════════════ UI ═══════════════════════

function HUD({ score, combo, level, lives, mult, slowmoActive, multBoostActive, shieldActive, weaponActive, weaponSecondsLeft, highScore, muted, onPause, onMute }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 24,
        left: 24,
        right: 24,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        pointerEvents: "none",
        color: "#fff",
        fontFamily: "Fredoka, sans-serif",
      }}
    >
      <div>
        <div style={{ fontSize: 28, fontWeight: 900, textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>{score}</div>
        <div style={{ fontSize: 11, opacity: 0.85, textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
          Lvl {level} · top {highScore}
        </div>
      </div>
      <div style={{ textAlign: "center", flex: 1, marginTop: 2 }}>
        {combo > 0 && (
          <div
            style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: 999,
              background: "rgba(0,0,0,0.6)",
              fontSize: 16,
              fontWeight: 700,
              color: mult > 1 ? "#ffd54f" : "#fff",
              textShadow: "0 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            🔥 {combo} {mult > 1 && `×${mult}`}
          </div>
        )}
        {/* Power-up icons */}
        <div style={{ marginTop: 4, display: "flex", gap: 4, justifyContent: "center" }}>
          {shieldActive && <PuIcon emoji="🛡" />}
          {slowmoActive && <PuIcon emoji="⏱" />}
          {multBoostActive && <PuIcon emoji="✨" />}
          {weaponActive && <PuIcon emoji={`⚡${weaponSecondsLeft}s`} />}
        </div>
      </div>
      <div style={{ display: "flex", gap: 4, alignItems: "center", pointerEvents: "auto" }}>
        {Array.from({ length: Math.max(3, lives) }).map((_, i) => (
          <span key={i} style={{ fontSize: 16, opacity: i < lives ? 1 : 0.2 }}>❤️</span>
        ))}
        <button
          onClick={onMute}
          aria-label="Mute"
          style={iconBtnStyle}
        >
          {muted ? "🔇" : "🔊"}
        </button>
        <button onClick={onPause} aria-label="Pauze" style={iconBtnStyle}>⏸</button>
      </div>
    </div>
  );
}

const iconBtnStyle = {
  background: "rgba(0,0,0,0.55)",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  width: 30,
  height: 30,
  cursor: "pointer",
  fontSize: 13,
};

function PuIcon({ emoji }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 6px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.15)",
      fontSize: 12,
      backdropFilter: "blur(4px)",
    }}>{emoji}</span>
  );
}

function StartScreen({ highScore, onStartNormal, onStartDaily, onShowAchievements, onChallengeFriend, unlockedCount, dailyDate }) {
  // Stop tap-bubble naar overlay zodat klik op kop niet beide knoppen triggert
  const stop = (e) => e.stopPropagation();
  return (
    <Overlay>
      <div style={{ fontSize: 60 }}>💀</div>
      <h1 style={{ ...overlayTitle, fontSize: 36, letterSpacing: 1, margin: "4px 0 0" }}>OBLITERATOR</h1>
      <div style={{ color: "#ffd54f", fontSize: 12, marginTop: 4 }}>v2 — combo edition</div>
      {highScore > 0 && (
        <div style={{ color: "#bcd", marginTop: 12, fontSize: 13 }}>
          🏆 Persoonlijk record: <strong style={{ color: "#fff" }}>{highScore}</strong>
        </div>
      )}
      <button
        onClick={(e) => { stop(e); onStartNormal(); }}
        onTouchStart={stop}
        style={{
          marginTop: 24,
          padding: "12px 28px",
          background: "linear-gradient(135deg, #00c853, #00a040)",
          color: "#fff",
          border: "none",
          borderRadius: 14,
          fontSize: 15,
          fontWeight: 800,
          cursor: "pointer",
          fontFamily: "Fredoka, sans-serif",
          boxShadow: "0 4px 16px rgba(0,200,83,0.45)",
          letterSpacing: 0.5,
        }}
      >
        ▶ SPELEN
      </button>
      <button
        onClick={(e) => { stop(e); onStartDaily(); }}
        onTouchStart={stop}
        style={{
          marginTop: 10,
          padding: "10px 22px",
          background: "linear-gradient(135deg, #ffd54f, #ff9800)",
          color: "#1a1a1a",
          border: "none",
          borderRadius: 14,
          fontSize: 13,
          fontWeight: 800,
          cursor: "pointer",
          fontFamily: "Fredoka, sans-serif",
          boxShadow: "0 4px 14px rgba(255,213,79,0.4)",
        }}
      >
        🗓️ DAGELIJKSE UITDAGING
      </button>
      {onChallengeFriend && (
        <button
          onClick={(e) => { stop(e); onChallengeFriend(); }}
          onTouchStart={stop}
          style={{
            marginTop: 10,
            padding: "10px 22px",
            background: "linear-gradient(135deg, #42a5f5, #ff5252)",
            color: "#fff",
            border: "none",
            borderRadius: 14,
            fontSize: 13,
            fontWeight: 800,
            cursor: "pointer",
            fontFamily: "Fredoka, sans-serif",
            boxShadow: "0 4px 14px rgba(255,82,82,0.45)",
            letterSpacing: 0.4,
          }}
        >
          ⚔️ DAAG VRIEND UIT (1v1)
        </button>
      )}
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>
        Iedereen wereldwijd: dezelfde obstakels van vandaag ({dailyDate})
      </div>
      <button
        onClick={(e) => { stop(e); onShowAchievements(); }}
        onTouchStart={stop}
        style={{
          marginTop: 14,
          padding: "8px 16px",
          background: "rgba(255,255,255,0.1)",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: 999,
          fontSize: 12,
          fontWeight: 700,
          cursor: "pointer",
          fontFamily: "Fredoka, sans-serif",
        }}
      >
        🏆 Achievements ({unlockedCount}/{TOTAL_ACHIEVEMENTS})
      </button>
      <div style={{ marginTop: 16, fontSize: 11, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, textAlign: "center", maxWidth: 280 }}>
        🎯 Tik om te springen<br />
        💥 Spring vlak boven obstakel = obliterate (×2 punten)<br />
        🔥 Combo bouwt multiplier op (×2 → ×3 → ×5 → ×8)<br />
        ❤️ 3 levens — combo reset bij hit
      </div>
    </Overlay>
  );
}

function CountdownOverlay({ n }) {
  return (
    <Overlay>
      <div style={{ fontSize: 120, fontWeight: 900, color: "#ffd54f", textShadow: "0 8px 32px rgba(0,0,0,0.8)", animation: "popIn 0.4s ease" }}>
        {n}
      </div>
    </Overlay>
  );
}

function PauseMenu({ onResume, onQuit }) {
  return (
    <Overlay>
      <h2 style={overlayTitle}>Pauze</h2>
      <button style={primaryBtn} onClick={onResume}>▶ Doorgaan</button>
      <button style={ghostBtn} onClick={onQuit}>Stoppen</button>
    </Overlay>
  );
}

function GameOverScreen({ score, level, highScore, isNewHigh, playerName, isDaily, onReplay, onClose }) {
  return (
    <Overlay>
      <div style={{ fontSize: 50 }}>💥</div>
      <h2 style={{ ...overlayTitle, fontSize: 26 }}>Game Over</h2>
      {isDaily && (
        <div
          style={{
            background: "linear-gradient(135deg, #ffd54f, #ff9800)",
            color: "#1a1a1a",
            padding: "3px 10px",
            borderRadius: 999,
            fontWeight: 800,
            fontSize: 11,
            marginTop: 4,
          }}
        >
          🗓️ DAGELIJKSE UITDAGING
        </div>
      )}
      <div
        style={{
          fontSize: 52,
          fontWeight: 900,
          color: "#ffd54f",
          margin: "6px 0",
          textShadow: "0 4px 12px rgba(0,0,0,0.5)",
          lineHeight: 1,
        }}
      >
        {score}
      </div>
      <div style={{ color: "#bcd", marginBottom: 8, fontSize: 13 }}>Level bereikt: {level}</div>
      {isNewHigh && !isDaily && (
        <div
          style={{
            background: "linear-gradient(135deg, #ffd54f, #ff9800)",
            color: "#1a1a1a",
            padding: "5px 12px",
            borderRadius: 999,
            fontWeight: 800,
            fontSize: 12,
            marginBottom: 8,
            boxShadow: "0 4px 16px rgba(255,213,79,0.5)",
          }}
        >
          🏆 NIEUW PERSOONLIJK RECORD
        </div>
      )}
      <Leaderboard playerName={playerName} myScore={score} initialTab={isDaily ? "daily" : "all"} />
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button style={primaryBtn} onClick={onReplay}>↻ Nog eens</button>
        <button style={ghostBtn} onClick={onClose}>Terug</button>
      </div>
    </Overlay>
  );
}

function Leaderboard({ playerName, myScore, initialTab = "all" }) {
  const [scores, setScores] = useState(null);
  const [tab, setTab] = useState(initialTab); // "all" | "today" | "daily"

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        let q = supabase
          .from("obliterator_scores")
          .select("player_name, score, level, created_at")
          .order("score", { ascending: false })
          .limit(10);
        if (tab === "daily") {
          // Daily Challenge — alleen runs van vandaag's seed.
          const today = todayUtcString();
          q = q.like("level", `v2-daily-${today}-%`);
        } else {
          // All-time / vandaag — alle v2-runs (incl. daily, omdat skill telt)
          q = q.like("level", "v2-%");
          if (tab === "today") {
            const since = new Date();
            since.setHours(0, 0, 0, 0);
            q = q.gte("created_at", since.toISOString());
          }
        }
        const { data } = await q;
        if (!cancelled) setScores(Array.isArray(data) ? data : []);
      } catch {
        if (!cancelled) setScores([]);
      }
    })();
    return () => { cancelled = true; };
  }, [tab]);

  return (
    <div style={{ width: "100%", maxWidth: 280, marginTop: 6 }}>
      <div style={{ display: "flex", gap: 4, marginBottom: 6, justifyContent: "center", flexWrap: "wrap" }}>
        <button
          onClick={() => setTab("all")}
          style={{ ...tabBtn, ...(tab === "all" ? tabBtnActive : {}) }}
        >
          All-time
        </button>
        <button
          onClick={() => setTab("today")}
          style={{ ...tabBtn, ...(tab === "today" ? tabBtnActive : {}) }}
        >
          Vandaag
        </button>
        <button
          onClick={() => setTab("daily")}
          style={{ ...tabBtn, ...(tab === "daily" ? tabBtnActive : {}) }}
        >
          🗓️ Daily
        </button>
      </div>
      <div
        style={{
          background: "rgba(0,0,0,0.4)",
          borderRadius: 10,
          padding: 8,
          maxHeight: 160,
          overflow: "auto",
          fontSize: 12,
          fontFamily: "Nunito, sans-serif",
        }}
      >
        {scores === null && <div style={{ color: "#bcd", textAlign: "center", padding: 8 }}>Laden…</div>}
        {scores && scores.length === 0 && (
          <div style={{ color: "#bcd", textAlign: "center", padding: 8 }}>Nog geen scores. Wees de eerste!</div>
        )}
        {scores && scores.map((row, i) => {
          const isMe = row.player_name === playerName && row.score === myScore;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "4px 6px",
                borderRadius: 6,
                background: isMe ? "rgba(255,213,79,0.2)" : "transparent",
                color: isMe ? "#ffd54f" : "#fff",
                fontWeight: isMe ? 700 : 400,
              }}
            >
              <span>{i + 1}. {row.player_name}</span>
              <span>{row.score}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TierFlash({ text }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: 56,
        fontWeight: 900,
        color: "#ffd54f",
        fontFamily: "Fredoka, sans-serif",
        textShadow: "0 8px 32px rgba(0,0,0,0.7)",
        animation: "tierFlash 1.2s ease forwards",
        pointerEvents: "none",
        zIndex: 25,
        letterSpacing: 2,
      }}
    >
      {text}
      <style>{`
        @keyframes tierFlash {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          20%  { opacity: 1; transform: translate(-50%, -50%) scale(1.3); }
          50%  { opacity: 1; transform: translate(-50%, -50%) scale(1.0); }
          100% { opacity: 0; transform: translate(-50%, -80%) scale(0.9); }
        }
      `}</style>
    </div>
  );
}

function AchievementsScreen({ unlockedRef, onClose }) {
  const unlockedCount = unlockedRef.size;
  const pct = Math.round((unlockedCount / TOTAL_ACHIEVEMENTS) * 100);
  return (
    <Overlay>
      <div style={{ width: "100%", maxWidth: 320, display: "flex", flexDirection: "column", alignItems: "stretch" }}>
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <div style={{ fontSize: 36 }}>🏆</div>
          <h2 style={{ ...overlayTitle, fontSize: 22, margin: "4px 0" }}>Achievements</h2>
          <div style={{ color: "#bcd", fontSize: 12 }}>
            {unlockedCount} van {TOTAL_ACHIEVEMENTS} unlocked · {pct}%
          </div>
          {/* Progress bar */}
          <div
            style={{
              height: 6,
              background: "rgba(255,255,255,0.1)",
              borderRadius: 999,
              marginTop: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${pct}%`,
                background: "linear-gradient(90deg, #ffd54f, #ff9800)",
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            maxHeight: 360,
            overflowY: "auto",
            padding: "4px 2px",
          }}
        >
          {ACHIEVEMENTS.map((ach) => {
            const isUnlocked = unlockedRef.has(ach.id);
            return (
              <div
                key={ach.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 10px",
                  borderRadius: 10,
                  background: isUnlocked
                    ? "rgba(255,213,79,0.12)"
                    : "rgba(255,255,255,0.04)",
                  border: isUnlocked
                    ? "1px solid rgba(255,213,79,0.45)"
                    : "1px solid rgba(255,255,255,0.08)",
                  opacity: isUnlocked ? 1 : 0.55,
                }}
              >
                <span
                  style={{
                    fontSize: 24,
                    filter: isUnlocked ? "none" : "grayscale(1)",
                  }}
                >
                  {isUnlocked ? ach.icon : "🔒"}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: isUnlocked ? "#ffd54f" : "rgba(255,255,255,0.7)",
                      fontFamily: "Fredoka, sans-serif",
                    }}
                  >
                    {ach.title}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "Nunito, sans-serif",
                    }}
                  >
                    {ach.desc}
                  </div>
                </div>
                {isUnlocked && (
                  <span style={{ fontSize: 16, color: "#69f0ae" }}>✓</span>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={onClose}
          style={{
            ...primaryBtn,
            marginTop: 14,
            background: "linear-gradient(135deg, #00c853, #00a040)",
          }}
        >
          Terug
        </button>
      </div>
    </Overlay>
  );
}

function AchievementToast({ icon, title, desc }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 80,
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0,0,0,0.92)",
        color: "#fff",
        padding: "12px 18px",
        borderRadius: 14,
        display: "flex",
        alignItems: "center",
        gap: 12,
        fontFamily: "Fredoka, sans-serif",
        boxShadow: "0 8px 28px rgba(0,0,0,0.6)",
        border: "1px solid rgba(255,213,79,0.4)",
        zIndex: 30,
        animation: "slideDown 0.3s ease",
      }}
    >
      <span style={{ fontSize: 32 }}>{icon}</span>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#ffd54f" }}>Achievement: {title}</div>
        <div style={{ fontSize: 11, opacity: 0.85 }}>{desc}</div>
      </div>
    </div>
  );
}

const Overlay = ({ children, onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      inset: 12,
      background: "rgba(0,0,0,0.78)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 18,
      fontFamily: "Fredoka, sans-serif",
      backdropFilter: "blur(6px)",
      cursor: onClick ? "pointer" : "default",
      padding: "20px 16px",
      boxSizing: "border-box",
      overflow: "auto",
    }}
  >
    {children}
  </div>
);

const overlayTitle = { color: "#fff", fontSize: 30, margin: "8px 0", textAlign: "center" };

const primaryBtn = {
  padding: "12px 24px",
  background: "linear-gradient(135deg, #00c853, #00a040)",
  color: "#fff",
  border: "none",
  borderRadius: 12,
  fontSize: 15,
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: "inherit",
  boxShadow: "0 4px 14px rgba(0,200,83,0.4)",
};

const ghostBtn = {
  padding: "12px 24px",
  background: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: 12,
  fontSize: 14,
  cursor: "pointer",
  fontFamily: "inherit",
};

const tabBtn = {
  background: "rgba(0,0,0,0.4)",
  color: "rgba(255,255,255,0.7)",
  border: "1px solid rgba(255,255,255,0.15)",
  padding: "4px 12px",
  borderRadius: 999,
  fontSize: 11,
  cursor: "pointer",
  fontFamily: "Fredoka, sans-serif",
};

const tabBtnActive = {
  background: "rgba(255,213,79,0.2)",
  color: "#ffd54f",
  borderColor: "#ffd54f",
};

// ═══════════════════════ PvP UI ═══════════════════════
function PvPScoreBar({ you, opponent }) {
  const winning = you.score > opponent.score;
  return (
    <div
      style={{
        position: "absolute",
        top: 4,
        left: 12,
        right: 12,
        display: "flex",
        gap: 6,
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      <PvPSidePanel side="left" entry={you} highlight={winning} youLabel="JIJ" />
      <PvPSidePanel side="right" entry={opponent} highlight={!winning} />
    </div>
  );
}

function PvPSidePanel({ side, entry, highlight, youLabel }) {
  return (
    <div
      style={{
        flex: 1,
        background: highlight
          ? `linear-gradient(135deg, ${entry.color}, rgba(0,0,0,0.4))`
          : "rgba(0,0,0,0.55)",
        border: `1px solid ${highlight ? entry.color : "rgba(255,255,255,0.15)"}`,
        borderRadius: 10,
        padding: "5px 10px",
        textAlign: side === "left" ? "left" : "right",
        backdropFilter: "blur(4px)",
        opacity: entry.alive ? 1 : 0.55,
      }}
    >
      <div
        style={{
          fontFamily: "Fredoka, sans-serif",
          fontSize: 10,
          fontWeight: 700,
          color: "#fff",
          opacity: 0.9,
          textShadow: "0 1px 2px rgba(0,0,0,0.5)",
          textTransform: "uppercase",
          letterSpacing: 0.6,
        }}
      >
        {youLabel || entry.label}
        {!entry.alive && " 💀"}
      </div>
      <div
        style={{
          fontFamily: "Fredoka, sans-serif",
          fontSize: 18,
          fontWeight: 900,
          color: "#fff",
          textShadow: "0 2px 4px rgba(0,0,0,0.5)",
          lineHeight: 1.1,
        }}
      >
        {entry.score}
      </div>
      <div
        style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.85)",
          fontFamily: "Nunito, sans-serif",
          textShadow: "0 1px 2px rgba(0,0,0,0.5)",
        }}
      >
        {entry.name || "—"}
      </div>
    </div>
  );
}

function PvPEndScreen({
  yourName,
  yourScore,
  yourRole,
  opponentName,
  opponentScore,
  opponentAlive,
  matchCode,
  pvpSub,
  onClose,
}) {
  // Wachten tot tegenstander ook dood is. Toon "wachten op tegenstander"
  // als zij nog leven.
  const [waiting, setWaiting] = useState(opponentAlive);

  // Polling — elke 200ms check ref
  useEffect(() => {
    if (!opponentAlive) {
      setWaiting(false);
      return;
    }
    const id = setInterval(() => {
      // We ontvangen tick-updates via subscribeMatch handler die opponentRef
      // muteert; de prop opponentAlive wordt hier niet bijgewerkt. Re-check.
      if (!pvpSub) return;
    }, 200);
    return () => clearInterval(id);
  }, [opponentAlive, pvpSub]);

  // Watcher: re-render als opponent uiteindelijk dood gaat. Hack: poll prop.
  useEffect(() => {
    if (!opponentAlive) setWaiting(false);
  }, [opponentAlive]);

  const youWon = !waiting && yourScore > opponentScore;
  const tied = !waiting && yourScore === opponentScore;
  const yourColor = yourRole === "host" ? "#42a5f5" : "#ff5252";
  const oppColor = yourRole === "host" ? "#ff5252" : "#42a5f5";

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        zIndex: 60,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 380,
          background: "var(--color-bg-overlay)",
          border: "2px solid var(--color-game-energy)",
          borderRadius: 18,
          padding: 20,
          textAlign: "center",
          boxShadow: "var(--shadow-glow-game), var(--shadow-lg)",
          fontFamily: "var(--font-body)",
          color: "#fff",
        }}
      >
        {waiting ? (
          <>
            <div style={{ fontSize: 38, marginBottom: 6 }}>⏳</div>
            <div style={{ fontFamily: "Fredoka, sans-serif", fontSize: 18, fontWeight: 800 }}>
              Jouw run zit erop!
            </div>
            <div style={{ color: "var(--color-text-muted)", fontSize: 13, marginTop: 6 }}>
              Wachten tot {opponentName || "tegenstander"} ook klaar is…
            </div>
            <div
              style={{
                marginTop: 18,
                fontFamily: "Fredoka, sans-serif",
                fontSize: 32,
                fontWeight: 900,
                color: yourColor,
              }}
            >
              {yourScore}
            </div>
            <button onClick={onClose} style={{ ...ghostBtn, marginTop: 16 }}>
              Stoppen
            </button>
          </>
        ) : (
          <>
            <div style={{ fontSize: 50, marginBottom: 4 }}>
              {tied ? "🤝" : youWon ? "🏆" : "💪"}
            </div>
            <div
              style={{
                fontFamily: "Fredoka, sans-serif",
                fontSize: 22,
                fontWeight: 900,
                color: tied ? "#ffd54f" : youWon ? "var(--color-success)" : "var(--color-game-energy)",
                marginBottom: 14,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              {tied ? "Gelijkspel!" : youWon ? "Jij wint!" : "Verloren"}
            </div>
            <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
              <ScoreCol name={yourName} score={yourScore} color={yourColor} highlight={youWon || tied} label="JIJ" />
              <ScoreCol name={opponentName} score={opponentScore} color={oppColor} highlight={!youWon && !tied} />
            </div>
            <div
              style={{
                fontSize: 11,
                color: "var(--color-text-muted)",
                marginBottom: 14,
                fontFamily: "var(--font-mono)",
              }}
            >
              match: {matchCode}
            </div>
            <button onClick={onClose} style={{ ...primaryBtn, width: "100%" }}>
              Terug naar home
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function ScoreCol({ name, score, color, highlight, label }) {
  return (
    <div
      style={{
        flex: 1,
        background: highlight ? `linear-gradient(135deg, ${color}, rgba(0,0,0,0.5))` : "rgba(0,0,0,0.4)",
        border: `1px solid ${highlight ? color : "rgba(255,255,255,0.15)"}`,
        borderRadius: 12,
        padding: "10px 8px",
      }}
    >
      <div
        style={{
          fontFamily: "Fredoka, sans-serif",
          fontSize: 10,
          fontWeight: 800,
          color: "#fff",
          opacity: 0.85,
          letterSpacing: 0.6,
          marginBottom: 2,
        }}
      >
        {label || name}
      </div>
      <div
        style={{
          fontFamily: "Fredoka, sans-serif",
          fontSize: 24,
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.1,
        }}
      >
        {score}
      </div>
      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>{name}</div>
    </div>
  );
}
