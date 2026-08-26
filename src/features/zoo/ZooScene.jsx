// ZooScene — de 3D-canvas van Mijn Park: camera, belichting, schaduw,
// grasgrond, orbit-besturing + het bestuurbare poppetje. Álles in het park
// (draaimolen, paden, hekken, gebouwen, dier-verblijven) is een plaatsbaar/
// weghaalbaar item dat op het raster snapt. Footprint per item (decor 1×1).
import { Suspense, useState, useMemo, useCallback, useRef, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Html, AdaptiveDpr, useProgress } from "@react-three/drei";
import { Vector3, PlaneGeometry, BufferAttribute, Color, Object3D, BoxGeometry, DoubleSide } from "three";
import { ParkBase, LosDier, Player, Carousel, FerrisWheel, SwingRide, Coaster, TrainRide, PathTile, Visitors, HillMound, PatatKraam, DrankKraam, IJsKraam, PopcornKraam, FencePanel, FenceGate, FenceCorner, EntranceGate, Rock, Bench, TrashCan, DonationBox, Bush, Fern, Stump, Tree, DayNight, CameraFollow, FirstPersonCamera, SpringArmCamera, BuddyEyeCamera, AttractieCamera, RailTile, Station, RouteTrain, RideCamera, SkyClouds, Zeppelins, ZeppelinRomp, useZeppelinDoek, Balloons, GeinstanceerdeParkProps, PropHitbox } from "./ParkProps";
import { track } from "../../utils.js";
import ZooModel from "./ZooModel";
import HouseModel from "./HouseModel";
import Buddy from "./Buddy";
import { getAsset, cellsVan, botsCellsVan, isBlok, isManipuleerbaar, goudConfig } from "./AssetRegistry";
import { heightAt, applyBrush, flatField, TER_SIZE, TER_SEG, TER_N, TER_EXT, TER_STEP, blokHoogte } from "./terrain";
import { computeWater, celWereldHoogte, WATER_SURFACE_Y } from "./water";
import { dagenVerschil } from "./zooEconomy";
import { GROUND_COLOR } from "./ground";
import Buitenwereld from "./Buitenwereld";
import WandelPreview, { wandelPreviewActief, Leerpadlint, lintCellen, Opritten, opritCellen } from "./WandelPreview";
import { LEERTRAIL } from "./leerpadLint";
import { WANDEL_ROUTES, leesWandeling, stopsVan } from "./wandelRoutes";
import UitvindersTaferelen, { Souvenir, EgyptischePiramide, RubiksKubus, KegelIjsje, GroteBal, HalveBol, Cilinder, Zwembad } from "./UitvindersKabouters";
import { Klokkentoren, Weegschaal, Breukentaart, Moestuin, Telraam, Parkkaart, Kompas, Eiffeltoren, GriekseTempel, Wereldbol, Sterrenwacht, Standbeeld, HollandseMolen, Raket, Vulkaan, Kas, Weerstation, Spaarpot, Bouwbord, DinoBord, RAKET_VLUCHT, LeerBord } from "./ParkLeerobjecten";
import FabelWezen from "./FabelWezen";
import { LEERMOMENT_BY_ASSET, POORT_ASSETS } from "./parkLeermomenten";
import { getBlokMaterial, grijsMaps, grasSprietTex } from "./blokTextures";
import { useEffect } from "react";
import {
  CELL, GRID_SIZE, GRID_DIV, HALF, KUB, LOW_END, snapToCell, cellToWorld, cellKey,
  footprint, isPlaatsbaar, bezetteCellenVan,
} from "./grid";

// Gedeelde randjes-geometrieën voor de bouw/hak-aanwijzers (review 17 jul):
// inline `new BoxGeometry(...)` in JSX-args gaf bij elke re-render een nieuwe
// geometrie (args-identiteit wijzigt → r3f bouwt de edgesGeometry opnieuw).
const HOVER_RAND_GEO = new BoxGeometry(KUB + 0.04, KUB + 0.04, KUB + 0.04);
const HAK_RAND_GEO = new BoxGeometry(KUB + 0.05, KUB + 0.05, KUB + 0.05);

// 🥾 Wandel-stop-wachter (Brian 20 aug: "hier kan ik niet verder lopen" — hij
// stond bóven op de stop zonder te weten dat hij er was): kom je binnen ~3 m
// van het huidige stop-object, dan opent het praatje vanzelf. Aankomst =
// beloning, geen doodlopen. Vuurt 1× per doel.
function WandelStopWachter({ doel, playerPos, onBereikt }) {
  const vuurde = useRef(null);
  useFrame(() => {
    if (!doel || !playerPos?.current) return;
    const key = `${doel.x},${doel.z}`;
    const dx = playerPos.current.x - doel.x;
    const dz = playerPos.current.z - doel.z;
    if (dx * dx + dz * dz < 9) {
      if (vuurde.current !== key) {
        vuurde.current = key;
        onBereikt && onBereikt();
      }
    }
  });
  return null;
}

// Welke items zijn "vast" (kan het poppetje niet doorheen lopen)? Paden en
// kleine bloemen/paddenstoel zijn beloopbaar; de rest (verblijven, gebouwen,
// attracties, hekken, bomen) houdt tegen.
function isVast(assetId) {
  const a = getAsset(assetId);
  if (!a) return false;
  // Expliciet overloopbaar decor (bv. rails: bezoekers-bots liepen erop vast
  // en de wandelroute kruist het spoor — Mark 20 aug).
  if (a.beloopbaar) return false;
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
    <mesh position={[x, y + h * BLOK_H + BLOK_H / 2, z]} rotation={[0, rotation, 0]} castShadow receiveShadow material={getBlokMaterial(a)}>
      <boxGeometry args={[CELL, BLOK_H, CELL]} />
    </mesh>
  );
}

// 🧱 BlokkenLaag — alle bouwblokken in instanced meshes (2 draw-calls voor
// honderden blokken) + Minecraft-plaatsing: tik op een blok-VLAK en het nieuwe
// blok verschijnt aan díe kant (bovenop, opzij of eronder) → overhangende
// daken, poorten en bruggen kunnen. Daken (kegels) blijven losse meshes.
function BlokkenLaag({ items, terrain, heightFn, placingBlok, modusBezig, onFacePlace, onHak }) {
  const hover = useRef(); // muis-aanwijs-randje (desktop): dít blokje raak je
  // 🧊 Kubussen van 1×1×1 m (kx/kz/kh op het fijne KUB-raster), gegroepeerd
  // per SOORT: elke bloksoort krijgt zijn eigen instanced mesh met eigen
  // pixel-texture (gras met groene bovenkant, baksteen met voegen, ...).
  const { perSoort, daken } = useMemo(() => {
    const per = new Map(), daken = [];
    items.forEach((it, i) => {
      if (it.kx == null) return; // alleen kub-blokken (oude worden bij load gemigreerd)
      const a = getAsset(it.assetId);
      if (!a) return;
      if (a.procedural === "blokdak") daken.push({ it, i, a });
      else if (a.procedural === "blok") {
        let g = per.get(a.id);
        if (!g) per.set(a.id, (g = { a, lijst: [] }));
        g.lijst.push({ it, i, a });
      }
    });
    return { perSoort: [...per.values()], daken };
  }, [items]);

  const kubPos = (it) => {
    const x = it.kx * KUB + KUB / 2, z = it.kz * KUB + KUB / 2;
    return [x, heightFn(x, z) + (it.kh || 0) * KUB + KUB / 2, z];
  };

  // Minecraft-plaatsing: welk VLAK van de kubus raakte je? Daar komt de nieuwe.
  const faceDoel = (it, e) => {
    const [x, y, z] = kubPos(it);
    const dx = e.point.x - x, dy = e.point.y - y, dz = e.point.z - z;
    const ax = Math.abs(dx), ay = Math.abs(dy), az = Math.abs(dz);
    if (ay >= ax && ay >= az) return { kx: it.kx, kz: it.kz, kh: (it.kh || 0) + (dy > 0 ? 1 : -1) };
    if (ax >= az) return { kx: it.kx + Math.sign(dx), kz: it.kz, kh: it.kh || 0 };
    return { kx: it.kx, kz: it.kz + Math.sign(dz), kh: it.kh || 0 };
  };
  const maakHandlers = (lijst, perId) => ({
    onPointerDown: (e) => {
      const rec = perId ? lijst : lijst[e.instanceId];
      if (!rec) return;
      if (placingBlok) {
        e.stopPropagation();
        // Rechtermuisknop = weghakken, links/tik = ertegenaan bouwen (Minecraft).
        // Op coördinaten (niet array-index): twee snelle kliks vóór de
        // re-render zouden anders het verkeerde item wissen.
        if (e.nativeEvent && e.nativeEvent.button === 2) { onHak && onHak(rec.it); return; }
        onFacePlace(faceDoel(rec.it, e));
        return;
      }
      if (modusBezig) return;
      e.stopPropagation(); // kubussen selecteer je niet — weghalen = ⛏️/rechts-klik
    },
    onContextMenu: (e) => {
      // geen browser-menu op blokjes in bouw-modus
      if (placingBlok && e.nativeEvent) e.nativeEvent.preventDefault();
    },
    onPointerMove: (e) => {
      if (!placingBlok || !hover.current) return;
      const rec = perId ? lijst : lijst[e.instanceId];
      if (!rec) return;
      const [x, y, z] = kubPos(rec.it);
      hover.current.position.set(x, y, z);
      hover.current.visible = true;
    },
    onPointerOut: () => { if (hover.current) hover.current.visible = false; },
  });

  return (
    <group>
      {perSoort.map(({ a, lijst }) => (
        <BlokSoortMesh key={a.id} a={a} lijst={lijst} kubPos={kubPos} terrain={terrain} handlers={maakHandlers(lijst, false)} />
      ))}
      {daken.map((rec) => {
        const [x, y, z] = kubPos(rec.it);
        return (
          <mesh key={rec.i} position={[x, y - KUB * 0.05, z]} rotation={[0, Math.PI / 4, 0]} castShadow {...maakHandlers(rec, true)}>
            <coneGeometry args={[KUB * 0.75, KUB, 4]} />
            <meshStandardMaterial color={rec.a.blokKleur} roughness={1} flatShading />
          </mesh>
        );
      })}
      {/* Aanwijs-randje: het blokje onder je muis (bouwen = links, hakken = rechts). */}
      <lineSegments ref={hover} visible={false}>
        <edgesGeometry args={[HOVER_RAND_GEO]} />
        <lineBasicMaterial color="#111111" />
      </lineSegments>
    </group>
  );
}

// Eén instanced mesh voor alle kubussen van één bloksoort, met de
// pixel-texture van die soort (blokTextures.js).
function BlokSoortMesh({ a, lijst, kubPos, terrain, handlers }) {
  const ref = useRef();
  useEffect(() => {
    const m = ref.current;
    if (!m) return;
    const dummy = new Object3D();
    lijst.forEach(({ it }, k) => {
      const [x, y, z] = kubPos(it);
      dummy.position.set(x, y, z);
      dummy.rotation.y = 0;
      dummy.updateMatrix();
      m.setMatrixAt(k, dummy.matrix);
    });
    m.count = lijst.length;
    m.instanceMatrix.needsUpdate = true;
    m.computeBoundingSphere();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lijst, terrain]);
  return (
    <instancedMesh
      key={`${a.id}-${lijst.length}`}
      ref={ref}
      args={[undefined, undefined, Math.max(1, lijst.length)]}
      material={getBlokMaterial(a)}
      castShadow={!a.doorzichtig}
      receiveShadow
      {...handlers}
    >
      <boxGeometry args={[KUB, KUB, KUB]} />
    </instancedMesh>
  );
}

