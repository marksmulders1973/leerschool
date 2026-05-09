// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2024 tijdvak 1
// 2026-05-10: zelfde aanpak als 2025-T1 pilot (lessons learned ingebouwd):
// - geen verzonnen content
// - bron alleen koppelen bij expliciete verwijzing
// - tableData voor tabellen (handmatig overgetypt uit pdftotext -table)
// - explanation = officiele uitleg / inhoudelijk
// - leerpadLink per vraag naar relevant Pincode-pad
// - 6 vragen — 4 volgorde-vragen (V5, V15, V44) + 1 grafiek-vraag (V9) geskipt
//
// Bron: examenblad.nl, examen 0233 GT 2024-1 (-o/-b/-c).

// ─── Bron-helpers (alleen voor vragen die expliciet bron nodig hebben) ───

const bronSasja = {
  titel: "informatiebron 10 — overzicht persoonlijke inkomsten en uitgaven van Sasja en gemiddelde uitwonende mbo-student (per maand)",
  body: "Inkomsten Sasja:\n• basisbeurs: € 277\n• aanvullende beurs: € 0\n• studielening: € 124\n• bijbaan: € 374\n• bijdrage ouders: € 150\n• zorgtoeslag: € 99\n• TOTAAL: € 1.024",
  tableData: {
    headers: ["Uitgaven", "Sasja", "Gemiddeld"],
    rows: [
      ["lesgeld", "€ 98", "€ 98"],
      ["studieboeken", "€ 57", "€ 127"],
      ["zorgverzekering", "€ 106", "€ 100"],
      ["huur", "€ 366", "€ 413"],
      ["dagelijkse huishoudelijke uitgaven", "€ 323", "€ 295"],
      ["vrijetijdsuitgaven", "€ 160", "€ 147"],
      ["totaal uitgaven", "€ 1.110", "€ 1.180"],
    ],
  },
};

const chapters = [
  { letter: "A", title: "Europa & marktvormen", emoji: "🇪🇺", from: 0, to: 1 },
  { letter: "B", title: "Inkomen & overheid", emoji: "💰", from: 2, to: 3 },
  { letter: "C", title: "Studeren & werk", emoji: "🎒", from: 4, to: 5 },
];

