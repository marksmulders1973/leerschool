# Eindmeting basisschool — 3 nov 2026 (na vervolgsets B1-B12)

Steekproef: `scripts/audit/steekproef-po.mjs 20261103 200` → 149 basisschoolpaden, pool 7.006 meerkeuzevragen, 200 getrokken, 4 delen van 50, vier onafhankelijke Opus-beoordelaars (alleen meten, niet herstellen). Criteria: fout = het kind krijgt vóór een poging iets verkeerds (fout antwoord, verradende/voorrekenende wrongHint, antwoord in de vraag, twee goede, feitfout); twijfel = verdedigbaar maar niet mooi (hulpstap `basis` die alleen het antwoord geeft, stijl, niveau).

**Uitkomst: 104 goed · 14 fout (7,0 %) · 82 twijfel · 0 verkeerd gemarkeerde antwoorden** (alle 199 oplosbare vragen: eigen keuze = antwoord; 1 vraag onoplosbaar door ontbrekende tabel).

Vergelijking: 13 okt basisschool 8/138 = 5,8 % (andere beoordelaars, mildere lezing). Deze meting is strenger (raadbare vorm en "antwoord in de vraag" bij groep 3-spelling meegeteld). Doel ≤ 2 % is nog niet gehaald.

## De 14 fouten
| nr | waar | soort |
|---|---|---|
| 29 | dichten-poezie-rijmen-po stap 5 vraag 8 | hint omschrijft het antwoord (vergelijking) |
| 34 | doorstroomtoets-rekenen-g8 stap 3 vraag 15 | hint rekent voor ("tien keer te weinig") |
| 35 | doorstroomtoets-rekenen-g8 stap 3 vraag 37 | hint rekent voor ("tien keer te veel") |
| 36 | doorstroomtoets-rekenen-g8 stap 4 vraag 10 | hint rekent voor ("15 minuten erbij") |
| 48 | doorstroomtoets-studievaardigheden-g8 stap 9 vraag 13 | antwoord gemarkeerd in de vraag ('spruitjes') |
| 77 | in-de-klas-nieuwkomers stap 4 vraag 1 | elke hint noemt het antwoord ("Ik heb pijn") |
| 119 | plattegrond-legenda-po stap 2 vraag 2 | antwoord in de vraag (🍴 = restaurant) |
| 121 | plattegrond-legenda-po stap 3 vraag 1 | antwoord in de vraag (N-pijl → noorden) |
| 129-132 | rekenen-tot-100/20-nieuwkomers, rekenverhaaltjes-nieuwkomers | **patroon**: hints "X is één/tien te weinig/te veel" rekenen het antwoord voor — komt uit `nieuwkomersFoutUitleg.js` |
| 142 | spelling-eerste-woorden-g3 stap 1 vraag 10 | antwoord in de vraag (l-i-p → lip) |
| 163 | topografie-nederland stap 2 vraag 4 | hint omschrijft Drenthe |

## Twijfel (82)
- ~50× hulpstap `niveaus.basis` geeft alleen het antwoord (bekend patroon, niet fout maar niet mooi).
- Raadbaar door vorm (A45-47, B57, B60), te makkelijk voor de groep (A41, B53, C120, C122), ontbrekende tekst/tabel bij de vraag (B72, C137, D167, D192), hint-feitjes (B56 "Wordt u wakker", C147 -isch, C110 bevriezen bij 0 °C), D174 "-2 NAP".

## Vervolg
1. De 14 fouten herstellen; het nieuwkomer-hintpatroon in de generator aanpakken (raakt alle nieuwkomer-rekenpaden).
2. Nameting met nieuwe seed na herstel.
3. Structurele twijfel: `basis`-hulpstappen die alleen het antwoord geven zijn de grootste restcategorie; die vallen onder de B-rondes als ze in een vervolgset zitten, maar niet alle paden zitten in een set.
