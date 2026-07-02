// ZooScene — de 3D-canvas van Mijn Park: camera, belichting, schaduw,
// grasgrond, orbit-besturing + het bestuurbare poppetje. Álles in het park
// (draaimolen, paden, hekken, gebouwen, dier-verblijven) is een plaatsbaar/
// weghaalbaar item dat op het raster snapt. Footprint per item (decor 1×1).
import { Suspense, useState, useMemo, useCallback, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Html, AdaptiveDpr } from "@react-three/drei";
import { Vector3, PlaneGeometry, BufferAttribute, Color, Object3D } from "three";
import { ParkBase, LosDier, Player, Carousel, FerrisWheel, SwingRide, TrainRide, PathTile, Visitors, HillMound, PatatKraam, DrankKraam, IJsKraam, PopcornKraam, FencePanel, FenceGate, FenceCorner, EntranceGate, Rock, Bench, TrashCan, DonationBox, Bush, Fern, Stump, Tree, DayNight, CameraFollow, FirstPersonCamera, SpringArmCamera, BuddyEyeCamera, RailTile, Station, RouteTrain, RideCamera, SkyClouds, Balloons } from "./ParkProps";
import ZooModel from "./ZooModel";
import HouseModel from "./HouseModel";
import Buddy from "./Buddy";
import { getAsset, cellsVan, isBlok } from "./AssetRegistry";
import { heightAt, applyBrush, flatField, TER_SIZE, TER_SEG, TER_N, TER_EXT, TER_STEP, blokHoogte } from "./terrain";
import { computeWater, celWereldHoogte, WATER_SURFACE_Y } from "./water";
import { dagenVerschil } from "./zooEconomy";
import { GROUND_COLOR } from "./ground";
import Buitenwereld from "./Buitenwereld";
import { useEffect } from "react";
import {
  CELL, GRID_SIZE, GRID_DIV, HALF, snapToCell, cellToWorld, cellKey,
  footprint, isPlaatsbaar, bezetteCellenVan,
} from "./grid";

// Welke items zijn "vast" (kan het poppetje niet doorheen lopen)? Paden en
// kleine bloemen/paddenstoel zijn beloopbaar; de rest (verblijven, gebouwen,
// attracties, hekken, bomen) houdt tegen.
function isVast(assetId) {
  const a = getAsset(assetId);
  if (!a) return false;
  if (a.kind === "building" || a.kind === "attraction") return true;
  if (a.kind === "animal") return false; // dieren lopen vrij rond → niet solide
  if (a.kind === "decor") return a.procedural !== "path" && a.procedural !== "hill" && !String(assetId).startsWith("flower") && assetId !== "mushroom";
  return false;
}

