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

const CANVAS_W = 360;
const CANVAS_H = 540;

/**
 * OBLITERATOR V2 — modulair runner-game.
 *
 * Mechanic:
 *   - Tap = jump (één knop).
 *   - Obstakel net passeren met recente tap = OBLITERATE → +50, combo+2.
 *   - Obstakel passeren zonder perfect timing = JUMP → +10, combo+1.
 *   - Hit = life -1, combo reset.
 *
 * State zit in refs voor performance — React state alleen voor HUD, pause,
 * gameover en achievement-toasts.
 */
export default function ObliteratorV2({ playerName = "Speler", onClose, onScoreSubmit }) {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const pausedRef = useRef(false);
  const gameOverRef = useRef(false);
  const unlockedRef = useRef(loadUnlocked());

  const [hud, setHud] = useState({ score: 0, combo: 0, level: 1, lives: 3, mult: 1 });
  const [paused, setPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [achievementToast, setAchievementToast] = useState(null);

  // Init state op mount
  useEffect(() => {
    stateRef.current = createGameState();
  }, []);

  // Game loop
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

      // Pauze + game-over respecteren
      if (pausedRef.current || gameOverRef.current) {
        raf = requestAnimationFrame(tick);
        return;
      }

      // ─── Update ─────────────────────────────────────
      const newLevel = levelFromScore(s.score);
      if (newLevel !== s.level) {
        s.level = newLevel;
        s.theme = themeForLevel(newLevel);
        emitParticles(s, "level_up", PHYSICS.playerX + 20, s.player.y);
        const ach = processEvent({ type: "level_up" }, s, unlockedRef.current);
        if (ach.length) showAchievement(ach[0]);
      }
      const speed = speedFor(s.level);

      // Input → physics
      updatePlayer(s.player, s.input);
      s.input.tapped = false;

      // Spawn
      if (ts - lastSpawnTime > spawnIntervalFor(s.level)) {
        spawnObstacle(s);
        lastSpawnTime = ts;
        if (Math.random() < powerupChanceFor(s.level)) spawnPowerup(s);
        if (Math.random() < 0.4) spawnStar(s);
      }

      // Move + collide obstakels
      for (const o of s.obstacles) {
        o.x -= speed;
        if (o.dy) {
          // Moving obstakel — sinusvormig op en neer
          o.phase = (o.phase || 0) + 0.07;
          o.y = o.baseY + Math.sin(o.phase) * 24;
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
          handleObliterate(s, o);
        } else if (result === "jump") {
          handleJump(s);
          o.scored = true;
        }
      }
      s.obstacles = s.obstacles.filter((o) => o.x > -50 && !o.dead);

      // Move + pickup powerups
      for (const p of s.powerups) {
        p.x -= speed;
        if (pickupCollision(s.player, p)) {
          handlePowerup(s, p);
          p.dead = true;
        }
      }
      s.powerups = s.powerups.filter((p) => p.x > -50 && !p.dead);

      // Move + pickup sterren
      for (const star of s.stars) {
        star.x -= speed;
        if (pickupCollision(s.player, star)) {
          s.score += pointsFor("collect", s.combo);
          emitParticles(s, "collect", star.x, star.y);
          star.dead = true;
        }
      }
      s.stars = s.stars.filter((st) => st.x > -50 && !st.dead);

      // Particles tick
      s.particles = s.particles
        .map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 1,
          vy: p.vy + 0.3,
        }))
        .filter((p) => p.life > 0);

      // Schermshake decay
      if (s.shake > 0) s.shake = Math.max(0, s.shake - 0.6);

      // ─── Render ─────────────────────────────────────
      render(canvasRef.current, s);

      // HUD update — niet elke frame, dat is overkill
      if (ts - lastHudPush > 100) {
        setHud({
          score: Math.floor(s.score),
          combo: s.combo,
          level: s.level,
          lives: s.lives,
          mult: multiplierFor(s.combo).mult,
        });
        lastHudPush = ts;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Sync paused/gameOver state met refs zodat de loop ze ziet
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);
  useEffect(() => {
    gameOverRef.current = gameOver;
  }, [gameOver]);

  // Input handling — touch + mouse + spatie/pijl-omhoog
  useEffect(() => {
    const handleTap = (e) => {
      e.preventDefault();
      if (stateRef.current && !pausedRef.current && !gameOverRef.current) {
        stateRef.current.input.tapped = true;
      }
    };
    const handleKey = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        handleTap(e);
      } else if (e.code === "Escape") {
        setPaused((p) => !p);
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

  // ─── Event-handlers (muteren state direct) ──────────────────
  function handleObliterate(s, obstacle) {
    s.score += pointsFor("obliterate", s.combo);
    s.combo += 2;
    s.bestCombo = Math.max(s.bestCombo, s.combo);
    s.totalObliterates++;
    obstacle.dead = true;
    emitParticles(s, "obliterate", obstacle.x, obstacle.y);
    s.shake = 6;
    const ach = processEvent({ type: "obliterate" }, s, unlockedRef.current);
    if (ach.length) showAchievement(ach[0]);
  }

  function handleJump(s) {
    s.score += pointsFor("jump", s.combo);
    s.combo += 1;
    s.bestCombo = Math.max(s.bestCombo, s.combo);
    const ach = processEvent({ type: "jump" }, s, unlockedRef.current);
    if (ach.length) showAchievement(ach[0]);
  }

  function handleHit(s, obstacle) {
    if (s.shieldActive) {
      s.shieldActive = false;
      emitParticles(s, "shield", PHYSICS.playerX, s.player.y);
      obstacle.dead = true;
      return;
    }
    s.lives = Math.max(0, s.lives - 1);
    s.combo = 0;
    s.shake = 14;
    emitParticles(s, "hit", obstacle.x, obstacle.y);
  }

  function handlePowerup(s, p) {
    s.score += pointsFor("powerup", s.combo);
    emitParticles(s, "powerup", p.x, p.y);
    if (p.kind === "shield") s.shieldActive = true;
    else if (p.kind === "slowmo") s.slowmoUntil = performance.now() + 3000;
    else if (p.kind === "multiplier") s.multiplierBoostUntil = performance.now() + 5000;
  }

  function triggerGameOver(s) {
    gameOverRef.current = true;
    setGameOver(true);
    onScoreSubmit?.({
      score: Math.floor(s.score),
      level: s.level,
      bestCombo: s.bestCombo,
      obliterates: s.totalObliterates,
    });
  }

  function showAchievement(ach) {
    setAchievementToast(ach);
    setTimeout(() => setAchievementToast(null), 2400);
  }

  function restart() {
    stateRef.current = createGameState();
    gameOverRef.current = false;
    setGameOver(false);
    setHud({ score: 0, combo: 0, level: 1, lives: 3, mult: 1 });
  }

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
      <HUD {...hud} onPause={() => setPaused(true)} onClose={onClose} />
      {paused && <PauseMenu onResume={() => setPaused(false)} onQuit={onClose} />}
      {gameOver && (
        <GameOverScreen
          score={hud.score}
          level={hud.level}
          onReplay={restart}
          onClose={onClose}
        />
      )}
      {achievementToast && <AchievementToast {...achievementToast} />}
    </div>
  );
}

