// BuddyKop — rond portret-medaillon van het actieve maatje, voor hulp-knoppen
// (fout-uitleg-overlay, tutor-header). Sinds 9 jul (Mark: "laat ze uit de cirkel
// komen") een game-stijl pop-out portret:
//   • de kop is groter geframed en steekt BOVEN de medaillon-rand uit;
//   • een "keyhole"-clip (onderste halve cirkel + open bovenkant) knipt het
//     canvas exact op de cirkelrand — onder/zijkanten netjes in het medaillon,
//     bovenkant vrij → 3D pop-out-effect;
//   • per-maatje gloed (accent-kleur) om de schijf + rim-licht in de 3D-scene
//     zodat donkere modellen (Charley!) een lichte silhouetrand krijgen;
//   • contactschaduw onderin de schijf voor diepte.
// Let op: het portret overlapt bewust ~30% BOVEN de opgegeven size. De parent
// mag daar geen overflow:hidden afknippen (AITutor/PlayQuiz-headers hebben lucht).
import { Suspense, lazy } from "react";

const CharleyHead = lazy(() => import("./CharleyHead.jsx"));
const VonkHead = lazy(() => import("./VonkHead.jsx"));
const BlokkieHead = lazy(() => import("./MaatjeKoppen.jsx").then((m) => ({ default: m.BlokkieHead })));
const SterreHead = lazy(() => import("./MaatjeKoppen.jsx").then((m) => ({ default: m.SterreHead })));
const BliepHead = lazy(() => import("./MaatjeKoppen.jsx").then((m) => ({ default: m.BliepHead })));
const ElfiHead = lazy(() => import("./MaatjeKoppen.jsx").then((m) => ({ default: m.ElfiHead })));
const KnoestHead = lazy(() => import("./MaatjeKoppen.jsx").then((m) => ({ default: m.KnoestHead })));

// Maatjes met een eigen geanimeerde 3D-kop; de rest valt terug op hun emoji.
const KOPPEN = {
  charley: CharleyHead,
  draakje: VonkHead,
  blokkie: BlokkieHead,
  eenhoorn: SterreHead,
  robot: BliepHead,
  elf: ElfiHead,
  trol: KnoestHead,
};

export default function BuddyKop({ buddy, size = 84, praat = false }) {
  const ring = buddy?.kleur || "#5bbf5a";
  const diep = buddy?.kleur2 || ring;
  const glow = buddy?.accent || ring;
  const Kop = KOPPEN[buddy?.id];

  // Pop-out-maten. H = cliphoogte (kop mag ~30% boven de rand uit); het canvas
  // is groter dan het medaillon en iets omhooggeschoven zodat de kruin over de
  // rand komt terwijl de nek in de schijf blijft.
  const H = Math.round(size * 1.3);
  const R = size / 2;
  const cy = H - R; // cirkel-middelpunt in clip-coördinaten
  const rClip = R - Math.max(1.5, size * 0.025); // net binnen de ring knippen
  const kop = Math.round(size * 1.28);
  const lift = Math.round(size * 0.09); // canvas iets omhoog: kruin over de rand
  // Keyhole: onderste halve cirkel + open rechthoek erboven. clip-path met een
  // path() knipt (net als circle(50%) hiervoor) een WebGL-canvas wél betrouwbaar.
  const keyhole = `M ${R - rClip} ${cy} A ${rClip} ${rClip} 0 0 0 ${R + rClip} ${cy} L ${R + rClip} 0 L ${R - rClip} 0 Z`;

  return (
    <div aria-hidden="true" style={{ width: size, height: size, position: "relative", flexShrink: 0 }}>
      {/* medaillon-schijf: maatje-kleuren + gloed in de accent-kleur */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: `radial-gradient(circle at 32% 24%, ${diep}77, rgba(12,18,30,0.94) 76%)`,
          border: `2px solid ${ring}aa`,
          boxShadow: `0 0 ${Math.round(size * 0.4)}px ${glow}40, 0 4px 12px rgba(0,0,0,0.45), inset 0 -8px 18px rgba(0,0,0,0.4)`,
        }}
      />
      {/* contactschaduw onderin de schijf — verkoopt het "staan in" het medaillon */}
      <div
        style={{
          position: "absolute",
          left: "20%",
          right: "20%",
          bottom: "7%",
          height: "20%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.5), transparent 70%)",
          filter: "blur(2px)",
        }}
      />
      {Kop ? (
        <div style={{ position: "absolute", left: 0, bottom: 0, width: size, height: H, clipPath: `path("${keyhole}")` }}>
          <div style={{ position: "absolute", left: (size - kop) / 2, bottom: lift, width: kop, height: kop }}>
            <Suspense
              fallback={
                <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.5, lineHeight: 1 }}>
                  {buddy.emoji}
                </span>
              }
            >
              <Kop size={kop} praat={praat} rim={glow} />
            </Suspense>
          </div>
        </div>
      ) : (
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: size * 0.52,
            lineHeight: 1,
            transform: "translateY(1px)",
          }}
        >
          {buddy?.emoji || "🐉"}
        </span>
      )}
    </div>
  );
}
