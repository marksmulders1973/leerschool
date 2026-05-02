// ============================================================================
// Track ID: RM-S6-Q1
// Vraag: Welke figuur heeft inhoud?
// Onderdeel van leerpad: ruimtemeetkunde, stap 6 ("Van 2D naar 3D")
//
// Door Claude.ai gegenereerd, hier handmatig naar JSX geconverteerd voor
// inbedding in het Studiebol-leerpad. onAnswer(correct, optionId) callback
// wordt door LearnPath.jsx gebruikt om de check-flow (attempts, recordAnswer)
// te triggeren — zelfde semantiek als reguliere multiple-choice checks.
// ============================================================================

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const OPTIES = [
  { id: "lijn",      label: "Lijntje",     subtitle: "1 dimensie",  shape: "line",     correct: false },
  { id: "rechthoek", label: "Rechthoek",   subtitle: "2 dimensies", shape: "rect",     correct: false },
  { id: "driehoek",  label: "Driehoek",    subtitle: "2 dimensies", shape: "triangle", correct: false },
  { id: "kubus",     label: "Dobbelsteen", subtitle: "3 dimensies", shape: "cube3d",   correct: true  },
];

const FOUT_UITLEG = {
  lijn:      "Een lijntje heeft alleen lengte. Geen breedte of hoogte. Dus geen inhoud.",
  rechthoek: "Een rechthoek is plat (2D). Hij heeft wel oppervlakte, maar geen inhoud.",
  driehoek:  "Een driehoek is plat (2D). Hij heeft wel oppervlakte, maar geen inhoud.",
};

