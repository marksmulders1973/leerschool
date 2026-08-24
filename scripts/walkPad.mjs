// 🚶 Loop het leerpad-lint af en vind de blokkades (Mark 24 aug): waar staat er
// een object ín de weg? Speelt de park-generator na (zelfde S=2-schaling) + de
// leer-trail-herplaatsing, en botst het pad-skelet tegen de "vaste" footprints.
import { LINT_WAYPOINTS, LEERTRAIL, leertrailPlekken } from "../src/features/zoo/leerpadLint.js";

// ── Minimale asset-tabel (kind + footprint) voor wat in de starter staat ──
const A = {};
const def = (id, kind, cells = 3, botsCells = null, extra = {}) => (A[id] = { kind, cells, botsCells: botsCells == null ? cells : botsCells, ...extra });
// paden/decor niet-blokkerend
def("pathStone", "decor", 1, 1, { procedural: "path" });
def("pathRed", "decor", 1, 1, { procedural: "path" });
def("rail", "decor", 1, 1, { beloopbaar: true });
["flowerRed", "flowerYellow", "flowerPurple"].forEach((f) => def(f, "decor", 1, 1, { procedural: "flower" }));
def("mushroom", "decor", 1, 1, {});
def("grasplukje", "decor", 1, 1, {});
["bordDino", "bordBouw"].forEach((b) => def(b, "decor", 1, 1, {}));
// blokkerend decor
["tree", "treeOak", "treePalm", "struik", "kei"].forEach((t) => def(t, "decor", 1, 1, { procedural: "tree" }));
def("bankje", "decor", 1, 1, {});
def("prullenbak", "decor", 1, 1, {});
def("donatiebox", "decor", 1, 1, {});
["hekPaneel", "hekHoek"].forEach((h) => def(h, "decor", 1, 1, {}));
def("hekPoort", "decor", 1, 1, { poort: true });
// gebouwen
["patatkraam", "drankkraam", "ijscokraam", "popcornkraam", "station"].forEach((b) => def(b, "building", 3, 3));
["huisRood", "huisGeel", "huisGroen", "huisBlauw"].forEach((h) => def(h, "building", 3, 3));
// attracties (met echte botsCells waar bekend)
def("carousel", "attraction", 3, 3); def("ferris", "attraction", 3, 3); def("swing", "attraction", 3, 3);
def("achtbaanKlein", "attraction", 5, 1);
def("piramide", "attraction", 21, 13);
["kubus", "kegel", "bol", "halvebol", "cilinder"].forEach((s) => def(s, "attraction", 5, 3));
def("zwembad", "attraction", 7, 5);
["klok", "weegschaal", "breukentaart", "moestuin", "telraam", "parkkaart"].forEach((s) => def(s, "attraction", 3, 1));
["kompas", "eiffeltoren", "wereldbol", "telescoop", "standbeeld", "molen", "raket", "kas", "weerstation", "spaarpot"].forEach((s) => def(s, "attraction", 3, 3));
["tempel", "vulkaan"].forEach((s) => def(s, "attraction", 5, 3));
// dieren
["cow", "sheep", "pig", "alpaca", "donkey", "husky", "shibaInu", "pug", "wolf", "deer", "stag", "horse", "zebra", "velociraptor"].forEach((a) => def(a, "animal", 1, 1));

const isVast = (id) => {
  const a = A[id]; if (!a) return true; // onbekend → veiligheidshalve blok
  if (a.beloopbaar) return false;
  if (a.kind === "building" || a.kind === "attraction") return true;
  if (a.kind === "animal") return false;
  if (a.kind === "decor") return a.procedural !== "path" && a.procedural !== "hill" && !id.startsWith("flower") && id !== "mushroom" && id !== "grasplukje";
  return false;
};
const botsR = (id) => Math.floor((A[id]?.botsCells ?? 3) / 2);

