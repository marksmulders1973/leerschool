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
        uitlegPad: {
          stappen: [
            { titel: "EU ≠ EMU", tekst: "Niet elk EU-land heeft de euro. EU-lidmaatschap betekent vrij verkeer; EMU = eurozone (gemeenschappelijke munt)." },
            { titel: "Welke landen hebben euro?", tekst: "20 van de 27 EU-landen, o.a. NL, BE, DE, FR, ES, IT, AT, IE, PT, GR." },
            { titel: "Welke EU-landen hebben GEEN euro?", tekst: "Denemarken, Zweden, Polen, Tsjechië, Hongarije, Roemenië, Bulgarije. Zweden hoort daarbij — gebruikt de kroon." },
            { titel: "Wettig betaalmiddel", tekst: "Een land heeft maar 1 wettig betaalmiddel. In Zweden = de kroon. Niet samen met de euro." },
          ],
          woorden: [
            { woord: "EU", uitleg: "Europese Unie — politieke + economische samenwerking van 27 landen. Vrij verkeer van personen, goederen, diensten, kapitaal." },
            { woord: "EMU", uitleg: "Economische en Monetaire Unie — de groep EU-landen die de euro gebruiken (20 in 2024)." },
            { woord: "wettig betaalmiddel", uitleg: "Geld dat verkopers verplicht moeten accepteren als betaling. Per land 1 valuta." },
            { woord: "Zweedse kroon", uitleg: "Munteenheid van Zweden, afkorting SEK. ~€0,09 per kroon (2024)." },
          ],
          theorie: "**EU vs EMU:**\n\n• **EU** = politiek-economische unie, 27 landen\n• **EMU** = monetair pact, 20 landen met euro\n\n**Voorwaarden om bij EMU te horen:**\n• Lage inflatie (~max 1,5% boven EU-gemiddelde)\n• Begrotingstekort < 3% BBP\n• Staatsschuld < 60% BBP\n• Stabiele wisselkoers tegen euro (2 jr lid van ERM-II)\n\nZweden voldoet aan de criteria maar koos er BEWUST voor om de kroon te houden (referendum 2003).",
          voorbeelden: [
            { type: "EU-lid + euro", tekst: "Italië = EU + EMU → betaalt met euro." },
            { type: "EU-lid, géén euro", tekst: "Zweden, Denemarken, Polen = EU maar eigen valuta." },
            { type: "Géén EU", tekst: "Verenigd Koninkrijk (sinds Brexit), Zwitserland, Noorwegen — geen EU, geen euro." },
          ],
          basiskennis: [
            { onderwerp: "Wat is een wisselkoers?", uitleg: "De waarde van vreemde valuta in eigen geld. Bv. €1 = 11 SEK = ~$1,08 (2024)." },
          ],
          niveaus: {
            basis: "Zweden is EU maar geen EMU → eigen munt = kroon → antwoord C.",
            simpeler: "Niet elk EU-land heeft de euro. Zweden was er bij vanaf 1995 (EU) maar wilde de eigen kroon houden. Een land heeft 1 wettig betaalmiddel — Zweden = kroon, geen euro.",
            nogSimpeler: "Zweden = EU + kroon, geen euro. Antwoord C.",
          },
        },
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
        uitlegPad: {
          stappen: [
            { titel: "Hoeveel publieke omroepen zijn er?", tekst: "Een paar grote: AVROTROS, BNNVARA, KRO-NCRV, EO, MAX, NTR, NPO. Niet 1, niet duizenden — een handvol." },
            { titel: "Wat is hun product?", tekst: "Programma's. Verschillen per omroep (heterogeen): KRO-NCRV religieus-cultureel, BNNVARA jongeren-progressief, MAX 50+." },
            { titel: "Welke marktvorm past?", tekst: "Een PAAR grote spelers met VERSCHILLEND product = OLIGOPOLIE." },
          ],
          woorden: [
            { woord: "monopolie", uitleg: "1 aanbieder beheerst de markt (bv. ProRail voor spoor)." },
            { woord: "oligopolie", uitleg: "Een paar grote aanbieders (bv. supermarkten AH/Jumbo/Lidl/Aldi/Plus, telecomproviders)." },
            { woord: "monopolistische concurrentie", uitleg: "VEEL aanbieders met heterogeen product (bv. kappers, restaurants)." },
            { woord: "volkomen concurrentie", uitleg: "Veel aanbieders met homogeen product (bv. tarwemarkt, ruwe olie)." },
          ],
          theorie: "**Marktvorm bepaal je in 2 stappen:**\n\n1. Hoeveel aanbieders? 1 / paar / veel\n2. Product hetzelfde of verschillend? homogeen / heterogeen\n\n| Aanbieders | Homogeen | Heterogeen |\n|---|---|---|\n| 1 | – | monopolie |\n| Paar | – | oligopolie |\n| Veel | volkomen concurrentie | monopolistische concurrentie |\n\nPublieke omroepen: paar + heterogeen → oligopolie.",
          voorbeelden: [
            { type: "oligopolie", tekst: "Telecomproviders NL: KPN, Vodafone, T-Mobile/Odido — 3-4 grote spelers." },
            { type: "oligopolie", tekst: "Supermarktketens: AH, Jumbo, Lidl, Aldi, Plus — 5 grote spelers." },
            { type: "oligopolie", tekst: "Publieke omroepen: ~10 omroepen. Paar grote + verschillend in karakter." },
          ],
          basiskennis: [
            { onderwerp: "Differentiatie", uitleg: "Aanbieders maken hun product net IETS anders om zich te onderscheiden — sfeer, doelgroep, prijs, kwaliteit." },
          ],
          niveaus: {
            basis: "Paar omroepen + verschillend = oligopolie. Antwoord C.",
            simpeler: "Stel je voor: 10 supermarktketens in NL — niet 1 (monopolie), niet 1000 (volkomen concurrentie). Een PAAR. Elke ketens heeft eigen sfeer (Lidl = goedkoop, AH = midden, Jumbo = vriendelijk). Hetzelfde geldt voor publieke omroepen — paar spelers, elk met eigen karakter = oligopolie.",
            nogSimpeler: "Paar spelers + verschillend = oligopolie = C.",
          },
        },
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
        uitlegPad: {
          stappen: [
            { titel: "Wat is koopkracht?", tekst: "Hoeveel je MET je geld kan KOPEN. Niet de euro's zelf, maar wat ze waard zijn aan boodschappen." },
            { titel: "Welke 4 inkomens-begrippen zijn er?", tekst: "Bruto (vóór belasting), netto (na belasting), nominaal (in euro's), reëel (in koopkracht)." },
            { titel: "Welke past bij koopkracht?", tekst: "Reëel inkomen — gecorrigeerd voor inflatie. Vertelt je wat je geld ECHT waard is qua boodschappen." },
          ],
          woorden: [
            { woord: "bruto-inkomen", uitleg: "Wat je verdient VÓÓR belastingen + premies. Op je loonstrookje boven." },
            { woord: "netto-inkomen", uitleg: "Wat je OVERHOUDT na belastingen — wat op je rekening komt." },
            { woord: "nominaal inkomen", uitleg: "Inkomen in EURO'S, zonder rekening te houden met inflatie." },
            { woord: "reëel inkomen", uitleg: "Nominaal inkomen GECORRIGEERD voor inflatie. Vertelt wat je echt kunt kopen — = koopkracht." },
            { woord: "Prinsjesdag", uitleg: "3e dinsdag september. Regering presenteert begroting + koopkrachtplaatjes voor komend jaar." },
          ],
          theorie: "**Inkomensbegrippen:**\n\n• Bruto → netto: belastingafdracht\n• Nominaal → reëel: inflatiecorrectie\n\nKoopkracht = REËEL inkomen omdat het gaat om wat je inkomen WAARD is.\n\n**Voorbeeld:**\n• Loon stijgt van €30.000 → €31.500 (+5% nominaal)\n• Inflatie was 7%\n• Reëel: koopkracht daalt ~2% — je hebt méér euro's maar minder spullen.",
          voorbeelden: [
            { type: "inflatie hoog", tekst: "2022: lonen +3,5%, inflatie ~10% → reële koopkracht −6,5%. Iedereen voelde zich armer ondanks loonstijging." },
            { type: "inflatie laag", tekst: "2018: lonen +2%, inflatie 1,7% → reële koopkracht +0,3%. Klein winstje." },
          ],
          basiskennis: [
            { onderwerp: "Inflatie", uitleg: "Gemiddelde stijging van prijzen per jaar. Bij hoge inflatie wordt geld minder waard." },
          ],
          niveaus: {
            basis: "Koopkracht = reëel inkomen = inkomen na inflatie-correctie. Antwoord D.",
            simpeler: "Op Prinsjesdag wil iedereen weten: 'kan ik volgend jaar nog evenveel boodschappen doen?'. Dat hangt af van loon ÉN prijzen. Het inkomen 'na prijsstijging' = reëel inkomen = koopkracht.",
            nogSimpeler: "Koopkracht = reëel inkomen = D.",
          },
        },
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
        q: "Wat kan een reden zijn dat de staatsschuld van Itali' blijft stijgen?",
        options: [
          "De inkomsten van de Italiaanse overheid zijn groter dan de uitgaven van de overheid.",
          "De inkomsten van de Italiaanse overheid zijn kleiner dan de uitgaven van de overheid.",
          "De inkomsten van de Italiaanse overheid zijn gestegen en de uitgaven gelijk gebleven.",
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
        uitlegPad: {
          stappen: [
            { titel: "Wat is staatsschuld?", tekst: "Het totaal aan geld dat de overheid GELEEND heeft en nog moet terugbetalen." },
            { titel: "Wanneer GROEIT de staatsschuld?", tekst: "Als de overheid in een jaar MEER uitgeeft dan ze binnenkrijgt (begrotingstekort). Het tekort wordt geleend → schuld stijgt." },
            { titel: "Loop opties langs", tekst: "Inkomsten > uitgaven = overschot = schuld DAALT ✗. Inkomsten < uitgaven = tekort = schuld STIJGT ✓. Inkomsten gestegen + uitgaven gelijk = overschot = schuld DAALT ✗." },
          ],
          woorden: [
            { woord: "staatsschuld", uitleg: "Totaal geleend door de overheid. NL ~€500 mld in 2024 (~50% BBP). Italië ~€2.700 mld (~140% BBP)." },
            { woord: "begrotingstekort", uitleg: "Wanneer overheidsuitgaven > -inkomsten in een jaar. Tekort wordt bijgeleend = staatsschuld stijgt." },
            { woord: "begrotingsoverschot", uitleg: "Wanneer inkomsten > uitgaven. Met overschot kan overheid schulden aflossen." },
            { woord: "EMU-norm", uitleg: "Eurozone-regel: tekort < 3% BBP, schuld < 60% BBP. Veel landen voldoen niet (Italië, Frankrijk, België)." },
          ],
          theorie: "**Schuld-dynamiek:**\n\nElk jaar: schuld_nieuw = schuld_oud + tekort_dit_jaar\n\n• Tekort > 0 (uitgaven > inkomsten) → schuld GROEIT\n• Overschot > 0 (inkomsten > uitgaven) → schuld DAALT\n• Tekort = 0 → schuld blijft gelijk\n\n**Italië-context:** al decennia tekort, dus schuld blijft groeien. Hoge schuld → veel rente betalen → minder ruimte voor uitgaven → vicieuze cirkel.",
          voorbeelden: [
            { type: "tekort", tekst: "Italië 2023: inkomsten €890 mld, uitgaven €1.020 mld → tekort €130 mld → schuld stijgt met €130 mld." },
            { type: "overschot", tekst: "NL 2018: inkomsten > uitgaven → klein overschot → staatsschuld in % BBP daalde." },
          ],
          basiskennis: [
            { onderwerp: "Hoe leent een land?", uitleg: "Door staatsobligaties uit te geven. Beleggers (banken, pensioenfondsen) lenen geld aan de overheid en krijgen rente." },
          ],
          niveaus: {
            basis: "Uitgaven > inkomsten → tekort → bijlenen → schuld stijgt. Antwoord B.",
            simpeler: "Stel je voor: jij geeft elke maand €1.500 uit maar verdient maar €1.300. Tekort €200/maand → moet bijlenen → schuld groeit. Hetzelfde met Italië: meer uitgaven dan belastinginkomsten = bijlenen = schuld stijgt.",
            nogSimpeler: "Meer uitgeven dan binnenhalen = lenen = schuld stijgt = B.",
          },
        },
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
        q: "Studenten blijken hun uitgaven te onderschatten. Het Nibud schrijft: \"Dat is niet vreemd, want niet alle uitgaven, zoals reparatie van de fiets, komen maandelijks terug. Kleinere uitgaven, zoals het kopen van lunch of koffie, worden meestal ook onderschat.\" Welke uitgaven worden volgens het Nibud meestal onderschat?",
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
        uitlegPad: {
          stappen: [
            { titel: "Welke 3 soorten uitgaven onderscheiden we?", tekst: "(1) Vaste lasten = elke maand hetzelfde (huur, abo's). (2) Dagelijkse huishoudelijke = wisselend per dag (boodschappen). (3) Incidenteel = onverwacht (fiets kapot, dokter)." },
            { titel: "Wat zegt het Nibud-citaat?", tekst: "'Reparatie van de fiets' = INCIDENTEEL. 'Lunch en koffie' = DAGELIJKS HUISHOUDELIJK." },
            { titel: "Loop opties langs", tekst: "Vaste lasten worden NIET genoemd in het citaat. Dus opties C en D vallen af. Optie B: incidenteel + dagelijks huishoudelijk = past." },
          ],
          woorden: [
            { woord: "vaste lasten", uitleg: "Uitgaven die elke maand HETZELFDE bedrag zijn: huur, zorgverzekering, abonnementen. Bekend, dus zelden vergeten." },
            { woord: "dagelijkse huishoudelijke uitgaven", uitleg: "Wat je dag-in-dag-uit nodig hebt: boodschappen, koffie, lunch, vervoer. Wisselt per dag/week." },
            { woord: "incidentele uitgaven", uitleg: "Onverwachte of zelden voorkomende kosten: fietsreparatie, kapotte telefoon, tandartsbezoek." },
            { woord: "begroting", uitleg: "Vooruit-plan van inkomsten + uitgaven om te zien of je rondkomt." },
          ],
          theorie: "**Drie uitgaven-categorieën:**\n\n| Type | Voorbeeld | Voorspelbaarheid |\n|---|---|---|\n| Vaste lasten | huur €500, abo €15 | hoog (elke maand) |\n| Dagelijks huishoudelijk | boodschappen, koffie, lunch | midden (wisselend) |\n| Incidenteel | fiets kapot, ziek | LAAG (onverwacht) |\n\nVaste lasten zie je terugkomen op je rekening — vergeet je niet. Dagelijks + incidenteel zijn moeilijker te schatten = vaak ONDERSCHAT.",
          voorbeelden: [
            { type: "incidenteel", tekst: "Fiets kapot? €60 reparatie. Niet elke maand, maar wel een paar keer per jaar. Vergeet je in begroting." },
            { type: "dagelijks", tekst: "Lunch op school €4 × 5 dagen × 4 weken = €80/maand. Voelt klein per keer, telt op." },
          ],
          basiskennis: [
            { onderwerp: "Waarom begroten?", uitleg: "Om vooraf te zien of je inkomsten genoeg zijn. Onderschatte uitgaven = aan einde maand niets meer over of zelfs lenen." },
          ],
          niveaus: {
            basis: "Citaat noemt fiets-reparatie (incidenteel) + lunch/koffie (dagelijks huishoudelijk). Antwoord B.",
            simpeler: "Het Nibud zegt: studenten onderschatten 2 dingen: (a) onverwachte kosten (fiets stuk) en (b) kleine dagelijkse kosten (broodje, koffie). Vaste lasten zoals huur zien ze WEL — die staan elke maand in de bank.",
            nogSimpeler: "Citaat = incidenteel + dagelijks = B.",
          },
        },
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
        uitlegPad: {
          stappen: [
            { titel: "Welke 2 hoofdsoorten werkloosheid zijn er?", tekst: "(1) Conjuncturele = door ECONOMISCHE situatie (recessie, mindere vraag). Tijdelijk. (2) Structurele = door langdurige veranderingen (techniek, verplaatsing, ander beroep gevraagd)." },
            { titel: "Verdwijnen bedrijven = welk type?", tekst: "Bedrijven gaan WEG (verplaatsen). Dat is een blijvend, structureel verlies van werkgelegenheid → STRUCTURELE werkloosheid." },
            { titel: "Vraag of aanbod?", tekst: "Op de arbeidsmarkt: werknemers BIEDEN arbeid aan, werkgevers VRAGEN arbeid. Bedrijven verdwijnen = minder vraag naar arbeid? Of minder aanbod van banen? In NL-context: het 'aanbod' van banen daalt = aanbodkant." },
          ],
          woorden: [
            { woord: "conjuncturele werkloosheid", uitleg: "Werkloosheid door tijdelijke economische dip (recessie). Verdwijnt als economie weer aantrekt." },
            { woord: "structurele werkloosheid", uitleg: "Werkloosheid door BLIJVENDE veranderingen: automatisering, verhuizing van bedrijven, andere skills nodig." },
            { woord: "frictiewerkloosheid", uitleg: "Korte werkloosheid tussen 2 banen (zoeken, sollicitatie)." },
            { woord: "verplaatsing van bedrijven", uitleg: "Bedrijf gaat naar buitenland (lagere lonen, minder regels) — werk verdwijnt uit NL." },
          ],
          theorie: "**Werkloosheid-types:**\n\n| Type | Oorzaak | Voorbeeld |\n|---|---|---|\n| Conjunctureel | recessie / economische dip | tijdens corona-lockdowns |\n| Structureel | tech-verandering, verplaatsing | textielfabrieken naar Bangladesh |\n| Frictie | tussen 2 banen | net afgestudeerd, zoekt baan |\n\n**Aanbod vs vraag op arbeidsmarkt:**\n• Werknemers BIEDEN arbeid aan (= arbeidsaanbod)\n• Werkgevers VRAGEN arbeid (= arbeidsvraag)\n\nBedrijf verdwijnt → minder werkgevers → minder vraag naar arbeid? Of minder banen aangeboden? Het examen-correctievoorschrift kiest 'aanbodkant' = de aanbodzijde van de productie (er wordt minder geproduceerd in NL).",
          voorbeelden: [
            { type: "structureel", tekst: "Philips verplaatste in 2010 fabrieken naar Polen → 1.000 banen weg in NL → die werknemers vinden niet zomaar nieuw werk = structureel." },
            { type: "conjunctureel", tekst: "2008 financiële crisis → bedrijven minder orders → tijdelijk minder personeel nodig. Bij herstel: weer aanwerven." },
          ],
          basiskennis: [
            { onderwerp: "Waarom verplaatsen bedrijven?", uitleg: "Lagere lonen, minder regelgeving, dichter bij grondstoffen of klanten. Vaak naar Azië of Oost-Europa." },
          ],
          niveaus: {
            basis: "Bedrijven WEG = blijvend = structureel. Aanbodkant van productie. Antwoord C.",
            simpeler: "Verschil: conjunctureel = tijdelijk (slechte economie, komt weer goed). Structureel = blijvend (bedrijf is WEG, komt niet terug). Een bedrijf dat naar buitenland verhuist = blijvend = structureel.",
            nogSimpeler: "Bedrijf verdwijnt = structureel + aanbod = C.",
          },
        },
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
