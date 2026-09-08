// 🚗 Auto's op het weggetje bij de bushalte (Mark 8 sep 2026: "er staan opeens
// auto's in het spel — kun je die mooier maken en instapbaar en berijdbaar?").
// De drie blokkerige decor-autootjes uit Buitenwereld zijn vervangen door
// echte auto's: carrosserie met motorkap, cabine met ramen, koplampen,
// achterlichten, bumpers, spiegels en wielen die meedraaien. Sta je ernaast →
// "Instappen" → je rijdt zelf: joystick/pijltjes = sturen en gas (omlaag =
// achteruit), 📣 = toeteren, 🅿️ = uitstappen. De auto volgt het terrein (helling
// en kanteling), botst op dezelfde vaste dingen als het poppetje (isSolid),
// blijft op het eiland en weigert hellingen steiler dan ~25°: het is een auto,
// geen bergbeklimmer. Zelfde instap-patroon als zeppelin/kabelbaan/slee:
// poppetje verborgen tijdens de rit (onRit), achtervolg-camera in de laatste
// useFrame (wint door mount-volgorde), uitstappen zet je naast de auto
// (teleportRef → Player).
import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { inZee, KUST_R } from "./eilandVorm";
import { LeerBord } from "./ParkLeerobjecten";
import { track } from "../../utils.js";

// ── waar ze staan (wereld-coördinaten; het weggetje loopt op x≈0, z 156→260) ──
// heading 0 = neus naar +z (van het park af), π = neus naar het park.
export const AUTOS = [
  { id: "rood", x: -3.6, z: 228, heading: Math.PI, kleur: "#d9463b", accent: "#8e2a22" },
  { id: "blauw", x: 3.6, z: 196, heading: 0, kleur: "#3b7dd8", accent: "#244f8e" },
  { id: "geel", x: -3.6, z: 252, heading: Math.PI, kleur: "#f0b429", accent: "#b07f14" },
];
export const AUTO_PLEK = { x: AUTOS[0].x, z: AUTOS[0].z };

const V_MAX = 14;            // m/s ≈ 50 km/u — vlot, maar nog te volgen voor een kind
const V_ACHTERUIT = 4;
const ACCEL = 6, REM = 11, ROL = 3;
const STUUR = 1.6;           // rad/s bij volle snelheid
const LENGTE = 4.3, BREED = 1.95;
const MAX_HELLING = 0.45;    // rad (~25°): steiler = de auto komt niet omhoog

const GLAS = new MeshStandardMaterial({ color: "#9fd3f5", roughness: 0.1, metalness: 0.3, transparent: true, opacity: 0.6 });
const RUBBER = new MeshStandardMaterial({ color: "#1e2226", roughness: 1 });
const VELG = new MeshStandardMaterial({ color: "#c9ced4", roughness: 0.35, metalness: 0.7 });
const CHROOM = new MeshStandardMaterial({ color: "#aeb6be", roughness: 0.3, metalness: 0.8 });
const BUMPER = new MeshStandardMaterial({ color: "#2c3136", roughness: 0.8 });
const KOPLAMP = new MeshStandardMaterial({ color: "#fff8d6", emissive: "#fff1b0", emissiveIntensity: 0.9, roughness: 0.3 });
const ACHTERLICHT = new MeshStandardMaterial({ color: "#ff3b2f", emissive: "#d81e12", emissiveIntensity: 0.7, roughness: 0.4 });
const KENTEKEN = new MeshStandardMaterial({ color: "#ffd23f", roughness: 0.7 });
const INTERIEUR = new MeshStandardMaterial({ color: "#3a3f45", roughness: 0.95 });

// 📣 een vrolijke tweetonige toeter (WebAudio, alleen na een tik = gebruikersgebaar)
let audioCtx = null;
function toeter() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const c = audioCtx, t0 = c.currentTime;
    const gain = c.createGain(); gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(0.18, t0 + 0.02);
    gain.gain.setValueAtTime(0.18, t0 + 0.28);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.42);
    gain.connect(c.destination);
    for (const f of [392, 494]) { const o = c.createOscillator(); o.type = "square"; o.frequency.value = f; o.connect(gain); o.start(t0); o.stop(t0 + 0.45); }
  } catch { /* geen geluid = geen ramp */ }
}

