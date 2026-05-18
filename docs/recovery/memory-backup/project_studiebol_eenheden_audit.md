---
name: Eenheden-audit alle leerpaden — start bij procenten groep 5
description: Bug gevonden 2026-05-11 in procenten-leerpad groep 5; eenheden (%, €, m, min) ontbreken in uitleg. Audit-prompt + actielijst voor volgende sessie.
type: project
originSessionId: 25894f4c-77d0-410f-8f61-eebf1e996bc5
---
**Bug gemeld door Mark 2026-05-11:** in het leerpad "procenten groep 5" staan rekensommen waar `%` of `€` ontbreken, waardoor een kind van ~8 jr moet gokken wat de getallen betekenen.

**Voorbeeld FOUT (te corrigeren):**
> Je betaalt 100 − 30 = 70.

**GOED:**
> Je betaalt 100% − 30% = 70%.

**Why:** Doelgroep groep 5 = ~8 jr. ICP = bezorgde Cito-ouder; uitleg moet zelfstandig leesbaar zijn zonder volwassene erbij. Impliciete eenheden zijn een didactiek-bug, raakt kern-belofte (Leerkwartier = duidelijk leren in 15 min).

**How to apply:**
1. Begin volgende sessie met het procenten-pad groep 5 (zoek leerpad-bestand in `Desktop\Studiebol\leerschool\src\` — vermoedelijk `tracks/rekenen/...procenten...`).
2. Pas dan: draai dezelfde eenheden-audit over ALLE rekenpaden (procenten, geld, meten, tijd, lengte, oppervlakte, gewicht).
3. Audit-criteria (Mark's prompt verbatim):
   - Percentages → altijd `%` waar nodig.
   - Geld → altijd `€` waar nodig.
   - Eenheden expliciet noemen: "procent", "euro", "meter", "minuten", "gram", "centimeter", etc.
   - Vermijd impliciete getallen zoals "100 − 30" of "7 keer 40" zonder eenheid.
   - Herschrijf zodat een gemiddeld 8-jarig kind het zelfstandig snapt.
   - Duidelijkheid > kortheid.
4. Check zowel `intro`/`uitleg`-velden ALS `question`/`feedback`/`wrongHints`-velden van elke step.
5. Overweeg een lint-script (`scripts/audit-units.mjs`) dat patronen zoals `\d+\s*[−+*x×]\s*\d+\s*=` flagt waar geen `%`/`€`/eenheid binnen ±20 tekens staat — kan in alle paden draaien.

**Volgorde:** procenten gr5 (Mark's directe bug) → geld → meten → tijd → rest. Daarna audit-script als preventie.

**Status:** DEELS GEDAAN 2026-05-12.
- ✅ procentenPo.js (groep 5-8): stap 4 winkel-voorbeeld + stap 6 + stap 7 (leerlingen/liter-eenheden) + wrongHints.
- ✅ scripts/audit-units.mjs: lint script staat in repo, heuristisch maar werkt voor money/percent context.
- ✅ geldRekenen.js: wisselgeld-stap explanation + uitlegPad-velden voorzien van €.
- ✅ redactiesommen.js: twee-stap-sommen voorzien van € en koekjes/knikkers-eenheid.
- ✅ schattenAfronden.js: "Hoeveel kost 23×19" → abstract, en boodschappen-voorbeeld €.
- ✅ tabellenGrafieken.js: hond-percentage wrongHints herschreven (geen losse "18÷40×100" meer).
- 🟡 NOG TE DOEN later: lint output bevatte ook volgordeBewerkingen, stelsels, differentieren, lineaireFormules, balansBeco, pincode*. Veel false positives (machten/algebra/jaartal-ranges); echte issues alleen in balansBeco L550 ("100.000 − 70.000 = 30.000 winst" zonder €). Pak op bij volgende audit-ronde of als Mark een specifieke bug meldt.
