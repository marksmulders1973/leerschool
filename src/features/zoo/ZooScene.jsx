// ZooScene — de 3D-canvas van Mijn Park: camera, belichting, schaduw,
// grasgrond, vast mini-park (paden/draaimolen/poppetje/decor), raster en
// orbit-besturing. Dieren komen mét een ruim verblijf dat op het grid snapt.
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Html } from "@react-three/drei";
import { ParkBase, Enclosure } from "./ParkProps";
import {
  GRID_SIZE, GRID_DIV, ENCLOSURE_SIZE, snapToCell, cellToWorld, cellKey,
  isPlaatsbaar, bezetteCellenVan,
} from "./grid";

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
      <circleGeometry args={[34, 96]} />
      <meshStandardMaterial color="#86c05a" roughness={1} metalness={0} />
    </mesh>
  );
}

function FootprintMarker({ cell, valid }) {
  if (!cell) return null;
  const [x, z] = cellToWorld(cell[0], cell[1]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.05, z]}>
      <planeGeometry args={[ENCLOSURE_SIZE, ENCLOSURE_SIZE]} />
      <meshBasicMaterial color={valid ? "#3ddc6a" : "#ff5a4d"} transparent opacity={0.4} />
    </mesh>
  );
}

function SelectieRing({ cell }) {
  const [x, z] = cellToWorld(cell[0], cell[1]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.06, z]}>
      <ringGeometry args={[ENCLOSURE_SIZE * 0.62, ENCLOSURE_SIZE * 0.72, 4]} />
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

export default function ZooScene({ placingAsset = null, placedItems = [], onPlace, onSelectPlaced, onClearSelection, selectedIdx = null, moveIdx = -1 }) {
  const [ghost, setGhost] = useState(null);
  const placing = !!placingAsset;

  const bezet = bezetteCellenVan(placedItems, moveIdx);
  const ghostValid = ghost && isPlaatsbaar(ghost[0], ghost[1], bezet);

  const handlePlace = (cell) => {
    if (!onPlace) return;
    if (!isPlaatsbaar(cell[0], cell[1], bezet)) return;
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
        <GrasGrond placing={placing} onHover={setGhost} onPlace={handlePlace} onMissTap={onClearSelection} />

        <ParkBase />

        {placing && (
          <gridHelper args={[GRID_SIZE, GRID_DIV, "#3f6b2a", "#6fa34a"]} position={[0, 0.02, 0]} />
        )}

        {/* Geplaatste verblijven (dier + hek) — klikbaar om te selecteren. */}
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
              <Enclosure position={[x, 0, z]} size={ENCLOSURE_SIZE} assetId={it.assetId} />
            </group>
          );
        })}

        {/* Ghost-preview tijdens plaatsen: verblijf + groen/rood vlak. */}
        {placing && ghost && (
          <>
            <FootprintMarker cell={ghost} valid={ghostValid} />
            <Enclosure position={[cellToWorld(ghost[0], ghost[1])[0], 0, cellToWorld(ghost[0], ghost[1])[1]]} size={ENCLOSURE_SIZE} assetId={placingAsset} />
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
