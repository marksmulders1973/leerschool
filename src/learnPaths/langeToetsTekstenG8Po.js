// Leerpad: Lange teksten op de echte toets — volhouden en slim werken
// Op de Doorstroomtoets zijn leesteksten ~300-400 woorden met 4-6 vragen
// per tekst. Dit pad traint uithoudingsvermogen + aanpak: eerst globaal
// lezen, dan per vraag terugzoeken, tijd verdelen, niet blijven hangen.
//
// Alle teksten zijn 100% eigen werk. 4 stappen, 18 checks totaal.

const stepEmojis = ["💡", "🦭", "🌠", "🧭"];

const chapters = [
  { letter: "A", title: "Slim aanpakken", emoji: "💡", from: 0, to: 0 },
  { letter: "B", title: "Training 1 — informatieve tekst", emoji: "🦭", from: 1, to: 1 },
  { letter: "C", title: "Training 2 — verhaal", emoji: "🌠", from: 2, to: 2 },
  { letter: "D", title: "Terugkijken op je aanpak", emoji: "🧭", from: 3, to: 3 },
];

// ── Tekst voor stap 2: eigen informatieve tekst (~360 woorden) ──────
const tekstZeehonden = `**De zeehondenopvang van Terdam**

Aan de rand van het dorp Terdam, vlak achter de dijk, staat een bijzonder gebouw: de zeehondenopvang. Hier worden zieke en verzwakte zeehonden verzorgd tot ze sterk genoeg zijn om terug te gaan naar zee. De opvang bestaat al meer dan dertig jaar en wordt gerund door een klein team van verzorgers en heel veel vrijwilligers.

Elk jaar komen er tussen de honderd en tweehonderd zeehonden binnen. De meeste zijn jonge dieren die hun moeder zijn kwijtgeraakt. Zulke jonkies noemen verzorgers 'huilers', omdat ze op het strand liggen te roepen om hun moeder. Een huiler die te lang alleen blijft, wordt zwak en kan niet meer zelf jagen.

Wie een zeehond op het strand ziet liggen, moet vooral afstand houden. Dat klinkt misschien onaardig, maar het heeft een goede reden. De moeder ligt vaak vlakbij in zee te wachten. Komen er mensen te dicht bij het jong, dan durft zij niet meer terug te komen. Bel daarom altijd eerst de opvang; die stuurt een ervaren vrijwilliger om te kijken of hulp echt nodig is.

In de opvang krijgt elke zeehond een eigen bad en een naam. De verzorgers geven de dieren eerst vispap door een slangetje, want zelf eten lukt vaak nog niet. Na een paar weken leren de zeehonden hele vissen vangen in een groot buitenbad. Pas als een dier minstens veertig kilo weegt, mag het terug naar zee.

Het vrijlaten is elke keer weer een feest. Honderden mensen komen kijken hoe de zeehonden in hun reiskisten naar het strand worden gebracht. Zodra de deurtjes opengaan, schuifelen de dieren over het zand naar de golven. Sommige kijken nog één keer om, andere duiken meteen het water in.

De opvang krijgt geen geld van de overheid. Al het voer, de medicijnen en de baden worden betaald met giften van gewone mensen. Daarom kun je een zeehond 'adopteren': voor een klein bedrag per maand help je mee, en je krijgt een foto en berichtjes over jouw dier. Zo zorgen duizenden mensen er samen voor dat de opvang kan blijven bestaan.`;

// ── Tekst voor stap 3: eigen verhalende tekst (~350 woorden) ────────
const tekstSterren = `**De nacht van de vallende sterren**

Sanne kon niet slapen. Vanavond zou het gebeuren: opa Berend had beloofd dat ze samen naar de vallende sterren gingen kijken. Volgens de krant waren er deze nacht wel honderd per uur te zien — als het tenminste helder bleef.

Om elf uur klopte opa zachtjes op haar deur. "Kom, sterrenkijker," fluisterde hij. "De hemel is open." Sanne trok snel haar dikke trui aan en pakte de thermoskan met warme chocolademelk die ze 's middags al had klaargezet.

Achter het huis van opa, buiten het dorp Weverlo, was het pikdonker. Geen lantaarnpaal te zien. Ze legden twee luchtbedden op het gras en kropen onder een stapel dekens. "Nu niets meer zeggen," zei opa. "Alleen kijken."

Eerst zag Sanne helemaal niets bijzonders. Haar ogen moesten wennen aan het donker, had opa uitgelegd, en dat duurde zeker een kwartier. Ze begon te twijfelen. Straks was alles voor niets en had de krant het mis.

Toen gebeurde het. Een dunne streep licht schoot langs de hemel, zo snel dat Sanne bijna dacht dat ze het zich verbeeldde. "Daar!" riep ze, veel te hard. Opa grinnikte. "Die telt. Eén."

Daarna ging het snel. Steeds meer strepen flitsten voorbij, soms twee tegelijk. Sanne vergat de kou en zelfs de chocolademelk. Bij elke vallende ster deed ze stiekem een wens — al mocht je die van opa nooit hardop zeggen, anders kwam hij niet uit.

Ver na middernacht begonnen haar ogen dicht te vallen. Opa tilde de dekens op. "Kom, we gaan. Sterren kijken is topsport." Binnen bleek de chocolademelk nog steeds warm. Ze dronken samen een beker leeg aan de keukentafel, terwijl opa vertelde dat hij vroeger met zíjn opa ook zo naar de sterren had gekeken.

Die nacht droomde Sanne van strepen licht. Toen ze de volgende ochtend wakker werd, lag er een briefje naast haar bed. "Voor de sterrenkijker," stond erop, in opa's kriebelige handschrift. "Tot de volgende heldere nacht." Sanne hing het briefje boven haar bureau. Ze wist precies wat ze gewenst had — maar dat vertelde ze aan niemand.`;

