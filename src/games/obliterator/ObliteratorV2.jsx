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
import { themeForLevel } from "./data/themes.js";
import { playSound, unlockAudio, setMuted, isMuted } from "./audio.js";
import supabase from "../../supabase.js";

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
export default function ObliteratorV2({ playerName = "Speler", onClose, onScoreSubmit }) {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const phaseRef = useRef("start");
  const unlockedRef = useRef(loadUnlocked());

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

  // Sync phase met ref voor de game loop
  useEffect(() => { phaseRef.current = phase; }, [phase]);

  // Init state on mount
  useEffect(() => {
    stateRef.current = createGameState();
  }, []);

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

      // Spawn
      if (ts - lastSpawnTime > spawnIntervalFor(s.level)) {
        spawnObstacle(s);
        lastSpawnTime = ts;
        if (Math.random() < powerupChanceFor(s.level)) spawnPowerup(s);
        if (Math.random() < 0.4) spawnStar(s);
      }

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
            triggerGameOver(s);
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

      // Particles
      s.particles = s.particles
        .map((p) => ({ ...p, x: p.x + p.vx, y: p.y + p.vy, life: p.life - 1, vy: p.vy + 0.3 }))
        .filter((p) => p.life > 0);

      // Schermshake decay
      if (s.shake > 0) s.shake = Math.max(0, s.shake - 0.6);

      // ─── Render ─────────────────────────────────────
      render(canvasRef.current, s, hintObstacle);

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
        });
        lastHudPush = ts;
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

      // Phase-aware: start → countdown, countdown → wachten, playing → jump
      if (phaseRef.current === "start") {
        startCountdown();
        return;
      }
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
  function startCountdown() {
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
    stateRef.current = createGameState();
    setHud({ score: 0, combo: 0, level: 1, lives: 3, mult: 1 });
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
    if (p.kind === "shield") s.shieldActive = true;
    else if (p.kind === "slowmo") s.slowmoUntil = performance.now() + 3000;
    else if (p.kind === "multiplier") s.multiplierBoostUntil = performance.now() + 5000;
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
    });
  }

  function showAchievement(ach) {
    setAchievementToast(ach);
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

      {phase === "start" && <StartScreen highScore={highScore} onTap={startCountdown} />}
      {phase === "countdown" && <CountdownOverlay n={countdown} />}
      {phase === "paused" && (
        <PauseMenu onResume={() => setPhase("playing")} onQuit={onClose} />
      )}
      {phase === "gameover" && (
        <GameOverScreen
          score={hud.score}
          level={hud.level}
          highScore={highScore}
          isNewHigh={hud.score >= highScore && hud.score > 0}
          playerName={playerName}
          onReplay={restart}
          onClose={onClose}
        />
      )}
      {tierFlash && <TierFlash text={tierFlash.text} />}
      {achievementToast && <AchievementToast {...achievementToast} />}
    </div>
  );
}

// ═══════════════════════ Game state ═══════════════════════

function createGameState() {
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
    shake: 0,
    shieldActive: false,
    slowmoUntil: 0,
    multiplierBoostUntil: 0,
  };
}

function spawnObstacle(s) {
  const types = obstacleVarietyFor(s.level);
  const type = types[Math.floor(Math.random() * types.length)];
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
  const kinds = ["shield", "slowmo", "multiplier"];
  s.powerups.push({
    x: CANVAS_W + 20,
    y: PHYSICS.groundY - 90,
    kind: kinds[Math.floor(Math.random() * kinds.length)],
    w: 26,
    h: 26,
    dead: false,
  });
}

function spawnStar(s) {
  s.stars.push({
    x: CANVAS_W + 20,
    y: PHYSICS.groundY - 60 - Math.random() * 70,
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
    const colors = { shield: "#42a5f5", slowmo: "#ab47bc", multiplier: "#ffd54f" };
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
    const icons = { shield: "🛡", slowmo: "⏱", multiplier: "×" };
    ctx.fillText(icons[p.kind] || "?", p.x + p.w / 2, p.y + p.h / 2 + 5);
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

function HUD({ score, combo, level, lives, mult, slowmoActive, multBoostActive, shieldActive, highScore, muted, onPause, onMute }) {
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
        </div>
      </div>
      <div style={{ display: "flex", gap: 4, alignItems: "center", pointerEvents: "auto" }}>
        {Array.from({ length: 3 }).map((_, i) => (
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

function StartScreen({ highScore, onTap }) {
  return (
    <Overlay onClick={onTap}>
      <div style={{ fontSize: 64 }}>💀</div>
      <h1 style={{ ...overlayTitle, fontSize: 38, letterSpacing: 1 }}>OBLITERATOR</h1>
      <div style={{ color: "#ffd54f", fontSize: 13, marginTop: 4 }}>v2 — combo edition</div>
      {highScore > 0 && (
        <div style={{ color: "#bcd", marginTop: 16, fontSize: 14 }}>
          🏆 Persoonlijk record: <strong style={{ color: "#fff" }}>{highScore}</strong>
        </div>
      )}
      <div style={{ marginTop: 32, padding: "10px 18px", borderRadius: 999, background: "rgba(0,200,83,0.18)", border: "1px solid #00c853", fontSize: 13, fontWeight: 700, color: "#69f0ae", animation: "pulse 1.5s ease infinite" }}>
        TIK OM TE BEGINNEN
      </div>
      <div style={{ marginTop: 22, fontSize: 11, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, textAlign: "center", maxWidth: 280 }}>
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

function GameOverScreen({ score, level, highScore, isNewHigh, playerName, onReplay, onClose }) {
  return (
    <Overlay>
      <div style={{ fontSize: 56 }}>💥</div>
      <h2 style={overlayTitle}>Game Over</h2>
      <div
        style={{
          fontSize: 56,
          fontWeight: 900,
          color: "#ffd54f",
          margin: "8px 0",
          textShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        {score}
      </div>
      <div style={{ color: "#bcd", marginBottom: 8 }}>Level bereikt: {level}</div>
      {isNewHigh && (
        <div
          style={{
            background: "linear-gradient(135deg, #ffd54f, #ff9800)",
            color: "#1a1a1a",
            padding: "6px 14px",
            borderRadius: 999,
            fontWeight: 800,
            fontSize: 13,
            marginBottom: 16,
            boxShadow: "0 4px 16px rgba(255,213,79,0.5)",
          }}
        >
          🏆 NIEUW PERSOONLIJK RECORD
        </div>
      )}
      <Leaderboard playerName={playerName} myScore={score} />
      <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
        <button style={primaryBtn} onClick={onReplay}>↻ Nog eens</button>
        <button style={ghostBtn} onClick={onClose}>Terug</button>
      </div>
    </Overlay>
  );
}

function Leaderboard({ playerName, myScore }) {
  const [scores, setScores] = useState(null);
  const [tab, setTab] = useState("all"); // "all" | "today"

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        let q = supabase
          .from("obliterator_scores")
          .select("player_name, score, level, created_at")
          .like("level", "v2-%")
          .order("score", { ascending: false })
          .limit(10);
        if (tab === "today") {
          const since = new Date();
          since.setHours(0, 0, 0, 0);
          q = q.gte("created_at", since.toISOString());
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
    <div style={{ width: "100%", maxWidth: 280, marginTop: 8 }}>
      <div style={{ display: "flex", gap: 4, marginBottom: 6, justifyContent: "center" }}>
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
