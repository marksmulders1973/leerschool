// water.js — meertjes in dalen. Een "water-bron" (tik-cel) laat het dal eromheen
// vollopen: we flood-fillen vanaf de tik alle aangrenzende vakjes die lager dan
// het waterpeil liggen (een kuil/dal). Het wateroppervlak ligt net onder het
// maaiveld, zodat een gegraven dal eruitziet als een meertje.
import { heightAt } from "./terrain";
import { CELL, HALF, cellKey } from "./grid";

export const WATER_FILL_BELOW = -0.2;  // vakjes lager dan dit kunnen water vasthouden
export const WATER_SURFACE_Y = -0.05;  // hoogte van het wateroppervlak (~maaiveld)

// Hoogte van een rastervakje-midden in het terrein.
function celHoogte(terrain, gx, gz) {
  return heightAt(terrain, gx * CELL, gz * CELL);
}

// Geeft alle water-vakjes terug: per bron flood-fill over aaneengesloten lagere
// vakjes (4-richtingen), begrensd door de rand en door hogere grond (de oever).
export function floodWater(terrain, seeds) {
  const filled = new Set();
  if (!Array.isArray(seeds)) return [];
  const laag = (gx, gz) => celHoogte(terrain, gx, gz) < WATER_FILL_BELOW;
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

// Ligt vakje [gx,gz] onder water bij dit veld + deze bronnen?
export function isWaterCel(cells, gx, gz) {
  return cells.some((c) => c[0] === gx && c[1] === gz);
}
