// Audit-1 (2026-05-13): paywall-infrastructuur klaar, gating UIT tot Mark
// expliciet aanzet. Reden: 2026-mei = 0 gebruikers, eerst groei. Schakel
// pas aan rond Toets-piek nov 2026 of bij eerste 100+ DAU.
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
export const PAYWALL_PLANNED_GO_LIVE = "2027-01-15"; // Toets-piek 2027

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
  // blijft gratis t/m zeker 2031, doorrol (docs/LEERKRACHT-WERKBLAD-PLAN.md Fase 3).
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
  // T3-besluit 9 aug 2026: gratis = kleine basis-portie AI-bijles per dag
  // (was 0 — botste met de "basis-portie blijft gratis"-belofte);
  // Familie = onbeperkt; Kwartier-tegoed = extra los bovenop.
  aiTutorCallsPerDay: 3,
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
  // 22 sep 2026 (Mark): Pro voor bijlesdocenten GESCHRAPT uit de etalage (0 klanten).
  // De twee constanten blijven staan voor de paywall-infra, maar worden nergens meer getoond.
  teacher_monthly: { price: 6.95, currency: "EUR", interval: "maand", label: "(niet aangeboden) Pro bijlesdocent — per maand" },
  teacher_yearly: { price: 59, currency: "EUR", interval: "jaar", label: "(niet aangeboden) Pro bijlesdocent — per jaar" },
  // Schoollicentie: prijs OP AANVRAAG, komt uit de eerste schoolgesprekken (was €99/klas).
  teacher_school: { price: null, currency: "EUR", interval: "school/jaar", label: "Schoollicentie — op aanvraag" },
  // Partner: gemeente of stichting koopt het Familie-pakket PER GEZIN (tot 3 kinderen),
  // niet per kind — zelfde eenheid als thuis (Mark 22 sep 2026: "klinkt ook beter").
  // Staffel: 10-99 gezinnen €34,50 · 100-249 €24,95 · 250+ in overleg; minimaal 10;
  // codes verlopen niet. Bron docs/GEMEENTE-BETAALT-PLAN.md. Prijs staat op zichzelf —
  // geen vergelijking met andere aanbieders in copy.
  partner_gezin: { price: 34.5, currency: "EUR", interval: "gezin/jaar", label: "Partner (gemeente/stichting) — per gezin/jaar, 10-99 gezinnen" },
  partner_gezin_100: { price: 24.95, currency: "EUR", interval: "gezin/jaar", label: "Partner — per gezin/jaar vanaf 100 gezinnen" },
  partner_min_gezinnen: 10,
  kwartier_tegoed: { price: null, currency: "EUR", interval: "los", label: "Kwartier-tegoed — prijs per kwartier vóór lancering bekend" },
};
