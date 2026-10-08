# Telling deel F (oefenbank PO)

Geteld met `grep -c '{ q:'` op de genoemde regelbereiken (branch audit3/natuur-biologie). Alle vragen hieronder heb ik zelf opgelost en vergeleken met `answer`, inclusief opties, explanation en (bij 1 vraag) de SVG-tekst.

| Bestand | Blok | Aangeboden aan | Vragen nagekeken | Ernst 3 | Ernst 2 | Ernst 1 |
|---|---|---|---|---|---|---|
| src/data/sampleQuestions.js | natuur.groep3 (r. 1334-1383) | groep 3 én groep 4 (alias groep4 = groep3) | 50 | 0 | 2 | 6 |
| src/data/sampleQuestions.js | natuur.groep5 (r. 1386-1435) | "Groep 5-6" | 50 | 5 | 3 | 2 |
| src/data/sampleQuestions.js | natuur.groep7 (r. 1438-1487) | "Groep 7-8" + Doorstroomtoets-wereldoriëntatie-mix | 50 | 0 | 1 | 0 |
| src/data/sampleQuestions.js | natuur.groep8 (r. 1491-1513) | groep8-pool (geen eigen LEVELS-id) | 20 | 0 | 0 | 1 |
| src/data/textbookQuestions.js | "naut-meander-brandaan" (r. 211-264, 7 hoofdstukken × 4) | groep 5-8 (defaultLevel groep5) | 28 | 0 | 1 | 1 |
| **Totaal** | | | **198** | **5** | **7** | **10** |

22 fixes in `fixes-F.json`; elk `zoek` komt precies 1× voor (gecontroleerd met `src.split(zoek).length-1 === 1`). Alle fixes samen toegepast op een kopie: `node --check` slaagt, aantal vragen (170 / 28) en de reeks `answer`-indexen ongewijzigd, aantal opties per vraag ongewijzigd (4).

Opmerking: `natuur.klas1` (vanaf r. 1515) valt buiten deel F en is niet nagekeken. groep7 bevat veel natuur-/scheikunde-vragen op VO-niveau: niet gefixt maar in `twijfel-F.md` gezet (geen biologie, zou een volledig nieuwe vraag vereisen).
