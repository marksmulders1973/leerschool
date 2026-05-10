// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2025 tijdvak 2
// 2026-05-10: zesde en laatste economie-pilot. 5 vragen geverifieerd.
// Bron: examenblad.nl, examen 0233 GT 2025-2.

const chapters = [
  { letter: "A", title: "Geld & begroten", emoji: "💰", from: 0, to: 0 },
  { letter: "B", title: "Werk & loon", emoji: "👷", from: 1, to: 1 },
  { letter: "C", title: "Belasting & inkomen", emoji: "🧾", from: 2, to: 4 },
];

const steps = [
  // V3
  {
    title: "Vraag 3 — wat is een begroting?",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 2, vraag 3. Doorklik voor de Pincode-uitleg in **Geld, sparen en lenen** (stap 'Begroten').",
    emoji: "🎓",
    checks: [
      {
        q: "Begroten leidt tot afname van geldstress. Wat is een begroting?",
        options: [
          "Het maken van een plan hoe je meer inkomsten kunt ontvangen.",
          "Het maken van een plan hoe je op de uitgaven kunt bezuinigen.",
          "Je huidige bezittingen en schulden op een rijtje zetten.",
          "Je verwachte inkomsten en uitgaven op een rijtje zetten.",
        ],
        answer: 3,
        wrongHints: [
          "Niet specifiek 'meer inkomsten' — een begroting kijkt naar het GEHEEL.",
          "Niet specifiek 'bezuinigen' — een begroting is een overzicht, geen besluit.",
          "Bezittingen + schulden = vermogen-overzicht, geen begroting.",
          null,
        ],
        explanation: "Een begroting is een overzicht van wat je verwacht binnen te krijgen (inkomsten) en wat je verwacht uit te geven (uitgaven) — meestal per maand of per jaar. Door dat naast elkaar te zetten zie je vooraf of je geld overhoudt of tekortkomt.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 2, vraag 3",
        leerpadLink: { id: "pincode-geld-sparen-lenen", title: "Geld, sparen en lenen" },
      },
    ],
  },
  // V8
  {
    title: "Vraag 8 — wanneer verhoogt werkgever lonen?",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 2, vraag 8. Doorklik voor de Pincode-uitleg in **Werk en arbeidsmarkt**.",
    emoji: "🎓",
    checks: [
      {
        q: "Wanneer is een werkgever bereid om de lonen van werknemers te verhogen?",
        options: [
          "Als de arbeidsproductiviteit meer stijgt dan de lonen.",
          "Als de lonen meer stijgen dan de arbeidsproductiviteit.",
          "Als de lonen meer stijgen dan het aantal arbeidsjaren.",
          "Als het aantal arbeidsjaren meer stijgt dan de arbeidsproductiviteit.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Tegendeel — als lonen sneller stijgen dan productiviteit, krimpt de winst.",
          "Arbeidsjaren is geen logische maatstaf voor loonsverhoging.",
          "Idem — arbeidsjaren is hier niet relevant.",
        ],
        explanation: "Een werkgever wil winst maken. Hij kan het zich permitteren om lonen te verhogen als zijn werknemers méér produceren (productiviteitstijging). Stijgt de productiviteit met 5% en de loonkosten met 3%? Dan blijft er winstmarge over. Andersom (loonstijging > productiviteit) krimpt de winst.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 2, vraag 8",
        leerpadLink: { id: "pincode-werk-arbeidsmarkt", title: "Werk en arbeidsmarkt" },
      },
    ],
  },
  // V16
  {
    title: "Vraag 16 — algemene heffingskorting & nivellering",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 2, vraag 16. Doorklik voor de Pincode-uitleg in **Belasting** (stap 'Heffingskortingen').",
    emoji: "🎓",
    checks: [
      {
        q: "De algemene heffingskorting is hoger voor mensen met een lager inkomen. Leidt de algemene heffingskorting tot een nivellering of een denivellering van inkomens?",
        options: [
          "Tot denivellering: het verandert in het voordeel van de hoge inkomens.",
          "Tot denivellering: het verandert in het voordeel van de lage inkomens.",
          "Tot nivellering: het verandert in het voordeel van de hoge inkomens.",
          "Tot nivellering: het verandert in het voordeel van de lage inkomens.",
        ],
        answer: 3,
        wrongHints: [
          "Denivellering = verschillen GROTER worden — past niet bij hogere korting voor laag.",
          "Inconsistent — verandering in voordeel lage inkomens = nivellering, niet denivellering.",
          "Inconsistent — nivellering = inkomensverschillen kleiner, niet 'voordeel hoge inkomens'.",
          null,
        ],
        explanation: "**Nivellering** = inkomensverschillen worden KLEINER. **Denivellering** = inkomensverschillen worden GROTER. Een hogere korting voor lage inkomens = lage inkomens houden relatief meer over = verschil tussen arm en rijk wordt kleiner = NIVELLERING in voordeel van lage inkomens.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 2, vraag 16",
        leerpadLink: { id: "pincode-belasting", title: "Belasting" },
      },
    ],
  },
  // V39
  {
    title: "Vraag 39 — wat is modaal inkomen?",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 2, vraag 39. Doorklik voor de Pincode-uitleg in **Inkomen en welvaart** (stap 'Inkomensverdeling').",
    emoji: "🎓",
    checks: [
      {
        q: "Wat wordt bedoeld met het begrip modaal inkomen?",
        options: [
          "Het afgesproken minimum inkomen als je werkt in loondienst.",
          "Het gemiddelde inkomen in Nederland.",
          "Het inkomen dat in Nederland het meeste voorkomt.",
          "Het netto inkomen dat je verdient als je werkt in loondienst.",
        ],
        answer: 2,
        wrongHints: [
          "Dat is het MINIMUMLOON, niet modaal.",
          "Dat is het GEMIDDELDE inkomen — anders dan modaal.",
          null,
          "Te vaag — netto-inkomen is een algemeen begrip, niet modaal.",
        ],
        explanation: "Modaal inkomen = het inkomen dat het MEEST voorkomt in Nederland (modus uit de statistiek). Niet hetzelfde als gemiddelde (= alle inkomens opgeteld / aantal mensen) of mediaan (= middelste inkomen). Modaal NL ~€44.000 bruto/jaar (2024) — dat is wat een 'modaal gezin' typisch verdient.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 2, vraag 39",
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
      },
    ],
  },
  // V43
  {
    title: "Vraag 43 — modaal inkomen en koopkracht",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 2, vraag 43. Doorklik voor de Pincode-uitleg in **Inkomen en welvaart**.",
    emoji: "🎓",
    checks: [
      {
        q: "Het modale inkomen wordt nog vaak gebruikt om de koopkracht te onderzoeken. Waar moet rekening mee gehouden worden bij het bepalen van de koopkracht?",
        options: [
          "De inflatie van het land.",
          "De inkomensverdeling in het land.",
          "De oppervlakte van het land.",
          "Het aantal inwoners in het land.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Inkomensverdeling is een aparte indicator (Lorenzcurve), niet wat koopkracht meet.",
          "Oppervlakte heeft geen invloed op wat je voor je geld kunt kopen.",
          "Aantal inwoners zegt niets over koopkracht per persoon.",
        ],
        explanation: "Koopkracht = wat je werkelijk kunt kopen voor je inkomen. Daarvoor moet je nominaal inkomen corrigeren voor INFLATIE (prijsstijgingen). Stijgt je modaal inkomen met 3% terwijl prijzen 5% stijgen → koopkracht daalt 2%. Inflatie is de KERN-correctie voor koopkracht.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 2, vraag 43",
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
      },
    ],
  },
];

const examenEconomie2025T2 = {
  id: "examen-economie-2025-t2",
  title: "Examen oefenen — Economie 2025 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2025-T2",
  intro:
    "5 echte examenvragen uit VMBO-GL/TL economie 2025 tijdvak 2 (laatste van 6 economie examens). Per vraag de echte antwoorden, denkprikkel-hints, inhoudelijke uitleg, doorklik naar Pincode-leerpad. V20 (Lorenzcurve) en V26 (volgorde-vraag) zijn weggelaten.",
  triggerKeywords: [
    "examen 2025 tijdvak 2", "examen oefenen", "echte examenvragen",
    "begroting definitie", "loon arbeidsproductiviteit", "heffingskorting nivellering",
    "modaal inkomen", "koopkracht inflatie",
  ],
  chapters,
  steps,
};

export default examenEconomie2025T2;
