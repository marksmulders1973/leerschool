// 🚶 Wandelkwartier — gekleurde route-paden door het park (WANDELKWARTIER-PLAN.md).
//
// Evolutie op één dag (20 aug 2026, Mark + Brian als testteam):
//   voetstappen-preview → altijd aan → dubbele stapjes werden een stippenzee
//   op Brian's telefoon → enkele stippen per baan → en nu de eindvorm:
//   DOORGETROKKEN GEKLEURDE PADEN (Mark: "een geel, groen en blauw pad, net
//   als de uitleg-volgorde") — drie linten naast elkaar zoals looplijnen op
//   een schoolplein, oplopend van makkelijk naar zwaar (geel 3-5 → groen 6-8
//   → blauw brugklas, zoals de uitleg ook oploopt basis → simpeler → …).
//
// Elke route tekent zijn lint in een eigen baan (offset); het terug-stuk over
// dezelfde straat tekent geen tweede lint (segment-dedupe). Om de zoveel meter
// ligt een leesbare stempel ("groep 3-5") óp het lint, leesrichting vanuit de
// poort. De gele bouwbordjes blijven preview-only via ?wandel=1.

import { useMemo } from "react";
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

const ROUTES = WANDEL_ROUTES;
const LINT_BREEDTE = 0.44; // meter — smal genoeg dat drie banen naast elkaar passen

function maakStempelTexture(route) {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 96;
  const ctx = c.getContext("2d");
  ctx.fillStyle = route.kleur;
  ctx.beginPath();
  ctx.ellipse(128, 48, 124, 44, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.85)";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = route.tekstKleur || "#233";
  ctx.font = "800 40px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(route.stempel || route.groep, 128, 50);
  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

// 🎨 Eén doorgetrokken gekleurd lint langs de route, in de eigen baan.
function RouteLint({ route, heightRef }) {
  const { segs, punten, stempels } = useMemo(() => {
    const pts = route.cells.map(([cx, cz]) => new THREE.Vector2(cx * CELL, cz * CELL));
    const segs = [], punten = [];
    const segSeen = new Set(), puntSeen = new Set();
    for (let i = 0; i < pts.length - 1; i++) {
      const a0 = pts[i], b0 = pts[i + 1];
      const seg = b0.clone().sub(a0);
      const len = seg.length();
      if (len < 0.001) continue;
      const dir = seg.clone().normalize();
      const perp = new THREE.Vector2(-dir.y, dir.x);
      const a = a0.clone().addScaledVector(perp, route.offset);
      const b = b0.clone().addScaledVector(perp, route.offset);
      const mid = a.clone().add(b).multiplyScalar(0.5);
      const key = Math.round(mid.x / 0.7) + "," + Math.round(mid.y / 0.7) + "," + Math.round(len);
      if (!segSeen.has(key)) {
        segSeen.add(key);
        segs.push({ x: mid.x, z: mid.y, len, hoek: Math.atan2(dir.x, dir.y) });
      }
      // Ronde "gewrichten" op de hoekpunten zodat de linten naadloos aansluiten.
      for (const p of [a, b]) {
        const k = Math.round(p.x / 0.7) + "," + Math.round(p.y / 0.7);
        if (!puntSeen.has(k)) { puntSeen.add(k); punten.push({ x: p.x, z: p.y }); }
      }
    }
    // Stempels: op de langere stukken, om de ~5 segmenten.
    const stempels = segs.filter((s, i) => i > 0 && i % 5 === 0 && s.len > 3);
    return { segs, punten, stempels };
  }, [route]);

  const stempelTex = useMemo(() => maakStempelTexture(route), [route]);
  const hoogte = (x, z) => (heightRef?.current ? heightRef.current(x, z) : 0);

  return (
    <group>
      {segs.map((s, i) => (
        <group key={i} position={[s.x, hoogte(s.x, s.z) + 0.05, s.z]} rotation={[0, s.hoek, 0]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[LINT_BREEDTE, s.len]} />
            <meshBasicMaterial color={route.kleur} transparent opacity={0.55} depthWrite={false} />
          </mesh>
        </group>
      ))}
      {punten.map((p, i) => (
        <mesh key={"p" + i} position={[p.x, hoogte(p.x, p.z) + 0.05, p.z]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[LINT_BREEDTE / 2, 12]} />
          <meshBasicMaterial color={route.kleur} transparent opacity={0.55} depthWrite={false} />
        </mesh>
      ))}
      {stempels.map((s, i) => (
        <group key={"s" + i} position={[s.x, hoogte(s.x, s.z) + 0.075, s.z]} rotation={[0, s.hoek, 0]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.35, 0.5]} />
            <meshBasicMaterial map={stempelTex} transparent depthWrite={false} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// 🥾 Route-paaltjes bij de ingang (altijd zichtbaar, zoals in een bos).
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

export default function WandelPreview({ heightRef, borden = false, toon = null }) {
  // toon = null → alle routes; ["geel"] → alleen dat pad (route-filter /
  // actieve wandeling — "snel alleen geel of alleen blauw zien").
  const zichtbaar = toon ? ROUTES.filter((r) => toon.includes(r.id)) : ROUTES;
  return (
    <group>
      {zichtbaar.map((r) => (
        <RouteLint key={r.id} route={r} heightRef={heightRef} />
      ))}

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
