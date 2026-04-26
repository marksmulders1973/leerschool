import { useEffect, useState } from "react";

export default function UpdateBanner() {
  const [zichtbaar, setZichtbaar] = useState(false);
  const [verwerken, setVerwerken] = useState(false);

  useEffect(() => {
    const onUpdate = () => setZichtbaar(true);
    window.addEventListener("studiebol:update-available", onUpdate);
    return () => window.removeEventListener("studiebol:update-available", onUpdate);
  }, []);

  const vernieuw = () => {
    if (verwerken) return;
    setVerwerken(true);
    const sw = window.__pendingSw;
    if (sw && typeof sw.postMessage === "function") {
      sw.postMessage({ type: "SKIP_WAITING" });
      // De SW activeert -> controllerchange listener in index.html doet reload
      // Fallback: na 2.5 sec sowieso reloaden
      setTimeout(() => window.location.reload(), 2500);
    } else {
      window.location.reload();
    }
  };

  if (!zichtbaar) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100000,
      background: "linear-gradient(135deg, #00c853, #69f0ae)",
      color: "#0d1b2e",
      padding: "10px 14px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 10, boxShadow: "0 4px 16px rgba(0,200,83,0.4)",
      fontFamily: "'Fredoka', sans-serif",
      animation: "slideDown 0.3s ease-out",
    }}>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: 18 }}>🔄</span>
        <div style={{ minWidth: 0, overflow: "hidden" }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>Nieuwe versie beschikbaar</div>
          <div style={{ fontSize: 12, opacity: 0.75, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Tik vernieuwen voor de laatste functies
          </div>
        </div>
      </div>
      <button onClick={vernieuw} disabled={verwerken} style={{
        padding: "8px 16px", borderRadius: 10, border: "none",
        background: verwerken ? "rgba(13,27,46,0.4)" : "#0d1b2e",
        color: "#69f0ae", fontFamily: "'Fredoka', sans-serif",
        fontSize: 14, fontWeight: 700, cursor: verwerken ? "default" : "pointer",
        whiteSpace: "nowrap"
      }}>
        {verwerken ? "Vernieuwen…" : "Vernieuw"}
      </button>
    </div>
  );
}
