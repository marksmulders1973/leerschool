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

// 🏔️ ECHTE BERGEN (Mark 6 sep 2026, WhatsApp: "tussen de bergen wil ik een
// loopbrug … sneeuw op de berg … een kabelbaan naar boven … met de slee naar
// beneden"). De grijze bergen aan de kust waren tot nu toe puur decor zonder
// hoogte of botsing: je liep er dwars doorheen. Deze twee — de dichtstbijzijnde
// buren van de vulkaan — zijn nu ÉCHT: hun vorm zit hier in de hoogtefunctie,
// net als de vulkaan, zodat je erop kunt lopen en de hangbrug er aan vast kan.
// Posities = waar de decorbergen stonden (Buitenwereld, seed 20260702, ×2).
export const SNEEUW_Y = 50;        // de sneeuwgrens: hierboven ligt sneeuw (m boven zee)
export const BERGEN = [
  { id: "oostberg", x: 238, z: 145, R: 60, H: 88, seed: 1.3 },
  { id: "kaapberg", x: 284, z: 47, R: 68, H: 104, seed: 2.9 },
];
export function bergInfo(x, z) {
  let best = null;
  for (const b of BERGEN) {
    const dx = x - b.x, dz = z - b.z;
    const r = Math.hypot(dx, dz);
    if (r > b.R * 1.1) continue;
    const hoek = Math.atan2(dz, dx);
    const rond = 1 + 0.08 * Math.sin(hoek * 3 + b.seed) + 0.05 * Math.sin(hoek * 5 + 2 * b.seed);
    const u = Math.max(0, 1 - r / (b.R * rond));                 // 0 = voet, 1 = top
    let h = b.H * Math.pow(u, 1.35);
    // ribbels: richels die van de top naar beneden lopen (graniet, geen gladde bult)
    const ribbel = 0.5 + 0.5 * Math.sin(hoek * 9 + b.seed * 3 + Math.sin(hoek * 2) * 1.5);
    h += b.H * 0.05 * ribbel * Math.sin(Math.PI * Math.min(1, u * 1.1));
    if (!best || h > best.h) best = { h: Math.max(0, h), u, r, berg: b, ribbel };
  }
  return best;
}
export function bergHoogte(x, z) { const bi = bergInfo(x, z); return bi ? bi.h : 0; }

// 🌉 DE HANGBRUG: van de vulkaanflank naar de Oostberg, over de kloof ertussen.
// Beide ankers liggen op dezelfde hoogte (BRUG.H boven zee) op de lijn tussen de
// twee toppen; het dek hangt er licht doorzakkend tussen. De dek-hoogte zit in
// buitenHoogte zodat je er écht over kunt lopen; de leuningen zijn een muur
// (brugLeuning → isSolid) zodat je er niet vanaf loopt.
export const BRUG = (() => {
  const H = 34, ZAK = 2.2, BREED = 2.2;
  const b = BERGEN[0];
  const dx = b.x - VULKAAN.x, dz = b.z - VULKAAN.z, L0 = Math.hypot(dx, dz), ux = dx / L0, uz = dz / L0;
  // vanaf elke top naar buiten lopen tot de flank onder H duikt (numeriek)
  const zoek = (cx, cz, sx, sz, hoogte) => {
    let lo = 0, hi = L0;
    for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (eilandBasis(cx + sx * m, cz + sz * m) + hoogte(cx + sx * m, cz + sz * m) > H) lo = m; else hi = m; }
    return (lo + hi) / 2;
  };
  const tA = zoek(VULKAAN.x, VULKAAN.z, ux, uz, vulkaanHoogte);
  const tB = zoek(b.x, b.z, -ux, -uz, bergHoogte);
  const ax = VULKAAN.x + ux * tA, az = VULKAAN.z + uz * tA;
  const bx = b.x - ux * tB, bz = b.z - uz * tB;
  const L = Math.hypot(bx - ax, bz - az);
  return { H, ZAK, BREED, ax, az, bx, bz, ux, uz, L, rot: Math.atan2(ux, uz) };
})();
// hoogte van het brugdek op (x,z), of null als je niet op de brug staat
export function brugDekY(t) { return BRUG.H - BRUG.ZAK * 4 * t * (1 - t); }
export function brugHoogte(x, z) {
  const px = x - BRUG.ax, pz = z - BRUG.az;
  const t = (px * BRUG.ux + pz * BRUG.uz) / BRUG.L;
  if (t < 0 || t > 1) return null;
  const zij = Math.abs(px * BRUG.uz - pz * BRUG.ux);
  if (zij > BRUG.BREED / 2) return null;
  return brugDekY(t) + 0.12;
}
// de leuningen: een smalle muur langs beide zijden van het dek
export function brugLeuning(x, z) {
  const px = x - BRUG.ax, pz = z - BRUG.az;
  const t = (px * BRUG.ux + pz * BRUG.uz) / BRUG.L;
  if (t < -0.02 || t > 1.02) return false;
  const zij = Math.abs(px * BRUG.uz - pz * BRUG.ux);
  return zij > BRUG.BREED / 2 - 0.15 && zij < BRUG.BREED / 2 + 0.6;
}

// hoogte van het land buiten het park-terrein (eiland + vulkaan + bergen + brugdek)
export function buitenHoogte(x, z) {
  const grond = eilandBasis(x, z) + vulkaanHoogte(x, z) + bergHoogte(x, z);
  const dek = brugHoogte(x, z);
  return dek != null && dek > grond ? dek : grond;
}

// de kustlijn: de straal waar het strand precies op zeeniveau ligt (numeriek)
export const KUST_R = (() => {
  let lo = LAND_R, hi = STRAND_TOT;
  for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (eilandBasis(m, 0) > ZEE_Y) lo = m; else hi = m; }
  return (lo + hi) / 2;
})();
export const GRENS_R = KUST_R + ZWEM_TOT;

// sta je in zee? (dieper dan ~35 cm water onder je voeten)
export function inZee(x, z) {
  // op de vulkaan- of bergflank (die achter de kustlijn uit zee oprijst) zwem je niet
  return buitenHoogte(x, z) < ZEE_Y - 0.35 || (Math.hypot(x, z) > KUST_R + 3 && vulkaanHoogte(x, z) + bergHoogte(x, z) < 1);
}
