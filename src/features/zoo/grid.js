// grid.js — het raster van het park. Items hebben een footprint in vakjes:
// een dier-verblijf is 3×3 (DEFAULT_CELLS), een pad of los hek is 1×1. Alles
// snapt op het raster en mag niet overlappen of in de draaimolen-zone vallen.

// 🐢 Low-end-detectie (park-zwerm 17 jul): op zwakke toestellen gaan
// schaduwen uit en dpr naar 1 — de doelgroep speelt op goedkope Androids.
// Hier (en niet in ZooScene) zodat ParkProps 'm zonder import-cyclus kan lezen.
export const LOW_END = (() => {
  try {
    return (navigator.deviceMemory || 8) <= 4 || (navigator.hardwareConcurrency || 8) <= 4;
  } catch { return false; }
})();

export const CELL = 2;        // celgrootte in wereld-units (≈ meter)
export const HALF = 40;       // vakjes vanaf het midden (-40..40 => 81×81 raster).
                              // 4× zo groot sinds 2 jul (Mark); vloer loopt mee tot ±80.
export const GRID_SIZE = HALF * 2 * CELL;
export const GRID_DIV = HALF * 2;

// 🧊 Bouw-kubussen (Mark 2 jul, "kleinere blokken"): kubussen van 1×1×1 m op
// een eigen fijn raster — 2×2 kubussen per park-vakje, zoals Minecraft.
// kub-coördinaat kx = Math.floor(wereldX / KUB); centrum = kx + 0.5.
export const KUB = 1;

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
export function bezetteCellenVan(items, skipIdx = -1, cellsOf = () => DEFAULT_CELLS, blokkeert = () => true) {
  const s = new Set();
  items.forEach((it, i) => {
    if (i === skipIdx) return;
    if (!blokkeert(it.assetId)) return; // niet-blokkerend (bv. paden) → je mag er iets op zetten
    for (const [cx, cz] of footprint(it.cell[0], it.cell[1], cellsOf(it.assetId))) s.add(cellKey(cx, cz));
  });
  return s;
}
