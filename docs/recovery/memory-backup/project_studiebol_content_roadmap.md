---
name: Studiebol — content-roadmap voor breedte per klas/vak
description: Welke leerpaden ontbreken om het klas-filter z'n volle waarde te geven. Concrete week-voor-week-prioriteiten.
type: project
originSessionId: 1ec042a2-ef4d-4c78-bb73-733d7a415c47
---
# Doel

Klas-aware filter (Stap 1, live 2026-05-02) werkt alleen écht goed wanneer er
**voor élke klas in elk vak ten minste 1 pad bestaat**. Anders ziet een klas-3
leerling die op Aardrijkskunde klikt alleen klas-2-stof of een lege staat.

# Huidige dekking (peildatum 2026-05-02)

| Vak              | Klas 1 | Klas 2 | Klas 3 | Klas 4 / VMBO | Havo 4-5 / VWO bovenbouw |
|------------------|--------|--------|--------|---------------|--------------------------|
| **Wiskunde**     | 14    | 5     | 3     | —             | 3                        |
| **Nederlands**   | 4     | —     | —     | —             | 4 (havo 4)               |
| **Engels**       | 4 (onderbouw) | 0 | 0 | 0           | 0                        |
| Biologie         | 1 (cellen)    | 0 | 0 | 0           | 0                        |
| Geschiedenis     | 1 (tijdvakken)| 0 | 0 | 0           | 0                        |
| Aardrijkskunde   | 1 (klimaten)  | 0 | 0 | 0           | 0                        |
| Natuurkunde      | 1 (krachten)  | 0 | 0 | 0           | 0                        |
| Scheikunde       | 1 (atoombouw) | 0 | 0 | 0           | 0                        |
| Economie         | 0    | 1 (vraag/aanbod) | 0 | 0 | 1 (extra)            |
| Bedrijfseconomie | 0    | 1 (balans) | 0 | 0 | 0                       |
| Duits            | 1 (naamvallen) | 0 | 0 | 0          | 0                        |
| Frans            | 1 (passé composé) | 0 | 0 | 0       | 0                        |
| Maatschappijleer | 1 (NL-staat)  | 0 | 0 | 0           | 0                        |
| Natuur (PO)      | 1 (dieren+seizoenen) | 0 | 0 | 0    | 0                        |

**Totaal**: 51 paden, **veel gaten** in klas 2/3/4-VMBO/bovenbouw voor de meeste
niet-wiskunde-vakken.

# Top 10 high-impact paden om als volgende te bouwen

Gerangschikt op een combinatie van: **examens-relevantie**, **breed publiek**,
**lacune in dekking**, **content-bouwbaarheid** (wat past bij onze huidige
3D/SVG-stack).

| # | Pad                                | Vak           | Klas       | Reden                                       |
|---|------------------------------------|---------------|------------|---------------------------------------------|
| 1 | ~~**WO2 — oorzaken + verloop + gevolg**~~ ✅ gebouwd 2026-05-05 (id `wereldoorlog2-geschiedenis`, 11 stappen) | Geschiedenis | klas 3-4   | Klassieker, breed gevraagd, examenstof CSE. |
| 2 | ~~**Platentektoniek + vulkanen**~~ ✅ gebouwd 2026-05-05 (id `platentektoniek-aardrijkskunde`, 11 stappen)     | Aardrijkskunde| klas 2-3   | Visueel mooi (3D/SVG), CSE-stof.            |
| 3 | ~~**Voortplanting + hormoonstelsel**~~ ✅ gebouwd 2026-05-05 (id `voortplanting-hormonen-biologie`, 11 stappen) | Biologie      | klas 2-3   | Hoog op de zoeklijst, examenstof.           |
| 4 | ~~**Elektriciteit (stroom + spanning + weerstand)**~~ ✅ gebouwd 2026-05-05 (id `elektriciteit-natuurkunde`, 11 stappen) | Natuurkunde | klas 3 | CSE-stof, formule + schema's.              |
| 5 | **Engels — CSE-leesvaardigheid** (signaalwoorden + tekstsoorten) | Engels | klas 4-5 | Direct CSE-relevant, ouders zoeken dit. **Volgende prioriteit**.   |
| 6 | ~~**Tachtigjarige Oorlog**~~ ✅ gebouwd 2026-05-05 (id `tachtigjarige-oorlog-geschiedenis`, 11 stappen)           | Geschiedenis  | klas 2     | Vult gat, leuke verhaallijn (Willem v Oranje, Spaans-NL). |
| 7 | ~~**Chemische reacties balanceren**~~ ✅ gebouwd 2026-05-05 (id `chemische-reacties-scheikunde`, 9 stappen)  | Scheikunde    | klas 3     | CSE-stof, helpt bij stoichiometrie.         |
| 8 | **Wiskunde — Klas 4 VMBO-GT eindexamen** | Wiskunde | klas 4   | VMBO-eindexamen specifiek, gat in dekking.  |
| 9 | ~~**Engels — Onregelmatige werkwoorden uitbreiding** (V2 niveau)~~ ✅ gebouwd 2026-05-05 (id `onregelmatige-werkwoorden-v2-engels`, 9 stappen) | Engels | klas 2 | Bouwt op bestaand klas 1 pad.            |
| 10 | **BBP + inflatie + conjunctuur** | Economie      | klas 4-5   | Examen havo/vwo economie.                   |

