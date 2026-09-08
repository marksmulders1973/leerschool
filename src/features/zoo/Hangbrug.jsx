// 🌉 Hangbrug (Mark 6 sep 2026, WhatsApp: "tussen de bergen wil ik een loopbrug
// en dan moeten er bots over lopen" + foto van de hangbrug bij Cunca Wulang).
// Van de vulkaanflank naar de Oostberg, 50 m over de kloof. De maten en de
// dek-hoogte komen uit eilandVorm.js (BRUG / brugDekY) — daar leest ook de
// speler ze, dus je loopt écht over de planken en de leuning houdt je tegen.
//
// Opbouw (bewust low-poly, één InstancedMesh per soort):
//   • twee portalen (palen + dwarsbalk) op de ankers
//   • twee draagkabels van portaal naar portaal, doorzakkend
//   • planken (0,5 m hart-op-hart) op het licht doorhangende dek
//   • leuningkabels op 1,1 m + staanders, en hangers van draagkabel naar dek
//   • twee blok-maatjes die heen en weer over de brug wandelen
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Object3D, Vector3, CatmullRomCurve3, TubeGeometry, BoxGeometry, CylinderGeometry, MeshStandardMaterial } from "three";
import { BRUG, brugDekY, buitenHoogte } from "./eilandVorm";
import { LeerBord } from "./ParkLeerobjecten";
import CharacterModel from "./CharacterModel";

const HOUT = new MeshStandardMaterial({ color: "#8a5a34", roughness: 0.9, flatShading: true });
const HOUT_DONKER = new MeshStandardMaterial({ color: "#5e3d22", roughness: 0.95, flatShading: true });
const TOUW = new MeshStandardMaterial({ color: "#c9b086", roughness: 1 });
const STAAL = new MeshStandardMaterial({ color: "#4a5058", roughness: 0.5, metalness: 0.6 });

const PLANK_GEO = new BoxGeometry(BRUG.BREED, 0.08, 0.36);
const STAANDER_GEO = new CylinderGeometry(0.035, 0.04, 1.15, 6);
const HANGER_GEO = new CylinderGeometry(0.02, 0.02, 1, 5);

// punt op het dek bij parameter t (0 = vulkaan-anker, 1 = berg-anker), zij = links/rechts (m)
function dekPunt(t, zij = 0, extraY = 0) {
  return new Vector3(
    BRUG.ax + BRUG.ux * BRUG.L * t + BRUG.uz * zij,
    brugDekY(t) + extraY,
    BRUG.az + BRUG.uz * BRUG.L * t - BRUG.ux * zij,
  );
}

function kabelTube(punten, dikte) {
  return new TubeGeometry(new CatmullRomCurve3(punten), 40, dikte, 6, false);
}

// 🚶 Twee maatjes die over de brug heen en weer lopen — het levende bewijs dat je
// er echt over kunt. Ze wisselen van richting aan het eind en wachten daar even.
function Brugwandelaar({ url, start, snelheid, zij }) {
  const g = useRef();
  const moving = useRef(0);
  const st = useRef({ t: start, richting: 1, wacht: 0 });
  useFrame((s, dtRaw) => {
    const dt = Math.min(0.05, dtRaw);
    const o = st.current;
    if (o.wacht > 0) { o.wacht -= dt; moving.current = 0; }
    else {
      o.t += (o.richting * snelheid * dt) / BRUG.L;
      moving.current = snelheid;
      if (o.t > 1.06) { o.t = 1.06; o.richting = -1; o.wacht = 2.5 + Math.random() * 2; }
      if (o.t < -0.06) { o.t = -0.06; o.richting = 1; o.wacht = 2.5 + Math.random() * 2; }
    }
    const n = g.current; if (!n) return;
    const p = dekPunt(Math.max(0, Math.min(1, o.t)), zij, 0.12);
    // voorbij de ankers loopt hij een paar meter de flank op
    if (o.t < 0 || o.t > 1) {
      const over = o.t < 0 ? o.t : o.t - 1;
      p.x += BRUG.ux * BRUG.L * over; p.z += BRUG.uz * BRUG.L * over;
      p.y = buitenHoogte(p.x, p.z);
    }
    n.position.copy(p);
    const doel = Math.atan2(BRUG.ux * o.richting, BRUG.uz * o.richting);
    let d = doel - n.rotation.y;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    n.rotation.y += d * Math.min(1, dt * 6);
  });
  return (
    <group ref={g}>
      <CharacterModel url={url} movingRef={moving} targetHeight={1.5} />
    </group>
  );
}

