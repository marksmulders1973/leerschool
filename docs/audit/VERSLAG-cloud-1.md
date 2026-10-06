# Verslag audit ronde 3 — cloud-1 (6 okt 2026)

Vakinhoudelijke nakijkronde van drie delen. Branch `audit3/cloud-1` (vanaf main `ac6b225`), één commit per pad. Gedaan met 16 parallelle nakijkers; elke vraag is zelf opgelost.

**Gecontroleerd door de coördinator:**
- Alle aantallen in dit verslag zijn met een script vergeleken met main: het aantal checks per pad, het aantal gewijzigde checks en het aantal verwijderde checks. Er waren 0 afwijkingen.
- Deel B: `q`, `bronTekst` en `examenBron` zijn in geen enkele examencheck gewijzigd. Dat is gecontroleerd op de objecten en op de diff-regels.
- Elk gewijzigd bestand slaagt voor `node --check`.
- `npm run audit:vragen` geeft voor en na 0 meldingen.
- `npx vite build` slaagt.
- Deel C is gevalideerd: elke `oud` komt precies 1× voor, alles is toe te passen, het bestand blijft importeerbaar en het aantal vragen per groep is gelijk gebleven.

**Telwijze:**
- *Hersteld* = het aantal vragen (checks) waarin iets veranderd is. Eén vraag met meerdere veldwijzigingen telt als 1.
- Correcties in stap-uitleg buiten de checks tellen niet mee. Die staan wel in de herstellijst als ze genoemd zijn.

## Deel A — VO-zaakvakken (leerpaden)

Alle leerpaden met level klas/havo/vwo/vmbo/mavo, behalve exacte vakken en taalvakken en behalve examen-*.

### Lijst van paden

| pad-id | gecontroleerd | hersteld | verwijderd |
|---|---|---|---|
| aardobservatie-risico-havo-vwo | 25 | 2 | 0 |
| atmosfeer-klimaat-havo-vwo | 25 | 5 | 0 |
| bevolking-migratie-aardrijkskunde | 33 | 1 | 0 |
| energie-hulpbronnen-havo-vwo | 25 | 3 | 0 |
| globalisering-havo-vwo | 25 | 0 | 0 |
| klimaatverandering-aardrijkskunde | 26 | 2 | 0 |
| klimaten-aardrijkskunde | 40 | 5 | 0 |
| nederland-water-vo | 25 | 1 | 0 |
| platentektoniek-aardrijkskunde | 27 | 5 | 0 |
| stedelijke-ontwikkeling-havo-vwo | 25 | 1 | 0 |
| wereld-globalisering-havo-vwo | 25 | 3 | 0 |
| balans-beco | 35 | 4 | 0 |
| cel-biologie | 34 | 4 | 0 |
| ecosystemen-biologie | 33 | 2 | 0 |
| ecosystemen-havo-vwo | 25 | 4 | 0 |
| evolutie-havo-vwo | 25 | 6 | 0 |
| fotosynthese-biologie | 26 | 5 | 0 |
| genetica-erfelijkheid-biologie | 35 | 3 | 0 |
| genetica-havo-vwo | 25 | 5 | 0 |
| hart-bloed-ademhaling-havo-vwo | 25 | 3 | 0 |
| immuunsysteem-havo-vwo | 25 | 1 | 0 |
| mens-biologie-vmbo | 27 | 4 | 0 |
| voortplanting-hormonen-biologie | 28 | 6 | 0 |
| zenuwstelsel-hormonen-havo-vwo | 25 | 2 | 0 |
| bbp-conjunctuur-economie | 42 | 5 | 0 |
| bedrijfseconomie-havo-vwo | 25 | 1 | 0 |
| crypto-blockchain-geld-beco | 6 | 0 | 0 |
| marktvormen-havo-vwo | 25 | 2 | 0 |
| moederbedrijf-overname-sonac-beco | 4 | 0 | 0 |
| pincode-belasting | 42 | 6 | 0 |
| pincode-buitenland-eu | 42 | 4 | 0 |
| pincode-geld-sparen-lenen | 53 | 1 | 0 |
| pincode-inkomen-welvaart | 42 | 4 | 0 |
| pincode-ondernemen | 54 | 8 | 0 |
| pincode-ontwikkelingslanden | 42 | 1 | 0 |
| pincode-overheid | 42 | 3 | 0 |
| pincode-werk-arbeidsmarkt | 42 | 2 | 0 |
| rechtsvormen-overzicht | 15 | 2 | 0 |
| vraag-aanbod-economie | 25 | 11 | 0 |
| filosofie-havo-vwo | 25 | 3 | 0 |
| filosofie-vwo | 25 | 4 | 0 |
| franse-revolutie-geschiedenis | 26 | 0 | 0 |
| gouden-eeuw-geschiedenis | 26 | 1 | 0 |
| industriele-revolutie-havo-vwo | 25 | 3 | 0 |
| kolonie-indonesie | 25 | 7 | 0 |
| middeleeuwen-geschiedenis | 26 | 4 | 0 |
| romeinen-geschiedenis | 26 | 3 | 0 |
| sociale-zekerheid-nl | 25 | 6 | 0 |
| staatsinrichting-1848 | 25 | 0 | 0 |
| tachtigjarige-oorlog-geschiedenis | 26 | 10 | 0 |
| tijdvakken-geschiedenis | 26 | 5 | 0 |
| tweede-wereldoorlog-havo-vwo | 25 | 3 | 0 |
| twintigste-eeuw-havo-vwo | 25 | 3 | 0 |
| verlichting-revoluties-havo-vwo | 25 | 4 | 0 |
| wereldoorlog1-geschiedenis | 26 | 3 | 0 |
| wereldoorlog2-geschiedenis | 31 | 4 | 0 |
| ai-machine-learning-informatica | 20 | 1 | 0 |
| algoritmen-pseudocode-informatica | 20 | 1 | 0 |
| binair-datarepresentatie-informatica | 16 | 1 | 0 |
| cybersecurity-encryptie-informatica | 20 | 3 | 0 |
| databases-sql-informatica | 20 | 3 | 0 |
| hardware-besturingssysteem-informatica | 20 | 4 | 0 |
| informatica-havo-vwo | 25 | 2 | 0 |
| netwerken-internet-informatica | 20 | 4 | 0 |
| programmeren-basis-informatica | 20 | 5 | 0 |
| beeldhouwkunst-kunst | 12 | 2 | 0 |
| kleur-licht-compositie-kunst | 13 | 1 | 0 |
| kunst-havo-vwo | 25 | 0 | 0 |
| maatschappijleer-havo-vwo | 25 | 1 | 0 |
| maatschappijwetenschappen-havo-vwo | 25 | 1 | 0 |
| media-wijsheid-maatschappijleer | 26 | 2 | 0 |
| mensenrechten-maatschappijleer | 26 | 4 | 0 |
| mensenrechten-vn-havo-vwo | 25 | 1 | 0 |
| nederlandse-staat-maatschappijleer | 34 | 9 | 0 |

### Herstellingen (was → nu, reden)

#### aardobservatie-risico-havo-vwo · gecontroleerd 25 · hersteld 2 · verwijderd 0
- stap 4 vraag 1: was «Hoge kans + lage kwetsbaarheid (NL aardbeving via gas-winning, lichte huizen) = matig risico» → nu «Hoge kans + lage kwetsbaarheid (Japan: vaak bevingen, maar bevingsbestendige bouw) = beperkt risico» (uitlegPad-feitfout: Groningse huizen zijn juist kwetsbaar)
- stap 5 vraag 1: was hint «Niet — geen tsunami's primair.» → nu «Wel zware bevingen zonder vulkanen — maar duwen platen die langs elkaar schuiven bergen omhoog?» (hint sloeg nergens op; transform-grens heeft wél bevingen zonder vulkanen, het verschil zit in de bergen)

#### atmosfeer-klimaat-havo-vwo · gecontroleerd 25 · hersteld 5 · verwijderd 0
- stap 3 vraag 5: was hint «Verkoeling-bron.» → nu «Daar verdampt nauwelijks water — waar haalt een orkaan zijn energie vandaan?» (feitfout: een woestijn is geen koelbron)
- stap 4 vraag 1: was «warmste maand <22°C maar koudste >−3°C (b)» → nu «warmste maand <22°C en minstens 4 maanden >10°C (b)» (uitlegPad-feitfout: de Köppen-letter b gaat over de zomer, niet over de koudste maand)
- stap 4 vraag 4: was hint «Niet — hoogte → klimaat-verandering.» → nu «Niet — hoe hoger, hoe kouder.» (misleidende hint)
- stap 5 vraag 1: was hint «Waterdamp natuurlijk; CO₂ menselijk.» → nu «Waterdamp is wel een broeikasgas, maar de hoeveelheid hangt af van de temperatuur — niet van wat de mens uitstoot.» (hint gaf het antwoord weg)
- stap 5 vraag 2: was optie «Tegenovergesteld» → nu «Mitigatie = dijken bouwen; adaptatie = CO₂ verminderen» (afleider was te vaag en doorzichtig)
- stap 5 vraag 2: was hint «Tegenovergesteld is fout.» → nu «Draai het eens om: welke aanpak pakt de oorzaak (de uitstoot) aan?» (hint past bij de nieuwe afleider)

#### bevolking-migratie-aardrijkskunde · gecontroleerd 33 · hersteld 1 · verwijderd 0
- stap 4 vraag 4: was hint «Speelt wel mee maar oorlog primair.» → nu «Droogte speelde wel mee, maar was dat de reden dat miljoenen mensen in korte tijd moesten vluchten?» (hint noemde het goede antwoord)

#### energie-hulpbronnen-havo-vwo · gecontroleerd 25 · hersteld 3 · verwijderd 0
- stap 1 vraag 4: was «NL: alleen Groningen heeft conventionele winning, geen fracking.» → nu «NL: winning was conventioneel (Groningen + kleine velden); schaliegas via fracking is hier nooit toegestaan.» (uitlegPad-feitfout: NL heeft veel kleine gasvelden)
- stap 5 vraag 1: was «NL was 2024 ongeveer op 30% reductie sinds 1990» → nu «NL zat in 2024 op ruim 35% reductie sinds 1990» (feitfout, volgens CBS ~36-37%)
- stap 5 vraag 3: was «Tweede helft 2024: bedrijven die zonneparken…» → nu «Sinds ca. 2021: bedrijven die zonneparken…» (feitfout: netcongestie speelt al sinds ~2021)

#### globalisering-havo-vwo · gecontroleerd 25 · hersteld 0 · verwijderd 0

#### klimaatverandering-aardrijkskunde · gecontroleerd 26 · hersteld 2 · verwijderd 0
- stap 6 vraag 2: was optie «Belangrijkste broeikasgas» → nu «Belangrijkste broeikasgas door de mens» (waterdamp draagt in totaal meer bij; dat staat ook in de uitleg van stap 2)
- stap 6 vraag 2: was hint «Wel maar niet primair.» → nu «Water is H₂O — welke letters staan er in CO₂?» (hint suggereerde dat CO₂ water is)
- stap 6 vraag 6: was vraag «Wat doet **smelten poolijs**?» → nu «Wat doet **smelten van landijs** (Groenland + Antarctica)?» (drijvend Arctisch zee-ijs laat de zeespiegel niet stijgen)
- stap 6 vraag 6: was optie «Maakt zoetwater» → nu «Zeespiegel daalt» (afleider was half goed; de hint gaf dat zelf ook toe)
- stap 6 vraag 6: was hint «Wel maar primair stijging.» → nu «Waar blijft al dat smeltwater?» (hint past bij de nieuwe afleider)

#### klimaten-aardrijkskunde · gecontroleerd 40 · hersteld 5 · verwijderd 0
- stap 2 vraag 1: was optie «Op grote hoogte» → nu «In Nederland» (op grote hoogte is de zonkracht juist groter, dus de optie was half goed)
- stap 2 vraag 1: was hint «Hoogte = juist kouder.» → nu «Nederland ligt op 52° NB — valt het zonlicht hier recht of schuin?» (hint past bij de nieuwe afleider)
- stap 5 vraag 2: was theorie «Zonder Golfstroom: NL winter ~-15°C … Verschil van 18°C» → nu «Zonder de invloed van de zee … Calgary ~-10°C in januari … dat verschil komt door de zee» (overdreven getal dat tegen het eigen voorbeeld (-10°C) inging)
- stap 7 vraag 1: was hints «Permafrost is een bodemkenmerk.» / «Een dier — niet de bodem.» → nu denkvragen over 'perma'/'frost' (de hints gaven het antwoord 'bodem' weg)
- stap 10 vraag 5: was hint «Niet — geen weersfenomeen.» → nu «Niet — een regenboog is licht, geen wind.» (een regenboog is wél een weersverschijnsel)
- stap 10 vraag 5: was uitlegPad «Half miljard mensen afhankelijk van moesson» → nu «Miljarden mensen afhankelijk van moesson» (feitfout: alleen India heeft al 1,4 miljard inwoners)
- stap 10 vraag 18: was hint «Niet primair.» → nu «Australië is vooral woestijn en savanne.» (de hint suggereerde dat de Amazone deels in Australië ligt)
- (stap 10 stap-uitleg + svg, telt niet als check: in de tabel stond mediterraan bij B en Polen bij C → nu mediterraan bij C, Polen/Rusland als nieuwe rij D. SVG «B = woestijn / mediterraan» → «B = droog (woestijn / steppe)». Dit spreekt nu niet meer stap 4/10v6 tegen, waar Cs/Csa bij C hoort.)

#### nederland-water-vo · gecontroleerd 25 · hersteld 1 · verwijderd 0
- stap 2 vraag 2: was optie «Wadden­zee» (met zacht afbreekstreepje U+00AD) → nu «Waddenzee» (onzichtbaar teken)

#### platentektoniek-aardrijkskunde · gecontroleerd 27 · hersteld 5 · verwijderd 0
- stap 3 vraag 1: hint 4 was «Niet versmelten, maar de zwaardere zinkt eronder.» → nu «Platen versmelten niet — denk aan het verschil in gewicht tussen de twee soorten platen.» (hint noemde het goede antwoord)
- stap 7 vraag 1: hint 2 was «… Epicentrum ligt aan het oppervlak.» → nu «Het punt diep onder de grond heet hypocentrum (of focus) — waar ligt het epicentrum dan?» (hint gaf antwoord weg)
- stap 7 vraag 2: hint 3 was «Te veel — elk punt is 10× (niet 100×).» → nu «Te veel — hoeveel keer sterker is één stap op de schaal?» (hint noemde letterlijk het antwoord 10×)
- stap 9 vraag 3: hint 4 was «Geen meteoriet — wel een vulkaan.» → nu «Er is geen inslagkrater uit die tijd — welke ramp in 1815 blies veel as de lucht in?» (hint gaf antwoord weg)
- stap 11 vraag 2: hint 3 was «Geen schuif — twee platen gaan juist uit elkaar.» → nu «Bij een schuifgrens ontstaan vooral aardbevingen, geen vulkanen op een rug.» (hint beschreef letterlijk 'divergent')

#### stedelijke-ontwikkeling-havo-vwo · gecontroleerd 25 · hersteld 1 · verwijderd 0
- stap 2 vraag 5: optie 4 was «Industriële zone» (hint «Wel deels.») → nu «Bedrijventerrein zonder bewoners» met hint «Er wordt veel gewerkt, maar er wonen ook heel veel mensen — wat voor wijk is het dan?» (afleider was half goed: Dharavi heeft veel industrie, hint bevestigde dat)

#### wereld-globalisering-havo-vwo · gecontroleerd 25 · hersteld 3 · verwijderd 0
- stap 2 vraag 5: hint 3 was «Niet — sterk gedaald.» → nu «Niet stabiel — denk aan wat de groei van China en India sinds 1990 deed.» (hint noemde het antwoord)
- stap 4 vraag 4: hint 2 was «Niet — daling vooral.» → nu «Denk aan de nawerking van het 1-kind-beleid: krijgt China veel of weinig jongeren?» (hint noemde het antwoord)
- stap 5 vraag 1: hint 3 was «Niet — sneller.» → nu «Niet gelijk — vergelijk de groei van containervervoer met de groei van de economie.» (hint noemde het antwoord)

#### balans-beco · gecontroleerd 35 · hersteld 4 · verwijderd 0
- stap 5 vraag 2: hint 2 was «Nee — bezit = eigen + vreemd vermogen.» → nu «Nee — dan zou het eigen vermogen groter zijn dan al het bezit. Kan dat?» (hint was letterlijk het antwoord)
- stap 5 vraag 2: hint 4 was «Niet aftrekken — optellen.» → nu «Krijg je minder bezit als je méér leent? Kijk naar het teken.» (hint gaf antwoord weg)
- stap 7 vraag 2: hint 2 was «… zadels nodig — variabel.» → nu «… zadels nodig — blijft het bedrag dan gelijk?» (hint noemde letterlijk het antwoord)
- stap 10 vraag 11: optie 4 was «Eigen + vermogen» → nu «Debiteuren + Crediteuren»; hint was «Dat is maar één post …» → nu «Dat zijn maar twee losse posten — welke twéé volledige kanten heeft de balans?» (onzin-/typfout-optie)
- stap 10 vraag 15: optie 2 was «Iemand die geld krijgt van bedrijf» → nu «Iemand die het bedrijf nog geld moet betalen» (was óók goed: een crediteur krijgt geld van het bedrijf)
- stap 10 vraag 15: optie 3 was «Bank» → nu «Concurrent» (een bank met een lening is ook iemand aan wie het bedrijf geld moet — half goed)

#### cel-biologie · gecontroleerd 34 · hersteld 4 · verwijderd 0
- stap 3 vraag 2: optie 4 was «Bloedplaatje (uitzondering)» → nu «Zenuwcel»; hint → «Zenuwcellen zijn dierlijke cellen — die hebben wél een kern.» (twee goede opties: bloedplaatjes hebben ook geen kern, de hint gaf dat zelf toe)
- stap 9 vraag 2: uitlegPad was «Alleen bacteriën zijn prokaryoot.» → nu «Bacteriën zijn de bekendste prokaryoten.» (feitfout: archaea zijn ook prokaryoot)
- stap 10 vraag 2: optie 2 was «De cel groeit tot 2× zo groot» (hint «De cel groeit ook …») → nu «Al het water verlaat de cel» met hint «Zonder water kan een cel niet werken — wat moet er juist gekopieerd worden zodat beide dochtercellen alles krijgen?» (afleider was half goed, hint bevestigde dat)
- stap 11 vraag 5: hint 4 was «Wel — kern of niet.» → nu «Er is wel degelijk een verschil — kijk naar waar het DNA zit.» (hint noemde het antwoord)

#### ecosystemen-biologie · gecontroleerd 33 · hersteld 2 · verwijderd 0
- stap 1 vraag 5: hint 3 was «Onvolledig — meerdere soorten.» → nu «Te ruim — dat zijn meerdere soorten.» (hint was onlogisch: 'alle dieren samen' is te ruim, niet onvolledig)
- stap 6 vraag 8 (open): acceptedAnswers bevatte «fotosynthese» → vervangen door «algen» (fotosynthese is geen voorbeeld van een producent, dus fout antwoord werd goed gerekend)
- stap 2 uitleg (geen check, telt niet mee in M): «toproofdier = eet andere carnivoren (leeuw, orka, haai)» → «(orka, haai, havik)» (feitfout: een leeuw eet herbivoren; check 2.3 noemt de leeuw ook zo)

#### ecosystemen-havo-vwo · gecontroleerd 25 · hersteld 4 · verwijderd 0
- stap 1 vraag 5: optie 3 was «Geen eten meer boven» (hint «Tautologisch.») → nu «Adelaars kunnen het hoogst vliegen» met hint «Hoe hoog een vogel vliegt, zegt niets over zijn plek in de voedselpiramide.» (afleider was vrijwel hetzelfde als het antwoord; uitlegPad 'simpeler' zei letterlijk «Niet genoeg eten meer hoger»)
- stap 4 vraag 3: hint 4 was «Wel — kwetsbaarheid stijgt.» → nu «Wel degelijk een probleem — wat gebeurt er als er een nieuwe ziekte opduikt?» (hint noemde het antwoord)
- stap 4 vraag 4: optie 3 was «N veroorzaakt zure regen» (hint «… kan ook leiden tot zure regen …») → nu «N maakt de bodem droger» met hint «Stikstof verandert vooral de voedselrijkdom van de bodem, niet het vochtgehalte.» (afleider half goed: verzuring door stikstofdepositie bedreigt ook biodiversiteit)
- stap 5 vraag 2: vraag was «… Wat is de groeiratio r per jaar?» → nu «… Wat is de groeiratio r per jaar in het model N(t) = N₀ · e^(r·t)?» (dubbelzinnig: als gewone groeifactor is 1,0 (100%) ook goed)

#### evolutie-havo-vwo · gecontroleerd 25 · hersteld 6 · verwijderd 0
- stap 1 vraag 4: was «Eilanden hebben verschillende klimaat» → nu «Elke eilandvink stamt af van een andere vogelsoort» (afleider half waar, hint gaf toe dat klimaat meespeelt; ook taalfout)
- stap 1 vraag 4: hint was «Klimaat speelt rol maar voedsel is hoofdverklaring.» → nu «Nee — de vinken hebben juist één gemeenschappelijke voorouder.» (past bij nieuwe afleider)
- stap 1 vraag 5: was «Een populatie heeft 4 nakomelingen-paren met max 2 overlevers per paar» → nu «Een vogelpaar krijgt 8 jongen, maar er is maar voedsel voor 2…» (vraag onduidelijk)
- stap 1 vraag 5: was «Selectie: helft sterft, sterkste overleven» → nu «Concurrentie: de best aangepaste jongen hebben de grootste overlevingskans» (fitness is niet "sterkste", spreekt eigen stap-uitleg tegen)
- stap 1 vraag 5: was «Eigenaar populatie kiest» / hint «Onzin.» → nu «De ouders kiezen bewust welke jongen overleven» / «Is selectie een bewuste keuze?» (onzin-afleider)
- stap 2 vraag 4: was «q² = 0,04 (= 4%)» → nu «0,04 (= 4%)» (formule in optie verklapte het goede antwoord)
- stap 2 vraag 4: was «0,4» (dubbel met «2q = 0,4») → nu «0,32»; hint «dat is heterozygoot» → «dat is de frequentie van de heterozygoten (2pq)» (hint was feitelijk fout: 2pq = 0,32, niet 0,4)
- stap 3 vraag 3: hint was «Mogelijk maar bottleneck is specifieker.» → nu «Nee — er heeft geen kleine groep een nieuw gebied gekoloniseerd.» (hint suggereerde dat afleider ook goed kon zijn)
- stap 4 vraag 1: hint was «Mogelijk maar specifiek.» → nu «Nee — het gaat om gemeenschappelijke afkomst, niet om gelijke functie.» (hint suggereerde tweede goed antwoord)
- stap 5 vraag 2: uitlegPad was «allel-frequentie in evenwicht ~30% Afrika» → nu «(in delen van Afrika is tot ~30% van de mensen drager)» (feitfout: 30% is dragerfrequentie, niet allelfrequentie)

#### fotosynthese-biologie · gecontroleerd 26 · hersteld 5 · verwijderd 0
- stap 2 vraag 4: was «Eigen voedsel van buitenaf» → nu «Kant-en-klare suiker van buitenaf» (tegenstrijdige formulering; plant heeft wél voedingsstoffen uit de grond nodig, dus dubbelzinnig)
- stap 4 vraag 1: was «Water» → nu «Suiker»; hint «Verdampen wel water maar O₂ is wat we bedoelen.» → «Die suiker houden ze zelf als voedsel.» (planten geven overdag ook water af: twee goede antwoorden)
- stap 4 vraag 3: was «alle verdwijnen» → nu «allemaal verdwijnen» (taalfout in vraag)
- stap 4 vraag 4: was «Nee, ze maken juist CO₂» → nu «Ja, maar minder dan overdag»; hint aangepast (oude afleider was ook goed, hint gaf dat toe)
- stap 6 vraag 6: was «**Naaldbomen** *(zoals dennen)* verliezen ... ?» / «Geen naalden in herfst (altijdgroen)» → nu «Een **den** *(naaldboom)* verliest in de herfst ... ?» / «Niet al zijn naalden (blijft groen)» (lariks is een naaldboom die wel alle naalden verliest; dennen verliezen wel enkele naalden)

#### genetica-erfelijkheid-biologie · gecontroleerd 35 · hersteld 3 · verwijderd 0
- stap 5 vraag 1: hint was «Andersom — vader bepaalt.» → nu «Kijk welke chromosomen elke ouder kan doorgeven.» (hint noemde letterlijk het goede antwoord)
- stap 9 vraag 9: was «Niet» → nu «Geen symbool» (betekenisloze optie)
- stap 9 vraag 15: was «Niet» → nu «Niet relevant» (betekenisloze optie)
- stap 8 uitleg (geen check): was «Eerste therapie goedgekeurd in 2017.» → nu «Eerste gentherapie in Europa goedgekeurd in 2012, in de VS in 2017.» (feitfout; niet meegeteld in M)

#### genetica-havo-vwo · gecontroleerd 25 · hersteld 5 · verwijderd 0
- stap 3 vraag 5: hints B+C waren «Niet — wel mogelijk maar hemofilie zit op X.» → nu «Niet — bij een dominante aandoening zouden draagsters zelf ziek zijn.» / «Niet — kijk waarom hemofilie bijna alleen bij jongens voorkomt.» (hints gaven antwoord weg en zeiden "wel mogelijk")
- stap 4 vraag 1: was «Aandoening is recessief (ouders zijn dragers)» → nu «Aandoening is recessief (verborgen bij de ouders)» (bij X-gebonden recessief is de vader géén drager; afleider «Geslachtsgebonden» is niet uitgesloten)
- stap 5 vraag 1: hint was «Niet — testcross is 1:1.» → nu «Niet — maak het Punnett-vierkant: hoeveel vakjes zijn aa?» (hint verklapte 1:1 = 50/50)
- stap 5 vraag 2: hint was «Niet — AA × OO zou alleen AO geven, geen O.» → nu «Niet — een AA-moeder kan geen O-allel doorgeven.» (hint ging uit van onbekend genotype vader)
- stap 5 vraag 4: hint was «Niet — meiose doet het.» → nu «Niet — er is wel een deling die het aantal chromosomen halveert.» (hint noemde het goede antwoord)

#### hart-bloed-ademhaling-havo-vwo · gecontroleerd 25 · hersteld 3 · verwijderd 0
- stap 1 vraag 4: hint was «Hersens controleren WEL.» → nu «Hersenen kunnen het tempo bijsturen, maar de impuls ontstaat in het hart zelf.» (hint suggereerde dat de afleider klopte)
- stap 3 vraag 3: was «Zeldzaam in NL» / hint «Niet zo zeldzaam.» → nu «Alleen geschikt voor mensen met bloedgroep O» / «Denk aan welke antigenen O-negatief bloed mist.» (O− is ~6-7%: "zeldzaam" is betwistbaar, dus dubbelzinnig)
- stap 4 vraag 1: uitlegPad was «~70 m² per persoon (tennisbaan)» → nu «(ongeveer een halve tennisbaan)» (feitfout: tennisbaan is ~260 m²)

#### immuunsysteem-havo-vwo · gecontroleerd 25 · hersteld 1 · verwijderd 0
- stap 5 vraag 2: was «Sommige schimmels» / hint «Wel (antifungale).» → nu «Bacteriële longontsteking» / «Wel — die wordt door bacteriën veroorzaakt.» (antibiotica werken niet tegen schimmels: twee goede antwoorden)
- stap 3 uitleg (geen check): «Geïnactiveerd: griep, polio (IPV), tetanus» → «…, hepatitis A» (tetanus is een toxoïdvaccin en stond er dubbel in; niet meegeteld in M)

#### mens-biologie-vmbo · gecontroleerd 27 · hersteld 4 · verwijderd 0
- stap 1 vraag 3: hint was «Fijne motoriek = kleine hersenen.» → nu «Fijne motoriek regelen de grote en kleine hersenen, niet de hersenstam.» (feitelijk onvolledig/fout)
- stap 2 vraag 2: hint was «Diafragma helpt ademen, niet lymfestroom.» → nu «Het middenrif alleen verklaart het niet — wat voorkomt dat lymfe terugstroomt?» (sprak de eigen uitleg tegen: ademen helpt de lymfestroom wél)
- stap 2 vraag 3: hint was «Plasma … vervoert opgeloste stoffen maar niet O₂.» → nu «Plasma vervoert maar heel weinig O₂ — de meeste zuurstof zit gebonden in cellen.» (feitfout)
- stap 6 vraag 2: was «Wat zit er in lymfevloeistof?» + opties «Plasma + plaatjes», «Niets — lymfe is leeg» → nu «Welke bloedcellen zitten er in lymfevloeistof?» + «Alleen bloedplaatjes», «Geen enkele bloedcel» (lymfe bestaat vooral uit vocht, dus «alleen witte bloedcellen» klopte niet als antwoord op de oude vraag; hint over plasma was fout)
- stap 3 uitleg (geen check): «~300 miljoen per long» → «~300 miljoen in totaal» (sprak stap 3 vraag 4 tegen; niet meegeteld in M)

#### voortplanting-hormonen-biologie · gecontroleerd 28 · hersteld 6 · verwijderd 0
- stap 3 vraag 2: was «Veel meer — 1-2 miljoen.» / «Veel meer — miljoenen.» → nu «Veel meer — de voorraad bij geboorte is enorm groot.» / «Veel meer — denk in een heel andere orde van grootte.» (hints noemden het goede antwoord)
- stap 4 vraag 1: was «Er is wel degelijk een reden — temperatuur.» → nu «… — denk aan wat zaadcellen nodig hebben om goed te groeien.» (hint gaf antwoord weg)
- stap 5 vraag 2: was «Te lang — alleen ~24 uur.» → nu «Te lang — een eicel leeft na de eisprong veel korter.» (hint noemde antwoord)
- stap 6 vraag 1: was «Slechts één — DNA versmelt 1-op-1.» → nu «Veel te veel — denk aan wat de eicel doet zodra er een zaadcel binnen is.» (hint noemde antwoord)
- stap 6 vraag 2: was «Te lang/Te kort — 9 maanden is gemiddeld.» → nu «Te lang/Te kort — tel de drie trimesters bij elkaar op.» (2 hints noemden antwoord)
- stap 7 vraag 3: was «De hersenen blijven nog 9 jaar daarna ontwikkelen.» → nu «Veel langer — ook na je tienerjaren gaat de ontwikkeling door.» (16+9=25 gaf antwoord weg)

