// 🌍 Park-leermomenten — "heel de wereld is een leerschool" (Mark 12 jul 2026).
// Alles in het park moet benoembaar zijn: tik op een ding → je ziet wat het IS,
// hoe het WERKT en één klik naar het leerpad erover. Zelfde gedachte als de
// uitvinders-kabouters (uitvindersData.js) en de muntjes-leermomenten
// (economieLeermomenten.js), maar dan voor de gewone park-objecten zelf.
//
// F1 (12 jul): de trein is een STOOMTREIN geworden (rookpluim in ParkProps) en
// is aantikbaar → dit leermoment. Volgende objecten (F2, alleen met BESTAANDE
// leerpaden — harde regel: leerpadId moet in pathManifest bestaan):
//   boom → hout/fotosynthese · achtbaan → hellingsgraad (verhoudingen-po) +
//   ijzer/staal · reuzenrad → cirkel/omtrek · ballonnen → lucht/gassen.
//
// Vorm-afspraak: zelfde velden als een uitvinders-tafereel, zodat het bestaande
// tafereel-paneel in ZookwartierGame.jsx het 1-op-1 kan tonen:
//   { id, emoji, titel, praatje (≤3 zinnen kind-taal), weetje, leerpadId, leerLabel }
// Geen dev-jargon in de teksten (regel: woorden die een kind van 10 kent).

