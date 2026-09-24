// 🕵️ Bedrieger — de witte kamer (Brian 23 sep 2026, stap 2) + lobby en loting
// (Marks ontwerp 24 sep 2026, stap 3): iedereen verzamelt in de kamer, aangevuld
// met bots tot het maximum; de leider zegt "Start spel" → 3-2-1 → één som op de
// muur; bots zijn langzame rekenaars (8-15 s, 7 op de 10 goed), dus een mens die
// het weet wint altijd. De snelste met het goede antwoord wordt de bedrieger;
// dan opent het park en start "Wie is de bedrieger?" met precies deze spelers.
// Solo-versie (bots lokaal); multiplayer via parkcode = stap 4 (Brian).
// Besturing kamer: pc = klik in beeld (muis-lock), WASD/pijltjes, Shift = rennen;
// telefoon = links slepen = lopen, rechts slepen = kijken.
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls, Html } from "@react-three/drei";
import { CanvasTexture, RepeatWrapping, Vector3, Euler } from "three";
import { bouwGameVragen } from "../features/zoo/game/vragenBron.js";
import { track } from "../utils.js";

const KAMER = 20;      // meter, breed en diep
const HOOGTE = 5;      // meter
const OOG = 1.6;       // ooghoogte
const RAND = 0.6;      // hoe dicht je bij de muur mag
const MAX_SPELERS = 8; // jij + 7 bots (Mark 24 sep: elke echte speler erin = bot eruit)
const SOM_TIJD = 20;   // seconden om te antwoorden
const BOT_NAMEN = ["Sem", "Noor", "Milan", "Yara", "Daan", "Liv", "Finn", "Zoë", "Luuk", "Sara"];
const BOT_KLEUREN = ["#ef4444", "#3b82f6", "#22c55e", "#f59e0b", "#a855f7", "#06b6d4", "#ec4899", "#84cc16", "#f97316", "#64748b"];

function tegelTextuur(herhaal) {
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#f2f2f2"; g.fillRect(0, 0, 256, 256);
  g.strokeStyle = "rgba(0,0,0,0.22)"; g.lineWidth = 5; g.strokeRect(3, 3, 250, 250);
  const t = new CanvasTexture(c); t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(herhaal, herhaal); t.anisotropy = 4;
  return t;
}

