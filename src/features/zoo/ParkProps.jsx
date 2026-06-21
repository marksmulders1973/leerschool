// ParkProps — het vaste decor van het mini-park (paden, draaimolen, poppetje,
// dierverblijven). VOORLOPIG opgebouwd uit eenvoudige low-poly vormen in één
// warme stijl, als "in opbouw"-visualisatie. Worden later vervangen door echte
// Kenney/Quaternius-modellen (de laad-pijplijn ligt klaar).
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
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

// Bestuurbaar poppetje van de speler: loopt rond met toetsen (laptop) of de
// touch-joystick (telefoon). Beweegt camera-relatief; beentjes/armpjes zwaaien.
export function Player({ inputRef, start = [0, 0, 13], isSolid }) {
  const g = useRef();
  const legL = useRef(), legR = useRef(), armL = useRef(), armR = useRef();
  const phase = useRef(0);
  const pos = useRef(new Vector3(start[0], 0, start[2]));
  const fwd = useRef(new Vector3()), right = useRef(new Vector3()), dir = useRef(new Vector3());
  const solidRef = useRef(isSolid);
  solidRef.current = isSolid;

  useFrame((state, dt) => {
    const inp = inputRef?.current || {};
    const k = inp.keys || {};
    let mx = (k.ArrowRight || k.KeyD ? 1 : 0) - (k.ArrowLeft || k.KeyA ? 1 : 0) + (inp.joy?.x || 0);
    let my = (k.ArrowDown || k.KeyS ? 1 : 0) - (k.ArrowUp || k.KeyW ? 1 : 0) + (inp.joy?.y || 0);
    mx = Math.max(-1, Math.min(1, mx));
    my = Math.max(-1, Math.min(1, my));
    const mag = Math.hypot(mx, my);
    const node = g.current;
    if (!node) return;

    if (mag > 0.12) {
      state.camera.getWorldDirection(fwd.current);
      fwd.current.y = 0; fwd.current.normalize();
      // Rechts t.o.v. de camera = normalize(cross(forward, up)) = (-fz, 0, fx).
      right.current.set(-fwd.current.z, 0, fwd.current.x);
      dir.current.set(0, 0, 0);
      dir.current.addScaledVector(fwd.current, -my);
      dir.current.addScaledVector(right.current, mx);
      if (dir.current.lengthSq() > 0.0001) dir.current.normalize();
      // Beweging met botsing: probeer eerst diagonaal, anders langs één as glijden.
      const step = 3.4 * dt * Math.min(1, mag);
      const nx = pos.current.x + dir.current.x * step;
      const nz = pos.current.z + dir.current.z * step;
      const solid = solidRef.current;
      const vast = solid ? solid(pos.current.x, pos.current.z) : false; // al binnen? dan eruit kunnen
      if (!solid || vast || !solid(nx, nz)) { pos.current.x = nx; pos.current.z = nz; }
      else { if (!solid(nx, pos.current.z)) pos.current.x = nx; if (!solid(pos.current.x, nz)) pos.current.z = nz; }
      const d = Math.hypot(pos.current.x, pos.current.z);
      if (d > 27) { pos.current.x *= 27 / d; pos.current.z *= 27 / d; }
      node.rotation.y = Math.atan2(dir.current.x, dir.current.z);
      phase.current += dt * 11;
      const sw = Math.sin(phase.current) * 0.5;
      if (legL.current) legL.current.rotation.x = sw;
      if (legR.current) legR.current.rotation.x = -sw;
      if (armL.current) armL.current.rotation.x = -sw;
      if (armR.current) armR.current.rotation.x = sw;
    } else {
      [legL, legR, armL, armR].forEach((r) => { if (r.current) r.current.rotation.x *= 0.82; });
    }
    node.position.set(pos.current.x, pos.current.y, pos.current.z);
  });

  const huid = "#f1c27d", shirt = "#4a90d9", broek = "#3a4a6b";
  return (
    <group ref={g} position={start}>
      {/* benen (draaipunt bij de heup) */}
      <group ref={legL} position={[-0.12, 0.6, 0]}><mesh castShadow position={[0, -0.3, 0]}><boxGeometry args={[0.18, 0.6, 0.18]} /><meshStandardMaterial color={broek} flatShading roughness={1} /></mesh></group>
      <group ref={legR} position={[0.12, 0.6, 0]}><mesh castShadow position={[0, -0.3, 0]}><boxGeometry args={[0.18, 0.6, 0.18]} /><meshStandardMaterial color={broek} flatShading roughness={1} /></mesh></group>
      <mesh castShadow position={[0, 0.9, 0]}><boxGeometry args={[0.5, 0.6, 0.3]} /><meshStandardMaterial color={shirt} flatShading roughness={1} /></mesh>
      {/* armen (draaipunt bij de schouder) */}
      <group ref={armL} position={[-0.34, 1.2, 0]}><mesh castShadow position={[0, -0.27, 0]}><boxGeometry args={[0.14, 0.55, 0.16]} /><meshStandardMaterial color={shirt} flatShading roughness={1} /></mesh></group>
      <group ref={armR} position={[0.34, 1.2, 0]}><mesh castShadow position={[0, -0.27, 0]}><boxGeometry args={[0.14, 0.55, 0.16]} /><meshStandardMaterial color={shirt} flatShading roughness={1} /></mesh></group>
      <mesh castShadow position={[0, 1.42, 0]}><sphereGeometry args={[0.26, 16, 16]} /><meshStandardMaterial color={huid} flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.54, 0]}><sphereGeometry args={[0.275, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshStandardMaterial color="#6b4a2b" flatShading roughness={1} /></mesh>
    </group>
  );
}

