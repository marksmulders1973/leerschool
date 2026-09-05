// 🌋 BuitenVulkaan (Mark 6 sep 2026): Brian's vulkaan uit zijn eiland
// (deluxeedition.nl/eiland.html, 5 sep) staat nu in het park, in plaats van één
// van de bergen aan de kust. Dezelfde Mayon-kegel (de vorm zit in eilandVorm.js
// zodat je hem ook echt kunt beklimmen), met:
//   • kleuren van onder naar boven: struikgewas → kale rots → lichte as, de
//     erosiegeulen donker (oude lavastromen), de kraterwand pikzwart;
//   • een lavameer in de krater: donkere korst met gloeiende scheuren en
//     borrelende gele plekken (shader, 1:1 het idee van Brian's lavameer);
//   • een rookpluim van zachte wolkjes die opstijgen, groeien en met de wind
//     meedrijven;
//   • elke ~4 minuten een uitbarsting van ~25 s: rommelen, de pluim wordt een
//     zwarte aswolk, het meer gloeit feller en er vliegen gloeiende lavabommen
//     uit de krater die op de helling neerkomen en uitdoven. Niemand gaat dood —
//     dit is een park, geen survival-spel.
// Bij de voet aan de parkkant staat een magische poort naar het leerpad
// "Aardlagen en vulkanen" (aardrijkskunde) + het leerbord — zie ZooScene.
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Float32BufferAttribute, Color, CanvasTexture, ShaderMaterial, AdditiveBlending, SpriteMaterial, MeshStandardMaterial, DoubleSide } from "three";
import { VULKAAN, vulkaanInfo, eilandBasis, buitenHoogte, KRATER_BODEM_Y } from "./eilandVorm";
import { granietTextuur } from "./realisme";
import { LOW_END } from "./grid";

