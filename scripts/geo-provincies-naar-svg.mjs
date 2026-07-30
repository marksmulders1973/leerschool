// Genereert vereenvoudigde SVG-paden van de 12 provincies uit open CBS-data
// (cartomap.github.io/nl, CC-BY Kadaster/CBS). Output: src/learnPaths/nederlandKaartPaths.js
// Gebruik:  node scripts/geo-provincies-naar-svg.mjs [pad-naar-provincie.geojson]
// Zonder argument wordt %TEMP%/provincie_2025.geojson gebruikt (eerder gedownload).

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const bron = process.argv[2] || join(process.env.TEMP || "/tmp", "provincie_2025.geojson");
const geo = JSON.parse(readFileSync(bron, "utf8"));

// ── Projectie: WGS84 → viewBox 280x320 (kaartvlak x 10..270, y 24..292) ──────
const K = Math.cos((52.2 * Math.PI) / 180); // breedtegraad-correctie
let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
const rawPt = ([lon, lat]) => [lon * K, -lat];
for (const f of geo.features)
  for (const poly of f.geometry.type === "MultiPolygon" ? f.geometry.coordinates : [f.geometry.coordinates])
    for (const [x, y] of poly[0].map(rawPt)) {
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
    }
const PAD = { x0: 10, x1: 270, y0: 24, y1: 292 };
const s = Math.min((PAD.x1 - PAD.x0) / (maxX - minX), (PAD.y1 - PAD.y0) / (maxY - minY));
const ox = PAD.x0 + ((PAD.x1 - PAD.x0) - s * (maxX - minX)) / 2;
const oy = PAD.y0 + ((PAD.y1 - PAD.y0) - s * (maxY - minY)) / 2;
const proj = ([lon, lat]) => {
  const [x, y] = rawPt([lon, lat]);
  return [ox + (x - minX) * s, oy + (y - minY) * s];
};

// ── Douglas-Peucker-vereenvoudiging in pixel-ruimte ──────────────────────────
function simplify(pts, tol) {
  if (pts.length < 4) return pts;
  const sq = (a, b, p) => {
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const l2 = dx * dx + dy * dy;
    if (!l2) return (p[0] - a[0]) ** 2 + (p[1] - a[1]) ** 2;
    let t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l2;
    t = Math.max(0, Math.min(1, t));
    return (p[0] - (a[0] + t * dx)) ** 2 + (p[1] - (a[1] + t * dy)) ** 2;
  };
  const keep = new Array(pts.length).fill(false);
  keep[0] = keep[pts.length - 1] = true;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [i0, i1] = stack.pop();
    let dmax = 0, idx = -1;
    for (let i = i0 + 1; i < i1; i++) {
      const d = sq(pts[i0], pts[i1], pts[i]);
      if (d > dmax) { dmax = d; idx = i; }
    }
    if (dmax > tol * tol) { keep[idx] = true; stack.push([i0, idx], [idx, i1]); }
  }
  return pts.filter((_, i) => keep[i]);
}

const ringArea = (pts) => Math.abs(pts.reduce((a, p, i) => {
  const q = pts[(i + 1) % pts.length];
  return a + (p[0] * q[1] - q[0] * p[1]);
}, 0) / 2);

const naamMap = { "Fryslân": "Friesland" };
const rond = (n) => Math.round(n * 10) / 10;
const PROV_PATHS = {};
const PROV_LABELS = {};

for (const f of geo.features) {
  const naam = naamMap[f.properties.statnaam] || f.properties.statnaam;
  const polys = f.geometry.type === "MultiPolygon" ? f.geometry.coordinates : [f.geometry.coordinates];
  const delen = [];
  let grootste = null, grootsteOpp = 0;
  for (const poly of polys) {
    const ring = poly[0].map(proj);
    const opp = ringArea(ring);
    if (opp < 6) continue; // mini-eilandjes overslaan (< ~6 px²)
    const simp = simplify(ring, 1.1);
    if (simp.length < 4) continue;
    delen.push("M" + simp.map(([x, y]) => `${rond(x)} ${rond(y)}`).join("L") + "Z");
    if (opp > grootsteOpp) { grootsteOpp = opp; grootste = ring; }
  }
  PROV_PATHS[naam] = delen.join("");
  // Label-anker: zwaartepunt van de grootste ring
  const c = grootste.reduce((a, p) => [a[0] + p[0], a[1] + p[1]], [0, 0]).map((v) => rond(v / grootste.length));
  PROV_LABELS[naam] = c;
}

// ── Referentiepunten (steden + rivier-ankers) in dezelfde projectie ──────────
const punten = {
  Amsterdam: [4.897, 52.377], Rotterdam: [4.469, 51.916], DenHaag: [4.301, 52.07],
  Utrecht: [5.121, 52.09], Eindhoven: [5.469, 51.441],
  Lobith: [6.11, 51.85], Nijmegen: [5.86, 51.84], Arnhem: [5.91, 51.98],
  IJsselKop: [5.97, 52.02], IJsselMond: [5.83, 52.57], Zwolle: [6.09, 52.51],
  MaasZuid: [5.69, 50.78], Venlo: [6.17, 51.37], DenBosch: [5.3, 51.7],
  MaasMond: [4.4, 51.88], WesterscheldeOost: [4.25, 51.4], WesterscheldeWest: [3.45, 51.45],
  IJsselmeerNoord: [5.35, 53.05], IJsselmeerZuid: [5.45, 52.6], Afsluitdijk: [5.2, 53.05],
};
const PUNTEN = Object.fromEntries(Object.entries(punten).map(([k, v]) => [k, proj(v).map(rond)]));

const uit = `// GEGENEREERD — niet met de hand bewerken. Bron: scripts/geo-provincies-naar-svg.mjs
// Kaartdata: cartomap.github.io/nl (provincie 2025) — © Kadaster/CBS, CC-BY 4.0.
// Vereenvoudigde provincie-omtrekken geprojecteerd naar viewBox 280x320.

export const PROV_PATHS = ${JSON.stringify(PROV_PATHS, null, 1)};

export const PROV_LABELS = ${JSON.stringify(PROV_LABELS, null, 1)};

export const KAART_PUNTEN = ${JSON.stringify(PUNTEN, null, 1)};
`;
writeFileSync(new URL("../src/learnPaths/nederlandKaartPaths.js", import.meta.url), uit);
const totaal = Object.values(PROV_PATHS).join("").length;
console.log(`✓ 12 provincies → nederlandKaartPaths.js (${totaal} tekens pad-data)`);
console.log("Labels:", JSON.stringify(PROV_LABELS));
console.log("Punten:", JSON.stringify(PUNTEN));
