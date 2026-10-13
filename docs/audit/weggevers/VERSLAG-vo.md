# Weggevers middelbare school — verslag (audit3/weggevers-vo)

Datum: 13 oktober 2026 · branch `audit3/weggevers-vo` (niet gemerged, versienummer niet opgehoogd).

## Uitkomst in het kort

| | 13 okt (vóór) | nu (na deze ronde) |
|---|---|---|
| Eindmeting middelbaar + examens | 17 / 62 = **27%** fout of dubbelzinnig | **3 / 84 = 3,6%** (2 fout, 1 dubbelzinnig) |
| Eindmeting basisschool (niet aangeraakt in deze ronde) | 8 / 138 = 5,8% | 11 / 116 = 9,5% |
| Eindmeting totaal | 25 / 200 = 12,5% | **14 / 200 = 7,0%** |
| Weggever-scan (alle leerpaden) | 923 kandidaten | 80 (waarvan 35 middelbaar, vrijwel allemaal vals alarm: "fini", "come", "Water") |
| Verkeerd gemarkeerde antwoorden gevonden | 0 | 0 |

De middelbare school is van 27% naar 3,6% gegaan. Het totaal blijft hoger dan 2% door de basisschoolpaden: de nieuwe trekking (seed 20261020) raakte daar andere vragen dan op 13 okt, en die vallen buiten deze opdracht (zie "Basisschool-vondsten" onderaan).

## Werkwijze

1. **Kandidaten.** `weggever-scan.mjs` over alle leerpaden gaf 923 kandidaten; min de 645 uit `kandidaten-po.json` bleven er **884** over (`kandidaten-alles.json`). Een tweede, lossere scan (goede optie 1,3–1,6× langer, stro-afleiders als "Niets"/"Alleen X", kale hints als "Niet."/"Te veel.") voegde **852** kandidaten toe uit dezelfde soort paden. Verdeeld in 18 groepen per vak, nooit twee nakijkers in één bestand (`docs/audit/weggevers/vo/groep-*.json`), plus 5 middelbare paden zonder kandidaten (`groep-rest.json`) en de 48 examenpaden in 2 groepen.
2. **Ronde 1 (kandidaten).** 6–8 parallelle nakijkers per de opdracht (zelf oplossen, L/H herstellen, `answer`/`q`/aantal opties nooit veranderen).
3. **Blinde steekproef → strengere maatstaf.** De verplichte steekproef van 30 na ronde 1 keurde **10 van 30** af: de opties waren wel even lang, maar de afleiders waren nog absurd ("Er wordt veel goud gevonden in NL"), zeiden onderling hetzelfde, of de goede optie was de enige "verstandige". Daarom een strengere maatstaf (`strenger.md`: de toets "kan een slimme leerling zonder lesstof kiezen?") en **ronde 2**: álle meerkeuzevragen in de betrokken bestanden opnieuw (4.906 vragen), niet alleen de kandidaten. Steekproef daarna: 6 van 30.
4. **Ronde 3 — blinde detectie.** Per groep kreeg een aparte controleur alleen vraag + geschudde opties (zonder antwoord en hints) en markeerde wat zonder vakkennis te raden was; daarna herstelde een nakijker alleen die gemarkeerde vragen (en lekken tussen vragen: een afleider of hint in vraag X die het antwoord van vraag Y verklapt). Steekproef daarna: **3 van 30** (2× examenpad, 1× spelling).
5. **Tweede controle** van de groepen waarin die 3 vielen (beide examengroepen + nederlands), plus een opruimronde voor 488 kale hints ("Te veel.", "Niet — Stoker.") in de overige bestanden (328 herschreven, alleen `wrongHints` veranderd — apart gecontroleerd). Laatste steekproef: **0 van 30** fout (8 twijfel).
6. **Examenpaden (stap 3).** Alleen hints, uitleg en door ons toegevoegde aantekeningen in bronteksten. Gevonden en weggehaald: tientallen aantekeningen als "(Hoofdgedachte: …)", "(Doel: informeren over …)", "(= hoofdstraf)", vetgedrukte antwoordwoorden; ~190 hints die het antwoord noemden of samen per uitsluiting vastlegden ("Finn heeft het mis — …kleppen…"). `q`, opties, `answer` en `examenBron` zijn ongewijzigd (gecontroleerd door het script).

## Controles (vóór elke push)

- `scripts/audit/vergelijk-met-main.mjs` (nieuw, laadt ook .jsx): per gewijzigd bestand `answer`, `q`, aantal opties, aantal stappen/checks gelijk aan main; in examenpaden ook opties en `examenBron`. Eindstand: **206 bestanden · 3.957 checks gewijzigd · 0 afwijkingen**.
- `npm run audit:vragen`: **0 meldingen**. `npx vitest run`: **380/380 groen**. `npm run build`: **slaagt**.
- 4 blinde steekproeven van 30 (10 → 6 → 3 → 0 fout).

## Tellingen per vak

"Nagekeken" = alle meerkeuzevragen in de bestanden van dat vak (ronde 2 liep over alles). "Niet gewijzigd" = al goed of vals alarm. Twijfelpunten = aantal genummerde punten in de groepsverslagen (sommige komen in meerdere rondes terug).

| vak | paden | nagekeken | hersteld | waarvan opties | waarvan alleen hints/uitleg | niet gewijzigd | twijfelpunten |
|---|---|---|---|---|---|---|---|
| aardrijkskunde | 11 | 300 | 288 | 246 | 42 | 12 | 25 |
| biologie | 12 | 327 | 295 | 215 | 80 | 32 | 17 |
| economie (pincode, beco, bedrijfseconomie) | 16 | 534 | 505 | 436 | 69 | 29 | 42 |
| geschiedenis | 15 | 388 | 370 | 281 | 89 | 18 | 27 |
| informatica | 9 | 181 | 167 | 164 | 3 | 14 | 8 |
| maatschappijleer + filosofie | 8 | 209 | 206 | 180 | 26 | 3 | 15 |
| natuurkunde | 11 | 291 | 268 | 151 | 117 | 23 | 6 |
| nederlands | 13 | 355 | 320 | 162 | 158 | 35 | 6+ |
| scheikunde + kunst | 9 | 217 | 200 | 120 | 80 | 17 | 14 |
| talen (Engels, Frans, Duits, Latijn, Grieks) | 20 | 565 | 490 | 214 | 276 | 75 | 22 |
| wiskunde | 33 | 1.038 | 630 | 193 | 437 | 408 | 21 |
| overige 5 paden zonder kandidaten | 5 | 215 | 82 | 27 | 55 | 133 | 3 |
| examenpaden (alleen hints/uitleg/aantekeningen) | 48 | 286 | 136 | 0 | 136 | 150 | 27 |
| **totaal** | **210** | **4.906** | **3.957** | **2.389** | **1.568** | **949** | **~233** |

Per groep met per ronde de tellingen (nagekeken / hersteld / vals alarm / twijfel): `docs/audit/weggevers/vo/verslag-<groep>.md`.

**Per herstelde vraag één regel oud → nieuw:** staat in de bijlage `docs/audit/weggevers/VERSLAG-vo-wijzigingen.md` (3.957 regels, gegenereerd uit de verschillen met main via `scripts/audit/wijzigingen-lijst.mjs`; te groot om hier in te voegen).

## Eindmeting (stap 5)

`node scripts/audit/steekproef.mjs 20261020 200 . --leerpaden --json docs/audit/eindmeting-vo/steekproef.json` — pool 11.709, 200 checks, vier onafhankelijke nakijkers van 50 (`deel-A..D.json` → `oordeel-A..D.json`), dezelfde maatstaf als 13 okt: eerst zelf oplossen, dan fout / dubbelzinnig / twijfel / goed. Niveau: "middelbaar" = paden uit de groepen van deze ronde + examenpaden; "basisschool" = de rest.

| | beoordeeld | fout | dubbelzinnig | fout + dubbelzinnig | twijfel (telt niet) | goed |
|---|---|---|---|---|---|---|
| Basisschool | 116 | 11 | 0 | 11 = **9,5%** | 24 | 81 |
| Middelbaar + examens | 84 | 2 | 1 | 3 = **3,6%** | 4 | 77 |
| **Totaal** | 200 | 13 | 1 | 14 = **7,0%** | 28 | 158 |

Bij alle 200 kozen de nakijkers zelf hetzelfde antwoord als het gemarkeerde: **0 verkeerd gemarkeerde antwoorden**.

**Middelbaar — fout/dubbelzinnig:**
| nr | plek | oordeel | reden | actie |
|---|---|---|---|---|
| 2 | atmosfeer-klimaat-havo-vwo stap 2 vraag 1 | fout | spelfout "zee-niveau" in de vraagtekst | `q` mag niet veranderen → Twijfel voor Mark |
| 23 | cse-schrijfvaardigheid-engels stap 2 vraag 1 | fout | "Welke aanhef voor vriend?" mist lidwoord | `q` → Twijfel voor Mark |
| 83 | klimaatverandering-aardrijkskunde stap 1 vraag 4 | dubbelzinnig | afleider "kronieken, scheepslogboeken, rotstekeningen" is ook een (historische) klimaatbron | **hersteld**: afleider → "Weermodellen, supercomputers en simulaties" + hint |

Beide resterende fouten zitten in de vraagtekst zelf: met toestemming om `q` te verbeteren (alleen taal, niet inhoud) zou de middelbare school op 1/84 uitkomen.

**Basisschool-vondsten** (buiten deze opdracht, niet aangeraakt): #9 bekende-boeken-literatuur-po 2.3 (hint "Wel." bij foute optie), #10 bekende-nederlanders-po 2.4 (telegramvraag, Sven Kramer verdedigbaar), #15 brief-email-lezen-po 1.6 ("nooit" in alle afleiders), #30 digitale-geletterdheid-po 3.4 (enige gematigde optie), #44 doorstroomtoets-studievaardigheden-g8 4.18 (antwoord in de vraag), #76 kaartlezen-po 5.19 (2,5 km = 2.500 m), #81 klassieke-muziek-po 3.3 (absurde afleiders), #87 kritisch-denken-po 1.1 (absolute woorden), #115 negatieve-getallen-po 5.24 (hint past niet), #154 schemas-stappenplannen-po 5.19 (hints samen = volgorde), #190 werkwoord-tijden-po 5.14 (antwoord tussen haakjes in de vraag). Patroon: dezelfde soort weggevers als op de middelbare school (absolute woorden, absurde afleiders, hints die samen het antwoord vastleggen) — de lossere tweede scan + blinde detectie zou hier ook werken.

## Twijfel voor Mark — de belangrijkste

Volledige lijst per groep staat onderaan. De meeste twijfelpunten zijn één van deze soorten:

