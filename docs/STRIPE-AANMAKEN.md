# 💳 Stripe aanmaken — alle gegevens op één plek (29 sep 2026)

> ✅ **LIVE (30 sep 2026 avond):** account kan betalen + uitbetalen. Live-sleutel = beperkte sleutel "leerkwartier-app (Vercel)" (rk_live, géén uitbetalingen/geld-weg-rechten). Live producten: Familie jaar €39, verlenging €31, Seizoenspas €39 (placeholder), proefbetaling €1 (plan test1, 30 dagen). Live webhook we_1ULQR5… → zelfde URL. Hosting-env staat op live. Managed Payments staat per betaling UIT (managed_payments[enabled]=false) → Leerkwartier blijft zelf verkoper (KOR). Sandbox-keten getest 30 sep: betaald → webhook → Familie tot 30-09-2027 → factuur. **STRIPE_ACTIVE nog uit** → betaalknop in de app blijft dicht tot Mark 'm aanzet.
>
> ✅ **Deel 1 klaar (30 sep 2026 avond):** account "leerkwartier" (hallo@leerkwartier.app, NL) aangemaakt door Mark; sandbox (testmodus) actief; "Create subscriptions" bewust uit. Claude heeft via de Stripe-API in de sandbox aangemaakt: product "Leerkwartier Familie — 1 jaar" met prijzen **€39** (jaar) en **€31** (verlenging), product "Leerkwartier Seizoenspas" met placeholder-prijs **€39 (nog te bevestigen)**, en een webhook naar `https://leerkwartier.app/api/checkout-session?action=webhook` (checkout.session.completed, async_payment_succeeded, charge.refunded). Hosting-env (production): STRIPE_SECRET_KEY (sk_test), STRIPE_PRICE_JAAR, STRIPE_PRICE_JAAR_VERLENG, STRIPE_PRICE_SEIZOENSPAS, STRIPE_WEBHOOK_SECRET. **STRIPE_ACTIVE staat NIET aan** → betaalknop blijft uit.
> ⏳ **Deel 2 (Mark):** "Verify your business" in Stripe: ID + geboortedatum + adres + IBAN (Knab nog in behandeling). Daarna live-sleutels → Claude vervangt de env-vars.

> Voor het moment dat Mark het Stripe-account aanmaakt (gepland 5–12 okt, mag eerder).
> Alles wat Stripe vraagt staat hieronder, behalve persoonsgegevens (BSN, ID-scan, geboortedatum,
> privéadres): die vult Mark zelf in, die schrijven we nergens op. Techniek: docs/BETALING-PLAN.md.

## 1. Bedrijf
| veld | waarde |
|---|---|
| Rechtsvorm | eenmanszaak |
| Handelsnaam | Leerkwartier |
| KvK-nummer | 42176244 (ingeschreven 28 sep 2026, startdatum 1 oktober 2026) |
| Btw-id | nog niet ontvangen (komt per post van de Belastingdienst) → daarna KOR-melding ingang 1-1-2027 |
| Website | https://leerkwartier.app |
| Omschrijving (Stripe "product description") | Online oefen-app voor basisschoolkinderen (Doorstroomtoets, taal, rekenen). Jaartoegang voor gezinnen (Familie), eenmalige betaling, geen abonnement. |
| Branche / MCC | Educational services (8299) |
| E-mail account + klantcontact | hallo@leerkwartier.app |
| Telefoon | 06-84581000 |
| Vestigingsadres | zoals in het KvK-register (Mark vult in) |

## 2. Bank (uitbetalingen)
| veld | waarde |
|---|---|
| Bank | Knab, zakelijke betaalrekening (zzp/eenmanszaak) |
| Aangevraagd / open | 29 sep 2026 14:54 aangevraagd; 15:03 digitale betaalpas aangemaakt → rekening open |
| Rekening | eindigt op **009** — volledig IBAN: ☐ door Mark uit de Knab-app halen en hier invullen: `NL__ KNAB ____ ____ __` |
| Tenaamstelling | zoals op je ID (Stripe vergelijkt met de KvK) |
| E-mail bij Knab | hallo@leerkwartier.app · roepnaam Mark |
| Kosten | €0 eerste 12 maanden (+€100 starterstegoed), daarna €7/mnd |

## 3. Wat Claude daarna nodig heeft (mag gewoon in de chat)
- Test-sleutels: `sk_test_…` en `pk_test_…` (Dashboard → Developers → API keys, testmodus aan)
- Later, bij lancering (nov): live-sleutels + webhook-secret
- Prijs-id's maakt Claude zelf aan in het dashboard of via de API zodra de sleutels er zijn:
  - Familie jaar €39 (eenmalig, 365 dagen) → `STRIPE_PRICE_JAAR`
  - Verlenging €31 (eenmalig, 365 dagen) → `STRIPE_PRICE_JAAR_VERLENG`
  - Seizoenspas (december-voorverkoop) → `STRIPE_PRICE_SEIZOENSPAS`
- Vercel env-vars (project leerschoolnew): `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, de drie prijs-id's, `STRIPE_ACTIVE` (blijft `false` tot de lancering)
- Webhook-endpoint: `https://leerkwartier.app/api/checkout-session?action=webhook`

## 4. Keuzes die al vaststaan (niet opnieuw beslissen)
- Eenmalige betaling ("payment"), géén abonnement, nooit stil verlengen; verlengen na mail 30/7 dagen vooraf (€31).
- Prijs is één bedrag inclusief; met KOR geen btw op de factuur (regel "geen btw, KOR").
- Factuur per mail bij elke betaling (Resend), nummering per jaar.
- Hosting naar Vercel Pro vóór de eerste echte betaling.
- Test eerst de hele keten met PRO2027 en testkaart 4242 4242 4242 4242 + iDEAL-test.

## 5. Stappen op de dag zelf
1. stripe.com → account met hallo@leerkwartier.app, land Nederland.
2. Bedrijfsgegevens uit §1; identiteit (ID-scan, BSN) door Mark zelf.
3. Uitbetaling: IBAN uit §2.
4. Testmodus aan → sleutels aan Claude → Claude zet prijzen + env-vars + test.
5. Verificatie afwachten (uren tot 2 dagen). Live-sleutels pas in november.
