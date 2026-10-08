# Telling deel C

Geteld met node (import van het bestand, som van `steps[].checks.length`). Ook gecontroleerd: na het toepassen van alle fixes laden de bestanden nog steeds en is het aantal checks gelijk.

| Bestand | Level | Checks nagekeken | waarvan met uitlegPad | Fixes ernst 3 | ernst 2 | ernst 1 |
|---|---|---|---|---|---|---|
| src/learnPaths/weersvoorspellingPo.js | groep6-8 | 40 | 9 | 1 | 2 | 0 |
| src/learnPaths/waterkringloopPo.js | groep6-8 | 40 | 9 | 0 | 2 | 0 |
| src/learnPaths/evolutieMensPo.js | groep6-8 | 40 | 9 | 3 | 5 | 2 |
| **Totaal** | | **120** | **27** | **4** | **9** | **2** |

Totaal 15 fixes in fixes-C.json. Elke `zoek` komt precies 1× voor in het bestand (gecontroleerd met `src.split(zoek).length-1 === 1`). Ook de 4 stap-explanations per bestand zijn gelezen.
