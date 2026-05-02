// ============================================================================
// Shape3D — gedeelde Three.js renderer voor 3D-vormen (kubus, balk, piramide).
// Hergebruikt door Question3DRenderer + alle 3D-checks in de leerpaden.
//
// Props:
//   shape              "kubus" | "balk" | "piramide"
//   dimensions         shape-specifiek object (zie SHAPE_DIMENSIONS_DOC onder)
//   labels             [{ text, axis: "x"|"y"|"z" }]  — sprite-labels in scene
//   showUnitCubes      bool — bouw vorm uit N eenheidskubusjes ipv solid mesh
//   showBoundingBox    bool — toon doorzichtige omsluitende balk (piramide)
//   theme              "dark-studiebol" | "light"
//
// Imperatieve API via ref:
//   ref.current.startTelAnimatie()   — kleur unit-cubes 1-voor-1, callback per stap
//
// Cleanup: alle geometries, materials, textures, listeners + canvas weggehaald
// op unmount of dimension/shape-change.
// ============================================================================

/** @typedef {{ zijde: number }} KubusDims */
/** @typedef {{ lengte: number, breedte: number, hoogte: number }} BalkDims */
/** @typedef {{ grondvlakZijde: number, hoogte: number }} PiramideDims */
/** @typedef {KubusDims | BalkDims | PiramideDims} ShapeDimensions */

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import * as THREE from "three";

const THEMES = {
  "dark-studiebol": {
    labelCss: "#e0e6f0",
    labelHex: 0xe0e6f0,
    bg: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  light: {
    labelCss: "#444441",
    labelHex: 0x444441,
    bg: "#f5f5f5",
    border: "1px solid #ddd",
  },
};

const SHAPE_COLORS = {
  kubus:    { primary: 0xef9f27, edgeInner: 0xffe082, edgeOuter: 0xffd54f, highlight: 0xffd54f, highlightEmissive: 0x4a3500 },
  balk:     { primary: 0x3a7bd5, edgeInner: 0xa8c8ff, edgeOuter: 0x80c0ff, highlight: 0x80c0ff, highlightEmissive: 0x14305a },
  piramide: { primary: 0xef9f27, edgeInner: 0xffd54f, edgeOuter: 0xffd54f, highlight: 0xffd54f, highlightEmissive: 0x4a3500 },
  cilinder: { primary: 0x40b8a8, edgeInner: 0x80d8c8, edgeOuter: 0x40b8a8, highlight: 0x60c8b8, highlightEmissive: 0x103028 },
};

/** Belangrijkste afmeting voor camera-distance-berekening per shape. */
function maxDim(shape, d) {
  if (shape === "kubus") return d.zijde;
  if (shape === "balk") return Math.max(d.lengte, d.breedte, d.hoogte);
  if (shape === "piramide") return Math.max(d.grondvlakZijde, d.hoogte);
  if (shape === "cilinder") return Math.max(d.straal * 2, d.hoogte);
  return 5;
}

/** Sprite-label maker, hergebruikt over shapes. */
function maakLabel(tekst, kleurCss) {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 128;
  const ctx = c.getContext("2d");
  ctx.fillStyle = kleurCss;
  ctx.font = "bold 64px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(tekst, 128, 64);
  const tex = new THREE.CanvasTexture(c);
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(1.6, 0.8, 1);
  return { sprite, dispose: () => { tex.dispose(); mat.dispose(); } };
}

/** Maatlijn met streepjes aan beide einden; alle geo/mat in disposables-array. */
function maatGroep(start, end, dirStreepje, kleurHex, disposables) {
  const group = new THREE.Group();
  const lijnGeo = new THREE.BufferGeometry().setFromPoints([start, end]);
  const lijnMat = new THREE.LineBasicMaterial({ color: kleurHex });
  group.add(new THREE.Line(lijnGeo, lijnMat));
  disposables.push(lijnGeo, lijnMat);
  for (const punt of [start, end]) {
    const sLen = 0.2;
    const sGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(punt.x - dirStreepje.x * sLen, punt.y - dirStreepje.y * sLen, punt.z - dirStreepje.z * sLen),
      new THREE.Vector3(punt.x + dirStreepje.x * sLen, punt.y + dirStreepje.y * sLen, punt.z + dirStreepje.z * sLen),
    ]);
    const sMat = new THREE.LineBasicMaterial({ color: kleurHex });
    group.add(new THREE.Line(sGeo, sMat));
    disposables.push(sGeo, sMat);
  }
  return group;
}

