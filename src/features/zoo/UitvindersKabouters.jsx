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
import { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { CanvasTexture, RepeatWrapping } from "three";
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

/* ── souvenirs: mini-monumenten op een sokkel (vrijspelen via leerpad) ───── */
// Geplaatst via het gewone plaats-systeem (PlacedItem → procedural "souvenir").
// Klein (~1 m), statisch (geen useFrame) — een souvenir mag niets kosten.
export function Souvenir({ soort = "piramide", position = [0, 0, 0], rotation = 0 }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* sokkel met gouden randje */}
      <mesh position={[0, 0.09, 0]} castShadow receiveShadow><cylinderGeometry args={[0.52, 0.6, 0.18, 10]} /><meshStandardMaterial color="#b9b6ab" flatShading roughness={0.9} /></mesh>
      <mesh position={[0, 0.19, 0]}><cylinderGeometry args={[0.46, 0.52, 0.05, 10]} /><meshStandardMaterial color="#e8b400" flatShading metalness={0.3} roughness={0.5} /></mesh>
      {soort === "piramide" && (
        <group position={[0, 0.22, 0]}>
          {[{ n: 3, y: 0.14 }, { n: 2, y: 0.42 }, { n: 1, y: 0.7 }].map((l, li) => (
            <group key={li} position={[0, l.y, 0]}>
              {Array.from({ length: l.n }, (_, i) => i - (l.n - 1) / 2).map((ix) =>
                Array.from({ length: l.n }, (_, j) => j - (l.n - 1) / 2).map((jz) => (
                  <mesh key={`${ix}-${jz}`} position={[ix * 0.28, 0, jz * 0.28]} castShadow><boxGeometry args={[0.27, 0.27, 0.27]} /><meshStandardMaterial color={(Math.round(ix + jz) % 2 + 2) % 2 ? "#d9c18a" : "#c4a86e"} flatShading roughness={1} /></mesh>
                ))
              )}
            </group>
          ))}
        </group>
      )}
      {soort === "newton" && (
        <group position={[0, 0.22, 0]}>
          <mesh position={[0, 0.34, 0]} castShadow><cylinderGeometry args={[0.06, 0.09, 0.68, 8]} /><meshStandardMaterial color="#6a4a2a" flatShading roughness={1} /></mesh>
          <mesh position={[0, 0.82, 0]} castShadow><sphereGeometry args={[0.36, 10, 10]} /><meshStandardMaterial color="#3f8f3a" flatShading roughness={1} /></mesh>
          {[[0.18, 0.95, 0.2], [-0.2, 0.8, 0.22], [0.05, 0.72, -0.3]].map((p, i) => (
            <mesh key={i} position={p}><sphereGeometry args={[0.06, 8, 8]} /><meshStandardMaterial color="#d33b2f" flatShading /></mesh>
          ))}
          {/* de beroemde gevallen appel aan de voet */}
          <mesh position={[0.28, 0.06, 0.18]}><sphereGeometry args={[0.07, 8, 8]} /><meshStandardMaterial color="#d33b2f" flatShading /></mesh>
        </group>
      )}
      {soort === "tesla" && (
        <group position={[0, 0.22, 0]}>
          <mesh position={[0, 0.1, 0]} castShadow><cylinderGeometry args={[0.24, 0.3, 0.2, 10]} /><meshStandardMaterial color="#5a7396" flatShading roughness={0.9} /></mesh>
          <mesh position={[0, 0.5, 0]} castShadow><cylinderGeometry args={[0.09, 0.13, 0.6, 10]} /><meshStandardMaterial color="#8a5a3a" flatShading roughness={0.9} /></mesh>
          {[0.32, 0.46].map((y, i) => (
            <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.14, 0.02, 8, 14]} /><meshStandardMaterial color="#c9862e" flatShading metalness={0.4} roughness={0.5} /></mesh>
          ))}
          <mesh position={[0, 0.9, 0]} castShadow><sphereGeometry args={[0.18, 10, 10]} /><meshStandardMaterial color="#bfd4e8" flatShading metalness={0.6} roughness={0.3} /></mesh>
          <mesh position={[0.14, 1.02, 0]} rotation={[0.4, 0, 0.8]}><boxGeometry args={[0.02, 0.28, 0.02]} /><meshStandardMaterial color="#dff3ff" emissive="#7fd8ff" emissiveIntensity={1.6} /></mesh>
        </group>
      )}
      {/* ── Souvenirs van de PARK-leermomenten (cirkel-is-rond fase 2, 17 jul):
          zelfde sokkel, één mini-monument per leerpad dat een park-object heeft. */}
      {soort === "stoomloc" && (
        <group position={[0, 0.22, 0]}>
          <mesh position={[0.02, 0.3, 0]} rotation={[0, 0, Math.PI / 2]} castShadow><cylinderGeometry args={[0.16, 0.16, 0.62, 10]} /><meshStandardMaterial color="#2f6d3a" flatShading roughness={0.8} /></mesh>
          <mesh position={[-0.32, 0.38, 0]} castShadow><boxGeometry args={[0.26, 0.36, 0.3]} /><meshStandardMaterial color="#274f8a" flatShading roughness={0.9} /></mesh>
          <mesh position={[0.22, 0.52, 0]} castShadow><cylinderGeometry args={[0.05, 0.07, 0.2, 8]} /><meshStandardMaterial color="#333333" flatShading roughness={1} /></mesh>
          <mesh position={[0.22, 0.68, 0]}><sphereGeometry args={[0.07, 8, 8]} /><meshStandardMaterial color="#e8e8e8" flatShading roughness={1} /></mesh>
          {[[-0.18], [0.02], [0.22]].map(([px], i) => (
            <mesh key={i} position={[px, 0.12, 0.14]} rotation={[Math.PI / 2, 0, 0]} castShadow><cylinderGeometry args={[0.09, 0.09, 0.05, 10]} /><meshStandardMaterial color="#c0392b" flatShading roughness={0.8} /></mesh>
          ))}
        </group>
      )}
      {soort === "goudboom" && (
        <group position={[0, 0.22, 0]}>
          <mesh position={[0, 0.3, 0]} castShadow><cylinderGeometry args={[0.06, 0.1, 0.6, 8]} /><meshStandardMaterial color="#6a4a2a" flatShading roughness={1} /></mesh>
          <mesh position={[0, 0.78, 0]} castShadow><sphereGeometry args={[0.34, 10, 10]} /><meshStandardMaterial color="#e0b428" flatShading metalness={0.45} roughness={0.35} /></mesh>
          <mesh position={[0.2, 0.62, 0.14]} castShadow><sphereGeometry args={[0.16, 8, 8]} /><meshStandardMaterial color="#f0ce56" flatShading metalness={0.45} roughness={0.35} /></mesh>
          <mesh position={[-0.2, 0.66, -0.1]} castShadow><sphereGeometry args={[0.14, 8, 8]} /><meshStandardMaterial color="#f0ce56" flatShading metalness={0.45} roughness={0.35} /></mesh>
        </group>
      )}
      {soort === "reuzenrad" && (
        <group position={[0, 0.22, 0]}>
          {[-0.12, 0.12].map((sx, i) => (
            <mesh key={i} position={[sx, 0.28, 0]} rotation={[0, 0, 0.42 * (i ? -1 : 1)]} castShadow><boxGeometry args={[0.05, 0.62, 0.05]} /><meshStandardMaterial color="#8a5a3a" flatShading roughness={1} /></mesh>
          ))}
          <mesh position={[0, 0.56, 0]} castShadow><torusGeometry args={[0.34, 0.035, 8, 18]} /><meshStandardMaterial color="#d33b2f" flatShading roughness={0.8} /></mesh>
          {[0, 1, 2].map((i) => (
            <mesh key={`s${i}`} position={[0, 0.56, 0]} rotation={[0, 0, (i * Math.PI) / 3]}><boxGeometry args={[0.66, 0.025, 0.025]} /><meshStandardMaterial color="#e8b400" flatShading metalness={0.3} roughness={0.6} /></mesh>
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const a = (i * Math.PI) / 3;
            return <mesh key={`g${i}`} position={[Math.cos(a) * 0.34, 0.56 + Math.sin(a) * 0.34, 0]} castShadow><boxGeometry args={[0.09, 0.09, 0.09]} /><meshStandardMaterial color={["#4a90d9", "#f2b134", "#7bbf5a"][i % 3]} flatShading roughness={0.9} /></mesh>;
          })}
        </group>
      )}
      {soort === "draaimolen" && (
        <group position={[0, 0.22, 0]}>
          <mesh position={[0, 0.06, 0]} castShadow><cylinderGeometry args={[0.4, 0.44, 0.12, 12]} /><meshStandardMaterial color="#b8478a" flatShading roughness={0.9} /></mesh>
          <mesh position={[0, 0.36, 0]} castShadow><cylinderGeometry args={[0.05, 0.05, 0.5, 8]} /><meshStandardMaterial color="#e8b400" flatShading metalness={0.3} roughness={0.6} /></mesh>
          {[0, 1, 2, 3].map((i) => {
            const a = (i * Math.PI) / 2;
            return <mesh key={i} position={[Math.cos(a) * 0.26, 0.28, Math.sin(a) * 0.26]} castShadow><boxGeometry args={[0.09, 0.14, 0.09]} /><meshStandardMaterial color={["#e2574c", "#4a90d9", "#f2b134", "#7bbf5a"][i]} flatShading roughness={0.9} /></mesh>;
          })}
          <mesh position={[0, 0.66, 0]} castShadow><coneGeometry args={[0.48, 0.28, 12]} /><meshStandardMaterial color="#d33b2f" flatShading roughness={0.9} /></mesh>
          <mesh position={[0, 0.84, 0]}><sphereGeometry args={[0.05, 8, 8]} /><meshStandardMaterial color="#e8b400" flatShading metalness={0.4} roughness={0.5} /></mesh>
        </group>
      )}
      {soort === "klok" && (
        <group position={[0, 0.22, 0]}>
          <mesh position={[0, 0.4, 0]} castShadow><cylinderGeometry args={[0.045, 0.06, 0.8, 8]} /><meshStandardMaterial color="#3a4a5a" flatShading roughness={0.8} /></mesh>
          <mesh position={[0, 0.88, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow><cylinderGeometry args={[0.24, 0.24, 0.08, 14]} /><meshStandardMaterial color="#2c3e50" flatShading roughness={0.7} /></mesh>
          {[0.05, -0.05].map((z, i) => (
            <mesh key={i} position={[0, 0.88, z]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.2, 0.2, 0.012, 14]} /><meshStandardMaterial color="#f7f3e8" roughness={0.9} /></mesh>
          ))}
          <mesh position={[0, 0.94, 0.062]}><boxGeometry args={[0.02, 0.13, 0.01]} /><meshStandardMaterial color="#222222" /></mesh>
          <mesh position={[0.045, 0.9, 0.062]} rotation={[0, 0, Math.PI / 2.6]}><boxGeometry args={[0.02, 0.1, 0.01]} /><meshStandardMaterial color="#222222" /></mesh>
        </group>
      )}
      {soort === "fontein" && (
        <group position={[0, 0.22, 0]}>
          <mesh position={[0, 0.08, 0]} castShadow><cylinderGeometry args={[0.34, 0.38, 0.16, 12]} /><meshStandardMaterial color="#9aa4ad" flatShading roughness={0.9} /></mesh>
          <mesh position={[0, 0.17, 0]}><cylinderGeometry args={[0.28, 0.28, 0.04, 12]} /><meshStandardMaterial color="#5ab0e0" transparent opacity={0.85} roughness={0.3} /></mesh>
          <mesh position={[0, 0.3, 0]} castShadow><cylinderGeometry args={[0.05, 0.07, 0.26, 8]} /><meshStandardMaterial color="#8a949d" flatShading roughness={0.9} /></mesh>
          <mesh position={[0, 0.52, 0]}><sphereGeometry args={[0.09, 8, 8]} /><meshStandardMaterial color="#9fd4f2" transparent opacity={0.85} roughness={0.3} /></mesh>
          {[[0.14, 0.42, 0.06], [-0.13, 0.4, -0.08], [0.02, 0.46, -0.13]].map((p, i) => (
            <mesh key={i} position={p}><sphereGeometry args={[0.035, 6, 6]} /><meshStandardMaterial color="#bfe4f7" transparent opacity={0.8} roughness={0.3} /></mesh>
          ))}
        </group>
      )}
    </group>
  );
}

