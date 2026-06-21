// HouseModel — laadt een huis-GLB en maakt de onderdelen apart inkleurbaar.
//
// De Kenney-huizen zijn één mesh met één kleuren-textuur (colormap): elk
// onderdeel (dak, muren, kozijnen, deur…) krijgt zijn kleur uit een eigen
// "vlakje" in dat plaatje. We lezen per hoekpunt welk kleur-vlakje het gebruikt,
// groeperen de hoekpunten per vlakje (= per onderdeel), en zetten het model om
// naar per-hoekpunt-kleuren. Daarna kun je een onderdeel aanklikken en die hele
// groep een nieuwe kleur geven. De gekozen kleuren staan per huis in `colors`.
import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3, BufferAttribute, MeshStandardMaterial, Color } from "three";
import { getAsset } from "./AssetRegistry";

// Analyse per model (1× per url): brongeometrie + groep-per-hoekpunt + basiskleuren.
const cache = {};

function analyseer(url, scene) {
  if (cache[url]) return cache[url];
  let mesh = null;
  scene.traverse((o) => { if (o.isMesh && !mesh) mesh = o; });
  if (!mesh || !mesh.geometry?.attributes?.uv || !mesh.material?.map?.image) {
    cache[url] = null;
    return null;
  }
  try {
    const geom = mesh.geometry;
    const uv = geom.attributes.uv;
    const tex = mesh.material.map;
    const img = tex.image;
    const cw = img.width, ch = img.height;
    const cnv = document.createElement("canvas");
    cnv.width = cw; cnv.height = ch;
    const ctx = cnv.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, cw, ch);
    const data = ctx.getImageData(0, 0, cw, ch).data;
    const flipY = tex.flipY !== false; // GLTF: meestal false
    const n = uv.count;
    const vertexGroup = new Int16Array(n);
    const keyToGroup = new Map();
    const baseColors = [];
    for (let i = 0; i < n; i++) {
      let u = uv.getX(i), v = uv.getY(i);
      u -= Math.floor(u); v -= Math.floor(v);
      const px = Math.min(cw - 1, Math.max(0, Math.floor(u * cw)));
      const py = Math.min(ch - 1, Math.max(0, Math.floor((flipY ? 1 - v : v) * ch)));
      const idx = (py * cw + px) * 4;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      const qk = `${r >> 4},${g >> 4},${b >> 4}`;
      let grp = keyToGroup.get(qk);
      if (grp === undefined) { grp = baseColors.length; keyToGroup.set(qk, grp); baseColors.push([r / 255, g / 255, b / 255]); }
      vertexGroup[i] = grp;
    }
    const res = { geom, vertexGroup, baseColors };
    cache[url] = res;
    return res;
  } catch (e) {
    console.warn("[zoo] huis-analyse mislukt:", e?.message);
    cache[url] = null;
    return null;
  }
}

export default function HouseModel({ assetId, position = [0, 0, 0], rotation = 0, colors, editable = false, onPickPart, fallback }) {
  const asset = getAsset(assetId);
  const { scene } = useGLTF(asset.url);
  const a = useMemo(() => analyseer(asset.url, scene), [asset.url, scene]);

  // Per-huis geometrie met eigen kleur-attribuut (basiskleur of jouw keuze).
  const geom = useMemo(() => {
    if (!a) return null;
    const g = a.geom.clone();
    const n = a.vertexGroup.length;
    const col = new Float32Array(n * 3);
    const tmp = new Color();
    for (let i = 0; i < n; i++) {
      const grp = a.vertexGroup[i];
      const ov = colors && colors[grp];
      if (ov) { tmp.set(ov); col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b; }
      else { const c = a.baseColors[grp]; col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2]; }
    }
    g.setAttribute("color", new BufferAttribute(col, 3));
    g.computeVertexNormals();
    return g;
  }, [a, colors]);

  const { scale, yOffset } = useMemo(() => {
    if (!geom) return { scale: 1, yOffset: 0 };
    geom.computeBoundingBox();
    const box = geom.boundingBox || new Box3();
    const size = new Vector3(); box.getSize(size);
    const s = asset.targetHeight / (size.y || 1);
    return { scale: s, yOffset: -box.min.y * s };
  }, [geom, asset.targetHeight]);

  const mat = useMemo(() => new MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 }), []);

  // Lukt de analyse niet? Val terug op het gewone (getextureerde) model.
  if (!a || !geom) return fallback || null;

  return (
    <group position={[position[0], position[1] + yOffset, position[2]]} rotation={[0, rotation, 0]}>
      <mesh
        geometry={geom}
        material={mat}
        scale={scale}
        castShadow
        receiveShadow
        onPointerDown={editable ? (e) => {
          e.stopPropagation();
          const f = e.faceIndex;
          if (f == null) return;
          const vi = geom.index ? geom.index.getX(f * 3) : f * 3;
          const grp = a.vertexGroup[vi];
          if (grp != null && onPickPart) onPickPart(grp);
        } : undefined}
      />
    </group>
  );
}
