// ============================================================================
// Mini3DTeaser — homepage-teaser voor nieuwe bezoekers. Compacte 3D-kubus
// met slider voor de zijde + live z³-formule + CTA naar Ruimtemeetkunde.
// Bedoeld om in <1 second visueel te tonen wat Leerkwartier kan, en de bezoeker
// uit te nodigen om door te klikken.
//
// Tap op het ⛶-icoontje (rechtsboven) opent een fullscreen overlay met dezelfde
// inhoud maar groter — handig op kleine schermen waar de kubus in een hero-tegel
// alleen ~280px breed is.
//
// Lazy-geladen vanuit HomePage.jsx zodat three.js niet in de main-bundle zit.
// ============================================================================

import { useEffect, useState } from "react";
import Shape3D from "./Shape3D.jsx";

function TeaserBody({ z, setZ, onCTA, height, cameraDistanceFactor }) {
  return (
    <>
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: 13,
        fontWeight: 700,
        color: "#ffd54f",
        textAlign: "center",
        marginBottom: 4,
        letterSpacing: 0.3,
      }}>
        ✨ Probeer: hoe groot wordt een kubus?
      </div>
      <div style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: 6,
        marginBottom: 8,
      }}>
        <Shape3D
          shape="kubus"
          dimensions={{ zijde: z }}
          labels={[]}
          height={height}
          cameraDistanceFactor={cameraDistanceFactor}
          cameraReferenceDim={6}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
        <label style={{ fontSize: 12, color: "rgba(224,230,240,0.75)", fontWeight: 600, minWidth: 70 }}>
          zijde z: <span style={{ color: "#ffd54f" }}>{z}</span>
        </label>
        <input
          type="range"
          min={1} max={6} step={1}
          value={z}
          onChange={(e) => setZ(Number(e.target.value))}
          style={{ flex: 1, accentColor: "#ffd54f" }}
        />
      </div>
      <p style={{
        textAlign: "center",
        fontSize: 13,
        color: "rgba(224,230,240,0.85)",
        margin: "4px 0 10px",
        fontFamily: "var(--font-body)",
      }}>
        z³ = {z} × {z} × {z} = <strong style={{ color: "#ffd54f", fontSize: 15 }}>{z ** 3} cm³</strong>
      </p>
      {onCTA && (
        <button
          onClick={onCTA}
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 12,
            border: "none",
            background: "linear-gradient(135deg, #00c853, #69f0ae)",
            color: "#0d1b2e",
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,200,83,0.35)",
          }}
        >
          Probeer dit zelf in een leerpad →
        </button>
      )}
    </>
  );
}

export default function Mini3DTeaser({ onCTA }) {
  const [z, setZ] = useState(4);
  const [expanded, setExpanded] = useState(false);

  // ESC sluit overlay; lock body-scroll terwijl open
  useEffect(() => {
    if (!expanded) return undefined;
    const onKey = (e) => { if (e.key === "Escape") setExpanded(false); };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [expanded]);

  return (
    <>
      <div style={{
        width: "100%",
        height: "100%",
        margin: 0,
        background: "linear-gradient(135deg, rgba(239,159,39,0.10), rgba(255,213,79,0.06))",
        border: "1px solid rgba(255,213,79,0.30)",
        borderRadius: 16,
        padding: "10px 12px 12px",
        boxShadow: "0 4px 20px rgba(255,213,79,0.10)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}>
        <button
          type="button"
          onClick={() => setExpanded(true)}
          aria-label="Vergroot 3D-kubus"
          title="Vergroten"
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            width: 28,
            height: 28,
            borderRadius: 8,
            border: "1px solid rgba(255,213,79,0.30)",
            background: "rgba(0,0,0,0.30)",
            color: "#ffd54f",
            fontSize: 14,
            lineHeight: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          ⛶
        </button>
        <TeaserBody z={z} setZ={setZ} onCTA={onCTA} height={140} cameraDistanceFactor={4.2} />
      </div>

      {expanded && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setExpanded(false); }}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.78)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            animation: "lk-fade-in 0.18s ease-out",
          }}
          role="dialog"
          aria-modal="true"
        >
          <style>{`@keyframes lk-fade-in { from { opacity: 0; } to { opacity: 1; } }`}</style>
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: 560,
            background: "linear-gradient(135deg, #1a2238, #0f1626)",
            border: "1px solid rgba(255,213,79,0.40)",
            borderRadius: 18,
            padding: "16px 18px 18px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              aria-label="Sluiten"
              style={{
                position: "absolute",
                top: 8,
                right: 10,
                width: 32,
                height: 32,
                borderRadius: 999,
                border: "none",
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.85)",
                fontSize: 22,
                lineHeight: 1,
                cursor: "pointer",
                zIndex: 2,
              }}
            >
              ×
            </button>
            <TeaserBody
              z={z}
              setZ={setZ}
              onCTA={onCTA ? () => { setExpanded(false); onCTA(); } : undefined}
              height={Math.min(360, Math.round((typeof window !== "undefined" ? window.innerHeight : 600) * 0.45))}
              cameraDistanceFactor={3.2}
            />
          </div>
        </div>
      )}
    </>
  );
}
