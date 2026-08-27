// 🎡 Park-leerobjecten (Mark 16-17 aug 2026) — de interactieve leerwereld uit het
// masterplan (docs/plannen-park/INTERACTIEF-PARK-MASTERPLAN.md). Twee soorten:
//
//  • Tier A — manipuleerbaar/levend: klok met échte wijzers, weegschaal-naald,
//    breuken-taart, oppervlakte-moestuin, telraam, park-plattegrond. Zwevende
//    maten/formules erboven (zoals de piramide van 16 aug).
//  • Tier B — magische poorten (docs/plannen-park/MAGISCHE-POORTEN-PLAN.md): een
//    mooie blikvanger (Eiffeltoren, kompas, wereldbol, molen, raket, …) met een
//    glimmende poort. Tik = "hoe werkt dit?" (bestaand leermoment-paneel); lóóp
//    je erdoorheen → het leerpad opent (PoortWatcher in ZooScene).
//
// Alle poorten linken naar een BESTAAND leerpad (harde regel, geverifieerd tegen
// pathManifest). Bijschaven van de 3D-modellen doet Mark later met Fable — hier
// gaat het om: alles staat in het park, is herkenbaar en leidt naar de les.
//
// Low-poly/flatShading, past bij de rest van het park. Bewegende delen (wijzers,
// wieken, draaiende globe, kompas-naald) via useFrame op een ref — goedkoop.
// LET OP: three.js-geometry-elementen nemen GEEN rotation-prop; die hoort op de
// <mesh>. Alle draaiingen staan hier dus op de mesh/group.

import { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { ZwevendeMaten } from "./UitvindersKabouters";
import { LOW_END } from "./grid";
import { track } from "../../utils.js";
import { PARK_LEERMOMENTEN } from "./parkLeermomenten";
import { parkAudioRaket, parkAudioJuich } from "./parkAudio";

// 🎓 Leer-bord — houten bordje met de les(sen) van een leerstation als échte
// knoppen (Mark 26 aug: "ik zie er nu niets" → zichtbaar leren bij élk
// leerobject, ook voor bezoekers via een deel-link; lessen zijn gratis en
// zonder account). Leest de gekoppelde paden uit PARK_LEERMOMENTEN, dus het
// bord klopt altijd met het praatje/paneel van hetzelfde object.
export function LeerBord({ moment, onOefenen, position = [0, 0, 0] }) {
  const m = PARK_LEERMOMENTEN[moment];
  const paden = m ? [
    { id: m.leerpadId, label: m.leerLabel || m.titel },
    ...(m.leerpadId2 ? [{ id: m.leerpadId2, label: m.leerLabel2 || "" }] : []),
  ].filter((p) => p.id) : [];
  if (!m || !onOefenen || !paden.length) return null;
  const open = (e, pid) => {
    e.stopPropagation();
    try { track("park_naar_leren", { via: "leerbord", obj: moment, pad: pid }); } catch { /* */ }
    onOefenen(pid);
  };
  return (
    <group position={position}>
      <mesh position={[0, 0.55, 0]} castShadow><boxGeometry args={[0.09, 1.1, 0.09]} /><meshStandardMaterial color="#7a5230" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.22, 0]} castShadow><boxGeometry args={[1.2, 0.62, 0.07]} /><meshStandardMaterial color="#f6e7c4" flatShading roughness={0.9} /></mesh>
      <Html position={[0, 1.22, 0.06]} center distanceFactor={8} zIndexRange={[7, 0]}>
        <div style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "center", pointerEvents: "auto" }}>
          <div style={{ font: "900 12px system-ui", color: "#5c4300", whiteSpace: "nowrap", textShadow: "0 1px 2px rgba(255,255,255,.6)" }}>🎓 Leer hier</div>
          {paden.map((p, i) => (
            <button
              key={p.id}
              onClick={(e) => open(e, p.id)}
              style={{ border: "2px solid #fff", borderRadius: 999, padding: "6px 13px", font: "800 12px system-ui", color: "#fff", background: i === 0 ? "linear-gradient(135deg,#7c3aed,#5b21b6)" : "linear-gradient(135deg,#2e9e4f,#1f7a3a)", boxShadow: "0 2px 8px rgba(0,0,0,.35)", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              {m.emoji} Les: {p.label}
            </button>
          ))}
        </div>
      </Html>
    </group>
  );
}

/* ── gedeelde bouwstenen ──────────────────────────────────────────────── */

