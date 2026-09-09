// 🎮 Wie is de imposter? — presentatie in de 3D-scène + HUD (fase 1: solo met bots).
// Logica: imposterEngine.js. Regels: docs/plannen-park/GAME-MODUS-IMPOSTER.md.
// Taken = 3 vragen op je eigen groep-niveau (bouwStartVragen, zelfde bron als het
// start-kwartier). Zonder chat: stemmen met snelle redenen-knoppen.
import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import CharacterModel from "../CharacterModel";
import { bouwStartVragen } from "../../onboarding/startKwartier.js";
import { track } from "../../../utils.js";
import { maakStations, maakSpel, tick, ik, speler, actieveSpelers, magTikken, tik, dichtstbijStation, magTaak, taakKlaar, startVergadering, stem, sluitVergadering, scoreVan, SPEL_DUUR, VERGADERING_S } from "./imposterEngine.js";

const PARK_R = 70;
const HUD_POS = (_e, _c, size) => [size.width / 2, size.height / 2];
const KNOP = { pointerEvents: "auto", border: "3px solid #fff", borderRadius: 999, padding: "12px 20px", font: "900 16px system-ui", color: "#fff", background: "linear-gradient(135deg,#2f6fd6,#1f4fa8)", boxShadow: "0 5px 18px rgba(0,0,0,.45)", cursor: "pointer", whiteSpace: "nowrap" };
const KNOP_ROOD = { ...KNOP, background: "linear-gradient(135deg,#e2574c,#b0332a)" };
const KNOP_GRIJS = { ...KNOP, background: "#3a4754", border: "2px solid #6b7785", font: "800 14px system-ui", padding: "9px 14px" };
const KAART = { pointerEvents: "auto", background: "#fffef8", color: "#1c2840", borderRadius: 18, padding: "18px 20px", width: "min(460px, 94vw)", boxShadow: "0 12px 40px rgba(0,0,0,.45)", font: "500 15px/1.5 system-ui" };
const schoon = (s) => String(s || "").replace(/\*\*/g, "").replace(/`/g, "");

function Bot({ sp, stRef, heightRef }) {
  const g = useRef(); const moving = useRef(0);
  const [label, setLabel] = useState("");
  useFrame(() => {
    const s = stRef.current && speler(stRef.current, sp.id); const n = g.current; if (!s || !n) return;
    const y = heightRef?.current ? heightRef.current(s.x, s.z) : 0;
    n.position.set(s.x, y, s.z); n.rotation.y = s.yaw || 0;
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

export default function ImposterGame({ playerRef, heightRef, isSolid, teleportRef, spelerNaam = "", avatarUrl = "", level = "6", onKlaar, onStop }) {
  const stRef = useRef(null);
  const [, setN] = useState(0);              // HUD-herrender 4×/s
  const [taak, setTaak] = useState(null);    // { stationId, vragen, idx, goed, gekozen }
  const [laatsteUitkomst, setLaatsteUitkomst] = useState(null);
  const [rolKeuze, setRolKeuze] = useState(null);
  const bevrorenPos = useRef(null);
  const vrijPlek = useMemo(() => (x, z) => Math.hypot(x, z) < PARK_R && !(isSolid && isSolid(x, z)), [isSolid]);

  if (!stRef.current) {
    const stations = maakStations(32, 6, vrijPlek);
    stRef.current = maakSpel({ spelerId: "ik", spelerNaam: spelerNaam || "Jij", avatar: avatarUrl, nBots: 5, stations });
  }
  const st = stRef.current;
  const mij = ik(st);

  useEffect(() => { const t = setInterval(() => setN((n) => n + 1), 250); return () => clearInterval(t); }, []);
  useEffect(() => { try { track("game_start", { groep: level, spelers: st.spelers.length, bots: st.spelers.filter((s) => s.bot).length }); } catch { /* */ } }, []); // eslint-disable-line

  useFrame((s, dtRaw) => {
    const dt = Math.min(0.05, dtRaw);
    const st = stRef.current; if (!st) return;
    const p = playerRef?.current;
    const vorigeFase = st.fase;
    tick(st, dt, p ? { x: p.x, z: p.z } : null, vrijPlek);
    // bevroren = niet kunnen lopen: elke frame terugzetten
    const m = ik(st);
    if (m.bevroren > 0 && p) {
      if (!bevrorenPos.current) bevrorenPos.current = { x: p.x, z: p.z };
      if (teleportRef && Math.hypot(p.x - bevrorenPos.current.x, p.z - bevrorenPos.current.z) > 0.3) teleportRef.current = { ...bevrorenPos.current };
    } else bevrorenPos.current = null;
    if (vorigeFase === "vergadering" && st.fase !== "vergadering" && st.vergadering?.uitkomst) { setLaatsteUitkomst(st.vergadering.uitkomst); setTimeout(() => setLaatsteUitkomst(null), 4500); try { track("game_vergadering", { imposter: st.vergadering.uitkomst.imposter ? 1 : 0 }); } catch { /* */ } }
    if (vorigeFase !== "einde" && st.fase === "einde") { try { const sc = scoreVan(st); track("game_einde", { gewonnen: sc.gewonnen ? 1 : 0, rol: sc.rol, punten: sc.punten, duur: sc.duur }); } catch { /* */ } }
  });

  // ── acties ──
  const startSpel = () => { if (rolKeuze) { stRef.current = null; const stations = maakStations(32, 6, vrijPlek); stRef.current = maakSpel({ spelerId: "ik", spelerNaam: spelerNaam || "Jij", avatar: avatarUrl, nBots: 5, stations, spelerRolKeuze: rolKeuze === "random" ? null : rolKeuze }); } stRef.current.fase = "spel"; setN((n) => n + 1); };
  const station = playerRef?.current ? dichtstbijStation(st, { x: playerRef.current.x, z: playerRef.current.z }) : null;
  const doelTik = mij.rol === "imposter" ? actieveSpelers(st).find((s) => magTikken(st, mij, s)) : null;
  const openTaak = async () => {
    if (!station || !magTaak(st, mij, station) || taak) return;
    setTaak({ stationId: station.id, vragen: null, idx: 0, goed: 0, gekozen: null });
    try { const v = await bouwStartVragen(level, 3); setTaak((t) => (t ? { ...t, vragen: v.slice(0, 3) } : t)); }
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
      taakKlaar(stRef.current, "ik", t.stationId, t.goed, t.vragen.length);
      return null;
    });
  };
  const roep = () => { if (startVergadering(st, "ik")) setN((n) => n + 1); };
  const doeTik = () => { if (doelTik && tik(st, "ik", doelTik.id)) { try { track("game_tik", {}); } catch { /* */ } setN((n) => n + 1); } };
  const klaar = () => { onKlaar && onKlaar(scoreVan(st)); };
  // 🔧 test-haakje (Playwright): spelstand lezen, taak forceren, spel-einde forceren
  useEffect(() => {
    window.__imposter = {
      st: () => stRef.current,
      taak: async (stationId) => { const sid = stationId || stRef.current.stations[0].id; setTaak({ stationId: sid, vragen: null, idx: 0, goed: 0, gekozen: null }); try { const v = await bouwStartVragen(level, 3); setTaak((t) => (t ? { ...t, vragen: v.slice(0, 3) } : t)); } catch { setTaak((t) => (t ? { ...t, vragen: [] } : t)); } },
      winBouwers: () => { stRef.current.takenKlaar = stRef.current.takenTotaal; setN((n) => n + 1); },
    };
    return () => { delete window.__imposter; };
  }, [level]);

  const resterend = Math.max(0, SPEL_DUUR - st.spelTijd);
  const mm = Math.floor(resterend / 60), ss = String(Math.floor(resterend % 60)).padStart(2, "0");

  return (
    <>
      {/* 3D: taakposten + bots */}
      {st.stations.map((s) => <Station key={s.id} s={s} heightRef={heightRef} gedaan={mij.laatstePost === s.id} />)}
      {st.spelers.filter((s) => s.bot).map((sp) => <Bot key={sp.id} sp={sp} stRef={stRef} heightRef={heightRef} />)}

      {/* HUD */}
      <Html fullscreen zIndexRange={[12, 0]} style={{ pointerEvents: "none" }} calculatePosition={HUD_POS}>
        {st.fase === "intro" && (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(10,20,40,.55)" }}>
            <div style={KAART}>
              <div style={{ font: "900 22px system-ui", marginBottom: 6 }}>🎮 Wie is de imposter?</div>
              <p style={{ margin: "0 0 8px" }}>Zes spelers in het park: jij en vijf maatjes. Eén is de <b>imposter</b>. <b>Bouwers</b> doen taken bij de gele posten: drie vragen op jouw niveau. De imposter doet alsof en kan een bouwer <b>tikken</b> als niemand kijkt: die is 15 seconden bevroren.</p>
              <p style={{ margin: "0 0 8px" }}>Zie je iets verdachts? Druk op 🚨 en stem. Imposter uitgestemd of alle taken klaar = bouwers winnen. Tijd om of twee keer verkeerd gestemd = imposter wint. Elk goed antwoord = 10 punten, punten worden munten.</p>
              <div style={{ font: "800 14px system-ui", margin: "10px 0 4px" }}>Wie wil je zijn?</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                {[["random", "🎲 Verras me"], ["bouwer", "🔧 Bouwer"], ["imposter", "🕵️ Imposter"]].map(([k, l]) => (
                  <button key={k} onClick={() => setRolKeuze(k)} style={{ ...KNOP_GRIJS, background: rolKeuze === k ? "linear-gradient(135deg,#2f6fd6,#1f4fa8)" : "#3a4754" }}>{l}</button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button onClick={startSpel} disabled={!rolKeuze} style={{ ...KNOP, opacity: rolKeuze ? 1 : .5 }}>▶ Start</button>
                <button onClick={() => onStop && onStop()} style={KNOP_GRIJS}>Terug naar het park</button>
              </div>
            </div>
          </div>
        )}

        {st.fase === "spel" && !taak && (
          <>
            {/* rolkaart na start (3 s) */}
            {st.spelTijd < 4 && (
              <div style={{ position: "absolute", left: "50%", top: 70, transform: "translateX(-50%)", pointerEvents: "none", background: mij.rol === "imposter" ? "#b0332a" : "#1f7a3a", color: "#fff", borderRadius: 16, padding: "12px 18px", font: "900 20px system-ui", boxShadow: "0 8px 24px rgba(0,0,0,.4)", textAlign: "center" }}>
                {mij.rol === "imposter" ? "🕵️ Jij bent de IMPOSTER" : "🔧 Jij bent BOUWER"}<div style={{ font: "700 13px system-ui", opacity: .9 }}>{mij.rol === "imposter" ? "Doe alsof. Tik bouwers als niemand kijkt." : "Doe taken bij de gele posten. Let op wie er vreemd doet."}</div>
              </div>
            )}
            {/* bovenbalk */}
            <div style={{ position: "absolute", left: "50%", top: 54, transform: "translateX(-50%)", display: "flex", gap: 8, alignItems: "center", background: "rgba(20,28,40,.85)", color: "#fff", borderRadius: 999, padding: "6px 12px", font: "800 13px system-ui", whiteSpace: "nowrap" }}>
              <span>{mij.rol === "imposter" ? "🕵️" : "🔧"} {mij.naam}</span>
              <span style={{ opacity: .7 }}>·</span><span>⏱ {mm}:{ss}</span>
              <span style={{ opacity: .7 }}>·</span><span>🧩 {st.takenKlaar}/{st.takenTotaal}</span>
              <span style={{ opacity: .7 }}>·</span><span>⭐ {mij.punten}</span>
            </div>
            <div style={{ position: "absolute", left: "50%", top: 84, transform: "translateX(-50%)", width: 220, height: 6, borderRadius: 3, background: "rgba(255,255,255,.25)" }}><div style={{ width: `${Math.round((st.takenKlaar / Math.max(1, st.takenTotaal)) * 100)}%`, height: "100%", borderRadius: 3, background: "#69f0ae" }} /></div>
            {/* log */}
            <div style={{ position: "absolute", left: 12, top: 100, font: "700 12px system-ui", color: "#fff", textShadow: "0 1px 3px rgba(0,0,0,.7)" }}>{st.log.slice(0, 2).map((l, i) => <div key={i} style={{ opacity: 1 - i * 0.35 }}>{l.tekst}</div>)}</div>
            {/* bevroren */}
            {mij.bevroren > 0 && <div style={{ position: "absolute", inset: 0, background: "rgba(150,210,255,.25)", display: "grid", placeItems: "center", font: "900 26px system-ui", color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,.6)" }}>❄️ Bevroren… {Math.ceil(mij.bevroren)} s</div>}
            {laatsteUitkomst && <div style={{ position: "absolute", left: "50%", top: "40%", transform: "translate(-50%,-50%)", background: "#fffef8", color: "#1c2840", borderRadius: 16, padding: "14px 20px", font: "900 18px system-ui", boxShadow: "0 8px 24px rgba(0,0,0,.4)" }}>{laatsteUitkomst.tekst}</div>}
            {/* knoppen onder */}
            <div style={{ position: "absolute", left: "50%", bottom: "calc(86px + env(safe-area-inset-bottom))", transform: "translateX(-50%)", display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", pointerEvents: "auto" }}>
              {station && magTaak(st, mij, station) && <button onClick={openTaak} style={KNOP}>{station.emoji} Taak doen</button>}
              {station && !magTaak(st, mij, station) && mij.bevroren <= 0 && mij.laatstePost === station.id && <span style={{ ...KNOP_GRIJS, opacity: .8 }}>✓ Hier al gedaan — volgende post</span>}
              {doelTik && <button onClick={doeTik} style={KNOP_ROOD}>👉 Tik {doelTik.naam}</button>}
              {mij.stemmen > 0 && mij.bevroren <= 0 && <button onClick={roep} style={KNOP_ROOD}>🚨 Vergadering ({mij.stemmen})</button>}
              <button onClick={() => onStop && onStop()} style={KNOP_GRIJS}>✖ Stop</button>
            </div>
          </>
        )}

        {/* taak: 3 vragen */}
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

        {/* vergadering */}
        {st.fase === "vergadering" && st.vergadering && (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(40,10,10,.6)" }}>
            <div style={KAART}>
              <div style={{ font: "900 20px system-ui" }}>🚨 Vergadering · nog {Math.max(0, Math.ceil(VERGADERING_S - st.vergadering.t))} s</div>
              <p style={{ margin: "4px 0 10px", color: "#556" }}>Wie is de imposter? Kies iemand, of onthoud je.</p>
              <div style={{ display: "grid", gap: 6 }}>
                {actieveSpelers(st).filter((s) => s.id !== "ik").map((s) => (
                  <button key={s.id} disabled={mij.uitgestemd || st.vergadering.stemmen.ik !== undefined} onClick={() => { stem(st, "ik", s.id, "👀"); setN((n) => n + 1); }} style={{ pointerEvents: "auto", textAlign: "left", border: "2px solid " + (st.vergadering.stemmen.ik === s.id ? "#b0332a" : "#d7dee8"), borderRadius: 12, padding: "9px 12px", font: "700 15px system-ui", background: st.vergadering.stemmen.ik === s.id ? "#f8cfcf" : "#fff", color: "#1c2840", cursor: "pointer" }}>
                    {s.naam}{s.bevroren > 0 ? " ❄️" : ""}{s.id === mij.zagTik ? " · ❄️ was bij mij toen ik bevroor" : ""}
                  </button>
                ))}
                <button disabled={mij.uitgestemd || st.vergadering.stemmen.ik !== undefined} onClick={() => { stem(st, "ik", null, "🤷"); setN((n) => n + 1); }} style={{ ...KNOP_GRIJS, justifySelf: "start" }}>🤷 Geen idee, onthouden</button>
              </div>
              {st.vergadering.stemmen.ik !== undefined && <p style={{ margin: "10px 0 0", color: "#556" }}>Gestemd. De anderen stemmen ook… <button onClick={() => { sluitVergadering(st); setN((n) => n + 1); }} style={{ ...KNOP_GRIJS, marginLeft: 6 }}>Meteen tellen</button></p>}
            </div>
          </div>
        )}

        {/* einde */}
        {st.fase === "einde" && st.uitkomst && (() => { const sc = scoreVan(st); return (
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(10,20,40,.6)" }}>
            <div style={{ ...KAART, textAlign: "center" }}>
              <div style={{ fontSize: 50 }}>{sc.gewonnen ? "🏆" : "💪"}</div>
              <div style={{ font: "900 24px system-ui" }}>{sc.gewonnen ? "Gewonnen!" : "Verloren…"}</div>
              <div style={{ color: "#556", margin: "4px 0 10px" }}>{st.uitkomst.reden} De imposter was: <b>{st.spelers.filter((s) => s.rol === "imposter").map((s) => s.naam).join(" en ")}</b>.</div>
              <div style={{ background: "#f4faf6", border: "1px solid #cde3d6", borderRadius: 12, padding: "10px 12px", font: "800 16px system-ui" }}>⭐ {sc.punten} punten → 🪙 +{sc.munten} munten voor je park</div>
              <div style={{ color: "#556", fontSize: 13, marginTop: 4 }}>{sc.rol === "imposter" ? `${sc.tiks}× getikt` : `${sc.taken} taken gedaan`} · {sc.duur} s gespeeld</div>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 12, flexWrap: "wrap" }}>
                <button onClick={() => { onKlaar && onKlaar({ ...sc, nogEenKeer: true }); }} style={KNOP}>🔁 Nog een keer</button>
                <button onClick={klaar} style={KNOP_GRIJS}>Terug naar het park</button>
              </div>
            </div>
          </div>
        ); })()}
      </Html>
    </>
  );
}
