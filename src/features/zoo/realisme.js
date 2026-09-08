// realisme.js — de "echte" texturen en vormen voor het park (Mark 5 sep 2026:
// "maak het park net zo realistisch als het eiland van Brian — steel al zijn
// realistische ideeën, maar het park moet mijn park blijven").
//
// Alles hier is overgenomen uit Brian's eiland (deluxeedition/eiland.html) en
// aangepast aan three r18x + react-three-fiber. Het zijn losse bouwstenen:
//   • grasTextuur / zandTextuur / vlekTextuur  — geschilderd gras (sprietje voor
//     sprietje), zandkorrels en grote vlekken; opgeslagen "rond 128 = neutraal"
//     zodat ze een kleur lichter óf donkerder kunnen maken (×2 in de shader)
//   • grondShader(material)                     — plakt die texturen op de
//     parkvloer via de WERELD-positie (naadloos over alle blokken heen), mengt
//     twee tegel-maten tegen het dambord-effect en vervaagt ver weg
//   • grasPolGeometrie / grasPolMateriaal       — 3D-graspollen met wind in de shader
//   • granietTextuur / steenGeometrie           — rotsen uit meerdere gebroken
//     brokken, met sedimentlagen, verwering en mos
//   • bastTextuur / palmStamGeometrie / bladTextuur / bladGeometrie — palmen
//   • schorsTextuur / loofTextuur               — loofbomen (stam + bladerkroon)
//   • luchtTextuur                              — rondom-panorama met ruis-wolken
// Niets hier weet iets van leerpaden, poorten of het park-raster: puur uiterlijk.
import {
  BufferAttribute, BufferGeometry, CanvasTexture, Color, Euler, Float32BufferAttribute,
  IcosahedronGeometry, LinearFilter, Matrix4, Quaternion, RepeatWrapping, Vector3,
  ClampToEdgeWrapping, MeshStandardMaterial, DoubleSide,
} from "three";

// ── deterministisch toeval: zelfde look elke sessie, en geen re-render-ruis ──
function maakVast(seed) {
  let z = seed >>> 0 || 1234567;
  return () => { z = (z * 16807) % 2147483647; return z / 2147483647; };
}
export function ruis3(x, y, z) {
  const s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453;
  return s - Math.floor(s);
}
const stap = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const LAAG = (() => { try { return (navigator.deviceMemory || 8) <= 4 || (navigator.hardwareConcurrency || 8) <= 4; } catch { return false; } })();

// alles wat dicht bij een rand ligt tekenen we ook aan de overkant → naadloos
function metWrap(N, x, y, r, teken) {
  const xs = [0]; if (x < r) xs.push(N); else if (x > N - r) xs.push(-N);
  const ys = [0]; if (y < r) ys.push(N); else if (y > N - r) ys.push(-N);
  for (const ox of xs) for (const oy of ys) teken(ox, oy);
}
// gemiddelde van een canvas precies op 128 (= neutraal), met optioneel extra contrast
function neutraal(g, N, contrast = 1) {
  const beeld = g.getImageData(0, 0, N, N), d = beeld.data, som = [0, 0, 0];
  for (let i = 0; i < d.length; i += 4) { som[0] += d[i]; som[1] += d[i + 1]; som[2] += d[i + 2]; }
  const n = d.length / 4, k = [128 * n / som[0], 128 * n / som[1], 128 * n / som[2]];
  for (let i = 0; i < d.length; i += 4) {
    d[i] = Math.max(0, Math.min(255, 128 + (d[i] * k[0] - 128) * contrast));
    d[i + 1] = Math.max(0, Math.min(255, 128 + (d[i + 1] * k[1] - 128) * contrast));
    d[i + 2] = Math.max(0, Math.min(255, 128 + (d[i + 2] * k[2] - 128) * contrast));
  }
  g.putImageData(beeld, 0, 0);
}
function enc(f, r, g, b) {
  const k = 128 * f;
  return "rgb(" + Math.round(Math.min(255, k * r)) + "," + Math.round(Math.min(255, k * g)) + "," + Math.round(Math.min(255, k * b)) + ")";
}
const cache = {};
const once = (naam, maak) => (cache[naam] ||= maak());

// ══════════════════════════════════════════════════════════════════
// GRAS: duizenden sprietjes op een naadloos canvas
// ══════════════════════════════════════════════════════════════════
export const grasTextuur = () => once("gras", () => {
  const N = LAAG ? 512 : 1024, s = N / 1024;
  const vast = maakVast(1234567);
  const c = document.createElement("canvas"); c.width = c.height = N;
  const g = c.getContext("2d");
  g.fillStyle = enc(0.42, 0.90, 1.0, 0.70); g.fillRect(0, 0, N, N);
  for (let i = 0; i < 70; i++) {
    const x = vast() * N, y = vast() * N, r = (40 + vast() * 120) * s, donker = vast() < 0.5;
    metWrap(N, x, y, r, (ox, oy) => {
      const v = g.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, r);
      v.addColorStop(0, donker ? "rgba(40,44,28,0.45)" : "rgba(120,124,80,0.30)");
      v.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = v; g.fillRect(x + ox - r, y + oy - r, r * 2, r * 2);
    });
  }
  const plukken = [], droog = [];
  for (let i = 0; i < 9; i++) plukken.push({ x: vast() * N, y: vast() * N, r: (70 + vast() * 150) * s });
  for (let i = 0; i < 5; i++) droog.push({ x: vast() * N, y: vast() * N, r: (50 + vast() * 90) * s });
  const inPlek = (lijst, x, y) => {
    let m = 0;
    for (const p of lijst) {
      let dx = Math.abs(x - p.x), dy = Math.abs(y - p.y);
      dx = Math.min(dx, N - dx); dy = Math.min(dy, N - dy);
      const d = Math.hypot(dx, dy) / p.r;
      if (d < 1) m = Math.max(m, 1 - d * d);
    }
    return m;
  };
  const AANTAL = LAAG ? 9000 : 30000, sprieten = [];
  for (let i = 0; i < AANTAL; i++) {
    const x = vast() * N, y = vast() * N, wild = inPlek(plukken, x, y), dor = inPlek(droog, x, y);
    let f = 0.62 + vast() * 0.78 + wild * 0.40;
    let r = 0.90, gr = 1.00, b = 0.74;
    if (vast() < 0.10 + wild * 0.55) { r = 1.16; gr = 1.08; b = 0.60; }
    if (vast() < 0.035 + dor * 0.55) { r = 1.22; gr = 1.00; b = 0.58; f = Math.max(f, 1.0); }
    if (vast() < 0.02) { r = 1.10; gr = 0.82; b = 0.52; f *= 0.9; }
    sprieten.push({ x, y, f, r, gr, b, l: (11 + vast() * 26) * s * (1 + wild * 0.25), w: (1.4 + vast() * 2.0) * s, hoek: vast() * Math.PI * 2, buig: (vast() - 0.5) * 0.9 });
  }
  sprieten.sort((a, b) => a.f - b.f);   // donker onderop, licht bovenop = diepte
  g.lineCap = "round";
  for (const sp of sprieten) {
    const dx = Math.cos(sp.hoek), dz = Math.sin(sp.hoek), px = -dz, pz = dx;
    const mx = dx * sp.l * 0.5 + px * sp.buig * sp.l * 0.5, my = dz * sp.l * 0.5 + pz * sp.buig * sp.l * 0.5;
    const ex = dx * sp.l + px * sp.buig * sp.l * 1.4, ey = dz * sp.l + pz * sp.buig * sp.l * 1.4;
    metWrap(N, sp.x, sp.y, sp.l * 1.6, (ox, oy) => {
      const x = sp.x + ox, y = sp.y + oy;
      g.strokeStyle = enc(sp.f * 0.86, sp.r, sp.gr, sp.b); g.lineWidth = sp.w;
      g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + mx * 0.6, y + my * 0.6, x + mx, y + my); g.stroke();
      g.strokeStyle = enc(sp.f * 1.18, sp.r, sp.gr, sp.b); g.lineWidth = sp.w * 0.55;
      g.beginPath(); g.moveTo(x + mx, y + my); g.quadraticCurveTo(x + (mx + ex) * 0.5, y + (my + ey) * 0.5, x + ex, y + ey); g.stroke();
    });
  }
  for (let i = 0; i < (LAAG ? 150 : 500); i++) {
    const x = vast() * N, y = vast() * N;
    if (vast() > inPlek(plukken, x, y) * 1.4) continue;
    const r = (1.2 + vast() * 2.2) * s;
    g.fillStyle = enc(1.55, 1.05, 1.05, 0.85);
    metWrap(N, x, y, r, (ox, oy) => { g.beginPath(); g.arc(x + ox, y + oy, r, 0, 6.3); g.fill(); });
  }
  neutraal(g, N, 1.28);
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping;
  t.anisotropy = 4;
  return t;
});

