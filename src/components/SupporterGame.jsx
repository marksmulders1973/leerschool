// SupporterGame — "Spel van de maand" (tijdelijk, ~1 maand) als bedankje voor
// onze trouwe supporter. Bewust BUITEN de leerkern (zoals OBLITERATOR): puur leuk,
// om mond-tot-mond te stimuleren. Frogger-stijl: steek de weg over zonder geraakt
// te worden. Self-contained, werkt met toetsenbord én touch (knoppen onderaan).
//
// Verwijderen na de maand = de route-branch in App.jsx + routes.js weghalen
// (en deze reactie in het wensenbord). Niets anders hangt eraan.
import { useEffect, useRef, useState, useCallback } from "react";

const COLS = 9;
const ROWS = 9;
// Rij 0 = finish (veilig). Rij 8 = start (veilig). Autobanen: 1,2,4,5,6.
const LANES = {
  1: { dir: 1, speed: 1.6, gap: 3, len: 1, emoji: "🚗" },
  2: { dir: -1, speed: 2.1, gap: 4, len: 1, emoji: "🚙" },
  4: { dir: 1, speed: 2.6, gap: 3, len: 1, emoji: "🚕" },
  5: { dir: -1, speed: 1.9, gap: 4, len: 2, emoji: "🚌" },
  6: { dir: 1, speed: 3.0, gap: 3, len: 1, emoji: "🛻" },
};
const SAFE_ROWS = new Set([0, 3, 7, 8]);
const NAVY = "#0f1f4d";
const GOLD = "#e8a317";
const GREEN = "#4aa05a";

function makeCars(level) {
  // bouw per autobaan een rij autootjes met gelijke tussenruimte
  const lanes = {};
  for (const row of Object.keys(LANES)) {
    const cfg = LANES[row];
    const cars = [];
    for (let x = 0; x < COLS; x += cfg.gap + cfg.len) cars.push(x);
    lanes[row] = {
      ...cfg,
      speed: cfg.speed * (1 + (level - 1) * 0.15), // elke ronde iets sneller
      cars,
    };
  }
  return lanes;
}