// Ronde stenen sokkel — de meeste blikvangers staan erop (net als de souvenirs).
function Sokkel({ r = 0.9, h = 0.34, color = "#8b8680" }) {
  return (
    <group>
      <mesh position={[0, h / 2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[r, r * 1.12, h, 20]} />
        <meshStandardMaterial color={color} flatShading roughness={1} />
      </mesh>
      <mesh position={[0, h + 0.03, 0]}>
        <cylinderGeometry args={[r * 0.92, r, 0.06, 20]} />
        <meshStandardMaterial color="#a7a29a" flatShading roughness={0.9} />
      </mesh>
    </group>
  );
}

// ✨ Magische poort — twee pilaren + een licht trillend, doorschijnend vlak +
// een zwevende emoji/label. Loop je erdoorheen (PoortWatcher) → het leerpad
// opent. Kleur = per vak-thema. Subtiel: het vlak "ademt" zacht (opacity).
export function MagischePoort({ kleur = "#7bc6ff", emoji = "✨", label = "", breedte = 2.6, hoogte = 3.0, z = 0 }) {
  const vlak = useRef();
  const halve = breedte / 2;
  useFrame((s) => {
    if (vlak.current) {
      const t = s.clock.elapsedTime;
      vlak.current.material.opacity = 0.16 + 0.1 * (0.5 + 0.5 * Math.sin(t * 1.6));
    }
  });
  const Pilaar = ({ x }) => (
    <group position={[x, 0, z]}>
      <mesh position={[0, hoogte / 2, 0]} castShadow>
        <boxGeometry args={[0.3, hoogte, 0.3]} />
        <meshStandardMaterial color="#cdb06a" metalness={0.35} roughness={0.5} flatShading />
      </mesh>
      <mesh position={[0, hoogte + 0.12, 0]} castShadow>
        <sphereGeometry args={[0.19, 12, 10]} />
        <meshStandardMaterial color={kleur} emissive={kleur} emissiveIntensity={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
  return (
    <group>
      <Pilaar x={-halve} />
      <Pilaar x={halve} />
      {/* de trillende doorgang */}
      <mesh ref={vlak} position={[0, hoogte / 2, z]}>
        <planeGeometry args={[breedte - 0.28, hoogte - 0.2]} />
        <meshStandardMaterial color={kleur} emissive={kleur} emissiveIntensity={0.5} transparent opacity={0.2} side={2} depthWrite={false} />
      </mesh>
      {/* boog-balk boven */}
      <mesh position={[0, hoogte + 0.02, z]} castShadow>
        <boxGeometry args={[breedte + 0.1, 0.22, 0.34]} />
        <meshStandardMaterial color="#cdb06a" metalness={0.35} roughness={0.5} flatShading />
      </mesh>
      {label && !LOW_END ? (
        <Html position={[0, hoogte + 0.6, z]} center distanceFactor={13} zIndexRange={[7, 0]} style={{ pointerEvents: "none" }}>
          <div style={{
            whiteSpace: "nowrap", padding: "4px 11px", borderRadius: 999,
            background: "rgba(20,28,44,0.78)", color: "#fff", fontWeight: 800,
            fontSize: 13, fontFamily: "system-ui", boxShadow: "0 3px 12px rgba(0,0,0,.3)",
            border: `1.5px solid ${kleur}`,
          }}>{emoji} {label}</div>
        </Html>
      ) : null}
    </group>
  );
}

/* ══════════════════ TIER A — manipuleerbaar / levend ══════════════════ */

/* 🕐 Klokkentoren — een toren met een échte klok: uur- en minuutwijzer staan op
   de huidige tijd en lopen mee. Zwevend: analoog + digitaal. → klokkijken. */
export function Klokkentoren({ position = [0, 0, 0], rotation = 0 }) {
  const uur = useRef();
  const minuut = useRef();
  const [dig, setDig] = useState("");
  useEffect(() => {
    const zet = () => {
      const d = new Date();
      const h = d.getHours(), m = d.getMinutes();
      setDig(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
      if (minuut.current) minuut.current.rotation.z = -(m / 60) * Math.PI * 2;
      if (uur.current) uur.current.rotation.z = -(((h % 12) + m / 60) / 12) * Math.PI * 2;
    };
    zet();
    const t = setInterval(zet, 15000);
    return () => clearInterval(t);
  }, []);
  const ticks = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <ZwevendeMaten y={4.9} regels={[`🕐 ${dig || "--:--"} uur`, "de grote wijzer = minuten", "de kleine wijzer = uren"]} />
      {/* toren */}
      <mesh position={[0, 1.7, 0]} castShadow receiveShadow><boxGeometry args={[1.3, 3.4, 1.3]} /><meshStandardMaterial color="#c9b79a" flatShading roughness={1} /></mesh>
      <mesh position={[0, 3.55, 0]} castShadow><boxGeometry args={[1.5, 0.3, 1.5]} /><meshStandardMaterial color="#8a6a4a" flatShading roughness={1} /></mesh>
      {/* puntdak */}
      <mesh position={[0, 4.15, 0]} rotation={[0, Math.PI / 4, 0]} castShadow><coneGeometry args={[1.15, 1.0, 4]} /><meshStandardMaterial color="#b5563f" flatShading roughness={1} /></mesh>
      {/* wijzerplaat aan de voorkant (cilinder ligt langs Z, plat naar voren) */}
      <group position={[0, 2.6, 0.72]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.6, 0.6, 0.06, 28]} /><meshStandardMaterial color="#faf7ec" flatShading roughness={0.6} /></mesh>
        {ticks.map((i) => (
          <mesh key={i} position={[Math.sin((i / 12) * Math.PI * 2) * 0.5, Math.cos((i / 12) * Math.PI * 2) * 0.5, 0.04]}>
            <boxGeometry args={[0.05, 0.11, 0.02]} /><meshStandardMaterial color="#2b2b2b" />
          </mesh>
        ))}
        {/* wijzers draaien om de Z-as die uit de plaat steekt */}
        <group ref={uur} position={[0, 0, 0.05]}><mesh position={[0, 0.16, 0]}><boxGeometry args={[0.06, 0.34, 0.02]} /><meshStandardMaterial color="#1c1c1c" /></mesh></group>
        <group ref={minuut} position={[0, 0, 0.07]}><mesh position={[0, 0.24, 0]}><boxGeometry args={[0.045, 0.5, 0.02]} /><meshStandardMaterial color="#1c1c1c" /></mesh></group>
        <mesh position={[0, 0, 0.09]}><sphereGeometry args={[0.05, 10, 8]} /><meshStandardMaterial color="#b5563f" /></mesh>
      </group>
    </group>
  );
}

/* ⚖️ Weegschaal — een balans met twee schalen die zacht wiebelt, appels erop.
   Zwevend: 1 kg = 1000 gram. → meten (gewicht). */
export function Weegschaal({ position = [0, 0, 0], rotation = 0 }) {
  const balk = useRef();
  useFrame((s) => { if (balk.current) balk.current.rotation.z = Math.sin(s.clock.elapsedTime * 1.1) * 0.09; });
  const Schaal = ({ x }) => (
    <group position={[x, -0.5, 0]}>
      <mesh position={[0, 0, 0]}><cylinderGeometry args={[0.42, 0.34, 0.14, 18]} /><meshStandardMaterial color="#d8b04a" metalness={0.5} roughness={0.35} flatShading /></mesh>
      {[-0.32, 0.32].map((dx, i) => (
        <mesh key={i} position={[dx, 0.3, 0]}><cylinderGeometry args={[0.015, 0.015, 0.6, 5]} /><meshStandardMaterial color="#9a8a5a" /></mesh>
      ))}
    </group>
  );
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <ZwevendeMaten y={2.9} regels={["⚖️ 1 kilo = 1000 gram", "zwaarder = zakt omlaag", "in balans = even zwaar"]} />
      <Sokkel r={0.5} h={0.3} />
      <mesh position={[0, 1.15, 0]} castShadow><cylinderGeometry args={[0.09, 0.12, 1.7, 10]} /><meshStandardMaterial color="#b9932f" metalness={0.5} roughness={0.4} flatShading /></mesh>
      <group ref={balk} position={[0, 2.0, 0]}>
        <mesh><boxGeometry args={[2.2, 0.1, 0.1]} /><meshStandardMaterial color="#d8b04a" metalness={0.5} roughness={0.35} flatShading /></mesh>
        <Schaal x={-1.05} />
        <Schaal x={1.05} />
        <mesh position={[-1.05, -0.4, 0]} castShadow><sphereGeometry args={[0.16, 12, 10]} /><meshStandardMaterial color="#d33b2f" flatShading roughness={0.5} /></mesh>
        <mesh position={[-0.9, -0.42, 0.1]} castShadow><sphereGeometry args={[0.14, 12, 10]} /><meshStandardMaterial color="#e0563f" flatShading roughness={0.5} /></mesh>
      </group>
      <mesh position={[0, 2.1, 0]}><sphereGeometry args={[0.13, 12, 10]} /><meshStandardMaterial color="#b5563f" flatShading /></mesh>
    </group>
  );
}

/* 🍰 Breuken-taart — een taart in 8 punten; een paar liggen los (delen).
   Zwevend: helft/kwart/driekwart. → breuken. */
export function Breukentaart({ position = [0, 0, 0], rotation = 0 }) {
  const parten = useMemo(() => {
    const n = 8;
    return Array.from({ length: n }, (_, i) => {
      const mid = (i / n) * Math.PI * 2 + Math.PI / n;
      const los = i >= 6;
      const off = los ? 0.28 : 0;
      return { i, kleur: i % 2 ? "#f4b6c2" : "#ffd9a0", x: Math.cos(mid) * off, z: Math.sin(mid) * off, rot: -(i / n) * Math.PI * 2 };
    });
  }, []);
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <ZwevendeMaten y={2.1} regels={["🍰 samen = één geheel", "½ = de helft", "¾ = drie van de vier"]} />
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow><cylinderGeometry args={[0.35, 0.45, 1.0, 10]} /><meshStandardMaterial color="#9a7b52" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.02, 0]}><cylinderGeometry args={[1.15, 1.15, 0.06, 28]} /><meshStandardMaterial color="#f2eee4" flatShading roughness={0.6} /></mesh>
      <group position={[0, 1.18, 0]}>
        {parten.map((p) => (
          <group key={p.i} position={[p.x, 0, p.z]} rotation={[0, p.rot, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[1.0, 1.0, 0.28, 16, 1, false, 0, (Math.PI * 2) / 8]} />
              <meshStandardMaterial color={p.kleur} flatShading roughness={0.6} />
            </mesh>
            <mesh position={[Math.cos(Math.PI / 8) * 0.6, 0.2, Math.sin(Math.PI / 8) * 0.6]}><sphereGeometry args={[0.08, 8, 8]} /><meshStandardMaterial color="#c0392b" flatShading /></mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

/* 🥕 Oppervlakte-moestuin — een rechthoekig plantvak met rijen groenten.
   Zwevend: lengte × breedte = oppervlakte. → oppervlakte-omtrek. */
export function Moestuin({ position = [0, 0, 0], rotation = 0 }) {
  const L = 3.2, B = 2.0;
  const planten = useMemo(() => {
    const out = [];
    for (let ix = 0; ix < 4; ix++) for (let iz = 0; iz < 3; iz++) {
      out.push([-L / 2 + 0.5 + ix * ((L - 1) / 3), -B / 2 + 0.45 + iz * ((B - 0.9) / 2)]);
    }
    return out;
  }, []);
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <ZwevendeMaten y={1.9} regels={[`📏 ${L} m × ${B} m`, "lengte × breedte = oppervlakte", `= ${(L * B).toLocaleString("nl-NL")} m²`]} />
      {[[0, -B / 2], [0, B / 2]].map(([x, z], i) => (
        <mesh key={"a" + i} position={[x, 0.2, z]} castShadow><boxGeometry args={[L + 0.3, 0.4, 0.18]} /><meshStandardMaterial color="#a97e4e" flatShading roughness={1} /></mesh>
      ))}
      {[[-L / 2, 0], [L / 2, 0]].map(([x, z], i) => (
        <mesh key={"b" + i} position={[x, 0.2, z]} castShadow><boxGeometry args={[0.18, 0.4, B + 0.3]} /><meshStandardMaterial color="#a97e4e" flatShading roughness={1} /></mesh>
      ))}
      <mesh position={[0, 0.22, 0]} receiveShadow><boxGeometry args={[L, 0.2, B]} /><meshStandardMaterial color="#5b4630" flatShading roughness={1} /></mesh>
      {planten.map(([x, z], i) => (
        <group key={i} position={[x, 0.34, z]}>
          <mesh castShadow><sphereGeometry args={[0.16, 8, 6]} /><meshStandardMaterial color={i % 2 ? "#4a9e3a" : "#6ab04c"} flatShading roughness={0.9} /></mesh>
          <mesh position={[0, 0.14, 0]}><coneGeometry args={[0.06, 0.2, 6]} /><meshStandardMaterial color={i % 3 ? "#e8722c" : "#d94f3a"} flatShading /></mesh>
        </group>
      ))}
    </group>
  );
}

/* 🧮 Telraam — kralen op vier staven (1/10/100/1000): plaatswaarde.
   Zwevend: 1 · 10 · 100 · 1000. → plaatswaarde/getallen. */
export function Telraam({ position = [0, 0, 0], rotation = 0 }) {
  const rijen = useMemo(() => ([
    { y: 1.9, n: 3, kleur: "#e2574c" },
    { y: 1.5, n: 5, kleur: "#4a90d9" },
    { y: 1.1, n: 2, kleur: "#3cb371" },
    { y: 0.7, n: 7, kleur: "#f2b134" },
  ]), []);
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <ZwevendeMaten y={3.0} regels={["🧮 elke staaf telt anders", "1 · 10 · 100 · 1000", "plaatswaarde van getallen"]} />
      <mesh position={[0, 1.3, 0]} castShadow><boxGeometry args={[2.6, 2.0, 0.24]} /><meshStandardMaterial color="#8a6a3a" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.3, 0.02]}><boxGeometry args={[2.2, 1.6, 0.3]} /><meshStandardMaterial color="#c9a55a" flatShading roughness={0.9} /></mesh>
      {rijen.map((r, ri) => (
        <group key={ri}>
          <mesh position={[0, r.y, 0.18]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.025, 0.025, 2.0, 6]} /><meshStandardMaterial color="#6a5230" /></mesh>
          {Array.from({ length: 10 }, (_, k) => {
            const links = k < r.n;
            const x = links ? -0.9 + k * 0.16 : 0.9 - (9 - k) * 0.16;
            return <mesh key={k} position={[x, r.y, 0.18]} castShadow><sphereGeometry args={[0.11, 10, 8]} /><meshStandardMaterial color={links ? r.kleur : "#cfc6b6"} flatShading roughness={0.5} /></mesh>;
          })}
        </group>
      ))}
      <Sokkel r={0.6} h={0.3} />
    </group>
  );
}

