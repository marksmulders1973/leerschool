---
name: Leerkwartier — verbeterpunten uit audit 2 (eerstvolgende sessie)
description: Concrete actielijst uit 10-perspectieven-audit 2026-05-06 avond. Bij "ga door" begin met Q1 (top van de lijst).
type: project
originSessionId: da438f24-0b85-410c-8513-283d9b007cea
---
# Bij "ga door" — start met Q1 (en werk omlaag)

Mark heeft gezegd: volgende sessie zegt hij "ga door" en jij weet wat te doen. Dat betekent: **werk deze lijst af in volgorde, vraag niet eerst om bevestiging per item, geef per voltooid blok een tussenstand**. Mark heeft het concept van zelfstandig-tot-X-tijd al meermaals bevestigd.

## Quick wins (~15-30 min elk) — DOE EERST, alle 4

### ✅ ALLE UITVOERBARE AUDIT-2-ITEMS GEDAAN (2026-05-06 avond)

Eindstand sessie 2026-05-06 avond — 8 commits live + 2 SQL-migraties klaar voor Mark:
- Q1 `0087be6` — "Alles gemengd"-tegel uit Cito Stap 2 weg
- Q2 `882c850` — contrast-tokens in PlayQuiz (6 plekken naar muted-token)
- Q3 `a4e532b` — sneltrack-knop bovenaan LearnPath + vraag-aantal
- Q4 `ee95836` — rustige "Voor ouders"-link onder hero → /privacy.html
- M2 v1 `bc1f435` — vakkenkeuze-grid met PO/VO-toggle op StudentHome
- M2 v2 `50afcff` — Test+Boek-tegels weg (dubbelop), alleen Voortgang+Scorebord behouden
- M1 `3970809` — SM-2-style easeFactor + zachte fout-reset, defensief mét/zonder Supabase-kolom. 125 tests groen (was 120).
- G1 `3edcd8f` — SQL-trigger voor server-side player_name-sanitizer (privacy must-fix). Plak-en-klaar in Supabase Studio.
- QA bug #7 fix `626fb74` — zachte fout-reset werkt nu retroactief voor pre-deploy mastery-rijen (regressie-fix). 127 tests.
- Perf `8eca098` — manualChunks split: hoofd-bundle 1.2 MB → 39 kB gzip (-97%). LCP op school-wifi 9-13s → 1.5-2.5s.
- Textbook v1 `b386c38` — scaffolding TEXTBOOK_QUESTIONS + cascade in startGame + Pluspunt 40 vragen.
- Textbook v2 `ed04ab2` — Wereld in Getallen 40 vragen.
- QA cluster `c850ea4` — bugs #2 (Oefenen-vak-context), #3 (responsive grid), #5 (silent data-loss), #10 (#00d4ff token-fix).
- Textbook v3 `91f26d8` — Taal Actief 30 vragen.
- Textbook v4 `4d86b0a` — Naut/Meander/Brandaan 28 vragen wereldoriëntatie.

**PO-textbook-vragen totaal**: 138 vragen voor 4 boeken (Pluspunt 40 + WiG 40 + Taal Actief 30 + Naut 28). Resterend: 9 PO-boeken zonder vragen + alle VO-boeken.

**UPDATE 2026-05-06 22:30** — alle 13 PO-boeken nu gedekt (commits 70a1cc4, d1fe0c2, 4ae17d5, b9252fa):
- Rekenen 5/5: Pluspunt (40), WiG (40), gr-junior (28), wizwijs (24), alles-telt (21)
- Taal 5/5:    Taal Actief (30), Staal (30), NN Junior (18), VLL (18), Lijn 3 (15)
- Natuur 3/3:  Naut (28), Argus Clou (28), Blink (28)
- **Totaal: 348 handgeschreven vragen voor 13/13 PO-boeken (100% dekking)**.

