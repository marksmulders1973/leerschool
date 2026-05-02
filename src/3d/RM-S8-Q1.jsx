// ============================================================================
// Track ID: RM-S8-Q1
// Vraag: Wat is de inhoud van een kubus met zijde 5 cm?
// Concept: V_kubus = z × z × z = z³
//
// Door Claude.ai gegenereerd, hier handmatig naar JSX geconverteerd voor
// inbedding in Studiebol-leerpad. onAnswer(correct, gekozen) callback.
// ============================================================================

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function RmS8Q1Kubus({ zijde = 5, onAnswer }) {
  const canvasRef = useRef(null);
  const blokjesRef = useRef([]);
  const animatieRef = useRef(null);

  const [tellerZichtbaar, setTellerZichtbaar] = useState(false);
  const [tellerGetal, setTellerGetal] = useState(0);
  const [toonBerekening, setToonBerekening] = useState(false);
  const [gekozen, setGekozen] = useState(null);

  const totaal = zijde * zijde * zijde;
  const correctAntwoord = `${totaal} cm³`;
  const oppervlakteEenVlak = zijde * zijde;
  const optellenFout = zijde + zijde + zijde;

  const OPTIES = [
    {
      label: correctAntwoord,
      correct: true,
      uitleg: `Een kubus heeft drie keer dezelfde zijde. ${zijde} × ${zijde} × ${zijde} = ${totaal} cm³.`,
    },
    {
      label: `${oppervlakteEenVlak} cm³`,
      correct: false,
      uitleg: `Dat is de oppervlakte van één vlak (${zijde}×${zijde}). Inhoud is 3D — vermenigvuldig drie keer.`,
    },
    {
      label: `${optellenFout} cm³`,
      correct: false,
      uitleg: `Je hebt opgeteld (${zijde}+${zijde}+${zijde}). Bij inhoud vermenigvuldig je: ${zijde}×${zijde}×${zijde}.`,
    },
    {
      label: `${totaal} cm²`,
      correct: false,
      uitleg: "Het getal klopt, maar de eenheid is cm³ (kubiek), niet cm². 3D = drie keer cm.",
    },
  ];

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

    const halfZ = zijde / 2;
    const unitSize = 0.95;
    const offset = (zijde - 1) / 2;
    const disposables = [];
    const blokjes = [];

    for (let x = 0; x < zijde; x++) {
      for (let y = 0; y < zijde; y++) {
        for (let z = 0; z < zijde; z++) {
          const geo = new THREE.BoxGeometry(unitSize, unitSize, unitSize);
          const mat = new THREE.MeshLambertMaterial({ color: 0xef9f27, transparent: true, opacity: 0.7 });
          const mesh = new THREE.Mesh(geo, mat);
          mesh.position.set(x - offset, y - offset, z - offset);
          group.add(mesh);
          disposables.push(geo, mat);

          const edges = new THREE.EdgesGeometry(geo);
          const lineMat = new THREE.LineBasicMaterial({ color: 0xffe082 });
          const wire = new THREE.LineSegments(edges, lineMat);
          wire.position.copy(mesh.position);
          group.add(wire);
          disposables.push(edges, lineMat);

          blokjes.push(mat);
        }
      }
    }
    blokjesRef.current = blokjes;

    const outerGeo = new THREE.BoxGeometry(zijde, zijde, zijde);
    const outerEdges = new THREE.EdgesGeometry(outerGeo);
    const outerLineMat = new THREE.LineBasicMaterial({ color: 0xffd54f });
    group.add(new THREE.LineSegments(outerEdges, outerLineMat));
    disposables.push(outerGeo, outerEdges, outerLineMat);

    const labelKleurHex = 0xe0e6f0;
    const labelKleurCss = "#e0e6f0";

    const maakLijn = (a, b) => {
      const geo = new THREE.BufferGeometry().setFromPoints([a, b]);
      const mat = new THREE.LineBasicMaterial({ color: labelKleurHex });
      disposables.push(geo, mat);
      return new THREE.Line(geo, mat);
    };
    const maakStreep = (p, dir) => {
      const len = 0.2;
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(p.x - dir.x * len, p.y - dir.y * len, p.z - dir.z * len),
        new THREE.Vector3(p.x + dir.x * len, p.y + dir.y * len, p.z + dir.z * len),
      ]);
      const mat = new THREE.LineBasicMaterial({ color: labelKleurHex });
      disposables.push(geo, mat);
      return new THREE.Line(geo, mat);
    };
    const maakLabel = (tekst) => {
      const c = document.createElement("canvas");
      c.width = 256; c.height = 128;
      const ctx = c.getContext("2d");
      ctx.fillStyle = labelKleurCss;
      ctx.font = "bold 64px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(tekst, 128, 64);
      const tex = new THREE.CanvasTexture(c);
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
      const s = new THREE.Sprite(mat);
      s.scale.set(1.6, 0.8, 1);
      disposables.push(tex, mat);
      return s;
    };

    const yOff = -halfZ - 0.4;
    const aF = new THREE.Vector3(-halfZ, yOff, halfZ + 0.3);
    const bF = new THREE.Vector3(halfZ, yOff, halfZ + 0.3);
    group.add(maakLijn(aF, bF));
    group.add(maakStreep(aF, new THREE.Vector3(0, 1, 0)));
    group.add(maakStreep(bF, new THREE.Vector3(0, 1, 0)));
    const lab1 = maakLabel(`${zijde} cm`);
    lab1.position.set(0, yOff - 0.5, halfZ + 0.5);
    group.add(lab1);

    const aH = new THREE.Vector3(-halfZ - 0.6, -halfZ, halfZ);
    const bH = new THREE.Vector3(-halfZ - 0.6, halfZ, halfZ);
    group.add(maakLijn(aH, bH));
    group.add(maakStreep(aH, new THREE.Vector3(1, 0, 0)));
    group.add(maakStreep(bH, new THREE.Vector3(1, 0, 0)));
    const lab2 = maakLabel(`${zijde} cm`);
    lab2.position.set(-halfZ - 1.4, 0, halfZ);
    group.add(lab2);

    const aD = new THREE.Vector3(halfZ + 0.3, yOff, -halfZ);
    const bD = new THREE.Vector3(halfZ + 0.3, yOff, halfZ);
    group.add(maakLijn(aD, bD));
    group.add(maakStreep(aD, new THREE.Vector3(0, 1, 0)));
    group.add(maakStreep(bD, new THREE.Vector3(0, 1, 0)));
    const lab3 = maakLabel(`${zijde} cm`);
    lab3.position.set(halfZ + 0.5, yOff - 0.5, 0);
    group.add(lab3);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const cameraDist = zijde * 2.2;
    camera.position.set(cameraDist, zijde * 1.2, cameraDist * 1.2);
    camera.lookAt(0, 0, 0);

    let rotX = 0.3, rotY = 0.5;
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
      blokjesRef.current = [];
    };
  }, [zijde]);

  const startTelAnimatie = () => {
    if (animatieRef.current) {
      clearInterval(animatieRef.current);
      animatieRef.current = null;
    }
    blokjesRef.current.forEach((mat) => {
      mat.color.setHex(0xef9f27);
      mat.emissive.setHex(0x000000);
    });

    setTellerZichtbaar(true);
    setTellerGetal(0);
    let i = 0;
    animatieRef.current = window.setInterval(() => {
      if (i >= blokjesRef.current.length) {
        if (animatieRef.current) {
          clearInterval(animatieRef.current);
          animatieRef.current = null;
        }
        return;
      }
      blokjesRef.current[i].color.setHex(0xffd54f);
      blokjesRef.current[i].emissive.setHex(0x4a3500);
      i++;
      setTellerGetal(i);
    }, 30);
  };

  const handleAntwoord = (label, correct) => {
    setGekozen(label);
    onAnswer?.(correct, label);
  };

  const gekozenOptie = OPTIES.find((o) => o.label === gekozen);

  return (
    <div style={{ padding: "1rem 0" }}>
      <h3 style={{ textAlign: "center", fontSize: 16, fontWeight: 600, margin: "0 0 0.5rem", color: "#e0e6f0" }}>
        Wat is de inhoud van een kubus met zijde {zijde} cm?
      </h3>
      <p style={{ textAlign: "center", fontSize: 13, color: "rgba(224,230,240,0.7)", margin: "0 0 1rem" }}>
        Sleep om te draaien. Klik op de knoppen om te tellen of de berekening te zien.
      </p>

      <div style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: "1rem",
        marginBottom: "1rem",
        position: "relative",
      }}>
        <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: 360 }} />
        {tellerZichtbaar && (
          <div style={{
            position: "absolute", top: "1.25rem", left: "1.25rem",
            background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,213,79,0.4)",
            padding: "6px 12px", borderRadius: 8, color: "#ffd54f",
            fontWeight: 600, fontSize: 14,
          }}>
            {tellerGetal} / {totaal} blokjes
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={startTelAnimatie}
          style={{
            padding: "8px 14px", borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.04)", color: "#e0e6f0",
            cursor: "pointer", fontSize: 14,
          }}
        >
          Tel de blokjes
        </button>
        <button
          type="button"
          onClick={() => setToonBerekening((v) => !v)}
          style={{
            padding: "8px 14px", borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.04)", color: "#e0e6f0",
            cursor: "pointer", fontSize: 14,
          }}
        >
          {toonBerekening ? "Verberg berekening" : "Toon berekening"}
        </button>
      </div>

      {toonBerekening && (
        <div style={{
          background: "rgba(239,159,39,0.12)",
          border: "1px solid rgba(239,159,39,0.3)",
          borderRadius: 12,
          padding: "1.25rem",
          textAlign: "center",
          marginBottom: "1rem",
        }}>
          <p style={{ fontSize: 13, color: "#ffd54f", margin: "0 0 8px", fontWeight: 600 }}>Inhoud kubus</p>
          <p style={{ fontSize: 16, color: "#e0e6f0", margin: "0 0 4px" }}>z × z × z = z³</p>
          <p style={{ fontSize: 16, color: "#e0e6f0", margin: "0 0 8px" }}>{zijde} × {zijde} × {zijde}</p>
          <p style={{ fontSize: 28, fontWeight: 600, color: "#ffd54f", margin: 0 }}>{totaal} cm³</p>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
        {OPTIES.map((opt) => {
          const isGekozen = gekozen === opt.label;
          const border = !isGekozen
            ? "1px solid rgba(255,255,255,0.15)"
            : opt.correct ? "2px solid #3edc9f" : "2px solid #ff8a8a";
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => handleAntwoord(opt.label, opt.correct)}
              style={{
                padding: 12, borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                border, color: "#e0e6f0",
                cursor: "pointer", font: "inherit",
                fontSize: 16, fontWeight: 600,
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {gekozenOptie && (
        <div
          style={{
            marginTop: 16, padding: "0.9rem 1.1rem", borderRadius: 12, textAlign: "center",
            background: gekozenOptie.correct ? "rgba(29,158,117,0.18)" : "rgba(226,75,74,0.18)",
            color: gekozenOptie.correct ? "#3edc9f" : "#ff8a8a",
            border: `1px solid ${gekozenOptie.correct ? "rgba(29,158,117,0.45)" : "rgba(226,75,74,0.45)"}`,
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px" }}>
            {gekozenOptie.correct ? "Goed gedaan!" : "Probeer nog eens"}
          </p>
          <p style={{ fontSize: 14, margin: 0 }}>{gekozenOptie.uitleg}</p>
        </div>
      )}
    </div>
  );
}