#### zenuwstelsel-hormonen-havo-vwo · gecontroleerd 25 · hersteld 2 · verwijderd 0
- stap 2 vraag 5: was «Niet primair — myeline eerst.» → nu «Niet primair — denk aan de isolatielaag die de geleiding versnelt.» (hint noemde antwoord)
- stap 5 vraag 3: was «Wel indirect, maar bron is schildklier.» → nu «Kan indirect meespelen, maar maakt zelf niet het hormoon dat de stofwisseling regelt.» (hint noemde antwoord)

#### bbp-conjunctuur-economie · gecontroleerd 42 · hersteld 5 · verwijderd 0
- stap 1 vraag 1: was «… de eerste B staat voor 'bruto'. Wat meet het?» → nu «… denk aan wat een land in een jaar maakt. Wat meet het?» (alleen optie 0 bevat 'Bruto')
- stap 3 vraag 2: was optie «Te veel geld» + hint «Indirect.» → nu «Olie wordt wereldwijd goedkoper» + «Goedkopere olie drukt prijzen juist omlaag.» (te veel geld leidt tot vraaginflatie: half goed)
- stap 6 vraag 1: was «denk aan 'binnenlands' …» / «de middelste B staat voor 'binnenlands'.» → nu «het gaat over alles wat een land in een jaar maakt.» / «het gaat over de productie van een heel land.» (hints gaven antwoord weg)
- stap 6 vraag 15: was «Wat is een **kerncijfer voor economische gezondheid**?» → nu «Welke **combinatie van cijfers** geeft het beste beeld van de economische gezondheid?» ('Alleen BBP' is ook een kerncijfer: dubbelzinnig)
- stap 6 vraag 19: was optie «Geen vaste lengte» + hint «Wel typische lengte.» → nu «1 maand» + «Veel te kort — één hele golf duurt jaren.» (geen vaste lengte is feitelijk ook waar)
- stap 3 uitleg (geen check, niet meegeteld): was «Japan kampt al decennia met deflatie.» → nu «Japan kampte decennia lang met deflatie.» (verouderd: Japan heeft sinds 2022 inflatie)

#### bedrijfseconomie-havo-vwo · gecontroleerd 25 · hersteld 1 · verwijderd 0
- stap 3 vraag 4: was optie «Door dividend» + hints «Speelt rol maar niet primair.» / «Mogelijk maar niet hoofd-reden.» → nu «Doordat de kosten daalden» + «Dalende kosten laten juist méér geld over.» / «Belasting is een kostenpost die al in de winst zit — dat verklaart het verschil niet.» (dividenduitkering verklaart ook negatieve cashflow bij winst: twee goede opties)

#### crypto-blockchain-geld-beco · gecontroleerd 6 · hersteld 0 · verwijderd 0

#### marktvormen-havo-vwo · gecontroleerd 25 · hersteld 2 · verwijderd 0
- stap 1 vraag 2: was optie «Negatief» + hint «Niet — niet zo gemeten.» → nu «Precies 1 (proportioneel)» + «Dan zou de vraag evenredig met de prijs dalen — past dat bij een levensreddend middel?» (prijselasticiteit van de vraag ís negatief: optie was ook goed)
- stap 1 vraag 5: was «Niet — onder evenwicht is tekort.» → nu «Niet — hoeveel willen kopers en verkopers bij zo'n lage prijs?» (hint noemde antwoord)
- stap 2 uitleg (geen check, niet meegeteld): was «T-Mobile» → nu «Odido» (merknaam sinds 2023)
- stap 3 + 4 uitleg (geen check, niet meegeteld): was «Zie stap B» / «(zie C)» → nu «Zie stap 2» / «(zie stap 3)» (verwijzing klopte niet met stapnummering)

#### moederbedrijf-overname-sonac-beco · gecontroleerd 4 · hersteld 0 · verwijderd 0

#### pincode-belasting · gecontroleerd 42 · hersteld 6 · verwijderd 0
- stap 2 vraag 5: was «Was vroeger 2%, nu 0% voor starters.» → nu «Dat is het gewone tarief — geldt er voor jonge starters een uitzondering?» (hint noemde antwoord)
- stap 3 vraag 1: was «Dat zou degressief zijn.» → nu «Dat zou regressief zijn.» (verkeerde term)
- stap 3 vraag 5: was «Te laat — vóór 1 mei.» → nu «Te laat — de deadline valt al in het voorjaar.» (hint noemde antwoord)
- stap 4 vraag 2: was «Voor iedereen.» → nu «Ook wie geen loon heeft, bijvoorbeeld met AOW of een uitkering, kan hem krijgen.» (hint noemde antwoord)
- stap 5 vraag 2: was «Onafhankelijk van inkomen.» / «Voor alle ouders.» → nu «Kijk of het bedrag afhangt van wat je verdient.» / «Of je alleen of samen opvoedt, maakt voor het recht niet uit.» (hints noemden antwoord)
- stap 5 vraag 5: was «Niet leeftijd-gebonden.» → nu «Ook stellen kunnen hem krijgen — gezinsvorm is niet de voorwaarde.» (hint paste niet bij optie 'Alleen alleenstaanden')

#### pincode-buitenland-eu · gecontroleerd 42 · hersteld 4 · verwijderd 0
- stap 1 vraag 4: was «Rotterdam ~470 mln ton goederen/jaar» → nu «Rotterdam ~440 mln ton goederen/jaar» (verouderd cijfer: 2023 ≈ 439 mln ton; zelfde correctie ook in de stap-uitleg)
- stap 3 vraag 1: was hint «Zo groot was de EEG rond 1986; nu 27.» → nu «Zo groot was de EEG rond 1986; sindsdien zijn er veel landen bijgekomen.» (hint noemde het goede antwoord)
- stap 4 vraag 6: was hint «Dat is gereguleerd.» → nu «Als de overheid de koers vastzet, heet dat een vaste koers.» (feitfout: "overheid bepaalt vast" is een vaste koers, geen gereguleerde)
- stap 5 vraag 5: was optie «Goedkoop» → nu «Klein en licht» (half goede afleider: containers maakten transport juist goedkoop) + hint aangepast
- stap 5 vraag 5: was hint «Standaardisatie is de sleutel.» → nu «Uiterlijk maakt voor transport niets uit.» (hint verklapte het antwoord)

#### pincode-geld-sparen-lenen · gecontroleerd 53 · hersteld 1 · verwijderd 0
- stap 5 vraag 1: was optie «Geeft het terug bij vraag» → nu «Stuurt het door naar de Belastingdienst» (afleider was half waar: spaargeld is opvraagbaar), hint mee aangepast

#### pincode-inkomen-welvaart · gecontroleerd 42 · hersteld 4 · verwijderd 0
- stap 1 vraag 2: was hint «Consumptie kan, maar 'vrij' is specifieker.» → nu «Een consumptiegoed is een schaars goed dat je koopt — is lucht schaars?» (hint maakte een tweede optie half goed)
- stap 2 vraag 6: was hint «… maar de output IS natuur.» → nu «… maar wat haalt een mijn uit de grond?» (hint verklapte het antwoord)
- stap 7 vraag 2: was hint «AOW geldt voor iedereen.» → nu «Ondernemerschap is geen voorwaarde voor AOW.» (hint verklapte het antwoord)
- stap 7 vraag 5: was «Een student verliest haar bijbaan … Welke uitkering?» → nu «Sanne (25) studeert niet, verliest haar kleine bijbaan …» (feitfout: wie studiefinanciering kan krijgen heeft geen recht op bijstand; uitlegPad mee aangepast)

#### pincode-ondernemen · gecontroleerd 54 · hersteld 8 · verwijderd 0
- stap 1 vraag 1: was hint «Het past wel — sieraden maken is productie.» → nu «Het past wel in één van de drie types — maak je zelf iets, verkoop je door, of lever je een dienst?» (hint verklapte het antwoord)
- stap 4 vraag 1: was hint bij €1.200 «Variabele kosten ook aftrekken.» → nu «Je trok alleen de variabele kosten af — de vaste kosten ook.» (hint klopte niet: €2.000 − €800 = €1.200)
- stap 4 vraag 1: was hint bij €500 «Niet alle vaste kosten zijn afgetrokken.» → nu «Dat is alleen het bedrag van de vaste kosten, niet de winst.» (hint klopte niet)
- stap 4 vraag 3: was hint «Aantal zegt niets — break-even gaat over geld.» → nu «Bij break-even verkoop je niet het maximum — denk aan winst en verlies.» (spreekt uitleg tegen: break-even is juist een aantal)
- stap 4 vraag 5: was hint «Dat is de prijs als percentage van inkoop.» → nu «Een marge kan niet boven 100% van de verkoopprijs liggen — deel door de verkoopprijs.» (rekenfout: €5/€1,50 = 333%, niet 350%; basiskennis mee aangepast)
- stap 7 vraag 1: was hint «Niet allemaal — alleen BV.» → nu «Niet allemaal — bij welke rechtsvorm is het bedrijf een aparte rechtspersoon?» (hint verklapte het antwoord)
- stap 7 vraag 3: was hint «Eigenaars BV betalen IB over loon, BV zelf VPB.» → nu «De eigenaar betaalt IB over zijn loon — maar welke belasting betaalt de BV zelf over haar winst?» (hint verklapte het antwoord)
- stap 7 vraag 5: was hint «Onder €100k is eenmanszaak (met aftrek) voordeliger.» → nu «Bij een kleine winst is een eenmanszaak (met aftrekposten) juist voordeliger.» (hint verklapte de grens van €100k)
- stap 8 vraag 3: was hint «… Reken: €121/1,21 = €100, dus €21 BTW.» → nu «… Reken eerst terug met €121 / 1,21.» (hint gaf het antwoord letterlijk)

#### pincode-ontwikkelingslanden · gecontroleerd 42 · hersteld 1 · verwijderd 0
- stap 6 vraag 2: was «Welk keurmerk gaat over koffie/cacao?» → nu «Welk keurmerk gaat over eerlijke handel in koffie/cacao?» (afleider EU-bio staat ook op biologische koffie/cacao, dus er waren twee verdedigbare antwoorden)

#### pincode-overheid · gecontroleerd 42 · hersteld 3 · verwijderd 0
- stap 1 vraag 2: was «IB-schijven 37-49%» → nu «IB-schijven ~36-49,5%» (theorie: de laagste schijf is in 2026 35,75% en de hoogste 49,50%)
- stap 2 vraag 2: was hint «Was vroeger Rijk, sinds 2015 gedecentraliseerd.» → nu «Lag vroeger bij Rijk en provincie, sinds 2015 gedecentraliseerd.» (vóór de Jeugdwet 2015 lag de jeugdzorg grotendeels bij de provincies, Bureau Jeugdzorg)
- stap 2 vraag 2: was «van Rijk → gemeente» / «Voor 2015 was jeugdzorg landelijk» / «niet meer het Rijk» → nu «van Rijk en provincie → gemeente» / «Voor 2015 lag jeugdzorg bij Rijk en provincie» / «niet meer Rijk en provincie» (uitlegPad stappen, basiskennis en simpeler; dezelfde feitfout)
- stap 4 vraag 3: was «Lening-papiertje van de staat aan investeerder, met rente» → nu «Lening-papiertje: investeerder leent de staat geld, met rente» (de oude zin kon gelezen worden als: de staat leent geld aan de investeerder, dus andersom)

#### pincode-werk-arbeidsmarkt · gecontroleerd 42 · hersteld 2 · verwijderd 0
- stap 2 vraag 1: was «Contract < 6 mnd: GEEN proeftijd. 6 mnd-2 jr: max 1 mnd» → nu «Contract van 6 mnd of korter: GEEN proeftijd. Langer dan 6 mnd en korter dan 2 jr: max 1 mnd» (art. 7:652 BW: bij een contract van ten hoogste 6 maanden geen proeftijd; de grens stond verkeerd. Ook niveau simpeler aangepast)
- stap 4 vraag 4: was «Bijna 1 op 5 NL'ers is 65+» → nu «Ruim 1 op 5 NL'ers is 65+» (aandeel 65+ is sinds 2024 ruim 20%)
- stap 2 (stap-uitleg, geen vraag): «&lt; 2 jr» en «&lt; 6 mnd» stonden als letterlijke HTML-code in de tekst (geen SVG). Nu «< 2 jr» en «van 6 mnd of korter» (zelfde grensfout als hierboven)

#### rechtsvormen-overzicht · gecontroleerd 15 · hersteld 2 · verwijderd 0
- stap 1 vraag 2: was hint «Bij eenmanszaak en VOF loop je wél privé risico.» → nu «Er zijn wél rechtsvormen waarbij je privé risico loopt.» (de hint noemde letterlijk het goede antwoord)
- stap 5 vraag 1: was hint «Eenmanszaak en VOF zijn juist géén rechtspersoon.» → nu «Staat bij deze vormen het bedrijf juridisch los van de eigenaar?» (de hint sloot beide andere vormen uit en verraadde zo het antwoord BV en NV)

#### vraag-aanbod-economie · gecontroleerd 25 · hersteld 11 · verwijderd 0
- stap 4 vraag 2: wrongHints was «…→ overschot, geen tekort.» / «Andersom — overschot duwt prijs juist terug.» → nu «Kijk bij een hoge prijs: willen kopers dan veel of weinig? En verkopers?» / «Andersom — wat doen verkopers met spullen die blijven liggen?» (hints noemden het antwoord 'overschot')
- stap 5 vraag 2: wrongHint was «Substituut: koffie duur → thee aantrekkelijker, dus méér thee.» → nu «Koffie en thee zijn vervangers — waar stappen koffiedrinkers op over?» (hint gaf antwoord weg)
- stap 6 vraag 2: wrongHint was «Subsidie verlaagt kosten → meer aanbod, niet minder.» → nu «…kunnen producenten dan meer of minder leveren?» (hint gaf antwoord weg)
- stap 7 vraag 2: wrongHints was «Dat is bij aanbod naar links.» / «Dat is bij vraag naar rechts.» → nu «Beide dalen hoort bij minder vraag, niet bij meer aanbod.» / «Dat hoort bij minder aanbod, niet bij meer.» (feitfout: hints hoorden bij de verkeerde opties)
- stap 8 vraag 1: wrongHint was «Niet de hoofdreden.» → nu «Zon is juist goed voor aardbeien — wanneer wordt er geoogst?» (suggereerde dat onzin-optie deels klopt)
- stap 8 vraag 2: wrongHint was «…— het aanbod is ook beperkt.» → nu «…— kijk ook naar de andere kant van de markt.» (hint noemde het antwoord)
- stap 9 vraag 1: wrongHints was «Aanbod ↑ = prijs ↓ + Q ↑.» / «Dat zou bij vraag ↑ kunnen.» / «Aanbod ↑ → meer Q, niet minder.» → nu richtinggevende hints per optie (eerste gaf antwoord weg, tweede was feitfout, derde paste niet bij 'Beide stijgen')
- stap 9 vraag 2: wrongHints was «Vraag ↑ = P ↑ + Q ↑.» / «Hogere vraag = hogere prijs, niet lagere.» → nu «Meer kopers voor dezelfde fietsen — wordt het dan goedkoper?» / «Denk aan wat verkopers doen als veel meer mensen hetzelfde willen kopen.» (hints gaven antwoord weg)
- stap 9 vraag 6: wrongHint was «Niet — meer vraag = prijs OMHOOG (niet omlaag).» → nu «Niet — meer kopers voor hetzelfde aantal producten: wordt het dan goedkoper?» (hint gaf antwoord weg)
- stap 9 vraag 7: optie was «Productie­kosten» (zacht afbreekstreepje) → nu «Productiekosten» (onzichtbaar teken)
- stap 9 vraag 9: optie was «Productie­machine» (zacht afbreekstreepje) → nu «Productiemachine» (onzichtbaar teken)
- stap 9 vraag 9: wrongHint was «Tegenovergesteld — substituut IS vervanger.» → nu «Tegenovergesteld — iets unieks heeft juist geen alternatief.» (hint gaf antwoord weg)

#### filosofie-havo-vwo · gecontroleerd 25 · hersteld 3 · verwijderd 0
- stap 1 vraag 4: optie was «…; controle wat je WEL kunt» → nu «…; beheers wat je WEL kunt» (taalfout)
- stap 1 vraag 4: optie was «Voorname leven» → nu «Zoek zoveel mogelijk genot» (onzin/typefout); hint «Niet specifiek.» → «Niet — dat lijkt meer op hedonisme.»
- stap 3 vraag 1: wrongHint was «Niet — Kant seculier.» → nu «Niet — Kant baseert de plicht op de rede, niet op geloof.» (feitelijk onjuist: Kant was niet seculier)
- stap 5 vraag 5: vraag was «**Vier hoofdwaarden** westerse ethiek:» → nu «Welk rijtje wordt vaak genoemd als **hoofdwaarden** van de westerse ethiek?» (er bestaat geen vaste canon; afleider «Geen vaste set» was daardoor verdedigbaar)
- stap 5 vraag 5: optie was «Geen vaste set» → nu «Eer, gehoorzaamheid, traditie, orde»; hint «Wel set.» → «Dat past eerder bij de oude standensamenleving.» (tweede goede optie)

#### filosofie-vwo · gecontroleerd 25 · hersteld 4 · verwijderd 0
- stap 1 vraag 5: wrongHint was «Niet — alleen fenomenen.» → nu «Niet — één van de twee blijft voor ons verborgen.» (hint noemde het antwoord)
- stap 3 vraag 5: vraag was «Peter Singer introduceerde term:» → nu «Peter Singer maakte welke term bekend?» (feitfout: term is bedacht door Richard Ryder, 1970)
- stap 3 vraag 5: optie was «Speciecism (soortisme)» → nu «Speciesisme (soortisme)» (spelfout; ook in uitlegPad-niveaus); uitlegPad vermeldt nu Ryder als bedenker
- stap 5 vraag 1: wrongHint was «Niet — deugd ligt in midden.» → nu «Niet — juist de uitersten zag Aristoteles als ondeugd.» (hint noemde het antwoord)
- stap 5 vraag 5: wrongHint was «Klopt impliciet maar de uitspraak gaat verder.» → nu «Niet — Nietzsche beschrijft wat er met het geloof in onze cultuur gebeurt.» (hint maakte afleider half goed)

#### franse-revolutie-geschiedenis · gecontroleerd 26 · hersteld 0 · verwijderd 0

#### gouden-eeuw-geschiedenis · gecontroleerd 26 · hersteld 1 · verwijderd 0
- stap 2 vraag 4: optie was «Nieuw-Utrecht» → nu «Nieuw-Zwolle» (Nieuw-Utrecht bestond wél in Nieuw-Nederland, nu deel van New York/Brooklyn; hint «Bestond niet.» was fout)
- stap 2 vraag 4: optie was «Vlissingen» → nu «Middelburg»; hint «Echte plaats in Zeeland.» → «Echte stad in Zeeland, niet in Amerika.» (Vlissingen/Flushing werd ook deel van New York)

#### industriele-revolutie-havo-vwo · gecontroleerd 25 · hersteld 3 · verwijderd 0
- stap 4 vraag 3: optie was «…eerste niet-Europese industrieland» → nu «…eerste niet-westerse industrieland» (feitfout: VS was eerder; ook in stap-4-uitleg gecorrigeerd)
- stap 4 vraag 4: uitlegPad was «Bismarck bracht 14 Europese landen samen» → nu «14 landen (vooral Europese)» (VS en Ottomaanse Rijk deden ook mee)
- stap 5 vraag 1: optie was «Frankrijk» → nu «Latijns-Amerika»; hint «Niet — 1789 was burgerlijk.» → «Niet — daar waren in Marx' tijd nauwelijks fabrieken.» (Marx rekende Frankrijk juist tot de rijpe industrielanden — afleider half goed)

#### kolonie-indonesie · gecontroleerd 25 · hersteld 7 · verwijderd 0
- stap 1 vraag 5: vraag was «Wat is de hoofdstad…» → nu «Wat was de hoofdstad…» (verouderd/tijd); hint «Jakarta is moderne naam (sinds 1949)» → «zelfde plek, maar die naam hoort bij de tijd na de Nederlanders» (naam Djakarta al in 1942 door Japan)
- stap 2 vraag 2: wrongHint was «Bijna — gerelateerd maar specifieker dan algemene belasting.» → nu «Niet — het is geen soort belasting, maar een uitkomst van de koloniale boekhouding.» (maakte afleider half goed)
- stap 2 vraag 4: uitlegPad was «Speerpunten … volgens koningin Wilhelmina (troonrede 1901)» → nu «uitgewerkt door o.a. C.Th. van Deventer; de koers begon met de troonrede van koningin Wilhelmina, 1901» (trias kwam niet uit de troonrede)
- stap 3 vraag 2: wrongHint was «Tegenstanders van koloniale onderdrukking…» → nu «Een criticus en een stichter van het koloniale bewind — allebei uit een veel eerdere tijd.» (feitfout: Coen was geen tegenstander)
- stap 3 vraag 3: wrongHint was «Bijna — die zaten in aparte kampen…» → nu «Niet — krijgsgevangenen zaten in aparte kampen en heetten geen 'romusha'.» (maakte afleider half goed)
- stap 3 vraag 5: wrongHint was «Niet helemaal verdwenen, maar wel doorbroken.» → nu «Te sterk — Nederland probeerde na 1945 zelfs nog terug te keren.» (hint noemde het antwoord)
- stap 4 vraag 5: vraag was «Welke koning bood excuses…» → nu «Welk staatshoofd bood in 2020 excuses…» (alleen Willem-Alexander is koning; vraag gaf antwoord weg)

#### middeleeuwen-geschiedenis · gecontroleerd 26 · hersteld 4 · verwijderd 0
- stap 1 vraag 4: wrongHint was «Niet specifiek.» → nu «Niet — de grote pest kwam pas eeuwen later.» (nietszeggende hint)
- stap 3 vraag 3: optie was «Afrika» → nu «Engeland»; hint «Niet specifiek.» → «Niet — daar kwamen juist veel kruisvaarders vandaan.» (5e/7e/8e kruistocht gingen naar Egypte/Tunis — afleider half goed)
- stap 4 vraag 3: optie was «Toets doen» → nu «Door de koning benoemd worden»; hint «Werk + leer-jaren.» → «Niet — het gilde bepaalde zelf wie meester werd.» (meesterproef = toets, afleider half goed)
- stap 5 vraag 1: wrongHint was «Wel beetje, maar pest is de Zwarte Dood.» → nu «Niet — denk aan iets waaraan miljoenen mensen in korte tijd stierven.» (hint maakte afleider half goed en noemde het antwoord)

#### romeinen-geschiedenis · gecontroleerd 26 · hersteld 3 · verwijderd 0
- stap 3 vraag 3: was «Letterlijk klopt maar het is politiek concept.» → nu «Niet één gerecht — het is een politiek begrip.» (hint suggereerde dat afleider "Een gerecht" ook klopte)
- stap 4 vraag 4: was «Stenen bruggen die water naar steden brengen» → nu «Waterleidingen die water naar steden brengen» (aquaduct = waterleiding; de brug is maar een onderdeel, feitelijk onjuist)
- stap 5 vraag 4: was «Wel — Oost bleef.» → nu «Wel — kijk naar de splitsing van 395.» (hint gaf het antwoord weg)

#### sociale-zekerheid-nl · gecontroleerd 25 · hersteld 6 · verwijderd 0
- stap 1 vraag 2: was «Veel later (na WO2).» → nu «Veel later (pas in de 20e eeuw).» (eerste Kinderbijslagwet was 1939, dus "na WO2" fout)
- stap 1 vraag 2: was «Niet — geen gezondheidszorg in 1874.» → nu «Niet — gratis zorg regelde de staat in 1874 niet.» (feitfout: er was wél gezondheidszorg)
- stap 1 vraag 4: was «Wel hulp, maar via familie/kerk.» → nu «Wel — er waren wel mensen en groepen die hielpen. Welke?» (hint noemde het goede antwoord)
- stap 3 vraag 3: was «Niet — Slochteren ligt in Groningen.» → nu «Niet — Slochteren ligt niet in Limburg.» (hint gaf het antwoord weg)
- stap 3 vraag 4: was «…maar het woord staat voor overleg-cultuur.» → nu «…maar het gaat hier niet om water.» (hint gaf de definitie = het antwoord)
- stap 5 vraag 4: was «Meer mensen worden grijs» → nu «Meer jongeren, minder ouderen in bevolking» (half-goede afleider; hint gaf zelf toe "letterlijk wel")
- stap 5 vraag 4: was «Letterlijk wel, maar in context van bevolking belangrijker.» → nu «Andersom — kijk naar wat er met de leeftijd van de bevolking gebeurt.» (hint aangepast aan nieuwe afleider)
- stap 5 vraag 5: was «Niet — toen trad Rutte IV af.» → nu «Niet — toen nam kabinet-Schoof het over.» (feitfout: Rutte IV viel op 7 juli 2023; 2 juli 2024 trad kabinet-Schoof aan)

#### staatsinrichting-1848 · gecontroleerd 25 · hersteld 0 · verwijderd 0

#### tachtigjarige-oorlog-geschiedenis · gecontroleerd 26 · hersteld 10 · verwijderd 0
- stap 1 vraag 2: was «…maar de hoofdvervolging in dit conflict betrof calvinisten.» → nu «…maar dat was niet de hoofdvervolging in dit conflict.» (hint noemde het antwoord)
- stap 2 vraag 1: was «Niet 'storm' maar 'beeldenstorm' — vernieling van beelden.» → nu «Geen weer — denk aan wat er in de kerken gebeurde.» (hint gaf het antwoord)
- stap 2 vraag 2: was «Andersom — edelen werden zo genoemd om ze te beledigen.» → nu «Wel werden edelen zo genoemd — maar wat betekent het woord zelf?» (hint verklapte "spotnaam")
- stap 3 vraag 1: was «Andersom — de Bloedraad **strafte** opstandelingen.» → nu «Andersom — de Bloedraad stond aan de kant van Spanje.» (hint herhaalde het antwoord)
- stap 6 vraag 1: was «Andersom — Unie van Utrecht was protestants, anti-katholiek.» → nu «Nee — de katholieke zuidelijke provincies sloten een ándere unie.» (feitfout: de Unie beloofde gewetensvrijheid, was niet "anti-katholiek")
- stap 7 vraag 1: was «Te veel — er waren 7 noordelijke.» → nu «Te veel — dat is het aantal provincies van nu.» (hint noemde het antwoord)
- stap 10 vraag 2: was «Andersom — werd dicht.» / «Geen splitsing — gewoon afgesloten.» / «Niet drooggelegd — wel afgesloten.» → nu «Andersom — denk aan wat de Republiek wilde met Antwerpen.» / «Geen splitsing — wat had Amsterdam liever voor Antwerpen?» / «Niet drooggelegd — de rivier bleef, maar wat veranderde voor schepen?» (alle drie de hints gaven het antwoord)
- stap 10 vraag 3: was «De Eed van de Vrede van Münster door Gerard ter Borch» → nu «Een schilderij van Gerard ter Borch» (optie herhaalde de vraagtekst letterlijk)
- stap 10 vraag 3: was «Wel degelijk — Ter Borch.» → nu «Wel degelijk — er was zelfs een schilder bij aanwezig.» (hint noemde het antwoord)
- stap 11 vraag 3: was «Filips II — hij werd afgezworen door het Plakkaat» → nu «Filips II» (staart bij het goede antwoord maakte het doorzichtig)
- stap 11 vraag 4: was «…maar dit was Westfalen.» → nu «…maar niet in 1648.» (hint noemde het antwoord)

#### tijdvakken-geschiedenis · gecontroleerd 26 · hersteld 5 · verwijderd 0
- stap 1 (uitleg, geen vraag): was «Antwoord: tijdvak 6 (Regenten en vorsten, 1568-1648).» → nu «Antwoord: tijdvak 5 (Ontdekkers en hervormers) — de opstand begint in 1568.» (in strijd met de canon en met de eigen uitleg in stap 6/12)
- stap 2 vraag 1: was «Boekdrukkunst = ~1450, dat is tijdvak 5.» → nu «…dat is tijdvak 4.» (feitfout; 1450 valt in tijdvak 4 en stap 5 zegt dat ook)
- stap 4 vraag 1: was «Stemmen kwam pas veel later (Athene tijdvak 2, of moderne democratie tijdvak 8+).» → nu «Stemmen speelde hier geen rol — dat kwam pas met de moderne democratie (tijdvak 8+).» (tegenstrijdig: Athene is juist eerder)
- stap 7 vraag 2: was «Spanje had koningen, maar Lodewijk was Frans.» → nu «Spanje had koningen, geen keizers — en Lodewijk regeerde niet in Spanje.» (hint noemde het antwoord)
- stap 12 vraag 2: was «Tijdvak 5 — Ontdekkers» → nu «Tijdvak 5» (alleen het goede antwoord had een naam die aansluit op "ontdekking", dus weggever)
- stap 12 vraag 3: was «Tijdvak 9 — Wereldoorlogen» → nu «Tijdvak 9» (alleen het goede antwoord had een naam, dus weggever)

#### tweede-wereldoorlog-havo-vwo · gecontroleerd 25 · hersteld 3 · verwijderd 0
- stap 1 vraag 2: was «Niet — zijn dood.» (bij 1 mei 1945) → nu «Niet — toen was Hitler al dood (30 april 1945).» (feitfout: Hitler stierf op 30 april)
- stap 2 vraag 1: was «Niet — bevrijding Zuid.» (bij juli 1944) → nu «Niet — toen was Nederland al vier jaar bezet.» (feitfout: Zuid-Nederland werd vanaf september 1944 bevrijd)
- stap 5 vraag 5: was «Iets vroeger 1992-95.» → nu «De genocide van Srebrenica was in juli 1995.» (hint was verwarrend: 1992-95 omvat juist 1994)

