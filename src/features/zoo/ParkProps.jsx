// ParkProps — het vaste decor van het mini-park (paden, draaimolen, poppetje,
// dierverblijven). VOORLOPIG opgebouwd uit eenvoudige low-poly vormen in één
// warme stijl, als "in opbouw"-visualisatie. Worden later vervangen door echte
// Kenney/Quaternius-modellen (de laad-pijplijn ligt klaar).
import { useRef, useState, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Vector3, Color, CanvasTexture, CatmullRomCurve3, Object3D, Euler, PlaneGeometry, BoxGeometry, MeshStandardMaterial, SRGBColorSpace } from "three";
import ZooModel from "./ZooModel";
import CharacterModel from "./CharacterModel";
import { KRAAM_SOORTEN, KRAAM_KEYS, CHARACTERS } from "./AssetRegistry";
import { LOW_END, HALF, CELL } from "./grid";
import { parkAudioTrein } from "./parkAudio";

// Buitenrand waar de speler/vlieger tegen begrensd wordt (net binnen het raster).
// Schaalt mee met de park-grootte (2× uitgezoomd 23 aug → ±160 i.p.v. ±80).
const PARK_RAND = HALF * CELL - 2;
// Vlieg-hoogte-grenzen (m boven de grond) voor de zweefmodus.
const VLIEG_MIN = 3, VLIEG_MAX = 150, VLIEG_START = 4.5;

// Dag-nacht-cyclus: stuurt de zon, het omgevingslicht en de luchtkleur over de
// tijd (één dag ≈ 5 min). Vervangt de vaste belichting. Niet te donker 's nachts
// (schoolapp, kinderen moeten hun park blijven zien).
const CYCLE = 600; // seconden per dag (langere dag → kind speelt vrijwel altijd in het licht)
const KLEUR_DAG = new Color("#aaddff");
const KLEUR_NACHT = new Color("#1b2a4a");
const KLEUR_ZONSOP = new Color("#ffb27a");
const ZON_DAG = new Color("#fff4e0");
const ZON_HORIZON = new Color("#ff9a5a");

export function DayNight() {
  const { scene, gl } = useThree();
  const sun = useRef();
  const amb = useRef();
  const tmp = useRef(new Color());
  // Schaduw-throttle (review 17 jul): de zon bewoog elke frame → three rendert
  // dan élke frame een volledige shadow-pass over alle meshes. Nu: shadow map
  // alleen op ons eigen ritme verversen (~7×/s). Genoeg voor lopende figuren,
  // scheelt ~85% van het schaduw-werk per frame op zwakke telefoons.
  const laatsteSchaduw = useRef(-1);
  useEffect(() => {
    const vorige = gl.shadowMap.autoUpdate;
    gl.shadowMap.autoUpdate = false;
    gl.shadowMap.needsUpdate = true;
    return () => { gl.shadowMap.autoUpdate = vorige; };
  }, [gl]);
  useFrame((state) => {
    const phase = (state.clock.elapsedTime % CYCLE) / CYCLE; // 0..1
    const e = Math.sin(phase * Math.PI * 2);                 // zon-hoogte -1..1 (0.25=middag)
    const daglicht = Math.max(0, Math.min(1, (e + 0.2) / 1.0));
    const horizon = Math.max(0, 1 - Math.abs(e) / 0.35);     // 1 bij zonsop/onder

    // Luchtkleur: nacht→dag, met oranje gloed bij de horizon.
    const sky = tmp.current.copy(KLEUR_NACHT).lerp(KLEUR_DAG, daglicht).lerp(KLEUR_ZONSOP, horizon * 0.6);
    if (scene.background && scene.background.isColor) scene.background.copy(sky);
    else scene.background = sky.clone();
    if (scene.fog) scene.fog.color.copy(sky);

    if (sun.current) {
      sun.current.intensity = 0.12 + daglicht * 1.25;
      sun.current.color.copy(ZON_DAG).lerp(ZON_HORIZON, horizon);
      if (state.clock.elapsedTime - laatsteSchaduw.current >= 0.15) {
        laatsteSchaduw.current = state.clock.elapsedTime;
        sun.current.position.set(Math.cos(phase * Math.PI * 2) * 18, Math.max(-4, e * 22 + 3), 9);
        gl.shadowMap.needsUpdate = true;
      }
    }
    if (amb.current) amb.current.intensity = 0.42 + daglicht * 0.32; // 's nachts niet te donker (kind moet park blijven zien)
  });
  return (
    <>
      <ambientLight ref={amb} intensity={0.6} />
      <hemisphereLight args={["#eaf6ff", "#6f9a4a", 0.5]} />
      {/* Park-zwerm 17 jul: schaduwbox was ±20 terwijl het park ±80 is — het
          standaard-park (verblijven op ±34, spawn op z=35) stond dus grotendeels
          plat zonder slagschaduw. Box naar ±55; op low-end kleinere map (en
          shadows staan daar sowieso uit via Canvas). mapSize 1024 ook op
          niet-low-end (review 17 jul): 2048² was de grootste GPU-post en het
          visuele verschil op een telefoonscherm is nihil. */}
      <directionalLight
        ref={sun}
        castShadow
        position={[12, 16, 9]}
        intensity={1.2}
        shadow-mapSize={LOW_END ? [768, 768] : [1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={140}
        shadow-camera-left={-55}
        shadow-camera-right={55}
        shadow-camera-top={55}
        shadow-camera-bottom={-55}
        shadow-bias={-0.0004}
      />
    </>
  );
}

const SEAT_KLEUREN = ["#e2574c", "#4a90d9", "#f2b134", "#7bbf5a"];

// Eén carrousel-paardje (low-poly), wit met gekleurd zadel. Compact opgebouwd
// uit boxen zodat het bij ronddraaien als een echt kermispaardje leest.
function CarouselPaard({ color }) {
  return (
    <group>
      {/* romp */}
      <mesh castShadow position={[0, 0.5, 0]}><boxGeometry args={[0.7, 0.36, 0.26]} /><meshStandardMaterial color="#fdfbf6" flatShading roughness={0.85} /></mesh>
      {/* borst/hals omhoog */}
      <mesh castShadow position={[0.3, 0.72, 0]} rotation={[0, 0, 0.7]}><boxGeometry args={[0.34, 0.24, 0.24]} /><meshStandardMaterial color="#fdfbf6" flatShading roughness={0.85} /></mesh>
      {/* hoofd */}
      <mesh castShadow position={[0.46, 0.92, 0]} rotation={[0, 0, 0.25]}><boxGeometry args={[0.3, 0.2, 0.2]} /><meshStandardMaterial color="#fdfbf6" flatShading roughness={0.85} /></mesh>
      {/* manen */}
      <mesh position={[0.28, 0.86, 0]} rotation={[0, 0, 0.7]}><boxGeometry args={[0.12, 0.34, 0.26]} /><meshStandardMaterial color={color} flatShading roughness={0.9} /></mesh>
      {/* staart */}
      <mesh position={[-0.36, 0.56, 0]} rotation={[0, 0, -0.6]}><boxGeometry args={[0.12, 0.34, 0.22]} /><meshStandardMaterial color={color} flatShading roughness={0.9} /></mesh>
      {/* zadel */}
      <mesh position={[-0.02, 0.69, 0]}><boxGeometry args={[0.34, 0.1, 0.3]} /><meshStandardMaterial color={color} flatShading roughness={0.9} /></mesh>
      {/* 4 benen */}
      {[[0.26, 0.13], [0.26, -0.13], [-0.26, 0.13], [-0.26, -0.13]].map(([x, z], k) => (
        <mesh key={k} castShadow position={[x, 0.22, z]}><boxGeometry args={[0.12, 0.42, 0.12]} /><meshStandardMaterial color="#fdfbf6" flatShading roughness={0.85} /></mesh>
      ))}
    </group>
  );
}

// Draaimolen die echt ronddraait — een vrolijke kermis-carrousel met gestreept
// tentdak, schulprand, op-en-neer wippende paardjes en een vlaggetje bovenop.
const CARR_PAARD = ["#e2574c", "#4a90d9", "#f2b134", "#7bbf5a", "#b06ad6", "#ff8f3c"];
export function Carousel({ position = [0, 0, 0], rideRef }) {
  const top = useRef();
  const paarden = useRef([]);
  const vlag = useRef();
  const N = 6;
  const Rij = 2.0;          // straal van de paardjes-ring
  const dakY = 2.7;         // hoogte van de dakrand
  useFrame((s, dt) => {
    if (top.current) top.current.rotation.y += dt * 0.45;
    const t = s.clock.elapsedTime;
    // paardjes wippen op-en-neer, elk met eigen fase
    for (let i = 0; i < N; i++) {
      const m = paarden.current[i];
      if (m) m.position.y = 0.55 + Math.sin(t * 2.2 + i * 1.05) * 0.18;
    }
    if (vlag.current) vlag.current.rotation.y = Math.sin(t * 3) * 0.5;
    // 🎠 Instappen: schrijf de wereldpositie van paardje 0 (voor de mee-rij-camera).
    if (rideRef && paarden.current[0]) paarden.current[0].getWorldPosition(rideRef.current);
  });
  const plekken = Array.from({ length: N }, (_, i) => {
    const a = (i / N) * Math.PI * 2;
    return { x: Math.cos(a) * Rij, z: Math.sin(a) * Rij, a };
  });
  // gestreept dak: afwisselend rood/wit taartpunten
  const punten = Array.from({ length: 12 }, (_, i) => i);
  return (
    <group position={position}>
      {/* fundering / platform met sierrand */}
      <mesh castShadow receiveShadow position={[0, 0.12, 0]}>
        <cylinderGeometry args={[2.7, 2.85, 0.24, 32]} />
        <meshStandardMaterial color="#caa44a" flatShading roughness={1} />
      </mesh>
      <mesh receiveShadow position={[0, 0.26, 0]}>
        <cylinderGeometry args={[2.55, 2.6, 0.1, 32]} />
        <meshStandardMaterial color="#f4e7c4" flatShading roughness={1} />
      </mesh>
      {/* centrale zuil */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.22, 0.26, 2.9, 16]} />
        <meshStandardMaterial color="#f2b134" flatShading roughness={0.7} />
      </mesh>
      {/* gouden ringen om de zuil */}
      {[1.0, 2.4].map((y, k) => (
        <mesh key={k} position={[0, y, 0]}><torusGeometry args={[0.27, 0.05, 8, 18]} /><meshStandardMaterial color="#ffd54a" roughness={0.5} metalness={0.3} /></mesh>
      ))}

      {/* draaiend bovendeel: paardjes + dak */}
      <group ref={top} position={[0, 0.3, 0]}>
        {plekken.map((p, i) => (
          <group key={i} position={[p.x, 0, p.z]} rotation={[0, -p.a + Math.PI / 2, 0]}>
            {/* glimmende messing stang */}
            <mesh position={[0, 1.25, 0]}><cylinderGeometry args={[0.045, 0.045, 2.5, 8]} /><meshStandardMaterial color="#ffd54a" roughness={0.4} metalness={0.4} /></mesh>
            {/* wippend paardje */}
            <group ref={(el) => (paarden.current[i] = el)} position={[0, 0.55, 0]}>
              <CarouselPaard color={CARR_PAARD[i % CARR_PAARD.length]} />
            </group>
          </group>
        ))}

        {/* schulprand (valletje) onder het dak */}
        <mesh position={[0, dakY - 0.22, 0]}>
          <cylinderGeometry args={[2.75, 2.95, 0.34, 24, 1, true]} />
          <meshStandardMaterial color="#fdfbf6" flatShading roughness={0.85} side={2} />
        </mesh>
        {/* gestreept tentdak: taartpunten in 2 kleuren */}
        <group position={[0, dakY, 0]}>
          {punten.map((i) => (
            <mesh key={i} castShadow rotation={[0, (i / 12) * Math.PI * 2, 0]}>
              <coneGeometry args={[2.9, 1.5, 3, 1, false, 0, Math.PI / 6]} />
              <meshStandardMaterial color={i % 2 === 0 ? "#e2574c" : "#fdfbf6"} flatShading roughness={0.9} />
            </mesh>
          ))}
        </group>
        {/* knop + vlaggetje bovenop */}
        <mesh position={[0, dakY + 1.5, 0]}><sphereGeometry args={[0.2, 14, 14]} /><meshStandardMaterial color="#ffd54a" roughness={0.45} metalness={0.3} /></mesh>
        <mesh position={[0, dakY + 1.9, 0]}><cylinderGeometry args={[0.04, 0.04, 0.7, 8]} /><meshStandardMaterial color="#caa44a" roughness={0.6} /></mesh>
        <group ref={vlag} position={[0, dakY + 2.15, 0]}>
          <mesh position={[0.18, 0, 0]}><boxGeometry args={[0.36, 0.22, 0.02]} /><meshStandardMaterial color="#4a90d9" flatShading roughness={0.85} side={2} /></mesh>
        </group>
      </group>
    </group>
  );
}

// Reuzenrad (procedureel) — een groot draaiend wiel met gondels die rechtop
// blijven hangen. Het wiel draait om de Z-as (verticaal vlak); de gondels worden
// elke frame op hun rim-positie gezet zonder mee te kantelen.
const CABINE_KLEUREN = ["#e2574c", "#4a90d9", "#f2b134", "#7bbf5a", "#b06ad6", "#ff8f3c", "#3cb5a8", "#e85aa0"];
const LAMP_KLEUREN = ["#fff2a8", "#ff8f8f", "#9fd0ff", "#b6f5a0"];
export function FerrisWheel({ position = [0, 0, 0], rideRef }) {
  const wheel = useRef();
  const gond = useRef([]);
  const lampen = useRef();
  const R = 2.9, N = 8, hubY = 3.7;
  const spaken = Array.from({ length: N }, (_, i) => (i / N) * Math.PI * 2);
  useFrame((s, dt) => {
    if (wheel.current) wheel.current.rotation.z += dt * 0.32;
    const t = wheel.current ? wheel.current.rotation.z : 0;
    for (let i = 0; i < N; i++) {
      const m = gond.current[i];
      if (!m) continue;
      const a = t + (i / N) * Math.PI * 2;
      m.position.set(Math.cos(a) * R, hubY + Math.sin(a) * R, 0);
    }
    // 🎡 Instappen: gondel 0 is jouw plekje.
    if (rideRef && gond.current[0]) gond.current[0].getWorldPosition(rideRef.current);
    // lampjes laten "knipperen" met een lopend lichtje
    if (lampen.current) {
      const tt = s.clock.elapsedTime * 5;
      lampen.current.children.forEach((b, i) => {
        const aan = (Math.sin(tt - i * 0.6) + 1) * 0.5; // 0..1 golf
        if (b.material) b.material.emissiveIntensity = 0.25 + aan * 0.85;
      });
    }
  });
  const staal = "#b9c0c7", frame = "#e85c5c";
  return (
    <group position={position}>
      {/* voetplaten */}
      {[[1.5, 0.75], [-1.5, 0.75], [1.5, -0.75], [-1.5, -0.75]].map(([x, z], k) => (
        <mesh key={k} castShadow position={[x, 0.13, z]}><boxGeometry args={[0.6, 0.26, 0.6]} /><meshStandardMaterial color="#7a818a" flatShading roughness={0.9} /></mesh>
      ))}
      {/* steunbenen: twee A-frames (voor/achter) */}
      {[0.75, -0.75].map((z, k) => (
        <group key={k}>
          <mesh castShadow position={[1.15, hubY / 2, z]} rotation={[0, 0, -0.32]}><cylinderGeometry args={[0.11, 0.15, hubY + 1.5, 10]} /><meshStandardMaterial color={staal} flatShading roughness={0.7} metalness={0.2} /></mesh>
          <mesh castShadow position={[-1.15, hubY / 2, z]} rotation={[0, 0, 0.32]}><cylinderGeometry args={[0.11, 0.15, hubY + 1.5, 10]} /><meshStandardMaterial color={staal} flatShading roughness={0.7} metalness={0.2} /></mesh>
        </group>
      ))}
      {/* as */}
      <mesh position={[0, hubY, 0]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.16, 0.16, 1.7, 12]} /><meshStandardMaterial color={staal} roughness={0.6} metalness={0.3} /></mesh>
      {/* draaiend wiel: buitenringen + binnenring + spaken + hub + lampjes */}
      <group ref={wheel} position={[0, hubY, 0]}>
        {[0.65, -0.65].map((z, k) => (
          <mesh key={k} position={[0, 0, z]}><torusGeometry args={[R, 0.09, 8, 44]} /><meshStandardMaterial color={frame} flatShading roughness={0.6} /></mesh>
        ))}
        {[0.65, -0.65].map((z, k) => (
          <mesh key={`in${k}`} position={[0, 0, z]}><torusGeometry args={[R * 0.5, 0.05, 8, 30]} /><meshStandardMaterial color="#ffd54a" roughness={0.5} metalness={0.3} /></mesh>
        ))}
        {spaken.map((a, i) => (
          <mesh key={i} rotation={[0, 0, a]}><boxGeometry args={[R * 2, 0.045, 0.045]} /><meshStandardMaterial color="#dfe4e8" roughness={0.7} metalness={0.2} /></mesh>
        ))}
        {/* hub-schijf */}
        <mesh rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.42, 0.42, 1.4, 16]} /><meshStandardMaterial color="#ffd54a" roughness={0.5} metalness={0.3} /></mesh>
        {/* lichtjes rond de buitenrand */}
        <group ref={lampen}>
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i / 16) * Math.PI * 2;
            const c = LAMP_KLEUREN[i % LAMP_KLEUREN.length];
            return <mesh key={i} position={[Math.cos(a) * R, Math.sin(a) * R, 0.7]}><sphereGeometry args={[0.1, 8, 8]} /><meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.6} roughness={0.4} /></mesh>;
          })}
        </group>
      </group>
      {/* gondels — rechtop, elke frame op hun rim-plek gezet */}
      {Array.from({ length: N }).map((_, i) => {
        const c = CABINE_KLEUREN[i % CABINE_KLEUREN.length];
        return (
          <group key={i} ref={(el) => (gond.current[i] = el)}>
            {/* ophangbeugel */}
            <mesh position={[0, 0.36, 0]}><boxGeometry args={[0.06, 0.4, 0.06]} /><meshStandardMaterial color={staal} roughness={0.7} /></mesh>
            {/* cabine */}
            <mesh castShadow position={[0, -0.05, 0]}><boxGeometry args={[0.66, 0.52, 0.8]} /><meshStandardMaterial color={c} flatShading roughness={0.85} /></mesh>
            {/* bodem */}
            <mesh position={[0, -0.33, 0]}><boxGeometry args={[0.72, 0.08, 0.86]} /><meshStandardMaterial color="#f4e7c4" flatShading roughness={0.9} /></mesh>
            {/* puntdakje */}
            <mesh castShadow position={[0, 0.3, 0]} rotation={[0, Math.PI / 4, 0]}><coneGeometry args={[0.58, 0.34, 4]} /><meshStandardMaterial color="#fdfbf6" flatShading roughness={0.85} /></mesh>
            {/* raampje (lichte voorpaneel) */}
            <mesh position={[0, -0.02, 0.41]}><boxGeometry args={[0.42, 0.3, 0.02]} /><meshStandardMaterial color="#dff1ff" roughness={0.4} metalness={0.1} /></mesh>
          </group>
        );
      })}
    </group>
  );
}

