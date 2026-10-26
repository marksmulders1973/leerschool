// 🧒 Groep-poort — "In welke groep zit je?" (Mark 26 okt 2026: "maak verplicht dat je in alle
// gevallen een groep of klas of ouderrol invult, ook zonder account"). Eén kaart, op twee plekken:
// Mijn pagina (kind-profiel zonder groep) en het Start-kwartier (gast zonder groep, die anders
// stil groep 6 kreeg). Middelbare school / ouder / leerkracht gaan via een profiel (wissel →
// lege plek), daar staan klas en schooltype goed.
import React from "react";
import Card from "../../shared/ui/Card.jsx";

export default function GroepPoort({ onKies, uitleg = "Dan laat ik precies de vakken en vragen zien die bij jouw groep horen.", voetnoot = null, style = {} }) {
  return (
    <Card padding="md" style={{ marginBottom: "var(--space-4)", border: "2px solid rgba(255,183,77,0.7)", background: "linear-gradient(0deg, rgba(255,183,77,0.08), rgba(255,183,77,0.08)), var(--color-bg-elevated)", ...style }}>
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6, color: "var(--color-text-muted, #8899aa)" }}>Eerst even dit</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, color: "var(--color-text-strong, #fff)", margin: "2px 0 4px" }}>In welke groep zit je?</div>
      <div style={{ fontSize: 13.5, color: "var(--color-text-muted, #8899aa)", marginBottom: 12 }}>{uitleg}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <button key={n} type="button" onClick={() => onKies(n)} data-groep={n}
            style={{ padding: "14px 0", borderRadius: 12, cursor: "pointer", border: "1px solid rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.06)", color: "var(--color-text-strong, #fff)", fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700 }}>
            groep {n}
          </button>
        ))}
      </div>
      {voetnoot && (
        <div style={{ fontSize: 12.5, color: "var(--color-text-muted, #8899aa)", marginTop: 12, lineHeight: 1.5 }}>{voetnoot}</div>
      )}
    </Card>
  );
}
