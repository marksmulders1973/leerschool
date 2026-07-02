// Buitenwereld (Mark 2 jul): de wereld buiten het park-hek. Voorheen eindigde
// het terrein hard op ±40 ("vierkante wereld met een eind"); nu ligt het park
// in een landschap in blok-stijl: een grasvlakte tot de horizon, blok-heuvels,
// bos van blokbomen, bergen met sneeuw in de verte, een meertje, en een
// weggetje met bushalte + autootjes bij de ingang (bezoekers komen ergens
// vandaan!). Puur decor: niets is bespeelbaar, alles is goedkoop getekend
// (instancing → een handvol draw-calls) en deterministisch (vaste seed).
import { useEffect, useMemo, useRef } from "react";
import { Color, Object3D } from "three";

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

// Eén gevulde InstancedMesh op basis van een lijst {x,y,z,sx,sy,sz,kleur}.
function Blokken({ items, castShadow = false }) {
  const ref = useRef();
  useEffect(() => {
    const m = ref.current;
    if (!m) return;
    const d = new Object3D();
    const c = new Color();
    items.forEach((it, k) => {
      d.position.set(it.x, it.y, it.z);
      d.scale.set(it.sx, it.sy, it.sz);
      d.rotation.y = it.rot || 0;
      d.updateMatrix();
      m.setMatrixAt(k, d.matrix);
      m.setColorAt(k, c.set(it.kleur));
    });
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
    m.computeBoundingSphere();
  }, [items]);
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, items.length]} castShadow={castShadow}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial roughness={1} metalness={0} />
    </instancedMesh>
  );
}

const GROEN = ["#6fb254", "#7cbf5a", "#5da24b", "#86c46a"];
const BERGGRIJS = ["#8d8a85", "#7f7d79", "#9a968f"];

export default function Buitenwereld() {
  const { heuvels, bergen, sneeuw, stammen, bladeren } = useMemo(() => {
    const rng = maakRng(20260702);
    const heuvels = [], bergen = [], sneeuw = [], stammen = [], bladeren = [];
    // Blok-heuvels: clusters van grote kubussen, half in de grond.
    for (let i = 0; i < 24; i++) {
      const hoek = rng() * Math.PI * 2;
      const r = 98 + rng() * 100;
      const cx = Math.sin(hoek) * r, cz = Math.cos(hoek) * r;
      const n = 3 + Math.floor(rng() * 4);
      for (let b = 0; b < n; b++) {
        const s = 6 + rng() * 11;
        heuvels.push({
          x: cx + (rng() - 0.5) * 14, z: cz + (rng() - 0.5) * 14,
          y: s * 0.32, sx: s, sy: s * (0.7 + rng() * 0.5), sz: s,
          rot: rng() * 0.6, kleur: GROEN[Math.floor(rng() * GROEN.length)],
        });
      }
    }
    // Bergen in de verte: gestapelde grijze blokken + sneeuwblok bovenop.
    for (let i = 0; i < 10; i++) {
      const hoek = (i / 10) * Math.PI * 2 + rng() * 0.5;
      const r = 210 + rng() * 55;
      const cx = Math.sin(hoek) * r, cz = Math.cos(hoek) * r;
      let topY = 0;
      const lagen = 2 + Math.floor(rng() * 2);
      let s = 30 + rng() * 18;
      for (let l = 0; l < lagen; l++) {
        const sy = s * (0.8 + rng() * 0.3);
        bergen.push({ x: cx + (rng() - 0.5) * 6, z: cz + (rng() - 0.5) * 6, y: topY + sy / 2 - 2, sx: s, sy, sz: s, rot: rng() * 0.5, kleur: BERGGRIJS[Math.floor(rng() * BERGGRIJS.length)] });
        topY += sy * 0.72;
        s *= 0.62;
      }
      sneeuw.push({ x: cx, z: cz, y: topY + s * 0.35 - 2, sx: s * 1.02, sy: s * 0.55, sz: s * 1.02, rot: rng() * 0.5, kleur: "#eef2f4" });
    }
    // Bos van blokbomen (niet op het weggetje voor de ingang: |x|<11 & z>36).
    let pogingen = 0;
    while (stammen.length < 55 && pogingen++ < 400) {
      const hoek = rng() * Math.PI * 2;
      const r = 87 + rng() * 85;
      const x = Math.sin(hoek) * r, z = Math.cos(hoek) * r;
      if (Math.abs(x) < 11 && z > 76) continue;
      const h = 2.6 + rng() * 1.8;
      stammen.push({ x, z, y: h / 2, sx: 1.1, sy: h, sz: 1.1, kleur: "#7a5a38" });
      bladeren.push({ x, z, y: h + 1.5, sx: 3.8 + rng() * 1.6, sy: 3 + rng() * 1.4, sz: 3.8 + rng() * 1.6, rot: rng() * 0.8, kleur: GROEN[Math.floor(rng() * GROEN.length)] });
    }
    return { heuvels, bergen, sneeuw, stammen, bladeren };
  }, []);

  return (
    <group>
      {/* Grasvlakte tot de horizon (ring om het vierkante park-terrein heen). */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.07, 0]}>
        <ringGeometry args={[79, 290, 48]} />
        <meshStandardMaterial color="#6fb254" roughness={1} metalness={0} />
      </mesh>

      <Blokken items={heuvels} />
      <Blokken items={bergen} />
      <Blokken items={sneeuw} />
      <Blokken items={stammen} />
      <Blokken items={bladeren} />

      {/* Meertje met blok-rand. */}
      <group position={[-102, 0, 16]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.03, 0]}>
          <circleGeometry args={[13, 24]} />
          <meshStandardMaterial color="#4fa8d8" roughness={0.35} metalness={0} transparent opacity={0.92} />
        </mesh>
        {[...Array(8)].map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return <mesh key={i} position={[Math.sin(a) * 13.6, 0.25, Math.cos(a) * 13.6]}><boxGeometry args={[2.4, 0.7, 2.4]} /><meshStandardMaterial color="#c9b98a" roughness={1} /></mesh>;
        })}
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
        {/* Blok-autootjes op weg naar het park. */}
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
