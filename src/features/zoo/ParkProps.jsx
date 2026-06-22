// ParkProps — het vaste decor van het mini-park (paden, draaimolen, poppetje,
// dierverblijven). VOORLOPIG opgebouwd uit eenvoudige low-poly vormen in één
// warme stijl, als "in opbouw"-visualisatie. Worden later vervangen door echte
// Kenney/Quaternius-modellen (de laad-pijplijn ligt klaar).
import { useRef, useState, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Vector3, Color, CanvasTexture } from "three";
import ZooModel from "./ZooModel";
import { KRAAM_SOORTEN, KRAAM_KEYS } from "./AssetRegistry";

// Dag-nacht-cyclus: stuurt de zon, het omgevingslicht en de luchtkleur over de
// tijd (één dag ≈ 5 min). Vervangt de vaste belichting. Niet te donker 's nachts
// (schoolapp, kinderen moeten hun park blijven zien).
const CYCLE = 300; // seconden per dag
const KLEUR_DAG = new Color("#aaddff");
const KLEUR_NACHT = new Color("#1b2a4a");
const KLEUR_ZONSOP = new Color("#ffb27a");
const ZON_DAG = new Color("#fff4e0");
const ZON_HORIZON = new Color("#ff9a5a");

export function DayNight() {
  const { scene } = useThree();
  const sun = useRef();
  const amb = useRef();
  const tmp = useRef(new Color());
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
      sun.current.position.set(Math.cos(phase * Math.PI * 2) * 18, Math.max(-4, e * 22 + 3), 9);
      sun.current.intensity = 0.12 + daglicht * 1.25;
      sun.current.color.copy(ZON_DAG).lerp(ZON_HORIZON, horizon);
    }
    if (amb.current) amb.current.intensity = 0.28 + daglicht * 0.4;
  });
  return (
    <>
      <ambientLight ref={amb} intensity={0.6} />
      <hemisphereLight args={["#eaf6ff", "#6f9a4a", 0.5]} />
      <directionalLight
        ref={sun}
        castShadow
        position={[12, 16, 9]}
        intensity={1.2}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={1}
        shadow-camera-far={64}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-bias={-0.0004}
      />
    </>
  );
}

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

// Reuzenrad (procedureel) — een groot draaiend wiel met gondels die rechtop
// blijven hangen. Het wiel draait om de Z-as (verticaal vlak); de gondels worden
// elke frame op hun rim-positie gezet zonder mee te kantelen.
export function FerrisWheel({ position = [0, 0, 0] }) {
  const wheel = useRef();
  const gond = useRef([]);
  const R = 2.7, N = 8, hubY = 3.4;
  const spaken = Array.from({ length: N }, (_, i) => (i / N) * Math.PI * 2);
  useFrame((_, dt) => {
    if (wheel.current) wheel.current.rotation.z += dt * 0.35;
    const t = wheel.current ? wheel.current.rotation.z : 0;
    for (let i = 0; i < N; i++) {
      const m = gond.current[i];
      if (!m) continue;
      const a = t + (i / N) * Math.PI * 2;
      m.position.set(Math.cos(a) * R, hubY + Math.sin(a) * R, 0);
    }
  });
  const staal = "#9aa0a6", frame = "#d65a5a";
  return (
    <group position={position}>
      {/* steunbenen: twee A-frames (voor/achter) */}
      {[0.6, -0.6].map((z, k) => (
        <group key={k}>
          <mesh castShadow position={[1.0, hubY / 2, z]} rotation={[0, 0, -0.32]}><cylinderGeometry args={[0.1, 0.13, hubY + 1.2, 8]} /><meshStandardMaterial color={staal} flatShading roughness={0.8} /></mesh>
          <mesh castShadow position={[-1.0, hubY / 2, z]} rotation={[0, 0, 0.32]}><cylinderGeometry args={[0.1, 0.13, hubY + 1.2, 8]} /><meshStandardMaterial color={staal} flatShading roughness={0.8} /></mesh>
        </group>
      ))}
      {/* as */}
      <mesh position={[0, hubY, 0]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.16, 0.16, 1.5, 12]} /><meshStandardMaterial color={staal} roughness={0.7} /></mesh>
      {/* draaiend wiel: twee ringen + spaken */}
      <group ref={wheel} position={[0, hubY, 0]}>
        {[0.55, -0.55].map((z, k) => (
          <mesh key={k} position={[0, 0, z]}><torusGeometry args={[R, 0.08, 8, 32]} /><meshStandardMaterial color={frame} flatShading roughness={0.8} /></mesh>
        ))}
        {spaken.map((a, i) => (
          <mesh key={i} rotation={[0, 0, a]} position={[0, 0, 0]}><boxGeometry args={[R * 2, 0.05, 0.05]} /><meshStandardMaterial color={frame} roughness={0.8} /></mesh>
        ))}
      </group>
      {/* gondels — rechtop, elke frame op hun rim-plek gezet */}
      {Array.from({ length: N }).map((_, i) => (
        <group key={i} ref={(el) => (gond.current[i] = el)}>
          <mesh castShadow position={[0, -0.05, 0]}><boxGeometry args={[0.62, 0.5, 0.95]} /><meshStandardMaterial color={SEAT_KLEUREN[i % SEAT_KLEUREN.length]} flatShading roughness={0.9} /></mesh>
          <mesh position={[0, 0.28, 0]}><boxGeometry args={[0.05, 0.3, 0.05]} /><meshStandardMaterial color={staal} roughness={0.8} /></mesh>
        </group>
      ))}
    </group>
  );
}

