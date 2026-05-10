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
        q: "De gemeente Zonhoven wil het gebruik van zonne-energie stimuleren en verleent subsidies op de aanschaf van zonnepanelen door huishoudens. Hoe worden deze subsidies die de huishoudens van de gemeente ontvangen genoemd?",
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
        q: "Wie betaalde de importheffing eerst en aan wie werd de importheffing uiteindelijk doorberekend?",
        options: [
          "De importheffing werd eerst betaald door de Nederlandse overheid, daarna werd de heffing doorberekend aan de Nederlandse consumenten.",
          "De importheffing werd eerst betaald door de Nederlandse overheid, daarna werd de heffing doorberekend aan de Belgische consumenten.",
          "De importheffing werd eerst betaald door de Belgische importeurs, daarna werd de heffing doorberekend aan de Nederlandse consumenten.",
          "De importheffing werd eerst betaald door de Belgische importeurs, daarna werd de heffing doorberekend aan de Belgische consumenten.",
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
    title: "Vraag 36 — sociale vs commerciële beïnvloeding",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 1, vraag 36. Doorklik voor de Pincode-uitleg in **Ondernemen** (stap 'Doelgroep en marketing').",
    emoji: "🎓",
    checks: [
      {
        q: "Volgers van influencers hebben het gevoel dat zij een intieme band hebben met de influencers die zij volgen, een soortgelijke band als met een vriend of familielid. De beïnvloeding van influencers noemen we sociale beïnvloeding. Is er ook sprake van commerciële beïnvloeding?",
        options: [
          "Ja, het is beïnvloeding door consumenten met winstoogmerk.",
          "Ja, het is beïnvloeding door producenten met winstoogmerk.",
          "Nee, het is beïnvloeding door consumenten zonder winstoogmerk.",
          "Nee, het is beïnvloeding door producenten zonder winstoogmerk.",
        ],
        answer: 1,
        wrongHints: [
          "Wie betaalt de influencer — een consument of een bedrijf?",
          null,
          "Als bedrijven ervoor BETALEN, is er dan geen winstoogmerk?",
          "Waarom zou een bedrijf een influencer betalen als er niets te winnen viel?",
        ],
        explanation: "Sociale beïnvloeding = via een persoonlijke band (vriend, familie, idool). Commerciële beïnvloeding = met een verkoop-doel, betaald door een producent (bedrijf), met winstoogmerk. Influencers vallen onder ALLEBEI: volgers ervaren een sociale band, MAAR het bedrijf betaalt de influencer om te verkopen → producent + winstoogmerk = ook commerciële beïnvloeding.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag 36",
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
        // Pilot 2026-05-10: dynamisch uitlegpad — Mark wens (blauwdruk economie)
        uitlegPad: {
          // STAP 1 — Stap-voor-stap door de vraag
          stappen: [
            { titel: "Lees de vraag rustig", tekst: "De vraag begint met een voorbeeld over influencers. Lees eerst dat voorbeeld voor je naar de antwoord-opties kijkt." },
            { titel: "Wat WORDT al verteld?", tekst: "De vraag vertelt jou al dat de invloed van influencers SOCIALE beïnvloeding heet (omdat volgers een persoonlijke band ervaren). Dat hoef je niet zelf te bedenken." },
            { titel: "Wat MOET je beantwoorden?", tekst: "De vraag is: is er ÓÓK sprake van COMMERCIËLE beïnvloeding? Een ja/nee met de juiste reden eronder." },
            { titel: "Welke 4 opties zijn er?", tekst: "Elke optie heeft 2 keuzes: (1) ja of nee, en (2) wie beïnvloedt en met of zonder winstoogmerk. Kies eerst ja/nee, dan wordt het kiezen makkelijker." },
            { titel: "Denk aan: wie betaalt de influencer?", tekst: "Een influencer krijgt geld van bedrijven om producten aan te prijzen. Bedrijven (producenten) willen meer verkopen → dat is winst maken → dus winstoogmerk." },
          ],
          // STAP 2 — Moeilijke woorden
          woorden: [
            { woord: "intieme band", uitleg: "Een gevoel van persoonlijke nabijheid, zoals met een vriend." },
            { woord: "sociale beïnvloeding", uitleg: "Iemand beïnvloedt jouw mening via een persoonlijke band: een vriend, familielid of idool dat je vertrouwt. Geen verkoop-doel." },
            { woord: "commerciële beïnvloeding", uitleg: "Iemand probeert je iets te laten KOPEN. Een bedrijf (producent) betaalt voor reclame, en wil daarmee winst maken. = met winstoogmerk." },
            { woord: "winstoogmerk", uitleg: "Het doel om er GELD aan te verdienen. Een bakker bakt brood met winstoogmerk; je moeder bakt voor jou ZONDER winstoogmerk." },
            { woord: "producent", uitleg: "Een bedrijf of persoon die iets MAAKT om te verkopen. Bv. Coca-Cola, Nike, een boer." },
            { woord: "consument", uitleg: "Iemand die iets KOOPT en gebruikt. Jij bent consument als je een blikje cola koopt." },
          ],
          // STAP 3 — Theorie achter de vraag
          theorie: "**Twee soorten beïnvloeding in economie:**\n\n• **Sociale beïnvloeding** = invloed via een persoonlijke band. Geen winstoogmerk. Voorbeeld: je vriend zegt 'kijk deze film'.\n\n• **Commerciële beïnvloeding** = invloed met een verkoop-doel. Wel winstoogmerk. Voorbeeld: een TV-spotje voor cola.\n\n**Bij influencers gebeuren ze ALLEBEI tegelijk:**\n• Volgers VOELEN een sociale band ('zij is mijn online-vriendin')\n• MAAR: het bedrijf BETAALT de influencer om producten aan te prijzen → dat is commercieel\n\nDus: het kan ÓÓK commerciële beïnvloeding zijn, terwijl het tegelijk sociale beïnvloeding is.",
          // STAP 4 — Eenvoudige voorbeelden
          voorbeelden: [
            { type: "sociaal", tekst: "Je zus zegt: 'Dit boek is super!' → sociale beïnvloeding (geen geld erbij betrokken)." },
            { type: "commercieel", tekst: "Een radio-reclame zegt: 'Koop nu Pepsi!' → commerciële beïnvloeding (Pepsi betaalt om jou te overtuigen)." },
            { type: "beide", tekst: "Een influencer drinkt op video een blikje energy drink — gesponsord. Volgers denken: 'mijn favoriete YouTuber drinkt het' (sociaal). Maar de YouTuber krijgt €5.000 van het merk (commercieel)." },
          ],
          // STAP 5 — Basiskennis (wat moet je al weten?)
          basiskennis: [
            { onderwerp: "Wie is wie in de markt?", uitleg: "Producent maakt + verkoopt. Consument koopt + gebruikt. De influencer hoort hier bij de PRODUCENT-kant — hij/zij helpt het bedrijf verkopen." },
            { onderwerp: "Wat betekent 'met winstoogmerk'?", uitleg: "Met de bedoeling er geld mee te verdienen. Een bedrijf werkt ALTIJD met winstoogmerk. Vrienden/familie helpen je meestal ZONDER winstoogmerk." },
          ],
          // STAP 6 — 3 niveaus van uitleg
          niveaus: {
            basis: "Influencers worden BETAALD door bedrijven (producenten) om producten aan te prijzen. Bedrijven willen meer verkopen = winst. Dus: het IS ook commerciële beïnvloeding (door producenten, met winstoogmerk) → antwoord B.",
            simpeler: "Stel: een YouTuber maakt een video over een blikje energy drink. Volgers vertrouwen die YouTuber (= sociaal). MAAR het merk heeft de YouTuber betaald om dat blikje te tonen (= commercieel). Allebei tegelijk! De YouTuber werkt voor het merk = doet PRODUCENT-werk. Het merk verdient eraan = WINSTOOGMERK. Antwoord B: 'Ja, beïnvloeding door producenten met winstoogmerk'.",
            nogSimpeler: "Heel kort: bedrijf betaalt influencer → influencer = werkt voor bedrijf = producent-kant. Bedrijf wil verkoop = winst. Dus: JA + producenten + winstoogmerk = optie B.",
          },
        },
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
        q: "Kaj vervolgt: \"Bovendien blijft de vraag naar onze producten stijgen, dus het is wijs om de verkoopprijs na productie-uitbreiding gelijk te houden.\" Welk gevolg voor de winstmarge van K2 bv heeft het gelijk houden van de verkoopprijs na de productie-uitbreiding?",
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
