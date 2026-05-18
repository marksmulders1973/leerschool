---
name: Examenpaden-uitrol roadmap (alle vakken, gewoon + examen-paden)
description: Mark's grote visie 2026-05-09: voor elk vak twee soorten leerpaden — 'gewoon' (basis-stof) en 'examen' (echte examenvragen met bron + uitleg + cross-link). Werkwijze: begin met examens, werk terug naar bijpassende leerwegen.
type: project
originSessionId: 117df0ef-b194-40f2-8e60-f054bcb3b40a
---
# Examenpaden-uitrol roadmap

Mark visie 2026-05-09 (na pilot economie 2025-T1):
- Voor élk vak: combinatie **gewone leerpaden** (basisstof, geen examen) + **examen-pad** (echte vragen, bron, uitleg)
- **Wederzijdse links**: vraag → "open leerpad" knop, leerpad → "oefen examenvragen" knop
- Werkwijze: **begin met de echte examens**, werk dan terug naar welke leerwegen erbij horen

## Wat de pilot bewijst (economie 2025-T1)

✅ Gelukt:
- Parser haalt informatiebron + uitleg uit PDF
- LearnPath rendert tabellen netjes
- 'Ik begrijp niet'-knop linkt naar Pincode-leerpad
- 'Leg uit'-knop toont officiele uitleg
- examenBron-pill maakt examen-vragen visueel onderscheidbaar

