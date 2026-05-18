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
- [ ] **VoorkennisKeten UI fase 2** (wacht op Mark akkoord — nieuwe component): POC op V36 economie 2023-T1 + Playwright-screenshot. Memory zegt `stop hier voor reviewer-agents akkoord`.
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

### Fase 2 — UI proof-of-concept
- [ ] `src/components/VoorkennisKeten.jsx` minimale variant.
- [ ] Inbouwen in 1 examenvraag (V36 economie 2023-T1).
- [ ] Self-test + Playwright screenshot.
- [ ] **Stop hier — wacht op Mark + reviewer-agents akkoord voor fase 3.**

### Fase 3 — Volledig (alleen na groen licht)
- [ ] UI uitrollen naar alle examenvragen (start: rest van economie).
- [ ] Adaptieve `zwakstePadDetector.js` — bij fout op check zoekt laagste pad waar gebruiker nog scoort.
- [ ] **Examen-modus check**: VoorkennisKeten alleen renderen als `mode === "oefen"`.
- [ ] Engels examenvragen (3 paden) voorzien.
- [ ] Geschiedenis examenvragen (1 pad) voorzien.

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
