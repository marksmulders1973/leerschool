// MaatjeMini3D — een klein 3D-weergavetje van een maatje (.glb) dat rustig
// ronddraait. Gebruikt op het keuze-kaartje in de maatjes-kiezer, zodat Vonk
// daar echt 3D te zien is. Eigen mini-canvas (los van het park-canvas).
//
// Het model wordt gecentreerd + op maat geschaald, dus elk .glb past vanzelf.
// De canvas vangt geen klikken (pointer-events: none) → het kaartje blijft
// klikbaar om het maatje te kiezen.
import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";

function SpinModel({ url }) {
  const { scene } = useGLTF(url);
  const cloned = useMemo(() => scene.clone(true), [scene]);
  const { scale, center } = useMemo(() => {
    const box = new Box3().setFromObject(cloned);
    const size = new Vector3(); box.getSize(size);
    const c = new Vector3(); box.getCenter(c);
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    return { scale: 1.7 / maxDim, center: c };
  }, [cloned]);
  const ref = useRef();
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.9; });
  return (
    <group ref={ref} scale={scale}>
      <primitive object={cloned} position={[-center.x, -center.y, -center.z]} />
    </group>
  );
}

export default function MaatjeMini3D({ url, size = 64 }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.7], fov: 32 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ width: size, height: size, display: "block", pointerEvents: "none" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[2.5, 3, 2.5]} intensity={1.25} />
      <directionalLight position={[-2, 1, -2]} intensity={0.45} />
      <Suspense fallback={null}>
        <SpinModel url={url} />
      </Suspense>
    </Canvas>
  );
}
