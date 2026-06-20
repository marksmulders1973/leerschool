// ZookwartierGame — pagina-wrapper voor "Mijn Park" (3D verzamel-dierentuin).
// STAP 2 (plaatsing): dieren op een grid zetten. Tik op "Dier plaatsen", tik
// dan op een vakje. Bezet = rood, vrij = groen. Opslaan komt in stap 3, dus de
// indeling is nu nog per sessie (niet bewaard na herladen).
//
// De zware three.js-scene laadt lazy, zodat de leer-app snel blijft.
import { lazy, Suspense, useState } from "react";

const ZooScene = lazy(() => import("../features/zoo/ZooScene"));

// Wat je (voorlopig) kunt plaatsen. Groeit later met Kenney-dieren/attracties.
const PLAATSBAAR = [{ assetId: "fox", emoji: "🦊", label: "Vos" }];

export default function ZookwartierGame({ onHome, userName }) {
  const naam = (userName || "").trim();
  // Gepersonaliseerde parknaam: ingelogd → "Mark's Park", anders "Mijn Park".
  const parkNaam = naam ? `${naam}'s Park` : "Mijn Park";

  // Starter-park: nooit leeg beginnen — één dier staat er al.
  const [placedItems, setPlacedItems] = useState([{ assetId: "fox", cell: [0, 0], rotation: -0.5 }]);
  const [placingAsset, setPlacingAsset] = useState(null);

  const plaatsDier = (cell) => {
    setPlacedItems((items) => [...items, { assetId: placingAsset, cell, rotation: 0 }]);
    // Blijf in plaats-modus zodat je er snel meer neerzet.
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "#aaddff", overflow: "hidden" }}>
      {/* Header met parknaam + "in opbouw" + terug-knop. */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px",
          background: "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0))",
          pointerEvents: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ color: "#fff", font: "800 18px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.35)" }}>
            🐾 {parkNaam}
          </div>
          <span style={{ font: "800 11px system-ui", color: "#5b3d00", background: "#ffd54a", padding: "3px 9px", borderRadius: 999, boxShadow: "0 2px 6px rgba(0,0,0,.2)", whiteSpace: "nowrap" }}>
            🚧 In opbouw
          </span>
        </div>
        <button
          onClick={onHome}
          style={{ pointerEvents: "auto", border: "none", borderRadius: 999, padding: "8px 16px", font: "700 14px system-ui", color: "#234", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}
        >
          ← Terug
        </button>
      </div>

      <Suspense
        fallback={
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#3a5a2a", font: "600 15px system-ui" }}>
            Park laden…
          </div>
        }
      >
        <ZooScene placingAsset={placingAsset} placedItems={placedItems} onPlace={plaatsDier} />
      </Suspense>

      {/* Onderbalk: plaatsen. */}
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10,
          padding: "12px 14px calc(12px + env(safe-area-inset-bottom))",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          background: "linear-gradient(0deg, rgba(0,0,0,0.22), rgba(0,0,0,0))",
          flexWrap: "wrap",
        }}
      >
        {placingAsset ? (
          <>
            <div style={{ color: "#fff", font: "700 14px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              Tik op een groen vakje om je dier neer te zetten
            </div>
            <button
              onClick={() => setPlacingAsset(null)}
              style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}
            >
              ✓ Klaar
            </button>
          </>
        ) : (
          <>
            {PLAATSBAAR.map((p) => (
              <button
                key={p.assetId}
                onClick={() => setPlacingAsset(p.assetId)}
                style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}
              >
                {p.emoji} {p.label} plaatsen
              </button>
            ))}
            <span style={{ color: "#fff", font: "700 13px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              {placedItems.length} {placedItems.length === 1 ? "dier" : "dieren"} in je park
            </span>
          </>
        )}
      </div>
    </div>
  );
}
