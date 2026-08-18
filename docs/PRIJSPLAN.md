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
basis-AI-buddy, vraag van de dag. **Óók gratis (expliciet, Mark-vraag 31 jul
"alles moet ergens onder vallen"):** echte VMBO-examens *inzien én downloaden
als PDF* (publiek examenblad.nl-materiaal — daar kún je geen geld voor vragen)
en de *printbare oefenbladen* (oefenpakket, leesladder, tafelbladen, dictees,
redactiebladen). Dat is bewust: het ís oefenen (alleen op papier) én het zijn
lead-magnets die e-mailadressen opleveren. Enige print-uitzondering: je eigen
(school)logo op die oefenbladen = Pro. Merkbelofte: "gratis oefenen blijft
gratis" (gekwalificeerd, nooit "altijd alles gratis"). Dit is de acquisitiemotor.
Leerkrachten: leerpaden klaarzetten via deelcode blijft óók gratis (juf = ons
goedkoopste acquisitiekanaal).

> **Subtiel verschil om te bewaken:** examens *oefenen/inzien* = gratis; de
> examen-*simulatie mét klok + eindrapport* = Familie. Gewoon leren blijft altijd
> gratis; je betaalt alleen voor het inzicht/rapport eromheen.

### 2. Leerkwartier Familie — abonnement per gezín (niet per kind)
**Voor:** de bezorgde Doorstroomtoets-ouder (primaire ICP-koper).
**Richtprijs (drie smaken, per gezin):** € 4,95/mnd · 🎟️ Seizoenspas € 24,95
éénmalig (t/m 31 juli 2027, zie §2b) · € 39/jaar. USP tegenover Squla
(~€ 11/mnd per kínd): één prijs voor het hele gezin.
**Inhoud:** ouder-dashboard (voortgang alle kinderen), weekrapport per mail,
examen-simulatie (tijdklok + eindrapport), Kwartierplan (diagnose →
stappenplan), onbeperkt oefenen.
**Waarom "Familie" en niet "Premium":** Premium signaleert duur/exclusief en
schuurt met het toegankelijkheids-merk (Leergeld, voedselbanken, Ooievaarspas).
"Familie" is warm, duidelijk, en draagt de per-gezin-USP in de naam.

### 2b. 🎟️ Seizoenspas — BESLOTEN (Mark, 9 aug 2026)

> **Keuzes 9 aug (na impact-overleg):** naam = **Seizoenspas** · variant
> **B € 24,95 "het hele toetsjaar"** (t/m 31 juli 2027) · **jaar-tier € 39
> blijft** als derde smaak.
> **Den Haag-check (9 aug): geen conflict.** In de mail aan Esther (3 aug)
> staan geen euro-bedragen; het getekende formulier vermeldt "€ 39/jaar" en
> juist dáárom blijft de jaar-tier bestaan — het formulier blijft kloppen,
> geen correctie naar de gemeente nodig. Pashouders houden blijvend gratis
> Familie (méér dan elke betaalde variant).
> **Bewust geaccepteerde consequenties:** (1) break-even verschuift van
> 11-28 naar grofweg 17-43 gezinnen/jaar als iedereen de pas kiest i.p.v.
> jaar — naar verwachting goedgemaakt door betere conversie (betaalvorm
> matcht koopbehoefte); (2) churn is ingebouwd (alle passen verlopen 31 juli)
> → e-maillijst + jaarlijkse verkoopkalender zijn draagconstructie; (3)
> "stopt vanzelf" is merkbelofte — nóóit stille verlenging bouwen. Stripe
> straks: eenmalige betaling + `subscriptions.valid_until = 2027-07-31`;
> elk schooljaar de nieuwe einddatum instellen.
> Uitgewerkt 9 aug in `proPlan.js`, `config.js` (PRICING) + `abonnement.html`.

**Het probleem dat dit oplost:** de koopbehoefte van de Familie-ouder leeft
van ~november tot de Doorstroomtoets (feb) en verdwijnt daarna (kind naar de
middelbare school). Een jaar-abo van €39 is in november onlogisch ("ik heb
maar 4 maanden nodig"), een maand-abo wordt na de toets opgezegd (~€15-20
omzet). De betaalvorm moet matchen met wat de ouder écht koopt: *dit
toetsjaar goed doorkomen.*

**Het voorstel — één vast bedrag, betaal één keer, stopt vanzelf:**

