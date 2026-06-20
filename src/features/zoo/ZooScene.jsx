// ZooScene — de 3D-canvas van Mijn Park: camera, belichting, schaduw,
// grasgrond, vast mini-park (paden/draaimolen/poppetje/verblijven), raster en
// orbit-besturing. Plaatsen op grid + geplaatste dieren selecteren (verplaatsen/
// weghalen).
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Html } from "@react-three/drei";
import ZooModel from "./ZooModel";
import { ParkBase } from "./ParkProps";
import { CELL, GRID_SIZE, GRID_DIV, snapToCell, cellToWorld, cellKey } from "./grid";

function GrasGrond({ placing, onHover, onPlace, onMissTap }) {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
      receiveShadow
      onPointerMove={(e) => {
        if (!placing) return;
        e.stopPropagation();
        onHover(snapToCell(e.point.x, e.point.z));
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        if (placing) onPlace(snapToCell(e.point.x, e.point.z));
        else onMissTap && onMissTap();
      }}
    >
      <circleGeometry args={[30, 96]} />
      <meshStandardMaterial color="#86c05a" roughness={1} metalness={0} />
    </mesh>
  );
}

function GhostMarker({ cell, valid }) {
  if (!cell) return null;
  const [x, z] = cellToWorld(cell[0], cell[1]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.04, z]}>
      <circleGeometry args={[CELL * 0.46, 40]} />
      <meshBasicMaterial color={valid ? "#3ddc6a" : "#ff5a4d"} transparent opacity={0.55} />
    </mesh>
  );
}

function SelectieRing({ cell }) {
  const [x, z] = cellToWorld(cell[0], cell[1]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.05, z]}>
      <ringGeometry args={[CELL * 0.42, CELL * 0.52, 40]} />
      <meshBasicMaterial color="#ffd54a" transparent opacity={0.9} />
    </mesh>
  );
}

function Laden() {
  return (
    <Html center>
      <div style={{ color: "#3a5a2a", font: "600 14px system-ui", whiteSpace: "nowrap" }}>
        Park laden…
      </div>
    </Html>
  );
}

export default function ZooScene({ placingAsset = null, placedItems = [], onPlace, onSelectPlaced, onClearSelection, selectedIdx = null }) {
  const [ghost, setGhost] = useState(null);
  const placing = !!placingAsset;

  const bezet = new Set(placedItems.map((it) => cellKey(it.cell[0], it.cell[1])));
  const ghostValid = ghost && !bezet.has(cellKey(ghost[0], ghost[1]));

  const handlePlace = (cell) => {
    if (!onPlace) return;
    if (bezet.has(cellKey(cell[0], cell[1]))) return;
    onPlace(cell);
  };

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [14, 10, 19], fov: 42, near: 0.1, far: 100 }}
      style={{ width: "100%", height: "100%", display: "block", touchAction: "none" }}
    >
      <color attach="background" args={["#aaddff"]} />
      <fog attach="fog" args={["#aaddff", 28, 64]} />

      <ambientLight intensity={0.55} />
      <hemisphereLight args={["#eaf6ff", "#6f9a4a", 0.6]} />
      <directionalLight
        castShadow
        position={[9, 13, 7]}
        intensity={1.2}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={1}
        shadow-camera-far={52}
        shadow-camera-left={-16}
        shadow-camera-right={16}
        shadow-camera-top={16}
        shadow-camera-bottom={-16}
        shadow-bias={-0.0004}
      />

      <Suspense fallback={<Laden />}>
        <GrasGrond placing={placing} onHover={setGhost} onPlace={handlePlace} onMissTap={onClearSelection} />

        {/* Vast mini-park. */}
        <ParkBase />

        {/* Raster alleen tijdens plaatsen. */}
        {placing && (
          <gridHelper args={[GRID_SIZE, GRID_DIV, "#3f6b2a", "#6fa34a"]} position={[0, 0.02, 0]} />
        )}

        {/* Door de speler geplaatste dieren — klikbaar om te selecteren. */}
        {placedItems.map((it, idx) => {
          const [x, z] = cellToWorld(it.cell[0], it.cell[1]);
          return (
            <group
              key={`${cellKey(it.cell[0], it.cell[1])}-${idx}`}
              onPointerDown={(e) => {
                if (placing) return;
                e.stopPropagation();
                onSelectPlaced && onSelectPlaced(idx);
              }}
            >
              {selectedIdx === idx && <SelectieRing cell={it.cell} />}
              <ZooModel assetId={it.assetId} position={[x, 0, z]} rotation={it.rotation || 0} />
            </group>
          );
        })}

        {/* Ghost-preview tijdens plaatsen. */}
        {placing && ghost && (
          <>
            <GhostMarker cell={ghost} valid={ghostValid} />
            <ZooModel assetId={placingAsset} position={[cellToWorld(ghost[0], ghost[1])[0], 0, cellToWorld(ghost[0], ghost[1])[1]]} rotation={0} />
          </>
        )}

        <ContactShadows position={[0, 0.012, 0]} opacity={0.4} scale={GRID_SIZE + 10} blur={2.8} far={7} resolution={1024} color="#274015" />
      </Suspense>

      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        minDistance={5}
        maxDistance={26}
        maxPolarAngle={Math.PI / 2 - 0.05}
        target={[0, 0.8, 0]}
        enablePan={false}
      />
    </Canvas>
  );
}
