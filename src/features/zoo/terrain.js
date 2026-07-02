// terrain.js — het hoogteveld van de parkvloer. Een raster van hoogtes dat je
// kunt boetseren (tik = omhoog/omlaag met zachte penseel → natuurlijke glooiing).
// Alles (dieren, hekken, gebouwen, poppetje) volgt de hoogte via heightAt().
// Standaard helemaal vlak (alle hoogtes 0) → bestaande parken veranderen niet.

export const TER_EXT = 80;            // halve breedte in wereld-units (vloer ±80, 4× park sinds 2 jul)
export const TER_STEP = 2;           // afstand tussen rasterpunten
export const TER_N = (TER_EXT * 2) / TER_STEP + 1; // 41 punten per as
export const TER_SIZE = TER_EXT * 2; // 80
export const TER_SEG = TER_N - 1;    // 40 segmenten

export const MIN_H = -3.5;
export const MAX_H = 7;

// Blok-wereld (Mark 2 jul): de vloer wordt in blok-lagen getoond (Minecraft-
// look). Het boetseer-veld blijft glad; alleen weergave + neerzetten/lopen
// klikken vast op deze stap, zodat heuvels mooie terrassen worden.
export const BLOK_STAP = 1; // 1 m — zelfde maat als de bouwkubussen (2 jul)
export function blokHoogte(h) {
  return Math.round(h / BLOK_STAP) * BLOK_STAP;
}

export function flatField() {
  return new Float32Array(TER_N * TER_N);
}

const ix = (i, j) => i * TER_N + j;

// Hoogte op wereldpositie (x,z), bilineair geïnterpoleerd. 0 als geen veld.
export function heightAt(field, x, z) {
  if (!field) return 0;
  const fx = (x + TER_EXT) / TER_STEP;
  const fz = (z + TER_EXT) / TER_STEP;
  const i0 = Math.max(0, Math.min(TER_N - 1, Math.floor(fx)));
  const j0 = Math.max(0, Math.min(TER_N - 1, Math.floor(fz)));
  const i1 = Math.min(TER_N - 1, i0 + 1);
  const j1 = Math.min(TER_N - 1, j0 + 1);
  const tx = Math.max(0, Math.min(1, fx - i0));
  const tz = Math.max(0, Math.min(1, fz - j0));
  const a = field[ix(i0, j0)], b = field[ix(i1, j0)], c = field[ix(i0, j1)], d = field[ix(i1, j1)];
  return (a * (1 - tx) + b * tx) * (1 - tz) + (c * (1 - tx) + d * tx) * tz;
}

// Zacht penseel: verhoog/verlaag rond (x,z) met cosinus-afval → ronde glooiing.
// Geeft een NIEUW veld terug (voor React-state). radius in wereld-units.
export function applyBrush(field, x, z, delta, radius = 8) {
  const out = field ? Float32Array.from(field) : flatField();
  const r = radius;
  for (let i = 0; i < TER_N; i++) {
    const wx = -TER_EXT + i * TER_STEP;
    for (let j = 0; j < TER_N; j++) {
      const wz = -TER_EXT + j * TER_STEP;
      const dist = Math.hypot(wx - x, wz - z);
      if (dist >= r) continue;
      const fall = 0.5 + 0.5 * Math.cos((dist / r) * Math.PI); // 1 in midden → 0 aan rand
      let h = out[ix(i, j)] + delta * fall;
      h = Math.max(MIN_H, Math.min(MAX_H, h));
      out[ix(i, j)] = h;
    }
  }
  return out;
}

// Compact opslaan (hoogtes ×10, afgerond) / inladen. Vlak veld → null (klein).
export function serialize(field) {
  if (!field) return null;
  let any = false;
  const arr = new Array(field.length);
  for (let k = 0; k < field.length; k++) { const q = Math.round(field[k] * 10); arr[k] = q; if (q !== 0) any = true; }
  return any ? arr : null;
}

export function deserialize(arr) {
  if (!Array.isArray(arr)) return null;
  const f = flatField();
  if (arr.length === TER_N * TER_N) {
    for (let k = 0; k < f.length; k++) f[k] = (arr[k] || 0) / 10;
    return f;
  }
  // Migratie (park 4× groter, 2 jul): oud 41×41-veld gecentreerd inbedden in
  // het nieuwe 81×81-raster — bestaande heuvels/dalen blijven op hun plek.
  const oudN = Math.round(Math.sqrt(arr.length));
  if (oudN * oudN === arr.length && oudN < TER_N) {
    const off = (TER_N - oudN) >> 1;
    for (let i = 0; i < oudN; i++) {
      for (let j = 0; j < oudN; j++) {
        f[(i + off) * TER_N + (j + off)] = (arr[i * oudN + j] || 0) / 10;
      }
    }
    return f;
  }
  return null;
}
