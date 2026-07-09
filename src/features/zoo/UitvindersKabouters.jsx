// Uitvinders-kabouters — kleine diorama's in het park waar kabouters beroemde
// uitvindingen/ontdekkingen nabouwen (Mark's idee, 9 jul: "je loopt door je
// park en ziet leuke en interessante dingen — je buddy vertelt erover of
// stuurt je naar de les"). Fase 1: drie taferelen langs de ingangslaan.
//
//   🍎 Newton-appelboom   → zwaartekracht  → leerpad krachten-natuurkunde
//   🔺 Piramidebouwers    → hellingbaan/verhoudingen → leerpad verhoudingen-po
//   ⚡ Bliksemkooi        → kooi van Faraday/elektriciteit → elektriciteit-natuurkunde
//
// Alles procedureel low-poly (blokjes + kegel-muts, zelfde stijl als de
// maatje-koppen) — géén .glb's, dus licht op telefoons. Kabouters heten
// bewust NIET Newton/Tesla (gelijkenis-rechten): Professor Isaac & Meester
// Nikola zijn knipoog-kabouters. Tik op een tafereel → praatje + leer-link.
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// Config (posities, praatjes, leerpad-links) staat in uitvindersData.js —
// licht bestand zonder three.js, zodat de game-wrapper het ook kan lezen.
// Posities liggen langs de ingangslaan (x ±3 = pad, z 35..77): statisch
// parkland, botst niet met bouwsels.
import { TAFERELEN } from "./uitvindersData";

/* ── bouwstenen ────────────────────────────────────────────────────────── */

// Low-poly kabouter (~0.95 m): laarsjes, jas, baard, kop, rode puntmuts.
// anim: "idle" (wiegt zacht) | "duw" (leunt naar voren) | "wijs" (arm omhoog)
// | "zwaai" (zwaait vriendelijk) | "zit" (kortere pose).
function Kabouter({ position = [0, 0, 0], rotY = 0, muts = "#c0392b", jas = "#3a6ad8", anim = "idle", zit = false }) {
  const root = useRef();
  const armR = useRef();
  const fase = useRef(Math.random() * Math.PI * 2);
  useFrame((s) => {
    const t = s.clock.elapsedTime + fase.current;
    if (root.current) {
      root.current.rotation.z = anim === "duw" ? 0 : Math.sin(t * 1.6) * 0.03;
      root.current.rotation.x = anim === "duw" ? 0.35 : 0;
      root.current.position.y = position[1] + (zit ? -0.18 : 0) + (anim === "idle" ? Math.abs(Math.sin(t * 2.2)) * 0.02 : 0);
    }
    if (armR.current) {
      if (anim === "wijs") armR.current.rotation.x = -2.4 + Math.sin(t * 2) * 0.1;
      else if (anim === "zwaai") armR.current.rotation.x = -2.6 + Math.sin(t * 5) * 0.45;
      else if (anim === "duw") armR.current.rotation.x = -1.5;
      else armR.current.rotation.x = Math.sin(t * 1.8) * 0.15;
    }
  });
  return (
    <group ref={root} position={position} rotation={[0, rotY, 0]}>
      {/* laarsjes */}
      <mesh position={[-0.09, 0.06, 0.02]}><boxGeometry args={[0.12, 0.12, 0.2]} /><meshStandardMaterial color="#3a2a1a" flatShading /></mesh>
      <mesh position={[0.09, 0.06, 0.02]}><boxGeometry args={[0.12, 0.12, 0.2]} /><meshStandardMaterial color="#3a2a1a" flatShading /></mesh>
      {/* jasje (romp) */}
      <mesh position={[0, 0.32, 0]}><cylinderGeometry args={[0.14, 0.2, 0.42, 10]} /><meshStandardMaterial color={jas} flatShading roughness={0.9} /></mesh>
      {/* riem */}
      <mesh position={[0, 0.2, 0]}><cylinderGeometry args={[0.185, 0.195, 0.06, 10]} /><meshStandardMaterial color="#241a10" flatShading /></mesh>
      {/* armen (rechter kan wijzen/zwaaien/duwen) */}
      <mesh position={[-0.2, 0.42, 0]} rotation={[0, 0, 0.5]}><cylinderGeometry args={[0.045, 0.05, 0.3, 8]} /><meshStandardMaterial color={jas} flatShading /></mesh>
      <group position={[0.2, 0.5, 0]}>
        <mesh ref={armR} position={[0, -0.12, 0]} rotation={[0, 0, -0.5]}><cylinderGeometry args={[0.045, 0.05, 0.3, 8]} /><meshStandardMaterial color={jas} flatShading /></mesh>
      </group>
      {/* baard + kop + neus */}
      <mesh position={[0, 0.52, 0.06]} scale={[1, 1.15, 0.8]}><sphereGeometry args={[0.12, 10, 10]} /><meshStandardMaterial color="#e8e3d8" flatShading roughness={1} /></mesh>
      <mesh position={[0, 0.62, 0]}><sphereGeometry args={[0.13, 12, 12]} /><meshStandardMaterial color="#f2c9a0" flatShading roughness={0.95} /></mesh>
      <mesh position={[0, 0.62, 0.13]}><sphereGeometry args={[0.035, 8, 8]} /><meshStandardMaterial color="#e8a87a" flatShading /></mesh>
      {/* puntmuts */}
      <mesh position={[0, 0.78, 0]} rotation={[0.08, 0, 0.06]}><coneGeometry args={[0.14, 0.34, 10]} /><meshStandardMaterial color={muts} flatShading roughness={0.85} /></mesh>
    </group>
  );
}

