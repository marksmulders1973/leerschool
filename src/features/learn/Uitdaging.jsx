// 🪜 Uitdaging na "Te makkelijk" (Mark 16 okt 2026). Logica in uitdagingLadder.js.
// Events: uitdaging_start · uitdaging_trede · uitdaging_einde · uitdaging_verder
// (props: pad, plek, van = deel waar het kind "te makkelijk" zei; zie docs/sql/uitdaging.sql).
import { useMemo, useState, useEffect } from "react";
import MdInline from "../../shared/ui/MdInline.jsx";
import { shuffleOptions } from "../../shared/shuffleOptions.js";
import { track } from "../../utils.js";
import { naTrede } from "./uitdagingLadder.js";

const GEVOEL = [
  { key: "te-makkelijk", label: "Te makkelijk" },
  { key: "goed", label: "Precies goed" },
  { key: "te-moeilijk", label: "Te moeilijk" },
];

export default function Uitdaging({ pathId, plek, vanafStap, treden, naam, accent = "#ffd54f", onOefenStap, onKlaar }) {
  const [trede, setTrede] = useState(0);
  const [gekozen, setGekozen] = useState(null); // index in de geschudde opties
  const [einde, setEinde] = useState(null); // { reden, grens }
  const meet = (name, velden) => { try { track(name, { pad: pathId, plek, van: vanafStap, ...velden }); } catch { /* meting mag nooit het scherm breken */ } };

  useEffect(() => { meet("uitdaging_start", { treden: treden.length }); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const t = treden[trede];
  const vraag = useMemo(() => shuffleOptions(t.check), [t]);
  const goed = gekozen != null && gekozen === vraag.answer;

  const sluitAf = (uitkomst, gevoel) => {
    const stap = uitkomst.grens != null ? treden[uitkomst.grens].stapIdx : null;
    meet("uitdaging_einde", { reden: uitkomst.reden, grens: stap, treden: trede + 1, ...(gevoel ? { gevoel } : {}) });
    setEinde({ reden: uitkomst.reden, stap });
  };
  const kiesGevoel = (gevoel) => {
    meet("uitdaging_trede", { trede: trede + 1, stap: t.stapIdx, goed: true, gevoel });
    const na = naTrede({ trede, aantal: treden.length, goed: true, gevoel });
    if (na.klaar) sluitAf(na, gevoel);
    else { setTrede(na.volgende); setGekozen(null); }
  };
  const kiesAntwoord = (i) => {
    if (gekozen != null) return;
    setGekozen(i);
    if (i !== vraag.answer) meet("uitdaging_trede", { trede: trede + 1, stap: t.stapIdx, goed: false });
  };

  const titel = { fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: 800, color: "#fff", marginBottom: 6 };
  const klein = { fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.65)" };
  const knop = (rand) => ({
    padding: "9px 13px", borderRadius: 999, cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 700,
    border: rand || "1.5px solid rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.06)", color: "#fff",
  });
  const optieRand = (i) => {
    if (gekozen == null) return undefined;
    if (i === vraag.answer) return "2px solid #00e676";
    if (i === gekozen) return "2px solid #ff6b6b";
    return undefined;
  };

  if (einde) {
    const deel = einde.stap != null ? `deel ${einde.stap + 1}` : null;
    const tekst = einde.reden === "top"
      ? "Je kon alles wat in dit onderwerp zit. Knap! Probeer straks een moeilijker onderwerp."
      : einde.reden === "fout"
        ? `Hier wordt het lastig: ${deel}. Daar valt nog wat te leren.`
        : einde.reden === "te-moeilijk"
          ? `Hier wordt het moeilijk: ${deel}. Dat is precies waar je het meest leert.`
          : `Hier zit jouw uitdaging: ${deel}.`;
    return (
      <div>
        <div style={titel}>{tekst}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
          {einde.stap != null && onOefenStap && (
            <button type="button" style={knop(`2px solid ${accent}`)} onClick={() => { meet("uitdaging_verder", { stap: einde.stap }); onOefenStap(einde.stap); }}>
              Hier verder oefenen
            </button>
          )}
          <button type="button" style={knop()} onClick={() => onKlaar && onKlaar()}>
            {einde.stap != null && onOefenStap ? "Nee, dank je" : "Oké"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={titel}>
        {trede === 0 ? `Hoi${naam ? ` ${naam}` : ""}! Je vond het te makkelijk. Kun jij deze?` : "Goed zo! En deze?"}
      </div>
      <div style={{ ...klein, marginBottom: 6 }}>Uit deel {t.stapIdx + 1}{t.stapTitel ? `: ${t.stapTitel}` : ""}</div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#fff", marginBottom: 8 }}><MdInline text={vraag.q || vraag.question} /></div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }} role="group" aria-label="Kies een antwoord">
        {vraag.options.map((o, i) => (
          <button key={i} type="button" onClick={() => kiesAntwoord(i)} style={{ ...knop(optieRand(i)), cursor: gekozen == null ? "pointer" : "default" }}>
            <MdInline text={o} />
          </button>
        ))}
      </div>
      {gekozen != null && !goed && (
        <div style={{ marginTop: 10 }}>
          <div style={{ ...klein, marginBottom: 6 }}>Net niet. Het goede antwoord is groen.</div>
          <button type="button" style={knop()} onClick={() => sluitAf(naTrede({ trede, aantal: treden.length, goed: false }))}>Verder</button>
        </div>
      )}
      {goed && (
        <div style={{ marginTop: 10 }}>
          <div style={{ ...titel, fontSize: 13.5 }}>Goed! Hoe was deze?</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }} role="group" aria-label="Hoe was deze vraag?">
            {GEVOEL.map((g) => <button key={g.key} type="button" onClick={() => kiesGevoel(g.key)} style={knop()}>{g.label}</button>)}
          </div>
        </div>
      )}
    </div>
  );
}