const Shape3D = forwardRef(function Shape3D(
  {
    shape,
    dimensions,
    labels = [],
    showUnitCubes = false,
    showBoundingBox = false,
    theme = "dark-studiebol",
  },
  ref
) {
  const canvasRef = useRef(null);
  const unitMatsRef = useRef([]);            // materials van eenheidskubusjes
  const animatieRef = useRef(null);          // setInterval voor "Tel de blokjes"
  const boundingBoxRef = useRef({ mesh: null, wire: null });
  const tellerCallbackRef = useRef(null);

  // ── Imperatieve API voor wrapper (Question3DRenderer) ─────────────────────
  useImperativeHandle(ref, () => ({
    startTelAnimatie(onUpdate) {
      tellerCallbackRef.current = onUpdate;
      if (animatieRef.current) {
        clearInterval(animatieRef.current);
        animatieRef.current = null;
      }
      const colors = SHAPE_COLORS[shape] || SHAPE_COLORS.kubus;
      // Reset alle blokjes naar primary
      unitMatsRef.current.forEach((mat) => {
        mat.color.setHex(colors.primary);
        mat.emissive?.setHex(0x000000);
      });
      onUpdate?.(0, unitMatsRef.current.length);
      let i = 0;
      animatieRef.current = window.setInterval(() => {
        if (i >= unitMatsRef.current.length) {
          if (animatieRef.current) {
            clearInterval(animatieRef.current);
            animatieRef.current = null;
          }
          return;
        }
        unitMatsRef.current[i].color.setHex(colors.highlight);
        unitMatsRef.current[i].emissive?.setHex(colors.highlightEmissive);
        i++;
        tellerCallbackRef.current?.(i, unitMatsRef.current.length);
      }, 30);
    },
    resetTelAnimatie() {
      if (animatieRef.current) {
        clearInterval(animatieRef.current);
        animatieRef.current = null;
      }
      const colors = SHAPE_COLORS[shape] || SHAPE_COLORS.kubus;
      unitMatsRef.current.forEach((mat) => {
        mat.color.setHex(colors.primary);
        mat.emissive?.setHex(0x000000);
      });
      tellerCallbackRef.current?.(0, unitMatsRef.current.length);
    },
  }), [shape]);

  // ── Bouw scene wanneer shape, dimensions, of showUnitCubes verandert ──────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w) return;

    const colors = SHAPE_COLORS[shape] || SHAPE_COLORS.kubus;
    const themeCfg = THEMES[theme] || THEMES["dark-studiebol"];

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 200);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(window.devicePixelRatio);

    const group = new THREE.Group();
    scene.add(group);

    const disposables = [];
    const unitMats = [];

    const dim = dimensions || {};
    const md = maxDim(shape, dim);

    // ── Bouw vorm ──────────────────────────────────────────────────────────
    if (shape === "kubus") {
      const z = dim.zijde || 5;
      buildBoxLikeShape(group, z, z, z, showUnitCubes, colors, unitMats, disposables);
    } else if (shape === "balk") {
      const l = dim.lengte || 4;
      const b = dim.breedte || 3;
      const hh = dim.hoogte || 2;
      buildBoxLikeShape(group, l, hh, b, showUnitCubes, colors, unitMats, disposables);
    } else if (shape === "cilinder") {
      const r = dim.straal || 3;
      const ch = dim.hoogte || 5;
      buildCilinder(group, r, ch, colors, disposables);
    } else if (shape === "piramide") {
      const gz = dim.grondvlakZijde || 4;
      const ph = dim.hoogte || 6;
      buildPiramide(group, gz, ph, colors, disposables);
      // Omsluitende balk (initieel onzichtbaar; flip via secondary effect)
      const balkGeo = new THREE.BoxGeometry(gz, ph, gz);
      const balkMat = new THREE.MeshLambertMaterial({
        color: 0x80c0ff, transparent: true, opacity: 0.18, side: THREE.DoubleSide,
      });
      const balk = new THREE.Mesh(balkGeo, balkMat);
      balk.position.y = ph / 2;
      balk.visible = false;
      group.add(balk);
      const balkEdges = new THREE.EdgesGeometry(balkGeo);
      const balkLineMat = new THREE.LineBasicMaterial({ color: 0x80c0ff });
      const balkWire = new THREE.LineSegments(balkEdges, balkLineMat);
      balkWire.position.y = ph / 2;
      balkWire.visible = false;
      group.add(balkWire);
      disposables.push(balkGeo, balkMat, balkEdges, balkLineMat);
      boundingBoxRef.current = { mesh: balk, wire: balkWire };
      // Pyramide-grond verticale offset zodat onderkant tegen y=-ph/2 zit
      group.position.y = -ph / 2 + 0.5;
    }
    unitMatsRef.current = unitMats;

    // ── Maatlabels via sprites op gegeven assen ────────────────────────────
    const halfX =
      shape === "balk" ? (dim.lengte || 4) / 2
      : shape === "piramide" ? (dim.grondvlakZijde || 4) / 2
      : shape === "cilinder" ? (dim.straal || 3)
      : (dim.zijde || 5) / 2;
    const halfY =
      shape === "balk" ? (dim.hoogte || 2) / 2
      : shape === "piramide" ? (dim.hoogte || 6) / 2
      : shape === "cilinder" ? (dim.hoogte || 5) / 2
      : (dim.zijde || 5) / 2;
    const halfZ =
      shape === "balk" ? (dim.breedte || 3) / 2
      : shape === "piramide" ? (dim.grondvlakZijde || 4) / 2
      : shape === "cilinder" ? (dim.straal || 3)
      : (dim.zijde || 5) / 2;
    const yMaatOff = shape === "piramide" ? -0.4 : -halfY - 0.4;

    for (const lbl of labels) {
      const { text, axis } = lbl;
      let start, end, streepDir, labelPos;
      if (axis === "x") {
        start = new THREE.Vector3(-halfX, yMaatOff, halfZ + 0.3);
        end = new THREE.Vector3(halfX, yMaatOff, halfZ + 0.3);
        streepDir = new THREE.Vector3(0, 1, 0);
        labelPos = new THREE.Vector3(0, yMaatOff - 0.5, halfZ + 0.5);
      } else if (axis === "y") {
        const yBase = shape === "piramide" ? 0 : -halfY;
        start = new THREE.Vector3(-halfX - 0.6, yBase, halfZ);
        end = new THREE.Vector3(-halfX - 0.6, yBase + 2 * halfY, halfZ);
        streepDir = new THREE.Vector3(1, 0, 0);
        labelPos = new THREE.Vector3(-halfX - 1.4, yBase + halfY, halfZ);
      } else { // z
        start = new THREE.Vector3(halfX + 0.3, yMaatOff, -halfZ);
        end = new THREE.Vector3(halfX + 0.3, yMaatOff, halfZ);
        streepDir = new THREE.Vector3(0, 1, 0);
        labelPos = new THREE.Vector3(halfX + 0.5, yMaatOff - 0.5, 0);
      }
      group.add(maatGroep(start, end, streepDir, themeCfg.labelHex, disposables));
      const { sprite, dispose } = maakLabel(text, themeCfg.labelCss);
      sprite.position.copy(labelPos);
      group.add(sprite);
      disposables.push({ dispose });
    }

    // ── Verlichting ─────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // ── Camera ──────────────────────────────────────────────────────────────
    const cameraDist = md * 2.2;
    camera.position.set(cameraDist, md * (shape === "piramide" ? 0.8 : 1.2), cameraDist * 1.2);
    camera.lookAt(0, 0, 0);

    // ── Drag-to-rotate (muis + touch) + auto-rotate ─────────────────────────
    let rotX = shape === "piramide" ? 0.15 : 0.3;
    let rotY = shape === "piramide" ? 0.4 : 0.5;
    let dragging = false;
    let prevX = 0;
    let prevY = 0;
    canvas.style.cursor = "grab";

    const onMouseDown = (e) => {
      dragging = true; prevX = e.clientX; prevY = e.clientY;
      canvas.style.cursor = "grabbing";
      e.stopPropagation();
    };
    const onMouseUp = () => { dragging = false; canvas.style.cursor = "grab"; };
    const onMouseMove = (e) => {
      if (!dragging) return;
      rotY += (e.clientX - prevX) * 0.01;
      rotX += (e.clientY - prevY) * 0.01;
      prevX = e.clientX; prevY = e.clientY;
    };
    const onTouchStart = (e) => {
      dragging = true;
      prevX = e.touches[0].clientX; prevY = e.touches[0].clientY;
      e.stopPropagation();
    };
    const onTouchEnd = () => { dragging = false; };
    const onTouchMove = (e) => {
      if (!dragging) return;
      rotY += (e.touches[0].clientX - prevX) * 0.01;
      rotX += (e.touches[0].clientY - prevY) * 0.01;
      prevX = e.touches[0].clientX; prevY = e.touches[0].clientY;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchmove", onTouchMove);

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!dragging) rotY += 0.003;
      group.rotation.x = rotX;
      group.rotation.y = rotY;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      if (animatieRef.current) {
        clearInterval(animatieRef.current);
        animatieRef.current = null;
      }
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchmove", onTouchMove);
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      unitMatsRef.current = [];
      boundingBoxRef.current = { mesh: null, wire: null };
    };
  }, [shape, JSON.stringify(dimensions), showUnitCubes, JSON.stringify(labels), theme]);

  // ── Toggle bounding box-zichtbaarheid zonder scene-rebuild ──────────────
  useEffect(() => {
    const { mesh, wire } = boundingBoxRef.current;
    if (mesh) mesh.visible = !!showBoundingBox;
    if (wire) wire.visible = !!showBoundingBox;
  }, [showBoundingBox]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: 360 }}
    />
  );
});

