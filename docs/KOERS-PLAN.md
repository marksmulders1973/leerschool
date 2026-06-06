# Leerkwartier — Koersplan (25-agent zelfcheck, 2026-06-06)

> Doel: **eerlijk maar agressief de beste én grootste worden voor leerlingen/studenten.**
> Principe: **de bal moet altijd rond zijn.** Single source of truth voor de koers.
> Gemiddelde zelfcheck-score: **4,9 / 10** (25 agents, app + posts + groei).

## Diagnose in één zin
Het **product** (de USP-loop) is goed bedacht — maar **beide ballen lekken op de
terugkeer-helft**, en de **groei-/e-mailmachine is bijna leeg**. We bouwen de
ingang prima; de uitgang/terugkeer niet.

## De twee ballen — en precies waar ze lekken
- **Bal 1 — LEREN:** leren → test → uitleg → leerpad → **✗ TERUG**.
  Na het leerpad is er geen "snap je 'm nu?"-terug-knop, geen "morgen weer testen".
  Leerling is "klaar" en verdwijnt. (9 agents flaggen dit.)
- **Bal 2 — GROEI:** reclame → bezoek → activatie → **✗ MOND-TOT-MOND**.
  Bezoek komt binnen (/v/-trechter werkt: 60 klikks), maar niets prikkelt om door
  te sturen. Geen deel-knop, referral kapot, e-mail wordt nooit verstuurd. (6 agents.)

## 10 rode draden (agent-consensus)
| # | Rode draad | Ernst | Genoemd door |
|---|---|---|---|
| 1 | **Terugkeer-helft van bal 1 ontbreekt** (geen terug-link, geen retentie-trigger) | 🔴 | kernflow, leerpad-alldone, oefentoets, uitlegpad, adaptief, v-deeplink, conversie, brutally-honest |
| 2 | **E-mail = zwart gat** — magneet vangt mails, niets wordt ooit verstuurd (Resend ontbreekt) | 🔴 | email-nurture (score **2**), oefentoets, v-deeplink, conversie |
| 3 | **Geen mond-tot-mond-mechanisme** — geen deel-knop op /v/ & VraagVanDeDag | 🔴 | threads, fb-ig, referral, mondtotmond, content-kalender |
| 4 | **SEO = 0 indexatie** — `site:leerkwartier.app` geeft niets; nergens in concurrerende SERP | 🔴 | seo, concurrentie, threads |
| 5 | **uitlegPad-gaten** — ~190 examenvragen sturen WEG i.p.v. in-place uitleg; eliminatie-leak in 7217/8535 wrongHints | 🟠 | kernflow, uitlegpad, doorstroomtoets-kern |
| 6 | **UI-clutter + onboarding** — StudentHome 40+ CTA's, USP-demo niet op hero, Cito niet op HomePage | 🟠 | a11y, onboarding, conversie, brutally-honest |
| 7 | **Positionering te breed** — "grootste" onrealistisch; OBLITERATOR/niche = ruis; wig onderbelicht | 🟠 | concurrentie, brutally-honest, threads |
| 8 | **Referral kapot** — `get_ref_count` RPC bestaat niet; ontvanger krijgt niets; K-factor onmeetbaar | 🟠 | referral (score **3**), mondtotmond |
| 9 | **Tech-debt/schaal** — 10+ unmapped routes (/pro deeplink→/), geen LRU, rate-limit per-instance, wiskunde 4.3MB | 🟡 | techdebt, performance, ai-kosten |
| 10 | **Per-kwartier-model alleen in copy** — geen credit-wallet/metering; privacy-TODO's (DPA, magic-link) open | 🟡 | ai-kosten, privacy |

## Het plan: 3 sprints om beide ballen rond te maken

### Sprint 0 — MAAK DE BAL ROND (hoogste prio, grotendeels code)
Sluit de twee lekken die alles ondermijnen.
- **[bal 1] Terug-link na leerpad/quiz** → "Snap je 'm nu? Terug naar de vraag" + bij
  fout in examen/oefentoets een "📚 Ga dit eerst leren"-CTA naar het concept-leerpad.
  *(ResultsPage.jsx, LearnPath.jsx AllDone, DeepVraag.jsx)*
- **[bal 2] "Deel deze vraag"-knop** op DeepVraag + VraagVanDeDag (native share + WhatsApp),
  met `?ref=<code>`. Mond-tot-mond op het sterkste kanaal (WhatsApp-oudergroepen). ✅ *gedaan 2026-06-06*
