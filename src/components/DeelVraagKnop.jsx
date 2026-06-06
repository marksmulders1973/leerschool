import { useState } from "react";
import { track, getMyRefCode } from "../utils.js";
import { BRAND } from "../brand.js";

// DeelVraagKnop — sluit de mond-tot-mond-helft van de groei-bal (Mark 2026-06-06:
// "de hoop dat mensen de app delen met de deel-knop"). Eén knop die de /v/<id>-
// deeplink deelt mét de eigen ref-code (voor referral-attributie) + utm_source.
//
// Volgorde: native share-sheet (mobiel) → WhatsApp-fallback (oudergroepen = het
// sterkste organische kanaal) → klembord-kopie. Anoniem getrackt (vraag_gedeeld).
export default function DeelVraagKnop({ id, variant = "outline" }) {
  const [gekopieerd, setGekopieerd] = useState(false);
  if (!id) return null;

  const url = `https://${BRAND.domain}/v/${encodeURIComponent(id)}?ref=${getMyRefCode()}&utm_source=share`;
  const tekst = `Ken jij het antwoord op deze vraag? 🎓 Probeer 'm — met uitleg op 3 niveaus — bij ${BRAND.name}:`;

  const deel = async () => {
    const heeftNative = typeof navigator !== "undefined" && typeof navigator.share === "function";
    track("vraag_gedeeld", { id: String(id).slice(0, 40), via: heeftNative ? "native" : "fallback" });
    if (heeftNative) {
      try { await navigator.share({ title: BRAND.name, text: tekst, url }); return; }
      catch { /* geannuleerd of niet ondersteund → val terug */ }
    }
    try { window.open(`https://wa.me/?text=${encodeURIComponent(tekst + " " + url)}`, "_blank", "noopener"); } catch {}
    try {
      if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(url); setGekopieerd(true); setTimeout(() => setGekopieerd(false), 2000); }
    } catch {}
  };

  const filled = variant === "filled";
  return (
    <button
      type="button"
      onClick={deel}
      style={{
        display: "block", width: "100%", padding: "12px 14px", borderRadius: 12, cursor: "pointer",
        border: filled ? "none" : "1.5px solid rgba(0,200,83,0.5)",
        background: filled ? "linear-gradient(135deg, #00C853, #00a846)" : "rgba(0,200,83,0.08)",
        color: filled ? "#fff" : "#69f0ae",
        fontFamily: "var(--font-body, sans-serif)", fontSize: 15, fontWeight: 800,
      }}
    >
      {gekopieerd ? "✓ Link gekopieerd — plakken maar!" : "📲 Deel deze vraag met een andere ouder"}
    </button>
  );
}