// ── Generator naspelen (kopie van bouwVoorbeeldPark, S=2) ──
function bouw() {
  const L = [];
  const S = 2;
  const raw = (assetId, x, z, rotation = 0, extra) => L.push({ assetId, cell: [x, z], rotation, price: 0, ...extra });
  const add = (assetId, x, z, r = 0) => raw(assetId, x * S, z * S, r);
  const rij = (a, z, x1, x2) => { for (let x = x1 * S; x <= x2 * S; x++) raw(a, x, z * S); };
  const hek = (x1, z1, x2, z2, poortX) => {
    const X1 = x1 * S, Z1 = z1 * S, X2 = x2 * S, Z2 = z2 * S, PX = poortX * S;
    raw("hekHoek", X1, Z1); raw("hekHoek", X2, Z1); raw("hekHoek", X1, Z2); raw("hekHoek", X2, Z2);
    for (let x = X1 + 1; x < X2; x++) { raw("hekPaneel", x, Z1); raw(x === PX ? "hekPoort" : "hekPaneel", x, Z2); }
    for (let z = Z1 + 1; z < Z2; z++) { raw("hekPaneel", X1, z); raw("hekPaneel", X2, z); }
  };
  const verblijf = (x1, z1, x2, z2, poortX, dieren) => {
    hek(x1, z1, x2, z2, poortX);
    const X1 = x1 * S, Z1 = z1 * S, W = Math.max(1, x2 * S - x1 * S - 1);
    dieren.forEach((a, i) => raw(a, X1 + 1 + ((i * 2) % W), Z1 + 1 + Math.floor((i * 2) / W) * 2));
  };
  const railRing = (x1, z1, x2, z2) => {
    const X1 = x1 * S, Z1 = z1 * S, X2 = x2 * S, Z2 = z2 * S;
    for (let x = X1; x <= X2; x++) { raw("rail", x, Z1); raw("rail", x, Z2); }
    for (let z = Z1 + 1; z < Z2; z++) { raw("rail", X1, z); raw("rail", X2, z); }
  };
  for (let x = -2 * S; x <= 2 * S; x++) for (let z = 14 * S; z <= 17 * S; z++) raw("pathStone", x, z, 0, { vast: 1 });
  for (let x = -3 * S; x <= 3 * S; x++) for (let z = -3 * S; z <= 3 * S; z++) raw("pathRed", x, z, 0, { vast: 1 });
  add("hekPoort", 0, 18); add("treePalm", -3, 18); add("treePalm", 3, 18);
  rij("flowerRed", 17, -5, -4); rij("flowerYellow", 17, 4, 5);
  add("bankje", -2, 15); add("bankje", 2, 15); add("prullenbak", -2, 13); add("donatiebox", 2, 13);
  add("carousel", 0, 0); rij("flowerPurple", 13, -1, 1);
  add("ferris", 0, -12); add("swing", -8, -12);
  railRing(-9, -5, 9, 5); add("station", 0, -7); add("achtbaanKlein", 14, 0);
  add("patatkraam", -7, 12); add("drankkraam", 7, 12); add("ijscokraam", -10, 4); add("popcornkraam", 7, 7);
  add("bankje", -10, 12); add("bankje", 10, 12);
  verblijf(-17, 0, -11, 6, -14, ["cow", "sheep", "pig", "alpaca", "donkey"]);
  verblijf(-17, -9, -11, -3, -14, ["husky", "shibaInu", "pug", "wolf"]);
  verblijf(11, 3, 17, 9, 14, ["deer", "stag", "horse", "zebra"]);
  verblijf(10, -11, 18, -3, 14, ["velociraptor"]);
  add("bordDino", 14, -6);
  ["huisRood", "huisGeel", "huisGroen", "huisBlauw"].forEach((h, i) => add(h, -9 + i * 6, -17));
  for (let z = -10; z <= 14; z += 4) { add("tree", -5, z); add("treeOak", 5, z); }
  add("struik", -4, 8); add("struik", 4, 8); add("struik", -4, -8); add("struik", 4, -8);
  add("kei", 19, 0); add("kei", 16, -16);
  add("mushroom", -18, -18); add("mushroom", 18, -18);
  add("grasplukje", -2, -10); add("grasplukje", 2, -10);
  add("piramide", -30, -19); add("treePalm", -40, -30); add("treePalm", -20, -30);
  add("bankje", -39, -9); add("bankje", -21, -9);
  add("kubus", -35, 2); add("kegel", -22, 8); add("cilinder", -26, 13); add("bol", -37, 16); add("halvebol", -22, 22);
  add("flowerPurple", -34, -1); add("flowerYellow", -23, 4); add("flowerRed", -37, 12);
  add("klok", -38, 28); add("weegschaal", -33, 28); add("breukentaart", -28, 28); add("moestuin", -23, 28);
  add("telraam", -35, 32); add("parkkaart", -27, 32); add("bankje", -22, 27);
  add("eiffeltoren", 25, 12); add("raket", 33, 12); add("tempel", 25, 6); add("vulkaan", 33, 6);
  add("wereldbol", 25, 0); add("standbeeld", 33, 0); add("telescoop", 25, -6); add("kas", 33, -6);
  add("molen", 25, -12); add("weerstation", 33, -12); add("kompas", 29, 13); add("spaarpot", 29, -13);
  add("treeOak", 22, 3); add("treeOak", 22, -3); add("tree", 37, 3); add("tree", 37, -3);
  add("flowerRed", 29, 8); add("flowerYellow", 29, -8); add("bankje", 31, 4); add("bankje", 31, -4);
  add("zwembad", -30, 20); add("bordBouw", 18, 20); add("bordBouw", -14, -14);
  // leer-trail herplaatsing
  const trailIds = new Set(LEERTRAIL.map((t) => t.id));
  const behouden = L.filter((it) => !trailIds.has(it.assetId));
  for (const p of leertrailPlekken()) behouden.push({ assetId: p.id, cell: [p.x, p.z], rotation: p.hoek, price: 0 });
  return behouden;
}