// 🧱 Bouwblok: stapelbaar blok (h = hoeveelste laag) of dak-punt bovenop.
const BLOK_H = 1.1;
function BouwBlok({ a, x, y, z, h = 0, rotation = 0 }) {
  if (a.procedural === "blokdak") {
    return (
      <mesh position={[x, y + h * BLOK_H + BLOK_H * 0.5, z]} rotation={[0, rotation + Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[CELL * 0.75, BLOK_H, 4]} />
        <meshStandardMaterial color={a.blokKleur} roughness={1} flatShading />
      </mesh>
    );
  }
  return (
    <mesh position={[x, y + h * BLOK_H + BLOK_H / 2, z]} rotation={[0, rotation, 0]} castShadow receiveShadow>
      <boxGeometry args={[CELL, BLOK_H, CELL]} />
      <meshStandardMaterial color={a.blokKleur} roughness={1} transparent={!!a.doorzichtig} opacity={a.doorzichtig ? 0.5 : 1} />
    </mesh>
  );
}

// Eén geplaatst item, gerenderd op basis van zijn soort. y = terreinhoogte.
function PlacedItem({ assetId, x, z, y = 0, rotation = 0, babies = 0, colors, colorEditable = false, onPickPart, onParts, mood = "blij", kraam = null, h = 0 }) {
  const a = getAsset(assetId);
  if (!a) return null;
  if (a.procedural === "blok" || a.procedural === "blokdak") return <BouwBlok a={a} x={x} y={y} z={z} h={h} rotation={rotation} />;
  if (a.kind === "animal") return <LosDier position={[x, y, z]} assetId={assetId} babies={babies} mood={mood} />;
  if (a.procedural === "carousel") return <Carousel position={[x, y, z]} />;
  if (a.procedural === "ferris") return <FerrisWheel position={[x, y, z]} />;
  if (a.procedural === "swing") return <SwingRide position={[x, y, z]} />;
  if (a.procedural === "train") return <TrainRide position={[x, y, z]} />;
  if (a.procedural === "rail") return <RailTile position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "station") return <Station position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "path") return <PathTile position={[x, y, z]} color={a.color} />;
  if (a.procedural === "hill") return <HillMound position={[x, y, z]} size={a.hillSize} color={a.color} />;
  if (a.procedural === "rock") return <Rock position={[x, y, z]} rotation={rotation} variant={a.variant} />;
  if (a.procedural === "bench") return <Bench position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "trash") return <TrashCan position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "donation") return <DonationBox position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "tree") return <Tree position={[x, y, z]} rotation={rotation} variant={a.variant} />;
  if (a.procedural === "bush") return <Bush position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "fern") return <Fern position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "stump") return <Stump position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "fencePanel") return <FencePanel position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "fenceCorner") return <FenceCorner position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "fenceGate") return <FenceGate position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "patatkraam") return <PatatKraam position={[x, y, z]} kraam={kraam} />;
  if (a.procedural === "drankkraam") return <DrankKraam position={[x, y, z]} kraam={kraam} />;
  if (a.procedural === "ijscokraam") return <IJsKraam position={[x, y, z]} kraam={kraam} />;
  if (a.procedural === "popcornkraam") return <PopcornKraam position={[x, y, z]} kraam={kraam} />;
  if (a.kind === "building" && String(assetId).startsWith("house")) {
    return (
      <HouseModel
        assetId={assetId} position={[x, y, z]} rotation={rotation}
        colors={colors} editable={colorEditable} onPickPart={onPickPart} onParts={colorEditable ? onParts : undefined}
        fallback={<ZooModel assetId={assetId} position={[x, y, z]} rotation={rotation} />}
      />
    );
  }
  return <ZooModel assetId={assetId} position={[x, y, z]} rotation={rotation} />;
}

// Hoogte → kleur: gras onderaan, rots op de hellingen, grijze (besneeuwde-ogende)
// toppen op de bergen. Geeft de bergen een rotsachtige look.
const KL_GRAS = new Color("#7cbf5a");
const KL_ROTS = new Color("#9a8b76");
const KL_GRIJS = new Color("#8d8a85");
const KL_TOP = new Color("#cbc8c1");
function hoogteKleur(h, out) {
  if (h <= 0.5) { out.copy(KL_GRAS); return; }
  if (h < 2.2) { out.copy(KL_GRAS).lerp(KL_ROTS, (h - 0.5) / 1.7); return; }
  if (h < 4.5) { out.copy(KL_ROTS).lerp(KL_GRIJS, (h - 2.2) / 2.3); return; }
  out.copy(KL_GRIJS).lerp(KL_TOP, Math.min(1, (h - 4.5) / 2));
}

