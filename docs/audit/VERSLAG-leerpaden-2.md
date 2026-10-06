# Verslag audit leerpaden ronde 2 — strenge tweede nakijkronde (6-7 okt 2026)

**Branch:** `audit3/leerpaden-2`, gestart vanaf `origin/audit3/integratie` (`07d08ed3`). Niet naar main.
**Laatste inhoudelijke commit:** `3a87e531` (eindmeting deel A). De commit met dit verslag komt daar bovenop.
**Aangeraakt:** alleen `src/learnPaths/` en dit verslag. De build genereert ook `public/leerpad/*.html` opnieuw (5 bestanden). Die vallen buiten deze opdracht en zijn teruggezet; ze worden bij de eerstvolgende gewone build weer gelijkgetrokken. `src/versie.js` is om dezelfde reden niet opgehoogd.

## Uitkomst in het kort

| | |
|---|---|
| Paden nagekeken | **353 van 353** (alle id's uit `pathManifest.generated.json`, inclusief de .jsx-paden en de 48 `examen-`-paden) |
| Checks nagekeken | **10.047** |
| Checks met een herstelling (scriptmatig geteld) | **2.822** (28,1%) in 321 paden |
| Checks verwijderd | **0** |
| Stappen met een herstelde stap-uitleg (buiten de checks) | 149 |
| Ernst volgens de nakijkers (2.505 herstelregels) | 266 × ernst 3 (fout antwoord, twee goede opties, feitfout) · 1.637 × ernst 2 (dubbelzinnig, hint verraadt het antwoord, weggever) · 602 × ernst 1 (notatie/stijl) |
| Twijfelgevallen voor Mark | 201 (zie onderaan) |
| **Eindmeting (200 checks, seed 20261008)** | **22 van 200 = 11,0% fout of dubbelzinnig** (vóór herstel), alle 22 daarna hersteld. **Het doel van ≤ 2% is niet gehaald.** |

**Eerlijke duiding van de eindmeting.** Van de 22 vondsten gaan er 7 (3,5%) over de inhoud: een feitfout, een rekenfout in de uitleg, een spelfout, een dubbelzinnige vraag of een hint die bij de verkeerde optie hoort. De andere 15 (7,5%) zijn weggevers:
- een hint die het antwoord noemt;
- een goede optie die zich verraadt doordat ze als enige een omschrijving is of veel langer is.

De nakijkers hebben deze soort het vaakst hersteld (ruim 1.600 keer), maar nog lang niet overal. Voor ≤ 2% is een derde, gerichte ronde nodig op juist deze twee soorten weggevers. Zie het voorstel onder "Twijfel voor Mark".

## Werkwijze

- **Buiten de telling:** vier verkeersbestanden in `src/learnPaths/` (`verkeerVeiligOpStraatG4.js`, `verkeersregelsVeiligheidPo.js`, `voorrangBasisPo.js`, `vvnVerkeersexamenPo.js`) staan niet in `pathManifest.generated.json`. Volgens de opdracht (id → file uit het manifest) vallen ze buiten deze ronde.

- **Verdeling:** 38 strenge nakijkers, verdeeld over vak en niveau (groepen g01–g35). De drie grote Doorstroomtoets-paden (rekenen-g8 264, studievaardigheden-g8 330, taal-g8 237) zijn elk over twee nakijkers verdeeld, per stap.
- **Per vraag:** de nakijker loste eerst zelf op, toetste dan aan de strenge lat uit de opdracht en herstelde minimaal met Edit. Structuur, id's en volgorde zijn niet veranderd. Bij twijfel is niets gewijzigd, wel gemeld.
- **Onderbreking:** 15 groepen (g09, g11, g24–g35) stopten om 18:20 UTC door de API-limiet van het account. Hun tussenstand is als WIP-commit (`ad20906e`) bewaard. Na de reset om 22:36 UTC zijn ze verdergegaan en afgerond.
- **Controles door de coördinator, per groep vóór de commit:**
  - aantal checks per pad vóór = ná (script, dump van elk pad);
  - `node --check` per gewijzigd .js-bestand;
  - elk pad met gemelde herstellingen heeft ook echt een diff.
  - Deze laatste controle ving één fout: bij g20 waren de herstellingen in 8 bestanden door een scriptfout niet weggeschreven. Ze zijn opnieuw toegepast (commit "g20 deel 2").
- **Controles aan het eind:**
  - alle 353 paden: aantal checks ongewijzigd (10.047 = 10.047);
  - `examen-`-paden: `q`, `bronTekst` en `examenBron` van alle 286 checks in 48 paden byte-gelijk aan de start (script `examencheck`);
  - overal `wrongHints.length === options.length` en geen hint bij het goede antwoord;
  - geen onzichtbare tekens in opties;
  - geen punt-decimalen in opties. De enige treffers zijn kloktijden als "10.00 uur", en die zijn correct.
  - `npm run audit:vragen`: **0 meldingen** (353 paden · 17.258 vragen · 609 kale sommen nagerekend). De informatieve lijst "antwoord mogelijk weggegeven" bevat 24 regels, vooral verwijswoord- en leesvragen waarin het antwoord bewust in de tekst staat.
  - `npm run build`: **slaagt**, inclusief prebuild en de 15-min-gate.
- **Telwijze:** *hersteld* = aantal checks dat inhoudelijk verschilt tussen `07d08ed3` en nu. Dat is met een script geteld: elk pad oud en nieuw geladen en de checks één voor één vergeleken. Dit is exact en wijkt op drie plekken licht af van wat de nakijkers zelf telden:
  - rekenen-tot-20- en rekenen-tot-100-nieuwkomers: één aangepaste sommengenerator raakt meerdere checks;
  - goniometrie: 9 tegen 10 gemeld.
- **Opties husselen:** de app husselt de opties (`shuffleOpties`), behalve bij checks met `examenBron`. Daar blijft de officiële volgorde staan. Verwijzingen als "— A." of "Optie B" in uitleg buiten de examenvragen klopten dus niet en zijn op veel plekken vervangen door de inhoud. Waar nakijkers dat in examenvragen ook deden, is dat neutraal: de nieuwe tekst klopt, de oude was daar ook goed.

## Meest voorkomende foutsoorten (uit de 2.505 herstelregels)

1. **Goede optie herkenbaar zonder nadenken.** Zij had als enige haakjes, een jaartal, een eenheid of toelichting, of was opvallend langer. Dit was verreweg de grootste groep, vooral in de havo/vwo-paden, de Pincode-economiepaden en de wereldoriëntatie-PO-paden.
2. **Hints die het antwoord noemen of voorrekenen**, zoals "Te weinig — 8 is correct", "Reken: 5 × 100" of "Met ei niet ij".
3. **Onzin-afleiders**: "Niet relevant", "Niet bestaand", "Magie", "Random" en dergelijke, vaak met de hint "Wel.". Vervangen door aannemelijke, eenduidig foute opties. Bijvoorbeeld 46× in de natuur-PO-paden en bijna elke vraag in spreekwoorden-uitdrukkingen-po.
4. **Twee verdedigbare antwoorden** (266 regels met ernst 3, deels ook feitfouten). Zie de top 40.
5. **Feitfouten in stap-uitleg die een kind overneemt**, bijvoorbeeld:
   - "studievaardigheden/wereldoriëntatie/geschiedenis zit in de Doorstroomtoets";
   - metaal voelt koud door "lagere soortelijke warmte";
   - de chromosfeer als koude laag;
   - NAP = "Nieuw" Amsterdams Peil;
   - "Ik weet dat ik niets weet" staat letterlijk in de Apologie;
   - Japan tekende de capitulatie op 15 augustus.

## Lijst van paden (id · gecontroleerd · hersteld · verwijderd)

Scriptmatig geteld (checks die verschillen tussen `07d08ed3` en `3a87e531`).

| pad | gecontroleerd | hersteld | verwijderd |
|---|---|---|---|
| aardobservatie-risico-havo-vwo | 25 | 4 | 0 |
| ai-machine-learning-informatica | 20 | 20 | 0 |
| alfabet-woordenboek-po | 25 | 2 | 0 |
| algebra-vergelijkingen-havo-vwo | 25 | 3 | 0 |
| algoritmen-programmeren-po | 40 | 32 | 0 |
| algoritmen-pseudocode-informatica | 20 | 20 | 0 |
| alinea-functies-tussenkopjes-po | 26 | 2 | 0 |
| argumentatieleer | 34 | 12 | 0 |
| atmosfeer-klimaat-havo-vwo | 25 | 15 | 0 |
| atoombouw-scheikunde | 35 | 9 | 0 |
| balans-beco | 35 | 4 | 0 |
| basis-grammatica-engels-po | 40 | 3 | 0 |
| bbp-conjunctuur-economie | 42 | 17 | 0 |
| bedrijfseconomie-havo-vwo | 25 | 21 | 0 |
| beeldhouwkunst-kunst | 12 | 4 | 0 |
| begrijpend-lezen-strategie | 40 | 8 | 0 |
| begrijpend-lezen-teksten-po | 40 | 13 | 0 |
| bekende-boeken-literatuur-po | 40 | 18 | 0 |
| bekende-nederlanders-po | 40 | 26 | 0 |
| bekende-wetenschappers-po | 40 | 21 | 0 |
| belasting-po | 26 | 3 | 0 |
| beroepen-werk-po | 40 | 24 | 0 |
| betoog-beschouwing-havo-vwo | 25 | 6 | 0 |
| betrouwbaarheid-bronnen-po | 25 | 2 | 0 |
| bevolking-migratie-aardrijkskunde | 33 | 9 | 0 |
| bewegingen-snelheid-natuurkunde | 33 | 5 | 0 |
| binair-datarepresentatie-informatica | 16 | 0 | 0 |
| breuken | 33 | 3 | 0 |
| breuken-po | 40 | 8 | 0 |
| brief-email-lezen-po | 26 | 4 | 0 |
| brugklas-orientatie | 40 | 12 | 0 |
| cel-biologie | 34 | 5 | 0 |
| chemische-reacties-scheikunde | 35 | 11 | 0 |
| cijferend-rekenen | 41 | 6 | 0 |
| cito-strategieen-groep8 | 40 | 26 | 0 |
| comparatives-engels | 35 | 3 | 0 |
| conclusies-trekken-po | 26 | 5 | 0 |
| conditionals-engels | 35 | 7 | 0 |
| continenten-wereld-po | 40 | 8 | 0 |
| coordinatenstelsel | 34 | 4 | 0 |
| crypto-blockchain-geld-beco | 6 | 4 | 0 |
| cse-leesvaardigheid-engels | 40 | 5 | 0 |
| cse-leesvaardigheid-nederlands | 26 | 4 | 0 |
| cse-schrijfvaardigheid-engels | 37 | 3 | 0 |
| cse-schrijfvaardigheid-nederlands | 35 | 3 | 0 |
| cse-strategie-engels-vmbo | 25 | 25 | 0 |
| cse-wiskunde-strategie-vmbo | 40 | 12 | 0 |
| cybersecurity-encryptie-informatica | 20 | 7 | 0 |
| databases-sql-informatica | 20 | 6 | 0 |
| deelsommen-met-rest-po | 26 | 5 | 0 |
| delen-po | 41 | 4 | 0 |
| dichten-poezie-rijmen-po | 40 | 14 | 0 |
| dienstregeling-roosters-po | 25 | 2 | 0 |
| dieren-seizoenen-natuur | 40 | 9 | 0 |
| dierenklassen-po | 40 | 11 | 0 |
| differentialen-havo-vwo | 25 | 8 | 0 |
| differentieren | 34 | 1 | 0 |
| digitale-geletterdheid-po | 40 | 24 | 0 |
| doorstroomtoets-rekenen-g8 | 264 | 28 | 0 |
| doorstroomtoets-studievaardigheden-g8 | 330 | 64 | 0 |
| doorstroomtoets-taal-g8 | 237 | 56 | 0 |
| duits-cse-havo-vwo | 25 | 4 | 0 |
| ecosystemen-biologie | 33 | 15 | 0 |
| ecosystemen-havo-vwo | 25 | 14 | 0 |
| eetcultuur-nederland-po | 25 | 15 | 0 |
| elektriciteit-natuurkunde | 26 | 9 | 0 |
| elektromagnetisme-havo-vwo | 25 | 4 | 0 |
| emoties-sociaal-po | 24 | 4 | 0 |
| energie-hulpbronnen-havo-vwo | 25 | 18 | 0 |
| energiebronnen-po | 40 | 19 | 0 |
| engels-cse-havo-vwo | 25 | 6 | 0 |
| engels-literatuur-havo-vwo | 25 | 6 | 0 |
| engels-schrijven-spreken-havo-vwo | 25 | 2 | 0 |
| europese-unie-po | 18 | 1 | 0 |
| evolutie-havo-vwo | 25 | 18 | 0 |
| evolutie-mens-po | 40 | 21 | 0 |
| examen-biologie-2022-t1 | 5 | 3 | 0 |
| examen-biologie-2022-t2 | 6 | 1 | 0 |
| examen-biologie-2023-t1 | 5 | 0 | 0 |
| examen-biologie-2023-t2 | 6 | 1 | 0 |
| examen-biologie-2024-t1 | 12 | 5 | 0 |
| examen-biologie-2024-t2 | 6 | 2 | 0 |
| examen-biologie-2025-t1 | 6 | 0 | 0 |
| examen-biologie-2025-t2 | 6 | 3 | 0 |
| examen-economie-2022-t1 | 5 | 0 | 0 |
| examen-economie-2022-t2 | 5 | 2 | 0 |
| examen-economie-2023-t1 | 5 | 1 | 0 |
| examen-economie-2023-t2 | 7 | 2 | 0 |
| examen-economie-2024-t1 | 6 | 4 | 0 |
| examen-economie-2024-t2 | 6 | 3 | 0 |
| examen-economie-2025-t1 | 9 | 2 | 0 |
| examen-economie-2025-t2 | 5 | 2 | 0 |
| examen-engels-2022-t1 | 6 | 2 | 0 |
| examen-engels-2022-t2 | 6 | 0 | 0 |
| examen-engels-2023-t1 | 6 | 4 | 0 |
| examen-engels-2023-t2 | 6 | 2 | 0 |
| examen-engels-2024-t1 | 8 | 7 | 0 |
| examen-engels-2024-t2 | 6 | 6 | 0 |
| examen-engels-2025-t1 | 9 | 8 | 0 |
| examen-engels-2025-t2 | 6 | 5 | 0 |
| examen-geschiedenis-2022-t1 | 4 | 1 | 0 |
| examen-geschiedenis-2022-t2 | 6 | 0 | 0 |
| examen-geschiedenis-2023-t1 | 5 | 1 | 0 |
| examen-geschiedenis-2023-t2 | 4 | 2 | 0 |
| examen-geschiedenis-2024-t1 | 6 | 0 | 0 |
| examen-geschiedenis-2024-t2 | 3 | 0 | 0 |
| examen-geschiedenis-2025-t1 | 6 | 5 | 0 |
| examen-geschiedenis-2025-t2 | 6 | 1 | 0 |
| examen-maatschappijkunde-2022-t1 | 6 | 0 | 0 |
| examen-maatschappijkunde-2022-t2 | 6 | 0 | 0 |
| examen-maatschappijkunde-2023-t1 | 5 | 0 | 0 |
| examen-maatschappijkunde-2023-t2 | 6 | 0 | 0 |
| examen-maatschappijkunde-2024-t1 | 5 | 1 | 0 |
| examen-maatschappijkunde-2024-t2 | 5 | 0 | 0 |
| examen-maatschappijkunde-2025-t1 | 6 | 6 | 0 |
| examen-maatschappijkunde-2025-t2 | 6 | 6 | 0 |
| examen-nederlands-2022-t1 | 6 | 1 | 0 |
| examen-nederlands-2022-t2 | 6 | 0 | 0 |
| examen-nederlands-2023-t1 | 6 | 1 | 0 |
| examen-nederlands-2023-t2 | 6 | 1 | 0 |
| examen-nederlands-2024-t1 | 6 | 1 | 0 |
| examen-nederlands-2024-t2 | 6 | 0 | 0 |
| examen-nederlands-2025-t1 | 6 | 0 | 0 |
| examen-nederlands-2025-t2 | 6 | 0 | 0 |
| exponentieel | 34 | 18 | 0 |
| feit-mening-po | 26 | 2 | 0 |
| feiten-details-opzoeken-po | 26 | 3 | 0 |
| filosofie-havo-vwo | 25 | 23 | 0 |
| filosofie-vwo | 25 | 20 | 0 |
| financiele-vorming-po | 40 | 12 | 0 |
| folder-bon-advertentie-po | 25 | 1 | 0 |
| fotosynthese-biologie | 26 | 9 | 0 |
| frans-cse-havo-vwo | 25 | 11 | 0 |
| franse-revolutie-geschiedenis | 26 | 6 | 0 |
| geld-rekenen | 40 | 13 | 0 |
| gemiddelden-statistiek-po | 40 | 13 | 0 |
| genetica-erfelijkheid-biologie | 35 | 18 | 0 |
| genetica-havo-vwo | 25 | 5 | 0 |
| geschiedenis-vroeger-en-nu-g5 | 20 | 2 | 0 |
| getallen-tot-20-po | 26 | 4 | 0 |
| gezonde-voeding-po | 40 | 15 | 0 |
| globalisering-havo-vwo | 25 | 17 | 0 |
| godsdiensten-culturen-po | 25 | 14 | 0 |
| goniometrie | 34 | 9 | 0 |
| goniometrie-havo-vwo | 25 | 2 | 0 |
| gouden-eeuw-geschiedenis | 26 | 9 | 0 |
| grafieken-lezen-po | 40 | 7 | 0 |
| grieks-vwo | 25 | 6 | 0 |
| hardware-besturingssysteem-informatica | 20 | 8 | 0 |
| hart-bloed-ademhaling-havo-vwo | 25 | 14 | 0 |
| immuunsysteem-havo-vwo | 25 | 16 | 0 |
| in-de-klas-2-nieuwkomers | 20 | 0 | 0 |
| in-de-klas-nieuwkomers | 20 | 1 | 0 |
| industriele-revolutie-havo-vwo | 25 | 20 | 0 |
| industriele-revolutie-po | 40 | 25 | 0 |
| informatica-havo-vwo | 25 | 5 | 0 |
| informatiebronnen-po | 25 | 5 | 0 |
| inhoudsopgave-register-po | 25 | 2 | 0 |
| integralen-havo-vwo | 25 | 3 | 0 |
| interpunctie-po | 40 | 6 | 0 |
| kaartlezen-po | 40 | 8 | 0 |
| kalender-rekenen-po | 40 | 1 | 0 |
| kansrekening | 26 | 5 | 0 |
| kansrekening-havo-vwo | 25 | 8 | 0 |
| klassieke-muziek-po | 25 | 12 | 0 |
| kleur-licht-compositie-kunst | 13 | 2 | 0 |
| klimaatverandering-aardrijkskunde | 26 | 12 | 0 |
| klimaten-aardrijkskunde | 40 | 17 | 0 |
| klokkijken | 45 | 9 | 0 |
| kolonie-indonesie | 25 | 7 | 0 |
| kommagetallen-po | 40 | 4 | 0 |
| korte-teksten-snappen-g4 | 20 | 1 | 0 |
| koude-oorlog-modern-po | 24 | 15 | 0 |
| krachten-natuurkunde | 34 | 6 | 0 |
| kritisch-denken-po | 39 | 27 | 0 |
| kunst-havo-vwo | 25 | 7 | 0 |
| kwadraten-wortels | 34 | 3 | 0 |
| kwadratische-vergelijkingen | 32 | 3 | 0 |
| lange-toets-teksten-g8-po | 26 | 3 | 0 |
| latijn-vwo | 25 | 7 | 0 |
| leestekens-hoofdletters-po | 26 | 1 | 0 |
| lettergrepen-klemtoon-po | 26 | 12 | 0 |
| letters-klanken-nieuwkomers | 15 | 1 | 0 |
| lichaam-gezondheid-po | 40 | 7 | 0 |
| licht-geluid-natuurkunde | 26 | 7 | 0 |
| lineaire-formules | 34 | 0 | 0 |
| literatuurgeschiedenis | 33 | 2 | 0 |
| logaritmen | 34 | 2 | 0 |
| logaritmen-exponentieel-havo-vwo | 25 | 0 | 0 |
| maatschappijleer-havo-vwo | 25 | 8 | 0 |
| maatschappijwetenschappen-havo-vwo | 25 | 10 | 0 |
| machten | 35 | 1 | 0 |
| marktvormen-havo-vwo | 25 | 18 | 0 |
| maten-eenheden | 42 | 4 | 0 |
| maten-omtrek-oppervlakte-po | 25 | 2 | 0 |
| mechanica-havo-vwo | 25 | 3 | 0 |
| media-wijsheid-maatschappijleer | 26 | 6 | 0 |
| meetkunde-bouwsels | 40 | 2 | 0 |
| mens-biologie-vmbo | 27 | 4 | 0 |
| mensenrechten-maatschappijleer | 26 | 6 | 0 |
| mensenrechten-vn-havo-vwo | 25 | 13 | 0 |
| meten-gewicht-inhoud-tijd-po | 26 | 4 | 0 |
| middeleeuwen-geschiedenis | 26 | 8 | 0 |
| moederbedrijf-overname-sonac-beco | 4 | 0 | 0 |
| mol-stoichiometrie-havo-vwo | 25 | 7 | 0 |
| naamvallen-duits | 34 | 13 | 0 |
| nederland-water-vo | 25 | 4 | 0 |
| nederlands-cse-havo-vwo | 25 | 6 | 0 |
| nederlandse-kunstenaars-po | 25 | 8 | 0 |
| nederlandse-staat-maatschappijleer | 34 | 8 | 0 |
| negatieve-getallen | 34 | 4 | 0 |
| negatieve-getallen-po | 40 | 0 | 0 |
| netwerken-internet-informatica | 20 | 8 | 0 |
| nieuwsbericht-lezen-po | 26 | 1 | 0 |
| olympische-spelen-po | 24 | 10 | 0 |
| omzetten-breuk-procent-komma-po | 26 | 3 | 0 |
| onderwijs-niveaus-vmbo-havo-vwo | 26 | 6 | 0 |
| onregelmatige-werkwoorden-engels | 28 | 7 | 0 |
| onregelmatige-werkwoorden-v2-engels | 34 | 7 | 0 |
| ontdekkingsreizen-po | 40 | 26 | 0 |
| opdrachtwoorden-nieuwkomers | 20 | 0 | 0 |
| oppervlakte-omtrek-po | 26 | 8 | 0 |
| optica-havo-vwo | 25 | 4 | 0 |
| organische-chemie-havo-vwo | 25 | 6 | 0 |
| oudheid-egyptenaren-grieken-romeinen-po | 40 | 25 | 0 |
| parabolen | 41 | 2 | 0 |
| passe-compose-frans | 34 | 5 | 0 |
| past-tenses-engels | 34 | 10 | 0 |
| periodiek | 35 | 3 | 0 |
| pincode-belasting | 42 | 26 | 0 |
| pincode-buitenland-eu | 42 | 32 | 0 |
| pincode-geld-sparen-lenen | 53 | 21 | 0 |
| pincode-inkomen-welvaart | 42 | 16 | 0 |
| pincode-ondernemen | 54 | 30 | 0 |
| pincode-ontwikkelingslanden | 42 | 24 | 0 |
| pincode-overheid | 42 | 24 | 0 |
| pincode-werk-arbeidsmarkt | 42 | 29 | 0 |
| platentektoniek-aardrijkskunde | 27 | 6 | 0 |
| plattegrond-legenda-po | 25 | 3 | 0 |
| politiek-democratie-po | 40 | 20 | 0 |
| present-tenses-engels | 25 | 2 | 0 |
| procenten | 25 | 3 | 0 |
| procenten-po | 40 | 5 | 0 |
| programmeren-basis-informatica | 20 | 7 | 0 |
| pubertijd-groei-po | 25 | 6 | 0 |
| pythagoras | 25 | 5 | 0 |
| quantum-atoommodel-havo-vwo | 25 | 7 | 0 |
| radioactiviteit-havo-vwo | 25 | 3 | 0 |
| rechtsvormen-overzicht | 15 | 5 | 0 |
| recyclen-afval-po | 40 | 26 | 0 |
| redactiesommen-pad | 40 | 6 | 0 |
| rekenen-met-letters | 25 | 0 | 0 |
| rekenen-tot-100-nieuwkomers | 25 | 10 | 0 |
| rekenen-tot-20-nieuwkomers | 25 | 9 | 0 |
| rekentaal-nieuwkomers | 15 | 0 | 0 |
| rekenverhaaltjes-nieuwkomers | 20 | 0 | 0 |
| rijmen-letters-kleuters-po | 25 | 3 | 0 |
| romeinen-geschiedenis | 26 | 14 | 0 |
| romeinse-cijfers-po | 26 | 10 | 0 |
| ruimtemeetkunde | 32 | 1 | 0 |
| ruimtevaart-po | 24 | 10 | 0 |
| samenstellingen-tussenletters-po | 26 | 1 | 0 |
| samenvatten-hoofdgedachte-po | 40 | 13 | 0 |
| schaal-kaart-rekenen-po | 26 | 20 | 0 |
| schatten-afronden | 40 | 10 | 0 |
| schema-tekst-combi-po | 26 | 2 | 0 |
| schemas-stappenplannen-po | 40 | 16 | 0 |
| schrijfvaardigheid | 25 | 4 | 0 |
| schrijven-teksten-po | 25 | 5 | 0 |
| signaalwoorden-verbanden-po | 25 | 1 | 0 |
| sociale-zekerheid-nl | 25 | 25 | 0 |
| soorten-teksten-po | 28 | 1 | 0 |
| spelling | 27 | 3 | 0 |
| spelling-eerste-woorden-g3 | 20 | 4 | 0 |
| spelling-ei-ij-au-ou | 40 | 33 | 0 |
| spelling-overige-po | 40 | 15 | 0 |
| spreekwoorden-uitdrukkingen-po | 40 | 38 | 0 |
| staatsinrichting-1848 | 25 | 25 | 0 |
| statistiek | 25 | 2 | 0 |
| statistiek-havo-vwo | 25 | 5 | 0 |
| stedelijke-ontwikkeling-havo-vwo | 25 | 14 | 0 |
| stelsels | 25 | 6 | 0 |
| sterren-planeten | 40 | 13 | 0 |
| stijl-literatuur-havo-vwo | 25 | 17 | 0 |
| stoffen-mengsels-scheikunde | 26 | 17 | 0 |
| synoniemen-tegenstellingen-po | 40 | 1 | 0 |
| taal-leren-lezen-g3 | 20 | 2 | 0 |
| taal-woorden-zinnen-g4 | 21 | 0 | 0 |
| tabellen-grafieken | 40 | 7 | 0 |
| tachtigjarige-oorlog-geschiedenis | 26 | 10 | 0 |
| tafels-po | 41 | 4 | 0 |
| tekstanalyse | 25 | 7 | 0 |
| tekstdoel-schrijversdoel-po | 26 | 2 | 0 |
| tekstverbanden-oorzaak-gevolg-po | 26 | 3 | 0 |
| tellen-kleuters-po | 21 | 0 | 0 |
| tijd-snelheid-afstand-po | 25 | 2 | 0 |
| tijdsduur-rekenen-po | 40 | 6 | 0 |
| tijdvakken-geschiedenis | 26 | 3 | 0 |
| tijdvakken-nederland-po | 40 | 16 | 0 |
| toestand-stoffen-po | 40 | 11 | 0 |
| topografie-europa-landen-po | 7 | 0 | 0 |
| topografie-europa-po | 18 | 1 | 0 |
| topografie-nederland | 40 | 23 | 0 |
| topografie-nederland-provincies-po | 6 | 1 | 0 |
| topografie-wereld-werelddelen-po | 7 | 1 | 0 |
| trappen-van-vergelijking-po | 28 | 1 | 0 |
| trillingen-golven-havo-vwo | 25 | 7 | 0 |
| tweede-wereldoorlog-havo-vwo | 25 | 21 | 0 |
| twintigste-eeuw-havo-vwo | 25 | 8 | 0 |
| verandering-groei-havo-vwo | 25 | 4 | 0 |
| vergelijkingen-oplossen | 25 | 1 | 0 |
| verhaal-diepte-lezen-po | 26 | 7 | 0 |
| verhoudingen | 25 | 1 | 0 |
| verhoudingen-po | 40 | 9 | 0 |
| verlichting-revoluties-havo-vwo | 25 | 10 | 0 |
| verwijswoorden-begrijpend-lezen-po | 26 | 4 | 0 |
| verwijswoorden-po | 25 | 1 | 0 |
| vlakke-figuren | 25 | 1 | 0 |
| vlakke-figuren-po | 40 | 5 | 0 |
| volgorde-bewerkingen | 40 | 4 | 0 |
| voortplanting-hormonen-biologie | 28 | 14 | 0 |
| vraag-aanbod-economie | 25 | 13 | 0 |
| vulkanen-po | 21 | 4 | 0 |
| warmte-thermodynamica-havo-vwo | 25 | 10 | 0 |
| water-erfgoed-nederland-po | 40 | 20 | 0 |
| waterkringloop-po | 40 | 19 | 0 |
| weersvoorspelling-po | 40 | 6 | 0 |
| wereld-globalisering-havo-vwo | 25 | 13 | 0 |
| werelddelen-landen-po | 40 | 14 | 0 |
| wereldoorlog1-geschiedenis | 26 | 6 | 0 |
| wereldoorlog2-geschiedenis | 31 | 13 | 0 |
| wereldorientatie-mix-po | 25 | 5 | 0 |
| wereldreligies-po | 18 | 2 | 0 |
| werkwoord-tijden-po | 40 | 15 | 0 |
| werkwoordsspelling-dt | 40 | 14 | 0 |
| werkwoordsvervoeging | 30 | 1 | 0 |
| werkwoordsvervoeging-duits | 26 | 1 | 0 |
| werkwoordsvervoeging-frans | 26 | 2 | 0 |
| winst-rekenen-po | 26 | 7 | 0 |
| wiskunde-d-vwo | 25 | 9 | 0 |
| woordbetekenis-context-po | 26 | 3 | 0 |
| woorden-2-nieuwkomers | 25 | 0 | 0 |
| woorden-3-nieuwkomers | 27 | 0 | 0 |
| woorden-nieuwkomers | 25 | 0 | 0 |
| woordenschat-engels | 26 | 2 | 0 |
| woordenschat-engels-po | 45 | 2 | 0 |
| woordenschat-po | 40 | 7 | 0 |
| woordsoorten-nederlands | 25 | 4 | 0 |
| woordsoorten-po | 40 | 7 | 0 |
| zenuwstelsel-hormonen-havo-vwo | 25 | 6 | 0 |
| zinsontleding | 26 | 2 | 0 |
| zinsontleding-onderwerp-persoonsvorm-po | 28 | 4 | 0 |
| zuren-basen-havo-vwo | 25 | 9 | 0 |

**Totaal: 353 paden · gecontroleerd 10.047 · hersteld 2.822 · verwijderd 0.**

## De 40 belangrijkste herstellingen (was → nu)

Gekozen uit de herstellingen met ernst 3 (fout antwoord, twee goede opties of feitfout), verspreid over alle groepen.

| # | pad · plek | was | nu | reden |
|---|---|---|---|---|
| 1 | kaartlezen-po · stap 5 vraag 22 | Niet bestaand. (kn) | Kn hoort niet bij kilometer. | feitfout: kn (knoop) bestaat wel |
| 2 | stedelijke-ontwikkeling-havo-vwo · stap 1 vraag 2 | Vertrek uit stad | Vertrek uit het hele stedelijke gebied naar het platteland | suburbanisatie (naar voorstad, vaak andere gemeente) is ook 'vertrek uit stad' — tweede verdedigbare optie |
| 3 | begrijpend-lezen-strategie · stap 7 vraag 4 | ~50 vragen in ~75 min ... 7,5 min per tekst | tijdslimiet; reken op 1 à 1,5 min per vraag → zo'n 5-7 min per tekst | verzonnen toetsgegevens die bovendien het antwoord (5-7 min) tegenspraken |
| 4 | woordbetekenis-context-po · stap 2 vraag 7 | Het aanhangsel op de kop van de vis | Plankton waar de vis zelf van leeft | in de gegeven zin ÍS het aanhangsel het lokaas: tweede optie verdedigbaar |
| 5 | mens-biologie-vmbo · stap 2 vraag 1 | Rode bloedcellen zijn te groot voor lymfevaten | Rode bloedcellen kunnen niet door de haarvatwand — ze blijven in de bloedbaan. | feitfout: lymfevaten zijn niet te klein; rode cellen komen niet door de haarvatwand |
| 6 | naamvallen-duits · stap 1 (buiten checks) | die = meervoud (de Männer, de Frauen, de Kinder) | (die Männer, die Frauen, die Kinder) | Duits voorbeeld met Nederlands lidwoord "de" — kind neemt fout over |
| 7 | pincode-inkomen-welvaart · stap 4 vraag 6 | Gemiddelde is voor mannen, mediaan voor vrouwen; 'overheden gebruiken mediaan voor modaal inkomen' | Mediaan wordt door enkele extremen omhoog getrokken; 'CBS gebruikt mediaan voor de gewone Nederlander' | onzin-afleider + feitfout (modaal ≠ mediaan) |
| 8 | basis-grammatica-engels-po · stap 2 vraag 5 | fishes (hint: 'Soms ook fishes') | fishen (hint: Engels maakt geen meervoud met -en) | 'fishes' is ook een correct meervoud (soorten) — tweede verdedigbare optie; hint gaf dat zelf toe |
| 9 | onregelmatige-werkwoorden-v2-engels · stap 2 vraag 1 | Bij hulpwerkwoorden | Na will/can/must | have/has/had zijn óók hulpwerkwoorden -> tweede goede optie |
| 10 | werkwoordsvervoeging-frans · stap 1 vraag 4 | "Spelling fout" / "Beide goed" / "Alleen poëzie" + hints "Wel correct." | "Omdat aimer onregelmatig is" / "Omdat 'aime' vrouwelijk is" / "Alleen in gedichten" + passende hints | "Spelling fout" was óók verdedigbaar (je aime ís fout gespeld); goede optie viel op door lengte |
| 11 | oudheid-egyptenaren-grieken-romeinen-po · stap 4 vraag 14 | Ramses hint "Eerder." / Niet bekend | Ramses-hint gecorrigeerd / Cheops | feitfout: Ramses II regeerde NA Toetanchamon; onzin-afleider |
| 12 | tijdvakken-geschiedenis · stap 12 vraag 2 | Tijdvak 4 | Tijdvak 3 | 1492 valt op jaartal in tijdvak 4 (1000-1500); slimme leerling kan 4 verdedigen → afleider eenduidig fout gemaakt |
| 13 | grieks-vwo · stap 1 (buiten checks) | Kleine letters + interpunctie + accenten = middeleeuwse Byzantijnse uitvinding | Accenten: Hellenistisch (Aristophanes van Byzantium ~200 v.Chr.); kleine letters + spaties = Byzantijns | accenten zijn niet middeleeuws |
| 14 | media-wijsheid-maatschappijleer · stap 5 (buiten checks) | Halt (als strafbaar) … → politie | Politie (als het strafbaar is…): 0900-8844 | Halt is geen meldpunt/hulplijn |
| 15 | energiebronnen-po · stap 3 (buiten checks) | Eén draai kan 16.000 huishoudens van stroom voorzien | Eén zo'n molen kan duizenden huishoudens ... | feitfout: één omwenteling voorziet geen 16.000 huishoudens |
| 16 | warmte-thermodynamica-havo-vwo · stap 2 vraag 3 | "Metaal heeft veel hogere warmtegeleiding + lagere soortelijke warmte" / "Lagere c metaal = ..." | "Metaal geleidt warmte veel beter dan hout" / zin geschrapt, basis "Goede warmtegeleiding." | Feitfout: per volume heeft metaal juist méér warmtecapaciteit dan hout; het koude gevoel komt door geleiding |
| 17 | elektriciteit-natuurkunde · stap 5 vraag 2 | Vergulden met goud | De draad verwarmen (hint: warmer metaal heeft juist méér weerstand) | een goudlaagje verlaagt de weerstand wél iets (parallelle geleider) → tweede verdedigbare optie |
| 18 | volgorde-bewerkingen · stap 7 vraag 5 (sterker dan +) | ( (haakje); 'Optie A is correct' | = (is-gelijkteken); 'Hier staat alleen × tussen de keuzes' | haakjes gaan wél vóór + (Q7.15 noemt haakjes zelfs sterkst) → tweede verdedigbare optie; 'Optie A' klopt niet na husselen |
| 19 | vlakke-figuren-po · stap 5 vraag 21 | cirkel heeft hoeveel zijden? 0 (één gebogen lijn) | cirkel heeft hoeveel hoeken? 0 | 'zijden' van cirkel betwist (0 of 1 verdedigbaar) en goede optie had toelichting |
| 20 | tabellen-grafieken · stap 7 vraag 13 | Verticale waarden (onder elkaar) / Horizontale data / Tekst ('Soms.') | Waarden onder elkaar / Waarden naast elkaar / Alleen de titel | goede optie herkenbaar (haakjes); 'Tekst' ook verdedigbaar (hint zei 'Soms') |
| 21 | schaal-kaart-rekenen-po · stap 3 vraag 2, 3.3, 4.2, 4.3 | bv. 'Te klein.' bij 500 cm, 'Te groot' bij 0,5 cm, 'Te klein — reken nog eens' bij 120 m, 'Te groot.' bij 6 m | richting (te groot/te klein) klopt nu met de afleider | hint zei 'te klein' bij een te groot antwoord en omgekeerd — feitelijk fout |
| 22 | doorstroomtoets-rekenen-g8 · stap 1 vraag 24 (0,7 − 0,3) | 100× te groot. | 10× te groot — let op de komma. | 4 is 10× 0,4, niet 100×; hint rekende fout |
| 23 | doorstroomtoets-rekenen-g8 · stap 4 vraag 55 (vliegtuig 14:20) | 11:50: 'Twee stappen terug…'; 12:35: 'alleen het inchecken'; 10:45: 'alleen de reistijd eraf' | 11:50: 'alleen het inchecken'; 12:35: 'Twee stappen terug…'; 10:45: 'Te vroeg — tel de twee stappen precies te… | hints verschoven: 12:35 is niet 'alleen inchecken' en 10:45 niet 'alleen reistijd eraf' (dat zou 13:35 zijn) — hints spraken de rekensom teg… |
| 24 | doorstroomtoets-studievaardigheden-g8 · stap 1 (buiten checks) | Studievaardigheden bij de Doorstroomtoets test of je informatie kunt opzoeken | Studievaardigheden = informatie opzoeken en gebruiken; bij de Doorstroomtoets geen apart onderdeel meer, nodig… | feitfout: studievaardigheden is geen apart toetsonderdeel meer |
| 25 | doorstroomtoets-studievaardigheden-g8 · stap 5 vraag 36 | Hoe ver is het strand minstens? (D3→D5, vakken 2 km) | Hoe ver ongeveer, gemeten van midden tot midden van de vakken? | 'Minstens' maakt 2 km het juiste antwoord (camping onderrand D3, strand bovenrand D5 = 1 vak ertussen); gemarkeerd was 4 km |
| 26 | mol-stoichiometrie-havo-vwo · stap 4 vraag 5 | … (− pool in cel) / Vangt elektronen op | De plek waar oxidatie plaatsvindt / De plek waar reductie plaatsvindt | goede optie herkenbaar; "vangt elektronen op" was ook verdedigbaar voor de anode-elektrode |
| 27 | werkwoordsspelling-dt · stap 5 (buiten checks) | reizen-rij 'reis... wacht, eindigt op z? Nee, op s / reisde ❌ MOEILIJK' + 'verzen'-zin | rij 'reizen / reis (z in reizen) / reisde/reisden' + heldere uitleg waarom reisde | verwarrende rij suggereerde dat reisde fout was; 'verzen' is geen werkwoord |
| 28 | interpunctie-po · stap 6 vraag 11 | Wat heet jij? | Hoe heet jij? | 'Wat heet jij?' is geen correct Nederlands, dus tweede verdedigbare 'foute zin' |
| 29 | woordenschat-po · stap 4 vraag 2 | fles leeg… bekertje; optie 'gek' | drinken op… bekertje; optie 'een beetje' | 'gek' ≈ 'belachelijk' ook verdedigbaar; fles/bekertje tegenstrijdig |
| 30 | trappen-van-vergelijking-po · stap 3 vraag 7 | De Keizersgracht is langer dan de Prinsengracht. / Dat is geen trap van vergelijking. | Deze straat is langer dan die straat. / Hier staat de gewone vorm 'lang' — is iets het meest van allemaal? | feitfout (Prinsengracht is de langste gracht); hint onjuist: 'even lang' bevat wel de stellende trap |
| 31 | doorstroomtoets-taal-g8 · stap 1 vraag 8 | 'Tegenovergesteld' bij saai/vrolijk; 'Uiterst versterkt = niet positief' | zinnige denkprikkels; 'uiterst versterkt alleen' | hints onjuist (saai is geen tegendeel van precair); feitfout: 'uiterst' is niet per se negatief |
| 32 | literatuurgeschiedenis · stap 11 (buiten checks) | Literaire thriller: Tessa de Loo, Saskia Noort, Renate Dorrestein | Esther Verhoef, Saskia Noort, Renate Dorrestein | Tessa de Loo schrijft geen thrillers (feitfout) |
| 33 | algoritmen-programmeren-po · stap 4 vraag 20 | Websites opmaken / Niet relevant; hint 'Apps bouwen' = 'Wel deels.' | De structuur van websites / Rekenen; hint apps = Swift/Kotlin | hint maakte afleider 'Apps bouwen' deels goed (twee verdedigbare opties); HTML = structuur, CSS = opmaak |
| 34 | algebra-vergelijkingen-havo-vwo · stap 4 vraag 3 | Wat? met optie 'x=3, y=2'; hint 'Dit punt voldoet wel' | Hoeveel oplossingen heeft dit stelsel? met opties 'Precies één: x=2, y=4' / 'Precies één: x=2, y=3' | x=3, y=2 voldoet aan beide vergelijkingen, dus ook die optie was verdedigbaar. De hint bij x=2, y=4 beweerde ten onrechte dat dat punt voldo… |
| 35 | negatieve-getallen · stap 10 vraag 11 | 6 m / 24 m | +6 m / +24 m | 'Nieuwe diepte?' — '6 m' (6 m diep) was verdedigbaar naast −6 m |
| 36 | ruimtemeetkunde · stap 21 (buiten checks) | baby zo licht ... bij dubbele lengte word je 8× zo zwaar | Zo passen er in een kubus met een twee keer zo lange zijde 8 keer zoveel blokjes. | Feitfout: mensen groeien niet gelijkvormig, de 8×-claim klopt niet voor baby/volwassene |
| 37 | goniometrie · stap 11 vraag 22 | Naast aanliggend / Onvolledig. | Tegenover hoek α / Tegenover α ligt de tegenoverstaande zijde, niet de hypotenusa. | 'Naast aanliggend' is ook waar (hypotenusa grenst aan aanliggende zijde) — tweede verdedigbare optie |
| 38 | continenten-wereld-po · stap 1 vraag 3 | Afrika lijkt op de kaart groot | Afrika lijkt op veel kaarten juist kleiner dan het is | feitfout (Mercator verkleint Afrika) |
| 39 | stedelijke-ontwikkeling-havo-vwo · stap 2 vraag 5 | Grootste krottenwijk Azië (~1 mln inwoners) | Een van de grootste krottenwijken van Azië | 'grootste' betwist (Orangi Town Karachi) en ~1 mln botst met uitlegPad (1-2 mln) |
| 40 | begrijpend-lezen-strategie · stap 7 vraag 7 | Letterlijk lezen / Lange-zin-overslaan; hint 'Scannen werkt voor overzicht'; uitleg 'algemene vragen = scannen… | Alleen de eerste en laatste woorden lezen / De lange zin gewoon overslaan; hints herschreven; 'skimmen + globa… | 'letterlijk lezen' verdedigbaar, plaksel-afleider, en uitleg/hint verwisselden scannen en skimmen (feitfout t.o.v. stap 5) |

## Paden waar het goede antwoord structureel op index 0 staat

Dit is gemeld en niet veranderd, zoals de opdracht vraagt. In het leerpad en in de toets-flows husselt `shuffleOpties` de opties, dus een leerling ziet dit niet. Het speelt alleen waar opties ongeschud worden getoond: printbladen of plekken die `shuffleOptions` niet gebruiken. Examenvragen staan in de officiële volgorde.

Paden met ≥ 5 checks waarvan ≥ 75% het goede antwoord op index 0 heeft: **296** van 353 (helemaal 100%: 251).

aardobservatie-risico-havo-vwo (25/25) · ai-machine-learning-informatica (20/20) · alfabet-woordenboek-po (21/25) · algebra-vergelijkingen-havo-vwo (24/25) · algoritmen-programmeren-po (40/40) · algoritmen-pseudocode-informatica (20/20) · alinea-functies-tussenkopjes-po (26/26) · argumentatieleer (32/34) · atmosfeer-klimaat-havo-vwo (25/25) · atoombouw-scheikunde (33/35) · balans-beco (34/35) · basis-grammatica-engels-po (40/40) · bbp-conjunctuur-economie (41/42) · bedrijfseconomie-havo-vwo (25/25) · beeldhouwkunst-kunst (12/12) · begrijpend-lezen-strategie (33/40) · begrijpend-lezen-teksten-po (40/40) · bekende-boeken-literatuur-po (40/40) · bekende-nederlanders-po (40/40) · bekende-wetenschappers-po (40/40) · belasting-po (26/26) · beroepen-werk-po (40/40) · betoog-beschouwing-havo-vwo (25/25) · betrouwbaarheid-bronnen-po (25/25) · bevolking-migratie-aardrijkskunde (32/33) · bewegingen-snelheid-natuurkunde (32/33) · binair-datarepresentatie-informatica (16/16) · breuken (28/33) · breuken-po (40/40) · brief-email-lezen-po (26/26) · brugklas-orientatie (40/40) · cel-biologie (32/34) · chemische-reacties-scheikunde (33/35) · cijferend-rekenen (41/41) · cito-strategieen-groep8 (40/40) · comparatives-engels (33/35) · conclusies-trekken-po (26/26) · conditionals-engels (33/35) · continenten-wereld-po (40/40) · coordinatenstelsel (32/34) · crypto-blockchain-geld-beco (6/6) · cse-leesvaardigheid-engels (37/40) · cse-leesvaardigheid-nederlands (26/26) · cse-schrijfvaardigheid-engels (35/37) · cse-schrijfvaardigheid-nederlands (33/35) · cse-strategie-engels-vmbo (25/25) · cse-wiskunde-strategie-vmbo (37/40) · cybersecurity-encryptie-informatica (20/20) · databases-sql-informatica (20/20) · deelsommen-met-rest-po (26/26) · delen-po (41/41) · dichten-poezie-rijmen-po (40/40) · dienstregeling-roosters-po (25/25) · dieren-seizoenen-natuur (40/40) · dierenklassen-po (40/40) · differentialen-havo-vwo (25/25) · differentieren (32/34) · digitale-geletterdheid-po (40/40) · doorstroomtoets-rekenen-g8 (250/264) · doorstroomtoets-studievaardigheden-g8 (320/330) · doorstroomtoets-taal-g8 (231/237) · duits-cse-havo-vwo (25/25) · ecosystemen-biologie (31/33) · ecosystemen-havo-vwo (25/25) · eetcultuur-nederland-po (25/25) · elektriciteit-natuurkunde (26/26) · elektromagnetisme-havo-vwo (25/25) · emoties-sociaal-po (24/24) · energie-hulpbronnen-havo-vwo (25/25) · energiebronnen-po (40/40) · engels-cse-havo-vwo (25/25) · engels-literatuur-havo-vwo (25/25) · engels-schrijven-spreken-havo-vwo (25/25) · evolutie-havo-vwo (25/25) · evolutie-mens-po (40/40) · exponentieel (32/34) · feit-mening-po (26/26) · feiten-details-opzoeken-po (26/26) · filosofie-havo-vwo (25/25) · filosofie-vwo (25/25) · financiele-vorming-po (40/40) · folder-bon-advertentie-po (25/25) · fotosynthese-biologie (26/26) · frans-cse-havo-vwo (25/25) · franse-revolutie-geschiedenis (26/26) · geld-rekenen (39/40) · gemiddelden-statistiek-po (40/40) · genetica-erfelijkheid-biologie (33/35) · genetica-havo-vwo (25/25) · geschiedenis-vroeger-en-nu-g5 (20/20) · getallen-tot-20-po (26/26) · gezonde-voeding-po (40/40) · globalisering-havo-vwo (25/25) · godsdiensten-culturen-po (25/25) · goniometrie (32/34) · goniometrie-havo-vwo (25/25) · gouden-eeuw-geschiedenis (26/26) · grafieken-lezen-po (40/40) · grieks-vwo (25/25) · hardware-besturingssysteem-informatica (20/20) · hart-bloed-ademhaling-havo-vwo (25/25) · immuunsysteem-havo-vwo (25/25) · in-de-klas-2-nieuwkomers (20/20) · in-de-klas-nieuwkomers (20/20) · industriele-revolutie-havo-vwo (25/25) · industriele-revolutie-po (40/40) · informatica-havo-vwo (25/25) · informatiebronnen-po (25/25) · inhoudsopgave-register-po (25/25) · integralen-havo-vwo (25/25) · interpunctie-po (40/40) · kaartlezen-po (40/40) · kalender-rekenen-po (40/40) · kansrekening (26/26) · kansrekening-havo-vwo (25/25) · klassieke-muziek-po (25/25) · kleur-licht-compositie-kunst (13/13) · klimaatverandering-aardrijkskunde (26/26) · klimaten-aardrijkskunde (40/40) · klokkijken (45/45) · kolonie-indonesie (25/25) · kommagetallen-po (40/40) · korte-teksten-snappen-g4 (20/20) · koude-oorlog-modern-po (24/24) · krachten-natuurkunde (32/34) · kritisch-denken-po (39/39) · kunst-havo-vwo (25/25) · kwadraten-wortels (32/34) · kwadratische-vergelijkingen (30/32) · lange-toets-teksten-g8-po (26/26) · latijn-vwo (25/25) · leestekens-hoofdletters-po (26/26) · lettergrepen-klemtoon-po (26/26) · letters-klanken-nieuwkomers (15/15) · lichaam-gezondheid-po (40/40) · licht-geluid-natuurkunde (26/26) · lineaire-formules (32/34) · literatuurgeschiedenis (31/33) · logaritmen (31/34) · logaritmen-exponentieel-havo-vwo (25/25) · maatschappijleer-havo-vwo (25/25) · maatschappijwetenschappen-havo-vwo (25/25) · machten (33/35) · marktvormen-havo-vwo (25/25) · maten-eenheden (42/42) · maten-omtrek-oppervlakte-po (25/25) · mechanica-havo-vwo (25/25) · media-wijsheid-maatschappijleer (26/26) · meetkunde-bouwsels (40/40) · mens-biologie-vmbo (27/27) · mensenrechten-maatschappijleer (26/26) · mensenrechten-vn-havo-vwo (25/25) · meten-gewicht-inhoud-tijd-po (26/26) · middeleeuwen-geschiedenis (26/26) · mol-stoichiometrie-havo-vwo (25/25) · naamvallen-duits (32/34) · nederland-water-vo (25/25) · nederlands-cse-havo-vwo (25/25) · nederlandse-kunstenaars-po (25/25) · nederlandse-staat-maatschappijleer (32/34) · negatieve-getallen (32/34) · negatieve-getallen-po (40/40) · netwerken-internet-informatica (20/20) · nieuwsbericht-lezen-po (26/26) · olympische-spelen-po (24/24) · omzetten-breuk-procent-komma-po (26/26) · onderwijs-niveaus-vmbo-havo-vwo (26/26) · onregelmatige-werkwoorden-engels (28/28) · onregelmatige-werkwoorden-v2-engels (32/34) · ontdekkingsreizen-po (40/40) · opdrachtwoorden-nieuwkomers (20/20) · optica-havo-vwo (25/25) · organische-chemie-havo-vwo (25/25) · oudheid-egyptenaren-grieken-romeinen-po (40/40) · parabolen (41/41) · passe-compose-frans (32/34) · past-tenses-engels (32/34) · periodiek (33/35) · pincode-belasting (42/42) · pincode-buitenland-eu (42/42) · pincode-geld-sparen-lenen (53/53) · pincode-inkomen-welvaart (42/42) · pincode-ondernemen (54/54) · pincode-ontwikkelingslanden (42/42) · pincode-overheid (42/42) · pincode-werk-arbeidsmarkt (42/42) · platentektoniek-aardrijkskunde (27/27) · plattegrond-legenda-po (25/25) · politiek-democratie-po (40/40) · present-tenses-engels (25/25) · procenten (25/25) · procenten-po (40/40) · programmeren-basis-informatica (20/20) · pubertijd-groei-po (25/25) · pythagoras (25/25) · quantum-atoommodel-havo-vwo (25/25) · radioactiviteit-havo-vwo (25/25) · rechtsvormen-overzicht (15/15) · recyclen-afval-po (40/40) · redactiesommen-pad (40/40) · rekenen-met-letters (25/25) · rekentaal-nieuwkomers (15/15) · rekenverhaaltjes-nieuwkomers (20/20) · rijmen-letters-kleuters-po (25/25) · romeinen-geschiedenis (26/26) · romeinse-cijfers-po (26/26) · ruimtemeetkunde (32/32) · ruimtevaart-po (24/24) · samenstellingen-tussenletters-po (26/26) · samenvatten-hoofdgedachte-po (40/40) · schaal-kaart-rekenen-po (26/26) · schatten-afronden (40/40) · schema-tekst-combi-po (26/26) · schemas-stappenplannen-po (40/40) · schrijfvaardigheid (25/25) · schrijven-teksten-po (25/25) · signaalwoorden-verbanden-po (25/25) · sociale-zekerheid-nl (25/25) · soorten-teksten-po (28/28) · spelling (27/27) · spelling-eerste-woorden-g3 (20/20) · spelling-ei-ij-au-ou (40/40) · spelling-overige-po (40/40) · spreekwoorden-uitdrukkingen-po (40/40) · staatsinrichting-1848 (25/25) · statistiek (25/25) · statistiek-havo-vwo (25/25) · stedelijke-ontwikkeling-havo-vwo (25/25) · stelsels (23/25) · sterren-planeten (40/40) · stijl-literatuur-havo-vwo (25/25) · stoffen-mengsels-scheikunde (26/26) · synoniemen-tegenstellingen-po (40/40) · taal-leren-lezen-g3 (20/20) · taal-woorden-zinnen-g4 (21/21) · tabellen-grafieken (40/40) · tachtigjarige-oorlog-geschiedenis (26/26) · tafels-po (41/41) · tekstanalyse (24/25) · tekstdoel-schrijversdoel-po (26/26) · tekstverbanden-oorzaak-gevolg-po (26/26) · tellen-kleuters-po (21/21) · tijd-snelheid-afstand-po (25/25) · tijdsduur-rekenen-po (40/40) · tijdvakken-geschiedenis (26/26) · tijdvakken-nederland-po (40/40) · toestand-stoffen-po (40/40) · topografie-europa-landen-po (7/7) · topografie-nederland (40/40) · topografie-nederland-provincies-po (6/6) · topografie-wereld-werelddelen-po (7/7) · trappen-van-vergelijking-po (28/28) · trillingen-golven-havo-vwo (25/25) · tweede-wereldoorlog-havo-vwo (25/25) · twintigste-eeuw-havo-vwo (25/25) · verandering-groei-havo-vwo (25/25) · vergelijkingen-oplossen (25/25) · verhaal-diepte-lezen-po (26/26) · verhoudingen (25/25) · verhoudingen-po (40/40) · verlichting-revoluties-havo-vwo (25/25) · verwijswoorden-begrijpend-lezen-po (26/26) · verwijswoorden-po (25/25) · vlakke-figuren (25/25) · vlakke-figuren-po (40/40) · volgorde-bewerkingen (40/40) · voortplanting-hormonen-biologie (28/28) · vraag-aanbod-economie (25/25) · vulkanen-po (21/21) · warmte-thermodynamica-havo-vwo (25/25) · water-erfgoed-nederland-po (40/40) · waterkringloop-po (40/40) · weersvoorspelling-po (40/40) · wereld-globalisering-havo-vwo (25/25) · werelddelen-landen-po (40/40) · wereldoorlog1-geschiedenis (26/26) · wereldoorlog2-geschiedenis (31/31) · wereldorientatie-mix-po (24/25) · werkwoord-tijden-po (40/40) · werkwoordsspelling-dt (40/40) · werkwoordsvervoeging (30/30) · werkwoordsvervoeging-duits (26/26) · werkwoordsvervoeging-frans (26/26) · winst-rekenen-po (26/26) · wiskunde-d-vwo (25/25) · woordbetekenis-context-po (26/26) · woorden-3-nieuwkomers (27/27) · woordenschat-engels (26/26) · woordenschat-engels-po (45/45) · woordenschat-po (40/40) · woordsoorten-nederlands (25/25) · woordsoorten-po (40/40) · zenuwstelsel-hormonen-havo-vwo (25/25) · zinsontleding (26/26) · zinsontleding-onderwerp-persoonsvorm-po (28/28) · zuren-basen-havo-vwo (25/25)

## Twijfel voor Mark

### Eerst bekijken
1. **Een derde ronde nodig voor ≤ 2%.** De eindmeting komt op 11%, waarvan 7,5 procentpunt weggevers is: een hint die het antwoord noemt, of een goede optie die de enige omschrijving is of veel langer. Voorstel: een gerichte ronde die alleen op deze twee soorten let. Een script markeert eerst kandidaten (goede optie ≥ 1,6× de gemiddelde lengte van de afleiders, of als enige met haakjes, cijfers of "—"), daarna kijken nakijkers die met de hand na. Dat is sneller en goedkoper dan nog een volledige ronde.
2. **examen-geschiedenis-2022-t1, stap 2 vraag 1 (examenvraag 17):** het antwoord "terreur + strafkampen" past niet bij de Hitlerjugend-bron, die juist indoctrinatie laat zien. Waarschijnlijk is de vraag of de bron verkeerd overgenomen. Leg dit naast de officiële PDF; klopt het niet, dan is verwijderen het beste.
3. **examen-geschiedenis-2023-t1, stap 4 vraag 1:** de vraagtekst zegt dat de Sovjet-Unie onder Reagan viel. Dat gebeurde in 1991, onder Bush sr. De vraagtekst mocht niet worden aangepast.
4. **bronTekst die het antwoord weggeeft:**
   - examen-economie-2025-t1, stap 6 vraag 1: "zakgeld (overdrachtsinkomen)";
   - maatschappijkunde 2022-t1, 2022-t2, 2023-t2 en 2025-t1, bijvoorbeeld "(= hoofdstraf)". Deze teksten lijken geparafraseerd of aangevuld. Controleer ze tegen de echte examens.
5. **Doorstroomtoets-claims in titels en metadata:** paden als algoritmen, beroepen, digitale geletterdheid, eetcultuur, emoties, godsdiensten, kritisch denken en wereldoriëntatie-mix hebben "Doorstroomtoets" in de titel. Dat wekt de indruk dat die vakken in de toets zitten, terwijl de toets lezen, taalverzorging en rekenen is. Dit is metadata en valt buiten de opdracht.
6. **Gedeelde nieuwkomers-helpers** (`nieuwkomersSteun.js`, `nieuwkomersFoutUitleg.js`): hints in woorden-3-nieuwkomers en opdrachtwoorden-nieuwkomers noemen het antwoord bijna letterlijk. Ze zijn de sleutel voor de vertalingen, dus hint en vertaling moeten samen worden aangepast. Daarnaast wijzen de voorvoegsels "één te weinig/te veel" indirect het antwoord aan.
7. **tabellen-grafieken, stap 2 en 3:** de vragen gaan uit van een SVG-grafiek of tabel in de stap, maar staan niet op `disabled: true`. Waar ze los worden getoond, ontbreekt de data.
8. **Verouderde gegevens:**
   - "huidige Secretaris-Generaal" (Guterres), loopt af per 1-1-2027;
   - Gaza-cijfers;
   - grootste stad (de VN-methode van 2025 noemt Jakarta);
   - wisselkoers €1 ≈ $1,08;
   - Shell als Nederlandse multinational;
   - AOW-leeftijd "naar 68".

### Alle twijfelgevallen per pad (201)

Deze zijn niet gewijzigd. Ze komen uit de rapporten van de nakijkers.

- **(algemeen)**
  - andere examen-paden: Patroon 'Optie X / → X' (optieletter) in uitlegPad/explanation zat in vrijwel alle examen-engels-paden; waarschijnlijk ook in andere examen-paden. Breed grep'en op '[Oo]ptie [A-D]\b', '→ [A-D]\.' en 'nogSimpeler: "A."' loont.
- **(andere groep)**
  - staatsinrichting1848.js, socialeZekerhei…: Bevatten hetzelfde patroon 'basis: "... — A."' (optieletter in uitlegPad, klopt niet na husselen). Niet mijn paden.
- **aardobservatie-risico-havo-vwo**
  - stap 4 vraag 2 vs stap 5 vraag 3: Begrip 'mitigatie' wordt in vraag 4.2 gebruikt als rampenpreventie (dijken bouwen = mitigatie) en in 5.3 als klimaatmitigatie (CO₂-reductie; dijken = adaptatie). Beide gangbaar in eigen context, maar binnen één pad verwarrend. Niet gewijzigd.
- **ai-machine-learning-informatica**
  - stap 1 vraag 1: 'Alle AI die nu bestaat is smalle AI — goed in één taak' is voor grote taalmodellen discutabel. Niet gewijzigd.
- **algemeen (titels)**
  - titel/description van 9 PO-paden: Titels als 'Algoritmen + programmeren (Doorstroomtoets groep 6-8)' suggereren dat deze vakken in de Doorstroomtoets zitten (die toetst alleen lezen, taalverzorging, rekenen). Metadata niet aangeraakt — beslissing voor coördinator.
- **alle paden**
  - diverse wrongHints: Veel hints zijn kaal ('Niet.', 'Wel.') — geen fout, maar weinig denkprikkel. Alle 'Niet relevant'/'Niet bestaand'-afleiders in mijn 8 paden zijn vervangen; enkele losse 'Niets'/'Geen'/'Niet bekend'-afleiders zijn bewust blijven staan omdat ze als antwoord nog …
- **argumentatieleer**
  - stap 3 vraag 1: Afleider 'Nee, het is een drogreden' kan voor een slimme leerling verdedigbaar lijken (overhaaste generalisatie), maar de stap leert expliciet 'een voorbeeld is geen argument'. Niet gewijzigd.
- **atmosfeer-klimaat-havo-vwo**
  - stap 4 explanation + Q4.1 theorie: 'Zonder Golfstroom zou NL klimaat van Newfoundland hebben / Df' is wetenschappelijk omstreden (Seager 2002); niet gewijzigd.
- **atoombouw-scheikunde**
  - stap 10 vraag 5 uitlegPad: "Na Rutherford = planeet-model (Bohr)": het planeetmodel is eigenlijk van Rutherford zelf, Bohr voegde schillen toe (1913). Kleine nuance, niet aangepast.
- **bedrijfseconomie-havo-vwo**
  - stap 1 vraag 2: Solvabiliteit kan in NL-lesmethodes ook als EV/VV of TV/VV gedefinieerd worden; afleider "VV / EV" is geen gangbare maat, dus antwoord eenduidig — wel opletten bij methodeverschil.
- **begrijpend-lezen-strategie**
  - stap 1 vraag 2 + stap 5/7 (5-7 min per t…: Claims over het format ('3-5 lange teksten', '~5-7 min per tekst') verschillen per Doorstroomtoets-aanbieder; niet geverifieerd. Afleiders zijn duidelijk fout, dus niet gewijzigd.
- **bekende-boeken-literatuur-po**
  - stap 1 (buiten checks): Jip en Janneke '6 delen (1953-1960)', 'Paul Biegel – 12 Sloeg de Klok', 'Carry Slee eerst zelf uitgegeven', 'Mirjam Mous – Vigil 9', 'Sammie + de Mannen (Dirk Nielandt)', Kinderboekenweekgeschenk 'bij €15' (recent €17,50?) — niet zeker, niet gewijzigd.
  - stap 4 vraag 9: uitlegPad zegt 'kinderen vaak geen boetes meer', stap-uitleg noemt boete €0,15-0,30/dag — kleine inconsistentie, niet gewijzigd.
- **bekende-nederlanders-po**
  - stap 3 (buiten checks) + stap 4 vraag 8 …: 'Kramer en Wüst beide vlaggendrager', 'Slat 2022 NL-onderscheiding', '330.000 kg plastic' niet geverifieerd. Stap 3 noemt Dick Schoof premier 'vanaf juli 2024' — klopt als historisch feit, maar check of de app een actuele premier claimt.
- **bekende-wetenschappers-po**
  - stap 5 vraag 13: "Wie ontwierp de gloeilamp? Thomas Edison" — schoolbeeld; uitvinding is betwist (Swan e.a.). Geen andere optie verdedigbaar, dus niet gewijzigd.
- **belasting-po**
  - stap 3 + vraag 3.2: '9% op eten en drinken' klopt niet voor alcoholische drank (21%); voor kinderen acceptabel vereenvoudigd, niet gewijzigd.
- **beroepen-werk-po**
  - stap 4 + stap 5 vraag 9 uitlegPad: Claim 'kranten/folders bezorgen pas vanaf 15'. Volgens mij mogen 13-14-jarigen al kranten/folders bezorgen (licht niet-industrieel werk). Niet zeker; optie zelf neutraal gemaakt ('Vanaf 13 jaar'), uitleg niet gewijzigd.
  - stap 1 explanation: 'Pensioenleeftijd stijgt naar 68 in komende jaren' — AOW-leeftijd stijgt in 2028 naar 67 jaar en 3 maanden; '68' is niet vastgesteld.
- **betoog-beschouwing-havo-vwo**
  - stap 3 vraag 5: 'WHO-onderzoek toont 30% minder hart- en vaatziekten' is een specifiek cijfer dat ik niet heb geverifieerd; als voorbeeld van een feitargument werkt het wel.
- **bevolking-migratie-aardrijkskunde**
  - stap 5 (stap-uitleg): 'aanmeldcentrum (Ter Apel, Zevenaar)': Zevenaar als aanmeldcentrum niet zeker; Ter Apel klopt. Niet gewijzigd.
- **brugklas-orientatie**
  - stap 4 en 5 (buiten checks): Statistieken '1 op 3 brugklassers voelt zich overweldigd' en '1 op 5 jongeren (15-25 jr) heeft mentale problemen' zonder bron — niet gewijzigd.
  - stap 6 vraag 13 (interleaving): Begrip 'interleaving' wordt nergens in de stappen uitgelegd; antwoord klopt wel.
  - algemeen: Veel wrongHints zijn zeer kort ('Niet.', 'Niet relevant.') — geen fout, wel weinig didactische waarde.
- **cel-biologie**
  - stap 6 (buiten checks): 'De zuurstof die wij inademen is grotendeels door chloroplasten gemaakt' — een groot deel komt van (cyano)bacteriën in zee; niet gewijzigd.
- **cito-strategieen-groep8**
  - stap 3 + stap 7 vraag 7 (uitlegPad): Claims 'evenveel punten per vraag', '~150 min totaal', '100+ vragen', 'terug naar overgeslagen vragen' gelden niet voor elke (adaptieve/digitale) Doorstroomtoets; verschilt per aanbieder. Niet gewijzigd.
  - stap 1 + stap 2 (buiten checks): 'soms ook wereldoriëntatie' / 'Extra bij sommige toetsen: wereldoriëntatie' — niet zeker of een aanbieder dit nog afneemt bij de Doorstroomtoets; 'toetsadvies komt medio maart' niet geverifieerd.
- **conclusies-trekken-po**
  - stap 4 vraag 7: Goede optie 'Op het moment van tellen waren er drie mussen' gaat strikt iets verder dan 'noteerden drie mussen' (er kunnen er ongezien meer zijn); afleiders zijn duidelijk fout, daarom niet gewijzigd.
- **continenten-wereld-po / werelddelen-landen-po**
  - stap 2 explanation (werelddelen) / Q4.24: 'Israël (Jeruzalem)' als hoofdstad is internationaal omstreden; Q4.24 'grootste Europese stad = Moskou' klopt alleen zolang Istanboel niet als Europese stad optie is. Niet gewijzigd.
- **cse-schrijfvaardigheid-nederlands**
  - stap 2 vraag 2: 'Volgens onderzoek van TU Delft' = Autoriteit (goed antwoord), terwijl de stap-uitleg 'Een studie van de Universiteit Utrecht laat zien...' als Feitelijk argument noemt. Feitelijk staat niet bij de opties, dus de vraag is eenduidig, maar uitleg en vraag schure…
- **cse-strategie-engels-vmbo**
  - stap 4 (buiten checks): 'gemiddeld VMBO-GT-Engels-cijfer = 6,3' en 'strategie scheelt ~10-15%' zijn onbevestigde cijfers.
  - stap 2 vraag 3 uitlegPad: 'Vergelijk OBIA in NL' — onbekend/niet-standaard acroniem voor tekstdoelen.
- **cse-wiskunde-strategie-vmbo**
  - stap 5 + vraag 5.1 / 6.9: 'CSE Wiskunde VMBO duurt 120 min met 30-40 vragen' geldt voor GL/TL; BB/KB (digitaal) kunnen een andere duur hebben. Niet gewijzigd.
  - stap 4 'Op welk niveau?': Indeling welke onderwerpen bij BB/KB/GT horen is grof en mogelijk onjuist (o.a. Pythagoras bij BB, goniometrie alleen GT). Niet gewijzigd.
- **deelsommen-met-rest-po**
  - stap 2-4 diverse: Hints als 'De 5e doos zou niet vol zijn' / 'In 7 dozen passen maar 42 boeken' impliceren sterk het antwoord (n−1 resp. n+1), maar noemen het niet; niet gewijzigd. Ook 'X rest Y'-afleiders krijgen hint 'Dat is de rest' (onnauwkeurig, het is het antwoord-met-res…
- **doorstroomtoets-rekenen-g8**
  - stap 1-3 algemeen: Veel wrongHints van het type '10× te weinig'/'halve omtrek'/'halve oppervlakte' (o.a. Q1.13, Q1.19, Q1.37, Q3.5, Q3.8, Q3.18, Q3.21, Q3.32, Q3.34) maken het juiste antwoord na één foute keuze vrijwel direct af te leiden. Als richting-feedback laten staan; bij …
  - stap 3 vraag 3 uitlegPad basiskennis: Claim 'Vragen Doorstroomtoets gebruiken meestal 1:25.000 of 1:50.000' is niet onderbouwd; niet gewijzigd.
  - stap 1 vraag 5 uitlegPad basiskennis: 'De toets rekent 6/9 vaak fout als niet vereenvoudigd' is een twijfelachtige claim over een meerkeuzetoets; niet gewijzigd.
  - stap 3 vraag 23 uitlegPad theorie: Ezelsbruggetje met 'wijnfles' (75 cL) in een kinder-app; mogelijk liever 'grote fles frisdrank'. Niet gewijzigd.
  - stap 4 vraag 32 (fooi) uitlegPad.basiske…: '5% van €12,50 = €0,625' is wiskundig juist maar geen geldbedrag (≈ €0,63); niet gewijzigd.
  - stap 4 vraag 13 en 21; stap 4 vraag 4 en…: vrijwel identieke vragen (1,5 L / 250 mL; 90 km/u in 20 min) — niet fout, wel dubbel.
  - stap 6 vraag 13 (New York 6 uur vroeger): klopt het grootste deel van het jaar; in de weken rond zomer/wintertijd-wissel is het 5 uur. Vraag geeft het verschil zelf, dus niet gewijzigd.
- **doorstroomtoets-studievaardigheden-g8**
  - stap 1 vraag 16: 'Fietsroute = stippellijn' is geen vaste kaartconventie (stap 6 zegt zelf: gele lijn = fietspad volgens legenda). Binnen de uitleg van dit pad consistent, daarom niet gewijzigd; overweeg 'volgens de legenda' in de vraag.
  - stap 4 vraag 26: 'balkdiagram = staafdiagram (horizontaal)': toelichting tussen haakjes maakt de goede optie herkenbaar, maar de andere opties zijn duidelijk anders. Niet gewijzigd.
  - stap 1 vraag 4 en 14 (uitlegPad): uitlegPad zegt 'op elke landkaart staat een kompasroos / altijd 4 elementen': lichte overstelling, niet gewijzigd.
  - stap 3 (niet mijn deel), vraag over vak …: Zelfde 'minstens'-fout als stap 5 vraag 36: van B2 naar B4 is minstens 1 vak (1 km), niet 2 km. Doorgeven aan nakijker stap 1-4.
  - stap 9 vraag 8: Vesuvius onder 'Beroemde vulkanen'; een slimme leerling kan 'Uitbarstingen' noemen (uitbarsting 79 n.Chr., Pompeii). Hint stuurt goed, niet gewijzigd.
  - stap 5 vraag 23: Opties 'Soms goed' en 'Soms fout' betekenen hetzelfde; geen fout antwoord, wel zwakke afleiders. Niet gewijzigd.
- **doorstroomtoets-taal-g8**
  - stap 2 (buiten checks) + vraag 3 vs 17: Stap-uitleg en V2.17 zeggen 'eerst skimmen, dan vraag'; V2.3 zegt 'eerst de vragen lezen'. Beide strategieën bestaan; licht tegenstrijdig, niet gewijzigd.
  - stap 2 (buiten checks): 'Begrijpend lezen ... 20-30 vragen' — aantal niet geverifieerd.
  - stap 1 vraag 26: 'De kat uit de boom kijken' heet 'spreekwoord'; strikt genomen een uitdrukking/zegswijze. Niet gewijzigd.
  - stap 2 vraag 53: 'wel 25.000 tandjes' geldt voor sommige slakkensoorten (tuinslak ~14.000); 'wel' maakt het verdedigbaar.
  - stap 4 (buiten checks): Stap-explanation zegt 'Taalverzorging = leestekens + zinsbouw'; op de Doorstroomtoets omvat taalverzorging ook spelling/werkwoordspelling. Niet gewijzigd (stap gaat expliciet over interpunctie & zinnen). Ook staat er een vreemde markdown-reeks *''*\* bij Aanha…
  - stap 4 vragen 2, 8, 18: Komma vóór 'en' in opsomming wordt als fout aangerekend; volgens Taaladvies is die meestal overbodig maar niet strikt verboden. Schoolregel aangehouden, niet gewijzigd.
  - stap 5 vraag 9: 'Houd rekening' is goed; 'Hou rekening' is ook correct maar staat niet als optie — geen probleem, alleen ter info.
- **duits-cse-havo-vwo**
  - stap 1 (buiten checks): Aantallen teksten/vragen/woorden en 'eentalig woordenboek toegestaan' niet tegen het actuele examenbesluit gecontroleerd.
- **ecosystemen-havo-vwo**
  - stap 3 vraag 4 (uitlegPad): 'Zonder menselijk ingrijpen zou ~95% van NL bos zijn' is twijfelachtig (veen, water, kwelders, duinen); niet gewijzigd.
  - stap 5 (buiten checks): 'Gemiddelde Nederlander gebruikt ~5 aardes' — Global Footprint Network geeft voor NL eerder ~3,5–4 aardes.
- **ecosystemen-havo-vwo / evolutie-havo-vwo**
  - stap 4 resp. stap 3 vraag 3 (uitlegPad): Cheetah-flessenhals 'tot ~7 dieren' is een omstreden schatting; niet gewijzigd.
- **eetcultuur-nederland-po**
  - stap 1/2 explanation + stap 1 vraag 4: Kaasconsumptie '~14,3 kg p.p.' en 'meer dan bijna elk land' — bronnen noemen voor NL vaak ~19-21 kg; ook 'boterham = NL-uitvinding' en vlees '86 kg in 1980' (karkasgewicht vs consumptie) twijfelachtig. Optie '~14 kg' blijft eenduidig tegenover 1/50/100 kg.
  - stap 3 explanation: 'Pikien (jonge vis)' als Surinaams gerecht en 'Kibbeling-versies' als Antilliaans gerecht lijken onjuist; niet zeker, niet gewijzigd.
- **elektriciteit-natuurkunde**
  - stap 9 (explanation + vraag 1 uitlegPad): 'Aardlek verplicht sinds jaren 70' en 'binnen 30 ms' — ruwweg juist (30 mA-schakelaars schakelen typisch in 20-40 ms; norm staat tot 300 ms toe), niet gewijzigd.
- **emoties-sociaal-po / digitale-geletterdheid-po**
  - diverse checks: Nog enkele magere hints ('Niet.', 'Wel.') bij verder eenduidige vragen (bv. emoties stap 2 vraag 4 'Niet bekend'/'Wel.'); niet fout, wel zwak didactisch.
- **energiebronnen-po**
  - stap 5 (buiten checks): Energiemix-percentages (duurzaam ~25% van totale energie) lijken hoog (CBS 2024 ~19%) en '21 GW = ~17 miljoen huishoudens' is een ruwe schatting; niet getoetst in een vraag. Niet gewijzigd.
- **engels-cse-havo-vwo**
  - stap 1 vraag 2 (uitlegPad): Uitleg noemt 'Engels-NL (of Engels-Engels)' woordenboek; toegestaan is volgens mij een vertaalwoordenboek Engels-NL/NL-Engels — Engels-Engels niet zeker. Niet gewijzigd.
  - stap 3 vraag 3 + stap 5 vraag 4 (uitlegP…: '1 bewijs = 1 punt' en 'volledige zin' zijn geen vaste CSE-regels (correctievoorschrift verschilt per vraag; vaak volstaat kort antwoord of citaat). Antwoordoptie blijft de beste, uitleg te stellig.
- **engels-literatuur-havo-vwo**
  - stap 1 (buiten checks): Claims als 'Canterbury Tales eerste literaire werk in spreektaal-Engels' en 'Robinson Crusoe eerste roman' zijn gangbare vereenvoudigingen maar betwistbaar.
- **engels-schrijven-spreken-havo-vwo**
  - stap 1 (buiten checks): ERK-eindniveaus 'HAVO B1+ / VWO B2' gelden grofweg voor schrijven/spreken; voor lezen is het havo B2 / vwo C1. Niet gewijzigd.
- **evolutie-havo-vwo**
  - stap 4 vraag 3 (theorie) en vraag 5 (uit…: 'Mens + bacterie ~50% genen vergelijkbaar', 'mens + banaan ~60%' en 'mtDNA 1 mutatie per 6500 jaar' zijn populaire maar wankele getallen.
  - stap 4 (buiten checks) en stap 5 vraag 5…: Terminologie: de 2e hoofdwet geldt strikt voor een geïsoleerd systeem; de aarde is natuurkundig een gesloten (geen stof-uitwisseling) maar niet-geïsoleerd systeem. Pad noemt de aarde 'open' en definieert 'gesloten' als 'geen energie-uitwisseling'. Goede optie …
- **evolutie-mens-po**
  - stap 3 (buiten checks): 'Mens + bananenplant ~50% DNA' is een populaire maar misleidende claim (het gaat om ~60% genen met een tegenhanger). Niet gewijzigd.
- **examen-biologie-2023-t1**
  - stap 3 vraag 1: Hint stelt dat hormonen primaire geslachtskenmerken niet veranderen; geslachtshormonen kunnen wel effect hebben op geslachtsorganen. Examenantwoord aangehouden.
- **examen-biologie-2024-t1**
  - stap 3 vraag 1: Liam zegt dat chromosomen los in het cytoplasma liggen: tijdens de celdeling (kernmembraan verdwenen) is dat strikt genomen wel zo. Examenantwoord 'geen van beiden' aangehouden.
- **examen-biologie-2025-t2**
  - stap 1 vraag 1: uitlegPad noemt ~12 meerlingen per 1000 geboortes (1,2%); CBS-cijfers wijzen eerder op ~1,5-1,7% meerlingbevallingen. Antwoord '1%' blijft de dichtstbijzijnde optie; feitcijfer niet gewijzigd (niet zeker welke bron het examen gebruikt).
- **examen-economie-2022-t2**
  - stap 5 vraag 1: uitleg stelt "nationaal inkomen (= BBP)"; strikt genomen niet gelijk, op vmbo-niveau verdedigbaar. Niet gewijzigd.
- **examen-economie-2025-t1**
  - stap 6 vraag 1: bronTekst ("Bronnen van inkomen voor jongeren") zegt letterlijk "zakgeld van ouders (overdrachtsinkomen)" en geeft zo het antwoord weg; lijkt geen authentieke examenbron. bronTekst mag ik niet wijzigen — coördinator/Mark beslissen.
- **examen-engels-2025-t1**
  - stap 1 vraag 1: q 'Wat wordt duidelijk uit tekst 1?' terwijl de opties zinsafmakers zijn ('...bent.') — de stam (bv. 'Je hebt de meeste kans op een ufo als je ...') ontbreekt. q mag niet gewijzigd worden.
- **examen-geschiedenis-2022-t1**
  - stap 2 vraag 1 (vraag 17): Vraagtekst ('Welke begrippen passen bij de Hitlerjugend-herinnering uit bron 8?') past niet bij antwoord 'terreur + strafkampen': de bron toont juist indoctrinatie. Vermoedelijk is de vraagtekst/bron verkeerd overgenomen. q/bronTekst mag ik niet wijzigen en ex…
- **examen-geschiedenis-2023-t1**
  - stap 4 vraag 1: Vraagtekst zegt 'Onder zijn presidentschap ging de Sovjet-Unie uiteindelijk failliet' — onjuist (USSR viel 1991 onder Bush sr.; de uitleg zegt dit ook). q niet gewijzigd (examen-regel).
- **examen-geschiedenis-2023-t2**
  - stap 3 vraag 1: 'indoctrinatie' als begrip in een Britse spotprent is zwak onderbouwd in de uitleg; bronTekst is een parafrase. Niet gewijzigd.
- **examen-geschiedenis-2025-t2**
  - stap 2 vraag 1: Vraag verwijst naar 'de rechtszaken' zonder bronTekst — leerling weet niet om welke zaken het gaat. q/bronTekst niet gewijzigd.
- **examen-maatschappijkunde-2022-t1**
  - stap 1-4: bronTekst lijkt geparafraseerd/uitgebreid en noemt het antwoord letterlijk (bv. "Op ministeries werken vooral ambtenaren", "minister, die leiding geeft aan een ministerie", "ministers verantwoordelijk", "riep de Europese Commissie op"; ook "Belastingdienst" al…
- **examen-maatschappijkunde-2022-t2**
  - stap 2-5: Idem: bronTekst bevat de oplossing ("politieke stroming die DUURZAAMHEID centraal stelt", "(= hoofdstraf)/(= bijkomende straf)", "opsporing is hier de hoofdfunctie", "AFWEGING van kosten en baten"). Niet authentiek-ogend; niet gewijzigd.
- **examen-maatschappijkunde-2023-t2**
  - stap 1 + stap 6: bronTekst noemt "referendum" en "ongelijke behandeling…" (weggevers); niet gewijzigd.
  - stap 5 vraag 1: OM wordt "uitvoerende macht" genoemd; formeel hoort het OM bij de rechterlijke organisatie (2024-t1 zegt dat ook). Antwoord volgt vermoedelijk het correctievoorschrift; niet gewijzigd.
- **examen-maatschappijkunde-2025-t1**
  - stap 1 vraag 1 bronTekst: Toegevoegde zin "(Eerste Kamer telt 75 leden + voorzitter = 75 stemmen…)" is verwarrend (voorzitter is één van de 75) en niet authentiek; niet gewijzigd.
- **examen-nederlands-2022-t2 / 2023-t1**
  - diverse explanations: Uitleg verwijst naar alineatekst (bv. alinea 13 'Zo kun je burgers beter informeren', alinea 15 'je bent minder vrij') die niet in de ingekorte bronTekst staat; niet te controleren tegen het officiële examen.
- **examen-nederlands-2025-t1**
  - stap 1 vraag 1 (examenvraag 1): Kopje voor alinea 2+3: alinea 2 = opzet, alinea 3 = resultaten; gemarkeerd 'resultaten van het onderzoek'. Hint bij 'uitvoering' ('dekt alleen alinea 2') geldt evengoed omgekeerd. Officiële sleutel niet kunnen controleren; niet gewijzigd.
- **exponentieel**
  - stap 8 (buiten checks): 'wereldbevolking groeide ~1% per jaar in de 20e eeuw' is aan de lage kant (gemiddeld ~1,3%, piek ~2%). Niet gewijzigd.
- **feit-mening-po**
  - stap 3 vraag 6 / stap 3 uitleg: 'waarschijnlijk/misschien' als mening-signaal is gangbaar in lesmethodes maar taalkundig eerder onzekerheid dan mening; niet gewijzigd.
- **filosofie-havo-vwo**
  - stap 4 vraag 1 uitlegPad: 'De grijze leeftijd' als titel van De Beauvoirs La Vieillesse — Nederlandse titel onzeker.
- **filosofie-vwo**
  - stap 3 (buiten checks) + stap 3 vraag 4 …: 'Deontoloog: switch trekken = persoon gebruiken als middel' is filosofisch omstreden (geldt eigenlijk bij de dikke-man-variant); schoolversie, niet gewijzigd. Idem filosofie-havo-vwo stap 5 explanation.
- **financiele-vorming-po**
  - stap 1 (buiten checks): Wisselkoers '€1 ≈ $1,08' is verouderd (2026 eerder ~$1,15); claim '95% van geld in NL is digitaal' niet geverifieerd. Niet gewijzigd (staat 'varieert' bij).
  - stap 3 (buiten checks): Productnamen kinderspaarrekeningen (ING Oranje Spaarrekening, Rabobank JeugdSparen, ABN AMRO Jongerenrekening) niet geverifieerd; kunnen verouderd zijn. Ook 'rente wordt jaarlijks uitgekeerd (vaak januari)' in Q3.1-uitlegPad: veel banken keren nu maandelijks/p…
  - stap 5 (buiten checks): '1 op 5 jongeren 18-25 heeft schulden volgens NIBUD' niet geverifieerd.
- **geld-rekenen**
  - stap 5 vraag 8 / diverse: Bedragen soms €0,70 zonder spatie, elders € 0,70; niet gelijkgetrokken (stijl).
- **genetica-erfelijkheid-biologie**
  - stap 7 (buiten checks) / vraag 2: 'Elke erfelijke ziekte is aangeboren' is discutabel (Huntington uit zich pas rond 40). Afleider aangepast zodat de vraag eenduidig is; stap-zin niet herschreven.
- **getallen-tot-20-po**
  - stap 6: Stap-tekst noemt '10 sommen met plaatjes' maar checks-array heeft 1 som; de 10 komen uit makeRekenOefenRonde (interactief) — klopt waarschijnlijk.
- **gezonde-voeding-po**
  - stap 2 (buiten checks) vs stap 4 vraag 7…: Nummering Schijf van Vijf-vakken is inconsistent: stap 2 (en lichaam-gezondheid-po stap 4) noemt vak 2 = brood en vak 4 = vetten; uitlegPad 4.7 noemt vak 2 = smeer-/kookvetten en vak 4 = brood. Voedingscentrum nummert officieel niet eenduidig; geen vraag toets…
  - stap 2 (buiten checks): 250 g groente is het advies voor volwassenen; voor kinderen 9-13 jaar adviseert het Voedingscentrum minder (~200 g). Vragen 2.1/4.10 rekenen met 250 g. Niet gewijzigd.
- **goniometrie**
  - stap 11 vraag 6 en 18: Dubbele vraag (tan 45°); niet fout, wel overbodig.
- **gouden-eeuw-geschiedenis**
  - stap 3 vraag 4: 'Belasting op gevelbreedte' als reden voor smalle grachtenhuizen wordt door historici vaak een mythe genoemd (eigenlijke reden: dure, smalle kavels). Afleider is aangepast, het antwoord zelf is mogelijk betwist.
- **grieks-vwo**
  - stap 3 + vraag 3.1: Aspect-terminologie 'imperfectief/aoristisch/perfectief' wijkt af van gangbare schoolgrammatica (duratief/momentaan-constaterend/resultatief); niet gewijzigd.
  - stap 1 (buiten checks): Claim '25% Engelse wetenschappelijke woorden uit Grieks' onzeker.
- **hart-bloed-ademhaling-havo-vwo**
  - stap 5 (buiten checks) en vraag 4 (uitle…: 'In NL ~30% van alle doden door hart- en vaatziekten' (CBS: ca. 22–25%) en '~80 000 openbare AED's' niet geverifieerd.
- **industriele-revolutie-po**
  - stap 5 (buiten checks): 'Mijnramp 1925 bij Heerlen' en 'Tegelfabrieken Maastricht (Mosa, Boch)' niet zeker; 'Limburg hoorde bij België tot 1839' is een vereenvoudiging.
- **informatica-havo-vwo**
  - diverse wrongHints: Veel wrongHints zijn 'Niet relevant.'/'Niet — …' i.p.v. denkprikkels (stijl, niet gewijzigd).
- **informatiebronnen-po**
  - stap 1 (buiten checks): 'daarover meer in deel D' terwijl het om stap 4 gaat; niet gewijzigd (mogelijk app-benaming).
- **interpunctie-po**
  - stap 4 vraag 2: 'Ik ga tóch naar buiten, maar het regent' is een wat vreemde zin (met 'tóch' past eerder 'ook al regent het'); antwoord ', maar' blijft wel het enige redelijke.
- **kaartlezen-po**
  - stap 4 explanation / Q4.3: Kaartsymbolen (ster = hoofdstad, dubbele lijn = provinciegrens, driehoek = camping) verschillen per atlas; als conventie gepresenteerd. Niet gewijzigd.
- **kalender-rekenen-po**
  - stap 1/3 + Q3.3, Q6.14: Koningsdag is 26 april als 27 april op zondag valt; vereenvoudiging, niet gewijzigd.
- **klassieke-muziek-po**
  - stap 2 vraag 1: Ook Beethoven werd door zijn vader als wonderkind (18e eeuw) gepresenteerd; Mozart is de canonieke keuze, niet gewijzigd.
- **klimaatverandering-aardrijkskunde**
  - stap 4 vraag 2: 'Klimaatakkoord 2019: 49%' klopt historisch, maar het huidige wettelijke doel is 55% (Klimaatwet). Nederland-water-vo vermeldt dat wél; dit pad niet. Niet gewijzigd.
- **klimaten-aardrijkskunde**
  - stap 7 + stap 10 tabel: IJsland als voorbeeld van toendra/poolklimaat (E) is betwistbaar: de kust (Reykjavik) is grotendeels subpolair zeeklimaat (Cfc), alleen het binnenland ET. Niet gewijzigd.
  - stap 5 vraag 2 uitlegPad: Calgary januari '~-10 °C' is aan de koude kant (normaal ca. -7 °C) en Calgary ligt op ruim 1 km hoogte — geen zuivere vergelijking. Niet gewijzigd.
- **kunst-havo-vwo**
  - stap 2 vraag 5 uitlegPad: '~5 mln schilderijen in NL 1600s' — schattingen lopen uiteen (1,3-5 mln).
- **lange-toets-teksten-g8-po**
  - stap 1 (buiten checks): Claim 'leesteksten op de Doorstroomtoets zijn 300 tot 400 woorden met 4 tot 6 vragen per tekst' niet geverifieerd; verschilt per aanbieder.
- **latijn-vwo**
  - stap 4 vraag 4 uitlegPad: '24 augustus 79' en '~16.000 doden' zijn betwist (oktober-datering; dodental onbekend).
- **leestekens-hoofdletters-po**
  - stap 2 vraag 4/6, stap 4 vraag 8: Een punt na 'Pas op, daar komt een auto' resp. uitroepteken na 'Ik ga morgen naar school' is niet strikt fout; schoolconventie aangehouden, niet gewijzigd.
- **licht-geluid-natuurkunde**
  - stap 5 (buiten checks): 'Rood = stop want lange golflengte gaat ver door mist' is een populaire maar historisch twijfelachtige verklaring; niet gewijzigd.
- **lineaire-formules**
  - stap 13 vraag 1 uitlegPad.theorie: Noemt taxi '€1,80×km + €4', terwijl stap 13 €2,50 instap gebruikt (stap 17 wel €4). Niet fout, wel inconsistent; niet gewijzigd.
- **literatuurgeschiedenis**
  - stap 14 vraag 3: 'Hij liep over straat. Hij dacht: ...' = personaal; een auctoriële verteller kan ook één gedachte weergeven, maar in deze korte zin is personaal de gangbare schoolkeuze. Niet gewijzigd.
- **logaritmen**
  - stap 2 (buiten checks): 'log₂ soms geschreven als lg(x)': in veel bronnen betekent lg juist log₁₀. Niet gewijzigd.
- **logaritmen-exponentieel-havo-vwo**
  - stap 5 (buiten checks): Bij het CO₂-voorbeeld staat 'voor halvering tegen 2030: jaarlijks ~7% reductie'. Het basisjaar is onduidelijk (0,93^6 ≈ 0,65, geen halvering). Niet gewijzigd.
  - stap 3 vraag 4: 'Hoeveel sterker' bij Richter: 100× geldt voor de amplitude, de energie is ~1000×. Omdat 1000× geen optie is, is de vraag eenduidig, maar 'sterker' blijft een vage term.
- **maatschappijleer-havo-vwo**
  - stap 4 vraag 2: 'Aangifte-bereidheid sterk gedaald sinds 2002' — Veiligheidsmonitor laat eerder een lichte daling/stabiel (~25-30%) zien; 'Stabiel' kan verdedigbaar zijn. Bron checken.
- **maatschappijwetenschappen-havo-vwo**
  - stap 1 vraag 4 uitlegPad: Voorbeeld-burgerinitiatief 'Stop Particulier Vuurwerk (2017)' niet geverifieerd.
- **machten**
  - stap 2 (buiten checks): '0⁰ = onbepaald' is een conventiekwestie (vaak wordt 0⁰ = 1 afgesproken). Niet gewijzigd.
- **marktvormen-havo-vwo**
  - stap 4 vraag 4 (uitlegPad.theorie): "austerity (Hayek, Friedman)": Friedman was monetarist, geen typische bezuinigings-econoom; niet gewijzigd.
- **maten-eenheden**
  - stap 8 vraag 5: Antwoord 'voordeur' bij 2,5 m, terwijl stap 2 zegt dat een voordeur 2 m hoog is. Eenduidig genoeg (andere opties duidelijk fout), niet gewijzigd.
- **maten-omtrek-oppervlakte-po**
  - stap 3 (buiten checks): 'Trapezium (alleen VWO/HAVO maar handig)' — afkortingen niet voluit en trapezium komt ook in po voor; stijlpunt, niet gewijzigd.
- **media-wijsheid-maatschappijleer**
  - stap 2 (buiten checks): "Stop Fake News" als Nederlandse factchecker niet te verifiëren; niet gewijzigd.
- **mens-biologie-vmbo**
  - stap 5 vraag 1: 'Filteren in schors en merg' volgt het examenantwoord (2024-T1 v42); fysiologisch vindt filtratie in de glomeruli (schors) plaats en is het merg terugresorptie. Niet gewijzigd.
- **mensenrechten-vn-havo-vwo**
  - stap 2 vraag 4: 'Huidige VN-Secretaris-Generaal' = Guterres klopt t/m 31 dec 2026; vraag veroudert per 1 jan 2027.
  - stap 4 (buiten checks): Gaza-cijfers ('40 000+ doden, vooral burgers') verouderd en deels omstreden; ICC-ledental 124 klopt toevallig weer (Oekraïne erbij, Hongarije eruit juni 2026).
- **nederlands-cse-havo-vwo**
  - stap 1 (buiten checks): 'HAVO/VWO: 1-2 lange teksten' — het CSE Nederlands bevat doorgaans meer (ook kortere) teksten; niet geverifieerd, niet gewijzigd. Tijdsduur 3 uur havo is wel geverifieerd (syllabus/DUO).
- **nederlandse-staat-maatschappijleer**
  - stap 5 vraag 2 uitlegPad: "In 2024 volgde Dick Schoof Mark Rutte op" — historisch juist, maar mogelijk is er inmiddels (2026) een nieuwe premier; actualiteit niet geverifieerd.
- **olympische-spelen-po**
  - stap 3 (buiten checks): 'Sven Kramer + Ireen Wüst beide vlaggendragers' niet geverifieerd.
- **onderwijs-niveaus-vmbo-havo-vwo**
  - stap 2 (buiten checks): Vier vmbo-leerwegen (bb/kb/gl/tl) beschreven; gl en tl worden (wettelijk gepland) samengevoegd. Mogelijk verouderd, niet zeker van de actuele invoeringsdatum — niet gewijzigd.
- **onregelmatige-werkwoorden-engels**
  - stap 12 vraag 2: 'She has gone to school every day this week' is grammaticaal, maar 'has been to school' is idiomatischer; 'has gone' suggereert dat ze nu nog weg is. Niet gewijzigd.
- **opdrachtwoorden-nieuwkomers**
  - stap 1 vraag 4 en vraag 5: Goede optie herhaalt de opdracht letterlijk ('zet een streep door het foute woord' → 'Ik zet een streep door het foute woord.'; idem 'trek een lijn van de hond naar het hok') = weggever. Niet gewijzigd: vraag-, optie- en hintteksten zijn sleutels in het gedeel…
  - stap 1 vraag 2: Hint 'Onder-streep: kijk naar het begin van het woord.' is dubbelzinnig (begin van het woord op het blad?). Voorstel: 'Onder-streep: het eerste stukje zegt waar de streep komt.' Niet gewijzigd i.v.m. vertaalsleutel in gedeelde nieuwkomersSteun.js.
- **oudheid-egyptenaren-grieken-romeinen-po**
  - stap 3 (buiten checks): "Grootste rijk in geschiedenis Europa" en "70 miljoen inwoners (20% wereldbevolking)" zijn ruwe schattingen; niet gewijzigd.
- **passe-compose-frans**
  - stap 1 vraag 1: Passé composé wordt in het NL vaak ook met de ovt vertaald (j'ai mangé = ik at); optie 'Onvoltooid verleden tijd' is dus voor een slimme leerling niet helemaal fout. Gangbare schoolkoppeling (pc ≈ vtt, imparfait ≈ ovt) aangehouden.
- **periodiek**
  - stap 11 (buiten checks): 'Amplitude = luidheid (in dB)' is losjes geformuleerd: dB is een logaritmische maat en niet gelijk aan de amplitude. Niet gewijzigd.
- **pincode-belasting**
  - stap 5 (zorgtoeslag-bedragen): "2024: max ~€127/mnd alleenstaande, ~€243 stel" — volgens mij 2024 ca. €123/€235 (2025 ca. €131/€250). Niet geverifieerd, niet gewijzigd.
- **pincode-buitenland-eu**
  - stap 6 vraag 2: "Shell" als Nederlandse multinational: hoofdkantoor sinds 2022 in Londen (Shell plc). Oorsprong NL, maar een slimme leerling kan bezwaar maken. Eventueel vervangen door Heineken (dan uitlegPad mee aanpassen).
- **pincode-geld-sparen-lenen**
  - stap 5 (vraag 1, 2, 7): Kasreserve 'ongeveer 5%' en het multiplier-model van geldschepping zijn lesboek-vereenvoudigingen (ECB-minimumreserve is 1%; moderne visie: leningen scheppen deposito's). Niet gewijzigd.
- **pincode-inkomen-welvaart**
  - stap 3 vraag 3 uitlegPad: 'Sociale premies (WW, AOW, ZVW)' als werknemersinhouding: WW-premie en Zvw-bijdrage betaalt meestal de werkgever. Klein detail, niet gewijzigd.
- **pincode-ontwikkelingslanden**
  - stap 1 vraag 6 + stap 1 explanation: Wereldbank-indeling gebruikt BNI (bruto nationaal inkomen) per hoofd, niet BBP; drempels $1.135/$13.845 zijn van FY2024 (nu ~$1.145/$14.005). Niet aangepast (lesboek-niveau).
  - stap 2 vraag 3: Easterlin-paradox gaat strikt genomen over tijdreeksen binnen landen; de '$20-30k-drempel' is een vereenvoudiging. Vakinhoud deels betwist — niet gewijzigd.
  - stap 3 vraag 3 uitlegPad: BBP/hoofd Zuid-Korea 1960 '~$80' wijkt af van gangbare bronnen (~$158); orde van grootte klopt.
  - stap 4 (explanation + vraag 4 uitlegPad): NL-ontwikkelingshulp '~0,5% BBP' — OESO-cijfers 2022-2024 liggen rond 0,6-0,67% BNI (incl. asielkosten); antwoordoptie is nu 'Minder dan 1%', uitleg noemt nog ~0,5%.
- **pincode-overheid**
  - stap 5 vraag 5: BBP-krimp 2020 '~3,7%': CBS-cijfer is later herzien (circa 3,8-3,9%). Antwoord blijft eenduidig.
- **pincode-werk-arbeidsmarkt**
  - stap 6 vraag 4: '~€60 per gewerkt uur' voor NL ligt waarschijnlijk te laag (OESO ~€70+); antwoord blijft eenduidig door de afleiders.
- **procenten / kwadratische-vergelijkingen / lineaire-formules / pythagoras**
  - stap 'CSE-vraag': Afkorting CSE (en GL/TL) niet voluit in klas1-paden; niet gewijzigd.
- **pubertijd-groei-po**
  - stap 3 uitleg / Q4.3 / Q4.10: Slaapadvies wisselt tussen "9-10 uur" (Q4.3, stap 3) en "8-10 uur" (Q4.10); beide verdedigbaar, opties eenduidig.
- **pythagoras**
  - stap 1 (buiten checks): Voorbeelden 'De hoek tussen vloer en muur' en 'De hoek tussen een muur en de vloer' staan dubbel; stijl, niet gewijzigd.
- **rechtsvormen-overzicht**
  - stap 4 vraag 1 + stap 4 explanation: Sinds 2020 (Wet omzetting aandelen aan toonder) bestaan NV-aandelen aan toonder in NL vrijwel alleen nog girale vorm; 'naamloos = aan toonder' is lesboek-uitleg. Niet gewijzigd.
- **recyclen-afval-po**
  - stap 4 vraag 7 uitlegPad: 'NL stort minder dan 1%' vs stap 2 '< 2%' — kleine inconsistentie, beide grofweg juist. Niet gewijzigd.
- **rekenen-tot-20-nieuwkomers**
  - alle stappen: Voorvoegsels als 'Nee, 6 is tien te weinig.' komen uit gedeelde helper nieuwkomersFoutUitleg.js (niet aangeraakt); prima, maar bij 'X is één te weinig' wijst het indirect richting antwoord.
- **rekentaal-nieuwkomers**
  - stap 2 vraag 1, 2, 5; stap 3 vraag 1: wrongHints eindigen met de uit te rekenen som ('3 + 2.', '6 − 2.', '2 + 2 + 2.'). Geeft de bewerking, niet de uitkomst; voor nieuwkomers groep 3-4 bewust steigerwerk. Niet gewijzigd.
- **romeinse-cijfers-po**
  - stap 4 (buiten checks): Veel echte klokken gebruiken IIII i.p.v. IV voor 4; vraag is nu expliciet over IV, dus niet fout.
- **samenvatten-hoofdgedachte-po**
  - stap 5 vraag 25: Of een hoofdgedachte-vraag 'inferentie' heet is didactisch betwistbaar; met de nieuwe afleiders is 'Inferentie' wel de enige plausibele optie.
- **schemas-stappenplannen-po**
  - stap 5 vraag 14: Vraag spreekt over het symbool in een 'beslisboom' (ruit), terwijl dat een stroomdiagram-afspraak is die nergens in de uitleg staat.
  - stap 5 vraag 7: Verzonnen scoregrenzen 525-550 (oude Cito-schaal); de Doorstroomtoets werkt met referentieniveaus. De uitleg zegt wel dat het voorbeeld verzonnen is.
- **schrijven-teksten-po**
  - stap 3 vraag 5 uitlegPad: uitlegPad zegt 'gewoon kopiëren/letterlijk overnemen' terwijl stap-uitleg zegt 'in eigen woorden' en 'niet klakkeloos eerste zin overnemen'. Gaat over hoofdgedachte vs samenvatting; niet gewijzigd.
- **sociale-zekerheid-nl**
  - stap 1 vraag 3: Werkloosheid ~25-30% in de jaren '30 geldt voor verzekerde arbeiders, niet de hele beroepsbevolking. Percentage uit optie gehaald; uitlegPad laten staan.
- **spelling-ei-ij-au-ou**
  - stap 4/5/7 (buiten checks): Stap-uitleg bevat losse/misleidende trucjes ("kleurnamen = au", "woorden met rij- hebben ij", rare tabellen met dubbele/vreemde woorden zoals "hein", "blauwen"). Geen harde feitfout, wel rommelig; niet aangepast.
- **spelling-overige-po**
  - stap 4 + stap 5 vraag 4: "kerst" vervangen door "kerstboom" omdat de Woordenlijst Kerst/Kerstmis (het feest) met hoofdletter geeft; graag even checken op woordenlijst.org.
  - stap 5 vraag 1 en 9: Na herstel zijn deze twee vragen bijna gelijk (fantastisch goed gespeld); dubbel maar niet fout.
- **spreekwoorden-uitdrukkingen-po**
  - stap 2 en 3 (buiten checks): Uitdrukkingen staan soms in een vreemde categorie (bv. 'Op je tenen lopen' onder Dieren, 'Met de mond vol tanden' onder Eten); geen feitfout, niet gewijzigd.
- **stedelijke-ontwikkeling-havo-vwo**
  - stap 3 vraag 3 + stap-uitleg top-10: Grootste stedelijk gebied: volgens de nieuwe VN-methode (World Urbanization Prospects 2025) staat Jakarta bovenaan, met de klassieke definitie Tokyo-Yokohama. Jakarta staat niet bij de opties, dus het antwoord blijft eenduidig; de top-10 in de stap-uitleg is w…
- **stelsels**
  - stap 12 vraag 4: Goede optie 'Hond = 4,67 kg' is afgerond (14/3); strikt zou ≈ moeten staan, maar dat maakt de optie herkenbaar. Laten staan.
- **sterren-planeten**
  - stap 1 + 8 (buiten checks): "biljoenen sterrenstelsels" is aan de hoge kant (schattingen ~200 miljard tot ~2 biljoen); niet gewijzigd.
- **stijl-literatuur-havo-vwo**
  - stap 3 (buiten checks): De vijf bedrijven van het klassieke drama ('4. Ontknoping, 5. Catastrofe of resolutie') wijken af van de gangbare Freytag-indeling (4 = vertraging/dalende handeling); niet gewijzigd.
  - stap 2 (buiten checks): Multatuli ingedeeld bij Romantiek en Tachtigers als 'vorm = inhoud' is een gangbare schoolvereenvoudiging, niet gewijzigd.
- **stoffen-mengsels-scheikunde**
  - stap 5 (buiten checks): Pictogram 7 omschreven als "vergroeing" en "zandvuurblusser"; ongebruikelijke termen, niet aangepast.
- **tabellen-grafieken**
  - stap 3 vraag 1-3: Vragen leunen op step.svg (staafdiagram sporten) zonder data in de vraagtekst, maar staan NIET op disabled:true — terwijl de vergelijkbare stap 4- en stap 7-vragen wel disabled zijn vanwege citoMix-sample-flow. In het leerpad zelf werkt het (svg zichtbaar); in…
  - stap 2 vraag 1-3: Leunen op de ijsjes-tabel (step.svg + stap-explanation); zelfde risico in losse flows als hierboven.
- **tachtigjarige-oorlog-geschiedenis**
  - stap 8 vraag 2 / stap 10 vraag 3: Invloed van het Plakkaat op de Amerikaanse Onafhankelijkheidsverklaring is omstreden ('mogelijk'); en Ter Borchs schilderij hangt (ook) in de National Gallery Londen — niet geverifieerd.
- **tekstdoel-schrijversdoel-po**
  - stap 4 vraag 6: Een schoolkrantverslag ('onze klas won ...') wordt in veel methodes als informeren/verslag gezien; nu alleen de afleider verscherpt, het label 'amuseren' kan nog discussie geven.
  - stap 3 vraag 5: 'Wie moet iets doen' → 'Degene die boodschappen doet'; de folder spreekt kinderen aan ('jij'), maar de opties maken het antwoord wel eenduidig. Niet gewijzigd.
- **tijdvakken-geschiedenis**
  - stap 3 vraag 2 (wrongHint 1492 = tijdvak…: 1492 valt op jaartal in tijdvak 4; conventie koppelt ontdekkingsreizen aan tijdvak 5. Laten staan.
- **tijdvakken-nederland-po**
  - stap 5 vraag 7: "Patatkar-school" is een verzonnen begrip met als goed antwoord "Geen — niet bestaand". Niet fout, maar didactisch twijfelachtig (toetst geen kennis; Leerkwartier-test). Overweeg te vervangen.
  - stap 4 (buiten checks): Industriële Revolutie "±1800-1900" in stap-uitleg vs "~1850-1900" in uitlegPad stap 5 vraag 9: lichte inconsistentie, niet gewijzigd.
- **topografie-nederland**
  - stap 8 vraag 2 uitlegPad: Etymologie Schiphol als 'schip-hol' is omstreden; niet gewijzigd.
- **trillingen-golven-havo-vwo**
  - stap 4 (buiten checks) + Q4.2 uitlegPad: Tacoma Narrows (1940) wordt "resonantie" genoemd; natuurkundig was het aero-elastische flutter. Gangbare schoolboek-vereenvoudiging, niet gewijzigd.
- **tweede-wereldoorlog-havo-vwo / twintigste-eeuw-havo-vwo**
  - stap-uitleg Holocaust: Aantal Roma/Sinti-slachtoffers verschilt tussen paden (~500k vs ~250.000); schattingen lopen uiteen (200-500k). Niet gewijzigd.
- **twintigste-eeuw-havo-vwo**
  - stap 1 vraag 1: Art. 231 noemt Duitsland "en zijn bondgenoten" verantwoordelijk; "Duitsland is alleen schuldig" is de gangbare schoolboek-lezing. Niet gewijzigd.
- **verwijswoorden-begrijpend-lezen-po**
  - stap 4 vraag 4 (uitlegPad): uitlegPad zegt 'De konijnen vonden ze het allerleukst kan óók bijna'; grammaticaal kan 'dit' niet naar meervoud 'de konijnen' wijzen, dus antwoord is eenduidig, maar de uitleg zwakt dat onnodig af.
- **volgorde-bewerkingen**
  - stap 4 (buiten checks): 'n⁰ = 1 (altijd!)' — 0⁰ is wiskundig omstreden; niet aangepast.
- **vulkanen-po vs topografie-nederland**
  - stap 2 explanation vulkanen: Vulkanen noemt Mount Scenery (Saba) 'hoogste punt van Nederland', topografie noemt Vaalserberg. Beide verdedigbaar (Caribisch vs Europees Nederland), maar inconsistent; niet gewijzigd.
- **water-erfgoed-nederland-po**
  - stap 3 explanation: 'Watermolen = pompt water weg' — in het Nederlands is watermolen meestal een molen aangedreven door water; poldermolen is de pompende molen. Niet gewijzigd (geen vraag op).
- **weersvoorspelling-po**
  - stap 1 (buiten checks): "NL gem ~5 uur zon per dag" (=~1825 u/jaar) botst licht met "1600 zonne-uren per jaar"; beide zijn ruwe afrondingen, niet gewijzigd.
  - stap 3 vraag 3 + stap 3 uitleg: "1-3 dagen ~90% betrouwbaar" is een ruwe vuistregel zonder vaste definitie; afleiders zijn duidelijk fout, niet gewijzigd.
  - diverse (stap 1-4): Veel afleiders zijn zeer zwak ("Niet bestaand", "Magie", "Geen") met hints als "Wel."; niet fout maar didactisch mager — alleen de ergste (Q4.27 "Random") vervangen.
- **werkwoordsspelling-dt**
  - stap 1 en 5 (buiten checks): Claim 'ongeveer 95% van alle werkwoorden is zwak' is een gangbare maar niet goed onderbouwde schatting; niet gewijzigd.
  - diverse wrongHints (Q5.2, Q6.1, Q6.2, Q8…: Hints bij de d/t-afleider ('k zit in kofschip → -t niet -d') leggen de regel uit en verwijzen daarmee indirect naar het antwoord; als uitleg na een fout gelaten.
- **wiskunde-d-vwo**
  - stap 2 vraag 4: Goede optie 'Rotatie 90° tegen klok' iets langer dan afleiders; niet aangepast.
  - stap 5 vraag 5 uitlegPad: 'Bewezen door Gauss in 1799' — zijn proef uit 1799 geldt als onvolledig; gangbare vereenvoudiging, niet gewijzigd.
- **woorden-3-nieuwkomers**
  - stap 2 vraag 2, 2.5; stap 3 vraag 2, 3, …: Hints noemen het antwoord bijna letterlijk ('Drie hoeken = drie-hoek.', 'Veel bladzijden = dik.', 'Op de tafel = erop.', 'Uit het etui = eruit.', 'De helft = half.', 'Aan de beurt = nu jij.', 'Niet moeilijk = makkelijk.', 'Heel blij = gelukkig.', 'Durven = het…

## Eindmeting

Twee nakijkers die niet aan de ronde meededen, beoordeelden elk 100 checks. De steekproef bestaat uit 200 willekeurige checks uit alle leerpaden: seed **20261008**, mulberry32 + Fisher-Yates over alle 10.047 checks, in de volgorde manifest → stappen → checks. Elke vraag is eerst zelf opgelost. Script: `steekproef.mjs` (scratchpad); deel A is #1–100, deel B is #101–200.

| deel | beoordeeld | fout | dubbelzinnig | fout + dubbelzinnig | twijfel (niet meegeteld) |
|---|---|---|---|---|---|
| A (#1–100) | 100 | 11 | 1 | 12 (12%) | 7 |
| B (#101–200) | 100 | 7 | 3 | 10 (10%) | 3 |
| **totaal** | **200** | **18** | **4** | **22 (11,0%)** | 10 |

Alle 22 fout- of dubbelzinnige checks zijn daarna hersteld (commits "eindmeting deel A/B"). Na het herstel gaven `audit:vragen` 0 meldingen, slaagde de build en bleven de examenvelden gelijk.

| deel/nr | pad · plek | oordeel | reden | hersteld |
|---|---|---|---|---|
| A #2 | toestand-stoffen-po · stap 5 vraag 4 | fout | wrongHint bij 'Bovenkant' noemt het antwoord ('gas verspreidt zich helemaal') | ja |
| A #16 | pincode-ontwikkelingslanden · stap 6 vraag 4 | fout | Goede optie als enige een omschrijving en veel langer dan de losse woorden 'Veganist'/'Vegetariër' | ja |
| A #17 | cse-schrijfvaardigheid-engels · stap 3 vraag 4 | fout | Spelfout 'Plagiat' (moet 'plagiaat') in vraag en hints; afleider 'Latere alinea's pakken' onzinnig | ja |
| A #26 | onderwijs-niveaus-vmbo-havo-vwo · stap 2 vraag 4 | fout | Goede optie is de enige 'Nee' tegenover drie extreme 'Ja'-opties: herkenbaar zonder na te denken | ja |
| A #39 | topografie-nederland · stap 8 vraag 1 | fout | Feitfout in uitlegPad: 'NL heeft 12 erfgoederen' (Koninkrijk heeft er 13) en 'Stelling van Amsterdam, Defensielijn' als twee aparte erfgoederen (is hetzelfde) | ja |
| A #43 | passe-compose-frans · stap 9 vraag 1 | fout | wrongHints bij être en 'Beide kunnen' noemen letterlijk het antwoord ('→ avoir', 'gaat altijd met avoir') | ja |
| A #57 | sociale-zekerheid-nl · stap 4 vraag 4 | fout | Goede optie is een volle zin, afleiders zijn korte trefwoorden ('Affaire Eurovisie', 'Bouw-fraude'): herkenbaar | ja |
| A #66 | continenten-wereld-po · stap 1 vraag 1 | dubbelzinnig | 'Hoeveel continenten leer je op een Nederlandse school?' heeft geen eenduidig antwoord (5, 6 en 7 komen voor); uitlegPad beweerde 'in Nederland altijd 7 / op de Doorstroo… | ja |
| A #77 | stedelijke-ontwikkeling-havo-vwo · stap 3 vraag 4 | fout | Goede optie veel langer dan de tweewoord-afleiders ('Oudste stad', 'Beste OV') | ja |
| A #87 | omzetten-breuk-procent-komma-po · stap 1 vraag 6 | fout | Goede optie als enige in een ander schrift (¾ i.p.v. a/b) en hint 'Denk aan kwarten' stuurt rechtstreeks naar het antwoord | ja |
| A #91 | pubertijd-groei-po · stap 1 vraag 2 | fout | Goede optie enige omschrijving tegenover losse woorden 'Vitaminen/Bot/Spier'; hints nietszeggend | ja |
| A #94 | alfabet-woordenboek-po · stap 1 vraag 5 | fout | wrongHint bij Q ('Q komt eerder dan R') noemt het antwoord R | ja |
| A #1 | pincode-inkomen-welvaart · stap 6 vraag 6 | twijfel | In brede-welvaartszin telt milieu wél mee; 'welvaart is hoog' en afleider 'milieu telt niet voor welvaart' hangen af van enge/ruime definitie | nee |
| A #15 | verwijswoorden-po · stap 4 vraag 7 | twijfel | Hint bij 'het zandkasteel' ('daar is de plek') laat via uitsluiting bijna alleen 'het strand' over | nee |
| A #19 | pincode-belasting · stap 4 vraag 5 | twijfel | uitlegPad noemt ~6 cent afbouw per euro, voorbeeld rekent met 5% en AHK-bedragen die niet goed kloppen | nee |
| A #36 | verhaal-diepte-lezen-po · stap 2 vraag 5 | twijfel | Citaat in de vraag heeft een losse aanhalingsteken en is zonder de verhaaltekst lastig te beoordelen | nee |
| A #67 | filosofie-havo-vwo · stap 2 vraag 4 | twijfel | Alleen de goede optie heeft een vertaling erbij; vertaling 'durf te denken' wijkt af van uitlegPad 'durf te weten' | nee |
| A #70 | pincode-overheid · stap 6 vraag 3 | twijfel | NL-wet kent geen vaste 2-jaarstermijn (conformiteit naar levensduur); goede optie heeft als enige 'Minimaal' | nee |
| A #98 | schrijven-teksten-po · stap 1 vraag 1 | twijfel | Optie/hint spreken van 'Informeren', uitlegPad gebruikt OBIA met 'Beschrijven': niet consistent | nee |
| B #108 | weersvoorspelling-po · stap 4 vraag 21 | dubbelzinnig | Goede optie is de enige met criteria en getallen, afleiders zijn onzin ('Niet bestaand'), hint 'Wel.' zegt niets | ja |
| B #113 | pincode-werk-arbeidsmarkt · stap 5 vraag 2 | dubbelzinnig | Goede optie als enige met haakjes en toelichting, opvallend langer | ja |
| B #117 | stoffen-mengsels-scheikunde · stap 4 vraag 4 | fout | Hint bij 'Kleur' noemt het antwoord ('Wat gebeurt er bij verbranden?' → brandbaarheid) | ja |
| B #118 | pincode-inkomen-welvaart · stap 7 vraag 6 | fout | Rekenvoorbeeld fout: €100k geeft met 37% tot ~€75k en 49,5% erboven ~€40k IB, niet ~€38k | ja |
| B #126 | begrijpend-lezen-teksten-po · stap 5 vraag 13 | fout | Hint bij 'Geen' noemt het antwoord ('vaak in slot') | ja |
| B #149 | volgorde-bewerkingen · stap 7 vraag 7 | fout | Hint bij optie 9 (= 2+3+4) zegt 'vermenigvuldigen eerst klopt niet hier'; past niet bij die fout | ja |
| B #170 | werkwoordsspelling-dt · stap 6 vraag 1 | fout | Hint bij 'gewerkd' noemt het antwoord ('-t niet -d'); hint bij 'gewerken' klopt niet ('werkwoord-vorm') | ja |
| B #171 | engels-schrijven-spreken-havo-vwo · stap 5 vraag 2 | fout | nogSimpeler verwijst naar 'A.' terwijl opties gehusseld worden; goede optie opvallend langer (twee voorbeelden met schuine streep) | ja |
| B #177 | netwerken-internet-informatica · stap 3 vraag 4 | dubbelzinnig | Goede optie ruim twee keer zo lang als de afleiders | ja |
| B #180 | interpunctie-po · stap 6 vraag 7 | fout | Hint bij 'brood, kaas en, melk' spreekt over een komma vóór 'en', terwijl de komma ná 'en' staat | ja |
| B #121 | doorstroomtoets-taal-g8 · stap 4 vraag 39 | twijfel | Opmaak "*'Open vraag*':" toont een los aanhalingsteken (komt 6x voor in het bestand); inhoud klopt | nee |
| B #128 | doorstroomtoets-rekenen-g8 · stap 5 vraag 7 | twijfel | Hint bij 'even duur' noemt de rekenstap '€4,40 × 2,5', dus rekent half voor | nee |
| B #187 | ai-machine-learning-informatica · stap 1 vraag 4 | twijfel | 'AGI bestaat op dit moment nog niet' is een tijdgebonden en omstreden bewering | nee |

## Branch en commits

- Branch: `audit3/leerpaden-2` (gepusht naar origin).
- Eén commit per groep paden (g01–g35, g22/g23/g29 per pad), plus de WIP-commit `ad20906e` (onderbreking door de API-limiet), het opnieuw gegenereerde `pathManifest` en de twee eindmeting-commits.
- Laatste inhoudelijke commit: `3a87e531`.
