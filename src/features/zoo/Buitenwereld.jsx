// Buitenwereld (Mark 2 jul): de wereld buiten het park-hek. Voorheen eindigde
// het terrein hard op ±40 ("vierkante wereld met een eind"); nu ligt het park
// in een landschap: een grasvlakte tot de horizon, glooiende heuvels, een bos,
// bergen met sneeuw in de verte, een meertje, en een weggetje met bushalte +
// autootjes bij de ingang (bezoekers komen ergens vandaan!). Puur decor: niets
// is bespeelbaar, alles is goedkoop getekend (instancing → een handvol
// draw-calls) en deterministisch (vaste seed).
//
// 🌄 Mark 5 sep 2026 ("net zo realistisch als Brian's eiland"): de blok-heuvels,
// blok-bergen en blok-bomen zijn vervangen door echte vormen met de texturen
// uit realisme.js — gras met sprietjes op de vlakte en heuvels, graniet op de
// bergen, schors + bladerkronen in het bos. Lay-out en posities zijn gelijk
// gebleven, dus de wereld ligt nog precies waar hij lag.
import { useEffect, useMemo, useRef } from "react";
import { Color, Object3D, IcosahedronGeometry, CylinderGeometry, MeshStandardMaterial, InstancedBufferAttribute } from "three";
import { grondShader, granietTextuur, schorsMateriaal, loofKroonGeometrie, loofMateriaal } from "./realisme";
import { eilandWaterMateriaal } from "./waterEiland";

// Klein deterministisch toevalletje (mulberry32) → de wereld ziet er elke
// sessie hetzelfde uit en Math.random vervuilt geen re-renders.
function maakRng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Eén gevulde InstancedMesh op basis van een lijst {x,y,z,sx,sy,sz,rot,kleur}.
// De kleur-buffer maken we zelf vooraf (les van 5 sep: three maakt 'm anders
// pas bij de eerste setColorAt, en dan soms leeg).
function Instanties({ items, geometry, material, castShadow = false, receiveShadow = false }) {
  const ref = useRef();
  useEffect(() => {
    const m = ref.current;
    if (!m) return;
    if (!m.instanceColor || m.instanceColor.count < items.length) m.instanceColor = new InstancedBufferAttribute(new Float32Array(Math.max(1, items.length) * 3), 3);
    const d = new Object3D();
    const c = new Color();
    items.forEach((it, k) => {
      d.position.set(it.x, it.y, it.z);
      d.scale.set(it.sx, it.sy, it.sz);
      d.rotation.set(it.rx || 0, it.rot || 0, it.rz || 0);
      d.updateMatrix();
      m.setMatrixAt(k, d.matrix);
      m.setColorAt(k, c.set(it.kleur || "#ffffff"));
    });
    m.count = items.length;
    m.instanceMatrix.needsUpdate = true;
    m.instanceColor.needsUpdate = true;
    m.computeBoundingSphere();
  }, [items]);
  if (!items.length) return null;
  return <instancedMesh ref={ref} args={[undefined, undefined, items.length]} geometry={geometry} material={material} castShadow={castShadow} receiveShadow={receiveShadow} />;
}

// Bobbelige bol voor heuvels en bergen: een icosaëder waarvan elk punt een
// tikje naar binnen of buiten is geduwd → geen gladde knikker maar echt terrein.
function bobbelBol(detail, ruw, seed) {
  const g = new IcosahedronGeometry(1, detail);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const f = 1 + ruw * (Math.sin(x * 4.1 + seed) * Math.cos(z * 3.7 + seed * 0.7) * 0.5 + Math.sin(y * 5.3 + x * 2.2) * 0.3);
    p.setXYZ(i, x * f, y * f, z * f);
  }
  g.computeVertexNormals();
  return g;
}

// Geometrieën + materialen één keer (module-niveau: overleven park verlaten/terugkomen).
const HEUVEL_GEO = bobbelBol(3, 0.10, 1.3);
const BERG_GEO = (() => { const g = bobbelBol(2, 0.22, 4.7); const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 6, uv.getY(i) * 3); return g; })();
const SNEEUW_GEO = bobbelBol(2, 0.12, 8.1);
const STAM_GEO = (() => { const g = new CylinderGeometry(0.16, 0.3, 1, 7, 1, false); g.translate(0, 0.5, 0); const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i) * 2); return g; })();
const KROON_GEO = loofKroonGeometrie(14, 5);
const GRAS_MAT = grondShader(new MeshStandardMaterial({ roughness: 1, metalness: 0 }), { grasMixVast: 1 });
const BERG_MAT = new MeshStandardMaterial({ map: granietTextuur(), bumpMap: granietTextuur(), bumpScale: 0.3, roughness: 1, metalness: 0 });
const SNEEUW_MAT = new MeshStandardMaterial({ roughness: 0.9, metalness: 0 });
// het buitenmeer ligt buiten de dieptekaart → vaste diepte van 2,5 m (donker, met lichtaders)
const MEER_MAT = eilandWaterMateriaal({ diepteVast: 2.5, golfAmp: 2 });

