// ✍️ Dictee met Charley (9 sep 2026) — wens van Djess via het wensenbord.
//
// Mark's opzet: Charley zegt eerst de hele zin ("Wij lopen naar het park."),
// dan "Schrijf op het woord: park." Het kind ziet de zin met een gat en typt
// alleen dat woord. Typt het kind na ~3 s nog niets, dan herhaalt Charley
// "Schrijf het woord: park." (max 2×), daarna verschijnt de eerste letter als
// hint. Korte zinnen, 10 woorden per dictee, direct feedback: goed = groen;
// fout = het goede woord met de foute letters rood + de spellingregel in één
// zin (die Charley ook voorleest). Resultaat telt mee in het weekrapport voor
// thuis (mastery: taalverzorging) en in het oefenpad-overzicht (pad 'dictee').
// Verstaanbaarheid verschilt per apparaat (browserstem) — daarom het gat in de
// zin: het kind hoeft alleen dat ene woord goed te horen, en kan altijd op
// "🔊 Nog een keer" tikken. Zonder stem (geen speechSynthesis) valt het terug
// op "lees-dictee": de zin verschijnt kort mét het woord, verdwijnt, en dan typ je.
import { useEffect, useMemo, useRef, useState } from "react";
import { spreekMetMeelezen } from "../../shared/spraakTekst.js";
import { track } from "../../utils.js";
import { recordAnswerForPath, recordRefAnswer } from "../mastery/mastery.js";
import { DICTEE, GROEPEN, kiesDictee, vergelijk } from "./dicteeData.js";

const WACHT_MS = 3200;      // zo lang wacht Charley op de eerste letter
const MAX_HERHAAL = 2;
const PAD_ID = "dictee-spelling";

const W = { maxWidth: 560, margin: "0 auto", padding: "16px 16px 40px", fontFamily: "system-ui, Segoe UI, sans-serif", color: "#1c2840" };
const KNOP = { border: "none", borderRadius: 999, padding: "12px 20px", font: "800 16px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", cursor: "pointer" };
const KNOP2 = { ...KNOP, color: "#1c2840", background: "#eef2f7" };

const kanSpreken = () => typeof window !== "undefined" && !!window.speechSynthesis;
function groepUit(level) {
  const m = String(level || "").match(/(\d)/); const g = m ? +m[1] : null;
  return g && GROEPEN.includes(g) ? g : null;
}
function metGat(zin, woord) {
  const i = zin.indexOf(woord);
  if (i < 0) return { voor: zin, na: "" };
  return { voor: zin.slice(0, i), na: zin.slice(i + woord.length) };
}

