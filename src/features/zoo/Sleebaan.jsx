// 🛷 Sleebaan (Mark 6 sep 2026, WhatsApp-plan: "of met de slee naar beneden").
// Vanaf het bergstation van de kabelbaan, in de sneeuw, slingert een ijsgeul
// met drie bochten de vulkaanflank af tot in het dal. De slee staat bovenaan
// klaar; sta je erbij → "Sleeën!" → je stapt in (poppetje verborgen), de slee
// volgt de geul en wordt steeds sneller (tot ~13 m/s), remt in het dal af en
// je stapt uit. Daarna staat de slee na een paar seconden weer bovenaan.
// Geen echte natuurkunde, wel het gevoel — en zo is het rondje af: omhoog met
// de kabelbaan, op de top kijken en leren, met de slee terug.
import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Vector3, Object3D, CatmullRomCurve3, BoxGeometry, MeshStandardMaterial } from "three";
import { VULKAAN, buitenHoogte } from "./eilandVorm";
import { KABEL_PHI } from "./Kabelbaan";
import { LeerBord } from "./ParkLeerobjecten";
import { track } from "../../utils.js";

const PHI0 = Math.atan2(-VULKAAN.z, -VULKAAN.x);
const PHI_START = KABEL_PHI + 0.35, PHI_EIND = PHI0 + 0.6;
const R_START = 27, R_EIND = 100;

// de geul: 13 steunpunten van boven naar beneden, slingerend (3 bochten)
const BAAN = (() => {
  const pts = [];
  for (let i = 0; i <= 13; i++) {
    const t = i / 13;
    const r = R_START + (R_EIND - R_START) * t;
    const phi = PHI_START + (PHI_EIND - PHI_START) * t + 0.33 * Math.sin(t * Math.PI * 3) * (1 - 0.2 * t);
    const x = VULKAAN.x + Math.cos(phi) * r, z = VULKAAN.z + Math.sin(phi) * r;
    pts.push(new Vector3(x, buitenHoogte(x, z) + 0.32, z));
  }
  const curve = new CatmullRomCurve3(pts, false, "centripetal", 0.5);
  curve.arcLengthDivisions = 400;
  return { curve, lengte: curve.getLength(), start: pts[0], eind: pts[pts.length - 1] };
})();
export const SLEE_START = BAAN.start;

const IJS = new MeshStandardMaterial({ color: "#dfeef7", roughness: 0.35, metalness: 0.05 });
const SNEEUWBLOK = new MeshStandardMaterial({ color: "#f4f7f9", roughness: 0.95 });
const HOUT = new MeshStandardMaterial({ color: "#a06a3a", roughness: 0.85, flatShading: true });
const STAAL = new MeshStandardMaterial({ color: "#5a6068", roughness: 0.4, metalness: 0.7 });
const SEG_GEO = new BoxGeometry(2.4, 0.26, 0.72);
const RAND_GEO = new BoxGeometry(0.5, 0.42, 0.5);

const V_MAX = 13, ACCEL = 3.6, REM_M = 24, V_EIND = 2.2;