// Zweefmolen (procedureel) — een paal met een draaiend dak en stoeltjes aan
// kettingen die naar buiten zweven.
export function SwingRide({ position = [0, 0, 0], rideRef }) {
  const top = useRef();
  const zitje = useRef();
  useFrame((_, dt) => {
    if (top.current) top.current.rotation.y += dt * 0.7;
    // 🪂 Instappen: onzichtbaar zitje aan de rand draait mee.
    if (rideRef && zitje.current) zitje.current.getWorldPosition(rideRef.current);
  });
  const N = 10, topY = 3.7, R = 1.8;
  const hoeken = Array.from({ length: N }, (_, i) => (i / N) * Math.PI * 2);
  const paal = "#f2b134";
  const stoel = ["#e2574c", "#4a90d9", "#7bbf5a", "#b06ad6", "#ff8f3c"];
  // gestreept dak: afwisselend rood/wit taartpunten
  const punten = Array.from({ length: 12 }, (_, i) => i);
  return (
    <group position={position}>
      {/* middenpaal + ringen */}
      <mesh castShadow position={[0, topY / 2, 0]}><cylinderGeometry args={[0.18, 0.24, topY, 14]} /><meshStandardMaterial color={paal} flatShading roughness={0.7} /></mesh>
      {[1.0, 2.4].map((y, k) => (
        <mesh key={k} position={[0, y, 0]}><torusGeometry args={[0.25, 0.05, 8, 16]} /><meshStandardMaterial color="#ffd54a" roughness={0.5} metalness={0.3} /></mesh>
      ))}
      <group ref={top} position={[0, topY, 0]}>
        {/* onzichtbaar mee-rij-zitje voor de instap-camera */}
        <object3D ref={zitje} position={[R, -1.5, 0]} />
        {/* draaikop-schijf waar de kettingen aan hangen */}
        <mesh position={[0, -0.15, 0]}><cylinderGeometry args={[1.75, 1.75, 0.14, 20]} /><meshStandardMaterial color="#e7d6a8" flatShading roughness={0.85} /></mesh>
        {/* gestreept tentdak */}
        <group position={[0, 0.15, 0]}>
          {punten.map((i) => (
            <mesh key={i} castShadow rotation={[0, (i / 12) * Math.PI * 2, 0]}>
              <coneGeometry args={[2.0, 0.95, 3, 1, false, 0, Math.PI / 6]} />
              <meshStandardMaterial color={i % 2 === 0 ? "#e2574c" : "#fdfbf6"} flatShading roughness={0.9} />
            </mesh>
          ))}
        </group>
        {/* lichtjes langs de dakrand */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const c = LAMP_KLEUREN[i % LAMP_KLEUREN.length];
          return <mesh key={`l${i}`} position={[Math.cos(a) * 1.78, -0.06, Math.sin(a) * 1.78]}><sphereGeometry args={[0.08, 8, 8]} /><meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.6} roughness={0.4} /></mesh>;
        })}
        {/* knop + vlaggetje */}
        <mesh position={[0, 0.7, 0]}><sphereGeometry args={[0.16, 12, 12]} /><meshStandardMaterial color="#ffd54a" roughness={0.45} metalness={0.3} /></mesh>
        <mesh position={[0, 1.05, 0]}><cylinderGeometry args={[0.035, 0.035, 0.6, 8]} /><meshStandardMaterial color="#caa44a" roughness={0.6} /></mesh>
        <mesh position={[0.16, 1.25, 0]}><boxGeometry args={[0.32, 0.2, 0.02]} /><meshStandardMaterial color="#4a90d9" flatShading roughness={0.85} side={2} /></mesh>
        {/* stoeltjes aan kettingen, naar buiten zwevend */}
        {hoeken.map((a, i) => (
          <group key={i} rotation={[0, a, 0]}>
            {/* twee kettingen naar buiten gekanteld */}
            {[-0.16, 0.16].map((zz, k) => (
              <mesh key={k} position={[R * 0.78, -0.72, zz]} rotation={[0, 0, -0.5]}><cylinderGeometry args={[0.018, 0.018, 1.55, 6]} /><meshStandardMaterial color="#888" roughness={0.6} metalness={0.3} /></mesh>
            ))}
            {/* zitje + rugleuning */}
            <group position={[R, -1.4, 0]}>
              <mesh castShadow position={[0, 0, 0]}><boxGeometry args={[0.42, 0.12, 0.44]} /><meshStandardMaterial color={stoel[i % stoel.length]} flatShading roughness={0.9} /></mesh>
              <mesh castShadow position={[-0.21, 0.2, 0]}><boxGeometry args={[0.1, 0.42, 0.44]} /><meshStandardMaterial color={stoel[i % stoel.length]} flatShading roughness={0.9} /></mesh>
            </group>
          </group>
        ))}
      </group>
    </group>
  );
}

