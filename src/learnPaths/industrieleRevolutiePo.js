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
        wrongHints: [null, "Volgde later.", "Volgde later.", "Volgde later."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de Industriële Revolutie?", tekst: "Een grote omwenteling rond 1750-1900: van handwerk thuis naar machines in fabrieken. Veranderde hoe mensen werken en leven." },
            { titel: "Begin in Engeland (~1760)", tekst: "Engeland had 3 dingen die andere landen nog niet hadden: 1) steenkool + ijzer in de grond, 2) rijke kooplieden met geld voor uitvindingen, 3) wetenschappers met nieuwe ideeën." },
            { titel: "Verspreidde naar de rest van Europa", tekst: "Daarna volgden VS, Frankrijk, België, Duitsland. NL was relatief LAAT (~1870) want we waren handel-land, niet zo industrieel." },
          ],
          woorden: [
            { woord: "Industriële Revolutie", uitleg: "Periode 1750-1900: omwenteling naar machine-productie." },
            { woord: "fabriek", uitleg: "Gebouw waar machines + arbeiders samen producten maken." },
          ],
          theorie: "Cito-feit: Engeland 'won' omdat het steenkool, ijzer EN kapitaal had. Plus geen oorlog op eigen land (eiland). Andere landen volgden 50-100 jaar later.",
          voorbeelden: [
            { type: "stap", tekst: "Engeland: eerste fabrieken in Manchester (textiel) rond 1780." },
            { type: "stap", tekst: "Nederland: eerste fabrieken in Twente (textiel) rond 1860-1870." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Engeland eerst, NL later. Industriële Revolutie zit in TIJDVAK 8 van NL-canon (Tijd van burgers en stoommachines)." }],
          niveaus: {
            basis: "Industriële Revolutie begon in Engeland (~1760).",
            simpeler: "Engeland had steenkool + geld → eerste fabrieken daar.",
            nogSimpeler: "Engeland eerst.",
          },
        },
      },
      {
        q: "**Vóór** de Industriële Revolutie — hoe werkten mensen meestal?",
        options: ["Boer of ambachtsman thuis", "In fabriek", "Computer", "Op kantoor"],
        answer: 0,
        wrongHints: [null, "Bestond nog niet.", "Niet.", "Niet."],
      },
      {
        q: "Welk **tijdvak** is dit?",
        options: ["Tijd van burgers en stoommachines (8)", "Romeinen", "Renaissance", "Toekomst"],
        answer: 0,
        wrongHints: [null, "Veel eerder.", "Eerder.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "De Tien Tijdvakken", tekst: "In NL leren we geschiedenis via **10 tijdvakken** (canon NL). Elk tijdvak heeft een herkenbare naam + ongeveer 1 'kenmerkende' periode." },
            { titel: "Tijdvak 8: Tijd van burgers en stoommachines", tekst: "Tijdvak **8** loopt van **1800 tot 1900**. Naam: '**Tijd van burgers en stoommachines**'. Twee kernwoorden:\n• **Burgers** = opkomst van de burgerij/bourgeoisie als rijke + machtige klasse.\n• **Stoommachines** = symbool voor industrialisatie." },
            { titel: "Andere tijdvakken kort", tekst: "1) Jagers en boeren\n2) Grieken en Romeinen\n3) Monniken en ridders\n4) Steden en staten\n5) Ontdekkers en hervormers (Renaissance)\n6) Regenten en vorsten (Gouden Eeuw)\n7) Pruiken en revoluties\n**8) Burgers en stoommachines (1800-1900)**\n9) Wereldoorlogen\n10) Televisie en computer (na 1950)." },
          ],
          woorden: [
            { woord: "tijdvak", uitleg: "Een periode in geschiedenis met eigen kenmerken." },
            { woord: "canon NL", uitleg: "Officiële NL-canon: 50 vensters over 10 tijdvakken." },
          ],
          theorie: "Cito-feit: de 10 tijdvakken zijn een vaste vraag op Doorstroomtoets. Tijdvak-naam onthouden + grof tijdperk. Industriële Revolutie zit in tijdvak 8.",
          voorbeelden: [
            { type: "stap", tekst: "Tijdvak 7 (pruiken + revoluties) = 1700s = Franse Revolutie + Verlichting." },
            { type: "stap", tekst: "Tijdvak 9 (wereldoorlogen) = 1900-1950 = WO1 + WO2." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Volgorde tijdvakken op rijtje leren. Tijdvak 8 = 1800-1900 = burgers + stoom = Industriële Revolutie." }],
          niveaus: {
            basis: "Tijdvak 8: Tijd van burgers en stoommachines. = A.",
            simpeler: "Industriële Revolutie zit in NL-tijdvak 8 (1800-1900). = A.",
            nogSimpeler: "Tijdvak 8 = A.",
          },
        },
      },
      {
        q: "Wat hielp de **start**?",
        options: ["Steenkool + ijzer in Engeland + kapitaal", "Niets", "Alleen geluk", "Religie"],
        answer: 0,
        wrongHints: [null, "Wel.", "Niet enkel.", "Niet hoofdfactor."],
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
        wrongHints: [null, "Gloeilamp.", "Telefoon.", "T-Ford."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een stoommachine?", tekst: "Een motor die water KOOKT, en de stoom die ontstaat duwt een zuiger heen en weer. Daarmee kun je machines, treinen en boten aandrijven." },
            { titel: "James Watt (1769) verbeterde een ouder ontwerp", tekst: "De allereerste stoommachine was van Thomas Newcomen (1712), maar die werkte slecht. James Watt maakte hem **veel efficiënter** in 1769 — daarom geldt hij als 'de uitvinder' van de werkende stoommachine." },
            { titel: "Niet verwarren met andere uitvinders", tekst: "Edison = gloeilamp (1879). Bell = telefoon (1876). Ford = lopende band voor auto's (1908). Allemaal LATER dan Watt." },
          ],
          woorden: [
            { woord: "stoommachine", uitleg: "Motor op stoom van gekookt water." },
            { woord: "James Watt", uitleg: "Schotse uitvinder, verbeterde stoommachine in 1769." },
          ],
          theorie: "Cito-tip uitvinders onthouden: Watt = STOOM (1769). Stephenson = TREIN (1825). Bell = TELEFOON (1876). Edison = GLOEILAMP (1879). Ford = LOPENDE BAND (1908). Op tijdvolgorde.",
          voorbeelden: [
            { type: "stap", tekst: "De eenheid 'watt' (W) voor elektrisch vermogen is naar James Watt vernoemd." },
            { type: "stap", tekst: "Stoom-eenheid kon eerst alleen mijnen leegpompen → later treinen + fabrieken." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Watt klinkt als 'wat?' — wat is stoom? — antwoord = Watt." }],
          niveaus: {
            basis: "James Watt verbeterde de stoommachine in 1769.",
            simpeler: "Watt = stoom-uitvinder. Edison = lamp. Bell = telefoon.",
            nogSimpeler: "Watt = stoom.",
          },
        },
      },
      {
        q: "Wat is een **belangrijk** kenmerk van stoommachine?",
        options: ["Krachtbron onafhankelijk van rivier/wind", "Werkt op zon", "Werkt op gas", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet specifiek.", "Wel."],
      },
      {
        q: "Eerste **NL spoorlijn**?",
        options: ["Amsterdam-Haarlem (1839)", "Utrecht-Rotterdam", "Maastricht-Amsterdam", "Den Haag-Schiphol"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wie maakte **gloeilamp**?",
        options: ["Edison (1879)", "Watt", "Bell", "Morse"],
        answer: 0,
        wrongHints: [null, "Stoom.", "Telefoon.", "Telegraaf."],
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
        wrongHints: [null, "Veel meer.", "Niet.", "Onmogelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Vroege fabriek: zeer lange dagen", tekst: "In de vroege Industriële Revolutie (1800-1850) werkten arbeiders **12 tot 16 uur per dag**, 6 dagen per week. Slechts 1 dag rust (zondag)." },
            { titel: "Geen rechten", tekst: "Geen vakantie, geen ziekteverzekering, geen pensioen. Bij ongeluk werd je gewoon ontslagen. Loon was laag — amper genoeg om te eten." },
            { titel: "Pas eind 1800: regels", tekst: "Vanaf ongeveer 1880 kwamen er wetten: maximale werkdag, verbod op kinderarbeid, etc. De **Kinderwetje van Van Houten** (NL, 1874) verbood arbeid voor kinderen onder 12." },
          ],
          woorden: [
            { woord: "arbeider", uitleg: "Iemand die in fabriek werkt voor loon." },
            { woord: "Kinderwetje 1874", uitleg: "NL-wet die kinderarbeid (<12 jaar) verbood — eerste stap arbeidsrecht." },
          ],
          theorie: "Cito-feit: de huidige '8-urige werkdag' is bevochten door arbeiders + vakbonden. In ~1900 werd dit normaal. Voor 1900: 12-16 uur was standaard.",
          voorbeelden: [
            { type: "stap", tekst: "Een 10-jarige in 1840 werkte 12 uur in textielfabriek voor een paar centen per dag." },
            { type: "stap", tekst: "Pas vanaf 1919 (NL Arbeidswet) werd 8 uur per dag wettelijk maximum." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud: VROEGE fabriek = 12-16 uur. Modern = 8 uur per dag. Verschil dankzij vakbonden + wetten." }],
          niveaus: {
            basis: "Vroege fabriek: 12-16 uur per dag werken.",
            simpeler: "Veel langer dan nu: tweemaal zo lang als jouw schooldag.",
            nogSimpeler: "12-16 uur per dag.",
          },
        },
      },
      {
        q: "Wat is de **bourgeoisie**?",
        options: ["Rijke burgers / fabriekseigenaren", "Boeren", "Adel", "Arbeiders"],
        answer: 0,
        wrongHints: [null, "Eerdere groep.", "Eerdere groep.", "Proletariaat."],
        uitlegPad: {
          stappen: [
            { titel: "Nieuwe rijke klasse", tekst: "**Bourgeoisie** is een Frans woord voor de **rijke burgerij** — fabriekseigenaren, kooplieden, dokters, bankiers, advocaten. Niet adellijk geboren, maar **zelf rijk geworden** door handel of fabrieken." },
            { titel: "Vóór: alleen adel + boeren", tekst: "Vóór de Industriële Revolutie waren er vooral 2 groepen: **adel** (geboorte-recht macht) + **boeren** (arme meerderheid). De bourgeoisie was klein. Door industrialisatie werd zij groot + machtig." },
            { titel: "Twee nieuwe klassen", tekst: "Industriële Revolutie creëerde 2 nieuwe groepen:\n• **Bourgeoisie** = rijke burgers (fabriekseigenaren)\n• **Proletariaat** = arbeiders (fabriekswerkers, arm)\nDit was de basis voor Karl Marx' ideeën over klassenstrijd." },
          ],
          woorden: [
            { woord: "bourgeoisie", uitleg: "Rijke burgerij (Frans woord)." },
            { woord: "proletariaat", uitleg: "Arbeiders-klasse." },
            { woord: "adel", uitleg: "Edelen, geboorte-recht (graaf, baron, etc)." },
          ],
          theorie: "Cito-feit: bourgeoisie + proletariaat = Industriële Revolutie's twee nieuwe klassen. Niet adel (oud), niet boeren (oud), niet kerk. Nieuwe groep mensen door industrie.",
          voorbeelden: [
            { type: "stap", tekst: "Bourgeois-naam: 'burger' (van stad). Industrialisatie gaf rijke kooplui meer macht dan adel — vandaar Franse Revolutie 1789." },
            { type: "stap", tekst: "Karl Marx schreef in 'Communistisch Manifest' (1848): bourgeoisie buit proletariaat uit → revolutie nodig." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bourgeoisie = rijke. Proletariaat = arme. Allebei woorden uit Frans/Latijn — Cito kent ze allebei." }],
          niveaus: {
            basis: "Rijke burgerij (fabriekseigenaren, kooplui). = A.",
            simpeler: "Bourgeoisie = nieuwe rijke groep door Industriële Revolutie. = A.",
            nogSimpeler: "Rijke burgers = A.",
          },
        },
      },
      {
        q: "Wat is **verstedelijking**?",
        options: ["Mensen verhuizen naar steden", "Steden verlaten", "Boerderijen bouwen", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Wel."],
      },
      {
        q: "Wat is **proletariaat**?",
        options: ["Arbeidersklasse", "Adel", "Boeren", "Kerk"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet meer hoofdklasse.", "Niet."],
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
        wrongHints: [null, "Eerder.", "Te laat.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Kinderarbeid was normaal", tekst: "In de 19e eeuw werkten kinderen vanaf **6 jaar** in fabrieken + mijnen + schoorstenen. Gevaarlijk, lange dagen, geen school. Veel kinderen stierven of werden ziek." },
            { titel: "Het Kinderwetje van 1874", tekst: "Politicus **Samuel van Houten** kreeg een wet aangenomen: **kinderen onder 12 jaar mochten niet meer in fabrieken werken**. Heet ook 'Kinderwetje Van Houten' of '**Kinderwet van Van Houten**'." },
            { titel: "Niet meteen perfect", tekst: "De wet had **uitzonderingen** (huishoudelijk werk + landbouw mocht nog wel) en werd niet altijd goed nageleefd. Maar het was de **eerste sociale wet in NL** — startpunt van arbeidsrecht." },
          ],
          woorden: [
            { woord: "Kinderwetje van Van Houten", uitleg: "NL-wet uit 1874 die kinderarbeid (<12 jaar) in fabrieken verbood." },
            { woord: "Samuel van Houten", uitleg: "Liberale NL-politicus die de wet schreef." },
          ],
          theorie: "Cito-feit sociale wetgeving NL:\n• **1874** Kinderwetje Van Houten (geen fabrieksarbeid <12).\n• **1900** Leerplichtwet (kinderen 6-12 naar school).\n• **1919** 8-urige werkdag.\n• **1957** AOW (pensioen).\nElk een mijlpaal naar moderne verzorgingsstaat.",
          voorbeelden: [
            { type: "stap", tekst: "Voor 1874: een 8-jarig meisje kon 12 uur per dag in textielfabriek werken voor een paar centen." },
            { type: "stap", tekst: "1900 Leerplicht maakte 1874 wet pas écht effectief — kinderen MOESTEN naar school = konden niet meer werken." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Kinderwetje 1874 = eerste sociale wet NL. Onthoud naam Van Houten + jaartal + verbod <12 jaar." }],
          niveaus: {
            basis: "1874 (kinderwetje Van Houten). = A.",
            simpeler: "Het Kinderwetje uit 1874 was de eerste NL-wet die kinderen jonger dan 12 verbood in fabrieken te werken. = A.",
            nogSimpeler: "1874 = A.",
          },
        },
      },
      {
        q: "**Leerplichtwet** in NL?",
        options: ["1900", "1800", "1950", "Nooit"],
        answer: 0,
        wrongHints: [null, "Te vroeg.", "Te laat.", "Wel."],
      },
      {
        q: "Wie schreef '**Het Kapitaal**'?",
        options: ["Karl Marx", "James Watt", "Napoleon", "Edison"],
        answer: 0,
        wrongHints: [null, "Verkeerd vakgebied.", "Verkeerd vakgebied.", "Verkeerd vakgebied."],
      },
      {
        q: "Wanneer **vrouwenkiesrecht** in NL (actief)?",
        options: ["1919", "1900", "1800", "Nooit"],
        answer: 0,
        wrongHints: [null, "Te vroeg.", "Eerder.", "Wel."],
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
        wrongHints: [null, "Wel.", "Geen reden.", "Wel."],
      },
      {
        q: "Welke industrie in **Twente**?",
        options: ["Textiel", "Steenkool", "Scheepsbouw", "Auto"],
        answer: 0,
        wrongHints: [null, "Limburg.", "Kust.", "Niet hoofd."],
      },
      {
        q: "**Philips** start in?",
        options: ["1891 (Eindhoven)", "1700", "2000", "1500"],
        answer: 0,
        wrongHints: [null, "Veel later.", "Te recent.", "Veel later."],
      },
      {
        q: "**Laatste mijn Limburg** sloot?",
        options: ["1974", "2020", "1900", "Nooit"],
        answer: 0,
        wrongHints: [null, "Veel eerder.", "Veel later.", "Wel."],
      },
    ],
  },
  {
    title: "Eind-toets — industriële revolutie mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Industriële Revolutie** ging vooral over?", options: ["Machines + fabrieken", "Computers", "Schepen", "Oorlog"], answer: 0, wrongHints: [null, "Veel later.", "Niet primair.", "Niet."] },
      { q: "Stoommachine **uitgevonden** door?", options: ["James Watt", "Edison", "Marx", "Ford"], answer: 0, wrongHints: [null, "Gloeilamp.", "Filosoof.", "Auto."] },
      { q: "**Kinderarbeid** verboden in NL onder?", options: ["12 jaar (vanaf 1874)", "Geen wet", "16 jaar", "8 jaar"], answer: 0, wrongHints: [null, "Wel.", "Iets later.", "Niet specifiek."] },
      { q: "**Tijdvak** waarin dit valt?", options: ["8: Burgers + stoommachines", "Romeinen", "Renaissance", "Goud"], answer: 0, wrongHints: [null, "Te vroeg.", "Te vroeg.", "Iets eerder."] },
      { q: "Wat is **bourgeoisie**?", options: ["Rijke burgers", "Boeren", "Adel", "Arbeiders"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Proletariaat."] },
      { q: "**Philips** start in?", options: ["1891 Eindhoven", "1700", "2000", "Frankrijk"], answer: 0, wrongHints: [null, "Te vroeg.", "Te laat.", "Niet."] },
      { q: "**Industriële Revolutie** begon in welk land?", options: ["Engeland","NL","Frankrijk","Duitsland"], answer: 0, wrongHints: [null, "Veel later.", "Later.", "Later."] },
      { q: "Wat is **urbanisatie**?", options: ["Mensen verhuizen platteland → stad","Andersom","Niet relevant","Reclame"], answer: 0, wrongHints: [null, "Tegengestelde.", "Wel.", "Niet."] },
      { q: "Wat doet een **spoorweg**?", options: ["Treinen + goederen verplaatsen","Wegen onderhouden","Niet relevant","Reclame"], answer: 0, wrongHints: [null, "Niet primair.", "Wel.", "Niet."] },
      { q: "Eerste NL-spoorlijn was?", options: ["Amsterdam-Haarlem (1839)","Den Haag-Rotterdam","Niet bekend","2000"], answer: 0, wrongHints: [null, "Andere route.", "Wel bekend.", "Veel later."] },
      { q: "Wat zijn **vakbonden**?", options: ["Organisaties voor werknemers-rechten","Werkgevers","Niet relevant","Reclame"], answer: 0, wrongHints: [null, "Andere kant.", "Wel.", "Niet."] },
      { q: "**Twentse textiel** was vroeg NL-industrie in?", options: ["Enschede / Almelo","Amsterdam","Rotterdam","Niet bekend"], answer: 0, wrongHints: [null, "Niet primair.", "Niet.", "Wel."] },
      { q: "Welke energiebron werd dominant in Industriële Revolutie?", options: ["Steenkool","Wind","Zon","Niet relevant"], answer: 0, wrongHints: [null, "Eerder.", "Later.", "Wel."] },
      { q: "Wat is **kolonisatie** in deze tijd?", options: ["Andere landen onder controle nemen voor grondstoffen","Vrede","Niet relevant","Reclame"], answer: 0, wrongHints: [null, "Tegengestelde.", "Wel.", "Niet."] },
      { q: "**Karl Marx** schreef over?", options: ["Arbeidersbeweging / kapitalisme","Astronomie","Sport","Niet relevant"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Wel."] },
      { q: "Welk transport-uitvinding kwam in Industriële Revolutie?", options: ["Stoomtrein + stoomschip","Auto met benzine","Vliegtuig","Internet"], answer: 0, wrongHints: [null, "Later.", "Veel later.", "Veel later."] },
      { q: "Wat zijn **slechte gevolgen** Industriële Revolutie?", options: ["Vervuiling + lange werkdagen","Niet bestaand","Te veel vrije tijd","Niet relevant"], answer: 0, wrongHints: [null, "Wel.", "Tegengestelde.", "Niet."] },
      { q: "Wat zijn **goede gevolgen**?", options: ["Betere voeding, kleding goedkoper, vooruitgang","Niets","Te veel oorlog","Niet relevant"], answer: 0, wrongHints: [null, "Wel goede.", "Niet hoofdgevolg.", "Wel."] },
      { q: "Wanneer kwam **NL-industrialisering**?", options: ["~1850-1900","1500","2000","Voor jaar 1"], answer: 0, wrongHints: [null, "Te vroeg.", "Te laat.", "Onmogelijk."] },
      { q: "Wat is **massa-productie**?", options: ["Veel producten snel maken met machines","1 product","Niet relevant","Reclame"], answer: 0, wrongHints: [null, "Tegengestelde.", "Wel.", "Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const industrieleRevolutiePo = {
  id: "industriele-revolutie-po",
  title: "Industriële Revolutie (groep 6-8 + klas 1-2)",
  emoji: "⚙️",
  level: "groep6-8",
  subject: "geschiedenis",
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
