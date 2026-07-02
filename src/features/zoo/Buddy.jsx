// Buddy — een droom/fantasie-maatje dat met het poppetje meedribbelt en af en
// toe een praatwolkje toont. Low-poly in de parkstijl. Het maatje trailt naast
// de speler (vaste zij-offset, soepel ge-lerpt), hupt vrolijk en draait mee in
// z'n looprichting. Praatjes komen uit buddies.js (sjablonen + echte feiten).
import { useRef, useState, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { Vector3, Box3 } from "three";
import { buddyPraatje, buddyAai, buddyGrootte, BUDDY_BY_ID } from "./buddies";

// Het 3D-model-pad per maatje staat in de roster (b.model). Vervangt het
// procedurele lijfje als het bestaat. Vonk = via gratis image-to-3D (SF3D).
//
// Laadt een .glb-maatje, normaliseert het (schaal naar ~doelhoogte + voeten op
// de grond) en zet schaduwen aan. Hergebruikt het patroon van ZooModel.
function MaatjeModel({ url, doelhoogte = 0.95, draai = 0 }) {
  const { scene } = useGLTF(url);
  const cloned = useMemo(() => scene.clone(true), [scene]);
  const { scale, yOffset } = useMemo(() => {
    const box = new Box3().setFromObject(cloned);
    const size = new Vector3();
    box.getSize(size);
    const h = size.y || 1;
    const s = doelhoogte / h;
    return { scale: s, yOffset: -box.min.y * s };
  }, [cloned, doelhoogte]);
  useEffect(() => {
    cloned.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true; o.receiveShadow = true;
      const m = o.material;
      if (m && "roughness" in m) m.roughness = Math.max(0.55, m.roughness ?? 1);
      if (m && "metalness" in m) m.metalness = 0;
    });
  }, [cloned]);
  return (
    <group position={[0, yOffset, 0]} rotation={[0, draai, 0]}>
      <primitive object={cloned} scale={scale} />
    </group>
  );
}
useGLTF.preload("/maatjes/vonk.glb");
useGLTF.preload("/maatjes/charley.glb");

