# Verslag: natuur & biologie PO + brugklas (audit 8 okt 2026)

Branch `audit3/natuur-biologie` (vanaf main v931, stempel '8 okt'). Versienummer niet opgehoogd. Aanleiding: de tester (Noa, testgroep) vond in het 'Kwartier van vandaag' voor groep 5 de pop-in-cocon-fout en de herbivoor-vraag (hersteld in v931, `4a3551ca`).

## Uitkomst in het kort

- **Nagekeken: 747 vragen in 17 bestanden**, elke vraag eerst zelf opgelost, met alle uitleg, hints, uitlegPad, SVG-teksten en niveaus erbij. Daarnaast bij 2 bestanden alleen gecontroleerd waar ze terechtkomen (ecosystemenBiologie, ecosystemenHavoVwo).
  - Leerpaden PO: dierenSeizoenenNatuur (40), dierenklassenPo (40), lichaamGezondheidPo (40), gezondeVoedingPo (40), pubertijdGroeiPo (25), weersvoorspellingPo (40), waterkringloopPo (40), evolutieMensPo (40), recyclenAfvalPo (40). Daarbij alleen de natuurvragen uit: wereldorientatieMixPo (6), schemasStappenplannenPo (5), sterrenPlaneten (5, over seizoenen en dag/nacht) en bekendeWetenschappersPo (11, de biologen).
  - Brugklas: celBiologie (34), fotosyntheseBiologie (26).
  - Oefenbank `sampleQuestions.js`: natuur groep3 (50), groep5 (50), groep7 (50), groep8 (20), klas1 (50), biologie klas1 (50).
  - `textbookQuestions.js`: naut-meander-brandaan (28), bvj-havo-vwo-1 (17).
- **Fouten gevonden: 162 voorstellen.** Ernst 3 (feitfout, fout antwoord, twee goede antwoorden of duidelijk te moeilijk voor de groep): **20**. Ernst 2 (vaag, of de vraag verraadt het antwoord): **84**. Ernst 1 (stijl/spelling): **58**.
- **Hersteld: 161.** In de eindredactie is elke fix gelezen; 1 voorstel is niet overgenomen (frisdrank 'glas' → 'blikje', zie de twijfellijst). Geen vraag toegevoegd of verwijderd, geen `answer`-index gewijzigd en geen structuur aangepast. Het aantal opties per vraag is gelijk gebleven.
- **Twijfel (niet gewijzigd): ongeveer 103 punten**, plus een tabel per stap met wat te moeilijk is voor groep 4/5 → `docs/audit/TWIJFEL-natuur.md`.
- **Controle na toepassen:**
  - `npm ci && npm run build` → geslaagd ("✓ built in 36.10s").
  - `npm run audit:vragen` → "353 paden · 17258 vragen · 609 kale sommen nagerekend · 0 meldingen".
  - `npx vitest run` → "Test Files 34 passed (34) · Tests 337 passed (337)".

### De 10 ergste vondsten (vóór → na)

1. **Fotosynthese, klas 1-2 (ernst 3):** "Planten en dieren ademen allebei, maar **andersom** … (en planten 's nachts)" → planten ademen dag én nacht net als dieren. Alleen fotosynthese werkt andersom, en die gebeurt alleen overdag. Vijf zinnen in het pad leerden deze misvatting; die zijn allemaal rechtgezet.
2. **Weer, groep 6-8 (ernst 3):** "Code geel — wees voorbereid / Code oranje — wees alert" → andersom, zoals het KNMI het zegt: geel = wees alert, oranje = wees voorbereid.
3. **Dierenklassen, groep 5-8 (ernst 3):** "Rups wordt pop *(in cocon)*" → "*(hangt stil aan een takje of blad)*". Dezelfde fout als die Noa vond, nu in een ander pad.
4. **Dieren en seizoenen, groep 4-7 (ernst 3):** "winterslaap (egel, vleermuis, beer …)" → "winterslaap (egel, vleermuis, hamster)". Er staat nu ook bij dat eekhoorn en beer winterrust houden.
5. **Latijn als enige goede antwoord, groep 5-6 (ernst 3, 7×):**
   - dierenklassenPo "Wat is een planteneter? → Herbivoor" en "alleseter → Omnivoor" → "Welk dier is een planteneter/alleseter?" met diernamen.
   - In de oefenbank groep 5 hetzelfde voor "Wat is een herbivoor / carnivoor / omnivoor / het verschil?" en "Wat is evaporatie?". Het Latijnse woord staat nu alleen nog als extraatje in de uitleg.
6. **Recyclen, groep 6-8 (ernst 3):** "statiegeld op een grote fles (1 liter of meer) → €0,25" → "(meer dan 1 liter)". Een literfles heeft €0,15 statiegeld.
7. **Oefenbank biologie klas 1 (ernst 3):** "als de biceps buigt, strekt de triceps" → de ene spier trekt samen terwijl de andere ontspant.
8. **Textbook brugklas (ernst 3):** "Welk zintuig zit in je tong?" had twee goede antwoorden (smaak én tast). De afleider "Tast" is nu "Zicht".
9. **Lichaam, groep 6-8 (ernst 2):** de uitleg leerde "'Welk orgaan filtert bloed?' → Lever", terwijl een toets daar de nieren verwacht. Nu staat er: "filtert bloed en maakt urine → nieren; ruimt gifstoffen op en maakt gal → lever". De SVG zette ook de hersenen "in de romp".
10. **Evolutie, groep 6-8 (ernst 3):**
    - Ötzi stond als "bekend fossiel", maar hij is een ijsmummie. Het pad noemt een fossiel zelf "versteend".
    - "Mens + chimpansee + gorilla: gezamenlijke voorouder ~7 mln jaar" → "mens + chimpansee (en bonobo)". De gorilla splitste eerder af.