// 🎯 Bouw-cursor (Mark 2 jul): in blok-bouwmodus wijst je poppetje aan waar
// het volgende blok komt — een zacht pulserend doorschijnend blok op het vakje
// vóór je (op de laagste vrije laag). Werkt op telefoon én laptop (geen hover
// nodig); de "Zet neer"-knop in de balk plaatst 'm daar.
function BouwCursor({ actief, playerPos, playerFace, heightFn, blokPerKub, cursorRef, kleur = "#ffffff" }) {
  const ref = useRef();
  const pijl = useRef();
  const hak = useRef();
  useFrame((s) => {
    const m = ref.current, pj = pijl.current, hk = hak.current;
    if (!m || !pj || !hk) return;
    if (!actief || !playerPos.current || !playerFace.current) {
      m.visible = false;
      pj.visible = false;
      hk.visible = false;
      if (cursorRef) cursorRef.current = null;
      return;
    }
    const p = playerPos.current, f = playerFace.current;
    // Richten op het fijne kub-raster: ~2,6 m vóór je.
    const kx = Math.floor(p.x + f.x * 2.6), kz = Math.floor(p.z + f.z * 2.6);
    const LIM = HALF * CELL - 1;
    if (Math.abs(kx) > LIM || Math.abs(kz) > LIM) { m.visible = false; pj.visible = false; hk.visible = false; if (cursorRef) cursorRef.current = null; return; }
    const set = blokPerKub.get(`${kx},${kz}`);
    let kh = 0;
    while (set && set.has(kh)) kh++;
    const x = kx * KUB + KUB / 2, z = kz * KUB + KUB / 2;
    const grond = heightFn(x, z);
    const y = grond + kh * KUB + KUB / 2;
    m.position.set(x, y, z);
    m.visible = kh < 10;
    m.material.opacity = 0.38 + Math.sin(s.clock.elapsedTime * 4) * 0.14;
    // Groene wijs-pijl die boven de richt-kubus op-en-neer wipt — dáár bouw je.
    pj.visible = m.visible;
    pj.position.set(x, y + KUB * 1.1 + Math.sin(s.clock.elapsedTime * 3.2) * 0.18, z);
    pj.rotation.y = s.clock.elapsedTime * 1.5;
    // ⛏️ Hak-markering (Minecraft-stijl): zwarte rand om de BOVENSTE kubus van
    // de stapel waar je op richt — díe hakt "Hak weg" weg.
    const topH = kh - 1;
    hk.visible = topH >= 0;
    if (hk.visible) hk.position.set(x, grond + topH * KUB + KUB / 2, z);
    if (cursorRef) cursorRef.current = m.visible || hk.visible ? { kx, kz, kh, hakH: topH >= 0 ? topH : null, fx: f.x, fz: f.z } : null;
  });
  return (
    <group>
      <mesh ref={ref} visible={false}>
        <boxGeometry args={[KUB, KUB, KUB]} />
        <meshStandardMaterial color={kleur} transparent opacity={0.4} depthWrite={false} />
      </mesh>
      <mesh ref={pijl} visible={false} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.3, 0.6, 4]} />
        <meshStandardMaterial color="#00C853" emissive="#00C853" emissiveIntensity={0.45} roughness={0.4} />
      </mesh>
      <lineSegments ref={hak} visible={false}>
        <edgesGeometry args={[HAK_RAND_GEO]} />
        <lineBasicMaterial color="#1a1a1a" linewidth={2} />
      </lineSegments>
    </group>
  );
}

// ⛲ Blok-fontein (2 jul): vierkante steenbak met water — vervangt het ronde
// glb-model dat vloekte met de kubussen-wereld.
function BlokFontein({ x, y, z }) {
  const rand = [];
  for (let i = -2; i <= 2; i++) { rand.push([i, -2], [i, 2]); if (Math.abs(i) < 2) rand.push([-2, i], [2, i]); }
  return (
    <group position={[x, y, z]}>
      {rand.map(([bx, bz], i) => (
        <mesh key={i} castShadow receiveShadow position={[bx, 0.35, bz]}><boxGeometry args={[1, 0.7, 1]} /><meshStandardMaterial map={grijsMaps.muur()} color="#a3a8ae" roughness={1} /></mesh>
      ))}
      <mesh position={[0, 0.42, 0]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[3, 3]} /><meshStandardMaterial color="#4fa8d8" transparent opacity={0.85} roughness={0.3} /></mesh>
      <mesh castShadow position={[0, 0.9, 0]}><boxGeometry args={[0.6, 1.1, 0.6]} /><meshStandardMaterial map={grijsMaps.buiten()} color="#8f959c" roughness={1} /></mesh>
      <mesh position={[0, 1.55, 0]}><boxGeometry args={[0.35, 0.35, 0.35]} /><meshStandardMaterial color="#bfe3f2" transparent opacity={0.7} roughness={0.3} /></mesh>
    </group>
  );
}

// 🏠 Blok-huis (Mark 2 jul: "vervang oude huizen door Minecraft-huizen waar
// je in kunt"): 6×6 m huis in kubus-stijl met een échte deuropening (2 m) —
// binnen is vrij (zie vasteCellen) dus je loopt gewoon naar binnen. Acht
// kleurvarianten vervangen houseA-H; kleuren-verf werkt op dak/muur/deur.
const HUIS_VARIANT = {
  houseA: { muur: "#e8e0d2", dak: "#c0463c" }, houseB: { muur: "#dfe8ee", dak: "#3a6ad8" },
  houseC: { muur: "#f2e3c0", dak: "#3ba55d" }, houseD: { muur: "#e3cfa8", dak: "#8a5a3a" },
  houseE: { muur: "#d8c8e8", dak: "#7c3aed" }, houseF: { muur: "#f6d9c4", dak: "#e8892e" },
  houseG: { muur: "#cfe3d8", dak: "#1f7a8c" }, houseH: { muur: "#b5563f", dak: "#4a3320" },
  // De gekleurde huisjes (huis-a.glb met tint) — nu óók blok-huizen.
  huisRood: { muur: "#f3a89c", dak: "#c0463c" }, huisBlauw: { muur: "#a9cdf5", dak: "#3a6ad8" },
  huisGroen: { muur: "#b3e09a", dak: "#2b7a44" }, huisGeel: { muur: "#f5dd8e", dak: "#e8892e" },
};
function BlokHuis({ variant = "houseA", x, y, z, rotation = 0, colors, colorEditable = false, onPickPart }) {
  const v = HUIS_VARIANT[variant] || HUIS_VARIANT.houseA;
  const muur = colors?.muur || v.muur;
  const dak = colors?.dak || v.dak;
  const deur = colors?.deur || "#6b4a2b";
  const pak = (grp) => (colorEditable && onPickPart ? { onPointerDown: (e) => { e.stopPropagation(); onPickPart(grp); } } : {});
  const W = 0.5; // muurdikte
  return (
    <group position={[x, y, z]} rotation={[0, rotation, 0]}>
      {/* achtermuur + zijmuren (3 m hoog) */}
      <mesh castShadow receiveShadow position={[0, 1.5, -2.75]} {...pak("muur")}><boxGeometry args={[6, 3, W]} /><meshStandardMaterial map={grijsMaps.muur()} color={muur} roughness={1} /></mesh>
      <mesh castShadow receiveShadow position={[-2.75, 1.5, 0]} {...pak("muur")}><boxGeometry args={[W, 3, 6]} /><meshStandardMaterial map={grijsMaps.muur()} color={muur} roughness={1} /></mesh>
      <mesh castShadow receiveShadow position={[2.75, 1.5, 0]} {...pak("muur")}><boxGeometry args={[W, 3, 6]} /><meshStandardMaterial map={grijsMaps.muur()} color={muur} roughness={1} /></mesh>
      {/* voormuur: 2 segmenten + latei → deuropening van 2 m breed, 2 m hoog */}
      <mesh castShadow receiveShadow position={[-2, 1.5, 2.75]} {...pak("muur")}><boxGeometry args={[2, 3, W]} /><meshStandardMaterial map={grijsMaps.muur()} color={muur} roughness={1} /></mesh>
      <mesh castShadow receiveShadow position={[2, 1.5, 2.75]} {...pak("muur")}><boxGeometry args={[2, 3, W]} /><meshStandardMaterial map={grijsMaps.muur()} color={muur} roughness={1} /></mesh>
      <mesh castShadow receiveShadow position={[0, 2.5, 2.75]} {...pak("muur")}><boxGeometry args={[2, 1, W]} /><meshStandardMaterial map={grijsMaps.muur()} color={muur} roughness={1} /></mesh>
      {/* deurposten */}
      <mesh position={[-1.05, 1, 2.78]} {...pak("deur")}><boxGeometry args={[0.16, 2, 0.6]} /><meshStandardMaterial map={grijsMaps.plank()} color={deur} roughness={1} /></mesh>
      <mesh position={[1.05, 1, 2.78]} {...pak("deur")}><boxGeometry args={[0.16, 2, 0.6]} /><meshStandardMaterial map={grijsMaps.plank()} color={deur} roughness={1} /></mesh>
      {/* glas-ramen op de zijmuren en achterkant */}
      {[[-2.78, 0, true], [2.78, 0, true], [0, -2.78, false]].map(([rx, rz, zij], i) => (
        <mesh key={i} position={zij ? [rx, 1.6, 0] : [rx, 1.6, rz]}>
          <boxGeometry args={zij ? [0.12, 1, 1.8] : [1.8, 1, 0.12]} />
          <meshStandardMaterial color="#bfe3f2" transparent opacity={0.55} roughness={0.3} />
        </mesh>
      ))}
      {/* plat kubus-dek + zadeldak van blok-treden (Minecraft-stijl) */}
      <mesh castShadow position={[0, 3.25, 0]} {...pak("dak")}><boxGeometry args={[6.6, 0.5, 6.6]} /><meshStandardMaterial map={grijsMaps.dak()} color={dak} roughness={1} /></mesh>
      <mesh castShadow position={[0, 3.95, 0]} {...pak("dak")}><boxGeometry args={[4.4, 0.9, 6.7]} /><meshStandardMaterial map={grijsMaps.dak()} color={dak} roughness={1} /></mesh>
      <mesh castShadow position={[0, 4.7, 0]} {...pak("dak")}><boxGeometry args={[2.2, 0.9, 6.8]} /><meshStandardMaterial map={grijsMaps.dak()} color={dak} roughness={1} /></mesh>
    </group>
  );
}

