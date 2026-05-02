// ============================================================================
// Track ID: RM-S12-Q1
// Vraag: Een piramide heeft een grondvlak van 4 × 4 cm en een hoogte van 6 cm.
//        Wat is de inhoud?
// Concept: V = ⅓ × grondvlak × hoogte (piramide = ⅓ van omsluitende balk)
//
// Door Claude.ai gegenereerd, hier handmatig naar JSX geconverteerd voor
// inbedding in Studiebol-leerpad. Donker-theme-aanpassingen toegepast.
// onAnswer(correct, gekozenWaarde) callback voor LearnPath.jsx-flow.
// ============================================================================

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function RmS12Q1Piramide({ onAnswer, grondvlakZijde = 4, hoogte = 6 }) {
  const canvasRef = useRef(null);
  const balkVisibleRef = useRef(false);

  const [toonBalk, setToonBalk] = useState(false);
  const [toonBerekening, setToonBerekening] = useState(false);
  const [gekozen, setGekozen] = useState(null);

  const grondvlakOpp = grondvlakZijde * grondvlakZijde;
  const balkInhoud = grondvlakOpp * hoogte;
  const piramideInhoud = Math.round((balkInhoud / 3) * 100) / 100;

  const OPTIES = [
    { waarde: balkInhoud, label: `${balkInhoud} cm³` },
    { waarde: piramideInhoud, label: `${piramideInhoud} cm³` },
    { waarde: balkInhoud / 2, label: `${balkInhoud / 2} cm³` },
    { waarde: piramideInhoud / 2, label: `${Math.round((piramideInhoud / 2) * 100) / 100} cm³` },
  ];

  const FOUT_UITLEG = {
    [balkInhoud]: "Dat is de inhoud van de hele balk eromheen. De piramide is maar ⅓ daarvan.",
    [balkInhoud / 2]: "Je hebt door 2 gedeeld in plaats van door 3. Bij een piramide deel je door 3.",
    [piramideInhoud / 2]: `Reken nog eens na: ⅓ × ${grondvlakZijde} × ${grondvlakZijde} × ${hoogte} = ${piramideInhoud}.`,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 200);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(window.devicePixelRatio);

    const group = new THREE.Group();
    scene.add(group);

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
      color: 0xef9f27, transparent: true, opacity: 0.75, side: THREE.DoubleSide,
    });
    const piramide = new THREE.Mesh(pirGeo, pirMat);
    group.add(piramide);

    const pirEdges = new THREE.EdgesGeometry(pirGeo);
    const pirLineMat = new THREE.LineBasicMaterial({ color: 0xffd54f });
    const pirWire = new THREE.LineSegments(pirEdges, pirLineMat);
    group.add(pirWire);

    const grondGeo = new THREE.PlaneGeometry(grondvlakZijde, grondvlakZijde);
    grondGeo.rotateX(-Math.PI / 2);
    const grondMat = new THREE.MeshBasicMaterial({
      color: 0xba7517, side: THREE.DoubleSide, transparent: true, opacity: 0.5,
    });
    const grondvlakMesh = new THREE.Mesh(grondGeo, grondMat);
    grondvlakMesh.position.y = 0.01;
    group.add(grondvlakMesh);

    // Maatlijnen + sprite-labels (lichter voor dark theme)
    const maatKleur = 0xe0e6f0;
    const yOffMaat = -0.4;
    const disposables = [];

    const maakLijn = (start, end) => {
      const mat = new THREE.LineBasicMaterial({ color: maatKleur });
      const geo = new THREE.BufferGeometry().setFromPoints([start, end]);
      disposables.push(geo, mat);
      return new THREE.Line(geo, mat);
    };
    const maakStreepje = (punt, richting) => {
      const lengte = 0.2;
      const mat = new THREE.LineBasicMaterial({ color: maatKleur });
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(punt.x - richting.x * lengte, punt.y - richting.y * lengte, punt.z - richting.z * lengte),
        new THREE.Vector3(punt.x + richting.x * lengte, punt.y + richting.y * lengte, punt.z + richting.z * lengte),
      ]);
      disposables.push(geo, mat);
      return new THREE.Line(geo, mat);
    };
    const maakLabel = (tekst) => {
      const c = document.createElement("canvas");
      c.width = 256; c.height = 128;
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#e0e6f0";
      ctx.font = "bold 64px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(tekst, 128, 64);
      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(1.6, 0.8, 1);
      disposables.push(tex, mat);
      return sprite;
    };

    const breedteStart = new THREE.Vector3(-halfBase, yOffMaat, halfBase + 0.3);
    const breedteEnd = new THREE.Vector3(halfBase, yOffMaat, halfBase + 0.3);
    group.add(maakLijn(breedteStart, breedteEnd));
    group.add(maakStreepje(breedteStart, new THREE.Vector3(0, 1, 0)));
    group.add(maakStreepje(breedteEnd, new THREE.Vector3(0, 1, 0)));
    const lab1 = maakLabel(`${grondvlakZijde} cm`);
    lab1.position.set(0, yOffMaat - 0.5, halfBase + 0.5);
    group.add(lab1);

    const diepteStart = new THREE.Vector3(halfBase + 0.3, yOffMaat, -halfBase);
    const diepteEnd = new THREE.Vector3(halfBase + 0.3, yOffMaat, halfBase);
    group.add(maakLijn(diepteStart, diepteEnd));
    group.add(maakStreepje(diepteStart, new THREE.Vector3(0, 1, 0)));
    group.add(maakStreepje(diepteEnd, new THREE.Vector3(0, 1, 0)));
    const lab2 = maakLabel(`${grondvlakZijde} cm`);
    lab2.position.set(halfBase + 0.5, yOffMaat - 0.5, 0);
    group.add(lab2);

    const hoogteStart = new THREE.Vector3(-halfBase - 0.6, 0, halfBase);
    const hoogteEnd = new THREE.Vector3(-halfBase - 0.6, hoogte, halfBase);
    group.add(maakLijn(hoogteStart, hoogteEnd));
    group.add(maakStreepje(hoogteStart, new THREE.Vector3(1, 0, 0)));
    group.add(maakStreepje(hoogteEnd, new THREE.Vector3(1, 0, 0)));
    const lab3 = maakLabel(`${hoogte} cm`);
    lab3.position.set(-halfBase - 1.4, hoogte / 2, halfBase);
    group.add(lab3);

    const balkGeo = new THREE.BoxGeometry(grondvlakZijde, hoogte, grondvlakZijde);
    const balkMat = new THREE.MeshLambertMaterial({
      color: 0x80c0ff, transparent: true, opacity: 0.18, side: THREE.DoubleSide,
    });
    const balk = new THREE.Mesh(balkGeo, balkMat);
    balk.position.y = hoogte / 2;
    balk.visible = false;
    group.add(balk);

    const balkEdges = new THREE.EdgesGeometry(balkGeo);
    const balkLineMat = new THREE.LineBasicMaterial({ color: 0x80c0ff });
    const balkWire = new THREE.LineSegments(balkEdges, balkLineMat);
    balkWire.position.y = hoogte / 2;
    balkWire.visible = false;
    group.add(balkWire);

    group.position.y = -hoogte / 2 + 0.5;

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const cameraDist = Math.max(grondvlakZijde, hoogte) * 2.2;
    camera.position.set(cameraDist, hoogte * 0.8, cameraDist * 1.2);
    camera.lookAt(0, 0, 0);

    let rotX = 0.15, rotY = 0.4;
    let dragging = false, prevX = 0, prevY = 0;
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
      balk.visible = balkVisibleRef.current;
      balkWire.visible = balkVisibleRef.current;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchmove", onTouchMove);
      pirGeo.dispose(); pirMat.dispose();
      pirEdges.dispose(); pirLineMat.dispose();
      grondGeo.dispose(); grondMat.dispose();
      balkGeo.dispose(); balkMat.dispose();
      balkEdges.dispose(); balkLineMat.dispose();
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    };
  }, [grondvlakZijde, hoogte]);

  useEffect(() => {
    balkVisibleRef.current = toonBalk;
  }, [toonBalk]);

  const handleAntwoord = (waarde) => {
    setGekozen(waarde);
    onAnswer?.(waarde === piramideInhoud, waarde);
  };

  return (
    <div style={{ padding: "1rem 0", color: "var(--color-text)" }}>
      <h3 style={{ textAlign: "center", fontSize: 16, fontWeight: 600, margin: "0 0 0.5rem", color: "var(--color-text-strong)" }}>
        Piramide: grondvlak {grondvlakZijde} × {grondvlakZijde}, hoogte {hoogte}
      </h3>
      <p style={{ textAlign: "center", fontSize: 13, color: "var(--color-text-muted)", margin: "0 0 1rem" }}>
        Sleep om te draaien. De afmetingen staan in de tekening.
      </p>

      <div style={{ background: "var(--color-surface-2, rgba(255,255,255,0.04))", borderRadius: 12, padding: "1rem", marginBottom: "1rem", border: "1px solid var(--color-border, rgba(255,255,255,0.08))" }}>
        <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: 360 }} />
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={() => setToonBalk((v) => !v)}
          style={{ padding: "8px 14px", borderRadius: 8, border: "1px solid var(--color-border, rgba(255,255,255,0.18))", background: "var(--color-surface-2, rgba(255,255,255,0.06))", color: "var(--color-text)", cursor: "pointer", fontSize: 13 }}
        >
          {toonBalk ? "Verberg balk" : "Toon omsluitende balk"}
        </button>
        <button
          type="button"
          onClick={() => setToonBerekening((v) => !v)}
          style={{ padding: "8px 14px", borderRadius: 8, border: "1px solid var(--color-border, rgba(255,255,255,0.18))", background: "var(--color-surface-2, rgba(255,255,255,0.06))", color: "var(--color-text)", cursor: "pointer", fontSize: 13 }}
        >
          {toonBerekening ? "Verberg berekening" : "Toon berekening"}
        </button>
      </div>

      {toonBerekening && (
        <div style={{ background: "rgba(128,192,255,0.10)", borderRadius: 12, padding: "1.25rem", textAlign: "center", marginBottom: "1rem", border: "1px solid rgba(128,192,255,0.35)" }}>
          <p style={{ fontSize: 13, color: "#80c0ff", margin: "0 0 8px", fontWeight: 600 }}>Inhoud piramide</p>
          <p style={{ fontSize: 16, color: "#cfe5ff", margin: "0 0 4px" }}>⅓ × grondvlak × hoogte</p>
          <p style={{ fontSize: 16, color: "#cfe5ff", margin: "0 0 4px" }}>⅓ × ({grondvlakZijde} × {grondvlakZijde}) × {hoogte}</p>
          <p style={{ fontSize: 16, color: "#cfe5ff", margin: "0 0 8px" }}>⅓ × {grondvlakOpp} × {hoogte}</p>
          <p style={{ fontSize: 28, fontWeight: 600, color: "#80c0ff", margin: 0 }}>{piramideInhoud} cm³</p>
          <p style={{ fontSize: 12, color: "#80c0ff", margin: "12px 0 0", opacity: 0.85 }}>
            De piramide is precies ⅓ van de balk eromheen ({balkInhoud} ÷ 3 = {piramideInhoud})
          </p>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
        {OPTIES.map((opt) => {
          const isGekozen = gekozen === opt.waarde;
          const isCorrect = opt.waarde === piramideInhoud;
          const border = !isGekozen
            ? "1px solid var(--color-border, rgba(255,255,255,0.12))"
            : isCorrect ? "2px solid #1D9E75" : "2px solid #E24B4A";
          return (
            <button
              key={opt.waarde}
              type="button"
              onClick={() => handleAntwoord(opt.waarde)}
              style={{
                padding: 12, borderRadius: 12,
                background: "var(--color-surface-2, rgba(255,255,255,0.06))",
                border,
                cursor: "pointer", font: "inherit", fontSize: 16, fontWeight: 600,
                color: "var(--color-text)",
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {gekozen !== null && (
        <div
          style={{
            marginTop: 16, padding: "0.9rem 1.1rem", borderRadius: 12, textAlign: "center",
            background: gekozen === piramideInhoud ? "rgba(29,158,117,0.18)" : "rgba(226,75,74,0.18)",
            color: gekozen === piramideInhoud ? "#3edc9f" : "#ff8a8a",
            border: `1px solid ${gekozen === piramideInhoud ? "rgba(29,158,117,0.45)" : "rgba(226,75,74,0.45)"}`,
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px" }}>
            {gekozen === piramideInhoud ? "Goed gedaan!" : "Probeer nog eens"}
          </p>
          <p style={{ fontSize: 14, margin: 0 }}>
            {gekozen === piramideInhoud
              ? `Een piramide is precies ⅓ van de balk eromheen. ${balkInhoud} ÷ 3 = ${piramideInhoud} cm³.`
              : FOUT_UITLEG[gekozen] || "Kijk goed naar de formule: ⅓ × grondvlak × hoogte."}
          </p>
        </div>
      )}
    </div>
  );
}
