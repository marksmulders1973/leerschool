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
- [⏳] **QW7 — Lazy-load STAP 2 voor LearnPath.jsx** PILOT GEDAAN (2026-05-13, commit 90ecd90): nieuwe `lazyGetLearnPath` import + useEffect met async fallback. Volle bundle-baat vereist nog: regel 3 ALL_LEARN_PATHS-import weg + examenLookup naar build-time JSON + LearnPathsHub/StudentHome/Curriculum metadata-only. Volgende sprint.

### Audit-content-verbeteringen (~3-5 uur)
- [ ] **nogSimpeler audit-script**: `scripts/lint-nogsimpeler.mjs` — controleer `niveaus.nogSimpeler.length > 20 && bevat 1 zin + 1 voorbeeld`. Fix top 20 paden waar het "Plus.", "Zeven.", etc. is.
- [ ] **wrongHints "Klopt"-detector**: scan `wrongHints[i]` voor `i !== answer` op patroon `^Klopt`. Audit top 20 paden waar dit voorkomt en herschrijf.
- [ ] **Begripscheck-na-uitlegPad** (Roediger-Karpicke retrieval-practice): na sluiten uitlegPad + 1e correcte poging, markeer in adaptiveStore voor herhaling met VARIANT-vraag 1 stap verderop.
- [ ] **Adaptive mastery van binair naar streak-based**: `src/shared/adaptiveStore.js:46-49` → vervang `filter !== checkIdx` door `correctCount[checkIdx]++` met threshold `>=3` voor uit-set. Echte mastery vereist herhaling.

### Audit-AI-tutor-fixes (~2-3 uur)
- [ ] **System prompt Socratisch maken**: `api/tutor-chat.js:31-83` → harde regel toevoegen: *"Je MOET je antwoord beginnen met een vraag terug aan de leerling. Pas na het volgende user-bericht mag je een uitleg geven."*
- [ ] **Antwoord NIET in context sturen**: `tutor-chat.js:76-78` → vervang `Juiste antwoord: ${ctx.correctOption}` door een hash + client-side validatie. Of: stuur alleen optie-INDEX, niet de tekst.
- [ ] **Leeftijds-adaptief prompt**: pak `path.id.startsWith("po-" / "vmbo-" / "havo-")` om toon-prompt aan te passen.
- [ ] **Gemini-fallback bouwen**: bij `!resp.ok` of `5xx` op Anthropic → fetch naar `gemini-2.0-flash-exp:generateContent`. Memory zegt al dat dit zou bestaan; bouwen.

### Audit-architectuur-tikbommen (~1-2 dagen elk)
- [ ] **`examenLookup.js` naar build-time JSON**: nu `import { ALL_LEARN_PATHS }` op top-level blokkeert chunking. Bouw `scripts/buildExamenLookup.mjs` die `examenLookup.generated.json` produceert; consumer laadt JSON ipv module.
- [ ] **`pathManifest.generated.json`** bouwen: id → bestandsnaam + meta (title/subject/level/emoji). LearnPathsHub/StudentHome/Curriculum laden ALLEEN metadata (~30 kB) ipv 5,8 MB.
- [ ] **vendor-three lazy uit non-game routes**: Mini3DTeaser nu eager in HomeV3 hero; lazy-load met intersection-observer of vervang door statisch poster.
- [ ] **Service Worker JS-bundle pre-cache**: `public/sw.js:10-14` APP_SHELL uitbreiden met build-time-geïnjecteerde index/vendor-react/vendor-router-hashes.
- [ ] **Upstash Redis voor rate-limit**: `_guard.js:24` in-memory Map vervangen door Redis voor cross-instance-quota. Free tier 10k/dag voldoende.