// Zwevend "?"-lampje: gouden ruit die zachtjes dobbert — "hier valt iets te leren".
function VraagLamp({ y = 2.7 }) {
  const ref = useRef();
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (ref.current) {
      ref.current.position.y = y + Math.sin(t * 2) * 0.12;
      ref.current.rotation.y = t * 0.9;
    }
  });
  return (
    <mesh ref={ref} position={[0, y, 0]}>
      <octahedronGeometry args={[0.22]} />
      <meshStandardMaterial color="#ffd23a" emissive="#ffb800" emissiveIntensity={0.85} flatShading />
    </mesh>
  );
}

/* ── 🍎 tafereel 1: Newton-appelboom ───────────────────────────────────── */
function ValAppel() {
  const ref = useRef();
  useFrame((s) => {
    const t = s.clock.elapsedTime % 3.4;
    let y = 2.05, vis = true;
    if (t < 1.3) y = 2.05;                                    // hangt aan de tak
    else if (t < 1.72) { const tt = (t - 1.3) / 0.42; y = 2.05 - 1.12 * tt * tt; } // valt versneld
    else if (t < 2.6) y = 0.93;                               // ligt op de muts
    else vis = false;                                          // even weg, dan opnieuw
    if (ref.current) { ref.current.position.y = y; ref.current.visible = vis; }
  });
  return (
    <mesh ref={ref} position={[0.32, 2.05, 0.3]}>
      <sphereGeometry args={[0.12, 10, 10]} />
      <meshStandardMaterial color="#d33b2f" flatShading roughness={0.7} />
    </mesh>
  );
}

function TafereelNewton() {
  return (
    <group>
      {/* boom: stam + bladerbollen met appeltjes */}
      <mesh position={[0, 0.9, 0]}><cylinderGeometry args={[0.16, 0.24, 1.8, 8]} /><meshStandardMaterial color="#6a4a2a" flatShading roughness={1} /></mesh>
      <mesh position={[0, 2.15, 0]}><sphereGeometry args={[0.95, 10, 10]} /><meshStandardMaterial color="#3f8f3a" flatShading roughness={1} /></mesh>
      <mesh position={[0.65, 1.85, 0.3]}><sphereGeometry args={[0.55, 10, 10]} /><meshStandardMaterial color="#4da344" flatShading roughness={1} /></mesh>
      <mesh position={[-0.6, 1.9, -0.2]}><sphereGeometry args={[0.5, 10, 10]} /><meshStandardMaterial color="#357a2e" flatShading roughness={1} /></mesh>
      {[[0.4, 2.5, 0.6], [-0.55, 2.35, 0.45], [0.85, 1.9, -0.25]].map((p, i) => (
        <mesh key={i} position={p}><sphereGeometry args={[0.09, 8, 8]} /><meshStandardMaterial color="#d33b2f" flatShading /></mesh>
      ))}
      {/* Professor Isaac zit onder de boom te soezen; de appel valt op zijn muts */}
      <Kabouter position={[0.32, 0, 0.3]} rotY={0.5} muts="#7a5aa0" jas="#4a5d23" anim="zit" zit />
      <ValAppel />
      <VraagLamp y={3.4} />
    </group>
  );
}