Ook hersteld:
- In de oefenbank groep 3/4 had "Welke plant bloeit in de lente?" twee goede antwoorden (cactus/tulp).
- "Kip vliegt niet", "kuiken = nestblijver", "eekhoorns zweven", "niemand eet de vos", "krab heeft geen kieuwen" en "mensen ≠ dieren / bacteriën = schimmels".
- Vitamine D-advies voor iedereen, "1 stuk fruit = 80 g" en "boter op brood" in de Schijf van Vijf.
- Zes keer "ouder" → "ouder of verzorger".

### Welke paden worden aan welke groepen aangeboden?

Uitgezocht in de code: `src/features/vandaag/vandaagPlan.js`, `src/features/onboarding/startKwartier.js`, `src/features/practice/buildTopicQuiz.js`, `src/features/learn/LearnPathsHub.jsx` en `src/data/sampleQuestions.js`.

| Ingang | Hoe gekozen | Natuur/biologie die daar terechtkomt |
|---|---|---|
| **Kwartier van vandaag, stap 5 "gezonde mix"** (nog weinig gemeten) | `kiesStartPaden(groep)`, vaste lijst per groep, 2 paden per dag op weekdag-rotatie | **Alleen groep 5: `dieren-seizoenen-natuur`** (naast tafels, ei/ij, korte teksten en delen). Groep 3, 4, 6, 7 en 8 krijgen hier geen natuurpad. |
| **Start-kwartier** (eerste keer) | dezelfde `PADEN_PER_GROEP`; alleen het eerste pad is beperkt tot stap 1-2 | Groep 5: dieren-seizoenen-natuur staat als 5e pad, dus **uit alle stappen**. |
| Kwartier, stap 3/4 "zwakste plek" | mastery-records van het kind | Elk pad dat het kind eerder oefende, op elk niveau. |
| Kwartier, gezinsvoorkeur met vrije tekst (bijv. "dieren") | `padVoorGroep`: `level` "groepX-Y" moet de groep omvatten | **Groep 4 krijgt dan `dieren-seizoenen-natuur`** (groep4-7). Groep 5+ kan ook dierenklassenPo krijgen, groep 6+ lichaam, voeding, weer, water, evolutie en recyclen, en groep 7+ puberteit. |
| Leerpaden-overzicht | `poGroupRange`: groep-filter op `level` | Zelfde verdeling: groep 4 ziet dieren-seizoenen-natuur. |
| Kwartiercheck (`src/features/kwartiercheck/`) | vaste vragen per groep | **Geen natuurvragen**, alleen leesteksten met een natuuronderwerp. |
| Oefenbank `SAMPLE_QUESTIONS.natuur` | per niveau | groep3-pool → **groep 3 én 4** (alias `vak.groep4 = vak.groep3`). "groep5" = **groep 5-6**. "groep7" = **groep 7-8** en zit ook in de Doorstroomtoets-wereldoriëntatie-mix (`topics.js`). |
| Ecosystemen (klas2-3, havo-vwo) | `level` is geen "groep…" | Komt **niet** in PO-sets (geen match in `padVoorGroep`/`poGroupRange`/`kiesStartPaden`). Wel gelinkt vanuit vmbo-examens en celBiologie. ✅ |

Belangrijk: `buildTopicQuiz` kiest in het kwartier willekeurig 5 vragen uit **alle** stappen van het pad. Een groep-5-kind kan dus in één kwartier "Waarom is het in de zomer warmer? (schuine aardas)" of "Wat is fotosynthese?" krijgen.

### Voorstel voor het niveau-probleem (niet zelf gebouwd)

**Mijn advies: stappen per groep afschermen met één veld per stap, en geen aparte groep-4/5-varianten bouwen.** Dat is het kleinste werk en het werkt in alle ingangen tegelijk.

1. **Data:** een optioneel veld `vanafGroep` op een stap. In `dierenSeizoenenNatuur.js`:
   - `vanafGroep: 6` op stap 4 (vissen/reptielen/amfibieën), stap 5 (weekdier/schaaldier), stap 9 (fotosynthese) en stap 10 (voedselketen/afbreker).
   - `vanafGroep: 7` op de aardas-vraag in stap 7. Die zit tussen andere checks; zet hem daarom als `vanafGroep` op die ene check, of verplaats hem naar het eind van de stap.
   - Bij dierenklassenPo (groep5-8) geldt hetzelfde voor stap 5 (voedselketen-termen).
2. **Selectie:** `buildTopicQuiz` heeft al `stapIndexen`. Geef vanuit `VandaagKwartier`/`bouwStartVragen` de groep van het kind mee (`userLevel`) en filter daar de stappen met `vanafGroep > groep`. Eén regel in `buildTopicQuiz`; de rest blijft hetzelfde.
3. **Groep 4:** dieren-seizoenen-natuur houdt dan voor groep 4 stap 1-3, 6-8 en de eindopdracht over. Liever nog: zet het `level` op `"groep5-7"`, zodat groep 4 het pad niet via de vrije-tekst-voorkeur of het overzicht krijgt. Groep 4 heeft in de mix toch geen natuurpad.
4. **Oefenbank `natuur.groep7`:** dit is het grootste losse probleem. Ongeveer 15 van de 50 vragen gaan over natuur- en scheikunde op VO-niveau (covalente binding, sterk/zwak zuur, pH, kernreactie, newton, osmose). De pool zit ook in de Doorstroomtoets-mix. Die vragen zijn niet te repareren zonder ze te vervangen, dus dat is een beslissing voor Mark. Advies: verhuizen naar `natuur.klas1`/`klas3` en vervangen door vragen op groep-7/8-niveau.

