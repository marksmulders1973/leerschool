// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2025 tijdvak 1
// Pilot 2026-05-09 (Mark wens): echte MC-vragen met informatiebron uit
// bijlage als nette tabellen, officiele uitleg uit correctievoorschrift,
// link naar Pincode-leerpad voor diepe stof.
//
// Specifiek voor klas 4 (eindexamen) — level: vmbo-gt-4.
// Bron: examenblad.nl, examen 0233 GT 2025-1-o/b/c.

// Bron-tekst-helpers (hergebruikt over meerdere vragen)
const bronSintMaarten = {
  titel: "informatiebron 1 — economische gegevens van Sint-Maarten 2010, 2016 en 2017, omgerekend in euro's",
  tableData: {
    headers: ["", "2010", "2016", "2017"],
    rows: [
      ["nationaal inkomen (× miljoen)", "798", "960", "934"],
      ["reële nationaal inkomen (× miljoen)", "746", "840", "798"],
      ["waarde export van goederen en diensten (× miljoen)", "854", "1.046", "835"],
      ["waarde import van goederen en diensten (× miljoen)", "847", "1.014", "921"],
      ["aantal verblijfstoeristen", "443.136", "528.150", "402.092"],
      ["aantal cruisetoeristen (× 1.000)", "1.513", "1.669", "1.238"],
      ["bevolking Sint-Maarten", "34.496", "39.410", "40.535"],
    ],
  },
};

const bronGemeente = {
  titel: "informatiebron 3 — aantal huishoudens en gemiddeld vermogen",
  tableData: {
    headers: ["", "gemeente Rijkwijk", "gemeente Armere"],
    rows: [
      ["aantal huishoudens", "6.433", "174.765"],
      ["gemiddeld vermogen per huishouden", "€ 230.000", "€ 18.000"],
    ],
  },
};

const bronJongerenInkomen = {
  titel: "Bronnen van inkomen voor jongeren",
  body: "Gemiddeld beginnen jongeren op 21-jarige leeftijd met een (volledige) baan.\n\nVoor die tijd hebben jongeren meestal verschillende bronnen van inkomen, zoals:\n• zakgeld van ouders (overdrachtsinkomen)\n• inkomen uit een bijbaan (loon)\n• rente op spaargeld\n• evt. studiefinanciering",
};

const bronDog4fun = {
  titel: "informatiebron 6 — concurrent Dogrunner",
  body: "Wij halen uw hond bij u thuis op met een van onze speciaal ingerichte verwarmde bussen en nemen uw hond mee naar ons eigen ruime en omheinde uitlaatterrein in de duinen. Uw hond kan zo'n twee uur lekker rennen, spelen en dollen met soortgenoten onder deskundig toezicht van twee Wibevo-gecertificeerde hondenbegeleiders.\n\nTarieven abonnement (per hond per week):\n• 3 maal per week: € 29\n• 4 maal per week: € 37\n• 5 maal per week: € 47,50",
};

// Geen verzonnen bronnen — V29 + V37 zijn conceptueel oplosbaar zonder bijlage

const chapters = [
  { letter: "A", title: "Sint-Maarten — economie", emoji: "🏝️", from: 0, to: 2 },
  { letter: "B", title: "De gemeente", emoji: "🏛️", from: 3, to: 4 },
  { letter: "C", title: "Inkomen jongeren", emoji: "💰", from: 5, to: 5 },
  { letter: "D", title: "Dog4fun ondernemen", emoji: "🐕", from: 6, to: 6 },
  { letter: "E", title: "Buitenland", emoji: "🌍", from: 7, to: 7 },
  { letter: "F", title: "Sparen of beleggen", emoji: "💸", from: 8, to: 8 },
];

