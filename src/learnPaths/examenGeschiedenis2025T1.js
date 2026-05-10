// Leerpad: Examen-oefenpad Geschiedenis VMBO-GL/TL 2025 tijdvak 1
// 2026-05-10: Eerste geschiedenis-pilot. 6 echte MC-vragen geverifieerd.
// Bron: examenblad.nl, examen 0125 GT 2025-1.

const bron5 = {
  titel: "Bron 5 — Engelse krant juli 1936 (politieke tekening)",
  body: "Uit een Engelse krant (juli 1936). Bij de tekening hoort de tekst: 'De weg naar de overwinning.'\n\nOp de tekening staat een stapel mensen. Op de mensen-stapel:\n• Bovenaan: 'baas van de wereld'\n• De onderste rug: 'herbewapening'\n• De stapel laffe mensen: 'Laffe democratische \"leiders\"'\n\n(De tekening toont Hitler/Nazi-Duitsland die op de schouders van laffe Westerse democratische leiders naar wereldmacht klimt — een aanklacht tegen het appeasement-beleid.)",
};

const chapters = [
  { letter: "A", title: "Interbellum & WO2", emoji: "⚔️", from: 0, to: 3 },
  { letter: "B", title: "Na de oorlog", emoji: "🏛️", from: 4, to: 5 },
];

