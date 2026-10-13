// Leerpad: Algoritmen & pseudocode — Informatica HAVO/VWO
// Wat is een algoritme, 3 bouwstenen (sequentie/selectie/herhaling),
// pseudocode + stroomdiagram, zoeken & sorteren + efficiëntie. 4 stappen.

const stepEmojis = ["📋", "🔀", "📝", "🔎"];

const chapters = [
  { letter: "A", title: "Wat is een algoritme?", emoji: "📋", from: 0, to: 0 },
  { letter: "B", title: "De 3 bouwstenen", emoji: "🔀", from: 1, to: 1 },
  { letter: "C", title: "Pseudocode & stroomdiagram", emoji: "📝", from: 2, to: 2 },
  { letter: "D", title: "Zoeken, sorteren & efficiëntie", emoji: "🔎", from: 3, to: 3 },
];

const steps = [
  // ─── A. Wat is een algoritme? ─────────────────────────────
  {
    title: "Wat is een algoritme?",
    explanation:
      "Een **algoritme** is een **stapsgewijs plan** om een probleem op te lossen of een taak uit te voeren — als een recept.\n\n**Voorbeeld uit het dagelijks leven** (thee zetten):\n1. Doe water in de waterkoker\n2. Zet de waterkoker aan\n3. Wacht tot het water kookt\n4. Doe een theezakje in een kopje\n5. Giet het water erbij\n6. Wacht 4 minuten\n7. Haal het zakje eruit\n\nDat is een algoritme: duidelijke stappen, in volgorde, die altijd tot hetzelfde resultaat leiden.\n\n**Eisen aan een goed algoritme:**\n• **Eenduidig** — elke stap is helder, geen twijfel wat je moet doen.\n• **Eindig** — het stopt een keer (niet eindeloos doorgaan).\n• **Uitvoerbaar** — elke stap is echt te doen.\n• **Correct** — het geeft het juiste resultaat.\n\n**Algoritme ≠ programma.** Een algoritme is het *idee/plan*; een **programma** is dat plan opgeschreven in een **programmeertaal** (Python, Java…) zodat de computer het kan uitvoeren. Eerst bedenk je het algoritme, dán code je het.",
    checks: [
      {
        q: "Wat is een **algoritme**?",
        options: ["Een stapsgewijs plan om een taak op te lossen", "Een programmeertaal om software mee te schrijven", "Een computer die opdrachten razendsnel uitvoert", "Een foutmelding als een programma vastloopt"],
        answer: 0,
        wrongHints: [null, "Een taal is het middel om het op te schrijven, niet het plan zelf.", "Hardware is iets anders — een algoritme kun je ook op papier volgen.", "Een algoritme is juist de oplossing, geen fout."],
        uitlegPad: {
          stappen: [{ titel: "Een recept", tekst: "Een **algoritme** is een eindige, eenduidige reeks **stappen** die een probleem oplost of een taak uitvoert — net als een recept. Het is het *plan*; pas als je het in een programmeertaal opschrijft, wordt het een programma." }],
          niveaus: { basis: "Stapsgewijs plan.", simpeler: "Algoritme = stappenplan", nogSimpeler: "Stapsgewijs plan." },
        },
      },
      {
        q: "Welke eis hoort NIET bij een goed algoritme?",
        options: ["Het staat in een programmeertaal", "Elke stap is eenduidig", "Het is eindig", "Elke stap is uitvoerbaar"],
        answer: 0,
        wrongHints: [null, "Als een stap voor tweeërlei uitleg vatbaar is, kan de computer 'm dan goed uitvoeren?", "Wat gebeurt er als een algoritme nooit stopt — is dat handig?", "Als een stap niet uit te voeren is, heb je dan iets aan het algoritme?"],
        uitlegPad: {
          stappen: [{ titel: "Plan, geen code", tekst: "Een goed algoritme is **eindig** (het stopt een keer), **eenduidig**, **uitvoerbaar** en **correct**. Dat het in een **programmeertaal** staat, is géén eis: een algoritme is het *plan*, en dat kun je ook op papier of in gewone taal opschrijven. Pas het **programma** is dat plan in code." }],
          niveaus: { basis: "Programmeertaal is geen eis.", simpeler: "Algoritme mag ook op papier", nogSimpeler: "Code is geen eis." },
        },
      },
      {
        q: "Wat is het verschil tussen een **algoritme** en een **programma**?",
        options: ["Algoritme = het plan; programma = dat plan in code", "Programma = het plan; algoritme = dat plan in code", "Algoritme = het plan; programma = de computer zelf", "Algoritme = losse code; programma = alle code samen"],
        answer: 0,
        wrongHints: [null, "Kijk goed: welke van de twee kun je op papier bedenken, en welke voert de computer uit?", "Een programma is software, geen apparaat. Wat staat er in een programma?", "Een algoritme hoeft nog helemaal geen code te zijn; je kunt het ook in gewone taal opschrijven."],
        uitlegPad: {
          stappen: [{ titel: "Idee → code", tekst: "Het **algoritme** is het *idee/stappenplan* (taal-onafhankelijk). Een **programma** is datzelfde plan **opgeschreven in een programmeertaal** (Python, Java…) zodat de computer het kan uitvoeren. Eerst bedenken, dan coderen." }],
          niveaus: { basis: "Plan vs code.", simpeler: "Algoritme = plan, programma = code", nogSimpeler: "Plan vs code." },
        },
      },
      {
        q: "Welke van deze is een **algoritme** uit het dagelijks leven?",
        options: ["Een recept om thee te zetten", "Een lijst met ingrediënten voor thee", "Een foto van een kopje thee", "Een prijslijst van een theewinkel"],
        answer: 0,
        wrongHints: [null, "Een lijst met spullen zegt nog niet wát je in welke volgorde doet.", "Een foto toont het resultaat, maar geen stappen om daar te komen.", "Prijzen zijn gegevens. Kun je een prijslijst stap voor stap uitvoeren?"],
        uitlegPad: {
          stappen: [{ titel: "Stappen in volgorde", tekst: "Een **recept** is een algoritme: duidelijke **stappen in volgorde** die altijd tot hetzelfde resultaat leiden. Een ingrediëntenlijst, een foto of een prijslijst is dat niet — daar zit geen uitvoerbaar stappenplan in." }],
          niveaus: { basis: "Recept = algoritme.", simpeler: "Stappenplan = algoritme", nogSimpeler: "Recept = algoritme." },
        },
      },
      {
        q: "Een stap in een algoritme moet **eenduidig** zijn. Dat betekent:",
        options: ["Er is maar één manier om de stap op te vatten", "De stap mag je naar eigen keuze overslaan", "De stap moet even lang duren als de rest", "De stap mag maar één keer worden uitgevoerd"],
        answer: 0,
        wrongHints: [null, "Overslaan zou het resultaat veranderen.", "Duur heeft er niets mee te maken.", "Eenduidig zegt niets over hoe vaak een stap gebeurt — denk aan het woord 'duidelijk'."],
        uitlegPad: {
          stappen: [{ titel: "Geen twijfel", tekst: "**Eenduidig** betekent dat er over een stap **geen twijfel** kan bestaan — precies één manier om 'm op te vatten. Een computer kan een stap alleen goed uitvoeren als die glashelder is; 'doe wat lekker voelt' kan een computer niet." }],
          niveaus: { basis: "Eén betekenis.", simpeler: "Eenduidig = geen twijfel", nogSimpeler: "Eén betekenis." },
        },
      },
    ],
  },

  // ─── B. De 3 bouwstenen ───────────────────────────────────
  {
    title: "De 3 bouwstenen: sequentie, selectie, herhaling",
    explanation:
      "Met slechts **drie bouwstenen** kun je élk algoritme maken:\n\n**1. Sequentie** (volgorde):\nStappen die na elkaar worden uitgevoerd, van boven naar beneden.\n```\nzet water op\nwacht\ngiet in\n```\n\n**2. Selectie** (keuze — if/else):\nEen **voorwaarde** bepaalt welke stappen worden gedaan.\n```\nALS het regent:\n    pak een paraplu\nANDERS:\n    pak een zonnebril\n```\n\n**3. Herhaling** (loop — repetition):\nStappen die je **meerdere keren** doet, zolang/totdat iets geldt.\n```\nHERHAAL 5 keer:\n    doe een push-up\n```\nof: `ZOLANG de bal niet gevangen is: blijf rennen`.\n\nTwee soorten herhaling:\n• **Vaste herhaling** ('voor i van 1 tot 10') — je weet hoe vaak.\n• **Voorwaardelijke herhaling** ('zolang …') — je herhaalt tot een voorwaarde verandert.\n\n**Let op de oneindige lus:** als de voorwaarde van een 'zolang'-lus nooit onwaar wordt, stopt het programma nooit (een bug).",
    checks: [
      {
        q: "Welke bouwsteen is **`ALS regen … ANDERS …`**?",
        options: ["Selectie", "Sequentie", "Herhaling", "Een variabele"],
        answer: 0,
        wrongHints: [null, "Sequentie is gewoon volgorde, zonder keuze.", "Herhaling doet iets meerdere keren.", "Een variabele slaat een waarde op — geen keuze."],
        uitlegPad: {
          stappen: [{ titel: "Voorwaarde bepaalt de weg", tekst: "**Selectie** (keuze) gebruikt een **voorwaarde** (ALS … ANDERS … / if/else) om te bepalen welke stappen worden uitgevoerd. Bij regen → paraplu, anders → zonnebril. Het programma splitst hier in twee mogelijke wegen." }],
          niveaus: { basis: "ALS/ANDERS = selectie.", simpeler: "If/else = keuze", nogSimpeler: "ALS/ANDERS = selectie." },
        },
      },
      {
        q: "**HERHAAL 10 keer: …** is een voorbeeld van:",
        options: ["Herhaling", "Selectie", "Sequentie", "Een variabele"],
        answer: 0,
        wrongHints: [null, "Selectie is een keuze tussen wegen — wordt hier iets gekozen?", "Sequentie doet elke stap één keer.", "Een variabele bewaart een waarde. Wat gebeurt er hier steeds opnieuw?"],
        uitlegPad: {
          stappen: [{ titel: "Iets meerdere keren doen", tekst: "**Herhaling** (loop) voert stappen meerdere keren uit. 'HERHAAL 10 keer' is een **vaste** herhaling (je weet hoe vaak). 'ZOLANG …' is **voorwaardelijk** (herhaalt tot de voorwaarde verandert)." }],
          niveaus: { basis: "Herhaling.", simpeler: "HERHAAL = loop", nogSimpeler: "Herhaling." },
        },
      },
      {
        q: "Met hoeveel bouwstenen kun je in principe élk algoritme bouwen?",
        options: ["3", "2", "10", "4"],
        answer: 0,
        wrongHints: [null, "Met alleen volgorde en keuze: hoe laat je dan iets vaker gebeuren?", "Het zijn er minder — tel de bouwstenen uit deze stap.", "Een variabele is handig, maar geen aparte bouwsteen. Hoeveel blijven er dan over?"],
        uitlegPad: {
          stappen: [{ titel: "Drie is genoeg", tekst: "Met **sequentie** (volgorde), **selectie** (keuze) en **herhaling** (loop) kun je elk algoritme opbouwen. Dit heet 'gestructureerd programmeren'. Functies/variabelen maken het overzichtelijker, maar de basis blijft deze drie." }],
          niveaus: { basis: "3 bouwstenen.", simpeler: "Sequentie/selectie/herhaling = 3", nogSimpeler: "3 bouwstenen." },
        },
      },
      {
        q: "Stappen die gewoon **na elkaar** worden uitgevoerd, heten:",
        options: ["Sequentie", "Selectie", "Herhaling", "Een variabele"],
        answer: 0,
        wrongHints: [null, "Selectie is een keuze (ALS/ANDERS).", "Herhaling doet iets meerdere keren.", "Een variabele bewaart een waarde; hier gaat het om de volgorde van stappen."],
        uitlegPad: {
          stappen: [{ titel: "Gewoon op volgorde", tekst: "**Sequentie** is de simpelste bouwsteen: stappen die **van boven naar beneden**, één voor één, worden uitgevoerd — zonder keuze of herhaling. Zet water op → wacht → giet in." }],
          niveaus: { basis: "Na elkaar = sequentie.", simpeler: "Volgorde = sequentie", nogSimpeler: "Na elkaar = sequentie." },
        },
      },
      {
        q: "Wanneer ontstaat een **oneindige lus**?",
        options: ["Als de lus-voorwaarde nooit onwaar wordt", "Als een programma precies één keer draait", "Als je in de lus een variabele gebruikt", "Als de lus over een gesorteerde lijst loopt"],
        answer: 0,
        wrongHints: [null, "Eén keer draaien is juist netjes eindig.", "Variabelen veroorzaken op zich geen lus.", "Sorteren heeft er niets mee te maken."],
        uitlegPad: {
          stappen: [{ titel: "De rem die nooit knijpt", tekst: "Een **'zolang'-lus** herhaalt tot z'n voorwaarde **onwaar** wordt. Als dat nooit gebeurt (je vergeet bv. de teller op te hogen), stopt het programma nooit → een **oneindige lus**, een bekende bug." }],
          niveaus: { basis: "Voorwaarde stopt nooit.", simpeler: "Nooit stoppen = oneindige lus", nogSimpeler: "Voorwaarde stopt nooit." },
        },
      },
    ],
  },

  // ─── C. Pseudocode & stroomdiagram ────────────────────────
  {
    title: "Pseudocode & stroomdiagram",
    explanation:
      "Voordat je echte code typt, schrijf je een algoritme vaak eerst in **pseudocode** of in een **stroomdiagram** (flowchart). Zo bedenk je de logica zonder gedoe met een specifieke taal.\n\n**Pseudocode:** algoritme in 'bijna-taal' — leesbaar voor mensen, niet voor de computer. Geen strikte regels.\n```\nLEES leeftijd\nALS leeftijd >= 18:\n    TOON \"volwassen\"\nANDERS:\n    TOON \"minderjarig\"\n```\n\n**Stroomdiagram (flowchart):** een tekening met vaste symbolen:\n• **Ovaal** = start / stop\n• **Rechthoek** = een bewerking/stap (bv. 'tel 1 op')\n• **Ruit (diamant)** = een **beslissing** (een ja/nee-vraag) — hier splitst de pijl\n• **Pijlen** = de volgorde/richting\n\nDe **ruit** is het belangrijkste symbool om te herkennen: daar zit de selectie (keuze), met meestal een 'ja'- en een 'nee'-pijl.\n\n**Waarom eerst pseudocode/flowchart?** Je vindt denkfouten sneller op papier dan in code, en het is taal-onafhankelijk: dezelfde flowchart kun je in Python of Java uitwerken.",
    checks: [
      {
        q: "Wat is **pseudocode**?",
        options: ["Een algoritme in leesbare 'bijna-taal'", "Een taal die de computer direct uitvoert", "Nepcode die echt lijkt, maar niet werkt", "Een tekening met blokjes en pijlen"],
        answer: 0,
        wrongHints: [null, "De computer kan pseudocode niet uitvoeren. Voor wie schrijf je het dan?", "'Pseudo' betekent wel 'schijn', maar het is niet bedoeld om te misleiden. Waarvoor gebruik je het dan?", "Een stroomdiagram is een tékening; pseudocode is tekst."],
        uitlegPad: {
          stappen: [{ titel: "Voor mensen, niet voor de machine", tekst: "**Pseudocode** beschrijft een algoritme in **leesbare, informele taal** (LEES, ALS, TOON…). Het is bedoeld om de logica helder te krijgen vóór je echte code typt. De computer voert het niet uit — het is taal-onafhankelijk." }],
          niveaus: { basis: "Leesbare bijna-code.", simpeler: "Pseudocode = bijna-taal voor mensen", nogSimpeler: "Leesbare bijna-code." },
        },
      },
      {
        q: "Welk stroomdiagram-symbool stelt een **beslissing** (ja/nee-vraag) voor?",
        options: ["De ruit", "De rechthoek", "Het ovaal", "De pijl"],
        answer: 0,
        wrongHints: [null, "De rechthoek is een gewone bewerking/stap.", "Het ovaal is start of stop.", "Een pijl geeft alleen de richting aan."],
        uitlegPad: {
          stappen: [{ titel: "Bij de ruit splitst de weg", tekst: "In een stroomdiagram is de **ruit (diamant)** de **beslissing**: een ja/nee-vraag waar de pijl in tweeën splitst. Rechthoek = bewerking, ovaal = start/stop, pijl = volgorde. De ruit = de selectie-bouwsteen in beeld." }],
          niveaus: { basis: "Ruit = beslissing.", simpeler: "Beslissing = ruit", nogSimpeler: "Ruit = beslissing." },
        },
      },
      {
        q: "Waarom schrijf je een algoritme vaak **eerst** in pseudocode of een flowchart?",
        options: ["Denkfouten vind je sneller dan in echte code", "Dan hoef je het programma later niet te testen", "Zo kan de computer je plan alvast controleren", "Dan wordt het programma later sneller"],
        answer: 0,
        wrongHints: [null, "Ook een goed plan kan bugs opleveren als je het uitwerkt. Testen blijft nodig.", "De computer kan pseudocode niet lezen of controleren. Voor wie is het dan bedoeld?", "De snelheid hangt af van het algoritme zelf, niet van hoe je het eerst opschreef."],
        uitlegPad: {
          stappen: [{ titel: "Eerst denken, dan typen", tekst: "Je vindt **logica-fouten sneller op papier** (pseudocode/flowchart) dan tussen de details van een echte taal. Bovendien is het **taal-onafhankelijk**: dezelfde opzet kun je daarna in Python óf Java uitwerken." }],
          niveaus: { basis: "Fouten eerder vinden.", simpeler: "Eerst plan = fouten eerder", nogSimpeler: "Fouten eerder vinden." },
        },
      },
      {
        q: "Welk stroomdiagram-symbool betekent **start of stop**?",
        options: ["Het ovaal", "De ruit", "De rechthoek", "De pijl"],
        answer: 0,
        wrongHints: [null, "De ruit is een beslissing (ja/nee).", "De rechthoek is een gewone bewerking.", "De pijl geeft alleen de richting aan."],
        uitlegPad: {
          stappen: [{ titel: "Begin en eind", tekst: "In een stroomdiagram markeert het **ovaal** het **start**- of **stop**punt. Rechthoek = bewerking, **ruit** = beslissing, pijl = volgorde. Elk diagram begint en eindigt dus met een ovaal." }],
          niveaus: { basis: "Ovaal = start/stop.", simpeler: "Start/stop = ovaal", nogSimpeler: "Ovaal = start/stop." },
        },
      },
      {
        q: "Waarom is pseudocode **taal-onafhankelijk** handig?",
        options: ["Dezelfde opzet kun je in Python óf Java uitwerken", "Het werkt op Windows, macOS én Linux", "Je hoeft geen Engels te kennen om het te lezen", "Je kunt het met één klik omzetten naar code"],
        answer: 0,
        wrongHints: [null, "Pseudocode draait nergens; het is geen programma. Op welke 'taal' slaat taal-onafhankelijk?", "Het gaat niet om spreektalen zoals Engels of Nederlands.", "Geen enkel programma zet pseudocode vanzelf om — wie doet dat dan?"],
        uitlegPad: {
          stappen: [{ titel: "Eén plan, meerdere talen", tekst: "Omdat **pseudocode** niet aan een taal vastzit, kun je hetzelfde plan daarna uitwerken in **Python, Java of wat dan ook**. Je bedenkt de logica één keer en hoeft je nog niet druk te maken over de exacte schrijfwijze van een taal." }],
          niveaus: { basis: "Werkt in elke taal.", simpeler: "Taal-onafhankelijk = flexibel", nogSimpeler: "Werkt in elke taal." },
        },
      },
    ],
  },

  // ─── D. Zoeken, sorteren & efficiëntie ────────────────────
  {
    title: "Zoeken, sorteren & efficiëntie",
    explanation:
      "Twee klassieke algoritmen die je moet kennen:\n\n**Zoeken — lineair zoeken:**\nLoop de lijst van voor naar achter af tot je het element vindt.\n```\nVOOR elk item in de lijst:\n    ALS item == gezocht:\n        STOP — gevonden\n```\nBij een lijst van n items kost dit in het slechtste geval **n stappen**.\n\n**Binair zoeken** (alleen bij een *gesorteerde* lijst): kijk steeds in het midden en gooi de helft weg. Veel sneller — ongeveer log₂(n) stappen. (Zo zoek je een naam in een telefoonboek.)\n\n**Sorteren — bubble sort** (eenvoudig voorbeeld):\nVergelijk telkens twee buren; staat de grootste links, verwissel ze. Herhaal tot niets meer verwisseld wordt. Het grootste getal 'borrelt' naar het einde.\n\n**Efficiëntie:** waarom maakt het uit?\n• Bij kleine lijstjes maakt het niet uit.\n• Bij **grote** hoeveelheden (miljoenen items) is het verschil enorm: een slim algoritme kost seconden, een dom algoritme uren.\n• Daarom tellen informatici het **aantal stappen** in verhouding tot de grootte n (denk: blijft het 'ongeveer n' of loopt het op naar 'n × n'?).\n\n**Kern:** hetzelfde probleem kun je met verschillende algoritmen oplossen — sommige veel **efficiënter** dan andere.",
    checks: [
      {
        q: "Bij **lineair zoeken** in een lijst van n items: hoeveel stappen in het slechtste geval?",
        options: ["Ongeveer n", "Ongeveer n/2", "Ongeveer log₂ n", "Ongeveer n × n"],
        answer: 0,
        wrongHints: [null, "Dat heb je gemiddeld nodig. Waar staat het item in het slechtste geval?", "Dat hoort bij binair zoeken, dat steeds halveert. Doet lineair zoeken dat ook?", "Dat is veel meer dan lineair zoeken kost: je bekijkt elk item hooguit één keer."],
        uitlegPad: {
          stappen: [{ titel: "Eén voor één aflopen", tekst: "**Lineair zoeken** loopt de lijst van voor naar achter af. Staat het gezochte item achteraan (of zit het er niet in), dan kijk je naar **alle n items** → ~n stappen. Sneller kan met **binair zoeken**, maar dat vereist een gesorteerde lijst." }],
          niveaus: { basis: "~n stappen.", simpeler: "Slechtste geval = n", nogSimpeler: "~n stappen." },
        },
      },
      {
        q: "Wat is de voorwaarde om **binair zoeken** te kunnen gebruiken?",
        options: ["De lijst moet gesorteerd zijn", "De lijst moet kort zijn", "De lijst moet een even lengte hebben", "De lijst mag alleen getallen bevatten"],
        answer: 0,
        wrongHints: [null, "Lengte maakt niet uit voor de methode.", "Bij een oneven aantal pak je gewoon het middelste item; de lengte is geen probleem.", "Ook woorden kun je binair doorzoeken. Wat moet er dan wél gelden voor de lijst?"],
        uitlegPad: {
          stappen: [{ titel: "Eerst sorteren", tekst: "**Binair zoeken** kijkt steeds in het midden en gooit de helft weg — dat kan alleen als de lijst **gesorteerd** is (anders weet je niet welke helft je mag weggooien). Zo zoek je een naam in een telefoonboek: midden openen, links of rechts verder." }],
          niveaus: { basis: "Gesorteerd.", simpeler: "Binair zoeken = gesorteerd nodig", nogSimpeler: "Gesorteerd." },
        },
      },
      {
        q: "Waarom is de **efficiëntie** van een algoritme belangrijk?",
        options: ["Bij veel data scheelt het enorm veel tijd", "De code wordt er korter en netter van", "Zo start het programma sneller op", "Een efficiënter algoritme geeft betere antwoorden"],
        answer: 0,
        wrongHints: [null, "Het gaat om snelheid/tijd, niet om uiterlijk.", "Opstarten duurt kort, wat je algoritme ook is. Wanneer merk je het verschil wél?", "Een efficiënter algoritme geeft hetzelfde antwoord, alleen sneller."],
        uitlegPad: {
          stappen: [{ titel: "n maakt het verschil", tekst: "Bij een paar items maakt het niet uit, maar bij **miljoenen** items is het verschil tussen een slim en een traag algoritme enorm (seconden vs uren). Daarom tellen informatici het aantal **stappen** in verhouding tot de grootte n. Hetzelfde resultaat, maar veel sneller bereikt." }],
          niveaus: { basis: "Veel data = tijd telt.", simpeler: "Grote data → efficiëntie telt", nogSimpeler: "Veel data = tijd telt." },
        },
      },
      {
        q: "Bij **bubble sort** gebeurt wat?",
        options: ["Buren worden vergeleken en verwisseld", "De lijst wordt steeds in het midden gedeeld", "Het kleinste item wordt gezocht en vooraan gezet", "Elk item wordt één voor één met het gezochte vergeleken"],
        answer: 0,
        wrongHints: [null, "In het midden delen hoort bij binair zoeken.", "Dat is selection sort. Welke items vergelijkt bubble sort steeds met elkaar?", "Dat is lineair zoeken. Bubble sort zoekt niets, het sorteert."],
        uitlegPad: {
          stappen: [{ titel: "Grootste borrelt naar achteren", tekst: "**Bubble sort** vergelijkt telkens twee **buren**; staat de grootste links, dan verwisselt hij ze. Zo 'borrelt' het grootste getal naar het einde. Herhaal tot er niets meer verwisseld wordt — dan is de lijst gesorteerd. Simpel, maar traag bij grote lijsten." }],
          niveaus: { basis: "Buren verwisselen.", simpeler: "Bubble sort = buren ruilen", nogSimpeler: "Buren verwisselen." },
        },
      },
      {
        q: "Waarom is **binair zoeken** sneller dan lineair zoeken?",
        options: ["Het halveert bij elke stap het zoekgebied", "Het bekijkt elk item één keer heel snel", "Het zoekt vanaf twee kanten tegelijk", "Het werkt alleen met nullen en enen"],
        answer: 0,
        wrongHints: [null, "Elk item apart bekijken is juist lineair (traag).", "Het kijkt per stap maar naar één item. Wélk item kiest het?", "'Binair' slaat hier niet op nullen en enen; ook woorden kun je zo doorzoeken."],
        uitlegPad: {
          stappen: [{ titel: "Halveren = supersnel", tekst: "**Binair zoeken** kijkt in het midden en **gooit de helft weg** die het niet kan zijn — steeds opnieuw. Daardoor kost het maar ~log₂(n) stappen i.p.v. n. Zo vind je een naam in een telefoonboek zonder elke pagina te lezen. (Voorwaarde: de lijst is gesorteerd.)" }],
          niveaus: { basis: "Steeds halveren.", simpeler: "Binair = halveren", nogSimpeler: "Steeds halveren." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const algoritmenPseudocodeInformatica = {
  id: "algoritmen-pseudocode-informatica",
  title: "Algoritmen & pseudocode (Informatica)",
  emoji: "📋",
  level: "havo4-5-vwo",
  subject: "informatica",
  referentieNiveau: "havo-vwo-informatica-domein-algoritmen",
  sloThema: "Informatica HAVO/VWO — algoritmisch denken: stappen, bouwstenen, pseudocode en efficiëntie",
  prerequisites: [],
  intro:
    "De kern van informatica: algoritmisch denken. Je leert wat een algoritme is (en het verschil met een programma), de 3 bouwstenen (sequentie, selectie, herhaling), hoe je het opschrijft in pseudocode en stroomdiagrammen, en twee klassiekers: zoeken & sorteren — plus waarom efficiëntie ertoe doet. ~15 min.",
  triggerKeywords: [
    "algoritme", "algoritmen", "algoritmisch",
    "pseudocode", "stroomdiagram", "flowchart",
    "sequentie", "selectie", "herhaling", "loop", "lus",
    "if else", "als anders", "voorwaarde",
    "lineair zoeken", "binair zoeken", "zoekalgoritme",
    "sorteren", "bubble sort", "sorteeralgoritme",
    "efficiëntie", "oneindige lus",
    "programma", "programmeren",
  ],
  chapters,
  steps,
};

export default algoritmenPseudocodeInformatica;
