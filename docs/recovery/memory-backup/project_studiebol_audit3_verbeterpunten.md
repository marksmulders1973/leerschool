---
name: Leerkwartier — audit-3 verbeterpunten (2026-05-08)
description: 13-agents-audit, gestructureerde sprint-volgorde. Vervangt audit-2 als actuele werklijst.
type: project
originSessionId: 5e009e69-407d-49fd-b589-58f027ca2824
---
13-agents-audit op 2026-05-08 (Playwright + 10 lens + 2 specialisten). HomePage was out-of-scope. Vol rapport in repo: `audit-2026-05-08.md`.

**Why**: scope-uitbreiding van vorige 10-lens-audit (2026-05-06) naar 13 met Playwright-flow-tests + concrete specialisten. Bevestigde de "leg uit"-bug + bracht open privacy/a11y/ICP-mismatch in beeld die in audit-2 niet zo expliciet waren.

**How to apply**: gebruik dit als actieve werklijst. Sprint-volgorde:

**Sprint 1 (week 1) — bug-stop**
- M1 niveau-filter `findLearnPathForQuestion` + PO-varianten breuken/procenten/verhoudingen (kritisch — de tweede helft van de bug van vandaag)
- M5 PlayQuiz wrong-overlay tip stopt met antwoord verklappen (`PlayQuiz.jsx:683-694`)
- Q1+Q2 quick fixes (Cito timer-tegenstrijdig, triggerKeywords te breed: %, vereenvoudigen, schaal)
- M2 ResultsPage clutter → 1 primary CTA + ⋯-sheet

**Sprint 2 (week 2) — privacy-eerste (boete-risico)**
- G1 ouderlijke-toestemming-flow + age-gate vóór data-opslag (AVG art. 8)
- G2 bucket `feedback-screenshots` private + signed URL; DPA-links in privacy.html; Anthropic ZDR-addendum
- M7 OuderDashboard koppelen op `auth.uid` ipv `player_name`-string
- M3 PlayQuiz Stop-dialog veilige UI (geen groene primary "leg uit" naast destructieve "Stoppen")

**Sprint 3-4 — didactiek + a11y**
- M4 wrong-overlay default afslanken (vraag + goed + 1 knop, "Meer uitleg ▼")
- M6 wrongHints lint + top-10 herschrijving (~180 verklappers in math-paden)
- G3 focus-trap utility + reduce-motion in inline-styles + OBLITERATOR text-alt + ResultsPage skip-knop
- G4 SLO/referentieniveau-tags op alle leerpaden

**Sprint 5+ — refactor + ICP-focus**
- G5 App.jsx (1555r) splitsen: Context-Provider, route-componenten, prop-drilling weg
- G6 ObliteratorGame.jsx (9367r) splitsen volgens REFACTOR.md
- G7 Per-vraag spaced rep (Leitner item-level)
- S1-S4: OBLITERATOR + PvP achter feature-flag, Teacher-flow uit hoofdnav, 3D pauzeren, content-investering Cito groep 6-8

**Niet doen** (audit-bevinding maar lagere prio op dit moment):
- Audit-2's Q-acties zijn deels achterhaald; deze lijst vervangt die.
- HomePage was bewust out-of-scope; geen acties.

**Status na uitvoer-sessie 2026-05-08 (60 min zelfstandig)**:

