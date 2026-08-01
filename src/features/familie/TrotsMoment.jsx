// ══════════════════════════════════════════════════════════════════════
// Trots-moment — Familie-feature 6 (Mark 1 aug 2026), bèta-live.
//
// Een klein, positief seintje bij een mijlpaal (pad foutloos, streak, onderwerp
// gehaald). Warme toon, gericht op kind én ouder/verzorger — nooit straffend.
// Presentatie-component: krijgt titel + tekst, rendert een vrolijk kaartje.
// Verschijnt vanzelf op het klaar-scherm; ook gebruikt in de hub-preview.
// ══════════════════════════════════════════════════════════════════════
export default function TrotsMoment({ titel, tekst, emoji = "🎉" }) {
  if (!titel) return null;
  return (
    <div
      style={{
        marginTop: 14, borderRadius: 16, padding: "16px 18px",
        background: "linear-gradient(135deg, rgba(255,213,79,0.16), rgba(105,240,174,0.12))",
        border: "1px solid rgba(255,213,79,0.5)",
        display: "flex", alignItems: "center", gap: 14,
      }}
    >
      <div style={{ fontSize: 34, lineHeight: 1 }}>{emoji}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 900, fontSize: 16, color: "var(--color-text, #e8edf5)" }}>{titel}</div>
        {tekst && (
          <div style={{ fontSize: 13.5, color: "var(--color-text-muted, #cbd3e6)", lineHeight: 1.5, marginTop: 3 }}>{tekst}</div>
        )}
      </div>
    </div>
  );
}

// Bepaalt of een afgerond pad een mijlpaal is (foutloos in één keer). Geeft
// { titel, tekst, emoji } terug, of null. Losgekoppeld zodat het klaar-scherm
// alleen data hoeft door te geven.
export function trotsVoorResultaat({ naam, padTitel, correct, tries }) {
  if (!tries || tries < 3) return null;
  if (correct === tries) {
    const wie = String(naam ?? "").trim();
    const ond = String(padTitel || "dit onderwerp").split(/\s[—·]\s/)[0].trim();
    return {
      emoji: "🌟",
      titel: `Trots-moment${wie ? ` voor ${wie}` : ""}!`,
      tekst: `In één keer foutloos door ${ond.toLowerCase()}. Zo laat je zien dat je het écht begrijpt — knap gedaan!`,
    };
  }
  return null;
}
