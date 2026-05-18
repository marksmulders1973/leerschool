---
name: Studiebol — 3D-modellen voor leerpad-checks (registry-systeem)
description: Workflow + status van 3D-checks via Shape3D + questions3d-registry. Tracking-IDs, locaties, hoe nieuwe vragen toevoegen.
type: project
originSessionId: 4ecedf50-07cb-460e-a21c-0cbcc43f20c6
---
# Doel
Wiskunde-checks in Studiebol-leerpaden krijgen optioneel een interactieve 3D-component voor onderwerpen waar 3D meerwaarde heeft (inhoud kubus/balk/piramide/cilinder/etc.).

# ⏸ PAUZE-status (audit-3 sprint-5 S3, 2026-05-08)
**Geen nieuwe 3D-modellen tot post-PMF**. Reden: ICP = bezorgde Cito-ouder
groep 6-8 (per memory `project_studiebol_icp_keuze.md`). 3D-content richt
zich op VO-onderbouw (klas 1-3 meetkunde) — ROI voor primaire koper = nul.
Tijd-per-pad voor 3D is hoog (Claude.ai TSX-workflow per model).

**Bestaande modellen blijven werken** als bewijs van diepte. Feature-flag
`VITE_HIDE_3D_IN_PATHS=true` in Vercel kan ze tijdelijk uitschakelen voor
performance-besparing op trage netwerken (Three.js-bundle = 513 KB).

Mark's prioriteit nu: Cito-content groep 6-8 (rekenen, begrijpend lezen,
woordenschat, spelling) ipv nieuwe 3D-modellen. Wanneer terug naar 3D:
post-PMF (na €5k MRR of bewezen ouder-conversie).

# Strategische keuze (2026-05-02): "één leerpad volledig af als template" — GEPAUSEERD
Mark akkoord met: niet alle ~50 leerpaden tegelijk vlak verbeteren, maar **Ruimtemeetkunde eerst 100% af** met alle relevante 3D-checks. Dat dient als showcase + template voor de rest. Daarna Pythagoras (incl. 2D-schuifbalken voor a/b → c² live), daarna kiest Mark een volgend leerpad. Voorkomt scope creep en geeft tastbare milestones.

⚠ Deze sprint is GEPAUZEERD per S3-beslissing. Hervatten na PMF.

# Sprint 1 — Ruimtemeetkunde compleet (in uitvoering)
**Shape3D uitbreidingen** (eenmalig werk, daarna registry-only):
- `cilinder` (BoxGeometry → CylinderGeometry, hergebruikt door RM-S10, RM-S25)
- `kegel` (ConeGeometry, RM-S13, eventueel composite "kegel + cilinder" voor ⅓-relatie)
- `balk-met-diagonaal` of `lichaamsdiagonaal`-feature op balk (PY-S12, volgende sprint)

**Registry-entries toe te voegen aan `questions3d.js`:**
- RM-S7-Q1 — "Wat meet 'inhoud'?" (balk 4×1×2 met showUnitCubes — direct, geen Shape3D-uitbreiding nodig)
- RM-S9-Q1 — Balk 8×5×2 inhoud
- RM-S10-Q1 — Cilinder r=2, h=5 (na cilinder-uitbreiding)
- RM-S13-Q1 — Kegel r=6, h=4 (na kegel-uitbreiding)
- RM-S20-Q1 — k³ verdubbeling (composite of twee kubus-canvasen naast elkaar)
- RM-S23-Q1 — Maquette schaal (twee balken)
- RM-S24-Q1 — Aquarium 50×30×40 met liter-teller (balk + water-fill animatie)
- RM-S25-Q1, Q2, Q3 — Cilindrische tank, 3 deelvragen (cilinder)

Skip 3D voor: RM-S21 (samenvatting tabel — 2D-overlay past beter).

# Sprint 1.6 — speeltuin-features (kritische didactische upgrade)
Feedback Mark/audit 2026-05-02: huidige modellen zijn "demo-level" — nette
visualisatie maar geen interactiviteit waarbij de speler zelf concepten
ontdekt. Drie features die de stap maken naar productie-kwaliteit:

1. **Slider voor afmetingen** (in uitvoering — eerste implementatie). Speler
   versleept een schuif voor zijde/straal/lengte; de inhoud loopt live mee in
   de caption. Verandert "demo" naar "speeltuin". Geldt voor stap 8/9/10/12.
2. **Formule-animatie** ("5 × 5 × 5"): tijdens reveal lichten de drie 5's
   één voor één op op de juiste assen van de kubus — symbool gekoppeld aan
   ruimtelijke betekenis. Werk voor Shape3D + Question3DRenderer.
