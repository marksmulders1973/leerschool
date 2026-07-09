// VonkHead — geanimeerde 3D kop + nek van Vonk (het draakje, vlaggenschip-
// maatje), voor de uitleg-tutor en de fout-uitleg-overlay. Zelfde recept als
// CharleyHead: procedureel kopje in de parkstijl met een scharnierende
// onderkaak die opengaat terwijl Vonk praat. Herkenbaar aan het park-draakje
// (Buddy.jsx): ronde groene kop, donkergroene snuit, gele hoorntjes + kam,
// gele keelvlek. Extra levendig: oorvinnetjes die wiebelen en knipperoogjes.
//
// Eigen mini-canvas (los van het park-canvas), vangt geen klikken.
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const K = {
  groen: "#5bbf5a",   // vacht (buddies.js kleur)
  donker: "#3f8f3a",  // snuit + vinnen (kleur2)
  geel: "#ffd23a",    // hoorntjes + kam + keel (accent)
  oog: "#22303a",     // zelfde oogkleur als park-draakje
  neus: "#2b4a28",
  tong: "#e98697",
};

function HeadMesh({ praatRef }) {
  const head = useRef();
  const jaw = useRef();
  const finL = useRef();
  const finR = useRef();
  const eyeL = useRef();
  const eyeR = useRef();
  const st = useRef({ blink: 2.5 + Math.random() * 3, blinkT: 0 });

  useFrame((s, rawDt) => {
    // dt clampen tegen rAF-throttling (achtergrond-tab) — zie MaatjeKoppen.
    const dt = Math.min(rawDt, 0.05);
    const t = s.clock.elapsedTime;
    // zacht meebewegen (levendig, niet stijf) — draakjes zweven, dus iets
    // meer op-en-neer dan Charley
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.8) * 0.12;
      head.current.rotation.z = Math.sin(t * 0.6) * 0.04;
      head.current.position.y = -0.05 + Math.sin(t * 1.9) * 0.03;
    }
    // onderkaak: open/dicht-gekwebbel terwijl hij praat, anders bijna dicht
    if (jaw.current) {
      const praat = praatRef.current;
      const doel = praat ? 0.34 + Math.sin(t * 14) * 0.24 : 0.03;
      jaw.current.rotation.x += (doel - jaw.current.rotation.x) * Math.min(1, dt * 16);
    }
    // oorvinnetjes wiebelen zacht
    if (finL.current) finL.current.rotation.z = 0.5 + Math.sin(t * 1.4) * 0.09;
    if (finR.current) finR.current.rotation.z = -0.5 - Math.sin(t * 1.4) * 0.09;
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
        <cylinderGeometry args={[0.28, 0.4, 0.5, 16]} /><meshStandardMaterial color={K.groen} flatShading roughness={0.85} />
      </mesh>
      {/* gele keelvlek vooraan de nek (zoals de buik van het park-draakje) */}
      <mesh position={[0, -0.62, 0.2]} scale={[0.65, 0.9, 0.5]}>
        <sphereGeometry args={[0.26, 12, 12]} /><meshStandardMaterial color={K.geel} flatShading roughness={0.9} />
      </mesh>
      {/* ronde kop (zoals park-draakje, geen blokkop) */}
      <mesh position={[0, 0.02, 0]} scale={[1, 0.94, 0.98]}>
        <sphereGeometry args={[0.37, 16, 16]} /><meshStandardMaterial color={K.groen} flatShading roughness={0.85} />
      </mesh>
      {/* gele hoorntjes */}
      {[-0.14, 0.14].map((x, i) => (
        <mesh key={i} position={[x, 0.38, -0.02]} rotation={[0, 0, x < 0 ? 0.18 : -0.18]}>
          <coneGeometry args={[0.07, 0.22, 6]} /><meshStandardMaterial color={K.geel} flatShading roughness={0.7} />
        </mesh>
      ))}
      {/* kam-stekeltje midden op de kop */}
      <mesh position={[0, 0.4, -0.18]} rotation={[-0.5, 0, 0]}>
        <coneGeometry args={[0.055, 0.16, 6]} /><meshStandardMaterial color={K.geel} flatShading roughness={0.7} />
      </mesh>
      {/* bovensnuit (vast) */}
      <mesh position={[0, -0.08, 0.36]}><boxGeometry args={[0.26, 0.15, 0.24]} /><meshStandardMaterial color={K.donker} flatShading roughness={0.85} /></mesh>
      {/* neusgaatjes */}
      {[-0.07, 0.07].map((x, i) => (
        <mesh key={i} position={[x, -0.04, 0.485]}><sphereGeometry args={[0.025, 8, 8]} /><meshStandardMaterial color={K.neus} roughness={0.5} /></mesh>
      ))}
      {/* oogjes (knipperen) */}
      <mesh ref={eyeL} position={[-0.15, 0.12, 0.3]}><sphereGeometry args={[0.065, 12, 12]} /><meshStandardMaterial color={K.oog} roughness={0.35} /></mesh>
      <mesh ref={eyeR} position={[0.15, 0.12, 0.3]}><sphereGeometry args={[0.065, 12, 12]} /><meshStandardMaterial color={K.oog} roughness={0.35} /></mesh>
      {/* onderkaak (scharniert open als hij praat), met tongetje */}
      <group ref={jaw} position={[0, -0.17, 0.26]}>
        <mesh position={[0, -0.04, 0.11]}><boxGeometry args={[0.24, 0.09, 0.22]} /><meshStandardMaterial color={K.donker} flatShading roughness={0.85} /></mesh>
        <mesh position={[0, -0.005, 0.18]} rotation={[0.4, 0, 0]}><boxGeometry args={[0.11, 0.03, 0.14]} /><meshStandardMaterial color={K.tong} roughness={0.6} /></mesh>
      </group>
      {/* oorvinnetjes opzij (wiebelen) */}
      <mesh ref={finL} position={[-0.36, 0.08, -0.02]} rotation={[0, 0, 0.5]} scale={[1, 1, 0.35]}>
        <coneGeometry args={[0.1, 0.26, 4]} /><meshStandardMaterial color={K.donker} flatShading roughness={0.85} />
      </mesh>
      <mesh ref={finR} position={[0.36, 0.08, -0.02]} rotation={[0, 0, -0.5]} scale={[1, 1, 0.35]}>
        <coneGeometry args={[0.1, 0.26, 4]} /><meshStandardMaterial color={K.donker} flatShading roughness={0.85} />
      </mesh>
    </group>
  );
}

export default function VonkHead({ size = 64, praat = false, rim }) {
  const praatRef = useRef(praat);
  praatRef.current = praat;
  return (
    <Canvas
      camera={{ position: [0, -0.1, 2.55], fov: 30 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ width: size, height: size, display: "block", pointerEvents: "none", flexShrink: 0 }}
    >
      <ambientLight intensity={0.95} />
      <directionalLight position={[2.5, 3, 2.5]} intensity={1.2} />
      <directionalLight position={[-2.5, 1.5, 2]} intensity={0.5} color="#ffe9c9" />
      {/* rim-licht in de maatje-kleur (zie BuddyKop pop-out, 9 jul) */}
      <directionalLight position={[0, 2.2, -3]} intensity={1.7} color={rim || "#ffd23a"} />
      <Suspense fallback={null}>
        <HeadMesh praatRef={praatRef} />
      </Suspense>
    </Canvas>
  );
}
