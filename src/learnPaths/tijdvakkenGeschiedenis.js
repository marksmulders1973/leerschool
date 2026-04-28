// Leerpad: De 10 tijdvakken — Nederlandse geschiedenis (onderbouw VO)
// 12 stappen in 5 hoofdstukken (A t/m E).
// De 10 tijdvakken zijn de basis van het Nederlandse geschiedenisonderwijs
// (vastgesteld door de Commissie De Rooy, 2001).

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  // tijdvak-tinten (10 verschillende kleuren voor de tijdlijn)
  tv1: "#8d6e63",  // jagers/boeren — bruin/aarde
  tv2: "#d4a017",  // grieken/romeinen — goud
  tv3: "#7e57c2",  // monniken/ridders — paars
  tv4: "#42a5f5",  // steden/staten — blauw
  tv5: "#26a69a",  // ontdekkers — turkoois
  tv6: "#ef6c00",  // regenten — oranje
  tv7: "#c62828",  // pruiken/revoluties — rood
  tv8: "#5d4037",  // burgers/stoom — donkerbruin
  tv9: "#37474f",  // wereldoorlogen — donkergrijs
  tv10: "#00bcd4", // tv/computer — cyaan
};

const stepEmojis = [
  "📜",                          // A. Intro
  "🏹", "🏛️",                   // B. Oudheid (1, 2)
  "⚔️", "🏰",                    // C. Middeleeuwen (3, 4)
  "⛵", "👑", "🎩",              // D. Vroegmoderne (5, 6, 7)
  "🚂", "🌍",                    // E. Modern deel 1 (8, 9)
  "📺",                          // E. Modern deel 2 (10)
  "🏆",                          // F. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat zijn tijdvakken?", emoji: "📜", from: 0, to: 0 },
  { letter: "B", title: "Oudheid (tijdvak 1-2)", emoji: "🏛️", from: 1, to: 2 },
  { letter: "C", title: "Middeleeuwen (tijdvak 3-4)", emoji: "🏰", from: 3, to: 4 },
  { letter: "D", title: "Vroegmoderne tijd (tijdvak 5-7)", emoji: "👑", from: 5, to: 7 },
  { letter: "E", title: "Moderne tijd (tijdvak 8-10)", emoji: "🚂", from: 8, to: 10 },
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 11, to: 11 },
];