// ☁️ Stoompluim — maakt van de trein een STOOMTREIN (Mark 12 jul: "alles in het
// park is benoembaar, begin met de trein"). Drie witte wolkjes die uit de
// schoorsteen omhoog kringelen, groeien en vervagen — licht (3 low-poly bollen,
// meshBasicMaterial, geen schaduw) zodat AdaptiveDpr er geen last van heeft.
// `drift` = lokale richting waarin de rook wegwaait (naar achteren t.o.v. rijden).
export function StoomPluim({ top = [0, 1.1, 0], drift = [0.8, 0, 0], scale = 1 }) {
  const refs = useRef([]);
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    for (let i = 0; i < refs.current.length; i++) {
      const m = refs.current[i];
      if (!m) continue;
      const ph = (t * 0.5 + i / 3) % 1; // 0→1: net uit de pijp → opgelost
      m.position.set(
        top[0] + drift[0] * ph * scale,
        top[1] + (0.15 + ph * 1.3) * scale,
        top[2] + drift[2] * ph * scale
      );
      m.scale.setScalar((0.1 + ph * 0.28) * scale);
      m.material.opacity = 0.55 * (1 - ph);
    }
  });
  return (
    <group>
      {[0, 1, 2].map((i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#f4f6f8" transparent opacity={0.5} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

// Treintje (procedureel) — een locomotief + 2 wagonnetjes die rondjes rijden
// over een rond spoor. De hele trein-groep draait om het midden; elke wagon
// staat op zijn hoek met de neus in de rij-richting (raaklijn).
// Leermoment van het treintje loopt via het selectie-menu ("💡 Hoe werkt dit?")
// zodat tikken = selecteren blijft (verplaatsen/instappen). De rondloop-gids
// praat er sowieso ongevraagd over (GidsWatcher).
export function TrainRide({ position = [0, 0, 0] }) {
  const train = useRef();
  useFrame((_, dt) => { if (train.current) train.current.rotation.y += dt * 0.5; });
  const R = 2.0;
  const wagons = [
    { a: 0, loco: true, color: "#d65a5a" },
    { a: -0.42, loco: false, color: "#4a90d9" },
    { a: -0.84, loco: false, color: "#f2b134" },
  ];
  const hout = "#7a6f63", staal = "#555";
  return (
    <group position={position}>
      {/* rond spoor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.04, 0]} receiveShadow>
        <ringGeometry args={[R - 0.2, R + 0.2, 44]} />
        <meshStandardMaterial color={hout} roughness={1} />
      </mesh>
      {/* draaiende trein */}
      <group ref={train}>
        {wagons.map((w, i) => {
          const x = Math.cos(w.a) * R, z = Math.sin(w.a) * R;
          return (
            <group key={i} position={[x, 0, z]} rotation={[0, -w.a, 0]}>
              {w.loco ? (
                <>
                  <mesh castShadow position={[0, 0.32, 0]}><boxGeometry args={[0.5, 0.4, 0.9]} /><meshStandardMaterial color={w.color} flatShading roughness={0.9} /></mesh>
                  <mesh castShadow position={[0, 0.66, -0.18]}><boxGeometry args={[0.5, 0.36, 0.42]} /><meshStandardMaterial color={w.color} flatShading roughness={0.9} /></mesh>
                  <mesh position={[0, 0.72, 0.32]}><cylinderGeometry args={[0.08, 0.1, 0.34, 10]} /><meshStandardMaterial color={staal} roughness={0.7} /></mesh>
                  {/* stoom uit de schoorsteen — pijp zit vooraan (+z), rook waait naar achteren */}
                  <StoomPluim top={[0, 0.95, 0.32]} drift={[0, 0, -0.7]} scale={0.7} />
                </>
              ) : (
                <>
                  <mesh castShadow position={[0, 0.3, 0]}><boxGeometry args={[0.5, 0.34, 0.7]} /><meshStandardMaterial color={w.color} flatShading roughness={0.9} /></mesh>
                  <mesh castShadow position={[0, 0.52, 0]}><boxGeometry args={[0.56, 0.08, 0.74]} /><meshStandardMaterial color="#eee" roughness={0.8} /></mesh>
                </>
              )}
              {/* wieltjes */}
              {[-0.28, 0.28].map((zz, k) => (
                <mesh key={k} position={[0, 0.12, zz]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.12, 0.12, 0.54, 10]} /><meshStandardMaterial color={staal} roughness={0.6} /></mesh>
              ))}
            </group>
          );
        })}
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
// Camera volgt het poppetje: schuift het orbit-draaipunt mee naar de speler,
// zodat de camera meeloopt terwijl je nog steeds kunt draaien/zoomen.
export function CameraFollow({ posRef, controlsRef, active }) {
  const tmp = useRef(new Vector3());
  useFrame(() => {
    if (!active || !controlsRef?.current || !posRef?.current) return;
    tmp.current.set(posRef.current.x, 0.9, posRef.current.z);
    controlsRef.current.target.lerp(tmp.current, 0.1);
    controlsRef.current.update();
  });
  return null;
}

export function Player({ inputRef, start = [0, 0, 13], isSolid, posRef, heightRef, avatarUrl, firstPerson = false, lookRef, faceRef, bouwt = false, verborgen = false, zweef = false, climbRef = null }) {
  const g = useRef();
  const moving = useRef(false);
  const pos = useRef(new Vector3(start[0], 0, start[2]));
  const vliegY = useRef(VLIEG_START); // huidige vlieghoogte boven de grond (zweefmodus)
  const fwd = useRef(new Vector3()), right = useRef(new Vector3()), dir = useRef(new Vector3());
  const vel = useRef(new Vector3()), doelV = useRef(new Vector3()); // huidige + gewenste loopsnelheid
  const yGlad = useRef(null); // gedempte hoogte → zacht op/af blok-treden stappen
  // Beginrichting: kijk naar het parkmidden (0,0) i.p.v. met je rug ernaartoe.
  const startYaw = Math.atan2(-start[0], -start[2]);
  const yaw = useRef(startYaw); // kijkrichting (eerstepersoons)
  const wasFP = useRef(false);  // net overgeschakeld naar eerstepersoons?
  const solidRef = useRef(isSolid);
  solidRef.current = isSolid;
  const url = avatarUrl || CHARACTERS[0].url;

  // Botsings-bewust verplaatsen naar (nx,nz): glijdt langs muren i.p.v. vast te
  // lopen. Begrenst ook tot binnen het park.
  const verplaats = (nx, nz) => {
    const solid = solidRef.current;
    const vast = solid ? solid(pos.current.x, pos.current.z) : false;
    if (!solid || vast || !solid(nx, nz)) { pos.current.x = nx; pos.current.z = nz; }
    else { if (!solid(nx, pos.current.z)) pos.current.x = nx; if (!solid(pos.current.x, nz)) pos.current.z = nz; }
    const d = Math.hypot(pos.current.x, pos.current.z);
    if (d > PARK_RAND) { pos.current.x *= PARK_RAND / d; pos.current.z *= PARK_RAND / d; }
  };

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
    // Verborgen (in attractie/trein/zeppelin): bevries het poppetje — anders
    // loopt het onzichtbaar mee met de joystick terwijl jij iets anders bestuurt,
    // en sta je na het uitstappen ineens ergens anders (26 aug).
    if (verborgen) { moving.current = false; return; }
    const dts = Math.min(dt, 0.05); // tijdstap begrenzen (geen sprong na tab-wissel)

    // ── Eerstepersoons: links/rechts draait je blik, vooruit/achteruit loopt waar
    //    je kijkt. De camera zit in het hoofd (model verborgen). ──
    if (firstPerson) {
      if (!wasFP.current) { yaw.current = node.rotation.y; wasFP.current = true; }
      // `look` = muis/vinger-besturing (zie LookControl): dx draait, dy kijkt
      // omhoog/omlaag, active = ingedrukt houden → vooruit lopen. Pijltjes/WASD
      // blijven ook werken (mx draait, my vooruit/achteruit).
      const look = inp.look || {};
      const turn = Math.max(-1, Math.min(1, mx + (look.dx || 0)));
      const walk = Math.max(-1, Math.min(1, -my + (look.active ? 1 : 0)));
      const pitch = Math.max(-1, Math.min(1, look.dy || 0));
      yaw.current -= turn * 2.0 * dts;
      const fx = Math.sin(yaw.current), fz = Math.cos(yaw.current);
      moving.current = Math.abs(walk) > 0.12 || Math.abs(turn) > 0.05;
      if (Math.abs(walk) > 0.12) {
        const step = 3.0 * dts * walk;
        verplaats(pos.current.x + fx * step, pos.current.z + fz * step);
      }
      node.rotation.y = yaw.current;
      const tyFP = heightRef?.current ? heightRef.current(pos.current.x, pos.current.z) : 0;
      if (yGlad.current == null) yGlad.current = tyFP;
      yGlad.current += (tyFP - yGlad.current) * Math.min(1, 12 * dts);
      const ty = yGlad.current;
      node.position.set(pos.current.x, ty, pos.current.z);
      if (posRef) posRef.current.set(pos.current.x, ty, pos.current.z);
      // Mikpunt: vóór de speler; omhoog/omlaag met pitch (muis-/veeg-verticaal).
      // Tan-mapping i.p.v. lineair (Mark 26 aug: "ik wil verder omhoog kunnen
      // kijken, naar de zeppelins"): vol omhoog ≈ 73° — genoeg om zeppelins en
      // de raket-lancering te volgen; vol omlaag kijk je nu ook echt naar je voeten.
      if (lookRef) lookRef.current.set(pos.current.x + fx * 4, ty + 1.28 + Math.tan(-pitch * 1.28) * 4, pos.current.z + fz * 4);
      if (faceRef) faceRef.current.set(fx, 0, fz);
      return;
    }
    wasFP.current = false;

    // Lopen relatief aan de camera, met soepele versnelling/vertraging en
    // draai-demping — geen abrupte snap meer, voelt vlot en natuurlijk.
    if (mag > 0.12) {
      state.camera.getWorldDirection(fwd.current);
      fwd.current.y = 0; fwd.current.normalize();
      right.current.set(-fwd.current.z, 0, fwd.current.x);
      dir.current.set(0, 0, 0);
      dir.current.addScaledVector(fwd.current, -my);
      dir.current.addScaledVector(right.current, mx);
      if (dir.current.lengthSq() > 0.0001) dir.current.normalize();
      // 🪽 Zweven (Mark 2 jul, Minecraft-fly): 2× zo snel door het park.
      doelV.current.copy(dir.current).multiplyScalar((zweef ? 9 : 4.2) * Math.min(1, mag));
    } else {
      doelV.current.set(0, 0, 0);
    }
    vel.current.lerp(doelV.current, 1 - Math.exp(-10 * dts)); // framerate-onafhankelijke demping
    const sp = vel.current.length();
    // Snelheid (m/s) doorgeven i.p.v. alleen aan/uit: CharacterModel schaalt het
    // stap-tempo mee, zodat de voeten niet over de grond glijden.
    moving.current = sp > 0.4 ? sp : 0;
    if (moving.current) state.performance.regress(); // AdaptiveDpr: even lagere resolutie tijdens lopen
    if (sp > 0.05) {
      if (zweef) {
        // Zwevend: geen botsing — je vliegt over hekken en gebouwen heen.
        pos.current.x += vel.current.x * dts;
        pos.current.z += vel.current.z * dts;
        const zd = Math.hypot(pos.current.x, pos.current.z);
        if (zd > PARK_RAND) { pos.current.x *= PARK_RAND / zd; pos.current.z *= PARK_RAND / zd; }
      } else {
        verplaats(pos.current.x + vel.current.x * dts, pos.current.z + vel.current.z * dts);
      }
    }
    if (mag > 0.12 && dir.current.lengthSq() > 0.0001) {
      const doelHoek = Math.atan2(dir.current.x, dir.current.z);
      let dh = doelHoek - node.rotation.y;
      dh = Math.atan2(Math.sin(dh), Math.cos(dh)); // kortste draai-richting
      node.rotation.y += dh * Math.min(1, 14 * dts);
    }
    // 🪽 Vlieghoogte regelen met de omhoog/omlaag-knoppen (climbRef: +1 stijgen,
    //    −1 dalen). Zo kun je hoog boven het park hangen om het hele pad te zien.
    if (zweef) {
      const climb = climbRef?.current || 0;
      if (climb) vliegY.current = Math.max(VLIEG_MIN, Math.min(VLIEG_MAX, vliegY.current + climb * 40 * dts));
    } else {
      vliegY.current = VLIEG_START;
    }
    const tyDoel = (heightRef?.current ? heightRef.current(pos.current.x, pos.current.z) : 0) + (zweef ? vliegY.current : 0);
    if (yGlad.current == null) yGlad.current = tyDoel;
    yGlad.current += (tyDoel - yGlad.current) * Math.min(1, 12 * dts);
    const ty = yGlad.current;
    node.position.set(pos.current.x, ty, pos.current.z);
    if (posRef) posRef.current.set(pos.current.x, ty, pos.current.z);
    if (faceRef) faceRef.current.set(Math.sin(node.rotation.y), 0, Math.cos(node.rotation.y));
  });

  return (
    // In eerstepersoons zit de camera in het hoofd → eigen poppetje verbergen.
    // Begin gedraaid naar het parkmidden, zodat je meteen het park ziet.
    <group ref={g} position={start} rotation={[0, startYaw, 0]} visible={!firstPerson && !verborgen}>
      <CharacterModel key={url} url={url} movingRef={moving} bouwt={bouwt} />
    </group>
  );
}

// Eerstepersoons-camera: zit in het hoofd van de speler en kijkt mee in z'n
// blikrichting (de Player schrijft positie + mikpunt elke frame). OrbitControls
// staat dan uit, zodat niets tegenwerkt.
export function FirstPersonCamera({ posRef, lookRef, active }) {
  useFrame((state) => {
    if (!active || !posRef?.current || !lookRef?.current) return;
    const p = posRef.current;
    state.camera.position.set(p.x, p.y + 1.5, p.z); // ooghoogte ~1,5 m
    state.camera.lookAt(lookRef.current);
  });
  return null;
}

// Derde-persoons (standaard): camera zweeft áchter en bóven de speler en kijkt
// naar 'm, zodat zowel je poppetje als je buddy lekker in beeld staan. Volgt de
// kijkrichting van de speler (faceRef) en schuift soepel mee (lerp).
export function ThirdPersonCamera({ posRef, faceRef, active, afstand = 5.4, hoogte = 2.7 }) {
  const doel = useRef(new Vector3());
  const mik = useRef(new Vector3());
  const snapped = useRef(false);
  useFrame((state) => {
    if (!active || !posRef?.current) { snapped.current = false; return; }
    const p = posRef.current;
    const f = faceRef?.current;
    const fx = f ? f.x : 0, fz = f ? f.z : 1;
    doel.current.set(p.x - fx * afstand, (p.y || 0) + hoogte, p.z - fz * afstand);
    if (!snapped.current) { state.camera.position.copy(doel.current); snapped.current = true; }
    else state.camera.position.lerp(doel.current, 0.09);
    mik.current.set(p.x, (p.y || 0) + 1.1, p.z);
    state.camera.lookAt(mik.current);
  });
  return null;
}

// Spring-arm-camera (nieuwe standaard): hangt achter de speler en JIJ bepaalt de
// kijkrichting — slepen op het scherm draait 'm (yaw+pitch), scrollen/knijpen
// zoomt. Leest inputRef.current.cam = { yaw, pitch, dist }. Clippt nergens
// doorheen: de arm stapt van speler naar gewenste camera-plek en wordt korter
// zodra iets vasts of de grond in de weg zit; daarna veert hij rustig weer uit.
export function SpringArmCamera({ posRef, inputRef, active, topAt, heightRef }) {
  const focus = useRef(new Vector3());
  const doelFocus = useRef(new Vector3());
  const effDist = useRef(5.4);
  const snapped = useRef(false);
  const vorige = useRef({ yaw: 0, pitch: 0, dist: 0 });
  useFrame((state, dt) => {
    if (!active || !posRef?.current) { snapped.current = false; return; }
    const dts = Math.min(dt, 0.05);
    const cam = inputRef?.current?.cam || { yaw: Math.PI, pitch: 0.32, dist: 5.4 };
    // AdaptiveDpr: tijdens draaien/zoomen even lagere resolutie → vloeiend beeld.
    const v = vorige.current;
    if (v.yaw !== cam.yaw || v.pitch !== cam.pitch || v.dist !== cam.dist) {
      state.performance.regress();
      v.yaw = cam.yaw; v.pitch = cam.pitch; v.dist = cam.dist;
    }
    const p = posRef.current;
    // Kijkpunt net boven het hoofd, soepel meebewegend met de speler.
    doelFocus.current.set(p.x, (p.y || 0) + 1.35, p.z);
    if (!snapped.current) focus.current.copy(doelFocus.current);
    else focus.current.lerp(doelFocus.current, 1 - Math.exp(-12 * dts));
    const cp = Math.cos(cam.pitch);
    const dx = -Math.sin(cam.yaw) * cp, dy = Math.sin(cam.pitch), dz = -Math.cos(cam.yaw) * cp;
    // Botsing: loop de arm af; blokkade → arm inkorten tot nét ervoor.
    let maxD = cam.dist;
    const hoogte = heightRef?.current;
    for (let t = 0.6; t <= cam.dist; t += 0.35) {
      const x = focus.current.x + dx * t, y = focus.current.y + dy * t, z = focus.current.z + dz * t;
      const grond = hoogte ? hoogte(x, z) : 0;
      const top = topAt ? topAt(x, z) : 0;
      if ((top > 0 && y < grond + top) || y < grond + 0.35) { maxD = Math.max(1.1, t - 0.4); break; }
    }
    const rate = maxD < effDist.current ? 22 : 4; // inkorten vlot (niet clippen), uitveren rustig
    if (!snapped.current) { effDist.current = maxD; snapped.current = true; }
    else effDist.current += (maxD - effDist.current) * Math.min(1, rate * dts);
    state.camera.position.set(
      focus.current.x + dx * effDist.current,
      focus.current.y + dy * effDist.current,
      focus.current.z + dz * effDist.current
    );
    state.camera.lookAt(focus.current);
  });
  return null;
}

// Door de ogen van je buddy: camera zit bij het maatje (dat om je heen vliegt)
// en kijkt naar de speler — zo zie je jezelf vanuit je vliegende vriendje.
export function BuddyEyeCamera({ buddyPosRef, playerPosRef, active }) {
  const mik = useRef(new Vector3());
  useFrame((state) => {
    if (!active || !buddyPosRef?.current || !playerPosRef?.current) return;
    const b = buddyPosRef.current, p = playerPosRef.current;
    state.camera.position.lerp(b, 0.25);
    mik.current.set(p.x, (p.y || 0) + 0.9, p.z);
    state.camera.lookAt(mik.current);
  });
  return null;
}

// Bezoekers: kleine figuurtjes die door het park wandelen. Ze krijgen een
// behoefte (honger/dorst/zin in ijs of popcorn) en gaan verlangen naar wat JIJ
// in je park aanbiedt — denkwolkje boven hun hoofd — lopen naar het bijbehorende
// kraampje en kopen iets, zodat jij muntjes verdient. Hoe hoger de prijs, hoe
// meer per stuk, maar bij een te hoge prijs haken bezoekers af (😖). Geen
// botsing; puur sfeer + verdienen.
const BEZOEKER_KLEUREN = ["#e2574c", "#4a90d9", "#f2b134", "#7bbf5a", "#b06ad8", "#e88a3c", "#3cb5a8"];
// Blije gedachten van bezoekers over het park.
const BEZOEKER_BLIJ = [{ e: "😍", t: "Wat een mooi park!" }, { e: "😊", t: "Leuk hier!" }, { e: "👍", t: "Top dierentuin!" }, { e: "🎉", t: "Wat gezellig!" }];
// 💬 Kletspraatjes tussen twee bezoekers die elkaar tegenkomen (Mark 9 aug:
// "de bots gedragen zich simpel") — de één begint, de ander antwoordt.
const KLETS_START = [
  { e: "👋", t: "Hoi!" }, { e: "💬", t: "Mooi park hè?" },
  { e: "🍦", t: "Heb jij al een ijsje op?" }, { e: "🦊", t: "Welk dier vind jij het leukst?" },
];
const KLETS_ANTWOORD = [
  { e: "😊", t: "Ja, super mooi!" }, { e: "😄", t: "Haha, ja!" },
  { e: "🐾", t: "Ik ga zo naar de dieren!" }, { e: "❤️", t: "De vos is mijn favoriet!" },
];

// Persoonlijke begroeting van een bezoeker aan de speler: spreekt je bij naam aan
// en reageert op iets ECHTS in je park (een pas geboren jong, een hongerig dier,
// een mooi dier, een groot park). Bewust zónder AI — die gebeurtenissen kennen we
// al, dus dit is gratis, werkt offline en stuurt geen kindgegevens naar buiten.
// (Een AI-variant die de zinnen vrijer formuleert kan later als optionele,
// gecachte online "smaakmaker".)
function maakBegroeting(facts) {
  const f = facts || {};
  const naam = (f.naam || "").trim();
  const hoi = naam ? `Hoi ${naam}` : "Hoi";
  const low = (s) => (s || "").toLowerCase();
  const cap = (s) => { const l = low(s); return l ? l[0].toUpperCase() + l.slice(1) : ""; };
  const o = [];
  // Echte score uit Leerkwartier (alleen ingelogd) → persoonlijk compliment. Krijgt
  // extra gewicht zodat het vaak langskomt als er een mooie score is.
  if (f.goedeScore && f.goedeScore.vak) {
    const v = low(f.goedeScore.vak), p = f.goedeScore.pct;
    o.push(
      { e: "🎉", t: `${hoi}! Ik hoorde dat je ${p}% goed had bij ${v} — top!` },
      { e: "🌟", t: `${hoi}! Knap hoor, ${p}% bij ${v}!` },
      { e: "👏", t: `${naam ? naam + ", j" : "J"}e bent goed in ${v}!` },
    );
  }
  if (f.baby) o.push({ e: "🐣", t: `${hoi}! Een baby${low(f.baby)} — schattig!` }, { e: "🐣", t: `Een jong ${low(f.baby)} geboren!` });
  if (f.honger) o.push({ e: "🌾", t: `${cap(f.honger)} ziet er hongerig uit…` });
  if (f.dier) o.push({ e: "😍", t: `${cap(f.dier)} is mijn lievelingsdier!` });
  if (f.veel) o.push({ e: "🎡", t: `${hoi}, wat een groot park!` });
  // School/leren — verbindt het park met het leren (en normaliseert dat oefenen
  // soms lastig is). Als we een zwak vak kennen, noemen we dat.
  if (f.zwakVak) o.push({ e: "🧮", t: `${hoi}! Zin om ${low(f.zwakVak)} te oefenen?` });
  o.push(
    { e: "👋", t: `${hoi}!` },
    { e: "😊", t: `${hoi}, leuk park!` },
    { e: "🌟", t: naam ? `${naam}, wat een mooie dierentuin!` : "Wat mooi hier!" },
    { e: "📚", t: "Leer een kwartier, dan groeit je park!" },
    { e: "🧮", t: naam ? `${naam}, hoe gaat het met rekenen?` : "Hoe gaat het met rekenen?" },
    { e: "💪", t: "Ik vind breuken soms lastig… jij ook?" },
    { e: "✏️", t: "Heb jij vandaag al een kwartier geleerd?" },
  );
  return o[Math.floor(Math.random() * o.length)];
}

// Koopkans op basis van de verkoopprijs t.o.v. de "eerlijke" prijs (≈ 2× inkoop):
// goedkoop → bijna iedereen koopt; veel te duur → bijna niemand.
function koopKans(prijs, fair) {
  const f = fair || 4;
  return Math.max(0.08, Math.min(1, 1.3 - prijs / (f * 2)));
}

// Binnen welke straal (m) van jouw poppetje een bezoeker "gaat denken" (honger/
// zin krijgt). Mark-wens: het denken voornamelijk bij wie langs je poppetje loopt.
const DENK_STRAAL = 2.2;

function Visitor({ seed, standsRef, kraamRef, onBuy, heightRef, playerRef, factsRef, onTap, isSolid, padsRef, dierenRef, pretRef, bankjesRef, crowdRef, idx }) {
  const g = useRef();
  const coin = useRef();
  const moving = useRef(false);
  const solidRef = useRef(isSolid);
  solidRef.current = isSolid;
  // Cursor-reset bij unmount (review 17 jul): een bezoeker die tijdens hover
  // verdwijnt (aantal daalt na weghalen van een trekpleister) liet de app
  // anders met een pointer-cursor achter.
  useEffect(() => () => { document.body.style.cursor = "default"; }, []);
  // Bezoekers zijn altijd blok-figuren (Mark 2 jul: geen "echte" mensen meer).
  const BLOK_FIGUREN = CHARACTERS.filter((c) => c.blocky);
  const charUrl = BLOK_FIGUREN[seed % BLOK_FIGUREN.length].url;
  const [bubble, setBubble] = useState(null); // { e, t? }
  const st = useRef({
    x: ((seed % 7) - 3) * 5, z: (((seed * 3) % 7) - 3) * 5,
    tx: 0, tz: 0, rest: (seed % 3) * 0.7, resting: true, phase: seed,
    need: null, needT: 8 + (seed % 10), acting: false, coinT: -1, bt: 0,
    // 🚶 natuurlijker lopen (Mark 2026-06-27): elke bezoeker een eigen loop-tempo
    // + een zachte 'rondkijk'-draairichting tijdens pauzes.
    speedF: 0.82 + ((seed * 7) % 42) / 100,            // ~0.82..1.23
    idleTurn: ((seed % 2) ? 1 : -1) * (0.25 + (seed % 4) * 0.12),
    // 🤝 sociaal gedrag (Mark 9 aug 2026: "bots gedragen zich simpel"):
    // kletsen met elkaar, iemand/iets aankijken, en af en toe bij een dier
    // blijven kijken. chatCd start gespreid zodat niet iedereen tegelijk klets.
    chatT: 0, chatCd: 6 + (seed % 12), chatFace: null, chatPing: null, chatScan: 0.3,
    face: null, faceT: 0, glanceT: 5 + (seed % 7),
  });
  const shirt = BEZOEKER_KLEUREN[seed % BEZOEKER_KLEUREN.length];
  const toon = (b, dur) => { setBubble(b); st.current.bt = dur; };

  // Registreer dit poppetje in de gedeelde menigte-lijst zodat bezoekers
  // elkaar kunnen zien (ontwijken + kletsen). Max ~12 stuks → goedkoop.
  useEffect(() => {
    if (!crowdRef) return undefined;
    crowdRef.current[idx] = st.current;
    return () => { crowdRef.current[idx] = null; };
  }, [crowdRef, idx]);

  useFrame((_, dt) => {
    const s = st.current; const node = g.current; if (!node) return;
    const stands = standsRef?.current || {};
    const kr = kraamRef?.current || {};

    // Denkwolkje vanzelf laten verdwijnen.
    if (s.bt > 0) { s.bt -= dt; if (s.bt <= 0) setBubble(null); }
    // Klets-afkoeltijd + antwoord op een buurman die een praatje begon
    // (die zet chatPing op óns state-object via de menigte-lijst).
    if (s.chatCd > 0) s.chatCd -= dt;
    if (s.chatPing) { const p = s.chatPing; s.chatPing = null; toon(p, 2.6); }

    // Behoefte opwekken — voornamelijk bij bezoekers die vlak langs jouw poppetje
    // lopen (binnen DENK_STRAAL). Zo "denkt" niet het hele park tegelijk; je wekt
    // het zelf op door rond te lopen. Heel af en toe denkt iemand verderop ook.
    if (!s.need && !s.acting) {
      s.needT -= dt;
      if (s.needT <= 0) {
        const pp = playerRef?.current;
        const dichtbij = pp && Math.hypot(pp.x - s.x, pp.z - s.z) <= DENK_STRAAL;
        const beschikbaar = KRAAM_KEYS.filter((k) => (stands[k] || []).length);
        // Loop je vlak langs een bezoeker? Dan groet die je vaak persoonlijk.
        if (dichtbij && Math.random() < 0.5) {
          toon(maakBegroeting(factsRef?.current), 3.6);
          s.needT = 5 + Math.random() * 5;
          // Even stoppen en je áánkijken tijdens de begroeting — niet
          // doorlopen alsof je lucht bent (Mark 9 aug).
          s.resting = true; s.rest = Math.max(s.rest || 0, 2.6);
          s.face = [pp.x, pp.z]; s.faceT = 2.6;
        } else if (beschikbaar.length && Math.random() < 0.6) {
          // Er zijn kraampjes → ga vaak iets kopen (zo zijn je kramen ook echt druk).
          const kind = beschikbaar[Math.floor(Math.random() * beschikbaar.length)];
          const soort = KRAAM_SOORTEN[kind];
          const lijst = stands[kind] || [];
          let best = lijst[0], bd = Infinity;
          for (const p of lijst) { const d = Math.hypot(p[0] - s.x, p[1] - s.z); if (d < bd) { bd = d; best = p; } }
          const dx = s.x - best[0], dz = s.z - best[1]; const dd = Math.hypot(dx, dz) || 1;
          s.tx = best[0] + (dx / dd) * 2.6; s.tz = best[1] + (dz / dd) * 2.6;
          s.need = kind; s.acting = true; s.resting = false;
          toon({ e: soort.cravingEmoji, t: soort.craving }, 4);
        } else if (!beschikbaar.length && Math.random() < 0.25) {
          // Nog geen kraampje → bezoeker baalt even (hint om er een te bouwen).
          const kind = KRAAM_KEYS[Math.floor(Math.random() * KRAAM_KEYS.length)];
          const soort = KRAAM_SOORTEN[kind];
          toon({ e: soort.cravingEmoji, t: soort.craving }, 4);
          s.needT = 8 + Math.random() * 8;
        } else {
          // Anders af en toe een blije gedachte over het park.
          if (Math.random() < 0.3) { const p = BEZOEKER_BLIJ[Math.floor(Math.random() * BEZOEKER_BLIJ.length)]; toon(p, 3); }
          s.needT = 4 + Math.random() * 5;
        }
      }
    }

    // Wandelen / aankomen.
    if (s.resting) {
      s.rest -= dt;
      if (s.chatT > 0) {
        // 💬 In gesprek met een andere bezoeker: naar elkaar toe draaien.
        s.chatT -= dt;
        if (s.chatFace) {
          const wil = Math.atan2(s.chatFace[0] - s.x, s.chatFace[1] - s.z);
          let df = wil - node.rotation.y;
          while (df > Math.PI) df -= Math.PI * 2;
          while (df < -Math.PI) df += Math.PI * 2;
          node.rotation.y += df * Math.min(1, dt * 6);
        }
        if (s.chatT <= 0) { s.chatFace = null; s.rest = Math.min(s.rest, 0.6); }
      } else if (s.faceT > 0 && s.face) {
        // 👀 iemand of iets aankijken (speler-begroeting, dier-blik).
        s.faceT -= dt;
        const wil = Math.atan2(s.face[0] - s.x, s.face[1] - s.z);
        let df = wil - node.rotation.y;
        while (df > Math.PI) df -= Math.PI * 2;
        while (df < -Math.PI) df += Math.PI * 2;
        node.rotation.y += df * Math.min(1, dt * 6);
        if (s.faceT <= 0) s.face = null;
      } else {
        // langzaam rondkijken tijdens de pauze i.p.v. bevroren staren
        node.rotation.y += s.idleTurn * dt * 0.6;
      }
      if (s.rest <= 0) {
        // 🎯 kies een bezigheid: meestal over de paden slenteren, soms een dier
        // aaien of een foto maken. (Kopen verloopt via het 'need'-blok hierboven.)
        const paden = padsRef?.current || [];
        const dieren = dierenRef?.current || [];
        const pret = pretRef?.current || [];
        const bankjes = bankjesRef?.current || [];
        const r = Math.random();
        if (dieren.length && r < 0.20) {
          const a = dieren[Math.floor(Math.random() * dieren.length)];
          s.tx = a[0] + (Math.random() - 0.5) * 1.2; s.tz = a[1] + 1.5 + (Math.random() - 0.5) * 0.6;
          s.intent = "pet"; s.subj = a;
        } else if ((dieren.length || pret.length) && r < 0.34) {
          const pool = (pret.length && Math.random() < 0.5) ? pret : (dieren.length ? dieren : pret);
          const a = pool[Math.floor(Math.random() * pool.length)];
          s.tx = a[0] + (Math.random() - 0.5) * 2; s.tz = a[1] + 3 + (Math.random() - 0.5) * 1.5;
          s.intent = "photo"; s.subj = a;
        } else if (bankjes.length && r < 0.47) {
          // 🪑 even op een bankje uitrusten
          const b = bankjes[Math.floor(Math.random() * bankjes.length)];
          s.tx = b[0]; s.tz = b[1];
          s.intent = "sit"; s.subj = b;
        } else if (paden.length && r < 0.9) {
          const p = paden[Math.floor(Math.random() * paden.length)];
          s.tx = p[0] + (Math.random() - 0.5) * 0.7; s.tz = p[1] + (Math.random() - 0.5) * 0.7;
          s.intent = "stroll"; s.subj = null;
        } else {
          const a = Math.random() * Math.PI * 2, rr = 4 + Math.random() * 16;
          s.tx = Math.cos(a) * rr; s.tz = Math.sin(a) * rr; s.intent = "stroll"; s.subj = null;
        }
        s.resting = false;
      }
    } else {
      const dx = s.tx - s.x, dz = s.tz - s.z; const d = Math.hypot(dx, dz);
      if (d < 0.18) {
        if (s.acting) {
          // Bij het kraampje: kopen? Goedkoop = bijna altijd; te duur = afhaken.
          const kind = s.need; const info = kr[kind] || {}; const prijs = info.verkoop ?? 4;
          if (Math.random() < koopKans(prijs, info.fair)) {
            onBuy && onBuy(kind, prijs);
            s.coinT = 0;
            toon({ e: info.emoji || "😋", t: "Lekker!" }, 2.0);
          } else {
            toon({ e: "😖", t: "Te duur!" }, 2.2);
          }
          s.acting = false; s.need = null; s.needT = 7 + Math.random() * 9;
        } else if (s.intent === "pet" && s.subj) {
          // 🐾 dier aaien: draai naar het dier + blije bubbel, even blijven.
          node.rotation.y = Math.atan2(s.subj[0] - s.x, s.subj[1] - s.z);
          toon({ e: ["❤️", "🥰", "🐾"][seed % 3], t: "Aaien!" }, 2.4);
        } else if (s.intent === "photo" && s.subj) {
          // 📸 foto maken: draai naar het onderwerp + foto-bubbel.
          node.rotation.y = Math.atan2(s.subj[0] - s.x, s.subj[1] - s.z);
          toon({ e: "📸", t: "Foto!" }, 2.4);
        } else if (s.intent === "sit" && s.subj) {
          // 🪑 op het bankje uitrusten: ga in de bankje-richting zitten + bubbel.
          node.rotation.y = s.subj[2] || 0;
          toon({ e: ["😌", "🪑", "☕"][seed % 3], t: "Even rusten" }, 3.5);
        }
        const klaarMet = s.intent;
        s.intent = null; s.subj = null;
        s.resting = true;
        s.rest = klaarMet === "pet" ? 2 + Math.random() * 1.5
          : klaarMet === "photo" ? 1.8 + Math.random() * 1.4
          : klaarMet === "sit" ? 4.5 + Math.random() * 3.5
          : 1 + Math.random() * 2.5;
      } else {
        // 🤝 Sociaal onderweg (Mark 9 aug): praatje met een passerende bezoeker
        // of even blijven kijken bij een dier. Gescand met een lage tik (4×/s).
        s.chatScan -= dt;
        if (s.chatScan <= 0) {
          s.chatScan = 0.25;
          if (!s.acting && s.chatCd <= 0 && crowdRef?.current) {
            for (const o of crowdRef.current) {
              if (!o || o === s || o.acting || o.need || o.chatT > 0 || o.chatCd > 0) continue;
              if (Math.hypot(o.x - s.x, o.z - s.z) > 1.15) continue;
              // Praatje! Beiden stoppen, draaien naar elkaar; de ander antwoordt.
              const duur = 2.4 + Math.random() * 1.4;
              s.chatT = duur; s.chatFace = [o.x, o.z]; s.resting = true; s.rest = duur + 0.4;
              o.chatT = duur; o.chatFace = [s.x, s.z]; o.resting = true; o.rest = duur + 0.4;
              s.chatCd = 28 + Math.random() * 24; o.chatCd = 28 + Math.random() * 24;
              toon(KLETS_START[Math.floor(Math.random() * KLETS_START.length)], 2.4);
              o.chatPing = KLETS_ANTWOORD[Math.floor(Math.random() * KLETS_ANTWOORD.length)];
              return;
            }
          }
          if (!s.acting && s.intent === "stroll") {
            s.glanceT -= 0.25;
            if (s.glanceT <= 0) {
              s.glanceT = 7 + Math.random() * 7;
              const dieren = dierenRef?.current || [];
              for (const a of dieren) {
                if (Math.hypot(a[0] - s.x, a[1] - s.z) < 3.2) {
                  // 👀 even stilstaan en naar het dier kijken dat je passeert.
                  s.resting = true; s.rest = 1.5; s.face = [a[0], a[1]]; s.faceT = 1.5;
                  if (Math.random() < 0.4) toon({ e: "😍" }, 1.6);
                  return;
                }
              }
            }
          }
        }
        const speed = (s.acting ? 2.2 : 1.7) * s.speedF;
        const step = Math.min(d, dt * speed);
        let nx = s.x + (dx / d) * step, nz = s.z + (dz / d) * step;
        // Elkaar zachtjes ontwijken: niet dwars door een andere bezoeker
        // heen lopen maar er licht omheen sturen.
        if (crowdRef?.current) {
          for (const o of crowdRef.current) {
            if (!o || o === s) continue;
            const ox = nx - o.x, oz = nz - o.z;
            const od = Math.hypot(ox, oz);
            if (od > 0.001 && od < 0.7) {
              const duw = (0.7 - od) * dt * 2.2;
              nx += (ox / od) * duw; nz += (oz / od) * duw;
            }
          }
        }
        // "Ontsnap-modus": opgesloten in een verblijf → tijdelijk dwars door het
        // hek naar buiten lopen (anders blijft-ie er eeuwig in rondjes lopen).
        const escaping = (s.escape || 0) > 0;
        if (s.escape > 0) s.escape -= dt;
        // Botsing met hekken/gebouwen: glijd langs de muur. Zit de bezoeker al in
        // een vol vakje (bv. hek er net omheen gezet), dan mag-ie eruit lopen.
        const solid = solidRef.current;
        const vast = solid ? solid(s.x, s.z) : false;
        let moved = false;
        if (escaping || !solid || vast || !solid(nx, nz)) { s.x = nx; s.z = nz; moved = true; }
        else {
          if (!solid(nx, s.z)) { s.x = nx; moved = true; }
          if (!solid(s.x, nz)) { s.z = nz; moved = true; }
        }
        // Vloeiend naar de looprichting draaien i.p.v. instant snappen.
        const doelHoek = Math.atan2(dx, dz);
        let draaiDiff = doelHoek - node.rotation.y;
        while (draaiDiff > Math.PI) draaiDiff -= Math.PI * 2;
        while (draaiDiff < -Math.PI) draaiDiff += Math.PI * 2;
        node.rotation.y += draaiDiff * Math.min(1, dt * 7);
        if (!moved) {
          s.stuck = (s.stuck || 0) + dt;
          if (s.stuck > 0.35) {
            s.stuck = 0;
            // Tel hek-botsingen binnen een venster. Een vrije bezoeker raakt zelden
            // een hek; een opgesloten bezoeker botst telkens tegen de omheining.
            s.penHits = (s.penHits || 0) + 1; s.penTimer = 7;
            if (s.penHits >= 3) {
              // Waarschijnlijk opgesloten in een verblijf → loop in een rechte lijn
              // naar buiten (tijdelijk dwars door het hek heen).
              s.penHits = 0; s.escape = 2.6;
              s.acting = false; s.need = null; s.needT = 5 + Math.random() * 6;
              const ang = (s.x || s.z) ? Math.atan2(s.z, s.x) : Math.random() * Math.PI * 2;
              s.tx = Math.cos(ang) * 32; s.tz = Math.sin(ang) * 32; s.resting = false;
            } else {
              // Gewone klem tegen een hek → nieuw wandeldoel kiezen.
              s.acting = false; s.need = null; s.needT = 4 + Math.random() * 6;
              const a = Math.random() * Math.PI * 2, r = 4 + Math.random() * 16;
              s.tx = Math.cos(a) * r; s.tz = Math.sin(a) * r;
            }
          }
        } else s.stuck = 0;
        // Venster voor hek-botsingen laten verlopen (los van of we net bewogen).
        if (s.penTimer > 0) { s.penTimer -= dt; if (s.penTimer <= 0) s.penHits = 0; }
      }
    }
    moving.current = !s.resting;
    node.position.set(s.x, heightRef?.current ? heightRef.current(s.x, s.z) : 0, s.z);

    // Muntje-pop bij een aankoop (zweeft omhoog en vervaagt).
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
    <group
      ref={g}
      onPointerDown={onTap ? (e) => e.stopPropagation() : undefined}
      onClick={onTap ? (e) => { if (e.delta > 8) return; e.stopPropagation(); onTap(); } : undefined}
      onPointerOver={onTap ? (e) => { e.stopPropagation(); document.body.style.cursor = "pointer"; } : undefined}
      onPointerOut={onTap ? () => { document.body.style.cursor = "default"; } : undefined}
    >
      {bubble && (
        <Html position={[0, 2.0, 0]} center distanceFactor={9} zIndexRange={[5, 0]} style={{ pointerEvents: "none" }}>
          <div style={{ background: "#fff", borderRadius: 14, padding: "3px 10px", lineHeight: 1, boxShadow: "0 2px 7px rgba(0,0,0,.28)", userSelect: "none", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 20 }}>{bubble.e}</span>
            {bubble.t && <span style={{ fontSize: 12, fontWeight: 800, color: "#2a3340" }}>{bubble.t}</span>}
          </div>
        </Html>
      )}
      <CharacterModel key={charUrl} url={charUrl} movingRef={moving} targetHeight={1.55} />
      {/* Muntje (verborgen tot een bezoeker iets koopt). */}
      <mesh ref={coin} position={[0, 1.75, 0]} rotation={[Math.PI / 2, 0, 0]} visible={false}>
        <cylinderGeometry args={[0.18, 0.18, 0.045, 18]} />
        <meshStandardMaterial color="#ffd23a" emissive="#8a6a00" emissiveIntensity={0.25} transparent metalness={0.3} roughness={0.5} />
      </mesh>
    </group>
  );
}

export function Visitors({ count = 4, standsRef, kraamRef, onBuy, heightRef, playerRef, factsRef, onTap, isSolid, padsRef, dierenRef, pretRef, bankjesRef }) {
  // Gedeelde menigte-lijst: elk poppetje registreert z'n state-object zodat
  // bezoekers elkaar kunnen ontwijken en met elkaar kunnen kletsen.
  const crowdRef = useRef([]);
  return (
    <group>
      {Array.from({ length: count }).map((_, i) => <Visitor key={i} seed={i * 13 + 5} idx={i} crowdRef={crowdRef} standsRef={standsRef} kraamRef={kraamRef} onBuy={onBuy} heightRef={heightRef} playerRef={playerRef} factsRef={factsRef} onTap={onTap} isSolid={isSolid} padsRef={padsRef} dierenRef={dierenRef} pretRef={pretRef} bankjesRef={bankjesRef} />)}
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

// Een vrij rondlopend dier (geen vast hek meer). Het dier scharrelt rond binnen
// een straal; jonkies lopen mee. Wil je het insluiten? Bouw zelf een kooi met
// losse hekpanelen eromheen (T/L/vierkant — wat je wilt).
const DIER_STRAAL = 3.0;
// Gedachten van dieren — honger/dorst/meer plek (bij verwaarlozing) of blij.
const DIER_HONGER = [{ e: "🌾", t: "Ik heb honger" }, { e: "💧", t: "Ik heb dorst" }, { e: "🏃", t: "Meer plek graag" }];
const DIER_BLIJ = [{ e: "😊", t: "Ik ben blij!" }, { e: "❤️", t: "Mooi park!" }, { e: "🎶", t: "Heerlijk hier" }];

// 🔊 Tik-op-dier-reactie (Mark 22 aug, park-megabuild #7.1 — Sem 8 jr: "alles
// moet iets doen als je tikt, zoals Toca Boca"). Per soort een geluid-tekst +
// toonhoogte; het geluidje is een korte gesynthetiseerde blip (Web Audio, géén
// asset-bestanden = werkt offline en op zwakke telefoons). Onbekend dier → default.
const DIER_GELUID = {
  cow: { t: "Boe!", hz: 160 }, sheep: { t: "Bèèh!", hz: 320 }, pig: { t: "Knor!", hz: 200 },
  alpaca: { t: "Mèh!", hz: 300 }, donkey: { t: "I-aah!", hz: 180 },
  husky: { t: "Woef!", hz: 260 }, shibaInu: { t: "Waf!", hz: 300 }, pug: { t: "Kef!", hz: 340 }, wolf: { t: "Auwww!", hz: 220 },
  deer: { t: "Snuf!", hz: 380 }, stag: { t: "Broemm!", hz: 190 }, horse: { t: "Hinnik!", hz: 300 }, zebra: { t: "Hie-ha!", hz: 280 },
  velociraptor: { t: "Krièèk!", hz: 520 }, trex: { t: "GROAAR!", hz: 90 }, triceratops: { t: "Bróm!", hz: 120 },
  stegosaurus: { t: "Roaar!", hz: 130 }, parasaurolophus: { t: "Toettt!", hz: 240 }, apatosaurus: { t: "Wooomm!", hz: 80 },
};
const DIER_GELUID_DEFAULT = { t: "Hoi!", hz: 330 };

let _audioCtx = null;
function speelDierGeluid(hz = 330) {
  try {
    if (typeof window === "undefined") return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    _audioCtx = _audioCtx || new AC();
    const ctx = _audioCtx;
    if (ctx.state === "suspended") ctx.resume();
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(hz, t);
    osc.frequency.exponentialRampToValueAtTime(Math.max(60, hz * 1.5), t + 0.12); // vrolijk omhoog-buigje
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.18, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(t); osc.stop(t + 0.3);
  } catch { /* geluid mag nooit de render breken */ }
}

export function LosDier({ position = [0, 0, 0], assetId = "fox", babies = 0, mood = "blij", verstopt = false }) {
  const [bubble, setBubble] = useState(null);
  const [tik, setTik] = useState(null); // 🔊 tik-reactie (soort-geluid)
  const st = useRef({ next: 5 + Math.random() * 12, show: 0 });
  const hopRef = useRef(null);   // groep die een sprongetje maakt bij een tik
  const hop = useRef(0);         // resterende hop-tijd (s)
  const tikTimer = useRef(null);
  useFrame((_, dt) => {
    // 🦘 Sprongetje bij een tik (juice) — werkt ook als het dier verstopt is niet,
    // maar de hop draait alleen in de normale render (hopRef bestaat dan).
    if (hop.current > 0 && hopRef.current) {
      hop.current = Math.max(0, hop.current - dt);
      const p = 1 - hop.current / 0.5;              // 0→1 over 0,5s
      hopRef.current.position.y = Math.sin(p * Math.PI) * 0.6; // op-en-neer
    } else if (hopRef.current && hopRef.current.position.y !== 0) {
      hopRef.current.position.y = 0;
    }
    if (verstopt) return; // verstopt dier praat niet
    const s = st.current;
    if (s.show > 0) { s.show -= dt; if (s.show <= 0) setBubble(null); return; }
    s.next -= dt;
    if (s.next <= 0) {
      const pool = mood === "honger" ? DIER_HONGER : DIER_BLIJ;
      setBubble(pool[Math.floor(Math.random() * pool.length)]);
      s.show = 3; s.next = 12 + Math.random() * 16;
    }
  });
  useEffect(() => () => clearTimeout(tikTimer.current), []);
  // Tik op het dier → geluidje + sprongetje + reactie-bubbel (park-megabuild #7.1).
  // GEEN stopPropagation: de tik mag óók het selectie-paneel (voeren/aaien) openen
  // dat de buiten-groep in ZooScene toont — juice + functie tegelijk.
  const opTik = (e) => {
    if (e.delta > 8) return; // sleep = camera draaien, geen tik
    const g = DIER_GELUID[assetId] || DIER_GELUID_DEFAULT;
    speelDierGeluid(g.hz);
    hop.current = 0.5;
    setTik(g.t);
    setBubble(null);
    clearTimeout(tikTimer.current);
    tikTimer.current = setTimeout(() => setTik(null), 1200);
  };
  // 🙈 Verstopt (te lang geen hooi, park-megabuild #1): het dier kruipt achter
  // een struikje weg en levert 0 op tot je het voert. Geen weglopen meer =
  // terugkomen wordt een fijn hereniging-moment i.p.v. straf.
  if (verstopt) {
    return (
      <group position={position}>
        <Html position={[0, 1.7, 0]} center distanceFactor={9} zIndexRange={[6, 0]} style={{ pointerEvents: "none" }}>
          <div title="Geef dit dier hooi 🌾 en het komt terug" style={{ background: "#fff8e6", border: "2px solid #e0a83b", borderRadius: 14, padding: "3px 9px", lineHeight: 1, boxShadow: "0 2px 7px rgba(0,0,0,.28)", userSelect: "none", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 18 }}>🙈</span>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#7a5310" }}>verstopt — geef 🌾</span>
          </div>
        </Html>
        {/* struikje waarachter het dier zich verschuilt */}
        <Bush position={[0, 0, 0.15]} rotation={0} />
        <group scale={0.7} position={[0.1, 0, -0.3]}>
          <ZooModel assetId={assetId} position={[0, 0, 0]} rotation={2.3} />
        </group>
      </group>
    );
  }
  return (
    <group position={position}>
      {bubble && (
        <Html position={[0, 1.9, 0]} center distanceFactor={9} zIndexRange={[5, 0]} style={{ pointerEvents: "none" }}>
          <div style={{ background: "#fff", borderRadius: 14, padding: "3px 10px", lineHeight: 1, boxShadow: "0 2px 7px rgba(0,0,0,.28)", userSelect: "none", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 18 }}>{bubble.e}</span>
            <span style={{ fontSize: 11.5, fontWeight: 800, color: "#2a3340" }}>{bubble.t}</span>
          </div>
        </Html>
      )}
      {/* 🔊 Tik-reactie: het soort-geluid als tekst-bubbel (Toca-Boca-gevoel). */}
      {tik && (
        <Html position={[0, 2.05, 0]} center distanceFactor={9} zIndexRange={[6, 0]} style={{ pointerEvents: "none" }}>
          <div style={{ background: "#fff", borderRadius: 14, padding: "3px 12px", lineHeight: 1, boxShadow: "0 2px 8px rgba(0,0,0,.3)", userSelect: "none", whiteSpace: "nowrap", font: "900 14px system-ui", color: "#2a3340" }}>{tik}</div>
        </Html>
      )}
      {/* Persistente honger-waarschuwing: het dier kreeg ≥2 dagen geen hooi en
          verstopt zich straks → rood "!" zodat het kind het op tijd voert. */}
      {mood === "honger" && (
        <Html position={[0, 2.35, 0]} center distanceFactor={9} zIndexRange={[6, 0]} style={{ pointerEvents: "none" }}>
          <div title="Geef dit dier hooi 🌾" style={{ background: "#e23b3b", color: "#fff", borderRadius: 999, width: 24, height: 24, display: "grid", placeItems: "center", font: "900 16px system-ui", boxShadow: "0 2px 6px rgba(0,0,0,.35)", border: "2px solid #fff" }}>!</div>
        </Html>
      )}
      <group ref={hopRef} onClick={opTik} onPointerDown={(e) => e.stopPropagation()}>
        <ZooModel assetId={assetId} position={[0, 0, 0]} rotation={0} wander={DIER_STRAAL} />
      </group>
      {Array.from({ length: babies }).map((_, i) => {
        const ang = (i / Math.max(1, babies)) * Math.PI * 2 + 0.6;
        const r = 1.0;
        return (
          <group key={`baby${i}`} position={[Math.cos(ang) * r, 0, Math.sin(ang) * r]} scale={0.55}>
            <ZooModel assetId={assetId} position={[0, 0, 0]} rotation={0} wander={DIER_STRAAL * 0.8} />
          </group>
        );
      })}
    </group>
  );
}

// Eén los hekpaneel (procedureel) — een houten rail-stuk dat precies één
// rastervakje (2 m) vult. Draai het 90° voor een verticale loop. Zet er meerdere
// naast/achter elkaar om een kooi in elke vorm te bouwen (T, L, vierkant).
export function FencePanel({ position = [0, 0, 0], rotation = 0 }) {
  const hout = "#8a5a2b";
  const L = 2.0, n = 4;
  const palen = [];
  for (let i = 0; i <= n; i++) palen.push(-L / 2 + (L * i) / n);
  return (
    <group position={[position[0], position[1], position[2]]} rotation={[0, rotation, 0]}>
      {palen.map((x, i) => (
        <mesh key={i} castShadow position={[x, 0.35, 0]}>
          <boxGeometry args={[0.1, 0.7, 0.1]} />
          <meshStandardMaterial color={hout} flatShading roughness={1} />
        </mesh>
      ))}
      <mesh castShadow position={[0, 0.55, 0]}><boxGeometry args={[L, 0.08, 0.08]} /><meshStandardMaterial color={hout} roughness={1} /></mesh>
      <mesh castShadow position={[0, 0.3, 0]}><boxGeometry args={[L, 0.08, 0.08]} /><meshStandardMaterial color={hout} roughness={1} /></mesh>
    </group>
  );
}

// Een hek-poort (procedureel) — twee stevige palen met een boog erboven en twee
// deurtjes die op een kier staan. Zelfde breedte als een hekpaneel (1 vakje), zo
// maak je een nette ingang in je kooi.
export function FenceGate({ position = [0, 0, 0], rotation = 0 }) {
  const hout = "#8a5a2b", deur = "#b9824a";
  const L = 2.0;
  return (
    <group position={[position[0], position[1], position[2]]} rotation={[0, rotation, 0]}>
      {/* stevige poortpalen aan de uiteinden */}
      <mesh castShadow position={[-L / 2, 0.55, 0]}><boxGeometry args={[0.16, 1.1, 0.16]} /><meshStandardMaterial color={hout} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[L / 2, 0.55, 0]}><boxGeometry args={[0.16, 1.1, 0.16]} /><meshStandardMaterial color={hout} flatShading roughness={1} /></mesh>
      {/* boog/bovenbalk */}
      <mesh castShadow position={[0, 1.12, 0]}><boxGeometry args={[L + 0.12, 0.14, 0.14]} /><meshStandardMaterial color={hout} flatShading roughness={1} /></mesh>
      {/* twee deurtjes op een kier */}
      <group position={[-L / 2 + 0.08, 0.4, 0.04]} rotation={[0, 0.45, 0]}>
        <mesh castShadow position={[L / 4 - 0.05, 0, 0]}><boxGeometry args={[L / 2 - 0.16, 0.72, 0.06]} /><meshStandardMaterial color={deur} flatShading roughness={1} /></mesh>
      </group>
      <group position={[L / 2 - 0.08, 0.4, 0.04]} rotation={[0, -0.45, 0]}>
        <mesh castShadow position={[-L / 4 + 0.05, 0, 0]}><boxGeometry args={[L / 2 - 0.16, 0.72, 0.06]} /><meshStandardMaterial color={deur} flatShading roughness={1} /></mesh>
      </group>
    </group>
  );
}

// Hoek-hek (procedureel) — een hoekstuk dat netjes aansluit op twee rechte
// panelen. Een hek loopt door het midden van een vakje; op een hoek verandert de
// richting, en dan past er maar één recht paneel → een gat. Dit stuk heeft twee
// HALVE rails (naar +X én +Z) die elk tot precies de vakje-rand reiken, met een
// stevige hoekpaal in het midden. Draai 'm 90° om elke hoek (4 standen) te maken,
// zodat de laatste meters van je verblijf op elkaar "klikken".
export function FenceCorner({ position = [0, 0, 0], rotation = 0 }) {
  const hout = "#8a5a2b";
  const half = 1.0;            // van het midden tot de vakje-rand
  const rails = [0.55, 0.3];   // zelfde hoogtes als een recht paneel
  return (
    <group position={[position[0], position[1], position[2]]} rotation={[0, rotation, 0]}>
      {/* stevige hoekpaal in het midden */}
      <mesh castShadow position={[0, 0.37, 0]}><boxGeometry args={[0.13, 0.74, 0.13]} /><meshStandardMaterial color={hout} flatShading roughness={1} /></mesh>
      {/* arm naar +X */}
      {rails.map((h, i) => (
        <mesh key={`x${i}`} castShadow position={[half / 2, h, 0]}><boxGeometry args={[half, 0.08, 0.08]} /><meshStandardMaterial color={hout} roughness={1} /></mesh>
      ))}
      <mesh castShadow position={[half, 0.35, 0]}><boxGeometry args={[0.1, 0.7, 0.1]} /><meshStandardMaterial color={hout} flatShading roughness={1} /></mesh>
      {/* arm naar +Z */}
      {rails.map((h, i) => (
        <mesh key={`z${i}`} castShadow position={[0, h, half / 2]}><boxGeometry args={[0.08, 0.08, half]} /><meshStandardMaterial color={hout} roughness={1} /></mesh>
      ))}
      <mesh castShadow position={[0, 0.35, half]}><boxGeometry args={[0.1, 0.7, 0.1]} /><meshStandardMaterial color={hout} flatShading roughness={1} /></mesh>
    </group>
  );
}

// Rotsen/keien (procedureel) — low-poly grijze stenen die bij de rotsige bergen
// passen. `variant` "single" = één grotere kei, "group" = een clustertje keien.
export function Rock({ position = [0, 0, 0], rotation = 0, variant = "single" }) {
  // Blok-rotsen: grijze kubussen in de maat-taal van de bouwkubussen.
  const grijs = "#8f8c87", grijs2 = "#7b7874", grijs3 = "#9b9893";
  if (variant === "group") {
    return (
      <group position={position} rotation={[0, rotation, 0]}>
        <mesh castShadow receiveShadow position={[-0.4, 0.3, 0.1]}><boxGeometry args={[0.7, 0.6, 0.7]} /><meshStandardMaterial color={grijs} roughness={1} /></mesh>
        <mesh castShadow receiveShadow position={[0.4, 0.22, -0.2]}><boxGeometry args={[0.5, 0.45, 0.5]} /><meshStandardMaterial color={grijs2} roughness={1} /></mesh>
        <mesh castShadow receiveShadow position={[0.15, 0.16, 0.45]}><boxGeometry args={[0.35, 0.32, 0.35]} /><meshStandardMaterial color={grijs3} roughness={1} /></mesh>
      </group>
    );
  }
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}><boxGeometry args={[1.3, 1, 1.3]} /><meshStandardMaterial color={grijs} roughness={1} /></mesh>
      <mesh castShadow receiveShadow position={[0.75, 0.25, 0.3]}><boxGeometry args={[0.5, 0.5, 0.5]} /><meshStandardMaterial color={grijs2} roughness={1} /></mesh>
    </group>
  );
}

// Bankje (procedureel) — een houten parkbankje waar bezoekers kunnen zitten.
export function Bench({ position = [0, 0, 0], rotation = 0 }) {
  const hout = "#9a6a36", poot = "#5a3b1e";
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow position={[0, 0.45, 0]}><boxGeometry args={[1.6, 0.1, 0.5]} /><meshStandardMaterial color={hout} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0, 0.74, -0.21]}><boxGeometry args={[1.6, 0.42, 0.08]} /><meshStandardMaterial color={hout} flatShading roughness={1} /></mesh>
      {[[-0.7, 0.18], [0.7, 0.18], [-0.7, -0.18], [0.7, -0.18]].map(([x, z], i) => (
        <mesh key={i} castShadow position={[x, 0.2, z]}><boxGeometry args={[0.1, 0.4, 0.1]} /><meshStandardMaterial color={poot} flatShading roughness={1} /></mesh>
      ))}
    </group>
  );
}

