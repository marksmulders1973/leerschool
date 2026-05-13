// Audit-1 (2026-05-13): paywall-infrastructuur klaar, gating UIT tot Mark
// expliciet aanzet. Reden: 2026-mei = 0 gebruikers, eerst groei. Schakel
// pas aan rond Cito-piek nov 2026 of bij eerste 100+ DAU.
//
// Hoe schakel je de paywall LIVE?
//
// 1. Zet `PAYWALL_ACTIVE = true` hieronder (één regel).
// 2. Voeg Stripe/Mollie env-vars toe aan Vercel:
//    - STRIPE_SECRET_KEY=sk_live_...
//    - STRIPE_PUBLIC_KEY=pk_live_...
//    - STRIPE_WEBHOOK_SECRET=whsec_...
// 3. Implementeer echte Stripe-flow in `api/checkout-session.js` (nu stub).
// 4. Build webhook handler `api/stripe-webhook.js` die `subscriptions`-tabel
//    bijwerkt op `checkout.session.completed` en `customer.subscription.deleted`.
// 5. Test in Stripe-test-mode → switch live keys.
//
// Tot stap 1: iedereen is gratis `parent_pro` (alles open, geen quota).

export const PAYWALL_ACTIVE = false;

// Provisional release-doel — bij die datum echte gating overwegen.
export const PAYWALL_PLANNED_GO_LIVE = "2027-01-15"; // Cito-piek 2027

// Tier-mapping (sluit aan op Supabase `subscriptions.tier`-check).
export const TIERS = {
  FREE: "free",
  PARENT_PRO: "parent_pro",
  TEACHER_PRO: "teacher_pro",
};

// Feature → minimaal vereiste tier-set. Als feature niet in deze map staat
// is hij gratis voor iedereen.
export const FEATURE_GATES = {
  "ai-tutor": [TIERS.PARENT_PRO, TIERS.TEACHER_PRO],
  "exam-mode": [TIERS.PARENT_PRO, TIERS.TEACHER_PRO],
  "unlimited-paths": [TIERS.PARENT_PRO, TIERS.TEACHER_PRO],
  "voorkennis-keten": [TIERS.PARENT_PRO, TIERS.TEACHER_PRO],
  "parent-dashboard": [TIERS.PARENT_PRO, TIERS.TEACHER_PRO],
  "school-dashboard": [TIERS.TEACHER_PRO],
  "generate-questions": [TIERS.PARENT_PRO, TIERS.TEACHER_PRO],
};

// Quota voor free-tier (alleen relevant als PAYWALL_ACTIVE = true).
export const FREE_QUOTA = {
  pathsPerDay: 3,
  aiTutorCallsPerDay: 0, // 0 = geen toegang
  examModePerWeek: 0,
};

// Pricing (toon in UI; bedragen geverifieerd uit audit 2026-05-13).
export const PRICING = {
  parent_monthly: { price: 5.99, currency: "EUR", interval: "maand", label: "Maandabonnement" },
  parent_yearly: { price: 39, currency: "EUR", interval: "jaar", label: "Jaarabonnement (save 45%)" },
  parent_exam_period: { price: 19.95, currency: "EUR", interval: "examenperiode", label: "Examenperiode jan-mei" },
  teacher_school: { price: 99, currency: "EUR", interval: "klas/jaar", label: "Schoollicentie" },
};
