// Wereldbol — herbruikbare interactieve 3D-aardbol (Mark-idee 16+17 jun 2026).
// Draai met muis of vinger, zoom met muiswiel of 2-vinger-knijp.
//
// Eén bol, meerdere "modi" (prop `modus`) zodat dezelfde aardbol voor
// verschillende vragen gebruikt kan worden:
//   • "werelddelen"        (default) — tik op een werelddeel → welk is het?
//   • "landen"             — prikkers op landen → welk land is dit?
//   • "hoofdsteden"        — prikkers op hoofdsteden → welke hoofdstad ligt hier?
//   • "bezienswaardigheden"— prikkers op gebouwen + rivieren → wat is dit?
//
// Zelf-bevattend: geen externe foto-textuur. We bouwen een wereldkaart op een
// canvas (elk werelddeel een eigen kleur op blauwe oceaan) en plakken die als
// textuur op een Three.js-bol. Bij "werelddelen" leest een tik de KLEUR onder
// de vinger uit het canvas; bij de prikker-modi raycasten we tegen de prikkers.
//
// Kaartdata: world-atlas (Natural Earth, publiek domein), dynamisch geladen.
//
// Contract: <Wereldbol modus="hoofdsteden" onAnswer={(correct, naam) => ...} />

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  HOOFDSTEDEN, BEZIENSWAARDIGHEDEN, LANDEN_NL, MARKER_KLEUR, latLngNaarVec3,
} from "./wereldbolData.js";

// ── Werelddelen: kleur + nette naam ──────────────────────────────────────────
const CONTINENTEN = {
  afrika:          { naam: "Afrika",         kleur: "#f0a030" },
  europa:          { naam: "Europa",         kleur: "#5bd16a" },
  azie:            { naam: "Azië",           kleur: "#e85c5c" },
  "noord-amerika": { naam: "Noord-Amerika",  kleur: "#f2d24b" },
  "zuid-amerika":  { naam: "Zuid-Amerika",   kleur: "#a07bf0" },
  oceanie:         { naam: "Oceanië",        kleur: "#ff8fb0" },
  antarctica:      { naam: "Antarctica",     kleur: "#e6eef4" },
};
const OCEAAN = "#15384f";

