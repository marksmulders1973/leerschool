// Wrap een premium-feature met <PaywallGate feature="ai-tutor">…</PaywallGate>.
// Tot PAYWALL_ACTIVE = true (config.js) rendert hij gewoon `children`.
//
// Daarna (Mark 2026-08-09: "als je niet ziet wat je mist ga je het ook niet
// kopen"): standaard de PREVIEW-stand — de feature blijft ZICHTBAAR maar
// gedimd, met een slotje + tier-label + vriendelijk uitleg-kaartje eroverheen.
// Verbergen is de uitzondering (preview={false} → oude upsell-kaart, of een
// eigen `fallback`).
//
// `kind`-modus: in schermen waar het kind zit géén prijzen of koopdruk —
// alleen "vraag je ouder of verzorger" (kindermarketing-regel).

import { useCanUseFeature } from "./useSubscription.js";
import { getProFeature, getLaag, LAAG_KLEUREN } from "./proPlan.js";
import ProefweekKnop from "./ProefweekKnop.jsx";

const styles = {
  card: {
    background: "linear-gradient(135deg, #1e2a45, #1a2540)",
    border: "1px solid rgba(255, 213, 79, 0.4)",
    borderRadius: 14,
    padding: "20px 18px",
    margin: "16px 0",
    textAlign: "center",
  },
  title: {
    fontFamily: "var(--font-display)",
    fontSize: 18,
    fontWeight: 800,
    color: "#ffd54f",
    marginBottom: 8,
  },
  body: {
    fontFamily: "var(--font-body)",
    fontSize: 14,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.85)",
    marginBottom: 14,
  },
  cta: {
    display: "inline-block",
    padding: "10px 22px",
    background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontSize: 14,
    fontWeight: 700,
    border: "none",
    borderRadius: 10,
    textDecoration: "none",
    cursor: "pointer",
  },
};

const FEATURE_LABELS = {
  "ai-tutor": "AI-leerassistent",
  "exam-mode": "Examen-modus",
  "unlimited-paths": "Onbeperkt oefenen",
  "voorkennis-keten": "Voorkennis-keten",
  "parent-dashboard": "Ouder-dashboard",
  "school-dashboard": "Docent-dashboard",
  "generate-questions": "AI-vragen-generator",
  "werkblad-print": "Werkbladen printen",
  // Familie-pagina's (poort 6 nov 2026) — namen gelijk aan familieFeatures.js
  "paraatheid": "Doorstroomtoets-paraatheid",
  "oefenboekje": "Oefenboekje op maat",
  "ouderkaart": "Kaart voor thuis",
  "weekschema": "Koelkast-weekschema",
  "diploma": "Printbaar diploma",
  "klaarzetten": "Klaarzetten voor je kind",
  "dictee-school": "Dictee met de woorden van school",
  "scan-huiswerk": "Scan je huiswerk",
};

const FEATURE_BLURBS = {
  "paraatheid": "In één blik groen, oranje of rood per onderdeel van de Doorstroomtoets.",
  "oefenboekje": "Een printbaar boekje met precies de vragen waar je kind moeite mee heeft.",
  "ouderkaart": "Een spiekbriefje voor thuis: zo leg je dit onderwerp in gewone woorden uit.",
  "weekschema": "Afvinkbaar weekschema van een kwartier per dag, voor op de koelkast.",
  "diploma": "Een certificaat bij het afronden van een onderwerp.",
  "klaarzetten": "Zet een leerpad klaar; je kind ziet het bij het opstarten.",
  "dictee-school": "Plak de dicteewoorden van deze week erin; Charley leest ze voor.",
};

