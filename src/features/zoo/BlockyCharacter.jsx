// BlockyCharacter — Minecraft-achtig poppetje, 100% procedureel (geen
// model-bestanden, geen rig-pijplijn): hoofd/romp/armen/benen als blokken met
// zwaaiende ledematen tijdens het lopen. Het palet (huid/haar/shirt/broek)
// maakt elk personage anders; `pet: true` geeft een petje i.p.v. haar.
// movingRef mag een boolean zijn (bezoekers) of de loopsnelheid in m/s
// (speler) — het zwaai-tempo schaalt dan mee met hoe hard je loopt.
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Kapsel per `stijl` (4 nov 2026, 30 poppetjes): kort (standaard), lang,
// krullen, staartjes, knot, kaal, pet, hoofddoek, muts. Oude `pet: true` =
// stijl "pet". Alles blokjes, zodat het bij de blok-wereld blijft passen.
function Kapsel({ P }) {
  const stijl = P.stijl || (P.pet ? "pet" : "kort");
  const H = (props) => <meshStandardMaterial color={P.haar} roughness={1} {...props} />;
  switch (stijl) {
    case "kaal":
      return null;
    case "pet": {
      const k = P.petKleur || P.haar;
      return (
        <>
          <mesh position={[0, 0.26, -0.02]}><boxGeometry args={[0.54, 0.12, 0.54]} /><meshStandardMaterial color={k} roughness={1} /></mesh>
          <mesh position={[0, 0.22, 0.3]}><boxGeometry args={[0.46, 0.05, 0.2]} /><meshStandardMaterial color={k} roughness={1} /></mesh>
          {/* haar onder de pet, achter en opzij */}
          <mesh position={[0, 0.12, -0.2]}><boxGeometry args={[0.52, 0.16, 0.14]} /><H /></mesh>
        </>
      );
    }
    case "muts": {
      const k = P.muts || "#e53935";
      return (
        <>
          <mesh position={[0, 0.3, 0]}><boxGeometry args={[0.56, 0.22, 0.56]} /><meshStandardMaterial color={k} roughness={1} /></mesh>
          <mesh position={[0, 0.17, 0]}><boxGeometry args={[0.58, 0.1, 0.58]} /><meshStandardMaterial color={k} roughness={1} /></mesh>
          <mesh position={[0, 0.47, 0]}><boxGeometry args={[0.18, 0.14, 0.18]} /><meshStandardMaterial color="#f5f5f5" roughness={1} /></mesh>
        </>
      );
    }
    case "hoofddoek": {
      const k = P.doek || "#6a1b9a";
      return (
        <>
          <mesh position={[0, 0.2, -0.01]}><boxGeometry args={[0.56, 0.2, 0.56]} /><meshStandardMaterial color={k} roughness={1} /></mesh>
          <mesh position={[0, -0.06, -0.08]}><boxGeometry args={[0.58, 0.44, 0.44]} /><meshStandardMaterial color={k} roughness={1} /></mesh>
          <mesh position={[0, -0.4, -0.02]}><boxGeometry args={[0.46, 0.3, 0.46]} /><meshStandardMaterial color={k} roughness={1} /></mesh>
        </>
      );
    }
    case "lang":
      return (
        <>
          <mesh position={[0, 0.23, -0.03]}><boxGeometry args={[0.54, 0.16, 0.5]} /><H /></mesh>
          <mesh position={[0, -0.12, -0.2]}><boxGeometry args={[0.54, 0.62, 0.16]} /><H /></mesh>
          <mesh position={[-0.27, -0.1, 0.02]}><boxGeometry args={[0.06, 0.5, 0.44]} /><H /></mesh>
          <mesh position={[0.27, -0.1, 0.02]}><boxGeometry args={[0.06, 0.5, 0.44]} /><H /></mesh>
        </>
      );
    case "krullen":
      return (
        <>
          <mesh position={[0, 0.27, -0.02]}><boxGeometry args={[0.6, 0.24, 0.6]} /><H /></mesh>
          <mesh position={[-0.2, 0.36, 0.1]}><boxGeometry args={[0.16, 0.14, 0.16]} /><H /></mesh>
          <mesh position={[0.18, 0.37, -0.12]}><boxGeometry args={[0.16, 0.14, 0.16]} /><H /></mesh>
          <mesh position={[0.02, 0.38, 0.14]}><boxGeometry args={[0.14, 0.12, 0.14]} /><H /></mesh>
          <mesh position={[-0.29, 0.1, -0.05]}><boxGeometry args={[0.1, 0.24, 0.44]} /><H /></mesh>
          <mesh position={[0.29, 0.1, -0.05]}><boxGeometry args={[0.1, 0.24, 0.44]} /><H /></mesh>
        </>
      );
    case "staartjes":
      return (
        <>
          <mesh position={[0, 0.23, -0.03]}><boxGeometry args={[0.54, 0.16, 0.5]} /><H /></mesh>
          <mesh position={[-0.32, 0.02, -0.08]}><boxGeometry args={[0.12, 0.34, 0.14]} /><H /></mesh>
          <mesh position={[0.32, 0.02, -0.08]}><boxGeometry args={[0.12, 0.34, 0.14]} /><H /></mesh>
          <mesh position={[-0.32, 0.2, -0.08]}><boxGeometry args={[0.12, 0.08, 0.14]} /><meshStandardMaterial color="#ff4081" roughness={1} /></mesh>
          <mesh position={[0.32, 0.2, -0.08]}><boxGeometry args={[0.12, 0.08, 0.14]} /><meshStandardMaterial color="#ff4081" roughness={1} /></mesh>
        </>
      );
    case "knot":
      return (
        <>
          <mesh position={[0, 0.23, -0.03]}><boxGeometry args={[0.54, 0.16, 0.5]} /><H /></mesh>
          <mesh position={[0, 0.38, -0.08]}><boxGeometry args={[0.22, 0.18, 0.22]} /><H /></mesh>
        </>
      );
    default: // kort
      return <mesh position={[0, 0.23, -0.03]}><boxGeometry args={[0.54, 0.16, 0.5]} /><H /></mesh>;
  }
}