⚠ Lessen:
- pdftotext -table is veel beter dan -layout voor tabellen
- Maar: tabel-data alsnog HANDMATIG uittypen voor mooie tableData (parser kan dat nog niet)
- Per pilot-pad ~3-5 uur handwerk voor 10 vragen
- pdftotext mist images (kaarten, foto's, diagrammen) → vragen die die nodig hebben overslaan

## Per-vak workflow (te herhalen)

Voor elk vak (economie ✅ pilot, dan: nederlands, engels, geschiedenis, wiskunde, biologie, etc.):

1. **Examens downloaden** (3 jaargangen × 2 tijdvakken = 6 PDFs × 3 docs = 18 files)
   - Curl loop op examenblad.nl met juiste vakcode
2. **Parse alle 6** met `scripts/parse_examen.py` → JSON in `src/data/examenQuizzes/`
3. **Per examen**: voor elke MC-vraag handmatig:
   - Beoordeel: zelfstandig oplosbaar of vereist visual?
   - Zo zelfstandig: noteer bron-nr + leerpad-link + uitleg
   - Skip vragen die afbeelding/grafiek vereisen
4. **Genereer pilot-pad** per examen: `examen<vak>-2025-t1.js`, `examen<vak>-2025-t2.js`, etc.
5. **Per pilot-pad** handmatig de bron-tableData uitwerken (als er tabellen zijn)
6. **Mapping naar 'gewone' leerpaden**: voor elke vraag een `leerpadLink` veld
7. **Registreer** in `src/learnPaths/index.js`

## Status per vak

### Economie — 6/6 examens KLAAR ✅
- ✅ 2025-T1: 9 vragen met tableData (Sint-Maarten, Dog4fun)
- ✅ 2025-T2: 5 vragen (begroting, modaal, nivellering)
- ✅ 2024-T1: 6 vragen (EMU, omroep, Italië, vergeten uitgaven)
- ✅ 2024-T2: 6 vragen (Kameroen, Arjun BV, camping, fairtrade)
- ✅ 2023-T1: 5 vragen (subsidie, importheffing boter, influencer)
- ✅ 2023-T2: 7 vragen (afvalstoffen, WOZ, vermogensrendement)
- Totaal: **38 echte examenvragen** in 6 paden, allemaal met Pincode-leerpadLink.

### Engels — 1/6 examens
- ✅ 2025-T1: 9 vragen over 3 leesteksten (UFO, e-scooter, microplastics)
- Bron-teksten als body in elke vraag (Engels = leesvaardigheid)
- leerpadLink naar woordenschat-engels (best-effort)

### Geschiedenis — 1/6 examens
- ✅ 2025-T1: 6 vragen (kiesrecht 1918, Conferentie München, Stalin, EGKS, Cubacrisis)
- 19 bronnen geparseerd (parser nu 'bron N' format support)
- 4 leerpadLinks naar wereldoorlog2, 2 naar tijdvakken-geschiedenis

### Wiskunde — NIET HAALBAAR zonder open-vraag-modus
- Alle examen-vragen zijn open: 'bereken X', 'teken grafiek', 'los op'
- 0 MC-vragen in 2025-T1 examen
- Vereist UI-bouw voor open-vraag-input + automatische score
- Skip voor MVP, pak op met open-vraag-modus later

### Nederlands — niet gestart
- Vereist eerst nieuw 'leesvaardigheid VMBO-GT 4' basis-pad om naar te linken
- 111 MC-vragen al geparseerd, allen met bron-teksten

### Nederlands — 18 PDFs gedownload, 111 MC-vragen geparseerd
- ALLES vereist bron-teksten (begrijpend lezen)
- Geen Pincode-paden voor VMBO-GT 4 — moet nieuwe maken (begrijpend-lezen-pad)
- Workflow: maak eerst 1 nieuw "Nederlands lezen VMBO-GT 4" basis-pad, dan examen-paden

### Engels — 1 examen geparseerd (2025-T1)
- 29 MC-vragen met 11 bron-teksten — al klaar in JSON
- Mappen naar bestaande Engels-paden (woordenschat, tijden, lezen)
- 2 examens nog downloaden (2024-T1, 2023-T1)

### Geschiedenis — niet gedaan
- Vakcode 0125, hééft bijlage met bronnen (vergelijkbaar met economie)
- 6 examens downloaden, parser draaien

### Wiskunde — niet gedaan
- Vakcode 0153, GEEN bijlage (bronnen in opgaven zelf)
- Veel reken-vragen → past natuurlijk in bestaande wiskunde-leerpaden
- 6 examens downloaden, mappen naar parabolen/pythagoras/lineaire/etc.

### Biologie / Aardrijkskunde / Maatschappij — later
- Mappen naar bestaande paden waar mogelijk

## Architectuur-beslissingen open

1. **1 examen-pad per examen** OF **1 examen-pad per vak met chapters per examen**?
   - Pilot: 1 pad voor 1 examen
   - Toekomst: misschien 1 pad per vak met 6 chapters, lijkt schoner

2. **Parser uitbreiden voor pdftotext -table flag**?
   - Geeft schonere bijlage-extractie
   - Niet 100% voldoende voor tableData (handmatig nog nodig)

3. **Visuele vragen — image-extractie**?
   - Vereist pdfimages of OCR
   - Veel werk, twijfelachtige kwaliteit
   - MVP: skip

4. **Cross-link automatisch genereren**?
   - Mapping vraag→leerpad doe je nu handmatig
   - Zou vraagtekst-keyword-matching kunnen werken? Risico: verkeerde links

## Scripts opgebouwd
- `scripts/parse_examen.py` — PDF set → JSON (met informatiebron + uitleg)
- `scripts/add_examenvragen_economie.py` — vragen IN bestaande paden injecteren
- `scripts/split_examenvragen_economie.py` — vragen uit gewone paden strippen + apart pad maken (verouderd: vragen weer terug in paden)
- `scripts/generate_examen_pilot.py` — eerste generator voor pilot-pad (handmatige overwrite nodig voor tableData)
- `scripts/split_pincode.py` — splits-script Pincode

## Agent-reviews 2026-05-09 (samengevat)

**Code-reviewer feedback** — top issues:
1. `LearnPath.jsx` tableData/rows zonder null-check → crash bij missing rows
2. `leerpadLink` zonder ID-validatie → silent failure bij rename
3. Hardcoded `wrongHints: [null,null,null,null]` mismatcht bij 3- of 5-optie vragen
4. A11y: `details/summary` met `listStyle:none` mist visuele disclosure-arrow
5. Architectuur: bron op step-niveau ipv check-niveau (dezelfde bron 3x dupliceren bij Sint-Maarten)
6. Schaal: gebruik `pdfplumber` ipv `pdftotext` — heeft `extract_tables()` ingebouwd voor 70%+ automatisering
7. Test: build-time validatie van alle leerpadLink IDs

**Didactiek-reviewer feedback** — top issues:
1. **WrongHints verklappen het antwoord** — bv "Vergelijk export 854 met import 847" = leerling kan direct uitrekenen. Moet denkprikkel zijn ("Welke is groter?")
2. Geen logische opbouw makkelijk→moeilijk (vragen op examen-volgorde)
3. Dev-jargon "V1" — maak "Vraag 1"
4. Bron-tabellen missen leesinstructie ("Tip: vergelijk per jaar...")
5. **Defecte oude examenvragen IN Pincode-paden** — `wrongHints:[null,null,null,null]` + kapotte teksten. Pincode-paden nu deels gebroken door eerdere injectie.

**Het grote dilemma (didactiek-reviewer)**: examen-modus (authentieke volgorde + tijdsdruk + feedback aan eind) vs oefen-modus (didactische volgorde + hints + leerpad-links per vraag). Pilot is hybride — kies.

## Volgende sessies (in volgorde)

1. **Verwerk agent-reviews** voor pilot economie 2025-T1
2. **Schaal economie**: 5 andere examens (2024-T1, 2024-T2, 2023-T1, 2023-T2, 2025-T2)
3. **Wiskunde**: 6 examens, mappen naar bestaande wiskunde-paden
4. **Engels**: bestaande JSON gebruiken, mappen naar Engels-paden
5. **Nederlands**: nieuw basis-pad voor begrijpend lezen, dan examen-pad
6. **Geschiedenis**: zoals economie

## Mark's ICP-context

Bezorgde Cito-ouder voor groep 6-8 is primaire ICP — niet vmbo-gt 4
echter Mark's eigen dochter heeft volgende week examen, dus persoonlijke
prioriteit voor VMBO-GT 4. Op termijn moet de uitrol ook PO + onderbouw
VO dekken.
