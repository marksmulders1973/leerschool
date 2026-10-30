# Vervolgsets B1 — verslag (nacht 29→30 okt 2026)

**Opdracht Mark (29 okt, avond):** "De eerste 20 vragen deed je vorige keer, nu vraag 20 tot 60 ofzo en dan door; in batches, maximaal zelfstandig."

## Wat B1 is
Na de startset (eerste 20 vragen per groep × vak) krijgt een kind via "Oefen nu" een pad van dat vak voor zijn groep
(per dag een ander pad, 10 vragen geschud). Welke vraag precies als 21e komt is toeval. `scripts/audit/vervolg-dump.mjs`
legt daarom een vaste volgorde vast: alle paden van het vak voor de groep (alfabetisch, zoals het vakscherm), om en om
per stap, in bestandsvolgorde, zonder startset-vragen. Positie 1-40 van die lijst = "vraag 21-60" = **B1**.

- 42 sets · 1.383 posities · **839 unieke vragen**, waarvan 45 al in het register stonden → **794 nagekeken**, 86 bronbestanden.
- 4|natuur en 5|engels hebben niets na de startset (pad = precies 20 vragen) → aanvullen (plan D2).
- Verdeeld in 15 pakketten **per bronbestand** (nooit twee nakijkers in één bestand), max 4 nakijkers tegelijk.
- Werkwijze per pakket (`NAKIJK-OPDRACHT.md`): blind (alleen vraag + opties, eigen antwoord noteren) → `blind.json` → dan pas
  antwoord/hints → herstellen in het bronbestand → `oordeel.json` → eindrapport. Vanaf pakket 10 stonden de opties in deel A
  geschud (nakijkers merkten dat het goede antwoord in de bron altijd op A staat).
- Na elk pakket: `node --check`, oordelen in `docs/audit/goedgekeurd.json` (register 429 → 1.147), commit.

## Uitkomst

| pakket | vragen | goed | fout | twijfel | hersteld |
|---|---|---|---|---|---|
| 01 | 55 | 37 | 9 | 9 | 18 |
| 02 | 55 | 38 | 2 | 15 | 17 |
| 03 | 55 | 24 | 11 | 20 | 24 |
| 04 | 55 | 24 | 7 | 24 | 29 |
| 05 | 55 | 39 | 1 | 15 | 14 |
| 06 | 55 | 41 | 3 | 11 | 13 |
| 07 | 55 | 7 | 10 | 38 | 48 |
| 08 | 55 | 49 | 3 | 3 | 6 |
| 09 | 55 | 16 | 8 | 31 | 39 |
| 10 | 55 | 24 | 1 | 30 | 31 |
| 11 | 55 | 29 | 2 | 24 | 24 |
| 12 | 55 | 41 | 5 | 9 | 11 |
| 13 | 55 | 39 | 2 | 14 | 15 |
| 14 | 55 | 25 | 7 | 23 | 30 |
| 15 | 24 | 6 | 3 | 15 | 16 |
| **totaal** | **794** | **439** | **74** | **281** | **335** |

- **Foutpercentage 9,3 %** (74 van 794) op de strenge maatstaf van 27 okt; **0 foute antwoordsleutels** — alle 794 blinde
  keuzes kwamen overeen met het ingestelde antwoord. De fouten zaten in hints die het antwoord verraden of voorrekenen
  (verreweg het meest), antwoord in de vraag ("Wat betekent hand?" → hand; "energie voor de ochtend" → ontbijt),
  raadbaar door de vorm (alleen het goede antwoord met "~", 3× ja / 1× nee), telegramzinnen en enkele feiten
  (euro-landen: 21 geldt alleen voor de EU; Groningen-gasveld 2023 vs 2024; "Kerstmis klein").
- **Twijfel (281) is bijna overal meteen hersteld:** `niveaus` die alleen het antwoord of een telegramzin waren zijn
  echte hulpstappen geworden (basis = denkstap, simpeler = uitleg, nogSimpeler = antwoord), jargon weg voor de groep,
  absurde afleiders vervangen door plausibele kinderfouten, euro-notatie consequent.
