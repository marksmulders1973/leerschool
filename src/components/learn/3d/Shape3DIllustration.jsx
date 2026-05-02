// ============================================================================
// Shape3DIllustration — kleine, niet-interactieve 3D-preview voor uitleg-stappen
// (de plek waar voorheen `step.svg` stond). Geen vraag, geen antwoord-knoppen.
// Speler kan nog wel slepen om te draaien (Shape3D doet dat ingebouwd).
//
// Gebruik in een leerpad-step:
//   illustrationComponent: () => (
//     <Shape3DIllustration shape="kubus" dimensions={{zijde: 5}} labels={[...]} />
//   ),
//
// Compacte hoogte (default 220px) zodat de uitleg-tekst direct eronder leesbaar
// blijft. Bij showUnitCubes=true zie je de eenheidskubusjes voor "tel-aanpak".
// ============================================================================

import Shape3D from "./Shape3D.jsx";

export default function Shape3DIllustration({
  shape,
  dimensions,
  labels = [],
  showUnitCubes = false,
  showBoundingBox = false,
  height = 220,
  caption,
}) {
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
        dimensions={dimensions}
        labels={labels}
        showUnitCubes={showUnitCubes}
        showBoundingBox={showBoundingBox}
        height={height}
      />
      {caption && (
        <p style={{
          textAlign: "center",
          fontSize: 12,
          color: "rgba(224,230,240,0.65)",
          margin: "8px 0 2px",
          fontStyle: "italic",
        }}>
          {caption}
        </p>
      )}
    </div>
  );
}
