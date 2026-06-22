// CharacterModel — laadt een mens-karakter (Quaternius CC0, gekleurde materialen
// → nooit "wit") en speelt Walk of Idle af op basis van `movingRef` (een ref die
// true is als het poppetje loopt). Genormaliseerd naar ~mensgrootte, voeten op
// de grond. De ouder (Player/Visitor) bepaalt positie + draairichting.
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Box3, Vector3, SRGBColorSpace } from "three";
import { SkeletonUtils } from "three-stdlib";

// Clip op naam vinden (Quaternius: "HumanArmature|Man_Walk" etc.): exact, anders
// eindigt-op-keyword.
function kies(names, ...voorkeur) {
  for (const v of voorkeur) {
    const lv = v.toLowerCase();
    let hit = names.find((n) => n.toLowerCase() === lv);
    if (!hit) hit = names.find((n) => { const ln = n.toLowerCase(); return ln.endsWith("|" + lv) || ln.endsWith("_" + lv) || ln.endsWith(lv); });
    if (hit) return hit;
  }
  return null;
}

export default function CharacterModel({ url, movingRef, targetHeight = 1.65 }) {
  const { scene, animations } = useGLTF(url);
  const cloned = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { scale, yOffset } = useMemo(() => {
    cloned.updateMatrixWorld(true); // wereld-matrix bijwerken, anders klopt de bbox niet (interne node-schaal)
    const box = new Box3().setFromObject(cloned);
    const size = new Vector3(); box.getSize(size);
    // Onbetrouwbare bbox (FBX→GLB met node-schaal 100) → veilige terugval.
    const h = size.y > 0.1 ? size.y : 1.0;
    const s = targetHeight / h;
    const yOff = (isFinite(box.min.y) && Math.abs(box.min.y) < 1000) ? -box.min.y * s : 0;
    return { scale: s, yOffset: yOff };
  }, [cloned, targetHeight]);

  useEffect(() => {
    cloned.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true; o.receiveShadow = true;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m) => {
        if (!m) return;
        if (m.map) m.map.colorSpace = SRGBColorSpace;       // textuur (zelden) goed kleuren
        if ("metalness" in m) m.metalness = 0;
        if ("roughness" in m) m.roughness = Math.max(0.55, m.roughness ?? 1);
      });
    });
  }, [cloned]);

  const group = useRef();
  const { actions, names } = useAnimations(animations, group);
  const clips = useMemo(() => ({
    walk: kies(names, "Walk"),
    idle: kies(names, "Idle", "Standing") || names[0],
  }), [names]);
  const cur = useRef(null);
  const speel = (n) => {
    if (!n || !actions[n] || cur.current === n) return;
    if (cur.current && actions[cur.current]) actions[cur.current].fadeOut(0.25);
    actions[n].reset().fadeIn(0.25).play();
    cur.current = n;
  };
  // Nieuw model/nieuwe actions → state resetten zodat de nieuwe idle écht
  // opnieuw start (action-instanties zijn nieuw, ook al heet de clip hetzelfde).
  useEffect(() => { cur.current = null; speel(clips.idle); /* eslint-disable-next-line */ }, [actions]);
  useFrame(() => { speel(movingRef?.current ? (clips.walk || clips.idle) : clips.idle); });

  return (
    <group ref={group}>
      <primitive object={cloned} scale={scale} position={[0, yOffset, 0]} />
    </group>
  );
}
