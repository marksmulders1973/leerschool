// 💳 Betalen via Stripe — gebouwd 9 sep 2026, NOG NIET ACTIEF (Mark: "bouwen kan
// al, live zetten niet"). Eén functie voor drie dingen (Hobby-limiet op het
// aantal api-bestanden), gekozen via ?action=:
//   POST ?action=checkout  { plan, userId, email }  → Stripe Checkout-URL
//   POST ?action=portal    { userId }               → Stripe Customer Portal-URL (opzeggen, kaart, facturen)
//   POST ?action=webhook   (Stripe → ons)           → subscriptions + payments bijwerken
//
// Geen npm-pakket: Stripe's REST-API via fetch + handtekening-check via Web
// Crypto, zodat dit op de edge-runtime draait zonder extra dependency.
//
// Plannen (docs/PRIJSPLAN.md, Mark 9 aug 2026): Familie Seizoenspas € 24,95
// éénmalig (geldig t/m 31 juli van het toetsjaar, stopt vanzelf), Familie
// € 4,95 p/mnd, Familie € 39 p/jaar. School € 99/klas/jaar gaat via factuur.
//
// Facturen (Mark-eis 28 aug 2026): élke betaling levert een echte factuur op.
// Abonnementen: Stripe maakt per periode een factuur. Eénmalig (Seizoenspas):
// invoice_creation aan, zodat er ook dan een factuur met KvK/KOR-vermelding komt.
// Bedrijfsgegevens + factuurvoettekst ("Vrijgesteld van btw, kleineondernemers-
// regeling") staan in het Stripe-dashboard (Settings → Invoice template).
//
// Activeren (pas na KvK 28 sep + Stripe-account + Knab-rekening, zie
// docs/BETALING-PLAN.md): env-vars zetten en STRIPE_ACTIVE=true.

import { guardRequest } from "./_guard.js";

export const config = { runtime: "edge", maxDuration: 20 };

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });

const STRIPE_ACTIVE = process.env.STRIPE_ACTIVE === "true";
const SITE = process.env.SITE_URL || "https://leerkwartier.app";
const SEIZOEN_EIND = process.env.SEIZOENSPAS_EIND || "2027-07-31T21:59:59Z"; // t/m 31 juli (NL zomertijd)

const PLANNEN = {
  seizoenspas: { mode: "payment", price: () => process.env.STRIPE_PRICE_SEIZOENSPAS, tier: "parent_pro" },
  maand:       { mode: "subscription", price: () => process.env.STRIPE_PRICE_MAAND, tier: "parent_pro" },
  jaar:        { mode: "subscription", price: () => process.env.STRIPE_PRICE_JAAR, tier: "parent_pro" },
};

// ── Stripe REST (form-encoded) ──
function form(obj, prefix = "") {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    const key = prefix ? `${prefix}[${k}]` : k;
    if (typeof v === "object" && !Array.isArray(v)) out.push(form(v, key));
    else if (Array.isArray(v)) v.forEach((x, i) => out.push(typeof x === "object" ? form(x, `${key}[${i}]`) : `${encodeURIComponent(`${key}[${i}]`)}=${encodeURIComponent(x)}`));
    else out.push(`${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
  }
  return out.filter(Boolean).join("&");
}
async function stripe(path, body = null, method = "POST") {
  const r = await fetch(`https://api.stripe.com/v1/${path}`, {
    method,
    headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: body ? form(body) : undefined,
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data?.error?.message || `stripe ${r.status}`);
  return data;
}

