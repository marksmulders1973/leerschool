# Verslag audit Leesladder 1+2 (begrijpend lezen, printbaar) — 7 okt 2026

Zes nakijkers parallel (één per versie A-F), zelfde strenge lat als audit ronde 3 (docs/audit/VERSLAG-leerpaden-2.md). Coördinator paste de fixlijsten toe met een script (elke zoekstring exact 1x), telde teksten/vragen vóór en ná (L1 45/138, L2 36/129, ongewijzigd), alle `answer` bleven 0, `node --check` + `npm run build` groen.

| | |
|---|---|
| Gecontroleerd | 81 teksten · 267 vragen (100%) |
| Hersteld | 30 — ernst 3: 2 · ernst 2: 13 · ernst 1: 15 |
| Verwijderd | 0 |
| Twijfel voor Mark | 30 (zie per versie) |


---

# Verslag Leesladder versie A
Gecontroleerd: 15 teksten, 46 vragen (alle) — geteld met Node-script; alle `answer: 0`, alle vragen 4 opties.
Hersteld: 4 (ernst 3: 0 · ernst 2: 1 · ernst 1: 3)
Niet gewijzigd maar twijfel: 4

Opmerking: het bestand heeft LF-regeleinden (geen CRLF); alle `zoek`-strings zitten binnen één regel en komen elk exact één keer voor (gecontroleerd met `split(zoek).length-1`).