// Prullenbak (procedureel) — een vrolijke groene afvalbak met deksel.
export function TrashCan({ position = [0, 0, 0], rotation = 0 }) {
  const groen = "#3a7d3a", grijs = "#6b6f73";
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow position={[0, 0.35, 0]}><cylinderGeometry args={[0.28, 0.24, 0.7, 14]} /><meshStandardMaterial color={groen} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0, 0.73, 0]}><cylinderGeometry args={[0.31, 0.31, 0.08, 14]} /><meshStandardMaterial color={grijs} flatShading roughness={1} /></mesh>
    </group>
  );
}

// Donatiebox (procedureel) — een spaarpot op een paaltje met een doorzichtige
// bovenkant en een muntsymbool. Levert passief muntjes op (zie zooEconomy).
export function DonationBox({ position = [0, 0, 0], rotation = 0 }) {
  const hout = "#8a5a2b", paal = "#6b4a2b", glas = "#bfe6ff", geel = "#f2c94c";
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow position={[0, 0.4, 0]}><boxGeometry args={[0.12, 0.8, 0.12]} /><meshStandardMaterial color={paal} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0, 0.95, 0]}><boxGeometry args={[0.5, 0.5, 0.4]} /><meshStandardMaterial color={hout} flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.24, 0]}><boxGeometry args={[0.42, 0.14, 0.32]} /><meshStandardMaterial color={glas} transparent opacity={0.45} roughness={0.1} /></mesh>
      <mesh position={[0, 1.18, 0.205]}><boxGeometry args={[0.22, 0.04, 0.03]} /><meshStandardMaterial color="#3a2a18" /></mesh>
      <mesh position={[0, 0.95, 0.205]}><circleGeometry args={[0.13, 18]} /><meshStandardMaterial color={geel} flatShading roughness={0.6} metalness={0.2} /></mesh>
    </group>
  );
}

