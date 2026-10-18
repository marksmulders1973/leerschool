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
import { bouwGameVragen, bouwLotingVraag } from "../features/zoo/game/vragenBron.js";
import { track } from "../utils.js";
import { verbindKamer, kamerSpelerId } from "../features/zoo/game/kamerNet.js";
import { maakParkRoom } from "../features/zoo/parkRoom.js";
import { ensureSession } from "../auth.js";

const KAMER = 20;      // meter, breed en diep
const HOOGTE = 5;      // meter
const OOG = 1.6;       // ooghoogte
const RAND = 0.6;      // hoe dicht je bij de muur mag
const MAX_SPELERS = 8; // jij + 7 bots (Mark 24 sep: elke echte speler erin = bot eruit)
const SOM_TIJD = 20;   // seconden om te antwoorden
const MAX_BEDR = Math.floor((MAX_SPELERS - 1) / 2); // 8 spelers → max 3 bedriegers: er blijven altijd meer bouwers over
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

// Waar elke bot nu staat (alle bots in de kamer), zodat ze niet door elkaar heen lopen.
const BOT_POS = new Map();
const BOT_AFSTAND = 0.9; // meter tussen twee bots

// Kortste draai van hoek a naar b (radialen), stapje k (0..1).
function draai(a, b, k) { const d = ((b - a + Math.PI * 3) % (Math.PI * 2)) - Math.PI; return a + d * Math.min(1, k); }