✅ Sprint 1 grotendeels af (commits `3f82148` + `ba5668c` + later batch):
- M1 niveau-filter (kern-bug van vandaag) — 16 tests groen, levelToBucket + levelsCompatible helpers, beide PlayQuiz call-sites quizLevel mee.
- M5 wrong-overlay tip stopt met antwoord verklappen
- Q1 Cito timer-tegenstrijdig (per-vraag-tekst verborgen tijdens 60-min sessie)
- Q2 triggerKeywords ingeperkt (procenten %, breuken vereenvoudigen, verhoudingen schaal)
- Q5 'Voortgezet' → 'Middelbaar' in StudentHome
- Q6 OuderDashboard 'betaling volgt' tekst weg
- H11 /obliterator deeplink fix (route-mapping naar obliteratorPlay)
- H12 SUBJECTS uitgebreid met rekenen/begrijpend-lezen/cito (dev-jargon weg)
- Q3 LearnPath '≈N min'-badge per stap zichtbaar
- M3 PlayQuiz Stop-dialog veiliger (Doorgaan = primary autoFocus, Stoppen = klein rood text)
- M6-skeleton lint-script `scripts/lint-wronghints.mjs` + `npm run lint:hints` — eerste run 580 verdachte hints in 33 files (startpunt voor gefaseerde herschrijving)
- M2 ResultsPage clutter — pulse-animatie OBLITERATOR-knop weg, Deel-app-sectie default ingeklapt achter toggle

✅ Sprint 2 (privacy-eerste, 2026-05-08 vervolg):
- M7 OuderDashboard: addChild krijgt verified=false, score-queries gefilterd op verified, UI toont 🔐-badge en uitleg-blok bij ongeverifieerd kind. RLS-doorbouw (kind-accept-flow) staat nog open voor v2.
- G2a feedback-screenshots: bucket op `public=false` gezet via migration `feedback_screenshots_private`, RLS-policies (anon insert / admin select via auth.email check). Code update: `screenshot_path` kolom toegevoegd, HomePage feedback bewaart path naast publicUrl, AdminFeedback gebruikt `createSignedUrl(600s)` als path beschikbaar.
- G2b privacy.html: DPA-links per verwerker (Supabase, Vercel, Google, Anthropic), Anthropic ZDR-vermelding, bewaartermijnen verduidelijkt (incl. screenshots in private bucket), self-service delete-knop genoemd. Datum 8 mei 2026.
- G1 AgeGate v1: nieuwe `src/components/AgeGate.jsx` modal-component, top-level in App.jsx (z-index 10001). Vraagt leeftijdscategorie (<13 / 13-15 / 16+); bij <16 vraagt ouder-aanwezig-bevestiging + optioneel ouder-e-mail. Bewaart in localStorage `lk_age_consent_v1` met timestamp. v2 = e-mail-verificatie via Edge Function.
- K6 self-service delete: knop "Verwijder al mijn data" in OuderDashboard, alleen voor ingelogde gebruikers. Doorloopt 17 tabellen (user_id + parent_user_id matching). Anonieme rijen op player_name blijven staan (kunnen niet veilig worden gematched zonder eigenaarsbewijs).

🚧 Sprint 2 nog niet af (parking lot):
- Anthropic ZDR-addendum daadwerkelijk getekend in Anthropic console (Mark moet zelf doen — buiten code-scope).
- Kind-accept-flow (RLS-update + UI in StudentHome om koppelcode in te voeren → parent_child_links.verified=true te zetten).
- Anonieme spelers-data ook deletable maken (vereist auth-pad voor leerlingen of admin-delete-flow).
- Age-gate v2: e-mail-verificatie via Supabase Edge Function.

✅ Sprint 3 (didactiek + a11y, 2026-05-08 vervolg):
- M4 wrong-overlay afslanken: uitleg+tip+YouTube+fout-melden achter '📖 Meer uitleg, tips & YouTube'-toggle (default ingeklapt). Default zichtbaar = vraag + jouw-antwoord vs goed-antwoord + 1 hoofdknop.
- G3a focus-trap utility: nieuwe `src/shared/hooks/useFocusTrap.js` — Tab/Shift-Tab cycleert binnen modal, Esc triggert onEsc, focus-restore bij close. Geïntegreerd in PlayQuiz wrongOverlay + quitConfirm + AgeGate.
- G3b reduce-motion: `tokens.css` uitgebreid met universele `*,*::before,*::after`-rule met `!important` zodat inline-style animations (pulse/slideUp/popIn/wrongShake) ook gedeactiveerd worden bij `prefers-reduced-motion: reduce`.
- G3c OBLITERATOR a11y: canvas heeft nu role='img', dynamische aria-label met score+lives+level, tabIndex=0. ResultsPage gate werkt al niet-blokkerend (Home/Next-knoppen onderaan dienen als skip).
- M6 top-10 wrongHints herschreven: volgordeBewerkingen (3×), pythagoras, kwadratenWortels, breuken, lineaireFormules, vergelijkingenOplossen, kwadratischeVergelijkingen, differentieren, exponentieel — alle van "Reken: ... = X" naar denkprikkel-vraag. Andere ~170 hints staan nog in lint-output (`npm run lint:hints`).

