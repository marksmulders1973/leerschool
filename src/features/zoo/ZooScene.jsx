// ZooScene — de 3D-canvas van Mijn Park: camera, belichting, schaduw,
// grasgrond, raster en orbit-besturing. Stap 2: dieren op een grid plaatsen.
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Html } from "@react-three/drei";
import ZooModel from "./ZooModel";
import { CELL, GRID_SIZE, GRID_DIV, snapToCell, cellToWorld, cellKey } from "./grid";

function GrasGrond({ placing, onHover, onPlace }) {
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
        if (!placing) return;
        e.stopPropagation();
        onPlace(snapToCell(e.point.x, e.point.z));
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

function Laden() {
  return (
    <Html center>
      <div style={{ color: "#3a5a2a", font: "600 14px system-ui", whiteSpace: "nowrap" }}>
        Park laden…
      </div>
    </Html>
  );
}

export default function ZooScene({ placingAsset = null, placedItems = [], onPlace }) {
  const [ghost, setGhost] = useState(null); // celcoördinaat onder de cursor
  const placing = !!placingAsset;

  const bezet = new Set(placedItems.map((it) => cellKey(it.cell[0], it.cell[1])));
  const ghostValid = ghost && !bezet.has(cellKey(ghost[0], ghost[1]));

  const handlePlace = (cell) => {
    if (!onPlace) return;
    if (bezet.has(cellKey(cell[0], cell[1]))) return; // bezet → niets doen
    onPlace(cell);
  };

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [6, 5, 8], fov: 42, near: 0.1, far: 100 }}
      style={{ width: "100%", height: "100%", display: "block", touchAction: "none" }}
    >
      {/* Egale zachte lucht (stylized) + fog die de horizon laat wegvloeien. */}
      <color attach="background" args={["#aaddff"]} />
      <fog attach="fog" args={["#aaddff", 26, 60]} />

      {/* Belichting zonder externe HDR: ambient + hemisphere + directional met schaduw. */}
      <ambientLight intensity={0.7} />
      <hemisphereLight args={["#eaf6ff", "#6f9a4a", 0.7]} />
      <directionalLight
        castShadow
        position={[8, 12, 6]}
        intensity={1.5}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={1}
        shadow-camera-far={48}
        shadow-camera-left={-14}
        shadow-camera-right={14}
        shadow-camera-top={14}
        shadow-camera-bottom={-14}
        shadow-bias={-0.0004}
      />

      <Suspense fallback={<Laden />}>
        <GrasGrond placing={placing} onHover={setGhost} onPlace={handlePlace} />

        {/* Raster alleen zichtbaar tijdens plaatsen. */}
        {placing && (
          <gridHelper args={[GRID_SIZE, GRID_DIV, "#3f6b2a", "#6fa34a"]} position={[0, 0.02, 0]} />
        )}

        {/* Reeds geplaatste dieren. */}
        {placedItems.map((it) => {
          const [x, z] = cellToWorld(it.cell[0], it.cell[1]);
          return (
            <ZooModel key={cellKey(it.cell[0], it.cell[1])} assetId={it.assetId} position={[x, 0, z]} rotation={it.rotation || 0} />
          );
        })}

        {/* Ghost-preview tijdens plaatsen: model + groen/rood vakje. */}
        {placing && ghost && (
          <>
            <GhostMarker cell={ghost} valid={ghostValid} />
            <ZooModel assetId={placingAsset} position={[cellToWorld(ghost[0], ghost[1])[0], 0, cellToWorld(ghost[0], ghost[1])[1]]} rotation={0} />
          </>
        )}

        <ContactShadows position={[0, 0.012, 0]} opacity={0.45} scale={GRID_SIZE + 6} blur={2.6} far={6} resolution={1024} color="#274015" />
      </Suspense>

      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        minDistance={4}
        maxDistance={22}
        maxPolarAngle={Math.PI / 2 - 0.05}
        target={[0, 0.5, 0]}
        enablePan={false}
      />
    </Canvas>
  );
}
