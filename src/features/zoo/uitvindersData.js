// Uitvinders-kabouters — config (licht, géén three.js-import zodat de
// game-wrapper dit kan lezen zonder de 3D-bundel binnen te trekken).
// De 3D-taferelen zelf staan in UitvindersKabouters.jsx (lazy via ZooScene).
export const TAFERELEN = [
  {
    id: "newton",
    emoji: "🍎",
    titel: "De appel van Professor Isaac",
    pos: [-10, 61],
    praatje:
      "Au! Zag je die appel op zijn muts vallen? Dat is zwaartekracht: de aarde trekt álles naar beneden. Daarom kom jij van een glijbaan altijd beneden aan — en val je nooit omhoog!",
    weetje: "Het verhaal gaat dat Isaac Newton de zwaartekracht begreep toen hij een appel uit een boom zag vallen — ruim 300 jaar geleden.",
    leerpadId: "krachten-natuurkunde",
    leerLabel: "Krachten en bewegen",
    souvenirAssetId: "souvenirBoom",
    souvenirNaam: "Newtons boompje",
  },
  {
    id: "piramide",
    emoji: "🔺",
    titel: "De piramidebouwers",
    pos: [11, 57],
    praatje:
      "Deze kabouters bouwen een piramide zoals in het oude Egypte — zonder kraan! Ze rollen zware blokken over boomstammen en duwen ze omhoog over een schuine helling. Hoe langer de helling, hoe lichter het duwen. Dat is een verhouding!",
    weetje: "De grote piramide van Cheops is zo'n 4500 jaar oud en was 146 meter hoog — gebouwd uit meer dan 2 miljoen blokken steen.",
    leerpadId: "verhoudingen-po",
    leerLabel: "Verhoudingen",
    souvenirAssetId: "souvenirPiramide",
    souvenirNaam: "Mini-piramide",
  },
  {
    id: "tesla",
    emoji: "⚡",
    titel: "Meester Nikola en de bliksemkooi",
    pos: [-11, 47],
    praatje:
      "Kijk, Meester Nikola staat middenin de bliksem — en er gebeurt niks! Zijn metalen kooi leidt de stroom om hem heen, veilig de grond in. Dat heet een kooi van Faraday. Daarom ben je in een auto veilig bij onweer.",
    weetje: "Een vliegtuig wordt gemiddeld één keer per jaar door de bliksem geraakt — en iedereen aan boord merkt er bijna niets van, dankzij hetzelfde trucje.",
    leerpadId: "elektriciteit-natuurkunde",
    leerLabel: "Elektriciteit",
    souvenirAssetId: "souvenirTesla",
    souvenirNaam: "Mini-bliksemtoren",
  },
];

export const TAFEREEL_BY_ID = Object.fromEntries(TAFERELEN.map((t) => [t.id, t]));
// Reverse-lookup voor de vraag→spel-richting ("dit wil ik in het spel bekijken"):
// leerpad-id → tafereel. Gebruikt door het AllDone-scherm van het leerpad.
export const TAFEREEL_BY_LEERPAD = Object.fromEntries(TAFERELEN.map((t) => [t.leerpadId, t]));