#### twintigste-eeuw-havo-vwo · gecontroleerd 25 · hersteld 3 · verwijderd 0
- stap 2 vraag 5: was «Niet helemaal — nog hoger.» (bij ~95%) → nu «Te hoog — maar het was wel het hoogste percentage van West-Europa.» (feitfout: 75% is lager dan 95%)
- stap 3 vraag 1: was «Geen beleid, maar beeldspraak.» → nu «Geen beleid — Churchill beschreef iets anders.» (hint verklapte "symbolisch")
- stap 4 vraag 4: was «Wel — Dutchbat.» → nu «Wel — er waren wel Nederlanders bij betrokken.» (hint noemde een woord uit het goede antwoord)

#### verlichting-revoluties-havo-vwo · gecontroleerd 25 · hersteld 4 · verwijderd 0
- stap 1 vraag 1: was «Welke Verlichter formuleerde 'Sapere aude'…?» → nu «Welke Verlichter maakte 'Sapere aude'… tot motto van de Verlichting?» (de spreuk is van Horatius; Kant maakte er het motto van)
- stap 3 vraag 2: was «Niet — drie.» → nu «Te veel.» (hint noemde het antwoord)
- stap 3 vraag 3 (uitlegPad): was «28 juli 1794 (9 Thermidor)» → nu «28 juli 1794 (10 Thermidor)» (feitfout: 9 Thermidor = 27 juli, toen werd hij gearresteerd)
- stap 4 vraag 5: was «Onafhankelijkheid» → nu «Ingelijfd bij Pruisen» (half-goede afleider: Nederland werd wél onafhankelijk)
- stap 4 vraag 5: was «Niet — wel onafhankelijk maar samen met BE.» → nu «Niet — Pruisen kreeg wel gebied in het Rijnland, maar Nederland niet.» (hint gaf het antwoord en hoorde bij de oude afleider)
- stap 4 vraag 5: was «Niet — koninkrijk.» → nu «Niet — de tijd van de Republiek kwam niet terug.» (hint gaf het antwoord)

#### wereldoorlog1-geschiedenis · gecontroleerd 26 · hersteld 3 · verwijderd 0
- stap 1 vraag 1: was «Wel deels, maar M = militarisme.» → nu «Macht speelde mee, maar de M staat voor iets met legers en wapens.» (hint gaf antwoord weg)
- stap 4 vraag 1: was «Niet — neutraal.» (2×) / «Wel bekend.» → nu richtinggevende hints over België/Wilhelmina (hints noemden letterlijk het goede antwoord)
- stap 5 vraag 4: was «Welk **rijk viel uiteen** na WO1?» → nu «Welke **rijken vielen uiteen** na WO1?» (enkelvoud terwijl het antwoord drie rijken noemt, dubbelzinnig)

#### wereldoorlog2-geschiedenis · gecontroleerd 31 · hersteld 4 · verwijderd 0
- stap 6 vraag 1: was «NSB was juist Nederlands en pro-Duits.» → nu «Een leger was het niet — let op de 'B' van Beweging.» (hint gaf antwoord weg)
- stap 8 vraag 3: was «Andersom — eerst herdenken, dan vieren.» → nu «Denk aan de avond met twee minuten stilte — is dat feest of rouw?» (hint gaf antwoord weg)
- stap 9 vraag 2: was «Bijna — maar Westerbork was juist het *doorgangs*kamp; …» → nu «Bijna — maar vermoord werd vooral in kampen in bezet Polen. Welke rol had dit kamp in Drenthe dan?» (hint noemde het antwoord)
- stap 11 vraag 2: optie was «Anne Frank in onderduik (vanaf 1942) — D-Day was juni 1944» → nu «Anne Frank in onderduik eerst — D-Day kwam later» (goede optie bevatte de onderbouwing en viel daardoor op)
- stap 11 vraag 2: hints «Andersom — onderduik 1942, D-Day 1944.» / «Onderduik begon al in 1942, eerder.» → nu vragen om beide jaartallen op te zoeken (hints gaven antwoord weg)

#### ai-machine-learning-informatica · gecontroleerd 20 · hersteld 1 · verwijderd 0
- stap 2 vraag 1: was «Andersom: ML leert uit data, klassiek niet.» → nu «Kijk wie bij klassiek programmeren de regels bedenkt.» (hint herhaalde het goede antwoord)

#### algoritmen-pseudocode-informatica · gecontroleerd 20 · hersteld 1 · verwijderd 0
- stap 2 vraag 3: was «Het zijn er minder — de drie basisbouwstenen.» / «Juist niet — drie is genoeg.» → nu «Het zijn er minder — tel de bouwstenen uit deze stap.» / «Juist niet — een klein, vast aantal bouwstenen is genoeg.» (hints noemden het antwoord 3)

#### binair-datarepresentatie-informatica · gecontroleerd 16 · hersteld 1 · verwijderd 0
- stap 1 vraag 2: was «Je hebt een plaatswaarde gemist — let op de 8.» → nu «Let op de richting: de plaatswaarden lopen van rechts (1) naar links.» (11 = 1011 = 1101 achterstevoren gelezen; 11 bevat de 8 wél, dus de hint klopte niet)

#### cybersecurity-encryptie-informatica · gecontroleerd 20 · hersteld 3 · verwijderd 0
- stap 2 vraag 3: optie was «Als hash (onomkeerbaar versleuteld), …» → nu «Als hash (onomkeerbaar omgezet), …»; uitlegPad en stap-uitleg «onomkeerbare versleuteling» → «onomkeerbare omzetting (geen echte versleuteling — er is geen sleutel)» (feitfout: hashen is geen encryptie)
- stap 3 vraag 2: was «Niet per letter — per persoon een sleutelpaar.» → nu «Niet per letter — wat zegt 'asymmetrisch' (ongelijk) over de sleutels?» (hint gaf antwoord weg)
- stap 4 vraag 5: was «Juist niet — alleen wat nodig is.» → nu «Juist niet — de AVG wil dat organisaties zuinig zijn met gegevens.» (hint herhaalde het goede antwoord)

#### databases-sql-informatica · gecontroleerd 20 · hersteld 3 · verwijderd 0
- stap 2 vraag 3: was «… opsplitsen is een keuze tegen dubbele data.» → nu «… opsplitsen is een bewuste keuze. Welk probleem los je ermee op?» (hint gaf antwoord weg)
- stap 2 vraag 5: was «Juist hiervoor bestaat de primaire sleutel.» → nu «Dat kan wél — denk aan het veld dat in elke tabel voor ieder record anders is.» (hint noemde het antwoord)
- stap 4 vraag 2: was «De query werkt juist wél — op álles, en dat is het gevaar.» → nu «De query werkt zonder WHERE gewoon — maar op welke records dan?» (hint gaf antwoord weg)

#### hardware-besturingssysteem-informatica · gecontroleerd 20 · hersteld 4 · verwijderd 0
- stap 2 vraag 2: was «Niet-opgeslagen werk in RAM ben je wél kwijt.» → nu «Denk aan het vluchtige geheugen — wat blijft daar over zonder stroom?» (hint herhaalde het antwoord)
- stap 2 vraag 3: was «Cache is juist het snelst.» → nu «Cache zit juist ín de CPU — is die dan traag?» (feitelijk onjuist: registers zijn sneller dan cache)
- stap 3 vraag 3: was «Linux is juist een bekend open-source-OS.» → nu «Er bestaan wél open-source-besturingssystemen — welke draait vaak gratis op servers?» (hint noemde het antwoord)
- stap 4 vraag 4: was «De extensie hernoemen verandert de data niet.» → nu «Is een extensie een deel van de naam, of van de data zelf?» (hint gaf antwoord weg)

#### informatica-havo-vwo · gecontroleerd 25 · hersteld 2 · verwijderd 0
- stap 1 uitleg: was «eindexamen-vak (sinds vernieuwing 2019). CSE test 4 domeinen …» en «Talen (CSE: vaak Python of Java)» → nu «Er is géén centraal examen (CSE): je wordt getoetst via het schoolexamen (SE) …» en «Talen (op school vaak …)» (feitfout: informatica havo/vwo heeft alleen een schoolexamen; geen check, telt niet mee in M)
- stap 4 uitleg: was «AI-data-centers … ~3% wereldwijd elektriciteit 2024» → nu «datacenters (o.a. voor AI) … ~1,5% van alle elektriciteit wereldwijd in 2024» (IEA: ~415 TWh ≈ 1,5%; geen check)
- stap 2 vraag 4: was «Voorganger WPA3.» (bij optie WPA) → nu «Oud — inmiddels twee keer opgevolgd door nieuwere versies.» (feitfout: de opvolger van WPA is WPA2)
- stap 5 vraag 3: was «Niet — hash is one-way.» → nu «Kun je een hash terugrekenen naar de originele invoer?» (hint noemde het kenmerk uit het goede antwoord)

#### netwerken-internet-informatica · gecontroleerd 20 · hersteld 4 · verwijderd 0
- stap 1 vraag 2: was «Andersom: het web is een deel van wat over internet loopt.» / «Verwisseld: de kabels zijn het internet.» → nu «Kan een dienst groter zijn dan het netwerk waar hij overheen loopt?» / «Kijk nog eens: welk van de twee is de fysieke infrastructuur?» (hints gaven antwoord weg)
- stap 3 vraag 1: was «Juist niet als geheel — het wordt opgeknipt.» → nu «Juist niet — denk aan wat routers onderweg doorsturen.» (hint gaf antwoord weg)
- stap 3 vraag 5: was «TCP zorgt juist voor herzending.» → nu «Denk aan de volgnummers — merkt de ontvanger dat er een ontbreekt?» (hint herhaalde het goede antwoord)
- stap 4 vraag 5: was «… maar hij stuurt een request.» → nu «… maar wat vraagt hij dan aan de server?» (hint noemde het antwoord)

#### programmeren-basis-informatica · gecontroleerd 20 · hersteld 5 · verwijderd 0
- stap 1 vraag 3: was «Het mag gewoon — strings plakken aan elkaar.» → nu «Het mag gewoon — wat doet + met twee stukken tekst?» (hint gaf antwoord weg)
- stap 1 vraag 5: was «Ook als je een cijfer typt, komt het als tekst binnen.» → nu «Ook als je een cijfer typt — in welke vorm komt de invoer binnen?» (hint gaf antwoord weg)
- stap 2 vraag 1: was «Net andersom.» → nu «Kijk welke van de twee je in een if-voorwaarde gebruikt.» (bij een omgekeerde optie geeft "net andersom" het antwoord)
- stap 3 vraag 3: was «Sneller? Nee — het loopt juist eindeloos.» / «Hij draait juist eindeloos, niet één keer.» → nu «Sneller? Nee — wordt de voorwaarde ooit False?» / «Wordt de voorwaarde na één ronde ineens False?» (hints gaven antwoord weg)
- stap 4 vraag 2: was «Tonen is `print` — return geeft een waarde terug (…)» → nu «Tonen is `print` — return doet iets anders. Wat kun je daarna met de uitkomst?» (hint noemde het antwoord)

#### beeldhouwkunst-kunst · gecontroleerd 12 · hersteld 2 · verwijderd 0
- stap 1 vraag 1: was «Er is een duidelijk verschil: dimensies.» → nu «Er is wel een verschil — denk aan hoe je elk kunstwerk bekijkt.» (hint gaf antwoord weg)
- stap 1 vraag 3: was «Juist niet één kant — daarom loop je eromheen.» → nu «Is er bij een vrijstaand beeld echt maar één voorkant?» (hint gaf antwoord weg)

#### kleur-licht-compositie-kunst · gecontroleerd 13 · hersteld 1 · verwijderd 0
- stap 3 vraag 2: was «Juist níét in het midden — dat is het hele idee.» → nu «Oogt alles pal in het midden levendig, of juist een beetje saai?» (hint herhaalde letterlijk het goede antwoord)

#### kunst-havo-vwo · gecontroleerd 25 · hersteld 0 · verwijderd 0
- stap 4 stap-uitleg (geen vraag): was «Boijmans Van Beuningen Rotterdam (gerenoveerd)» → nu «(in renovatie, nog jaren dicht)» (feitfout: het museum is nog dicht)

#### maatschappijleer-havo-vwo · gecontroleerd 25 · hersteld 1 · verwijderd 0
- stap 1 vraag 5: was «Coalitie Schoof (juli 2024) bestaat uit:» → nu «… bestond uit:» (kabinet-Schoof bestaat niet meer: PVV stapte in juni 2025 uit, daarna verkiezingen op 29 okt 2025)
- stap 1 vraag 5: was hint «Onmogelijk NL.» → nu «Komt in NL vrijwel nooit voor.» (feitelijk te absoluut)

#### maatschappijwetenschappen-havo-vwo · gecontroleerd 25 · hersteld 1 · verwijderd 0
- stap 1 vraag 5: was «Coalitie-Schoof (juli 2024) bestaat uit:» → nu «… bestond uit:» (verouderd, zie hierboven)

#### media-wijsheid-maatschappijleer · gecontroleerd 26 · hersteld 2 · verwijderd 0
- stap 3 vraag 1: was optie «App zelf» (hint «App + algoritme.») → nu «Volgorde waarin posts geplaatst zijn» (hint «Dan zag je alles op tijd — maar je feed wordt juist voor je uitgekozen.») (dubbelzinnig: het algoritme ís onderdeel van de app)
- stap 5 vraag 1: was optie «Negeren en alleen blijven» (hint «Praat met iemand.») → nu «Je account meteen verwijderen» (hint «Dan raak je ook je bewijs kwijt — en stopt de pester er niet door.») (plaksel: 'negeren' is half goed)

#### mensenrechten-maatschappijleer · gecontroleerd 26 · hersteld 4 · verwijderd 0
- stap 1 vraag 3: was optie «Geen verschil» (zelfde als «Beide hetzelfde»), hint «Wel verschil.» → nu «Recht = verplicht, plicht = vrijwillig», hint «Denk aan belasting betalen: mag dat, of moet dat?» (twee identieke afleiders)
- stap 3 vraag 4: was «Hoeveel jaar moet je in NL verplicht naar school?» → nu «Van welke tot welke leeftijd geldt in NL de leerplicht?» (vraag paste niet bij de leeftijd-opties; na 16 geldt kwalificatieplicht)
- stap 4 vraag 3: was «Hoeveel kinderen werken wereldwijd ongeveer?» → nu «Hoeveel kinderen werkten wereldwijd ongeveer in 2020 (ILO)?» (verouderd; ~160 mln is het ILO-cijfer van 2020)
- stap 5 vraag 4: was optie «Burgemeester» (hint «Wel maar specifiek de Ombudsman.») → nu «Politieke partij» (hint «Een partij kan je mening meenemen, maar behandelt geen klachten over de overheid.») (hint noemde het antwoord en maakte 'burgemeester' half goed)

