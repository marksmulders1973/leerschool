// ============================================================================
// Question3DRenderer — wrapper die een trackId krijgt en de juiste 3D-check
// rendert: vraag-tekst, Shape3D-canvas, optionele toggles (Tel blokjes, Toon
// balk, Toon berekening), antwoord-knoppen, feedback. Routeert naar Shape3D.
//
// Gebruik direct in een leerpad-stap:
//   step.interactiveComponent: make3DInteractiveComponent("RM-S8-Q1")
// of als losse JSX in een quiz-player:
//   <Question3DRenderer trackId="RM-S8-Q1" onAnswer={(correct, label) => ...} />
//
// Onbekend trackId → fallback met foutmelding zodat content team het ziet.
// ============================================================================

import { useRef, useState } from "react";
import Shape3D from "./Shape3D.jsx";
import { getQuestion3D } from "./questions3d.js";

export default function Question3DRenderer({ trackId, onAnswer, theme = "dark-studiebol" }) {
  const q = getQuestion3D(trackId);
  const shape3dRef = useRef(null);

  const [tellerZichtbaar, setTellerZichtbaar] = useState(false);
  const [tellerGetal, setTellerGetal] = useState(0);
  const [tellerTotaal, setTellerTotaal] = useState(0);
  const [toonBalk, setToonBalk] = useState(false);
  const [toonBerekening, setToonBerekening] = useState(false);
  const [gekozen, setGekozen] = useState(null);

  if (!q) {
    return (
      <div style={{ padding: "1rem", color: "#ff8a8a", background: "rgba(226,75,74,0.18)", borderRadius: 12, border: "1px solid rgba(226,75,74,0.45)" }}>
        ⚠️ Onbekende 3D-vraag: <code>{trackId}</code>. Check <code>questions3d.js</code>.
      </div>
    );
  }

  const features = q.features || [];
  const heeftTelBlokjes = features.includes("telBlokjes");
  const heeftToonBalk = features.includes("toonBalk");
  const heeftBerekening = features.includes("toonBerekening");

  const handleTel = () => {
    setTellerZichtbaar(true);
    shape3dRef.current?.startTelAnimatie((n, totaal) => {
      setTellerGetal(n);
      setTellerTotaal(totaal);
    });
  };

  const handleAntwoord = (opt) => {
    setGekozen(opt);
    onAnswer?.(opt.correct, opt.label);
  };

  return (
    <div style={{ padding: "1rem 0" }}>
      <h3 style={{ textAlign: "center", fontSize: 16, fontWeight: 600, margin: "0 0 0.5rem", color: "#e0e6f0" }}>
        {q.vraag}
      </h3>
      <p style={{ textAlign: "center", fontSize: 13, color: "rgba(224,230,240,0.7)", margin: "0 0 1rem" }}>
        Sleep om te draaien.
        {heeftTelBlokjes ? " Klik op 'Tel de blokjes' voor de animatie." : ""}
        {heeftToonBalk ? " Klik op 'Toon omsluitende balk' om de ⅓-relatie te zien." : ""}
      </p>

      <div style={{
        position: "relative",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: "1rem",
        marginBottom: "1rem",
      }}>
        <Shape3D
          ref={shape3dRef}
          shape={q.shape}
          dimensions={q.dimensions}
          labels={q.labels}
          showUnitCubes={heeftTelBlokjes}
          showBoundingBox={heeftToonBalk && toonBalk}
          theme={theme}
        />
        {tellerZichtbaar && (
          <div style={{
            position: "absolute", top: "1.25rem", left: "1.25rem",
            background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,213,79,0.4)",
            padding: "6px 12px", borderRadius: 8, color: "#ffd54f",
            fontWeight: 600, fontSize: 14,
          }}>
            {tellerGetal} / {tellerTotaal} blokjes
          </div>
        )}
      </div>

      {(heeftTelBlokjes || heeftToonBalk || heeftBerekening) && (
        <div style={{ display: "flex", gap: 8, marginBottom: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          {heeftTelBlokjes && (
            <button type="button" onClick={handleTel} style={btnSecondaryStyle}>
              Tel de blokjes
            </button>
          )}
          {heeftToonBalk && (
            <button type="button" onClick={() => setToonBalk((v) => !v)} style={btnSecondaryStyle}>
              {toonBalk ? "Verberg balk" : "Toon omsluitende balk"}
            </button>
          )}
          {heeftBerekening && (
            <button type="button" onClick={() => setToonBerekening((v) => !v)} style={btnSecondaryStyle}>
              {toonBerekening ? "Verberg berekening" : "Toon berekening"}
            </button>
          )}
        </div>
      )}

      {toonBerekening && q.formuleStappen && (
        <div style={{
          background: "rgba(239,159,39,0.12)",
          border: "1px solid rgba(239,159,39,0.3)",
          borderRadius: 12,
          padding: "1.25rem",
          textAlign: "center",
          marginBottom: "1rem",
        }}>
          {q.formuleStappen.map((regel, i) => {
            const isLaatste = i === q.formuleStappen.length - 1;
            return (
              <p
                key={i}
                style={{
                  fontSize: isLaatste ? 28 : 16,
                  fontWeight: isLaatste ? 600 : 500,
                  color: isLaatste ? "#ffd54f" : "#e0e6f0",
                  margin: i === 0 ? "0 0 8px" : "0 0 4px",
                }}
              >
                {regel}
              </p>
            );
          })}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
        {q.opties.map((opt) => {
          const isGekozen = gekozen?.label === opt.label;
          const border = !isGekozen
            ? "1px solid rgba(255,255,255,0.15)"
            : opt.correct ? "2px solid #3edc9f" : "2px solid #ff8a8a";
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => handleAntwoord(opt)}
              style={{
                padding: 12, borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                border, color: "#e0e6f0",
                cursor: "pointer", font: "inherit",
                fontSize: 16, fontWeight: 600,
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {gekozen && (
        <div
          style={{
            marginTop: 16, padding: "0.9rem 1.1rem", borderRadius: 12, textAlign: "center",
            background: gekozen.correct ? "rgba(29,158,117,0.18)" : "rgba(226,75,74,0.18)",
            color: gekozen.correct ? "#3edc9f" : "#ff8a8a",
            border: `1px solid ${gekozen.correct ? "rgba(29,158,117,0.45)" : "rgba(226,75,74,0.45)"}`,
          }}
        >
          <p style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px" }}>
            {gekozen.correct ? "Goed gedaan!" : "Probeer nog eens"}
          </p>
          <p style={{ fontSize: 14, margin: 0 }}>
            {gekozen.correct ? (q.goedFeedback || gekozen.uitleg) : gekozen.uitleg}
          </p>
        </div>
      )}
    </div>
  );
}

const btnSecondaryStyle = {
  padding: "8px 14px",
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.04)",
  color: "#e0e6f0",
  cursor: "pointer",
  fontSize: 14,
};

/**
 * Helper: maak een React-component met gebonden trackId, geschikt voor
 * step.interactiveComponent in leerpaden. De LearnPath geeft onAnswer-prop door.
 */
export function make3DInteractiveComponent(trackId) {
  return function BoundQuestion3D({ onAnswer }) {
    return <Question3DRenderer trackId={trackId} onAnswer={onAnswer} />;
  };
}
