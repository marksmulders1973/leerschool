// 🚠 Kabelbaan (Mark 6 sep 2026, WhatsApp-plan: "een kabelbaan naar boven"):
// van het dalstation aan de voet van de vulkaan naar het bergstation vlak onder
// de kraterrand, boven de sneeuwgrens. Eén gondel pendelt: ~18 s wachten met de
// deur open, ~40 s omhoog, wachten, ~40 s omlaag. Sta je bij een wachtende
// gondel, dan verschijnt "Instappen" — je poppetje stapt in (verborgen), de
// camera hangt achter de gondel, en bij aankomst sta je op het perron van het
// andere station (teleportRef → Player). Zelfde instap-patroon als de zeppelin,
// maar zonder besturing: dit is meerijden en kijken.
//
// Alles staat op één lijn (de "kabelbaan-straal" vanuit het vulkaanmidden):
// dalstation r=98 · mast r=74 · mast r=50 · bergstation r=26. De kabel is een
// rechte lijn met een lichte doorzakking en ligt overal ruim boven de flank.
import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Vector3, CatmullRomCurve3, TubeGeometry, MeshStandardMaterial } from "three";
import { VULKAAN, buitenHoogte } from "./eilandVorm";
import { LeerBord } from "./ParkLeerobjecten";
import { track } from "../../utils.js";

// ── ligging ──
const PHI0 = Math.atan2(-VULKAAN.z, -VULKAAN.x);   // richting vulkaan → parkmidden
export const KABEL_PHI = PHI0 - 0.5;                 // de kabelbaan-straal
const opStraal = (r) => ({ x: VULKAAN.x + Math.cos(KABEL_PHI) * r, z: VULKAAN.z + Math.sin(KABEL_PHI) * r });
const R_DAL = 98, R_BERG = 26, R_MASTEN = [74, 50];
const KABEL_HOOG = 6.6;                              // kabel hangt zo hoog boven het perron
export const KABEL_DAL = (() => { const p = opStraal(R_DAL); return { ...p, y: buitenHoogte(p.x, p.z) }; })();
export const KABEL_BERG = (() => { const p = opStraal(R_BERG); return { ...p, y: buitenHoogte(p.x, p.z) }; })();
const P0 = new Vector3(KABEL_DAL.x, KABEL_DAL.y + KABEL_HOOG, KABEL_DAL.z);
const P1 = new Vector3(KABEL_BERG.x, KABEL_BERG.y + KABEL_HOOG, KABEL_BERG.z);
const ZAK = 2.4;
const kabelPunt = (u, out = new Vector3()) => out.copy(P0).lerp(P1, u).setY(P0.y + (P1.y - P0.y) * u - ZAK * 4 * u * (1 - u));
// dwars op de straal (het perron ligt naast de gondel)
const DWARS = { x: -Math.sin(KABEL_PHI), z: Math.cos(KABEL_PHI) };
const RICHT = { x: Math.cos(KABEL_PHI), z: Math.sin(KABEL_PHI) }; // van berg naar dal (r groter)

const WACHT_S = 18, RIT_S = 40;
const HANG = 2.9;                                    // cabinemidden hangt zo ver onder de kabel
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

const STAAL = new MeshStandardMaterial({ color: "#3c434b", roughness: 0.5, metalness: 0.7 });
const KABEL_MAT = new MeshStandardMaterial({ color: "#2b2f34", roughness: 0.6, metalness: 0.8 });
const CABINE = new MeshStandardMaterial({ color: "#2f6fd6", roughness: 0.45, metalness: 0.1 });
const CABINE_DAK = new MeshStandardMaterial({ color: "#ffcf3d", roughness: 0.55 });
const RAAM = new MeshStandardMaterial({ color: "#a9d6ff", roughness: 0.15, metalness: 0.2, transparent: true, opacity: 0.55 });
const PERRON = new MeshStandardMaterial({ color: "#9aa4ae", roughness: 0.9 });
const HOUT = new MeshStandardMaterial({ color: "#7a5230", roughness: 0.9, flatShading: true });

