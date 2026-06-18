// KlikbarePlaat — generieke interactieve biologie-plaat: tik op een onderdeel in
// de SVG (of op een chip) → het onderdeel licht op en de uitleg verschijnt.
// Data-gedreven via src/data/bioPlaten.jsx, zodat oog/hart/etc. er later inpluggen.
import React, { useEffect, useState } from "react";
import { track } from "../../../utils.js";

const FONT = "'Fredoka', system-ui, sans-serif";

// ── De interactieve plaat zelf (zonder pagina-chrome — herbruikbaar in leerpaden) ──
export function KlikbarePlaat({ plaat }) {
  const [actief, setActief] = useState(null);
  const huidig = plaat.onderdelen.find((o) => o.id === actief) || null;
  const kies = (id) => { setActief(id); track("bioplaat_onderdeel", { plaat: plaat.id, onderdeel: id }); };

  return (
    <div style={{ width: "100%", maxWidth: 520, fontFamily: FONT }}>
      <svg
        viewBox={plaat.viewBox}
        style={{
          width: "100%", height: "auto", display: "block",
          background: "radial-gradient(circle at 50% 45%, #0d2640 0%, #07111d 100%)",
          borderRadius: 18, border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)",
        }}
      >
        {plaat.onderdelen.map((o) => (
          <g
            key={o.id}
            onClick={() => kies(o.id)}
            style={{
              cursor: "pointer",
              opacity: actief && actief !== o.id ? 0.35 : 1,
              filter: actief === o.id ? "drop-shadow(0 0 7px #ffd54f)" : "none",
              transition: "opacity 0.18s ease",
            }}
          >
            {o.el}
          </g>
        ))}
      </svg>

      {/* Klikbare chips — maken duidelijk wat er allemaal aan te klikken is */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 12, justifyContent: "center" }}>
        {plaat.onderdelen.map((o) => (
          <button
            key={o.id}
            onClick={() => kies(o.id)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "6px 11px", borderRadius: 999, cursor: "pointer",
              border: `2px solid ${actief === o.id ? o.kleur : "rgba(255,255,255,0.18)"}`,
              background: actief === o.id ? o.kleur : "rgba(255,255,255,0.05)",
              color: actief === o.id ? "#fff" : "#cfe0f0",
              fontFamily: FONT, fontSize: 13.5, fontWeight: 700,
            }}
          >
            <span style={{ width: 9, height: 9, borderRadius: 9, background: o.kleur, display: "inline-block", boxShadow: "0 0 0 2px rgba(255,255,255,0.25)" }} />
            {o.label}
          </button>
        ))}
      </div>

      {/* Uitleg-paneel */}
      <div
        style={{
          marginTop: 12, minHeight: 78, borderRadius: 14, padding: "14px 16px",
          background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        {huidig ? (
          <>
            <div style={{ fontSize: 16, fontWeight: 800, color: huidig.kleur, marginBottom: 4 }}>{huidig.label}</div>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "#dce6f2" }}>{huidig.uitleg}</p>
          </>
        ) : (
          <p style={{ margin: 0, fontSize: 14.5, color: "#9fc0e0" }}>👆 Tik op een onderdeel in de plaat (of op een knop) om te zien wat het doet.</p>
        )}
      </div>
    </div>
  );
}

// ── Mini-zelftest onder de plaat ──
function Zelftest({ vragen, plaatId }) {
  const [i, setI] = useState(0);
  const [gekozen, setGekozen] = useState(null);
  if (!vragen || !vragen.length) return null;
  const v = vragen[i];
  const klaar = i >= vragen.length;

  const kies = (idx) => {
    if (gekozen !== null) return;
    setGekozen(idx);
    track("bioplaat_vraag", { plaat: plaatId, goed: idx === v.antwoord });
    setTimeout(() => { setGekozen(null); setI((x) => x + 1); }, 1700);
  };

  return (
    <div style={{ width: "100%", maxWidth: 520, marginTop: 26, fontFamily: FONT }}>
      <div style={{ fontSize: 15, fontWeight: 800, color: "#ffd54f", marginBottom: 10 }}>🧪 Test jezelf</div>
      {klaar ? (
        <div style={{ background: "rgba(0,200,83,0.10)", border: "1.5px solid #00c853", borderRadius: 14, padding: "16px 18px", color: "#69f0ae", fontWeight: 700 }}>
          🎉 Alle vragen gehad! Tik hierboven nog eens op de onderdelen om het te onthouden.
        </div>
      ) : (
        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "16px 18px" }}>
          <div style={{ fontSize: 13, color: "#9fc0e0", marginBottom: 6 }}>Vraag {i + 1} / {vragen.length}</div>
          <div style={{ fontSize: 16.5, fontWeight: 700, color: "#fff", marginBottom: 12, lineHeight: 1.4 }}>{v.vraag}</div>
          <div style={{ display: "grid", gap: 9 }}>
            {v.opties.map((opt, idx) => {
              let bg = "rgba(255,255,255,0.05)", rand = "rgba(255,255,255,0.16)", kleur = "#eaf2fb";
              if (gekozen !== null && idx === v.antwoord) { bg = "rgba(0,200,83,0.22)"; rand = "#00c853"; kleur = "#69f0ae"; }
              else if (gekozen === idx) { bg = "rgba(255,80,80,0.18)"; rand = "#ff8a8a"; kleur = "#ff8a8a"; }
              return (
                <button key={idx} onClick={() => kies(idx)} disabled={gekozen !== null}
                  style={{ textAlign: "left", padding: "11px 14px", borderRadius: 11, border: `2px solid ${rand}`, background: bg, color: kleur, fontFamily: FONT, fontSize: 15, fontWeight: 600, cursor: gekozen === null ? "pointer" : "default" }}>
                  {opt}
                </button>
              );
            })}
          </div>
          {gekozen !== null && (
            <p style={{ margin: "10px 0 0", fontSize: 13.5, color: "#cfe0f0", lineHeight: 1.5 }}>
              {gekozen === v.antwoord ? "✅ Goed! " : "❌ Net niet. "}{v.uitleg}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ── Volledige pagina (gebruikt door de directe ?cel-route) ──
export function BioPlaatPagina({ plaat }) {
  useEffect(() => { track("bioplaat_open", { plaat: plaat.id }); }, [plaat.id]);
  return (
    <div
      style={{
        minHeight: "100vh", boxSizing: "border-box", padding: "26px 16px 44px",
        display: "flex", flexDirection: "column", alignItems: "center", color: "#eaf2fb", fontFamily: FONT,
        background: "radial-gradient(1200px 700px at 50% -10%, #16365c 0%, #0b1f36 45%, #060d18 100%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 4 }}>
        <img src="/icons/icon-512.png" alt="Leerkwartier" width={42} height={42} style={{ borderRadius: 11 }} />
        <span style={{ fontSize: 27, fontWeight: 700 }}>Leerkwartier</span>
      </div>
      <h1 style={{ margin: "6px 0 2px", fontSize: 24, fontWeight: 800 }}>{plaat.titel}</h1>
      <p style={{ margin: "0 0 18px", fontSize: 14.5, color: "#9fc0e0" }}>{plaat.ondertitel}</p>

      <KlikbarePlaat plaat={plaat} />
      <Zelftest vragen={plaat.vragen} plaatId={plaat.id} />

      <p style={{ marginTop: 26, fontSize: 13, color: "#7fa3c8" }}>
        leerkwartier.app · interactief leren — tik, ontdek, begrijp
      </p>
    </div>
  );
}

export default KlikbarePlaat;