export default function Sleebaan({ playerRef, onRit, teleportRef, onOefenen, inputRef }) {
  const slee = useRef();
  const st = useRef({ s: 0, v: 0, rijdt: false, aanBoord: false, resetT: 0 });
  const [knop, setKnop] = useState(false);
  const acc = useRef(0);
  const tmp = useMemo(() => ({ p: new Vector3(), tg: new Vector3(), vorige: new Vector3() }), []);

  const { segmenten, randen } = useMemo(() => {
    const n = Math.round(BAAN.lengte / 0.7);
    const pts = BAAN.curve.getSpacedPoints(n);
    const dummy = new Object3D();
    const segmenten = [], randen = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      dummy.position.copy(a).lerp(b, 0.5);
      dummy.lookAt(b);
      dummy.updateMatrix();
      segmenten.push(dummy.matrix.clone());
      // om de 4 segmenten een sneeuwblok als rand, afwisselend links/rechts en soms beide
      if (i % 4 === 0) {
        const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1;
        const nx = -dz / l, nz = dx / l;
        for (const k of (i % 8 === 0 ? [-1, 1] : [i % 3 === 0 ? -1 : 1])) {
          dummy.position.set(a.x + nx * k * 1.35, a.y + 0.05, a.z + nz * k * 1.35);
          dummy.rotation.set(0, Math.atan2(dx, dz), 0);
          dummy.updateMatrix();
          randen.push(dummy.matrix.clone());
        }
      }
    }
    return { segmenten, randen };
  }, []);
  const segRef = useRef(), randRef = useRef();
  const zet = (ref, mats) => { if (ref.current && !ref.current.userData.gezet) { mats.forEach((m, i) => ref.current.setMatrixAt(i, m)); ref.current.instanceMatrix.needsUpdate = true; ref.current.userData.gezet = true; } };

  const stapIn = (e) => {
    e?.stopPropagation?.();
    const o = st.current;
    if (o.rijdt || o.aanBoord) return;
    o.aanBoord = true; o.rijdt = true; o.s = 0; o.v = 0;
    setKnop(false);
    onRit && onRit(true);
    try { track("park_slee_rit", {}); } catch { /* */ }
  };

  useFrame((s, dtRaw) => {
    zet(segRef, segmenten); zet(randRef, randen);
    const dt = Math.min(0.05, dtRaw);
    const o = st.current;
    const m = slee.current; if (!m) return;
    if (o.rijdt) {
      const over = BAAN.lengte - o.s;
      const vDoel = over < REM_M ? Math.max(V_EIND, V_MAX * (over / REM_M)) : V_MAX;
      o.v = o.v < vDoel ? Math.min(vDoel, o.v + ACCEL * dt) : Math.max(vDoel, o.v - 6 * dt);
      o.s = Math.min(BAAN.lengte, o.s + o.v * dt);
      if (o.s >= BAAN.lengte - 0.01) {
        o.rijdt = false; o.resetT = 2.5;
        if (o.aanBoord) {
          const e = BAAN.eind;
          BAAN.curve.getTangentAt(1, tmp.tg);
          const ux = e.x - tmp.tg.z * 2.2, uz = e.z + tmp.tg.x * 2.2;
          if (teleportRef) teleportRef.current = { x: ux, z: uz };
          // camera aan de dal-kant (van de vulkaan af), zodat je niet ín de helling kijkt
          if (inputRef?.current?.cam) { inputRef.current.cam.yaw = Math.atan2(VULKAAN.x - ux, VULKAAN.z - uz); inputRef.current.cam.pitch = 0.14; }
          o.aanBoord = false;
          onRit && onRit(false);
        }
      }
    } else if (o.resetT > 0) {
      o.resetT -= dt;
      if (o.resetT <= 0) { o.s = 0; o.v = 0; }
    }
    const u = Math.max(0, Math.min(1, o.s / BAAN.lengte));
    BAAN.curve.getPointAt(u, tmp.p);
    BAAN.curve.getTangentAt(u, tmp.tg);
    m.position.copy(tmp.p);
    m.rotation.set(0, Math.atan2(tmp.tg.x, tmp.tg.z), 0);
    m.rotateX(-Math.asin(Math.max(-0.9, Math.min(0.9, tmp.tg.y))));
    if (o.rijdt) m.rotation.z += Math.sin(s.clock.elapsedTime * 11) * 0.02 * (o.v / V_MAX);
    // 🎥 aan boord: camera schuin achter en boven de slee
    if (o.aanBoord) {
      const hx = tmp.tg.x, hz = tmp.tg.z, hl = Math.hypot(hx, hz) || 1;
      const dx = hx / hl, dz = hz / hl;
      // achter de slee ligt de helling hóger: camera nooit onder het terrein
      const cx = tmp.p.x - dx * 7.5, cz = tmp.p.z - dz * 7.5;
      const cy = Math.max(tmp.p.y + 3.2, buitenHoogte(cx, cz) + 2.6);
      s.camera.position.set(cx, cy, cz);
      s.camera.lookAt(tmp.p.x + dx * 7, tmp.p.y - 1.0, tmp.p.z + dz * 7);
    }
    // knop: slee staat bovenaan klaar en je staat er dichtbij (≤ 16 m)
    acc.current += dt;
    if (acc.current > 0.3) {
      acc.current = 0;
      let wil = false;
      if (!o.rijdt && !o.aanBoord && o.s === 0 && playerRef?.current) {
        const p = playerRef.current;
        wil = Math.hypot(p.x - BAAN.start.x, p.z - BAAN.start.z) < 16;
      }
      if (wil !== knop) setKnop(wil);
    }
  });

  const bord = { x: BAAN.start.x + 3.2, z: BAAN.start.z + 1.5 };
  return (
    <group>
      <instancedMesh ref={segRef} args={[SEG_GEO, IJS, segmenten.length]} receiveShadow />
      <instancedMesh ref={randRef} args={[RAND_GEO, SNEEUWBLOK, randen.length]} castShadow />
      {/* 🛷 de slee: twee ijzers, twee bankjes-latten, een rugleuning */}
      <group ref={slee}>
        {[-0.42, 0.42].map((x) => (
          <mesh key={x} position={[x, 0.12, 0]} material={STAAL} castShadow><boxGeometry args={[0.08, 0.1, 1.9]} /></mesh>
        ))}
        {[-0.42, 0.42].map((x) => (
          <mesh key={`p${x}`} position={[x, 0.32, 0]} material={HOUT}><boxGeometry args={[0.07, 0.3, 1.4]} /></mesh>
        ))}
        <mesh position={[0, 0.5, 0]} material={HOUT} castShadow><boxGeometry args={[1.0, 0.08, 1.5]} /></mesh>
        <mesh position={[0, 0.78, -0.62]} material={HOUT}><boxGeometry args={[1.0, 0.5, 0.08]} /></mesh>
        {/* voorste krul */}
        <mesh position={[0, 0.3, 1.02]} rotation={[0.9, 0, 0]} material={STAAL}><boxGeometry args={[0.92, 0.06, 0.5]} /></mesh>
        {knop && (
          <Html position={[0, 2.2, 0]} center distanceFactor={16} zIndexRange={[9, 0]}>
            <button onClick={stapIn} style={{ pointerEvents: "auto", border: "3px solid #fff", borderRadius: 999, padding: "12px 24px", font: "900 17px system-ui", color: "#fff", background: "linear-gradient(135deg,#e2574c,#b0332a)", boxShadow: "0 5px 18px rgba(0,0,0,.45)", cursor: "pointer", whiteSpace: "nowrap" }}>
              🛷 Sleeën naar beneden!
            </button>
          </Html>
        )}
      </group>
      {/* startbordje */}
      <group position={[BAAN.start.x, buitenHoogte(BAAN.start.x, BAAN.start.z), BAAN.start.z]}>
        <Html position={[0, 2.6, 0]} center distanceFactor={22} zIndexRange={[6, 0]}>
          <div style={{ font: "900 14px system-ui", color: "#fff", background: "#e2574c", border: "2px solid #fff", borderRadius: 999, padding: "4px 12px", whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,.35)" }}>🛷 Sleebaan · start</div>
        </Html>
      </group>
      {onOefenen ? <LeerBord moment="slee" onOefenen={onOefenen} position={[bord.x, buitenHoogte(bord.x, bord.z), bord.z]} /> : null}
    </group>
  );
}