export default function SupporterGame({ onHome, onPlayObliterator, supporterName = "Sahasra" }) {
  const [frog, setFrog] = useState({ c: 4, r: ROWS - 1 });
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [status, setStatus] = useState("start"); // start | playing | over
  const [best, setBest] = useState(() => {
    try { return Number(localStorage.getItem("lk_supporter_best") || 0); } catch { return 0; }
  });
  const [flash, setFlash] = useState(false);

  const lanesRef = useRef(makeCars(1));
  const frogRef = useRef(frog);
  const statusRef = useRef(status);
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const [, force] = useState(0); // re-render tikker voor auto-posities

  useEffect(() => { frogRef.current = frog; }, [frog]);
  useEffect(() => { statusRef.current = status; }, [status]);

  const resetFrog = useCallback(() => setFrog({ c: 4, r: ROWS - 1 }), []);

  const startGame = useCallback(() => {
    lanesRef.current = makeCars(1);
    setLives(3); setScore(0); setLevel(1); resetFrog();
    setStatus("playing");
  }, [resetFrog]);

  const move = useCallback((dc, dr) => {
    if (statusRef.current !== "playing") return;
    setFrog((f) => {
      const c = Math.max(0, Math.min(COLS - 1, f.c + dc));
      const r = Math.max(0, Math.min(ROWS - 1, f.r + dr));
      return { c, r };
    });
  }, []);

  // toetsenbord
  useEffect(() => {
    const onKey = (e) => {
      const k = e.key;
      if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(k)) e.preventDefault();
      if (statusRef.current !== "playing") {
        if (k === " " || k === "Enter") startGame();
        return;
      }
      if (k === "ArrowUp" || k === "w") move(0, -1);
      else if (k === "ArrowDown" || k === "s") move(0, 1);
      else if (k === "ArrowLeft" || k === "a") move(-1, 0);
      else if (k === "ArrowRight" || k === "d") move(1, 0);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move, startGame]);

  // game-loop: autootjes bewegen, botsing + finish checken
  useEffect(() => {
    const tick = (t) => {
      rafRef.current = requestAnimationFrame(tick);
      if (statusRef.current !== "playing") { lastRef.current = t; return; }
      const dt = Math.min(0.05, (t - lastRef.current) / 1000 || 0);
      lastRef.current = t;
      const lanes = lanesRef.current;
      for (const row of Object.keys(lanes)) {
        const lane = lanes[row];
        lane.cars = lane.cars.map((x) => {
          let nx = x + lane.dir * lane.speed * dt;
          if (nx > COLS) nx = -lane.len;
          if (nx < -lane.len) nx = COLS;
          return nx;
        });
      }
      // botsing met frog?
      const f = frogRef.current;
      const lane = lanes[f.r];
      if (lane) {
        const hit = lane.cars.some((x) => x < f.c + 0.85 && x + lane.len > f.c + 0.15);
        if (hit) {
          setFlash(true); setTimeout(() => setFlash(false), 220);
          setLives((lv) => {
            const left = lv - 1;
            if (left <= 0) { setStatus("over"); }
            return left;
          });
          resetFrog();
        }
      }
      // finish gehaald?
      if (f.r === 0) {
        setScore((s) => {
          const ns = s + 10;
          setBest((b) => {
            const nb = Math.max(b, ns);
            try { localStorage.setItem("lk_supporter_best", String(nb)); } catch {}
            return nb;
          });
          return ns;
        });
        setLevel((l) => { const nl = l + 1; lanesRef.current = makeCars(nl); return nl; });
        resetFrog();
      }
      force((n) => (n + 1) % 1000000);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [resetFrog]);

  const cell = `${100 / COLS}%`;
  const rowH = `${100 / ROWS}%`;

  return (
    <div style={{ minHeight: "100dvh", background: NAVY, color: "#fff7ec", padding: "16px", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "-apple-system,Segoe UI,Roboto,Arial,sans-serif" }}>
      <div style={{ width: "100%", maxWidth: 460, display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <button onClick={onHome} style={btnGhost}>← Home</button>
        <div style={{ fontWeight: 800, letterSpacing: ".5px" }}>🌊 Leerkwartier</div>
      </div>

      <div style={{ width: "100%", maxWidth: 460, background: "linear-gradient(90deg,#7a2e0e,#c1440e 60%,#e8a317)", borderRadius: 14, padding: "10px 14px", marginBottom: 12, textAlign: "center", boxShadow: "0 6px 18px rgba(0,0,0,.3)" }}>
        <div style={{ fontWeight: 800, fontSize: 16 }}>🏆 Supporter van de maand: {supporterName} 💛</div>
        <div style={{ fontSize: 12.5, opacity: .95 }}>Speciaal spelletje — alleen deze maand. Help de kikker veilig oversteken!</div>
      </div>

      <div style={{ width: "100%", maxWidth: 460, display: "flex", justifyContent: "space-around", marginBottom: 10, fontWeight: 700 }}>
        <span>🏁 Score: {score}</span>
        <span>{"❤️".repeat(Math.max(0, lives))}{"🤍".repeat(Math.max(0, 3 - lives))}</span>
        <span>⭐ Best: {best}</span>
      </div>

      {/* speelveld */}
      <div style={{ position: "relative", width: "100%", maxWidth: 460, aspectRatio: "1 / 1", borderRadius: 14, overflow: "hidden", border: `3px solid ${flash ? "#ff5252" : "rgba(255,255,255,.25)"}`, boxShadow: "0 10px 30px rgba(0,0,0,.4)" }}>
        {/* rijen */}
        {Array.from({ length: ROWS }).map((_, r) => (
          <div key={r} style={{ position: "absolute", left: 0, right: 0, top: `${(r / ROWS) * 100}%`, height: rowH, background: r === 0 ? GREEN : r === ROWS - 1 ? "#15306a" : SAFE_ROWS.has(r) ? "#1c3e7a" : "#2b2b33", borderBottom: "1px solid rgba(255,255,255,.06)", display: "flex", alignItems: "center", justifyContent: r === 0 ? "center" : "flex-start", fontSize: 13, color: "rgba(255,255,255,.5)" }}>
            {r === 0 ? <span style={{ fontSize: 18 }}>🏁  FINISH  🏁</span> : null}
          </div>
        ))}
        {/* autootjes */}
        {Object.keys(lanesRef.current).map((row) => {
          const lane = lanesRef.current[row];
          return lane.cars.map((x, i) => (
            <div key={row + "-" + i} style={{ position: "absolute", top: `${(Number(row) / ROWS) * 100}%`, left: `${(x / COLS) * 100}%`, width: `calc(${cell} * ${lane.len})`, height: rowH, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "min(6vw,26px)", transform: lane.dir < 0 ? "scaleX(-1)" : "none" }}>
              {lane.emoji}
            </div>
          ));
        })}
        {/* kikker */}
        <div style={{ position: "absolute", top: `${(frog.r / ROWS) * 100}%`, left: `${(frog.c / COLS) * 100}%`, width: cell, height: rowH, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "min(7vw,30px)", transition: "top .08s, left .08s", zIndex: 2 }}>
          🐸
        </div>

        {/* overlays */}
        {status !== "playing" && (
          <div style={overlay}>
            {status === "start" ? (
              <>
                <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>🐸 Kikker Oversteek</div>
                <div style={{ fontSize: 14, opacity: .9, maxWidth: 300, textAlign: "center", marginBottom: 14 }}>Breng de kikker naar de overkant zonder de auto's te raken. Elke overkant = 10 punten, en het gaat steeds sneller!</div>
                <button onClick={startGame} style={btnGold}>▶ Start</button>
              </>
            ) : (
              <>
                <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Game over!</div>
                <div style={{ fontSize: 15, marginBottom: 2 }}>Score: <b>{score}</b> · Best: <b>{best}</b></div>
                <div style={{ fontSize: 13, opacity: .85, marginBottom: 14 }}>Laat 'm aan je vriendinnen zien! 💛</div>
                <button onClick={startGame} style={btnGold}>↻ Opnieuw</button>
              </>
            )}
          </div>
        )}
      </div>

      {/* touch-knoppen */}
      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3,56px)", gridTemplateRows: "repeat(2,56px)", gap: 8, justifyContent: "center" }}>
        <span />
        <button aria-label="omhoog" onClick={() => move(0, -1)} style={dpad}>▲</button>
        <span />
        <button aria-label="links" onClick={() => move(-1, 0)} style={dpad}>◀</button>
        <button aria-label="omlaag" onClick={() => move(0, 1)} style={dpad}>▼</button>
        <button aria-label="rechts" onClick={() => move(1, 0)} style={dpad}>▶</button>
      </div>

      {/* 2 spellen naast elkaar */}
      <div style={{ marginTop: 18, width: "100%", maxWidth: 460, display: "flex", gap: 10 }}>
        <div style={{ flex: 1, background: "#15306a", borderRadius: 12, padding: "12px 14px", textAlign: "center" }}>
          <div style={{ fontSize: 22 }}>🐸</div>
          <div style={{ fontWeight: 700, fontSize: 14 }}>Kikker Oversteek</div>
          <div style={{ fontSize: 12, opacity: .7 }}>Spel van de maand</div>
        </div>
        {onPlayObliterator && (
          <button onClick={onPlayObliterator} style={{ flex: 1, background: "#15306a", borderRadius: 12, padding: "12px 14px", textAlign: "center", color: "#fff7ec", border: "1px solid rgba(255,255,255,.15)", cursor: "pointer" }}>
            <div style={{ fontSize: 22 }}>💥</div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>OBLITERATOR</div>
            <div style={{ fontSize: 12, opacity: .7 }}>het andere spel →</div>
          </button>
        )}
      </div>

      <p style={{ marginTop: 16, fontSize: 12, opacity: .6, textAlign: "center", maxWidth: 420 }}>
        Tip: gebruik de pijltjestoetsen op de computer, of de knoppen hierboven op je telefoon.
      </p>
    </div>
  );
}

const btnGhost = { background: "transparent", color: "#fff7ec", border: "1px solid rgba(255,255,255,.3)", borderRadius: 999, padding: "6px 14px", fontWeight: 600, cursor: "pointer" };
const btnGold = { background: GOLD, color: NAVY, border: "none", borderRadius: 999, padding: "12px 28px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const dpad = { background: "#15306a", color: "#fff7ec", border: "1px solid rgba(255,255,255,.2)", borderRadius: 12, fontSize: 22, cursor: "pointer", userSelect: "none", touchAction: "manipulation" };
const overlay = { position: "absolute", inset: 0, background: "rgba(8,16,40,.86)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16, zIndex: 3 };
