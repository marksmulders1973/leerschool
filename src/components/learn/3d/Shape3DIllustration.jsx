// ============================================================================
// Shape3DIllustration — niet-interactieve 3D-preview voor uitleg-stappen.
// Optionele "speeltuin-modus" via `sliders`: speler versleept afmetingen en
// ziet inhoud live meelopen in de caption — verandert demo in speeltuin.
//
// Props:
//   shape, dimensions     start-staat (zelfde semantiek als Shape3D)
//   labels                array OF functie (d => array). Functie laat labels
//                         live mee veranderen met sliders.
//   caption               string OF functie (d => string). Idem.
//   sliders               [{ key, min, max, step?, label }] — schuifbalken
//                         onder het canvas. Elke key matcht een veld in
//                         dimensions.
//   showUnitCubes         bool — uitsplitsen in eenheidskubusjes
//   showBoundingBox       bool — omsluitende balk (piramide)
//   height                canvas-hoogte (default 220)
//
// Geen sliders → gedrag identiek aan v0 (statische preview).
// ============================================================================

import { useState } from "react";
import Shape3D from "./Shape3D.jsx";

export default function Shape3DIllustration({
  shape,
  dimensions,
  labels = [],
  caption,
  sliders = [],
  showUnitCubes = false,
  showBoundingBox = false,
  height = 220,
}) {
  const [d, setD] = useState(dimensions);

  const currentLabels = typeof labels === "function" ? labels(d) : labels;
  const currentCaption = typeof caption === "function" ? caption(d) : caption;

  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 12,
      padding: 12,
      margin: "16px 0",
    }}>
      <Shape3D
        shape={shape}
        dimensions={d}
        labels={currentLabels}
        showUnitCubes={showUnitCubes}
        showBoundingBox={showBoundingBox}
        height={height}
      />
      {sliders.length > 0 && (
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "10px 6px 4px",
          marginTop: 8,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          {sliders.map((s) => (
            <div key={s.key} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <label style={{
                flex: "0 0 auto",
                fontSize: 12,
                color: "rgba(224,230,240,0.75)",
                fontWeight: 600,
                minWidth: 90,
              }}>
                {s.label}: <span style={{ color: "#ffd54f" }}>{d[s.key]}</span>
              </label>
              <input
                type="range"
                min={s.min}
                max={s.max}
                step={s.step ?? 1}
                value={d[s.key]}
                onChange={(e) => setD({ ...d, [s.key]: Number(e.target.value) })}
                style={{ flex: 1, accentColor: "#ffd54f" }}
              />
            </div>
          ))}
        </div>
      )}
      {currentCaption && (
        <p style={{
          textAlign: "center",
          fontSize: 12,
          color: "rgba(224,230,240,0.75)",
          margin: "8px 0 2px",
          fontStyle: "italic",
        }}>
          {currentCaption}
        </p>
      )}
    </div>
  );
}
