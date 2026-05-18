---
name: 10-agent-review Leerkwartier — synthese 2026-05-10
description: Resultaten van 10 parallelle agent-reviews op de hele app (UX, didactiek, examens, code-arch, mobile, privacy, performance, a11y, content, monetisatie). 6 rode draden + 15 prioriteit-acties.
type: project
originSessionId: 117df0ef-b194-40f2-8e60-f054bcb3b40a
---
# 10-agent-review synthese 2026-05-10

Mark vroeg om grondige review — 10 agents parallel, elk een lens.

## 6 rode draden door alle 10 reviews

### 1. Statisch geïmporteerd, niet lazy → bundle 2.5 MB
- Lens 4 (code): App.jsx 1685 regels, alles geïmporteerd
- Lens 7 (perf): `learnPaths/index.js` heeft 97 statische imports → `data-learnpaths` chunk = 2,8 MB
- Lens 9 (content): `PATH_THEMES` hardcoded in Hub
- → **Lazy-load alle leerpaden via dynamic import-map** = -2 MB initial

### 2. Examen-systeem heeft eigen architectuur nodig
- Lens 3: 1 leerpad PER VAK met chapters per examen (7 files), niet 50 losse paden
- Lens 9: examen-paden = aparte content-klasse, eigen `EXAM_PATHS` registry + UI-tab "Oefenexamens"
- Lens 10: `premium: true` + `availableModes: ["practice","exam"]` veld voorbereiden
- → Aparte EXAM_PATHS registry — voor schaal naar 50+ examen-paden

### 3. Mobile + a11y nog onvolwassen
- Lens 5 (mobile): tabel-overflow zonder cue, dubbele scroll in bron, geen sticky bottom-nav
- Lens 8 (a11y): tabel zonder caption/scope, geen aria-live, kleur-only feedback (geen icon op antwoord-knop), 3D zonder keyboard-alternatief
- → **Polish-pass**: aria-live + table-captions + ✓/✗-icons op antwoord-knoppen + sticky bottom-nav

### 4. Privacy + monetisatie zijn dichterbij dan gedacht
- Lens 6 (privacy): self-attest age-gate is grootste gap. Quick win = 3-sec cooldown of som-check
- Lens 10 (monetisatie): subscriptions-tabel + ProPage al live! Alleen Stripe-checkout + `premium`-flag missen
- → Met 1-2 dagen werk klaar voor paywall-launch

### 5. Didactiek-laag onbenut
- Lens 2: `misconceptionId`-tag bij wrongHints geeft spaced-rep + diagnose ("jij hakt vaak op v/f-eindletter")
- Lens 9: SLO/kerndoel-tagging onvolledig (28/87 paden)
- Lens 2: 99% MC-vragen, geen drag/drop/invul/volgorde
- → **Metadata-laag verrijken** + variatie in vraagtypes

### 6. Onboarding heeft frictie + dev-jargon
- Lens 1: AgeGate vraagt leeftijdsgroep, StudentHome vraagt OPNIEUW PO/VO — niet gekoppeld
- Lens 1: dev-jargon in StudentHome ("Self-Study", "Mixed-quiz", "Herhaling — N onderwerpen")
- Lens 2: dev-jargon in leerpaden ("V1 — ", "checks: 4 van 7")
- Lens 5: mobile input mist `inputMode`/`enterKeyHint`
- → **Copywriting-pass + AgeGate→StudentHome koppeling**

## Prioriteit-lijst — 15 acties

### Quick wins (1-3 uur, lage risico, hoge waarde) — DOEN
1. **AgeGate.ageGroup → StudentHome.vakModus auto-set** (Lens 1) — `lk_age_consent_v1` lezen in StudentHome:60
2. **Dev-jargon weg uit StudentHome** (Lens 1) — "Self-Study"→"Zelf oefenen", "Herhaling — N onderwerpen"→"Vandaag herhalen — N stukjes"
3. **WrongHints aria-live + tabel caption/scope** (Lens 8) — `<div role="alert" aria-live="assertive">` + `<caption className="sr-only">`
4. **Mobile input attributen** (Lens 5) — `inputMode="search" enterKeyHint="search"` op LeerpadBot, `autoCapitalize="characters"` op code-input
5. **Antwoord-knop icons ✓/✗** (Lens 8) — niet alleen kleur voor correct/fout

### Middelgroot (1-3 dagen, vereist sessie)
6. **`premium: boolean` + `availableModes: []` veld op pad-schema** (Lens 10) — voorbereiding paywall
7. **`relatedPathIds: []` veld + "Zie ook"-blok** (Lens 9) — coherentie cross-paden
8. **Three.js dynamic-import** (Lens 7) — -513 KB initial bundle
9. **Misconception-tag bij wrongHints** (Lens 2) — diagnostische laag
10. **Sticky bottom-nav (4 tabs: Home/Leren/Voortgang/Bot)** (Lens 5) — `--bottom-nav-height` token al gereserveerd

### Groot (multi-dag, strategische beslissing nodig)
11. **App.jsx refactor + AuthProvider/QuizSessionProvider Context** (Lens 4) — 8-12 uur
12. **TypeScript incrementeel aanzetten op shared/+repos/+auth/** (Lens 4) — 6-10 uur
13. **Lazy-load alle leerpaden via dynamic import-map** (Lens 7) — 1-2 dagen
14. **Aparte EXAM_PATHS registry + UI-tab "Oefenexamens"** (Lens 9) — 1 dag
15. **Stripe Checkout + premium-paywall + useEntitlements-hook** (Lens 10) — 1-2 dagen

## Strategische beslissingen die Mark moet nemen

**A. TypeScript incrementeel** vs JSDoc-only (Lens 4) — kies bewust
**B. Aparte EXAM_PATHS** registry vs 1 gemeenschappelijke (Lens 9) — bij >10 examenpaden onhoudbaar
**C. Paywall live** dit kwartaal (Lens 10) — €1,95/mnd × 100 conversies = breakeven
**D. Premium-doel**: examen-modus only of ook AI-tutor/cito-rapport per e-mail?
**E. Verdere agent-rondes**: deze review elke 4-6 weken herhalen (zie `project_studiebol_review_cadens.md`)

## Wat NIET in deze review

- HomePage.jsx (Mark's regel: heilig, alleen lezen)
- Diepe security-audit (geen specifieke pen-test)
- Database performance / RLS-policies in detail (Lens 6 raakt het oppervlakkig)

## Volgende sessie aanbeveling

**Sessie 1 (2-3 uur)**: alle 5 quick wins (#1-5). Geeft direct merkbare polish + dekking belangrijke gaps.

**Sessie 2 (4-6 uur)**: #6 + #7 + #14 — examen-architectuur klaar voor schaal naar alle vakken.

**Sessie 3 (1 dag)**: #15 — Stripe + paywall live + #6 koppelen.

Daarna: pijplijn-bouw voor andere vakken-examens.
