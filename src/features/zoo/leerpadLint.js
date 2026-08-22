// 🎓 Leerpad-lint — ÉÉN doorlopend pad door het hele park dat de schoolreis is
// (Mark 22 aug 2026: "ik vind 1 lang pad wat van kleur en niveau verandert
// mooier dan al die losse paden"). Het begint bij de ingang, kronkelt in
// leer-volgorde langs alle stations en verandert onderweg van kleur per niveau —
// net als op school ga je van groep naar groep naar de brugklas — en komt weer
// uit bij het begin. Van makkelijk (tellen/klokkijken) naar moeilijk (de
// landmark-poorten & meetkunde richting parabolen).
//
// Dit bestand is de bron-van-waarheid: de kleurbanden + de waypoints. De
// <Leerpadlint>-component (ZooScene) tekent er een vloeiend gekleurd grondlint
// van; de wandelkwartier-route kan later hetzelfde lint volgen.

// Kleurbanden op volgorde van niveau (geel → groen → blauw).
export const LINT_BANDEN = [
  { id: "geel",  kleur: "#ffd54f", tekstKleur: "#5c4300", groep: "Groep 3-5", start: "tellen · klokkijken" },
  { id: "groen", kleur: "#00c853", tekstKleur: "#0b3d20", groep: "Groep 6-8", start: "breuken · oppervlakte · inhoud" },
  { id: "blauw", kleur: "#42a5f5", tekstKleur: "#0b2a4a", groep: "Brugklas & examens", start: "tot aan parabolen" },
];

// Waypoints als [celX, celZ, bandIndex]. Ze rijgen de bestaande stations aan
// elkaar in leer-volgorde en vormen samen één gesloten lus (eindigt weer bij de
// ingang). De coördinaten volgen de canonieke plekken uit STARTER_LAYOUT.
export const LINT_WAYPOINTS = [
  // 🟡 GEEL — ingang → boerderij (dieren tellen) → meet-tuin (klok/telraam/moestuin)
  [0, 16, 0],
  [0, 9, 0],
  [-7, 6, 0],
  [-14, 6, 0],   // boerderijdieren
  [-20, 9, 0],
  [-24, 18, 0],
  [-27, 27, 0],  // moestuin / telraam
  [-34, 30, 0],  // klok
  // 🟢 GROEN — meet-tuin → de inhoud-vormen → zwembad → piramide
  [-37, 24, 1],
  [-37, 17, 1],  // bol
  [-31, 19, 1],  // zwembad
  [-26, 13, 1],  // cilinder
  [-22, 9, 1],   // kegel
  [-30, 3, 1],   // kubus
  [-30, -8, 1],
  [-30, -18, 1], // piramide
  // 🔵 BLAUW — zuidkant over → ontdek-laan met landmarks → terug naar de ingang
  [-22, -24, 2],
  [-8, -27, 2],
  [8, -25, 2],
  [20, -20, 2],
  [29, -12, 2],  // molen / weerstation
  [29, -2, 2],   // standbeeld / wereldbol
  [29, 6, 2],    // tempel / vulkaan
  [29, 12, 2],   // eiffeltoren / kompas
  [22, 15, 2],
  [10, 16, 2],
  [0, 16, 2],    // terug bij de start
];

// De index van het eerste waypoint van elke band → daar zet ZooScene een
// niveau-overgang-bordje ("nu Groep 6-8").
export const LINT_BAND_STARTS = LINT_BANDEN.map((_, b) => LINT_WAYPOINTS.findIndex((w) => w[2] === b));