function Station({ p, naam }) {
  const hoog = KABEL_HOOG - 0.3;
  return (
    <group position={[p.x, p.y, p.z]}>
      {/* perron */}
      <mesh position={[0, 0.06, 0]} material={PERRON} receiveShadow><cylinderGeometry args={[4.6, 4.9, 0.12, 20]} /></mesh>
      {/* de portaal-pyloon waar de kabel aan hangt */}
      {[-1, 1].map((k) => (
        <mesh key={k} position={[DWARS.x * k * 2.2, hoog / 2, DWARS.z * k * 2.2]} material={STAAL} castShadow><boxGeometry args={[0.36, hoog, 0.36]} /></mesh>
      ))}
      <mesh position={[0, hoog, 0]} rotation={[0, -KABEL_PHI, 0]} material={STAAL} castShadow><boxGeometry args={[0.4, 0.4, 5.0]} /></mesh>
      {/* afdakje boven het perron */}
      <mesh position={[0, hoog + 0.55, 0]} rotation={[0, -KABEL_PHI, 0]} material={CABINE_DAK} castShadow><boxGeometry args={[5.2, 0.14, 6.4]} /></mesh>
      <Html position={[0, hoog + 1.4, 0]} center distanceFactor={22} zIndexRange={[6, 0]}>
        <div style={{ font: "900 14px system-ui", color: "#fff", background: "#2f6fd6", border: "2px solid #fff", borderRadius: 999, padding: "4px 12px", whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,.35)" }}>🚠 {naam}</div>
      </Html>
    </group>
  );
}

function Mast({ r }) {
  const p = opStraal(r);
  const grond = buitenHoogte(p.x, p.z);
  const u = (R_DAL - r) / (R_DAL - R_BERG);
  const top = kabelPunt(u).y - 0.35;
  const hoog = top - grond;
  return (
    <group position={[p.x, grond, p.z]}>
      <mesh position={[0, hoog / 2, 0]} material={STAAL} castShadow><cylinderGeometry args={[0.28, 0.5, hoog, 8]} /></mesh>
      <mesh position={[0, hoog, 0]} rotation={[0, -KABEL_PHI, 0]} material={STAAL}><boxGeometry args={[0.3, 0.3, 2.2]} /></mesh>
      {/* het kabelzadel */}
      <mesh position={[0, hoog + 0.2, 0]} material={STAAL}><cylinderGeometry args={[0.32, 0.32, 0.5, 10]} /></mesh>
    </group>
  );
}

export default function Kabelbaan({ playerRef, onRit, teleportRef, onOefenen, inputRef }) {
  const gondel = useRef();
  const fase = useRef({ naam: "dal", t0: null });     // dal | op | berg | neer
  const uRef = useRef(0);                              // 0 = dal, 1 = berg
  const aanBoord = useRef(false);
  const [knop, setKnop] = useState(null);              // 'dal' | 'berg' → bij welk station de instapknop staat
  const acc = useRef(0);
  const tmp = useMemo(() => new Vector3(), []);
  const kabelGeo = useMemo(() => {
    const pts = []; for (let i = 0; i <= 32; i++) pts.push(kabelPunt(i / 32));
    return new TubeGeometry(new CatmullRomCurve3(pts), 48, 0.07, 6, false);
  }, []);

  const stapIn = (e) => {
    e?.stopPropagation?.();
    if (aanBoord.current) return;
    aanBoord.current = true;
    setKnop(null);
    // niet meer wachten: de gondel vertrekt meteen
    fase.current = { naam: fase.current.naam === "dal" ? "op" : "neer", t0: null };
    onRit && onRit(true);
    try { track("park_kabelbaan_rit", { van: fase.current.naam === "op" ? "dal" : "berg" }); } catch { /* */ }
  };

  useFrame((s, dtRaw) => {
    const dt = Math.min(0.05, dtRaw);
    const t = s.clock.elapsedTime;
    const f = fase.current;
    if (f.t0 == null) f.t0 = t;
    const u0 = t - f.t0;
    if (f.naam === "dal") { uRef.current = 0; if (u0 > WACHT_S && !aanBoord.current) fase.current = { naam: "op", t0: t }; }
    else if (f.naam === "berg") { uRef.current = 1; if (u0 > WACHT_S && !aanBoord.current) fase.current = { naam: "neer", t0: t }; }
    else {
      const k = Math.min(1, u0 / RIT_S);
      uRef.current = f.naam === "op" ? ease(k) : 1 - ease(k);
      if (k >= 1) {
        const aangekomen = f.naam === "op" ? "berg" : "dal";
        fase.current = { naam: aangekomen, t0: t };
        if (aanBoord.current) {
          // uitstappen op het perron, naast de gondel
          const st = aangekomen === "berg" ? KABEL_BERG : KABEL_DAL;
          const ux = st.x + DWARS.x * 2.6, uz = st.z + DWARS.z * 2.6;
          if (teleportRef) teleportRef.current = { x: ux, z: uz };
          // camera aan de dal-kant (van de vulkaan af): op de steile flank kijk je anders ín de berg
          if (inputRef?.current?.cam) { inputRef.current.cam.yaw = Math.atan2(VULKAAN.x - ux, VULKAAN.z - uz); inputRef.current.cam.pitch = 0.14; inputRef.current.cam.dist = 12; }
          aanBoord.current = false;
          onRit && onRit(false);
        }
      }
    }
    // gondel op de kabel
    kabelPunt(uRef.current, tmp);
    const g = gondel.current;
    if (g) {
      g.position.set(tmp.x, tmp.y, tmp.z);
      g.rotation.y = -KABEL_PHI;
      // een klein zwaaitje tijdens het rijden
      const rijdt = f.naam === "op" || f.naam === "neer";
      g.rotation.z = rijdt ? Math.sin(t * 1.7) * 0.025 : 0;
    }
    // 🎥 aan boord: camera achter de gondel, kijkt de rijrichting in
    if (aanBoord.current) {
      const naarBerg = f.naam === "op";
      const dx = naarBerg ? -RICHT.x : RICHT.x, dz = naarBerg ? -RICHT.z : RICHT.z;
      const cy = tmp.y - HANG + 0.4;
      s.camera.position.set(tmp.x - dx * 13 - DWARS.x * 3, cy + 4.5, tmp.z - dz * 13 - DWARS.z * 3);
      s.camera.lookAt(tmp.x + dx * 8, cy - 1.5, tmp.z + dz * 8);
    }
    // instapknop: alleen bij een wachtende gondel én als je er dichtbij staat (≤ 18 m)
    acc.current += dt;
    if (acc.current > 0.3) {
      acc.current = 0;
      let wil = null;
      if (!aanBoord.current && (f.naam === "dal" || f.naam === "berg") && playerRef?.current) {
        const p = playerRef.current;
        const d = Math.hypot(p.x - tmp.x, p.z - tmp.z);
        if (d < 18) wil = f.naam;
      }
      if (wil !== knop) setKnop(wil);
    }
  });

  return (
    <group>
      <Station p={KABEL_DAL} naam="Dalstation" />
      <Station p={KABEL_BERG} naam="Bergstation" />
      {R_MASTEN.map((r) => <Mast key={r} r={r} />)}
      <mesh geometry={kabelGeo} material={KABEL_MAT} />
      {/* 🚠 de gondel */}
      <group ref={gondel}>
        {/* loopwerk + hangarm */}
        <mesh position={[0, -0.1, 0]} material={STAAL}><boxGeometry args={[0.5, 0.35, 1.1]} /></mesh>
        <mesh position={[0, -HANG / 2 + 0.6, 0]} material={STAAL}><boxGeometry args={[0.16, HANG - 1.0, 0.16]} /></mesh>
        <group position={[0, -HANG, 0]}>
          <mesh material={CABINE} castShadow><boxGeometry args={[2.2, 2.1, 2.4]} /></mesh>
          <mesh position={[0, 1.1, 0]} material={CABINE_DAK}><boxGeometry args={[2.4, 0.16, 2.6]} /></mesh>
          {/* ramen rondom */}
          <mesh position={[0, 0.35, 0]} material={RAAM}><boxGeometry args={[2.26, 0.9, 2.46]} /></mesh>
          {/* bankjes binnen */}
          <mesh position={[0, -0.55, -0.85]} material={HOUT}><boxGeometry args={[1.8, 0.16, 0.5]} /></mesh>
          <mesh position={[0, -0.55, 0.85]} material={HOUT}><boxGeometry args={[1.8, 0.16, 0.5]} /></mesh>
        </group>
        {knop && (
          <Html position={[0, -HANG + 1.9, 0]} center distanceFactor={16} zIndexRange={[9, 0]}>
            <button onClick={stapIn} style={{ pointerEvents: "auto", border: "3px solid #fff", borderRadius: 999, padding: "12px 24px", font: "900 17px system-ui", color: "#fff", background: "linear-gradient(135deg,#2f6fd6,#1f4fa8)", boxShadow: "0 5px 18px rgba(0,0,0,.45)", cursor: "pointer", whiteSpace: "nowrap" }}>
              🚠 Instappen {knop === "dal" ? "→ naar boven" : "→ naar beneden"}
            </button>
          </Html>
        )}
      </group>
      {/* 🎓 leerborden: snelheid/tijd bij het dal, de sneeuwgrens boven */}
      {onOefenen ? <LeerBord moment="kabelbaan" onOefenen={onOefenen} position={[KABEL_DAL.x - DWARS.x * 5.6, buitenHoogte(KABEL_DAL.x - DWARS.x * 5.6, KABEL_DAL.z - DWARS.z * 5.6), KABEL_DAL.z - DWARS.z * 5.6]} /> : null}
      {onOefenen ? <LeerBord moment="sneeuwgrens" onOefenen={onOefenen} position={[KABEL_BERG.x - DWARS.x * 5.6, buitenHoogte(KABEL_BERG.x - DWARS.x * 5.6, KABEL_BERG.z - DWARS.z * 5.6), KABEL_BERG.z - DWARS.z * 5.6]} /> : null}
    </group>
  );
}