3. **⅓-relatie staptelijk tonen** (stap 12 piramide): laat 3 piramides
   animatief samen in de omsluitende balk passen ipv alleen de balk eromheen.
   Vereist composite-shape support in Shape3D.

# Architectuur-observatie
- `Vergelijking2Dvs3D.jsx` is nu een losse component. Voor schaalbaarheid:
  een **multi-figure-comparison shape-type** in Shape3D (`shape="vergelijking"`
  met `figures: [{shape, dimensions, label}, ...]`) zou consistent zijn met
  het registry-patroon. Refactor-actie wanneer een tweede vergelijking nodig is.
- Slider-feature heeft `sliders` prop op Shape3DIllustration; bij meerdere
  vragen die hetzelfde patroon gebruiken kan dit naar Question3DRenderer
  worden gepromoveerd voor een "speeltuin-mode".

# Toekomstige uitbreidingen (na Sprint 1)
**Pijler B — Interactieve 2D-componenten** (voor leerpaden waar 3D niet past):
- Pythagoras 2D: schuifbalken a/b → c² live
- Werkwoordsvervoeging: drag-drop tafel
- Statistiek: live histogrammen
- Geschiedenis: scrollbare tijdslijnen
Architectuur: vergelijkbaar met `questions3d.js` — registry voor 2D-interactives.

**Pijler C — SVG/CSS animaties in uitleg** (stap-voor-stap reveal van vergelijkingen, breuken-gelijknamig, etc.). Latere fase.

# Architectuur — registry-systeem (sinds commit 85ec226, 2026-05-02)

Drie gedeelde bestanden in `src/components/learn/3d/`:
- **`Shape3D.jsx`** — Three.js renderer voor kubus/balk/piramide. Drag-rotate, auto-rotate, sprite-labels, optional `showUnitCubes` (uitsplitsing in eenheidskubusjes) en `showBoundingBox` (omsluitende balk voor piramide). Imperatieve API via ref: `startTelAnimatie(onUpdate)` en `resetTelAnimatie()`. Verder uit te breiden met cilinder/bol/prisma.
- **`questions3d.js`** — registry met `QUESTIONS_3D`-array (Question3D-entries: trackId, vraag, shape, dimensions, labels, features, opties, formuleStappen). `getQuestion3D(trackId)` lookup-helper.
- **`Question3DRenderer.jsx`** — wrapper die trackId krijgt, juiste vraag pakt, Shape3D laadt, toggles + antwoord-UI rendert. `make3DInteractiveComponent(trackId)` helper voor leerpad-koppeling.

# Workflow voor nieuwe vraag

**Het nieuwe simpele pad** (gebruik dit voor vragen die in `Shape3D` passen):
1. Mark zegt: *"Voeg vraag RM-S15-Q3 toe: cilinder, straal 3, hoogte 8, antwoorden 226.19/56.55/75.4/24, features toonBerekening"*.
2. Ik voeg één entry toe aan `QUESTIONS_3D` in `questions3d.js`.
3. In het bijbehorende leerpad-bestand: `import { make3DInteractiveComponent }` + `step.interactiveComponent = make3DInteractiveComponent("RM-S15-Q3")`.
4. Klaar. Geen nieuwe componenten, geen Claude.ai-roundtrip.

**Als shape nog niet bestaat in `Shape3D`** (bv. "cilinder", "bol"): één keer uitbreiden in `Shape3D.jsx` (geometry + render-tak), daarna werkt elke variant automatisch.

**Speciale gevallen** (bv. 4-figuren-vergelijking): houd als losse component naast registry. Voorbeeld: `RM-S6-Q1.jsx`.

# Tracking-ID format
`{LeerpadCode}-S{stepIndex 0-based}-Q{checkIndex 0-based}`
- `RM` = ruimtemeetkunde
- `PY` = pythagoras
- ⚠️ Array-index ≠ UI-stapnummer (UI is 1-based). RM-S8 = "Inhoud kubus" = stap 9 in UI.

# Status (per 2026-05-02)