// De parkvloer als BLOK-WERELD (Mark 2 jul): per vakje één blok-kolom — groene
// (of geschilderde) bovenkant + aarde/steen eronder. Heuvels worden terrassen
// van blokken (Minecraft-look). Boetseren/water/schilderen werkt onveranderd:
// het gladde hoogteveld blijft de bron, alleen de weergave klikt op blok-lagen.
// Alles via 2 InstancedMeshes (1681 vakjes) → maar 2 draw-calls.
const KL_AARDE = new Color("#8a6a44");
const KL_STEENLAAG = new Color("#7d7568");
function Terrain({ field, ground = {}, placing, cells, sculpt, water, paintGround, onHover, onPlace, onMissTap, onSculpt, onWater, onGround }) {
  const refTop = useRef(), refKol = useRef();
  const AANTAL = TER_N * TER_N;
  useEffect(() => {
    const top = refTop.current, kol = refKol.current;
    if (!top || !kol) return;
    const dummy = new Object3D();
    const c = new Color();
    const BODEM = -4.8;
    let k = 0;
    for (let i = 0; i < TER_N; i++) {
      const wx = -TER_EXT + i * TER_STEP;
      for (let j = 0; j < TER_N; j++) {
        const wz = -TER_EXT + j * TER_STEP;
        const h = blokHoogte(heightAt(field, wx, wz));
        // Bovenblok (gras/verf/rots): bovenkant precies op h.
        dummy.position.set(wx, h - 0.2, wz);
        dummy.scale.set(1, 1, 1);
        dummy.updateMatrix();
        top.setMatrixAt(k, dummy.matrix);
        const gk = `${Math.round(wx / CELL)},${Math.round(wz / CELL)}`;
        const verf = ground[gk] ? GROUND_COLOR[ground[gk]] : null;
        if (verf) c.set(verf); else hoogteKleur(h, c);
        // subtiele per-vakje tint-variatie → levendig gras zonder textures
        const tint = 0.94 + 0.06 * (((i * 7 + j * 13) % 5) / 4);
        c.multiplyScalar(tint);
        top.setColorAt(k, c);
        // Kolom eronder (aarde, hoger = steen) tot de bodem.
        const kh = Math.max(0.2, h - 0.4 - BODEM);
        dummy.position.set(wx, BODEM + kh / 2, wz);
        dummy.scale.set(1, kh, 1);
        dummy.updateMatrix();
        kol.setMatrixAt(k, dummy.matrix);
        c.copy(h > 2.2 ? KL_STEENLAAG : KL_AARDE).multiplyScalar(tint);
        kol.setColorAt(k, c);
        k++;
      }
    }
    top.instanceMatrix.needsUpdate = true;
    kol.instanceMatrix.needsUpdate = true;
    if (top.instanceColor) top.instanceColor.needsUpdate = true;
    if (kol.instanceColor) kol.instanceColor.needsUpdate = true;
    top.computeBoundingSphere();
    kol.computeBoundingSphere();
  }, [field, ground]);
  const handlers = {
    onPointerMove: (e) => { if (!placing) return; e.stopPropagation(); onHover(snapToCell(e.point.x, e.point.z, cells)); },
    onPointerDown: (e) => { e.stopPropagation(); if (sculpt) onSculpt(e.point.x, e.point.z); else if (water) onWater(snapToCell(e.point.x, e.point.z, 1)); else if (paintGround) onGround(snapToCell(e.point.x, e.point.z, 1)); else if (placing) onPlace(snapToCell(e.point.x, e.point.z, cells)); else onMissTap && onMissTap(); },
  };
  return (
    <group>
      <instancedMesh ref={refTop} args={[undefined, undefined, AANTAL]} receiveShadow {...handlers}>
        <boxGeometry args={[CELL, 0.4, CELL]} />
        <meshStandardMaterial roughness={1} metalness={0} />
      </instancedMesh>
      <instancedMesh ref={refKol} args={[undefined, undefined, AANTAL]} receiveShadow {...handlers}>
        <boxGeometry args={[CELL, 1, CELL]} />
        <meshStandardMaterial roughness={1} metalness={0} />
      </instancedMesh>
    </group>
  );
}

// Meertjes: doorzichtige blauwe wateroppervlakken op de ondergelopen vakjes, met
// een zachte golf-beweging. De cellen komen uit floodWater (dal-vulling).
function WaterPools({ cells }) {
  const ref = useRef();
  useFrame((st) => { if (ref.current) ref.current.position.y = Math.sin(st.clock.elapsedTime * 1.3) * 0.035; });
  if (!cells.length) return null;
  return (
    <group ref={ref}>
      {cells.map(([gx, gz]) => {
        const [x, z] = cellToWorld(gx, gz);
        return (
          <mesh key={`${gx},${gz}`} rotation={[-Math.PI / 2, 0, 0]} position={[x, WATER_SURFACE_Y, z]} receiveShadow>
            <planeGeometry args={[CELL + 0.02, CELL + 0.02]} />
            <meshStandardMaterial color="#3aa6d8" transparent opacity={0.62} roughness={0.2} metalness={0.1} />
          </mesh>
        );
      })}
    </group>
  );
}

