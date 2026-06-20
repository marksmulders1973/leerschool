// ZookwartierGame — pagina-wrapper voor de 3D verzamel-dierentuin.
// STAP 1 (pijplijn): toont één ingeladen dier netjes belicht op een grasvlak
// met orbit-camera. Bewust nog géén winkel/economie/bezoekers — eerst bewijzen
// dat de model-pijplijn er mooi uitziet, dan pas verder bouwen.
//
// De zware three.js-scene laadt lazy (zie ZooScene), zodat de leer-app snel blijft.
import { lazy, Suspense } from "react";

const ZooScene = lazy(() => import("../features/zoo/ZooScene"));

export default function ZookwartierGame({ onHome }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "#bfe3ff", overflow: "hidden" }}>
      {/* Header met titel + terug-knop, zwevend boven de canvas. */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          background: "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0))",
          pointerEvents: "none",
        }}
      >
        <div style={{ color: "#fff", font: "800 18px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.35)" }}>
          🦊 Mijn Dierentuin
        </div>
        <button
          onClick={onHome}
          style={{
            pointerEvents: "auto",
            border: "none",
            borderRadius: 999,
            padding: "8px 16px",
            font: "700 14px system-ui",
            color: "#234",
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 2px 8px rgba(0,0,0,.18)",
            cursor: "pointer",
          }}
        >
          ← Terug
        </button>
      </div>

      <Suspense
        fallback={
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#3a5a2a", font: "600 15px system-ui" }}>
            Dierentuin laden…
          </div>
        }
      >
        <ZooScene />
      </Suspense>

      {/* Hint onderaan. */}
      <div
        style={{
          position: "absolute",
          bottom: 14,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#fff",
          font: "600 13px system-ui",
          textShadow: "0 1px 4px rgba(0,0,0,.4)",
          pointerEvents: "none",
        }}
      >
        Sleep om rond te kijken · scroll of knijp om te zoomen
      </div>
    </div>
  );
}
