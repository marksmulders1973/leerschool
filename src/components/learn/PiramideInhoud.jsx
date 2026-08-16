// 📐 PiramideInhoud — schuif aan de grondvlak-zijde en de hoogte, en zie de
// inhoud van de piramide live groeien en afnemen (Mark 16 aug: "je hebt een
// schuif en kunt verkleinen/vergroten en je ziet de inhoud groeien en afnemen").
//
// Inhoud van een piramide = 1/3 × grondvlak × hoogte. Bij een vierkant grondvlak:
// V = 1/3 × zijde² × hoogte. Alles in hele meters → volume in m³ (= aantal
// blokjes van 1×1×1 m). Zuiver SVG + React, geen 3D-canvas: laadt overal snel
// en werkt zowel in een leerpad-illustratie als in een park-pop-up.

import { useState } from "react";

const PX = 11;          // pixels per meter voor de tekening
const GROND_Y = 212;    // grondlijn in de SVG
const CX = 132;         // midden-x van de piramide

function isoPunt(x, y, z) {
  // simpele isometrische projectie zodat het als 3D leest
  return [CX + x * PX + z * PX * 0.5, GROND_Y - y * PX - z * PX * 0.34];
}

export default function PiramideInhoud() {
  const [zijde, setZijde] = useState(6);
  const [hoogte, setHoogte] = useState(9);

  const grondvlak = zijde * zijde;
  const volume = (grondvlak * hoogte) / 3;
  const half = zijde / 2;

  // hoekpunten van de piramide (grondvlak op y=0, top op y=hoogte)
  const vl = isoPunt(-half, 0, -half);   // voor-links
  const vr = isoPunt(half, 0, -half);    // voor-rechts
  const ar = isoPunt(half, 0, half);     // achter-rechts
  const al = isoPunt(-half, 0, half);    // achter-links
  const top = isoPunt(0, hoogte, 0);     // de punt

  const poly = (pts) => pts.map((p) => p.join(",")).join(" ");

  // maximale inhoud voor de meter-balk (12×12-grondvlak, hoogte 12)
  const maxV = (12 * 12 * 12) / 3;
  const balk = Math.min(1, volume / maxV);

  return (
    <div style={{ background: "linear-gradient(160deg,#fdf6e3,#f3ead0)", borderRadius: 16, padding: "14px 16px", maxWidth: 440, margin: "0 auto", color: "#3a3320", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 2, color: "#7a5b00" }}>🔺 Speel met de inhoud van de piramide</div>
      <div style={{ fontSize: 12.5, color: "#7a6a3a", marginBottom: 8 }}>Schuif en kijk wat er met de <b>inhoud</b> gebeurt — hij groeit en neemt af!</div>

      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <svg viewBox="0 0 264 232" style={{ width: 210, height: 184, flexShrink: 0 }} role="img" aria-label={`Piramide met grondvlak-zijde ${zijde} meter en hoogte ${hoogte} meter`}>
          {/* schaduw */}
          <ellipse cx={CX + 8} cy={GROND_Y + 4} rx={half * PX + 14} ry={10} fill="rgba(0,0,0,0.10)" />
          {/* achtervlakken (donkerder) */}
          <polygon points={poly([al, ar, top])} fill="#b89b63" />
          {/* grondvlak (bovenkant zichtbaar als ruit) */}
          <polygon points={poly([vl, vr, ar, al])} fill="#c9ad74" opacity="0.55" />
          {/* rechter zijvlak */}
          <polygon points={poly([vr, ar, top])} fill="#cbb277" />
          {/* voorvlak (lichtst) */}
          <polygon points={poly([vl, vr, top])} fill="#e2c98d" />
          {/* gouden topsteen */}
          <polygon points={poly([isoPunt(-0.5, hoogte - 0.8, 0), isoPunt(0.5, hoogte - 0.8, 0), top])} fill="#e8b400" />
          {/* maatpijlen */}
          <line x1={vl[0]} y1={GROND_Y + 16} x2={vr[0]} y2={GROND_Y + 16} stroke="#8a6a2a" strokeWidth="1.5" markerStart="url(#a)" markerEnd="url(#a)" />
          <text x={CX} y={GROND_Y + 29} textAnchor="middle" fontSize="11" fontWeight="700" fill="#8a6a2a">zijde {zijde} m</text>
          <text x={vr[0] + 16} y={(top[1] + vr[1]) / 2} fontSize="11" fontWeight="700" fill="#8a6a2a">h {hoogte} m</text>
          <defs>
            <marker id="a" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M1,1 L6,3.5 L1,6" fill="none" stroke="#8a6a2a" strokeWidth="1.2" /></marker>
          </defs>
        </svg>

        {/* inhoud-meter die groeit/krimpt */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ width: 26, height: 130, background: "#e9dcb6", borderRadius: 8, position: "relative", overflow: "hidden", border: "1px solid #d8c894" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${balk * 100}%`, background: "linear-gradient(#5cc47a,#2e9e4f)", transition: "height 0.12s ease-out" }} />
          </div>
          <div style={{ fontSize: 10.5, color: "#7a6a3a", fontWeight: 700 }}>inhoud</div>
        </div>
      </div>

      {/* de live inhoud + formule */}
      <div style={{ background: "#fffdf5", border: "1px solid #e6d9a8", borderRadius: 12, padding: "10px 12px", margin: "10px 0 4px", textAlign: "center" }}>
        <div style={{ fontSize: 13, color: "#6b5b2a" }}>
          V = <b>⅓</b> × grondvlak × hoogte = ⅓ × ({zijde}×{zijde}) × {hoogte}
        </div>
        <div style={{ fontSize: 26, fontWeight: 800, color: "#2e9e4f", lineHeight: 1.15, marginTop: 2 }}>
          {volume.toLocaleString("nl-NL", { maximumFractionDigits: 1 })} m³
        </div>
        <div style={{ fontSize: 11.5, color: "#8a7a4a" }}>≈ {Math.round(volume)} blokjes van 1 × 1 × 1 meter</div>
      </div>

      {/* schuiven */}
      <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#6b5b2a", margin: "8px 0 2px" }}>
        Zijde van de grondvlak: {zijde} m
        <input type="range" min="2" max="12" step="1" value={zijde} onChange={(e) => setZijde(+e.target.value)} style={{ width: "100%", accentColor: "#c9862e" }} />
      </label>
      <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#6b5b2a", margin: "4px 0 2px" }}>
        Hoogte: {hoogte} m
        <input type="range" min="2" max="12" step="1" value={hoogte} onChange={(e) => setHoogte(+e.target.value)} style={{ width: "100%", accentColor: "#c9862e" }} />
      </label>

      <div style={{ fontSize: 11.5, color: "#8a7a4a", marginTop: 6, lineHeight: 1.5 }}>
        💡 Merk je het? Maak je de <b>zijde</b> 2× zo groot, dan wordt de inhoud <b>4×</b> zo groot (want grondvlak = zijde × zijde). De <b>hoogte</b> verdubbelen maakt de inhoud precies <b>2×</b> zo groot.
      </div>
    </div>
  );
}