// Eén geplaatst item, gerenderd op basis van zijn soort. y = terreinhoogte.
// React.memo (review 17 jul): ZookwartierGame heeft ~50 useState; elke HUD-tik
// re-renderde anders álle geplaatste items mee. Props zijn primitief/stabiel
// (behalve kraam bij de 4 kraampjes — acceptabel).
const PlacedItem = memo(function PlacedItem({ assetId, x, z, y = 0, rotation = 0, babies = 0, colors, colorEditable = false, onPickPart, onParts, mood = "blij", verstopt = false, kraam = null, h = 0, rideRef, visueel = false, maat, onMaat, onOefenen, studie = false, goud = false, goudRest = 0 }) {
  const a = getAsset(assetId);
  if (!a) return null;
  // Rails/hekpanelen/padtegels zitten visueel in GeinstanceerdeParkProps
  // (review 17 jul: 8/7/1 losse meshes per stuk = draw-call-explosie). Hier
  // alleen een onzichtbare hitbox zodat selecteren/weghalen blijft werken.
  // `visueel` (ghost-preview bij plaatsen) toont wél het echte model.
  if (!visueel) {
    if (a.procedural === "rail") return <PropHitbox position={[x, y, z]} rotation={rotation} maat={[2, 0.3, 1.3]} hoogte={0.15} />;
    if (a.procedural === "fencePanel") return <PropHitbox position={[x, y, z]} rotation={rotation} maat={[2, 0.9, 0.3]} hoogte={0.45} />;
    if (a.procedural === "path") return <PropHitbox position={[x, y, z]} maat={[2.02, 0.12, 2.02]} hoogte={0.06} />;
  }
  if (a.procedural === "blok" || a.procedural === "blokdak") return <BouwBlok a={a} x={x} y={y} z={z} h={h} rotation={rotation} />;
  if (assetId === "fountain") return <BlokFontein x={x} y={y} z={z} />;
  if (HUIS_VARIANT[assetId]) return <BlokHuis variant={assetId} x={x} y={y} z={z} rotation={rotation} colors={colors} colorEditable={colorEditable} onPickPart={onPickPart} />;
  if (a.kind === "fabel") return <FabelWezen soort={a.fabelSoort} position={[x, y, z]} />;
  if (a.kind === "animal") return <LosDier position={[x, y, z]} assetId={assetId} babies={babies} mood={mood} verstopt={verstopt} />;
  if (a.procedural === "carousel") return <Carousel position={[x, y, z]} rideRef={rideRef} />;
  if (a.procedural === "ferris") return <FerrisWheel position={[x, y, z]} rideRef={rideRef} />;
  if (a.procedural === "swing") return <SwingRide position={[x, y, z]} rideRef={rideRef} />;
  if (a.procedural === "coaster") return <Coaster position={[x, y, z]} rotation={rotation} baan={a.baan} rideRef={rideRef} />;
  if (a.procedural === "train") return <TrainRide position={[x, y, z]} />;
  if (a.procedural === "rail") return <RailTile position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "station") return <Station position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "path") return <PathTile position={[x, y, z]} color={a.color} />;
  if (a.procedural === "hill") return <HillMound position={[x, y, z]} size={a.hillSize} color={a.color} />;
  if (a.procedural === "rock") return <Rock position={[x, y, z]} rotation={rotation} variant={a.variant} />;
  if (a.procedural === "souvenir") return <Souvenir soort={a.souvenir} position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "piramide") return <EgyptischePiramide position={[x, y, z]} rotation={rotation} maat={maat ?? 8} onMaat={onMaat} onOefenen={onOefenen} studie={studie} goud={goud} goudRest={goudRest} />;
  if (a.procedural === "rubik") return <RubiksKubus position={[x, y, z]} rotation={rotation} maat={maat ?? 3} goud={goud} goudRest={goudRest} />;
  if (a.procedural === "ijsje") return <KegelIjsje position={[x, y, z]} rotation={rotation} maat={maat ?? 3} goud={goud} goudRest={goudRest} />;
  if (a.procedural === "bol") return <GroteBal position={[x, y, z]} rotation={rotation} maat={maat ?? 3} goud={goud} goudRest={goudRest} />;
  if (a.procedural === "halvebol") return <HalveBol position={[x, y, z]} rotation={rotation} maat={maat ?? 3} goud={goud} goudRest={goudRest} />;
  if (a.procedural === "cilinder") return <Cilinder position={[x, y, z]} rotation={rotation} maat={maat ?? 3} goud={goud} goudRest={goudRest} />;
  if (a.procedural === "zwembad") return <Zwembad position={[x, y, z]} rotation={rotation} maat={maat ?? 3} goud={goud} goudRest={goudRest} />;
  // 🎡 Interactief-park-masterplan (Mark 16-17 aug) — leerobjecten + poorten.
  // 🎓 Elk leerstation krijgt een leer-bord naast zich (Mark 26 aug: "geldt dit
  // voor het hele park?"): de gekoppelde les(sen) als zichtbare knoppen. De
  // vormen-familie (kubus/bol/…) niet — die heeft al de eigen studie/oefen-knop.
  const metLeerBord = (node) => {
    const moment = LEERMOMENT_BY_ASSET[assetId];
    if (!moment || !onOefenen) return node;
    return <group>{node}<LeerBord moment={moment} onOefenen={onOefenen} position={[x + 1.9, y, z + 1.5]} /></group>;
  };
  if (a.procedural === "klok") return metLeerBord(<Klokkentoren position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "weegschaal") return metLeerBord(<Weegschaal position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "breukentaart") return metLeerBord(<Breukentaart position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "moestuin") return metLeerBord(<Moestuin position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "telraam") return metLeerBord(<Telraam position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "parkkaart") return metLeerBord(<Parkkaart position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "kompas") return metLeerBord(<Kompas position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "eiffeltoren") return metLeerBord(<Eiffeltoren position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "tempel") return metLeerBord(<GriekseTempel position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "wereldbol") return metLeerBord(<Wereldbol position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "telescoop") return metLeerBord(<Sterrenwacht position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "standbeeld") return metLeerBord(<Standbeeld position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "molen") return metLeerBord(<HollandseMolen position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "raket") return <Raket position={[x, y, z]} rotation={rotation} onOefenen={onOefenen} />;
  if (a.procedural === "vulkaan") return metLeerBord(<Vulkaan position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "kas") return metLeerBord(<Kas position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "weerstation") return metLeerBord(<Weerstation position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "spaarpot") return metLeerBord(<Spaarpot position={[x, y, z]} rotation={rotation} />);
  if (a.procedural === "bordBouw") return <Bouwbord position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "bordZwembad") return <Bouwbord position={[x, y, z]} rotation={rotation} variant="zwembad" />;
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
});

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

// 🌱 Natuurlijk, vlekkerig gazon: zachte 2D-ruis (geen Math.random → zelfde look
// elke sessie) laat grote lappen lichter/donkerder/geler groen over elkaar
// vloeien, zoals een echt grasveld — i.p.v. één egale plastic-groene vloer.
function hash2(x, y) {
  let h = (x | 0) * 374761393 + (y | 0) * 668265263;
  h = (h ^ (h >> 13)) * 1274126177;
  return ((h ^ (h >> 16)) >>> 0) / 4294967295;
}
function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}
const G_DEEP = new Color("#5c9a41");   // schaduwrijk, donkerder groen
const G_LIGHT = new Color("#93c266");  // zonnig, lichter groen
const G_MID = new Color("#72b354");    // frisgroen tussenin
const G_DRY = new Color("#b6b968");    // droog/geel plekje
function grasKleur(i, j, out) {
  const patch = vnoise(i * 0.18, j * 0.18);              // grote zachte lappen
  out.copy(G_DEEP).lerp(G_LIGHT, patch);
  out.lerp(G_MID, vnoise(i * 0.5 + 11, j * 0.5 + 7) * 0.35);
  const dry = vnoise(i * 0.12 + 30, j * 0.12 + 40);      // hier en daar droger
  if (dry > 0.72) out.lerp(G_DRY, ((dry - 0.72) / 0.28) * 0.4);
  out.multiplyScalar(0.93 + 0.07 * hash2(i * 3 + 1, j * 3 + 2)); // fijne korrel
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
        if (verf) {
          // geschilderde grond (zand/rots/...): vaste kleur + subtiele korrel
          c.set(verf).multiplyScalar(0.94 + 0.06 * (((i * 7 + j * 13) % 5) / 4));
        } else if (h <= 0.6) {
          // vlak gras: natuurlijke, vlekkerige groentinten (grasKleur varieert al)
          grasKleur(i, j, c);
        } else {
          // hellingen/toppen: rots/steen/sneeuw-look + subtiele korrel
          hoogteKleur(h, c);
          c.multiplyScalar(0.94 + 0.06 * (((i * 7 + j * 13) % 5) / 4));
        }
        top.setColorAt(k, c);
        // Kolom eronder (aarde, hoger = steen) tot de bodem.
        const kh = Math.max(0.2, h - 0.4 - BODEM);
        dummy.position.set(wx, BODEM + kh / 2, wz);
        dummy.scale.set(1, kh, 1);
        dummy.updateMatrix();
        kol.setMatrixAt(k, dummy.matrix);
        // 🐛 Fix (Mark 17 aug): `tint` was niet gedefinieerd → ReferenceError die
        // sinds commit 8661108e (16 aug, "realistischer gras") de HELE park-Canvas
        // liet crashen (ParkErrorBoundary). Subtiele korrel, net als het bovenvlak.
        c.copy(h > 2.2 ? KL_STEENLAAG : KL_AARDE).multiplyScalar(0.9 + 0.06 * (((i * 5 + j * 11) % 5) / 4));
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
    onPointerDown: (e) => { e.stopPropagation(); if (sculpt) onSculpt(e.point.x, e.point.z); else if (water) onWater(snapToCell(e.point.x, e.point.z, 1)); else if (paintGround) onGround(snapToCell(e.point.x, e.point.z, 1)); else if (placing) onPlace(snapToCell(e.point.x, e.point.z, cells), e.point); else onMissTap && onMissTap(); },
  };
  return (
    <group>
      {/* Pixel-ruis-maps (grijs) vermenigvuldigen met de instance-kleur:
          gras-verf en hoogte-kleuren blijven werken, maar krijgen Minecraft-korrel. */}
      {/* Blokgrootte = TER_STEP (de raster-stap), niet CELL: sinds de ruimte-
          verdubbeling (23 aug) is TER_STEP 4 m terwijl CELL 2 m bleef, dus met
          CELL zouden de vloer-blokken losse vlakken worden met gaten ertussen. */}
      <instancedMesh ref={refTop} args={[undefined, undefined, AANTAL]} receiveShadow {...handlers}>
        <boxGeometry args={[TER_STEP, 0.4, TER_STEP]} />
        <meshStandardMaterial map={grijsMaps.terreinTop()} roughness={1} metalness={0} />
      </instancedMesh>
      <instancedMesh ref={refKol} args={[undefined, undefined, AANTAL]} receiveShadow {...handlers}>
        <boxGeometry args={[TER_STEP, 1, TER_STEP]} />
        <meshStandardMaterial map={grijsMaps.terreinKolom()} roughness={1} metalness={0} />
      </instancedMesh>
    </group>
  );
}

// 🌿 Grasspriet-pollen: dunne, sparse graspolletjes bovenop het vlakke gras —
// geven het gazon diepte/leven zonder de blok-wereld te overladen. Deterministisch
// verstrooid (~40% van de gras-vakjes, 1 polletje elk), alléén op laag, onbeschilderd
// gras. Uit op zwakke toestellen (LOW_END) en 1 instanced draw-call.
// NB: geometrie/materiaal als r3f-children (niet via `args`), anders ruimt r3f
// ze bij het verlaten van het park op → crash bij terugkomst (park-fix 16 aug).
const SPRIET_H = 0.9; // hoogte van het graspolletje (plane staat rechtop, midden op pivot)
function GrasSprieten({ field, ground = {}, padCellen = null }) {
  const ref = useRef();
  const tex = useMemo(() => grasSprietTex(), []);
  const pollen = useMemo(() => {
    const out = [];
    for (let i = 0; i < TER_N; i++) {
      const wx = -TER_EXT + i * TER_STEP;
      for (let j = 0; j < TER_N; j++) {
        const wz = -TER_EXT + j * TER_STEP;
        const gk = `${Math.round(wx / CELL)},${Math.round(wz / CELL)}`;
        if (ground[gk]) continue; // geschilderde grond → geen gras
        const h = blokHoogte(heightAt(field, wx, wz));
        if (h > 0.6) continue; // alleen laag/vlak gras
        const seed = ((i * 73856093) ^ (j * 19349663)) >>> 0;
        if (((seed >>> 8) & 0xff) / 255 > 0.4) continue; // ~40% van de vakjes
        const jx = (((seed >>> 3) & 0xff) / 255 - 0.5) * 1.4;
        const jz = (((seed >>> 11) & 0xff) / 255 - 0.5) * 1.4;
        // Geen gras óp de paden (Brian 20 aug: "planten in het looppad") —
        // check de cel van de uitgewaaierde eindpositie tegen de pad-tegels.
        if (padCellen && padCellen.has(`${Math.round((wx + jx) / CELL)},${Math.round((wz + jz) / CELL)}`)) continue;
        const rot = (((seed >>> 17) & 0xff) / 255) * Math.PI;
        const sc = 0.75 + (((seed >>> 23) & 0xff) / 255) * 0.5;
        out.push([wx + jx, h, wz + jz, rot, sc]);
      }
    }
    return out;
  }, [field, ground, padCellen]);
  useEffect(() => {
    const m = ref.current;
    if (!m) return;
    const d = new Object3D();
    pollen.forEach(([x, y, z, rot, sc], n) => {
      // plane is gecentreerd → onderkant op de grond = midden op y + halve hoogte
      d.position.set(x, y + (SPRIET_H * sc) / 2, z);
      d.rotation.set(0, rot, 0);
      d.scale.set(sc, sc, sc);
      d.updateMatrix();
      m.setMatrixAt(n, d.matrix);
    });
    m.count = pollen.length;
    m.instanceMatrix.needsUpdate = true;
    m.computeBoundingSphere();
  }, [pollen]);
  if (!pollen.length) return null;
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, pollen.length]} frustumCulled={false}>
      <planeGeometry args={[1.5, SPRIET_H]} />
      <meshStandardMaterial map={tex} transparent alphaTest={0.5} side={DoubleSide} roughness={1} metalness={0} />
    </instancedMesh>
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
      onPointerDown={(e) => { e.stopPropagation(); if (placing) onPlace(snapToCell(e.point.x, e.point.z, cells), e.point); else onMissTap && onMissTap(); }}
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

// Vrolijk laadscherm mét voortgang (park-zwerm 17 jul): het eerste bezoek
// downloadt flink wat dieren-modellen — een kaal "Park laden…" zonder
// voortgang voelde als hangen. useProgress geeft het echte percentage.
function Laden() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ textAlign: "center", fontFamily: "system-ui", whiteSpace: "nowrap" }}>
        <div style={{ fontSize: 34, marginBottom: 6 }}>🦊</div>
        <div style={{ color: "#3a5a2a", font: "700 15px system-ui" }}>Je park wordt gebouwd… {Math.round(progress)}%</div>
        <div style={{ marginTop: 8, width: 160, height: 8, borderRadius: 999, background: "rgba(0,0,0,0.12)", overflow: "hidden", marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ width: `${Math.max(4, progress)}%`, height: "100%", borderRadius: 999, background: "#00C853", transition: "width 0.3s" }} />
        </div>
      </div>
    </Html>
  );
}