export default function RmS6Q1InhoudHerkennen({ onAnswer }) {
  const [gekozen, setGekozen] = useState(null);

  const handleClick = (optie) => {
    setGekozen(optie.id);
    onAnswer?.(optie.correct, optie.id);
  };

  const gekozenOptie = OPTIES.find((o) => o.id === gekozen);

  return (
    <div style={{ padding: "1rem 0" }}>
      <h3 style={{ textAlign: "center", fontSize: 16, fontWeight: 500, margin: "0 0 0.5rem", color: "var(--color-text-strong)" }}>
        Welke figuur heeft inhoud?
      </h3>
      <p style={{ textAlign: "center", fontSize: 13, color: "var(--color-text-muted)", margin: "0 0 1.25rem" }}>
        Sleep de dobbelsteen om hem te draaien. Klik op een figuur om je antwoord te kiezen.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
        {OPTIES.map((optie) => {
          const isGekozen = gekozen === optie.id;
          const border = !isGekozen
            ? "1px solid var(--color-border, rgba(255,255,255,0.12))"
            : optie.correct
              ? "2px solid #1D9E75"
              : "2px solid #E24B4A";
          return (
            <button
              key={optie.id}
              type="button"
              onClick={() => handleClick(optie)}
              style={{
                background: "var(--color-surface-2, rgba(255,255,255,0.04))",
                borderRadius: 12,
                padding: "0.9rem 0.4rem",
                border,
                cursor: "pointer",
                textAlign: "center",
                font: "inherit",
                color: "var(--color-text)",
              }}
            >
              <div style={{ height: 130, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {optie.shape === "line"     && <LineSVG />}
                {optie.shape === "rect"     && <RectSVG />}
                {optie.shape === "triangle" && <TriangleSVG />}
                {optie.shape === "cube3d"   && <Cube3D />}
              </div>
              <p style={{ fontSize: 13, fontWeight: 600, margin: "8px 0 2px" }}>{optie.label}</p>
              <p style={{ fontSize: 11, color: "var(--color-text-muted)", margin: 0 }}>{optie.subtitle}</p>
            </button>
          );
        })}
      </div>

      {gekozenOptie && (
        <div
          style={{
            marginTop: 16,
            padding: "0.9rem 1.1rem",
            borderRadius: 12,
            textAlign: "center",
            background: gekozenOptie.correct ? "rgba(29,158,117,0.18)" : "rgba(226,75,74,0.18)",
            color: gekozenOptie.correct ? "#3edc9f" : "#ff8a8a",
            border: `1px solid ${gekozenOptie.correct ? "rgba(29,158,117,0.45)" : "rgba(226,75,74,0.45)"}`,
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px" }}>
            {gekozenOptie.correct ? "Goed gedaan!" : "Probeer nog eens"}
          </p>
          <p style={{ fontSize: 14, margin: 0 }}>
            {gekozenOptie.correct
              ? "Een dobbelsteen heeft lengte, breedte EN hoogte. Daarom heeft hij inhoud."
              : FOUT_UITLEG[gekozenOptie.id]}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── 2D figuren (SVG) ────────────────────────────────────────────────────────

function LineSVG() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100">
      <line x1="10" y1="50" x2="90" y2="50" stroke="#888" strokeWidth="3" />
      <circle cx="10" cy="50" r="4" fill="#444" />
      <circle cx="90" cy="50" r="4" fill="#444" />
    </svg>
  );
}

function RectSVG() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100">
      <rect x="15" y="35" width="70" height="30" fill="#B5D4F4" stroke="#185FA5" strokeWidth="2" />
    </svg>
  );
}

function TriangleSVG() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100">
      <polygon points="50,15 85,80 15,80" fill="#F5C4B3" stroke="#993C1D" strokeWidth="2" />
    </svg>
  );
}

// ─── 3D dobbelsteen (Three.js, draaibaar met muis/touch) ─────────────────────

function Cube3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const width = container.clientWidth || 100;
    const height = container.clientHeight || 130;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const canvas = renderer.domElement;
    canvas.style.cursor = "grab";
    canvas.style.display = "block";

    const geo = new THREE.BoxGeometry(2, 2, 2);
    const mat = new THREE.MeshLambertMaterial({ color: 0x5dcaa5 });
    const cube = new THREE.Mesh(geo, mat);
    scene.add(cube);

    const edges = new THREE.EdgesGeometry(geo);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x0f6e56 });
    cube.add(new THREE.LineSegments(edges, lineMat));

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dir = new THREE.DirectionalLight(0xffffff, 0.5);
    dir.position.set(3, 5, 4);
    scene.add(dir);

    camera.position.set(3.5, 3, 4.5);
    camera.lookAt(0, 0, 0);

    let rotX = 0.4;
    let rotY = 0.6;
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const stop = (e) => e.stopPropagation();
    const onMouseDown = (e) => {
      isDragging = true;
      prevX = e.clientX; prevY = e.clientY;
      canvas.style.cursor = "grabbing";
      e.stopPropagation();
    };
    const onMouseUp = () => { isDragging = false; canvas.style.cursor = "grab"; };
    const onMouseMove = (e) => {
      if (!isDragging) return;
      rotY += (e.clientX - prevX) * 0.01;
      rotX += (e.clientY - prevY) * 0.01;
      prevX = e.clientX; prevY = e.clientY;
    };
    const onTouchStart = (e) => {
      isDragging = true;
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
      e.stopPropagation();
    };
    const onTouchEnd = () => { isDragging = false; };
    const onTouchMove = (e) => {
      if (!isDragging) return;
      rotY += (e.touches[0].clientX - prevX) * 0.01;
      rotX += (e.touches[0].clientY - prevY) * 0.01;
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
    };

    canvas.addEventListener("click", stop);
    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchmove", onTouchMove);

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!isDragging) rotY += 0.005;
      cube.rotation.x = rotX;
      cube.rotation.y = rotY;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      canvas.removeEventListener("click", stop);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchmove", onTouchMove);
      geo.dispose();
      mat.dispose();
      edges.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (container.contains(canvas)) container.removeChild(canvas);
    };
  }, []);

  return <div ref={containerRef} style={{ width: 100, height: 130 }} />;
}
