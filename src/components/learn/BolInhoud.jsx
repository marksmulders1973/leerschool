// 🔮 BolInhoud — schuif aan de straal en zie de inhoud van een bol (of een
// halve bol) live groeien en afnemen (Mark 16 aug: "ook een grote bal en een
// halve bal"). Eén component voor beide via de prop `half`.
// 18 aug: voetbal-patches weg + diameter (blauw) en straal (rood) getekend —
// zelfde kleurcode als de glazen vormen in het 3D-park (lerend > leuk).
//
// Inhoud bol = 4/3 × π × r³.  Halve bol = precies de helft = 2/3 × π × r³.

import { useState } from "react";

const PX = 13;
const GROND_Y = 190;
const CX = 116;

export default function BolInhoud({ half = false }) {
  const [straal, setStraal] = useState(4);
  const r = straal;
  const R = r * PX;

  const volume = (half ? 2 : 4) / 3 * Math.PI * r * r * r;
  const maxV = (half ? 2 : 4) / 3 * Math.PI * 8 * 8 * 8;
  const balk = Math.min(1, volume / maxV);

  const cy = half ? GROND_Y : GROND_Y - R;    // bol zweeft op de grond; koepel staat erop
  const ry = R * 0.32;                          // perspectief van de ronde bodem

  return (
    <div style={{ background: half ? "linear-gradient(160deg,#eef4ff,#dbe7fb)" : "linear-gradient(160deg,#f0f9f0,#dcefdc)", borderRadius: 16, padding: "14px 16px", maxWidth: 440, margin: "0 auto", color: "#243044", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 2, color: half ? "#2a4a7a" : "#2e7a3a" }}>{half ? "🥅 Speel met de inhoud van de halve bol" : "🔮 Speel met de inhoud van de bol"}</div>
      <div style={{ fontSize: 12.5, color: "#5a6a84", marginBottom: 8 }}>Schuif aan de <b>straal</b> — {half ? "de koepel" : "de bal"} groeit en de inhoud verandert mee!</div>

      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <svg viewBox="0 0 232 210" style={{ width: 206, height: 188, flexShrink: 0 }} role="img" aria-label={`${half ? "Halve bol" : "Bol"} met straal ${r} meter`}>
          <defs>
            <radialGradient id="bolg" cx="38%" cy="32%" r="72%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#e9eef5" />
              <stop offset="100%" stopColor="#c3ccd8" />
            </radialGradient>
          </defs>
          <ellipse cx={CX + 5} cy={GROND_Y + 5} rx={R + 8} ry={9} fill="rgba(0,0,0,0.10)" />
          {half ? (
            <>
              {/* platte bodem (achter) */}
              <ellipse cx={CX} cy={GROND_Y} rx={R} ry={ry} fill="#c3ccd8" />
              {/* koepel = bovenste helft */}
              <path d={`M ${CX - R} ${GROND_Y} A ${R} ${R} 0 0 1 ${CX + R} ${GROND_Y} A ${R} ${ry} 0 0 1 ${CX - R} ${GROND_Y} Z`} fill="url(#bolg)" stroke="#94a0b0" strokeWidth="1.2" />
            </>
          ) : (
            <circle cx={CX} cy={cy} r={R} fill="url(#bolg)" stroke="#94a0b0" strokeWidth="1.2" />
          )}
          {/* maatlijnen — zelfde kleurcode als de glazen vormen in het park:
              blauw = diameter (dwars door het midden), rood = straal (haaks,
              de helft). Middelpunt-stip erbij zodat je ziet waar ze starten. */}
          <line x1={CX - R} y1={cy} x2={CX + R} y2={cy} stroke="#12203a" strokeWidth="1.6" />
          <text x={CX} y={cy + 14} textAnchor="middle" fontSize="11" fontWeight="800" fill="#12203a">diameter {2 * r} m</text>
          <line x1={CX} y1={cy} x2={CX} y2={cy - R} stroke="#c0392b" strokeWidth="1.6" />
          <text x={CX + 6} y={cy - R / 2} textAnchor="start" fontSize="11" fontWeight="800" fill="#c0392b">straal {r} m</text>
          <circle cx={CX} cy={cy} r="2.6" fill="#12203a" />
        </svg>

        {/* inhoud-meter */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ width: 26, height: 130, background: "#d9e2ef", borderRadius: 8, position: "relative", overflow: "hidden", border: "1px solid #c3d0e2" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${balk * 100}%`, background: half ? "linear-gradient(#5b8def,#2e5fc0)" : "linear-gradient(#5cc47a,#2e9e4f)", transition: "height 0.12s ease-out" }} />
          </div>
          <div style={{ fontSize: 10.5, color: "#5a6a84", fontWeight: 700 }}>inhoud</div>
        </div>
      </div>

      <div style={{ background: "#fff", border: "1px solid #d7e0ee", borderRadius: 12, padding: "10px 12px", margin: "10px 0 4px", textAlign: "center" }}>
        <div style={{ fontSize: 13, color: "#3a4a64" }}>
          V = <b>{half ? "⅔" : "⁴⁄₃"}</b> × π × r³ = {half ? "⅔" : "⁴⁄₃"} × 3,14 × {r}³
        </div>
        <div style={{ fontSize: 26, fontWeight: 800, color: half ? "#2e5fc0" : "#2e9e4f", lineHeight: 1.15, marginTop: 2 }}>
          {volume.toLocaleString("nl-NL", { maximumFractionDigits: 1 })} m³
        </div>
        <div style={{ fontSize: 11.5, color: "#6a7a94" }}>≈ {Math.round(volume)} blokjes van 1 × 1 × 1 meter</div>
      </div>

      <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#3a4a64", margin: "8px 0 2px" }}>
        Straal (van het midden tot de rand): {r} m
        <input type="range" min="1" max="8" step="1" value={straal} onChange={(e) => setStraal(+e.target.value)} style={{ width: "100%", accentColor: half ? "#2e5fc0" : "#2e9e4f" }} />
      </label>

      <div style={{ fontSize: 11.5, color: "#6a7a94", marginTop: 6, lineHeight: 1.5 }}>
        💡 {half
          ? "Een halve bol is precies de helft van een hele bol — daarom ⅔ in plaats van ⁴⁄₃. Snijd een bal doormidden en je hebt er twee!"
          : "Bij een bol telt de straal drie keer mee (r × r × r). Maak je de straal 2× zo groot, dan wordt de inhoud 8× zo groot!"}
      </div>
    </div>
  );
}