// 🔊 Gids-watcher (Mark 12 jul: "Charley praat ongevraagd als je ergens langer
// naar kijkt"): kijkt elke kwart seconde welk benoembaar object (leermoment)
// het dichtst bij de speler is. Sta je er ~2 s bij stil terwijl je er ongeveer
// naar kijkt, dan vuurt `onGids(leermomentId)` — ZookwartierGame laat het
// maatje dan hardop vertellen. Remmen tegen gezeur: per object 4 min stilte,
// en na élk praatje 25 s globale pauze. Puur rekenwerk op refs — geen state,
// geen re-renders, dus gratis voor de framerate.
function GidsWatcher({ playerPos, playerFace, placedItems, trainHeadRef, actief, onGids }) {
  const dwell = useRef({ id: null, t: 0 });
  const perObject = useRef(new Map()); // leermoment-id → laatste spreek-tijd
  const lastGlobal = useRef(-999);
  const acc = useRef(0);
  useFrame((s, dt) => {
    if (!actief || !onGids) { dwell.current.t = 0; return; }
    acc.current += dt;
    if (acc.current < 0.25) return;
    const stap = acc.current;
    acc.current = 0;
    const nu = s.clock.elapsedTime;
    if (nu - lastGlobal.current < 25) return;
    const p = playerPos?.current;
    if (!p) return;
    // Dichtstbijzijnde benoembare object binnen ~7 m zoeken.
    let best = null, bestD2 = 49, bx = 0, bz = 0;
    for (const it of placedItems) {
      const lm = LEERMOMENT_BY_ASSET[it.assetId];
      if (!lm || !it.cell) continue;
      const [x, z] = cellToWorld(it.cell[0], it.cell[1]);
      const d2 = (x - p.x) * (x - p.x) + (z - p.z) * (z - p.z);
      if (d2 < bestD2) { bestD2 = d2; best = lm; bx = x; bz = z; }
    }
    const kop = trainHeadRef?.current;
    if (kop?.p) {
      const d2 = (kop.p.x - p.x) * (kop.p.x - p.x) + (kop.p.z - p.z) * (kop.p.z - p.z);
      if (d2 < bestD2) { bestD2 = d2; best = "stoomtrein"; bx = kop.p.x; bz = kop.p.z; }
    }
    if (!best || nu - (perObject.current.get(best) ?? -999) < 240) { dwell.current = { id: null, t: 0 }; return; }
    // "Ernaar kijken": kijkrichting moet grofweg richting het object wijzen —
    // behalve als je er al bovenop staat (dan telt dichtbij zijn als kijken).
    if (bestD2 > 9 && playerFace?.current) {
      const dx = bx - p.x, dz = bz - p.z;
      const len = Math.sqrt(dx * dx + dz * dz) || 1;
      const dot = (playerFace.current.x * dx + playerFace.current.z * dz) / len;
      if (dot < 0.2) { dwell.current = { id: null, t: 0 }; return; }
    }
    if (dwell.current.id === best) dwell.current.t += stap;
    else dwell.current = { id: best, t: 0 };
    if (dwell.current.t >= 2) {
      dwell.current = { id: null, t: 0 };
      perObject.current.set(best, nu);
      lastGlobal.current = nu;
      onGids(best);
    }
  });
  return null;
}

// 🔺 Meldt de dichtstbijzijnde piramide waar je bij staat/naar kijkt, zodat de
// grootte-regelaar (+ studie-stand + door-de-ogen) vanzelf verschijnt (Mark 16
// aug). MET HYSTERESE (Mark 17 aug: "als ik ernaar kijk draait het beeld"): het
// AAN-zetten kijkt naar de kijkrichting, maar het UIT-zetten NIET — anders flipt
// in eerste-persoon de kijkrichting → nabij aan/uit → camera aan/uit → een
// draai-lus. Eenmaal vergrendeld blijf je vast tot je écht wéglóópt (afstand).
function NabijPiramideWatcher({ playerPos, playerFace, placedItems, onNear }) {
  const acc = useRef(0);
  const last = useRef(null); // vergrendelde piramide-index (of null)
  const ENTER2 = 260;        // ~16 m: zo dicht + kijkend → aan (grote piramide)
  const EXIT2 = 900;         // ~30 m: pas hier weer los → geen geflipflop
  useFrame(() => {
    if (!onNear) return;
    acc.current += 1;
    if (acc.current < 15) return; // ~4×/sec (bij 60 fps)
    acc.current = 0;
    const p = playerPos?.current;
    if (!p) return;
    const afstand2 = (i) => {
      const it = placedItems[i];
      if (!it || !isManipuleerbaar(it.assetId) || !it.cell) return Infinity;
      const [x, z] = cellToWorld(it.cell[0], it.cell[1]);
      return (x - p.x) * (x - p.x) + (z - p.z) * (z - p.z);
    };
    // 1) Vergrendeld? Blijf vast tot je ver genoeg weg bent — ONAFHANKELIJK van
    //    de kijkrichting (dat voorkomt de draai-lus in eerste-persoon).
    if (last.current != null) {
      // Overdracht (Mark 17 aug): sta je duidelijk dichter bij een ANDER leer-
      // object (binnen ENTER2), pak dán dát object. Zonder dit blijft de grootte-
      // knop aan een buur-vorm hangen terwijl je al bij de volgende staat — de
      // vormen staan ~28 m uit elkaar, binnen de EXIT2-vasthoud-straal (~30 m).
      let dichtsteIdx = null, dichtsteD2 = Infinity;
      for (let i = 0; i < placedItems.length; i++) {
        const d2 = afstand2(i);
        if (d2 < dichtsteD2) { dichtsteD2 = d2; dichtsteIdx = i; }
      }
      if (dichtsteIdx != null && dichtsteIdx !== last.current && dichtsteD2 <= ENTER2) {
        last.current = dichtsteIdx; onNear(dichtsteIdx); return; // overgedragen
      }
      if (afstand2(last.current) <= EXIT2) return; // vasthouden
      last.current = null; onNear(null);           // losgelaten
    }
    // 2) Acquire: dichtstbijzijnde piramide binnen ENTER2 waar je NAAR kijkt.
    let bestIdx = null, bestD2 = ENTER2, bx = 0, bz = 0;
    for (let i = 0; i < placedItems.length; i++) {
      const it = placedItems[i];
      if (!isManipuleerbaar(it.assetId) || !it.cell) continue;
      const [x, z] = cellToWorld(it.cell[0], it.cell[1]);
      const d2 = (x - p.x) * (x - p.x) + (z - p.z) * (z - p.z);
      if (d2 < bestD2) { bestD2 = d2; bestIdx = i; bx = x; bz = z; }
    }
    if (bestIdx != null && bestD2 > 16 && playerFace?.current) {
      const dx = bx - p.x, dz = bz - p.z;
      const len = Math.sqrt(dx * dx + dz * dz) || 1;
      const dot = (playerFace.current.x * dx + playerFace.current.z * dz) / len;
      if (dot < 0.1) bestIdx = null;
    }
    if (bestIdx != null) { last.current = bestIdx; onNear(bestIdx); }
  });
  return null;
}

// ✨ Magische-poort-doorloop (Mark 16 aug, MAGISCHE-POORTEN-PLAN.md): loop je in
// de buurt van een landmark met een poort (POORT_ASSETS), dan opent het leerpad.
// Alleen bij het BINNENLOPEN (overgang van "niet bij" → "bij") — zodat je niet
// blijft hangen als je ernaast staat. De cooldown/flits zit in ZookwartierGame.
function PoortWatcher({ playerPos, placedItems, actief, onDoor }) {
  const acc = useRef(0);
  const binnen = useRef(null); // assetId waar je nu "in" staat
  useFrame((s, dt) => {
    if (!actief || !onDoor) { binnen.current = null; return; }
    acc.current += dt;
    if (acc.current < 0.2) return;
    acc.current = 0;
    const p = playerPos?.current;
    if (!p) return;
    let dichtst = null, bestD2 = 2.4; // ~1,5 m: je moet er echt doorheen lopen
    for (const it of placedItems) {
      if (!it.cell || !POORT_ASSETS[it.assetId]) continue;
      const [x, z] = cellToWorld(it.cell[0], it.cell[1]);
      const d2 = (x - p.x) * (x - p.x) + (z - p.z) * (z - p.z);
      if (d2 < bestD2) { bestD2 = d2; dichtst = it.assetId; }
    }
    if (dichtst !== binnen.current) {
      const wasLeeg = binnen.current == null;
      binnen.current = dichtst;
      if (dichtst && wasLeeg) onDoor(dichtst); // net binnengelopen
    }
  });
  return null;
}

// 🚀 Raket-volg-camera: zodra RAKET_VLUCHT actief is (lancering bezig) neemt
// deze de camera over — een vast punt schuin naast het lanceerplatform dat met
// het schip mee omhoog kijkt (en bij de landing weer mee terug). Zo kun je de
// raket écht nakijken, ook al kan het poppetje zelf niet zo ver omhoog kijken.
function RaketVolgCamera() {
  const doel = useRef(new Vector3());
  useFrame((s) => {
    if (!RAKET_VLUCHT.actief) return;
    doel.current.set(RAKET_VLUCHT.px + 9, 2.8, RAKET_VLUCHT.pz + 11);
    s.camera.position.lerp(doel.current, 0.07);
    s.camera.lookAt(RAKET_VLUCHT.x, RAKET_VLUCHT.y, RAKET_VLUCHT.z);
  });
  return null;
}

