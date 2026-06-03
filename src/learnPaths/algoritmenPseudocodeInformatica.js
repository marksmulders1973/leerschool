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
        options: ["Een stapsgewijs plan om een taak op te lossen", "Een programmeertaal", "Een soort computer", "Een foutmelding"],
        answer: 0,
        wrongHints: [null, "Een taal is het middel om het op te schrijven, niet het plan zelf.", "Hardware is iets anders.", "Een algoritme is juist de oplossing, geen fout."],
        uitlegPad: {
          stappen: [{ titel: "Een recept", tekst: "Een **algoritme** is een eindige, eenduidige reeks **stappen** die een probleem oplost of een taak uitvoert — net als een recept. Het is het *plan*; pas als je het in een programmeertaal opschrijft, wordt het een programma." }],
          niveaus: { basis: "Stapsgewijs plan. A.", simpeler: "Algoritme = stappenplan = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke eis hoort NIET bij een goed algoritme?",
        options: ["Het mag eindeloos doorgaan", "Elke stap is eenduidig", "Het is eindig", "Elke stap is uitvoerbaar"],
        answer: 0,
        wrongHints: [null, "Dit is juist wél een eis — geen verkeerde.", "Dit is wél een eis.", "Dit is wél een eis."],
        uitlegPad: {
          stappen: [{ titel: "Een algoritme moet stoppen", tekst: "Een goed algoritme is **eindig** (het stopt een keer), **eenduidig**, **uitvoerbaar** en **correct**. 'Eindeloos doorgaan' hoort er dus juist NIET bij — een algoritme dat nooit stopt, is fout (een 'oneindige lus')." }],
          niveaus: { basis: "Eindeloos = fout. A.", simpeler: "Mag niet eindeloos = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is het verschil tussen een **algoritme** en een **programma**?",
        options: ["Algoritme = het plan; programma = dat plan in code", "Ze zijn precies hetzelfde", "Een programma is korter", "Een algoritme draait op de computer, een programma niet"],
        answer: 0,
        wrongHints: [null, "Er is wel degelijk verschil tussen plan en uitvoering.", "Lengte is niet het verschil.", "Andersom: het programma is wat de computer draait."],
        uitlegPad: {
          stappen: [{ titel: "Idee → code", tekst: "Het **algoritme** is het *idee/stappenplan* (taal-onafhankelijk). Een **programma** is datzelfde plan **opgeschreven in een programmeertaal** (Python, Java…) zodat de computer het kan uitvoeren. Eerst bedenken, dan coderen." }],
          niveaus: { basis: "Plan vs code. A.", simpeler: "Algoritme = plan, programma = code = A.", nogSimpeler: "A." },
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
        options: ["Selectie (keuze)", "Sequentie", "Herhaling", "Een variabele"],
        answer: 0,
        wrongHints: [null, "Sequentie is gewoon volgorde, zonder keuze.", "Herhaling doet iets meerdere keren.", "Een variabele slaat een waarde op — geen keuze."],
        uitlegPad: {
          stappen: [{ titel: "Voorwaarde bepaalt de weg", tekst: "**Selectie** (keuze) gebruikt een **voorwaarde** (ALS … ANDERS … / if/else) om te bepalen welke stappen worden uitgevoerd. Bij regen → paraplu, anders → zonnebril. Het programma splitst hier in twee mogelijke wegen." }],
          niveaus: { basis: "ALS/ANDERS = selectie. A.", simpeler: "If/else = keuze = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**HERHAAL 10 keer: …** is een voorbeeld van:",
        options: ["Herhaling (loop)", "Selectie", "Sequentie", "Een foutmelding"],
        answer: 0,
        wrongHints: [null, "Selectie is een keuze, geen herhaling.", "Sequentie doet elke stap één keer.", "Het is normale code, geen fout."],
        uitlegPad: {
          stappen: [{ titel: "Iets meerdere keren doen", tekst: "**Herhaling** (loop) voert stappen meerdere keren uit. 'HERHAAL 10 keer' is een **vaste** herhaling (je weet hoe vaak). 'ZOLANG …' is **voorwaardelijk** (herhaalt tot de voorwaarde verandert)." }],
          niveaus: { basis: "Herhaling. A.", simpeler: "HERHAAL = loop = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Met hoeveel bouwstenen kun je in principe élk algoritme bouwen?",
        options: ["3 (sequentie, selectie, herhaling)", "1", "10", "Oneindig veel"],
        answer: 0,
        wrongHints: [null, "Met alleen volgorde kun je geen keuzes of herhaling maken.", "Het zijn er minder — de drie basisbouwstenen.", "Juist niet — drie is genoeg."],
        uitlegPad: {
          stappen: [{ titel: "Drie is genoeg", tekst: "Met **sequentie** (volgorde), **selectie** (keuze) en **herhaling** (loop) kun je elk algoritme opbouwen. Dit heet 'gestructureerd programmeren'. Functies/variabelen maken het overzichtelijker, maar de basis blijft deze drie." }],
          niveaus: { basis: "3 bouwstenen. A.", simpeler: "Sequentie/selectie/herhaling = 3 = A.", nogSimpeler: "A." },
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
        options: ["Een algoritme in leesbare 'bijna-taal', niet uitvoerbaar", "Een echte programmeertaal", "Een soort virus", "Een stroomdiagram"],
        answer: 0,
        wrongHints: [null, "Juist niet — de computer kan pseudocode niet draaien.", "Het heeft niets met malware te maken.", "Een stroomdiagram is een tékening; pseudocode is tekst."],
        uitlegPad: {
          stappen: [{ titel: "Voor mensen, niet voor de machine", tekst: "**Pseudocode** beschrijft een algoritme in **leesbare, informele taal** (LEES, ALS, TOON…). Het is bedoeld om de logica helder te krijgen vóór je echte code typt. De computer voert het niet uit — het is taal-onafhankelijk." }],
          niveaus: { basis: "Leesbare bijna-code. A.", simpeler: "Pseudocode = bijna-taal voor mensen = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk stroomdiagram-symbool stelt een **beslissing** (ja/nee-vraag) voor?",
        options: ["De ruit (diamant)", "De rechthoek", "Het ovaal", "De pijl"],
        answer: 0,
        wrongHints: [null, "De rechthoek is een gewone bewerking/stap.", "Het ovaal is start of stop.", "Een pijl geeft alleen de richting aan."],
        uitlegPad: {
          stappen: [{ titel: "Bij de ruit splitst de weg", tekst: "In een stroomdiagram is de **ruit (diamant)** de **beslissing**: een ja/nee-vraag waar de pijl in tweeën splitst. Rechthoek = bewerking, ovaal = start/stop, pijl = volgorde. De ruit = de selectie-bouwsteen in beeld." }],
          niveaus: { basis: "Ruit = beslissing. A.", simpeler: "Beslissing = ruit = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarom schrijf je een algoritme vaak **eerst** in pseudocode of een flowchart?",
        options: ["Denkfouten vind je sneller dan in echte code", "Het draait sneller", "De computer eist het", "Het maakt het bestand kleiner"],
        answer: 0,
        wrongHints: [null, "Pseudocode draait helemaal niet.", "Geen enkele computer eist pseudocode.", "Bestandsgrootte heeft hier niets mee te maken."],
        uitlegPad: {
          stappen: [{ titel: "Eerst denken, dan typen", tekst: "Je vindt **logica-fouten sneller op papier** (pseudocode/flowchart) dan tussen de details van een echte taal. Bovendien is het **taal-onafhankelijk**: dezelfde opzet kun je daarna in Python óf Java uitwerken." }],
          niveaus: { basis: "Fouten eerder vinden. A.", simpeler: "Eerst plan = fouten eerder = A.", nogSimpeler: "A." },
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
        options: ["Ongeveer n", "Altijd 1", "Ongeveer n × n", "0"],
        answer: 0,
        wrongHints: [null, "Alleen als het toevallig vooraan staat.", "Dat is veel meer dan lineair zoeken kost.", "Je moet wél kijken — niet 0."],
        uitlegPad: {
          stappen: [{ titel: "Eén voor één aflopen", tekst: "**Lineair zoeken** loopt de lijst van voor naar achter af. Staat het gezochte item achteraan (of zit het er niet in), dan kijk je naar **alle n items** → ~n stappen. Sneller kan met **binair zoeken**, maar dat vereist een gesorteerde lijst." }],
          niveaus: { basis: "~n stappen. A.", simpeler: "Slechtste geval = n = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is de voorwaarde om **binair zoeken** te kunnen gebruiken?",
        options: ["De lijst moet gesorteerd zijn", "De lijst moet kort zijn", "Er mogen geen getallen in staan", "De lijst moet leeg zijn"],
        answer: 0,
        wrongHints: [null, "Lengte maakt niet uit voor de methode.", "Binair zoeken werkt juist prima met getallen.", "In een lege lijst valt niets te zoeken."],
        uitlegPad: {
          stappen: [{ titel: "Eerst sorteren", tekst: "**Binair zoeken** kijkt steeds in het midden en gooit de helft weg — dat kan alleen als de lijst **gesorteerd** is (anders weet je niet welke helft je mag weggooien). Zo zoek je een naam in een telefoonboek: midden openen, links of rechts verder." }],
          niveaus: { basis: "Gesorteerd. A.", simpeler: "Binair zoeken = gesorteerd nodig = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarom is de **efficiëntie** van een algoritme belangrijk?",
        options: ["Bij grote hoeveelheden data scheelt het enorm veel tijd", "Het maakt de code mooier", "Het is alleen belangrijk voor kleine lijstjes", "Het verandert het antwoord"],
        answer: 0,
        wrongHints: [null, "Het gaat om snelheid/tijd, niet om uiterlijk.", "Juist bij grote data telt het zwaar.", "Een efficiënter algoritme geeft hetzelfde antwoord, alleen sneller."],
        uitlegPad: {
          stappen: [{ titel: "n maakt het verschil", tekst: "Bij een paar items maakt het niet uit, maar bij **miljoenen** items is het verschil tussen een slim en een traag algoritme enorm (seconden vs uren). Daarom tellen informatici het aantal **stappen** in verhouding tot de grootte n. Hetzelfde resultaat, maar veel sneller bereikt." }],
          niveaus: { basis: "Veel data = tijd telt. A.", simpeler: "Grote data → efficiëntie telt = A.", nogSimpeler: "A." },
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
