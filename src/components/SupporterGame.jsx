// SupporterGame — "Spel van de maand" (tijdelijk, ~1 maand) als bedankje voor
// onze trouwe supporter. Bewust BUITEN de leerkern (zoals OBLITERATOR): puur leuk,
// om mond-tot-mond te stimuleren. Frogger-stijl: steek de weg over zonder geraakt
// te worden. Self-contained, werkt met toetsenbord én touch (knoppen onderaan).
//
// Verwijderen na de maand = de route-branch in App.jsx + routes.js weghalen
// (en deze reactie in het wensenbord). Niets anders hangt eraan.
import { useEffect, useRef, useState, useCallback } from "react";
import { laadTopSupporter, schrijfSupporterScore } from "../games/supporter/scores.js";

const COLS = 9;
const ROWS = 9;
// Rij 0 = finish (veilig). Rij 8 = start (veilig). Autobanen: 1,2,4,5,6.
const LANES = {
  1: { dir: 1, speed: 1.2, gap: 4, len: 1, emoji: "🚗" },
  2: { dir: -1, speed: 1.6, gap: 4, len: 1, emoji: "🚙" },
  4: { dir: 1, speed: 1.9, gap: 4, len: 1, emoji: "🚕" },
  5: { dir: -1, speed: 1.4, gap: 5, len: 2, emoji: "🚌" },
  6: { dir: 1, speed: 2.2, gap: 4, len: 1, emoji: "🛻" },
};
const SAFE_ROWS = new Set([0, 3, 7, 8]);
// Aantal frames "landings-genade" na een sprong: je sneuvelt niet meteen als er
// net een auto op je nieuwe vakje staat — je krijgt een fractie om weer te hoppen.
const GRACE_FRAMES = 8;
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

