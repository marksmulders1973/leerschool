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

// 🎓 Niveau-label per leerattractie (Mark 20 aug: "'deze past bij groep 8' of
// 'past het beste bij mavo'"). AUTOMATISCH afgeleid uit het level-veld van het
// gekoppelde leerpad in het manifest — dan klopt het altijd, ook bij nieuwe
// objecten, zonder 32 losse handmatige labels. Kindtaal, geen dev-jargon;
// vmbo-gt heet in de app "mavo" (zoals op de site).
import PATH_MANIFEST from "../../learnPaths/pathManifest.generated.json";
const LEVEL_BY_PATH = new Map(PATH_MANIFEST.map((p) => [p.id, p.level || null]));
export function niveauLabelVoorLeerpad(leerpadId) {
  const s = String(LEVEL_BY_PATH.get(leerpadId) || "");
  if (!s) return null;
  if (s.startsWith("groep")) return "groep " + s.slice(5);
  if (s === "po") return "de basisschool";
  if (s.startsWith("vmbo")) return "de mavo";
  if (s.includes("havo") && s.includes("vwo")) return "havo/vwo";
  if (s.includes("havo")) return "de havo";
  if (s === "vwo") return "het vwo";
  if (s.startsWith("klas")) {
    const nrs = s.slice(4).replace(/-?(vmbo|havo|vwo)\d?/g, "").replace(/-+$/, "");
    return nrs ? `klas ${nrs} (middelbare school)` : "de middelbare school";
  }
  return null;
}

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
    titel: "De kleuren-kubus",
    praatje:
      "Dit is één grote kubus, gemaakt van kleine blokjes met elk een eigen kleur. Bij een kubus zijn álle ribben even lang. Wil je weten hoeveel erin past — de inhoud? Tel de blokjes: dat is ribbe keer ribbe keer ribbe. Bij een kubus van 3 zijn dat 3 × 3 × 3 = 27 blokjes.",
    weetje:
      "Elk blokje een eigen kleur maakt tellen makkelijk. Maak je de ribbe twee keer zo lang, dan past er niet twee maar ácht keer zoveel in (2 × 2 × 2). Inhoud groeit dus razendsnel — bij een kubus van 4 zijn het al 64 blokjes.",
    leerpadId: "meetkunde-bouwsels",
    leerLabel: "Inhoud van een kubus",
    leerpadId2: "ruimtemeetkunde",
    leerLabel2: "Meer ruimtemeetkunde",
    speel: "kubus-inhoud",
  },
  kegel: {
    id: "kegel",
    emoji: "🔻",
    titel: "De glazen kegel",
    praatje:
      "Kijk, een glazen kegel — je kunt er dwars doorheen kijken! De rode lijn onderin is de straal van de bodem, en de blauwe lijn die recht omhoog gaat is de hoogte. Wil je weten hoeveel erin past — de inhoud? Dat reken je uit met: een derde × π × straal × straal × hoogte. Grappig genoeg is een kegel precies een derde van een blikje (cilinder) met dezelfde bodem en hoogte.",
    weetje:
      "π (pi) is ongeveer 3,14 — een getal dat je bij álles met rondingen nodig hebt: van een ijshoorntje tot een pizza tot een reuzenrad. Het is een van de beroemdste getallen uit de wiskunde.",
    leerpadId: "ruimtemeetkunde",
    leerLabel: "Inhoud van een kegel",
    speel: "kegel-inhoud",
  },
  cilinder: {
    id: "cilinder",
    emoji: "🛢️",
    titel: "De glazen cilinder",
    praatje:
      "Een glazen cilinder — net een reuze-blikje! De rode lijn onderin is de straal van de bodem, de blauwe lijn is de hoogte. De inhoud reken je uit met: π × straal × straal × hoogte. En nu het mooiste: een kegel met dezelfde bodem en dezelfde hoogte past er precies drie keer in — dáárom staat er bij de kegel een derde in de formule!",
    weetje:
      "Blikjes zijn cilinders omdat die vorm sterk is en makkelijk rolt in de fabriek. Een frisdrankblikje heeft een inhoud van 330 ml — dat zijn 330 blokjes van 1 bij 1 bij 1 centimeter.",
    leerpadId: "ruimtemeetkunde",
    leerLabel: "Inhoud van een cilinder",
  },
  bol: {
    id: "bol",
    emoji: "🔮",
    titel: "De glazen bal",
    praatje:
      "Een glazen bal — kijk er dwars doorheen! De blauwe lijn dwars door het midden is de diameter, en de rode lijn is de straal: precies de hélft van de diameter. Wil je weten hoeveel erin past, de inhoud? Dat reken je uit met: vier-derde × π × straal × straal × straal. De straal telt dus drie keer mee, want een bol groeit in álle richtingen tegelijk.",
    weetje:
      "De aarde is zelf ook (bijna) een bol. Haar diameter is ongeveer 12.742 kilometer — zou je een tunnel dwars door het midden graven, dan is die tunnel precies zo lang als de diameter!",
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
    // Jong-variant (Mark 22 aug, park-megabuild #7.3): op de gele route (groep 3-5)
    // simpeler — alleen hele uren, geen minuten-uitleg.
    praatjeJong: "Kijk op de grote klok! De korte wijzer wijst het uur aan. Staat de lange wijzer recht omhoog op de 12, dan is het een héél uur — bijvoorbeeld 3 uur. Kun jij zien hoe laat het is?",
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
    // Jong-variant (groep 3-5): hokjes tellen i.p.v. lengte × breedte + m².
    praatjeJong: "Kijk, de moestuin is verdeeld in vierkante hokjes. In elk hokje past één plantje. Tel de hokjes maar: hoeveel plantjes passen er in de hele tuin? Zo weet je hoe groot de tuin is!",
    weetje: "Oppervlakte reken je in vierkante meters (m²): dat zijn hokjes van één bij één meter. Tel de hokjes en je weet precies hoe groot je tuin is.",
    leerpadId: "oppervlakte-omtrek-po", leerLabel: "Oppervlakte en omtrek",
  },
  telraam: {
    id: "telraam", emoji: "🧮", titel: "Het telraam",
    praatje: "Elke rij kralen telt anders mee: onderaan zijn het losse eenheden, dan tientallen, dan honderdtallen en bovenaan duizendtallen. Zo bouw je met een paar kralen een groot getal. Waar een cijfer staat, bepaalt hoeveel het waard is — dat heet plaatswaarde.",
    // Jong-variant (groep 3-5): gewoon tellen tot 100, geen plaatswaarde.
    praatjeJong: "Met een telraam kun je makkelijk tellen! Schuif de kralen één voor één opzij en tel mee: 1, 2, 3… Elke rij heeft tien kralen. Tel jij tot honderd?",
    weetje: "In het getal 3000 is de 3 duizend waard, maar in 300 maar driehonderd. Dezelfde 3, een andere plek — een heel andere waarde!",
    leerpadId: "kommagetallen-po", leerLabel: "Getallen en plaatswaarde",
    leerpadIdJong: "getallen-tot-20-po", leerLabelJong: "Getallen + sommen tot 20",
  },
  // 🐄 Boerderijdieren — de dieren-stop op de gele route (Mark 22 aug, park-
  // megabuild #7.2, Sem 8 jr: "mijn route gaat naar een klok, niet naar de
  // dieren"). Tel-praatje op groep 3-4-niveau met keersommen (poten!).
  boerderij: {
    id: "boerderij", emoji: "🐄", titel: "De boerderijdieren",
    praatje: "Kijk naar de dieren in de wei! Tel ze maar samen. Elk dier heeft 4 poten — dus 3 schapen zijn samen 3 × 4 = 12 poten. Zo oefen je de tafels zonder dat je het doorhebt: gewoon door te tellen wat je ziet.",
    praatjeJong: "Kijk, dieren in de wei! Tel ze maar hardop: hoeveel schapen zie je? En hoeveel poten heeft één schaap? Tel de poten van twee schapen samen — dat zijn er 4 en nog eens 4!",
    weetje: "Vier poten hebben bijna alle boerderijdieren — koe, schaap, varken, paard. Kippen niet: die hebben er maar twee, net als jij!",
    leerpadId: "tafels-po", leerLabel: "Tafels oefenen",
    leerpadIdJong: "getallen-tot-20-po", leerLabelJong: "Getallen + sommen tot 20",
  },
  zwembad: {
    id: "zwembad", emoji: "🏊", titel: "Het zwembad",
    praatje: "Hoeveel water past er in dit zwembad? Dat is de inhoud, en die reken je zo uit: lengte × breedte × diepte. Een bad van 6 bij 3 bij 3 meter houdt dus 6 × 3 × 3 = 54 kubieke meter water — en dat zijn maar liefst 54.000 liter!",
    praatjeJong: "Kijk, het zwembad vult zich met water! Hoe langer, breder en dieper het bad, hoe meer water erin past. Tel maar mee met de blokjes water — zo zie je hoeveel erin gaat.",
    weetje: "Eén kubieke meter (1 m³) is een bak van 1 bij 1 bij 1 meter, en daar past precies 1000 liter in. Een flinke badkuip is ongeveer 150 liter — een zwembad dus véél meer!",
    leerpadId: "ruimtemeetkunde", leerLabel: "Inhoud & ruimtemeetkunde",
    leerpadIdJong: "oppervlakte-omtrek-po", leerLabelJong: "Meten en rekenen",
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
    id: "tempel", emoji: "🏟️", titel: "De Romeinse arena",
    praatje: "In zo'n ronde arena keken de oude Romeinen naar spannende wedstrijden. Twee gladiatoren lieten zien wie het sterkst en slimst was — met helm, schild en zwaard of een drietand, als sporthelden van bijna 2000 jaar geleden. Duizenden mensen juichten vanaf de tribunes.",
    weetje: "Het beroemdste stadion van de oudheid is het Colosseum in Rome: daar pasten wel 50.000 mensen in. Het staat er na bijna 2000 jaar nog steeds — en ons woord 'arena' komt van het Latijnse woord voor zand.",
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
  // 🐄 Boerderijdieren → dieren-tel-stop (park-megabuild #7.2). Zo vindt de
  // wandelroute de dieren én vertelt de gids er een tel-praatje bij.
  cow: "boerderij",
  sheep: "boerderij",
  pig: "boerderij",
  alpaca: "boerderij",
  donkey: "boerderij",
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
  cilinder: "cilinder",
  bol: "bol",
  halvebol: "halvebol",
  // 🎡 Interactief-park-masterplan (Mark 16-17 aug): assetId === leermoment-id.
  klok: "klok",
  weegschaal: "weegschaal",
  breukentaart: "breukentaart",
  moestuin: "moestuin",
  telraam: "telraam",
  zwembad: "zwembad",
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

// ❓ Elke plek stelt één vraag (samenhang-plan 2 sep 2026, PARK-SAMENHANG-PLAN).
// De leraar-review: vrijwel elk object was "monoloog + link", nergens werd het
// kind iets gevráágd. Deze ene concrete vraag per object is wat het maatje in
// z'n wolkje zegt, wat de poort-kaart toont en wat de gids stelt. Bewust géén
// goed/fout-check hier: de vraag prikkelt, de les (achter de poort) legt uit.
const VRAAG_PER_MOMENT = {
  stoomtrein: "Wat duwt de wielen van deze trein rond: het vuur, de stoom of de machinist?",
  boom: "Waar haalt deze boom zijn eten vandaan, zonder winkel?",
  achtbaan: "Waarom heeft de achtbaan na de hoogste heuvel geen motor meer nodig?",
  reuzenrad: "Als het rad één rondje draait, hoe ver ben jij dan gereisd?",
  station: "De trein komt om :20 en :50. Jij bent er om :35 — hoe lang wacht je?",
  zweefmolen: "Waarom vliegen de stoeltjes naar buiten als de molen sneller draait?",
  fontein: "Waar blijft het water dat uit de fontein verdampt?",
  piramide: "Hoeveel blokjes passen er in deze piramide? Schat eerst, reken dan.",
  kubus: "Een kubus van 3 bij 3 bij 3 — hoeveel blokjes zitten erin?",
  kegel: "Past er meer of minder in de kegel dan in een even hoge cilinder?",
  cilinder: "Hoeveel bekers water passen er in deze cilinder? Schat het eens.",
  bol: "Een bal heeft geen hoeken — hoe meet je dan hoeveel erin past?",
  halvebol: "Past er in een halve bol precies de helft van de hele bol?",
  draaimolen: "De molen draait één rondje in 10 seconden. Hoeveel rondjes in een minuut?",
  klok: "Kijk naar de wijzers: hoe laat is het nu op de toren?",
  weegschaal: "Wat is zwaarder: een kilo veren of een kilo stenen?",
  breukentaart: "Je pakt 2 van de 8 punten. Welk deel van de taart is dat?",
  moestuin: "De tuin is 4 bij 3 meter. Hoeveel hekjes van 1 meter heb je eromheen nodig?",
  telraam: "Schuif 3 tientallen en 4 eenheden — welk getal staat er dan?",
  boerderij: "Drie koeien en twee kippen: hoeveel poten tel je samen?",
  zwembad: "Het bad is 6 bij 3 bij 2 meter. Hoeveel kubieke meter water past erin?",
  parkkaart: "Waar sta jij nu op de plattegrond, en welke kant is het noorden?",
  kompas: "De naald wijst naar het noorden. Welke kant is dan het oosten?",
  eiffeltoren: "In welk land staat de Eiffeltoren, en wat is de hoofdstad?",
  tempel: "Wat deden de Romeinen in zo'n arena?",
  wereldbol: "Hoeveel werelddelen zijn er? Kun je er drie noemen?",
  telescoop: "Wat is groter: de zon of de maan? En waarom lijkt dat niet zo?",
  standbeeld: "Voor wie zou jij een standbeeld maken, en waarom?",
  molen: "Waarom staan er zoveel molens in Nederland?",
  raket: "Waarom moet een raket zó hard de lucht in?",
  vulkaan: "Wat komt er uit een vulkaan als hij uitbarst?",
  kas: "Waarom groeit sla in een kas ook in de winter?",
  weerstation: "Als de luchtdruk daalt, komt er dan mooi weer of regen?",
  spaarpot: "Je spaart 2 euro per week. Hoeveel heb je na 10 weken?",
};
for (const [id, vraag] of Object.entries(VRAAG_PER_MOMENT)) {
  if (PARK_LEERMOMENTEN[id]) PARK_LEERMOMENTEN[id].vraag = vraag;
}

/** "Hier sta je"-context voor maatje, gids, poort en AI-chat: één vorm, één bron. */
export function hierContextVoor(momentId) {
  const m = momentId ? PARK_LEERMOMENTEN[momentId] : null;
  if (!m) return null;
  return { id: m.id, emoji: m.emoji || "📍", titel: m.titel, vraag: m.vraag || null, leerpadId: m.leerpadId || null, leerLabel: m.leerLabel || m.titel };
}