/* 🗺️ Park-plattegrond — een bord met een kaartje van het park + windroos.
   Het park ís de kaart. → kaartlezen + plattegrond-legenda. */
export function Parkkaart({ position = [0, 0, 0], rotation = 0 }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <ZwevendeMaten y={2.8} regels={["🧭 N O Z W", "zoek jezelf op de kaart", "van hier naar daar"]} />
      {[-0.9, 0.9].map((x, i) => <mesh key={i} position={[x, 0.9, 0]} castShadow><cylinderGeometry args={[0.08, 0.08, 1.8, 8]} /><meshStandardMaterial color="#7a5a34" flatShading roughness={1} /></mesh>)}
      <mesh position={[0, 1.7, 0]} rotation={[-0.25, 0, 0]} castShadow>
        <boxGeometry args={[2.3, 1.5, 0.1]} /><meshStandardMaterial color="#3f6d47" flatShading roughness={0.9} />
      </mesh>
      <group position={[0, 1.7, 0.06]} rotation={[-0.25, 0, 0]}>
        <mesh><planeGeometry args={[2.0, 1.2]} /><meshStandardMaterial color="#e9e2cf" roughness={0.8} /></mesh>
        <mesh position={[0, 0, 0.01]}><planeGeometry args={[0.2, 1.0]} /><meshStandardMaterial color="#c8b98f" /></mesh>
        <mesh position={[0, 0, 0.01]}><planeGeometry args={[1.6, 0.2]} /><meshStandardMaterial color="#c8b98f" /></mesh>
        {[[-0.6, 0.3, "#6ab04c"], [0.6, 0.3, "#7bc6ff"], [-0.6, -0.35, "#f2b134"], [0.6, -0.35, "#e2574c"]].map(([x, y, c], i) => (
          <mesh key={i} position={[x, y, 0.02]}><circleGeometry args={[0.12, 12]} /><meshStandardMaterial color={c} /></mesh>
        ))}
      </group>
    </group>
  );
}

/* ══════════════════ TIER B — landmark + magische poort ══════════════════ */

/* 🧭 Kompas — grote windroos op een schuine standaard, naald draait langzaam.
   → kaartlezen. (Mark: "dingen zoals kompas ed zet er maar in.") */
export function Kompas({ position = [0, 0, 0], rotation = 0 }) {
  const naald = useRef();
  useFrame((s) => { if (naald.current) naald.current.rotation.z = Math.sin(s.clock.elapsedTime * 0.4) * 0.5 + 0.3; });
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <Sokkel r={0.85} h={0.34} color="#7d766c" />
      <mesh position={[0, 0.8, -0.1]} rotation={[0.5, 0, 0]} castShadow><cylinderGeometry args={[0.1, 0.14, 1.1, 10]} /><meshStandardMaterial color="#9a8a5a" metalness={0.4} roughness={0.5} flatShading /></mesh>
      <group position={[0, 1.35, 0.25]} rotation={[-0.9, 0, 0]}>
        <mesh castShadow><cylinderGeometry args={[0.9, 0.9, 0.12, 32]} /><meshStandardMaterial color="#efe7d2" flatShading roughness={0.6} /></mesh>
        <mesh position={[0, 0.07, 0]}><cylinderGeometry args={[0.82, 0.82, 0.02, 32]} /><meshStandardMaterial color="#f7f2e4" roughness={0.5} /></mesh>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} position={[Math.sin(i * Math.PI / 2) * 0.5, 0.09, Math.cos(i * Math.PI / 2) * 0.5]} rotation={[Math.PI / 2, i * Math.PI / 2, 0]}>
            <coneGeometry args={[0.12, 0.55, 4]} /><meshStandardMaterial color={i === 0 ? "#c0392b" : "#37474f"} flatShading />
          </mesh>
        ))}
        <group ref={naald} position={[0, 0.12, 0]}>
          <mesh position={[0, 0, 0.24]}><boxGeometry args={[0.07, 0.02, 0.5]} /><meshStandardMaterial color="#c0392b" /></mesh>
          <mesh position={[0, 0, -0.24]}><boxGeometry args={[0.07, 0.02, 0.5]} /><meshStandardMaterial color="#eceff1" /></mesh>
          <mesh><cylinderGeometry args={[0.06, 0.06, 0.06, 10]} /><meshStandardMaterial color="#d8b04a" metalness={0.6} roughness={0.3} /></mesh>
        </group>
      </group>
      <MagischePoort kleur="#9ad0a0" emoji="🧭" label="Kaartlezen" z={-1.4} breedte={2.6} hoogte={3.0} />
    </group>
  );
}

/* 🗼 Eiffeltoren — ijzeren vakwerktoren (4 poten → punt, twee dekken).
   → topografie Europa (+ vlakke figuren: allemaal driehoeken!). */
export function Eiffeltoren({ position = [0, 0, 0], rotation = 0 }) {
  const kleur = "#7d6b4f";
  const poot = (sx, sz) => {
    const segs = [[0.4, 1.15, 0.9], [1.9, 0.6, 1.9], [3.7, 0.3, 1.6]];
    return segs.map(([y, o, h], i) => (
      <mesh key={i} position={[sx * o, y, sz * o]} rotation={[sz ? -sz * 0.28 : 0, 0, sx ? sx * 0.28 : 0]} castShadow>
        <boxGeometry args={[0.16, h, 0.16]} /><meshStandardMaterial color={kleur} flatShading roughness={0.9} metalness={0.2} />
      </mesh>
    ));
  };
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {[[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([sx, sz], i) => <group key={i}>{poot(sx, sz)}</group>)}
      <mesh position={[0, 1.35, 0]} castShadow><boxGeometry args={[2.1, 0.16, 2.1]} /><meshStandardMaterial color={kleur} flatShading roughness={0.9} /></mesh>
      <mesh position={[0, 2.75, 0]} castShadow><boxGeometry args={[1.05, 0.14, 1.05]} /><meshStandardMaterial color={kleur} flatShading roughness={0.9} /></mesh>
      <mesh position={[0, 3.9, 0]} castShadow><boxGeometry args={[0.34, 1.4, 0.34]} /><meshStandardMaterial color={kleur} flatShading roughness={0.9} /></mesh>
      <mesh position={[0, 4.8, 0]} castShadow><coneGeometry args={[0.16, 0.7, 4]} /><meshStandardMaterial color="#8d7a58" flatShading /></mesh>
      <mesh position={[0, 5.2, 0]}><sphereGeometry args={[0.07, 8, 8]} /><meshStandardMaterial color="#d8b04a" emissive="#d8b04a" emissiveIntensity={0.4} /></mesh>
      <MagischePoort kleur="#c7b0ff" emoji="🗼" label="Europa" z={-1.7} breedte={2.8} hoogte={3.2} />
    </group>
  );
}

/* 🏛️ Griekse/Romeinse tempel — zuilen + driehoek-fronton + trap. → oudheid. */
/* ⚔️ Arena-gevecht op knop (Mark 27 aug: "laat ze rondjes om elkaar lopen en
   net als bij de raket een paal met rode knop: START GEVECHT — 1 minuut
   vechten, één wint, geen bloed, juichend poppetje"). Drie fases:
   • rust    — de twee gladiatoren wandelen rustig rondjes om elkaar heen;
   • gevecht — 60 s duel (cirkelen + om de beurt een uitval, zwaard/drietand);
   • juich   — de winnaar springt juichend in het rond met zijn wapen omhoog,
               de verliezer buigt sportief — daarna wandelen ze weer verder. */