// Struik (procedureel) — een clustertje low-poly groene bollen.
export function Bush({ position = [0, 0, 0], rotation = 0 }) {
  // Blok-struik: bladerkubus + half kubusje (maat-taal van de bouwkubussen).
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow receiveShadow position={[-0.15, 0.45, 0]}><boxGeometry args={[0.95, 0.9, 0.95]} /><meshStandardMaterial color="#4e8a3a" roughness={1} /></mesh>
      <mesh castShadow position={[0.45, 0.3, 0.2]}><boxGeometry args={[0.55, 0.6, 0.55]} /><meshStandardMaterial color="#6fb053" roughness={1} /></mesh>
    </group>
  );
}

// Varen/graspol (procedureel) — een paar smalle bladeren die naar buiten waaieren.
export function Fern({ position = [0, 0, 0], rotation = 0 }) {
  // Blok-plantje: twee groene mini-kubussen.
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow position={[0, 0.3, 0]}><boxGeometry args={[0.55, 0.6, 0.55]} /><meshStandardMaterial color="#5a9c3f" roughness={1} /></mesh>
      <mesh castShadow position={[0.05, 0.75, 0.05]}><boxGeometry args={[0.32, 0.35, 0.32]} /><meshStandardMaterial color="#6fb24a" roughness={1} /></mesh>
    </group>
  );
}

// Boomstronk (procedureel) — een afgezaagde stam met lichter hout op de snede.
export function Stump({ position = [0, 0, 0], rotation = 0 }) {
  // Blok-stronk: bruin kubusje met licht houten bovenvlak.
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow receiveShadow position={[0, 0.3, 0]}><boxGeometry args={[0.8, 0.6, 0.8]} /><meshStandardMaterial color="#6b4a2b" roughness={1} /></mesh>
      <mesh position={[0, 0.605, 0]}><boxGeometry args={[0.72, 0.05, 0.72]} /><meshStandardMaterial color="#b89160" roughness={1} /></mesh>
    </group>
  );
}

// Boom (procedureel, Mark 2026-06-29: "maak de bomen mooier"). Volle, ronde
// low-poly kroon met diepte — donkere blobs onderaan, lichtere bovenop — in
// dezelfde flatShading-stijl als Bush/Fern. Varianten: round (standaard),
// oak (groter + warmer groen), palm. Mooier én lichter dan een glTF-model.
// Blok-stijl (Mark 2 jul, "Minecraft-idee heeft prio"): bomen in dezelfde
// maat-taal als de 1 m-bouwkubussen — stam van blok-kolommen, kroon van
// bladerkubussen. Varianten: round, oak (hoger/warmer), palm (blader-kruis).
export function Tree({ position = [0, 0, 0], rotation = 0, variant = "round" }) {
  const oak = variant === "oak";
  const palm = variant === "palm";
  const blad1 = palm ? "#418f34" : oak ? "#4d8736" : "#4e8a3a";
  const blad2 = palm ? "#56a544" : oak ? "#74b552" : "#6fb053";
  const stamKleur = palm ? "#9b7a45" : "#6b4a2b";
  const stamH = palm ? 4 : oak ? 3 : 2;
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {[...Array(stamH)].map((_, i) => (
        <mesh key={i} castShadow receiveShadow position={[0, i + 0.5, 0]}>
          <boxGeometry args={[0.9, 1, 0.9]} />
          <meshStandardMaterial color={stamKleur} roughness={1} />
        </mesh>
      ))}
      {palm ? (
        <>
          {[[1.4, 0], [-1.4, 0], [0, 1.4], [0, -1.4]].map(([bx, bz], i) => (
            <mesh key={i} castShadow position={[bx, stamH + 0.15, bz]}>
              <boxGeometry args={[bx ? 1.9 : 0.95, 0.35, bz ? 1.9 : 0.95]} />
              <meshStandardMaterial color={i % 2 ? blad2 : blad1} roughness={1} />
            </mesh>
          ))}
          <mesh castShadow position={[0, stamH + 0.3, 0]}><boxGeometry args={[1, 0.7, 1]} /><meshStandardMaterial color={blad1} roughness={1} /></mesh>
        </>
      ) : (
        <>
          <mesh castShadow position={[0, stamH + 1, 0]}>
            <boxGeometry args={[2.9, 2, 2.9]} />
            <meshStandardMaterial color={blad1} roughness={1} />
          </mesh>
          <mesh castShadow position={[0, stamH + 2.5, 0]}>
            <boxGeometry args={[1.9, 1, 1.9]} />
            <meshStandardMaterial color={blad2} roughness={1} />
          </mesh>
        </>
      )}
    </group>
  );
}

// Palmboom (procedureel) — licht gebogen stam in segmenten + een waaier van
// bladeren bovenop, met kokosnoten.
function PalmTree({ position = [0, 0, 0], rotation = 0 }) {
  const stam = "#9b7a45", stam2 = "#876837", blad = "#56a544", blad2 = "#418f34";
  const segs = [[0, 0.4, 0, 0], [0.05, 1.12, 0.02, 0.06], [0.15, 1.82, 0.05, 0.12], [0.3, 2.46, 0.08, 0.18]];
  const fronds = Array.from({ length: 7 }, (_, i) => (i / 7) * Math.PI * 2);
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {segs.map(([x, y, z, tilt], i) => (
        <mesh key={i} castShadow receiveShadow position={[x, y, z]} rotation={[0, 0, tilt]}>
          <cylinderGeometry args={[0.13 - i * 0.015, 0.16 - i * 0.015, 0.78, 8]} />
          <meshStandardMaterial color={i % 2 ? stam : stam2} flatShading roughness={1} />
        </mesh>
      ))}
      <group position={[0.34, 2.78, 0.1]}>
        {fronds.map((a, i) => (
          <mesh key={i} castShadow rotation={[1.15, a, 0]} position={[Math.cos(a) * 0.18, -0.05, Math.sin(a) * 0.18]}>
            <coneGeometry args={[0.17, 1.2, 4]} />
            <meshStandardMaterial color={i % 2 ? blad : blad2} flatShading roughness={1} />
          </mesh>
        ))}
        <mesh castShadow position={[0.05, -0.04, 0.05]}><icosahedronGeometry args={[0.13, 0]} /><meshStandardMaterial color="#6b4a2b" flatShading roughness={1} /></mesh>
        <mesh castShadow position={[-0.1, -0.06, -0.02]}><icosahedronGeometry args={[0.12, 0]} /><meshStandardMaterial color="#5a3f24" flatShading roughness={1} /></mesh>
      </group>
    </group>
  );
}

