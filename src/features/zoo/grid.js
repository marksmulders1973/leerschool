// grid.js — het raster van het park. Items hebben een footprint in vakjes:
// een dier-verblijf is 3×3 (DEFAULT_CELLS), een pad of los hek is 1×1. Alles
// snapt op het raster en mag niet overlappen of in de draaimolen-zone vallen.

export const CELL = 2;        // celgrootte in wereld-units (≈ meter)
export const HALF = 6;        // vakjes vanaf het midden (-6..6 => 13×13 raster)
export const GRID_SIZE = HALF * 2 * CELL;
export const GRID_DIV = HALF * 2;

export const DEFAULT_CELLS = 3;             // verblijf = 3×3 vakjes
export const ENCLOSURE_CELLS = DEFAULT_CELLS;
export const ENCLOSURE_SIZE = DEFAULT_CELLS * CELL;

const R = (cells) => Math.floor(cells / 2);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export function snapToCell(x, z, cells = DEFAULT_CELLS) {
  const lim = HALF - R(cells);
  return [clamp(Math.round(x / CELL), -lim, lim), clamp(Math.round(z / CELL), -lim, lim)];
}

export function cellToWorld(gx, gz) {
  return [gx * CELL, gz * CELL];
}

export function cellKey(gx, gz) {
  return `${gx},${gz}`;
}

// Alle vakjes die een item met midden [gx,gz] en footprint `cells` beslaat.
export function footprint(gx, gz, cells = DEFAULT_CELLS) {
  const r = R(cells);
  const out = [];
  for (let dx = -r; dx <= r; dx++) {
    for (let dz = -r; dz <= r; dz++) out.push([gx + dx, gz + dz]);
  }
  return out;
}

// Past een item met footprint `cells` op [gx,gz] gezien de bezette vakjes?
// (Niets is meer gereserveerd: ook de draaimolen is een gewoon item.)
export function isPlaatsbaar(gx, gz, bezetteCellen, cells = DEFAULT_CELLS) {
  const r = R(cells);
  const lim = HALF - r;
  if (gx < -lim || gx > lim || gz < -lim || gz > lim) return false;
  for (const [cx, cz] of footprint(gx, gz, cells)) {
    if (bezetteCellen.has(cellKey(cx, cz))) return false;
  }
  return true;
}

// Set van bezette vakjes uit de geplaatste items (elk met eigen footprint via
// cellsOf(assetId)). Optioneel één index overslaan (bv. tijdens verplaatsen).
export function bezetteCellenVan(items, skipIdx = -1, cellsOf = () => DEFAULT_CELLS) {
  const s = new Set();
  items.forEach((it, i) => {
    if (i === skipIdx) return;
    for (const [cx, cz] of footprint(it.cell[0], it.cell[1], cellsOf(it.assetId))) s.add(cellKey(cx, cz));
  });
  return s;
}
