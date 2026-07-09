import { BRAND } from "../../brand.js";

// PrintFooter — de "Hotmail-signature" op elk geprint A4-vel (groei-masterplan
// 1.2, 2026-07-09): prints worden gekopieerd, doorgegeven en hangen op
// koelkasten en prikborden — elke losse pagina moet vertellen waar hij vandaan
// komt. Bewust klein en rustig (het is andermans keukentafel, geen billboard).
export default function PrintFooter() {
  return (
    <div style={{
      marginTop: 28, paddingTop: 10, borderTop: "1px solid #e3e8ee",
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
      fontSize: 11, color: "#9aa6b4", fontFamily: "Arial, sans-serif",
    }}>
      <span>🎓 Gemaakt met {BRAND.name} — gratis oefenen voor de Doorstroomtoets</span>
      <span style={{ fontWeight: 700 }}>{BRAND.domain}</span>
    </div>
  );
}
