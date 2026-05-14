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
        uitlegPad: {
          stappen: [{ titel: "Drenthe = noordoost", tekst: "Hunebedden liggen in Drenthe (noordoost-NL). Stenen graven uit ~3000 v.Chr." }],
          woorden: [{ woord: "hunebed", uitleg: "Stenen graf uit Trechterbeker-cultuur (~3000 v.Chr.)." }],
          theorie: "Hunebedden = oudste bouwwerken van NL. Alleen in Drenthe te vinden.",
          voorbeelden: [{ type: "feit", tekst: "53 hunebedden in NL — allemaal Drenthe (1 in Groningen)." }],
          basiskennis: [{ onderwerp: "Hunebedcentrum Borger", uitleg: "Drentse plaats Borger heeft museum." }],
          niveaus: { basis: "Drenthe. A.", simpeler: "Hunebedden = stenen graven uit prehistorie. Vindplek: provincie Drenthe (noordoost). = A.", nogSimpeler: "Drenthe = A." },
        },
      },
      {
        q: "Welke rivier vormde de **Romeinse grens**?",
        options: ["Rijn", "Maas", "Schelde", "IJssel"],
        answer: 0,
        wrongHints: [null, "Loopt zuidelijker — niet de Romeinse Limes.", "Te ver naar het zuiden.", "Een binnenrivier; was geen rijksgrens."],
        uitlegPad: {
          stappen: [{ titel: "Rijn = Limes", tekst: "Romeinse rijksgrens heette Limes. Volgde de Rijn door Nederland." }],
          woorden: [{ woord: "Limes", uitleg: "Latijn voor 'grens'. Officiële rijksgrens van Romeinse Rijk." }],
          theorie: "Rijn = noordgrens Romeinse Rijk. Boven Rijn = Germanië (vrij). Onder = Romeins.",
          voorbeelden: [{ type: "feit", tekst: "Forten langs Rijn: Nijmegen, Utrecht (Trajectum), Katwijk." }],
          basiskennis: [{ onderwerp: "Werelderfgoed", uitleg: "Limes is sinds 2021 UNESCO werelderfgoed." }],
          niveaus: { basis: "Rijn. A.", simpeler: "Romeinse rijksgrens (Limes) volgde de Rijn — die liep dwars door NL. = A.", nogSimpeler: "Rijn = A." },
        },
      },
      {
        q: "Welke Romeinse stad lag in Nederland?",
        options: ["Nijmegen", "Amsterdam", "Rotterdam", "Utrecht"],
        answer: 0,
        evidence: "Belangrijkste Nederlandse Romeinse stad: Nijmegen (Noviomagus).",
        wrongHints: [null, "Bestond toen nog niet — pas in de Middeleeuwen ontstaan.", "Bestond toen nog niet.", "Wel een Romeinse nederzetting (Trajectum), maar Nijmegen was groter."],
        uitlegPad: {
          stappen: [{ titel: "Nijmegen = Noviomagus", tekst: "Belangrijkste Romeinse stad in NL: Nijmegen (Latijn: Noviomagus). Oudste stad van Nederland." }],
          woorden: [{ woord: "Noviomagus", uitleg: "Latijnse naam voor Nijmegen. 'Nieuwe markt'." }],
          theorie: "Romeinse steden lagen langs Limes (Rijn). Nijmegen aan zuidkant Rijn = veilig binnen Rijk.",
          voorbeelden: [{ type: "feit", tekst: "Nijmegen heette vroeger Ulpia Noviomagus — bestaat ~2000 jaar." }],
          basiskennis: [{ onderwerp: "Niet AMS/RTM", uitleg: "Amsterdam, Rotterdam ontstonden pas in middeleeuwen." }],
          niveaus: { basis: "Nijmegen. A.", simpeler: "Nijmegen = oudste stad NL, was Romeinse stad Noviomagus. AMS/RTM bestonden toen niet. = A.", nogSimpeler: "Nijmegen = A." },
        },
      },
      {
        q: "Wie kwamen na de Romeinen in Nederland wonen?",
        options: ["Friezen, Saksen en Franken", "Vikingen alleen", "Spanjaarden", "Britten"],
        answer: 0,
        wrongHints: [null, "Vikingen kwamen later (~800 n.Chr.) en bleven niet.", "Veel later in de geschiedenis.", "Niet in dit tijdvak."],
        uitlegPad: {
          stappen: [{ titel: "Volksverhuizingen ±400", tekst: "Na val Rome trokken Friezen (noord), Saksen (oost) en Franken (zuid) Nederland in." }],
          woorden: [{ woord: "Volksverhuizingen", uitleg: "Periode ~400-700 n.Chr. waarin Germaanse stammen door Europa trokken." }],
          theorie: "3 stammen verdeeld geografisch: Friezen=Noord, Saksen=Oost, Franken=Zuid.",
          voorbeelden: [{ type: "verdeling", tekst: "Friesland (Friezen). Saksen (Twente). Franken (Limburg/zuid)." }],
          basiskennis: [{ onderwerp: "Vikingen later", uitleg: "Vikingen kwamen ~800 n.Chr., maar plunderden vooral, niet vestiging." }],
          niveaus: { basis: "Friezen, Saksen, Franken. A.", simpeler: "Na Romeinen (~400) kwamen 3 Germaanse stammen wonen: Friezen (N), Saksen (O), Franken (Z). = A.", nogSimpeler: "3 stammen = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Karel = 800", tekst: "Karel de Grote werd in 800 gekroond tot keizer door Paus Leo III." }],
          woorden: [{ woord: "Karel de Grote", uitleg: "742-814. Frankisch koning, daarna keizer (800). Bracht christendom + onderwijs." }],
          theorie: "Anker-jaar 800 = kroning Karel. Onthoud als startpunt middeleeuwen.",
          voorbeelden: [{ type: "feit", tekst: "Karel verbreidde rijk over heel West-Europa. Hoofdstad Aken." }],
          basiskennis: [{ onderwerp: "Niet de andere drie", uitleg: "Floris V (1296), Willem v Oranje (1584), Napoleon (1804) — allemaal eeuwen later." }],
          niveaus: { basis: "Karel de Grote. A.", simpeler: "Karel de Grote (Frankisch koning) werd in 800 keizer. Andere opties leefden eeuwen later. = A.", nogSimpeler: "Karel = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Leenstelsel = piramide", tekst: "Koning → leen aan hertogen/graven/ridders → die regeerden over boeren. Iedereen had eigen plek in piramide." }],
          woorden: [{ woord: "leen", uitleg: "Stuk grond dat ridder/graaf 'kreeg' van koning, in ruil voor loyaliteit en militaire dienst." }],
          theorie: "Feodaal = leenstelsel. Macht-piramide: koning bovenaan, boeren onderaan.",
          voorbeelden: [{ type: "structuur", tekst: "Koning > hertog > graaf > ridder > boer. Elke laag werkt voor de laag erboven." }],
          basiskennis: [{ onderwerp: "Niet democratie", uitleg: "Boeren hadden geen rechten; iedereen was juist heel ongelijk." }],
          niveaus: { basis: "Koning gaf leen. A.", simpeler: "Feodaal stelsel = piramide: koning bovenaan, geeft grond (leen) aan ridders/graven, die regeren over boeren. = A.", nogSimpeler: "Leenstelsel = A." },
        },
      },
      {
        q: "Welke **graaf van Holland** werd vermoord?",
        options: ["Floris V", "Karel de Grote", "Willem I", "Willem van Oranje"],
        answer: 0,
        wrongHints: [null, "Was geen graaf van Holland — Frankisch keizer.", "Veel later (19e eeuw, koning).", "Werd ook vermoord, maar in 1584 — niet in middeleeuwen."],
        uitlegPad: {
          stappen: [{ titel: "Floris V (1296)", tekst: "Hollandse graaf Floris V werd in 1296 vermoord door edelen." }],
          woorden: [{ woord: "Floris V", uitleg: "1254-1296. Graaf van Holland. Heette ook 'der keerlen god' (god der boeren)." }],
          theorie: "Floris hielp boeren tegen edelen. Edelen vermoordden hem in 1296 (kasteel Muiderslot/Muiderberg).",
          voorbeelden: [{ type: "context", tekst: "Floris was populair bij gewone volk maar gehaat bij rijke edelen." }],
          basiskennis: [{ onderwerp: "Andere vermoorden", uitleg: "Willem v Oranje OOK vermoord (1584), maar hij was geen middeleeuwse graaf." }],
          niveaus: { basis: "Floris V. A.", simpeler: "Floris V (graaf Holland, 1254-1296) werd vermoord door edelen. = A.", nogSimpeler: "Floris V = A." },
        },
      },
      {
        q: "Wat was de **Hanze**?",
        options: ["Een handelsverbond van steden", "Een leger", "Een godsdienst", "Een soort kasteel"],
        answer: 0,
        wrongHints: [null, "Geen militaire organisatie.", "Niet — handel.", "Geen gebouw."],
        uitlegPad: {
          stappen: [{ titel: "Hanze = handel", tekst: "Hanze = verbond van handelssteden in Noord-Europa. Samenwerken = veiligere handel." }],
          woorden: [{ woord: "Hanze", uitleg: "Middeleeuws handelsverbond. NL Hanzesteden: Deventer, Zwolle, Kampen, Zutphen." }],
          theorie: "Steden werkten samen voor: bescherming tegen rovers, gezamenlijke regels, betere prijzen.",
          voorbeelden: [{ type: "feit", tekst: "Hanzesteden bloei 1300-1500. Handel Oostzee + Noordzee." }],
          basiskennis: [{ onderwerp: "Stadsmacht", uitleg: "Steden werden machtig door handel — eerste vorm van burgerlijke macht." }],
          niveaus: { basis: "Handelsverbond. A.", simpeler: "Hanze = verbond van middeleeuwse handelssteden (samen sterker = veiliger handel). = A.", nogSimpeler: "Handel = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "1648 - 1568 = 80", tekst: "Begin 1568 (eerste opstand) — eind 1648 (Vrede van Münster). 80 jaar." }],
          woorden: [{ woord: "Tachtigjarige Oorlog", uitleg: "1568-1648. NL opstand tegen Spanje voor onafhankelijkheid + godsdienstvrijheid." }],
          theorie: "Naam zegt het: tachtig + jaar. Reken: 1648 - 1568 = 80.",
          voorbeelden: [{ type: "ankers", tekst: "1568 = begin (Slag bij Heiligerlee). 1648 = einde (Vrede van Münster)." }],
          basiskennis: [{ onderwerp: "Niet 30-jarig", uitleg: "Dertigjarige Oorlog (1618-1648) was Duitse oorlog — andere conflict." }],
          niveaus: { basis: "80 jaar. A.", simpeler: "Tachtigjarige Oorlog = 80 jaar. Van 1568 tot 1648 (Vrede van Münster). = A.", nogSimpeler: "80 = A." },
        },
      },
      {
        q: "Wie leidde de **Nederlanders** tegen Spanje?",
        options: ["Willem van Oranje", "Filips II", "Karel de Grote", "Frederik Hendrik"],
        answer: 0,
        evidence: "Leider: Willem van Oranje ('vader des vaderlands').",
        wrongHints: [null, "Was juist de SPAANSE koning — de tegenstander.", "Leefde 800 jaar eerder.", "Wel een latere stadhouder, maar niet de eerste leider."],
        uitlegPad: {
          stappen: [{ titel: "Vader des Vaderlands", tekst: "Willem van Oranje leidde NL opstand. Bijnaam: 'Vader des Vaderlands'." }],
          woorden: [{ woord: "Willem van Oranje", uitleg: "1533-1584. Eerste leider opstand tegen Filips II. Vermoord 1584." }],
          theorie: "Willem startte opstand. Filips II was juist de SPAANSE koning (=tegenstander).",
          voorbeelden: [{ type: "feit", tekst: "Willem stierf 1584 in Delft (vermoord door Balthasar Gerards). Frederik Hendrik kwam later." }],
          basiskennis: [{ onderwerp: "Wilhelmus", uitleg: "Volkslied 'Wilhelmus van Nassouwe' is over Willem v Oranje." }],
          niveaus: { basis: "Willem van Oranje. A.", simpeler: "Willem van Oranje = leider NL opstand tegen Spanje. Filips II was juist de Spaanse koning. = A.", nogSimpeler: "Willem = A." },
        },
      },
      {
        q: "Wanneer werd de **Republiek officieel onafhankelijk**?",
        options: ["1648 (Vrede van Münster)", "1581 (Plakkaat)", "1568 (begin oorlog)", "1701"],
        answer: 0,
        wrongHints: [null, "Plakkaat verklaarde wel onafhankelijkheid, maar vrede met Spanje pas in 1648.", "Dat was het BEGIN.", "Veel later — niet juist."],
        uitlegPad: {
          stappen: [{ titel: "1648 = officiële vrede", tekst: "Vrede van Münster (1648) = einde Tachtigjarige Oorlog + officiële erkenning Republiek." }],
          woorden: [{ woord: "Vrede van Münster", uitleg: "1648 vredesverdrag tussen Spanje en Republiek. Onderdeel Vrede van Westfalen." }],
          theorie: "Tijdlijn: 1568 begin → 1581 plakkaat (verklaring) → 1648 vrede (erkenning). Pas vrede = officieel onafhankelijk.",
          voorbeelden: [{ type: "stap", tekst: "Plakkaat 1581 = 'wij verklaren ons los'. Münster 1648 = Spanje accepteert dat." }],
          basiskennis: [{ onderwerp: "Verschil", uitleg: "Verklaring (eenzijdig) ≠ erkenning (door tegenpartij)." }],
          niveaus: { basis: "1648. A.", simpeler: "Vrede van Münster (1648) = einde oorlog + officieel onafhankelijk. Plakkaat 1581 was de verklaring (door NL zelf). = A.", nogSimpeler: "1648 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "VOC = handel Azië", tekst: "Verenigde Oost-Indische Compagnie (1602). Eerste multinational ter wereld voor handel met Azië." }],
          woorden: [{ woord: "VOC", uitleg: "Verenigde Oost-Indische Compagnie. Handel in specerijen, thee, zijde." }],
          theorie: "VOC = bedrijf, niet leger of kerk. Maar had wél eigen leger en mocht oorlog voeren.",
          voorbeelden: [{ type: "feit", tekst: "VOC bestond 1602-1799. Hoofdkantoor Amsterdam. Handelsposten van Kaapstad tot Japan." }],
          basiskennis: [{ onderwerp: "Donkere kant", uitleg: "VOC was ook betrokken bij slavenhandel — hoort bij Gouden Eeuw-discussie." }],
          niveaus: { basis: "Handel Azië. A.", simpeler: "VOC = handelscompagnie (bedrijf) voor handel met Azië. Specerijen, thee, zijde. = A.", nogSimpeler: "Handel = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Willem I = 1815", tekst: "Na Napoleon (1813) werd Willem I in 1815 koning van Nederland (Koninkrijk der Nederlanden)." }],
          woorden: [{ woord: "Willem I", uitleg: "1772-1843. Eerste koning Nederland. Zoon van laatste stadhouder." }],
          theorie: "Tijdlijn: stadhouders → Bataafse Republiek (1795) → Lodewijk Napoleon (1806) → Willem I koning (1815).",
          voorbeelden: [{ type: "feit", tekst: "Willem I was zoon van Willem V (laatste stadhouder). Niet familie van Willem v Oranje." }],
          basiskennis: [{ onderwerp: "Onderscheid", uitleg: "Willem v Oranje (16e eeuw, stadhouder/leider) ≠ Willem I (19e eeuw, koning)." }],
          niveaus: { basis: "Willem I. A.", simpeler: "Eerste echte koning NL = Willem I (1815). Lodewijk Napoleon was opgelegd door Napoleon (1806). = A.", nogSimpeler: "Willem I = A." },
        },
      },
      {
        q: "Was Nederland **neutraal** in WO1?",
        options: ["Ja", "Nee, vocht aan kant Geallieerden", "Nee, vocht aan kant Duitsland", "Bestond niet"],
        answer: 0,
        evidence: "Nederland was neutraal, maar economisch zwaar geraakt.",
        wrongHints: [null, "Nee — Nederland deed niet mee.", "Nee — Nederland deed niet mee.", "Bestond wel — als koninkrijk."],
        uitlegPad: {
          stappen: [{ titel: "WO1 = neutraal", tekst: "Nederland deed NIET mee aan WO1 (1914-1918). Wel zwaar economisch geraakt." }],
          woorden: [{ woord: "neutraal", uitleg: "Geen partij kiezen. Niet vechten." }],
          theorie: "WO1: NL neutraal. WO2: NL bezet (Duitsland viel binnen mei 1940). Belangrijk verschil!",
          voorbeelden: [{ type: "feit", tekst: "WO1: koningin Wilhelmina. NL ving wel veel Belgische vluchtelingen op." }],
          basiskennis: [{ onderwerp: "Verschil WO1/WO2", uitleg: "WO1: NL buiten conflict. WO2: NL slachtoffer Duitse bezetting." }],
          niveaus: { basis: "Ja, neutraal. A.", simpeler: "In WO1 (1914-1918) deed NL NIET mee = neutraal. Pas WO2 (1940) was NL bezet. = A.", nogSimpeler: "Ja = A." },
        },
      },
      {
        q: "Wanneer werd Nederland **bevrijd in WO2**?",
        options: ["Mei 1945", "Mei 1940", "Augustus 1945", "1948"],
        answer: 0,
        wrongHints: [null, "Toen begon de bezetting juist.", "Augustus = einde wereldoorlog (Japan), maar Nederland werd in mei bevrijd.", "Te laat."],
        uitlegPad: {
          stappen: [{ titel: "5 mei 1945", tekst: "5 mei 1945 = bevrijdingsdag NL. Duitsland gaf zich over." }],
          woorden: [{ woord: "Bevrijdingsdag", uitleg: "5 mei (jaarlijkse herdenking)." }],
          theorie: "Tijdlijn WO2 NL: 10 mei 1940 (binnenval) → 5 jaar bezetting → 5 mei 1945 (bevrijding).",
          voorbeelden: [{ type: "ankers", tekst: "10 mei 1940 = bezetting begint. 5 mei 1945 = bevrijding. Precies 5 jaar." }],
          basiskennis: [{ onderwerp: "Augustus = Japan", uitleg: "Aug 1945 = Japan capituleert (atoombom). NL werd al in mei bevrijd door Geallieerden." }],
          niveaus: { basis: "Mei 1945. A.", simpeler: "5 mei 1945 = bevrijdingsdag NL. Mei 1940 was juist begin bezetting (5 jaar eerder). = A.", nogSimpeler: "Mei 1945 = A." },
        },
      },
      {
        q: "Wanneer werd de **euro** ingevoerd als briefje en munt?",
        options: ["2002", "1999", "2010", "1985"],
        answer: 0,
        wrongHints: [null, "Toen werd de euro alleen administratief — niet als briefje.", "Te laat.", "Veel te vroeg — gulden was er nog."],
        uitlegPad: {
          stappen: [{ titel: "1 januari 2002", tekst: "Euro-briefjes en munten kwamen 1-1-2002. Vanaf dat moment einde gulden." }],
          woorden: [{ woord: "Eurozone", uitleg: "Landen die euro gebruiken sinds 2002 (NL, België, Duitsland, etc.)." }],
          theorie: "Tijdlijn: 1999 = euro digitaal. 2002 = briefjes + munten. Daarna gulden ongeldig.",
          voorbeelden: [{ type: "stap", tekst: "1999: bedrijven rekenen al in euro. 2002: jij hebt euro-briefjes in je portemonnee." }],
          basiskennis: [{ onderwerp: "Gulden weg", uitleg: "Gulden bleef nog 1 maand naast euro geldig (jan 2002), daarna alleen euro." }],
          niveaus: { basis: "2002. A.", simpeler: "Euro briefjes/munten = 1 januari 2002. (1999 was alleen digitaal). = A.", nogSimpeler: "2002 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Romeinen = oudst", tekst: "Romeinen ~50 v.Chr. - 400 n.Chr. Karel 800. Willem 1584. Napoleon ~1800. Romeinen eerst." }],
          woorden: [{ woord: "chronologie", uitleg: "Volgorde in tijd. Oudste eerst." }],
          theorie: "Tijdvak-volgorde: prehistorie → Romeinen → middeleeuwen → Gouden Eeuw → Napoleontische tijd → modern.",
          voorbeelden: [{ type: "ankers", tekst: "0 n.Chr. (Romeinen) → 800 (Karel) → 1584 (Willem) → 1800 (Napoleon)." }],
          basiskennis: [{ onderwerp: "Tijdlijn-truc", uitleg: "Hoe vroeger het jaar, hoe ouder de gebeurtenis. Romeinen = vóór jaar 0." }],
          niveaus: { basis: "Romeinen. A.", simpeler: "Romeinen kwamen al rond jaar 0, ver vóór andere drie. Eerst chronologisch. = A.", nogSimpeler: "Romeinen = A." },
        },
      },
      {
        q: "Wie kwam **chronologisch eerst**?",
        options: ["Floris V", "Willem van Oranje", "Willem I", "Napoleon"],
        answer: 0,
        wrongHints: [null, "Was rond 1568 — drie eeuwen later.", "Was 1815.", "Was rond 1800."],
        uitlegPad: {
          stappen: [{ titel: "Floris V = 1296", tekst: "Floris V (1254-1296) eerst, daarna Willem v Oranje (1584), Napoleon (~1800), Willem I (1815)." }],
          woorden: [{ woord: "chronologisch eerst", uitleg: "Persoon met oudste leefjaren." }],
          theorie: "Floris (middeleeuwen) → Willem v Oranje (Gouden Eeuw start) → Napoleon (~1800) → Willem I (1815).",
          voorbeelden: [{ type: "ankers", tekst: "1296 < 1584 < 1800 < 1815." }],
          basiskennis: [{ onderwerp: "Niet door naam misleid", uitleg: "Twee 'Willems' — verwar niet. Willem v Oranje (1584) ≠ Willem I (1815)." }],
          niveaus: { basis: "Floris V. A.", simpeler: "Floris V (1296, middeleeuwen) was vóór alle andere drie. = A.", nogSimpeler: "Floris V = A." },
        },
      },
      {
        q: "In welke **eeuw** was de Gouden Eeuw?",
        options: ["17e eeuw (1600-1700)", "16e eeuw", "18e eeuw", "15e eeuw"],
        answer: 0,
        wrongHints: [null, "Begin van de Tachtigjarige Oorlog — net iets te vroeg voor 'goud'.", "Periode van verval (pruikentijd).", "Middeleeuwen."],
        uitlegPad: {
          stappen: [{ titel: "1600-1700 = 17e eeuw", tekst: "Gouden Eeuw = de 17e eeuw (1600-1700). Eeuwen tellen +1: jaar 1600 = 17e eeuw." }],
          woorden: [{ woord: "eeuw", uitleg: "100 jaar. 17e eeuw = 1600-1699. 18e = 1700-1799." }],
          theorie: "Eeuw-truc: jaar 16XX → 17e eeuw (eerste 2 cijfers + 1).",
          voorbeelden: [{ type: "tabel", tekst: "Rembrandt schilderde rond 1650 = 17e eeuw = Gouden Eeuw." }],
          basiskennis: [{ onderwerp: "VOC 1602", uitleg: "VOC opgericht 1602 = vroege 17e eeuw = begin Gouden Eeuw." }],
          niveaus: { basis: "17e eeuw. A.", simpeler: "Gouden Eeuw = 1600-1700 = 17e eeuw. (Jaar 16XX = 17e eeuw, want eeuw +1). = A.", nogSimpeler: "17e = A." },
        },
      },
      {
        q: "Welke gebeurtenis hoort bij **WO2**?",
        options: ["Anne Frank's dagboek", "Plakkaat van Verlatinghe", "Bataafse Republiek", "VOC opgericht"],
        answer: 0,
        wrongHints: [null, "Was 1581 — Tachtigjarige Oorlog.", "Was 1795 — Napoleontische tijd.", "Was 1602 — Gouden Eeuw."],
        uitlegPad: {
          stappen: [{ titel: "Anne Frank = WO2", tekst: "Anne Frank schreef dagboek in onderduik (1942-1944) tijdens WO2." }],
          woorden: [{ woord: "Anne Frank", uitleg: "1929-1945. Joods meisje, schreef beroemd dagboek tijdens onderduik in Amsterdam." }],
          theorie: "WO2 NL = 1940-1945. Anne Frank's onderduik = 1942-1944, valt binnen die periode.",
          voorbeelden: [{ type: "feit", tekst: "Achterhuis aan Prinsengracht Amsterdam = nu museum." }],
          basiskennis: [{ onderwerp: "Andere drie", uitleg: "Plakkaat 1581 (T80jr Oorlog), Bataaf 1795 (Frans), VOC 1602 (Gouden Eeuw)." }],
          niveaus: { basis: "Anne Frank. A.", simpeler: "Anne Frank schreef dagboek 1942-1944 = midden in WO2. Andere opties zijn veel ouder. = A.", nogSimpeler: "Anne Frank = A." },
        },
      },
      {
        q: "**Snelle volgorde-check**: 1648 = ?",
        options: ["Vrede van Münster (einde Tachtigjarige Oorlog)", "Begin Gouden Eeuw", "Begin WO1", "Bataafse Republiek"],
        answer: 0,
        wrongHints: [null, "Gouden Eeuw begon eerder (rond 1600).", "WO1 was 1914.", "Bataafse Republiek was 1795."],
        uitlegPad: {
          stappen: [{ titel: "1648 = vrede", tekst: "1648 = Vrede van Münster = einde 80-jr oorlog = officieel onafhankelijk Nederland." }],
          woorden: [{ woord: "1648", uitleg: "Sleutel-jaartal NL geschiedenis: einde Tachtigjarige Oorlog." }],
          theorie: "1648 = sleuteljaar. Onthoud naast 1568 (begin oorlog), 1602 (VOC), 1815 (koning).",
          voorbeelden: [{ type: "tabel", tekst: "1568 begin → 1648 vrede → 80 jaar oorlog." }],
          basiskennis: [{ onderwerp: "Memo-truc", uitleg: "1648 ligt 80 jaar na 1568. Reken: 1568+80=1648." }],
          niveaus: { basis: "Vrede van Münster. A.", simpeler: "1648 = Vrede van Münster (einde Tachtigjarige Oorlog). NL officieel onafhankelijk. = A.", nogSimpeler: "Münster = A." },
        },
      },
      {
        q: "Welk jaartal hoort bij **'eerste koning Nederland'**?",
        options: ["1815", "1648", "1568", "1945"],
        answer: 0,
        wrongHints: [null, "Was Vrede van Münster — Republiek, geen koning.", "Begin Tachtigjarige Oorlog.", "Bevrijding WO2 — toen was er al lang een koning."],
        uitlegPad: {
          stappen: [{ titel: "1815 = Willem I", tekst: "1815 = Willem I koning. Begin Koninkrijk der Nederlanden." }],
          woorden: [{ woord: "1815", uitleg: "Sleuteljaar: einde Napoleon-tijd, Willem I koning. Begin koninkrijk." }],
          theorie: "Sleutel-jaartallen: 1568 (begin 80jr) → 1648 (einde 80jr) → 1815 (koninkrijk) → 1945 (bevrijding).",
          voorbeelden: [{ type: "context", tekst: "Na Napoleon-tijd (1795-1813) werd Willem I in 1815 koning." }],
          basiskennis: [{ onderwerp: "Niet 1648", uitleg: "1648 = Republiek (geen koning), 1815 = Koninkrijk (eerste koning)." }],
          niveaus: { basis: "1815. A.", simpeler: "Eerste koning NL = Willem I in 1815. (Daarvoor: stadhouders/Republiek/Bataafs/Lodewijk Napoleon). = A.", nogSimpeler: "1815 = A." },
        },
      },
      {
        q: "Wat is de **Patatkar-school**, hippe naam voor wat?",
        options: ["Geen — niet bestaand","Vroege NL-democratie","Modern onderwijs","Historisch museum"],
        answer: 0,
        wrongHints: [null,"Klopt — bedacht antwoord, bestaat niet.","Niet — geen historisch concept.","Niet — geen onderwijs-systeem.","Niet — geen museum."],
        uitlegPad: {
          stappen: [{ titel: "Niet alles wat klinkt is echt", tekst: "Cito test soms of je leerlingen onderscheid maken tussen echte historische begrippen + verzonnen. 'Patatkar-school' = bedacht. Echt: Tachtigjarige Oorlog, Gouden Eeuw, etc." }],
          woorden: [{ woord: "kritisch denken", uitleg: "Niet automatisch geloven dat naam = echt." }],
          theorie: "Bij Cito: kies alleen antwoorden waar je weet dat ze echt-historisch zijn. Bedacht = vermijden.",
          voorbeelden: [{ type: "stap", tekst: "'Was Karel de Grote koning van Frankrijk?' → JA (echt). 'Patatkar' → twijfel = wegstrepen." }],
          basiskennis: [{ onderwerp: "Bedachte termen", uitleg: "Cito gebruikt soms gekke + verzonnen termen als afleider. Niet kiezen als je niet zeker weet." }],
          niveaus: { basis: "Niet echt. = A.", simpeler: "Bestaat niet in geschiedenis. = A.", nogSimpeler: "Verzonnen = A." },
        },
      },
      {
        q: "Wanneer was de **Tweede Wereldoorlog** in Nederland?",
        options: ["1940-1945","1914-1918","1815","1648"],
        answer: 0,
        wrongHints: [null,"Klopt — Duitse bezetting van 10 mei 1940 tot bevrijding 5 mei 1945.","Niet — dat is WO1, NL was neutraal toen.","Begin Koninkrijk.","Vrede van Münster."],
        uitlegPad: {
          stappen: [
            { titel: "WO2 in NL — sleuteldatums", tekst: "• **10 mei 1940**: Duitsland valt NL binnen, Rotterdam gebombardeerd\n• **15 mei 1940**: NL capituleert\n• **1940-1945**: Duitse bezetting\n• **Joden-vervolging** intensiveert vanaf 1941 (~104.000 NL-joden vermoord)\n• **5 september 1944 'Dolle Dinsdag'**: zuiden bevrijd\n• **Hongerwinter 1944-1945**: west-NL extreem honger\n• **5 mei 1945**: bevrijding hele NL — Bevrijdingsdag" },
            { titel: "Cito-feit: belangrijke namen", tekst: "**WO2-Nederlanders**:\n• **Anne Frank** (1929-1945) — Joods meisje, dagboek\n• **Koningin Wilhelmina** — vluchtte naar Engeland, leidde verzet via radio\n• **Verzet** — illegale kranten, onderduikadressen, sabotage\n• **NSB** — collaborerende NL-partij onder Mussert\n• **Hannie Schaft** — verzetsstrijder, beroemd door rood haar\n\nWO2 is **kernstof Cito-geschiedenis** + Doorstroomtoets." },
          ],
          woorden: [
            { woord: "bezetting", uitleg: "Periode waarin vreemde macht een land controleert." },
            { woord: "verzet", uitleg: "Illegaal werk tegen bezetter (kranten, onderduik, sabotage)." },
            { woord: "bevrijding", uitleg: "Einde bezetting. Voor NL: 5 mei 1945." },
          ],
          theorie: "WO2-Cito-kerntermen:\n• 10 mei 1940 — invasie\n• 1942-1944 — Holocaust intensiveert\n• 1944 Hongerwinter\n• 5 mei 1945 — bevrijding\n• 4+5 mei nu = nationale herdenkings­dagen\n• Anne Frank Huis (Amsterdam) — symbool",
          voorbeelden: [
            { type: "stap", tekst: "Op 4 mei (Dodenherdenking) staan we 2 minuten stil voor WO2-slachtoffers. 5 mei = Bevrijdingsdag (feest)." },
          ],
          basiskennis: [{ onderwerp: "Niet WO1", uitleg: "WO1 (1914-1918): NL was neutraal, geen oorlog op NL-bodem. WO2 (1940-1945): wél bezet." }],
          niveaus: { basis: "1940-1945. = A.", simpeler: "WO2 NL: 10 mei 1940 invasie → 5 mei 1945 bevrijding. 5 jaar bezetting. = A.", nogSimpeler: "1940-1945 = A." },
        },
      },
      {
        q: "**Industriële Revolutie** kwam in NL ongeveer wanneer?",
        options: ["Eind 1800 / begin 1900","Middeleeuwen","Romeinse tijd","1990"],
        answer: 0,
        wrongHints: [null,"Klopt — NL was later dan Engeland (1750+). NL pas vanaf ~1850-1870 industrialisering.","Te vroeg.","Veel te vroeg.","Te recent — dat is digitale revolutie."],
        uitlegPad: {
          stappen: [
            { titel: "Wat was Industriële Revolutie?", tekst: "**Industriële Revolutie** = grote verandering van **handwerk → machine-productie**. Begon **Engeland ~1750-1850**, daarna naar rest van Europa.\n\n**Belangrijke uitvindingen**:\n• Stoommachine (Watt ~1769)\n• Spinmachine (textiel)\n• Stoomtrein (1800+)\n• Telegraaf (1830+)" },
            { titel: "Waarom NL later?", tekst: "Nederland startte **industrialisering ~1850-1870**, een halve eeuw na Engeland. Redenen:\n• NL focuste op handel (VOC, koloniën)\n• Geen veel kolen/ijzer (Engeland had wel)\n• Pas vanaf spoorwegen (1840+) + stoommachines werden NL-fabrieken modern\n• **Twentse textiel** (Enschede, Almelo) was eerste industrie-cluster\n• **Philips** opgericht 1891 in Eindhoven (gloeilampen)" },
            { titel: "Cito-feit: gevolgen", tekst: "**Effect op samenleving**:\n• Mensen van platteland → stad (urbanisatie)\n• Fabrieken vervangen huisindustrie\n• Kinderen werkten in fabrieken (Kinderwet 1874 verbood arbeid <12 jaar)\n• Spoorwegen (1839 eerste NL-traject Amsterdam-Haarlem)\n• Beter onderwijs nodig voor machine-bediening\n• Sociale problemen → vakbonden + arbeidersrechten" },
          ],
          woorden: [
            { woord: "Industriële Revolutie", uitleg: "Overgang van handwerk naar machine-productie. Engeland 1750-1850, NL ~1850-1900." },
            { woord: "stoommachine", uitleg: "Machine die water-stoom omzet in beweging. James Watt 1769." },
            { woord: "urbanisatie", uitleg: "Verplaatsing platteland → stad. Steden groeien snel." },
          ],
          theorie: "NL-tijdvakken (Cito-bron):\n• Prehistorie - Romeinse tijd\n• Middeleeuwen 500-1500\n• Gouden Eeuw 1600-1700\n• 80-jr Oorlog 1568-1648\n• Republiek 1648-1795\n• Napoleon 1795-1813\n• Koninkrijk 1815+\n• **Industriële Revolutie ~1850-1900**\n• WO1 (1914-1918) — NL neutraal\n• WO2 (1940-1945) — NL bezet\n• Wederopbouw + EU (1945+)",
          voorbeelden: [
            { type: "feit", tekst: "Philips Eindhoven groeide van gloeilampen (1891) tot wereldconcern. Iconisch NL-bedrijf van Industriële Revolutie." },
          ],
          basiskennis: [{ onderwerp: "Late maar succesvol", uitleg: "NL begon laat maar haalde wel in. Tegenwoordig is NL een van wereldwijd top industrie-landen." }],
          niveaus: { basis: "1850-1900. = A.", simpeler: "NL-industriële revolutie kwam laat: pas ~1850-1900. Daarvoor handel + landbouw. Philips (1891) iconisch. = A.", nogSimpeler: "Eind 1800 = A." },
        },
      },
      { q: "**Tweede Wereldoorlog** duurde welke jaren in NL?", options: ["1940-1945","1914-1918","1939-1945","1945-1950"], answer: 0, wrongHints: [null,"Klopt — NL bezet mei 1940.","WO1.","Wereld-WO2 begin sept 1939.","Wederopbouw."] },
      { q: "**Anne Frank** zat in onderduik in?", options: ["Amsterdam","Den Haag","Rotterdam","Utrecht"], answer: 0, wrongHints: [null,"Klopt — Prinsengracht.","Niet.","Niet.","Niet."] },
      { q: "**Tachtigjarige Oorlog** begon in welk jaar?", options: ["1568","1648","1500","1600"], answer: 0, wrongHints: [null,"Klopt — Willem van Oranje.","Eind.","Te vroeg.","Te laat."] },
      { q: "**Gouden Eeuw** is welke eeuw?", options: ["17e eeuw","16e","18e","19e"], answer: 0, wrongHints: [null,"Klopt — 1600s.","80jr oorlog.","Te laat.","Industrieel."] },
      { q: "Welke **kolonie** had NL het langst?", options: ["Indonesië","Brazilië","India","Vietnam"], answer: 0, wrongHints: [null,"Klopt — 1602-1949.","Kort, ~30 jr.","Niet NL-kolonie.","Niet NL."] },
      { q: "Wie was de **eerste koning** van NL?", options: ["Willem I","Willem-Alexander","Beatrix","Juliana"], answer: 0, wrongHints: [null,"Klopt — 1815.","Huidige.","Vorige.","Eerder."] },
      { q: "**Bevrijdingsdag NL** = welke datum?", options: ["5 mei","4 mei","27 april","11 nov"], answer: 0, wrongHints: [null,"Klopt — 1945.","Dodenherdenking.","Koningsdag.","WO1 wapenstilstand."] },
      { q: "**Romeinen** in NL — wat lag op de Rijn?", options: ["Limes (verdedigingslinie)","Marker","Burg","Niets"], answer: 0, wrongHints: [null,"Klopt — grens Romeinse Rijk.","Niet.","Niet.","Wel iets."] },
      { q: "Wanneer kwam **Napoleon** in NL?", options: ["~1795-1813","1815-1830","1900-1918","1940-1945"], answer: 0, wrongHints: [null,"Klopt — Bataafse Republiek + Koninkrijk Holland.","Daarna.","Veel later.","WO2."] },
      { q: "Wat is de **Vrede van Munster** (1648)?", options: ["Einde 80jr-oorlog (NL onafhankelijk)","Begin WO1","Vrede VOC","Niet bekend"], answer: 0, wrongHints: [null,"Klopt — Spanje erkent NL.","Niet relevant.","Niet.","Wel bekend."] },
      { q: "**Eerste WO** in NL — was NL?", options: ["Neutraal","Bezet","Aanvaller","Bondgenoot"], answer: 0, wrongHints: [null,"Klopt — buiten oorlog gebleven.","WO2.","Niet.","Niet."] },
      { q: "**EU-lidmaatschap NL** sinds?", options: ["Begin EEG/EU (1957/1993)","1900","1965","2010"], answer: 0, wrongHints: [null,"Klopt — oprichtende land.","Te vroeg.","Niet exact.","Veel later."] },
      { q: "Wie waren de **eerste bewoners** van NL?", options: ["Jagers-verzamelaars (steentijd)","Romeinen","Vikingen","Spanjaarden"], answer: 0, wrongHints: [null,"Klopt — pré-historie.","Veel later.","Wel geweest.","Niet eerste."] },
      { q: "Welke koningin **regeerde lang** in NL (62 jaar)?", options: ["Wilhelmina (1898-1948)","Juliana","Beatrix","Maxima"], answer: 0, wrongHints: [null,"Klopt.","Korter.","Korter.","Geen koningin."] },
      { q: "**Watersnoodramp** Zeeland = welk jaar?", options: ["1953","1900","1945","1980"], answer: 0, wrongHints: [null,"Klopt.","Niet.","Niet.","Niet."] },
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
  prerequisites: [
    { id: "bekende-nederlanders-po", title: "Historische Nederlanders", niveau: "po-1F" },
  ],
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