// ── Procedurele lijfjes per soort ──────────────────────────────────────────
function Draakje({ c, flapRef }) {
  return (
    <group>
      {/* lijf */}
      <mesh castShadow position={[0, 0, 0]} scale={[1, 0.92, 1.15]}><sphereGeometry args={[0.42, 16, 16]} /><meshStandardMaterial color={c.kleur} flatShading roughness={0.85} /></mesh>
      {/* buik */}
      <mesh position={[0, -0.08, 0.28]} scale={[0.8, 0.8, 0.6]}><sphereGeometry args={[0.3, 12, 12]} /><meshStandardMaterial color={c.accent} flatShading roughness={0.9} /></mesh>
      {/* kop */}
      <mesh castShadow position={[0, 0.4, 0.26]}><sphereGeometry args={[0.32, 16, 16]} /><meshStandardMaterial color={c.kleur} flatShading roughness={0.85} /></mesh>
      {/* snuit */}
      <mesh position={[0, 0.34, 0.52]}><boxGeometry args={[0.22, 0.16, 0.2]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={0.85} /></mesh>
      {/* hoorntjes */}
      {[-0.13, 0.13].map((x, i) => <mesh key={i} position={[x, 0.66, 0.22]}><coneGeometry args={[0.06, 0.18, 6]} /><meshStandardMaterial color={c.accent} flatShading roughness={0.7} /></mesh>)}
      {/* oogjes */}
      {[-0.13, 0.13].map((x, i) => <mesh key={i} position={[x, 0.46, 0.5]}><sphereGeometry args={[0.06, 10, 10]} /><meshStandardMaterial color="#22303a" roughness={0.4} /></mesh>)}
      {/* vleugels (klapperen) */}
      {[-1, 1].map((s, i) => (
        <mesh key={i} ref={(el) => (flapRef.current[i] = el)} position={[s * 0.34, 0.1, -0.05]} rotation={[0, 0, s * 0.5]}>
          <boxGeometry args={[0.36, 0.04, 0.3]} /><meshStandardMaterial color={c.accent} flatShading roughness={0.85} side={2} />
        </mesh>
      ))}
      {/* staartje */}
      <mesh position={[0, -0.1, -0.42]} rotation={[0.5, 0, 0]}><coneGeometry args={[0.1, 0.4, 6]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={0.85} /></mesh>
    </group>
  );
}

function Eenhoorn({ c }) {
  return (
    <group>
      {/* lijf */}
      <mesh castShadow position={[0, 0.05, 0]} scale={[1, 0.85, 1.25]}><sphereGeometry args={[0.4, 16, 16]} /><meshStandardMaterial color={c.kleur} flatShading roughness={0.85} /></mesh>
      {/* kop */}
      <mesh castShadow position={[0, 0.32, 0.4]}><sphereGeometry args={[0.27, 16, 16]} /><meshStandardMaterial color={c.kleur} flatShading roughness={0.85} /></mesh>
      {/* snuit */}
      <mesh position={[0, 0.24, 0.62]} scale={[0.8, 0.8, 1]}><sphereGeometry args={[0.16, 12, 12]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={0.85} /></mesh>
      {/* gouden hoorn */}
      <mesh position={[0, 0.6, 0.42]} rotation={[0.4, 0, 0]}><coneGeometry args={[0.06, 0.34, 8]} /><meshStandardMaterial color={c.accent} roughness={0.4} metalness={0.4} /></mesh>
      {/* regenboog-manen */}
      {["#ff6b6b", "#ffb84d", "#ffe14d", "#5ad17a", "#5aa6e0", "#b06ad6"].map((rc, i) => (
        <mesh key={i} position={[0, 0.46 - i * 0.07, 0.24 - i * 0.04]} rotation={[0.3, 0, 0]}><boxGeometry args={[0.16, 0.1, 0.06]} /><meshStandardMaterial color={rc} flatShading roughness={0.8} /></mesh>
      ))}
      {/* oogjes */}
      {[-0.11, 0.11].map((x, i) => <mesh key={i} position={[x, 0.34, 0.58]}><sphereGeometry args={[0.05, 10, 10]} /><meshStandardMaterial color="#3a2a40" roughness={0.4} /></mesh>)}
      {/* 4 pootjes */}
      {[[0.18, 0.28], [-0.18, 0.28], [0.18, -0.28], [-0.18, -0.28]].map(([x, z], i) => (
        <mesh key={i} castShadow position={[x, -0.3, z]}><cylinderGeometry args={[0.08, 0.07, 0.34, 8]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={0.85} /></mesh>
      ))}
      {/* staart */}
      <mesh position={[0, 0.05, -0.5]} rotation={[-0.5, 0, 0]}><boxGeometry args={[0.1, 0.34, 0.08]} /><meshStandardMaterial color="#ff8fcf" flatShading roughness={0.8} /></mesh>
    </group>
  );
}

function Uil({ c, flapRef }) {
  return (
    <group>
      {/* pluizig lijf */}
      <mesh castShadow position={[0, 0, 0]} scale={[1, 1.15, 1]}><icosahedronGeometry args={[0.44, 1]} /><meshStandardMaterial color={c.kleur} flatShading roughness={1} /></mesh>
      {/* buikvlek */}
      <mesh position={[0, -0.04, 0.34]} scale={[0.7, 0.9, 0.5]}><sphereGeometry args={[0.32, 12, 12]} /><meshStandardMaterial color={c.accent} flatShading roughness={1} /></mesh>
      {/* oog-schijven */}
      {[-0.16, 0.16].map((x, i) => (
        <group key={i} position={[x, 0.18, 0.36]}>
          <mesh scale={[1, 1, 0.5]}><sphereGeometry args={[0.15, 14, 14]} /><meshStandardMaterial color="#fff" roughness={0.6} /></mesh>
          <mesh position={[0, 0, 0.08]}><sphereGeometry args={[0.07, 10, 10]} /><meshStandardMaterial color="#22303a" roughness={0.4} /></mesh>
        </group>
      ))}
      {/* snavel */}
      <mesh position={[0, 0.04, 0.46]} rotation={[Math.PI, 0, 0]}><coneGeometry args={[0.08, 0.16, 4]} /><meshStandardMaterial color={c.accent} flatShading roughness={0.7} /></mesh>
      {/* oortjes */}
      {[-0.2, 0.2].map((x, i) => <mesh key={i} position={[x, 0.46, 0]}><coneGeometry args={[0.1, 0.22, 5]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={1} /></mesh>)}
      {/* vleugeltjes (klapperen) */}
      {[-1, 1].map((s, i) => (
        <mesh key={i} ref={(el) => (flapRef.current[i] = el)} position={[s * 0.42, 0, 0.02]} rotation={[0, 0, s * 0.3]}>
          <boxGeometry args={[0.14, 0.4, 0.26]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

function Bubbel({ c, squashRef }) {
  return (
    <group ref={squashRef}>
      {/* doorschijnend blob-lijf */}
      <mesh castShadow><icosahedronGeometry args={[0.42, 1]} /><meshStandardMaterial color={c.kleur} transparent opacity={0.78} roughness={0.25} metalness={0.1} flatShading /></mesh>
      {/* glans-vlek */}
      <mesh position={[-0.14, 0.16, 0.3]}><sphereGeometry args={[0.1, 10, 10]} /><meshStandardMaterial color={c.accent} transparent opacity={0.9} roughness={0.2} /></mesh>
      {/* oogjes */}
      {[-0.12, 0.12].map((x, i) => (
        <group key={i} position={[x, 0.06, 0.36]}>
          <mesh><sphereGeometry args={[0.08, 10, 10]} /><meshStandardMaterial color="#fff" roughness={0.4} /></mesh>
          <mesh position={[0, 0, 0.05]}><sphereGeometry args={[0.04, 8, 8]} /><meshStandardMaterial color="#22303a" roughness={0.4} /></mesh>
        </group>
      ))}
      {/* lachje */}
      <mesh position={[0, -0.06, 0.38]} rotation={[0, 0, Math.PI]}><torusGeometry args={[0.08, 0.018, 8, 12, Math.PI]} /><meshStandardMaterial color="#22303a" roughness={0.4} /></mesh>
    </group>
  );
}

function Ster({ c }) {
  const punten = Array.from({ length: 5 }, (_, i) => (i / 5) * Math.PI * 2 + Math.PI / 2);
  return (
    <group>
      {/* gloeiende kern */}
      <mesh castShadow><icosahedronGeometry args={[0.28, 1]} /><meshStandardMaterial color={c.kleur} emissive={c.accent} emissiveIntensity={0.6} flatShading roughness={0.45} /></mesh>
      {/* 5 punten, naar buiten wijzend */}
      {punten.map((a, i) => (
        <mesh key={i} position={[Math.cos(a) * 0.34, Math.sin(a) * 0.34, 0]} rotation={[0, 0, a - Math.PI / 2]}>
          <coneGeometry args={[0.13, 0.34, 4]} /><meshStandardMaterial color={c.kleur} emissive={c.accent} emissiveIntensity={0.55} flatShading roughness={0.45} />
        </mesh>
      ))}
      {/* oogjes */}
      {[-0.1, 0.1].map((x, i) => <mesh key={i} position={[x, 0.02, 0.26]}><sphereGeometry args={[0.05, 8, 8]} /><meshStandardMaterial color="#5a3a00" roughness={0.4} /></mesh>)}
      {/* lachje */}
      <mesh position={[0, -0.1, 0.26]} rotation={[0, 0, Math.PI]}><torusGeometry args={[0.07, 0.015, 8, 12, Math.PI]} /><meshStandardMaterial color="#5a3a00" roughness={0.4} /></mesh>
    </group>
  );
}

function Fenix({ c, flapRef }) {
  return (
    <group>
      {/* lijf */}
      <mesh castShadow scale={[1, 1.1, 1]}><sphereGeometry args={[0.32, 16, 16]} /><meshStandardMaterial color={c.kleur} emissive="#ff5a1e" emissiveIntensity={0.28} flatShading roughness={0.65} /></mesh>
      {/* kop */}
      <mesh castShadow position={[0, 0.34, 0.12]}><sphereGeometry args={[0.2, 14, 14]} /><meshStandardMaterial color={c.kleur} flatShading roughness={0.65} /></mesh>
      {/* vlam-kuif */}
      {[-1, 0, 1].map((s, i) => <mesh key={i} position={[0, 0.5, 0.06]} rotation={[0.2, 0, s * 0.4]}><coneGeometry args={[0.06, 0.26, 4]} /><meshStandardMaterial color={c.accent} emissive="#ff8a3a" emissiveIntensity={0.5} flatShading roughness={0.5} /></mesh>)}
      {/* snavel */}
      <mesh position={[0, 0.32, 0.3]} rotation={[Math.PI / 2, 0, 0]}><coneGeometry args={[0.05, 0.13, 4]} /><meshStandardMaterial color="#ffd23a" flatShading roughness={0.5} /></mesh>
      {/* oogjes */}
      {[-0.08, 0.08].map((x, i) => <mesh key={i} position={[x, 0.36, 0.27]}><sphereGeometry args={[0.04, 8, 8]} /><meshStandardMaterial color="#3a1400" roughness={0.4} /></mesh>)}
      {/* vleugels (klapperen) */}
      {[-1, 1].map((s, i) => (
        <mesh key={i} ref={(el) => (flapRef.current[i] = el)} position={[s * 0.3, 0.05, 0]} rotation={[0, 0, s * 0.4]}>
          <coneGeometry args={[0.14, 0.52, 4]} /><meshStandardMaterial color={c.accent} emissive="#ff6a1e" emissiveIntensity={0.35} flatShading roughness={0.6} side={2} />
        </mesh>
      ))}
      {/* staart-vlammen */}
      {[-1, 0, 1].map((s, i) => <mesh key={i} position={[s * 0.12, -0.18, -0.28]} rotation={[-0.8, 0, s * 0.3]}><coneGeometry args={[0.07, 0.42, 4]} /><meshStandardMaterial color={s === 0 ? c.kleur : c.accent} emissive="#ff5a1e" emissiveIntensity={0.42} flatShading roughness={0.6} /></mesh>)}
    </group>
  );
}

// Charley — een brindle bokser (Mark's eigen hond). Gedrongen lijf, donker
// masker + hangoren, witte bles/befje/sokjes en z'n tongetje uit, in parkstijl.
function Hond({ c, mouthRef, tailRef, legsRef }) {
  return (
    <group>
      {/* lijf — gedrongen bokser-bouw, gestroomd bruin */}
      <mesh castShadow position={[0, 0.02, 0]} scale={[1, 0.92, 1.35]}><sphereGeometry args={[0.38, 16, 16]} /><meshStandardMaterial color={c.kleur} flatShading roughness={0.9} /></mesh>
      {/* wit befje/borst */}
      <mesh position={[0, -0.1, 0.32]} scale={[0.66, 0.82, 0.55]}><sphereGeometry args={[0.3, 12, 12]} /><meshStandardMaterial color={c.accent} flatShading roughness={0.95} /></mesh>
      {/* kop — vierkant */}
      <mesh castShadow position={[0, 0.34, 0.36]} scale={[1, 0.95, 1]}><boxGeometry args={[0.42, 0.4, 0.42]} /><meshStandardMaterial color={c.kleur} flatShading roughness={0.9} /></mesh>
      {/* donker boksermasker rond de snuit */}
      <mesh position={[0, 0.28, 0.54]} scale={[0.95, 0.85, 0.7]}><boxGeometry args={[0.4, 0.3, 0.3]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={0.9} /></mesh>
      {/* bovenkaak/snuit (vast) */}
      <mesh position={[0, 0.25, 0.68]}><boxGeometry args={[0.26, 0.13, 0.18]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={0.9} /></mesh>
      {/* neus (op de bovenkaak) */}
      <mesh position={[0, 0.3, 0.78]}><boxGeometry args={[0.12, 0.09, 0.08]} /><meshStandardMaterial color="#1a1410" roughness={0.5} /></mesh>
      {/* ── ONDERKAAK (scharniert open als Charley praat) ── hinge achter de snuit */}
      <group ref={mouthRef} position={[0, 0.2, 0.58]}>
        {/* onderkaak-blok */}
        <mesh position={[0, -0.03, 0.08]}><boxGeometry args={[0.24, 0.08, 0.17]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={0.9} /></mesh>
        {/* roze tongetje (beweegt mee met de kaak) */}
        <mesh position={[0, -0.01, 0.15]} rotation={[0.35, 0, 0]}><boxGeometry args={[0.09, 0.02, 0.13]} /><meshStandardMaterial color="#e98697" roughness={0.6} /></mesh>
      </group>
      {/* witte bles over snuit naar voorhoofd */}
      <mesh position={[0, 0.4, 0.62]}><boxGeometry args={[0.08, 0.34, 0.16]} /><meshStandardMaterial color={c.accent} flatShading roughness={0.95} /></mesh>
      {/* oogjes */}
      {[-0.13, 0.13].map((x, i) => <mesh key={i} position={[x, 0.41, 0.58]}><sphereGeometry args={[0.05, 10, 10]} /><meshStandardMaterial color="#2a1c12" roughness={0.4} /></mesh>)}
      {/* hangoren (donker, langs de kop) */}
      {[-1, 1].map((s, i) => (
        <mesh key={i} castShadow position={[s * 0.26, 0.42, 0.3]} rotation={[0.2, 0, s * 0.25]}>
          <boxGeometry args={[0.1, 0.26, 0.18]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={0.9} />
        </mesh>
      ))}
      {/* 4 pootjes met witte sokjes — scharnieren vanaf de heup zodat ze echt
          kunnen lopen (rotatie via legsRef, aangestuurd in Buddy's useFrame). */}
      {[[0.2, 0.34], [-0.2, 0.34], [0.2, -0.3], [-0.2, -0.3]].map(([x, z], i) => (
        <group key={i} ref={(el) => { if (legsRef) legsRef.current[i] = el; }} position={[x, -0.11, z]}>
          <mesh castShadow position={[0, -0.17, 0]}><cylinderGeometry args={[0.09, 0.08, 0.34, 8]} /><meshStandardMaterial color={c.kleur} flatShading roughness={0.9} /></mesh>
          <mesh position={[0, -0.33, 0]}><cylinderGeometry args={[0.085, 0.085, 0.1, 8]} /><meshStandardMaterial color={c.accent} flatShading roughness={0.95} /></mesh>
        </group>
      ))}
      {/* stompe staart die kwispelt (scharniert links-rechts vanaf het lijf) */}
      <group ref={tailRef} position={[0, 0.12, -0.36]}>
        <mesh position={[0, 0, -0.08]} rotation={[-0.7, 0, 0]}><coneGeometry args={[0.07, 0.2, 6]} /><meshStandardMaterial color={c.kleur} flatShading roughness={0.9} /></mesh>
      </group>
    </group>
  );
}

// 🧱 Blok-hondje (blok-wereld, Mark 2 jul): hoekige hond die bij de Minecraft-
// look past. Zelfde scharnier-refs als Hond → pootjes lopen, staart kwispelt.
function BlokHond({ c, tailRef, legsRef }) {
  return (
    <group>
      <mesh castShadow position={[0, 0.05, 0]}><boxGeometry args={[0.5, 0.42, 0.78]} /><meshStandardMaterial color={c.kleur} flatShading roughness={0.95} /></mesh>
      <mesh position={[0, 0, 0.34]}><boxGeometry args={[0.34, 0.3, 0.14]} /><meshStandardMaterial color={c.accent} flatShading roughness={0.95} /></mesh>
      <mesh castShadow position={[0, 0.42, 0.4]}><boxGeometry args={[0.44, 0.4, 0.4]} /><meshStandardMaterial color={c.kleur} flatShading roughness={0.9} /></mesh>
      <mesh position={[0, 0.33, 0.66]}><boxGeometry args={[0.24, 0.18, 0.16]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={0.9} /></mesh>
      <mesh position={[0, 0.38, 0.75]}><boxGeometry args={[0.1, 0.08, 0.05]} /><meshStandardMaterial color="#1a1410" roughness={0.5} /></mesh>
      {[-0.12, 0.12].map((x, i) => <mesh key={i} position={[x, 0.48, 0.605]}><boxGeometry args={[0.08, 0.09, 0.02]} /><meshStandardMaterial color="#2a1c12" roughness={0.4} /></mesh>)}
      {[-1, 1].map((s, i) => <mesh key={i} castShadow position={[s * 0.16, 0.68, 0.34]}><boxGeometry args={[0.12, 0.16, 0.1]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={0.9} /></mesh>)}
      {[[0.17, 0.28], [-0.17, 0.28], [0.17, -0.28], [-0.17, -0.28]].map(([x, z], i) => (
        <group key={i} ref={(el) => { if (legsRef) legsRef.current[i] = el; }} position={[x, -0.12, z]}>
          <mesh castShadow position={[0, -0.16, 0]}><boxGeometry args={[0.14, 0.32, 0.14]} /><meshStandardMaterial color={c.kleur} flatShading roughness={0.9} /></mesh>
          <mesh position={[0, -0.3, 0]}><boxGeometry args={[0.15, 0.08, 0.15]} /><meshStandardMaterial color={c.accent} flatShading roughness={0.95} /></mesh>
        </group>
      ))}
      <group ref={tailRef} position={[0, 0.2, -0.4]}>
        <mesh position={[0, 0.06, -0.1]} rotation={[-0.6, 0, 0]}><boxGeometry args={[0.1, 0.26, 0.1]} /><meshStandardMaterial color={c.kleur2} flatShading roughness={0.9} /></mesh>
      </group>
    </group>
  );
}

function Lijf({ soort, c, flapRef, squashRef, mouthRef, tailRef, legsRef }) {
  if (soort === "draakje") return <Draakje c={c} flapRef={flapRef} />;
  if (soort === "hond") return <Hond c={c} mouthRef={mouthRef} tailRef={tailRef} legsRef={legsRef} />;
  if (soort === "blokhond") return <BlokHond c={c} tailRef={tailRef} legsRef={legsRef} />;
  if (soort === "eenhoorn") return <Eenhoorn c={c} />;
  if (soort === "uil") return <Uil c={c} flapRef={flapRef} />;
  if (soort === "ster") return <Ster c={c} />;
  if (soort === "fenix") return <Fenix c={c} flapRef={flapRef} />;
  return <Bubbel c={c} squashRef={squashRef} />;
}

// ── De meelopende maatje-component ──────────────────────────────────────────
export default function Buddy({ kind, posRef, faceRef, heightRef, factsRef, groei = 0, buddyNaam = "", onPraat, posOutRef, verborgen = false }) {
  const b = BUDDY_BY_ID[kind];
  const effNaam = (buddyNaam || b?.naam || "").trim();
  const g = useRef();
  const lijf = useRef();      // het lijf apart, zodat we het kunnen laten "meegroeien"
  const hart = useRef();      // zwevend hartje bij een aai
  const cur = useRef(new Vector3(2, 0, 12));
  const flapRef = useRef([]);
  const squashRef = useRef();
  const mouthRef = useRef();   // onderkaak (Charley) — gaat open als hij praat
  const tailRef = useRef();    // staart (Charley) — kwispelt
  const legsRef = useRef([]);  // 4 pootjes (Charley) — lopen
  const [bubble, setBubble] = useState(null);
  const st = useRef({ bt: 0, next: 4 + Math.random() * 4, introDone: false, pet: 0, grow: 0.8 });
  const model = b?.model;
  const vliegt = !!b?.vliegt;
  const zweef = !model && (kind === "draakje" || kind === "bubbel" || kind === "ster" || kind === "fenix");
  const baseY = model ? 0 : (zweef ? 0.62 : 0.36);
  const doelGrootte = buddyGrootte(groei);

  // Aaien/aantikken → blije reactie: sprongetje, knuffel-praatje en een hartje.
  const aai = (e) => {
    if (e) e.stopPropagation();
    st.current.pet = 0.9;            // blij sprongetje + hartje als feedback
    if (onPraat) { onPraat(); return; }   // tik = praten openen
    setBubble(buddyAai(b?.soort, factsRef?.current));
    st.current.bt = 2.6;
  };

  useFrame((s, dt) => {
    const node = g.current; if (!node || !b) return;
    // soepel naar de doel-grootte groeien (meegroeien met geleerde stappen)
    st.current.grow += (doelGrootte - st.current.grow) * Math.min(1, dt * 2);
    if (lijf.current) lijf.current.scale.setScalar(st.current.grow);

    const p = posRef?.current;
    let petHop = 0;
    // aai-sprongetje + hartje
    if (st.current.pet > 0) {
      st.current.pet -= dt;
      const pr = Math.min(1, 1 - st.current.pet / 0.9); // 0..1
      petHop = Math.sin(pr * Math.PI) * 0.45;           // één boog omhoog
      if (hart.current) {
        hart.current.visible = true;
        hart.current.position.y = 1.0 + pr * 0.9;
        hart.current.scale.setScalar((pr < 0.25 ? pr / 0.25 : 1) * 0.5);
      }
    } else if (hart.current) hart.current.visible = false;

    if (p) {
      const gy = heightRef?.current ? heightRef.current(cur.current.x, cur.current.z) : 0;
      if (vliegt) {
        // ✈️ vliegt rustig rondjes om de speler, op zachte op-en-neer-hoogte
        st.current.orbit = (st.current.orbit || 0) + dt * 0.7;
        const R = 1.85;
        const tx = p.x + Math.cos(st.current.orbit) * R;
        const tz = p.z + Math.sin(st.current.orbit) * R;
        const k = Math.min(1, dt * 4);
        cur.current.x += (tx - cur.current.x) * k;
        cur.current.z += (tz - cur.current.z) * k;
        const hoogte = 1.35 + Math.sin(s.clock.elapsedTime * 1.6) * 0.22;
        cur.current.y += (hoogte - cur.current.y) * Math.min(1, dt * 3);
        node.position.set(cur.current.x, gy + cur.current.y + petHop, cur.current.z);
        // 👀 af en toe de speler aankijken; anders langs de vliegrichting kijken
        if (st.current.aankijkWindow > 0) {
          st.current.aankijkWindow -= dt;
          if (st.current.aankijkWindow <= 0) st.current.aankijkT = 4 + Math.random() * 4;
        } else {
          st.current.aankijkT = (st.current.aankijkT ?? 3) - dt;
          if (st.current.aankijkT <= 0) st.current.aankijkWindow = 1.4 + Math.random() * 0.9;
        }
        const doel = st.current.aankijkWindow > 0
          ? Math.atan2(p.x - cur.current.x, p.z - cur.current.z)              // naar de speler kijken
          : Math.atan2(-Math.sin(st.current.orbit), Math.cos(st.current.orbit)); // langs de vliegrichting
        let d = doel - node.rotation.y;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        node.rotation.y += d * Math.min(1, dt * 5);
      } else {
        // 🚶 loopt NAAST + iets VÓÓR de speler (relatief aan z'n kijkrichting),
        // zodat hij hoog en vrij in beeld staat en niet onderaan achter de
        // winkel-balk valt (Mark 1 jul: "zoveel blokken dat je hem moeilijk ziet").
        const f = faceRef?.current;
        let tx, tz;
        if (f) {
          const rx = f.z, rz = -f.x;          // rechter-zijvector (loodrecht op kijkrichting)
          const side = 1.55, ahead = 0.7;     // naast + iets de scene in (= hoger in beeld)
          tx = p.x + rx * side + f.x * ahead;
          tz = p.z + rz * side + f.z * ahead;
        } else {
          tx = p.x + 1.25; tz = p.z + 0.7;
        }
        const k = Math.min(1, dt * 3.2);
        cur.current.x += (tx - cur.current.x) * k;
        cur.current.z += (tz - cur.current.z) * k;
        const dx = tx - cur.current.x, dz = tz - cur.current.z;
        const ver = Math.hypot(dx, dz);
        const beweegt = ver > 0.06;
        // Echte looppas voor de hond (Charley): 4 pootjes zwaaien in diagonale
        // gang (draf). Dan hoeft het lijf niet te hoppen → rustig lopen i.p.v.
        // nerveus huppelen (Mark 1 jul). Foto-3D-model (geen skelet) glijdt kalm.
        const hond = legsRef.current && legsRef.current[0];
        if (hond) {
          const swing = beweegt ? Math.sin(s.clock.elapsedTime * 9) * 0.5 : 0;
          if (legsRef.current[0]) legsRef.current[0].rotation.x = swing;   // voor-rechts
          if (legsRef.current[3]) legsRef.current[3].rotation.x = swing;   // achter-links (diagonaal)
          if (legsRef.current[1]) legsRef.current[1].rotation.x = -swing;  // voor-links
          if (legsRef.current[2]) legsRef.current[2].rotation.x = -swing;  // achter-rechts
        }
        const hop = (hond || model)
          ? 0                                                              // hond loopt op pootjes / model glijdt kalm
          : Math.abs(Math.sin(s.clock.elapsedTime * 6)) * (beweegt ? 0.18 : 0.05);
        node.position.set(cur.current.x, gy + baseY + hop + petHop, cur.current.z);
        if (beweegt) {
          const doel = Math.atan2(dx, dz);
          let d = doel - node.rotation.y;
          while (d > Math.PI) d -= Math.PI * 2;
          while (d < -Math.PI) d += Math.PI * 2;
          node.rotation.y += d * Math.min(1, dt * 8);
        }
      }
    }
    // vleugel-klap / bubbel-squash
    const flap = Math.sin(s.clock.elapsedTime * 10) * 0.5;
    if (flapRef.current[0]) flapRef.current[0].rotation.z = 0.5 + flap;
    if (flapRef.current[1]) flapRef.current[1].rotation.z = -0.5 - flap;
    if (squashRef.current) { const q = 1 + Math.sin(s.clock.elapsedTime * 5) * 0.06; squashRef.current.scale.set(1 / q, q, 1 / q); }
    // 🐶 Charley's bekkie: open/dicht-gekwebbel zolang er een praatwolkje staat
    // (st.bt > 0 = hij praat), anders rustig dichtgeknepen.
    if (mouthRef.current) {
      const praat = st.current.bt > 0;
      const doelOpen = praat ? 0.32 + Math.sin(s.clock.elapsedTime * 13) * 0.22 : 0;
      mouthRef.current.rotation.x += (doelOpen - mouthRef.current.rotation.x) * Math.min(1, dt * 14);
    }
    // 🐶 kwispelstaart — altijd vrolijk, extra snel als hij praat
    if (tailRef.current) {
      const wag = st.current.bt > 0 ? 17 : 9;
      tailRef.current.rotation.y = Math.sin(s.clock.elapsedTime * wag) * 0.5;
    }

    // praat-timer
    if (st.current.bt > 0) { st.current.bt -= dt; if (st.current.bt <= 0) setBubble(null); }
    st.current.next -= dt;
    if (st.current.next <= 0) {
      if (!st.current.introDone) { setBubble({ e: b.emoji, t: `Hoi, ik ben ${effNaam}! ${b.flavor}` }); st.current.introDone = true; st.current.bt = 4.5; }
      else { setBubble(buddyPraatje(b.soort, factsRef?.current)); st.current.bt = 3.8; }
      st.current.next = 9 + Math.random() * 8;
    }

    // Buddy-positie doorgeven (voor de "door de ogen van je buddy"-camera).
    if (posOutRef) posOutRef.current.copy(node.position);
  });

  if (!b) return null;
  return (
    <group
      ref={g}
      position={[2, baseY, 12]}
      visible={!verborgen}
      onPointerDown={aai}
      onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = "pointer"; }}
      onPointerOut={() => { document.body.style.cursor = "default"; }}
    >
      {bubble && (
        <Html position={[0, 1.05, 0]} center distanceFactor={9} zIndexRange={[5, 0]} style={{ pointerEvents: "none" }}>
          <div style={{ background: "#fff", borderRadius: 14, padding: "3px 10px", lineHeight: 1, boxShadow: "0 2px 7px rgba(0,0,0,.28)", userSelect: "none", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 18 }}>{bubble.e}</span>
            {bubble.t && <span style={{ fontSize: 12, fontWeight: 800, color: "#2a3340" }}>{bubble.t}</span>}
          </div>
        </Html>
      )}
      {/* zwevend hartje bij een aai (verborgen tot je 'm aait) */}
      <group ref={hart} position={[0, 1.0, 0]} visible={false}>
        {[[-0.07, 0.04], [0.07, 0.04]].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0]}><sphereGeometry args={[0.1, 10, 10]} /><meshStandardMaterial color="#ff5a7a" emissive="#ff3a64" emissiveIntensity={0.4} roughness={0.5} /></mesh>
        ))}
        <mesh position={[0, -0.06, 0]} rotation={[0, 0, Math.PI]}><coneGeometry args={[0.14, 0.2, 4]} /><meshStandardMaterial color="#ff5a7a" emissive="#ff3a64" emissiveIntensity={0.4} roughness={0.5} /></mesh>
      </group>
      <group ref={lijf}>
        {model
          ? <MaatjeModel url={model} />
          : <Lijf soort={b.soort} c={b} flapRef={flapRef} squashRef={squashRef} mouthRef={mouthRef} tailRef={tailRef} legsRef={legsRef} />}
      </group>
    </group>
  );
}