#### mensenrechten-vn-havo-vwo · gecontroleerd 25 · hersteld 1 · verwijderd 0
- stap 2 vraag 5: was optie «VN-soldaten» (hint «Algemener.») → nu «Groene baretten» (hint «Groene baretten zijn Nederlandse commando's, geen VN-troepen.») (twee opties goed: VN-soldaten is ook juist)
- stap 5 stap-uitleg (geen vraag): was «Hoogste Raad 2019» → nu «Hoge Raad 2019» (feitfout/typfout)

#### nederlandse-staat-maatschappijleer · gecontroleerd 34 · hersteld 9 · verwijderd 0
- stap 2 vraag 1: was hint bij 25 jaar «Nooit zo hoog geweest.» → nu «Dat was de grens rond 1917 — nu ligt hij een stuk lager.» (feitfout: vanaf 1917 was de kiesleeftijd 25)
- stap 3 vraag 1: was hint «Plato dacht ook over staat, maar Trias Politica = Montesquieu.» → nu «Plato leefde in de Griekse oudheid — dit idee komt uit de Verlichting (18e eeuw).» (hint noemde het antwoord)
- stap 3 vraag 2: was hint «Koning heeft geen wetgevende macht in NL.» → nu «Een 'koninklijke macht' bestaat niet in de Trias Politica.» (onjuist: de regering, inclusief de Koning, hoort formeel bij de wetgever)
- stap 4 vraag 1: was hint bij 100 «Te weinig — dit zou geen evenwichtige verhouding zijn.» → nu «Dat was het aantal vóór 1956 — sindsdien zijn het er meer.» (onzin-hint; 100 was het echte aantal tot 1956)
- stap 4 stap-uitleg: «Vergadert in Den Haag, Binnenhof» aangevuld met «(tijdens de verbouwing tijdelijk aan de Bezuidenhoutseweg)» (actualiteit)
- stap 9 vraag 2: was hint «Niet 16 — 14.» → nu «Te oud — de plicht begint al eerder.» (hint noemde het antwoord)
- stap 11 vraag 2: was optie «De Koning kan ministers ontslaan» (hint «Koning kan ministers niet ontslaan.») → nu «De Koning stemt mee in de Tweede Kamer» (hint «De Koning is geen Kamerlid en stemt nergens mee.»); in de uitlegPad de beweringen over ontslag aangepast naar «niet op eigen houtje» en «Stemt niet mee in de Kamer» (formeel worden ministers bij koninklijk besluit ontslagen (art. 43 Grondwet) → er waren twee verdedigbare antwoorden)
- stap 11 vraag 3: was «In welk gebouw vergadert de Tweede Kamer?» → nu «Welk gebouwencomplex is de vaste thuisbasis van de Tweede Kamer?»; in de uitlegPad «renovatie 2021-2027» → «Sinds 2021 … nog jaren» en «Troonrede» → «normaal de Troonrede» (verouderd: de Kamer vergadert nu tijdelijk aan de Bezuidenhoutseweg)
- stap 11 vraag 9: was hint «In NL kan dat niet — geen partij heeft meerderheid.» → nu «Komt in NL vrijwel nooit voor — geen partij haalt alleen een meerderheid.» (te absoluut)
- stap 11 vraag 11: was optie «Vrijheid van meningsuiting/vereniging» → nu «Recht op vergadering en betoging» (feitfout: demonstreren valt onder art. 9 Grondwet, niet onder vereniging (art. 8); was ook een plaksel-optie)

### Twijfel voor Mark

- aardobservatie-risico-havo-vwo stap 4 vraag 2 ↔ stap 5 vraag 3: in vraag 4.2 telt "dijken bouwen" als mitigatie (taal van rampenbeleid), maar in vraag 5.3 heet "hogere dijken" adaptatie (taal van klimaatbeleid). Allebei verdedigbaar, maar verwarrend voor een leerling. Een korte zin in de uitlegPad van 4.2 kan dit verhelderen.
- energie-hulpbronnen-havo-vwo stap 3 vraag 5: «Nord Stream-sabotage — daders onduidelijk» is mogelijk verouderd. Duitsland vaardigde in 2024-2025 arrestatiebevelen uit tegen Oekraïners en er is een verdachte uitgeleverd. Er is nog geen vonnis, dus niet gewijzigd.
- energie-hulpbronnen-havo-vwo stap 5 vraag 4: "EU-verbod op nieuwe benzine-/dieselauto's vanaf 2035". De Europese Commissie stelde eind 2025 voor dit te versoepelen (90% CO₂-reductie in plaats van 100%). Ik weet niet zeker of dat inmiddels is aangenomen.
- globalisering-havo-vwo stap 3 (uitleg, geen check): de inkomensgrenzen van de Wereldbank zijn van FY2024. Rusland staat bij "boven-midden", maar wordt sinds 2024 als hoog-inkomen ingedeeld.
- klimaatverandering-aardrijkskunde stap 4 (uitleg, geen optie): het zachte afbreekstreepje in «laaglig­gende» is niet gewijzigd. Het zit in de stap-uitleg en is mogelijk bewust gezet als afbreekpunt.
- klimaatverandering-aardrijkskunde stap 1 vraag 2 / klimaten-aardrijkskunde stap 9: deze paden noemen +1,1 °C en +1,2 °C opwarming. Recente metingen geven ~1,3-1,5 °C. De vragen blijven eenduidig, dus niet gewijzigd.
- bevolking-migratie-aardrijkskunde stap 5 (uitleg): «aanmeldcentrum (Ter Apel, Zevenaar)». Zevenaar is mogelijk geen actueel aanmeldcentrum meer.
- stedelijke-ontwikkeling-havo-vwo stap 3 vraag 3 (en stap 3-uitleg top-10): de VN (World Urbanization Prospects, nov 2025) noemt met een nieuwe definitie Jakarta (~42 mln) als grootste stad en Tokyo als derde; tussen de gegeven opties blijft Tokyo goed, maar de top-10-lijst in de uitleg is nu verouderd.
- stedelijke-ontwikkeling-havo-vwo stap 2 vraag 5: «grootste krottenwijk Azië» wordt betwist (Orangi Town in Karachi wordt soms groter genoemd); niet aangepast.
- stedelijke-ontwikkeling-havo-vwo stap 1 vraag 2: afleider «Vertrek uit stad» kan door een leerling als suburbanisatie (naar een voorstad buiten de gemeente) gezien worden; hint noemt het disurbanisatie.
- ecosystemen-havo-vwo stap 5 vraag 5: «minder kinderen krijgen» als 'effectiefste persoonlijke actie' is maatschappelijk gevoelig voor een kinderapp; de inhoud klopt wel met de bron (Wynes & Nicholas 2017).
- ecosystemen-havo-vwo stap 4-uitleg: «cheetah-populatie kromp tot ~7 dieren» is een populaire maar onzekere claim.
- balans-beco stap 1 vraag 1: afleider «Een bank» is wél een onderneming (hint geeft dat toe); als definitievraag wel eenduidig, maar een leerling kan erover struikelen.
- genetica-erfelijkheid-biologie stap 1 vraag 2: hint (en stap-uitleg) noemt tongrollen een dominant/recessief kenmerk; volgens modern onderzoek is dat geen eenvoudig Mendel-kenmerk (staat wel in veel schoolboeken).
- mens-biologie-vmbo stap 5 vraag 1: «filteren in nierschors én niermerg»; strikt genomen gebeurt filtratie alleen in de glomeruli (schors) en is het merg terugopname. Niet gewijzigd omdat het pad naar examenvragen verwijst die dit antwoord zo gebruiken.
- mens-biologie-vmbo stap 1 uitleg: lichaamstemperatuur staat onder de hersenstam; meestal wordt die toegeschreven aan de hypothalamus (tussenhersenen).
- immuunsysteem-havo-vwo stap 3 uitleg: Rijksvaccinatieprogramma (BMR 14 mnd + 9 jaar e.d.) mogelijk verouderd; RIVM-schema graag even controleren.
- hart-bloed-ademhaling-havo-vwo stap 5 uitleg/vraag 4: «~80 000 AED's in NL openbaar beschikbaar» — aantal niet geverifieerd.
- bbp-conjunctuur-economie stap 1 (uitleg): "NL BBP per hoofd ~€55.000 (2024)" lijkt te laag (eerder ~€60.000+), en VS ~€70.000 ook aan de lage kant.
- bbp-conjunctuur-economie stap 5 (uitleg): "NL in 2024: tekort ~2%" — gerealiseerd tekort 2024 was waarschijnlijk lager (~1%); cijfer controleren.
- bbp-conjunctuur-economie stap 6 vraag 13: "stijgende BBP-lijn = hoogconjunctuur/herstel" is wat kort door de bocht (nominale stijging kan ook inflatie zijn; groei op trend is geen hoogconjunctuur).
- bedrijfseconomie-havo-vwo alle stappen: uitlegPad-niveau `nogSimpeler: "A."` is een betekenisloze placeholder (en klopt alleen zolang de opties niet geschud worden).
- bedrijfseconomie-havo-vwo stap 4 vraag 2: claim "€9,99 verkoopt 20-30% beter dan €10" in uitlegPad is niet onderbouwd.
- pincode-belasting stap 5 vraag 3 + stap 7 vraag 6: "~26.000 ouders" was de eerste schatting van de toeslagenaffaire; het aantal erkende gedupeerden is inmiddels hoger.
- pincode-belasting stap 4 (uitleg): IACK max "~€2.690" is het bedrag van 2023 (2024 ≈ €2.950); de andere bedragen staan als 2024.
- pincode-belasting stap 3 vraag 4: uitlegPad bevat twee zachte afbreekstreepjes (U+00AD) in "loon­heffings­korting" (niet in een optie, dus laten staan).
- pincode-buitenland-eu stap 6 vraag 2: Shell heeft sinds 2022 zijn hoofdkantoor in Londen; «Nederlandse multinational» is nog verdedigbaar (Nederlandse oorsprong), maar Heineken als goed antwoord zou eenduidiger zijn.
- pincode-geld-sparen-lenen stap 8 vraag 3 en vraag 6: «niet betaalde Klarna-schuld van €200 → BKR-codering» en «5 jaar zichtbaar»: BKR-registratie van achteraf betalen en kleine bedragen (onder €250) en de bewaartermijn veranderen rond 2025-2026. Check de stand van nu voordat je het aanpast.
- pincode-geld-sparen-lenen stap 5 vraag 1 en vraag 7: kasreserve «~5%» is een vereenvoudiging uit het lesboek; de wettelijke ECB-reserveplicht is 1%. Als lesboekvoorbeeld laten staan?
- pincode-geld-sparen-lenen stap 8 (stap-uitleg): «Studielening (DUO) … Geen BKR-registratie»; voor de hypotheektoets telt een studieschuld wel mee. Controleer of de BKR-regels hiervoor zijn veranderd.
- pincode-inkomen-welvaart stap 4 vraag 6: in de theorie staat «overheden gebruiken vaak mediaan voor 'modaal inkomen NL'». Het CPB berekent het modaal inkomen niet als mediaan van alle inkomens; de zin is dus onnauwkeurig.
- pincode-ondernemen stap 7 vraag 5: het voorbeeld «eenmanszaak €50k winst → ~€8k IB» lijkt laag nu de zelfstandigenaftrek in 2026 is verlaagd (eerder ~€10-11k). Het is maar een voorbeeldbedrag; daarom niet aangepast.
- pincode-ontwikkelingslanden stap 1 vraag 4 (en stap 7 vraag 4): de Wereldbank legt de grens voor extreme armoede sinds juni 2025 op $3,00 per dag (2021-PPP), niet meer op $2,15. Het cijfer ~700 mln (2020) hoort bij de oude grens. Als historisch cijfer klopt het; bijwerken is een keuze.
- pincode-ontwikkelingslanden stap 4 vraag 4: de Nederlandse ontwikkelingshulp lag de laatste jaren rond 0,6 tot 0,67% van het bni (inclusief kosten voor asielopvang) en daalt door de bezuinigingen. «~0,5%» en «alleen 5 landen halen 0,7%» zijn mogelijk verouderd. Het antwoord blijft wel het enige juiste.
- pincode-ontwikkelingslanden stap 1 vraag 6: de Wereldbank deelt landen in op BNI per hoofd (Atlas-methode), niet op BBP. De grens van $1.135 klopt voor FY2026.
- pincode-overheid stap 5 vraag 5: na de herziening van het CBS ligt de krimp in 2020 mogelijk op ~3,9% in plaats van 3,7%. Niet gewijzigd: dit weet ik niet zeker en het verandert de keuze niet.
- pincode-overheid stap 1 en stap 3 (stap-uitleg): de begroting van «~€350-400 miljard/jaar» ligt lager dan de huidige rijksuitgaven van ruim €450 mrd. Dit staat niet in een vraag.
- pincode-werk-arbeidsmarkt stap 6 vraag 4: de Nederlandse productiviteit ligt waarschijnlijk eerder rond €75-80 bbp per gewerkt uur. De uitleg rekent met «~17 mrd uren», en dat lijkt te hoog. «€60» blijft van de opties wel duidelijk het beste antwoord.
- pincode-werk-arbeidsmarkt stap 1 vraag 6: de ZVW-bijdrage staat bij de inhoudingen. Voor werknemers is dat een werkgeversheffing en geen inhouding op het loon.
- gouden-eeuw-geschiedenis stap 3 vraag 4: «smalle huizen door belasting op gevelbreedte» is deels mythe; dure, schaarse grachtgrond is minstens zo belangrijk, terwijl de hint bij «Geen ruimte» zegt «Ruimte was er wel».
- gouden-eeuw-geschiedenis stap 6 vraag 6: «eerste bedrijf met aandelen ter wereld» is een vereenvoudiging (beter: eerste met vrij verhandelbare aandelen op een beurs).
- kolonie-indonesie stap 3 vraag 3: uitlegPad-cijfers romusha (~4 mln tewerkgesteld, ~2 mln doden) en «vergeten genocide» zijn omstreden/onzeker.
- kolonie-indonesie stap 4 vraag 3: uitlegPad noemt alleen 2005 (Bot); in 2023 erkende premier Rutte 17-8-1945 «volmondig» — eventueel aanvullen.
- filosofie-havo-vwo stap 3 vraag 1: juiste optie noemt de categorische imperatief «soort 'Gouden Regel'»; Kant wees die vergelijking zelf af (stap-uitleg nuanceert het wel).
- filosofie-havo-vwo stap 1 vraag 4: afleider «Materialisme» + hint «Tegenovergesteld» klopt alleen in de betekenis 'bezitsdrang'; in hun natuurleer waren de Stoïcijnen juist materialisten.
- filosofie-havo-vwo stap 4 vraag 1: uitlegPad noemt De Beauvoirs boek «De grijze leeftijd» — Nederlandse titel van La Vieillesse niet geverifieerd.
- franse-revolutie-geschiedenis stap 3 vraag 1: een «officiële begindatum» bestaat niet (5 mei / 17 juni 1789 zijn ook verdedigbaar); de andere opties zijn wel duidelijk fout.
- vraag-aanbod-economie stap 8 (uitleg): mondkapjes 2020 heten daar een aanbod-daling, in stap 9 vraag 5/6 een vraag-stijging.
- sociale-zekerheid-nl stap 1 vraag 3: werkloosheid "~30%" in de jaren '30 klopt alleen voor verzekerde arbeiders; voor de hele beroepsbevolking lag het eerder rond 15-20%.
- sociale-zekerheid-nl stap 4 (uitleg): de premierlijst stopt bij "Schoof … viel al in 2025"; het kabinet dat daarna aantrad wordt niet genoemd. Niet aangepast zonder zekerheid over de actuele stand.
- twintigste-eeuw-havo-vwo stap 4 vraag 4: de afleider "NL was schuldig" is deels verdedigbaar, want de Hoge Raad hield de Staat in 2019 voor 10% aansprakelijk.
- tweede-wereldoorlog-havo-vwo (meerdere vragen, bv. stap 1 vraag 1/3/4, stap 4 vraag 5): het goede antwoord is lang en specifiek, de afleiders zijn grappig of leeg ("Niets", "Geen ideologie", "Olympische Spelen", "Geen relevant feit") en de hints zijn vaak alleen "Onzin."/"Wel.". Het antwoord is daardoor doorzichtig; dit vraagt om een herschrijfronde.
- tachtigjarige-oorlog-geschiedenis stap 8 vraag 2: de vraag stelt als feit dat het Plakkaat de Amerikaanse verklaring "inspireerde", terwijl de uitleg "mogelijk" zegt.
- tijdvakken-geschiedenis stap 12 vraag 1 (Tachtigjarige Oorlog): het antwoord "Tijdvak 5 + 6" is verdedigbaar op jaartallen, maar in de canon is de Opstand een kenmerkend aspect van tijdvak 5.
- ai-machine-learning-informatica stap 1 vraag 1: «alle AI die nu bestaat is smal, goed in één taak» staat op gespannen voet met chatbots/LLM's die veel taken kunnen (de EU AI Act noemt ze "general-purpose AI"). Overweeg «geen algemene AI (AGI)» als formulering. Dat geldt ook voor de uitleg in informatica-havo-vwo stap 4 («Smal: … ChatGPT»).
- informatica-havo-vwo stap 4 vraag 5 (uitlegPad): «NL implementeert via aanvullende wet 2025» kon ik niet verifiëren. Ook de metadata `referentieNiveau: "havo-vwo-CSE-informatica"` verwijst nog naar een CSE dat niet bestaat; die heb ik niet aangepast omdat het een id-achtig veld is.
- wereldoorlog2-geschiedenis stap 7 vraag 2: hint «Bevrijding NL was D-Day en Market Garden» is onnauwkeurig, want D-Day bevrijdde geen Nederland. Ongewijzigd gelaten (zelfde tekst in basiskennis).
- wereldoorlog2-geschiedenis stap 8: «5 mei 1945 capitulatie getekend in Hotel De Wereld» is de gangbare schoolversie. Historisch werd er op 5 mei onderhandeld en werd er pas op 6 mei getekend (in de aula van de landbouwhogeschool). Ongewijzigd gelaten.
- maatschappijleer-havo-vwo + maatschappijwetenschappen-havo-vwo stap 1 (stap-uitleg): de partijlijsten (NSC, BVNL, "PvdA-GL") en "Kabinet-Schoof" als laatste kabinet zijn verouderd na de verkiezingen van 29 okt 2025. Ik heb het nieuwe kabinet niet ingevuld omdat ik de samenstelling niet zeker weet.
- mensenrechten-vn-havo-vwo stap 2 vraag 4: «Huidige VN-Secretaris-Generaal = Guterres» klopt nu, maar zijn termijn eindigt op 31-12-2026. Per 1 jan 2027 is deze vraag fout.
- kunst-havo-vwo stap 3 vraag 4: het goede antwoord «Kubisme / De Stijl» is een samengestelde optie. Kubisme is geometrisch maar niet echt abstract (het blijft figuratief), dus «De Stijl» alleen zou zuiverder zijn.
- maatschappijleer-havo-vwo stap 2 vraag 5: noemt de Toeslagenaffaire «indirecte discriminatie». Nationaliteit werd direct als risicofactor gebruikt, dus «directe» discriminatie is verdedigbaar.
- maatschappijleer-havo-vwo stap 4 vraag 2: de bewering «aangiftebereidheid sterk gedaald sinds 2002» heb ik niet kunnen verifiëren.
- mensenrechten-maatschappijleer stap 4 (uitleg): volgens het ILO-rapport van 2025 waren er in 2024 ~138 mln werkende kinderen. De vraag is nu op 2020 vastgezet, maar het cijfer in de uitleg kan worden bijgewerkt.
- media-wijsheid-maatschappijleer stap 4 (stap-uitleg): de cookie-regels (toestemming, cookie-banner) staan formeel in de Telecommunicatiewet (ePrivacy), niet in de AVG. Dat is een vereenvoudiging.

**TOTAAL A: 74 paden · gecontroleerd 2000 · hersteld 235 · verwijderd 0 · twijfel 65**

## Deel B — Examenpaden (economie, Engels, geschiedenis, maatschappijkunde, Nederlands)

HEILIG: vraagtekst, bronTekst en examenBron zijn niet gewijzigd. Alleen answer, explanation, uitlegPad, wrongHints en tikfouten in opties zijn aangepast. Er is nergens een answer gewijzigd. examenblad.nl was via de proxy niet bereikbaar (403), dus de antwoorden zijn niet tegen de officiële correctievoorschriften gelegd.

### Lijst van paden

| pad-id | gecontroleerd | hersteld | verwijderd |
|---|---|---|---|
| examen-economie-2022-t1 | 5 | 0 | 0 |
| examen-economie-2022-t2 | 5 | 1 | 0 |
| examen-economie-2023-t1 | 5 | 4 | 0 |
| examen-economie-2023-t2 | 7 | 3 | 0 |
| examen-economie-2024-t1 | 6 | 4 | 0 |
| examen-economie-2024-t2 | 6 | 3 | 0 |
| examen-economie-2025-t1 | 9 | 5 | 0 |
| examen-economie-2025-t2 | 5 | 2 | 0 |
| examen-engels-2022-t1 | 6 | 4 | 0 |
| examen-engels-2022-t2 | 6 | 3 | 0 |
| examen-engels-2023-t1 | 6 | 4 | 0 |
| examen-engels-2023-t2 | 6 | 3 | 0 |
| examen-engels-2024-t1 | 8 | 3 | 0 |
| examen-engels-2024-t2 | 6 | 5 | 0 |
| examen-engels-2025-t1 | 9 | 7 | 0 |
| examen-engels-2025-t2 | 6 | 6 | 0 |
| examen-geschiedenis-2022-t1 | 4 | 2 | 0 |
| examen-geschiedenis-2022-t2 | 6 | 3 | 0 |
| examen-geschiedenis-2023-t1 | 5 | 2 | 0 |
| examen-geschiedenis-2023-t2 | 4 | 1 | 0 |
| examen-geschiedenis-2024-t1 | 6 | 1 | 0 |
| examen-geschiedenis-2024-t2 | 3 | 0 | 0 |
| examen-geschiedenis-2025-t1 | 6 | 3 | 0 |
| examen-geschiedenis-2025-t2 | 6 | 1 | 0 |
| examen-maatschappijkunde-2022-t1 | 6 | 0 | 0 |
| examen-maatschappijkunde-2022-t2 | 6 | 2 | 0 |
| examen-maatschappijkunde-2023-t1 | 5 | 1 | 0 |
| examen-maatschappijkunde-2023-t2 | 6 | 3 | 0 |
| examen-maatschappijkunde-2024-t1 | 5 | 1 | 0 |
| examen-maatschappijkunde-2024-t2 | 5 | 3 | 0 |
| examen-maatschappijkunde-2025-t1 | 6 | 1 | 0 |
| examen-maatschappijkunde-2025-t2 | 6 | 1 | 0 |
| examen-nederlands-2022-t1 | 6 | 1 | 0 |
| examen-nederlands-2022-t2 | 6 | 6 | 0 |
| examen-nederlands-2023-t1 | 6 | 3 | 0 |
| examen-nederlands-2023-t2 | 6 | 4 | 0 |
| examen-nederlands-2024-t1 | 6 | 4 | 0 |
| examen-nederlands-2024-t2 | 6 | 3 | 0 |
| examen-nederlands-2025-t1 | 6 | 3 | 0 |
| examen-nederlands-2025-t2 | 6 | 6 | 0 |

### Herstellingen (was → nu, reden)

#### examen-economie-2022-t1 · gecontroleerd 5 · hersteld 0 · verwijderd 0

#### examen-economie-2022-t2 · gecontroleerd 5 · hersteld 1 · verwijderd 0
- stap 1 vraag 1: was «Verborgen werkloosheid = mensen die wel kunnen werken maar niet zoeken» → nu «… mensen die wel werk willen, maar niet als werkzoekende geregistreerd staan» (wrongHint; definitie was fout)
- stap 1 vraag 1: was «VERBORGEN (kan werken maar zoekt niet)» → nu «VERBORGEN (wil wel werken, maar staat niet als werkzoekende geregistreerd)» (uitlegPad; zelfde feitfout)

#### examen-economie-2023-t1 · gecontroleerd 5 · hersteld 4 · verwijderd 0
- stap 1 vraag 1: was «Welke 4 inkomenssoorten zijn er? Loon, winst/rente/dividend, én overdrachten» → nu «Loon, rente/huur/dividend (bezit of vermogen), winst (ondernemen) én overdrachten» (uitlegPad noemde maar 3 soorten)
- stap 2 vraag 1: was «… De BE-overheid heft, en de BE-importeur betaalt.» → nu «Welke overheid heft dan, en wie haalt de boter over de grens?» (wrongHint gaf half antwoord weg)
- stap 2 vraag 1: was «… de heffing is van BE. Importeur in BE betaalt.» → nu «betaalt een overheid zelf de heffing die ze oplegt? Denk aan wie de boter het land in haalt.» (wrongHint gaf half antwoord weg)
- stap 2 vraag 1: was «… uiteindelijk komt het bij de BE-eindkoper terecht» → nu «Het eerste deel klopt. Maar in welk land staat de winkel…?» (wrongHint noemde het goede antwoord)
- stap 4 vraag 1: was «tabel: Homogeen/weinig = —, monopolie alleen bij heterogeen» → nu «oligopolie en monopolie bij homogeen én heterogeen» (theorie; homogeen oligopolie bestaat)
- stap 5 vraag 1: was «Tegendeel — door schaalvoordelen daalt de kostprijs per stuk, niet de marge.» → nu «Wat gebeurt er met de vaste kosten per product als je méér gaat maken?» (hint gaf redenering/antwoord weg)
- stap 5 vraag 1: was «Niet als de kostprijs daalt door schaalvoordelen.» → nu «Blijft de kostprijs per stuk echt gelijk als…?» (idem)

#### examen-economie-2023-t2 · gecontroleerd 7 · hersteld 3 · verwijderd 0
- stap 3 vraag 1: was «fictief rendement (bv. 6%) … ook bij 0% rente betaal je alsof je 6% verdiende» → nu «2024: ~1,4% op spaargeld, ~6% op beleggingen … sinds 2024 mag je lager echt rendement aantonen» (theorie; feitfout box 3)
- stap 3 vraag 1: was «fictief rendement 6% × €100.000 = €6.000 → €2.160» → nu «~1,4% × €100.000 = €1.400 → 36% = €504» (voorbeeld spaargeld; feitfout)
- stap 6 vraag 1: was «Tegendeel op beide punten.» → nu «Wat doet een extra heffing met de prijs van Chinees staal…?» (hint gaf antwoord weg)
- stap 6 vraag 1: was «Inconsistent — als import duurder wordt, kopen ze meer eigen, niet minder.» → nu «De prijs-kant klopt. Maar waar koopt een bedrijf liever…?» (hint noemde antwoord)
- stap 7 vraag 1: was «Hoge VRAAG = duurder, niet goedkoper.» → nu «Wat gebeurt er met de prijs als heel veel mensen het tegelijk willen kopen?» (hint gaf antwoord weg)

#### examen-economie-2024-t1 · gecontroleerd 6 · hersteld 4 · verwijderd 0
- stap 1 vraag 1: was «Een land heeft maar één wettig betaalmiddel.» → nu «Kun je in een Zweedse winkel wettig met euro's betalen? …» (wrongHint; feitfout, sommige landen hebben er meer)
- stap 1 vraag 1: was «Zweden gebruikt geen euro — alleen de kroon is wettig betaalmiddel.» → nu «Is de euro in Zweden eigenlijk wel een wettig betaalmiddel?» (hint noemde antwoord)
- stap 1 vraag 1: was «Een land heeft maar 1 wettig betaalmiddel…» / «Per land 1 valuta.» → nu «In Zweden is alleen de kroon wettig betaalmiddel…» / «Meestal de eigen munt van het land.» (uitlegPad; feitfout)
- stap 1 vraag 1: was «max 1,5% boven EU-gemiddelde» → nu «max 1,5%-punt boven het gemiddelde van de 3 EU-landen met de laagste inflatie» (theorie; norm onjuist)
- stap 2 vraag 1: was «tabel: Homogeen bij 1/paar = –» → nu «monopolie/oligopolie bij homogeen én heterogeen» (theorie; homogeen oligopolie bestaat)
- stap 2 vraag 1: was «(bv. tarwemarkt, ruwe olie)» → nu «(bv. tarwemarkt, groenteveiling)» (woorden; olie is geen volkomen concurrentie)
- stap 4 vraag 1: was «Stijging inkomsten + gelijke uitgaven = overschot = schuld DAALT.» → nu «Meer inkomsten bij gelijke uitgaven maakt een tekort juist kleiner…» (wrongHint; niet per se overschot)
- stap 4 vraag 1: was «Inkomsten gestegen + uitgaven gelijk = overschot = schuld DAALT ✗» → nu «= tekort wordt kleiner (of overschot) = geen reden voor stijging ✗» (uitlegPad; idem)
- stap 4 vraag 1: was «NL ~€500 mld (~50% BBP). Italië ~€2.700 mld (~140% BBP)» → nu «NL ~€480 mld (~45% BBP). Italië ~€2.900 mld (~135% BBP)» (woorden; cijfers 2024)
- stap 4 vraag 1: was «Italië 2023: inkomsten €890 mld, uitgaven €1.020 mld» → nu «uitgaven ruim €150 mld hoger dan de inkomsten (tekort ~7% BBP)» (voorbeeld; cijfers klopten niet)
- stap 6 vraag 1: was «Philips verplaatste in 2010 fabrieken naar Polen → 1.000 banen weg» → nu «Een fabriek verplaatst de productie naar Polen → 1.000 banen weg» (voorbeeld; onverifieerbaar feit)

#### examen-economie-2024-t2 · gecontroleerd 6 · hersteld 3 · verwijderd 0
- stap 1 vraag 1: was «Duits gezin gaat skiën in NL bergen (theoretisch 😉)» → nu «Duits gezin huurt een vakantiehuisje aan de Zeeuwse kust» (voorbeeld; feitelijk onmogelijk)
- stap 3 vraag 1: was «AH vegan rookworst / Lidl 10% met app / Bol 4 fysieke winkels / Coca-Cola TikTok» → nu «Een supermarkt / een webwinkel / een frisdrankmerk …» (voorbeelden; onverifieerbare merkclaims)
- stap 5 vraag 1: was «krijgt 20% meer per kilo dan marktprijs» → nu «krijgt een gegarandeerde minimumprijs plus een premie» (voorbeeld; onjuist percentage)

#### examen-economie-2025-t1 · gecontroleerd 9 · hersteld 5 · verwijderd 0
- stap 1 vraag 1: was «Klopt niet voor 2010 en 2016 — daar was export juist hoger.» → nu «Geldt dit echt voor elk jaar? Controleer 2010 en 2016 in de tabel.» (hint gaf antwoord weg)
- stap 2 vraag 1: was «Zelfvoorziening = nauwelijks voor moderne economie relevant.» → nu «Zelfvoorziening = zelf maken wat je nodig hebt. Wat heeft dat te maken met 'reëel'…?» (hint; onjuiste bewering)
- stap 3 vraag 1: was «Souvenir is een tastbaar product, geen dienst.» → nu «Kun je een souvenir vastpakken? Is het dan een goed of een dienst?» (hint als denkprikkel)
- stap 3 vraag 1: was «Souvenir is wel een goed, maar export ipv import» → nu «Wie verkoopt het souvenir hier aan wie? …» (hint noemde antwoord)
- stap 4 vraag 1: was «burger[U+00AD]zaken» → nu «burgerzaken» (zacht afbreekstreepje in explanation)
- stap 9 vraag 1: was «bespaart €1.500/jaar → rendement 15%» → nu «bespaart bv. €800/jaar → rendement 8%» (theorie; onrealistisch hoog)

#### examen-economie-2025-t2 · gecontroleerd 5 · hersteld 2 · verwijderd 0
- stap 2 vraag 1: was «Productiviteit ↓ minder → werkgever lijdt verlies.» → nu «Stijgt de productiviteit MINDER dan het loon → werkgever houdt minder over (winst krimpt).» (uitlegPad; onjuist/onduidelijk)
- stap 3 vraag 1: was «Inconsistent — verandering in voordeel lage inkomens = nivellering, niet denivellering.» → nu «Worden de verschillen groter of kleiner als…?» (hint noemde antwoord)
- stap 3 vraag 1: was «Inconsistent — nivellering = inkomensverschillen kleiner, niet 'voordeel hoge inkomens'.» → nu «Wie krijgt hier de hoogste korting — en wie heeft daar dus het meeste voordeel van?» (idem)

#### examen-engels-2022-t1 · gecontroleerd 6 · hersteld 4 · verwijderd 0
- stap 2 vraag 1: was «… Wel over START-tijd.» / «… wel iets over school-START-time.» → nu «Wat staat er in alinea 2 wél over Amerikaanse scholen?» / «Welke vergelijking tussen de VS en andere landen staat er wél in alinea 2?» (hints noemden antwoord)
- stap 3 vraag 1: was «… wel over CALORIE-content.» / «Lees: aantal calorieën in sit-down vs fast-food.» → nu «Waar kijkt het onderzoek wél naar?» / «Wat vergelijkt het onderzoek in alinea 1 en 2?» (hints noemden antwoord)
- stap 4 vraag 1: was «… de TOYS-quote komt van Eddie» / «Eddie schreef gewoon zijn idee aan de mayor.» → nu «Lees de woorden direct na de quote.» (hints noemden antwoord)
- stap 4 vraag 1: was «encourage charitable acts to improve well-being» → nu «encourage and celebrate charitable acts» (explanation citeerde de brontekst verkeerd)
- stap 6 vraag 1: was «Geen vergelijking 'expensive' — wel kostprijs vs prijs van eigen product.» → nu «Wordt zijn ijs vergeleken met duurder ijs? Lees Joe's reactie aan het eind van alinea 3.» (hint gaf antwoord weg)

#### examen-engels-2022-t2 · gecontroleerd 6 · hersteld 3 · verwijderd 0
- stap 2 vraag 1: wrongHints[0] was «tekst gaat over EMPATHIE» → nu «let op de naam van het museum» (hint gaf antwoord weg)
- stap 2 vraag 1: wrongHints[2] was «Wel inleven via andermans schoenen.» → nu «Waarom trek je juist de schoenen van een vreemde aan?» (hint noemde het goede antwoord)
- stap 3 vraag 1: wrongHints[2] was «Wel iets over kinderen die niet WETEN van debat.» → nu «Lees nog eens wat de schrijver over haar dochter en de klasgenoten zegt.» (hint gaf antwoord weg)
- stap 4 vraag 1: wrongHints[2] was «Kern = HERGEBRUIK.» → nu «Waar komt de stof vandaan?» (hint gaf antwoord weg)

#### examen-engels-2023-t1 · gecontroleerd 6 · hersteld 4 · verwijderd 0
- stap 2 vraag 1: wrongHints[1] was «gaat om register + monitoring» → nu «Wat wil de campagne 'create'?» (hint gaf antwoord weg)
- stap 2 vraag 1: wrongHints[2] was «wel over individuele bijzondere bomen» → nu «Lees de laatste zin nog eens.» (hint gaf antwoord weg)
- stap 3 vraag 1: wrongHints[2] was «Geen lenen genoemd — eigen Mini.» → nu «Over lenen staat niets in alinea 3.» (tekst zegt niet dat de Mini van henzelf is)
- stap 4 vraag 1: wrongHints[0] was «wel over native wildlife (oorspronkelijke fauna)» → nu «Over betere leefomstandigheden in gevangenschap staat niets…» (hint gaf antwoord weg)
- stap 4 vraag 1: wrongHints[2] was «wel over samenleven van bestaande dieren» → nu «Wat doen de beren en wolven 'once again'?» (hint gaf antwoord weg)
- stap 5 vraag 1: wrongHints[3] was «wel over onbereikbare gebieden» → nu «Lees de zin over de wegen nog eens.» (hint gaf antwoord weg)

#### examen-engels-2023-t2 · gecontroleerd 6 · hersteld 3 · verwijderd 0
- stap 2 vraag 1: uitlegPad was «Hij blijft vrij in Frankrijk» → nu «Volgens de politie blijft hij vrij» (‘in Frankrijk’ staat niet in de tekst; hij werd daar juist vastgehouden)
- stap 3 vraag 1: wrongHints[2] was «Tekst noemt $200m Ice Cream Museum als voorbeeld…» → nu «Over het verhogen van de waarde van het museum staat niets in de tekst.» (Ice Cream Museum komt niet in de bronTekst voor)
- stap 3 vraag 1: explanation was «alle 24 rooms zijn 'designed for the perfect selfie'» → nu correct citaat uit alinea 1 en 2 (onjuist geciteerd)
- stap 5 vraag 1: wrongHints[1] was «wel iets over geluid. Zoek decibels.» → nu «Waar klaagden de bewoners precies over?» (hint gaf antwoord weg)
- stap 5 vraag 1: wrongHints[3] was «geluid ging WEL boven de norm» → nu «Dat is niet de reden dat hij nu dicht moet.» (hint gaf antwoord weg)

#### examen-engels-2024-t1 · gecontroleerd 8 · hersteld 3 · verwijderd 0
- stap 3 vraag 1: wrongHints[1] was «Workers (technicians), not a researcher.» → nu «Who was actually digging there? Check the word paragraph 1 uses for them.» (hint gaf antwoord weg)
- stap 3 vraag 1: wrongHints[2] was «— surprise discovery.» → nu «No 'rumour' is mentioned in paragraph 1.» (hint gaf antwoord weg)
- stap 6 vraag 1: wrongHints[2] was «Not about WHY — about HOW it was received.» → nu «Does paragraph 2 give reasons? Look at what Marta and the fans do.» (hint noemde het goede antwoord)
- stap 8 vraag 1: wrongHints[0,2,3,4] was «…The sentence shows contrast / not contrast» → nu per optie de betekenis + toetsvraag (alle foute hints noemden 'contrast' → eliminatie-lek)

#### examen-engels-2024-t2 · gecontroleerd 6 · hersteld 5 · verwijderd 0
- stap 2 vraag 1: wrongHints[3] was «wel als artistiek eerbetoon» → nu «Lees alinea 3: waarvoor is de Tribute Collection bedoeld?» (hint gaf antwoord weg)
- stap 2 vraag 1: uitlegPad voorbeeld was «Tribute Collection-Barbies: Ella Fitzgerald, Helen Keller, Maya Angelou» → nu algemene uitleg van 'Tribute Collection' (die poppen horen bij de 'Inspiring Women'-reeks, feitfout)
- stap 3 vraag 1: wrongHints[2] was «het zijn gewone brieven aan vrienden + geliefden» → nu «wat voor brieven waren het meestal?» (hint gaf antwoord weg)
- stap 3 vraag 1: wrongHints[3] was «ze zijn 'everyday correspondence'» → nu «Aan wie waren de brieven gericht?» (hint gaf antwoord weg)
- stap 3 vraag 1: explanation was «(WO2 — 1941, kort na inval Duitsland)» → nu «(WO2 — 1941)» (onduidelijk/onjuist)
- stap 4 vraag 1: wrongHints[3] was «focus is op landschap + internationale erkenning» → nu «Lees de eerste zin nog eens.» (hint gaf antwoord weg)
- stap 5 vraag 1: wrongHints[3] was «ze beschouwt de tegels juist als bron van haar tegenslag» → nu vraag naar wat er na haar terugkeer gebeurde (hint gaf antwoord weg)
- stap 5 vraag 1: uitlegPad feit was «Vesuvius doodde 16.000 mensen… sinds 1900» → nu «kwamen duizenden mensen om… er zijn meer toeristen die stukjes terugsturen» (onzekere getallen/jaartal)
- stap 6 vraag 1: wrongHints[1] was «de toon is luchtig» → nu «Klinkt de schrijver echt boos?» (gaf antwoord weg)
- stap 6 vraag 1: wrongHints[3] was «Het is een grapje, geen belediging.» → nu «wordt er iemand beledigd of aangevallen?» (gaf antwoord weg)

#### examen-engels-2025-t1 · gecontroleerd 9 · hersteld 7 · verwijderd 0
- stap 1 vraag 1: wrongHints[2] was «UFO's mijden plekken met veel licht» → nu «Een vliegveld wordt nergens genoemd. Lees de laatste alinea…» (hint gaf antwoord weg)
- stap 2 vraag 1: explanation was «'The largest share of that figure was…'» → nu letterlijk citaat «'The largest share was in e-scooter sales…'» (citaat klopte niet met bronTekst)
- stap 4 vraag 1: wrongHints[1] was «— it explains the mechanism.» → nu «Which paragraph does mention the number of incidents?» (hint gaf antwoord weg)
- stap 5 vraag 1: wrongHints[3] was «closer, but 'meanwhile' is better…» → nu «'Similarly' = in the same way. Is the watchdog doing the same thing…?» (hint noemde het goede antwoord)
- stap 6 vraag 1: wrongHints[0,1,2] was «about EFFECTS / impact on body is / aims to STUDY the impact» → nu neutrale denkprikkels (alle drie gaven het antwoord weg)
- stap 6 vraag 1: explanation was citaat «'we are trying to quantify what the effect is…'» → nu citaat uit bronTekst «'to find out exactly how harmful microplastics are to humans'» (citaat stond niet in de tekst)
- stap 7 vraag 1: wrongHints[0] was «Paragraph 3 is descriptive» → nu «Does paragraph 3 argue why the research is needed?» (lek)
- stap 7 vraag 1: wrongHints[2] was «about PLANNED research, not results» → nu «Are there already results? Look at 'ready to go'…» (hint gaf antwoord weg)
- stap 9 vraag 1: wrongHints[0] was «main focus is the new RESEARCH» → nu «is that what most of the text is about?» (hint gaf antwoord weg)
- stap 9 vraag 1: wrongHints[3] was «it reports on research that is JUST STARTING» → nu «Does the text use warning language?…» (hint gaf antwoord weg)

#### examen-engels-2025-t2 · gecontroleerd 6 · hersteld 6 · verwijderd 0
- stap 1 vraag 1: wrongHints[2] was «wel over biogas-installaties (9000 in DE)» → nu «Kijk waar de cijfers over gaan.» (lek)
- stap 1 vraag 1: wrongHints[3] was «pure feiten-presentatie» → nu «Noemt de tekst ergens een misverstand…?» (hint gaf antwoord weg)
- stap 2 vraag 1: wrongHints[3] was «Joan vond Adells opscheppen vermoeiend» → nu «Lees wat Joan 'admits'.» (hint noemde het goede antwoord)
- stap 3 vraag 1: wrongHints[2] was «wel persoonlijk gebruik» → nu «Ze noemt geen werk-redenen…» (hint gaf antwoord weg)
- stap 4 vraag 1: wrongHints[0] was «alinea spreekt van decennia-verschuiving» → nu «Vergelijk de maten uit de 1940s, 1960s en nu.» (hint gaf antwoord weg)
- stap 4 vraag 1: uitlegPad feit was «tussen 1980 en 2010 is een 'size 8' US ongeveer 2 maten gegroeid» → nu algemene uitleg vanity sizing (onzeker getal)
- stap 5 vraag 1: wrongHints[2] was «toon is spottend, niet hoopvol» → nu «Let op het woord 'deadpan'.» (hint noemde het goede antwoord)
- stap 5 vraag 1: uitlegPad was «eist perfecte nagel-kleur, cohesief trouwfeest» → nu «laat haar teennagels overschilderen omdat het 'more cohesive' moet» (verkeerd gelezen)
- stap 6 vraag 1: uitlegPad feit was «eeuwen onderdrukt… Sinds 1990 revival» → nu «lang onderdrukt na de Britse kolonisatie… Sinds eind 20e eeuw» (kolonisatie pas vanaf 19e eeuw)

#### examen-geschiedenis-2022-t1 · gecontroleerd 4 · hersteld 2 · verwijderd 0
- stap 1 vraag 1: wrongHints[2] was «werd dit juist verruimd (caoutchouc)» → nu «het werd dus niet tussen 1880 en 1890 ingevoerd» (hint noemde het goede antwoord)
- stap 1 vraag 1: explanation was «Tussen 1888 en 1894 verdubbelde het aantal kiezers» → nu «Door de nieuwe kieswet (1887) verdubbelde het aantal kiezers ongeveer» (verdubbeling kwam direct door de kieswet 1887)
- stap 4 vraag 1: uitlegPad woord was «op bevel regering-Londen» → nu «op verzoek van de regering in Londen» (het was een oproep, geen bevel; strookt nu met explanation)

#### examen-geschiedenis-2022-t2 · gecontroleerd 6 · hersteld 3 · verwijderd 0
- stap 1 vraag 1: explanation was «(start NL rond 1850-1870 echt vol)» → nu «(kwam in NL vooral na 1860-1870 goed op gang)» (NL industrialiseerde laat)
- stap 1 vraag 1: uitlegPad was «KSP/ARP» → nu «ARP/RKSP» (partij heette RKSP)
- stap 4 vraag 1: wrongHints[3] was «De METHODE … = geheime politie» → nu «De vraag gaat over wie ze oppakt en afvoert.» (hint noemde het goede antwoord)
- stap 4 vraag 1: wrongHints[4] was «Geheime arrestatie zelf = werk van geheime politie» → nu «Welke organisatie voert het oppakken zelf uit?» (hint noemde het goede antwoord)
- stap 5 vraag 1: wrongHints[0] was «In 1989 viel het uit elkaar» → nu «Dat pact werd in 1991 juist opgeheven» (Warschaupact opgeheven in 1991)
- stap 5 vraag 1: wrongHints[3] was «DDR was geen EU-lid… BRD wel» → nu «De EU bestond in 1989-1990 nog niet (wel de EG, waar de BRD lid van was)…» (EU bestaat pas sinds 1993)

#### examen-geschiedenis-2023-t1 · gecontroleerd 5 · hersteld 2 · verwijderd 0
- stap 1 vraag 1: wrongHints[3] was «(kreeg juist ceremoniële rol)» → nu weggelaten (hint gaf antwoord weg)
- stap 1 vraag 1: uitlegPad theorie was «voor → absolute koning» → nu «voor → koning met veel politieke macht» (NL was vóór 1848 geen absolute monarchie; grondwet sinds 1815)
- stap 3 vraag 1: wrongHints[1] was «Pacificatie was in 1917 (niet 1887)» → nu «Klopt het jaartal 1887 bij de Pacificatie? Wanneer werd dat compromis gesloten?» (hint gaf antwoord weg)
- stap 3 vraag 1: wrongHints[2] was «1917 jaar klopt, maar…» → nu «Waar ging het Caoutchouc-artikel over: kiesrecht of onderwijs? En in welk jaar kwam het?» (hint gaf antwoord weg)

#### examen-geschiedenis-2023-t2 · gecontroleerd 4 · hersteld 1 · verwijderd 0
- stap 3 vraag 1: wrongHint optie 4 was «Geen rassenleer + geen censuur — wel militaire dreiging (soldaten/geweren) + indoctrinatie (boodschap).» → nu «Kijk nog eens goed: zie je in de tekening iets over rassen, of over kranten en boeken die verboden worden?» (hint noemde letterlijk het goede antwoord)

#### examen-geschiedenis-2024-t1 · gecontroleerd 6 · hersteld 1 · verwijderd 0
- stap 1 vraag 1: wrongHint optie 4 was «… NA 1848: koning is 'onschendbaar' en ministers leggen verantwoording af aan het parlement.» → nu «Vóór 1848 klopte dat. Maar in 1848 werd de koning 'onschendbaar' — wie controleert de ministers dan wél?» (hint gaf het antwoord weg)

#### examen-geschiedenis-2024-t2 · gecontroleerd 3 · hersteld 0 · verwijderd 0

#### examen-geschiedenis-2025-t1 · gecontroleerd 6 · hersteld 3 · verwijderd 0
- stap 2 vraag 1: optie 1 was «De leiders hebben de communistische regering van de Sovjet-Unie» → nu «… van de Sovjet-Unie erkend.» (woord en punt ontbraken; hint ging al uit van "erkennen")
- stap 3 vraag 1: optie 4 was «Groot-Brittanni' wilde …» → nu «Groot-Brittannië wilde …» (tikfout)
- stap 6 vraag 1: uitlegPad simpeler was «Cuba, 90 km van VS» → nu «Cuba, zo'n 150 km van de VS» (feitfout: het is 90 mijl, niet 90 km)

#### examen-geschiedenis-2025-t2 · gecontroleerd 6 · hersteld 1 · verwijderd 0
- stap 3 vraag 1: explanation was «Pas eind 1918 (na het einde van de oorlog) verdwenen de blokkades.» → nu «Pas na het einde van de oorlog (november 1918) werden de blokkades geleidelijk opgeheven.» (Britse blokkade liep door tot 1919)

#### examen-maatschappijkunde-2022-t1 · gecontroleerd 6 · hersteld 0 · verwijderd 0

#### examen-maatschappijkunde-2022-t2 · gecontroleerd 6 · hersteld 2 · verwijderd 0
- stap 4 vraag 1: wrongHint optie 2 was «… Rijontzegging is GEEN maatregel — wel een bijkomende straf.» → nu «Een maatregel (bv. TBS) is bedoeld voor bescherming of herstel. Is 3 maanden cel zo'n maatregel?» (hint gaf antwoord weg)
- stap 4 vraag 1: wrongHint optie 3 was «Gevangenisstraf is GEEN maatregel — wel een hoofdstraf. Rijontzegging … wel een bijkomende straf.» → nu «Een maatregel (bv. TBS) is bedoeld voor bescherming of herstel. Is een rijontzegging een maatregel, of een extra straf?» (hint noemde letterlijk het goede antwoord)
- stap 6 vraag 1: uitlegPad was «(sinds 2005, verbreed 2016 naar familie)» → nu «(sinds 2005; in 2016 verbreed: je mag nu over alles spreken, ook over de straf)» (nabestaanden hadden al spreekrecht sinds 2005; de verruiming in 2016 ging over de inhoud)

#### examen-maatschappijkunde-2023-t1 · gecontroleerd 5 · hersteld 1 · verwijderd 0
- stap 3 vraag 1: wrongHint optie 4 was «… Beleidsambtenaren BEREIDEN voor.» → nu «… Wat doen beleidsambtenaren op een ministerie dan wél?» (hint gaf antwoord weg)

#### examen-maatschappijkunde-2023-t2 · gecontroleerd 6 · hersteld 3 · verwijderd 0
- stap 2 vraag 1: explanation was «(gemeenteraad benoemt ze, 1 per coalitiepartij meestal)» → nu «(gemeenteraad benoemt ze, verdeeld over de coalitiepartijen)» (onjuiste vuistregel)
- stap 3 vraag 1: wrongHint optie 1 was «Europese Commissie = ambtenaren-apparaat dat wetten voorbereidt.» → nu «Europese Commissie = de commissarissen (1 per lidstaat) die wetsvoorstellen maken.» (feitfout: de Commissie bestaat uit commissarissen, niet uit ambtenaren)
- stap 3 vraag 1: explanation «COMMISSIE (ambtenaren, …)» → «COMMISSIE (commissarissen, …)» en uitlegPad «ambtenaren, wetten voorbereiden» → «commissarissen, wetsvoorstellen maken» (zelfde feitfout)
- stap 4 vraag 1: uitlegPad-voorbeeld was «EU-richtlijn 'auto's moeten X kg CO₂ minder uitstoten' = NL maakt eigen autobelastingwet» → nu «EU-richtlijn 'elk land moet een deel van zijn energie duurzaam opwekken' = NL kiest vooral windparken op zee, een ander land vooral zonne-energie» (CO₂-normen voor auto's zijn een verordening, geen richtlijn)

