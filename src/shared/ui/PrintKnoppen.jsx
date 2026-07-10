// PrintKnoppen — twee losse knoppen "🖨️ Printen" en "📄 Opslaan als PDF"
// (Mark 10 jul: de gecombineerde knop "Opslaan als PDF / Printen" was
// verwarrend voor ouders). Technisch openen beide de browser-printdialoog
// (PDF opslaan kán niet buiten die dialoog om — bewust geen PDF-library,
// zie OefenpakketPage), maar de PDF-knop toont eerst één regel uitleg zodat
// je weet dat je daar "Opslaan als PDF" als bestemming kiest.
import { useEffect, useRef, useState } from "react";
import { track } from "../../utils.js";

export default function PrintKnoppen({ trackPrefix, trackProps, disabled = false }) {
  const [hint, setHint] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const basis = {
    padding: "13px 24px", borderRadius: 12, fontSize: 16, fontWeight: 700,
    cursor: disabled ? "not-allowed" : "pointer",
  };
  const doePrint = () => {
    try { track(`${trackPrefix}_print`, trackProps); } catch { /* */ }
    window.print();
  };
  const doePdf = () => {
    try { track(`${trackPrefix}_pdf`, trackProps); } catch { /* */ }
    // Hint eerst tonen; de printdialoog blokkeert daarna de pagina.
    setHint(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => window.print(), 1200);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button
          onClick={doePrint}
          disabled={disabled}
          style={{ ...basis, border: "none", background: disabled ? "rgba(255,255,255,0.1)" : "var(--color-accent, #42a5f5)", color: disabled ? "#888" : "#0b1224", boxShadow: disabled ? "none" : "0 4px 16px rgba(66,165,245,0.35)" }}
        >
          🖨️ Printen
        </button>
        <button
          onClick={doePdf}
          disabled={disabled}
          style={{ ...basis, background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.28)", color: disabled ? "#888" : "var(--color-text, #e8edf5)" }}
        >
          📄 Opslaan als PDF
        </button>
      </div>
      {hint && (
        <div style={{ fontSize: 12.5, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.5 }}>
          💡 Kies zo in het venster bij <b style={{ color: "var(--color-text, #e8edf5)" }}>Bestemming</b> voor{" "}
          <b style={{ color: "var(--color-text, #e8edf5)" }}>"Opslaan als PDF"</b> — het venster opent vanzelf…
        </div>
      )}
    </div>
  );
}