// Lucht-sfeer: een paar dikke low-poly wolken die langzaam over het park drijven
// + wat vogeltjes die rustig rondcirkelen. Puur decor, vult de lege blauwe lucht
// en geeft diepte. Geen schaduw (te duur + zou raar staan), licht emissief zodat
// ze ook in de schemering nog zacht oplichten.
function Wolk({ data }) {
  const ref = useRef();
  useFrame((_, dt) => {
    const m = ref.current; if (!m) return;
    m.position.x += dt * data.speed;
    if (m.position.x > 52) m.position.x = -52;        // wrap-around → eindeloze stoet
  });
  return (
    <group ref={ref} position={data.pos} scale={data.scale}>
      {data.blobs.map(([x, y, z, r], i) => (
        <mesh key={i} position={[x, y, z]}>
          <icosahedronGeometry args={[r, 1]} />
          <meshStandardMaterial color="#ffffff" emissive="#dfeefc" emissiveIntensity={0.35} flatShading roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

function Vogel({ radius, height, speed, phase, color }) {
  const ref = useRef();
  const vleugels = useRef([]);
  useFrame((s) => {
    const t = s.clock.elapsedTime * speed + phase;
    const g = ref.current; if (!g) return;
    g.position.set(Math.cos(t) * radius, height + Math.sin(t * 1.6) * 0.8, Math.sin(t) * radius);
    g.rotation.y = -t + Math.PI / 2;                  // neus in de vliegrichting
    const flap = Math.sin(s.clock.elapsedTime * 9 + phase) * 0.5;
    if (vleugels.current[0]) vleugels.current[0].rotation.z = 0.3 + flap;
    if (vleugels.current[1]) vleugels.current[1].rotation.z = -0.3 - flap;
  });
  return (
    <group ref={ref}>
      <mesh ref={(el) => (vleugels.current[0] = el)} position={[0.18, 0, 0]}>
        <boxGeometry args={[0.5, 0.04, 0.16]} />
        <meshStandardMaterial color={color} flatShading roughness={1} />
      </mesh>
      <mesh ref={(el) => (vleugels.current[1] = el)} position={[-0.18, 0, 0]}>
        <boxGeometry args={[0.5, 0.04, 0.16]} />
        <meshStandardMaterial color={color} flatShading roughness={1} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.12, 0.1, 0.34]} />
        <meshStandardMaterial color={color} flatShading roughness={1} />
      </mesh>
    </group>
  );
}

export function SkyClouds() {
  // Bouw één keer een set wolk-clusters: elk een handvol overlappende blobs.
  const wolken = useMemo(() => {
    const maakBlobs = (n) => Array.from({ length: n }, () => [
      (Math.random() - 0.5) * 3.4, (Math.random() - 0.5) * 0.7, (Math.random() - 0.5) * 1.6,
      0.8 + Math.random() * 0.7,
    ]);
    return Array.from({ length: 6 }, (_, i) => ({
      pos: [-50 + (i * 104) / 6 + Math.random() * 8, 21 + Math.random() * 9, -34 + Math.random() * 64],
      scale: 1.1 + Math.random() * 1.1,
      speed: 0.35 + Math.random() * 0.4,
      blobs: maakBlobs(4 + Math.floor(Math.random() * 3)),
    }));
  }, []);
  const vogels = useMemo(() => (
    [
      { radius: 20, height: 13, speed: 0.18, phase: 0, color: "#3a3f48" },
      { radius: 24, height: 15, speed: 0.15, phase: 2.1, color: "#4a4f58" },
      { radius: 17, height: 12, speed: 0.22, phase: 4.0, color: "#33373f" },
    ]
  ), []);
  return (
    <group>
      {wolken.map((w, i) => <Wolk key={i} data={w} />)}
      {vogels.map((v, i) => <Vogel key={i} {...v} />)}
    </group>
  );
}

// 🛩️ Zeppelins hoog boven het park (Mark 26 aug: "gewoon omdat het kan" — en
// straks verkoopbare reclame-ruimte: het doek op de flanken kan later per
// zeppelin een partner-naam dragen, bv. gemeente Den Haag). Nu strak wit en
// echt-lijkend: langgerekte romp met neusdop, kruis-staartvinnen, gondel met
// raamstrip en twee motorgondels met draaiende propellers. Elk vaart z'n eigen
// grote rondje op eigen hoogte/snelheid/richting. `tekst` per zeppelin is de
// haak voor later (partner-doek); nu null = leeg wit doek.
const ZEPPELIN_VLOOT = [
  // (De Leerkwartier-zeppelin met logo-doek is de bestuurbare InstapZeppelin in
  //  ZooScene geworden — dit zijn de twee sfeer-zeppelins.)
  // 🍞 Eerste partner-doek (Mark 27 aug, na logo-toestemming van Amber diezelfde
  // dag): "Bedankt!" + het logo van Voedselbank Rotterdam op zeppelin 1.
  { r: 74, h: 44, snelheid: -0.011, fase: 2.6, tekst: "Bedankt!", logo: "/drukwerk/logo-voedselbank-rotterdam.svg" },
  { r: 92, h: 50, snelheid: 0.009, fase: 4.9, tekst: null },
];
// Doek-textuur: wit spandoek met (optioneel) logo links + naam ernaast,
// getekend op een canvas. Zonder tekst/logo → geen textuur (kaal wit doek).
export function useZeppelinDoek(tekst, logo) {
  const [tex, setTex] = useState(null);
  useEffect(() => {
    if (!tekst && !logo) { setTex(null); return undefined; }
    let dood = false;
    const canvas = document.createElement("canvas");
    canvas.width = 1100; canvas.height = 350;
    const ctx = canvas.getContext("2d");
    const teken = (img) => {
      if (dood) return;
      ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, 1100, 350);
      let x = 70;
      if (img) {
        // logo passend schalen — een breed partner-logo (zoals Voedselbank
        // Rotterdam, 182×42) niet in een vierkant persen
        const sc = Math.min(460 / (img.width || 280), 280 / (img.height || 280));
        const w = (img.width || 280) * sc, h = (img.height || 280) * sc;
        ctx.drawImage(img, 40, 175 - h / 2, w, h);
        x = 40 + w + 50;
      }
      if (tekst) { ctx.fillStyle = "#14283c"; ctx.font = "800 118px system-ui, sans-serif"; ctx.textBaseline = "middle"; ctx.fillText(tekst, x, 182); }
      const t = new CanvasTexture(canvas);
      t.colorSpace = SRGBColorSpace;
      t.anisotropy = 8;
      setTex(t);
    };
    if (logo) { const img = new Image(); img.onload = () => teken(img); img.onerror = () => teken(null); img.src = logo; } else { teken(null); }
    return () => { dood = true; };
  }, [tekst, logo]);
  return tex;
}
// De romp zelf (herbruikbaar): ook de bestuurbare InstapZeppelin in ZooScene
// gebruikt deze — één bron voor het uiterlijk.
export function ZeppelinRomp({ doekTex = null }) {
  const schroef1 = useRef(), schroef2 = useRef();
  useFrame(() => {
    if (schroef1.current) schroef1.current.rotation.x += 0.55;
    if (schroef2.current) schroef2.current.rotation.x += 0.55;
  });
  const wit = "#f5f7f9";
  return (
    <group>
      {/* romp: langgerekte ballon */}
      <mesh scale={[6.8, 1.8, 1.8]}><sphereGeometry args={[1, 22, 16]} /><meshStandardMaterial color={wit} roughness={0.35} /></mesh>
      {/* neusdop */}
      <mesh position={[6.45, 0, 0]} scale={[0.5, 0.6, 0.6]}><sphereGeometry args={[1, 12, 10]} /><meshStandardMaterial color="#dfe3e8" roughness={0.4} /></mesh>
      {/* kruis-staartvinnen (verticaal + horizontaal) */}
      <mesh position={[-5.5, 0.35, 0]}><boxGeometry args={[1.9, 2.4, 0.09]} /><meshStandardMaterial color={wit} roughness={0.45} /></mesh>
      <mesh position={[-5.5, 0, 0]}><boxGeometry args={[1.9, 0.09, 2.6]} /><meshStandardMaterial color={wit} roughness={0.45} /></mesh>
      {/* gondel met raamstrip */}
      <mesh position={[1.2, -1.95, 0]}><boxGeometry args={[2.2, 0.6, 0.8]} /><meshStandardMaterial color="#dfe3e8" roughness={0.4} /></mesh>
      <mesh position={[1.2, -1.88, 0]}><boxGeometry args={[1.9, 0.2, 0.82]} /><meshStandardMaterial color="#2e3742" roughness={0.3} /></mesh>
      {/* motorgondels + draaiende propellers */}
      {[[schroef1, 1.45], [schroef2, -1.45]].map(([ref, z], i) => (
        <group key={i} position={[-1.2, -1.45, z]}>
          <mesh><boxGeometry args={[0.85, 0.36, 0.36]} /><meshStandardMaterial color="#cfd4da" roughness={0.45} /></mesh>
          <group ref={ref} position={[-0.55, 0, 0]}>
            <mesh><boxGeometry args={[0.05, 1.05, 0.1]} /><meshStandardMaterial color="#8a939d" roughness={0.4} /></mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}><boxGeometry args={[0.05, 1.05, 0.1]} /><meshStandardMaterial color="#8a939d" roughness={0.4} /></mesh>
          </group>
        </group>
      ))}
      {/* reclame-doek op beide flanken — leeg wit óf met logo/naam (doekTex) */}
      <mesh position={[0.8, 0.1, 1.85]}><planeGeometry args={[4.4, 1.4]} />{doekTex ? <meshStandardMaterial map={doekTex} roughness={0.5} /> : <meshStandardMaterial color="#ffffff" roughness={0.5} />}</mesh>
      <mesh position={[0.8, 0.1, -1.85]} rotation={[0, Math.PI, 0]}><planeGeometry args={[4.4, 1.4]} />{doekTex ? <meshStandardMaterial map={doekTex} roughness={0.5} /> : <meshStandardMaterial color="#ffffff" roughness={0.5} />}</mesh>
    </group>
  );
}

function Zeppelin({ data }) {
  const g = useRef();
  const doekTex = useZeppelinDoek(data.tekst, data.logo);
  useFrame((s) => {
    const m = g.current; if (!m) return;
    const t = s.clock.elapsedTime;
    const a = data.fase + t * data.snelheid;
    m.position.set(Math.sin(a) * data.r, data.h + Math.sin(t * 0.32 + data.fase) * 0.9, Math.cos(a) * data.r);
    m.rotation.y = a + (data.snelheid >= 0 ? 0 : Math.PI); // neus in vaarrichting
    m.rotation.z = Math.sin(t * 0.27 + data.fase) * 0.02;  // heel licht deinen
  });
  return <group ref={g}><ZeppelinRomp doekTex={doekTex} /></group>;
}
export function Zeppelins() {
  // Op zwakke apparaten 1 zeppelin, anders de hele vloot van 3.
  const vloot = LOW_END ? ZEPPELIN_VLOOT.slice(0, 1) : ZEPPELIN_VLOOT;
  return <group>{vloot.map((z, i) => <Zeppelin key={i} data={z} />)}</group>;
}

// Tros feest-ballonnen die zacht wiegen — vast aan één punt (bv. naast de
// ingang). Puur sfeer; geen botsing. Elke ballon dobbert met eigen fase.
const BALLON_KLEUREN = ["#e2574c", "#4a90d9", "#f2b134", "#7bbf5a", "#b06ad6", "#ff8f3c", "#3cb5a8"];
function Ballon({ offset, color, phase }) {
  const ref = useRef();
  const hoogte = 2.6 + offset[1];
  useFrame((s) => {
    const m = ref.current; if (!m) return;
    const t = s.clock.elapsedTime;
    m.position.x = offset[0] + Math.sin(t * 0.8 + phase) * 0.12;
    m.position.y = hoogte + Math.sin(t * 1.1 + phase) * 0.12;
    m.position.z = offset[2] + Math.cos(t * 0.7 + phase) * 0.12;
    m.rotation.z = Math.sin(t * 0.9 + phase) * 0.12;
  });
  return (
    <group ref={ref} position={[offset[0], hoogte, offset[2]]}>
      {/* ballon-lijf */}
      <mesh castShadow scale={[1, 1.18, 1]}><sphereGeometry args={[0.34, 16, 16]} /><meshStandardMaterial color={color} roughness={0.45} metalness={0.05} /></mesh>
      {/* knoopje */}
      <mesh position={[0, -0.4, 0]}><coneGeometry args={[0.06, 0.1, 6]} /><meshStandardMaterial color={color} roughness={0.5} /></mesh>
      {/* touwtje omlaag naar het ankerpunt */}
      <mesh position={[-offset[0] / 2, -hoogte / 2 - 0.2, -offset[2] / 2]}>
        <cylinderGeometry args={[0.01, 0.01, hoogte, 4]} />
        <meshStandardMaterial color="#cfcabf" roughness={0.7} />
      </mesh>
    </group>
  );
}

export function Balloons({ position = [0, 0, 0] }) {
  const trossen = useMemo(() => ([
    { offset: [0.0, 0.5, 0.0], c: 0, phase: 0.0 },
    { offset: [0.55, 0.2, 0.1], c: 1, phase: 1.2 },
    { offset: [-0.5, 0.3, -0.1], c: 2, phase: 2.4 },
    { offset: [0.25, 0.75, -0.4], c: 3, phase: 3.1 },
    { offset: [-0.3, 0.65, 0.4], c: 4, phase: 4.0 },
  ]), []);
  return (
    <group position={position}>
      {/* paaltje waar de tros aan vastzit */}
      <mesh castShadow position={[0, 0.5, 0]}><cylinderGeometry args={[0.06, 0.07, 1.0, 8]} /><meshStandardMaterial color="#8a6b3f" flatShading roughness={1} /></mesh>
      {trossen.map((b, i) => <Ballon key={i} offset={b.offset} color={BALLON_KLEUREN[b.c % BALLON_KLEUREN.length]} phase={b.phase} />)}
    </group>
  );
}

// Naambord-textuur: tekent de parknaam op een canvas → textuur voor het bord
// boven de poort. Geen lettertype-afhankelijkheid, werkt offline.
function maakNaambord(tekst) {
  const cnv = document.createElement("canvas");
  cnv.width = 640; cnv.height = 160;
  const ctx = cnv.getContext("2d");
  // houten plank-achtergrond met rand
  ctx.fillStyle = "#5a3b1e"; ctx.fillRect(0, 0, 640, 160);
  ctx.fillStyle = "#754c27"; ctx.fillRect(10, 10, 620, 140);
  ctx.fillStyle = "#fff5e0";
  ctx.font = "bold 70px system-ui, sans-serif";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  // tekst inkorten als 'ie te lang is
  let t = (tekst || "Mijn Park").trim();
  while (ctx.measureText(t).width > 580 && t.length > 4) t = t.slice(0, -1);
  if (t !== (tekst || "").trim()) t = t.slice(0, -1) + "…";
  ctx.fillText(t, 320, 84);
  const tex = new CanvasTexture(cnv);
  tex.anisotropy = 4;
  return tex;
}

// Ingang-poort (Zoo Tycoon-stijl): twee stevige pilaren, een balk erover en een
// naambord met de parknaam erboven. Vast decor aan de voorkant van het park.
export function EntranceGate({ name = "Mijn Park", position = [0, 0, 0], rotation = 0 }) {
  const tex = useMemo(() => maakNaambord(name), [name]);
  useEffect(() => () => tex.dispose(), [tex]);
  const hout = "#6b4a2b", steen = "#caa472";
  const W = 9;                 // breedte tussen de pilaren-buitenkant
  const H = 3.6;               // pilaarhoogte
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* pilaren */}
      {[-W / 2, W / 2].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <mesh castShadow position={[0, H / 2, 0]}><boxGeometry args={[0.8, H, 0.8]} /><meshStandardMaterial color={steen} flatShading roughness={1} /></mesh>
          <mesh castShadow position={[0, H + 0.15, 0]}><boxGeometry args={[1.0, 0.3, 1.0]} /><meshStandardMaterial color={hout} flatShading roughness={1} /></mesh>
        </group>
      ))}
      {/* bovenbalk */}
      <mesh castShadow position={[0, H + 0.5, 0]}><boxGeometry args={[W + 1.2, 0.5, 0.8]} /><meshStandardMaterial color={hout} flatShading roughness={1} /></mesh>
      {/* naambord boven de balk (kijkt naar de voorkant) */}
      <mesh position={[0, H + 1.35, 0.05]}>
        <planeGeometry args={[W * 0.92, (W * 0.92) / 4]} />
        <meshStandardMaterial map={tex} roughness={1} />
      </mesh>
      {/* zelfde bord aan de achterkant zodat het ook van binnenuit leesbaar is */}
      <mesh position={[0, H + 1.35, -0.05]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[W * 0.92, (W * 0.92) / 4]} />
        <meshStandardMaterial map={tex} roughness={1} />
      </mesh>
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

// Verkoper achter de toonbank — blokkig poppetje dat zachtjes wuift. Maakt
// zichtbaar dat er iemand achter de kraam staat (die je salaris kost — zie het
// kraam-dagoverzicht). `tint` = de kleur van het kraampje.
function Verkoper({ tint = "#e2574c" }) {
  const arm = useRef();
  useFrame((s) => { if (arm.current) arm.current.rotation.z = -0.35 + Math.sin(s.clock.elapsedTime * 2.2) * 0.28; });
  const huid = "#f4c89a";
  return (
    <group position={[-0.34, 0, -0.08]}>
      {/* benen */}
      <mesh castShadow position={[-0.1, 0.3, 0]}><boxGeometry args={[0.13, 0.6, 0.15]} /><meshStandardMaterial color="#39507a" flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0.1, 0.3, 0]}><boxGeometry args={[0.13, 0.6, 0.15]} /><meshStandardMaterial color="#39507a" flatShading roughness={1} /></mesh>
      {/* lichaam in kraamkleur + witte schort */}
      <mesh castShadow position={[0, 0.92, 0]}><boxGeometry args={[0.4, 0.66, 0.25]} /><meshStandardMaterial color={tint} flatShading roughness={1} /></mesh>
      <mesh position={[0, 0.82, 0.13]}><boxGeometry args={[0.3, 0.42, 0.02]} /><meshStandardMaterial color="#f7f3e8" flatShading roughness={1} /></mesh>
      {/* linkerarm vast, rechterarm wuift */}
      <mesh castShadow position={[-0.26, 0.96, 0.02]} rotation={[0, 0, 0.18]}><boxGeometry args={[0.1, 0.46, 0.11]} /><meshStandardMaterial color={tint} flatShading roughness={1} /></mesh>
      <group ref={arm} position={[0.24, 1.14, 0.02]}>
        <mesh castShadow position={[0.02, -0.22, 0]}><boxGeometry args={[0.1, 0.46, 0.11]} /><meshStandardMaterial color={tint} flatShading roughness={1} /></mesh>
        <mesh position={[0.03, -0.47, 0]}><boxGeometry args={[0.1, 0.1, 0.11]} /><meshStandardMaterial color={huid} flatShading roughness={1} /></mesh>
      </group>
      {/* hoofd + gezicht */}
      <mesh castShadow position={[0, 1.4, 0]}><boxGeometry args={[0.27, 0.27, 0.25]} /><meshStandardMaterial color={huid} flatShading roughness={1} /></mesh>
      <mesh position={[-0.06, 1.43, 0.13]}><boxGeometry args={[0.035, 0.05, 0.02]} /><meshStandardMaterial color="#2a2a2a" /></mesh>
      <mesh position={[0.06, 1.43, 0.13]}><boxGeometry args={[0.035, 0.05, 0.02]} /><meshStandardMaterial color="#2a2a2a" /></mesh>
      <mesh position={[0, 1.34, 0.13]}><boxGeometry args={[0.1, 0.03, 0.02]} /><meshStandardMaterial color="#b5663f" /></mesh>
      {/* petje in kraamkleur */}
      <mesh position={[0, 1.57, 0]}><boxGeometry args={[0.29, 0.1, 0.27]} /><meshStandardMaterial color={tint} flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.55, 0.19]}><boxGeometry args={[0.26, 0.04, 0.12]} /><meshStandardMaterial color={tint} flatShading roughness={1} /></mesh>
    </group>
  );
}

// Meebewegend bord boven de kraam: toont WAT je verkoopt + de PRIJS. Werkt mee
// als de speler de prijs aanpast (de `kraam`-prop verandert → bord update). Het
// bord wijst altijd naar de camera (Html-billboard), klikken gaat eronderdoor.
function KraamBord({ kraam }) {
  if (!kraam) return null;
  return (
    <Html position={[0, 2.6, 0.1]} center distanceFactor={8} zIndexRange={[20, 0]} style={{ pointerEvents: "none", userSelect: "none" }}>
      <div style={{ background: "#fffefb", border: "3px solid #3a2a12", borderRadius: 10, padding: "3px 10px 4px", textAlign: "center", boxShadow: "0 3px 9px rgba(0,0,0,.3)", whiteSpace: "nowrap" }}>
        <div style={{ font: "800 13px system-ui", color: "#2a2018" }}>{kraam.emoji} {kraam.label}</div>
        <div style={{ font: "900 14px system-ui", color: "#0a7d3c" }}>{kraam.verkoop} 🪙</div>
      </div>
    </Html>
  );
}

// Patatkraam (procedureel) — een vrolijk snackkraam met gestreepte luifel.
export function PatatKraam({ position = [0, 0, 0], kraam = null }) {
  const hout = "#caa44a";
  return (
    <group position={[position[0], 0, position[2]]}>
      <Verkoper tint="#e2574c" />
      <KraamBord kraam={kraam} />
      {/* toonbank */}
      <mesh castShadow receiveShadow position={[0, 0.45, 0]}><boxGeometry args={[1.8, 0.9, 0.8]} /><meshStandardMaterial color="#efe2c0" flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0, 0.93, 0]}><boxGeometry args={[1.95, 0.1, 0.95]} /><meshStandardMaterial color="#c98a3a" flatShading roughness={1} /></mesh>
      {/* achterwand + bord */}
      <mesh castShadow position={[0, 1.15, -0.45]}><boxGeometry args={[1.8, 1.4, 0.12]} /><meshStandardMaterial color="#f5f0e2" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.7, -0.37]}><boxGeometry args={[1.3, 0.5, 0.06]} /><meshStandardMaterial color="#ffd23a" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.7, -0.33]}><boxGeometry args={[0.9, 0.18, 0.04]} /><meshStandardMaterial color="#e2574c" flatShading roughness={1} /></mesh>
      {/* palen */}
      <mesh position={[-0.85, 1.45, 0.42]}><cylinderGeometry args={[0.06, 0.06, 1.7, 8]} /><meshStandardMaterial color={hout} roughness={0.8} /></mesh>
      <mesh position={[0.85, 1.45, 0.42]}><cylinderGeometry args={[0.06, 0.06, 1.7, 8]} /><meshStandardMaterial color={hout} roughness={0.8} /></mesh>
      {/* gestreepte luifel (rood/wit), schuin naar voren */}
      <group position={[0, 2.15, 0.05]} rotation={[-0.32, 0, 0]}>
        {[-0.75, -0.45, -0.15, 0.15, 0.45, 0.75].map((x, i) => (
          <mesh key={i} castShadow position={[x, 0, 0]}><boxGeometry args={[0.3, 0.07, 1.05]} /><meshStandardMaterial color={i % 2 ? "#ffffff" : "#e2574c"} flatShading roughness={1} /></mesh>
        ))}
      </group>
      {/* patatpuntzak op de toonbank */}
      <mesh castShadow position={[0.5, 1.13, 0.12]} rotation={[0.15, 0, 0]}><coneGeometry args={[0.13, 0.32, 12]} /><meshStandardMaterial color="#e2574c" flatShading roughness={1} /></mesh>
      <mesh position={[0.5, 1.36, 0.12]}><cylinderGeometry args={[0.11, 0.07, 0.28, 8]} /><meshStandardMaterial color="#f2cd4a" flatShading roughness={1} /></mesh>
    </group>
  );
}

