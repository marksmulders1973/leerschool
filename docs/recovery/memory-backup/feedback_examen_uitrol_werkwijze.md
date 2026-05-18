---
name: Werkwijze examen-uitrol — pilot first, dan automation, dan schaal
description: Mark's werkwijze 2026-05-09/10 voor examenpaden uit te rollen — pilot van 1 examen handmatig, doorlopen tegen origineel PDF, daarna automation-pipeline met dezelfde lessen ingebouwd, daarna schaal.
type: feedback
originSessionId: 117df0ef-b194-40f2-8e60-f054bcb3b40a
---
# Werkwijze examen-uitrol

Geleerd tijdens pilot economie 2025-T1 (2026-05-09).

## Stappenplan voor elk nieuw examen

1. **Download** alle 3 PDFs (opgaven, bijlage, correctievoorschrift) van examenblad.nl
2. **Parse** met `scripts/parse_examen.py` → JSON
3. **Manueel mappen**: per MC-vraag bepaal:
   - Past de vraag in 4-MC format? (skip volgorde-, citeer-, schema-vragen)
   - Welke bron uit bijlage hoort erbij? ALLEEN als de vraag echt verwijst
   - Welk leerpad past bij het onderwerp? (`leerpadLink` veld)
4. **Schrijf pilot-pad** met:
   - tableData voor tabellen (echte cijfers uit `pdftotext -table`)
   - body voor tekstuele bronnen
   - explanation uit correctievoorschrift
   - didactische wrongHints per fout-optie (denkprikkel, geen verklap)
   - leerpadLink per vraag
5. **VERIFIEER tegen origineel**: print elke vraag uit JSON + vergelijk met
   PDF. Check: vraag, opties, correct antwoord, bron-koppeling. **Geen
   verzonnen bronnen**. Geen verzonnen cijfers. Geen verzonnen vragen.
6. **Build + test + commit + push**

## Cruciale lessons learned

### Verzonnen content = absolute no-go
Voor V37 had ik vraag + opties zelf bedacht (niet uit examen). Voor V29
had ik tabel-cijfers verzonnen ("indicatieve cijfers"). Beide verkeerd.
**Regel**: alleen echte data uit echte examen, of helemaal geen.

### Parser-issues
- MC-detectie pakt 6-optie volgorde-vragen ook (V32). Filter op exact 3-4 opties.
- "informatiebron N" header werkt na uitbreiding (was alleen "Tekst N" voor talen).
- Correctievoorschrift uitleg-tekst goed te extraheren met state-machine.
- pdftotext -layout is rommelig voor tabellen — gebruik -table mode.

### Bronnen-koppeling
- Niet elke vraag in een examensectie deelt de sectie-bron.
- Algemene kennisvragen (V8 "wat doet gemeente") hebben GEEN bron nodig.
- Bron alleen koppelen als vraag expliciet verwijst ("gebruik informatiebron N").

### UI-fixes ondersteund tijdens uitrol
- LearnPath.jsx tableData-rendering (HTML-tabel met cellen)
- examenBron-pill bovenin vraag (gele badge)
- "Ik begrijp niet"-knop met leerpadLink (cross-pad navigatie via App.jsx onPickPath)
- "Leg uit"-toggle met explanation uit correctievoorschrift

## Volgorde van uitrol (Mark wens 2026-05-09)

1. ✅ Pilot economie 2025-T1 (10 → 9 vragen na verificatie)
2. Pipeline bouwen (pdfplumber + Claude API batch) — automation
3. Schaal economie: 5 andere examens via pipeline
4. Wiskunde, Engels, Nederlands, geschiedenis: zelfde pipeline
5. Premium-architectuur (paywall voor examen-modus, oefen-modus gratis)

## Hoofdregel uit memory
**HomePage IS heilig** — alleen security/privacy-fixes mogen daar
geraakt worden. Alle uitbreidingen op andere componenten.
