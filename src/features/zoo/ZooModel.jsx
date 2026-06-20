// ZooModel — laadt één glTF-model uit de AssetRegistry, normaliseert het
// (schaal naar targetHeight + voeten op de grond), zet schaduwen aan en speelt
// de standaard-animatie. useGLTF cachet het model: elk bestand wordt maar één
// keer over het netwerk geladen, ook al staan er straks tien vossen.
import { useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Box3, Vector3 } from "three";
import { SkeletonUtils } from "three-stdlib";
import { getAsset } from "./AssetRegistry";

export default function ZooModel({ assetId, position = [0, 0, 0], rotation = 0 }) {
  const asset = getAsset(assetId);
  const { scene, animations } = useGLTF(asset.url);

  // Kloon de scene (met skeleton) zodat meerdere exemplaren onafhankelijk
  // animeren en we het gecachete origineel niet muteren.
  const cloned = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // Normaliseer schaal + til het model op zodat de voeten op y=0 staan.
  const { scale, yOffset } = useMemo(() => {
    const box = new Box3().setFromObject(cloned);
    const size = new Vector3();
    box.getSize(size);
    const height = size.y || 1;
    const s = asset.targetHeight / height;
    return { scale: s, yOffset: -box.min.y * s };
  }, [cloned, asset.targetHeight]);

  // Schaduwen aan op alle meshes.
  useEffect(() => {
    cloned.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
  }, [cloned]);

  const group = useRef();
  const { actions, names } = useAnimations(animations, group);
  useEffect(() => {
    const clip = asset.defaultClip && actions[asset.defaultClip] ? asset.defaultClip : names[0];
    if (clip && actions[clip]) {
      actions[clip].reset().fadeIn(0.4).play();
      return () => actions[clip]?.fadeOut(0.3);
    }
  }, [actions, names, asset.defaultClip]);

  return (
    <group ref={group} position={[position[0], position[1] + yOffset, position[2]]} rotation={[0, rotation, 0]}>
      <primitive object={cloned} scale={scale} />
    </group>
  );
}

// Preload zodat het model al binnen is voor de scene mount (vloeiender).
useGLTF.preload(getAsset("fox").url);
