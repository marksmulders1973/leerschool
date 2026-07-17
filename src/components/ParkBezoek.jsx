// ParkBezoek — bekijk het park van een vriend (ALLEEN-LEZEN). Geopend via een
// deel-link /dierentuin?bezoek=<code>. Je kunt rondlopen en rondkijken, maar niets
// kopen, plaatsen, verplaatsen of opslaan. Bewust geen namen/chat/ranglijst →
// veilig voor kinderen (AVG: minimaal kinderdata). De data komt via de veilige
// RPC get_shared_park, die enkel de park-indeling teruggeeft.
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { loadSharedPark, saneerLayout } from "../features/zoo/zooState";
import ParkErrorBoundary from "../features/zoo/ParkErrorBoundary";
import { deserialize as deserTerrain } from "../features/zoo/terrain";
import { track } from "../utils.js";

const ZooScene = lazy(() => import("../features/zoo/ZooScene"));

// Vinger als aanwijzer (telefoon/tablet) → joystick tonen; met een muis niet:
// daar loop je met WASD/pijltjes (zelfde regel als in het eigen park).
const COARSE_POINTER = typeof window !== "undefined" && !!window.matchMedia?.("(pointer: coarse)")?.matches;

// Touch-joystick om rond te lopen (zelfde gedrag als in het eigen park).
function Joystick({ inputRef }) {
  const base = useRef(null);
  const active = useRef(false);
  const [knob, setKnob] = useState({ x: 0, y: 0 });
  const R = 44;
  const naar = (cx, cy) => {
    const r = base.current.getBoundingClientRect();
    let dx = cx - (r.left + r.width / 2);
    let dy = cy - (r.top + r.height / 2);
    const d = Math.hypot(dx, dy);
    if (d > R) { dx = (dx / d) * R; dy = (dy / d) * R; }
    setKnob({ x: dx, y: dy });
    inputRef.current.joy = { x: dx / R, y: dy / R };
  };
  const stop = () => { active.current = false; setKnob({ x: 0, y: 0 }); inputRef.current.joy = { x: 0, y: 0 }; };
  return (
    <div
      ref={base}
      onPointerDown={(e) => { active.current = true; try { e.currentTarget.setPointerCapture(e.pointerId); } catch {} naar(e.clientX, e.clientY); }}
      onPointerMove={(e) => { if (active.current) naar(e.clientX, e.clientY); }}
      onPointerUp={stop}
      onPointerCancel={stop}
      style={{ position: "absolute", left: 16, bottom: 24, width: 104, height: 104, borderRadius: "50%", background: "rgba(255,255,255,0.26)", border: "2px solid rgba(255,255,255,0.55)", zIndex: 12, touchAction: "none", boxShadow: "0 3px 10px rgba(0,0,0,.2)" }}
    >
      <div style={{ position: "absolute", left: "50%", top: "50%", width: 44, height: 44, marginLeft: -22, marginTop: -22, transform: `translate(${knob.x}px, ${knob.y}px)`, borderRadius: "50%", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 6px rgba(0,0,0,.3)" }} />
    </div>
  );
}

const noop = () => {};

export default function ParkBezoek({ code, onHome }) {
  const [state, setState] = useState("laden"); // 'laden' | 'ok' | 'leeg'
  const [placedItems, setPlacedItems] = useState([]);
  const [terrain, setTerrain] = useState(null);
  const inputRef = useRef({ keys: {}, joy: { x: 0, y: 0 } });

  // Toetsenbord-besturing (laptop): pijltjes / WASD.
  useEffect(() => {
    const codes = new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD"]);
    const down = (e) => { if (codes.has(e.code)) { inputRef.current.keys[e.code] = true; if (e.code.startsWith("Arrow")) e.preventDefault(); } };
    const up = (e) => { if (codes.has(e.code)) inputRef.current.keys[e.code] = false; };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try { track("park_bezoek"); } catch { /* nooit laten breken */ }
      const row = await loadSharedPark(code);
      if (cancel) return;
      if (row && Array.isArray(row.layout)) {
        // saneerLayout: blok-migratie (anders mist het park van een vriend zijn
        // zelfgebouwde huizen in oud formaat) + corrupte items eruit.
        setPlacedItems(saneerLayout(row.layout));
        setTerrain(deserTerrain(row.terrain));
        setState("ok");
      } else {
        setState("leeg");
      }
    })();
    return () => { cancel = true; };
  }, [code]);

  const terug = () => { if (onHome) onHome(); else window.location.href = "/dierentuin"; };

  if (state === "leeg") {
    return (
      <div style={{ position: "fixed", inset: 0, background: "#aaddff", display: "grid", placeItems: "center", padding: 20 }}>
        <div style={{ background: "#fffef8", borderRadius: 18, boxShadow: "0 12px 40px rgba(0,0,0,.3)", padding: "22px 24px", maxWidth: 420, textAlign: "center" }}>
          <div style={{ fontSize: 40 }}>🐾</div>
          <h2 style={{ font: "800 20px system-ui", color: "#234", margin: "8px 0" }}>Park niet gevonden</h2>
          <p style={{ font: "500 14.5px/1.5 system-ui", color: "#555", marginTop: 0 }}>Deze uitnodiging werkt niet meer of de link klopt niet helemaal. Vraag je vriend om de link nog eens te sturen.</p>
          <button onClick={terug} style={{ marginTop: 8, border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", cursor: "pointer" }}>← Naar mijn eigen park</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: "fixed", inset: 0, background: "#aaddff", overflow: "hidden" }}>
      {/* Header. */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8, padding: "10px 12px", background: "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0))", pointerEvents: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ color: "#fff", font: "800 18px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.35)" }}>👀 Park van een vriend</div>
          <span style={{ font: "800 11px system-ui", color: "#234", background: "#fff", padding: "3px 9px", borderRadius: 999, boxShadow: "0 2px 6px rgba(0,0,0,.2)", whiteSpace: "nowrap" }}>alleen kijken</span>
        </div>
        <button onClick={terug} style={{ pointerEvents: "auto", border: "none", borderRadius: 999, padding: "8px 16px", font: "700 14px system-ui", color: "#234", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>← Mijn eigen park</button>
      </div>

      {/* Info onderaan. */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10, padding: "12px 14px calc(12px + env(safe-area-inset-bottom))", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(0deg, rgba(0,0,0,0.22), rgba(0,0,0,0))", pointerEvents: "none" }}>
        <span style={{ color: "#fff", font: "700 13px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)", textAlign: "center" }}>
          Loop rond met de joystick (of de pijltjes) en kijk rustig rond — sleep om te draaien, knijp om te zoomen.
        </span>
      </div>

      <ParkErrorBoundary onHome={terug}>
      <Suspense fallback={<div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#3a5a2a", font: "600 15px system-ui" }}>Park laden…</div>}>
        <ZooScene
          placingAsset={null}
          placingRot={0}
          placedItems={placedItems}
          onPlace={noop}
          onSelectPlaced={noop}
          onClearSelection={noop}
          onBuy={noop}
          prices={{ food: 5, drink: 4, ice: 4, popcorn: 4 }}
          followCam={true}
          terrain={terrain}
          onTerrainChange={noop}
          sculptMode={false}
          sculptDir={1}
          selectedIdx={null}
          moveIdx={-1}
          inputRef={inputRef}
          parkNaam="Dierenpark"
        />
      </Suspense>
      </ParkErrorBoundary>

      {state === "ok" && COARSE_POINTER && <Joystick inputRef={inputRef} />}
    </div>
  );
}