### Andere punten voor Mark (uit de twijfellijst, belangrijkste eerst)

- **Puberteit (groep 7-8):** de stap noemt "zelfdoding-gedachten", maar het nummer van 113 Zelfmoordpreventie (0800-0113) ontbreekt. Ook staat er "paracetamol helpt" als advies aan het kind. Sterk advies: 113 toevoegen en het medicijnadvies veranderen in "vraag je ouder of verzorger".
- **Evolutie:** "6000 jaar = Bijbelse aanname, niet wetenschap" kan gelovige gezinnen kwetsen; beter neutraler formuleren.
- **Groente-advies "250 g":** dat is het advies voor volwassenen. Voor kinderen is het lager. De bron (voedingscentrum.nl) was niet bereikbaar om dit te controleren.
- **Recyclen:** gemeente-afhankelijke antwoorden (koffer, tube tandpasta) en "Tony's Chocolonely = circulair".
- **natuur.klas1 en biologie.klas1** (oefenbank): geen feitfouten gevonden, maar veel stof ligt ver boven brugklasniveau (Avogadro, redox, chemisch evenwicht, ATP).

Niet getest: de live app (geen kliktocht). Alleen de data is gecontroleerd, met build, audit-script en unit-tests.

## Volledige fixlijst

Machineleesbaar: `docs/audit/fixes-natuur.json` (161 toegepaste fixes; per deel in `docs/audit/natuur-fixes/fixes-<A-F>.json`). Per deel: A dieren 48, B lichaam/voeding/puberteit 44, C weer/water/evolutie 15, D mix/milieu/sterren/wetenschappers 11, E brugklas 21, F oefenbank PO 22.

