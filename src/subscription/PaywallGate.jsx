// Wrap een premium-feature met <PaywallGate feature="ai-tutor">…</PaywallGate>.
// Tot PAYWALL_ACTIVE = true (config.js) rendert hij gewoon `children`.
// Daarna: bij geblokkeerd → upsell-prompt, anders children.

import { useCanUseFeature } from "./useSubscription.js";
import { PAYWALL_ACTIVE, PRICING } from "./config.js";

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
  small: {
    display: "block",
    marginTop: 8,
    fontSize: 11,
    color: "rgba(255,255,255,0.55)",
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
};

export default function PaywallGate({ feature, authUser = null, children, fallback = null }) {
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

  const label = FEATURE_LABELS[feature] || feature;
  return (
    <div style={styles.card} role="region" aria-label={`${label} vereist premium`}>
      <div style={styles.title}>🔒 {label} — premium-feature</div>
      <div style={styles.body}>
        Krijg toegang tot {label.toLowerCase()} met Leerkwartier premium —
        vanaf <strong>€{PRICING.parent_monthly.price.toString().replace(".", ",")}/maand</strong>.
      </div>
      <a href="/abonnement.html" style={styles.cta}>Bekijk abonnement</a>
      <span style={styles.small}>Examenperiode €{PRICING.parent_exam_period.price.toString().replace(".", ",")} • Jaar €{PRICING.parent_yearly.price}</span>
    </div>
  );
}
