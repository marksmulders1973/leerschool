// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2024 tijdvak 2
// 2026-05-10: derde pilot-examen — 6 vragen geverifieerd tegen origineel.
// Bron: examenblad.nl, examen 0233 GT 2024-2 (-o/-b/-c).

const chapters = [
  { letter: "A", title: "Internationale handel", emoji: "🌍", from: 0, to: 0 },
  { letter: "B", title: "Ondernemen & marketing", emoji: "🏪", from: 1, to: 2 },
  { letter: "C", title: "Sociale zekerheid", emoji: "🤝", from: 3, to: 4 },
  { letter: "D", title: "Vermogen", emoji: "💰", from: 5, to: 5 },
];

const steps = [
  // ─── Vraag 1 — Nationaal inkomen Kameroen ────────────────
  {
    title: "Vraag 1 — Kameroen en nationaal inkomen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 2, vraag 1. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland** of **Ontwikkelingslanden**.",
    emoji: "🎓",
    checks: [
      {
        q: "Als we landen met elkaar vergelijken, kijken we naar het nationaal inkomen van een land. In welke regel staat een verschijnsel waarbij geld uit Nederland naar Kameroen stroomt?",
        options: [
          "De overheid van Kameroen koopt Nederlandse helikopters.",
          "In Kameroen verbouwen veel mensen hun eigen groenten.",
          "Nederlandse toeristen gaan op vakantie naar Kameroen.",
          "Nederlanders kopen koffie uit Kameroen.",
        ],
        answer: 2,
        wrongHints: [
          "Hier stroomt geld JUIST naar Nederland (Kameroen koopt en betaalt aan NL).",
          "Eigen groente verbouwen → geen geldstroom tussen landen.",
          null,
          "Klopt ook (NL geld → Kameroen), maar context-vraag wijst meestal op toerisme als 'export van diensten'.",
        ],
        explanation: "Nederlandse toeristen op vakantie in Kameroen geven daar geld uit (hotel, eten, souvenirs). Dat is geld dat van NL naar Kameroen stroomt — voor Kameroen is het export van diensten. Voor NL is het import.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag 1",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
      },
    ],
  },
  // ─── Vraag 17 — Arjun ondernemingsvorm ──────────────────
  {
    title: "Vraag 17 — niet hoofdelijk aansprakelijk",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 2, vraag 17. Doorklik voor de Pincode-uitleg in **Ondernemen** (stap 'Rechtsvormen').",
    emoji: "🎓",
    checks: [
      {
        q: "Een eigenaar van een bedrijf moet een ondernemingsvorm kiezen. Welke ondernemingsvorm moet Arjun kiezen, zodat hij NIET hoofdelijk aansprakelijk is voor de schulden van zijn bedrijf?",
        options: [
          "bv (besloten vennootschap)",
          "eenmanszaak",
          "vof (vennootschap onder firma)",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij een eenmanszaak ben je JUIST volledig privé aansprakelijk voor schulden.",
          "Bij een VOF zijn alle vennoten hoofdelijk aansprakelijk — ook voor schulden van de ander.",
        ],
        explanation: "Een BV (besloten vennootschap) is een rechtspersoon. Dat betekent dat het bedrijf juridisch een aparte 'persoon' is. De eigenaar is daardoor niet privé aansprakelijk voor schulden — alleen het bedrijfsvermogen kan worden verkocht bij faillissement. Dat is precies waarom Arjun een BV moet kiezen.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag 17",
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
      },
    ],
  },
  // ─── Vraag 21 — Camping marketing-mix ──────────────────
  {
    title: "Vraag 21 — luxe campingplaats marketing",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 2, vraag 21. Doorklik voor de Pincode-uitleg in **Ondernemen** (stap 'Doelgroep en marketing').",
    emoji: "🎓",
    checks: [
      {
        q: "Veel campinggasten willen tegenwoordig een luxe, trendy campingplaats met eigen sanitair en luxe keuken. Arjun wil hierin investeren, zodat hij meer luxe campingplaatsen kan aanbieden. Onder welk onderdeel van de marketingmix valt deze beslissing?",
        options: [
          "onder personeelsbeleid",
          "onder plaatsbeleid",
          "onder presentatiebeleid",
          "onder productbeleid",
        ],
        answer: 3,
        wrongHints: [
          "Personeelsbeleid gaat over de medewerkers, niet over wat je verkoopt.",
          "Plaatsbeleid gaat over WAAR je verkoopt (locatie, kanaal).",
          "Presentatiebeleid gaat over hoe je het AANBIEDT (uiterlijk, sfeer).",
          null,
        ],
        explanation: "De luxe campingplaats met eigen sanitair en keuken is het PRODUCT zelf — wat Arjun verkoopt. Productbeleid gaat over wat je biedt aan klanten (kwaliteit, kenmerken, variatie). De 4 P's van marketing: Product, Prijs, Plaats, Promotie.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag 21",
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
      },
    ],
  },
  // ─── Vraag 27 — i/a-ratio ──────────────────────────────
  {
    title: "Vraag 27 — i/a-ratio en sociale uitkeringen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 2, vraag 27. Doorklik voor de Pincode-uitleg in **Werk en arbeidsmarkt** (stap 'Sociale zekerheid').",
    emoji: "🎓",
    checks: [
      {
        q: "De i/a-ratio is de verhouding tussen het aantal inactieven (mensen met een uitkering) en actieven (werkenden). Als de i/a-ratio stijgt:",
        options: [
          "blijft de betaalbaarheid van de sociale uitkeringen gelijk",
          "neemt de betaalbaarheid van de sociale uitkeringen af",
          "neemt de betaalbaarheid van de sociale uitkeringen toe",
        ],
        answer: 1,
        wrongHints: [
          "Wel verandering — meer ontvangers + minder betalers = wel impact.",
          null,
          "Tegendeel — als er per werkende meer uitkeringen betaald moeten worden, wordt het zwaarder, niet lichter.",
        ],
        explanation: "i/a-ratio stijgt = meer mensen met uitkering t.o.v. werkenden. De werkenden moeten via belasting/premies de uitkeringen betalen — als er minder werkenden per uitkering zijn, wordt het MOEILIJKER om uitkeringen te financieren. Vergrijzing is een grote drijver van een stijgende i/a-ratio.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag 27",
        leerpadLink: { id: "pincode-werk-arbeidsmarkt", title: "Werk en arbeidsmarkt" },
      },
    ],
  },
  // ─── Vraag 28 — Fairtrade hulp-type ─────────────────────
  {
    title: "Vraag 28 — fairtrade als ontwikkelingshulp",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 2, vraag 28. Doorklik voor de Pincode-uitleg in **Ontwikkelingslanden** (stap 'Eerlijke handel en jouw keuzes als consument').",
    emoji: "🎓",
    checks: [
      {
        q: "De inkoop en verkoop van fairtrade producten is een vorm van particuliere ontwikkelingshulp. Hoe noemen we deze hulp?",
        options: [
          "bilaterale hulp",
          "noodhulp",
          "structurele hulp",
        ],
        answer: 2,
        wrongHints: [
          "Bilateraal = land-tot-land hulp (overheid). Fairtrade is privaat.",
          "Noodhulp = bij rampen (voedsel, medicijnen, snel). Fairtrade is langdurig.",
          null,
        ],
        explanation: "Fairtrade biedt boeren in ontwikkelingslanden een eerlijke prijs voor hun producten — over jaren heen. Dat is structurele hulp: gericht op duurzame verbetering van inkomens. Tegenover noodhulp (acuut, kortlopend) staat structurele hulp (lange termijn, op de oorzaken van armoede gericht).",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag 28",
        leerpadLink: { id: "pincode-ontwikkelingslanden", title: "Ontwikkelingslanden" },
      },
    ],
  },
  // ─── Vraag 33 — Vermogen familie Boot ───────────────────
  {
    title: "Vraag 33 — vermogen berekenen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 2, vraag 33. Doorklik voor de Pincode-uitleg in **Geld, sparen en lenen**.",
    emoji: "🎓",
    checks: [
      {
        q: "De waarde van de bezittingen van de familie Boot bedraagt €100.000 en de waarde van de schulden is €20.000. In welke situatie kan het vermogen van de familie Boot toenemen?",
        options: [
          "als de bezittingen dalen met 4% en de schulden stijgen met 4%",
          "als de bezittingen dalen met 4% en de schulden dalen met 6%",
          "als de bezittingen stijgen met 2% en de schulden stijgen met 6%",
        ],
        answer: 2,
        wrongHints: [
          "Bezittingen dalen + schulden stijgen → vermogen daalt zeker.",
          "Reken: -4% van €100k = -€4.000, -6% van €20k = -€1.200. Netto -€2.800. Vermogen DAALT.",
          null,
        ],
        explanation: "Vermogen = bezittingen − schulden = €100.000 − €20.000 = €80.000.\n\nOptie C: bezittingen +2% = +€2.000 (nu €102.000), schulden +6% = +€1.200 (nu €21.200). Nieuw vermogen = €102.000 − €21.200 = €80.800. Toename van €800. ✓\n\nOptie A en B leiden allebei tot een vermogen-DALING.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag 33",
        leerpadLink: { id: "pincode-geld-sparen-lenen", title: "Geld, sparen en lenen" },
      },
    ],
  },
];

const examenEconomie2024T2 = {
  id: "examen-economie-2024-t2",
  title: "Examen oefenen — Economie 2024 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2024-T2",
  intro:
    "6 echte examenvragen uit het VMBO-GL/TL economie-examen 2024 tijdvak 2. Per vraag de echte antwoorden, didactische denkprikkel-hints, inhoudelijke uitleg, en doorklik naar het bijhorende Pincode-leerpad. V4, V32, V43 (volgorde-vragen) en V7, V24 (vereisen grafiek) zijn weggelaten.",
  triggerKeywords: [
    "examen 2024", "examen oefenen", "echte examenvragen", "eindexamen oefenen 2024 tv2",
    "kameroen toerisme", "arjun ondernemingsvorm", "luxe camping marketing",
    "i/a-ratio", "fairtrade structureel", "familie boot vermogen",
  ],
  chapters,
  steps,
};

export default examenEconomie2024T2;
