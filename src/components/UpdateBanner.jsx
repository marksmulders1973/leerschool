import { useEffect, useState } from "react";

// Banner bovenaan als de service-worker een nieuwe build heeft klaargezet.
// Tikt-vernieuwen → SKIP_WAITING + page-reload.

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
      setTimeout(() => window.location.reload(), 2500);
    } else {
      window.location.reload();
    }
  };

  if (!zichtbaar) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100000,
        background:
          "linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-primary-100))",
        color: "var(--color-bg-base)",
        padding: "var(--space-3) var(--space-4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-3)",
        boxShadow: "var(--shadow-glow-success)",
        fontFamily: "var(--font-display)",
        animation: "slideDown var(--motion-slow) var(--ease-out)",
      }}
    >
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: 18 }} aria-hidden="true">🔄</span>
        <div style={{ minWidth: 0, overflow: "hidden" }}>
          <div style={{ fontWeight: "var(--font-weight-bold)", fontSize: "var(--font-size-md)" }}>
            Nieuwe versie beschikbaar
          </div>
          <div
            style={{
              fontSize: "var(--font-size-xs)",
              opacity: 0.75,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Tik vernieuwen voor de laatste functies
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={vernieuw}
        disabled={verwerken}
        style={{
          padding: "var(--space-2) var(--space-4)",
          borderRadius: "var(--radius-sm)",
          border: "none",
          background: verwerken ? "rgba(11, 18, 36, 0.4)" : "var(--color-bg-base)",
          color: "var(--color-brand-primary-100)",
          fontFamily: "var(--font-display)",
          fontSize: "var(--font-size-md)",
          fontWeight: "var(--font-weight-bold)",
          cursor: verwerken ? "default" : "pointer",
          whiteSpace: "nowrap",
          minHeight: "var(--tap-target-min)",
        }}
      >
        {verwerken ? "Vernieuwen…" : "Vernieuw"}
      </button>
    </div>
  );
}
