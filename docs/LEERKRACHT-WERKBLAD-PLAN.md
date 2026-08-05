# Leerkracht-kanaal — bouwplan "één vraag → QR + code + papier"

> Mark + Claude, 5 aug 2026. Idee: Mark ("QR goed, maar direct een printbare vorm erbij;
> je stelt de vraag: waar wilt u een leerpad over?"). Timing: klaar vóór schoolstart
> (~18 aug–1 sep), meeliften op LOWAN-golf 1 sep.

## Waarom (in 3 zinnen)

Eén overtuigde juf = 25 kinderen = 25 gezinnen; dit is het enige kanaal waar één "ja"
direct tientallen gebruikers oplevert. De juf krijgt uit één vraag ("Waar wil je een
oefenpad over?") drie uitgangen: **deelcode + QR** (digitaal, bestaat al) én een
**printbaar werkblad** (nieuw). Op elk werkblad staat de QR — het kind neemt het papier
mee naar huis, de ouder scant → **elk geprint werkblad is een gratis flyer die het kind
zelf thuisbezorgt**.

## Wat er al ligt (hergebruiken, niet opnieuw bouwen)

| Bouwsteen | Waar | Hergebruik |
|---|---|---|
| Zoek pad → deelcode-flow | `src/components/TakenlijstMaker.jsx` (pathManifest-zoek, `generateCode()`, quizzes-tabel, max 8 tekens) | de "één vraag"-voordeur is in essentie dit zoekveld |
| Checks → print-items + antwoordblad + `window.print` (€0, geen server/AI) | `src/features/oefenboekje/OefenboekjePagina.jsx` (`bouwItems`, `schoon`, seeded shuffle, `PrintKnoppen`) | ~90% van de werkblad-generator |
| Eerlijke item-keuze regels | `src/features/oefenboekje/opMaat.js` (geen `examen-*`-paden printen) | zelfde regel voor werkbladen |
| Print-hub + statische printpagina's | `src/components/PrintHubPage.jsx`, `/oefenpakket` | vindplek + stijlreferentie |
| Paywall-haakjes | `src/subscription/config.js` (`FEATURE_GATES`), `PaywallGate.jsx` | Pro-gate, nu UIT |
| Teacher-flag | `src/shared/featureFlags.js` → `teacherFeaturesVisibleForUser` | zichtbaarheid regelen |

**Ontbreekt:** QR-generatie in de app (flyer-QR's zijn statisch drukwerk). Voorstel:
npm-pakket `qrcode` (klein, MIT, client-side, geen calls). ⚠️ Nieuwe dependency =
Mark-akkoord nodig — **go/no-go-vraag bij Fase 1**. Fallback zonder dependency:
werkblad toont alleen code + korte URL (`leerkwartier.app` + code); QR kan later.

## De flow (eindbeeld)

```
Juf → /leerkracht (voordeur)
  "Waar wil je een oefenpad over?"  [zoekveld, bv. "breuken"]
      ↓ kiest pad uit resultaten (pathManifest)
  Resultaatscherm met 3 uitgangen:
   1. 🔢 Deelcode + QR  → klas oefent digitaal zonder account (bestaande flow)
   2. 🖨️ Werkblad (A4)  → 12 opgaven uit de pad-checks + QR/code onderaan
   3. ✅ Antwoordblad    → apart vel voor de juf
  (+ knop "meerdere onderwerpen? maak een takenlijst" → TakenlijstMaker)
```

## Fasen

### Fase 1 — Werkblad-generator (kern, ~1 sessie)
- `src/features/werkblad/WerkbladPagina.jsx` + `werkblad.js`: pad-id in → A4-printview.
  Kopieer het `bouwItems`/antwoordblad/`PrintKnoppen`-patroon uit OefenboekjePagina;
  verschil: geen mastery/historie, gewoon 1 gekozen pad, 12 opgaven.
- **Sjabloon-eisen (vast):**
  - Kop: Leerkwartier-logo + padtitel + "Deel 1 — ±15 minuten" (handelsmerk-chunks;
    >12 checks → werkblad 2 met "Deel 2").
  - Naam + datum-invulregel (klasgebruik).
  - Opgaven met A/B/C/D-hokjes, seeded geschud (herprint = zelfde blad).
  - Voet op ÉLK vel: QR + deelcode + "Thuis verder oefenen? leerkwartier.app — gratis,
    geen account nodig" → dit is de flyer-werking. B1-taal, "ouder of verzorger"-regel.
  - Sober: geen AI-art, geen antwoord-verklap in plaatjes, geen dev-jargon.
  - Antwoordblad apart (eigen printknop), met korte uitleg per opgave.
- Route + lazy-load in `App.jsx`/`routes.js`; knop op TeacherHome + op het
  deelcode-klaar-scherm van TakenlijstMaker ("print er een werkblad bij").
- Event-tracking: `werkblad_print` (props: pathId, bron=leerkracht).
- Self-test: build groen + Playwright-printvoorbeeld van 2 paden (rekenen + spelling).

### Fase 2 — Voordeur /leerkracht (~1 sessie)
- In-app: `LeerkrachtStart.jsx` — één vraag ("Waar wil je een oefenpad over?"),
  zoek zoals TakenlijstMaker, resultaat = de 3 uitgangen hierboven. In juf-taal:
  "oefenpad", niet "leerpad-id"; demo-knop met TAAK24.
- Statisch + crawlbaar (AI-vindbaarheid-standaard): `public/leerkracht.html` via
  `scripts/buildLeerkracht.mjs` in prebuild — uitleg in juf-taal, FAQ ("moet mijn
  klas accounts aanmaken?" → nee), JSON-LD (FAQPage + LearningResource), opnemen in
  `sitemap.xml` + `llms.txt` (+ datum ophogen).
- Mystery-juf-test op de hele keten (zoeken → code → scannen op telefoon → werkblad
  printen) en de frictie-lijst fixen; claim "in 2 minuten" moet kloppen met stopwatch.

### Fase 3 — Prijsmodel-haakjes (klein, samen met Fase 1 of 2)
- `FEATURE_GATES` + `<PaywallGate feature="werkblad-print">` om de **printknop** —
  digitaal oefenen via code/QR blijft ALTIJD gratis (kernbelofte).
- Tier: **Pro** (leerkracht). Het op-maat-oefenboekje blijft **Familie** — twee
  verschillende printproducten, niet mengen.
- Nu `PAYWALL_ACTIVE=false` → alles werkt gratis in 2026 ("gratis in 2026"-framing);
  juffen die het najaar gratis draaien zijn de Pro-launch-lijst voor jan 2027.
  Copy-bron bijwerken: `src/subscription/proPlan.js` (Pro-laag: "print onbeperkt
  werkbladen voor je klas").

### Fase 4 — Naar buiten (na Fase 2, rond schoolstart)
- A4 juf-instructie-PDF (1 vel, B1, flyer-sjabloon `_template-flyer-b1.html`-patroon):
  wat het is + TAAK24-demo + QR naar /leerkracht.
- 10 groep-8-leerkrachten persoonlijk benaderen (proefgroep) — via bestaande
  outreach-werkwijze; LOWAN-mail (~1 sep, 326 scholen) laten wijzen naar
  `/leerkracht.html` i.p.v. de homepage.
- Meetpunt in dagrapport: `werkblad_print`-events + deelcodes aangemaakt per week.

## Eerste 10 werkbladen (pad-id's geverifieerd in pathManifest, 5 aug)

Criteria: Cito-kern groep 6-8, veel checks, herkenbare juf-zoekwoorden.

1. `breuken-po` — Breuken (Cito groep 5-8)
2. `procenten-po` — Procenten
3. `kommagetallen-po` — Kommagetallen/decimalen
4. `omzetten-breuk-procent-komma-po` — omzetten (dé struikelcombi)
5. `redactiesommen-pad` — Redactiesommen (verhaaltjessommen)
6. `werkwoordsspelling-dt` — d/t + 't kofschip
7. `werkwoord-tijden-po` — Werkwoordsvervoeging T/V groep 7-8
8. `spelling-ei-ij-au-ou` — Spelling ei/ij + au/ou
9. `begrijpend-lezen-teksten-po` — Begrijpend lezen echte oefenteksten
10. `verwijswoorden-begrijpend-lezen-po` — Verwijswoorden

(Generator werkt generiek op elk pad; deze 10 krijgen de kwaliteits-check met de hand:
kloppen de opgaven op papier, geen plaatje-afhankelijke vragen zonder plaatje.)

### Fase 5 — Persoonlijke QR (Mark 5 aug, na Fase 2)
Omdat er geen login/naam nodig is, kan een QR de rol van "wie ben ik" overnemen.
Kern: een kort willekeurig token (nooit de naam), alléén oefenvoortgang erachter,
intrekbaar (nieuwe QR = oude vervalt).
- **5a — Ouder-koppel-QR (eerst):** kind toont QR, ouder/verzorger scant →
  `parent_child_links`-koppeling gelegd. Lost de ~1-koppeling-bottleneck van het
  maandag-weekrapport op en voedt de Familie-tier.
- **5b — QR in elke mail (Mark 5 aug: "dan raken ze 't niet kwijt"):** vast blok
  bovenaan élke Resend-mail (welkom, weekmail, weekrapport): QR + code als tekst +
  link. Technisch: QR-plaatje via eigen endpoint (`api/qr/<token>.png`) — base64
  in mail toont Gmail niet; tekst-code = fallback bij geblokkeerde afbeeldingen.
  Elke mail wordt zo een terugkeer-knop: scan = direct in de app, geen inlog.
  Veiligheid = magic-link-niveau: doorgestuurde mail geeft toegang tot voortgang;
  token intrekbaar houden.
- **5c — Meeneem-QR:** voortgang naar een ander apparaat verhuizen (scan op de
  tablet → verder waar je was); lost ook parkmaatjes-account-sync op. Vervaltijd
  op het token.
- **5d — Deel-QR** (vrienden-actie, kleinste hefboom; kan meeliften op referral.js).

## Bewust NIET (bewaking)

- Geen nieuwe Supabase-tabellen — deelcode blijft in `quizzes` (takenlijst-patroon).
- Geen AI-generatie van opgaven — bron = bestaande pad-checks (€0, kwaliteit bekend).
- Geen `examen-*`-paden printen (zelfde regel als opMaat.js; authentieke vragen niet
  als los werkblad verspreiden).
- Geen klas-administratie/leerlingvolgsysteem in deze ronde — dat is de bestaande
  B2B-lange-termijn-flow; dit plan is het lichte, virale instapkanaal.

## Volgorde & go/no-go

| Stap | Wie | Wanneer |
|---|---|---|
| Go/no-go: npm `qrcode`-dependency | Mark | vóór Fase 1 (zonder = fallback code-only) |
| Fase 1 werkblad-generator | Claude | direct na go |
| Fase 2 voordeur + mystery-juf-test | Claude | aansluitend, klaar ≤15 aug |
| Fase 3 gates | Claude | meeliftend |
| Fase 4 juf-A4 + 10 leraren + LOWAN-koppeling | Mark (versturen) + Claude (materiaal) | ~18 aug–1 sep |
