// Leerpad: Beroepen + werk - groep 6-8 wereldoriëntatie/burgerschap.
// Cito-relevant. 1F. 5 stappen.

const stepEmojis = ["👷", "🏥", "💻", "📊", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een beroep?", emoji: "👷", from: 0, to: 0 },
  { letter: "B", title: "Sectoren in NL", emoji: "🏥", from: 1, to: 1 },
  { letter: "C", title: "Beroepen + opleiding", emoji: "💻", from: 2, to: 2 },
  { letter: "D", title: "Salaris + werkrechten", emoji: "📊", from: 3, to: 3 },
  { letter: "E", title: "Eind-toets", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een beroep?",
    explanation:
      "**Beroep** = wat je voor werk doet *(om geld te verdienen)*.\nOok wel **vak**, **functie**, **professie**, **baan**.\n\n**Verschil**:\n• **Werk / baan** = wat je nu doet voor geld.\n• **Beroep** = wat je geleerd hebt om te doen *(bv. opgeleid als loodgieter)*.\n• **Carrière** = de loop van je werkleven, alle banen samen.\n\n**Waarom werken mensen?**\n• **Geld verdienen** *(voor eten, huis, kleding, leuke dingen)*.\n• **Plezier** / **zinvolheid** *(iets bijdragen)*.\n• **Sociale contacten** *(collega's)*.\n• **Persoonlijke ontwikkeling** *(leren)*.\n• **Status** in maatschappij.\n\n**Soorten werk**:\n\n**1. Werknemer (in loondienst)**:\n• Werkt voor bedrijf of organisatie.\n• Krijgt **salaris** maandelijks.\n• Vaste werktijden + vakantie.\n• Bedrijf betaalt belasting + premies.\n\n**2. Zelfstandige / ondernemer (ZZP'er)**:\n• Werkt voor zichzelf.\n• Zoekt eigen klanten.\n• Stuurt factuur.\n• Regelt zelf belasting + verzekeringen.\n• Risico maar ook vrijheid.\n\n**3. Eigenaar van bedrijf**:\n• Heeft personeel in dienst.\n• Verantwoordelijk voor bedrijf.\n\n**4. Vrijwilliger**:\n• Werkt **zonder betaling**.\n• Vaak bij goede doelen, sport, verzorgingshuizen.\n• Voor plezier of overtuiging.\n\n**5. Stagiair / leerling**:\n• Leert + werkt tegelijk.\n• Krijgt soms vergoeding *(stagevergoeding)*.\n\n**Werkende mensen in NL**:\n• ~9 miljoen mensen werken *(2024)*.\n• Daarvan: ~1,5 miljoen ZZP'ers *(zelfstandigen)*.\n• Werkende-leeftijd: 15-67 jaar.\n• **Pensioenleeftijd**: 67 jaar *(stijgt naar 68 in komende jaren)*.\n• **AOW** = staatspensioen voor 67-plussers.\n\n**Cito-feitje**:\nIn NL werken **vrouwen vaak parttime** *(deeltijd)* — gemiddeld 28 uur/week. Mannen vaker fulltime *(40 uur)*. NL heeft van EU-landen meeste parttime-werkers.",
    checks: [
      {
        q: "Wat is een **beroep**?",
        options: ["Wat je geleerd hebt te doen voor werk", "Geld", "School", "Hobby"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel maar specifiek dit.", "Niet primair.", "Geen werk."],
      },
      {
        q: "Wat is een **ZZP'er**?",
        options: ["Zelfstandige zonder personeel", "Werknemer", "Stagiair", "Eigenaar groot bedrijf"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Loondienst.", "Niet primair.", "Niet primair."],
      },
      {
        q: "Wat is een **vrijwilliger**?",
        options: ["Werkt zonder betaling", "Topsalaris", "Werkt 80 uur", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenovergesteld.", "Niet.", "Wel."],
      },
      {
        q: "Wat is **AOW**?",
        options: ["Staatspensioen vanaf 67", "Banengeld", "Loon", "Belasting"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel maar specifiek dit.", "Niet primair.", "Niet."],
      },
    ],
  },
  {
    title: "Sectoren in Nederland",
    explanation:
      "**Sectoren** = grote groepen banen.\nEconomen verdelen werk in **drie sectoren**.\n\n**Primaire sector** *(natuur)*:\n• Werk in **natuur**.\n• **Landbouw** *(boer)*: koeien, melk, granen.\n• **Tuinbouw** *(tuinder)*: groenten, bloemen, planten.\n• **Visserij** *(visser)*: vis vangen.\n• **Mijnbouw** *(mijnwerker)*: olie, gas, grondstoffen.\n• Bosbouw, jacht.\n\n**In NL**: ~2% van werkenden. Vroeger veel meer *(50% in 1900)*.\nMaar NL is **wereld-#2 landbouw-exporteur** *(na VS)* dankzij efficient + technologie.\n\n**Secundaire sector** *(industrie/maken)*:\n• Werk waar je iets **maakt** of **bewerkt**.\n• **Industrie** *(fabrieksarbeider)*: auto's, elektronica, voedsel.\n• **Bouw** *(timmerman, metselaar, loodgieter)*.\n• **Energie** *(centrale-medewerker)*.\n\n**In NL**: ~15%. Grootste industrie: voedingsmiddelen *(Unilever, Heineken)*, chemie *(Shell)*, elektrotechniek *(Philips, ASML)*.\n\n**Tertiaire sector** *(diensten)*:\n• Werk waar je iets **doet voor mensen**.\n• Geen tastbaar product.\n• **Winkel** *(verkoper, kassamedewerker)*.\n• **Horeca** *(kok, ober, kelner)*.\n• **Vervoer** *(buschauffeur, piloot, machinist)*.\n• **Bank/verzekering** *(bankmedewerker)*.\n• **Kapper, fitness-instructeur, taxi**.\n• **Toerisme** *(reisleider, hotel)*.\n\n**In NL**: ~50%. Grootste sector.\n\n**Quartaire sector** *(zorg, onderwijs, overheid)*:\n• **Onderwijs** *(leerkracht, docent)*.\n• **Zorg** *(verpleegkundige, arts, tandarts)*.\n• **Overheid** *(ambtenaar, politie, brandweer, leger)*.\n• **Cultuur** *(museummedewerker, kunstenaar)*.\n• **Onderzoek** *(wetenschapper)*.\n\n**In NL**: ~33%. Groeiende sector *(vergrijzing → meer zorg)*.\n\n**Top-5 grootste beroepen NL** *(2024)*:\n1. Verkoopmedewerker winkel.\n2. Verpleegkundige.\n3. Boekhouder/administratief medewerker.\n4. Leerkracht basis-onderwijs.\n5. Vrachtwagenchauffeur.\n\n**Beroepen-groei** *(toekomst)*:\n• IT *(software, data, cyber-security)*.\n• Zorg *(door vergrijzing)*.\n• Duurzaamheid / klimaat *(zonnepaneel-installateur, etc.)*.\n• AI-specialist.\n\n**Beroepen-krimp**:\n• Kassiers *(zelfscan)*.\n• Postbezorgers *(minder post)*.\n• Sommige fabrieks-banen *(robots)*.\n\n**Cito-feitje**:\nNL heeft een **tekort aan**: leraren *(basis- en middelbaar onderwijs)*, verpleegkundigen, technici, ICT'ers, bouwers. Voor deze beroepen is er **veel werk** + vaak hogere salarissen.",
    checks: [
      {
        q: "Wat is **primaire sector**?",
        options: ["Werk in natuur (landbouw, visserij, mijnbouw)", "Diensten", "Maken", "Zorg"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tertiair.", "Secundair.", "Quartair."],
      },
      {
        q: "Welke beroep is **secundaire sector**?",
        options: ["Timmerman (bouw)", "Verkoper winkel", "Leerkracht", "Boer"],
        answer: 0,
        wrongHints: [null, "Klopt — maakt iets.", "Tertiair.", "Quartair.", "Primair."],
      },
      {
        q: "**Grootste sector** in NL?",
        options: ["Tertiair (~50%)", "Primair (~2%)", "Secundair", "Quartair"],
        answer: 0,
        wrongHints: [null, "Klopt — diensten.", "Klein.", "Iets minder.", "Iets minder."],
      },
      {
        q: "Welke beroepen **groeien**?",
        options: ["IT + zorg + duurzaamheid", "Kassier", "Postbezorger", "Geen"],
        answer: 0,
        wrongHints: [null, "Klopt — toekomst.", "Krimpen.", "Krimpen.", "Wel."],
      },
    ],
  },
  {
    title: "Beroepen + opleiding",
    explanation:
      "**Voor de meeste beroepen heb je opleiding nodig.**\n\n**Onderwijssysteem NL**:\n\n**1. Basisschool** *(groep 1-8, 4-12 jaar)*.\n**2. Middelbare school** *(klas 1-6, 12-18 jaar)*:\n• **VMBO** *(4 jaar, vakopleidingsgericht)*: leidt naar mbo.\n• **HAVO** *(5 jaar)*: leidt naar hbo.\n• **VWO** *(6 jaar)*: leidt naar universiteit.\n\n**3. Vervolgonderwijs**:\n• **MBO** *(1-4 jaar)*: vakopleiding *(elektricien, kapper, monteur, ICT'er)*.\n• **HBO** *(4 jaar)*: hoger beroepsonderwijs *(leraar, verpleegkundige, ingenieur, journalist)*.\n• **WO** *(3+2 jaar)*: wetenschappelijk *(dokter, advocaat, architect, wetenschapper)*.\n\n**Niveaus mbo**:\n• Niveau 1: hulparbeider *(1 jr)*.\n• Niveau 2: vakman *(2 jr)*.\n• Niveau 3: vakman met meer verantwoordelijkheid *(2-3 jr)*.\n• Niveau 4: middenkaderfunctionaris *(3-4 jr)* — kan doorstromen naar hbo.\n\n**Voorbeelden van beroepen + opleiding**:\n\n**MBO-beroepen**:\n• Kapper *(mbo-2/3)*.\n• Auto-monteur *(mbo-3)*.\n• Loodgieter *(mbo-2/3)*.\n• Kok *(mbo-2/3)*.\n• Politieagent *(mbo-3/4)*.\n• Verzorgende *(mbo-3)*.\n• Elektricien *(mbo-2/3)*.\n• Hovenier *(mbo-2/3)*.\n\n**HBO-beroepen**:\n• Leerkracht basisschool *(pabo)*.\n• Docent VO *(hbo lerarenopleiding)*.\n• Verpleegkundige *(hbo-V)*.\n• Verloskundige *(hbo)*.\n• Maatschappelijk werker.\n• Ingenieur *(constructie, elektrotechniek)*.\n• Journalist.\n• Marketeer.\n• ICT-developer.\n\n**WO-beroepen**:\n• Arts *(geneeskunde, 6 jaar)*.\n• Tandarts *(tandheelkunde, 6 jaar)*.\n• Advocaat *(rechten, 4-5 jaar)*.\n• Architect *(bouwkunde + master)*.\n• Wetenschapper *(promotie + onderzoek)*.\n• Psychiater *(arts + psychologie)*.\n• Notaris *(rechten + master)*.\n\n**Beroepen zonder vaste opleiding**:\n• Ondernemer *(zelfstandige)*.\n• Verkoper *(meeste functies, mbo helpt)*.\n• Influencer *(YouTube, TikTok)*.\n• Schrijver *(talent)*.\n• Sporter *(talent + training)*.\n\n**Kiezen wat bij jou past**:\n• **Wat vind je leuk?** *(creatief, denkwerk, met mensen)*\n• **Wat kun je goed?** *(handig, sportief, taal)*\n• **Wat verdien je?** *(salaris-verschillen kunnen groot zijn)*\n• **Werktijden?** *(kantoor, ploegen, weekend)*\n• **Werkdruk?** *(stress vs rustig)*\n\n**Profielkeuze klas 3**:\n• **VMBO**: techniek / economie / zorg+welzijn / groen.\n• **HAVO/VWO**: N&T / N&G / E&M / C&M.\n\nProfielkeuze bepaalt richtingen vervolgopleiding.\n\n**Cito-feitje**:\n**Hoger opgeleid = hoger salaris** *(gemiddeld)*. Maar niet altijd! Een goede loodgieter verdient meer dan veel hbo'ers.",
    checks: [
      {
        q: "Wat is **MBO**?",
        options: ["Middelbaar beroepsonderwijs (vakopleiding)", "Hoog", "Wetenschappelijk", "Basis"],
        answer: 0,
        wrongHints: [null, "Klopt.", "HBO.", "WO.", "Primair."],
      },
      {
        q: "Welke opleiding voor **arts**?",
        options: ["WO geneeskunde (6 jaar)", "MBO", "HBO", "VMBO"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Verpleegkundige wel.", "Niet."],
      },
      {
        q: "Welke opleiding voor **loodgieter**?",
        options: ["MBO niveau 2/3", "WO", "Geen opleiding nodig", "Universiteit"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Onnodig hoog.", "Wel.", "Onnodig hoog."],
      },
      {
        q: "Wat is **pabo**?",
        options: ["HBO leerkracht basisschool", "WO", "MBO", "VMBO"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Salaris + werkrechten",
    explanation:
      "**Salaris** = geld dat je krijgt voor werk.\nOok wel **loon** of **inkomen**.\n\n**Hoe wordt salaris berekend?**\n• Per uur *(uurloon)*.\n• Per maand *(bruto-salaris)*.\n• Per jaar *(jaarsalaris)*.\n• Soms met **bonus** of **commissie**.\n\n**Bruto vs netto**:\n• **Bruto** = wat de baas betaalt voor jou.\n• **Belasting + premies** gaan eraf:\n  - Loonbelasting *(staat)*.\n  - Sociale premies *(WW, AOW, ZW)*.\n  - Pensioen.\n• **Netto** = wat overblijft op bankrekening.\n• Bij €3000 bruto blijft ~€2200 netto.\n\n**Minimumloon** *(2024)*:\n• Volwassene *(21+)*: ~€2100 bruto/maand fulltime.\n• Per uur: ~€14.\n• Jongeren: lager *(15 jaar: 30% van volwassen, 21 jaar: 100%)*.\n• **CAO** *(Collectieve ArbeidsOvereenkomst)*: vaak afspraken hoger dan minimum.\n\n**Gemiddeld bruto-salaris NL** *(2024)*:\n• Fulltime: ~€3000-3500/maand.\n• Verschillen enorm per beroep + opleiding.\n\n**Top-3 best betalende beroepen** *(2024)*:\n1. Specialist-arts *(€150.000+ /jaar)*.\n2. Piloot KLM *(€100.000+)*.\n3. Topmanager *(€100.000+)*.\n\n**Beroepen met lager salaris**:\n• Verkoopmedewerker.\n• Verpleegkundige *(stijgt, want tekort)*.\n• Schoonmaker.\n• Stagiair.\n\n**Wetten over werk**:\n\n**1. Arbeidstijden**:\n• Maximaal **8 uur per dag** *(gemiddeld)*.\n• Maximaal **40 uur per week**.\n• Onder 18 jr: korter *(school-dagen)*.\n\n**2. Pauzes**:\n• 30 min pauze na 5,5 uur werk.\n\n**3. Vakantiedagen**:\n• Minimaal **4× wekelijkse werkuren** *(20 dagen fulltime)*.\n• Bovenop: feestdagen.\n• Vakantiegeld: 8% van bruto-jaarloon.\n\n**4. Ontslag**:\n• Baas mag je niet zomaar ontslaan.\n• Reden nodig + procedure *(UWV of rechter)*.\n• **Opzegtermijn**: 1-4 maanden.\n• Soms **transitievergoeding** *(geld bij ontslag)*.\n\n**5. Bij ziekte**:\n• Maximaal 2 jaar **loondoorbetaling**.\n• Daarna eventueel WW of WIA *(uitkering)*.\n\n**6. Vakbond**:\n• Vereniging werknemers.\n• Onderhandelt CAO met werkgever.\n• Bekend: FNV, CNV.\n• Stakingen mogelijk bij conflict.\n\n**Pesten / discriminatie op werk**:\n• Verboden.\n• Klacht indienen bij baas → vertrouwenspersoon → UWV → rechter.\n• In zware gevallen: ontslag baas mogelijk.\n\n**Belasting**:\nNL heeft **progressieve belasting** — hoe meer je verdient, hoe hoger % belasting.\nLage inkomens: ~37%.\nHoge inkomens: tot ~49%.\n\nBelastinggeld gaat naar: zorg, onderwijs, wegen, defensie, AOW, uitkeringen, etc.\n\n**Cito-feitje**:\nIn NL ben je **wettelijk vanaf 13 jaar** toegestaan om wat licht werk te doen *(bv. krant bezorgen, helpen in tuin)*. Vanaf 16 mag je echt werken. Veel jongeren bouwen ervaring op met **vakantiebaantjes** *(supermarkt, restaurant)*.",
    checks: [
      {
        q: "Wat is **bruto**?",
        options: ["Salaris voor belasting", "Salaris na belasting", "Geen verschil", "Bonus"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Netto.", "Wel verschil.", "Niet."],
      },
      {
        q: "**Minimum-uurloon** NL 2024?",
        options: ["~€14/uur", "€5/uur", "€50/uur", "Geen wet"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Wel."],
      },
      {
        q: "Wat is een **CAO**?",
        options: ["Afspraken werkgever-werknemers (collectief)", "Belasting", "Salaris", "Werktijd"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet primair.", "Wel maar specifiek dit.", "Niet."],
      },
      {
        q: "Vanaf welke leeftijd **licht werken** in NL?",
        options: ["13 jaar (krant bezorgen)", "21 jaar", "8 jaar", "Mag niet"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te oud.", "Te jong.", "Wel."],
      },
    ],
  },
  {
    title: "Eind-toets — beroepen mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Welke sector is **landbouw**?", options: ["Primair", "Secundair", "Tertiair", "Quartair"], answer: 0, wrongHints: [null, "Klopt.", "Industrie.", "Dienst.", "Zorg/onderwijs."] },
      { q: "Welke is **HBO-beroep**?", options: ["Verpleegkundige", "Loodgieter", "Arts", "Kassier"], answer: 0, wrongHints: [null, "Klopt.", "MBO.", "WO.", "Geen opleiding nodig."] },
      { q: "Wat is **ZZP'er**?", options: ["Zelfstandige zonder personeel", "Werknemer", "Stagiair", "Vrijwilliger"], answer: 0, wrongHints: [null, "Klopt.", "Loondienst.", "Niet primair.", "Onbetaald."] },
      { q: "Wat is **AOW**?", options: ["Staatspensioen", "Salaris", "Belasting", "Bonus"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."] },
      { q: "**Top-1 best betaalde** beroep NL?", options: ["Specialist-arts", "Verkoper", "Schoonmaker", "Stagiair"], answer: 0, wrongHints: [null, "Klopt — €150k+.", "Veel minder.", "Veel minder.", "Niet betaald."] },
      { q: "Wat is **bruto**?", options: ["Salaris voor belasting", "Salaris na belasting", "Cadeau", "Niet bestaand"], answer: 0, wrongHints: [null, "Klopt.", "Netto.", "Niet.", "Wel."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const beroepenWerkPo = {
  id: "beroepen-werk-po",
  title: "Beroepen + werk (Cito groep 6-8)",
  emoji: "👷",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — economie / burgerschap",
  prerequisites: [
    { id: "financiele-vorming-po", title: "Financiële vorming", niveau: "1F" },
  ],
  intro:
    "Beroepen + werk voor Cito groep 6-8 — wat is beroep (werknemer/ZZP/vrijwilliger) + 4 sectoren (primair/secundair/tertiair/quartair) + MBO/HBO/WO + voorbeelden beroepen + salaris (bruto/netto/minimum/CAO) + werkrechten + werken vanaf 13. Sluit op financiele-vorming. ~15 min.",
  triggerKeywords: [
    "beroep", "beroepen", "werk", "baan",
    "ZZP", "freelance", "ondernemer",
    "salaris", "loon", "bruto", "netto", "minimumloon",
    "MBO", "HBO", "WO", "universiteit",
    "primaire sector", "secundaire", "tertiaire", "quartaire",
    "CAO", "vakbond", "FNV",
    "AOW", "pensioen",
  ],
  chapters,
  steps,
};

export default beroepenWerkPo;