// Bezoekers: kleine figuurtjes die door het park wandelen. Hoe meer je park te
// bieden heeft, hoe meer bezoekers — zo komt het park tot leven (en zie je
// waarvoor je park muntjes verdient). Puur sfeer; geen botsing.
const BEZOEKER_KLEUREN = ["#e2574c", "#4a90d9", "#f2b134", "#7bbf5a", "#b06ad8", "#e88a3c", "#3cb5a8"];

function Visitor({ seed, onTip, canTip }) {
  const g = useRef();
  const legL = useRef(), legR = useRef(), coin = useRef();
  const st = useRef({
    x: ((seed % 7) - 3) * 5, z: (((seed * 3) % 7) - 3) * 5,
    tx: 0, tz: 0, rest: (seed % 3) * 0.7, resting: true, phase: seed,
    tip: 8 + (seed % 11), coinT: -1,
  });
  const shirt = BEZOEKER_KLEUREN[seed % BEZOEKER_KLEUREN.length];
  useFrame((_, dt) => {
    const s = st.current; const node = g.current; if (!node) return;
    // Wandelen.
    if (s.resting) {
      s.rest -= dt;
      if (s.rest <= 0) { const a = Math.random() * Math.PI * 2; const r = 4 + Math.random() * 18; s.tx = Math.cos(a) * r; s.tz = Math.sin(a) * r; s.resting = false; }
    } else {
      const dx = s.tx - s.x, dz = s.tz - s.z; const d = Math.hypot(dx, dz);
      if (d < 0.12) { s.resting = true; s.rest = 1 + Math.random() * 3; if (legL.current) legL.current.rotation.x = 0; if (legR.current) legR.current.rotation.x = 0; }
      else {
        const step = Math.min(d, dt * 1.7); s.x += (dx / d) * step; s.z += (dz / d) * step;
        node.rotation.y = Math.atan2(dx, dz);
        s.phase += dt * 10; const sw = Math.sin(s.phase) * 0.5;
        if (legL.current) legL.current.rotation.x = sw;
        if (legR.current) legR.current.rotation.x = -sw;
      }
    }
    node.position.set(s.x, 0, s.z);
    // Af en toe een muntje betalen (zweeft omhoog en vervaagt).
    s.tip -= dt;
    if (s.tip <= 0) { s.tip = 16 + Math.random() * 20; if (canTip && canTip()) { s.coinT = 0; onTip && onTip(1); } }
    if (coin.current) {
      if (s.coinT >= 0) {
        s.coinT += dt; const p = s.coinT / 1.5;
        coin.current.visible = true;
        coin.current.position.y = 1.9 + p * 1.3;
        coin.current.rotation.z += dt * 5;
        coin.current.scale.setScalar(p < 0.2 ? p / 0.2 : 1);
        if (coin.current.material) coin.current.material.opacity = Math.max(0, 1 - p);
        if (s.coinT > 1.5) s.coinT = -1;
      } else coin.current.visible = false;
    }
  });
  return (
    <group ref={g} scale={0.78}>
      <group ref={legL} position={[-0.11, 0.55, 0]}><mesh castShadow position={[0, -0.28, 0]}><boxGeometry args={[0.16, 0.55, 0.16]} /><meshStandardMaterial color="#3a4a6b" flatShading roughness={1} /></mesh></group>
      <group ref={legR} position={[0.11, 0.55, 0]}><mesh castShadow position={[0, -0.28, 0]}><boxGeometry args={[0.16, 0.55, 0.16]} /><meshStandardMaterial color="#3a4a6b" flatShading roughness={1} /></mesh></group>
      <mesh castShadow position={[0, 0.85, 0]}><boxGeometry args={[0.46, 0.55, 0.28]} /><meshStandardMaterial color={shirt} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0, 1.32, 0]}><sphereGeometry args={[0.24, 14, 14]} /><meshStandardMaterial color="#f1c27d" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.43, 0]}><sphereGeometry args={[0.255, 14, 14, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshStandardMaterial color="#4a3525" flatShading roughness={1} /></mesh>
      {/* Fooi-muntje (verborgen tot een bezoeker betaalt). */}
      <mesh ref={coin} position={[0, 1.9, 0]} rotation={[Math.PI / 2, 0, 0]} visible={false}>
        <cylinderGeometry args={[0.18, 0.18, 0.045, 18]} />
        <meshStandardMaterial color="#ffd23a" emissive="#8a6a00" emissiveIntensity={0.25} transparent metalness={0.3} roughness={0.5} />
      </mesh>
    </group>
  );
}

