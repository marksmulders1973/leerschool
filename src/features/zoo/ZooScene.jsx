// ZooScene — de 3D-canvas van Mijn Park: camera, belichting, schaduw,
// grasgrond, orbit-besturing + het bestuurbare poppetje. Álles in het park
// (draaimolen, paden, hekken, gebouwen, dier-verblijven) is een plaatsbaar/
// weghaalbaar item dat op het raster snapt. Footprint per item (decor 1×1).
import { Suspense, useState, useMemo, useCallback, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Html } from "@react-three/drei";
import { Vector3, PlaneGeometry } from "three";
import { ParkBase, LosDier, Player, Carousel, PathTile, Visitors, HillMound, PatatKraam, DrankKraam, IJsKraam, PopcornKraam, FencePanel, FenceGate, FenceCorner, EntranceGate, DayNight, CameraFollow } from "./ParkProps";
import ZooModel from "./ZooModel";
import HouseModel from "./HouseModel";
import { getAsset, cellsVan } from "./AssetRegistry";
import { heightAt, applyBrush, flatField, TER_SIZE, TER_SEG } from "./terrain";
import { useEffect } from "react";
import {
  CELL, GRID_SIZE, GRID_DIV, snapToCell, cellToWorld, cellKey,
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

// Eén geplaatst item, gerenderd op basis van zijn soort. y = terreinhoogte.
function PlacedItem({ assetId, x, z, y = 0, rotation = 0, babies = 0, colors, colorEditable = false, onPickPart, onParts }) {
  const a = getAsset(assetId);
  if (!a) return null;
  if (a.kind === "animal") return <LosDier position={[x, y, z]} assetId={assetId} babies={babies} />;
  if (a.procedural === "carousel") return <Carousel position={[x, y, z]} />;
  if (a.procedural === "path") return <PathTile position={[x, y, z]} color={a.color} />;
  if (a.procedural === "hill") return <HillMound position={[x, y, z]} size={a.hillSize} color={a.color} />;
  if (a.procedural === "fencePanel") return <FencePanel position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "fenceCorner") return <FenceCorner position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "fenceGate") return <FenceGate position={[x, y, z]} rotation={rotation} />;
  if (a.procedural === "patatkraam") return <PatatKraam position={[x, y, z]} />;
  if (a.procedural === "drankkraam") return <DrankKraam position={[x, y, z]} />;
  if (a.procedural === "ijscokraam") return <IJsKraam position={[x, y, z]} />;
  if (a.procedural === "popcornkraam") return <PopcornKraam position={[x, y, z]} />;
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

