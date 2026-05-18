---
name: Leerkwartier — SEO/AI-discovery status & strategie (2026-05-13)
description: Volledige status van SEO-werk gestart 2026-05-13 na AI-audit. Wat klaar, wat open, volgende stappen.
type: project
originSessionId: 67d7ebc5-78ac-43e2-b7be-7173021b4ece
---
# SEO/AI-discovery — Leerkwartier

## 🎯 TODO Mark (concrete acties)

### Nu zodra Vercel-deploy klaar is (~5 min na laatste push)
- [ ] **GSC: Request indexing** opnieuw voor 5 URLs die "Kan niet ophalen" stonden (status komt door GSC-poging vóór Vercel-deploy / rewrite-fix klaar was):
  - https://leerkwartier.app/begrijpend-lezen-doorstroomtoets.html (HTTP 200 ✓ verified)
  - https://leerkwartier.app/rekenen-doorstroomtoets.html (HTTP 200 ✓ verified)
  - https://leerkwartier.app/cito-toets-oefenen.html (wacht op deploy)
  - https://leerkwartier.app/vmbo-examens-downloaden.html (wacht op deploy)
  - https://leerkwartier.app/cito-eindtoets-oefenen.html (oude page, nu eindelijk correct geserveerd na Vercel rewrite-fix)
- [ ] **Test homepage UX-fix** in incognito op leerkwartier.app: zie je "Alle vakken →" hint onder beide tegels + zijn de oranje CTA-knoppen even hoog?

### Deze week (binnen 7 dagen)
- [ ] **Bing Webmaster Tools** opzetten (~5 min): https://www.bing.com/webmasters → Add a site → leerkwartier.app → "Import from Google Search Console" (eenvoudigst, automatisch). Bing-index voedt ChatGPT-Search + Copilot.
- [ ] **GSC dagelijkse quick check** (1 min): open Performance-tab → kijk of impressies/kliks beginnen op te komen. Ook Pages-tab: welke status veranderen?
- [ ] **2 oude URLs ook indienen** in GSC (na quota-reset): begrijpend-lezen-oefenen.html + tafels-oefenen.html

### Over 2-3 weken (na metingen)
- [ ] **GSC Performance review**: welke pages krijgen impressies? Welke kliks? Wat is de gemiddelde positie? Op basis daarvan beslissen:
  - Welke landing pages werken → meer in die niche bouwen
  - Welke werken niet → content verbeteren of stoppen
- [x] ~~Pre-rendering opzetten~~ — Optie A gekozen 2026-05-13: rijkere body-content ipv Puppeteer (zie commit 1cc61d9).
- [x] ~~AI-referrer-log~~ — gebouwd 2026-05-13 (zie hieronder bij "AI-referrer-log live").
- [ ] **Bekijk AI-referrer-dashboard wekelijks** op /admin/ai-referrers — welke AI's bezoeken? Welke versturen mensen door?

### Maanden 2-3 (sept-okt 2026)
- [ ] **Diepte-blog** "Doorstroomtoets 2027 complete gids" 2000+ woorden.
- [ ] **Off-page acties**: Reddit r/Nederland + r/onderwijs (eerlijke comments), Wikipedia-bewerking Doorstroomtoets-artikel (externe bronnen-sectie), 3-5 gastartikelen op andere onderwijssites.
- [ ] **YouTube**: 5 korte video's met transcripts ("Hoe oefen je voor begrijpend lezen?"). Transcripts indexeerbaar door Google + AI.

---

## Aanleiding (2026-05-13)
AI-discovery audit uitgevoerd via 6 WebSearches. **3 kritieke bevindingen**:
1. **Brand-conflict**: "Leerkwartier" is bezet door Leatherbox (lederwaren-groothandel, voorheen "Het Leerkwartier"). Brand-search vindt Leatherbox, niet leerkwartier.app.
2. **Site niet geïndexeerd**: `site:leerkwartier.app` = 0 Google-resultaten. AI-engines putten 60-90% uit Google/Bing-indexen, dus zonder Google-indexering geen AI-discovery.
3. **Buiten top-100** voor alle relevante zoektermen (doorstroomtoets oefenen, cito eindtoets, vmbo examen, 15 minuten leren).

