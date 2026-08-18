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
  "unlimited-paths": "Onbeperkt leerpaden",
  "voorkennis-keten": "Voorkennis-keten",
  "parent-dashboard": "Ouder-dashboard",
  "school-dashboard": "Docent-dashboard",
  "generate-questions": "AI-vragen-generator",
  "werkblad-print": "Werkbladen printen",
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
          <a href="/abonnement.html" style={{ ...styles.cta, padding: "8px 18px", fontSize: 13 }}>
            Bekijk het {laagNaam}-pakket
          </a>
        )}
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
    <div style={styles.card} role="region" aria-label={`${label} vereist premium`}>
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
