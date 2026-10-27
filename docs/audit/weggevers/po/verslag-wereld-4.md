# Strenge ronde basisschool — batch wereld-4 (laatste van 26), 27 okt 2026

Bestanden (8 paden, 276 meerkeuzevragen): kaartlezenPo.js (54), wereldreligiesPo.js (18), werelddelenLandenPo.js (53), oudheidEgyptiansGriekenPo.js (40), wereldorientatieMixPo.js (25), godsdienstenCulturenPo.js (25), beroepenWerkPo.js (40), vulkanenPo.js (21).
Deelverslagen met per vraag oud → nieuw: `verslag-wereld-4-A.md` (kaartlezen, wereldreligies), `-B.md` (werelddelen, oudheid), `-C.md` (mix, godsdiensten), `-D.md` (beroepen, vulkanen).

## Uitkomst
| | aantal |
|---|---|
| Nagekeken (alle meerkeuzevragen, drie rondes) | 276 |
| Gewijzigd t.o.v. main | 269 checks (177 vraagteksten) |
| `answer`-index, aantal opties, stappen/checks gewijzigd | 0 (`vergelijk-met-main --q-mag`: 0 afwijkingen) |
| Feit-/rekenfouten gecorrigeerd (vraag, hint of lesstof) | 11 — o.a. Google Maps vs papieren kaart, ezelsbrug N-O-Z-W, "profeet van de islam" (drie goede antwoorden), boeddhisme kent wel hel-werelden, Boeddha geboren in Lumbini, hoogwater 1995, werktijden 16-17 jaar, folders vanaf 13, Edict van Milaan 313, WIC 1621, minimumloon 2026 |
| Twijfel voor Mark | zie onder |
| `npm run audit:vragen` | 355 paden · 18758 vragen · 0 meldingen |
| Build + vitest | groen (2058 tests) |

## Hoe (anders dan de 25 eerdere batches)
1. **Ronde 1** (4 nakijkers, elk 2 bestanden): 236 vragen hersteld.
2. **Blinde steekproeven van 30** door een frisse nakijker die eerst alleen vraag + opties ziet: 3 → 7 → 2 → 1 → 1 → 1 → 2 → 1 fout. De steekproef bleef dus fouten vinden, vooral: afkorting in de vraag met de uitgeschreven vorm als enige passende optie (hbo, ZZP), afleiders van een andere soort (organisatie bij "welk beroep", zee bij "welke oceaan"), goede optie als enige met twee redenen, hints die het antwoord per uitsluiting geven, telegramzinnen, dubbele vragen in de eindtoets.
3. **Ronde 2** (4 nakijkers) met de oordelen van de blinde nakijkers als maatstaf: 130 vragen opnieuw hersteld.
4. **Dekkende blinde controle over alle 276 vragen** (4 nakijkers): 12 fout + 32 twijfel, alle met een kant-en-klaar voorstel → toegepast (ronde 3), op 2 dubbele vragen na.
5. Laatste steekproef (30 uit alle 276): 1 fout (taalfout "steen dat" + onjuiste gas-hint) → hersteld, plus 9 kleine punten (spelling mbo/hbo/wo, Cheops/Chefren/Mykerinos, Mont Blanc 4805 m, "noorden is boven" expliciet).

**Les voor de volgende keer:** een steekproef van 30 na één herstelronde is niet genoeg; de dekkende blinde controle (alle vragen, alleen vraag + opties, daarna pas antwoorden) vond in één keer wat zeven steekproeven stuk voor stuk vonden. Doe die controle standaard als tweede ronde.

## Twijfel voor Mark (belangrijkste; volledige lijsten in de deelverslagen)
1. **Dubbele vragen in eindtoetsen** die niet zonder nieuwe stof te vervangen zijn: oudheid stap 4 vraag 23 (eerste Olympische Spelen, zelfde feit als vraag 8); godsdiensten stap 5 vraag 1 (grootste godsdienst, zelfde als stap 1 vraag 2). Voorstel: een van de twee vervangen door nieuwe stof (bv. olijftakkrans; kerkgebouwen).
2. **Brasília/Brazilië en Romulus/Rome**: de klank van de naam helpt een kind ook zonder kennis; de vragen zijn nu zo gesteld dat "Brazilië" er niet meer in staat, maar echt oplossen kan alleen door de vraag te vervangen.
3. **Goede antwoorden anders verwoord** (zelfde betekenis, zelfde plek), graag akkoord: kaartlezen "Geluid" → "Inhoudsopgave" (als niet-kaartonderdeel); werelddelen "Geen enkel land" → "De Noordzee" (noordkant van Nederland); "Golden Gate" → "Golden Gate Bridge"; beroepen: ZZP-vragen nu "Werkt voor zichzelf, zonder mensen in dienst"; eindtoets-vragen 9/11/13/18/23 van beroepen kregen een andere invalshoek (tuin, mbo-beroep, quartaire sector, overheid, pabo); hbo-vraag noemt fysiotherapeut i.p.v. verpleegkundige (kan ook mbo).
4. **Verouderde lesstof die niet in een vraag zit**: Nederlandse religiecijfers (CBS), "5500 kerken", AOW-leeftijd (nu 67 in 2026-2027, 67+3 mnd in 2028 gezet), Dalai Lama-afleider verloopt bij opvolging.
5. **Te basaal voor groep 7-8** (geen fout): "Nederland ligt in Europa", "Jezus hoort bij het christendom", "een veearts werkt met dieren". Vervangen = nieuwe stof, dus niet gedaan.
6. **Kyiv (Kiev)** zo gespeld in werelddelen; jouw keuze.
7. **Kaartlezen stap 5 vraag 8 en 20** (hoogtelijnen, rode kant kompasnaald) gaan over stof die niet in de uitleg staat.

## Eindmeting basisschool
Zie `docs/audit/weggevers/VERSLAG-po-streng.md` (200 willekeurige basisschoolvragen, seed 20261027, vier onafhankelijke nakijkers).