1. **Het antwoord staat in de vraagtekst** (`q` mocht niet veranderen): o.a. "trias" → 3, "dualisme" → twee, "Wet van Behoud van Massa", "gele citroen" → geel, "60 km in 1 uur", IJssel → IJsselmeer, Constantijn → Constantinopel, "Concluderend", "zorgverzekering" → zorgtoeslag, "huur" → huurtoeslag. Oplossing: vraagtekst herschrijven.
2. **Taalfouten in de vraagtekst**: "Winst & Verliesrekening", "Pigouvian-belasting", "Stabiliteits- en Groei Pact", "Weber's/Durkheim's/Bourdieu's", "Welke is geen media", "aardingdraad", "Oplos:", "simplificeren", "Inclosure Acts", "zee-niveau", "voor vriend", "elke uur", telegramstijl ("Wanneer Beurskrach Wall Street?", "Wat is doel van een betoog").
3. **Feitelijk te controleren** (antwoord niet gewijzigd): garantie "minimaal 2 jaar" (NL kent geen vaste termijn); Tokio vs. Jakarta grootste metropool (VN 2025); productiviteit "€60 per uur" (nu eerder €70–80); ECB-reserve 5% vs. 1%; conjunctuurgolf "7–10 jaar"; Guterres "huidige" SG (termijn tot 31-12-2026); "huidige (2025)" Bundeskanzler; Indonesië 1945 (uitroeping) vs. 1949 (erkenning); Japan 15 aug vs. 2 sept; Klimaatakkoord 49% vs. Klimaatwet 55%; Groningen gas 2023/2024; aangiftebereidheid "sterk gedaald"; CSE Frans eentalig woordenboek; Brunelleschi als schilder (was architect).
4. **Examenpaden** (authentiek, niets aan vraag/opties veranderd): examen-biologie-2025-t2 vraag 15 (meerling-kans) lijkt verminkt — de vraag past niet bij de bron en "1%" is maar bij benadering juist (echt ~1,6%); in geschiedenis 2022 T1/T2, 2023 T2, 2025 T1/T2 ontbreken bronnen of grafieken waarnaar de vraag verwijst; examen-engels-2022-t2 stap 3 en examen-maatschappijkunde-2022-t2 stap 1/6: bron past niet bij de vraag; de Nederlands-bronteksten zijn samenvattingen, geen originele tekst; enkele weggehaalde zinnen in bronteksten (Maatschappijkunde 2023 T2 T9, Engels 2024 T1) graag naast het origineel leggen.
5. **Goede optie inhoudelijk anders verwoord** (zelfde index, zelfde betekenis of bewust anders — graag even akkoord): algoritmen-pseudocode 1.2 ("Het mag eindeloos doorgaan" → "Het staat in een programmeertaal", omdat "Het is eindig" het antwoord weggaf); talen Hamlet-vraag (ander Hamlet-citaat, omdat "To be or not to be" al eerder in het pad staat); mensenrechten-vn 1.5 (GEEN UDHR-recht: nu "Recht op schoon milieu"); cse-leesvaardigheid-engels 4.3; cel-biologie 6.2 ("Bladcel van een plant"); schatten 612 ÷ 7 (goede optie nu ~90 via 630 ÷ 7).
6. **Strikvraag mol-stoichiometrie 5.1** ("hoeveel mol H₂ bij verbranding van methaan" → 0 mol) is bewust; liever een rekensom met H₂O, dan moet `answer` mee.
7. **Spelling 4.1**: "Strikvraag over ei/ij" bij het woord melk — vraag past niet bij de lesstof; voorstel in het verslag van nederlands.

## Nieuwe/gewijzigde scripts

- `scripts/audit/vergelijk-met-main.mjs` — controle answer/q/aantal opties/stappen t.o.v. main (ook .jsx, ook examen-opties/examenBron); `--alleen a.js,b.js`.
- `scripts/audit/wijzigingen-lijst.mjs` — genereert de oud → nieuw-bijlage.

## Twijfel voor Mark — volledige lijst per groep

### aardrijkskunde-1

*Twijfel voor Mark*

1. **nederland-water-vo** stap 5 vraag 2 — "Welke rivier geeft het IJsselmeer zijn naam?": het antwoord (IJssel) staat in de vraag. Alleen de hints zijn herschreven, de vraag is niet aangepast.
2. **klimaatverandering-aardrijkskunde** stap 4 vraag 2 — "NL klimaatakkoord doel 2030: 49% minder CO₂" klopt voor het Klimaatakkoord van 2019, maar de Klimaatwet is inmiddels aangescherpt tot 55%. Antwoord niet gewijzigd. Moet de vraag "Klimaatakkoord 2019" noemen of naar 55% gaan?
3. **klimaten-aardrijkskunde** stap 10 vraag 6 en **wereld-globalisering-havo-vwo** stap 5 vraag 5 — de vraag geeft het antwoord bijna weg ("klimaatzones Köppen" → "indeling van klimaten"; "Sustainable Development Goals" → "doelen voor duurzame ontwikkeling"). De foute opties zijn geloofwaardiger gemaakt, maar de vraag zelf is niet aangepast.
4. **nederland-water-vo** stap 3 vraag 3 — Johan van Veen heet in de bronnen vooral "vader van het Deltaplan". "Hoofdontwerper van de Deltawerken" is wat ruim. Antwoord niet gewijzigd.
5. **klimaatverandering-aardrijkskunde** stap 4 vraag 3 — Groningen: de gaswinning stopte feitelijk op 1 oktober 2023, de wet volgde in 2024. "2024" is te verdedigen. De afleider "Nooit" is vervangen door "2030".

*Twijfel voor Mark (ronde 2)*

1. **nederland-water-vo** stap 5 vraag 2 — het antwoord (IJssel) staat in de vraag ("Welke rivier geeft het IJsselmeer zijn naam?"). De vraag is niet aangepast.
2. **klimaten-aardrijkskunde** stap 10 vraag 6 en **wereld-globalisering-havo-vwo** stap 5 vraag 5 — de vraag verklapt het antwoord ("klimaatzones Köppen" → "indeling van klimaten"; "Sustainable Development Goals" → "doelen voor duurzame ontwikkeling"). Niet aangepast.
3. **klimaatverandering-aardrijkskunde** stap 4 vraag 2 en **nederland-water-vo** stap 4 vraag 5 — 49% in 2030 klopt voor het Klimaatakkoord van 2019; de Klimaatwet zegt inmiddels 55%. De vraag in nederland-water noemt 2019 wel, die in klimaatverandering niet.
4. **nederland-water-vo** stap 3 vraag 3 — Johan van Veen heet in de bronnen vooral 'vader van het Deltaplan'; 'hoofdontwerper van de Deltawerken' is wat ruim.
5. **klimaatverandering-aardrijkskunde** stap 4 vraag 3 — Groningen: de gaswinning stopte feitelijk op 1 oktober 2023, de wet volgde in 2024. '2024' is te verdedigen; afleider 2018 (het jaar van het besluit) is gekozen zodat er geen 2023-optie naast staat.
6. **klimaten-aardrijkskunde** stap 10 vraag 14 — "Welk gas is hoofd-broeikasgas?" → CO₂. Strikt genomen is waterdamp het grootste broeikasgas; CO₂ is het belangrijkste broeikasgas dóór de mens. Voorstel: "door de mens" aan de vraag toevoegen (zoals in klimaatverandering stap 2 vraag 2).
7. **platentektoniek-aardrijkskunde** stap 7 vraag 2 — "7,0 is 10× sterker dan 6,0" klopt voor de uitslag (amplitude); in energie is het ~32×. Overweeg "10× grotere uitslag" in de vraag.
8. Dubbele vragen binnen een pad: klimaatverandering stap 3 vraag 1 = stap 6 vraag 4 (kantelpunt), stap 1 vraag 1 ≈ stap 6 vraag 1 (weer/klimaat); klimaten stap 5 vraag 1 ≈ stap 10 vraag 8 (klimaat NL) en stap 10 vraag 5 ≈ stap 10 vraag 17 (moesson). De afleiders zijn waar mogelijk verschillend gemaakt, de vragen zelf staan er nog dubbel in.

*Twijfel voor Mark*

- globalisering stap 4 vraag 3 (**brain drain**): de Engelse term vertaalt zich in het antwoord; hints herschreven zodat ze 'drain' niet meer voorzeggen.
- klimaten stap 10 vraag 10/11/12 (woestijn = droog, thermometer, Sahara = woestijn): eindtoets-basisvragen, bewust laag niveau; met lesstof-afleiders niet moeilijker te maken zonder twee goede antwoorden (bv. "heet" bij woestijn).
- nederlandWater stap 5 vraag 2 (IJssel → IJsselmeer): antwoord staat in `q`.
- wereld stap 1 vraag 5: `q` "Welk **antiglobalisering**-fenomeen?" is geen goede zin (voorstel: "Welk verschijnsel past bij antiglobalisering?"); `q` mag ik niet wijzigen.
- wereld stap 3 vraag 2 (resource curse, "paradox" in `q`) en stap 5 vraag 5 (SDG voluit in `q`): antwoord volgt uit de vraag; hints bij stap 5 vraag 5 zeggen niet meer "waar staat de D/S voor".


### aardrijkskunde-2

*Twijfel voor Mark*

1. **aardobservatie-risico-havo-vwo** stap 3 vraag 2 — "Polaire-baansatelliet bedekt de hele aarde in: een paar dagen". Hoe snel dat gaat hangt af van hoe breed de satelliet kijkt (brede sensoren: ongeveer 1 dag, Sentinel-2: ongeveer 5 dagen). Het antwoord is als richtgetal goed te verdedigen; de stro-afleider "Nooit" is vervangen door "Een paar maanden".
2. **stedelijke-ontwikkeling-havo-vwo** stap 4 vraag 1 (hitte-eiland) — de afleider "Alleen 's nachts warmer" is blijven staan. Het effect is juist 's nachts het sterkst, dus een sterke leerling kan twijfelen. De hint zegt nu dat het 's nachts het sterkst is, maar overdag niet weg is.

*Twijfel voor Mark (ronde 2)*

1. **stedelijke-ontwikkeling-havo-vwo** stap 3 vraag 3 — "grootste metropolitan area = Tokyo-Yokohama". Volgens de klassieke telling klopt dat, maar het VN-rapport World Urbanization Prospects 2025 gebruikt een nieuwe definitie en zet Jakarta op 1 (Dhaka 2, Tokio 3). Voorstel: in de vraag "(klassieke telling)" toevoegen of de vraag herschrijven. `q`/`answer` niet zelf aangepast.
2. **aardobservatie-risico-havo-vwo** stap 3 vraag 2 — polaire satelliet "een paar dagen": blijft staan uit ronde 1 (hangt af van de breedte van de sensor).
3. **energie-hulpbronnen-havo-vwo** stap 2 vraag 1 — "goedkoopste bron 2024 = zon": verdedigbaar, maar windenergie op land zit in dezelfde prijsklasse. Wind staat niet bij de opties, dus de vraag is niet dubbelzinnig, alleen de stelligheid.
4. Begripsvragen waarbij de term het antwoord al prijsgeeft (nature-based → mangroves, push/pull-factor, verstedelijking, krimpregio, heat-island): afleiders zijn waar nodig verbeterd, maar wie Engels/het woord kent, ziet het antwoord. Dat zit in de vraag (`q`), die niet gewijzigd mag worden.

*Twijfel voor Mark*

- stedelijkeOntwikkelingHavoVwo.js stap 3 vraag 3: het antwoord is "Tokyo-Yokohama", maar de VN (World Urbanization Prospects 2025) noemt met een nieuwe definitie Jakarta het grootste stedelijke gebied. `answer` mag niet veranderen. Mogelijke keuzes: de vraag aanpassen ("volgens de oude VN-telling") of Jakarta als afleider vermijden (staat er nu niet in).


### biologie-1

*Twijfel voor Mark*

