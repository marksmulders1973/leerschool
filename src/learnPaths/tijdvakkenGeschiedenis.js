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
        wrongHints: [null, "Te weinig — de Commissie De Rooy heeft er meer vastgesteld.", "Te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [{ titel: "10 tijdvakken (NL-canon)", tekst: "Commissie De Rooy heeft de geschiedenis in 10 tijdvakken verdeeld. Elk tijdvak heeft een NAAM die typisch is voor die periode (jagers, monniken, ontdekkers, etc)." }],
          woorden: [{ woord: "tijdvak", uitleg: "Periode in de geschiedenis met een eigen naam en kenmerken." }, { woord: "Commissie De Rooy", uitleg: "Werkgroep die in 2001 de 10 tijdvakken vastlegde voor het onderwijs." }],
          theorie: "Doel: overzicht in lange geschiedenis. Elk tijdvak loopt 100-3000 jaar. Vroegste tijdvakken zijn het langst (jagers tot 3000 v.Chr.), recentste het kortst.",
          voorbeelden: [{ type: "lijstje", tekst: "1 Jagers+boeren · 2 Grieken+Romeinen · 3 Monniken+ridders · ... · 10 Televisie+computer. Onthoud namen + volgorde." }],
          basiskennis: [{ onderwerp: "Niet 5/8/12", uitleg: "10 is de NL-standaard. Andere landen hebben eigen indelingen." }],
          niveaus: { basis: "10. A.", simpeler: "Nederlandse geschiedenis-canon = 10 tijdvakken. = A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "Wat is het **eerste** tijdvak?",
        options: ["Jagers en boeren", "Grieken en Romeinen", "Monniken en ridders", "Wereldoorlogen"],
        answer: 0,
        wrongHints: [null, "Dat is tijdvak 2 — een lang tweede tijdvak (3000 v.Chr. tot 500 n.Chr.).", "Dat is tijdvak 3 — vroege middeleeuwen.", "Dat is tijdvak 9 — pas in de 20e eeuw."],
        uitlegPad: {
          stappen: [{ titel: "Prehistorie = jagers+boeren", tekst: "Tijdvak 1 = Jagers en boeren, tot 3000 v.Chr. Alles vóór schrift. Mensen leefden van jacht + later landbouw. Geen geschreven bronnen." }],
          woorden: [{ woord: "prehistorie", uitleg: "Tijd vóór het schrift (in NL tot ~3000 v.Chr). Alles wat we weten komt uit archeologie." }, { woord: "landbouwrevolutie", uitleg: "Overgang van jagers-verzamelaars naar boeren (~10.000 v.Chr.)." }],
          theorie: "Eerste fase: jagers-verzamelaars (rondtrekkend). Tweede fase: landbouw + vaste dorpen + aardewerk. In NL: hunebedden ~3000 v.Chr.",
          voorbeelden: [{ type: "NL-spoor", tekst: "Hunebedden in Drenthe = stenen graven van Trechterbekercultuur ~3000 v.Chr. Toeristische bezienswaardigheid." }],
          basiskennis: [{ onderwerp: "Volgorde belangrijk", uitleg: "Tijdvak 2/3/9 komen LATER. Eerste = jagers." }],
          niveaus: { basis: "Jagers en boeren. A.", simpeler: "Eerste tijdvak = jagers + boeren, prehistorie tot 3000 v.Chr. = A.", nogSimpeler: "Jagers = A." },
        },
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
        options: ["Mensen gingen op één plek wonen en akkers bewerken", "Mensen ontdekten elektriciteit", "Romeinen veroverden Nederland", "De boekdrukkunst werd uitgevonden"],
        answer: 0,
        wrongHints: [null, "Elektriciteit is veel later — pas in tijdvak 8.", "Romeinen kwamen in tijdvak 2.", "Boekdrukkunst = ~1450, dat is tijdvak 5."],
        uitlegPad: {
          stappen: [{ titel: "Rondtrekkend → vast", tekst: "Landbouwrevolutie (~10.000 v.Chr.) = mensen stoppen met rondtrekken en gaan VAST WONEN. Ze verbouwen graan + houden vee. Eerste dorpen ontstaan." }],
          woorden: [{ woord: "landbouwrevolutie", uitleg: "Overgang van jacht-verzameling naar landbouw + veeteelt." }, { woord: "neolithicum", uitleg: "Jonge steentijd — periode van landbouwrevolutie." }],
          theorie: "Grote gevolgen: voedseloverschot → bevolkingsgroei → specialisatie (niet iedereen meer boer) → handel → eerste steden. Basis voor alle latere beschaving.",
          voorbeelden: [{ type: "Mesopotamië", tekst: "Eerste landbouw in Vruchtbare Halve Maan (Turkije/Irak/Iran). Verspreidde zich daarna naar Europa." }],
          basiskennis: [{ onderwerp: "Niet elektriciteit/Romeinen/boekdruk", uitleg: "Dat zijn veel latere uitvindingen — andere tijdvakken." }],
          niveaus: { basis: "Vast wonen + akkers. A.", simpeler: "Landbouwrevolutie = mensen stoppen met rondtrekken en gaan een vast huis bouwen + akkers bewerken. = A.", nogSimpeler: "Vast wonen = A." },
        },
      },
      {
        q: "Wat zijn **hunebedden**?",
        options: ["Stenen graven uit ~3000 v.Chr. in Drenthe", "Romeinse forten", "Middeleeuwse kastelen", "Boerderijen uit de Gouden Eeuw"],
        answer: 0,
        wrongHints: [null, "Romeinen kwamen pas in tijdvak 2.", "Kastelen zijn middeleeuws — tijdvak 3-4.", "Gouden Eeuw is tijdvak 6."],
        uitlegPad: {
          stappen: [{ titel: "Oudste monumenten NL", tekst: "Hunebedden = grote stenen graven uit ~3000 v.Chr. Gebouwd door de Trechterbekercultuur (TRB). Vooral in Drenthe (53 stuks). Per hunebed: enorme stenen (10-25 ton) bovenop kleinere." }],
          woorden: [{ woord: "hunebed", uitleg: "Megalitisch graf van zwerfkeien. Oudste monument NL (~5000 jaar oud)." }, { woord: "Trechterbekercultuur", uitleg: "Neolithische cultuur in Noord-NL/Duitsland (~3400-2800 v.Chr.). Genoemd naar trechter-vormige potten." }],
          theorie: "Stenen kwamen door ijstijden vanuit Scandinavië. Mensen sleepten ze + plaatsten ze als graf. Bedoeld voor collectieve begrafenissen. Toeristische bezienswaardigheid bij Borger (Hunebed-D27, grootste van NL).",
          voorbeelden: [{ type: "praktijk", tekst: "Hunebed D27 in Borger: 22 m lang, ~22 stenen. Bezoek gratis." }],
          basiskennis: [{ onderwerp: "Niet later", uitleg: "Hunebedden zijn PREHISTORISCH — vóór Romeinen, vóór Middeleeuwen, ver vóór Gouden Eeuw." }],
          niveaus: { basis: "Stenen graven tijdvak 1. A.", simpeler: "Hunebedden = stenen graven van ~5000 jaar geleden in Drenthe. = A.", nogSimpeler: "Oude graven = A." },
        },
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
        wrongHints: [null, "Rome was eerst een republiek, pas later een keizerrijk — geen democratie zoals Athene.", "Sparta had juist een militaire koningsregering, geen democratie.", "Egypte had farao's — absolute monarchen."],
        uitlegPad: {
          stappen: [{ titel: "Athene ~500 v.Chr.", tekst: "Eerste democratie in Athene (~508 v.Chr., onder Cleisthenes). Volwassen mannelijke burgers stemden in volksvergadering over wetten en oorlog. Niet voor vrouwen, slaven, vreemdelingen — eerste vorm, niet perfect." }],
          woorden: [{ woord: "democratie", uitleg: "Volk-bestuur. Athene 5e eeuw v.Chr. = eerste gedocumenteerde vorm." }, { woord: "demos", uitleg: "Grieks voor 'volk'. 'Kratos' = macht. Democratie = volksmacht." }],
          theorie: "Athene was uniek: directe democratie. Wij hebben tegenwoordig vertegenwoordigende democratie (parlement). Rome had republiek (senaat + magistraten), Sparta militaire koningsregering, Egypte absolute monarchie (farao).",
          voorbeelden: [{ type: "praktijk", tekst: "Atheners stemden op de Pnyx-heuvel, 6.000 burgers tegelijk. Beslissingen direct, geen verkozen leiders zoals nu." }],
          basiskennis: [{ onderwerp: "Niet Rome", uitleg: "Rome was REPUBLIEK (senaat) — geen democratie zoals Athene. Verschil: vertegenwoordigers vs alle burgers direct." }],
          niveaus: { basis: "Athene. A.", simpeler: "Eerste democratie = Athene ~500 v.Chr. Mannen stemden zelf over wetten. = A.", nogSimpeler: "Athene = A." },
        },
      },
      {
        q: "Wanneer eindigt tijdvak 2?",
        options: ["476 — val van het West-Romeinse Rijk", "1492 — ontdekking Amerika", "1789 — Franse Revolutie", "1945 — einde WO2"],
        answer: 0,
        wrongHints: [null, "Dat is in tijdvak 5 — Ontdekkers en hervormers.", "Dat is tijdvak 7.", "Dat is tijdvak 9."],
        uitlegPad: {
          stappen: [{ titel: "Val Rome 476", tekst: "Tijdvak 2 eindigt in 476 met val van het West-Romeinse Rijk. Germaanse stam onder Odoaker zette laatste keizer Romulus Augustulus af. Begin Middeleeuwen (tijdvak 3)." }],
          woorden: [{ woord: "Val van Rome", uitleg: "Einde West-Romeinse Rijk in 476. Oost-Romeinse Rijk (Byzantium) leefde nog 1000 jr door." }, { woord: "Romulus Augustulus", uitleg: "Laatste keizer van West-Rome. Afgezet 4 sept 476." }],
          theorie: "Belangrijke jaartallen om te onthouden: 3000 v.Chr. (begin tijdvak 2), 476 (einde 2 / begin 3), 1500 (begin 5), 1789 (Franse Revolutie tijdvak 7), 1900 (begin 9), 1945 (einde 9).",
          voorbeelden: [{ type: "tijdlijn", tekst: "476 = scharnierpunt. Daarvoor: Romeinen domineren Europa. Daarna: chaos, Germaanse koninkrijken, opkomst Kerk." }],
          basiskennis: [{ onderwerp: "Andere jaartallen", uitleg: "1492 = ontdekking Amerika (tijdvak 5). 1789 = FR (tijdvak 7). 1945 = WO2 einde (tijdvak 9)." }],
          niveaus: { basis: "476 Val Rome. A.", simpeler: "Tijdvak 2 (Grieken+Romeinen) eindigt in 476 met val West-Romeinse Rijk. = A.", nogSimpeler: "476 = A." },
        },
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
        options: ["Koning geeft land aan ridders, die hem in ruil daarvoor beschermen", "Iedereen mag stemmen voor de koning", "Het systeem van Romeinse legerkampen", "Een soort handelsroute"],
        answer: 0,
        wrongHints: [null, "Stemmen kwam pas veel later (Athene tijdvak 2, of moderne democratie tijdvak 8+).", "Romeinse legerkampen = tijdvak 2.", "Een handelsroute is iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Land voor bescherming", tekst: "Feodaal stelsel = piramide. Koning bovenaan → geeft LEEN (stuk land) aan ridder/leenheer → die ridder belooft trouw + leveren van soldaten in oorlog. Boeren onderaan werken op het land in ruil voor bescherming." }],
          woorden: [{ woord: "feodaal stelsel", uitleg: "Middeleeuws systeem van wederzijdse verplichtingen: land tegen trouw + bescherming." }, { woord: "leenheer", uitleg: "Persoon die land in leen GEEFT (boven in piramide)." }, { woord: "leenman", uitleg: "Persoon die land in leen ONTVANGT en trouw belooft." }, { woord: "horige", uitleg: "Boer aan het land gebonden — niet vrij om weg te gaan." }],
          theorie: "Werkt zonder centraal geld-systeem. Eigenaarschap loopt via persoonlijke trouw, niet via koop. Eindigt geleidelijk met opkomst steden + geld + centrale staten (tijdvak 4-5).",
          voorbeelden: [{ type: "praktijk", tekst: "Koning Karel geeft hertog Hugo 100 ha land. Hugo levert in oorlog 20 ridders. Hugo geeft op zijn beurt stukken aan kleinere ridders." }],
          basiskennis: [{ onderwerp: "Niet stemmen", uitleg: "Feodaal is hiërarchisch, niet democratisch. Geen stemmen — gewoon hiërarchie van trouw." }],
          niveaus: { basis: "Land tegen bescherming. A.", simpeler: "Koning geeft land aan ridders, ridders beschermen koning. Hiërarchie. = A.", nogSimpeler: "Land=bescherming = A." },
        },
      },
      {
        q: "Wie werd in 800 tot keizer gekroond door de paus?",
        options: ["Karel de Grote", "Julius Caesar", "Willem van Oranje", "Napoleon"],
        answer: 0,
        wrongHints: [null, "Caesar leefde rond 100-44 v.Chr. — tijdvak 2.", "Willem van Oranje = tijdvak 5/6 (1500s).", "Napoleon = tijdvak 7 (1800)."],
        uitlegPad: {
          stappen: [{ titel: "Karel de Grote 800", tekst: "Karel de Grote (768-814) was koning van de Franken. Bouwde een groot rijk dat Frankrijk + Duitsland + NL + Noord-Italië besloeg. In jaar 800 werd hij in Rome door de paus tot KEIZER gekroond — symbool van macht + christelijke legitimering." }],
          woorden: [{ woord: "Karel de Grote", uitleg: "Frankisch koning (768-814). Eerste 'keizer' van Europa sinds val Rome. Voorloper Heilige Romeinse Rijk." }, { woord: "kroning", uitleg: "Officiële ceremonie waarin iemand koning/keizer wordt. Vaak door paus = goddelijk gezag." }],
          theorie: "Paus gaf kroon = Karel's macht 'door God gegeven'. Politiek slim: paus krijgt beschermer, Karel krijgt legitimiteit. Patroon herhaalt zich tot Napoleon (zelf kroont zich in 1804!).",
          voorbeelden: [{ type: "rijk Karel", tekst: "Carolingisch Rijk omvatte Frankrijk + Duitsland + Lage Landen + Noord-Italië + delen Oostenrijk. Hoofdstad Aken." }],
          basiskennis: [{ onderwerp: "Tijdvak 3", uitleg: "800 = midden in tijdvak 3 (Monniken+ridders). Andere namen zijn andere tijdvakken." }],
          niveaus: { basis: "Karel de Grote. A.", simpeler: "Karel de Grote werd in 800 tot keizer gekroond door de paus in Rome. = A.", nogSimpeler: "Karel = A." },
        },
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
        options: ["Organisaties van ambachtslieden in steden", "Soort kerkgebouwen", "Romeinse soldaten", "Vikinglegers"],
        answer: 0,
        wrongHints: [null, "Kerken zijn iets anders — die hadden monniken.", "Romeinen waren tijdvak 2.", "Vikingen waren tijdvak 3."],
        uitlegPad: {
          stappen: [{ titel: "Beroepsverenigingen", tekst: "Gilden = middeleeuwse organisaties van vakgenoten in steden: bakkersgilde, smedengilde, weversgilde. Regelden prijzen, kwaliteit, opleiding (leerling→gezel→meester). Soort 'vakbond'." }],
          woorden: [{ woord: "gilde", uitleg: "Beroepsorganisatie van ambachtslieden, vooral 13e-17e eeuw." }, { woord: "meesterproef", uitleg: "Test om van gezel meester te worden — toelating tot gilde." }],
          theorie: "Gilden gaven zekerheid + standaard. Maar ook beperkend: alleen wie lid was mocht het beroep uitoefenen → monopolie. Verdwenen na Franse Revolutie (vrij ondernemerschap).",
          voorbeelden: [{ type: "rembrandt", tekst: "Beroemd schilderij 'De Staalmeesters' (Rembrandt 1662) = bestuur van het lakengilde Amsterdam." }],
          basiskennis: [{ onderwerp: "Niet kerk/militair", uitleg: "Gilde = economisch beroepsorganisatie, niet religieus of militair." }],
          niveaus: { basis: "Ambacht-organisaties. A.", simpeler: "Gilde = club van vakgenoten (bakkers, smeden) die samen prijzen + kwaliteit regelden. = A.", nogSimpeler: "Vakgenoten = A." },
        },
      },
      {
        q: "Wat veranderde de **boekdrukkunst** (~1450)?",
        options: ["Boeken werden veel goedkoper en kennis verspreidde sneller", "De Romeinen vonden Nederland", "Kastelen werden gebouwd", "Het christendom werd verboden"],
        answer: 0,
        wrongHints: [null, "Romeinen kwamen veel eerder — tijdvak 2.", "Kastelen werden vooral in tijdvak 3-4 gebouwd, los van de drukpers.", "Christendom bleef heel sterk."],
        uitlegPad: {
          stappen: [{ titel: "Massa-kopie van kennis", tekst: "Tot 1450 moesten monniken boeken HAND-KOPIËREN — maanden werk, peperduur. Gutenberg's drukpers (1450) kon honderden kopieën per dag. Boeken werden 100× goedkoper, kennis breed beschikbaar." }],
          woorden: [{ woord: "boekdrukkunst", uitleg: "Mechanische druk met losse letters. Gutenberg ~1450 in Mainz." }, { woord: "Gutenberg-bijbel", uitleg: "Eerste gedrukte boek (1455). Symbool van revolutie." }],
          theorie: "Gevolgen: (1) Bijbel in volkstalen verspreid → bron voor Reformatie 1517, (2) wetenschappelijke ideeën verspreidden sneller → Renaissance + Verlichting, (3) geletterdheid omhoog. Een van de belangrijkste uitvindingen ooit.",
          voorbeelden: [{ type: "vergelijking", tekst: "Vóór 1450: bijbel kostte ~3 jaarlonen, 1 jaar werk om te maken. Na 1450: enkele weeklonen, dagen om te drukken." }],
          basiskennis: [{ onderwerp: "Niet Romeinen/kastelen/christendom", uitleg: "Boekdruk heeft niets met die zaken te maken — gaat over informatie-verspreiding." }],
          niveaus: { basis: "Goedkoper + verspreid. A.", simpeler: "Boekdrukkunst (~1450) = boeken werden 100× goedkoper, iedereen kon leren lezen. = A.", nogSimpeler: "Goedkoper = A." },
        },
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
        options: ["Plakte 95 stellingen op de kerkdeur als protest", "Ontdekte Amerika", "Werd koning van Nederland", "Vond de boekdrukkunst uit"],
        answer: 0,
        wrongHints: [null, "Dat was Columbus, in 1492.", "Nederland had toen nog geen koning — was deel van het Spaanse rijk.", "Boekdrukkunst was eerder, ~1450 (Gutenberg)."],
        uitlegPad: {
          stappen: [{ titel: "95 stellingen Wittenberg", tekst: "31 oktober 1517: Maarten Luther (Duits monnik) plakt 95 stellingen op de slotkerkdeur in Wittenberg. Protest tegen aflaten-handel + corruptie katholieke kerk. Begin van REFORMATIE." }],
          woorden: [{ woord: "95 stellingen", uitleg: "Luthers lijst van bezwaren tegen katholieke praktijken. Schriftelijk protest." }, { woord: "aflaten", uitleg: "Pauselijke 'vergevingsbriefjes' tegen betaling — Luther vond dit corrupt." }, { woord: "Reformatie", uitleg: "Kerk-hervormingsbeweging 16e eeuw. Splitsing katholiek vs protestants." }],
          theorie: "Luther wilde aanvankelijk alleen hervorming, geen scheiding. Maar paus excommuniceerde hem → eigen protestantse kerk. Gevolgen: Europa religieus verdeeld, godsdienstoorlogen, Tachtigjarige Oorlog in NL.",
          voorbeelden: [{ type: "publicatie", tekst: "Luthers stellingen werden dankzij boekdrukkunst (~1450) razendsnel verspreid. Boekdruk + Luther = revolutie." }],
          basiskennis: [{ onderwerp: "Niet Columbus/koning/boekdruk", uitleg: "Columbus 1492 (eerder). Boekdruk 1450 (eerder, Gutenberg). Luther was monnik, niet koning." }],
          niveaus: { basis: "95 stellingen 1517. A.", simpeler: "Luther plakte in 1517 95 protestbrieven op de kerkdeur. Begin Reformatie. = A.", nogSimpeler: "Luther = A." },
        },
      },
      {
        q: "Wanneer begint de **Tachtigjarige Oorlog**?",
        options: ["1568", "1492", "1815", "1914"],
        answer: 0,
        wrongHints: [null, "Dat is Columbus' jaar.", "Dat is na Napoleon — tijdvak 8.", "Dat is begin WO1 — tijdvak 9."],
        uitlegPad: {
          stappen: [{ titel: "1568 begin, 1648 einde", tekst: "Tachtigjarige Oorlog = NL-opstand tegen Spaanse koning Filips II. Officieel begin: 1568 (slag bij Heiligerlee). Einde: 1648 (Vrede van Münster) — Spanje erkent NL-onafhankelijkheid. 80 jaar oorlog ertussen." }],
          woorden: [{ woord: "Tachtigjarige Oorlog", uitleg: "1568-1648. NL-opstand tegen Spanje, leidde tot Republiek der Zeven Verenigde Nederlanden." }, { woord: "Willem van Oranje", uitleg: "Leider van NL-opstand. 'Vader des vaderlands'. Vermoord 1584." }],
          theorie: "Oorzaken: religieus (protestants NL vs katholiek Spanje), economisch (hoge belastingen Filips II), politiek (autonomie steden bedreigd). Geen continue oorlog — verschillende fases met wapenstilstand.",
          voorbeelden: [{ type: "tijdvak", tekst: "Begin 1568 (tijdvak 5), eindigt 1648 (tijdvak 6). Strekt over 2 tijdvakken." }],
          basiskennis: [{ onderwerp: "Niet 1492/1815/1914", uitleg: "1492 = Columbus. 1815 = einde Napoleon. 1914 = WO1. Andere tijdvakken." }],
          niveaus: { basis: "1568. A.", simpeler: "Tachtigjarige Oorlog: 1568-1648, NL tegen Spanje. = A.", nogSimpeler: "1568 = A." },
        },
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
        options: ["Vereenigde Oost-Indische Compagnie — handelsbedrijf in Azië", "Een politieke partij in Nederland", "Het Romeinse leger", "Een protestantse kerk"],
        answer: 0,
        wrongHints: [null, "Politieke partijen zoals nu kwamen pas in de 19e eeuw — tijdvak 8.", "Romeinen = tijdvak 2.", "VOC was een handelsbedrijf, geen kerk."],
        uitlegPad: {
          stappen: [{ titel: "Eerste multinational ter wereld", tekst: "VOC = Vereenigde Oost-Indische Compagnie, opgericht 1602. Handel in specerijen uit Indonesië. Had eigen leger + vloot + recht om oorlog te voeren. Verdiende fortuin in Gouden Eeuw — basis Nederlandse welvaart." }],
          woorden: [{ woord: "VOC", uitleg: "1602-1799. Specerijen-handelsbedrijf met staats-rechten." }, { woord: "WIC", uitleg: "West-Indische Compagnie. Handel + kolonisatie Amerika + Afrika (ook slavenhandel)." }, { woord: "stuk", uitleg: "Aandeel in VOC. Eerste beurs ter wereld (Amsterdam 1602)." }],
          theorie: "VOC was prive-onderneming MET overheidstaken (oorlog, koloniseren). Innovatief: eerste echte multinational met aandeelhouders. Donkere kant: kolonisatie, geweld tegen lokale bevolking, slavernij via WIC.",
          voorbeelden: [{ type: "schaal", tekst: "Op piek: 25.000 medewerkers, 150 schepen, handelsposten van Kaap tot Japan. Batavia (huidige Jakarta) = hoofdstad." }],
          basiskennis: [{ onderwerp: "Niet politiek/leger/kerk", uitleg: "VOC was COMMERCIEEL bedrijf, geen partij/leger/kerk." }],
          niveaus: { basis: "Handelscompagnie Azië. A.", simpeler: "VOC = NL-handelsbedrijf in specerijen uit Indonesië, 17e eeuw. Eerste multinational. = A.", nogSimpeler: "Handel = A." },
        },
      },
      {
        q: "Wie was **Lodewijk XIV**?",
        options: ["Absolute koning van Frankrijk ('Zonnekoning')", "Engelse koning", "Nederlandse stadhouder", "Spaanse keizer"],
        answer: 0,
        wrongHints: [null, "Engelse koningen heetten in deze tijd vaak Charles of James.", "Stadhouders waren Oranjes (Willem III bv.).", "Spanje had koningen, maar Lodewijk was Frans."],
        uitlegPad: {
          stappen: [{ titel: "Zonnekoning Frankrijk", tekst: "Lodewijk XIV (1638-1715) = absolute koning van Frankrijk, 72 jaar geregeerd. Symbool: zon. Quote: \"L'État, c'est moi\" (de staat, dat ben ik). Bouwde paleis Versailles als statussymbool." }],
          woorden: [{ woord: "Lodewijk XIV", uitleg: "Franse koning 1643-1715. Symbool van absolute monarchie." }, { woord: "absolute monarchie", uitleg: "Koning heeft ALLE macht, geen parlement, geen beperkingen." }, { woord: "Versailles", uitleg: "Reusachtig paleis bij Parijs. Symbool van Lodewijks macht + adel onder controle." }],
          theorie: "Lodewijk verzamelde adel in Versailles → onder controle. Voerde veel oorlogen (kostbaar voor Frankrijk). Tijdsbeeld: terwijl NL koningloze republiek had, was Frankrijk absolute monarchie. Tegenstelling die tot Tweede Engels-Nederlandse Oorlog leidde.",
          voorbeelden: [{ type: "Versailles", tekst: "Versailles: 2.300 kamers, 700 woon-aristocraten, 50 jaar bouw. Symbool macht." }],
          basiskennis: [{ onderwerp: "Niet Engels/NL/Spaans", uitleg: "Lodewijk = Frans. Engelse koningen Charles/James. NL had stadhouders (Oranjes). Spanje eigen koningen." }],
          niveaus: { basis: "Franse zonnekoning. A.", simpeler: "Lodewijk XIV = absolute koning Frankrijk, 'Zonnekoning', paleis Versailles. = A.", nogSimpeler: "Frans = A." },
        },
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
        options: ["Scheiding tussen wetgevende, uitvoerende en rechtsprekende macht", "Drie soorten kerken", "Drie keizers in Rome", "Een drie-eenheid in het christendom"],
        answer: 0,
        wrongHints: [null, "Niets met kerk — het gaat over politieke macht.", "Romeinse keizers zijn een ander thema.", "Drie-eenheid is een godsdienstig idee, geen politiek systeem."],
        uitlegPad: {
          stappen: [{ titel: "Macht in 3 delen", tekst: "Trias politica = bedacht door Montesquieu (1748). Drie machten gescheiden: WETGEVEND (parlement maakt wetten), UITVOEREND (regering voert uit), RECHTSPREKEND (rechters oordelen). Doel: voorkomen dat 1 persoon alles kan." }],
          woorden: [{ woord: "trias politica", uitleg: "Latijn: 'drie machten'. Filosofisch principe achter moderne rechtsstaten." }, { woord: "Montesquieu", uitleg: "Frans Verlichtingsdenker. Boek 'De l'esprit des lois' (1748)." }],
          theorie: "Toegepast in Amerikaanse grondwet (1787) + Franse (1791). Vandaag in bijna alle democratieën. NL: parlement (wetten), regering (uitvoeren), Hoge Raad (rechtspraak). Onafhankelijkheid = balans en controle.",
          voorbeelden: [{ type: "NL", tekst: "Tweede Kamer maakt wet → regering voert uit → rechter toetst of conform grondwet. Geen ENIGE persoon kan alles." }],
          basiskennis: [{ onderwerp: "Niet religie", uitleg: "Trias politica = POLITIEK begrip. Drie-eenheid (Vader/Zoon/Heilige Geest) is religieus, andere zaak." }],
          niveaus: { basis: "Wetgevend+uitvoerend+rechter. A.", simpeler: "Trias politica = macht in 3 delen: wetten maken / uitvoeren / oordelen. Door Montesquieu. = A.", nogSimpeler: "3 machten = A." },
        },
      },
      {
        q: "Wanneer was de **Franse Revolutie**?",
        options: ["1789", "1568", "1492", "1914"],
        answer: 0,
        wrongHints: [null, "Dat was begin Tachtigjarige Oorlog — tijdvak 5.", "Dat was Columbus.", "Dat was begin WO1."],
        uitlegPad: {
          stappen: [{ titel: "1789 — bestorming Bastille", tekst: "Franse Revolutie begon 14 juli 1789 met bestorming van de Bastille (gevangenis Parijs). Het volk in opstand tegen koning Lodewijk XVI + zware belastingen + adelvoorrechten. Slogan: 'Vrijheid, Gelijkheid, Broederschap'." }],
          woorden: [{ woord: "Franse Revolutie", uitleg: "1789-1799. Volksopstand tegen monarchie + standenmaatschappij." }, { woord: "guillotine", uitleg: "Onthoofdingsmachine. Lodewijk XVI + Marie-Antoinette werden er in 1793 mee gedood." }, { woord: "Verklaring Rechten van de Mens", uitleg: "Augustus 1789. Eerste moderne grondrechten-verklaring." }],
          theorie: "Gevolgen: einde absolute monarchie Frankrijk. Verspreiding ideeën Verlichting door Europa. Napoleon kwam aan macht (1799), veroverde NL. Ideeën inspireerden NL-grondwet 1848 + alle moderne democratieën.",
          voorbeelden: [{ type: "fase", tekst: "1789 begin → 1793 Lodewijk onthoofd → 1799 Napoleon staatsgreep → 1815 Napoleon verslagen bij Waterloo." }],
          basiskennis: [{ onderwerp: "Tijdvak 7", uitleg: "1789 = midden in tijdvak 7 (Pruiken+revoluties). Andere jaartallen zijn andere tijdvakken." }],
          niveaus: { basis: "1789. A.", simpeler: "Franse Revolutie = 1789, bestorming Bastille, volk tegen koning. = A.", nogSimpeler: "1789 = A." },
        },
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
        options: ["Fabrieken, treinen en massaproductie kwamen op", "Iedereen kreeg een computer", "Romeinen werden machtig", "De middeleeuwen begonnen"],
        answer: 0,
        wrongHints: [null, "Computers = tijdvak 10.", "Romeinen = tijdvak 2.", "Middeleeuwen begonnen in tijdvak 3."],
        uitlegPad: {
          stappen: [{ titel: "Industriële revolutie", tekst: "Stoommachine (verbeterd door James Watt 1769) gaf MASSALE krachtbron. Fabrieken konden produceren zonder mens-kracht. Trein verving paard. Stoomschepen vervangen zeilboten. Massale verstedelijking + arbeidersklasse." }],
          woorden: [{ woord: "stoommachine", uitleg: "Apparaat dat warmte (kolen → stoom) omzet in beweging. Basis industriële revolutie." }, { woord: "industriële revolutie", uitleg: "Overgang van hand-arbeid naar mechanische productie, ~1750-1900. Begin in Engeland." }],
          theorie: "Gevolgen: massa-werkloosheid ambachtslieden, opkomst fabrieks-arbeider, kinderarbeid, slechte werkomstandigheden, opkomst vakbonden, urbanisatie. Sleutel-uitvinding 19e eeuw — vergelijkbaar met internet voor 20e eeuw.",
          voorbeelden: [{ type: "fabriek", tekst: "Eerste textielfabrieken in Engeland 1780s → werknemers 14u/dag, soms kinderen vanaf 6 jr. Lagere kosten textiel → wereldhandel boomde." }],
          basiskennis: [{ onderwerp: "Niet computers/Romeinen", uitleg: "Computers = tijdvak 10. Romeinen = tijdvak 2. Stoommachine = tijdvak 8." }],
          niveaus: { basis: "Fabrieken + treinen. A.", simpeler: "Stoommachine → eerste fabrieken + treinen + massaproductie. = A.", nogSimpeler: "Fabrieken = A." },
        },
      },
      {
        q: "Wanneer kwam de **Nederlandse grondwet** van Thorbecke?",
        options: ["1848", "1568", "1789", "1914"],
        answer: 0,
        wrongHints: [null, "Begin Tachtigjarige Oorlog — tijdvak 5.", "Franse Revolutie — tijdvak 7.", "Begin WO1 — tijdvak 9."],
        uitlegPad: {
          stappen: [{ titel: "1848 grondwet Thorbecke", tekst: "Thorbecke schreef NL-grondwet in 1848 (in 24 uur tijdens revolutie-jaar Europa). Koning Willem II ('die nacht van conservatief naar liberaal'). Sindsdien: parlement maakt wetten, koning werd ceremonieel hoofd. Basis huidige democratie." }],
          woorden: [{ woord: "Thorbecke", uitleg: "Johan Rudolf Thorbecke (1798-1872). Liberaal staatsman. Vader Nederlandse grondwet." }, { woord: "constitutionele monarchie", uitleg: "Koning blijft, maar parlement heeft echte macht. Modern NL-model." }],
          theorie: "Voor 1848: koning regeerde absoluut. Na 1848: ministers verantwoordelijk aan parlement, niet alleen aan koning. Kiesrecht eerst alleen rijken (censuskiesrecht), later algemeen (1917 mannen, 1919 vrouwen).",
          voorbeelden: [{ type: "context", tekst: "1848 was revolutiejaar in heel Europa. Veel landen kregen toen grondwet. NL deed het netjes via Thorbecke, geen geweld." }],
          basiskennis: [{ onderwerp: "Niet andere jaartallen", uitleg: "1568 = Tachtigjarige Oorlog (tijdvak 5). 1789 = Franse Revolutie (tijdvak 7). 1914 = WO1 (tijdvak 9)." }],
          niveaus: { basis: "1848. A.", simpeler: "NL-grondwet kwam in 1848 — Thorbecke maakte 'm. Koning kreeg minder macht. = A.", nogSimpeler: "1848 = A." },
        },
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
        options: ["De Berlijnse Muur viel", "WO2 begon", "Nederland werd onafhankelijk", "De boekdrukkunst werd uitgevonden"],
        answer: 0,
        wrongHints: [null, "WO2 begon in 1939.", "Nederlandse onafhankelijkheid = 1648 (Vrede van Münster).", "Boekdrukkunst = ~1450."],
        uitlegPad: {
          stappen: [{ titel: "9 november 1989 — Muur valt", tekst: "De Berlijnse Muur (gebouwd 1961) scheidde Oost- en West-Berlijn 28 jaar lang. Op 9 november 1989 mocht het Oost-Duitse volk plots vrij naar het westen. Mensen sloegen de muur eigenhandig kapot. Symbool van het einde Koude Oorlog." }],
          woorden: [{ woord: "Berlijnse Muur", uitleg: "Betonnen muur 1961-1989 die Berlijn in tweeën deelde. Symbool IJzeren Gordijn." }, { woord: "IJzeren Gordijn", uitleg: "Term Churchill: scheidslijn tussen democratisch West-Europa en communistisch Oost-Europa." }],
          theorie: "Gevolgen: Duitse hereniging (3 oktober 1990). Einde Sovjet-Unie (1991). Oost-Europese landen werden democratisch + traden later EU+NAVO toe. Start tijdvak-10 fase 'na Koude Oorlog'.",
          voorbeelden: [{ type: "context", tekst: "Niet alleen Berlijn — in 1989 vielen communistische regimes in Polen, Hongarije, Tsjechoslowakije, Roemenië. Heel Oost-Europa veranderde in 1 jaar." }],
          basiskennis: [{ onderwerp: "Niet andere jaartallen", uitleg: "1939 = begin WO2. 1648 = Vrede van Münster (NL onafhankelijk). 1450 = boekdrukkunst Gutenberg." }],
          niveaus: { basis: "Muur viel. A.", simpeler: "1989 = Berlijnse Muur viel, einde Koude Oorlog. = A.", nogSimpeler: "Muur weg = A." },
        },
      },
      {
        q: "Wat is de **Koude Oorlog**?",
        options: ["Spanning tussen VS en Sovjet-Unie zonder open oorlog", "Een oorlog in Antarctica", "Een oorlog uit de middeleeuwen", "De Tachtigjarige Oorlog"],
        answer: 0,
        wrongHints: [null, "Niet letterlijk koud qua temperatuur — figuurlijk.", "Middeleeuwen = tijdvak 3-4.", "Tachtigjarige Oorlog = tijdvak 5-6."],
        uitlegPad: {
          stappen: [{ titel: "1945-1989 — twee blokken", tekst: "Na WO2 stonden 2 supermachten tegenover elkaar: VS (kapitalisme/democratie) en Sovjet-Unie (communisme/dictatuur). Géén directe oorlog tussen hen (vandaar 'koud'), maar wel wapenwedloop, ruimterace, kernwapens, spionage, en proxy-oorlogen (Korea, Vietnam, Afghanistan)." }],
          woorden: [{ woord: "Koude Oorlog", uitleg: "1945-1989. Spanning tussen VS en USSR zonder open militair conflict tussen hen direct." }, { woord: "wapenwedloop", uitleg: "Beide kanten bouwden steeds meer en grotere kernwapens. Op piek: 70.000 kernkoppen." }, { woord: "proxy-oorlog", uitleg: "Conflict in derde land waar beide machten zich mee bemoeien (Korea, Vietnam, Cuba)." }],
          theorie: "Symbolen: Berlijnse Muur (1961), Cubacrisis (1962, dichtst bij WO3), Maan-landing (1969 VS wint ruimterace), val Sovjet-Unie (1991). Eindigde door economische zwakte USSR + reformen Gorbatsjov + opstanden Oost-Europa.",
          voorbeelden: [{ type: "fase", tekst: "1962 Cubacrisis = VS ontdekt Sovjet-raketten op Cuba (90 km van VS-kust). 13 dagen op rand van kernoorlog. Kennedy + Chroesjtsjov sloten compromis." }],
          basiskennis: [{ onderwerp: "Niet letterlijk", uitleg: "'Koud' = figuurlijk, niet warm/heet als open oorlog. Niet over temperatuur. Niet Antarctica." }],
          niveaus: { basis: "VS vs USSR. A.", simpeler: "Koude Oorlog = spanning VS↔Sovjet-Unie zonder echt vechten. 1945-1989. = A.", nogSimpeler: "VS en Rusland tegen elkaar = A." },
        },
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
        wrongHints: [null, "Tijdvak 3 = vroege middeleeuwen, veel eerder.", "Tijdvak 8 = 19e eeuw, te laat.", "Tijdvak 9 = WO1+WO2, veel te laat."],
        uitlegPad: {
          stappen: [{ titel: "1568-1648 = tijdvak 5 + 6", tekst: "Tachtigjarige Oorlog liep van 1568 tot 1648 (80 jaar). 1568 viel in tijdvak 5 (Ontdekkers+hervormers, 1500-1600). 1648 viel in tijdvak 6 (Regenten+vorsten, 1600-1700). De oorlog overspant dus beide tijdvakken." }],
          woorden: [{ woord: "Tachtigjarige Oorlog", uitleg: "1568-1648. NL-opstand tegen Spanje. Begin door Willem van Oranje. Einde Vrede van Münster." }],
          theorie: "Tijdvak 5 = begin opstand + ontdekkingsreizen + Reformatie. Tijdvak 6 = Gouden Eeuw + einde oorlog + VOC-bloei. De oorlog koppelt deze tijdvakken aan elkaar.",
          voorbeelden: [{ type: "tijdlijn", tekst: "1568 (tijdvak 5) → 1572 inname Den Briel → 1588 begin Republiek → 1602 VOC (tijdvak 6) → 1648 Vrede van Münster." }],
          basiskennis: [{ onderwerp: "Niet andere tijdvakken", uitleg: "Tijdvak 3 = vroege middeleeuwen, veel eerder. Tijdvak 8 = 19e eeuw. Tijdvak 9 = WO1+WO2." }],
          niveaus: { basis: "Tijdvak 5+6. A.", simpeler: "Tachtigjarige Oorlog 1568-1648 valt in tijdvak 5 (begin) + 6 (einde). = A.", nogSimpeler: "5+6 = A." },
        },
      },
      {
        q: "In welk tijdvak hoort **Columbus' ontdekking van Amerika** (1492)?",
        options: ["Tijdvak 5 — Ontdekkers", "Tijdvak 6", "Tijdvak 4", "Tijdvak 7"],
        answer: 0,
        wrongHints: [null, "Tijdvak 6 begint pas in 1600.", "Tijdvak 4 eindigt rond 1500 — 1492 is op de grens, maar 'ontdekkingsreizen' is het kenmerk van tijdvak 5.", "Tijdvak 7 = 1700-1800, veel te laat."],
        uitlegPad: {
          stappen: [{ titel: "1492 → kenmerk tijdvak 5", tekst: "1492 ligt op de grens tussen tijdvak 4 (Steden+staten, 1000-1500) en tijdvak 5 (Ontdekkers+hervormers, 1500-1600). Maar 'ontdekkingsreizen' is het BELANGRIJKSTE kenmerk van tijdvak 5. Dus Columbus = tijdvak 5." }],
          woorden: [{ woord: "Columbus", uitleg: "Christoffel Columbus. Italiaans-Spaans zeevaarder. Landde 12 oktober 1492 op Bahamas." }, { woord: "ontdekkingsreizen", uitleg: "Europese zeevaarders zochten zee-route naar Azië, vonden Amerika + omzeilden Afrika. ~1490-1600." }],
          theorie: "Regel bij grens-jaartallen: kijk naar het kenmerk. 1492 = ontdekkingsreizen = tijdvak 5. Niet tijdvak 4 hoewel het jaartal daar technisch nog in valt. Tijdvakken zijn thema's, niet harde scheiding.",
          voorbeelden: [{ type: "andere", tekst: "Vasco da Gama omzeilde Kaap de Goede Hoop (1498). Magellaan zeilde rond de wereld (1519-1522). Allemaal tijdvak 5." }],
          basiskennis: [{ onderwerp: "Grens-regel", uitleg: "Bij jaartallen op de grens: kijk welk KENMERK het beste past. Columbus = ontdekkingsreis = thema tijdvak 5." }],
          niveaus: { basis: "Tijdvak 5. A.", simpeler: "Columbus 1492 valt in tijdvak 5 (Ontdekkers) omdat ontdekkingsreizen = kenmerk daar. = A.", nogSimpeler: "5 = A." },
        },
      },
      {
        q: "In welk tijdvak hoort **Anne Frank**?",
        options: ["Tijdvak 9 — Wereldoorlogen", "Tijdvak 8", "Tijdvak 10", "Tijdvak 7"],
        answer: 0,
        wrongHints: [null, "Tijdvak 8 = 19e eeuw — te vroeg.", "Tijdvak 10 begint na WO2 — Anne Frank werd vermoord in 1945.", "Tijdvak 7 = 18e eeuw — te vroeg."],
        uitlegPad: {
          stappen: [{ titel: "1929-1945 = tijdvak 9", tekst: "Anne Frank werd geboren 1929 in Frankfurt, verhuisde naar Amsterdam (1933), dook onder Prinsengracht 263 (1942-1944), werd opgepakt + naar Auschwitz/Bergen-Belsen, stierf februari 1945. Haar leven viel volledig binnen tijdvak 9 (Wereldoorlogen, 1900-1950)." }],
          woorden: [{ woord: "Anne Frank", uitleg: "Joods meisje (1929-1945). Schreef beroemde dagboek tijdens onderduik." }, { woord: "onderduik", uitleg: "Joden verstopten zich tijdens Duitse bezetting NL (1940-1945) om niet gedeporteerd te worden." }],
          theorie: "Tijdvak 9 = WO1 (1914-1918) + interbellum + WO2 (1939-1945) + Holocaust. Anne Frank symboliseert deze periode: jeugd onder WO2, vermoord in concentratiekamp.",
          voorbeelden: [{ type: "tijdlijn", tekst: "1933 Hitler aan macht → 1940 Duitsland bezet NL → 1942 Anne duikt onder → augustus 1944 ontdekt → februari 1945 dood Bergen-Belsen → 5 mei 1945 NL bevrijd (te laat voor haar)." }],
          basiskennis: [{ onderwerp: "Niet andere tijdvakken", uitleg: "Tijdvak 8 = 19e eeuw, vóór haar geboorte. Tijdvak 10 begint 1950, na haar dood. Tijdvak 7 = 18e eeuw, veel te vroeg." }],
          niveaus: { basis: "Tijdvak 9. A.", simpeler: "Anne Frank leefde 1929-1945, midden in WO2. Dat is tijdvak 9. = A.", nogSimpeler: "9 = A." },
        },
      },
      {
        q: "In welk tijdvak hoort **de val van de Berlijnse Muur** (1989)?",
        options: ["Tijdvak 10", "Tijdvak 9", "Tijdvak 8", "Tijdvak 7"],
        answer: 0,
        wrongHints: [null, "Tijdvak 9 eindigt in 1950 — te vroeg.", "Tijdvak 8 = 19e eeuw.", "Tijdvak 7 = 18e eeuw."],
        uitlegPad: {
          stappen: [{ titel: "1989 = midden tijdvak 10", tekst: "Tijdvak 10 (Televisie+computer, 1950-nu). 1989 valt daar precies midden in. Val Berlijnse Muur = einde Koude Oorlog = sleutelmoment tijdvak 10. Vaak gevraagd op examens." }],
          woorden: [{ woord: "Berlijnse Muur viel", uitleg: "9 november 1989. Oost-Duitse regering opende grens. Mensen sloegen muur kapot." }, { woord: "tijdvak 10", uitleg: "1950 tot nu. Kenmerken: televisie, computer, Koude Oorlog, EU, internet, sociale media." }],
          theorie: "Andere sleutelmomenten tijdvak 10: oprichting NAVO (1949), EEG (1957), maanlanding (1969), val Sovjet-Unie (1991), introductie euro (2002), 9/11 (2001), smartphones (2007+).",
          voorbeelden: [{ type: "context", tekst: "1989 staat ook bekend als 'Wonderjaar' — niet alleen Berlijn maar bijna alle Oost-Europese communistische regimes vielen dat jaar." }],
          basiskennis: [{ onderwerp: "Niet andere tijdvakken", uitleg: "Tijdvak 9 eindigt 1950. Tijdvak 8 = 19e eeuw. Tijdvak 7 = 18e eeuw. Alle te vroeg." }],
          niveaus: { basis: "Tijdvak 10. A.", simpeler: "1989 = Muur valt = tijdvak 10 (Televisie+computer, 1950-nu). = A.", nogSimpeler: "10 = A." },
        },
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
  // SLO-kerndoelen geschiedenis (G4 batch 3): 10 tijdvakken-canon, kerndoel 47.
  referentieNiveau: "2F",
  sloKerndoelen: [47],
  sloThema: "Geschiedenis — 10 tijdvakken",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F" },
  ],
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
