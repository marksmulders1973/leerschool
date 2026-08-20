// versieE.js — Leesladder 2 "de zware ladder", VERSIE E (20 aug 2026).
// Niveau 2: stevige groep 7-8 tot begin brugklas. Versie E bestaat naast D en F
// zodat een kind hetzelfde begrip met vérse teksten opnieuw kan oefenen.
// Format identiek aan leesladderData.js versie A: het goede antwoord staat
// ALTIJD op plek 0 (de pagina husselt de opties zelf).

export const VERSIE_E = [
  // ── TREDE 1 — 4 teksten van ±8 zinnen, elk 3 vragen ─────────────
  [
    {
      titel: "Licht in de diepzee",
      tekst: "Diep in de oceaan, op meer dan duizend meter, is het aardedonker. Toch is het er niet helemaal zwart. Veel diepzeedieren maken namelijk zelf licht met hun eigen lichaam. De hengelvis heeft bijvoorbeeld een lichtgevend 'hengeltje' boven zijn kop. Kleine visjes zwemmen nieuwsgierig op dat lampje af. Dat wordt hun laatste vergissing, want de hengelvis hapt razendsnel toe. Ook andere dieren gebruiken hun licht slim: sommige inktvissen geven een felle lichtflits om een vijand te laten schrikken. Zo is licht in de diepzee geen versiering, maar een middel om te overleven.",
      vragen: [
        {
          q: "Wat wil de schrijver vooral duidelijk maken?",
          options: [
            "Diepzeedieren gebruiken zelfgemaakt licht om te overleven",
            "De hengelvis heeft een hengeltje boven zijn kop",
            "De oceaan is meer dan duizend meter diep",
            "Inktvissen zijn de gevaarlijkste dieren van de zee",
          ],
          answer: 0,
          type: "hoofdgedachte",
          uitleg: "Het hengeltje en de lichtflits zijn maar vóórbeelden. De laatste zin is de paraplu waar alles onder past: licht is een middel om te overleven. Pas op voor antwoorden die wél letterlijk in de tekst staan, maar maar één klein stukje ervan zijn.",
        },
        {
          q: "Wat wordt bedoeld met 'dat wordt hun laatste vergissing'?",
          options: [
            "De hengelvis eet de visjes op",
            "De visjes zwemmen snel weg",
            "Het lampje van de hengelvis gaat uit",
            "De visjes leren zelf licht te maken",
          ],
          answer: 0,
          type: "conclusie trekken",
          uitleg: "Het staat er niet letterlijk. Je plakt twee stukjes aan elkaar: 'laatste vergissing' + 'de hengelvis hapt toe'. Als het je állerlaatste vergissing is, loopt het dus slecht met je af.",
        },
        {
          q: "Waarom geeft een inktvis soms een lichtflits?",
          options: [
            "Om een vijand te laten schrikken",
            "Om kleine visjes naar zich toe te lokken",
            "Om de weg te vinden in het donker",
            "Als versiering, om er mooi uit te zien",
          ],
          answer: 0,
          type: "detail opzoeken",
          uitleg: "Visjes lokken doet de héngelvis, niet de inktvis — en 'versiering' staat ook letterlijk in de tekst, maar juist als iets dat het NIET is. Lees precies welk dier wat doet; toetsen zetten er graag woorden uit de tekst bij die net niet kloppen.",
        },
      ],
    },
    {
      titel: "Hoe een hagelsteen groeit",
      tekst: "Hagelstenen beginnen hun leven als piepkleine druppels in een hoge onweerswolk. Sterke wind blaast de druppels in de wolk steeds omhoog, waar het ijskoud is. Daar bevriest de druppel tot een korreltje ijs. Het korreltje valt, vangt onderweg nieuw water en wordt daarna wéér omhoog geblazen. Bij elke reis omhoog krijgt de steen er zo een nieuw laagje ijs bij. Hoewel de meeste hagelstenen zo klein blijven als een erwt, kunnen ze bij zwaar noodweer uitgroeien tot ballen van enkele centimeters. Wie een grote hagelsteen doormidden snijdt, ziet de laagjes zitten, net als ringen in een boomstam. Zo kun je aan een hagelsteen aflezen hoe vaak hij op en neer is geslingerd.",
      vragen: [
        {
          q: "Hoe krijgt een hagelsteen steeds nieuwe laagjes ijs?",
          options: [
            "Hij wordt steeds opnieuw omhoog geblazen en bevriest daar weer",
            "Hij ligt lang op de koude grond",
            "Hij valt uit meerdere wolken tegelijk",
            "Hij wordt doormidden gesneden en groeit weer aan",
          ],
          answer: 0,
          type: "oorzaak & gevolg",
          uitleg: "Zin 4 en 5 beschrijven een rondje dat zich herhaalt: vallen, water vangen, omhoog, bevriezen — en bij élke reis komt er een laagje bij. Zoek bij zo'n vraag naar de zinnen die een herhaling beschrijven.",
        },
        {
          q: "Het woord 'hoewel' in de zin over de erwt laat zien dat…",
          options: [
            "er iets komt dat je na het eerste stuk niet verwacht",
            "er een reden wordt gegeven",
            "de tekst bijna is afgelopen",
            "er een opsomming begint",
          ],
          answer: 0,
          type: "signaalwoord",
          uitleg: "'Hoewel' is een draai-woord, net als 'maar' en 'toch': eerst hoor je dat de meeste stenen klein blijven, en dan komt er iets dat daar tegenin gaat — soms worden het ballen van centimeters.",
        },
        {
          q: "Waarom vergelijkt de schrijver de laagjes met ringen in een boomstam?",
          options: [
            "Om iets nieuws uit te leggen met iets dat je al kent",
            "Omdat hagelstenen uit bomen vallen",
            "Omdat bomen ook door de wind heen en weer gaan",
            "Om te laten zien hoe gevaarlijk hagel is",
          ],
          answer: 0,
          type: "vergelijking begrijpen",
          uitleg: "Laagjes ín een hagelsteen heeft bijna niemand ooit gezien; jaarringen in een boomstam wél. Een schrijver pakt vaak een bekend plaatje om een onbekend plaatje uit te leggen.",
        },
      ],
    },
    {
      titel: "De contrabas",
      tekst: "Jesse koos op muziekles het grootste instrument dat er stond: de contrabas. Zijn vrienden kozen daarentegen allemaal gitaar, omdat je die makkelijk mee naar huis neemt. De eerste weken klonk Jesses spel als een brommende koelkast. Bovendien deden zijn vingers pijn van de dikke snaren. Meer dan eens dacht hij: had ik maar gewoon gitaar gekozen. Toch bleef hij elke dag tien minuten oefenen, ook als zijn vrienden buiten gingen voetballen. Op het schoolconcert, drie maanden later, kreeg de jongen achter de reuzenbas het hardste applaus van de avond. Jesse boog diep en dacht: die pijnlijke vingers waren het waard.",
      vragen: [
        {
          q: "Wat leer je vooral uit dit verhaal?",
          options: [
            "Wie volhoudt als het zwaar is, wordt daar later voor beloond",
            "Gitaar is makkelijker mee naar huis te nemen dan een contrabas",
            "Een contrabas klinkt als een brommende koelkast",
            "Voetballen is leuker dan muziekles",
          ],
          answer: 0,
          type: "hoofdgedachte",
          uitleg: "De boodschap staat nérgens letterlijk — je haalt hem uit het hele verhaal: pijn en twijfel, tóch doorgaan, en dan het applaus. Twee van de foute antwoorden staan wél letterlijk in de tekst; dat is de valstrik.",
        },
        {
          q: "Het woord 'daarentegen' in zin 2 geeft aan dat…",
          options: [
            "de vrienden iets anders doen dan Jesse",
            "de vrienden hetzelfde kiezen als Jesse",
            "er een reden voor Jesses keuze komt",
            "het verhaal in het verleden speelt",
          ],
          answer: 0,
          type: "signaalwoord",
          uitleg: "'Daarentegen' zet twee dingen tegenover elkaar: Jesse kiest het grootste instrument, zijn vrienden juist iets heel anders. Zie je dit woord, zoek dan de twee kanten van de tegenstelling.",
        },
        {
          q: "'De jongen achter de reuzenbas' — wie is dat?",
          options: [
            "Jesse",
            "Een vriend met een gitaar",
            "De muziekleraar",
            "Een jongen uit het publiek",
          ],
          answer: 0,
          type: "verwijswoord",
          uitleg: "De schrijver noemt Jesse hier niet bij zijn naam, maar met andere woorden. De 'reuzenbas' wijst helemaal terug naar zin 1: het grootste instrument dat er stond. Verwijzingen kunnen dus véél verder terugwijzen dan één zin.",
        },
      ],
    },
    {
      titel: "Van boon tot reep",
      tekst: "Chocolade begint aan een boom in warme landen rond de evenaar. Aan de stam groeien grote vruchten met daarin tientallen cacaobonen. Boeren halen de bonen eruit en laten ze eerst dagenlang onder bladeren liggen; daardoor krijgen ze hun smaak. Daarna drogen de bonen in de zon en gaan ze per schip naar fabrieken over de hele wereld. Daar worden ze geroosterd en vermalen tot een dikke bruine massa. Pas als er suiker en melk bij komen, ontstaat de smaak die jij kent. Verse cacaobonen smaken namelijk bitter; niemand zou er zo een reep van willen maken. Een reep chocola heeft er dus al een wereldreis op zitten voordat hij in de winkel ligt.",
      vragen: [
        {
          q: "Wat gebeurt er direct nadat de bonen onder bladeren hebben gelegen?",
          options: [
            "Ze drogen in de zon",
            "Ze worden geroosterd en vermalen",
            "Er komen suiker en melk bij",
            "Ze groeien aan de stam van de boom",
          ],
          answer: 0,
          type: "volgorde",
          uitleg: "Zoek de tijd-woorden: 'eerst… daarna… daar… pas als…'. Roosteren gebeurt óók, maar pas later in de fabriek. Bij een volgorde-vraag helpt het om de stappen even op een rijtje in je hoofd te zetten.",
        },
        {
          q: "Waarom liggen de bonen dagenlang onder bladeren?",
          options: [
            "Daardoor krijgen ze hun smaak",
            "Om ze koel te houden voor de reis",
            "Zodat vogels ze niet kunnen vinden",
            "Omdat het schip nog niet klaarligt",
          ],
          answer: 0,
          type: "oorzaak & gevolg",
          uitleg: "'Daardoor' plakt de reden meteen aan de zin vast: onder bladeren liggen → smaak krijgen. De andere antwoorden klinken logisch, maar de tekst noemt ze nergens — en alleen wat er stáát telt.",
        },
        {
          q: "Het woord 'namelijk' in de zin over verse cacaobonen vertelt je dat…",
          options: [
            "er een uitleg volgt bij wat er net stond",
            "er iets onverwachts aankomt",
            "de tekst over een nieuw onderwerp begint",
            "de schrijver een grapje maakt",
          ],
          answer: 0,
          type: "signaalwoord",
          uitleg: "'Namelijk' (en ook 'immers') zegt: let op, ik leg nu uit waaróm dat zo is. Waarom is suiker en melk nodig? Namelijk: verse bonen smaken bitter.",
        },
      ],
    },
  ],

  // ── TREDE 2 — 3 teksten van ±150 woorden, elk 3 vragen ──────────
  [
    {
      titel: "De lantaarnopsteker",
      tekst: "Voordat er elektrische straatverlichting bestond, brandden in de stad honderden gaslantaarns. Die gingen niet vanzelf aan; daarvoor had je een lantaarnopsteker nodig. Elke avond, weer of geen weer, liep hij met een lange stok door de straten. Aan het uiteinde van die stok zat een vlammetje, waarmee hij lantaarn voor lantaarn aanstak. Bij zonsopkomst maakte hij dezelfde ronde, maar dan om alle vlammen weer te doven.\n\nKinderen renden vaak een stukje met hem mee, want waar hij liep, werd de donkere straat stap voor stap licht. Het beroep verdween toen steden overstapten op elektrische lampen, die je met één schakelaar allemaal tegelijk kon bedienen. Hoewel bijna niemand de lantaarnopsteker nog kent, is hij niet helemaal vergeten: in sommige steden steekt een opsteker één avond per jaar de oude lantaarns weer aan, als eerbetoon aan dit stille beroep.",
      vragen: [
        {
          q: "Welke zin vat de hele tekst het best samen?",
          options: [
            "De lantaarnopsteker stak vroeger elke avond de gaslantaarns aan, tot elektrische lampen zijn beroep overbodig maakten",
            "Kinderen renden vroeger graag met de lantaarnopsteker mee door de straten",
            "Met één schakelaar kon je alle elektrische lampen tegelijk bedienen",
            "In veel steden branden nog altijd honderden gaslantaarns",
          ],
          answer: 0,
          type: "samenvatten",
          uitleg: "Een goede samenvatting dekt de héle tekst: het werk van de opsteker én het verdwijnen van het beroep. De andere antwoorden zijn maar één detail — of ze verdraaien de tekst net een beetje.",
        },
        {
          q: "Waardoor verdween het beroep van lantaarnopsteker?",
          options: [
            "Steden gingen elektrische lampen gebruiken",
            "Niemand wilde 's avonds nog buiten werken",
            "De lantaarns gingen voortaan vanzelf uit bij zonsopkomst",
            "De lange stokken werden verboden",
          ],
          answer: 0,
          type: "oorzaak & gevolg",
          uitleg: "'Het beroep verdween toen…' — het woordje 'toen' verklapt hier de oorzaak. Wat na 'toen' komt, is de verandering die het beroep overbodig maakte.",
        },
        {
          q: "'Als eerbetoon' betekent hier dat de steden…",
          options: [
            "willen laten zien dat ze het oude beroep waarderen",
            "de lantaarnopsteker terug willen als vaste baan",
            "zuinig willen zijn met stroom",
            "kinderen willen leren hoe je vuur maakt",
          ],
          answer: 0,
          type: "woord uit de zin halen",
          uitleg: "Ken je het woord niet? Kijk naar de zin eromheen: het gebeurt maar één avond per jaar en het beroep is 'niet helemaal vergeten'. Dat klinkt als eren en herinneren, niet als een echte baan.",
        },
      ],
    },
    {
      titel: "Het briefje in de boom",
      tekst: "Sinds Milan naar een andere stad is verhuisd, voelt de pauze voor Amber leeg. Vier jaar lang bedachten ze samen geheime spellen; nu staat ze wat verloren bij het klimrek. Op een woensdag vindt ze in een holte van de oude kastanjeboom een opgevouwen papiertje. 'Voor de bewaker van de boom,' staat erop, in hanenpoten die ze niet herkent. Iemand heeft er een raadsel op geschreven.\n\nAmber schrijft het antwoord eronder, stopt het papiertje terug en wacht. De volgende dag ligt er een nieuw raadsel, moeilijker dan het eerste. Zo gaat het weken door, tot Amber vlak voor de kerstvakantie eindelijk durft op te schrijven: 'Wie ben je eigenlijk?' Het antwoord komt een dag later: 'Kijk maar eens om.' Achter haar staat Roos uit de parallelklas, verlegen zwaaiend. 'Jij keek altijd zo alleen,' zegt ze zacht. 'En ik ook.'",
      vragen: [
        {
          q: "Hoe voelt Amber zich aan het begin van het verhaal?",
          options: [
            "Eenzaam",
            "Boos op Milan",
            "Bang voor de kastanjeboom",
            "Blij dat de pauze begint",
          ],
          answer: 0,
          type: "gevoel afleiden",
          uitleg: "De schrijver zegt nergens 'Amber is eenzaam', maar laat het zien: de pauze voelt 'leeg' en ze staat 'verloren' bij het klimrek. Gevoelens lees je vaak af aan zulke laat-zien-woorden.",
        },
        {
          q: "Wat kun je uit het slot van het verhaal opmaken?",
          options: [
            "Roos schreef de raadsels, omdat ze zelf ook alleen was",
            "Milan stuurde de raadsels stiekem vanuit zijn nieuwe stad",
            "De juf verstopte de raadsels om de klas te laten oefenen",
            "Amber schreef de raadsels zelf en was het vergeten",
          ],
          answer: 0,
          type: "conclusie trekken",
          uitleg: "Plak de aanwijzingen aan elkaar: 'Kijk maar eens om' + Roos die daar staat + 'En ik ook' na 'jij keek altijd zo alleen'. Samen vertellen die stukjes wie de schrijver was én waarom.",
        },
        {
          q: "'…moeilijker dan het eerste.' Waar wijst 'het eerste' naar?",
          options: [
            "Het eerste raadsel op het papiertje",
            "Het eerste briefje van Milan",
            "De eerste dag na de verhuizing",
            "Het eerste antwoord van Amber",
          ],
          answer: 0,
          type: "verwijswoord",
          uitleg: "'Het eerste' wijst niet naar de zin er vlak voor, maar een alinea terug: het raadsel dat Amber in de boom vond. Bij verwijswoorden moet je soms een flink stuk terugbladeren in de tekst.",
        },
      ],
    },
    {
      titel: "Een liedje dat blijft plakken",
      tekst: "Ken je dat? Je hoort 's ochtends een liedje, en de rest van de dag zingt het door je hoofd. Zo'n plak-liedje wordt een oorwurm genoemd, hoewel er natuurlijk geen echt beestje in je oor zit. Onderzoekers ontdekten dat vooral simpele, vrolijke liedjes met veel herhaling blijven hangen. Je hersenen houden immers van patronen: horen ze een stukje melodie, dan vullen ze de rest vanzelf aan, als een puzzel die zichzelf wil afmaken.\n\nMeestal is een oorwurm onschuldig en verdwijnt hij na een tijdje vanzelf. Duurt het te lang, dan helpt het om het liedje één keer helemaal uit te luisteren, of juist om iets te gaan doen dat al je aandacht vraagt, zoals een spelletje. Sommige mensen vinden oorwurmen vreselijk irritant; anderen genieten juist van dat gratis radiootje in hun hoofd.",
      vragen: [
        {
          q: "Wat is een oorwurm volgens deze tekst?",
          options: [
            "Een liedje dat in je hoofd blijft doorzingen",
            "Een beestje dat in je oor kruipt",
            "Een puzzel die je hersenen elke ochtend maken",
            "Een radiootje dat je zachter kunt zetten",
          ],
          answer: 0,
          type: "woord uit de zin halen",
          uitleg: "De tekst legt het zelf uit: 'zo'n plak-liedje wordt een oorwurm genoemd'. Het beestje staat er ook, maar mét het woord 'hoewel… geen echt beestje' — de tekst streept die betekenis dus juist wég.",
        },
        {
          q: "Waarom blijven juist liedjes met veel herhaling hangen?",
          options: [
            "Je hersenen houden van patronen en vullen de melodie vanzelf aan",
            "Herhaalde liedjes zijn altijd vrolijker dan andere liedjes",
            "Zulke liedjes duren langer, dus hoor je ze vaker",
            "Je hoort ze alleen 's ochtends, als je hoofd nog leeg is",
          ],
          answer: 0,
          type: "oorzaak & gevolg",
          uitleg: "'Immers' is een reden-woord: wat erna komt, legt uit waaróm het zo is. Herhaling = patroon, en patronen maken je hersenen graag zelf af.",
        },
        {
          q: "Welke uitspraak is een MENING en geen feit?",
          options: [
            "Oorwurmen zijn vreselijk irritant",
            "Vooral liedjes met veel herhaling blijven hangen",
            "Een oorwurm verdwijnt meestal vanzelf",
            "Er zit geen echt beestje in je oor",
          ],
          answer: 0,
          type: "mening vs feit",
          uitleg: "Een feit kun je controleren of onderzoeken; een mening is wat iemand ervan víndt. 'Vreselijk irritant' is een gevoel — de tekst zegt zelf al dat anderen er juist van genieten.",
        },
      ],
    },
  ],

  // ── TREDE 3 — 3 teksten van ±230 woorden, elk 4 vragen ──────────
  [
    {
      titel: "Bezoek aan het diepste punt",
      tekst: "Het diepste punt van de oceaan ligt bijna elf kilometer onder het wateroppervlak. Zou je de hoogste berg van de wereld in die trog laten zakken, dan stak zijn top nog niet eens boven het water uit. Op zulke diepten drukt het water met een enorme kracht: het voelt alsof er honderden olifanten op een postzegel staan. Gewone duikboten zouden er in elkaar worden gedrukt als een leeg drinkpakje.\n\nDesondanks zijn er onderzoekers afgedaald, in speciale duikboten met wanden van dik staal. Wat zij aantroffen, verraste iedereen. Zelfs op de bodem van de trog krioelt het van het leven: doorzichtige zeekomkommers, garnalen en visjes die tegen de kou en de druk kunnen. Veel van die dieren had nog nooit iemand gezien. Eén vondst maakte de onderzoekers minder vrolijk: op het diepste punt van de aarde lag een plastic tasje.\n\nJe zou denken dat zo'n verre, donkere plek ons niet aangaat. Het tegendeel is waar. De diepzee helpt het klimaat op aarde in evenwicht te houden, en veel vissen die wij kennen, vinden er hun voedsel. Wie de diepzee beschadigt, raakt dus uiteindelijk ook de wereld boven water. Daarom vragen wetenschappers om zuinig te zijn op een plek die bijna niemand ooit met eigen ogen zal zien — maar waar iedereen iets aan heeft.",
      vragen: [
        {
          q: "Waarom noemt de schrijver de hoogste berg van de wereld?",
          options: [
            "Om je te laten voelen hoe diep de trog is",
            "Omdat die berg vroeger in zee lag",
            "Om te laten zien hoe hoog golven kunnen worden",
            "Omdat onderzoekers eerst die berg beklommen",
          ],
          answer: 0,
          type: "vergelijking begrijpen",
          uitleg: "Elf kilometer diep kun je je moeilijk voorstellen; de hoogste berg ken je wél. Zelfs die zou er helemaal in verdwijnen — zo wordt 'diep' ineens voelbaar.",
        },
        {
          q: "Wat vonden de onderzoekers op de bodem behalve dieren?",
          options: [
            "Een plastic tasje",
            "Een leeg drinkpakje",
            "Een postzegel",
            "Een oud anker",
          ],
          answer: 0,
          type: "detail opzoeken",
          uitleg: "Het drinkpakje en de postzegel staan óók in de tekst, maar alleen in vergelijkingen ('als een leeg drinkpakje'). Echt gevónden is alleen het tasje. Check bij zo'n vraag altijd of het woord echt gebeurt of alleen als beeld wordt gebruikt.",
        },
        {
          q: "'Het tegendeel is waar.' Wat bedoelt de schrijver daarmee?",
          options: [
            "De diepzee gaat ons juist wél aan",
            "De diepzee is toch niet zo donker",
            "De onderzoekers hadden zich vergist",
            "Bijna iedereen zal de diepzee ooit zelf zien",
          ],
          answer: 0,
          type: "verwijswoord",
          uitleg: "'Het tegendeel' wijst terug naar de zin ervoor: 'je zou denken dat die plek ons niet aangaat'. Het tegendeel daarvan is dus: hij gaat ons wél aan — en de rest van de alinea legt uit waarom.",
        },
        {
          q: "Wat wil de schrijver met de laatste alinea bereiken?",
          options: [
            "Je laten inzien dat we zuinig moeten zijn op de diepzee",
            "Je bang maken voor de diepe zee",
            "Je uitnodigen om zelf een keer af te dalen",
            "Uitleggen hoe een stalen duikboot wordt gebouwd",
          ],
          answer: 0,
          type: "doel van de schrijver",
          uitleg: "Een tekst kan informeren, overtuigen of vermaken — en soms alles tegelijk. De eerste twee alinea's informeren, maar het slot wil iets van jóú: begrijpen dat de diepzee bescherming verdient.",
        },
      ],
    },
    {
      titel: "De bosloop",
      tekst: "Bij de start van de bosloop frunnikt Fien voor de derde keer aan haar veters, al zitten die allang goed. Haar hart bonkt alsof het alvast vooruit wil rennen. Twee kilometer is het, dwars door het park, en haar broer heeft beloofd bij de finish te staan. Het startschot klinkt. De eerste honderd meter gaan vanzelf; ze zweeft bijna over het pad. Maar halverwege begint een venijnige steek in haar zij te prikken, en het meisje voor haar wordt kleiner en kleiner in de verte.\n\nStoppen mag, had de meester gezegd, dat is geen schande. Even lijkt dat een heerlijk plan. Dan hoort Fien in haar hoofd de stem van haar zwemjuf van vroeger: adem laag in je buik, tel je passen, kijk niet naar de ander maar naar het volgende bochtje. Gek eigenlijk, denkt ze, want zwemmen en rennen lijken in niets op elkaar. Toch werkt het. Bochtje voor bochtje wordt de steek zachter.\n\nDe finishboog komt in zicht. Fien wordt zevende, ver achter het snelle meisje. Haar broer rent juichend op haar af alsof ze goud heeft gewonnen. 'Je bent niet één keer gestopt,' zegt hij, en hij steekt zijn hand omhoog. Pas op dat moment voelt Fien hoe trots ze eigenlijk is. Zevende worden kan blijkbaar mooier zijn dan winnen.",
      vragen: [
        {
          q: "Hoe merk je aan het begin dat Fien zenuwachtig is, ook al staat dat er niet?",
          options: [
            "Ze frunnikt steeds aan veters die allang goed zitten",
            "Ze rent de eerste honderd meter veel te snel",
            "Ze kijkt steeds naar het snelle meisje",
            "Ze vraagt de meester of ze mag stoppen",
          ],
          answer: 0,
          type: "gevoel afleiden",
          uitleg: "Een goede schrijver zégt niet 'ze is zenuwachtig', maar laat het zien in gedrag: drie keer aan veters zitten die al goed vastzitten, en een bonkend hart. Daaraan lees je het gevoel af.",
        },
        {
          q: "Welke boodschap past het best bij dit verhaal?",
          options: [
            "Doorzetten kan waardevoller zijn dan winnen",
            "Wie zevende wordt, heeft niet goed getraind",
            "Zwemles is belangrijker dan hardlopen",
            "Bij een steek in je zij kun je het best meteen stoppen",
          ],
          answer: 0,
          type: "hoofdgedachte",
          uitleg: "De laatste zin geeft een grote hint: zevende worden kan mooier zijn dan winnen. De boodschap gaat dus niet over de uitslag, maar over niet opgeven — dáár is haar broer trots op.",
        },
        {
          q: "'Toch werkt het.' Wat werkt er?",
          options: [
            "De tips van de zwemjuf van vroeger",
            "Stoppen langs de kant van het pad",
            "Kijken naar het snelle meisje in de verte",
            "De belofte van haar broer",
          ],
          answer: 0,
          type: "verwijswoord",
          uitleg: "'Het' wijst terug naar de raad van de zwemjuf, een paar zinnen eerder: laag ademen, passen tellen, naar het volgende bochtje kijken. De zin ertussen ('zwemmen en rennen lijken in niets op elkaar') is een zijstapje — kijk daar overheen.",
        },
        {
          q: "Waarom rent haar broer juichend op haar af?",
          options: [
            "Hij is trots omdat ze niet één keer gestopt is",
            "Ze heeft goud gewonnen",
            "Ze is als eerste over de finish gekomen",
            "Hij wil zelf ook meedoen aan de loop",
          ],
          answer: 0,
          type: "conclusie trekken",
          uitleg: "Er staat 'alsof ze goud heeft gewonnen' — 'alsof' betekent dat het níét echt zo is, het lijkt er alleen op. Wat hij daarna zegt ('je bent niet één keer gestopt') verklapt de echte reden.",
        },
      ],
    },
    {
      titel: "Zout uit zee en berg",
      tekst: "Zonder zout zou je bord er maar saai bij staan: brood, kaas, soep en zelfs koekjes bevatten het. Maar waar komt al dat zout eigenlijk vandaan? Grofweg zijn er twee bronnen, en die liggen verder uit elkaar dan je zou denken: de zee en de berg.\n\nZeezout winnen werkt zo. Langs warme kusten laten zoutboeren zeewater in ondiepe bakken stromen. De zon verwarmt het water, dat langzaam verdampt. Het zout verdampt echter niet mee; dat blijft achter als een witte, glinsterende korst. Die korst wordt bijeengeschraapt, gewassen en gemalen. Hoe warmer en droger het land, hoe sneller dit gaat; in koude, natte landen is deze methode daarentegen bijna onbruikbaar.\n\nSteenzout komt juist uit de diepte. Op plekken waar miljoenen jaren geleden een zee lag, bleef na het opdrogen een dikke zoutlaag achter, die later door zand en klei werd bedekt. Mijnwerkers boren gangen naar die laag, soms honderden meters diep, en hakken of spoelen het zout eruit. Het meeste strooizout voor gladde winterwegen komt uit zulke mijnen; het hoeft immers niet zo zuiver te zijn als zout voor in de keuken.\n\nZee of berg — voor de smaak maakt het weinig uit: zout is zout. Toch is het aardig om te weten dat de witte korrels op je friet misschien ooit de bodem van een oerzee waren.",
      vragen: [
        {
          q: "Welke samenvatting past het best bij deze tekst?",
          options: [
            "Zout komt uit twee bronnen: uit verdampt zeewater en uit oude zoutlagen diep onder de grond",
            "Zoutboeren schrapen langs warme kusten witte korsten uit ondiepe bakken",
            "Strooizout maakt gladde winterwegen weer veilig",
            "Zonder zout smaken brood, kaas en koekjes nergens naar",
          ],
          answer: 0,
          type: "samenvatten",
          uitleg: "Een samenvatting moet álle alinea's dekken. De andere antwoorden kloppen wel min of meer, maar gaan maar over één stukje — dat is te smal voor een samenvatting.",
        },
        {
          q: "Waarom blijft er in de bakken een zoutkorst achter?",
          options: [
            "Het water verdwijnt in de lucht, maar het zout blijft liggen",
            "De zon maakt het zout wit en glinsterend",
            "Zoutboeren strooien elke dag zout in de bakken",
            "De zee spoelt korsten over de rand naar binnen",
          ],
          answer: 0,
          type: "oorzaak & gevolg",
          uitleg: "Het woordje 'echter' zet de twee tegenover elkaar: het water verdampt wél, het zout niet. Wat niet mee verdwijnt, blijft dus als korst achter.",
        },
        {
          q: "'In koude, natte landen is deze methode daarentegen bijna onbruikbaar.' Wat doet 'daarentegen' hier?",
          options: [
            "Het zet koude landen tegenover de warme, droge landen uit de zin ervoor",
            "Het geeft de reden waarom zout duur is",
            "Het kondigt een opsomming van landen aan",
            "Het laat zien dat de alinea is afgelopen",
          ],
          answer: 0,
          type: "signaalwoord",
          uitleg: "'Daarentegen' is een tegenstelling-woord. De zin ervoor zegt: warm en droog = snel. Deze zin zet daar het omgekeerde tegenover: koud en nat = werkt bijna niet.",
        },
        {
          q: "Waarom hoeft strooizout niet zo zuiver te zijn als keukenzout?",
          options: [
            "Je eet het niet op; het gaat over de weg",
            "Het komt uit een schonere, diepere mijn",
            "Het wordt eerst gewassen en gemalen",
            "Het is gemaakt van vers zeewater",
          ],
          answer: 0,
          type: "conclusie trekken",
          uitleg: "De tekst zegt het niet letterlijk — je moet zelf de stap maken: keukenzout gaat in je eten, strooizout op de wég. Wat niemand opeet, hoeft niet zo schoon te zijn. 'Wassen en gemalen' staat wel in de tekst, maar hoort bij het zéézout.",
        },
      ],
    },
  ],

  // ── TREDE 4 — 2 teksten van ±320-350 woorden, elk 5 vragen ──────
  [
    {
      titel: "Onweer: van flits tot knal",
      tekst: "Een flits die de hemel splijt, en dan die dreun waar je van schrikt: onweer is een van de indrukwekkendste natuurverschijnselen die je vanuit je eigen huis kunt meemaken. Maar wat gebeurt daar nu eigenlijk, hoog in die donkere wolk?\n\nIn een onweerswolk razen ijskorreltjes en waterdruppels met grote snelheid langs elkaar heen. Door al dat botsen en schuren raakt de wolk elektrisch geladen — ongeveer zoals je haar rechtovereind gaat staan wanneer je een ballon langs je trui wrijft. Wordt de spanning te groot, dan ontlaadt de wolk zich in één klap: de bliksem. Zo'n flits is heter dan het oppervlak van de zon. De lucht eromheen zet door die hitte razendsnel uit, en dat geeft een enorme knal: de donder.\n\nLicht reist veel sneller dan geluid. Daardoor zie je de flits eerst en hoor je de klap pas later. Dat is nog handig ook: tel de seconden tussen flits en donder en deel ze door drie, dan weet je ongeveer hoeveel kilometer het onweer bij je vandaan is. Tel je negen seconden, dan is de bui dus zo'n drie kilometer verderop.\n\nHoewel bliksem zelden een mens raakt, is voorzichtig zijn verstandig. Binnen ben je veilig, en ook in een auto zit je goed: de bliksem loopt dan via de metalen buitenkant weg. Sta je buiten in een open veld, ga dan niet onder een losse, hoge boom staan, maar hurk laag bij de grond — tenzij je een gebouw kunt bereiken, want dat blijft altijd de beste keuze. En wacht na de laatste donder nog even voordat je weer naar buiten gaat; een bui kan verder weg zijn dan hij klinkt.\n\nOnweer heeft trouwens ook een vriendelijke kant. De bliksem maakt stoffen in de lucht waar planten van groeien, en na een flinke bui ruikt de wereld schoongewassen. Boeren zeiden vroeger daarom: een zomeronweer is gratis plantenvoeding. Bang hoef je dus niet te zijn, zolang je slim schuilt. Wie binnen zit, mag zelfs stiekem genieten: gordijnen open, seconden tellen, en kijken hoe de hemel gratis vuurwerk weggeeft.",
      vragen: [
        {
          q: "Waardoor raakt een onweerswolk elektrisch geladen?",
          options: [
            "IJskorreltjes en druppels botsen en schuren met grote snelheid langs elkaar",
            "De zon verwarmt de wolk tot hij heter is dan zijn oppervlak",
            "Iemand wrijft met een ballon langs de wolk",
            "De donder schudt de wolk door elkaar",
          ],
          answer: 0,
          type: "oorzaak & gevolg",
          uitleg: "'Door al dat botsen en schuren…' — het woordje 'door' wijst de oorzaak aan. De ballon is alleen een vergelijking om het uit te leggen, en de hitte hoort bij de flits, niet bij het opladen.",
        },
        {
          q: "Wat is donder precies, en waarom hoor je hem pas ná de flits?",
          options: [
            "De knal van razendsnel uitzettende hete lucht, die je later hoort omdat geluid trager reist dan licht",
            "De bliksem zelf, die je van heel ver weg kunt horen",
            "Een tweede bliksem die je niet kunt zien",
            "Botsende ijskorreltjes, die je meteen hoort",
          ],
          answer: 0,
          type: "twee alinea's combineren",
          uitleg: "Hier heb je twéé alinea's nodig: alinea 2 vertelt wat donder ís (uitzettende hete lucht), alinea 3 waarom hij later aankomt (geluid is trager dan licht). Zware vragen plakken vaker stukjes uit verschillende alinea's aan elkaar.",
        },
        {
          q: "Je ziet een flits en telt zes seconden tot de donder. Hoe ver is het onweer ongeveer?",
          options: [
            "Twee kilometer",
            "Zes kilometer",
            "Drie kilometer",
            "Negen kilometer",
          ],
          answer: 0,
          type: "detail opzoeken",
          uitleg: "De regel staat in alinea 3: seconden delen door drie. Zes gedeeld door drie is twee. De getallen negen en drie staan óók in de tekst, maar horen bij het vóórbeeld — trap er niet in.",
        },
        {
          q: "'…hurk laag bij de grond — tenzij je een gebouw kunt bereiken.' Wat betekent dit?",
          options: [
            "Hurken doe je alleen als er geen gebouw in de buurt is",
            "Je moet altijd eerst hurken, ook vlak naast een gebouw",
            "In een gebouw moet je ook laag bij de grond blijven",
            "Hurken in het veld is veiliger dan naar binnen gaan",
          ],
          answer: 0,
          type: "signaalwoord",
          uitleg: "'Tenzij' betekent: behálve als. De regel (hurken) geldt dus alleen zolang de uitzondering (een gebouw halen) niet kan. De tekst zegt er zelf bij dat het gebouw altijd de beste keuze blijft.",
        },
        {
          q: "Welke samenvatting past het best bij deze tekst?",
          options: [
            "Onweer ontstaat door elektrische lading in wolken; met een paar slimme regels ben je veilig en valt er zelfs van te genieten",
            "Bliksem is heter dan de zon en daarom voor iedereen levensgevaarlijk",
            "In een auto ben je nergens veilig voor de bliksem",
            "Boeren strooien na een onweersbui plantenvoeding op hun akkers",
          ],
          answer: 0,
          type: "samenvatten",
          uitleg: "De goede samenvatting dekt de hele lijn: hoe onweer ontstaat, hoe je veilig blijft én de vriendelijke kant. De andere antwoorden pakken één detail en verdraaien het net — vergelijk ze altijd woord voor woord met de tekst.",
        },
      ],
    },
    {
      titel: "Het duet",
      tekst: "Al vanaf groep vijf zitten Yara en Selin naast elkaar op dwarsfluitles. Ze zijn zo op elkaar ingespeeld dat hun juf hen 'de tweeling' noemt, hoewel ze niet eens familie zijn. Voor de grote voorspeelavond in maart studeren ze een duet in: een snel stuk met een lastig middendeel, waarin de een moet ademen precies wanneer de ander speelt. Het gaat zo vlug dat ze het eerst in slow motion moesten leren. Wekenlang oefenen ze elke woensdag bij Selin thuis, met de kat als enig publiek. De uitnodigingen voor de avond zijn al verstuurd; hun namen staan er naast elkaar op gedrukt.\n\nTwee weken voor het optreden gaat het mis. Selin glijdt uit bij gym en breekt haar pols. 'Een duet met één fluit bestaat niet,' zegt Yara somber tegen haar moeder, 'dus we moeten wel afzeggen.' Maar die avond stuurt Selin een filmpje. Ze houdt haar dwarsfluit met haar goede hand vast en speelt, met veel gepiep, drie lange noten. 'Die lukken nog,' schrijft ze erbij. 'Als jij nou alle snelle loopjes doet?'\n\nWat volgt zijn de gekste oefenmiddagen ooit. Ze schuiven de partijen door elkaar: Yara neemt alle vlugge stukjes, Selin de rustige, lange noten die ze met één hand kan spelen. De kat vlucht de eerste middag onder de bank. Het klinkt dan ook eerst als een ruzie tussen twee wekkers. Maar langzaam ontstaat er iets nieuws: een versie die geen componist ooit zo heeft bedacht.\n\nOp de voorspeelavond kondigt de juf hen aan met een klein lachje: 'En dan nu de tweeling, in een uitvoering die u nergens anders zult horen.' Zodra de meisjes hun fluiten heffen, wordt het muisstil in de zaal. Halverwege het lastige middendeel kijken ze elkaar even aan, precies zoals altijd, en op dat moment weet Yara het zeker: afzeggen was het makkelijkst geweest, maar dit is duizend keer mooier. Het applaus is niet het hardste van de avond. Het duurt wel het langst. En terwijl ze buigen, fluistert Selin: 'Volgend jaar weer? Dan mag jij de lange noten.'",
      vragen: [
        {
          q: "Welke boodschap zit verstopt in dit verhaal?",
          options: [
            "Met aanpassen en doorzetten kun je van een tegenslag iets moois maken",
            "Een duet met één fluit bestaat niet",
            "Gymles is gevaarlijk voor muzikanten",
            "Oefenen lukt het best bij iemand thuis",
          ],
          answer: 0,
          type: "hoofdgedachte",
          uitleg: "De boodschap staat nergens letterlijk; je haalt hem uit de hele lijn: pols gebroken, bijna afgezegd, plan aangepast, mooiste optreden. Let op: 'een duet met één fluit bestaat niet' stáát in de tekst — maar het verhaal bewijst juist het tegendeel.",
        },
        {
          q: "Waarom noemt de juf het 'een uitvoering die u nergens anders zult horen'?",
          options: [
            "De meisjes spelen een eigen versie waarin de partijen anders zijn verdeeld dan ooit bedacht",
            "Selin speelt het stuk op een blokfluit in plaats van een dwarsfluit",
            "Het is de allereerste voorspeelavond van de muziekschool",
            "De juf heeft het stuk zelf voor hen geschreven",
          ],
          answer: 0,
          type: "twee alinea's combineren",
          uitleg: "De uitspraak van de juf staat in de laatste alinea, maar de uitleg staat een alinea eerder: ze schoven de partijen door elkaar tot 'een versie die geen componist ooit zo heeft bedacht'. Die twee stukjes samen geven het antwoord.",
        },
        {
          q: "'Het klinkt dan ook eerst als een ruzie tussen twee wekkers.' Wat bedoelt de schrijver?",
          options: [
            "Hun nieuwe verdeling klinkt in het begin rommelig en schel",
            "De meisjes maken tijdens het oefenen ruzie met elkaar",
            "Er staan twee wekkers af in de kamer",
            "Ze spelen expres zo vals mogelijk",
          ],
          answer: 0,
          type: "vergelijking begrijpen",
          uitleg: "Dit is beeldspraak: het klinkt ALS twee wekkers, er zijn geen echte wekkers. De zin ervoor helpt ook — zelfs de kat vlucht onder de bank. Zo laat de schrijver horen hoe schel het eerst klinkt, zonder het woord 'lelijk' te gebruiken.",
        },
        {
          q: "Wat laat de schrijver zien met 'Het applaus is niet het hardste van de avond. Het duurt wel het langst.'?",
          options: [
            "Het publiek is echt geraakt door hun optreden",
            "De zaal vond andere kinderen veel beter",
            "Er zaten die avond weinig mensen in de zaal",
            "Het publiek wilde graag naar huis",
          ],
          answer: 0,
          type: "conclusie trekken",
          uitleg: "Lang applaus betekent dat mensen niet willen stoppen met klappen — dat doe je alleen als iets je écht raakt. De schrijver laat je dat zelf uitrekenen in plaats van het voor te zeggen; dat maakt het slot sterker.",
        },
        {
          q: "Wat gebeurde er als éérste nadat Selin haar pols had gebroken?",
          options: [
            "Yara zei tegen haar moeder dat ze moesten afzeggen",
            "Selin stuurde een filmpje met drie lange noten",
            "Ze schoven de partijen door elkaar",
            "De juf kondigde hen aan op de voorspeelavond",
          ],
          answer: 0,
          type: "volgorde",
          uitleg: "Zet de gebeurtenissen op een rijtje: val bij gym → Yara wil afzeggen → 'maar die avond' stuurt Selin het filmpje → gekke oefenmiddagen → optreden. Woorden als 'maar die avond' en 'wat volgt' zijn je wegwijzers.",
        },
      ],
    },
  ],
];

