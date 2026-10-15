// 💬 Korte ervaringsvraag na een deel of een heel leerpad (Mark 14 okt 2026:
// "wat vond je van dit leerpad / deze som, met een antwoordmogelijkheid naar de app
// toe, zodat we ervaringen meten en kunnen aanpassen").
//
// Twee tikken, geen typen: eerst hoe het voelde (makkelijk / goed / moeilijk), dan
// wat beter kan. Elke tik gaat als event `pad_feedback` naar de database
// (props: pad, stap, plek, niveau, wens) — zie docs/sql/pad-feedback.sql voor
// het dagrapport. Geen emoji-gezichtjes als knop (regel 11 sep: geen emoticon
// als icoon); gewone woorden. Eén keer per deel per apparaat, anders wordt het zeuren.
//
// plek="stop" (Mark 15 okt 2026: "kan het ook eerder gevraagd worden, nadat iemand op
// stop drukt en bv 2 of 3 vragen heeft gemaakt"): zelfde twee tikken in het
// "plek bewaard"-scherm, met `beantwoord` = vragen die het kind in dit deel deed.
// onKlaar wordt aangeroepen na de tweede tik.
import { useState } from "react";
import { track } from "../../utils.js";

const NIVEAUS = [
  { key: "makkelijk", label: "Makkelijk" },
  { key: "goed", label: "Precies goed" },
  { key: "moeilijk", label: "Moeilijk" },
];
const WENSEN = [
  { key: "meer-uitleg", label: "Meer uitleg" },
  { key: "minder-tekst", label: "Minder tekst" },
  { key: "meer-sommen", label: "Meer vragen" },
  { key: "leukere-vragen", label: "Leukere vragen" },
  { key: "niets", label: "Niets, zo is het goed" },
];

const sleutel = (pathId, stepIdx, plek) => `lk_padfb:${plek}:${pathId}:${stepIdx ?? "pad"}`;

export default function PadFeedback({ pathId, stepIdx = null, plek = "deel", accent = "#ffd54f", beantwoord, onKlaar }) {
  const [niveau, setNiveau] = useState(null);
  const [wens, setWens] = useState(null);
  const [verborgen, setVerborgen] = useState(() => {
    try { return localStorage.getItem(sleutel(pathId, stepIdx, plek)) === "1"; } catch { return false; }
  });
  if (verborgen) return null;

  const meld = (velden) => {
    try { track("pad_feedback", { pad: pathId, stap: stepIdx, plek, ...(beantwoord != null ? { beantwoord } : {}), ...velden }); } catch { /* meting mag nooit het scherm breken */ }
  };
  const kiesNiveau = (k) => { setNiveau(k); meld({ niveau: k }); };
  const kiesWens = (k) => {
    setWens(k); meld({ niveau, wens: k });
    try { localStorage.setItem(sleutel(pathId, stepIdx, plek), "1"); } catch { /* */ }
    if (onKlaar) onKlaar();
  };

  const vraag = plek === "pad" ? "Wat vond je van dit leerpad?" : plek === "stop" ? "Hoe ging het tot nu toe?" : "Hoe was dit deel?";
  const knop = (actief) => ({
    padding: "9px 13px", borderRadius: 999, cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 700,
    border: actief ? `2px solid ${accent}` : "1.5px solid rgba(255,255,255,0.22)",
    background: actief ? "rgba(255,213,79,0.18)" : "rgba(255,255,255,0.06)", color: "#fff",
  });

  return (
    <div style={{ marginTop: 14, padding: "12px 14px", textAlign: "left", borderRadius: 12, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}>
      {wens ? (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.85)" }}>
          Dank je. Hiermee maken we de app beter.
        </div>
      ) : (
        <>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: 800, color: "#fff", marginBottom: 8 }}>
            {niveau ? "Wat zou het beter maken?" : vraag}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }} role="group" aria-label={niveau ? "Wat zou het beter maken?" : vraag}>
            {(niveau ? WENSEN : NIVEAUS).map((o) => (
              <button key={o.key} type="button" onClick={() => (niveau ? kiesWens(o.key) : kiesNiveau(o.key))} style={knop(false)}>
                {o.label}
              </button>
            ))}
          </div>
          {!niveau && (
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 6 }}>
              Eén tik is genoeg. Klopt een vraag niet? Gebruik dan "Klopt er iets niet?" onder die vraag.
            </div>
          )}
        </>
      )}
    </div>
  );
}

// Al een mening gegeven op deze plek? (stop-scherm vraagt dan niet opnieuw)
export function heeftPadFeedback(pathId, stepIdx, plek) {
  try { return localStorage.getItem(sleutel(pathId, stepIdx, plek)) === "1"; } catch { return false; }
}
