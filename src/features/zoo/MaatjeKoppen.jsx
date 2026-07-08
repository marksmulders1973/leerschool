// MaatjeKoppen — geanimeerde 3D portret-koppen voor de tutor/fout-uitleg,
// naar het CharleyHead/VonkHead-recept (Mark 8 jul: "maak ze mooi, vooral de
// kop want daar praat je tegen"). Elke kop: zacht meebewegen, knipperoogjes,
// wiebel-oren/antenne en een scharnierende onderkaak die meekwebbelt bij het
// voorlezen. Ze delen één Canvas-wrapper + animatie-hook zodat elke kop zelf
// alleen nog zijn meshes beschrijft.
//
// Eigen mini-canvas (los van het park-canvas), vangt geen klikken.
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// Gedeelde animatie: kop-sway + kaak-kwebbel + knipperen + oor-wiebel.
// De hook geeft refs terug; een kop hangt ze aan zijn eigen meshes.
function useKopAnimatie(praatRef, { earBase = 0.28, earAmp = 0.07, zweef = false } = {}) {
  const head = useRef();
  const jaw = useRef();
  const earL = useRef();
  const earR = useRef();
  const eyeL = useRef();
  const eyeR = useRef();
  const st = useRef({ blink: 2.5 + Math.random() * 3, blinkT: 0 });

  useFrame((s, rawDt) => {
    // dt clampen: bij een achtergrond-tab of trage telefoon (rAF-throttling)
    // wordt dt seconden groot en eet één frame de hele knipper-timer op —
    // oog blijft dan "dicht" hangen. Max 50ms houdt alles proportioneel.
    const dt = Math.min(rawDt, 0.05);
    const t = s.clock.elapsedTime;
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.8) * 0.12;
      head.current.rotation.z = Math.sin(t * 0.6) * 0.04;
      head.current.position.y = -0.05 + Math.sin(t * (zweef ? 1.9 : 1.6)) * (zweef ? 0.03 : 0.02);
    }
    if (jaw.current) {
      const doel = praatRef.current ? 0.34 + Math.sin(t * 14) * 0.24 : 0.03;
      jaw.current.rotation.x += (doel - jaw.current.rotation.x) * Math.min(1, dt * 16);
    }
    if (earL.current) earL.current.rotation.z = earBase + Math.sin(t * 1.3) * earAmp;
    if (earR.current) earR.current.rotation.z = -earBase - Math.sin(t * 1.3) * earAmp;
    st.current.blink -= dt;
    if (st.current.blink <= 0) { st.current.blinkT = 0.13; st.current.blink = 2.5 + Math.random() * 3; }
    let eyeSy = 1;
    if (st.current.blinkT > 0) { st.current.blinkT -= dt; eyeSy = 0.12; }
    if (eyeL.current) eyeL.current.scale.y = eyeSy;
    if (eyeR.current) eyeR.current.scale.y = eyeSy;
  });

  return { head, jaw, earL, earR, eyeL, eyeR };
}