1. **zenuwstelsel-hormonen-havo-vwo** stap 5 vraag 4: de vraagtekst "Welk type terugkoppeling is bevalling (weeën versterken zichzelf)?" geeft het antwoord (positief) al bijna weg via "versterken zichzelf". De vraag `q` is niet aangepast. Alleen de hints zijn herschreven.
2. **ecosystemen-biologie** stap 3 vraag 4 (Yellowstone): de goede optie had een taalfout ("ecosysteem verstoort"). Die is verbeterd naar "Herten worden te talrijk, het ecosysteem raakt verstoord". De inhoud is gelijk gebleven, maar het is wel een wijziging in de goede optie.

*Twijfel voor Mark (ronde 2)*

1. **zenuwstelsel-hormonen-havo-vwo** stap 5 vraag 4: de vraagtekst "(weeën versterken zichzelf)" verklapt nog steeds "positief". `q` niet aangepast (al gemeld in ronde 1). Afleider "Hormoonloos" is wel vervangen door "Homeostase".
2. **mens-biologie-vmbo** stap 5 vraag 1: het goede antwoord is "in de nierschors en het niermerg". Strikt genomen gebeurt de filtratie (voorurine) in de nierschors (nierkapsels); in het merg wordt vooral water teruggenomen. Het antwoord is niet gewijzigd. Overweeg de vraag of de optie te herformuleren ("waar liggen de nefronen?").
3. **genetica-erfelijkheid-biologie** stap 9 vraag 8 en 9 (hoofdletter/kleine letter): de afleiders "Cijfer (1)" en "Griekse letter (α)" zijn zwak, maar er is geen echte verwisseling uit de stof beschikbaar behalve de omkering, die al optie 2 is. Laten staan.


### biologie-2

*Twijfel voor Mark*

1. **evolutie-havo-vwo** stap 4 vraag 4 (mens en chimpansee delen ~98,8% DNA): de foute opties waren ronde getallen (80/50/10%), terwijl alleen het goede antwoord een decimaal had. Ze zijn nu ~88,5%, ~75,2% en ~51,6%. Dat zijn bedachte afleiders. De hint bij 88,5% noemt "met een muis delen we al ongeveer 85%". Dat cijfer wordt vaak genoemd, maar het geldt alleen voor de eiwitcoderende genen.
2. **genetica-havo-vwo** stap 4 vraag 1 (2 gezonde ouders, aangedaan kind → "Recessief"): het antwoord klopt. Maar "Geslachtsgebonden" (X-gebonden recessief) is met deze stamboom ook niet uit te sluiten. De oude hint zei "kan autosomaal recessief zijn" en verraadde daarmee het antwoord. De nieuwe hint vraagt of je uit één familie al weet of het gen op het X-chromosoom ligt. De vraag zelf is niet veranderd.
3. **hart-bloed-ademhaling-havo-vwo** stap 2 vraag 2 ("Aderen hebben kleppen vooral in: Benen / Hoofd / Slagaders / Haarvaten"): de opties mengen lichaamsdelen en soorten bloedvaten. Alleen de hints zijn herschreven, de opties staan er nog zo in. Zijn opties met lichaamsdelen gewenst? Let op: ook aderen in de armen hebben kleppen.
4. **fotosynthese-biologie** stap 4 vraag 2 (meeste zuurstof → algen en plankton in de oceanen): de afleider "Alle tropische bossen op het land" is fout zolang je de oceanen als grootste bron rekent (ongeveer de helft van alle zuurstof). De schattingen lopen uiteen, maar het oorspronkelijke antwoord gaat hier ook van uit.

*Twijfel voor Mark (ronde 2)*

1. **genetica-havo-vwo** stap 4 vraag 1 (2 gezonde ouders, aangedaan kind → "Recessief"): staat nog open uit ronde 1. "Geslachtsgebonden" (X-gebonden recessief) is met alleen deze gegevens niet uit te sluiten. De vraag zelf is niet veranderd. Het zou helpen als in de vraag stond dat het aangedane kind een dochter is.
2. **fotosynthese-biologie** stap 4 vraag 2 (meeste zuurstof → algen en plankton in de oceanen): staat ook nog open uit ronde 1. Of "Alle tropische bossen op het land" fout is, hangt af van welke schatting je volgt. De gangbare lesstof (oceanen ≈ de helft) ondersteunt het antwoord.
3. **cel-biologie** stap 6 vraag 2 (welke cel heeft chloroplasten?): de goede optie was "Plantcel" tussen drie dierlijke cellen, en daarmee een weggever. Hij is nu "Bladcel van een plant" en staat naast "Wortelcel van een plant", "Spiercel van een dier" en "Bacteriecel". Dat is inhoudelijk preciezer: wortelcellen hebben geen bladgroenkorrels. De uitlegPad-niveaus zijn daarop aangepast. Graag even akkoord, omdat de tekst van de goede optie hier veranderd is.

*Twijfel voor Mark*

- celBiologie 10/1 ("hoeveel cellen na één celdeling" → 2): het antwoord volgt uit het woord "deling"; zonder q te wijzigen niet te verhelpen.
- fotosyntheseBiologie 3/2 (chlorofyl weerkaatst groen): ieder kind ziet groene bladeren; onvermijdelijk.
- ecosystemenHavoVwo 5/2: taalfout zit in `q` ("Een dier-pop." → "Een dierpopulatie"); q niet gewijzigd.
- ecosystemenHavoVwo 1/5: taalfout zit in `q` ("zit aan top van piramide" → "aan de top van de piramide"); q niet gewijzigd.
- Restrisico na herstel: celBiologie 5/2 (hartspiercel blijft met gezond verstand te kiezen, "hart werkt altijd"), fotosynthese 6/3 (chloro-fyl/chloro-plasten; Chromoplasten als afleider toegevoegd), hart 2/3 (120/80 algemeen bekend), hart 5/4 (woord "Defibrillator" bekend).


### economie-1

*Twijfel voor Mark*

1. **moederbedrijf-overname-sonac-beco** stap 4 vraag 1 — de opties zijn echte bedrijfsnamen. "Vion" → "Vion Food Group" en "Smits" → "Smits Vuren BV" (beide staan zo in de lesstof). "Sovion" is kort gebleven omdat de volledige rechtsvorm niet in de bron staat. "Darling Ingredients" blijft daardoor iets langer dan de rest. Is dat acceptabel, of liever "Sovion Food" o.i.d. na controle?
2. **bbp-conjunctuur-economie** stap 2 vraag 2 (recessie) — de afleiders "1 jaar negatief" en "BBP onder 0" zijn vervangen door "2 kwartalen stijgende werkloosheid" en "2 kwartalen stijgende inflatie". Reden: "een heel jaar negatieve groei" is geen fout beeld van een recessie, alleen een strengere definitie, en dat kon als tweede goed antwoord gelezen worden.
3. **pincode-werk-arbeidsmarkt** stap 7 vraag 2 (AOW) — goed antwoord "Iedereen vanaf de pensioenleeftijd" is een vereenvoudiging: de hoogte hangt af van de jaren dat je in Nederland woonde. Niet gewijzigd; afleider 4 is nu "Alleen wie een laag inkomen heeft" (inkomensafhankelijk = fout).

*Twijfel voor Mark (ronde 2)*

1. **balans-beco** stap 10 vraag 12 — de vraag "Balanstotaal **links = rechts** moet altijd ___?" noemt het antwoord ("Gelijk zijn") al in de vraag. `q` niet gewijzigd; voorstel: "Wat geldt altijd voor de balanstotalen links en rechts?".
2. **bbp-conjunctuur-economie** stap 6 vraag 13 — "Een **stijgende lijn** op de BBP-grafiek wijst op?" is met gezond verstand op te lossen (stijgend = groei). Afleider "Krimp van de economie" vervangen door "Stijgende inflatie", maar de vraag zelf blijft makkelijk.
3. **pincode-werk-arbeidsmarkt** stap 4 vraag 1 — afleiders "Net zoveel" en "Het maakt niet uit" zeggen bijna hetzelfde. Geen eenduidig foute derde richting gevonden (bv. "vooral jongere" kan juist waar zijn); alleen de hint is verbeterd.
4. **pincode-geld-sparen-lenen** stap 5 vraag 7 — het goede antwoord "Bank houdt ~5% (€50) als reserve" is een schoolvoorbeeld; de verplichte ECB-reserve is 1%. Niet gewijzigd.
5. **pincode-werk-arbeidsmarkt** stap 6 vraag 4 — "€60 per gewerkt uur" ligt aan de lage kant (BBP ÷ gewerkte uren is voor NL nu eerder €70-80). Niet gewijzigd; mogelijk "ongeveer €70" of de vraag dateren.
6. **bbp-conjunctuur-economie** stap 6 vraag 19 — "7-10 jaar" voor een conjunctuurgolf: methodes noemen vaak 4-8 jaar. Afleiders zijn zo gekozen (1-2 jaar, 25-30 jaar, 3-6 maanden) dat beide lezingen kloppen, maar het goede getal is het checken waard.

*Twijfel voor Mark*

- balansBeco 10.12 — het antwoord ("gelijk zijn") staat in `q` ("links = rechts"); niet te herstellen zonder `q` te wijzigen.
- balansBeco 10.14 — `q` schrijft "Winst & Verliesrekening"; moet "winst-en-verliesrekening" zijn (q niet gewijzigd).
- bbpConjunctuurEconomie 3.4 en pincodeGeldSparenLenen 6.5 — "hyper" in `q` verklapt "extreem"; alleen de hints herschreven zodat ze 'hyper' niet meer uitleggen.
- cryptoBlockchainGeldBeco 6.1 en (deels) geld 4.4 — gedrags-/oplichtingsvraag: wie gezond verstand gebruikt kiest "niet doen"; afleiders zijn al verstandig klinkend, verder forceren heeft geen zin.
- pincodeGeldSparenLenen 1.3 (ruilhandel) — elke geloofwaardige afleider is óók een echt nadeel van ruilhandel (waarde bepalen, bewaren, opdelen); bank/btw-afleiders blijven daardoor zwak. Voorstel: vraag ombouwen naar "welk nadeel lost geld op als ruilmiddel?".
- pincodeGeldSparenLenen 9.2 — onderpand = het huis staat letterlijk in `q` van 8.1 ("huis als onderpand"); lek via de vraagtekst, niet via opties.
- pincodeGeldSparenLenen 5.7 — `q` "Stort jij €1.000 op de bank." is onnatuurlijk; beter "Je stort €1.000 op de bank." (q niet gewijzigd).
- pincodeWerkArbeidsmarkt 2.5 — "wederzijds" in `q` verklapt "samen"; hints herschreven zodat ze 'wederzijds' niet meer vertalen.
- pincodeWerkArbeidsmarkt 6.4 — antwoord + lesstof zeggen ~€60 per gewerkt uur; actuele cijfers (CBS/OECD) liggen eerder rond €75-80. Feit laten checken en dan antwoord + stap-6-tekst samen bijwerken. Afleider "Niet meetbaar" → "€35 per uur" en de onjuiste hint "€25 ligt iets boven het minimumloon" zijn al hersteld.


### economie-2

*Twijfel voor Mark (ronde 2)*

