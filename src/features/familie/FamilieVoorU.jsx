// 💛 FamilieVoorU — "Dit betekent Familie voor u" (Mark 9 nov 2026: "maak een 'dit betekent
// Familie-pakket voor u'-reclame die we zelf kunnen promoten en ergens in de app plaatsen").
//
// Eén kaart in uitkomst-taal voor de ouder: wat verandert er thuis, niet welke onderdelen er in
// zitten (die lijst staat al in FamilieTegels/FamilieLijst). Drie zinnen, één prijsregel, de
// bestaande knoppenrij (proefweek + Kies Familie). Alleen op ouder-plekken (/ouder, ouder-bril op
// /mijn), nooit op kind-schermen. Verbergt zichzelf voor gezinnen die Familie al hebben (code of
// betaald); bij een lopende proefweek toont de knoppenrij vanzelf "Kies Familie".
// Dezelfde drie zinnen staan in de weekrapport-mail (api/_lib/mail-tagline.js, familieVoorUHtml)
// en op het deelplaatje — pas je ze hier aan, pas ze dan ook daar aan.
// Meten: familie_voor_u_toon { plek } (één keer per kaart) + de bestaande familie_klik / proefweek_klik.
import { useEffect, useRef } from "react";
import FamilieAfsluiten, { useFamilieStatus, familieHref } from "../../subscription/FamilieAfsluiten.jsx";
import { track } from "../../utils.js";

export const FAMILIE_VOOR_U = [
  ["U weet waar uw kind staat.", "Per onderdeel groen, oranje of rood, en elke vrijdag een weekrapport in uw mail."],
  ["Het kwartier loopt zonder gezeur.", "U zet een les klaar, uw kind ziet “Vandaag staat klaar”. Weekschema voor de koelkast om af te vinken."],
  ["U kunt het thuis uitleggen.", "Een kaart in gewone woorden, Charley legt onbeperkt uit, en het dictee met de woorden van school."],
];
export const FAMILIE_VOOR_U_PRIJS = "€ 39 voor 12 maanden: één pakket voor het hele gezin, tot 3 kinderen. Eén keer betalen, stopt vanzelf. Eerst een week gratis proberen, zonder betaalgegevens.";

const GOUD = "#ffd54f";

export default function FamilieVoorU({ plek = "ouder", style }) {
  const status = useFamilieStatus();
  const gemeten = useRef(false);
  const toon = status === "open" || status?.soort === "proef";
  useEffect(() => {
    if (!toon || gemeten.current) return;
    gemeten.current = true;
    try { track("familie_voor_u_toon", { plek, proef: status?.soort === "proef" }); } catch { /* meting mag nooit breken */ }
  }, [toon, plek, status]);
  if (!toon) return null;

  return (
    <section
      aria-labelledby="familie-voor-u-kop"
      style={{
        borderRadius: 16, padding: "16px 16px 14px",
        border: `1.5px solid rgba(255,213,79,0.45)`,
        background: "linear-gradient(160deg, rgba(255,213,79,0.12), rgba(255,255,255,0.03))",
        fontFamily: "var(--font-body)", color: "var(--color-text, #e8edf5)",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
        <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: GOUD, flexShrink: 0 }} />
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 0.6, textTransform: "uppercase", color: "#ffce80" }}>Familie-pakket · voor ouders</span>
      </div>
      <h2 id="familie-voor-u-kop" style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 900, margin: "0 0 6px", color: "var(--color-text-strong, #fff)", lineHeight: 1.2 }}>
        Dit betekent het Familie-pakket voor u
      </h2>
      <p style={{ fontSize: 13.5, lineHeight: 1.55, margin: "0 0 10px", color: "var(--color-text-muted, #a9b6c8)" }}>
        Oefenen is en blijft gratis voor elk kind. Het Familie-pakket is er voor ú:
      </p>
      <ol style={{ listStyle: "none", margin: "0 0 12px", padding: 0, display: "grid", gap: 8 }}>
        {FAMILIE_VOOR_U.map(([kop, tekst], i) => (
          <li key={kop} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span aria-hidden="true" style={{
              flexShrink: 0, width: 24, height: 24, borderRadius: "50%", background: GOUD, color: "#0b1224",
              fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 900, display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 1,
            }}>{i + 1}</span>
            <span style={{ fontSize: 14, lineHeight: 1.5 }}>
              <strong style={{ color: "var(--color-text-strong, #fff)" }}>{kop}</strong> {tekst}
            </span>
          </li>
        ))}
      </ol>
      <p style={{ fontSize: 13, lineHeight: 1.55, margin: "0 0 12px", color: "var(--color-text-muted, #a9b6c8)" }}>
        {FAMILIE_VOOR_U_PRIJS}
      </p>
      <FamilieAfsluiten plek={plek === "ouder" ? "familie-voor-u" : `familie-voor-u-${plek}`} variant="knop" />
      <p style={{ fontSize: 12, lineHeight: 1.5, margin: "12px 0 0", color: "var(--color-text-muted, #8899aa)" }}>
        Code gekregen van uw gemeente of een organisatie? Dan krijgt u het Familie-pakket gratis: vul de code in op de startpagina.{" "}
        <a href={familieHref("familie-voor-u-meer")} style={{ color: GOUD, fontWeight: 700 }}>Alles over het Familie-pakket →</a>
      </p>
    </section>
  );
}