function KopCanvas({ size, children }) {
  return (
    <Canvas
      camera={{ position: [0, -0.1, 2.55], fov: 30 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ width: size, height: size, display: "block", pointerEvents: "none", flexShrink: 0 }}
    >
      <ambientLight intensity={1.05} />
      <directionalLight position={[2.5, 3, 2.5]} intensity={1.15} />
      <directionalLight position={[-2.5, 1.5, 2]} intensity={0.55} color="#ffe9c9" />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}

/* ── 🧱 Blokkie — hoekige blokhond (blok-wereld-stijl) ─────────────────────── */
const BLK = { vacht: "#c98d5f", donker: "#8a6440", licht: "#f2d49b", neus: "#1a1410", tong: "#e98697", oog: "#2a1c12" };

function BlokkieMesh({ praatRef }) {
  const r = useKopAnimatie(praatRef, { earBase: 0.1, earAmp: 0.05 });
  return (
    <group ref={r.head} position={[0, -0.05, 0]}>
      {/* nek + lichte borst */}
      <mesh position={[0, -0.58, -0.02]}><boxGeometry args={[0.42, 0.4, 0.4]} /><meshStandardMaterial color={BLK.vacht} flatShading roughness={0.95} /></mesh>
      <mesh position={[0, -0.58, 0.19]}><boxGeometry args={[0.3, 0.3, 0.06]} /><meshStandardMaterial color={BLK.licht} flatShading roughness={0.95} /></mesh>
      {/* blok-kop */}
      <mesh position={[0, 0.02, 0]}><boxGeometry args={[0.62, 0.56, 0.56]} /><meshStandardMaterial color={BLK.vacht} flatShading roughness={0.9} /></mesh>
      {/* vierkante oogjes */}
      <mesh ref={r.eyeL} position={[-0.16, 0.12, 0.3]}><boxGeometry args={[0.11, 0.13, 0.04]} /><meshStandardMaterial color={BLK.oog} roughness={0.4} /></mesh>
      <mesh ref={r.eyeR} position={[0.16, 0.12, 0.3]}><boxGeometry args={[0.11, 0.13, 0.04]} /><meshStandardMaterial color={BLK.oog} roughness={0.4} /></mesh>
      {/* snuit + blokneus */}
      <mesh position={[0, -0.08, 0.34]}><boxGeometry args={[0.3, 0.22, 0.2]} /><meshStandardMaterial color={BLK.donker} flatShading roughness={0.9} /></mesh>
      <mesh position={[0, -0.01, 0.46]}><boxGeometry args={[0.13, 0.1, 0.06]} /><meshStandardMaterial color={BLK.neus} roughness={0.5} /></mesh>
      {/* blok-oren bovenop (wiebelen subtiel) */}
      <mesh ref={r.earL} position={[-0.22, 0.36, 0]}><boxGeometry args={[0.15, 0.2, 0.13]} /><meshStandardMaterial color={BLK.donker} flatShading roughness={0.9} /></mesh>
      <mesh ref={r.earR} position={[0.22, 0.36, 0]}><boxGeometry args={[0.15, 0.2, 0.13]} /><meshStandardMaterial color={BLK.donker} flatShading roughness={0.9} /></mesh>
      {/* onderkaak (kwebbelt) met blok-tongetje */}
      <group ref={r.jaw} position={[0, -0.19, 0.28]}>
        <mesh position={[0, -0.04, 0.09]}><boxGeometry args={[0.28, 0.09, 0.18]} /><meshStandardMaterial color={BLK.donker} flatShading roughness={0.9} /></mesh>
        <mesh position={[0, -0.005, 0.16]} rotation={[0.4, 0, 0]}><boxGeometry args={[0.11, 0.03, 0.12]} /><meshStandardMaterial color={BLK.tong} roughness={0.6} /></mesh>
      </group>
    </group>
  );
}

/* ── 🦄 Sterre — eenhoorn met hoorn + regenboog-manen ──────────────────────── */
const STR = { wit: "#fdfbff", zacht: "#ead7f5", roze: "#ff8fcf", oog: "#3a2a40", tong: "#e98697" };
const REGENBOOG = ["#ff6b6b", "#ffb84d", "#ffe14d", "#5ad17a", "#5aa6e0", "#b06ad6"];

function SterreMesh({ praatRef }) {
  const r = useKopAnimatie(praatRef, { earBase: 0.35, earAmp: 0.06 });
  return (
    <group ref={r.head} position={[0, -0.05, 0]}>
      {/* nek */}
      <mesh position={[0, -0.58, -0.04]} rotation={[0.18, 0, 0]}>
        <cylinderGeometry args={[0.26, 0.38, 0.5, 16]} /><meshStandardMaterial color={STR.wit} flatShading roughness={0.85} />
      </mesh>
      {/* ronde kop */}
      <mesh position={[0, 0.02, 0]} scale={[1, 0.95, 1]}>
        <sphereGeometry args={[0.36, 16, 16]} /><meshStandardMaterial color={STR.wit} flatShading roughness={0.85} />
      </mesh>
      {/* zachte snuit */}
      <mesh position={[0, -0.1, 0.3]} scale={[0.85, 0.7, 0.9]}>
        <sphereGeometry args={[0.17, 12, 12]} /><meshStandardMaterial color={STR.zacht} flatShading roughness={0.85} />
      </mesh>
      {/* gouden-roze hoorn */}
      <mesh position={[0, 0.44, 0.1]} rotation={[0.35, 0, 0]}>
        <coneGeometry args={[0.06, 0.34, 8]} /><meshStandardMaterial color={STR.roze} roughness={0.35} metalness={0.45} />
      </mesh>
      {/* regenboog-manen (van kruin naar nek) */}
      {REGENBOOG.map((rc, i) => (
        <mesh key={i} position={[0, 0.34 - i * 0.1, -0.22 - i * 0.045]} rotation={[0.3, 0, 0]}>
          <boxGeometry args={[0.16, 0.1, 0.07]} /><meshStandardMaterial color={rc} flatShading roughness={0.8} />
        </mesh>
      ))}
      {/* oortjes (wiebelen) */}
      <mesh ref={r.earL} position={[-0.17, 0.34, 0.02]}><coneGeometry args={[0.06, 0.16, 5]} /><meshStandardMaterial color={STR.wit} flatShading roughness={0.85} /></mesh>
      <mesh ref={r.earR} position={[0.17, 0.34, 0.02]}><coneGeometry args={[0.06, 0.16, 5]} /><meshStandardMaterial color={STR.wit} flatShading roughness={0.85} /></mesh>
      {/* oogjes met wimper-look + blosjes */}
      <mesh ref={r.eyeL} position={[-0.14, 0.1, 0.33]}><sphereGeometry args={[0.06, 12, 12]} /><meshStandardMaterial color={STR.oog} roughness={0.35} /></mesh>
      <mesh ref={r.eyeR} position={[0.14, 0.1, 0.33]}><sphereGeometry args={[0.06, 12, 12]} /><meshStandardMaterial color={STR.oog} roughness={0.35} /></mesh>
      {[-0.21, 0.21].map((x, i) => (
        <mesh key={i} position={[x, -0.02, 0.26]} scale={[1, 0.7, 0.5]}><sphereGeometry args={[0.05, 8, 8]} /><meshStandardMaterial color={STR.roze} transparent opacity={0.55} roughness={0.9} /></mesh>
      ))}
      {/* onderkaak (kwebbelt) met tongetje */}
      <group ref={r.jaw} position={[0, -0.18, 0.24]}>
        <mesh position={[0, -0.035, 0.08]} scale={[0.8, 0.55, 0.8]}><sphereGeometry args={[0.13, 10, 10]} /><meshStandardMaterial color={STR.zacht} flatShading roughness={0.85} /></mesh>
        <mesh position={[0, 0, 0.13]} rotation={[0.4, 0, 0]}><boxGeometry args={[0.09, 0.025, 0.1]} /><meshStandardMaterial color={STR.tong} roughness={0.6} /></mesh>
      </group>
    </group>
  );
}

/* ── 🤖 Bliep — robot met lampjes-ogen en antenne ──────────────────────────── */
const ROB = { staal: "#8fa8c8", paneel: "#5a7396", licht: "#4ec9e0" };

function BliepMesh({ praatRef }) {
  const r = useKopAnimatie(praatRef, { earBase: 0, earAmp: 0.18 });
  return (
    <group ref={r.head} position={[0, -0.05, 0]}>
      {/* nek-scharnier + schouderplaat */}
      <mesh position={[0, -0.48, 0]}><cylinderGeometry args={[0.09, 0.09, 0.16, 10]} /><meshStandardMaterial color={ROB.paneel} roughness={0.6} metalness={0.4} /></mesh>
      <mesh position={[0, -0.62, 0]}><boxGeometry args={[0.55, 0.16, 0.4]} /><meshStandardMaterial color={ROB.staal} flatShading roughness={0.6} metalness={0.35} /></mesh>
      {/* kop-blik */}
      <mesh position={[0, 0.02, 0]}><boxGeometry args={[0.6, 0.52, 0.5]} /><meshStandardMaterial color={ROB.staal} flatShading roughness={0.55} metalness={0.4} /></mesh>
      {/* gezichts-paneel */}
      <mesh position={[0, 0.02, 0.26]}><boxGeometry args={[0.46, 0.38, 0.02]} /><meshStandardMaterial color={ROB.paneel} flatShading roughness={0.7} /></mesh>
      {/* lampjes-ogen (knipperen = even uit) */}
      <mesh ref={r.eyeL} position={[-0.13, 0.1, 0.31]}><sphereGeometry args={[0.065, 10, 10]} /><meshStandardMaterial color={ROB.licht} emissive={ROB.licht} emissiveIntensity={0.9} roughness={0.3} /></mesh>
      <mesh ref={r.eyeR} position={[0.13, 0.1, 0.31]}><sphereGeometry args={[0.065, 10, 10]} /><meshStandardMaterial color={ROB.licht} emissive={ROB.licht} emissiveIntensity={0.9} roughness={0.3} /></mesh>
      {/* zij-boutjes */}
      {[-1, 1].map((s, i) => (
        <mesh key={i} position={[s * 0.32, 0.05, 0]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.07, 0.07, 0.08, 8]} /><meshStandardMaterial color={ROB.paneel} roughness={0.55} metalness={0.4} /></mesh>
      ))}
      {/* antenne (wiebelt via earL-ref) met lampje */}
      <group ref={r.earL} position={[0, 0.28, 0]}>
        <mesh position={[0, 0.1, 0]}><cylinderGeometry args={[0.018, 0.018, 0.2, 6]} /><meshStandardMaterial color={ROB.paneel} roughness={0.6} /></mesh>
        <mesh position={[0, 0.23, 0]}><sphereGeometry args={[0.05, 8, 8]} /><meshStandardMaterial color={ROB.licht} emissive={ROB.licht} emissiveIntensity={1} roughness={0.3} /></mesh>
      </group>
      {/* onderkaak = kwebbel-luikje met licht erachter */}
      <group ref={r.jaw} position={[0, -0.16, 0.24]}>
        <mesh position={[0, -0.045, 0.02]}><boxGeometry args={[0.3, 0.1, 0.06]} /><meshStandardMaterial color={ROB.paneel} flatShading roughness={0.6} metalness={0.3} /></mesh>
        <mesh position={[0, -0.045, -0.01]}><boxGeometry args={[0.24, 0.05, 0.02]} /><meshStandardMaterial color={ROB.licht} emissive={ROB.licht} emissiveIntensity={0.7} roughness={0.4} /></mesh>
      </group>
    </group>
  );
}

