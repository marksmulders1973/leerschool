---
name: Studiebol app — overview & locations
description: Wat de Studiebol app is, waar de code staat, welke domeinen/deploys live zijn, waar de belangrijkste assets liggen, plus belangrijkste features per 2026-04-29 (sessie 2).
type: project
originSessionId: 8f2cd49a-0b67-406c-a7b5-7990ceaba756
---
**Studiebol** — leer- en quiz-app voor Nederlandse leerlingen (groep 1 t/m 8 + klas 1-4 VO).

## Tech stack
- Frontend: **Vite + React 18**, deployed op Vercel (Hobby plan)
- Backend: Python/JavaScript scripts voor data-integriteit (`check-dupes.py` etc.)
- Database: **Supabase** (Postgres) — `quizzes`, `leaderboard`, `obliterator_scores`, `share_events`, `kudos`, `progress`, `profiles`, `hall_of_fame`, `ai_question_pool` etc.
- AI: **Claude Haiku 4.5** via `ANTHROPIC_API_KEY` (Vercel env) voor vraag-generatie. `api/generate-questions.js` is de endpoint.
- PWA + APK via PWABuilder. Service worker `public/sw.js` met **stale-while-revalidate** + auto-update banner via React `UpdateBanner` component
- Code op GitHub: `https://github.com/marksmulders1973/leerschool.git` (branch `main`)