| Variant | Loopt tot | Richtprijs | Afweging |
|---|---|---|---|
| A "tot de toets" | t/m 12 feb 2027 | € 19,95 | goedkoopst, maar stopt abrupt midden in het schooljaar |
| **B "het hele toetsjaar"** ⭐ | t/m 31 juli 2027 | € 24,95 | aanrader: niet abrupt, ruimte voor broertje/zusje, mooiere belofte |

**Waarom dit bij het merk past (de stiekeme superkracht):** geen
auto-verlenging — de pas stopt gewoon vanzelf. Dat is precies het
tegenovergestelde van Squla-achtige abonnementen die stiekem doorlopen, en
sluit naadloos aan op de eerlijkheids-belofte (geen creditcard-valkuil).
Marketing-zin: *"Eén keer betalen, het hele toetsjaar geholpen — en hij
stopt vanzelf. Geen abonnement, geen kleine lettertjes."*

**Plek op de prijzenpagina (anker-opbouw, drie smaken Familie):**
1. Maand € 4,95 — flexibel, opzegbaar
2. **Seizoenspas — "meest gekozen"** (het anker in het midden)
3. Jaar € 39 — voor gezinnen met meerdere/jongere kinderen (goedkoopst op
   lange termijn; blijft bestaan als retentie-optie)

