// waterEiland.js — het water van Brian's eiland, één op één voor het park
// (Mark 5 sep 2026: "maak het water in het park hetzelfde als op Brian's eiland").
//
// Eén shader doet alles wat echt water doet:
//  1) GOLVEN   — drie kleine golfjes in het hoekpuntenrooster (vertex-shader)
//  2) RIMPELS  — twee lagen kabbel-ruis die over de golven heen glijden
//  3) SPIEGEL  — het water spiegelt het lucht-panorama, méér bij schuin kijken (fresnel)
//  4) ZON      — scherpe glinstering + brede glans
//  5) DIEPTE   — ondiep = helder turkoois en doorzichtig (je ziet de bodem),
//                diep = donker; de diepte komt uit een dieptekaart van het terrein
//  6) LICHTVLEKKEN — dansende lijntjes op de bodem (caustics, zoals in een zwembad)
//  7) SCHUIM   — randjes die naar de oever rollen + een wit randje op de waterlijn
//  8) DIEP WATER — bijna zwart met lichtende aders (zonlicht dat door de golven breekt)
import { CanvasTexture, Color, RepeatWrapping, ClampToEdgeWrapping, ShaderMaterial, UniformsUtils, UniformsLib, Vector3, DoubleSide } from "three";
import { luchtTextuur, ZON_RICHTING } from "./realisme";
import { heightAt, TER_EXT, TER_SIZE } from "./terrain";

function maakVast(seed) { let z = seed >>> 0 || 7; return () => { z = (z * 16807) % 2147483647; return z / 2147483647; }; }

// ── de ruis-textuur: drie patronen in één plaatje ──
// rood = zachte rimpel-hoogte, groen = vlekkerige schuim-ruis, blauw = lijntjes-netwerk (caustics)
let _ruis = null;
export function zeeRuisTextuur() {
  if (_ruis) return _ruis;
  const N = 256, vast = maakVast(9091);
  const c = document.createElement("canvas"); c.width = c.height = N;
  const g = c.getContext("2d"), beeld = g.createImageData(N, N), d = beeld.data;
  const maakGolven = (aantal, fMin, fMax) => {
    const lijst = [];
    for (let i = 0; i < aantal; i++) {
      const f = fMin + Math.floor(vast() * (fMax - fMin + 1)), hoek = vast() * Math.PI * 2;
      lijst.push({ fx: Math.round(Math.cos(hoek) * f), fy: Math.round(Math.sin(hoek) * f), fase: vast() * 6.283, amp: 1 / (1 + f * 0.25) });
    }
    return lijst;
  };
  const rimpel = maakGolven(10, 2, 9), schuim = maakGolven(12, 1, 7);
  const som = (lijst, x, y) => { let v = 0, tot = 0; for (const w of lijst) { v += Math.sin((w.fx * x + w.fy * y) / N * 6.283 + w.fase) * w.amp; tot += w.amp; } return v / tot; };
  const punten = []; for (let i = 0; i < 34; i++) punten.push({ x: vast() * N, y: vast() * N });
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const i = (y * N + x) * 4;
    d[i] = 128 + som(rimpel, x, y) * 110;
    d[i + 1] = Math.max(0, Math.min(255, 128 + (som(schuim, x, y) * 0.7 + som(rimpel, x * 2.3, y * 1.7) * 0.3) * 150));
    let d1 = 1e9, d2 = 1e9;
    for (const p of punten) {
      let dx = Math.abs(x - p.x), dy = Math.abs(y - p.y); dx = Math.min(dx, N - dx); dy = Math.min(dy, N - dy);
      const dd = dx * dx + dy * dy; if (dd < d1) { d2 = d1; d1 = dd; } else if (dd < d2) d2 = dd;
    }
    const rand = Math.sqrt(d2) - Math.sqrt(d1);
    d[i + 2] = Math.max(0, Math.min(255, 255 * Math.exp(-rand * rand / 22)));
    d[i + 3] = 255;
  }
  g.putImageData(beeld, 0, 0);
  _ruis = new CanvasTexture(c);
  _ruis.wrapS = _ruis.wrapT = RepeatWrapping;
  return _ruis;
}

// ── de dieptekaart: hoe diep is het water op elke plek van het park? ──
// diepte = wateroppervlak − terreinhoogte (0 waar geen kuil is). Wortel-codering
// zodat ondiep water de meeste stapjes krijgt (geen terrasjes in het schuim).
export const WATER_MAX_DIEP = 4;
export function waterDieptekaart(field, oppervlak = -0.05, maxDiep = WATER_MAX_DIEP) {
  const N = 256;
  const c = document.createElement("canvas"); c.width = c.height = N;
  const g = c.getContext("2d"), beeld = g.createImageData(N, N), d = beeld.data;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const x = (i / (N - 1) - 0.5) * TER_SIZE, z = (j / (N - 1) - 0.5) * TER_SIZE;
    const diep = field ? Math.max(0, Math.min(maxDiep, oppervlak - heightAt(field, x, z))) : 0;
    const k = (j * N + i) * 4;
    d[k] = d[k + 1] = d[k + 2] = Math.round(Math.sqrt(diep / maxDiep) * 255); d[k + 3] = 255;
  }
  g.putImageData(beeld, 0, 0);
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = ClampToEdgeWrapping;
  t.flipY = false;
  return t;
}

