// ============================================================================
// Vergelijking2Dvs3D — speciale uitleg-illustratie voor RM-stap 6 ("Van 2D
// naar 3D"). Toont een platte rechthoek (2D) naast een draaibare 3D-balk om
// het contrast meteen visueel te maken — los daarvan zou alleen 3D het punt
// niet duidelijk maken.
// ============================================================================

import Shape3D from "./Shape3D.jsx";

export default function Vergelijking2Dvs3D() {
  return (
    <div style={{ margin: "16px 0" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
      }}>
        {/* 2D — platte rechthoek */}
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12,
          padding: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: 240,
        }}>
          <p style={{ fontSize: 12, color: "rgba(224,230,240,0.7)", margin: 0, fontWeight: 600 }}>
            2D rechthoek (plat)
          </p>
          <svg viewBox="0 0 160 100" width="160" height="100" style={{ display: "block" }}>
            <rect x="20" y="30" width="120" height="50" fill="rgba(0,200,83,0.30)" stroke="#00c853" strokeWidth="2" />
          </svg>
          <p style={{ fontSize: 11, color: "rgba(224,230,240,0.55)", margin: 0, fontStyle: "italic" }}>
            heeft alleen oppervlakte
          </p>
        </div>

        {/* 3D — draaibare balk */}
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12,
          padding: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: 240,
        }}>
          <p style={{ fontSize: 12, color: "rgba(224,230,240,0.7)", margin: "0 0 4px", fontWeight: 600 }}>
            3D balk (heeft diepte)
          </p>
          <div style={{ width: "100%" }}>
            <Shape3D
              shape="balk"
              dimensions={{ lengte: 4, hoogte: 2.5, breedte: 3 }}
              labels={[]}
              height={170}
            />
          </div>
          <p style={{ fontSize: 11, color: "rgba(224,230,240,0.55)", margin: "4px 0 0", fontStyle: "italic" }}>
            heeft oppervlakte + inhoud
          </p>
        </div>
      </div>
      <p style={{
        textAlign: "center",
        fontSize: 12,
        color: "rgba(224,230,240,0.65)",
        margin: "10px 0 2px",
        fontStyle: "italic",
      }}>
        2D = oppervlakte &nbsp;·&nbsp; 3D = oppervlakte + inhoud
      </p>
    </div>
  );
}
