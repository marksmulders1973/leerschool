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

// Kleurbanden — nu ÉÉN kleur per groep (Mark 23 aug: "het wandelpad in de
// kleuren van de groep"). Een vloeiend spectrum van geel (jongste) via groen
// (midden) naar blauw (brugklas): elk kind ziet zijn eigen groep-kleur terug op
// het pad, en voelt bij elke kleur-overgang dat het een groep verder gaat — net
// als op school. De ankers geel/groen/blauw blijven op groep 3 / groep 6 /
// brugklas staan (zodat de entree-splitsing "geel = makkelijk, blauw = moeilijk"
// blijft kloppen); de tussenkleuren rijgen ze vloeiend aaneen.
export const LINT_BANDEN = [
  { id: "g3", kleur: "#ffd54f", tekstKleur: "#5c4300", groep: "Groep 3", start: "tellen · klokkijken" },
  { id: "g4", kleur: "#dce775", tekstKleur: "#4a4a10", groep: "Groep 4", start: "plus & min · meten" },
  { id: "g5", kleur: "#aed581", tekstKleur: "#2e4610", groep: "Groep 5", start: "tafels · breuken beginnen" },
  { id: "g6", kleur: "#00c853", tekstKleur: "#0b3d20", groep: "Groep 6", start: "breuken · oppervlakte" },
  { id: "g7", kleur: "#26c6da", tekstKleur: "#06333b", groep: "Groep 7", start: "inhoud · verhoudingen" },
  { id: "g8", kleur: "#29b6f6", tekstKleur: "#06304a", groep: "Groep 8", start: "procenten · de piramide" },
  { id: "brug", kleur: "#42a5f5", tekstKleur: "#0b2a4a", groep: "Brugklas & examens", start: "landmarks · tot parabolen" },
];

// Waypoints als [celX, celZ, bandIndex]. Ze rijgen de bestaande stations aan
// elkaar in leer-volgorde en vormen samen één gesloten lus (eindigt weer bij de
// ingang). De coördinaten volgen de canonieke plekken uit STARTER_LAYOUT; de
// bandIndex verwijst nu naar de groep (0=groep 3 … 6=brugklas). De posities zijn
// onveranderd — alleen de kleur-indeling is fijnmaziger geworden.
const LINT_WP_RAW = [
  // 🟡 GROEP 3 — ingang → boerderij (dieren tellen)
  [0, 16, 0],
  [0, 9, 0],
  [-7, 6, 0],
  // 🟢 GROEP 4 — langs de boerderij → richting de meet-tuin
  [-13, 7, 1],   // langs de boerderij (verblijf -17..-11, z3-9)
  [-20, 9, 1],
  // 🟢 GROEP 5 — meet-tuin (moestuin/telraam/klok/weegschaal)
  [-24, 18, 2],
  [-25, 26, 2],  // moestuin (-23,28) / telraam (-27,32)
  [-33, 29, 2],  // klok (-38,28) / weegschaal (-33,28)
  // 🟩 GROEP 6 — de eerste inhoud-vormen → zwembad
  [-37, 23, 3],
  [-35, 17, 3],  // bol (-37,16)
  [-29, 19, 3],  // zwembad (-30,20)
  // 🟦 GROEP 7 — cilinder / kegel / kubus
  [-25, 13, 4],  // cilinder (-26,13)
  [-22, 8, 4],   // kegel (-22,8) / halvebol (-22,22 verderop)
  [-32, 4, 4],   // kubus (-35,2)
  // 🟦 GROEP 8 — het piramide-plein
  [-30, -3, 5],
  [-27, -9, 5],  // piramide-plein NOORDRAND (piramide zelf -30,-19, footprint 21!)
  // 🔵 BRUGKLAS — via het zuiden naar de ontdek-laan met landmarks → terug naar de ingang
  [-16, -8, 6],
  [-4, -10, 6],
  [8, -14, 6],
  [19, -16, 6],
  [29, -12, 6],  // molen / weerstation
  [29, -2, 6],   // standbeeld / wereldbol
  [29, 6, 6],    // tempel / vulkaan
  [29, 12, 6],   // eiffeltoren / kompas
  [22, 15, 6],
  [10, 16, 6],
  [0, 16, 6],    // terug bij de start
];

// 🔎 Ruimte-verdubbeling (Mark 23 aug): het hele park staat 2× ruimer, dus de
// waypoints (die naar de station-cellen wijzen) schalen mee ×2. De banden
// blijven onveranderd. Zo volgt het lint netjes de uitgezoomde lay-out.
const LINT_SCALE = 2;
export const LINT_WAYPOINTS = LINT_WP_RAW.map(([x, z, b]) => [x * LINT_SCALE, z * LINT_SCALE, b]);