// De parkvloer als boetseerbaar terrein (volgt het hoogteveld).
function Terrain({ field, placing, cells, sculpt, onHover, onPlace, onMissTap, onSculpt }) {
  const geom = useMemo(() => {
    const g = new PlaneGeometry(TER_SIZE, TER_SIZE, TER_SEG, TER_SEG);
    const pos = g.attributes.position;
    for (let k = 0; k < pos.count; k++) {
      pos.setZ(k, heightAt(field, pos.getX(k), -pos.getY(k)));
    }
    pos.needsUpdate = true;
    g.computeVertexNormals();
    return g;
  }, [field]);
  useEffect(() => () => geom.dispose(), [geom]);
  return (
    <mesh
      geometry={geom}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
      onPointerMove={(e) => { if (!placing) return; e.stopPropagation(); onHover(snapToCell(e.point.x, e.point.z, cells)); }}
      onPointerDown={(e) => { e.stopPropagation(); if (sculpt) onSculpt(e.point.x, e.point.z); else if (placing) onPlace(snapToCell(e.point.x, e.point.z, cells)); else onMissTap && onMissTap(); }}
    >
      <meshStandardMaterial color="#86c05a" roughness={1} metalness={0} />
    </mesh>
  );
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

export default function ZooScene({ placingAsset = null, placingRot = 0, placedItems = [], onPlace, onSelectPlaced, onClearSelection, onBuy, prices = { food: 5, drink: 4, ice: 4, popcorn: 4 }, onPickPart, onHouseParts, paintCursor = null, colorEditIdx = -1, followCam = false, terrain = null, onTerrainChange, sculptMode = false, sculptDir = 1, selectedIdx = null, moveIdx = -1, inputRef = null, parkNaam = "Mijn Park" }) {
  const [ghost, setGhost] = useState(null);
  const playerPos = useRef(new Vector3());
  const orbitRef = useRef();
  // Hoogte-functie die altijd het laatste terrein leest (geen re-subscribe in loops).
  const heightFnRef = useRef(() => 0);
  heightFnRef.current = (x, z) => heightAt(terrain, x, z);
  const onSculpt = (x, z) => { if (onTerrainChange) onTerrainChange(applyBrush(terrain || flatField(), x, z, sculptDir * 0.6)); };
  const placing = !!placingAsset;
  const placingCells = placing ? cellsVan(placingAsset) : 3;

  const bezet = bezetteCellenVan(placedItems, moveIdx, cellsVan);
  const ghostValid = ghost && isPlaatsbaar(ghost[0], ghost[1], bezet, placingCells);

  // Aantal bezoekers schaalt mee met wat je park te bieden heeft.
  const trekpleisters = placedItems.filter((it) => {
    const k = getAsset(it.assetId)?.kind;
    return k === "animal" || k === "building" || k === "attraction";
  }).length;
  const bezoekers = Math.max(2, Math.min(14, Math.round(trekpleisters * 1.3) + 2));

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
  // Prijzen die de speler instelt — via ref zodat de loop altijd de laatste leest.
  const pricesRef = useRef(prices);
  pricesRef.current = prices;

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

  const handlePlace = (cell) => {
    if (!onPlace) return;
    if (!isPlaatsbaar(cell[0], cell[1], bezet, placingCells)) return;
    onPlace(cell);
  };

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [40, 30, 54], fov: 42, near: 0.1, far: 300 }}
      style={{ width: "100%", height: "100%", display: "block", touchAction: "none", cursor: paintCursor || "default" }}
    >
      <color attach="background" args={["#aaddff"]} />
      <fog attach="fog" args={["#aaddff", 110, 250]} />

      {/* Dag-nacht-cyclus stuurt zon, omgevingslicht en luchtkleur. */}
      <DayNight />

      <Suspense fallback={<Laden />}>
        <Terrain field={terrain} placing={placing} cells={placingCells} sculpt={sculptMode} onHover={setGhost} onPlace={handlePlace} onMissTap={onClearSelection} onSculpt={onSculpt} />
        <ParkBase />
        {/* Vaste ingang-poort met de parknaam, aan de voorrand van het park. */}
        <EntranceGate name={parkNaam} position={[0, heightAt(terrain, 0, GRID_SIZE / 2 - 3), GRID_SIZE / 2 - 3]} rotation={0} />
        <Player inputRef={inputRef} start={[0, 0, GRID_SIZE / 2 - 5]} isSolid={isSolid} posRef={playerPos} heightRef={heightFnRef} />
        <CameraFollow posRef={playerPos} controlsRef={orbitRef} active={followCam} />
        <Visitors count={bezoekers} standsRef={standsRef} pricesRef={pricesRef} onBuy={onBuy} heightRef={heightFnRef} playerRef={playerPos} />

        {placing && (
          <gridHelper args={[GRID_SIZE, GRID_DIV, "#3f6b2a", "#6fa34a"]} position={[0, 0.02, 0]} />
        )}

        {/* Geplaatste items — klikbaar om te selecteren. */}
        {placedItems.map((it, idx) => {
          const [x, z] = cellToWorld(it.cell[0], it.cell[1]);
          const y = heightAt(terrain, x, z);
          return (
            <group
              key={`${cellKey(it.cell[0], it.cell[1])}-${idx}`}
              onPointerDown={(e) => { if (placing || sculptMode) return; e.stopPropagation(); onSelectPlaced && onSelectPlaced(idx); }}
            >
              {selectedIdx === idx && <SelectieRing cell={it.cell} cells={cellsVan(it.assetId)} />}
              <PlacedItem
                assetId={it.assetId} x={x} z={z} y={y} rotation={it.rotation || 0} babies={it.babies || 0}
                colors={it.colors} colorEditable={colorEditIdx === idx}
                onPickPart={(grp) => onPickPart && onPickPart(idx, grp)}
                onParts={onHouseParts}
              />
            </group>
          );
        })}

        {/* Ghost-preview tijdens plaatsen. */}
        {placing && ghost && (
          <>
            <FootprintMarker cell={ghost} valid={ghostValid} cells={placingCells} />
            <PlacedItem assetId={placingAsset} x={cellToWorld(ghost[0], ghost[1])[0]} z={cellToWorld(ghost[0], ghost[1])[1]} y={heightAt(terrain, cellToWorld(ghost[0], ghost[1])[0], cellToWorld(ghost[0], ghost[1])[1])} rotation={placingRot} />
          </>
        )}

        <ContactShadows position={[0, 0.012, 0]} opacity={0.4} scale={GRID_SIZE + 14} blur={2.8} far={8} resolution={1024} color="#274015" />
      </Suspense>

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
    </Canvas>
  );
}