// ──────────────────────────────────────────────────────────────────────────────
// Vorm-builders (intern)
// ──────────────────────────────────────────────────────────────────────────────

/** Bouw kubus of balk uit individuele eenheidskubusjes (showUnitCubes=true) of solid. */
function buildBoxLikeShape(group, l, h, b, showUnitCubes, colors, unitMats, disposables) {
  const halfL = l / 2;
  const halfH = h / 2;
  const halfB = b / 2;
  if (showUnitCubes && Number.isInteger(l) && Number.isInteger(h) && Number.isInteger(b)) {
    const unitSize = 0.95;
    for (let xi = 0; xi < l; xi++) {
      for (let yi = 0; yi < h; yi++) {
        for (let zi = 0; zi < b; zi++) {
          const geo = new THREE.BoxGeometry(unitSize, unitSize, unitSize);
          const mat = new THREE.MeshLambertMaterial({ color: colors.primary, transparent: true, opacity: 0.7 });
          const mesh = new THREE.Mesh(geo, mat);
          mesh.position.set(xi - (l - 1) / 2, yi - (h - 1) / 2, zi - (b - 1) / 2);
          group.add(mesh);
          disposables.push(geo, mat);
          const ed = new THREE.EdgesGeometry(geo);
          const lm = new THREE.LineBasicMaterial({ color: colors.edgeInner });
          const wire = new THREE.LineSegments(ed, lm);
          wire.position.copy(mesh.position);
          group.add(wire);
          disposables.push(ed, lm);
          unitMats.push(mat);
        }
      }
    }
  } else {
    const geo = new THREE.BoxGeometry(l, h, b);
    const mat = new THREE.MeshLambertMaterial({ color: colors.primary, transparent: true, opacity: 0.7 });
    group.add(new THREE.Mesh(geo, mat));
    disposables.push(geo, mat);
  }
  // Outer-edges altijd
  const outerGeo = new THREE.BoxGeometry(l, h, b);
  const outerEdges = new THREE.EdgesGeometry(outerGeo);
  const outerLineMat = new THREE.LineBasicMaterial({ color: colors.edgeOuter });
  group.add(new THREE.LineSegments(outerEdges, outerLineMat));
  disposables.push(outerGeo, outerEdges, outerLineMat);
  void halfL; void halfH; void halfB; // unused but reserved for centering tweaks
}

