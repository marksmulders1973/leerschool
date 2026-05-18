---
name: Leerkwartier — sessie-eindstand 2026-05-08
description: Snapshot van wat in audit-3-sessie is gedaan (5 sprints + 14 M6-batches) en wat open staat. Vervangt vorige status-memory uit 2026-05-06.
type: project
originSessionId: 5e009e69-407d-49fd-b589-58f027ca2824
---
# Sessie 2026-05-08 — eindstand

## Wat in deze sessie gebeurde

**13-agents-audit** (Playwright + 10 lens + 2 specialisten) → audit-rapport `audit-2026-05-08.md` in repo. HomePage was out-of-scope (Mark's expliciete keuze).

**Daarna 5 sprints + 14 M6-batches uitgevoerd, alles gepusht**:

### Sprint 1 — bug-stop ✅
- M1 niveau-filter `findLearnPathForQuestion` (level-bucket helpers po/vo-onder/vo-boven)
- M2 ResultsPage clutter (pulse-animatie weg, deel-app-sectie ingeklapt)
- M3 PlayQuiz Stop-dialog veiliger (Doorgaan = primary, Stoppen = klein rood)
- M5 wrong-overlay tip stopt met antwoord verklappen
- Q1 Cito-timer-tegenstrijdigheid (`Geen tijdslimiet` verborgen tijdens 60-min sessie)
- Q2 te brede triggerKeywords ingeperkt (% / vereenvoudigen / schaal weg)
- Q3 LearnPath ≈N min-badge per stap
- Q5 'Voortgezet' → 'Middelbaar' StudentHome
- Q6 OuderDashboard 'betaling volgt' tekst weg
- H11 /obliterator deeplink fix (route-mapping)
- H12 dev-jargon in /leren weg (rekenen/begrijpend-lezen/cito labels in SUBJECTS)
- M6-skeleton lint-script `npm run lint:hints`

### Sprint 2 — privacy-eerste ✅
- M7 OuderDashboard: addChild zet verified=false, score-queries filteren
- G2a feedback-screenshots bucket privatify + Supabase-policy + signed URLs
- G2b privacy.html: DPA-links + bewaartermijnen verduidelijkt
- G1 AgeGate v1 (`src/components/AgeGate.jsx` top-level overlay)
- K6 self-service "Verwijder al mijn data"-knop in OuderDashboard

### Sprint 3 — didactiek + a11y ✅
- M4 wrong-overlay achter "Meer uitleg ▼"-toggle
- G3a `src/shared/hooks/useFocusTrap.js` + integratie in 4 modals
- G3b reduce-motion universeel via `tokens.css` `*,*::before` met `!important`
- G3c OBLITERATOR canvas role/aria-label (scope-bug gefixt in `4b0ca5d` — vermijd JSX-template-literals met closure-vars)
- M6 batch 1: top-10 wrongHints herschreven

### Sprint 4 — content + a11y-vervolg ✅
- H6 Cito-advies-banner default ingeklapt achter '🔍 Wil je een ruwe richting zien?'
- Focus-trap iOS-install modal
- M6 batch 2: 7 hints
- G4a 5 PO-paden SLO-getagd

### Sprint 5 — strategisch (alleen veilige items) ✅
- S1 game-feature-flag (`VITE_HIDE_GAME_FOR_GUESTS`) — BottomNav + kwartier-toast + ResultsPage CTA + route-guard `/obliterator`
- S2 teacher-feature-flag (`VITE_HIDE_TEACHER_FOR_NON_TEACHERS`) — useEffect route-guard. HomePage Leerkracht-tegel niet aangeraakt.
- S3 3D-feature-flag (`VITE_HIDE_3D_IN_PATHS`) — LearnPath fallback-blok + 3D-roadmap PAUSE-status in `project_studiebol_3d_models.md`
- M6 batch 3-13: ~50 extra hints
- G4b/c: 8 VO-wiskunde + 7 VO-Nederlands SLO-getagd
- UX: SLO-badge zichtbaar in LearnPathsHub
- G4 batch 3: 8 zaakvakken/talen SLO-getagd

### M6 batch 14 ✅ (~76 hints totaal herschreven)

## Cumulatief eindbalans

- **60 tasks** afgewerkt
- **24 commits** gepusht (`3f82148` t/m `3c087fe`)
- **3 feature-flags** (game, teacher, 3D) — Mark moet zelf in Vercel activeren
- **28 paden SLO-getagd** uit ~44 — ~16 ongetagd
- **~76 wrongHints handmatig herschreven** uit ~580 lint-flagged. ~100 echte verklappers nog te doen
- **2 Supabase-migrations** (feedback bucket privatify)
- **5 nieuwe components/utils**: AgeGate, useFocusTrap, featureFlags, lint-wronghints script, MeeBezig-niveau-filter
- **147 tests groen**

## S4 Cito-content-pijler (gestart 2026-05-08) — Sprint A AFGEROND ✅

**Sprint A (12 paden) afgerond op 2026-05-08**:

Cluster 1 — vooraf (6 paden, commits eerder):
1. Maten en eenheden — `maten-eenheden`
2. Procenten PO — `procenten-po`
3. Verhoudingen PO — `verhoudingen-po`
4. Breuken PO — `breuken-po`
5. Cijferend rekenen — `cijferend-rekenen`
6. Tabellen en grafieken — `tabellen-grafieken`

Cluster 1b — rekenen (commit `8e67a12`):
7. Geld rekenen — `geld-rekenen`
8. Schatten en afronden — `schatten-afronden`
9. Redactiesommen — `redactiesommen-pad`
10. Vlakke figuren PO — `vlakke-figuren-po`
11. Negatieve getallen PO — `negatieve-getallen-po`

Cluster 2 — taal (commit `7c21adc`):
12. Werkwoord-tijden PO — `werkwoord-tijden-po`
13. Woordenschat PO — `woordenschat-po`
14. Spelling overige PO — `spelling-overige-po`
15. Woordsoorten PO — `woordsoorten-po`

Cluster 3 — studievaardigheden (commit `7c21adc`):
16. Schema's en stappenplannen — `schemas-stappenplannen-po` (subject: taal voor vindbaarheid)
17. Kaartlezen — `kaartlezen-po` (subject: aardrijkskunde)
18. Samenvatten / hoofdgedachte — `samenvatten-hoofdgedachte-po` (subject: taal)

Allen 5 stappen, ~12 min, SLO-getagd 1F, denkprikkel-wrongHints, level groep5-8.
Cito-rekenen-pijler nu ~100% gedekt; taal-pijler ~80%; studievaardigheden ~60%.

## Sprint B v1 ✅ (commit `860be9c`)

Client-side adaptief leren in `src/shared/adaptiveStore.js`:
- localStorage key `lk_adaptive_v1` houdt per (pathId, stepIdx) bij welke checks fout zijn gegaan
- Bij hervatten van stap: foute checks eerst (via `buildCheckOrder`)
- Eerste-poging-correct wist het uit de tracker
- Overview-badge `🔁 N` per stap met foute vragen
- "Verwijder al mijn data" in OuderDashboard wist ook adaptive store
- 11 tests groen (158/158 totaal)
- Geen DB-werk; Sprint B v2 (cross-device spaced-rep via Supabase) kan er later bovenop

## Sprint C v1 ✅ (commit `5f9c8f1`) + v1.5 (commit `d40ed7f`)

Mini-eindtoets uit eigen leerpad-checks:
- `src/shared/citoMixVragen.js` — gatherPoChecks (~150+ vragen uit 18 PO-paden), sampleCitoMix (default 50% rekenen / 35% taal / 15% studievaardigheden), scoreCitoMix per pijler
- `src/components/CitoLeerpadToets.jsx` — intro/running/done flow, 15/30/50 vragen, 15/30/60 min countdown, navigatie heen+terug, score per pijler met deep-links naar leerpaden van foute vragen
- Hookup als "✨ Bonus" optie in CitoPage (homepage onaangeraakt)
- Nieuwe route: `page === "cito-leerpad-toets"`
- 9 nieuwe tests; totaal **167 tests groen**

Voordeel boven bestaande Cito-stap-3-simulatie: gebruikt eigen kwaliteit-gecontroleerde checks met denkprikkel-wrongHints, niet de generieke TOPIC_QUESTIONS-bank.

v1.5 polish: review-scherm toont nu jouw antwoord + goede antwoord + wrongHint van het foute antwoord (denkprikkel) + deeplink naar leerpad. Adaptive sampling: tot 30% van de sample krijgt voorrang aan eerder-foute vragen via `adaptiveStore` (combineert Sprint B+C zonder DB-werk).

## Kind-accept-flow ✅ (commit `0b02b99`)
- `KindAcceptBanner` in StudentHome: leerling ziet banner wanneer ouder via "Naam invullen"-flow gekoppeld heeft. Accepteren zet `verified=true`, weigeren delete't de row.
- AVG art. 8 compliance verbetering. WhatsApp-koppelcode-flow blijft ongewijzigd (kind voert daar zelf code in).
- Caveat: RLS-policy op `parent_child_links` moet leerling eigen onbevestigde rows kunnen lezen + verified-update. Banner faalt stil als RLS blokkeert.

## M6 batch (commit `c2c6a3f`)
3 verklap-wrongHints geherformuleerd: kaartlezenPo schaal-hint, nederlandseStaatMaatschappijleer Eerste-Kamer-hint en jaartal-hints. Lint-script telt nog ~545 verdachte hints; ~70% false-positive (check-berekeningen). Voortzetting in latere batches.

## G4 batch 4 ✅ (commit `5980d60`)
**81/81 paden volledig SLO-getagd**. 36 paden in deze batch: 15 wiskunde-VO (klas1-vwo t/m havo4-5), 8 talen (NL-spelling/woordsoorten + Engels V1/V2/woordenschat + Duits + Frans), 10 zaakvakken (geschiedenis WO2+80jr, aardrijkskunde, scheikunde, natuurkunde, biologie-genetica, beco, economie, maatschappijleer), 2 PO-natuur. Niveau-conventie: 1F-3S voor taal+rekenen, A1-B1 moderne talen, HAVO/VWO bovenbouw-wiskunde, "VO-onderbouw"/"VMBO-GT eindexamen"/"PO-kerndoel" voor vakken zonder formele schaal.

## Nog te doen
- **Sprint B v2 (G7)**: cross-device sync via Supabase `question_mastery`-tabel + SM-2/Leitner spaced-rep. Vereist migratie + grote PlayQuiz-rewrite — wachten op Mark's expliciete go.
- **RLS check op parent_child_links**: bevestigen dat leerlingen onbevestigde rows kunnen lezen en updaten via banner.
- M6+ verdere batches verklap-wrongHints.
- G4 batch 4: ~16 paden ongetagd (frans, duits, genetica, etc.).

## Eerstvolgende acties (next sessie)

**Snelle pluk-acties (low-risk)**:
- M6 batch 15+: ~100 verklappers nog over (`npm run lint:hints`). Tempo: 5 hints per batch.
- G4 batch 4: ~16 paden ongetagd (frans, duits, genetica, pincode-economie, redox-scheikunde, periodiek-systeem, etc.)

**Middelgroot (vereist akkoord)**:
- Anthropic ZDR-addendum tekenen in Anthropic-console (Mark zelf)
- Kind-accept-flow voor parent_child_links (verified=true via koppelcode in StudentHome)
- AgeGate v2: e-mail-verificatie via Edge Function

**Groot (Mark moet expliciet aan tafel)**:
- G5 App.jsx splitsen (1555r) — Context-Provider
- G6 ObliteratorGame splitsen (9367r) — REFACTOR.md staat klaar, dedicated sessie
- G7 per-vraag spaced-rep — DB-schema-wijziging
- S4 Cito-content groep 6-8 — content-werk per pad

## Vercel feature-flags die nu te flippen zijn

- `VITE_HIDE_GAME_FOR_GUESTS=true` → game/Hall-of-Fame verbergen voor niet-ingelogde Cito-ouder-bezoekers
- `VITE_HIDE_TEACHER_FOR_NON_TEACHERS=true` → /leerkracht-routes redirect home voor non-teacher
- `VITE_HIDE_3D_IN_PATHS=true` → 3D-stappen tonen fallback-tekst (data-besparing)

## Belangrijke leerpunten van deze sessie

1. **JSX-template-literals met closure-vars zijn gevaarlijk in monoliete files** — sprint-3 G3c canvas aria-label gebruikte `${score}` wat in `function update()` leeft, niet JSX-scope. Resultaat: `score is not defined` ReferenceError. Browser-test had 'm gevangen.
2. **Lint-output van wrongHints is grotendeels false-positive** — ~580 hits maar slechts ~175 zijn echte verklappers. De rest zijn feiten/eliminatie/educatieve context. Hand-pick is nodig, niet bulk-replace.
3. **HomePage IS heilig** voor Mark — alleen security/privacy-fixes (welkomst-video, age-gate als modal die er bovenop zit) zijn toegestaan.
