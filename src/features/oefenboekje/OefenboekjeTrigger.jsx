// ══════════════════════════════════════════════════════════════════════
// Oefenboekje-trigger — Familie-feature 3 "Printbaar op maat" (Mark 1 aug 2026).
//
// Verschijnt op het KLAAR-scherm van een leerpad (niet midden in de frustratie)
// wanneer het kind HERHAALD (≥3×) fout ging op dit concept: dan is er echt méér
// oefening nodig. Biedt een printbaar oefenboekje op maat aan met precies dit
// onderwerp → /oefenboekje?pad=<conceptId>.
//
// Complementair aan de OuderkaartTrigger (die al bij ≥2 fout verschijnt met "zo
// leg je 't uit"): de ouderkaart helpt de ouder uitleggen, dit boekje geeft het
// kind extra oefenstof. De hogere drempel (3 i.p.v. 2) voorkomt dat er bij elke
// mindere sessie meteen twee kaarten stapelen — het boekje is de escalatie.
//
// Publiek bèta-live, net als de ouderkaart (Mark 1 aug: Familie-laag niet meer
// geheim). Gebruikt een gewone link zodat het niet afhangt van de navigatie-
// internals van de leerpad-speler. GEEN examen-paden: die bevatten authentieke
// examenvragen (examenblad.nl / Doorstroomtoets-stijl) die we niet als los werkblad printen.
// ══════════════════════════════════════════════════════════════════════
import { track } from "../../utils.js";

export default function OefenboekjeTrigger({ conceptId, conceptTitel, fouten = 0 }) {
  if (!conceptId || fouten < 3) return null;
  // Authentieke examenvragen niet als los oefenboekje printen (bron-/rechten-regel).
  if (String(conceptId).startsWith("examen-")) return null;

  const titel = String(conceptTitel || "dit onderwerp").split(/\s[—·]\s/)[0].trim() || "dit onderwerp";
  const href = `/oefenboekje?pad=${encodeURIComponent(conceptId)}`;

  return (
    <a
      href={href}
      onClick={() => { try { track("oefenboekje_trigger_klik", { concept: conceptId, fouten }); } catch { /* */ } }}
      style={{
        // Goud = Familie-kleurtaal (9 aug; was gratis-groen — verkeerde tier-signaal).
        display: "block", textDecoration: "none", marginTop: 12,
        background: "rgba(255,183,77,0.08)", border: "1px solid rgba(255,183,77,0.45)",
        borderRadius: 14, padding: "14px 16px", color: "inherit",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ fontSize: 26, lineHeight: 1 }}>📘</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontWeight: 800, fontSize: 15 }}>Extra oefenen op papier</span>
            {/* kind-scherm: alleen de stip + het woord, geen prijstaal */}
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10.5, fontWeight: 800, color: "#ffce80" }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffd54f", display: "inline-block" }} />
              Familie
            </span>
          </div>
          <div style={{ fontSize: 13.5, color: "var(--color-text-muted, #9aa4c7)", lineHeight: 1.5, marginTop: 2 }}>
            <b>{titel.toLowerCase()}</b> ging nog niet vlot. Print een oefenboekje op maat — extra opgaven met een
            uitgewerkt voorbeeld en een antwoordblad voor thuis.
          </div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#ffce80", whiteSpace: "nowrap" }}>Maak →</div>
      </div>
    </a>
  );
}