1. **pincode-buitenland-eu** stap 6 vraag 2 (en stap 5 vraag 2) — "Shell" als dé Nederlandse multinational: Shell heeft sinds 2022 zijn hoofdkantoor in Londen (Shell plc), Unilever sinds 2020 ook. De uitlegPad noemt dit zelf. Voorstel: goede optie vervangen door Philips/ASML/Heineken/Ahold Delhaize en de uitlegPad herschrijven; niet zelf gedaan omdat de hele uitleg om Shell draait.
2. **pincode-ondernemen** stap 6 vraag 6 — "Bij welke marktvorm is vergelijken het meest waardevol? → Oligopolie" is discutabel: bij monopolistische concurrentie (veel merken, verschillende prijzen) loont vergelijken minstens zo veel. Vraag ongewijzigd gelaten.
3. **pincode-buitenland-eu** stap 2 vraag 4 en **pincode-belasting** stap 5 vraag 1 — het antwoord zit in de vraag: "globale handelsregels" → "WTO (Wereldhandelsorganisatie)", "zorgverzekering" → "Zorgtoeslag". Alleen de vraagtekst kan dit oplossen (niet zelf gewijzigd); hints wel verbeterd.
4. **rechtsvormen-overzicht** stap 3 vraag 3 — de goede optie "Geen minimum" is de enige die niet met "Minimaal" begint. Afleider "€1 miljoen" vervangen door het oude BV-minimum €18.000; de goede optie bewust gelaten omdat de uitlegPad op "geen minimum" leunt.
5. **pincode-ondernemen** stap 7 vraag 5 — omslagpunt eenmanszaak → BV "ongeveer €100.000 winst": door de verlaagde zelfstandigenaftrek noemen adviseurs nu vaak een hoger bedrag. Laten staan; graag even laten checken.


### economie-3

*Twijfel voor Mark*

1. **pincode-overheid** stap 6 vraag 3 — "Hoeveel garantie heb je op een product (in NL)? → Minimaal 2 jaar." In Nederland geldt geen vaste termijn: een product moet zo lang meegaan als je redelijkerwijs mag verwachten (2 jaar is het Europese minimum). Als vereenvoudiging is dat te verdedigen, en de antwoordindex is niet aangepast. Alleen de afleiders zijn gelijkgetrokken ("Minimaal 1 maand / 6 maanden / 5 jaar").
2. **pincode-ontwikkelingslanden** stap 1 vraag 6 — "BBP/hoofd onder $1.135/jaar": de Wereldbank gebruikt BNI (bruto nationaal inkomen) per hoofd, en die grens verandert elk jaar (2024: $1.145). Niet gewijzigd. Wel is de nieuwe afleider "$13.000" bewust gekozen in de buurt van de grens naar hoog-inkomen.

*Twijfel voor Mark (ronde 2)*

1. **pincode-inkomen-welvaart** stap 7 vraag 3 — het antwoord staat bijna in de vraag: "huur in een sociale woning" → "Huurtoeslag". Afleiders zijn verbeterd (o.a. "Kindgebonden budget"), maar de woordovereenkomst blijft. Voorstel: vraag herformuleren, bv. "Je woont in een sociale woning en verdient weinig. Welke toeslag helpt bij je woonlasten?" (dan staat "huur" er nog steeds niet letterlijk in) of een situatie zonder het woord huur.
2. **pincode-ontwikkelingslanden** stap 4 vraag 5 — "Wat is **Fair Trade**?": wie Engels kent, leest "fair" = eerlijk en kiest "Eerlijke prijs voor boeren". Afleiders zijn nu vrijhandel en biologisch, maar de naam blijft een weggever. Niet zelf aan `q` gekomen.
3. **pincode-overheid** stap 5 vraag 5 — "~3,7%" krimp in 2020: het CBS heeft de krimp later bijgesteld naar ongeveer 3,9%. Als afronding verdedigbaar; eventueel "~4%" van maken (antwoord-index blijft gelijk).

*Twijfel voor Mark*

- marktvormenHavoVwo stap 3 vraag 5: de vraag zegt "Pigouvian-belasting" (Engels). In het Nederlands is het "Pigou-belasting", maar `q` mocht niet veranderen. De opties zelf zijn in orde.
- marktvormenHavoVwo stap 4 vraag 3: in de vraag staat "Stabiliteits- en Groei Pact", dat moet "Stabiliteits- en Groeipact" zijn (`q`).
- marktvormenHavoVwo stap 5 vraag 5: de vraag vraagt naar een argument "vóór" ongelijkheid. Afleiders die ook argumenten vóór zijn, maken een tweede goed antwoord, dus dit is onvermijdelijk.
- pincodeInkomenWelvaart stap 2 vraag 1 (arbeid → loon) en stap 3 vraag 5 (primair inkomen = loon): het antwoord is alledaagse kennis. Bij vraag 5 is de kale AOW-hint vervangen.
- pincodeInkomenWelvaart stap 4 vraag 6: in de vraag moet het "het gemiddelde en het mediane inkomen" zijn (`q`).
- pincodeInkomenWelvaart stap 7 vraag 3: "huur" staat in de vraag en dus ook in het antwoord huurtoeslag. De hints zijn nu denkprikkels.
- pincodeInkomenWelvaart stap 7 vraag 4 (hersteld, maar let op): elke afleider heeft nu één fout onderdeel. Wie telt welk onderdeel het vaakst voorkomt, vindt het antwoord nog steeds.
- pincodeOntwikkelingslanden stap 2 vraag 2: in de vraag staat het meervoud "Welke landen" (`q`), en dat Finland bovenaan staat is algemeen bekend. Afleiders als Denemarken of IJsland zouden een tweede goed antwoord zijn.
- pincodeOntwikkelingslanden stap 1 vraag 5 (hersteld): in de vraag moet het "is een goede graadmeter" zijn (`q`).
- pincodeOntwikkelingslanden stap 4 vraag 2: de naam "Artsen zonder Grenzen" verraadt zelf de noodhulp. Het Rode Kruis of Unicef als afleider zou een tweede goed antwoord zijn.
- pincodeOntwikkelingslanden stap 6 vraag 4 (flexitariër) en vraagAanbodEconomie stap 9 vraag 9 (substituut): het woord in de vraag verraadt de betekenis.
- pincodeOverheid stap 2 vraag 4 (waterschap) en vraagAanbodEconomie stap 1 vraag 2 (vrager): het woord verraadt het antwoord. Alleen de kale hints zijn herschreven.
- pincodeOverheid stap 3 vraag 2: dat belastingen de grootste inkomstenbron zijn, is gezond verstand. Dat is onvermijdelijk.
- pincodeOverheid stap 6 vraag 3: "Minimaal 2 jaar" garantie is te stellig. De wet kent geen vaste termijn: een product moet zo lang meegaan als je redelijk mag verwachten. Mark kiest: de optie herformuleren of de vraag schrappen.


### examen-1

*Twijfel voor Mark*

1. **examen-nederlands-2024-t1** tekst 1 (Happisburgh): het weghalen van de aantekening was nodig, want die gaf het antwoord op vraag 9 (hoofdgedachte). Daardoor staat er in de brontekst nu niets meer over "eeuwenoud" of "gaat sneller". De vraag is daardoor nauwelijks te beantwoorden. Meer algemeen: de bronteksten van de Nederlands-paden zijn samenvattingen en geen originele teksten. Advies: neem de echte alinea's op, of verwijs naar de PDF.
2. **examen-nederlands-2022-t1** tekst 3 (taalcoach-advertentie): de brontekst is niet de advertentie zelf maar een beschrijving die wij hebben geschreven ("roept lezers op om taalvrijwilliger te worden"). Die noemt het antwoord op vraag 26 bijna letterlijk. Alleen de vetgedrukte delen en de aantekening "(Tekstsoort: …)" heb ik weggehaald. De beschrijving zelf heb ik laten staan.
3. **examen-maatschappijkunde-2022-t2** tekst 14: de zin "Politie gebruikt deze camera's na een misdrijf om verdachten op te sporen (gezichten, kleding, fietsen-modellen)" komt vrijwel zeker van ons en geeft het antwoord ("opsporingsmiddel"). Ik weet niet zeker of hij in het origineel staat, dus heb ik alleen de hoofdletters en de laatste, duidelijk toegevoegde zin weggehaald. Ook bij de andere bronteksten van dit pad heb ik toegevoegde zinnen weggehaald. Tekst 19 bevat daardoor alleen nog de aanleiding (Project X), en vraag 33 is los daarvan te beantwoorden.
4. **examen-maatschappijkunde-2025-t1** tekst 1 bevat de aantekening "(Eerste Kamer telt 75 leden + voorzitter = 75 stemmen …)". Die verklapt het antwoord niet, maar klopt inhoudelijk niet helemaal: de voorzitter is zelf een van de 75 leden. Ik heb hem niet aangepast.
5. **examen-engels-2024-t1** tekst 1: de zin "The result is otherworldly: relaxed, dreamlike, almost meditative." lijkt bijna woord voor woord op het goede antwoord bij vraag 2. Misschien hebben wij die zin toegevoegd, maar dat is niet zeker. Daarom heb ik hem niet aangepast.
6. **examen-engels-2024-t1**: de `chapters`-lijst noemt de hoofdstukken A t/m G over 26 stappen (from/to tot en met 25), maar het pad heeft maar 8 stappen. Dat valt buiten deze opdracht en is niet aangepast.

*Twijfel voor Mark*

1. **examen-engels-2022-t2** stap 3 (Anna Kessel, sports day): het goede antwoord staat bijna letterlijk als laatste zin in de brontekst ("Most children probably aren't even aware of this resistance to mixed competition"), en de drie foute opties (lange afstanden, taken passend bij leeftijd, slaap voor talentvolle kinderen) hebben niets met deze tekst te maken. Waarschijnlijk is de brontekst ingekort/aangevuld of horen de opties bij een andere tekst. Niet gewijzigd.
2. **examen-geschiedenis-2025-t2** stap 2: de vraag gaat over "de rechtszaken", maar er is geen bron die zegt welke rechtszaken. De uitleg vult zelf showprocessen (Stalin, Volksgerichtshof) in. Zonder de bron is het gemarkeerde antwoord niet te beredeneren. Niet gewijzigd.
3. **examen-maatschappijkunde-2022-t2** stap 1: de brontekst (SP blokkeert Over de Maas) heeft niets te maken met de vraag over klachten over Rijksambtenaren (Nationale ombudsman). Zelfde patroon als stap 6 (Project X-tekst bij een vraag over spreekrecht, al gemeld in ronde 1). Niet gewijzigd.
4. **examen-biologie-2025-t2** stap 1: het gemarkeerde antwoord 1% is het dichtst bij de werkelijkheid (rond 1,6% van de bevallingen), maar niet exact. Ook staat de vraagzin vóór de context ("Wat is de kans …? Er zijn genen die …"), wat op een verminkte volgorde lijkt. Uitleg is nu wel consistent (zie hieronder).


### examen-2

*Twijfel voor Mark*

