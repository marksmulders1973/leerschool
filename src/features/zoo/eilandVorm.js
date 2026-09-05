// eilandVorm.js — het park ligt op een EILAND (Mark 5 sep 2026: "zee rondom het
// park, en je kunt 20 meter de zee in tot je niet meer kan").
//
// Eén plek waar de vorm van het eiland staat, zodat de grond (Buitenwereld), de
// zee, de speler (lopen/zwemmen) en de begrenzing exact dezelfde getallen
// gebruiken. Alles in wereld-meters, gemeten vanaf het parkmidden (0,0).
//
//   ├── park-terrein: vierkant ±160 (TER_EXT), zelf te boetseren
//   ├── land: gras tot LAND_R — hier staan bos, heuvels, bergen, meertje, weggetje
//   ├── strand: van LAND_R naar STRAND_TOT loopt het zand zacht omlaag (2,4 m)
//   ├── kustlijn: waar het strand onder ZEE_Y duikt (KUST_R)
//   └── zee: tot de horizon; je mag ZWEM_TOT meter voorbij de kustlijn (GRENS_R)
export const LAND_R = 300;
export const STRAND_TOT = 380;
export const STRAND_DIEP = 2.4;    // hoe diep het zand uiteindelijk onder water ligt
export const ZEE_Y = -0.6;         // zeeniveau (de vijvers in het park liggen op -0,05)
export const ZWEM_TOT = 20;        // zo ver mag je de zee in

// hoogte van het land buiten het park-terrein
export function buitenHoogte(x, z) {
  const r = Math.hypot(x, z);
  if (r <= LAND_R) return -0.07;
  const t = Math.min(1, (r - LAND_R) / (STRAND_TOT - LAND_R));
  return -0.07 - t * t * (3 - 2 * t) * STRAND_DIEP;
}

// de kustlijn: de straal waar het strand precies op zeeniveau ligt (numeriek)
export const KUST_R = (() => {
  let lo = LAND_R, hi = STRAND_TOT;
  for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (buitenHoogte(m, 0) > ZEE_Y) lo = m; else hi = m; }
  return (lo + hi) / 2;
})();
export const GRENS_R = KUST_R + ZWEM_TOT;

// sta je in zee? (dieper dan ~35 cm water onder je voeten)
export function inZee(x, z) {
  return Math.hypot(x, z) > KUST_R + 3 || buitenHoogte(x, z) < ZEE_Y - 0.35;
}