### Audit-monetization-blokkers (vóór Cito-piek nov 2026 LIVE)
- [⏳] **Paywall infrastructuur KLAAR — gating UIT** ✓ (2026-05-13): `src/subscription/{config,useSubscription,PaywallGate}.js(x)` + `public/abonnement.html` (pricing-pagina + waitlist-form) + `api/checkout-session.js` (Stripe-stub, 503 tot `STRIPE_ACTIVE=true`). `PAYWALL_ACTIVE=false` zodat alles gratis blijft tot Mark flipt (geplande go-live jan 2027 Cito-piek). Tier-systeem (free/parent_pro/teacher_pro) + FEATURE_GATES + PRICING-config gedocumenteerd in CLAUDE.md "Paywall"-sectie met 7-stappen-activatie-checklist.
- [ ] **Ouder-dashboard v1**: gekoppeld account; toont "kind heeft X vragen geoefend, zwakke onderwerpen: Y". Wekelijkse mail = retention-anchor.
- [ ] **VoorkennisKeten UI fase 2** (wacht op Mark akkoord — nieuwe component): POC op V36 economie 2023-T1 + Playwright-screenshot. Memory zegt `stop hier voor reviewer-agents akkoord`.
- [ ] **A12 web push setup-stappen** (Mark zelf, ~30 min handwerk): VAPID + Vercel env + Supabase secrets + migration + cron.

### Audit-SEO-content-uitbreidingen (~1 week)
- [ ] **doorstroomtoets-oefenen.html → 2500 woorden** + inline voorbeeld-vragen + 20 FAQ-items.
- [ ] **cito-toets-oefenen.html → 2500 woorden** + expliciete bridge "Cito = Doorstroomtoets sinds 2024".
- [ ] **Begrippen-glossarium** `/begrippen/` index met 50 NL-onderwijs-termen × 300-600w (doorstroomtoets, eindtoets, schooladvies, kerndoelen, referentieniveau 1F/2F/1S, etc).
- [ ] **Pre-rendering 10-20 kern-leerpaden** (Vercel ISR of statische export) — SPA-content nu onzichtbaar voor AI-engines.
- [ ] **5 sub-landing pages doorstroomtoets-aanbieders** (Cito LiB, IEP, Route 8, Dia, AMN) × ~800w met verschillen-tabel.

### Audit-growth-loops (~1 week)
- [ ] **Referral-loop**: 7-dagen-gratis voor uitnodiging + ontvanger.
- [ ] **Pinterest-pinnable infographics**: 10 stuks "Doorstroomtoets datum 2027", "5 aanbieders vergeleken", "Wat is het schooladvies".
- [ ] **TikTok-clips 15-sec**: "ChatGPT vs Leerkwartier op echt examen Economie 2024 vraag 36" — toont hallucination → toont Leerkwartier correct.
- [ ] **Daily-goal-UI + "klaar voor vandaag"-scherm** (15-min-belofte hard maken).

---

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

**🔴 Spoor 1 — Doorstroomtoets G8 verdiepen (PRIO ICP)**
- [⏳] Taal G8: 74 → **133q** ✓ 3 rondes (commits 8d1d841, 54f86ed, 67cccc6 — +59 vragen). 89% van 150. Nog +17q voor 150 oefen-pool.
- [⏳] Rekenen G8: 74 → **134q** ✓ 3 rondes (commits d2f8bcd, 9e1542c, 51afd0c — +60 vragen). 89% van 150. Nog +16q.
- [⏳] Studievaardigheden G8: 79 → **139q** ✓ 3 rondes (commits 928d4dd, 82644e4, c679e64 — +60 vragen). 93% van 150. Nog +11q.
- [ ] **Feature** (architectuur — wacht op Mark): proef-toets-modus met 30 random vragen uit pool per onderdeel.

**🟠 Spoor 2 — Parser-fix in `scripts/parse_examen.py` (klein, snel)**
- [ ] Regex `vraag_marker_re` aanpassen zodat MC-antwoord in correctievoorschrift wordt herkend bij format-varianten. Concrete 17 files+vraag-nrs:
  - biologie-2024-T1 v22, biologie-2024-T2 v13
  - economie-2023-T1 v17, economie-2025-T2 v7/11/32/34
  - engels-2023-T1 v30, engels-2024-T2 v18/19/26
  - geschiedenis-2023-T1 v40
  - maatschappijkunde-2023-T1 v5/6/7/8 (4 op rij = format-variant)
  - nederlands-2025-T2 v11
