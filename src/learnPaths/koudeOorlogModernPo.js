// Leerpad: Koude Oorlog + moderne geschiedenis 1945-nu - groep 7-8.
// Sluit op WO2 + tijdvakken. Cito Tijdvak 10. 1F. 4 stappen.

const stepEmojis = ["🧊", "🧱", "💻", "🏆"];

const chapters = [
  { letter: "A", title: "Koude Oorlog basis", emoji: "🧊", from: 0, to: 0 },
  { letter: "B", title: "Muur, Cuba, Vietnam", emoji: "🧱", from: 1, to: 1 },
  { letter: "C", title: "Val Muur + nu", emoji: "💻", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Koude Oorlog — wat was het?",
    explanation:
      "**Koude Oorlog** *(1945-1991, ~45 jaar)* = **spanning tussen VS (Verenigde Staten van Amerika) + Sovjet-Unie (USSR)** zonder echte vechtoorlog.\n\n**Waarom 'koud'?**\n• Geen directe oorlog tussen de 2 grootmachten.\n• Wel **kernwapen-wedloop, spionage, proxy-oorlogen** *(via andere landen)*.\n\n**Achtergrond**:\nNa **WO2** *(1945)* lag Europa in puin.\n2 supermachten over:\n• **VS** *(kapitalisme, democratie, Westen)*.\n• **USSR / Sovjet-Unie** *(communisme, dictatuur, Oosten)*.\n\nEerst **bondgenoten** tegen Hitler. Maar daarna **oneens** over toekomst Europa.\n\n**Ideologisch verschil**:\n\n**VS / kapitalisme**:\n• Markt-economie *(bedrijven privé)*.\n• Vrije verkiezingen, meerdere partijen.\n• Vrije pers + religie + meningsuiting.\n• Privé-eigendom.\n\n**USSR / communisme**:\n• **Plan-economie** *(staat beheert alles)*.\n• Eén partij *(Communistische Partij)*.\n• Gecontroleerde pers.\n• 'Werk + voedsel + zorg voor iedereen' *(theorie)*.\n• In praktijk: dictatuur + armoede.\n\n**'IJzeren Gordijn'** *(Winston Churchill, 1946)*:\n• Europa **gedeeld** in 2:\n  - **West-Europa**: vrij + kapitalistisch *(NL, Duitsland-West, Frankrijk, GB, Italië)*.\n  - **Oost-Europa**: communistisch + onder USSR-controle *(Polen, Duitsland-Oost, Hongarije, Roemenië, etc.)*.\n• Mensen konden niet vrij oversteken.\n\n**Belangrijke leiders**:\n\n**VS-presidenten Koude Oorlog**:\n• Truman *(1945-53)*: begin.\n• Eisenhower *(1953-61)*.\n• Kennedy *(1961-63)*: vermoord 1963.\n• Johnson, Nixon, Reagan *(1981-89, eindigde Koude Oorlog)*.\n\n**USSR-leiders**:\n• Stalin *(1924-53)*: enge dictator, miljoenen doden.\n• Chroesjtsjov *(1953-64)*.\n• Brezhnev *(1964-82)*.\n• Gorbatsjov *(1985-91)*: eindigde Koude Oorlog.\n\n**NAVO + Warschaupact**:\n\n**NAVO** *(Noord-Atlantische Verdragsorganisatie)*:\n• Opgericht **1949** door VS + bondgenoten.\n• Doel: gezamenlijke verdediging tegen USSR.\n• Mottto: **'Aanval op één = aanval op allen'**.\n• Hoofdkwartier: Brussel.\n• Nu: 32 landen *(incl. NL)*.\n• Mark Rutte = secretaris-generaal sinds **oktober 2024**.\n\n**Warschaupact** *(1955-1991)*:\n• Communistische tegenhanger van NAVO.\n• USSR + Oost-Europese landen.\n• Bestond niet meer na val Sovjet-Unie.\n\n**Kernwapens** ☢️:\n• **Atoombom** uitgevonden door VS *(1945, gegooid op Hiroshima + Nagasaki, Japan)*.\n• USSR ontwikkelde ook *(1949)*.\n• Hoeveelheid groeide naar **70.000 wapens** *(piek 1986)*.\n• **MAD-doctrine** *(Mutually Assured Destruction)*: als één land schiet, beide ondergaan.\n• Daarom geen oorlog — te gevaarlijk.\n\n**Wapenwedloop**:\n• Steeds krachtigere bommen.\n• Raketten met intercontinentaal bereik.\n• Onderzeeërs met kernwapens.\n• Bommenwerpers altijd in lucht.\n\n**Spionage**:\n• **CIA** *(VS)* + **KGB** *(USSR)*.\n• Veel spionnen + tegenspionnen.\n• James Bond-films = romantiseren deze tijd.\n\n**Cito-feitje**:\n**Ruimtevaart-wedloop** was deel van Koude Oorlog!\n• **Sputnik** *(USSR, 1957)*: eerste satelliet → VS verschrikt.\n• **Gagarin** *(USSR, 1961)*: eerste mens in ruimte.\n• Kennedy zei: 'We gaan naar maan voor 1970!'\n• **Apollo 11** *(VS, 1969)*: eerste maanlanding = VS won deze.",
    checks: [
      {
        q: "Wat was de **Koude Oorlog**?",
        options: ["Spanning VS-USSR 1945-1991 zonder echte oorlog", "Echte oorlog", "Winter-oorlog", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Wel geweld via proxy maar niet direct.", "Niet specifiek.", "Wel."],
      },
      {
        q: "Wat is de **NAVO**?",
        options: ["Westerse militaire alliantie (1949)", "Sovjet-pact", "VN", "Niets"],
        answer: 0,
        wrongHints: [null, "Warschaupact.", "Andere.", "Wel."],
      },
      {
        q: "Wat is **'IJzeren Gordijn'**?",
        options: ["Scheiding West-Oost Europa", "Echte gordijn", "Wapen", "Auto"],
        answer: 0,
        wrongHints: [null, "Beeldspraak.", "Niet.", "Niet."],
      },
      {
        q: "Wie was **NL secretaris-generaal NAVO sinds 2024**?",
        options: ["Mark Rutte", "Wilders", "Schoof", "Niemand"],
        answer: 0,
        wrongHints: [null, "PVV.", "Premier.", "Wel."],
      },
    ],
  },
  {
    title: "Berlijnse Muur, Cuba, Vietnam — crises",
    explanation:
      "Tijdens Koude Oorlog waren er **gevaarlijke momenten** dat het bijna echt oorlog werd.\n\n**1. Berlijnse blokkade + luchtbrug** *(1948-49)*:\n• USSR sloot wegen naar West-Berlijn af.\n• Wilden dat Westen wegging.\n• VS + bondgenoten **vlogen voorraden binnen** *(11 maanden lang!)*.\n• 277.000 vluchten.\n• USSR gaf op.\n\n**2. Berlijnse Muur** 🧱 *(1961-1989)*:\n• Berlijn was gedeeld: West *(vrij)* + Oost *(communistisch)*.\n• 1949: 2 Duitslanden *(West-Duitsland + Oost-Duitsland)*.\n• Berlijn was eiland van Westen in Oost-Duitsland.\n• Oost-Duitsers vluchten naar West *(beter leven)*.\n• **1961**: USSR bouwde **muur** door Berlijn.\n• 155 km lang, 3,6 m hoog, wachters.\n• Mensen aan Oost-kant **gevangen** in eigen land.\n• ~140 mensen gedood bij vluchtpoging.\n• Symbool van Koude Oorlog.\n\n**John F. Kennedy** in Berlijn *(1963)*:\n• Beroemde toespraak.\n• *'Ich bin ein Berliner'* *(Ik ben een Berlijner)* — solidariteit met West-Berlijn.\n\n**3. Cuba-crisis** *(oktober 1962)* — **dichtste bij kernoorlog OOIT!**\n\n**Wat gebeurde?**\n• Cuba *(Caraïbisch eiland, dicht bij VS)* werd communistisch in 1959 *(Fidel Castro)*.\n• USSR plaatste **kernraketten** op Cuba *(150 km van Florida)*.\n• VS-president **Kennedy** ontdekt dit met spion-vliegtuigen.\n• **13 dagen** spanning.\n• VS blokkeerde Cuba.\n• USSR-leider Chroesjtsjov + Kennedy onderhandelden.\n• Oplossing: USSR haalt raketten weg + VS haalt raketten Turkije weg + belooft geen invasie Cuba.\n\nAls 1 verkeerde stap → kernoorlog → einde wereld.\n\n**4. Vietnam-oorlog** *(1955-1975)* — bekendste proxy-oorlog:\n\n• Noord-Vietnam *(communistisch)* vs Zuid-Vietnam *(westers gesteund)*.\n• **VS hielp Zuid** met soldaten + bommen.\n• 1965: ~500.000 VS-soldaten in Vietnam.\n• Veel verzet thuis VS *('Stop de oorlog!')*.\n• **My Lai-bloedbad** *(1968)*: VS-soldaten doodden 500 burgers.\n• Beelden op TV: eerste 'tv-oorlog'.\n• **Vietnam won**: VS trok zich terug 1973-1975.\n• Vereniging: heel Vietnam communistisch onder Hanoi.\n• Doden: ~3 miljoen, vooral Vietnamezen.\n\n**Iconische foto's**:\n• **Naakt meisje, brandwonden van napalm** *(1972, Phan Thi Kim Phuc)*.\n• **Saigon-executie** *(1968)*.\n• **Helikopter-evacuatie ambassade VS** *(1975)*.\n\n**Hippie-beweging + tegenstand**:\n• Jongeren tegen oorlog.\n• 'Make love, not war'.\n• Beatmuziek + folk *(Bob Dylan, Joan Baez)*.\n• **Woodstock** *(1969)* = festival.\n• Vredesteken **✌️** populair.\n\n**5. Andere proxy-oorlogen**:\n• **Korea-oorlog** *(1950-53)*: Noord vs Zuid Korea — nog steeds gedeeld.\n• **Afghanistan** *(1979-89)*: USSR-invasie — verloren.\n• **Angola, Mozambique, Vietnam, Cuba, Nicaragua, El Salvador** — vele.\n\n**6. Olympische Spelen-boycot** *(1980 + 1984)*:\n• 1980 Moskou: VS + 65 landen weg uit protest tegen invasie Afghanistan.\n• 1984 Los Angeles: USSR + 14 landen weg uit wraak.\n• Sport + politiek gemengd.\n\n**Cito-feitje**:\nDe **Cubaanse Rakettencrisis** *(13-28 okt 1962)* was zo gevaarlijk dat **Russische onderzeeërs orders hadden om kernraketten af te vuren als hun communicatie weg zou vallen**. Eén officier — **Vasili Arkhipov** — weigerde + zo verhinderde mogelijk **Wereldoorlog III**. Hij wordt 'de man die de wereld redde' genoemd.",
    checks: [
      {
        q: "Wanneer **Berlijnse Muur gebouwd**?",
        options: ["1961", "1945", "1989", "Nooit"],
        answer: 0,
        wrongHints: [null, "Te vroeg.", "Toen viel hij.", "Wel."],
      },
      {
        q: "Wat was **Cuba-crisis** (1962)?",
        options: ["USSR-raketten op Cuba, bijna kernoorlog", "Echte oorlog", "Spel", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Werd voorkomen.", "Niet.", "Wel."],
      },
      {
        q: "Wie won **Vietnam-oorlog**?",
        options: ["Noord-Vietnam (communistisch)", "VS", "Niemand", "Frankrijk"],
        answer: 0,
        wrongHints: [null, "Niet.", "Wel iemand.", "Wel eerder maar niet primair."],
      },
      {
        q: "Wat zei **Kennedy in Berlijn** (1963)?",
        options: ["'Ich bin ein Berliner'", "'We choose to go to the Moon'", "'I have a dream'", "Niets"],
        answer: 0,
        wrongHints: [null, "Toespraak NASA-doel.", "Martin Luther King.", "Wel."],
      },
    ],
  },
  {
    title: "Val Berlijnse Muur + 1990s + nu",
    explanation:
      "**Eind van Koude Oorlog** *(1985-1991)*:\n\n**Mikhail Gorbatsjov** *(USSR-leider 1985-1991)*:\n• Probeerde USSR te **hervormen**:\n  - **Glasnost** *(openheid)* — minder geheim.\n  - **Perestrojka** *(omstructurering)* — meer markt-economie.\n• Onder hem werden Oost-Europese communistische regeringen zwakker.\n• Won **Nobelprijs voor Vrede** 1990.\n\n**Revolutie 1989** 🎉:\n• **Polen** *(juni)*: Solidarność-beweging *(Lech Walesa)*.\n• **Hongarije** *(mei)*: opent grens naar Oostenrijk.\n• **DDR** *(Oost-Duitsland)*: enorme demonstraties.\n• **Tsjecho-Slowakije**: 'Fluwelen Revolutie' *(Vaclav Havel)*.\n• **Roemenië**: bloedig, dictator Ceausescu vermoord.\n• **Bulgarije, Albanië, Joegoslavië** ook.\n\n**Val van de Berlijnse Muur** *(9 november 1989)* 🎊:\n• DDR liet plotseling reizen toe.\n• Mensen aan beide kanten klommen op muur.\n• Met **hamers** + **pikhouwelen** sloegen ze muur stuk.\n• Wereldwijd live op TV.\n• Symbool van vrijheid.\n• **3 oktober 1990**: hereniging Duitsland.\n\n**Einde Sovjet-Unie** *(december 1991)*:\n• Russische republieken werden onafhankelijk *(Estland, Letland, Litouwen, Oekraïne, etc.)*.\n• USSR officieel **opgeheven 26 december 1991**.\n• **Boris Jeltsin** werd president nieuw Rusland.\n\n**1990s — 'einde geschiedenis'?**\n• Filosoof Francis Fukuyama: 'kapitalisme + democratie wonnen, einde van grote conflicten'.\n• Optimisme.\n• EU groeide.\n• Internet kwam op.\n\n**Maar:**\n• **Joegoslavië-oorlog** *(1991-2001)*: brutaal in voormalig Joegoslavië *(Bosnië, Kosovo)*. **Genocide Srebrenica** *(1995)* — NL-blauwhelmen konden niet voorkomen *(zwarte vlek geschiedenis NL)*.\n• **Rwanda-genocide** *(1994)*: 800.000 doden.\n• Probleem-zones bleven.\n\n**11 september 2001** *(9/11)* 🏢:\n• **Terreuraanslag** op VS.\n• 4 vliegtuigen gekaapt door **Al-Qaida** *(Osama bin Laden)*.\n• 2 vlogen in **Twin Towers** *(World Trade Center, NYC)*.\n• 1 in Pentagon.\n• 1 neergestort *(passagiers vochten terug)*.\n• **2977 doden** — meeste in 1 dag op VS-grondgebied sinds Pearl Harbor.\n• Wereld veranderde — 'War on Terror' begon.\n\n**War on Terror**:\n• VS viel **Afghanistan** binnen *(2001, Bin Laden)*.\n• VS viel **Irak** binnen *(2003, Saddam Hoessein)*.\n• Bin Laden gedood *(2011)*.\n• Verlies miljoenen levens + biljoenen $.\n\n**Andere conflicten 21e eeuw**:\n• **Arabische Lente** *(2011)*: opstanden Tunesië → Egypte → Libië → Syrië.\n• **Syrië-oorlog** *(2011+)*: nog steeds, miljoenen vluchtelingen.\n• **IS / Daesh** *(2014-2017)*: terreurgroep in Irak/Syrië.\n\n**Oekraïne**:\n• 2014: **Krim** door Rusland geannexeerd.\n• **24 februari 2022**: Rusland valt Oekraïne binnen *(grote oorlog!)*.\n• NL + EU steunen Oekraïne met wapens + geld.\n• Vluchtelingen *(~100.000 in NL)*.\n• Nog steeds gaande.\n\n**Israël + Palestina**:\n• Conflict sinds **1948** *(stichting Israël)*.\n• **7 oktober 2023**: Hamas-aanval op Israël.\n• Daarna Israëlisch antwoord op Gaza.\n• Veel doden — vooral burgers.\n• Internationaal protest + recht-zaken.\n\n**Klimaatcrisis** 🌍:\n• Niet 'oorlog' maar grootste uitdaging 21e eeuw.\n• Vereist wereldwijde samenwerking.\n• Generatie van **Greta Thunberg** *(2018+)*: jonge klimaat-activisten.\n\n**Corona-pandemie** *(2020-2022)* 🦠:\n• Virus uit China.\n• Wereldwijde lockdowns.\n• Miljoenen doden + economische crisis.\n• Toonde wereldwijde afhankelijkheid.\n\n**Veranderende wereld** *(2024)*:\n• China **groeiende grootmacht**.\n• VS-China rivaliteit *('nieuwe Koude Oorlog'?)*.\n• AI-revolutie *(ChatGPT, 2022+)*.\n• Migratie + ongelijkheid groeiend.\n• Populisme + polarisatie in democratieën.\n\n**Cito-feitje**:\nDe **Berlijnse Muur** stond **28 jaar** *(1961-1989)*. De wereld voorspelde dat de DDR nog **decennia** zou bestaan. Niemand zag de val aankomen. Geschiedenis is **niet voorspelbaar** — verandering kan ineens komen.",
    checks: [
      {
        q: "Wanneer **viel Berlijnse Muur**?",
        options: ["9 november 1989", "1961", "2001", "2022"],
        answer: 0,
        wrongHints: [null, "Toen gebouwd.", "9/11.", "Oekraine."],
      },
      {
        q: "Wie was **Gorbatsjov**?",
        options: ["USSR-leider die hervormde (Glasnost/Perestrojka)", "VS-president", "Kennedy", "NL-premier"],
        answer: 0,
        wrongHints: [null, "Niet.", "Eerder.", "Niet."],
      },
      {
        q: "Wat gebeurde op **11 september 2001**?",
        options: ["Aanslag Twin Towers NYC", "Berlijnse Muur viel", "Cuba-crisis", "Geen"],
        answer: 0,
        wrongHints: [null, "Eerder.", "1962.", "Wel iets."],
      },
      {
        q: "Wanneer **Rusland-Oekraïne grote oorlog**?",
        options: ["24 februari 2022", "2014", "1991", "1989"],
        answer: 0,
        wrongHints: [null, "Krim annexatie eerder.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — Koude Oorlog mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Koude Oorlog** = ?", options: ["VS-USSR spanning 1945-1991", "Echte oorlog", "Winter", "Geen"], answer: 0, wrongHints: [null, "Geen direct.", "Niet.", "Wel."] },
      { q: "Wanneer **Berlijnse Muur viel**?", options: ["1989", "1961", "1945", "2001"], answer: 0, wrongHints: [null, "Gebouwd.", "WO2-einde.", "9/11."] },
      { q: "Wie verhinderde **bijna kernoorlog Cuba 1962**?", options: ["Kennedy + Chroesjtsjov + Arkhipov", "Stalin", "Gorbatsjov", "Hitler"], answer: 0, wrongHints: [null, "Eerder.", "Later.", "WO2."] },
      { q: "Wat is **NAVO**?", options: ["Westerse militaire alliantie sinds 1949", "Sovjet-pact", "VN", "EU"], answer: 0, wrongHints: [null, "Warschau.", "Andere.", "Andere."] },
      { q: "Wie won **Vietnam-oorlog**?", options: ["Noord-Vietnam", "VS", "Frankrijk", "Niemand"], answer: 0, wrongHints: [null, "Verloor.", "Eerder weg.", "Wel."] },
      { q: "Wanneer **9/11**?", options: ["11 september 2001", "1989", "1945", "2022"], answer: 0, wrongHints: [null, "Muur viel.", "WO2.", "Oekraine."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const koudeOorlogModernPo = {
  id: "koude-oorlog-modern-po",
  title: "Koude Oorlog + moderne geschiedenis (Cito groep 7-8)",
  emoji: "🧊",
  level: "groep7-8",
  subject: "geschiedenis",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — geschiedenis (Tijdvak 10)",
  prerequisites: [
    { id: "wereldoorlog2-geschiedenis", title: "WO2", niveau: "klas3-4" },
    { id: "tijdvakken-nederland-po", title: "Tijdvakken NL", niveau: "1F" },
  ],
  intro:
    "Koude Oorlog + moderne geschiedenis voor Cito groep 7-8 — VS vs USSR (kapitalisme vs communisme + NAVO 1949 + Rutte 2024) + crises (Berlijnse Muur 1961, Cuba 1962 bijna-kernoorlog, Vietnam) + val Muur 1989 + Gorbatsjov + 9/11 + Oekraïne 2022 + huidige wereld. Tijdvak 10. ~15 min.",
  triggerKeywords: [
    "Koude Oorlog",
    "VS", "USSR", "Sovjet-Unie",
    "communisme", "kapitalisme",
    "NAVO", "Warschaupact",
    "Berlijnse Muur",
    "Cuba-crisis", "Kennedy",
    "Vietnam-oorlog",
    "Gorbatsjov", "perestrojka", "glasnost",
    "9/11", "Twin Towers", "Bin Laden",
    "Oekraïne", "Poetin",
  ],
  chapters,
  steps,
};

export default koudeOorlogModernPo;
