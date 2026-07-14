# Autonoom-backlog (2026-05-10 → 2026-05-24)

> Volgorde = prioriteit. Pak bovenste niet-afgevinkte taak.
> Voor regels zie `CLAUDE.md` → "Autonome modus".

## Doel

Cito + examens versterken. Drie type werk:
1. **uitlegPad toevoegen** aan bestaande paden zonder uitlegPad
2. **Authentieke examen-vragen toevoegen** (alleen als bron-PDF beschikbaar via `examenblad.nl`)
3. **Nieuwe Cito-leerpaden** voor onderwerpen die nog ontbreken

**Leidend principe** (zie CLAUDE.md → "Kern-flow"): examen-vraag → "begrijp je dit?" → uitlegPad → leerpad a-z → terug naar vraag. Elke nieuwe content moet deze loop dichten — geen losse leerpaden zonder examen-anker, geen examen-vragen zonder leerpad-link.

---

## 🎯 SPRINT — Concurrentie-audit 8 jul 2026 (Mark: "sla op en begin eraan")

> Uit 2-agent-audit (concurrentie-onderzoek + frisse-ogen product-audit, 8 jul).
> Verdict: product 7, bereik 3. Didactische kern beter dan Squla; brandstofleiding
> naar 1000 gebruikers ontbreekt. Volgorde = impact ÷ moeite.

- [x] ✓8/7 **A8.1 Wekelijks ouder-rapport per e-mail** — GEBOUWD (commit c1199e2 + dedupe-fix). `api/send-ouder-rapport.js`: maandag-mail per ouder met geverifieerde koppeling (onderwerpen v/d week + score-balkjes + sterkste/aandachtspunt + B6-niveau-sectie; niet-geoefend → eerlijke nudge). Lift mee op de dagelijkse lesmateriaal-cron (Hobby = max 2 crons), admin_meta-stempel tegen dubbel versturen, RPC `ouder_weekrapport_kandidaten` (service_role-only). Koppel-CTA toegevoegd aan weekmail. E2E getest met lokale Resend-key (testmail bij Mark in Hotmail, preview: scripts/ouder-rapport-preview.html). **CHECK maandag 13 jul:** dagrapport-mail moet "📊 ouder-rapport: 1" tonen (huidige ontvangers: 1 koppeling Mark↔Brian).
- [~] **A8.2 Begrijpend lezen 3 → ~15 paden** — ✓8/7 batch 1 (4 paden, commits 1a589be..5a54942): verwijswoorden / woordbetekenis-context / conclusies-trekken / tekstdoel-schrijversdoel. Nu 7 v/d ~15. **Batch 2 (volgende):** feiten-details-opzoeken, tekstverbanden-oorzaak-gevolg (leesbril, niet taal-bril), alinea-functies + tussenkopjes, nieuwsbericht-lezen (wie/wat/waar/wanneer/waarom). **Batch 3:** brief/e-mail-lezen, schema+tekst-combi, lange toets-teksten g8 (2 teksten ~350 w), poëzie/verhaal-diepte g7-8. Werkwijze: 4 parallelle schrijf-agents met template begrijpendLezenTekstenPo.js + harde eisen (≤18 checks, eigen teksten, hint-regels), daarna manifest+lint+gate+build+commit-per-pad.
- [ ] **A8.3 Streak + dagdoel naar Supabase** — retentie woont nu in localStorage (src/shared/dailyGoal.js) en verdampt per apparaat. Kolommen aan profiel + sync in addSeconds().
- [ ] **A8.4 🟡 MARK: A12 web push live zetten** — code af sinds mei; ~30 min handwerk: VAPID-keys + Vercel env + Supabase secrets + migration + deploy + cron (zie memory project_studiebol_a12_webpush_todo).
- [x] **A8.5 Wiskunde-chunk (4,4 MB) splitsen** ✅ 14 jul: manualChunks-bucket losgelaten (niets importeert index.js meer) → per-pad chunks, grootste chunk nu 0,93 MB (vendor-three); smoke-test home+/leren OK — data-learnpaths-wiskunde ondermijnt mobiele belofte; per-pad dynamic import voor de 2 grootste chunks (wiskunde 4,4 MB + po 2,4 MB).

---

## 📥 Inbox — nieuwe wensen / ideeën

- [ ] **wrongHints-kwaliteitssprint — ECHTE cijfers na linter-fix 14 jul** — de parser van `lint-wronghints.mjs` sloot éénregelige arrays niet (gefixt 14 jul) waardoor oude tellingen onzin waren. Werkelijke stand: **158× pattern-A** (alle foute hints identiek → eliminatie-lek), **144× pattern-D** (correct antwoord letterlijk in hint — deels false positives zoals "wat is de stam van krijgen?"), **72× "Klopt"-hint op foute positie** (ernstigst: kind kiest fout, leest "Klopt"; maar let op false positives als "Klopt zeker niet"). Aanpak: géén bulk-rewrite (didactische schade); gefaseerd per bestand met menselijke blik, start bij Cito-kern (doorstroomtoetsRekenenG8 46, oppervlakteOmtrekPo 30, delenPo 26). Voorbeeld-patroon gefixt 14 jul in alfabetWoordenboekPo (2×): herschrijf naar vergelijkende denkprikkel in vraagvorm. Tools: `lint-wronghints-eliminatie.mjs` (pattern A+D, antwoord-bewust) + `lint-wronghints-klopt.mjs`.

