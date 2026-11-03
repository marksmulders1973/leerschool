# Nakijkverslag weekpakket W49-W52 (blinde tweede lezer, 3 nov 2026)

Werkwijze: elke vraag (rekenen, taal, leesvragen) eerst zelf opgelost met alleen vraag, tekst en opties; daarna vergeleken met `html_antwoorden`; pas daarna `W49-W52-controle.md` geopend. Ook gecontroleerd: antwoord in de vraag, twee goede antwoorden, feiten in de leesteksten, telegramzinnen, niveau groep 7/8, spelling (Groene Boekje), concurrentnamen.

## Telling

| Editie | Goed (eigen antwoord = blad) | Fout in blad | Twijfel |
|---|---|---|---|
| W49 | 15/15 | 0 | 0 (1 vraag duidelijker gemaakt) |
| W50 | 15/15 | 0 | 2 (opgelost: vraag 5, vraag 9) + 1 spelfout in vraag 11 |
| W51 | 15/15 | 0 | 1 (opgelost: vraag 11, meer goede antwoorden) |
| W52 | 15/15 | 0 | 0 |
| **Totaal** | **60/60** | **0** | **4, alle opgelost** |

Mijn antwoord en het blad verschillen bij geen enkele vraag. Ook de controle.md verschilt bij geen enkele vraag van mijn antwoord.

## Feitencheck leesteksten

Het WebSearch-budget van deze sessie was op (200/200). Daarom zijn de feiten nagerekend waar dat kon en verder op eigen kennis gecontroleerd:
- **Pakjesavond 2026** = zaterdag 5 dec. Nagerekend met node: klopt. Ook 19-12-2026 = zaterdag en 3-1-2027 = zondag (W52-5): klopt.
- **Kortste dag**: zonnewende 21 dec 2026. Daglengte uitgerekend (met refractie): Groningen 7 u 31, Amsterdam 7 u 40, Maastricht 7 u 56, Eijsden 7 u 57. "Nog geen acht uur licht" klopt dus overal in Nederland, maar in Zuid-Limburg maar net. Astronomische winter en Australië-zomer/langste dag kloppen.
- **Wilson Bentley**: boer uit Jericho (Vermont, VS), eerste foto van een sneeuwvlok op 15 jan 1885, meer dan 5.000 foto's (ca. 5.400). Klopt met wat ik weet; niet online nagekeken.
- **Egel**: normale lichaamstemperatuur ca. 35 °C, in winterslaap enkele graden boven nul; hartslag ca. 190 naar ca. 20 per minuut; wordt tussendoor wakker en wisselt soms van nest. Komt overeen met de gangbare cijfers; niet online nagekeken.
- **Cacao** (W49): gordel rond de evenaar, Ivoorkust en Ghana als grootste producenten, fermenteren (gisten) voor de smaak, holle letters door het ronddraaien van de mal. Klopt.
- **Maker-alinea's**: de pagina's `weektaak-leerkracht.html`, `doorstroomtoets-oefenvragen.html` (noemt zelf "36 gratis oefenvragen") en `klaar-voor-de-brugklas.html` bestaan in `public/`.

## Wat ik veranderde (in de JSON en waar nodig in controle.md)

1. **W50-11 spelling**: "mee schaatsen" → **"meeschaatsen"** in de vraag en in het antwoordblad (scheidbaar samengesteld werkwoord, in het Groene Boekje aaneen). Ook in de controle.md aangepast. Het antwoord blijft verder hetzelfde.
2. **W50-5 twijfel**: de leeftijd van de leerling zelf stond er niet; een groep-8-leerling van 12-13 kan twijfelen over het kindtarief (t/m 12). Toegevoegd: "Je bent 11 jaar en … je zus van 9 jaar". Het antwoord blijft €22,50.
3. **W50-9 twijfel**: het blad noemde alleen "ontdooien", terwijl de controle.md "dooien" ook goed rekent. In het blad toegevoegd: "(dooien is ook goed)".
4. **W51-11 twijfel**: de omgekeerde zin "Omdat het begint te sneeuwen, gaan we naar binnen." is ook een goede zin met "omdat". Toegevoegd als goed antwoord in het blad en in de controle.md.
5. **W49-3 duidelijker**: "van de zak" → "van de hele zak" (2×), zodat 1/3 duidelijk over de hele 60 gaat (punt van de controle.md). Het antwoord blijft 25.
6. **W49-7 uitleg**: de onduidelijke "ge-/be- + stam + d" vervangen door "beloven begint al met be-, dus er komt geen ge- voor; stam 'beloof', en de v … dus een d". Het antwoord blijft beloofd.

## Bewust laten staan

- **W51-1** (20%, niet 25%): het blad legt uit dat je rekent ten opzichte van de prijs van 6 losse ballen. Dat is de gebruikelijke lezing ("hoeveel procent bespaar je").
- **W51-14** "Daar" = Australië: "het zuidelijk halfrond" staat in dezelfde zin en is dus geen tweede goed antwoord.
- **W50 leestekst** "bevriest waterdamp tegen zo'n stofje": eigenlijk gaat waterdamp direct over in ijs (depositie), maar dit is passend vereenvoudigd voor groep 7/8.
- **W51 "nog geen acht uur licht"**: klopt overal (zie de berekening hierboven), dus niet aangepast.
- **W52-11** regel "a, i, o, u of y" voor 's: klopt met het Groene Boekje.
- Geen telegramzinnen gevonden (de recept- en prijsregels zijn bewust lijstjes). Geen concurrentnamen. Er stond geen antwoord in de vraag, en geen meerkeuzevraag had twee goede opties. Het niveau past bij groep 7/8.

JSON na de wijzigingen gecontroleerd met `node -e` (parseert, 4 edities).