/* ── 🧝 Elfi — bos-elfje met puntmuts, belletje en puntoortjes ─────────────── */
const ELF = { huid: "#f2c9a0", groen: "#3f9e5a", goud: "#ffd23a", oog: "#2f3b2a", tong: "#e98697", blos: "#f0977f" };

function ElfiMesh({ praatRef }) {
  const r = useKopAnimatie(praatRef, { earBase: -1.25, earAmp: 0.08 });
  return (
    <group ref={r.head} position={[0, -0.05, 0]}>
      {/* nek + groene kraag */}
      <mesh position={[0, -0.52, 0]}><cylinderGeometry args={[0.12, 0.16, 0.3, 10]} /><meshStandardMaterial color={ELF.huid} flatShading roughness={0.9} /></mesh>
      <mesh position={[0, -0.62, 0]}><cylinderGeometry args={[0.3, 0.36, 0.16, 8]} /><meshStandardMaterial color={ELF.groen} flatShading roughness={0.9} /></mesh>
      {/* hoofd */}
      <mesh position={[0, 0, 0]} scale={[1, 1.02, 1]}>
        <sphereGeometry args={[0.33, 16, 16]} /><meshStandardMaterial color={ELF.huid} flatShading roughness={0.9} />
      </mesh>
      {/* puntoortjes (wiebelen) */}
      <mesh ref={r.earL} position={[-0.33, 0.06, 0]}><coneGeometry args={[0.07, 0.22, 4]} /><meshStandardMaterial color={ELF.huid} flatShading roughness={0.9} /></mesh>
      <mesh ref={r.earR} position={[0.33, 0.06, 0]}><coneGeometry args={[0.07, 0.22, 4]} /><meshStandardMaterial color={ELF.huid} flatShading roughness={0.9} /></mesh>
      {/* scheve puntmuts met gouden belletje */}
      <group position={[0, 0.32, 0]} rotation={[0, 0, -0.24]}>
        <mesh><coneGeometry args={[0.3, 0.46, 8]} /><meshStandardMaterial color={ELF.groen} flatShading roughness={0.9} /></mesh>
        <mesh position={[0, -0.2, 0]}><cylinderGeometry args={[0.31, 0.33, 0.09, 8]} /><meshStandardMaterial color={ELF.goud} flatShading roughness={0.7} /></mesh>
        <mesh position={[0.1, 0.26, 0]}><sphereGeometry args={[0.06, 8, 8]} /><meshStandardMaterial color={ELF.goud} roughness={0.3} metalness={0.5} /></mesh>
      </group>
      {/* oogjes + blosjes + wipneusje */}
      <mesh ref={r.eyeL} position={[-0.12, 0.05, 0.28]}><sphereGeometry args={[0.05, 10, 10]} /><meshStandardMaterial color={ELF.oog} roughness={0.35} /></mesh>
      <mesh ref={r.eyeR} position={[0.12, 0.05, 0.28]}><sphereGeometry args={[0.05, 10, 10]} /><meshStandardMaterial color={ELF.oog} roughness={0.35} /></mesh>
      {[-0.2, 0.2].map((x, i) => (
        <mesh key={i} position={[x, -0.06, 0.24]} scale={[1, 0.7, 0.5]}><sphereGeometry args={[0.05, 8, 8]} /><meshStandardMaterial color={ELF.blos} transparent opacity={0.6} roughness={0.9} /></mesh>
      ))}
      <mesh position={[0, -0.03, 0.33]}><sphereGeometry args={[0.045, 8, 8]} /><meshStandardMaterial color={ELF.huid} flatShading roughness={0.85} /></mesh>
      {/* onderkaak/kin (kwebbelt) met tongetje */}
      <group ref={r.jaw} position={[0, -0.16, 0.2]}>
        <mesh position={[0, -0.04, 0.06]} scale={[1, 0.6, 0.8]}><sphereGeometry args={[0.12, 10, 10]} /><meshStandardMaterial color={ELF.huid} flatShading roughness={0.9} /></mesh>
        <mesh position={[0, -0.005, 0.11]} rotation={[0.4, 0, 0]}><boxGeometry args={[0.07, 0.02, 0.08]} /><meshStandardMaterial color={ELF.tong} roughness={0.6} /></mesh>
      </group>
    </group>
  );
}