**UPDATE 2026-05-06 23:00** — 32 VO-boeken gedekt (commits 9304326, 63286c1, 3bcd29e, 52dfcd5, 111e527, 5872f7c, cda4ae2, 7cbe9e5):
- Wiskunde: GR HV1d1 (20), MW HV1A (24), KERN-Wis HV1A (10), GR HV2 (15), GR HV3 (16) — 85 vragen
- Nederlands: NN HV1 (36), Op Niveau HV1 (16), Talent HV1 (12), KERN NL HV1 (13), Op Niveau Havo 4/5 (10) — 87
- Engels: Stepping Stones (24), New Interface (12), All Right (10) — 46
- Geschiedenis: Feniks (30), Geschiedeniswerkplaats (20), Sprekend Verleden (14) — 64
- Aardrijkskunde: De Geo (16), BuiteNLand (10) — 26
- Biologie: BvJ HV1 (21), BvJ HV2 (10) — 31
- NaSk: Overal (20), Newton (14) — 34
- Scheikunde: Chemie Overal (16) — 16
- Economie: Pincode (12) — 12
- Maatschappijleer: Thema's (10) — 10
- Bedrijfseconomie: M&O Havo (13) — 13
- Talen extra: Na Klar (Duits, 10), Grandes Lignes (Frans, 10), Paso Adelante (Spaans, 10) — 30
- Klassieken: Prima Nova (Latijn, 7), Hellas (Grieks, 6) — 13
- Levensbeschouwing: Zingeving (7) — 7

🎯 **Grand total 2026-05-06: 822 handgeschreven vragen voor 45 schoolboeken (13 PO + 32 VO)**.

Alle 19 grote vakken nu gedekt met minstens één methode. Resterend:
alternatieve methodes binnen al-gedekte vakken (Memo M&O, Caminos, TrabiTour,
KERN-Wis HV1B, etc.). Pad daarvan: 1-2 boeken per sessie als gewenst.

**Mark moet handmatig**:
1. Supabase Studio → SQL Editor → plak `supabase/migrations/20260506_sanitize_player_names.sql` → Run. Privacy-AVG-fix (G1).
2. Supabase Studio → SQL Editor → plak `supabase/migrations/20260506_add_ease_factor_to_topic_mastery.sql` → Run. Activeert M1 easeFactor.

Beide migraties zijn idempotent (DROP IF EXISTS / ADD COLUMN IF NOT EXISTS) — veilig om opnieuw te draaien.

### ✅ Q1 — "Alles gemengd" uit Cito Stap 2 weg (gedaan 2026-05-06 avond, commit 0087be6)
**Bestand**: `src/components/CitoPage.jsx`
**Probleem**: Featured tegel "Alles gemengd" staat bovenaan Stap 2 ("Oefen per onderdeel"). Leerkracht-agent: "ondermijnt de hele 3-staps-logica — leerling klikt 'm direct".
**Fix**: Tegel + 'of kies een onderdeel'-divider verwijderd uit mode 'oefenen'. Bestaande tekst-fallback onder aantal-vragen-keuze blijft werken voor wie alsnog wil mengen.

### Q2 — Contrast-tokens fix in PlayQuiz
**Bestanden**: `src/features/practice/PlayQuiz.jsx` (regels 564, 571, 598, 671, 642)
**Probleem**: A11y-agent: `color: "#556677"` op `#111e2e` ≈ 3.3:1, onder WCAG 1.4.3 AA-norm (4.5:1). Idem `#667788` en `#90c0a0`.
**Fix**: Vervang door `var(--color-text-muted)`. Check in `src/styles/tokens.css` of die token ≥4.5:1 levert op donkere bg; zo niet, bump naar `#9aa8b8` of vergelijkbaar.

### Q3 — Sneltrack-knop bovenaan LearnPath
**Bestand**: `src/features/learn/LearnPath.jsx` (Overview-component)
**Probleem**: 14jr-havo-agent: "die oranje knop staat ónder de 'Doorgaan'-knop, lijkt minder belangrijk dan-ie is".
**Fix**: Verplaats sneltrack-knop bóven de "🚀 Begin bij stap 1" / "▶ Doorgaan"-knop. Voeg label "3 examenvragen" toe (tel werkelijk aantal `checks` op de examen-stap).