const steps = [
  // ── Stap 1 ──────────────────────────────────────────────────────
  {
    title: "Slim aanpakken — je plan voor lange teksten",
    explanation: `Op de echte Doorstroomtoets zijn de leesteksten lang: zo'n **300 tot 400 woorden**, met wel **4 tot 6 vragen per tekst**. Dat vraagt om uithoudingsvermogen én een slim plan. In dit deel train je allebei — met teksten die net zo lang zijn als op de echte toets.

**Eerst lezen of eerst de vragen?**
Sommige kinderen lezen eerst alle vragen. Maar bij zes vragen onthoud je die toch niet allemaal. Dit werkt beter: **Lees de tekst eerst één keer rustig door om te weten waar alles staat.** Je hoeft nog niets te onthouden — je maakt een soort plattegrond in je hoofd: waar gaat elke alinea over? Daarna pak je de vragen één voor één en zoek je per vraag terug in de tekst. Opzoeken mag — dat hoort juist bij de toets!

**Verdeel je tijd.**
Reken op ongeveer twee minuten per vraag. Kijk af en toe even hoe ver je bent: ben je bij vraag 3 van de 6 en is de helft van je tijd om? Dan zit je precies goed.

**Blijf niet hangen.**
Kom je een lastige vraag tegen? **Sla de vraag dan over en kom er aan het einde op terug.** Eén moeilijke vraag mag nooit de tijd opeten van vijf vragen die je wél kunt maken. Vaak snap je de lastige vraag later ineens wel, omdat de andere vragen je al door de tekst hebben geholpen.

Test je plan met de twee vragen hieronder — daarna begint de echte training.`,
    checks: [
      {
        q: "Je krijgt een lange tekst met zes vragen. Wat is de slimste eerste stap?",
        options: [
          "De tekst één keer rustig doorlezen, zodat je weet waar alles staat",
          "Alle zes de vragen uit je hoofd leren voordat je begint te lezen",
          "Meteen antwoorden invullen zonder de tekst te bekijken",
          "De hele tekst woord voor woord uit je hoofd leren",
        ],
        answer: 0,
        evidence: "Lees de tekst eerst één keer rustig door om te weten waar alles staat.",
        wrongHints: [
          null,
          "Zes vragen onthouden terwijl je leest — lukt dat echt? Wat zegt het plan over wat je met de tékst doet?",
          "Waar haal je dan je antwoorden vandaan? Denk aan de plattegrond in je hoofd.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Waarom niet eerst de vragen?", tekst: "Bij één of twee vragen kan dat werken. Maar bij zes vragen raak je ze kwijt terwijl je leest — en dan heb je er niets aan." },
            { titel: "De plattegrond-truc", tekst: "Lees de tekst één keer rustig. Je hoeft niets te onthouden; je wilt alleen weten: waar gaat elke alinea óngeveer over? Dat is je plattegrond." },
            { titel: "Daarna per vraag terug", tekst: "Bij elke vraag denk je: in welke alinea stond dat? Dankzij je plattegrond vind je de goede plek snel terug." },
          ],
          woorden: [
            { woord: "plattegrond", uitleg: "Een kaartje van waar alles ligt. Hier: weten in welke alinea welk onderwerp staat." },
            { woord: "alinea", uitleg: "Een stukje tekst dat bij elkaar hoort, met een witregel ervoor en erna." },
          ],
          theorie: "**Globaal lezen — wat is dat?**\n\nGlobaal lezen betekent: rustig doorlezen om de grote lijn te snappen, zonder elk detail te onthouden.\n\nZo bouw je je plattegrond:\n1. Lees de titel: waar gaat het over?\n2. Lees de tekst één keer door.\n3. Denk per alinea één woord: 'dit stukje gaat over ...'\n\nDetails (getallen, namen, jaartallen) hoef je NIET te onthouden — die zoek je later per vraag op. Daarom is een lange tekst minder eng dan hij lijkt.",
          voorbeelden: [
            { type: "plattegrond", tekst: "Tekst over de zeehondenopvang? Plattegrond: alinea 1 = wat de opvang is, alinea 2 = jonge dieren, alinea 3 = afstand houden, alinea 4 = verzorging... Vraag over eten geven? Dan weet je meteen: alinea 4!" },
          ],
          basiskennis: [
            { onderwerp: "Opzoeken hoort erbij", uitleg: "Een leestoets test niet je geheugen maar je begrip. Terugzoeken in de tekst is dus geen valsspelen — het is precies de bedoeling." },
          ],
          niveaus: {
            basis: "Denk aan de plattegrond in je hoofd: wat moet je dóén om die te kunnen maken?",
            simpeler: "Moet je bij een leestoets alles uit je hoofd kennen, of mag je terugkijken? Wat doe je dan als allereerste met de tekst?",
            nogSimpeler: "Kies de stap waarbij je rustig kennismaakt met de tekst, zonder iets te hoeven onthouden.",
          },
        },
      },
      {
        q: "Je hebt een tekst globaal gelezen. Wat weet je daarna?",
        options: [
          "Waar elk onderwerp ongeveer in de tekst staat",
          "Alle details en getallen uit je hoofd",
          "De hele tekst woord voor woord",
          "Het antwoord op elke vraag",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Details onthouden is niet het doel van globaal lezen — wat bouw je dan op?",
          "Dan zou globaal lezen hetzelfde zijn als alles uit je hoofd leren. Wat kost minder moeite?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is globaal lezen?", tekst: "Globaal lezen = een keer rustig doorlezen om te weten waar elk stuk over gaat. Je onthoud geen details — je maakt een plattegrond." },
            { titel: "Wat heb je dan?", tekst: "Je weet: alinea 1 gaat over X, alinea 2 over Y. Dat is genoeg om bij elke vraag snel de goede alinea te vinden." },
            { titel: "Geen fotografie", tekst: "Je hoeft de tekst niet te fotograferen met je hersens. Details zoek je op — dat spaart energie voor het begrijpen." },
          ],
          niveaus: {
            basis: "Na globaal lezen heb je een plattegrond. Wat staat er op een plattegrond?",
            simpeler: "Wat is makkelijker: weten in welke la een sok zit, of alle laden uit je hoofd kennen?",
            nogSimpeler: "Zoek het antwoord dat zegt wáár dingen staan — niet wát er precies staat.",
          },
        },
      },
      {
        q: "Waarom is het handig om bij een leestoets terug te bladeren naar de tekst?",
        options: [
          "Omdat de tekst het bewijs bevat voor het juiste antwoord",
          "Omdat terugbladeren meer punten oplevert dan uit je hoofd antwoorden",
          "Omdat je zo de tekst uit je hoofd leert",
          "Omdat de toets dit verplicht stelt",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Alle antwoorden leveren evenveel punten op. Wat maakt terugbladeren wél slim?",
          "Dat is niet het doel — je leest terug om één ding te vinden, niet om alles te onthouden.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat zit er in de tekst?", tekst: "De tekst bevat alle informatie die je nodig hebt. Toetsenmakers zetten valstrik-opties ertussen die bijna kloppen maar net niet." },
            { titel: "Terugbladeren = controleren", tekst: "Door de zin in de tekst terug te zoeken, zie je of je antwoord echt woordelijk klopt. Dat voorkomt de 'bijna-goed'-fout." },
            { titel: "Gebruik je plattegrond", tekst: "Je hoeft niet de hele tekst opnieuw te lezen — alleen het stukje waar de vraag over gaat. Dat is snel dankzij je plattegrond." },
          ],
          niveaus: {
            basis: "De tekst is je bewijs. Wat levert terugbladeren je op?",
            simpeler: "Liever gokken of zekerheid halen uit de tekst? Wat kost je minder fouten?",
            nogSimpeler: "Waarom kijk je in de tekst als je twijfelt?",
          },
        },
      },
      {
        q: "Vraag 3 is heel lastig; je zit er al drie minuten op te puzzelen. Wat is de slimste keuze?",
        options: [
          "De vraag overslaan en er aan het einde op terugkomen",
          "Net zo lang doorpuzzelen tot je het zeker weet",
          "Stoppen met de hele tekst en niets meer invullen",
          "Snel iets aankruisen en er nooit meer naar kijken",
        ],
        answer: 0,
        evidence: "Sla de vraag dan over en kom er aan het einde op terug.",
        wrongHints: [
          null,
          "Wat gebeurt er met de tijd voor de ándere vijf vragen als je hier blijft hangen?",
          null,
          "Een gok kan altijd nog — maar is er een manier om jezelf eerst nog een tweede kans te geven?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Reken het eens uit", tekst: "Zes vragen, ongeveer twee minuten per vraag. Blijf je vijf minuten hangen op één vraag, dan snoep je tijd af van vragen die je wél kunt maken." },
            { titel: "Overslaan is niet opgeven", tekst: "Je slaat de vraag alleen even over. Aan het einde, als de makkelijke vragen binnen zijn, kom je terug met frisse ogen." },
            { titel: "Vaak lukt het dan wél", tekst: "De andere vragen hebben je intussen door de hele tekst gejaagd. Daardoor snap je de tekst beter — en ineens valt het kwartje bij die lastige vraag." },
          ],
          woorden: [
            { woord: "blijven hangen", uitleg: "Veel te lang bezig blijven met één ding, terwijl de rest ook nog moet gebeuren." },
          ],
          theorie: "**Tijdverdeling — de gouden regel**\n\nElke vraag is evenveel punten waard. Een moeilijke vraag levert dus níét meer op dan een makkelijke.\n\nDaarom:\n- Ongeveer twee minuten per vraag als richtlijn.\n- Lastige vraag? Zet een klein streepje bij het nummer en ga door.\n- Aan het einde: terug naar je streepjes.\n- Laat aan het allereind nooit een vraag leeg — een keuze maken is altijd beter dan niets.\n\nZo haal je eerst alle punten binnen die je zéker kunt pakken.",
          voorbeelden: [
            { type: "rekensom", tekst: "12 minuten voor 6 vragen. Vraag 2 kost je 6 minuten → nog maar 6 minuten voor 5 vragen. Sla je vraag 2 over na 2 minuten, dan houd je ruimte voor alles." },
          ],
          basiskennis: [
            { onderwerp: "Elke vraag telt even zwaar", uitleg: "Op de toets krijg je geen extra punten voor moeilijke vragen. Pak eerst de punten die je makkelijk kunt halen." },
          ],
          niveaus: {
            basis: "Elke vraag is evenveel waard. Welke keuze zorgt dat je genoeg tijd overhoudt voor de rest, zonder deze vraag helemaal weg te gooien?",
            simpeler: "Je wilt twee dingen tegelijk: nu verder kunnen én deze vraag later nog een kans geven. Welke optie regelt allebei?",
            nogSimpeler: "Kies de optie waarbij je verder gaat én later nog terugkomt.",
          },
        },
      },
    ],
  },

  // ── Stap 2 ──────────────────────────────────────────────────────
  {
    title: "Training 1 — een lange informatieve tekst",
    explanation: tekstZeehonden + `

Dit is 'm: een tekst zo lang als op de echte toets, met zeven vragen van allerlei soorten door elkaar — een feitje opzoeken, een verwijswoord, de hoofdgedachte, een woord uit de tekst en een conclusie.

**Gebruik je plan:**
1. Je hebt de tekst nu één keer gelezen — je plattegrond is klaar.
2. Pak de vragen één voor één en zoek per vraag de juiste alinea terug.
3. Lastige vraag? Overslaan, aan het einde terugkomen.

Neem de tijd om terug te bladeren — opzoeken hoort erbij. Succes!`,
    checks: [
      {
        q: "Hoe zwaar moet een zeehond minstens zijn voordat hij terug naar zee mag?",
        options: ["Veertig kilo", "Twintig kilo", "Honderd kilo", "Dat staat niet in de tekst"],
        answer: 0,
        evidence: "Pas als een dier minstens veertig kilo weegt, mag het terug naar zee.",
        wrongHints: [
          null,
          null,
          "Honderd en tweehonderd staan ook in de tekst, maar die getallen gaan over hoevéél zeehonden er per jaar binnenkomen. Zoek de zin over teruggaan naar zee.",
          "Jawel — zoek in de alinea over het buitenbad naar een getal met 'kilo' erachter.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat voor vraag is dit?", tekst: "Een opzoekvraag: het antwoord staat létterlijk in de tekst. Je hoeft alleen de goede zin te vinden." },
            { titel: "Gebruik je plattegrond", tekst: "Waar ging het over eten en groeien? In de alinea over de verzorging, met het buitenbad. Zoek daar naar een gewicht." },
            { titel: "Lees precies", tekst: "De zin begint met 'Pas als...' — dat woordje 'pas' vertelt je: eerder mag het dier níét terug. Het getal in die zin is je antwoord." },
          ],
          woorden: [
            { woord: "opzoekvraag", uitleg: "Een vraag waarvan het antwoord letterlijk in de tekst staat. Terugzoeken dus!" },
          ],
          theorie: "**Opzoekvragen — snel en precies**\n\nZo pak je ze aan:\n1. Onderstreep het belangrijkste woord in de vraag (hier: een gewicht, dus zoek 'kilo').\n2. Bedenk met je plattegrond in welke alinea dat onderwerp stond.\n3. Scan die alinea op het zoekwoord — je hoeft niet alles opnieuw te lezen.\n\nValkuil: in lange teksten staan méérdere getallen. Controleer altijd of het getal dat je vindt écht bij de vraag past.",
          voorbeelden: [
            { type: "scannen", tekst: "Vraag over een jaartal? Laat je ogen over de tekst glijden en stop alleen bij getallen. Zo vind je in een lange tekst binnen tien seconden de goede zin." },
          ],
          basiskennis: [
            { onderwerp: "Meerdere getallen = extra opletten", uitleg: "Toetsenmakers zetten graag verschillende getallen in één tekst. Check altijd waar jóúw getal over gaat." },
          ],
          niveaus: {
            basis: "Zoek in de alinea over het buitenbad naar het woord 'kilo'. Welk getal staat ervoor?",
            simpeler: "Er staan meer getallen in de tekst. Jij zoekt het getal in de zin die over terug naar zee gaan gaat.",
            nogSimpeler: "Zoek de zin die begint met 'Pas als een dier...' en lees het getal.",
          },
        },
      },
      {
        q: "In de tekst staat het woord 'huilers'. Wat betekent dat woord hier?",
        options: [
          "Jonge zeehonden die hun moeder kwijt zijn en om haar roepen",
          "Verzorgers die verdrietig worden van zielige dieren",
          "Harde golven die tegen de dijk slaan",
          "Zeehonden die niet van water houden",
        ],
        answer: 0,
        evidence: "Zulke jonkies noemen verzorgers 'huilers', omdat ze op het strand liggen te roepen om hun moeder.",
        wrongHints: [
          null,
          "Lees de zin waarin het woord staat: gaat die over mensen of over jonge dieren?",
          "Kan een golf om iemand roepen? Kijk naar het woord 'jonkies' in dezelfde zin.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het woord op", tekst: "Vind 'huilers' in de tekst. Het staat in de tweede alinea, tussen aanhalingstekens — een teken dat het een bijnaam is." },
            { titel: "Lees eromheen", tekst: "De zin zelf legt het uit: 'Zulke jonkies noemen verzorgers huilers, omdat...' Het woordje 'omdat' geeft je de reden — en dus de betekenis." },
            { titel: "Controleer", tekst: "Vul je antwoord in op de plek van het woord. Klopt de zin dan nog met de rest van de alinea? Dan zit je goed." },
          ],
          woorden: [
            { woord: "uit de context halen", uitleg: "De betekenis van een woord ontdekken door de zinnen eromheen goed te lezen." },
            { woord: "jonkies", uitleg: "Jonge dieren — hier: jonge zeehonden." },
          ],
          theorie: "**Woordbetekenis uit de tekst halen**\n\nOp de toets komen woorden voor die je niet kent. Geen paniek — de tekst helpt je bijna altijd:\n\n1. Lees de zin mét het woord.\n2. Lees de zin ervóór en erná.\n3. Let op hulpwoorden: 'omdat' (reden), 'dat betekent' (uitleg), een dubbele punt (uitleg volgt), aanhalingstekens (bijnaam of speciale betekenis).\n\nHier doet 'omdat' al het werk: de uitleg staat in dezelfde zin.",
          voorbeelden: [
            { type: "omdat-truc", tekst: "'De kudde ging schuilen, omdat er noodweer aankwam.' Ken je 'noodweer' niet? Het woordje 'omdat' + 'schuilen' vertellen je: heel slecht weer." },
          ],
          basiskennis: [
            { onderwerp: "Aanhalingstekens = let op", uitleg: "Staat een woord tussen aanhalingstekens? Dan heeft het vaak een speciale betekenis die de tekst zelf uitlegt." },
          ],
          niveaus: {
            basis: "Zoek de zin met het woord en let op wat er na 'omdat' komt — daar staat de uitleg.",
            simpeler: "Over wie gaat de zin: over mensen, golven of jonge dieren? En wat doen ze op het strand?",
            nogSimpeler: "Lees de zin: 'Zulke jonkies noemen verzorgers...' — wie zijn die jonkies en wie zijn ze kwijt?",
          },
        },
      },
      {
        q: "*\"Komen er mensen te dicht bij het jong, dan durft zij niet meer terug te komen.\"* — Naar wie verwijst 'zij'?",
        options: ["De moeder van de jonge zeehond", "De vrijwilliger van de opvang", "De mensen op het strand", "De zeehondenopvang"],
        answer: 0,
        evidence: "De moeder ligt vaak vlakbij in zee te wachten.",
        wrongHints: [
          null,
          "De vrijwilliger komt pas verderop in de alinea voor. Lees de zin ervóór: wie ligt daar in zee te wachten?",
          "'Zij durft' is enkelvoud — past dat bij een hele groep mensen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "Lees de zin vóór het verwijswoord: 'De moeder ligt vaak vlakbij in zee te wachten.' Daar wordt één iemand genoemd." },
            { titel: "Controleer de vorm", tekst: "'Zij durft' is enkelvoud en vrouwelijk. Past dat bij wat je terugvond? Een moeder — ja, dat klopt precies." },
            { titel: "Controleer de betekenis", tekst: "Wie zou er niet meer terug durven te komen als mensen bij het jong staan? Degene die op afstand ligt te wachten. Logisch verhaal." },
          ],
          woorden: [
            { woord: "verwijswoord", uitleg: "Een kort woord (hij, zij, die, dat, daar...) dat terugwijst naar iemand of iets dat al eerder genoemd is." },
          ],
          theorie: "**Verwijswoorden in lange teksten**\n\nIn een lange tekst staan veel personen en dingen door elkaar. De strategie blijft hetzelfde:\n1. Vind het verwijswoord.\n2. Zoek terug — meestal in de zin ervóór.\n3. Controleer: enkelvoud of meervoud? Persoon of ding? Klopt de betekenis?\n\nExtra tip voor lange teksten: blijf dicht bij het verwijswoord zoeken. Iemand die drie alinea's eerder genoemd werd, is bijna nooit het antwoord.",
          voorbeelden: [
            { type: "invullen", tekst: "Vul je antwoord in op de plek van 'zij' en lees de zin opnieuw. De zin die logisch klinkt én klopt met de zin ervoor, wijst je het goede antwoord." },
          ],
          basiskennis: [
            { onderwerp: "Dichtbij zoeken", uitleg: "Het woord waar een verwijswoord naar wijst, staat bijna altijd vlak ervóór — vaak in de zin ervoor." },
          ],
          niveaus: {
            basis: "Lees de zin vlak vóór het verwijswoord. Wie ligt daar in zee te wachten?",
            simpeler: "'Zij' is één iemand, vrouwelijk. Wie in deze alinea past daarbij én heeft een reden om weg te blijven als er mensen staan?",
            nogSimpeler: "Zoek wie er in de zin ervóór in zee ligt te wachten.",
          },
        },
      },
      {
        q: "Waarom moet je afstand houden van een zeehond op het strand?",
        options: [
          "Anders durft de moeder niet meer terug te komen naar haar jong",
          "Omdat zeehonden mensen aanvallen als je te dichtbij komt",
          "Omdat het strand privéterrein van de opvang is",
          "Anders wordt het zand te warm voor de zeehond",
        ],
        answer: 0,
        evidence: "Komen er mensen te dicht bij het jong, dan durft zij niet meer terug te komen.",
        wrongHints: [
          null,
          "Staat er ergens iets over gevaarlijke zeehonden? Zoek de 'goede reden' die de tekst zelf noemt.",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de reden op", tekst: "De tekst kondigt het zelf aan: 'Dat klinkt misschien onaardig, maar het heeft een goede reden.' De reden komt direct daarna." },
            { titel: "Lees de uitleg", tekst: "De moeder wacht vlakbij in zee. Staan er mensen bij haar jong, dan blijft ze weg. Afstand houden helpt dus moeder en jong weer bij elkaar te komen." },
            { titel: "Streep de rest weg", tekst: "Aanvallende zeehonden, privéterrein, warm zand — check per optie: staat dit ergens in de tekst? Wat de tekst niet zegt, kan het antwoord niet zijn." },
          ],
          woorden: [
            { woord: "reden", uitleg: "Het waarom achter iets. Zoekwoorden in de tekst: 'omdat', 'daarom', 'een goede reden'." },
          ],
          theorie: "**Waarom-vragen: het antwoord staat in de tekst**\n\nBij een waarom-vraag over een informatieve tekst geldt: het antwoord moet uit de tékst komen, niet uit je eigen hoofd. Misschien wéét je andere redenen om afstand te houden — maar de toets vraagt wat déze schrijver als reden geeft.\n\nZoek signaalwoorden: 'omdat', 'daarom', 'dat heeft een goede reden', 'want'. Daar zit het waarom verstopt.",
          voorbeelden: [
            { type: "signaalwoord", tekst: "'Neem een zaklamp mee, want in de grot is het aardedonker.' Waarom een zaklamp? Het woordje 'want' wijst het antwoord aan." },
          ],
          basiskennis: [
            { onderwerp: "Tekst wint van eigen kennis", uitleg: "Kies bij een leestoets altijd het antwoord dat de tekst geeft — ook als jij zelf nog een andere goede reden weet." },
          ],
          niveaus: {
            basis: "Zoek in de derde alinea de zin na 'het heeft een goede reden' — daar staat het waarom.",
            simpeler: "Wie wacht er vlakbij in zee, en wat gebeurt er met haar als mensen te dichtbij komen?",
            nogSimpeler: "Lees de derde alinea en zoek wat de moeder doet als er mensen bij haar jong staan.",
          },
        },
      },
      {
        q: "*\"Bel daarom altijd eerst de opvang; die stuurt een ervaren vrijwilliger...\"* — Naar wat verwijst 'die'?",
        options: ["De opvang", "De zeehond", "De moeder", "Het strand"],
        answer: 0,
        evidence: "Bel daarom altijd eerst de opvang; die stuurt een ervaren vrijwilliger om te kijken of hulp echt nodig is.",
        wrongHints: [
          null,
          "Kan de zeehond zelf iemand sturen? Wie of wat moet je bellen?",
          null,
          "Kan een strand een vrijwilliger sturen? Zoek wat er vlak vóór 'die' genoemd wordt.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "Wat staat er vlak vóór 'die'? '...bel daarom altijd eerst de opvang'. Dat is je eerste kandidaat." },
            { titel: "Controleer de betekenis", tekst: "Wie kan er een ervaren vrijwilliger stúren? Niet een dier of een strand — wel de organisatie waar je naartoe belt." },
            { titel: "Vul in", tekst: "Lees de zin met je antwoord op de plek van 'die'. Klinkt het logisch? Dan heb je 'm." },
          ],
          woorden: [
            { woord: "die", uitleg: "Verwijswoord dat meestal wijst naar het laatst genoemde woord ervóór." },
          ],
          theorie: "**'Die' pakt meestal het dichtstbijzijnde woord**\n\n'Die' wijst bijna altijd naar het laatst genoemde zelfstandig naamwoord. Hier staat 'die' direct na 'de opvang' — begin daar dus met controleren.\n\nDe controle blijft nodig: kan dat woord doen wat er in de zin gebeurt? Een organisatie kan iemand sturen; een dier of een plek niet. Vorm én betekenis moeten allebei kloppen.",
          voorbeelden: [
            { type: "dichtbij", tekst: "'Vraag het aan de bibliotheek; die weet welke boeken er zijn.' → 'die' = de bibliotheek, het laatst genoemde vóór het verwijswoord." },
          ],
          basiskennis: [
            { onderwerp: "Wie kan het doen?", uitleg: "Check bij een verwijswoord altijd: kan mijn antwoord de actie in de zin echt uitvoeren?" },
          ],
          niveaus: {
            basis: "Kijk naar wat er direct vóór 'die' staat, en check: kan dat een vrijwilliger sturen?",
            simpeler: "Je belt ergens naartoe, en daarvandaan wordt iemand gestuurd. Welke van de vier opties kun je bellen?",
            nogSimpeler: "Zoek wat je volgens de zin moet bellen — daar wijst 'die' naar.",
          },
        },
      },
      {
        q: "Wat is de hoofdgedachte van deze tekst?",
        options: [
          "De opvang in Terdam verzorgt zwakke zeehonden tot ze sterk genoeg zijn voor de zee",
          "Zeehonden zijn de gevaarlijkste dieren van de Noordzee",
          "Het dorp Terdam heeft een mooie dijk waar veel toeristen komen",
          "Vispap is het lekkerste eten voor jonge dieren",
        ],
        answer: 0,
        evidence: "Hier worden zieke en verzwakte zeehonden verzorgd tot ze sterk genoeg zijn om terug te gaan naar zee.",
        wrongHints: [
          null,
          "Waar gaat bijna élke alinea over: over gevaar, of over verzorgen en terug naar zee gaan?",
          "De dijk wordt maar één keer kort genoemd — kan iets dat één keer voorbijkomt de hoofdgedachte van de héle tekst zijn?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een hoofdgedachte?", tekst: "De hoofdgedachte is waar de héle tekst over gaat — niet één detail uit één alinea, maar de grote lijn." },
            { titel: "Loop je plattegrond na", tekst: "Alinea 1: wat de opvang is. Alinea 2: jonge dieren komen binnen. Alinea 4: verzorging. Alinea 5: vrijlaten. Wat verbindt dit allemaal?" },
            { titel: "Test elke optie", tekst: "Past de optie bij álle alinea's, of maar bij één klein stukje? De optie die de hele tekst dekt, is de hoofdgedachte." },
          ],
          woorden: [
            { woord: "hoofdgedachte", uitleg: "De belangrijkste boodschap van de hele tekst in één zin." },
            { woord: "detail", uitleg: "Een klein weetje uit de tekst. Details ondersteunen de hoofdgedachte, maar zijn het niet zelf." },
          ],
          theorie: "**Hoofdgedachte vinden in een lange tekst**\n\nDrie hulpmiddelen:\n1. **De titel** — die vat vaak samen waar het over gaat.\n2. **De eerste alinea** — daar stelt de schrijver het onderwerp voor.\n3. **De alinea-test** — past jouw antwoord bij (bijna) elke alinea?\n\nValkuil op de toets: opties met een wáár detail uit de tekst. Dat detail klopt wel, maar dekt niet de hele tekst. Hoofdgedachte = het dak boven álle alinea's.",
          voorbeelden: [
            { type: "alinea-test", tekst: "Optie over de dijk? Alinea 2 t/m 6 gaan daar niet over → geen hoofdgedachte. Optie over verzorgen-tot-ze-terug-kunnen? Elke alinea draagt daaraan bij → dat is 'm." },
          ],
          basiskennis: [
            { onderwerp: "Titel als spiekbriefje", uitleg: "Lees bij een hoofdgedachte-vraag altijd de titel nog eens — die wijst vaak de goede richting." },
          ],
          niveaus: {
            basis: "Kijk naar de titel en de eerste alinea: waar draait de hele tekst om?",
            simpeler: "Loop de opties langs en vraag bij elke optie: gaat de héle tekst hierover, of maar één zinnetje?",
            nogSimpeler: "Kies de optie die past bij wat er in élke alinea gebeurt.",
          },
        },
      },
      {
        q: "Wat kun je uit de laatste alinea concluderen?",
        options: [
          "Zonder giften van gewone mensen zou de opvang niet kunnen bestaan",
          "De overheid betaalt het grootste deel van de opvang",
          "Een zeehond adopteren betekent dat het dier bij jou thuis komt wonen",
          "De opvang verdient veel geld aan de vrijlatingen",
        ],
        answer: 0,
        evidence: "Al het voer, de medicijnen en de baden worden betaald met giften van gewone mensen.",
        wrongHints: [
          null,
          "Lees de eerste zin van de laatste alinea nog eens: wat krijgt de opvang juist níét van de overheid?",
          "Wat krijg je volgens de tekst als je adopteert — het dier zelf, of iets anders?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is concluderen?", tekst: "Bij een conclusie-vraag staat het antwoord niet letterlijk in de tekst. Je plakt twee dingen uit de tekst aan elkaar en trekt zelf de logische slotsom." },
            { titel: "Verzamel de feiten", tekst: "Feit 1: de opvang krijgt geen geld van de overheid. Feit 2: alles wordt betaald met giften van gewone mensen. Wat volgt daar logisch uit?" },
            { titel: "Trek de slotsom", tekst: "Als álles van giften betaald wordt, en die giften zouden stoppen... dan kan de opvang niet verder. Dat is de conclusie — hij past precies bij de feiten, zonder er iets bij te verzinnen." },
          ],
          woorden: [
            { woord: "conclusie", uitleg: "Een logische slotsom die je zelf trekt uit wat er in de tekst staat." },
            { woord: "gift", uitleg: "Geld dat mensen vrijwillig geven om ergens mee te helpen." },
          ],
          theorie: "**Concluderen — net één stapje verder dan opzoeken**\n\nEen goede conclusie:\n- steunt op feiten die écht in de tekst staan;\n- gaat maar één klein stapje verder dan de tekst;\n- verzint er niets bij.\n\nValkuil: opties die het tegenovergestelde beweren van de tekst (lees dan nog eens precies!) of die te ver doorschieten. Blijf dicht bij wat er staat.",
          voorbeelden: [
            { type: "conclusie", tekst: "Tekst: 'De bakkerij gebruikt alleen meel van de molen in het dorp.' Conclusie: als de molen sluit, heeft de bakkerij een probleem. Dat staat er niet letterlijk — maar het volgt logisch." },
          ],
          basiskennis: [
            { onderwerp: "Eén stapje, niet tien", uitleg: "Een conclusie blijft dicht bij de tekst. Hoe wilder de bewering, hoe kleiner de kans dat het de juiste conclusie is." },
          ],
          niveaus: {
            basis: "Lees de laatste alinea: waar komt al het geld van de opvang vandaan? Wat betekent dat als die geldbron zou wegvallen?",
            simpeler: "Twee feiten: geen geld van de overheid, alles betaald door gewone mensen. Welke optie past precies bij die twee feiten?",
            nogSimpeler: "Zoek in de laatste alinea wie er betalen voor het voer en de medicijnen.",
          },
        },
      },
      {
        q: "In de tekst staat: *'Adopteer een zeehond en help mee aan hun herstel.'* Welk tekstdoel heeft deze zin?",
        options: [
          "Overtuigen — de lezer aanzetten om iets te doen",
          "Informeren — uitleggen hoe adoptie werkt",
          "Amuseren — de lezer een grappig idee geven",
          "Instrueren — een stappenplan geven",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Er staat niet uit hoe adoptie werkt — er staat een oproep. Gaat dat over informatie geven of over de lezer bewegen?",
          "Is er iets grappigs aan deze zin? Of probeert de schrijver de lezer ergens van te overtuigen?",
          "Staat er een stappenplan met 1-2-3? Of is het één directe oproep?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken de oproep", tekst: "'Help mee' is een directe oproep — de schrijver wil dat je iets doet. Dat is overtuigen." },
            { titel: "Contrast met informeren", tekst: "De rest van de tekst legt uit hoe de opvang werkt (informeren). Deze zin probeert je te bewegen (overtuigen). Eén tekst kan meerdere doelen hebben." },
          ],
          niveaus: {
            basis: "Begint de zin met een oproep of met een feit? Wat wil de schrijver dat jij gaat doen?",
            simpeler: "Als iemand zegt 'help mee!' — informeert hij je dan, of probeert hij je te overtuigen iets te gaan doen?",
            nogSimpeler: "Wil de schrijver dat je iets gaat doen, of wil hij je iets uitleggen?",
          },
        },
      },
    ],
  },

  // ── Stap 3 ──────────────────────────────────────────────────────
  {
    title: "Training 2 — een lang verhaal",
    explanation: tekstSterren + `

Training twee! Op de echte toets krijg je ook verhalen — en daar stellen ze nét andere vragen bij: over gevoelens, over waaróm iemand iets doet, en over wat je uit het einde kunt afleiden. Ook dit verhaal is zo lang als op de echte toets.

**Zelfde plan als altijd:**
1. Je hebt het verhaal nu één keer gelezen — plattegrond klaar (begin, buiten kijken, de sterren, het einde).
2. Zoek per vraag de goede plek in het verhaal terug.
3. Blijf nergens hangen; overslaan en terugkomen mag altijd.

Zeven vragen. Hou vol — dit is precies de training die je nodig hebt!`,
    checks: [
      {
        q: "Hoe laat klopte opa op de deur van Sanne?",
        options: ["Om elf uur", "Om middernacht", "Om negen uur", "Dat staat niet in het verhaal"],
        answer: 0,
        evidence: "Om elf uur klopte opa zachtjes op haar deur.",
        wrongHints: [
          null,
          "Middernacht komt wel voor in het verhaal, maar dan liggen ze al lang buiten. Zoek het moment van het kloppen op de deur.",
          null,
          "Jawel — zoek aan het begin van het verhaal naar een tijdstip.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Opzoekvraag in een verhaal", tekst: "Ook in verhalen zitten opzoekvragen. Gebruik je plattegrond: het kloppen op de deur hoort bij het begín van het verhaal." },
            { titel: "Scan op tijd", tekst: "Zoek in de eerste alinea's naar woorden over tijd: 'vanavond', 'om ... uur'. Daar staat je antwoord." },
            { titel: "Pas op voor het verkeerde tijdstip", tekst: "Verderop staat 'ver na middernacht' — maar dat is het moment dat ze naar binnen gaan, niet het kloppen. Lees altijd waar het tijdstip bíj hoort." },
          ],
          woorden: [
            { woord: "scannen", uitleg: "Met je ogen snel over de tekst glijden en alleen stoppen bij het soort woord dat je zoekt — hier: tijdstippen." },
          ],
          theorie: "**Twee tijdstippen in één verhaal — welke is het?**\n\nVerhalen springen door de tijd: eerst avond, dan nacht, dan ochtend. Bij een vraag over tijd:\n1. Bepaal bij welke gebeurtenis de vraag hoort (het kloppen op de deur).\n2. Zoek die gebeurtenis in het verhaal op.\n3. Lees het tijdstip dat er direct bij staat.\n\nEen tijdstip uit een ándere scène is de klassieke valstrik.",
          voorbeelden: [
            { type: "gebeurtenis-eerst", tekst: "Vraag: 'hoe laat ging de wekker?' Zoek dan eerst de zin over de wekker — en pak het tijdstip uit díé zin, niet een ander tijdstip uit de tekst." },
          ],
          basiskennis: [
            { onderwerp: "Tijdstip hoort bij gebeurtenis", uitleg: "Koppel een tijdstip altijd aan de gebeurtenis in dezelfde zin — niet aan iets dat later gebeurt." },
          ],
          niveaus: {
            basis: "Zoek de zin waarin opa op de deur klopt — het tijdstip staat in diezelfde zin.",
            simpeler: "Het kloppen gebeurt aan het begin van het verhaal, vóór ze naar buiten gaan. Zoek daar een tijd.",
            nogSimpeler: "Lees de eerste zin van de tweede alinea van het verhaal.",
          },
        },
      },
      {
        q: "*\"...was het pikdonker. Geen lantaarnpaal te zien.\"* — Wat betekent 'pikdonker'?",
        options: ["Zo donker dat je bijna niets kunt zien", "Een beetje schemerig", "Donker, maar met veel lampen aan", "Koud en mistig"],
        answer: 0,
        evidence: "Achter het huis van opa, buiten het dorp Weverlo, was het pikdonker.",
        wrongHints: [
          null,
          "Bij schemer zie je nog van alles. Wat vertelt het zinnetje over de lantaarnpaal je over hoevéél licht er is?",
          null,
          "Gaat 'donker' over de temperatuur of over licht?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Lees de zin erna", tekst: "'Geen lantaarnpaal te zien.' De schrijver legt zo uit hoe donker het is: er is helemaal géén licht." },
            { titel: "Denk aan het waarom", tekst: "Waarom gingen ze juist búíten het dorp kijken? Sterren zie je het best waar geen lampen zijn. Ook dat wijst naar: heel erg donker." },
            { titel: "Kies de sterkste betekenis", tekst: "'Pik' vóór 'donker' maakt het woord sterker — zoals 'piepklein' kleiner is dan klein. Het is dus niet zomaar donker, maar donkerder dan donker." },
          ],
          woorden: [
            { woord: "schemerig", uitleg: "Half licht, half donker — zoals vlak na zonsondergang." },
            { woord: "versterkend woord", uitleg: "Een stukje woord dat de betekenis sterker maakt: piepklein, ijskoud, pikdonker." },
          ],
          theorie: "**Onbekend woord in een verhaal? De zinnen eromheen helpen**\n\nSchrijvers van verhalen leggen woorden zelden letterlijk uit — maar ze geven wél aanwijzingen:\n- de zin erna beschrijft het effect ('geen lantaarnpaal te zien');\n- de situatie past erbij (sterren kijken lukt alleen zonder licht);\n- het woord zelf bevat een bekend stuk ('donker').\n\nCombineer die drie en je komt er bijna altijd uit — ook bij woorden die je nog nooit gezien hebt.",
          voorbeelden: [
            { type: "versterking", tekst: "'Het water was ijskoud.' Kouder dan gewoon koud — het stukje 'ijs' versterkt. Zo werken ook: gloednieuw, doodmoe, kletsnat." },
          ],
          basiskennis: [
            { onderwerp: "Woord-delen herkennen", uitleg: "Zit er een bekend woord in het onbekende woord verstopt? Begin daar — de rest van de zin doet de fijnafstelling." },
          ],
          niveaus: {
            basis: "Lees het zinnetje erna over de lantaarnpaal: hoeveel licht is er dan?",
            simpeler: "Welk bekend woord zit er in 'pikdonker' verstopt, en maakt de rest het zwakker of juist sterker?",
            nogSimpeler: "Ze zijn buiten het dorp, geen lamp te zien. Hoeveel kun je dan nog zien?",
          },
        },
      },
      {
        q: "*\"'Daar!' riep ze, veel te hard. Opa grinnikte. 'Die telt. Eén.'\"* — Naar wat verwijst 'die'?",
        options: [
          "De streep licht die net langs de hemel schoot",
          "De thermoskan met chocolademelk",
          "De wens van Sanne",
          "Het luchtbed op het gras",
        ],
        answer: 0,
        evidence: "Een dunne streep licht schoot langs de hemel, zo snel dat Sanne bijna dacht dat ze het zich verbeeldde.",
        wrongHints: [
          null,
          "Kan opa een thermoskan tellen als 'één'? Wat is er vlak hiervoor gebeurd dat je kunt tellen?",
          "De wensen komen pas later in het verhaal. Wat gebeurde er vlak vóór opa's woorden?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek terug", tekst: "Wat gebeurde er vlak voordat Sanne 'Daar!' riep? Lees de zin ervóór: er schoot iets langs de hemel." },
            { titel: "Snap het tellen", tekst: "Opa zegt 'Die telt. Eén.' Hij begint dus te tellen. Wát waren ze aan het turven die nacht? De dingen waarvoor ze buiten lagen." },
            { titel: "Controleer", tekst: "Vul je antwoord in: 'De ... telt, dat is nummer één.' Past dat bij waarom ze buiten liggen? Dan klopt het." },
          ],
          woorden: [
            { woord: "grinniken", uitleg: "Zachtjes en een beetje ondeugend lachen." },
          ],
          theorie: "**Verwijswoorden in gesprekken**\n\nIn verhalen staan verwijswoorden vaak in gespróken zinnen. De strategie blijft: zoek terug naar wat er vlak vóór het gesprek gebeurde.\n\nExtra hulp: bedenk wat de personen aan het dóén zijn. Sanne en opa liggen buiten om iets te zien en te tellen. Wat opa 'telt', moet dus iets zijn dat net verscheen — niet een spulletje dat er al de hele tijd lag.",
          voorbeelden: [
            { type: "gesprek", tekst: "'Er reed een oldtimer voorbij. \"Die is vast vijftig jaar oud,\" zei papa.' → 'die' = de oldtimer die net voorbijkwam, het onderwerp van het moment." },
          ],
          basiskennis: [
            { onderwerp: "Wat is het onderwerp van het moment?", uitleg: "In een gesprek wijst een verwijswoord meestal naar dat waar iedereen nét naar keek of over praatte." },
          ],
          niveaus: {
            basis: "Lees de zin vóór 'Daar!': wat schoot er langs de hemel?",
            simpeler: "Opa begint te tellen: één. Waarvoor liggen ze buiten — wat hopen ze te zien en te tellen?",
            nogSimpeler: "Zoek wat er vlak vóór Sanne's kreet aan de hemel gebeurde.",
          },
        },
      },
      {
        q: "Waarom begon Sanne te twijfelen toen ze buiten lag?",
        options: [
          "Ze zag eerst niets en was bang dat de krant het mis had",
          "Ze vond de chocolademelk niet lekker",
          "Ze wilde liever binnen televisie kijken",
          "Opa was in slaap gevallen",
        ],
        answer: 0,
        evidence: "Straks was alles voor niets en had de krant het mis.",
        wrongHints: [
          null,
          null,
          "Staat er ergens dat Sanne naar binnen wilde? Lees wat ze in het begin wél of niet aan de hemel zag.",
          "Wie zei er 'Nu niets meer zeggen'? Die persoon was klaarwakker.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het twijfel-moment", tekst: "De tekst zegt letterlijk: 'Ze begon te twijfelen.' Lees de zinnen eromheen — daar staat waaróm." },
            { titel: "Lees ervóór en erna", tekst: "Ervoor: 'Eerst zag Sanne helemaal niets bijzonders.' Erna: 'Straks was alles voor niets en had de krant het mis.' Samen vertellen die zinnen de reden." },
            { titel: "Koppel gevoel aan oorzaak", tekst: "Niets zien → bang dat de voorspelling niet klopt → twijfel. In verhalen staat het gevoel vaak vlak naast de oorzaak." },
          ],
          woorden: [
            { woord: "twijfelen", uitleg: "Niet zeker weten of iets waar is of gaat lukken." },
          ],
          theorie: "**Gevoelens-vragen bij verhalen**\n\nDe Doorstroomtoets vraagt bij verhalen vaak: waarom voelt iemand zich zo?\n\nAanpak:\n1. Zoek de zin waarin het gevoel genoemd wordt.\n2. Lees de zinnen ervóór en erna — daar staat bijna altijd de oorzaak.\n3. Kies de optie die bij díé oorzaak past, niet een oorzaak die je zelf logisch vindt maar die niet in de tekst staat.",
          voorbeelden: [
            { type: "gevoel-oorzaak", tekst: "'Jens keek somber naar buiten. De regen kletterde tegen het raam en de wedstrijd ging vast niet door.' Waarom somber? De oorzaak staat er direct naast." },
          ],
          basiskennis: [
            { onderwerp: "Oorzaak naast gevoel", uitleg: "Zoek bij een gevoel altijd in de buurt van dat gevoel — de schrijver zet de reden er meestal vlak naast." },
          ],
          niveaus: {
            basis: "Zoek de zin 'Ze begon te twijfelen' en lees de zin ervóór en erna.",
            simpeler: "Wat zag Sanne in het begin aan de hemel — veel of niets? En wat dacht ze toen over het bericht in de krant?",
            nogSimpeler: "Lees de vierde alinea van het verhaal: wat zag Sanne daar (nog) niet?",
          },
        },
      },
      {
        q: "Waarom zei Sanne haar wensen niet hardop?",
        options: [
          "Volgens opa komt een wens die je hardop zegt niet uit",
          "Ze was haar stem kwijt van de kou",
          "Ze wilde opa niet wakker maken",
          "Wensen mag alleen overdag",
        ],
        answer: 0,
        evidence: "al mocht je die van opa nooit hardop zeggen, anders kwam hij niet uit.",
        wrongHints: [
          null,
          "Kon Sanne eerder die nacht nog wel hard roepen? Zoek de regel van opa over wensen.",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de zin over wensen", tekst: "Scan het verhaal op het woord 'wens'. Je vindt: 'Bij elke vallende ster deed ze stiekem een wens...' — en direct daarna komt de reden." },
            { titel: "Lees het hele zinnetje uit", tekst: "'...al mocht je die van opa nooit hardop zeggen, anders kwam hij niet uit.' Het woordje 'anders' geeft het gevolg — en dus de reden om stil te blijven." },
            { titel: "Controleer bij de opties", tekst: "Welke optie zegt precies dit, zonder er iets bij te verzinnen? Die kies je." },
          ],
          woorden: [
            { woord: "stiekem", uitleg: "Zonder dat anderen het merken." },
            { woord: "anders", uitleg: "Signaalwoord voor een gevolg: doe je het wél, dan gebeurt er dit." },
          ],
          theorie: "**Het antwoord staat vaak in één bijzinnetje**\n\nIn verhalen verstopt de reden zich vaak in een half zinnetje met een komma: '...al mocht je die nooit hardop zeggen, anders kwam hij niet uit.'\n\nLees daarom bij een waarom-vraag de gevonden zin altijd hélemaal uit, tot de punt. Wie halverwege stopt met lezen, mist precies het stukje waar het antwoord staat.",
          voorbeelden: [
            { type: "bijzin", tekst: "'Roan nam een paraplu mee, ook al scheen de zon, want de buienradar beloofde regen.' Waarom de paraplu? Het antwoord zit ná de tweede komma." },
          ],
          basiskennis: [
            { onderwerp: "Lees tot de punt", uitleg: "Stop nooit halverwege een zin met lezen — redenen en gevolgen staan vaak in het laatste stuk." },
          ],
          niveaus: {
            basis: "Zoek de zin over de wensen en lees hem helemaal uit — let op wat er na 'anders' komt.",
            simpeler: "Er hoort een regel bij wensen doen. Van wie komt die regel, en wat gebeurt er volgens die regel als je een wens hardop zegt?",
            nogSimpeler: "Zoek het woord 'wens' in het verhaal en lees dat zinnetje tot de punt.",
          },
        },
      },
      {
        q: "Waar gaat dit verhaal vooral over?",
        options: [
          "Een bijzondere nacht waarin Sanne en opa samen naar vallende sterren kijken",
          "Een recept voor warme chocolademelk",
          "Een ruzie tussen Sanne en opa Berend",
          "Hoe je een luchtbed moet opblazen",
        ],
        answer: 0,
        evidence: "opa Berend had beloofd dat ze samen naar de vallende sterren gingen kijken.",
        wrongHints: [
          null,
          "De chocolademelk komt een paar keer voorbij — maar draait het héle verhaal daarom?",
          "Zoek eens: valt er ergens een boos woord tussen Sanne en opa?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zelfde truc als bij een informatieve tekst", tekst: "Ook bij een verhaal vraag je: waar gaat (bijna) élke alinea over? De titel helpt alweer mee." },
            { titel: "Loop het verhaal langs", tekst: "Begin: het plan om te gaan kijken. Midden: buiten liggen en sterren tellen. Einde: het briefje over de volgende keer. Alles draait om die ene nacht samen." },
            { titel: "Streep de details weg", tekst: "Chocolademelk en luchtbedden komen voor, maar zijn versiering. Haal je ze weg, dan blijft het verhaal overeind. Haal je de sterrennacht weg, dan is er géén verhaal meer." },
          ],
          woorden: [
            { woord: "thema", uitleg: "Waar een verhaal in de kern over gaat — de grote lijn achter alle gebeurtenissen." },
          ],
          theorie: "**Hoofdlijn van een verhaal vinden**\n\nHandige test: kun je het verhaal in één zin navertellen? Wat je dan zegt, is de hoofdlijn.\n\n'Sanne en haar opa kijken op een nacht samen naar vallende sterren' — daar zit alles in: wie, wat, wanneer.\n\nValkuil: opties die één echt voorkomend detail noemen (de chocolademelk!). Waar of niet — een detail is nooit waar het verhaal 'vooral' over gaat.",
          voorbeelden: [
            { type: "één-zin-test", tekst: "Vertel Roodkapje in één zin: 'Een meisje ontmoet onderweg naar oma een wolf.' Niemand zegt: 'Een verhaal over een mandje koekjes' — dat is een detail." },
          ],
          basiskennis: [
            { onderwerp: "Detail of hoofdlijn?", uitleg: "Vraag je bij elke optie af: als ik dít weglaat, bestaat het verhaal dan nog? Ja = detail. Nee = hoofdlijn." },
          ],
          niveaus: {
            basis: "Vertel het verhaal in één zin na — welke optie lijkt het meest op jouw zin?",
            simpeler: "Kijk naar de titel en naar wat Sanne en opa de hele nacht doen. Waar draait alles om?",
            nogSimpeler: "Kies de optie waarin de twee hoofdpersonen én de nacht samen voorkomen.",
          },
        },
      },
      {
        q: "Wat kun je uit het briefje aan het einde afleiden?",
        options: [
          "Opa wil graag nog eens samen met Sanne naar de sterren kijken",
          "Opa is boos dat Sanne te hard riep",
          "Sanne moet het briefje aan haar juf laten zien",
          "Opa gaat verhuizen naar een ander dorp",
        ],
        answer: 0,
        evidence: "Tot de volgende heldere nacht.",
        wrongHints: [
          null,
          "Klinkt 'Voor de sterrenkijker' als een boze opmerking? Let op de toon van het briefje.",
          null,
          "Staat er iets over verhuizen? Lees de laatste zin van het briefje nog eens.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Lees het briefje precies", tekst: "Er staan twee dingen: 'Voor de sterrenkijker' en 'Tot de volgende heldere nacht.' Vooral dat tweede zinnetje is belangrijk." },
            { titel: "Wat betekent 'tot de volgende...'?", tekst: "Als iemand 'tot de volgende keer' zegt, belooft diegene dat er een volgende keer kómt. Opa kijkt dus al vooruit naar nog zo'n nacht." },
            { titel: "Check de toon", tekst: "'Sterrenkijker' is een lief koosnaampje, en Sanne hangt het briefje boven haar bureau. Alles wijst op warmte, niets op boosheid of afscheid." },
          ],
          woorden: [
            { woord: "afleiden", uitleg: "Iets begrijpen dat niet letterlijk in de tekst staat, door aanwijzingen te combineren." },
            { woord: "toon", uitleg: "Hoe iets klinkt: lief, boos, grappig, plechtig. De toon verklapt hoe de schrijver het bedoelt." },
          ],
          theorie: "**Het einde van een verhaal — wat wil de schrijver zeggen?**\n\nHet slot van een verhaal geeft vaak een boodschap mee zonder die uit te spreken. Aanwijzingen:\n- Wat zeggen de personen letterlijk?\n- Welke toon hebben die woorden?\n- Wat doet de hoofdpersoon ermee (het briefje bewaren = het is dierbaar)?\n\nCombineer die aanwijzingen tot een conclusie die er dicht bij blijft. Grote sprongen ('opa verhuist') zonder aanwijzing in de tekst zijn altijd fout.",
          voorbeelden: [
            { type: "aanwijzing", tekst: "'Na het kamp schreef Lot alvast haar naam op de lijst voor volgend jaar.' Nergens staat 'Lot vond het leuk' — maar uit haar actie leid je dat zó af." },
          ],
          basiskennis: [
            { onderwerp: "Acties verklappen gevoelens", uitleg: "Wat iemand dóét (een briefje ophangen, zich alvast opgeven) zegt vaak meer dan wat er letterlijk staat." },
          ],
          niveaus: {
            basis: "Lees de laatste zin van het briefje: waar kijkt opa naar uit?",
            simpeler: "'Tot de volgende...' — wat beloof je eigenlijk als je dat tegen iemand zegt?",
            nogSimpeler: "Is de toon van het briefje lief of boos? En gaat het over iets dat nog komen gaat, of over iets dat voorbij is?",
          },
        },
      },
      {
        q: "In het verhaal staat: *'Sanne stond op en deed het raam open, de kilte van de nacht naar binnen latend.'* Wat kun je hieruit het beste afleiden?",
        options: [
          "Sanne wilde de sterren beter kunnen zien of horen",
          "Sanne wilde de kamer verwarmen",
          "Sanne was bang voor het donker",
          "Sanne had het te warm en wilde afkoelen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De koude nachtlucht binnenlaten warm je niet op — wat is dan de reden dat Sanne het raam opent?",
          "Staat er iets in de tekst over dat Sanne bang is? Kijk naar waar ze aan het begin van het verhaal mee bezig is.",
          "De tekst noemt kilte, maar dat betekent niet dat ze het te warm heeft. Waarmee was Sanne aan het begin bezig?",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Gebruik de context", tekst: "Aan het begin kijkt Sanne naar de meteoorshower. Raam opendoen = buiten dichterbij brengen. Wat wilde ze dan beter zien of beleven?" },
            { titel: "Te-ver-test", tekst: "'Bang voor het donker' staat nergens in de tekst. 'Te warm' wordt niet gesuggereerd. Blijf bij aanwijzingen die de tekst geeft." },
          ],
          niveaus: {
            basis: "Waar kijkt Sanne de hele tijd naar in het verhaal? En waarom doet ze het raam open?",
            simpeler: "Als je buiten een mooi vuurwerk wilt zien, zou jij dan je raam opendoen — of dichtlaten?",
            nogSimpeler: "Wat deed Sanne vlak voordat ze het raam opende? Wat was ze aan het doen?",
          },
        },
      },
    ],
  },

  // ── Stap 4 ──────────────────────────────────────────────────────
  {
    title: "Terugkijken — wat neem je mee naar de echte toets?",
    explanation: `Twee lange teksten, veertien vragen — dat is een flinke leestraining! Precies het uithoudingsvermogen dat je op de echte Doorstroomtoets nodig hebt.

Even terugkijken op je aanpak, want díé neem je mee:

**1. Eerst globaal lezen, dan per vraag terug.** Je maakt een plattegrond in je hoofd: je weet waar alles ongeveer staat. Details onthouden hoeft niet — die zoek je per vraag op. **Het antwoord opzoeken in de tekst is geen valsspelen — het hoort juist bij de toets.**

**2. Verdeel je tijd.** Ongeveer twee minuten per vraag. **Eén lastige vraag mag nooit de tijd opeten van de vragen die je wél kunt.** Overslaan, doorgaan, aan het einde terugkomen.

**3. Elk vraagtype heeft zijn eigen truc.** Feitje? Scannen op het zoekwoord. Verwijswoord? Terugzoeken en controleren. Hoofdgedachte? De alinea-test. Onbekend woord? De zinnen eromheen. Conclusie? Eén klein stapje verder dan de tekst, nooit tien.

Nog twee vragen over je aanpak — dan zit dit deel erop. Op de echte toets denk je straks: "Zo'n lange tekst? Die heb ik al vaker gedaan."`,
    checks: [
      {
        q: "Je twijfelt bij een vraag over de tekst. Wat is de beste actie?",
        options: [
          "Terugbladeren en het antwoord opzoeken in de tekst",
          "Gokken, want opzoeken is valsspelen",
          "De hele tekst nóg een keer van voor naar achter lezen",
          "Het antwoord kiezen dat het langst is",
        ],
        answer: 0,
        evidence: "Het antwoord opzoeken in de tekst is geen valsspelen — het hoort juist bij de toets.",
        wrongHints: [
          null,
          "Is opzoeken bij een leestoets verboden? Denk aan wat je in de eerste stap van dit deel leerde.",
          "Kost dat niet heel veel tijd voor één vraag? Je weet dankzij je plattegrond toch al ongeveer wáár het staat?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat test een leestoets?", tekst: "Niet je geheugen, maar je begrip. De tekst ligt de hele tijd voor je neus — dat is expres." },
            { titel: "Gericht terug, niet alles opnieuw", tekst: "Dankzij je plattegrond weet je in welke alinea je moet zijn. Je leest dus alleen dat stukje opnieuw — dat kost maar een paar tellen." },
            { titel: "Twijfel = terugzoeken", tekst: "Maak er een gewoonte van: bij elke twijfel even de plek in de tekst erbij pakken. Dat voorkomt de meeste fouten." },
          ],
          woorden: [
            { woord: "gericht zoeken", uitleg: "Niet alles opnieuw lezen, maar meteen naar het goede stukje gaan omdat je weet waar het staat." },
          ],
          theorie: "**Opzoeken is een vaardigheid — en de toets beloont hem**\n\nWie uit zijn hoofd antwoordt, trapt in valstrikken: opties lijken expres nét op iets uit de tekst. Wie terugbladert en de zin erbij pakt, ziet het verschil.\n\nDe balans:\n- Hele tekst herlezen bij elke vraag → te langzaam.\n- Alles uit je hoofd doen → te veel fouten.\n- Plattegrond + gericht terugzoeken → snel én goed. Dat is de winnende midden-weg.",
          voorbeelden: [
            { type: "valstrik", tekst: "Optie zegt 'twintig kilo', tekst zegt een ander gewicht. Uit je hoofd klinken beide bekend. Alleen wie even terugkijkt, prikt er doorheen." },
          ],
          basiskennis: [
            { onderwerp: "De tekst is je bondgenoot", uitleg: "Alles wat je nodig hebt staat er al — je hoeft het alleen terug te vinden." },
          ],
          niveaus: {
            basis: "De tekst ligt de hele toets voor je neus. Waarom zou dat zijn, denk je?",
            simpeler: "Je hebt een plattegrond gemaakt van de tekst. Welke actie gebruikt die plattegrond het slimst?",
            nogSimpeler: "Kies de actie waarbij je de tekst er even bij pakt zonder alles opnieuw te lezen.",
          },
        },
      },
      {
        q: "Je hebt bij een vraag teruggebladerd en twee opties lijken allebei te kloppen. Wat doe je?",
        options: [
          "Lees de bewuste zin in de tekst nog één keer heel precies",
          "Kies de langste optie",
          "Kies de kortste optie",
          "Sla de vraag permanent over",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een lang antwoord is niet automatisch het juiste. Wat helpt je écht kiezen?",
          "Lengte zegt niets over inhoud. Wat heeft de tekst je te vertellen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Twee opties, beide plausibel", tekst: "Dat is de toetsmaker's fijnste truc: twee opties die allebei klinken als ze kloppen. Alleen wie de tekst heel precies leest, ziet het verschil." },
            { titel: "Precies lezen", tekst: "Lees de zin met de aanwijzing woord voor woord. Staat er 'altijd', 'nooit', 'soms', 'sommige'? Die kleine woordjes maken het verschil." },
            { titel: "Check beide opties", tekst: "Vul elke optie in op de plek van de vraag en lees de zin terug. Welke klinkt exact zoals de tekst zegt?" },
          ],
          niveaus: {
            basis: "Twee opties lijken goed. Wat los je op door de tekst nóg preciezer te lezen?",
            simpeler: "Soms is het verschil maar één woordje. Lees alles letter voor letter — welke optie zegt precies hetzelfde als de zin in de tekst?",
            nogSimpeler: "Lees de zin in de tekst heel langzaam en vergelijk die dan met elke optie.",
          },
        },
      },
      {
        q: "Wat is het verschil tussen een feitenvraag en een conclusievraag bij een leestekst?",
        options: [
          "Bij een feitenvraag zoek je op; bij een conclusievraag denk je één stapje verder",
          "Feitenvragen zijn moeilijker dan conclusievragen",
          "Bij een conclusievraag moet je de tekst niet meer lezen",
          "Er is geen verschil — je antwoordt bij beide altijd vanuit je hoofd",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Welke klinkt als meer werk: opzoeken of redeneren? Wat maakt conclusies anders?",
          "Ook bij conclusies heb je de tekst nodig — als bewijs. Wat doe je er dan méér mee?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Feitenvraag", tekst: "Het antwoord staat woord voor woord in de tekst. Jij zoekt het op — je hoeft niets extra te bedenken." },
            { titel: "Conclusievraag", tekst: "Je neemt feiten uit de tekst en combineert ze tot iets wat er niet letterlijk staat. Één stapje denken extra." },
            { titel: "Waarom maakt dat uit?", tekst: "Bij een feitenvraag scan je naar het zoekwoord. Bij een conclusievraag lees je een alinea en redeneert je. Weet je welke soort het is, dan kies je de juiste aanpak." },
          ],
          niveaus: {
            basis: "Feit = opzoeken. Conclusie = feiten + één redeneersstap. Welke optie zegt dit?",
            simpeler: "Hoe vaak staan de tekst en hoeveel moeten jij zelf denken — hangt dat af van wat voor vraag het is?",
            nogSimpeler: "Bij welk type vraag moet je zelf iets uitrekenen of bedenken?",
          },
        },
      },
      {
        q: "Sanne kijkt in het verhaal 'de nacht van de vallende sterren' naar de hemel. Wat voor vraag is 'Hoe laat klopte opa op de deur'?",
        options: [
          "Een opzoekvraag — het tijdstip staat letterlijk in de tekst",
          "Een conclusievraag — je moet het tijdstip zelf berekenen",
          "Een hoofdgedachte-vraag",
          "Een verwijswoord-vraag",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Reken je hier iets uit, of zoek je gewoon een getal in de tekst?",
          "Gaat de vraag over het thema van het hele verhaal, of om één moment?",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Herken het vraagtype", tekst: "Een tijdstip vragen = zoek een getal in de tekst. Dat is de definitie van een opzoekvraag." },
            { titel: "Aanpak", tekst: "Gebruik je plattegrond: het kloppen op de deur is aan het begin. Scan de eerste alinea's op een tijdstip." },
            { titel: "Pas op voor afleidende getallen", tekst: "De tekst heeft meer getallen (honderd sterren per uur, ver na middernacht). Koppel elk getal aan de juiste gebeurtenis." },
          ],
          niveaus: {
            basis: "Het tijdstip staat letterlijk in de tekst — wat voor vraag is dit dan?",
            simpeler: "Zoek je het antwoord op, of reken je het uit?",
            nogSimpeler: "Staat het antwoord woordelijk in de tekst?",
          },
        },
      },
      {
        q: "Waarom lees je de tekst eerst één keer rustig door, ook al onthoud je niet alles?",
        options: [
          "Zo weet je waar alles ongeveer staat en kun je per vraag snel terugzoeken",
          "Zo ken je daarna de hele tekst uit je hoofd",
          "Omdat je de tekst tijdens de vragen niet meer mag bekijken",
          "Omdat de eerste vraag altijd over de eerste zin gaat",
        ],
        answer: 0,
        evidence: "Je maakt een plattegrond in je hoofd: je weet waar alles ongeveer staat.",
        wrongHints: [
          null,
          "Moet je een tekst van 400 woorden echt uit je hoofd kennen? Wat maakte je ook alweer 'in je hoofd' tijdens dat eerste lezen?",
          "Mag je tijdens de vragen nog terugkijken in de tekst? Denk aan wat je bij de vorige vraag leerde.",
          null,
        ],
        uitlegPad: {
          stappen: [
            { titel: "Het doel van de eerste leesbeurt", tekst: "Niet onthouden, maar overzicht krijgen: waar gaat elke alinea over? Dat is genoeg." },
            { titel: "De winst komt bij de vragen", tekst: "Elke vraag stuurt je terug de tekst in. Met overzicht weet je meteen wáár je moet zijn — zonder overzicht zoek je elke keer de hele tekst door." },
            { titel: "Zo houd je het vol", tekst: "Zes vragen keer de hele tekst doorzoeken = uitputtend. Zes vragen keer één alinea herlezen = prima te doen. Dát is het geheim van volhouden bij lange teksten." },
          ],
          woorden: [
            { woord: "overzicht", uitleg: "Weten hoe iets in elkaar zit zonder elk detail te kennen — de grote lijn." },
          ],
          theorie: "**Waarom de plattegrond zo goed werkt**\n\nEen lange tekst met zes vragen betekent: je duikt zes keer terug de tekst in. De eerste rustige leesbeurt is dus een investering — hij betaalt zich bij elke vraag terug.\n\nZonder plattegrond: per vraag de hele tekst afspeuren, moe worden, slordig worden.\nMét plattegrond: per vraag rechtstreeks naar de goede alinea. Sneller, minder fouten, en je houdt energie over voor de laatste vragen — precies waar de meeste kinderen inzakken.",
          voorbeelden: [
            { type: "vergelijking", tekst: "Zoeken zonder plattegrond is als je gymschoen zoeken in een heel huis. Mét plattegrond weet je: die ligt in de gang. Eén plek kijken en klaar." },
          ],
          basiskennis: [
            { onderwerp: "Investeren aan het begin", uitleg: "Een paar minuten rustig lezen aan het begin bespaart je bij élke vraag zoektijd. Zo win je tijd, ook al voelt het eerst als extra werk." },
          ],
          niveaus: {
            basis: "Wat lever(t) die eerste leesbeurt je op bij elke vraag daarna?",
            simpeler: "Je hoeft niets te onthouden bij het eerste lezen. Wat weet je daarna dan wél over de tekst?",
            nogSimpeler: "Denk aan de gymschoen in de gang: waarom vind je iets sneller als je weet in welke kamer het ligt?",
          },
        },
      },
      {
        q: "Je hebt nog 5 minuten en 3 vragen over. Je weet het antwoord op vraag 15 en 17, maar vraag 16 is heel moeilijk. Wat doe je het SLIMST?",
        options: [
          "Vraag 15 en 17 eerst beantwoorden, dan met de resterende tijd vraag 16 proberen",
          "Eerst alles op vraag 16 inzetten, ook al duurt het lang",
          "Alle drie overslaan — het is toch te laat",
          "Drie keer dezelfde optie invullen en dan stoppen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Als je alle 5 minuten besteedt aan vraag 16, wat gebeurt er dan met de zekere punten voor 15 en 17?",
          "Je hebt nog 5 minuten — en 2 vragen die je kunt beantwoorden. Is weggooien dan slim?",
          "Drie willekeurige antwoorden kosten dezelfde tijd als drie echte pogingen — maar leveren veel minder op.",
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zekere punten eerst", tekst: "Vraag 15 en 17 zijn te maken. Doe ze eerst — dat zijn zekere punten. Laat die nooit liggen voor één moeilijke vraag." },
            { titel: "Dan de moeilijke vraag", tekst: "Na 15 en 17 heb je nog wat minuten. Gebruik die voor een rustige poging op 16. Misschien zie je het alsnog — nu met frisse ogen." },
            { titel: "De tijdstrategie-regel", tekst: "Verdeel je punten nooit ongelijk: één moeilijke vraag mag nooit ten koste gaan van twee makkelijke. Twee zekere punten zijn meer waard dan de kleine kans op één moeilijke." },
          ],
          niveaus: {
            basis: "Welke vragen leveren je zeker punten op? Doe die eerst — dan mis je ze sowieso niet.",
            simpeler: "Stel: je kunt 2 euro zeker pakken, of 1 euro proberen te verdienen met een moeilijk spelletje. Wat kies je als je weinig tijd hebt?",
            nogSimpeler: "Als je twee gemakkelijke sommen kunt oplossen én één heel moeilijke, welke begin je dan mee?",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const langeToetsTekstenG8Po = {
  id: "lange-toets-teksten-g8-po",
  title: "Lange teksten op de toets — volhouden en slim werken",
  emoji: "🏋️",
  level: "groep8",
  subject: "begrijpend-lezen",
  referentieNiveau: "1F/1S",
  sloThema: "Lezen — lange informatieve en verhalende teksten begrijpen",
  prerequisites: [
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategieën", niveau: "po-1F/1S" },
  ],
  intro:
    "Op de echte Doorstroomtoets zijn de leesteksten lang: 300 tot 400 woorden met 4 tot 6 vragen per tekst. Hier train je het uithoudingsvermogen én de slimme aanpak: eerst globaal lezen, per vraag terugzoeken, je tijd verdelen en nergens blijven hangen. Met twee eigen oefenteksten — zo lang als op de echte toets.",
  triggerKeywords: [
    "lange teksten", "lange tekst lezen", "doorstroomtoets lezen", "cito begrijpend lezen",
    "toetstekst", "leestoets", "volhouden lezen", "uithoudingsvermogen lezen",
    "tijdverdeling toets", "toets aanpak", "begrijpend lezen groep 8",
    "hoofdgedachte", "woordbetekenis", "conclusie trekken", "opzoeken in tekst",
  ],
  chapters,
  steps,
};

export default langeToetsTekstenG8Po;