1. **examenGeschiedenis2022T1** stap 2 (vraag 17): het gemarkeerde antwoord "terreur + strafkampen" past slecht bij bron 8. Die bron is een Hitlerjugend-herinnering (uniform, "de leider heeft altijd gelijk") en wijst eerder op indoctrinatie. Mogelijk is de verkeerde bron gekoppeld, of de vraagtekst te vrij overgenomen. Antwoord niet gewijzigd. Graag vergelijken met het correctievoorschrift.
2. **examenEconomie2023T1** stap 2 (vraag 13, importheffing): er is geen bron. De context (België heft een importheffing op Nederlandse boter) ontbreekt, dus de vraag is niet zelfstandig te beantwoorden.
3. **examenEngels2025T1** stap 1 (vraag 1): de vraagstam "Wat wordt duidelijk uit tekst 1?" sluit niet aan op de opties ("…ergens bent waar weinig kunstlicht is"). Het begin van de stam ontbreekt ("De kans dat je een UFO ziet is het grootst als je…"). q mag niet gewijzigd worden.
4. **examenEngels2025T1** stap 8 (vraag 12): de citaten in de opties "humans are exposed…" en "It's a huge message…" staan niet in de ingekorte brontekst.
5. **examenNederlands2022T2** stap 2 (vraag 7): de brontekst is een samenvatting zonder alinea 13. Het middel-doelverband is daaruit niet af te leiden.
6. **examenNederlands 2022T2/2023T2/2024T2/2025T2:** de bronteksten zijn samenvattingen of reconstructies (vetgedrukte alineanummers), geen letterlijke examentekst. Ik heb alleen de duidelijk toegevoegde aantekeningen weggehaald. Bij Ned2022T2 T2 heb ik het samenvattende woord "verklaringen" vervangen door "ideeën", omdat dat letterlijk het antwoord was.
7. **examenMaatschappijkunde2022T1** T10 (vraag 17): de brontekst noemt nog "riep de Europese Commissie op". Alleen de vetdruk is weggehaald. Ik weet niet zeker of de naam ook in het origineel stond; als dat niet zo is, geeft de bron het antwoord weg. T8 ("opgesteld in samenwerking met de minister-president en het kabinet") wijst ook richting het antwoord, maar lijkt authentiek. Niet gewijzigd.
8. **examenMaatschappijkunde2023T2** T9: de zinsdelen "op basis van iemand's positie in de samenleving" en de rechtsstaat-zin heb ik als eigen aanvulling beschouwd en weggehaald (ze gaven de definitie van klassenjustitie). Graag even naast het origineel leggen.
9. **Intro's van paden** noemen soms het antwoord, zoals Gesch2023T2 ("Conferentie München", "militarisme + indoctrinatie") en Maat2022T1/2025T2 ("noodweer", "morele verontwaardiging"). De q van Gesch2023T2 vraag 20 noemt zelf "(Hitler+Tsjechische kapperszaak + Britse leeuw)". Intro en q vallen buiten de velden die ik mocht aanpassen.
10. **examenGeschiedenis2023T1** stap 4 (vraag 42): de q zegt "Onder zijn presidentschap ging de Sovjet-Unie failliet" (Reagan). Dat klopt historisch niet precies: de Sovjet-Unie viel in 1991, onder Bush sr. q niet gewijzigd.

*Twijfel voor Mark (nieuw, niets aan gewijzigd)*

1. **examenBiologie2025T2** (meerling-vraag, gemeld door de coördinator): de q past niet bij de bron. Waarschijnlijk is de vraagtekst verminkt of hoort hij bij een andere bron. Graag naast het examen leggen.
2. **examenGeschiedenis2023T2** stap 1 (vraag 1): de q gaat over "de wet die Thorbecke al in 1844 wilde invoeren", en alle opties beginnen met "Thorbecke geeft aan dat…". De bron met Thorbeckes tekst ontbreekt, dus het antwoord is in de app niet te controleren.
3. **examenGeschiedenis2022T1** stap 4 (vraag 30): bron 15 (jeugdboeken over WO2, met een eigen samenvattende aantekening) heeft niets met de q over de Hongerwinter te maken. Het antwoord kan alleen uit kennis komen. Stap 1 (vraag 3) verwijst naar "de grafiek", maar die grafiek ontbreekt.
4. **examenGeschiedenis2022T2** stap 4 (vraag 19): de q zegt "In de bron …", maar er is geen bron gekoppeld. Het antwoord is wel uit kennis te geven.
5. **examenGeschiedenis2025T1** stap 4 (vraag 35): de opties beginnen met "kregen… / kwam… / leidde… / werd…". Het begin van de vraagstam ontbreekt dus (iets als "Onder Stalin …"). Bij stap 5 (vraag 34) ontbreekt de bron over het voorstel van de Franse minister (Schuman, 1950).
6. **examenEngels2022T1** stap 2 (vraag 6): het antwoord noemt "Great Britain", maar de ingekorte bron zegt alleen "many other Western countries". Groot-Brittannië volgt alleen indirect uit het Britse onderzoek (Open University, 8:30). Waarschijnlijk staat het verband in het weggelaten deel van de tekst.
7. Nog steeds open uit ronde 1: twijfel 1 (Gesch2022T1 vraag 17). De hints zijn nu neutraal gemaakt ("wat betekent elk begrip precies?"), zodat ze de leerling niet meer naar het mogelijk foute antwoord sturen.


### geschiedenis-1

*Twijfel voor Mark*

1. **gouden-eeuw-geschiedenis** stap 3 vraag 4 — "Waarom waren Amsterdamse huizen smal en hoog? → Belasting was op breedte." Dit is een populaire verklaring, maar historici noemen vooral de hoge grondprijs en smalle kavels langs de grachten; de belasting-op-gevelbreedte is deels een mythe. Antwoord niet gewijzigd; alleen de afleiders zijn gelijkgetrokken.
2. **tachtigjarige-oorlog-geschiedenis** stap 5 vraag 2 — "Wat krijgen Leidenaars op 3 oktober te eten? → Haring en wittebrood." Klopt, maar hutspot is minstens zo bekend en staat niet tussen de opties; daardoor is het nu ondubbelzinnig. Alleen ter info: overweeg de vraag "welk gerecht wordt op 3 oktober uitgedeeld" of hutspot als tweede vraag.

*Twijfel voor Mark (ronde 2)*

1. **romeinen-geschiedenis** stap 3 vraag 4 — "Waarheen verplaatste Constantijn de hoofdstad? → Naar Constantinopel": de naam in de vraag verklapt het antwoord. Vraag niet gewijzigd; mogelijke oplossing is "Byzantium" als antwoord of de vraag zonder naam stellen.
2. **verlichting-revoluties-havo-vwo** stap 1 vraag 2 tegenover stap 5 vraag 4 — de vraag "Montesquieu's bijdrage → Trias politica" geeft het antwoord op "Trias politica afkomstig van: → Montesquieu". Het is een herhaling, maar het lek zit in de vraagtekst.
3. **kolonie-indonesie** stap 1 vraag 4 — "Hoe heette de kolonie officieel? → Nederlands-Indië": de vraag direct erna (S1V5, "hoofdstad van Nederlands-Indië") en S3V1 noemen de naam al in de vraagtekst.
4. **gouden-eeuw-geschiedenis** stap 4 vraag 2 — de vraag schetst "Afrika→Amerika→Europa→Afrika", dus drie hoeken; daarmee is "Driehoekshandel" zonder lesstof te raden. De afleiders zijn nu echte handelsnamen (moedernegotie, specerijroute, Zijderoute), maar de vraagtekst blijft sturen.
5. **industriele-revolutie-havo-vwo** stap 2 vraag 5 — "Spinning Jenny" verraadt via "spinning" de sector textiel; inherent aan de vraag.
6. **kolonie-indonesie** stap 3 vraag 5 — "Effect van de Japanse bezetting op het koloniale prestige → Sterk verzwakt" is met gezond verstand te raden (een nederlaag verzwakt aanzien). Moeilijk op te lossen zonder de vraag te wijzigen.

*Twijfel voor Mark*

- **q-taal (q mag niet wijzigen):** goudenEeuw S2V3 "Wat handelde VOC vooral?" → "Waarin handelde de VOC vooral?"; industrieleRevolutie S1V2 "Inclosure Acts" → "Enclosure Acts" (hint noemt nu beide spellingen); verlichting S1V4/S2V1/S3V2/S4V2 telegramstijl ("Wanneer Onafhankelijkheidsverklaring VS?").
- **goudenEeuw S5V4** "Wanneer werd Indonesië onafhankelijk?" antwoord 1945 (uitgeroepen); erkenning door NL was 27-12-1949. Hint bij 1962 vraagt nu naar het uitroepen; q zou "uitgeroepen" moeten noemen.
- **kolonie S3V4** capitulatie Japan 15 aug (aankondiging); formele ondertekening 2 sept 1945 staat al in het uitlegPad. Geen 2 sept-optie, dus geen twee-goed.
- **kolonie S1V4** "officiële naam" — de volgende q noemt "Nederlands-Indië" letterlijk (lek via q, niet te dichten zonder q-wijziging).
- **kolonie S4V5** excuses 2020 "staatshoofd" — in 2020 was alleen Willem-Alexander staatshoofd; inherent aan de q.


### geschiedenis-2

*Twijfel voor Mark*

1. **twintigste-eeuw-havo-vwo** stap 1 vraag 1 — het goede antwoord "Duitsland is alleen schuldig aan WO1" vereenvoudigt artikel 231: daarin staan Duitsland *en zijn bondgenoten* als verantwoordelijk. Voor de lesstof gangbaar, maar strikt genomen niet letterlijk. Niet gewijzigd.
2. **staatsinrichting-1848** stap 3 vraag 3 — "Rechters worden benoemd voor het leven" klopt formeel, maar ze gaan op hun 70e met ontslag. Het antwoord is niet gewijzigd. De hint bij "Tot 65 jaar precies" noemt die 70 nu als denkprikkel en zegt het antwoord niet meer letterlijk.

*Twijfel voor Mark (ronde 2)*

1. **staatsinrichting-1848** stap 1 vraag 3 — de vraag gaat over "de grondwetsherziening" in een pad dat '1848' heet; wie dat ziet, kiest "1848 — revolutiejaar" zonder kennis. Afleiders zijn verbeterd (1846 aardappelcrisis i.p.v. 1914), maar het lek zit in de vraag/context. Niet gewijzigd.
2. **staatsinrichting-1848** stap 3 vraag 4 — de vraagtekst zegt zelf "art. 1 verbiedt discriminatie"; daarmee is vraag 5 in dezelfde stap ("Grondwet artikel 1") weggegeven. Ook bij 3.4 zelf sluit "verbiedt discriminatie" ↔ "Gelijke behandeling" en bij 5.4 "rechterlijk" ↔ "Rechtbanken" sterk op elkaar aan. Vraagteksten niet gewijzigd.
3. **tweede-wereldoorlog-havo-vwo** stap 4 vraag 2 — de vraag "Atoombom Hiroshima datum?" staat direct vóór 4.3 "Manhattan Project ontwikkelde: …" (antwoord Atoombom). Idem **middeleeuwen-geschiedenis** stap 5 vraag 2 ("… stierf aan pest") na 5.1 (Zwarte Dood = pest); daar komt de verklappende vraag wel ná de gevraagde. Vraagteksten niet gewijzigd.
4. **middeleeuwen-geschiedenis** stap 6 vraag 3 — nieuwe afleider "Ridders" (page → schildknaap → ridder is ook drie fasen) is alleen fout door "in stad" in de vraag; de hint zegt dat expliciet. Als Mark dat te subtiel vindt: vervangen door een andere groep.
5. De twee twijfels uit ronde 1 (twintigste-eeuw 1.1 artikel 231 "alleen schuldig"; staatsinrichting 3.3 rechters "voor het leven") blijven staan; niets aan gewijzigd.

*Twijfel voor Mark (alleen op te lossen door `q` te wijzigen)*

