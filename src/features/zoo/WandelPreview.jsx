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
import { LINT_BANDEN, LINT_WAYPOINTS, LINT_BAND_STARTS, LINT_START } from "./leerpadLint";

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

// 🎓 Leerpad-lint — één doorlopend, vloeiend gekleurd grondpad = de schoolreis
// (Mark 22 aug). Bouwt een gesloten Catmull-Rom-curve door de waypoints en legt
// er een aaneengesloten rij platte tegels op, elke tegel gekleurd naar zijn
// niveau-band (geel→groen→blauw). Bij elke band-overgang een niveau-bordje.
// Altijd zichtbaar: dit ís het hoofdpad van het park.
const LINT_BREEDTE = 2.4;   // breedte van het pad
const LINT_STAP = 0.7;      // afstand tussen de tegels (overlappen → aaneengesloten)

// 🌿 Cel-set die het leerpad-lint beslaat (met marge), zodat ZooScene de
// grassprieten van het HÉLE hoofdpad kan weren — niet alleen van losse
// pad-tegels. (Mark 23 aug: "het pad vrij van gras — een mooi rustig pad".)
// marge = hoeveel cellen rondom de middellijn ook grasvrij blijven (1 = ~pad
// plus een schone rand). Zelfde curve als het lint zelf, dicht bemonsterd.
export function lintCellen(marge = 1) {
  const pts = LINT_WAYPOINTS.map(([cx, cz]) => new THREE.Vector3(cx * CELL, 0, cz * CELL));
  const curve = new THREE.CatmullRomCurve3(pts, true, "catmullrom", 0.5);
  const n = Math.max(120, Math.round(curve.getLength() / (CELL * 0.4)));
  const set = new Set();
  for (let i = 0; i <= n; i++) {
    const p = curve.getPointAt(i / n);
    const cx = Math.round(p.x / CELL);
    const cz = Math.round(p.z / CELL);
    for (let dx = -marge; dx <= marge; dx++)
      for (let dz = -marge; dz <= marge; dz++)
        set.add(`${cx + dx},${cz + dz}`);
  }
  return set;
}