const steps = [
  // ─── Vraag 1 — Sint-Maarten — handel ────────────────────────
  {
    title: "Vraag 1 — Sint-Maarten — handel",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 1. Lees eerst informatiebron 1 (de tabel). Doorklik na de vraag voor diepere uitleg in het Pincode-leerpad **Nederland en het buitenland**.",
    emoji: "🎓",
    checks: [
      {
        q: "Welke bewering over de export en import van Sint-Maarten is juist?",
        options: [
          "In 2010 was de waarde van de export lager dan de waarde van de import.",
          "In 2016 was de waarde van de export lager dan de waarde van de import.",
          "In 2017 was de waarde van de export lager dan de waarde van de import.",
          "In alle jaren was de waarde van de export lager dan de waarde van de import.",
        ],
        answer: 2,
        wrongHints: [
          "Vergelijk export 854 met import 847 in 2010 — wie is hoger?",
          "Vergelijk export 1.046 met import 1.014 in 2016.",
          null,
          "Klopt niet voor 2010 en 2016 — daar was export juist hoger.",
        ],
        explanation: "In 2017 is de waarde van de export (835 mln) lager dan de waarde van de import (921 mln). In 2010 en 2016 was het omgekeerd: export was hoger dan import.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 1",
        bronTekst: bronSintMaarten,
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
      },
    ],
  },
  // ─── Vraag 2 — Sint-Maarten — welvaart ──────────────────────
  {
    title: "Vraag 2 — reëel nationaal inkomen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 2. Doorklik na de vraag voor diepere uitleg in het Pincode-leerpad **Inkomen en welvaart**.",
    emoji: "🎓",
    checks: [
      {
        q: "De welvaart van een land kan worden gemeten door het nationaal inkomen te berekenen. Waarmee moet je rekening houden als je het reële nationale inkomen berekent?",
        options: [
          "de belastingen",
          "de inkomensverdeling",
          "de veranderde prijzen",
          "zelfvoorziening",
        ],
        answer: 2,
        wrongHints: [
          "Belasting beïnvloedt netto inkomen, niet de 'reële' meting.",
          "Inkomensverdeling = Lorenz/Gini, andere maat.",
          null,
          "Zelfvoorziening = nauwelijks voor moderne economie relevant.",
        ],
        explanation: "Reëel nationaal inkomen = nominaal inkomen gecorrigeerd voor inflatie (de veranderde prijzen). Zo zie je hoeveel je écht kunt kopen — niet enkel hoeveel euro het is.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 2",
        bronTekst: bronSintMaarten,
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
      },
    ],
  },
  // ─── Vraag 4 — Sint-Maarten — toerisme ──────────────────────
  {
    title: "Vraag 4 — uitgaven van toeristen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 4. Doorklik na de vraag voor diepere uitleg in het Pincode-leerpad **Nederland en het buitenland**.",
    emoji: "🎓",
    checks: [
      {
        q: "Waartoe behoren de uitgaven van de toeristen, die een souvenir kopen op Sint-Maarten?",
        options: [
          "Tot de export van diensten door Sint-Maarten.",
          "Tot de export van goederen door Sint-Maarten.",
          "Tot de import van diensten door Sint-Maarten.",
          "Tot de import van goederen door Sint-Maarten.",
        ],
        answer: 1,
        wrongHints: [
          "Souvenir is een tastbaar product, geen dienst.",
          null,
          "Sint-Maarten verkoopt — niet importeert.",
          "Souvenir is wel goed, maar export ipv import (verkocht aan buitenlandse toerist).",
        ],
        explanation: "Een souvenir is een goed (tastbaar). Een buitenlandse toerist die het op Sint-Maarten koopt, betaalt aan een Sint-Maartens bedrijf — dat heet export van goederen door Sint-Maarten.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 4",
        bronTekst: bronSintMaarten,
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
      },
    ],
  },
  // ─── Vraag 8 — Gemeente — taken ─────────────────────────────
  {
    title: "Vraag 8 — taken van de gemeente",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 8. Doorklik voor de Pincode-uitleg in **De overheid**.",
    emoji: "🎓",
    checks: [
      {
        q: "Welke overheidstaken voert de gemeente uit?",
        options: [
          "Het onderhoud aan dijken, kanalen en waterwegen.",
          "Het uitgeven van een paspoort, identiteitskaart en rijbewijs.",
          "Het verstrekken van huur- en zorgtoeslag.",
          "Het verstrekken van uitkeringen, zoals de AOW.",
        ],
        answer: 1,
        wrongHints: [
          "Dat doet het waterschap.",
          null,
          "Toeslagen worden door de Belastingdienst verstrekt.",
          "AOW is een Rijkstaak (uitvoering: SVB).",
        ],
        explanation: "De gemeente verzorgt o.a. paspoorten, ID-kaarten en rijbewijzen — dat zijn lokale burger­zaken. Dijken = waterschap, toeslagen = Belastingdienst, AOW = SVB/Rijksoverheid.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 8",
        leerpadLink: { id: "pincode-overheid", title: "De overheid" },
      },
    ],
  },
  // ─── Vraag 9 — Gemeente — belasting ─────────────────────────
  {
    title: "Vraag 9 — gemeentelijke belasting",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 9. Doorklik voor de Pincode-uitleg in **De overheid**.",
    emoji: "🎓",
    checks: [
      {
        q: "Een gemeente ontvangt inkomsten vanuit de gemeentelijke belastingen en gemeentelijke heffingen. Welke belasting betalen de inwoners aan de gemeente?",
        options: [
          "accijns",
          "motorrijtuigenbelasting",
          "onroerendezaakbelasting",
          "vennootschapsbelasting",
        ],
        answer: 2,
        wrongHints: [
          "Accijns wordt geheven door de Rijksoverheid (op brandstof, alcohol, tabak).",
          "Motorrijtuigenbelasting gaat naar de Rijksoverheid (en provincie via opcenten).",
          null,
          "VPB is een Rijksbelasting voor BV's en NV's.",
        ],
        explanation: "OZB (onroerendezaakbelasting) is de belangrijkste gemeentelijke belasting voor inwoners. Het wordt geheven over het bezit van een woning of bedrijfspand binnen de gemeente.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 9",
        leerpadLink: { id: "pincode-overheid", title: "De overheid" },
      },
    ],
  },
  // ─── Vraag 14 — Inkomen jongeren ────────────────────────────
  {
    title: "Vraag 14 — overdrachtsinkomen jongeren",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 14. Doorklik voor de Pincode-uitleg in **Inkomen en welvaart**.",
    emoji: "🎓",
    checks: [
      {
        q: "Gemiddeld beginnen jongeren op 21-jarige leeftijd met een (volledige) baan. Voor die tijd hebben jongeren meestal verschillende bronnen van inkomen, zoals een overdrachtsinkomen. Wat is een voorbeeld van een overdrachtsinkomen?",
        options: [
          "loon",
          "rente",
          "winst",
          "zakgeld",
        ],
        answer: 3,
        wrongHints: [
          "Loon = primair inkomen (uit arbeid).",
          "Rente = primair inkomen (uit kapitaal).",
          "Winst = primair inkomen (uit ondernemerschap).",
          null,
        ],
        explanation: "Zakgeld is een overdrachtsinkomen: je krijgt het ZONDER er een productiefactor (arbeid/kapitaal/etc.) tegenover te zetten. Loon, rente en winst zijn primaire inkomens (verdiend met een productiefactor).",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 14",
        bronTekst: bronJongerenInkomen,
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
      },
    ],
  },
  // ─── Vraag 17 — Dog4fun rechtsvorm ──────────────────────────
  {
    title: "Vraag 17 — ondernemingsvorm Dog4fun",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 17. Doorklik voor de Pincode-uitleg in **Ondernemen**.",
    emoji: "🎓",
    checks: [
      {
        q: "De leerlingen van de klas doen allemaal mee. Ze zijn allen priv' aansprakelijk voor de eventuele schulden van Dog4fun. Welke ondernemingsvorm heeft Dog4fun?",
        options: [
          "besloten vennootschap (bv)",
          "eenmanszaak",
          "naamloze vennootschap (nv)",
          "vennootschap onder firma (vof)",
        ],
        answer: 3,
        wrongHints: [
          "BV = juist NIET privé aansprakelijk (eigenaars beschermd).",
          "Eenmanszaak = 1 eigenaar, hier zijn meerdere leerlingen vennoten.",
          "NV = juist NIET privé aansprakelijk + grote organisatie.",
          null,
        ],
        explanation: "Bij een VOF (vennootschap onder firma) zijn meerdere personen samen ondernemer EN allen privé aansprakelijk voor de schulden. Past precies bij 'klas met allen privé aansprakelijk'.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 17",
        bronTekst: bronDog4fun,
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
      },
    ],
  },
  // ─── Vraag 29 — Handelsoverschot ────────────────────────────
  {
    title: "Vraag 29 — handelsoverschot agrarisch",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 29. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland**.",
    emoji: "🎓",
    checks: [
      {
        q: "De import van agrarische producten is procentueel sterker gegroeid dan de export. Toch is het Nederlandse handelsoverschot van de handel toegenomen. Wat kan daarvan de reden zijn?",
        options: [
          "Het prijspeil van de export is minder gestegen dan het prijspeil van de import.",
          "Het prijspeil van de export is meer gestegen dan het prijspeil van de import.",
          "De ge'xporteerde hoeveelheid is minder gestegen dan de ge'mporteerde hoeveelheid.",
        ],
        answer: 1,
        wrongHints: [
          "Tegendeel: dan zou overschot juist kleiner worden.",
          null,
          "Klopt al uit de vraag (import procentueel sterker), maar verklaart niet waarom overschot toch toeneemt.",
          "Tegendeel uit de vraag.",
        ],
        explanation: "Hoewel het AANTAL geïmporteerd sterker stijgt, is de WAARDE van de export hoger geworden door hogere exportprijzen. Resultaat: overschot in geld neemt toe, ondanks dat het volume-saldo wijzigt.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 29",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
      },
    ],
  },
  // ─── Vraag 32 GESKIPT: was volgorde-vraag (1-2-3 in juiste volgorde, 6 opties A-F),
  // niet een 4-MC vraag. Parser pakte het verkeerd. Voor zuivelboeren-onderwerp
  // verwijst leerling naar Pincode 'Ondernemen' stap 'Vraag en aanbod'.
  // ─── Vraag 37 — Sparen of beleggen ──────────────────────────
  {
    title: "Vraag 37 — investeren in warmtepomp",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 37. Doorklik voor de Pincode-uitleg in **Geld, sparen en lenen** (stap 'Sparen of beleggen').",
    emoji: "🎓",
    checks: [
      {
        q: "Germaine: \"Tegenwoordig levert sparen weinig op en is geld lenen goedkoop. Spaarders kunnen beter het geld investeren in een warmtepomp, dat levert op termijn meer op.\" Wat is een juiste samenvatting van Germaines bewering?",
        options: [
          "De besparing op energiekosten is hoger dan de te ontvangen rente.",
          "De besparing op energiekosten is lager dan de te ontvangen rente.",
          "Geld lenen is goedkoper dan de investering in een warmtepomp.",
          "Geld lenen is duurder dan de investering in een warmtepomp.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Tegendeel — als besparing lager was dan rente, zou sparen juist beter zijn.",
          "Germaine zegt iets over het terugverdienen via energie-besparing, niet vergelijking lening vs warmtepomp-prijs.",
          "Idem als C — niet de kern van Germaine's redenering.",
        ],
        explanation: "Germaine's redenering: spaarrente is laag → een investering die jaarlijks méér bespaart dan die rente, levert per saldo meer op. Antwoord A vat dat precies samen: besparing energie > rente op spaargeld.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 37",
        leerpadLink: { id: "pincode-geld-sparen-lenen", title: "Geld, sparen en lenen" },
      },
    ],
  },
];

const examenEconomie2025T1 = {
  id: "examen-economie-2025-t1",
  title: "Examen oefenen — Economie 2025 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2025-T1",
  intro:
    "10 echte examenvragen uit het VMBO-GL/TL economie-examen 2025 tijdvak 1. Per vraag krijg je de informatiebron uit de bijlage als nette tabel of tekst, de 4 antwoorden uit het examen, en daarna de '📖 Leg uit'-knop voor de officiële uitleg uit het correctievoorschrift. V12 + V19 zijn weggelaten omdat die een grafiek/tabel-afbeelding nodig hebben.",
  triggerKeywords: [
    "examen 2025", "examen oefenen", "echte examenvragen", "eindexamen oefenen",
    "informatiebron", "sint-maarten", "dog4fun", "rijkwijk", "armere",
    "warmtepomp", "melkrobot", "zuivelboer", "handelsoverschot",
  ],
  chapters,
  steps,
};

export default examenEconomie2025T1;
