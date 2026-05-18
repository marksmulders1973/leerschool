---
name: Maand 1 snoei — status & wat nog open is
description: Mark akkoord 2026-05-10 op ICP-knoop (Cito primair) + snoei-ronde. 4 chunks gedaan, alleen deletes. Wat staat nog open + besluit-punten voor volgende sessie.
type: project
originSessionId: 117df0ef-b194-40f2-8e60-f054bcb3b40a
---
# Maand 1 snoei — status 2026-05-10

Mark akkoord op ICP-knoop: **Cito-ouder = primair**, VMBO-dochter = persoonlijk side-project. Snoei-ronde gestart.

## Klaar (4 chunks, allemaal commits)

### Chunk 1 — homepage opschonen (commit 3176daf)
- Welkom-video autoplay UIT (`showWelcomeVideo` default false)
- 3-stap onboarding-modal UIT (`showOnboarding` default false)
- ONBOARDING_STEPS samengevouwen tot 1 zachte zin
- Leerkracht-tegel uit hero (3 → 2 hero-tegels)
- Leerkracht-link verplaatst naar footer-rij

### Chunk 2 — bottom-nav + due-banner (commit c4a5f15)
- Bottom-nav: 5 → 3 tabs (Home / Leren / Test). Scorebord + OBLITERATOR weg uit nav.
- StudentHome srDueCount-banner verwijderd (overlapte met bestaande topic-banner)
- spacedRepetition.js store BLIJFT achter schermen (toekomst-ready)

### Chunk 3 — ticker + brand-tekst (commit 4f925de)
- TICKER_ITEMS Cito-vriendelijker: weg = "Scorebord — strijd om de top",
  "Eerst leren, dan spelen", VMBO-jargon, "Leerkrachten", "100+ schoolmethodes",
  AI-bombarie. Toegevoegd: "rustige bijlesdocent in je broekzak", "uitleg op
  jouw niveau", "snap je iets niet? wij leggen het anders uit".
- BRAND.slogan + payoff aangescherpt rond didactische belofte ("écht begrijpen")

### Chunk 4 — StudentHome subtitle (commit a707f95)
- Header subtitle: "Klaar om te leren?" → "Welk kwartier wordt het vandaag?"
- Title: "Hey X! 🌟" → "Hoi X" (rustiger, bijlesdocent-toon)

### Chunk 5 — examen-knop weg + /spel-alias + 3D-teaser uit hero (commit 6eff571)
- "Oude examens"-knop uit StudentHome (twee examen-systemen verwarden — examen-paden via Leren-tab)
- /spel-alias toegevoegd in src/app/routes.js (PATH_ALIASES) → page obliteratorPlay
- 3D-kubus teaser uit hero (Mini3DTeaser blijft beschikbaar BINNEN wiskunde-paden voor in-pad gebruik)

## Bouw:delete-balans

12 wijzigingen, 0 nieuwe componenten, 12 deletes/simplifications. Perfect snoei-ratio.

## Wat NOG open staat

### Niet aangeraakt (bewust):
- **Marketing-quote homepage** ("Één kwartier per dag — een léven lang slimmer") — emotioneel beladen, persoonlijke Mark-quote
- **3D-kubus tegel hero** — veel werk in, vereist apart akkoord
- **OBLITERATOR-route** — bestaat nog op /obliteratorPlay (deep link), zoon kan blijven bouwen. Geen alias `/spel` toegevoegd zonder Mark's input.
- **Hall of Fame route** — bestaat nog op /leaderboard (deep link), niet in nav.
- **Pro-page** — geen directe nav-knop op HomePage al, alleen via TeacherHome upgrade-flow + quiz-limiet.

### Zou nog kunnen (besluit Mark nodig):
- **Examen-systemen mergen** — ExamensPage (PDF) + LearnPathsHub (speelbaar) → 1 ingang. Te groot voor zonder akkoord (raakt routing van 30+ plekken).
- **OBLITERATOR alias `/spel` route** — vriendelijker URL voor zoon
- **3D-kubus tegel uit hero** — concept-keuze
- **Welkom-modal "rondleiding"-knop** — als opt-in (state + render-blok bestaat al, alleen knop ergens)
- **A12 Web Push** — wacht op Mark's 6 setup-stappen (VAPID keys etc, zie `project_studiebol_a12_webpush_todo.md`)

## Test-checklist voor Mark

1. Open homepage in incognito → géén autoplay-video, géén onboarding-modal?
2. Hero toont 2 tegels (Basisschool + Student), géén Leerkracht?
3. Footer-rij heeft "👩‍🏫 Voor leerkrachten" link?
4. Bottom-nav: 3 tabs (Home / Leren / Test)? Scorebord + OBLITERATOR weg?
5. Ticker scrolt: ziet Cito-ouder herkenbare tekst, geen scorebord-strijd?
6. StudentHome begroeting: "Hoi X — Welk kwartier wordt het vandaag?"
7. /obliteratorPlay (deep link) werkt nog? (zoon kan blijven bouwen)
8. /leaderboard (deep link) werkt nog? (Hall of Fame bereikbaar voor wie het wil)

## Visie-bewaker-status

STOPLIST in `docs/STOPLIST.md`. Bouw:delete-balans deze sessie = 0:12. Excellent.
Geen nieuwe AI/gamification/sociaal/route/storage gemaakt.
Identiteit "rustige bijlesdocent in je broekzak" doorgevoerd in ticker, slogan, payoff, StudentHome-subtitle.

## Volgende stap

Mark testen → akkoord/feedback → besluiten over examen-systemen-merge OF stopen voor maand 2 (één geniale leerflow afmaken voor groep 7-8 Cito).
