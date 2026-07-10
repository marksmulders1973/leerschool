// PrintKnoppen — twee losse knoppen "🖨️ Printen" en "📄 Opslaan als PDF"
// (Mark 10 jul: de gecombineerde knop "Opslaan als PDF / Printen" was
// verwarrend voor ouders). Technisch openen beide de browser-printdialoog
// (PDF opslaan kán niet buiten die dialoog om — bewust geen PDF-library,
// zie OefenpakketPage), maar de PDF-knop toont eerst één regel uitleg zodat
// je weet dat je daar "Opslaan als PDF" als bestemming kiest.
import { useEffect, useRef, useState } from "react";
import { track } from "../../utils.js";

// Draait de app als geïnstalleerde app (PWA standalone)? Dan doet
// window.print() op Android/iOS vaak stilletjes NIETS (Mark 10 jul:
// "ik druk op de knop en er gebeurt niets"). In dat geval tonen we geen
// dode printknop maar een open-in-je-browser-route.
function isStandalone() {
  try {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  } catch { return false; }
}

export default function PrintKnoppen({ trackPrefix, trackProps, disabled = false }) {
  const [hint, setHint] = useState(false);
  const [gekopieerd, setGekopieerd] = useState(false);
  const [standalone] = useState(isStandalone);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  if (standalone) {
    const url = (() => { try { return window.location.origin + window.location.pathname; } catch { return "https://leerkwartier.app/printen"; } })();
    const openBrowser = () => {
      try { track(`${trackPrefix}_print_standalone`, trackProps); } catch { /* */ }
      try { window.open(url, "_blank", "noopener"); } catch { /* */ }
    };
    const kopieer = async () => {
      try { await navigator.clipboard.writeText(url); setGekopieerd(true); } catch { /* */ }
    };
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 480 }}>
        <div style={{ fontSize: 13.5, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.55 }}>
          🖨️ Printen werkt niet vanuit de geïnstalleerde app — open deze pagina in je
          internet-browser (Chrome of Safari), daar werkt de printknop wél.
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button onClick={openBrowser} style={{ padding: "13px 22px", borderRadius: 12, border: "none", background: "var(--color-accent, #42a5f5)", color: "#0b1224", fontSize: 15.5, fontWeight: 700, cursor: "pointer" }}>
            🌐 Open in je browser
          </button>
          <button onClick={kopieer} style={{ padding: "13px 18px", borderRadius: 12, background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.28)", color: "var(--color-text, #e8edf5)", fontSize: 14.5, fontWeight: 700, cursor: "pointer" }}>
            {gekopieerd ? "✓ Link gekopieerd" : "🔗 Kopieer de link"}
          </button>
        </div>
      </div>
    );
  }

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