/** Bouw cilinder met top + bodem cirkels en zij-edges. CylinderGeometry is by-default y-axis aligned. */
function buildCilinder(group, straal, hoogte, colors, disposables) {
  const cylGeo = new THREE.CylinderGeometry(straal, straal, hoogte, 48);
  const cylMat = new THREE.MeshLambertMaterial({
    color: colors.primary, transparent: true, opacity: 0.7, side: THREE.DoubleSide,
  });
  group.add(new THREE.Mesh(cylGeo, cylMat));
  const cylEdges = new THREE.EdgesGeometry(cylGeo, 0.1);
  const cylLineMat = new THREE.LineBasicMaterial({ color: colors.edgeOuter });
  group.add(new THREE.LineSegments(cylEdges, cylLineMat));
  // Top + bodem cirkel-rings expliciet zodat ze altijd zichtbaar zijn (EdgesGeometry
  // mist soms de tessellatie-grenzen op smooth-curves).
  const topRingGeo = new THREE.RingGeometry(straal - 0.005, straal + 0.005, 48);
  const topRingMat = new THREE.MeshBasicMaterial({ color: colors.edgeOuter, side: THREE.DoubleSide });
  const topRing = new THREE.Mesh(topRingGeo, topRingMat);
  topRing.rotation.x = -Math.PI / 2;
  topRing.position.y = hoogte / 2;
  group.add(topRing);
  const bottomRing = new THREE.Mesh(topRingGeo, topRingMat);
  bottomRing.rotation.x = -Math.PI / 2;
  bottomRing.position.y = -hoogte / 2;
  group.add(bottomRing);
  // Verticale lijnen voor 3D-suggestie (4 stuks rond)
  const verticalMat = new THREE.LineBasicMaterial({ color: colors.edgeOuter });
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const x = Math.cos(angle) * straal;
    const z = Math.sin(angle) * straal;
    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x, -hoogte / 2, z),
      new THREE.Vector3(x, hoogte / 2, z),
    ]);
    group.add(new THREE.Line(lineGeo, verticalMat));
    disposables.push(lineGeo);
  }
  disposables.push(cylGeo, cylMat, cylEdges, cylLineMat, topRingGeo, topRingMat, verticalMat);
}

