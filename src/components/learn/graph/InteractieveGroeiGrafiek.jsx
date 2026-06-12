import { useState } from "react";

// Interactieve groei-grafiek (gebruikerswens bord 2026-06-11: "interactieve
// lineaire of exponentiële grafiek die de stappen laat zien op elk punt").
// Schuif over x en zie op elk punt de berekening: lineair y = 5x + 10 vs
// exponentieel y = 10 · 1,5^x. Geen dependencies — kale SVG + slider.
// Gebruik in een leerpad-stap: illustrationComponent: InteractieveGroeiGrafiek

const C = {
  axis: "#e0e6f0",
  grid: "#2a3f5f",
  lin: "#5b86b8",
  exp: "#ff7043",
  warm: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const X_MAX = 8;
const Y_MAX = 270; // 10 · 1.5^8 ≈ 256

const W = 460;
const H = 280;
const PAD = { l: 44, r: 14, t: 14, b: 30 };

const toX = (x) => PAD.l + (x / X_MAX) * (W - PAD.l - PAD.r);
const toY = (y) => H - PAD.b - (y / Y_MAX) * (H - PAD.t - PAD.b);

const lin = (x) => 5 * x + 10;
const exp = (x) => 10 * Math.pow(1.5, x);

// NL-notatie met komma, max 2 decimalen.
const nl = (v) => {
  const rounded = Math.round(v * 100) / 100;
  return String(rounded).replace(".", ",");
};

function curvePath(fn) {
  const pts = [];
  for (let x = 0; x <= X_MAX; x += 0.1) {
    pts.push(`${toX(x).toFixed(1)},${toY(fn(x)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

export default function InteractieveGroeiGrafiek() {
  const [x, setX] = useState(3);
  const yLin = lin(x);
  const yExp = exp(x);

  return (
    <div
      style={{
        background: "#0a1424",
        border: `1px solid ${C.grid}`,
        borderRadius: 14,
        padding: 14,
        margin: "16px 0",
      }}
    >
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }}>
        {/* raster + assen */}
        {[0, 50, 100, 150, 200, 250].map((y) => (
          <g key={y}>
            <line x1={PAD.l} y1={toY(y)} x2={W - PAD.r} y2={toY(y)} stroke={C.grid} strokeWidth="0.6" />
            <text x={PAD.l - 6} y={toY(y) + 4} textAnchor="end" fill={C.muted} fontSize="10" fontFamily="Arial">
              {y}
            </text>
          </g>
        ))}
        {Array.from({ length: X_MAX + 1 }, (_, i) => (
          <text key={i} x={toX(i)} y={H - PAD.b + 16} textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Arial">
            {i}
          </text>
        ))}
        <line x1={PAD.l} y1={toY(0)} x2={W - PAD.r} y2={toY(0)} stroke={C.axis} strokeWidth="1.2" />
        <line x1={PAD.l} y1={PAD.t} x2={PAD.l} y2={H - PAD.b} stroke={C.axis} strokeWidth="1.2" />

        {/* curves */}
        <path d={curvePath(lin)} fill="none" stroke={C.lin} strokeWidth="2.4" />
        <path d={curvePath(exp)} fill="none" stroke={C.exp} strokeWidth="2.4" />

        {/* verticale hulplijn op gekozen x */}
        <line x1={toX(x)} y1={PAD.t} x2={toX(x)} y2={H - PAD.b} stroke={C.warm} strokeWidth="1" strokeDasharray="4 4" />

        {/* punten op beide curves */}
        <circle cx={toX(x)} cy={toY(yLin)} r="6" fill={C.lin} stroke="#fff" strokeWidth="1.6" />
        <circle cx={toX(x)} cy={toY(yExp)} r="6" fill={C.exp} stroke="#fff" strokeWidth="1.6" />

        {/* legenda */}
        <text x={PAD.l + 8} y={PAD.t + 14} fill={C.lin} fontSize="12" fontFamily="Arial" fontWeight="bold">
          ── lineair: y = 5x + 10
        </text>
        <text x={PAD.l + 8} y={PAD.t + 30} fill={C.exp} fontSize="12" fontFamily="Arial" fontWeight="bold">
          ── exponentieel: y = 10 · 1,5^x
        </text>
      </svg>

      {/* slider */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
        <span style={{ fontSize: 13, color: C.muted, whiteSpace: "nowrap" }}>Schuif x:</span>
        <input
          type="range"
          min="0"
          max={X_MAX}
          step="1"
          value={x}
          onChange={(e) => setX(Number(e.target.value))}
          style={{ flex: 1, accentColor: C.warm }}
          aria-label="Kies een waarde voor x"
        />
        <strong style={{ fontSize: 15, color: C.warm, minWidth: 44, textAlign: "center" }}>x = {x}</strong>
      </div>

      {/* de berekening op dit punt — dít maakt het leerzaam */}
      <div style={{ display: "grid", gap: 6, marginTop: 10, fontSize: 13.5, lineHeight: 1.5 }}>
        <div style={{ color: C.lin }}>
          <strong>Lineair:</strong> y = 5 · {x} + 10 = <strong>{nl(yLin)}</strong>
          <span style={{ color: C.muted }}> (elke stap +5 erbij)</span>
        </div>
        <div style={{ color: C.exp }}>
          <strong>Exponentieel:</strong> y = 10 · 1,5^{x} = <strong>{nl(yExp)}</strong>
          <span style={{ color: C.muted }}> (elke stap ×1,5)</span>
        </div>
        <div style={{ color: C.text, fontSize: 12.5 }}>
          {x <= 3
            ? "In het begin liggen de lijnen dicht bij elkaar — het verschil lijkt klein."
            : "Zie je het? De oranje lijn schiet omhoog: vermenigvuldigen wint het altijd van optellen."}
        </div>
      </div>
    </div>
  );
}