// ── de kegel: polair rooster (ringen × spaken), dichter bij de krater ──
const RINGEN = LOW_END ? 56 : 88, SPAKEN = LOW_END ? 96 : 160;
const V_STRUIK = new Color("#5f8f45"), V_STRUIK2 = new Color("#6f9a4c"), V_ROTS = new Color("#7d6e60"), V_ROTS2 = new Color("#8a7c6e");
const V_AS = new Color("#a89f95"), V_GEUL = new Color("#4a3f38"), V_KRATER = new Color("#1e1916");
const zacht = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
function kegelGeometrie() {
  const pos = [], kleur = [], uv = [], idx = [];
  const c = new Color();
  for (let k = 0; k <= RINGEN; k++) {
    // r loopt van 1,12 R (skirt, onder de grond) naar 0; ^1,6 → fijn bij de krater
    const s = k / RINGEN;
    const r = VULKAAN.R * 1.12 * Math.pow(1 - s, 1.6);
    for (let m = 0; m <= SPAKEN; m++) {
      const hoek = (m / SPAKEN) * Math.PI * 2;
      const x = VULKAAN.x + Math.cos(hoek) * r, z = VULKAAN.z + Math.sin(hoek) * r;
      const vi = vulkaanInfo(x, z) || { h: 0, u: 0, geul: 0, r };
      // skirt: waar de kegel lager is dan ~1,5 m duikt het vlak onder het gras
      const skirt = 0.6 * Math.max(0, 1 - vi.h / 1.5);
      const y = eilandBasis(x, z) + vi.h - skirt;
      pos.push(x, y, z);
      uv.push(hoek * 5, r * 0.12);
      // kleur: struikgewas → rots → as; geulen donker; krater zwart
      const t = vi.h / VULKAAN.H;
      const vlek = 0.5 + 0.5 * Math.sin(x * 0.21 + 0.7) * Math.cos(z * 0.19 + 1.9);
      c.copy(V_STRUIK).lerp(V_STRUIK2, vlek);
      c.lerp(vlek > 0.5 ? V_ROTS : V_ROTS2, zacht(0.10, 0.42, t));
      c.lerp(V_AS, zacht(0.55, 0.92, t));
      c.lerp(V_GEUL, vi.geul * 0.7 * zacht(0.08, 0.4, t));
      if (vi.r < VULKAAN.kraterR * 1.6) c.lerp(V_KRATER, zacht(VULKAAN.kraterR * 1.6, VULKAAN.kraterR * 1.05, vi.r) * 0.92);
      kleur.push(c.r, c.g, c.b);
    }
  }
  const W = SPAKEN + 1;
  for (let k = 0; k < RINGEN; k++) for (let m = 0; m < SPAKEN; m++) {
    const a = k * W + m, b = a + 1, cc = a + W, d = cc + 1;
    idx.push(a, cc, b, b, cc, d);
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  g.setAttribute("color", new Float32BufferAttribute(kleur, 3));
  g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  g.computeBoundingSphere();
  return g;
}
let KEGEL_GEO = null, KEGEL_MAT = null;

// ── het lavameer: korst met gloeiende scheuren (shader) ──
const LAVA_VS = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const LAVA_FS = `
uniform float tijd; uniform float kracht; varying vec2 vUv;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float ruis(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1,0)), f.x), mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y); }
float fbm(vec2 p){ float s = 0.0, a = 0.5; for(int i = 0; i < 4; i++){ s += a * ruis(p); p *= 2.03; a *= 0.5; } return s; }
void main(){
  float rand = length(vUv - 0.5) * 2.0;
  if(rand > 0.97) discard;
  vec2 p = vUv * 7.0;
  vec2 stroom = p * 0.6 + tijd * vec2(0.05, 0.03);
  float m = fbm(stroom);                                   // waar de lava vloeibaar is
  float heet = smoothstep(0.52 - 0.1 * kracht, 0.62, m);
  // scheuren: de naden tussen de korstkussens (ridged noise)
  float n = fbm(p + vec2(3.1, 1.7));
  float scheur = 1.0 - smoothstep(0.0, 0.08, abs(n - 0.5));
  float puls = 0.75 + 0.25 * sin(tijd * 2.3 + m * 12.0);
  vec3 korst = mix(vec3(0.13, 0.11, 0.10), vec3(0.32, 0.30, 0.28), n);
  vec3 gloed = mix(vec3(1.0, 0.25, 0.02), vec3(1.0, 0.85, 0.35), heet * puls);
  vec3 kl = korst;
  kl = mix(kl, vec3(1.0, 0.35, 0.05) * puls, scheur * 0.9);
  kl = mix(kl, gloed, heet);
  kl += vec3(0.5, 0.12, 0.0) * kracht * (0.4 + 0.6 * heet);     // tijdens de uitbarsting: alles feller
  kl *= 1.0 - 0.35 * smoothstep(0.8, 0.97, rand);               // de rand van het meer iets donkerder
  gl_FragColor = vec4(kl, 1.0);
}`;

// ── rook: zachte wolk-sprite (canvas) ──
let ROOK_TEX = null;
function rookTextuur() {
  if (ROOK_TEX) return ROOK_TEX;
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d");
  const v = g.createRadialGradient(32, 32, 2, 32, 32, 31);
  v.addColorStop(0, "rgba(255,255,255,0.55)"); v.addColorStop(0.5, "rgba(255,255,255,0.22)"); v.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = v; g.fillRect(0, 0, 64, 64);
  ROOK_TEX = new CanvasTexture(c);
  return ROOK_TEX;
}

// ── de uitbarsting-klok: gedeeld, zodat andere onderdelen (gids, geluid) ‘m kunnen lezen ──
export const VULKAAN_STAND = { uitbarst: 0, volgende: 0 };   // uitbarst: 0..1 = kracht
const CYCLUS = 240, DUUR = 25, WAARSCHUW = 6;                  // seconden

export default function BuitenVulkaan() {
  const lavaRef = useRef(), lichtRef = useRef(), gloedRef = useRef();
  const rookRefs = useRef([]), bomRefs = useRef([]);
  const t0 = useRef(null);
  if (!KEGEL_GEO) {
    KEGEL_GEO = kegelGeometrie();
    KEGEL_MAT = new MeshStandardMaterial({ vertexColors: true, bumpMap: granietTextuur(), bumpScale: 0.35, roughness: 1, metalness: 0, side: DoubleSide });
  }
  const lavaMat = useMemo(() => new ShaderMaterial({ uniforms: { tijd: { value: 0 }, kracht: { value: 0 } }, vertexShader: LAVA_VS, fragmentShader: LAVA_FS }), []);
  const N_ROOK = LOW_END ? 14 : 34, N_BOM = LOW_END ? 6 : 12;
  // elk wolkje z'n eigen materiaal: doorzichtigheid en kleur (rook → as) per wolkje
  const rookMats = useMemo(() => Array.from({ length: N_ROOK }, () => new SpriteMaterial({ map: rookTextuur(), color: "#d9d4cc", transparent: true, opacity: 0.6, depthWrite: false })), [N_ROOK]);
  const ROOK_KLEUR = useMemo(() => new Color("#d9d4cc"), []), AS_KLEUR = useMemo(() => new Color("#4a4340"), []);
  const gloedMat = useMemo(() => new SpriteMaterial({ map: rookTextuur(), color: "#ff7a1e", transparent: true, opacity: 0.45, blending: AdditiveBlending, depthWrite: false }), []);
  const rook = useMemo(() => Array.from({ length: N_ROOK }, (_, i) => ({ leeftijd: (i / N_ROOK) * 9, duur: 8 + Math.random() * 3, x: 0, z: 0, spin: Math.random() * 6.28 })), [N_ROOK]);
  const bommen = useMemo(() => Array.from({ length: N_BOM }, () => ({ actief: false, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, gloed: 0 })), [N_BOM]);
  const wind = useMemo(() => ({ x: 0.9, z: 0.35 }), []);

  useFrame((s, dtRaw) => {
    const dt = Math.min(0.05, dtRaw);
    const t = s.clock.elapsedTime;
    if (t0.current == null) t0.current = t;
    // ── de klok: elke CYCLUS seconden een uitbarsting van DUUR seconden ──
    const fase = (t - t0.current + CYCLUS - 40) % CYCLUS;        // de eerste na ~40 s (wie net binnenkomt ziet 'm snel)
    const inUitbarst = fase < DUUR;
    const kracht = inUitbarst ? (fase < 4 ? fase / 4 : fase > DUUR - 6 ? Math.max(0, (DUUR - fase) / 6) : 1) : 0;
    const rommel = !inUitbarst && fase > CYCLUS - WAARSCHUW ? (fase - (CYCLUS - WAARSCHUW)) / WAARSCHUW : 0;
    VULKAAN_STAND.uitbarst = kracht; VULKAAN_STAND.volgende = inUitbarst ? 0 : CYCLUS - fase;
    // ── lava + licht ──
    lavaMat.uniforms.tijd.value = t; lavaMat.uniforms.kracht.value = kracht;
    if (lichtRef.current) lichtRef.current.intensity = (14 + 5 * Math.sin(t * 7.3) * Math.sin(t * 2.1)) * (1 + 1.6 * kracht + 0.5 * rommel);
    if (gloedRef.current) { gloedRef.current.material.opacity = 0.35 + 0.5 * kracht + 0.15 * rommel; const sc = 22 + 16 * kracht; gloedRef.current.scale.set(sc, sc * 0.6, 1); }
    // ── rook / as ──
    const stijg = 6 + 8 * kracht;
    rook.forEach((w, i) => {
      w.leeftijd += dt * (1 + 0.4 * kracht);
      if (w.leeftijd > w.duur) { w.leeftijd = 0; w.duur = 8 + Math.random() * 3; w.x = (Math.random() - 0.5) * 3; w.z = (Math.random() - 0.5) * 3; }
      const sp = rookRefs.current[i]; if (!sp) return;
      const a = w.leeftijd, f = a / w.duur;
      const hoog = stijg * a * (1 - 0.35 * f);
      sp.position.set(VULKAAN.x + w.x + wind.x * a * a * 0.45 + Math.sin(a * 1.3 + w.spin) * 1.2, KRATER_BODEM_Y + 2 + hoog, VULKAAN.z + w.z + wind.z * a * a * 0.45);
      const maat = (4 + 22 * f) * (1 + 0.6 * kracht);
      sp.scale.set(maat, maat, 1);
      sp.material.color.copy(ROOK_KLEUR).lerp(AS_KLEUR, kracht);
      sp.material.opacity = (0.55 + 0.2 * kracht) * (f < 0.15 ? f / 0.15 : 1 - (f - 0.15) / 0.85);
    });
    // ── lavabommen tijdens de uitbarsting ──
    bommen.forEach((b, i) => {
      const m = bomRefs.current[i]; if (!m) return;
      if (!b.actief) {
        if (kracht > 0.5 && Math.random() < dt * 1.4) {
          b.actief = true; b.gloed = 1;
          const hoek = Math.random() * 6.28, zij = 4 + Math.random() * 9;
          b.x = VULKAAN.x; b.z = VULKAAN.z; b.y = KRATER_BODEM_Y + 1;
          b.vx = Math.cos(hoek) * zij; b.vz = Math.sin(hoek) * zij; b.vy = 22 + Math.random() * 14;
        } else { m.visible = false; return; }
      }
      b.vy -= 18 * dt; b.x += b.vx * dt; b.z += b.vz * dt; b.y += b.vy * dt;
      const grond = buitenHoogte(b.x, b.z);
      if (b.y <= grond + 0.4 && b.vy < 0) { b.y = grond + 0.4; b.vx = b.vz = b.vy = 0; b.gloed -= dt * 0.35; if (b.gloed <= 0) { b.actief = false; m.visible = false; return; } }
      m.visible = true; m.position.set(b.x, b.y, b.z);
      m.material.emissiveIntensity = 0.4 + 1.6 * Math.max(0, b.gloed);
      m.material.color.setRGB(0.25 + 0.6 * b.gloed, 0.1 + 0.25 * b.gloed, 0.06);
    });
  });

  const bomKleur = "#ff6a1e";
  return (
    <group>
      {/* de kegel */}
      <mesh geometry={KEGEL_GEO} material={KEGEL_MAT} receiveShadow castShadow={!LOW_END} />
      {/* het lavameer in de vlakke kraterbodem */}
      <mesh ref={lavaRef} rotation={[-Math.PI / 2, 0, 0]} position={[VULKAAN.x, KRATER_BODEM_Y + 0.25, VULKAAN.z]} material={lavaMat}>
        <circleGeometry args={[VULKAAN.kraterR * 0.72, 48]} />
      </mesh>
      <pointLight ref={lichtRef} position={[VULKAAN.x, KRATER_BODEM_Y + 4, VULKAAN.z]} color="#ff7a2a" intensity={14} distance={70} decay={2} />
      <sprite ref={gloedRef} position={[VULKAAN.x, KRATER_BODEM_Y + 5, VULKAAN.z]} material={gloedMat} scale={[22, 13, 1]} />
      {/* rookpluim */}
      {rook.map((_, i) => <sprite key={i} ref={(el) => { rookRefs.current[i] = el; }} material={rookMats[i]} />)}
      {/* lavabommen */}
      {bommen.map((_, i) => (
        <mesh key={i} ref={(el) => { bomRefs.current[i] = el; }} visible={false}>
          <sphereGeometry args={[0.55, 8, 6]} />
          <meshStandardMaterial color={bomKleur} emissive="#ff3a00" emissiveIntensity={1.5} roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}