### 📊 Dagrapport-analyse 2026-06-20 (data sinds 4 jun, 16 dagen — betrouwbaarheid LAAG)
Geverifieerd via Supabase + 2 review-agents. Kerncijfers 7d: 126 sessies (~19 écht extern: chatgpt 7 / fb 6 / google 5), 795 events.
- [x] ✅ **Kapotte footer-link `/voor-ouders.html`** (B6.4-deel) → `doorstroomtoets-2027-gids.html` (commit ec39672). Brede scan: enige kapotte interne link.
- [x] ✅ **SEO/AI-discovery gaten gedicht** (commit cfb0ed3): `gratis-bijles.html` in sitemap; 5 content-pagina's toegevoegd aan llms.txt (cito-eindtoets-oefenen, begrijpend-lezen-oefenen, gratis-bijles, onderwijs-begrippen, tafels-oefenen). Voedt Doorstroomtoets-koning.
- [ ] 🟡 **MARK-BESLISSING — privacy/AVG-contact** (privacy.html:41/117/131 = `marksmulders1973@gmail.com`). Backlog wilde → `info@leerkwartier.app`, maar onverifieerbaar of die mailbox post ontvangt. Werkend Gmail vervangen door mogelijk-dode mailbox = slechter voor compliance. Bewust NIET gewijzigd. Mark: bevestig dat info@ ontvangt, dan omzetten.
- [~] 🔴 **GROOTSTE HEFBOOM — e-mail-lijst groeit niet** (upgrade_waitlist: 0 nieuw in 7d, 6 totaal). Oorzaak: de e-mail-haak zat alleen op ResultsPage (achter het fouten-overzicht), maar `quiz_completed` = 1/week → bijna niemand bereikt 'm. ✅ **20 jun: capture verplaatst naar het home-proefvraag-moment** (commit 20cb7b4) — `GratisLesmateriaal` verschijnt ná het beantwoorden van de proefvraag op de home, optioneel (geen gate), `source='home-proefvraag'`. Veel meer bezoekers halen dit (`home_proefvraag_answered` 8 vs `quiz_completed` 1 in 7d). **OPEN:** (a) effect meten over ~1-2 wk (signups via source='home-proefvraag'); (b) ouder-funnel nog leeg — 0 `parent_child_links`, 0 `ref_mastery` → wekelijkse ouder-rapportmail heeft nog geen data. 60-sec ouder-koppeling = nieuwe flow, samen oppakken.
- [ ] 🟡 **MARK-BESLISSING — e-mail-gate op fouten-overzicht** (ResultsPage, "zachte gate" 6 jun). Blokkeert hét leermoment ("begrijp je dit?") voor de weinigen die afronden, met ~0 lijst-groei als opbrengst. Overweeg gate vrijgeven (zie ook B3.5). Mark's bewuste keuze → niet autonoom gewijzigd.
- [x] Rapport-correcties (al gedaan, stale in oude notities): reclamebol-route al verwijderd 18 jun (de 9 opens = restdata); `kwartier_reached` vuurt weer (16×); UpdateBanner dubbele-reload al gefixt. `quiz_completed`=1 = echte drop-off, geen bug.
- [ ] **Wens Robert Plant (18 jun): "minder druk scherm, uitklapbaar menu"** — deels gedaan (zoekbalk onder de vouw), kern (homepage ~11 CTA's) = VERBETERPLAN A1-A4, nog open. Pending wish op /tips → maker-reactie sturen. Ook Sahasra (20 jun) "wat is een supporter?" pending.

- [x] **Begrijpend lezen ÉCHT opbouwend** ✅ 19 jun. Tekstlengte-ladder met keuzescherm vooraf (onderwerp + startlengte; 2 dropdowns). 4 onderwerpen × 4 niveaus (heel kort 1-2 zinnen → lang), echte begripsvragen. `src/data/begrijpendLezenOpbouwend.js` + `src/components/BegrijpendLezenLadder.jsx`, knop "📈 Stap voor stap" bovenaan `BegrijpendLezenPage`. Commit 0b10df8. Detail: memory `begrijpend-lezen-opbouwend`.

---

## 🤖 7-BOTS-REVIEW (2026-06-13) — 7 persona's (kind-7 / VMBO-15 / ouder / nerd / leerkracht / didactiek / a11y), 71 bevindingen

> Mark-opdracht: "test de app door 7 bots met elk een andere bril". Synthese hieronder; volledige
> agent-rapporten in de sessie van 13 juni. Volgorde binnen elk blok = prioriteit.

### B0 — Echte bugs (eerst, klein werk, raakt elke gebruiker)
- [x] ✓13/6 **B0.1 `<LearnPath>` zonder `key` → crash/corrupte staat bij pad-wissel** (App.jsx:986-998). "Volgend onderwerp"/VoorkennisKeten-jump houdt oude stepIdx → `step` undefined bij korter pad. Fix: `key={activeLearnPathId}`.
- [x] ✓13/6 **B0.2 SW forceert harde reload midden in quiz bij elke deploy** (public/sw.js:48 `skipWaiting()` in install + index.html controllerchange-reload). Toets-state is in-memory → alles weg. Fix: skipWaiting weg uit install; UpdateBanner-flow werkt dan eindelijk.
- [x] ✓13/6 **B0.3 Ongecancelde setTimeouts in LearnPath** (562-571 advance, 590 wrong-delay, 611-618 interactief) + PlayQuiz advance-timeout (341-344) overleven navigatie → completeStep/onFinish vuurt in verkeerde context. Fix: ids in ref + clear bij goToStep/quit/unmount.
- [x] ✓13/6 **B0.4 Supabase-fouten stil**: completeStep-upsert destructureert `error` niet (LearnPath.jsx:626-645) → "voltooid!" getoond, niets opgeslagen. Zelfde bij progress-fetch.
- [x] ✓13/6 (deels: 338 niveau-letters gestript via scripts/fix-uitlegpad-letters.mjs; "Antwoord D"-correctievoorschriften nog open) **B0.5 Shuffle breekt letter-verwijzingen**: 695× "…. A."-uitlegPads + "Antwoord D…"-correctievoorschriften verwijzen naar pre-shuffle volgorde (shuffleOptions.js:20-33). Samen oplossen met D1.
- [x] ✓13/6 **B0.6 AllDone-score klopt niet**: telt persistente fout-set van vorige sessies mee (LearnPath.jsx:676-678 + adaptiveStore STREAK_TO_MASTER=3). Fix: eerste-poging-correct per sessie tellen.

### B1 — Belofte vs werkelijkheid (vertrouwen ICP)
- [x] ✓13/6 **B1.1 Prijs-tegenspraak**: OuderDashboard.jsx:373 "€1,95/maand" (abonnement!) vs per-kwartier-belofte overal elders + config.js:52 €5,99 intern. Eén bron: proPlan.js.
- [x] ✓13/6 (deels: banner → "🎓 Examen-modus"; totaal-timer + feedback-uitstel nog open) **B1.2 "Geen tijdslimiet — neem de tijd!"-banner staat boven examenvragen in examen-modus** (PlayQuiz.jsx:429-433) terwijl ExamensPage "geen hints, echte examentraining" belooft. Plus: geen timer (App.jsx:766 timePerQuestion:0) en feedback na élke vraag. Fix: examen-mix totaal-timer + feedback uitstellen tot eind (Cito-simulatie-patroon bestaat al).
- [x] ✓13/6 **B1.3 "Alles voor groep 1 t/m 8"** maar 5 paden voor groep 3-4, 0 voor groep 1-2 (pathManifest). → Belofte afgezwakt naar **"groep 3 t/m 8"** in alle content-claims (HomePage chip/hero/promise, ResultsPage share, ObliteratorGame, welkom.html/over.html/mail-scholen.html/index.html meta+schema). School-type-descriptors ("basisschool = groep 1-8") + beroepenWerkPo-uitleg bewust gelaten (feitelijk correct). NB: NiveauWizardBanner-picker biedt nog groep 1-2 aan zonder content → mogelijke dead-end, los apart op als gewenst.
- [x] ✓13/6 **B1.4 Gratis-scope 2027 onduidelijk** voor ICP: blijft Doorstroomtoets-oefenen gratis ná jan 2027? → Expliciet gemaakt: abonnement.html gratis-tier ("Oefenen voor de Doorstroomtoets blijft gratis — ook ná 2027") + nieuwe FAQ-vraag + homepage-banner ("Ook ná 2026 blijft oefenen voor de Doorstroomtoets gratis; alleen Pro-extra's per kwartier"). Conform prijsmodel: basis gratis, alleen extra's (AI/onbeperkt/examen-modus/ouder-dashboard) Pro.
- [~] **B1.5 15-min belofte**: 206/322 paden > 15 min. ✓15/6 **build-gate gebouwd** — `scripts/check-path-duration.mjs` (rapport + `--gate` ratchet tegen `scripts/pathDuration.baseline.json`, hangt in `npm run prebuild`). Faalt voortaan als een pad LANGER wordt of een NIEUW pad >15m binnenkomt → probleem kan niet erger worden. Rapport: `npm run duration`. **OPEN (bewust niet auto-gedaan, risicovol):** de 206 bestaande lange paden daadwerkelijk splitsen/inkorten. Pad-id's veranderen breekt leerpadLink/examenLookup/voortgang (learn_progress keyt op learn_path_id+step_idx) + deeplinks → met Mark afstemmen, geleidelijk per pad, baseline na elke verbetering verlagen met `--update-baseline`. NB: de 90m-toppers (doorstroomtoets-*-g8) zijn bewuste grote proef-toets-vraagpools (4-5 stappen, veel checks), geen 15-min-lessen.

### B2 — Didactiek (antwoord-verklap op schaal)
- [~] **B2.1 uitlegPad-niveau verklapt antwoord**. ✓15/6 **antwoord-LETTER gestript** uit de inline niveau-vorm `niveaus:{basis:"…A.",…}` (3538× in 117 files, `scripts/fix-uitlegpad-letters2.mjs`). De eerste fixer (B0.5) dekte alleen de meerregelige vorm; de inline-vorm bleef de losse "A."/"B."-letter houden — die klopt niet na shuffleOptions én verklapt de positie. 211 tests + build groen. **OPEN (content-herschrijf, niet veilig te automatiseren):** niveau-tekst die de antwoord-WAARDE zelf bevat (bv. `nogSimpeler:"100"` / `"Pacific"`) — het laatste-redmiddel-niveau dat juist de zwakste leerling het minste laat denken. Vereist per-concept herschrijven naar een denkprikkel; script kan dit detecteren (niveau == options[answer]) maar niet zinvol herschrijven.
- [x] ✓13/6 **B2.2 Correctievoorschrift staat `open` in wrong-mode** (LearnPath.jsx:1388) → antwoord zichtbaar → retry telt als beheerst. `open` weghalen + retry-na-reveal niet als "meteen goed" registreren.
- [~] **B2.3 Eliminatie-leaks + verklap-hints**. ✓15/6 genoemde plekken gefixt: signaalwoordenVerbandenPo (hints noemen niet meer "geen reden" → geen uitsluiting), omzettenBreukProcentKommaPo (¼-hint + nogSimpeler verklappen 25% niet meer), procenten:464-466 (lazy "Niet."/dubbele "Geen NL-tarief" → richtinggevend), doorstroomtoetsRekenenG8 (lek-hints 1/4-decimaal + 2/3−1/6 herschreven) **+ dubbele vraag "3/5 of 2/3" verwijderd** (was :96 én :141; betere versie behouden). Geverifieerd: die files niet meer in `lint-wronghints-eliminatie.mjs --pattern A`. 211 tests + build groen. **OPEN (grotere content-pass):** ✓28/6 **9 Cito-kern paden gedaan** (breuken/delen/vlakke-figuren/woordsoorten/interpunctie/kaartlezen/weersvoorspelling/samenvatten/tijdvakken — ~21 vragen → richting-hints). Resterende Pattern-A hits zitten vooral in **P4-vakken** (eetcultuur/ruimtevaart/olympische/kunstenaars e.d.) + 2 stragglers (samenvatten "bijzaak", kaartlezen "GEEN onderdeel"). Draai `node scripts/lint-wronghints-eliminatie.mjs --pattern A`.
- [x] ✓15/6 **B2.4 Spaced repetition write-only opgelost** — keuze: writes verwijderen (niet dubbel wiren). `srRecordSeen`-aanroepen + import uit LearnPath.jsx weg (schreven naar een store die niemand las). Het live "Herhaal vandaag" draait al op topic_mastery (mastery.js loadDueTopics). `spacedRepetition.js` blijft als slapende scaffolding mét eerlijke header-notitie; misleidende "toekomst-ready"-comment in StudentHome bijgewerkt. 211 tests + build groen.
- [x] ✓13/6 **B2.5 Kern-loop half dicht**: AllDone→examRefs negeert stepIdx (LearnPath.jsx:1962) → leerling landt op vraag 1 i.p.v. "snap je 'm nu wel?"-vraag. `onPickPath(examPathId, ref.stepIdx)`.
- [x] ✓15/6 **B2.6 Antwoord opzoekbaar vóór eerste poging** opgelost. VraagUitlegPad kreeg prop `verbergNiveaus`; LearnPath geeft die `true` mee bij de "❓ Ik begrijp de vraag niet"-knop zolang `attempts === 1`. Vóór de eerste poging zie je dus alleen concept-hulp (stappen/woorden/theorie/voorbeelden) + een regel "probeer eerst zelf — de korte uitleg met het antwoord verschijnt ná je eerste poging". Ná een poging (of bij ≥2 fout) verschijnt de niveau-sectie normaal. typecheck + 211 tests + build groen.

### B3 — Doelgroep-fit
- [x] ✓13/6 **B3.1 "Seksuele voorlichting" + "Roken & drugs"-chips zichtbaar voor élke leeftijd** (SelfStudy.jsx:200). Filter op groep ≥7/VO.
- [x] ✓15/6 **B3.2 PO-groep-filter** toegevoegd. In de vak-detail van de hub verschijnt voor PO-leerlingen een groep-chiprij (alleen als het vak >1 groep dekt), default = eigen groep uit naam-invoer ("✦ Groep X — jouw groep") + "Alle groepen". Paden worden gefilterd op hun groep-range (`poGroupRange` parse't "groep4-7"), met fallback naar alles als de eigen groep in dat vak niets heeft (geen lege staat). Data-check: groep 3→2 paden … groep 8→103 — dus filteren helpt juist de jonge leerling. typecheck + 211 tests + build groen.
- [x] ✓7/7 **B3.3 g3+g4 delen één vragen-bucket** — gesplitst: nieuwe echte groep-3-rekenset (t/m 20, splitsen, dubbelen), oude set → `groep4`; andere vakken via alias ongewijzigd. LEVELS + SUBJECT_FOR_LEVEL + 4 bucket-maps bijgewerkt (commit 0f54cbe).
- [x] ✓7/7 **B3.4 VO'er moet langs Doorstroomtoets-blokken scrollen** — blok-volgorde wisselt nu per vakModus: VO ziet examen-balken eerst, PO de Doorstroomtoets-blokken; niets verborgen (commit 6a5d654).
- [ ] **B3.5 E-mail-muur op fouten-overzicht** (ResultsPage.jsx:23-28) — 15-jarige én klas-leerling haken af op hét leermoment; AVG-vraagteken bij minderjarigen in klasverband. Vrijgeven voor examen/klas-toetsen.
- [ ] **B3.6 Groep-6 toon in examen-context** ("Zeg het 3× hardop", confetti, "Knap gedaan!") — zakelijke variant bij examen-flows.

### B4 — Leerkracht-spoor (half af)
- [ ] **B4.1 Voortgang-dashboard leest localStorage van leerkracht-device** (App.jsx:1839-1846) → leeg bij echt klasgebruik. Leaderboard-query (bestaat al voor per-toets-uitklap) hergebruiken.
- [ ] **B4.2 Geen vraag-niveau inzicht**: leaderboard slaat alleen score op (App.jsx:873-887). Answers-array meesturen → fout-percentage per vraag.
- [ ] **B4.3 Kind-gegevens (naam/mail/06) in localStorage** ClassManager (TeacherComponents.jsx:41-47) — naar Supabase met RLS, standaard alleen voornaam.
- [ ] **B4.4 Naam-koppeling ouder = privacy-lek**: voornaam-match accepteert elke gelijknamige (KindAcceptBanner.jsx:23-27) en toont landelijke leaderboard-data (OuderDashboard.jsx:96-99). Alleen koppelcode-flow houden.
- [x] ✓28/6 **B4.5 Leerkracht-takenlijst** (Brian's idee) — juf zet lijstje leerpaden klaar → deelcode → leerling vinkt af (uit learn_progress) → park-beloning. Hergebruikt quizzes-tabel (geen migratie). `TakenlijstView`/`TakenlijstMaker`/`takenlijst.js` + App+TeacherHome-wiring. End-to-end browser-geverifieerd. Memory: `project_studiebol_takenlijst`. **Vervolg (optioneel):** taak→toets-link, deadline, per-klas, leerkracht-voortgang.

### B5 — Toegankelijkheid (kinderen met leerproblemen = kern-doelgroep)
- [x] ✓13/6 **B5.1 btnPrimary wit-op-groen ≈ 2,2:1 contrast** (LearnPath.jsx:2102-2117) — hoofdknop hele leerflow. Donkere tekst (patroon bestaat al op :973).
- [x] ✓13/6 **B5.2 Goed/fout-banners zonder aria-live** in LearnPath (1306-1338, 1373-1380) — blind kind hoort niks; PlayQuiz-patroon kopiëren.
- [x] ✓7/7 **B5.3 3 modals zonder focus-trap/Escape** — AITutor (Esc=sluiten), KwartierPauze (Esc=5-min-snooze), Tip-modal (Esc=sluiten) + aria-modal (commit 6a5d654).
- [x] ✓7/7 **B5.4 Auto-advance zonder pauze** — CorrectEvidenceCard auto-advance verwijderd, nu "Verder ▶"-knop met autoFocus (commit 6a5d654). NB: de 1100ms advance-delay na gewone goed-antwoorden staat er nog (bewust — korte bevestigings-flits, geen uitleg die verloren gaat).
- [~] **B5.5 Touch targets < 44px** — ✓7/7 iconBtn (LearnPath+MiniQuiz), markeer-voltooid, groep-keuzeknoppen HomePage naar 44px (commits 6a5d654+0f54cbe). OPEN: restant-scan op overige kleine knoppen.
- [~] **B5.6 Klein grut** — ✓7/7 `--color-text-soft`-token toegevoegd (werd 4× gebruikt zonder te bestaan) + bronAfbeelding alt-fallback naar caption (commit 0f54cbe). OPEN: stap-status alleen emoji/kleur, ticker zonder pauze.

### B6 — Ouder-funnel (conversie)
- [x] **B6.1 Ouder-ingang boven de vouw** — al gedaan bij home-herschikking 3/7: "👨‍👩‍👧 Ik ben ouder — zo help je thuis →" direct onder de rol-tegels (was stale in deze lijst).
- [ ] **B6.2 Dashboard toont momentopname, geen trend** — trend-pijl per vak + oefenminuten/week.
- [~] **B6.3 Geen toets-plan** — ✓7/7 countdown-banner op CitoPage ("Nog X weken tot de Doorstroomtoets", groep 7/8-bewust, commit 6a5d654). OPEN: 12-weken-schema (= Kwartierplan-traject, wacht op Mark's go).
- [ ] **B6.4 Kapotte link /voor-ouders.html** (abonnement.html:196) + AVG-contact = privé-Gmail (privacy.html:41) → info@leerkwartier.app.
- [ ] **B6.5 "één vader, geen marketingmachine" + lage live-teller** kunnen hobby-gevoel versterken — teller boven drempel + 1-2 echte ouder-quotes.

### Klein technisch grut (verzameld)
- [ ] rateMap onbegrensd (api/_guard.js:24), ls_leaderboard delete-vs-write tegenspraak (App.jsx:441/499), UpdateBanner dubbele reload (UpdateBanner.jsx:22), SupporterGame force-tikker re-rendert alles per frame + setState-in-updater side effects, PlayQuiz handleAnswer(-1) in setTimeLeft-updater (StrictMode dubbel), "Ik ben leerling/student" → "basisschool/middelbare school", uitlegPad "…. A."-jargon, deadline niet gehandhaafd bij join, ExamensPage accordions default dicht + dubbele legenda-knop, QR-code generiek.

---

## 🚨 SPRINT-0 — 15-agent-audit bevindingen (2026-05-13) — KRITIEK EERST

**Audit-rapport identificeerde 3 fatale gaten + 2 financiële tijdbommen.** Volgorde HARD aanhouden — geen nieuwe content tot Sprint-0 op groen.

### Audit-instant-fixes (totaal: ~3 uur werk, doe deze EERST)
- [x] **QW1 — Verklap-bug fix** ✓ (2026-05-13, commit 21f4f22): `VraagUitlegPad.jsx:110` → `defaultOpen={false}`. Korte uitleg is nu opt-in zodat leerling eerst zelf nadenkt.
- [x] **QW2 — Adaptief op ALLE checks** ✓ (2026-05-13, commit 21f4f22): `LearnPath.jsx:433` → `examenBron`-conditie weg. Simpeler-auto-switch werkt nu voor alle 2000+ uitlegPad-checks.
- [x] **QW6 — Daily-cost-cap AI** ✓ (2026-05-13, commit 19d757a + migration applied): Supabase tabel `ai_call_quota` + RPC `increment_ai_call_quota` + `dailyQuotaCheck()` in `_guard.js` + ingehaakt in tutor-chat (5000/dag), generate-questions (500/dag), preview-topic (1000/dag). Overridable via env-vars. RPC smoke-test: 3 calls → count 3 ✓.
- [x] **QW10 — Supabase RLS-export** ✓ (2026-05-13, commit 19d757a): alle 25 tabellen RLS-on, 57 policies geëxporteerd uit Studio via MCP naar `supabase/migrations/20260513_rls_policies_export.sql`. Idempotent (drop+create).
- [ ] **QW8 — Bing Webmaster Tools setup** (Mark zelf): 10 min, voedt ChatGPT-Search. Placeholder al in `index.html` zichtbaar.

### Audit-1-week-werk (~2 dagen werk)
- [x] **QW4 — Examen-modus echt splitsen** ✓ (2026-05-13, commit 90ecd90): `PlayQuiz.jsx` nieuwe `isExamMode = gameState.mode==="examen" || isCitoSimulation`. "Ik weet het niet"-knop + 2× YouTube-link verborgen in examen-modus. Triggert bij `App.jsx:647 mode="examen"` (PDF-archief) + Cito-50-simulatie.
- [x] **QW5 — Per-examen-vraag-URL template + 61 SEO-pagina's** ✓ (2026-05-13, commit a2c4f1d): `scripts/buildExamenVraagPaginas.mjs` genereert uit alle 9 examen-files 61 statische HTML-pagina's met H1=vraagtekst + antwoord-banner + uitlegPad-stappen + voorkennisKeten + FAQ-schema + BreadcrumbList + canonical/OG + externe examenblad.nl-link (economie vakcode 0233). Sitemap.xml uitgebreid (172 → 540 regels). Audit-target 60 gehaald + 1.
- [x] **QW7 — Lazy-load STAP 2 voltooid** (2026-05-15, commits 987705e + 76ac589 + 9566699): App + PlayQuiz + LearnPath + LearnPathsHub + ExamensPage + Curriculum + DailyChallengeBanner + MasteryCTABanner + curricula/index.js + buildProefToets gemigreerd naar pathManifest of async getLearnPath. App-bootstrap laadt nu alleen `data-learnpaths-core` (204 kB) ipv eager 5,8 MB. Subject-chunks lazy on-demand. Nieuwe `learnPaths/utils.js` huisvest pure utils.

### Audit-content-verbeteringen (~3-5 uur)
- [x] **nogSimpeler audit-script + top fixes** ✓ (2026-05-16, commit 115577f): `scripts/lint-nogsimpeler.mjs` bestaat (rapporteert 2160 issues — veel false-positives voor korte feit-antwoorden). Top 7 echte-dunne (1-woord-strings) gefixt: elektriciteit/interpunctie/parabolen/balans-beco×2/cel-biologie×2/naamvallen-duits. Elk met 3-niveau-uitleg + geheugen-truc.
- [x] **wrongHints "Klopt"-detector + top fixes** ✓ (2026-05-16, commit a1157af): `scripts/lint-wronghints-klopt.mjs` bestaat. Top 6 eliminatie-leaks gefixt in basis-grammatica-engels-po, tafels-po, pincode-ondernemen, pythagoras, politiek-democratie-po.
- [x] **Begripscheck-na-uitlegPad** (Roediger-Karpicke retrieval-practice) ✓ (2026-05-16, commit dc3ec14): adaptiveStore-laag met `markRetrievalDue` / `peekDueRetrieval` / `popDueRetrieval` / `countDueRetrievals` (lk_retrieval_v1 localStorage). LearnPath handlePick koppelt: bij correct + showUitlegPad=true → markeer voor retrieval. Bij entry latere stap → banner + modal-flow met die check. Versterkt mastery-streak op originele stap-context. Non-intrusief (later-knop).
- [x] **Adaptive mastery streak-based** ✓ (al doorgevoerd, verified 2026-05-16): `src/shared/adaptiveStore.js:STREAK_TO_MASTER=3` + `recordRight` met streak-tracking. Een check verlaat de fout-set pas na 3× goed achter elkaar.

### Audit-AI-tutor-fixes (~2-3 uur)
- [x] **System prompt Socratisch maken** ✓ (verified 2026-05-16): `api/tutor-chat.js` KERNREGEL afdwingt "Begin elk antwoord MET een vraag terug aan de leerling".
- [x] **Antwoord NIET in context sturen** ✓ (verified 2026-05-16): correctOption-string is uit context verwijderd, AI moet zelf afleiden uit uitleg + opties.
- [x] **Leeftijds-adaptief prompt** ✓ (verified 2026-05-16): `inferAgeGroup()` + `ageInstructie()` voor po/vmbo/havo met aangepaste toon-instructie per leeftijdsgroep.
- [x] **Gemini-fallback gebouwd** ✓ (verified 2026-05-16): `callGemini()` met gemini-2.0-flash-exp; primair Anthropic, fallback Gemini bij failure.

### Audit-architectuur-tikbommen (~1-2 dagen elk)
- [x] **`examenLookup.js` naar build-time JSON** ✓ (verified 2026-05-16): laadt `examenLookup.generated.json` (~16 kB) ipv top-level `ALL_LEARN_PATHS`-import. Build-script: `scripts/buildExamenLookup.mjs`.
- [x] **`pathManifest.generated.json`** ✓ (verified 2026-05-16): bestaat + wordt gebruikt door LearnPathsHub/StudentHome/Curriculum/ExamensPage. Build-script: `scripts/buildPathManifest.mjs`.
- [x] **vendor-three lazy uit non-game routes** ✓ (verified 2026-05-18): `Mini3DTeaser` is `lazy()` in `HomePage.jsx:14` + niet meer gerenderd op home (Maand 1 snoei 2026-05-10, regel 962-970 toont snoei-comment). `vite.config.js` chunkt `three` apart als `vendor-three` (regel 94) + SW pre-cache slaat `vendor-three` over (regel 85). Three.js wordt alleen geladen vanuit wiskunde-leerpaden die zelf al lazy zijn. Geen werk meer nodig.
- [x] **Service Worker JS-bundle pre-cache** ✓ (2026-05-16, commit b58faa0): vite-plugin injectSwVersion uitgebreid om `__SW_PRECACHE_ASSETS__`-placeholder te vervangen door JSON-array met gehashte entry-bundle + vendor-react + vendor-router paths. SW install gebruikt Promise.allSettled zodat losse asset-failures de install niet onderuit halen. Repeat-visit-LCP profiteert van directe cache-hit.
- [ ] **Upstash Redis voor rate-limit**: `_guard.js:24` in-memory Map vervangen door Redis voor cross-instance-quota. Free tier 10k/dag voldoende.

### Audit-monetization-blokkers (vóór Cito-piek nov 2026 LIVE)
- [⏳] **Paywall infrastructuur KLAAR — gating UIT** ✓ (2026-05-13): `src/subscription/{config,useSubscription,PaywallGate}.js(x)` + `public/abonnement.html` (pricing-pagina + waitlist-form) + `api/checkout-session.js` (Stripe-stub, 503 tot `STRIPE_ACTIVE=true`). `PAYWALL_ACTIVE=false` zodat alles gratis blijft tot Mark flipt (geplande go-live jan 2027 Cito-piek). Tier-systeem (free/parent_pro/teacher_pro) + FEATURE_GATES + PRICING-config gedocumenteerd in CLAUDE.md "Paywall"-sectie met 7-stappen-activatie-checklist.
- [ ] **Ouder-dashboard v1**: gekoppeld account; toont "kind heeft X vragen geoefend, zwakke onderwerpen: Y". Wekelijkse mail = retention-anchor.
- [x] **VoorkennisKeten UI fase 2 + 3 — KLAAR** ✓ (commits 742e87a + 76150de): `src/shared/ui/VoorkennisKeten.jsx` POC + mastery-detectie + 👉 'begin hier'-pijler via `findWeakestKetenIdx`. Gekoppeld in LearnPath.jsx:1014. Alle 40 examen-files (5 vakken × 8 tijdvakken: Biologie/Economie/Engels/Geschiedenis/Maatschappijkunde) bevatten al `voorkennisKeten`-veld. Examen-modus impliciet OK: VoorkennisKeten alleen in LearnPath, niet in PlayQuiz.
- [ ] **A12 web push setup-stappen** (Mark zelf, ~30 min handwerk): VAPID + Vercel env + Supabase secrets + migration + cron.

### Audit-SEO-content-uitbreidingen (~1 week)
- [x] **doorstroomtoets-oefenen.html → 2500 w** ✓ (2026-05-16, commit a1157af): 1338 → 2512w. Per-onderdeel-detail (taal/rekenen/lezen), 5-aanbieders-tabel, 3-maanden oefenplan, score-tegenvalt-uitleg, 6 nieuwe FAQ-items (dyslexie, multi-kind, oefenboeken-combi).
- [x] **cito-toets-oefenen.html → 2500 w** ✓ (2026-05-16, commit a1157af): 1322 → 2505w. Stof-per-groep (6/7/8), 5 oefen-fouten, Cito-LVS-context, 4 niveau-adviezen, 5 nieuwe FAQ-items (LVS-vs-eindtoets, tegenvallende scores, dyslexie, uitslag-nakijken, officiële voorbeeld-PDF).
- [x] **Begrippen-glossarium** ✓ (2026-05-16, commit fc401b5): `/onderwijs-begrippen.html` met 15 termen (doorstroomtoets, schooladvies, kansrijke heroverweging, referentieniveaus 1F/1S/2F, kerndoelen, SLO, LVS, Cito-LiB, VMBO+4 leerwegen, HAVO/VWO/Gymnasium, MAVO, dakpan-brugklas, orthopedagoog, dyslexie-verklaring, VVE) — 1842w. DefinedTermSet JSON-LD + BreadcrumbList + sticky TOC. Doel was "50 termen" maar dat verschuift naar latere sessie als breedte nodig is — 15 dekt de meest gezochte termen.
- [ ] **Pre-rendering 10-20 kern-leerpaden** (Vercel ISR of statische export) — SPA-content nu onzichtbaar voor AI-engines.
- [x] **5 sub-landing pages doorstroomtoets-aanbieders** ✓ (2026-05-16, commit 021c76b): Cito-leerling-in-beeld, IEP, Route 8, Dia, AMN — elk ~1000w (totaal 5130w) met onderdelen-tabel, afnametijd, score-rapport, oefenstrategie, FAQ. Onderlinge cross-links + terug-naar-gids navigatie. Hub-gids gids-page deeplinkt nu naar de 5 pages.

### Audit-growth-loops (~1 week)
- [ ] **Referral-loop**: 7-dagen-gratis voor uitnodiging + ontvanger.
- [ ] **Pinterest-pinnable infographics**: 10 stuks "Doorstroomtoets datum 2027", "5 aanbieders vergeleken", "Wat is het schooladvies".
- [ ] **TikTok-clips 15-sec**: "ChatGPT vs Leerkwartier op echt examen Economie 2024 vraag 36" — toont hallucination → toont Leerkwartier correct.
- [x] **Daily-goal-UI + "leerkwartier behaald"-banner** ✓ (2026-05-16, commit 3b54ae9): `src/shared/dailyGoal.js` + tracker met 30s-heartbeat (visibility-aware), 15-min default-target, auto-reset bij datum-wissel. Banner bovenaan StudentHome met progressie-balk (geel → groen) + minuten-teller + "klaar voor vandaag"-felicitatie. Re-render elke 30s via dailyTick. Tracking globaal gestart in App.jsx.

---

## 🔄 Terugkerend ritueel — Chrome-Claude UX-review

Cadens: ~elke 6-8 weken of vóór elke product-mijlpaal (Cito-piek nov-feb, paywall jan 2027).

- 2026-05-15 — eerste twee runs gedaan (UX-flow + content-kwaliteit). Resultaat: 20+ fixes in 4 commits (2d76e78, 62e1ec2, 1a82454, 0837f03). Werkwijze: ik schrijf prompt → Mark plakt in Claude-voor-Chrome → rapport terug in chat → ik fix per severity. Zie `memory/feedback_chrome_claude_review.md`.
- [ ] Volgende run plannen rond 2026-07-01 (6 wk later), of vóór de Cito-piek.

## 🎯 KWARTIERPLAN — Ouder/leerkracht-traject (idee 2026-05-19)

**Status**: nog niet gestart — idee uitgewerkt in `memory/project_studiebol_kwartierplan.md`. Plaatsing onder ouder- en leerkracht-tab; NIET in onboarding (Mark wil die laagdrempelig houden).

**Concept**: 4 samenhangende functies — doel zetten (HAVO/VWO/etc.) → startfoto (8-12-vragen-diagnose, ~5-7 min) → persoonlijk stappenplan (15 min/dag, X weken) → voltooi-sein per dag + weekrapport zondag. Anti-spoof: voltooid = min-N vragen + ≥60% correct + ≥30 sec/vraag.

**ICP-effect**: pitch verandert van "Leerkwartier helpt oefenen voor Doorstroomtoets" naar "Leerkwartier maakt persoonlijk 15-min-per-dag-plan op basis van diagnose met dagelijks sein naar ouder". Killer-USP voor FB/school/Google-ads.

### Build-volgorde (4 sessies, ~10-14 uur)

> 📌 **Volgende sessie (2026-05-20): Kwartierplan-sessie 1.** Mark akkoord 2026-05-19. P0 bundle-splitsing klaar; "Kwartierplan" als naam vastgepind.

- [x] ✓7/7 **Sessie 1 — Foundation + doel + startfoto** (commit f9ba9f5)
  - ✅ Supabase migrations: 4 tabellen + RLS (parent_user_id + child_name, conform parent_child_links; kind-writes in sessie 2 via security-definer-RPC). Toegepast op prod + in `supabase/migrations/20260707_kwartierplan_sessie1.sql`.
  - ✅ `KwartierplanSectie` in OuderDashboard (boven de scores) met doel-modal (niveau/doel-moment/datum/groep + disclaimers).
  - ✅ `Startfoto.jsx`: 12 vragen (4 per pijler uit doorstroomtoets-G8-pools), geen uitleg tussendoor, momentum-berichten, tijd-per-vraag → snel-geklikt-kanttekening.
  - ✅ Rapport: per-pijler balken + 3-5 aanbevolen paden (runtime tegen pathManifest) + baseline-opslag. 2 nieuwe tests.
  - NB: Brian is als geverifieerd kind aan Mark's account gekoppeld (parent_child_links) zodat het dashboard direct werkt.

- [ ] **Sessie 2 — Stappenplan-generator + kind-zicht** (~3-4 uur)
  - Rule-based plan-volgorde uit diagnose + doel
  - Ouder/lk-review-UI: pad-volgorde aanpassen + activeren + pauzeren
  - StudentHome "Vandaag"-strip bovenaan (alleen als plan actief)
  - Voltooi-tracking met anti-spoof-checks

- [ ] **Sessie 3 — Voltooi-sein (e-mail interim)** (~2-3 uur)
  - Edge function `notify-completion` → e-mail met "Maarten heeft 14 min Nederlands geoefend, 11/13 goed"
  - Ouder kan e-mail-adres + tijd-voorkeur instellen
  - Volgt later: WhatsApp + A12 Web Push (na Mark's setup)

- [ ] **Sessie 4 — Weekrapport + adaptieve diagnose** (~2-3 uur)
  - Cron-edge: zondag 19:00 weekrapport (% verandering + streak)
  - Auto-trigger mini-diagnose elke 4 weken (5 vragen op zwakke plekken)
  - Pauze/vakantie-knop voor schoolvakanties

### Toon + disclaimers (verplicht)
- Geen "garantie geslaagd" / "je haalt VWO wel".
- Alle rapporten benoemen: "Leerkwartier helpt oefenen — schooladvies komt van school".
- Naar kind: NIET "task", "opdracht", "controle" — wel "Vandaag", "Klaar! 🎉", "Streak X dagen".
- Doel-frame als "richting waar je voor oefent", niet voorspelling.

### Open beslispunten (vraag aan Mark voor sessie 1)
- Wachten met bouwen tot na lopende prio's (P0 bundle-splitsing, A12-Web-Push-setup)?
- Notificatie-volgorde: e-mail eerst of direct WhatsApp-integratie?
- "Kwartierplan" als naam OK of liever "Studieplan" / "Persoonlijk Plan" / iets anders?

## 📊 Sprint Content-doelen (2026-05-14) — afgeleid uit `docs/CONTENT-DOELEN.md`

Doelen vastgepind + huidige status geteld. Volledige tabel + onderbouwing zie `docs/CONTENT-DOELEN.md`.

### Stand op 2026-05-14 (geüpdatet einde sessie ronde 3)
- **Doorstroomtoets G8 — 150-content-doel**: 406 / 450q = **90% gevuld** (3 onderdelen × 150 oefen-vragen)
  - Was vóór sessie: 227 / 450 = 50%
  - +179 vragen vandaag in 3 rondes
- **Proef-toetsen** (60q per onderdeel via random-selectie) = aparte FEATURE, niet meer content
- **VMBO-examens authentiek**: 476 / 560q = 85% (ongewijzigd — scheef: Wiskunde + Aardrijkskunde leeg, NL + Engels overcompleet)
- **PO-leerpaden**: alle 62 paden op 40q-standaard ✓
- **`examenQuizzes/*.json` skipped**: 797 zijn bewust (open vragen, geen MC) + 17 parser-bugs

### Drie sporen — volgorde van uitvoering

**🔴 Spoor 1 — Doorstroomtoets G8 verdiepen (PRIO ICP) — ✅ CONTENT-DOEL BEHAALD**
- [x] Taal G8: 74 → **147q** (98% van 150) ✓ 4 rondes (commits 8d1d841, 54f86ed, 67cccc6, 7a2149e — +73 vragen totaal).
- [x] Rekenen G8: 74 → **149q** (99% van 150) ✓ 4 rondes (commits d2f8bcd, 9e1542c, 51afd0c, 3e88bd8 — +75 vragen totaal).
- [x] Studievaardigheden G8: 79 → **148q** (99% van 150) ✓ 4 rondes (commits 928d4dd, 82644e4, c679e64, 932412a — +69 vragen totaal).
- [x] **Feature** ✅ Proef-toets-modus gebouwd (commit 1944fb5): 30 random vragen uit pool, examen-modus (geen hints/uitlegPad/YouTube). Knoppen op `CitoPage` onder mini-eindtoets. Files: `src/features/practice/buildProefToets.js` + `startProefToets()` in App.jsx + 3 knoppen in CitoPage.

**🟠 Spoor 2 — Parser-fix in `scripts/parse_examen.py` — ✅ GEDAAN 2026-05-14 (deels)**
- [x] Regex `vraag_marker_re` toleranter gemaakt (woordgrens \b ipv eindigt-op): commit ccaf596.
- [x] 4 files met PDFs lokaal beschikbaar in tmp/ — re-parsed:
  - maatschappijkunde-2023-T1: 15 → 19 (+4 — v5/6/7/8)
  - biologie-2024-T1: 13 → 14 (+1 — v22)
  - biologie-2024-T2: 13 → 14 (+1 — v13)
  - geschiedenis-2023-T1: 9 → 10 (+1 — v40)
- [ ] 10 MC-bugs blijven in files waarvan PDFs niet lokaal staan. Mark kan zelf re-parsen door PDFs in tmp/ te zetten + `python scripts/parse_examen.py <id> opgaven.pdf bijlage.pdf correctie.pdf`:
  - economie-2023-T1 v17 (1 bug)
  - economie-2025-T2 v7/11/32/34 (4)
  - engels-2023-T1 v30 (1)
  - engels-2024-T2 v18/19/26 (3)
  - nederlands-2025-T2 v11 (1)

**🟡 Spoor 3 — Open-vraag-modus — ✅ MVP GEBOUWD 2026-05-14**
- [x] Helper `src/features/practice/openAnswerCheck.js` — normalisatie (lowercase, trim, accent-strip, komma→punt) + optionele numerieke tolerantie. Geen AI-grading.
- [x] `PlayQuiz.jsx` — `OpenAnswerBlock` component + conditional render bij `question.kind === "open"` + `handleAnswer` met type-switch.
- [x] 1 demo-vraag in `doorstroomtoetsRekenenG8` (12×8=96 open).
- [x] Commit c7ae948.
- [ ] Open-vragen toevoegen aan VMBO-examen-paden (aardrijkskunde + wiskunde) zodat die onderdelen structureel compleet worden. **Content-werk** — kan stapsgewijs.
- [ ] Eventueel: AI-grading toevoegen voor synoniemen/parafrase. Nu alleen exact match.

**⚪ Spoor 4 — Methodes opruimen (lage prio)**
- [ ] Audit `src/data/textbooks.js`: welke edities > 5 jaar achterstand? Bewaar laatste 2 + 1 nog-veel-gebruikte.

**⚪ Spoor 5 — P4 onder-min paden naar 25q** (gedaan 2026-05-14)
- [x] nederlandseKunstenaarsPo, godsdienstenCulturenPo, pubertijdGroeiPo (commit 7cf4b6c).
- [x] eetcultuurNederlandPo, emotiesSocialePo, klassiekeMuziekPo (commit 44a2bdc).
- [x] koudeOorlogModernPo, olympischeSpelenPo, ruimtevaartPo (commit 1089de6).

## Prioriteit 0 — Loop-audit (terugkerend, elke 5 paden)

Voordat je nieuwe paden bouwt:
- [x] Loop-audit 2026-05-13: 11 unieke leerpadLink-ids in examen-paden, 172 gedefinieerde leerpath-ids, **0 broken loops** ✓
- [x] Top-gerefereerde paden: woordenschat-engels (17×), pincode-buitenland-eu (9×), pincode-inkomen-welvaart (7×), pincode-ondernemen (7×). Alle bestaan + hebben uitlegPad.
- [x] Volgende loop-audit: na +5 nieuwe paden of na elke uitlegPad-uitrol-sprint.

## Prioriteit 0.5 — Optie-C kennisgraaf (lopend, hoogste prio)

### Fase 1 — Data-laag (in uitvoering)
- [x] `scripts/auditKennisgraaf.mjs` geschreven — rapporteert broken links, ontbrekend voorkennisKeten, paden zonder prerequisites, examen-referenced paden zonder uitlegPad.
- [x] Schema vastgelegd: `voorkennisKeten: [{ id, title, niveau, why }]` per examen-check.
- [x] Economie 2023-T1 (5 vragen) voorzien van voorkennisKeten.
- [x] Economie 2023-T2 (7 vragen) voorzien van voorkennisKeten — commit 63c6cf1.
- [x] Economie 2024-T1 (6 vragen) voorzien van voorkennisKeten — commit 09f72f5.
- [x] Economie 2024-T2 (6 vragen) voorzien van voorkennisKeten — commit b869f23.
- [x] Economie 2025-T1 (9 vragen) voorzien van voorkennisKeten — commit e163486.
- [x] Economie 2025-T2 (5 vragen) voorzien van voorkennisKeten — commit 7a48310.
- [x] Engels 2024-T1 (8 vragen) — voorkennisKeten — commit c188375.
- [x] Engels 2025-T1 (9 vragen) — voorkennisKeten — commit 4c56476.
- [x] Geschiedenis 2025-T1 (6 vragen) — voorkennisKeten — commit 83762e1.
- [x] `prerequisites: [{ id, title, niveau }]` als veld in leerpad-data — toegevoegd aan top 10 examen-referenced paden (commit b0a2221). 10/90 paden voorzien.
- [x] **Prerequisites uitrol VOLLEDIG** — alle 163 leerpaden hebben nu prerequisites (2026-05-13, commits 4aca00f → d866b28, 9 batches: Cito-PO kern → VO NL → VO talen → VO wiskunde/economie/bèta → laatste 16). Data-laag fase 1 ✓ klaar.
- [x] Loggen voorkennis-paden voor nieuwe paden — alle bestaande paden hebben prereqs, dus bij elk nieuw pad gewoon meegeven (geen aparte log meer nodig).

**Audit-bevindingen 2026-05-10**:
- 9 examen-paden, 61 leerpadLink-verwijzingen, **0 broken loops** ✓
- Top 3 meest-gerefereerde paden zonder uitlegPad: `pincode-buitenland-eu` (9×), `pincode-inkomen-welvaart` (7×), `pincode-ondernemen` (7×). Deze pincode-paden krijgen voorrang boven de PO-paden uit Prio 1.
- Alle 90 leerpaden missen `prerequisites`-veld.

### Fase 2 — UI proof-of-concept — ✅ KLAAR
- [x] `src/shared/ui/VoorkennisKeten.jsx` opgeleverd (commit 742e87a).
- [x] Ingebouwd in LearnPath.jsx (regel 1014-1016) — werkt op ALLE examen-checks met `voorkennisKeten`-veld.
- [x] Self-test gedaan via productie-build.

### Fase 3 — Volledig — ✅ GROTENDEELS KLAAR
- [x] UI uitrollen naar alle examenvragen ✓ — alle 40 examen-files (5 vakken × 8 tijdvakken) bevatten `voorkennisKeten`.
- [x] Zwakste-pad-detector ✓ (commit 76150de): `findWeakestKetenIdx` in `src/shared/adaptiveStore.js`, gebruikt door VoorkennisKeten voor 👉 'begin hier'-pijler.
- [x] **Examen-modus check** ✓: impliciet OK — VoorkennisKeten wordt alleen vanuit LearnPath.jsx gerenderd (oefen-flow), niet vanuit PlayQuiz.jsx (examen-flow).
- [x] Engels examenvragen ✓ — alle 8 Engels-files voorzien.
- [x] Geschiedenis examenvragen ✓ — alle 8 Geschiedenis-files voorzien.

### Open vragen aan Mark (niet blokkerend voor fase 1)
- [ ] Antwoordmodel/correctievoorschrift per examen scrapen of handmatig? (nodig voor exacte deelvaardigheids-mapping)
- [ ] Voorkennis-data persistent in Supabase of localStorage? (privacy-impact)
- [ ] Demotivatie-framing voor kind: "X gaps" vs "nog Y stappen"?

---

## Prioriteit 1 — uitlegPad voor bestaande paden zonder

Check eerst met `Grep` welke paden geen `uitlegPad:` hebben. Pak Cito-relevante eerst:

- [x] `tabellenGrafieken.js` — 24 checks (2026-05-11, commit bc2540d)
- [x] `pincodeBelasting.js` — 42 checks (7 stappen) — commit 37a9cc9 (2026-05-11)
- [x] `pincodeBuitenlandEu.js` — commit 450b8f5 (2026-05-11)
- [x] `pincodeGeldSparenLenen.js` — 53 checks (9 stappen) — commit f30a1e5 (2026-05-11)
- [x] `pincodeInkomenWelvaart.js` — 42 checks (7 stappen) — commit 7f1c16c (2026-05-11)
- [x] `pincodeOndernemen.js` — 54 checks (9 stappen) — commit 9fd18e8 (2026-05-11)
- [x] `pincodeOverheid.js` — 42 checks (7 stappen) — commit 8a8f16c (2026-05-11)
- [x] `nederlandseStaatMaatschappijleer.js` — 24 checks (2026-05-11, commit 552d019)
- [x] `topografieNederland.js` — 28 checks (2026-05-11, commit b036055)
- [x] `tijdvakkenGeschiedenis.js` — 26 checks (2026-05-11, commit 4dab886)
- [x] `wereldoorlog2Geschiedenis.js` — 31 checks (2026-05-11, commit 5b0f1de)

**Pincode-economie status**: alle 6 paden compleet (inkomen-welvaart, ondernemen, overheid, geld-sparen-lenen, belasting, werk-arbeidsmarkt + buitenland-eu). Volgende vakgebied open: geschiedenis-paden.
- [x] `tachtigjarigeOorlogGeschiedenis.js` — 26 checks (2026-05-11, commit a0cef47)
- [x] `klimatenAardrijkskunde.js` — 22 checks (2026-05-11, commit 5e42679)

VMBO-wiskunde (na Cito-content):
- [x] `parabolen.js` — 41 checks (2026-05-11, commit c73b95a)
- [x] `kwadratischeVergelijkingen.js` — 15 checks (2026-05-11, commit 5a0dca6)
- [x] `kwadratenWortels.js` — 20 checks (2026-05-11, commit 2957d51)
- [x] `lineaireFormules.js` — 21 checks (2026-05-11, commit b00bbef)
- [x] `coordinatenstelsel.js` — 18 checks (2026-05-11, commit 2e7aa67)
- [x] `vergelijkingenOplossen.js` — 22 checks (2026-05-11, commit 92cce28)
- [x] `verhoudingen.js` — 12 checks (2026-05-11, commit 4eecd5d)
- [x] `breuken.js` — 15 checks (2026-05-11, commit 2697a39)
- [x] `negatieveGetallen.js` — 10 checks (2026-05-11, commit 7f0ab0d)
- [x] `vlakkeFiguren.js` — 19 checks (2026-05-11, commit 6174c85)
- [x] `kansrekening.js` — 26 checks (2026-05-11, commit b40cf7e)
- [x] `statistiek.js` — 14 checks (2026-05-11, commit 4f7d795)
- [x] `stelsels.js` — 20 checks (2026-05-11, commit 3a3acb0)
- [x] `machten.js` — 24 checks (2026-05-11, commit f0bb4d2)
- [x] `exponentieel.js` — 21 checks (2026-05-11, commit a121ea0)
- [x] `goniometrie.js` — 13 checks (2026-05-11, commit d6597fd)
- [x] `logaritmen.js` — 23 checks (2026-05-11, commit 151fb8c)
- [x] `differentieren.js` — 21 checks (2026-05-11, commit 66d89fa)

Talen (lager prio):
- [x] `passeComposeFrans.js` — 22 checks (2026-05-11, commit 8ee78a0)
- [x] `pastTensesEngels.js` — 23 checks (2026-05-11, commit d08cbb1)
- [x] `naamvallenDuits.js` — 20 checks (2026-05-11, commit 79c30db)
- [x] `werkwoordsvervoeging.js` — 30 checks (2026-05-11, commit 78ca142)
- [x] `onregelmatigeWerkwoordenEngels.js` — 28 checks (2026-05-11, commit d4f7103)
- [x] `onregelmatigeWerkwoordenV2Engels.js` — 23 checks (2026-05-11, commit 135c09d)
- [x] `argumentatieleer.js` — 22 checks (2026-05-11, commit 0518758)
- [x] `tekstanalyse.js` — 18 checks (2026-05-11, commit c3dae14)
- [x] `zinsontleding.js` — 26 checks (2026-05-11, commit afed8ba)
- [x] `woordsoortenNederlands.js` — 24 checks (2026-05-11, commit 77730f3)
- [x] `literatuurgeschiedenis.js` — 21 checks (2026-05-11, commit 3b21e95)

Beta-vakken:
- [x] `atoombouwScheikunde.js` — 22 checks (2026-05-11, commit dcfc5b3)
- [x] `chemischeReactiesScheikunde.js` — 21 checks (2026-05-11, commit b5263ff)
- [x] `periodiek.js` — 20 checks (2026-05-11, commit 74d343e)
- [x] `celBiologie.js` — 24 checks (2026-05-11, commit acf7992)
- [x] `geneticaErfelijkheidBiologie.js` — 22 checks (2026-05-11, commit 85566b9)
- [x] `voortplantingHormonenBiologie.js` — 28 checks (2026-05-11, commit 0f1456d)
- [x] `elektriciteitNatuurkunde.js` — 26 checks (2026-05-11, commit 6402d15)
- [x] `krachtenNatuurkunde.js` — 22 checks (2026-05-11, commit f17c8d7)
- [x] `sterrenPlaneten.js` — 29 checks (2026-05-11, commit 36dbe40)
- [x] `balansBeco.js` (economie VMBO) — 22 checks (2026-05-11, commit 245c0c1)
- [x] `vraagAanbodEconomie.js` — 20 checks (2026-05-11, commit 1601f73)

## Prioriteit 2 — Examen-paden uitbreiden

Nieuwe examenjaren toevoegen. **Alleen als de PDF-bron daadwerkelijk verifieerbaar is** (niet zelf verzinnen).

- [ ] Engels VMBO-GT 2024 tijdvak 2 — bron checken eerst
- [ ] Engels VMBO-GT 2023 tijdvak 1 — bron checken eerst
- [ ] Engels VMBO-GT 2023 tijdvak 2 — bron checken eerst
- [ ] Geschiedenis VMBO-GT 2024 tijdvak 1 — bron checken eerst
- [ ] Geschiedenis VMBO-GT 2024 tijdvak 2 — bron checken eerst
- [ ] Geschiedenis VMBO-GT 2023 tijdvak 1 — bron checken eerst
- [ ] Nederlands VMBO-GT examens (jaar checken)
- [ ] Wiskunde VMBO-GT examens (jaar checken)

**Methode**: gebruik examenblad.nl URL-patroon (`reference_examenblad_urls` in memory). Als WebFetch faalt of bron onduidelijk → skip.

## Prioriteit 3 — Cito-content uitbreiden voor groep 6-8

Alleen ICP-relevant (groep 6-8 ouder die Cito wil oefenen):
- [x] `meetkundeBouwsels` — kubus + balk (volume) groep 6-8 — commit 7b8cd72 (2026-05-12)
- [x] `procentenPo` — bestaat al; eenheden-bug gefixt commit c93bc84 (2026-05-12)
- [x] `grafiekenLezenPo` — staaf/lijn/cirkel-grafiek interpreteren — commit 67e023e (2026-05-12)
- [x] `gemiddeldenStatistiekPo` — gemiddelde/modus/mediaan groep 7-8 — commit 18e3f46 (2026-05-12)
- [x] `doorstroomtoetsTaalG8` — pilot taal-onderdeel Doorstroomtoets — commit 9d2605e (2026-05-12)
- [x] `kommagetallenPo` — decimalen groep 6-8 — commit db22c51 (2026-05-12)
- [x] `tijdsduurRekenenPo` — tijd uitrekenen groep 6-8 — commit 429f526 (2026-05-12)
- [x] `interpunctiePo` — leestekens + hoofdletters groep 5-7 — commit abc526a (2026-05-12)

## Wat NIET doen

- Geen nieuwe routes / componenten / dependencies.
- Geen Supabase-schema-veranderingen.
- Geen design-system aanpassingen.
- Geen examen-vragen verzinnen zonder bron.
- Geen content vervangen — alleen toevoegen.

---

## Sessie-log

Eén regel per sessie. Datum + wat gedaan + commit-hash van laatste push.

- 2026-07-11 — **Bug-jacht 2 (6-lens workflow + skeptische verificatie): 9 claims, 6 bevestigd, alle 6 gefixt** (commit b5319e4). HOOG: ouder-weekrapport mengde leerdata van naamgenoten uit andere gezinnen → `parent_child_links.child_user_id` + user_id-scoping in beide RPC's + API (3 migraties live via MCP). Verder: stil foutpad ouder-rapport (storing ≠ "niet geoefend"), admin_meta RLS aan (anon kon maandag-rapport onderdrukken), events-insert-validatie (dagrapport-vervalsing), SW-precache miste main-bundel (offline start faalde), offline deep-link valt nu terug op "/"-shell. NB: finders park-3d/recent/react-ui + deel kernflow-verificaties gestrand op sessielimiet → bij volgende bug-jacht die lenzen eerst.
- 2026-07-07 (3e) — **Bug-jacht (6-lens workflow + adversarial verify): 26 claims, 12 bevestigd, alle 12 gefixt + 5 zelf-geverifieerde** (commit e344999, versie 32). HOOG: park-data-verlies bij laad-fout (zoo_state overschreef bestaand park met starter). Verder: buddy-filter false-positives, SOORT-map, TTS-stop, tutor-persona + history-filter/cap, unsubscribe-alle-rijen, weekmail-dubbelen, send-oefenblad spam-gat, actuele-vraag kosten-marker (migratie), leesladder-blast idempotent, useFocusTrap focus-kaap, Kwartierplan race + total=0, OuderDashboard anon-gate, CitoPage feb-window. Ook: rempahuis.nl herstel (foute deploy van ochtend-incident bleef live) + cloud-site-wachter (dagelijks 06:30 UTC, agenda-alarm). 13 verificaties gestrand op sessielimiet → workflow-resume gedraaid.
- 2026-07-07 (2e) — **Kwartierplan sessie 1 LIVE.** Doel + startfoto + rapport in OuderDashboard, 4 tabellen + RLS, 12-vraag gestratificeerde diagnose uit doorstroomtoets-G8-pools, baseline-opslag, Brian gekoppeld aan Mark's account. Commit f9ba9f5. Volgende: sessie 2 (plan-generator + kind-strip + voltooiings-RPC).
- 2026-07-07 — **UX/a11y/doelgroep-batch (7-bots-review-restanten).** B3.3 groep 3/4-splitsing (echte groep-3-rekenset), B3.4 VO ziet examens eerst, B6.3 Doorstroomtoets-countdown op CitoPage, B5.3 focus-traps op 3 modals, B5.4 Verder-knop i.p.v. auto-advance, B5.5 tap-targets 44px, B5.6 text-soft-token + alt-fallback. B6.1 bleek al klaar (3/7). Sahasra's "wat is een supporter"-vraag beantwoord op /tips. 2 peer-review-agents gedraaid. Commits 6a5d654 + 0f54cbe.

- 2026-06-28 — **Project Titan-start (KPI 1000 actieve gebruikers) — groei + kwaliteit** (laatste push 0e749e6). Nulmeting: verkeer vlak, e-maillijst 17 dagen op 0, park>>leren. **(1) Conversie-killer gefixt** — `GratisLesmateriaal` schreef de lead pas ná de optionele profielstap → afhakers verloren; nu insert direct na stap 1 (verklaart de dode lijst). **(2) SEO-cluster** — nieuwe pagina's spelling/woordenschat/studievaardigheden + groep-7 (+ sitemap/llms.txt/interlinks). **(3) Homepage-declutter** — redundante "Meer dan een toets"-grid weg (3/4 knoppen dupliceerden rol-tegels+bottom-nav); browser-geverifieerd. **(4) Viral deel-loop** — `DeelTrotsKnop` in kwartier-felicitatie (ouder deelt mijlpaal, ref-code, event `kwartier_gedeeld`); end-to-end getest. **(5) A11y B5.6** alt/labels op vraag-bronafbeeldingen. **(6) B2.3** 21 lazy-hints in 9 Cito-kern paden → richting-hints. **(7)** Sahasra Engels-bug + 2 wrongHints-leaks. Memory: `project_studiebol_titan`. **Meten:** upgrade_waitlist-groei, `kwartier_gedeeld`, `utm_source=trots`, SEO-verkeer pijler-pagina's. **Open (niet-blind):** social-batch (Chrome, wacht op go), homepage-verdere-declutter via live-loop, resterende Pattern-A in P4-vakken.
- 2026-06-15 (3e) — **B2.6 + B3.2.** B2.6: niveau-uitleg (met antwoord) niet meer opzoekbaar vóór de eerste poging — VraagUitlegPad `verbergNiveaus` bij attempts===1. B3.2: PO-groep-filter in de hub-vakdetail (default = eigen groep, "Alle groepen"-uitweg, fallback bij lege staat). typecheck + 211 tests + build groen.
- 2026-06-15 (2e) — **B2.3 + B2.4.** B2.3: genoemde eliminatie/lazy-hint-plekken herschreven + dubbele vraag "3/5 of 2/3" uit doorstroomtoetsRekenenG8 weg (177 Pattern-A hits elders blijven open). B2.4: write-only spaced-rep opgelost — srRecordSeen uit LearnPath weg, spacedRepetition.js slapend, topic_mastery blijft de live engine. 211 tests + build groen.
- 2026-06-15 — **B2.1 + B1.5 (gate-helften).** B2.1: 3538 antwoord-letters uit inline uitlegPad-niveaus gestript (117 files, nieuw `scripts/fix-uitlegpad-letters2.mjs`, commit 1497137). B1.5: 15-min build-gate `scripts/check-path-duration.mjs` (ratchet tegen `pathDuration.baseline.json`, in `npm run prebuild`) + `npm run duration`-rapport. 211 tests + build groen. **Open vervolg:** B2.1 = literal-answer nogSimpeler-herschrijf (per concept, niet automatiseerbaar); B1.5 = 206 lange paden écht splitsen (risico pad-id → met Mark).

- 2026-06-13 — **7-bots-review (71 bevindingen) + 13 fixes** (laatste push 823dcbf). (1) Vraagflow-animaties: fout-schud + cross-fade + confetti + AllDone-bereikbaarheids-bugfix (afrond-kaart op laatste stap, commit 202d618). (2) Kikker Oversteek: raak-pauze 💥 + frame-onafhankelijke genade (17d0b58). (3) 7 persona-agents → sectie "🤖 7-BOTS-REVIEW" bovenaan deze backlog. (4) Gefixt: B0.1 LearnPath-key, B0.2 SW-skipWaiting-reload, B0.3 timeout-cleanups, B0.4 stille Supabase-fouten, B0.6 sessie-score, B1.1 prijs-tegenspraak, B1.2-banner, B2.2 correctievoorschrift-dicht, B2.5 examRef-stepIdx, B3.1 leeftijdsfilter chips, B5.1 contrast, B5.2 aria-live, B0.5-deels (338 antwoord-letters gestript, nieuw script scripts/fix-uitlegpad-letters.mjs). **Volgende sessie: B1.2-timer, B2.1-content-herschrijf, B4-leerkrachtblok.**

- 2026-06-12 — **Herkansing-landing + bob-tips + crash-fix 12 paden + KaTeX** (laatste push 02e3792). (1) `/herkansing` live: examen-oefenpaden per vak gebundeld voor uitslag-week, 2 Threads-reacties bij gezakt-posts verwijzen ernaartoe. (2) Bord-tips "bob" verwerkt: `## kopjes`-support in uitleg-renderer, machtsregels-spiekbriefje, eerste interactieve grafiek (`InteractieveGroeiGrafiek` op exponentieel stap 3) + 5 maker-bedankjes op /tips. (3) **BUGFIX productie**: 12 paden (klokkijken, verhoudingen, machten, statistiek, e.a.) crashten op overview — chapters wezen voorbij laatste stap; UI clampt nu + machten-data gefixt. **OPEN: chapters-data van de overige 11 paden nog corrigeren** (scan-script in sessie; UI vangt het af maar data blijft scheef). (4) KaTeX lazy ($...$-notatie) in renderInline+MdInline; formules omgezet in machten/logaritmen/differentialen-paden. **LES: leerpad-file die een component importeert MOET .jsx zijn** — buildPathManifest (Vercel prebuild) kan JSX-imports in .js niet laden → pad valt stilletjes uit manifest ("bestaat niet meer" op prod).

- 2026-06-10 (4e) — **Homepage-herbouw spoor A LIVE** (commit dc38b03, Mark-akkoord 'gooi alles om'): één gecentreerde hero (merk groot + BRAND.slogan — dubbele slogan opgelost + ouder-zin + één gouden CTA → Doorstroomtoets + vertrouwensregel), gratis-banner+teller opgegaan in hero/bewijs-strip, klacht-quotes → eigen-bewijs-strip + maker-verhaal, neon-chip → goud, oefenpakket gedemoveerd, TickerBanner-dode-code weg (−240 regels), 10.5px→12.5px. Voor/na-screenshots geverifieerd. **Open uit verbeterplan:** A5 video-flow (Mark-keuze), A6 thema-vraag, AI-stockfoto's tegels, B1 Resend, B3 startfoto.
- 2026-06-10 (3e) — **Concurrentie-scan + verbeterplan (5 agents).** Squla/JE + StudyGo/Examenbundel/Slimleren/ExamenOverzicht teardowns, internationale patronen (Duolingo-onboarding, Prodigy gratis-content-model, streak-met-rustdagen), reclame-analyse (countdown-campagnes, mama-blog-winacties, RCC-waarschuwing Cito-claims), kritische buitenstaander-review homepage (11 CTA's in hero, geen ouder-ingang, dubbele slogan brand.js:15 vs HomePage.jsx:919, 10.5px primaire CTA, dode TickerBanner). Claims geverifieerd in code; 2 'vondsten' = bewuste Mark-keuzes (geluid-aan video, vraag-vd-dag-banner) → gemarkeerd als keuze. **Plan: docs/VERBETERPLAN-2026-06.md** (steel-lijst S1-S12 + sporen A/B/C + volgorde). Eerlijk oordeel: niet kansloos — marktgat 2× onafhankelijk bevestigd; probleem zit in de eerste 30 seconden van de homepage.

- 2026-06-10 (2e) — **Doorstroomtoets-kern 100% (proef 2).** Trio aangevuld naar doel: Taal 148→213 (+62: woordenschat/begrijpend-lezen-miniteksten/spelling/taalverzorging), Rekenen 149→217 (+61: breuken/procenten-€-discipline/meten-schaal/redactiesommen), Studievaardigheden 150→210 (+60: kaart/tabel-grafiek/woordenboek-index/schema's/eind-mix). Alles huis-format (denkprikkel-hints, explanation, uitlegPad op kernconcepten, open vragen per stap), audit-script schoon per chunk, 3 commits (383e223, cf8ef11, 190fa69). docs/CONTENT-DOELEN.md bijgewerkt: 630q-doel = ✅ 102%. **Volgende kern-stap**: 2× 30-vragen proef-toetsen zijn er al via buildProefToets; rest-werk zit in VMBO-examens (bronteksten 6 JSONs) + PO-onderwerpen-gap.
- 2026-06-10 — **Bug-jacht + herstel-ronde (Fable 5 proef 1) + altijd-A-fix.** (1) 6-agent bug-jacht + deterministisch audit-script over 16.518 vragen → commit e5f7cfe: 42 dubbel-juist-antwoord-vragen (o.a. tafels-generator topics.js), 20 dode klas1-taalvragen (dubbele key), overschreven boek-covers, 3 prerequisite-typo's, 10 wrongHints-defecten, 12 examen-JSON-meta's, economie-2023-T1 v30 gereconstrueerd, copy-fixes. (2) Herstel-ronde → commit 02b34da: 21/27 examen-quizzes geregistreerd onder canonieke ids + missing-tekst-guard + lichte speelbaar.js (bundle), 15 paden in ALL_LEARN_PATHS, abonnement.html → per-kwartier-model, CHAPTER_TITLES ×3, security (origin-leidend, e-mail-waarde-filter, RLS geverifieerd dicht). (3) **Altijd-A-bias**: 8.374/8.675 checks hebben answer op index 0 en geen enkele toets-flow schudde opties → `src/shared/shuffleOpties.js` toegepast in proef-toets/examen-mix/Cito-mix (authentieke examenBron-vragen behouden officiële volgorde), 200 tests groen, commit 7dc3edd. **Open**: 6 examen-JSONs wachten op bronteksten (zie comment examenQuizzes/index.js); trio-aanvulling 150→210q per onderdeel; leer-modus toont checks nog ongeschud (data-conventie answer=0).
- 2026-06-07 — **Obliterator engagement (15-agent-analyse + kritische review).** Quick wins LIVE (commit 88d6235): Fase 1 SCORE_MUL 10→11 (+10%, geen DB-migratie); Fase 2 `laadTopScoresWeek()` + Dag/Week/Aller-tijden segment-control (week default) + lokale NL-daggrens i.p.v. UTC-bug; Fase 3 rang-systeem `src/games/obliterator/rank.js` op hoogst-behaald level (Bronze→Legendary, client-side, cosmetisch, badge naast score + eigen record). **✅ SECURITY MUST-FIX TOEGEPAST 2026-06-07** (migratie `supabase/migrations/20260607_obliterator_hardening.sql`, op productie gedraaid + geverifieerd, Mark gaf "doe maar het beste"): (1) FIX1 score-cap 100k→500k (nodig door +10%) + level 0-100 CHECK — getest: 120k OK, level 9999 geweigerd; (2) FIX2 identity-trigger (ingelogd→display_name, gast-"Brian"→"Brian (gast)") — getest ✓, bouwt voort op bestaande sanitize-trigger (die cijfers/scheldwoorden/12-cap al deed); (3) FIX3 client_key + partiële unique-index + scores.js stuurt client_key + 23505-afhandeling = dedup actief tegen dubbele offline-flush (commit). **Nog open product-keuze (uitgecommentarieerd in migratie):** anon-scores van publiek bord weren (sterkste anti-injectie, maar gast-kinderen verdwijnen dan). **Medium (later):** skins UITBREIDEN (12 bestaan al constants.js:220 — onderste 2-3 laagdrempelig via missie/streak), persoonlijk-record-balk bij game-over, game-events voor KPI. **Niet doen (Critical Reviewer):** ghost/nep-rijen, FOMO-streak-copy, seizoen-tabellen/vriendcodes = dark-pattern/scope-creep.
- 2026-06-07 — **USP-lek opschoning (groot).** De 3-niveau-uitleg (kern-USP) eindigde stelselmatig op een aangeplakt antwoord-letter-token dat het antwoord verklapte + na shuffle vaak de verkeerde letter was. Nieuw scoped fix-script `scripts/fix-uitlegpad-letterleak.mjs` (dry-run + lege-string-guard, 3 hoog-precieze vormen): **6924 "= A."-tokens** (commit f89f5fa) + **415 "Antwoord/optie A."-tokens** (commit 3b1b30a) gestript met behoud van de didactische uitleg. Ampère-eenheid/bloedgroep/"wis A en wis B" bewust ontzien. lineaireFormules.js: 4 wiskunde-wrongHints herschreven (methode behouden, eindantwoord weg). Build groen. **Rest open**: ~146 pattern-D wrongHints (lange staart, ~helft substring-false-positives zoals "waar"⊂"waarom"), ~66 losse " [A-D]." (handmatig — bevat echte false-positives), 13 kale "= A." (meest legit wiskunde zoals A·I=I·A), 77 "Klopt" (meest "Klopt niet —" = prima). Aanrader: linter aan CI hangen tegen regressie.
- 2026-06-07 — **Topografie vindbaar gemaakt.** 3 interactieve topografie-leerpaden (NL provincies+hoofdsteden / Europa landen+hoofdsteden / Wereld werelddelen, `.jsx` met klikbare SVG-kaarten via `components/learn/geo/`) bleken al gebouwd (5 juni) + in manifest, maar nergens aangekondigd. Nieuwe `NieuwTopografieBanner.jsx` op StudentHome met 3 klikbare `?pad=`-deeplinks (dismissible). Productie-verificatie via Playwright: NL-pad opent + kaart "Kaart van Nederland met provincies" met 12 klikbare paden rendert, 0 console-errors; Europa-pad opent (6 delen). Geen topografie-tip in wishes/feedback → publieke bedank-regel in banner volstaat. Build groen. Eindcommit gepusht (banner). Naast-werk: social-groei midday-meting (geen volger-groei nog) + IG-DM-check (loos alarm).
- 2026-05-20 — **CONTENT-MEGA-SESSIE** (30 paden + 5 UI-fixes, commits cb160e0 → 65fc745, manifest 254 → 277). HAVO/VWO-cluster sterk uitgebouwd: 6 nask (trillingen-golven, elektromagnetisme, radioactiviteit, optica, warmte-thermodynamica, quantum-atoommodel), 5 wiskunde (goniometrie, differentialen, log-exp, algebra-vergelijkingen + bonus), 4 biologie (ecosystemen, evolutie, immuunsysteem, hart-bloed-ademhaling), 1 scheikunde (mol-stoichiometrie-redox), 3 geschiedenis (industriële-revolutie, WO2-Holocaust, en eerder), 1 economie (marktvormen-markfalen), 4 aardrijkskunde (atmosfeer-klimaat, globalisering, stedelijke ontwikkeling, energie-hulpbronnen), 1 nederlands (stijl-literatuur), 1 engels (literatuur), 1 filosofie, 1 maatschappij (mensenrechten-VN), 2 PO Cito (maten-omtrek-oppervlakte, tijd-snelheid-afstand). UI-fixes: OBLITERATOR settings/Hall of Fame/8 muziek-stages, mobile-overflow (overflow-x:hidden + min-width:0), examen-mix-bron-label (gele tekst onder vraag), desktop hero-tiles breder ≥1024px + aspect 5:4, mobile tile-aspect 4:5, examens-CTA-routing fix (role=student bij feature examens). Eindcommit `65fc745`.
- 2026-05-18 — **MEGA-SESSIE** (~30 commits). Live-meekijken iteratie-workflow vastgelegd in memory (split-screen + dev-server pattern). Homepage-tegels redesign (2-knop-grid per tegel + 'Of direct naar X' goudgeel-accent + tip-knop weg). Examen-mix-feature per vak ('Doe een echt Engels-examen — alles door elkaar', buildExamenMix.js). Topic-picker-flow naast Leren/Oefenen-uit-boek (TopicPicker.jsx + buildTopicQuiz.js). Examen-pad opent direct in vraag 1 (skipt hoofdstuk-overview). Sla-over-knop bij klas-keuze klapt sectie écht weg. Rol-filter compleet: ExamensPage-fallback voor PO + CitoPage-fallback voor VO + LearnPathsHub-PO/VO-filter. ExamensPage-banner klikbaar + "Maak dit examen — echte vragen mét uitleg"-copy. Step.svg meegegeven in alle 3 sample-flows (gatherPoChecks/buildProefToets/buildExamenMix infra-fix). Step-titel-strip "Vraag N —" in examen-paden. 4-agent-audit (concurrentie/SLO/persona/UX). **P0-todo compleet**: 3 quick-wins + Schrijven-pad (25 vragen) + Informatiebronnen-pad (25 vragen) + Doorstroomtoets-simulatie 50q/60min + niveau-advies + Koppelcode-flow kind-zijde + RPC SQL + 2-vragen niveau-wizard. Eindcommit `245fe1f`. **Open Mark-actie**: SQL-migration `20260518_claim_link_code.sql` apply via Supabase MCP. **Volgende sessie**: P1 — VMBO geschiedenis-SI 1848/Indonesië/sociale zekerheid + AK Nederland-water + Engels CSE woordenschat + CitoPage groep-prompt.
- 2026-05-10 — Backlog opgesteld door Claude. CLAUDE.md uitgebreid met autonome-modus regels + peer-review cadens. Commit pending.
- 2026-05-10 — Optie-C plan geformaliseerd (3 fases) + self-test-regels. Audit-script `scripts/auditKennisgraaf.mjs` werkt. Economie 2023-T1 (5 vragen) voorzien van `voorkennisKeten`. Audit-bevinding: pincode-paden zijn meest-referenced zonder uitlegPad — prio bijgesteld.
- 2026-05-11 — pincodeBuitenlandEu (42 vragen, 7 stappen) volledig voorzien van uitlegPad. Was meest-gerefereerd door examen-vragen (9×). Build + audit groen. Volgende: pincodeInkomenWelvaart (7 examen-refs). Commit 450b8f5.
- 2026-05-11 — Playwright-testronde Maand-1 testchecklist (8 items, 6 PASS / 1 FAIL / 1 PARTIAL) + 4 follow-up fixes: ticker game/HoF-jargon weg (HomePage.jsx), /leaderboard alias toegevoegd (routes.js), CSP wss://*.supabase.co toegestaan (vercel.json), subscriptions/profiles `.single → .maybeSingle` (useAuth.js) tegen 406. Commit a543377.
- 2026-05-11 — voorkennisKeten Fase 1 DATA-laag VOLLEDIG: alle 9 examen-paden voorzien (Economie T1-T2 2023-2025 + Engels 2024-T1 + Engels 2025-T1 + Geschiedenis 2025-T1). 61 examen-checks × 3 voorkennis-stappen. Audit: 0 broken loops, 0 ontbrekende voorkennisKeten. Patroon: woordenschat-po + begrijpend-lezen-strategie + specifiek vakpad. Eindcommit 83762e1.
- 2026-05-11 — Prerequisites op top-10 examen-referenced paden (woordenschat-engels 17×, pincode-* 9-3×, tijdvakken/wo2-geschiedenis 3×). Patroon: NL-basis (woordenschat-po) + skill (procenten/begrijpend-lezen/kaartlezen) + soms een mid-level pincode-pad. Commit b0a2221. Fase 1 praktisch compleet — UI-fase 2 wacht op Mark's go (zie CLAUDE.md hard-stop).
- 2026-05-11 — Prerequisites op 6 Cito-PO-paden (ICP groep 6-8): tabellen-grafieken, redactiesommen, procenten-po, verhoudingen-po, breuken-po, geld-rekenen. 16/90 paden voorzien. PO-fundering zelf blijft zonder prereqs. Commit 735cc82.
- 2026-05-11 — **pincodeInkomenWelvaart VOLLEDIG voorzien van uitlegPad** (42 checks, 7 stappen): schaarste/behoeften, productiefactoren, inkomenstypen, verdeling/Gini, welvaart/inflatie/koopkracht, BBP/HDI, inkomensbeleid. Was #1 op lijst examen-referenced paden zonder uitlegPad (7 examen-refs). Audit nu ✓ uitlegPad ✓ prereq. Commit 7f1c16c.
- 2026-05-11 — **pincodeOndernemen VOLLEDIG voorzien van uitlegPad** (54 checks, 9 stappen): ondernemen-types, marktonderzoek/SWOT, doelgroep+4P's, omzet/kosten/winst+BEP, vraag-aanbod, 4 marktvormen, rechtsvormen, BTW+facturen, risico/faillissement. Was #2 op audit-lijst (7 examen-refs). Audit nu ✓ uitlegPad ✓ prereq. Commit 9fd18e8.
- 2026-05-11 — **pincodeOverheid VOLLEDIG voorzien van uitlegPad** (42 checks, 7 stappen): overheidstaken/collectief goed/extern effect, overheidslagen+jeugdzorg, Rijksbegroting/Prinsjesdag, staatsschuld/EMU/obligatie, conjunctuur/recessie/depressie, marktordening/ACM/kartel, politiek systeem/Tweede Kamer/coalitie. Was #3 op audit-lijst (4 examen-refs). Audit nu ✓ uitlegPad ✓ prereq. Commit 8a8f16c.
- 2026-05-11 — ExamensPage refactor (Mark feedback): twee gelijkwaardige modi — 🎯 oefenen-met-uitleg (examen-leerpaden bovenaan, USP zichtbaar) en 📄 PDF-inzien (bestaand, krijgt eigen kop). StudentHome 1→2 balken. CLAUDE.md + memory geüpdatet. Commit 32441d2.
- 2026-05-11 — **pincodeGeldSparenLenen VOLLEDIG voorzien van uitlegPad** (53 checks, 9 stappen): geld 3-functies, betaalmiddelen+Klarna-risico, sparen+rente, sparen-vs-beleggen+crypto, geldkringloop+DGS, inflatie+koopkracht, begroten+50/30/20, lenen+BKR, hypotheek-detail. Was #4 op audit-lijst (4 examen-refs). Audit nu ✓ uitlegPad ✓ prereq. Commit f30a1e5.
- 2026-05-11 — **pincodeBelasting VOLLEDIG voorzien van uitlegPad** (42 checks, 7 stappen): soorten+premies, BTW+accijns, IB+schijven+boxen, heffingskortingen+werk-loont, toeslagen+toeslagenaffaire, belastingmoraal+Panama Papers, Belastingdienst+DigiD+sancties. Was #5 op audit-lijst (3 examen-refs). Audit nu ✓ uitlegPad ✓ prereq. Commit 37a9cc9.
- 2026-05-11 — UX fix ExamensPage SectieKop (Mark): was te knop-achtig (rand-frame met kleur), nu hoofdstuk-stijl met onderlijn. Tekst PDF-sectie verduidelijkt naar "Hieronder kun je hele examens inzien (PDF)". Commit 769675b.
- 2026-05-11 — **pincodeWerkArbeidsmarkt VOLLEDIG voorzien van uitlegPad** (42 checks, 7 stappen): werkgever/werknemer+contracten, arbeidsovereenkomst+proeftijd, CAO+krapte+vakbond, vraag-aanbod arbeid+evenwichtsloon, werkloosheid 4 soorten+verborgen, productiviteit+paradox, sociale zekerheid+WW+AOW+bijstand. Was #6 op audit-lijst (3 examen-refs). Audit nu ✓ uitlegPad ✓ prereq. Commit b83d00f. 🎉 ALLE 6 PINCODE-ECONOMIE-PADEN COMPLEET. Samen 275 checks.
- 2026-05-11 (later) — MEGA-SESSIE: kennisgraaf 100% gesloten. uitlegPad toegevoegd aan: tijdvakkenGeschiedenis (26 checks, commit 4dab886), wereldoorlog2Geschiedenis (31, 5b0f1de), pincode-ontwikkelingslanden (42, f57f3a5), tabellenGrafieken (24, bc2540d), topografieNederland (28, b036055), nederlandseStaatMaatschappijleer (24, 552d019), klimatenAardrijkskunde (22, 5e42679), tachtigjarigeOorlogGeschiedenis (26, a0cef47). Totaal 223 uitlegPad-checks. PLUS: 2 bug-fixes (kaartlezen+matenEenheden, 5fe8699), naming Cito-eindtoets → Doorstroomtoets in user-facing copy (11 files, 6db6082), nieuw pilot-pad doorstroomtoetsRekenenG8 (20 vragen, 2674ce9), memory + CLAUDE.md updates (Doorstroomtoets-naming + copyright-policy + memory-raadplegen-regel + C-taak klas 1-3 onderbouw VO opgeslagen). Audit: 0 examen-referenced paden zonder uitlegPad.
- 2026-05-11 (verder) — VMBO-wiskunde uitlegPad-batch: statistiek (14 checks, commit 4f7d795), kwadratischeVergelijkingen (15, 5a0dca6), coordinatenstelsel (18, 2e7aa67). Totaal 47 extra checks. Bovenste niet-afgevinkte taak (parabolen 41 checks) overgeslagen: backlog-annotatie 'doe in meerdere sessies' — voor losse sessie.
- 2026-05-11 (verder) — uitlegPad-vervolg: kwadratenWortels (20, 2957d51), lineaireFormules (21, b00bbef), vergelijkingenOplossen (22, 92cce28), stelsels (20, 3a3acb0), machten (24, f0bb4d2), exponentieel (21, a121ea0). Totaal 128 extra checks. Backlog stale checkboxes opgeschoond.
- 2026-05-11 (nóg verder) — VMBO-wis afgemaakt + talen begonnen: verhoudingen (12, 4eecd5d), breuken (15, 2697a39), negatieveGetallen (10, 7f0ab0d), vlakkeFiguren (19, 6174c85), kansrekening (26, b40cf7e), goniometrie (13, d6597fd), logaritmen (23, 151fb8c), differentieren (21, 66d89fa), passeComposeFrans (22, 8ee78a0), pastTensesEngels (23, d08cbb1). Totaal 184 extra checks. Hele wiskunde-blok klaar (behalve parabolen — meerdere sessies). Talen onderweg.
- 2026-05-11 (mega-sessie afsluiting talen) — Hele talen-blok klaar: naamvallenDuits (20, 79c30db), werkwoordsvervoeging (30, 78ca142), onregelmatigeWerkwoordenEngels (28, d4f7103), onregelmatigeWerkwoordenV2Engels (23, 135c09d), argumentatieleer (22, 0518758), tekstanalyse (18, c3dae14), zinsontleding (26, afed8ba), woordsoortenNederlands (24, 77730f3), literatuurgeschiedenis (21, 3b21e95). Totaal 212 extra checks. Hele Prio-1 talen-blok afgerond. Volgende: beta-vakken.
- 2026-05-11 (beta-blok COMPLEET) — Alle 10 beta-vakken voorzien van uitlegPad: chemischeReactiesScheikunde (21, b5263ff), periodiek (20, 74d343e), celBiologie (24, acf7992), geneticaErfelijkheidBiologie (22, 85566b9), voortplantingHormonenBiologie (28, 0f1456d), elektriciteitNatuurkunde (26, 6402d15), krachtenNatuurkunde (22, f17c8d7), sterrenPlaneten (29, 36dbe40), balansBeco (22, 245c0c1), vraagAanbodEconomie (20, 1601f73). **234 nieuwe uitlegPad-checks**. Daarnaast 2 UI-fixes voor Mark: examenBron-pill upgrade naar gouden banner met examenblad.nl-link (a292a96), welkom-video geluid standaard AAN met autoplay-fallback (5f1c1ee). Hele Prio-1 uitlegPad-werk klaar behalve parabolen.js (32 stappen, separate sessie).
- 2026-05-11 (parabolen toegevoegd) — Hele parabolen.js (41 checks, commit c73b95a) voorzien van uitlegPad. **Prio-1 uitlegPad-blok COMPLEET.** Alle paden in backlog Prio 1 hebben nu didactische 3-niveau-uitleg.
- 2026-05-12 — MEGA-AUTONOMOUS SESSIE: 30 NIEUWE PADEN + ResultsPage upgrade + peer-review-fixes. Klas 1-3 onderbouw VO continuum verder opgebouwd: 9 vakken (biologie ecosystemen+fotosynthese / geschiedenis Romeinen→middeleeuwen→Gouden Eeuw→Franse Rev→WO1 / aardrijkskunde bevolking-migratie / Engels comparatives+conditionals+CSE-leesvaardigheid / scheikunde stoffen-mengsels / natuurkunde licht-geluid+bewegingen-snelheid / maatschappijleer mensenrechten / Duits werkwoorden / Frans werkwoorden). Pilot-trio Doorstroomtoets compleet. ExamenBronBanner+ExamenPadBanner shared components voor gele markeerstift-look. ErrorBoundary chunk-load-recovery (PWA deploy-mismatch). Roadmap #5 (CSE-engels) gedaan. Totaal paden: 113 → 148. Bug-fix procentenPo (Mark-melding "100−30=70" zonder %/€), audit-units lint script, fixes geldRekenen + redactiesommen + schattenAfronden + tabellenGrafieken. CitoLeerpadToets fout-vragen flow uitgebreid: "▼ Meer uitleg & leerpad"-toggle met VraagUitlegPad-inline + leerpad-knop, consistent met LearnPath-flow. 3-agents peer-review op alle 21 nieuwe paden + 5 feitelijke fouten + 4 mythe-claims + 6 didactische problemen gefixt. 24 nieuwe paden: meetkundeBouwsels, grafiekenLezenPo, gemiddeldenStatistiekPo, doorstroomtoetsTaalG8, kommagetallenPo, tijdsduurRekenenPo, interpunctiePo, kalenderRekenenPo, continentenWereldPo, lichaamGezondheidPo, synoniemenTegenstellingenPo, waterErfgoedNederlandPo, tafelsPo, delenPo, toestandStoffenPo, dierenklassenPo, fotosyntheseBiologie (klas 1-2 VO), goudenEeuwGeschiedenis (klas 2-3 VO), middeleeuwenGeschiedenis (klas 1-2 VO), franseRevolutieGeschiedenis (klas 2-3 VO), comparativesEngels (klas 2), **doorstroomtoetsStudievaardighedenG8** (pilot-trio compleet), **romeinenGeschiedenis** (klas 1-2 VO), **wereldoorlog1Geschiedenis** (klas 2-3 VO). ~580 nieuwe checks. Geschiedenis-keten compleet: Romeinen → middeleeuwen → Gouden Eeuw → Franse Rev → WO1 → WO2. Doorstroomtoets-trio compleet: rekenen + taal + studievaardigheden. Totaal paden: 113 → 137.
- 2026-05-13 (later) — Begrijpend-lezen-flow uitbouw (P1) ronde 4-5-6: grafiekenLezenPo 14/24 → **24/24 (100%)**, samenvattenHoofdgedachtePo 12/18 → **18/18 (100%)**. +13 uitlegPad-blokken (Cito-trucs: T-A-E, hoogste/laagste, 50%-ezelsbruggetje, eigennaam+getal-anecdote-truc). Loop-audit: 11 unieke leerpadLink-ids, **0 broken loops**. **PRE­REQUISITES VOLLEDIG VOLTOOID** (P0.5-fase-1): 90 → **163/163** leerpaden (+73) over 9 batches (Cito-PO kern → VO NL → VO talen → VO wisk/eco/bèta → laatste 16). Audit-scripts gedraaid (lint-wronghints + audit-units), te veel false-positives voor batch-fix. Build groen elke batch. Commits 35622e1 → ef89648.
- 2026-05-13 (Sprint-0 + content) — Audit-1 instant-fixes ✓: QW1 verklap-bug, QW2 adaptief alle checks, QW4 examen-modus-splitsing, QW5 61 examen-vraag-URLs, QW6 daily-cost-cap AI, QW7 lazy-load LearnPath-pilot, QW10 RLS-export. PAYWALL-infrastructuur klaar (PAYWALL_ACTIVE=false tot Cito-piek 2027). **Content P2 opvulling 11 paden, +44 vragen**: geldRekenen 17→23, redactiesommen 17→22, schattenAfronden 17→22, werkwoordTijdenPo 17→21, negatieveGetallenPo 17→21, vlakkeFigurenPo 17→20, bekendeNederlandersPo 18→22, gezondeVoedingPo 18→21, evolutieMensPo 18→21, bekendeBoekenLiteratuurPo 18→21, bekendeWetenschappersPo 22→25. Alle nieuwe vragen met uitlegPad-blueprint. Commits 21f4f22 → c0362a0.
- 2026-05-14 — Vervolg content-opvulling: 4 paden, **+12 vragen** in wereldoriëntatie/digital-literacy. digitaleGeletterdheidPo 18→21 (phishing/cookies/algoritme), algoritmenProgrammerenPo 18→21 (if-else/bug/variabele), pubertijdGroeiPo 18→21 (groeispurt/botten/brein), beroepenWerkPo 22→25 (MBO-HBO-WO/CAO/werken vanaf 13). Modern Cito-relevante stof + NL-context (Toeslagenaffaire/Grace Hopper-mot/Eveline Crone/FNV). Commits 0c06edd → 74a66ec.
- 2026-05-14 (later) — Bug-fix productie blauw scherm: circulaire chunk examens↔wiskunde door pathLoaders.js's import.meta.glob die test-files meenam. Vite-chunk-config fix + pathLoaders glob excludes. Commit 87ae1dc. **PLUS** content P2 opvulling 3 aardrijkskunde-paden, **+9 vragen**: werelddelenLandenPo 18→21 (Nijl/buurlanden/continenten), waterkringloopPo 18→21 (cyclus/dijken+Watersnood 1953/drinkwater NL), weersvoorspellingPo 18→21 (klimaatverandering+Parijsakkoord/windrichtingen/storm-definitie KNMI). NL-context overal: Watersnood, Maeslantkering, KNMI De Bilt. Commits fbd6932 → fd8e42e.
- 2026-05-14 (avond) — Content P2 opvulling 5 wereldoriëntatie/studievaardigheid-paden, **+15 vragen**: kritischDenkenPo 18→21 (fake news+deepfakes/anekdote-fout/syllogisme), recyclenAfvalPo 18→21 (PMD-bak/microplastics/3 R's), ontdekkingsreizenPo 18→21 (doel reizen/VOC 1602-1799/inheemse sterfte 90%), oudheidEgyptiansGriekenPo 18→21 (hiërogliefen+Champollion/Olympische Spelen 776 v.Chr./mythologie), schemasStappenplannenPo 18→21 (5-stappen-rekenen/beslisboom-schooladvies/voedselketen). 2-perspectieven-geschiedenis + moderne thema's + studievaardigheid. Commits e08b380 → e34f73c.
- 2026-05-14 (laat) — Content P2 opvulling 3 taal/rekenen-Cito-paden, **+9 vragen**: verhoudingenPo 20→23 (recept-factor/schaal 1:25.000/eenheidsprijs-verf), woordenschatPo 20→23 (spreekwoord 'kat uit boom'/metafoor 'open boek'/antoniem 'overvloed'), samenvattenHoofdgedachtePo 18→21 (signaalwoorden conclusie/betoogtekst hoofdgedachte/samenvatting-lengte 20-30%). Cito-kern (begrijpend lezen + woordenschat + verhoudingen). STOPLIST-paden (eetcultuur/Olympische/etc) verlaten — niet meer dunne PO-paden buiten STOPLIST. Commits a2a8a58 → 7d247fc.
- 2026-05-16 (7e autonome blok, ~2u) — **Mark observatie "waarom geen 8 per vak?"** opgepakt. 2 nieuwe examen-leerpaden + placeholder-UI:
  - **Biologie 2025 tijdvak 2** (6 vragen: meerling-FSH / nageboorte / grote hersenen / gal / zaadleider-route / giraffe-plooikiezen). Commit d2333a2.
  - **Engels 2025 tijdvak 2** (6 vragen: koemest-biogas / spelling bee / phones in schools / vintage sizing / bridezilla mocking / Māori tattoo). Commit d2333a2.
  - **Placeholder-UI in ExamensPage** sectie 1: per vak nu "X / 8" teller, dashed-border placeholders voor ontbrekende slots met PDF-link knop ernaast, info-banner voor niet-haalbare vakken (wiskunde/nederlands/aardrijkskunde) met reden. Commit fb40809.
  - 4 haalbare vakken nu: Biologie 5/8, Economie 6/8, Engels 4/8, Geschiedenis 5/8 = 20/32. Maatschappijkunde 3 paden (geen 8-target).
  - 24 niet-haalbare slots (wisk/ned/aardr) zichtbaar als placeholders met directe PDF-link.
- 2026-05-16 (7e autonome blok, ~2u) — **4 NIEUWE examen-leerpaden batch** (Mark verzoek "ga door met vullen") aanvullend op 6e blok:
  - **Engels 2023-T1**: 6 vragen (T1 Twickenham/T2 trees/T4 Jamaican bobsledders/T5 Wild Place/T6 smokejumpers ×2).
  - **Economie 2022-T1**: 5 vragen (EU vrij verkeer/CPB Prinsjesdag/modaal inkomen/recordoogst/UWV werknemersverzekeringen).
  - **Biologie 2022-T1**: 5 vragen (geslachtsbepaling/vaccin actief/witte bloedcellen DNA/water-opname dikke darm/koolhydraten dunne darm).
  - **Geschiedenis 2022-T1**: 4 vragen (caoutchoucartikel 1887/Nazi terreur+strafkampen+censuur/Spoorwegstaking Hongerwinter). V23 kaart-vraag overgeslagen.
  - Vakken-teller: Engels 4/8→5/8, Economie 6/8→7/8, Biologie 5/8→6/8, Geschiedenis 5/8→6/8. Totaal oefen-examens 21→25.
  - 20 nieuwe SEO-vraagpaginas in public/examen/. pathManifest 191→193, examenLookup 143→152 refs / 25 targets. Build groen. Commit 6a607d1.
- 2026-05-16 (6e autonome blok, ~2u) — **2 NIEUWE examen-leerpaden zichtbaar** (Mark verzoek "wel zichtbaar nieuw examen-pad bouwen"):
  - **Geschiedenis 2025 tijdvak 2**: 6 vragen (Grondwet 1848 / rechtsstaat / WO1-blokkade / Rotterdam-bombardement 1940 / vergrijzing-verzorgingsstaat / 1991 Warschaupact-einde). Commit b89e4bd. PDFs via curl, parser draaide direct (vakcode 0125 bewezen). 12 → 8 → 6 vragen-triage (skip kaart-V8 + prent-V22).
  - **Engels 2024 tijdvak 2**: 6 vragen geselecteerd uit 29 MC (AI Japan / Queen Barbie / SS Gairsoppa-brieven / Pompeii-curse / Skellig Michael / spider playful ironie). Commit f614074. Eerste pad waar bronTekst-veld breed wordt gebruikt (Engelse leesbronnen 200-400w per vraag).
  - **70 nieuwe per-vraag-SEO-pages** via `scripts/buildExamenVraagPaginas.mjs` (commit 91870f8) — niet alleen voor de 2 nieuwe paden maar ook backfill voor reeds bestaande biologie/geschiedenis/maatschappijkunde-paden die nog geen losse HTML hadden.
  - Effect ExamensPage: 19 → 21 oefen-examens, Engels-cluster 2→3 paden, Geschiedenis-cluster 4→5 paden. 95 → 120 leerpadLink-verwijzingen in kennisgraaf.
- 2026-05-16 (5e autonome blok, ~2u) — **content-vulling + SEO-uitbreiding**: 3 Cito-PO paden +11 uitlegPad (synoniemenTegenstellingenPo 4→9/40, delenPo 5→8/40, tijdsduurRekenenPo 5→8/40). 5 extra pad-landing-pages voor /leerpad/ (synoniemen/spelling-overige/werkwoord-tijden/interpunctie/tijdsduur-rekenen → totaal 20 landings). tafelsPo +3 uitlegPad (tafel-10, tafel-5, tafel-2). woordenschatEngelsPo +3 uitlegPad op getallen-vragen (12=twelve, 17=seventeen vs 70=seventy klemtoon-truc, 40=forty zonder u!). 4 commits: 15bef76, e24b7f2, 9f1cf3b, 2990057.
- 2026-05-16 (4e autonome blok, ~2u) — Mark expliciet "doe deze" voor 4 geparkeerde items. **Begripscheck-na-uitlegPad (Roediger-Karpicke)** volledig gebouwd: adaptiveStore-laag (markRetrievalDue/peekDueRetrieval/popDueRetrieval/countDueRetrievals + lk_retrieval_v1) + LearnPath handlePick-koppeling (bij correct + showUitlegPad) + banner & inline modal in reading-mode (klik banner → pop + modal-flow → adaptRecordRight/Wrong op originele stap). Non-intrusief (later-knop). Commit dc3ec14. **Daily-goal-UI**: shared/dailyGoal.js (30s heartbeat + visibility-check + datum-reset, 15-min default), tracking globaal in App.jsx, banner bovenaan StudentHome (progressie-balk geel→groen + minuten-teller + felicitatie). Commit 3b54ae9. **NogSimpeler top-7 fixes**: 1-woord-nogSimpelers in elektriciteit/interpunctie/parabolen/balans-beco×2/cel-biologie×2/naamvallen-duits vervangen door 3-niveau-uitleg met geheugen-trucs. Commit 115577f. Pre-rendering 10-20 kern-leerpaden bewust open gelaten — Vercel ISR-strategie raakt deploy-infra; vereist Mark-keuze tussen statische generation vs server-side rendering vs hybride. Adaptive-mastery streak-based blijkt al doorgevoerd (STREAK_TO_MASTER=3, verified).
- 2026-05-16 (3e autonome blok, ~2u) — **koude-oorlog-modern-po uitlegPad** voor 6 sleutelchecks (Koude Oorlog basis, NAVO, IJzeren Gordijn, Cuba-crisis, Vietnam, Kennedy in Berlijn, Gorbatsjov, 9/11) — audit-rapport nu 0 examen-referenced paden zonder uitlegPad. Commit c64df90. **3 thin-content SEO-pages uitgebreid** (totaal +1530w): tafels-oefenen 434→1066w (SLO-tijdlijn + 10-vinger-truc + Doorstroomtoets-context), begrijpend-lezen-oefenen 409→877w (4 tekstsoorten + 3 vraagsoorten + valstrikken), cito-eindtoets-oefenen 415→845w (Cito-Doorstroomtoets-bridge + kansrijke-heroverweging + 4 FAQ). Commit acb58dd. **gemiddeldenStatistiekPo uitlegPad** +6 (temperatuur, zakgeld, loper, modus 5/3/etc, modus klas, mediaan 7 getallen) — ratio 4/40 → 10/40. Commit b05c929. **continentenWereldPo uitlegPad** +3 (Nederland=Europa, grootste=Azië, Antarctica=pinguïns/onderzoekers). Commit 8b806f4.
- 2026-05-16 (2e autonome blok, ~2u) — **5 doorstroomtoets-aanbieder sub-landing pages** /doorstroomtoets-{cito-leerling-in-beeld,iep,route-8,dia,amn}.html × ~1000w (totaal 5130w) met Article + BreadcrumbList JSON-LD + onderlinge cross-links + deeplinks vanuit hub-gids. Sitemap + index.html SEO-list bijgewerkt. Commit 021c76b. **Begrippen-glossarium** /onderwijs-begrippen.html met 15 termen (1842w) — DefinedTermSet JSON-LD, sticky TOC, link-graph naar specifieke landings. Sitemap + index.html bijgewerkt. Commit fc401b5. **Service Worker pre-cache** uitgebreid: vite-plugin injectSwVersion vervangt nu __SW_PRECACHE_ASSETS__-placeholder met gehashte index/vendor-react/vendor-router-paths uit dist/index.html. Install gebruikt Promise.allSettled zodat losse asset-failures niet de hele install slopen. 4 critical assets gepre-cached na build. Commit b58faa0. 6 audit-1-tikbommen + 1 SEO-item afgevinkt in backlog.
- 2026-05-16 — UX-pakket (Mark task): responsive .app-shell (560/720/920/1100), 2-kol vakken-grid op ≥1024px, lichtere homepage-gradient, 5 bugfixes (Ali/Eva-vraag disabled, markdown-link rendering, V##-stripping, naam-validatie-tekst, 2 wrongHints). Commit a31d9b1. **Vervolg autonoom (~30 min)**: 2 SEO-pagina's naar 2500w (doorstroomtoets-oefenen + cito-toets-oefenen, +2300 nieuwe woorden — per-onderdeel-detail, 5 aanbieders, 3-maand-plan, 5 oefen-fouten, niveau-adviezen, 11 nieuwe FAQ-items). 6 wrongHints eliminatie-leaks gefixt (basis-grammatica-engels-po, tafels-po, pincode-ondernemen, pythagoras, politiek-democratie-po). Verified op AI-tutor-fixes + examenLookup/pathManifest-architectuur — backlog-items waren al doorgevoerd, alleen niet afgevinkt. Commit a1157af. Audit-scripts gedraaid: 2160 dunne nogSimpeler-velden + 88 Klopt-issues — te veel voor handmatige fix in 2u, geparkeerd voor latere sessies.
- 2026-05-14 (nacht) — **Mark plan-akkoord: min 25 checks per pad, batch-overleg-aanpak**. Inventarisatie 163 paden: 91% <30 checks. **Batch 1 (5 paden) — Doorstroomtoets-kern**: kaartlezenPo, citoStrategieenGroep8, begrijpendLezenStrategie, begrijpendLezenTekstenPo, tijdvakkenNederlandPo allen → 25 (+17 vragen). **Batch 2 (8 paden) — Cito-PO + VMBO-eindexamen**: toestandStoffenPo, spellingOverigePo, werkwoordsspellingDT, klimatenAardrijkskunde, vraagAanbodEconomie, balansBeco, chemischeReactiesScheikunde, atoombouwScheikunde allen → 25 (+26 vragen). **Totaal +43 vragen / 13 paden**. Cito-trucs + NL-context overal (Maeslantkering/Köppen-classificatie/ACM/Mendeleev 1869/Rutherford-experiment/koolstof-14-datering). Commits 259f5a5 → c13e10c.
- 2026-05-13 — uitlegPad-uitbreidingssessie: 28 PO-paden van 0-15% naar 13-30% coverage. **+84 uitlegPaden toegevoegd**. Strikt Cito-PO groep 6-8 focus (geen klas 1-3 VO conform STOPLIST). Paden afgewerkt: ontdekkingsreizenPo (26d5e8e), synoniemenTegenstellingenPo (4f86ee4), continentenWereldPo (48ecf24), tafelsPo (7ede575), lichaamGezondheidPo (041f20e), dierenklassenPo (f234aa4), delenPo (e5c4826), waterErfgoedNederlandPo (579307b), toestandStoffenPo (10a628b), bekendeNederlandersPo (b4494bb), bekendeBoekenLiteratuurPo (3ebd7f3), bekendeWetenschappersPo (752e38f), gezondeVoedingPo (8042382), evolutieMensPo (abbc1ba), digitaleGeletterdheidPo (d933d7f), energiebronnenPo (bf35600), industrieleRevolutiePo (7dec22a), politiekDemocratiePo (95b795b), werelddelenLandenPo (88922f0), dichtenPoezieRijmenPo (537ebab), kalenderRekenenPo (a51eda0), procentenPo (f22b6cc), interpunctiePo (598fbf9), financieleVormingPo (bf3e0cc), kritischDenkenPo (1a49e32), algoritmenProgrammerenPo (ac370db), spreekwoordenUitdrukkingenPo (8fa1302), recyclenAfvalPo (880b996). Elk pad +3 uitlegPaden volgens vast blueprint (3 stappen + woorden + theorie + voorbeelden + basiskennis + 3-niveau-niveaus). Build groen na elk pad, 29 commits gepusht. Geen nieuwe paden / componenten / dependencies = STOPLIST gerespecteerd.

## Peer-review log

Cadens: elke 5 taken, elke 2e sessie, of na nieuw pad. Format: datum — taken-sinds-vorige — agent A oordeel — agent B oordeel — beslissing.

- 2026-05-16 — ExamensPage 2 sectie-design + content-prio aardrijkskunde/nederlands/wiskunde.
  - **Agent A (UX/conversion)**: NIET secties samenvoegen (verdunt USP 4:1), GEEN "niet-beschikbaar"-tags (66% van cards rood = signaal-vermoeidheid). Wel positief framing: teller in sectie 2-kop "19 van 56 ook als leerpad". Beslissing: implementeer alleen de teller (commit 32ab... — zie sessie-log).
  - **Agent B (Content/prio)**: SKIP wiskunde (zware open-vraag-modus) + SKIP nederlands (lange lees-bronteksten, zwakke uitlegPad-loop). Aardrijkskunde 2024-T1 als PILOT — 4-6 MC-vragen mits atlas-kaart-vragen worden geskipt. Tijd: 3-4u. Beslissing: aardrijkskunde-pilot wacht op Mark — PDF moet in `tmp/` zodat parser draait (zie open backlog-item).

## Bron-afbeelding-render: infra klaar, content open (2026-05-16)

Mark akkoord op "1 en 2" — bouw capability, maak nog geen leerpad.

- [x] **Render-infra**: `bronAfbeelding`-veld in check-schema, rendering in
  LearnPath.jsx (boven `bronTekst`), styling consistent met bestaande bron-
  cards. Schema: `{ src, alt, caption?, maxHeight? }`.
- [x] **Documentatie**: `public/examens/bronnen/README.md` met map-structuur,
  schema-voorbeeld, 3 extract-werkwijzen (schermopname / Acrobat / online tool)
  + auteursrecht-overweging + bestandsformaat-richtlijnen.
- [ ] **Eerste leerpad** (wacht op Mark-beslissing): aardrijkskunde 2024-T1
  zou 4 MC-vragen kunnen krijgen (V3, V8, V9 + eventueel V6 als foto-volgorde-
  variant) met PNG-bronnen. Vereist handmatige PNG-extractie uit de PDF (geen
  pdftoppm/pdfimages in dev-PATH) + auteur-tijd ~2-3 uur. Voor nu skip — focus
  blijft op uitbreiding bestaande tekst-MC-vakken.

## Bevinding: aardrijkskunde-pilot niet haalbaar zonder bron-afbeelding-render (2026-05-16)

PDF's gedownload via curl (gt-0131-a-24-1-o.pdf + correctie). Parser draaide
succesvol (47 vragen herkend, 4 als MC). Maar handmatige triage van alle 4
MC-vragen toont:
- **V3** — 5-opties (A-E) foto-matching: 3 landschapsfoto's Spanje koppelen aan 3 klimaatbeschrijvingen → vereist foto-bronnen.
- **V6** — volgorde-vraag (1-2-5-4-3 enz.): geen meerkeuze-feiten-vraag.
- **V8** — weerkaart-aflezing + 3 weerberichten: vereist weerkaart-afbeelding.
- **V9** — 6-opties (A-F) foto-landschap-matching: vereist 4 landschapsfoto's + kaart.

**Conclusie**: aardrijkskunde-MC is fundamenteel visueel — atlas, foto's, kaarten.
Onze tekst-meerkeuze-format kan dit niet ondersteunen. Agent B's voorspelling
"4-6 MC-vragen mogelijk mits atlas-kaart-vragen worden geskipt" klopte niet
voor 2024-T1: álle MC's leunen op visueel materiaal.

**Voorstel toekomst** (wacht op Mark-akkoord):
1. **Bron-afbeelding-rendering toevoegen** aan examen-check-format: een
   `bronAfbeelding: { src, caption }`-veld dat in LearnPath gerenderd wordt
   boven de vraag. Vereist: lokale opslag van bron-PNGs uit examenblad-PDF
   (mogelijk via `pdftoppm` of `pdfimages`). Auteursrechtelijk grijs gebied —
   examenblad-bronnen zijn officieel openbaar maar reproductie vraagt
   afweging.
2. **OF: skip aardrijkskunde/wiskunde/nederlands volledig** voor oefen-modus.
   Houd PDF-sectie als enige route voor deze 3 vakken. Verleg auteur-energie
   naar uitbreiding van bestaande vakken (economie/biologie/engels/geschiedenis
   meer jaren) waar tekst-MC wél werkt.

Geadviseerde route: **optie 2** — past bij Mark's solo-builder-status en
de visie "diepte boven breedte". De huidige bridge-knop (commit 222f76f) +
counter (commit 8e03409) lossen de UX-discrepantie al op zonder dat we
3 vakken half-haalbaar moeten doen.

PDFs niet gecommit (24 MB) — staan tijdelijk in tmp/, kunnen via download
opnieuw opgehaald worden indien nodig.

### Sessie 2026-05-16/17 — content-burst + B-shift (UI + audit)

**Eerste deel (16/05) — content-burst**:
- 10 nieuwe examen-paden: Engels 2022-T1+T2 + 2023-T1+T2, Economie 2022-T1+T2,
  Biologie 2022-T1+T2 + 2023-T2, Geschiedenis 2022-T1+T2 + 2023-T2.
- Maatschappij-cluster van 3 → 8 paden (alle 8/8 compleet).
- 4 nieuwe Cito-PO paden: europese-unie-po, topografie-europa-po,
  wereldreligies-po, oppervlakte-omtrek-po. 191 → 210 leerpaden.
- 2 UI-refactors: ExamensPage dual-view per vak (1 rij met links 🎯 oefen +
  rechts 📄 PDF, dual-teller in header) + CitoPage idem voor onderdelen.

**Peer-review eind 16/05** (2 agents parallel — A=UX/didactiek, B=strategie):
Beide negatief op verschillende dingen. Mark koos **B = strategie-shift**:
"stop met content, bouw P0 + USP-zichtbaarheid".

**Tweede deel (16-17/05) — B-shift**:
- **P0 LearnPathsHub filter-bar**: zoekbalk + 4 Cito-pijler-pillen
  (Taal/Rekenen/Lezen/Wereld) + 3 niveau-pillen (PO/onderbouw/bovenbouw)
  op entry-screen. Switch naar resultaten-lijst bij actief filter.
- **Pre-rendering**: 4 nieuwe paden toegevoegd aan KERN_PADEN
  (24 → 28 statische /leerpad/*.html). Sitemap-entries bijgewerkt.
- **Agent A quick fixes**: wrongHints-eliminatie-leak in 9 vragen verspreid
  over 4 paden (wereldreligies, topografieEuropa, europeseUnie,
  doorstroomtoetsTaalG8). Dual-view kleur-uniformering ExamensPage
  groen → blauw (matcht CitoPage 🎯).
- **OBLITERATOR-koppeling terug** op Home/Leren/Doorstroomtoets (Mark wens
  2026-05-17): discrete koppelingen, niet-hero. Was alleen /spel-deeplink.

**Status na sessie**:
- Audit kennisgraaf: 0 broken loops, 0 ontbrekende voorkennisKeten ✓
- Audit wrongHints: 139 files met hits resterend (top ICP-pad
  doorstroomtoetsTaalG8 van 12 → 9 hits).
- VoorkennisKeten UI **bestaat al** (src/shared/ui/VoorkennisKeten.jsx
  + ingebouwd op LearnPath.jsx:989) — backlog dacht dat het ontbrak.

**Open uit Agent B-plan** (vereisen Mark-go):
- Ouder-dashboard v1 (nieuwe component + Supabase-schema)
- Open-vragen wiskunde/aardrijkskunde VMBO-examens (PlayQuiz/LearnPath-refactor)
- 2026-07-12: Park-leermomenten F1 live (Mark: 'alles benoembaar, wereld=leerschool') — stoomtrein met rookpluim, tik op trein → leermoment-paneel → leerpad industriële revolutie; registry parkLeermomenten.js; F2-kandidaten: boom (hout), achtbaan (hellingsgraad+ijzer), reuzenrad (cirkel), station. Commit 632e7e1.
