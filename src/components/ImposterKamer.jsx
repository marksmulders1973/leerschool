// 🕵️ Imposter — stap 2 (Brian, 23 sep 2026): "als je op bedrieger klikt kom je
// in een witte kamer". First-person witte kamer 20×20×5 m, zoals Brians eigen
// witte kamer op deluxeedition.nl (16 sep), maar dan in React-Three-Fiber zodat
// het in de Leerkwartier-app past. Besturing: pc = klik in beeld (muis-lock),
// WASD/pijltjes lopen, Shift = rennen; telefoon = linkerhelft slepen = lopen,
// rechterhelft slepen = rondkijken. Nog geen spelregels — Brian bepaalt stap 3.
// Les uit Brians versie: alles puur wit + veel licht = beeld loopt vol, dus de
// materialen net niet wit en de naden tussen de tegels donker.
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { CanvasTexture, RepeatWrapping, Vector3, Euler } from "three";

const KAMER = 20;      // meter, breed en diep
const HOOGTE = 5;      // meter
const OOG = 1.6;       // ooghoogte
const RAND = 0.6;      // hoe dicht je bij de muur mag

function tegelTextuur(herhaal) {
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#f2f2f2"; g.fillRect(0, 0, 256, 256);
  g.strokeStyle = "rgba(0,0,0,0.22)"; g.lineWidth = 5; g.strokeRect(3, 3, 250, 250);
  const t = new CanvasTexture(c); t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(herhaal, herhaal); t.anisotropy = 4;
  return t;
}

function Kamer() {
  const vloer = useMemo(() => tegelTextuur(KAMER), []);
  const muur = useMemo(() => tegelTextuur(KAMER / 2), []);
  const h = KAMER / 2;
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[KAMER, KAMER]} /><meshStandardMaterial map={vloer} color="#f4f4f4" roughness={0.9} /></mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, HOOGTE, 0]}><planeGeometry args={[KAMER, KAMER]} /><meshStandardMaterial color="#f0f0f0" emissive="#ffffff" emissiveIntensity={0.18} roughness={1} /></mesh>
      {[[0, HOOGTE / 2, -h, 0], [0, HOOGTE / 2, h, Math.PI], [-h, HOOGTE / 2, 0, Math.PI / 2], [h, HOOGTE / 2, 0, -Math.PI / 2]].map(([x, y, z, ry], i) => (
        <mesh key={i} position={[x, y, z]} rotation={[0, ry, 0]}><planeGeometry args={[KAMER, HOOGTE]} /><meshStandardMaterial map={muur} color="#f0f0f0" roughness={0.95} /></mesh>
      ))}
      {/* plint langs de muren */}
      {[[0, 0.06, -h + 0.02, 0], [0, 0.06, h - 0.02, Math.PI], [-h + 0.02, 0.06, 0, Math.PI / 2], [h - 0.02, 0.06, 0, -Math.PI / 2]].map(([x, y, z, ry], i) => (
        <mesh key={"p" + i} position={[x, y, z]} rotation={[0, ry, 0]}><boxGeometry args={[KAMER, 0.12, 0.04]} /><meshStandardMaterial color="#d9d9d9" /></mesh>
      ))}
      {/* vier lichtbakken in het plafond */}
      {[[-5, -5], [5, -5], [-5, 5], [5, 5]].map(([x, z], i) => (
        <group key={"l" + i} position={[x, HOOGTE - 0.02, z]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}><planeGeometry args={[2.4, 1.2]} /><meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.6} /></mesh>
          {/* three r155+: lampen in candela, dus veel hogere getallen dan in Brians r128-versie */}
          <pointLight position={[0, -0.3, 0]} intensity={30} distance={20} decay={2} />
        </group>
      ))}
      {/* samen ≈ 1,1 licht op de muren: wit, maar niet volgelopen (0,3+0,4 was grijs; 1,4+1,2 liep vol) */}
      <ambientLight intensity={0.55} />
      <hemisphereLight args={["#ffffff", "#e6e6e6", 0.6]} />
    </group>
  );
}

// Loopt met WASD/pijltjes (pc) of de touch-joystick (telefoon); klemt tegen de muren.
function Speler({ toetsen, touchLoop, touchKijk }) {
  const { camera } = useThree();
  const richting = useMemo(() => new Vector3(), []);
  const zij = useMemo(() => new Vector3(), []);
  const euler = useMemo(() => new Euler(0, 0, 0, "YXZ"), []);
  useEffect(() => { camera.position.set(0, OOG, 6); camera.lookAt(0, OOG, 0); }, [camera]);
  useFrame((_, dt) => {
    const d = Math.min(dt, 0.05);
    // rondkijken via touch (rechterhelft slepen)
    if (touchKijk.current.dx || touchKijk.current.dy) {
      euler.setFromQuaternion(camera.quaternion);
      euler.y -= touchKijk.current.dx * 0.004; euler.x -= touchKijk.current.dy * 0.004;
      euler.x = Math.max(-1.4, Math.min(1.4, euler.x));
      camera.quaternion.setFromEuler(euler);
      touchKijk.current.dx = 0; touchKijk.current.dy = 0;
    }
    const k = toetsen.current;
    let vx = (k.d ? 1 : 0) - (k.a ? 1 : 0) + touchLoop.current.x;
    let vz = (k.s ? 1 : 0) - (k.w ? 1 : 0) + touchLoop.current.y;
    const len = Math.hypot(vx, vz); if (len > 1) { vx /= len; vz /= len; }
    if (len === 0) return;
    const snel = (k.shift ? 6.5 : 3.6) * d;
    camera.getWorldDirection(richting); richting.y = 0; richting.normalize();
    zij.set(-richting.z, 0, richting.x);
    camera.position.addScaledVector(richting, -vz * snel).addScaledVector(zij, vx * snel);
    const lim = KAMER / 2 - RAND;
    camera.position.x = Math.max(-lim, Math.min(lim, camera.position.x));
    camera.position.z = Math.max(-lim, Math.min(lim, camera.position.z));
    camera.position.y = OOG;
  });
  return null;
}