// Stromende beek langs één pad: blauwe tegels die de helling volgen + witte
// schuim-vlokjes die naar beneden "stromen" (geanimeerd). De beek volgt het
// steilste-afdaling-pad (dus de geultjes die je graaft).
function Stream({ path, terrain }) {
  const foamRefs = useRef([]);
  // Wereldpunten langs het pad (op terreinhoogte) + cumulatieve lengtes.
  const { points, cum, total } = useMemo(() => {
    const pts = path.map(([gx, gz]) => {
      const [x, z] = cellToWorld(gx, gz);
      return new Vector3(x, celWereldHoogte(terrain, gx, gz) + 0.12, z);
    });
    const cumArr = [0];
    for (let i = 1; i < pts.length; i++) cumArr.push(cumArr[i - 1] + pts[i].distanceTo(pts[i - 1]));
    return { points: pts, cum: cumArr, total: cumArr[cumArr.length - 1] || 0.0001 };
  }, [path, terrain]);

  const puntOp = (u) => {
    const d = u * total;
    let i = 1;
    while (i < cum.length && cum[i] < d) i++;
    if (i >= points.length) return points[points.length - 1];
    const seg = cum[i] - cum[i - 1] || 1;
    const t = (d - cum[i - 1]) / seg;
    return points[i - 1].clone().lerp(points[i], t);
  };

  const FOAM = points.length >= 2 ? 4 : 0;
  useFrame((st) => {
    if (!FOAM) return;
    const base = (st.clock.elapsedTime * 0.18) % 1; // stroomsnelheid
    for (let k = 0; k < FOAM; k++) {
      const m = foamRefs.current[k];
      if (!m) continue;
      const u = (base + k / FOAM) % 1;
      const p = puntOp(u);
      m.position.set(p.x, p.y + 0.03, p.z);
    }
  });

  if (!points.length) return null;
  return (
    <group>
      {/* waterbedding langs de beek */}
      {path.map(([gx, gz], i) => {
        const p = points[i];
        return (
          <mesh key={`${gx},${gz}`} rotation={[-Math.PI / 2, 0, 0]} position={[p.x, p.y - 0.08, p.z]}>
            <planeGeometry args={[1.5, 1.5]} />
            <meshStandardMaterial color="#3f9fd6" transparent opacity={0.72} roughness={0.15} metalness={0.1} />
          </mesh>
        );
      })}
      {/* schuim-vlokjes die naar beneden stromen */}
      {Array.from({ length: FOAM }).map((_, k) => (
        <mesh key={`f${k}`} ref={(el) => (foamRefs.current[k] = el)} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.32, 10]} />
          <meshStandardMaterial color="#eaf6ff" transparent opacity={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function WaterStreams({ paths, terrain }) {
  if (!paths || !paths.length) return null;
  return paths.map((p, i) => <Stream key={i} path={p} terrain={terrain} />);
}

function GrasGrond({ placing, cells, onHover, onPlace, onMissTap }) {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      receiveShadow
      onPointerMove={(e) => { if (!placing) return; e.stopPropagation(); onHover(snapToCell(e.point.x, e.point.z, cells)); }}
      onPointerDown={(e) => { e.stopPropagation(); if (placing) onPlace(snapToCell(e.point.x, e.point.z, cells)); else onMissTap && onMissTap(); }}
    >
      <circleGeometry args={[34, 96]} />
      <meshStandardMaterial color="#86c05a" roughness={1} metalness={0} />
    </mesh>
  );
}

function FootprintMarker({ cell, valid, cells }) {
  if (!cell) return null;
  const [x, z] = cellToWorld(cell[0], cell[1]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.05, z]}>
      <planeGeometry args={[cells * CELL, cells * CELL]} />
      <meshBasicMaterial color={valid ? "#3ddc6a" : "#ff5a4d"} transparent opacity={0.4} />
    </mesh>
  );
}

function SelectieRing({ cell, cells }) {
  const [x, z] = cellToWorld(cell[0], cell[1]);
  const s = cells * CELL;
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.06, z]}>
      <ringGeometry args={[s * 0.42, s * 0.5, 4]} />
      <meshBasicMaterial color="#ffd54a" transparent opacity={0.95} />
    </mesh>
  );
}

function Laden() {
  return (
    <Html center>
      <div style={{ color: "#3a5a2a", font: "600 14px system-ui", whiteSpace: "nowrap" }}>Park laden…</div>
    </Html>
  );
}