// `bouwt`: het poppetje houdt een bouwhamer vast (rechterarm geheven, zachte
// hamer-zwaai) — zo zie je meteen dat je in bouw-modus bent (Mark 2 jul).
export default function BlockyCharacter({ palette = {}, movingRef, targetHeight = 1.65, bouwt = false }) {
  const la = useRef(), ra = useRef(), ll = useRef(), rl = useRef(), romp = useRef();
  const P = { huid: "#f0c8a0", haar: "#3a2a1a", shirt: "#4a90d9", broek: "#35485c", schoen: "#26292c", ...palette };
  const fase = useRef(Math.random() * Math.PI * 2); // niet iedereen synchroon

  useFrame((_, dt) => {
    const v = movingRef?.current;
    const speed = typeof v === "number" ? v : v ? 1.4 : 0;
    const loopt = speed > 0.3;
    fase.current += Math.min(dt, 0.05) * (loopt ? 4 + speed * 1.6 : 1.7);
    const t = fase.current;
    const zwaai = loopt ? Math.min(0.85, 0.3 + speed * 0.12) : 0;
    const idle = loopt ? 0 : Math.sin(t) * 0.05;
    if (la.current) la.current.rotation.x = Math.sin(t) * zwaai + idle;
    if (ra.current) {
      if (bouwt) {
        // Bouw-pose: arm schuin OPZIJ omhoog + zachte hamer-zwaai. Let op het
        // teken: −z zwaaide de RECHTERarm naar bínnen, dwars door de romp —
        // "hamertje steekt uit buik" (Brian, 20 aug). +z = van het lijf af.
        ra.current.rotation.x = -0.35 + Math.sin(t * 2.2) * 0.12;
        ra.current.rotation.z = 0.95;
      } else {
        ra.current.rotation.x = -Math.sin(t) * zwaai - idle;
        ra.current.rotation.z = 0;
      }
    }
    if (ll.current) ll.current.rotation.x = -Math.sin(t) * zwaai;
    if (rl.current) rl.current.rotation.x = Math.sin(t) * zwaai;
    if (romp.current) romp.current.position.y = loopt ? Math.abs(Math.sin(t)) * 0.05 : Math.sin(t * 0.7) * 0.012;
  });

  const Been = ({ eigenRef, x }) => (
    <group ref={eigenRef} position={[x, 0.72, 0]}>
      <mesh position={[0, -0.36, 0]} castShadow><boxGeometry args={[0.22, 0.72, 0.24]} /><meshStandardMaterial color={P.broek} roughness={1} /></mesh>
      <mesh position={[0, -0.69, 0.04]} castShadow><boxGeometry args={[0.24, 0.13, 0.34]} /><meshStandardMaterial color={P.schoen} roughness={1} /></mesh>
    </group>
  );
  const Arm = ({ eigenRef, x, hamer = false }) => (
    <group ref={eigenRef} position={[x, 1.32, 0]}>
      <mesh position={[0, -0.26, 0]} castShadow><boxGeometry args={[0.17, 0.52, 0.21]} /><meshStandardMaterial color={P.shirt} roughness={1} /></mesh>
      <mesh position={[0, -0.59, 0]} castShadow><boxGeometry args={[0.17, 0.16, 0.21]} /><meshStandardMaterial color={P.huid} roughness={1} /></mesh>
      {hamer && (
        <group position={[0, -0.62, 0.14]} rotation={[Math.PI / 2.4, 0, 0]}>
          <mesh castShadow><boxGeometry args={[0.07, 0.52, 0.07]} /><meshStandardMaterial color="#8a6a44" roughness={1} /></mesh>
          <mesh position={[0, 0.29, 0]} castShadow><boxGeometry args={[0.32, 0.17, 0.17]} /><meshStandardMaterial color="#6f7d8a" roughness={0.7} /></mesh>
        </group>
      )}
    </group>
  );

  return (
    // Native ~1.86 hoog → schalen naar targetHeight. Gezicht kijkt naar +z
    // (de kijkrichting van Player/bezoekers in de app).
    <group scale={targetHeight / 1.86}>
      <group ref={romp}>
        <Been eigenRef={ll} x={-0.13} />
        <Been eigenRef={rl} x={0.13} />
        <mesh position={[0, 1.05, 0]} castShadow><boxGeometry args={[0.52, 0.66, 0.3]} /><meshStandardMaterial color={P.shirt} roughness={1} /></mesh>
        <Arm eigenRef={la} x={-0.35} />
        <Arm eigenRef={ra} x={0.35} hamer={bouwt} />
        {/* Hoofd: blok + kapsel (stijl) + gezicht op de +z-kant. */}
        <group position={[0, 1.64, 0]}>
          <mesh castShadow><boxGeometry args={[0.5, 0.48, 0.5]} /><meshStandardMaterial color={P.huid} roughness={1} /></mesh>
          <Kapsel P={P} />
          {P.bril && (
            <group position={[0, 0.02, 0.262]}>
              <mesh position={[-0.11, 0, 0]}><boxGeometry args={[0.15, 0.14, 0.02]} /><meshStandardMaterial color="#1d2a45" roughness={0.6} /></mesh>
              <mesh position={[0.11, 0, 0]}><boxGeometry args={[0.15, 0.14, 0.02]} /><meshStandardMaterial color="#1d2a45" roughness={0.6} /></mesh>
              <mesh position={[0, 0, 0]}><boxGeometry args={[0.08, 0.025, 0.02]} /><meshStandardMaterial color="#1d2a45" roughness={0.6} /></mesh>
              <mesh position={[-0.11, 0, 0.005]}><boxGeometry args={[0.1, 0.09, 0.02]} /><meshStandardMaterial color="#cfe6ff" roughness={0.3} transparent opacity={0.55} /></mesh>
              <mesh position={[0.11, 0, 0.005]}><boxGeometry args={[0.1, 0.09, 0.02]} /><meshStandardMaterial color="#cfe6ff" roughness={0.3} transparent opacity={0.55} /></mesh>
            </group>
          )}
          {/* Ogen (wit + pupil) en een klein mondje. */}
          <mesh position={[-0.11, 0.02, 0.253]}><boxGeometry args={[0.09, 0.1, 0.01]} /><meshStandardMaterial color="#ffffff" roughness={0.5} /></mesh>
          <mesh position={[0.11, 0.02, 0.253]}><boxGeometry args={[0.09, 0.1, 0.01]} /><meshStandardMaterial color="#ffffff" roughness={0.5} /></mesh>
          <mesh position={[-0.1, 0.01, 0.258]}><boxGeometry args={[0.045, 0.06, 0.01]} /><meshStandardMaterial color="#2a3a55" roughness={0.5} /></mesh>
          <mesh position={[0.12, 0.01, 0.258]}><boxGeometry args={[0.045, 0.06, 0.01]} /><meshStandardMaterial color="#2a3a55" roughness={0.5} /></mesh>
          <mesh position={[0, -0.15, 0.253]}><boxGeometry args={[0.14, 0.035, 0.01]} /><meshStandardMaterial color="#a05a4a" roughness={1} /></mesh>
        </group>
      </group>
    </group>
  );
}