const GEVECHT_DUUR = 60; // seconden
function GladiatorenDuel({ schaal = 1.4 }) {
  const a = useRef(), b = useRef(), armA = useRef(), armB = useRef();
  const [fase, setFase] = useState("rust"); // rust | gevecht | juich
  const [rest, setRest] = useState(GEVECHT_DUUR);
  const winRef = useRef(0); // 0 = murmillo (A), 1 = retiarius (B)
  useEffect(() => {
    if (fase === "gevecht") {
      setRest(GEVECHT_DUUR);
      const iv = setInterval(() => setRest((n) => Math.max(0, n - 1)), 1000);
      const done = setTimeout(() => setFase("juich"), GEVECHT_DUUR * 1000);
      return () => { clearInterval(iv); clearTimeout(done); };
    }
    if (fase === "juich") {
      parkAudioJuich(); // publiek juicht mee
      const terug = setTimeout(() => setFase("rust"), 7000);
      return () => clearTimeout(terug);
    }
  }, [fase]);
  const start = (e) => {
    e?.stopPropagation?.();
    if (fase !== "rust") return;
    winRef.current = Math.random() < 0.5 ? 0 : 1;
    setFase("gevecht");
    try { track("park_arena_gevecht", {}); } catch { /* */ }
  };
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (fase === "gevecht") {
      const th = t * 0.8;                                             // vlot om elkaar heen
      const lungeA = Math.max(0, Math.sin(t * 1.6)) * 0.45;           // uitval A…
      const lungeB = Math.max(0, Math.sin(t * 1.6 + Math.PI)) * 0.45; // …en om de beurt B
      const rA = 0.95 - lungeA, rB = 0.95 - lungeB;
      if (a.current) { a.current.position.set(Math.sin(th) * rA, 0, Math.cos(th) * rA); a.current.rotation.set(0, th + Math.PI, 0); }
      if (b.current) { b.current.position.set(-Math.sin(th) * rB, 0, -Math.cos(th) * rB); b.current.rotation.set(0, th, 0); }
      if (armA.current) armA.current.rotation.x = -0.4 - Math.max(0, Math.sin(t * 3.2)) * 1.0;
      if (armB.current) armB.current.rotation.x = -0.3 - Math.max(0, Math.sin(t * 3.2 + 1.6)) * 0.8;
    } else if (fase === "juich") {
      const win = winRef.current === 0 ? a : b, verlies = winRef.current === 0 ? b : a;
      if (win.current) {
        win.current.position.set(Math.sin(t * 2.2) * 0.5, Math.abs(Math.sin(t * 6)) * 0.35, Math.cos(t * 2.2) * 0.5); // juichend rondspringen
        win.current.rotation.set(0, t * 2.2 + Math.PI / 2, 0);
      }
      if (verlies.current) { verlies.current.position.set(1.5, -0.08, 0.4); verlies.current.rotation.set(0.55, -0.6, 0); } // sportieve buiging
      const winArm = winRef.current === 0 ? armA : armB, verliesArm = winRef.current === 0 ? armB : armA;
      if (winArm.current) winArm.current.rotation.x = -2.7 + Math.sin(t * 6) * 0.2; // wapen juichend omhoog
      if (verliesArm.current) verliesArm.current.rotation.x = -0.1;
    } else {
      const th = t * 0.28; // rustig rondjes om elkaar heen wandelen
      const stap = Math.abs(Math.sin(t * 3.2)) * 0.035;
      if (a.current) { a.current.position.set(Math.sin(th) * 1.25, stap, Math.cos(th) * 1.25); a.current.rotation.set(0, th + Math.PI / 2 + Math.PI, 0); }
      if (b.current) { b.current.position.set(-Math.sin(th) * 1.25, stap, -Math.cos(th) * 1.25); b.current.rotation.set(0, th + Math.PI / 2, 0); }
      if (armA.current) armA.current.rotation.x = -0.15 + Math.sin(t * 3.2) * 0.18;   // armen los langs het lijf
      if (armB.current) armB.current.rotation.x = -0.15 + Math.sin(t * 3.2 + 1) * 0.18;
    }
  });
  const huid = "#e8b98a";
  return (
    <group scale={[schaal, schaal, schaal]}>
      {/* 🔴 paal met de grote rode knop, net als bij de raket — naast de ingang,
          rechts van de loper zodra je binnenkomt */}
      <group position={[1.9, 0, -3.7]}>
        <mesh position={[0, 0.55, 0]} castShadow onClick={start}><cylinderGeometry args={[0.09, 0.12, 1.1, 10]} /><meshStandardMaterial color="#7a6a52" flatShading roughness={1} /></mesh>
        <mesh position={[0, 1.14, 0]} onClick={start}><cylinderGeometry args={[0.16, 0.2, 0.08, 12]} /><meshStandardMaterial color="#333940" flatShading /></mesh>
        <mesh position={[0, 1.24, 0]} onClick={start}>
          <sphereGeometry args={[0.15, 14, 10]} />
          <meshStandardMaterial color="#e11d2e" emissive="#c00d1e" emissiveIntensity={fase === "rust" ? 0.55 : 0.12} flatShading />
        </mesh>
        <Html position={[0, 1.75, 0]} center distanceFactor={9} zIndexRange={[7, 0]}>
          <button
            onClick={start}
            disabled={fase !== "rust"}
            style={{ pointerEvents: "auto", border: "3px solid #fff", borderRadius: 999, padding: "7px 16px", font: "900 14px system-ui", color: "#fff", background: fase === "rust" ? "linear-gradient(135deg,#ff4d3a,#c0392b)" : fase === "juich" ? "linear-gradient(135deg,#d8b04a,#b8862a)" : "#8a939c", boxShadow: "0 3px 12px rgba(0,0,0,.4)", cursor: fase === "rust" ? "pointer" : "default", whiteSpace: "nowrap" }}
          >
            {fase === "gevecht" ? `⚔️ nog ${rest} s` : fase === "juich" ? `🏆 ${winRef.current === 0 ? "Rode helm" : "Blauwe vechter"} wint!` : "⚔️ START GEVECHT"}
          </button>
        </Html>
      </group>
      {/* Gladiator A — murmillo: helm met rode kam, rond schild + houten zwaard */}
      <group ref={a}>
        <mesh position={[-0.08, 0.14, 0]}><boxGeometry args={[0.11, 0.28, 0.12]} /><meshStandardMaterial color="#8a5a3a" flatShading /></mesh>
        <mesh position={[0.08, 0.14, 0]}><boxGeometry args={[0.11, 0.28, 0.12]} /><meshStandardMaterial color="#8a5a3a" flatShading /></mesh>
        <mesh position={[0, 0.48, 0]} castShadow><boxGeometry args={[0.34, 0.4, 0.2]} /><meshStandardMaterial color="#b03a30" flatShading /></mesh>
        <mesh position={[0, 0.82, 0]} castShadow><boxGeometry args={[0.22, 0.22, 0.22]} /><meshStandardMaterial color={huid} flatShading /></mesh>
        <mesh position={[0, 0.97, 0]}><boxGeometry args={[0.26, 0.1, 0.26]} /><meshStandardMaterial color="#c8c4bc" flatShading metalness={0.3} /></mesh>
        <mesh position={[0, 1.08, 0]}><boxGeometry args={[0.06, 0.14, 0.26]} /><meshStandardMaterial color="#d33a2f" flatShading /></mesh>
        {/* linkerarm met rond schild */}
        <mesh position={[-0.24, 0.52, 0.06]}><boxGeometry args={[0.1, 0.3, 0.1]} /><meshStandardMaterial color={huid} flatShading /></mesh>
        <mesh position={[-0.3, 0.5, 0.18]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.24, 0.24, 0.06, 12]} /><meshStandardMaterial color="#d9a33c" flatShading /></mesh>
        {/* rechterarm (zwaait) met zwaard — scharnier bij de schouder */}
        <group ref={armA} position={[0.24, 0.66, 0]}>
          <mesh position={[0, -0.14, 0]}><boxGeometry args={[0.1, 0.3, 0.1]} /><meshStandardMaterial color={huid} flatShading /></mesh>
          <mesh position={[0, -0.3, 0.2]} rotation={[Math.PI / 2.6, 0, 0]}><boxGeometry args={[0.05, 0.42, 0.05]} /><meshStandardMaterial color="#c8c4bc" flatShading metalness={0.4} /></mesh>
        </group>
      </group>
      {/* Gladiator B — retiarius: hoofdband, schouderstuk en drietand */}
      <group ref={b}>
        <mesh position={[-0.08, 0.14, 0]}><boxGeometry args={[0.11, 0.28, 0.12]} /><meshStandardMaterial color="#6a4a2a" flatShading /></mesh>
        <mesh position={[0.08, 0.14, 0]}><boxGeometry args={[0.11, 0.28, 0.12]} /><meshStandardMaterial color="#6a4a2a" flatShading /></mesh>
        <mesh position={[0, 0.48, 0]} castShadow><boxGeometry args={[0.34, 0.4, 0.2]} /><meshStandardMaterial color="#2e6e8e" flatShading /></mesh>
        <mesh position={[0, 0.82, 0]} castShadow><boxGeometry args={[0.22, 0.22, 0.22]} /><meshStandardMaterial color={huid} flatShading /></mesh>
        <mesh position={[0, 0.92, 0]}><boxGeometry args={[0.24, 0.05, 0.24]} /><meshStandardMaterial color="#d33a2f" flatShading /></mesh>
        <mesh position={[-0.22, 0.72, 0]}><boxGeometry args={[0.16, 0.12, 0.24]} /><meshStandardMaterial color="#c8c4bc" flatShading metalness={0.3} /></mesh>
        <mesh position={[-0.24, 0.52, 0.06]}><boxGeometry args={[0.1, 0.3, 0.1]} /><meshStandardMaterial color={huid} flatShading /></mesh>
        {/* rechterarm (zwaait) met drietand */}
        <group ref={armB} position={[0.24, 0.66, 0]}>
          <mesh position={[0, -0.14, 0]}><boxGeometry args={[0.1, 0.3, 0.1]} /><meshStandardMaterial color={huid} flatShading /></mesh>
          <mesh position={[0, -0.24, 0.34]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.025, 0.025, 0.9, 8]} /><meshStandardMaterial color="#8a6a3a" flatShading /></mesh>
          {[-0.06, 0, 0.06].map((x, i) => (
            <mesh key={i} position={[x, -0.24, 0.82]} rotation={[Math.PI / 2, 0, 0]}><coneGeometry args={[0.02, 0.14, 6]} /><meshStandardMaterial color="#c8c4bc" flatShading metalness={0.4} /></mesh>
          ))}
        </group>
      </group>
    </group>
  );
}