## ✅ Gedaan
| ID | Onderwerp | Hoe |
|---|---|---|
| RM-S6-Q1 | Welke figuur heeft inhoud? (4 figuren-vergelijking) | Losse component `RM-S6-Q1.jsx` (speciaal geval) |
| RM-S7-Q1 | "Wat meet inhoud?" — 4×2×1 balk met 8 blokjes-teller | Registry-entry + Shape3D `balk` |
| RM-S8-Q1 | Inhoud kubus 5×5×5 (125 blokjes, "Tel"-animatie) | Registry-entry + Shape3D `kubus` |
| RM-S9-Q1 | Balk 8×5×2 = 80 cm³ met blokjes-teller + berekening | Registry-entry + Shape3D `balk` |
| RM-S10-Q1 | Cilinder r=2, h=5 ≈ 62,8 cm³ met formule | Registry-entry + Shape3D `cilinder` (Shape3D uitgebreid Sprint 1.2) |
| RM-S12-Q1 | Inhoud piramide 4×4×6 (toggle "toon omsluitende balk") | Registry-entry + Shape3D `piramide` |

## 📋 Shortlist
**Hoge impact:**
- RM-S20-Q1 — k³ verdubbeling (kleine vs grote kubus naast elkaar — vereist eventueel Shape3D-uitbreiding voor "twee shapes naast elkaar" of een aparte composite-component)
- PY-S12-Q1 — 3D-pythagoras lichaamsdiagonaal balk (Shape3D balk + extra diagonaal-lijn — kleine uitbreiding)

**Rest:**
- RM-S7-Q1 — "Wat meet 'inhoud'?" (balk vol kubusjes — past direct in Shape3D `balk` met showUnitCubes)
- RM-S9-Q1 — Balk-inhoud 8×5×2 (direct in registry)
- RM-S10-Q1 — Cilinder-inhoud (vereist `cilinder` in Shape3D)
- RM-S13-Q1 — Kegel ⅓ van cilinder (vereist `kegel` + `cilinder`)
- RM-S21-Q1 — Samenvatting k/k²/k³ (composite of 2D-overlay)
- RM-S23-Q1 — Maquette × schaal (twee balken)
- RM-S24-Q1 — Aquarium met liter-teller (balk + animatie water)
- RM-S25-Q1, Q2, Q3 — CSE watertank (cilinder)

# Tech-stack
- **three.js** v0.184.0 (geïnstalleerd in `package.json`)
- **JSX + JSDoc** (geen TypeScript — codebase is puur JS)
- **Bundle**: index.js ~3.97 MB. Niet kritiek voor nu; lazy-loaden via `React.lazy(() => import("./Shape3D.jsx"))` bij meer dan ~10 3D-vragen overwegen.

# LearnPath.jsx integratie
- `step.interactiveComponent` is een React-component met `onAnswer(correct, label)` callback.
- Render-mode "checking": als `step.interactiveComponent` aanwezig → render component; anders standaard multiple-choice.
- `handleInteractiveAnswer(correct)`: `setTimeout(completeStep, 1200)` bij correct, `attempts++` bij fout.
- Originele `step.checks[]` blijft als fallback / data-traceability bewaard.

# Locaties
- **Claude.ai-downloads (input voor speciale gevallen)**: `C:\Users\mark-\Downloads\{ID}-{Naam}.tsx`
- **Project-bestanden**: `C:\Users\mark-\Desktop\Studiebol\leerschool\src\components\learn\3d\` — alle Shape3D-gerelateerde files
- **Leerpad-koppeling**: `src/learnPaths/{leerpad}.js` — import + `interactiveComponent` veld op step

# Database
**Geen `questions`-tabel-koppeling.** Studiebol heeft geen algemene questions-tabel; quizzes/leerpaden zitten anders in elkaar (`quizzes` voor leerkracht-quizzes, `learn_paths` als file-based, `ai_question_pool` voor wegwerpvragen). Registry is een file. Als 3D-vragen later vanuit DB moeten komen: `Question3DRenderer` accepteert al een trackId-prop, dus alleen een DB→trackId-fetch is nodig — wrapper hoeft niet aangepast.

# How to apply
- **Vraag past in bestaande shape**: voeg entry toe aan `QUESTIONS_3D`, koppel via `make3DInteractiveComponent`. Klaar.
- **Vraag heeft nieuwe shape nodig**: breid `Shape3D` uit (geometry + render-tak). Voeg dan registry-entry toe.
- **Speciaal geval (geen 3D-shape)**: maak losse component, koppel direct via `step.interactiveComponent`. Voorbeeld: `RM-S6-Q1.jsx`.
- **Claude.ai-bestand binnenkomt**: lees uit Downloads. Als de inhoud past in registry-format (kubus/balk/piramide met opties): converteer NIET naar component maar naar registry-entry. Anders: speciaal geval, plaats in `src/components/learn/3d/{ID}.jsx`.
- Verwacht *array-index ≠ UI-stapnummer*-verwarring bij Mark; bij twijfel verwijs naar UI 1-based vs ID 0-based.
