---
name: 10-agent review CIRCULARITEIT 2026-05-10 — synthese + 14 acties
description: Review met 10 agents (user-flow, Cito-ouder, VMBO-leerling, didactiek, hub, retentie, mobile, content-graph, tussenpagina, paywall) op circulariteit. 7 rode draden, 14 acties geprioriteerd, 4 strategische keuzes.
type: project
originSessionId: 117df0ef-b194-40f2-8e60-f054bcb3b40a
---
# 10-agent CIRCULARITEIT-review (2026-05-10)

Mark wens: "de app moet circulair zijn — vraag → leerpad → uitleg → home → vraag → etc". Ik zette 10 agents in parallel om vanuit 10 lenzen circulariteit te beoordelen. App-locatie: `C:\Users\mark-\Desktop\Studiebol\leerschool`.

## 7 rode draden (≥2 agents bevestigen)

| # | Bevinding | Lens(en) |
|---|---|---|
| **A** | 🏠-knop = dood-eind: gooit leerling terug naar MARKETING-page (HomePage) ipv leerling-hub (StudentHome). 30+ call-sites in App.jsx | Lens 1, 5, 3 |
| **B** | AllDone-scherm leeg: geen score, geen "volgend examen", geen suggestie | Lens 1, 3 |
| **C** | Hertest na fout telt NIET: `if (attempts === 1)` op `LearnPath.jsx:400` straft leerlingen die ná uitleg goed antwoorden | Lens 4 |
| **D** | Twee parallelle examen-systemen: PDF in `ExamensPage` vs speelbare paden in `LearnPathsHub`. Niet gemerged | Lens 3, 8 |
| **E** | Reverse-link Pincode → examen ontbreekt volledig — grootste circulariteits-gap met laagste cost-to-fix | Lens 8, 4 |
| **F** | Geen externe trigger: leercyclus sluit niet OVER dagen. `adaptiveStore` heeft geen tijd-component voor spaced repetition | Lens 4, 6 |
| **G** | `VraagUitlegPad` mobile = scroll-marathon: 6 secties default open, knop-targets <44 px | Lens 7, 4 |

## 14 acties geprioriteerd

### 🔥 Quick wins (≤1 uur, max impact)
- **A1** Splits 🏠-routing: ingelogd → `student-home`, gast → `home`. 1 helper, dekt 30+ call-sites.
- **A2** Verwijder `if (attempts === 1)` op `LearnPath.jsx:400`.
- **A3** `leerpadLink` altijd zichtbaar in `wrong`-blok (`LearnPath.jsx:935`).
- **A4** `VraagUitlegPad` → `<details>`-accordion (alleen "Korte uitleg" default open).
- **A5** Tap-targets `minHeight: 44` op alle btn-helpers.

### 🎯 Medium (1-3 uur, sluit cirkels)
- **A6** `AllDone` met score + "Volgend examen ▶"-CTA.
- **A7** HomePage hero-strook 4 live-data-tegels (📘 Schoolboek · 🎓 Echte examens · 🧭 Leerpaden · 📝 Examen-leerpaden). Dim na 4 bezoeken.
- **A8** "Verder waar je was"-card bovenaan StudentHome (uit `recentProgress[0]`).
- **A9** Reverse-link Pincode-leerpad → examen-vragen ("Oefen 6 echte vragen over Belasting").
- **A10** Examen-hub-tegel op StudentHome bij vmbo-gt-4 met readiness-% + countdown.

### 🏗 Groot (4+ uur, strategisch)
- **A11** `adaptiveStore` krijgt `seenAt` + `nextDue` + `getDueChecks()`. Echte spaced repetition.
- **A12** Web-push of magic-link "Cito-aftelling" (wekelijks ouder, dagelijks kind).
- **A13** Merge `ExamensPage` + `LearnPathsHub`: 1 examen-tab met PDF + Speel + Voortgang.
- **A14** Cito-ouder pre-rol content: welkom-video skippable, onboarding samenvouwen, ticker rol-bewust.

## 4 strategische keuzes (Mark moet kiezen)

1. **Aparte tussen-pagina ja/nee?** — agents: NEE (8/10). Wel hero-strook IN HomePage (A7). [Mark akkoord — bouw als A7]
2. **Paywall wanneer?** — agents: NIET NU. Q3 2026 of feb 2027 (Cito-kalender). [Open]
3. **Engels/Geschiedenis uitlegpaden eerst, of reverse-link?** — agents: reverse-link first (A9). [Mark akkoord — A9 in dag-1 plan]
4. **Externe trigger-kanaal?** — agents: ÉÉN kiezen. Web Push (gratis Vercel) OF magic-link (Resend free). [Open, A12]

## Aanbevolen dag-1-plan (Mark akkoord 2026-05-10)

A1 (🏠-routing) → A2+A3 (didactische cyclus) → A6 (AllDone met score+CTA) → A9 (reverse-link) → A4 (uitlegpad accordion). 6 van 7 rode draden geadresseerd in 1 werkdag.

## Belangrijke ontdekking (Lens 5)

`HomePage.jsx` (1672 r) is de MARKETING/landings-pagina. `StudentHome.jsx` (692 r) is de echte leerling-hub. Maar elke `onHome={...}` in App.jsx routeert naar `setPage("home")` = marketing-page. Dat is de hoofdoorzaak van Mark's "verzanden"-zorg. Fix in A1 is laagste cost / hoogste impact.

## Files relevant per actie

- A1: `src/App.jsx` (30+ call-sites `setPage("home")`)
- A2: `src/features/learn/LearnPath.jsx:400` (`if (attempts === 1)`)
- A3: `src/features/learn/LearnPath.jsx:935-973` (wrong-blok)
- A4: `src/features/learn/VraagUitlegPad.jsx:106-203` (6 secties)
- A6: `src/features/learn/LearnPath.jsx:1334-1352` (AllDone-blok)
- A8: `src/components/StudentHome.jsx:651-688` (recentProgress)
- A9: `src/learnPaths/index.js` + alle `examenEconomie*.js` bestanden (lookup-map)
- A10: `src/components/StudentHome.jsx:240-414`
- A11: `src/shared/adaptiveStore.js`
- A12: nieuwe Supabase Edge Function + Web Push setup
- A13: `src/components/ExamensPage.jsx` + `src/features/learn/LearnPathsHub.jsx`
- A14: `src/components/HomePage.jsx:628-786` (3 modals)

## Status (2026-05-10)

Memory geschreven. Mark akkoord op dag-1-plan. Nu uitwerken: A1 → A2 → A3 → A6 → A9 → A4.