// Hex → [r,g,b]
const rgb = (hex) => [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
const KLEUR_NAAR_KEY = Object.entries(CONTINENTEN).map(([key, v]) => ({ key, rgb: rgb(v.kleur) }));

// Welke naam-overrides (landen die een box verkeerd zou indelen)
const OVERRIDES = {
  Russia: "azie", Iceland: "europa", Greenland: "noord-amerika", Turkey: "azie",
  Cyprus: "europa", Malta: "europa", Indonesia: "azie", "Papua New Guinea": "oceanie",
  "New Zealand": "oceanie", Australia: "oceanie", Fiji: "oceanie", Georgia: "azie",
  Armenia: "azie", Azerbaijan: "azie", Kazakhstan: "azie", Egypt: "afrika",
  "East Timor": "azie", "New Caledonia": "oceanie", "Solomon Is.": "oceanie",
  Vanuatu: "oceanie", Antarctica: "antarctica", "Fr. S. Antarctic Lands": "antarctica",
  // Midden-Oosten = Azië (ligt lng<60, lat<36 → zou anders Afrika worden)
  "Saudi Arabia": "azie", Yemen: "azie", Oman: "azie", "United Arab Emirates": "azie",
  Qatar: "azie", Kuwait: "azie", Iraq: "azie", Iran: "azie", Jordan: "azie",
  Israel: "azie", Lebanon: "azie", Syria: "azie", Palestine: "azie", Bahrain: "azie",
};

// Grove indeling van een land in een werelddeel op basis van het zwaartepunt.
function classify(naam, lat, lng) {
  if (OVERRIDES[naam]) return OVERRIDES[naam];
  if (lat < -55) return "antarctica";
  // Amerika's (westelijk halfrond)
  if (lng >= -170 && lng <= -30) {
    if (lat >= 13) return "noord-amerika";
    if (lat >= 7 && lng <= -77) return "noord-amerika"; // Midden-Amerika
    return "zuid-amerika";
  }
  if (lng < -170) return "oceanie"; // verre Stille Oceaan
  // Europa / Afrika
  if (lng < 60) return lat >= 36 ? "europa" : "afrika";
  // Azië / Oceanië
  if (lat <= 0 && lng >= 110) return "oceanie";
  return "azie";
}

// Zwaartepunt + grootste ring van een feature (mainland-proxy).
function featureInfo(feature) {
  const g = feature.geometry;
  if (!g) return null;
  const polys = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : [];
  let best = null, bestLen = -1;
  let sx = 0, sy = 0, n = 0;
  for (const poly of polys) {
    const ring = poly[0];
    if (ring && ring.length > bestLen) { bestLen = ring.length; best = poly; }
  }
  if (!best) return null;
  for (const [x, y] of best[0]) { sx += x; sy += y; n++; }
  return { lng: sx / n, lat: sy / n, polys };
}

// Teken alle landen op een equirectangular canvas, ingekleurd per werelddeel.
function tekenWereldkaart(features, W, H) {
  const cv = document.createElement("canvas");
  cv.width = W; cv.height = H;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  ctx.fillStyle = OCEAAN;
  ctx.fillRect(0, 0, W, H);
  const X = (lng) => ((lng + 180) / 360) * W;
  const Y = (lat) => ((90 - lat) / 180) * H;
  for (const f of features) {
    const info = featureInfo(f);
    if (!info) continue;
    const key = classify(f.properties?.name || "", info.lat, info.lng);
    ctx.fillStyle = CONTINENTEN[key].kleur;
    for (const poly of info.polys) {
      const ring = poly[0]; // buitenring; gaten negeren we (enclaves = zelfde werelddeel)
      if (!ring || ring.length < 3) continue;
      ctx.beginPath();
      let prev = null;
      for (const [lng, lat] of ring) {
        const x = X(lng), y = Y(lat);
        if (prev && Math.abs(lng - prev) > 180) ctx.moveTo(x, y); // antimeridiaan-sprong → niet doortrekken
        else if (prev === null) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        prev = lng;
      }
      ctx.closePath();
      ctx.fill();
    }
  }
  return cv;
}

// Dichtstbijzijnde werelddeel bij een uitgelezen pixel (tolerantie voor randen).
function pixelNaarKey(r, g, b) {
  // oceaan?
  const [or_, og, ob] = rgb(OCEAAN);
  if (Math.abs(r - or_) + Math.abs(g - og) + Math.abs(b - ob) < 40) return null;
  let beste = null, bestD = 1e9;
  for (const c of KLEUR_NAAR_KEY) {
    const d = Math.abs(r - c.rgb[0]) + Math.abs(g - c.rgb[1]) + Math.abs(b - c.rgb[2]);
    if (d < bestD) { bestD = d; beste = c.key; }
  }
  return bestD < 120 ? beste : null;
}

// Maak een klein naam-label (sprite) dat altijd naar de camera kijkt.
function maakLabel(text) {
  const font = 30, padX = 14, padY = 9;
  const cv = document.createElement("canvas");
  const ctx = cv.getContext("2d");
  ctx.font = `bold ${font}px Arial`;
  const w = Math.ceil(ctx.measureText(text).width);
  cv.width = w + padX * 2;
  cv.height = font + padY * 2;
  const c2 = cv.getContext("2d");
  c2.font = `bold ${font}px Arial`;
  c2.fillStyle = "rgba(7,17,29,0.88)";
  const r = 12;
  c2.beginPath();
  c2.moveTo(r, 0); c2.arcTo(cv.width, 0, cv.width, cv.height, r);
  c2.arcTo(cv.width, cv.height, 0, cv.height, r); c2.arcTo(0, cv.height, 0, 0, r);
  c2.arcTo(0, 0, cv.width, 0, r); c2.closePath(); c2.fill();
  c2.fillStyle = "#eaf2fb"; c2.textBaseline = "middle";
  c2.fillText(text, padX, cv.height / 2 + 1);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
  const s = 0.0017;
  spr.scale.set(cv.width * s, cv.height * s, 1);
  return spr;
}

const MARKER_MODI = new Set(["landen", "hoofdsteden", "bezienswaardigheden"]);

export default function Wereldbol({ modus = "werelddelen", onAnswer }) {
  const isMarkerModus = MARKER_MODI.has(modus);
  const mountRef = useRef(null);
  const canvasRef = useRef(null);      // wereldkaart-canvas (voor pixel-pick)
  const [status, setStatus] = useState("laden"); // laden | klaar | fout

  // Werelddelen-vraag
  const [vraag, setVraag] = useState(null);       // { key, opties:[keys] } | null
  const [feedback, setFeedback] = useState(null); // { goed:bool, gekozen:key } | null

  // Prikker-vraag (landen / hoofdsteden / bezienswaardigheden)
  const [mVraag, setMVraag] = useState(null);     // { tekst, antwoord, opties:[naam], extra } | null
  const [mFeedback, setMFeedback] = useState(null); // { goed, gekozen } | null

  const markersRef = useRef([]);       // [{ naam, mesh, sprite, ... }]
  const solvedRef = useRef(new Set());  // namen die al goed beantwoord zijn (label tonen)
  const stelMarkerVraagRef = useRef(() => {});

  // Three.js + data opzetten
  useEffect(() => {
    let renderer, scene, camera, globe, raf, ro;
    let stop = false;
    const mount = mountRef.current;
    const disposables = [];

    async function init() {
      try {
        const [topoMod, tjMod] = await Promise.all([
          import("world-atlas/countries-110m.json"),
          import("topojson-client"),
        ]);
        if (stop) return;
        const topo = topoMod.default || topoMod;
        const feature = tjMod.feature || (tjMod.default && tjMod.default.feature);
        const geo = feature(topo, topo.objects.countries);
        const cv = tekenWereldkaart(geo.features, 2048, 1024);
        canvasRef.current = cv.getContext("2d", { willReadFrequently: true });
        const tex = new THREE.CanvasTexture(cv);
        tex.colorSpace = THREE.SRGBColorSpace;

        const w = mount.clientWidth || 360;
        const h = 360;
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
        camera.position.z = 3.1;
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(w, h);
        mount.appendChild(renderer.domElement);
        renderer.domElement.style.cursor = "grab";
        renderer.domElement.style.touchAction = "none";

        globe = new THREE.Mesh(
          new THREE.SphereGeometry(1, 64, 48),
          // Egaal-helder (geen schaduwzijde) — werelddelen overal goed zichtbaar.
          new THREE.MeshBasicMaterial({ map: tex })
        );
        globe.rotation.y = -2.1; // start met Afrika/Europa naar voren
        scene.add(globe);

        // Lichte sfeer-gloed
        const glow = new THREE.Mesh(
          new THREE.SphereGeometry(1.06, 48, 32),
          new THREE.MeshBasicMaterial({ color: 0x5aa0ff, transparent: true, opacity: 0.10, side: THREE.BackSide })
        );
        scene.add(glow);

        scene.add(new THREE.AmbientLight(0xffffff, 0.95));
        const dir = new THREE.DirectionalLight(0xffffff, 0.55);
        dir.position.set(3, 2, 4);
        scene.add(dir);

        // ── Prikkers plaatsen (alleen in een marker-modus) ──
        const markerMeshes = [];
        if (isMarkerModus) {
          const punten = bouwPunten(modus, geo.features);
          const dotGeo = new THREE.SphereGeometry(0.022, 16, 12);
          disposables.push(dotGeo);
          for (const p of punten) {
            const mat = new THREE.MeshBasicMaterial({ color: p.kleur });
            const mesh = new THREE.Mesh(dotGeo, mat);
            mesh.position.copy(latLngNaarVec3(p.lat, p.lng, 1.012, THREE));
            mesh.userData = p;
            globe.add(mesh); // kind van de bol → draait mee
            disposables.push(mat);
            // klein randje voor zichtbaarheid
            const ring = new THREE.Mesh(
              new THREE.SphereGeometry(0.03, 16, 12),
              new THREE.MeshBasicMaterial({ color: 0x081019, transparent: true, opacity: 0.55 })
            );
            ring.position.copy(mesh.position);
            globe.add(ring);
            disposables.push(ring.geometry, ring.material);

            const sprite = maakLabel(p.naam);
            sprite.position.copy(latLngNaarVec3(p.lat, p.lng, 1.10, THREE));
            sprite.visible = false; // pas tonen als hij goed beantwoord is
            globe.add(sprite);
            disposables.push(sprite.material, sprite.material.map);

            markerMeshes.push(mesh);
            markersRef.current.push({ ...p, mesh, ring, sprite });
          }
        }

        // ── Slepen/draaien (1 vinger/muis) + zoom (muis-wiel & 2-vinger-knijp) ──
        const MIN_Z = 1.55, MAX_Z = 5.2; // hoe dichtbij / ver de camera mag
        const clampZoom = (z) => Math.max(MIN_Z, Math.min(MAX_Z, z));
        const pointers = new Map(); // pointerId → {x,y} (voor pinch met 2 vingers)
        let dragging = false, moved = false, px = 0, py = 0;
        let pinchStartDist = 0, pinchStartZ = 0;
        const dom = renderer.domElement;

        const onDown = (e) => {
          dom.setPointerCapture?.(e.pointerId);
          pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
          if (pointers.size === 1) {
            dragging = true; moved = false; px = e.clientX; py = e.clientY;
            dom.style.cursor = "grabbing";
          } else if (pointers.size === 2) {
            const [a, b] = [...pointers.values()];
            pinchStartDist = Math.hypot(a.x - b.x, a.y - b.y);
            pinchStartZ = camera.position.z;
            moved = true; // 2 vingers = nooit een tik
          }
        };
        const onMove = (e) => {
          if (!pointers.has(e.pointerId)) return;
          pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
          if (pointers.size >= 2) { // knijp-zoom
            const [a, b] = [...pointers.values()];
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (pinchStartDist > 0 && dist > 0) {
              camera.position.z = clampZoom(pinchStartZ * (pinchStartDist / dist));
            }
            return;
          }
          if (!dragging) return;
          const dx = e.clientX - px, dy = e.clientY - py;
          if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
          globe.rotation.y += dx * 0.005;
          globe.rotation.x = Math.max(-1.2, Math.min(1.2, globe.rotation.x + dy * 0.005));
          px = e.clientX; py = e.clientY;
        };
        const onUp = (e) => {
          const wasPinch = pointers.size === 2;
          pointers.delete(e.pointerId);
          dom.style.cursor = "grab";
          if (pointers.size === 0) {
            if (dragging && !moved) handleTap(e);
            dragging = false;
          } else if (pointers.size === 1 && wasPinch) {
            // van knijpen terug naar 1 vinger → draai-referentie resetten
            const [p] = [...pointers.values()];
            px = p.x; py = p.y; dragging = true; moved = true;
          }
        };
        const onWheel = (e) => {
          e.preventDefault(); // niet de pagina scrollen
          camera.position.z = clampZoom(camera.position.z + e.deltaY * 0.0016);
        };
        dom.addEventListener("pointerdown", onDown);
        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
        window.addEventListener("pointercancel", onUp);
        dom.addEventListener("wheel", onWheel, { passive: false });

        const raycaster = new THREE.Raycaster();
        const ndc = new THREE.Vector2();
        const tmp = new THREE.Vector3();
        function handleTap(e) {
          const rect = dom.getBoundingClientRect();
          ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
          raycaster.setFromCamera(ndc, camera);

          if (isMarkerModus) {
            // Tik op een prikker (alleen voorzijde — achterkant zit achter de bol).
            const hits = raycaster.intersectObjects(markerMeshes, false);
            for (const hit of hits) {
              hit.object.getWorldPosition(tmp);
              if (tmp.z > 0) { // voorkant naar de camera
                stelMarkerVraagRef.current(hit.object.userData);
                return;
              }
            }
            return;
          }

          // Werelddelen-modus: lees de kleur onder de tik uit het kaart-canvas.
          const hit = raycaster.intersectObject(globe)[0];
          if (!hit || !hit.uv) return;
          const cx = Math.floor(hit.uv.x * cv.width);
          const cy = Math.floor((1 - hit.uv.y) * cv.height);
          const px2 = canvasRef.current.getImageData(cx, cy, 1, 1).data;
          const key = pixelNaarKey(px2[0], px2[1], px2[2]);
          if (!key) return; // oceaan / niets → negeer
          stelVraag(key);
        }

        // resize
        ro = new ResizeObserver(() => {
          const ww = mount.clientWidth || 360;
          camera.aspect = ww / h; camera.updateProjectionMatrix();
          renderer.setSize(ww, h);
        });
        ro.observe(mount);

        // render-lus (autodraai als je niet sleept). Labels tonen we alleen aan
        // de voorzijde + als de prikker al goed beantwoord is.
        const loop = () => {
          if (stop) return;
          if (!dragging) globe.rotation.y += 0.0016;
          if (isMarkerModus) {
            for (const m of markersRef.current) {
              m.mesh.getWorldPosition(tmp);
              const front = tmp.z > 0.05;
              const toon = front && solvedRef.current.has(m.naam);
              if (m.sprite.visible !== toon) m.sprite.visible = toon;
            }
          }
          renderer.render(scene, camera);
          raf = requestAnimationFrame(loop);
        };
        loop();
        setStatus("klaar");

        // opruimen
        cleanup = () => {
          dom.removeEventListener("pointerdown", onDown);
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("pointerup", onUp);
          window.removeEventListener("pointercancel", onUp);
          dom.removeEventListener("wheel", onWheel);
          ro && ro.disconnect();
          cancelAnimationFrame(raf);
          tex.dispose();
          glow.geometry.dispose(); glow.material.dispose();
          for (const d of disposables) d.dispose && d.dispose();
          globe.geometry.dispose(); globe.material.dispose();
          renderer.dispose();
          if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
        };
      } catch (err) {
        console.error("Wereldbol kon niet laden:", err);
        setStatus("fout");
      }
    }
    let cleanup = () => {};
    init();
    return () => { stop = true; markersRef.current = []; solvedRef.current = new Set(); cleanup(); };
  }, [modus]);

  // ── Werelddelen-vraag ───────────────────────────────────────────────────────
  function stelVraag(key) {
    if (vraag || feedback) return; // al bezig
    const afleiders = shuffle(Object.keys(CONTINENTEN).filter((k) => k !== key)).slice(0, 3);
    const opties = shuffle([key, ...afleiders]);
    setVraag({ key, opties });
  }
  function kies(optie) {
    if (!vraag || feedback) return;
    const goed = optie === vraag.key;
    setFeedback({ goed, gekozen: optie });
    onAnswer?.(goed, CONTINENTEN[vraag.key].naam);
    if (goed) {
      setTimeout(() => { setVraag(null); setFeedback(null); }, 1400);
    }
  }
  function opnieuw() { setFeedback(null); }

  // ── Prikker-vraag (landen / hoofdsteden / bezienswaardigheden) ──────────────
  function stelMarkerVraag(punt) {
    if (mVraag || mFeedback) return;
    const alle = markersRef.current;
    const afleiders = shuffle(alle.filter((m) => m.naam !== punt.naam).map((m) => m.naam)).slice(0, 3);
    const opties = shuffle([punt.naam, ...afleiders]);
    const tekst =
      modus === "landen" ? "Welk land is hier gemarkeerd? 📍" :
      modus === "hoofdsteden" ? "Welke hoofdstad ligt op deze plek? 📍" :
      "Wat is dit? 📍";
    setMVraag({ tekst, antwoord: punt.naam, opties, punt });
  }
  stelMarkerVraagRef.current = stelMarkerVraag;

  function kiesMarker(optie) {
    if (!mVraag || mFeedback) return;
    const goed = optie === mVraag.antwoord;
    setMFeedback({ goed, gekozen: optie });
    onAnswer?.(goed, mVraag.antwoord);
    if (goed) {
      solvedRef.current.add(mVraag.antwoord); // label voortaan tonen
      setTimeout(() => { setMVraag(null); setMFeedback(null); }, 1500);
    }
  }
  function opnieuwMarker() { setMFeedback(null); }

  // Helpteksten per modus
  const startHint =
    modus === "landen" ? "🌍 Draai/zoom de aardbol en tik op een gekleurde prikker — welk land is dat?" :
    modus === "hoofdsteden" ? "🌍 Draai/zoom de aardbol en tik op een gouden prikker — welke hoofdstad ligt daar?" :
    modus === "bezienswaardigheden" ? "🌍 Draai/zoom de aardbol en tik op een prikker — welk gebouw of welke rivier is dat?" :
    "🌍 Draai de aardbol (sleep/veeg), zoom met je muiswiel of knijp met 2 vingers, en tik op een werelddeel.";

  const markerFeedbackInfo = mFeedback && mVraag && (() => {
    const p = mVraag.punt;
    if (modus === "hoofdsteden") return `${p.naam} is de hoofdstad van ${p.land}.`;
    if (modus === "bezienswaardigheden") return `${p.naam} ${p.emoji} — ${p.waar}.`;
    if (modus === "landen") return `Dit is ${p.naam}.`;
    return "";
  })();

  return (
    <div style={{ width: "100%" }}>
      <div style={{
        textAlign: "center", fontSize: 14, color: "#cfe0f0", marginBottom: 6,
        fontFamily: "'Fredoka',sans-serif",
      }}>
        {status === "laden" && "🌍 De aardbol laadt…"}
        {status === "fout" && "De aardbol kon niet laden — tik op de knop hieronder."}
        {status === "klaar" && !vraag && !mVraag && startHint}
        {status === "klaar" && vraag && !feedback && "Welk werelddeel heb je aangetikt?"}
        {status === "klaar" && mVraag && !mFeedback && mVraag.tekst}
        {feedback && (feedback.goed ? "✅ Goed gedaan!" : "❌ Bijna — probeer nog eens.")}
        {mFeedback && (mFeedback.goed ? `✅ Goed! ${markerFeedbackInfo}` : "❌ Bijna — probeer nog eens.")}
      </div>

      <div
        ref={mountRef}
        style={{
          width: "100%", height: 360, borderRadius: 16, overflow: "hidden",
          background: "radial-gradient(circle at 50% 40%, #0d2640 0%, #07111d 100%)",
          display: status === "klaar" ? "block" : "flex",
          alignItems: "center", justifyContent: "center",
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)",
        }}
      >
        {status === "laden" && <span style={{ color: "#9fc0e0" }}>laden…</span>}
      </div>

      {/* Werelddelen-vraagpaneel */}
      {status === "klaar" && vraag && (
        <div style={{ marginTop: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {vraag.opties.map((opt) => {
              const isGoed = feedback && opt === vraag.key;
              const isFoutGekozen = feedback && opt === feedback.gekozen && !feedback.goed;
              return (
                <button
                  key={opt}
                  onClick={() => kies(opt)}
                  disabled={!!feedback}
                  style={{
                    padding: "12px 10px", borderRadius: 12, fontSize: 15, fontWeight: 700,
                    cursor: feedback ? "default" : "pointer",
                    fontFamily: "'Fredoka',sans-serif",
                    border: "2px solid " + (isGoed ? "#2e7d32" : isFoutGekozen ? "#c62828" : "rgba(255,255,255,0.18)"),
                    background: isGoed ? "rgba(46,125,50,0.35)" : isFoutGekozen ? "rgba(198,40,40,0.30)" : "rgba(255,255,255,0.07)",
                    color: "#eaf2fb",
                  }}
                >
                  <span style={{ display: "inline-block", width: 12, height: 12, borderRadius: 3, marginRight: 8, verticalAlign: "middle", background: CONTINENTEN[opt].kleur }} />
                  {CONTINENTEN[opt].naam}
                </button>
              );
            })}
          </div>
          {feedback && !feedback.goed && (
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <button onClick={opnieuw} style={{ padding: "8px 18px", borderRadius: 10, border: "none", background: "#2563eb", color: "#fff", fontWeight: 700, cursor: "pointer", fontFamily: "'Fredoka',sans-serif" }}>
                Probeer nog eens
              </button>
            </div>
          )}
        </div>
      )}

      {/* Prikker-vraagpaneel (landen / hoofdsteden / bezienswaardigheden) */}
      {status === "klaar" && mVraag && (
        <div style={{ marginTop: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {mVraag.opties.map((opt) => {
              const isGoed = mFeedback && opt === mVraag.antwoord;
              const isFoutGekozen = mFeedback && opt === mFeedback.gekozen && !mFeedback.goed;
              return (
                <button
                  key={opt}
                  onClick={() => kiesMarker(opt)}
                  disabled={!!mFeedback}
                  style={{
                    padding: "12px 10px", borderRadius: 12, fontSize: 15, fontWeight: 700,
                    cursor: mFeedback ? "default" : "pointer",
                    fontFamily: "'Fredoka',sans-serif",
                    border: "2px solid " + (isGoed ? "#2e7d32" : isFoutGekozen ? "#c62828" : "rgba(255,255,255,0.18)"),
                    background: isGoed ? "rgba(46,125,50,0.35)" : isFoutGekozen ? "rgba(198,40,40,0.30)" : "rgba(255,255,255,0.07)",
                    color: "#eaf2fb",
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {mFeedback && !mFeedback.goed && (
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <button onClick={opnieuwMarker} style={{ padding: "8px 18px", borderRadius: 10, border: "none", background: "#2563eb", color: "#fff", fontWeight: 700, cursor: "pointer", fontFamily: "'Fredoka',sans-serif" }}>
                Probeer nog eens
              </button>
            </div>
          )}
        </div>
      )}

      {/* Fallback als WebGL niet werkt → leerpad niet blokkeren */}
      {status === "fout" && (
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <button onClick={() => onAnswer?.(true, "wereld")} style={{ padding: "10px 20px", borderRadius: 10, border: "none", background: "#2563eb", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
            Ga verder
          </button>
        </div>
      )}
    </div>
  );
}

// Factory zodat een leerpad-stap een modus kan kiezen, net als makeGeoCheck:
//   interactiveComponent: makeWereldbol("hoofdsteden")
export function makeWereldbol(modus = "werelddelen") {
  const Comp = (props) => <Wereldbol modus={modus} {...props} />;
  Comp.displayName = `Wereldbol(${modus})`;
  return Comp;
}

// Bouw de prikker-lijst voor een modus.
function bouwPunten(modus, features) {
  if (modus === "hoofdsteden") {
    return HOOFDSTEDEN.map((h) => ({ ...h, kleur: MARKER_KLEUR.hoofdstad }));
  }
  if (modus === "bezienswaardigheden") {
    return BEZIENSWAARDIGHEDEN.map((b) => ({
      ...b, kleur: b.soort === "rivier" ? MARKER_KLEUR.rivier : MARKER_KLEUR.gebouw,
    }));
  }
  if (modus === "landen") {
    // Prikker op het zwaartepunt van het land uit de kaartdata zelf.
    const punten = [];
    for (const f of features) {
      const nl = LANDEN_NL[f.properties?.name];
      if (!nl) continue;
      const info = featureInfo(f);
      if (!info) continue;
      punten.push({ naam: nl, land: nl, lat: info.lat, lng: info.lng, kleur: MARKER_KLEUR.land });
    }
    return punten;
  }
  return [];
}

// Fisher-Yates shuffle (kopie, muteert niet).
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
