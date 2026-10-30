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
      "**Industriële Revolutie** *(rond 1750-1900)* = grote omwenteling in hoe mensen werken en leven.\n\n**Vóór (1700)** — agrarisch + ambachtelijk:\n• De meeste mensen waren **boer** of werkten in eigen **werkplaats**.\n• Goederen werden **met de hand** gemaakt door **ambachtslieden**.\n• **Familie produceert thuis**: stof weven, schoenen maken.\n• **Reizen** ging te voet of met paard-en-wagen — Amsterdam-Parijs: 2 weken.\n• Zon + seizoen bepaalden de werktijden — gewone werkdag ~10 uur in zomer, kort in winter.\n• Veel mensen kenden alleen hun eigen dorp.\n\n**Waarom kwam de verandering?**\n\n1. **Bevolkingsgroei** + **honger**: meer mensen voeden = meer voedsel + spullen nodig.\n2. **Uitvindingen** in landbouw: ploegen verbeterd, drainage → grotere oogsten.\n3. **Geld + handel**: rijke kooplieden hadden kapitaal om uitvindingen te bouwen.\n4. **Steenkool + ijzer** beschikbaar in **Engeland** *(geboorteplaats Industriële Revolutie)*.\n5. **Wetenschap** ontwikkelde zich: thermodynamica, mechanica.\n\n**Begin**: rond **1760-1780** in **Engeland**. Daarna verspreid naar West-Europa + VS. NL volgde later (~1870).\n\n**Tijdvakken** *(canon NL)*:\n• Industriële Revolutie zit in **Tijdvak 8: Tijd van burgers en stoommachines** (1800-1900).\n• Onderdeel van **canonvenster** in basisschool-curriculum.",
    checks: [
      {
        q: "In welk **land** begon de Industriële Revolutie?",
        options: ["Engeland", "Nederland", "Frankrijk", "Duitsland"],
        answer: 0,
        wrongHints: [null, "Nederland volgde pas later — waar stonden de eerste stoomfabrieken en kolenmijnen?", "Frankrijk had rond die tijd een revolutie van een héél ander soort — welk land had kolen én uitvinders?", "Duitsland werd pas laat één land — waar begon het met stoom en textielfabrieken?"],
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
          theorie: "Toets-feit: Engeland 'won' omdat het steenkool, ijzer EN kapitaal had. Plus geen oorlog op eigen land (eiland). Andere landen volgden 50-100 jaar later.",
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
        q: "Hoe werkten de meeste mensen **vóór** de Industriële Revolutie?",
        options: ["Als boer of als ambachtsman thuis", "In een grote fabriek", "Als zeeman op een schip", "Op een kantoor in de stad"],
        answer: 0,
        wrongHints: [null, "Fabrieken kwamen pas mét de Industriële Revolutie.", "Dat deden sommige mensen, maar de meesten werkten ergens anders.", "Kantoorbanen kwamen pas veel later."],
      },
      {
        q: "In welk **tijdvak** valt de Industriële Revolutie?",
        options: ["Tijd van burgers en stoommachines", "Tijd van pruiken en revoluties", "Tijd van regenten en vorsten", "Tijd van wereldoorlogen"],
        answer: 0,
        wrongHints: [null, "Dat is de 18e eeuw, net vóór de grote fabrieken.", "Dat is de 17e eeuw, de Gouden Eeuw.", "Dat is de 20e eeuw."],
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
          theorie: "Toets-feit: de 10 tijdvakken komen op school vaak terug bij geschiedenis. Tijdvak-naam onthouden + grof tijdperk. Industriële Revolutie zit in tijdvak 8.",
          voorbeelden: [
            { type: "stap", tekst: "Tijdvak 7 (pruiken + revoluties) = 1700s = Franse Revolutie + Verlichting." },
            { type: "stap", tekst: "Tijdvak 9 (wereldoorlogen) = 1900-1950 = WO1 + WO2." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Volgorde tijdvakken op rijtje leren. Tijdvak 8 = 1800-1900 = burgers + stoom = Industriële Revolutie." }],
          niveaus: {
            basis: "Tijdvak 8: Tijd van burgers en stoommachines.",
            simpeler: "Industriële Revolutie zit in NL-tijdvak 8 (1800-1900).",
            nogSimpeler: "Tijdvak 8",
          },
        },
      },
      {
        q: "Wat hielp Engeland om als **eerste** fabrieken te bouwen?",
        options: ["Steenkool, ijzer en geld", "Goed weer en veel zon", "Veel windmolens en water", "Een nieuw geloof in het land"],
        answer: 0,
        wrongHints: [null, "Het weer was niet de oorzaak — wat had een stoommachine nodig?", "Molens waren er al eeuwen — wat ging er in de ketel van een stoommachine?", "Geloof was niet de reden."],
      },
    ],
  },
  {
    title: "Stoommachine + uitvindingen",
    explanation:
      "De **stoommachine** = motor van de Industriële Revolutie.\n\n**1. Stoommachine** *(James Watt, 1769)*:\n• Eerdere versie was van Thomas Newcomen (1712) — niet efficiënt.\n• Watt verbeterde → kon **fabrieken aandrijven** + **treinen** rijden.\n• Werkt op **stoom** *(verhit water)* die zuiger op-en-neer drukt.\n• Steenkool als brandstof.\n\n**Hoe?**\n1. Water in ketel verhitten → wordt stoom.\n2. Stoom drijft zuiger in cilinder.\n3. Zuiger zet wiel of pomp in beweging.\n4. → Krachtige machine zonder paard of waterrad.\n\n**Belang**: voor het eerst krachtbron die **niet afhankelijk** was van rivier of wind. Fabriek kan **overal** staan + **24 uur per dag**.\n\n**2. Spinmachine + weefgetouw** *(spinning jenny 1764, water frame 1769)*:\n• Vroeger weefde 1 vrouw per dag ~1 meter stof.\n• Met spinmachine: tientallen draden tegelijk.\n• → Goedkope stoffen.\n\n**3. Trein** *(Stephenson, 1825)*:\n• 'Locomotion No. 1' — eerste passagierstrein in Engeland.\n• NL eerste spoorlijn: Amsterdam-Haarlem **1839**.\n• Reisafstanden krimpen: Amsterdam-Parijs van 2 weken → 1 dag.\n\n**4. Stoomboot** *(Fulton, 1807)*:\n• Vroeger zeilschip afhankelijk van wind.\n• Stoomboot: vast schema, sneller, doorvaart tegen wind in.\n\n**5. Telegraaf** *(Morse, 1844)*:\n• Berichten over draad met elektriciteit.\n• 'Morse-code' — punten en strepen.\n• Bericht New York → Londen in **minuten**, vroeger weken.\n\n**6. Telefoon** *(Bell, 1876)*:\n• Stem over draad.\n• Eerste NL-telefooncentrale: Amsterdam 1881.\n\n**7. Gloeilamp** *(Edison, 1879)*:\n• Eerder gaslamp + olielamp.\n• Elektrisch licht in huizen.\n\n**8. Auto** *(Benz, 1886)*:\n• Eerste benzine-auto.\n• Massa-productie kwam met **Ford** *(1908, T-Ford)*.\n\n**Patroon**: elke uitvinding maakt iets **goedkoper + sneller + grootschaliger**. Dit veranderde de hele samenleving.",
    checks: [
      {
        q: "Wie **verbeterde** de stoommachine?",
        options: ["James Watt", "Thomas Edison", "Graham Bell", "Henry Ford"],
        answer: 0,
        wrongHints: [null, "Edison leefde later en werkte met elektriciteit.", "Bell werkte aan geluid over een draad.", "Ford maakte later auto's in een grote fabriek."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een stoommachine?", tekst: "Een motor die water KOOKT, en de stoom die ontstaat duwt een zuiger heen en weer. Daarmee kun je machines, treinen en boten aandrijven." },
            { titel: "James Watt (1769) verbeterde een ouder ontwerp", tekst: "De allereerste stoommachine was van Thomas Newcomen (1712), maar die werkte slecht. James Watt maakte hem **veel efficiënter** in 1769 — daarom geldt hij als 'de uitvinder' van de werkende stoommachine." },
            { titel: "Niet verwarren met andere uitvinders", tekst: "Edison = gloeilamp (1879). Bell = telefoon (1876). Ford = lopende band voor auto's (1913). Allemaal LATER dan Watt." },
          ],
          woorden: [
            { woord: "stoommachine", uitleg: "Motor op stoom van gekookt water." },
            { woord: "James Watt", uitleg: "Schotse uitvinder, verbeterde stoommachine in 1769." },
          ],
          theorie: "Toets-tip uitvinders onthouden: Watt = STOOM (1769). Stephenson = TREIN (1825). Bell = TELEFOON (1876). Edison = GLOEILAMP (1879). Ford = LOPENDE BAND (1913). Op tijdvolgorde.",
          voorbeelden: [
            { type: "stap", tekst: "De eenheid 'watt' (W) voor elektrisch vermogen is naar James Watt vernoemd." },
            { type: "stap", tekst: "De stoommachine kon eerst alleen mijnen leegpompen → later treinen + fabrieken." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Watt klinkt als 'wat?' — wat is stoom? — antwoord = Watt." }],
          niveaus: {
            basis: "James Watt verbeterde de stoommachine in 1769.",
            simpeler: "James Watt maakte de stoommachine veel beter. Edison maakte de gloeilamp en Bell de telefoon.",
            nogSimpeler: "Watt hoort bij de stoommachine.",
          },
        },
      },
      {
        q: "Wat was een groot **voordeel** van de stoommachine?",
        options: ["Hij had geen rivier of wind nodig", "Hij had geen brandstof nodig", "Hij had geen water nodig", "Hij had geen mensen nodig"],
        answer: 0,
        wrongHints: [null, "Wat werd er onder de ketel verbrand?", "Waar komt stoom vandaan?", "Wie schepte de kolen in het vuur?"],
      },
      {
        q: "Wat was de eerste **spoorlijn** in Nederland?",
        options: ["Amsterdam-Haarlem", "Utrecht-Rotterdam", "Maastricht-Amsterdam", "Den Haag-Schiphol"],
        answer: 0,
        wrongHints: [null, "Andere route — de eerste lijn was maar kort.", "Dat zou meteen een enorme afstand zijn — de eerste lijn was juist kort.", "Schiphol als vliegveld bestond in 1839 nog lang niet!"],
      },
      {
        q: "Wie maakte de eerste goed werkende **gloeilamp**?",
        options: ["Thomas Edison", "James Watt", "Graham Bell", "Samuel Morse"],
        answer: 0,
        wrongHints: [null, "Watt werkte aan machines, niet aan licht.", "Bell werkte aan geluid over een draad.", "Morse bedacht een code met puntjes en streepjes."],
      },
    ],
  },
  {
    title: "Fabrieken + samenleving",
    explanation:
      "**Fabrieken** ontstonden — grote gebouwen waar veel machines + arbeiders samen werkten.\n\n**Verschil**:\n• **Vóór**: ambachtsman thuis, eigen tempo.\n• **Na**: fabriek, **machines**, vast tempo, **uurloon**, baas die toezicht houdt.\n\n**Werkomstandigheden** *(1800-1850)*:\n• Werkdag: **12-16 uur**, 6 dagen per week.\n• Gevaarlijk *(machines zonder beschermingen, ongelukken)*.\n• Stoffig + bedompt.\n• **Geen vakantiedagen**, geen ziekteverzekering, geen pensioen.\n• Laag loon *(amper genoeg om te eten)*.\n\n**Stadsgroei** *(verstedelijking)*:\n• Mensen trokken massaal naar **fabrieksteden** voor werk.\n• Londen: van 1 miljoen (1800) → 6,5 miljoen (1900).\n• In NL: Tilburg, Twente, Limburg groeiden mee.\n• **Krottenwijken**: arbeiders woonden in vieze, kleine huisjes.\n• **Hygiëne** slecht: cholera-epidemieën *(NL: 1832, 1849, 1866)*.\n\n**Sociale klassen**:\n• **Burgerij (bourgeoisie)**: fabriekseigenaren, kooplui, dokters. Rijk geworden.\n• **Arbeidersklasse (proletariaat)**: fabriekswerkers. Arm. Geen rechten.\n• Voor de Revolutie was er vooral: adel + boeren. Burgerij groeide enorm.\n\n**Voordelen** Industriële Revolutie:\n• Goedkopere goederen *(kleding, gereedschap, voedsel)*.\n• Snel reizen + communiceren.\n• Wetenschap + gezondheidszorg vooruit.\n• Op lange termijn: hogere levensstandaard.\n\n**Nadelen** *(vooral 1800-1850)*:\n• Slechte werkomstandigheden.\n• Kinderarbeid.\n• Vervuiling van lucht + rivieren.\n• Steden ongezond + onveilig.\n• Mensen vervreemd van eigen werk *(maakten 1 onderdeel, nooit hele product)*.\n\n**Toets-feitje**:\nDe gemiddelde levensverwachting in een Engelse fabrieksstad in 1850 was **30 jaar**. Op het platteland was het 50 jaar. Vervuiling + ziekte maakten stad ongezond.",
    checks: [
      {
        q: "Hoe lang duurde een werkdag in een **vroege fabriek**?",
        options: ["12 tot 16 uur", "6 tot 8 uur", "8 tot 10 uur", "18 tot 20 uur"],
        answer: 0,
        wrongHints: [null, "Zo werken veel mensen nu — hoe zwaar was het toen?", "Kijk in de les: hoeveel uur stonden arbeiders aan de machine?", "Dan bleef er bijna geen tijd over om te slapen — kijk in de les."],
        uitlegPad: {
          stappen: [
            { titel: "Vroege fabriek: zeer lange dagen", tekst: "In de vroege Industriële Revolutie (1800-1850) werkten arbeiders **12 tot 16 uur per dag**, 6 dagen per week. Slechts 1 dag rust (zondag)." },
            { titel: "Geen rechten", tekst: "Geen vakantie, geen ziekteverzekering, geen pensioen. Bij ongeluk werd je gewoon ontslagen. Loon was laag — amper genoeg om te eten." },
            { titel: "Pas eind 19e eeuw: regels", tekst: "Vanaf ongeveer 1870 kwamen er wetten: maximale werkdag, verbod op kinderarbeid, etc. Het **Kinderwetje van Van Houten** (NL, 1874) verbood arbeid voor kinderen onder 12." },
          ],
          woorden: [
            { woord: "arbeider", uitleg: "Iemand die in fabriek werkt voor loon." },
            { woord: "Kinderwetje 1874", uitleg: "NL-wet die kinderarbeid (<12 jaar) verbood — eerste stap arbeidsrecht." },
          ],
          theorie: "Toets-feit: de huidige '8-urige werkdag' is bevochten door arbeiders + vakbonden. In 1919 werd dit de wet. In de 19e eeuw was 12-16 uur standaard.",
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
        options: ["Rijke burgers en fabrieksbazen", "Boeren op het platteland", "De adel met grote kastelen", "Arbeiders in de fabrieken"],
        answer: 0,
        wrongHints: [null, "Boeren woonden op het platteland — dit is een groep in de stad.", "De adel is een oude groep van edelen — dit is een nieuwe groep.", "Arbeiders hadden juist weinig geld — wie was de baas?"],
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
          theorie: "Toets-feit: bourgeoisie + proletariaat = Industriële Revolutie's twee nieuwe klassen. Niet adel (oud), niet boeren (oud), niet kerk. Nieuwe groep mensen door industrie.",
          voorbeelden: [
            { type: "stap", tekst: "Bourgeois-naam: 'burger' (van stad). De rijke burgerij wilde meer macht dan de adel — dat speelde mee bij de Franse Revolutie (1789)." },
            { type: "stap", tekst: "Karl Marx schreef in 'Communistisch Manifest' (1848): bourgeoisie buit proletariaat uit → revolutie nodig." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bourgeoisie = rijke. Proletariaat = arme. Allebei woorden uit Frans/Latijn — de toets kent ze allebei." }],
          niveaus: {
            basis: "De bourgeoisie is de rijke burgerij: fabriekseigenaren en kooplieden.",
            simpeler: "Door de Industriële Revolutie werden deze rijke burgers steeds rijker en machtiger.",
            nogSimpeler: "Rijke burgers",
          },
        },
      },
      {
        q: "Wat is **verstedelijking**?",
        options: ["Mensen verhuizen naar steden", "Mensen verhuizen naar het platteland", "Boeren bouwen meer boerderijen", "Steden worden groener gemaakt"],
        answer: 0,
        wrongHints: [null, "Let op de richting: waar gingen de mensen heen?", "Welk woord hoor je in verstedelijking?", "Het gaat om waar mensen gaan wonen, niet om bomen."],
      },
      {
        q: "Wat is het **proletariaat**?",
        options: ["Arbeiders in de fabrieken", "Rijke fabrieksbazen", "De adel met kastelen", "Boeren op het platteland"],
        answer: 0,
        wrongHints: [null, "Fabrieksbazen hadden veel geld — dit woord gaat over een andere groep.", "De adel woonde in kastelen en had veel land.", "Boeren werkten op het land, niet in de stad."],
      },
    ],
  },
  {
    title: "Kinderarbeid + sociale strijd",
    explanation:
      "**Kinderarbeid** was normaal — kinderen werkten al vanaf **6 jaar**.\n\n**Waarom**:\n• Arme gezinnen hadden geld nodig.\n• Kinderen waren **goedkoop** *(half loon van volwassene)*.\n• Klein → konden in nauwe ruimtes onder machines.\n• Geen schoolplicht.\n\n**Werk van kinderen**:\n• Spinnerij + weverij: garens repareren.\n• Mijn: kolenkar duwen, deur open-dicht.\n• Schoorsteenveger *(kleine jongens werden in schoorsteen geduwd)*.\n• Fabriek: machines schoonmaken *(soms terwijl ze draaien)*.\n\n**Gevolgen**:\n• Veel **ongelukken** + dood.\n• Geen onderwijs → blijven arm.\n• Lichamelijke beschadiging *(misvormde ruggen, longziekte)*.\n\n**Sociale beweging** ontstond:\n\n**1. Kinderwetje Van Houten (NL, 1874)**:\n• Verbod kinderen jonger dan **12 jaar** in fabrieken.\n• Eerste sociale wet in NL.\n• Werd nog niet altijd goed nageleefd.\n\n**2. Leerplichtwet (NL, 1900)**:\n• Alle kinderen van 6 tot 12 **moeten naar school**.\n• Einde van massale kinderarbeid in NL.\n\n**3. Vakbonden** *(arbeidersverenigingen)*:\n• Arbeiders **samen** voor betere voorwaarden.\n• NL eerste vakbond: **ANWV** (1871).\n• Stakingen = drukmiddel.\n\n**4. Socialisme + communisme**:\n• **Karl Marx** *(1818-1883)*: schreef 'Het Kapitaal' + 'Communistisch Manifest'.\n• Idee: arbeiders moeten productiemiddelen bezitten.\n• Inspireerde latere revoluties *(Rusland 1917)*.\n\n**5. Algemeen kiesrecht**:\n• Vóór 1800: alleen rijke mannen mochten stemmen.\n• Mannen NL: **1917** *(actief kiesrecht voor alle mannen)*.\n• Vrouwen NL: **1917** *(passief)* / **1919** *(actief)*.\n\n**6. Sociale wetten** NL:\n• **1901**: Ongevallenwet *(verzekering bij ongeluk)*.\n• **1913**: Invaliditeitswet.\n• **1919**: 8-urige werkdag.\n• **1947**: Noodwet ouderdomsvoorzieningen *(eerste AOW)*.\n• **1957**: Algemene Ouderdomswet *(AOW definitief)*.\n\n**Toets-tip**: het verband tussen Industriële Revolutie en sociale strijd is favoriete vraag. **Oorzaak-gevolg**: slechte omstandigheden → vakbond + wetten → betere arbeidsvoorwaarden.",
    checks: [
      {
        q: "In welk jaar kwam het **Kinderwetje** van Van Houten?",
        options: ["1874", "1848", "1795", "1920"],
        answer: 0,
        wrongHints: [null, "In 1848 kwam er een nieuwe Grondwet — dat is iets anders.", "In 1795 kwamen de Fransen — fabrieken waren er toen bijna niet.", "Kijk in de les naar het jaartal bij Van Houten."],
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
          theorie: "Toets-feit sociale wetgeving NL:\n• **1874** Kinderwetje Van Houten (geen fabrieksarbeid <12).\n• **1900** Leerplichtwet (kinderen 6-12 naar school).\n• **1919** 8-urige werkdag.\n• **1957** AOW (pensioen).\nElk een mijlpaal naar moderne verzorgingsstaat.",
          voorbeelden: [
            { type: "stap", tekst: "Voor 1874: een 8-jarig meisje kon 12 uur per dag in textielfabriek werken voor een paar centen." },
            { type: "stap", tekst: "1900 Leerplicht maakte 1874 wet pas écht effectief — kinderen MOESTEN naar school = konden niet meer werken." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Kinderwetje 1874 = eerste sociale wet NL. Onthoud naam Van Houten + jaartal + verbod <12 jaar." }],
          niveaus: {
            basis: "1874 (kinderwetje Van Houten).",
            simpeler: "Het Kinderwetje uit 1874 was de eerste NL-wet die kinderen jonger dan 12 verbood in fabrieken te werken.",
            nogSimpeler: "1874",
          },
        },
      },
      {
        q: "In welk jaar kwam de **leerplichtwet** in Nederland?",
        options: ["1900", "1830", "1850", "1930"],
        answer: 0,
        wrongHints: [null, "Kijk in de les bij het woord leerplicht.", "Zoek in de les het jaartal bij de leerplicht.", "Kijk in de les: welk jaartal staat er bij de leerplicht?"],
      },
      {
        q: "Wie schreef '**Het Kapitaal**'?",
        options: ["Karl Marx", "James Watt", "Napoleon", "Thomas Edison"],
        answer: 0,
        wrongHints: [null, "Watt maakte de stoommachine veel beter — maar wie schreef juist óver arbeiders en kapitaal?", "Napoleon was veldheer en keizer (overleden 1821) — zoek een denker over de arbeidersklasse.", "Edison was de uitvinder van de gloeilamp — zoek een filosoof/econoom."],
      },
      {
        q: "In welk jaar mochten vrouwen in Nederland voor het eerst **stemmen**?",
        options: ["1919", "1917", "1945", "1901"],
        answer: 0,
        wrongHints: [null, "In 1917 mochten vrouwen gekozen worden — maar mochten ze toen al zelf stemmen?", "Kijk in de les: vrouwen stemden al vóór de Tweede Wereldoorlog.", "Kijk in de les bij het woord vrouwenkiesrecht."],
      },
    ],
  },
  {
    title: "Nederland en de industriële revolutie",
    explanation:
      "NL kwam **later** dan Engeland — pas vanaf **~1870**. Waarom?\n\n• **Geen steenkool** in Holland *(wel in Limburg, maar dat hoorde bij België tot 1839)*.\n• **Geen ijzer-erts**.\n• **Veel scheepvaart** + handel *(VOC)* — minder druk om te industrialiseren.\n• **Conservatieve elite**.\n\n**Wel** kwam Limburg-mijnbouw, Twente-textiel, Brabant-leder vroeger.\n\n**Belangrijke NL-industrieën** *(rond 1900)*:\n\n**1. Textiel — Twente**:\n• Spinnerijen + weverijen.\n• Bedrijven: Van Heek, Ten Cate.\n• Hele steden draaiden op textiel: Enschede, Hengelo, Almelo.\n\n**2. Steenkool — Limburg** *(vanaf 1860)*:\n• Staatsmijnen (publiek) + particuliere mijnen.\n• 12 mijnen tot 1974 *(sluiting laatste mijn)*.\n• Mijnramp 1925: ramp bij Heerlen.\n\n**3. Scheepsbouw — Rotterdam, Amsterdam**:\n• Drogedokken voor grote stoomschepen.\n• Bedrijven: Wilton-Fijenoord, Nederlandsche Dok Maatschappij.\n\n**4. Voedingsmiddelen**:\n• Margarine in Oss *(Jurgens, Van den Bergh — werd Unilever)*.\n• Bier *(Heineken vanaf 1864, Amstel)*.\n• Chocolade *(Verkade, Droste)*.\n\n**5. Glas + keramiek**:\n• Tegelfabrieken Maastricht *(Mosa, Boch)*.\n• Glas: Leerdam.\n\n**6. Elektrotechnisch — Eindhoven**:\n• **Philips** *(1891)* — gloeilampen, daarna radio's, TV's.\n• Eindhoven groeide van 5.000 → 100.000 inwoners.\n\n**7. Chemie**:\n• Akzo, DSM *(uit staatsmijnen ontwikkeld)*.\n• Royal Shell *(1907)*.\n\n**NL kenmerken**:\n• **Snelle inhaal** in 50 jaar.\n• Sterke **bedrijfsdynastieën** *(Philips, Heineken, Van Heek)*.\n• Vooral **familiaire ondernemingen**.\n• Calvinistische arbeidsethiek.\n\n**Erfgoed van Industriële Revolutie**:\n• Spoorwegen: 3.400 km in NL nu.\n• Industriestadjes (Twente, Limburg).\n• **NS** + **PostNL** voortgekomen uit toen.\n• Onderwijsstelsel met leerplicht.\n• Sociale wetten basis voor verzorgingsstaat.\n\n**Toets-feitje**:\nEindhoven werd door **Philips** van klein dorp tot 5e stad van NL. Bij sluiting Philips-fabrieken (jaren 1990) bleek de afhankelijkheid groot — daarna omgebouwd tot 'Brainport' met hi-tech bedrijven (ASML).",
    checks: [
      {
        q: "Waarom begonnen de fabrieken in Nederland **later**?",
        options: ["Weinig steenkool, veel handel", "Veel oorlog, weinig geld", "Koud weer, weinig zon", "Weinig mensen, veel land"],
        answer: 0,
        wrongHints: [null, "NL was in die tijd vrij rustig.", "Het klimaat was niet de reden.", "Er woonden genoeg mensen."],
      },
      {
        q: "Welke industrie was groot in **Twente**?",
        options: ["Textiel", "Steenkool", "Scheepsbouw", "Elektronica"],
        answer: 0,
        wrongHints: [null, "Steenkool kwam uit Zuid-Limburg.", "Schepen bouwden ze aan de kust en bij de grote rivieren.", "Elektronica hoort bij Eindhoven."],
      },
      {
        q: "In welk jaar begon **Philips**?",
        options: ["1891", "1851", "1921", "1951"],
        answer: 0,
        wrongHints: [null, "Kijk in de les naar het jaartal bij Philips in Eindhoven.", "Zoek in de les wanneer de lampenfabriek in Eindhoven begon.", "Kijk in de les: in welk jaar begon Philips met gloeilampen?"],
      },
      {
        q: "Wanneer sloot de **laatste steenkolenmijn** in Limburg?",
        options: ["1974", "1959", "1990", "1945"],
        answer: 0,
        wrongHints: [null, "In 1959 vonden we aardgas — daarna begonnen de mijnen te sluiten.", "Kijk in de les naar het jaartal bij de laatste mijn.", "Na de oorlog was steenkool juist hard nodig voor de wederopbouw."],
      },
    ],
  },
  {
    title: "Eind-toets — industriële revolutie mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Waar ging de **Industriële Revolutie** vooral over?", options: ["Machines en fabrieken", "Computers en internet", "Schepen en zeereizen", "Oorlog en soldaten"], answer: 0, wrongHints: [null, "Computers en internet kwamen pas in de 20e eeuw.", "Schepen waren er al veel eerder.", "Het ging niet om vechten."] },
      { q: "Wie **verbeterde** de stoommachine?", options: ["James Watt", "Thomas Edison", "Karl Marx", "Henry Ford"], answer: 0, wrongHints: [null, "Edison leefde later en werkte met elektriciteit.", "Karl Marx schreef boeken; hij bouwde geen machines.", "Henry Ford maakte later auto's."] },
      { q: "Onder welke leeftijd verbood het Kinderwetje **kinderarbeid** in fabrieken?", options: ["12 jaar", "10 jaar", "14 jaar", "16 jaar"], answer: 0, wrongHints: [null, "Kijk in de les welke leeftijd het Kinderwetje noemde.", "Zoek in de les de leeftijd bij het Kinderwetje.", "Kijk in de les: onder welke leeftijd mocht je niet meer in de fabriek werken?"] },
      { q: "In welk **tijdvak** valt de Industriële Revolutie?", options: ["Burgers en stoommachines", "Grieken en Romeinen", "Ontdekkers en hervormers", "Regenten en vorsten"], answer: 0, wrongHints: [null, "Dat is de oudheid, meer dan 2000 jaar geleden.", "Dat is de 16e eeuw.", "Dat is de 17e eeuw, de Gouden Eeuw."] },
      { q: "Wat is de **bourgeoisie**?", options: ["Rijke burgers", "Boeren", "Adel", "Arbeiders"], answer: 0, wrongHints: [null, "Boeren woonden op het platteland.", "De adel is een oude groep van edelen.", "Arbeiders hadden juist weinig geld."] },
      { q: "In welk jaar begon **Philips** in Eindhoven?", options: ["1891", "1851", "1921", "1951"], answer: 0, wrongHints: [null, "Kijk in de les naar het jaartal bij Philips.", "Zoek in de les wanneer de lampenfabriek begon.", "Kijk in de les: wanneer begon Philips met gloeilampen?"] },
      { q: "In welk land begon de **Industriële Revolutie**?", options: ["Engeland","Nederland","Frankrijk","Duitsland"], answer: 0, wrongHints: [null, "Kijk in de les: waar stonden de eerste stoomfabrieken?", "Frankrijk had toen een ander soort revolutie.", "Duitsland was toen nog geen één land."] },
      { q: "Wat is **urbanisatie**?", options: ["Mensen verhuizen platteland → stad","Mensen verhuizen stad → platteland","Nieuwe wegen aanleggen in het land","Boeren op het platteland helpen"], answer: 0, wrongHints: [null, "Let op de richting: waar gingen de mensen naartoe?", "Het gaat om waar mensen wonen.", "Het Latijnse 'urbs' betekent stad."] },
      { q: "Wat doet een **spoorweg**?", options: ["Treinen met mensen en goederen laten rijden","Auto's over een snelweg laten rijden","Schepen over kanalen laten varen","Stroom met draden naar huizen brengen"], answer: 0, wrongHints: [null, "Een spoorweg heeft rails, geen asfalt.", "Dat gaat over water.", "Denk aan rails: wat rijdt daarover?"] },
      { q: "Wat was de eerste **spoorlijn** in Nederland?", options: ["Amsterdam-Haarlem","Den Haag-Rotterdam","Utrecht-Arnhem","Groningen-Zwolle"], answer: 0, wrongHints: [null, "Kijk in de les: tussen welke steden reed de Arend in 1839?", "Zoek in de les waar de eerste trein reed.", "Die lijn in het noorden kwam pas veel later."] },
      { q: "Wat zijn **vakbonden**?", options: ["Groepen die opkomen voor arbeiders","Groepen van rijke fabrieksbazen","Scholen waar je een vak leert","Banken die geld lenen aan fabrieken"], answer: 0, wrongHints: [null, "Dat is juist de andere kant van de fabriek.", "Een vakschool is iets anders — een bond is een groep die samenwerkt.", "Een vakbond leent geen geld uit."] },
      { q: "In welke steden zat de **Twentse textielindustrie**?", options: ["Enschede en Almelo","Tilburg en Helmond","Amsterdam en Haarlem","Maastricht en Heerlen"], answer: 0, wrongHints: [null, "Daar zat ook textiel, maar dat is in Brabant.", "Die steden liggen in Noord-Holland.", "Dat is Limburg: daar ging het vooral om mijnen."] },
      { q: "Welke energiebron werd het belangrijkst in de Industriële Revolutie?", options: ["Steenkool","Wind","Zon","Aardgas"], answer: 0, wrongHints: [null, "Windmolens waren er al eeuwen — wat werd er gestookt in de stoommachine?", "Zonne-energie is iets van nu.", "Aardgas vonden we pas in de 20e eeuw."] },
      { q: "Wat is **kolonisatie** in deze tijd?", options: ["Andere landen veroveren voor grondstoffen","Vrede sluiten met andere landen","Handel drijven met gelijke partners","Nieuwe steden bouwen in eigen land"], answer: 0, wrongHints: [null, "Ging het er vreedzaam aan toe?", "Was het wel gelijk?", "Het gaat om andere landen."] },
      { q: "**Karl Marx** schreef over?", options: ["Arbeiders en kapitalisme","Sterrenkunde","Evolutie van dieren","Ontdekkingsreizen"], answer: 0, wrongHints: [null, "Dat deed bijvoorbeeld Galileï.", "Dat was het onderwerp van Charles Darwin.", "Die waren al eeuwen eerder. Marx keek naar de fabrieken van zijn eigen tijd."] },
      { q: "Welke transportuitvinding kwam in de Industriële Revolutie?", options: ["Stoomtrein en stoomschip","Paard en wagen","Zeilschip en trekschuit","Raket en straalvliegtuig"], answer: 0, wrongHints: [null, "Paard en wagen waren er al eeuwen.", "Die waren er al vóór de Industriële Revolutie.", "Die kwamen pas in de 20e eeuw."] },
      { q: "Wat waren **slechte gevolgen** van de Industriële Revolutie?", options: ["Vervuiling en lange werkdagen","Minder en kleinere steden","Meer vrije tijd voor arbeiders","Duurdere kleding en eten"], answer: 0, wrongHints: [null, "Steden groeiden juist.", "Hadden arbeiders toen veel vrije tijd?", "Werd kleding duurder als machines er heel veel van maakten?"] },
      { q: "Wat waren **goede gevolgen** van de Industriële Revolutie?", options: ["Goedkopere kleding en betere voeding","Schonere lucht in de grote steden","Minder drukte in de steden","Meteen kortere werkdagen voor iedereen"], answer: 0, wrongHints: [null, "Fabrieken gaven juist veel rook.", "Steden groeiden juist hard.", "Werkdagen waren eerst juist heel lang."] },
      { q: "Wanneer kwamen in Nederland de **fabrieken** echt op gang?", options: ["1850-1900","1500-1550","1950-2000","1650-1700"], answer: 0, wrongHints: [null, "Dat is het eind van de middeleeuwen.", "Dat is de tijd van televisie en computer.", "Dat is de Gouden Eeuw."] },
      { q: "Wat is **massa-productie**?", options: ["Veel producten snel maken met machines","Eén product heel precies maken","Producten met de hand maken","Kapotte producten weer repareren"], answer: 0, wrongHints: [null, "Wat betekent het woord 'massa'?", "Wat doen machines?", "Het gaat om maken."] },
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