// Een bot in de kamer: blokkig poppetje met naam. Kleurt goud als hij de som goed had.
// 🚶 Mark 18 okt 2026: in de lobby lopen de bots rond (rustig wandelen, af en toe stilstaan). Zodra het spel
// begint, lopen ze vlot terug naar hun plek in de boog en kijken weer naar de muur.
function Bot({ bot, x, z, hoek, lopen = false }) {
  const g = useRef();
  const st = useRef(null);
  const doelRef = useRef({ x, z, hoek, lopen });
  doelRef.current = { x, z, hoek, lopen };
  useEffect(() => () => { BOT_POS.delete(bot.id); }, [bot.id]);
  useFrame((_, dtRaw) => {
    const el = g.current; if (!el) return;
    const dt = Math.min(dtRaw, 0.05);
    const s = st.current || (st.current = { x, z, yaw: hoek, doel: null, wacht: 0.5 + Math.random() * 2.5, t: Math.random() * 10, tempo: 1.1 + Math.random() * 0.6 });
    const d0 = doelRef.current;
    let tx = null, tz = null, snel = 6;
    if (d0.lopen) {
      snel = s.tempo;
      if (s.wacht > 0) s.wacht -= dt;
      else {
        if (!s.doel) { const lim = KAMER / 2 - 1.5; s.doel = { x: (Math.random() * 2 - 1) * lim, z: (Math.random() * 2 - 1) * lim }; }
        tx = s.doel.x; tz = s.doel.z;
      }
    } else { tx = d0.x; tz = d0.z; s.doel = null; s.wacht = 0; }
    let beweegt = false;
    if (tx != null) {
      const dx = tx - s.x, dz = tz - s.z, d = Math.hypot(dx, dz);
      const stap = Math.min(d, snel * dt);
      const nx = s.x + (dx / (d || 1)) * stap, nz = s.z + (dz / (d || 1)) * stap;
      // In de lobby: staat er een andere bot in de weg (en komen we dichterbij), dan even wachten en een andere kant op.
      let botst = false;
      if (d0.lopen) for (const [id, o] of BOT_POS) { if (id !== bot.id && Math.hypot(o.x - nx, o.z - nz) < BOT_AFSTAND && Math.hypot(o.x - nx, o.z - nz) < Math.hypot(o.x - s.x, o.z - s.z)) { botst = true; break; } }
      if (botst) { s.doel = null; s.wacht = 0.4 + Math.random() * 1.2; }
      else if (d > 0.05) { s.x = nx; s.z = nz; s.yaw = draai(s.yaw, Math.atan2(dx, dz), dt * 8); beweegt = true; }
      else if (d0.lopen) { s.doel = null; s.wacht = 1 + Math.random() * 4; }
    }
    if (!d0.lopen && !beweegt) s.yaw = draai(s.yaw, d0.hoek, dt * 8);
    s.t += dt;
    BOT_POS.set(bot.id, { x: s.x, z: s.z });
    el.position.set(s.x, beweegt ? Math.abs(Math.sin(s.t * 9)) * 0.07 : 0, s.z);
    el.rotation.y = s.yaw;
  });
  return (
    <group ref={g} position={[x, 0, z]} rotation={[0, hoek, 0]}>
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
  const [winnaars, setWinnaars] = useState(null);        // de bedriegers uit de loting: [{ id, naam, bot, ms }] (ms null = bijgeloot)
  // ⚙️ Aantal bedriegers (Mark 18 okt 2026): de leider kiest 1 t/m MAX_BEDR in het tandwiel; de snelsten met het
  // goede antwoord worden bedrieger. Gasten krijgen de keuze van de leider mee (bericht "inst" en bij "start").
  const leesAantal = () => { try { const v = parseInt(localStorage.getItem("lk_bedrieger_aantal"), 10); return v >= 1 && v <= MAX_BEDR ? v : 1; } catch { return 1; } };
  const [nBedr, setNBedr] = useState(leesAantal);
  const geloot = useRef([]);                             // snelle goede antwoorden van deze som, op volgorde
  // ⚙️ Menu achter het tandwiel (Mark 29 sep 2026): onderaan de code van 4 cijfers van deze kamer.
  // 🤝 Meedoen (Mark 29 sep): een vriend tikt die code in bij zíjn tandwiel en zit dan in jouw kamer;
  // elke echte speler vervangt een bot. De leider (kamer-eigenaar) stuurt start/uitslag/park, gasten
  // sturen hun antwoord. Kanaal: kamerNet.js (Supabase Realtime, geen database).
  const [menuOpen, setMenuOpen] = useState(false);
  const [code, setCode] = useState(() => String(1000 + Math.floor(Math.random() * 9000)));
  const mijnId = useMemo(() => kamerSpelerId(), []);
  const naam = (spelerNaam || "").trim() || "Speler";
  const [rolKamer, setRolKamer] = useState("leider");   // leider | gast
  const [spelers, setSpelers] = useState([]);           // presence: [{ id, naam, host }]
  const [hostNaam, setHostNaam] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [joinStand, setJoinStand] = useState(null);     // null | "zoeken" | "fout"
  const [statusMens, setStatusMens] = useState({});     // gast-id → 'goed' | 'fout'
  const [parkBezig, setParkBezig] = useState(false);
  const [parkFout, setParkFout] = useState("");
  const netRef = useRef(null);
  const ontvangRef = useRef(() => {});
  const verbind = (c, host) => {
    netRef.current?.close();
    setSpelers([]);
    netRef.current = verbindKamer({ code: c, id: mijnId, naam, host, on: { spelers: (l) => setSpelers(l), bericht: (van, d) => ontvangRef.current(van, d) } });
  };
  const stuur = (d) => netRef.current?.send(d);
  useEffect(() => { verbind(code, true); return () => netRef.current?.close(); }, []); // eslint-disable-line
  const gasten = spelers.filter((s) => s.id !== mijnId);
  const leider = spelers.find((s) => s.host) || null;
  const [laden, setLaden] = useState(false);
  const timers = useRef([]);
  const startMs = useRef(0);
  const beslist = useRef(false);
  const wis = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => () => wis(), []);

  // Alleen de leider beslist; gasten krijgen de uitslag via het kanaal.
  const klaar = (lijst) => {
    beslist.current = true; wis();
    setWinnaars(lijst);
    setFase("uitslag");
    try { document.exitPointerLock && document.exitPointerLock(); } catch { /* */ }
    const w0 = lijst[0];
    try { track("bedrieger_loting", { winnaar: w0.bot ? "bot" : (w0.id === mijnId ? "mens" : "gast"), ms: w0.ms, groep, spelers: 1 + gasten.length, bedriegers: lijst.length, bots: lijst.filter((w) => w.bot).length, bijgeloot: lijst.filter((w) => w.ms == null).length }); } catch { /* */ }
    stuur({ t: "uitslag", lijst });
  };
  // Elk goed antwoord telt in volgorde; zodra er genoeg snelle goede antwoorden zijn, ligt de loting vast.
  const beslis = (id, wieNaam, bot) => {
    if (beslist.current || geloot.current.some((w) => w.id === id)) return;
    geloot.current = [...geloot.current, { id, naam: wieNaam, bot: !!bot, ms: Date.now() - startMs.current }];
    if (geloot.current.length >= nBedr) klaar(geloot.current);
  };
  const toonSom = (v) => {
    setVraag(v); setGekozen(null); setBotStatus({}); setStatusMens({}); setTijd(SOM_TIJD); beslist.current = false; geloot.current = [];
    setFase("aftellen"); setAftel(3);
    timers.current.push(setTimeout(() => setAftel(2), 1000));
    timers.current.push(setTimeout(() => setAftel(1), 2000));
    timers.current.push(setTimeout(() => {
      setFase("som"); startMs.current = Date.now();
      try { document.exitPointerLock && document.exitPointerLock(); } catch { /* */ }
      for (let s = 1; s <= SOM_TIJD; s++) timers.current.push(setTimeout(() => setTijd(SOM_TIJD - s), s * 1000));
    }, 3000));
  };
  // Berichten van de anderen (leider ↔ gasten). Elke render opnieuw gezet, zodat de closures vers zijn.
  ontvangRef.current = (van, d) => {
    if (!d || !d.t) return;
    // Keuze van een leider: ook al tijdens het meedoen (rol nog niet omgezet), anders mist een nieuwe gast hem.
    if (d.t === "inst") { if (d.nBedr && van !== mijnId && spelers.some((s) => s.host && s.id === van) && (rolKamer === "gast" || joinStand === "zoeken")) setNBedr(d.nBedr); return; }
    if (rolKamer === "gast") {
      if (d.t === "start" && d.vraag) { wis(); if (d.nBedr) setNBedr(d.nBedr); toonSom(d.vraag); return; }
      if (d.t === "bot") { setBotStatus((s) => ({ ...s, [d.id]: d.goed ? "goed" : "fout" })); return; }
      if (d.t === "antw") { setStatusMens((s) => ({ ...s, [van]: d.goed ? "goed" : "fout" })); return; }
      if (d.t === "uitslag") { beslist.current = true; wis(); setWinnaars(Array.isArray(d.lijst) && d.lijst.length ? d.lijst : [{ id: d.id, naam: d.naam, bot: !!d.bot, ms: d.ms || 0 }]); setFase("uitslag"); try { document.exitPointerLock && document.exitPointerLock(); } catch { /* */ } return; }
      if (d.t === "opnieuw") { wis(); setFase("opnieuw"); return; }
      if (d.t === "park" && d.code) { try { track("bedrieger_naar_park", { gast: 1 }); } catch { /* */ } naarGedeeldPark(`/dierentuin?samen=${encodeURIComponent(d.code)}&game=1&gast=1`); return; }
    } else {
      if (d.t === "antw") {
        setStatusMens((s) => ({ ...s, [van]: d.goed ? "goed" : "fout" }));
        if (d.goed && fase === "som") beslis(van, d.naam || spelers.find((s) => s.id === van)?.naam || "Speler", false);
      }
    }
  };
  // Gast: meedoen-poging afronden zodra de leider in de presence-lijst staat (max 6 s)
  useEffect(() => {
    if (joinStand !== "zoeken") return undefined;
    const h = spelers.find((s) => s.host && s.id !== mijnId);
    if (h) { setRolKamer("gast"); setHostNaam(h.naam); setJoinStand(null); setMenuOpen(false); try { track("bedrieger_meedoen", { ok: 1 }); } catch { /* */ } return undefined; }
    const t = setTimeout(() => { setJoinStand("fout"); try { track("bedrieger_meedoen", { ok: 0 }); } catch { /* */ } verbind(code, true); }, 6000);
    return () => clearTimeout(t);
  }, [joinStand, spelers]); // eslint-disable-line
  const doeMee = () => {
    const c = joinCode.replace(/\D/g, "");
    if (c.length !== 4 || c === code) { setJoinStand("fout"); return; }
    setJoinStand("zoeken"); verbind(c, false);
  };
  const verlaatKamer = () => {
    setRolKamer("leider"); setHostNaam(""); setFase("lobby"); setWinnaars(null); setVraag(null); setNBedr(leesAantal()); wis();
    const nieuw = String(1000 + Math.floor(Math.random() * 9000)); setCode(nieuw); verbind(nieuw, true);
  };
  // Zit de leider er niet meer (tabblad dicht)? Dan terug naar je eigen kamer.
  const leiderWeg = rolKamer === "gast" && spelers.length > 0 && !spelers.some((s) => s.host);

  const startSom = async () => {
    if (rolKamer !== "leider") return;
    setLaden(true);
    let v = null;
    try { v = await bouwLotingVraag(groep); } catch { /* */ }
    if (!v) { try { const vs = await bouwGameVragen({ vak: "alles", groep: "eigen", level: groep, n: 1 }); v = vs && vs[0]; } catch { /* */ } }
    if (!v || !v.options) v = { q: "Wat is 7 × 8?", options: ["54", "56", "64", "48"], answer: 1 };
    setLaden(false);
    wis();
    stuur({ t: "start", vraag: v, nBedr });
    toonSom(v);
    const actief = botsActief;
    timers.current.push(setTimeout(() => {
      // bots: langzame rekenaars — 8 tot 15 s, 7 op de 10 goed; de eerste goede bot wint als geen mens sneller was
      actief.forEach((b) => {
        const na = 8000 + Math.random() * 7000;
        const goed = Math.random() < 0.7;
        timers.current.push(setTimeout(() => { setBotStatus((s) => ({ ...s, [b.id]: goed ? "goed" : "fout" })); stuur({ t: "bot", id: b.id, goed }); if (goed) beslis(b.id, b.naam, true); }, na));
      });
      timers.current.push(setTimeout(() => {
        if (beslist.current) return;
        if (!geloot.current.length) { wis(); setFase("opnieuw"); stuur({ t: "opnieuw" }); return; }
        // Tijd om, maar te weinig goede antwoorden voor het gekozen aantal: de rest wordt bijgeloot uit wie er nog over is.
        const kand = [{ id: mijnId, naam, bot: false }, ...gasten.map((g) => ({ id: g.id, naam: g.naam, bot: false })), ...actief.map((b) => ({ id: b.id, naam: b.naam, bot: true }))]
          .filter((k) => !geloot.current.some((w) => w.id === k.id)).sort(() => Math.random() - 0.5);
        klaar([...geloot.current, ...kand.slice(0, nBedr - geloot.current.length).map((k) => ({ ...k, ms: null }))]);
      }, SOM_TIJD * 1000 + 50));
    }, 3000));
  };

  const kiesBedr = (n) => {
    if (rolKamer !== "leider" || fase !== "lobby") return;
    setNBedr(n);
    try { localStorage.setItem("lk_bedrieger_aantal", String(n)); } catch { /* */ }
    try { track("bedrieger_aantal", { n }); } catch { /* */ }
  };
  // Leider: keuze doorgeven aan de gasten (ook aan wie later binnenkomt).
  // (Niet sturen zolang er een andere leider in het kanaal zit: dan ben je net aan het meedoen bij een vriend.)
  useEffect(() => { if (rolKamer === "leider" && !spelers.some((s) => s.host && s.id !== mijnId)) stuur({ t: "inst", nBedr }); }, [nBedr, gasten.length, rolKamer]); // eslint-disable-line

  const startSpel = () => {
    if (rolKamer !== "leider") return;
    try { track("bedrieger_lobby_start", { echt: 1 + gasten.length, bots: botsActief.length, groep }); } catch { /* */ }
    startSom();
  };

  const kies = (i) => {
    if (gekozen != null || fase !== "som") return;
    setGekozen(i);
    const goed = i === vraag.answer;
    try { track("question_answered", { bron: "bedrieger-kamer", correct: goed ? 1 : 0, groep }); } catch { /* */ }
    if (rolKamer === "gast") { stuur({ t: "antw", goed, naam, ms: Date.now() - startMs.current }); return; }
    if (goed) beslis(mijnId, naam, false);
  };

  // Zonder herladen naar het gedeelde park (URL bijwerken + pagina wisselen). Een harde navigatie
  // (window.location) liet de Supabase-auth-lock hangen ("Lock … was not released within 5000ms"),
  // waardoor het park bij de leider niet laadde (test 29 sep 2026).
  // Via de router (niet los pushState): anders ziet de router nog het oude pad en schrijft hij
  // "/dierentuin" zónder ?samen= terug, en opent iedereen zijn eigen park.
  const naarGedeeldPark = (url) => { onNaarPark && onNaarPark(null, url); };
  const naarPark = async () => {
    if (!winnaars || rolKamer !== "leider" || parkBezig) return;
    const bedrIds = new Set(winnaars.map((w) => w.id));
    const mijnRol = bedrIds.has(mijnId) ? "imposter" : "bouwer";
    const botBedriegers = winnaars.filter((w) => w.bot).length;
    if (!gasten.length) { onNaarPark && onNaarPark({ rol: mijnRol, nBots: botsActief.length, groep, vak: "alles", nImp: winnaars.length }); return; }
    // Met vrienden: een gedeeld park (parkcode) aanmaken, rollen bewaren voor het park, iedereen erheen sturen.
    setParkBezig(true); setParkFout("");
    try {
      await ensureSession();
      const roomCode = await maakParkRoom({ naam: `${naam} · bedrieger`, layout: [], terrain: null, owned: {} });
      const rollen = {}; for (const s of spelers) rollen[s.id] = bedrIds.has(s.id) ? "imposter" : "bouwer";
      sessionStorage.setItem("lk_bedrieger_auto", JSON.stringify({ rol: mijnRol, rollen, gasten: gasten.length, nBots: botsActief.length, botBedrieger: botBedriegers, nImp: winnaars.length, groep, vak: "alles" }));
      stuur({ t: "park", code: roomCode });
      try { track("bedrieger_naar_park", { gast: 0, gasten: gasten.length }); } catch { /* */ }
      setTimeout(() => naarGedeeldPark(`/dierentuin?samen=${roomCode}&game=1&kamer=1`), 700);
    } catch (e) {
      setParkBezig(false); setParkFout("Het park aanmaken lukte niet. Probeer het nog eens.");
      console.warn("[bedrieger] park", e?.message || e);
    }
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
  // Wie staat er in de boog: eerst de echte spelers (donker; de leider goud), dan bots tot het maximum.
  const botsActief = bots.slice(0, Math.max(0, MAX_SPELERS - 1 - gasten.length));
  const figuren = [
    ...gasten.map((g) => ({ id: g.id, naam: g.naam, kleur: g.host ? "#eab308" : "#111827", status: statusMens[g.id] || null })),
    ...botsActief.map((b) => ({ ...b, status: botStatus[b.id] || null })),
  ];
  // Uitslag vanuit mijn kant: ben ik bedrieger, met wie (mensen bij naam; bots krijgen in het park een andere naam, dus alleen tellen).
  const nUit = winnaars ? winnaars.length : nBedr;
  const mijnW = winnaars ? winnaars.find((w) => w.id === mijnId) : null;
  const maten = mijnW ? winnaars.filter((w) => w.id !== mijnId) : [];
  const matenDelen = [...maten.filter((w) => !w.bot).map((w) => w.naam), ...(maten.some((w) => w.bot) ? [maten.filter((w) => w.bot).length === 1 ? "een bot" : `${maten.filter((w) => w.bot).length} bots`] : [])];
  const samenTekst = matenDelen.length ? ` Samen met ${matenDelen.join(" en ")}.` : "";
  const snelZin = nBedr === 1 ? "wie hem het snelst goed heeft, is de bedrieger." : `de ${nBedr} snelsten met het goede antwoord worden bedrieger.`;
  const muur = fase === "aftellen" ? { tekst: String(aftel) }
    : fase === "som" && vraag ? { tekst: schoon(vraag.q), klein: `Nog ${tijd} seconden` }
    : fase === "uitslag" && winnaars ? { tekst: mijnW ? (nUit > 1 ? "Jij bent een bedrieger!" : "Jij bent de bedrieger!") : "Het spel begint…", klein: mijnW ? (nUit > 1 ? "Ssst! Je bent niet de enige…" : "Ssst, dat weet alleen jij.") : (nUit > 1 ? "Wie de bedriegers zijn, blijft geheim." : "Wie de bedrieger is, blijft geheim."), kleur: mijnW ? "#b42318" : "#111" }
    : fase === "opnieuw" ? { tekst: "Niemand goed…", klein: "Nog een som!" }
    : fase === "lobby" ? { tekst: "Wie is de bedrieger?", klein: `${1 + figuren.length} in de kamer · wacht op ${rolKamer === "gast" ? (hostNaam || "de leider") : "de leider"}` }
    : null;

  return (
    <div style={{ position: "fixed", inset: 0, background: "#f4f4f4", touchAction: "none" }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onTouchCancel={onTouchEnd}>
      <Canvas camera={{ fov: 75, near: 0.1, far: 100 }} gl={{ antialias: true }} dpr={[1, 1.5]}>
        <color attach="background" args={["#f4f4f4"]} />
        <Suspense fallback={null}>
          <Kamer />
          {figuren.map((b, i) => { const hoek = ((i + 1) / (figuren.length + 1)) * Math.PI - Math.PI / 2; return <Bot key={b.id} bot={b} x={Math.sin(hoek) * 6} z={-Math.cos(hoek) * 6 - 1} hoek={Math.PI + hoek} lopen={magLopen && String(b.id).startsWith("bot")} />; })}
          <Muurtekst {...(muur || {})} />
          <Speler toetsen={toetsen} touchLoop={touchLoop} touchKijk={touchKijk} mag={magLopen} />
          {!isTouch && magLopen && <PointerLockControls onLock={() => setGelockt(true)} onUnlock={() => setGelockt(false)} />}
        </Suspense>
      </Canvas>

      {/* HUD */}
      <button type="button" onClick={onTerug} style={{ position: "absolute", top: 12, left: 12, zIndex: 3, background: "rgba(15,23,42,.85)", color: "#fff", border: "none", borderRadius: 999, padding: "8px 14px", fontWeight: 800, fontFamily: "system-ui", cursor: "pointer" }}>← Terug</button>
      <div style={{ position: "absolute", top: 12, right: 12, zIndex: 3, background: "rgba(15,23,42,.85)", color: "#fff", borderRadius: 999, padding: "8px 14px", fontWeight: 800, fontFamily: "system-ui", maxWidth: "calc(100vw - 130px)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>🕵️ {nBedr > 1 ? `${nBedr} bedriegers` : "Bedrieger"} · {1 + figuren.length} spelers{gasten.length ? ` · ${1 + gasten.length} echt` : ""}</div>
      {/* ⚙️ Tandwiel rechts (Mark 29 sep 2026) → menu met onderaan de kamercode (4 cijfers). Echt icoon, geen emoji. */}
      {menuOpen && (
        <div role="dialog" aria-label="Instellingen" onPointerDown={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()}
          style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", right: 72, maxHeight: "60vh", width: "min(260px, calc(100vw - 96px))", zIndex: 4, background: "rgba(15,23,42,.94)", color: "#fff", borderRadius: 18, padding: "16px 16px 14px", display: "flex", flexDirection: "column", fontFamily: "system-ui", boxShadow: "0 10px 30px rgba(0,0,0,.35)" }}>
          <div style={{ fontWeight: 900, fontSize: 17 }}>Instellingen</div>
          {rolKamer === "gast" ? (
            <div style={{ marginTop: 8, marginBottom: 14, fontSize: 13.5, lineHeight: 1.5 }}>
              <div>Je zit in de kamer van <b>{hostNaam || "de leider"}</b>.</div>
              <div style={{ marginTop: 6 }}>Bedriegers: <b>{nBedr}</b> <span style={{ color: "rgba(255,255,255,.7)" }}>(kiest {hostNaam || "de leider"})</span></div>
              <button type="button" onClick={verlaatKamer} style={{ marginTop: 10, background: "rgba(255,255,255,.12)", color: "#fff", border: "none", borderRadius: 999, padding: "8px 14px", fontWeight: 800, fontFamily: "system-ui", cursor: "pointer" }}>Kamer verlaten</button>
            </div>
          ) : (
            <div style={{ marginTop: 8, marginBottom: 14, fontSize: 13.5, lineHeight: 1.5 }}>
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,.7)" }}>Aantal bedriegers</div>
                <div role="radiogroup" aria-label="Aantal bedriegers" style={{ display: "flex", gap: 8, marginTop: 6 }}>
                  {Array.from({ length: MAX_BEDR }, (_, i) => i + 1).map((n) => (
                    <button key={n} type="button" role="radio" aria-checked={nBedr === n} onClick={() => kiesBedr(n)} disabled={fase !== "lobby"}
                      style={{ flex: 1, border: "none", borderRadius: 10, padding: "8px 0", fontSize: 18, fontWeight: 900, fontFamily: "system-ui", color: "#fff", cursor: fase === "lobby" ? "pointer" : "default", opacity: fase === "lobby" || nBedr === n ? 1 : .5, background: nBedr === n ? "linear-gradient(135deg,#e2574c,#b0332a)" : "rgba(255,255,255,.12)" }}>{n}</button>
                  ))}
                </div>
                {fase !== "lobby" && <div style={{ marginTop: 6, fontSize: 12, color: "rgba(255,255,255,.7)" }}>Aanpassen kan weer in de volgende ronde.</div>}
              </div>
              {gasten.length > 0
                ? <div><b>{gasten.length}</b> {gasten.length === 1 ? "vriend doet mee" : "vrienden doen mee"}: {gasten.map((g) => g.naam).join(", ")}</div>
                : <div style={{ color: "rgba(255,255,255,.7)" }}>Vrienden laten meedoen? Zij tikken de code hieronder in bij hún tandwiel.</div>}
              {gasten.length === 0 && (
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,.7)" }}>Zelf meedoen bij een vriend?</div>
                  <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                    <input value={joinCode} onChange={(e) => { setJoinCode(e.target.value.replace(/\D/g, "").slice(0, 4)); setJoinStand(null); }} onKeyDown={(e) => { e.stopPropagation(); if (e.key === "Enter") doeMee(); }}
                      inputMode="numeric" pattern="[0-9]*" maxLength={4} placeholder="code" aria-label="Code van een vriend"
                      style={{ flex: 1, minWidth: 0, borderRadius: 10, border: "none", padding: "9px 10px", fontSize: 20, fontWeight: 900, letterSpacing: 4, textAlign: "center", fontFamily: "system-ui", color: "#0f172a", background: "#fff" }} />
                    <button type="button" onClick={doeMee} disabled={joinStand === "zoeken" || joinCode.length !== 4}
                      style={{ background: "#22c55e", color: "#fff", border: "none", borderRadius: 10, padding: "0 14px", fontWeight: 900, fontFamily: "system-ui", cursor: "pointer", opacity: joinStand === "zoeken" || joinCode.length !== 4 ? .5 : 1 }}>
                      {joinStand === "zoeken" ? "…" : "Meedoen"}
                    </button>
                  </div>
                  {joinStand === "fout" && <div style={{ marginTop: 6, fontSize: 12.5, color: "#fca5a5", fontWeight: 700 }}>Geen kamer met die code gevonden. Zit de leider nog in de kamer?</div>}
                </div>
              )}
            </div>
          )}
          <div style={{ borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: 12, textAlign: "center" }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,.7)", letterSpacing: .5, textTransform: "uppercase" }}>Code van deze kamer</div>
            <div style={{ fontSize: 40, fontWeight: 900, letterSpacing: 8, marginTop: 2, fontVariantNumeric: "tabular-nums" }} aria-label={`Code ${code.split("").join(" ")}`}>{code}</div>
          </div>
        </div>
      )}
      <button type="button" aria-label="Instellingen" aria-expanded={menuOpen} title="Instellingen"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => { e.stopPropagation(); /* niet naar document: PointerLockControls luistert daar en zou de muis vangen */ setMenuOpen((o) => !o); if (!menuOpen) { try { track("bedrieger_menu_open", {}); } catch { /* */ } } }}
        style={{ position: "absolute", top: "50%", right: 12, transform: "translateY(-50%)", zIndex: 5, width: 48, height: 48, borderRadius: 999, border: "none", background: menuOpen ? "#fff" : "rgba(15,23,42,.85)", color: menuOpen ? "#0f172a" : "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3.2" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.56 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1z" />
        </svg>
      </button>

      {fase === "lobby" && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 22, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, zIndex: 3 }}>
          <div style={{ ...HUD_PANEEL, textAlign: "center", maxWidth: 520 }}>
            {rolKamer === "gast" ? (
              <>
                <div style={{ fontWeight: 900, fontSize: 18 }}>{leiderWeg ? "De leider is weg" : `Je zit in de kamer van ${hostNaam || "de leider"}`}</div>
                <div style={{ fontSize: 13.5, opacity: .85, marginTop: 4 }}>{leiderWeg ? "Het tabblad van de leider is dicht of de verbinding is weg." : `Wacht tot ${hostNaam || "de leider"} op Start drukt. Dan komt er één som op de muur: ${snelZin}`}</div>
              </>
            ) : (
              <>
                <div style={{ fontWeight: 900, fontSize: 18 }}>Jij bent de leider</div>
                <div style={{ fontSize: 13.5, opacity: .85, marginTop: 4 }}>{gasten.length ? `${gasten.length} ${gasten.length === 1 ? "vriend" : "vrienden"} en ${botsActief.length} bots doen mee.` : `${botsActief.length} bots doen mee. Vrienden erbij? Tandwiel → code.`} Straks komt er één som op de muur: {snelZin} Bots rekenen langzaam.</div>
              </>
            )}
            {!isTouch && !gelockt && <div style={{ fontSize: 12.5, opacity: .7, marginTop: 6 }}>Klik in beeld om rond te lopen · WASD of pijltjes · Esc = muis vrij</div>}
          </div>
          {rolKamer === "gast"
            ? (leiderWeg && <button type="button" onClick={verlaatKamer} style={HUD_KNOP}>Terug naar mijn eigen kamer</button>)
            : <button type="button" onClick={startSpel} disabled={laden} style={{ ...HUD_KNOP, opacity: laden ? .6 : 1 }}>{laden ? "Som laden…" : "▶ Start spel"}</button>}
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
            {gekozen != null && gekozen !== vraag.answer && <div style={{ marginTop: 8, fontSize: 13.5, color: "#fca5a5", fontWeight: 700 }}>Helaas… wacht af wie het goed heeft.</div>}
            {gekozen != null && gekozen === vraag.answer && <div style={{ marginTop: 8, fontSize: 13.5, color: "#86efac", fontWeight: 700 }}>{rolKamer === "gast" ? (nBedr === 1 ? "Goed! Even kijken of jij de snelste was…" : `Goed! Even kijken of jij bij de ${nBedr} snelsten was…`) : (nBedr === 1 ? "Goed! En sneller dan iedereen." : "Goed! Even kijken wie er nog meer snel is…")}</div>}
          </div>
        </div>
      )}

      {fase === "opnieuw" && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 22, display: "flex", justifyContent: "center", zIndex: 3 }}>
          {rolKamer === "gast" ? <div style={HUD_PANEEL}>Wacht op {hostNaam || "de leider"} voor een nieuwe som…</div> : <button type="button" onClick={startSom} style={HUD_KNOP}>🔁 Nog een som</button>}
        </div>
      )}

      {fase === "uitslag" && winnaars && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 22, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, zIndex: 3 }}>
          <div style={{ ...HUD_PANEEL, textAlign: "center", maxWidth: 520 }}>
            <div style={{ fontWeight: 900, fontSize: 18 }}>{mijnW ? (mijnW.ms == null ? "Jij bent erbij geloot" : nUit > 1 ? `Jij was bij de ${nUit} snelsten (${(mijnW.ms / 1000).toFixed(1)} s)` : `Jij was de snelste (${(mijnW.ms / 1000).toFixed(1)} s)`) : (nUit > 1 ? "Anderen waren sneller…" : "Iemand anders was sneller…")}</div>
            <div style={{ fontSize: 13.5, opacity: .85, marginTop: 4 }}>{mijnW ? `Straks in het park: tik de bouwers één voor één af, zonder dat iemand het ziet.${samenTekst}` : `Straks in het park: doe je taken en ontmasker ${nUit > 1 ? `de ${nUit} bedriegers` : "de bedrieger"} in de vergadering.`}</div>
            {parkFout && <div style={{ marginTop: 6, fontSize: 13, color: "#fca5a5", fontWeight: 700 }}>{parkFout}</div>}
          </div>
          {rolKamer === "gast"
            ? <div style={HUD_PANEEL}>Wacht op {hostNaam || "de leider"}: die opent het park voor iedereen…</div>
            : <button type="button" onClick={naarPark} disabled={parkBezig} style={{ ...HUD_KNOP, opacity: parkBezig ? .6 : 1 }}>{parkBezig ? "Park maken…" : "🐾 Naar het park ▶"}</button>}
        </div>
      )}

      {isTouch && fase === "lobby" && <div style={{ position: "absolute", top: 56, left: 0, right: 0, textAlign: "center", zIndex: 2, color: "#334155", fontFamily: "system-ui", fontWeight: 700, fontSize: 13, pointerEvents: "none" }}>links slepen = lopen · rechts slepen = kijken</div>}
    </div>
  );
}
