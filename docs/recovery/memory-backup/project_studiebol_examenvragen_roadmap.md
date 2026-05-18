---
name: Examenvragen-integratie roadmap (andere vakken + open vragen)
description: Wat nog open staat voor het examenvragen-werk — andere vakken naast economie + open-vraag-modus.
type: project
originSessionId: 117df0ef-b194-40f2-8e60-f054bcb3b40a
---
# Examenvragen-roadmap — wat staat open

Sessie 2026-05-09 leverde economie compleet op (Pincode + 33 examenvragen
in apart oefenpad). Mark's wens: **alle vakken** krijgen dezelfde behandeling.

## Voor elk volgend vak — workflow

1. **Download examens** uit examenblad.nl (3 jaargangen × 2 tijdvakken = 6 PDFs × 3 docs = 18 files)
2. **Parse** met `scripts/parse_examen.py` — output naar `src/data/examenQuizzes/`
3. **Bekijk** alle MC-vragen, identificeer goede vs slechte (grafiek/tabel)
4. **MAP** elke werkbare vraag naar leerpad-stap (handmatig — vereist begrip)
5. **Genereer** examen-oefenpad via aangepaste versie van split-script
6. **Registreer** in `src/learnPaths/index.js`
7. Build + test + push

## Vakken in volgorde van prioriteit

### Hoog (klas 4 examen-relevant)
- **Wiskunde VMBO-GT** — code 0153, vakcode in examens.js. Geen bijlage nodig (alle bronnen in opgaven). Mark heeft al PDF lokaal voor 2024-T1.
- **Nederlands VMBO-GT** — code 0011, hééft bijlage (lees-teksten). Parser werkt al voor Engels-stijl bijlagen.
- **Engels VMBO-GT** — code 0071. Parser bewezen voor 2025-T1: 29 MC-vragen + 11 bron-teksten. JSON ligt klaar in `src/data/examenQuizzes/engels-vmbo-gltl-2025-tijdvak1.json`.

### Medium (klas 4 maar minder gevraagd)
- **Geschiedenis VMBO-GT** — code 0125, hééft bijlage (bronnen)
- **Biologie VMBO-GT** — code 0191, geen bijlage (bronnen in opgaven)
- **Aardrijkskunde VMBO-GT** — code 0131, geen bijlage

### Lager (later)
- HAVO/VWO varianten — andere vakcodes, andere niveaus
- VMBO-BB / VMBO-KB — andere vakcodes

## Bestaande leerpaden waar examenvragen in zouden kunnen

Per vak — leerpaden die al bestaan en echte examenvragen kunnen krijgen:

**Wiskunde**: 20 paden (parabolen, pythagoras, kwadratische vergelijkingen, lineaire formules, etc.) — examenvragen mappen op rekenkundig onderwerp.

**Nederlands**: leerpaden voor begrijpend lezen, spelling, woordsoorten, werkwoordsvervoeging — examenvragen meestal lezen-gericht (vereist bron-tekst!).

**Engels**: pastTensesEngels, presentTensesEngels, woordenschatEngels, onregelmatige werkwoorden — maar examenvragen Engels gaan over LEESTEKSTEN, niet specifiek tijden. Anders mappen.

## Open-vraag-modus (TODO, vereist UI-werk)

30+ open vragen per economie-examen worden nu overgeslagen. Implementatie:
- Nieuw vraag-type `type: "open"` met `juistAntwoord` + `aanwijzingen`
- PlayQuiz-uitbreiding: tekstvak ipv 4 knoppen
- Validatie: trefwoorden in correctievoorschrift matchen op input?
  Of: "ben je tevreden met je antwoord? compare met modelantwoord"
- Voor MVP: laat gebruiker ZELF beoordelen (zoals examen-correctievoorschrift)

Dit is veel UI-werk (paar uur). Zou waardevol zijn maar geen blocker.

## Pipeline uitbreiden / verbeteren

### Voor parse_examen.py
- Bron-tekst-detectie werkt voor talen-bijlages, niet voor economie/zaakvakken
  (die hebben "informatiebron 1" / "afbeelding 2" stijl, geen "Tekst 1")
- Volgorde-vragen ("zet a-c-b") niet ondersteund — overgeslagen
- Citeervragen niet ondersteund — overgeslagen
- Beter tekens-vervangen (rare unicode in PDFs)

### Voor splits-scripts
- Eén generiek script dat per vak werkt (nu: alleen `_economie` gehardcoded)
- Argument-driven: `python scripts/split_examen.py --vak nederlands --jaren 2023,2024,2025`

### Voor examen-pad UI
- Filtering op niveau werkt al via `level: vmbo-gt-4` (StudentHome telling)
- Eventueel: badge "🎓 Examen oefenen" duidelijker in UI

## Dit doen Mark zelf? Of Claude?

Claude kan:
- Pipeline-scripts aanpassen
- Mapping doen (vereist taal-/vak-kennis)
- Build + test + push

Mark zou kunnen:
- Beoordelen of mapping-keuzes inhoudelijk kloppen
- Test in de app om te zien of vragen lekker spelen
- Dochter laten testen op bruikbaarheid

## Geschatte tijd per vak

- Download + parse: ~5 min (script automatisch)
- Mapping handmatig: ~30-45 min (vereist concentratie + onderwerpsbegrip)
- Splits + registreren + push: ~5 min
- **Totaal per vak**: ~45-60 min werk

## Nice-to-have

- "Top examen-onderwerpen": welk Pincode-hoofdstuk komt het VAAKST in examens?
  (Antwoord uit mapping: H7 buitenland heeft 8 vragen, H3 ondernemen 6, H1 inkomen 5)
  → leerling kan focus op meest examen-relevante hoofdstukken
- Examen-pad eindcijfer-prognose: bij X% goed → Y% kans op voldoende
- Per pad: "% Pincode-dekking" badge
