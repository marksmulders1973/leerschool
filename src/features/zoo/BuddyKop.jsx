// BuddyKop — rond portret-medaillon van het actieve maatje, voor hulp-knoppen
// (fout-uitleg-overlay, tutor-header). Eén plek voor de "gezicht"-presentatie:
// Charley krijgt zijn geanimeerde 3D-kop, de andere maatjes hun emoji — beide
// in een zachte kleur-gradiënt met ring in de maatje-kleur, zodat het gezicht
// niet als los blokje op een donkere achtergrond zweeft (Mark 8 jul).
import { Suspense, lazy } from "react";

const CharleyHead = lazy(() => import("./CharleyHead.jsx"));
const VonkHead = lazy(() => import("./VonkHead.jsx"));

// Maatjes met een eigen geanimeerde 3D-kop; de rest valt terug op hun emoji.
const KOPPEN = { charley: CharleyHead, draakje: VonkHead };

export default function BuddyKop({ buddy, size = 84, praat = false }) {
  const ring = buddy?.kleur || "#5bbf5a";
  const diep = buddy?.kleur2 || ring;
  const glow = buddy?.accent || ring;
  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle at 32% 26%, ${diep}66, rgba(12,18,30,0.92) 78%)`,
        border: `2px solid ${ring}99`,
        boxShadow: `0 0 26px ${glow}30, inset 0 -8px 18px rgba(0,0,0,0.38)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // overflow:hidden + border-radius knipt een WebGL-canvas niet altijd
        // (Chrome composited layer) → de 3D-kop stak buiten de cirkel (Mark
        // 8 jul: "oude hond weer terug"). clip-path knipt wél betrouwbaar.
        overflow: "hidden",
        clipPath: "circle(50%)",
        flexShrink: 0,
      }}
    >
      {KOPPEN[buddy?.id] ? (
        <Suspense fallback={<span style={{ fontSize: size * 0.5, lineHeight: 1 }}>{buddy.emoji}</span>}>
          {/* Iets groter dan het medaillon + ronde crop = portret-effect. */}
          {(() => { const Kop = KOPPEN[buddy.id]; return <Kop size={size * 1.08} praat={praat} />; })()}
        </Suspense>
      ) : (
        <span style={{ fontSize: size * 0.52, lineHeight: 1, transform: "translateY(1px)" }}>
          {buddy?.emoji || "🐉"}
        </span>
      )}
    </div>
  );
}
