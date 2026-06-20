// ParkProps — het vaste decor van het mini-park (paden, draaimolen, poppetje,
// dierverblijven). VOORLOPIG opgebouwd uit eenvoudige low-poly vormen in één
// warme stijl, als "in opbouw"-visualisatie. Worden later vervangen door echte
// Kenney/Quaternius-modellen (de laad-pijplijn ligt klaar).
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import ZooModel from "./ZooModel";

const SEAT_KLEUREN = ["#e2574c", "#4a90d9", "#f2b134", "#7bbf5a"];

// Draaimolen die echt ronddraait.
export function Carousel({ position = [0, 0, 0] }) {
  const top = useRef();
  useFrame((_, dt) => {
    if (top.current) top.current.rotation.y += dt * 0.5;
  });
  const plekken = [0, 1, 2, 3].map((i) => {
    const a = (i / 4) * Math.PI * 2;
    return [Math.cos(a) * 1.5, Math.sin(a) * 1.5];
  });
  return (
    <group position={position}>
      <mesh castShadow receiveShadow position={[0, 0.15, 0]}>
        <cylinderGeometry args={[2.3, 2.4, 0.3, 28]} />
        <meshStandardMaterial color="#e7d6a8" flatShading roughness={1} />
      </mesh>
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 2.8, 12]} />
        <meshStandardMaterial color="#caa44a" flatShading roughness={0.8} />
      </mesh>
      <group ref={top} position={[0, 0.3, 0]}>
        {plekken.map((p, i) => (
          <group key={i} position={[p[0], 0, p[1]]}>
            <mesh position={[0, 1.0, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 2.0, 8]} />
              <meshStandardMaterial color="#caa44a" roughness={0.7} />
            </mesh>
            <mesh castShadow position={[0, 0.62, 0]}>
              <boxGeometry args={[0.45, 0.5, 0.9]} />
              <meshStandardMaterial color={SEAT_KLEUREN[i]} flatShading roughness={0.9} />
            </mesh>
            <mesh castShadow position={[0, 1.0, 0.36]}>
              <sphereGeometry args={[0.22, 14, 14]} />
              <meshStandardMaterial color={SEAT_KLEUREN[i]} flatShading roughness={0.9} />
            </mesh>
          </group>
        ))}
        <mesh castShadow position={[0, 2.35, 0]}>
          <coneGeometry args={[2.6, 1.2, 16]} />
          <meshStandardMaterial color="#e2574c" flatShading roughness={0.95} />
        </mesh>
        <mesh position={[0, 3.0, 0]}>
          <sphereGeometry args={[0.18, 12, 12]} />
          <meshStandardMaterial color="#ffd54a" roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

// Het poppetje van de speler — zelf-gebouwd (geen losse textuur → nooit "wit"),
// wiebelt zachtjes. Later evt. vervangen door een vertex-colored model.
export function Character({ position = [0, 0, 0], rotation = 0 }) {
  const ref = useRef();
  useFrame((s) => {
    if (ref.current) ref.current.position.y = position[1] + Math.sin(s.clock.elapsedTime * 2) * 0.04;
  });
  const huid = "#f1c27d", shirt = "#4a90d9", broek = "#3a4a6b";
  return (
    <group ref={ref} position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow position={[-0.12, 0.3, 0]}><boxGeometry args={[0.18, 0.6, 0.18]} /><meshStandardMaterial color={broek} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0.12, 0.3, 0]}><boxGeometry args={[0.18, 0.6, 0.18]} /><meshStandardMaterial color={broek} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0, 0.9, 0]}><boxGeometry args={[0.5, 0.6, 0.3]} /><meshStandardMaterial color={shirt} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[-0.34, 0.9, 0]}><boxGeometry args={[0.14, 0.55, 0.16]} /><meshStandardMaterial color={shirt} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0.34, 0.9, 0]}><boxGeometry args={[0.14, 0.55, 0.16]} /><meshStandardMaterial color={shirt} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0, 1.42, 0]}><sphereGeometry args={[0.26, 16, 16]} /><meshStandardMaterial color={huid} flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.54, 0]}><sphereGeometry args={[0.275, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshStandardMaterial color="#6b4a2b" flatShading roughness={1} /></mesh>
    </group>
  );
}

