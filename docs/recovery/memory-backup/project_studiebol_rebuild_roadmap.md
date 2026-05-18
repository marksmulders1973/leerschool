---
name: Studiebol — rebuild roadmap (Prio 1)
description: De 10 prioriteit-1 verbeterpunten uit de architectuur-audit van 2026-04-29. Volgorde = hefboom. Werk punt-voor-punt af, niet meer paden bouwen tot fundament klopt.
type: project
originSessionId: 986a1d0d-40bd-4171-a71d-3e72c5772960
---
Op 2026-04-29 hebben we een diepe architectuur-audit gedaan (senior-perspectief, geen beleefdheid). Mark heeft expliciet gevraagd alle 10 actiepunten als **Prio 1** te markeren en punt-voor-punt af te werken vóór nieuwe features/leerpaden. Bewust **niet** in deze ronde: meer leerpaden, OBLITERATOR-uitbreiding, i18n, Pro-features.

**Volgorde + status**:

| # | Punt | Tijd | Status |
|---|---|---|---|
| 1 | TypeScript + tests-fundament (Vitest, ESLint, Prettier) | 3-4d | ✅ klaar 29-04 (commit 88519ed): tsconfig allowJs, Vitest+RTL+jsdom, Prettier v3, 34 tests groen rond mastery/subjectMapping/learnPaths. ESLint + husky uitgesteld. |
| 2 | App.jsx opsplitsen + React Router (URL als state) | 4-5d | 🟡 deel 1 klaar 29-04 (commit 22df0a7): BrowserRouter + routes.js sync. Deel 2 (componenten extracten naar feature-mappen) nog open. |
| 3 | Auth + RLS dichtzetten (auth.uid() = user_id) | 3d | ✅ klaar 29-04 (commits f4aba81 + bf9f73e): src/auth.js met ensureSession/anon sign-in, RLS strikt op topic_mastery + learn_progress + hall_of_fame + learn_path_waitlist. Mark heeft 'Allow anonymous sign-ins' aangezet in Supabase dashboard. mastery.js vult user_id automatisch via getCurrentUserId() — geen RLS-fails meer. |
| 4 | Bundle splitsen (lazy ObliteratorGame, AdminFeedback, etc.) | 2d | ✅ klaar 29-04 (commit 9502433): 28 lazy chunks voor secondary pages, Suspense-boundary. Hoofdbundle blijft 3,3 MB ivm constants.js (eager via startGame) — echte initial-load-reductie volgt bij P1.9. |
| 5 | Design system v0 (3 kleuren, Button/Card/Badge tokens) | 3d | ✅ klaar 29-04 (commit 252eaa4): shared/subjects.js (3 duplicaten weggewerkt), shared/tokens.css (CSS vars: primary/accent/alert + scale/radii/typo), shared/ui/Button.jsx + 5 tests. Card/Badge/ProgressBar volgen op verzoek. |
| 6 | Homepage herontwerp (één mastery-CTA, schrap rolkeuze) | 2d | 🟡 deel 1 klaar 29-04 (commit 82a7b8e): MasteryCTABanner toont primaire actie voor terugkerende leerlingen. Bestaande "Wat wil je doen?"-flow blijft eronder. Volledige redesign (rolkeuze schrappen, ticker minder prominent, etc.) volgt. |
| 7 | Mini-quiz adaptief (drempel 2/3, topic-pull bij zwak) | 3d | 🟡 deel 1 klaar 29-04 (commit 02aef97): drempel 2/3 + recordAnswerForPath voor mastery-tracking + onLessonReturn (scroll naar uitleg). Topic-pull op basis van zwakke onderwerpen volgt later (vereist AI-vraag-tagging op topic). |
| 8 | Leaderboards naar achtergrond (mastery voorgrond) | 1d | ✅ klaar 29-04 (commit 136947e): TickerBanner verbergt voor terugkerende leerlingen (hebben naam in localStorage). Mastery-CTA neemt de plek over. Hall of Fame/Kampioenen blijven via bottom-nav-tab toegankelijk. |
| 9 | Vragen + leerpaden naar Supabase (constants.js leeg) | 1w | ⚪ open |
| 10 | Spaced repetition (Leitner-light) + ouder-dashboard v0 | 1w | ✅ klaar 29-04 (commits 97f789a + be0de7f + d3012e3): kolommen next_due_at + streak, Leitner-intervals 1/3/7/21/60/120 dagen, recordAnswer schrijft mee, loadDueTopics. recommendNextTopic geeft due-records voorrang met reason='due'. MasteryCTABanner toont 'Tijd voor refresher' bij due. Ouder-zicht via /voortgang?leerling=Naam (read-only, banner). 67 tests. **Open**: auth-check op ouder-modus + tijd-grafiek (later). |

**Belangrijke bevindingen uit audit (waarom dit nodig is)**:
- App.jsx ~1000 regels, god-object met routing+state+businesslogica
- constants.js 6383 regels, 3625 hardcoded vragen in één file (eager bundled)
- ObliteratorGame.jsx ~3000 regels (Geometry Dash-kloon, niet leer-gerelateerd)
- Bundle 808 KB gzip op één chunk — mobiele LCP-killer
- RLS in praktijk open (`anon insert/select with check (true)`) op nieuwe tabellen
- 3 verschillende `SUBJECT_LABELS`-objecten, geen source of truth
- Geen TypeScript, geen tests, geen routing-library (handmatige `setPage`)
- 779 "users" zijn score-jagers, geen echte leerlingen — dus product is voor verkeerd publiek geoptimaliseerd
- Mastery-systeem is gebouwd (sinds 2026-04-29) maar wordt nog niet gebruikt om beslissingen te sturen

**Why:** Mark wil Studiebol klaar maken voor zijn gezin als eerste echte testers en daarna pas promoten. Zonder dit fundament breekt elke nieuwe feature drie oude.

**How to apply:** bij start van een nieuwe sessie checken welke P1.x nog open is, doorpakken op de eerstvolgende. Niet doorbouwen aan content (paden, vragen) tot 1-3 (TS/router/auth) klaar zijn.