/* ── 🔺 Egyptische piramide (Mark 16 aug) ──────────────────────────────────
   Grote blikvanger in Giza-stijl: vlakke zandsteen-facetten (4-zijdige kegel
   met flatShading), een gouden topsteen (pyramidion), een donkere ingang en
   twee palmen op een zandplateau. ~4-5× de mini-souvenir. Aantikbaar via het
   piramide-leermoment (inhoud + Pythagoras). */
// Zwevende maten/formule boven een inhoud-vorm — wisselt om de ~2,4 s tussen de
// afmetingen, de formule en de inhoud (Mark 16 aug: "de maten in de lucht boven
// het object, inhoud en formule, wisselend"). pointerEvents uit zodat je er
// dwars doorheen op het object kunt tikken.
export function ZwevendeMaten({ regels, y = 4 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!regels || regels.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % regels.length), 2400);
    return () => clearInterval(t);
  }, [regels?.length]);
  if (!regels || !regels.length) return null;
  return (
    <Html position={[0, y, 0]} center distanceFactor={12} zIndexRange={[8, 0]} style={{ pointerEvents: "none" }}>
      <div style={{
        whiteSpace: "nowrap", padding: "6px 13px", borderRadius: 999,
        background: "rgba(20,28,44,0.82)", color: "#fff", fontWeight: 800,
        fontSize: 15, fontFamily: "system-ui", boxShadow: "0 3px 12px rgba(0,0,0,.35)",
        border: "1.5px solid rgba(255,255,255,0.28)",
      }}>{regels[i]}</div>
    </Html>
  );
}

