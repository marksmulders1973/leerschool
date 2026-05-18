---
name: Leerkwartier — sessie-snapshot 2026-05-09 (Pincode + examenvragen)
description: Wat in deze sessie is opgeleverd voor economie (Pincode VMBO-GT 4), inclusief LeerpadBot, examen-parser en split gewone/examen-paden.
type: project
originSessionId: 117df0ef-b194-40f2-8e60-f054bcb3b40a
---
# Sessie 2026-05-09 — Pincode-economie + examenvragen-pipeline

Mark's dochter heeft volgende week haar economie-examen → focus op
maximaal goede economie-leerpaden + echte examenvragen-integratie.

## Wat in deze sessie gebeurde

### 1. Pincode 8 hoofdstukken volledig uitgewerkt
Van 3 stappen per hoofdstuk → **7-9 stappen per hoofdstuk**, na
vergelijking met de **officiële Pincode-inhoudsopgave** (Mark uploadde foto's).

Eindstand alle 8 leerpaden:
- **H1 Inkomen en welvaart**: 7 stappen (productiefactoren, Lorenz-curve, BBP, inkomensbeleid)
- **H2 Geld, sparen en lenen**: 9 stappen (incl. **Beleggen** + **Geld moet rollen!**)
- **H3 Ondernemen**: 9 stappen (incl. **Vraag/aanbod** + **Marktvormen**)
- **H4 Werk en arbeidsmarkt**: 7 stappen (vraag/aanbod arbeid, sociale zekerheid)
- **H5 De overheid**: 7 stappen (conjunctuur, marktordening, politiek systeem)
- **H6 Belasting**: 7 stappen (heffingskortingen, toeslagen, Belastingdienst)
- **H7 Buitenland/EU**: 7 stappen (protectionisme, multinationals, ECB)
- **H8 Ontwikkelingslanden**: 7 stappen (welvaart vs welzijn, SDG's, Fair Trade)

**Totaal**: 60 stappen × ~6 vragen = ~360 oefenvragen reguliere leerpaden.
Pincode 7e ed. VMBO-GT 4 inhoudsopgave 100% gedekt.

### 2. LeerpadBot 🔎 (Mark idee)
`src/features/learn/LeerpadBot.jsx` — leerling typt "rood staan" of
"BTW", bot zoekt door triggerKeywords van alle paden, top 3 suggesties
met 1-klik. Cross-vak vanuit student-home, binnen-vak vanuit vak-pagina.
Onbeantwoorde vragen worden gelogd in `localStorage.leerpad_bot_misses`
voor content-gap-analyse. Geen AI-kosten (keyword-match).

### 3. Examen-parser pipeline (scripts/parse_examen.py)
Nederlands/Engels/economie/geschiedenis examens hebben aparte bijlagen
op examenblad.nl. Script:
- Leest opgaven + bijlage + correctievoorschrift PDF
- Extracteert MC-vragen + correcte antwoorden
- Voor Engels-talen: koppelt bron-tekst per vraag via tekstNr
- Output: `src/data/examenQuizzes/<id>.json`

Vereist: `pdftotext` (poppler) op PATH. Werkt op Windows via Git Bash.

### 4. Echte examenvragen geïntegreerd in economie
33 examenvragen uit 6 examens (2023, 2024, 2025 × t1+t2) handmatig
gemapt naar leerpad-stappen. Open vragen + grafiek-vragen overgeslagen.

`scripts/add_examenvragen_economie.py` — herhaalbaar, idempotent.

### 5. Splits gewoon vs examen — VERVALLEN (Mark voorkeur 2)
Eerst gesplitst in apart "examen-oefenpad" — maar Mark gaf later
expliciet aan dat hij examenvragen IN gewone leerpaden wil zien, met
bron-markering. Apart pad weer verwijderd. Zie `feedback_examenvragen_in_leerpaden.md`.

**Eindstand**: 33 examenvragen terug in gewone Pincode-paden, met label
bovenaan elke vraag: `🎓 _Echt examen VMBO-GL en TL JJJJ tijdvak T, vraag N_`.

Filtering voor lagere klassen werkt al via `level: vmbo-gt-4` op de
Pincode-paden zelf — die zien lagere klassen sowieso niet.

### 6. UI-fixes deze sessie
- StudentHome PO/VO-toggle verbergen als niveau al gekozen (anders dubbele beslissing)
- StudentHome telling: ook `vmbo`/`havo`/`vwo`-paden meetellen in VO-modus
- "Dat is juist!"-banner bij correcte antwoorden in leerpaden (was te subtiel)
- Examens-pagina: 3 gelijkwaardige knoppen (📜 Opgaven · 📑 Bijlage · ✅ Antwoorden)
- Examens-pagina: 📑 Bijlage-link toegevoegd voor talen/zaakvakken
- Examens-pagina: ▶ "Speel in de app"-knop voor speelbare examen-quiz
- PlayQuiz: bron-tekst card boven vraag bij examen-quiz (collapsable)

### 7. Bot-feedback van Mark verwerkt
- "Beleggen" werkte niet → nieuwe stap "Sparen of beleggen" in h2 + keywords
- Examenvragen "Geld moet rollen!" + "Vraag/aanbod" + "Macht op de markt"
  ontbraken vergeleken met officiële Pincode-inhoud → 3 stappen toegevoegd

## Tech / scripts opgebouwd
- `scripts/parse_examen.py` — PDF-set → JSON (werkt voor talen + economie)
- `scripts/split_pincode.py` — herhaalbaar splits-script (1 mega-pad → 8 hoofdstukken)
- `scripts/add_pincode_vragen.py` — extra vragen injecten in stappen
- `scripts/add_examenvragen_economie.py` — examen-checks injecten via mapping
- `scripts/split_examenvragen_economie.py` — strip + nieuw examen-pad genereren

## Tests + commits
- 197/197 tests groen
- ~15 commits gepusht in deze sessie
- Live op Vercel (auto-deploy via main-branch)

## Belangrijke leerpunten
- Mark's bot-test toont gaten: "beleggen" miste → leerling-feedback is goud
- Echte examenvragen vereisen handmatige mapping (parser kan niet bedoelen)
- Open vragen + visuele vragen overslaan = 50% van examenvragen
- Splits gewoon/examen-pad voorkomt verwarring lagere klassen