// ═══════════════════════ Helpers ═══════════════════════

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

function render(canvas, s) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;

  // Schermshake
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
      // Highlight bovenkant voor diepte
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.fillRect(o.x, o.y, o.w, 3);
      ctx.fillStyle = s.theme.obstacle;
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

function HUD({ score, combo, level, lives, mult, onPause, onClose }) {
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
        <div style={{ fontSize: 12, opacity: 0.9 }}>Lvl {level}</div>
      </div>
      <div style={{ textAlign: "center", flex: 1 }}>
        {combo > 0 && (
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: 999,
              background: "rgba(0,0,0,0.55)",
              fontSize: 16,
              fontWeight: 700,
              color: mult > 1 ? "#ffd54f" : "#fff",
              textShadow: "0 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            🔥 {combo} {mult > 1 && `×${mult}`}
          </div>
        )}
      </div>
      <div style={{ display: "flex", gap: 4, alignItems: "center", pointerEvents: "auto" }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <span key={i} style={{ fontSize: 16, opacity: i < lives ? 1 : 0.2 }}>❤️</span>
        ))}
        <button
          onClick={onPause}
          aria-label="Pauze"
          style={{
            marginLeft: 8,
            background: "rgba(0,0,0,0.5)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            width: 32,
            height: 32,
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          ⏸
        </button>
      </div>
    </div>
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

function GameOverScreen({ score, level, onReplay, onClose }) {
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
      <div style={{ color: "#bcd", marginBottom: 20 }}>Level bereikt: {level}</div>
      <button style={primaryBtn} onClick={onReplay}>↻ Opnieuw spelen</button>
      <button style={ghostBtn} onClick={onClose}>Terug</button>
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

const Overlay = ({ children }) => (
  <div
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
    }}
  >
    {children}
  </div>
);

const overlayTitle = { color: "#fff", fontSize: 30, margin: "8px 0" };

const primaryBtn = {
  padding: "12px 28px",
  background: "linear-gradient(135deg, #00c853, #00a040)",
  color: "#fff",
  border: "none",
  borderRadius: 12,
  fontSize: 15,
  fontWeight: 700,
  cursor: "pointer",
  marginTop: 12,
  fontFamily: "inherit",
  boxShadow: "0 4px 14px rgba(0,200,83,0.4)",
};

const ghostBtn = {
  padding: "12px 28px",
  background: "transparent",
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: 12,
  fontSize: 14,
  cursor: "pointer",
  marginTop: 8,
  fontFamily: "inherit",
};