🚧 Sprint 3 nog niet af (parking lot):
- Resterende ~170 wrongHints uit lint-output handmatig herschrijven (gefaseerd, 1 file per sessie).
- Focus-trap nog niet in alle modals (ResultsPage iOS-install, OuderDashboard delete-confirm via window.confirm).
- G4 SLO/referentieniveau-tags op alle 60+ leerpaden — handwerk, schuift door naar later.

✅ Sprint 4 (didactiek + a11y-vervolg + content, 2026-05-08):
- H6 Cito-simulatie advies-banner ingeklapt achter '🔍 Wil je een ruwe richting zien?' toggle. Bij open: extra waarschuwing 'Dit is geen advies — minstens 3 simulaties verspreid over een paar dagen voor een betrouwbaarder beeld'. Voorkomt vertrouwensbreuk na 1 oefening.
- Focus-trap geïntegreerd in ResultsPage iOS-install modal (role/aria-modal/aria-label toegevoegd).
- M6 batch 2: 7 hints herschreven in volgordeBewerkingen (extra), machten, negatieveGetallen (×2), kansrekening (×2), vergelijkingenOplossen (extra). Patronen 'Reken: ... = N' / 'Check: a-b=c' vervangen door denkprikkels.
- G4a: referentieniveau-tags toegevoegd aan 5 PO-paden (klokkijken=1F, volgordeBewerkingen=1F/1S, begrijpendLezenStrategie=1F/1S, citoStrategieenGroep8=1F/1S, dierenSeizoenenNatuur=SLO-kerndoelen 39-42). Veld `referentieNiveau` + `sloThema` (of `sloKerndoelen` voor natuur).

🚧 Sprint 4 nog niet af (parking lot):
- M6 batch 3-4: ~160 hints over in 30+ files. Tempo: 5-10 hints per sessie.
- G4 referentieniveau-tags voor andere 50+ paden (VO-paden = 2F/3F/2S/3S, taalpaden separaat).
- Anti-game lock dynamisch op vraag-lengte (Q4 — niet kritiek).

✅ Sprint 5 (content-vervolg + zichtbaarheid, 2026-05-08):
- M6 batch 3: 4 hints herschreven in stelsels, logaritmen, rekenenMetLetters, statistiek. Patronen 'Check beide: ... = N' / 'tot welke macht moet 2' vervangen door denkprikkels.
- G4b VO-wiskunde: 8 paden getagd met referentieNiveau + sloThema (breuken/procenten/verhoudingen/negatieveGetallen/kwadratenWortels/pythagoras = 2F · Getallen/Verhoudingen/Meten; rekenenMetLetters/vergelijkingenOplossen = 2F/2S · Verbanden).
- G4c VO-Nederlands: 7 paden getagd. Onderbouw 2F (zinsontleding, werkwoordsvervoeging, spelling), bovenbouw 3F/3S (argumentatieleer, schrijfvaardigheid, tekstanalyse, literatuurgeschiedenis).
- UX-toevoeging: SLO-niveau-badge zichtbaar gemaakt in LearnPathsHub naast level-pill. Tooltip met sloThema. Alleen rendering — geen filter-functionaliteit nu.