const steps = [
  // ─── Vraag 2 — Zweden EMU ────────────────────────────────
  {
    title: "Vraag 2 — Zweden in de EMU",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 1, vraag 2. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland**.",
    emoji: "🎓",
    checks: [
      {
        q: "Is Zweden ook lid van de Europese Monetaire Unie (EMU)?",
        options: [
          "Ja, er wordt betaald met de euro.",
          "Ja, naast de Zweedse kroon is ook de euro een wettig betaalmiddel.",
          "Nee, er wordt betaald met de Zweedse kroon.",
          "Nee, naast de euro is ook de Zweedse kroon een wettig betaalmiddel.",
        ],
        answer: 2,
        wrongHints: [
          "Niet elk EU-land gebruikt de euro. Zweden hoort er niet bij — denk waarom.",
          "Een land heeft maar één wettig betaalmiddel.",
          null,
          "Zweden gebruikt geen euro — alleen de kroon is wettig betaalmiddel.",
        ],
        explanation: "Zweden is wel lid van de EU, maar NIET van de eurozone (EMU). Het land betaalt met de Zweedse kroon (SEK). Andere EU-landen zonder euro zijn bv. Denemarken, Polen, Tsjechië en Hongarije.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 2",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
      },
    ],
  },
  // ─── Vraag 7 — Publieke omroep ──────────────────────────────
  {
    title: "Vraag 7 — marktvorm publieke omroepen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 1, vraag 7. Doorklik voor de Pincode-uitleg in **Ondernemen** (stap 'Macht op de markt').",
    emoji: "🎓",
    checks: [
      {
        q: "Van welke marktvorm is er sprake bij de publieke omroepen?",
        options: [
          "van monopolie",
          "van monopolistische concurrentie",
          "van oligopolie",
          "van volkomen concurrentie",
        ],
        answer: 2,
        wrongHints: [
          "Bij monopolie is er maar één aanbieder — denk aan het aantal omroepen.",
          "Monopolistische concurrentie heeft veel kleine aanbieders met gedifferentieerd product.",
          null,
          "Volkomen concurrentie vereist heel veel aanbieders met identiek product.",
        ],
        explanation: "Publieke omroepen (NPO/AVROTROS/BNNVARA/KRO-NCRV/etc.) zijn een paar grote spelers op dezelfde markt — dat is per definitie een oligopolie. Ze hebben gedifferentieerde programmering maar weinig concurrenten.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 7",
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
      },
    ],
  },
  // ─── Vraag 27 — Reëel inkomen ───────────────────────────────
  {
    title: "Vraag 27 — koopkracht en reëel inkomen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 1, vraag 27. Doorklik voor de Pincode-uitleg in **Inkomen en welvaart** (stap 'Welvaart, inflatie en koopkracht').",
    emoji: "🎓",
    checks: [
      {
        q: "De Nederlandse bevolking is op Prinsjesdag vooral benieuwd wat de plannen van de regering betekenen voor hun koopkracht. Wat wordt verstaan onder koopkracht?",
        options: [
          "het bruto-inkomen",
          "het netto-inkomen",
          "het nominaal inkomen",
          "het reëel inkomen",
        ],
        answer: 3,
        wrongHints: [
          "Bruto-inkomen is wat je verdient vóór belasting — zegt niets over wat je kunt kopen.",
          "Netto-inkomen is wat overblijft na belasting — maar koopkracht houdt ook rekening met prijzen.",
          "Nominaal = uitgedrukt in geld zonder rekening te houden met inflatie.",
          null,
        ],
        explanation: "Koopkracht = je reëel inkomen = nominaal inkomen gecorrigeerd voor inflatie. Dat zegt hoeveel je werkelijk kunt kopen. Bij hoge inflatie kan je nominaal inkomen stijgen, terwijl je reëel inkomen daalt — dat voelt iedereen op Prinsjesdag.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 27",
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
      },
    ],
  },
  // ─── Vraag 30 — Staatsschuld Italië ─────────────────────────
  {
    title: "Vraag 30 — staatsschuld Italië",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 1, vraag 30. Doorklik voor de Pincode-uitleg in **De overheid** (stap 'Staatsschuld').",
    emoji: "🎓",
    checks: [
      {
        q: "Wat kan een reden zijn dat de staatsschuld van Italië blijft stijgen?",
        options: [
          "De inkomsten van de Italiaanse overheid zijn groter dan de uitgaven van de overheid.",
          "De inkomsten van de Italiaanse overheid zijn kleiner dan de uitgaven van de overheid.",
          "De inkomsten van de Italiaanse overheid zijn gestegen en de uitgaven gelijk gebleven.",
          "De inkomsten van de Italiaanse overheid zijn gelijk gebleven en de uitgaven zijn gedaald.",
        ],
        answer: 1,
        wrongHints: [
          "Bij meer inkomsten dan uitgaven daalt de staatsschuld juist.",
          null,
          "Stijging inkomsten + gelijke uitgaven = overschot = schuld DAALT.",
          "Gelijke inkomsten + dalende uitgaven = overschot = schuld DAALT.",
        ],
        explanation: "Staatsschuld stijgt als de overheid jaar na jaar méér uitgeeft dan ze binnenkrijgt (begrotingstekort). Dat tekort moet bijgeleend worden — dus de schuld groeit. Italië heeft al jaren een groot tekort + hoge schuld (~140% BBP, ver boven de EMU-norm van 60%).",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 30",
        leerpadLink: { id: "pincode-overheid", title: "De overheid" },
      },
    ],
  },
  // ─── Vraag 36 — Studenten uitgaven onderschatten ────────────
  {
    title: "Vraag 36 — vergeten uitgaven studenten",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 1, vraag 36. Doorklik voor de Pincode-uitleg in **Geld, sparen en lenen** (stap 'Begroten').",
    emoji: "🎓",
    checks: [
      {
        q: "Studenten blijken hun uitgaven te onderschatten. Het Nibud schrijft: 'Dat is niet vreemd, want niet alle uitgaven, zoals reparatie van de fiets, worden meegenomen in de begroting.' Welke uitgaven nemen studenten vaak niet mee in hun begroting?",
        options: [
          "alleen dagelijkse huishoudelijke uitgaven",
          "incidentele uitgaven en dagelijkse huishoudelijke uitgaven",
          "vaste lasten en dagelijkse huishoudelijke uitgaven",
          "vaste lasten en incidentele uitgaven",
        ],
        answer: 1,
        wrongHints: [
          "Te beperkt — fietsreparatie is geen dagelijkse uitgave.",
          null,
          "Vaste lasten (huur, abo's) zijn juist makkelijk te begroten — die vergeet je niet.",
          "Vaste lasten zie je elke maand voorbij komen — die vergeet je meestal niet.",
        ],
        explanation: "Studenten onderschatten vooral: (1) **incidentele uitgaven** zoals fietsreparatie, kapotte telefoon, onverwachte zorgkosten — die zijn moeilijk te plannen, en (2) **dagelijkse huishoudelijke uitgaven** (boodschappen, koffie, soms uit eten) — die lopen op zonder dat je het door hebt. Vaste lasten (huur, abonnementen) staan wél elke maand in de bank, die vergeet niemand.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 36",
        bronTekst: bronSasja,
        leerpadLink: { id: "pincode-geld-sparen-lenen", title: "Geld, sparen en lenen" },
      },
    ],
  },
  // ─── Vraag 41 — Werkloosheid bedrijven verdwijnen ──────────
  {
    title: "Vraag 41 — werkloosheid door verplaatsing",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 1, vraag 41. Doorklik voor de Pincode-uitleg in **Werk en arbeidsmarkt** (stap 'Werkloosheid').",
    emoji: "🎓",
    checks: [
      {
        q: "Welke soort werkloosheid ontstaat er door het verdwijnen van bedrijven naar het buitenland?",
        options: [
          "conjuncturele werkloosheid, het is de aanbodkant van de economie",
          "conjuncturele werkloosheid, het is de vraagkant van de economie",
          "structurele werkloosheid, het is de aanbodkant van de economie",
          "structurele werkloosheid, het is de vraagkant van de economie",
        ],
        answer: 2,
        wrongHints: [
          "Conjunctureel = door slechte economie / recessie. Hier verdwijnen bedrijven structureel.",
          "Conjunctureel = door slechte economie. Hier is het structureel.",
          null,
          "Het verdwijnen van werkgelegenheid = aanbodkant van de arbeidsmarkt (er is minder werk te verrichten in NL).",
        ],
        explanation: "Bedrijven verplaatsen naar het buitenland = de werkgelegenheid verdwijnt structureel — dat is structurele werkloosheid (niet conjunctureel = tijdelijke recessie). Het is de aanbodkant: er wordt minder arbeid in Nederland aangeboden door werkgevers.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 41",
        leerpadLink: { id: "pincode-werk-arbeidsmarkt", title: "Werk en arbeidsmarkt" },
      },
    ],
  },
];

const examenEconomie2024T1 = {
  id: "examen-economie-2024-t1",
  title: "Examen oefenen — Economie 2024 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2024-T1",
  intro:
    "6 echte examenvragen uit het VMBO-GL/TL economie-examen 2024 tijdvak 1. Per vraag de echte 4 antwoorden, didactische denkprikkel-hints, inhoudelijke uitleg, en doorklik naar het bijhorende Pincode-leerpad voor diepere stof. V5, V15, V44 (volgorde-vragen) en V9 (vereist grafiek) zijn weggelaten.",
  triggerKeywords: [
    "examen 2024", "examen oefenen", "echte examenvragen", "eindexamen oefenen 2024",
    "zweden emu", "publieke omroep", "italie staatsschuld", "nibud studenten",
    "werkloosheid verplaatsing", "reeel inkomen prinsjesdag",
  ],
  chapters,
  steps,
};

export default examenEconomie2024T1;
