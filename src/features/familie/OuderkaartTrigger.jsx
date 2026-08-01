// ══════════════════════════════════════════════════════════════════════
// Ouderkaart-trigger — Familie-feature 3 (Mark 1 aug 2026), GEHEIM.
//
// Verschijnt op het KLAAR-scherm van een leerpad (niet midden in de frustratie)
// als het kind ≥2 keer fout ging op dit concept. Nodigt de ouder uit: "zo help
// je thuis" → opent de ouderkaart voor dit concept. Rustige, positieve toon —
// nooit een pop-up die het kind straft.
//
// Zelf-verbergend: rendert null tenzij (a) de Familie-preview zichtbaar is
// (?familie=1 of admin) EN (b) er ≥2 fouten waren. Echte gebruikers zien dus
// niets tot de laag live gaat. Gebruikt een gewone link naar /ouderkaart zodat
// het niet afhangt van de navigatie-internals van de leerpad-speler.
// ══════════════════════════════════════════════════════════════════════
import { track } from "../../utils.js";

export default function OuderkaartTrigger({ conceptId, conceptTitel, fouten = 0 }) {
  // Bèta-live (Mark 1 aug): toont bij ≥2 fout op dit concept, voor iedereen.
  if (!conceptId || fouten < 2) return null;

  const titel = String(conceptTitel || "dit onderwerp").split(/\s[—·]\s/)[0].trim() || "dit onderwerp";
  const href = `/ouderkaart?kaart=${encodeURIComponent(conceptId)}`;

  return (
    <a
      href={href}
      onClick={() => { try { track("ouderkaart_trigger_klik", { concept: conceptId }); } catch { /* */ } }}
      style={{
        display: "block", textDecoration: "none", marginTop: 14,
        background: "rgba(255,213,79,0.10)", border: "1px solid rgba(255,213,79,0.45)",
        borderRadius: 14, padding: "14px 16px", color: "inherit",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ fontSize: 26, lineHeight: 1 }}>👪</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800, fontSize: 15 }}>Voor thuis — zo help je</div>
          <div style={{ fontSize: 13.5, color: "var(--color-text-muted, #9aa4c7)", lineHeight: 1.5, marginTop: 2 }}>
            Merk je dat <b>{titel.toLowerCase()}</b> nog niet vlot gaat? Wij maakten een kaart die je laat zien hoe je
            het in gewone woorden uitlegt.
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#ffd54f", whiteSpace: "nowrap" }}>Bekijk →</div>
      </div>
    </a>
  );
}