// ── Supabase (service-role, alleen server) ──
function sb() {
  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) throw new Error("supabase-config-missing");
  const h = { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" };
  return {
    async upsertSubscription(row) {
      const r = await fetch(`${base}/rest/v1/subscriptions?on_conflict=user_id`, { method: "POST", headers: { ...h, Prefer: "resolution=merge-duplicates,return=minimal" }, body: JSON.stringify({ ...row, updated_at: new Date().toISOString() }) });
      if (!r.ok) throw new Error(`subscriptions ${r.status}: ${await r.text()}`);
    },
    async payment(row) {
      const r = await fetch(`${base}/rest/v1/payments`, { method: "POST", headers: { ...h, Prefer: "return=minimal" }, body: JSON.stringify(row) });
      if (r.status === 409) return false; // stripe_event_id al gezien → idempotent
      if (!r.ok) throw new Error(`payments ${r.status}: ${await r.text()}`);
      return true;
    },
    async subscriptionByUser(userId) {
      const r = await fetch(`${base}/rest/v1/subscriptions?user_id=eq.${encodeURIComponent(userId)}&select=stripe_customer_id,plan,status,valid_until`, { headers: h });
      const rows = r.ok ? await r.json() : [];
      return rows[0] || null;
    },
    async userByCustomer(customerId) {
      const r = await fetch(`${base}/rest/v1/subscriptions?stripe_customer_id=eq.${encodeURIComponent(customerId)}&select=user_id`, { headers: h });
      const rows = r.ok ? await r.json() : [];
      return rows[0]?.user_id || null;
    },
  };
}