// Drankkraam (procedureel) — een vrolijk drankkraam met blauw/witte luifel en
// een grote beker met rietje op de toonbank. Bezoekers met dorst kopen hier.
export function DrankKraam({ position = [0, 0, 0], kraam = null }) {
  const hout = "#caa44a";
  return (
    <group position={[position[0], 0, position[2]]}>
      <Verkoper tint="#2a6f99" />
      <KraamBord kraam={kraam} />
      {/* toonbank */}
      <mesh castShadow receiveShadow position={[0, 0.45, 0]}><boxGeometry args={[1.8, 0.9, 0.8]} /><meshStandardMaterial color="#e3f0f7" flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0, 0.93, 0]}><boxGeometry args={[1.95, 0.1, 0.95]} /><meshStandardMaterial color="#3a8fb8" flatShading roughness={1} /></mesh>
      {/* achterwand + bord */}
      <mesh castShadow position={[0, 1.15, -0.45]}><boxGeometry args={[1.8, 1.4, 0.12]} /><meshStandardMaterial color="#f5f0e2" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.7, -0.37]}><boxGeometry args={[1.3, 0.5, 0.06]} /><meshStandardMaterial color="#4ec0e6" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.7, -0.33]}><boxGeometry args={[0.9, 0.18, 0.04]} /><meshStandardMaterial color="#2a6f99" flatShading roughness={1} /></mesh>
      {/* palen */}
      <mesh position={[-0.85, 1.45, 0.42]}><cylinderGeometry args={[0.06, 0.06, 1.7, 8]} /><meshStandardMaterial color={hout} roughness={0.8} /></mesh>
      <mesh position={[0.85, 1.45, 0.42]}><cylinderGeometry args={[0.06, 0.06, 1.7, 8]} /><meshStandardMaterial color={hout} roughness={0.8} /></mesh>
      {/* gestreepte luifel (blauw/wit), schuin naar voren */}
      <group position={[0, 2.15, 0.05]} rotation={[-0.32, 0, 0]}>
        {[-0.75, -0.45, -0.15, 0.15, 0.45, 0.75].map((x, i) => (
          <mesh key={i} castShadow position={[x, 0, 0]}><boxGeometry args={[0.3, 0.07, 1.05]} /><meshStandardMaterial color={i % 2 ? "#ffffff" : "#4ec0e6"} flatShading roughness={1} /></mesh>
        ))}
      </group>
      {/* grote beker met deksel + rietje op de toonbank */}
      <mesh castShadow position={[0.5, 1.16, 0.12]}><cylinderGeometry args={[0.14, 0.11, 0.4, 14]} /><meshStandardMaterial color="#e2574c" flatShading roughness={1} /></mesh>
      <mesh position={[0.5, 1.37, 0.12]}><cylinderGeometry args={[0.15, 0.15, 0.04, 14]} /><meshStandardMaterial color="#f5f0e2" flatShading roughness={1} /></mesh>
      <mesh position={[0.56, 1.52, 0.12]} rotation={[0, 0, -0.35]}><cylinderGeometry args={[0.022, 0.022, 0.34, 8]} /><meshStandardMaterial color="#ffd23a" roughness={0.7} /></mesh>
    </group>
  );
}

// IJscokraam (procedureel) — pastel kraampje met roze/mint luifel en een grote
// ijshoorn op de toonbank. Bezoekers met zin in ijs kopen hier.
export function IJsKraam({ position = [0, 0, 0], kraam = null }) {
  const hout = "#caa44a";
  return (
    <group position={[position[0], 0, position[2]]}>
      <Verkoper tint="#e98bb4" />
      <KraamBord kraam={kraam} />
      {/* toonbank */}
      <mesh castShadow receiveShadow position={[0, 0.45, 0]}><boxGeometry args={[1.8, 0.9, 0.8]} /><meshStandardMaterial color="#fdeaf2" flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0, 0.93, 0]}><boxGeometry args={[1.95, 0.1, 0.95]} /><meshStandardMaterial color="#e98bb4" flatShading roughness={1} /></mesh>
      {/* achterwand + bord */}
      <mesh castShadow position={[0, 1.15, -0.45]}><boxGeometry args={[1.8, 1.4, 0.12]} /><meshStandardMaterial color="#f5f0e2" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.7, -0.37]}><boxGeometry args={[1.3, 0.5, 0.06]} /><meshStandardMaterial color="#7fd4c1" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.7, -0.33]}><boxGeometry args={[0.9, 0.18, 0.04]} /><meshStandardMaterial color="#e98bb4" flatShading roughness={1} /></mesh>
      {/* palen */}
      <mesh position={[-0.85, 1.45, 0.42]}><cylinderGeometry args={[0.06, 0.06, 1.7, 8]} /><meshStandardMaterial color={hout} roughness={0.8} /></mesh>
      <mesh position={[0.85, 1.45, 0.42]}><cylinderGeometry args={[0.06, 0.06, 1.7, 8]} /><meshStandardMaterial color={hout} roughness={0.8} /></mesh>
      {/* gestreepte luifel (roze/mint), schuin naar voren */}
      <group position={[0, 2.15, 0.05]} rotation={[-0.32, 0, 0]}>
        {[-0.75, -0.45, -0.15, 0.15, 0.45, 0.75].map((x, i) => (
          <mesh key={i} castShadow position={[x, 0, 0]}><boxGeometry args={[0.3, 0.07, 1.05]} /><meshStandardMaterial color={i % 2 ? "#fbeaf1" : "#7fd4c1"} flatShading roughness={1} /></mesh>
        ))}
      </group>
      {/* grote ijshoorn op de toonbank: wafel + drie bolletjes */}
      <mesh castShadow position={[0.5, 1.12, 0.12]} rotation={[Math.PI, 0, 0]}><coneGeometry args={[0.13, 0.34, 12]} /><meshStandardMaterial color="#e0a25a" flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0.5, 1.34, 0.12]}><sphereGeometry args={[0.14, 12, 12]} /><meshStandardMaterial color="#f7a8c4" flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0.5, 1.5, 0.12]}><sphereGeometry args={[0.12, 12, 12]} /><meshStandardMaterial color="#fff0b8" flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0.5, 1.64, 0.12]}><sphereGeometry args={[0.1, 12, 12]} /><meshStandardMaterial color="#b3e0a0" flatShading roughness={1} /></mesh>
      <mesh position={[0.5, 1.72, 0.12]}><sphereGeometry args={[0.03, 8, 8]} /><meshStandardMaterial color="#d2453a" flatShading roughness={1} /></mesh>
    </group>
  );
}

// Popcornkraam (procedureel) — rood/wit kraampje met een grote popcornbak vol
// gele popcorn op de toonbank. Bezoekers met zin in popcorn kopen hier.
export function PopcornKraam({ position = [0, 0, 0], kraam = null }) {
  const hout = "#caa44a";
  return (
    <group position={[position[0], 0, position[2]]}>
      <Verkoper tint="#d2453a" />
      <KraamBord kraam={kraam} />
      {/* toonbank */}
      <mesh castShadow receiveShadow position={[0, 0.45, 0]}><boxGeometry args={[1.8, 0.9, 0.8]} /><meshStandardMaterial color="#fbeceb" flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0, 0.93, 0]}><boxGeometry args={[1.95, 0.1, 0.95]} /><meshStandardMaterial color="#d2453a" flatShading roughness={1} /></mesh>
      {/* achterwand + bord */}
      <mesh castShadow position={[0, 1.15, -0.45]}><boxGeometry args={[1.8, 1.4, 0.12]} /><meshStandardMaterial color="#f5f0e2" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.7, -0.37]}><boxGeometry args={[1.3, 0.5, 0.06]} /><meshStandardMaterial color="#ffd23a" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.7, -0.33]}><boxGeometry args={[0.9, 0.18, 0.04]} /><meshStandardMaterial color="#d2453a" flatShading roughness={1} /></mesh>
      {/* palen */}
      <mesh position={[-0.85, 1.45, 0.42]}><cylinderGeometry args={[0.06, 0.06, 1.7, 8]} /><meshStandardMaterial color={hout} roughness={0.8} /></mesh>
      <mesh position={[0.85, 1.45, 0.42]}><cylinderGeometry args={[0.06, 0.06, 1.7, 8]} /><meshStandardMaterial color={hout} roughness={0.8} /></mesh>
      {/* gestreepte luifel (rood/wit), schuin naar voren */}
      <group position={[0, 2.15, 0.05]} rotation={[-0.32, 0, 0]}>
        {[-0.75, -0.45, -0.15, 0.15, 0.45, 0.75].map((x, i) => (
          <mesh key={i} castShadow position={[x, 0, 0]}><boxGeometry args={[0.3, 0.07, 1.05]} /><meshStandardMaterial color={i % 2 ? "#ffffff" : "#d2453a"} flatShading roughness={1} /></mesh>
        ))}
      </group>
      {/* rood/wit gestreepte popcornbak met gele popcorn */}
      <mesh castShadow position={[0.5, 1.18, 0.12]}><boxGeometry args={[0.3, 0.34, 0.26]} /><meshStandardMaterial color="#e8554b" flatShading roughness={1} /></mesh>
      <mesh position={[0.5, 1.18, 0.135]}><boxGeometry args={[0.1, 0.34, 0.26]} /><meshStandardMaterial color="#f5f0e2" flatShading roughness={1} /></mesh>
      {[[-0.06, 0.36, 0], [0.07, 0.38, 0.04], [0, 0.4, -0.05], [0.05, 0.43, -0.02], [-0.05, 0.42, 0.05]].map((p, i) => (
        <mesh key={i} castShadow position={[0.5 + p[0], 1.01 + p[1], 0.12 + p[2]]}><sphereGeometry args={[0.07, 8, 8]} /><meshStandardMaterial color={i % 2 ? "#fff3c4" : "#ffe27a"} flatShading roughness={1} /></mesh>
      ))}
    </group>
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

// ──────────────────────────────────────────────────────────────────────────
// 🚂 TREIN-OP-RAILS (Mark 2026-06-27): losse rails + station + lange route-trein.
// ──────────────────────────────────────────────────────────────────────────

