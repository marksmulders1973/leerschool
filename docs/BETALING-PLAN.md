# 💳 Betaal-spoor — Stripe, facturen, structuur (9 sep 2026)

Mark: "denk vast na over de betaalstructuur (Stripe) en facturen; bouwen kan al, live zetten niet."
Status-blok hiervan hoort in élk dagrapport (zie DAGRAPPORT-KOMPAS.md § 💳).

## 1. Wat er verkocht wordt (bron: PRIJSPLAN.md, Mark 9 aug 2026)
| Product | Prijs | Stripe-vorm | Geldig |
|---|---|---|---|
| Familie **Seizoenspas** (anker) | € 24,95 éénmalig | Checkout `mode=payment` + `invoice_creation` | t/m 31 juli 2027, stopt vanzelf, géén verlenging |
| Familie maand | € 4,95 p/mnd | Checkout `mode=subscription` | tot opzegging (Customer Portal) |
| Familie jaar | € 39 p/jaar | Checkout `mode=subscription` | tot opzegging |
| Pro school | € 99 per klas p/jaar | **Factuur** (Stripe Invoicing vanuit dashboard, 30 dagen) | schooljaar |
| Pro bijlesdocent | ± € 6,95 p/mnd / € 59 p/jaar | Checkout subscription (later, tier `teacher_pro`) | tot opzegging |
| Partner-codes (Ooievaarspas e.a.) | gratis | géén Stripe: `mijn_partner_recht` (bestaand) | 31-12-2027 / blijvend |

Per gezin, niet per kind. Betaalmethoden: **iDEAL + kaart** (NL-first). Promotiecodes aan (cadeau-/kortingscodes voor december).

## 2. Techniek (gebouwd, inactief)
- `api/checkout-session.js` — één edge-functie, drie acties (`?action=checkout|portal|webhook`). Geen npm-pakket: Stripe REST via fetch, webhook-handtekening via Web Crypto (HMAC-SHA256, 5-minuten-venster, constant-time vergelijking). Blijft 503 zolang `STRIPE_ACTIVE` niet `true` is.
- Supabase (migratie `betaling_stripe_voorbereiding`, 9 sep): `subscriptions` + kolommen `plan, status, stripe_customer_id, stripe_subscription_id, cancel_at, bron`, unieke `user_id`; nieuwe tabel **`payments`** (idempotent op `stripe_event_id`, bewaart `invoice_url`/`invoice_pdf`/`receipt_url`). RLS: gebruiker leest eigen rijen; schrijven alleen service-role.
- Webhook-events → wat er gebeurt:
  - `checkout.session.completed` → payments-rij; Seizoenspas: `tier=parent_pro, valid_until=31-7-2027`; abonnement: klant/sub-id vastleggen (geldigheid volgt via invoice).
  - `invoice.paid` → payments-rij mét factuur-URL; `valid_until` = einde betaalde periode + 3 dagen speling.
  - `customer.subscription.updated` → status/cancel_at bijwerken.
  - `customer.subscription.deleted` → status `canceled`; recht loopt door tot `valid_until`.
  - `charge.refunded` → negatieve payments-rij; bij volledige terugbetaling recht vervallen.
- `useSubscription.js` leest straks `tier` + `valid_until` (bestaand) — partner-recht blijft voorgaan. `PAYWALL_ACTIVE` blijft `false` tot januari 2027.

## 3. Facturen (Mark-eis 28 aug 2026: "er moet een factuur naar de klant kunnen")
- **Abonnementen:** Stripe Billing maakt automatisch per periode een factuur (PDF + gehoste pagina), mailt die, en de klant ziet ze in het Customer Portal. Wij bewaren `hosted_invoice_url` + `invoice_pdf` in `payments`.
- **Seizoenspas (eenmalig):** `invoice_creation.enabled=true` in Checkout → óók een echte factuur, geen alleen-bonnetje.
- **Factuur-eisen NL eenmanszaak** (in Stripe → Settings → Business / Invoice template invullen ná KvK): handelsnaam Leerkwartier, adres, **KvK-nummer**, doorlopende nummering (Stripe: prefix `LK-`), datum, omschrijving, bedrag. **KOR** → geen btw op de factuur en de voettekst: *"Vrijgesteld van omzetbelasting op grond van de kleineondernemersregeling (KOR)."* Geen btw-id nodig op de factuur zolang KOR geldt.
- **Scholen:** factuur uit het Stripe-dashboard (Invoicing) met 30 dagen betaaltermijn en verwijzing naar de licentie (klas, schooljaar); betaling via iDEAL-link of overschrijving; na betaling handmatig `subscriptions` op `teacher_pro` (later: automatisch via `invoice.paid` met metadata `schoolId`).
- **Klant-kant:** `/abonnement.html?betaald=1` → "Gelukt! De factuur staat in je mail." Later: blok "Mijn abonnement" op /ouder met knop naar het Customer Portal (facturen, kaart wijzigen, opzeggen).

## 4. Wat Mark zelf moet doen (volgorde)
1. **ma 28 sep** KvK (11:45 Utrecht) → KvK-nummer. Meteen **KOR** aanvragen (~4 weken vóór ingang).
2. **29 sep – 5 okt** zakelijke rekening (Knab).
3. **5 – 12 okt** Stripe-account op hallo@leerkwartier.app: bedrijfsgegevens, KvK, IBAN Knab, identiteit; iDEAL aanzetten; Invoice template (KvK + KOR-voettekst, prefix LK-); Customer Portal aan (opzeggen + facturen); producten/prijzen aanmaken (3 stuks) → price-id's.
4. Vercel env-vars: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_SEIZOENSPAS`, `STRIPE_PRICE_MAAND`, `STRIPE_PRICE_JAAR`, `STRIPE_ACTIVE=true` (pas bij lancering), webhook-endpoint `https://leerkwartier.app/api/checkout-session?action=webhook`.
5. **Test-modus kan eerder:** een Stripe-account in test-modus heeft geen KvK nodig → Claude kan de hele keten (checkout → webhook → subscriptions/payments → factuurmail) doortesten met testkaart 4242… en iDEAL-test zodra Mark het account heeft aangemaakt en de test-keys in Vercel staan (`STRIPE_ACTIVE` blijft dan uit op productie; test via preview-deploy of aparte env).
6. **nov** stil live met PRO2027 (eigen testcode) → 1 echte testbetaling → factuur controleren → dec cadeau-codes → **jan 2027** paywall aan.

## 5. Open beslissingen
- Seizoenspas-einddatum hard `31-7-2027` (env `SEIZOENSPAS_EIND`) — per toetsjaar bijzetten.
- Terugbetaalbeleid: 14 dagen bedenktijd (wettelijk bij digitale diensten alleen als nog niet gestart) → voorstel: altijd binnen 14 dagen terug zonder vragen.
- Pro bijlesdocent: aparte prijzen of later.
- Cadeaukaart / Kwartier-tegoed: on hold (PRIJSPLAN).

## 6. Dagrapport-blok (vast) — "💳 Betaal-spoor"
☐ KvK (28 sep) ☐ KOR ☐ Knab ☐ Stripe-account (test) ☐ test-keten groen ☐ Invoice-template KvK+KOR ☐ producten/prijzen ☐ Stripe live-verificatie ☐ webhook live ☐ 1e testbetaling PRO2027 ☐ factuur ontvangen ☐ paywall aan (jan 2027)
Gebouwd 9 sep: ✅ api (3 acties) ✅ DB (subscriptions-kolommen + payments) ✅ plan/facturen-eisen.