export default function SupporterGame({ onHome, onPlayObliterator, supporterName = "Sahasra", userName = "", authUser = null }) {
  const [frog, setFrog] = useState({ c: 4, r: ROWS - 1 });
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [status, setStatus] = useState("start"); // start | playing | over
  const [best, setBest] = useState(() => {
    try { return Number(localStorage.getItem("lk_supporter_best") || 0); } catch { return 0; }
  });
  const [flash, setFlash] = useState(false);
  const [roundMsg, setRoundMsg] = useState("");
  const [board, setBoard] = useState([]);
  const [naam, setNaam] = useState(() => {
    try { return localStorage.getItem("lk_supporter_naam") || userName || ""; } catch { return userName || ""; }
  });
  const [ingezonden, setIngezonden] = useState(false);

  const herlaadBord = useCallback(() => { laadTopSupporter().then(setBoard); }, []);
  useEffect(() => { herlaadBord(); }, [herlaadBord]);

  const zetOpBord = useCallback(async () => {
    const n = (naam || userName || "Speler").trim().slice(0, 24) || "Speler";
    try { localStorage.setItem("lk_supporter_naam", n); } catch {}
    const ok = await schrijfSupporterScore(n, authUser?.id, score);
    if (ok) { setIngezonden(true); herlaadBord(); }
  }, [naam, userName, authUser, score, herlaadBord]);

  const lanesRef = useRef(makeCars(1));
  const frogRef = useRef(frog);
  const statusRef = useRef(status);
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const safeRef = useRef(ROWS - 1);   // laatst bereikte veilige strook
  const graceRef = useRef(0);         // resterende landings-genade-frames
  const goalRef = useRef(0);          // doel-rij: 0 = boven, ROWS-1 = onder
  const restingRef = useRef(false);   // korte rust aan de overkant (speed-up)
  const [, force] = useState(0); // re-render tikker voor auto-posities

  useEffect(() => { frogRef.current = frog; }, [frog]);
  useEffect(() => { statusRef.current = status; }, [status]);
  // onthoud de laatst bereikte veilige strook (niet de finish-rij 0)
  useEffect(() => { if (frog.r > 0 && SAFE_ROWS.has(frog.r)) safeRef.current = frog.r; }, [frog]);

  const resetFrog = useCallback(() => setFrog({ c: 4, r: ROWS - 1 }), []);

  const startGame = useCallback(() => {
    lanesRef.current = makeCars(1);
    safeRef.current = ROWS - 1; graceRef.current = 0;
    goalRef.current = 0; restingRef.current = false; setRoundMsg("");
    setIngezonden(false);
    setLives(3); setScore(0); setLevel(1); resetFrog();
    setStatus("playing");
  }, [resetFrog]);

  const move = useCallback((dc, dr) => {
    if (statusRef.current !== "playing") return;
    graceRef.current = GRACE_FRAMES; // korte onkwetsbaarheid na de sprong
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
      if (restingRef.current) return; // even rust aan de overkant
      // Spatie = vooruit naar de overkant (omhoog in de heen-fase, omlaag terug).
      if (k === " ") move(0, goalRef.current === 0 ? -1 : 1);
      else if (k === "ArrowUp" || k === "w") move(0, -1);
      else if (k === "ArrowDown" || k === "s") move(0, 1);
      else if (k === "ArrowLeft" || k === "a") move(-1, 0);
      else if (k === "ArrowRight" || k === "d") move(1, 0);
    };
    // Spatie ook op keyup blokkeren — anders activeert de browser daarmee
    // een knop die nog focus heeft (Start of een pijl-knop), waardoor de kikker
    // omhoog springt én meteen weer omlaag "geklikt" wordt.
    const onKeyUp = (e) => { if (e.key === " ") e.preventDefault(); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKeyUp);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("keyup", onKeyUp); };
  }, [move, startGame]);

  // Knoppen mogen geen focus pakken (anders activeert de spatiebalk ze).
  const noFocus = (e) => e.preventDefault();

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
      // landings-genade aftellen
      if (graceRef.current > 0) graceRef.current -= 1;
      const f = frogRef.current;
      const lane = lanes[f.r];
      if (lane && graceRef.current <= 0 && !restingRef.current) {
        // botsing met een auto?
        const hit = lane.cars.some((x) => x < f.c + 0.85 && x + lane.len > f.c + 0.15);
        if (hit) {
          setFlash(true); setTimeout(() => setFlash(false), 220);
          setLives((lv) => {
            const left = lv - 1;
            if (left <= 0) setStatus("over");
            return left;
          });
          // terug naar de laatst bereikte veilige strook (niet helemaal naar start)
          graceRef.current = GRACE_FRAMES;
          const back = { c: f.c, r: safeRef.current };
          frogRef.current = back;   // direct bijwerken → voorkomt dubbel levensverlies
          setFrog(back);
        }
      } else if (f.r === goalRef.current && !restingRef.current) {
        // Overkant bereikt: punt + auto's sneller + even uitrusten, dan de
        // ándere kant op. goalRef DIRECT flippen, anders vuurt dit nog eens.
        goalRef.current = goalRef.current === 0 ? ROWS - 1 : 0;
        restingRef.current = true;
        graceRef.current = GRACE_FRAMES;
        setRoundMsg("🎉 Goed zo! De auto's gaan sneller…");
        setTimeout(() => { restingRef.current = false; setRoundMsg(""); }, 800);
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
        {Array.from({ length: ROWS }).map((_, r) => {
          const isGoal = r === goalRef.current; // doel-strook (wisselt per ronde)
          return (
          <div key={r} style={{ position: "absolute", left: 0, right: 0, top: `${(r / ROWS) * 100}%`, height: rowH, background: isGoal ? GREEN : (r === 0 || r === ROWS - 1) ? "#15306a" : SAFE_ROWS.has(r) ? "#1c3e7a" : "#2b2b33", borderBottom: "1px solid rgba(255,255,255,.06)", display: "flex", alignItems: "center", justifyContent: isGoal ? "center" : "flex-start", fontSize: 13, color: "rgba(255,255,255,.6)" }}>
            {isGoal ? <span style={{ fontSize: 16 }}>🏁  hierheen  🏁</span> : null}
          </div>
          );
        })}
        {/* autootjes */}
        {Object.keys(lanesRef.current).map((row) => {
          const lane = lanesRef.current[row];
          return lane.cars.map((x, i) => (
            <div key={row + "-" + i} style={{ position: "absolute", top: `${(Number(row) / ROWS) * 100}%`, left: `${(x / COLS) * 100}%`, width: `calc(${cell} * ${lane.len})`, height: rowH, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "min(6vw,26px)", transform: lane.dir > 0 ? "scaleX(-1)" : "none" }}>
              {lane.emoji}
            </div>
          ));
        })}
        {/* kikker */}
        <div style={{ position: "absolute", top: `${(frog.r / ROWS) * 100}%`, left: `${(frog.c / COLS) * 100}%`, width: cell, height: rowH, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "min(7vw,30px)", transition: "top .08s, left .08s", zIndex: 2 }}>
          🐸
        </div>

        {/* "sneller!"-melding bij elke overkant */}
        {roundMsg && (
          <div style={{ position: "absolute", top: "44%", left: 0, right: 0, textAlign: "center", zIndex: 4, pointerEvents: "none" }}>
            <span style={{ background: "rgba(8,16,40,.92)", color: "#7fd0a0", fontWeight: 800, padding: "10px 16px", borderRadius: 12, fontSize: 16, boxShadow: "0 6px 18px rgba(0,0,0,.4)" }}>{roundMsg}</span>
          </div>
        )}

        {/* overlays */}
        {status !== "playing" && (
          <div style={overlay}>
            {status === "start" ? (
              <>
                <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>🐸 Kikker Oversteek</div>
                <div style={{ fontSize: 14, opacity: .9, maxWidth: 320, textAlign: "center", marginBottom: 14 }}>Breng de kikker naar de groene overkant 🏁. Daar rust je heel even — dan gaan de auto's sneller en moet je weer terug! Elke overkant = 10 punten. Hoe vaker, hoe sneller en spannender.</div>
                <button onClick={startGame} onMouseDown={noFocus} style={btnGold}>▶ Start</button>
              </>
            ) : (
              <>
                <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Game over!</div>
                <div style={{ fontSize: 15, marginBottom: 10 }}>Score: <b>{score}</b> · Best: <b>{best}</b></div>
                {score > 0 && !ingezonden ? (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <input value={naam} onChange={(e) => setNaam(e.target.value)} maxLength={24} placeholder="Jouw naam"
                      style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,.3)", background: "#0c1838", color: "#fff7ec", fontSize: 15, textAlign: "center", width: 200 }} />
                    <button onClick={zetOpBord} onMouseDown={noFocus} style={btnGold}>🏆 Zet op scorebord</button>
                  </div>
                ) : ingezonden ? (
                  <div style={{ fontSize: 14, color: "#7fd0a0", marginBottom: 12 }}>✓ Op het scorebord gezet! Daag je vrienden uit om je te verslaan 💪</div>
                ) : (
                  <div style={{ fontSize: 13, opacity: .85, marginBottom: 12 }}>Daag je vrienden uit om je score te verslaan! 💪</div>
                )}
                <button onClick={startGame} onMouseDown={noFocus} style={btnGold}>↻ Opnieuw</button>
              </>
            )}
          </div>
        )}
      </div>

      {/* touch-knoppen */}
      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3,56px)", gridTemplateRows: "repeat(2,56px)", gap: 8, justifyContent: "center" }}>
        <span />
        <button aria-label="omhoog" tabIndex={-1} onMouseDown={noFocus} onClick={() => move(0, -1)} style={dpad}>▲</button>
        <span />
        <button aria-label="links" tabIndex={-1} onMouseDown={noFocus} onClick={() => move(-1, 0)} style={dpad}>◀</button>
        <button aria-label="omlaag" tabIndex={-1} onMouseDown={noFocus} onClick={() => move(0, 1)} style={dpad}>▼</button>
        <button aria-label="rechts" tabIndex={-1} onMouseDown={noFocus} onClick={() => move(1, 0)} style={dpad}>▶</button>
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

      {/* Scorebord van de maand */}
      <div style={{ marginTop: 18, width: "100%", maxWidth: 460, background: "#15306a", borderRadius: 12, padding: "14px 16px" }}>
        <div style={{ fontWeight: 800, marginBottom: 8, textAlign: "center" }}>🏆 Toppers van de maand</div>
        {board.length === 0 ? (
          <div style={{ fontSize: 13, opacity: .7, textAlign: "center" }}>Nog geen scores — wees de eerste! 🐸</div>
        ) : (
          <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {board.map((r, i) => (
              <li key={i} style={{ display: "flex", justifyContent: "space-between", padding: "5px 4px", borderBottom: i < board.length - 1 ? "1px dashed rgba(255,255,255,.12)" : "none", fontSize: 14 }}>
                <span>{["🥇", "🥈", "🥉"][i] || `${i + 1}.`} {r.naam}</span>
                <span style={{ fontWeight: 700 }}>{r.score}</span>
              </li>
            ))}
          </ol>
        )}
      </div>

      <p style={{ marginTop: 16, fontSize: 12, opacity: .6, textAlign: "center", maxWidth: 420 }}>
        Tip: spatie = vooruit naar de overkant 🏁. Pijltjes (of WASD) voor alle kanten. Op de telefoon gebruik je de knoppen hierboven.
      </p>
    </div>
  );
}

const btnGhost = { background: "transparent", color: "#fff7ec", border: "1px solid rgba(255,255,255,.3)", borderRadius: 999, padding: "6px 14px", fontWeight: 600, cursor: "pointer" };
const btnGold = { background: GOLD, color: NAVY, border: "none", borderRadius: 999, padding: "12px 28px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const dpad = { background: "#15306a", color: "#fff7ec", border: "1px solid rgba(255,255,255,.2)", borderRadius: 12, fontSize: 22, cursor: "pointer", userSelect: "none", touchAction: "manipulation" };
const overlay = { position: "absolute", inset: 0, background: "rgba(8,16,40,.86)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16, zIndex: 3 };