/* ── 🔺 tafereel 2: piramidebouwers ────────────────────────────────────── */
const ZAND = "#d9c18a";
const ZAND_D = "#c4a86e";

function SleepBlok() {
  // Blok + duwende kabouter schuiven samen de helling op (loop).
  const blok = useRef();
  const duwer = useRef();
  // hellingbaan: van [2.6, 0.18] (voet) naar [0.95, 0.98] (bovenop laag 2)
  const A = { x: 2.9, y: 0.22 }, B = { x: 1.0, y: 1.02 };
  useFrame((s) => {
    const t = s.clock.elapsedTime % 5;
    let f = 0;
    if (t < 3) f = t / 3;              // omhoog duwen
    else if (t < 3.8) f = 1;           // even rusten bovenaan
    else f = 1 - (t - 3.8) / 1.2;      // terug naar beneden (nieuw blok halen)
    const x = A.x + (B.x - A.x) * f;
    const y = A.y + (B.y - A.y) * f;
    if (blok.current) blok.current.position.set(x, y, 0);
    if (duwer.current) duwer.current.position.set(x + 0.55, y - 0.2, 0);
  });
  return (
    <>
      <mesh ref={blok} position={[2.9, 0.22, 0]}><boxGeometry args={[0.44, 0.44, 0.44]} /><meshStandardMaterial color={ZAND} flatShading roughness={1} /></mesh>
      <group ref={duwer}><Kabouter position={[0, 0, 0]} rotY={-Math.PI / 2} muts="#c0392b" jas="#8a6440" anim="duw" /></group>
    </>
  );
}

function TafereelPiramide() {
  const lagen = [
    { n: 5, y: 0.25 },
    { n: 4, y: 0.75 },
    { n: 3, y: 1.25 },
  ];
  return (
    <group>
      {/* trapsgewijze lagen van zandsteen-blokken */}
      {lagen.map((l, li) => (
        <group key={li} position={[0, l.y, 0]}>
          {Array.from({ length: l.n }, (_, i) => i - (l.n - 1) / 2).map((ix) =>
            Array.from({ length: l.n }, (_, j) => j - (l.n - 1) / 2).map((jz) => (
              <mesh key={`${ix}-${jz}`} position={[ix * 0.5, 0, jz * 0.5]}>
                <boxGeometry args={[0.48, 0.48, 0.48]} />
                <meshStandardMaterial color={(Math.round(ix + jz) % 2 + 2) % 2 ? ZAND : ZAND_D} flatShading roughness={1} />
              </mesh>
            ))
          )}
        </group>
      ))}
      {/* bovenste laag in aanbouw: één blok wacht al */}
      <mesh position={[-0.25, 1.75, 0]}><boxGeometry args={[0.48, 0.48, 0.48]} /><meshStandardMaterial color={ZAND} flatShading roughness={1} /></mesh>
      {/* hellingbaan (schuine plank) + boomstam-rollers aan de voet */}
      <mesh position={[1.95, 0.62, 0]} rotation={[0, 0, 0.4]}><boxGeometry args={[2.3, 0.1, 0.7]} /><meshStandardMaterial color="#a8845a" flatShading roughness={1} /></mesh>
      {[3.3, 3.65, 4.0].map((x, i) => (
        <mesh key={i} position={[x, 0.09, 0]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.09, 0.09, 0.8, 8]} /><meshStandardMaterial color="#6a4a2a" flatShading roughness={1} /></mesh>
      ))}
      <SleepBlok />
      {/* voorman wijst bovenop de piramide waar het blok heen moet */}
      <Kabouter position={[0.4, 1.5, 0.4]} rotY={Math.PI / 4} muts="#e8b400" jas="#c0392b" anim="wijs" />
      <VraagLamp y={3.1} />
    </group>
  );
}