export default function ImposterKamer({ onTerug }) {
  const toetsen = useRef({});
  const touchLoop = useRef({ x: 0, y: 0 });
  const touchKijk = useRef({ dx: 0, dy: 0 });
  const [gelockt, setGelockt] = useState(false);
  const isTouch = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const vingers = useRef({});

  useEffect(() => {
    const map = { KeyW: "w", ArrowUp: "w", KeyA: "a", ArrowLeft: "a", KeyS: "s", ArrowDown: "s", KeyD: "d", ArrowRight: "d", ShiftLeft: "shift", ShiftRight: "shift" };
    const down = (e) => { const k = map[e.code]; if (k) { toetsen.current[k] = true; e.preventDefault(); } };
    const up = (e) => { const k = map[e.code]; if (k) toetsen.current[k] = false; };
    window.addEventListener("keydown", down); window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  // Telefoon: linkerhelft = joystick (lopen), rechterhelft = rondkijken.
  const onTouchStart = (e) => { for (const t of e.changedTouches) vingers.current[t.identifier] = { x0: t.clientX, y0: t.clientY, x: t.clientX, y: t.clientY, links: t.clientX < window.innerWidth / 2 }; };
  const onTouchMove = (e) => {
    for (const t of e.changedTouches) {
      const v = vingers.current[t.identifier]; if (!v) continue;
      if (v.links) { touchLoop.current.x = Math.max(-1, Math.min(1, (t.clientX - v.x0) / 45)); touchLoop.current.y = Math.max(-1, Math.min(1, (t.clientY - v.y0) / 45)); }
      else { touchKijk.current.dx += t.clientX - v.x; touchKijk.current.dy += t.clientY - v.y; }
      v.x = t.clientX; v.y = t.clientY;
    }
  };
  const onTouchEnd = (e) => { for (const t of e.changedTouches) { const v = vingers.current[t.identifier]; if (v && v.links) touchLoop.current = { x: 0, y: 0 }; delete vingers.current[t.identifier]; } };

  return (
    <div style={{ position: "fixed", inset: 0, background: "#f4f4f4", touchAction: "none" }} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onTouchCancel={onTouchEnd}>
      <Canvas camera={{ fov: 75, near: 0.1, far: 100 }} gl={{ antialias: true }} dpr={[1, 1.5]}>
        <color attach="background" args={["#f4f4f4"]} />
        <Suspense fallback={null}>
          <Kamer />
          <Speler toetsen={toetsen} touchLoop={touchLoop} touchKijk={touchKijk} />
          {!isTouch && <PointerLockControls onLock={() => setGelockt(true)} onUnlock={() => setGelockt(false)} />}
        </Suspense>
      </Canvas>
      {/* HUD */}
      <button type="button" onClick={onTerug} style={{ position: "absolute", top: 12, left: 12, zIndex: 3, background: "rgba(15,23,42,.85)", color: "#fff", border: "none", borderRadius: 999, padding: "8px 14px", fontWeight: 800, fontFamily: "system-ui", cursor: "pointer" }}>← Terug</button>
      <div style={{ position: "absolute", top: 12, right: 12, zIndex: 3, background: "rgba(15,23,42,.85)", color: "#fff", borderRadius: 999, padding: "8px 14px", fontWeight: 800, fontFamily: "system-ui" }}>🕵️ Imposter</div>
      {!isTouch && !gelockt && (
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", zIndex: 2, pointerEvents: "none" }}>
          <div style={{ background: "rgba(15,23,42,.85)", color: "#fff", borderRadius: 18, padding: "16px 22px", fontFamily: "system-ui", textAlign: "center", fontWeight: 700 }}>
            Klik in beeld om te spelen<br /><span style={{ fontWeight: 500, opacity: .85 }}>WASD of pijltjes = lopen · muis = kijken · Shift = rennen · Esc = muis vrij</span>
          </div>
        </div>
      )}
      {isTouch && <div style={{ position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center", zIndex: 2, color: "#334155", fontFamily: "system-ui", fontWeight: 700, fontSize: 13, pointerEvents: "none" }}>links slepen = lopen · rechts slepen = kijken</div>}
    </div>
  );
}
