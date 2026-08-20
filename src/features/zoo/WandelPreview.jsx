// 🚶 Wandelkwartier — gekleurde stappenpaden door het park (WANDELKWARTIER-PLAN.md).
//
// 20 aug 2026, gegroeid in drie stappen op één dag:
//   1. Bouwplaats-preview (Mark: "teken de voetstappen uit met naambordjes").
//   2. Mark liep de route: "bouw maar in de echte app" → voetstappen altijd aan.
//   3. Mark: "geef bij de voetstappen aan: stappenpad van groep 5 — net als
//      wandelpaden in een bos" → DRIE routes in bos-stijl, elk met eigen kleur
//      en een route-paaltje bij de ingang (🥾 gele/groene/blauwe route).
//
// De routes volgen de bestaande paden en veranderen niets aan een park; de
// gele bouwbordjes ("🚧 Hier komt: …") blijven preview-only via ?wandel=1.
// Volgende fase (stops/vragen/kwartier-koppeling) = M2 in het plan.

import { useLayoutEffect, useMemo, useRef } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { CELL } from "./grid";
import { WANDEL_ROUTES } from "./wandelRoutes";

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

// De routes zelf (kleuren, cellen, stops) staan in wandelRoutes.js — één
// bron-van-waarheid, gedeeld met de wandel-logica in ZookwartierGame.
const ROUTES = WANDEL_ROUTES;

// 🏷️ Route-stempel in het spoor (Mark 20 aug: "zet om de 10-20 voetstappen ín
// een voetstap waar deze voor staat — kinderen moeten het snel begrijpen").
// Zoals tekst op een fietspad: om de zoveel stappen wordt een voetstap
// vervangen door een ovaal in de routekleur met "groep 3-5" erop.
const STEMPEL_ELKE = 14;

function maakStempelTexture(route) {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 96;
  const ctx = c.getContext("2d");
  ctx.fillStyle = route.kleur;
  ctx.beginPath();
  ctx.ellipse(128, 48, 124, 44, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = route.tekstKleur || "#233";
  ctx.font = "800 40px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(route.stempel || route.groep, 128, 50);
  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

// 🥾 Route-paaltjes bij de ingang (altijd zichtbaar, zoals in een bos):
// gekleurde kop + bordje "Gele route · groep 3-5". Op het gras links van de poort.
const PAALTJES = [
  { route: 0, cell: [-5.2, 14.2] },
  { route: 1, cell: [-4.0, 14.2] },
  { route: 2, cell: [-2.8, 14.2] },
];

// ── Bouwbordjes bij de geplande stops (alleen preview via ?wandel=1).
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

function berekenStappen(cells, routeOffset) {
  const pts = cells.map(([cx, cz]) => new THREE.Vector2(cx * CELL, cz * CELL));
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
      const p = a.clone().addScaledVector(dir, d)
        .addScaledVector(perp, routeOffset + (links ? VOET_OFFSET : -VOET_OFFSET));
      out.push({ x: p.x, z: p.y, hoek: Math.atan2(dir.x, dir.y) });
      links = !links;
      d += STAP_AFSTAND;
    }
    rest = d - len;
  }
  return out;
}

function VoetstappenSpoor({ route, heightRef }) {
  const instRef = useRef();
  const alle = useMemo(() => berekenStappen(route.cells, route.offset), [route]);
  // Om de STEMPEL_ELKE stappen: voetstap vervangen door een route-stempel.
  const { stappen, stempels } = useMemo(() => {
    const voeten = [], st = [];
    alle.forEach((s, i) => {
      if (i > 6 && i % STEMPEL_ELKE === 0) st.push(s);
      else voeten.push(s);
    });
    return { stappen: voeten, stempels: st };
  }, [alle]);
  const stempelTex = useMemo(() => maakStempelTexture(route), [route]);

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
      <instancedMesh ref={instRef} args={[null, null, stappen.length]} frustumCulled={false}>
        <circleGeometry args={[0.15, 10]} />
        <meshBasicMaterial color={route.kleur} transparent opacity={0.85} depthWrite={false} />
      </instancedMesh>
      {/* 🏷️ Route-stempels: leesbaar ovaal ("groep 3-5") plat op de grond,
          met de leesrichting náár de wandelaar toe (zoals tekst op een fietspad). */}
      {stempels.map((s, i) => {
        const y = (heightRef?.current ? heightRef.current(s.x, s.z) : 0) + 0.07;
        return (
          <group key={i} position={[s.x, y, s.z]} rotation={[0, s.hoek + Math.PI, 0]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[1.35, 0.5]} />
              <meshBasicMaterial map={stempelTex} transparent depthWrite={false} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export default function WandelPreview({ heightRef, borden = false }) {
  return (
    <group>
      {ROUTES.map((r) => (
        <VoetstappenSpoor key={r.id} route={r} heightRef={heightRef} />
      ))}

      {/* 🥾 Route-paaltjes bij de ingang — zoals de gekleurde paaltjes in een bos. */}
      {PAALTJES.map((p, i) => {
        const r = ROUTES[p.route];
        const x = p.cell[0] * CELL, z = p.cell[1] * CELL;
        const y = heightRef?.current ? heightRef.current(x, z) : 0;
        return (
          <group key={i} position={[x, y, z]}>
            <mesh position={[0, 0.45, 0]} castShadow>
              <boxGeometry args={[0.1, 0.9, 0.1]} />
              <meshStandardMaterial color="#7a5230" />
            </mesh>
            <mesh position={[0, 0.98, 0]} castShadow>
              <boxGeometry args={[0.14, 0.18, 0.14]} />
              <meshStandardMaterial color={r.kleur} />
            </mesh>
            <Html position={[0, 1.35, 0]} center distanceFactor={7} zIndexRange={[6, 0]} style={{ pointerEvents: "none" }}>
              <div style={{ whiteSpace: "nowrap", background: "rgba(255,254,248,0.95)", border: `2.5px solid ${r.kleur}`, borderRadius: 999, padding: "4px 12px", fontFamily: "system-ui, sans-serif", fontSize: 13, fontWeight: 800, color: "#234", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                🥾 {r.naam} · {r.groep}
              </div>
            </Html>
          </group>
        );
      })}

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