// 🚘 het model: neus naar +z. Wielen krijgen refs zodat ze kunnen draaien/sturen.
function AutoModel({ kleur, accent, wielRefs, voorRefs }) {
  const lak = useMemo(() => new MeshStandardMaterial({ color: kleur, roughness: 0.35, metalness: 0.25 }), [kleur]);
  const donker = useMemo(() => new MeshStandardMaterial({ color: accent, roughness: 0.5, metalness: 0.2 }), [accent]);
  const wiel = (x, z, i, voor) => (
    <group key={i} position={[x, 0.42, z]} ref={(el) => { if (voor) voorRefs.current[i] = el; }}>
      <group ref={(el) => { wielRefs.current[i] = el; }}>
        <mesh rotation={[0, 0, Math.PI / 2]} material={RUBBER} castShadow><cylinderGeometry args={[0.42, 0.42, 0.3, 18]} /></mesh>
        <mesh rotation={[0, 0, Math.PI / 2]} position={[x > 0 ? 0.16 : -0.16, 0, 0]} material={VELG}><cylinderGeometry args={[0.26, 0.26, 0.02, 12]} /></mesh>
        <mesh rotation={[0, 0, Math.PI / 2]} position={[x > 0 ? 0.17 : -0.17, 0, 0]} material={BUMPER}><cylinderGeometry args={[0.08, 0.08, 0.03, 8]} /></mesh>
      </group>
    </group>
  );
  return (
    <group>
      {/* onderstel + carrosserie */}
      <mesh position={[0, 0.62, 0]} material={lak} castShadow><boxGeometry args={[BREED, 0.6, LENGTE]} /></mesh>
      {/* motorkap loopt iets af naar de neus */}
      <mesh position={[0, 0.98, 1.35]} rotation={[0.08, 0, 0]} material={lak} castShadow><boxGeometry args={[BREED - 0.12, 0.16, 1.5]} /></mesh>
      {/* cabine (iets naar achteren) met donkere stijlen */}
      <mesh position={[0, 1.28, -0.35]} material={donker} castShadow><boxGeometry args={[BREED - 0.3, 0.72, 2.0]} /></mesh>
      {/* ramen: voorruit schuin, zijruiten, achterruit */}
      <mesh position={[0, 1.3, 0.72]} rotation={[-0.42, 0, 0]} material={GLAS}><boxGeometry args={[BREED - 0.42, 0.62, 0.06]} /></mesh>
      <mesh position={[0, 1.34, -1.36]} rotation={[0.5, 0, 0]} material={GLAS}><boxGeometry args={[BREED - 0.5, 0.55, 0.06]} /></mesh>
      {[-1, 1].map((k) => (
        <mesh key={`zij${k}`} position={[k * (BREED / 2 - 0.13), 1.33, -0.3]} material={GLAS}><boxGeometry args={[0.04, 0.5, 1.5]} /></mesh>
      ))}
      {/* dak */}
      <mesh position={[0, 1.67, -0.35]} material={lak} castShadow><boxGeometry args={[BREED - 0.26, 0.08, 1.9]} /></mesh>
      {/* stoelen + stuur (zichtbaar door de ramen) */}
      <mesh position={[-0.42, 1.1, -0.2]} material={INTERIEUR}><boxGeometry args={[0.5, 0.5, 0.5]} /></mesh>
      <mesh position={[0.42, 1.1, -0.2]} material={INTERIEUR}><boxGeometry args={[0.5, 0.5, 0.5]} /></mesh>
      <mesh position={[-0.42, 1.22, 0.4]} rotation={[0.9, 0, 0]} material={BUMPER}><torusGeometry args={[0.16, 0.025, 8, 16]} /></mesh>
      {/* bumpers */}
      <mesh position={[0, 0.42, LENGTE / 2 + 0.03]} material={BUMPER}><boxGeometry args={[BREED + 0.04, 0.22, 0.14]} /></mesh>
      <mesh position={[0, 0.42, -LENGTE / 2 - 0.03]} material={BUMPER}><boxGeometry args={[BREED + 0.04, 0.22, 0.14]} /></mesh>
      {/* grille + koplampen */}
      <mesh position={[0, 0.72, LENGTE / 2 + 0.02]} material={BUMPER}><boxGeometry args={[0.7, 0.18, 0.05]} /></mesh>
      {[-1, 1].map((k) => (
        <mesh key={`kop${k}`} position={[k * 0.68, 0.74, LENGTE / 2 + 0.03]} material={KOPLAMP}><boxGeometry args={[0.34, 0.2, 0.06]} /></mesh>
      ))}
      {/* achterlichten + kenteken */}
      {[-1, 1].map((k) => (
        <mesh key={`ach${k}`} position={[k * 0.7, 0.76, -LENGTE / 2 - 0.03]} material={ACHTERLICHT}><boxGeometry args={[0.3, 0.16, 0.06]} /></mesh>
      ))}
      <mesh position={[0, 0.66, -LENGTE / 2 - 0.04]} material={KENTEKEN}><boxGeometry args={[0.5, 0.12, 0.02]} /></mesh>
      {/* spiegels + sierlijst */}
      {[-1, 1].map((k) => (
        <mesh key={`sp${k}`} position={[k * (BREED / 2 + 0.1), 1.22, 0.55]} material={donker}><boxGeometry args={[0.16, 0.1, 0.08]} /></mesh>
      ))}
      <mesh position={[0, 0.5, 0]} material={CHROOM}><boxGeometry args={[BREED + 0.02, 0.03, LENGTE - 0.4]} /></mesh>
      {/* wielen: voor (sturen mee) + achter */}
      {wiel(-BREED / 2 - 0.02, 1.35, 0, true)}
      {wiel(BREED / 2 + 0.02, 1.35, 1, true)}
      {wiel(-BREED / 2 - 0.02, -1.35, 2, false)}
      {wiel(BREED / 2 + 0.02, -1.35, 3, false)}
    </group>
  );
}