// 🛩️ De instap-zeppelin (Mark 26 aug: "tof als je in kan stappen en hem
// besturen — om de zoveel tijd landt hij, je loopt erin en ziet als Flight
// Simulator de besturing"). De Leerkwartier-zeppelin (met logo-doek) vaart
// vrij rond, landt elke ~1,5 minuut op het zeppelinveld (noordoost-veld bij
// het bouwbord), wacht ~35 s met de trap uit, en wie instapt vliegt zélf:
// joystick/pijltjes = sturen + gas, cockpit-knoppen = stijgen/dalen,
// 🛬 = automatische terugvlucht en landing. Camera = achtervolg-cockpit;
// gemount NÁ de andere camera's zodat hij tijdens de vlucht wint.
const ZEP_PAD = [46, 44];              // landingsveld (wereld-coördinaten)
const ZEP_CRUISE_S = 80, ZEP_GELAND_S = 45;
function InstapZeppelin({ inputRef, onRit, heightRef }) {
  const g = useRef();
  const stuurRef = useRef();           // 🛞 het stuurwiel in de cockpit draait mee
  const fase = useRef({ naam: "cruise", t0: null });
  const pos = useRef(new Vector3(ZEP_PAD[0], 40, ZEP_PAD[1]));
  const heading = useRef(Math.PI);
  const vaart = useRef(0);
  const klim = useRef(0);
  const terugKnop = useRef(false); // ◀ Terug-knop ingedrukt = achteruit varen
  const [ui, setUi] = useState(null);   // 'geland' | 'bestuur' — welke knoppen in beeld
  const hoogteDom = useRef(null), vaartDom = useRef(null); // cockpit-metertjes (direct DOM, geen re-renders)
  const doekTex = useZeppelinDoek("Leerkwartier", "/logo.jpg");
  const grondBij = (x, z) => (heightRef?.current ? heightRef.current(x, z) : 0);
  const padY = () => grondBij(ZEP_PAD[0], ZEP_PAD[1]) + 2.55; // gondel nét boven het gras
  useFrame((s, dtRaw) => {
    const m = g.current; if (!m) return;
    const dt = Math.min(dtRaw, 0.05);
    const t = s.clock.elapsedTime;
    if (fase.current.t0 == null) fase.current.t0 = t;
    const u = t - fase.current.t0;
    const ga = (naam) => { fase.current = { naam, t0: t }; };
    const naam = fase.current.naam;
    const p = pos.current;
    const vlieg = (snelheid) => { p.x += Math.sin(heading.current) * snelheid * dt; p.z += Math.cos(heading.current) * snelheid * dt; };
    // koers geleidelijk naar een doelpunt draaien (autopilot)
    const stuurNaar = (dx, dz, rate = 0.9) => {
      const doel = Math.atan2(dx - p.x, dz - p.z);
      let d = doel - heading.current;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      heading.current += Math.max(-rate * dt, Math.min(rate * dt, d));
      return Math.hypot(dx - p.x, dz - p.z);
    };
    if (naam === "cruise") {
      // vrij rondzwerven: zachte bochten, binnen ~r90 blijven, hoogte ~40
      heading.current += Math.sin(t * 0.13) * 0.22 * dt;
      if (Math.hypot(p.x, p.z) > 90) stuurNaar(0, 0, 0.5);
      p.y += (40 + Math.sin(t * 0.3) * 1.2 - p.y) * Math.min(1, dt * 0.5);
      vlieg(5);
      if (u > ZEP_CRUISE_S) ga("aanvliegen");
    } else if (naam === "aanvliegen") {
      const afstand = stuurNaar(ZEP_PAD[0], ZEP_PAD[1], 0.9);
      p.y += (Math.max(padY() + 10, 16) - p.y) * Math.min(1, dt * 0.4);
      vlieg(Math.min(7, Math.max(2, afstand * 0.25)));
      if (afstand < 2.5) ga("dalen");
    } else if (naam === "dalen") {
      p.x += (ZEP_PAD[0] - p.x) * Math.min(1, dt * 1.2);
      p.z += (ZEP_PAD[1] - p.z) * Math.min(1, dt * 1.2);
      p.y = Math.max(padY(), p.y - 2.2 * dt);
      if (p.y <= padY() + 0.01) { ga("geland"); setUi("geland"); }
    } else if (naam === "geland") {
      p.y = padY();
      if (u > ZEP_GELAND_S) { setUi(null); ga("opstijgen"); }
    } else if (naam === "opstijgen") {
      p.y += 2.6 * dt;
      vlieg(Math.min(4, u * 1.2));
      if (p.y >= 38) ga("cruise");
    } else if (naam === "bestuur") {
      const inp = inputRef?.current || {};
      const k = inp.keys || {};
      let mx = (k.ArrowRight || k.KeyD ? 1 : 0) - (k.ArrowLeft || k.KeyA ? 1 : 0) + (inp.joy?.x || 0);
      let my = (k.ArrowDown || k.KeyS ? 1 : 0) - (k.ArrowUp || k.KeyW ? 1 : 0) + (inp.joy?.y || 0);
      mx = Math.max(-1, Math.min(1, mx));
      my = Math.max(-1, Math.min(1, my));
      if (stuurRef.current) stuurRef.current.rotation.z += (-mx * 0.9 - stuurRef.current.rotation.z) * Math.min(1, dt * 8);
      heading.current -= mx * dt * 0.7;
      const doelVaart = terugKnop.current ? -5 : -my * 9; // joystick omhoog = vooruit; ◀-knop = achteruit
      vaart.current += (doelVaart - vaart.current) * Math.min(1, dt * 1.4);
      p.y = Math.max(grondBij(p.x, p.z) + 8, Math.min(64, p.y + klim.current * 3 * dt));
      vlieg(vaart.current);
      const afstand = Math.hypot(p.x, p.z);
      if (afstand > 150) { p.x *= 150 / afstand; p.z *= 150 / afstand; stuurNaar(0, 0, 1.4); }
    } else if (naam === "terugkeer") {
      const afstand = stuurNaar(ZEP_PAD[0], ZEP_PAD[1], 1.0);
      vaart.current += (Math.min(8, Math.max(2, afstand * 0.3)) - vaart.current) * Math.min(1, dt * 1.2);
      vlieg(vaart.current);
      if (afstand > 6) p.y += (Math.max(padY() + 10, 16) - p.y) * Math.min(1, dt * 0.5);
      else {
        p.x += (ZEP_PAD[0] - p.x) * Math.min(1, dt * 1.2);
        p.z += (ZEP_PAD[1] - p.z) * Math.min(1, dt * 1.2);
        p.y = Math.max(padY(), p.y - 2.4 * dt);
        if (p.y <= padY() + 0.01) { onRit && onRit(false); ga("geland"); setUi("geland"); }
      }
    }
    m.position.copy(p);
    // -90°: de neus (+x van het model) wijst in de vaarrichting — hij vloog
    // eerst zijwaarts (Mark 26 aug: "liever met de punt naar voren").
    m.rotation.y = heading.current - Math.PI / 2;
    m.rotation.z = naam === "bestuur" ? -Math.max(-1, Math.min(1, vaart.current / 9)) * 0.04 : Math.sin(t * 0.27) * 0.015;
    // cockpit-metertjes live bijwerken (zonder React-re-render)
    if (hoogteDom.current) hoogteDom.current.textContent = `${Math.max(0, Math.round(p.y - grondBij(p.x, p.z)))} m`;
    if (vaartDom.current) vaartDom.current.textContent = `${Math.abs(Math.round(vaart.current * 6))} km/u`;
    // 🎥 Vlucht-camera (Mark 26 aug, keuze na proberen: "toch de zeppelin van
    // achteren zien, afstand groter, bv. 50 meter"): ruime achtervolg-camera —
    // het hele luchtschip in beeld met het park eronder. Laatste useFrame → wint.
    if (naam === "bestuur" || naam === "terugkeer") {
      const fx = Math.sin(heading.current), fz = Math.cos(heading.current);
      s.camera.position.set(p.x - fx * 50, p.y + 15, p.z - fz * 50);
      s.camera.lookAt(p.x + fx * 8, p.y, p.z + fz * 8);
    }
  });
  const stapIn = (e) => {
    e?.stopPropagation?.();
    vaart.current = 0; klim.current = 0;
    fase.current = { naam: "bestuur", t0: null };
    setUi("bestuur");
    onRit && onRit(true);
    try { track?.("park_zeppelin_rit", {}); } catch { /* */ }
  };
  const land = () => { klim.current = 0; fase.current = { naam: "terugkeer", t0: null }; setUi(null); };
  const padGrondY = grondBij(ZEP_PAD[0], ZEP_PAD[1]);
  const knopStijl = { pointerEvents: "auto", border: "none", borderRadius: 12, padding: "10px 14px", font: "900 15px system-ui", color: "#fff", background: "#3a4754", cursor: "pointer", touchAction: "none" };
  return (
    <group>
      {/* 🅷 landingsveld: platform + markering + windzak */}
      <group position={[ZEP_PAD[0], padGrondY, ZEP_PAD[1]]}>
        <mesh position={[0, 0.05, 0]} receiveShadow><cylinderGeometry args={[4.2, 4.4, 0.1, 24]} /><meshStandardMaterial color="#9aa4ae" roughness={0.9} /></mesh>
        <mesh position={[0, 0.11, 0]} rotation={[-Math.PI / 2, 0, 0]}><ringGeometry args={[3.4, 3.9, 24]} /><meshStandardMaterial color="#e8f0f6" roughness={0.8} /></mesh>
        <mesh position={[0, 0.11, 0]}><boxGeometry args={[0.5, 0.02, 2.4]} /><meshStandardMaterial color="#e8f0f6" roughness={0.8} /></mesh>
        <mesh position={[-0.9, 0.11, 0]}><boxGeometry args={[0.5, 0.02, 2.4]} /><meshStandardMaterial color="#e8f0f6" roughness={0.8} /></mesh>
        <mesh position={[0.9, 0.11, 0]}><boxGeometry args={[0.5, 0.02, 2.4]} /><meshStandardMaterial color="#e8f0f6" roughness={0.8} /></mesh>
        <mesh position={[4.6, 1.1, 0]}><cylinderGeometry args={[0.04, 0.05, 2.2, 8]} /><meshStandardMaterial color="#8a939d" /></mesh>
        <mesh position={[4.9, 2.1, 0]} rotation={[0, 0, -Math.PI / 2]}><coneGeometry args={[0.18, 0.7, 8, 1, true]} /><meshStandardMaterial color="#e8722c" side={2} /></mesh>
      </group>
      {/* de zeppelin zelf */}
      <group ref={g}>
        <ZeppelinRomp doekTex={doekTex} />
        {/* 🎛️ De cockpit in de gondel (Mark 26 aug): stuurwiel dat meedraait,
            dashboard met "instrumenten", raamstijlen en een bankje — je ziet
            dit vanbinnen zodra je instapt (cockpit-camera). */}
        <group position={[1.2, -1.95, 0]}>
          {/* dashboard-console met twee gloeiende metertjes */}
          <mesh position={[0.82, 0.22, 0]} rotation={[0, 0, -0.35]}><boxGeometry args={[0.34, 0.3, 0.72]} /><meshStandardMaterial color="#222a33" roughness={0.6} /></mesh>
          <mesh position={[0.74, 0.36, -0.16]} rotation={[0, 0, Math.PI / 2 - 0.35]}><cylinderGeometry args={[0.06, 0.06, 0.03, 12]} /><meshStandardMaterial color="#7be08a" emissive="#2e9e4f" emissiveIntensity={0.8} /></mesh>
          <mesh position={[0.74, 0.36, 0.16]} rotation={[0, 0, Math.PI / 2 - 0.35]}><cylinderGeometry args={[0.06, 0.06, 0.03, 12]} /><meshStandardMaterial color="#7bc6ff" emissive="#3a6ad8" emissiveIntensity={0.8} /></mesh>
          {/* 🛞 stuurwiel op een kolom — draait mee met je besturing */}
          <mesh position={[0.5, 0.14, 0]} rotation={[0, 0, -0.5]}><cylinderGeometry args={[0.035, 0.045, 0.34, 8]} /><meshStandardMaterial color="#3a4754" /></mesh>
          <group position={[0.58, 0.34, 0]} rotation={[0, Math.PI / 2, 0]}>
            <group ref={stuurRef}>
              <mesh><torusGeometry args={[0.2, 0.028, 10, 20]} /><meshStandardMaterial color="#6a4a2a" roughness={0.5} /></mesh>
              {[0, Math.PI / 3, -Math.PI / 3].map((a, i) => (
                <mesh key={i} rotation={[0, 0, a]}><boxGeometry args={[0.035, 0.38, 0.03]} /><meshStandardMaterial color="#8a6a3a" /></mesh>
              ))}
              <mesh><sphereGeometry args={[0.045, 10, 8]} /><meshStandardMaterial color="#3a4754" /></mesh>
            </group>
          </group>
          {/* raamstijlen + dakrandje van de gondel */}
          {[[1.05, 0.38], [1.05, -0.38], [-1.05, 0.38], [-1.05, -0.38]].map(([x, z], i) => (
            <mesh key={`stijl${i}`} position={[x, 0.5, z]}><boxGeometry args={[0.07, 0.65, 0.07]} /><meshStandardMaterial color="#b9c2cb" roughness={0.5} /></mesh>
          ))}
          <mesh position={[0, 0.84, 0]}><boxGeometry args={[2.24, 0.06, 0.86]} /><meshStandardMaterial color="#b9c2cb" roughness={0.5} /></mesh>
          {/* bankje achterin + vloer */}
          <mesh position={[-0.7, 0.18, 0]}><boxGeometry args={[0.5, 0.14, 0.7]} /><meshStandardMaterial color="#8a5a3a" flatShading /></mesh>
          <mesh position={[0, 0.02, 0]}><boxGeometry args={[2.1, 0.04, 0.76]} /><meshStandardMaterial color="#4a5560" roughness={0.8} /></mesh>
        </group>
        {/* trapje + instap-knop, alleen als hij geland is. De knop zweeft hoog
            BOVEN de zeppelin — vanaf elke kant zichtbaar (26 aug: hij hing aan
            één kant van de gondel en was daardoor vaak onvindbaar). */}
        {ui === "geland" && (
          <>
            <mesh position={[1.2, -2.5, 0.9]} rotation={[0.6, 0, 0]}><boxGeometry args={[0.8, 0.08, 1.4]} /><meshStandardMaterial color="#8a5a3a" flatShading /></mesh>
            <mesh position={[1.2, -2.5, -0.9]} rotation={[-0.6, 0, 0]}><boxGeometry args={[0.8, 0.08, 1.4]} /><meshStandardMaterial color="#8a5a3a" flatShading /></mesh>
            <Html position={[0.8, 3.4, 0]} center distanceFactor={16} zIndexRange={[9, 0]}>
              <button onClick={stapIn} style={{ pointerEvents: "auto", border: "3px solid #fff", borderRadius: 999, padding: "12px 24px", font: "900 17px system-ui", color: "#fff", background: "linear-gradient(135deg,#3a6ad8,#2546b0)", boxShadow: "0 5px 18px rgba(0,0,0,.45)", cursor: "pointer", whiteSpace: "nowrap" }}>
                🛩️ Instappen
              </button>
            </Html>
          </>
        )}
        {/* 🎛️ Flight-Simulator-cockpit: overlay met meters + knoppen */}
        {ui === "bestuur" && (
          <Html fullscreen zIndexRange={[11, 0]} style={{ pointerEvents: "none" }}>
            <div style={{ position: "absolute", left: "50%", bottom: "calc(14px + env(safe-area-inset-bottom))", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 10, background: "linear-gradient(180deg,#2a3440,#1d252e)", border: "2px solid #46525f", borderRadius: 18, padding: "10px 14px", boxShadow: "0 10px 32px rgba(0,0,0,.45)", pointerEvents: "auto" }}>
              <div style={{ textAlign: "center", minWidth: 74 }}>
                <div style={{ font: "700 10px system-ui", color: "#8fa0b0", letterSpacing: 1 }}>HOOGTE</div>
                <div ref={hoogteDom} style={{ font: "900 17px ui-monospace, monospace", color: "#7be08a" }}>— m</div>
              </div>
              <div style={{ textAlign: "center", minWidth: 74 }}>
                <div style={{ font: "700 10px system-ui", color: "#8fa0b0", letterSpacing: 1 }}>SNELHEID</div>
                <div ref={vaartDom} style={{ font: "900 17px ui-monospace, monospace", color: "#7bc6ff" }}>— km/u</div>
              </div>
              <button style={knopStijl} onPointerDown={() => { klim.current = 1; }} onPointerUp={() => { klim.current = 0; }} onPointerLeave={() => { klim.current = 0; }}>⬆️<br /><span style={{ font: "700 9px system-ui" }}>omhoog</span></button>
              <button style={knopStijl} onPointerDown={() => { klim.current = -1; }} onPointerUp={() => { klim.current = 0; }} onPointerLeave={() => { klim.current = 0; }}>⬇️<br /><span style={{ font: "700 9px system-ui" }}>omlaag</span></button>
              <button style={knopStijl} onPointerDown={() => { terugKnop.current = true; }} onPointerUp={() => { terugKnop.current = false; }} onPointerLeave={() => { terugKnop.current = false; }}>◀️<br /><span style={{ font: "700 9px system-ui" }}>terug</span></button>
              <button onClick={land} style={{ ...knopStijl, background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)" }}>🛬<br /><span style={{ font: "700 9px system-ui" }}>landen</span></button>
              <div style={{ font: "700 10.5px/1.35 system-ui", color: "#8fa0b0", maxWidth: 110 }}>Joystick of pijltjes = sturen en gas geven</div>
            </div>
          </Html>
        )}
      </group>
    </group>
  );
}

// 🍟 Snack in je hand (Mark 26 aug: "een bakje friet in zijn hand, hij loopt
// ermee, wordt vanzelf kleiner en na ~30 s is het op — dat was lekker"). Een
// klein procedureel bakje/bekertje dat bij de rechterhand van het poppetje
// meeloopt; de INHOUD krimpt met de tijd (frietjes zakken het bakje in, het
// drinken raakt op, de ijsbol smelt). Bij op → onOp() (precies één keer).
// Puur refs in useFrame — geen re-renders tijdens het eten.
const EET_DUUR = 30; // seconden tot "dat was lekker"
function SnackInHand({ playerPos, playerFace, snack, verborgen, onOp }) {
  const groep = useRef();
  const inhoud = useRef();
  const start = useRef(null);
  const klaar = useRef(false);
  useEffect(() => { start.current = null; klaar.current = false; }, [snack]);
  useFrame((s) => {
    const g = groep.current;
    if (!g) return;
    const pos = playerPos?.current;
    if (!snack || verborgen || !pos) { g.visible = false; return; }
    g.visible = true;
    const nu = s.clock.elapsedTime;
    if (start.current == null) start.current = nu;
    const p = Math.min(1, (nu - start.current) / EET_DUUR);
    const fx = playerFace?.current?.x ?? 0, fz = playerFace?.current?.z ?? 1;
    const len = Math.hypot(fx, fz) || 1;
    const nx = fx / len, nz = fz / len;
    // rechterhand: iets opzij + iets naar voren, met een klein draag-wiebeltje
    g.position.set(pos.x + nz * 0.34 + nx * 0.2, pos.y + 0.72 + Math.sin(nu * 5) * 0.015, pos.z - nx * 0.34 + nz * 0.2);
    g.rotation.y = Math.atan2(nx, nz);
    if (inhoud.current) {
      const sc = Math.max(0.04, 1 - p);
      if (snack.vorm === "ijsje" || snack.vorm === "snack") inhoud.current.scale.set(sc, sc, sc);
      else inhoud.current.scale.set(1, sc, 1); // frietjes/drinken/popcorn zakken omlaag
    }
    if (p >= 1 && !klaar.current) { klaar.current = true; onOp && onOp(); }
  });
  if (!snack) return null;
  const vorm = snack.vorm || "friet";
  return (
    <group ref={groep} visible={false}>
      {vorm === "friet" && (
        <>
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.16, 0.1, 0.11]} />
            <meshStandardMaterial color="#d33a2f" />
          </mesh>
          <group ref={inhoud} position={[0, 0.1, 0]}>
            {[[-0.045, -0.9, 0], [-0.015, 0.7, 1], [0.02, -0.4, 2], [0.05, 1.1, 3], [0, 0.15, 4]].map(([x, z, i]) => (
              <mesh key={i} position={[x, 0.07, z * 0.03]} rotation={[z * 0.12, 0, (i - 2) * 0.1]}>
                <boxGeometry args={[0.024, 0.15, 0.024]} />
                <meshStandardMaterial color={i % 2 ? "#ffd45e" : "#f6c235"} />
              </mesh>
            ))}
          </group>
        </>
      )}
      {vorm === "drink" && (
        <>
          <mesh position={[0, 0.07, 0]}>
            <cylinderGeometry args={[0.05, 0.04, 0.14, 12]} />
            <meshStandardMaterial color="#f4f7fb" />
          </mesh>
          <group ref={inhoud} position={[0, 0.075, 0]}>
            <mesh>
              <cylinderGeometry args={[0.044, 0.036, 0.125, 12]} />
              <meshStandardMaterial color="#e2543e" />
            </mesh>
          </group>
          <mesh position={[0.02, 0.18, 0]} rotation={[0, 0, -0.25]}>
            <cylinderGeometry args={[0.006, 0.006, 0.12, 8]} />
            <meshStandardMaterial color="#fff" />
          </mesh>
        </>
      )}
      {vorm === "ijsje" && (
        <>
          <mesh position={[0, 0.07, 0]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.05, 0.13, 12]} />
            <meshStandardMaterial color="#d9a05b" />
          </mesh>
          <group ref={inhoud} position={[0, 0.15, 0]}>
            <mesh>
              <sphereGeometry args={[0.055, 12, 10]} />
              <meshStandardMaterial color="#ff9fb2" />
            </mesh>
          </group>
        </>
      )}
      {vorm === "popcorn" && (
        <>
          <mesh position={[0, 0.07, 0]}>
            <cylinderGeometry args={[0.055, 0.042, 0.13, 12]} />
            <meshStandardMaterial color="#e8e2d2" />
          </mesh>
          <group ref={inhoud} position={[0, 0.135, 0]}>
            {[[-0.02, 0, 0.015], [0.02, 0.012, -0.01], [0, 0.025, 0.02], [-0.01, 0.035, -0.02]].map(([x, y, z], i) => (
              <mesh key={i} position={[x, y, z]}>
                <sphereGeometry args={[0.02, 8, 6]} />
                <meshStandardMaterial color="#fff6e0" />
              </mesh>
            ))}
          </group>
        </>
      )}
      {vorm === "snack" && (
        <group ref={inhoud} position={[0, 0.08, 0]}>
          <mesh>
            <boxGeometry args={[0.14, 0.05, 0.09]} />
            <meshStandardMaterial color="#e0a35c" />
          </mesh>
          <mesh position={[0, 0.033, 0]}>
            <boxGeometry args={[0.13, 0.02, 0.085]} />
            <meshStandardMaterial color="#8a4b26" />
          </mesh>
          <mesh position={[0, 0.06, 0]}>
            <boxGeometry args={[0.14, 0.04, 0.09]} />
            <meshStandardMaterial color="#e8b06a" />
          </mesh>
        </group>
      )}
    </group>
  );
}

