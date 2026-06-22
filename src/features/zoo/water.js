// water.js — stromend water + meertjes. Een "waterbron" (tik-cel) laat water de
// laagste weg naar beneden zoeken: vanaf de bron stappen we telkens naar de
// laagste buur (steilste afdaling) → dat is de BEEK. Het water volgt zo de
// geultjes die je met de boetseerder graaft. Aan het eind (een kuil/dal) vormt
// zich een MEERTJE (flood-fill van de lagere vakjes). Alles wordt live berekend
// uit het terrein + de bronnen — er wordt niets extra opgeslagen.
import { heightAt } from "./terrain";
import { CELL, HALF, cellKey } from "./grid";

export const WATER_FILL_BELOW = -0.2;  // vakjes lager dan dit houden water vast (meertje)
export const WATER_SURFACE_Y = -0.05;  // hoogte van een stilstaand wateroppervlak (~maaiveld)

const NB8 = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
const H = (terrain, gx, gz) => heightAt(terrain, gx * CELL, gz * CELL);

// Steilste-afdaling-pad vanaf een bron (geordend van boven naar beneden). Stopt
// in een laagste punt of aan de rand. Dit is het stroompad ("beek").
export function flowPath(terrain, sx, sz) {
  const path = [[sx, sz]];
  const seen = new Set([cellKey(sx, sz)]);
  let x = sx, z = sz;
  for (let i = 0; i < 400; i++) {
    let best = null, bh = H(terrain, x, z);
    for (const [dx, dz] of NB8) {
      const nx = x + dx, nz = z + dz;
      if (nx < -HALF || nx > HALF || nz < -HALF || nz > HALF) continue;
      if (seen.has(cellKey(nx, nz))) continue;
      const nh = H(terrain, nx, nz);
      if (nh < bh - 0.002) { bh = nh; best = [nx, nz]; }
    }
    if (!best) break; // laagste punt bereikt
    x = best[0]; z = best[1];
    seen.add(cellKey(x, z));
    path.push(best);
  }
  return path;
}

// Meertje: flood-fill vanaf bron-cellen over aaneengesloten vakjes lager dan het
// waterpeil (een kuil/dal), begrensd door de rand en hogere grond (de oever).
export function floodWater(terrain, seeds) {
  const filled = new Set();
  if (!Array.isArray(seeds)) return [];
  const laag = (gx, gz) => H(terrain, gx, gz) < WATER_FILL_BELOW;
  for (const s of seeds) {
    if (!Array.isArray(s)) continue;
    const sx = s[0], sz = s[1];
    if (!laag(sx, sz) || filled.has(cellKey(sx, sz))) continue;
    const stack = [[sx, sz]];
    while (stack.length) {
      const [x, z] = stack.pop();
      if (x < -HALF || x > HALF || z < -HALF || z > HALF) continue;
      const k = cellKey(x, z);
      if (filled.has(k) || !laag(x, z)) continue;
      filled.add(k);
      stack.push([x + 1, z], [x - 1, z], [x, z + 1], [x, z - 1]);
    }
  }
  return [...filled].map((k) => k.split(",").map(Number));
}

// Alles om water te tekenen: per bron een beek-pad (geordend) + alle meertje-
// vakjes (aan de uiteindes van de beken). `streams` = lijst van paden,
// `pools` = unieke meertje-vakjes.
export function computeWater(terrain, seeds) {
  const streams = [];
  const poolSet = new Set();
  if (Array.isArray(seeds)) {
    for (const s of seeds) {
      if (!Array.isArray(s)) continue;
      const path = flowPath(terrain, s[0], s[1]);
      streams.push(path);
      const end = path[path.length - 1];
      for (const c of floodWater(terrain, [end])) poolSet.add(cellKey(c[0], c[1]));
    }
  }
  const pools = [...poolSet].map((k) => k.split(",").map(Number));
  return { streams, pools };
}

// Hoort vakje [gx,gz] bij het water van bron `seed` (beek of meertje)?
export function bronRaaktCel(terrain, seed, gx, gz) {
  const path = flowPath(terrain, seed[0], seed[1]);
  if (path.some((c) => c[0] === gx && c[1] === gz)) return true;
  const end = path[path.length - 1];
  return floodWater(terrain, [end]).some((c) => c[0] === gx && c[1] === gz);
}

// Wereldhoogte van een vakje-midden (voor het tekenen van de beek op de helling).
export function celWereldHoogte(terrain, gx, gz) {
  return H(terrain, gx, gz);
}