/* ── 🧌 Knoest — lief-sterke knuffeltrol met onderbeet-tandjes ─────────────── */
const TRL = { mos: "#9aa86e", donker: "#6e7a4a", oker: "#e8b56a", oog: "#2f3226", tand: "#fdfbf6", tong: "#d9808f" };

function KnoestMesh({ praatRef }) {
  const r = useKopAnimatie(praatRef, { earBase: 0.15, earAmp: 0.06 });
  return (
    <group ref={r.head} position={[0, -0.05, 0]}>
      {/* brede nek/schouders */}
      <mesh position={[0, -0.56, -0.02]}><cylinderGeometry args={[0.34, 0.44, 0.4, 12]} /><meshStandardMaterial color={TRL.mos} flatShading roughness={1} /></mesh>
      {/* grote ronde kop */}
      <mesh position={[0, 0.02, 0]} scale={[1.05, 0.95, 0.95]}>
        <icosahedronGeometry args={[0.37, 1]} /><meshStandardMaterial color={TRL.mos} flatShading roughness={1} />
      </mesh>
      {/* haardot */}
      <mesh position={[0, 0.4, 0]} rotation={[0.12, 0, 0.12]}><coneGeometry args={[0.1, 0.22, 5]} /><meshStandardMaterial color={TRL.oker} flatShading roughness={1} /></mesh>
      {/* grote zachte neus */}
      <mesh position={[0, -0.02, 0.33]} scale={[1, 0.85, 0.9]}><sphereGeometry args={[0.13, 10, 10]} /><meshStandardMaterial color={TRL.donker} flatShading roughness={0.95} /></mesh>
      {/* oogjes boven de neus */}
      <mesh ref={r.eyeL} position={[-0.15, 0.12, 0.33]}><sphereGeometry args={[0.055, 10, 10]} /><meshStandardMaterial color={TRL.oog} roughness={0.4} /></mesh>
      <mesh ref={r.eyeR} position={[0.15, 0.12, 0.33]}><sphereGeometry args={[0.055, 10, 10]} /><meshStandardMaterial color={TRL.oog} roughness={0.4} /></mesh>
      {/* ronde oortjes (wiebelen) */}
      <mesh ref={r.earL} position={[-0.37, 0.08, 0]} scale={[0.5, 1, 0.8]}><sphereGeometry args={[0.1, 8, 8]} /><meshStandardMaterial color={TRL.mos} flatShading roughness={1} /></mesh>
      <mesh ref={r.earR} position={[0.37, 0.08, 0]} scale={[0.5, 1, 0.8]}><sphereGeometry args={[0.1, 8, 8]} /><meshStandardMaterial color={TRL.mos} flatShading roughness={1} /></mesh>
      {/* onderkaak mét onderbeet-tandjes (kwebbelen mee — extra grappig) */}
      <group ref={r.jaw} position={[0, -0.17, 0.22]}>
        <mesh position={[0, -0.045, 0.06]} scale={[1.1, 0.6, 0.9]}><sphereGeometry args={[0.14, 10, 10]} /><meshStandardMaterial color={TRL.mos} flatShading roughness={1} /></mesh>
        {[-0.07, 0.07].map((x, i) => (
          <mesh key={i} position={[x, 0.02, 0.13]}><boxGeometry args={[0.05, 0.08, 0.03]} /><meshStandardMaterial color={TRL.tand} roughness={0.5} /></mesh>
        ))}
        <mesh position={[0, -0.02, 0.1]} rotation={[0.4, 0, 0]}><boxGeometry args={[0.08, 0.02, 0.08]} /><meshStandardMaterial color={TRL.tong} roughness={0.6} /></mesh>
      </group>
    </group>
  );
}

/* ── exports: één component per maatje, zelfde API als CharleyHead ─────────── */
function maakKop(Mesh) {
  return function Kop({ size = 64, praat = false }) {
    const praatRef = useRef(praat);
    praatRef.current = praat;
    return (
      <KopCanvas size={size}>
        <Mesh praatRef={praatRef} />
      </KopCanvas>
    );
  };
}

export const BlokkieHead = maakKop(BlokkieMesh);
export const SterreHead = maakKop(SterreMesh);
export const BliepHead = maakKop(BliepMesh);
export const ElfiHead = maakKop(ElfiMesh);
export const KnoestHead = maakKop(KnoestMesh);