// Eén rail-tegel: ballast + dwarsliggers + twee stalen rails. Default langs X;
// rotation oriënteert 'm. Bij bochten ziet het er nog recht uit, maar de trein
// stuurt netjes de hoek om.
export function RailTile({ position = [0, 0, 0], rotation = 0 }) {
  const hout = "#6b4a2b", staal = "#aab0b6";
  return (
    <group position={[position[0], position[1], position[2]]} rotation={[0, rotation, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} receiveShadow>
        <planeGeometry args={[2, 1.3]} />
        <meshStandardMaterial color="#b8a06a" roughness={1} />
      </mesh>
      {[-0.7, -0.35, 0, 0.35, 0.7].map((x, i) => (
        <mesh key={i} position={[x, 0.06, 0]} castShadow>
          <boxGeometry args={[0.13, 0.07, 1.0]} />
          <meshStandardMaterial color={hout} flatShading roughness={1} />
        </mesh>
      ))}
      <mesh position={[0, 0.11, 0.34]}><boxGeometry args={[2, 0.06, 0.06]} /><meshStandardMaterial color={staal} metalness={0.6} roughness={0.4} /></mesh>
      <mesh position={[0, 0.11, -0.34]}><boxGeometry args={[2, 0.06, 0.06]} /><meshStandardMaterial color={staal} metalness={0.6} roughness={0.4} /></mesh>
    </group>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// 🚄 GEÏNSTANCEERDE PROPS-LAAG (review 17 jul): rails (8 meshes/tegel), hek-
// panelen (7/paneel) en padtegels waren de draw-call-moordenaar — een normaal
// park kwam op 1.500-2.000 draw calls. Deze laag rendert ze ALLEMAAL samen in
// 6 instanced meshes (ballast, dwarsliggers, stalen rails, hekpalen, hek-
// planken, padtegels met per-instance kleur). Zelfde patroon als BlokkenLaag.
// Selectie/klikken blijft werken via onzichtbare hitboxen in PlacedItem
// (three's Raycaster raakt visible=false meshes gewoon).
// ──────────────────────────────────────────────────────────────────────────
const IP_DUMMY = new Object3D();
const IP_EULER = new Euler();
const IP_KLEUR = new Color();
const IP_GEO = {
  ballast: new PlaneGeometry(2, 1.3),
  biels: new BoxGeometry(0.13, 0.07, 1.0),
  staal: new BoxGeometry(2, 0.06, 0.06),
  paal: new BoxGeometry(0.1, 0.7, 0.1),
  plank: new BoxGeometry(2, 0.08, 0.08),
  pad: new PlaneGeometry(2.02, 2.02),
};
const IP_MAT = {
  ballast: new MeshStandardMaterial({ color: "#b8a06a", roughness: 1 }),
  biels: new MeshStandardMaterial({ color: "#6b4a2b", flatShading: true, roughness: 1 }),
  staal: new MeshStandardMaterial({ color: "#aab0b6", metalness: 0.6, roughness: 0.4 }),
  hout: new MeshStandardMaterial({ color: "#8a5a2b", flatShading: true, roughness: 1 }),
  pad: new MeshStandardMaterial({ color: "#ffffff", roughness: 1 }),
};
const BIELS_OFFSETS = [-0.7, -0.35, 0, 0.35, 0.7];
const PAAL_OFFSETS = [-1, -0.5, 0, 0.5, 1];

// Eén instanced sub-mesh: `plaatsen` = array van {x,y,z,ry,rx} wereld-transforms.
function InstancedDeel({ geo, mat, plaatsen, castShadow = false, receiveShadow = false, kleuren = null }) {
  const ref = useRef();
  useEffect(() => {
    const m = ref.current;
    if (!m) return;
    for (let i = 0; i < plaatsen.length; i++) {
      const p = plaatsen[i];
      IP_DUMMY.position.set(p.x, p.y, p.z);
      // 'YXZ': eerst plat leggen (rx), dan om de wereld-Y draaien (ry).
      IP_DUMMY.setRotationFromEuler(IP_EULER.set(p.rx || 0, p.ry || 0, 0, "YXZ"));
      IP_DUMMY.scale.set(1, 1, 1);
      IP_DUMMY.updateMatrix();
      m.setMatrixAt(i, IP_DUMMY.matrix);
      if (kleuren) m.setColorAt(i, IP_KLEUR.set(kleuren[i] || "#dcc48f"));
    }
    m.count = plaatsen.length;
    m.instanceMatrix.needsUpdate = true;
    if (kleuren && m.instanceColor) m.instanceColor.needsUpdate = true;
  }, [plaatsen, kleuren]);
  if (!plaatsen.length) return null;
  return <instancedMesh key={plaatsen.length} ref={ref} args={[geo, mat, plaatsen.length]} castShadow={castShadow} receiveShadow={receiveShadow} />;
}

// Draai een lokale offset om de Y-as van het item mee.
const roteerX = (dx, ry) => [dx * Math.cos(ry), -dx * Math.sin(ry)];
const roteerZ = (dz, ry) => [dz * Math.sin(ry), dz * Math.cos(ry)];

export function GeinstanceerdeParkProps({ rails = [], hekken = [], paden = [] }) {
  const delen = useMemo(() => {
    const ballast = [], biels = [], staal = [], palen = [], planken = [], pad = [], padKleur = [];
    for (const r of rails) {
      ballast.push({ x: r.x, y: r.y + 0.02, z: r.z, rx: -Math.PI / 2, ry: r.rot });
      for (const dx of BIELS_OFFSETS) {
        const [ox, oz] = roteerX(dx, r.rot);
        biels.push({ x: r.x + ox, y: r.y + 0.06, z: r.z + oz, ry: r.rot });
      }
      for (const dz of [0.34, -0.34]) {
        const [ox, oz] = roteerZ(dz, r.rot);
        staal.push({ x: r.x + ox, y: r.y + 0.11, z: r.z + oz, ry: r.rot });
      }
    }
    for (const h of hekken) {
      for (const dx of PAAL_OFFSETS) {
        const [ox, oz] = roteerX(dx, h.rot);
        palen.push({ x: h.x + ox, y: h.y + 0.35, z: h.z + oz, ry: h.rot });
      }
      planken.push({ x: h.x, y: h.y + 0.55, z: h.z, ry: h.rot });
      planken.push({ x: h.x, y: h.y + 0.3, z: h.z, ry: h.rot });
    }
    for (const p of paden) {
      pad.push({ x: p.x, y: p.y + 0.025, z: p.z, rx: -Math.PI / 2 });
      padKleur.push(p.color);
    }
    return { ballast, biels, staal, palen, planken, pad, padKleur };
  }, [rails, hekken, paden]);
  return (
    <group>
      <InstancedDeel geo={IP_GEO.ballast} mat={IP_MAT.ballast} plaatsen={delen.ballast} receiveShadow />
      <InstancedDeel geo={IP_GEO.biels} mat={IP_MAT.biels} plaatsen={delen.biels} castShadow />
      <InstancedDeel geo={IP_GEO.staal} mat={IP_MAT.staal} plaatsen={delen.staal} />
      <InstancedDeel geo={IP_GEO.paal} mat={IP_MAT.hout} plaatsen={delen.palen} castShadow />
      <InstancedDeel geo={IP_GEO.plank} mat={IP_MAT.hout} plaatsen={delen.planken} castShadow />
      <InstancedDeel geo={IP_GEO.pad} mat={IP_MAT.pad} plaatsen={delen.pad} kleuren={delen.padKleur} receiveShadow />
    </group>
  );
}

// Onzichtbare klik-hitbox voor items die visueel in de instanced laag zitten.
// three's Raycaster raakt visible=false meshes gewoon → selecteren/weghalen
// blijft werken zonder ook maar één draw call.
export function PropHitbox({ position = [0, 0, 0], rotation = 0, maat = [2, 0.4, 1.3], hoogte = 0.2 }) {
  return (
    <mesh visible={false} position={[position[0], position[1] + hoogte, position[2]]} rotation={[0, rotation, 0]}>
      <boxGeometry args={maat} />
      <meshBasicMaterial />
    </mesh>
  );
}

// Treinstation: een perron met een afdakje en een bordje. Heeft een instapprijs
// (de inkomst per dag); dat staat in de asset-data, hier puur het 3D-uiterlijk.
export function Station({ position = [0, 0, 0], rotation = 0 }) {
  return (
    <group position={[position[0], position[1], position[2]]} rotation={[0, rotation, 0]}>
      {/* perron */}
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow><boxGeometry args={[3.2, 0.3, 1.7]} /><meshStandardMaterial color="#cbb389" roughness={1} /></mesh>
      {/* palen + dak */}
      {[-1.3, 1.3].map((x, i) => (
        <mesh key={i} position={[x, 1.0, -0.5]} castShadow><boxGeometry args={[0.14, 1.6, 0.14]} /><meshStandardMaterial color="#7a5230" flatShading roughness={1} /></mesh>
      ))}
      <mesh position={[0, 1.9, -0.35]} rotation={[0.22, 0, 0]} castShadow><boxGeometry args={[3.4, 0.12, 1.5]} /><meshStandardMaterial color="#c0392b" flatShading roughness={0.9} /></mesh>
      {/* bordje */}
      <mesh position={[0, 1.55, 0.85]}><boxGeometry args={[1.5, 0.5, 0.08]} /><meshStandardMaterial color="#2c3e50" roughness={0.8} /></mesh>
      <Html position={[0, 1.55, 0.92]} center distanceFactor={11} pointerEvents="none">
        <div style={{ font: "800 13px system-ui", color: "#fff", whiteSpace: "nowrap" }}>🚉 Station</div>
      </Html>
    </group>
  );
}

// De lange trein die JOUW route volgt: een locomotief + meerdere wagons. `route`
// = { pts:[{x,y,z}...], loop:bool }. We lopen met een afstand `s` over de poly-
// lijn; elke wagon zit een vaste afstand achter de vorige. `headRef` krijgt de
// kop-positie + rijrichting zodat de camera mee kan rijden.
// `onLeermoment` (Mark 12 jul): tik op de rijdende trein → stoomtrein-leermoment.
export function RouteTrain({ route, headRef = null, wagons = 3, onLeermoment = null }) {
  const refs = useRef([]);
  const sRef = useRef(0);
  // Vloeiende baan (Mark 5 jul: "bochten die netjes aansluiten"): een Catmull-
  // Rom-curve door de rail-punten i.p.v. rechte segmenten met scherpe hoeken.
  // Daarnaast twee evenwijdige stalen rails die dezelfde curve volgen — zo
  // sluiten óók de rails vloeiend aan in de bochten.
  const data = useMemo(() => {
    if (!route || !route.pts || route.pts.length < 2) return null;
    const pts = route.pts.map((p) => new Vector3(p.x, p.y, p.z));
    const curve = new CatmullRomCurve3(pts, !!route.loop, "catmullrom", 0.5);
    const total = curve.getLength();
    const N = Math.max(32, Math.round(total * 3));
    const up = new Vector3(0, 1, 0), n = new Vector3();
    const links = [], rechts = [];
    for (let i = 0; i <= N; i++) {
      const u = i / N;
      const p = curve.getPointAt(u), t = curve.getTangentAt(u);
      n.crossVectors(t, up).normalize().multiplyScalar(0.34); // spoorbreedte
      links.push(p.clone().add(n)); rechts.push(p.clone().sub(n));
    }
    return {
      curve, total, loop: !!route.loop,
      railL: new CatmullRomCurve3(links, !!route.loop),
      railR: new CatmullRomCurve3(rechts, !!route.loop),
    };
  }, [route]);

  const SNELHEID = 2.6; // wereld-units per sec
  const WAGON_GAP = 1.7;
  // Richting van de rit: bij een niet-gesloten spoor pendelt de trein heen en
  // weer (review 17 jul: hij klemde vast op het eindpunt en stond dan voorgoed
  // stil — juist bij het eerste rechte spoor dat een kind legt).
  const richtingRef = useRef(1);
  // Hergebruik-vectoren: getPointAt/getTangentAt zonder target alloceren 2
  // Vector3's per wagon per frame → GC-druk op goedkope telefoons.
  const tmpP = useMemo(() => new Vector3(), []);
  const tmpD = useMemo(() => new Vector3(), []);

  const posOp = (s) => {
    if (!data || data.total <= 0) return null;
    const d = data.loop ? ((s % data.total) + data.total) % data.total : Math.max(0, Math.min(data.total, s));
    const u = d / data.total;
    return { p: data.curve.getPointAt(u, tmpP), dir: data.curve.getTangentAt(u, tmpD) };
  };

  // vorige camera-afstand van de kop, voor het doppler-richtinkje in het geluid
  const audioD = useRef(Infinity);
  useFrame((s, dt) => {
    if (!data) return;
    sRef.current += dt * SNELHEID * richtingRef.current;
    if (!data.loop) {
      if (sRef.current >= data.total) { sRef.current = data.total; richtingRef.current = -1; }
      else if (sRef.current <= 0) { sRef.current = 0; richtingRef.current = 1; }
    }
    const headS = sRef.current;
    const terug = richtingRef.current < 0;
    for (let i = 0; i < refs.current.length; i++) {
      const g = refs.current[i];
      if (!g) continue;
      // Wagons hangen áchter de kop, gezien in de rijrichting.
      const info = posOp(headS - i * WAGON_GAP * richtingRef.current);
      if (!info) continue;
      if (i === 0) {
        // 🔊 treingeluid: volume op camera-afstand + doppler (throttled in parkAudio)
        const dCam = s.camera.position.distanceTo(info.p);
        parkAudioTrein(dCam, dCam < audioD.current);
        audioD.current = dCam;
      }
      g.position.copy(info.p);
      // +π: de wagon-modellen wezen met hun achterkant vooruit (Mark: "trein
      // rijdt achteruit"); 1.6× groter zodat hij in verhouding is met de speler.
      // Bij terugrijden nóg eens π zodat de neus in de rijrichting wijst.
      g.rotation.y = Math.atan2(info.dir.x, info.dir.z) + Math.PI + (terug ? Math.PI : 0);
      g.scale.setScalar(1.6);
      if (i === 0 && headRef) {
        // Stabiel object muteren i.p.v. elke frame een nieuw {p, dir} + clones.
        // NB: de ref start als {} (truthy!) — dus op .p checken, niet op .current.
        if (!headRef.current?.p) headRef.current = { p: new Vector3(), dir: new Vector3() };
        headRef.current.p.copy(info.p);
        headRef.current.dir.copy(info.dir).multiplyScalar(richtingRef.current);
      }
    }
  });

  if (!data) return null;
  const carts = [{ loco: true }, ...Array.from({ length: wagons }, () => ({ loco: false }))];
  const railSeg = Math.max(48, Math.round(data.total * 4));
  return (
    <group>
      {/* Vloeiend gebogen rails (twee stalen buizen) langs de hele route, zodat
          de bochten netjes aansluiten — geen blokkerige hoeken meer. */}
      <mesh castShadow><tubeGeometry args={[data.railL, railSeg, 0.05, 6, data.loop]} /><meshStandardMaterial color="#aab0b6" metalness={0.6} roughness={0.4} /></mesh>
      <mesh castShadow><tubeGeometry args={[data.railR, railSeg, 0.05, 6, data.loop]} /><meshStandardMaterial color="#aab0b6" metalness={0.6} roughness={0.4} /></mesh>
      {/* delta-guard op de trein-klik (park-zwerm 17 jul): zonder deze check
          opende een camera-sleep die toevallig op de rijdende trein eindigde
          ongewild het leermoment + hardop-spraak. Zelfde patroon als bezoekers. */}
      {carts.map((c, i) => (
        <group key={i} ref={(el) => (refs.current[i] = el)} onClick={onLeermoment ? (e) => { if (e.delta > 8) return; e.stopPropagation(); onLeermoment("stoomtrein"); } : undefined}>
          {c.loco ? (
            <group>
              <mesh position={[0, 0.45, 0]} castShadow><boxGeometry args={[1.5, 0.7, 0.9]} /><meshStandardMaterial color="#c0392b" flatShading roughness={0.7} /></mesh>
              <mesh position={[0.5, 0.95, 0]} castShadow><boxGeometry args={[0.5, 0.55, 0.8]} /><meshStandardMaterial color="#922b21" flatShading roughness={0.7} /></mesh>
              <mesh position={[-0.55, 0.85, 0]} castShadow><cylinderGeometry args={[0.12, 0.16, 0.4, 10]} /><meshStandardMaterial color="#34495e" roughness={0.8} /></mesh>
              {/* stoom uit de schoorsteen (schoorsteen op -x = voorkant; cabine op +x) —
                  de pluim waait naar de cabine toe, dus met de rijrichting mee naar achteren */}
              <StoomPluim top={[-0.55, 1.05, 0]} drift={[0.9, 0, 0]} />
              <mesh position={[0, 0.18, 0.32]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.18, 0.18, 0.12, 10]} /><meshStandardMaterial color="#222" /></mesh>
              <mesh position={[0, 0.18, -0.32]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.18, 0.18, 0.12, 10]} /><meshStandardMaterial color="#222" /></mesh>
            </group>
          ) : (
            <group>
              <mesh position={[0, 0.42, 0]} castShadow><boxGeometry args={[1.3, 0.55, 0.85]} /><meshStandardMaterial color={i % 2 ? "#2e86c1" : "#f1c40f"} flatShading roughness={0.7} /></mesh>
              <mesh position={[0, 0.75, 0]} castShadow><boxGeometry args={[1.34, 0.12, 0.9]} /><meshStandardMaterial color="#fff" roughness={0.8} /></mesh>
              <mesh position={[0, 0.16, 0.3]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.15, 0.15, 0.1, 10]} /><meshStandardMaterial color="#222" /></mesh>
              <mesh position={[0, 0.16, -0.3]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.15, 0.15, 0.1, 10]} /><meshStandardMaterial color="#222" /></mesh>
            </group>
          )}
        </group>
      ))}
    </group>
  );
}

// Camera die meerijdt met de trein: zet de camera net achter+boven de kop en
// kijkt vooruit. Actief zolang `rideRef.current` (de kop-positie) bestaat.
// 🎠 Attractie-camera (Mark 2 jul, "instappen in alle attracties"): je zit op
// een meedraaiend zitje en kijkt naar het hart van de attractie — draaimolen-
// gevoel. `posRef` = wereldpositie van het zitje (geschreven door de attractie).
// 🎢 Achtbaan (Mark 2 jul, naar zijn Roblox-screenshot): blauwe baan op witte
// steunpilaren met een stationnetje — kettinglift omhoog, mega-drop naar
// beneden, twee heuvels. Het karretje rijdt met échte zwaartekracht (versnelt
// omlaag, remt omhoog) en is instapbaar in eerste persoon (rideRef).
const _coasterAhead = new Vector3();
// Drie vaste banen (Mark 2 jul: "bouw die paar vaste baan-varianten maar").
// klein = compact ovaal voor een klein park; groot = lift + mega-drop + twee
// heuvels; spiraal = extra hoge lift en dan twee volle draaien omlaag rond
// een pilaren-toren (een échte looping zet de camera ondersteboven — de
// spiraal geeft dezelfde sensatie zonder dat).
const COASTER_BANEN = {
  klein: {
    station: { pos: [-1.0, 0, 4.0], breedte: 4.2 },
    pts: [
      [-3.4, 0.5, 3.0], [-0.6, 0.5, 3.2], [2.0, 0.7, 2.9],   // station + vertrek
      [3.8, 2.6, 1.4], [4.4, 5.0, -1.2],                      // lift → top
      [2.8, 1.4, -3.4], [0.4, 0.8, -3.8],                     // drop → dal
      [-2.2, 2.8, -3.2], [-3.9, 1.0, -1.2], [-4.2, 1.8, 1.2], // heuvel → bochtje
      [-3.8, 0.7, 2.4],
    ],
  },
  groot: {
    station: { pos: [-1.5, 0, 5.6], breedte: 5.6 },
    pts: [
      [-5.0, 0.55, 4.4], [-1.0, 0.55, 4.6], [2.8, 0.8, 4.3],   // station + vertrek
      [5.6, 3.4, 2.2], [6.4, 8.2, -1.6],                        // kettinglift → top
      [4.6, 2.2, -4.6], [1.4, 0.9, -5.2],                       // MEGA-drop → dal
      [-1.8, 4.6, -4.6], [-4.8, 1.4, -2.6],                     // heuvel 2 → af
      [-6.4, 2.8, 0.4], [-6.0, 0.9, 3.0],                       // bocht-heuveltje → aanloop
    ],
  },
  spiraal: {
    station: { pos: [-1.5, 0, 5.6], breedte: 5.6 },
    pts: [
      [-5.0, 0.55, 4.4], [-1.0, 0.55, 4.6], [2.8, 0.8, 4.2],   // station + vertrek
      [5.4, 3.6, 2.4], [6.2, 6.8, -0.4], [5.2, 9.3, -2.6],     // extra hoge lift
      // twee volle draaien omlaag rond het midden (helix, straal 3.6 m)
      [3.6, 8.4, -1.0], [0.0, 7.6, 2.6], [-3.6, 6.8, -1.0], [0.0, 6.0, -4.6],
      [3.6, 5.2, -1.0], [0.0, 4.4, 2.6], [-3.6, 3.6, -1.0], [0.0, 2.8, -4.6],
      [3.6, 2.0, -1.0],
      [2.6, 0.9, -4.2], [-1.5, 0.7, -5.2], [-5.4, 0.8, -2.4],  // uitloop → dal
      [-6.0, 1.6, 1.0], [-5.6, 0.8, 3.2],                       // hupje → aanloop
    ],
  },
};
export function Coaster({ position = [0, 0, 0], rotation = 0, baan = "groot", rideRef }) {
  const cart = useRef();
  const st = useRef({ t: 0, v: 3 });
  const conf = COASTER_BANEN[baan] || COASTER_BANEN.groot;
  const { curve, len, supports } = useMemo(() => {
    const pts = conf.pts.map(([x, y, z]) => new Vector3(x, y, z));
    const curve = new CatmullRomCurve3(pts, true, "catmullrom", 0.75);
    const len = curve.getLength();
    // Witte steunpilaren onder de hoge stukken (zoals in het voorbeeld).
    const supports = [];
    const n = Math.round(len / 1.4); // ± om de 1,4 m een pilaar-kandidaat
    for (let i = 0; i < n; i++) {
      const p = curve.getPointAt(i / n);
      if (p.y > 1.3) supports.push([p.x, p.y - 0.32, p.z]);
    }
    return { curve, len, supports };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baan]);
  useFrame((_, rawDt) => {
    const s = st.current;
    const dt = Math.min(rawDt, 0.05);
    const tan = curve.getTangentAt(s.t);
    s.v += -tan.y * 7.5 * dt;                          // zwaartekracht
    if (tan.y > 0.2 && s.v < 2.6) s.v = 2.6;           // kettinglift trekt je omhoog
    if (s.t < 0.1 || s.t > 0.97) s.v = Math.min(s.v, 3); // rustig door het station
    s.v = Math.max(1.8, Math.min(11, s.v - s.v * 0.045 * dt));
    s.t = (s.t + (s.v * dt) / len) % 1;
    if (!cart.current) return;
    cart.current.position.copy(curve.getPointAt(s.t));
    _coasterAhead.copy(curve.getPointAt((s.t + 0.012) % 1));
    cart.current.parent.localToWorld(_coasterAhead);
    cart.current.lookAt(_coasterAhead);
    if (rideRef) cart.current.getWorldPosition(rideRef.current);
  });
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* de baan: blauwe buis + stalen ruggengraat eronder */}
      <mesh castShadow><tubeGeometry args={[curve, 200, 0.16, 8, true]} /><meshStandardMaterial color="#2b3f9e" roughness={0.55} /></mesh>
      <mesh position={[0, -0.3, 0]}><tubeGeometry args={[curve, 120, 0.07, 6, true]} /><meshStandardMaterial color="#9aa3ad" roughness={0.7} /></mesh>
      {supports.map(([x, y, z], i) => (
        <mesh key={i} position={[x, y / 2, z]} castShadow><cylinderGeometry args={[0.09, 0.12, Math.max(0.1, y), 6]} /><meshStandardMaterial color="#e8ecf2" roughness={0.6} /></mesh>
      ))}
      {/* station: perron + palen + blauw afdak (maat per baan-variant) */}
      <group position={conf.station.pos}>
        <mesh position={[0, 0.14, 0]} receiveShadow><boxGeometry args={[conf.station.breedte, 0.28, 1.5]} /><meshStandardMaterial color="#cfd6de" roughness={0.9} /></mesh>
        {[[-1, -0.5], [1, -0.5], [-1, 0.5], [1, 0.5]].map(([sx, pz], i) => (
          <mesh key={i} position={[sx * (conf.station.breedte / 2 - 0.3), 1.4, pz]} castShadow><cylinderGeometry args={[0.06, 0.06, 2.6, 6]} /><meshStandardMaterial color="#e8ecf2" /></mesh>
        ))}
        <mesh position={[0, 2.76, 0]} castShadow><boxGeometry args={[conf.station.breedte + 0.4, 0.14, 2.0]} /><meshStandardMaterial color="#2b3f9e" roughness={0.6} /></mesh>
      </group>
      {/* het karretje */}
      <group ref={cart}>
        <mesh castShadow position={[0, 0.26, 0]}><boxGeometry args={[0.82, 0.4, 1.5]} /><meshStandardMaterial color="#2b62d9" roughness={0.5} /></mesh>
        <mesh position={[0, 0.5, -0.6]}><boxGeometry args={[0.82, 0.42, 0.16]} /><meshStandardMaterial color="#1d2c66" roughness={0.5} /></mesh>
        <mesh position={[0, 0.42, 0.68]} rotation={[-0.5, 0, 0]}><boxGeometry args={[0.78, 0.3, 0.1]} /><meshStandardMaterial color="#bfe3f2" roughness={0.2} /></mesh>
      </group>
    </group>
  );
}

const _attrDir = new Vector3();
export function AttractieCamera({ actief, posRef, centrum }) {
  const prev = useRef(new Vector3());
  const dir = useRef(new Vector3(0, 0, 1));
  const init = useRef(false);
  useFrame((state, dt) => {
    if (!actief || !posRef?.current || !centrum) { init.current = false; return; }
    const p = posRef.current;
    if (!init.current) { prev.current.copy(p); init.current = true; return; }
    // Eerste-persoon: beweeg je snel (achtbaan/trein)? Kijk in je rijrichting,
    // óók omhoog/omlaag. Draai je rustig rond (draaimolen)? Kijk naar buiten.
    const vx = p.x - prev.current.x, vy = p.y - prev.current.y, vz = p.z - prev.current.z;
    const speed = dt > 0 ? Math.hypot(vx, vy, vz) / dt : 0;
    if (speed > 2.2) {
      dir.current.lerp(_attrDir.set(vx, vy, vz).normalize(), 0.35);
    } else {
      const rx = p.x - centrum[0], rz = p.z - centrum[2];
      const rl = Math.hypot(rx, rz) || 1;
      dir.current.lerp(_attrDir.set(rx / rl, 0, rz / rl), 0.15);
    }
    prev.current.copy(p);
    state.camera.position.set(p.x, p.y + 0.75, p.z);
    state.camera.lookAt(p.x + dir.current.x * 10, p.y + 0.4 + dir.current.y * 8, p.z + dir.current.z * 10);
  });
  return null;
}

export function RideCamera({ headRef, active }) {
  const { camera } = useThree();
  useFrame(() => {
    if (!active || !headRef || !headRef.current) return;
    const { p, dir } = headRef.current;
    if (!p || !dir) return;
    // Eerste-persoon: je zit ín de locomotief en kijkt vooruit over het spoor.
    camera.position.set(p.x, p.y + 1.6, p.z);
    camera.lookAt(p.x + dir.x * 6, p.y + 1.1, p.z + dir.z * 6);
  });
  return null;
}
