// Leerpad: Energiebronnen — groep 6-8 wereldoriëntatie + klas 1-2 aardrijkskunde.
// Past op klimaatverandering-aardrijkskunde + bevolking-migratie. 1F.
// 6 stappen. Cito-relevant wereldoriëntatie.

const stepEmojis = ["💡", "🛢️", "☀️", "⚛️", "🇳🇱", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is energie?", emoji: "💡", from: 0, to: 0 },
  { letter: "B", title: "Fossiele brandstoffen", emoji: "🛢️", from: 1, to: 1 },
  { letter: "C", title: "Duurzame energie", emoji: "☀️", from: 2, to: 2 },
  { letter: "D", title: "Kernenergie", emoji: "⚛️", from: 3, to: 3 },
  { letter: "E", title: "NL en energie", emoji: "🇳🇱", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

const steps = [
  {
    title: "Wat is energie?",
    explanation:
      "**Energie** = wat je nodig hebt om iets te **laten werken**.\n\n**Voorbeelden van energie thuis**:\n• Lamp brandt → **elektrische energie**.\n• Verwarming aan → **warmte-energie**.\n• Auto rijdt → **bewegings-energie**.\n• Telefoon werkt → **elektrische energie** (uit accu).\n• Eten koken → **warmte-energie** (uit gas of elektriciteit).\n\n**Waar komt energie vandaan?**\nEnergie moet ergens uit komen — uit **energiebronnen**.\n\n**Soorten energiebronnen**:\n\n**1. Fossiele brandstoffen** *(ouderwets)*:\n• **Aardolie** *(benzine, diesel, kerosine)*.\n• **Aardgas** *(verwarming, koken)*.\n• **Steenkool** *(elektriciteits-centrales)*.\n• Heten 'fossiel' omdat ze ontstaan uit dode planten + dieren van **miljoenen jaren** geleden.\n• **Probleem**: raken op + verontreinigen *(CO₂)*.\n\n**2. Duurzame / hernieuwbare energie** *(modern)*:\n• **Zon** → zonnepanelen.\n• **Wind** → windmolens.\n• **Water** → waterkracht-centrales.\n• **Aardwarmte** → geothermisch.\n• **Biomassa** → houtige planten / mest.\n• Worden **niet op** + veroorzaken weinig CO₂.\n\n**3. Kernenergie** *(omstreden)*:\n• Uit splijten van **uranium**.\n• Geen CO₂, maar wel **radioactief afval**.\n\n**Energie kun je niet maken**:\nEnergie 'maken' bestaat eigenlijk niet — je kunt het alleen **omzetten** van de ene vorm in de andere. Een windmolen zet bewegings-energie van wind om in elektrische energie.\n\n**Cito-feitje**:\nEen mens heeft per dag **ongeveer 2000-2500 kcal** aan voedings-energie nodig. Dat is veel minder dan een huishouden aan elektriciteit gebruikt *(gemiddeld huishouden = energie van ongeveer 1000 mensen-dagen)*.",
    checks: [
      {
        q: "Wat is **energie**?",
        options: ["Wat nodig is om iets te laten werken", "Voedsel", "Een soort stof", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel een vorm van energie.", "Niet primair.", "Wel."],
      },
      {
        q: "Welke is **fossiel**?",
        options: ["Aardolie", "Zon", "Wind", "Water"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Duurzaam.", "Duurzaam.", "Duurzaam."],
      },
      {
        q: "Waarom heten ze **fossiele** brandstoffen?",
        options: ["Komen uit dode planten/dieren van lang geleden", "Werken op fossielen", "Zijn modern", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Tegenovergesteld.", "Wel."],
      },
      {
        q: "Kun je **energie maken**?",
        options: ["Nee, alleen omzetten", "Ja, uit niets", "Soms", "Alleen door wetenschapper"],
        answer: 0,
        wrongHints: [null, "Klopt — natuurkundige wet.", "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Fossiele brandstoffen",
    explanation:
      "**Fossiele brandstoffen** = aardolie + gas + steenkool.\n\n**Hoe zijn ze ontstaan?**\n• **300 miljoen jaar** geleden leefden er veel planten en dieren.\n• Toen ze stierven kwamen ze diep onder de grond *(of zee-bodem)*.\n• **Druk + warmte** veranderden ze in olie, gas of kool.\n• Daarom heten ze **fossiel** *(uit oude tijd)*.\n\n**1. Aardolie** 🛢️\n• Vloeibaar.\n• In NL: voorraad bij Schoonebeek + Noordzee.\n• Wereld: vooral **Midden-Oosten** *(Saoedi-Arabië)*, Rusland, VS, Venezuela.\n• Wordt **geraffineerd** in raffinaderij → benzine, diesel, kerosine, plastic.\n\n**2. Aardgas** 🔥\n• Gas.\n• In NL: **Groningen-gasveld** — een van de grootste ter wereld.\n• Sinds 1959 → bracht NL veel geld op.\n• **Probleem**: gasboring → aardbevingen in Groningen.\n• Productie afgebouwd → **gestopt in 2024**.\n• Wereld: Rusland (Gazprom), VS, Iran, Qatar.\n\n**3. Steenkool** ⛏️\n• Vaste stof.\n• In NL: vroeger in **Limburg** *(mijnen gesloten 1965-1974)*.\n• Wereld: China, India, VS, Australië.\n• Meest CO₂ van alle fossiele brandstoffen.\n• In NL: laatste kolencentrales sluiten in **2030**.\n\n**Voordelen fossiel**:\n• **Goedkoop** *(infrastructuur bestaat al)*.\n• **Veel energie** per kg.\n• **Makkelijk te transporteren** *(pijpleidingen, tankschepen)*.\n• **Altijd beschikbaar** *(weer-onafhankelijk)*.\n\n**Nadelen fossiel**:\n• **Raken op** *(eindig)*.\n• **CO₂-uitstoot** → klimaatverandering.\n• **Luchtvervuiling** → smog, fijnstof.\n• **Olie-rampen** *(Exxon Valdez 1989, Deepwater Horizon 2010)*.\n• **Politieke afhankelijkheid** *(Rusland-gas voor EU)*.\n• **Aardbevingen** *(NL Groningen)*.\n\n**Hoe lang nog?**\nGeschatte voorraad:\n• **Aardolie**: ~50 jaar.\n• **Aardgas**: ~50 jaar.\n• **Steenkool**: ~150 jaar.\n\nDaarna moet alles op andere bronnen draaien — daarom is energietransitie nodig.\n\n**Cito-feitje**:\nEen **vat olie** = 159 liter. Prijs varieert tussen $20-$140. Lager dan ~$30 = veel olielanden verliezen geld; hoger dan ~$100 = wereldeconomie krijgt klap.",
    checks: [
      {
        q: "Welke fossiele brandstof is **vloeibaar**?",
        options: ["Aardolie", "Aardgas", "Steenkool", "Geen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Gas.", "Vast.", "Wel."],
      },
      {
        q: "**Groningen-gasveld** stopt wanneer?",
        options: ["2024", "Nooit", "1959", "2050"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel.", "Begon toen.", "Te laat."],
      },
      {
        q: "Wat veroorzaakte **aardbevingen** in Groningen?",
        options: ["Gasboring", "Vulkaan", "Auto's", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geen vulkaan.", "Niet.", "Wel."],
      },
      {
        q: "Hoeveel jaar **aardolie** nog?",
        options: ["~50 jaar", "100", "1000", "Oneindig"],
        answer: 0,
        wrongHints: [null, "Klopt — schatting.", "Te veel.", "Te veel.", "Niet — eindig."],
      },
    ],
  },
  {
    title: "Duurzame energie",
    explanation:
      "**Duurzame energie** = bronnen die **niet opraken**.\nOok wel **hernieuwbare** of **groene** energie.\n\n**1. Zonne-energie** ☀️\n• **Zonnepanelen** vangen zonlicht op.\n• Maken er **elektriciteit** van *(fotovoltaïsch)*.\n• Werkt ook bij bewolkt weer *(minder)*.\n• Wereld-leider: China *(80% van panelen-productie)*.\n• In NL: 1 op de 4 huizen heeft panelen *(2024)*.\n• **Probleem**: 's nachts geen stroom → opslag nodig.\n\n**2. Windenergie** 🌬️\n• **Windmolens** zetten wind om in stroom.\n• Op land **of** op zee *(offshore — meer wind)*.\n• In NL: **Noordzee** heeft enorme windparken *(Borssele, Hollandse Kust)*.\n• Eén grote windmolen kan ~1500 huishoudens van stroom voorzien.\n• **Probleem**: wind is niet altijd, mensen klagen over geluid + horizonvervuiling.\n\n**3. Waterkracht** 💧\n• **Stuwdammen** of getijdencentrales.\n• In NL: weinig *(plat land, geen bergen)*.\n• Wereld: China *(Drie-Klovendam)*, Brazilië *(Itaipu)*, Noorwegen.\n• Voordeel: stabiel.\n\n**4. Biomassa** 🌳\n• Verbranden van planten / hout / mest.\n• **Houtsnippers** in centrales *(omstreden — bossen kappen tegenstrijdig met klimaatdoel)*.\n• **Biogas** uit koeienmest.\n• Niet 100% CO₂-vrij maar uit hernieuwbare bron.\n\n**5. Geothermie** 🔥\n• Warmte uit de **aarde**.\n• In NL: bij tuinders + voor verwarmen woonwijken.\n• Boren tot 2-3 km diep waar het 80-90°C is.\n\n**6. Getijde + golven** 🌊\n• Energie uit eb + vloed of golfslag.\n• In NL: getijdencentrale Brouwersdam test.\n• Nog kleine schaal wereldwijd.\n\n**Voordelen duurzaam**:\n• **Raken niet op**.\n• **Geen of weinig CO₂**.\n• **Minder afhankelijk** van andere landen.\n• Steeds **goedkoper** *(zonnepaneel kost nu 90% minder dan in 2010)*.\n\n**Nadelen duurzaam**:\n• **Weer-afhankelijk** *(geen zon, geen wind)*.\n• **Opslag nodig** *(grote batterijen)*.\n• **Ruimte nodig** *(landschap)*.\n• **Hoge investering** vooraf.\n• Sommige materialen schaars *(lithium, kobalt voor batterijen)*.\n\n**NL transitie**:\nDoel 2030: 70% van NL-elektriciteit uit duurzaam.\nIn 2023: ~46% al duurzaam — snelle groei.\n\n**Cito-feitje**:\nDe **grootste windmolen ter wereld** *(China)* heeft wieken van **131 meter** — bijna 3x het Vrijheidsbeeld. Een toer kan 16.000 huishoudens van stroom voorzien.",
    checks: [
      {
        q: "Wat is **duurzame** energie?",
        options: ["Energie die niet opraakt", "Goedkope energie", "Energie uit olie", "Alleen elektriciteit"],
        answer: 0,
        wrongHints: [null, "Klopt — hernieuwbaar.", "Niet primair.", "Niet duurzaam.", "Niet."],
      },
      {
        q: "**Waterkracht** in NL?",
        options: ["Weinig — plat land", "Veel", "Hoofdbron", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Klopt — bergen nodig.", "Niet.", "Niet hoofd.", "Wel."],
      },
      {
        q: "Wat is **offshore** windpark?",
        options: ["Op zee", "Op berg", "In stad", "In land"],
        answer: 0,
        wrongHints: [null, "Klopt — meer wind.", "Niet.", "Niet.", "Onshore."],
      },
      {
        q: "Probleem **zonne-energie**?",
        options: ["'s Nachts geen stroom", "Heel duur", "Niet bestaat", "Werkt nooit"],
        answer: 0,
        wrongHints: [null, "Klopt — opslag nodig.", "Steeds goedkoper.", "Bestaat wel.", "Wel."],
      },
    ],
  },
  {
    title: "Kernenergie",
    explanation:
      "**Kernenergie** = energie uit het **splijten van atomen**.\nOmstreden — voor- en tegenstanders.\n\n**Hoe werkt het?**\n• In een **kernreactor** wordt **uranium** *(zwaar metaal)* gesplitst.\n• Bij splijting komt **enorm veel warmte** vrij.\n• Die warmte verwarmt water → stoom → drijft turbine → elektriciteit.\n• Eén kerncentrale: **1000 MW** = 1 miljoen huishoudens.\n\n**Voordelen**:\n• **Geen CO₂** *(klimaatvriendelijk)*.\n• **Veel energie** per gram brandstof *(1 kg uranium = 2,7 miljoen kg kolen)*.\n• **Stabiel** *(24/7, onafhankelijk van weer)*.\n• **Klein land-gebruik** *(kleine centrale = veel stroom)*.\n\n**Nadelen**:\n• **Radioactief afval** *(blijft 1000+ jaar gevaarlijk)*.\n• **Ongelukken** *(zeldzaam maar erg)*:\n  - **Tsjernobyl 1986** *(Oekraïne, ex-Sovjet)*.\n  - **Fukushima 2011** *(Japan, na tsunami)*.\n• **Kernwapens-risico** *(zelfde technologie)*.\n• **Hoge bouwkosten** *(€10+ miljard per centrale)*.\n• **Lange bouwtijd** *(10-15 jaar)*.\n\n**In Nederland**:\n• 1 werkende kerncentrale: **Borssele** *(Zeeland, sinds 1973)*.\n• Levert ~3% van NL-elektriciteit.\n• Politiek: kabinet plant **2 nieuwe** kerncentrales *(Borssele 2 + 3)*.\n• Discussie: voorstanders = klimaat-oplossing; tegenstanders = afval-probleem + duur.\n\n**Internationale verschillen**:\n• **Frankrijk**: 70% kernenergie — meest van EU.\n• **Duitsland**: alle kerncentrales **uit** *(2023, na Fukushima-paniek)*.\n• **China**: bouwt heel veel nieuwe centrales.\n• **VS**: ~20% kernenergie.\n\n**Toekomst: kernfusie**:\n• **Splijting** *(huidige reactors)*: atoom uit elkaar halen.\n• **Fusie** *(toekomst)*: atomen samenvoegen *(zoals in de zon)*.\n• Fusie zou **veel veiliger** + **geen afval** zijn.\n• Test-reactor **ITER** in Frankrijk — werkt 2035.\n• Commercieel pas vanaf **2050+**.\n\n**Cito-feitje**:\nDe **kernramp in Tsjernobyl** *(26 april 1986)* maakte een gebied ter grootte van halve provincie Utrecht voor lange tijd onbewoonbaar. De 'verboden zone' (30 km rondom) is er nog steeds.",
    checks: [
      {
        q: "Hoe werkt **kernenergie**?",
        options: ["Splijten van uranium-atomen", "Verbranden van olie", "Wind invangen", "Zon vangen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Fossiel.", "Wind.", "Zon."],
      },
      {
        q: "**NL kerncentrale**?",
        options: ["Borssele (Zeeland)", "Amsterdam", "Schiphol", "Geen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Geen.", "Wel — Borssele."],
      },
      {
        q: "Welk land is **kernenergie-koploper**?",
        options: ["Frankrijk (70%)", "NL", "België", "Duitsland (uit)"],
        answer: 0,
        wrongHints: [null, "Klopt.", "3%.", "Iets meer maar geen 70.", "Stopte juist."],
      },
      {
        q: "**Probleem** kernenergie?",
        options: ["Radioactief afval (1000+ jr)", "Geen probleem", "Te goedkoop", "Te veel CO₂"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel.", "Niet.", "Geen CO₂."],
      },
    ],
  },
  {
    title: "Nederland en energie",
    explanation:
      "**NL energiemix** *(2024 ongeveer)*:\n• **Aardgas**: ~30% *(verwarming, industrie)*.\n• **Aardolie**: ~30% *(vervoer)*.\n• **Steenkool**: ~5%.\n• **Duurzaam** *(zon+wind+biomassa)*: ~25%.\n• **Kern**: ~3%.\n• **Import**: ~7%.\n\n**Belangrijke NL-bedrijven**:\n• **Shell** *(oliemaatschappij, hoofdkwartier Den Haag)*.\n• **Eneco, Vattenfall, Essent** *(energieleveranciers)*.\n• **Gasunie, TenneT** *(netwerken)*.\n• **NAM** *(gas Groningen — Shell + ExxonMobil)*.\n\n**Energietransitie NL**:\nDoel: **klimaatneutraal in 2050**.\n\n**1. Huizen van gas af** 🏠\n• Sinds 2018 **geen nieuwbouw** meer met gasaansluiting.\n• Bestaande huizen → **warmtepomp** of warmtenet.\n• Subsidie ISDE voor warmtepomp + isolatie.\n• Doel: 7 miljoen huizen + gebouwen verduurzamen.\n\n**2. Wind op zee** 🌊\n• Noordzee: massa-aanleg windparken.\n• 2030 doel: **21 GW** op zee *(genoeg voor ~17 miljoen huishoudens)*.\n• Bestaande parken: Borssele, Hollandse Kust Zuid + Noord.\n\n**3. Zonneparken** ☀️\n• Op daken + op land *(grasland, water)*.\n• Discussie: ruimte voor landbouw vs zon?\n• 'Zon op dak eerst'-principe.\n\n**4. Waterstof** 💨\n• **Toekomst-energie**: groene waterstof uit windstroom.\n• Gebruik: zware industrie, transport, opslag.\n• NL leider met haven Rotterdam.\n\n**5. Industrie verduurzamen** 🏭\n• Grootste vervuilers *(Tata Steel, Shell, Yara, BP)* moeten CO₂ omlaag.\n• Maatwerkafspraken met overheid.\n• Carbon Capture and Storage *(CCS)* — opslaan CO₂ onder zee.\n\n**Politieke discussies**:\n\n**Pro energietransitie**:\n• Klimaat dwingt.\n• Onafhankelijk van Rusland *(na 2022 Oekraïne-oorlog)*.\n• Werkgelegenheid duurzame sector.\n\n**Contra / nuances**:\n• **Energiearmoede** — arme gezinnen kunnen warmtepomp niet betalen.\n• **Hoge gasprijzen** sinds 2022 → stookkostenstijging.\n• **Net-congestie** — elektriciteitsnet vol *(slim opladen nodig)*.\n• **Landschapsvervuiling** *(windmolens, zonneparken)*.\n• **Stikstof-crisis** raakt boeren *(parallel probleem)*.\n\n**Wat kun JIJ doen?**\n• **Isoleer je huis** *(dak, ramen, gevel)* — minst sexy maar grootste impact.\n• **Zet thermostaat op 19°C** *(niet 22)*.\n• **LED-lampen** + zuinige apparaten.\n• **Korter douchen** *(scheelt veel gas)*.\n• **OV/fiets ipv auto**.\n• **Bewust eten** *(minder vlees)*.\n• **Stem op partij** met goed klimaatplan.\n• Steun **buurt-energiecoöperaties** *(eigen windmolen of zonneveld)*.\n\n**Cito-feitje**:\n80% van een huishoud-energie gaat naar **verwarming + warm water** — alleen 20% is voor apparaten + licht. **Isoleren** is daarom belangrijkste energie-besparende maatregel.",
    checks: [
      {
        q: "**Grootste post** in NL energiemix?",
        options: ["Aardgas + aardolie samen ~60%", "Zon", "Wind", "Kern"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Veel minder.", "Veel minder.", "Slechts 3%."],
      },
      {
        q: "Sinds welk jaar **geen gasaansluiting** in nieuwbouw NL?",
        options: ["2018", "2024", "1990", "Nooit"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Later.", "Te vroeg.", "Wel."],
      },
      {
        q: "Wat bedoelen we met **energiearmoede**?",
        options: ["Gezinnen die energie niet kunnen betalen", "Geen elektriciteit", "Veel besparen", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet primair.", "Tegenovergesteld.", "Wel."],
      },
      {
        q: "**Grootste energie-post** in huishouden?",
        options: ["Verwarming + warm water (~80%)", "Verlichting", "Wifi", "Tv"],
        answer: 0,
        wrongHints: [null, "Klopt — daarom isoleren.", "Klein.", "Heel klein.", "Klein."],
      },
    ],
  },
  {
    title: "Eind-toets — energie mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Welke is **fossiel**?", options: ["Aardgas", "Zon", "Wind", "Water"], answer: 0, wrongHints: [null, "Klopt.", "Duurzaam.", "Duurzaam.", "Duurzaam."] },
      { q: "Welke is **duurzaam**?", options: ["Zonnepaneel", "Steenkool", "Aardolie", "Aardgas"], answer: 0, wrongHints: [null, "Klopt.", "Fossiel.", "Fossiel.", "Fossiel."] },
      { q: "Wat is **uranium** voor?", options: ["Kernenergie", "Olie", "Gas", "Niets"], answer: 0, wrongHints: [null, "Klopt.", "Fossiel.", "Fossiel.", "Wel."] },
      { q: "Wat is **CCS**?", options: ["CO₂ afvangen + opslaan", "Bus", "Stoom", "Niet bestaand"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Wel."] },
      { q: "**Borssele** is wat?", options: ["NL kerncentrale", "Provincie", "Bedrijf", "Politicus"], answer: 0, wrongHints: [null, "Klopt — Zeeland.", "Niet.", "Niet.", "Niet."] },
      { q: "**Energie maken** = ?", options: ["Bestaat niet — alleen omzetten", "Uit niets", "Door wetenschap", "Door pc"], answer: 0, wrongHints: [null, "Klopt — natuurkundige wet.", "Niet.", "Niet.", "Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const energiebronnenPo = {
  id: "energiebronnen-po",
  title: "Energiebronnen (PO + klas 1-2)",
  emoji: "💡",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek + aardrijkskunde",
  prerequisites: [],
  intro:
    "Energiebronnen voor groep 6-8 + klas 1-2 — wat is energie + fossiel (olie/gas/kool) + duurzaam (zon/wind/water/biomassa/geothermie) + kernenergie (uranium/Tsjernobyl/Borssele) + NL energiemix + energietransitie. Sluit aan op klimaatverandering. ~15 min.",
  triggerKeywords: [
    "energie", "energiebron",
    "fossiel", "aardolie", "aardgas", "steenkool",
    "duurzaam", "groen", "hernieuwbaar",
    "zonnepaneel", "zonne-energie", "windmolen", "windenergie",
    "kernenergie", "uranium", "Borssele", "Tsjernobyl",
    "biomassa", "waterstof", "geothermie",
    "energietransitie", "klimaatneutraal",
  ],
  chapters,
  steps,
};

export default energiebronnenPo;
