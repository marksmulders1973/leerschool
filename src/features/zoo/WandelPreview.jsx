// 🚶 Wandelkwartier — gekleurde stippen-routes met zijsporen naar de stops.
//
// Eindvorm na een dag itereren met Mark + Brian (20 aug 2026):
//   voetstappen → stippenzee → enkele stippen → linten → en terug naar
//   STIPPEN ("stippen is mooier"), met twee fixes uit Brian's test:
//   1. heen- en terugweg vallen weer op ÉÉN stippenlijn (punt-dedupe — bij de
//      linten tekenden ze half over elkaar);
//   2. "welk pad leidt naar de kubus?" → elke stop krijgt een kort ZIJSPOOR
//      van stippen van de hoofdlijn naar het object, eindigend in een
//      vlaggetje in de routekleur met de stop-emoji (🧊/🕐/🗼). De posities
//      komen uit het échte park (ZooScene geeft stopDoelen mee), dus ook als
//      een kind zijn kubus verplaatst heeft, wijst het zijspoor goed.
//
// Kleur-volgorde = de uitleg-volgorde: geel (3-5) → groen (6-8) → blauw
// (brugklas). Actieve wandeling of kleur-stipje = alleen dat pad zichtbaar.
// Gele bouwbordjes blijven preview-only via ?wandel=1.

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

const ROUTES = WANDEL_ROUTES;
// 🛣️ Wegmarkering-stijl (Mark 20 aug: "strepen als op de weg — die kunnen ook
// een bocht maken"): korte streepjes in de looprichting i.p.v. rondjes.
const STAP_AFSTAND = 1.8;   // streep (0.95) + tussenruimte
const STREEP_L = 0.95;      // lengte van een streep, in de looprichting
const STREEP_B = 0.24;      // breedte
const STEMPEL_ELKE = 8;

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

// De zijbaan als complete lijn met nette verstek-hoeken (Mark 20 aug: "kan de
// overgang in de bocht netter aansluiten?"). Per segment een CANONIEKE normaal
// (zelfde straat = zelfde kant, dus heen/terug vallen samen) en per hoekpunt
// het snijpunt van de twee zijbaan-lijnen (miter) — geen gat of verspringing
// meer in de bocht.
function offsetPolyline(punten, off) {
  if (!off) return punten;
  const normalen = [];
  for (let i = 0; i < punten.length - 1; i++) {
    let a = punten[i], b = punten[i + 1];
    if (b.x < a.x || (b.x === a.x && b.y < a.y)) { const t = a; a = b; b = t; }
    const d = b.clone().sub(a);
    const len = d.length();
    normalen.push(len < 0.001 ? null : new THREE.Vector2(-d.y / len, d.x / len));
  }
  const out = [];
  for (let j = 0; j < punten.length; j++) {
    const n1 = j > 0 ? normalen[j - 1] : null;
    const n2 = j < normalen.length ? normalen[j] : null;
    const n = n1 && n2 ? n1.clone().add(n2) : (n1 || n2);
    if (!n || n.length() < 0.001) { out.push(punten[j].clone()); continue; }
    n.normalize();
    // verstek: door de cosinus van de halve hoek delen zodat beide
    // zijbaan-lijnen elkaar precies in het hoekpunt snijden
    const basis = n1 || n2;
    const schaal = off / Math.max(0.45, n.dot(basis));
    out.push(punten[j].clone().addScaledVector(n, schaal));
  }
  return out;
}

// Stippen langs een polyline (wereld-punten), met dedupe-raster zodat heen en
// terug over dezelfde straat op één lijn samenvallen.
function stippenLangs(punten, offset, bezet) {
  const pad = offsetPolyline(punten, offset);
  const out = [];
  let rest = 0;
  for (let i = 0; i < pad.length - 1; i++) {
    const a = pad[i], b = pad[i + 1];
    const seg = b.clone().sub(a);
    const len = seg.length();
    if (len < 0.001) continue;
    const dir = seg.clone().normalize();
    let d = rest;
    while (d < len) {
      const p = a.clone().addScaledVector(dir, d);
      const key = Math.round(p.x / 0.8) + "," + Math.round(p.y / 0.8);
      if (!bezet.has(key)) {
        bezet.add(key);
        out.push({ x: p.x, z: p.y, hoek: Math.atan2(dir.x, dir.y) });
      }
      d += STAP_AFSTAND;
    }
    rest = d - len;
  }
  return out;
}

