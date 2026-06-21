// ZooScene — de 3D-canvas van Mijn Park: camera, belichting, schaduw,
// grasgrond, orbit-besturing + het bestuurbare poppetje. Álles in het park
// (draaimolen, paden, hekken, gebouwen, dier-verblijven) is een plaatsbaar/
// weghaalbaar item dat op het raster snapt. Footprint per item (decor 1×1).
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Html } from "@react-three/drei";
import { ParkBase, Enclosure, Player, Carousel, PathTile } from "./ParkProps";
import ZooModel from "./ZooModel";
import { getAsset, cellsVan } from "./AssetRegistry";
import {
  CELL, GRID_SIZE, GRID_DIV, ENCLOSURE_SIZE, snapToCell, cellToWorld, cellKey,
  isPlaatsbaar, bezetteCellenVan,
} from "./grid";

// Eén geplaatst item, gerenderd op basis van zijn soort.
function PlacedItem({ assetId, x, z, rotation = 0, babies = 0 }) {
  const a = getAsset(assetId);
  if (!a) return null;
  if (a.kind === "animal") return <Enclosure position={[x, 0, z]} size={ENCLOSURE_SIZE} assetId={assetId} babies={babies} />;
  if (a.procedural === "carousel") return <Carousel position={[x, 0, z]} />;
  if (a.procedural === "path") return <PathTile position={[x, 0, z]} />;
  return <ZooModel assetId={assetId} position={[x, 0, z]} rotation={rotation} />;
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

export default function ZooScene({ placingAsset = null, placingRot = 0, placedItems = [], onPlace, onSelectPlaced, onClearSelection, selectedIdx = null, moveIdx = -1, inputRef = null }) {
  const [ghost, setGhost] = useState(null);
  const placing = !!placingAsset;
  const placingCells = placing ? cellsVan(placingAsset) : 3;

  const bezet = bezetteCellenVan(placedItems, moveIdx, cellsVan);
  const ghostValid = ghost && isPlaatsbaar(ghost[0], ghost[1], bezet, placingCells);

  const handlePlace = (cell) => {
    if (!onPlace) return;
    if (!isPlaatsbaar(cell[0], cell[1], bezet, placingCells)) return;
    onPlace(cell);
  };

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [16, 12, 22], fov: 42, near: 0.1, far: 120 }}
      style={{ width: "100%", height: "100%", display: "block", touchAction: "none" }}
    >
      <color attach="background" args={["#aaddff"]} />
      <fog attach="fog" args={["#aaddff", 34, 78]} />

      <ambientLight intensity={0.55} />
      <hemisphereLight args={["#eaf6ff", "#6f9a4a", 0.6]} />
      <directionalLight
        castShadow
        position={[12, 16, 9]}
        intensity={1.2}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={1}
        shadow-camera-far={64}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-bias={-0.0004}
      />

      <Suspense fallback={<Laden />}>
        <GrasGrond placing={placing} cells={placingCells} onHover={setGhost} onPlace={handlePlace} onMissTap={onClearSelection} />
        <ParkBase />
        <Player inputRef={inputRef} />

        {placing && (
          <gridHelper args={[GRID_SIZE, GRID_DIV, "#3f6b2a", "#6fa34a"]} position={[0, 0.02, 0]} />
        )}

        {/* Geplaatste items — klikbaar om te selecteren. */}
        {placedItems.map((it, idx) => {
          const [x, z] = cellToWorld(it.cell[0], it.cell[1]);
          return (
            <group
              key={`${cellKey(it.cell[0], it.cell[1])}-${idx}`}
              onPointerDown={(e) => { if (placing) return; e.stopPropagation(); onSelectPlaced && onSelectPlaced(idx); }}
            >
              {selectedIdx === idx && <SelectieRing cell={it.cell} cells={cellsVan(it.assetId)} />}
              <PlacedItem assetId={it.assetId} x={x} z={z} rotation={it.rotation || 0} babies={it.babies || 0} />
            </group>
          );
        })}

        {/* Ghost-preview tijdens plaatsen. */}
        {placing && ghost && (
          <>
            <FootprintMarker cell={ghost} valid={ghostValid} cells={placingCells} />
            <PlacedItem assetId={placingAsset} x={cellToWorld(ghost[0], ghost[1])[0]} z={cellToWorld(ghost[0], ghost[1])[1]} rotation={placingRot} />
          </>
        )}

        <ContactShadows position={[0, 0.012, 0]} opacity={0.4} scale={GRID_SIZE + 14} blur={2.8} far={8} resolution={1024} color="#274015" />
      </Suspense>

      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        minDistance={6}
        maxDistance={34}
        maxPolarAngle={Math.PI / 2 - 0.05}
        target={[0, 0.8, 0]}
        enablePan={false}
      />
    </Canvas>
  );
}