/* 🏟️ Romeinse arena (was: Griekse tempel — Mark 26 aug: "kan het een echt
   gelijkend Grieks of Romeins bouwwerk worden met 2 gladiatoren erin?").
   Mini-Colosseum: ronde muur met twee ringen bogen (zoals het echte Colosseum),
   een open ingang aan de poort-kant, zandvloer, publiek op de rand en rode
   vaandels. Binnenin de gladiatoren + de gevecht-knop (GladiatorenDuel).
   ✚ 27 aug (Mark: "dubbel zo groot dat ik erin kan lopen", later "nog een slag
   groter"): alles ×ARENA_S (nu 2,6 → Ø ~14 m, 7×7 cellen) via een scale-group,
   behalve de zandvloer (die blijft dun, anders sta je tot je enkels in het
   zand) en de gladiatoren (anders worden het reuzen). De botsing is begaanbaar
   (muur-ring + open ingang, zie ZooScene), de camera negeert de arena (anders
   klapt de arm dicht als je erin staat) en de magische poort staat vóór de
   ingang — de doorloop-detectie meet op de poort zelf (POORT_AFSTAND in
   ZooScene), dáárom deed hij eerst niets. Duidelijke ingang: stenen loper
   naar binnen + fakkels op de deurposten. */
export const ARENA_S = 2.6;
export function GriekseTempel({ position = [0, 0, 0], rotation = 0 }) {
  const steen = "#e6dfd0", band = "#d8d0bc";
  const R = 2.7, GAP = 0.85; // basis-straal + open ingang (radialen), richting de poort
  const pilaren = useMemo(() => {
    const uit = [];
    const N = 16;
    for (let i = 0; i < N; i++) {
      const th = (i / N) * Math.PI * 2;
      // ingang open laten (rond -z, waar ook de magische poort staat)
      const dGap = Math.abs(((th - Math.PI) + Math.PI * 3) % (Math.PI * 2) - Math.PI);
      if (dGap < GAP / 2 + 0.18) continue;
      uit.push([Math.sin(th) * R, Math.cos(th) * R, th]);
    }
    return uit;
  }, []);
  const publiek = useMemo(() => {
    const kleuren = ["#e2574c", "#3a6ad8", "#2e9e4f", "#e8a33c", "#7c3aed", "#26c6da"];
    return [0.4, 1.1, 1.9, 2.6, 3.5, 4.2, 5.0, 5.6].map((th, i) => [Math.sin(th) * (R - 0.15), Math.cos(th) * (R - 0.15), th, kleuren[i % kleuren.length]]);
  }, []);
  // Banden met een opening bij de ingang (thetaStart/Length van CylinderGeometry).
  const bandArgs = (r, h) => [r, r, h, 28, 1, true, Math.PI + GAP / 2, Math.PI * 2 - GAP];
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* zandvloer van de arena — op ware grootte, bewust dun (níét in de scale-group) */}
      <mesh position={[0, 0.05, 0]} receiveShadow><cylinderGeometry args={[R * ARENA_S - 0.15, R * ARENA_S + 0.2, 0.1, 36]} /><meshStandardMaterial color="#e8d8a8" flatShading roughness={1} /></mesh>
      {/* het gebouw zelf ×ARENA_S: muren, banden, ingang, publiek, vaandels */}
      <group scale={[ARENA_S, ARENA_S, ARENA_S]}>
        {/* twee ringen pilaren (bogen-illusie) — onderste zwaarder dan de bovenste */}
        {pilaren.map(([x, z], i) => (
          <group key={i} position={[x, 0, z]}>
            <mesh position={[0, 0.62, 0]} castShadow><boxGeometry args={[0.26, 1.05, 0.26]} /><meshStandardMaterial color={steen} flatShading roughness={1} /></mesh>
            <mesh position={[0, 1.8, 0]} castShadow><boxGeometry args={[0.2, 0.95, 0.2]} /><meshStandardMaterial color={steen} flatShading roughness={1} /></mesh>
          </group>
        ))}
        {/* horizontale banden (met open ingang), zoals de ringen van het Colosseum */}
        <mesh position={[0, 1.22, 0]} castShadow><cylinderGeometry args={bandArgs(R + 0.06, 0.26)} /><meshStandardMaterial color={band} flatShading roughness={1} side={2} /></mesh>
        <mesh position={[0, 2.36, 0]} castShadow><cylinderGeometry args={bandArgs(R + 0.06, 0.26)} /><meshStandardMaterial color={band} flatShading roughness={1} side={2} /></mesh>
        <mesh position={[0, 2.98, 0]} castShadow><cylinderGeometry args={bandArgs(R + 0.12, 0.34)} /><meshStandardMaterial color={steen} flatShading roughness={1} side={2} /></mesh>
        {/* ingang-omlijsting: twee stevige deurposten + latei, mét fakkels
            erbovenop zodat de ingang van ver te zien is */}
        {[-1, 1].map((k) => {
          const px = Math.sin(Math.PI + k * (GAP / 2 + 0.08)) * R, pz = Math.cos(Math.PI + k * (GAP / 2 + 0.08)) * R;
          return (
            <group key={k} position={[px, 0, pz]}>
              <mesh position={[0, 0.95, 0]} castShadow><boxGeometry args={[0.34, 1.9, 0.34]} /><meshStandardMaterial color={band} flatShading roughness={1} /></mesh>
              <mesh position={[0, 2.02, 0]}><cylinderGeometry args={[0.05, 0.07, 0.28, 8]} /><meshStandardMaterial color="#5a4632" flatShading roughness={1} /></mesh>
              <mesh position={[0, 2.24, 0]}><coneGeometry args={[0.13, 0.3, 8]} /><meshStandardMaterial color="#ffb03a" emissive="#ff7a1e" emissiveIntensity={0.9} flatShading /></mesh>
            </group>
          );
        })}
        <mesh position={[0, 2.0, -R]} castShadow><boxGeometry args={[1.7, 0.3, 0.4]} /><meshStandardMaterial color={band} flatShading roughness={1} /></mesh>
        {/* publiek: gekleurde blokjes-koppen op de bovenrand */}
        {publiek.map(([x, z, th, kleur], i) => (
          <group key={`p${i}`} position={[x, 3.28, z]} rotation={[0, th + Math.PI, 0]}>
            <mesh><boxGeometry args={[0.16, 0.2, 0.14]} /><meshStandardMaterial color={kleur} flatShading /></mesh>
            <mesh position={[0, 0.16, 0]}><boxGeometry args={[0.12, 0.12, 0.12]} /><meshStandardMaterial color="#e8b98a" flatShading /></mesh>
          </group>
        ))}
        {/* rode vaandels aan de bovenrand */}
        {[0.9, 2.6, 3.9, 5.4].map((th, i) => (
          <mesh key={`v${i}`} position={[Math.sin(th) * (R + 0.18), 2.55, Math.cos(th) * (R + 0.18)]} rotation={[0, th, 0]}>
            <boxGeometry args={[0.34, 0.7, 0.04]} /><meshStandardMaterial color="#b03a30" flatShading />
          </mesh>
        ))}
      </group>
      {/* 🪨 stenen loper: een duidelijk pad van buiten (voorbij de poort) door
          de ingang naar binnen — "waar mag ik naar binnen?" is nu zichtbaar */}
      <mesh position={[0, 0.115, -(R * ARENA_S + 0.9)]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[3.4, 5.6]} /><meshStandardMaterial color="#b8ab90" flatShading roughness={1} /></mesh>
      <mesh position={[0, 0.125, -(R * ARENA_S + 0.9)]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[2.8, 5.2]} /><meshStandardMaterial color="#d8cdb2" flatShading roughness={1} /></mesh>
      {/* gladiatoren + gevecht-knop in het zand (eigen bescheiden schaal) */}
      <GladiatorenDuel />
      <MagischePoort kleur="#ffd6a0" emoji="🏟️" label="De oudheid" z={-(R * ARENA_S + 1.3)} breedte={3.0} hoogte={3.4} />
    </group>
  );
}

/* 🌍 Wereldbol — draaiende globe op een as-standaard. → topografie wereld. */
export function Wereldbol({ position = [0, 0, 0], rotation = 0 }) {
  const bol = useRef();
  useFrame((s, dt) => { if (bol.current) bol.current.rotation.y += dt * 0.35; });
  const vlekken = useMemo(() => ([
    [0.5, 0.4, 0.6], [-0.4, 0.5, 0.55], [0.3, -0.5, 0.5], [-0.6, -0.2, 0.45], [0.7, -0.1, 0.4], [-0.2, 0.75, 0.4],
  ]), []);
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <Sokkel r={0.7} h={0.34} color="#6a5230" />
      <mesh position={[0, 1.5, 0]} rotation={[0.41, 0, 0]}><torusGeometry args={[1.15, 0.05, 8, 32, Math.PI * 1.3]} /><meshStandardMaterial color="#c9a24a" metalness={0.5} roughness={0.4} flatShading /></mesh>
      <group ref={bol} position={[0, 1.5, 0]} rotation={[0.41, 0, 0]}>
        <mesh castShadow><sphereGeometry args={[1.0, 24, 20]} /><meshStandardMaterial color="#2f7fd0" flatShading roughness={0.6} /></mesh>
        {vlekken.map(([x, y, r], i) => {
          const len = Math.hypot(x, y, 0.5) || 1;
          return <mesh key={i} position={[(x / len) * 1.0, (y / len) * 1.0, (0.5 / len) * 1.0]}><sphereGeometry args={[r * 0.5, 10, 8]} /><meshStandardMaterial color="#4a9e3a" flatShading roughness={0.8} /></mesh>;
        })}
      </group>
      <MagischePoort kleur="#7bc6ff" emoji="🌍" label="De wereld" z={-1.4} breedte={2.6} hoogte={3.0} />
    </group>
  );
}