✅ Sprint 5 vervolg — S1 (Mark akkoord 2026-05-08):
- S1a: `src/shared/featureFlags.js` met `gameVisibleForUser(authUser, hasDeepLink)` + `urlHasGameDeepLink()`. Default false (huidig gedrag). Activeren via Vercel env-var `VITE_HIDE_GAME_FOR_GUESTS=true`.
- S1b: BottomNav verbergt Scorebord + OBLITERATOR-tabs voor niet-ingelogd + flag-aan. Tabs gemarkeerd met `gameRelated: true`. authUser-prop doorgegeven.
- S1c: HomePage kwartier-toast OBLITERATOR-knop alleen voor ingelogd of deeplink-bezoeker (via `gameVisibleForUser`-check).
- S1d: ResultsPage OBLITERATOR-CTA vervangen door '🔓 Log in om mini-game te spelen' voor guest + flag. Cito-ouder ziet niet langer 'spelletje als beloning'.
- S1e: App.jsx route-guard op `obliteratorPlay`: guest + flag → redirect home. Deeplink-flow (`obliteratorDirect` via `?play=obliterator`) blijft ongewijzigd voor viral-hook.

**Activatie**: Mark moet zelf in Vercel-dashboard env-var `VITE_HIDE_GAME_FOR_GUESTS=true` zetten + redeploy. In dev (npm run dev) blijft default false zodat lokale tests niet breken.

140 tests groen (5 nieuwe in featureFlags.test.js).

✅ Sprint 5 vervolg — S2 (Mark akkoord 2026-05-08):
- S2a: `teacherFeaturesVisibleForUser(authUser, userRole)` toegevoegd aan featureFlags.js. Leest `VITE_HIDE_TEACHER_FOR_NON_TEACHERS`. Default false. Bij true: alleen authUser met role='teacher'/'leerkracht' OF admin-email mag teacher-pages zien. 4 tests (144 totaal groen).
- S2b: useEffect-route-guard in App.jsx. Bij teacher-pages (teacher-home, create-quiz, quiz-preview, class-manager, teacher-progress, lobby) + flag-aan + non-teacher → redirect home + GA-event `teacher_route_blocked`. Homepage Leerkracht-tegel NIET aangeraakt — Mark zei 'homepage is heilig'.

**Activatie**: Vercel env-var `VITE_HIDE_TEACHER_FOR_NON_TEACHERS=true` + redeploy. Cito-ouder die per ongeluk `/leerkracht`-URL opent → home. Mark als admin behoudt altijd toegang.

✅ Sprint 5 vervolg — S3 (Mark akkoord 2026-05-08):
- S3a: `interactive3DEnabled()` toegevoegd aan featureFlags.js. Leest `VITE_HIDE_3D_IN_PATHS` (default false). 3 nieuwe tests (147 totaal groen).
- S3b: LearnPath.jsx render-check op 3D-componenten. Bij flag-aan: skip `<step.interactiveComponent>` en toon fallback-blok '⏸ De interactieve 3D-versie staat tijdelijk uit' + 'Stap voltooid'-knop. Bestaande 3D-bundle (Three.js 513 KB) wordt nog steeds geladen via lazy import — code-splitting kan in toekomst sparen door dynamic imports te gaten op flag.
- S3c: `project_studiebol_3d_models.md` bijgewerkt met PAUSE-status: geen nieuwe 3D-modellen tot post-PMF (€5k MRR of bewezen ouder-conversie). Bestaande modellen blijven werken als bewijs van diepte.

**Activatie**: Vercel env-var `VITE_HIDE_3D_IN_PATHS=true` + redeploy. 3D-stappen tonen fallback-tekst + Stap-voltooid-knop. Default false zodat huidig gedrag bewaard blijft.

