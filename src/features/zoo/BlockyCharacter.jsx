// BlockyCharacter — Minecraft-achtig poppetje, 100% procedureel (geen
// model-bestanden, geen rig-pijplijn): hoofd/romp/armen/benen als blokken met
// zwaaiende ledematen tijdens het lopen. Het palet (huid/haar/shirt/broek)
// maakt elk personage anders; `pet: true` geeft een petje i.p.v. haar.
// movingRef mag een boolean zijn (bezoekers) of de loopsnelheid in m/s
// (speler) — het zwaai-tempo schaalt dan mee met hoe hard je loopt.
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

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
        {/* Hoofd: blok + haar of petje + gezicht op de +z-kant. */}
        <group position={[0, 1.64, 0]}>
          <mesh castShadow><boxGeometry args={[0.5, 0.48, 0.5]} /><meshStandardMaterial color={P.huid} roughness={1} /></mesh>
          {P.pet ? (
            <>
              <mesh position={[0, 0.26, -0.02]}><boxGeometry args={[0.54, 0.12, 0.54]} /><meshStandardMaterial color={P.haar} roughness={1} /></mesh>
              <mesh position={[0, 0.22, 0.3]}><boxGeometry args={[0.46, 0.05, 0.2]} /><meshStandardMaterial color={P.haar} roughness={1} /></mesh>
            </>
          ) : (
            <mesh position={[0, 0.23, -0.03]}><boxGeometry args={[0.54, 0.16, 0.5]} /><meshStandardMaterial color={P.haar} roughness={1} /></mesh>
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
