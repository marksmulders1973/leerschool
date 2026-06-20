// ZooScene — de 3D-canvas van Zookwartier: camera, belichting, schaduw,
// grasgrond en orbit-besturing. Dit is het hart van de "kwaliteits-lat":
// modellen staan netjes op de grond, zachte schaduwen, vriendelijke hoek,
// vloeiende camera met demping (muis én touch).
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Html } from "@react-three/drei";
import ZooModel from "./ZooModel";

function GrasGrond() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <circleGeometry args={[30, 96]} />
      <meshStandardMaterial color="#86c05a" roughness={1} metalness={0} />
    </mesh>
  );
}

function Laden() {
  return (
    <Html center>
      <div style={{ color: "#3a5a2a", font: "600 14px system-ui", whiteSpace: "nowrap" }}>
        Dierentuin laden…
      </div>
    </Html>
  );
}

export default function ZooScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [4.5, 3.2, 5.5], fov: 42, near: 0.1, far: 100 }}
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
        position={[8, 10, 5]}
        intensity={1.5}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={1}
        shadow-camera-far={40}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={12}
        shadow-camera-bottom={-12}
        shadow-bias={-0.0004}
      />

      <Suspense fallback={<Laden />}>
        <GrasGrond />
        <ZooModel assetId="fox" position={[0, 0, 0]} rotation={-0.5} />
        {/* Zachte contact-schaduw onder het dier zodat het echt "staat". */}
        <ContactShadows position={[0, 0.012, 0]} opacity={0.5} scale={9} blur={2.6} far={5} resolution={1024} color="#274015" />
      </Suspense>

      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        minDistance={3}
        maxDistance={16}
        maxPolarAngle={Math.PI / 2 - 0.05}
        target={[0, 0.6, 0]}
        enablePan={false}
      />
    </Canvas>
  );
}