/* 🔭 Sterrenwacht — koepel met een telescoop-buis omhoog. → sterren & planeten. */
export function Sterrenwacht({ position = [0, 0, 0], rotation = 0 }) {
  const buis = useRef();
  useFrame((s) => { if (buis.current) buis.current.rotation.z = -0.6 + Math.sin(s.clock.elapsedTime * 0.3) * 0.18; });
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow><cylinderGeometry args={[1.1, 1.25, 1.8, 20]} /><meshStandardMaterial color="#c9cdd4" flatShading roughness={0.9} /></mesh>
      <mesh position={[0, 1.85, 0]} castShadow><sphereGeometry args={[1.12, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshStandardMaterial color="#8a9aa8" flatShading roughness={0.7} metalness={0.2} side={2} /></mesh>
      <group ref={buis} position={[0, 2.0, 0]}>
        <mesh position={[0.4, 0.5, 0]} rotation={[0, 0, -0.6]} castShadow><cylinderGeometry args={[0.18, 0.22, 1.6, 14]} /><meshStandardMaterial color="#37474f" metalness={0.4} roughness={0.5} flatShading /></mesh>
        <mesh position={[0.75, 0.95, 0]}><cylinderGeometry args={[0.2, 0.2, 0.12, 14]} /><meshStandardMaterial color="#1c2530" /></mesh>
      </group>
      <MagischePoort kleur="#b6a8ff" emoji="🔭" label="Sterren & planeten" z={-1.6} breedte={2.8} hoogte={3.0} />
    </group>
  );
}

/* 🗿 Standbeeld — een bronzen figuur op een sokkel. → bekende Nederlanders. */
export function Standbeeld({ position = [0, 0, 0], rotation = 0 }) {
  const brons = "#7d6a3f";
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.7, 0]} castShadow receiveShadow><boxGeometry args={[1.1, 1.4, 1.1]} /><meshStandardMaterial color="#9a938a" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.45, 0]}><boxGeometry args={[1.25, 0.16, 1.25]} /><meshStandardMaterial color="#b0a89c" flatShading roughness={0.9} /></mesh>
      <group position={[0, 1.55, 0]}>
        <mesh position={[0, 0.55, 0]} castShadow><cylinderGeometry args={[0.28, 0.34, 1.1, 10]} /><meshStandardMaterial color={brons} metalness={0.4} roughness={0.5} flatShading /></mesh>
        <mesh position={[0, 1.28, 0]} castShadow><sphereGeometry args={[0.26, 14, 12]} /><meshStandardMaterial color={brons} metalness={0.4} roughness={0.5} flatShading /></mesh>
        <mesh position={[0.28, 0.85, 0]} rotation={[0, 0, -1.0]} castShadow><cylinderGeometry args={[0.08, 0.09, 0.8, 8]} /><meshStandardMaterial color={brons} metalness={0.4} roughness={0.5} flatShading /></mesh>
      </group>
      <MagischePoort kleur="#ffcf8a" emoji="🗿" label="Bekende Nederlanders" z={-1.3} breedte={2.6} hoogte={3.2} />
    </group>
  );
}

/* 🌾 Hollandse molen — romp + draaiende wieken. → water & erfgoed. */
export function HollandseMolen({ position = [0, 0, 0], rotation = 0 }) {
  const wieken = useRef();
  useFrame((s, dt) => { if (wieken.current) wieken.current.rotation.z += dt * 0.8; });
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow><cylinderGeometry args={[1.25, 1.5, 0.8, 8]} /><meshStandardMaterial color="#8a8177" flatShading roughness={1} /></mesh>
      <mesh position={[0, 1.9, 0]} castShadow><cylinderGeometry args={[0.75, 1.2, 2.4, 8]} /><meshStandardMaterial color="#6a4a2f" flatShading roughness={1} /></mesh>
      <mesh position={[0, 3.3, 0]} castShadow><coneGeometry args={[0.85, 0.9, 8]} /><meshStandardMaterial color="#4a3320" flatShading roughness={1} /></mesh>
      <group ref={wieken} position={[0, 3.0, 0.9]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.09, 0.09, 0.3, 8]} /><meshStandardMaterial color="#2b2b2b" /></mesh>
        {[0, 1, 2, 3].map((i) => (
          <group key={i} rotation={[0, 0, (i * Math.PI) / 2]}>
            <mesh position={[0, 1.1, 0.05]} castShadow><boxGeometry args={[0.14, 2.2, 0.06]} /><meshStandardMaterial color="#c9b79a" flatShading /></mesh>
            <mesh position={[0.18, 1.1, 0.06]}><boxGeometry args={[0.28, 2.0, 0.02]} /><meshStandardMaterial color="#e8dcc0" transparent opacity={0.85} side={2} /></mesh>
          </group>
        ))}
      </group>
      <MagischePoort kleur="#9ad0a0" emoji="🌾" label="Water & erfgoed" z={-1.7} breedte={2.8} hoogte={3.2} />
    </group>
  );
}

/* 🚀 Raket — romp + neuskegel + vinnen op een lanceerplateau. → ruimtevaart. */
// 📡 Vlucht-baken voor de volg-camera (Mark 26 aug: "ik kan hem niet nakijken
// omdat het hoofd niet verder omhoog gaat"): tijdens de vlucht schrijft de
// raket hier elke frame zijn wereldpositie; RaketVolgCamera in ZooScene kijkt
// er dan automatisch mee omhoog. Gewone module-ref — geen React-state nodig.
export const RAKET_VLUCHT = { actief: false, x: 0, y: 0, z: 0, px: 0, pz: 0 };

