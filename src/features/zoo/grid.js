// grid.js — het raster van het park. Dieren komen mét een ruim verblijf: elk
// verblijf beslaat een blok van ENCLOSURE_CELLS×ENCLOSURE_CELLS vakjes, snapt
// netjes op het raster, en mag niet overlappen met andere verblijven, met de
// draaimolen-zone in het midden, of buiten het raster vallen.

export const CELL = 2;        // celgrootte in wereld-units (≈ meter)
export const HALF = 6;        // vakjes vanaf het midden (-6..6 => 13×13 raster)
export const GRID_SIZE = HALF * 2 * CELL;
export const GRID_DIV = HALF * 2;

export const ENCLOSURE_CELLS = 3;           // verblijf = 3×3 vakjes (6×6 m)
export const ENCLOSURE_SIZE = ENCLOSURE_CELLS * CELL;
const R = Math.floor(ENCLOSURE_CELLS / 2);  // halve breedte in vakjes (1)

// Wereldpunt → dichtstbijzijnde celcoördinaat [gx, gz] (gehele getallen),
// begrensd zodat een heel verblijf binnen het raster past.
export function snapToCell(x, z) {
  const lim = HALF - R;
  const gx = Math.max(-lim, Math.min(lim, Math.round(x / CELL)));
  const gz = Math.max(-lim, Math.min(lim, Math.round(z / CELL)));
  return [gx, gz];
}

export function cellToWorld(gx, gz) {
  return [gx * CELL, gz * CELL];
}

export function cellKey(gx, gz) {
  return `${gx},${gz}`;
}

// Alle vakjes die een verblijf met midden [gx,gz] beslaat.
export function footprint(gx, gz) {
  const out = [];
  for (let dx = -R; dx <= R; dx++) {
    for (let dz = -R; dz <= R; dz++) out.push([gx + dx, gz + dz]);
  }
  return out;
}

// De draaimolen-zone in het midden is gereserveerd (daar geen verblijf).
export function isReserved(gx, gz) {
  return Math.abs(gx) <= 1 && Math.abs(gz) <= 1;
}

// Past een verblijf met midden [gx,gz] gezien de al-bezette vakjes?
export function isPlaatsbaar(gx, gz, bezetteCellen) {
  const lim = HALF - R;
  if (gx < -lim || gx > lim || gz < -lim || gz > lim) return false;
  for (const [cx, cz] of footprint(gx, gz)) {
    if (isReserved(cx, cz)) return false;
    if (bezetteCellen.has(cellKey(cx, cz))) return false;
  }
  return true;
}

// Bouwt de set bezette vakjes uit een lijst geplaatste verblijven
// (optioneel één index overslaan, bv. het verblijf dat je aan het verplaatsen bent).
export function bezetteCellenVan(items, skipIdx = -1) {
  const s = new Set();
  items.forEach((it, i) => {
    if (i === skipIdx) return;
    for (const [cx, cz] of footprint(it.cell[0], it.cell[1])) s.add(cellKey(cx, cz));
  });
  return s;
}
