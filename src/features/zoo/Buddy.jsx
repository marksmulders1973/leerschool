// Buddy — een droom/fantasie-maatje dat met het poppetje meedribbelt en af en
// toe een praatwolkje toont. Low-poly in de parkstijl. Het maatje trailt naast
// de speler (vaste zij-offset, soepel ge-lerpt), hupt vrolijk en draait mee in
// z'n looprichting. Praatjes komen uit buddies.js (sjablonen + echte feiten).
import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Vector3 } from "three";
import { buddyPraatje, buddyAai, buddyGrootte, BUDDY_BY_ID } from "./buddies";

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

function Lijf({ soort, c, flapRef, squashRef }) {
  if (soort === "draakje") return <Draakje c={c} flapRef={flapRef} />;
  if (soort === "eenhoorn") return <Eenhoorn c={c} />;
  if (soort === "uil") return <Uil c={c} flapRef={flapRef} />;
  if (soort === "ster") return <Ster c={c} />;
  if (soort === "fenix") return <Fenix c={c} flapRef={flapRef} />;
  return <Bubbel c={c} squashRef={squashRef} />;
}

// ── De meelopende maatje-component ──────────────────────────────────────────
export default function Buddy({ kind, posRef, heightRef, factsRef, groei = 0, buddyNaam = "", onPraat }) {
  const b = BUDDY_BY_ID[kind];
  const effNaam = (buddyNaam || b?.naam || "").trim();
  const g = useRef();
  const lijf = useRef();      // het lijf apart, zodat we het kunnen laten "meegroeien"
  const hart = useRef();      // zwevend hartje bij een aai
  const cur = useRef(new Vector3(2, 0, 12));
  const flapRef = useRef([]);
  const squashRef = useRef();
  const [bubble, setBubble] = useState(null);
  const st = useRef({ bt: 0, next: 4 + Math.random() * 4, introDone: false, pet: 0, grow: 0.8 });
  const zweef = kind === "draakje" || kind === "bubbel" || kind === "ster" || kind === "fenix";
  const baseY = zweef ? 0.62 : 0.36;
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
      // doel: een vaste zij-offset naast de speler (front-rechts)
      const tx = p.x + 1.25, tz = p.z + 0.7;
      const k = Math.min(1, dt * 3.2);
      cur.current.x += (tx - cur.current.x) * k;
      cur.current.z += (tz - cur.current.z) * k;
      const dx = tx - cur.current.x, dz = tz - cur.current.z;
      const ver = Math.hypot(dx, dz);
      const beweegt = ver > 0.06;
      const gy = heightRef?.current ? heightRef.current(cur.current.x, cur.current.z) : 0;
      const hop = Math.abs(Math.sin(s.clock.elapsedTime * 6)) * (beweegt ? 0.18 : 0.05);
      node.position.set(cur.current.x, gy + baseY + hop + petHop, cur.current.z);
      if (beweegt) {
        const doel = Math.atan2(dx, dz);
        let d = doel - node.rotation.y;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        node.rotation.y += d * Math.min(1, dt * 8);
      }
    }
    // vleugel-klap / bubbel-squash
    const flap = Math.sin(s.clock.elapsedTime * 10) * 0.5;
    if (flapRef.current[0]) flapRef.current[0].rotation.z = 0.5 + flap;
    if (flapRef.current[1]) flapRef.current[1].rotation.z = -0.5 - flap;
    if (squashRef.current) { const q = 1 + Math.sin(s.clock.elapsedTime * 5) * 0.06; squashRef.current.scale.set(1 / q, q, 1 / q); }

    // praat-timer
    if (st.current.bt > 0) { st.current.bt -= dt; if (st.current.bt <= 0) setBubble(null); }
    st.current.next -= dt;
    if (st.current.next <= 0) {
      if (!st.current.introDone) { setBubble({ e: b.emoji, t: `Hoi, ik ben ${effNaam}! ${b.flavor}` }); st.current.introDone = true; st.current.bt = 4.5; }
      else { setBubble(buddyPraatje(b.soort, factsRef?.current)); st.current.bt = 3.8; }
      st.current.next = 9 + Math.random() * 8;
    }
  });

  if (!b) return null;
  return (
    <group
      ref={g}
      position={[2, baseY, 12]}
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
        <Lijf soort={b.soort} c={b} flapRef={flapRef} squashRef={squashRef} />
      </group>
    </group>
  );
}
