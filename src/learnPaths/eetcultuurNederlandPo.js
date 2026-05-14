// Leerpad: Eetcultuur NL + invloeden - groep 6-8 cultuur.
// Cito-relevant. 1F. 4 stappen.

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
      "**Nederlandse keuken** = vooral **eenvoudig + voedzaam**.\nGeschiedenis: protestantse cultuur *(geen vlees-feesten)* + **plattelands-eten**.\n\n**Typisch NL** *(gerechten + voedsel)*:\n\n**🥔 Stamppot**:\n• Aardappelen + groente *(boerenkool, zuurkool, andijvie, hutspot-wortel+ui)*.\n• Vaak met **rookworst** + jus.\n• Winterse maaltijd.\n• **Hutspot** = beroemd: tijdens **Beleg van Leiden** *(1574)* aten Leidenaren dit uit verlaten Spaanse kookpotten.\n• Op 3 oktober nog steeds **Leidens Ontzet**-feestje.\n\n**🍞 Erwtensoep / snert**:\n• Dikke groene soep met spliterwten + worst + spek.\n• Winterklassieker.\n• 'Lepel staat rechtop'-test.\n\n**🐟 Haring**:\n• Rauwe vis met ui en augurken.\n• 'Hollandse Nieuwe' *(eerste haring van seizoen, mei/juni)*.\n• Eten met **kop omhoog** *(beroemd plaatje)*.\n\n**🥐 Stroopwafels**:\n• 2 dunne wafels met **siroop** ertussen.\n• Uitgevonden Gouda 1810.\n• Op koffie-thee gewacht = wordt zacht.\n\n**🥧 Appeltaart / appelflap**:\n• Met kaneel + rozijnen.\n• Bijna verplicht op koffievisite.\n\n**🥖 Beschuit met muisjes**:\n• Bij geboorte baby — **roze** voor meisje, **blauw** voor jongen.\n• Sinds 17e eeuw.\n\n**🥞 Pannenkoeken**:\n• Dik + groot.\n• Met stroop, suiker, kaas, spek, fruit.\n• Vaak weekend-eten.\n\n**🍫 Hagelslag**:\n• Op brood — chocolade-hagel.\n• Bedacht door Venz in 1936 *(populair NL-merk)*.\n• Wereld-eigenaardig.\n\n**🍪 Speculaas**:\n• Sint-Maarten / Sinterklaas.\n• Met kruidnagel + kaneel + nootmuskaat.\n\n**🌰 Pepernoten + kruidnoten**:\n• Bij Sinterklaas.\n\n**🥩 Bitterballen / kroketten / frikandellen**:\n• Snack-frituur.\n• Met mosterd, mayo.\n\n**🍟 Patat / friet**:\n• Vaak met **mayo** *(typisch NL)*, soms 'speciaal' *(curry+ui+mayo)*.\n• Belgen + NL hebben friet uitgevonden.\n• 'Frietsaus' = wat patat noem je in noorden.\n\n**Eetcultuur** *(NL)*:\n\n• **Drie maaltijden per dag** + tussendoortjes.\n• **Ontbijt**: brood met beleg + glas melk.\n• **Lunch**: brood met beleg *(boterham)*.\n• **Avondeten**: 'AGV' = Aardappel + Groente + Vlees *(traditioneel)*. Tegenwoordig vaak vegetarisch.\n• **Koffie** met **koekje** = sociaal.\n• Op **borrel** *(eind dag)* bier/wijn + zoutjes/kaas.\n\n**Modern NL**:\n• Internationaler — pizza, sushi, pasta, kebab.\n• **Bezorgcultuur** *(Thuisbezorgd, Uber Eats)*.\n• Minder vlees *(klimaat + dierenwelzijn)*.\n• Vegetarisch + veganistisch groeit.\n• 'Bowls', poke, smoothies = trend.\n\n**Cito-feitje**:\nNederland eet **meer kaas per persoon** dan bijna elk land — **~14,3 kg per jaar**. Beroemd: **Goudse kaas** *(genaamd naar stad Gouda — Goudse Markt sinds 1395)*, **Edammer**, **Leerdammer**, **Beemster**, **Maasdammer**.",
    checks: [
      {
        q: "Welke is **typisch NL-stamppot**?",
        options: ["Hutspot (wortel+ui)", "Sushi", "Pasta", "Pizza"],
        answer: 0,
        wrongHints: [null, "Japans.", "Italiaans.", "Italiaans."],
      },
      {
        q: "Wat is **Hollandse Nieuwe**?",
        options: ["Eerste haring van seizoen (mei/juni)", "Soort kaas", "Vlees", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Wel."],
      },
      {
        q: "Bij **geboorte baby** eet je?",
        options: ["Beschuit met muisjes", "Stamppot", "Friet", "Pizza"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Hoeveel **kaas per persoon NL** per jaar?",
        options: ["~14 kg", "1 kg", "100 kg", "Geen"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Wel."],
      },
    ],
  },
  {
    title: "Vis + brood + zuivel — voedselbasis",
    explanation:
      "**Vis** 🐟:\n\nNL is **zee-land** — vissen al sinds Vikingen-tijd.\n\n**Bekende vis**:\n• **Haring**: koud + zout + ingelegd.\n• **Kabeljauw**: in 'kibbeling' *(NL fastfood)*.\n• **Schol**: platvis.\n• **Paling**: gerookt — beroemd uit Volendam.\n• **Mossels**: vooral Zeeland *(Yerseke = mosselhoofdstad)*.\n• **Garnalen**: Hollandse, kleine, zoet.\n• **Zalm**: tegenwoordig veel gekweekt.\n\n**Plekken**:\n• **Visafslag** in havensteden *(IJmuiden, Scheveningen, Urk)*.\n• **Markten** *(Albert Cuyp Amsterdam)*.\n• **Zuiderzee-museum** *(Enkhuizen)*: vis-erfgoed.\n\n**Vis is gezond**:\n• Omega-3-vetzuren.\n• Eiwit.\n• Vitamine D.\n• 1 keer per week vis aanbevolen.\n\n**Brood** 🍞:\n\nNL is **brood-land** — eten al millennia.\n\n**Belangrijke broodsoorten**:\n• **Witbrood**: vooral wit meel.\n• **Bruinbrood**: deels volkoren.\n• **Volkoren**: hele graan *(gezondst)*.\n• **Krenten + rozijnen-brood**: zoet.\n• **Roggebrood**: zwart, vol.\n• **Pistolet, bolletje, puntje**: lokale broodjes.\n\n**Bakkerijen**:\n• ~3500 bakkerijen NL.\n• Veel **familiebakker** *(generaties)*.\n• Supermarkt heeft ook bakkerij-deel.\n• **Hovenier-meels** *(eko-meel uit oude oven)*.\n\n**Eet-traditie**:\n• **Boterham** *(gesneden brood + beleg)* is NL-uitvinding *(woord komt van 'butter ham' — boter + ham)*.\n• 6-8 sneetjes brood per persoon per dag.\n• Beleg: kaas, ham, hagelslag, jam, pasta, pindakaas, smeerkaas, ei.\n\n**Zuivel** 🥛:\n\n**NL is kaas-grootmacht**:\n• 1,7 miljoen melkkoeien.\n• 670 kg melk per persoon per jaar.\n• Kaas-export: €4 miljard/jaar.\n\n**Beroemde kazen**:\n\n**Gouda** *(Goudse)*:\n• Genaamd naar stad **Gouda**.\n• ~50% van NL-kaasproductie.\n• Bekend Gouda-markt sinds 1395 — toeristisch *(boeren-acteurs gooien kazen).*\n• Soorten: jong, belegen, oud, extra-oud.\n\n**Edammer**:\n• **Rood waxlaagje**.\n• Vroeger vooral export.\n\n**Leerdammer**:\n• **Gaten** in kaas *(zoals Gruyère)*.\n• Modern *(1970s)*.\n\n**Maasdammer**: similar.\n**Beemster**: top-kwaliteit, premium.\n\n**Andere zuivel**:\n• **Yoghurt + kwark** *(populair ontbijt)*.\n• **Hagelslag** = chocolade op brood.\n• **Vla** *(NL-uitvinding, zoete-pap)*.\n• **Hangop** *(verdikte yoghurt)*.\n\n**Vleeswaren**:\n\n• **Hamlap**.\n• **Worst** *(rook, lever, knak)*.\n• **Rosbief**.\n• **Snijworst**.\n• **Vooral varken + rund**.\n• 38 kg vlees per persoon per jaar — sterk dalend *(was 86 kg in 1980)*.\n\n**Klimaat-effect**:\nVlees + zuivel = **veel CO₂**. Veel mensen kiezen voor minder.\n\n**Cito-feitje**:\n**Pindakaas** = NL-uitvinding *(1948 door Calvé-De Betouw)*. **Hagelslag** ook *(Venz, 1936)*. Beide niet in andere landen of hooguit als import-curiositeit. Ouders **boven Atlantische Oceaan** kijken **vreemd** als hun NL-kinderen hagelslag op brood willen.",
    checks: [
      {
        q: "Welke is een **typisch NL-vis**?",
        options: ["Haring", "Sushi-tonijn", "Steur", "Niet specifiek"],
        answer: 0,
        wrongHints: [null, "Japans.", "Russisch.", "Wel."],
      },
      {
        q: "Welke kaas heeft **rood waxlaagje**?",
        options: ["Edammer", "Goudse", "Leerdammer", "Brie"],
        answer: 0,
        wrongHints: [null, "Andere.", "Andere.", "Frans."],
      },
      {
        q: "Wat is **vla**?",
        options: ["Zoete-pap NL-uitvinding", "Vis", "Soort brood", "Kaas"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wat is **hagelslag**?",
        options: ["Chocolade-hagel op brood (NL-uitvinding 1936)", "Snoep", "Vis", "Kaas"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Vreemde invloeden — Indonesisch, Surinaams, modern",
    explanation:
      "Door **koloniaal verleden** + migratie heeft NL-eten veel invloeden.\n\n**Indonesisch** 🍛 *(grote invloed, sinds VOC + Nederlands-Indië)*:\n\n• **Rijsttafel** = NL-uitvinding! Combinatie van 20+ Indonesische gerechten.\n• **Nasi goreng** *(gebakken rijst)*.\n• **Bami goreng** *(gebakken noedels)*.\n• **Saté** *(spiesjes met pindasaus)*.\n• **Gado-gado** *(groentesalade met pindasaus)*.\n• **Sambal** *(pittige saus)*.\n• **Pisang goreng** *(gefrituurde banaan)*.\n• **Loempia** *(spring-roll)*.\n• Toko's *(Indonesische supermarkten)* in elke stad.\n\n**Surinaams** 🍲:\n\n• **Roti** *(plat brood met gevulde groenten of vlees)*.\n• **Bara** *(gefrituurd erwten-meel)*.\n• **Pom** *(gerecht met pomtaijer-knol)*.\n• **Bakabana** *(gefrituurde banaan)*.\n• **Pikien** *(jonge vis)*.\n• In Amsterdam-Zuidoost veel Surinaamse restaurants.\n\n**Antilliaans** 🌴:\n\n• **Pastechi** *(broodje met vlees)*.\n• **Kibbeling**-versies.\n• **Funchi** *(maïs-pap)*.\n\n**Turks** 🥙:\n\n• **Döner** + **kebab**.\n• **Lahmacun** *(Turkse pizza)*.\n• **Köfte** *(gehakt)*.\n• **Baklava** *(zoet)*.\n• In elke stad — populair fastfood.\n\n**Marokkaans**:\n\n• **Tajine** *(stoofschotel)*.\n• **Couscous**.\n• **Harira** *(soep)*.\n• **Pannenkoekjes** *(msemmen)*.\n• Volkstuintjes met **harira**-stickers.\n\n**Aziatisch** *(China, Vietnam, Thailand)*:\n\n• **Chinese restaurants** sinds jaren 1950 *(eerst voor zeemannen Rotterdam)*.\n• **Babi pangang** *(NL-Chinees gerecht)*.\n• **Tjap tjoy**, **foe yong hai** *(beide bedacht voor NL-smaak)*.\n• **Sushi** populair sinds 2000s.\n• **Pho** *(Vietnamese soep)*.\n• **Thaise curry's**.\n\n**Italiaans** 🍕:\n\n• **Pizza** + **pasta** universeel.\n• Pizza-ketens overal.\n• Bezorging populair.\n\n**Mediterraan**:\n\n• **Falafel + hummus** *(Israëlisch/Libanees)*.\n• **Wraps**.\n• Verspreid door heel NL.\n\n**Multiculturele steden**:\n\nIn Amsterdam, Rotterdam, Den Haag, Utrecht kun je in 1 wijk eten van **20+ landen**. Onderdeel van NL-cultuur geworden.\n\n**Trends 2024**:\n\n• **Plant-based** *(plantaardig)* — Beyond Meat, vegan kaas.\n• **Bowls + buddha bowls** *(quinoa + groente + saus)*.\n• **Sushi** populair (sinds 2010).\n• **Smoothies + acai-bowls**.\n• **Avocado-toast** *(Instagram-eten)*.\n• **Korea-Pop-eten**: bibimbap, k-bbq.\n• **Wereldwinkel** *(eerlijke handel)*.\n\n**Eet-trends voor klimaat**:\n• Minder vlees *(vooral rood)*.\n• Plantaardige eiwitten *(soja, tempeh, peulvruchten)*.\n• Lokaal + seizoens *(geen ananas in januari)*.\n• Te Goed Om Weg Te Gooien-apps tegen verspilling.\n\n**Feestdagen + eten**:\n\n• **Nieuwjaar**: oliebollen + appelflappen.\n• **Pasen**: lamsvlees + paaseieren.\n• **Kerst**: gourmetten / kalkoen.\n• **Koningsdag**: BBQ + tompoes *(oranje)*.\n• **Sinterklaas**: pepernoten + chocoladeletter + speculaas.\n• **Suikerfeest** *(eind Ramadan)*: zoetigheid.\n\n**Cito-feitje**:\nDe **rijsttafel** zoals we die in NL kennen, bestaat **niet** in Indonesië zelf. Het was uitvonden door NL-koloniaal Nederland *(eind 19e eeuw)* om vele Indonesische gerechten ineens te serveren. In Indonesië eet men 1 of 2 gerechten per maaltijd. Echte rijsttafel = **NL-Indische uitvinding**.",
    checks: [
      {
        q: "Wat is **rijsttafel**?",
        options: ["NL-Indische uitvinding met veel Indo-gerechten", "Tafel uit hout", "Sushi-tafel", "Bestaat niet"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Wel."],
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
        options: ["Roti met kip + aardappel + boontjes", "Stamppot", "Sushi", "Pizza"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — eetcultuur mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Welke is **typisch Hollands**?", options: ["Stamppot + haring", "Sushi", "Pizza", "Tajine"], answer: 0, wrongHints: [null, "Japans.", "Italiaans.", "Marokkaans."] },
      { q: "Wat is **hagelslag**?", options: ["Chocolade-hagel op brood (NL)", "Vis", "Vlees", "Kaas"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "Welke is **Indonesisch**?", options: ["Saté", "Roti", "Tajine", "Pizza"], answer: 0, wrongHints: [null, "Surinaams.", "Marokkaans.", "Italiaans."] },
      { q: "**Goudse kaas** komt uit?", options: ["Gouda (NL)", "Italië", "Frankrijk", "Niet bestaand"], answer: 0, wrongHints: [null, "Niet.", "Brie wel.", "Wel."] },
      { q: "**Vis** aanbevolen aantal per week?", options: ["1 keer (omega-3)", "Dagelijks", "Nooit", "Maandelijks"], answer: 0, wrongHints: [null, "Te veel.", "Wel.", "Te weinig."] },
      { q: "**Stroopwafel** uit?", options: ["Gouda (1810)", "Amsterdam", "Frankrijk", "Indonesië"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const eetcultuurNederlandPo = {
  id: "eetcultuur-nederland-po",
  title: "Eetcultuur NL + invloeden (Cito groep 6-8)",
  emoji: "🥔",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — cultuur / geschiedenis",
  prerequisites: [
    { id: "gezonde-voeding-po", title: "Gezonde voeding", niveau: "1F" },
  ],
  intro:
    "Eetcultuur NL voor Cito groep 6-8 — Hollandse keuken (stamppot/haring/stroopwafels) + vis+brood+zuivel (kazen Gouda/Edam/Leerdam, 14 kg per persoon) + invloeden uit koloniaal verleden (rijsttafel = NL-Indische uitvinding, roti Suriname) + Turks/Marokkaans/Italiaans + trends 2024 (plant-based). ~15 min.",
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