export const zandTextuur = () => once("zand", () => {
  const N = LAAG ? 256 : 512, vast = maakVast(777);
  const c = document.createElement("canvas"); c.width = c.height = N;
  const g = c.getContext("2d"), beeld = g.createImageData(N, N), d = beeld.data;
  for (let y = 0; y < N; y++) {
    const rib = Math.sin((y / N) * Math.PI * 2 * 22 + Math.sin((y / N) * Math.PI * 2 * 3) * 1.5);
    for (let x = 0; x < N; x++) {
      const golf = Math.sin((y / N) * Math.PI * 2 * 22 + Math.sin((x / N) * Math.PI * 2 * 3) * 1.2) * 7 + rib * 2;
      let v = 128 + golf + (vast() - 0.5) * 46, r = v, gr = v, b = v;
      if (vast() < 0.012) { r += 40; gr += 36; b += 30; } else if (vast() < 0.010) { r -= 28; gr -= 30; b -= 26; } else if (vast() < 0.03) { r += 6; gr += 2; b -= 8; }
      const i = (y * N + x) * 4; d[i] = r; d[i + 1] = gr; d[i + 2] = b; d[i + 3] = 255;
    }
  }
  g.putImageData(beeld, 0, 0);
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping; t.anisotropy = 4;
  return t;
});

export const vlekTextuur = () => once("vlek", () => {
  const N = 256, vast = maakVast(4242);
  const c = document.createElement("canvas"); c.width = c.height = N;
  const g = c.getContext("2d");
  g.fillStyle = "rgb(128,128,128)"; g.fillRect(0, 0, N, N);
  for (let i = 0; i < 90; i++) {
    const x = vast() * N, y = vast() * N, r = 18 + vast() * 70, licht = vast() < 0.5;
    metWrap(N, x, y, r, (ox, oy) => {
      const v = g.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, r);
      v.addColorStop(0, licht ? "rgba(168,162,132,0.38)" : "rgba(90,102,94,0.38)");
      v.addColorStop(1, "rgba(128,128,128,0)");
      g.fillStyle = v; g.fillRect(x + ox - r, y + oy - r, r * 2, r * 2);
    });
  }
  neutraal(g, N);
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping;
  return t;
});

