import { useState } from "react";
import { track, getMyRefCode } from "../utils.js";
import { BRAND } from "../brand.js";
import { getDayStreak } from "../shared/dailyGoal.js";

// DeelTrotsKnop — de "deel-loop" op het moment van trots (Mark/Titan 2026-06-28).
// Zodra een kind het dagelijkse kwartier afrondt, kan de ouder die mijlpaal met
// één tik delen met andere ouders. Zo zetten we bestaande betrokken momenten om
// in mond-tot-mond-groei (de zwakste helft van de groei-bal — delen gebeurde tot
// nu toe nauwelijks). Deelt de HOMEPAGE met de eigen ref-code (referral-
// attributie, zelfde plumbing als getIncomingRef) + utm_source=trots.
//
// Volgorde: native share-sheet (mobiel) → WhatsApp-fallback (oudergroepen = het
// sterkste organische kanaal) → klembord-kopie. Anoniem getrackt (kwartier_gedeeld).
//
// Standaard-styling past op een gekleurde (groene) felicitatie-achtergrond:
// witte pil met donkere tekst. `onShared` wordt aangeroepen na een geslaagde
// deel-actie (bv. om de toast te sluiten).
export default function DeelTrotsKnop({ onShared }) {
  const [gekopieerd, setGekopieerd] = useState(false);
  const streak = (() => { try { return getDayStreak().current || 0; } catch { return 0; } })();

  const url = `https://${BRAND.domain}/?ref=${getMyRefCode()}&utm_source=trots`;
  const streakDeel = streak > 1 ? ` (dag ${streak} op rij! 🔥)` : "";
  const tekst = `Mijn kind oefende vandaag 15 minuten voor de Doorstroomtoets${streakDeel} met ${BRAND.name} 🎯 Gratis, een kwartier per dag leren, een leven lang slimmer:`;

  const deel = async () => {
    const heeftNative = typeof navigator !== "undefined" && typeof navigator.share === "function";
    track("kwartier_gedeeld", { streak, via: heeftNative ? "native" : "fallback" });
    if (heeftNative) {
      try { await navigator.share({ title: BRAND.name, text: tekst, url }); onShared?.(); return; }
      catch { /* geannuleerd of niet ondersteund → val terug */ }
    }
    try { window.open(`https://wa.me/?text=${encodeURIComponent(tekst + " " + url)}`, "_blank", "noopener"); } catch {}
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        setGekopieerd(true);
        setTimeout(() => setGekopieerd(false), 2000);
      }
    } catch {}
    onShared?.();
  };

  return (
    <button
      type="button"
      onClick={deel}
      style={{
        width: "100%", padding: "9px 12px", borderRadius: 10, cursor: "pointer",
        border: "none", background: "rgba(255,255,255,0.92)", color: "#0d1b2e",
        fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 800,
      }}
    >
      {gekopieerd ? "✓ Link gekopieerd — plak 'm in een oudergroep!" : "📲 Trots? Tip een andere ouder"}
    </button>
  );
}
