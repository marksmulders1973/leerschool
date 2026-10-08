# Telling deel E (brugklas/onderbouw)

Geteld met node/grep: `steps[].checks.length` voor de leerpaden en het aantal `{ q:`-regels binnen het blok voor de vraagbestanden.

| Bestand | Blok | Nagekeken vragen | Fixes ernst 3 | ernst 2 | ernst 1 |
|---|---|---|---|---|---|
| src/learnPaths/celBiologie.js | volledig (11 stappen, incl. stap-explanations, SVG-teksten en uitlegPad) | 34 | 0 | 6 | 1 |
| src/learnPaths/fotosyntheseBiologie.js | volledig (6 stappen, incl. stap-explanations, SVG en uitlegPad) | 26 | 2 | 7 | 0 |
| src/data/sampleQuestions.js | natuur.klas1 (r. 1516-1565) | 50 | 0 | 0 | 0 |
| src/data/sampleQuestions.js | biologie.klas1 (r. 2507-2556) | 50 | 1 | 1 | 0 |
| src/data/textbookQuestions.js | bvj-havo-vwo-1 (r. 932-963) | 17 | 1 | 1 | 1 |
| **Totaal** | | **177** | **4** | **15** | **2** |

21 fixes in totaal. Sommige gaan over dezelfde vraag (de verwelk-vraag in cel: 4 fixes, optie + uitleg + theorie + niveau). Alle `zoek`-strings komen precies 1× voor. Ik heb alle 21 fixes gesimuleerd op een kopie en daarna `node --check` gedraaid: alle 4 bestanden blijven syntactisch geldig, en de leerpaden laden met hetzelfde aantal checks. Er is geen `answer`-index gewijzigd.
