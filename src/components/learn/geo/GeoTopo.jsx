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

import { useMemo, useRef, useState } from "react";

const C = {
  base: "#1d3a57", baseStroke: "#5b8cc0", hover: "#2f5a86",
  highlight: "#ffd54f", highlightStroke: "#ffe9a8",
  goed: "#1d9e75", fout: "#e24b4a",
  tekst: "#e7edf6", muted: "rgba(231,237,246,0.65)",
};

export function GeoKaart({ data, highlight = null, gekozen = null, juist = null, beantwoord = false, showLabels = false, labelMode = null, onPick, labelFontSize = 15, maxHeight = 440 }) {
  const [hover, setHover] = useState(null);
  // labelMode "namen" | "hoofdsteden" — kruis-leren (Mark 11 aug): bij een
  // regio-vraag de hoofdsteden tonen en andersom.
  const mode = labelMode || (showLabels ? "namen" : null);
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
        {mode === "namen" && data.regios.map((r) => (
          <text key={`l-${r.name}`} x={r.labelX} y={r.labelY} textAnchor="middle"
            style={{ fontSize: labelFontSize, fontWeight: 700, fill: C.tekst, pointerEvents: "none", paintOrder: "stroke", stroke: "#0a0e1a", strokeWidth: 3, strokeLinejoin: "round" }}>
            {r.name}
          </text>
        ))}
        {mode === "hoofdsteden" && data.regios.map((r) => r.hoofdstad && (
          <g key={`h-${r.name}`} style={{ pointerEvents: "none" }}>
            <circle cx={r.labelX} cy={r.labelY - labelFontSize * 0.8} r={labelFontSize * 0.24} fill={C.highlight} stroke="#0a0e1a" strokeWidth={1} />
            <text x={r.labelX} y={r.labelY + 3} textAnchor="middle"
              style={{ fontSize: labelFontSize - 3, fontWeight: 600, fontStyle: "italic", fill: C.tekst, paintOrder: "stroke", stroke: "#0a0e1a", strokeWidth: 2.5, strokeLinejoin: "round" }}>
              {r.hoofdstad}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function schud(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function kiesAfleiders(juist, pool, n = 3) { return schud([juist, ...schud(pool.filter((x) => x !== juist)).slice(0, n)]); }

/** Fabriek: maakt een topografie-check voor een leerpad-stap (step.interactiveComponent).
 *  Serie-modus + kruis-labels (Mark 11 aug) — zie makeTopoCheck in TopoKaartNL. */
export function makeGeoCheck({ data, type, doel, naam = "gebied", labelFontSize, maxHeight }) {
  const NAMEN = data.regios.map((r) => r.name);
  const CAP = Object.fromEntries(data.regios.map((r) => [r.name, r.hoofdstad]));
  return function GeoCheck({ onAnswer }) {
    const [serie] = useState(() => [doel, ...schud(NAMEN.filter((n) => n !== doel))]);
    const [serieIdx, setSerieIdx] = useState(0);
    const [aantalGedaan, setAantalGedaan] = useState(0);
    const huidigDoel = serie[serieIdx % serie.length];

    const [gekozen, setGekozen] = useState(null);
    const beantwoord = gekozen !== null;
    const opties = useMemo(() => {
      if (type === "noem") return kiesAfleiders(huidigDoel, NAMEN);
      if (type === "noem-hoofdstad") return kiesAfleiders(CAP[huidigDoel], NAMEN.map((n) => CAP[n]).filter(Boolean));
      return null;
    }, [huidigDoel]);
    const kies = (waarde) => { if (beantwoord) return; setGekozen(waarde); setAantalGedaan((n) => n + 1); };
    const volgende = () => { setGekozen(null); setSerieIdx((i) => i + 1); };
    const klaar = () => onAnswer?.(true, `${aantalGedaan} geoefend`);

    const labelMode = type === "noem-hoofdstad" ? "namen" : "hoofdsteden";
    const vraag =
      type === "wijs" ? <>Klik op <strong style={{ color: C.highlight }}>{huidigDoel}</strong> op de kaart.</>
      : type === "noem" ? <>Welk {naam} is <span style={{ color: C.highlight }}>geel</span> gemaakt?</>
      : <>Wat is de hoofdstad van <strong style={{ color: C.highlight }}>{huidigDoel}</strong>?</>;
    const juisteWaarde = type === "noem-hoofdstad" ? CAP[huidigDoel] : huidigDoel;
    return (
      <div style={{ padding: "0.5rem 0" }}>
        <p style={{ textAlign: "center", fontSize: 16, fontWeight: 600, color: C.tekst, margin: "0 0 12px" }}>{vraag}</p>
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 8 }}>
          <GeoKaart data={data} labelFontSize={labelFontSize} maxHeight={maxHeight}
            highlight={type === "wijs" ? null : huidigDoel}
            gekozen={type === "wijs" ? gekozen : null}
            juist={type === "wijs" ? huidigDoel : null}
            beantwoord={type === "wijs" && beantwoord}
            labelMode={labelMode}
            onPick={type === "wijs" ? (n) => kies(n) : undefined} />
        </div>
        {opties && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
            {opties.map((opt) => {
              const isGekozen = gekozen === opt;
              const border = !beantwoord ? "1px solid rgba(255,255,255,0.15)"
                : opt === juisteWaarde ? `2px solid ${C.goed}`
                : isGekozen ? `2px solid ${C.fout}` : "1px solid rgba(255,255,255,0.10)";
              return (
                <button key={opt} type="button" disabled={beantwoord} onClick={() => kies(opt)}
                  style={{ padding: "11px 10px", borderRadius: 10, border, background: "rgba(255,255,255,0.05)", color: C.tekst, fontSize: 15, fontWeight: 700, cursor: beantwoord ? "default" : "pointer", fontFamily: "inherit" }}>
                  {opt}
                </button>
              );
            })}
          </div>
        )}
        {beantwoord && (
          <>
            <div style={{ marginTop: 12, textAlign: "center", fontSize: 14, color: C.muted }}>
              {type === "noem-hoofdstad"
                ? <>De hoofdstad van <strong>{huidigDoel}</strong> is <strong style={{ color: C.goed }}>{CAP[huidigDoel]}</strong>.</>
                : <>Dit is <strong style={{ color: C.goed }}>{huidigDoel}</strong>{CAP[huidigDoel] ? <> — hoofdstad {CAP[huidigDoel]}</> : null}.</>}
            </div>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 12 }}>
              <button type="button" onClick={volgende}
                style={{ padding: "11px 18px", borderRadius: 10, border: "none", background: C.goed, color: "#fff", fontSize: 14, fontWeight: 800, cursor: "pointer", fontFamily: "inherit" }}>
                Volgende →
              </button>
              <button type="button" onClick={klaar}
                style={{ padding: "11px 18px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.05)", color: C.tekst, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                ✓ Klaar
              </button>
            </div>
          </>
        )}
      </div>
    );
  };
}

// ============================================================================
// makeGeoOefenRonde — "ken ze ALLEMAAL"-oefening (Mark-feedback 10 aug 2026:
// na 1 provincie was de stap klaar; hij wil alle 12 oefenen tot je ze kent,
// mét de vrijheid om te stoppen als je geen zin meer hebt).
//
// Didactiek: geschudde wachtrij van alle regio's. Goed in ÉÉN keer → ✔ gekend.
// Fout → je ziet wat je wél aanklikte ("Dat is Flevoland — we zoeken Drenthe"),
// je probeert door tot goed, en die regio komt later nóg een keer terug.
// Klaar wanneer elke regio in één keer goed is gedaan. Stoppen mag altijd,
// zonder straf. Generiek: zelfde component voor provincies, landen, wereld.
// ============================================================================
export function makeGeoOefenRonde({ data, naam = "gebied", meervoud = "gebieden", labelFontSize, maxHeight, emoji = "🗺️" }) {
  return function GeoOefenRonde({ onAnswer }) {
    const totaal = data.regios.length;
    const [wachtrij, setWachtrij] = useState(() => schud(data.regios.map((r) => r.name)));
    const [gekend, setGekend] = useState([]);
    const [foutDezeBeurt, setFoutDezeBeurt] = useState(false);
    const [gekozen, setGekozen] = useState(null);      // laatst (fout) aangeklikt
    const [goedFlits, setGoedFlits] = useState(false); // korte groene bevestiging
    const [eind, setEind] = useState(null);            // null | "alles" | "gestopt"
    const timerRef = useRef(null);

    const doel = wachtrij[0];
    const CAP = useMemo(() => Object.fromEntries(data.regios.map((r) => [r.name, r.hoofdstad])), []);

    const pak = (naamKlik) => {
      if (goedFlits || eind) return;
      if (naamKlik === doel) {
        setGekozen(null);
        setGoedFlits(true);
        timerRef.current = setTimeout(() => {
          setGoedFlits(false);
          if (foutDezeBeurt) {
            // Nog niet "gekend": achteraan opnieuw oefenen.
            setWachtrij((w) => [...w.slice(1), doel]);
          } else {
            const nieuwGekend = [...gekend, doel];
            setGekend(nieuwGekend);
            setWachtrij((w) => w.slice(1));
            if (nieuwGekend.length === totaal) setEind("alles");
          }
          setFoutDezeBeurt(false);
        }, 900);
      } else {
        setFoutDezeBeurt(true);
        setGekozen(naamKlik);
      }
    };

    const stop = () => { if (!eind) setEind("gestopt"); };
    const verder = () => onAnswer?.(true, eind === "alles" ? `alle ${totaal} gekend` : `gestopt bij ${gekend.length}/${totaal}`);

    if (eind) {
      const alles = eind === "alles";
      return (
        <div style={{ padding: "0.5rem 0", textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>{alles ? "🏆" : "👍"}</div>
          <p style={{ fontSize: 17, fontWeight: 700, color: C.tekst, margin: "0 0 6px" }}>
            {alles
              ? <>Je kent alle {totaal} {meervoud}!</>
              : <>Goed geoefend — je kent er al <strong style={{ color: C.goed }}>{gekend.length}</strong> van de {totaal}.</>}
          </p>
          {!alles && (
            <p style={{ fontSize: 14, color: C.muted, margin: "0 0 12px" }}>
              Stoppen is prima. De rest staat klaar voor de volgende keer.
            </p>
          )}
          <button type="button" onClick={verder}
            style={{ padding: "12px 26px", borderRadius: 12, border: "none", background: C.goed, color: "#fff", fontSize: 16, fontWeight: 800, cursor: "pointer", fontFamily: "inherit" }}>
            Verder →
          </button>
        </div>
      );
    }

    return (
      <div style={{ padding: "0.5rem 0" }}>
        {/* Voortgang + stop */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.muted, marginBottom: 4 }}>
              {emoji} ✔ {gekend.length} van {totaal} gekend
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.10)", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: `${(gekend.length / totaal) * 100}%`, height: "100%", background: C.goed, transition: "width 300ms" }} />
            </div>
          </div>
          <button type="button" onClick={stop}
            style={{ padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", color: C.muted, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
            🛑 Stoppen
          </button>
        </div>

        <p style={{ textAlign: "center", fontSize: 16, fontWeight: 600, color: C.tekst, margin: "0 0 10px" }}>
          {goedFlits
            ? <span style={{ color: C.goed }}>✔ Goed — dat is {doel}{CAP[doel] ? <> (hoofdstad {CAP[doel]})</> : null}!</span>
            : <>Klik op <strong style={{ color: C.highlight }}>{doel}</strong> op de kaart.</>}
        </p>

        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 8 }}>
          {/* Kruis-leren: tijdens het provincie/land-wijzen staan de hoofdsteden
              op de kaart — leert terloops mee zonder het antwoord te verklappen. */}
          <GeoKaart data={data} labelFontSize={labelFontSize} maxHeight={maxHeight}
            gekozen={goedFlits ? doel : gekozen}
            juist={goedFlits ? doel : null}
            beantwoord={goedFlits}
            labelMode="hoofdsteden"
            onPick={pak} />
        </div>

        {gekozen && !goedFlits && (
          <div style={{ marginTop: 10, textAlign: "center", fontSize: 14, color: C.tekst, background: "rgba(226,75,74,0.12)", border: "1px solid rgba(226,75,74,0.4)", borderRadius: 10, padding: "8px 12px" }}>
            Dat is <strong style={{ color: C.fout }}>{gekozen}</strong> — we zoeken <strong style={{ color: C.highlight }}>{doel}</strong>. Probeer nog eens!
          </div>
        )}
      </div>
    );
  };
}
