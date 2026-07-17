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
};
