# Prijsplan Leerkwartier — drie lagen + tegoed

> Besloten door Mark op 2026-07-25 (vervangt "alleen per kwartier, geen
> abonnement" van 2026-06-06). Bron-van-waarheid voor prijs-copy in de app:
> `src/subscription/proPlan.js` (LAGEN). Richtprijzen — definitief vóór de
> Stripe-koppeling jan 2027.

## Het principe: de betaalvorm volgt de waardevorm

| Soort waarde | Voorbeeld | Betaalvorm |
|---|---|---|
| Doorlopend (je "hebt" het) | voortgang volgen, weekrapport, logo op toets | abonnement |
| Verbruik (het raakt op) | extra AI-bijles-tijd | kwartier-tegoed |
| Toegankelijkheid (merkbelofte) | oefenen, leerpaden, park | gratis |

Aanleiding (Mark): een leerkracht die een logo boven zijn toets wil, of een
ouder die voortgang volgt, koopt geen "kwartier" — die koopt doorlopende
toegang. Eén betaalvorm dekt niet alles.

## De lagen

### 1. Gratis (iedereen — de kern, verandert niet)
Oefenen, leerpaden, uitleg op 3 niveaus, echte examenvragen mét uitleg, park,
basis-AI-buddy, vraag van de dag. Merkbelofte: "gratis oefenen blijft gratis"
(gekwalificeerd, nooit "altijd alles gratis"). Dit is de acquisitiemotor.
Leerkrachten: leerpaden klaarzetten via deelcode blijft óók gratis (juf = ons
goedkoopste acquisitiekanaal).

### 2. Leerkwartier Familie — abonnement per gezín (niet per kind)
**Voor:** de bezorgde Doorstroomtoets-ouder (primaire ICP-koper).
**Richtprijs:** € 4,95/mnd of € 39/jaar per gezin. USP tegenover Squla
(~€ 11/mnd per kínd): één prijs voor het hele gezin.
**Inhoud:** ouder-dashboard (voortgang alle kinderen), weekrapport per mail,
examen-simulatie (tijdklok + eindrapport), Kwartierplan (diagnose →
stappenplan), onbeperkt oefenen.
**Waarom "Familie" en niet "Premium":** Premium signaleert duur/exclusief en
schuurt met het toegankelijkheids-merk (Leergeld, voedselbanken, Ooievaarspas).
"Familie" is warm, duidelijk, en draagt de per-gezin-USP in de naam.

### 3. Leerkwartier Pro — abonnement voor leerkrachten & bijlesdocenten
**Voor:** professionals — dáár is "Pro" de juiste taal (onderzoek 25 jul:
Pro werkt in professionele context, niet bij gezinnen).
**Richtprijs:** € 6,95/mnd of € 59/jaar; schoollicentie € 99/klas/jaar.
**Inhoud:** eigen (school)logo op toetsen en oefenbladen, onbeperkt toetsen
maken, klasrapportage + export. Leerpaden klaarzetten blijft gratis.

### 4. Kwartier-tegoed — los, geen abonnement
**Voor:** verbruik: extra AI-bijles-tijd bovenop de gratis basis. Ook voor
gezinnen die principieel geen abonnement willen (het oorspronkelijke
per-kwartier-instinct blijft zo bestaan als aanvulling).
**Vorm:** losse kwartieren/bundels, saldo altijd in beeld, op = op, geen
automatische verlenging. **Cadeaukaart-hoek:** opa & oma geven "een uurtje
leren" — mooi voor de decemberpiek (kerstpakketten-spoor).
**Prijs per kwartier:** vóór de lancering bepalen (o.a. op basis van gemeten
AI-kosten per kwartier gebruik — zie pro_feature_used-events).

### 5. Partner-codes = Familie-niveau gratis
Leergeld-, voedselbank- en bibliotheek-gezinnen krijgen via hun partner-code
het Familie-niveau gratis t/m de Doorstroomtoets 2027 (`partnerCode.js`,
status 'pro2027' — technische sleutelwaarde ongewijzigd).
Dit beantwoordt de open vraag "paywall-honorering partner-codes".

**⚖️ Uitzondering Ooievaarspas (bindend, 26 jul 2026):** in het getekende
"vriend van de Ooievaarspas"-formulier is aan de gemeente Den Haag toegezegd
dat pashouders het Familie-abonnement **blijvend** gratis krijgen — geen
einddatum, geen plekken-limiet (`partner_codes.max_uses` voor OOIEVAAR2027
staat op 1.000.000). `partnerFamilieTot()` in `partnerCode.js` geeft voor
OOIEVAAR*-codes `null` (blijvend) terug; `partnerGrant()` in
`useSubscription.js` honoreert dat bij een actieve paywall. **Pro
(leerkracht-tier) valt nadrukkelijk buiten deze toezegging** — alleen het
Familie-niveau is gratis. Niet inkorten zonder nieuwe afspraak met bureau
Ooievaarspas.

## Naamgebruik

- **Gratis / Familie / Pro / Kwartier-tegoed** — geen "Premium" in de hele app.
- Badge (`ProBadge.jsx`) toont per feature de juiste laag-naam.
- Tier-mapping DB (`subscriptions.tier`): familie = `parent_pro`,
  leerkracht = `teacher_pro` (technische waarden ongewijzigd).

## Wat er 2026-07-25 is aangepast

- `proPlan.js`: LAGEN toegevoegd, features per laag, model-copy herschreven.
- `ProBadge.jsx`: laag-naam in badge/labels.
- `ProPage.jsx`: hero + features per laag gegroepeerd + tegoed-uitleg.
- `constants.js` LAUNCH_PROMO_LONG, `config.js` PRICING (richtprijzen).
- `VriendenWerven.jsx`/`referral.js`: 5 vrienden = 6 mnd **Familie**.
- `ActieVoorwaarden.jsx`: prijs = Familie-jaar 2027 + 10 uur kwartier-tegoed
  (totale waarde onder € 100; was "Pro-jaar, onder € 449").
- `partnerCode.js`: garantie heet nu Familie-niveau.
- `public/abonnement.html`: vier kaarten (Gratis/Familie/Pro/tegoed) + wachtlijst-optie tegoed.

## Nog te doen (vóór lancering jan 2027)

- [ ] Definitieve prijzen vaststellen (incl. prijs per kwartier o.b.v. AI-kostenmeting).
- [ ] Stripe-koppeling: producten per laag + tegoed-bundels (zie CLAUDE.md paywall-stappen).
- [x] `useSubscription`: partner-status 'pro2027' → Familie-tier honoreren
  (gedaan 2026-07-26 via `partnerGrant()`, incl. blijvend-regel Ooievaarspas).
- [ ] Cadeaukaart-flow (kwartier-tegoed) — mikken op december-campagne.
- [ ] Wachtlijst mailen (upgrade_waitlist) met 30-dagen-gratis-aanbod.
