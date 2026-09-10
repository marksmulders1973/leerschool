// 🎮 Wie is de imposter? — presentatie in de 3D-scène + HUD.
// Fase 1 (solo met bots) én fase 2 (meerdere spelers via de parkcode, 9 sep 2026).
// Logica: imposterEngine.js. Regels: docs/plannen-park/GAME-MODUS-IMPOSTER.md.
//
// Multiplayer is host-autoritair: wie het spel start (de spelleider) draait de
// engine en de bots, en stuurt 2×/s een compacte spelstand (snapshot) naar de
// anderen via `net.send` (doorgeefstation, anders Supabase). Medespelers sturen
// alleen acties (taak klaar, tik, vergadering, stem) naar de spelleider. Rollen
// gaan als los bericht per speler; in de snapshot staat alleen de rol van wie al
// uitgestemd is of als het spel klaar is.
import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import CharacterModel from "../CharacterModel";
import { zepPositie, zepCamera } from "./Zeppelin.jsx";
import { bouwStartVragen } from "../../onboarding/startKwartier.js";
import { bouwGameVragen, VAKKEN, GROEPEN, groepLabel } from "./vragenBron.js";
import { haalKlassement, bewaarScores } from "../parkRoom.js";
import { track } from "../../../utils.js";
import { MAX_SPELERS, isAf, maakStations, maakSpel, tick, speler, actieveSpelers, magTikken, tik, dichtstbijStation, magTaak, taakKlaar, startVergadering, stem, sluitVergadering, scoreVan, alleGestemd, maakSnapshot, pasSnapshotToe, SPEL_DUUR, VERGADERING_S } from "./imposterEngine.js";