**Sessie 2026-05-05 (17:00-18:00)**: 7 paden gebouwd in één run (#1, #2, #3, #4, #6, #7, #9). Top-10 nu voor 70% gedekt. Resterend: #5 (Engels CSE-leesvaardigheid), #8 (Wiskunde klas 4 VMBO-GT), #10 (Economie BBP/inflatie). Voortgang: 51 → ~58 totale paden.

**Sessie 2026-05-05 (21:00-22:00) — PO-focus**: 6 paden voor basisschool gebouwd:
- `topografie-nederland` (groep 6-8) — 12 provincies + hoofdsteden + 3 grote rivieren + Wadden­eilanden + Randstad + buurlanden
- `klokkijken` (groep 3-5) — analoog/digitaal, kwartieren, half-uren NL-stijl, 24-uurs format, tijd berekenen
- `werkwoordsspelling-dt` (groep 5-7) — 't kofschip, dt-regel (word/wordt), voltooid deelwoord
- `sterren-planeten` (groep 5-8) — zon + 8 planeten + manen + asteroïden/kometen
- `spelling-ei-ij-au-ou` (groep 4-6) — homofoon-paren met woordlijsten + trucjes
- `volgorde-bewerkingen` (groep 5-7) — HMVDOA + haakjes + machten

PO heeft nu een veel betere basisdekking. Voortgang: ~58 → ~64 totale paden.

**Sessie 2026-05-06 (08:48-09:45) — Cito groep 8 boost**: focus op het zwakke punt voor PO-gebruikers (de Cito-eindtoets):
- **Vragenbank**: cito.groep8 van 60 → 141 vragen (+81). Verdeling: rekenen (~35), taal (~25), begrijpend lezen (3 nieuwe teksten met 9 vragen: Klimaat-akkoord, Schijf van Vijf), wereldoriëntatie (~30).
- **Leerpad `cito-strategieen-groep8`** (groep 8) — 7 stappen: wat is de toets, onderdelen, pacing, eliminatie meerkeuze, begrijpend lezen aanpak, rekenen aanpak, eindopdracht.
- **Leerpad `begrijpend-lezen-strategie`** (groep 5-8) — 7 stappen: tekstsoorten, signaalwoorden (6 groepen), tekstopbouw, skim+scan, vraagsoorten + strikvragen.
- **Cito-eindtoets-simulatie-modus**: nieuwe knop op CitoPage '🎯 50 — eindtoets-simulatie' (vol-rij oranje gradient). Bij klik start 50-vragen-quiz met 60-min countdown-timer in PlayQuiz-header (oranje, rood + pulserend bij laatste 5 min, automatisch finish bij 0:00 met `simulationTimedOut`-flag).
- **Advies-banner** in ResultsPage na simulatie: indicatie vmbo-bb/kb / vmbo-tl / havo / vwo gebaseerd op percentage (35/55/70/85% drempels), met disclaimer 'ruwe indicatie, officieel via leerkracht + echte Cito'.

Voortgang: ~64 → ~66 paden + Cito-flow van 60 vragen + losse onderdelen → 141 vragen + simulatie-modus + leerpad-strategieën + advies-banner. Cito groep 8 is nu USP-niveau.

**Cumulatieve impact als alle 10 gebouwd**: klas-filter werkt voor 80% van de
leerlingen in klas 3-5 op tenminste 5+ vakken. Dat is genoeg om het klas-aware
hub-design echt z'n waarde te laten leveren.

# Tempo-suggestie (realistisch voor solo-builder)

- **1 pad per week** ≈ 10 weken → top-10 dekking
- Per pad: ~3-5 uur eigen werk Mark (uitleg-tekst + checks) + 1 sessie Claude
  (3D/SVG illustraties + check-vraag-formulering + integratie)
- Beste tijd om te bouwen: **wekelijkse vrije avond** als ritme

# Workflow per nieuw pad (snelste pad)

1. Mark bedenkt: hoofdstuk + 8-12 stappen (titel + 1-zin samenvatting per stap)
2. Mark levert dat als plain text aan Claude
3. Claude bouwt:
   - `src/learnPaths/<id>.js` met steps + checks + uitleg
   - SVG-illustraties per stap (waar passend)
   - 3D-component via Shape3D registry (waar passend)
   - Registreert in `src/learnPaths/index.js`
   - Plaatst topic-tag in `src/topicTaxonomy.js` (voor mastery)
4. Test in lokale dev → live na akkoord
5. Optioneel: pad opnemen in een nieuwe of bestaande curriculum als er logische
   volgorde-meerwaarde is (nu pas, niet preventief).

# NIET doen

- **Niet preventief curricula maken** voor 1-2 paden per vak — pas wanneer
  vak ≥3 paden heeft per klas-niveau.
- **Niet alle vakken parallel bijbouwen** — kies focus, doe 1 pad per week
  zorgvuldig. Mark heeft beperkte tijd, kwaliteit > volume.
- **Niet content kopiëren uit schoolboeken** — auteursrecht. Gebruik publiekelijk
  beschikbare bronnen + eigen formulering.

# Why

Klas-filter (Stap 1) maakt navigatie helder, maar zonder voldoende paden zien
leerlingen lege schermen. Mark erkende dit zelf: "ik vermoed dat je meer
leerpaden per vak moet maken". Deze roadmap geeft prioriteit + tempo zonder
overweldiging.

# How to apply

- **Bij nieuwe Studiebol-sessie** waar Mark vraagt "wat moet ik nu bouwen": kijk
  naar deze tabel + voorgestelde top 10. Stel concreet 1 pad voor om mee te
  beginnen.
- **Wanneer Mark klaar is met een pad**: streep af in deze tabel en update
  totaal-dekking.
- **Wanneer een vak ≥3 paden heeft per klas-niveau**: stel een curriculum-
  toevoeging voor (zoals "Wiskunde — Havo 4-5 / VWO" met logaritmen + diff +
  periodiek wanneer Mark nog 1 pad bovenbouw bouwt).
