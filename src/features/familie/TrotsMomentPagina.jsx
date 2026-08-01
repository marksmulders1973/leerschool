// ══════════════════════════════════════════════════════════════════════
// Trots-momenten — hub-preview (Familie-feature 6, Mark 1 aug 2026), bèta-live.
//
// Legt uit wat trots-momenten zijn en toont een paar voorbeelden. De échte
// momenten verschijnen vanzelf tijdens het oefenen (o.a. op het klaar-scherm
// van een leerpad via <TrotsMoment>). Deze pagina is puur ter kennismaking.
// ══════════════════════════════════════════════════════════════════════
import TrotsMoment from "./TrotsMoment.jsx";

const VOORBEELDEN = [
  { emoji: "🌟", titel: "Trots-moment voor Sophie!", tekst: "In één keer foutloos door breuken. Zo laat je zien dat je het écht begrijpt — knap gedaan!" },
  { emoji: "🔥", titel: "7 dagen op rij!", tekst: "Een hele week elke dag een kwartier geoefend. Volhouden is het halve werk." },
  { emoji: "🏅", titel: "Onderwerp onder de knie", tekst: "Procenten gaan nu vlot — tijd voor een nieuw onderwerp." },
];

export default function TrotsMomentPagina({ setPage }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0b1020)", color: "var(--color-text, #e8edf5)" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "18px 16px 60px" }}>
        <button onClick={() => setPage && setPage("familie")} style={linkBtn}>← terug</button>

        <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 900, margin: 0 }}>🎉 Trots-momenten</h1>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0b1224", background: "#ffd54f", padding: "3px 8px", borderRadius: 8 }}>bèta</span>
        </div>
        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14, lineHeight: 1.6, marginTop: 6 }}>
          Kleine, positieve seintjes bij een mijlpaal — voor je kind én voor jou als ouder of verzorger. Ze verschijnen
          <b> vanzelf</b> tijdens het oefenen; je hoeft niets in te stellen. Zo zien ze eruit:
        </p>

        <div style={{ marginTop: 8 }}>
          {VOORBEELDEN.map((v, i) => (
            <TrotsMoment key={i} emoji={v.emoji} titel={v.titel} tekst={v.tekst} />
          ))}
        </div>

        <div style={{ marginTop: 22, fontSize: 12.5, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.55 }}>
          ✨ Bèta — het eerste moment (foutloos een pad afronden) is live. Meer mijlpalen (streak, onderwerp gehaald)
          komen erbij. Nooit een seintje dat straft: alleen aanmoediging.
        </div>
      </div>
    </div>
  );
}

const linkBtn = { background: "none", border: "none", color: "var(--color-accent, #42a5f5)", cursor: "pointer", fontSize: 14, fontWeight: 700, padding: 0 };