// Een paar bomen + bloemen rond het park voor sfeer.
export function Decor() {
  const bomen = [
    { id: "tree", p: [-17, 0, 6] },
    { id: "treeOak", p: [17, 0, 6] },
    { id: "tree", p: [-18, 0, -11] },
    { id: "treeOak", p: [18, 0, -11] },
    { id: "treePalm", p: [0, 0, -18] },
    { id: "treeOak", p: [-15, 0, 16] },
    { id: "tree", p: [15, 0, 16] },
  ];
  const bloemen = [
    { id: "flowerRed", p: [-13, 0, 13] },
    { id: "flowerYellow", p: [13, 0, 13] },
    { id: "flowerPurple", p: [-14, 0, 11] },
    { id: "mushroom", p: [14, 0, 11] },
  ];
  return (
    <group>
      {bomen.map((b, i) => <ZooModel key={`t${i}`} assetId={b.id} position={b.p} rotation={(i * 1.3) % 6.28} />)}
      {bloemen.map((b, i) => <ZooModel key={`f${i}`} assetId={b.id} position={b.p} rotation={(i * 2.1) % 6.28} />)}
    </group>
  );
}

// Een omheind dierverblijf met een dier erin. Standaard ruim (school-app: geen
// dier op 2×2 m), met wat ruimte rondom het dier.
export function Enclosure({ position = [0, 0, 0], size = 6, assetId = "fox" }) {
  const h = size / 2;
  const hout = "#8a5a2b";
  const n = 5;
  const posts = [];
  for (let s = 0; s < 4; s++) {
    for (let i = 0; i <= n; i++) {
      const t = -h + (size * i) / n;
      if (s === 0) posts.push([t, -h]);
      else if (s === 1) posts.push([t, h]);
      else if (s === 2) posts.push([-h, t]);
      else posts.push([h, t]);
    }
  }
  return (
    <group position={position}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial color="#cdb188" roughness={1} />
      </mesh>
      {posts.map((p, i) => (
        <mesh key={i} castShadow position={[p[0], 0.35, p[1]]}>
          <boxGeometry args={[0.1, 0.7, 0.1]} />
          <meshStandardMaterial color={hout} flatShading roughness={1} />
        </mesh>
      ))}
      {/* bovenliggers */}
      <mesh position={[0, 0.55, -h]}><boxGeometry args={[size, 0.08, 0.08]} /><meshStandardMaterial color={hout} roughness={1} /></mesh>
      <mesh position={[0, 0.55, h]}><boxGeometry args={[size, 0.08, 0.08]} /><meshStandardMaterial color={hout} roughness={1} /></mesh>
      <mesh position={[-h, 0.55, 0]}><boxGeometry args={[0.08, 0.08, size]} /><meshStandardMaterial color={hout} roughness={1} /></mesh>
      <mesh position={[h, 0.55, 0]}><boxGeometry args={[0.08, 0.08, size]} /><meshStandardMaterial color={hout} roughness={1} /></mesh>
      <ZooModel assetId={assetId} position={[0, 0, 0]} rotation={0} wander={Math.max(0.6, size / 2 - 1.3)} />
    </group>
  );
}

// Paden: een kruis door het midden + een ring rond de draaimolen.
export function Paths() {
  const pad = "#dcc48f";
  return (
    <group position={[0, 0.015, 0]}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[2.4, 18]} /><meshStandardMaterial color={pad} roughness={1} /></mesh>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[18, 2.4]} /><meshStandardMaterial color={pad} roughness={1} /></mesh>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}><ringGeometry args={[3.0, 3.9, 48]} /><meshStandardMaterial color={pad} roughness={1} /></mesh>
    </group>
  );
}

// Het hele vaste mini-park (altijd aanwezig, niet weghaalbaar).
export function ParkBase() {
  return (
    <group>
      <Paths />
      <Decor />
      <Carousel position={[0, 0, 0]} />
      <Character position={[0, 0, 13]} rotation={Math.PI} />
    </group>
  );
}
