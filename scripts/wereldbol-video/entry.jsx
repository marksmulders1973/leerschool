// Opname-pagina: alleen de les-wereldbol, vierkant, met LinkedIn-overlay.
import React from "react";
import { createRoot } from "react-dom/client";
import Wereldbol from "C:/Users/mark-/Desktop/Studiebol/leerschool/src/components/learn/geo/Wereldbol.jsx";

function Pagina() {
  return (
    <div id="stage" style={{ position: "relative", width: 1080, height: 1080, overflow: "hidden", background: "#0a0f1e", fontFamily: "-apple-system, Segoe UI, Roboto, sans-serif" }}>
      <div id="globe-wrap" style={{ position: "absolute", inset: 0 }}>
        <Wereldbol modus="werelddeel" onAnswer={() => {}} />
      </div>
      {/* Overlay: doelgroep-pill + vraag + antwoord (later ingeschakeld) + logo */}
      <div style={{ position: "absolute", top: 26, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, zIndex: 5, pointerEvents: "none" }}>
        <div style={{ background: "rgba(105,240,174,0.16)", border: "1.5px solid #69f0ae", color: "#69f0ae", fontWeight: 800, fontSize: 24, padding: "8px 22px", borderRadius: 999 }}>Groep 6-8 · Doorstroomtoets</div>
        <div id="vraag" style={{ color: "#fff", fontWeight: 900, fontSize: 46, textAlign: "center", lineHeight: 1.15, textShadow: "0 3px 14px rgba(0,0,0,.6)", maxWidth: 940 }}>In welk werelddeel ligt Egypte? 🌍</div>
        <div id="antwoord" style={{ display: "none", color: "#ffe08a", fontWeight: 900, fontSize: 56, textShadow: "0 3px 14px rgba(0,0,0,.6)" }}>Afrika! 🎉</div>
      </div>
      <div style={{ position: "absolute", bottom: 28, left: 0, right: 0, zIndex: 5, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, pointerEvents: "none" }}>
        <img src="/logo.jpg" alt="" style={{ width: 64, height: 64, borderRadius: 16, boxShadow: "0 4px 14px rgba(0,0,0,.4)" }} />
        <div style={{ color: "#cdd6e5", fontWeight: 800, fontSize: 30 }}>leerkwartier.app <span style={{ color: "#69f0ae" }}>· gratis oefenen</span></div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Pagina />);