// 🔀 Entree-splitsing (Mark 22 aug: "links of rechts, makkelijk of moeilijk").
// Bij de ingang wijst een bordje twee kanten op: linksom loop je het lint vooruit
// (geel = makkelijk eerst), rechtsom loop je het achteruit (blauw = moeilijk eerst).
export const LINT_START = { x: 0 * LINT_SCALE, z: 16 * LINT_SCALE };

// De index van het eerste waypoint van elke band → daar zet ZooScene een
// niveau-overgang-bordje ("nu Groep 6-8").
export const LINT_BAND_STARTS = LINT_BANDEN.map((_, b) => LINT_WAYPOINTS.findIndex((w) => w[2] === b));

// 🎓 Leer-trail (Mark 24 aug 2026: "zet de oefeningen op logische volgorde langs
// het pad, uitgemeten voor maximale ruimte"). De discrete oefen-objecten in de
// canonieke leer-volgorde (jong → oud, gelijk aan MOMENT_TAAK in parkTaken.js).
// Attracties en dieren-weides doen NIET mee (dat zijn zones/blikvangers, Mark:
// "attracties laten staan"). `off` = hoe ver het object loodrecht náást het pad
// staat (in vakjes) — grote objecten verder, zodat ze de weg nooit raken.
export const LEERTRAIL = [
  { id: "klok", off: 4 }, { id: "weegschaal", off: 4 },
  { id: "telraam", off: 4 }, { id: "breukentaart", off: 4 }, { id: "parkkaart", off: 4 },
  { id: "moestuin", off: 6 }, { id: "zwembad", off: 7 },
  { id: "cilinder", off: 6 }, { id: "kegel", off: 6 }, { id: "bol", off: 6 }, { id: "halvebol", off: 6 },
  { id: "kubus", off: 6 }, { id: "piramide", off: 13 }, { id: "spaarpot", off: 4 },
  { id: "kompas", off: 5 }, { id: "eiffeltoren", off: 7 }, { id: "wereldbol", off: 5 }, { id: "vulkaan", off: 6 },
  { id: "molen", off: 6 }, { id: "tempel", off: 6 }, { id: "standbeeld", off: 5 }, { id: "telescoop", off: 5 },
  { id: "raket", off: 7 }, { id: "kas", off: 5 }, { id: "weerstation", off: 5 },
];

// Verdeelt N objecten gelijkmatig (gelijke booglengte) over de gesloten pad-lus
// en schuift elk loodrecht náást het pad (links/rechts afgewisseld). Werkt op de
// waypoint-polylijn (zelfde skelet als het getekende lint), in plain JS zodat de
// data-laag (zooState) het zonder three.js kan gebruiken. Returnt cel-posities +
// draaihoek zodat een object naar het pad toe kijkt.
export function leertrailPlekken(trail = LEERTRAIL) {
  const pts = LINT_WAYPOINTS.map(([x, z]) => [x, z]);
  const seg = [];
  let total = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    const d = Math.hypot(b[0] - a[0], b[1] - a[1]);
    seg.push({ a, b, d, acc: total });
    total += d;
  }
  const N = trail.length;
  return trail.map((item, i) => {
    const doel = ((i + 0.5) / N) * total;
    let s = seg[0];
    for (const sg of seg) { if (doel >= sg.acc && doel < sg.acc + sg.d) { s = sg; break; } }
    const t = (doel - s.acc) / (s.d || 1);
    const x = s.a[0] + (s.b[0] - s.a[0]) * t;
    const z = s.a[1] + (s.b[1] - s.a[1]) * t;
    let tx = s.b[0] - s.a[0], tz = s.b[1] - s.a[1];
    const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
    const nx = -tz, nz = tx;              // loodrecht op het pad
    const side = i % 2 === 0 ? 1 : -1;    // links/rechts afwisselen
    const RAND = 76;                       // binnen het terrein (±80 vakjes) houden
    const px = Math.max(-RAND, Math.min(RAND, Math.round(x + nx * side * item.off)));
    const pz = Math.max(-RAND, Math.min(RAND, Math.round(z + nz * side * item.off)));
    const hoek = Math.atan2(-side * nx, -side * nz); // kijkt naar het pad toe
    return { id: item.id, x: px, z: pz, hoek };
  });
}