- **Startset-vragen:** 205 van de 839 vragen zitten óók in een startset van een andere groep. Vanaf golf 2 gold: alleen
  hints/niveaus aanpassen, opties/vraag alleen bij een echte fout, nooit `vanafGroep`/`disabled`. De startsets-test
  (20 vragen per set) bleef groen; 4 startset-vraagteksten verbeterden (8/12 → "het kleinst", rijd/rijdt → invulzin,
  "hand" → "finger", "gemiddelde temperatuur NL" → nette zin). Wat nakijkers daardoor bewust lieten staan:
  `NA-B1-NALOPEN.md`.

## Alle 74 fouten (waar + reden)
- spelling-ei-ij-au-ou stap 7 vraag 3: Antwoord stond letterlijk in de vraag: '(tussenwerpsel, zoals in nou zeg)'; ook 'tussenwerpsel' is jargon voor groep 4.
- spelling-ei-ij-au-ou stap 8 vraag 2: Hint D 'Denk aan vrouwen' citeerde het antwoord (vrouw); niveau simpeler telegramstijl.
- spelling-ei-ij-au-ou stap 8 vraag 3: Hint D 'Denk aan het woord goud' gaf voor een kind dat 'gouten' koos meteen de spelling goud + en; niveau simpeler was telegram met jargon en Engels ('golden').
- spelling-ei-ij-au-ou stap 9 vraag 2: Hint C 'Mist een u.' was een telegramzin die het ontbrekende stuk direct aanwees (augstus + u = antwoord); niveau simpeler telegram met Engels 'august'.
- spelling-ei-ij-au-ou stap 9 vraag 5: Hint D 'Met ou, niet au.' gaf het antwoord (jau -> jou); 'lijdend voorwerp' in vraag en niveau is jargon voor groep 4; hint C 'bezittelijk' idem.
- spelling-ei-ij-au-ou stap 9 vraag 10: Hint D 'Koud heeft geen w.' spelde het antwoord uit; hint C noemde 'koed' als 'een ander woord', maar dat bestaat niet.
- spelling-ei-ij-au-ou stap 3 vraag 7: Hint C 'Denk aan hij rijdt. Welke letter mis je nog?' gaf voor 'rijen' de ontbrekende d via een vrijwel identiek woord.
- procenten-po stap 1 vraag 3: Hint C noemde '45 meisjes' en vroeg 'hoeveel meisjes is dat' (= 45, het antwoord); hint D 'tien keer te weinig' rekende 4,5 x 10 voor.
- procenten-po stap 1 vraag 5: Hint D 'Er zijn 70 van de 100 over' noemde het antwoordgetal.
- getallen-tot-20-po stap 4 vraag 5: Raadbaar door de vorm: 'Ze komen tegelijk' en 'Dat kun je niet zeggen' zijn absurde afleiders, feitelijk maar 2 echte opties. Niveaus waren telegram ('13.', '13
- getallen-tot-20-po stap 1 vraag 3: Raadbaar door de vorm: 'Ze zijn even groot' en 'Dat kun je niet zeggen' zijn absurde afleiders, feitelijk maar 2 echte opties. Niveau basis '8 < 12.' gebruikt e
- doorstroomtoets-taal-g8 stap 1 vraag 18: Hints B en C omschreven het antwoord ('niet over energie', 'niet over moeheid'); niveaus basis = antwoord letterlijk.
- doorstroomtoets-taal-g8 stap 1 vraag 19: Hint D ('Wie neemt juist grote risico's?') omschreef het antwoord roekeloos; niveaus waren telegramzinnen.
- doorstroomtoets-taal-g8 stap 1 vraag 20: Hint D (Pinokkio) verraadt het antwoord liegen; hints B/C telegramstijl ('Geheim = wel waar...').
- doorstroomtoets-taal-g8 stap 1 vraag 24: Hint C ('Hoe voel je je na een lange wandeling?') is een leidende vraag met als antwoord 'moe' = het goede antwoord.
- doorstroomtoets-taal-g8 stap 1 vraag 32: Goede optie 'Heeft veel haast' bevat de stam van het gevraagde woord 'gehaast' (antwoord in de vraag); hints C/D identiek en telegram; zin 'De jongen is gehaast
- doorstroomtoets-taal-g8 stap 1 vraag 40: Hint D ('het beëindigt het getwijfel') omschrijft het antwoord 'eindelijk een beslissing nemen'; niveaus basis telegram.
- doorstroomtoets-taal-g8 stap 1 vraag 44: Hint C ('om wie er aan het einde gelijk krijgt') en D ('waarschuwt tegen te vroeg juichen') omschrijven het antwoord.
- doorstroomtoets-taal-g8 stap 1 vraag 46: Hint D noemde 'herstellen' (= opknappen) en hint B 'tegenovergestelde van slopen' -> antwoord verraden; niveaus basis telegram.
- doorstroomtoets-taal-g8 stap 1 vraag 48: Hint C gaf letterlijk 'schouwen = kijken' = het antwoord.
- doorstroomtoets-taal-g8 stap 1 vraag 49: Hint B noemde 'een reus' = antwoord 'Reusachtig'.
- doorstroomtoets-taal-g8 stap 1 vraag 51: Hints B ('schuif je iets vooruit in de tijd') en D ('je doet het alleen later') omschrijven het antwoord 'later doen'.
- klokkijken stap 3 vraag 4: Hint bij B verraadde het antwoord ('30 min vóór 3 — dus uur 2 nog' = 02:30); vraag 'in digitaal' telegramachtig.
- klokkijken stap 3 vraag 6: Hint bij B rekende voor ('Welk cijfer komt na de 3?' → 4 → half 4).
- klokkijken stap 4 vraag 2: Hint bij D rekende voor (uur in 4 stukken, hoeveel is één stuk = 15).
- klokkijken stap 5 vraag 2: Hint bij B rekende voor (60 minuten, 12 cijfers, wat per cijfer = 5).
- klokkijken stap 5 vraag 3: Hint bij D rekende het antwoord voor ('Hoeveel is 2 keer 5?'); hint C telegramzin.
- klokkijken stap 5 vraag 5: Hint bij D rekende voor ('bij de 10 nog 10 minuten, de 11 is een cijfer verder' → 5).
- klokkijken stap 1 vraag 8: Hint bij C wees naar het antwoord ('Hoeveel cijfers staan er op de klok?' → 12 → 12 uur).
- woordenschat-engels-po stap 7 vraag 2: Antwoord stond letterlijk in de vraag (hand = hand): niets te leren, altijd goed. Echte fout, dus ook als startset-vraag aangepast.
- dierenklassen-po stap 6 vraag 1: Antwoord klopt, maar de hints waren onbegrijpelijke telegramfragmenten ('Niet — geen schubben/kieuwen.', 'Geen veren.', 'Geen schubben.').
- dierenklassen-po stap 6 vraag 2: Antwoord klopt; hints waren losse fragmenten ('Schubben.', 'Insect, geen veren.') zonder zin.
- dierenklassen-po stap 6 vraag 19: Antwoord klopt (amfibieën), maar de hints waren losse woorden ('Alleen longen.', 'Kieuwen.', 'Via buisjes in hun lijf.') zonder onderwerp: onbegrijpelijk voor g
- spelling-overige-po stap 2 vraag 1: Hint bij '!' zei 'gewone vraag' en verraadde zo het antwoord; hints B/D telegramzinnen.
- spelling-overige-po stap 3 vraag 3: Hint bij B ('Hoe zeg je het als er meer boeken zijn?') wees rechtstreeks naar het goede antwoord (meervoud boeken). Startset-vraag: alleen hints aangepast.
- spelling-overige-po stap 4 vraag 2: Niveaus simpeler zei 'feestdag klein' — feitelijk fout (Kerstmis krijgt hoofdletter; kerstboom is geen feestdag). Startset-vraag: alleen niveaus.
- sterren-planeten stap 4 vraag 2: Hint bij Aldrin noemde 'Armstrong' letterlijk = antwoord verraden. Columbus-afleider absurd maar startset-vraag (opties ongemoeid).
- sterren-planeten stap 7 vraag 1: Hint bij D ('hoe staat die as bij Uranus?') wees direct naar het antwoord; 'bizar' is spreektaal; niveaus 'Schuin.'.
- sterren-planeten stap 8 vraag 3: Hints B/C verraadden het antwoord ('was van steen', 'de inslag was de hoofdoorzaak'); afleider 'Mensen' absurd; 'Vulkaanuitbarsting (alleen)' kromme optie.
- sterren-planeten stap 9 vraag 1: Elke hint gaf de juiste volgorde van twee planeten (antwoord voorgerekend); niveaus '4-5-6.' en 'Volgorde.' zijn geen hulp.
- sterren-planeten stap 9 vraag 3: Hint 'Iets verder weg dan 1.' maakte 4,2 raadbaar; vraagzin telegram ('dichtstbijzijnde ster na zon'); niveaus 'Vier.'.
- sterren-planeten stap 9 vraag 5: Hint bij B ('Lichtjaar = afstand …') noemde het kernwoord van het goede antwoord; hint C telegram.
- sterren-planeten stap 1 vraag 1: Goede optie 'die kernfusie doet' is jargon + krom voor groep 6; hint B ('Sterren zijn gas') herhaalde het kernwoord van het antwoord; hint D telegram.
- samenvatten-hoofdgedachte-po stap 2 vraag 3: nogSimpeler zei 'Detail = A' — opties worden in de app geschud (shuffleOptions), dus de letter A klopt meestal niet en misleidt het kind
- financiele-vorming-po stap 1 vraag 2: vraag was dubbelzinnig: 21 geldt alleen voor EU-landen (sinds 1-1-2026 incl. Bulgarije); tel je ook Kosovo, Montenegro, Andorra, Monaco, San Marino en Vaticaans
- recyclen-afval-po stap 1 vraag 4: raadbaar door de vorm: alleen de goede optie had '~', afleiders 10%/1%/100% absurd; 64% zonder 'ongeveer' te stellig (bronnen: ca. 55-60% huishoudelijk afval ge
- nieuwsbericht-lezen-po stap 1 vraag 4: De drie wrongHints omschreven telkens het ontbrekende vraagwoord ('manier waarop' = hoe, 'plek' = waar, 'reden' = waarom); samen per uitsluiting raadbaar.
- nieuwsbericht-lezen-po stap 1 vraag 5: Zin beantwoordde ook 'waar' (Vissersdam) terwijl de vraag om twee vragen vraagt; wrongHint B ontkende dat er een plek stond (feitelijk mis); wrongHint C verried
- nieuwsbericht-lezen-po stap 1 vraag 6: wrongHint C ('Is het niet net andersom?') wijst direct naar het spiegelbeeld van optie C, en dat is het goede antwoord.
- topografie-nederland stap 1 vraag 2: wrongHint bij '11' rekende het antwoord voor ('vóór 1986, toen Flevoland erbij kwam' = 11+1); niveaus gaven direct '12'.
- alfabet-woordenboek-po stap 2 vraag 1: wrongHint bij 'V' noemde het antwoord letterlijk ('...en dat is een f'); basis-niveau gaf het antwoord.
- alfabet-woordenboek-po stap 2 vraag 5: wrongHint bij 'S' noemde het antwoord letterlijk ('...maar met z'); basis-niveau gaf het antwoord.
- alfabet-woordenboek-po stap 2 vraag 6: wrongHint bij 'vlieger' noemde de z ('v komt nog vóór z') en wees zo naar 'zebra'; basis-niveau gaf het antwoord.
- woordenschat-po stap 1 vraag 2: Spelfout in de goede optie ('Spelling-regels' moet 'Spellingregels'), telegramoptie 'Betekenis in zin', wrongHints en niveaus telegramstijl ('Wel — ...', 'Spell
- deelsommen-met-rest-po stap 1 vraag 7: Hint bij 'Ja, de rest mag zo groot zijn als de deler' omschreef het goede antwoord ('kun je die dan niet nog een keer verdelen?'); niveaus simpeler gaf het antw
- feiten-details-opzoeken-po stap 1 vraag 3: De stap-uitleg werkt exact dit voorbeeld uit ('Een spin heeft acht poten… Lees precies: acht') en stelt dezelfde vraag; het kind leest het antwoord dus al in de
- continenten-wereld-po stap 2 vraag 1: Antwoord 5 klopt, maar hint bij '3' rekende voor ('vergeet de 2 IJszeeën niet' → 3 + 2). Vraag zei 'Zuidelijke Oceaan' terwijl de stap-uitleg 'Zuidelijke IJszee
- klassieke-muziek-po stap 2 vraag 2: Antwoord klopt (Beethoven), maar alle drie de hints waren telegramzinnen ('— stierf jong op 35', '— werd 65', 'geen doofheid bekend').
- klassieke-muziek-po stap 2 vraag 3: Antwoord klopt (Ode an die Freude), maar afleiders 'Mozart Requiem' en 'Bach Toccata' waren telegram-achtig in verkeerde woordvolgorde; alleen het goede antwoor
- klassieke-muziek-po stap 2 vraag 4: Antwoord klopt (Vivaldi), maar hints met '+' in plaats van zinnen ('orgel + Brandenburgse Concerten', 'opera + Eine kleine Nachtmusik') en spelling 'piano-werke
- lettergrepen-klemtoon-po stap 1 vraag 1: Goede optie was een vreemde zin ('een deel van een woord in één klap'); afleiders korter dan het antwoord.
- plattegrond-legenda-po stap 1 vraag 7: Plattegrond is netjes beschreven in de vraag, maar het antwoord stond letterlijk in de tekst ('Links is de ingang met de stip je bent hier' -> 'bij de ingang'):
- geschiedenis-vroeger-en-nu-g5 stap 2 vraag 2: antwoord klopt, maar hint bij '50 jaar' = 'Dat is een halve eeuw.' rekent het antwoord voor (halve eeuw = 50 -> eeuw = 100)
- doorstroomtoets-rekenen-g8 stap 1 vraag 5: antwoord 2/3 klopt, maar hint 'Beide getallen kunnen door 3 gedeeld. Probeer.' rekent het antwoord voor en is krom Nederlands; optie '6/9 al kleinst' telegram
- ruimtevaart-po stap 1 vraag 2: Hint bij '~11,2 km/u' zei 'kijk naar de eenheid': dat bevestigt dat het getal 11,2 goed is en verraadt zo het antwoord. Vraagzin miste lidwoorden.
- weersvoorspelling-po stap 1 vraag 4: Telegramzin ('Wat is gemiddelde regen NL per jaar?') en raadbaar door vorm: alleen het goede antwoord had een '~'; afleider '0 mm' absurd.
- weersvoorspelling-po stap 1 vraag 2: Telegramzin en raadbaar door vorm: alleen '~10°C' had een '~', de afleiders waren exacte getallen.
- energiebronnen-po stap 2 vraag 2: Feitelijk dubbelzinnig: de gaswinning stopte op 1 oktober 2023, het veld werd in april 2024 wettelijk definitief gesloten. 'Gaswinning gestopt' hoort dus bij 20
- evolutie-mens-po stap 2 vraag 1: Hint B ('neef, geen opa. Van wie stammen beide af?') omschreef het goede antwoord; hint C noemde '98,8% DNA' en verraadde zo het antwoord van vraag 4 in dezelfd
- ontdekkingsreizen-po stap 1 vraag 2: Goede optie was een telegramzin; alle drie de hints zeiden 'geen instrument/meetinstrument' en verraadden zo per uitsluiting de enige optie met een apparaat.
- bekende-boeken-literatuur-po stap 2 vraag 4: Alle drie de hints waren identiek en rekenden het antwoord voor ('elk boek is één schooljaar, hoeveel jaar zit Harry daar?'), bovendien onjuist: deel 7 speelt n
- waterkringloop-po stap 1 vraag 1: Antwoord (~3%) klopt, maar de hint bij ~97% ('97% is juist het zoute water') rekent het antwoord voor (100 - 97). Niveaus waren telegram. Startsetvraag: opties 
- betrouwbaarheid-bronnen-po stap 2 vraag 1: Raadbaar door de vorm: drie opties beginnen met 'ja', één met 'nee' op een ja/nee-vraag. Niveau basis was telegram.
- gezonde-voeding-po stap 2 vraag 3: Antwoord stond bijna letterlijk in de vraag ('energie voor de ochtend op school' -> ontbijt).

## Lessen
1. Hints zijn het lek, niet de antwoordsleutels: 0 van 794 sleutels fout, maar 1 op 11 vragen gaf via een hint het antwoord weg.
2. Een vraag kan in meerdere sets zitten (startset voor groep 3, vervolg voor groep 5). Dump sluit startset-vragen nu
   wereldwijd uit; herstel aan gedeelde vragen altijd met de startsets-test erachter.
3. Deel A moet geschud zijn, anders is "blind" niet blind (goede antwoord staat in de bron op A).
4. Set-indeling nalopen: getallen-tot-20 in 5|rekenen, korte-teksten-g4 in 5|begrijpend-lezen, brugklas-orientatie in 8|rekenen.

## Volgende batch
`node scripts/audit/vervolg-dump.mjs --van 61 --tot 100 --map docs/audit/vervolg/B2` → zelfde werkwijze (pakketten per
bestand, deel A geschud, max 4 nakijkers, register filteren).