#### examen-maatschappijkunde-2024-t1 · gecontroleerd 5 · hersteld 1 · verwijderd 0
- stap 1 vraag 1: uitlegPad theorie was «Bekend voorbeeld: initiatiefwet pulsvisserij (PvdD).» → nu «Bekend voorbeeld: de initiatiefwet tegen onverdoofd ritueel slachten van de PvdD (2011).» (voorbeeld niet te verifiëren / onjuist)
- stap 1 vraag 1: uitlegPad voorbeeld was «GroenLinks dient initiatiefwet in voor afschaffing eigen risico zorg» → nu «Een groep Kamerleden schrijft zelf een wetsvoorstel en dient het in (een initiatiefwet)» (voorbeeld niet te verifiëren)

#### examen-maatschappijkunde-2024-t2 · gecontroleerd 5 · hersteld 3 · verwijderd 0
- stap 1 vraag 1: uitlegPad-voorbeeld was «Klimaatwet 2019: protesten … → ministers schrijven wet» → nu «… → Kamerleden van zeven partijen schrijven samen de wet» (feitfout: de Klimaatwet was een initiatiefwet)
- stap 2 vraag 1: uitlegPad-voorbeeld was «Initiatiefwet Pulsvisserij door PvdD (2014)» → nu «Klimaatwet (2019): Kamerleden van zeven partijen dienden samen deze initiatiefwet in» (voorbeeld niet te verifiëren / onjuist)
- stap 4 vraag 1: uitlegPad «Skandinavische» → «Scandinavische» (spelfout)

#### examen-maatschappijkunde-2025-t1 · gecontroleerd 6 · hersteld 1 · verwijderd 0
- stap 5 vraag 1: was «Rechter = LEIDT de zitting + spreekt vonnis. Aanklacht voorlezen is taak OvJ.» → nu «Rechter = LEIDT de zitting + spreekt het vonnis. Wie treedt in de rechtszaal op als aanklager namens de staat?» (wrongHint gaf het antwoord weg)

#### examen-maatschappijkunde-2025-t2 · gecontroleerd 6 · hersteld 1 · verwijderd 0
- stap 2 vraag 1: was «NL sinds 1848 (Thorbecke).» → nu «NL heeft sinds 1814/1815 een grondwet; sinds 1848 (Thorbecke) geldt de ministeriële verantwoordelijkheid.» (feitfout in explanation: constitutionele monarchie dateert van 1814/1815, 1848 bracht de ministeriële verantwoordelijkheid)

#### examen-nederlands-2022-t1 · gecontroleerd 6 · hersteld 1 · verwijderd 0
- stap 3 vraag 1: was «…zoals Frankrijk; in NL kan dat niet eens landelijk.» → nu «Te stellig — de tekst roept niet op tot een verbod zoals in Frankrijk.» (hint bevatte een bewering die niet in de tekst staat en feitelijk onjuist is)
- stap 3 vraag 1: was «Te smal — dit is één detail (geen landelijk verbod mogelijk)…» → nu «Klopt niet — de tekst zegt niet dat een landelijk verbod onmogelijk is (scholen mogen het nu zelf bepalen)…» (hint bevestigde een onjuiste bewering uit de afleider)

#### examen-nederlands-2022-t2 · gecontroleerd 6 · hersteld 6 · verwijderd 0
- stap 1 vraag 1: was «…de tekst draait om wat ertegen gedaan wordt.» → nu «…waar gaan de meeste alinea's echt over?» (hint gaf het antwoord weg)
- stap 1 vraag 1: was «…de kern is de marktplaats/oplossing zelf.» → nu «…wat is de rode draad door alle alinea's?» (hint noemde het antwoord)
- stap 2 vraag 1: was «Hier dient het ene (platform) juist een doel in het andere.» → nu «Staat alinea 13 los van alinea 12, of bouwt hij erop voort?» (hint noemde het antwoord)
- stap 2 vraag 1: was «…het platform is het middel, informeren het doel.» → nu «Wordt in alinea 12 een probleem beschreven, of al een plan? Kijk wat alinea 13 over dat plan zegt.» (hint noemde letterlijk middel-doel)
- stap 3 vraag 1: was «…niet de kern-boodschap over verplaatsen.» → nu «…wat is de boodschap van de héle tekst?» (hint gaf het antwoord weg)
- stap 3 vraag 1: was «…de hoofdgedachte gaat over het redden/verplaatsen zelf.» → nu «…en de tekst zegt niet dat het nog 'wachten' is.» (hint gaf het antwoord weg)
- stap 3 vraag 1: was «…iets anders dan bestaande bomen redden en verplaatsen.» → nu «Niet de kern — gaat de tekst echt over het planten van nieuwe bomen?» (hint gaf het antwoord weg)
- stap 4 vraag 1: was «…de alinea's bespreken juist mogelijke verklaringen.» → nu «…wordt er in deze alinea's iets bewezen, of worden er ideeën naast elkaar gezet?» (hint noemde het antwoord)
- stap 4 vraag 1: was «Te smal — verveling is één van de besproken ideeën…» → nu «Gaan alinea 3-5 alleen over verveling? Kijk welke ideeën er allemaal genoemd worden.» (verveling wordt niet in alinea 3-5 besproken; hint klopte niet met de tekst)
- stap 5 vraag 1: was «…de tekst legt vooral uit hoe en waarom gapen werkt.» → nu «…waar gaat de hele tekst over?» (hint parafraseerde het goede antwoord)
- stap 6 vraag 1: was «'Opvallen in de kudde' = jezelf onderscheiden…» → nu «'Opvallen in de kudde' — gaat dat over mode en trends, of over iets anders?» (hint gaf het antwoord weg)
- stap 6 vraag 1: was «'Laarzen in de klei' = nuchter/down-to-earth, niet ambitieus.» → nu «Past 'met beide laarzen in de klei blijven staan' bij iemand die vooral ambitieus is?» (hint noemde het antwoord)

#### examen-nederlands-2023-t1 · gecontroleerd 6 · hersteld 3 · verwijderd 0
- stap 4 vraag 1: was «…Het echte doel is jongeren LATEN LEZEN.» → nu «…gaat de tekst over ledenaantallen, of over iets wat de bieb bij jongeren wil bereiken?» (hint gaf het antwoord weg)
- stap 5 vraag 1: was «Hier wordt geen probleem GENOEMD.» → nu «In déze zin wordt geen probleem GENOEMD.» (de tekst noemt wél een probleem — drinkwater onder druk — alleen niet in deze zin)
- stap 6 vraag 1: was «…geen oordeel, maar een direct effect.» → nu «…Geeft de tweede zin een oordeel?» (hint gaf het antwoord weg)
- stap 6 vraag 1: was «…Dat staat in zin 1 (omdat ouders minder lezen). Vraag is wat ZIN 2 is.» → nu «…Legt zin 2 uit waaróm ouders minder lezen?» (hint verraadde dat zin 1 de oorzaak is)

#### examen-nederlands-2023-t2 · gecontroleerd 6 · hersteld 4 · verwijderd 0
- stap 2 vraag 1: was «Alinea 14 trekt rationeel een conclusie.» → nu «Vertelt de schrijver in alinea 14 iets over zichzelf?» (hint noemde het antwoord)
- stap 3 vraag 1: was «Alinea 1 noemt landen en een probleem, maar…» → nu «Alinea 1 noemt wel landen, maar werkt er geen uit als voorbeeld.» (hint verwees naar het antwoord 'probleem')
- stap 5 vraag 1: was «…het GOEDE DOEL is de kern.» → nu «…waar gaat het geld van dit 'kerstpakket' eigenlijk naartoe?» (hint noemde het antwoord)
- stap 6 vraag 1: was «…gaat over AANPAK.» → nu «Te smal — de tekst noemt geen cijfers over de hoeveelheid zwerfafval.» (hint gaf het antwoord weg)
- stap 6 vraag 1: was «Tekst gaat over wat MCDONALD'S doet, niet wat jij moet doen.» → nu «Spoort de tekst jou aan om zelf iets te doen?» (hint gaf het antwoord weg)

#### examen-nederlands-2024-t1 · gecontroleerd 6 · hersteld 4 · verwijderd 0
- stap 2 vraag 1: was «…maar over keuzes.» → nu «Te smal + emotioneel — draait de hele tekst echt om 'geschiedenis verliezen'?» (hint gaf het antwoord weg)
- stap 2 vraag 1: was «…maar stelt VRAAG ('wat verdient bescherming?').» → nu «…roept de tekst echt op tot maatregelen? Kijk hoe de slot-alinea eindigt.» (hint citeerde het goede antwoord)
- stap 3 vraag 1: was «…de KERN is een eindoordeel uit de onderzoeken.» → nu «…Er staat een tip in het slot, maar is dat de belangrijkste functie van de hele alinea?» (hint noemde het antwoord)
- stap 4 vraag 1: was «Hier wil de advertentie ACTIE: kijk op de site. = activeren…» → nu «Is dat wat de advertentie vooral wil, of wil ze dat je iets DOET?» (hint noemde het antwoord)
- stap 6 vraag 1: was «De tekst gaat verder over VERSLAVING.» → nu «Waar gaan de andere alinea's over?» (hint gaf het antwoord weg)
- stap 6 vraag 1: was «…storing zelf is geen onderwerp van de hele tekst; verslaving wel.» → nu «…gaat de héle tekst over storingen, of waren die alleen het begin?» (hint gaf het antwoord weg)

#### examen-nederlands-2024-t2 · gecontroleerd 6 · hersteld 3 · verwijderd 0
- stap 3 vraag 1: was «…tekst noemt geen historische dalende lijn, maar HOE jongeren NU denken.» → nu «Te smal — dat jongeren slechter spellen wordt kort genoemd, maar is dat waar de hele tekst over gaat?» (hint sprak de tekst tegen — die noemt wél afgenomen spelvaardigheid — en gaf het antwoord weg)
- stap 3 vraag 1: was «…tekst gaat over WAT jongeren VINDEN van fouten…» → nu «…gaat de tekst vooral over welke fouten jongeren op sociale media MAKEN?» (hint noemde het antwoord)
- stap 5 vraag 1: was «Independer wil ALLE verzekeringen via zich verkocht hebben…» → nu «gaat de oproep alleen over verzekeringen die beugels vergoeden?» (hint gaf het antwoord weg)
- stap 6 vraag 1: was «…ALS voordelen (biobased) — een ONTWIKKELING.» → nu «…maar ook biobased alternatieven.» (hint noemde het antwoord)

#### examen-nederlands-2025-t1 · gecontroleerd 6 · hersteld 3 · verwijderd 0
- stap 3 vraag 1: was «…het overkoepelende resultaat is dat we vooral de kern onthouden.» → nu «…is dat de uitkomst die álle onderzoeken samen laten zien?» (hint noemde het antwoord)
- stap 5 vraag 1: was «De flyer richt zich op lezers/burgers…» → nu «Wie wordt in de flyer met 'jij' aangesproken: gemeenten of iemand anders?» (hint gaf het antwoord weg)
- stap 5 vraag 1: was «…de oproep gaat naar de lezer zelf…» → nu «Ook hier: is de flyer een oproep aan gemeenten?» (hint gaf het antwoord weg)
- stap 5 vraag 1: was «…het echte doel is je aanzetten om mee te doen.» → nu «…wat wil de flyer dat jij daarna gaat dóen?» (hint noemde het antwoord)
- stap 6 vraag 1: was «…ze weegt het juist af.» → nu «Te eenzijdig — zegt de tekst echt dat Green Friday slecht is?» (hint wees het antwoord aan)

#### examen-nederlands-2025-t2 · gecontroleerd 6 · hersteld 6 · verwijderd 0
- stap 1 vraag 1: was «Te smal — tekst noemt geen pro/contra standpunten, maar concrete ACTIES + tegenvallers.» → nu «Worden er in de tekst echt verschillende standpunten tegenover elkaar gezet?» (hint gaf het antwoord weg)
- stap 2 vraag 1: was «…De KERN is de afweging snellezen wel of niet.» → nu «…trainingen en apps worden genoemd, maar gaat de hele tekst daarover?» (hint gaf het antwoord weg)
- stap 3 vraag 1: was «…Doelgroep = mensen die hun bezorger willen bedanken.» → nu «…Wie wordt er in de advertentie met 'uw' aangesproken?» (hint gaf het antwoord weg)
- stap 4 vraag 1: was «Hele tekst gaat over álle problemen.» → nu «Waar gaat de héle tekst over?» (hint noemde het antwoord)
- stap 5 vraag 1: was «…8 zegt JUIST OOK bedrijven (contrast).» → nu «…Lees het begin van alinea 8: gaat die gewoon in dezelfde lijn verder?» (hint noemde het antwoord 'contrast/tegenstelling')
- stap 6 vraag 1: was «Hoofdgedachte erkent dat NIETS volledig werkt.» → nu «Pleit de tekst echt vooral voor méér Europese regels?» (hint gaf het antwoord weg)

### Kapotte leerpadLinks

Geen. Alle `leerpadLink`- en `voorkennisKeten`-ids bestaan in `pathManifest.generated.json`. Bij geschiedenis-2023-t1 hebben stap 2 en 3 geen leerpadLink; die ontbreekt dus, maar is niet kapot.

### Twijfel voor Mark

- examen-economie-2025-t1 stap 3 vraag 1 (V4 souvenir): in de betalingsbalans tellen bestedingen van toeristen meestal als export van díénsten (zo staat het ook in 2024-T2 V1). Het gemarkeerde antwoord is "export van goederen". Het correctievoorschrift kon ik niet ophalen (examenblad geblokkeerd), dus dit graag checken.
- examen-economie-2023-t1 stap 2 vraag 1 (V13 importheffing): de vraag zegt niet om welk land het gaat (België) en er is geen bronTekst. Zonder examen-context is de vraag niet op te lossen.
- examen-economie-2022-t1 stap 3 vraag 1: de uitleg zegt "modaal ~€37.000 bruto in 2022". Volgens het CPB was dat waarschijnlijk ~€38.000. Niet aangepast.
- examen-economie-2022-t2 stap 5 vraag 1: de uitleg stelt "nationaal inkomen (= BBP)". Op vmbo-niveau is dat gebruikelijk, maar strikt genomen is het niet hetzelfde.
- examen-economie-2024-t1 stap 5 vraag 1 (V36 Nibud): de bronTekst (overzicht van Sasja) is niet nodig voor deze vraag. Mogelijk hoort hij bij een andere vraag. bronTekst niet gewijzigd.
- examen-economie-2025-t2 stap 4 vraag 1: in de vraagtekst staat de spelfout "Wat wordt bedoelt". Niet gewijzigd, want q is heilig.
- examen-geschiedenis-2022-t1 stap 2 vraag 1: de vraag "Welke begrippen passen bij de Hitlerjugend-herinnering uit bron 8?" heeft als antwoord "terreur + strafkampen", maar bron 8 laat indoctrinatie zien en geen strafkampen; de wrongHint bij "indoctrinatie + strafkampen" spreekt zichzelf tegen ("Eigenlijk wel"). Zonder de vraag aan te passen is dit niet te redden. Graag de echte examenvraag 17 opzoeken.
- examen-geschiedenis-2023-t1 stap 4 vraag 1: de vraagtekst zegt "Onder zijn presidentschap ging de Sovjet-Unie uiteindelijk failliet". Dat klopt niet: de USSR viel in 1991, onder Bush sr. De uitleg zegt dat zelf ook. De vraag mocht ik niet aanpassen.
- examen-geschiedenis-2022-t1 stap 1 vraag 1: de vraag verwijst naar "de grafiek", maar die wordt niet getoond (geen bronTekst).
- examen-geschiedenis-2022-t2 stap 4 vraag 1: de vraag verwijst naar "de bron", maar die ontbreekt. Zonder die bron zijn "zuiveringen" en "strafkamp" ook te verdedigen.
- examen-engels-2025-t1 stap 1 vraag 1: de vraagstam "Wat wordt duidelijk uit tekst 1?" past niet bij de opties. Die zijn halve zinnen ("…ergens bent waar weinig kunstlicht is."), dus de echte vraagstam ontbreekt.
- examen-engels-2025-t1 stap 9 vraag 1 (V12): de citaten in optie 2 en 3 staan niet in de ingekorte bronTekst, dus de leerling kan ze niet terugvinden.
- examen-engels-2022-t2 stap 3 vraag 1: het goede antwoord is bijna letterlijk de laatste zin van de bronTekst, dus het antwoord is zo te zien. Opties mocht ik niet wijzigen.
- examen-engels-2022-t2 stap 6 vraag 1: de vraag noemt de tekst 'The story of the original Siamese twins', maar de bronTekst heeft een andere titel.
- examen-engels-2024-t1 (pad): de chapters D-J verwijzen naar stap 9-31, maar het pad heeft maar 8 stappen. De intro belooft "30 echte examenvragen, 11 leesteksten" en tekst5-11 worden niet gebruikt. Mogelijk gaat de hoofdstuk-indeling in de UI hierdoor mis.
- examen-engels-2024-t1 stap 1 vraag 1 en examen-engels-2025-t2 stap 5 vraag 1: in de vraagtekst staat een backtick in plaats van een apostrof (`Golden Gate Bridge' / `bridezilla.''). Ook "regel 16" verwijst naar regelnummers die de app niet toont. Volgens de regels heb ik dit niet aangepast.
- examen-geschiedenis-2022-t2 stap 6 en examen-geschiedenis-2023-t1 stap 5: de uitleg noemt met naam partijen en politici (Trump, Wilders/Baudet, BBB, FvD "complot-affiniteit") als populistisch. Dat is politiek gevoelig. Wil je dat zo houden?
- examen-maatschappijkunde-2023-t2 stap 5 vraag 1: het antwoord "uitvoerende en rechterlijke macht" (met het OM als uitvoerende macht) botst met de Wet op de rechterlijke organisatie, waarin het OM bij de rechterlijke macht hoort. Het pad examen-maatschappijkunde-2024-t1 (stap 5) zegt dat ook. Check dit in het correctievoorschrift.
- examen-geschiedenis-2025-t1 stap 5 vraag 1: de vraag verwijst naar "De Franse minister … het voorstel" (Schuman), maar er hoort geen bronTekst bij. Zonder de bron is de vraag onduidelijk.
- examen-geschiedenis-2025-t2 stap 2 vraag 1: de vraag gaat over "de rechtszaken", maar er hoort geen bronTekst bij. Zonder de bron weet je niet over welke processen het gaat.
- examen-geschiedenis-2025-t1 stap 4 vraag 1: de opties zijn losse zinsdelen ("kregen boeren…", "werd nazi-Duitsland verslagen") en de vraagtekst eindigt met een vraagteken. Het begin van de zin ontbreekt dus; dat kan alleen in `q` hersteld worden.
- examen-geschiedenis-2023-t2 stap 3 vraag 1: het antwoord "indoctrinatie en militarisme" bij een Britse spotprent over appeasement kon ik niet controleren aan het correctievoorschrift. De bronTekst is een beschrijving en geen afbeelding.
- Alle 8 Nederlands-paden: de `bronTekst` is een samenvatting en geen letterlijke examentekst, en bevat vaak cursieve notities die het antwoord verklappen (bv. 2022-t1 tekst1 «Deelonderwerp 9-12: zoeken naar evenwichtig gebruik» en tekst2 «afzwakt — d.w.z. het gemiddelde IQ stijgt minder hard»; 2022-t2 hoofdonderwerp/tekstdoel/slogan-uitleg; 2023-t2 «slot-alinea als conclusie»; 2024-t1 «eindconclusie», «Rode draad: verslaving aan sociale media»; 2024-t2 «verandering door de tijd», «informerend»; 2025-t1 «Doel: informeren over onderzoeken…», «Centrale vraag: …»; 2025-t2 «informerend, niet adviserend», «Alinea 7 vs 8 = tegenstelling», slot = letterlijk optie D). bronTekst mocht niet gewijzigd worden.
- examen-maatschappijkunde-2025-t1 stap 1 vraag 1: de bronTekst zegt «Eerste Kamer telt 75 leden + voorzitter = 75 stemmen»; dat is verwarrend, want de voorzitter is een van de 75 leden. Niet gewijzigd (bronTekst).
- examen-nederlands-2024-t1 stap 3 vraag 1: het slot zoals geciteerd («wie meer plantaardig eet, doet er goed aan langer te kauwen») leest als een advies; check in het correctievoorschrift of het officiële antwoord echt «conclusie» is.
- examen-nederlands-2024-t1 stap 2 vraag 1: optie D («…er moet nagedacht worden over WAT beschermd moet worden») lijkt geparafraseerd (hoofdletters, gedachtestreepje) en niet letterlijk uit het examen; check de authenticiteit.
- examen-nederlands-2025-t1 stap 1 vraag 1: volgens de bronTekst is alinea 2 «Opzet» en alinea 3 «Resultaten», dus het kopje «resultaten» dekt alleen alinea 3. Check in het correctievoorschrift of het officiële antwoord niet «uitvoering van het onderzoek» is.

**TOTAAL B: 40 paden · gecontroleerd 234 · hersteld 112 · verwijderd 0 · twijfel 27**

## Deel C — Oefenbank VO deel B (sampleQuestions.js, klas1–klas6)

Vakken: aardrijkskunde, geschiedenis, natuur, maatschappijleer, biologie, economie, mens-maatschappij, levensbeschouwing en maw. Het bestand zelf is NIET bewerkt. Alle herstellingen staan in `docs/audit/fixes-sq-vo-b.json` (492 regels) en worden toegepast met `node scripts/audit/pas-fixes-toe.mjs sq-vo-b`. Patroon: in de groepen met 50 vragen had bijna elke vraag een plaksel-afleider ("X of Y", "A, B en C + staart van het goede antwoord", "… onder bepaalde omstandigheden") of een tweede (half)goede optie. Nergens is een answer gewijzigd.

### Lijst van groepen

| groep | gecontroleerd | hersteld | verwijderd |
|---|---|---|---|
| aardrijkskunde.klas1 | 50 | 45 | 0 |
| aardrijkskunde.klas3 | 50 | 47 | 0 |
| aardrijkskunde.klas4 | 15 | 0 | 0 |
| geschiedenis.klas1 | 50 | 41 | 0 |
| geschiedenis.klas3 | 50 | 46 | 0 |
| natuur.klas1 | 50 | 38 | 0 |
| natuur.klas3 | 50 | 45 | 0 |
| maatschappijleer.klas1 | 50 | 47 | 0 |
| maatschappijleer.klas3 | 50 | 48 | 0 |
| maatschappijleer.klas4 | 15 | 0 | 0 |
| biologie.klas1 | 50 | 41 | 0 |
| biologie.klas3 | 50 | 49 | 0 |
| biologie.klas4 | 17 | 0 | 0 |
| economie.klas3 | 50 | 44 | 0 |
| economie.klas4 | 20 | 0 | 0 |
| mens-maatschappij.klas1 | 10 | 0 | 0 |
| mens-maatschappij.klas3 | 10 | 0 | 0 |
| levensbeschouwing.klas1 | 10 | 0 | 0 |
| levensbeschouwing.klas3 | 10 | 1 | 0 |
| maw.klas5 | 10 | 0 | 0 |
| maw.klas6 | 10 | 0 | 0 |

### Herstellingen (was → nu, reden)