export default function ZooScene({ wandelToon = null, wandelDoel = null, onWandelBereikt = null, placingAsset = null, placingRot = 0, placedItems = [], onPlace, onPlaceBlok, onHakBlok, bouwCursorRef, bouwModus = false, rideIdx = null, zweef = false, onSelectPlaced, onClearSelection, onBuy, kramen = {}, onPickPart, onHouseParts, paintCursor = null, colorEditIdx = -1, followCam = false, terrain = null, onTerrainChange, sculptMode = false, sculptDir = 1, selectedIdx = null, moveIdx = -1, inputRef = null, parkNaam = "Mijn Park", waterMode = false, waterSeeds = [], onWater, ground = {}, groundMode = false, onGround, avatarUrl, firstPerson = false, spelerNaam = "", zwakVak = "", goedeScore = null, onTapBezoeker, rideTrain = false, buddyId = "", buddyGroei = 0, buddyNaam = "", onBuddyPraat, buddyEye = false, onTafereel, onLeermoment, onGidsMoment, spawn = null, onContextLost, onMaat, onOefenen, onNearPiramide, onPoortDoor, studiePiramideIdx = null, leerStappenPerPad = {}, dinoHint = null, climbRef = null, draagSnack = null, onSnackOp = null, onZeppelinRit = null }) {
  const [ghost, setGhost] = useState(null);
  const [zeppelinRit, setZeppelinRit] = useState(false); // 🛩️ aan boord van de instap-zeppelin
  const attractieZitje = useRef(new Vector3()); // wereldpos van je zitje in de attractie
  const playerPos = useRef(new Vector3());
  const playerLook = useRef(new Vector3()); // mikpunt voor de eerstepersoons-camera
  const playerFace = useRef(new Vector3(0, 0, 1)); // kijkrichting speler (derde-persoons-cam)
  const buddyPos = useRef(new Vector3());           // positie van het maatje (buddy-cam)
  const orbitRef = useRef();

  // 🧊 Kub-hulpjes — bewust hélemaal bovenaan (worden door bezet/ghost/isSolid
  // verderop gebruikt; const-volgorde telt).
  // Welke kub-lagen zijn per (kx,kz) bezet? (bouw-cursor: laagste vrije laag)
  const blokPerKub = useMemo(() => {
    const m = new Map();
    placedItems.forEach((it) => {
      if (!isBlok(it.assetId) || it.kx == null) return;
      const k = `${it.kx},${it.kz}`;
      if (!m.has(k)) m.set(k, new Set());
      m.get(k).add(it.kh || 0);
    });
    return m;
  }, [placedItems]);
  // Kubussen op loophoogte (laag 0-1) blokkeren de speler — per KUB-raster,
  // zodat je door een deuropening van 1 m gewoon naar binnen kunt.
  const kubVast = useMemo(() => {
    const s = new Set();
    placedItems.forEach((it) => {
      if (!isBlok(it.assetId) || it.kx == null) return;
      if ((it.kh || 0) <= 1) s.add(`${it.kx},${it.kz}`);
    });
    return s;
  }, [placedItems]);
  // Staat er ergens in deze cel(len) een kubus? (blokkeert gebouwen/hekken)
  const celHeeftKub = useCallback((gx, gz, cells = 1) => {
    for (const [cx, cz] of footprint(gx, gz, cells)) {
      const [wx, wz] = cellToWorld(cx, cz);
      for (const dx of [-1, 0]) {
        for (const dz of [-1, 0]) {
          if (blokPerKub.has(`${Math.floor(wx) + dx},${Math.floor(wz) + dz}`)) return true;
        }
      }
    }
    return false;
  }, [blokPerKub]);
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
  // Kubussen doen niet mee in het cel-raster (eigen fijne raster; celHeeftKub
  // bewaakt dat gebouwen niet óp kubussen landen).
  const plaatstBlok = isBlok(placingAsset);
  // useMemo (review 17 jul): deze twee liepen bij ÉLKE render van de game-HUD
  // opnieuw over alle items — met ~50 useState in ZookwartierGame is dat elke
  // menu-tik en praatwolk.
  const bezet = useMemo(() => {
    const blokkeert = (id) => !isBlok(id) && getAsset(id)?.procedural !== "path";
    return bezetteCellenVan(placedItems, moveIdx, cellsVan, blokkeert);
  }, [placedItems, moveIdx]);
  const ghostValid = ghost && isPlaatsbaar(ghost[0], ghost[1], bezet, placingCells) && !celHeeftKub(ghost[0], ghost[1], placingCells);

  // Aantal bezoekers schaalt mee met wat je park te bieden heeft.
  const trekpleisters = useMemo(() => placedItems.filter((it) => {
    const k = getAsset(it.assetId)?.kind;
    return k === "animal" || k === "building" || k === "attraction";
  }).length, [placedItems]);
  // Park-zwerm 17 jul: cap was 7 → het standaard-park zat al aan de cap en
  // bijbouwen leverde nooit méér publiek op. Nu groeit het publiek voelbaar
  // mee tot ~20 trekpleisters; op touch/low-end iets lager voor de framerate.
  const bezoekerCap = LOW_END ? 9 : 12;
  const bezoekers = Math.max(2, Math.min(bezoekerCap, Math.round(trekpleisters * 0.5) + 2));

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

  // 🚄 Verzamel rails/hekpanelen/padtegels voor de geïnstanceerde laag
  // (review 17 jul: van ~1.200 losse meshes naar 6 draw calls).
  const instancedProps = useMemo(() => {
    const rails = [], hekken = [], paden = [];
    for (const it of placedItems) {
      if (!it.cell || isBlok(it.assetId)) continue;
      const a = getAsset(it.assetId);
      if (!a) continue;
      if (a.procedural !== "rail" && a.procedural !== "fencePanel" && a.procedural !== "path") continue;
      const [x, z] = cellToWorld(it.cell[0], it.cell[1]);
      const y = heightFnRef.current(x, z);
      if (a.procedural === "rail") rails.push({ x, y, z, rot: it.rotation || 0 });
      else if (a.procedural === "fencePanel") hekken.push({ x, y, z, rot: it.rotation || 0 });
      else paden.push({ x, y, z, color: a.color });
    }
    return { rails, hekken, paden };
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
      if (!it.cell) return; // kubussen (kx/kz-raster) doen hier niet mee
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

  // 🌿 Pad-cellen: de gras-sprieten slaan deze over zodat er geen planten in
  // het looppad staan (Brian 20 aug). Sinds 23 aug (Mark: "een mooi rustig
  // pad") begint de set met het HÉLE gekleurde leerpad-lint (het hoofdpad),
  // niet alleen de losse neergelegde pad-tegels — anders poken er sprietjes
  // dwars door het lint heen.
  // 🛣️ Opritten-doelen: de ECHTE wereld-posities van de leer-objecten (Mark
  // 24 aug: "een oprit naar elk ding"). LEERTRAIL-id's zijn assetId's, dus we
  // lezen ze rechtstreeks uit placedItems — zo volgt de oprit het object ook
  // als een kind het verplaatst heeft.
  const opritDoelen = useMemo(() => {
    const ids = new Set(LEERTRAIL.map((t) => t.id));
    const gezien = new Set();
    const uit = [];
    placedItems.forEach((it) => {
      if (!it || !Array.isArray(it.cell)) return;
      if (!ids.has(it.assetId) || gezien.has(it.assetId)) return;
      gezien.add(it.assetId);
      uit.push({ id: it.assetId, x: it.cell[0] * CELL, z: it.cell[1] * CELL });
    });
    return uit;
  }, [placedItems]);

  const padCellen = useMemo(() => {
    const s = lintCellen(1);
    // gras ook weg onder de opritten + pleintjes (schoon asfalt naar elk object)
    for (const k of opritCellen(opritDoelen, 1)) s.add(k);
    placedItems.forEach((it) => {
      if (!it || !Array.isArray(it.cell)) return;
      const a = getAsset(it.assetId);
      if (a && a.procedural === "path") s.add(cellKey(it.cell[0], it.cell[1]));
    });
    return s;
  }, [placedItems, opritDoelen]);

  // 🚩 Wandel-stopdoelen (Brian 20 aug: "welk pad leidt naar de kubus?"):
  // per route de wereld-posities van zijn stop-objecten in DÍT park, zodat
  // WandelPreview er een stippen-zijspoor + vlaggetje naartoe kan tekenen.
  const wandelStopDoelen = useMemo(() => {
    const w = leesWandeling();
    const posities = new Map();
    placedItems.forEach((it) => {
      if (!it || !Array.isArray(it.cell)) return;
      if (!posities.has(it.assetId)) posities.set(it.assetId, { x: it.cell[0] * CELL, z: it.cell[1] * CELL });
    });
    const uit = {};
    for (const r of WANDEL_ROUTES) {
      const stops = w && w.routeId === r.id ? stopsVan(w) : r.stops;
      uit[r.id] = stops.map((s) => {
        const p = posities.get(s.moment);
        return p ? { ...p, emoji: s.emoji } : null;
      }).filter(Boolean);
    }
    return uit;
  }, [placedItems]);

  // Botsing: vakjes die "vast" zijn, zodat het poppetje er niet doorheen loopt.
  const vasteCellen = useMemo(() => {
    const s = new Set();
    placedItems.forEach((it) => {
      if (isBlok(it.assetId)) return; // kubussen blokkeren op hun eigen fijne raster (kubVast)
      if (!isVast(it.assetId)) return;
      // Blok-huizen zijn BEGAANBAAR: alleen de muur-rand blokkeert, en de
      // deur-cel (voorkant-midden, draait mee) blijft open → naar binnen lopen.
      if (/^house[A-H]$/.test(it.assetId) || /^huis(Rood|Blauw|Groen|Geel)$/.test(it.assetId)) {
        const hoek = it.rotation || 0;
        const deurKey = cellKey(it.cell[0] + Math.round(Math.sin(hoek)), it.cell[1] + Math.round(Math.cos(hoek)));
        for (const [cx, cz] of footprint(it.cell[0], it.cell[1], 3)) {
          if (cx === it.cell[0] && cz === it.cell[1]) continue; // binnen = vrij
          const k = cellKey(cx, cz);
          if (k !== deurKey) s.add(k);
        }
        return;
      }
      // 🚪 Poorten zijn de DOORGANG naar de dieren (Mark 2 jul: "door de ingang
      // van een hek naar de dieren") — nooit blokkeren.
      if (it.assetId === "hekPoort" || it.assetId === "fenceGate") return;
      // botsCellsVan i.p.v. cellsVan: de grote leerobjecten reserveren bij plaatsing
      // veel ruimte, maar botsen op hun kleine échte body (Mark 17 aug: niet krap).
      for (const [cx, cz] of footprint(it.cell[0], it.cell[1], botsCellsVan(it.assetId))) s.add(cellKey(cx, cz));
    });
    return s;
  }, [placedItems]);
  const isSolid = useCallback((x, z) => {
    if (kubVast.has(`${Math.floor(x)},${Math.floor(z)}`)) return true;
    const [gx, gz] = snapToCell(x, z, 1);
    return vasteCellen.has(cellKey(gx, gz));
  }, [vasteCellen, kubVast]);

  // 🚂 Bots-variant (Brian 20 aug: bezoekers liepen in een rij óver de rails):
  // voor bezoekers telt het spoor wél als muur — ze glijden er langs (de
  // botsings-logica glijdt langs muren) maar gaan er niet op wandelen. Alleen
  // de speler mag oversteken (rails beloopbaar sinds v377, wandelroute).
  const railCellen = useMemo(() => {
    const s = new Set();
    placedItems.forEach((it) => {
      if (it && it.assetId === "rail" && Array.isArray(it.cell)) s.add(cellKey(it.cell[0], it.cell[1]));
    });
    return s;
  }, [placedItems]);
  const isSolidBots = useCallback((x, z) => {
    if (isSolid(x, z)) return true;
    const [gx, gz] = snapToCell(x, z, 1);
    return railCellen.has(cellKey(gx, gz));
  }, [isSolid, railCellen]);

  // Voor de camera telt HOOGTE mee: over lage hekjes/bankjes kijkt de camera
  // gewoon heen; alleen hoge dingen (gebouwen, attracties) duwen de arm korter.
  // Bomen blokkeren de camera bewust niet — anders springt het beeld constant.
  const vasteToppen = useMemo(() => {
    const m = new Map();
    placedItems.forEach((it) => {
      // Kubussen: camera-hoogte per park-vakje waar de kubus in valt.
      if (isBlok(it.assetId)) {
        if (it.kx == null) return;
        const [gx, gz] = snapToCell(it.kx * KUB + KUB / 2, it.kz * KUB + KUB / 2, 1);
        const k = cellKey(gx, gz);
        m.set(k, Math.max(m.get(k) || 0, ((it.kh || 0) + 1) * KUB + 0.2));
        return;
      }
      if (!isVast(it.assetId)) return;
      const a = getAsset(it.assetId);
      // camTop: expliciete camera-hoogte voor grote objecten (Mark 17 aug) — de
      // 3× piramide is 17 m hoog; met de standaard-3,6 klipte de camera dwars
      // erdoorheen bij het ronddraaien (flikkeren/"draaien"). Nu duwt hij de arm.
      const top = a.camTop != null ? a.camTop
        : a.kind === "building" ? 3.4
        : a.kind === "attraction" ? 3.6
        : ["tree", "bush", "fern", "stump"].includes(a.procedural) ? 0
        : 1.25;
      if (!top) return;
      for (const [cx, cz] of footprint(it.cell[0], it.cell[1], botsCellsVan(it.assetId))) {
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

  const handlePlace = (cell, punt) => {
    if (!onPlace) return;
    // Kubussen: eigen fijne raster + eigen checks in de parent — geef het
    // precieze klikpunt mee zodat de kubus op de juiste meter landt.
    if (plaatstBlok) { onPlace(cell, punt); return; }
    if (!isPlaatsbaar(cell[0], cell[1], bezet, placingCells)) return;
    if (celHeeftKub(cell[0], cell[1], placingCells)) return;
    onPlace(cell, punt);
  };

  return (
    <Canvas
      shadows={!LOW_END}
      dpr={LOW_END ? 1 : [1, 2]}
      performance={{ min: 0.55 }}
      camera={{ position: [40, 30, 54], fov: 42, near: 0.1, far: 600 }}
      style={{ width: "100%", height: "100%", display: "block", touchAction: "none", cursor: paintCursor || "default" }}
      onCreated={({ gl }) => {
        // Context-loss (veel op goedkope Androids onder geheugendruk): zonder
        // handler bevriest het canvas stil zwart. preventDefault + melding →
        // ZookwartierGame biedt een nette herlaad-knop aan.
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          try { onContextLost && onContextLost(); } catch { /* nooit de render breken */ }
        });
      }}
    >
      {/* Tijdens lopen/camera-draaien tijdelijk lagere resolutie → hoge FPS op
          zwakke hardware; staat de speler stil, dan weer scherp. */}
      <AdaptiveDpr />
      <color attach="background" args={["#aaddff"]} />
      <fog attach="fog" args={["#aaddff", 150, 290]} />

      {/* Dag-nacht-cyclus stuurt zon, omgevingslicht en luchtkleur. */}
      <DayNight />
      {/* Drijvende wolken + rondcirkelende vogeltjes vullen de lucht. */}
      <SkyClouds />
      {/* 🛩️ Witte zeppelins hoog boven het park — later reclame-doek voor partners. */}
      <Zeppelins />

      <Suspense fallback={<Laden />}>
        <Terrain field={terrain} ground={ground} placing={placing} cells={placingCells} sculpt={sculptMode} water={waterMode} paintGround={groundMode} onHover={setGhost} onPlace={handlePlace} onMissTap={onClearSelection} onSculpt={onSculpt} onWater={onWater} onGround={onGround} />
        {!LOW_END && <GrasSprieten field={terrain} ground={ground} padCellen={padCellen} />}
        <WaterPools cells={water.pools} />
        <WaterStreams paths={water.streams} terrain={terrain} />
        <ParkBase />
        {/* De wereld buiten het hek: grasvlakte, blok-heuvels, bos, bergen,
            meertje en het weggetje met bushalte — geen "einde van de wereld". */}
        <Buitenwereld />
        {/* 🚶 Wandelroute (Mark-go 20 aug "bouw maar in de echte app"): de
            voetstappen staan altijd aan; de gele bouwbordjes alleen met ?wandel=1. */}
        {/* 🎓 Het doorlopende leerpad-lint = het hoofdpad van het park (Mark 22
            aug): geel → groen → blauw, de schoolreis van tellen tot parabolen. */}
        <Leerpadlint heightRef={heightFnRef} />
        {/* 🛣️ Opritten: smalle zwarte asfalt-inritten van de hoofdweg naar elk
            leer-object, met een rond pleintje ervoor (Mark 24 aug: "zodat je
            overal kunt komen"). Volgt de echte plek van elk object. */}
        <Opritten heightRef={heightFnRef} doelen={opritDoelen} />
        <WandelPreview heightRef={heightFnRef} borden={wandelPreviewActief()} toon={wandelToon} stopDoelen={wandelStopDoelen} />
        <WandelStopWachter doel={wandelDoel} playerPos={playerPos} onBereikt={onWandelBereikt} />
        {/* 🧙 Uitvinders-kabouters: leerzame diorama's langs de ingangslaan
            (Newton-appelboom, piramidebouw, bliksemkooi) — tik = praatje + leer-link. */}
        <UitvindersTaferelen heightRef={heightFnRef} onTafereel={onTafereel} actief={!placingAsset && !sculptMode && !waterMode && !groundMode} />
        {/* Ingang-poort + gele/blauwe "Kies je kant"-wegwijzer verwijderd (Mark
            23 aug: "het begin is veel te druk"). De entree is nu rustig. */}
        {/* Toegangslaan naar het starter-plein — nu zwart asfalt (Mark 23 aug:
            "in het echt is de weg zwart"). Coördinaten ×2 mee-geschaald met de
            ruimte-verdubbeling van het park. */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 112]}>
          <planeGeometry args={[12, 84]} />
          <meshStandardMaterial color="#26262b" roughness={0.95} />
        </mesh>
        {/* Vrolijke ballontros aan de voorrand. */}
        <Balloons position={[10.8, heightFnRef.current(10.8, GRID_SIZE / 2 - 6), GRID_SIZE / 2 - 6]} />
        {/* Spawn op het starter-plein (z≈64, bij de start van het leerpad-lint),
            niet aan de verre rand — anders begint elke speler in niemandsland. */}
        {/* Tijdens een attractie-rit is je poppetje "ingestapt" → verborgen. */}
        <Player inputRef={inputRef} start={spawn || [0, 0, 64]} isSolid={isSolid} posRef={playerPos} heightRef={heightFnRef} avatarUrl={avatarUrl} firstPerson={firstPerson} lookRef={playerLook} faceRef={playerFace} bouwt={plaatstBlok || bouwModus} verborgen={rideIdx != null || rideTrain || zeppelinRit} zweef={zweef} climbRef={climbRef} />
        {/* 🍟 Je gekochte snack loopt mee in je hand en gaat vanzelf op. */}
        {draagSnack && <SnackInHand playerPos={playerPos} playerFace={playerFace} snack={draagSnack} verborgen={rideIdx != null || rideTrain || zeppelinRit} onOp={onSnackOp} />}
        {/* Standaard: spring-arm achter de speler — zelf draaien/zoomen, botst nergens doorheen. */}
        <SpringArmCamera posRef={playerPos} inputRef={inputRef} topAt={camTopAt} heightRef={heightFnRef} active={!firstPerson && !buddyEye && !rideTrain && !followCam && rideIdx == null} />
        {/* 🎠 In een attractie: camera draait mee op het zitje. */}
        <AttractieCamera
          actief={rideIdx != null && placedItems[rideIdx] != null}
          posRef={attractieZitje}
          centrum={rideIdx != null && placedItems[rideIdx] ? (() => { const [ax, az] = cellToWorld(placedItems[rideIdx].cell[0], placedItems[rideIdx].cell[1]); return [ax, 0, az]; })() : null}
        />
        <CameraFollow posRef={playerPos} controlsRef={orbitRef} active={followCam && !firstPerson && !buddyEye} />
        <FirstPersonCamera posRef={playerPos} lookRef={playerLook} active={firstPerson} />
        <BuddyEyeCamera buddyPosRef={buddyPos} playerPosRef={playerPos} active={buddyEye && !firstPerson && !!buddyId} />
        {/* Droom-maatje dat met je meeloopt en praat (verborgen in eerstepersoons;
            in buddy-cam blijft het vliegen maar onzichtbaar zodat de camera vrij kijkt). */}
        {buddyId && !firstPerson && rideIdx == null && (
          <Suspense fallback={null}>
            <Buddy kind={buddyId} posRef={playerPos} faceRef={playerFace} heightRef={heightFnRef} factsRef={factsRef} groei={buddyGroei} buddyNaam={buddyNaam} onPraat={onBuddyPraat} posOutRef={buddyPos} verborgen={buddyEye} />
          </Suspense>
        )}
        {railRoute && <RouteTrain route={railRoute} headRef={trainHeadRef} wagons={3} onLeermoment={onLeermoment} />}
        <RideCamera headRef={trainHeadRef} active={rideTrain && !!railRoute && !firstPerson} />
        {/* 🚀 Raket-volg-camera: tijdens een lancering kijkt de camera automatisch
            met de raket mee omhoog (Mark 26 aug: "ik kan hem niet nakijken omdat
            het hoofd niet verder omhoog gaat"). NÁ de andere camera's gemount,
            zodat zijn useFrame als laatste schrijft en dus wint zolang de vlucht
            bezig is; daarna neemt de gewone camera het meteen weer over. */}
        <RaketVolgCamera />
        {/* 🛩️ De bestuurbare Leerkwartier-zeppelin + landingsveld. NÁ de andere
            camera's gemount: tijdens de vlucht wint zijn cockpit-camera. */}
        <InstapZeppelin inputRef={inputRef} onRit={(v) => { setZeppelinRit(v); if (onZeppelinRit) onZeppelinRit(v); }} heightRef={heightFnRef} />
        {/* 🔊 Rondloop-gids: ~2 s bij een benoembaar object blijven kijken →
            het maatje vertelt er ongevraagd (hardop) over. Uit tijdens bouwen. */}
        <GidsWatcher playerPos={playerPos} playerFace={playerFace} placedItems={placedItems} trainHeadRef={trainHeadRef} actief={!bouwModus && !placingAsset && !sculptMode && !waterMode && !groundMode && !zeppelinRit} onGids={onGidsMoment} />
        <NabijPiramideWatcher playerPos={playerPos} playerFace={playerFace} placedItems={placedItems} onNear={placingAsset ? undefined : onNearPiramide} />
        <PoortWatcher playerPos={playerPos} placedItems={placedItems} actief={!bouwModus && !placingAsset && !sculptMode && !waterMode && !groundMode && rideIdx == null && !rideTrain && !zeppelinRit} onDoor={onPoortDoor} />
        <Visitors count={bezoekers} standsRef={standsRef} kraamRef={kraamRef} onBuy={onBuy} heightRef={heightFnRef} playerRef={playerPos} factsRef={factsRef} onTap={onTapBezoeker} isSolid={isSolidBots} padsRef={padsRef} dierenRef={dierenRef} pretRef={pretRef} bankjesRef={bankjesRef} />

        {placing && (
          <gridHelper args={[GRID_SIZE, GRID_DIV, "#3f6b2a", "#6fa34a"]} position={[0, 0.02, 0]} />
        )}

        {/* 🎯 Richt-blok: wijst aan waar het volgende blok komt (vakje vóór je). */}
        <BouwCursor
          actief={plaatstBlok}
          playerPos={playerPos}
          playerFace={playerFace}
          heightFn={heightFnRef.current}
          blokPerKub={blokPerKub}
          cursorRef={bouwCursorRef}
          kleur={getAsset(placingAsset)?.blokKleur || "#ffffff"}
        />

        {/* 🧱 Alle bouwblokken samen (instanced) + Minecraft-vlak-plaatsing. */}
        <BlokkenLaag
          items={placedItems}
          terrain={terrain}
          heightFn={heightFnRef.current}
          placingBlok={plaatstBlok}
          modusBezig={(!!placingAsset && !plaatstBlok) || sculptMode || waterMode || groundMode}
          onFacePlace={(doel) => { onPlaceBlok && onPlaceBlok(doel); }}
          onHak={(k) => { onHakBlok && onHakBlok(k); }}
        />

        {/* 🚄 Alle rails + hekpanelen + padtegels in 6 instanced draw calls. */}
        <GeinstanceerdeParkProps rails={instancedProps.rails} hekken={instancedProps.hekken} paden={instancedProps.paden} />

        {/* Geplaatste items — klikbaar om te selecteren. */}
        {placedItems.map((it, idx) => {
          if (isBlok(it.assetId)) return null; // kubussen: BlokkenLaag rendert, ⛏️ hakt
          const [x, z] = cellToWorld(it.cell[0], it.cell[1]);
          const y = heightFnRef.current(x, z);
          // 🦕 Dino-bord (park-megabuild #3): live "volgende dino"-bord op de
          // groeiplek — leest de actuele hint i.p.v. statische bord-tekst.
          if (it.assetId === "bordDino") {
            return (
              <group key={`${cellKey(it.cell[0], it.cell[1])}-${idx}`}>
                <DinoBord position={[x, y, z]} rotation={it.rotation || 0} hint={dinoHint} />
              </group>
            );
          }
          return (
            <group
              key={`${cellKey(it.cell[0], it.cell[1])}-${idx}`}
              onPointerDown={(e) => {
                if (placing || sculptMode || waterMode || groundMode) return;
                e.stopPropagation();
              }}
              onClick={(e) => { if (placing || sculptMode || waterMode || groundMode) return; if (e.delta > 8) return; e.stopPropagation(); onSelectPlaced && onSelectPlaced(idx); }}
            >
              {selectedIdx === idx && <SelectieRing cell={it.cell} cells={botsCellsVan(it.assetId)} />}
              {/* Eigen Suspense per item (park-zwerm 17 jul): één suspendend
                  GLB-dier klapte anders de HELE scene terug naar het laad-
                  scherm — precies bij de eerste dier-aankoop (React 18).
                  Nu poppen items los in en blijft het park altijd staan. */}
              <Suspense fallback={null}>
                <PlacedItem
                  assetId={it.assetId} x={x} z={z} y={y} rotation={it.rotation || 0} babies={it.babies || 0} h={it.h || 0} maat={it.maat}
                  onMaat={isManipuleerbaar(it.assetId) && onMaat ? (d) => onMaat(idx, d) : undefined}
                  onOefenen={isManipuleerbaar(it.assetId) ? onOefenen : undefined}
                  studie={it.assetId === "piramide" && idx === studiePiramideIdx}
                  // 🥇 Goud-doel: hoeveel inhoud-stappen heb je → is deze vorm goud
                  // (of hoeveel lesjes nog)? Elke vorm z'n eigen drempel.
                  goud={(() => { const gc = goudConfig(it.assetId); return gc ? (leerStappenPerPad[gc.pad] || 0) >= gc.drempel : false; })()}
                  goudRest={(() => { const gc = goudConfig(it.assetId); return gc ? Math.max(0, gc.drempel - (leerStappenPerPad[gc.pad] || 0)) : 0; })()}
                  rideRef={idx === rideIdx ? attractieZitje : undefined}
                  colors={it.colors} colorEditable={colorEditIdx === idx}
                  // Alleen doorgeven bij het item dat écht bewerkt wordt — een
                  // verse inline-functie voor álle items zou React.memo breken.
                  onPickPart={colorEditIdx === idx && onPickPart ? (grp) => onPickPart(idx, grp) : undefined}
                  onParts={colorEditIdx === idx ? onHouseParts : undefined}
                  mood={(it.fed && dagenVerschil(it.fed) < 2) ? "blij" : "honger"}
                  verstopt={!!it.verstopt}
                  kraam={kramen[getAsset(it.assetId)?.voorziet]}
                />
              </Suspense>
            </group>
          );
        })}

        {/* Ghost-preview tijdens plaatsen (niet voor kubussen — daar is de cursor). */}
        {placing && !plaatstBlok && ghost && (
          <>
            <FootprintMarker cell={ghost} valid={ghostValid} cells={placingCells} />
            <Suspense fallback={null}>
              <PlacedItem assetId={placingAsset} x={cellToWorld(ghost[0], ghost[1])[0]} z={cellToWorld(ghost[0], ghost[1])[1]} y={heightFnRef.current(cellToWorld(ghost[0], ghost[1])[0], cellToWorld(ghost[0], ghost[1])[1])} rotation={placingRot} visueel />
            </Suspense>
          </>
        )}

        {/* frames={1}: één keer bakken i.p.v. elke frame een extra depth-pass
            over alle meshes (12-agent-review: grootste GPU-kostenpost). */}
        <ContactShadows frames={1} position={[0, 0.012, 0]} opacity={0.4} scale={GRID_SIZE + 14} blur={2.8} far={8} resolution={1024} color="#274015" />
      </Suspense>

      {followCam && !firstPerson && !buddyEye && !rideTrain && (
        <OrbitControls
          ref={orbitRef}
          makeDefault
          enableDamping
          dampingFactor={0.08}
          minDistance={6}
          maxDistance={240}
          maxPolarAngle={Math.PI / 2 - 0.05}
          target={[0, 0.8, 0]}
          enablePan={false}
        />
      )}
    </Canvas>
  );
}