const PARK_R = 70;
const SNAP_MS = 500;
const HUD_POS = (_e, _c, size) => [size.width / 2, size.height / 2];
const KNOP = { pointerEvents: "auto", border: "3px solid #fff", borderRadius: 999, padding: "12px 20px", font: "900 16px system-ui", color: "#fff", background: "linear-gradient(135deg,#2f6fd6,#1f4fa8)", boxShadow: "0 5px 18px rgba(0,0,0,.45)", cursor: "pointer", whiteSpace: "nowrap" };
const KNOP_ROOD = { ...KNOP, background: "linear-gradient(135deg,#e2574c,#b0332a)" };
const KNOP_GRIJS = { ...KNOP, background: "#3a4754", border: "2px solid #6b7785", font: "800 14px system-ui", padding: "9px 14px" };
const KAART = { pointerEvents: "auto", background: "#fffef8", color: "#1c2840", borderRadius: 18, padding: "18px 20px", width: "min(460px, 94vw)", boxShadow: "0 12px 40px rgba(0,0,0,.45)", font: "500 15px/1.5 system-ui" };
const schoon = (s) => String(s || "").replace(/\*\*/g, "").replace(/`/g, "");

function Bot({ sp, stRef, heightRef, soepel }) {
  const g = useRef(); const moving = useRef(0);
  const cur = useRef({ x: sp.x, z: sp.z, yaw: 0 });
  const [label, setLabel] = useState("");
  useFrame((_, dtRaw) => {
    const s = stRef.current && speler(stRef.current, sp.id); const n = g.current; if (!s || !n) return;
    if (soepel) { const k = Math.min(1, Math.min(0.05, dtRaw) * 6); cur.current.x += (s.x - cur.current.x) * k; cur.current.z += (s.z - cur.current.z) * k; let dy = (s.yaw || 0) - cur.current.yaw; while (dy > Math.PI) dy -= Math.PI * 2; while (dy < -Math.PI) dy += Math.PI * 2; cur.current.yaw += dy * k; }
    else { cur.current.x = s.x; cur.current.z = s.z; cur.current.yaw = s.yaw || 0; }
    if (s.af || s.uitgestemd) {
      // 🎈 af = in de gondel van de zeppelin (plekje op volgorde van het spelers-lijstje)
      const idx = stRef.current.spelers.filter((x) => x.af || x.uitgestemd).findIndex((x) => x.id === s.id);
      const zp = zepPositie(_.clock.elapsedTime, idx);
      n.position.set(zp.x, zp.y, zp.z); n.rotation.y = zp.yaw;
      moving.current = 0;
      const l = `🎈 ${s.naam}`; if (l !== label) setLabel(l);
      return;
    }
    const y = heightRef?.current ? heightRef.current(cur.current.x, cur.current.z) : 0;
    n.position.set(cur.current.x, y, cur.current.z); n.rotation.y = cur.current.yaw;
    moving.current = s.moving ? 1 : 0;
    const l = s.uitgestemd ? `🪑 ${s.naam}` : s.bevroren > 0 ? `❄️ ${s.naam}` : s.bezig > 0 ? `🔧 ${s.naam}` : s.naam;
    if (l !== label) setLabel(l);
  });
  return (
    <group ref={g}>
      <CharacterModel key={sp.avatar} url={sp.avatar} movingRef={moving} targetHeight={1.55} />
      <Html position={[0, 2.05, 0]} center distanceFactor={10} zIndexRange={[5, 0]} style={{ pointerEvents: "none" }}>
        <div style={{ background: label.startsWith("❄️") ? "#d6ecff" : "rgba(255,255,255,.92)", borderRadius: 999, padding: "2px 9px", font: "800 12px system-ui", color: "#2a3340", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(0,0,0,.25)" }}>{label}</div>
      </Html>
    </group>
  );
}

function Station({ s, heightRef, gedaan }) {
  const y = heightRef?.current ? heightRef.current(s.x, s.z) : 0;
  return (
    <group position={[s.x, y, s.z]}>
      <mesh position={[0, 1.1, 0]} castShadow><cylinderGeometry args={[0.09, 0.11, 2.2, 8]} /><meshStandardMaterial color="#5a4632" roughness={0.9} /></mesh>
      <mesh position={[0, 2.35, 0]} castShadow><boxGeometry args={[1.6, 0.9, 0.08]} /><meshStandardMaterial color={gedaan ? "#2e9e4f" : "#f2b134"} roughness={0.7} /></mesh>
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}><ringGeometry args={[2.6, 3.1, 32]} /><meshStandardMaterial color={gedaan ? "#2e9e4f" : "#f2b134"} transparent opacity={0.55} /></mesh>
      <Html position={[0, 2.35, 0.06]} center distanceFactor={14} zIndexRange={[4, 0]} style={{ pointerEvents: "none" }}>
        <div style={{ font: "900 15px system-ui", color: "#1c2840", whiteSpace: "nowrap" }}>{s.emoji} {s.naam}{gedaan ? " ✓" : ""}</div>
      </Html>
    </group>
  );
}

/**
 * net (optioneel, gedeeld park): { actief, mijnId, naam, avatar, send(d), luister(fn)→unsub, peers()→Map }
 * host: true = ik ben de spelleider (start het spel, draait bots en engine)
 */
export default function ImposterGame({ playerRef, heightRef, isSolid, teleportRef, spelerNaam = "", avatarUrl = "", level = "6", onKlaar, onStop, net = null, host = true, onRit = null }) {
  const multi = !!(net && net.actief);
  const mijnId = multi ? net.mijnId : "ik";
  const stRef = useRef(null);
  const [, setN] = useState(0);
  const [taak, setTaak] = useState(null);
  const [laatsteUitkomst, setLaatsteUitkomst] = useState(null);
  const [rolKeuze, setRolKeuze] = useState(multi ? "random" : null);
  const [lobby, setLobby] = useState([]);            // host: wie deed mee [{id,naam,avatar}]
  const [hostNaam, setHostNaam] = useState("");      // client: wie is de spelleider
  // fase 3: keuzes van de spelleider + klassement per parkcode
  const [vak, setVak] = useState("alles");
  const [groep, setGroep] = useState("eigen");
  const [nImp, setNImp] = useState(1);
  const [klassement, setKlassement] = useState(null);
  const scoresBewaard = useRef(false);
  const bevrorenPos = useRef(null);
  const inZeppelin = useRef(false);   // 🎈 ik ben af en kijk mee vanuit de zeppelin
  useEffect(() => () => { if (inZeppelin.current) { inZeppelin.current = false; onRit && onRit(false); } }, []); // eslint-disable-line
  const laatsteSnap = useRef(0);
  const uitkomstGezien = useRef(null);
  const vrijPlek = useMemo(() => (x, z) => Math.hypot(x, z) < PARK_R && !(isSolid && isSolid(x, z)), [isSolid]);

  // host (of solo): lokale spelstand
  if (host && !stRef.current) {
    const stations = maakStations(32, 6, vrijPlek);
    stRef.current = maakSpel({ spelerId: mijnId, spelerNaam: spelerNaam || "Jij", avatar: avatarUrl, nBots: 5, stations });
  }
  const st = stRef.current;
  const mij = st ? speler(st, mijnId) : null;

  useEffect(() => { const t = setInterval(() => setN((n) => n + 1), 250); return () => clearInterval(t); }, []);
  // klassement van deze parkcode (alleen in een gedeeld park)
  useEffect(() => { if (!multi || !net.code) return; haalKlassement(net.code).then(setKlassement).catch(() => setKlassement([])); }, [multi]); // eslint-disable-line
  useEffect(() => { try { track("game_start", { groep: level, multi: multi ? 1 : 0, host: host ? 1 : 0 }); } catch { /* */ } }, []); // eslint-disable-line

  // ── netwerk ──
  useEffect(() => {
    if (!multi) return undefined;
    if (!host) net.send({ t: "join", naam: spelerNaam || "Speler", avatar: avatarUrl });
    const unsub = net.luister((van, d) => {
      if (!d) return;
      if (host) {
        const s = stRef.current;
        if (d.t === "join") { setLobby((l) => (l.some((x) => x.id === van) || l.length >= MAX_SPELERS - 1 ? l : [...l, { id: van, naam: d.naam || "Speler", avatar: d.avatar || "" }])); if (s && s.fase !== "intro") { /* laatkomer: alleen kijken */ } return; }
        if (d.t === "leave") { setLobby((l) => l.filter((x) => x.id !== van)); return; }
        if (!s || s.fase === "intro") return;
        if (d.t === "taak") { taakKlaar(s, van, d.stationId, d.goed, d.totaal); }
        else if (d.t === "tik") { const dader = speler(s, van); if (dader) tik(s, van, d.doelId); }
        else if (d.t === "verg") { startVergadering(s, van); }
        else if (d.t === "stem") { stem(s, van, d.opId || null, d.reden || null); if (alleGestemd(s)) sluitVergadering(s); }
        setN((n) => n + 1);
      } else {
        if (d.t === "invite" || d.t === "lobby") { setHostNaam(d.naam || ""); if (d.spelers) setLobby(d.spelers); return; }
        // 10 sep 2026: placeholder mét stations — de rolkaart kwam soms vóór de eerste snapshot ("stations is not iterable" → park van de gast viel om)
        if (d.t === "rol" && d.voor === mijnId) { stRef.current = stRef.current || { spelerId: mijnId, spelers: [], stations: [], log: [], fase: "intro", takenKlaar: 0, takenTotaal: 0, spelTijd: 0 }; stRef.current.mijnRol = d.rol; const m = stRef.current.spelers?.find((x) => x.id === mijnId); if (m) m.rol = d.rol; return; }
        if (d.t === "snap") { const vorige = stRef.current?.fase; stRef.current = pasSnapshotToe(stRef.current, d.st, mijnId); const m = speler(stRef.current, mijnId); if (m && stRef.current.mijnRol) m.rol = stRef.current.mijnRol; if (vorige === "vergadering" && stRef.current.fase !== "vergadering" && stRef.current.vergadering?.uitkomst) { const u = stRef.current.vergadering.uitkomst; if (uitkomstGezien.current !== u.tekst) { uitkomstGezien.current = u.tekst; setLaatsteUitkomst(u); setTimeout(() => setLaatsteUitkomst(null), 4500); } } setN((n) => n + 1); return; }
        if (d.t === "stop") { onStop && onStop(); return; }
      }
    });
    return () => { unsub && unsub(); if (!host) { try { net.send({ t: "leave" }); } catch { /* */ } } };
  }, [multi, host]); // eslint-disable-line

  // host: uitnodiging + lobby-stand uitzenden
  useEffect(() => {
    if (!multi || !host) return undefined;
    const zend = () => net.send({ t: "lobby", naam: spelerNaam || "Speler", spelers: [{ id: mijnId, naam: spelerNaam || "Speler" }, ...lobby] });
    zend();
    const t = setInterval(() => { if (stRef.current?.fase === "intro") zend(); }, 3000);
    return () => clearInterval(t);
  }, [multi, host, lobby]); // eslint-disable-line

  useFrame((s, dtRaw) => {
    const dt = Math.min(0.05, dtRaw);
    const st = stRef.current; if (!st) return;
    const p = playerRef?.current;
    const m = speler(st, mijnId);
    if (host) {
      const vorigeFase = st.fase;
      tick(st, dt, p ? { x: p.x, z: p.z } : null, vrijPlek, multi ? net.peers() : null);
      if (multi && st.fase === "vergadering" && alleGestemd(st)) sluitVergadering(st);
      if (vorigeFase === "vergadering" && st.fase !== "vergadering" && st.vergadering?.uitkomst) { setLaatsteUitkomst(st.vergadering.uitkomst); setTimeout(() => setLaatsteUitkomst(null), 4500); try { track("game_vergadering", { imposter: st.vergadering.uitkomst.imposter ? 1 : 0 }); } catch { /* */ } }
      if (vorigeFase !== "einde" && st.fase === "einde") {
        try { const sc = scoreVan(st); track("game_einde", { gewonnen: sc.gewonnen ? 1 : 0, rol: sc.rol, punten: sc.punten, duur: sc.duur, multi: multi ? 1 : 0, vak: st.vak, imposters: st.nImp }); } catch { /* */ }
        if (multi && net.code && !scoresBewaard.current) {
          scoresBewaard.current = true;
          const rijen = st.spelers.filter((s) => !s.bot).map((s) => ({ naam: s.naam === "Jij" ? "Speler" : s.naam, punten: s.punten, gewonnen: (st.uitkomst.gewonnen === "bouwers") === (s.rol === "bouwer"), rol: s.rol, vak: st.vak }));
          bewaarScores(net.code, rijen).then(() => haalKlassement(net.code)).then((k) => { if (k) setKlassement(k); }).catch(() => {});
        }
      }
      // snapshot naar medespelers
      if (multi && st.fase !== "intro") { const nu = performance.now(); if (nu - laatsteSnap.current > SNAP_MS) { laatsteSnap.current = nu; net.send({ t: "snap", st: maakSnapshot(st) }); } }
    } else if (st.fase === "vergadering" && st.vergadering) { st.vergadering.t += dt; }
    // 🎈 af (getikt/uitgestemd) = meekijken vanuit de zeppelin: camera in de gondel, poppetje verborgen
    const af = m && isAf(m) && st.fase !== "einde";
    if (af !== inZeppelin.current) { inZeppelin.current = af; onRit && onRit(af); }
    if (af) {
      // 🎈 meevaren in een bedank-zeppelin: camera achter het gondeldek, blik op het park
      const idx = Math.max(0, st.spelers.filter(isAf).findIndex((x) => x.id === mijnId));
      const c = zepCamera(s.clock.elapsedTime, idx);
      s.camera.position.set(c.pos.x, c.pos.y, c.pos.z);
      s.camera.lookAt(c.kijk.x, c.kijk.y, c.kijk.z);
    }
    // bevroren = niet kunnen lopen
    if (m && m.bevroren > 0 && p) {
      if (!bevrorenPos.current) bevrorenPos.current = { x: p.x, z: p.z };
      if (teleportRef && Math.hypot(p.x - bevrorenPos.current.x, p.z - bevrorenPos.current.z) > 0.3) teleportRef.current = { ...bevrorenPos.current };
    } else bevrorenPos.current = null;
  });

  // ── acties ──
  const startSpel = () => {
    if (!host) return;
    const stations = maakStations(32, 6, vrijPlek);
    const extra = multi ? lobby.map((l) => ({ id: l.id, naam: l.naam, avatar: l.avatar })) : [];
    const nBots = Math.max(0, Math.min(Math.max(1, 5 - extra.length), MAX_SPELERS - 1 - extra.length));
    stRef.current = maakSpel({ spelerId: mijnId, spelerNaam: spelerNaam || "Jij", avatar: avatarUrl, nBots, stations, spelerRolKeuze: rolKeuze === "random" ? null : rolKeuze, extraSpelers: extra, nImposters: nImp, vak, groep });
    scoresBewaard.current = false;
    stRef.current.fase = "spel";
    if (multi) { for (const sp of stRef.current.spelers) if (!sp.bot && sp.id !== mijnId) net.send({ t: "rol", voor: sp.id, rol: sp.rol }); net.send({ t: "snap", st: maakSnapshot(stRef.current) }); }
    setN((n) => n + 1);
  };
  const station = st && playerRef?.current ? dichtstbijStation(st, { x: playerRef.current.x, z: playerRef.current.z }) : null;
  const mijMetPos = mij && playerRef?.current ? { ...mij, x: playerRef.current.x, z: playerRef.current.z } : mij;
  const doelTik = st && mij && mij.rol === "imposter" ? actieveSpelers(st).find((s) => magTikken(st, mijMetPos, s)) : null;
  const openTaak = async () => {
    if (!station || !mij || !magTaak(st, mij, station) || taak) return;
    setTaak({ stationId: station.id, vragen: null, idx: 0, goed: 0, gekozen: null });
    try { const v = await bouwGameVragen({ vak: st.vak, groep: st.groep, level, n: 3 }); setTaak((t) => (t ? { ...t, vragen: v.slice(0, 3) } : t)); }
    catch { setTaak((t) => (t ? { ...t, vragen: [] } : t)); }
  };
  const kiesOptie = (i) => {
    setTaak((t) => {
      if (!t || t.gekozen != null) return t;
      const v = t.vragen[t.idx]; const goed = i === v.answer;
      try { track("question_answered", { bron: "game", correct: goed ? 1 : 0, groep: level }); track("game_taak", { goed: goed ? 1 : 0 }); } catch { /* */ }
      return { ...t, gekozen: i, goed: t.goed + (goed ? 1 : 0) };
    });
  };
  const volgendeVraag = () => {
    setTaak((t) => {
      if (!t) return t;
      if (t.idx + 1 < t.vragen.length) return { ...t, idx: t.idx + 1, gekozen: null };
      if (host) taakKlaar(stRef.current, mijnId, t.stationId, t.goed, t.vragen.length);
      else { net.send({ t: "taak", stationId: t.stationId, goed: t.goed, totaal: t.vragen.length }); const m = speler(stRef.current, mijnId); if (m) m.laatstePost = t.stationId; }
      return null;
    });
  };
  const roep = () => { if (host) { if (startVergadering(st, mijnId)) setN((n) => n + 1); } else net.send({ t: "verg" }); };
  const doeTik = () => { if (!doelTik) return; if (host) { if (tik(st, mijnId, doelTik.id)) setN((n) => n + 1); } else net.send({ t: "tik", doelId: doelTik.id }); try { track("game_tik", {}); } catch { /* */ } };
  const stemOp = (opId, reden) => { if (host) { stem(st, mijnId, opId, reden); if (multi && alleGestemd(st)) sluitVergadering(st); } else { stem(st, mijnId, opId, reden); net.send({ t: "stem", opId, reden }); } setN((n) => n + 1); };
  const klaar = () => { onKlaar && onKlaar(scoreVan({ ...st, spelerId: mijnId })); };
  const stop = () => { if (multi && host) { try { net.send({ t: "stop" }); } catch { /* */ } } onStop && onStop(); };

  // 🔧 test-haakje (Playwright)
  useEffect(() => {
    window.__imposter = {
      st: () => stRef.current, host, mijnId,
      taak: async (stationId) => { const sid = stationId || stRef.current.stations[0].id; setTaak({ stationId: sid, vragen: null, idx: 0, goed: 0, gekozen: null }); try { const v = await bouwGameVragen({ vak: stRef.current.vak, groep: stRef.current.groep, level, n: 3 }); setTaak((t) => (t ? { ...t, vragen: v.slice(0, 3) } : t)); } catch { setTaak((t) => (t ? { ...t, vragen: [] } : t)); } },
      kies: (v, g, n) => { if (v) setVak(v); if (g) setGroep(g); if (n) setNImp(n); },
      winBouwers: () => { if (host && stRef.current) { stRef.current.takenKlaar = stRef.current.takenTotaal; setN((n) => n + 1); } },
      start: () => startSpel(),
    };
    return () => { delete window.__imposter; };
  }, [level, host, lobby, vak, groep, nImp, rolKeuze]); // eslint-disable-line

  // ── wachtscherm voor medespelers zonder spelstand ──
  if (!st || !mij) {
    return (
      <Html fullscreen zIndexRange={[12, 0]} style={{ pointerEvents: "none" }} calculatePosition={HUD_POS}>
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(10,20,40,.55)" }}>
          <div style={KAART}>
            <div style={{ font: "900 22px system-ui", marginBottom: 6 }}>🎮 Wie is de imposter?</div>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", margin: "0 0 10px" }}>
              <span style={{ background: "#fff3c4", border: "1px solid #e6c65a", borderRadius: 999, padding: "4px 12px", font: "800 13px system-ui" }}>👑 Spelleider: {hostNaam || "…"}</span>
              <span style={{ background: "#e8f0ff", border: "1px solid #bcd6f5", borderRadius: 999, padding: "4px 12px", font: "800 13px system-ui" }}>🙋 Jij bent gast</span>
            </div>
            <p style={{ margin: "0 0 8px" }}>Wachten tot {hostNaam || "de spelleider"} op Start drukt. Je krijgt je rol dan op dit scherm; niemand anders ziet 'm.</p>
            {lobby.length > 0 && <p style={{ margin: "0 0 8px", color: "#556" }}>In de lobby: {lobby.map((l) => l.naam).join(", ")}</p>}
            <button onClick={stop} style={KNOP_GRIJS}>Terug naar het park</button>
          </div>
        </div>
      </Html>
    );
  }

  const resterend = Math.max(0, SPEL_DUUR - st.spelTijd);
  const mm = Math.floor(resterend / 60), ss = String(Math.floor(resterend % 60)).padStart(2, "0");
  const echteSpelers = st.spelers.filter((s) => !s.bot).length;

  return (
    <>
      {(st.stations || []).map((s) => <Station key={s.id} s={s} heightRef={heightRef} gedaan={mij?.laatstePost === s.id} />)}
      {st.spelers.filter((s) => s.bot).map((sp) => <Bot key={sp.id} sp={sp} stRef={stRef} heightRef={heightRef} soepel={!host} />)}

      <Html fullscreen zIndexRange={[12, 0]} style={{ pointerEvents: "none" }} calculatePosition={HUD_POS}>
        {st.fase === "intro" && host && (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(10,20,40,.55)" }}>
            <div style={KAART}>
              <div style={{ font: "900 22px system-ui", marginBottom: 6 }}>🎮 Wie is de imposter?</div>
              {multi ? (
                <>
                  <p style={{ margin: "0 0 6px" }}>Jij bent de <b>spelleider</b>. Iedereen in dit park kreeg een uitnodiging. Zodra je op Start drukt, spelen jullie samen; bots vullen aan tot zes.</p>
                  <div style={{ background: "#f3efff", border: "1.5px solid #cbbcf5", borderRadius: 12, padding: "10px 12px", margin: "6px 0 10px" }}>
                    <div style={{ font: "800 13px system-ui", color: "#4a2aa8" }}>👑 Jij bent de spelleider · in de lobby ({1 + lobby.length})</div>
                    <div>👑 {spelerNaam || "Jij"}{lobby.map((l) => `, ${l.naam}`).join("")}</div>
                    {lobby.length === 0 && <div style={{ color: "#556", fontSize: 13 }}>Nog niemand… anderen zien de uitnodiging bovenin hun scherm.</div>}
                  </div>
                </>
              ) : (
                <>
                  <p style={{ margin: "0 0 8px", background: "#eef6ff", border: "1px solid #bcd6f5", borderRadius: 10, padding: "8px 12px", fontSize: 13 }}>👥 <b>Met vrienden of je klas spelen?</b> Dat kan alleen in een gedeeld park: sluit dit spel, kies ☰ → 🏫 Samen bouwen voor een parkcode, en start het spel dáár. Iedereen in dat park krijgt dan een uitnodiging (tot {MAX_SPELERS} spelers).</p>
                  <p style={{ margin: "0 0 8px" }}>Zes spelers in het park: jij en vijf maatjes. Eén is de <b>imposter</b>. <b>Bouwers</b> doen taken bij de gele posten: drie vragen op jouw niveau. De imposter doet alsof en kan een bouwer <b>tikken</b> als niemand kijkt: die is af en kijkt mee vanuit de zeppelin. Wie uitgestemd wordt ook.</p>
                  <p style={{ margin: "0 0 8px" }}>Zie je iets verdachts? Druk op 🚨 en stem. Imposter uitgestemd of alle taken klaar = bouwers winnen. Tijd om of twee keer verkeerd gestemd = imposter wint. Elk goed antwoord = 10 punten, punten worden munten.</p>
                </>
              )}
              <div style={{ font: "800 14px system-ui", margin: "10px 0 4px" }}>Vragen uit</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                {VAKKEN.map((v) => <button key={v.id} onClick={() => { setVak(v.id); if (v.id === "examens") setGroep("vo"); else if (groep === "vo") setGroep("eigen"); }} style={{ ...KNOP_GRIJS, padding: "7px 11px", font: "800 13px system-ui", background: vak === v.id ? "linear-gradient(135deg,#6a3fd6,#4a2aa8)" : "#3a4754" }}>{v.emoji} {v.label}</button>)}
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8, alignItems: "center" }}>
                <span style={{ font: "800 13px system-ui", color: "#556" }}>Niveau:</span>
                {GROEPEN.filter((g) => (vak === "examens" ? g === "vo" : g !== "vo")).map((g) => <button key={g} onClick={() => setGroep(g)} style={{ ...KNOP_GRIJS, padding: "6px 10px", font: "800 12.5px system-ui", background: groep === g ? "linear-gradient(135deg,#2f6fd6,#1f4fa8)" : "#3a4754" }}>{groepLabel(g)}</button>)}
              </div>
              {(multi ? 1 + lobby.length + Math.max(1, 5 - lobby.length) : 6) >= 6 && (
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8, alignItems: "center" }}>
                  <span style={{ font: "800 13px system-ui", color: "#556" }}>Imposters:</span>
                  {[1, 2].map((n) => <button key={n} onClick={() => setNImp(n)} style={{ ...KNOP_GRIJS, padding: "6px 12px", font: "800 12.5px system-ui", background: nImp === n ? "linear-gradient(135deg,#e2574c,#b0332a)" : "#3a4754" }}>{n}</button>)}
                </div>
              )}
              {multi && klassement && klassement.length > 0 && (
                <div style={{ background: "#fff8e1", border: "1px solid #f3d27a", borderRadius: 12, padding: "8px 12px", margin: "4px 0 8px", font: "700 13px system-ui" }}>
                  🏆 Klassement van dit park: {klassement.slice(0, 5).map((k, ix) => `${ix + 1}. ${k.naam} ${k.punten}`).join(" · ")}
                </div>
              )}
              <div style={{ font: "800 14px system-ui", margin: "10px 0 4px" }}>{multi ? "Jouw rol" : "Wie wil je zijn?"}</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                {[["random", "🎲 Verras me"], ["bouwer", "🔧 Bouwer"], ["imposter", "🕵️ Imposter"]].map(([k, l]) => (
                  <button key={k} onClick={() => setRolKeuze(k)} style={{ ...KNOP_GRIJS, background: rolKeuze === k ? "linear-gradient(135deg,#2f6fd6,#1f4fa8)" : "#3a4754" }}>{l}</button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button onClick={startSpel} disabled={!rolKeuze} style={{ ...KNOP, opacity: rolKeuze ? 1 : .5 }}>▶ Start{multi ? ` (${1 + lobby.length} speler${lobby.length ? "s" : ""})` : ""}</button>
                <button onClick={stop} style={KNOP_GRIJS}>Terug naar het park</button>
              </div>
            </div>
          </div>
        )}

        {st.fase === "spel" && !taak && (
          <>
            {st.spelTijd < 4 && (
              <div style={{ position: "absolute", left: "50%", top: 70, transform: "translateX(-50%)", pointerEvents: "none", background: mij.rol === "imposter" ? "#b0332a" : "#1f7a3a", color: "#fff", borderRadius: 16, padding: "12px 18px", font: "900 20px system-ui", boxShadow: "0 8px 24px rgba(0,0,0,.4)", textAlign: "center" }}>
                {mij.rol === "imposter" ? "🕵️ Jij bent de IMPOSTER" : "🔧 Jij bent BOUWER"}<div style={{ font: "700 13px system-ui", opacity: .9 }}>{mij.rol === "imposter" ? "Doe alsof. Tik bouwers als niemand kijkt." : "Doe taken bij de gele posten. Let op wie er vreemd doet."}</div>
              </div>
            )}
            <div style={{ position: "absolute", left: "50%", top: 54, transform: "translateX(-50%)", display: "flex", gap: 8, alignItems: "center", background: "rgba(20,28,40,.85)", color: "#fff", borderRadius: 999, padding: "6px 12px", font: "800 13px system-ui", whiteSpace: "nowrap" }}>
              <span>{mij.rol === "imposter" ? "🕵️" : "🔧"} {mij.naam}</span>
              <span style={{ opacity: .7 }}>·</span><span>⏱ {mm}:{ss}</span>
              <span style={{ opacity: .7 }}>·</span><span>🧩 {st.takenKlaar}/{st.takenTotaal}</span>
              <span style={{ opacity: .7 }}>·</span><span>⭐ {mij.punten}</span>
              {multi && <><span style={{ opacity: .7 }}>·</span><span>👥 {echteSpelers}</span><span style={{ opacity: .7 }}>·</span><span>👑 {host ? "jij" : (hostNaam || "spelleider")}</span></>}
              {st.vak && st.vak !== "alles" && <><span style={{ opacity: .7 }}>·</span><span>{(VAKKEN.find((v) => v.id === st.vak) || {}).emoji} {groepLabel(st.groep)}</span></>}
            </div>
            <div style={{ position: "absolute", left: "50%", top: 84, transform: "translateX(-50%)", width: 220, height: 6, borderRadius: 3, background: "rgba(255,255,255,.25)" }}><div style={{ width: `${Math.round((st.takenKlaar / Math.max(1, st.takenTotaal)) * 100)}%`, height: "100%", borderRadius: 3, background: "#69f0ae" }} /></div>
            <div style={{ position: "absolute", left: 12, top: 100, font: "700 12px system-ui", color: "#fff", textShadow: "0 1px 3px rgba(0,0,0,.7)" }}>{(st.log || []).slice(0, 2).map((l, i) => <div key={i} style={{ opacity: 1 - i * 0.35 }}>{l.tekst}</div>)}</div>
            {mij.bevroren > 0 && <div style={{ position: "absolute", inset: 0, background: "rgba(150,210,255,.25)", display: "grid", placeItems: "center", font: "900 26px system-ui", color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,.6)" }}>❄️ Bevroren… {Math.ceil(mij.bevroren)} s</div>}
            {isAf(mij) && <div style={{ position: "absolute", left: "50%", top: 120, transform: "translateX(-50%)", background: "rgba(20,28,40,.85)", color: "#fff", borderRadius: 12, padding: "8px 14px", font: "800 13px system-ui", whiteSpace: "nowrap" }}>🎈 Je bent {mij.uitgestemd ? "uitgestemd" : "getikt"} — je kijkt mee vanuit de zeppelin tot de ronde klaar is</div>}
            {false && <div style={{ position: "absolute", left: "50%", top: 120, transform: "translateX(-50%)", background: "rgba(20,28,40,.85)", color: "#fff", borderRadius: 12, padding: "8px 14px", font: "800 13px system-ui" }}>🪑 Je bent uitgestemd. Je speelt mee, maar stemt niet meer.</div>}
            {laatsteUitkomst && <div style={{ position: "absolute", left: "50%", top: "40%", transform: "translate(-50%,-50%)", background: "#fffef8", color: "#1c2840", borderRadius: 16, padding: "14px 20px", font: "900 18px system-ui", boxShadow: "0 8px 24px rgba(0,0,0,.4)" }}>{laatsteUitkomst.tekst}</div>}
            <div style={{ position: "absolute", left: "50%", bottom: "calc(86px + env(safe-area-inset-bottom))", transform: "translateX(-50%)", display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", pointerEvents: "auto" }}>
              {station && magTaak(st, mij, station) && <button onClick={openTaak} style={KNOP}>{station.emoji} Taak doen</button>}
              {station && !magTaak(st, mij, station) && mij.bevroren <= 0 && mij.laatstePost === station.id && <span style={{ ...KNOP_GRIJS, opacity: .8 }}>✓ Hier al gedaan — volgende post</span>}
              {doelTik && <button onClick={doeTik} style={KNOP_ROOD}>👉 Tik {doelTik.naam}</button>}
              {mij.stemmen > 0 && mij.bevroren <= 0 && !isAf(mij) && <button onClick={roep} style={KNOP_ROOD}>🚨 Vergadering ({mij.stemmen})</button>}
              <button onClick={stop} style={KNOP_GRIJS}>✖ Stop</button>
            </div>
          </>
        )}

        {taak && (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(10,20,40,.55)" }}>
            <div style={KAART}>
              {!taak.vragen ? <div>Vragen laden…</div> : taak.vragen.length === 0 ? <><div>Geen vragen gevonden voor dit niveau.</div><button onClick={() => setTaak(null)} style={{ ...KNOP_GRIJS, marginTop: 10 }}>Sluiten</button></> : (() => {
                const v = taak.vragen[taak.idx];
                return (
                  <>
                    <div style={{ font: "800 12px system-ui", letterSpacing: 1, color: "#6a3fd6" }}>TAAK · VRAAG {taak.idx + 1} VAN {taak.vragen.length}</div>
                    <div style={{ font: "800 17px/1.4 system-ui", margin: "6px 0 10px" }}>{schoon(v.q)}</div>
                    <div style={{ display: "grid", gap: 6 }}>
                      {v.options.map((o, i) => {
                        const kleur = taak.gekozen == null ? "#eef2f7" : i === v.answer ? "#c8f0d4" : i === taak.gekozen ? "#f8cfcf" : "#eef2f7";
                        return <button key={i} onClick={() => kiesOptie(i)} disabled={taak.gekozen != null} style={{ pointerEvents: "auto", textAlign: "left", border: "2px solid " + (taak.gekozen != null && i === v.answer ? "#2e9e4f" : "#d7dee8"), borderRadius: 12, padding: "10px 12px", font: "700 15px system-ui", background: kleur, color: "#1c2840", cursor: "pointer" }}>{schoon(o)}</button>;
                      })}
                    </div>
                    {taak.gekozen != null && (
                      <div style={{ marginTop: 10 }}>
                        <div style={{ font: "800 14px system-ui", color: taak.gekozen === v.answer ? "#146c43" : "#b42318" }}>{taak.gekozen === v.answer ? "✅ Goed! +10" : "❌ Helaas."}</div>
                        {taak.gekozen !== v.answer && v.explanation && <div style={{ font: "500 13.5px/1.45 system-ui", color: "#445", marginTop: 4 }}>{schoon(v.explanation).slice(0, 260)}</div>}
                        <button onClick={volgendeVraag} style={{ ...KNOP, marginTop: 10 }}>{taak.idx + 1 < taak.vragen.length ? "Volgende →" : "Taak afronden →"}</button>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {st.fase === "vergadering" && st.vergadering && (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(40,10,10,.6)" }}>
            <div style={KAART}>
              <div style={{ font: "900 20px system-ui" }}>🚨 Vergadering · nog {Math.max(0, Math.ceil(VERGADERING_S - st.vergadering.t))} s</div>
              <p style={{ margin: "4px 0 10px", color: "#556" }}>Wie is de imposter? Kies iemand, of onthoud je.</p>
              <div style={{ display: "grid", gap: 6 }}>
                {actieveSpelers(st).filter((s) => s.id !== mijnId).map((s) => (
                  <button key={s.id} disabled={mij.uitgestemd || st.vergadering.stemmen[mijnId] !== undefined} onClick={() => stemOp(s.id, "👀")} style={{ pointerEvents: "auto", textAlign: "left", border: "2px solid " + (st.vergadering.stemmen[mijnId] === s.id ? "#b0332a" : "#d7dee8"), borderRadius: 12, padding: "9px 12px", font: "700 15px system-ui", background: st.vergadering.stemmen[mijnId] === s.id ? "#f8cfcf" : "#fff", color: "#1c2840", cursor: "pointer" }}>
                    {s.bot ? "" : "👤 "}{s.naam}{s.bevroren > 0 ? " ❄️" : ""}{s.id === mij.zagTik ? " · ❄️ was bij mij toen ik bevroor" : ""}
                  </button>
                ))}
                <button disabled={mij.uitgestemd || st.vergadering.stemmen[mijnId] !== undefined} onClick={() => stemOp(null, "🤷")} style={{ ...KNOP_GRIJS, justifySelf: "start" }}>🤷 Geen idee, onthouden</button>
              </div>
              {st.vergadering.stemmen[mijnId] !== undefined && <p style={{ margin: "10px 0 0", color: "#556" }}>Gestemd. De anderen stemmen ook… {host && <button onClick={() => { sluitVergadering(st); setN((n) => n + 1); }} style={{ ...KNOP_GRIJS, marginLeft: 6 }}>Meteen tellen</button>}</p>}
            </div>
          </div>
        )}

        {st.fase === "einde" && st.uitkomst && (() => { const sc = scoreVan({ ...st, spelerId: mijnId }); return (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(10,20,40,.6)" }}>
            <div style={{ ...KAART, textAlign: "center" }}>
              <div style={{ fontSize: 50 }}>{sc.gewonnen ? "🏆" : "💪"}</div>
              <div style={{ font: "900 24px system-ui" }}>{sc.gewonnen ? "Gewonnen!" : "Verloren…"}</div>
              <div style={{ color: "#556", margin: "4px 0 10px" }}>{st.uitkomst.reden} De imposter was: <b>{st.spelers.filter((s) => s.rol === "imposter").map((s) => s.naam).join(" en ") || "…"}</b>.</div>
              {multi && <div style={{ fontSize: 13, color: "#556", marginBottom: 8 }}>Deze ronde: {st.spelers.filter((s) => !s.bot).slice().sort((a, b) => b.punten - a.punten).map((s, ix) => `${ix + 1}. ${s.naam} ⭐ ${s.punten}`).join(" · ")}</div>}
              {multi && klassement && klassement.length > 0 && <div style={{ fontSize: 13, color: "#7a5a00", background: "#fff8e1", borderRadius: 10, padding: "6px 10px", marginBottom: 8 }}>🏆 Klassement park: {klassement.slice(0, 3).map((k, ix) => `${ix + 1}. ${k.naam} ${k.punten}`).join(" · ")}</div>}
              <div style={{ background: "#f4faf6", border: "1px solid #cde3d6", borderRadius: 12, padding: "10px 12px", font: "800 16px system-ui" }}>⭐ {sc.punten} punten → 🪙 +{sc.munten} munten voor je park</div>
              <div style={{ color: "#556", fontSize: 13, marginTop: 4 }}>{sc.rol === "imposter" ? `${sc.tiks}× getikt` : `${sc.taken} taken gedaan`} · {sc.duur} s gespeeld</div>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 12, flexWrap: "wrap" }}>
                {host && <button onClick={() => { onKlaar && onKlaar({ ...sc, nogEenKeer: true }); }} style={KNOP}>🔁 Nog een keer</button>}
                <button onClick={klaar} style={KNOP_GRIJS}>Terug naar het park</button>
              </div>
            </div>
          </div>
        ); })()}
      </Html>
    </>
  );
}