// Woordhulp bij versie E — alleen woorden die een kind écht niet kent,
// in kindertaal. NOOIT een woord waar een toetsvraag over gaat.
// Sleutel = exact de vorm zoals het woord in de tekst staat.
export const WOORDHULP_E = {
  "componist": "iemand die muziekstukken bedenkt en opschrijft, zodat anderen ze kunnen spelen.",
  "duet": "een muziekstuk voor precies twee spelers samen.",
  "dwarsfluitles": "les op de dwarsfluit: een dunne metalen fluit die je opzij houdt als je speelt.",
  "evenaar": "de denkbeeldige lijn om het midden van de aarde; daar is het bijna altijd warm.",
  "gaslantaarns": "straatlampen van vroeger die brandden op gas, met een echt vlammetje erin.",
  "hanenpoten": "slordig, kriebelig handschrift dat moeilijk te lezen is.",
  "hurk": "hurken = door je knieën zakken tot je laag bij de grond zit.",
  "ingespeeld": "op elkaar ingespeeld = elkaar zó goed kennen dat samen spelen bijna vanzelf gaat.",
  "krioelt": "krioelen = wemelen; overal bewegen heel veel diertjes door elkaar.",
  "mijnwerkers": "mensen die diep onder de grond werken om daar zout, steenkool of erts uit te hakken.",
  "natuurverschijnselen": "dingen die de natuur zelf doet, zoals regen, wind, een regenboog of onweer.",
  "oerzee": "een zee van heel, heel lang geleden — uit de tijd ver voordat er mensen waren.",
  "ontlaadt": "ontladen = de opgebouwde elektriciteit komt er in één keer uit.",
  "partijen": "een partij is het eigen stukje muziek dat één speler in een muziekstuk speelt.",
  "trog": "een heel diepe, langgerekte geul in de bodem van de zee.",
  "venijnige": "venijnig = gemeen en scherp; het doet flink pijn.",
  "voorspeelavond": "een avond waarop leerlingen van de muziekles laten horen wat ze geleerd hebben.",
  "zeekomkommers": "zachte zeedieren die op dikke komkommers lijken; ze kruipen langzaam over de zeebodem.",
};
