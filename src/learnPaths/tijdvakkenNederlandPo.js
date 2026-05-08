// Leerpad: Tijdvakken Nederland — geschiedenis voor groep 6-8.
// Vult de "binnenkort"-tegel onder Geschiedenis op StudentHome PO-modus.
// 5 stappen, basis-tijdlijn van prehistorie tot nu, Cito-doorstroomtoets-
// niveau (geschiedenis-vragen op DT komen uit deze brede stof).

const COLORS = {
  curve: "#a78bfa",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["🪨", "🏰", "⚓", "⚙️", "🏆"];

const chapters = [
  { letter: "A", title: "Lang geleden — prehistorie & Romeinen", emoji: "🪨", from: 0, to: 0 },
  { letter: "B", title: "Middeleeuwen — ridders & graven", emoji: "🏰", from: 1, to: 1 },
  { letter: "C", title: "Gouden Eeuw & Republiek", emoji: "⚓", from: 2, to: 2 },
  { letter: "D", title: "Industrie, oorlog & nu", emoji: "⚙️", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht — tijdlijn-mix", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Prehistorie & Romeinse tijd",
    explanation: "**Prehistorie** = de tijd vóór er geschreven werd *(ongeveer tot het jaar 0)*. Mensen woonden eerst in grotten, daarna in eenvoudige huizen.\n\n**Hunebedden**: stenen graven uit ~3000 v.Chr. Te zien in **Drenthe**. De Trechterbeker-cultuur bouwde ze.\n\n**Romeinse Tijd** *(±50 v.Chr. — 400 n.Chr.)*:\n• De Romeinen veroverden delen van wat nu Nederland is.\n• Grens-rivier: de **Rijn** *(Limes)*.\n• Romeinen brachten wegen, baden, wijn, en het **schrift**.\n• Belangrijkste Nederlandse Romeinse stad: **Nijmegen** *(Noviomagus)*.\n• Bataven leefden in het rivierengebied; in 69 n.Chr. kwam de **Bataafse opstand** onder Julius Civilis.\n\n**Volksverhuizingen** *(±400 n.Chr.)*:\nNa de val van Rome trokken Germaanse stammen door Europa. Friezen, Saksen en Franken vestigden zich in Nederland.\n\n**Cito-tip**: jaartal 0 is een goed mentaal anker. Alles vóór 0 = v.Chr. *(steeds verder weg = hogere getallen)*. Alles na 0 = n.Chr.",
    checks: [
      {
        q: "Waar zijn de **hunebedden** te vinden?",
        options: ["Drenthe", "Limburg", "Friesland", "Zeeland"],
        answer: 0,
        wrongHints: [null, "Niet in het zuiden — de hunebedden liggen in het noordoosten.", "Naast Drenthe, maar daar zijn ze niet.", "Geen hunebedden daar."],
      },
      {
        q: "Welke rivier vormde de **Romeinse grens**?",
        options: ["Rijn", "Maas", "Schelde", "IJssel"],
        answer: 0,
        wrongHints: [null, "Loopt zuidelijker — niet de Romeinse Limes.", "Te ver naar het zuiden.", "Een binnenrivier; was geen rijksgrens."],
      },
      {
        q: "Welke Romeinse stad lag in Nederland?",
        options: ["Nijmegen", "Amsterdam", "Rotterdam", "Utrecht"],
        answer: 0,
        evidence: "Belangrijkste Nederlandse Romeinse stad: Nijmegen (Noviomagus).",
        wrongHints: [null, "Bestond toen nog niet — pas in de Middeleeuwen ontstaan.", "Bestond toen nog niet.", "Wel een Romeinse nederzetting (Trajectum), maar Nijmegen was groter."],
      },
      {
        q: "Wie kwamen na de Romeinen in Nederland wonen?",
        options: ["Friezen, Saksen en Franken", "Vikingen alleen", "Spanjaarden", "Britten"],
        answer: 0,
        wrongHints: [null, "Vikingen kwamen later (~800 n.Chr.) en bleven niet.", "Veel later in de geschiedenis.", "Niet in dit tijdvak."],
      },
    ],
  },

  {
    title: "Middeleeuwen — ridders, graven en kloosters",
    explanation: "**Middeleeuwen** *(±500 — 1500)*: tijd van ridders, kastelen, kloosters en boeren.\n\n**Karel de Grote** *(742-814)*:\n• Frankische koning, later **keizer** *(800)*.\n• Stichtte een groot rijk in West-Europa.\n• Bracht het christendom *(verplicht voor zijn onderdanen)*.\n\n**Feodaal stelsel** *(leenstelsel)*:\n• De koning gaf grond *(leen)* aan hertogen, graven, ridders.\n• Ridders moesten loyaliteit en militaire dienst leveren.\n• Boeren werkten op het land voor hun heer.\n\n**Holland en Utrecht**:\n• Na 1000 ontstonden Holland *(graafschap)* en het Sticht *(bisdom Utrecht)*.\n• Belangrijkste graven: de **Hollandse graven** zoals **Floris V** *(1254-1296)*.\n• Floris werd vermoord door edelen die hem niet vertrouwden.\n\n**Steden ontstaan**:\n• Vanaf ~1100 groeiden handelssteden zoals **Dordrecht**, **Brugge**, **Gent**.\n• Mensen kregen meer vrijheid in de stad *('stadslucht maakt vrij')*.\n• **Hanze** *(handelsverbond)*: steden in Noord-Europa werkten samen.\n\n**Cito-tip**: middeleeuwen = duizend jaar! Onthoud 3 ankers: 800 *(Karel)*, 1100 *(steden ontstaan)*, 1300 *(Floris V)*.",
    checks: [
      {
        q: "Wie werd in **800 keizer**?",
        options: ["Karel de Grote", "Floris V", "Willem van Oranje", "Napoleon"],
        answer: 0,
        evidence: "Frankische koning, later keizer (800).",
        wrongHints: [null, "Hij leefde 500 jaar later (1254-1296).", "Veel later — 16e eeuw.", "Veel later — rond 1800."],
      },
      {
        q: "Wat is het **feodaal stelsel**?",
        options: [
          "Koning gaf grond als leen aan ridders en graven",
          "Boeren regeerden zelf hun land",
          "Steden hadden de macht over het platteland",
          "Iedereen was even rijk",
        ],
        answer: 0,
        wrongHints: [null, "Andersom — boeren werkten juist voor de heer.", "Niet in de middeleeuwen — kwam pas later.", "Middeleeuwen waren juist heel ongelijk."],
      },
      {
        q: "Welke **graaf van Holland** werd vermoord?",
        options: ["Floris V", "Karel de Grote", "Willem I", "Willem van Oranje"],
        answer: 0,
        wrongHints: [null, "Was geen graaf van Holland — Frankisch keizer.", "Veel later (19e eeuw, koning).", "Werd ook vermoord, maar in 1584 — niet in middeleeuwen."],
      },
      {
        q: "Wat was de **Hanze**?",
        options: ["Een handelsverbond van steden", "Een leger", "Een godsdienst", "Een soort kasteel"],
        answer: 0,
        wrongHints: [null, "Geen militaire organisatie.", "Niet — handel.", "Geen gebouw."],
      },
    ],
  },

  {
    title: "Gouden Eeuw & Republiek",
    explanation: "**Tachtigjarige Oorlog** *(1568 — 1648)*:\n• Nederlanden in opstand tegen Spaanse koning **Filips II**.\n• Aanleiding: **godsdienst** *(protestant ↔ katholiek)*, **belasting**, **verlies van rechten**.\n• Leider: **Willem van Oranje** *('vader des vaderlands')*.\n• 1581: **Plakkaat van Verlatinghe** *(verklaring dat Filips niet meer onze koning is — eerste \"onafhankelijkheidsverklaring\")*.\n• 1584: Willem vermoord in Delft.\n• 1648: **Vrede van Münster** — Republiek officieel onafhankelijk.\n\n**De Republiek** *(1588-1795)*:\n• Geen koning! 7 provincies bestuurd door **Staten-Generaal** + **stadhouder**.\n• Belangrijkste stadhouders uit huis Oranje-Nassau.\n\n**Gouden Eeuw** *(17e eeuw)*:\n• **VOC** *(1602)* en **WIC** *(1621)*: handelscompagnieën met Azië en Amerika.\n• Amsterdam = grootste handelsstad ter wereld.\n• Schilderkunst: **Rembrandt**, **Vermeer**, **Frans Hals**.\n• Wetenschap: **Christiaan Huygens** *(slingerklok)*, **Antoni van Leeuwenhoek** *(microscoop)*.\n• Tegelijk: **slavenhandel** door WIC — donkere kant van de Gouden Eeuw.\n\n**Cito-tip**: jaartallen onthouden via verhaal: '1568 begon, 1648 vrede = 80 jaar oorlog'.",
    checks: [
      {
        q: "Hoe lang duurde de **Tachtigjarige Oorlog**?",
        options: ["80 jaar (1568-1648)", "30 jaar (1618-1648)", "10 jaar", "100 jaar"],
        answer: 0,
        wrongHints: [null, "Dat is de Dertigjarige Oorlog (Duits-Europees).", "Veel langer.", "Iets te lang."],
      },
      {
        q: "Wie leidde de **Nederlanders** tegen Spanje?",
        options: ["Willem van Oranje", "Filips II", "Karel de Grote", "Frederik Hendrik"],
        answer: 0,
        evidence: "Leider: Willem van Oranje ('vader des vaderlands').",
        wrongHints: [null, "Was juist de SPAANSE koning — de tegenstander.", "Leefde 800 jaar eerder.", "Wel een latere stadhouder, maar niet de eerste leider."],
      },
      {
        q: "Wanneer werd de **Republiek officieel onafhankelijk**?",
        options: ["1648 (Vrede van Münster)", "1581 (Plakkaat)", "1568 (begin oorlog)", "1701"],
        answer: 0,
        wrongHints: [null, "Plakkaat verklaarde wel onafhankelijkheid, maar vrede met Spanje pas in 1648.", "Dat was het BEGIN.", "Veel later — niet juist."],
      },
      {
        q: "Wat was de **VOC**?",
        options: [
          "Verenigde Oost-Indische Compagnie — handel met Azië",
          "Een leger",
          "Een kerk",
          "Een familienaam",
        ],
        answer: 0,
        wrongHints: [null, "Niet militair maar commercieel.", "Niet religieus.", "Geen familienaam."],
      },
    ],
  },

  {
    title: "Industriële tijd, oorlogen & nu",
    explanation: "**Bataafse Republiek** *(1795-1806)* en **Koninkrijk** *(1815)*:\n• 1795: Fransen veroveren Republiek → Bataafse Republiek.\n• Napoleon maakt zijn broer **Lodewijk Napoleon** koning *(1806)*.\n• 1813: Napoleon weg → **Willem I** wordt eerste koning van Nederland *(1815)*.\n\n**Industriële Revolutie** *(±1800-1900)*:\n• **Stoommachines**, fabrieken, treinen, telegraaf.\n• Mensen verhuizen van platteland naar stad *('verstedelijking')*.\n• Zware kinderarbeid — pas in **1874** verboden voor kinderen onder 12 *(Wet van Houten)*.\n\n**Eerste Wereldoorlog** *(1914-1918)*:\n• Nederland was **neutraal**, maar economisch zwaar geraakt.\n\n**Tweede Wereldoorlog** *(1940-1945)*:\n• Mei 1940: Duitsland valt Nederland binnen — Rotterdam gebombardeerd.\n• Bezetting 5 jaar.\n• **Holocaust**: ±104.000 Nederlandse Joden vermoord.\n• **Anne Frank** schreef haar dagboek in onderduik in Amsterdam.\n• Mei 1945: bevrijding.\n\n**Na 1945**:\n• Wederopbouw, **Marshall-hulp** uit VS.\n• 1957: **Europese Economische Gemeenschap** *(later EU)*.\n• 1999: **euro** ingevoerd *(briefjes en munten in 2002)*.\n• 2024: doorstroomtoets vervangt Cito-eindtoets *(jouw eigen tijd!)*\n\n**Cito-tip**: jaartal-anker = 1900 = grens tussen 'oude' en 'moderne' tijd.",
    checks: [
      {
        q: "Wie was **eerste koning van Nederland** *(1815)*?",
        options: ["Willem I", "Lodewijk Napoleon", "Willem van Oranje", "Beatrix"],
        answer: 0,
        evidence: "1813: Napoleon weg → Willem I wordt eerste koning van Nederland (1815).",
        wrongHints: [null, "Was wel koning, maar van de Bataafse Republiek (door Napoleon aangesteld).", "Veel eerder — 16e eeuw, geen koning maar stadhouder.", "Veel later — koningin in 20e/21e eeuw."],
      },
      {
        q: "Was Nederland **neutraal** in WO1?",
        options: ["Ja", "Nee, vocht aan kant Geallieerden", "Nee, vocht aan kant Duitsland", "Bestond niet"],
        answer: 0,
        evidence: "Nederland was neutraal, maar economisch zwaar geraakt.",
        wrongHints: [null, "Nee — Nederland deed niet mee.", "Nee — Nederland deed niet mee.", "Bestond wel — als koninkrijk."],
      },
      {
        q: "Wanneer werd Nederland **bevrijd in WO2**?",
        options: ["Mei 1945", "Mei 1940", "Augustus 1945", "1948"],
        answer: 0,
        wrongHints: [null, "Toen begon de bezetting juist.", "Augustus = einde wereldoorlog (Japan), maar Nederland werd in mei bevrijd.", "Te laat."],
      },
      {
        q: "Wanneer werd de **euro** ingevoerd als briefje en munt?",
        options: ["2002", "1999", "2010", "1985"],
        answer: 0,
        wrongHints: [null, "Toen werd de euro alleen administratief — niet als briefje.", "Te laat.", "Veel te vroeg — gulden was er nog."],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — tijdlijn-mix",
    explanation: "Mix-toets over de hele Nederlandse geschiedenis. Test of je de **volgorde** van gebeurtenissen onthoudt.",
    checks: [
      {
        q: "Welke gebeurtenis was **als eerste**?",
        options: ["Romeinen in Nederland", "Karel de Grote keizer", "Willem van Oranje vermoord", "Napoleon"],
        answer: 0,
        wrongHints: [null, "Was 800 — Romeinen waren al weg.", "Was 1584.", "Was rond 1800."],
      },
      {
        q: "Wie kwam **chronologisch eerst**?",
        options: ["Floris V", "Willem van Oranje", "Willem I", "Napoleon"],
        answer: 0,
        wrongHints: [null, "Was rond 1568 — drie eeuwen later.", "Was 1815.", "Was rond 1800."],
      },
      {
        q: "In welke **eeuw** was de Gouden Eeuw?",
        options: ["17e eeuw (1600-1700)", "16e eeuw", "18e eeuw", "15e eeuw"],
        answer: 0,
        wrongHints: [null, "Begin van de Tachtigjarige Oorlog — net iets te vroeg voor 'goud'.", "Periode van verval (pruikentijd).", "Middeleeuwen."],
      },
      {
        q: "Welke gebeurtenis hoort bij **WO2**?",
        options: ["Anne Frank's dagboek", "Plakkaat van Verlatinghe", "Bataafse Republiek", "VOC opgericht"],
        answer: 0,
        wrongHints: [null, "Was 1581 — Tachtigjarige Oorlog.", "Was 1795 — Napoleontische tijd.", "Was 1602 — Gouden Eeuw."],
      },
      {
        q: "**Snelle volgorde-check**: 1648 = ?",
        options: ["Vrede van Münster (einde Tachtigjarige Oorlog)", "Begin Gouden Eeuw", "Begin WO1", "Bataafse Republiek"],
        answer: 0,
        wrongHints: [null, "Gouden Eeuw begon eerder (rond 1600).", "WO1 was 1914.", "Bataafse Republiek was 1795."],
      },
      {
        q: "Welk jaartal hoort bij **'eerste koning Nederland'**?",
        options: ["1815", "1648", "1568", "1945"],
        answer: 0,
        wrongHints: [null, "Was Vrede van Münster — Republiek, geen koning.", "Begin Tachtigjarige Oorlog.", "Bevrijding WO2 — toen was er al lang een koning."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tijdvakkenNederlandPo = {
  id: "tijdvakken-nederland-po",
  title: "Tijdvakken Nederland — geschiedenis groep 6-8",
  emoji: "🏛️",
  level: "groep6-8",
  subject: "geschiedenis",
  referentieNiveau: "PO-kerndoel",
  sloThema: "Wereldoriëntatie — geschiedenis Nederland",
  intro:
    "Hoofdlijnen van de Nederlandse geschiedenis: prehistorie + Romeinen, Middeleeuwen, Gouden Eeuw + Republiek, industrie + WO + nu. ~15 min. Voor groep 6-8 die de Cito-doorstroomtoets-stof wil dekken.",
  triggerKeywords: [
    "geschiedenis", "tijdvakken", "tijdlijn", "Romeinen", "Middeleeuwen",
    "Karel de Grote", "Willem van Oranje", "Tachtigjarige Oorlog",
    "Gouden Eeuw", "VOC", "WO1", "WO2", "Anne Frank", "Napoleon",
    "Plakkaat van Verlatinghe", "Vrede van Münster", "Floris V",
    "Bataafse Republiek", "Willem I", "euro", "hunebedden",
  ],
  chapters,
  steps,
};

export default tijdvakkenNederlandPo;
