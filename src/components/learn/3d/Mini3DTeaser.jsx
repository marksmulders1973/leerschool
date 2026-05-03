// ============================================================================
// Mini3DTeaser — homepage-teaser voor nieuwe bezoekers. Compacte 3D-kubus
// met slider voor de zijde + live z³-formule + CTA naar Ruimtemeetkunde.
// Bedoeld om in <1 second visueel te tonen wat Studiebol kan, en de bezoeker
// uit te nodigen om door te klikken.
//
// Lazy-geladen vanuit HomePage.jsx zodat three.js niet in de main-bundle zit.
// ============================================================================

import { useState } from "react";
import Shape3D from "./Shape3D.jsx";

export default function Mini3DTeaser({ onCTA }) {
  const [z, setZ] = useState(4);
  return (
    <div style={{
      width: "100%",
      maxWidth: 320,
      margin: "12px auto 16px",
      background: "linear-gradient(135deg, rgba(239,159,39,0.10), rgba(255,213,79,0.06))",
      border: "1px solid rgba(255,213,79,0.30)",
      borderRadius: 16,
      padding: "12px 14px 14px",
      boxShadow: "0 4px 20px rgba(255,213,79,0.10)",
    }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: 13,
        fontWeight: 700,
        color: "#ffd54f",
        textAlign: "center",
        marginBottom: 4,
        letterSpacing: 0.3,
      }}>
        ✨ Probeer: hoe groot wordt een kubus?
      </div>
      <div style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: 6,
        marginBottom: 8,
      }}>
        <Shape3D
          shape="kubus"
          dimensions={{ zijde: z }}
          labels={[]}
          height={140}
          cameraDistanceFactor={2.9}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
        <label style={{ fontSize: 12, color: "rgba(224,230,240,0.75)", fontWeight: 600, minWidth: 70 }}>
          zijde z: <span style={{ color: "#ffd54f" }}>{z}</span>
        </label>
        <input
          type="range"
          min={1} max={6} step={1}
          value={z}
          onChange={(e) => setZ(Number(e.target.value))}
          style={{ flex: 1, accentColor: "#ffd54f" }}
        />
      </div>
      <p style={{
        textAlign: "center",
        fontSize: 13,
        color: "rgba(224,230,240,0.85)",
        margin: "4px 0 10px",
        fontFamily: "var(--font-body)",
      }}>
        z³ = {z} × {z} × {z} = <strong style={{ color: "#ffd54f", fontSize: 15 }}>{z ** 3} cm³</strong>
      </p>
      {onCTA && (
        <button
          onClick={onCTA}
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 12,
            border: "none",
            background: "linear-gradient(135deg, #00c853, #69f0ae)",
            color: "#0d1b2e",
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,200,83,0.35)",
          }}
        >
          Probeer dit zelf in een leerpad →
        </button>
      )}
    </div>
  );
}