✅ M6 batch 4 (2026-05-08): 6 hints herschreven in 6 nieuwe paden:
- periodiek (sinus 90°)
- coordinatenstelsel (x/y richting)
- vlakkeFiguren (bissectrice-deling)
- klokkijken (cijfers/minuten)
- goniometrie (rechthoekige driehoek)
- elektriciteitNatuurkunde (Wet van Ohm)

Cumulatief over 4 batches: ~27 hints herschreven uit ~580 verdachten in 33 files. Resterende ~150 echte verklappers + ~400 false-positives (feiten/eliminatie). Lint-script `npm run lint:hints` blijft startpunt.

✅ M6 batch 5 (2026-05-08): 7 hints herschreven:
- vergelijkingenOplossen (8x=64): 'wat heft keer-doen op?'
- machten (5²): 'welke spreek je eerst uit?'
- stelsels (substitutie): 'vervang y door 2x in tweede vergelijking'
- parabolen (tabel-tellen): 'heb je x=0 meegeteld?'
- pythagoras (a²+b²): 'doe je eerst + of eerst kwadrateren?'
- breuken (gemeenschappelijke noemer): 'getal waar BEIDE in passen'
- exponentieel (groeifactor): 'nieuw/oud of oud/nieuw?'

Cumulatief 5 batches: ~34 hints herschreven. Resterende ~140 echte verklappers gefaseerd.

✅ M6 batch 6 (2026-05-08): 6 hints in 6 paden:
- kwadratenWortels (7²): 'welke bewerking zit in een kwadraat?'
- differentieren (helling): 'welke letter is helling — a of b?'
- kansrekening (P even getal): 'tel de even vlakken op een dobbelsteen'
- logaritmen (log10): 'welke exponent vraag je?'
- kwadratischeVergelijkingen (x²=49): 'twee oplossingen — welke andere x voldoet?'
- lineaireFormules (sprong-pattern): 'reken de verschillen — zijn ze gelijk?'

Cumulatief 6 batches: ~40 hints herschreven uit ~580 lint-flagged. Resterende ~135 echte verklappers gefaseerd.

✅ M6 batch 7 (2026-05-08): 6 hints in 6 paden:
- machten (a⁰): 'welke regel geldt voor exponent 0?'
- periodiek (sin maximum): 'waar bereikt de sinus z'n top?'
- rekenenMetLetters (4(x+7)): 'vermenigvuldig de 4 met BEIDE termen'
- statistiek (gemiddelde): 'welke stap mis je nog na de som?'
- exponentieel (groeifactor 7%): 'factor voegt 'oude' deel mee: 1+procent'
- (extra reserve)

Cumulatief 7 batches: ~46 hints herschreven uit ~580 lint-flagged. Resterende ~130 echte verklappers gefaseerd.

✅ M6 batch 8 (2026-05-08): 4 hints in 4 paden:
- vergelijkingenOplossen (x+8=15): 'welke bewerking is de tegenhanger van plus?'
- machten ((-3)²): 'wat gebeurt er bij even exponent met een minteken?'
- kwadratenWortels (8²): 'welke bewerking zit in een kwadraat?'
- exponentieel (4% afname): 'welke kant moet de factor op?'

Cumulatief 8 batches: ~50 hints herschreven uit ~580 lint-flagged. Resterende ~125 echte verklappers gefaseerd.

✅ M6 batch 9 (2026-05-08): 5 hints in 5 paden:
- breuken (gelijke noemer optellen): 'wat doe je met tellers vs noemers?'
- pythagoras (a²+b² volgorde): 'kwadrateer eerst beide getallen, tel dan op'
- negatieveGetallen (4-6=-2): 'welk getal is groter, wat zegt dat over teken?'
- volgordeBewerkingen (2+3×4): 'welke bewerking gaat eerst, × of +?'
- coordinatenstelsel (kwadrant): 'kwadrant II heeft NEGATIEVE x — klopt dat hier?'

Cumulatief 9 batches: ~55 hints herschreven uit ~580 lint-flagged. Resterende ~120 echte verklappers gefaseerd.

