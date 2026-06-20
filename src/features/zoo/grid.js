// grid.js — het raster van het park. Objecten "klikken" netjes op een vakje
// (snap to grid) zodat plaatsen voorspelbaar is en plekken bezet/vrij zijn.
//
// 1 cel = CELL units (≈ meter). Het raster loopt van -HALF..HALF in beide
// richtingen. cellToWorld geeft het midden van een vakje.

export const CELL = 2;       // celgrootte in wereld-units
export const HALF = 4;       // vakjes vanaf het midden (-4..4 => 9×9 raster)
export const GRID_SIZE = HALF * 2 * CELL; // totale rasterbreedte (gridHelper)
export const GRID_DIV = HALF * 2;         // aantal deellijnen

// Wereldpunt → dichtstbijzijnde celcoördinaat [gx, gz] (gehele getallen).
export function snapToCell(x, z) {
  const gx = Math.max(-HALF, Math.min(HALF, Math.round(x / CELL)));
  const gz = Math.max(-HALF, Math.min(HALF, Math.round(z / CELL)));
  return [gx, gz];
}

// Celcoördinaat → wereldpositie (midden van het vakje), [x, z].
export function cellToWorld(gx, gz) {
  return [gx * CELL, gz * CELL];
}

// Stabiele sleutel om bezet/vrij te checken.
export function cellKey(gx, gz) {
  return `${gx},${gz}`;
}