**Concurrenten gedomineerd door**: doorstroomtoets.online, junioreinstein.nl, redactiesommen.nl, wijzeroverdebasisschool.nl, cito-oefenen.nl (doorstroomtoets-niche) en examenoverzicht.nl, examen-economie.nl, jojoschool.nl (VMBO-niche).

## Wat gedaan is (2026-05-13)

### Code-kant gefixt (4 commits)
1. **Brand-disambiguatie** in `index.html`:
   - Title aangescherpt op USP: "Leerkwartier — Doorstroomtoets & examens oefenen in 15 min/dag"
   - Meta-description + keywords vernieuwd
   - OG/Twitter Cards bijgewerkt
   - JSON-LD EducationalOrganization met slogan + knowsAbout + uitleg dat dit niet Leatherbox is
   - Invisible-but-crawlable section met sterke H1 + brand-context-disclaimer
2. **AI-crawler-toestemming** in `public/robots.txt`:
   - Expliciet welkom: GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, CCBot, meta-externalagent, Bytespider, Applebot-Extended
3. **Sitemap.xml** met 19 URLs, lastmod=2026-05-13, prioriteiten gezet
4. **llms.txt** (nieuwe AI-engine-standaard) met brand-context + hoofdpagina's + FAQ-blok
5. **Vercel rewrite-fix** in `vercel.json`: `((?!api/).*) → ((?!api/)[^.]*)`. Reden: oude rewrite ving ALLE paden inclusief .html-bestanden → SPA-shell werd geserveerd ipv echte landing pages. Fix: paden met punt (extensie) worden statisch geserveerd.
6. **8 nieuwe HTML landing pages** in `public/`:
   - `doorstroomtoets-oefenen.html` — primaire ICP, 6 FAQ + BreadcrumbList + LearningResource
   - `vmbo-examens-oefenen.html` — examen-niche met badges, 6 FAQ
   - `leren-15-minuten.html` — brand-USP, Ebbinghaus + Article schema · TEVENS HUB met 7 topic-cards
   - `begrijpend-lezen-doorstroomtoets.html` — long-tail Cito's grootste pijler (~50%)
   - `rekenen-doorstroomtoets.html` — long-tail 60-70% redactiesommen
   - `cito-toets-oefenen.html` — vangt zoekers die nog "Cito" gebruiken ipv Doorstroomtoets
   - `vmbo-examens-downloaden.html` — vangt "examens downloaden", "examens inzien", "examenblad vmbo"
   - `doorstroomtoets-2027-gids.html` — **2300-woord ankerblog** met Article-schema, 10 hoofdstukken + 10 FAQ; autoriteits-content voor SEO-piek februari 2027
   Elk: H1 met zoekterm letterlijk, 300-500 woord intro (gids 2300), 6-10 FAQ-vragen, FAQPage-schema, brand-disambiguatie

7. **Homepage UX-fix** in `src/components/HomePage.jsx` (Optie A + Optie 1a uit agents-review):
   - "Alle vakken →" hint-tekst onder rol-tegels (zichtbaar 2e actie)
   - CTA-knoppen minHeight 34px + flex-center (gelijke hoogte)
   - "Nieuw hier? Lees in 1 minuut hoe Leerkwartier werkt →" naar /leren-15-minuten.html als hub

8. **Pre-rendering (Optie A — no-deps)** in `index.html` <section id="site-info">:
   - "Hoe werkt Leerkwartier" — 4-stappen flow
   - "Doorstroomtoets 2027 — kort" — kern-feiten + deeplink naar gids
   - 8 FAQ-vragen in body (parallel aan FAQPage-JSONLD voor crawlers die alleen body lezen)

