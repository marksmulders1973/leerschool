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
        wrongHints: [null, "Wel maar specifiek dit.", "Niet primair.", "Geen werk."],
      },
      {
        q: "Wat is een **ZZP'er**?",
        options: ["Zelfstandige zonder personeel", "Werknemer", "Stagiair", "Eigenaar groot bedrijf"],
        answer: 0,
        wrongHints: [null, "Loondienst.", "Niet primair.", "Niet primair."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent ZZP?", tekst: "**ZZP** is een afkorting voor **Zelfstandige Zonder Personeel**. Het is iemand die voor zichzelf werkt — niet in dienst bij een baas." },
            { titel: "Verschil met werknemer", tekst: "Een werknemer heeft een **baas + vast loon + vakantiedagen + pensioenregeling**. Een ZZP'er regelt alles zelf: eigen klanten zoeken, eigen verzekering, eigen pensioen-spaar." },
            { titel: "Voorbeelden", tekst: "Veel kappers, fotografen, schilders, klusbedrijfjes, sommige journalisten, sommige IT'ers werken als ZZP. In NL zijn er ~1,1 miljoen ZZP'ers (2024)." },
          ],
          woorden: [
            { woord: "ZZP'er", uitleg: "Zelfstandige Zonder Personeel — eigen baas, geen werknemers." },
            { woord: "werknemer", uitleg: "Iemand in loondienst bij een werkgever." },
          ],
          theorie: "Cito-tip economie: ZZP'er heeft VRIJHEID (eigen tijd kiezen, eigen klanten) maar ook RISICO (geen werk = geen loon, geen vakantiegeld). Daarom rekenen ZZP'ers hoger uurtarief.",
          voorbeelden: [
            { type: "stap", tekst: "Kapper Annemarie heeft eigen kapsalon = ZZP. Werkt zelf, regelt eigen klanten." },
            { type: "stap", tekst: "Tegenover: Werknemer bij grote kapperketen = vast loon van baas." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "ZZP = ZONDER PERSONEEL. Werkt voor zichzelf, niemand in dienst." }],
          niveaus: {
            basis: "ZZP'er = Zelfstandige Zonder Personeel (eigen baas).",
            simpeler: "ZZP'er werkt voor zichzelf, niet in loondienst.",
            nogSimpeler: "Eigen baas zonder werknemers.",
          },
        },
      },
      {
        q: "Wat is een **vrijwilliger**?",
        options: ["Werkt zonder betaling", "Topsalaris", "Werkt 80 uur", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Wel."],
      },
      {
        q: "Wat is **AOW**?",
        options: ["Staatspensioen vanaf 67", "Banengeld", "Loon", "Belasting"],
        answer: 0,
        wrongHints: [null, "Wel maar specifiek dit.", "Niet primair.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is AOW?", tekst: "**AOW** is een afkorting voor **Algemene Ouderdomswet**. Het is een **staatspensioen** dat de overheid uitkeert aan iedereen die in NL gewoond/gewerkt heeft, vanaf hun pensioenleeftijd." },
            { titel: "Pensioenleeftijd", tekst: "In 2024-2025 is de AOW-leeftijd **67 jaar**. Deze leeftijd stijgt langzaam (rond 2030: 67+iets), omdat mensen ouder worden." },
            { titel: "Naast werkpensioen", tekst: "AOW = staats-deel (iedereen krijgt hetzelfde basisbedrag). Daarnaast hebben veel mensen een **werknemers-pensioen** dat ze zelf hebben gespaard via hun werkgever. Samen vormen ze 'het pensioen'." },
          ],
          woorden: [
            { woord: "AOW", uitleg: "Algemene Ouderdomswet — staatspensioen." },
            { woord: "pensioen", uitleg: "Geld na pensionering (stoppen met werken)." },
            { woord: "AOW-leeftijd", uitleg: "Vanaf welke leeftijd je AOW krijgt (nu 67)." },
          ],
          theorie: "Cito-tip afkortingen: AOW = Algemene Ouderdoms Wet. Andere belangrijke: WW = Werkloosheidswet. WIA = arbeidsongeschiktheid. Bijstand = laagste uitkering.",
          voorbeelden: [
            { type: "stap", tekst: "Opa van 70 ontvangt elke maand AOW van overheid + werkpensioen van zijn vroegere werkgever." },
            { type: "stap", tekst: "AOW wordt betaald uit belastingen die wij nu betalen. Solidariteits-systeem: jongeren betalen voor ouderen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "AOW = OUDERDOMS-uitkering van staat. Niet hetzelfde als werkgevers-pensioen." }],
          niveaus: {
            basis: "AOW = staatspensioen vanaf 67 jaar.",
            simpeler: "Algemene Ouderdomswet — overheid betaalt ouderen.",
            nogSimpeler: "AOW = staats-pensioen.",
          },
        },
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
        wrongHints: [null, "Tertiair.", "Secundair.", "Quartair."],
      },
      {
        q: "Welke beroep is **secundaire sector**?",
        options: ["Timmerman (bouw)", "Verkoper winkel", "Leerkracht", "Boer"],
        answer: 0,
        wrongHints: [null, "Tertiair.", "Quartair.", "Primair."],
      },
      {
        q: "**Grootste sector** in NL?",
        options: ["Tertiair (~50%)", "Primair (~2%)", "Secundair", "Quartair"],
        answer: 0,
        wrongHints: [null, "Klein.", "Iets minder.", "Iets minder."],
        uitlegPad: {
          stappen: [
            { titel: "Wat zijn sectoren?", tekst: "Economen verdelen banen in **3 (of 4) sectoren**: primair (natuur), secundair (maken), tertiair (diensten) en quartair (zorg+onderwijs+overheid)." },
            { titel: "Verdeling in NL (2024)", tekst: "PRIMAIR (natuur): ~2%. SECUNDAIR (industrie/bouw): ~15%. **TERTIAIR (diensten): ~50% = GROOTSTE**. QUARTAIR (zorg/onderwijs/overheid): ~33%." },
            { titel: "Waarom tertiair grootste?", tekst: "NL is een DIENSTEN-economie geworden. Veel mensen werken in winkels, banken, kappers, transport, horeca, IT. Industrie is meer naar Azië verplaatst." },
          ],
          woorden: [
            { woord: "primaire sector", uitleg: "Natuur: landbouw, visserij, mijnbouw." },
            { woord: "secundaire sector", uitleg: "Maken: industrie, bouw." },
            { woord: "tertiaire sector", uitleg: "Diensten: winkel, horeca, vervoer, bank." },
            { woord: "quartaire sector", uitleg: "Zorg, onderwijs, overheid." },
          ],
          theorie: "Cito-tip sectoren: PRIMAIR = direct uit natuur. SECUNDAIR = iets maken. TERTIAIR = iemand helpen (dienst). QUARTAIR = publieke sector (zorg/onderwijs/overheid).",
          voorbeelden: [
            { type: "stap", tekst: "Boer = primair. Loodgieter = secundair. Kapper = tertiair. Leerkracht = quartair." },
            { type: "stap", tekst: "Een hamburger eten? Boer (primair) → fabriek (secundair) → restaurant (tertiair) → arts bij maagpijn (quartair)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Tertiair = grootste in NL. Vroeger (~1900) was PRIMAIR de grootste (50% boeren!), nu maar 2%." }],
          niveaus: {
            basis: "Tertiaire sector = ~50% = grootste in NL (diensten).",
            simpeler: "Helft van NL werkt in diensten (winkel, horeca, IT, etc).",
            nogSimpeler: "Tertiair = grootste.",
          },
        },
      },
      {
        q: "Welke beroepen **groeien**?",
        options: ["IT + zorg + duurzaamheid", "Kassier", "Postbezorger", "Geen"],
        answer: 0,
        wrongHints: [null, "Krimpen.", "Krimpen.", "Wel."],
      },
    ],
  },
  {
    title: "Beroepen + opleiding",
    explanation:
      "**Voor de meeste beroepen heb je opleiding nodig.**\n\n**Onderwijssysteem NL**:\n\n**1. Basisschool** *(groep 1-8, 4-12 jaar)*.\n**2. Middelbare school** *(klas 1-6, 12-18 jaar)*:\n• **VMBO** *(Voorbereidend Middelbaar Beroepsonderwijs, 4 jaar)*: leidt naar mbo.\n• **HAVO** *(Hoger Algemeen Voortgezet Onderwijs, 5 jaar)*: leidt naar hbo.\n• **VWO** *(Voorbereidend Wetenschappelijk Onderwijs, 6 jaar)*: leidt naar universiteit.\n\n**3. Vervolgonderwijs**:\n• **MBO** *(Middelbaar Beroepsonderwijs, 1-4 jaar)*: vakopleiding *(elektricien, kapper, monteur, ICT'er)*.\n• **HBO** *(Hoger Beroepsonderwijs, 4 jaar)*: leraar, verpleegkundige, ingenieur, journalist.\n• **WO** *(Wetenschappelijk Onderwijs, 3+2 jaar)*: dokter, advocaat, architect, wetenschapper.\n\n**Niveaus mbo**:\n• Niveau 1: hulparbeider *(1 jr)*.\n• Niveau 2: vakman *(2 jr)*.\n• Niveau 3: vakman met meer verantwoordelijkheid *(2-3 jr)*.\n• Niveau 4: middenkaderfunctionaris *(3-4 jr)* — kan doorstromen naar hbo.\n\n**Voorbeelden van beroepen + opleiding**:\n\n**MBO-beroepen**:\n• Kapper *(mbo-2/3)*.\n• Auto-monteur *(mbo-3)*.\n• Loodgieter *(mbo-2/3)*.\n• Kok *(mbo-2/3)*.\n• Politieagent *(mbo-3/4)*.\n• Verzorgende *(mbo-3)*.\n• Elektricien *(mbo-2/3)*.\n• Hovenier *(mbo-2/3)*.\n\n**HBO-beroepen**:\n• Leerkracht basisschool *(pabo)*.\n• Docent VO *(hbo lerarenopleiding)*.\n• Verpleegkundige *(hbo-V)*.\n• Verloskundige *(hbo)*.\n• Maatschappelijk werker.\n• Ingenieur *(constructie, elektrotechniek)*.\n• Journalist.\n• Marketeer.\n• ICT-developer.\n\n**WO-beroepen**:\n• Arts *(geneeskunde, 6 jaar)*.\n• Tandarts *(tandheelkunde, 6 jaar)*.\n• Advocaat *(rechten, 4-5 jaar)*.\n• Architect *(bouwkunde + master)*.\n• Wetenschapper *(promotie + onderzoek)*.\n• Psychiater *(arts + psychologie)*.\n• Notaris *(rechten + master)*.\n\n**Beroepen zonder vaste opleiding**:\n• Ondernemer *(zelfstandige)*.\n• Verkoper *(meeste functies, mbo helpt)*.\n• Influencer *(YouTube, TikTok)*.\n• Schrijver *(talent)*.\n• Sporter *(talent + training)*.\n\n**Kiezen wat bij jou past**:\n• **Wat vind je leuk?** *(creatief, denkwerk, met mensen)*\n• **Wat kun je goed?** *(handig, sportief, taal)*\n• **Wat verdien je?** *(salaris-verschillen kunnen groot zijn)*\n• **Werktijden?** *(kantoor, ploegen, weekend)*\n• **Werkdruk?** *(stress vs rustig)*\n\n**Profielkeuze klas 3**:\n• **VMBO**: techniek / economie / zorg+welzijn / groen.\n• **HAVO/VWO**: N&T / N&G / E&M / C&M.\n\nProfielkeuze bepaalt richtingen vervolgopleiding.\n\n**Cito-feitje**:\n**Hoger opgeleid = hoger salaris** *(gemiddeld)*. Maar niet altijd! Een goede loodgieter verdient meer dan veel hbo'ers.",
    checks: [
      {
        q: "Wat is **MBO**?",
        options: ["Middelbaar beroepsonderwijs (vakopleiding)", "Hoog", "Wetenschappelijk", "Basis"],
        answer: 0,
        wrongHints: [null, "HBO.", "WO.", "Primair."],
      },
      {
        q: "Welke opleiding voor **arts**?",
        options: ["WO geneeskunde (6 jaar)", "MBO", "HBO", "VMBO"],
        answer: 0,
        wrongHints: [null, "Niet.", "Verpleegkundige wel.", "Niet."],
      },
      {
        q: "Welke opleiding voor **loodgieter**?",
        options: ["MBO niveau 2/3", "WO", "Geen opleiding nodig", "Universiteit"],
        answer: 0,
        wrongHints: [null, "Onnodig hoog.", "Wel.", "Onnodig hoog."],
      },
      {
        q: "Wat is **pabo**?",
        options: ["HBO leerkracht basisschool", "WO", "MBO", "VMBO"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
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
        wrongHints: [null, "Netto.", "Wel verschil.", "Niet."],
      },
      {
        q: "**Minimum-uurloon** NL 2024?",
        options: ["~€14/uur", "€5/uur", "€50/uur", "Geen wet"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Wel."],
      },
      {
        q: "Wat is een **CAO**?",
        options: ["Afspraken werkgever-werknemers (collectief)", "Belasting", "Salaris", "Werktijd"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Wel maar specifiek dit.", "Niet."],
      },
      {
        q: "Vanaf welke leeftijd **licht werken** in NL?",
        options: ["13 jaar (krant bezorgen)", "21 jaar", "8 jaar", "Mag niet"],
        answer: 0,
        wrongHints: [null, "Te oud.", "Te jong.", "Wel."],
      },
    ],
  },
  {
    title: "Eind-toets — beroepen mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Welke sector is **landbouw**?", options: ["Primair", "Secundair", "Tertiair", "Quartair"], answer: 0, wrongHints: [null, "Industrie.", "Dienst.", "Zorg/onderwijs."] },
      { q: "Welke is **HBO-beroep**?", options: ["Verpleegkundige", "Loodgieter", "Arts", "Kassier"], answer: 0, wrongHints: [null, "MBO.", "WO.", "Geen opleiding nodig."] },
      { q: "Wat is **ZZP'er**?", options: ["Zelfstandige zonder personeel", "Werknemer", "Stagiair", "Vrijwilliger"], answer: 0, wrongHints: [null, "Loondienst.", "Niet primair.", "Onbetaald."] },
      { q: "Wat is **AOW**?", options: ["Staatspensioen", "Salaris", "Belasting", "Bonus"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "**Top-1 best betaalde** beroep NL?", options: ["Specialist-arts", "Verkoper", "Schoonmaker", "Stagiair"], answer: 0, wrongHints: [null, "Veel minder.", "Veel minder.", "Niet betaald."] },
      { q: "Wat is **bruto**?", options: ["Salaris voor belasting", "Salaris na belasting", "Cadeau", "Niet bestaand"], answer: 0, wrongHints: [null, "Netto.", "Niet.", "Wel."] },
      {
        q: "Wat betekent **MBO/HBO/WO**?",
        options: ["MBO=praktisch, HBO=hoger beroeps, WO=universitair", "Alle drie hetzelfde", "Niets bijzonders", "Type bedrijven"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — heel verschillende niveaus.", "Wel — onderwijsniveaus.", "Niet — dit zijn opleidingsniveaus."],
        uitlegPad: {
          stappen: [
            { titel: "3 niveaus vervolgonderwijs in NL", tekst: "Na de middelbare school kun je in NL kiezen uit drie hoofdniveaus:\n\n• **MBO** (**Middelbaar Beroeps­onderwijs**) — praktijkgericht. Niveau 1-4. Duur: 1-4 jaar. Bv. kapper, verpleegkunde, ICT-helpdesk.\n• **HBO** (**Hoger Beroeps­onderwijs**) — toegepaste theorie + praktijk. Duur: 4 jaar (bachelor). Bv. leraar basisschool, verpleegkundige niveau 6, marketing.\n• **WO** (**Wetenschappelijk Onderwijs**) — universiteit, theoretisch + onderzoek. Duur: 3 jaar bachelor + 1-2 jaar master. Bv. arts, advocaat, psycholoog." },
            { titel: "Welke middelbare-school-keuze leidt waarheen?", tekst: "• **VMBO** → meestal MBO\n• **HAVO** → meestal HBO\n• **VWO** → meestal WO\n\nMaar **stapelen kan altijd**: MBO niveau 4 → HBO. HBO → WO. Niemand zit vast — je kunt altijd nog doorgroeien. Tegenwoordig switchen veel mensen zelfs ná hun studie." },
            { titel: "Cito-feit: Doorstroomtoets-link", tekst: "**De Doorstroomtoets** (groep 8) helpt bepalen welk middelbare-school-niveau bij je past — VMBO, HAVO of VWO. Dit beïnvloedt welk vervolgonderwijs makkelijk bereikbaar is. Maar het is **geen einde van keuzes** — stapelen kan altijd later.\n\nNederland heeft ~3 miljoen studenten in MBO/HBO/WO samen (2024)." },
          ],
          woorden: [
            { woord: "MBO", uitleg: "Middelbaar Beroepsonderwijs. Praktijkgericht. ROC's, scholen voor specifieke beroepen." },
            { woord: "HBO", uitleg: "Hoger Beroepsonderwijs. Hogescholen. 4 jaar bachelor, toepassings­gericht." },
            { woord: "WO", uitleg: "Wetenschappelijk Onderwijs. Universiteiten. 3+2 jaar bachelor+master, onderzoeks­gericht." },
            { woord: "stapelen", uitleg: "Doorgaan naar hoger niveau na een opleiding. VMBO→MBO→HBO bv." },
          ],
          theorie: "NL-onderwijsniveaus van laag naar hoog (samenvatting):\n• Basisschool (groep 1-8)\n• **VMBO** (4 jr) → MBO\n• **HAVO** (5 jr) → HBO\n• **VWO** (6 jr) → WO\n• **MBO** (1-4 jr) → werk of HBO\n• **HBO** (4 jr bachelor) → werk of master/WO\n• **WO** (3+2 jr) → werk of PhD\n\nDoor stapelen kan iedereen elk niveau bereiken — niet alleen via 1 route.",
          voorbeelden: [
            { type: "feit", tekst: "Onze huidige minister-president (2024+ Dick Schoof) studeerde aan universiteit (WO Rechten)." },
            { type: "feit", tekst: "Beroemde NL'ers die VMBO/MBO deden + later doorstapelden: Geert Wilders, Khalid Boulahrouz." },
          ],
          basiskennis: [{ onderwerp: "Niet 'lager = slechter'", uitleg: "MBO is NIET minder dan WO — verschillende beroepen + interesses. Stratenmaker (MBO) en arts (WO) zijn beide nodig." }],
          niveaus: { basis: "Drie onderwijsniveaus. = A.", simpeler: "MBO = praktijk-beroep, HBO = hogeschool 4 jaar, WO = universiteit. Drie niveaus vervolgonderwijs in NL. = A.", nogSimpeler: "3 niveaus = A." },
        },
      },
      {
        q: "Wat is een **CAO**?",
        options: ["Collectieve Arbeidsovereenkomst — afspraken tussen werkgevers + vakbond", "Computer-Aided Onderwijs", "Cadeau-Aanbod-Order", "Belasting-soort"],
        answer: 0,
        wrongHints: [null, "Niet — geen onderwijs-term.", "Niet — bedacht antwoord.", "Niet — geen belasting."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een CAO?", tekst: "**CAO** = **Collectieve Arbeids­overeenkomst** — een **schriftelijke afspraak** tussen werkgevers (vaak via een werkgevers-organisatie) en werknemers (via een **vakbond**, bv. FNV of CNV).\n\nGeldt voor **alle werknemers** in een sector (zorg, bouw, onderwijs, supermarkten). Je hoeft niet apart te onderhandelen — CAO regelt het al." },
            { titel: "Wat staat erin?", tekst: "Een CAO regelt minimaal:\n• **Salaris-tabel** per functie en ervaringsjaren\n• **Werktijden** (max uur/week, overwerk-regels)\n• **Vakantie-dagen** (meestal 25+ per jaar)\n• **Ziekteverzuim** (loon doorbetalen)\n• **Pensioen** (deel salaris naar pensioen)\n• **Ontslag-regels** (opzegtermijn)\n• **13e maand** of bonus (soms)" },
            { titel: "Cito-feit: vakbonden NL", tekst: "Nederland heeft **~1,5 miljoen vakbonds­leden** (2024). Grootste vakbonden:\n• **FNV** (Federatie Nederlandse Vakbeweging) — ~900.000 leden\n• **CNV** (Christelijk Nationaal Vakverbond) — ~250.000 leden\n• **VCP** (kleinere)\n\nLidmaatschap kost ~€15/maand. Vakbond helpt bij conflicten met werkgever, onderhandelt CAO's, geeft juridisch advies." },
          ],
          woorden: [
            { woord: "CAO", uitleg: "Collectieve Arbeidsovereenkomst. Afspraken over werk-voorwaarden voor hele branche." },
            { woord: "vakbond", uitleg: "Organisatie van werknemers die opkomt voor hun belangen. Onderhandelt CAO." },
            { woord: "werkgever", uitleg: "Bedrijf/persoon die jou in dienst neemt en salaris betaalt." },
            { woord: "werknemer", uitleg: "Persoon die in dienst is en salaris ontvangt." },
          ],
          theorie: "Hoe werkt een CAO?\n1. Vakbond stelt eisen op (bv. 5% loonsverhoging)\n2. Werkgevers-organisatie stelt aanbod (bv. 2% loonsverhoging)\n3. Onderhandelen tot akkoord\n4. CAO ondertekenen voor **2-3 jaar**\n5. Nieuwe ronde na afloop\n\nBij conflict: **staking** mogelijk (werknemers leggen werk neer om druk te zetten).",
          voorbeelden: [
            { type: "feit", tekst: "Top-3 CAO's in NL qua aantal werknemers: zorg, supermarkten (AH/Jumbo), bouw." },
            { type: "feit", tekst: "Een ZZP'er valt NIET onder een CAO — moet eigen afspraken maken met klanten." },
          ],
          basiskennis: [{ onderwerp: "Niet altijd alle bedrijven", uitleg: "CAO geldt voor sectoren waar werkgevers + vakbond afspraken hebben. Niet elk bedrijf — sommige cao-loze sectoren bestaan." }],
          niveaus: { basis: "Afspraken werk-voorwaarden. = A.", simpeler: "CAO = Collectieve Arbeidsovereenkomst. Afspraken tussen werkgevers + vakbond over salaris, vakantie, werktijden voor hele branche. = A.", nogSimpeler: "Werk-afspraken = A." },
        },
      },
      {
        q: "Op welke leeftijd mag je in NL beginnen met **werken voor geld**?",
        options: ["Vanaf 13 jaar (licht werk) of 15 jaar (krant)", "16 jaar pas", "18 jaar pas", "Geen leeftijdsgrens"],
        answer: 0,
        wrongHints: [null, "Te laat — vanaf 13 mag al beperkt.", "Te laat — vanaf 16 mag al veel.", "Niet — wel regels: maximaal aantal uur per week, geen nacht-werk."],
        uitlegPad: {
          stappen: [
            { titel: "NL-leeftijdsgrenzen werken", tekst: "Nederland heeft duidelijke regels per leeftijd:\n• **<13 jaar**: alleen huishoudelijke klusjes voor zakgeld\n• **13-14**: **licht werk** rondom huis (auto wassen voor buurman, hondenuitlater)\n• **15**: kranten/folders bezorgen, vakantie-werk\n• **16-17**: bijbaan met **beperkingen** (max 40 u/week vakantie, niet 's nachts)\n• **18+**: volwaardig werken zonder beperkingen" },
            { titel: "Regels voor 16-17 jarigen", tekst: "**School-week**:\n• Max **12 uur/week** werken (naast school)\n• Niet vóór 06:00 of na 21:00\n\n**Vakantie-week**:\n• Max **40 uur/week**\n• Max **8 uur/dag**\n• Wel rust-tijden (15 min pauze bij 4,5+ uur)\n\nNiet toegestaan voor minderjarigen: alcohol-werk, gevaarlijke machines, nachtwerk (22:00-06:00)." },
            { titel: "Cito-feit: salaris jongeren", tekst: "**Minimumloon jongeren** (juli 2024):\n• 15 jaar: **€4,77/uur** bruto\n• 16: €5,49\n• 17: €6,28\n• 18: €7,63\n• 19: €9,16\n• 20: €12,21\n• 21+: **€14,06** (volwassen minimumloon)\n\nDus 13-jarige hondenuitlater verdient minder dan 21-jarige werknemer voor zelfde werk = **leeftijdsdiscriminatie wettelijk toegestaan** in NL (uitzondering in arbeidswet)." },
          ],
          woorden: [
            { woord: "bijbaan", uitleg: "Werk naast school of studie. Niet hoofdinkomen." },
            { woord: "minimumloon", uitleg: "Laagste salaris dat werkgever mag betalen. Verschillend per leeftijd in NL." },
            { woord: "Arbeidsinspectie", uitleg: "Overheidsinstantie die controleert of werkgevers zich aan werk-regels houden." },
          ],
          theorie: "Belangrijke regels jonge werknemers (Arbeidstijdenwet):\n• Werkgever MAG NIET vragen je school over te slaan\n• Werkgever MOET pauzes geven\n• Loonstrook MAG je vragen (bewijs salaris)\n• Bij ziekte: doorbetaling regelen via CAO\n\nVeel jongeren weten hun rechten niet. Vakbond CNV Jongeren of FNV Jong geven info.",
          voorbeelden: [
            { type: "feit", tekst: "~750.000 Nederlandse jongeren (15-24) hebben een bijbaan (2024). Populairst: supermarkt, horeca, krantenwijk." },
            { type: "feit", tekst: "Je krijgt ook **vakantiegeld** (8% van salaris extra in mei) — telt op bij salaris." },
          ],
          basiskennis: [{ onderwerp: "Niet stiekem", uitleg: "Werken vóór 13 of zonder regels = werkgever in overtreding. Niet jouw schuld als ouder/werkgever het niet weet." }],
          niveaus: { basis: "13 jaar. = A.", simpeler: "Vanaf 13 mag licht werk (klusjes), vanaf 15 krant/folder, vanaf 16 bijbaan met regels (max uur, geen nacht). = A.", nogSimpeler: "13+ licht werk = A." },
        },
      },
      { q: "Wat is een **CV** (curriculum vitae)?", options: ["Overzicht van opleiding/werk-ervaring","Auto","Reclame","Niet relevant"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Wel."] },
      { q: "Wat is **MBO**?", options: ["Middelbaar Beroepsonderwijs","Hoger Onderwijs","Universiteit","Basisschool"], answer: 0, wrongHints: [null, "Dat is HBO/WO.", "Hoger.", "Niet."] },
      { q: "Wat is **HBO**?", options: ["Hoger Beroepsonderwijs","Universiteit","MBO","VMBO"], answer: 0, wrongHints: [null, "Dat is WO.", "Lager.", "Lager."] },
      { q: "Welk **beroep** werkt in een ziekenhuis?", options: ["Verpleegkundige","Bakker","Politieagent","Boer"], answer: 0, wrongHints: [null, "Bakkerij.", "Politiebureau.", "Boerderij."] },
      { q: "Welk **beroep** werkt met dieren?", options: ["Dierenarts","Bakker","Architect","Boekhouder"], answer: 0, wrongHints: [null, "Brood.", "Gebouwen.", "Cijfers."] },
      { q: "Wat doet een **architect**?", options: ["Gebouwen ontwerpen","Bouwen alleen","Schoonmaken","Lesgeven"], answer: 0, wrongHints: [null, "Aannemer.", "Schoonmaker.", "Leraar."] },
      { q: "Wat is **vakantiegeld**?", options: ["8% extra salaris in mei","Niet bestaand","Buitenland-geld","Bonus"], answer: 0, wrongHints: [null, "Wel.", "Niet.", "Soort bonus maar wel wettelijk."] },
      { q: "Wat is een **vrijwilliger**?", options: ["Iemand die onbetaald werkt voor goede doel","Politicus","Niet werkend","Manager"], answer: 0, wrongHints: [null, "Niet primair.", "Wel werkend.", "Niet specifiek."] },
      { q: "Welk **beroep** lost branden op?", options: ["Brandweer","Politie","Ambulance","Niet relevant"], answer: 0, wrongHints: [null, "Andere taak.", "Andere taak.", "Wel."] },
      { q: "Welk **beroep** plant en oogst?", options: ["Boer","Bakker","Slager","Visser"], answer: 0, wrongHints: [null, "Verwerkt graan.", "Verwerkt vlees.", "Vis."] },
      { q: "Wat is een **werkgever**?", options: ["Persoon/bedrijf dat iemand laat werken","Werknemer","Klant","Niet relevant"], answer: 0, wrongHints: [null, "Andere kant.", "Niet.", "Wel."] },
      { q: "Wat is een **werknemer**?", options: ["Persoon die werkt voor werkgever","Werkgever","Klant","Niet relevant"], answer: 0, wrongHints: [null, "Andere kant.", "Niet.", "Wel."] },
      { q: "Wat is **loon**?", options: ["Salaris (betaling voor werk)","Bonus","Vakantie","Niet relevant"], answer: 0, wrongHints: [null, "Extra.", "Niet betaling.", "Wel."] },
      { q: "Welk beroep helpt mensen leren?", options: ["Leraar/docent","Politicus","Bakker","Boer"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "Wat is een **stage**?", options: ["Werkervaring opdoen tijdens opleiding","Vakantie","Loonstop","Reclame"], answer: 0, wrongHints: [null, "Niet werk.", "Niet.", "Niet."] },
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