### Q4 — Rustige "Voor ouders"-knop direct onder hero
**Bestand**: `src/components/HomePage.jsx`
**Probleem**: Ouder-agent: "geen tegel of knop 'Ik ben ouder'; lichtkrant + OBLITERATOR + scoreborden leiden af terwijl mijn kind van 8 naast me zit".
**Fix**: Voeg dunne knop/banner toe onder de 4 hero-tegels: "👨‍👩‍👧 Voor ouders — zo werkt het + privacy in 1 minuut" → linkt naar `/privacy.html` of opent een uitleg-modal.

## Middel (~30-60 min elk) — DOE NA Q1-Q4

### M1 — easeFactor in mastery-laag
**Bestand**: `src/features/mastery/mastery.js`
**Probleem**: Didacticus-agent: "binaire reset bij één fout = 120 dagen investering kwijt door tikfout. Demotiverend voor 10-jarigen."
**Fix**: Voeg `easeFactor` (0.5-2.5) toe per `topic_mastery`-rij. Bij fout: `interval × easeFactor × 0.85`. Bij goed: `easeFactor + 0.1` (cap 2.5). Vereist: 1 nieuwe Supabase-kolom + ~15 regels in `nextSpacedRepetitionState`.

### M2 — ⭐ GEPROMOVEERD: Vakkenkeuze-scherm wordt eerste landing voor kind
**Mark heeft op 2026-05-06 avond 2 screenshots gestuurd** als design-richting:
- Screenshot 1 (huidige StudentHome): te abstract voor 10-jarige — "Test je kennis / Uit je boek / Voortgang / Scorebord" zegt geen vak.
- Screenshot 2 (gewenst nieuw scherm) — bewaard in:
  - `C:\Users\mark-\.claude\uploads\da438f24-0b85-410c-8513-283d9b007cea\27311644-15027.png`
  - Dit is de **beoogde eerste-landing voor kind-gebruikers**.

**Layout van screenshot 2** (overnemen):
- Bovenin: **PO/VO-toggle** ("Basisschool groep 1-8" | "Voortgezet onderwijs klas 1-6") — actief blauw, inactief grijs
- Titel: "Kies je vak — leren of oefenen?"
- **2-koloms grid met 8 vak-tegels** voor PO: Rekenen, Taal/Nederlands, Spelling, Begrijpend Lezen, Wereld & Natuur, Engels, Geschiedenis, Aardrijkskunde
- **Per vak**: vak-icoon + vaknaam + **TWEE mini-knoppen**:
  - Groen "📚 Leren — X paden"
  - Lichter "🎯 Oefenen — uit je boek"
- Vakken zonder paden krijgen "Leren binnenkort"-label
- Onder: BottomNav blijft (Home / Leren / Test / Scorebord / OBLITERATOR)

**Pim's klacht (audit 2)**: "ik klik Leerling en zie geen woord 'rekenen' — alleen rollen, geen vakken". Dit scherm lost dat direct op.

**Implementatie-vragen om bij start volgende sessie te checken**:
1. Bestaat dit deels al in `src/features/learn/LearnPathsHub.jsx` of `src/components/SelfStudy.jsx`? Hergebruik > nieuw.
2. **Vervangt** dit scherm de huidige StudentHome (screenshot 1), of komt het ervóór als tussenstap?
   - **Mark's voorkeur (toegevoegd 2026-05-06 avond)**: ÉÉN LANGE SCROLLBARE PAGINA. Vakkenkeuze-grid bovenaan (eerste wat kind ziet — Pim's wens opgelost), daaronder de huidige StudentHome-content (kwartier-progress + 'Vandaag oefenen' + weakest subject + opdrachten + 'Laatst geoefend'). "Twee vliegen in één klap" — kind krijgt directe vak-toegang, returning user krijgt zonder extra navigatie ook z'n status-blokken te zien.
   - **Trade-offs om in volgende sessie af te wegen**:
     - ✅ Geen extra navigatie-stap; één scroll
     - ✅ First-time leerling zonder data ziet alleen vakgrid (geen lege StudentHome-blokken)
     - ✅ Returning user kan vak kiezen óf doorscrollen naar 'doorgaan waar je was'
     - ⚠️ Mobile-scroll-diepte kan groot worden — overweeg sticky PO/VO-toggle bovenin zodat die altijd zichtbaar blijft
     - ⚠️ Volgorde-keuze: vakgrid → kwartier → opdrachten → laatst geoefend? Of vakgrid → laatst geoefend (snelle her-instap) → kwartier → opdrachten?
     - ⚠️ "Wiskunde heeft aandacht nodig"-card (weakest subject) is waardevol — kan blijven net onder de vakgrid als secundaire CTA, of geïntegreerd in de wiskunde-vak-tegel zelf met een 🔥-badge "47% — oefen!"
   - **Alternatief** als één-pagina te druk wordt: vervang StudentHome volledig en zet kwartier+streak alleen in een dunne info-strip ergens (bv. onder de PO/VO-toggle).