export default function Hangbrug({ onOefenen }) {
  const { planken, staanders, hangers, kabels } = useMemo(() => {
    const dummy = new Object3D();
    const nPlank = Math.round(BRUG.L / 0.5);
    const planken = [];
    for (let i = 0; i <= nPlank; i++) {
      const t = i / nPlank;
      const p = dekPunt(t);
      // helling van het dek volgen (afgeleide van brugDekY)
      const dy = -BRUG.ZAK * 4 * (1 - 2 * t) / BRUG.L;
      dummy.position.copy(p);
      dummy.rotation.set(0, BRUG.rot, 0);
      dummy.rotateX(-Math.atan(dy));
      dummy.updateMatrix();
      planken.push(dummy.matrix.clone());
    }
    const nStaander = Math.round(BRUG.L / 2.5);
    const staanders = [], hangers = [];
    const halve = BRUG.BREED / 2;
    // draagkabel: van portaal-top (dek+4,2) naar het midden (dek+1,7) — hangers eronder
    const draagY = (t) => 4.2 - 2.5 * Math.sin(Math.PI * t) ** 0.9;
    for (let i = 0; i <= nStaander; i++) {
      const t = i / nStaander;
      for (const zij of [-halve, halve]) {
        dummy.position.copy(dekPunt(t, zij, 0.6)); dummy.rotation.set(0, 0, 0); dummy.updateMatrix();
        staanders.push(dummy.matrix.clone());
        const hoog = draagY(t) - 0.08;
        dummy.position.copy(dekPunt(t, zij * 1.05, hoog / 2)); dummy.scale.set(1, hoog, 1); dummy.updateMatrix();
        hangers.push(dummy.matrix.clone());
        dummy.scale.set(1, 1, 1);
      }
    }
    const pts = (zij, yFn) => { const a = []; for (let i = 0; i <= 24; i++) { const t = i / 24; a.push(dekPunt(t, zij, yFn(t))); } return a; };
    const kabels = [
      kabelTube(pts(-halve, () => 1.1), 0.035), kabelTube(pts(halve, () => 1.1), 0.035),     // leuningen
      kabelTube(pts(-halve * 1.05, draagY), 0.06), kabelTube(pts(halve * 1.05, draagY), 0.06), // draagkabels
    ];
    return { planken, staanders, hangers, kabels };
  }, []);

  const plankRef = useRef(), staanderRef = useRef(), hangerRef = useRef();
  const zet = (ref, mats) => { if (ref.current && !ref.current.userData.gezet) { mats.forEach((m, i) => ref.current.setMatrixAt(i, m)); ref.current.instanceMatrix.needsUpdate = true; ref.current.userData.gezet = true; } };
  useFrame(() => { zet(plankRef, planken); zet(staanderRef, staanders); zet(hangerRef, hangers); });

  const portaal = (t) => {
    const p = dekPunt(t);
    const grond = buitenHoogte(p.x, p.z);
    const hoog = p.y + 4.4 - grond;
    return (
      <group key={t} position={[p.x, grond, p.z]} rotation={[0, BRUG.rot, 0]}>
        {[-1, 1].map((k) => (
          <mesh key={k} position={[k * (BRUG.BREED / 2 + 0.25), hoog / 2, 0]} material={HOUT_DONKER} castShadow>
            <boxGeometry args={[0.32, hoog, 0.32]} />
          </mesh>
        ))}
        <mesh position={[0, hoog - 0.1, 0]} material={HOUT_DONKER} castShadow><boxGeometry args={[BRUG.BREED + 1.0, 0.28, 0.36]} /></mesh>
        {/* verankering van de draagkabels: stalen ogen op de balk */}
        {[-1, 1].map((k) => (
          <mesh key={`oog${k}`} position={[k * (BRUG.BREED / 2 * 1.05), hoog + 0.04, 0]} material={STAAL}><cylinderGeometry args={[0.1, 0.1, 0.12, 8]} /></mesh>
        ))}
      </group>
    );
  };

  const bordP = dekPunt(-0.06, 2.2);
  return (
    <group>
      {portaal(0)}
      {portaal(1)}
      <instancedMesh ref={plankRef} args={[PLANK_GEO, HOUT, planken.length]} castShadow receiveShadow />
      <instancedMesh ref={staanderRef} args={[STAANDER_GEO, HOUT_DONKER, staanders.length]} />
      <instancedMesh ref={hangerRef} args={[HANGER_GEO, TOUW, hangers.length]} />
      {kabels.map((g, i) => <mesh key={i} geometry={g} material={i < 2 ? TOUW : STAAL} />)}
      {/* 🚶 de bots */}
      <Brugwandelaar url="blocky:blokJoep" start={0.15} snelheid={1.15} zij={-0.45} />
      <Brugwandelaar url="blocky:blokNora" start={0.8} snelheid={1.0} zij={0.45} />
      {/* 🎓 leerbord aan de vulkaan-kant (daar kom je aan) */}
      {onOefenen ? <LeerBord moment="hangbrug" onOefenen={onOefenen} position={[bordP.x, buitenHoogte(bordP.x, bordP.z), bordP.z]} /> : null}
    </group>
  );
}
