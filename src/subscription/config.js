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
  // Werkbladen printen = Pro (leerkracht); digitaal oefenen via deelcode/QR
  // blijft altijd gratis (docs/LEERKRACHT-WERKBLAD-PLAN.md Fase 3).
  "werkblad-print": [TIERS.TEACHER_PRO],
  // 9 aug id-sync met proPlan PRO_FEATURES: zonder gate laat useSubscription
  // een feature bij live paywall gewoon door ("niet-gegate = vrij").
  "teacher-tools": [TIERS.TEACHER_PRO],
  "weekrapport": [TIERS.PARENT_PRO, TIERS.TEACHER_PRO],
  "kwartierplan": [TIERS.PARENT_PRO, TIERS.TEACHER_PRO],
};

// Quota voor free-tier (alleen relevant als PAYWALL_ACTIVE = true).
export const FREE_QUOTA = {
  pathsPerDay: 3,
  aiTutorCallsPerDay: 0, // 0 = geen toegang
  examModePerWeek: 0,
};

// Richtprijzen drie-lagen-model (Mark akkoord 2026-07-25, zie docs/PRIJSPLAN.md).
// Definitief vaststellen vóór de Stripe-koppeling jan 2027. NIET hard in UI
// tonen — proPlan.js (LAGEN) is de bron van waarheid voor prijs-copy.
// Mapping op TIERS: familie = parent_pro, leerkracht (Pro) = teacher_pro.
export const PRICING = {
  familie_monthly: { price: 4.95, currency: "EUR", interval: "maand", label: "Familie — per gezin/maand" },
  // Seizoenspas (Mark 9 aug 2026, PRIJSPLAN §2b): eenmalige betaling, geldig
  // t/m validUntil, GEEN automatische verlenging (merkbelofte "stopt vanzelf").
  // Stripe straks: mode "payment" + subscriptions.valid_until = validUntil;
  // elk schooljaar de nieuwe einddatum instellen.
  familie_seizoenspas: { price: 24.95, currency: "EUR", interval: "eenmalig", validUntil: "2027-07-31", label: "Familie Seizoenspas — het hele toetsjaar, stopt vanzelf" },
  familie_yearly: { price: 39, currency: "EUR", interval: "jaar", label: "Familie — per gezin/jaar" },
  teacher_monthly: { price: 6.95, currency: "EUR", interval: "maand", label: "Pro (leerkracht) — per maand" },
  teacher_yearly: { price: 59, currency: "EUR", interval: "jaar", label: "Pro (leerkracht) — per jaar" },
  teacher_school: { price: 99, currency: "EUR", interval: "klas/jaar", label: "Schoollicentie" },
  kwartier_tegoed: { price: null, currency: "EUR", interval: "los", label: "Kwartier-tegoed — prijs per kwartier vóór lancering bekend" },
};
