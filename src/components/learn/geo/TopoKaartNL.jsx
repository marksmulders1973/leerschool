// ============================================================================
// TopoKaartNL — interactieve topografie-kaart van Nederland (12 provincies).
// Kaartgeometrie: cartomap/nl (CBS/PDOK open data, publiek domein) — zie
// nlProvincieData.js. Geen licentie-issues, eigen rendering.
//
// Twee dingen:
//   <TopoKaartNL ... />          de kale klikbare kaart (hergebruikt door checks
//                                 én als uitleg-illustratie met showLabels).
//   makeTopoCheck({type,doel})   fabriek die één topografie-vraag maakt voor een
//                                 leerpad-stap (step.interactiveComponent). Roept
//                                 onAnswer(correct, label) zoals een gewone check.
//
// Vraagtypes:
//   "wijs-provincie"  — "Klik op <provincie>" → kind klikt op de kaart.
//   "noem-provincie"  — provincie licht op → kies de juiste naam (4 opties).
//   "noem-hoofdstad"  — provincie licht op → kies de juiste hoofdstad (4 opties).
// ============================================================================

import { useMemo, useState } from "react";
import { NL_VIEWBOX, NL_PROVINCIES } from "./nlProvincieData.js";

const C = {
  base: "#1d3a57", baseStroke: "#5b8cc0",
  hover: "#2f5a86",
  highlight: "#ffd54f", highlightStroke: "#ffe9a8",
  goed: "#1d9e75", fout: "#e24b4a",
  tekst: "#e7edf6", muted: "rgba(231,237,246,0.65)",
};

/**
 * Kale interactieve kaart.
 * props:
 *   highlight   provincienaam die geel oplicht (bv. bij "noem"-vraag)
 *   gekozen     door kind aangeklikte provincie (feedback-kleur)
 *   juist       de juiste provincie (voor groen/rood na antwoord)
 *   beantwoord  bool — na antwoord kleuren we goed/fout en zetten klikken uit
 *   showLabels  toon provincienamen op de kaart (uitleg/verken-modus)
 *   onPick      (naam) => void
 */
export function TopoKaartNL({ highlight = null, gekozen = null, juist = null, beantwoord = false, showLabels = false, onPick }) {
  const [hover, setHover] = useState(null);
  const fillVoor = (naam) => {
    if (beantwoord) {
      if (naam === juist) return C.goed;
      if (naam === gekozen && gekozen !== juist) return C.fout;
      return C.base;
    }
    if (naam === highlight) return C.highlight;
    if (naam === hover && onPick) return C.hover;
    return C.base;
  };
  const klikbaar = !!onPick && !beantwoord;
  return (
    <svg viewBox={NL_VIEWBOX} style={{ width: "100%", maxHeight: 420, display: "block" }} role="img" aria-label="Kaart van Nederland met provincies">
      {NL_PROVINCIES.map((p) => (
        <path
          key={p.name}
          d={p.d}
          fill={fillVoor(p.name)}
          stroke={p.name === highlight ? C.highlightStroke : C.baseStroke}
          strokeWidth={p.name === highlight ? 2.2 : 1}
          style={{ cursor: klikbaar ? "pointer" : "default", transition: "fill 120ms" }}
          onMouseEnter={() => klikbaar && setHover(p.name)}
          onMouseLeave={() => klikbaar && setHover(null)}
          onClick={() => klikbaar && onPick(p.name)}
          aria-label={p.name}
        />
      ))}
      {showLabels && NL_PROVINCIES.map((p) => (
        <text key={`l-${p.name}`} x={p.labelX} y={p.labelY} textAnchor="middle"
          style={{ fontSize: 15, fontWeight: 700, fill: C.tekst, pointerEvents: "none", paintOrder: "stroke", stroke: "#0a0e1a", strokeWidth: 3, strokeLinejoin: "round" }}>
          {p.name}
        </text>
      ))}
    </svg>
  );
}

