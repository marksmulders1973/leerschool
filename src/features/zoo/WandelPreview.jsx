// 🚶 Wandelkwartier — de route in het park (WANDELKWARTIER-PLAN.md).
//
// 20 aug 2026, twee stappen op één dag:
//   1. Bouwplaats-preview (Mark: "teken de voetstappen uit met naambordjes").
//   2. Mark liep de route en gaf go: "bouw maar in de echte app" → de
//      VOETSTAPPEN staan nu ALTIJD aan (het leerlint); alleen de gele
//      bouwbordjes ("🚧 Hier komt: …") blijven preview-only via ?wandel=1.
//
// De route volgt de bestaande paden en verandert niets aan een park; de
// seed-fontein die op de boulevard stond is apart gemigreerd (zooState:
// maakWandelrouteVrij) en het treinspoor is overloopbaar gemaakt (isVast
// respecteert `beloopbaar`). Volgende fase (stops/vragen/kwartier-koppeling)
// = M2 in het plan, aparte bouwsessie.

import { useLayoutEffect, useMemo, useRef } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { CELL } from "./grid";

export function wandelPreviewActief() {
  try {
    if ((window.location.search || "").includes("wandel=1")) {
      sessionStorage.setItem("lk_wandel_preview", "1");
      return true;
    }
    return sessionStorage.getItem("lk_wandel_preview") === "1";
  } catch {
    return false;
  }
}

// ── De geplande route in cel-coördinaten (×CELL = wereld). Volgt de bestaande
//    paden: ingang → centrum → west (meet-tuin → vormen → piramide) → terug →
//    oost (ontdek-laan/poorten) → finish bij de ingang. Om de draaimolen heen.
const ROUTE_CELLS = [
  [0, 16], [0, 12], [0, 7], [-3, 5], [-6, 3], [-8, 0],
  [-16, 0], [-24, 0], [-29, 2], [-29, 8], [-29, 13],
  [-29, 19], [-29, 25], [-30, 28],                    // ↑ meet-tuin (klok-rij)
  [-29, 24], [-29, 16], [-29, 8], [-29, 1],           // ↓ terug langs de vormen
  [-29, -5], [-30, -10], [-31, -14],                  // piramide-plein
  [-29, -8], [-29, -2], [-24, 0], [-16, 0], [-8, 0],
  [-5, -2], [-2, -4], [2, -4], [5, -2], [8, 0],       // om de draaimolen heen
  [16, 0], [22, 0], [26, 1], [29, 3],                 // ontdek-laan (poorten)
  [26, 1], [22, 0], [16, 0], [9, 0], [6, 2], [3, 4],
  [0, 7], [0, 12], [0, 15],                           // finish bij de ingang
];

// ── Bouwbordjes bij de geplande stops (cel-coördinaten + tekst).
const BORDEN = [
  { cell: [2, 15], rot: Math.PI, titel: "🚧 Start — wandeling van vandaag", tekst: "Hier begint straks je dagelijkse wandelkwartier. Je gids loopt mee langs 3 stops; route af = kwartier behaald." },
  { cell: [-33, 29], rot: Math.PI / 2, titel: "🚧 Stop — tijd & meten", tekst: "Klok, weegschaal, breukentaart: hier komt een route-stop met één vraag (groep 4-6)." },
  { cell: [-32, 13], rot: Math.PI / 2, titel: "🚧 Stop — vormen & inhoud", tekst: "Kubus, kegel, cilinder en bol: hier kiest de route jouw zwakste onderwerp (groep 6-8)." },
  { cell: [-34, -12], rot: Math.PI / 2, titel: "🚧 Stop — de piramide", tekst: "Schuiven, aftellen, formule: de blauwdruk van elke grote stop. Goed antwoord = gouden spoor." },
  { cell: [0, -6], rot: 0, titel: "🚧 Rustpunt", tekst: "Halverwege even niks: je maatje vertelt hier een weetje bij het station." },
  { cell: [29, 6], rot: 0, titel: "🚧 Stop — magische poorten", tekst: "Loop door een poort en het leerpad opent — hier landt de laatste stop van de route (alle vakken)." },
  { cell: [-2, 14], rot: Math.PI, titel: "🏁 Finish — kwartier behaald!", tekst: "Terug bij de ingang: viering, je dagdoel staat op groen, en morgen ligt er een nieuwe route." },
];