export const PARK_LEERMOMENTEN = {
  stoomtrein: {
    id: "stoomtrein",
    emoji: "🚂",
    titel: "De stoomtrein",
    praatje:
      "Dit is een échte stoomtrein! In de ketel brandt een vuur dat water zó heet maakt dat het stoom wordt. Die stoom duwt met veel kracht een zuiger heen en weer — en die laat de wielen draaien. Deze slimme machine veranderde zo'n 200 jaar geleden de hele wereld: fabrieken, treinen, stoomboten. Dat noemen we de industriële revolutie.",
    weetje:
      "De allereerste trein van Nederland reed in 1839 van Amsterdam naar Haarlem. Sommige mensen waren bang dat je lichaam kapot zou gaan als je sneller ging dan een galopperend paard. Viel gelukkig mee!",
    leerpadId: "industriele-revolutie-po",
    leerLabel: "De industriële revolutie",
    souvenirNaam: "een mini-stoomloc 🚂",
  },
  boom: {
    id: "boom",
    emoji: "🌳",
    titel: "De boom",
    praatje:
      "Zie je deze boom? Hij maakt zijn eigen eten! Met zonlicht, water en lucht maakt hij suiker in zijn bladeren — dat heet fotosynthese. En van de stam maken wij planken, papier en zelfs de bankjes hier in het park.",
    weetje:
      "Een grote boom maakt per dag genoeg zuurstof voor ongeveer twee mensen. Zonder bomen konden wij niet ademen!",
    leerpadId: "fotosynthese-biologie",
    leerLabel: "Fotosynthese — hoe planten eten maken",
    souvenirNaam: "een gouden boompje 🌳",
  },
  achtbaan: {
    id: "achtbaan",
    emoji: "🎢",
    titel: "De achtbaan",
    praatje:
      "De kettinglift trekt het karretje langzaam omhoog — en daarna doet de zwaartekracht al het werk! Hoe hóger de top, hoe harder je beneden gaat: al die hoogte wordt vaart. En de baan zelf is van staal: dat maak je door ijzer uit de grond te smelten in een gloeiend hete oven.",
    weetje:
      "IJzer zit als erts in stenen diep in de grond. In een hoogoven van bijna 2000 graden smelt het eruit — zo ontstaat staal, sterk genoeg voor een achtbaan vol lussen.",
    leerpadId: "krachten-natuurkunde",
    leerLabel: "Krachten en zwaartekracht",
  },
  reuzenrad: {
    id: "reuzenrad",
    emoji: "🎡",
    titel: "Het reuzenrad",
    praatje:
      "Een reuzenrad is één grote cirkel. Hoe ver reis jij in één rondje? Precies de omtrek: de afstand helemaal rondom de cirkel. Hoe groter het rad, hoe langer jouw rondje — en dat kun je uitrekenen!",
    weetje:
      "De omtrek van élke cirkel is altijd iets meer dan 3 keer de doorsnede (ongeveer 3,14 keer — dat getal heet pi). Dat geldt voor een fietswiel én voor dit reuzenrad.",
    leerpadId: "oppervlakte-omtrek-po",
    leerLabel: "Omtrek en oppervlakte",
    souvenirNaam: "een mini-reuzenrad 🎡",
  },
  station: {
    id: "station",
    emoji: "🕐",
    titel: "Het station",
    praatje:
      "Op een écht station hangt een bord met vertrektijden: de trein gaat bijvoorbeeld om :05, :20 en :35. Ben je om tien over, dan moet je dus 10 minuten wachten op die van :20. Zo'n rooster lezen is een superkracht — op school, bij de bushalte én op de Doorstroomtoets!",
    weetje:
      "Vroeger had elke stad in Nederland zijn éígen tijd (in Amsterdam was het een paar minuten later dan in Enschede). Pas door de trein kregen we één klok voor het hele land — anders klopte geen enkele dienstregeling.",
    leerpadId: "dienstregeling-roosters-po",
    leerLabel: "Roosters en dienstregelingen lezen",
    souvenirNaam: "een stationsklok 🕐",
  },
  zweefmolen: {
    id: "zweefmolen",
    emoji: "🪁",
    titel: "De zweefmolen",
    praatje:
      "Kijk eens goed: hoe sneller de zweefmolen draait, hoe verder de stoeltjes naar búíten zwieren. Je lichaam wil eigenlijk rechtdoor, maar de kettingen trekken je steeds de bocht in — dat trekken voel je als 'naar buiten geduwd worden'. Dezelfde kracht voel je in de auto als die een scherpe bocht neemt!",
    weetje:
      "Zwaai maar eens een emmertje water rond aan je arm: draai je snel genoeg, dan valt er niets uit — zelfs ondersteboven niet. Precies dezelfde truc als de zweefmolen.",
    leerpadId: "krachten-natuurkunde",
    leerLabel: "Krachten en bewegen",
  },
  fontein: {
    id: "fontein",
    emoji: "⛲",
    titel: "De fontein",
    praatje:
      "Het water van deze fontein spuit omhoog, valt terug en wordt opnieuw rondgepompt — het is dus steeds hetzelfde water. Buiten het park doet de natuur precies hetzelfde, maar dan reuze-groot: de zon laat zeewater verdampen, er ontstaan wolken, en de regen brengt het water weer terug. Dat rondje heet de waterkringloop.",
    weetje:
      "Het water dat jij vandaag drinkt is óók al miljoenen jaren onderweg in die kringloop — misschien heeft een dino er ooit in gezwommen!",
    leerpadId: "waterkringloop-po",
    leerLabel: "De waterkringloop",
    souvenirNaam: "een wens-fonteintje ⛲",
  },
  piramide: {
    id: "piramide",
    emoji: "🔺",
    titel: "De grote piramide",
    praatje:
      "Dit is een Egyptische piramide, net als die van Gizeh — bijna 4500 jaar oud! Hij is opgebouwd uit miljoenen zware stenen blokken. Wil je weten hoevéél steen erin past? Dan reken je de inhoud uit: een derde van het grondvlak keer de hoogte. En die schuine ribben omhoog naar de top? Die vind je met de stelling van Pythagoras.",
    weetje:
      "De echte piramide van Gizeh is 146 meter hoog en telt ongeveer 2,3 miljoen stenen blokken. De zijden lopen onder een hoek van bijna 52 graden schuin omhoog — duizenden jaren vóór de rekenmachine al precies uitgerekend!",
    leerpadId: "ruimtemeetkunde",
    leerLabel: "Inhoud berekenen",
    leerpadId2: "pythagoras",
    leerLabel2: "Stelling van Pythagoras",
    speel: "piramide-inhoud",
  },
  kubus: {
    id: "kubus",
    emoji: "🧊",
    titel: "De Rubik-kubus",
    praatje:
      "Dit kunstwerk is één grote kubus, net als een Rubik's kubus. Bij een kubus zijn álle ribben even lang. Wil je weten hoeveel er in past — de inhoud? Tel de kleine blokjes: dat is ribbe keer ribbe keer ribbe. Bij een kubus van 3 zijn dat 3 × 3 × 3 = 27 blokjes.",
    weetje:
      "De Rubik's kubus werd in 1974 bedacht door de Hongaar Ernő Rubik. Er zijn meer dan 43 triljoen (43 met 18 nullen!) manieren om hem te draaien, en tóch kun je hem altijd in 20 zetten of minder oplossen.",
    leerpadId: "meetkunde-bouwsels",
    leerLabel: "Inhoud van een kubus",
    leerpadId2: "ruimtemeetkunde",
    leerLabel2: "Meer ruimtemeetkunde",
    speel: "kubus-inhoud",
  },
  kegel: {
    id: "kegel",
    emoji: "🍦",
    titel: "Het reuze-ijsje",
    praatje:
      "Kijk, een reuze-ijsje! Het hoorntje eronder is een kegel. Wil je weten hoeveel ijs erin past — de inhoud? Dat reken je uit met: een derde × π × straal × straal × hoogte. Grappig genoeg is een kegel precies een derde van een blikje (cilinder) met dezelfde bodem en hoogte.",
    weetje:
      "π (pi) is ongeveer 3,14 — een getal dat je bij álles met rondingen nodig hebt: van een ijshoorntje tot een pizza tot een reuzenrad. Het is een van de beroemdste getallen uit de wiskunde.",
    leerpadId: "ruimtemeetkunde",
    leerLabel: "Inhoud van een kegel",
    speel: "kegel-inhoud",
  },
  bol: {
    id: "bol",
    emoji: "⚽",
    titel: "De reuze-voetbal",
    praatje:
      "Een reuze-bal! Een bal is helemaal rond — dat heet een bol. Wil je weten hoeveel lucht erin past, de inhoud? Dat reken je uit met: vier-derde × π × straal × straal × straal. De straal telt dus drie keer mee, want een bol groeit in álle richtingen tegelijk.",
    weetje:
      "Een echte voetbal heeft 32 vlakken: 20 zeshoeken en 12 vijfhoeken. Diezelfde vorm gebruiken wetenschappers ook voor een piepklein bolletje van koolstof, dat ze een 'buckybal' noemen.",
    leerpadId: "ruimtemeetkunde",
    leerLabel: "Inhoud van een bol",
    speel: "bol-inhoud",
  },
  halvebol: {
    id: "halvebol",
    emoji: "🥅",
    titel: "De koepel",
    praatje:
      "Dit is een koepel — precies een halve bol. Snijd een bal doormidden en je houdt er twee over. De inhoud is dus de helft van een hele bol: twee-derde × π × straal × straal × straal. Handig om te weten bij een iglo, een planetarium of een stadionkoepel!",
    weetje:
      "De grootste koepel zonder steunpilaren in het midden staat in Singapore. Koepels zijn juist zó sterk omdat hun ronde vorm het gewicht gelijk verdeelt.",
    leerpadId: "ruimtemeetkunde",
    leerLabel: "Inhoud van een halve bol",
    speel: "halvebol-inhoud",
  },
  draaimolen: {
    id: "draaimolen",
    emoji: "🎠",
    titel: "De draaimolen",
    praatje:
      "Kijk goed: de paardjes aan de buitenkant gaan sneller dan die in het midden! Ze draaien allebei één rondje in dezelfde tijd, maar de buitenste legt een langere weg af. Grotere afstand in dezelfde tijd — dat is een hogere snelheid.",
    weetje:
      "Daarom start een hardloper in de buitenste baan van een atletiekbaan een stukje vóór de rest — anders zou hij verder moeten rennen voor hetzelfde rondje.",
    leerpadId: "tijd-snelheid-afstand-po",
    leerLabel: "Tijd, snelheid en afstand",
    souvenirNaam: "een mini-draaimolen 🎠",
  },

  /* ── 🎡 Interactief-park-masterplan (Mark 16-17 aug) ─────────────────────
     Tier A (manipuleerbaar/levend) + Tier B (magische poorten). Elk leerpadId
     is geverifieerd tegen pathManifest (harde regel). ── */
  // Tier A
  klok: {
    id: "klok", emoji: "🕐", titel: "De klokkentoren",
    praatje: "Kijk op de grote klok! De lange wijzer wijst de minuten aan, de korte wijzer de uren. Als de lange wijzer helemaal rond is geweest, is er een heel uur voorbij. Zo lees je precies hoe laat het is — op deze klok én op de klok thuis.",
    weetje: "Een dag heeft 24 uur, maar op een klok staan maar 12 cijfers. Daarom gaan de wijzers twee keer per dag helemaal rond: één keer 's ochtends en één keer 's middags/'s avonds.",
    leerpadId: "klokkijken", leerLabel: "Klokkijken",
  },
  weegschaal: {
    id: "weegschaal", emoji: "⚖️", titel: "De weegschaal",
    praatje: "Leg je iets aan de ene kant, dan zakt die kant naar beneden als het zwaar is. Zijn beide kanten even zwaar, dan hangt de balk mooi recht — dat heet in balans. Zo weeg je hoe zwaar iets is, in grammen en kilo's.",
    weetje: "Duizend gram samen is precies één kilo. Een pak suiker weegt ongeveer één kilo, een appel maar zo'n honderd gram — je hebt er dus tien nodig voor een kilo!",
    leerpadId: "meten-gewicht-inhoud-tijd-po", leerLabel: "Meten: gewicht",
  },
  breukentaart: {
    id: "breukentaart", emoji: "🍰", titel: "De breuken-taart",
    praatje: "Deze taart is in acht gelijke punten gesneden. Neem je er vier, dan heb je de helft — dat schrijf je als ½. Zo laat een breuk zien hoeveel van het geheel je hebt: een halve, een kwart of driekwart.",
    weetje: "Twee kwarten (¼ + ¼) zijn samen precies een halve (½). Breuken die er anders uitzien, kunnen dus toch evenveel zijn!",
    leerpadId: "breuken-po", leerLabel: "Breuken",
  },
  moestuin: {
    id: "moestuin", emoji: "🥕", titel: "De moestuin",
    praatje: "Deze moestuin is een rechthoek. Wil je weten hoeveel grond je hebt om op te planten — de oppervlakte? Dan doe je lengte keer breedte. Bij drie meter lang en twee meter breed is dat 3 × 2 = 6 vierkante meter.",
    weetje: "Oppervlakte reken je in vierkante meters (m²): dat zijn hokjes van één bij één meter. Tel de hokjes en je weet precies hoe groot je tuin is.",
    leerpadId: "oppervlakte-omtrek-po", leerLabel: "Oppervlakte en omtrek",
  },
  telraam: {
    id: "telraam", emoji: "🧮", titel: "Het telraam",
    praatje: "Elke rij kralen telt anders mee: onderaan zijn het losse eenheden, dan tientallen, dan honderdtallen en bovenaan duizendtallen. Zo bouw je met een paar kralen een groot getal. Waar een cijfer staat, bepaalt hoeveel het waard is — dat heet plaatswaarde.",
    weetje: "In het getal 3000 is de 3 duizend waard, maar in 300 maar driehonderd. Dezelfde 3, een andere plek — een heel andere waarde!",
    leerpadId: "kommagetallen-po", leerLabel: "Getallen en plaatswaarde",
  },
  parkkaart: {
    id: "parkkaart", emoji: "🗺️", titel: "De park-plattegrond",
    praatje: "Dit bord toont het hele park van bovenaf, als een kaart. De windroos wijst waar noord, oost, zuid en west zijn. Zoek jezelf op de kaart en je kunt de weg vinden naar elke plek — net als op een echte plattegrond.",
    weetje: "Op bijna elke kaart is boven het noorden. Weet je waar het noorden is, dan weet je meteen waar oost, zuid en west liggen: met de klok mee eromheen.",
    leerpadId: "kaartlezen-po", leerLabel: "Kaartlezen",
    leerpadId2: "plattegrond-legenda-po", leerLabel2: "Plattegrond en legenda",
  },
  // Tier B — landmark + magische poort
  kompas: {
    id: "kompas", emoji: "🧭", titel: "Het kompas",
    praatje: "De rode naald van een kompas wijst altijd naar het noorden, waar je ook staat. Weet je waar het noorden is, dan vind je ook oost, zuid en west. Zo raakten ontdekkingsreizigers vroeger nooit de weg kwijt — zelfs midden op zee niet.",
    weetje: "De naald wijst noord omdat de aarde zelf een reuze-magneet is. Diep in de grond zit gloeiend ijzer dat de naald zachtjes de goede kant op trekt.",
    leerpadId: "kaartlezen-po", leerLabel: "Kaartlezen",
    leerpadId2: "plattegrond-legenda-po", leerLabel2: "Plattegrond en legenda",
  },
  eiffeltoren: {
    id: "eiffeltoren", emoji: "🗼", titel: "De Eiffeltoren",
    praatje: "Dit is de Eiffeltoren, het beroemdste bouwwerk van Parijs, de hoofdstad van Frankrijk. Kijk goed naar de ijzeren balken: het zijn allemaal driehoeken. Een driehoek kun je niet scheeftrekken — daarom staat de toren al meer dan honderd jaar kaarsrecht.",
    weetje: "De Eiffeltoren is 324 meter hoog en werd in 1889 gebouwd van ijzer. In de zomer wordt hij een paar centimeter langer, omdat warm ijzer een beetje uitzet.",
    leerpadId: "topografie-europa-landen-po", leerLabel: "Landen van Europa",
    leerpadId2: "vlakke-figuren-po", leerLabel2: "Vlakke figuren (driehoeken)",
  },
  tempel: {
    id: "tempel", emoji: "🏛️", titel: "De Griekse tempel",
    praatje: "Zo'n tempel met hoge zuilen bouwden de oude Grieken en Romeinen al duizenden jaren geleden. Er woonde geen mens in, maar hun goden. De ronde zuilen dragen het zware dak — een slimme manier van bouwen die we nu nog gebruiken.",
    weetje: "Veel deftige gebouwen van nu — musea, rechtbanken, het Witte Huis — hebben nog steeds van die Griekse zuilen. De oudheid bouwt dus nog altijd een beetje mee.",
    leerpadId: "oudheid-egyptenaren-grieken-romeinen-po", leerLabel: "Grieken en Romeinen",
  },
  wereldbol: {
    id: "wereldbol", emoji: "🌍", titel: "De wereldbol",
    praatje: "De aarde is een grote bol, en op deze globe zie je hem klein. Het blauw is water — zeeën en oceanen — en het groen en bruin is land. Draai maar rond en je reist langs alle werelddelen van de hele wereld.",
    weetje: "Er is veel meer water dan land: bijna driekwart van de aarde is zee. Daarom heet onze planeet ook wel de blauwe planeet.",
    leerpadId: "topografie-wereld-werelddelen-po", leerLabel: "Werelddelen",
    leerpadId2: "continenten-wereld-po", leerLabel2: "De continenten",
  },
  telescoop: {
    id: "telescoop", emoji: "🔭", titel: "De sterrenwacht",
    praatje: "In deze koepel staat een grote telescoop die je heel ver weg laat kijken: naar de maan, de planeten en de sterren. Overdag zie je ze niet, maar 's nachts staan er duizenden aan de hemel. Sterrenkijkers ontdekken er nog steeds nieuwe.",
    weetje: "Het licht van sommige sterren is zó lang onderweg dat je eigenlijk terugkijkt in de tijd. Sommige sterren die je ziet, bestaan nu misschien niet eens meer!",
    leerpadId: "sterren-planeten", leerLabel: "Sterren en planeten",
    leerpadId2: "ruimtevaart-po", leerLabel2: "Ruimtevaart",
  },
  standbeeld: {
    id: "standbeeld", emoji: "🗿", titel: "Het standbeeld",
    praatje: "Een standbeeld zetten we neer voor iemand die iets bijzonders heeft gedaan, zodat we die persoon niet vergeten. In Nederland staan er veel: van schilders en uitvinders tot helden van vroeger. Zo blijft hun verhaal voor altijd bewaard.",
    weetje: "Veel standbeelden zijn van brons, een sterk soort metaal. Buiten in weer en wind kleuren ze langzaam groen — dat heet een patina.",
    leerpadId: "bekende-nederlanders-po", leerLabel: "Bekende Nederlanders",
    leerpadId2: "nederlandse-kunstenaars-po", leerLabel2: "Nederlandse kunstenaars",
  },
  molen: {
    id: "molen", emoji: "🌾", titel: "De molen",
    praatje: "Een echte Hollandse molen! De wind duwt tegen de grote wieken en laat ze draaien. Vroeger maalde die draaikracht het graan tot meel voor brood, of pompte hij water weg zodat we droge voeten hielden. Wind die voor je werkt — heel slim.",
    weetje: "Zonder molens zou een groot deel van Nederland onder water staan. Eeuwenlang pompten duizenden molens het water uit het land de rivieren in.",
    leerpadId: "water-erfgoed-nederland-po", leerLabel: "Water en erfgoed",
    leerpadId2: "energiebronnen-po", leerLabel2: "Energie uit wind",
  },
  raket: {
    id: "raket", emoji: "🚀", titel: "De raket",
    praatje: "Een raket moet ontzettend hard duwen om los te komen van de aarde. Uit de onderkant schiet een enorme vlam naar beneden, en die duwkracht stuwt de raket omhoog de ruimte in. Zo brengen we mensen en satellieten tot ver boven de wolken.",
    weetje: "Om de aarde te verlaten moet een raket bijna 40.000 kilometer per uur gaan — honderden keren sneller dan een auto op de snelweg.",
    leerpadId: "ruimtevaart-po", leerLabel: "Ruimtevaart",
    leerpadId2: "krachten-natuurkunde", leerLabel2: "Krachten (duwen en trekken)",
  },
  vulkaan: {
    id: "vulkaan", emoji: "🌋", titel: "De vulkaan",
    praatje: "Diep onder de grond is het zó heet dat steen smelt tot gloeiende lava. Soms zoekt die een weg omhoog en barst een vulkaan uit. De aarde bestaat namelijk uit grote schollen die langzaam bewegen — daar waar ze schuiven, ontstaan vulkanen en bergen.",
    weetje: "Lava is meer dan 1000 graden heet. Als het afkoelt wordt het weer keihard steen — en juist rond vulkanen is de grond daarna heel vruchtbaar.",
    leerpadId: "platentektoniek-aardrijkskunde", leerLabel: "Aardlagen en vulkanen",
  },
  kas: {
    id: "kas", emoji: "🥬", titel: "De kas",
    praatje: "In deze glazen kas is het altijd lekker warm, zodat groenten het hele jaar door groeien. Planten maken hun eigen eten van zonlicht, water en lucht — dat heet fotosynthese. Verse groenten zijn goed voor je: ze zitten vol vitamines.",
    weetje: "Nederland is klein, maar door al die kassen een van de grootste groente-uitvoerders ter wereld. Onze tomaten en paprika's eet men tot in verre landen.",
    leerpadId: "gezonde-voeding-po", leerLabel: "Gezonde voeding",
    leerpadId2: "fotosynthese-biologie", leerLabel2: "Fotosynthese",
  },
  weerstation: {
    id: "weerstation", emoji: "🌦️", titel: "Het weerstation",
    praatje: "Met een weerstation meet je het weer: het vaantje draait met de wind mee zodat je ziet welke kant hij op waait, en de thermometer meet hoe warm het is. Met al die metingen kunnen weermensen voorspellen of je morgen een jas of zonnebril nodig hebt.",
    weetje: "Wind krijgt zijn naam van de kant waar hij vandaan komt: een noordenwind waait uit het noorden naar je toe — en die is vaak lekker fris.",
    leerpadId: "weersvoorspelling-po", leerLabel: "Het weer voorspellen",
  },
  spaarpot: {
    id: "spaarpot", emoji: "🐷", titel: "De spaarpot",
    praatje: "In een spaarpot stop je muntjes die je niet meteen uitgeeft. Spaar je elke week een beetje, dan wordt het langzaam een flink bedrag — genoeg voor iets groots. Slim met geld omgaan begint met sparen en goed nadenken voor je iets koopt.",
    weetje: "Geld dat je op de bank spaart, kan zelfs een beetje groeien vanzelf: dat heet rente. Hoe langer je het laat staan, hoe meer het wordt.",
    leerpadId: "financiele-vorming-po", leerLabel: "Slim met geld",
    leerpadId2: "geld-rekenen", leerLabel2: "Rekenen met geld",
  },
};

