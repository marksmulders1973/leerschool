---
name: Studiebol — openstaande taken
description: Feature-requests, bugs en UX-verbeteringen die over meerdere sessies zijn besproken maar nog niet afgewerkt. Peildatum 2026-04-29.
type: project
originSessionId: 8f2cd49a-0b67-406c-a7b5-7990ceaba756
---

## ⏰ Terugkerend (dagelijks)

- **Dagelijkse stats-rapportage voor Mark** (vraag van 2026-04-26):
  - Mark wil voorlopig **dagelijks** een overzicht ontvangen van Studiebol-prestaties
  - Ophalen via Supabase MCP (toegang heeft Claude):
    - leaderboard: nieuwe quizzes vandaag/gisteren + unieke spelers
    - obliterator_scores: nieuwe game-sessies + top 5
    - share_events: aantal shares per platform per dag
    - kudos: aantal felicitaties uitgewisseld
  - Google Analytics: Mark moet zelf screenshot delen (geen GA-MCP toegang)
  - **Aanbeveling**: Mark stelt een `/schedule` routine in voor automatische dagelijkse run met agent — kan ik niet zelf voor hem starten
  - Format: Korte tabellen met groei, opvallende dingen, drop-off vergelijking met vorige dag

## 🔥 Hoog prioriteit — drie acties uit competitor-research (2026-05-02)

Research van Khan Academy + BBC Bitesize + Brilliant.org + leersnel.nl. Studiebol heeft diepte + 3D + NL-relevantie voor; deze drie zijn de gaten waar de top 3 het beter doen:

1. **AI-tutor chat per stap** *(in uitvoering 2026-05-02 avond)*: chat-interface die context heeft van huidige stap (titel + uitleg + check-vraag + laatste fout). Leerling kan vragen "leg het anders uit", "geef een voorbeeld", "waarom is mijn antwoord fout". Backend: nieuwe `api/tutor-chat.js` + Claude Haiku 4.5. Frontend: `<AITutor>`-component opensbaar vanuit step-pagina, localStorage chat-history per stap. Phase 1: request-response. Phase 2: streaming + suggested-question chips. **Hefboom: leerling die vastloopt afhaakt nu — chat-tutor verandert dit fundamenteel.**

2. **"Doorgaan waar je was" prominent op homepage hero** *(open)*: nu zit `MasteryCTABanner` op LearnPathsHub (achter een klik). Brilliant zet dit recht in de homepage-hero. Voor terugkerende leerlingen moet eerste klik altijd "verder waar ik was" zijn. ~1-2 uur werk.

3. **Daily streak + 5-min dagelijkse mini-challenge** *(open)*: `streak_days` staat in profiel maar is passief. Brilliant + Duolingo gebruiken dagelijkse "Doe 5 minuten"-challenge als retention-engine. Mastery `due topics` (Leitner spaced rep) is perfect basis. ~1 dag werk.

**Niet doen** (verleidingen geanalyseerd in research-sessie): 3D-illustraties Brilliant-stijl (geen illustrator-budget), video per stap (te duur), push-notificaties (annoyance-risico zonder eerst streak-engagement).

## 🔥 Hoog prioriteit — bestaand

- **Leerpaden — uitwisselbaarheid + curriculum** (visie 2026-04-27, zie `feedback_studiebol_curriculum_visie.md`):
  - ✅ Vraag → specifieke leerpad-stap (`findLearnPathForQuestion` returnt {pathId, stepIdx}, LearnPath accepteert `initialStepIdx`)
  - ✅ Leerpad-stap → mini-toets ("Test wat je net leerde" knop in stepDone-mode opent `MiniQuiz.jsx`, AI-gegenereerd via `/api/generate-questions`)
  - ✅ Curriculum-modus (2026-04-27): `src/curricula/index.js` definieert wiskunde-klas1/2/3 met fases en geordende pathIds. `Curriculum.jsx` toont fases met voortgang + "Doorgaan"-knop naar volgende onafgemaakte stap. Toegang: bovenste sectie "🎓 Hele leerlijn — per klas" op `LearnPathsHub`. Voortgang afgeleid uit bestaande `learn_progress` tabel.
  - ✅ Homepage UX: `LearnPathsHub.jsx` is de hub-pagina (sinds eerder). Curricula bovenaan, losse paden gegroepeerd per vak eronder.
