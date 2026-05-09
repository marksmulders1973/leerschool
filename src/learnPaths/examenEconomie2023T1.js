// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2023 tijdvak 1
// 2026-05-10: vierde pilot-examen — 5 vragen geverifieerd tegen origineel.
// Bron: examenblad.nl, examen 0233 GT 2023-1 (-o/-b/-c).

const chapters = [
  { letter: "A", title: "Inkomen", emoji: "💰", from: 0, to: 0 },
  { letter: "B", title: "Internationale handel", emoji: "🌍", from: 1, to: 1 },
  { letter: "C", title: "Marketing & marktvormen", emoji: "🏪", from: 2, to: 4 },
];

const steps = [
  // ─── Vraag 4 — Subsidie zonne-energie ────────────────────
  {
    title: "Vraag 4 — soorten inkomen (subsidie)",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 1, vraag 4. Doorklik voor de Pincode-uitleg in **Inkomen en welvaart** (stap 'Soorten inkomen').",
    emoji: "🎓",
    checks: [
      {
        q: "De gemeente Zonhoven wil het gebruik van zonne-energie stimuleren en verleent subsidies op de aanschaf van zonnepanelen. Tot welk type inkomen behoort de subsidie voor de gemeente-inwoners?",
        options: [
          "inkomen uit arbeid",
          "inkomen uit bezit",
          "inkomen uit overdrachten",
          "inkomen uit vermogen",
        ],
        answer: 2,
        wrongHints: [
          "Inkomen uit arbeid = loon voor werk. Voor een subsidie hoef je niet te werken.",
          "Inkomen uit bezit = huur/pacht/winst uit eigendom. Subsidie is geen bezit.",
          null,
          "Inkomen uit vermogen = rente, dividend. Subsidie is geen kapitaal-rendement.",
        ],
        explanation: "Een subsidie van de gemeente is een **overdracht** van overheid naar burger zonder dat de burger er een productiefactor (arbeid, kapitaal, natuur, ondernemerschap) tegenover hoeft te stellen. Daarom heet het overdrachtsinkomen — net als kinderbijslag, AOW, of zorgtoeslag.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag 4",
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
      },
    ],
  },
  // ─── Vraag 13 — Importheffing boter ──────────────────────
  {
    title: "Vraag 13 — wie betaalt de importheffing?",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 1, vraag 13. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland** (stap 'Beschermingsmaatregelen').",
    emoji: "🎓",
    checks: [
      {
        q: "België hief in de jaren '50 een importheffing op Nederlandse boter. Wie betaalde de importheffing eerst en aan wie werd de importheffing uiteindelijk doorberekend?",
        options: [
          "De importheffing werd eerst betaald door de Nederlandse overheid, daarna doorberekend aan de Nederlandse consumenten.",
          "De importheffing werd eerst betaald door de Nederlandse overheid, daarna doorberekend aan de Belgische consumenten.",
          "De importheffing werd eerst betaald door de Belgische importeurs, daarna doorberekend aan de Nederlandse consumenten.",
          "De importheffing werd eerst betaald door de Belgische importeurs, daarna doorberekend aan de Belgische consumenten.",
        ],
        answer: 3,
        wrongHints: [
          "Niet de NL-overheid — die heft niets als de import naar BE gaat. De BE-overheid heft, en de BE-importeur betaalt.",
          "Niet de NL-overheid — de heffing is van BE. Importeur in BE betaalt.",
          "Belgische importeur betaalt eerst, klopt — maar uiteindelijk komt het bij de BE-eindkoper terecht (BE-consument koopt het immers in BE).",
          null,
        ],
        explanation: "Importheffing geheven door BE → wordt betaald door BE-importeur (die haalt boter uit NL). Die importeur rekent de heffing door in zijn verkoopprijs aan de uiteindelijke BE-consument. Dus: Belgische importeur betaalt eerst, BE-consument betaalt indirect via hogere boterprijs. De Nederlandse overheid heeft hier niets mee te maken.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag 13",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
      },
    ],
  },
  // ─── Vraag 36 — Influencer-beïnvloeding ─────────────────
  {
    title: "Vraag 36 — influencers en beïnvloeding",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 1, vraag 36. Doorklik voor de Pincode-uitleg in **Ondernemen** (stap 'Doelgroep en marketing').",
    emoji: "🎓",
    checks: [
      {
        q: "Volgers van influencers hebben het gevoel dat zij een intieme band hebben met de influencers die zij volgen, een soort vriendschap. Influencers worden door bedrijven betaald om producten aan te prijzen. Is dat een vorm van marketing-beïnvloeding?",
        options: [
          "Ja, het is beïnvloeding door consumenten met winstoogmerk.",
          "Ja, het is beïnvloeding door producenten met winstoogmerk.",
          "Nee, het is beïnvloeding door consumenten zonder winstoogmerk.",
          "Nee, het is beïnvloeding door producenten zonder winstoogmerk.",
        ],
        answer: 1,
        wrongHints: [
          "De influencer wordt betaald door een bedrijf — niet door consumenten.",
          null,
          "Wel beïnvloeding — anders zou het bedrijf niet betalen.",
          "Wel winstoogmerk — bedrijf wil meer verkopen, influencer verdient eraan.",
        ],
        explanation: "De influencer is hier eigenlijk een verlengstuk van de PRODUCENT (het bedrijf dat het product wil verkopen). Bedrijf betaalt → influencer prijst aan → volgers kopen. Het winstoogmerk zit zowel bij het bedrijf (méér verkoop) als bij de influencer (betaling). Dat is per definitie reclame met winstoogmerk door producenten.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag 36",
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
      },
    ],
  },
  // ─── Vraag 38 — K2 bv marktvorm ──────────────────────────
  {
    title: "Vraag 38 — heterogene producten + veel concurrenten",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 1, vraag 38. Doorklik voor de Pincode-uitleg in **Ondernemen** (stap 'Macht op de markt').",
    emoji: "🎓",
    checks: [
      {
        q: "K2 bv biedt heterogene producten aan en er zijn veel concurrenten op de markt. Van welke marktvorm is hier sprake?",
        options: [
          "monopolie",
          "monopolistische concurrentie",
          "oligopolie",
          "volkomen concurrentie",
        ],
        answer: 1,
        wrongHints: [
          "Monopolie = 1 aanbieder. Hier zijn er veel.",
          null,
          "Oligopolie = enkele grote spelers. Hier zijn er veel.",
          "Volkomen concurrentie = veel aanbieders + HOMOGeen product. Hier zijn de producten heterogeen (verschillend).",
        ],
        explanation: "**Monopolistische concurrentie** = veel aanbieders + HETEROGENE producten (verschillende merken, kwaliteiten, design). Bv. kledingmerken, kappers, restaurants. Elke aanbieder heeft een 'klein monopolie' op zijn unieke product, maar concurreert met vele anderen. Past precies bij K2 bv.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag 38",
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
      },
    ],
  },
  // ─── Vraag 42 — Winstmarge bij productie-uitbreiding ────
  {
    title: "Vraag 42 — winstmarge na productie-uitbreiding",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 1, vraag 42. Doorklik voor de Pincode-uitleg in **Ondernemen** (stap 'Omzet, kosten en winst').",
    emoji: "🎓",
    checks: [
      {
        q: "Kaj zegt: 'Bovendien blijft de vraag naar onze producten stijgen, dus het is wijs om de verkoopprijs na productie-uitbreiding gelijk te houden.' Welk gevolg voor de winstmarge van K2 bv heeft het gelijk houden van de verkoopprijs na de productie-uitbreiding?",
        options: [
          "De winstmarge daalt.",
          "De winstmarge stijgt.",
          "De winstmarge blijft gelijk.",
        ],
        answer: 1,
        wrongHints: [
          "Tegendeel — door schaalvoordelen daalt de kostprijs per stuk, niet de marge.",
          null,
          "Niet als de kostprijs daalt door schaalvoordelen.",
        ],
        explanation: "Bij productie-uitbreiding ontstaan vaak SCHAALVOORDELEN: vaste kosten verdeeld over meer producten = lagere kostprijs per stuk. Als de verkoopprijs gelijk blijft maar de kostprijs daalt, stijgt de winstmarge per product (verkoopprijs − kostprijs).",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag 42",
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
      },
    ],
  },
];

const examenEconomie2023T1 = {
  id: "examen-economie-2023-t1",
  title: "Examen oefenen — Economie 2023 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2023-T1",
  intro:
    "5 echte examenvragen uit VMBO-GL/TL economie 2023 tijdvak 1. Per vraag de echte antwoorden, didactische denkprikkels, inhoudelijke uitleg, doorklik naar Pincode-leerpad. V9 + V30 (vereist tabel/grafiek) en V31 + V35 (volgorde-vragen) zijn weggelaten.",
  triggerKeywords: [
    "examen 2023", "examen oefenen", "echte examenvragen", "eindexamen oefenen 2023",
    "subsidie zonne-energie", "importheffing belgië boter", "influencer beïnvloeding",
    "k2 bv heterogeen", "winstmarge schaalvoordeel",
  ],
  chapters,
  steps,
};

export default examenEconomie2023T1;