// ── Webhook-handtekening (Stripe-Signature: t=…,v1=…) via Web Crypto ──
async function checkHandtekening(rawBody, header, secret) {
  const delen = Object.fromEntries(String(header || "").split(",").map((p) => p.split("=")));
  const t = delen.t, v1 = delen.v1;
  if (!t || !v1) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > 300) return false; // ouder dan 5 min
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${t}.${rawBody}`));
  const hex = [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
  if (hex.length !== v1.length) return false;
  let diff = 0; for (let i = 0; i < hex.length; i++) diff |= hex.charCodeAt(i) ^ v1.charCodeAt(i);
  return diff === 0;
}

export default async function handler(req) {
  const url = new URL(req.url);
  const action = url.searchParams.get("action") || "checkout";
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  // De webhook komt van Stripe, niet van een browser: geen bezoekers-guard.
  if (action !== "webhook") { const blocked = guardRequest(req); if (blocked) return blocked; }

  if (!STRIPE_ACTIVE) {
    return json({
      error: "Betalen is nog niet beschikbaar. De basis blijft gratis (gegarandeerd t/m 2031); het Familie-pakket komt rond januari 2027. Schrijf je in op de wachtlijst via /abonnement.html.",
      waitlistUrl: "/abonnement.html#waitlist",
      goLiveDate: "2027-01-15",
    }, 503);
  }

  try {
    if (action === "checkout") {
      const { plan, userId, email } = await req.json();
      const p = PLANNEN[plan];
      if (!p || !p.price()) return json({ error: "onbekend plan" }, 400);
      if (!userId) return json({ error: "userId ontbreekt" }, 400);
      const db = sb();
      const bestaand = await db.subscriptionByUser(userId);
      const session = await stripe("checkout/sessions", {
        mode: p.mode,
        line_items: [{ price: p.price(), quantity: 1 }],
        success_url: `${SITE}/abonnement.html?betaald=1&plan=${plan}`,
        cancel_url: `${SITE}/abonnement.html?geannuleerd=1`,
        client_reference_id: userId,
        customer: bestaand?.stripe_customer_id || undefined,
        customer_email: bestaand?.stripe_customer_id ? undefined : (email || undefined),
        customer_creation: p.mode === "payment" && !bestaand?.stripe_customer_id ? "always" : undefined,
        locale: "nl",
        payment_method_types: ["ideal", "card"],
        allow_promotion_codes: true,
        // Factuur óók bij een eenmalige betaling (Mark-eis 28 aug 2026).
        invoice_creation: p.mode === "payment" ? { enabled: true } : undefined,
        metadata: { userId, plan },
        subscription_data: p.mode === "subscription" ? { metadata: { userId, plan } } : undefined,
      });
      return json({ url: session.url });
    }

    if (action === "portal") {
      const { userId } = await req.json();
      const db = sb();
      const sub = userId ? await db.subscriptionByUser(userId) : null;
      if (!sub?.stripe_customer_id) return json({ error: "geen betaald abonnement gevonden" }, 404);
      const portal = await stripe("billing_portal/sessions", { customer: sub.stripe_customer_id, return_url: `${SITE}/ouder`, locale: "nl" });
      return json({ url: portal.url });
    }

    if (action === "webhook") {
      const raw = await req.text();
      const ok = await checkHandtekening(raw, req.headers.get("stripe-signature"), process.env.STRIPE_WEBHOOK_SECRET || "");
      if (!ok) return json({ error: "bad signature" }, 400);
      const event = JSON.parse(raw);
      const db = sb();
      const obj = event.data?.object || {};

      if (event.type === "checkout.session.completed") {
        const userId = obj.client_reference_id || obj.metadata?.userId;
        const plan = obj.metadata?.plan;
        const p = PLANNEN[plan] || PLANNEN.seizoenspas;
        const validUntil = p.mode === "payment" ? SEIZOEN_EIND : null; // abonnementen: via invoice.paid
        const nieuw = await db.payment({ user_id: userId, stripe_event_id: event.id, stripe_customer_id: obj.customer, stripe_payment_intent: obj.payment_intent, stripe_invoice_id: obj.invoice, type: "checkout", plan, amount_cents: obj.amount_total, currency: obj.currency, email: obj.customer_details?.email, raw: { session: obj.id } });
        if (nieuw && userId) await db.upsertSubscription({ user_id: userId, tier: p.tier, plan, status: "active", bron: "stripe", stripe_customer_id: obj.customer, stripe_subscription_id: obj.subscription || null, valid_until: validUntil });
      }

      if (event.type === "invoice.paid") {
        // abonnement: geldig tot het eind van de betaalde periode (+ 3 dagen speling)
        const userId = obj.subscription_details?.metadata?.userId || (await db.userByCustomer(obj.customer));
        const eind = obj.lines?.data?.[0]?.period?.end;
        const validUntil = eind ? new Date(eind * 1000 + 3 * 86400000).toISOString() : null;
        const nieuw = await db.payment({ user_id: userId, stripe_event_id: event.id, stripe_customer_id: obj.customer, stripe_invoice_id: obj.id, type: "invoice", plan: obj.subscription_details?.metadata?.plan, amount_cents: obj.amount_paid, currency: obj.currency, invoice_url: obj.hosted_invoice_url, invoice_pdf: obj.invoice_pdf, email: obj.customer_email, raw: { number: obj.number } });
        if (nieuw && userId && validUntil) await db.upsertSubscription({ user_id: userId, tier: "parent_pro", status: "active", bron: "stripe", stripe_customer_id: obj.customer, stripe_subscription_id: obj.subscription, valid_until: validUntil });
      }

      if (event.type === "customer.subscription.updated") {
        const userId = obj.metadata?.userId || (await db.userByCustomer(obj.customer));
        if (userId) await db.upsertSubscription({ user_id: userId, status: obj.status === "active" || obj.status === "trialing" ? "active" : obj.status, cancel_at: obj.cancel_at ? new Date(obj.cancel_at * 1000).toISOString() : null, stripe_customer_id: obj.customer, stripe_subscription_id: obj.id });
      }

      if (event.type === "customer.subscription.deleted") {
        const userId = obj.metadata?.userId || (await db.userByCustomer(obj.customer));
        await db.payment({ user_id: userId, stripe_event_id: event.id, stripe_customer_id: obj.customer, type: "subscription_deleted", plan: obj.metadata?.plan, raw: { subscription: obj.id } });
        // valid_until blijft staan (al betaald), status wordt canceled → na valid_until vervalt het recht
        if (userId) await db.upsertSubscription({ user_id: userId, status: "canceled", stripe_customer_id: obj.customer, stripe_subscription_id: obj.id });
      }

      if (event.type === "charge.refunded") {
        const userId = await db.userByCustomer(obj.customer);
        await db.payment({ user_id: userId, stripe_event_id: event.id, stripe_customer_id: obj.customer, stripe_payment_intent: obj.payment_intent, type: "refund", amount_cents: -(obj.amount_refunded || 0), currency: obj.currency, receipt_url: obj.receipt_url, raw: { charge: obj.id } });
        if (userId && obj.refunded) await db.upsertSubscription({ user_id: userId, tier: "free", status: "expired", valid_until: new Date().toISOString() });
      }

      return json({ received: true });
    }

    return json({ error: "onbekende action" }, 400);
  } catch (e) {
    return json({ error: String(e?.message || e) }, 500);
  }
}