1. **franseRevolutieGeschiedenis** stap 3 vraag 1: "officiële begindatum" is betwistbaar (5 mei 1789 wordt ook genoemd). Voorstel q: "Welke datum geldt meestal als begin van de Franse Revolutie?" Niet gewijzigd.
2. **middeleeuwenGeschiedenis** stap 1 vraag 3: q "Wat is **gemeen aan** 90% van middeleeuwers" is geen goed Nederlands. Voorstel: "Wat deden de meeste mensen (90%) in de middeleeuwen?" Dat het antwoord "boer" is, is de lesstof zelf.
3. **middeleeuwenGeschiedenis** stap 6 vraag 3: "in stad" in de q sluit boeren, ridders en monniken uit. Voorstel q: "Welke groep leerde een vak in drie fasen: leerjongen, gezel, meester?" (of de fasen weglaten).
4. **staatsinrichting1848** stap 2 vraag 5: "alle rechten en regels" klopt niet. In de uitleg staat nu dat de Grondwet de basisregels bevat en niet elke regel. Voorstel q: "Het document met de **basisregels** en grondrechten van een staat heet:".
5. **tweedeWereldoorlogHavoVwo** stap 1 vraag 5 ("met DE-invasie van") en stap 2 vraag 1 ("door DE bezet"): "DE" moet "Duitsland"/"Duitse inval" worden. De kale hints zijn al herschreven.
6. **twintigsteEeuwHavoVwo** stap 1 vraag 2, stap 2 vraag 1-2, stap 3 vraag 2, stap 4 vraag 2 en stap 5 vraag 4: q's in telegramstijl ("Wanneer Beurskrach Wall Street?", "Wanneer NL erkende …"). De kale hints ("Niet — WO1.", "Niet — bouw." enz.) zijn nu volledige zinnen.
7. **twintigsteEeuwHavoVwo** stap 5 vraag 1: q zegt "directe oorzaak" maar bedoelt "aanleiding". De hints maken het onderscheid tussen een oorzaak op lange termijn en een aanleiding al. Voorstel: "aanleiding" in de q.


### informatica

*Twijfel voor Mark*

1. **binair-datarepresentatie / cybersecurity-encryptie / databases-sql-informatica** — in vrijwel alle checks staat `uitlegPad.niveaus.nogSimpeler: "A."` (verwijzing naar de optieletter, klopt niet meer nu de opties gehusseld worden). In de 28 checks van mijn lijst vervangen door de tekst van het goede antwoord; in de overige checks van die drie bestanden staat "A." nog (buiten mijn lijst, niet aangeraakt).
2. **informatica-havo-vwo** — de niet-gemarkeerde checks hebben nog veel kale hints ("Niet relevant.", "Niet — concept.", "Woord-grap"-stijl). Niet op de lijst, niet aangeraakt; kandidaat voor een aparte opfrisronde.
3. **algoritmen-pseudocode-informatica** stap 2 vraag 2 — afleider "Een foutmelding" blijft een stro-optie naast Herhaling/Selectie/Sequentie; alleen de hint (H) hersteld. Een vierde bouwsteen bestaat niet, dus geen betere afleider gekozen.

*Twijfel voor Mark (ronde 2)*

1. **informatica-havo-vwo** — meerdere vraagstammen staan in telegramstijl ("**DRY** programming-principe:", "**O(n²)** schaalt:", "**Primaire sleutel** in DB-tabel is:"); q niet aangepast (mag niet), opties wel.
2. **databases-sql-informatica** stap 4 vraag 3-5 — SQL-woorden zijn Engels (COUNT = aantal, INSERT = toevoegen, AVG = gemiddelde); wie Engels kan, raadt dit zonder lesstof. Inherent aan de vraag; afleiders wel sterker gemaakt (SUM/MAX).
3. **algoritmen-pseudocode-informatica** stap 1 vraag 2 — goede optie inhoudelijk vervangen ("Het mag eindeloos doorgaan" → "Het staat in een programmeertaal"), omdat de oude naast "Het is eindig" het antwoord weggaf; uitlegPad + niveaus meegewijzigd. Graag even meekijken of dat zo mag.
4. **binair-datarepresentatie / cybersecurity-encryptie / databases-sql-informatica** — `nogSimpeler: "A."` staat er nog in veel checks (zie ronde 1); niet aangeraakt omdat de app optieletters zelf vervangt.

*Twijfel voor Mark*

- **informaticaHavoVwo.js stap 2 vraag 4 (WPA3):** het juiste antwoord is altijd het hoogste versienummer; dat is niet op te lossen zonder een niet-bestaande versie te verzinnen. Daarnaast zit de taalfout in `q` ("is meest veilig" → "is het veiligst"; WPA is een beveiligingsstandaard voor wifi, geen "WLAN-protocol"), en `q` mag ik niet wijzigen. Voorstel: q herschrijven tot "Welke wifibeveiliging is het veiligst (2024)?" of de vraag omdraaien ("welke is al lang te kraken?").


### maatschappijleer

*Twijfel voor Mark*

1. **maatschappijleer-havo-vwo** stap 4 vraag 2 — "Aangifte-bereidheid bij politie: sterk gedaald sinds 2002". Volgens de Veiligheidsmonitor is de aangiftebereidheid gedaald, maar of "sterk" klopt, hangt af van de gekozen reeks. Antwoord niet gewijzigd; alleen de afleiders zijn gelijkgetrokken.
2. **nederlandse-staat-maatschappijleer** stap 11 vraag 10 — "Trias politica verdeelt macht in?": het woord "trias" (drie) staat in de vraag zelf. Alleen de stro-optie "Geen" is vervangen door "5"; de vraag blijft per definitie makkelijk.
3. **mensenrechten-vn-havo-vwo** stap 5 vraag 5 — "Wat is de effectiefste persoonlijke actie?" is een meningsvraag; het antwoord "Combinatie: …" blijft herkenbaar als het brede antwoord. Een van de afleiders is nu ook een (online) combinatie, maar herformuleren van de vraag zou beter zijn.

*Twijfel voor Mark (ronde 2)*

1. **maatschappijleer-havo-vwo** stap 4 vraag 2 — "Aangiftebereidheid: sterk gedaald sinds 2002": of "sterk" klopt, hangt af van de reeks in de Veiligheidsmonitor (al gemeld in ronde 1). Alleen hint 3 is aangescherpt.
2. **nederlandse-staat-maatschappijleer** stap 11 vraag 10 — "Trias politica verdeelt macht in?": het antwoord (3) zit in het woord "trias" in de vraag. Vraag herschrijven.
3. **filosofie-vwo** stap 2 vraag 2 — "Bij dualisme zijn er hoeveel substanties?": "dualisme" (duo) verraadt "Twee". Vraag herschrijven.
4. **mensenrechten-vn-havo-vwo** stap 5 vraag 5 — "effectiefste persoonlijke actie" blijft een meningsvraag; het brede "Combinatie: …" is herkenbaar als het goede antwoord (al gemeld in ronde 1).
5. **media-wijsheid-maatschappijleer** stap 1 vraag 2 — goed antwoord "Grappige nep — niet serieus bedoeld": satire brengt vaak juist serieuze kritiek met humor. Liever "Grappige nep — niet bedoeld om te geloven".
6. **media-wijsheid-maatschappijleer** stap 1 vraag 4 ("Welke is geen media? Een glas water"), stap 4 vraag 4 en stap 6 vraag 6 ("Wat deel je NIET online? Wachtwoord …") — bij deze GEEN/NIET-vragen is het goede antwoord met gezond verstand te kiezen; alleen de hints zijn verbeterd. Om dit echt op te lossen, moet de vraag zelf anders (bv. "Welke gegevens kan een oplichter misbruiken?" met vier echte persoonsgegevens).
7. **maatschappijwetenschappen-havo-vwo** stap 5 vraag 5 ("populisme = volk tegenover elite") en **maatschappijleer-havo-vwo** stap 4 vraag 1 ("witteboorden = 'nette' mensen in hun beroep") — het goede antwoord is uit de naam van het begrip af te leiden. De afleiders zijn inhoudelijk goed; de vraag zou het begrip moeten toepassen in plaats van het woord te laten vertalen.

*Twijfel voor Mark*

- **Antwoord staat in `q`/term (niet te forceren):** filosofieVwo S2V2 (*du*alisme = twee) en S2V3 (verzoent = *compatibel*isme) — weggevende hints wel herschreven; maatschappijleerHavoVwo S2V3 (push = wegduwen; hint "Push betekent 'duwen'" weggehaald); nederlandseStaat S3V2 ("maakt wetten" → wetgevend), S11V1 (rechter → rechtsprekend), S11V10 (trias = 3; hint "Wat betekent 'trias'?" vervangen).
- **Taal in `q` (mocht niet wijzigen):** maatschappijwetenschappenHavoVwo S1V1 "Max Weber's", S2V4 "Durkheim's", S3V3 "Bourdieu's", S3V4 "Beck's" → zonder apostrof; mediaWijsheid S1V4 "Welke is geen media" → "Wat is geen medium", S4V4 "Welke deel je" → "Wat deel je". (In een uitlegPad wel "Bourdieu's" → "Bourdieus".)
- **Feit/actualiteit:** maatschappijleerHavoVwo S4V2 "aangiftebereidheid sterk gedaald sinds 2002" — Veiligheidsmonitor-cijfers bevestigen "sterk" niet eenduidig; liever "gedaald" of vraag herzien. mensenrechtenVnHavoVwo S2V4 "Huidige secretaris-generaal: Guterres" — termijn eindigt 31-12-2026, vraag per 1-1-2027 aanpassen.
- **Indeling per methode:** maatschappijwetenschappenHavoVwo S2V1 en S5V1 (gedeelde waarden/cultuur = cognitieve binding; sommige methodes noemen dit normatief/affectief).
- **Meningsvraag / gezond verstand = lesstof:** filosofieHavoVwo S5V5 (hoofdwaarden westerse ethiek), mensenrechtenVnHavoVwo S5V5 (effectiefste persoonlijke actie), mediaWijsheid S2V3 (NOS betrouwbaar), S3V4 (influencers betaald), S4V4 en S6V6 (wachtwoord/paspoort niet delen). Afleiders die óók verstandig klinken maken deze vragen dubbelzinnig; voorstel: herformuleren tot scenario-vragen.


### natuurkunde

*Twijfel voor Mark*

1. **bewegingen-snelheid-natuurkunde** stap 5 vraag 1 — "100 km/u op snelweg in NL — wanneer? → Overdag, van 6 tot 19 uur." Klopt als algemene regel sinds 2020, maar op sommige trajecten geldt de hele dag 100 (of lager). Opties gelijkgetrokken; de vraag zelf niet aangepast.
2. **bewegingen-snelheid-natuurkunde** stap 3 vraag 4 — "Welke factor maakt remweg veel langer?" Nat of glad wegdek maakt de remweg óók veel langer; daarom is "weer" als afleider vervangen door reactietijd (hoort bij de reactieafstand), volgafstand en motorvermogen, en de goede optie is nu "Snelheid van de auto". Let op: als de lesstof remweg en stopafstand door elkaar gebruikt, kan "reactietijd" als goed worden gezien.

*Twijfel voor Mark (ronde 2)*

