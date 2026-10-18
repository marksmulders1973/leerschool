// 🔗 Korte vraag na een koppelpoging (Mark 18 okt 2026: "na de koppelpoging vraag of het beter kan
// of verbeterd kan worden" — de koppeling ouder↔kind is het verdienmodel, dus elk lek telt).
//
// Twee tikken, typen mag maar hoeft niet: eerst hoe het ging, dan wat beter kan (of bij een mislukte
// poging meteen: wat ging er mis). Elke tik gaat als event `koppel_feedback` naar de database
// (props: route, oordeel, wens, tekst) — zie docs/sql/koppelingen.sql. Gewone woorden, geen
// emoji-gezichtjes (regel 11 sep). Eén keer per route per apparaat, anders wordt het zeuren.
//
// route: "kind-code" (kind typte de code, gelukt) · "kind-fout" (code mislukte) · "gezinsstart" (ouder, wizard klaar)
import { useState } from "react";
import { track } from "../../utils.js";

const OORDELEN = [
  { key: "makkelijk", label: "Makkelijk" },
  { key: "ging-wel", label: "Ging wel" },
  { key: "lastig", label: "Lastig" },
];
const WENSEN = {
  "kind-code": [
    { key: "code-vinden", label: "De code vinden was lastig" },
    { key: "code-typen", label: "De code typen ging fout" },
    { key: "onduidelijk", label: "Niet duidelijk wat het doet" },
    { key: "niets", label: "Niets, het was goed" },
  ],
  "kind-fout": [
    { key: "code-klopt-niet", label: "De code werd niet geaccepteerd" },
    { key: "code-kwijt", label: "Ik weet de code niet" },
    { key: "verkeerd-toestel", label: "Ik zit op een ander toestel" },
    { key: "snap-niet", label: "Ik snap niet wat ik moet doen" },
  ],
  gezinsstart: [
    { key: "te-veel-stappen", label: "Te veel stappen" },
    { key: "vragen-onduidelijk", label: "Een vraag was niet duidelijk" },
    { key: "nut-onduidelijk", label: "Niet duidelijk wat ik eraan heb" },
    { key: "niets", label: "Niets, het was goed" },
  ],
};
const VRAAG = { "kind-code": "Hoe ging het koppelen?", "kind-fout": "Wat ging er mis?", gezinsstart: "Hoe ging het instellen?" };
const sleutel = (route) => `lk_koppelfb:${route}`;

export default function KoppelFeedback({ route = "kind-code", extra = {} }) {
  const fout = route === "kind-fout";
  const [oordeel, setOordeel] = useState(fout ? "lastig" : null);
  const [anders, setAnders] = useState(false);
  const [tekst, setTekst] = useState("");
  const [klaar, setKlaar] = useState(false);
  const [verborgen] = useState(() => { try { return localStorage.getItem(sleutel(route)) === "1"; } catch { return false; } });
  if (verborgen) return null;

  const meld = (velden) => { try { track("koppel_feedback", { route, ...extra, ...velden }); } catch { /* meting mag het scherm nooit breken */ } };
  const afronden = (velden) => {
    meld({ oordeel, ...velden });
    try { localStorage.setItem(sleutel(route), "1"); } catch { /* */ }
    setKlaar(true);
  };
  const kiesOordeel = (k) => { setOordeel(k); meld({ oordeel: k }); };

  const kaart = { marginTop: 14, padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", textAlign: "left" };
  const titel = { fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: 8 };
  const knop = (aan) => ({ fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 600, padding: "8px 12px", borderRadius: 999, cursor: "pointer", border: `1px solid ${aan ? "#69f0ae" : "rgba(255,255,255,0.22)"}`, background: aan ? "rgba(105,240,174,0.15)" : "transparent", color: aan ? "#69f0ae" : "rgba(255,255,255,0.85)" });

  if (klaar) return <div style={{ ...kaart, color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)", fontSize: 13.5 }} data-koppel-feedback="klaar">Dankjewel! Hiermee maken we het koppelen beter.</div>;

  return (
    <div style={kaart} data-koppel-feedback={route}>
      {!oordeel ? (
        <>
          <div style={titel}>{VRAAG[route]}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {OORDELEN.map((o) => <button key={o.key} type="button" onClick={() => kiesOordeel(o.key)} style={knop(false)}>{o.label}</button>)}
          </div>
        </>
      ) : (
        <>
          <div style={titel}>{fout ? VRAAG[route] : oordeel === "makkelijk" ? "Fijn! Kan er nog iets beter?" : "Wat kan er beter?"}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {WENSEN[route].map((w) => <button key={w.key} type="button" onClick={() => afronden({ wens: w.key })} style={knop(false)}>{w.label}</button>)}
            <button type="button" onClick={() => setAnders(true)} style={knop(anders)}>Iets anders…</button>
          </div>
          {anders && (
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <input value={tekst} onChange={(e) => setTekst(e.target.value.slice(0, 200))} placeholder="Vertel het kort (geen namen nodig)" aria-label="Wat kan beter?"
                style={{ flex: 1, minWidth: 0, borderRadius: 10, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(0,0,0,0.25)", color: "#fff", padding: "9px 10px", fontFamily: "var(--font-body)", fontSize: 14 }} />
              <button type="button" disabled={!tekst.trim()} onClick={() => afronden({ wens: "anders", tekst: tekst.trim() })} style={{ ...knop(true), opacity: tekst.trim() ? 1 : 0.5 }}>Stuur</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