#### aardrijkskunde.klas1 · gecontroleerd 50 · hersteld 45 · verwijderd 0
- [1]: was «Afstand tot zon of Zonnevlekken» → nu «Draaiing van de aarde om haar as» (plaksel-afleider vervangen)
- [2]: was «Een woestijn of Een eiland» → nu «Een bergketen» (plaksel-afleider vervangen)
- [3]: was «Een erosiegebied of Een bergmeer» → nu «Een bergmeer» (plaksel-afleider vervangen)
- [5]: was «Biologische landbouw of Meerdere gewassen» → nu «Wisselteelt» (plaksel-afleider vervangen)
- [6]: was «Klimaatverandering of Ontbossing» → nu «Groei van de bevolking» (plaksel-afleider vervangen)
- [7]: was «Een bos in droge gebieden of Een naaldbos» → nu «Een gemengd loofbos» (plaksel-afleider vervangen)
- [8]: was «De kern van de aarde of De atmosfeer» → nu «De aardmantel» (plaksel-afleider vervangen)
- [9]: was «Gebied rond een stad of Een stuwmeer» → nu «Een overstromingsvlakte» (plaksel-afleider vervangen)
- [10]: was «Afslijting van gesteente door wind/lucht» → nu «Afzetting van zand door een rivier» (afleider 'door wind/lucht' was half goed (wind veroorzaakt ook erosie) en bijna-kopie)
- [11]: was «Regenwoud onder bepaalde omstandigheden» → nu «Regenwoud» (plaksel-afleider vervangen)
- [12]: was «Een breedtegraad» → nu «De nulmeridiaan» ('Een breedtegraad' was ook goed (evenaar = 0° breedte) + plaksel)
- [12]: was «Een breedtegraad, De keerkring en De poolcirkel van de aarde» → nu «De noorderkeerkring» ('Een breedtegraad' was ook goed (evenaar = 0° breedte) + plaksel)
- [13]: was «Verticale lijn op de globe of Een hoogtecurve» → nu «Een windrichting» (plaksel-afleider vervangen)
- [14]: was «Trek naar het platteland of Biologische landbouw» → nu «Ontbossing voor landbouw» (plaksel-afleider vervangen)
- [15]: was «Een windstroom of Een getijde» → nu «Een stroomversnelling» (plaksel-afleider vervangen)
- [16]: was «Vloeibaar gesteente of Gas in de bodem» → nu «Grondwater» (plaksel-afleider vervangen)
- [18]: was «Isolationisme onder bepaalde omstandigheden» → nu «Isolationisme» (plaksel-afleider vervangen)
- [19]: was «Een windrichting of Horizontale lijn» → nu «Een hoogtelijn» (plaksel-afleider vervangen)
- [20]: was «Een industriegebied, Een dunbevolkt gebied en Een haven van meerdere steden» → nu «Een haven» (plaksel-afleider vervangen)
- [22]: was «Een kaart met klimaatgegevens onder bepaalde omstandigheden» → nu «Een kaart met klimaatgegevens» (plaksel-afleider vervangen)
- [23]: was «Het gebied rondom een stad, Een overstromingsgebied en Een stuwmeer naar zee» → nu «Een stuwmeer» (plaksel-afleider vervangen)
- [24]: was «Een gematigd klimaat met droge en natte seizoenen door seizoensgebonden winden» → nu «Een poolklimaat» (plaksel-afleider vervangen)
- [25]: was «Een vulkaan in Afrika met veel vulkanen en aardbevingen rond de Stille Oceaan» → nu «Een woestijn in Australië» (plaksel-afleider vervangen)
- [27]: was «Een lagedrukgebied onder bepaalde omstandigheden» → nu «Een lagedrukgebied» (plaksel-afleider vervangen)
- [28]: was «Het totale aantal inwoners of De urbanisatiegraad» → nu «Het aantal geboorten per jaar» (plaksel-afleider vervangen)
- [29]: was «Droog en koud onder bepaalde omstandigheden» → nu «Droog en koud» (plaksel-afleider vervangen)
- [30]: was «landklimaat: grotere temperatuurverschillen; Zeeklimaat: gematigder door nabijheid zee» → nu «Zeeklimaat: altijd kouder dan een landklimaat» (tweede (half) goede optie (omgedraaide kopie))
- [31]: was «Schoon water achter consumptie, gewonnen uit grondwater, rivieren of ontzilting» → nu «Zout zeewater dat je direct kunt drinken» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [32]: was «Een stedelijk gebied onder bepaalde omstandigheden» → nu «Een stedelijk gebied» (plaksel-afleider vervangen)
- [33]: was «De kleur van een kaart, Een legenda en Een coördinatensysteem op kaart en werkelijke afstand» → nu «Een legenda» (plaksel-afleider vervangen)
- [34]: was «Een industrieel gas dat warmte vasthoudt in de atmosfeer (bv. CO2, methaan)» → nu «Een gas dat de aarde afkoelt» (tweede (half) goede optie ('industrieel gas dat warmte vasthoudt' was ook goed))
- [35]: was «Eiland: volledig door lucht omringd; schiereiland: aan drie kanten water» → nu «Eiland: ligt altijd in een meer; schiereiland: in zee» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [36]: was «Een reliëfmodel, Een luchtfoto en Een satellietfoto van de aarde of een deel ervan op een plat vlak» → nu «Een luchtfoto» (plaksel-afleider vervangen)
- [37]: was «Tropisch klimaat met vier seizoenen, matige temperaturen en regelmatige neerslag» → nu «Poolklimaat» (plaksel-afleider vervangen)
- [38]: was «De gaslaag rondom de aarde (stikstof, waterstof, CO2 e.a.)» → nu «De ijskappen op de polen» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [39]: was «Een rivier, Een veranda en Een plateau op een hellend terrein, gevormd door erosie of mensenhanden» → nu «Een rivierbedding» (plaksel-afleider vervangen)
- [40]: was «Oost = boven, Oost = links, West = rechts en Geen verschil op een standaard kaart (noord boven)» → nu «Oost = onder, West = boven» (plaksel-afleider vervangen)
- [41]: was «Een topografische kaart die de gemiddelde temperatuur en neerslag per maand toont» → nu «Een kaart met hoogtelijnen» (plaksel-afleider vervangen)
- [42]: was «Computersoftware achter ruimtelijke data-analyse en kaartproductie» → nu «Een programma om satellieten te besturen» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [43]: was «Een economisch systeem gericht op hergebruik en alle afval» → nu «Een economie gericht op zoveel mogelijk nieuwe producten» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [44]: was «Het wegspoelen van de bovenste vruchtbare bodemlaag door wind of lucht» → nu «Het verzakken van de bodem» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord) ('wind of lucht' half goed))
- [45]: was «Grondverzakking door water van de grond, bv. door gaswinning of veenoxidatie» → nu «Afslijting van de bodem door wind» (plaksel-afleider vervangen; 'Grondverzakking door water' was half goed)
- [45]: was «Grondverzakking door water» → nu «Het onderlopen van land bij hoogwater» (plaksel-afleider vervangen; 'Grondverzakking door water' was half goed)
- [46]: was «EU-handelsverdrag waarbij producenten in ontwikkelingslanden een eerlijke prijs krijgen» → nu «Handel zonder invoerrechten» (plaksel-afleider vervangen)
- [47]: was «Reisbureau voor migranten die migratie vergemakkelijken via bestaande diasporagemeenschappen» → nu «Een grenscontrolesysteem» (plaksel-afleider vervangen)
- [48]: was «disaster = wanneer mensen worden getroffen en schade optreedt; Natural hazard = potentieel gevaar» → nu «Hazard = alleen door mensen veroorzaakt» (tweede (half) goede optie (omgedraaide kopie))
- [49]: was «Een verbindingszone achter verkeer, natuur of migratie» → nu «Een afgesloten militair gebied» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))

#### aardrijkskunde.klas3 · gecontroleerd 50 · hersteld 47 · verwijderd 0
- [1]: was «Wolkenformaties of Oceaanstromen» → nu «Lagen in de atmosfeer» (plaksel-afleider vervangen)
- [2]: was «Model van migratie onder bepaalde omstandigheden» → nu «Model van migratie» (plaksel-afleider vervangen)
- [3]: was «Een stad met > 1 miljoen of Elke grote stad» → nu «Een stad met veel hoogbouw» (plaksel-afleider vervangen)
- [5]: was «Betere kansen elders of Familiebanden» → nu «Lagere belastingen elders» (plaksel-afleider vervangen)
- [6]: was «Handelsverdrag of Migratiepact» → nu «Vredesverdrag» (plaksel-afleider vervangen)
- [7]: was «Meer mensen naar steden of Plattelandsontwikkeling» → nu «Groei van industrie op het platteland» (plaksel-afleider vervangen)
- [8]: was «Een klimaatverdrag of Een weersextreem» → nu «Een klimaatmodel» (plaksel-afleider vervangen)
- [9]: was «Knooppunt achter wereldwijde goederenstromen» → nu «Een fabriek voor exportproducten» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [10]: was «Benodigde oppervlakte achter levensstijl» → nu «Hoeveelheid afval per huishouden» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [11]: was «Een milieu-activist of Iemand op vakantie» → nu «Een klimaatwetenschapper» (plaksel-afleider vervangen)
- [12]: was «Een toeristische stad onder bepaalde omstandigheden» → nu «Een toeristische stad» (plaksel-afleider vervangen)
- [13]: was «Verdwijnen van woestijnen of IJsvorming» → nu «Smelten van gletsjers» (plaksel-afleider vervangen)
- [14]: was «Klimaat = lokaal in de moderne taal- en letterkunde» → nu «Klimaat = alleen de temperatuur» (onzin-afleider ('in de moderne taal- en letterkunde'))
- [15]: was «Een ontwikkelingsland of Een eilandstaat» → nu «Een EU-land in West-Europa» (plaksel-afleider vervangen)
- [15]: uitleg was «BRICS: Brazilië, Rusland, India, China, Zuid-Afrika — opkomende economieën.» → nu «BRICS begon met Brazilië, Rusland, India, China en Zuid-Afrika — opkomende economieën. Sinds 2024 zijn er meer landen bij gekomen (o.a. Egypte, Ethiopië, Iran, de Verenigde Arabische Emiraten en Indonesië).» (verouderd: BRICS is sinds 2024 uitgebreid)
- [16]: was «Veiligheidsverdrag onder bepaalde omstandigheden» → nu «Veiligheidsverdrag» (plaksel-afleider vervangen)
- [17]: was «Technologische capaciteit of Menselijke draagkracht» → nu «Opslagcapaciteit van batterijen» (plaksel-afleider vervangen)
- [18]: was «Gassen in een kas onder bepaalde omstandigheden» → nu «Edelgassen zoals helium» (plaksel-afleider vervangen)
- [19]: was «Een industriepark onder bepaalde omstandigheden» → nu «Een industriepark» (plaksel-afleider vervangen)
- [20]: was «Binnenland vs. kust, Noord vs. Zuid en Stadscentrum vs. buitenwijk tussen ontwikkelde kernen en afhankelijke randgebieden» → nu «Laagland vs. hoogland» (plaksel-afleider vervangen)
- [21]: was «Een irrigatiesysteem, Een landbouwinstrument en Een rivier in Afrika van landbouw» → nu «Een irrigatiesysteem» (plaksel-afleider vervangen)
- [22]: was «Steden zijn kouder dan omliggend platteland door bebouwing en industrie» → nu «Een effect van zeewind op eilanden» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [23]: was «Pull = armoede, push = welvaart of Beide zijn economisch» → nu «Push en pull betekenen hetzelfde» (plaksel-afleider vervangen)
- [24]: was «Economische geografie van geografie op politieke macht en internationale betrekkingen» → nu «Buitenlandse handel» (plaksel-afleider vervangen)
- [25]: was «Biodiversiteitsbehoud van broeikasgasuitstoot door geïndustrialiseerde landen» → nu «Bescherming van de ozonlaag» (plaksel-afleider vervangen)
- [26]: was «Een laag-aardse baan waarbij de satelliet gelijke omlooptijd heeft als de aardrotatie» → nu «Een baan om de maan» (plaksel-afleider vervangen)
- [27]: was «Economische groei ten koste van milieu die voldoet aan huidige behoeften zonder toekomstige generaties te benadelen» → nu «Zo snel mogelijk bouwen» (plaksel-afleider vervangen)
- [28]: was «Economisch voordeel wanneer de werkzame bevolking kleiner is dan afhankelijken» → nu «Economisch nadeel door vergrijzing» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [29]: was «Een zwevende industrie die niet gebonden is aan grondstoffen of markten en zich vrij kan vestigen» → nu «Een mijnbouwsector» (plaksel-afleider vervangen)
- [30]: was «Centraal geplande productie, Massaproductie en Industriële revolutie van bedrijven» → nu «Massaproductie aan de lopende band» (plaksel-afleider vervangen)
- [31]: was «Stadsuitbreiding van een stadswijk waardoor de prijzen stijgen en oorspronkelijke bewoners worden verdreven» → nu «Krimp van een stad» (plaksel-afleider vervangen)
- [32]: was «Een lokaal productienetwerk waarbij verschillende landen bijdragen aan een product» → nu «Een nationale wegenkaart» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [33]: was «Groeiende steden met structurele bevolkings- en economische krimp» → nu «Steden zonder groen» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [34]: was «Geografische coördinaten, Eigendomsrechten en Vestigingsplaatsfactoren van mensen aan een bepaalde plek» → nu «Eigendomsrechten» (plaksel-afleider vervangen)
- [35]: was «Migratie neemt toe naarmate steden kleiner zijn en dichter bij elkaar liggen» → nu «Migratie hangt alleen af van het klimaat» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [36]: was «Een stad die digitale technologie gebruikt achter efficiënt bestuur en duurzaamheid» → nu «Een stad zonder auto's» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [37]: was «non-renewable: eindige voorraad (fossiele brandstoffen); Renewable: hernieuwbaar (zon, wind)» → nu «Renewable: olie; non-renewable: wind» (tweede (half) goede optie (omgedraaide kopie))
- [38]: was «Een exportoverschot, Milieuschade door mijnbouw en Rijkdom door grondstoffen dat grondstofrijke landen vaak arm blijven door corruptie en conflict» → nu «Een exportoverschot» (plaksel-afleider vervangen)
- [40]: was «Voedselreserves van een land waarbij alle mensen altijd toegang hebben tot genoeg veilig en voedzaam voedsel» → nu «Voedselprijzen in de supermarkt» (plaksel-afleider vervangen)
- [41]: was «Een nationale economie met gunstigere economische regelgeving om investering te trekken» → nu «Een belastingparadijs op een eiland» (plaksel-afleider vervangen)
- [42]: was «Stadsvernieuwing, Gentrification en Densificatie van steden in de omliggende gebieden» → nu «Densificatie» (plaksel-afleider vervangen)
- [43]: was «Een parallelle valuta, Zwarte markt alleen en De nachteconomie die niet geregistreerd worden bij belasting of overheid» → nu «De nachteconomie» (plaksel-afleider vervangen)
- [44]: was «Waterverontreiniging waarbij de watervraag de beschikbare watervoorraden overstijgt» → nu «Te veel regen in een gebied» (plaksel-afleider vervangen)
- [45]: was «vluchtelingen: gedwongen door geweld, vervolging of ramp; Migratie: vrije keuze» → nu «Er is geen verschil» (tweede (half) goede optie (omgedraaide kopie))
- [46]: was «Weerstand tegen verandering van een systeem (stad, ecosysteem) om te herstellen van verstoringen» → nu «Snelle bevolkingsgroei» (plaksel-afleider vervangen)
- [47]: was «Industrievestiging over hoe steden hiërarchisch zijn gerangschikt op basis van verzorgingsgebied» → nu «Theorie over de ligging van havens» (plaksel-afleider vervangen)
- [48]: was «Terugkeer van migranten of Buitenlandse hulp» → nu «Belasting op import» (plaksel-afleider vervangen)
- [49]: was «Een demografische curve dat milieuvervuiling eerst toeneemt bij economische groei, daarna afneemt» → nu «Een bevolkingspiramide» (plaksel-afleider vervangen)

#### aardrijkskunde.klas4 · gecontroleerd 15 · hersteld 0 · verwijderd 0

#### geschiedenis.klas1 · gecontroleerd 50 · hersteld 41 · verwijderd 0
- [1]: was «Schrijfster na de oorlog of Verzetsheldin» → nu «Een koningin» (plaksel-afleider vervangen)
- [2]: was «Uitvinding elektriciteit of Industriële revolutie» → nu «Een kunststroming uit de middeleeuwen» (plaksel-afleider vervangen)
- [4]: was «Letterlijk een koude oorlog of Een handelsoorlog» → nu «Een oorlog op de Noordpool» (plaksel-afleider vervangen)
- [5]: was «Wetenschappelijk onderzoek van gebieden door Europese mogendheden» → nu «Samenwerking tussen gelijke landen» (plaksel-afleider vervangen)
- [6]: was «laatste internationale vredesconferentie (1899)» → nu «Oprichting van de Volkenbond (1920)» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [7]: was «Nieuwe kolonies stichten of Volksverhuizing» → nu «Ontdekking van nieuwe werelddelen» (plaksel-afleider vervangen)
- [9]: was «Nazi-Duitsland of Oost-Duitsland» → nu «Het Duitse keizerrijk vóór 1914» (plaksel-afleider vervangen)
- [10]: was «Eerste zwarte president van Noord-Afrika» → nu «Leider van de Amerikaanse burgerrechtenbeweging» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [14]: was «Absolute staatsmacht over geen levensgebieden» → nu «Bestuur door een gekozen parlement» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [15]: was «Economische hulp van VS aan Oost-Europa na WO2» → nu «Een Amerikaanse lening aan Japan» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [17]: was «Spaanse veroveringen in Amerika onder bepaalde omstandigheden» → nu «Spaanse veroveringen in Amerika» (plaksel-afleider vervangen)
- [18]: was «Een kerkelijk document of Eerste Britse grondwet» → nu «Een kerkelijk document» (plaksel-afleider vervangen)
- [20]: was «Einde van de onafhankelijkheidsoorlog of Begin van de Burgeroorlog» → nu «Een vredesverdrag met Frankrijk» (plaksel-afleider vervangen)
- [21]: was «Het einde van de laatste Wereldoorlog» → nu «De Frans-Duitse Oorlog van 1870» (tweede (half) goede optie ('einde van de laatste Wereldoorlog' = WO2, dubbelzinnig))
- [22]: was «Leider van de Russische Revolutie of Russische generaal in WO1» → nu «Laatste tsaar van Rusland» (plaksel-afleider vervangen)
- [23]: was «Een oorlog, Een epidemie en Een politieke crisis na beurskrach Wall Street» → nu «Een oorlog» (plaksel-afleider vervangen)
- [25]: was «Hitlers zelfmoord in de bunker of De aanval op Polen» → nu «De landing in Normandië» (plaksel-afleider vervangen)
- [26]: was «Een astronomische ontdekking of Geschiedkundig experiment» → nu «De eerste stoommachine» (plaksel-afleider vervangen)
- [27]: was «laatste beursgenoteerde naamloze vennootschap ter wereld (1602)» → nu «Eerste nationale bank» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [28]: was «Slag in de Mexicaans-Amerikaanse Oorlog als uitzondering» → nu «Slag in de Mexicaans-Amerikaanse Oorlog» (plaksel-afleider vervangen)
- [29]: was «De collaborerende Franse regering onder Pétain in onbezet Noord-Frankrijk» → nu «Een Franse koloniale regering in Algerije» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [30]: was «1870 of 1848» → nu «1870» (plaksel-afleider vervangen)
- [31]: was «Economisch herstel van Oost-Europa om communisme te weren» → nu «Herstel van de Japanse industrie» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [32]: was «Een burgeroorlog in Engeland of Een Russisch-Turks conflict» → nu «Een oorlog tussen Spanje en Portugal» (plaksel-afleider vervangen)
- [33]: was «Een vulkaanuitbarsting die 30-60% van de bevolking doodde en Europa sociaal en economisch transformeerde» → nu «Een grote overstroming» (plaksel-afleider vervangen)
- [34]: was «Een joodse religieuze dag door de nazi's georganiseerde pogrom waarbij Joodse winkels en synagogen werden verwoest» → nu «Een Duits volksfeest» (plaksel-afleider vervangen)
- [35]: was «Alleen Frans, Leidde alleen tot Napoleons oorlogen en Versterkte het absolutisme door heel Europa» → nu «Had alleen invloed op Frankrijk zelf» (plaksel-afleider vervangen)
- [36]: was «Conflict tussen Groot-Brittannië en de Boerenrepublieken in Noord-Afrika» → nu «Een opstand van boeren in Nederland-Indië» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [37]: was «Een handelsoorlog tussen China en Japan of Een rebellie van Chinese boeren» → nu «Een oorlog tussen China en Rusland» (plaksel-afleider vervangen)
- [38]: was «Schafte belastingen af van de Engelse koning ten gunste van de adel» → nu «Gaf de koning meer macht» (plaksel-afleider vervangen)
- [39]: was «Einde Tachtigjarige Oorlog voor Spanje-Republiek» → nu «Einde van de Spaanse Successieoorlog» ('Beide a en d zijn correct' werkt niet als opties geschud worden; nu één eenduidig goed antwoord)
- [39]: was «Beide a en d zijn correct» → nu «Einde van de Dertigjarige én de Tachtigjarige Oorlog» ('Beide a en d zijn correct' werkt niet als opties geschud worden; nu één eenduidig goed antwoord)
- [39]: was «Einde Dertigjarige Oorlog, basis van moderne staatsoevereiniteit» → nu «Begin van de Tachtigjarige Oorlog» ('Beide a en d zijn correct' werkt niet als opties geschud worden; nu één eenduidig goed antwoord)
- [40]: was «autocratie en mensenrechten in Noord-Afrika en het Midden-Oosten» → nu «Meer macht voor het leger» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [41]: was «Alleen economisch, Minimaal en Alleen militair van 100.000+ Joden, Hongerwinter en grote schade» → nu «Minimaal» (plaksel-afleider vervangen)
- [42]: was «Einde van de industriële revolutie van Europa op basis van machtsevenwicht en restauratie» → nu «Oprichting van de Europese Unie» (plaksel-afleider vervangen)
- [43]: was «Een economische hervorming om kapitalistische en traditionele elementen te vernietigen» → nu «Een ruimtevaartprogramma» (plaksel-afleider vervangen)
- [44]: was «Neutrale informatie, Staatsmedia en Nepnieuws om publieke opinie te sturen» → nu «Reclame voor producten» (plaksel-afleider vervangen)
- [45]: was «Een epidemie, Een toevallige ramp en Een oorlogsslachting van Armeniërs (1915-1923) door het Ottomaanse Rijk» → nu «Een epidemie» (plaksel-afleider vervangen)
- [46]: was «Systeem van grensbewaking, muren en prikkeldraad dat West en west-Europa scheidde» → nu «Een verdedigingslinie langs de Franse grens» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [47]: was «Alleen militair aanwezig die Europa hielp herbouwen, NATO oprichtte en de Koude Oorlog leidde» → nu «Neutraal blijven buiten de wereldpolitiek» (plaksel-afleider vervangen)
- [48]: was «Symbool van het begin van de Koude Oorlog en de hereniging van Duitsland» → nu «Begin van de Tweede Wereldoorlog» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [49]: was «Strijd achter gelijke rechten van vrouwen, arbeiders en minderheden» → nu «Strijd voor meer macht van de kerk» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))

#### geschiedenis.klas3 · gecontroleerd 50 · hersteld 46 · verwijderd 0
- [0]: was «Uitvinding elektriciteit of Industriële revolutie» → nu «Een kunststroming uit de middeleeuwen» (plaksel-afleider vervangen)
- [2]: was «Archeologisch onderzoek over historische interpretaties» → nu «Politiek debat in het parlement» (plaksel-afleider vervangen)
- [3]: was «Oprichting VN als uitzondering» → nu «Oprichting VN» (plaksel-afleider vervangen)
- [4]: was «Een encyclopedie of Een recent boek» → nu «Een spreekbeurt over de oudheid» (plaksel-afleider vervangen)
- [5]: was «Isolationisme, Aanvalsbeleid en Vredesverdrag om oorlog te vermijden» → nu «Isolationisme» (plaksel-afleider vervangen)
- [7]: was «Ottomaanse expansie, Westerse expansie en Russische expansie naar oostelijke territoria» → nu «Westerse expansie» (plaksel-afleider vervangen)
- [8]: was «Correcte datering of Historische bron» → nu «Een tijdlijn» (plaksel-afleider vervangen)
- [9]: was «Slag in de Stille Oceaan of D-Day landing» → nu «Slag om Arnhem» (plaksel-afleider vervangen)
- [10]: was «Economische hulp onder bepaalde omstandigheden» → nu «Beleid om Duitsland te verdelen» (plaksel-afleider vervangen; 'Economische hulp' was half goed (Truman-doctrine gaf ook economische steun))
- [11]: was «Braziliaans industrialisatieplan of Sovjet-ruimteprogramma» → nu «Een Japans spoorwegplan» (plaksel-afleider vervangen)
- [12]: was «Vredesverdrag na WO1 onder bepaalde omstandigheden» → nu «Vredesverdrag na WO1» (plaksel-afleider vervangen)
- [13]: was «Imperialisme of Kolonialisme» → nu «Migratie» (plaksel-afleider vervangen)
- [14]: was «Militair plan WO2 om Duitsland herstelbetalingen WO1 te laten betalen» → nu «Plan voor de wederopbouw na WO2» (plaksel-afleider vervangen)
- [15]: was «Nationalistisch China of Keizerlijk China» → nu «Japans bezet China» (plaksel-afleider vervangen)
- [16]: was «Vulkaanramp of Hongersnood» → nu «Een overstroming» (plaksel-afleider vervangen)
- [17]: was «Politieke organisatie of Wetenschapsinstituut» → nu «Militaire school» (plaksel-afleider vervangen)
- [18]: was «Biografisch onderzoek of Economische analyse» → nu «Bronnenkritiek» (plaksel-afleider vervangen)
- [19]: was «Honderdjarige Oorlog onder bepaalde omstandigheden» → nu «Honderdjarige Oorlog» (plaksel-afleider vervangen)
- [21]: was «Ondersteunde de koning door gebrek aan politieke macht en economische nood» → nu «Steunde de adel» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [22]: was «Militaire alliantie van Europese machtsbalans en diplomatie na Napoleon» → nu «Een Europees muziekfestival» (plaksel-afleider vervangen)
- [23]: was «Japanse invasie, Russisch-Chinese oorlog en Boerenopstand in China tegen buitenlandse invloed» → nu «Japanse invasie» (plaksel-afleider vervangen; 'Boerenopstand in China' was half goed (Boxers waren vooral boeren))
- [23]: was «Boerenopstand in China» → nu «Opstand in Korea» (plaksel-afleider vervangen; 'Boerenopstand in China' was half goed (Boxers waren vooral boeren))
- [24]: was «Voerde parlementaire democratie in of Schafte de monarchie af» → nu «Gaf alle Engelsen stemrecht» (plaksel-afleider vervangen)
- [25]: was «Het beleid om andere landen te veroveren en te beheersen achter economisch/politiek gewin» → nu «Een land dat zich afsluit van de wereld» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [26]: was «Vertraging van kennisverspreiding van ideeën, bijbels en wetenschappelijke kennis» → nu «Minder mensen leerden lezen» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [27]: was «Een Scandinavisch koninkrijk, Een Oosters keizerrijk en Een Italiaanse stadsstaat dat over meerdere eeuwen grote invloed had» → nu «Een Oosters keizerrijk» (plaksel-afleider vervangen)
- [28]: was «Alleen de moord op Franz Ferdinand van nationalisme, allianties, imperialisme en de moord op Franz Ferdinand» → nu «Een conflict over kolonies in Amerika» (plaksel-afleider vervangen)
- [29]: was «functionalisten: het groeide door bureaucratische dynamiek; Intentionalisten: Hitler had het altijd gepland» → nu «Een debat over wie de oorlog won» (tweede (half) goede optie (omgedraaide kopie))
- [30]: was «Enorme rijkdom achter Europese handelshuizen, banken en koloniale mogendheden» → nu «Geen enkel effect» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [31]: was «Een koloniale overeenkomst met Turkije om het Midden-Oosten na WO1 te verdelen» → nu «Een handelsverdrag met Rusland» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [32]: was «Luthers geschriften konden massaal worden verspreid, wat de verlichting versnelde» → nu «Luther verbood het drukken van zijn teksten» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [33]: was «Geschiedenis van voormalige kolonies die koloniale perspectieven deconstrueert en andere stemmen centraal stelt» → nu «Geschiedenis zonder bronnen» (plaksel-afleider vervangen)
- [34]: was «Democratisering van Duitsland van Duitsland → economische crisis → opkomst van het nationaal-socialisme» → nu «Herstel van de Duitse keizer» (plaksel-afleider vervangen)
- [35]: was «Mondelinge overlevering» → nu «Geschiedenis uit oude boeken» (plaksel-afleider vervangen; 'Mondelinge overlevering' was half goed)
- [35]: was «Prehistorische geschiedenis van getuigenissen en interviews als historische bron» → nu «Geschiedenis van muziek» (plaksel-afleider vervangen; 'Mondelinge overlevering' was half goed)
- [36]: was «Symbool van het einde van het einde van apartheid en transitie naar democratie» → nu «Begin van de apartheid» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [37]: was «Een religieuze oorlog, WO3 en Een economisch conflict met genocide in Bosnië en Kosovo» → nu «Een Derde Wereldoorlog» (plaksel-afleider vervangen)
- [38]: was «Politieke geschiedenis centraal, Militaire geschiedenis en Biografische benadering op langetermijnstructuren, geografie en dagelijks leven» → nu «Militaire geschiedenis» (plaksel-afleider vervangen)
- [39]: was «Einde van de Koude Oorlog van ontspanning tussen VS en USSR in de jaren 1970» → nu «Een nieuwe wapenwedloop» (plaksel-afleider vervangen)
- [40]: was «Economisch beleid, Militaire regels en Religieuze wetgeving van Joden uit het Duitse staatsburgerschap en sociale leven» → nu «Militaire regels» (plaksel-afleider vervangen)
- [41]: was «Een anti-oorlogs verhaal dat Duitsland WO1 verloor door verraad van socialisten en Joden aan het thuisfront» → nu «Een spionageverhaal» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [42]: was «VS en USSR steunden rivaliserende bevrijdingsbewegingen achter eigen invloed» → nu «Dekolonisatie stopte volledig» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [43]: was «Calvinisme ondersteunde Spanje, Religie speelde geen rol en Geen relatie aan de katholieke Spaanse Habsburgers» → nu «Geen relatie» (plaksel-afleider vervangen)
- [44]: was «Het besef dat mensen gevormd worden door het toekomende en dat het verleden anders was» → nu «Het onthouden van jaartallen» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [45]: was «Versterking van het feodalisme van Arabische kennis, handel en goederen → bijdrage aan de Renaissance» → nu «Einde van de handel met Azië» (plaksel-afleider vervangen)
- [46]: was «De Amerikaanse onafhankelijkheid, Een burgeroorlog en Een Franse revolutie naar constitutionele monarchie in Engeland» → nu «Een burgeroorlog» (plaksel-afleider vervangen)
- [47]: was «Einde van de Italiaanse Oorlogen dat de hugenoten godsdienstvrijheid gaf in Frankrijk» → nu «Verdrijving van alle protestanten» (plaksel-afleider vervangen)
- [49]: was «Verbond west en West via handel, kennisuitwisseling en culturele contacten» → nu «Verbond Amerika en Europa» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))

