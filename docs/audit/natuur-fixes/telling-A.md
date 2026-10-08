# Telling — deel A

Geteld met node: het module-object laden en per stap `checks.length` optellen. Daarna zijn de fixes toegepast op een kopie in de scratchpad. Die kopie laadt foutloos, het aantal checks is gelijk gebleven en alle `answer` staan op 0. Elke `zoek` is gecontroleerd op precies 1 voorkomen.

| Bestand | Stappen | Checks nagekeken | Fixes ernst 3 | ernst 2 | ernst 1 | Totaal |
|---|---|---|---|---|---|---|
| src/learnPaths/dierenSeizoenenNatuur.js | 11 | 40 (2,2,2,3,2,2,2,2,3,3,17) | 1 | 15 | 13 | 29 |
| src/learnPaths/dierenklassenPo.js | 6 | 40 (4,4,4,4,4,20) | 3 | 10 | 6 | 19 |
| **Totaal** | 17 | **80** | **4** | **25** | **19** | **48** |

Ook nagekeken: alle stap-uitleg, SVG-teksten en uitlegPad's (stappen/woorden/theorie/voorbeelden/basiskennis/niveaus). In dierenklassenPo hebben alleen de checks in stap 1, stap 2 en de eerste check van stap 4 een uitlegPad.

Let op: LearnPath.jsx schudt de opties (`shuffleOptions`). Verwijzingen naar "A" in een niveau-tekst kloppen dan niet (2 fixes).
