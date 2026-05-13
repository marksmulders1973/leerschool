// Audit-1 (2026-05-13): Stripe-checkout-stub. NOG NIET ACTIEF.
//
// Tot Mark de paywall flipt (PAYWALL_ACTIVE=true + Stripe-env-vars):
// returnt 503 met instructie "abonnement nog niet beschikbaar".
//
// Hoe activeer je het:
// 1. Vercel env-vars zetten:
//    STRIPE_SECRET_KEY=sk_live_...
//    STRIPE_PUBLIC_KEY=pk_live_...
//    STRIPE_PRICE_ID_PARENT_MONTHLY=price_...
//    STRIPE_PRICE_ID_PARENT_YEARLY=price_...
//    STRIPE_PRICE_ID_EXAM=price_...
// 2. `npm i stripe` toevoegen aan dependencies.
// 3. De TODO-import + handler-body unblockken (zie onder).
// 4. Bouw bijbehorende `api/stripe-webhook.js` die `subscriptions`-tabel
//    update op `checkout.session.completed` + `customer.subscription.deleted`.
// 5. Test met Stripe test-keys → switch naar live.

import { guardRequest } from "./_guard.js";

export const config = { runtime: "edge", maxDuration: 15 };

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

// Feature-flag — match `src/subscription/config.js`.
// Bij elke change daar: hier dezelfde bool zetten OF migreer naar env-var.
const STRIPE_ACTIVE = process.env.STRIPE_ACTIVE === "true";

export default async function handler(req) {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const blocked = guardRequest(req);
  if (blocked) return blocked;

  if (!STRIPE_ACTIVE) {
    // Paywall nog niet live — friendlijk uitleggen.
    return json({
      error: "Abonnement is nog niet beschikbaar — Leerkwartier is gratis tot januari 2027. Schrijf je in op de wachtlijst via /abonnement.html.",
      waitlistUrl: "/abonnement.html#waitlist",
      goLiveDate: "2027-01-15",
    }, 503);
  }

  // ─── TODO: echte Stripe-flow bij activatie ─────────────────────────
  //
  // import Stripe from "stripe"; // npm i stripe
  // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  //
  // const { priceId, userId, successUrl, cancelUrl } = await req.json();
  // const PRICE_MAP = {
  //   parent_monthly: process.env.STRIPE_PRICE_ID_PARENT_MONTHLY,
  //   parent_yearly: process.env.STRIPE_PRICE_ID_PARENT_YEARLY,
  //   parent_exam_period: process.env.STRIPE_PRICE_ID_EXAM,
  // };
  // const session = await stripe.checkout.sessions.create({
  //   mode: priceId === "parent_exam_period" ? "payment" : "subscription",
  //   payment_method_types: ["card", "ideal"],
  //   line_items: [{ price: PRICE_MAP[priceId], quantity: 1 }],
  //   client_reference_id: userId,
  //   success_url: successUrl,
  //   cancel_url: cancelUrl,
  //   locale: "nl",
  // });
  // return json({ url: session.url });

  return json({ error: "Stripe-handler nog niet geïmplementeerd" }, 501);
}
