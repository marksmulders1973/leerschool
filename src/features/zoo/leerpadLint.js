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
  [-13, 7, 0],   // langs de boerderij (verblijf -17..-11, z3-9)
  [-20, 9, 0],
  [-24, 18, 0],
  [-25, 26, 0],  // moestuin (-23,28) / telraam (-27,32)
  [-33, 29, 0],  // klok (-38,28) / weegschaal (-33,28)
  // 🟢 GROEN — meet-tuin → de inhoud-vormen → zwembad → piramide (langs de rand)
  [-37, 23, 1],
  [-35, 17, 1],  // bol (-37,16)
  [-29, 19, 1],  // zwembad (-30,20)
  [-25, 13, 1],  // cilinder (-26,13)
  [-22, 8, 1],   // kegel (-22,8) / halvebol (-22,22 verderop)
  [-32, 4, 1],   // kubus (-35,2)
  [-30, -3, 1],
  [-27, -9, 1],  // piramide-plein NOORDRAND (piramide zelf -30,-19, footprint 21!)
  // 🔵 BLAUW — via het zuiden naar de ontdek-laan met landmarks → terug naar de ingang
  [-16, -8, 2],
  [-4, -10, 2],
  [8, -14, 2],
  [19, -16, 2],
  [29, -12, 2],  // molen / weerstation
  [29, -2, 2],   // standbeeld / wereldbol
  [29, 6, 2],    // tempel / vulkaan
  [29, 12, 2],   // eiffeltoren / kompas
  [22, 15, 2],
  [10, 16, 2],
  [0, 16, 2],    // terug bij de start
];

// 🔀 Entree-splitsing (Mark 22 aug: "links of rechts, makkelijk of moeilijk").
// Bij de ingang wijst een bordje twee kanten op: linksom loop je het lint vooruit
// (geel = makkelijk eerst), rechtsom loop je het achteruit (blauw = moeilijk eerst).
export const LINT_START = { x: 0, z: 16 };

// De index van het eerste waypoint van elke band → daar zet ZooScene een
// niveau-overgang-bordje ("nu Groep 6-8").
export const LINT_BAND_STARTS = LINT_BANDEN.map((_, b) => LINT_WAYPOINTS.findIndex((w) => w[2] === b));
