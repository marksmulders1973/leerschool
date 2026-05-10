// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2023 tijdvak 2
// 2026-05-10: vijfde pilot — 7 vragen geverifieerd tegen origineel.
// Bron: examenblad.nl, examen 0233 GT 2023-2.

const chapters = [
  { letter: "A", title: "Gemeente & belasting", emoji: "🏛️", from: 0, to: 2 },
  { letter: "B", title: "Inflatie & koopkracht", emoji: "📊", from: 3, to: 4 },
  { letter: "C", title: "Internationale handel & valuta", emoji: "🌍", from: 5, to: 6 },
];

const steps = [
  // V12
  {
    title: "Vraag 12 — gemeentelijke inkomstenbron",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 12. Doorklik voor de Pincode-uitleg in **De overheid**.",
    emoji: "🎓",
    checks: [
      {
        q: "De OZB is een belangrijke inkomstenbron van een gemeente. Welke inkomstenbron heeft een gemeente nog meer?",
        options: [
          "afvalstoffenheffing",
          "belasting toegevoegde waarde (btw)",
          "loonheffing",
          "vennootschapsbelasting",
        ],
        answer: 0,
        wrongHints: [
          null,
          "BTW is een Rijksbelasting, gaat naar de Belastingdienst.",
          "Loonheffing is voor de Rijksoverheid (loon-IB + premies).",
          "VPB is voor BV's, gaat naar het Rijk.",
        ],
        explanation: "De afvalstoffenheffing wordt door de gemeente geheven om de kosten van vuilnisophalen + verwerking te dekken. Andere gemeentebelastingen zijn OZB (onroerendezaakbelasting), hondenbelasting en toeristenbelasting. BTW, loonheffing en VPB zijn Rijksbelastingen.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 12",
        leerpadLink: { id: "pincode-overheid", title: "De overheid" },
      },
    ],
  },
  // V14
  {
    title: "Vraag 14 — WOZ-waarde in IB",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 14. Doorklik voor de Pincode-uitleg in **Belasting** (stap 'Inkomstenbelasting').",
    emoji: "🎓",
    checks: [
      {
        q: "Adriaan moet de WOZ-waarde ook invullen in de aangifte inkomstenbelasting. Waarvoor wordt de WOZ-waarde gebruikt bij de aangifte inkomstenbelasting?",
        options: [
          "om de hoogte van de aftrekposten te bepalen",
          "om de hoogte van de heffingskortingen te bepalen",
          "om de hypotheekrenteaftrek te bepalen",
          "om het eigenwoningforfait te bepalen",
        ],
        answer: 3,
        wrongHints: [
          "Aftrekposten zijn een ander onderdeel van IB-aangifte.",
          "Heffingskortingen zijn standaard, niet WOZ-afhankelijk.",
          "Hypotheekrenteaftrek = aftrekken van betaalde hypotheekrente, niet WOZ.",
          null,
        ],
        explanation: "Eigenaren van een huis betalen IB over een fictief 'eigenwoningforfait' — een percentage van de WOZ-waarde dat wordt opgeteld bij het inkomen. WOZ-waarde × ~0,35% (2024) = bedrag dat als inkomen geldt voor IB-berekening.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 14",
        leerpadLink: { id: "pincode-belasting", title: "Belasting" },
      },
    ],
  },
  // V36
  {
    title: "Vraag 36 — vermogensrendementsheffing",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 36. Doorklik voor de Pincode-uitleg in **Belasting** (stap 'Soorten belastingen').",
    emoji: "🎓",
    checks: [
      {
        q: "Spaargeld levert nauwelijks rente op. Tegelijkertijd moeten huishoudens met veel spaargeld belasting betalen over dit spaargeld. Hoe noemen we deze belasting?",
        options: [
          "belasting toegevoegde waarde",
          "loonheffing",
          "onroerendezaakbelasting",
          "vermogensrendementsheffing",
        ],
        answer: 3,
        wrongHints: [
          "BTW geldt voor aankopen, niet voor spaargeld.",
          "Loonheffing geldt voor inkomen uit arbeid.",
          "OZB geldt voor onroerend goed (huis), niet spaargeld.",
          null,
        ],
        explanation: "De vermogensrendementsheffing (Box 3 IB) heft belasting over je vermogen (spaargeld + beleggingen) boven de vrijstelling (~€57.000 in 2024). De Belastingdienst gaat uit van een fictief rendement, los van de werkelijke rente.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 36",
        leerpadLink: { id: "pincode-belasting", title: "Belasting" },
      },
    ],
  },
  // V26
  {
    title: "Vraag 26 — koopkracht stijgt wanneer",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 26. Doorklik voor de Pincode-uitleg in **Inkomen en welvaart**.",
    emoji: "🎓",
    checks: [
      {
        q: "Inflatie kan ook gevolgen hebben voor de koopkracht van de familie Sitalsing. In welke situatie zal de koopkracht van de familie Sitalsing stijgen ten opzichte van het vorige jaar?",
        options: [
          "als de nominale loondaling in procenten hoger is dan de inflatie",
          "als de nominale loonstijging in procenten hoger is dan de inflatie",
          "als de nominale loonstijging in procenten lager is dan de inflatie",
        ],
        answer: 1,
        wrongHints: [
          "Loon DAALT — dan kun je sowieso minder kopen, ook als inflatie meevalt.",
          null,
          "Stijging lager dan inflatie = koopkracht-VERLIES, niet winst.",
        ],
        explanation: "Koopkracht stijgt als je loon meer toeneemt dan de prijzen. Bv. loon +5%, inflatie +3% → reële koopkracht-toename van ~2%. Als loon stijgt maar minder dan inflatie, gaat je koopkracht juist achteruit.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 26",
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
      },
    ],
  },
  // V27
  {
    title: "Vraag 27 — koopkracht beschermen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 27. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland** (stap 'ECB en monetair beleid').",
    emoji: "🎓",
    checks: [
      {
        q: "De ECB is niet van plan om het rentebeleid aan te passen. Er zijn echter nog andere maatregelen om de koopkracht van burgers op peil te houden. Met welk van onderstaande maatregelen kan de koopkracht op peil gehouden worden?",
        options: [
          "vergroting van de winstmarges door bedrijven",
          "verhoging van de btw",
          "verlaging van de heffingskortingen",
          "volledige prijscompensatie in de lonen",
        ],
        answer: 3,
        wrongHints: [
          "Hogere winstmarges = hogere prijzen = koopkracht ZAKT.",
          "BTW omhoog = alle producten duurder = koopkracht ZAKT.",
          "Heffingskorting omlaag = meer belasting = koopkracht ZAKT.",
          null,
        ],
        explanation: "Volledige prijscompensatie betekent dat lonen automatisch meegroeien met de inflatie — koopkracht blijft daardoor op peil. Vakbonden onderhandelen hier vaak over in CAO's. De andere maatregelen verlagen koopkracht juist.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 27",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
      },
    ],
  },
  // V28
  {
    title: "Vraag 28 — invoerrechten op Chinees staal",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 28. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland** (stap 'Beschermingsmaatregelen').",
    emoji: "🎓",
    checks: [
      {
        q: "Wat is een gevolg voor bedrijven in de VS als er invoerrechten geheven worden op Chinees staal?",
        options: [
          "Bedrijven in de VS kopen meer staal uit eigen land, omdat de importprijzen van Chinees staal dalen.",
          "Bedrijven in de VS kopen meer staal uit eigen land, omdat de importprijzen van Chinees staal stijgen.",
          "Bedrijven in de VS kopen minder staal uit eigen land, omdat de importprijzen van Chinees staal dalen.",
          "Bedrijven in de VS kopen minder staal uit eigen land, omdat de importprijzen van Chinees staal stijgen.",
        ],
        answer: 1,
        wrongHints: [
          "Tegendeel — invoerrechten maken Chinees staal DUURDER, niet goedkoper.",
          null,
          "Tegendeel op beide punten.",
          "Inconsistent — als import duurder wordt, kopen ze meer eigen, niet minder.",
        ],
        explanation: "Invoerrechten op Chinees staal = Chinees staal wordt duurder (importprijs stijgt door heffing). Amerikaanse bedrijven gaan dan kopen bij eigen Amerikaanse staalproducenten — die zijn relatief goedkoper geworden. Dat is precies het doel van protectionisme: eigen industrie beschermen.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 28",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
      },
    ],
  },
  // V30
  {
    title: "Vraag 30 — wisselkoers China en dollar",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 2, vraag 30. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland** (stap 'Wisselkoersen').",
    emoji: "🎓",
    checks: [
      {
        q: "Wat gebeurt er met de koers van de dollar als China in grote hoeveelheden dollars opkoopt?",
        options: [
          "Door de grote Chinese vraag naar dollars daalt de koers van de dollar.",
          "Door de grote Chinese vraag naar dollars stijgt de koers van de dollar.",
          "Door het grote Chinese aanbod van dollars daalt de koers van de dollar.",
          "Door het grote Chinese aanbod van dollars stijgt de koers van de dollar.",
        ],
        answer: 1,
        wrongHints: [
          "Hoge VRAAG = duurder, niet goedkoper.",
          null,
          "China KOOPT dollars (vraag) — geen aanbod.",
          "China KOOPT dollars (vraag) — geen aanbod.",
        ],
        explanation: "Wet van vraag en aanbod werkt ook voor valuta. Veel vraag naar dollars (China koopt) → koers dollar stijgt. Net zoals bij elke andere markt: hoge vraag + onveranderd aanbod = hogere prijs.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 30",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
      },
    ],
  },
];

const examenEconomie2023T2 = {
  id: "examen-economie-2023-t2",
  title: "Examen oefenen — Economie 2023 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2023-T2",
  intro:
    "7 echte examenvragen uit VMBO-GL/TL economie 2023 tijdvak 2. Per vraag de echte antwoorden, didactische denkprikkels, inhoudelijke uitleg, doorklik naar Pincode-leerpad. Vragen die grafiek/cirkel/schema vereisen (V7, V9, V18, V34, V39, V42) zijn weggelaten.",
  triggerKeywords: [
    "examen 2023 tijdvak 2", "examen oefenen", "echte examenvragen",
    "afvalstoffenheffing", "woz eigenwoningforfait", "vermogensrendementsheffing",
    "koopkracht prijscompensatie", "ecb rente", "invoerrechten chinees staal",
    "china dollars wisselkoers",
  ],
  chapters,
  steps,
};

export default examenEconomie2023T2;