// Preview-kaart die óver de gedimde feature heen ligt: slotje + tier-label
// (kleur mét woord) + één zin uitleg + nette vervolg-stap.
function LockedPreview({ feature, kind, children }) {
  const f = getProFeature(feature);
  const label = (f && f.label) || FEATURE_LABELS[feature] || feature;
  const laag = f ? getLaag(f.laag) : null;
  const laagNaam = laag ? laag.naam : "Familie";
  const kleur = (f && LAAG_KLEUREN[f.laag]) || LAAG_KLEUREN.familie;

  return (
    <div style={{ position: "relative", margin: "16px 0" }}>
      {/* De feature zelf blijft zichtbaar — gedimd en niet bedienbaar. */}
      <div aria-hidden="true" style={{ filter: "grayscale(0.7)", opacity: 0.35, pointerEvents: "none", userSelect: "none" }}>
        {children}
      </div>
      <div
        role="region"
        aria-label={`${label} hoort bij het ${laagNaam}-pakket`}
        style={{
          position: "absolute", inset: 0, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 8, padding: 16,
          background: "rgba(11,16,32,0.55)", borderRadius: 14, textAlign: "center",
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          <span aria-hidden="true" style={{ fontSize: 20 }}>🔒</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, color: "#fff" }}>{label}</span>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 5, padding: "2px 9px", borderRadius: 20,
            border: `1px solid ${kleur.rand}`, background: kleur.vlak, color: kleur.tekst,
            fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 800,
          }}>
            <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: "50%", background: kleur.dot }} />
            {laagNaam}
          </span>
        </div>
        {f && f.blurb && (
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.5, color: "rgba(255,255,255,0.8)", maxWidth: 360 }}>
            {f.blurb}
          </div>
        )}
        {kind ? (
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>
            Vraag je ouder of verzorger of jullie dit erbij nemen.
          </div>
        ) : (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
            <ProefweekKnop plek={`poort:${feature}`} />
            <a href="/abonnement.html#familie" style={{ ...styles.cta, padding: "10px 18px", fontSize: 13 }}>
              Bekijk {laagNaam} — € 39 per jaar
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// 🚪 FamiliePoort — voor een HELE pagina (paraatheid, oefenboekje, …). De preview-stand van
// PaywallGate legt een kaart over de hele hoogte; op een lange pagina valt die buiten beeld.
// Hier: kaart bovenaan met uitleg, proefweek-knop en koop-link, daaronder een gedimd kijkje.
export function FamiliePoort({ feature, authUser = null, children, onTerug, kind = false }) {
  const { allowed, paywallActive, loading } = useCanUseFeature(feature, authUser);
  if (!paywallActive || allowed) return children;
  if (loading) return <div style={{ padding: 24, color: "rgba(255,255,255,0.6)", fontSize: 14 }}>Toegang controleren…</div>;
  const f = getProFeature(feature);
  const label = (f && f.label) || FEATURE_LABELS[feature] || feature;
  const blurb = (f && f.blurb) || FEATURE_BLURBS[feature] || "";
  const kleur = LAAG_KLEUREN.familie;
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0b1224)", color: "#fff", padding: "16px 16px 40px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        {onTerug && (
          <button type="button" onClick={onTerug} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.7)", fontWeight: 700, cursor: "pointer", padding: "6px 0", fontSize: 14 }}>← terug</button>
        )}
        <div role="region" aria-label={`${label} hoort bij Familie`} style={{ ...styles.card, margin: "10px 0 18px", textAlign: "left", padding: "22px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
            <span aria-hidden="true" style={{ fontSize: 22 }}>🔒</span>
            <div style={{ ...styles.title, marginBottom: 0 }}>{label}</div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "2px 9px", borderRadius: 20, border: `1px solid ${kleur.rand}`, background: kleur.vlak, color: kleur.tekst, fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 800 }}>
              <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: "50%", background: kleur.dot }} />Familie
            </span>
          </div>
          {blurb && <div style={{ ...styles.body, marginBottom: 10 }}>{blurb}</div>}
          {kind ? (
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.75)" }}>
              Vraag je ouder of verzorger of jullie dit erbij nemen.
            </div>
          ) : (
            <>
              <div style={{ ...styles.body, fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
                Familie is € 39 voor 12 maanden, voor het hele gezin (tot 3 kinderen). Eén keer betalen, het stopt vanzelf.
                Oefenen zelf blijft gratis, gegarandeerd t/m 2031.
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-start" }}>
                <ProefweekKnop plek={`poort:${feature}`} />
                <a href="/abonnement.html#familie" style={{ ...styles.cta, padding: "10px 18px", fontSize: 13 }}>Bekijk Familie — € 39 per jaar</a>
              </div>
            </>
          )}
        </div>
        {/* Kijkje: de echte pagina, gedimd en niet bedienbaar, afgeknipt. */}
        <div aria-hidden="true" style={{ position: "relative", maxHeight: 420, overflow: "hidden", borderRadius: 14 }}>
          <div style={{ filter: "grayscale(0.7)", opacity: 0.35, pointerEvents: "none", userSelect: "none" }}>{children}</div>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 160, background: "linear-gradient(to bottom, rgba(11,18,36,0), var(--color-bg, #0b1224))" }} />
        </div>
      </div>
    </div>
  );
}

export default function PaywallGate({ feature, authUser = null, children, fallback = null, preview = true, kind = false }) {
  const { allowed, paywallActive, loading } = useCanUseFeature(feature, authUser);

  // Geen gating actief → toon altijd children. Dit is het pad tot Mark
  // de paywall flipt (eind 2026 / begin 2027).
  if (!paywallActive) return children;

  if (loading) {
    return (
      <div style={{ padding: 12, color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
        Toegang controleren…
      </div>
    );
  }

  if (allowed) return children;

  if (fallback) return fallback;

  // Standaard: zichtbaar-maar-op-slot (Mark 9 aug 2026).
  if (preview) return <LockedPreview feature={feature} kind={kind}>{children}</LockedPreview>;

  const label = FEATURE_LABELS[feature] || feature;
  return (
    <div style={styles.card} role="region" aria-label={`${label} is een betaalde extra`}>
      <div style={styles.title}>🔒 {label} — betaalde extra</div>
      {/* B1.1 (7-bots-review): geen maand-/jaarprijzen meer — prijsmodel is
          per-kwartier-bijkopen zonder abonnement (proPlan.js = bron). */}
      <div style={styles.body}>
        {label} is een betaalde extra. De leer-basis blijft gratis t/m zeker 2031.
      </div>
      <a href="/abonnement.html" style={styles.cta}>Bekijk de pakketten</a>
    </div>
  );
}
