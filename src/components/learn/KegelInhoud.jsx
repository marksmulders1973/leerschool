// 🍦 KegelInhoud — schuif aan de straal en de hoogte en zie de inhoud van de
// kegel live groeien en afnemen (Mark 16 aug, derde inhoud-speeltuin na piramide
// en kubus). Inhoud van een kegel = 1/3 × π × r² × hoogte. Net als een piramide
// is een kegel precies een derde van een cilinder met dezelfde bodem en hoogte.

import { useState } from "react";

const PX = 12;
const GROND_Y = 196;
const CX = 116;

export default function KegelInhoud() {
  const [straal, setStraal] = useState(4);
  const [hoogte, setHoogte] = useState(8);
  const r = straal, h = hoogte;

  const volume = (Math.PI * r * r * h) / 3;

  const rx = r * PX, ry = r * PX * 0.32;
  const apexY = GROND_Y - h * PX;
  const baseL = [CX - rx, GROND_Y], baseR = [CX + rx, GROND_Y];
  // kegel-body: van links-onder → top → rechts-onder → langs de voorkant terug
  const body = `M ${baseL[0]} ${baseL[1]} L ${CX} ${apexY} L ${baseR[0]} ${baseR[1]} A ${rx} ${ry} 0 0 1 ${baseL[0]} ${baseL[1]} Z`;

  const maxV = (Math.PI * 8 * 8 * 12) / 3;
  const balk = Math.min(1, volume / maxV);

  return (
    <div style={{ background: "linear-gradient(160deg,#fff6ec,#ffe8cf)", borderRadius: 16, padding: "14px 16px", maxWidth: 440, margin: "0 auto", color: "#4a3320", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 2, color: "#a85f16" }}>🍦 Speel met de inhoud van de kegel</div>
      <div style={{ fontSize: 12.5, color: "#8a6a3a", marginBottom: 8 }}>Schuif aan de <b>straal</b> en de <b>hoogte</b> — de kegel groeit en de inhoud verandert mee!</div>

      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <svg viewBox="0 0 232 212" style={{ width: 206, height: 190, flexShrink: 0 }} role="img" aria-label={`Kegel met straal ${r} meter en hoogte ${h} meter`}>
          <ellipse cx={CX + 6} cy={GROND_Y + 5} rx={rx + 10} ry={9} fill="rgba(0,0,0,0.10)" />
          {/* achterkant bodem (lichter) */}
          <ellipse cx={CX} cy={GROND_Y} rx={rx} ry={ry} fill="#ffe0a6" />
          {/* kegel-mantel */}
          <path d={body} fill="#ffce78" stroke="#c9862e" strokeWidth="1.4" />
          {/* voorrand bodem */}
          <path d={`M ${baseL[0]} ${baseL[1]} A ${rx} ${ry} 0 0 0 ${baseR[0]} ${baseR[1]}`} fill="none" stroke="#c9862e" strokeWidth="1.4" strokeDasharray="4 3" />
          {/* maatlijnen */}
          <line x1={CX} y1={GROND_Y} x2={baseR[0]} y2={GROND_Y} stroke="#8a5a1a" strokeWidth="1.4" />
          <text x={(CX + baseR[0]) / 2} y={GROND_Y + 15} textAnchor="middle" fontSize="11" fontWeight="700" fill="#8a5a1a">r {r} m</text>
          <line x1={CX} y1={GROND_Y} x2={CX} y2={apexY} stroke="#8a5a1a" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x={CX + 6} y={(GROND_Y + apexY) / 2} fontSize="11" fontWeight="700" fill="#8a5a1a">h {h} m</text>
        </svg>

        {/* inhoud-meter */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ width: 26, height: 130, background: "#f3e2c6", borderRadius: 8, position: "relative", overflow: "hidden", border: "1px solid #e6cfa0" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${balk * 100}%`, background: "linear-gradient(#ffb35c,#e07f1e)", transition: "height 0.12s ease-out" }} />
          </div>
          <div style={{ fontSize: 10.5, color: "#8a6a3a", fontWeight: 700 }}>inhoud</div>
        </div>
      </div>

      <div style={{ background: "#fffdf8", border: "1px solid #e6d5b0", borderRadius: 12, padding: "10px 12px", margin: "10px 0 4px", textAlign: "center" }}>
        <div style={{ fontSize: 13, color: "#6b4f2a" }}>
          V = <b>⅓</b> × π × r² × hoogte = ⅓ × 3,14 × {r}² × {h}
        </div>
        <div style={{ fontSize: 26, fontWeight: 800, color: "#e07f1e", lineHeight: 1.15, marginTop: 2 }}>
          {volume.toLocaleString("nl-NL", { maximumFractionDigits: 1 })} m³
        </div>
        <div style={{ fontSize: 11.5, color: "#8a7050" }}>≈ {Math.round(volume)} blokjes van 1 × 1 × 1 meter</div>
      </div>

      <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#6b4f2a", margin: "8px 0 2px" }}>
        Straal van de bodem: {r} m
        <input type="range" min="1" max="8" step="1" value={straal} onChange={(e) => setStraal(+e.target.value)} style={{ width: "100%", accentColor: "#e07f1e" }} />
      </label>
      <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#6b4f2a", margin: "4px 0 2px" }}>
        Hoogte: {h} m
        <input type="range" min="2" max="12" step="1" value={hoogte} onChange={(e) => setHoogte(+e.target.value)} style={{ width: "100%", accentColor: "#e07f1e" }} />
      </label>

      <div style={{ fontSize: 11.5, color: "#8a7050", marginTop: 6, lineHeight: 1.5 }}>
        💡 Een kegel is precies <b>een derde</b> van een cilinder (blikje) met dezelfde bodem en hoogte — daarom de <b>⅓</b>. Net zoals een piramide een derde van een balk is!
      </div>
    </div>
  );
}
