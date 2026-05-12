// Leerpad: Industriële Revolutie - groep 6-8 + klas 1-2.
// Cito wereldoriëntatie. Sluit op tijdvakken-nederland-po + energiebronnen.
// 6 stappen.

const stepEmojis = ["⚙️", "🚂", "🏭", "👶", "🇳🇱", "🏆"];

const chapters = [
  { letter: "A", title: "Wat was er vóór?", emoji: "⚙️", from: 0, to: 0 },
  { letter: "B", title: "Stoommachine + uitvindingen", emoji: "🚂", from: 1, to: 1 },
  { letter: "C", title: "Fabrieken + samenleving", emoji: "🏭", from: 2, to: 2 },
  { letter: "D", title: "Kinderarbeid + sociale strijd", emoji: "👶", from: 3, to: 3 },
  { letter: "E", title: "NL en industrie", emoji: "🇳🇱", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

const steps = [
  {
    title: "Wat was er vóór de industriële revolutie?",
    explanation:
      "**Industriële Revolutie** *(rond 1750-1900)* = grote omwenteling in hoe mensen werken en leven.\n\n**Vóór (1700)** — agrarisch + ambachtelijk:\n• De meeste mensen waren **boer** of werkten in eigen **werkplaats**.\n• Goederen werden **met de hand** gemaakt door **ambachtslieden**.\n• **Familie produceert thuis**: stof weven, schoenen maken.\n• **Reizen** ging te voet of met paard-en-wagen — Amsterdam-Parijs: 2 weken.\n• Werktijden bepaalden zon + seizoen — gewone werkdag ~10 uur in zomer, kort in winter.\n• Veel mensen kenden alleen hun eigen dorp.\n\n**Waarom kwam de verandering?**\n\n1. **Bevolkings­groei** + **honger**: meer mensen voeden = meer voedsel + spullen nodig.\n2. **Uitvindingen** in landbouw: ploegen verbeterd, drainage → grotere oogsten.\n3. **Geld + handel**: rijke kooplieden hadden kapitaal om uitvindingen te bouwen.\n4. **Steenkool + ijzer** beschikbaar in **Engeland** *(geboorteplaats Industriële Revolutie)*.\n5. **Wetenschap** ontwikkelde zich: thermodynamica, mechanica.\n\n**Begin**: rond **1760-1780** in **Engeland**. Daarna verspreid naar West-Europa + VS. NL volgde later (~1870).\n\n**Tijdvakken** *(canon NL)*:\n• Industriële Revolutie zit in **Tijdvak 8: Tijd van burgers en stoommachines** (1800-1900).\n• Onderdeel van **canonvenster** in basisschool-curriculum.",
    checks: [
      {
        q: "In welk **land** begon de Industriële Revolutie?",
        options: ["Engeland", "Nederland", "Frankrijk", "Duitsland"],
        answer: 0,
        wrongHints: [null, "Klopt — rond 1760.", "Volgde later.", "Volgde later.", "Volgde later."],
      },
      {
        q: "**Vóór** de Industriële Revolutie — hoe werkten mensen meestal?",
        options: ["Boer of ambachtsman thuis", "In fabriek", "Computer", "Op kantoor"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Bestond nog niet.", "Niet.", "Niet."],
      },
      {
        q: "Welk **tijdvak** is dit?",
        options: ["Tijd van burgers en stoommachines (8)", "Romeinen", "Renaissance", "Toekomst"],
        answer: 0,
        wrongHints: [null, "Klopt — 1800-1900.", "Veel eerder.", "Eerder.", "Niet."],
      },
      {
        q: "Wat hielp de **start**?",
        options: ["Steenkool + ijzer in Engeland + kapitaal", "Niets", "Alleen geluk", "Religie"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel.", "Niet enkel.", "Niet hoofdfactor."],
      },
    ],
  },
  {
    title: "Stoommachine + uitvindingen",
    explanation:
      "De **stoommachine** = motor van de Industriële Revolutie.\n\n**1. Stoommachine** *(James Watt, 1769)*:\n• Eerdere versie was van Thomas Newcomen (1712) — niet efficiënt.\n• Watt verbeterde → kon **fabrieken aandrijven** + **treinen** rijden.\n• Werkt op **stoom** *(verhit water)* die zuiger op-en-neer drukt.\n• Steenkool als brandstof.\n\n**Hoe?**\n1. Water in ketel verhitten → wordt stoom.\n2. Stoom drijft zuiger in cilinder.\n3. Zuiger zet wiel of pomp in beweging.\n4. → Krachtige machine zonder paard of waterrad.\n\n**Belang**: voor het eerst krachtbron die **niet afhankelijk** was van rivier of wind. Fabriek kan **overal** staan + **24 uur per dag**.\n\n**2. Spinmachine + weefgetouw** *(spinning jenny 1764, water frame 1769)*:\n• Vroeger weefde 1 vrouw per dag ~1 meter stof.\n• Met spinmachine: tientallen draden tegelijk.\n• → Goedkope stoffen.\n\n**3. Trein** *(Stephenson, 1825)*:\n• 'Locomotion No. 1' — eerste passagierstrein in Engeland.\n• NL eerste spoorlijn: Amsterdam-Haarlem **1839**.\n• Reisafstanden krimpen: Amsterdam-Parijs van 2 weken → 1 dag.\n\n**4. Stoomboot** *(Fulton, 1807)*:\n• Vroeger zeilschip afhankelijk van wind.\n• Stoomboot: vast schema, sneller, doorvaart tegen wind in.\n\n**5. Telegraaf** *(Morse, 1844)*:\n• Berichten over draad met elektriciteit.\n• 'Morse-code' — punten en strepen.\n• Bericht New York → London in **minuten**, vroeger weken.\n\n**6. Telefoon** *(Bell, 1876)*:\n• Stem over draad.\n• Eerste NL-telefooncentrale: Amsterdam 1881.\n\n**7. Gloeilamp** *(Edison, 1879)*:\n• Eerder gaslamp + olielamp.\n• Elektrisch licht in huizen.\n\n**8. Auto** *(Benz, 1886)*:\n• Eerste benzine-auto.\n• Massa-productie kwam met **Ford** *(1908, T-Ford)*.\n\n**Patroon**: elke uitvinding maakt iets **goedkoper + sneller + grootschaliger**. Dit veranderde de hele samenleving.",
    checks: [
      {
        q: "Wie **verbeterde** de stoommachine?",
        options: ["James Watt (1769)", "Edison", "Bell", "Ford"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Gloeilamp.", "Telefoon.", "T-Ford."],
      },
      {
        q: "Wat is een **belangrijk** kenmerk van stoommachine?",
        options: ["Krachtbron onafhankelijk van rivier/wind", "Werkt op zon", "Werkt op gas", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Klopt — overal+altijd.", "Niet.", "Niet specifiek.", "Wel."],
      },
      {
        q: "Eerste **NL spoorlijn**?",
        options: ["Amsterdam-Haarlem (1839)", "Utrecht-Rotterdam", "Maastricht-Amsterdam", "Den Haag-Schiphol"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wie maakte **gloeilamp**?",
        options: ["Edison (1879)", "Watt", "Bell", "Morse"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Stoom.", "Telefoon.", "Telegraaf."],
      },
    ],
  },
  {
    title: "Fabrieken + samenleving",
    explanation:
      "**Fabrieken** ontstonden — grote gebouwen waar veel machines + arbeiders samen werkten.\n\n**Verschil**:\n• **Vóór**: ambachtsman thuis, eigen tempo.\n• **Na**: fabriek, **lopende band**, vast tempo, **uurloon**, baas die toezicht houdt.\n\n**Werkomstandigheden** *(1800-1850)*:\n• Werkdag: **12-16 uur**, 6 dagen per week.\n• Gevaarlijk *(machines zonder beschermingen, ongelukken)*.\n• Stoffig + bedompt.\n• **Geen vakantiedagen**, geen ziekteverzekering, geen pensioen.\n• Laag loon *(amper genoeg om te eten)*.\n\n**Stadsgroei** *(verstedelijking)*:\n• Mensen trokken massaal naar **fabrieksteden** voor werk.\n• London: van 1 miljoen (1800) → 6,5 miljoen (1900).\n• In NL: Tilburg, Twente, Limburg groeiden mee.\n• **Krottenwijken**: arbeiders woonden in vieze, kleine huisjes.\n• **Hygiëne** slecht: cholera-epidemieën *(NL: 1832, 1849, 1866)*.\n\n**Sociale klassen**:\n• **Burgerij (bourgeoisie)**: fabriekseigenaren, kooplui, dokters. Rijk geworden.\n• **Arbeidersklasse (proletariaat)**: fabriekswerkers. Arm. Geen rechten.\n• Voor de Revolutie was er vooral: adel + boeren. Burgerij groeide enorm.\n\n**Voordelen** Industriële Revolutie:\n• Goedkopere goederen *(kleding, gereedschap, voedsel)*.\n• Snel reizen + communiceren.\n• Wetenschap + gezondheidszorg vooruit.\n• Op lange termijn: hogere levensstandaard.\n\n**Nadelen** *(vooral 1800-1850)*:\n• Slechte werkomstandigheden.\n• Kinderarbeid.\n• Vervuiling van lucht + rivieren.\n• Steden ongezond + onveilig.\n• Mensen vervreemd van eigen werk *(maakten 1 onderdeel, nooit hele product)*.\n\n**Cito-feitje**:\nDe gemiddelde levensverwachting in een Engelse fabrieksstad in 1850 was **30 jaar**. In platteland was het 50 jaar. Vervuiling + ziekte maakten stad ongezond.",
    checks: [
      {
        q: "Werkdag in **vroege fabriek**?",
        options: ["12-16 uur", "8 uur", "4 uur", "24 uur"],
        answer: 0,
        wrongHints: [null, "Klopt — hard werken.", "Veel meer.", "Niet.", "Onmogelijk."],
      },
      {
        q: "Wat is de **bourgeoisie**?",
        options: ["Rijke burgers / fabriekseigenaren", "Boeren", "Adel", "Arbeiders"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Eerdere groep.", "Eerdere groep.", "Proletariaat."],
      },
      {
        q: "Wat is **verstedelijking**?",
        options: ["Mensen verhuizen naar steden", "Steden verlaten", "Boerderijen bouwen", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt — fabrieksstad-groei.", "Tegenovergesteld.", "Niet.", "Wel."],
      },
      {
        q: "Wat is **proletariaat**?",
        options: ["Arbeidersklasse", "Adel", "Boeren", "Kerk"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet meer hoofdklasse.", "Niet."],
      },
    ],
  },
  {
    title: "Kinderarbeid + sociale strijd",
    explanation:
      "**Kinderarbeid** was normaal — kinderen werkten al vanaf **6 jaar**.\n\n**Waarom**:\n• Arme gezinnen hadden geld nodig.\n• Kinderen waren **goedkoop** *(half loon van volwassene)*.\n• Klein → konden in nauwe ruimtes onder machines.\n• Geen schoolplicht.\n\n**Werk van kinderen**:\n• Spinnerij + weverij: garens repareren.\n• Mijn: kolenkar duwen, deur open-dicht.\n• Schoorsteenveger *(kleine jongens werden in schoorsteen geduwd)*.\n• Fabriek: machines schoonmaken *(soms terwijl ze draaien)*.\n\n**Gevolgen**:\n• Veel **ongelukken** + dood.\n• Geen onderwijs → blijven arm.\n• Lichamelijke beschadiging *(misvormde ruggen, longziekte)*.\n\n**Sociale beweging** ontstond:\n\n**1. Kinderwetje Van Houten (NL, 1874)**:\n• Verbod kinderen jonger dan **12 jaar** in fabrieken.\n• Eerste sociale wet in NL.\n• Werd nog niet altijd goed nageleefd.\n\n**2. Leerplichtwet (NL, 1900)**:\n• Alle kinderen van 6 tot 12 **moeten naar school**.\n• Einde van massale kinderarbeid in NL.\n\n**3. Vakbonden** *(arbeidersverenigingen)*:\n• Arbeiders **samen** voor betere voorwaarden.\n• NL eerste vakbond: **ANWV** (1871).\n• Stakingen = drukmiddel.\n\n**4. Socialisme + communisme**:\n• **Karl Marx** *(1818-1883)*: schreef 'Het Kapitaal' + 'Communistisch Manifest'.\n• Idee: arbeiders moeten productiemiddelen bezitten.\n• Inspireerde latere revoluties *(Rusland 1917)*.\n\n**5. Algemeen kiesrecht**:\n• Vóór 1800: alleen rijke mannen mochten stemmen.\n• Mannen NL: **1917** *(actief kiesrecht voor alle mannen)*.\n• Vrouwen NL: **1919** *(actief)* / **1922** *(passief)*.\n\n**6. Sociale wetten** NL:\n• **1901**: Ongevallenwet *(verzekering bij ongeluk)*.\n• **1913**: Invaliditeitswet.\n• **1919**: 8-urige werkdag.\n• **1947**: Noodwet ouderdomsvoorzieningen *(eerste AOW)*.\n• **1957**: Algemene Ouderdomswet *(AOW definitief)*.\n\n**Cito-tip**: het verband tussen Industriële Revolutie en sociale strijd is favoriete vraag. **Oorzaak-gevolg**: slechte omstandigheden → vakbond + wetten → betere arbeidsvoorwaarden.",
    checks: [
      {
        q: "Wanneer **kinderwetje** Van Houten?",
        options: ["1874", "1700", "1950", "Nooit"],
        answer: 0,
        wrongHints: [null, "Klopt — eerste sociale NL-wet.", "Eerder.", "Te laat.", "Wel."],
      },
      {
        q: "**Leerplichtwet** in NL?",
        options: ["1900", "1800", "1950", "Nooit"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te vroeg.", "Te laat.", "Wel."],
      },
      {
        q: "Wie schreef '**Het Kapitaal**'?",
        options: ["Karl Marx", "James Watt", "Napoleon", "Edison"],
        answer: 0,
        wrongHints: [null, "Klopt — Duitse denker over arbeid.", "Verkeerd vakgebied.", "Verkeerd vakgebied.", "Verkeerd vakgebied."],
      },
      {
        q: "Wanneer **vrouwenkiesrecht** in NL (actief)?",
        options: ["1919", "1900", "1800", "Nooit"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te vroeg.", "Eerder.", "Wel."],
      },
    ],
  },
  {
    title: "Nederland en de industriële revolutie",
    explanation:
      "NL kwam **later** dan Engeland — pas vanaf **~1870**. Waarom?\n\n• **Geen steenkool** in Holland *(wel in Limburg, maar dat hoorde bij België tot 1839)*.\n• **Geen ijzer-erts**.\n• **Veel scheepvaart** + handel *(VOC)* — minder druk om te industrialiseren.\n• **Conservatieve elite**.\n\n**Wel** kwam Limburg-mijnbouw, Twente-textiel, Brabant-leder vroeger.\n\n**Belangrijke NL-industrieën** *(rond 1900)*:\n\n**1. Textiel — Twente**:\n• Spinnerijen + weverijen.\n• Bedrijven: Van Heek, Ten Cate.\n• Hele steden draaiden op textiel: Enschede, Hengelo, Almelo.\n\n**2. Steenkool — Limburg** *(vanaf 1860)*:\n• Staatsmijnen (publiek) + particuliere mijnen.\n• 12 mijnen tot 1974 *(sluiting laatste mijn)*.\n• Mijnramp 1925: ramp bij Heerlen.\n\n**3. Scheepsbouw — Rotterdam, Amsterdam**:\n• Drogedokken voor grote stoomschepen.\n• Bedrijven: Wilton-Fijenoord, Nederlandsche Dok Maatschappij.\n\n**4. Voedingsmiddelen**:\n• Margarine in Oss *(Jurgens, Van den Bergh — werd Unilever)*.\n• Bier *(Heineken vanaf 1864, Amstel)*.\n• Chocolade *(Verkade, Droste)*.\n\n**5. Glas + keramiek**:\n• Tegelfabrieken Maastricht *(Mosa, Boch)*.\n• Glas: Leerdam.\n\n**6. Electrotechnisch — Eindhoven**:\n• **Philips** *(1891)* — gloeilampen, daarna radio's, TV's.\n• Eindhoven groeide van 5.000 → 100.000 inwoners.\n\n**7. Chemie**:\n• Akzo, DSM *(uit staatsmijnen ontwikkeld)*.\n• Royal Shell *(1907)*.\n\n**NL kenmerken**:\n• **Snelle inhaal** in 50 jaar.\n• Sterke **bedrijfsdynastieën** *(Philips, Heineken, Van Heek)*.\n• Vooral **familiaire ondernemingen**.\n• Calvinistische arbeidsethiek.\n\n**Erfgoed van Industriële Revolutie**:\n• Spoorwegen: 3.400 km in NL nu.\n• Industriestadjes (Twente, Limburg).\n• **NS** + **PostNL** voortgekomen uit toen.\n• Onderwijsstelsel met leerplicht.\n• Sociale wetten basis voor verzorgingsstaat.\n\n**Cito-feitje**:\nEindhoven werd door **Philips** van klein dorp tot 5e stad van NL. Bij sluiting Philips-fabrieken (jaren 1990) bleek de afhankelijkheid groot — daarna omgebouwd tot 'Brainport' met hi-tech bedrijven (ASML).",
    checks: [
      {
        q: "Waarom **later** NL?",
        options: ["Geen steenkool/ijzer + handel-focus", "Wilde niet", "Te koud", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel.", "Geen reden.", "Wel."],
      },
      {
        q: "Welke industrie in **Twente**?",
        options: ["Textiel", "Steenkool", "Scheepsbouw", "Auto"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Limburg.", "Kust.", "Niet hoofd."],
      },
      {
        q: "**Philips** start in?",
        options: ["1891 (Eindhoven)", "1700", "2000", "1500"],
        answer: 0,
        wrongHints: [null, "Klopt — gloeilampen.", "Veel later.", "Te recent.", "Veel later."],
      },
      {
        q: "**Laatste mijn Limburg** sloot?",
        options: ["1974", "2020", "1900", "Nooit"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Veel eerder.", "Veel later.", "Wel."],
      },
    ],
  },
  {
    title: "Eind-toets — industriële revolutie mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Industriële Revolutie** ging vooral over?", options: ["Machines + fabrieken", "Computers", "Schepen", "Oorlog"], answer: 0, wrongHints: [null, "Klopt.", "Veel later.", "Niet primair.", "Niet."] },
      { q: "Stoommachine **uitgevonden** door?", options: ["James Watt", "Edison", "Marx", "Ford"], answer: 0, wrongHints: [null, "Klopt — verbeterd.", "Gloeilamp.", "Filosoof.", "Auto."] },
      { q: "**Kinderarbeid** verboden in NL onder?", options: ["12 jaar (vanaf 1874)", "Geen wet", "16 jaar", "8 jaar"], answer: 0, wrongHints: [null, "Klopt — Van Houten.", "Wel.", "Iets later.", "Niet specifiek."] },
      { q: "**Tijdvak** waarin dit valt?", options: ["8: Burgers + stoommachines", "Romeinen", "Renaissance", "Goud"], answer: 0, wrongHints: [null, "Klopt — 1800-1900.", "Te vroeg.", "Te vroeg.", "Iets eerder."] },
      { q: "Wat is **bourgeoisie**?", options: ["Rijke burgers", "Boeren", "Adel", "Arbeiders"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Proletariaat."] },
      { q: "**Philips** start in?", options: ["1891 Eindhoven", "1700", "2000", "Frankrijk"], answer: 0, wrongHints: [null, "Klopt.", "Te vroeg.", "Te laat.", "Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const industrieleRevolutiePo = {
  id: "industriele-revolutie-po",
  title: "Industriële Revolutie (groep 6-8 + klas 1-2)",
  emoji: "⚙️",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — geschiedenis (Tijdvak 8)",
  prerequisites: [
    { id: "tijdvakken-nederland-po", title: "Tijdvakken NL", niveau: "1F" },
  ],
  intro:
    "Industriële Revolutie voor groep 6-8 + klas 1-2 — wat vóór + stoommachine + uitvindingen (trein/telegraaf/auto) + fabrieken/verstedelijking + kinderarbeid/sociale strijd (Marx/vakbond/leerplicht) + NL (Twente/Limburg/Philips). Sluit op tijdvakken-nederland-po + energiebronnen-po. ~15 min.",
  triggerKeywords: [
    "industriele revolutie", "industriële revolutie",
    "stoommachine", "fabriek", "fabrieken",
    "kinderarbeid", "leerplicht",
    "James Watt", "Edison",
    "Karl Marx", "vakbond",
    "Philips", "Eindhoven", "Twente", "Limburg mijn",
    "Tijdvak 8", "burgers stoommachines",
  ],
  chapters,
  steps,
};

export default industrieleRevolutiePo;
