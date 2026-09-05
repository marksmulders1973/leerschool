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

// hoogte van het eiland zelf (gras/strand), zónder de vulkaan
export function eilandBasis(x, z) {
  const r = Math.hypot(x, z);
  if (r <= LAND_R) return -0.07;
  const t = Math.min(1, (r - LAND_R) / (STRAND_TOT - LAND_R));
  return -0.07 - t * t * (3 - 2 * t) * STRAND_DIEP;
}

// 🌋 DE VULKAAN (Mark 6 sep 2026: "Brian's vulkaan in mijn park, in plaats van
// één van de bergen — past bij aardrijkskunde"). De vorm is 1:1 Brian's
// Mayon-kegel uit eiland.html (H · (1 - r/R)^1,5, erosiegeulen die halverwege
// het diepst zijn, een voet die niet perfect rond is, en bovenop een echte
// kraterkom met opstaande rand en vlakke bodem voor het lavameer), op park-
// maat, zuidoost van het park aan de kust. Omdat de
// hoogte hier in buitenHoogte zit, kun je hem écht beklimmen en in de krater
// kijken — dezelfde functie als waar je op loopt.
// Maat (Mark 6 sep: "ongeveer even groot als de andere bergen" — die zijn ~100 m
// hoog, 90-140 m breed): 210 m breed, kraterrand op ~90 m; het middelpunt ligt op de kustlijn, zodat de
// achterkant uit zee oprijst en de voorkant tot vlak bij het park-hek komt.
export const VULKAAN = { x: 165, z: 268, R: 105, H: 115, kraterR: 14, kraterDiep: 9 };
export function vulkaanInfo(x, z) {
  const dx = x - VULKAAN.x, dz = z - VULKAAN.z;
  const r = Math.hypot(dx, dz);
  if (r > VULKAAN.R * 1.12) return null;
  const hoek = Math.atan2(dz, dx);
  const rond = 1 + 0.06 * Math.sin(hoek * 3 + 0.7) + 0.04 * Math.sin(hoek * 7 + 2.1);
  const u = Math.max(0, 1 - r / (VULKAAN.R * rond));           // 0 = voet, 1 = top
  let h = VULKAAN.H * Math.pow(u, 1.5);
  const midden = Math.sin(Math.PI * Math.min(1, u * 1.12));
  const g1 = Math.pow(0.5 + 0.5 * Math.sin(hoek * 14 + 1.8 * Math.sin(hoek * 3 + r * 0.1)), 5);
  const g2 = Math.pow(0.5 + 0.5 * Math.sin(hoek * 37 + 2.5 * Math.sin(hoek * 5 + 1.3)), 4);
  const geul = g1 * 0.8 + g2 * 0.2;
  h -= geul * 5 * midden;
  const rr = VULKAAN.kraterR * 1.15;
  if (r < rr) {
    const z1 = Math.min(1, Math.max(0, (rr - r) / (rr - VULKAAN.kraterR)));
    const lip = z1 * z1 * (3 - 2 * z1);
    const basisRond = VULKAAN.H * Math.pow(Math.max(0, 1 - rr / (VULKAAN.R * rond)), 1.5);
    const basisVlak = VULKAAN.H * Math.pow(Math.max(0, 1 - rr / VULKAAN.R), 1.5);
    const basis = basisRond + (basisVlak - basisRond) * lip;
    const z2 = Math.min(1, Math.max(0, (VULKAAN.kraterR - r) / (VULKAAN.kraterR * 0.3)));
    const kom = z2 * z2 * (3 - 2 * z2);
    h = basis + 1.2 * lip - kom * (VULKAAN.kraterDiep + 1.2);
  }
  return { h: Math.max(0, h), u, geul, r };
}
export function vulkaanHoogte(x, z) { const vi = vulkaanInfo(x, z); return vi ? vi.h : 0; }
// de krater ligt waterpas: de vlakke bodem waar het lavameer in ligt
export const KRATER_BODEM_Y = eilandBasis(VULKAAN.x, VULKAAN.z) + vulkaanHoogte(VULKAAN.x, VULKAAN.z);
export const KRATER_RAND_Y = eilandBasis(VULKAAN.x, VULKAAN.z) + vulkaanHoogte(VULKAAN.x + VULKAAN.kraterR, VULKAAN.z);

// hoogte van het land buiten het park-terrein (eiland + vulkaan)
export function buitenHoogte(x, z) {
  return eilandBasis(x, z) + vulkaanHoogte(x, z);
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
  // op de vulkaanflank (die achter de kustlijn uit zee oprijst) zwem je niet
  return buitenHoogte(x, z) < ZEE_Y - 0.35 || (Math.hypot(x, z) > KUST_R + 3 && vulkaanHoogte(x, z) < 1);
}