export default function DicteePage({ userName = "", userLevel = "", onTerug }) {
  const [groep, setGroep] = useState(() => { try { return +localStorage.getItem("lk_dictee_groep") || groepUit(userLevel); } catch { return groepUit(userLevel); } });
  const [fase, setFase] = useState("kies");          // kies | dictee | klaar
  const [items, setItems] = useState([]);
  const [idx, setIdx] = useState(0);
  const [status, setStatus] = useState("luister");   // luister | typen | goed | fout
  const [invoer, setInvoer] = useState("");
  const [hint, setHint] = useState(false);
  const [uitkomst, setUitkomst] = useState([]);      // per item {goed, getypt}
  const [spreekt, setSpreekt] = useState(false);
  const [leesModus, setLeesModus] = useState(!kanSpreken());
  const [toonZin, setToonZin] = useState(false);     // lees-dictee: zin kort tonen
  const inputRef = useRef(null);
  const stopRef = useRef(null);
  const wachtRef = useRef(null);
  const herhaalRef = useRef(0);
  const invoerRef = useRef("");
  invoerRef.current = invoer;
  const item = items[idx];
  const gat = useMemo(() => (item ? metGat(item.zin, item.woord) : null), [item]);

  const stopAlles = () => { if (stopRef.current) { try { stopRef.current(); } catch { /* */ } stopRef.current = null; } clearTimeout(wachtRef.current); setSpreekt(false); };
  useEffect(() => () => stopAlles(), []);

  const zeg = (tekst, onEnd) => {
    stopAlles();
    if (!kanSpreken()) { onEnd && onEnd(); return; }
    setSpreekt(true);
    stopRef.current = spreekMetMeelezen(tekst, { rate: 0.92, onEnd: () => { setSpreekt(false); onEnd && onEnd(); } });
  };
  const wachtOpTypen = () => {
    clearTimeout(wachtRef.current);
    wachtRef.current = setTimeout(() => {
      if (invoerRef.current.trim()) return;
      if (herhaalRef.current < MAX_HERHAAL) { herhaalRef.current += 1; zeg(`Schrijf het woord: ${item.woord}.`, wachtOpTypen); }
      else setHint(true);
    }, WACHT_MS);
  };

  // een nieuw woord aanbieden
  useEffect(() => {
    if (fase !== "dictee" || !item) return;
    setInvoer(""); setHint(false); setStatus("luister"); herhaalRef.current = 0;
    if (leesModus) {
      setToonZin(true);
      const t = setTimeout(() => { setToonZin(false); setStatus("typen"); setTimeout(() => inputRef.current?.focus(), 50); }, 3500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => zeg(`${item.zin} Schrijf op het woord: ${item.woord}.`, () => { setStatus("typen"); setTimeout(() => inputRef.current?.focus(), 50); wachtOpTypen(); }), 300);
    return () => { clearTimeout(t); stopAlles(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase, idx, item, leesModus]);

  const start = (g, lijst = null) => {
    const gekozen = lijst || kiesDictee(g, 10);
    try { localStorage.setItem("lk_dictee_groep", String(g)); } catch { /* */ }
    setGroep(g); setItems(gekozen); setIdx(0); setUitkomst([]); setFase("dictee");
    try { track("dictee_start", { groep: g, n: gekozen.length, stem: kanSpreken() ? 1 : 0 }); } catch { /* */ }
  };
  const nogEenKeer = () => { if (!item) return; herhaalRef.current = 0; zeg(status === "luister" ? `${item.zin} Schrijf op het woord: ${item.woord}.` : `Schrijf het woord: ${item.woord}.`, () => { if (status !== "goed" && status !== "fout") { setStatus("typen"); wachtOpTypen(); } }); };

  const controleer = () => {
    if (!item || !invoer.trim() || status === "goed" || status === "fout") return;
    clearTimeout(wachtRef.current);
    const r = vergelijk(invoer, item.woord);
    setStatus(r.goed ? "goed" : "fout");
    setUitkomst((u) => [...u.slice(0, idx), { goed: r.goed, getypt: invoer.trim(), letters: r.letters }]);
    try { track("dictee_woord", { groep, goed: r.goed ? 1 : 0, cat: item.cat, hint: hint ? 1 : 0 }); } catch { /* */ }
    try { if (userName) recordAnswerForPath({ playerName: userName, pathId: PAD_ID, isCorrect: r.goed }); } catch { /* */ }
    zeg(r.goed ? "Goed zo!" : `Bijna. Het is: ${item.woord}. ${item.regel}`);
  };
  const volgende = () => {
    stopAlles();
    if (idx + 1 < items.length) { setIdx(idx + 1); return; }
    const score = uitkomst.filter((u) => u?.goed).length;
    setFase("klaar");
    try { track("dictee_klaar", { groep, score, n: items.length }); } catch { /* */ }
    try { if (userName) recordRefAnswer({ playerName: userName, onderdeel: "taalverzorging", ref: "1F", isCorrect: false, attemptsDelta: items.length, correctDelta: score }); } catch { /* */ }
    zeg(score === items.length ? "Alles goed. Wat een kanjer!" : score >= items.length / 2 ? `${score} van de ${items.length} goed. Goed gedaan!` : `${score} goed. Oefenen helpt, kom morgen nog eens.`);
  };
  const fouten = items.filter((_, i) => uitkomst[i] && !uitkomst[i].goed);

  // ── schermen ──
  if (fase === "kies") {
    return (
      <div style={W}>
        <button onClick={onTerug} style={{ ...KNOP2, padding: "8px 14px", font: "700 14px system-ui", marginBottom: 12 }}>← Terug</button>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{ fontSize: 44 }}>🐕</div>
          <div><div style={{ font: "900 24px system-ui" }}>Dictee met Charley</div><div style={{ color: "#556", fontSize: 14 }}>Charley zegt een zin en dan één woord. Jij typt dat woord.</div></div>
        </div>
        <div style={{ background: "#f4faf6", border: "1px solid #cde3d6", borderRadius: 14, padding: "14px 16px", margin: "12px 0", fontSize: 15, lineHeight: 1.5 }}>
          <b>Zo werkt het:</b> 10 woorden. Je hoort de zin, je ziet de zin met een gat, en je typt het woord dat Charley zegt. Fout? Dan zie je meteen hoe het wél moet, en waarom.
          {!kanSpreken() && <div style={{ marginTop: 8, color: "#7a5a00" }}>Op dit apparaat kan Charley niet praten. Dan wordt het een <b>lees-dictee</b>: de zin verschijnt even mét het woord, verdwijnt, en dan typ je het.</div>}
        </div>
        <div style={{ font: "800 15px system-ui", margin: "14px 0 6px" }}>In welke groep zit je?</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {GROEPEN.map((g) => (
            <button key={g} onClick={() => start(g)} style={{ ...KNOP, background: g === groep ? "linear-gradient(135deg,#2e9e4f,#1f7a3a)" : "#3a4754", minWidth: 84 }}>Groep {g}</button>
          ))}
        </div>
        <p style={{ color: "#778", fontSize: 12.5, marginTop: 14 }}>Tip: zet het geluid aan. Tik op 🔊 als je Charley niet goed verstaat. {DICTEE[groep || 6].length} woorden per groep; elke keer een andere mix.</p>
      </div>
    );
  }

  if (fase === "klaar") {
    const score = uitkomst.filter((u) => u?.goed).length;
    return (
      <div style={W}>
        <div style={{ textAlign: "center", padding: "10px 0" }}>
          <div style={{ fontSize: 54 }}>{score === items.length ? "🏆" : score >= items.length / 2 ? "🎉" : "💪"}</div>
          <div style={{ font: "900 28px system-ui" }}>{score} van de {items.length} goed</div>
          <div style={{ color: "#556", marginTop: 4 }}>Groep {groep} · Charley: {score === items.length ? "wat een kanjer!" : score >= items.length / 2 ? "goed gedaan!" : "oefenen helpt, morgen weer?"}</div>
        </div>
        {fouten.length > 0 && (
          <div style={{ background: "#fff5f5", border: "1px solid #f3c9c9", borderRadius: 14, padding: "12px 14px", margin: "12px 0" }}>
            <div style={{ font: "800 15px system-ui", marginBottom: 6 }}>Nog even kijken:</div>
            {fouten.map((f, i) => (
              <div key={i} style={{ padding: "6px 0", borderTop: i ? "1px solid #f0dcdc" : "none", fontSize: 14.5, lineHeight: 1.45 }}>
                <b style={{ color: "#146c43" }}>{f.woord}</b> <span style={{ color: "#888" }}>(jij schreef: {uitkomst[items.indexOf(f)]?.getypt})</span><br />
                <span style={{ color: "#445" }}>{f.regel}</span>
              </div>
            ))}
          </div>
        )}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
          {fouten.length > 0 && <button onClick={() => start(groep, fouten)} style={KNOP}>🔁 Fouten nog een keer</button>}
          <button onClick={() => start(groep)} style={fouten.length ? KNOP2 : KNOP}>✍️ Nieuw dictee</button>
          <button onClick={onTerug} style={KNOP2}>Klaar</button>
        </div>
        <p style={{ color: "#778", fontSize: 12.5, marginTop: 14 }}>Je score telt mee in het weekrapport voor thuis (spelling).</p>
      </div>
    );
  }

  // ── het dictee zelf ──
  const u = uitkomst[idx];
  return (
    <div style={W}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <button onClick={() => { stopAlles(); setFase("kies"); }} style={{ ...KNOP2, padding: "8px 14px", font: "700 14px system-ui" }}>← Stop</button>
        <div style={{ font: "800 14px system-ui", color: "#556" }}>Woord {idx + 1} van {items.length} · groep {groep}</div>
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{ fontSize: 40, lineHeight: 1 }}>🐕</div>
        <div style={{ flex: 1, background: "#fff", border: "2px solid #cde3d6", borderRadius: 16, padding: "12px 14px", fontSize: 15, lineHeight: 1.5 }}>
          {status === "luister" && !leesModus && <span>{spreekt ? "🔊 Luister goed…" : "Charley komt eraan…"}</span>}
          {leesModus && toonZin && <span><b>Lees goed:</b> {item.zin}</span>}
          {(status === "typen" || (leesModus && !toonZin && status !== "goed" && status !== "fout")) && <span>Schrijf op het woord dat je hoorde.{hint ? <> Het begint met een <b style={{ fontSize: 18 }}>{item.woord[0]}</b>.</> : null}</span>}
          {status === "goed" && <span style={{ color: "#146c43", fontWeight: 800 }}>✅ Goed zo!</span>}
          {status === "fout" && <span><span style={{ color: "#b42318", fontWeight: 800 }}>Bijna!</span> Het is <b>{item.woord}</b>. {item.regel}</span>}
        </div>
      </div>

      {/* de zin met het gat */}
      <div style={{ font: "700 22px/1.5 system-ui", background: "#f4faf6", border: "1px solid #cde3d6", borderRadius: 14, padding: "14px 16px", margin: "6px 0 12px", minHeight: 64 }}>
        {gat.voor}
        {status === "goed" || status === "fout" ? (
          <span style={{ display: "inline-block", borderBottom: "3px solid", borderColor: status === "goed" ? "#146c43" : "#b42318", padding: "0 4px" }}>
            {(u?.letters || []).map((l, i) => <span key={i} style={{ color: l.ok ? "#146c43" : "#b42318", textDecoration: l.ok ? "none" : "none" }}>{l.d || ""}</span>)}
          </span>
        ) : (
          <span style={{ display: "inline-block", minWidth: Math.max(70, item.woord.length * 15), borderBottom: "3px solid #8a939c", padding: "0 4px", color: "#8a939c" }}>{invoer || " "}</span>
        )}
        {gat.na}
      </div>
      {status === "fout" && <div style={{ fontSize: 13.5, color: "#556", margin: "-6px 0 10px" }}>Jij schreef: <span style={{ textDecoration: "line-through" }}>{u?.getypt}</span></div>}

      <form onSubmit={(e) => { e.preventDefault(); controleer(); }} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input ref={inputRef} value={invoer} onChange={(e) => { setInvoer(e.target.value); clearTimeout(wachtRef.current); }} disabled={status === "goed" || status === "fout" || (status === "luister" && !leesModus)}
          placeholder="typ het woord" autoComplete="off" autoCapitalize="none" spellCheck={false}
          style={{ flex: "1 1 200px", border: "2px solid #9fb0c6", borderRadius: 12, padding: "12px 14px", font: "800 20px system-ui", color: "#1c2840", minWidth: 0 }} />
        {status === "goed" || status === "fout" ? (
          <button type="button" onClick={volgende} style={KNOP}>{idx + 1 < items.length ? "Volgende →" : "Klaar →"}</button>
        ) : (
          <button type="submit" disabled={!invoer.trim()} style={{ ...KNOP, opacity: invoer.trim() ? 1 : .5 }}>✓ Controleer</button>
        )}
        {!leesModus && <button type="button" onClick={nogEenKeer} style={KNOP2}>🔊 Nog een keer</button>}
        {leesModus && status !== "goed" && status !== "fout" && <button type="button" onClick={() => { setToonZin(true); setTimeout(() => setToonZin(false), 2500); }} style={KNOP2}>👀 Laat nog eens zien</button>}
      </form>
      <div style={{ display: "flex", gap: 4, marginTop: 14 }}>
        {items.map((_, i) => <div key={i} style={{ flex: 1, height: 6, borderRadius: 3, background: uitkomst[i] ? (uitkomst[i].goed ? "#146c43" : "#b42318") : i === idx ? "#8a939c" : "#e3e8ee" }} />)}
      </div>
      {!leesModus && <p style={{ color: "#778", fontSize: 12.5, marginTop: 12 }}>Versta je Charley slecht? Tik op 🔊, of <button type="button" onClick={() => { stopAlles(); setLeesModus(true); }} style={{ border: "none", background: "none", color: "#2f6fd6", font: "700 12.5px system-ui", cursor: "pointer", padding: 0 }}>doe een lees-dictee</button>.</p>}
    </div>
  );
}