/** Bouw piramide met vierkant grondvlak — 4 zijvlakken + 2 driehoeken voor grondvlak. */
function buildPiramide(group, grondvlakZijde, hoogte, colors, disposables) {
  const halfBase = grondvlakZijde / 2;
  const apex = new THREE.Vector3(0, hoogte, 0);
  const v1 = new THREE.Vector3(-halfBase, 0, -halfBase);
  const v2 = new THREE.Vector3(halfBase, 0, -halfBase);
  const v3 = new THREE.Vector3(halfBase, 0, halfBase);
  const v4 = new THREE.Vector3(-halfBase, 0, halfBase);

  const pirGeo = new THREE.BufferGeometry();
  const verts = new Float32Array([
    v1.x, v1.y, v1.z, v2.x, v2.y, v2.z, apex.x, apex.y, apex.z,
    v2.x, v2.y, v2.z, v3.x, v3.y, v3.z, apex.x, apex.y, apex.z,
    v3.x, v3.y, v3.z, v4.x, v4.y, v4.z, apex.x, apex.y, apex.z,
    v4.x, v4.y, v4.z, v1.x, v1.y, v1.z, apex.x, apex.y, apex.z,
    v1.x, v1.y, v1.z, v3.x, v3.y, v3.z, v2.x, v2.y, v2.z,
    v1.x, v1.y, v1.z, v4.x, v4.y, v4.z, v3.x, v3.y, v3.z,
  ]);
  pirGeo.setAttribute("position", new THREE.BufferAttribute(verts, 3));
  pirGeo.computeVertexNormals();
  const pirMat = new THREE.MeshLambertMaterial({
    color: colors.primary, transparent: true, opacity: 0.75, side: THREE.DoubleSide,
  });
  group.add(new THREE.Mesh(pirGeo, pirMat));
  const pirEdges = new THREE.EdgesGeometry(pirGeo);
  const pirLineMat = new THREE.LineBasicMaterial({ color: colors.edgeOuter });
  group.add(new THREE.LineSegments(pirEdges, pirLineMat));
  disposables.push(pirGeo, pirMat, pirEdges, pirLineMat);

  // Grondvlak-markering (lichtere kleur op de grond)
  const grondGeo = new THREE.PlaneGeometry(grondvlakZijde, grondvlakZijde);
  grondGeo.rotateX(-Math.PI / 2);
  const grondMat = new THREE.MeshBasicMaterial({
    color: 0xba7517, side: THREE.DoubleSide, transparent: true, opacity: 0.5,
  });
  const grond = new THREE.Mesh(grondGeo, grondMat);
  grond.position.y = 0.01;
  group.add(grond);
  disposables.push(grondGeo, grondMat);
}

export default Shape3D;