1. **elektriciteit-natuurkunde** stap 11 vraag 4 — "Welke formule is **fout**?" met goed antwoord "P = U + I". Een slimme leerling kan vermoeden dat volt en ampère niet opgeteld worden. Niet aangepast, omdat de hele uitlegPad rond "P = U + I" is opgebouwd; alternatief zou "P = U ÷ I" als goede optie zijn (met aangepaste uitleg).
2. **warmte-thermodynamica-havo-vwo** stap 4 vraag 3 — fietspomp wordt warm door "adiabatische compressie". Klopt als hoofdoorzaak, maar wrijving van de zuiger speelt in de praktijk ook mee; daarom is wrijving bewust niet als afleider gebruikt.
3. **quantum-atoommodel-havo-vwo** stap 1 vraag 1 — de vraag zegt "meer energie" terwijl er vier kleuren staan ("de meeste energie" zou beter zijn). Vraag niet aangepast.
4. **bewegingen-snelheid-natuurkunde** stap 5 vraag 1 en stap 3 vraag 4 — de twijfels uit ronde 1 (100 km/u-regel, remweg vs. reactietijd) blijven staan; in ronde 2 niets aan veranderd.


### nederlands

*Twijfel voor Mark*

1. **tekstanalyse** stap 13 vraag 2 — de vraagtekst begint met "Concluderend kan worden gesteld…" en de goede optie is "Concluderend". Het antwoord staat dus letterlijk in de vraag. Dat is ook de lesstof (signaalwoord herkennen), maar zo is de vraag zonder kennis te maken. `q` en opties zijn niet aangepast; alleen de hints noemen het antwoord niet meer. Voorstel: optie "Concluderend" laten staan en in de vraag een ander signaalwoord gebruiken ("Al met al kan worden gesteld…").
2. **zinsontleding** stap 13 vraag 3 — "bepaling van reden" in "We blijven binnen omdat het regent": de enige bijzin is ook het enige stuk met "omdat", dus het antwoord is vrijwel zonder kennis te raden. De zin heeft geen ander zinsdeel dat een geloofwaardige afleider kan zijn. Alleen de hint die het antwoord noemde ("bijzin met 'omdat'") is herschreven.

*Twijfel voor Mark (ronde 2)*

1. **argumentatieleer** stap 14 vraag 2 — "Ik kreeg griep nadat ik de griepprik had gehad. Die prik veroorzaakt dus griep." Gemarkeerd: "Overhaaste generalisatie" (zo staat het ook in de lesstof van stap 14). Strikt genomen is dit een onjuist oorzakelijk verband (post hoc: daarna, dus daardoor). Niet gewijzigd; voorstel: voorbeeld vervangen door een echte generalisatie ("Mijn buurjongen van 15 rookt, dus alle tieners roken").
2. **tekstanalyse** stap 6 vraag 1 — de vraag zegt "De laatste alinea … begint met Concluderend"; het antwoord "Slot" staat daarmee vrijwel in de vraag. `q` niet aangepast; voorstel: "Een alinea begint met: Al met al laat zich vaststellen dat…" (zonder "laatste").
3. **literatuurgeschiedenis** stap 1 vraag 1 — NIET-vraag; de goede optie ("Geboorte- en sterftejaar van elke schrijver kennen") is de enige die als zinloos stampwerk klinkt, dus zonder lesstof te raden. Oplossen vraagt een andere goede optie (bv. "Van elke stroming alle schrijvers kunnen opnoemen"); niet zelf gedaan.
4. **cse-schrijfvaardigheid** stap 4 vraag 2 — "3-5" kernpunten is de middelste, redelijk klinkende getallenreeks naast "1", "10+" en "Alle alinea's"; te raden. Alleen de kale hints zijn herschreven.


### rest

*Twijfel voor Mark (ronde 2)*

1. **exponentieel** stap 2 vraag 1: in de vraag staat "verdubbelt elke uur"; dat moet "elk uur" zijn. Ik pas de vraag niet aan, dus dat blijft aan jou.
2. **onregelmatige-werkwoorden-v2-engels** stap 1 vraag 2 en stap 9 vraag 8: beide vragen naar de V2 van "go" (went). Dubbel, niet fout.
3. **ruimtemeetkunde** stap 7 vraag 1 ("Welke figuur heeft inhoud?"): alleen de dobbelsteen is 3D, dus een kind kiest hem ook zonder de les. De drie afleiders zeggen ook alle drie "plat". Omdat dit precies het begrip is dat getoetst wordt, heb ik het laten staan. Een sterkere variant vraagt een andere vraagstelling.


### scheikunde-kunst

*Twijfel voor Mark*

1. **chemische-reacties-scheikunde** stap 2 vraag 1 — "Wat zegt de Wet van Behoud van Massa?": de naam van de wet verraadt al het "="-antwoord. Afleiders zijn nu ">" en "<" en "volume blijft gelijk"; de vraag zelf is niet aangepast.
2. **mol-stoichiometrie-havo-vwo** stap 2 vraag 3 — de vraagtekst "Wat behoudt **massa** + **aantal atomen** in een reactie?" loopt niet lekker (het antwoord "Atomen blijven behouden" zit half in de vraag). Alleen de opties zijn aangepast.
3. **chemische-reacties-scheikunde** stap 9 vraag 13 — "Bij verbranding komt iets vrij — wat?" is met gezond verstand te beantwoorden (iedereen kent warmte en licht van vuur). Afleiders zijn nu stoffen (zuurstof/stikstof/waterstof), maar de vraag blijft makkelijk.
4. **kunst-havo-vwo** stap 2 vraag 4 — hint bij Rembrandt: "al jong een gevierd schilder ..., ook al raakte hij later in geldnood". Klopt historisch, maar die nuance kan een leerling aan het twijfelen brengen. Graag even meelezen.
5. **zuren-basen-havo-vwo** stap 1 vraag 5 — de afleider "Een buffer" bij HCl + NaOH is ondubbelzinnig fout (sterk zuur), maar valt qua vorm wat uit de toon naast "Zout + ..."-opties.

*Twijfel voor Mark (ronde 2)*

1. **atoombouw-scheikunde** stap 9 vraag 1 — de vraag "Wat zegt de **wet van behoud van atomen**?" noemt het antwoord ("aantal atomen links en rechts is gelijk") al in de naam. Alleen opties/hints aangepast; vraagtekst niet.
2. **mol-stoichiometrie-havo-vwo** stap 1 vraag 3 — het antwoord (44,8 L voor 2 mol gas) is uit te rekenen met "22,4 L/mol", dat letterlijk in de vraagtekst van stap 3 vraag 5 staat. Lek via een vraagtekst; niet zelf aangepast.
3. **organische-chemie-havo-vwo** stap 5 vraag 5 — "Wat is **bio-ethanol**?": het voorvoegsel "bio" in de vraag wijst naar "Ethanol uit planten". Afleiders zijn nu echte verwisselingen (biologisch afbreekbaar, uit aardolie, biogas), maar de vraag blijft makkelijk.
4. **stoffen-mengsels-scheikunde** stap 5 vraag 4 — "Mag je bleekmiddel + ammoniak mengen?" is met gezond verstand te beantwoorden ("Nee, nooit"). Afleiders zijn nu verstandig klinkende halve maatregelen (ramen open, eerst verdunnen), maar de vraagvorm blijft een ja/nee-weggever.
5. **zuren-basen-havo-vwo** stap 4 vraag 5 — ja/nee-vraag ("pKa = pH op halfequivalentiepunt?") met "Ja" als antwoord; de afleiders "Nee / Alleen bij neutralisatie / Onmogelijk te zeggen" zijn zwak, maar zonder de vraag om te bouwen valt er weinig te verbeteren.

*Twijfel voor Mark*

- **kunstHavoVwo s1 v3 (Brunelleschi):** "Perspectief in schilderkunst uitgevonden door" — Brunelleschi (architect) ontdekte rond 1420 het lijnperspectief; Masaccio paste het als eerste toe in een schilderij, Alberti schreef de regels op. Voorstel: q → "Wie ontdekte rond 1420 de regels van het lijnperspectief?" (antwoord blijft Brunelleschi; Masaccio dan níét als afleider).
- **molStoichiometrieHavoVwo s5 v1 (H₂ vs H₂O):** het antwoord klopt met de huidige q: het is een strikvraag (bij verbranding ontstaat geen H₂, dus "0 mol"; uitlegPad zegt dat ook). De M=16 lokt wel een rekensom uit, dus het voelt als een instinker. Hints zijn nu denkprikkels. Voorstel als je liever een rekensom wilt: q → "mol **H₂O**", met antwoord "1 mol" (index 2); dan moet het antwoord worden aangepast.
- **kunstHavoVwo s3 v1 (De Stijl → Nederland):** de Nederlandse naam verraadt het antwoord. Dat is alleen op te lossen door q te wijzigen (bv. "Mondriaan en Van Doesburg richtten een beweging op in…").
- **molStoichiometrieHavoVwo s2 v3:** q "Wat behoudt massa + aantal atomen in een reactie?" is krom. Voorstel: "Waardoor blijven massa en aantal atomen bij een reactie gelijk?"


### talen-1

*Twijfel voor Mark*

1. **frans-cse-havo-vwo** stap 1 vraag 2 — de vraag zegt dat alleen een tweetalig woordenboek mag, en de hint bij "Alleen een eentalig Frans woordenboek" zegt dat een eentalig woordenboek bij Frans niet mag. Graag even controleren met de actuele regeling hulpmiddelen van het CvTE. Alleen de lengte is gelijkgetrokken; het antwoord is niet gewijzigd.
2. **cse-leesvaardigheid-engels** stap 4 vraag 3 — de goede optie "Antwoord moet letterlijk in tekst staan" is nu "Wat de tekst zegt, ook in andere woorden". Examenvragen parafraseren de tekst juist vaak, en een afleider met precies dezelfde woorden als de tekst is een bekende valkuil. Die valkuil is nu een van de afleiders. Graag akkoord op deze inhoudelijke verschuiving.

*Twijfel voor Mark (ronde 2)*

1. **frans-cse-havo-vwo** stap 1 vraag 2 (vervolg van twijfel 1 uit ronde 1). De hint beweerde dat een eentalig woordenboek bij Frans niet mag. Dat heb ik niet kunnen bevestigen, dus de hint is nu neutraal ("Is een eentalig woordenboek het enige wat mag?"). De afleider "Eentalig én tweetalig tegelijk" was misschien niet ondubbelzinnig fout en is vervangen door "Een Frans-Engels woordenboek". Graag de regeling van het CvTE checken. Als een eentalig woordenboek ook mag, past dat ook bij **duits-cse-havo-vwo** stap 1 vraag 4 (Duden).
2. **engels-literatuur-havo-vwo** stap 5 vraag 5: "Welk citaat is uit Hamlet?" Het antwoord staat letterlijk in de `q` van stap 2 vraag 1 ("'To be or not to be' komt uit welk werk?"). Ik mag `q` niet veranderen. Voorstel: in een van beide vragen een ander Hamlet-citaat gebruiken (bijv. "Something is rotten in the state of Denmark").
3. **passe-compose-frans** stap 10 vraag 7: de `q` noemt drie keuzes "(allé/allée/allés)". Optie 4 "alla" staat daar niet bij en valt dus meteen af. Voorstel: "(allé/allée/allés)" uit de vraag halen.
4. **onregelmatige-werkwoorden-engels** stap 12 vraag 2: "She has gone to school every day this week." "Has gone" betekent meestal dat ze er nu nog is. Natuurlijker is "She has been to school …" of "has walked". Het antwoord is niet gewijzigd.
5. **cse-leesvaardigheid-engels** stap 6 vraag 1, 2 en 6 vragen bijna precies hetzelfde als stap 1 vraag 1 ("however") en stap 2 vraag 3 (advertentie). Dat is bedoeld als herhaling, maar wie de eerste vraag heeft gezien, weet het antwoord al. Alleen melden; niet gewijzigd.