/* ── ⚡ tafereel 3: Meester Nikola en de bliksemkooi ───────────────────── */
function Bliksems() {
  const refs = [useRef(), useRef(), useRef(), useRef()];
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    refs.forEach((r, i) => {
      if (!r.current) return;
      // rustig geflikker (geen stroboscoop): elke bliksem heeft z'n eigen ritme
      const aan = Math.sin(t * 5 + i * 1.9) > 0.55;
      r.current.visible = aan;
    });
  });
  const hoeken = [0.4, 1.9, 3.5, 5.1];
  return (
    <>
      {hoeken.map((a, i) => (
        <mesh key={i} ref={refs[i]} position={[Math.cos(a) * 0.85, 2.25 - i * 0.12, Math.sin(a) * 0.85]} rotation={[0.5, a, 0.9]}>
          <boxGeometry args={[0.045, 1.15, 0.045]} />
          <meshStandardMaterial color="#dff3ff" emissive="#7fd8ff" emissiveIntensity={2.2} />
        </mesh>
      ))}
    </>
  );
}

function TafereelTesla() {
  const staven = Array.from({ length: 8 }, (_, i) => (i / 8) * Math.PI * 2);
  return (
    <group>
      {/* Tesla-spoel: voet, zuil, ringen, bol */}
      <mesh position={[0, 0.25, 0]}><cylinderGeometry args={[0.55, 0.7, 0.5, 10]} /><meshStandardMaterial color="#5a7396" flatShading roughness={0.9} /></mesh>
      <mesh position={[0, 1.2, 0]}><cylinderGeometry args={[0.22, 0.3, 1.4, 10]} /><meshStandardMaterial color="#8a5a3a" flatShading roughness={0.9} /></mesh>
      {[0.7, 1.0, 1.3].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.32, 0.045, 8, 16]} /><meshStandardMaterial color="#c9862e" flatShading metalness={0.4} roughness={0.5} /></mesh>
      ))}
      <mesh position={[0, 2.15, 0]}><sphereGeometry args={[0.42, 12, 12]} /><meshStandardMaterial color="#bfd4e8" flatShading metalness={0.6} roughness={0.3} /></mesh>
      <Bliksems />
      {/* kooi van Faraday met Meester Nikola er veilig in (zwaait vrolijk) */}
      <group position={[1.9, 0, 0]}>
        {staven.map((a, i) => (
          <mesh key={i} position={[Math.cos(a) * 0.55, 0.7, Math.sin(a) * 0.55]}>
            <cylinderGeometry args={[0.03, 0.03, 1.4, 6]} />
            <meshStandardMaterial color="#9fb2c8" flatShading metalness={0.5} roughness={0.4} />
          </mesh>
        ))}
        {[0.08, 1.4].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.55, 0.04, 8, 20]} /><meshStandardMaterial color="#9fb2c8" flatShading metalness={0.5} roughness={0.4} /></mesh>
        ))}
        <Kabouter position={[0, 0, 0]} rotY={-0.6} muts="#2c3e70" jas="#3a3a3a" anim="zwaai" />
      </group>
      <VraagLamp y={3.2} />
    </group>
  );
}

const TAFEREEL_MESH = { newton: TafereelNewton, piramide: TafereelPiramide, tesla: TafereelTesla };

/* ── plaatsing + interactie ────────────────────────────────────────────── */
export default function UitvindersTaferelen({ heightRef, onTafereel, actief = true }) {
  return (
    <>
      {TAFERELEN.map((t) => {
        const [x, z] = t.pos;
        const y = heightRef?.current ? heightRef.current(x, z) : 0;
        const Mesh = TAFEREEL_MESH[t.id];
        return (
          <group
            key={t.id}
            position={[x, y, z]}
            onClick={(e) => {
              if (!actief) return;
              if (e.delta > 8) return; // slepen ≠ tikken
              e.stopPropagation();
              onTafereel && onTafereel(t.id);
            }}
            onPointerOver={(e) => { e.stopPropagation(); document.body.style.cursor = "pointer"; }}
            onPointerOut={() => { document.body.style.cursor = ""; }}
          >
            <Mesh />
          </group>
        );
      })}
    </>
  );
}
