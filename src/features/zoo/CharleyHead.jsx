// CharleyHead — geanimeerde 3D kop + nek van Charley (Mark's bokser), voor de
// uitleg-tutor. Geen los .glb (dat kan z'n mond niet bewegen): dit is een
// procedureel kopje in de parkstijl met een scharnierende onderkaak die opengaat
// terwijl Charley praat. Zo gelijkend als low-poly toelaat: brindle bruin, donker
// boksermasker, witte bles + befje, hangoren, brindle-streepjes, knipperoogjes.
//
// Eigen mini-canvas (los van het park-canvas), vangt geen klikken.
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const K = {
  bruin: "#7a5232",   // brindle vacht
  donker: "#2c2118",  // boksermasker + oren
  wit: "#f1ece1",     // bles + befje
  streep: "#49331f",  // brindle-streepjes
  neus: "#1a1410",
  tong: "#e98697",
};

function HeadMesh({ praatRef }) {
  const head = useRef();
  const jaw = useRef();
  const earL = useRef();
  const earR = useRef();
  const eyeL = useRef();
  const eyeR = useRef();
  const st = useRef({ blink: 2.5 + Math.random() * 3, blinkT: 0 });

  useFrame((s, rawDt) => {
    // dt clampen tegen rAF-throttling (achtergrond-tab) — zie MaatjeKoppen.
    const dt = Math.min(rawDt, 0.05);
    const t = s.clock.elapsedTime;
    // zacht meebewegen (levendig, niet stijf)
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.8) * 0.12;
      head.current.rotation.z = Math.sin(t * 0.6) * 0.04;
      head.current.position.y = -0.05 + Math.sin(t * 1.6) * 0.02;
    }
    // onderkaak: open/dicht-gekwebbel terwijl hij praat, anders bijna dicht
    if (jaw.current) {
      const praat = praatRef.current;
      const doel = praat ? 0.34 + Math.sin(t * 14) * 0.24 : 0.03;
      jaw.current.rotation.x += (doel - jaw.current.rotation.x) * Math.min(1, dt * 16);
    }
    // hangoren wiebelen zacht
    if (earL.current) earL.current.rotation.z = 0.28 + Math.sin(t * 1.3) * 0.07;
    if (earR.current) earR.current.rotation.z = -0.28 - Math.sin(t * 1.3) * 0.07;
    // af en toe knipperen
    st.current.blink -= dt;
    if (st.current.blink <= 0) { st.current.blinkT = 0.13; st.current.blink = 2.5 + Math.random() * 3; }
    let eyeSy = 1;
    if (st.current.blinkT > 0) { st.current.blinkT -= dt; eyeSy = 0.12; }
    if (eyeL.current) eyeL.current.scale.y = eyeSy;
    if (eyeR.current) eyeR.current.scale.y = eyeSy;
  });

  return (
    <group ref={head} position={[0, -0.05, 0]}>
      {/* nek */}
      <mesh position={[0, -0.6, -0.04]} rotation={[0.18, 0, 0]}>
        <cylinderGeometry args={[0.32, 0.44, 0.5, 16]} /><meshStandardMaterial color={K.bruin} flatShading roughness={0.9} />
      </mesh>
      {/* wit befje vooraan de nek */}
      <mesh position={[0, -0.64, 0.22]} scale={[0.7, 0.95, 0.5]}>
        <sphereGeometry args={[0.26, 12, 12]} /><meshStandardMaterial color={K.wit} flatShading roughness={0.95} />
      </mesh>
      {/* kop */}
      <mesh position={[0, 0, 0]} scale={[1, 0.95, 1]}>
        <boxGeometry args={[0.66, 0.6, 0.62]} /><meshStandardMaterial color={K.bruin} flatShading roughness={0.9} />
      </mesh>
      {/* brindle-streepjes over de kop */}
      {[-0.2, -0.07, 0.07, 0.2].map((x, i) => (
        <mesh key={i} position={[x, 0.12, 0.315]}><boxGeometry args={[0.035, 0.5, 0.02]} /><meshStandardMaterial color={K.streep} flatShading roughness={0.9} /></mesh>
      ))}
      {/* donker boksermasker (onderste helft gezicht) */}
      <mesh position={[0, -0.16, 0.26]} scale={[0.95, 0.72, 0.72]}>
        <boxGeometry args={[0.6, 0.4, 0.36]} /><meshStandardMaterial color={K.donker} flatShading roughness={0.9} />
      </mesh>
      {/* bovenkaak/snuit (vast) */}
      <mesh position={[0, -0.11, 0.5]}><boxGeometry args={[0.34, 0.17, 0.22]} /><meshStandardMaterial color={K.donker} flatShading roughness={0.9} /></mesh>
      {/* neus */}
      <mesh position={[0, -0.04, 0.63]}><boxGeometry args={[0.17, 0.12, 0.1]} /><meshStandardMaterial color={K.neus} roughness={0.5} /></mesh>
      {/* witte bles over de snuit naar het voorhoofd */}
      <mesh position={[0, 0.2, 0.42]}><boxGeometry args={[0.1, 0.5, 0.16]} /><meshStandardMaterial color={K.wit} flatShading roughness={0.95} /></mesh>
      {/* oogjes (knipperen) */}
      <mesh ref={eyeL} position={[-0.2, 0.07, 0.43]}><sphereGeometry args={[0.07, 12, 12]} /><meshStandardMaterial color="#241a12" roughness={0.35} /></mesh>
      <mesh ref={eyeR} position={[0.2, 0.07, 0.43]}><sphereGeometry args={[0.07, 12, 12]} /><meshStandardMaterial color="#241a12" roughness={0.35} /></mesh>
      {/* onderkaak (scharniert open als hij praat), met tongetje */}
      <group ref={jaw} position={[0, -0.19, 0.4]}>
        <mesh position={[0, -0.04, 0.08]}><boxGeometry args={[0.32, 0.1, 0.2]} /><meshStandardMaterial color={K.donker} flatShading roughness={0.9} /></mesh>
        <mesh position={[0, -0.01, 0.16]} rotation={[0.4, 0, 0]}><boxGeometry args={[0.14, 0.03, 0.16]} /><meshStandardMaterial color={K.tong} roughness={0.6} /></mesh>
      </group>
      {/* hangoren (wiebelen) */}
      <mesh ref={earL} position={[-0.36, 0.16, 0.02]} rotation={[0, 0, 0.28]}><boxGeometry args={[0.13, 0.36, 0.22]} /><meshStandardMaterial color={K.donker} flatShading roughness={0.9} /></mesh>
      <mesh ref={earR} position={[0.36, 0.16, 0.02]} rotation={[0, 0, -0.28]}><boxGeometry args={[0.13, 0.36, 0.22]} /><meshStandardMaterial color={K.donker} flatShading roughness={0.9} /></mesh>
    </group>
  );
}

export default function CharleyHead({ size = 64, praat = false }) {
  const praatRef = useRef(praat);
  praatRef.current = praat;
  return (
    <Canvas
      camera={{ position: [0, -0.1, 2.55], fov: 30 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ width: size, height: size, display: "block", pointerEvents: "none" }}
    >
      <ambientLight intensity={1.05} />
      <directionalLight position={[2.5, 3, 2.5]} intensity={1.15} />
      <directionalLight position={[-2.5, 1.5, 2]} intensity={0.55} color="#ffe9c9" />
      <Suspense fallback={null}>
        <HeadMesh praatRef={praatRef} />
      </Suspense>
    </Canvas>
  );
}