// ══════════════════════════════════════════════════════════════════
// DE GRONDSHADER: gras/zand-textuur op wereldpositie, mét vervaging in de verte.
// Werkt op elk MeshStandardMaterial (instanced of niet). Per instantie kan een
// attribuut `grasMix` (1 = gras, 0 = zand/steen-korrel) meegegeven worden;
// ontbreekt het, dan is alles gras (grasMixVast).
// ══════════════════════════════════════════════════════════════════
export function grondShader(material, { grasMixVast = null, tegel = 2.6 } = {}) {
  material.onBeforeCompile = (sh) => {
    sh.uniforms.grasMap = { value: grasTextuur() };
    sh.uniforms.zandMap = { value: zandTextuur() };
    sh.uniforms.vlekMap = { value: vlekTextuur() };
    sh.uniforms.tegel = { value: tegel };
    const mixDecl = grasMixVast === null ? "attribute float grasMix;" : "";
    const mixZet = grasMixVast === null ? "vGrasMix = grasMix;" : `vGrasMix = ${grasMixVast.toFixed(3)};`;
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", `#include <common>\n${mixDecl}\nvarying float vGrasMix;\nvarying vec3 vWpos;`)
      .replace("#include <project_vertex>", `#include <project_vertex>
        ${mixZet}
        { vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          vWpos = (modelMatrix * wp).xyz; }`);
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", `#include <common>
        uniform sampler2D grasMap; uniform sampler2D zandMap; uniform sampler2D vlekMap; uniform float tegel;
        varying float vGrasMix; varying vec3 vWpos;`)
      .replace("#include <map_fragment>", `#include <map_fragment>
        { vec2 uv = vWpos.xz / tegel;
          vec3 gras = texture2D(grasMap, uv).rgb;
          vec2 uvB = vec2(uv.x * 0.43 - uv.y * 0.31, uv.x * 0.31 + uv.y * 0.43);
          gras = (mix(gras, texture2D(grasMap, uvB).rgb, 0.5) - 0.5) * 1.35 + 0.5;
          vec3 zand = texture2D(zandMap, uv * 0.9).rgb;
          vec3 vlek = texture2D(vlekMap, uv / 41.0).rgb;
          vec3 detail = mix(zand, gras, clamp(vGrasMix, 0.0, 1.0)) * 2.0;
          float ver = smoothstep(20.0, 90.0, length(vViewPosition));
          detail = mix(detail, vec3(1.0), ver);
          diffuseColor.rgb *= detail * vlek * 2.0; }`);
  };
  material.customProgramCacheKey = () => "grond-" + (grasMixVast === null ? "attr" : grasMixVast) + "-" + tegel;
  return material;
}

// ══════════════════════════════════════════════════════════════════
// GRASPOLLEN: 5 sprietjes die naar buiten waaieren, wuivend in de wind (shader)
// ══════════════════════════════════════════════════════════════════
export function grasPolGeometrie(sprieten = LAAG ? 4 : 5) {
  const pos = [], kleur = [], idx = [];
  let v = 0, t = 0;
  const beetje = () => { t += 1.37; return Math.sin(t * 91.7) * 0.5 + 0.5; };
  for (let i = 0; i < sprieten; i++) {
    const a = (i / sprieten) * Math.PI * 2 + beetje() * 0.9;
    const H = 0.19 + beetje() * 0.34, buig = 0.15 + beetje() * 0.30;
    const dx = Math.cos(a), dz = Math.sin(a), W = 0.021, p1 = 0.58;
    const x1 = dx * buig * p1 * p1, y1 = H * p1, z1 = dz * buig * p1 * p1;
    const tx = dx * buig, ty = H, tz = dz * buig, w1 = W * 0.55;
    pos.push(-dz * W, 0, dx * W, dz * W, 0, -dx * W, x1 + dz * w1, y1, z1 - dx * w1, x1 - dz * w1, y1, z1 + dx * w1);
    for (const l of [0.72, 0.72, 1.10, 1.10]) kleur.push(l, l, l);
    idx.push(v, v + 1, v + 2, v, v + 2, v + 3); v += 4;
    pos.push(x1 - dz * w1, y1, z1 + dx * w1, x1 + dz * w1, y1, z1 - dx * w1, tx, ty, tz);
    for (const l of [1.10, 1.10, 1.32]) kleur.push(l, l, l);
    idx.push(v, v + 1, v + 2); v += 3;
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  g.setAttribute("color", new Float32BufferAttribute(kleur, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Alle wind-uniforms van alle materialen: één keer per beeldje bijwerken via windTik(t).
const windUniforms = new Set();
export function windTik(t) { for (const u of windUniforms) u.value = t; }

// Voegt wind toe aan een materiaal: alles boven `vanaf` (in object-ruimte, meter)
// buigt mee, sterker naar boven; de golf hangt af van de wereldpositie.
export function metWind(material, { vanaf = 0, kracht = 0.42, schaal = 0.55 } = {}) {
  material.onBeforeCompile = (sh) => {
    sh.uniforms.tijd = { value: 0 };
    windUniforms.add(sh.uniforms.tijd);
    sh.vertexShader = ("uniform float tijd;\n" + sh.vertexShader).replace(
      "#include <project_vertex>",
      `vec4 mvPosition = vec4(transformed, 1.0);
      #ifdef USE_BATCHING
        mvPosition = batchingMatrix * mvPosition;
      #endif
      #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
      #endif
      { float hoog = max(transformed.y - ${vanaf.toFixed(2)}, 0.0);
        float vlaag = 0.55 + 0.45 * sin(tijd * 0.31);
        float golf = sin(tijd * 1.9 + mvPosition.x * ${schaal.toFixed(3)} + mvPosition.z * ${(schaal * 0.76).toFixed(3)});
        mvPosition.x += golf * hoog * ${kracht.toFixed(3)} * vlaag;
        mvPosition.z += golf * hoog * ${(kracht * 0.64).toFixed(3)} * vlaag; }
      mvPosition = modelViewMatrix * mvPosition;
      gl_Position = projectionMatrix * mvPosition;`
    );
  };
  material.customProgramCacheKey = () => `wind-${vanaf}-${kracht}-${schaal}`;
  return material;
}
export const grasPolMateriaal = () => once("grasPolMat", () =>
  metWind(new MeshStandardMaterial({ vertexColors: true, side: DoubleSide, roughness: 1, metalness: 0 }), { vanaf: 0, kracht: 0.42, schaal: 0.55 }));

// ══════════════════════════════════════════════════════════════════
// ROTSEN: graniet-textuur + brokken die door elkaar heen zitten
// ══════════════════════════════════════════════════════════════════
export const granietTextuur = () => once("graniet", () => {
  const vast = maakVast(99), c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#8e8c84"; g.fillRect(0, 0, 256, 256);
  const beeld = g.getImageData(0, 0, 256, 256);
  for (let i = 0; i < beeld.data.length; i += 4) {
    const n = (vast() - 0.5) * 62;
    beeld.data[i] = Math.max(0, Math.min(255, beeld.data[i] + n));
    beeld.data[i + 1] = Math.max(0, Math.min(255, beeld.data[i + 1] + n));
    beeld.data[i + 2] = Math.max(0, Math.min(255, beeld.data[i + 2] + n * 0.9));
  }
  g.putImageData(beeld, 0, 0);
  for (let i = 0; i < 1400; i++) {
    const x = vast() * 256, y = vast() * 256, r = 0.8 + vast() * 3.4, licht = vast() > 0.45;
    g.fillStyle = licht ? "rgba(232,229,220," + (0.30 + vast() * 0.45) + ")" : "rgba(52,50,46," + (0.25 + vast() * 0.40) + ")";
    g.beginPath(); g.ellipse(x, y, r, r * (0.45 + vast() * 0.8), vast() * 3.14, 0, 6.3); g.fill();
  }
  for (let i = 0; i < 34; i++) {
    const x = vast() * 256, y = vast() * 256, r = 8 + vast() * 30;
    const v = g.createRadialGradient(x, y, 0, x, y, r);
    v.addColorStop(0, "rgba(48,46,42,0.30)"); v.addColorStop(1, "rgba(48,46,42,0)");
    g.fillStyle = v; g.beginPath(); g.arc(x, y, r, 0, 6.3); g.fill();
  }
  g.lineCap = "round";
  for (let i = 0; i < 9; i++) {
    let x = vast() * 256, y = vast() * 256, hoek = vast() * 6.3;
    g.strokeStyle = "rgba(238,235,226," + (0.35 + vast() * 0.45) + ")"; g.lineWidth = 0.6 + vast() * 2.4;
    g.beginPath(); g.moveTo(x, y);
    for (let j = 0; j < 26; j++) { hoek += (vast() - 0.5) * 0.9; x += Math.cos(hoek) * 11; y += Math.sin(hoek) * 11; g.lineTo(x, y); }
    g.stroke();
  }
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping; t.anisotropy = 4;
  return t;
});

function zetSteenUV(g, schaal) {
  const pos = g.attributes.position, uv = new Float32Array(pos.count * 2);
  const a = new Vector3(), b = new Vector3(), c = new Vector3(), ab = new Vector3(), ac = new Vector3(), vn = new Vector3();
  for (let i = 0; i < pos.count; i += 3) {
    a.set(pos.getX(i), pos.getY(i), pos.getZ(i)); b.set(pos.getX(i + 1), pos.getY(i + 1), pos.getZ(i + 1)); c.set(pos.getX(i + 2), pos.getY(i + 2), pos.getZ(i + 2));
    vn.crossVectors(ab.subVectors(b, a), ac.subVectors(c, a)).normalize();
    const ax = Math.abs(vn.x), ay = Math.abs(vn.y), az = Math.abs(vn.z);
    for (let j = 0; j < 3; j++) {
      const x = pos.getX(i + j), y = pos.getY(i + j), z = pos.getZ(i + j);
      let u, v;
      if (ax >= ay && ax >= az) { u = z; v = y; } else if (ay >= az) { u = x; v = z; } else { u = x; v = y; }
      uv[(i + j) * 2] = u * schaal; uv[(i + j) * 2 + 1] = v * schaal;
    }
  }
  g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
}
function maakBrok(zaadje, detail) {
  const g = new IcosahedronGeometry(1, detail), pos = g.attributes.position;
  const VLAKKEN = 6 + Math.floor(ruis3(zaadje, 3.1, 7.7) * 4), vlakken = [], goud = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < VLAKKEN; i++) {
    const y = 1 - (i / (VLAKKEN - 1)) * 2, r = Math.sqrt(Math.max(0, 1 - y * y)), a = goud * i + zaadje;
    const n = new Vector3(Math.cos(a) * r, y, Math.sin(a) * r);
    n.x += (ruis3(i, zaadje, 1.3) - 0.5) * 0.9; n.y += (ruis3(i, zaadje, 2.7) - 0.5) * 0.9; n.z += (ruis3(i, zaadje, 5.1) - 0.5) * 0.9;
    n.normalize();
    vlakken.push({ n, d: 0.40 + Math.pow(ruis3(i * 1.7, zaadje, 9.3), 0.7) * 0.55 });
  }
  const n = new Vector3();
  for (let i = 0; i < pos.count; i++) {
    n.set(pos.getX(i), pos.getY(i), pos.getZ(i)).normalize();
    let r = 3;
    for (const v of vlakken) { const dp = n.dot(v.n); if (dp > 0.02) r = Math.min(r, v.d / dp); }
    r *= 1 + 0.016 * Math.sin(n.x * 9.3 + zaadje) * Math.cos(n.z * 8.1);
    pos.setXYZ(i, n.x * r, n.y * r, n.z * r);
  }
  return g;
}
// Eén rots (straal ~1): meerdere brokken door elkaar, sedimentlagen, verwering, mos.
export function steenGeometrie(zaadje = 0.9, mos = 0.8, detail = 1, uvSchaal = 1.6) {
  const BROKKEN = 2 + Math.floor(ruis3(zaadje, 1.1, 2.2) * 2), delen = [];
  let totaal = 0;
  for (let b = 0; b < BROKKEN; b++) {
    const brok = maakBrok(zaadje + b * 4.73, detail);
    if (b > 0) {
      const sc = 0.46 + ruis3(b, zaadje, 3.3) * 0.44, a = ruis3(b, zaadje, 7.7) * 6.283, af = 0.34 + ruis3(b, zaadje, 9.9) * 0.46;
      const m = new Matrix4().compose(
        new Vector3(Math.cos(a) * af, (ruis3(b, zaadje, 5.5) - 0.32) * 0.55, Math.sin(a) * af),
        new Quaternion().setFromEuler(new Euler(ruis3(b, zaadje, 1.7) * 3.1, ruis3(b, zaadje, 2.9) * 3.1, ruis3(b, zaadje, 4.1) * 3.1)),
        new Vector3(sc, sc * (0.7 + ruis3(b, zaadje, 6.6) * 0.5), sc));
      brok.applyMatrix4(m);
    }
    delen.push(brok.attributes.position.array); totaal += brok.attributes.position.count;
  }
  const arr = new Float32Array(totaal * 3); let off = 0;
  for (const d of delen) { arr.set(d, off); off += d.length; }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(arr, 3));
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) { let y = pos.getY(i) * 0.86; if (y < -0.34) y = -0.34; pos.setY(i, y); }
  const kleuren = new Float32Array(pos.count * 3);
  const a = new Vector3(), b = new Vector3(), c = new Vector3(), ab = new Vector3(), ac = new Vector3(), vn = new Vector3();
  const steen = new Color(), mosKleur = new Color(0x5f8038), kl = new Color();
  for (let i = 0; i < pos.count; i += 3) {
    a.set(pos.getX(i), pos.getY(i), pos.getZ(i)); b.set(pos.getX(i + 1), pos.getY(i + 1), pos.getZ(i + 1)); c.set(pos.getX(i + 2), pos.getY(i + 2), pos.getZ(i + 2));
    vn.crossVectors(ab.subVectors(b, a), ac.subVectors(c, a)).normalize();
    const mx = (a.x + b.x + c.x) / 3, my = (a.y + b.y + c.y) / 3, mz = (a.z + b.z + c.z) / 3;
    const sleutel = Math.round(vn.x * 6) * 31 + Math.round(vn.y * 6) * 17 + Math.round(vn.z * 6) * 11;
    const vlakTint = 0.74 + ruis3(sleutel * 0.37, zaadje, 2.3) * 0.52;
    const laag = 0.90 + Math.pow(Math.sin((my * 0.88 + mx * 0.34 + mz * 0.21) * 7.5 + zaadje * 2.3) * 0.5 + 0.5, 1.6) * 0.22;
    const verwering = 1 + Math.max(-1, Math.min(1, my * 1.4)) * 0.13;
    const korrel = 0.90 + ruis3(mx * 5.5, my * 5.5, mz * 5.5) * 0.20;
    const ader = Math.max(0, Math.sin(mx * 6.1 + my * 3.7 + mz * 4.9 + zaadje) - 0.74) * 2.0;
    const g2 = korrel * vlakTint * laag * verwering * (1 - ader * 0.34);
    steen.setRGB(g2 * 0.86, g2 * 0.85, g2 * 0.80);
    const omhoog = Math.max(0, vn.y), hoog = Math.max(0, Math.min(1, (my + 0.1) / 0.6)), vlek = ruis3(mx * 2.2 + 9, my * 2.2, mz * 2.2);
    kl.copy(steen).lerp(mosKleur, Math.min(0.92, Math.pow(omhoog, 1.25) * hoog * mos * (0.40 + vlek * 0.95)));
    for (let j = 0; j < 3; j++) { kleuren[(i + j) * 3] = kl.r; kleuren[(i + j) * 3 + 1] = kl.g; kleuren[(i + j) * 3 + 2] = kl.b; }
  }
  g.setAttribute("color", new BufferAttribute(kleuren, 3));
  zetSteenUV(g, uvSchaal);
  g.computeVertexNormals();
  return g;
}
export const steenMateriaal = () => once("steenMat", () => new MeshStandardMaterial({
  vertexColors: true, flatShading: true, map: granietTextuur(), bumpMap: granietTextuur(), bumpScale: 0.05, roughness: 0.95, metalness: 0,
}));

// ══════════════════════════════════════════════════════════════════
// PALMEN: bast, gebogen stam, doorzichtig blad met 110 blaadjes
// ══════════════════════════════════════════════════════════════════
export const bastTextuur = () => once("bast", () => {
  const vast = maakVast(31), c = document.createElement("canvas"); c.width = 128; c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#7d5c3a"; g.fillRect(0, 0, 128, 256);
  const beeld = g.getImageData(0, 0, 128, 256);
  for (let i = 0; i < beeld.data.length; i += 4) {
    const n = (vast() - 0.5) * 46;
    beeld.data[i] = Math.max(0, Math.min(255, beeld.data[i] + n)); beeld.data[i + 1] = Math.max(0, Math.min(255, beeld.data[i + 1] + n * 0.9)); beeld.data[i + 2] = Math.max(0, Math.min(255, beeld.data[i + 2] + n * 0.7));
  }
  g.putImageData(beeld, 0, 0);
  for (let i = 0; i < 150; i++) {
    const x = vast() * 128;
    g.strokeStyle = vast() > 0.5 ? "rgba(150,120,84," + (0.10 + vast() * 0.28) + ")" : "rgba(64,46,28," + (0.10 + vast() * 0.30) + ")";
    g.lineWidth = 0.6 + vast() * 2.2;
    g.beginPath(); g.moveTo(x, -5);
    for (let y = 0; y < 262; y += 26) g.lineTo(x + (vast() - 0.5) * 4, y);
    g.stroke();
  }
  for (let y = 6; y < 256; y += 21 + vast() * 5) {
    g.strokeStyle = "rgba(52,36,22,0.55)"; g.lineWidth = 2.6 + vast() * 2;
    g.beginPath(); g.moveTo(-4, y); for (let x = 0; x < 134; x += 16) g.lineTo(x, y + (vast() - 0.5) * 3.4); g.stroke();
    g.strokeStyle = "rgba(178,146,102,0.42)"; g.lineWidth = 1.5;
    g.beginPath(); g.moveTo(-4, y - 3); for (let x = 0; x < 134; x += 16) g.lineTo(x, y - 3 + (vast() - 0.5) * 3); g.stroke();
  }
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping; t.anisotropy = 4;
  return t;
});
// Stam voor een palm van 5 m (schaal zelf voor andere hoogtes); kromt naar +X.
export const palmStamGeometrie = () => once("palmStam", () => {
  const RINGEN = 16, ZIJDEN = 9, HOOG = 5, BOOG = 1.05, pos = [], kleur = [], uv = [], idx = [], c = new Color();
  for (let i = 0; i <= RINGEN; i++) {
    const t = i / RINGEN, cx = BOOG * t * t, cy = HOOG * t;
    let r = 0.155 - 0.070 * t; r *= 1 + 0.06 * Math.sin(t * RINGEN * Math.PI); if (t < 0.10) r += (0.10 - t) * 0.75;
    const helling = Math.atan(2 * BOOG * t / HOOG);
    for (let j = 0; j <= ZIJDEN; j++) {
      const a = (j % ZIJDEN) / ZIJDEN * Math.PI * 2, px = Math.cos(a) * r, pz = Math.sin(a) * r;
      pos.push(cx + px * Math.cos(helling), cy - px * Math.sin(helling), pz);
      uv.push(j / ZIJDEN * 1.6, t * 3.2);
      const band = 0.5 + 0.5 * Math.sin(t * RINGEN * Math.PI * 2), g = 0.72 + band * 0.30 + Math.cos(a) * 0.07;
      c.setRGB(g * 0.92, g * 0.88, g * 0.82); kleur.push(c.r, c.g, c.b);
    }
  }
  const KOL = ZIJDEN + 1;
  for (let i = 0; i < RINGEN; i++) for (let j = 0; j < ZIJDEN; j++) { const a = i * KOL + j, b = i * KOL + j + 1; idx.push(a, b, a + KOL, b, b + KOL, a + KOL); }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3)); g.setAttribute("color", new Float32BufferAttribute(kleur, 3)); g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
});
export const bladTextuur = () => once("blad", () => {
  const vast = maakVast(55), c = document.createElement("canvas"); c.width = 512; c.height = 256;
  const g = c.getContext("2d"); g.clearRect(0, 0, 512, 256);
  g.strokeStyle = "#7d7433"; g.lineWidth = 5; g.lineCap = "round"; g.beginPath(); g.moveTo(2, 128); g.lineTo(505, 128); g.stroke();
  g.strokeStyle = "#a89a45"; g.lineWidth = 2; g.beginPath(); g.moveTo(2, 126); g.lineTo(505, 126); g.stroke();
  for (let i = 0; i < 110; i++) {
    const t = i / 110, x = 6 + t * 500, lang = 118 * Math.sin(Math.PI * Math.pow(t, 0.62)) * (0.80 + vast() * 0.3);
    for (const kant of [1, -1]) {
      const groen = 122 + vast() * 88;
      g.strokeStyle = "rgb(" + Math.round(groen * 0.42) + "," + Math.round(groen) + "," + Math.round(groen * 0.36) + ")";
      g.lineWidth = 1.5 + vast() * 1.7;
      g.beginPath(); g.moveTo(x, 128 + kant * 2); g.quadraticCurveTo(x + lang * 0.34, 128 + kant * lang * 0.55, x + lang * 0.52, 128 + kant * lang); g.stroke();
    }
  }
  const t = new CanvasTexture(c); t.anisotropy = 4;
  return t;
});
export function bladGeometrie(N = 6) {
  const L = 3.9, pos = [], uv = [], idx = [];
  let v = 0;
  const steel = (t) => ({ x: L * t, y: -(2.0 * t * t * t + 0.18 * t) });
  const breed = (t) => Math.sin(Math.PI * Math.pow(t, 0.55)) * 0.92 + 0.10;
  for (let i = 0; i < N; i++) {
    const t0 = i / N, t1 = (i + 1) / N, p0 = steel(t0), p1 = steel(t1), b0 = breed(t0), b1 = breed(t1);
    pos.push(p0.x, p0.y, -b0, p1.x, p1.y, -b1, p1.x, p1.y, b1, p0.x, p0.y, b0);
    uv.push(t0, 0, t1, 0, t1, 1, t0, 1);
    idx.push(v, v + 1, v + 2, v, v + 2, v + 3); v += 4;
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3)); g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}
// Een hele palmkroon (bladeren rondom, jong omhoog / oud omlaag) als één geometrie.
export function palmKroonGeometrie(bladen = 14, segmenten = 6) {
  const kroonPos = [], kroonUv = [], kroonIdx = [];
  const m4 = new Matrix4(), q = new Quaternion(), e = new Euler(), p3 = new Vector3();
  for (let j = 0; j < bladen; j++) {
    const b = bladGeometrie(segmenten);
    const hoek = (j / bladen) * Math.PI * 2 + (j % 2) * 0.22;
    const droop = -0.25 + ((j * 7) % bladen) / bladen * 1.35;
    e.set(0, hoek, -droop); q.setFromEuler(e);
    m4.compose(new Vector3(0, 0, 0), q, new Vector3(0.9 + ((j * 3) % 5) * 0.05, 0.9 + ((j * 5) % 7) * 0.04, 0.9 + ((j * 3) % 5) * 0.05));
    const basis = kroonPos.length / 3, bp = b.attributes.position, bu = b.attributes.uv;
    for (let i = 0; i < bp.count; i++) { p3.set(bp.getX(i), bp.getY(i), bp.getZ(i)).applyMatrix4(m4); kroonPos.push(p3.x, p3.y, p3.z); }
    for (let i = 0; i < bu.count; i++) kroonUv.push(bu.getX(i), bu.getY(i));
    const bi = b.index.array; for (let i = 0; i < bi.length; i++) kroonIdx.push(bi[i] + basis);
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(kroonPos, 3)); g.setAttribute("uv", new Float32BufferAttribute(kroonUv, 2));
  g.setIndex(kroonIdx); g.computeVertexNormals();
  return g;
}
export const palmStamMateriaal = () => once("palmStamMat", () => new MeshStandardMaterial({ vertexColors: true, map: bastTextuur(), bumpMap: bastTextuur(), bumpScale: 0.05, roughness: 1, metalness: 0 }));
export const palmBladMateriaal = () => once("palmBladMat", () => metWind(new MeshStandardMaterial({ map: bladTextuur(), alphaTest: 0.28, side: DoubleSide, roughness: 0.9, metalness: 0 }), { vanaf: -3, kracht: 0.05, schaal: 0.08 }));

// ══════════════════════════════════════════════════════════════════
// LOOFBOMEN: schors met groeven + een bladerkroon van blaadjes-plaatjes
// ══════════════════════════════════════════════════════════════════
export const schorsTextuur = () => once("schors", () => {
  const vast = maakVast(808), c = document.createElement("canvas"); c.width = 128; c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#5e4a36"; g.fillRect(0, 0, 128, 256);
  const beeld = g.getImageData(0, 0, 128, 256);
  for (let i = 0; i < beeld.data.length; i += 4) {
    const n = (vast() - 0.5) * 40;
    beeld.data[i] = Math.max(0, Math.min(255, beeld.data[i] + n)); beeld.data[i + 1] = Math.max(0, Math.min(255, beeld.data[i + 1] + n * 0.9)); beeld.data[i + 2] = Math.max(0, Math.min(255, beeld.data[i + 2] + n * 0.8));
  }
  g.putImageData(beeld, 0, 0);
  // diepe verticale groeven en lichtere ribbels — de schors van een eik
  for (let i = 0; i < 60; i++) {
    let x = vast() * 128;
    g.strokeStyle = vast() > 0.45 ? "rgba(28,20,14," + (0.35 + vast() * 0.4) + ")" : "rgba(150,128,100," + (0.15 + vast() * 0.25) + ")";
    g.lineWidth = 1 + vast() * 4; g.lineCap = "round";
    g.beginPath(); g.moveTo(x, -8);
    for (let y = 0; y < 270; y += 18) { x += (vast() - 0.5) * 7; g.lineTo(x, y); }
    g.stroke();
  }
  // wat mos aan één kant
  for (let i = 0; i < 24; i++) {
    const x = vast() * 40, y = vast() * 256, r = 4 + vast() * 12;
    const v = g.createRadialGradient(x, y, 0, x, y, r);
    v.addColorStop(0, "rgba(88,120,50,0.55)"); v.addColorStop(1, "rgba(88,120,50,0)");
    g.fillStyle = v; g.beginPath(); g.arc(x, y, r, 0, 6.3); g.fill();
  }
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping; t.anisotropy = 4;
  return t;
});
// Een plaatje met een pluk blaadjes (doorzichtig ertussen) → de kroon wordt een
// bol van zulke plaatjes: van dichtbij zie je losse blaadjes, van ver een volle kroon.
export const loofTextuur = () => once("loof", () => {
  const vast = maakVast(6161), N = 256, c = document.createElement("canvas"); c.width = c.height = N;
  const g = c.getContext("2d"); g.clearRect(0, 0, N, N);
  for (let i = 0; i < 260; i++) {
    const x = N / 2 + (vast() - 0.5) * N * 0.92, y = N / 2 + (vast() - 0.5) * N * 0.92;
    const d = Math.hypot(x - N / 2, y - N / 2) / (N / 2); if (d > 0.98) continue;
    const r = 7 + vast() * 9, hoek = vast() * Math.PI * 2;
    const licht = 0.55 + vast() * 0.75 - d * 0.15;
    g.fillStyle = "rgb(" + Math.round(55 * licht) + "," + Math.round(120 * licht) + "," + Math.round(38 * licht) + ")";
    g.save(); g.translate(x, y); g.rotate(hoek);
    g.beginPath(); g.ellipse(0, 0, r, r * 0.45, 0, 0, 6.3); g.fill();
    g.strokeStyle = "rgba(20,50,15,0.5)"; g.lineWidth = 0.8; g.beginPath(); g.moveTo(-r, 0); g.lineTo(r, 0); g.stroke();
    g.restore();
  }
  const t = new CanvasTexture(c); t.anisotropy = 4;
  return t;
});
export const schorsMateriaal = () => once("schorsMat", () => new MeshStandardMaterial({ map: schorsTextuur(), bumpMap: schorsTextuur(), bumpScale: 0.06, roughness: 1, metalness: 0 }));
// kleur = tint over de blaadjes (wit = zoals getekend, lichter/groener/geler naar wens)
export const loofMateriaal = (kleur = "#ffffff") => once("loofMat" + kleur, () => metWind(new MeshStandardMaterial({ map: loofTextuur(), color: kleur, alphaTest: 0.4, side: DoubleSide, roughness: 0.9, metalness: 0 }), { vanaf: -10, kracht: 0.03, schaal: 0.1 }));
// varen/graspol als losse plant: donkerder groen dan het gazon, met wind
export const varenMateriaal = () => once("varenMat", () => metWind(new MeshStandardMaterial({ color: "#3f7d2c", vertexColors: true, side: DoubleSide, roughness: 1, metalness: 0 }), { vanaf: 0, kracht: 0.3, schaal: 0.55 }));
// Kroon: ~N vlakke plaatjes willekeurig gedraaid binnen een bol (straal 1).
export function loofKroonGeometrie(n = 14, seed = 1) {
  const vast = maakVast(seed * 7919 + 13), pos = [], uv = [], idx = [], m4 = new Matrix4(), q = new Quaternion(), e = new Euler(), p3 = new Vector3();
  let v = 0;
  for (let k = 0; k < n; k++) {
    const r = 0.55 + vast() * 0.35;
    const cx = (vast() - 0.5) * 0.8, cy = (vast() - 0.5) * 0.7, cz = (vast() - 0.5) * 0.8;
    e.set(vast() * Math.PI, vast() * Math.PI, vast() * Math.PI); q.setFromEuler(e);
    m4.compose(new Vector3(cx, cy, cz), q, new Vector3(r, r, r));
    const hoeken = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
    for (const [hx, hy] of hoeken) { p3.set(hx, hy, 0).applyMatrix4(m4); pos.push(p3.x, p3.y, p3.z); }
    uv.push(0, 0, 1, 0, 1, 1, 0, 1);
    idx.push(v, v + 1, v + 2, v, v + 2, v + 3); v += 4;
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3)); g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}

// ══════════════════════════════════════════════════════════════════
// DE LUCHT: een rondom-panorama (equirectangular) met ruis-wolken, zon-gloed
// en nevel bij de horizon. Op een bol om de camera met BackSide.
// ══════════════════════════════════════════════════════════════════
export const ZON_RICHTING = new Vector3(150, 190, 95).normalize();
export const luchtTextuur = () => once("lucht", () => {
  const W = LAAG ? 1024 : 2048, H = W / 2, vast = maakVast(424242);
  const c = document.createElement("canvas"); c.width = W; c.height = H;
  const g = c.getContext("2d");
  const v = g.createLinearGradient(0, 0, 0, H);
  v.addColorStop(0.00, "#2b67ad"); v.addColorStop(0.20, "#4a8ecb"); v.addColorStop(0.38, "#8fc1e4"); v.addColorStop(0.47, "#c6e0f0");
  v.addColorStop(0.50, "#dfeaf2"); v.addColorStop(0.56, "#b3d3e3"); v.addColorStop(1.00, "#7a9fb5");
  g.fillStyle = v; g.fillRect(0, 0, W, H);
  // zon
  const zd = ZON_RICHTING;
  let phi = Math.atan2(zd.z, -zd.x); if (phi < 0) phi += Math.PI * 2;
  const zx = phi / (Math.PI * 2) * W, zy = (Math.acos(zd.y) / Math.PI) * H;
  for (const [r, a0, a1] of [[H * 0.60, "rgba(255,236,190,0.38)", "rgba(255,236,190,0)"], [H * 0.15, "rgba(255,248,225,0.85)", "rgba(255,248,225,0)"]]) {
    for (const ox of [0, W, -W]) {
      const gl = g.createRadialGradient(zx + ox, zy, 0, zx + ox, zy, r);
      gl.addColorStop(0, a0); gl.addColorStop(1, a1);
      g.fillStyle = gl; g.fillRect(zx + ox - r, zy - r, r * 2, r * 2);
    }
  }
  // ruis-rooster (naadloos in de breedte)
  const LAT = 64, rooster = new Float32Array(LAT * LAT);
  for (let i = 0; i < rooster.length; i++) rooster[i] = vast();
  const lat = (i, j, P) => rooster[(((i % P) + P) % P) * LAT + (((j % LAT) + LAT) % LAT)];
  const glad = (t) => t * t * (3 - 2 * t);
  const ruis = (u, w, P) => {
    const i = Math.floor(u), j = Math.floor(w), fu = glad(u - i), fw = glad(w - j);
    const a = lat(i, j, P), b = lat(i + 1, j, P), c2 = lat(i, j + 1, P), d = lat(i + 1, j + 1, P);
    return (a * (1 - fu) + b * fu) * (1 - fw) + (c2 * (1 - fu) + d * fu) * fw;
  };
  const fbm = (x01, vc, basis, lagen, rekY, schuif) => {
    let som = 0, amp = 1, tot = 0, P = basis, f = 1;
    for (let o = 0; o < lagen; o++) { som += ruis(x01 * P + schuif * 3.1, vc * f * basis * rekY + o * 7.3 + schuif, P) * amp; tot += amp; amp *= 0.5; P = Math.min(P * 2, LAT); f *= 2; }
    return som / tot;
  };
  const yTop = Math.floor(H * 0.52), dikte = new Float32Array(W * yTop), fijn = new Float32Array(W * yTop);
  for (let y = 0; y < yTop; y++) {
    const elev = (0.5 - y / H) * Math.PI, vc = (elev / (Math.PI / 2)) * (1 + 0.6 * elev);
    // In het park kijk je vaak schuin omhoog: boven ~60° laten we alle wolken
    // uitdoven, anders rekt het panorama ze bij de pool uit tot ringen.
    const grensC = 0.53 + 0.16 * stap(0.35, 1.25, elev) + 0.20 * stap(0.10, 0.0, elev), fadeC = stap(1.10, 0.80, elev);
    const band = stap(0.005, 0.03, elev) * stap(0.20, 0.07, elev), hoog = stap(0.50, 0.72, elev) * stap(1.05, 0.85, elev);
    for (let x = 0; x < W; x++) {
      const x01 = x / W, nC = fbm(x01, vc, 8, 6, 1.15, 0.0);
      let d = stap(grensC, grensC + 0.11, nC) * fadeC;
      fijn[y * W + x] = nC;
      if (band > 0.001) d = Math.max(d, stap(0.52, 0.63, fbm(x01, vc, 8, 4, 5.0, 11.0)) * band * 0.7);
      if (hoog > 0.001) d = Math.max(d, stap(0.56, 0.74, fbm(x01, vc, 4, 3, 10.0, 23.0)) * hoog * 0.35);
      dikte[y * W + x] = d;
    }
  }
  const beeld = g.getImageData(0, 0, W, yTop), px = beeld.data, k = Math.max(2, Math.round(H / 100));
  for (let y = 0; y < yTop; y++) {
    const elev = (0.5 - y / H) * Math.PI, nevel = stap(0.30, 0.0, elev);
    for (let x = 0; x < W; x++) {
      const D = dikte[y * W + x]; if (D < 0.004) continue;
      const boven = y >= k ? dikte[(y - k) * W + x] : 0, zij = dikte[y * W + (((x - k) % W) + W) % W];
      let lit = 0.62 + (D - boven) * 4.0 + (D - zij) * 1.5 + (fijn[y * W + x] - 0.56) * 1.2;
      lit = Math.max(0, Math.min(1, lit));
      const b = Math.max(0, Math.min(1, lit - stap(0.6, 1.0, D) * 0.30 * (1 - lit * 0.5)));
      let dx = Math.abs(x - zx); dx = Math.min(dx, W - dx);
      const naarZon = Math.exp(-((dx * dx + (y - zy) * (y - zy)) / (H * H * 0.18)));
      const litR = 252 + 3 * naarZon * 0.7, litG = 252 - 22 * naarZon * 0.7, litB = 255 - 39 * naarZon * 0.7;
      const schR = 118 + 70 * naarZon * 0.4, schG = 132 + 36 * naarZon * 0.4, schB = 168 + 12 * naarZon * 0.4;
      let r = schR + (litR - schR) * b, gr = schG + (litG - schG) * b, bl = schB + (litB - schB) * b;
      r += (214 - r) * nevel * 0.6; gr += (232 - gr) * nevel * 0.6; bl += (242 - bl) * nevel * 0.6;
      const a = Math.min(1, D * 1.25) * (1 - 0.45 * nevel), i = (y * W + x) * 4;
      px[i] += (r - px[i]) * a; px[i + 1] += (gr - px[i + 1]) * a; px[i + 2] += (bl - px[i + 2]) * a;
    }
  }
  g.putImageData(beeld, 0, 0);
  const nevelG = g.createLinearGradient(0, H * 0.42, 0, H * 0.52);
  nevelG.addColorStop(0, "rgba(216,234,244,0)"); nevelG.addColorStop(0.8, "rgba(216,234,244,0.65)"); nevelG.addColorStop(1, "rgba(216,234,244,0.8)");
  g.fillStyle = nevelG; g.fillRect(0, H * 0.42, W, H * 0.10);
  const t = new CanvasTexture(c);
  t.wrapS = RepeatWrapping; t.wrapT = ClampToEdgeWrapping;
  t.magFilter = t.minFilter = LinearFilter; t.generateMipmaps = false;
  return t;
});

// ══════════════════════════════════════════════════════════════════
// WATER: rimpels die over elkaar heen glijden, spiegeling van het lucht-panorama
// (meer als je er schuin op kijkt = fresnel) en een zon-glinstering. Werkt op
// een gewoon MeshStandardMaterial, dus schaduwen en fog blijven gewoon werken.
// ══════════════════════════════════════════════════════════════════
export const rimpelTextuur = () => once("rimpel", () => {
  const N = 256, vast = maakVast(9090);
  const c = document.createElement("canvas"); c.width = c.height = N;
  const g = c.getContext("2d"), beeld = g.createImageData(N, N), d = beeld.data;
  // sinussen met hele frequenties zijn vanzelf naadloos
  const golven = [];
  for (let i = 0; i < 10; i++) { const f = 2 + Math.floor(vast() * 8), hoek = vast() * Math.PI * 2; golven.push({ fx: Math.round(Math.cos(hoek) * f), fy: Math.round(Math.sin(hoek) * f), fase: vast() * 6.283, amp: 1 / (1 + f * 0.25) }); }
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    let v = 0, tot = 0;
    for (const w of golven) { v += Math.sin((w.fx * x + w.fy * y) / N * 6.283 + w.fase) * w.amp; tot += w.amp; }
    const i = (y * N + x) * 4, k = 128 + (v / tot) * 110;
    d[i] = d[i + 1] = d[i + 2] = k; d[i + 3] = 255;
  }
  g.putImageData(beeld, 0, 0);
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping;
  return t;
});
const waterUniforms = new Set();
export function waterTik(t) { for (const u of waterUniforms) u.value = t; }
export function waterMateriaal(opties = {}) {
  const mat = new MeshStandardMaterial({ color: opties.kleur || "#2f8fbf", roughness: 0.08, metalness: 0.0, transparent: true, opacity: opties.opacity ?? 0.86, ...opties.extra });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.tijd = { value: 0 }; waterUniforms.add(sh.uniforms.tijd);
    sh.uniforms.rimpelMap = { value: rimpelTextuur() };
    sh.uniforms.luchtMap = { value: luchtTextuur() };
    sh.uniforms.zonRichting = { value: ZON_RICHTING.clone() };
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vWposW;")
      .replace("#include <project_vertex>", `#include <project_vertex>
        { vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          vWposW = (modelMatrix * wp).xyz; }`);
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", `#include <common>
        uniform float tijd; uniform sampler2D rimpelMap; uniform sampler2D luchtMap; uniform vec3 zonRichting;
        varying vec3 vWposW;`)
      // rimpels: de normaal een tikje kantelen op basis van twee schuivende ruislagen
      .replace("#include <normal_fragment_maps>", `#include <normal_fragment_maps>
        { vec2 uv = vWposW.xz;
          const float e = 1.0 / 256.0;
          vec2 u1 = uv * 0.35 + tijd * vec2(0.020, 0.013);
          vec2 u2 = uv * 0.71 - tijd * vec2(0.015, 0.024);
          float h1 = texture2D(rimpelMap, u1).r, h2 = texture2D(rimpelMap, u2).r;
          vec2 grad = vec2(texture2D(rimpelMap, u1 + vec2(e, 0.0)).r - h1, texture2D(rimpelMap, u1 + vec2(0.0, e)).r - h1)
                    + 0.6 * vec2(texture2D(rimpelMap, u2 + vec2(e, 0.0)).r - h2, texture2D(rimpelMap, u2 + vec2(0.0, e)).r - h2);
          grad *= 256.0 * 0.012;
          vec3 nW = normalize(vec3(-grad.x, 1.0, -grad.y));
          normal = normalize(normalMatrix * nW); }`)
      // spiegeling + zon-glinstering er bovenop
      .replace("#include <opaque_fragment>", `
        { vec3 kijk = normalize(cameraPosition - vWposW);
          vec3 nW = inverseTransformDirection(normal, viewMatrix);
          float fres = pow(1.0 - max(dot(nW, kijk), 0.0), 3.0);
          fres = 0.05 + 0.70 * fres;
          vec3 refl = reflect(-kijk, nW); refl.y = max(refl.y, 0.02);
          float phi = atan(refl.z, -refl.x); if (phi < 0.0) phi += 6.2831853;
          vec2 uvL = vec2(phi / 6.2831853, 1.0 - acos(clamp(refl.y, -1.0, 1.0)) / 3.14159265);
          vec3 lucht = texture2D(luchtMap, uvL).rgb;
          outgoingLight = mix(outgoingLight, lucht, fres);
          vec3 halfv = normalize(kijk + zonRichting);
          float nh = max(dot(nW, halfv), 0.0);
          outgoingLight += vec3(1.0, 0.95, 0.82) * (pow(nh, 380.0) * 1.2 + pow(nh, 40.0) * 0.12);
          diffuseColor.a = max(diffuseColor.a, fres); }
        #include <opaque_fragment>`);
  };
  mat.customProgramCacheKey = () => "water-" + (opties.kleur || "") + (opties.opacity ?? "");
  return mat;
}