## Per tekst
- De egel — 2 vragen — ok (5 zinnen; 'daarom'-ketting klopt, uitleg verwijst goed)
- Het ruimtestation — 2 vragen — hersteld: vraag 2, citaat 'Zij doen daar proefjes.' was afgekapt met een punt die niet in zin 3 staat → volledige zin 3 geciteerd (ernst 1)
- De verdwenen boterham — 2 vragen — ok (conclusie afleidbaar uit zin 3 + 4; 'smullen' uit context)
- Fietsband plakken — 2 vragen — hersteld: tekst, 'omhoog komen' → 'omhoogkomen' (ernst 1); vragen ok, 'eerst' staat inderdaad in zin 2
- De oude vuurtoren — 2 vragen — ok (uitleg 'zin 3' klopt; 'omdat'/'toch' staan in zin 5)
- Mieren — 2 vragen — ok (zin 1-3 sterk, zin 4-5 samen; vijftig keer eigen gewicht is een gangbaar cijfer)
- De klimbaan — 3 vragen — ok (9 zinnen; 'maar' staat in zin 3)
- Plastic soep — 3 vragen — ok (9 zinnen; microplastics-uitleg staat in zin 5-6)
- Waarom gapen we? — 3 vragen — ok (9 zinnen; vroeger/nu-contrast klopt)
- Sparen voor de drone — 3 vragen — ok (9 zinnen; rekensom klopt: 20 weken × €3 = €60)
- Winterslaap — 4 vragen — ok (zie twijfel over hartslag)
- De uitvinding van het ijshoorntje — 4 vragen — hersteld: vraag 1 uitleg, "Het woord 'maar toen' markeert" → "De woorden 'maar toen' markeren" (ernst 1); verhaal 1904 / Hamwi klopt met de bekende overlevering
- De nieuwe speeltuin (een mening!) — 4 vragen — ok (zie twijfel vraag 1 en 2)
- De wolf is terug — 5 vragen — ok (1897 en 2015 zijn de gangbare jaartallen; 4 alinea's; 'nooit'-vraag eenduidig)
- Het spreekbeurt-geheim — 5 vragen — hersteld: tekst, 'het slimste dier van de zee' → 'een van de slimste dieren van de zee' (ernst 2, aanvechtbaar feit in vertellersstem); drie harten + kleurverandering kloppen

## Twijfel voor Mark
- Winterslaap, tekst (vraag 0): "in de winterslaap nog maar een paar keer" per minuut — veel bronnen noemen ±20 slagen per minuut voor een egel in winterslaap, andere noemen 2-12. Niet gewijzigd omdat het niet eenduidig fout is; 'een paar keer' is bovendien afleider in vraag 2.
- Fietsband plakken, tekst (vraag 0): in werkelijkheid pomp je de band eerst op voordat je hem in water duwt (anders komen er geen belletjes). Versimpeling, geen echte fout; niet gewijzigd omdat het een 6e zin zou vragen (trede = 5 zinnen).
- De nieuwe speeltuin, vraag 1: het citaat 'Het is de mooiste speeltuin van de stad.' staat niet letterlijk zo in de tekst (wel: "is het meteen de mooiste van de stad"). Het is als bewering gesteld, niet als "in de tekst staat", dus laten staan.
- De nieuwe speeltuin, vraag 2: het goede antwoord is als enige optie met een getal (twaalf meter). Bij een feit/mening-vraag is dat inherent (meetbaar = feit) en de uitleg legt dat juist uit; daarom niet gewijzigd.
- (klein) Het spreekbeurt-geheim, vraag 2: 'Haar maag maakt een salto' is een lichte herschrijving van "maakt haar maag een salto"; als uitdrukking herkenbaar, niet gewijzigd.

## Lengte per trede
- trede 1 (verwacht 5 zinnen per tekst): De egel 5 zinnen/38 w · Het ruimtestation 5/39 · De verdwenen boterham 5/35 · Fietsband plakken 5/39 · De oude vuurtoren 5/46 · Mieren 5/39 — allemaal precies 5 zinnen ✅
- trede 2 (verwacht ± 9 zinnen): De klimbaan 9 zinnen/71 w · Plastic soep 9/67 · Waarom gapen we? 9/83 · Sparen voor de drone 9/100 — allemaal 9 ✅
- trede 3 (verwacht ± 130 woorden): Winterslaap 146 · IJshoorntje 114 · Nieuwe speeltuin 127 — binnen de marge ✅
- trede 4 (verwacht ± 220 woorden, meerdere alinea's): De wolf is terug 219 (4 alinea's) · Het spreekbeurt-geheim 228 (4 alinea's) ✅


---

# Verslag Leesladder versie B
Gecontroleerd: 15 teksten, 46 vragen (alle)
Hersteld: 3 (ernst 3: 1 · ernst 2: 1 · ernst 1: 1)
Niet gewijzigd maar twijfel: 8

Werkwijze: elke tekst eerst als lezer gelezen, daarna elke vraag zelf opgelost zonder naar `answer`/`uitleg` te kijken, dan vergeleken. Alle `answer: 0` ongemoeid gelaten. Zin-verwijzingen ("zin 2", "zin 3", "alinea 1/2/3") nageteld: kloppen allemaal. Feiten nagelopen: bij maakt < 1 theelepel honing (klopt), tandpasta niet naspoelen (klopt), dolfijn slaapt met één hersenhelft (klopt), noorderlicht door zonnedeeltjes (klopt), George Crum 1853 (klopt), noordse stern ~90.000 km (klopt), gierzwaluw slaapt vliegend (klopt), laatste bever 1826 / uitgezet 1988 Biesbosch / ruim 160 jaar (klopt).

## Per tekst
Trede 1
- De sneeuwpop — 2 vragen — ok
- De bijen — 2 vragen — ok (twijfel: afleider "Theelepels")
- Tanden poetsen — 2 vragen — ok
- Het kasteel — 2 vragen — ok ("zin 3" klopt)
- De bibliotheekbus — 2 vragen — ok (twijfel: "de juf van de bus")
- De dolfijn — 2 vragen — ok

Trede 2
- Het zwemdiploma — 3 vragen — ok ("zin 3" klopt; twijfel vraag 2)
- Het noorderlicht — 3 vragen — ok
- Kauwgom — 3 vragen — hersteld: vraag 1 (ernst 2) goede optie was als enige met toelichting tussen haakjes "(chicle)" → haakjes weg
- De moestuin — 3 vragen — ok (twijfel tekst: "pompoenplant zaaien")

Trede 3
- Trekvogels — 4 vragen — ok
- De uitvinding van chips — 4 vragen — ok
- De schoolbieb moet vaker open — 4 vragen — hersteld: tekst (ernst 3) "vier dagen per week op slot" spreekt "twee ochtenden per week open" tegen → "drie dagen"; tekst (ernst 1) "runt" → "beheert"

Trede 4
- De bever is terug — 5 vragen — ok (twijfel: label vraag 2)
- Volgende bal — 5 vragen — ok (twijfel: label vraag 1)

## Twijfel voor Mark
- De bijen, vraag 1: afleider "Theelepels" is erg mager als onderwerp-optie — niet gewijzigd, is wel een tekstwoord en voor trede 1 verdedigbaar.
- De bibliotheekbus, tekst: "De juf van de bus" — een bibliotheekmedewerker is geen juf; "de mevrouw van de bus" zou preciezer zijn. Niet gewijzigd: kindertaal, geen fout.
- Het zwemdiploma, vraag 2: goede optie "er iets onverwachts komt" voor het signaalwoord 'maar'; schoolterm is "tegenstelling" en de uitleg zegt ook "botst met de zin ervoor". Niet gewijzigd: optie is verdedigbaar en de andere drie zijn duidelijk fout.
- Kauwgom, tekst: "dat zij chicle noemden" — 'chicle' is eigenlijk het Azteekse/Nahuatl-woord (tzictli), niet Maya. Niet gewijzigd: gangbare vereenvoudiging in kinderboeken.
- De moestuin, tekst: "Hij zaait er wortels, sla en één pompoenplant" — een plant zaai je niet, je zaait pompoen(zaad). Niet gewijzigd omdat vraag 2 (optie "een pompoenplant") dan mee moet; als Mark wil: tekst "één pompoen" + optie "Wortels, sla en een pompoen".
- De schoolbieb, tekst: "per jaar duizenden woorden extra leren" — Stichting Lezen noemt ~1.000 nieuwe woorden per jaar bij een kwartier per dag; "duizenden" is aan de ruime kant. Niet gewijzigd (het is een betoog met "onderzoekers zeggen").
- De bever is terug, vraag 2: type "standpunt vinden" bij "Waarom zijn natuurliefhebbers blij" — eerder oorzaak & gevolg. Niet gewijzigd: de labels per plek lopen gelijk met versie A (kopregel bestand), dus bewust zo.
- Volgende bal, vraag 1: type "gevoel afleiden" bij "Waarom kan Mo niet slapen?" — eerder oorzaak & gevolg. Zelfde reden niet gewijzigd.

## Lengte per trede
- trede 1 (verwacht 5 zinnen): sneeuwpop 47 w/5 z · bijen 51/5 · tanden 45/5 · kasteel 43/5 · bibliotheekbus 50/5 · dolfijn 46/5 — ok
- trede 2 (verwacht ± 9 zinnen): zwemdiploma 95 w/10 z · noorderlicht 86/8 · kauwgom 92/9 · moestuin 87/10 — ok
- trede 3 (verwacht ± 130 woorden): trekvogels 133 · chips 115 · schoolbieb 117 — chips en schoolbieb iets aan de korte kant, binnen marge
- trede 4 (verwacht ± 220 woorden, meerdere alinea's): bever 207 (4 alinea's) · volgende bal 213 (4 alinea's) — ok


---

# Verslag Leesladder versie C
Gecontroleerd: 15 teksten, 46 vragen (alle)
Hersteld: 5 (ernst 3: 0 · ernst 2: 3 · ernst 1: 2)
Niet gewijzigd maar twijfel: 6

Werkwijze: elke tekst eerst als lezer gelezen, elke vraag zelf opgelost zonder naar `answer`/`uitleg` te kijken, daarna vergeleken. Zinnen geteld bij elke "zin n"-verwijzing; citaten letterlijk teruggezocht; feiten (kerkuil, duikboot, spin, vinvis, kippenvel, regenboog, echolocatie, Tambora 1815 / Von Drais 1817 / trappers ±1867, statiegeld 1 juli 2021 flesjes / 2023 blikjes, 15 cent) nagelopen. Alle `answer: 0`-indexen ongewijzigd; alle `zoek`-strings komen exact één keer in het bestand voor (gecontroleerd met telC.js).

## Per tekst
### Trede 1
- De kerkuil — 2 vragen — ok (zin 4/5-verwijzing klopt, zin 3 klopt)
- De duikboot — 2 vragen — hersteld: vraag 2 citaat was halve zin met punt ('Zij blazen de tanks weer leeg.'), nu de hele zin 4 letterlijk (ernst 1)
- Pannenkoeken bakken — 2 vragen — ok ('eerst' staat in zin 2; 'zodra' in laatste zin)
- De spin — 2 vragen — ok ('want'-zin klopt; staaldraad-vergelijking klopt)
- De vlieger — 2 vragen — ok ('toch' staat in zin 4; oorzaak zin 2, gevolg zin 3)
- De blauwe vinvis — 2 vragen — ok (feiten kloppen: grootste dier ooit, tong zwaarder dan auto, krill in miljoenen per dag)

### Trede 2
- Het toneelstuk — 3 vragen — ok ('maar' in zin 4 = "Maar als hij op de avond zelf…"; geteld)
- Kippenvel — 3 vragen — hersteld: vraag 1 uitleg "de bultjes zijn die aangespannen spiertjes" was feitelijk onjuist (ernst 2); vraag 3 afleider "Kippen krijgen er ook bultjes van" was verdedigbaar uit de tekst (ernst 2); vraag 3 type "woord uit de zin halen" → "detail opzoeken" (ernst 1)
- De regenboog — 3 vragen — ok (nadruk-streepjes áchter/vóór kloppen; dubbele punt in laatste zin klopt)
- Oma's telefoon — 3 vragen — ok

### Trede 3
- Zien met je oren — 4 vragen — ok (gedachtestreepje-verwijzing klopt)
- De eerste fiets — 4 vragen — ok (jaartallen 1815/1817/±50 jaar later kloppen historisch)
- Een huisdier in de klas (een mening!) — 4 vragen — ok

### Trede 4
- Statiegeld op flesjes — 5 vragen — hersteld: vraag 5 citaat 'opruimen niet braaf, maar slim' stond niet letterlijk in de tekst ('gewoon' ontbrak) (ernst 2)
- Vijf minuten per dag — 5 vragen — ok (vijf minuten komt inderdaad drie keer voor; vrijdag-detail klopt)

## Twijfel voor Mark
- De duikboot, tekst/vraag 2: "de bemanning" (enkelvoud) wordt in zin 4 met "zij blazen" (meervoud) aangeduid. Grammaticaal strikt zou het "zij blaast" zijn, maar het verwijswoord-vraagje leunt juist op "zij" → "de bemanning". Niet gewijzigd; lezing door kinderen is goed te volgen.
- De kerkuil, vraag 1: het goede antwoord ("Zijn zachte veren maken bijna geen geluid") is als enige letterlijk uit de tekst en iets langer dan de afleiders. Bij een 5-zinnen-tekst is dat moeilijk te vermijden; niet gewijzigd.
- Zien met je oren, tekst: "Toch ziet hij bijna niets" plus afleider "Waarom vleermuizen slecht zien" versterkt het fabeltje dat vleermuizen bijna blind zijn (de meeste zien redelijk). In het pikkedonker is de zin wel waar. Niet gewijzigd.
- Een huisdier in de klas, vraag 2: afleider "Vissen kijken is rustgevend" wordt in de tekst onderbouwd met een waarneming (de drukste klas wordt kalm). Het onderzoeks-feit (optie 0) is duidelijk sterker, maar een slim kind kan twijfelen. Niet gewijzigd.
- Statiegeld op flesjes, vraag 5: type "thema van het verhaal" bij een informatieve/betogende tekst; in versie A en B staat op dezelfde plek een verhaal, dus het label is daar wel passend. Mogelijk hier "bedoeling van de schrijver". Niet gewijzigd (per-plek-parallel met A/B).
- Vijf minuten per dag, vraag 1: optie 0 zegt "alleen piep- en krasgeluiden", de tekst zegt "vooral". Enige goede antwoord blijft duidelijk; niet gewijzigd.

## Lengte per trede
- trede 1: 49 · 52 · 41 · 53 · 51 · 49 woorden; alle zes teksten precies 5 zinnen (verwacht 5 zinnen) — ok
- trede 2: 112 (10 zinnen) · 111 (9) · 106 (7) · 102 (10) woorden (verwacht ± 9 zinnen) — De regenboog heeft 7 zinnen, iets onder de maat maar qua woorden gelijk aan de rest
- trede 3: 128 · 140 · 110 woorden (verwacht ± 130) — ok
- trede 4: 209 · 203 woorden, 5 resp. 4 alinea's (verwacht ± 220, meerdere alinea's) — ok


---

# Verslag Leesladder versie D
Gecontroleerd: 12 teksten, 43 vragen (alle)
Hersteld: 4 (ernst 3: 0 · ernst 2: 3 · ernst 1: 1)
Niet gewijzigd maar twijfel: 3

Werkwijze: elke tekst eerst als lezer gelezen, daarna elke vraag zelf opgelost
zonder naar `answer`/`uitleg` te kijken, daarna vergeleken. Alle citaten in
vragen en uitleg zijn letterlijk tegen de tekst gelegd; getallen en feiten
(octopus, ruimtepuin, Tambora/Drais, poetsvissen, maanlanding 1969, klittenband,
Mars-signaalvertraging, Elfstedentocht, container) nagelopen. `answer` is overal 0
en is nergens gewijzigd.

## Per tekst
- De meester van de vermomming — 3 vragen — ok (vraag 3: zie twijfel)
- De wissel — 3 vragen — hersteld: vraag 3, citaat niet letterlijk ('Tóch' + 'in de kleedkamer' ontbrak) → ernst 2
- Opruimen in de ruimte — 3 vragen — ok
- Het jaar zonder zomer — 3 vragen — ok
- De wasserette van het rif — 3 vragen — ok
- De nacht dat iedereen omhoog keek — 3 vragen — ok
- Een ergernis om te plakken — 3 vragen — ok
- Bericht van Mars — 4 vragen — ok
- De eerste zet — 4 vragen — hersteld: vraag 3, citaat niet letterlijk ('die middag' ontbrak) → ernst 2
- De tocht die bijna nooit komt — 4 vragen — ok
- De doos die de wereld veranderde — 5 vragen — ok (lengte aan de korte kant, zie onder)
- Het balkon — 5 vragen — hersteld: vraag 4, aangehaalde zin staat niet in de tekst (indirecte rede) → ernst 2; vraag 2, uitleg zei 'drie alinea's terug', het is twee → ernst 1

## Extra controles uit de opdracht
- Valstrik-afleiders die letterlijk in de tekst staan: overal eenduidig fout
  (bijv. 'bewezen' bij de octopus, 'achtentwintigduizend' bij het ruimtepuin,
  'elf/ruim honderd/tweehonderd' bij de Elfstedentocht, 'fel en warm' bij Het
  balkon — zie wel twijfel 2).
- Mening-vs-feit (Elfstedentocht vraag 1, Het balkon vraag 4): de meningsoptie is
  de enige niet-controleerbare uitspraak; de drie afleiders zijn echte feiten.
- Samenvat-vragen (Ergernis 1, Elfstedentocht 4, Balkon 5): precies één optie dekt
  begin, midden en eind; de andere drie zijn losse details.
- WOORDHULP_D: 19 sleutels, allemaal als heel woord aanwezig in precies één
  tekst. Geen enkele sleutel wordt in een vraag bevraagd (het bestand heeft geen
  woordbetekenis-vragen; de signaalwoorden hoewel/toch/desondanks/daarentegen/
  immers/bovendien staan niet in de woordhulp). Woordhulp wordt alleen op
  `tekst` toegepast (LeesladderPage.jsx r. 455), dus 'balen' in de uitleg van
  De eerste zet ('hoort bij balen') krijgt géén verkeerde stippellijn. Geen fout.

## Twijfel voor Mark
- De meester van de vermomming, vraag 3: de uitleg zegt dat kleurenblindheid
  "al blijkt uit onderzoek", maar de tekst zegt "waarschijnlijk kleurenblind".
  Het antwoord (het vermoeden over de huid) blijft het enige juiste, want 'dat'
  wijst naar de zin ervóór — daarom niet gewijzigd. Eventueel in de uitleg
  "blijkt al 'uit onderzoek'" → "noemt de tekst al 'waarschijnlijk' op grond van onderzoek".
- Het balkon, vraag 3: afleider 'Het podiumlicht was fel en warm' staat letterlijk
  in de tekst en is fysiek niet helemaal onzinnig (warm licht kan handen warm
  maken). Het verhaal legt de koude vingers duidelijk uit als zenuwen en de uitleg
  benoemt de valstrik expliciet; naar mijn oordeel verdedigbaar als bewuste
  valstrik, maar een slimme leerling kan protesteren. Niet gewijzigd.
- Het balkon, vraag 4 (na de fix): doordat het citaat nu 'beweert' bevat, hint de
  vraag iets sterker richting 'mening'. De kern (feit = na te kijken, mening = niet)
  blijft overeind; wil je het minder hintend, dan kan 'beweert' vervangen worden
  door een vraag zonder citaat.

## Lengte per trede
- trede 1 (verwacht ±8 zinnen): octopus 8 zinnen/107 w · wissel 9/126 · ruimte 8/130 · jaar zonder zomer 8/129 — ok
- trede 2 (verwacht ±150 woorden): wasserette 146 · maanlanding 144 · klittenband 148 — ok
- trede 3 (verwacht ±230 woorden): Mars 217 · eerste zet 206 · Elfstedentocht 227 — ok (eerste zet iets kort)
- trede 4 (verwacht ±330 woorden; commentaar in bestand zegt ±320-350): container 290 · balkon 314 — container ~40 woorden onder de maat; alleen gemeld, niet herschreven


---

# Verslag Leesladder versie E
Gecontroleerd: 12 teksten, 43 vragen (alle)
Hersteld: 7 (ernst 3: 1 · ernst 2: 1 · ernst 1: 5)
Niet gewijzigd maar twijfel: 5

Werkwijze: elke tekst eerst als lezer gelezen, elke vraag zelf opgelost vóór het kijken naar `answer`/`uitleg`; alle `answer`-velden staan op 0 (gecontroleerd met script); alle zin-/alinea-verwijzingen en citaten in vragen en uitleg nageteld/vergeleken met de tekst; elke `zoek` in `fixes-E.json` komt exact één keer voor (Node-script `check-E.mjs`).

## Per tekst
- Licht in de diepzee — 3 vragen — hersteld: v1 uitleg "maar maar één klein stukje" → "terwijl ze maar één klein stukje" (ernst 1). Vragen 2 en 3 ok (afleiders 'visjes lokken' en 'versiering' staan in de tekst maar zijn eenduidig fout).
- Hoe een hagelsteen groeit — 3 vragen — ok (zinverwijzing "zin 4 en 5" klopt; natuurfeiten kloppen).
- De contrabas — 3 vragen — ok ("daarentegen in zin 2" klopt; "Jesses" is correcte genitief).
- Van boon tot reep — 3 vragen — hersteld: v2 goede optie was als enige letterlijk uit de tekst ("Daardoor krijgen ze hun smaak") → "Dat geeft de bonen hun smaak" (ernst 2); v3 uitleg "Waarom is suiker en melk nodig" → "zijn" (ernst 1). Volgorde-vraag klopt (bladeren → zon → schip → roosteren → suiker/melk).
- De lantaarnopsteker — 3 vragen — ok (samenvatting dekt werk én verdwijnen; 'eerbetoon' is uit de context af te leiden en staat niet in de woordhulp).
- Het briefje in de boom — 3 vragen — ok (verwijzing 'het eerste' wijst inderdaad een alinea terug).
- Een liedje dat blijft plakken — 3 vragen — ok; mening-vs-feit maakt echt onderscheid: alleen "vreselijk irritant" is een mening, de drie andere zijn controleerbare uitspraken uit de tekst.
- Bezoek aan het diepste punt — 4 vragen — hersteld: tekst "honderden olifanten op een postzegel" → "een olifant op een postzegel" (ernst 3, feitfout getal: ±1.100 kg/cm² × ±5 cm² ≈ 5,5 ton = één olifant); v3 uitleg-citaat niet letterlijk → letterlijk gemaakt (ernst 1). Detail-vraag 'plastic tasje' met vergelijkings-afleiders (drinkpakje, postzegel) is eenduidig.
- De bosloop — 4 vragen — ok (alle citaten letterlijk; 'alsof ze goud heeft gewonnen' sluit afleider 'goud gewonnen' uit).
- Zout uit zee en berg — 4 vragen — ok (samenvatting dekt beide bronnen; 'daarentegen'-citaat letterlijk).
- Onweer: van flits tot knal — 5 vragen — ok (alinea-verwijzingen 2 en 3 kloppen; 6 s ÷ 3 = 2 km; natuurkunde klopt: botsende ijskorrels, flits heter dan zonsoppervlak, geluid ±3 s per km, auto als veilige plek, bliksem maakt stikstofverbindingen).
- Het duet — 5 vragen — hersteld: tekst "in slow motion" → "heel langzaam" (ernst 1, Engels); v3 afleider "Er staan twee wekkers af" → "Er gaan twee wekkers af" (ernst 1, woordkeus). Volgorde-vraag klopt (val → Yara wil afzeggen → 'maar die avond' filmpje → oefenmiddagen → optreden).

## Woordhulp (WOORDHULP_E)
- 18 sleutels; alle komen voor in de teksten ("mijnwerkers" staat met hoofdletter in de tekst, maar de regex in leesladderWoorden.js is hoofdletter-ongevoelig, dus dat werkt).
- Geen enkele sleutel is het onderwerp van een woordbetekenis-vraag (bevraagd: 'laatste vergissing', 'hoewel', 'daarentegen', 'namelijk', 'eerbetoon', 'oorwurm', 'het tegendeel', 'tenzij', 'ruzie tussen twee wekkers' — geen daarvan in de woordhulp). "hurk" komt wel voor in de geciteerde zin van de 'tenzij'-vraag, maar wordt daar niet bevraagd en verraadt niets.

## Twijfel voor Mark
- Bezoek aan het diepste punt, tekst: "op de bodem van de trog krioelt het van … visjes" — op bijna 11 km diepte zijn nooit vissen gezien (diepste vis ±8,3 km); zeekomkommers en garnaalachtigen wel. Niet gewijzigd omdat 'de trog' als geheel wél vissen heeft en dit een inhoudelijke herschrijving zou zijn; eventueel "garnalen en wormpjes".
- Samenvat-vragen (De lantaarnopsteker v1, Zout uit zee en berg v1, Onweer v5) en combineer-vragen (Onweer v2, Het duet v2): de goede optie is als enige duidelijk langer. Eigen aan het vraagtype (een volledige samenvatting ís langer), maar formeel een weggever; niet gewijzigd omdat dat herschrijven van alle afleiders vraagt.
- Onweer, vraag 3: type "detail opzoeken" terwijl het kind een regel moet toepassen (6 ÷ 3). Geen passend label in de lijst; niet gewijzigd.
- Hoe een hagelsteen groeit, vraag 1: afleider "Hij wordt doormidden gesneden en groeit weer aan" is wat onzinnig (grenst aan een onzin-optie), maar prikt wel een tekstwoord ('doormidden snijdt') aan; niet gewijzigd.
- Zout uit zee en berg: titel en inleiding spreken van "de berg", de alinea zelf van "uit de diepte" / mijnen. Niet fout, wel wat scheef; niet gewijzigd.

## Lengte per trede
- trede 1: 91 · 112 · 100 · 113 woorden; 8 · 8 · 8 · 8 zinnen (verwacht ±8 zinnen) — ok
- trede 2: 137 · 139 · 132 woorden (verwacht ±150) — iets aan de korte kant, binnen marge
- trede 3: 213 · 213 · 217 woorden (verwacht ±230) — ok
- trede 4: 339 · 337 woorden (verwacht ±330; bestandscommentaar zegt ±320-350) — ok


---

# Verslag Leesladder versie F
Gecontroleerd: 12 teksten, 43 vragen (alle)
Hersteld: 7 (ernst 3: 0 · ernst 2: 4 · ernst 1: 3)
Niet gewijzigd maar twijfel: 4

Werkwijze: elke tekst eerst als lezer gelezen, daarna elke vraag zelf opgelost zonder naar `answer`/`uitleg` te kijken, pas dan vergeleken. Alle 43 `answer`-waarden zijn 0 (geteld met een Node-script). Feiten nagelopen: kippenvel/haarspiertjes, rattengedrag (poetsen, ultrasoon lachgeluid, soortgenoot bevrijden), Romeinse boogbruggen en sluitsteen, botvernieuwing ±10 jaar / 206 vs ±300 botten / stijgbeugel, Sandy Island (negentiende eeuw 'land gezien', 2012 onderzoeksschip, ruim 1 km diep, puimsteen-hypothese), rente-op-rente-voorbeeld (100 → 102 euro). Geen feitfouten gevonden. Valstrik-afleiders die letterlijk in de tekst staan ('voor de grap', 'stort in', 'zes', '206', 'twee uur', 'zeventig') zijn in alle gevallen eenduidig fout. Mening-vs-feit-vragen (Rat v1, Geld v4) maken echt onderscheid. Samenvat-vragen (Monsters v3, Skelet v3, Geld v5) hebben precies één samenvatting die beide/alle alinea's dekt.

## Per tekst
- Kippenvel — 3 vragen — ok (zin 5 is inderdaad de 'Desondanks'-zin; dubbele punt staat in zin 3)
- De rat verdient beter — 3 vragen — ok
- De generale repetitie — 3 vragen — ok
- Eerst de spaarpot — 3 vragen — hersteld: v1 goede optie had als enige een toelichting achter een streepje (ernst 2, ingekort tot 'Behalve als dat gebeurt')
- Monsters op de zeekaart — 3 vragen — hersteld: v2 uitleg zei 'twee zinnen terug', maar de zeeman-zin staat direct vóór 'zulke verhalen' (ernst 2, uitleg herschreven)
- De laatste ronde — 3 vragen — hersteld: v1 citaat 'de enige die vandaag écht gewonnen heeft' staat niet letterlijk in de tekst (ernst 2, vraag citeert nu 'maar één iemand écht gewonnen heeft')
- Waarom een boog zo sterk is — 3 vragen — ok
- Je skelet is een bouwplaats — 4 vragen — ok (v4: 'die bouwplaats' is eerste zin van alinea 2, uitleg over terugbladeren klopt)
- Het eiland dat er nooit was — 4 vragen — hersteld: v1 goede optie als enige met streepje plus toelichting en dubbel zo lang (ernst 2, ingekort tot 'De zee bleek er ruim een kilometer diep'; uitleg past nog)
- Het bouwplan van Fedde — 4 vragen — ok
- Geld dat groeit terwijl jij slaapt — 5 vragen — ok
- De torenwedstrijd — 5 vragen — hersteld: 'Sanne's' → 'Sannes' op 3 plekken (2× tekst, 1× vraag 4; ernst 1; optie in v3 had al 'Sannes plan')

## Twijfel voor Mark
- De torenwedstrijd, tekst: 'een high five geeft' is een Engels woord (regel 8). Staat wel in Van Dale en is gewoon kindertaal; niet gewijzigd. Mogelijk alternatief: 'een boks geeft'.
- De torenwedstrijd, vraag 1: goede optie 'Hun toren blijft als enige tien tellen staan, en dat was een van de regels' is als enige lang met toelichting. Niet gewijzigd omdat juist het combineren (regel + meetmoment) de kern van deze 'informatie combineren'-vraag is; inkorten tot 'Hun toren blijft als enige tien tellen staan' kan.
- De rat verdient beter, vraag 1: afleider 'Ratten zijn leuker dan katten' staat niet in de tekst terwijl de vraag naar een 'uitspraak uit de tekst' vraagt. Hij is wel eenduidig fout (mening én niet uit de tekst), dus niet gewijzigd.
- Woordhulp: 'vaarroutes' komt voor in de geciteerde zin van vraag 2 van 'Het eiland dat er nooit was', maar die vraag gaat over 'immers', niet over de betekenis van 'vaarroutes'. Geen overtreding van de spelregel; ter info. Verder staat géén bevraagd woord (desondanks, tenzij, jezelf eerst betalen, hoewel, immers) in WOORDHULP_F, en alle 16 sleutels komen letterlijk in een tekst voor.

## Lengte per trede
- trede 1: Kippenvel 101 w / 8 zinnen · Rat 112 w / 8 · Generale repetitie 106 w / 8 · Spaarpot 93 w / 8 (verwacht ±8 zinnen) — ok
- trede 2: Monsters 147 · Laatste ronde 149 · Boog 146 (verwacht ±150) — ok
- trede 3: Skelet 228 · Eiland 222 · Fedde 228 (verwacht ±230) — ok
- trede 4: Geld 329 · Torenwedstrijd 324 (verwacht ±330; bestandscommentaar zegt ±320-350) — ok

