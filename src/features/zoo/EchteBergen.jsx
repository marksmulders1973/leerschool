// 🏔️ EchteBergen (Mark 6 sep 2026, WhatsApp-plan met Brian): de twee bergen
// naast de vulkaan zijn geen decor meer maar echt terrein — hun vorm zit in
// eilandVorm.js (bergInfo) en wordt hier getekend met hetzelfde polaire rooster
// als de vulkaan. Kleur van onder naar boven: gras → graniet → boven de
// sneeuwgrens (SNEEUW_Y) wit. Richels iets donkerder, zodat de berg vorm heeft.
// De decor-bult die hier stond vervalt in Buitenwereld (zelfde regel als bij de
// vulkaan). Je kunt erop lopen: Player leest buitenHoogte.
import { useMemo } from "react";
import { BufferGeometry, Float32BufferAttribute, Color, MeshStandardMaterial, DoubleSide } from "three";
import { BERGEN, bergInfo, eilandBasis, SNEEUW_Y } from "./eilandVorm";
import { granietTextuur } from "./realisme";
import { LOW_END } from "./grid";

const RINGEN = LOW_END ? 40 : 64, SPAKEN = LOW_END ? 72 : 120;
const K_GRAS = new Color("#6a9e4c"), K_GRAS2 = new Color("#7fae55"), K_ROTS = new Color("#8d8a85"), K_ROTS2 = new Color("#7f7d79");
const K_RICHEL = new Color("#5e5b57"), K_SNEEUW = new Color("#f2f5f7");
const zacht = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

function bergGeometrie(b) {
  const pos = [], kleur = [], uv = [], idx = [];
  const c = new Color();
  for (let k = 0; k <= RINGEN; k++) {
    const s = k / RINGEN;
    const r = b.R * 1.1 * Math.pow(1 - s, 1.4);
    for (let m = 0; m <= SPAKEN; m++) {
      const hoek = (m / SPAKEN) * Math.PI * 2;
      const x = b.x + Math.cos(hoek) * r, z = b.z + Math.sin(hoek) * r;
      const bi = bergInfo(x, z);
      const h = bi && bi.berg === b ? bi.h : 0;
      const ribbel = bi && bi.berg === b ? bi.ribbel : 0;
      // skirt: waar de berg lager is dan ~1,5 m duikt het vlak onder het gras
      const skirt = 0.6 * Math.max(0, 1 - h / 1.5);
      const basis = eilandBasis(x, z);
      const y = basis + h - skirt;
      pos.push(x, y, z);
      uv.push(hoek * 4, r * 0.1);
      const t = h / b.H;
      const vlek = 0.5 + 0.5 * Math.sin(x * 0.17 + 0.4) * Math.cos(z * 0.23 + 1.1);
      c.copy(K_GRAS).lerp(K_GRAS2, vlek);
      c.lerp(vlek > 0.5 ? K_ROTS : K_ROTS2, zacht(0.06, 0.3, t));
      c.lerp(K_RICHEL, ribbel * 0.35 * zacht(0.1, 0.5, t));
      // ❄️ sneeuw boven de sneeuwgrens (zachte rand van ~6 m), richels steken er donker doorheen
      c.lerp(K_SNEEUW, zacht(SNEEUW_Y - 3, SNEEUW_Y + 3, y) * (1 - 0.25 * ribbel));
      kleur.push(c.r, c.g, c.b);
    }
  }
  const W = SPAKEN + 1;
  for (let k = 0; k < RINGEN; k++) for (let m = 0; m < SPAKEN; m++) {
    const a = k * W + m, bb = a + 1, cc = a + W, d = cc + 1;
    idx.push(a, cc, bb, bb, cc, d);
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  g.setAttribute("color", new Float32BufferAttribute(kleur, 3));
  g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  g.computeBoundingSphere();
  return g;
}

let GEOS = null, MAT = null;

export default function EchteBergen() {
  const { geos, mat } = useMemo(() => {
    if (!GEOS) {
      GEOS = BERGEN.map(bergGeometrie);
      MAT = new MeshStandardMaterial({ vertexColors: true, bumpMap: granietTextuur(), bumpScale: 0.3, roughness: 1, metalness: 0, side: DoubleSide });
    }
    return { geos: GEOS, mat: MAT };
  }, []);
  return (
    <group>
      {geos.map((g, i) => <mesh key={BERGEN[i].id} geometry={g} material={mat} receiveShadow castShadow={!LOW_END} />)}
    </group>
  );
}