// 🎨 Eén route: hoofdlijn-stippen + stempels + zijsporen naar de stops.
function RouteStippen({ route, heightRef, doelen }) {
  const instRef = useRef();

  const { stappen, stempels, vlaggen } = useMemo(() => {
    const pts = route.cells.map(([cx, cz]) => new THREE.Vector2(cx * CELL, cz * CELL));
    const bezet = new Set();
    const hoofd = stippenLangs(pts, route.offset, bezet);
    const stappen = [];
    const stempels = [];
    hoofd.forEach((s, i) => {
      if (i > 6 && i % STEMPEL_ELKE === 0) stempels.push(s);
      else stappen.push(s);
    });

    // Zijsporen: van het dichtstbijzijnde punt op de hoofdlijn naar elk
    // stop-object in dít park, eindigend in een vlaggetje bij het object.
    const vlaggen = [];
    (doelen || []).forEach((doel) => {
      const eind = new THREE.Vector2(doel.x, doel.z);
      let beste = null, besteAfstand = Infinity;
      for (const s of hoofd) {
        const d2 = (s.x - eind.x) ** 2 + (s.z - eind.y) ** 2;
        if (d2 < besteAfstand) { besteAfstand = d2; beste = s; }
      }
      if (!beste) return;
      const start = new THREE.Vector2(beste.x, beste.z);
      const afstand = start.distanceTo(eind);
      let vlagPos = { x: doel.x + 1.4, z: doel.z + 1.4 };
      if (afstand > 1.2 && afstand < 40) {
        // stop ruim vóór het object zodat de stippen er niet ónder verdwijnen;
        // de vlag staat op het eind van het zijspoor (hoofdlijn-zijde), niet
        // ín de voet van het object (route-inspectie 20 aug).
        const dir = eind.clone().sub(start).normalize();
        const kort = eind.clone().addScaledVector(dir, -1.6);
        stappen.push(...stippenLangs([start, kort], 0, bezet));
        vlagPos = { x: kort.x, z: kort.y };
      }
      vlaggen.push({ ...doel, vx: vlagPos.x, vz: vlagPos.z });
    });

    return { stappen, stempels, vlaggen };
  }, [route, doelen]);

  const stempelTex = useMemo(() => maakStempelTexture(route), [route]);
  const hoogte = (x, z) => (heightRef?.current ? heightRef.current(x, z) : 0);

  useLayoutEffect(() => {
    const inst = instRef.current;
    if (!inst) return;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const liggend = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
    const schaal = new THREE.Vector3(1, 1, 1);
    stappen.forEach((s, i) => {
      q.setFromEuler(new THREE.Euler(0, s.hoek, 0)).multiply(liggend);
      m.compose(new THREE.Vector3(s.x, hoogte(s.x, s.z) + 0.06, s.z), q, schaal);
      inst.setMatrixAt(i, m);
    });
    inst.instanceMatrix.needsUpdate = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stappen, heightRef]);

  return (
    <group>
      <instancedMesh key={stappen.length} ref={instRef} args={[null, null, stappen.length]} frustumCulled={false}>
        <planeGeometry args={[STREEP_B, STREEP_L]} />
        <meshBasicMaterial color={route.kleur} transparent opacity={0.9} depthWrite={false} side={THREE.DoubleSide} />
      </instancedMesh>

      {stempels.map((s, i) => (
        <group key={"st" + i} position={[s.x, hoogte(s.x, s.z) + 0.07, s.z]} rotation={[0, s.hoek, 0]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.35, 0.5]} />
            <meshBasicMaterial map={stempelTex} transparent depthWrite={false} />
          </mesh>
        </group>
      ))}

      {/* 🚩 Stop-vlaggetjes bij de objecten van deze route. */}
      {vlaggen.map((v, i) => {
        const vx = v.vx ?? v.x + 0.9, vz = v.vz ?? v.z + 0.9;
        const y = hoogte(vx, vz);
        return (
          <group key={"v" + i} position={[vx, y, vz]}>
            <mesh position={[0, 0.55, 0]} castShadow>
              <boxGeometry args={[0.07, 1.1, 0.07]} />
              <meshStandardMaterial color="#7a5230" />
            </mesh>
            <mesh position={[0.22, 0.92, 0]} castShadow>
              <boxGeometry args={[0.42, 0.28, 0.03]} />
              <meshStandardMaterial color={route.kleur} />
            </mesh>
            <Html position={[0, 1.32, 0]} center distanceFactor={7} zIndexRange={[6, 0]} style={{ pointerEvents: "none" }}>
              <div style={{ whiteSpace: "nowrap", background: "rgba(255,254,248,0.95)", border: `2.5px solid ${route.kleur}`, borderRadius: 999, padding: "3px 10px", fontFamily: "system-ui, sans-serif", fontSize: 13, fontWeight: 800, color: "#234", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                {v.emoji} stop
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

// 🥾 Route-paaltjes bij de ingang (altijd zichtbaar, zoals in een bos).
// (x −4.6/−3.4/−2.2: het gele paaltje stond eerst ín de boom op cel (−5,14).)
const PAALTJES = [
  { route: 0, cell: [-4.6, 14.2] },
  { route: 1, cell: [-3.4, 14.2] },
  { route: 2, cell: [-2.2, 14.2] },
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

export default function WandelPreview({ heightRef, borden = false, toon = null, stopDoelen = null }) {
  const zichtbaar = toon ? ROUTES.filter((r) => toon.includes(r.id)) : ROUTES;
  return (
    <group>
      {zichtbaar.map((r) => (
        <RouteStippen key={r.id} route={r} heightRef={heightRef} doelen={stopDoelen ? stopDoelen[r.id] : null} />
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