// 🚀 Raket — mét echte lanceerknop (Mark 26 aug: "een rode knop 'Lanceer' en
// als je erop drukt schiet de raket de ruimte in"). Tik op de rode knop op de
// lanceerconsole → aftellen 3-2-1 → de raket trilt, stijgt met grote vlam en
// rook de lucht in, zweeft even in "de ruimte" en landt daarna netjes terug op
// het platform (rechtstandig, SpaceX-stijl) voor de volgende vlucht. De hele
// vlucht draait op refs in useFrame — geen re-renders per frame.
export function Raket({ position = [0, 0, 0], rotation = 0, onOefenen = null }) {
  const vlam = useRef();
  const schip = useRef();
  const rookRefs = useRef([]);
  const klaarRef = useRef(false);
  const t0 = useRef(null);
  const [fase, setFase] = useState("klaar"); // klaar | aftellen | vlucht
  const [teller, setTeller] = useState(null);
  const STIJG = 1.5, TOP = 7.5, ZWEEF = 11, DAAL = 18; // seconden in de vlucht
  const HOOG = 160;
  // Bij weggaan uit het park nooit de volg-camera aan laten staan.
  useEffect(() => () => { RAKET_VLUCHT.actief = false; }, []);
  useEffect(() => {
    if (fase !== "aftellen") return;
    setTeller(3);
    const iv = setInterval(() => setTeller((n) => (n > 1 ? n - 1 : n)), 800);
    const done = setTimeout(() => {
      clearInterval(iv); setTeller(null);
      t0.current = null; klaarRef.current = false;
      setFase("vlucht");
      parkAudioRaket(); // geluidscurve volgt de vaste vluchttijden (STIJG/TOP/ZWEEF/DAAL)
      try { track("park_raket_lancering", {}); } catch { /* */ }
    }, 2400);
    return () => { clearInterval(iv); clearTimeout(done); };
  }, [fase]);
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    const g = schip.current;
    if (fase !== "vlucht") {
      if (g) g.position.set(0, 0, 0);
      if (vlam.current) { const k = 0.8 + Math.sin(t * 12) * 0.2; vlam.current.scale.set(k, k, k); }
      rookRefs.current.forEach((m) => { if (m) m.visible = false; });
      return;
    }
    RAKET_VLUCHT.actief = true;
    RAKET_VLUCHT.px = position[0]; RAKET_VLUCHT.pz = position[2];
    if (!g) return;
    if (t0.current == null) t0.current = t;
    const u = t - t0.current;
    let y = 0, wieb = 0, stuw = false;
    if (u < STIJG) { wieb = 0.04; stuw = true; }                                  // trillen op het platform
    else if (u < TOP) { const a = (u - STIJG) / (TOP - STIJG); y = a * a * HOOG; wieb = 0.015; stuw = true; } // stijgen
    else if (u < ZWEEF) { y = HOOG + (u - TOP) * 6; }                             // zweven in "de ruimte"
    else if (u < DAAL) { const a = (u - ZWEEF) / (DAAL - ZWEEF); const top = HOOG + (ZWEEF - TOP) * 6; y = top * (1 - a * a * (3 - 2 * a)); stuw = a > 0.5; } // dalen + rem-vlam
    else if (!klaarRef.current) { klaarRef.current = true; RAKET_VLUCHT.actief = false; setFase("klaar"); }
    g.position.set(Math.sin(t * 43) * wieb, y, Math.sin(t * 37 + 1) * wieb);
    // Baken voor de volg-camera: midden van het schip in wereld-coördinaten.
    RAKET_VLUCHT.x = position[0] + g.position.x;
    RAKET_VLUCHT.y = position[1] + y + 2.2;
    RAKET_VLUCHT.z = position[2] + g.position.z;
    if (vlam.current) {
      const k = (stuw ? 1.5 : 0.35) + Math.sin(t * 22) * 0.25;
      vlam.current.scale.set(k, stuw ? k * 1.6 : k, k);
    }
    // Rookpufjes bij het platform: tijdens de start en vlak voor de landing.
    const rookAan = u < STIJG + 2.5 || (u > DAAL - 2 && u < DAAL + 0.4);
    rookRefs.current.forEach((m, i) => {
      if (!m) return;
      m.visible = rookAan;
      if (!rookAan) return;
      const lok = (u * 0.9 + i * 0.33) % 1.3;
      const gr = 0.5 + lok * 1.5;
      m.scale.set(gr, gr, gr);
      m.position.set(Math.sin(i * 2.5) * (0.6 + lok * 0.9), 0.35 + lok * 0.7, Math.cos(i * 2.5) * (0.6 + lok * 0.9));
      m.material.opacity = Math.max(0, 0.55 - lok * 0.42);
    });
  });
  const lanceer = (e) => { e?.stopPropagation?.(); if (fase === "klaar") setFase("aftellen"); };
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* platform */}
      <mesh position={[0, 0.15, 0]} receiveShadow><cylinderGeometry args={[1.1, 1.25, 0.3, 12]} /><meshStandardMaterial color="#5a5f66" flatShading roughness={1} /></mesh>
      {/* het schip zelf — vliegt als één groep omhoog */}
      <group ref={schip}>
        <mesh position={[0, 2.0, 0]} castShadow><cylinderGeometry args={[0.5, 0.55, 3.2, 18]} /><meshStandardMaterial color="#f2f2f2" flatShading roughness={0.5} /></mesh>
        <mesh position={[0, 2.6, 0]}><cylinderGeometry args={[0.52, 0.52, 0.3, 18]} /><meshStandardMaterial color="#e2574c" flatShading roughness={0.5} /></mesh>
        <mesh position={[0, 3.95, 0]} castShadow><coneGeometry args={[0.5, 1.1, 18]} /><meshStandardMaterial color="#e2574c" flatShading roughness={0.5} /></mesh>
        <mesh position={[0, 2.9, 0.5]}><sphereGeometry args={[0.16, 12, 10]} /><meshStandardMaterial color="#7bc6ff" emissive="#7bc6ff" emissiveIntensity={0.3} /></mesh>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[Math.sin((i / 3) * Math.PI * 2) * 0.5, 0.7, Math.cos((i / 3) * Math.PI * 2) * 0.5]} rotation={[0, -(i / 3) * Math.PI * 2, 0]} castShadow>
            <boxGeometry args={[0.08, 0.9, 0.5]} /><meshStandardMaterial color="#c0392b" flatShading />
          </mesh>
        ))}
        <mesh ref={vlam} position={[0, 0.35, 0]} rotation={[Math.PI, 0, 0]}><coneGeometry args={[0.3, 0.7, 10]} /><meshStandardMaterial color="#ffb03a" emissive="#ff8a1e" emissiveIntensity={0.7} transparent opacity={0.85} /></mesh>
      </group>
      {/* rookpufjes (alleen zichtbaar bij start/landing) */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={`rook${i}`} ref={(el) => { rookRefs.current[i] = el; }} visible={false}>
          <sphereGeometry args={[0.4, 8, 6]} />
          <meshStandardMaterial color="#d8d4cc" transparent opacity={0.5} depthWrite={false} />
        </mesh>
      ))}
      {/* 🔴 lanceerconsole met de grote rode knop */}
      <group position={[1.8, 0, 1.3]}>
        <mesh position={[0, 0.34, 0]} castShadow onClick={lanceer}><boxGeometry args={[0.52, 0.68, 0.42]} /><meshStandardMaterial color="#5f6a76" flatShading roughness={0.8} /></mesh>
        <mesh position={[0, 0.72, 0]} onClick={lanceer}><cylinderGeometry args={[0.17, 0.21, 0.09, 14]} /><meshStandardMaterial color="#333940" flatShading /></mesh>
        <mesh position={[0, 0.8, 0]} onClick={lanceer}>
          <sphereGeometry args={[0.15, 14, 10]} />
          <meshStandardMaterial color="#e11d2e" emissive="#c00d1e" emissiveIntensity={fase === "klaar" ? 0.55 : 0.12} flatShading />
        </mesh>
        <Html position={[0, 1.35, 0]} center distanceFactor={8} zIndexRange={[7, 0]}>
          <button
            onClick={lanceer}
            disabled={fase !== "klaar"}
            style={{ pointerEvents: "auto", border: "3px solid #fff", borderRadius: 999, padding: "7px 16px", font: "900 14px system-ui", color: "#fff", background: fase === "klaar" ? "linear-gradient(135deg,#ff4d3a,#c0392b)" : "#8a939c", boxShadow: "0 3px 12px rgba(0,0,0,.4)", cursor: fase === "klaar" ? "pointer" : "default", whiteSpace: "nowrap" }}
          >
            {fase === "aftellen" ? `🚀 ${teller ?? ""}...` : fase === "vlucht" ? "🌌 in de ruimte..." : "🚀 LANCEER"}
          </button>
        </Html>
      </group>
      {/* 🎓 Leer-bord: de twee lessen van de raket, zichtbaar naast het platform
          (de console staat rechts, het bord links). */}
      <LeerBord moment="raket" onOefenen={onOefenen} position={[-1.9, 0, 1.2]} />
      {/* groot aftel-cijfer boven het platform */}
      {teller != null && (
        <Html position={[0, 5.2, 0]} center distanceFactor={10} zIndexRange={[7, 0]} style={{ pointerEvents: "none" }}>
          <div style={{ font: "900 52px system-ui", color: "#fff", textShadow: "0 3px 10px rgba(0,0,0,.6)" }}>{teller}</div>
        </Html>
      )}
      <MagischePoort kleur="#b6a8ff" emoji="🚀" label="Ruimtevaart" z={-1.6} breedte={2.6} hoogte={3.4} />
    </group>
  );
}

/* 🌋 Vulkaan — kegelberg met krater + rook. → platentektoniek. */
export function Vulkaan({ position = [0, 0, 0], rotation = 0 }) {
  const rook = useRef();
  useFrame((s) => { if (rook.current) { const t = s.clock.elapsedTime; rook.current.position.y = 2.6 + (t % 2) * 0.4; rook.current.material.opacity = 0.5 - (t % 2) * 0.22; } });
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 1.2, 0]} castShadow receiveShadow><coneGeometry args={[2.0, 2.6, 24, 1, true]} /><meshStandardMaterial color="#5a4a42" flatShading roughness={1} side={2} /></mesh>
      <mesh position={[0, 2.45, 0]}><cylinderGeometry args={[0.55, 0.75, 0.3, 16]} /><meshStandardMaterial color="#3a2f2a" flatShading roughness={1} /></mesh>
      <mesh position={[0, 2.5, 0]}><cylinderGeometry args={[0.5, 0.5, 0.1, 16]} /><meshStandardMaterial color="#ff6a1e" emissive="#ff3a00" emissiveIntensity={0.7} /></mesh>
      {[0, 1, 2].map((i) => <mesh key={i} position={[Math.sin(i * 2) * 0.7, 1.7, Math.cos(i * 2) * 0.7]} rotation={[0.4, i, 0]}><boxGeometry args={[0.12, 0.9, 0.04]} /><meshStandardMaterial color="#ff7a2e" emissive="#ff5a1e" emissiveIntensity={0.5} /></mesh>)}
      <mesh ref={rook} position={[0, 2.6, 0]}><sphereGeometry args={[0.55, 10, 8]} /><meshStandardMaterial color="#9a9088" transparent opacity={0.5} /></mesh>
      <MagischePoort kleur="#ffb0a0" emoji="🌋" label="Aardlagen & vulkanen" z={-1.9} breedte={2.8} hoogte={3.0} />
    </group>
  );
}

/* 🥕 Kas — een glazen kas met groenten. → gezonde voeding (+ fotosynthese). */
export function Kas({ position = [0, 0, 0], rotation = 0 }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.9, 0]}><boxGeometry args={[2.4, 1.8, 1.8]} /><meshStandardMaterial color="#bfe3f2" transparent opacity={0.4} roughness={0.2} side={2} /></mesh>
      {/* dak: 4-zijdige punt (piramidedak), 45° gedraaid */}
      <mesh position={[0, 2.25, 0]} rotation={[0, Math.PI / 4, 0]}><coneGeometry args={[1.5, 0.9, 4]} /><meshStandardMaterial color="#cbe9f5" transparent opacity={0.4} side={2} /></mesh>
      {[[-1.2, 0], [1.2, 0], [0, -0.9], [0, 0.9]].map(([x, z], i) => <mesh key={i} position={[x, 0.9, z]}><boxGeometry args={[0.08, 1.8, 0.08]} /><meshStandardMaterial color="#4a8f3a" flatShading /></mesh>)}
      <mesh position={[0, 0.25, 0]}><boxGeometry args={[2.0, 0.4, 1.4]} /><meshStandardMaterial color="#5b4630" flatShading roughness={1} /></mesh>
      {[-0.6, 0, 0.6].map((x, i) => <group key={i} position={[x, 0.55, 0]}><mesh><sphereGeometry args={[0.22, 8, 6]} /><meshStandardMaterial color="#4a9e3a" flatShading /></mesh><mesh position={[0, 0.2, 0]}><coneGeometry args={[0.09, 0.24, 6]} /><meshStandardMaterial color="#e8722c" flatShading /></mesh></group>)}
      <MagischePoort kleur="#9ad0a0" emoji="🥕" label="Gezond eten" z={-1.6} breedte={2.6} hoogte={2.8} />
    </group>
  );
}

