// ============================================================================
// GeoTopo — GENERIEKE interactieve topografie-engine. Werkt voor elke regio-set
// (NL-provincies, Europa-landen, wereld-…) zolang je een dataset meegeeft:
//   data = { viewBox: "0 0 W H", regios: [{ name, hoofdstad, d, labelX, labelY }] }
// Geometrie komt uit open data (CBS/PDOK, Natural Earth — publiek domein),
// vooraf geprojecteerd naar compacte SVG-paden. Geen licentie-issues.
//
//   <GeoKaart data={...} ... />          de kale klikbare kaart.
//   makeGeoCheck({ data, type, doel })   één topografie-vraag voor een leerpad-stap.
// Types: "wijs" (klik de regio) · "noem" (regio licht op → kies naam) ·
//        "noem-hoofdstad" (regio licht op → kies hoofdstad).
// ============================================================================

import { useMemo, useState } from "react";

const C = {
  base: "#1d3a57", baseStroke: "#5b8cc0", hover: "#2f5a86",
  highlight: "#ffd54f", highlightStroke: "#ffe9a8",
  goed: "#1d9e75", fout: "#e24b4a",
  tekst: "#e7edf6", muted: "rgba(231,237,246,0.65)",
};

export function GeoKaart({ data, highlight = null, gekozen = null, juist = null, beantwoord = false, showLabels = false, onPick, labelFontSize = 15, maxHeight = 440 }) {
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
    <div style={{ overflow: "hidden", width: "100%" }}>
      <svg viewBox={data.viewBox} style={{ width: "100%", maxHeight, display: "block" }} role="img" aria-label="Topografische kaart">
        {data.regios.map((r) => (
          <path key={r.name} d={r.d} fill={fillVoor(r.name)}
            stroke={r.name === highlight ? C.highlightStroke : C.baseStroke}
            strokeWidth={r.name === highlight ? 2.2 : 1}
            style={{ cursor: klikbaar ? "pointer" : "default", transition: "fill 120ms" }}
            onMouseEnter={() => klikbaar && setHover(r.name)}
            onMouseLeave={() => klikbaar && setHover(null)}
            onClick={() => klikbaar && onPick(r.name)}
            aria-label={r.name} />
        ))}
        {showLabels && data.regios.map((r) => (
          <text key={`l-${r.name}`} x={r.labelX} y={r.labelY} textAnchor="middle"
            style={{ fontSize: labelFontSize, fontWeight: 700, fill: C.tekst, pointerEvents: "none", paintOrder: "stroke", stroke: "#0a0e1a", strokeWidth: 3, strokeLinejoin: "round" }}>
            {r.name}
          </text>
        ))}
      </svg>
    </div>
  );
}

function schud(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function kiesAfleiders(juist, pool, n = 3) { return schud([juist, ...schud(pool.filter((x) => x !== juist)).slice(0, n)]); }

/** Fabriek: maakt een topografie-check voor een leerpad-stap (step.interactiveComponent). */
export function makeGeoCheck({ data, type, doel, naam = "gebied", labelFontSize, maxHeight }) {
  const NAMEN = data.regios.map((r) => r.name);
  const CAP = Object.fromEntries(data.regios.map((r) => [r.name, r.hoofdstad]));
  return function GeoCheck({ onAnswer }) {
    const [gekozen, setGekozen] = useState(null);
    const beantwoord = gekozen !== null;
    const opties = useMemo(() => {
      if (type === "noem") return kiesAfleiders(doel, NAMEN);
      if (type === "noem-hoofdstad") return kiesAfleiders(CAP[doel], NAMEN.map((n) => CAP[n]).filter(Boolean));
      return null;
    }, []);
    const kies = (waarde, correct) => { if (beantwoord) return; setGekozen(waarde); onAnswer?.(correct, waarde); };
    const vraag =
      type === "wijs" ? <>Klik op <strong style={{ color: C.highlight }}>{doel}</strong> op de kaart.</>
      : type === "noem" ? <>Welk {naam} is <span style={{ color: C.highlight }}>geel</span> gemaakt?</>
      : <>Wat is de hoofdstad van <strong style={{ color: C.highlight }}>{doel}</strong>?</>;
    const juisteWaarde = type === "noem-hoofdstad" ? CAP[doel] : doel;
    return (
      <div style={{ padding: "0.5rem 0" }}>
        <p style={{ textAlign: "center", fontSize: 16, fontWeight: 600, color: C.tekst, margin: "0 0 12px" }}>{vraag}</p>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 8 }}>
          <GeoKaart data={data} labelFontSize={labelFontSize} maxHeight={maxHeight}
            highlight={type === "wijs" ? null : doel}
            gekozen={type === "wijs" ? gekozen : null}
            juist={type === "wijs" ? doel : null}
            beantwoord={type === "wijs" && beantwoord}
            onPick={type === "wijs" ? (n) => kies(n, n === doel) : undefined} />
        </div>
        {opties && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
            {opties.map((opt) => {
              const isGekozen = gekozen === opt;
              const border = !beantwoord ? "1px solid rgba(255,255,255,0.15)"
                : opt === juisteWaarde ? `2px solid ${C.goed}`
                : isGekozen ? `2px solid ${C.fout}` : "1px solid rgba(255,255,255,0.10)";
              return (
                <button key={opt} type="button" disabled={beantwoord} onClick={() => kies(opt, opt === juisteWaarde)}
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
              ? <>De hoofdstad van <strong>{doel}</strong> is <strong style={{ color: C.goed }}>{CAP[doel]}</strong>.</>
              : <>Dit is <strong style={{ color: C.goed }}>{doel}</strong>{CAP[doel] ? <> — hoofdstad {CAP[doel]}</> : null}.</>}
          </div>
        )}
      </div>
    );
  };
}