- [ ] Re-parse de 10 files → 17 extra vragen in `examenQuizzes/`

**🟡 Spoor 3 — Open-vraag-modus (groot project — apart plannen, niet quick-win)**
- [ ] Beslis: maken we open-vraag-modus? (Vereist nieuwe `kind: 'open'` questiontype + fuzzy match of AI-grading)
- [ ] Zonder open-modus blijven aardrijkskunde + wiskunde + geschiedenis structureel onvolledig (VMBO-wiskunde is bijna 100% open).
- [ ] Alternatief: numerieke-invoer-modus voor reken-antwoorden (lichter dan volledig open).

**⚪ Spoor 4 — Methodes opruimen (lage prio)**
- [ ] Audit `src/data/textbooks.js`: welke edities > 5 jaar achterstand? Bewaar laatste 2 + 1 nog-veel-gebruikte.

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
- 2026-05-14 (nacht) — **Mark plan-akkoord: min 25 checks per pad, batch-overleg-aanpak**. Inventarisatie 163 paden: 91% <30 checks. **Batch 1 (5 paden) — Doorstroomtoets-kern**: kaartlezenPo, citoStrategieenGroep8, begrijpendLezenStrategie, begrijpendLezenTekstenPo, tijdvakkenNederlandPo allen → 25 (+17 vragen). **Batch 2 (8 paden) — Cito-PO + VMBO-eindexamen**: toestandStoffenPo, spellingOverigePo, werkwoordsspellingDT, klimatenAardrijkskunde, vraagAanbodEconomie, balansBeco, chemischeReactiesScheikunde, atoombouwScheikunde allen → 25 (+26 vragen). **Totaal +43 vragen / 13 paden**. Cito-trucs + NL-context overal (Maeslantkering/Köppen-classificatie/ACM/Mendeleev 1869/Rutherford-experiment/koolstof-14-datering). Commits 259f5a5 → c13e10c.
- 2026-05-13 — uitlegPad-uitbreidingssessie: 28 PO-paden van 0-15% naar 13-30% coverage. **+84 uitlegPaden toegevoegd**. Strikt Cito-PO groep 6-8 focus (geen klas 1-3 VO conform STOPLIST). Paden afgewerkt: ontdekkingsreizenPo (26d5e8e), synoniemenTegenstellingenPo (4f86ee4), continentenWereldPo (48ecf24), tafelsPo (7ede575), lichaamGezondheidPo (041f20e), dierenklassenPo (f234aa4), delenPo (e5c4826), waterErfgoedNederlandPo (579307b), toestandStoffenPo (10a628b), bekendeNederlandersPo (b4494bb), bekendeBoekenLiteratuurPo (3ebd7f3), bekendeWetenschappersPo (752e38f), gezondeVoedingPo (8042382), evolutieMensPo (abbc1ba), digitaleGeletterdheidPo (d933d7f), energiebronnenPo (bf35600), industrieleRevolutiePo (7dec22a), politiekDemocratiePo (95b795b), werelddelenLandenPo (88922f0), dichtenPoezieRijmenPo (537ebab), kalenderRekenenPo (a51eda0), procentenPo (f22b6cc), interpunctiePo (598fbf9), financieleVormingPo (bf3e0cc), kritischDenkenPo (1a49e32), algoritmenProgrammerenPo (ac370db), spreekwoordenUitdrukkingenPo (8fa1302), recyclenAfvalPo (880b996). Elk pad +3 uitlegPaden volgens vast blueprint (3 stappen + woorden + theorie + voorbeelden + basiskennis + 3-niveau-niveaus). Build groen na elk pad, 29 commits gepusht. Geen nieuwe paden / componenten / dependencies = STOPLIST gerespecteerd.

## Peer-review log

Cadens: elke 5 taken, elke 2e sessie, of na nieuw pad. Format: datum — taken-sinds-vorige — agent A oordeel — agent B oordeel — beslissing.

- (nog geen reviews)