| # | Bestand | Groep | Ernst | Reden |
|---|---|---|---|---|
| 1 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | Mensen staan als aparte groep naast dieren, terwijl stap 2 zegt dat wij zoogdieren zijn. Tegenstrijdig en biologisch onjuist. |
| 2 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | Bacteriën zijn geen schimmels. Ze staan nu als twee aparte groepen. |
| 3 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | SVG zet mensen naast dieren. Aangepast zodat het klopt met de uitleg. |
| 4 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | Taalfout ('voortplant'). |
| 5 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | 'Altijd ~37 °C' klopt niet voor alle zoogdieren en botst met de winterslaap-stap, waarin de egel juist afkoelt. |
| 6 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | Een kip kan wel een stukje fladderen of vliegen. In dierenklassenPo staat 'kip (beetje)'. Nu een vogel die echt niet vliegt. |
| 7 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | SVG: een kip kan een stukje vliegen. |
| 8 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | Een kip kan een stukje vliegen (uitlegPad theorie). |
| 9 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | Niet alle reptielen leggen eieren: de adder en de levendbarende hagedis in Nederland krijgen levende jongen. |
| 10 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | In de stappen ervoor staan 6 groepen (zoogdieren, vogels, vissen, reptielen, amfibieën, insecten). 'Die 5' klopt niet en botst met dierenklassenPo (6 klassen). |
| 11 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | Reptielen en amfibieën zijn twee verschillende groepen (stap 4 legt dat zelf ook uit). |
| 12 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | Op 'Wat is een spin?' is 'Geen insect' een raar antwoord. Vraag en opties lopen nu goed. |
| 13 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | Feitfout in de hint: een krab ademt wél met kieuwen. |
| 14 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | 'Vogel-kuiken' bij nestblijvers botst met 'kuiken' bij nestvlieders. Een kippenkuiken is juist een nestvlieder. |
| 15 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | Het Latijnse woord was de kern van de SVG-tekst (groep 4/5). Nu het Nederlandse woord dat de uitleg gebruikt. |
| 16 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | Zinsbouw: het moet 'Wat betekent' zijn. |
| 17 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | 'Alleen' is te stellig: de lariks verliest zijn naalden en hulst en klimop blijven ook groen. |
| 18 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 3 | Feitfout: een beer houdt winterrust, geen echte winterslaap (zijn temperatuur daalt maar een klein beetje). |
| 19 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | Taal: je houdt winterslaap, je slaapt geen winterslaap. |
| 20 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | Te stellig: gras, granen en veel bomen worden door de wind bestoven. |
| 21 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | Te stellig: windbestuiving bestaat ook (gras, granen). |
| 22 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | 'Niemand eet de vos' is te stellig: een oehoe of wolf pakt soms een (jonge) vos. Nu beperkt tot deze keten. |
| 23 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | Te stellig ('geen natuurlijke vijand'). Jonge dieren worden wel gegeten, en in Nederland is de wolf terug. |
| 24 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 2 | Zelfde te stellige bewering in niveau 'simpeler'. |
| 25 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | Latijnse woorden in de samenvatting voor groep 4/5. Na de fix van 8 okt gebruikt de vraag Nederlandse woorden. |
| 26 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | 'Exoskelet' is jargon voor groep 4/5. De uitleg zegt 'hard pantser'. |
| 27 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | Hints waren onbegrijpelijk voor een kind ('Niet — lang.', 'Tegengestelde.'). |
| 28 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | Hints waren cryptisch ('Half.'). De herfst-hint gaf geen reden waarom het fout is. |
| 29 | learnPaths/dierenSeizoenenNatuur.js | groep4-7 | 1 | Hints 'Niet.' geven geen richting. |
| 30 | learnPaths/dierenklassenPo.js | groep5-8 | 2 | Nuance 'koudbloedig': de temperatuur volgt de omgeving, maar is niet gelijk aan de omgeving (een hagedis in de zon wordt warmer dan de lucht). |
| 31 | learnPaths/dierenklassenPo.js | groep5-8 | 2 | Zelfde nuance als hierboven (uitlegPad). |
| 32 | learnPaths/dierenklassenPo.js | groep5-8 | 2 | 'Te groot' is een verkeerde denkwijze: de groep hangt niet af van de grootte (de hommelvleermuis is kleiner dan sommige insecten). |
| 33 | learnPaths/dierenklassenPo.js | groep5-8 | 2 | Feitfout: een gewone eekhoorn zweeft niet. Het gaat om de vliegende eekhoorn. |
| 34 | learnPaths/dierenklassenPo.js | groep5-8 | 1 | 'Gewrichten in hun vinger waaraan huid zit' is onduidelijk. De vleugel is huid tussen lange vingers. |
| 35 | learnPaths/dierenklassenPo.js | groep5-8 | 2 | LearnPath.jsx schudt de opties (shuffleOptions), dus 'A' is vaak niet de slang. |
| 36 | learnPaths/dierenklassenPo.js | groep5-8 | 2 | De opties worden geschud: 'A = 6' klopt dan vaak niet. |
| 37 | learnPaths/dierenklassenPo.js | groep5-8 | 1 | Afkortingen NZ/NG zijn onbekend voor kinderen. |
| 38 | learnPaths/dierenklassenPo.js | groep5-8 | 1 | Een olifant heeft geen vacht, alleen losse haren. |
| 39 | learnPaths/dierenklassenPo.js | groep5-8 | 1 | Longvissen bestaan. Ook 'primair' is jargon. |
| 40 | learnPaths/dierenklassenPo.js | groep5-8 | 3 | Klassieke fout: bij dagvlinders hangt de pop vrij, zonder cocon. Alleen sommige nachtvlinders, zoals de zijderups, spinnen een cocon. Zelfde fix als 4a3551ca. |
| 41 | learnPaths/dierenklassenPo.js | groep5-8 | 2 | Feitfout: een kever heeft dezelfde soort cyclus (ei → larve → pop → kever). Het verschil is dat de larve geen rups heet. |
| 42 | learnPaths/dierenklassenPo.js | groep5-8 | 2 | Te stellig. Veel haaien worden door orka's of grotere haaien gegeten, en leeuwenwelpen door hyena's. |
| 43 | learnPaths/dierenklassenPo.js | groep5-8 | 2 | De check 'Welk dier leeft op de Noordpool?' rekent de pinguïn fout, terwijl de uitleg hem zonder onderscheid bij 'Pool' zet. |
| 44 | learnPaths/dierenklassenPo.js | groep5-8 | 1 | 'Kannibalisme' is jargon en 'uilen zijn kieskeurig' klopt niet (uilen eten muizen, vogels, kikkers en insecten). |
| 45 | learnPaths/dierenklassenPo.js | groep5-8 | 2 | Vaag: het pad leert '6 dierenklassen', en 'gewervelden' wordt nergens uitgelegd. Met de uitleg in de vraag is het antwoord 5 eenduidig. |
| 46 | learnPaths/dierenklassenPo.js | groep5-8 | 3 | Latijnse term (herbivoor) als enige goede antwoord, terwijl het pad ook aan groep 5-6 wordt aangeboden. Zelfde aanpak als 4a3551ca. |
| 47 | learnPaths/dierenklassenPo.js | groep5-8 | 3 | Latijnse term (omnivoor) als enige goede antwoord voor groep 5-6. De hints ('Plant.', 'Vlees.') waren cryptisch. |
| 48 | learnPaths/dierenklassenPo.js | groep5-8 | 1 | De mierenegel legt ook eieren. |
| 49 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 2 | Feit: de wervels zijn niet allemaal los (heiligbeen en stuitje zijn vergroeid) en de onderkaak is niet vastgegroeid; 'gefuseerd' is onnodig jargon. |
| 50 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 2 | Feit: niet alle 22 schedelbotten zijn samengegroeid; de onderkaak beweegt. |
| 51 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 1 | Jargon 'extremiteiten' voor groep 6-8. |
| 52 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 2 | '4 kamers: 2 boezems + 2 kamers' spreekt zichzelf tegen (boezems zijn geen kamers); verwarrend bij toetsvragen over boezems/kamers. |
| 53 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 2 | Zelfde tegenspraak in uitlegPad-voorbeeld. |
| 54 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 2 | Feit: niet elke slagader draagt zuurstofrijk bloed (longslagader); richting is het kenmerk. |
| 55 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 2 | Feit: longaders dragen zuurstofrijk bloed; richting is het kenmerk. |
| 56 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 1 | Moeilijk woord 'memoriseer' + onduidelijke afkorting. |
| 57 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 1 | Het 'filtert bloed'-antwoord is op toetsen de nier; lever beter omschrijven als opruimen van gifstoffen (voorkomt verwarring met nieren). |
| 58 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 1 | Feit: nieren zitten achter in de buikholte, niet 'in de rug'. |
| 59 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 2 | Leert een misleidend toets-antwoord: op 'welk orgaan filtert bloed' verwacht een toets de nieren. |
| 60 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 1 | SVG-label consistent met uitleg (filteren = nieren). |
| 61 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 2 | Feitfout in SVG: de hersenen (in dezelfde tekening) zitten niet in de romp. |
| 62 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 1 | Copy-regel: nooit alleen 'ouder'. |
| 63 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 2 | Goede optie verraadt zich (enige met toelichting) en de hint bij '5' noemt het antwoord ('3 hoofdsoorten'). |
| 64 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 1 | Vraag onduidelijk geformuleerd. |
| 65 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 1 | 'Transpireren' wordt in dit pad nergens uitgelegd; gewone woord erbij. |
| 66 | learnPaths/lichaamGezondheidPo.js | groep6-8 | 1 | Hint 'Niet primair' suggereert dat zweten een beetje spieren bouwt. |
| 67 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | Feit: er is geen algemeen winter-supplementadvies voor gezonde kinderen vanaf 4 jaar die buiten komen; advies geldt voor bepaalde groepen. |
| 68 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | Feit: supplementadvies geldt voor bepaalde groepen, niet voor iedereen. |
| 69 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | Feit: geen algemeen drogist-supplementadvies; 'vermoeid' is geen vast kenmerk. |
| 70 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | Feit: Voedingscentrum rekent 2 stuks fruit = ~200 g; 80 g is een (WHO-)portie, geen stuk fruit. |
| 71 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | Feit: een stuk fruit ≈ 100 g; een appel weegt meer dan 80 g. |
| 72 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | Feit: diepvriesgroente is even voedzaam als vers (Voedingscentrum); rangorde klopt niet. |
| 73 | learnPaths/gezondeVoedingPo.js | groep6-8 | 1 | Zachte margarine/halvarine hoort juist in de Schijf; roomboter niet. |
| 74 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | Tegenspraak/feit: alcohol 'niet schadelijk in kleine hoeveelheden' botst met het 0,0-advies verderop (en Gezondheidsraad: liever geen alcohol). |
| 75 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | Feit: roomboter staat niet in de Schijf van Vijf; vaknummers kloppen niet met de uitleg (vak 2 = brood, vak 4 = vetten). |
| 76 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | 'Gemiddeld ontbijt' betekent wat kinderen gemiddeld eten (en dat is vaak niet het goede antwoord); de vraag bedoelt gezond. |
| 77 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | Feit: gewone cornflakes bevatten ongeveer 8% suiker, niet 25-40%; percentage weggelaten. |
| 78 | learnPaths/gezondeVoedingPo.js | groep6-8 | 1 | Bron klopt niet: deze grenzen (22,5 / 17,5 / 1,5 g per 100 g) komen van het Britse stoplicht-etiket, niet van het Voedingscentrum. |
| 79 | learnPaths/gezondeVoedingPo.js | groep6-8 | 1 | Kop zegt het omgekeerde van wat bedoeld wordt. |
| 80 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | Te stellig: leefstijl verkleint de kans, maar voorkomt type 2 niet altijd (erfelijkheid speelt ook mee). |
| 81 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | Feit: ook type 2 heeft een sterke erfelijke kant; hint consistent met nieuwe vraag. |
| 82 | learnPaths/gezondeVoedingPo.js | groep6-8 | 2 | Onbewezen percentage + te stellig 'voorkomt'. |
| 83 | learnPaths/gezondeVoedingPo.js | groep6-8 | 1 | Copy-regel: nooit alleen 'ouder'. |
| 84 | learnPaths/pubertijdGroeiPo.js | groep7-8 | 2 | Feit: vergelijkt eerste menstruatie toen met het begin van de puberteit nu; 'onbekend waarom' spreekt de uitlegPad-theorie (betere voeding) tegen. |
| 85 | learnPaths/pubertijdGroeiPo.js | groep7-8 | 2 | Zelfde appels-met-peren-vergelijking in theorie. |
| 86 | learnPaths/pubertijdGroeiPo.js | groep7-8 | 1 | Inconsistent met uitleg (jongens 9-14). |
| 87 | learnPaths/pubertijdGroeiPo.js | groep7-8 | 1 | Copy-regel: nooit alleen 'ouder'. |
| 88 | learnPaths/pubertijdGroeiPo.js | groep7-8 | 1 | Feit: zaadcellen komen uit de testikels; het meeste vocht van sperma komt uit andere klieren. |
| 89 | learnPaths/pubertijdGroeiPo.js | groep7-8 | 1 | Copy-regel: nooit alleen 'ouder'. |
| 90 | learnPaths/pubertijdGroeiPo.js | groep7-8 | 1 | Copy-regel: nooit alleen 'ouder'. |
| 91 | learnPaths/pubertijdGroeiPo.js | groep7-8 | 1 | Copy-regel: nooit alleen 'ouder'. |
| 92 | learnPaths/pubertijdGroeiPo.js | groep7-8 | 1 | Meervoud in vraag, maar één goed antwoord. |
| 93 | learnPaths/weersvoorspellingPo.js | groep6-8 | 3 | Feitfout: bij het KNMI is code geel 'wees alert' en code oranje 'wees voorbereid' (code rood 'neem actie'). Hier waren geel en oranje omgedraaid. |
| 94 | learnPaths/weersvoorspellingPo.js | groep6-8 | 2 | Afleiders 'Magie'/'Niet bestaand' zijn ongeloofwaardig en verraden het antwoord; vervangen door echte kindermisvattingen (bomen/windmolens/golven maken wind). Hints aangepast. |
| 95 | learnPaths/weersvoorspellingPo.js | groep6-8 | 2 | Vraag was krom/onduidelijk ('bliksem is sneller dan donder'); nu eenduidig gevraagd naar de reden (licht sneller dan geluid). |
| 96 | learnPaths/waterkringloopPo.js | groep6-8 | 2 | Mist stond in het lijstje 'vormen van neerslag', maar mist hangt in de lucht en valt niet; botst met eind-toetsvraag 'Wat is neerslag? Regen + sneeuw + hagel'. |
| 97 | learnPaths/waterkringloopPo.js | groep6-8 | 2 | Hint suggereerde dat water op sommige plekken eeuwen in de lucht blijft; dat klopt niet (eeuwen = oceaan/ijs, lucht = dagen). |
| 98 | learnPaths/evolutieMensPo.js | groep6-8 | 3 | Feitfout: Ötzi stond onder 'Bekende fossielen' maar is een ijsmummie (niet versteend), terwijl de les een fossiel juist definieert als versteende rest. |
| 99 | learnPaths/evolutieMensPo.js | groep6-8 | 3 | Zelfde feitfout in theorie van de fossielen-vraag: Ötzi is geen (versteend) fossiel. |
| 100 | learnPaths/evolutieMensPo.js | groep6-8 | 3 | Feitfout: de gorilla-lijn splitste eerder af (~8-10 mln jaar). De gezamenlijke voorouder van ~7 mln jaar geleden geldt voor mens en chimpansee/bonobo (zo staat het ook in de uitlegPad). |
| 101 | learnPaths/evolutieMensPo.js | groep6-8 | 2 | 'Versloeg' is te stellig/onjuist (suggereert oorlog); waarom Neanderthalers uitstierven is onbekend (staat zelf in de tekst) en er was kruising. |
| 102 | learnPaths/evolutieMensPo.js | groep6-8 | 2 | 'Vooral Oost-Afrika' is verouderd en botst met de eigen eind-toets-uitleg (oudste sapiens-fossiel Jebel Irhoud, Marokko, ~300.000 jaar). |
| 103 | learnPaths/evolutieMensPo.js | groep6-8 | 2 | Afleider 'Niet uitgestorven' botst met de eigen uitleg 'vogels zijn eigenlijk nog dino's' (dan is die optie verdedigbaar). Vervangen door eenduidig foute afleider. |
| 104 | learnPaths/evolutieMensPo.js | groep6-8 | 2 | Te stellig: de blindedarm (wormvormig aanhangsel) heeft wel nog een kleine functie (afweer). Restorgaan = oude functie (grotendeels) verloren; sluit aan op eind-toetsoptie 'organen die hun functie verloren'. |
| 105 | learnPaths/evolutieMensPo.js | groep6-8 | 2 | Gemeten snavelveranderingen (Grant) kwamen door droogtes/natte jaren (El Niño), niet door klimaatverandering. |
| 106 | learnPaths/evolutieMensPo.js | groep6-8 | 1 | Hint was verwarrend/onjuist geformuleerd ('leefden tot 1 mln jr terug'; Homo erectus leefde tot ~110.000 jaar geleden). |
| 107 | learnPaths/evolutieMensPo.js | groep6-8 | 1 | Grondvinken op de Galápagos kraken harde zaden, geen noten. |
| 108 | learnPaths/recyclenAfvalPo.js | groep6-8 | 3 | Feitfout: een plastic fles van precies 1 liter heeft €0,15 statiegeld; €0,25 geldt pas voor flessen GROTER dan 1 liter. Met '1 liter of meer' is het antwoord €0,25 fout voor een literfles. |
| 109 | learnPaths/recyclenAfvalPo.js | groep6-8 | 3 | Feitfout in uitlegPad: grens ligt bij 'groter dan 1 liter' (literfles = €0,15), niet bij '1L+'. Consistent met de gecorrigeerde eind-toetsvraag. |
| 110 | learnPaths/wereldorientatieMixPo.js | groep7-8 | 3 | Feitfout: chloroplasten zijn geen 'groene cellen' maar korreltjes ín de cel. 'Geen leven / alle voedsel' is te stellig (er bestaat leven zonder zonlicht, bv. bij diepzeebronnen). Nederlandse woorden bladgroenkorrel/bladgroen erbij voor groep 7-8. |
| 111 | learnPaths/wereldorientatieMixPo.js | groep7-8 | 2 | Hint is fout: bloemen openen is géén onderdeel van fotosynthese. Hint suggereert dat wel. |
| 112 | learnPaths/wereldorientatieMixPo.js | groep7-8 | 1 | 'Koudbloedig' zonder nuance: reptielen zijn niet koud, hun temperatuur volgt de omgeving. |
| 113 | learnPaths/sterrenPlaneten.js | groep5-8 | 2 | Hint 'Niet primair' bij Maan suggereert dat de maan een bijoorzaak van de seizoenen is (fout). 'Bijna onveranderd' is vaag voor groep 5. Nieuwe hints geven richting zonder het antwoord te noemen; aarde staat begin januari het dichtst bij de zon. |
| 114 | learnPaths/sterrenPlaneten.js | groep5-8 | 1 | Inconsistent met de stap-uitleg (23,5°). |
| 115 | learnPaths/bekendeWetenschappersPo.js | groep6-8 | 2 | Biologisch onjuist: een individu 'sterft niet uit'; natuurlijke selectie = minder overleven en minder nakomelingen. |
| 116 | learnPaths/bekendeWetenschappersPo.js | groep6-8 | 2 | Zelfde onjuistheid in uitlegPad van 'Wat bedacht Darwin?': eigenschappen 'sterven niet uit'. |
| 117 | learnPaths/bekendeWetenschappersPo.js | groep6-8 | 1 | Darwinvinken met dikke snavel kraken harde zaden, geen noten. |
| 118 | learnPaths/bekendeWetenschappersPo.js | groep6-8 | 1 | Idem in uitlegPad-voorbeeld (zaden, geen noten). |
| 119 | learnPaths/celBiologie.js | klas1-3 | 1 | Spelfout: 'fotosynthese' is één woord (vraag 'Wat doen mitochondriën?'). |
| 120 | learnPaths/celBiologie.js | klas1-3 | 2 | Vraag 'Een plant verwelkt': de vacuole is bij verwelken niet 'leeg' maar heeft water verloren (te stellig). Bovendien was het goede antwoord als enige lang mét toelichting en verraadde het zich; nu even kort als de afleiders. |
| 121 | learnPaths/celBiologie.js | klas1-3 | 2 | Stap-uitleg consistent met de verbeterde optie: vacuole verliest water, wordt niet helemaal leeg. |
| 122 | learnPaths/celBiologie.js | klas1-3 | 2 | uitlegPad consistent met verbeterde optie (vacuole verliest water, is niet leeg). |
| 123 | learnPaths/celBiologie.js | klas1-3 | 2 | Niveau 'basis' consistent met de nieuwe optietekst. |
| 124 | learnPaths/celBiologie.js | klas1-3 | 2 | Feitelijk onjuist gemengd: een dierlijke cel snoert in (geen scheidingswand); alleen bij een plantcel ontstaat een nieuwe wand. |
| 125 | learnPaths/celBiologie.js | klas1-3 | 2 | Onvolledig: schimmels hebben ook een celwand (van chitine, staat zelfs in de uitlegPad van de peptidoglycaan-vraag). |
| 126 | learnPaths/fotosyntheseBiologie.js | klas1-2 | 2 | Misconceptie 'planten ademen alleen 's nachts': ademhaling (verbranding) gaat bij planten dag en nacht door. |
| 127 | learnPaths/fotosyntheseBiologie.js | klas1-2 | 2 | CO₂ opnemen voor fotosynthese is geen ademhaling; 'ademt CO₂ in' versterkt de bekende misconceptie dat planten andersom ademen. |
| 128 | learnPaths/fotosyntheseBiologie.js | klas1-2 | 3 | Feitfout: planten hebben niet alleen 's nachts zuurstof nodig; ademhaling gaat dag en nacht door, ook in de wortels (daarom rotten wortels in natte, zuurstofloze grond). |
| 129 | learnPaths/fotosyntheseBiologie.js | klas1-2 | 2 | Gasuitwisseling voor fotosynthese is geen ademhaling; 'ademt CO₂ in en O₂ uit' leert de misconceptie dat planten omgekeerd ademen. |
| 130 | learnPaths/fotosyntheseBiologie.js | klas1-2 | 3 | Feitfout/kernmisconceptie: planten ademen niet 'andersom' en niet alleen 's nachts. Ademhaling (O₂ in, CO₂ uit) doen planten altijd; fotosynthese is het omgekeerde proces, alleen bij licht. |
| 131 | learnPaths/fotosyntheseBiologie.js | klas1-2 | 2 | Planten ademen niet alleen 's nachts; zin was bovendien grammaticaal onvolledig ('gebruiken zelf ook bij ademhaling'). |
| 132 | learnPaths/fotosyntheseBiologie.js | klas1-2 | 2 | 'zelfs' suggereert dat ademen alleen 's nachts gebeurt; consistent maken met 'ademhaling dag én nacht'. |
| 133 | learnPaths/fotosyntheseBiologie.js | klas1-2 | 2 | Een den verliest wél (oude) naalden, vaak juist in de herfst — dat zegt de eindvraag van hetzelfde pad ook ('verliezen wel beetje per jaar'). Vraag was dus feitelijk onjuist en in tegenspraak met de eindvraag. |
| 134 | learnPaths/fotosyntheseBiologie.js | klas1-2 | 2 | Vraag + opties liepen niet: '... verliest in de herfst ... Alleen in zomer' is onzin als antwoord, en de hint 'Nee, behouden zomer en winter' hoorde bij geen enkele optie. Nu eenduidige vraag met vier passende opties; goed antwoord blijft op index 0. |
| 135 | data/sampleQuestions.js | klas1 | 3 | Feitfout in uitleg: biceps en triceps werken niet tegelijk ('biceps buigt, triceps strekt'). Bij een antagonistisch paar trekt de één samen terwijl de ander ontspant. |
| 136 | data/sampleQuestions.js | klas1 | 2 | De kcal-getallen in de opties verraden het antwoord (9 is het hoogste). Getallen staan al in de uitleg. answer blijft 1 (Vetten). |
| 137 | data/textbookQuestions.js | klas1 (havo/vwo) | 3 | Twee goede antwoorden: in je tong zit ook tast (je voelt warm/koud en de vorm van eten). 'Tast' vervangen door 'Zicht'; answer blijft 0 (Smaak). |
| 138 | data/textbookQuestions.js | klas1 (havo/vwo) | 2 | Veel bloemplanten planten zich ook ongeslachtelijk voort (uitlopers, wortelstokken, knollen), dus 'Via wortels' en 'Door verdeling' waren deels verdedigbaar. Met 'geslachtelijk' (BvJ-term klas 1) is er één goed antwoord. |
| 139 | data/textbookQuestions.js | klas1 (havo/vwo) | 1 | Spelling: 'zaadcellen' zonder koppelteken. |
| 140 | data/sampleQuestions.js | groep3+groep4 (groep4 valt via alias terug op groep3) | 2 | Veel cactussen bloeien juist in de lente: twee verdedigbare antwoorden. Zonnebloem bloeit in de zomer en is eenduidig fout. |
| 141 | data/sampleQuestions.js | groep3+groep4 (groep4 valt via alias terug op groep3) | 1 | Groep 3/4: 'CO2' is een vakterm die hier niets toevoegt. |
| 142 | data/sampleQuestions.js | groep3+groep4 (groep4 valt via alias terug op groep3) | 1 | Groep 3/4: 'chlorofyl' vervangen door het alledaagse 'bladgroen'. |
| 143 | data/sampleQuestions.js | groep3+groep4 (groep4 valt via alias terug op groep3) | 2 | Het goede antwoord was als enige lang en met toelichting (verraadt zich). Uitleg gebruikte 'larve' en 'verpopt': te moeilijk voor groep 3/4. |
| 144 | data/sampleQuestions.js | groep3+groep4 (groep4 valt via alias terug op groep3) | 1 | Groep 3/4: 'functie' is geen alledaags woord. |
| 145 | data/sampleQuestions.js | groep3+groep4 (groep4 valt via alias terug op groep3) | 1 | Groep 3/4: 'functie' is geen alledaags woord. |
| 146 | data/sampleQuestions.js | groep3+groep4 (groep4 valt via alias terug op groep3) | 1 | Groep 3/4: 'fotosynthese' is te moeilijk; 'geen bladgroen' zegt hetzelfde in kindertaal. |
| 147 | data/sampleQuestions.js | groep3+groep4 (groep4 valt via alias terug op groep3) | 1 | Groep 3/4: lange, ambtelijke zin ('stelt in staat') vervangen door twee korte zinnen. |
| 148 | data/sampleQuestions.js | groep5 (niveau 'Groep 5-6') | 2 | Het goede antwoord herhaalt het woord uit de vraag (zoogdier → zoogt) en verraadt zich zo. |
| 149 | data/sampleQuestions.js | groep5 (niveau 'Groep 5-6') | 3 | Latijns woord 'herbivoor' was de kern van de vraag in groep 5-6. Zelfde aanpak als in commit 4a3551ca: vraag met diernamen, Latijnse term alleen als extra in de uitleg. Antwoord blijft op index 2. |
| 150 | data/sampleQuestions.js | groep5 (niveau 'Groep 5-6') | 3 | Latijns woord 'carnivoor' was de kern van de vraag in groep 5-6. Vraag met diernamen; antwoord blijft op index 0. |
| 151 | data/sampleQuestions.js | groep5 (niveau 'Groep 5-6') | 3 | Latijns woord 'omnivoor' was de kern van de vraag in groep 5-6. Vraag met diernamen; antwoord blijft op index 1. |
| 152 | data/sampleQuestions.js | groep5 (niveau 'Groep 5-6') | 3 | Drie Latijnse termen waren de kern van de vraag in groep 5-6. Met diernamen getoetst; Latijnse woorden alleen nog als extra in de uitleg. Antwoord blijft op index 3. |
| 153 | data/sampleQuestions.js | groep5 (niveau 'Groep 5-6') | 3 | 'Evaporatie' is een Latijns/Engels vakwoord dat in de Nederlandse basisschool niet gebruikt wordt; het was de kern van de vraag in groep 5-6. Antwoord blijft op index 2. |
| 154 | data/sampleQuestions.js | groep5 (niveau 'Groep 5-6') | 1 | Uitleg te stellig (niet alle schimmels leven van dood materiaal; sommige leven samen met boomwortels of als parasiet) en met jargon ('vruchtlichamen', 'organisch materiaal') voor groep 5-6. |
| 155 | data/sampleQuestions.js | groep5 (niveau 'Groep 5-6') | 2 | Regenwormen zijn geen afbrekers (reducenten) in de schoolbiologie maar opruimers/afvaleters; uitleg gebruikte ook nog een derde term 'decomponenten'. |
| 156 | data/sampleQuestions.js | groep5 (niveau 'Groep 5-6') | 1 | Uitleg sprak zichzelf tegen: 'vogels' als dagdieren en daarna uilen als nachtdieren. |
| 157 | data/sampleQuestions.js | groep5 (niveau 'Groep 5-6') | 2 | 'Amfibie' zonder uitleg is in groep 5-6 een onbekend woord; een voorbeeld in de vraag maakt hem oplosbaar. |
| 158 | data/sampleQuestions.js | groep7 (niveau 'Groep 7-8' + Doorstroomtoets-wereldoriëntatie-mix) | 2 | Groep 7-8: 'chloroplasten' (VO-term) was de kern van alle opties; vervangen door 'bladgroenkorrels', Latijnse term alleen als extra in de uitleg. Antwoord blijft op index 2. |
| 159 | data/sampleQuestions.js | groep8 (natuur.groep8-pool) | 1 | Uitleg sprak zichzelf tegen: 'reptielen ook' (harde schaal) en tegelijk 'lederachtige schaal'. |
| 160 | data/textbookQuestions.js | groep5-8 (Naut/Meander/Brandaan, defaultLevel groep5) | 2 | 'Duurzaam' is rekbaar: kernenergie wordt in het Nederlandse debat soms ook duurzaam/CO2-arm genoemd, dus twee verdedigbare antwoorden. 'Raken nooit op' is eenduidig en sluit aan bij de uitleg. |
| 161 | data/textbookQuestions.js | groep5-8 (Naut/Meander/Brandaan, defaultLevel groep5) | 1 | Uitleg consistent maken met de nieuwe vraag ('raken nooit op'): uranium raakt ook op. |

## Volledige twijfellijst

Zie `docs/audit/TWIJFEL-natuur.md` (per deel A-F, met de groep-4/5-tabel per stap van dieren-seizoenen-natuur).