## Locaties op schijf
- Frontend code + git repo: `C:\Users\mark-\Desktop\Studiebol\leerschool\`
- Hoofdcomponenten in `src/components/`:
  - `App.jsx` (~1000 regels — page-router + game-state)
  - `HomePage.jsx` (rolkeuze, share-knoppen, ticker)
  - `PlayQuiz.jsx` (quiz speel-component)
  - `ResultsPage.jsx` (na quiz: scorebord, OBLITERATOR-toegang, deel)
  - `ObliteratorGame.jsx` (~3000 regels — eigen game, zie aparte memory)
  - `StudentProgress.jsx` (Kampioenen-pagina met 5 tabs)
  - `UpdateBanner.jsx` (auto PWA-update notificatie)
- Vragen-data: `src/constants.js` (~1.3 MB — SAMPLE_QUESTIONS + TOPIC_QUESTIONS hardcoded)
- Hoofdlogo: `public/logo.jpg`
- Vector-logo: `public/icons/icon.svg` + `public/icons/icon-192.png` (gebruikt als achtergrond in OBLITERATOR)

## Domeinen / deploys
- Publiek: `studiebol.online` (TransIP)
- Vercel deployt automatisch op `main`-push
- Service worker triggert auto-update banner — geen handmatige app-refresh meer nodig

## Belangrijkste features (2026-04-26)
**Mastery / hand-in-hand-loop** (sinds 2026-04-29)
- Tabel `topic_mastery` (Supabase) telt per leerling × leerpad de attempts + correct.
- `src/mastery.js`: `recordAnswer({ playerName, questionText, isCorrect })` upsert na elke beantwoorde vraag in PlayQuiz; `loadMasteryForPlayer()` voor de voortgangspagina; `getMasteryLevel()` geeft niveau brons/zilver/goud (vanaf 5 pogingen, ≥70% zilver, ≥90%+10pog goud); `recommendNextTopic()` kiest het zwakste onderwerp voor aanbeveling.
- `MyMastery.jsx` ("📈 Mijn voortgang"): totalen, aanbeveling-CTA, lijst per vak. Toegankelijk via knop op homepage (alleen voor terugkerende leerlingen met naam in localStorage).
- Anti-game: in PlayQuiz zijn antwoord-knoppen 1.5s disabled na elke nieuwe vraag (`MIN_READ_MS`).
- Volgende fases (in `project_studiebol_todos.md`): aanbeveling op homepage zelf, mini-quiz pulled adaptief, ouder/leraar-zicht.

**Quizzes & leren**
- 19+ vakken/groepen: rekenen, taal, wiskunde, aardrijkskunde, geschiedenis, natuur, Engels, Duits, Frans, spelling, begrijpend lezen, cito, redactiesommen, tafels
- AI-gegenereerde vragen + 3624 hardcoded vragen in `constants.js` (waarvan 240 zonder uitleg — zie todos)
- 5 vragen default per quiz (recent verlaagd van 10 voor lagere drempel)
- "+5 vragen erbij"-knop op resultaat
- ⚡ **Snelstart-knop** op homepage: 5 rekenen-vragen direct, 0 klikken vooraf

**Hall of Fame / Kampioenen-pagina**
- 5 tabs: Vandaag / Week / Maand / Jaar / Obliterator (all-time top 25)
- Per tab 3 blokken: 🏆 Top 6 toetsen + 💀 Top 6 OBLITERATOR + 🌟 Top 6 delers
- 5 aanmoedigingsprijzen onderaan: Doorzetter, Hardwerker, Verbeteraar, Meest actief, **Vriendenmaker**
- 👑 **Kroon achter naam** voor zeer actieve spelers (≥5 toets-pogingen in laatste 7 dagen)
- 👏 **"Goed gedaan!" knop** per entry (kudos-systeem) — Supabase `kudos` tabel, max 1 per giver per score, namen onder entry zichtbaar

**Sociale + groei**
- Deel-knoppen op HomePage (WhatsApp, Facebook, OBLITERATOR-deel met ?play=obliterator deeplink)
- Deel-knoppen op OBLITERATOR game-over (5 platforms)
- Alle shares getrackt in `share_events` (per persoon, platform, tijd)
- "🌟 Bedankt!"-toast na elke share
- Vriendenmaker-award week-overzicht
- TickerBanner op HomePage rolt door winners + delers + OBLITERATOR top 2 + share-bedankjes
- Welkomstpagina-conversie voor deeplink-bezoekers na 3e OBLITERATOR-sessie

**Stap-voor-stap leerpaden** (sinds 2026-04-27)
- Nieuwe leervorm naast quizzen: onderwerp van begin tot eind doorlopen met uitleg + SVG + mini-checks per stap
- Bij fout: uitleg waarom + opnieuw proberen, NIET doorgaan
- Voortgang per stap opgeslagen in `learn_progress` (kunnen later weer oppakken)
- Beginscherm met hoofdstukken (A-?), klikbare stappen, ✅/🔵/⚪ status, "Doorgaan waar je was"-knop
- Component: `src/components/LearnPath.jsx`. Index: `src/learnPaths/index.js` bundelt alle paden
- Markdown-tabellen worden gerenderd in de uitleg
- Toegang: knop per leerpad op homepage + knop in stop-overlay tijdens een quiz + **"🤔 Ik weet het niet — leg het uit"-knop direct onder de antwoordopties** (sinds 2026-04-28). Match-logica in 2 stappen:
  1. **Exact-lookup**: `src/learnPaths/questionPathMap.generated.js` (~186 KB, ~2900 entries) bevat een pre-getagde map vraag-tekst → {pathId, stepIdx}. Gegenereerd door `scripts/match-questions-to-paths.mjs` — keyword-matching met vak-context, geen AI nodig. Run opnieuw na nieuwe paden/vragen.
  2. **Runtime fallback**: `findLearnPathForQuestion(text, allowedSubjects)` filtert op leerpad-`subject` (bv. begrijpend-lezen → alleen `taal`-paden) en doet keyword-match. Voor AI-gegenereerde vragen die niet in de map zitten.
  
  Bij geen match → "Mee bezig"-pagina ("komt eraan") met optionele knop "Bekijk N leerpaden voor [vak]" als er wél andere paden zijn voor dat vak.
- **Bestaande leerpaden** per 2026-04-28:
  - Wiskunde:
    - `parabolen` — 32 stappen, 9 hoofdstukken
    - `ruimtemeetkunde` — 25 stappen, 7 hoofdstukken
    - `kwadraten-wortels` — 18 stappen, 6 hoofdstukken
    - `pythagoras` — 13 stappen, 5 hoofdstukken
    - `kwadratische-vergelijkingen` — 12 stappen, 4 hoofdstukken
    - `lineaire-formules` — 16 stappen, 5 hoofdstukken
    - `rekenen-met-letters` — 15 stappen, 5 hoofdstukken
    - `vlakke-figuren` — 16 stappen, 6 hoofdstukken
    - `breuken` — 15 stappen, 5 hoofdstukken
    - `procenten` — 12 stappen, 5 hoofdstukken
    - `negatieve-getallen`, `verhoudingen`, `goniometrie`, `statistiek`
  - Nederlands — **VOLLEDIG** sinds 2026-04-29 (7 paden, ~98 stappen):
    - Onderbouw klas 1-2:
      - `werkwoordsvervoeging` — 14 stappen (d/t-regels)
      - `spelling` — 14 stappen (lettergrepen, ei/ij, samenstellingen, verkleinwoorden, apostrof)
      - `zinsontleding` — 14 stappen (pv, onderwerp, gezegde, lv, mv, bepalingen)
    - Havo 4-5:
      - `argumentatieleer` — 14 stappen (5 schema's + 4 drogredenen)
      - `tekstanalyse` — 14 stappen (tekstdoel, hoofdgedachte, alinea-functie, feit/mening)
      - `schrijfvaardigheid` — 14 stappen (betoog/beschouwing/uiteenzetting + revisie)
      - `literatuurgeschiedenis` — 14 stappen (9 stromingen Middeleeuwen→Eigentijds + literaire begrippen)
  - **Wiskunde Flex klas 2 (deel 1 + deel 2, H1-H8) volledig gedekt** ✅
  - **Klas 1 basis (breuken, procenten) gedekt** ✅
  - **Nederlands compleet — onderbouw + havo 4 leerlijn** ✅
  - Nederlands aanvulling (2026-04-29):
    - `woordsoorten-nederlands` — 11 stappen, basis-grammatica: zn / ww / bn / lw / persoonlijk + bezittelijk vnw / vz / vg / bw met herkenningstrucs
  - Engels (2026-04-28 + 2026-04-29):
    - `onregelmatige-werkwoorden-engels` — 12 stappen (V1/V2/V3, klankgroepen, must-knows be/have/do/go)
    - `present-tenses-engels` — 10 stappen (present simple + continuous, -s-regel, do/does, am/is/are + V-ing, state verbs)
    - `past-tenses-engels` — 10 stappen (past simple + present perfect, did, have/has + V3, signaalwoorden, top 5 fouten)
    - `woordenschat-engels` — 10 stappen, ~80 basiswoorden in 8 thema's (eten, kleding, lichaam, familie, school, huis, dieren, werkwoorden + getallen/tijd/uitdrukkingen)
  - Biologie — eerste pad (2026-04-28):
    - `cel-biologie` — 11 stappen, 5 hoofdstukken (cel als bouwsteen, eencellig/meercellig, organellen kern+cytoplasma+membraan+mito+chloro, plantcel vs dierlijke cel PCV, bacteriecel prokaryoot, celdeling)
  - Geschiedenis — eerste pad (2026-04-28):
    - `tijdvakken-geschiedenis` — 12 stappen, 5 hoofdstukken (de 10 tijdvakken van Commissie De Rooy: jagers/boeren → grieken/romeinen → monniken/ridders → steden/staten → ontdekkers/hervormers → regenten/vorsten → pruiken/revoluties → burgers/stoom → wereldoorlogen → tv/computer)
  - Aardrijkskunde — eerste pad (2026-04-28):
    - `klimaten-aardrijkskunde` — 10 stappen (weer vs klimaat, klimaatzones A-E + hoogteklimaat + klimaatverandering)
  - Natuurkunde — eerste pad (2026-04-28):
    - `krachten-natuurkunde` — 10 stappen (kracht als pijl, massa vs gewicht, zwaartekracht/wrijving/veerkracht, drie wetten van Newton)
  - Scheikunde — eerste pad (2026-04-28):
    - `atoombouw-scheikunde` — 10 stappen (atoom + proton/neutron/elektron, atoomnummer, isotopen, schillen, periodiek systeem, ionen, moleculen, reacties)
  - Economie — eerste pad (2026-04-28):
    - `vraag-aanbod-economie` — 10 stappen (wet vraag/aanbod, marktevenwicht, vraag-+aanbodverschuivingen, toepassing op uitverkoop/schaarste/concertkaartjes)
  - Bedrijfseconomie — eerste pad (2026-04-28):
    - `balans-beco` — 10 stappen (balans A=EV+VV, debet/credit, vaste/vlottende activa, eigen/vreemd vermogen, W&V, kosten-soorten, afschrijven, kostprijs/marge)
  - Duits — eerste pad (2026-04-28):
    - `naamvallen-duits` — 10 stappen (der/die/das, ein/eine, bezittelijk, 4 naamvallen NOM/ACC/DAT/GEN, voorzetsel-rijtjes für+acc/mit+dat, wisselvoorzetsels)
  - Frans — eerste pad (2026-04-28):
    - `passe-compose-frans` — 10 stappen (voltooid verleden tijd, avoir vs être, DR & MRS VANDERTRAMPP, p.p.-vorming -é/-i/-u + onregelmatig, aanpassing bij être)
  - Maatschappijleer — eerste pad (2026-04-29):
    - `nederlandse-staat-maatschappijleer` — 11 stappen (democratie, Tweede + Eerste Kamer, regering, Koning, Trias Politica, Grondwet art. 1, rechtsstaat, burgerschap, EU/VN/NAVO)
  - PO Wereld & Natuur — eerste pad (2026-04-29):
    - `dieren-seizoenen-natuur` — 11 stappen (kenmerken van leven, 5 hoofd-diergroepen + weekdieren/schaaldieren/wormen, metamorfose, 4 seizoenen, planten + fotosynthese, voedselketen)
  - **Wiskunde-pilot voor topic-systeem compleet (29-04-2026)** ✅
    - 3 nieuwe paden: `coordinatenstelsel`, `vergelijkingen-oplossen`, `machten`
    - Alle 17 wiskunde-paden getagd met `topics: [...]` (zie `src/topicTaxonomy.js`)
    - YouTube-zoekknop in elke stap (component `YoutubeZoekKnop` in LearnPath.jsx)
  - 24 leerpaden, ~340 stappen totaal
- Hub-pagina: `LearnPathsHub.jsx` — vervangt losse knoppen op homepage. Toont alle paden in kaarten, met voortgang per pad uit Supabase, "Doorgaan waar je was"-knop, totaalvoortgangsbalk.
- **Curriculum-modus** (sinds 2026-04-27): `src/curricula/index.js` definieert geordende leerlijnen per klas opgesplitst in fases. Per 2026-04-29: `wiskunde-klas1/2/3` + `nederlands-onderbouw` + `nederlands-havo4`. Wiskunde-klas1 heeft 3 fases (Getalbegrip + Verhoudingen&algebra + Coördinaten); klas2 'Algebra-bouwstenen' nu met vergelijkingen-oplossen + machten erbij. `Curriculum.jsx` toont de doorloop met progressie + "Doorgaan met curriculum"-knop die naar de volgende onafgemaakte stap springt. Voortgang afgeleid uit bestaande `learn_progress` tabel.

- **Topic-taxonomie** (sinds 2026-04-29, `src/topicTaxonomy.js`): brug tussen vragen en leerpaden. Naming `<vakcode>.<deelgebied>.<onderwerp>` (bv. `WI.algebra.parabolen`, `NL.lees.argument`). Wiskunde 15 topics + Nederlands 7 topics. Alle wiskunde-paden hebben `topics: [...]` veld. Helper-functies: `topicLabel()`, `topicsForSubject(code)`, `subjectFromTopic(id)`. Doel: vraag → topic → leerpad zonder fuzzy keyword-match. Vragen-tagging zelf nog open (zie todos).
- **Voor nieuwe onderwerpen** (Mark wil per sessie 1 hoofdstuk uit Wiskunde Flex deel 2 uitwerken): nieuwe file in `src/learnPaths/<onderwerp>.js` met `chapters` + `steps` + `triggerKeywords`. Registreer in `index.js`. Voeg knop toe in HomePage.jsx onder de bestaande leerpad-knoppen.

**OBLITERATOR mini-game** (zie aparte memory `project_studiebol_minigame.md`)

**Internationaal & SEO**
- Google Translate banner: alleen Engels (focus op NL'ers in USA — 24% traffic)
- JSON-LD structured data (EducationalOrganization + WebApplication)
- sitemap.xml + robots.txt
- Auto-update PWA banner

**Analytics-tracking** (voor drop-off analyse)
- `name_entered`, `role_selected`, `quiz_started`, `quiz_first_question_seen`, `question_answered`, `quiz_completed`, `quiz_quit`, `quiz_abandoned_unload`, `quiz_retried`
- `obliterator_started` (source: deeplink/results_page/menu)
- `obliterator_session_complete` (score, sessies, nieuw_PR/WR)
- `snelstart_clicked`
- `leaderboard_skipped_no_name`

## Status per 2026-04-26
- 779 actieve users in laatste 30 dagen (+77% vs week ervoor)
- 92 voltooide quizzes uit 9 unieke spelers (Sahasra + Mark = 72%)
- Conversiekloof: 91% van bezoekers maakt geen quiz af → reden voor Snelstart-knop + dropoff-tracker
- Internationale traffic: 24% USA, 3% Sweden, 3% France
- 33 nieuwe users via Paid Social (advertenties werken)

**Why:** dit is het inhoudelijke centrum van Mark's werk — elk gesprek over "de app" gaat hierover.

**How to apply:** Wanneer Mark het heeft over "de app", "mijn site", "logo", "quiz", "leerlingen/leerkrachten", ga uit van Studiebol. Pad-referenties default naar `Desktop\Studiebol\leerschool\` voor code. Voor het mini-spel: zie aparte memory.