9. **AI-referrer-log live**:
   - `supabase/migrations/20260513_ai_referrer_log.sql` — tabel met RLS (anon kan via service-role inserten, alleen admin-email kan lezen)
   - `api/log-ai-ref.js` — Edge function die UA + referrer classificeert (GPTBot/ClaudeBot/PerplexityBot/Google-Extended/CCBot + chatgpt.com/claude.ai/perplexity.ai/gemini.google.com/copilot.microsoft.com)
   - `index.html` — client-side snippet met sendBeacon, 1× per sessie, alleen bij AI-referrer
   - `src/components/AdminAIReferrers.jsx` op route `/admin/ai-referrers` — dashboard met top-bronnen + per-dag-graph + recent entries
   - **Vereist Mark-actie**: migratie draaien in Supabase + `SUPABASE_SERVICE_ROLE_KEY` env-var in Vercel (waarschijnlijk al ingesteld voor andere edge functions zoals send-due-reminders)
7. **Oude landing pages gerebrand**: "Studiebol" → "Leerkwartier" in cito-eindtoets-oefenen.html, begrijpend-lezen-oefenen.html, tafels-oefenen.html, over.html (36 vermeldingen totaal)

### Mark zelf gedaan
- ✅ Google Search Console gekoppeld via HTML-bestand `public/google6c89719e47d5ff0b.html`
- ✅ Sitemap.xml ingediend in GSC ("Geslaagd")
- ✅ Request Indexing voor 3 nieuwe URLs (doorstroomtoets/vmbo-examens/leren-15-minuten)

### UX-fix homepage tegels (2026-05-13 avond)
Mark UX-feedback: bezoekers zien alleen de oranje CTA-knop op de rol-tegels
en klikken nooit op de foto/label-zone (die naar role-overzicht leidt).
Plus: hoogte van Leerling-CTA (met DoorstroomtoetsLogo 26px) > Student-CTA
(met emoji 🎓). Optie A gekozen + uitgevoerd in `src/components/HomePage.jsx`:
- "Alle vakken →" hint-tekst toegevoegd onder sub-tekst (10px, rol-kleur)
- CTA-knoppen kregen minHeight 34px + flex-center → altijd gelijke hoogte

### Live URLs (alle .html bestanden serveren nu correct, geverifieerd via curl)
- https://leerkwartier.app/ (homepage, SPA)
- https://leerkwartier.app/doorstroomtoets-oefenen.html
- https://leerkwartier.app/vmbo-examens-oefenen.html
- https://leerkwartier.app/leren-15-minuten.html
- https://leerkwartier.app/begrijpend-lezen-doorstroomtoets.html
- https://leerkwartier.app/rekenen-doorstroomtoets.html
- https://leerkwartier.app/cito-eindtoets-oefenen.html
- https://leerkwartier.app/begrijpend-lezen-oefenen.html
- https://leerkwartier.app/tafels-oefenen.html
- https://leerkwartier.app/over.html

### Documentatie
- `docs/SEO-SETUP.md` — 5-min stap-voor-stap-handleiding voor Mark zelf

## Wat nog open staat (in volgorde van prioriteit)

### 1. Meten (wachten op data, 2-3 dagen)
Google Search Console "Performance" tab gaat impressies + kliks tonen. Pas met meting weten we welke pages werken. Mark moet GSC af en toe checken (1× per week is genoeg).

### 2. Bing Webmaster Tools (5 min werk Mark)
Nog niet ingesteld. Bing-index voedt ChatGPT-Search + Microsoft Copilot. Mark moet:
- Naar https://www.bing.com/webmasters
- "Add a site" → leerkwartier.app
- Bij voorkeur "Import from Google Search Console" (na GSC-verificatie werkt dit automatisch)
- Anders meta-tag-methode: token vervangen in `index.html` regel `REPLACE_WITH_BING_TOKEN`

### 3. Request indexing voor 5 extra URLs (na ~12 uur quota-reset)
- `/begrijpend-lezen-doorstroomtoets.html` (zojuist gemaakt)
- `/rekenen-doorstroomtoets.html` (zojuist gemaakt)
- `/cito-eindtoets-oefenen.html` (oude page, nu wel correct geserveerd)
- `/begrijpend-lezen-oefenen.html`
- `/tafels-oefenen.html`

