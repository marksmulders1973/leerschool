// 🎮 Spelletje-keuzescherm (Brian, 23 sep 2026, papa akkoord): de onderbalk-knop
// "Spelletje" opent eerst dit scherm. Twee grote knoppen: 🐾 Park (= het
// bestaande 3D-park) en 🕵️ Imposter (Brian bouwt dit nog — knop doet nog niets
// behalve een berichtje). Stap 1 van Brians nieuwe spel.
import { useState } from "react";

export default function SpelletjeKeuze({ onPark, onHome }) {
  const [tikje, setTikje] = useState(false);
  const knop = {
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
    width: "min(44vw, 220px)", aspectRatio: "1 / 1", borderRadius: 28, border: "3px solid #1f2a44",
    fontFamily: "system-ui", fontWeight: 900, fontSize: "clamp(18px, 4.5vw, 26px)", color: "#fff",
    boxShadow: "0 8px 24px rgba(0,0,0,.25)", cursor: "pointer", transition: "transform .12s",
  };
  return (
    <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28, padding: "24px 16px 96px", background: "linear-gradient(180deg,#0f172a,#1e293b)", color: "#fff", fontFamily: "system-ui", textAlign: "center" }}>
      <div>
        <div style={{ fontSize: "clamp(26px, 6vw, 38px)", fontWeight: 900, letterSpacing: 0.5 }}>🎮 Spelletje</div>
        <div style={{ opacity: 0.8, marginTop: 6, fontWeight: 600 }}>Wat wil je spelen?</div>
      </div>
      <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center" }}>
        <button type="button" onClick={onPark} style={{ ...knop, background: "linear-gradient(135deg,#22c55e,#15803d)" }}
          onPointerDown={(e) => { e.currentTarget.style.transform = "scale(.96)"; }} onPointerUp={(e) => { e.currentTarget.style.transform = ""; }}>
          <span style={{ fontSize: "clamp(44px, 11vw, 64px)" }}>🐾</span>Park
        </button>
        <button type="button" aria-label="Imposter (nog niet klaar)"
          onClick={() => { setTikje(true); setTimeout(() => setTikje(false), 1600); }}
          style={{ ...knop, background: "linear-gradient(135deg,#ef4444,#7f1d1d)", transform: tikje ? "rotate(-3deg)" : "" }}>
          <span style={{ fontSize: "clamp(44px, 11vw, 64px)" }}>🕵️</span>Imposter
        </button>
      </div>
      <div style={{ minHeight: 24, fontWeight: 700, color: "#fca5a5" }}>{tikje ? "Nog niet klaar — Brian bouwt eraan! 🔧" : ""}</div>
      {onHome && <button type="button" onClick={onHome} style={{ background: "transparent", border: "2px solid rgba(255,255,255,.35)", color: "#fff", borderRadius: 999, padding: "8px 18px", fontWeight: 700, cursor: "pointer" }}>← Terug naar Home</button>}
    </div>
  );
}