const STAP_AFSTAND = 1.15;  // wereld-units tussen voetstappen
const VOET_OFFSET = 0.24;   // links/rechts van de routelijn

export default function WandelPreview({ heightRef, borden = false }) {
  const instRef = useRef();

  // Alle voetstap-posities één keer uitrekenen (positie, kijkrichting, l/r).
  const stappen = useMemo(() => {
    const pts = ROUTE_CELLS.map(([cx, cz]) => new THREE.Vector2(cx * CELL, cz * CELL));
    const out = [];
    let links = false;
    let rest = 0;
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      const seg = b.clone().sub(a);
      const len = seg.length();
      if (len < 0.001) continue;
      const dir = seg.clone().normalize();
      const perp = new THREE.Vector2(-dir.y, dir.x);
      let d = rest;
      while (d < len) {
        const p = a.clone().addScaledVector(dir, d).addScaledVector(perp, links ? VOET_OFFSET : -VOET_OFFSET);
        out.push({ x: p.x, z: p.y, hoek: Math.atan2(dir.x, dir.y) });
        links = !links;
        d += STAP_AFSTAND;
      }
      rest = d - len;
    }
    return out;
  }, []);

  useLayoutEffect(() => {
    const inst = instRef.current;
    if (!inst) return;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const liggend = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
    const schaal = new THREE.Vector3(1, 1.7, 1); // ovaal zooltje
    stappen.forEach((s, i) => {
      const y = (heightRef?.current ? heightRef.current(s.x, s.z) : 0) + 0.06;
      q.setFromEuler(new THREE.Euler(0, s.hoek, 0)).multiply(liggend);
      m.compose(new THREE.Vector3(s.x, y, s.z), q, schaal);
      inst.setMatrixAt(i, m);
    });
    inst.instanceMatrix.needsUpdate = true;
  }, [stappen, heightRef]);

  return (
    <group>
      {/* Voetstappen — één instancedMesh (goedkoop, ook op LOW_END). */}
      <instancedMesh ref={instRef} args={[null, null, stappen.length]} frustumCulled={false}>
        <circleGeometry args={[0.15, 10]} />
        <meshBasicMaterial color="#00e676" transparent opacity={0.85} depthWrite={false} />
      </instancedMesh>

      {/* Bouwbordjes bij de geplande stops — alleen in de preview (?wandel=1). */}
      {borden && BORDEN.map((b, i) => {
        const x = b.cell[0] * CELL, z = b.cell[1] * CELL;
        const y = heightRef?.current ? heightRef.current(x, z) : 0;
        return (
          <group key={i} position={[x, y, z]} rotation={[0, b.rot || 0, 0]}>
            <mesh position={[-0.55, 0.55, 0]} castShadow>
              <boxGeometry args={[0.09, 1.1, 0.09]} />
              <meshStandardMaterial color="#7a5230" />
            </mesh>
            <mesh position={[0.55, 0.55, 0]} castShadow>
              <boxGeometry args={[0.09, 1.1, 0.09]} />
              <meshStandardMaterial color="#7a5230" />
            </mesh>
            <mesh position={[0, 1.25, 0]} castShadow>
              <boxGeometry args={[1.7, 0.75, 0.06]} />
              <meshStandardMaterial color="#f7c948" />
            </mesh>
            <Html position={[0, 1.25, 0.05]} center distanceFactor={9} zIndexRange={[7, 0]} style={{ pointerEvents: "none" }}>
              <div style={{ width: 240, background: "#f7c948", color: "#3b2a10", border: "3px solid #3b2a10", borderRadius: 8, padding: "8px 10px", fontFamily: "system-ui, sans-serif", textAlign: "center", boxShadow: "0 3px 10px rgba(0,0,0,0.35)" }}>
                <div style={{ fontWeight: 800, fontSize: 15, lineHeight: 1.2 }}>{b.titel}</div>
                <div style={{ fontSize: 11.5, lineHeight: 1.35, marginTop: 4 }}>{b.tekst}</div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}