Google quota: ~10-12 indexering-verzoeken per dag per property.

### 4. Pre-rendering voor SPA-routes (1 sessie werk, hoge ROI)
Homepage `/` en `/cito`, `/leren`, `/leerling`, `/leerkracht` tonen aan AI-crawlers nu een React-shell. AI-crawlers (GPTBot etc) draaien geen JavaScript. Tools:
- `vite-plugin-prerender-sfc` (Vue-only, geen optie)
- `react-snap` (runtime crawler, werkt met Vite)
- Handmatige aanpak: Puppeteer-script in build-step

Beste keuze: react-snap. Risico: kan SPA-state breken als routing of dynamische content niet goed wordt afgehandeld.

### 5. Diepte-content (geen tech, 2-4 uur content-werk)
1 ankerblog van 2000+ woorden: "Doorstroomtoets 2027: complete gids voor ouders" — autoriteits-versterker. Onderwerpen: tijdslijn, 5 aanbieders verschil, niveaus 1F/1S, voorbeeldvragen, oefen-strategie per maand.

### 6. Off-page distributie (doorlopend, niet-tech)
- **Reddit**: r/Nederland, r/onderwijs — eerlijke comments waar de app past, geen spam (AI's lezen veel Reddit)
- **Wikipedia**: Doorstroomtoets-artikel heeft 'externe bronnen'-sectie; eerlijke bijdrage = wereldwijd indexeerbaar
- **Gastartikelen**: 3-5 op andere onderwijs-sites
- **YouTube**: 5 korte video's met transcripts ("Hoe oefen je voor begrijpend lezen?")

### 7. AI-referrer-log (1 sessie werk, meet-tool)
Supabase-tabel `ai_referrer_log` + lichte tracking-snippet in `index.html` + nieuwe `api/log-ai-ref.js` Edge-function + mini-dashboard in `/admin`. Logt per pageview met AI-referrer (chatgpt.com, claude.ai, perplexity.ai) of AI-crawler-user-agent.

### 8. Strategische naam-overwegingen (geen actie nu)
Brand-conflict met Leatherbox blijft latent risico. Opties later:
- Eigen domein registreren (.com nu bezet door Leatherbox, maar `leerkwartier.online` of `mijnleerkwartier.app` zijn vrij)
- "Leerkwartier" naar consumenten als "Het Leerkwartier" of "Leerkwartier App" wegens duidelijke onderscheid
- Niet doen: complete rebrand — kost SEO-momentum

## Strategische timing (Doorstroomtoets-cycle)

| Periode | Wat doen |
|---|---|
| **Mei-aug (NU)** | Infrastructure + content opbouwen. Google heeft 3-6 maanden nodig om autoriteit te bouwen. |
| **Sept-okt** | Bewustwording start. Frequente content-updates (lastmod), eerste off-page-acties. |
| **Nov-jan** | Oefen-piek. Nieuwsbrieven, social-shares, blog-updates. |
| **Feb** | Afname-week. Geen nieuwe content — leef op autoriteit. |
| **Mrt-apr** | Resultaten-fase. Content over middelbare-school-keuze. |

## Concurrenten-overzicht

**Doorstroomtoets-niche** (zware concurrentie):
- doorstroomtoets.online (3x in top-10)
- junioreinstein.nl, redactiesommen.nl
- wijzeroverdebasisschool.nl
- cito-oefenen.nl, oefenen-cito.nl
- educazione.nl, leestrainer.nl, bureaubijles.nl

**VMBO-examen-niche** (makkelijker te penetreren):
- examenoverzicht.nl (3x in top-10)
- examen-economie.nl
- jojoschool.nl, helpmijslagen.nl
- lerenvoorhetexamen.nl

## Verifieer altijd vóór actie

- ⚠️ Vóór aanpassen vercel.json rewrites: test of statische bestanden + SPA-routes nog werken
- ⚠️ Vóór nieuwe landing page: check of zoekterm relevant volume heeft (Google Trends)
- ⚠️ Vóór pre-rendering: backup van werkende build maken