export function Visitors({ count = 4, onTip, canTip }) {
  return (
    <group>
      {Array.from({ length: count }).map((_, i) => <Visitor key={i} seed={i * 13 + 5} onTip={onTip} canTip={canTip} />)}
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

// Eén kant van het verblijf-hek (palen + bovenligger). `on` = staat er een hek;
// `editable` → een onzichtbaar tik-vlak zodat je de kant kunt weghalen of
// terugzetten (zo bouw je twee verblijven aan elkaar tot één).
function Wall({ side, size, on, editable, onToggle }) {
  const h = size / 2;
  const hout = "#8a5a2b";
  const n = 5;
  const isNS = side === 0 || side === 2;          // noord/zuid lopen langs x
  const fixed = side === 0 ? -h : side === 2 ? h : side === 3 ? -h : h;
  const ts = [];
  for (let i = 0; i <= n; i++) ts.push(-h + (size * i) / n);
  return (
    <group onPointerDown={editable ? (e) => { e.stopPropagation(); onToggle && onToggle(side); } : undefined}>
      {on && ts.map((t, i) => (
        <mesh key={i} castShadow position={isNS ? [t, 0.35, fixed] : [fixed, 0.35, t]}>
          <boxGeometry args={[0.1, 0.7, 0.1]} />
          <meshStandardMaterial color={hout} flatShading roughness={1} />
        </mesh>
      ))}
      {on && (
        <mesh position={isNS ? [0, 0.55, fixed] : [fixed, 0.55, 0]}>
          <boxGeometry args={isNS ? [size, 0.08, 0.08] : [0.08, 0.08, size]} />
          <meshStandardMaterial color={hout} roughness={1} />
        </mesh>
      )}
      {editable && (
        <mesh position={isNS ? [0, 0.5, fixed] : [fixed, 0.5, 0]}>
          <boxGeometry args={isNS ? [size, 1.1, 0.45] : [0.45, 1.1, size]} />
          <meshBasicMaterial color={on ? "#ff7a59" : "#3ddc6a"} transparent opacity={editable ? 0.16 : 0} depthWrite={false} />
        </mesh>
      )}
    </group>
  );
}

// Een omheind dierverblijf met een dier erin. Hekken per kant (walls = [N,E,S,W]);
// in bewerk-modus tikbaar om kanten weg te halen/terug te zetten.
export function Enclosure({ position = [0, 0, 0], size = 6, assetId = "fox", babies = 0, walls = [true, true, true, true], editable = false, onToggleWall }) {
  return (
    <group position={position}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial color="#cdb188" roughness={1} />
      </mesh>
      {[0, 1, 2, 3].map((side) => (
        <Wall key={side} side={side} size={size} on={walls[side] !== false} editable={editable} onToggle={onToggleWall} />
      ))}
      <ZooModel assetId={assetId} position={[0, 0, 0]} rotation={0} wander={Math.max(0.6, size / 2 - 1.3)} />
      {/* Jonkies: kleinere versies van hetzelfde dier die ook rondscharrelen. */}
      {Array.from({ length: babies }).map((_, i) => {
        const ang = (i / Math.max(1, babies)) * Math.PI * 2 + 0.6;
        const r = size * 0.22;
        return (
          <group key={`baby${i}`} position={[Math.cos(ang) * r, 0, Math.sin(ang) * r]} scale={0.55}>
            <ZooModel assetId={assetId} position={[0, 0, 0]} rotation={0} wander={Math.max(0.4, size / 2 - 2)} />
          </group>
        );
      })}
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

// Pad-tegel (procedureel) — vult één rastervakje (2×2 m), in een kleur naar keuze.
export function PathTile({ position = [0, 0, 0], color = "#dcc48f" }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[position[0], 0.025, position[2]]} receiveShadow>
      <planeGeometry args={[2.02, 2.02]} />
      <meshStandardMaterial color={color} roughness={1} />
    </mesh>
  );
}

// Grasheuvel (procedureel) — een zachte glooiing in de grond die je overal kunt
// neerzetten zodat je park niet vlak is.
export function HillMound({ position = [0, 0, 0], size = 1.2, color = "#82bb55" }) {
  const w = 1.45 * size, h = 0.62 * size;
  return (
    <mesh position={[position[0], 0, position[2]]} scale={[w, h, w]} castShadow receiveShadow>
      <sphereGeometry args={[1, 22, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial color={color} roughness={1} />
    </mesh>
  );
}

// Geen vast decor meer: álles (draaimolen, paden, bomen, verblijven) is een
// plaatsbaar/weghaalbaar item geworden. Alleen het poppetje wordt los
// gerenderd (bestuurbaar) in ZooScene.
export function ParkBase() {
  return null;
}