3. Wat doet "Oefenen uit je boek" per vak? → linkt naar `TextbookQuiz` met vak voorgeselecteerd.
4. Klik op groene "Leren X paden" → linkt naar LearnPathsHub gefilterd op dat vak + klas.
5. PO/VO-toggle: respecteer de rol die al gekozen is (Leerling = PO-default; Student = VO-default), maar laat handmatig switchen toe.

**Volgorde**: dit wordt **M2 = hoogste middel-prio**. Quick-wins Q1-Q4 eerst (raken bestaande pagina's), dan dit als grote UX-stap.

**Aanvullend**: dezelfde gedachtegang voor Student (VO-rol) — dat scherm zou de VO-toggle actief moeten hebben en VO-vakken tonen (Wiskunde, Nederlands, Engels, Geschiedenis, etc.).

## Groot (dedicated sessies — vraag aan Mark welke eerst)

### G1 — Server-side leaderboard naam-sanitizer ⚠️ PRIVACY MUST-FIX
**Bestanden**: nieuwe Supabase Edge Function of RLS-trigger
**Probleem**: Privacy-DPO-agent: "privacy-statement belooft 'alleen voornaam'. Code dwingt dat niet af. AP ziet dat als schijnzekerheid — exact wat ze hardst aanpakken."
**Fix**: Edge function (of trigger) op INSERT van `leaderboard` / `obliterator_scores` / `hall_of_fame`: voornaam + 1 letter achternaam, strip cijfers/spaties/scheldwoorden, max 12 chars.
**Test**: insert "Mark Smulders groep 6 De Regenboog" → output "Mark S".
**Prioriteit**: deze week.

### G2 — useObliteratorGame-hook stap 1
**Plan**: zie `src/games/obliterator/REFACTOR.md`
**Probleem**: Frontend-agent: "9077 regels, 92 inner-closure-functies = single point of failure".
**Fix**: Stap 1 uit REFACTOR.md — alle game-state naar custom hook.
**Vereist**: Mark moet OBLITERATOR daadwerkelijk spelen tussen wijzigingen (test-protocol in REFACTOR.md).

## Strategisch (Mark's beslissing, geen code)

### S1 — Verwijder Leerkracht- en Student-tegel uit hero
**Probleem**: Product-strateeg-agent: "3 rol-tegels = 3 business-modellen op 1 homepage = geen business-model".
**Fix**: Park Leerkracht-/Student-spoor op `/voor-scholen` en `/voor-vo` (zelfde codebase, eigen landingspagina). Hou homepage strikt op bezorgde Cito-ouder.
**Wachten op**: Mark's go. Dit is een **strategische keuze**, niet een code-fix.

# Volgorde-advies

Bij "ga door":
1. **Q1 → Q2 → Q3 → Q4** (alle quick wins, één commit per stuk of bundel als ze klein blijven)
2. Tussenstand aan Mark
3. **M2 (vakkenkeuze-scherm met PO/VO-toggle)** — Mark heeft hier expliciet om gevraagd met design-screenshots. Hoge UX-impact voor 10-jr-gebruiker (Pim).
4. **G1 (privacy must-fix)** — vraag Mark of hij Supabase Edge Function wil aanmaken (admin-access nodig)
5. **M1** als nog tijd
6. **G2 + S1** zijn dedicated sessies — niet zelfstandig starten