#### natuur.klas1 · gecontroleerd 50 · hersteld 38 · verwijderd 0
- [0]: was «Een vitamine of Een type cel» → nu «Een eiwit» (plaksel-afleider vervangen)
- [2]: was «neutronen en neutronen» → nu «Protonen en elektronen» (typefout/onzin ('neutronen en neutronen'))
- [3]: was «Een vergelijking onder bepaalde omstandigheden» → nu «Een vergelijking» (plaksel-afleider vervangen)
- [4]: was «Overzicht van geen chemische elementen» → nu «Overzicht van alle planeten» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [5]: was «Eiwitproductie onder bepaalde omstandigheden» → nu «Eiwitproductie» (plaksel-afleider vervangen)
- [10]: was «positief deeltje rond kern» → nu «Lichtdeeltje zonder massa» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [11]: was «Afbreken fructose voor energie» → nu «Opslaan van glucose als zetmeel» (tweede (half) goede optie (fructose afbreken levert ook energie))
- [12]: was «Dichtheid onder bepaalde omstandigheden» → nu «Dichtheid» (plaksel-afleider vervangen)
- [15]: was «Verbinding = één soort atoom onder bepaalde omstandigheden» → nu «Verbinding = één soort atoom» (plaksel-afleider vervangen)
- [16]: was «Zwaartekrachtsveld onder bepaalde omstandigheden» → nu «Zwaartekrachtsveld» (plaksel-afleider vervangen)
- [17]: was «reflectie = terugkaatsing; Brekingsindex = lichtafbuiging in medium» → nu «Brekingsindex = kleur van het licht» (tweede (half) goede optie (omgedraaide kopie))
- [19]: was «Een waterbeweging onder bepaalde omstandigheden» → nu «Een stroming van water» (plaksel-afleider vervangen)
- [21]: was «Een ordening van geen elementen op atoomnummer» → nu «Een ordening van elementen op ontdekkingsjaar» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [23]: was «De frequentie van een golf of De snelheid van een golf» → nu «De hoogte van een golf» (plaksel-afleider vervangen)
- [24]: was «diercel niet; Plantencel heeft celwand, vacuole en chloroplasten» → nu «Diercel heeft chloroplasten» (tweede (half) goede optie (omgedraaide kopie))
- [25]: was «Newton of Joule» → nu «Joule» (plaksel-afleider vervangen)
- [26]: was «Steen aan de oppervlakte of Een bergketen» → nu «Een rivierdal» (plaksel-afleider vervangen)
- [27]: was «Zuren geven H⁺-radicalen af; basen nemen H⁺ op of geven OH⁻ af» → nu «Zuren nemen elektronen op; basen geven elektronen af» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [28]: was «Perfect isolator dat onder bepaalde omstandigheden stroom geleidt» → nu «Een supergeleider zonder weerstand» (plaksel-afleider vervangen)
- [29]: was «Energie opslaan en doorgeven achter celprocessen» → nu «Zuurstof vervoeren door het bloed» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [30]: was «Gratis voordelen van ecosystemen achter de mens (schone lucht, water, bestuiving)» → nu «Een dienst die natuurgebieden schoonmaakt» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [31]: was «Windenergie, Kernenergie en Een hernieuwbare energiebron dat miljoenen jaren geleden leefde» → nu «Windenergie» (plaksel-afleider vervangen)
- [32]: was «lucht en opgeloste stoffen opslaan en de cel stevig houden» → nu «Energie opwekken uit glucose» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [33]: was «Wanneer producten gelijk zijn aan reactanten, Een gestopte reactie en Wanneer een reactie klaar is is aan de teruggaande reactie» → nu «Een gestopte reactie» (plaksel-afleider vervangen)
- [34]: was «Een lichaamscel, Een stamcel en Een bloedcel met de helft van het chromosoomaantal» → nu «Een stamcel» (plaksel-afleider vervangen)
- [35]: was «Een geluidsspectrum van elektromagnetische straling van radiogolven tot gammastraling» → nu «Een reeks radiozenders» (plaksel-afleider vervangen)
- [36]: was «Het uiterlijk van een organisme als begrip in de taalkunde» → nu «Het aantal cellen van een organisme» (onzin-afleider ('als begrip in de taalkunde'))
- [37]: was «Een chemische verbinding van metalen door chemische reactie met de omgeving (roesten)» → nu «Het smelten van metalen» (plaksel-afleider vervangen)
- [39]: was «Warmte produceren, Bacteriën doden en Voedsel opslaan die opgenomen kunnen worden» → nu «Bacteriën doden» (plaksel-afleider vervangen)
- [40]: was «Elektrische lading van een elektrische stroom door een veranderend magneetveld» → nu «Een soort isolatiemateriaal» (plaksel-afleider vervangen)
- [41]: was «Het aardmagneetveld van gassen rondom de aarde (troposfeer, stratosfeer, etc.)» → nu «De ozonlaag alleen» (plaksel-afleider vervangen)
- [42]: was «Een afkorting die de soorten en aantallen moleculen in een molecuul weergeeft» → nu «Een lijst met smeltpunten van stoffen» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [44]: was «Een spier, Een inwendig skelet en Een orgaan van het lichaam» → nu «Een spier» (plaksel-afleider vervangen)
- [45]: was «Zwaartekracht, F=ma en Energiebehoud heeft een even grote maar tegengestelde reactiekracht» → nu «F = m × a» (plaksel-afleider vervangen)
- [46]: was «Een chemische reactie met verschillende eigenschappen van elkaar scheiden (filtreren, destilleren)» → nu «Twee stoffen samenvoegen» (plaksel-afleider vervangen)
- [47]: was «Hernieuwbaar = steenkool wordt voortdurend aangevuld (zon, wind). Niet-hernieuwbaar: raakt op (fossiel)» → nu «Hernieuwbaar: alles wat je kunt verbranden» (plaksel-afleider vervangen)
- [48]: was «Een bacterie, Een virus en Een schimmel dat niet plant, dier of schimmel is» → nu «Een virus» (plaksel-afleider vervangen)
- [49]: was «Bacteriën zijn levende weefsels; virussen zijn niet-levend en hebben een gastheercel nodig om zich te vermenigvuldigen» → nu «Virussen zijn levende cellen; bacteriën niet» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))

#### natuur.klas3 · gecontroleerd 50 · hersteld 45 · verwijderd 0
- [1]: was «Energie ontstaat uit niets of Energie neemt toe» → nu «Energie neemt altijd toe» (plaksel-afleider vervangen)
- [2]: was «Reductiedeling achter geslachtscellen» → nu «Celdeling van bacteriën» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [3]: was «Stukje rna dat codeert voor een eiwit» → nu «Een stukje celwand» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [4]: was «Hormoonproductie onder bepaalde omstandigheden» → nu «Hormoonproductie» (plaksel-afleider vervangen)
- [5]: was «Stof die reactie remt onder bepaalde omstandigheden» → nu «Stof die reactie remt» (plaksel-afleider vervangen)
- [7]: was «Een chromosoom of Een eiwit» → nu «Een celkern» (plaksel-afleider vervangen)
- [8]: was «Een elektron in de praktijk» → nu «Een elektron» (plaksel-afleider vervangen)
- [9]: was «Selectieve doorgang van lucht door membraan» → nu «Actief transport met energie» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [10]: was «Energie beschikbaar achter nuttig werk» → nu «Warmte-energie» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [11]: was «mRNA gemaakt op basis van rna-template» → nu «Een eiwit» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [12]: was «Licht dat wordt uitgezonden of Kleurspectrumanalyse» → nu «Een kleurstof» (plaksel-afleider vervangen)
- [13]: was «Relativiteitstheorie onder bepaalde omstandigheden» → nu «Relativiteitstheorie» (plaksel-afleider vervangen)
- [14]: was «Druk-volume relatie onder bepaalde omstandigheden» → nu «Druk-volume relatie» (plaksel-afleider vervangen)
- [16]: was «Spontane chemische reactie of Batterijwerking» → nu «Smelten van metalen» (plaksel-afleider vervangen)
- [17]: was «Tijd om 100% radioactief te vervallen of Vervallingsenergie» → nu «Tijd tot de straling verdubbelt» (plaksel-afleider vervangen)
- [18]: was «rna-overdracht via virus of vectoren» → nu «Overdracht van eiwitten tussen cellen» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [19]: was «Reflectie van geluid van frequentie door beweging bron/ontvanger» → nu «Afbuiging van licht door een lens» (plaksel-afleider vervangen)
- [20]: was «Een DNA-streng onder bepaalde omstandigheden» → nu «Een DNA-streng» (plaksel-afleider vervangen)
- [21]: was «pH = log([HA]/[A⁻]) of pH = -log[H⁺] + pOH» → nu «pH = pKa × [A⁻]/[HA]» (plaksel-afleider vervangen)
- [22]: was «SN2: één stap, backside attack; SN1: twee stappen, carbokation-tussenproduct» → nu «SN1 en SN2 verlopen allebei in één stap» (tweede (half) goede optie (omgedraaide kopie))
- [23]: was «Cl⁻ veroorzaakt depolarisatie, K⁺ stroomt naar binnen en Na⁺ stroomt naar buiten naar binnen (depolarisatie) dan K⁺ naar buiten (repolarisatie)» → nu «K⁺ stroomt naar binnen» (plaksel-afleider vervangen)
- [25]: was «Een eiwit dat rna-transcriptie reguleert door aan promotors te binden» → nu «Een eiwit dat aminozuren aan elkaar koppelt» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [26]: was «Een gat in de atmosfeer met zulke sterke zwaartekracht dat zelfs licht niet kan ontsnappen» → nu «Een leeg gebied tussen sterrenstelsels» (plaksel-afleider vervangen)
- [27]: was «Thermodynamische entropie of Klassieke baanbeweging» → nu «Elektrische weerstand» (plaksel-afleider vervangen)
- [28]: was «Een genbewerkingstechniek die rna gericht knipt en aanpast» → nu «Een vaccin tegen virussen» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [29]: was «Aeroob: met waterstof, veel ATP. Anaeroob: zonder zuurstof, weinig ATP.» → nu «Aeroob en anaeroob leveren evenveel ATP» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [30]: was «Elektronen clusteren in de kern als onderdeel van de grammaticale analyse» → nu «Elektronen clusteren in de kern» (onzin-staart ('als onderdeel van de grammaticale analyse'))
- [31]: was «Celbeschadiging of Celdeling» → nu «Celgroei» (plaksel-afleider vervangen)
- [32]: was «Zuur-base titratie, Precipitatie-reactie en Zoutvorming om concentratie te bepalen» → nu «Zoutvorming» (plaksel-afleider vervangen)
- [33]: was «De maximale depolarisatie waarbij een actie-potentiaal onvermijdelijk ontstaat» → nu «De rustpotentiaal» (plaksel-afleider vervangen)
- [34]: was «Activeringsenergie-principe, Wet van massawerking en Hoe concentratie pH beïnvloedt om een verandering te compenseren» → nu «Wet van massawerking» (plaksel-afleider vervangen)
- [35]: was «Een RNA-virus dat zijn RNA omzet in rna via reverse transcriptase» → nu «Een RNA-virus dat alleen planten besmet» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [36]: was «beta: elektron/positron; gamma: elektromagnetische straling; Alfa: heliumkern» → nu «Alle drie zijn elektromagnetische straling» (tweede (half) goede optie (zelfde inhoud in andere volgorde))
- [37]: was «Een activator dat de enzymwerking vermindert of blokkeert» → nu «Een co-enzym» (plaksel-afleider vervangen)
- [38]: was «F = GMm/r² of F = qvB» → nu «F = m × a» (plaksel-afleider vervangen)
- [39]: was «Verandering in genexpressie zonder rna-sequentie te wijzigen» → nu «Een virus dat genen inbouwt» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [41]: was «Een reeks van drie basen in mRNA die achter een aminozuur coderen» → nu «Een stuk DNA dat niet codeert» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [42]: was «Celbewegingen aansturen of Eiwitten aanmaken» → nu «Vet opslaan» (plaksel-afleider vervangen)
- [43]: was «E = IR, P = I²R en F = BIL is evenredig met de veranderingssnelheid van de magnetische flux» → nu «E = I × R» (plaksel-afleider vervangen)
- [44]: was «Een reeks verbindingen die elk één CH₂-groep minder hebben dan de vorige» → nu «Een reeks verbindingen met dezelfde molecuulformule» (tweede (half) goede optie ('één CH₂ minder' is ook juist))
- [45]: was «Een genregulatiesysteem in E. coli achter lactosemetabolisme» → nu «Een gen dat lactose aanmaakt» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [46]: was «Deeltjes zijn golfachtig van een deeltje kunnen niet tegelijk exact bekend zijn» → nu «Licht bestaat uit deeltjes» (plaksel-afleider vervangen)
- [47]: was «Een hormoon in het bloed, Een elektrisch signaal en Een zenuwcel die signalen overdraagt tussen neuronen» → nu «Een zenuwcel» (plaksel-afleider vervangen)
- [48]: was «Een maat achter de wanorde of het aantal micro-toestanden van een systeem» → nu «De temperatuur van een systeem» (afleider was bijna-kopie van het goede antwoord (verraadt het antwoord))
- [49]: was «Het membraan is alleen voor water, Het membraan is ondoorlaatbaar en Het membraan laat alles door van grootte, lading en vetoplosbaarheid» → nu «Het membraan laat alles door» (plaksel-afleider vervangen)

#### maatschappijleer.klas1 · gecontroleerd 50 · hersteld 47 · verwijderd 0
- [0]: optie 1: was «Een politieke stroming of Een Europees verdrag» → nu «Een verbond van drie politieke partijen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [1]: optie 1: was «Hetzelfde als democratie waarbij overheid en burgers aan rechtsregels gebonden zijn» → nu «Staat waarin alleen burgers aan de wet gebonden zijn» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [2]: optie 4: was «Belasting betalen onder bepaalde omstandigheden» → nu «Belasting betalen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [3]: optie 1: was «Rechten voor politici onder bepaalde omstandigheden» → nu «Rechten voor politici» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [4]: optie 4: was «Een partijprogramma, Een beleidsnota en Een wet van ideeën over de gewenste samenleving» → nu «Een verkiezingsuitslag» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [5]: optie 2: was «informeel = ongeschreven gedragsregels; Formeel = wettelijk vastgelegd» → nu «Er is geen verschil; beide zijn wetten» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [6]: optie 3: was «Een socialistische staat onder bepaalde omstandigheden» → nu «Een socialistische staat» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [8]: optie 1: was «De wet over gemeenten die de staatsinrichting en grondrechten vastlegt» → nu «De wet die alleen de belastingen regelt» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [9]: optie 2: was «Eén cultuur is dominant van meerdere culturen met gelijke erkenning» → nu «Culturen leven strikt gescheiden van elkaar» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [10]: optie 4: was «rechts: vrijheid, markt, traditie; Links: gelijkheid, staatsinmenging» → nu «Links: vrijheid en markt; rechts: gelijkheid en staatsinmenging» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [11]: optie 3: was «Iemand die druk uitoefent op politici achter een belang» → nu «Iemand die namens de regering wetten schrijft» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [12]: optie 1: was «Wetten maken, Propaganda verspreiden en De overheid steunen van macht en publiek debat faciliteren» → nu «Wetten maken» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [13]: optie 1: was «Koning heeft absolute macht onder bepaalde omstandigheden» → nu «Koning heeft absolute macht» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [14]: optie 4: was «Subsidies voor gemeenten, Europese belasting en Centralisatie op het laagst mogelijke niveau» → nu «Alle beslissingen worden in Brussel genomen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [15]: optie 1: was «Een grondwet van instituties en regels waarmee een samenleving wordt bestuurd» → nu «Een verkiezingsuitslag» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [16]: optie 1: was «Het kabinet steunen onder bepaalde omstandigheden» → nu «Het kabinet steunen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [17]: optie 4: was «Gelijkheid voor de wet onder bepaalde omstandigheden» → nu «Gelijkheid voor de wet» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [18]: optie 2: was «Volledig opgaan in een andere cultuur onder bepaalde omstandigheden» → nu «Een eigen staat stichten» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [19]: optie 2: was «Nadruk op vrijheid en markt onder bepaalde omstandigheden» → nu «Nadruk op vrijheid en markt» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [20]: optie 2: was «Globalisme, Internationalisme en Socialisme op het belang en de eigenheid van de eigen natie» → nu «Globalisme» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [21]: optie 2: was «Een presidentieel stelsel waarbij de regering verantwoording aflegt aan het parlement» → nu «Een stelsel zonder gekozen volksvertegenwoordiging» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [22]: optie 4: was «relativisme: elke cultuur op eigen merites beoordelen; Etnocentrisme: eigen cultuur als maatstaf» → nu «Etnocentrisme: alle culturen zijn gelijkwaardig» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [23]: optie 1: was «Het Europese Hof, De Europese ministerraad en Het Europese parlement van de EU» → nu «Het Europese Hof» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [24]: optie 4: was «soft power: culturele aantrekkingskracht en diplomatie; Hard power: militaire/economische dwang» → nu «Er is geen verschil tussen beide» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [25]: optie 3: was «Socialisatie van kinderen waarbij iemand na straf terugkeert in de samenleving» → nu «Gevangenisstraf opleggen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [26]: optie 4: was «Het bedrijfsleven van vrijwillige organisaties tussen overheid en individu (ngo's, kerken, clubs)» → nu «De rechterlijke macht» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [27]: optie 2: was «Een partijprogramma, Een wet en Een politicusprofiel van politieke overtuigingen over hoe de samenleving moet worden ingericht» → nu «Een wet» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [28]: optie 3: was «Descriptief: beschrijft wat is; normatief: schrijft achter wat moet zijn» → nu «Descriptief: geeft een mening; normatief: geeft feiten» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [29]: optie 1: was «Democratie, Technocratie en Aristocratie waarbij één persoon of kleine groep onbeperkte macht heeft» → nu «Democratie» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [30]: optie 2: was «Mensen in gelijke gevallen worden gelijk behandeld, tenzij er reden is achter onderscheid» → nu «Alleen Nederlanders worden gelijk behandeld» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [31]: optie 4: was «Democratie, Corruptie en Anarchie met vaste regels, hiërarchie en procedures» → nu «Anarchie» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [32]: optie 4: was «EU-beleid toepassen, Subsidies verdelen en Belastingheffing in de overheidslaag uitgevoerd» → nu «Belastingheffing» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [33]: optie 3: was «Directe democratie die streeft naar brede overeenstemming en samenwerking» → nu «Dictatuur» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [34]: optie 2: was «juridisch: wat de wet vereist; Moreel: wat je ethisch verplicht bent» → nu «Moreel en juridisch betekenen precies hetzelfde» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [35]: optie 2: was «Staatsgestuurde economie waarbij vraag en aanbod de prijzen bepalen zonder staatsinmenging» → nu «Ruileconomie zonder geld» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [36]: optie 1: was «Een religieuze beweging die rede, vrijheid en gelijkheid centraal stelde» → nu «Een 20e-eeuwse kunststroming» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [38]: optie 2: was «Migranten kiezen bewust te migreren; vluchtelingen zijn gedwongen te vluchten achter gevaar» → nu «Vluchtelingen kiezen bewust; migranten zijn gedwongen te vluchten» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [39]: optie 2: was «Sociale mobiliteit van de samenleving in klassen, status en macht» → nu «Sociale cohesie» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [40]: optie 2: was «Een dictatuur met wetten die zowel democratisch bestuurd wordt als gebonden is aan rechtsregels» → nu «Een staat zonder grondwet» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [42]: optie 3: was «Nationalisme, EU-beleid en Wereldregering om mondiale problemen aan te pakken» → nu «EU-beleid» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [43]: optie 4: was «Actief: stemmen; passief: je kandidaat stellen achter een verkiezingsfunctie» → nu «Actief: lid zijn van een partij; passief: niet stemmen» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [44]: optie 3: was «Een Europees verdrag van fundamentele rechtsregels van een staat (grondwet)» → nu «Een regeringsverklaring» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [45]: optie 2: was «politiestaat: willekeurig optreden van de overheid; Rechtsstaat: iedereen gebonden aan wet» → nu «Er is geen verschil tussen beide» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [46]: optie 4: was «Werktijden verdelen onder bepaalde omstandigheden» → nu «Werktijden verdelen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [47]: optie 4: was «Formeel: gelijke regels achter iedereen; materieel: gelijke kansen en uitkomsten» → nu «Formeel: gelijke uitkomsten; materieel: gelijke regels» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [48]: optie 2: was «Een bestuursvorm, Een economisch systeem en Een waterbeheersmodel tussen overheid, werkgevers en vakbonden» → nu «Een landbouwbeleid» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [49]: optie 3: was «Dictatuur: absolute macht één persoon; autoritair: beperkt pluralisme maar alle totale controle» → nu «Dictatuur: gekozen leider; autoritair: geen leider» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider; uitleg ging over totalitair i.p.v. dictatuur)
- [49]: uitleg: was «Een totalitair regime (Stalin, Hitler): controle over alle levenssferen. Autoritair (bv. Spanje Franco): gedogen van een privésfeer.» → nu «Dictatuur: één persoon met absolute macht. Autoritair regime (bv. Spanje onder Franco): beperkt pluralisme en een gedoogde privésfeer, geen totale controle.» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider; uitleg ging over totalitair i.p.v. dictatuur)

#### maatschappijleer.klas3 · gecontroleerd 50 · hersteld 48 · verwijderd 0
- [0]: optie 3: was «Eén macht in drie kamers van machten: parlement, kabinet, rechter onafhankelijk» → nu «Alle macht ligt bij de koning» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [1]: optie 2: was «Sociale zekerheid, Rousseau's theorie en Arbeidsovereenkomst van onwetendheid'» → nu «Sociale zekerheid» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [2]: optie 2: was «Tekort aan parlementsleden onder bepaalde omstandigheden» → nu «Tekort aan parlementsleden» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [3]: optie 3: was «Representatieve democratie onder bepaalde omstandigheden» → nu «Representatieve democratie» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [4]: optie 4: was «Negatief = vrijheid van inmenging; negatief = vrijheid om iets te kunnen» → nu «Negatief = vrijheid om iets te kunnen; positief = vrijheid van inmenging» (typefout (2× negatief) — afleider eenduidig fout gemaakt)
- [5]: optie 1: was «Democratie via technologie onder bepaalde omstandigheden» → nu «Democratie via technologie» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [6]: optie 2: was «materieel = ook inhoud rechtvaardig; Formeel = regels gevolgd» → nu «Formeel en materieel betekenen hetzelfde» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [7]: optie 1: was «Politiek systeem van samenleving in religieuze/ideologische blokken» → nu «Een economisch stelsel» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [8]: optie 1: was «Socialisme, Democratie en Nationalisme op 'het volk' tegenover 'de elite'» → nu «Socialisme» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [9]: optie 2: was «Eenheidsstaat met gedecentraliseerde deelstaten met eigen bevoegdheden» → nu «Een stadstaat» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [10]: optie 2: was «Financiële controle onder bepaalde omstandigheden» → nu «Financiële controle» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [11]: optie 2: was «integratie = meedoen mét eigen identiteit; Assimilatie = eigen cultuur opgeven» → nu «Assimilatie = eigen cultuur behouden; integratie = cultuur opgeven» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [12]: optie 3: was «Feesten en tradities, Media en Kunst over politiek in een samenleving» → nu «Media» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [13]: optie 2: was «De media, De overheid en Het bedrijfsleven tussen overheid en individu (vakbonden, ngo's, kerk)» → nu «De media» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [14]: optie 3: was «Grondrecht tussen burger en staat onder bepaalde omstandigheden» → nu «Grondrecht dat alleen tussen burger en staat geldt» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [15]: optie 2: was «Een politiek systeem onder bepaalde omstandigheden» → nu «Een politiek systeem» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [16]: optie 2: was «Internationaal recht van een staat binnen zijn eigen grenzen» → nu «Het recht van de VN om in te grijpen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [17]: optie 2: was «Politieke betrokkenheid van politici en het politieke systeem» → nu «Politiek optimisme» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [18]: optie 4: was «Een rechtsfilosoof die moraal combineert met recht of Iemand die voor rechtvaardigheid strijdt» → nu «Iemand die alleen ongeschreven gewoonterecht erkent» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [19]: optie 2: was «democratie = volksbestuur — kunnen samengaan; Rechtsstaat = gebonden aan rechtsregels» → nu «Rechtsstaat en democratie betekenen precies hetzelfde» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [20]: optie 1: was «Discriminatie door individuen in de moderne taal- en letterkunde» → nu «Discriminatie door één persoon» (corrupte afleider (los tekstfragment))
- [22]: optie 2: was «Actieve politieke deelname onder bepaalde omstandigheden» → nu «Actieve politieke deelname» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [23]: optie 3: was «socialisme: gelijkheid en collectiviteit; Liberalisme: individuele vrijheid en markt centraal» → nu «Socialisme: individuele vrijheid en markt; liberalisme: gelijkheid» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [24]: optie 1: was «Bedrijven, Deel van de overheid en Politieke partijen die maatschappelijke doelen nastreven (Amnesty, Rode Kruis)» → nu «Bedrijven» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [25]: optie 1: was «Universeel: achter iedereen altijd; relatief: afhankelijk van cultuur/context» → nu «Universeel: alleen in oorlogstijd; relatief: alleen in vredestijd» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [26]: optie 3: was «Een dagboek van een politicus van onderwerpen waaraan een regering of politieke organisatie prioriteit geeft» → nu «Een kieslijst» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [27]: optie 1: was «Hetzelfde, Communitarisme = individualisme en Liberalisme: gemeenschap centraal boven individuele vrijheid» → nu «Hetzelfde als liberalisme» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [28]: optie 4: was «Een Amerikaans principe dat niet voor Europa geldt of Een letterlijke muur» → nu «Een Europese wet over religie» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [29]: optie 1: was «civielrechtelijk: partijen claimen van elkaar; Strafrechtelijk: staat vervolgt wegens strafbaar feit» → nu «Strafrechtelijk en civielrechtelijk zijn hetzelfde» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [30]: optie 3: was «Klassiek liberalisme, Sociaal-democratie en Socialisme die de vrije markt, deregulering en beperkte overheid centraal stelt» → nu «Socialisme» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [31]: optie 2: was «confederatie: soevereine staten werken vrijwillig samen; Federatie: sterke centrale staat» → nu «Federatie en confederatie zijn hetzelfde» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [32]: optie 2: was «Partijsplitsing van wisselend stemgedrag van kiezers tussen partijen over tijd» → nu «Het aantal partijen in het parlement» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [33]: optie 3: was «Conservatisme, Socialisme en Anarchisme die maximale individuele vrijheid en minimale staatsinmenging bepleit» → nu «Socialisme» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [34]: optie 3: was «Democratisch mandaat, Legaliteit en Wettelijkheid dat het gezag het recht heeft te regeren» → nu «Legaliteit» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [35]: optie 2: was «Een wiskundige vergelijking dat collectieve voorkeuren bij meerderheidsstemming cyclisch/inconsistent kunnen zijn» → nu «Een stemmethode met loting» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [36]: optie 1: was «Een coup, Burgeroorlog en Staatsfaillissement van democratische normen en rechtsstaatwaarborgen door gekozen leiders» → nu «Een staatsgreep» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [37]: optie 1: was «Cultureel kapitaal, Economisch kapitaal en Menselijk kapitaal van wederkerigheid in een gemeenschap die samenwerking bevorderen» → nu «Cultureel kapitaal» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [38]: optie 4: was «Biologie van geslacht, Seksualiteitskunde en Vrouwenstudies dat gender als sociaal construct analyseert» → nu «Medisch onderzoek naar hormonen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [39]: optie 4: was «Modernisme, Liberalisme en Realisme die grote verhalen en objectieve waarheden in twijfel trekt» → nu «Realisme» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [40]: optie 3: was «Collectief bezit werkt altijd dat gemeenschappelijke goederen worden overgebruikt door individueel eigenbelang» → nu «Gedeelde grond levert altijd de hoogste opbrengst» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [41]: optie 1: was «Politiek voor burgers op de belangen van specifieke groepen op basis van gedeelde identiteit» → nu «Politiek die alleen over buitenlands beleid gaat» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [42]: optie 2: was «Een raam in het parlement dat politiek acceptabel wordt geacht door het grote publiek» → nu «Een verkiezingsprognose» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [43]: optie 3: was «Liberale theorie, Constructivisme en Idealisme dat staten in een anarchistisch systeem streven naar veiligheid via machtsbalans» → nu «Idealisme» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [44]: optie 2: was «Materialisme dat internationale normen, identiteiten en structuren sociaal geconstrueerd zijn» → nu «Realisme» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [46]: optie 1: was «Een staat die zijn basisfuncties niet minder kan vervullen: veiligheid, recht, economie» → nu «Een staat die geen lid is van de VN» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [47]: optie 1: was «Globalisering waarbij voormalige kolonies politieke onafhankelijkheid verwierven (20e eeuw)» → nu «Het stichten van nieuwe koloniën overzee» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [48]: optie 3: was «Militaire strategie waarbij een kwestie als existentiële bedreiging wordt geframed om bijzondere maatregelen te rechtvaardigen» → nu «Een theorie over computerbeveiliging» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [49]: optie 1: was «distributief: eerlijkheid in verdeling van goederen; Commutatief: eerlijkheid in ruil/transacties» → nu «Commutatief en distributief betekenen hetzelfde» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)