**Retentie na de pas (het churn-antwoord):** einde-pas-flow in maart/juli →
aanbod voor broertje/zusje (zit al in Familie: max 3 kinderen) en early-bird
voor groep-7-ouders ("volgend jaar is het jouw beurt — nu alvast rustig
beginnen"). Zo wordt seizoens-churn een jaarlijkse verkoop-kalender i.p.v.
verlies. NB: break-even-som (11-28 gezinnen) gaat dan uit van jaarlijkse
werving — e-maillijst is de motor.

**Keuzes Mark (9 aug 2026):**
- [x] Naam: **Seizoenspas** (ondertitel vangt de duur: "geldig het hele toetsjaar, t/m 31 juli 2027 — stopt vanzelf")
- [x] Variant **B** — richtprijs € 24,95, t/m 31 juli 2027
- [x] Jaar-tier € 39 **blijft** als derde smaak (matcht ook het getekende Ooievaarspas-formulier)

**⚠️ Kwartier-tegoed — twijfel (Mark 8 aug: "waarschijnlijk een slecht idee"):**
de AI-bijles wordt gratis al nauwelijks gebruikt (0 calls sinds 3 aug) — er
is geen bewezen vraag voor een verbruiks-product. Besluit-gate: **niet
bouwen in de Stripe-scope van jan 2027**; alleen heroverwegen als de
najaar-meting échte vraag laat zien. Cadeaukaart-flow idem on-hold.

### 3. Leerkwartier Pro — de school is de koper (herijkt 7 aug 2026)
**Mark-inzicht 7 aug:** een leerkracht in loondienst koopt vrijwel nooit privé
een abonnement voor het werk — zo werkt de hele NL-edtech-markt (Gynzy,
Junior Einstein, LessonUp verdienen aan schoollicenties). Pro is daarom
**school-first**, met de zzp-bijlesdocent als enige individuele koper.

**Drie rollen:**
1. **Leerkracht (loondienst) = gratis, gegarandeerd t/m 2031 (belofte schuift telkens op — nooit >5 jaar vooruit beloven)** — bewust, want de juf is
   ons acquisitiekanaal (1 juf = 25 gezinnen). Eigen account, leerpaden
   klaarzetten, deelcode, klas laten oefenen: gratis. Elke drempel voor een
   juf kost gezinnen.
2. **School = de Pro-koper.** Schoollicentie € 99/klas/jaar. Wat de school
   koopt (en de gratis juf mist): schooldashboard over álle groepen
   (directie/IB'er), meerdere leerkrachten onder één beheer (continuïteit —
   niet afhankelijk van één enthousiaste juf), school-logo op toetsen en
   oefenbladen, onbeperkt toetsen, klasrapportage + export, én de formele
   kant: **verwerkersovereenkomst (DPA), factuur-betaling en support**. NB:
   zodra een school leerlinggegevens structureel via ons laat lopen is een
   DPA wettelijk verplicht — de licentie is dus geen extraatje maar de
   voorwaarde om het als school te mógen gebruiken.
3. **Bijlesdocent/zzp = individueel Pro** — € 6,95/mnd of € 59/jaar. Die
   betaalt wél privé (aftrekbaar, verdient zichzelf in één lesuur terug).
   Framing in copy: "voor bijlesdocenten", niet "voor leerkrachten".

**🤝 Gezins-plekken thuis cadeau (Mark 15 aug 2026) — de verkoophaak.** Bij een
school-abonnement horen **5 Familie-plekken per klas** die de school thúís mag
weggeven aan **gezinnen die een steuntje kunnen gebruiken** (de gezinnen voor
wie de kosten of de thuis-begeleiding een drempel zijn — de school kent ze).
Waarom dit sterk is: gunfactor/kansengelijkheid (de school kan ouders iets
gévén), funnel (die gezinnen oefenen thuis → mond-tot-mond), retentie (bindt de
school) en een verhaal dat de school zelf naar ouders vertelt. **Rijdt op de
partner-code-rails** (§4-mechaniek: een school-code met `max_uses = N`, atomisch
geclaimd bij activatie, gehonoreerd door de paywall). **Inzage blijft gescheiden
(Mark-keuze 15 aug):** de **ouder** ziet de voortgang per kind (koppelcode); de
**school** blijft op **klasniveau** (toetsen/takenlijst) — géén individueel
thuisbeeld per kind. **Nu al inzetbaar** als relatiehaak bij scholen (handmatig
een Familie-code met 5 plekken per deal, zoals de voedselbank-codes); **bij de
paywall-lancering 2027** inbakken: code-batch automatisch aan het
school-abonnement + een "gezins-codes"-paneel in het schooldashboard. Schalen:
5 per klas-abonnement, meer voor een heel-school-abonnement. **Copy-regel:**
nooit "probleemgezin" op een publieke pagina — wél "gezinnen die een steuntje
kunnen gebruiken" (warm, niet-stigmatiserend).

**Vuistregel gratis↔betaald (bewaken bij elke nieuwe feature):** helpt het
één juf met één klas → gratis; helpt het de organisatie (overzicht over
klassen heen, beheer, compliance) → schoollicentie.

**Verkoop-route + kalender:** juf gebruikt gratis → juf-A4 "vraag het je
directeur" → school koopt op factuur. Scholen kopen in twee golven:
schooljaarstart (aug-okt) en voorjaar (voor het volgende schooljaar). Paywall
gaat ~jan 2027 aan → najaar 2026 = **gratis pilot-scholen** werven (kost
niets, levert gezinnen + referenties), voorjaar 2027 = eerste betaalde
licenties voor schooljaar 2027-2028. Eerste school-omzet realistisch: sep 2027.

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

## 6. Toegangs-keten na betaling + gezinscode (bouwplan, toegevoegd 10 aug 2026)

> Mark-vraag 10 aug: "hoe krijgen betalende gezinnen toegang tot waar ze recht
> op hebben?" Antwoord in één zin: **betaling → webhook schrijft één rij in
> `subscriptions` → `useSubscription` leest die rij → alle Familie-poortjes
> gaan open.** Het slot bestaat al (PaywallGate + FEATURE_GATES); dit is de
> betaal-schakel die het opendraait. Bouwen in de december-Stripe-scope.

### De keten (stap voor stap)

1. **Afrekenen = ingelogd.** Gratis oefenen blijft zonder account; kopen kan
   alleen met login (Google of e-mail). De betaling moet ergens aan vast
   kunnen — en het geeft de koper apparaat-onafhankelijkheid: nieuwe telefoon
   → inloggen → alles terug.
2. **Betaalknop → Stripe Checkout** (`api/checkout-session.js`, nu stub).
   Seizoenspas = mode `payment` (eenmalig, geen verlenging — merkbelofte);
   maand/jaar = mode `subscription`. `user_id` gaat mee als
   `client_reference_id`.
3. **Webhook = het moment van toegang** (`api/stripe-webhook.js`, te bouwen).
   Bij `checkout.session.completed`: upsert in `subscriptions` →
   (user_id, tier `parent_pro`, valid_until: Seizoenspas 2027-07-31 / jaar +1
   jaar / maand +1 mnd). Bij `customer.subscription.deleted` of refund: rij
   weg/aflopen. Geen handwerk.
4. **De app ziet het vanzelf:** `useSubscription` leest de rij bij login
   (cache 10 min). Success-pagina na Checkout ("het staat aan — zo koppel je
   je kinderen") + bevestigings-/factuurmail via de bestaande Resend-machine.
5. **Aflopen regelt zichzelf:** valid_until verstreken → poortjes dicht
   (zit al in de hook) → einde-pas-flow (maart/juli, zie §2b).

### Gezinscode — kinderen liften mee (de open ontwerp-keuze, nu vastgelegd)

Familie geldt per gezín (max 3 kinderen), maar kinderen oefenen vaak als gast
op een eigen tablet. Oplossing = **zelfde mechaniek als de bewezen
partner-code-flow** (`partnerCode.js`), maar dan gekoppeld aan het
ouder-abonnement:

- Na betaling toont het ouder-dashboard een **gezinscode** (kort, bv. 6
  tekens, + QR). Kind voert 'm één keer in (of scant) → dat apparaat lift mee
  op het abonnement.
- **DB:** tabel `family_devices` (owner_user_id, device_uid, naam, created_at)
  + RPC `claim_family_plek(code, uid)` naar het model van
  `claim_partner_plek` — claimt atomisch, cap **3 kind-apparaten** per
  abonnement. Ouder kan in het dashboard een apparaat loskoppelen (wissel bij
  nieuwe tablet).
- **Geldigheid volgt de eigenaar:** de RPC geeft de valid_until van de
  owner-rij terug; het kind-apparaat checkt dat (cache zoals partner-flow).
  Abonnement afgelopen of terugbetaald → kind-apparaten vallen automatisch
  terug op gratis. Geen aparte einddatum-administratie.
- **Meting:** events `family_code_toon` / `family_code_claim` / `family_vol`.
- **Copy-regel:** "gezinscode" in de UI (geen dev-jargon), uitleg in B1 op de
  success-pagina: "Geef deze code aan je kind — dan telt zijn oefenwerk mee
  in jouw overzicht."

Bijvangst: dezelfde koppeling voedt het ouder-dashboard/weekrapport
(`parent_child_links` — koppeling ontstaat op het natuurlijke moment i.p.v.
als losse vraag).

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
- [ ] **Toegangs-keten (§6, dec):** echte checkout + `api/stripe-webhook.js` + success-pagina + bevestigingsmail (Resend).
- [ ] **Gezinscode-flow (§6, dec):** `family_devices` + RPC `claim_family_plek` + code/QR in ouder-dashboard (cap 3 kind-apparaten).
- [ ] **Rechtsvorm = EENMANSZAAK (besloten Mark 9 aug 2026 — "ik wil er zelf
  aan verdienen"; vervangt de stichting-optie voor de betaalde kant).** Kalender:
  **okt** KvK-inschrijving (±€80) + KOR aanvragen (<€20k → geen btw; scholen
  feitelijk 21% goedkoper) + zakelijke rekening · **nov** algemene voorwaarden +
  herroepingsrecht (digitale levering: instemming directe levering in de
  bestel-flow) + factuur-sjabloon (KvK-nr, KOR-vermelding, nummering) · **dec**
  Stripe test-mode · **jan 2027** live. Niet in december pas starten. NB: grote
  charitatieve fondsen gaan hiermee op slot (bewust geaccepteerd, zie
  SUBSIDIE-PLAN); Esther (OP) t.z.t. informeren over het KvK-nummer.
- [ ] **School-koop-route bouwen:** betalen op factuur (scholen hebben geen
  creditcard), verwerkersovereenkomst-sjabloon (DPA — staat op de
  privacy-todo), juf-A4 "vraag het je directeur".
- [ ] Najaar 2026: 2-3 gratis pilot-scholen werven (referenties voor voorjaar 2027).
- [x] `useSubscription`: partner-status 'pro2027' → Familie-tier honoreren
  (gedaan 2026-07-26 via `partnerGrant()`, incl. blijvend-regel Ooievaarspas).
- [ ] ~~Cadeaukaart-flow (kwartier-tegoed)~~ **ON-HOLD 8 aug** (tegoed-twijfel, zie §2b) — alleen terug bij bewezen vraag.
- [x] **Seizoenspas-keuzes door Mark** (9 aug: Seizoenspas / B € 24,95 / jaar-tier blijft — zie §2b); uitgewerkt in proPlan.js + config.js + abonnement.html.
- [ ] Seizoenspas einde-pas-flow (maart/juli 2027: broertje/zusje + groep-7 early-bird) — bouwen richting lancering.
- [ ] Wachtlijst mailen (upgrade_waitlist) met 30-dagen-gratis-aanbod.