// Hulp-SVG: tijdlijn met 10 gekleurde blokken, optioneel huidige tijdvak gemarkeerd
function tijdlijnSvg(activeIdx = -1) {
  const colors = [COLORS.tv1, COLORS.tv2, COLORS.tv3, COLORS.tv4, COLORS.tv5, COLORS.tv6, COLORS.tv7, COLORS.tv8, COLORS.tv9, COLORS.tv10];
  const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const blockW = 28;
  const startX = 10;
  return `<svg viewBox="0 0 300 100">
${colors.map((c, i) => `
<rect x="${startX + i * blockW}" y="${i === activeIdx ? 18 : 24}" width="${blockW - 2}" height="${i === activeIdx ? 38 : 26}" rx="3" fill="${c}" opacity="${i === activeIdx ? 1 : 0.55}" stroke="${i === activeIdx ? "#fff" : "transparent"}" stroke-width="${i === activeIdx ? 2 : 0}"/>
<text x="${startX + i * blockW + (blockW - 2) / 2}" y="${i === activeIdx ? 42 : 41}" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">${labels[i]}</text>`).join("")}
<line x1="${startX}" y1="68" x2="${startX + 10 * blockW - 2}" y2="68" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="${startX}" y="82" fill="${COLORS.muted}" font-size="9" font-family="Arial">vroeger</text>
<text x="${startX + 10 * blockW - 30}" y="82" fill="${COLORS.muted}" font-size="9" font-family="Arial">nu</text>
</svg>`;
}

const steps = [
  // ─── A. Intro ───────────────
  {
    title: "Wat zijn tijdvakken?",
    explanation: "De geschiedenis is heel lang — duizenden jaren. Om er overzicht in te krijgen, hebben historici de geschiedenis verdeeld in **10 tijdvakken**, elk met een **kenmerkende naam**.\n\nDe 10 tijdvakken (van vroeger naar nu):\n\n| # | Naam | Periode |\n|---|---|---|\n| 1 | Jagers en boeren | tot 3000 v.Chr. |\n| 2 | Grieken en Romeinen | 3000 v.Chr. – 500 |\n| 3 | Monniken en ridders | 500 – 1000 |\n| 4 | Steden en staten | 1000 – 1500 |\n| 5 | Ontdekkers en hervormers | 1500 – 1600 |\n| 6 | Regenten en vorsten | 1600 – 1700 |\n| 7 | Pruiken en revoluties | 1700 – 1800 |\n| 8 | Burgers en stoommachines | 1800 – 1900 |\n| 9 | Wereldoorlogen | 1900 – 1950 |\n| 10 | Televisie en computer | 1950 – nu |\n\nDe namen zijn een **geheugenhulp**: ze vertellen meteen iets typisch uit dat tijdvak.\n\n**Waarom belangrijk?** Met deze 10 tijdvakken kun je elke gebeurtenis in de juiste tijd plaatsen. Op een examen krijg je vaak vragen als: 'In welk tijdvak hoort de Tachtigjarige Oorlog?' Antwoord: tijdvak 6 (Regenten en vorsten, 1568-1648).",
    svg: tijdlijnSvg(),
    checks: [
      {
        q: "Hoeveel tijdvakken zijn er?",
        options: ["10", "5", "12", "8"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — de Commissie De Rooy heeft er meer vastgesteld.",
          "Te veel.",
          "Te weinig.",
        ],
      },
      {
        q: "Wat is het **eerste** tijdvak?",
        options: ["Jagers en boeren", "Grieken en Romeinen", "Monniken en ridders", "Wereldoorlogen"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is tijdvak 2 — een lang tweede tijdvak (3000 v.Chr. tot 500 n.Chr.).",
          "Dat is tijdvak 3 — vroege middeleeuwen.",
          "Dat is tijdvak 9 — pas in de 20e eeuw.",
        ],
      },
    ],
  },

  // ─── B. Oudheid ───────────────
  {
    title: "Tijdvak 1 — Jagers en boeren (tot 3000 v.Chr.)",
    explanation: "Het **alleroudste** tijdvak. Alles vóór 3000 voor Christus heet **prehistorie** (= 'voor-geschiedenis', want er was nog geen schrift om iets op te schrijven).\n\n**Twee fases**:\n\n**A. Jagers-verzamelaars** *(paleolithicum, tot ~10.000 v.Chr.)*\n• Mensen leefden in kleine groepen.\n• Ze trokken rond — nergens vast huis.\n• Aten wat de natuur gaf: vlees van de jacht, bessen, noten.\n• Werktuigen van **steen, bot en hout**.\n\n**B. Eerste boeren** *(neolithicum, vanaf ~10.000 v.Chr.)*\n• Mensen ontdekten **landbouw** en **veeteelt**.\n• Ze bouwden vaste **huizen** en **dorpen**.\n• Ze maakten **aardewerk** (potten van klei) en kleding van wol/vlas.\n• In Nederland: hunebedden (~3000 v.Chr.) — graven van de Trechterbekercultuur in Drenthe.\n\nDeze overgang van rondtrekkend leven naar landbouw heet de **landbouwrevolutie**.",
    svg: tijdlijnSvg(0),
    checks: [
      {
        q: "Wat veranderde tijdens de **landbouwrevolutie**?",
        options: [
          "Mensen gingen op één plek wonen en akkers bewerken",
          "Mensen ontdekten elektriciteit",
          "Romeinen veroverden Nederland",
          "De boekdrukkunst werd uitgevonden",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Elektriciteit is veel later — pas in tijdvak 8.",
          "Romeinen kwamen in tijdvak 2.",
          "Boekdrukkunst = ~1450, dat is tijdvak 5.",
        ],
      },
      {
        q: "Wat zijn **hunebedden**?",
        options: [
          "Stenen graven uit ~3000 v.Chr. in Drenthe",
          "Romeinse forten",
          "Middeleeuwse kastelen",
          "Boerderijen uit de Gouden Eeuw",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Romeinen kwamen pas in tijdvak 2.",
          "Kastelen zijn middeleeuws — tijdvak 3-4.",
          "Gouden Eeuw is tijdvak 6.",
        ],
      },
    ],
  },
  {
    title: "Tijdvak 2 — Grieken en Romeinen (3000 v.Chr. – 500)",
    explanation: "Met de uitvinding van het **schrift** begint de **echte geschiedenis** (vandaar het einde van de prehistorie). In dit lange tijdvak staan twee culturen centraal die enorm veel invloed hebben gehad op Europa: **Grieken** en **Romeinen**.\n\n**De Grieken** (~800 – 146 v.Chr.)\n• **Stadstaten**: Athene, Sparta, Korinthe.\n• Athene: eerste **democratie** (~500 v.Chr.) — burgers stemden zelf.\n• Filosofie: **Socrates, Plato, Aristoteles**.\n• Olympische Spelen, theater, wiskunde (Pythagoras!).\n\n**De Romeinen** (~750 v.Chr. – 476 n.Chr.)\n• Begonnen als stad → werd een **enorm rijk** rond de Middellandse Zee.\n• **Latijn**: hun taal, basis van Frans/Spaans/Italiaans en veel Nederlandse leenwoorden.\n• Rechtssysteem, wegen, aquaducten, beton.\n• Romeinen in Nederland: **limes** (grens) langs de Rijn, forten bij Nijmegen en Utrecht.\n• 476 n.Chr.: **Val van het West-Romeinse Rijk** — einde tijdvak 2.\n\n**Onthoud**: schrift, democratie (Grieken), wegen + recht (Romeinen).",
    svg: tijdlijnSvg(1),
    checks: [
      {
        q: "Waar werd **democratie** voor het eerst ingevoerd?",
        options: ["Athene (Griekenland)", "Rome", "Sparta", "Egypte"],
        answer: 0,
        wrongHints: [
          null,
          "Rome was eerst een republiek, pas later een keizerrijk — geen democratie zoals Athene.",
          "Sparta had juist een militaire koningsregering, geen democratie.",
          "Egypte had farao's — absolute monarchen.",
        ],
      },
      {
        q: "Wanneer eindigt tijdvak 2?",
        options: [
          "476 — val van het West-Romeinse Rijk",
          "1492 — ontdekking Amerika",
          "1789 — Franse Revolutie",
          "1945 — einde WO2",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is in tijdvak 5 — Ontdekkers en hervormers.",
          "Dat is tijdvak 7.",
          "Dat is tijdvak 9.",
        ],
      },
    ],
  },

  // ─── C. Middeleeuwen ───────────────
  {
    title: "Tijdvak 3 — Monniken en ridders (500 – 1000)",
    explanation: "**Vroege middeleeuwen**. Na de val van Rome viel Europa uiteen in kleinere rijken. Twee groepen domineren:\n\n**Monniken** *(de Kerk)*\n• Het **christendom** verspreidt zich over heel Europa.\n• **Kloosters** worden gebouwd — daar werkten en baden monniken.\n• Monniken **kopiëren boeken** met de hand (er was nog geen drukpers).\n• De Kerk wordt heel machtig — politiek én geestelijk.\n\n**Ridders** *(de adel)*\n• Het **feodale stelsel**: koning → leenmannen (ridders) → boeren.\n• De koning gaf land aan ridders, en die beschermden hem in oorlog.\n• Boeren (**horigen**) werkten op het land van de heer in ruil voor bescherming.\n\n**Belangrijke gebeurtenissen**:\n• **Karel de Grote** (768-814): bouwde een groot rijk dat Frankrijk + Duitsland + Nederland besloeg. Werd in 800 tot keizer gekroond door de paus.\n• **Vikingen** (~800-1050): Scandinavische krijgers, plunderden en handelden in Europa. Plaatsnamen in Nederland zoals 'Wijk' wijzen vaak op Vikingsporen.",
    svg: tijdlijnSvg(2),
    checks: [
      {
        q: "Wat is het **feodale stelsel**?",
        options: [
          "Koning geeft land aan ridders, die hem in ruil daarvoor beschermen",
          "Iedereen mag stemmen voor de koning",
          "Het systeem van Romeinse legerkampen",
          "Een soort handelsroute",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Stemmen kwam pas veel later (Athene tijdvak 2, of moderne democratie tijdvak 8+).",
          "Romeinse legerkampen = tijdvak 2.",
          "Een handelsroute is iets anders.",
        ],
      },
      {
        q: "Wie werd in 800 tot keizer gekroond door de paus?",
        options: ["Karel de Grote", "Julius Caesar", "Willem van Oranje", "Napoleon"],
        answer: 0,
        wrongHints: [
          null,
          "Caesar leefde rond 100-44 v.Chr. — tijdvak 2.",
          "Willem van Oranje = tijdvak 5/6 (1500s).",
          "Napoleon = tijdvak 7 (1800).",
        ],
      },
    ],
  },
  {
    title: "Tijdvak 4 — Steden en staten (1000 – 1500)",
    explanation: "**Late middeleeuwen**. Europa wordt rijker. Nieuwe ontwikkelingen:\n\n**Steden ontstaan en groeien**\n• Handel komt op gang → mensen trekken naar steden.\n• In Nederland: Amsterdam, Brugge, Gent, Utrecht.\n• In de stad ontstaat een nieuwe groep: **burgers** (handelaars, ambachtslieden, niet-adel).\n• **Gilden**: organisaties van bakkers, smeden, wevers — ze regelden kwaliteit en lonen.\n\n**Staten ontstaan**\n• Koningen worden machtiger en bouwen hun rijk uit tot een **staat** (vast territorium met regering).\n• Frankrijk, Engeland en Spanje worden duidelijke landen met grenzen.\n• In de Lage Landen (= ongeveer Nederland + België) regeren de **Bourgondiërs** (vanaf 1384).\n\n**Andere belangrijke zaken**:\n• **Kruistochten** (1096-1291): Europese ridders trokken naar Jeruzalem om het 'heilige land' te 'bevrijden' van de moslims.\n• **Pest / Zwarte Dood** (1347-1351): doodde ongeveer 1/3 van Europa.\n• **Boekdrukkunst** uitgevonden door **Gutenberg** (~1450) — boeken worden veel goedkoper.",
    svg: tijdlijnSvg(3),
    checks: [
      {
        q: "Wat zijn **gilden**?",
        options: [
          "Organisaties van ambachtslieden in steden",
          "Soort kerkgebouwen",
          "Romeinse soldaten",
          "Vikinglegers",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kerken zijn iets anders — die hadden monniken.",
          "Romeinen waren tijdvak 2.",
          "Vikingen waren tijdvak 3.",
        ],
      },
      {
        q: "Wat veranderde de **boekdrukkunst** (~1450)?",
        options: [
          "Boeken werden veel goedkoper en kennis verspreidde sneller",
          "De Romeinen vonden Nederland",
          "Kastelen werden gebouwd",
          "Het christendom werd verboden",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Romeinen kwamen veel eerder — tijdvak 2.",
          "Kastelen werden vooral in tijdvak 3-4 gebouwd, los van de drukpers.",
          "Christendom bleef heel sterk.",
        ],
      },
    ],
  },

  // ─── D. Vroegmoderne tijd ───────────────
  {
    title: "Tijdvak 5 — Ontdekkers en hervormers (1500 – 1600)",
    explanation: "Een eeuw vol veranderingen. Twee grote bewegingen:\n\n**Ontdekkers** *(grote ontdekkingsreizen)*\n• 1492: **Columbus** ontdekt Amerika.\n• 1498: **Vasco da Gama** vaart om Afrika naar India.\n• 1519-22: **Magelhaen** zeilt rond de wereld.\n• Spanje en Portugal richten **koloniën** op in Amerika.\n• Nieuwe producten in Europa: aardappel, tomaat, mais, tabak, suiker.\n\n**Hervormers** *(Reformatie)*\n• 1517: **Maarten Luther** (Duits) plakt zijn 95 stellingen op de kerkdeur in Wittenberg — protest tegen rijkdom + corruptie van de katholieke Kerk.\n• Hij vond dat gewone mensen de Bijbel moesten kunnen lezen — dus vertaalde hij hem in het Duits.\n• De **protestantse kerk** ontstaat. Europa raakt verdeeld: katholiek vs protestant.\n• In Nederland: **Calvijn**'s ideeën worden populair (calvinisme).\n\n**In Nederland**: 1568 begint de **Tachtigjarige Oorlog** — Nederlanders komen in opstand tegen de Spaanse koning (Filips II) onder leiding van **Willem van Oranje**.",
    svg: tijdlijnSvg(4),
    checks: [
      {
        q: "Wat deed **Maarten Luther** in 1517?",
        options: [
          "Plakte 95 stellingen op de kerkdeur als protest",
          "Ontdekte Amerika",
          "Werd koning van Nederland",
          "Vond de boekdrukkunst uit",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat was Columbus, in 1492.",
          "Nederland had toen nog geen koning — was deel van het Spaanse rijk.",
          "Boekdrukkunst was eerder, ~1450 (Gutenberg).",
        ],
      },
      {
        q: "Wanneer begint de **Tachtigjarige Oorlog**?",
        options: ["1568", "1492", "1815", "1914"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is Columbus' jaar.",
          "Dat is na Napoleon — tijdvak 8.",
          "Dat is begin WO1 — tijdvak 9.",
        ],
      },
    ],
  },
  {
    title: "Tijdvak 6 — Regenten en vorsten (1600 – 1700)",
    explanation: "**De Gouden Eeuw** in Nederland — een unieke eeuw waarin de jonge **Republiek der Zeven Verenigde Nederlanden** ongekend rijk en machtig werd.\n\n**Regenten** *(in Nederland)*\n• Geen koning meer — de Republiek werd geleid door **regenten**: rijke kooplieden uit de steden.\n• **VOC** (1602): de eerste echte multinational. Handel in specerijen uit Indonesië.\n• **WIC** (1621): handel in Amerika + Afrika (ook slavenhandel).\n• Bloei van **kunst**: Rembrandt, Vermeer, Frans Hals.\n• Bloei van **wetenschap**: Huygens, Leeuwenhoek.\n• Tachtigjarige Oorlog eindigt in 1648 (**Vrede van Münster**) — Spanje erkent Nederlandse onafhankelijkheid.\n\n**Vorsten** *(in de rest van Europa)*\n• Andere landen werden geregeerd door **absolute vorsten**: koningen met alle macht.\n• Beroemd: **Lodewijk XIV** van Frankrijk ('De Zonnekoning') — woonde in paleis Versailles, zei: \"L'État, c'est moi\" (\"De staat, dat ben ik\").\n• Engeland is een uitzondering: daar krijgt het parlement steeds meer macht.\n\n**Onthoud**: NL = handel + kunst zonder koning, rest van Europa = sterke koningen.",
    svg: tijdlijnSvg(5),
    checks: [
      {
        q: "Wat was de **VOC**?",
        options: [
          "Vereenigde Oost-Indische Compagnie — handelsbedrijf in Azië",
          "Een politieke partij in Nederland",
          "Het Romeinse leger",
          "Een protestantse kerk",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Politieke partijen zoals nu kwamen pas in de 19e eeuw — tijdvak 8.",
          "Romeinen = tijdvak 2.",
          "VOC was een handelsbedrijf, geen kerk.",
        ],
      },
      {
        q: "Wie was **Lodewijk XIV**?",
        options: [
          "Absolute koning van Frankrijk ('Zonnekoning')",
          "Engelse koning",
          "Nederlandse stadhouder",
          "Spaanse keizer",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Engelse koningen heetten in deze tijd vaak Charles of James.",
          "Stadhouders waren Oranjes (Willem III bv.).",
          "Spanje had koningen, maar Lodewijk was Frans.",
        ],
      },
    ],
  },
  {
    title: "Tijdvak 7 — Pruiken en revoluties (1700 – 1800)",
    explanation: "**De achttiende eeuw** — een eeuw van **Verlichting**: het idee dat **rede en wetenschap** belangrijker zijn dan geloof of traditie. Mensen begonnen door te denken hoe de samenleving anders kon.\n\n**Pruiken** *(adel)*\n• Adellijke heren droegen poederpruiken — symbool voor de oude wereld van vorsten en standen.\n\n**Verlichtingsdenkers**\n• **Voltaire** — godsdienstvrijheid.\n• **Montesquieu** — **trias politica**: scheiding tussen wetgevende, uitvoerende en rechtsprekende macht.\n• **Rousseau** — alle mensen zijn van nature gelijk.\n• Ideeën inspireerden later de Amerikaanse en Franse Revolutie.\n\n**Revoluties**\n• 1776: **Amerikaanse Revolutie** — VS verklaart zich onafhankelijk van Engeland (\"All men are created equal\").\n• 1789: **Franse Revolutie** — Franse volk komt in opstand tegen Lodewijk XVI. Slogan: *Vrijheid, Gelijkheid, Broederschap*.\n• Lodewijk XVI én zijn vrouw Marie-Antoinette worden in 1793 onthoofd met de **guillotine**.\n\n**Napoleon** (eind tijdvak):\n• Komt na de revolutie aan de macht in Frankrijk (1799).\n• Verovert grote delen van Europa.\n• Bezet ook Nederland (1795-1813).",
    svg: tijdlijnSvg(6),
    checks: [
      {
        q: "Wat is de **trias politica**?",
        options: [
          "Scheiding tussen wetgevende, uitvoerende en rechtsprekende macht",
          "Drie soorten kerken",
          "Drie keizers in Rome",
          "Een drie-eenheid in het christendom",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niets met kerk — het gaat over politieke macht.",
          "Romeinse keizers zijn een ander thema.",
          "Drie-eenheid is een godsdienstig idee, geen politiek systeem.",
        ],
      },
      {
        q: "Wanneer was de **Franse Revolutie**?",
        options: ["1789", "1568", "1492", "1914"],
        answer: 0,
        wrongHints: [
          null,
          "Dat was begin Tachtigjarige Oorlog — tijdvak 5.",
          "Dat was Columbus.",
          "Dat was begin WO1.",
        ],
      },
    ],
  },

  // ─── E. Moderne tijd ───────────────
  {
    title: "Tijdvak 8 — Burgers en stoommachines (1800 – 1900)",
    explanation: "**De negentiende eeuw** — de tijd van de **industriële revolutie** en het opkomen van **burgerrechten**.\n\n**Stoommachines** *(industriële revolutie)*\n• De **stoommachine** maakt fabrieken, treinen en stoomschepen mogelijk.\n• Mensen verhuizen van platteland naar steden: massa-verstedelijking.\n• Slechte arbeidsomstandigheden: **kinderarbeid**, lange werkdagen, lage lonen.\n• Tegen het einde van de eeuw: **vakbonden**, eerste sociale wetten.\n\n**Burgers** *(nieuwe macht)*\n• 1815: na Napoleon wordt Nederland een **koninkrijk** met Willem I als eerste koning.\n• 1848: **grondwet** van Thorbecke — koning krijgt minder macht, parlement meer.\n• Steeds meer mensen mogen stemmen (eerst alleen rijke mannen).\n\n**Andere ontwikkelingen**:\n• **Imperialisme**: Europese landen veroveren grote delen van Afrika en Azië.\n• 1863: **slavernij afgeschaft** in Nederlandse koloniën.\n• Uitvindingen: telefoon, gloeilamp, auto, fiets.\n• **Karl Marx** schrijft het *Communistisch Manifest* (1848) — basis voor latere socialistische bewegingen.",
    svg: tijdlijnSvg(7),
    checks: [
      {
        q: "Wat veranderde door de **stoommachine**?",
        options: [
          "Fabrieken, treinen en massaproductie kwamen op",
          "Iedereen kreeg een computer",
          "Romeinen werden machtig",
          "De middeleeuwen begonnen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Computers = tijdvak 10.",
          "Romeinen = tijdvak 2.",
          "Middeleeuwen begonnen in tijdvak 3.",
        ],
      },
      {
        q: "Wanneer kwam de **Nederlandse grondwet** van Thorbecke?",
        options: ["1848", "1568", "1789", "1914"],
        answer: 0,
        wrongHints: [
          null,
          "Begin Tachtigjarige Oorlog — tijdvak 5.",
          "Franse Revolutie — tijdvak 7.",
          "Begin WO1 — tijdvak 9.",
        ],
      },
    ],
  },
  {
    title: "Tijdvak 9 — Wereldoorlogen (1900 – 1950)",
    explanation: "Een korte maar zeer dramatische periode met **twee wereldoorlogen** en de **Holocaust**.\n\n**Eerste Wereldoorlog (1914-1918)**\n• Aanleiding: aanslag op Aartshertog Frans Ferdinand in Sarajevo (1914).\n• Loopgravenoorlog in Frankrijk en België — miljoenen doden.\n• Nederland bleef **neutraal** (deed niet mee).\n• 1918: Duitsland verloren. Verdrag van Versailles legt zware lasten op Duitsland.\n\n**Tussen de oorlogen (1918-1939)**\n• 1929: **beurskrach** in New York → wereldwijde economische crisis (Crisisjaren).\n• 1933: **Hitler** komt aan de macht in Duitsland (NSDAP, nazi-partij).\n• Hitler vervolgt joden, communisten en andere groepen.\n\n**Tweede Wereldoorlog (1939-1945)**\n• 1939: Duitsland valt Polen binnen.\n• 1940: Duitsland valt **Nederland** binnen — bombardement Rotterdam (mei 1940). 5 jaar bezetting.\n• **Holocaust**: ~6 miljoen joden vermoord, waaronder Anne Frank.\n• 1945: bevrijding Nederland (5 mei). Atoombommen op Japan (augustus). Einde oorlog.\n\n**Na de oorlog**:\n• 1945: oprichting **Verenigde Naties** (VN).\n• 1948: Universele Verklaring van de Rechten van de Mens.",
    svg: tijdlijnSvg(8),
    checks: [
      {
        q: "Wanneer was de **Eerste Wereldoorlog**?",
        options: ["1914-1918", "1939-1945", "1568-1648", "1789-1815"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is WO2 — vier jaar later.",
          "Dat is de Tachtigjarige Oorlog (NL).",
          "Dat is de tijd van de Franse Revolutie + Napoleon.",
        ],
      },
      {
        q: "Wanneer werd Nederland **bevrijd** van Duitse bezetting?",
        options: ["5 mei 1945", "11 november 1918", "15 augustus 1945", "9 november 1989"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is wapenstilstand WO1.",
          "Dat is de capitulatie van Japan — einde wereldoorlog, maar Nederland was al bevrijd.",
          "Dat is de val van de Berlijnse Muur — tijdvak 10.",
        ],
      },
    ],
  },
  {
    title: "Tijdvak 10 — Televisie en computer (1950 – nu)",
    explanation: "**Het laatste tijdvak** — onze eigen tijd, vol technologie en grote verschuivingen.\n\n**Koude Oorlog (1947-1989)**\n• Wereld verdeeld tussen **VS** (kapitalistisch) en **Sovjet-Unie** (communistisch).\n• Geen rechtstreekse oorlog, wel: wapenwedloop, ruimtevaart, spionnage.\n• 1961: bouw **Berlijnse Muur** — symbool van de scheiding.\n• 1989: **val Berlijnse Muur** — einde Koude Oorlog.\n• 1991: Sovjet-Unie valt uiteen.\n\n**Dekolonisatie**\n• Koloniën worden onafhankelijk: Nederlands-Indië → Indonesië (1949), Suriname (1975).\n\n**Europese eenwording**\n• 1957: **EEG** opgericht (voorloper van EU).\n• 2002: invoering **euro**.\n\n**Technologische revolutie**\n• Televisie (vanaf jaren '50).\n• Computer + internet (vanaf jaren '90).\n• Smartphone (vanaf 2007).\n• Sociale media, AI.\n\n**Andere ontwikkelingen**:\n• Welvaart en sociale zekerheid in West-Europa.\n• **Klimaatverandering** wordt erkend als groot probleem.\n• **Globalisering**: wereldhandel, migratie, internationale samenwerking.",
    svg: tijdlijnSvg(9),
    checks: [
      {
        q: "Wat gebeurde er in 1989?",
        options: [
          "De Berlijnse Muur viel",
          "WO2 begon",
          "Nederland werd onafhankelijk",
          "De boekdrukkunst werd uitgevonden",
        ],
        answer: 0,
        wrongHints: [
          null,
          "WO2 begon in 1939.",
          "Nederlandse onafhankelijkheid = 1648 (Vrede van Münster).",
          "Boekdrukkunst = ~1450.",
        ],
      },
      {
        q: "Wat is de **Koude Oorlog**?",
        options: [
          "Spanning tussen VS en Sovjet-Unie zonder open oorlog",
          "Een oorlog in Antarctica",
          "Een oorlog uit de middeleeuwen",
          "De Tachtigjarige Oorlog",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet letterlijk koud qua temperatuur — figuurlijk.",
          "Middeleeuwen = tijdvak 3-4.",
          "Tachtigjarige Oorlog = tijdvak 5-6.",
        ],
      },
    ],
  },

  // ─── F. Eindopdracht ───────────────
  {
    title: "Eindopdracht — gebeurtenissen plaatsen",
    explanation: "Tijd om alles toe te passen! Bij elke gebeurtenis: in welk **tijdvak (1-10)** hoort het?\n\n**Snelle samenvatting**:\n\n| # | Naam | Periode | Sleutelwoord |\n|---|---|---|---|\n| 1 | Jagers en boeren | tot -3000 | hunebedden |\n| 2 | Grieken en Romeinen | -3000 tot 500 | democratie, limes |\n| 3 | Monniken en ridders | 500-1000 | feodalisme, Karel de Grote |\n| 4 | Steden en staten | 1000-1500 | gilden, drukpers |\n| 5 | Ontdekkers en hervormers | 1500-1600 | Columbus, Luther |\n| 6 | Regenten en vorsten | 1600-1700 | VOC, Lodewijk XIV |\n| 7 | Pruiken en revoluties | 1700-1800 | Verlichting, 1789 |\n| 8 | Burgers en stoommachines | 1800-1900 | industrie, grondwet 1848 |\n| 9 | Wereldoorlogen | 1900-1950 | WO1, WO2, Holocaust |\n| 10 | Televisie en computer | 1950-nu | Koude Oorlog, EU, internet |\n\nVeel succes!",
    svg: tijdlijnSvg(),
    checks: [
      {
        q: "In welk tijdvak hoort de **Tachtigjarige Oorlog** (1568-1648)?",
        options: ["Tijdvak 5 + 6", "Tijdvak 3", "Tijdvak 8", "Tijdvak 9"],
        answer: 0,
        wrongHints: [
          null,
          "Tijdvak 3 = vroege middeleeuwen, veel eerder.",
          "Tijdvak 8 = 19e eeuw, te laat.",
          "Tijdvak 9 = WO1+WO2, veel te laat.",
        ],
      },
      {
        q: "In welk tijdvak hoort **Columbus' ontdekking van Amerika** (1492)?",
        options: ["Tijdvak 5 — Ontdekkers", "Tijdvak 6", "Tijdvak 4", "Tijdvak 7"],
        answer: 0,
        wrongHints: [
          null,
          "Tijdvak 6 begint pas in 1600.",
          "Tijdvak 4 eindigt rond 1500 — 1492 is op de grens, maar 'ontdekkingsreizen' is het kenmerk van tijdvak 5.",
          "Tijdvak 7 = 1700-1800, veel te laat.",
        ],
      },
      {
        q: "In welk tijdvak hoort **Anne Frank**?",
        options: ["Tijdvak 9 — Wereldoorlogen", "Tijdvak 8", "Tijdvak 10", "Tijdvak 7"],
        answer: 0,
        wrongHints: [
          null,
          "Tijdvak 8 = 19e eeuw — te vroeg.",
          "Tijdvak 10 begint na WO2 — Anne Frank werd vermoord in 1945.",
          "Tijdvak 7 = 18e eeuw — te vroeg.",
        ],
      },
      {
        q: "In welk tijdvak hoort **de val van de Berlijnse Muur** (1989)?",
        options: ["Tijdvak 10", "Tijdvak 9", "Tijdvak 8", "Tijdvak 7"],
        answer: 0,
        wrongHints: [
          null,
          "Tijdvak 9 eindigt in 1950 — te vroeg.",
          "Tijdvak 8 = 19e eeuw.",
          "Tijdvak 7 = 18e eeuw.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tijdvakkenGeschiedenis = {
  id: "tijdvakken-geschiedenis",
  title: "De 10 tijdvakken — Nederlandse geschiedenis",
  emoji: "📜",
  level: "klas1-3",
  subject: "geschiedenis",
  intro:
    "Het skelet van Nederlandse geschiedenis: 10 tijdvakken van Jagers en boeren tot Televisie en computer. Per tijdvak de belangrijkste mensen, gebeurtenissen en uitvindingen — basis voor alle geschiedenisexamens.",
  triggerKeywords: [
    "tijdvak", "tijdvakken", "10 tijdvakken", "tien tijdvakken",
    "geschiedenis", "prehistorie",
    "jagers", "boeren", "hunebedden",
    "grieken", "romeinen", "rome", "athene",
    "middeleeuwen", "ridders", "monniken", "feodaal",
    "kruistochten", "boekdrukkunst", "gutenberg",
    "columbus", "luther", "reformatie", "ontdekkingsreizen",
    "tachtigjarige oorlog", "willem van oranje", "voc", "gouden eeuw",
    "verlichting", "franse revolutie", "napoleon",
    "industriele revolutie", "stoommachine", "thorbecke",
    "wereldoorlog", "wo1", "wo2", "tweede wereldoorlog", "anne frank",
    "koude oorlog", "berlijnse muur", "europese unie",
  ],
  chapters,
  steps,
};

export default tijdvakkenGeschiedenis;