// ── Blokkeer-cellen (footprint van vaste items, poorten uitgezonderd) ──
const layout = bouw();
const blokCel = new Map(); // "x,z" -> assetId
for (const it of layout) {
  const id = it.assetId;
  if (id === "hekPoort") continue;          // poort = doorgang
  if (!isVast(id)) continue;
  const r = botsR(id);
  for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) {
    blokCel.set(`${it.cell[0] + dx},${it.cell[1] + dz}`, id);
  }
}

// ── Pad-skelet: dicht bemonsterde waypoint-polylijn (cel-ruimte) ──
const wp = LINT_WAYPOINTS.map(([x, z]) => [x, z]);
const pad = [];
for (let i = 0; i < wp.length; i++) {
  const a = wp[i], b = wp[(i + 1) % wp.length];
  const steps = Math.max(1, Math.round(Math.hypot(b[0] - a[0], b[1] - a[1]) * 2));
  for (let s = 0; s < steps; s++) {
    const t = s / steps;
    pad.push([Math.round(a[0] + (b[0] - a[0]) * t), Math.round(a[1] + (b[1] - a[1]) * t)]);
  }
}

// ── Loop het pad af; meld blokkades op volgorde (per uniek object 1×) ──
console.log(`Pad-cellen: ${pad.length}, blokkeer-cellen: ${blokCel.size}`);
const gemeld = new Set();
const obstakels = [];
pad.forEach(([x, z], i) => {
  const id = blokCel.get(`${x},${z}`);
  if (id && !gemeld.has(id + "@")) {
    // uniek per object-plek: gebruik dichtstbijzijnde item van dit type
    const key = id;
    if (!gemeld.has(`${x},${z}:${id}`)) {
      obstakels.push({ volgorde: obstakels.length + 1, padStap: i, cel: [x, z], asset: id });
      gemeld.add(`${x},${z}:${id}`);
    }
  }
});
// dedup op object (zelfde asset binnen 4 cellen = zelfde object)
const uniek = [];
for (const o of obstakels) {
  if (uniek.some((u) => u.asset === o.asset && Math.abs(u.cel[0] - o.cel[0]) <= 4 && Math.abs(u.cel[1] - o.cel[1]) <= 4)) continue;
  uniek.push(o);
}
console.log(`\n🚧 Blokkades op het pad (op looprichting-volgorde):`);
uniek.slice(0, 12).forEach((o) => console.log(`  ${o.volgorde}. stap ${o.padStap}: '${o.asset}' op cel [${o.cel}]`));
console.log(`\nTotaal unieke blokkades: ${uniek.length}`);