// Zweefmolen (procedureel) — een paal met een draaiend dak en stoeltjes aan
// kettingen die naar buiten zweven.
export function SwingRide({ position = [0, 0, 0] }) {
  const top = useRef();
  useFrame((_, dt) => { if (top.current) top.current.rotation.y += dt * 0.7; });
  const N = 8, topY = 3.6, R = 1.7;
  const hoeken = Array.from({ length: N }, (_, i) => (i / N) * Math.PI * 2);
  const paal = "#caa44a", dak = "#e2574c";
  return (
    <group position={position}>
      <mesh castShadow position={[0, topY / 2, 0]}><cylinderGeometry args={[0.18, 0.22, topY, 12]} /><meshStandardMaterial color={paal} flatShading roughness={0.8} /></mesh>
      <group ref={top} position={[0, topY, 0]}>
        <mesh castShadow position={[0, 0.1, 0]}><coneGeometry args={[1.9, 0.9, 16]} /><meshStandardMaterial color={dak} flatShading roughness={0.9} /></mesh>
        <mesh position={[0, -0.15, 0]}><cylinderGeometry args={[1.7, 1.7, 0.12, 16]} /><meshStandardMaterial color={paal} flatShading roughness={0.8} /></mesh>
        {hoeken.map((a, i) => (
          <group key={i} rotation={[0, a, 0]}>
            {/* ketting naar buiten gekanteld */}
            <mesh position={[R * 0.75, -0.7, 0]} rotation={[0, 0, -0.5]}><cylinderGeometry args={[0.02, 0.02, 1.5, 6]} /><meshStandardMaterial color="#777" roughness={0.6} /></mesh>
            <mesh castShadow position={[R, -1.35, 0]}><boxGeometry args={[0.4, 0.35, 0.4]} /><meshStandardMaterial color={SEAT_KLEUREN[i % SEAT_KLEUREN.length]} flatShading roughness={0.9} /></mesh>
          </group>
        ))}
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

export function Player({ inputRef, start = [0, 0, 13], isSolid, posRef, heightRef }) {
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
    const ty = heightRef?.current ? heightRef.current(pos.current.x, pos.current.z) : 0;
    node.position.set(pos.current.x, ty, pos.current.z);
    if (posRef) posRef.current.set(pos.current.x, ty, pos.current.z);
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

// Bezoekers: kleine figuurtjes die door het park wandelen. Ze krijgen een
// behoefte (honger/dorst/zin in ijs of popcorn) en gaan verlangen naar wat JIJ
// in je park aanbiedt — denkwolkje boven hun hoofd — lopen naar het bijbehorende
// kraampje en kopen iets, zodat jij muntjes verdient. Hoe hoger de prijs, hoe
// meer per stuk, maar bij een te hoge prijs haken bezoekers af (😖). Geen
// botsing; puur sfeer + verdienen.
const BEZOEKER_KLEUREN = ["#e2574c", "#4a90d9", "#f2b134", "#7bbf5a", "#b06ad8", "#e88a3c", "#3cb5a8"];

function koopKans(kind, prijs) {
  const fair = KRAAM_SOORTEN[kind]?.fair || 4;
  return Math.max(0.12, Math.min(1, 1.3 - prijs / (fair * 2)));
}

// Binnen welke straal (m) van jouw poppetje een bezoeker "gaat denken" (honger/
// zin krijgt). Mark-wens: het denken voornamelijk bij wie langs je poppetje loopt.
const DENK_STRAAL = 2.2;

function Visitor({ seed, standsRef, pricesRef, onBuy, heightRef, playerRef }) {
  const g = useRef();
  const legL = useRef(), legR = useRef(), coin = useRef();
  const [bubble, setBubble] = useState(null); // { e, t? }
  const st = useRef({
    x: ((seed % 7) - 3) * 5, z: (((seed * 3) % 7) - 3) * 5,
    tx: 0, tz: 0, rest: (seed % 3) * 0.7, resting: true, phase: seed,
    need: null, needT: 8 + (seed % 10), acting: false, coinT: -1, bt: 0,
  });
  const shirt = BEZOEKER_KLEUREN[seed % BEZOEKER_KLEUREN.length];
  const toon = (b, dur) => { setBubble(b); st.current.bt = dur; };

  useFrame((_, dt) => {
    const s = st.current; const node = g.current; if (!node) return;
    const stands = standsRef?.current || {};
    const prices = pricesRef?.current || {};

    // Denkwolkje vanzelf laten verdwijnen.
    if (s.bt > 0) { s.bt -= dt; if (s.bt <= 0) setBubble(null); }

    // Behoefte opwekken — voornamelijk bij bezoekers die vlak langs jouw poppetje
    // lopen (binnen DENK_STRAAL). Zo "denkt" niet het hele park tegelijk; je wekt
    // het zelf op door rond te lopen. Heel af en toe denkt iemand verderop ook.
    if (!s.need && !s.acting) {
      s.needT -= dt;
      if (s.needT <= 0) {
        const pp = playerRef?.current;
        const dichtbij = pp && Math.hypot(pp.x - s.x, pp.z - s.z) <= DENK_STRAAL;
        if (dichtbij || Math.random() < 0.12) {
          const beschikbaar = KRAAM_KEYS.filter((k) => (stands[k] || []).length);
          const pool = beschikbaar.length ? beschikbaar : KRAAM_KEYS;
          const kind = pool[Math.floor(Math.random() * pool.length)];
          const soort = KRAAM_SOORTEN[kind];
          const lijst = stands[kind] || [];
          if (lijst.length) {
            // Loop naar het dichtstbijzijnde passende kraampje.
            let best = lijst[0], bd = Infinity;
            for (const p of lijst) { const d = Math.hypot(p[0] - s.x, p[1] - s.z); if (d < bd) { bd = d; best = p; } }
            const dx = s.x - best[0], dz = s.z - best[1]; const dd = Math.hypot(dx, dz) || 1;
            s.tx = best[0] + (dx / dd) * 2.6; s.tz = best[1] + (dz / dd) * 2.6;
            s.need = kind; s.acting = true; s.resting = false;
            toon({ e: soort.cravingEmoji, t: soort.craving }, 4);
          } else {
            // Geen passend kraampje → bezoeker baalt even (hint om er een te kopen).
            toon({ e: soort.cravingEmoji, t: soort.craving }, 4);
            s.needT = 11 + Math.random() * 12;
          }
        } else {
          // Niet dichtbij jouw poppetje → nog even niet denken; snel opnieuw kijken.
          s.needT = 2 + Math.random() * 3;
        }
      }
    }

    // Wandelen / aankomen.
    if (s.resting) {
      s.rest -= dt;
      if (s.rest <= 0) { const a = Math.random() * Math.PI * 2; const r = 4 + Math.random() * 17; s.tx = Math.cos(a) * r; s.tz = Math.sin(a) * r; s.resting = false; }
    } else {
      const dx = s.tx - s.x, dz = s.tz - s.z; const d = Math.hypot(dx, dz);
      if (d < 0.18) {
        if (s.acting) {
          // Bij het kraampje: kopen? Goedkoop = bijna altijd; te duur = afhaken.
          const kind = s.need; const prijs = prices[kind] ?? (KRAAM_SOORTEN[kind]?.start || 4);
          if (Math.random() < koopKans(kind, prijs)) {
            onBuy && onBuy(kind, prijs);
            s.coinT = 0;
            toon({ e: "😋" }, 2.2);
          } else {
            toon({ e: "😖", t: "Te duur!" }, 2.2);
          }
          s.acting = false; s.need = null; s.needT = 13 + Math.random() * 13;
        }
        s.resting = true; s.rest = 1 + Math.random() * 2.5;
        if (legL.current) legL.current.rotation.x = 0; if (legR.current) legR.current.rotation.x = 0;
      } else {
        const speed = s.acting ? 2.2 : 1.7;
        const step = Math.min(d, dt * speed); s.x += (dx / d) * step; s.z += (dz / d) * step;
        node.rotation.y = Math.atan2(dx, dz);
        s.phase += dt * 10; const sw = Math.sin(s.phase) * 0.5;
        if (legL.current) legL.current.rotation.x = sw;
        if (legR.current) legR.current.rotation.x = -sw;
      }
    }
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
    <group ref={g} scale={0.78}>
      {bubble && (
        <Html position={[0, 2.4, 0]} center distanceFactor={9} zIndexRange={[5, 0]} style={{ pointerEvents: "none" }}>
          <div style={{ background: "#fff", borderRadius: 14, padding: "3px 10px", lineHeight: 1, boxShadow: "0 2px 7px rgba(0,0,0,.28)", userSelect: "none", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 20 }}>{bubble.e}</span>
            {bubble.t && <span style={{ fontSize: 12, fontWeight: 800, color: "#2a3340" }}>{bubble.t}</span>}
          </div>
        </Html>
      )}
      <group ref={legL} position={[-0.11, 0.55, 0]}><mesh castShadow position={[0, -0.28, 0]}><boxGeometry args={[0.16, 0.55, 0.16]} /><meshStandardMaterial color="#3a4a6b" flatShading roughness={1} /></mesh></group>
      <group ref={legR} position={[0.11, 0.55, 0]}><mesh castShadow position={[0, -0.28, 0]}><boxGeometry args={[0.16, 0.55, 0.16]} /><meshStandardMaterial color="#3a4a6b" flatShading roughness={1} /></mesh></group>
      <mesh castShadow position={[0, 0.85, 0]}><boxGeometry args={[0.46, 0.55, 0.28]} /><meshStandardMaterial color={shirt} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0, 1.32, 0]}><sphereGeometry args={[0.24, 14, 14]} /><meshStandardMaterial color="#f1c27d" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.43, 0]}><sphereGeometry args={[0.255, 14, 14, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshStandardMaterial color="#4a3525" flatShading roughness={1} /></mesh>
      {/* Muntje (verborgen tot een bezoeker iets koopt). */}
      <mesh ref={coin} position={[0, 1.9, 0]} rotation={[Math.PI / 2, 0, 0]} visible={false}>
        <cylinderGeometry args={[0.18, 0.18, 0.045, 18]} />
        <meshStandardMaterial color="#ffd23a" emissive="#8a6a00" emissiveIntensity={0.25} transparent metalness={0.3} roughness={0.5} />
      </mesh>
    </group>
  );
}

export function Visitors({ count = 4, standsRef, pricesRef, onBuy, heightRef, playerRef }) {
  return (
    <group>
      {Array.from({ length: count }).map((_, i) => <Visitor key={i} seed={i * 13 + 5} standsRef={standsRef} pricesRef={pricesRef} onBuy={onBuy} heightRef={heightRef} playerRef={playerRef} />)}
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
export function LosDier({ position = [0, 0, 0], assetId = "fox", babies = 0 }) {
  return (
    <group position={position}>
      <ZooModel assetId={assetId} position={[0, 0, 0]} rotation={0} wander={DIER_STRAAL} />
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
  const grijs = "#8f8c87", grijs2 = "#7b7874", grijs3 = "#9b9893";
  if (variant === "group") {
    return (
      <group position={position} rotation={[0, rotation, 0]}>
        <mesh castShadow receiveShadow position={[-0.42, 0.28, 0.12]} rotation={[0.3, 0.5, 0.2]}><icosahedronGeometry args={[0.5, 0]} /><meshStandardMaterial color={grijs} flatShading roughness={1} metalness={0} /></mesh>
        <mesh castShadow receiveShadow position={[0.46, 0.2, -0.22]} rotation={[0.5, 1.1, 0.1]}><icosahedronGeometry args={[0.38, 0]} /><meshStandardMaterial color={grijs2} flatShading roughness={1} metalness={0} /></mesh>
        <mesh castShadow receiveShadow position={[0.12, 0.16, 0.5]} rotation={[0.2, 0.3, 0.45]}><icosahedronGeometry args={[0.3, 0]} /><meshStandardMaterial color={grijs3} flatShading roughness={1} metalness={0} /></mesh>
      </group>
    );
  }
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow receiveShadow position={[0, 0.52, 0]} rotation={[0.25, 0.6, 0.15]} scale={[1.15, 0.85, 1]}><icosahedronGeometry args={[0.9, 0]} /><meshStandardMaterial color={grijs} flatShading roughness={1} metalness={0} /></mesh>
      <mesh castShadow receiveShadow position={[0.52, 0.22, 0.34]} rotation={[0.4, 0.2, 0.5]}><icosahedronGeometry args={[0.4, 0]} /><meshStandardMaterial color={grijs2} flatShading roughness={1} metalness={0} /></mesh>
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
  const g1 = "#4e8a3a", g2 = "#5fa047", g3 = "#6fb053";
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow receiveShadow position={[-0.3, 0.36, 0.1]}><icosahedronGeometry args={[0.46, 0]} /><meshStandardMaterial color={g1} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0.33, 0.3, -0.12]}><icosahedronGeometry args={[0.38, 0]} /><meshStandardMaterial color={g2} flatShading roughness={1} /></mesh>
      <mesh castShadow position={[0.05, 0.46, 0.3]}><icosahedronGeometry args={[0.34, 0]} /><meshStandardMaterial color={g3} flatShading roughness={1} /></mesh>
    </group>
  );
}

// Varen/graspol (procedureel) — een paar smalle bladeren die naar buiten waaieren.
export function Fern({ position = [0, 0, 0], rotation = 0 }) {
  const groen = "#5a9c3f", groen2 = "#6fb24a";
  const blades = [[0, 0, 0], [0.35, 0.25, 0.4], [-0.35, -0.2, -0.35], [0.2, 0.55, -0.3], [-0.25, 0.5, 0.35]];
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {blades.map(([rx, rz, yaw], i) => (
        <mesh key={i} castShadow position={[0, 0.45, 0]} rotation={[rx, yaw, rz]}>
          <coneGeometry args={[0.09, 0.95, 5]} />
          <meshStandardMaterial color={i % 2 ? groen2 : groen} flatShading roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

// Boomstronk (procedureel) — een afgezaagde stam met lichter hout op de snede.
export function Stump({ position = [0, 0, 0], rotation = 0 }) {
  const bast = "#6b4a2b", hout = "#b89160";
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh castShadow receiveShadow position={[0, 0.3, 0]}><cylinderGeometry args={[0.4, 0.46, 0.6, 10]} /><meshStandardMaterial color={bast} flatShading roughness={1} /></mesh>
      <mesh position={[0, 0.605, 0]}><cylinderGeometry args={[0.38, 0.38, 0.04, 10]} /><meshStandardMaterial color={hout} roughness={1} /></mesh>
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

// Patatkraam (procedureel) — een vrolijk snackkraam met gestreepte luifel.
export function PatatKraam({ position = [0, 0, 0] }) {
  const hout = "#caa44a";
  return (
    <group position={[position[0], 0, position[2]]}>
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
export function DrankKraam({ position = [0, 0, 0] }) {
  const hout = "#caa44a";
  return (
    <group position={[position[0], 0, position[2]]}>
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
export function IJsKraam({ position = [0, 0, 0] }) {
  const hout = "#caa44a";
  return (
    <group position={[position[0], 0, position[2]]}>
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
export function PopcornKraam({ position = [0, 0, 0] }) {
  const hout = "#caa44a";
  return (
    <group position={[position[0], 0, position[2]]}>
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
