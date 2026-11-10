// 🎮 Spelletje-keuzescherm. De onderbalk-knop "Spelletje" opent dit scherm met twee grote knoppen:
// 🐾 Park (het 3D-park) en 🕵️ Bedrieger (woordspel op één telefoon, features/bedrieger).
// Geschiedenis: 23 sep 2026 gemaakt voor het bedriegerspel in het park, 27 okt weggehaald samen met
// dat spel, 10 nov 2026 terug op verzoek van Mark voor het nieuwe woordspel.
import { useEffect } from "react";
import { track } from "../utils.js";

export default function SpelletjeKeuze({ onPark, onBedrieger, onHome }) {
  // Meten hoeveel kinderen het scherm zien en wat ze kiezen.
  useEffect(() => { try { track("spelletje_keuze", { keuze: "open" }); } catch { /* */ } }, []);
  const kies = (keuze, fn) => { try { track("spelletje_keuze", { keuze }); } catch { /* */ } fn && fn(); };
  const knop = {
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8,
    width: "min(44vw, 220px)", aspectRatio: "1 / 1", borderRadius: 28, border: "3px solid #1f2a44",
    fontFamily: "system-ui", fontWeight: 900, fontSize: "clamp(18px, 4.5vw, 26px)", color: "#fff",
    boxShadow: "0 8px 24px rgba(0,0,0,.25)", cursor: "pointer", transition: "transform .12s", padding: 8,
  };
  const onder = { fontSize: "clamp(11px, 2.8vw, 14px)", fontWeight: 600, opacity: 0.9, lineHeight: 1.25 };
  const druk = {
    onPointerDown: (e) => { e.currentTarget.style.transform = "scale(.96)"; },
    onPointerUp: (e) => { e.currentTarget.style.transform = ""; },
    onPointerLeave: (e) => { e.currentTarget.style.transform = ""; },
  };
  return (
    <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28, padding: "24px 16px 96px", background: "linear-gradient(180deg,#0f172a,#1e293b)", color: "#fff", fontFamily: "system-ui", textAlign: "center" }}>
      <div>
        <div style={{ fontSize: "clamp(26px, 6vw, 38px)", fontWeight: 900, letterSpacing: 0.5 }}>🎮 Spelletje</div>
        <div style={{ opacity: 0.8, marginTop: 6, fontWeight: 600 }}>Wat wil je spelen?</div>
      </div>
      <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center" }}>
        <button type="button" onClick={() => kies("park", onPark)} style={{ ...knop, background: "linear-gradient(135deg,#22c55e,#15803d)" }} {...druk}>
          <span style={{ fontSize: "clamp(44px, 11vw, 64px)" }}>🐾</span>Park
          <span style={onder}>Bouwen in je eigen park</span>
        </button>
        <button type="button" onClick={() => kies("bedrieger", onBedrieger)} style={{ ...knop, background: "linear-gradient(135deg,#ef4444,#7f1d1d)" }} {...druk}>
          <span style={{ fontSize: "clamp(44px, 11vw, 64px)" }}>🕵️</span>Bedrieger
          <span style={onder}>Samen op één telefoon, vanaf 3 spelers</span>
        </button>
      </div>
      {onHome && <button type="button" onClick={onHome} style={{ background: "transparent", border: "2px solid rgba(255,255,255,.35)", color: "#fff", borderRadius: 999, padding: "8px 18px", fontWeight: 700, cursor: "pointer" }}>← Terug</button>}
    </div>
  );
}