function Palm({ position = [0, 0, 0], rot = 0 }) {
  return (
    <group position={position} rotation={[0, rot, 0]}>
      <mesh position={[0, 0.55, 0]} castShadow><cylinderGeometry args={[0.08, 0.13, 1.1, 7]} /><meshStandardMaterial color="#8a6a3a" flatShading roughness={1} /></mesh>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[0, 1.12, 0]} rotation={[0.6, (i * Math.PI * 2) / 5, 0]} castShadow>
          <coneGeometry args={[0.14, 0.78, 4]} /><meshStandardMaterial color="#3f8f3a" flatShading roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

// 🔺📚 Studie-stand (Mark 17 aug: "de formule en de berekening op elke zijde +
// de basis en hoogte"). Alleen aan als je vlakbij staat (de +/- is in beeld) →
// dan schrijft de piramide de som op zijn 4 schuine vlakken en tekent hij de
// maatlijnen voor de basis en de hoogte. Alles leeft mee met de grootte (maat).
function rrect(ctx, x, y, w, h, r) {
  if (ctx.roundRect) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); return; }
  ctx.beginPath(); ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}
function formuleTexture(maat) {
  // Stap-voor-stap uitgerekend (Mark 17 aug: "een tussen-uitreken-stap tussen ⅓
  // en verder — wij leggen alles duidelijk en simpel uit"). Eerst het grondvlak,
  // dan de vermenigvuldiging, dan pas de uitkomst.
  const w = 512, h = 480;
  const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
  const ctx = cv.getContext("2d");
  ctx.fillStyle = "rgba(18,26,42,0.9)"; rrect(ctx, 10, 10, w - 20, h - 20, 34); ctx.fill();
  ctx.lineWidth = 8; ctx.strokeStyle = "#ffe08a"; rrect(ctx, 10, 10, w - 20, h - 20, 34); ctx.stroke();
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  const g = maat * maat, gh = g * maat, v = Math.round(gh / 3);
  const nl = (n) => n.toLocaleString("nl-NL");
  ctx.fillStyle = "#ffffff"; ctx.font = "700 32px system-ui";
  ctx.fillText("inhoud van de piramide", w / 2, 54);
  ctx.fillStyle = "#ffe08a"; ctx.font = "800 34px system-ui";
  ctx.fillText("V = ⅓ × grondvlak × hoogte", w / 2, 120);
  ctx.fillStyle = "#bfe0ff"; ctx.font = "700 31px system-ui";
  ctx.fillText(`grondvlak = ${maat} × ${maat} = ${nl(g)}`, w / 2, 188);
  ctx.fillText(`V = ⅓ × ${nl(g)} × ${maat}`, w / 2, 244);
  ctx.fillText(`V = ⅓ × ${nl(gh)}`, w / 2, 300);
  ctx.fillStyle = "#ffffff"; ctx.font = "800 44px system-ui";
  ctx.fillText(`V = ${nl(v)} m³`, w / 2, 386);
  const t = new CanvasTexture(cv); t.anisotropy = 4; return t;
}
function labelTexture(tekst, kleur) {
  const w = 384, h = 128;
  const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
  const ctx = cv.getContext("2d");
  ctx.fillStyle = "rgba(18,26,42,0.9)"; rrect(ctx, 8, 8, w - 16, h - 16, 26); ctx.fill();
  ctx.lineWidth = 6; ctx.strokeStyle = kleur; rrect(ctx, 8, 8, w - 16, h - 16, 26); ctx.stroke();
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillStyle = kleur; ctx.font = "800 52px system-ui";
  ctx.fillText(tekst, w / 2, h / 2 + 4);
  const t = new CanvasTexture(cv); t.anisotropy = 4; return t;
}
// De 4 formule-panelen — één op elk schuin vlak (±X, ±Z), gekanteld langs de
// helling (~29°) zodat de som ÓP de steen staat. Zelfde som op elke zijde, zodat
// je 'm vanuit elke hoek leest.
function FaceFormules({ maat }) {
  const tex = useMemo(() => formuleTexture(maat), [maat]);
  // Iets lager + smaller gehouden zodat het paneel binnen het driehoekige vlak
  // valt (een driehoek wordt naar boven smaller — een te breed/hoog paneel zou
  // boven de rand uitsteken). Gekanteld ~29° langs de helling.
  return [0, Math.PI / 2, Math.PI, -Math.PI / 2].map((ry, i) => (
    <group key={i} rotation={[0, ry, 0]}>
      <mesh position={[0, 1.05, 1.42]} rotation={[-0.513, 0, 0]}>
        <planeGeometry args={[1.7, 1.6]} />
        <meshBasicMaterial map={tex} transparent depthWrite={false} side={2} toneMapped={false} />
      </mesh>
    </group>
  ));
}
// Maatlijnen: horizontale basis-lijn langs de voorrand + verticale hoogte-lijn
// links-voor, elk met een live-label.
function Maatlijnen({ maat }) {
  const basisTex = useMemo(() => labelTexture(`basis = ${maat} m`, "#ffe08a"), [maat]);
  const hoogteTex = useMemo(() => labelTexture(`hoogte = ${maat} m`, "#bfe0ff"), [maat]);
  return (
    <>
      {/* basis (grondvlak-zijde) — horizontale maatlijn vóór de piramide */}
      <mesh position={[0, 0.26, 2.0]}><boxGeometry args={[3.6, 0.07, 0.07]} /><meshBasicMaterial color="#ffe08a" toneMapped={false} /></mesh>
      {[-1.8, 1.8].map((x, i) => <mesh key={i} position={[x, 0.26, 2.0]}><boxGeometry args={[0.07, 0.4, 0.07]} /><meshBasicMaterial color="#ffe08a" toneMapped={false} /></mesh>)}
      <mesh position={[0, 0.7, 2.2]}><planeGeometry args={[1.7, 0.57]} /><meshBasicMaterial map={basisTex} transparent depthWrite={false} side={2} toneMapped={false} /></mesh>
      {/* hoogte — verticale maatlijn links-voor, van basis tot top */}
      <mesh position={[-2.35, 1.75, 1.4]}><boxGeometry args={[0.07, 3.2, 0.07]} /><meshBasicMaterial color="#bfe0ff" toneMapped={false} /></mesh>
      {[0.15, 3.35].map((y, i) => <mesh key={i} position={[-2.35, y, 1.4]}><boxGeometry args={[0.4, 0.07, 0.07]} /><meshBasicMaterial color="#bfe0ff" toneMapped={false} /></mesh>)}
      <mesh position={[-2.35, 1.9, 1.75]}><planeGeometry args={[1.5, 0.5]} /><meshBasicMaterial map={hoogteTex} transparent depthWrite={false} side={2} toneMapped={false} /></mesh>
    </>
  );
}