- **[bal 2] Referral repareren** → `get_ref_count` RPC bouwen + ontvanger-incentive (3 dagen
  Pro-preview) + teller zichtbaar voor de deler. *(migration + ActieVoorwaarden.jsx)*
- **[bal 1] "Daag vrienden uit" bij ÉLKE score** (nu alleen ≥80%) met score-embed `?score=&subject=`.
- **Retentie-trigger** → AllDone "🔔 Kom morgen terug — dit is over 1 dag weer due" + prominente
  "verdwijnt morgen"-banner op StudentHome (spaced-rep code bestaat al, alleen UI-connect).

### Sprint 1 — VUL DE GROEIMACHINE (e-mail + SEO-instroom)
- **E-mail live** (Resend): welkomstmail dag-1 + wekelijkse oefenvraag op groep/vakken.
  Zonder dit is elke e-mail die we vangen dood gewicht. → **blokker: Mark moet Resend-key + env zetten.**
- **SEO-indexatie forceren** → GSC: alle landing-URL's + sitemap indienen, "indexering aanvragen"
  per kernpagina; check op noindex/canonical/301-fout. **#1 groei-blokker.** → **Mark-actie in GSC.**
- **Merk-disambiguatie** (Leerkwartier vs Leatherbox): Organization+WebSite sameAs-JSON-LD op
  index.html + consistente NAP op fora/blogs.
- **Concurrent-aanval afmaken**: e-mail-opt-in op /gratis-alternatief-squla.html (warmste bezoeker!)
  + 2 extra long-tail pagina's (Junior Einstein / goedkoper-dan-squla) + grens-regel in STOPLIST.
- **Social-asset-generator** (`scripts/genSocialPost.mjs`): per socialVraag een JPEG + caption met
  /v/-link → lost de 2-van-27-brandstof-bottleneck op.

### Sprint 2 — SCHERP DE WIG + DIDACTIEK
- **Positionering aanscherpen**: doel van "grootste van NL" → **"#1 op doorstroomtoets-mét-uitleg"**
  (niche-dominantie eerst). Wig bovenaan de live home: *"De enige plek waar je een echte examenvraag
  fout mag maken en daarna stap-voor-stap snapt WAAROM — gratis."*
- **USP-demo live op HomePage-hero** (één interactieve Cito-vraag) + Cito-knop op de hero.
- **uitlegPad-gaten dichten**: audit-script (`scripts/auditUitlegPadGaps.js`) → top-5 examen-vakken vullen.
- **Eliminatie-leak fixen**: `lint-wronghints-klopt.mjs` draaien, max 2-van-3 foute hints.
- **UI-snoei**: StudentHome 40→~4 primaire CTA's; ResultsPage max 5 acties; OBLITERATOR + niche-vakken
  in aparte sectie. CONCURRENTIE.md bijwerken (extraas.nl doet óók "uitleg na elke vraag").

## Wat alleen Mark kan doen (blokkers — los deze los, dan kan Claude door)
1. **Resend** API-key + Vercel env → e-mailmachine aan (Sprint 1, hoogste).
2. **Google Search Console**: sitemap + indexering aanvragen → instroom (Sprint 1, hoogste).
3. **ouders.nl-forum** account → het kanaal waar het ICP letterlijk om alternatieven vraagt.
4. **Anthropic DPA** tekenen (privacy-TODO).
5. **Buffer/Vercel-cron env** → dagelijkse post-automatisering.

## STOP / niet doen (koers bewaken)
- "Grootste van NL" als doel loslaten → **#1 op de doorstroomtoets-wig**.
- OBLITERATOR uit de app-bootstrap + Cito-UI halen (mag op /spel blijven voor Mark's zoon).
- Niche-vakken: niet weghalen, wél naar "Aanvullende vakken", Doorstroomtoets-kern altijd bovenaan.
- Geen betaalde /v/-ads opschalen vóór de terugkeer-bal rond is (anders giet je geld in een lekke emmer).

## Scores per cluster
- A · Leerloop: ~5,0 · B · Kwaliteit & schaal: ~5,0 · C · Posts & social: ~5,6
- **D · Groei & mond-tot-mond: ~3,6 (zwakst — hier de meeste winst)** · E · Strategie: 5,0
