---
name: Examenvragen MOETEN 100% authentiek zijn (hard coded regel)
description: Mark's harde regel 2026-05-09 — geen paraphrase, geen verzinning. Vragen + opties in examen-paden moeten EXACT match met PDF-tekst. Audit-script + fix-script bestaan.
type: feedback
originSessionId: 117df0ef-b194-40f2-8e60-f054bcb3b40a
---
# Examenvragen MUST be authentiek

Mark eist (2026-05-09): "alle echte examen vragen MOETEN echt en authentiek zijn,
maak dat hard coded en herstel overal, ps de antwoorden ook"

**Why:** Mark spotte twee paraphrases (V36 economie 2023-T1 "marketing-beïnvloeding"
ipv "commerciële beïnvloeding"; V37 economie 2025-T1 verzonnen content). Een audit
van 61 vragen vond extra paraphrases. Vertrouwen-issue: een leerling die oefent op
een GEPARAPHRASEERDE vraag denkt dat ze de echte stof beheerst en faalt op het echte
examen. Mark's dochter heeft echt examen volgende week — speelt om vertrouwen.

**How to apply:**
1. **Bij elke nieuwe examen-vraag**: kopieer LETTERLIJK uit PDF (niet uit kop, niet
   herformuleren voor leesbaarheid). De echte vraag-tekst inclusief aanloop-context
   (1-3 zinnen voor het ?-teken) komt rauw in `q:`.
2. **Geen samenvattingen, geen kleine stijl-aanpassingen** ("zegt" → "vervolgt"
   verschillen tellen). Letterlijk = letterlijk.
3. **Eventuele didactische framing** (bv. "in tekst 3 staat:") gaat in `bronTekst.titel`
   of `examenBron`-pill, NIET in `q`.
4. **Antwoord-opties** ook letterlijk uit PDF — geen "(OZB)" toevoegen, geen woordvolgorde.
5. **Run `python scripts/audit_examenpaden.py` na elk nieuw examen-pad.** Issues
   moeten 0 zijn (of alleen pdftotext-encoding-glitches die in normalize-tabel staan).

## Scripts

- **`scripts/audit_examenpaden.py`** — vergelijkt q + options in elk examen-pad
  met `src/data/examenQuizzes/<id>.json`. Detecteert paraphrases via "pad mag
  korter zijn dan JSON, niet langer/anders".
- **`scripts/fix_examenpaden.py`** — auto-vervangt q + options in alle paden met
  de schone PDF-versie uit JSON (cropt op eerste `?` na pos 30, behoudt
  wrongHints/explanation/examenBron/bronTekst/leerpadLink).
- **`scripts/parse_examen.py`** — PDF-set → JSON. Verbeterd: opties stoppen bij
  lege regel of niet-geïndenteerde regel (anders pakt parser context van volgende
  sectie).

## Bekende edge-cases (parser)

- **pdftotext glyph-glitches**: `ï` → `'`, `é` → `'`, `ë` → `'`. Deze 7 false
  positives in audit zijn pad-correct (UTF-8) vs JSON-pdftotext-rommel. Niet
  fixen in pad — pad is juist.
- **Curly quotes** in PDF: pdftotext geeft soms `'` (U+2018) ipv straight quote
  — `clean_pdf_text` in fix-script normaliseert dit.

## Wanneer wel JSON-versie aanpassen?

Soms heeft pdftotext-output context van de VOLGENDE vraag erbij (bv. "De familie
Boot..." na de hele vraag voor de volgende vraag). Het `crop_question` in
fix-script knipt op eerste `?` na pos 30. Werkt voor 90%+ van vragen. Edge-cases
moeten handmatig gechecked worden tegen de echte PDF (`pdftotext -layout`).

## Status 2026-05-09 (na audit)

- 61 vragen ge-update over 9 examen-paden
- 7 audit-issues over (allemaal pdftotext-encoding-glitches, géén paraphrase)
- Workflow voor nieuwe examen-paden: parse → handmatig schrijven met JSON
  ernaast (kopieer-plak q + options) → audit → fix als nodig