export function EgyptischePiramide({ position = [0, 0, 0], rotation = 0, maat = 8, onMaat, onOefenen, studie = false }) {
  const zand = "#e4cf9a";
  const steen = "#d8c08a";
  const steenDonker = "#b89b63";
  const s = Math.max(0.5, maat / 4.4);            // schaal: hoe hoger de maat, hoe groter (tot ~5×)
  const volume = Math.round((maat * maat * maat) / 3);
  // 🔢 Aftelbare blokken ÓP de piramide: een dam-bord op de vier schuine
  // vlakken zelf. Omdat de textuur op het driehoekige vlak zit, is hij vanzelf
  // "als driehoek gesneden" en sluit hij perfect in de hoeken aan (Mark 16 aug:
  // "blokken sluiten niet, moeten ook als driehoek gesneden worden"). Onderaan
  // tel je `maat` blokjes per zijde, om en om gekleurd — precies de "zijde X m".
  const blokTex = useMemo(() => {
    const n = Math.max(3, Math.round(maat));
    const cell = 18, px = n * cell;
    const cv = document.createElement("canvas");
    cv.width = cv.height = px;
    const ctx = cv.getContext("2d");
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        ctx.fillStyle = (x + y) % 2 ? "#b89a5c" : "#ecd79a";
        ctx.fillRect(x * cell, y * cell, cell, cell);
      }
    }
    // dunne voegen tussen de blokken
    ctx.strokeStyle = "rgba(120,95,45,0.45)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= n; i++) {
      const p = i * cell + 0.5;
      ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, px); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(px, p); ctx.stroke();
    }
    const t = new CanvasTexture(cv);
    t.wrapS = t.wrapT = RepeatWrapping;
    t.repeat.set(4, 1);       // ConeGeometry(4): u wikkelt om 4 vlakken → 1 bord per vlak
    t.anisotropy = 4;
    return t;
  }, [maat]);
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* Alleen de zwevende maten in 3D (betrouwbaar); de +/- knoppen en de poort
          staan in de vaste onderbalk (tik de piramide aan) — op telefoon áltijd
          zichtbaar, i.t.t. 3D-knoppen die snel buiten beeld/afgesneden raakten. */}
      <ZwevendeMaten y={3.7 * s + 1.0} regels={[
        `📏 zijde ${maat} m · hoogte ${maat} m`,
        `V = ⅓ × grondvlak × hoogte`,
        `📦 inhoud = ${volume.toLocaleString("nl-NL")} m³`,
      ]} />
      <group scale={s}>
      {/* zandplateau */}
      <mesh position={[0, 0.06, 0]} receiveShadow><cylinderGeometry args={[3.0, 3.35, 0.12, 24]} /><meshStandardMaterial color={zand} flatShading roughness={1} /></mesh>
      {/* stenen fundament-rand */}
      <mesh position={[0, 0.2, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><cylinderGeometry args={[2.62, 2.68, 0.18, 4]} /><meshStandardMaterial color={steenDonker} flatShading roughness={1} /></mesh>
      {/* hoofd-piramide — 4 vlakke facetten met aftelbaar blokken-bord (dam-bord
          op elk driehoekig vlak: sluit vanzelf in de hoeken, telbaar aan de voet) */}
      <mesh position={[0, 1.75, 0]} rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow><coneGeometry args={[2.55, 3.2, 4]} /><meshStandardMaterial color={steen} map={blokTex} flatShading roughness={1} /></mesh>
      {/* lichtere kalksteen-mantel vlak onder de top (zoals de echte Giza-piramide) */}
      <mesh position={[0, 2.98, 0]} rotation={[0, Math.PI / 4, 0]}><coneGeometry args={[0.72, 0.86, 4]} /><meshStandardMaterial color="#efe6c6" flatShading roughness={0.9} /></mesh>
      {/* gouden topsteen (pyramidion) */}
      <mesh position={[0, 3.55, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[0.24, 0.34, 4]} /><meshStandardMaterial color="#e8b400" metalness={0.5} roughness={0.3} flatShading /></mesh>
      {/* donkere ingang aan de voorkant */}
      <mesh position={[0, 0.62, 1.55]}><boxGeometry args={[0.6, 0.85, 0.35]} /><meshStandardMaterial color="#2b2417" roughness={1} /></mesh>
      {/* palmen op het plateau */}
      <Palm position={[-2.55, 0.12, 1.5]} rot={0.5} />
      <Palm position={[2.4, 0.12, -1.7]} rot={-0.7} />
      {/* 📚 studie-stand: som op elke zijde + basis/hoogte-maatlijnen (alleen als
          je vlakbij staat en de grootte-regelaar in beeld is) */}
      {studie && <FaceFormules maat={maat} />}
      {studie && <Maatlijnen maat={maat} />}
      </group>
    </group>
  );
}

/* ── 🧊 Rubik-kubus kunstwerk (Mark 16 aug) ────────────────────────────────
   Kleurrijke 3×3×3-kubus, licht gekanteld op een sokkel — een blikvanger die
   naar de inhoud van een kubus (ribbe³) leidt. */
export function RubiksKubus({ position = [0, 0, 0], rotation = 0 }) {
  const kleuren = ["#e23b32", "#2e9e4f", "#2e5fc0", "#f5f5f5", "#ff8a1e", "#f2d024"];
  const s = 0.42, gap = 0.46;
  const cubes = [];
  for (let x = -1; x <= 1; x++) for (let y = -1; y <= 1; y++) for (let z = -1; z <= 1; z++) {
    cubes.push([x, y, z, kleuren[(x + 2 * y + z + 12) % 6]]);
  }
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* sokkel */}
      <mesh position={[0, 0.09, 0]} castShadow receiveShadow><cylinderGeometry args={[0.72, 0.82, 0.18, 6]} /><meshStandardMaterial color="#3a4250" flatShading roughness={0.9} /></mesh>
      <mesh position={[0, 0.2, 0]}><cylinderGeometry args={[0.6, 0.66, 0.06, 6]} /><meshStandardMaterial color="#5a6472" flatShading roughness={0.8} /></mesh>
      {/* gekantelde Rubik-kubus als kunstwerk */}
      <group position={[0, 1.2, 0]} rotation={[0.5, 0.7, 0.18]}>
        {cubes.map(([x, y, z, c], i) => (
          <mesh key={i} position={[x * gap, y * gap, z * gap]} castShadow>
            <boxGeometry args={[s, s, s]} /><meshStandardMaterial color={c} flatShading roughness={0.45} metalness={0.05} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* ── 🍦 Reuze-ijsje / kegel (Mark 16 aug) ──────────────────────────────────
   Een vrolijk reuze-ijsje: een waffel-kegel met twee bollen en een kers. Leidt
   naar de inhoud van een kegel (⅓·π·r²·h). */
export function KegelIjsje({ position = [0, 0, 0], rotation = 0 }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* houder */}
      <mesh position={[0, 0.14, 0]} castShadow receiveShadow><cylinderGeometry args={[0.34, 0.44, 0.28, 12]} /><meshStandardMaterial color="#8a949d" flatShading roughness={0.85} /></mesh>
      {/* waffel-kegel (punt omlaag) */}
      <mesh position={[0, 1.0, 0]} rotation={[Math.PI, 0, 0]} castShadow><coneGeometry args={[0.6, 1.5, 18]} /><meshStandardMaterial color="#d9a55a" flatShading roughness={0.9} /></mesh>
      {/* bollen ijs */}
      <mesh position={[0, 1.85, 0]} castShadow><sphereGeometry args={[0.62, 16, 14]} /><meshStandardMaterial color="#f7b7c8" flatShading roughness={0.6} /></mesh>
      <mesh position={[0, 2.45, 0]} castShadow><sphereGeometry args={[0.5, 16, 14]} /><meshStandardMaterial color="#b7e4c7" flatShading roughness={0.6} /></mesh>
      {/* kers */}
      <mesh position={[0, 2.95, 0]} castShadow><sphereGeometry args={[0.16, 10, 10]} /><meshStandardMaterial color="#d33b2f" flatShading roughness={0.4} /></mesh>
      <mesh position={[0.02, 3.12, 0]} rotation={[0, 0, 0.3]}><cylinderGeometry args={[0.02, 0.02, 0.22, 5]} /><meshStandardMaterial color="#5a8a3a" flatShading /></mesh>
    </group>
  );
}

/* ── ⚽ Grote bal + 🥅 halve bol (Mark 16 aug) ──────────────────────────────
   Een reuze-voetbal en een koepel (halve bal) — de bol-familie van de
   inhoud-speeltuin (⁴⁄₃πr³ en ⅔πr³). */
function VoetbalPatches({ r }) {
  // een paar donkere vlakjes zodat de bol als voetbal leest
  const pts = [[0, r, 0], [r * 0.7, r * 0.4, r * 0.4], [-r * 0.7, r * 0.4, -r * 0.4], [r * 0.4, -r * 0.5, r * 0.6], [-r * 0.5, -r * 0.4, -r * 0.6]];
  return pts.map((p, i) => (
    <mesh key={i} position={p}><sphereGeometry args={[r * 0.22, 8, 8]} /><meshStandardMaterial color="#2b3550" flatShading roughness={0.6} /></mesh>
  ));
}

export function GroteBal({ position = [0, 0, 0], rotation = 0 }) {
  const r = 1.05;
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.12, 0]} castShadow receiveShadow><cylinderGeometry args={[0.5, 0.62, 0.22, 14]} /><meshStandardMaterial color="#7a8490" flatShading roughness={0.9} /></mesh>
      <group position={[0, 0.28 + r, 0]}>
        <mesh castShadow><sphereGeometry args={[r, 24, 20]} /><meshStandardMaterial color="#f5f5f5" flatShading roughness={0.5} /></mesh>
        <VoetbalPatches r={r} />
      </group>
    </group>
  );
}

export function HalveBol({ position = [0, 0, 0], rotation = 0 }) {
  const r = 1.15;
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.09, 0]} receiveShadow><cylinderGeometry args={[r + 0.15, r + 0.25, 0.16, 20]} /><meshStandardMaterial color="#8a949d" flatShading roughness={0.9} /></mesh>
      {/* koepel = bovenste helft van een bol (phi 0..π/2) */}
      <mesh position={[0, 0.17, 0]} castShadow>
        <sphereGeometry args={[r, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#5b8def" flatShading roughness={0.5} side={2} />
      </mesh>
    </group>
  );
}

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