### talen-2

*Twijfel voor Mark*

1. **grieks-vwo** stap 2 vraag 5 (geslachten) — de goede optie "Mannelijk, vrouwelijk, onzijdig" blijft de enige met drie geslachten en is dus de "meest complete". Een vierde geslacht als afleider zou inhoudelijk fout of verwarrend zijn; lengte-verhouding nu ±1,4.
2. **engels-schrijven-spreken-havo-vwo** stap 4 vraag 5 (beleefd oneens zijn) — de vraag toetst beleefdheid; de goede optie blijft per definitie de enige beleefde. Afleiders zijn wel realistischer gemaakt ("Sorry, but you're just wrong.", "With respect, that's nonsense.").
3. **cse-schrijfvaardigheid-engels** stap 3 vraag 5 — "1/3 tot 1/4 van origineel" is een vuistregel, geen harde norm. Afleiders zijn nu allemaal breuken (3/4–9/10, 1/10–1/20, 2/3–3/4) zodat de vorm niets verraadt, maar de grens blijft een conventie.
4. **engels-cse-havo-vwo** stap 1 vraag 2 — de goede optie "Papieren woordenboek Engels-NL" klopt (woordenboek toegestaan bij CSE moderne vreemde talen). Afleiders zijn nu ook papieren of woordenboek-achtig ("Papieren grammaticaboek Engels", "Eigen woordenlijst op papier", "Elektronisch woordenboek EN-NL"). Graag bevestigen dat een grammaticaboek inderdaad niet is toegestaan.

*Twijfel voor Mark (ronde 2)*

1. **engels-cse-havo-vwo** stap 5 vraag 3 — de vraagtekst "typisch literair-fragment-vraag (VWO)" verklapt het antwoord van stap 1 vraag 3 ("Literair fragment"). Vraagtekst niet aangepast.
2. **naamvallen-duits** stap 9 vraag 9 — de vraagtekst "(mit + DAT onzijdig)" verklapt het antwoord van stap 9 vraag 6 (mit vraagt altijd datief) en stap 9 vraag 16 (Mit = Dativ). Ook stap 9 vraag 8 noemt "(DAT, mannelijk)" in de vraag. Vraagtekst niet aangepast.
3. **werkwoordsvervoeging-frans** stap 1 vraag 1 — de vraag noemt "(-er)", waardoor finir en vendre op de uitgang afvallen. "être" is vervangen door "aller (gaan)" (wel -er, maar onregelmatig), zodat er echt gekozen moet worden; de vraagtekst zelf blijft een hulp.
4. **cse-schrijfvaardigheid-engels** stap 1 vraag 3 ("Formeel woord voor 'I'm'") — de volledige vorm "I am" ligt voor de hand, wat je ook als afleider kiest. Afleiders zijn nu echte fouten ("Im", "I'am"); vraag blijft makkelijk.
5. **past-tenses-engels** stap 10 vraag 8 en 9 — elkaars goede antwoord staat als afleider in de andere vraag (was/were + V-ing ↔ had + V3). De hints noemen de vormen niet meer bij naam, maar wie vraag 9 eerst ziet, ziet het antwoord van vraag 8 (en omgekeerd). Eventueel één van beide andere afleiders geven.
6. **grieks-vwo** stap 2 vraag 5 (geslachten) — staat nog uit ronde 1: de goede optie blijft de enige met drie geslachten.

*Twijfel voor Mark*

- engelsCseHavoVwo.js stap 5 vraag 2: de vraag noemt al "sarcastische toon", dus "ironie herkennen" ligt voor de hand. Dat valt alleen op te lossen door `q` te wijzigen. Ongewijzigd.
- pastTensesEngels.js stap 8 vraag 2: "haven't" bevat zichtbaar "have" + "n't". Dat zit in de vraag zelf. Alleen de hints zijn herschreven.
- engelsCseHavoVwo.js stap 1 vraag 4: de vraag bevat de rekensom (150/42). De afleiders liggen nu dicht bij elkaar (2,5 / 4,5 / 5), maar het antwoord blijft uit te rekenen.
- engelsCseHavoVwo.js stap 2 vraag 2: deftige woorden leiden vanzelf naar "formal". "Slang" is vervangen door "Literary/poetic", maar het blijft herkenbaar.
- werkwoordsvervoegingFrans.js stap 1 vraag 1: "(-er)" staat in de vraag. "aller" (twee-goed-risico) is vervangen door "voir". Daardoor is het antwoord nu aan de uitgang te zien. Wil je dat de vraag "regelmatig -er" wordt?


### wiskunde-1

*Twijfel voor Mark*

1. **cse-wiskunde-strategie-vmbo** stap 6 vraag 2 — nieuwe afleider "Per vraag een vaste 3 minuten nemen". De lesstof noemt ~3 min per vraag als gemiddelde, maar zegt ook "binnen 30 sec klaar? Doe meteen" en "vastloper na 5 min? Markeer + verder". Daarom fout bedoeld, maar een leerling kan het als half goed ervaren.

*Twijfel voor Mark (ronde 2)*

1. **cse-wiskunde-strategie-vmbo** stap 1 vraag 4 — de vraag noemt zelf al "in cm²", dus het antwoord staat in `q`. Afleiders verbeterd (cm, m², zonder eenheid), maar de vraag blijft makkelijk; `q` niet aangepast.
2. **cse-wiskunde-strategie-vmbo** stap 5 vraag 1 (en open vraag 6.9) — "CSE wiskunde vmbo duurt 120 min" volgt de lesstof; klopt voor gl/tl, maar voor bb/kb kan de duur afwijken. Niet gewijzigd.
3. **stelsels** stap 14 vraag 3 — "Hoeveel onbekenden heeft een stelsel?" met afleiders 1 / 0 / oneindig: "2 of meer" is met gezond verstand te kiezen, maar elk alternatief getal (2, 3) maakt het antwoord dubbelzinnig. Niet gewijzigd.

*Twijfel voor Mark*

- coordinatenstelsel.js stap 2 vraag 1, stap 14 vraag 1 en 7 (oorsprong = (0, 0)): het is een definitie, dus elke andere coördinaat valt af. Niet te repareren zonder de vraag te veranderen.
- coordinatenstelsel.js stap 10 vraag 1 ("dalend") en veranderingGroeiHavoVwo.js stap 4 vraag 2 ("periodiek" bij eb en vloed): het vakwoord betekent hetzelfde als in gewone taal.
- cseWiskundeStrategieVmbo.js stap 1 vraag 4 (cm² staat in de vraag), stap 2 vraag 5 (haakjes staan in de vraag), stap 5 vraag 6 ("halverwege" → helft) en stap 6 vraag 3 ("vlakke figuren" → oppervlakte): het antwoord zit in de vraag zelf.
- logaritmen.js stap 14 vraag 1: "uitdrukking(en) is/zijn" + "Alle drie de andere" verraadt het antwoord. Dit kan alleen opgelost worden door de vraag te veranderen (bijv. naar "Welke uitdrukking is NIET gelijk aan …").
- algebraVergelijkingenHavoVwo.js stap 4 vraag 2: in de vraag moet "Twee kogels:" worden "Twee soorten kogels:", en "Kogel A = ?" moet worden "Wat kost één kogel A?". q is niet gewijzigd.
- goniometrieHavoVwo.js stap 5 vraag 2: in de vraag moet "Oplos:" worden "Los op:". q is niet gewijzigd; de kale hint bij "x = 0 of π" is wel herschreven.


### wiskunde-2

*Twijfel voor Mark*

1. **logaritmen-exponentieel-havo-vwo** stap 3 vraag 4 — "Richter 7 is hoeveel sterker dan 5? → 100×". Klopt voor de uitslag (amplitude); in energie is het ongeveer 1000×. "Sterker" is dus dubbelzinnig. Antwoord niet gewijzigd; 1000× bewust níét als afleider gebruikt. Vraagtekst eventueel verduidelijken ("hoeveel keer zo grote uitslag").
2. **statistiek** stap 11 vraag 11 — "Modus van 3, 4, 5, 7, 8 → Geen modus": de goede optie is de enige in woorden tegenover drie getallen. Dat is de lesstof zelf; alleen de hints zijn herschreven (de oude hint bij "3" verklapte dat alle getallen één keer voorkomen).

*Twijfel voor Mark (ronde 2)*

1. **logaritmen-exponentieel-havo-vwo** stap 3 vraag 4 — staat nog open uit ronde 1: "hoeveel sterker" bij Richter 7 vs 5 is dubbelzinnig (uitslag 100×, energie ±1000×). Vraagtekst verduidelijken is aan Mark (q niet gewijzigd).
2. **vlakke-figuren** stap 1 vraag 1 — "kortste afstand tussen twee punten = een rechte lijn" is algemene kennis; de afleiders (gebogen lijn, omweg, cirkelboog) vallen met gezond verstand weg. Er is geen geloofwaardige afleider die ondubbelzinnig fout is; eventueel de vraag zelf vervangen.
3. **pythagoras** stap 14 vraag 1 — afleider "16 m" (10 + 6, of 6² + 10² zonder aftrekken) is langer dan de ladder zelf en valt dus met gezond verstand af. Laten staan omdat het dé typische rekenfout is; de andere afleider boven de 10 m is vervangen door "6 m".

*Twijfel voor Mark*

- schattenAfronden.js stap 1 vraag 5: de schatting 600 staat in de vraag, en de vraag test juist of je je antwoord tegen een schatting kunt houden. Afleiders dicht bij 600 maken de vraag dubbelzinnig, dus dit is onvermijdelijk. Alleen de hints bij 59 en 899 zijn denkprikkels geworden.
- vlakkeFiguren.js stap 15 vraag 1: zwaartepunt → zwaartelijnen zit in de naam (vraag niet te wijzigen). Hint 4 noemde de definitie van de zwaartelijn (= het antwoord); die is vervangen, en hints 2-3 eindigen nu op een denkvraag.
- differentialenHavoVwo.js stap 3 vraag 5: "simplificeren" staat in `q` → voorstel "(na vereenvoudigen)". Hint 3 ("Niet — …") is verbeterd.
- schattenAfronden.js stap 5 vraag 19: "±1.000 + ±2.000" staat in `q` (± = plus-min) → voorstel "ongeveer 1.000 + ongeveer 2.000". Opties en hints zijn al in orde.
- (opgelost, ter info) logaritmenExponentieleHavoVwo.js stap 3 vraag 4: in `q` staat nog "sterker", maar de opties zeggen nu "× zo grote uitslag". Daarmee is het eenduidig: 100× uitslag, terwijl de energie ~1000× zo groot is. Wil je ook `q` aanpassen, dan: "hoeveel keer zo grote uitslag".
- (opgelost, ter info) schattenAfronden.js stap 5 vraag 4: ~87 was eigenlijk uitgerekend. Het goede antwoord is nu ~90 (630 ÷ 7). ~100 is uit de opties gehaald (afronden naar 600 ÷ 6 verandert de deler en is geen geldige schatting) en vervangen door de factor-10-fouten ~9 en ~900.