const steps = [
  // V11
  {
    title: "Vraag 11 — Suze Groeneweg & kiesrecht",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 11. Doorklik voor de Pincode-uitleg in het tijdvakken-leerpad.",
    emoji: "🎓",
    checks: [
      {
        q: "In 1918 werd Suze Groeneweg als eerste vrouw gekozen tot lid van de Tweede Kamer. Van welk kiesrecht maakte Suze Groeneweg in 1918 gebruik?",
        options: [
          "actief kiesrecht",
          "algemeen vrouwenkiesrecht",
          "censuskiesrecht",
          "passief kiesrecht",
        ],
        answer: 3,
        wrongHints: [
          "Actief kiesrecht = het recht om te stemmen. Hier gaat het om gekozen WORDEN.",
          "Algemeen vrouwenkiesrecht = stemRECHT voor alle vrouwen, in NL pas in 1919. Suze werd in 1918 gekozen.",
          "Censuskiesrecht = stemmen op basis van vermogen — was juist afgeschaft.",
          null,
        ],
        explanation: "Passief kiesrecht = het recht om gekozen te WORDEN (kandidaat zijn). Vrouwen kregen dit in NL al in 1917 — vóór het actief kiesrecht (mogen stemmen) in 1919. Daardoor kon Suze in 1918 gekozen worden, terwijl vrouwen nog niet zelf konden stemmen.",
        examenBron: "🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 11",
        leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
      },
    ],
  },
  // V15
  {
    title: "Vraag 15 — Engelse cartoon over democratische leiders",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 15. Bekijk eerst bron 5.",
    emoji: "🎓",
    checks: [
      {
        q: "De democratische leiders zijn door de tekenaar afgebeeld als laf. Welk argument voor deze mening is in de tekening te herkennen?",
        options: [
          "De leiders hebben de communistische regering van de Sovjet-Unie",
          "De leiders hebben de Vrede van Versailles getekend.",
          "De leiders verzetten zich niet tegen Hitlers machtsuitbreiding.",
          "De leiders zijn economisch afhankelijk van Duitsland.",
        ],
        answer: 2,
        wrongHints: [
          "Erkennen Sovjet-Unie heeft niets met 'laf zijn voor Hitler' te maken.",
          "Versailles tekenen was juist hard tegen Duitsland — niet laf.",
          null,
          "Economische afhankelijkheid is geen argument voor 'lafheid'.",
        ],
        explanation: "De cartoon kritiseert het APPEASEMENT-beleid van de Westerse democratieën (UK, Frankrijk) tegenover Hitler. Door geen actie te ondernemen tegen zijn herbewapening en gebiedsuitbreiding (Rijnland 1936, Anschluss 1938, Sudetenland 1938) lieten ze hem groeien — vandaar 'laf' afgebeeld als opstapje voor Hitler's wereldmacht.",
        examenBron: "🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 15",
        bronTekst: bron5,
        leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
      },
    ],
  },
  // V16
  {
    title: "Vraag 16 — Conferentie van München",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 16.",
    emoji: "🎓",
    checks: [
      {
        q: "Tijdens de Conferentie van M'nchen werd een akkoord gesloten tussen Hitler, als leider van nazi-Duitsland, en Chamberlain, de minister-president van Groot-Brittanni'. Wat was voor Chamberlain de reden om het akkoord met Hitler te sluiten?",
        options: [
          "De Duitse politiek voor meer Lebensraum moest een succes worden.",
          "Duitsland wilde lid worden van de Volkenbond.",
          "Een nieuwe oorlog met Duitsland moest voorkomen worden.",
          "Groot-Brittanni' wilde dat Duitsland het Verdrag van Versailles tekende.",
        ],
        answer: 2,
        wrongHints: [
          "UK + FR wilden NIET dat Duitsland Lebensraum kreeg — daar gingen ze juist tegen in (te laat).",
          "Duitsland was uit de Volkenbond gestapt in 1933.",
          null,
          "Versailles was 1919, München 1938 — geen verband.",
        ],
        explanation: "Chamberlain (UK) en Daladier (FR) gaven Hitler het Sudetenland (deel Tsjechoslowakije) om een nieuwe wereldoorlog te voorkomen. Dit was de top van het APPEASEMENT-beleid: 'peace for our time'. Een jaar later begon Hitler WO2 alsnog — bewijs dat appeasement niet werkte.",
        examenBron: "🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 16",
        leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
      },
    ],
  },
  // V35
  {
    title: "Vraag 35 — Stalin en WO2",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 35.",
    emoji: "🎓",
    checks: [
      {
        q: "Onder het bewind van Stalin werden veel mensen vermoord en werden politieke tegenstanders vervolgd. Toch was er in de Sovjet-Unie veel waardering voor Stalin. Wat is een belangrijke reden voor deze waardering?",
        options: [
          "kregen boeren en arbeiders steeds meer politieke macht.",
          "kwam er een einde aan de wapenwedloop met de Verenigde Staten.",
          "leidde de politiek van collectivisatie tot meer vrijheid.",
          "werd nazi-Duitsland verslagen.",
        ],
        answer: 3,
        wrongHints: [
          "Boeren en arbeiders kregen juist MINDER macht onder Stalin (collectivisatie was top-down).",
          "Wapenwedloop met VS begon JUIST na WO2 onder Stalin (Koude Oorlog).",
          "Collectivisatie betekende juist verlies van vrijheid voor boeren.",
          null,
        ],
        explanation: "Onder Stalin won de Sovjet-Unie WO2 tegen nazi-Duitsland (op een hoge prijs van ~27 miljoen Russische doden). Dat 'overwinningsverhaal' werd in de Sovjet-Unie eindeloos herhaald — daardoor bleef Stalin's reputatie hoog ondanks zijn miljoenen slachtoffers in de Goelag.",
        examenBron: "🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 35",
        leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
      },
    ],
  },
  // V34
  {
    title: "Vraag 34 — Schuman-plan & EGKS",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 34.",
    emoji: "🎓",
    checks: [
      {
        q: "De Franse minister stelt voor om een organisatie op te richten. Welke organisatie is naar aanleiding van het voorstel opgericht?",
        options: [
          "EEG",
          "EGKS",
          "NAVO",
          "VN",
        ],
        answer: 1,
        wrongHints: [
          "EEG kwam pas in 1957 — voortvloeiend uit EGKS.",
          null,
          "NAVO is een militaire alliantie, geen kolen/staal-organisatie.",
          "VN is voor wereldvrede + diplomatie, niet voor kolen/staal.",
        ],
        explanation: "EGKS (Europese Gemeenschap voor Kolen en Staal, 1951) was de directe uitwerking van het Schuman-plan. Door kolen + staal (oorlogs-grondstoffen) onder gezamenlijk toezicht te zetten, werd nieuwe oorlog tussen FR en DE bemoeilijkt. EGKS was de KIEM van de huidige EU.",
        examenBron: "🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 34",
        leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
      },
    ],
  },
  // V39
  {
    title: "Vraag 39 — Cubacrisis 1962",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 39.",
    emoji: "🎓",
    checks: [
      {
        q: "Een gebeurtenis in 1962 bracht de hele wereld in gevaar, omdat een kernoorlog tussen de Verenigde Staten en de Sovjet-Unie nog nooit zo dichtbij was als toen. Welke gebeurtenis wordt bedoeld?",
        options: [
          "de bouw van de Berlijnse Muur",
          "de Cubacrisis",
          "de Praagse Lente",
          "de stichting van de DDR",
        ],
        answer: 1,
        wrongHints: [
          "Berlijnse Muur werd 1961 gebouwd — geen direct kernoorlog-risico.",
          null,
          "Praagse Lente was 1968 (USSR onderdrukt opstand).",
          "DDR werd 1949 gesticht — geen kernoorlog-crisis.",
        ],
        explanation: "Cubacrisis (oktober 1962): de Sovjet-Unie plaatste kernraketten op Cuba (vlak bij VS-grens). President Kennedy zette een marine-blokkade in. 13 dagen lang stond de wereld op rand kernoorlog. Pas na onderhandelingen trokken USSR (Cuba-raketten weg) + VS (Turkije-raketten weg) zich terug.",
        examenBron: "🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 39",
        leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
      },
    ],
  },
];

const examenGeschiedenis2025T1 = {
  id: "examen-geschiedenis-2025-t1",
  title: "Examen oefenen — Geschiedenis 2025 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "geschiedenis",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Geschiedenis - eindexamen oefenen 2025-T1",
  intro:
    "6 echte examenvragen uit VMBO-GL/TL geschiedenis 2025 tijdvak 1. Onderwerpen: kiesrecht 1918, Conferentie van München, appeasement, Stalin & WO2, Schuman-plan/EGKS, Cubacrisis. Per vraag denkprikkel-hints, inhoudelijke uitleg, doorklik naar Pincode-leerpad. V23, V25, V26, V40 (vereist visueel materiaal) zijn weggelaten.",
  triggerKeywords: [
    "examen geschiedenis", "geschiedenis 2025", "echte examenvragen geschiedenis",
    "kiesrecht 1918", "suze groeneweg", "conferentie munchen", "appeasement",
    "stalin wo2", "schuman plan", "egks", "cubacrisis 1962",
  ],
  chapters,
  steps,
};

export default examenGeschiedenis2025T1;