const GROEN = ["#6fb254", "#7cbf5a", "#5da24b", "#86c46a"];
const BERGGRIJS = ["#8d8a85", "#7f7d79", "#9a968f"];

export default function Buitenwereld() {
  const { heuvels, bergen, sneeuw, stammen, kronen } = useMemo(() => {
    const rng = maakRng(20260702);
    const heuvels = [], bergen = [], sneeuw = [], stammen = [], kronen = [];
    // Glooiende heuvels: clusters van platte bollen, half in de grond (zelfde plekken als de oude blok-heuvels).
    for (let i = 0; i < 24; i++) {
      const hoek = rng() * Math.PI * 2;
      const r = 98 + rng() * 100;
      const cx = Math.sin(hoek) * r, cz = Math.cos(hoek) * r;
      const n = 3 + Math.floor(rng() * 4);
      for (let b = 0; b < n; b++) {
        const s = 6 + rng() * 11;
        const sy = s * (0.7 + rng() * 0.5);
        heuvels.push({
          x: cx + (rng() - 0.5) * 14, z: cz + (rng() - 0.5) * 14,
          y: -sy * 0.55, sx: s * 1.15, sy: sy * 0.9, sz: s * 1.15,
          rot: rng() * 0.6, kleur: GROEN[Math.floor(rng() * GROEN.length)],
        });
      }
    }
    // Bergen in de verte: ruwe granieten bulten + sneeuw op de top.
    for (let i = 0; i < 10; i++) {
      const hoek = (i / 10) * Math.PI * 2 + rng() * 0.5;
      const r = 210 + rng() * 55;
      const cx = Math.sin(hoek) * r, cz = Math.cos(hoek) * r;
      let topY = 0;
      const lagen = 2 + Math.floor(rng() * 2);
      let s = 30 + rng() * 18;
      for (let l = 0; l < lagen; l++) {
        const sy = s * (0.8 + rng() * 0.3);
        bergen.push({ x: cx + (rng() - 0.5) * 6, z: cz + (rng() - 0.5) * 6, y: topY - 2, sx: s * 0.75, sy: sy * 1.1, sz: s * 0.75, rot: rng() * 0.5, kleur: BERGGRIJS[Math.floor(rng() * BERGGRIJS.length)] });
        topY += sy * 0.72;
        s *= 0.62;
      }
      sneeuw.push({ x: cx, z: cz, y: topY + s * 0.15 - 2, sx: s * 0.72, sy: s * 0.55, sz: s * 0.72, rot: rng() * 0.5, kleur: "#eef2f4" });
    }
    // Bos (niet op het weggetje voor de ingang: |x|<11 & z>76).
    let pogingen = 0;
    while (stammen.length < 110 && pogingen++ < 800) {
      const hoek = rng() * Math.PI * 2;
      const r = 87 + rng() * 85;
      const x = Math.sin(hoek) * r, z = Math.cos(hoek) * r;
      if (Math.abs(x) < 11 && z > 76) continue;
      const h = 2.6 + rng() * 2.2, kr = 1.9 + rng() * 1.1;
      stammen.push({ x, z, y: 0, sx: 1.1, sy: h, sz: 1.1, rot: rng() * 6.28, kleur: "#ffffff" });
      kronen.push({ x, z, y: h + kr * 0.7, sx: kr, sy: kr * 0.9, sz: kr, rot: rng() * 6.28, kleur: GROEN[Math.floor(rng() * GROEN.length)] });
    }
    return { heuvels, bergen, sneeuw, stammen, kronen };
  }, []);

  // 🔎 Ruimte-verdubbeling (Mark 23 aug): het park is 2× uitgezoomd. De
  // buitenwereld is pure sfeer zonder botsing, dus we schalen 'm in z'n geheel
  // ×2 — dan schuiven de horizon-ring, het meertje, het weggetje, de bushalte,
  // de heuvels en het bos vanzelf mee naar buiten, ruim om het grotere park heen.
  return (
    <group scale={2}>
      {/* Grasvlakte tot de horizon (ring om het vierkante park-terrein heen), met de echte grastextuur. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.07, 0]} material={GRAS_MAT}>
        <ringGeometry args={[79, 290, 48]} />
      </mesh>

      <Instanties items={heuvels} geometry={HEUVEL_GEO} material={GRAS_MAT} receiveShadow />
      <Instanties items={bergen} geometry={BERG_GEO} material={BERG_MAT} />
      <Instanties items={sneeuw} geometry={SNEEUW_GEO} material={SNEEUW_MAT} />
      <Instanties items={stammen} geometry={STAM_GEO} material={schorsMateriaal()} castShadow />
      <Instanties items={kronen} geometry={KROON_GEO} material={loofMateriaal()} castShadow />

      {/* Meertje met zandige oever. */}
      <group position={[-102, 0, 16]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.03, 0]} material={MEER_MAT}>
          <circleGeometry args={[13, 24]} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
          <ringGeometry args={[12.6, 15.5, 32]} />
          <meshStandardMaterial color="#d8c48c" roughness={1} />
        </mesh>
      </group>

      {/* Weggetje van de ingang de wereld in + bushalte + autootjes. */}
      <group>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.04, 104]}>
          <planeGeometry args={[7, 52]} />
          <meshStandardMaterial color="#5c6066" roughness={1} />
        </mesh>
        {[...Array(6)].map((_, i) => (
          <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 84 + i * 8]}>
            <planeGeometry args={[0.5, 3]} />
            <meshStandardMaterial color="#e8e6da" roughness={1} />
          </mesh>
        ))}
        {/* Bushalte: hokje + bordje. */}
        <group position={[8.6, 0, 92]}>
          <mesh position={[0, 1.5, -1]} castShadow><boxGeometry args={[5, 3, 0.3]} /><meshStandardMaterial color="#3f7fae" roughness={1} /></mesh>
          <mesh position={[0, 3.15, 0]} castShadow><boxGeometry args={[5.6, 0.3, 2.6]} /><meshStandardMaterial color="#2f5f82" roughness={1} /></mesh>
          <mesh position={[-2.5, 1.5, 0.9]}><boxGeometry args={[0.25, 3, 0.25]} /><meshStandardMaterial color="#2f5f82" roughness={1} /></mesh>
          <mesh position={[2.5, 1.5, 0.9]}><boxGeometry args={[0.25, 3, 0.25]} /><meshStandardMaterial color="#2f5f82" roughness={1} /></mesh>
          <mesh position={[0, 0.55, 0]}><boxGeometry args={[4.2, 0.35, 1]} /><meshStandardMaterial color="#b58a4e" roughness={1} /></mesh>
          <mesh position={[3.4, 2.6, 0.9]}><boxGeometry args={[0.9, 0.9, 0.12]} /><meshStandardMaterial color="#ffd54a" roughness={0.8} /></mesh>
          <mesh position={[3.4, 1.05, 0.9]}><boxGeometry args={[0.14, 2.2, 0.14]} /><meshStandardMaterial color="#666" roughness={1} /></mesh>
        </group>
        {/* Autootjes op weg naar het park. */}
        {[{ x: -1.8, z: 114, k: "#e2574c" }, { x: 1.8, z: 98, k: "#4a90d9", r: Math.PI }, { x: -1.8, z: 126, k: "#f2b134" }].map((a, i) => (
          <group key={i} position={[a.x, 0, a.z]} rotation={[0, a.r || 0, 0]}>
            <mesh position={[0, 0.75, 0]} castShadow><boxGeometry args={[2.1, 0.8, 3.4]} /><meshStandardMaterial color={a.k} roughness={0.8} /></mesh>
            <mesh position={[0, 1.45, -0.2]} castShadow><boxGeometry args={[1.8, 0.7, 1.8]} /><meshStandardMaterial color="#dfe8ee" roughness={0.6} /></mesh>
            {[[-0.95, 1.1], [0.95, 1.1], [-0.95, -1.1], [0.95, -1.1]].map(([wx, wz], j) => (
              <mesh key={j} position={[wx, 0.35, wz]}><boxGeometry args={[0.35, 0.7, 0.7]} /><meshStandardMaterial color="#22262a" roughness={1} /></mesh>
            ))}
          </group>
        ))}
      </group>
    </group>
  );
}
