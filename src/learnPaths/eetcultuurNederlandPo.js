// Leerpad: Eetcultuur NL + invloeden - groep 6-8 cultuur.
// toets-relevant. 1F. 4 stappen.

const stepEmojis = ["🥔", "🐟", "🍛", "🏆"];

const chapters = [
  { letter: "A", title: "Hollandse keuken", emoji: "🥔", from: 0, to: 0 },
  { letter: "B", title: "Vis + brood + zuivel", emoji: "🐟", from: 1, to: 1 },
  { letter: "C", title: "Vreemde invloeden", emoji: "🍛", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Hollandse keuken — typisch NL",
    explanation:
      "**Nederlandse keuken** = vooral **eenvoudig + voedzaam**.\nGeschiedenis: protestantse cultuur *(geen vlees-feesten)* + **plattelands-eten**.\n\n**Typisch NL** *(gerechten + voedsel)*:\n\n**🥔 Stamppot**:\n• Aardappelen + groente *(boerenkool, zuurkool, andijvie, hutspot-wortel+ui)*.\n• Vaak met **rookworst** + jus.\n• Winterse maaltijd.\n• **Hutspot** = beroemd: tijdens **Beleg van Leiden** *(1574)* aten Leidenaren dit uit verlaten Spaanse kookpotten.\n• Op 3 oktober nog steeds **Leidens Ontzet**-feestje.\n\n**🍞 Erwtensoep / snert**:\n• Dikke groene soep met spliterwten + worst + spek.\n• Winterklassieker.\n• 'Lepel staat rechtop'-test.\n\n**🐟 Haring**:\n• Rauwe vis met ui en augurken.\n• 'Hollandse Nieuwe' *(eerste haring van seizoen, mei/juni)*.\n• Eten aan de **staart**, met je hoofd **achterover** *(beroemd plaatje)*.\n\n**🥐 Stroopwafels**:\n• 2 dunne wafels met **siroop** ertussen.\n• Uitgevonden Gouda 1810.\n• Leg je hem op een kop koffie of thee, dan wordt hij zacht.\n\n**🥧 Appeltaart / appelflap**:\n• Met kaneel + rozijnen.\n• Bijna verplicht op koffievisite.\n\n**🥖 Beschuit met muisjes**:\n• Bij geboorte baby — **roze** voor meisje, **blauw** voor jongen.\n• Sinds 17e eeuw.\n\n**🥞 Pannenkoeken**:\n• Dik + groot.\n• Met stroop, suiker, kaas, spek, fruit.\n• Vaak weekend-eten.\n\n**🍫 Hagelslag**:\n• Op brood — chocolade-hagel.\n• Bedacht door Venz in 1936 *(populair NL-merk)*.\n• Wereld-eigenaardig.\n\n**🍪 Speculaas**:\n• Sint-Maarten / Sinterklaas.\n• Met kruidnagel + kaneel + nootmuskaat.\n\n**🌰 Pepernoten + kruidnoten**:\n• Bij Sinterklaas.\n\n**🥩 Bitterballen / kroketten / frikandellen**:\n• Snack-frituur.\n• Met mosterd, mayo.\n\n**🍟 Patat / friet**:\n• Vaak met **mayo** *(typisch NL)*, soms 'speciaal' *(curry+ui+mayo)*.\n• België en Frankrijk claimen allebei de uitvinding van friet.\n• 'Patat' zeg je vooral in het noorden, 'friet' in het zuiden.\n\n**Eetcultuur** *(NL)*:\n\n• **Drie maaltijden per dag** + tussendoortjes.\n• **Ontbijt**: brood met beleg + glas melk.\n• **Lunch**: brood met beleg *(boterham)*.\n• **Avondeten**: 'AGV' = Aardappel + Groente + Vlees *(traditioneel)*. Tegenwoordig vaak vegetarisch.\n• **Koffie** met **koekje** = sociaal.\n• Op **borrel** *(eind dag)* bier/wijn + zoutjes/kaas.\n\n**Modern NL**:\n• Internationaler — pizza, sushi, pasta, kebab.\n• **Bezorgcultuur** *(Thuisbezorgd, Uber Eats)*.\n• Minder vlees *(klimaat + dierenwelzijn)*.\n• Vegetarisch + veganistisch groeit.\n• 'Bowls', poke, smoothies = trend.\n\n**Toets-feitje**:\nNederland eet **meer kaas per persoon** dan bijna elk land — **~14,3 kg per jaar**. Beroemd: **Goudse kaas** *(genaamd naar stad Gouda — Goudse Markt sinds 1395)*, **Edammer**, **Leerdammer**, **Beemster**, **Maasdammer**.",
    checks: [
      {
        q: "Welke is **typisch NL-stamppot**?",
        options: ["Hutspot", "Sushi", "Pasta", "Pizza"],
        answer: 0,
        wrongHints: [null, "Japans.", "Italiaans.", "Italiaans."],
      },
      {
        q: "Wat is **Hollandse Nieuwe**?",
        options: ["De eerste haring van het seizoen", "De eerste kaas van het nieuwe jaar", "Het eerste brood van de nieuwe oogst", "De eerste aardbeien van het seizoen"],
        answer: 0,
        wrongHints: [null, "Hollandse Nieuwe koop je niet bij de kaasboer. Waar dan wel?", "Hollandse Nieuwe koop je niet bij de bakker. Waar dan wel?", "Hollandse Nieuwe koop je niet bij de groenteboer. Waar dan wel?"],
      },
      {
        q: "Bij **geboorte baby** eet je?",
        options: ["Beschuit met muisjes", "Stamppot met rookworst", "Patat met mayonaise", "Oliebollen met suiker"],
        answer: 0,
        wrongHints: [null, "Stevige winterkost — past dat bij een feestelijk kraambezoek?", "Snackbar-eten — hoort daar een geboortetraditie bij?", "Oliebollen eet je op oudejaarsavond. Wat krijg je op kraambezoek?"],
      },
      {
        q: "Hoeveel **kaas per persoon NL** per jaar?",
        options: ["~14 kg", "1 kg", "100 kg", "50 kg"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Te veel."],
      },
    ],
  },
  {
    title: "Vis + brood + zuivel — voedselbasis",
    explanation:
      "**Vis** 🐟:\n\nNL is **zee-land** — vissen al sinds Vikingen-tijd.\n\n**Bekende vis**:\n• **Haring**: koud + zout + ingelegd.\n• **Kabeljauw**: in 'kibbeling' *(NL fastfood)*.\n• **Schol**: platvis.\n• **Paling**: gerookt — beroemd uit Volendam.\n• **Mossels**: vooral Zeeland *(Yerseke = mosselhoofdstad)*.\n• **Garnalen**: Hollandse, kleine, zoet.\n• **Zalm**: tegenwoordig veel gekweekt.\n\n**Plekken**:\n• **Visafslag** in havensteden *(IJmuiden, Scheveningen, Urk)*.\n• **Markten** *(Albert Cuyp Amsterdam)*.\n• **Zuiderzee-museum** *(Enkhuizen)*: vis-erfgoed.\n\n**Vis is gezond**:\n• Omega-3-vetzuren.\n• Eiwit.\n• Vitamine D.\n• 1 keer per week vis aanbevolen.\n\n**Brood** 🍞:\n\nNL is **brood-land** — eten al millennia.\n\n**Belangrijke broodsoorten**:\n• **Witbrood**: vooral wit meel.\n• **Bruinbrood**: deels volkoren.\n• **Volkoren**: hele graankorrel *(gezondst)*.\n• **Krenten + rozijnen-brood**: zoet.\n• **Roggebrood**: zwart, vol.\n• **Pistolet, bolletje, puntje**: lokale broodjes.\n\n**Bakkerijen**:\n• ~3500 bakkerijen NL.\n• Veel **familiebakker** *(generaties)*.\n• Supermarkt heeft ook bakkerij-deel.\n• **Ambachtelijke bakkers** *(vaak met biologisch meel)*.\n\n**Eet-traditie**:\n• **Boterham** *(gesneden brood + beleg)* is NL-uitvinding *(woord komt van 'boter' + 'ham', een oud woord voor 'stuk')*.\n• 6-8 sneetjes brood per persoon per dag.\n• Beleg: kaas, ham, hagelslag, jam, pasta, pindakaas, smeerkaas, ei.\n\n**Zuivel** 🥛:\n\n**NL is kaas-grootmacht**:\n• 1,7 miljoen melkkoeien.\n• 670 kg melk per persoon per jaar.\n• Kaas-export: €4 miljard/jaar.\n\n**Beroemde kazen**:\n\n**Gouda** *(Goudse)*:\n• Genaamd naar stad **Gouda**.\n• ~50% van NL-kaasproductie.\n• Bekend Gouda-markt sinds 1395 — toeristisch *(boeren-acteurs gooien kazen).*\n• Soorten: jong, belegen, oud, extra-oud.\n\n**Edammer**:\n• **Rood waxlaagje**.\n• Vroeger vooral export.\n\n**Leerdammer**:\n• **Gaten** in kaas *(zoals Emmentaler)*.\n• Modern *(jaren '70)*.\n\n**Maasdammer**: vergelijkbaar.\n**Beemster**: top-kwaliteit, premium.\n\n**Andere zuivel**:\n• **Yoghurt + kwark** *(populair ontbijt)*.\n• **Hagelslag** = chocolade op brood.\n• **Vla** *(NL-uitvinding, zoete-pap)*.\n• **Hangop** *(verdikte yoghurt)*.\n\n**Vleeswaren**:\n\n• **Hamlap**.\n• **Worst** *(rook, lever, knak)*.\n• **Rosbief**.\n• **Snijworst**.\n• **Vooral varken + rund**.\n• 38 kg vlees per persoon per jaar — sterk dalend *(was 86 kg in 1980)*.\n\n**Klimaat-effect**:\nVlees + zuivel = **veel CO₂**. Veel mensen kiezen voor minder.\n\n**Toets-feitje**:\n**Hagelslag** = NL-uitvinding *(Venz, 1936)* en bestaat in andere landen hooguit als import-curiositeit. **Pindakaas** is in NL ook heel populair *(Calvé sinds 1948)*. Ouders **aan de overkant van de Atlantische Oceaan** kijken **vreemd op** als hun NL-kinderen hagelslag op brood willen.",
    checks: [
      {
        q: "Welke is een **typisch NL-vis**?",
        options: ["Haring", "Sushi-tonijn", "Steur", "Zwaardvis"],
        answer: 0,
        wrongHints: [null, "Japans.", "Russisch.", "Zwaardvis leeft in warme zeeën."],
      },
      {
        q: "Welke kaas heeft **rood waxlaagje**?",
        options: ["Edammer", "Goudse", "Leerdammer", "Brie"],
        answer: 0,
        wrongHints: [null, "Andere.", "Andere.", "Frans."],
      },
      {
        q: "Wat is **vla**?",
        options: ["Een zoet toetje, een soort pap", "Een zachte vis uit de Noordzee", "Een zacht broodje met een korst", "Een hartige kaas om te smeren"],
        answer: 0,
        wrongHints: [null, "Waar staat vla in de supermarkt: bij de vis of in het koelvak met melk?", "Kun je vla snijden, zoals brood?", "Kaas is hartig — en vla? Proef het in gedachten."],
      },
      {
        q: "Wat is **hagelslag**?",
        options: ["Chocoladekorrels op brood", "Zoute dropjes in een zakje", "Gerookte vis op een broodje", "Geraspte kaas over de pasta"],
        answer: 0,
        wrongHints: [null, "Drop eet je los uit een zakje. Wat doe je met hagelslag?", "Is hagelslag hartig of zoet?", "Hagelslag strooi je ergens op. Waarop, en hoe smaakt het?"],
      },
    ],
  },
  {
    title: "Vreemde invloeden — Indonesisch, Surinaams, modern",
    explanation:
      "Door **koloniaal verleden** + migratie heeft NL-eten veel invloeden.\n\n**Indonesisch** 🍛 *(grote invloed, sinds VOC + Nederlands-Indië)*:\n\n• **Rijsttafel** = NL-uitvinding! Combinatie van 20+ Indonesische gerechten.\n• **Nasi goreng** *(gebakken rijst)*.\n• **Bami goreng** *(gebakken noedels)*.\n• **Saté** *(spiesjes met pindasaus)*.\n• **Gado-gado** *(groentesalade met pindasaus)*.\n• **Sambal** *(pittige saus)*.\n• **Pisang goreng** *(gefrituurde banaan)*.\n• **Loempia** *(gefrituurde rol met groente)*.\n• Toko's *(Indonesische supermarkten)* in elke stad.\n\n**Surinaams** 🍲:\n\n• **Roti** *(plat brood met gevulde groenten of vlees)*.\n• **Bara** *(gefrituurd erwten-meel)*.\n• **Pom** *(gerecht met pomtaijer-knol)*.\n• **Bakabana** *(gefrituurde banaan)*.\n• **Pikien** *(jonge vis)*.\n• In Amsterdam-Zuidoost veel Surinaamse restaurants.\n\n**Antilliaans** 🌴:\n\n• **Pastechi** *(gefrituurd pasteitje met vlees)*.\n• **Kibbeling**-versies.\n• **Funchi** *(maïs-pap)*.\n\n**Turks** 🥙:\n\n• **Döner** + **kebab**.\n• **Lahmacun** *(Turkse pizza)*.\n• **Köfte** *(gehakt)*.\n• **Baklava** *(zoet)*.\n• In elke stad — populair fastfood.\n\n**Marokkaans**:\n\n• **Tajine** *(stoofschotel)*.\n• **Couscous**.\n• **Harira** *(soep)*.\n• **Pannenkoekjes** *(msemmen)*.\n• **Harira** eet je vaak bij het breken van het vasten tijdens de **Ramadan**.\n\n**Aziatisch** *(China, Vietnam, Thailand)*:\n\n• **Chinese restaurants** sinds de jaren 1920 *(eerst voor zeemannen in Rotterdam)*.\n• **Babi pangang** *(NL-Chinees gerecht)*.\n• **Tjap tjoy**, **foe yong hai** *(beide bedacht voor NL-smaak)*.\n• **Sushi** populair sinds de jaren 2000.\n• **Pho** *(Vietnamese soep)*.\n• **Thaise curry's**.\n\n**Italiaans** 🍕:\n\n• **Pizza** + **pasta** universeel.\n• Pizza-ketens overal.\n• Bezorging populair.\n\n**Mediterraan**:\n\n• **Falafel + hummus** *(Israëlisch/Libanees)*.\n• **Wraps**.\n• Verspreid door heel NL.\n\n**Multiculturele steden**:\n\nIn Amsterdam, Rotterdam, Den Haag, Utrecht kun je in 1 wijk eten van **20+ landen**. Onderdeel van NL-cultuur geworden.\n\n**Trends 2024**:\n\n• **Plant-based** *(plantaardig)* — Beyond Meat, vegan kaas.\n• **Bowls + buddha bowls** *(quinoa + groente + saus)*.\n• **Sushi** nog steeds populair.\n• **Smoothies + acai-bowls**.\n• **Avocado-toast** *(Instagram-eten)*.\n• **Korea-Pop-eten**: bibimbap, k-bbq.\n• **Wereldwinkel** *(eerlijke handel)*.\n\n**Eet-trends voor klimaat**:\n• Minder vlees *(vooral rood)*.\n• Plantaardige eiwitten *(soja, tempeh, peulvruchten)*.\n• Lokaal + seizoensgebonden *(geen ananas in januari)*.\n• Te Goed Om Weg Te Gooien-apps tegen verspilling.\n\n**Feestdagen + eten**:\n\n• **Oudejaarsavond**: oliebollen + appelflappen.\n• **Pasen**: lamsvlees + paaseieren.\n• **Kerst**: gourmetten / kalkoen.\n• **Koningsdag**: BBQ + tompoes *(oranje)*.\n• **Sinterklaas**: pepernoten + chocoladeletter + speculaas.\n• **Suikerfeest** *(eind Ramadan)*: zoetigheid.\n\n**Toets-feitje**:\nDe **rijsttafel** zoals we die in NL kennen, bestaat **niet** in Indonesië zelf. Hij werd bedacht door Nederlanders in koloniaal Nederlands-Indië *(eind 19e eeuw)* om vele Indonesische gerechten ineens te serveren. In Indonesië eet men 1 of 2 gerechten per maaltijd. Echte rijsttafel = **NL-Indische uitvinding**.",
    checks: [
      {
        q: "Wat is **rijsttafel**?",
        options: ["Maaltijd met veel kleine Indonesische gerechten", "Maaltijd met één groot Surinaams rijstgerecht", "Maaltijd met kleine Japanse sushi-hapjes", "Maaltijd met een grote Chinese rijstsoep"],
        answer: 0,
        wrongHints: [null, "Let op het land én op het aantal gerechten.", "Let op het land én op het aantal gerechten.", "Let op het land én op het aantal gerechten."],
      },
      {
        q: "Welke is **Surinaams**?",
        options: ["Roti", "Sushi", "Pizza", "Stamppot"],
        answer: 0,
        wrongHints: [null, "Japans.", "Italiaans.", "Hollands."],
      },
      {
        q: "Welke is **Indonesisch**?",
        options: ["Nasi goreng", "Roti", "Lahmacun", "Pizza"],
        answer: 0,
        wrongHints: [null, "Surinaams.", "Turks.", "Italiaans."],
      },
      {
        q: "Wat eten **Surinamers** vaak?",
        options: ["Roti", "Stamppot", "Sushi", "Pizza"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — eetcultuur mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Welke is **typisch Hollands**?", options: ["Stamppot + haring", "Sushi", "Pizza", "Tajine"], answer: 0, wrongHints: [null, "Japans.", "Italiaans.", "Marokkaans."] },
      { q: "Wat is **hagelslag**?", options: ["Chocoladekorrels op brood", "Gerookte vis op een cracker", "Gekruide stukjes vlees op brood", "Geraspte kaas over de pasta"], answer: 0, wrongHints: [null, "Is hagelslag hartig of zoet?", "Hagelslag is geen vleeswaar. Waarvan is het gemaakt?", "Kaas snijd of rasp je — waarvan is hagelslag gemaakt?"] },
      { q: "Welke is **Indonesisch**?", options: ["Saté", "Roti", "Tajine", "Pizza"], answer: 0, wrongHints: [null, "Surinaams.", "Marokkaans.", "Italiaans."] },
      { q: "**Goudse kaas** komt uit?", options: ["Gouda", "Italië", "Frankrijk", "België"], answer: 0, wrongHints: [null, "Niet.", "Brie wel.", "Kijk goed naar de naam van de kaas."] },
      { q: "**Vis** aanbevolen aantal per week?", options: ["1 keer", "Dagelijks", "Nooit", "Maandelijks"], answer: 0, wrongHints: [null, "Te veel.", "Vis is juist gezond.", "Te weinig."] },
      { q: "**Stroopwafel** uit?", options: ["Gouda", "Amsterdam", "Frankrijk", "Indonesië"], answer: 0, wrongHints: [null, "In de hoofdstad kwamen ze pas later — waar stond de éérste stroopwafelbakker?", "Oer-Hollandse uitvinding — zit je wel in het goede land?", "Denk aan een Hollandse bakkersstad, niet aan Azië."] },
      { q: "Welk NL-gerecht eet je vaak op **5 december (Sinterklaas)**?", options: ["Pepernoten", "Pizza", "Sushi", "Curry"], answer: 0, wrongHints: [null, "Italiaans.", "Japans.", "Aziatisch."] },
      { q: "**Boerenkool** wordt vaak gemengd met aardappel tot ___?", options: ["Stamppot", "Soep", "Salade", "Brood"], answer: 0, wrongHints: [null, "Niet primair.", "Niet relevant.", "Niet primair."] },
      { q: "Welke **drank** drinken NL-kinderen vaak bij ontbijt?", options: ["Melk of jus d'orange", "Cola of energiedrank", "Zwarte koffie of espresso", "Warme soep of bouillon"], answer: 0, wrongHints: [null, "Veel suiker en soms cafeïne — geven ouders dat bij het ontbijt?", "Koffie is niet voor kinderen.", "Soep eet je in Nederland meestal bij het avondeten."] },
      { q: "Wat is **Surinaamse roti**?", options: ["Plat brood met kerrie-vulling", "Zachte kaas met kruiden erin", "Tropisch fruit met een harde schil", "Dikke soep met bonen en spek"], answer: 0, wrongHints: [null, "Is roti een zuivelproduct?", "Groeit roti aan een boom?", "Eet je roti met een lepel uit een kom?"] },
      { q: "Hoeveel maaltijden per dag eet **gemiddelde NL'er**?", options: ["3", "1", "6", "10"], answer: 0, wrongHints: [null, "Te weinig.", "Te veel.", "Te veel."] },
      { q: "Wat zijn **bitterballen**?", options: ["Gefrituurde ragoutballetjes", "Bittere snoepballetjes met drop", "Gebakken visballetjes met saus", "Kleine ronde bittere vruchten"], answer: 0, wrongHints: [null, "De naam klinkt bitter, maar eet je ze als snoep?", "Zit er vis in een bitterbal?", "Groeien bitterballen aan een struik?"] },
      { q: "**Drop** is een typische NL-snoep met smaak van ___?", options: ["Zoethout-extract", "Chocolade", "Fruit", "Karamel"], answer: 0, wrongHints: [null, "Andere smaak.", "Andere snoep.", "Niet primair."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const eetcultuurNederlandPo = {
  id: "eetcultuur-nederland-po",
  title: "Eetcultuur NL + invloeden (Doorstroomtoets groep 6-8)",
  emoji: "🥔",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — cultuur / geschiedenis",
  prerequisites: [
    { id: "gezonde-voeding-po", title: "Gezonde voeding", niveau: "1F" },
  ],
  intro:
    "Eetcultuur NL voor Doorstroomtoets groep 6-8 — Hollandse keuken (stamppot/haring/stroopwafels) + vis+brood+zuivel (kazen Gouda/Edam/Leerdam, 14 kg per persoon) + invloeden uit koloniaal verleden (rijsttafel = NL-Indische uitvinding, roti Suriname) + Turks/Marokkaans/Italiaans + trends 2024 (plant-based). ~15 min.",
  triggerKeywords: [
    "eetcultuur", "Nederlands eten",
    "stamppot", "hutspot", "haring",
    "stroopwafel", "pindakaas", "hagelslag",
    "Goudse kaas", "Edammer",
    "rijsttafel", "Indonesisch", "nasi goreng",
    "Surinaams", "roti",
    "Turkse", "Marokkaanse",
    "plant-based", "vegetarisch",
  ],
  chapters,
  steps,
};

export default eetcultuurNederlandPo;