export function Leerpadlint({ heightRef }) {
  const instRef = useRef();
  const markRef = useRef();
  const { tegels, borden } = useMemo(() => {
    const pts = LINT_WAYPOINTS.map(([cx, cz]) => new THREE.Vector3(cx * CELL, 0, cz * CELL));
    const curve = new THREE.CatmullRomCurve3(pts, true, "catmullrom", 0.5);
    const lengte = curve.getLength();
    const n = Math.max(40, Math.round(lengte / LINT_STAP));
    // Per waypoint-segment weten we de band; map een curve-parameter t → band
    // via het dichtstbijzijnde waypoint.
    const bandVoorT = (t) => {
      const p = curve.getPointAt(t);
      let best = 0, bestD = Infinity;
      for (let i = 0; i < LINT_WAYPOINTS.length; i++) {
        const w = LINT_WAYPOINTS[i];
        const d = (w[0] * CELL - p.x) ** 2 + (w[1] * CELL - p.z) ** 2;
        if (d < bestD) { bestD = d; best = i; }
      }
      return LINT_WAYPOINTS[best][2];
    };
    const tegels = [];
    for (let i = 0; i < n; i++) {
      const t = i / n;
      const p = curve.getPointAt(t);
      const tan = curve.getTangentAt(t);
      tegels.push({ x: p.x, z: p.z, hoek: Math.atan2(tan.x, tan.z), band: bandVoorT(t) });
    }
    // Niveau-overgang-bordjes: op het eerste waypoint van elke band.
    const borden = LINT_BAND_STARTS.map((wi, b) => {
      const w = LINT_WAYPOINTS[wi];
      return { x: w[0] * CELL, z: w[1] * CELL, band: b };
    });
    return { tegels, borden };
  }, []);

  const hoogte = (x, z) => (heightRef?.current ? heightRef.current(x, z) : 0);

  useLayoutEffect(() => {
    const inst = instRef.current;
    const mark = markRef.current;
    if (!inst || !mark) return;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const liggend = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
    const schaalWeg = new THREE.Vector3(LINT_BREEDTE, LINT_STAP * 1.7, 1);
    const schaalStreep = new THREE.Vector3(0.42, LINT_STAP * 1.7, 1);
    const kleur = new THREE.Color();
    tegels.forEach((s, i) => {
      q.setFromEuler(new THREE.Euler(0, s.hoek, 0)).multiply(liggend);
      const y = hoogte(s.x, s.z);
      // 🛣️ De weg zelf = zwart asfalt (Mark 23 aug: "in het echt is de weg zwart").
      m.compose(new THREE.Vector3(s.x, y + 0.05, s.z), q, schaalWeg);
      inst.setMatrixAt(i, m);
      // Dun gekleurd middenstreepje = de groep-kleur als wegmarkering, zodat het
      // pad nog steeds "beschreven in kleuren" is zonder de kermis van vroeger.
      m.compose(new THREE.Vector3(s.x, y + 0.06, s.z), q, schaalStreep);
      mark.setMatrixAt(i, m);
      kleur.set(LINT_BANDEN[s.band]?.kleur || "#ffd54f");
      mark.setColorAt(i, kleur);
    });
    inst.instanceMatrix.needsUpdate = true;
    mark.instanceMatrix.needsUpdate = true;
    if (mark.instanceColor) mark.instanceColor.needsUpdate = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tegels, heightRef]);

  return (
    <group>
      {/* 🛣️ De zwarte asfaltweg */}
      <instancedMesh key={`weg-${tegels.length}`} ref={instRef} args={[null, null, tegels.length]} frustumCulled={false}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color="#26262b" transparent opacity={0.98} roughness={0.95} depthWrite={false} polygonOffset polygonOffsetFactor={-2} />
      </instancedMesh>
      {/* Gekleurd middenstreepje (groep-kleur = wegmarkering) */}
      <instancedMesh key={`streep-${tegels.length}`} ref={markRef} args={[null, null, tegels.length]} frustumCulled={false}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial vertexColors transparent opacity={0.95} roughness={0.7} depthWrite={false} polygonOffset polygonOffsetFactor={-3} />
      </instancedMesh>
      {/* 🪧 Niveau-overgang-bordjes: "nu Groep 6-8" — zo voel je dat je een groep
          verder gaat, net als op school. */}
      {borden.map((b, i) => {
        const band = LINT_BANDEN[b.band];
        const y = hoogte(b.x, b.z);
        return (
          <group key={i} position={[b.x, y, b.z]}>
            <mesh position={[0, 0.6, 0]} castShadow><boxGeometry args={[0.1, 1.2, 0.1]} /><meshStandardMaterial color="#7a5230" /></mesh>
            <mesh position={[0, 1.32, 0]} castShadow><boxGeometry args={[1.5, 0.62, 0.07]} /><meshStandardMaterial color={band.kleur} /></mesh>
            <Html position={[0, 1.32, 0.06]} center distanceFactor={9} zIndexRange={[7, 0]} style={{ pointerEvents: "none" }}>
              <div style={{ width: 130, textAlign: "center", fontFamily: "system-ui, sans-serif", color: band.tekstKleur }}>
                <div style={{ fontWeight: 800, fontSize: 13 }}>{i === 0 ? "🎓 Start hier" : "➡️ nu"} {band.groep}</div>
                <div style={{ fontWeight: 700, fontSize: 10.5, opacity: 0.85 }}>{band.start}</div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

// 🛣️ Opritten — korte zwarte asfalt-inritten van de hoofdweg naar elk
// leer-object, ALTIJD zichtbaar (Mark 24 aug 2026: "kan er een oprit van de
// hoofdweg naar elk ding komen zodat je overal kunt komen?"). Keuze Mark:
// smal zwart asfalt · alleen leer-objecten · klein rond pleintje aan het eind.
// De doel-posities komen uit ZooScene (de ECHTE plek van het object, dus ook
// als een kind het verplaatst heeft). Zelfde asfalt-look als het hoofd-lint,
// maar smaller en zonder kleurstreep — het leest als een inrit naar het object.
const OPRIT_BREEDTE = 1.6;   // smaller dan de hoofdweg (2.4)
const OPRIT_STAP = 0.6;      // tegel-afstand (overlappen → aaneengesloten)
const PLEIN_R = 1.7;         // straal van het ronde pleintje vóór het object

// Gesamplede middellijn van het hoofd-lint (zelfde curve als Leerpadlint), om
// per object de dichtstbijzijnde "voet" op de weg te vinden.
function lintMiddellijn() {
  const pts = LINT_WAYPOINTS.map(([cx, cz]) => new THREE.Vector3(cx * CELL, 0, cz * CELL));
  const curve = new THREE.CatmullRomCurve3(pts, true, "catmullrom", 0.5);
  const n = Math.max(200, Math.round(curve.getLength() / (CELL * 0.4)));
  const arr = [];
  for (let i = 0; i <= n; i++) { const p = curve.getPointAt(i / n); arr.push(new THREE.Vector2(p.x, p.z)); }
  return arr;
}

// Per object het zijspoor: dichtstbijzijnde voet op de weg → eind vlak vóór het
// object (daar komt het pleintje). Gedeeld door de render én de gras-weer-set.
function opritSporen(doelen) {
  if (!doelen || !doelen.length) return [];
  const mid = lintMiddellijn();
  const sporen = [];
  for (const doel of doelen) {
    const eind = new THREE.Vector2(doel.x, doel.z);
    let foot = mid[0], best = Infinity;
    for (const s of mid) { const d = (s.x - eind.x) ** 2 + (s.y - eind.y) ** 2; if (d < best) { best = d; foot = s; } }
    const start = foot.clone();
    const len = start.distanceTo(eind);
    if (len < 2.2) continue; // object staat praktisch al op de weg → geen oprit nodig
    const dir = eind.clone().sub(start).normalize();
    const eindWeg = eind.clone().addScaledVector(dir, -PLEIN_R); // stop vóór het object
    sporen.push({ start, eindWeg, dir, hoek: Math.atan2(dir.x, dir.y) });
  }
  return sporen;
}

// Cellen die de opritten (incl. pleintjes) beslaan → ZooScene weert er het gras,
// net als bij de hoofdweg, zodat de inrit een schoon asfaltpad blijft.
export function opritCellen(doelen, marge = 1) {
  const set = new Set();
  for (const sp of opritSporen(doelen)) {
    const len = sp.start.distanceTo(sp.eindWeg);
    const n = Math.max(1, Math.round(len / (CELL * 0.4)));
    for (let i = 0; i <= n; i++) {
      const p = sp.start.clone().addScaledVector(sp.dir, (i / n) * len);
      const cx = Math.round(p.x / CELL), cz = Math.round(p.y / CELL);
      for (let dx = -marge; dx <= marge; dx++)
        for (let dz = -marge; dz <= marge; dz++) set.add(`${cx + dx},${cz + dz}`);
    }
  }
  return set;
}

export function Opritten({ heightRef, doelen }) {
  const wegRef = useRef();
  const { tegels, pleinen } = useMemo(() => {
    const tegels = [];
    const pleinen = [];
    for (const sp of opritSporen(doelen)) {
      const len = sp.start.distanceTo(sp.eindWeg);
      const n = Math.max(1, Math.round(len / OPRIT_STAP));
      for (let i = 0; i <= n; i++) {
        const p = sp.start.clone().addScaledVector(sp.dir, (i / n) * len);
        tegels.push({ x: p.x, z: p.y, hoek: sp.hoek });
      }
      pleinen.push({ x: sp.eindWeg.x, z: sp.eindWeg.y });
    }
    return { tegels, pleinen };
  }, [doelen]);

  const hoogte = (x, z) => (heightRef?.current ? heightRef.current(x, z) : 0);

  useLayoutEffect(() => {
    const inst = wegRef.current;
    if (!inst || !tegels.length) return;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const liggend = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
    const schaal = new THREE.Vector3(OPRIT_BREEDTE, OPRIT_STAP * 1.8, 1);
    tegels.forEach((s, i) => {
      q.setFromEuler(new THREE.Euler(0, s.hoek, 0)).multiply(liggend);
      m.compose(new THREE.Vector3(s.x, hoogte(s.x, s.z) + 0.05, s.z), q, schaal);
      inst.setMatrixAt(i, m);
    });
    inst.instanceMatrix.needsUpdate = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tegels, heightRef]);

  if (!tegels.length) return null;
  return (
    <group>
      {/* 🛣️ De smalle zwarte asfalt-inritten */}
      <instancedMesh key={`oprit-${tegels.length}`} ref={wegRef} args={[null, null, tegels.length]} frustumCulled={false}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color="#26262b" transparent opacity={0.98} roughness={0.95} depthWrite={false} polygonOffset polygonOffsetFactor={-2} />
      </instancedMesh>
      {/* ⭕ Klein rond pleintje vlak vóór elk object (een nette sta-plek). */}
      {pleinen.map((p, i) => {
        const y = hoogte(p.x, p.z);
        return (
          <mesh key={"plein" + i} position={[p.x, y + 0.045, p.z]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[PLEIN_R, 28]} />
            <meshStandardMaterial color="#2b2b30" transparent opacity={0.98} roughness={0.95} depthWrite={false} polygonOffset polygonOffsetFactor={-2} />
          </mesh>
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
  // Idle (geen actieve wandeling/filter) → géén losse stippen-routes meer: het
  // doorlopende leerpad-lint is nu het hoofdpad (Mark 22 aug). Tijdens een
  // wandeling toont de gekozen route wél z'n stippen als extra begeleiding.
  const zichtbaar = toon ? ROUTES.filter((r) => toon.includes(r.id)) : [];
  return (
    <group>
      {zichtbaar.map((r) => (
        <RouteStippen key={r.id} route={r} heightRef={heightRef} doelen={stopDoelen ? stopDoelen[r.id] : null} />
      ))}

      {PAALTJES.map((p, i) => {
        const r = ROUTES[p.route];
        // Idle → geen losse route-paaltjes meer (de entree-splitsing + het lint
        // vervangen ze, Mark 22 aug); tijdens een wandeling alleen die van de
        // gekozen route.
        if (!toon || !toon.includes(r.id)) return null;
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