const tijdUniforms = new Set();
export function eilandWaterTik(t) { for (const u of tijdUniforms) u.value = t; }

const VERTEX = `
uniform float tijd;
uniform float golfAmp;
varying vec3 vWereld;
varying vec3 vNormaal;
varying float vHoog;
#include <fog_pars_vertex>
void golf(vec2 p, vec2 richting, float freq, float amp, float snel, inout float h, inout vec2 dh){
  float f = dot(p, richting) * freq + tijd * snel;
  h  += sin(f) * amp;
  dh += richting * (freq * cos(f) * amp);
}
void main(){
  vec4 wp = modelMatrix * vec4(position, 1.0);
  float h = 0.0; vec2 dh = vec2(0.0);
  golf(wp.xz, normalize(vec2( 1.0, 0.30)), 0.90, 0.022, 1.10, h, dh);
  golf(wp.xz, normalize(vec2(-0.2, 1.00)), 1.30, 0.016, 1.50, h, dh);
  golf(wp.xz, normalize(vec2( 0.7, 0.70)), 2.60, 0.006, 2.20, h, dh);
  h *= golfAmp; dh *= golfAmp;
  wp.y += h;
  vHoog = h;
  vNormaal = normalize(vec3(-dh.x, 1.0, -dh.y));
  vWereld = wp.xyz;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;

const FRAGMENT = `
precision highp float;
uniform float tijd;
uniform sampler2D ruis;
uniform sampler2D dieptemap;
uniform sampler2D luchtMap;
uniform float terMaat, maxDiep, diepteVast;
uniform vec3 zonRichting, kleurOndiep, kleurDiep, kleurAder;
varying vec3 vWereld;
varying vec3 vNormaal;
varying float vHoog;
#include <fog_pars_fragment>
void main(){
  vec2 uv = vWereld.xz;
  float dv = texture2D(dieptemap, uv / terMaat + 0.5).r;
  float diepte = diepteVast >= 0.0 ? diepteVast : dv * dv * maxDiep;

  // 2) rimpels: twee lagen ruis glijden langs elkaar → kabbelende normaal
  const float e = 1.0 / 256.0;
  vec2 u1 = uv * 0.50 + tijd * vec2(0.020, 0.013);
  float h1 = texture2D(ruis, u1).r;
  vec2 grad = vec2(texture2D(ruis, u1 + vec2(e, 0.0)).r - h1, texture2D(ruis, u1 + vec2(0.0, e)).r - h1);
  vec2 u2 = uv * 1.10 - tijd * vec2(0.015, 0.024);
  float h2 = texture2D(ruis, u2).r;
  grad += 0.6 * vec2(texture2D(ruis, u2 + vec2(e, 0.0)).r - h2, texture2D(ruis, u2 + vec2(0.0, e)).r - h2);
  grad *= 256.0 * 0.022 * (0.35 + 0.65 * clamp(diepte / 0.6, 0.0, 1.0));
  vec3 n = normalize(vNormaal + vec3(-grad.x, 0.0, -grad.y));
  vec3 kijk = normalize(cameraPosition - vWereld);
  if(dot(n, kijk) < 0.0) n = -n;

  // 5) waterkleur op diepte
  float d01 = clamp(diepte / 2.5, 0.0, 1.0);
  vec3 water = mix(kleurOndiep, kleurDiep, pow(d01, 0.8));

  // 6) lichtvlekken op de bodem: twee schuivende lijntjes-netwerken, het kleinste geeft scherpe lijntjes
  float c1 = texture2D(ruis, uv * 0.60 + tijd * vec2(0.030, 0.010)).b;
  float c2 = texture2D(ruis, uv * 0.75 - tijd * vec2(0.020, 0.030)).b;
  float caust = pow(min(c1, c2), 1.5) * 1.3;
  float ondiepF = (1.0 - d01) * (1.0 - d01);
  water += vec3(0.42, 0.60, 0.62) * caust * ondiepF;

  // 8) diep water: bijna zwart, met lichtende aders (zonlicht dat door de golven breekt)
  float diepF = smoothstep(1.5, 3.5, diepte);
  vec2 uvS = vec2(uv.x * 0.6 + uv.y * 0.8, uv.y * 0.6 - uv.x * 0.8);
  float a1 = texture2D(ruis, uvS * vec2(0.14, 0.34) + tijd * vec2(0.012, 0.020)).b;
  float a2 = texture2D(ruis, uvS * vec2(0.21, 0.50) - tijd * vec2(0.018, 0.011)).b;
  float ader = pow(min(a1, a2), 1.6) * 1.1 + a1 * a2 * 0.2;
  ader *= 0.55 + 0.9 * clamp(dot(n, zonRichting), 0.0, 1.0);
  water += kleurAder * ader * diepF;

  // 3) spiegeling van het lucht-panorama (fresnel)
  float fres = pow(1.0 - max(dot(n, kijk), 0.0), 3.0);
  fres = 0.06 + 0.62 * fres;
  vec3 refl = reflect(-kijk, n);
  refl.y = max(refl.y, 0.02);
  float phi = atan(refl.z, -refl.x); if(phi < 0.0) phi += 6.2831853;
  vec2 uvL = vec2(phi / 6.2831853, 1.0 - acos(clamp(refl.y, -1.0, 1.0)) / 3.14159265);
  vec3 lucht = texture2D(luchtMap, uvL).rgb;
  vec3 kleur = mix(water, lucht, fres);

  // 4) de zon: scherpe glinstering + brede zachte glans
  vec3 halfv = normalize(kijk + zonRichting);
  float nh = max(dot(n, halfv), 0.0);
  kleur += vec3(1.0, 0.95, 0.82) * (pow(nh, 380.0) * 1.6 + pow(nh, 40.0) * 0.16);

  // 7) schuim: randjes die naar de oever rollen + wit randje op de waterlijn
  float ruisA = texture2D(ruis, uv * 0.25 + tijd * vec2( 0.010, -0.007)).g;
  float ruisB = texture2D(ruis, uv * 0.80 - tijd * vec2( 0.012,  0.010)).g;
  float band = 0.5 + 0.5 * sin(diepte * 7.0 - tijd * 1.7 + ruisA * 2.5);
  float kust = smoothstep(0.9, 0.05, diepte) * step(0.0, -diepteVast);
  float schuimKust = kust * smoothstep(0.62, 0.96, band + ruisB * 0.30 - 0.12);
  schuimKust = max(schuimKust, smoothstep(0.22, 0.0, diepte) * step(0.0, -diepteVast) * (0.55 + 0.45 * ruisB));
  float top = smoothstep(0.03, 0.06, vHoog) * smoothstep(0.40, 0.80, ruisB * 0.6 + ruisA * 0.6);
  float schuim = clamp(schuimKust + top * 0.6, 0.0, 1.0);
  kleur = mix(kleur, vec3(0.93, 0.97, 0.98), schuim);

  // doorzichtig waar het ondiep is (je ziet de bodem), dicht waar het diep is
  float alpha = mix(0.55, 0.95, clamp(diepte / 1.5, 0.0, 1.0));
  alpha = mix(alpha, 1.0, fres * 0.6);
  alpha = max(alpha, schuim);

  gl_FragColor = vec4(kleur, alpha);
  #include <fog_fragment>
}`;

// Maak het eiland-water. opties: { diepteVast } = vaste diepte (voor het
// buitenmeer, buiten de dieptekaart), anders leest hij de dieptekaart (zet die
// via material.uniforms.dieptemap.value). golfAmp = grootte van de golfjes.
export function eilandWaterMateriaal({ diepteVast = -1, golfAmp = 1 } = {}) {
  const mat = new ShaderMaterial({
    transparent: true,
    side: DoubleSide,
    fog: true,
    depthWrite: false,
    uniforms: UniformsUtils.merge([UniformsLib.fog, {
      tijd: { value: 0 },
      golfAmp: { value: golfAmp },
      ruis: { value: null },
      dieptemap: { value: null },
      luchtMap: { value: null },
      terMaat: { value: TER_SIZE },
      maxDiep: { value: WATER_MAX_DIEP },
      diepteVast: { value: diepteVast },
      zonRichting: { value: ZON_RICHTING.clone() },
      kleurOndiep: { value: new Color(0x3fcfc6) },
      kleurDiep: { value: new Color(0x0a2c48) },
      kleurAder: { value: new Color(0x1f9fb4) },
    }]),
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT,
  });
  mat.uniforms.ruis.value = zeeRuisTextuur();
  mat.uniforms.luchtMap.value = luchtTextuur();
  mat.uniforms.dieptemap.value = waterDieptekaart(null);
  tijdUniforms.add(mat.uniforms.tijd);
  return mat;
}
// (TER_EXT wordt geëxporteerd voor wie de kaart zelf wil aflezen)
export { TER_EXT };