✅ M6 batch 10 (2026-05-08): 5 hints in 5 paden:
- differentieren (helling y=x² in (3,9)): 'welke formule geeft de helling?'
- kansrekening (zekere kans): 'welke kans betekent zeker — 0 of 1?'
- kwadratischeVergelijkingen (factoriseren x²+4x): 'welke gemeenschappelijke factor?'
- krachtenNatuurkunde (F=ma): 'vul je antwoord terug in F=ma en kijk of 't klopt'
- (extra) — totaal 4 commits-hints geteld in commit-msg

Cumulatief 10 batches: ~59 hints herschreven uit ~580 lint-flagged. Resterende ~115 echte verklappers gefaseerd.

✅ M6 batches 11-13 (2026-05-08): 13 extra hints herschreven over:
- vergelijkingenOplossen (3×): bewerkings-tegenhanger-prikkels
- machten (3×): exponent-regels en volgorde
- kwadratenWortels: wortel-bewerking
- logaritmen: ln(1) exponent-prikkel
- breuken: gelijknamig maken eerst
- statistiek: sorteer-eerst
- exponentieel (2×): groeifactor-uitleg
- lineaireFormules: y-snijpunt-prikkel
- kansrekening (2×): zekere kans + 1/5 als %
- rekenenMetLetters: distributie-prikkel
- vlakkeFiguren: trapezium-formule

Cumulatief 13 batches: ~72 hints herschreven uit ~580 lint-flagged. Resterende ~105 echte verklappers gefaseerd.

✅ G4 batch 3 (2026-05-08): 8 VO-paden SLO-getagd:
- presentTensesEngels: 2F (A2/B1 ERK)
- pastTensesEngels: 2F/2S
- celBiologie: 2F kerndoelen 26-28
- voortplantingHormonenBiologie: 2F kerndoelen 33-34
- atoombouwScheikunde: 2F/3F
- krachtenNatuurkunde: 2F
- tijdvakkenGeschiedenis: 2F kerndoel 47
- klimatenAardrijkskunde: 2F kerndoelen 42-43

Totaal getagd: 28 paden (5 PO + 8 VO-wiskunde + 7 VO-Nederlands + 8 zaakvakken/talen). ~16 paden ongetagd.

🚧 Sprint 5 niet aangeraakt (te risicovol/groot zonder Mark-akkoord):
- **G5 App.jsx splitsen** (1555r god-file, 27 useStates → Context-Provider + route-componenten). Vereist test-suite uitbreiding én tijd. **Wacht op Mark's go-akkoord.**
- **G6 ObliteratorGame splitsen** (9367r god-file → engine/level/hud/pvp). REFACTOR.md staat klaar maar zonder browser-test-protocol introduceer ik silent bugs. **Wacht op Mark's go-akkoord** + dedicated sessie waar Mark speelt na elke stap.
- **G7 per-vraag spaced-rep** (Leitner item-level): vereist topic_mastery schema-wijziging + recordAnswer-API rewrite. **Wacht op Mark's go.**
- **S2-S4** (Teacher uit hoofdnav, 3D pauzeren, content-shift Cito 6-8). Product-keuzes — **Mark beslist, niet Claude**.

🚧 Sprint 5 nog niet af (low-risk parking lot):
- M6 batch 4+: ~155 hints over uit lint-output (`npm run lint:hints`). Kan gefaseerd doorgaan in sprint 6.
- G4 batch 3: nog ~40 paden zonder referentieNiveau-tag (engels, biologie, geschiedenis, aardrijkskunde, natuurkunde, scheikunde, etc.).
- LearnPathsHub: filter op referentieNiveau (bijv. "alleen 2F" voor vmbo-leerling) als follow-up.

**Note voor next session**: H10 leerkracht item-analyse en H7 leerkracht-snelmodus stonden in audit maar niet in deze 13-task list. Toevoegen aan sprint-plan.