export default function ZooScene({ placingAsset = null, placingRot = 0, placedItems = [], onPlace, onSelectPlaced, onClearSelection, onBuy, kramen = {}, onPickPart, onHouseParts, paintCursor = null, colorEditIdx = -1, followCam = false, terrain = null, onTerrainChange, sculptMode = false, sculptDir = 1, selectedIdx = null, moveIdx = -1, inputRef = null, parkNaam = "Mijn Park", waterMode = false, waterSeeds = [], onWater, ground = {}, groundMode = false, onGround, avatarUrl, firstPerson = false, spelerNaam = "", zwakVak = "", goedeScore = null, onTapBezoeker, rideTrain = false, buddyId = "", buddyGroei = 0, buddyNaam = "", onBuddyPraat, buddyEye = false }) {
  const [ghost, setGhost] = useState(null);
  const playerPos = useRef(new Vector3());
  const playerLook = useRef(new Vector3()); // mikpunt voor de eerstepersoons-camera
  const playerFace = useRef(new Vector3(0, 0, 1)); // kijkrichting speler (derde-persoons-cam)
  const buddyPos = useRef(new Vector3());           // positie van het maatje (buddy-cam)
  const orbitRef = useRef();
  // Feiten over je park (naam, een pas geboren jong, hongerig dier, je lievelings-
  // dier, groot park, zwak vak) → bezoekers gebruiken dit voor persoonlijke praatjes.
  const factsRef = useRef({});
  factsRef.current = useMemo(() => {
    const dieren = placedItems.filter((it) => getAsset(it.assetId)?.kind === "animal");
    const naamVan = (it) => getAsset(it.assetId)?.name || "dier";
    const baby = dieren.find((it) => (it.babies || 0) > 0);
    const honger = dieren.find((it) => !(it.fed && dagenVerschil(it.fed) < 2));
    return {
      naam: spelerNaam,
      zwakVak,
      goedeScore,
      baby: baby ? naamVan(baby) : null,
      honger: honger ? naamVan(honger) : null,
      dier: dieren.length ? naamVan(dieren[0]) : null,
      veel: dieren.length >= 5,
    };
  }, [placedItems, spelerNaam, zwakVak, goedeScore]);
  // Hoogte-functie die altijd het laatste terrein leest (geen re-subscribe in loops).
  const heightFnRef = useRef(() => 0);
  // Blok-wereld: hoogte per VAKJE (vlakke bloktop), niet glad geïnterpoleerd —
  // zo staat alles (speler, dieren, items) netjes óp de blokken.
  heightFnRef.current = (x, z) => {
    const [gx, gz] = snapToCell(x, z, 1);
    const [cx, cz] = cellToWorld(gx, gz);
    return blokHoogte(heightAt(terrain, cx, cz));
  };
  const onSculpt = (x, z) => { if (onTerrainChange) onTerrainChange(applyBrush(terrain || flatField(), x, z, sculptDir * 0.9)); };
  // Beken (stroompaden) + meertjes op basis van het terrein + de water-bronnen.
  const water = useMemo(() => computeWater(terrain, waterSeeds), [terrain, waterSeeds]);
  const placing = !!placingAsset;
  const placingCells = placing ? cellsVan(placingAsset) : 3;

  // Paden blokkeren niet → je mag er planten/hekjes/bankjes op zetten.
  // Blok-op-blok: tijdens het plaatsen van een bouwblok telt een bestaand blok
  // niet als bezet → stapelen mag (de hoogte-laag komt uit plaatsOpVakje).
  const plaatstBlok = isBlok(placingAsset);
  const blokkeert = (id) => getAsset(id)?.procedural !== "path" && !(plaatstBlok && isBlok(id));
  const bezet = bezetteCellenVan(placedItems, moveIdx, cellsVan, blokkeert);
  const ghostValid = ghost && isPlaatsbaar(ghost[0], ghost[1], bezet, placingCells);

  // Aantal bezoekers schaalt mee met wat je park te bieden heeft.
  const trekpleisters = placedItems.filter((it) => {
    const k = getAsset(it.assetId)?.kind;
    return k === "animal" || k === "building" || k === "attraction";
  }).length;
  const bezoekers = Math.max(2, Math.min(7, Math.round(trekpleisters * 0.8) + 2));

  // 🚂 Trein-route: orden de losse rail-tegels tot een aaneengesloten pad zodat de
  // trein er overheen rijdt. We lopen van buur naar buur (raster-aangrenzend).
  const trainHeadRef = useRef({});
  const railRoute = useMemo(() => {
    const rails = placedItems.filter((it) => getAsset(it.assetId)?.procedural === "rail").map((it) => it.cell);
    if (rails.length < 2) return null;
    const k = (c) => `${c[0]},${c[1]}`;
    const set = new Map(rails.map((c) => [k(c), c]));
    const buren = (c) => [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([dx, dz]) => [c[0] + dx, c[1] + dz]).filter((n) => set.has(k(n)));
    const start = rails.find((c) => buren(c).length === 1) || rails[0];
    const ordered = []; const seen = new Set();
    let cur = start, prev = null;
    while (cur && !seen.has(k(cur))) {
      ordered.push(cur); seen.add(k(cur));
      const nb = buren(cur).filter((n) => !seen.has(k(n)) && (!prev || k(n) !== k(prev)));
      prev = cur; cur = nb[0];
    }
    if (ordered.length < 2) return null;
    const loop = ordered.length > 2 && buren(ordered[ordered.length - 1]).some((n) => k(n) === k(ordered[0]));
    const pts = ordered.map(([gx, gz]) => { const [x, z] = cellToWorld(gx, gz); return { x, y: heightFnRef.current(x, z) + 0.16, z }; });
    return { pts, loop };
  }, [placedItems, terrain]);

  // Kraampjes-locaties (wereldcoördinaten) per soort behoefte: patat = food,
  // drank = drink. Bezoekers lopen naar het dichtstbijzijnde passende kraampje.
  const standsRef = useRef({});
  standsRef.current = useMemo(() => {
    const out = {};
    placedItems.forEach((it) => {
      const voorziet = getAsset(it.assetId)?.voorziet;
      if (!voorziet) return;
      const [sx, sz] = cellToWorld(it.cell[0], it.cell[1]);
      (out[voorziet] || (out[voorziet] = [])).push([sx, sz]);
    });
    return out;
  }, [placedItems]);
  // Kraam-data (product/verkoop/inkoop/fair) — via ref zodat de loop de laatste leest.
  const kraamRef = useRef(kramen);
  kraamRef.current = kramen;

  // 🚶 Bezoeker-bezigheden (Mark 2026-06-27): paden (om over te slenteren),
  // dieren (om te aaien) en attracties (om foto's bij te maken). Wereldcoörd.
  const padsRef = useRef([]);
  const dierenRef = useRef([]);
  const pretRef = useRef([]);
  const bankjesRef = useRef([]);
  const _routes = useMemo(() => {
    const paden = [], dieren = [], pret = [], bankjes = [];
    placedItems.forEach((it) => {
      const a = getAsset(it.assetId); if (!a) return;
      const [wx, wz] = cellToWorld(it.cell[0], it.cell[1]);
      if (a.procedural === "path") paden.push([wx, wz]);
      else if (a.procedural === "bench") bankjes.push([wx, wz, it.rotation || 0]);
      else if (a.kind === "animal") dieren.push([wx, wz]);
      else if (a.kind === "attraction") pret.push([wx, wz]);
    });
    return { paden, dieren, pret, bankjes };
  }, [placedItems]);
  padsRef.current = _routes.paden;
  dierenRef.current = _routes.dieren;
  pretRef.current = _routes.pret;
  bankjesRef.current = _routes.bankjes;

  // Botsing: vakjes die "vast" zijn, zodat het poppetje er niet doorheen loopt.
  const vasteCellen = useMemo(() => {
    const s = new Set();
    placedItems.forEach((it) => {
      if (!isVast(it.assetId)) return;
      for (const [cx, cz] of footprint(it.cell[0], it.cell[1], cellsVan(it.assetId))) s.add(cellKey(cx, cz));
    });
    return s;
  }, [placedItems]);
  const isSolid = useCallback((x, z) => {
    const [gx, gz] = snapToCell(x, z, 1);
    return vasteCellen.has(cellKey(gx, gz));
  }, [vasteCellen]);

  // Voor de camera telt HOOGTE mee: over lage hekjes/bankjes kijkt de camera
  // gewoon heen; alleen hoge dingen (gebouwen, attracties) duwen de arm korter.
  // Bomen blokkeren de camera bewust niet — anders springt het beeld constant.
  const vasteToppen = useMemo(() => {
    const m = new Map();
    placedItems.forEach((it) => {
      if (!isVast(it.assetId)) return;
      const a = getAsset(it.assetId);
      const top = a.kind === "building" ? 3.4
        : a.kind === "attraction" ? 3.6
        : ["tree", "bush", "fern", "stump"].includes(a.procedural) ? 0
        : isBlok(it.assetId) ? ((it.h || 0) + 1) * 1.1 + 0.2
        : 1.25;
      if (!top) return;
      for (const [cx, cz] of footprint(it.cell[0], it.cell[1], cellsVan(it.assetId))) {
        const k = cellKey(cx, cz);
        m.set(k, Math.max(m.get(k) || 0, top));
      }
    });
    return m;
  }, [placedItems]);
  const camTopAt = useCallback((x, z) => {
    const [gx, gz] = snapToCell(x, z, 1);
    return vasteToppen.get(cellKey(gx, gz)) || 0;
  }, [vasteToppen]);

  const handlePlace = (cell) => {
    if (!onPlace) return;
    if (!isPlaatsbaar(cell[0], cell[1], bezet, placingCells)) return;
    onPlace(cell);
  };

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      performance={{ min: 0.55 }}
      camera={{ position: [40, 30, 54], fov: 42, near: 0.1, far: 300 }}
      style={{ width: "100%", height: "100%", display: "block", touchAction: "none", cursor: paintCursor || "default" }}
    >
      {/* Tijdens lopen/camera-draaien tijdelijk lagere resolutie → hoge FPS op
          zwakke hardware; staat de speler stil, dan weer scherp. */}
      <AdaptiveDpr />
      <color attach="background" args={["#aaddff"]} />
      <fog attach="fog" args={["#aaddff", 110, 250]} />

      {/* Dag-nacht-cyclus stuurt zon, omgevingslicht en luchtkleur. */}
      <DayNight />
      {/* Drijvende wolken + rondcirkelende vogeltjes vullen de lucht. */}
      <SkyClouds />

      <Suspense fallback={<Laden />}>
        <Terrain field={terrain} ground={ground} placing={placing} cells={placingCells} sculpt={sculptMode} water={waterMode} paintGround={groundMode} onHover={setGhost} onPlace={handlePlace} onMissTap={onClearSelection} onSculpt={onSculpt} onWater={onWater} onGround={onGround} />
        <WaterPools cells={water.pools} />
        <WaterStreams paths={water.streams} terrain={terrain} />
        <ParkBase />
        {/* De wereld buiten het hek: grasvlakte, blok-heuvels, bos, bergen,
            meertje en het weggetje met bushalte — geen "einde van de wereld". */}
        <Buitenwereld />
        {/* Vaste ingang-poort met de parknaam, aan de voorrand van het park. */}
        <EntranceGate name={parkNaam} position={[0, heightFnRef.current(0, GRID_SIZE / 2 - 3), GRID_SIZE / 2 - 3]} rotation={0} />
        {/* Vrolijke ballontros naast de ingang. */}
        <Balloons position={[5.4, heightFnRef.current(5.4, GRID_SIZE / 2 - 3), GRID_SIZE / 2 - 3]} />
        <Player inputRef={inputRef} start={[0, 0, GRID_SIZE / 2 - 5]} isSolid={isSolid} posRef={playerPos} heightRef={heightFnRef} avatarUrl={avatarUrl} firstPerson={firstPerson} lookRef={playerLook} faceRef={playerFace} />
        {/* Standaard: spring-arm achter de speler — zelf draaien/zoomen, botst nergens doorheen. */}
        <SpringArmCamera posRef={playerPos} inputRef={inputRef} topAt={camTopAt} heightRef={heightFnRef} active={!firstPerson && !buddyEye && !rideTrain && !followCam} />
        <CameraFollow posRef={playerPos} controlsRef={orbitRef} active={followCam && !firstPerson && !buddyEye} />
        <FirstPersonCamera posRef={playerPos} lookRef={playerLook} active={firstPerson} />
        <BuddyEyeCamera buddyPosRef={buddyPos} playerPosRef={playerPos} active={buddyEye && !firstPerson && !!buddyId} />
        {/* Droom-maatje dat met je meeloopt en praat (verborgen in eerstepersoons;
            in buddy-cam blijft het vliegen maar onzichtbaar zodat de camera vrij kijkt). */}
        {buddyId && !firstPerson && <Buddy kind={buddyId} posRef={playerPos} faceRef={playerFace} heightRef={heightFnRef} factsRef={factsRef} groei={buddyGroei} buddyNaam={buddyNaam} onPraat={onBuddyPraat} posOutRef={buddyPos} verborgen={buddyEye} />}
        {railRoute && <RouteTrain route={railRoute} headRef={trainHeadRef} wagons={3} />}
        <RideCamera headRef={trainHeadRef} active={rideTrain && !!railRoute && !firstPerson} />
        <Visitors count={bezoekers} standsRef={standsRef} kraamRef={kraamRef} onBuy={onBuy} heightRef={heightFnRef} playerRef={playerPos} factsRef={factsRef} onTap={onTapBezoeker} isSolid={isSolid} padsRef={padsRef} dierenRef={dierenRef} pretRef={pretRef} bankjesRef={bankjesRef} />

        {placing && (
          <gridHelper args={[GRID_SIZE, GRID_DIV, "#3f6b2a", "#6fa34a"]} position={[0, 0.02, 0]} />
        )}

        {/* Geplaatste items — klikbaar om te selecteren. */}
        {placedItems.map((it, idx) => {
          const [x, z] = cellToWorld(it.cell[0], it.cell[1]);
          const y = heightFnRef.current(x, z);
          return (
            <group
              key={`${cellKey(it.cell[0], it.cell[1])}-${idx}`}
              onPointerDown={(e) => {
                if (placing || sculptMode || waterMode || groundMode) {
                  // Blok-op-blok: tik op een bestaand blok terwijl je een blok
                  // plaatst = er bovenop stapelen (Minecraft-gevoel).
                  if (placing && plaatstBlok && isBlok(it.assetId)) { e.stopPropagation(); handlePlace(it.cell); }
                  return;
                }
                e.stopPropagation();
              }}
              onClick={(e) => { if (placing || sculptMode || waterMode || groundMode) return; if (e.delta > 8) return; e.stopPropagation(); onSelectPlaced && onSelectPlaced(idx); }}
            >
              {selectedIdx === idx && <SelectieRing cell={it.cell} cells={cellsVan(it.assetId)} />}
              <PlacedItem
                assetId={it.assetId} x={x} z={z} y={y} rotation={it.rotation || 0} babies={it.babies || 0} h={it.h || 0}
                colors={it.colors} colorEditable={colorEditIdx === idx}
                onPickPart={(grp) => onPickPart && onPickPart(idx, grp)}
                onParts={onHouseParts}
                mood={(it.fed && dagenVerschil(it.fed) < 2) ? "blij" : "honger"}
                kraam={kramen[getAsset(it.assetId)?.voorziet]}
              />
            </group>
          );
        })}

        {/* Ghost-preview tijdens plaatsen. */}
        {placing && ghost && (
          <>
            <FootprintMarker cell={ghost} valid={ghostValid} cells={placingCells} />
            <PlacedItem assetId={placingAsset} x={cellToWorld(ghost[0], ghost[1])[0]} z={cellToWorld(ghost[0], ghost[1])[1]} y={heightFnRef.current(cellToWorld(ghost[0], ghost[1])[0], cellToWorld(ghost[0], ghost[1])[1])} rotation={placingRot} />
          </>
        )}

        <ContactShadows position={[0, 0.012, 0]} opacity={0.4} scale={GRID_SIZE + 14} blur={2.8} far={8} resolution={1024} color="#274015" />
      </Suspense>

      {followCam && !firstPerson && !buddyEye && !rideTrain && (
        <OrbitControls
          ref={orbitRef}
          makeDefault
          enableDamping
          dampingFactor={0.08}
          minDistance={6}
          maxDistance={110}
          maxPolarAngle={Math.PI / 2 - 0.05}
          target={[0, 0.8, 0]}
          enablePan={false}
        />
      )}
    </Canvas>
  );
}