const ALLE_NAMEN = NL_PROVINCIES.map((p) => p.name);
const HOOFDSTAD_VAN = Object.fromEntries(NL_PROVINCIES.map((p) => [p.name, p.hoofdstad]));

function kiesAfleiders(juist, pool, n = 3) {
  const rest = pool.filter((x) => x !== juist);
  for (let i = rest.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [rest[i], rest[j]] = [rest[j], rest[i]]; }
  return [juist, ...rest.slice(0, n)].sort(() => Math.random() - 0.5);
}

/** Fabriek: maakt een topografie-check-component voor een leerpad-stap. */
export function makeTopoCheck({ type, doel }) {
  return function TopoCheck({ onAnswer }) {
    const [gekozen, setGekozen] = useState(null);
    const beantwoord = gekozen !== null;

    const opties = useMemo(() => {
      if (type === "noem-provincie") return kiesAfleiders(doel, ALLE_NAMEN);
      if (type === "noem-hoofdstad") return kiesAfleiders(HOOFDSTAD_VAN[doel], ALLE_NAMEN.map((n) => HOOFDSTAD_VAN[n]));
      return null;
    }, []);

    const kies = (waarde, correct) => {
      if (beantwoord) return;
      setGekozen(waarde);
      onAnswer?.(correct, waarde);
    };

    const vraag =
      type === "wijs-provincie" ? <>Klik op <strong style={{ color: C.highlight }}>{doel}</strong> op de kaart.</>
      : type === "noem-provincie" ? <>Welke provincie is <span style={{ color: C.highlight }}>geel</span> gemaakt?</>
      : <>Wat is de hoofdstad van <strong style={{ color: C.highlight }}>{doel}</strong>?</>;

    return (
      <div style={{ padding: "0.5rem 0" }}>
        <p style={{ textAlign: "center", fontSize: 16, fontWeight: 600, color: C.tekst, margin: "0 0 12px" }}>{vraag}</p>

        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 8 }}>
          <TopoKaartNL
            highlight={type === "wijs-provincie" ? null : doel}
            gekozen={type === "wijs-provincie" ? gekozen : null}
            juist={type === "wijs-provincie" ? doel : null}
            beantwoord={type === "wijs-provincie" && beantwoord}
            onPick={type === "wijs-provincie" ? (naam) => kies(naam, naam === doel) : undefined}
          />
        </div>

        {opties && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
            {opties.map((opt) => {
              const isGekozen = gekozen === opt;
              const juisteWaarde = type === "noem-hoofdstad" ? HOOFDSTAD_VAN[doel] : doel;
              const border = !beantwoord ? "1px solid rgba(255,255,255,0.15)"
                : opt === juisteWaarde ? `2px solid ${C.goed}`
                : isGekozen ? `2px solid ${C.fout}` : "1px solid rgba(255,255,255,0.10)";
              return (
                <button key={opt} type="button" disabled={beantwoord}
                  onClick={() => kies(opt, opt === juisteWaarde)}
                  style={{ padding: "11px 10px", borderRadius: 10, border, background: "rgba(255,255,255,0.05)", color: C.tekst, fontSize: 15, fontWeight: 700, cursor: beantwoord ? "default" : "pointer", fontFamily: "inherit" }}>
                  {opt}
                </button>
              );
            })}
          </div>
        )}

        {beantwoord && (
          <div style={{ marginTop: 12, textAlign: "center", fontSize: 14, color: C.muted }}>
            {type === "noem-hoofdstad"
              ? <>De hoofdstad van <strong>{doel}</strong> is <strong style={{ color: C.goed }}>{HOOFDSTAD_VAN[doel]}</strong>.</>
              : <>Dit is <strong style={{ color: C.goed }}>{doel}</strong>{HOOFDSTAD_VAN[doel] ? <> — hoofdstad {HOOFDSTAD_VAN[doel]}</> : null}.</>}
          </div>
        )}
      </div>
    );
  };
}

export default TopoKaartNL;