export const LEERMOMENT_BY_ID = PARK_LEERMOMENTEN;

// Reverse-map leerpadId → leermoment (cirkel-is-rond fase 2, 17 jul): rond je
// een leerpad af dat óók als park-object bestaat, dan toont het klaar-scherm
// een terugkaart naar het park + het verdiende souvenir. Alleen leermomenten
// mét eigen souvenir (achtbaan/zweefmolen delen krachten-natuurkunde — dat pad
// heeft al Newtons boompje via het uitvinders-tafereel).
export const LEERMOMENT_BY_LEERPAD = {};
for (const m of Object.values(PARK_LEERMOMENTEN)) {
  if (m.souvenirNaam && !LEERMOMENT_BY_LEERPAD[m.leerpadId]) LEERMOMENT_BY_LEERPAD[m.leerpadId] = m;
}

// Welk geplaatst object hoort bij welk leermoment? (assetId → leermoment-id)
// Gebruikt door de rondloop-gids in ZooScene: kom je bij zo'n object in de
// buurt en blijf je even, dan vertelt je maatje er ongevraagd (hardop) over.
export const LEERMOMENT_BY_ASSET = {
  trein: "stoomtrein",
  // Station heeft nu een eigen leermoment (roosters lezen = Cito-studievaardig-
  // heden); de rijdende trein zelf blijft het stoomtrein-verhaal vertellen.
  station: "station",
  tree: "boom",
  treeOak: "boom",
  treePalm: "boom",
  achtbaan: "achtbaan",
  achtbaanKlein: "achtbaan",
  achtbaanSpiraal: "achtbaan",
  ferris: "reuzenrad",
  carousel: "draaimolen",
  swing: "zweefmolen",
  fountain: "fontein",
  piramide: "piramide",
  kubus: "kubus",
  kegel: "kegel",
  bol: "bol",
  halvebol: "halvebol",
  // 🎡 Interactief-park-masterplan (Mark 16-17 aug): assetId === leermoment-id.
  klok: "klok",
  weegschaal: "weegschaal",
  breukentaart: "breukentaart",
  moestuin: "moestuin",
  telraam: "telraam",
  parkkaart: "parkkaart",
  kompas: "kompas",
  eiffeltoren: "eiffeltoren",
  tempel: "tempel",
  wereldbol: "wereldbol",
  telescoop: "telescoop",
  standbeeld: "standbeeld",
  molen: "molen",
  raket: "raket",
  vulkaan: "vulkaan",
  kas: "kas",
  weerstation: "weerstation",
  spaarpot: "spaarpot",
};