- **Wiskunde Flex deel 2 — alle hoofdstukken gedekt** ✅ (2026-04-27):
  - ✅ H5 Kwadraten en wortels (`kwadratenWortels.js`)
  - ✅ H6 Pythagoras (`pythagoras.js`)
  - ✅ H7 Kwadratische vergelijkingen (`kwadratischeVergelijkingen.js`)
  - ✅ H8 Inhoud en vergroten (`ruimtemeetkunde.js`)
  - Bonus: Parabolen-leerpad
- **Volgende boeken / vakken** (per Mark's voorkeur):
  - ✅ **Nederlands COMPLEET** (29-04-2026): onderbouw (3 paden) + havo 4 (4 paden)
  - Wiskunde Flex **deel 1** (klas 1, H1-H4) — nog open
  - Wiskunde Flex **klas 3** of bovenbouw — nog open
  - Engels onderbouw (irregular verbs, tenses) — kandidaat voor volgende vak
  - Biologie / scheikunde / natuurkunde — kandidaten voor breder beta-aanbod
- **Kern Nederlands havo 4 editie 13 — boek-specifieke mapping** (vraag 2026-04-28):
  - Mark wilde een leerpad gebaseerd op de inhoudsopgave van Kern Nederlands (Boom uitgevers, niet Malmberg) havo 4 ed. 13. Publieke inhoudsopgave was niet vindbaar; auteursrecht beperkt 1-op-1 overname.
  - Tussenoplossing al geleverd: generiek `argumentatieleer`-pad voor havo 4 (past bij élke methode, eigen content).
  - Open: zodra Mark de inhoudsopgave deelt (foto/screenshot/typsel), kunnen we per hoofdstuk een passend leerpad aanleggen + een boek-mapping-laag bouwen die Kern-hoofdstuknummers vertaalt naar Studiebol-leerpaden.
  - Logische volgende havo-4-paden zonder dat boek nodig: literatuurgeschiedenis (Middeleeuwen → Modernisme), schrijfvaardigheid (betoog/beschouwing/uiteenzetting), tekstanalyse.
- **AI-batch run voor lege explanations** (script staat klaar 2026-04-26):
  - `scripts/fill-explanations.mjs` vindt 240 vragen in `src/constants.js` zonder uitleg
  - Mark moet zelf draaien (heeft API-key nodig — staat in Vercel env, niet lokaal):
    ```bash
    cd "/c/Users/mark-/Desktop/Studiebol/leerschool"
    echo 'ANTHROPIC_API_KEY=sk-ant-...JOUW_KEY...' > .env.local
    node scripts/fill-explanations.mjs --max=5   # eerst test
    node scripts/fill-explanations.mjs           # full run, ~2-3 min, ~$0.20-0.50
    git add src/constants.js && git commit -m "chore: AI explanations toegevoegd aan 240 vragen" && git push
    ```
  - Script is idempotent en saved tussentijds
- ~~Share-bug fix~~: ✅ al opgelost (audit 2026-04-27, sessie 2). Alle score-share-knoppen in `StudentProgress.jsx` (regels 482, 592, 1244, 1323, 1516) zitten al binnen `{isMe && (...)}`-gates. Andere share-locaties (HomePage, ResultsPage, ObliteratorGame, OuderDashboard, TeacherHome) zijn óf algemene app-promo óf altijd eigen-context. Kanttekening: `share_events`-INSERT is client-side (DevTools-bypass mogelijk) — server-side RLS/validatie is nog open en zou een diepere security-pass vergen.
- **Leerkracht-quiz-review**: leerkrachten moeten quizzen kunnen inzien én aanpassen vóór publicatie aan leerlingen. Kritieke feature, nog niet geïmplementeerd.
- **Conversiekloof aanpakken** (91% drop-off): wachten op data uit nieuwe drop-off-tracker (events `name_entered`, `quiz_first_question_seen`, `quiz_abandoned_unload`) om te zien waar het lekt. Gebaseerd daarop:
  - Onboarding nog korter maken
  - AI-laad-tijd zichtbaar/sneller maken
  - Eerste vraag makkelijker

## 🟡 Middel prioriteit

- **Zoekfilter fix**: zoekopdracht werkt niet goed (test: "zout" gaf geen vragen terug)
- **Gemini fallback** voor eenvoudige vragen → kostenbesparing op AI-calls bij schaal
- **YouTube-uitleg per redactiesom-type** uitbreiden: optellen, aftrekken, vermenigvuldigen, delen, geld, tijd, meten, gemengd. Deels in `PlayQuiz.jsx TOPIC_VIDEOS`
- **EN-versie verbeteren** (huidig: alleen Google Translate banner): voor 24% USA-traffic + Zweden/Frankrijk een echte i18n-laag overwegen wanneer non-NL > 30%
- **OBLITERATOR-balans**: na een paar dagen meten met `obliterator_session_complete` event, kijken of:
  - Plafond-stekels frequentie OK is (50/50 met grond)
  - Power-up frequentie (raket elke 25, FLIP elke 22) niet te veel/weinig
  - 5 werelden lang genoeg
- **UI/UX polish** (lange lijst, geen haast):
  - `=` teken weg uit "Studiebol PRO" knop (leesbaarheid)
  - Scorebord dikker/voller (vak + groep + tijd zichtbaarder)
  - "Ik ben leerling" / "Ik ben leerkracht" icoontjes verbeteren
  - Homepage video-achtergrond consistenter met rest van site
  - Slogan: **"van oefenen naar slagen" → "Elke Studiebol slaagt"** (neon blauw)

## 🟢 Laag prioriteit

- Login/selectie: redundante "basisschool of voortgezet?"-vraag weghalen (al bekend uit inschrijving)
- N.v.t.-knop voor zelfgemaakte toetsen (i.p.v. verplichte klaskeuze)
- Vraag-na-leven-verlies in OBLITERATOR (geprobeerd 2026-04-26 maar Mark wilde 't niet tijdens spel)

## 🔥 Hoog prioriteit — vraag↔leerpad-koppeling afmaken (na taxonomie-pilot)

Topic-taxonomie + wiskunde-tagging is gedaan (commit `e9bc85e`). Volgende stappen om de bidirectionele vraag↔leerpad-koppeling helemaal werkend te maken:

1. **Tag-script voor bestaande vragen**: nieuw script `scripts/tag-questions-with-topics.mjs` (vergelijkbaar met `fill-explanations.mjs`). Per vraag in `constants.js` (~3624 stuks) AI laten beslissen welk topic uit `src/topicTaxonomy.js` past, en als veld `topic: "WI.algebra.parabolen"` toevoegen. Mark draait dit zelf zoals de explanations-batch (~$0.30-1.00 aan AI-calls).

2. **`findLearnPathForQuestion` upgraden** (in `src/learnPaths/index.js`): nu fuzzy keyword-match, naar topic-direct lookup. Vraag heeft `topic` → zoek leerpad waar `topics.includes(vraag.topic)`. Fallback op keyword-match voor vragen zonder topic.

3. **`MiniQuiz.jsx` uitbreiden**: naast AI-gegenereerde quiz-vragen óók bestaande vragen halen waar `topic === leerpad.topics[0]`. Mengt eigen-vragen-pool met AI voor variatie + kostenbesparing.

4. **`api/generate-questions.js` aanpassen**: AI laten meegeven welk topic de vraag dekt, zodat nieuwe AI-vragen meteen getagd zijn. Update prompt en JSON-schema.

5. **Nederlands-paden ook taggen** (huidige NL paden hebben nog geen `topics: [...]` veld). Quick win na taxonomie-uitbreiding voor NL is al klaar (NL.* topics bestaan in taxonomy).

## ✅ Recent afgerond (2026-04-28 — sessie split Leren/Oefenen)

- **Vakkengrid in Oefenen-tab gesplitst** (commit `0f2372c`): in `TextbookQuiz` step 1 toont elke vaktegel nu 2 helften — links 📚 Leren, rechts 🎯 Oefenen. Voor wiskunde + Nederlands leidt Leren naar `LearnPathsHub` gefilterd op dat vak (nieuwe `filterSubject`-prop). Voor alle overige vakken zonder leerpaden opent `MeeBezig.jsx` met opt-in "Hou me op de hoogte". Interesses opgeslagen in nieuwe Supabase-tabel `learn_path_waitlist`. Helper `src/learnPaths/subjectMapping.js` koppelt categorie-id → leerpad-subject. Bottom-tab "Leren" reset de filter zodat de volledige hub zichtbaar blijft.
- **Engels — eerste leerpad** (commit `89bf92b`): `onregelmatige-werkwoorden-engels` met 12 stappen. Engels-tegel in Oefenen-grid leidt vanaf nu naar de gefilterde hub i.p.v. de Mee bezig-pagina. Mark's strategie: ga gewoon door, alle 11 lege vakken krijgen leerpaden — opslaan wat klaar is in deze memory.

## ✅ ALLE 11 LEGE VAKKEN HEBBEN NU EEN EERSTE LEERPAD (2026-04-28)

Status — eerste leerpad per vak:
1. ✅ Engels — `onregelmatige-werkwoorden-engels` (12 stappen)
2. ✅ Biologie — `cel-biologie` (11 stappen)
3. ✅ Geschiedenis — `tijdvakken-geschiedenis` (12 stappen)
4. ✅ Aardrijkskunde — `klimaten-aardrijkskunde` (10 stappen)
5. ✅ Natuurkunde — `krachten-natuurkunde` (10 stappen)
6. ✅ Scheikunde — `atoombouw-scheikunde` (10 stappen)
7. ✅ Economie — `vraag-aanbod-economie` (10 stappen)
8. ✅ Bedrijfseconomie — `balans-beco` (10 stappen)
9. ✅ NaSk — geen eigen pad, mapt naar [biologie+natuurkunde+scheikunde] via array-mapping in subjectMapping
10. ✅ Duits — `naamvallen-duits` (10 stappen)
11. ✅ Frans — `passe-compose-frans` (10 stappen)

Het Mee bezig-systeem (tabel `learn_path_waitlist`) blijft draaien voor toekomstige vakken zoals Maatschappijleer, Spaans, Latijn, Grieks, Wiskunde A/B (extra zoals nu in TEXTBOOK_CATEGORIES_VO staan).

## 🔥 Volgende ronde — uitbreiden per vak

Voor de zojuist toegevoegde vakken: meer paden bouwen op basis van vraag (signaal vanuit `learn_path_waitlist` count én daadwerkelijke voortgang in `learn_progress`):
- Engels: tenses present/past simple+continuous, present perfect, conditional, woordenschat-thema's
- Biologie: voortplanting, plantorganen, mens-organen (hart/longen), evolutie, ecosystemen, hormoonstelsel, immuunsysteem
- Geschiedenis: WO1, WO2, Tachtigjarige Oorlog, Verlichting, Industriële Revolutie, Gouden Eeuw, Koude Oorlog
- Aardrijkskunde: platentektoniek, waterkringloop, bevolkingspiramides, ontwikkelingslanden, geomorfologie
- Natuurkunde: snelheid en versnelling apart, elektriciteit, licht/optica, geluid, energie+arbeid
- Scheikunde: chemische reacties balanceren, zuren/basen pH, zouten oplossen, organische chemie
- Economie: BBP, inflatie, conjunctuur, monetair beleid
- Bedrijfseconomie: liquiditeit/solvabiliteit, kostprijscalculatie, btw-berekening, leningen
- Duits: werkwoordsvervoeging, sterke werkwoorden, woordvolgorde, perfekt
- Frans: imparfait, futur, conditionnel, geslachten/lidwoorden

## ✅ Recent afgerond (2026-04-29 — sessie 2: wiskunde-pilot)

- **Topic-taxonomie** + wiskunde-tagging (commit `e9bc85e`): nieuw `src/topicTaxonomy.js` (~25 topics), alle 14 bestaande wiskunde-paden krijgen `topics: [...]` veld.
- **YouTube-zoekknop** op elke leerpad-stap (`6b96bd8`): rode knop met "🎥 Bekijk uitleg op YouTube" opent search-URL met "<stap> <pad> <vak> uitleg". Geen vaste video-links → altijd actuele content.
- **3 nieuwe wiskunde-paden** maken wiskunde-onderbouw compleet:
  - `coordinatenstelsel` (klas 1, `9994f98`) — assenstelsel + kwadranten + punten plotten + lijnen
  - `vergelijkingen-oplossen` (klas 2, `dc616b9`) — balans-methode + x aan beide kanten + haakjes + breuken + woordvergelijkingen
  - `machten` (klas 2-3, `9325e3a`) — notatie + 3 machtsregels + producten/quotiënten/negatief + 10-machten + wet. notatie

Totaal nu: **24 leerpaden / ~340 stappen**.

## ✅ Recent afgerond (2026-04-29 — sessie 1: Nederlands)

- **Nederlands COMPLEET**: 5 nieuwe paden gebouwd (`schrijfvaardigheid` `b5a8020`, `tekstanalyse` `b629782`, `literatuurgeschiedenis` `775946f`, `spelling` `df68af8`, `zinsontleding` `e83489a`). Curricula nu: `nederlands-onderbouw` (Spelling+Grammatica fases) + `nederlands-havo4` (Leesvaardigheid+Schrijfvaardigheid+Literatuur fases). Totaal Nederlands: 7 paden / ~98 stappen.
- **OBLITERATOR uitbreidingen**: anonieme spelers krijgen level-keuze tot hoogste bereikte level (`3414f99`); 3 nieuwe power-ups magneet/slow-mo/bomb (`7bb210f`); offline-scores syncen via localStorage queue + 'online' event (`33dae9c`); UFO's verwijderd + ring-punten schalen mee met level-bonus (`6fc2d4b`); scope-fix effSnelheid (`d468fe7`).
- **Layout/IA-redesign (gefaseerd)**:
  - Responsive container (`1dd1584`): app-shell met breakpoints 480/560/800px
  - Leerpaden-hub 2-kolom grid op laptop (`098f12c`)
  - Primaire CTA's "Leren" + "Oefenen" bovenaan homepage (`b6a07b7`)
  - Bottom-tabs nav (Home/Leren/Oefenen/Kampioenen) op rust-pagina's (`cba5f04`)
- **Open**: Profiel-tab toevoegen wanneer er een echte profielpagina komt; biologie/scheikunde/Engels als volgende vak; vraag↔leerpad-mapping voor wiskunde+Nederlands (= huidige discussie 29-04).

## ✅ Recent afgerond (2026-04-28)

- **Eerste Nederlands-leerpaden**: `werkwoordsvervoeging` (d/t, 14 stappen, onderbouw) en `argumentatieleer` (havo 4 examenstof, 14 stappen, 5 argumentatieschema's + 4 drogredenen). Twee nieuwe curricula: `nederlands-onderbouw` en `nederlands-havo4`. UI vereiste geen aanpassingen — `SUBJECT_LABELS["taal"]` was al "Nederlands 📖". Commits `2a2dcdf` + `72f1297`.

## ✅ Recent afgerond (2026-04-27 — sessie 2)

- **Curriculum-modus**: 3 curricula (wiskunde-klas1/2/3) in `src/curricula/index.js`, `Curriculum.jsx` component met fases, voortgangsbalken, "Doorgaan met curriculum"-knop. Geïntegreerd in `LearnPathsHub`. Commit `0ec2f6e`.

## ✅ Recent afgerond (2026-04-27)

- **Leerpad-systeem (basis)**: tabel `learn_progress` in Supabase, component `LearnPath.jsx`, beginscherm met hoofdstukken/klikbare stappen, voortgang per stap, "Doorgaan waar je was"-knop, markdown-tabel rendering, `findLearnPathForQuestion` op keywords, knop in PlayQuiz stop-overlay.
- **Leerpad parabolen**: 32 stappen in 9 hoofdstukken op basisniveau, inclusief vierkanten-visualisatie voor x², staafdiagrammen, vergelijkings-pijlen, b-visualisatie, nulpunten-grafiek.
- **Leerpad ruimtemeetkunde** (H8 G&R FLEX deel 2): 25 stappen in 7 hoofdstukken — oppervlakte, omtrek, inhoud, vergrotingsfactor (k/k²/k³).
- **AI-prompt voor SVG bij parabolen/grafieken** verstrengd in `api/generate-questions.js`.
- **Multi-leerpad architectuur**: `src/learnPaths/index.js` bundelt alle paden — nieuw onderwerp toevoegen = 1 file + registratie.

## ✅ Recent afgerond (2026-04-25/26)

- OBLITERATOR mini-game: van prototype naar volledige productie-feature
- Hall of Fame uitbreiding: 5 tabs + 3 blokken (toetsen/obli/delers) + 5 awards inclusief Vriendenmaker
- 👑 Kroon achter naam voor actieve spelers
- 👏 "Goed gedaan!" kudos-knoppen in Kampioenen
- Auto-update PWA banner (geen handmatige cache-clears meer nodig)
- Drop-off tracker (analytics events op alle stappen)
- 5-vragen default + verleng-knop
- ⚡ Snelstart-knop op homepage
- SEO: JSON-LD structured data
- Google Translate widget (alleen Engels)
- Naam-validatie (lege namen niet meer in scorebord)
- Share-tracking + Vriendenmaker award
- Deeplink `?play=obliterator` met conversie-flow

**Why:** deze lijst is opgebouwd uit meerdere Claude Code-sessies. Zonder deze memory raakt Mark het overzicht kwijt tussen sessies.

**How to apply:** Als Mark vraagt "wat stond er nog open?" of een nieuw Studiebol-gesprek start, begin met deze lijst (en check of items inmiddels zijn afgerond door kort in de code te kijken vóór je bevestigt dat iets nog open staat). Verzoeken voor nieuwe features → toevoegen aan deze file.
