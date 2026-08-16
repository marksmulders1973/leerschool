// 🧊 KubusInhoud — schuif aan de ribbe en zie de inhoud van de kubus live
// groeien en afnemen (Mark 16 aug, na de piramide-schuif: "de 3D-kubus in het
// park, als kunstwerk of Rubik-vibe"). De kubus is verdeeld in kleine blokjes
// van 1×1×1, zodat een kind letterlijk ziet: inhoud = het aantal blokjes.
//
// Inhoud van een kubus = ribbe × ribbe × ribbe = ribbe³. Alles in hele meters →
// volume in m³ (= aantal blokjes van 1 m³). Zuiver SVG + React.

import { useState } from "react";

const PX = 8;
const GROND_Y = 176;
const CX = 104;

// oblieke projectie: z = diepte (naar rechtsboven)
const P = (x, y, z) => [CX + x * PX + z * PX * 0.6, GROND_Y - y * PX - z * PX * 0.34];
const poly = (pts) => pts.map((p) => p.join(",")).join(" ");

export default function KubusInhoud() {
  const [ribbe, setRibbe] = useState(3);
  const n = ribbe;
  const h = n / 2;
  const volume = n * n * n;

  // hoekpunten
  const A = P(-h, 0, -h), B = P(h, 0, -h), C = P(h, n, -h), D = P(-h, n, -h);
  const E = P(h, 0, h), F = P(h, n, h), G = P(-h, n, h);

  // rasterlijnen per vlak (de blokjes-verdeling)
  const lijnen = [];
  for (let i = 1; i < n; i++) {
    // voorvlak (z = -h): verticaal + horizontaal
    lijnen.push([P(-h + i, 0, -h), P(-h + i, n, -h)]);
    lijnen.push([P(-h, i, -h), P(h, i, -h)]);
    // rechtervlak (x = h): diepte + horizontaal
    lijnen.push([P(h, 0, -h + i), P(h, n, -h + i)]);
    lijnen.push([P(h, i, -h), P(h, i, h)]);
    // bovenvlak (y = n): diepte + breedte
    lijnen.push([P(-h + i, n, -h), P(-h + i, n, h)]);
    lijnen.push([P(-h, n, -h + i), P(h, n, -h + i)]);
  }

  const maxV = 12 * 12 * 12;
  const balk = Math.min(1, volume / maxV);

  return (
    <div style={{ background: "linear-gradient(160deg,#f3f6fb,#e7edf6)", borderRadius: 16, padding: "14px 16px", maxWidth: 440, margin: "0 auto", color: "#243044", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 2, color: "#2a4a7a" }}>🧊 Speel met de inhoud van de kubus</div>
      <div style={{ fontSize: 12.5, color: "#5a6a84", marginBottom: 8 }}>Schuif aan de <b>ribbe</b> — de kubus vult zich met blokjes en de inhoud groeit of neemt af!</div>

      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <svg viewBox="0 0 220 196" style={{ width: 200, height: 178, flexShrink: 0 }} role="img" aria-label={`Kubus met ribbe ${n} meter`}>
          <ellipse cx={CX + 6} cy={GROND_Y + 4} rx={h * PX + 12} ry={9} fill="rgba(0,0,0,0.10)" />
          {/* drie zichtbare vlakken in Rubik-kleuren */}
          <polygon points={poly([A, B, C, D])} fill="#e23b32" />
          <polygon points={poly([B, E, F, C])} fill="#2e9e4f" />
          <polygon points={poly([D, C, F, G])} fill="#f5f5f5" />
          {/* blokjes-raster */}
          {lijnen.map((l, i) => <line key={i} x1={l[0][0]} y1={l[0][1]} x2={l[1][0]} y2={l[1][1]} stroke="rgba(20,25,35,0.55)" strokeWidth="1" />)}
          {/* buitenrand */}
          <polygon points={poly([A, B, E, F, G, D])} fill="none" stroke="#1a2233" strokeWidth="1.8" />
          {/* ribbe-maat */}
          <text x={CX} y={GROND_Y + 20} textAnchor="middle" fontSize="11" fontWeight="700" fill="#3a4a64">ribbe {n} m</text>
        </svg>

        {/* inhoud-meter */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ width: 26, height: 130, background: "#d9e2ef", borderRadius: 8, position: "relative", overflow: "hidden", border: "1px solid #c3d0e2" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: `${balk * 100}%`, background: "linear-gradient(#5b8def,#2e5fc0)", transition: "height 0.12s ease-out" }} />
          </div>
          <div style={{ fontSize: 10.5, color: "#5a6a84", fontWeight: 700 }}>inhoud</div>
        </div>
      </div>

      <div style={{ background: "#fff", border: "1px solid #d7e0ee", borderRadius: 12, padding: "10px 12px", margin: "10px 0 4px", textAlign: "center" }}>
        <div style={{ fontSize: 13, color: "#3a4a64" }}>
          V = ribbe × ribbe × ribbe = {n} × {n} × {n}
        </div>
        <div style={{ fontSize: 26, fontWeight: 800, color: "#2e5fc0", lineHeight: 1.15, marginTop: 2 }}>
          {volume.toLocaleString("nl-NL")} m³
        </div>
        <div style={{ fontSize: 11.5, color: "#6a7a94" }}>= precies {volume.toLocaleString("nl-NL")} blokjes van 1 × 1 × 1 meter</div>
      </div>

      <label style={{ display: "block", fontSize: 12.5, fontWeight: 700, color: "#3a4a64", margin: "8px 0 2px" }}>
        Ribbe (de zijde van de kubus): {n} m
        <input type="range" min="1" max="12" step="1" value={ribbe} onChange={(e) => setRibbe(+e.target.value)} style={{ width: "100%", accentColor: "#2e5fc0" }} />
      </label>

      <div style={{ fontSize: 11.5, color: "#6a7a94", marginTop: 6, lineHeight: 1.5 }}>
        💡 Bij een kubus is alles even lang. Maak je de ribbe <b>2×</b> zo groot, dan wordt de inhoud <b>8×</b> zo groot (2 × 2 × 2) — omdat het in álle drie de richtingen groeit!
      </div>
    </div>
  );
}