function schoon(s) { return String(s || "").replace(/\*\*|__|`/g, "").replace(/\s+/g, " ").trim(); }

function Kamer() {
  const vloer = useMemo(() => tegelTextuur(KAMER), []);
  const muur = useMemo(() => tegelTextuur(KAMER / 2), []);
  const h = KAMER / 2;
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[KAMER, KAMER]} /><meshStandardMaterial map={vloer} color="#f4f4f4" roughness={0.9} /></mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, HOOGTE, 0]}><planeGeometry args={[KAMER, KAMER]} /><meshStandardMaterial color="#f0f0f0" emissive="#ffffff" emissiveIntensity={0.18} roughness={1} /></mesh>
      {[[0, HOOGTE / 2, -h, 0], [0, HOOGTE / 2, h, Math.PI], [-h, HOOGTE / 2, 0, Math.PI / 2], [h, HOOGTE / 2, 0, -Math.PI / 2]].map(([x, y, z, ry], i) => (
        <mesh key={i} position={[x, y, z]} rotation={[0, ry, 0]}><planeGeometry args={[KAMER, HOOGTE]} /><meshStandardMaterial map={muur} color="#f0f0f0" roughness={0.95} /></mesh>
      ))}
      {[[0, 0.06, -h + 0.02, 0], [0, 0.06, h - 0.02, Math.PI], [-h + 0.02, 0.06, 0, Math.PI / 2], [h - 0.02, 0.06, 0, -Math.PI / 2]].map(([x, y, z, ry], i) => (
        <mesh key={"p" + i} position={[x, y, z]} rotation={[0, ry, 0]}><boxGeometry args={[KAMER, 0.12, 0.04]} /><meshStandardMaterial color="#d9d9d9" /></mesh>
      ))}
      {[[-5, -5], [5, -5], [-5, 5], [5, 5]].map(([x, z], i) => (
        <group key={"l" + i} position={[x, HOOGTE - 0.02, z]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}><planeGeometry args={[2.4, 1.2]} /><meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.6} /></mesh>
          <pointLight position={[0, -0.3, 0]} intensity={30} distance={20} decay={2} />
        </group>
      ))}
      <ambientLight intensity={0.55} />
      <hemisphereLight args={["#ffffff", "#e6e6e6", 0.6]} />
    </group>
  );
}

// Een bot in de kamer: blokkig poppetje met naam. Kleurt goud als hij de som goed had.
function Bot({ bot, x, z, hoek }) {
  return (
    <group position={[x, 0, z]} rotation={[0, hoek, 0]}>
      <mesh position={[0, 0.55, 0]} castShadow><boxGeometry args={[0.55, 1.1, 0.35]} /><meshStandardMaterial color={bot.kleur} /></mesh>
      <mesh position={[0, 1.4, 0]}><boxGeometry args={[0.5, 0.5, 0.5]} /><meshStandardMaterial color="#f4d3b0" /></mesh>
      <mesh position={[-0.12, 1.45, 0.26]}><boxGeometry args={[0.08, 0.08, 0.02]} /><meshStandardMaterial color="#222" /></mesh>
      <mesh position={[0.12, 1.45, 0.26]}><boxGeometry args={[0.08, 0.08, 0.02]} /><meshStandardMaterial color="#222" /></mesh>
      <Html position={[0, 1.95, 0]} center distanceFactor={12} zIndexRange={[5, 0]} style={{ pointerEvents: "none" }}>
        <div style={{ whiteSpace: "nowrap", padding: "3px 9px", borderRadius: 999, background: bot.status === "goed" ? "#ffd166" : "rgba(15,23,42,.8)", color: bot.status === "goed" ? "#3a2600" : "#fff", fontFamily: "system-ui", fontWeight: 800, fontSize: 13 }}>
          {bot.status === "goed" ? "✅ " : bot.status === "fout" ? "❌ " : ""}{bot.naam}
        </div>
      </Html>
    </group>
  );
}

// Tekst op de achterwand: aftelling, de som, of de uitslag.
function Muurtekst({ tekst, klein, kleur = "#111" }) {
  if (!tekst) return null;
  return (
    <Html position={[0, 2.9, -KAMER / 2 + 0.05]} center transform distanceFactor={6} zIndexRange={[4, 0]} style={{ pointerEvents: "none" }}>
      <div style={{ width: 640, textAlign: "center", fontFamily: "system-ui", color: kleur }}>
        <div style={{ fontSize: klein ? 34 : 120, fontWeight: 900, lineHeight: 1.15 }}>{tekst}</div>
        {klein && <div style={{ fontSize: 16, fontWeight: 600, opacity: .7, marginTop: 6 }}>{klein}</div>}
      </div>
    </Html>
  );
}

function Speler({ toetsen, touchLoop, touchKijk, mag }) {
  const { camera } = useThree();
  const richting = useMemo(() => new Vector3(), []);
  const zij = useMemo(() => new Vector3(), []);
  const euler = useMemo(() => new Euler(0, 0, 0, "YXZ"), []);
  useEffect(() => { camera.position.set(0, OOG, 6); camera.lookAt(0, OOG, -KAMER / 2); }, [camera]);
  useFrame((_, dt) => {
    const d = Math.min(dt, 0.05);
    if (touchKijk.current.dx || touchKijk.current.dy) {
      euler.setFromQuaternion(camera.quaternion);
      euler.y -= touchKijk.current.dx * 0.004; euler.x -= touchKijk.current.dy * 0.004;
      euler.x = Math.max(-1.4, Math.min(1.4, euler.x));
      camera.quaternion.setFromEuler(euler);
      touchKijk.current.dx = 0; touchKijk.current.dy = 0;
    }
    if (!mag) return;
    const k = toetsen.current;
    let vx = (k.d ? 1 : 0) - (k.a ? 1 : 0) + touchLoop.current.x;
    let vz = (k.s ? 1 : 0) - (k.w ? 1 : 0) + touchLoop.current.y;
    const len = Math.hypot(vx, vz); if (len > 1) { vx /= len; vz /= len; }
    if (len === 0) return;
    const snel = (k.shift ? 6.5 : 3.6) * d;
    camera.getWorldDirection(richting); richting.y = 0; richting.normalize();
    zij.set(-richting.z, 0, richting.x);
    camera.position.addScaledVector(richting, -vz * snel).addScaledVector(zij, vx * snel);
    const lim = KAMER / 2 - RAND;
    camera.position.x = Math.max(-lim, Math.min(lim, camera.position.x));
    camera.position.z = Math.max(-lim, Math.min(lim, camera.position.z));
    camera.position.y = OOG;
  });
  return null;
}

const HUD_KNOP = { background: "linear-gradient(135deg,#22c55e,#15803d)", color: "#fff", border: "none", borderRadius: 999, padding: "12px 22px", fontWeight: 900, fontFamily: "system-ui", fontSize: 17, cursor: "pointer", boxShadow: "0 6px 18px rgba(0,0,0,.25)" };
const HUD_PANEEL = { background: "rgba(15,23,42,.88)", color: "#fff", borderRadius: 18, padding: "14px 18px", fontFamily: "system-ui", boxShadow: "0 8px 24px rgba(0,0,0,.35)" };

export default function ImposterKamer({ onTerug, onNaarPark, spelerNaam = "", userLevel = "groep6" }) {
  const toetsen = useRef({});
  const touchLoop = useRef({ x: 0, y: 0 });
  const touchKijk = useRef({ dx: 0, dy: 0 });
  const [gelockt, setGelockt] = useState(false);
  const isTouch = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const vingers = useRef({});
  const groep = (String(userLevel).match(/(\d)/) || [null, "6"])[1];

  // ── lobby & loting ──
  const [bots] = useState(() => BOT_NAMEN.slice().sort(() => Math.random() - 0.5).slice(0, MAX_SPELERS - 1).map((naam, i) => ({ id: "bot" + i, naam, kleur: BOT_KLEUREN[i % BOT_KLEUREN.length], status: null })));
  const [botStatus, setBotStatus] = useState({});        // id → 'goed' | 'fout'
  const [fase, setFase] = useState("lobby");             // lobby · aftellen · som · uitslag
  const [aftel, setAftel] = useState(3);
  const [vraag, setVraag] = useState(null);
  const [tijd, setTijd] = useState(SOM_TIJD);
  const [gekozen, setGekozen] = useState(null);
  const [winnaar, setWinnaar] = useState(null);          // { id, naam, mens, ms }
  const [laden, setLaden] = useState(false);
  const timers = useRef([]);
  const startMs = useRef(0);
  const beslist = useRef(false);
  const wis = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => () => wis(), []);

  const beslis = (id, naam, mens) => {
    if (beslist.current) return;
    beslist.current = true; wis();
    const ms = Date.now() - startMs.current;
    setWinnaar({ id, naam, mens, ms });
    setFase("uitslag");
    try { document.exitPointerLock && document.exitPointerLock(); } catch { /* */ }
    try { track("bedrieger_loting", { winnaar: mens ? "mens" : "bot", ms, groep }); } catch { /* */ }
  };

  const startSom = async () => {
    setLaden(true);
    let v = null;
    try { const vs = await bouwGameVragen({ vak: "alles", groep: "eigen", level: groep, n: 1 }); v = vs && vs[0]; } catch { /* */ }
    if (!v || !v.options) v = { q: "Wat is 7 × 8?", options: ["54", "56", "64", "48"], answer: 1 };
    setLaden(false);
    setVraag(v); setGekozen(null); setBotStatus({}); setTijd(SOM_TIJD); beslist.current = false;
    setFase("aftellen"); setAftel(3);
    timers.current.push(setTimeout(() => setAftel(2), 1000));
    timers.current.push(setTimeout(() => setAftel(1), 2000));
    timers.current.push(setTimeout(() => {
      setFase("som"); startMs.current = Date.now();
      try { document.exitPointerLock && document.exitPointerLock(); } catch { /* */ }
      // bots: langzame rekenaars — 8 tot 15 s, 7 op de 10 goed; de eerste goede bot wint als de mens niet sneller was
      bots.forEach((b) => {
        const na = 8000 + Math.random() * 7000;
        const goed = Math.random() < 0.7;
        timers.current.push(setTimeout(() => { setBotStatus((s) => ({ ...s, [b.id]: goed ? "goed" : "fout" })); if (goed) beslis(b.id, b.naam, false); }, na));
      });
      // klok
      for (let s = 1; s <= SOM_TIJD; s++) timers.current.push(setTimeout(() => setTijd(SOM_TIJD - s), s * 1000));
      timers.current.push(setTimeout(() => { if (!beslist.current) { wis(); setFase("opnieuw"); } }, SOM_TIJD * 1000 + 50));
    }, 3000));
  };

  const startSpel = () => {
    try { track("bedrieger_lobby_start", { echt: 1, bots: bots.length, groep }); } catch { /* */ }
    startSom();
  };

  const kies = (i) => {
    if (gekozen != null || fase !== "som") return;
    setGekozen(i);
    const goed = i === vraag.answer;
    try { track("question_answered", { bron: "bedrieger-kamer", correct: goed ? 1 : 0, groep }); } catch { /* */ }
    if (goed) beslis("ik", spelerNaam || "Jij", true);
  };

  const naarPark = () => {
    if (!winnaar) return;
    onNaarPark && onNaarPark({ rol: winnaar.mens ? "imposter" : "bouwer", nBots: bots.length, groep, vak: "alles" });
  };

  useEffect(() => {
    const map = { KeyW: "w", ArrowUp: "w", KeyA: "a", ArrowLeft: "a", KeyS: "s", ArrowDown: "s", KeyD: "d", ArrowRight: "d", ShiftLeft: "shift", ShiftRight: "shift" };
    const down = (e) => { const k = map[e.code]; if (k) { toetsen.current[k] = true; e.preventDefault(); } };
    const up = (e) => { const k = map[e.code]; if (k) toetsen.current[k] = false; };
    window.addEventListener("keydown", down); window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  const onTouchStart = (e) => { for (const t of e.changedTouches) vingers.current[t.identifier] = { x0: t.clientX, y0: t.clientY, x: t.clientX, y: t.clientY, links: t.clientX < window.innerWidth / 2 }; };
  const onTouchMove = (e) => {
    for (const t of e.changedTouches) {
      const v = vingers.current[t.identifier]; if (!v) continue;
      if (v.links) { touchLoop.current.x = Math.max(-1, Math.min(1, (t.clientX - v.x0) / 45)); touchLoop.current.y = Math.max(-1, Math.min(1, (t.clientY - v.y0) / 45)); }
      else { touchKijk.current.dx += t.clientX - v.x; touchKijk.current.dy += t.clientY - v.y; }
      v.x = t.clientX; v.y = t.clientY;
    }
  };
  const onTouchEnd = (e) => { for (const t of e.changedTouches) { const v = vingers.current[t.identifier]; if (v && v.links) touchLoop.current = { x: 0, y: 0 }; delete vingers.current[t.identifier]; } };

  const magLopen = fase === "lobby";
  const muur = fase === "aftellen" ? { tekst: String(aftel) }
    : fase === "som" && vraag ? { tekst: schoon(vraag.q), klein: `Nog ${tijd} seconden` }
    : fase === "uitslag" && winnaar ? { tekst: winnaar.mens ? "Jij bent de bedrieger!" : "Het spel begint…", klein: winnaar.mens ? "Ssst, dat weet alleen jij." : "Wie de bedrieger is, blijft geheim.", kleur: winnaar.mens ? "#b42318" : "#111" }
    : fase === "opnieuw" ? { tekst: "Niemand goed…", klein: "Nog een som!" }
    : fase === "lobby" ? { tekst: "Wie is de bedrieger?", klein: `${1 + bots.length} in de kamer · wacht op de leider` }
    : null;

  return (
    <div style={{ position: "fixed", inset: 0, background: "#f4f4f4", touchAction: "none" }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onTouchCancel={onTouchEnd}>
      <Canvas camera={{ fov: 75, near: 0.1, far: 100 }} gl={{ antialias: true }} dpr={[1, 1.5]}>
        <color attach="background" args={["#f4f4f4"]} />
        <Suspense fallback={null}>
          <Kamer />
          {bots.map((b, i) => { const hoek = ((i + 1) / (bots.length + 1)) * Math.PI - Math.PI / 2; return <Bot key={b.id} bot={{ ...b, status: botStatus[b.id] || null }} x={Math.sin(hoek) * 6} z={-Math.cos(hoek) * 6 - 1} hoek={Math.PI + hoek} />; })}
          <Muurtekst {...(muur || {})} />
          <Speler toetsen={toetsen} touchLoop={touchLoop} touchKijk={touchKijk} mag={magLopen} />
          {!isTouch && magLopen && <PointerLockControls onLock={() => setGelockt(true)} onUnlock={() => setGelockt(false)} />}
        </Suspense>
      </Canvas>

      {/* HUD */}
      <button type="button" onClick={onTerug} style={{ position: "absolute", top: 12, left: 12, zIndex: 3, background: "rgba(15,23,42,.85)", color: "#fff", border: "none", borderRadius: 999, padding: "8px 14px", fontWeight: 800, fontFamily: "system-ui", cursor: "pointer" }}>← Terug</button>
      <div style={{ position: "absolute", top: 12, right: 12, zIndex: 3, background: "rgba(15,23,42,.85)", color: "#fff", borderRadius: 999, padding: "8px 14px", fontWeight: 800, fontFamily: "system-ui" }}>🕵️ Bedrieger · {1 + bots.length} spelers</div>

      {fase === "lobby" && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 22, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, zIndex: 3 }}>
          <div style={{ ...HUD_PANEEL, textAlign: "center", maxWidth: 520 }}>
            <div style={{ fontWeight: 900, fontSize: 18 }}>Jij bent de leider</div>
            <div style={{ fontSize: 13.5, opacity: .85, marginTop: 4 }}>{bots.length} bots doen mee. Straks komt er één som op de muur: wie hem het snelst goed heeft, is de bedrieger. Bots rekenen langzaam.</div>
            {!isTouch && !gelockt && <div style={{ fontSize: 12.5, opacity: .7, marginTop: 6 }}>Klik in beeld om rond te lopen · WASD of pijltjes · Esc = muis vrij</div>}
          </div>
          <button type="button" onClick={startSpel} disabled={laden} style={{ ...HUD_KNOP, opacity: laden ? .6 : 1 }}>{laden ? "Som laden…" : "▶ Start spel"}</button>
        </div>
      )}

      {fase === "som" && vraag && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 22, display: "flex", justifyContent: "center", zIndex: 3, padding: "0 12px" }}>
          <div style={{ ...HUD_PANEEL, width: "min(560px, 100%)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8, gap: 10 }}>
              <div style={{ fontWeight: 900, fontSize: 15, lineHeight: 1.3 }}>{schoon(vraag.q)}</div>
              <div style={{ fontWeight: 900, fontSize: 15, color: tijd <= 5 ? "#fca5a5" : "#ffd166" }}>⏱ {tijd}</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {vraag.options.map((o, i) => {
                const bg = gekozen == null ? "rgba(255,255,255,.12)" : i === vraag.answer ? "#22c55e" : i === gekozen ? "#ef4444" : "rgba(255,255,255,.08)";
                return <button key={i} type="button" onClick={() => kies(i)} disabled={gekozen != null} style={{ background: bg, color: "#fff", border: "2px solid rgba(255,255,255,.25)", borderRadius: 12, padding: "12px 10px", fontFamily: "system-ui", fontWeight: 800, fontSize: 16, cursor: gekozen == null ? "pointer" : "default", textAlign: "left" }}>{schoon(o)}</button>;
              })}
            </div>
            {gekozen != null && gekozen !== vraag.answer && <div style={{ marginTop: 8, fontSize: 13.5, color: "#fca5a5", fontWeight: 700 }}>Helaas… wacht af wie van de bots het goed heeft.</div>}
            {gekozen != null && gekozen === vraag.answer && <div style={{ marginTop: 8, fontSize: 13.5, color: "#86efac", fontWeight: 700 }}>Goed! En sneller dan alle bots.</div>}
          </div>
        </div>
      )}

      {fase === "opnieuw" && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 22, display: "flex", justifyContent: "center", zIndex: 3 }}>
          <button type="button" onClick={startSom} style={HUD_KNOP}>🔁 Nog een som</button>
        </div>
      )}

      {fase === "uitslag" && winnaar && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 22, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, zIndex: 3 }}>
          <div style={{ ...HUD_PANEEL, textAlign: "center", maxWidth: 520 }}>
            <div style={{ fontWeight: 900, fontSize: 18 }}>{winnaar.mens ? `Jij was de snelste (${(winnaar.ms / 1000).toFixed(1)} s)` : "Iemand anders was sneller…"}</div>
            <div style={{ fontSize: 13.5, opacity: .85, marginTop: 4 }}>{winnaar.mens ? "Straks in het park: tik de bouwers één voor één af, zonder dat iemand het ziet." : "Straks in het park: doe je taken en ontmasker de bedrieger in de vergadering."}</div>
          </div>
          <button type="button" onClick={naarPark} style={HUD_KNOP}>🐾 Naar het park ▶</button>
        </div>
      )}

      {isTouch && fase === "lobby" && <div style={{ position: "absolute", top: 56, left: 0, right: 0, textAlign: "center", zIndex: 2, color: "#334155", fontFamily: "system-ui", fontWeight: 700, fontSize: 13, pointerEvents: "none" }}>links slepen = lopen · rechts slepen = kijken</div>}
    </div>
  );
}
