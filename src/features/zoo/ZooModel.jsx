// ZooModel — laadt één glTF-model uit de AssetRegistry, normaliseert het
// (schaal naar targetHeight + voeten op de grond), zet schaduwen aan en speelt
// animaties. Met `wander` (straal in units) gaat een dier rondscharrelen binnen
// zijn verblijf: het loopt naar een willekeurig punt (Walk), rust dan even
// (Idle/Eten), en herhaalt — zo komt het park tot leven. useGLTF cachet het
// model: elk bestand wordt maar één keer geladen, ook al staan er tien vossen.
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Box3, Vector3, SRGBColorSpace, Color } from "three";
import { SkeletonUtils } from "three-stdlib";
import { getAsset } from "./AssetRegistry";

// Clip-keuze op naam (Quaternius: Walk/Idle/Idle_2/Eating/…). Valt terug op
// de eerste beschikbare clip als een naam ontbreekt.
function kies(names, ...voorkeur) {
  for (const v of voorkeur) {
    const hit = names.find((n) => n.toLowerCase() === v.toLowerCase());
    if (hit) return hit;
  }
  return null;
}

export default function ZooModel({ assetId, position = [0, 0, 0], rotation = 0, wander = 0 }) {
  const asset = getAsset(assetId);
  const { scene, animations } = useGLTF(asset.url);
  const cloned = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { scale, yOffset } = useMemo(() => {
    const box = new Box3().setFromObject(cloned);
    const size = new Vector3();
    box.getSize(size);
    const height = size.y || 1;
    const s = asset.targetHeight / height;
    return { scale: s, yOffset: -box.min.y * s };
  }, [cloned, asset.targetHeight]);

  useEffect(() => {
    const fallback = asset.fallbackColor ? new Color(asset.fallbackColor) : null;
    cloned.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true;
      o.receiveShadow = true;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m) => {
        if (!m) return;
        if (m.map) { m.map.colorSpace = SRGBColorSpace; m.map.needsUpdate = true; }
        else if (fallback) m.color = fallback.clone();
        if ("metalness" in m) m.metalness = 0;
        if ("roughness" in m) m.roughness = Math.max(0.6, m.roughness ?? 1);
        m.needsUpdate = true;
      });
    });
  }, [cloned, asset.fallbackColor]);

  const group = useRef();
  const mover = useRef();
  const { actions, names } = useAnimations(animations, group);

  // Onthoud welke clips er zijn + de wander-toestand.
  const clips = useMemo(() => ({
    walk: kies(names, "Walk"),
    idles: [kies(names, "Idle"), kies(names, "Idle_2"), kies(names, "Eating")].filter(Boolean),
    first: names[0],
  }), [names]);
  const st = useRef({ inited: false, resting: true, rest: 1 + Math.random() * 2, tx: 0, tz: 0, current: null });

  const speel = (naam) => {
    if (!naam || !actions[naam] || st.current.current === naam) return;
    const prev = st.current.current;
    if (prev && actions[prev]) actions[prev].fadeOut(0.3);
    actions[naam].reset().fadeIn(0.3).play();
    st.current.current = naam;
  };

  // Startanimatie.
  useEffect(() => {
    const start = wander > 0 ? (clips.idles[0] || clips.first) : (asset.defaultClip || clips.idles[0] || clips.first);
    speel(start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actions]);

  // Rondscharrelen.
  useFrame((_, dt) => {
    if (!wander || !mover.current) return;
    const s = st.current;
    if (s.resting) {
      s.rest -= dt;
      if (s.rest <= 0) {
        // Nieuw doel binnen de straal kiezen → gaan lopen.
        const a = Math.random() * Math.PI * 2;
        const r = Math.random() * wander;
        s.tx = Math.cos(a) * r;
        s.tz = Math.sin(a) * r;
        s.resting = false;
        speel(clips.walk || clips.first);
      }
      return;
    }
    const m = mover.current;
    const dx = s.tx - m.position.x;
    const dz = s.tz - m.position.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.06) {
      // Aangekomen → even rusten (idle/eten).
      s.resting = true;
      s.rest = 1.5 + Math.random() * 3.5;
      speel(clips.idles.length ? clips.idles[Math.floor(Math.random() * clips.idles.length)] : clips.first);
      return;
    }
    const stap = Math.min(dist, dt * 0.7);
    m.position.x += (dx / dist) * stap;
    m.position.z += (dz / dist) * stap;
    // Naar de looprichting draaien (model kijkt langs +Z).
    m.rotation.y = Math.atan2(dx, dz);
  });

  return (
    <group ref={group} position={[position[0], position[1] + yOffset, position[2]]} rotation={[0, rotation, 0]}>
      <group ref={mover}>
        <primitive object={cloned} scale={scale} />
      </group>
    </group>
  );
}
