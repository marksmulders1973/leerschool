# Nameting basisschool — 3 nov 2026 (na herstel eindmeting + generator)

Steekproef: `scripts/audit/steekproef-po.mjs 20261104 200` (verse seed, zelfde pool van 7.006 meerkeuzevragen uit 149 basisschoolpaden), 4 delen van 50, vier onafhankelijke Opus-beoordelaars, alleen meten. Zelfde criteria als de meting van vanochtend (seed 20261103).

**Uitkomst: 103 goed · 7 fout (3,5 %) · 90 twijfel · 0 verkeerd gemarkeerde antwoorden** (alle 200: eigen keuze = antwoord).

Verloop: 13 okt 5,8 % (milder geteld) → 3 nov ochtend 7,0 % (streng) → 3 nov middag **3,5 %** na herstel van 14 fouten + generator-patroon. Doel ≤ 2 % nog niet gehaald.

## De 7 fouten
| nr | waar | soort |
|---|---|---|
| 46 | doorstroomtoets-studievaardigheden-g8 stap 5 vraag 19 | antwoord in de vraag ("2 = saus warm maken") + hint wijst stap aan |
| 49 | doorstroomtoets-studievaardigheden-g8 stap 8 vraag 22 | hint noemt het antwoord ("controleerbaarheid"), absurde afleiders |
| 50 | doorstroomtoets-studievaardigheden-g8 stap 10 vraag 16 | rijtje staat al op alfabet; antwoord = volgende woord in de vraag |
| 55 | eetcultuur-nederland-po stap 4 vraag 4 | antwoord in de vraag (Goudse kaas → Gouda) |
| 185 | water-erfgoed-nederland-po stap 6 vraag 9 | antwoord in de vraag (Afsluitdijk → lange dijk), hint "kijk naar de naam" |
| 196, 197 | woorden-3-nieuwkomers stap 1 vraag 4, stap 3 vraag 3 | **patroon**: `vg()` zet de uitleg als wrongHint bij élke foute optie → de uitleg noemt het antwoord |

## Twijfel (90)
- ~57× `niveaus.basis` geeft alleen het antwoord (grootste restcategorie; vooral maten-eenheden, meetkunde-bouwsels, klokkijken, studievaardigheden).
- Raadbaar door vorm/absurde afleiders (A20, A28, A44, A48, B56-58, B60, B72, C112, C113, D152, D161); te makkelijk voor de groep (A32, A45, A47, B85); vraag verwijst naar folder/tekst/prijslijst die niet bij de vraag staat (B62, B88, C136, C137, D166, D174); machten 4² in groep 5 (D181-182), min×min in basisschool (C107); hint rekent bijna voor (C120, D170); kleinigheden (B77, B83, B91, D172, C142).

## Vervolg
1. De 7 herstellen; `vg()`-patroon in de nieuwkomer-woordpaden structureel oplossen (uitleg → explanation, hint neutraal).
2. Doorstroomtoets studievaardigheden g8 blijft de bank met de meeste treffers (3 van 7 hier, 5 van 14 vanochtend): die bank als geheel opnieuw door een nakijker halen.
3. Daarna nameting 3 (nieuwe seed). Structureel daarna: `basis`-hulpstappen die alleen het antwoord geven.