// ✨ Magische poorten (Mark 16 aug, MAGISCHE-POORTEN-PLAN.md): welke geplaatste
// objecten hebben een poort waar je DOORHEEN kunt lopen → het leerpad opent.
// De landmark-blikvangers uit het masterplan (Tier B) + de piramide. De kleine
// tier-A-vormen (klok/weegschaal/…) hebben géén doorloop-poort: die tik je aan
// om ze te onderzoeken (anders loop je er per ongeluk doorheen bij het inrichten).
// assetId → { leerpadId, label } (leerpadId komt uit het leermoment, dus altijd
// een bestaand pad). PoortWatcher in ZooScene gebruikt deze set. NB: de piramide
// staat er bewust NIET in — die heeft al z'n eigen grootte-schuif + leer-knop, een
// doorloop-poort zou daarmee botsen. Alleen de landmark-blikvangers.
export const POORT_ASSETS = {};
for (const assetId of [
  "kompas", "eiffeltoren", "tempel", "wereldbol", "telescoop",
  "standbeeld", "molen", "raket", "vulkaan", "kas", "weerstation", "spaarpot",
]) {
  const m = PARK_LEERMOMENTEN[LEERMOMENT_BY_ASSET[assetId]];
  if (m?.leerpadId) POORT_ASSETS[assetId] = { leerpadId: m.leerpadId, label: m.leerLabel || m.titel };
}