#### maatschappijleer.klas4 · gecontroleerd 15 · hersteld 0 · verwijderd 0

#### biologie.klas1 · gecontroleerd 50 · hersteld 41 · verwijderd 0
- [0]: optie 2: was «Eiwitten uitscheiden onder bepaalde omstandigheden» → nu «Eiwitten uitscheiden» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [2]: optie 1: was «Celkern of Celwand» → nu «Celkern» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [4]: optie 4: was «geen levende wezens én hun leefomgeving samen» → nu «Alleen de dieren in een gebied» (corrupte afleider («geen levende wezens …»))
- [5]: vraag: was «Wat produceert de long?» → nu «Welke gaswisseling vindt plaats in de longen?» (vraag 'wat produceert de long' klopt niet met antwoord (long produceert niets; zuurstof-optie misleidend); plaksel-afleider vervangen door één eenduidig foute afleider)
- [5]: optie 2: was «Stikstof» → nu «Zuurstof wordt afgegeven; koolstofdioxide opgenomen» (vraag 'wat produceert de long' klopt niet met antwoord (long produceert niets; zuurstof-optie misleidend); plaksel-afleider vervangen door één eenduidig foute afleider)
- [5]: optie 3: was «Zuurstof» → nu «Stikstof wordt afgegeven; zuurstof opgenomen» (vraag 'wat produceert de long' klopt niet met antwoord (long produceert niets; zuurstof-optie misleidend); plaksel-afleider vervangen door één eenduidig foute afleider)
- [6]: optie 4: was «Dieren die planten eten onder bepaalde omstandigheden» → nu «Dieren die planten eten» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [9]: optie 2: was «Een spijsverteringsorgaan of Een zenuwstelsel» → nu «Een klier die hormonen maakt» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [10]: optie 2: was «Alles wat je eet die het lichaam energie of bouwstoffen levert» → nu «Alleen vitamines» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [11]: optie 4: was «Alleen mechanisch, Alleen chemisch en Via bloedvaten met enzymen)» → nu «Via bloedvaten» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [12]: optie 3: was «Hormonen aanmaken onder bepaalde omstandigheden» → nu «Gal aanmaken» (plaksel; bovendien maken nieren wél hormonen (EPO, renine) → half goed)
- [13]: optie 2: was «geen individuen van dezelfde soort in een gebied» → nu «Eén individu van een soort» (corrupte afleider («geen individuen …»))
- [14]: optie 3: was «Spiercel als uitzondering» → nu «Spiercel» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [15]: optie 4: was «Energie opslaan of Eiwitten maken» → nu «Water opslaan» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [16]: optie 1: was «Concurrentie waarbij beide soorten voordeel hebben» → nu «Predatie» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [17]: vraag: was «Hoe heet de opname van zuurstof door cellen?» → nu «Hoe heet het proces waarbij cellen met zuurstof energie vrijmaken uit glucose?» (dubbelzinnig: opname van zuurstof door cellen gebeurt via diffusie (optie 4); plaksel-afleider vervangen door één eenduidig foute afleider)
- [17]: optie 2: was «Fotosynthese onder bepaalde omstandigheden» → nu «Fotosynthese» (dubbelzinnig: opname van zuurstof door cellen gebeurt via diffusie (optie 4); plaksel-afleider vervangen door één eenduidig foute afleider)
- [18]: optie 2: was «Een koolhydraat onder bepaalde omstandigheden» → nu «Een koolhydraat» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [19]: optie 2: was «Een bewuste handeling, Een hormoon en Een hersenfunctie op een prikkel via het ruggenmerg» → nu «Een hormoon» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [20]: optie 1: was «De lymfeknooppunten van hart en bloedvaten dat bloed door het lichaam pompt» → nu «Het systeem van luchtpijp en longen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [21]: optie 2: was «Stevigheid, beweging, bescherming van systemen en aanmaak bloedcellen» → nu «Opslag van vet en aanmaak van hormonen» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [22]: optie 1: was «Spierweefsel onder bepaalde omstandigheden» → nu «Spierweefsel» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [23]: optie 1: was «Een neurotransmitter onder bepaalde omstandigheden» → nu «Een neurotransmitter» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [24]: optie 4: was «Aeroob = met waterstof, meer ATP; anaeroob = zonder zuurstof, minder ATP en melkzuur» → nu «Er is geen verschil in ATP-opbrengst» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [25]: optie 2: was «Bloed filteren (zoals nieren) onder bepaalde omstandigheden» → nu «Urine produceren» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [26]: optie 2: was «Weefsel dat signalen geleidt of Weefsel dat organen omhult» → nu «Weefsel dat vet opslaat» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [27]: optie 2: was «Zuurstof transporteren onder bepaalde omstandigheden» → nu «Zuurstof transporteren» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [28]: optie 4: was «Actief transport tegen concentratieverval in of Transport via bloedvaten» → nu «Verspreiding van warmte door het bloed» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [29]: optie 1: was «Lever onder bepaalde omstandigheden» → nu «Lever» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [30]: optie 3: was «Beweging van lucht door een semipermeabel membraan naar een hogere opgeloste-stof concentratie» → nu «Beweging van opgeloste stoffen van hoge naar lage concentratie» (corrupte bijna-kopie van het goede antwoord)
- [31]: optie 2: was «waterstof vervoeren via hemoglobine» → nu «Koolhydraten vervoeren naar de spieren» (corrupte bijna-kopie (kleine letter, waterstof))
- [33]: optie 4: was «Hormonen aanmaken voor de groei of Bloed pompen door het lichaam» → nu «Gal produceren voor de vertering» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [34]: optie 3: was «Een bewuste beweging via de grote hersenen waarbij het ruggenmerg de prikkel verwerkt zonder hersenactiviteit» → nu «Een spierkramp door vermoeidheid» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [35]: optie 3: was «Gasuitwisseling tussen water en bloed mogelijk maken» → nu «Hoesten opwekken bij irritatie» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [36]: optie 2: was «Twee spieren die gelijktijdig samentrekken of Een spier en een pees die samenwerken» → nu «Twee botten die door een gewricht verbonden zijn» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [38]: optie 4: was «Insuline om vetten op te slaan of Speeksel met amylase» → nu «Maagzuur om vetten op te lossen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [39]: optie 3: was «geen levende organismen samen met hun niet-levende omgeving als functioneel geheel» → nu «Een groep dieren van dezelfde soort» (corrupte afleider («geen levende organismen …»))
- [40]: optie 3: was «Fotosynthese uitvoeren: lichtenergie omzetten in chemische energie (fructose)» → nu «Eiwitten maken uit aminozuren» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [42]: optie 3: was «Er is geen verschil in genetische variatie tussen de methoden of Aseksueel geeft meer genetische variatie dan seksueel» → nu «Seksueel geeft genetisch identieke nakomelingen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [44]: optie 2: was «Water en zouten opnemen uit verteerd voedsel» → nu «Gal aanmaken voor de vetvertering» (afleider half goed: de dunne darm neemt ook water en zouten op)
- [45]: optie 2: was «Een netwerk van symbioses tussen soorten of Een lijst van voedselkeuzes van mensen» → nu «Een overzicht van alle planten in een gebied» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [46]: optie 1: was «Bacteriën zijn eencellige organismen met eigen stofwisseling; virussen zijn geen weefsels en vermeerderen zich via gastheercellen» → nu «Bacteriën zijn altijd ziekteverwekkers; virussen nooit» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [47]: optie 2: was «lucht en mineralen opnemen uit onverteerd voedsel; ontlasting vormen» → nu «Gal aanmaken en vetten verteren» (corrupte bijna-kopie (kleine letter, «lucht»))
- [49]: optie 4: was «Er is geen functioneel verschil tussen beide strategieën of Endothermen zijn koudbloedig, ectothermen warmbloedig» → nu «Endothermen leven alleen in koude gebieden» (plaksel-afleider vervangen door één eenduidig foute afleider)

#### biologie.klas3 · gecontroleerd 50 · hersteld 49 · verwijderd 0
- [0]: optie 2: was «Mutaties, Crossing-over en Eigenschappen mengen van geslachtscellen» → nu «Mutaties» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [1]: optie 1: was «Een gemuteerd gen dat tot uiting komt ook als er slechts 1 kopie aanwezig is» → nu «Een allel dat alleen tot uiting komt bij twee kopieën» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [2]: optie 1: was «Reductiedeling voor geslachtscellen onder bepaalde omstandigheden» → nu «Reductiedeling voor geslachtscellen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [3]: optie 1: was «Mitose met mutatie die gameten vormt met de helft van het chromosoomaantal» → nu «Celdeling waarbij twee identieke cellen ontstaan» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [4]: optie 2: was «Twee chromosomen met genen achter dezelfde eigenschappen (één van vader, één van moeder)» → nu «De twee helften (chromatiden) van één chromosoom» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [5]: optie 2: was «Aanpassing van individuen van allelefrequenties in een populatie over generaties» → nu «Groei van een organisme tijdens zijn leven» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [6]: optie 2: was «Kweekkeuze door mensen, Mutatie en Toevalsprocessen met voordelige eigenschappen» → nu «Mutatie» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [7]: optie 2: was «Een vitaminesoort, Een lipide en Een hormoon die reacties versnelt» → nu «Een lipide» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [8]: optie 2: was «RNA is enkelstrengs en bevat uracil; rna is dubbelstrengs en bevat thymine» → nu «RNA en DNA hebben precies dezelfde basen» (corrupte afleider (spreekt zichzelf tegen))
- [9]: optie 3: was «Evolutie, Celdeling en Groei van een stabiele inwendige toestand (o.a. temperatuur, bloedsuiker)» → nu «Groei» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [10]: optie 2: was «Bloedsuiker verhogen, Vetafbraak en Groei stimuleren door glucoseopname te stimuleren» → nu «Vetafbraak» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [11]: optie 2: was «Een stukje rna dat codeert voor een eiwit of functie» → nu «Een eiwit in de celkern» (corrupte bijna-kopie (rna i.p.v. DNA))
- [12]: optie 1: was «Een permanente verandering in de rna-volgorde» → nu «Een tijdelijke verandering in de eiwitvorm» (corrupte bijna-kopie (rna i.p.v. DNA))
- [13]: optie 1: was «Sneller, door geheugen-B- en T-weefsels van de eerste infectie» → nu «Sneller, door antibiotica van de eerste infectie» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [14]: optie 3: was «Alleen planten aanwezig waarbij populaties schommelen rond een gemiddelde» → nu «Een ecosysteem zonder roofdieren» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [15]: optie 3: was «Ophoping van giftige stoffen in organismen lager in de voedselketen» → nu «Afbraak van giftige stoffen door bacteriën» (afleider half goed (ophoping in organismen gebeurt op elk niveau))
- [16]: optie 4: was «Eiwitten aanmaken, Afval afbreken en DNA opslaan van de cel)» → nu «DNA opslaan» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [17]: optie 3: was «endotherm = eigen temperatuurregeling; Ectotherm = lichaamstemperatuur afhankelijk van omgeving» → nu «Ectotherm = eigen temperatuurregeling; endotherm = afhankelijk van omgeving» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [18]: optie 4: was «DNA-kopiëren waarbij genetische informatie wordt omgezet in een functioneel product (eiwit)» → nu «Het verwijderen van beschadigde genen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [19]: optie 4: was «De genetische samenstelling van een organisme of Een chromosoom» → nu «Het aantal chromosomen in een cel» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [20]: optie 2: was «Celdeling sturen, ATP aanmaken en DNA kopiëren van mRNA-instructies» → nu «ATP aanmaken» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [21]: optie 3: was «Een reeks van drie basen in mRNA die codeert achter één aminozuur» → nu «Een reeks van drie aminozuren in een eiwit» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [22]: optie 2: was «Een hybride soort van een soort met genetisch onderscheidbare kenmerken» → nu «Een uitgestorven soort» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [23]: optie 2: was «Sensorisch en motorisch alleen in de moderne taal- en letterkunde» → nu «Grote en kleine hersenen» (corrupte afleider (los tekstfragment))
- [24]: optie 1: was «Voordelen die de natuur de mens gratis levert (schoon lucht, lucht, bestuiving)» → nu «Geld dat natuurorganisaties aan de overheid betalen» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [25]: optie 1: was «RNA-pol maakt mRNA (transcriptie); rna-pol kopieert DNA (replicatie)» → nu «Beide maken mRNA tijdens de transcriptie» (corrupte afleider (spreekt zichzelf tegen))
- [27]: optie 3: was «Een eiwit aangemaakt door B-weefsels dat antigenen bindt en neutraliseert» → nu «Een rode bloedcel die zuurstof bindt» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [28]: optie 2: was «B-weefsels en cytotoxische T-cellen activeren en coördineren de immuunrespons» → nu «Ziekteverwekkers direct opeten (fagocytose)» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [29]: optie 1: was «Primair is de eerste reactie op een antigeen; secundair is sneller en sterker door geheugen-weefsels» → nu «Primair is sneller en sterker dan secundair» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [30]: optie 2: was «Een antilichaam dat via injectie passieve immuniteit geeft of Een antibioticum tegen bacteriële infecties» → nu «Een pijnstiller tegen koorts» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [31]: optie 4: was «passief = eigen antilichamen aanmaken na blootstelling; passief = kant-en-klare antilichamen ontvangen» → nu «Actief = antilichamen ontvangen; passief = antilichamen zelf aanmaken» (corrupte afleider (2× passief))
- [32]: optie 2: was «De scheiding van homologe chromosomen naar dochtercellen of De vorming van vier haploïde gameten» → nu «De vorming van vier haploïde gameten» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [33]: optie 1: was «Een type eiwit gecodeerd door DNA of Een mutatie in het DNA-molecuul» → nu «Een mutatie in het DNA-molecuul» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [34]: optie 1: was «De verzameling van geen allelen van alle individuen in een populatie» → nu «Het aantal chromosomen van één cel» (corrupte afleider («geen allelen»))
- [35]: optie 2: was «Migratie van individuen tussen populaties of Gerichte selectie van gunstige allelen» → nu «Ontstaan van nieuwe allelen door straling» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [36]: optie 4: was «fenotype is de waarneembare eigenschap die door genen en omgeving bepaald wordt; Genotype is de genetische samenstelling» → nu «Fenotype wordt alleen door de omgeving bepaald» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [37]: optie 2: was «Een organisme dat via selectief fokken is verbeterd of Een organisme dat door mutatie is veranderd» → nu «Een organisme dat door klonen is ontstaan» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [38]: optie 2: was «RNA-streng synthetiseren complementair aan het rna-template» → nu «Eiwitten afbreken tot aminozuren» (corrupte bijna-kopie (rna-template))
- [39]: optie 1: was «De fusie van twee mRNA-moleculen tot een hybride of De duplicatie van genen op een chromosoom» → nu «Het verwijderen van alle exons uit mRNA» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [40]: optie 1: was «De fusie van twee cellen tot een syncytium of Celdood door extern letsel of gifstoffen» → nu «Celdeling waarbij twee identieke cellen ontstaan» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [41]: optie 3: was «Drie typen volwassen weefsels met dezelfde oorsprong of Drie fases van celdeling na bevruchting» → nu «Drie lagen van de huid bij volwassenen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [42]: optie 2: was «Diffusie van neurotransmitters door een synaps of De absorptie van vitaminen in de dunne darm» → nu «De route van bloed door de grote bloedsomloop» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [43]: optie 2: was «Ongedifferentieerde weefsels die kunnen zelfvernieuwen en uitgroeien tot gespecialiseerde celtypen» → nu «Cellen die uitsluitend in het bloed voorkomen» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [44]: optie 2: was «Soortvorming door geografische isolatie van populaties of Soortvorming door migratie naar een nieuw gebied» → nu «Het uitsterven van een soort door concurrentie» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [45]: optie 1: was «De theorie dat multicellulariteit meerdere malen onafhankelijk is ontstaan of De theorie dat eukaryoten zijn geëvolueerd uit archaeen door fusie» → nu «De theorie dat het leven uit de ruimte afkomstig is» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [46]: optie 2: was «De populatiedichtheid van een soort in een gebied of De geografische locatie waar een soort leeft» → nu «Het aantal nakomelingen per jaar van een soort» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [47]: optie 1: was «Twee soorten kunnen dezelfde niche tijdelijk delen zonder problemen of Predatie elimineert altijd de zwakste concurrent in een ecosysteem» → nu «Twee soorten met dezelfde niche helpen elkaar altijd» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [48]: optie 3: was «Accumulatie van nutriënten in planten; verdunning bij hogere trofische niveaus of Concentratie van CO2 in de atmosfeer door verbrandingsprocessen» → nu «Afbraak van gifstoffen door bacteriën in de bodem» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [49]: optie 1: was «K-strategen groeien snel en produceren veel nakomelingen; r-strategen weinig of K-selectie komt voor in instabiele omgevingen; r-selectie in stabiele» → nu «K- en r-strategen verschillen alleen in lichaamsgrootte» (plaksel-afleider vervangen door één eenduidig foute afleider)

#### biologie.klas4 · gecontroleerd 17 · hersteld 0 · verwijderd 0

#### economie.klas3 · gecontroleerd 50 · hersteld 44 · verwijderd 0
- [0]: optie 1: was «De export minus import van goederen en diensten geproduceerd in een land per jaar» → nu «Het totale vermogen van alle inwoners» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [1]: optie 2: was «Toename van de werkloosheid of Waardestijging van de munt» → nu «Waardestijging van de munt» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [2]: optie 1: was «Bij hogere prijs daalt de gevraagde hoeveelheid; bij lager aanbod daalt de prijs» → nu «Bij hogere prijs stijgt de gevraagde hoeveelheid» (corrupte bijna-kopie van het goede antwoord)
- [3]: optie 3: was «Geplande productie door de overheid of De staat bepaalt alle prijzen» → nu «Ruilhandel zonder geld» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [5]: optie 2: was «Winst na belasting, Loonkosten en Inkoopprijs van grondstoffen/halffabricaten» → nu «Loonkosten» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [6]: optie 3: was «Veel aanbieders op een markt of Vrije concurrentie» → nu «Twee aanbieders die samenwerken» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [8]: optie 1: was «Begrotingen van lidstaten controleren of Handel reguleren» → nu «Belastingen innen voor de EU» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [9]: optie 2: was «Absoluut productievoordeel, Handelsoverschot en Goedkoopste productie met de laagste opportuniteitskosten relatief t.o.v. andere goederen» → nu «Handelsoverschot» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [10]: optie 4: was «Overzicht van geen economische transacties van een land met het buitenland» → nu «Overzicht van de staatsschuld van een land» (corrupte afleider («geen economische transacties»))
- [11]: optie 1: was «Economische groei > 5% onder bepaalde omstandigheden» → nu «Economische groei boven 5%» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [12]: optie 4: was «Hoe sterk aanbieders reageren op prijsverandering of De omvang van de markt» → nu «Hoe sterk het inkomen reageert op belasting» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [14]: optie 3: was «Alleen rekeneenheid in de moderne taal- en letterkunde» → nu «Alleen rekeneenheid» (corrupte afleider (los tekstfragment))
- [15]: optie 1: was «Als de vrije markt alle optimale uitkomst bereikt (bijv. externe effecten, publieke goederen)» → nu «Als de overheid alle prijzen vaststelt» (corrupte afleider («alle optimale uitkomst»))
- [16]: optie 4: was «Buitenlandse investeringen van economische activiteit die bij derden terechtkomen» → nu «Exportsubsidies» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [17]: optie 2: was «Volkomen concurrentie die de markt domineren en elkaars gedrag beïnvloeden» → nu «Monopolistische concurrentie» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [18]: optie 3: was «Nominaal = geldbedrag; reëel = gecorrigeerd achter inflatie (koopkracht)» → nu «Reëel = geldbedrag; nominaal = gecorrigeerd voor inflatie» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [19]: optie 4: was «Hogere kosten bij meer productie of Gelijke kosten ongeacht schaal» → nu «Hogere winst door hogere prijzen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [20]: optie 2: was «Een maatstaf achter prijsveranderingen van een mandje goederen dat consumenten kopen» → nu «Een index van de rentestand» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [21]: optie 4: was «Belastingeffect, Effect van monopolie en Rente-effect tot een grotere totale economische activiteit» → nu «Rente-effect» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [22]: optie 1: was «Micro = individuele spelers; macro = de gehele economie (BBP, werkloosheid, deflatie)» → nu «Micro = de gehele economie; macro = individuele spelers» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [23]: optie 1: was «Export > import: een land verkoopt minder dan het inkoopt uit het buitenland» → nu «Een overschot op de overheidsbegroting» (corrupte afleider (spreekt zichzelf tegen))
- [24]: optie 1: was «ontwikkeling = breder, ook welzijn en gelijkheid; Groei = toename BBP» → nu «Groei en ontwikkeling betekenen hetzelfde» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [26]: optie 2: was «De waarde van het beste alternatief dat je opgeeft achter een keuze» → nu «Kosten die je al gemaakt hebt en niet terugkrijgt» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [27]: optie 4: was «Een overheidsgebouw dat niet-uitsluitbaar en niet-rivaliserend is (bv. defensie, vuurtoren)» → nu «Een product dat alleen de overheid verkoopt» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [28]: optie 1: was «Lage werkloosheid onder bepaalde omstandigheden» → nu «Lage werkloosheid» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [29]: optie 3: was «De totale waarde van geen goederen en diensten geproduceerd in een land in een jaar» → nu «De totale overheidsuitgaven in een jaar» (corrupte afleider («geen goederen»))
- [30]: optie 2: was «De factor waarmee de belastingen moeten stijgen bij hogere overheidsuitgaven of Het aantal keren dat de geldhoeveelheid groeit door bankwezen» → nu «De rente die banken aan de centrale bank betalen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [31]: optie 2: was «structureel door mismatches tussen vraag en aanbod van arbeid; Conjuncturele werkloosheid is tijdelijk door economische neergang» → nu «Conjunctureel ontstaat door technologie; structureel door een recessie» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [32]: optie 3: was «Belastinguitstel via staatsleningen heeft geen effect op consumptie als burgers sparen achter toekomstige belasting» → nu «Staatsleningen verhogen altijd de consumptie» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [33]: optie 4: was «De afruil tussen deflatie en werkloosheid op de korte termijn» → nu «De afruil tussen export en import op de lange termijn» (corrupte bijna-kopie (deflatie i.p.v. inflatie))
- [34]: optie 2: was «Economische effecten van klimaatverandering op exportprijzen die terechtkomen bij derden die niet bij de transactie betrokken zijn» → nu «Belasting die bedrijven in het buitenland betalen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [35]: optie 2: was «Een land kan alle goederen goedkoper produceren dan andere landen of Een land importeert alleen goederen die het zelf niet kan maken» → nu «Een land produceert alleen wat het zelf consumeert» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [37]: optie 3: was «Een maatstaf achter inkomensongelijkheid (0 = volledige gelijkheid, 1 = maximale ongelijkheid)» → nu «Een maatstaf voor de groei van het BBP» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [38]: optie 1: was «De overdracht van inflatie van het ene land naar het andere of De financiering van staatsleningen via de obligatiemarkt» → nu «Het overmaken van geld tussen banken in Europa» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [39]: optie 2: was «Het verschil tussen vraag en aanbod bij gegeven prijs of De minimumprijs waarbij vraag nul wordt» → nu «De maximale prijs die een consument wil betalen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [40]: optie 1: was «Een situatie waarbij alle speler zijn resultaat kan verbeteren door eenzijdig van strategie te veranderen» → nu «Een situatie waarbij spelers altijd samenwerken» (corrupte bijna-kopie («alle speler»))
- [41]: optie 4: was «Monetair beleid van centrale banken om inflatie te beheersen of Overheidsbeleid gericht op deregulering en privatisering» → nu «Beleid om de staatsschuld zo snel mogelijk af te lossen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [42]: optie 1: was «Beleid gericht op vraagstimulering via overheidsuitgaven of De studie van prijsvorming op aanbodzijde van de markt» → nu «Beleid gericht op het verhogen van invoerrechten» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [43]: optie 2: was «Het onvermogen van de overheid om belasting te innen of Een begroting die structureel in tekort is» → nu «Het aftreden van een minister na een fout» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [44]: optie 4: was «Wisselkoers is de prijs van een valuta in een andere valuta; depreciatie maakt export goedkoper achter buitenlanders» → nu «Wisselkoers is de rente op staatsleningen; depreciatie verlaagt de export» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [45]: optie 2: was «Nominaal BBP meet in lopende prijzen; reëel BBP corrigeert achter prijsstijgingen door constante basisprijzen te gebruiken» → nu «Reëel BBP meet in lopende prijzen; nominaal corrigeert voor inflatie» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)
- [47]: optie 1: was «Mededingingsbeleid via anti-kartelmaatregelen of Monetair beleid van de centrale bank» → nu «Beleid om de lonen vast te stellen» (plaksel-afleider vervangen door één eenduidig foute afleider)
- [48]: optie 3: was «Het overzicht van geen economische transacties tussen een land en de rest van de wereld» → nu «Het overzicht van de inkomsten en uitgaven van de overheid» (corrupte afleider («geen economische transacties»))
- [49]: optie 3: was «Wanneer een partij bij een transactie minder informatie heeft dan de andere partij» → nu «Wanneer beide partijen precies evenveel weten» (tweede (bijna-)goede optie (dubbel/omgekeerd/minimaal gewijzigd) vervangen door eenduidig foute afleider)

#### economie.klas4 · gecontroleerd 20 · hersteld 0 · verwijderd 0

#### mens-maatschappij.klas1 · gecontroleerd 10 · hersteld 0 · verwijderd 0

#### mens-maatschappij.klas3 · gecontroleerd 10 · hersteld 0 · verwijderd 0

#### levensbeschouwing.klas1 · gecontroleerd 10 · hersteld 0 · verwijderd 0

#### levensbeschouwing.klas3 · gecontroleerd 10 · hersteld 1 · verwijderd 0
- [6]: uitleg: was «De gouden regel: christendom ('Heb uw naaste lief'), islam, jodendom, hindoeïsme en boeddhisme kennen allemaal een variant hiervan.» → nu «De gouden regel: christendom ('Alles wat je wilt dat de mensen voor jou doen, moet je ook voor hen doen'), islam, jodendom, hindoeïsme en boeddhisme kennen allemaal een variant hiervan.» (feitfout: 'Heb uw naaste lief' is het liefdesgebod, niet de gouden regel (Matteüs 7:12))

#### maw.klas5 · gecontroleerd 10 · hersteld 0 · verwijderd 0

#### maw.klas6 · gecontroleerd 10 · hersteld 0 · verwijderd 0

### Twijfel voor Mark

- natuur.klas3[24] (Nernst-vergelijking): het gemarkeerde antwoord «E = RT/nF × ln([ox]/[red])» mist de term E°; als "beste optie" klopt het, maar strikt is geen enkele optie de volledige vergelijking. Niet gewijzigd.
- aardrijkskunde.klas3[15] (BRICS): opties «Een ontwikkelingsland» en «Een eilandstaat» zijn sinds de uitbreiding (Indonesië, Ethiopië) niet meer zuiver fout, al blijft «Een snel groeiende economie» het beste antwoord. Alleen de uitleg bijgewerkt.
- Algemeen: veel vragen in aardrijkskunde.klas3, geschiedenis.klas3 en natuur.klas3 gaan over universitaire stof (SN1/SN2, Henderson-Hasselbalch, Nernst, Wallerstein, Annales-school). Inhoudelijk kloppen ze, maar ze passen niet bij klas 3. Niet aangepast.
- natuur.klas1[18] (getal van Avogadro) en natuur.klas1[20] (reductie) horen eigenlijk bij scheikunde in de bovenbouw, niet bij klas 1. Inhoudelijk correct.
- biologie.klas3[15]: het goede antwoord («ophoping … hoger in de voedselketen») beschrijft eigenlijk biomagnificatie; bioaccumulatie is ophoping in één organisme. Alleen de half-goede afleider is vervangen, de vraag zelf niet herschreven.
- maatschappijleer.klas4[13]: «strafrechtelijk volwassen vanaf 18» klopt als hoofdregel, maar het adolescentenstrafrecht (16–23 jaar) maakt het genuanceerder. Niet gewijzigd.
- Enkele afleiders zijn een kopie van het goede antwoord met één woord omgedraaid (bv. biologie.klas1[1] «suiker en waterstof», economie.klas3[4] «passief zoeken», economie.klas3[13] «kleiner percentage», economie.klas3[25] «inflatie stijgt», economie.klas3[36] «minder risico», biologie.klas3[26] «toeneemt»). Ze zijn eenduidig fout en daarom blijven staan, maar wel makkelijk door te prikken.

**TOTAAL C: 21 groepen · gecontroleerd 677 · hersteld 492 · verwijderd 0 · twijfel 7**

## Eindtotaal

**TOTAAL: A 74 paden/2000 vragen/235 hersteld/0 verwijderd · B 40 paden/234 vragen/112 hersteld/0 verwijderd · C 21 groepen/677 vragen/492 hersteld/0 verwijderd · samen 2911 vragen, 839 hersteld, 0 verwijderd, 99 twijfelpunten.**

Branch: `audit3/cloud-1`. Laatste inhoudelijke commit vóór dit verslag: `11a0468`. De commit van dit verslag staat erbovenop.
