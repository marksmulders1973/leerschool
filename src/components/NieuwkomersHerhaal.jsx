// 🔁 Herhalen op /nieuwkomers (24 sep 2026, punt 3 uit het nieuwkomers-onderzoek).
// Toont de vragen die volgens herhaalNieuwkomers.js vandaag terug moeten komen, uit alle
// nieuwkomerpaden door elkaar. Zelfde steun-tik als in de paden: Nederlands voorop,
// tik = eigen taal. De vragen zelf worden uit de paden geladen (op vraagtekst gezocht).
import { useEffect, useMemo, useState } from "react";
import { track } from "../utils.js";
import { getLearnPath } from "../learnPaths/pathLoaders.js";
import { teHerhalen, herhaalResultaat } from "../shared/herhaalNieuwkomers.js";
import { SteunCtx, SteunTekst, SteunVraag, SteunOptie, UI_STEUN, maakSteunMap } from "../shared/ui/SteunTik.jsx";
import Picto from "../shared/ui/Picto.jsx";
import MdInline from "../shared/ui/MdInline.jsx";

const schud = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

export default function NieuwkomersHerhaal({ onKlaar }) {
  const [vragen, setVragen] = useState(null);
  const [map, setMap] = useState(null);
  const [idx, setIdx] = useState(0);
  const [gekozen, setGekozen] = useState(null);
  const [goed, setGoed] = useState(0);

  useEffect(() => {
    let weg = false;
    (async () => {
      const items = teHerhalen(10);
      const paden = {};
      for (const it of items) if (!paden[it.pad]) { try { paden[it.pad] = await getLearnPath(it.pad); } catch { /* */ } }
      const lijst = [];
      for (const it of items) {
        const p = paden[it.pad];
        const alle = (p?.steps || []).flatMap((s) => s.checks || []);
        const c = alle.find((x) => x.q === it.q && Array.isArray(x.options) && (!it.antwoord || x.options[x.answer] === it.antwoord));
        if (!c) continue;
        const volgorde = schud(c.options.map((_, i) => i));
        lijst.push({ key: it.key, check: { ...c, options: volgorde.map((i) => c.options[i]), answer: volgorde.indexOf(c.answer), wrongHints: volgorde.map((i) => c.wrongHints?.[i]) } });
      }
      // Vertalingen van álle geladen paden (niet alleen de eerste): elk pad heeft eigen teksten.
      const steun = Object.values(paden).map((p) => p?.steunTeksten).filter(Boolean);
      if (weg) return;
      setMap(maakSteunMap(UI_STEUN, ...steun));
      setVragen(lijst);
      try { track("nk_herhaal_start", { aantal: lijst.length }); } catch { /* */ }
    })();
    return () => { weg = true; };
  }, []);

  const huidige = vragen?.[idx]?.check;
  const klaar = vragen && idx >= vragen.length;
  useEffect(() => { if (klaar) { try { track("nk_herhaal_klaar", { goed, aantal: vragen.length }); } catch { /* */ } } }, [klaar]); // eslint-disable-line

  // Kliktest 26 sep 2026: na een fout zegt de hint "Probeer het nog eens" — dan moet dat ook kunnen.
  // De EERSTE keuze telt voor het herhaalschema; daarna mag het kind door tot het goed is.
  const [eersteGedaan, setEersteGedaan] = useState(false);
  const kies = (i) => {
    if (gekozen !== null && gekozen === huidige.answer) return;
    setGekozen(i);
    const ok = i === huidige.answer;
    if (eersteGedaan) return;
    setEersteGedaan(true);
    if (ok) setGoed((g) => g + 1);
    herhaalResultaat(vragen[idx].key, ok);
    try { track("nk_herhaal_antwoord", { goed: ok }); } catch { /* */ }
  };
  const volgende = () => { setGekozen(null); setEersteGedaan(false); setIdx((n) => n + 1); };

  const kaart = { background: "rgba(255,255,255,.96)", color: "#0f2a44", borderRadius: 18, padding: "16px 18px", boxShadow: "0 8px 22px rgba(0,0,0,.25)" };
  const knop = (primair) => ({ width: "100%", padding: "12px 16px", borderRadius: 12, border: primair ? "none" : "2px solid #0f2a44", background: primair ? "#0f2a44" : "#fff", color: primair ? "#fff" : "#0f2a44", fontWeight: 800, fontSize: 16, cursor: "pointer" });

  const inhoud = useMemo(() => {
    if (!vragen) return <div style={kaart}>…</div>;
    if (klaar) {
      return (
        <div style={{ ...kaart, display: "grid", gap: 12 }}>
          <SteunTekst nl="Klaar met herhalen!"><div style={{ fontSize: 22, fontWeight: 900 }}>🏁 Klaar met herhalen!</div></SteunTekst>
          {vragen.length > 0 && <div style={{ fontSize: 16, fontWeight: 700 }}>{goed} / {vragen.length} ✓</div>}
          <SteunTekst nl="Morgen komen er weer een paar terug." ><div style={{ fontSize: 15 }}>Morgen komen er weer een paar terug.</div></SteunTekst>
          <SteunTekst nl="Terug" knop><button type="button" onClick={onKlaar} style={knop(true)}>Terug</button></SteunTekst>
        </div>
      );
    }
    const c = huidige;
    const isGoed = gekozen !== null && gekozen === c.answer;
    return (
      <div style={{ ...kaart, display: "grid", gap: 10 }}>
        <div style={{ fontSize: 13, fontWeight: 800, opacity: .6 }}>🔁 {idx + 1} / {vragen.length}</div>
        <SteunVraag steun={c.steun} altijd={c.steunAltijd}>
          <div style={{ fontSize: 18, fontWeight: 800 }}><MdInline text={c.q} /></div>
        </SteunVraag>
        {c.options.map((o, i) => {
          const kleur = gekozen === null ? "#fff" : i === gekozen ? (i === c.answer ? "#d7f5df" : "#fde0dd") : "#fff";
          const lidwoord = /^(de|het) \S/.test(String(o)) ? (String(o).startsWith("het ") ? "het" : "de") : null;
          return (
            <SteunOptie key={o} steun={c.steunOpties} opt={o}>
              <button type="button" onClick={() => kies(i)} style={{ width: "100%", textAlign: "left", padding: "12px 14px", borderRadius: 12, border: "2px solid #c9d6e3", background: kleur, color: "#0f2a44", fontWeight: 700, fontSize: 16, cursor: isGoed ? "default" : "pointer" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}><Picto bron={c.picto?.[o]} />
                  {lidwoord ? (<span><span style={{ color: lidwoord === "het" ? "#e65100" : "#1565c0", fontWeight: 900 }}>{lidwoord}</span> <MdInline text={String(o).replace(/^(de|het) /, "")} /></span>) : <MdInline text={o} />}
                </span>
              </button>
            </SteunOptie>
          );
        })}
        {gekozen !== null && (
          <>
            <SteunTekst nl={isGoed ? "Dat is juist!" : "Nog niet helemaal"}>
              <div style={{ fontWeight: 900, fontSize: 17, color: isGoed ? "#1b7f3b" : "#b3261e" }}>{isGoed ? "✅ Dat is juist!" : "❌ Nog niet helemaal"}</div>
            </SteunTekst>
            {!isGoed && c.wrongHints?.[gekozen] && (
              <SteunTekst nl={c.wrongHints[gekozen]}><div style={{ fontSize: 15 }}><MdInline text={c.wrongHints[gekozen]} /></div></SteunTekst>
            )}
            {isGoed && <SteunTekst nl="Volgende" knop><button type="button" onClick={volgende} style={knop(true)}>Volgende ▶</button></SteunTekst>}
          </>
        )}
      </div>
    );
  }, [vragen, idx, gekozen, klaar, goed]); // eslint-disable-line

  return <SteunCtx.Provider value={map}>{inhoud}</SteunCtx.Provider>;
}