/* 🌦️ Weerstation — paal met draaiend windvaantje + thermometer. → weer. */
export function Weerstation({ position = [0, 0, 0], rotation = 0 }) {
  const vaan = useRef();
  useFrame((s) => { if (vaan.current) vaan.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.7) * 0.8; });
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <Sokkel r={0.5} h={0.28} />
      <mesh position={[0, 1.5, 0]} castShadow><cylinderGeometry args={[0.07, 0.08, 2.6, 8]} /><meshStandardMaterial color="#8a949d" metalness={0.4} roughness={0.5} flatShading /></mesh>
      <group ref={vaan} position={[0, 2.9, 0]}>
        <mesh position={[0.35, 0, 0]}><boxGeometry args={[0.5, 0.3, 0.02]} /><meshStandardMaterial color="#e2574c" flatShading side={2} /></mesh>
        <mesh position={[-0.3, 0, 0]} rotation={[0, 0, -Math.PI / 2]}><coneGeometry args={[0.12, 0.4, 4]} /><meshStandardMaterial color="#37474f" flatShading /></mesh>
        <mesh><sphereGeometry args={[0.09, 8, 8]} /><meshStandardMaterial color="#d8b04a" /></mesh>
      </group>
      <mesh position={[0.3, 1.4, 0]}><boxGeometry args={[0.16, 0.9, 0.05]} /><meshStandardMaterial color="#eceff1" flatShading /></mesh>
      <mesh position={[0.3, 1.15, 0.03]}><cylinderGeometry args={[0.06, 0.06, 0.1, 8]} /><meshStandardMaterial color="#e2574c" /></mesh>
      <MagischePoort kleur="#9ecbff" emoji="🌦️" label="Het weer" z={-1.3} breedte={2.4} hoogte={3.2} />
    </group>
  );
}

/* 🐷 Spaarpot-huisje — een grote spaarvarken op een sokkel. → geldwijsheid. */
export function Spaarpot({ position = [0, 0, 0], rotation = 0 }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <Sokkel r={0.85} h={0.34} color="#8a7f70" />
      <mesh position={[0, 1.25, 0]} castShadow><sphereGeometry args={[0.95, 18, 14]} /><meshStandardMaterial color="#f3a0c0" flatShading roughness={0.6} /></mesh>
      <mesh position={[0, 1.2, 0.9]} rotation={[Math.PI / 2, 0, 0]} castShadow><cylinderGeometry args={[0.3, 0.3, 0.3, 14]} /><meshStandardMaterial color="#e88fb0" flatShading /></mesh>
      {[[-0.4, 0.5], [0.4, 0.5], [-0.4, -0.4], [0.4, -0.4]].map(([x, z], i) => <mesh key={i} position={[x, 0.5, z]} castShadow><cylinderGeometry args={[0.16, 0.16, 0.5, 10]} /><meshStandardMaterial color="#e88fb0" flatShading /></mesh>)}
      <mesh position={[0, 2.1, 0]}><boxGeometry args={[0.4, 0.05, 0.12]} /><meshStandardMaterial color="#c56a90" /></mesh>
      <mesh position={[0, 2.5, 0]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.18, 0.18, 0.04, 16]} /><meshStandardMaterial color="#f2c14e" metalness={0.6} roughness={0.3} /></mesh>
      {[-0.45, 0.45].map((x, i) => <mesh key={i} position={[x, 1.95, 0.3]} rotation={[0.3, 0, 0]}><coneGeometry args={[0.16, 0.3, 6]} /><meshStandardMaterial color="#e88fb0" flatShading /></mesh>)}
      <MagischePoort kleur="#ffe08a" emoji="🐷" label="Slim met geld" z={-1.5} breedte={2.6} hoogte={3.0} />
    </group>
  );
}

/* 🚧 Bouwbord — "hier wordt nog gebouwd" (Mark 22 aug): maakt de groei-plekken
   van het park zichtbaar en belooft wat er komt. variant "zwembad" kondigt het
   geplande zwembad aan (idee #44: balk vult zich met water, l × b × d). */
export function Bouwbord({ position = [0, 0, 0], rotation = 0, variant = "bouw" }) {
  const zwembad = variant === "zwembad";
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {[-0.55, 0.55].map((x, i) => (
        <mesh key={i} position={[x, 0.7, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 1.4, 8]} />
          <meshStandardMaterial color="#7a5a34" flatShading roughness={1} />
        </mesh>
      ))}
      <mesh position={[0, 1.35, 0]} castShadow>
        <boxGeometry args={[1.75, 0.9, 0.08]} />
        <meshStandardMaterial color={zwembad ? "#3a78c9" : "#e8b400"} flatShading roughness={0.8} />
      </mesh>
      {/* gestreepte bouw-rand onder het bord */}
      {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
        <mesh key={"s" + i} position={[x, 0.86, 0.01]} rotation={[0, 0, 0.5]}>
          <boxGeometry args={[0.1, 0.16, 0.09]} />
          <meshStandardMaterial color={i % 2 ? "#1c1c1c" : (zwembad ? "#cfe4ff" : "#fff")} flatShading />
        </mesh>
      ))}
      <Html position={[0, 1.38, 0.07]} center distanceFactor={10} zIndexRange={[7, 0]} style={{ pointerEvents: "none" }}>
        <div style={{ background: "rgba(255,255,255,0.94)", borderRadius: 8, padding: "5px 10px", fontFamily: "system-ui, sans-serif", fontSize: 11, fontWeight: 800, color: "#333", whiteSpace: "nowrap", textAlign: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.25)" }}>
          {zwembad
            ? <>🏊 Hier komt het zwembad!<br /><span style={{ fontWeight: 600, color: "#666" }}>hoeveel water past erin? lengte × breedte × diepte</span></>
            : <>🚧 Hier wordt nog gebouwd<br /><span style={{ fontWeight: 600, color: "#666" }}>het park groeit met jou mee</span></>}
        </div>
      </Html>
    </group>
  );
}

/* 🦕 Dino-bord — live "volgende dino"-bord op de lege dino-groeiplek (Mark 22
   aug, park-megabuild #3). Beantwoordt de vraag "wat komt hier?" op de plek waar
   het kind emotioneel al staat: nog X lesjes leren → de eerstvolgende dino stampt
   het verblijf binnen. hint = { naam, emoji, stappen, rest, gehad } of null. */
export function DinoBord({ position = [0, 0, 0], rotation = 0, hint = null }) {
  const klaar = !hint; // alle dino's verdiend
  const pct = hint && hint.stappen > 0 ? Math.max(0, Math.min(1, (hint.gehad || 0) / hint.stappen)) : 1;
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {[-0.6, 0.6].map((x, i) => (
        <mesh key={i} position={[x, 0.8, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 1.6, 8]} />
          <meshStandardMaterial color="#6b4f2a" flatShading roughness={1} />
        </mesh>
      ))}
      <mesh position={[0, 1.55, 0]} castShadow>
        <boxGeometry args={[2.0, 1.15, 0.09]} />
        <meshStandardMaterial color="#2e7d5b" flatShading roughness={0.85} />
      </mesh>
      <mesh position={[0, 1.55, 0.05]}>
        <boxGeometry args={[1.8, 0.95, 0.04]} />
        <meshStandardMaterial color="#e9f7ef" flatShading />
      </mesh>
      <Html position={[0, 1.58, 0.09]} center distanceFactor={9} zIndexRange={[7, 0]} style={{ pointerEvents: "none" }}>
        <div style={{ width: 150, textAlign: "center", fontFamily: "system-ui, sans-serif", color: "#1c3a2b" }}>
          {klaar ? (
            <div style={{ fontWeight: 800, fontSize: 12 }}>🦕 Alle dino's verdiend!<br /><span style={{ fontWeight: 600, color: "#4a6a58" }}>knap gedaan 🎉</span></div>
          ) : (
            <>
              <div style={{ fontSize: 30, lineHeight: 1 }}>{hint.emoji}</div>
              <div style={{ fontWeight: 800, fontSize: 12, margin: "2px 0" }}>Nog {hint.rest} {hint.rest === 1 ? "lesje" : "lesjes"}…</div>
              <div style={{ fontWeight: 700, fontSize: 11, color: "#2e7d5b" }}>dan stampt de {hint.naam} hier rond!</div>
              <div style={{ height: 7, background: "#cfe4d8", borderRadius: 999, marginTop: 5, overflow: "hidden" }}>
                <div style={{ width: `${Math.round(pct * 100)}%`, height: "100%", background: "linear-gradient(90deg,#2e7d5b,#57c98c)" }} />
              </div>
            </>
          )}
        </div>
      </Html>
    </group>
  );
}