function Auto({ def, actief, playerRef, heightRef, isSolid, inputRef, teleportRef, onRit, onActief }) {
  const g = useRef();
  const wielRefs = useRef([]), voorRefs = useRef([]);
  const st = useRef({ x: def.x, z: def.z, h: def.heading, v: 0, stuur: 0, aanBoord: false });
  const [knop, setKnop] = useState(false);
  const [rijdt, setRijdt] = useState(false);
  const acc = useRef(0);
  const vaartDom = useRef(null);
  const grond = (x, z) => (heightRef?.current ? heightRef.current(x, z) : 0);
  const vrij = (x, z) => !(isSolid && isSolid(x, z)) && !inZee(x, z) && Math.hypot(x, z) < KUST_R + 2;

  const stapIn = (e) => {
    e?.stopPropagation?.();
    const o = st.current; if (o.aanBoord) return;
    o.aanBoord = true; o.v = 0; setKnop(false); setRijdt(true);
    onActief && onActief(def.id); onRit && onRit(true);
    try { track("park_auto_rit", { auto: def.id }); } catch { /* */ }
  };
  const stapUit = () => {
    const o = st.current; if (!o.aanBoord) return;
    o.aanBoord = false; o.v = 0; setRijdt(false);
    // naast de auto, aan de linkerkant (bestuurderskant), camera kijkt in de rijrichting
    const lx = Math.cos(o.h), lz = -Math.sin(o.h);
    let ux = o.x + lx * 2.4, uz = o.z + lz * 2.4;
    if (!vrij(ux, uz)) { ux = o.x - lx * 2.4; uz = o.z - lz * 2.4; }
    if (teleportRef) teleportRef.current = { x: ux, z: uz };
    if (inputRef?.current?.cam) { inputRef.current.cam.yaw = o.h; inputRef.current.cam.pitch = 0.12; inputRef.current.cam.dist = 10; }
    onActief && onActief(null); onRit && onRit(false);
  };

  useFrame((s, dtRaw) => {
    const dt = Math.min(0.05, dtRaw);
    const o = st.current;
    const m = g.current; if (!m) return;
    if (o.aanBoord) {
      const inp = inputRef?.current || {};
      const k = inp.keys || {};
      let mx = (k.ArrowRight || k.KeyD ? 1 : 0) - (k.ArrowLeft || k.KeyA ? 1 : 0) + (inp.joy?.x || 0);
      let my = (k.ArrowDown || k.KeyS ? 1 : 0) - (k.ArrowUp || k.KeyW ? 1 : 0) + (inp.joy?.y || 0);
      mx = Math.max(-1, Math.min(1, mx)); my = Math.max(-1, Math.min(1, my));
      // gas/rem: joystick omhoog = vooruit, omlaag = remmen en daarna achteruit
      const doel = my < 0 ? -my * V_MAX : my > 0 ? -my * V_ACHTERUIT : 0;
      const rate = Math.sign(doel) !== Math.sign(o.v) && o.v !== 0 ? REM : doel === 0 ? ROL : ACCEL;
      o.v = o.v < doel ? Math.min(doel, o.v + rate * dt) : Math.max(doel, o.v - rate * dt);
      // sturen: alleen als je rijdt, achteruit draait de neus de andere kant op
      o.stuur += (mx * 0.5 - o.stuur) * Math.min(1, dt * 8);
      o.h -= mx * STUUR * dt * Math.max(-1, Math.min(1, o.v / (V_MAX * 0.6)));
      // botsen / te steil / zee: niet verder
      const fx = Math.sin(o.h), fz = Math.cos(o.h);
      const nx = o.x + fx * o.v * dt, nz = o.z + fz * o.v * dt;
      const richting = Math.sign(o.v) || 1;
      const px = nx + fx * richting * (LENGTE / 2 + 0.3), pz = nz + fz * richting * (LENGTE / 2 + 0.3);
      const hVoor = grond(nx + fx * LENGTE / 2, nz + fz * LENGTE / 2), hAchter = grond(nx - fx * LENGTE / 2, nz - fz * LENGTE / 2);
      const helling = Math.atan2(hVoor - hAchter, LENGTE) * richting;
      if (!vrij(px, pz) || helling > MAX_HELLING) { o.v = -o.v * 0.15; }
      else { o.x = nx; o.z = nz; }
      if (vaartDom.current) vaartDom.current.textContent = `${Math.abs(Math.round(o.v * 3.6))} km/u`;
    } else if (o.v !== 0) {
      o.v = Math.abs(o.v) < 0.05 ? 0 : o.v - Math.sign(o.v) * ROL * dt;
    }
    // op het terrein zetten: hoogte, helling (pitch) en kanteling (roll)
    const fx = Math.sin(o.h), fz = Math.cos(o.h), lx = Math.cos(o.h), lz = -Math.sin(o.h);
    const hV = grond(o.x + fx * 1.4, o.z + fz * 1.4), hA = grond(o.x - fx * 1.4, o.z - fz * 1.4);
    const hL = grond(o.x + lx * 0.9, o.z + lz * 0.9), hR = grond(o.x - lx * 0.9, o.z - lz * 0.9);
    m.position.set(o.x, (hV + hA + hL + hR) / 4 + 0.02, o.z);
    m.rotation.set(0, o.h, 0);
    m.rotateX(-Math.atan2(hV - hA, 2.8));
    m.rotateZ(Math.atan2(hL - hR, 1.8));
    // wielen draaien mee, voorwielen sturen
    const spin = o.v * dt / 0.42;
    wielRefs.current.forEach((w) => { if (w) w.rotation.x += spin; });
    voorRefs.current.forEach((w) => { if (w) w.rotation.y = -o.stuur; });
    // 🎥 achtervolg-camera tijdens de rit (laatste useFrame → wint)
    if (o.aanBoord) {
      const cy = m.position.y;
      s.camera.position.set(o.x - fx * 10, cy + 4.2, o.z - fz * 10);
      s.camera.lookAt(o.x + fx * 6, cy + 1.0, o.z + fz * 6);
    }
    // instapknop: auto staat stil, niemand rijdt, en je staat ernaast (≤ 6 m)
    acc.current += dt;
    if (acc.current > 0.3) {
      acc.current = 0;
      let wil = false;
      if (!o.aanBoord && !actief && playerRef?.current) {
        const p = playerRef.current;
        wil = Math.hypot(p.x - o.x, p.z - o.z) < 6;
      }
      if (wil !== knop) setKnop(wil);
    }
  });

  const knopStijl = { pointerEvents: "auto", border: "none", borderRadius: 12, padding: "10px 14px", font: "900 15px system-ui", color: "#fff", background: "#3a4754", cursor: "pointer", touchAction: "none" };
  return (
    <>
    <group ref={g}>
      <AutoModel kleur={def.kleur} accent={def.accent} wielRefs={wielRefs} voorRefs={voorRefs} />
      {knop && (
        <Html position={[0, 2.6, 0]} center distanceFactor={16} zIndexRange={[9, 0]}>
          <button onClick={stapIn} style={{ pointerEvents: "auto", border: "3px solid #fff", borderRadius: 999, padding: "12px 24px", font: "900 17px system-ui", color: "#fff", background: `linear-gradient(135deg,${def.kleur},${def.accent})`, boxShadow: "0 5px 18px rgba(0,0,0,.45)", cursor: "pointer", whiteSpace: "nowrap" }}>
            🚗 Instappen
          </button>
        </Html>
      )}
    </group>
      {/* het dashboard staat bewust BUITEN de auto-groep: die kantelt mee met het terrein */}
      {rijdt && (
        <Html fullscreen zIndexRange={[11, 0]} style={{ pointerEvents: "none" }} calculatePosition={(_el, _cam, size) => [size.width / 2, size.height / 2]}>
          <div style={{ position: "absolute", left: "50%", bottom: "calc(14px + env(safe-area-inset-bottom))", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 10, background: "linear-gradient(180deg,#2a3440,#1d252e)", border: "2px solid #46525f", borderRadius: 18, padding: "10px 14px", boxShadow: "0 10px 32px rgba(0,0,0,.45)", pointerEvents: "auto" }}>
            <div style={{ textAlign: "center", minWidth: 80 }}>
              <div style={{ font: "700 10px system-ui", color: "#8fa0b0", letterSpacing: 1 }}>SNELHEID</div>
              <div ref={vaartDom} style={{ font: "900 17px ui-monospace, monospace", color: "#7bc6ff" }}>0 km/u</div>
            </div>
            <button style={knopStijl} onClick={toeter}>📣<br /><span style={{ font: "700 9px system-ui" }}>toeter</span></button>
            <button onClick={stapUit} style={{ ...knopStijl, background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)" }}>🅿️<br /><span style={{ font: "700 9px system-ui" }}>uitstappen</span></button>
            <div style={{ font: "700 10.5px/1.35 system-ui", color: "#8fa0b0", maxWidth: 120 }}>Joystick of pijltjes = sturen en gas · omlaag = achteruit</div>
          </div>
        </Html>
      )}
    </>
  );
}

export default function Autos({ playerRef, heightRef, isSolid, inputRef, teleportRef, onRit, onOefenen }) {
  const [actief, setActief] = useState(null);
  const bord = { x: 7.2, z: 214 };
  return (
    <group>
      {AUTOS.map((a) => (
        <Auto key={a.id} def={a} actief={actief} onActief={setActief} playerRef={playerRef} heightRef={heightRef} isSolid={isSolid} inputRef={inputRef} teleportRef={teleportRef} onRit={onRit} />
      ))}
      {/* 🎓 leerbord bij de parkeerplek: snelheid, afstand en remmen */}
      {onOefenen ? <LeerBord moment="auto" onOefenen={onOefenen} position={[bord.x, heightRef?.current ? heightRef.current(bord.x, bord.z) : 0, bord.z]} /> : null}
    </group>
  );
}
