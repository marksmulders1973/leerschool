// 👨‍👩‍👧 Familie-tegels op Mijn pagina van de ouder (Mark 1 okt 2026: "die blokken als Netflix, onder
// ouder, met al deze punten erin zodat ze weten wat ze kunnen doen"). Elke tegel = één Familie-onderdeel
// dat echt werkt en direct te openen is; wat nog in de maak is staat er grijs bij, niet aantikbaar.
// Bron: familieFeatures.js (zelfde lijst als de Familie-hub).

import { FEATURES } from "./familieFeatures.js";
import FamilieAfsluiten from "../../subscription/FamilieAfsluiten.jsx";
import { track } from "../../utils.js";

// Nog in de maak (eerlijk benoemd, niet aantikbaar).
const BINNENKORT = [
  { emoji: "⏱️", titel: "Hele toets met de klok", tekst: "Een volledige oefentoets met tijdklok en eindrapport." },
  { emoji: "🧭", titel: "Kwartierplan", tekst: "Een persoonlijk stappenplan van kwartiertjes per week." },
  { emoji: "🔗", titel: "Voorkennis-keten", tekst: "Per vraag zien welke basiskennis eronder ligt." },
];

const tegelStijl = {
  display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4, textAlign: "left",
  padding: "12px 12px", minHeight: 118, borderRadius: 14, width: "100%",
  fontFamily: "var(--font-body)",
};

export default function FamilieTegels({ onNaar, onOuderDashboard }) {
  const open = (f) => {
    try { track("mijn_familie_tegel", { tegel: f.page || f.titel }); } catch { /* */ }
    if (f.page === "ouder-dashboard" || !f.page) { if (onOuderDashboard) onOuderDashboard(); return; }
    if (onNaar) onNaar(f.page);
  };
  const klaar = FEATURES.filter((f) => f.status === "klaar");
  return (
    <div style={{ marginBottom: "var(--space-4)" }}>
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 0.6, textTransform: "uppercase", color: "var(--color-text-muted, #8899aa)", margin: "4px 0 2px 2px" }}>
        Alles in Familie
      </div>
      <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)", margin: "0 0 10px 2px" }}>Tik op een tegel om het te proberen.</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
        {klaar.map((f) => (
          <button key={f.titel} type="button" onClick={() => open(f)} style={{
            ...tegelStijl, cursor: "pointer", border: "1px solid rgba(255,213,79,0.35)",
            background: "linear-gradient(160deg, rgba(255,213,79,0.10), rgba(255,255,255,0.03))", color: "var(--color-text)",
          }}>
            <span aria-hidden="true" style={{ fontSize: 26, lineHeight: 1 }}>{f.emoji}</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, lineHeight: 1.25, color: "var(--color-text-strong, #fff)" }}>{f.titel}</span>
            <span style={{ fontSize: 12, lineHeight: 1.4, color: "var(--color-text-muted, #8899aa)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{f.tekst}</span>
            <span style={{ marginTop: "auto", fontSize: 11, fontWeight: 800, color: "#69f0ae" }}>✓ nu te proberen</span>
          </button>
        ))}
        {BINNENKORT.map((f) => (
          <div key={f.titel} aria-label={`${f.titel}: binnenkort`} style={{
            ...tegelStijl, border: "1px dashed rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.02)", color: "rgba(255,255,255,0.45)",
          }}>
            <span aria-hidden="true" style={{ fontSize: 24, lineHeight: 1, opacity: 0.6 }}>{f.emoji}</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, lineHeight: 1.25 }}>{f.titel}</span>
            <span style={{ fontSize: 12, lineHeight: 1.4 }}>{f.tekst}</span>
            <span style={{ marginTop: "auto", fontSize: 11, fontWeight: 800 }}>binnenkort</span>
          </div>
        ))}
      </div>
      <FamilieAfsluiten plek="mijn-ouder-tegels" variant="regel" style={{ marginTop: 12 }} />
    </div>
  );
}
