// 🔊 Groot luisterknopje naast een antwoord of tegel (Mark 29 sep 2026: nieuwkomers die nog
// niet lezen moeten elk antwoord eerst kunnen HOREN voordat ze kiezen). Tikken zegt alleen de
// tekst — het kiest niets (stopPropagation), zodat hij ook binnen een klikbare knop kan staan.
import { useState } from "react";
import { zeg } from "../voorleesModus.js";

export default function LuisterKnop({ tekst, maat = 44, licht = false, label = null, style = {} }) {
  const [bezig, setBezig] = useState(false);
  if (typeof window === "undefined" || !window.speechSynthesis || !tekst) return null;
  const klik = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBezig(true);
    zeg(tekst, { onEnd: () => setBezig(false) });
  };
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={klik}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") klik(e); }}
      aria-label={label || `Luister: ${tekst}`}
      style={{
        width: maat, height: maat, minWidth: maat, borderRadius: "50%",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        fontSize: Math.round(maat * 0.5), lineHeight: 1, cursor: "pointer", flexShrink: 0,
        background: bezig ? "#ffd166" : licht ? "#eef4ff" : "rgba(255,255,255,0.12)",
        border: `2px solid ${bezig ? "#e0a800" : licht ? "#9db8e8" : "rgba(255,255,255,0.35)"}`,
        userSelect: "none",
        ...style,
      }}
    >
      {/* getekende luidspreker i.p.v. emoji (feedback_geen_emoticons_als_icoon) */}
      <svg width={Math.round(maat * 0.55)} height={Math.round(maat * 0.55)} viewBox="0 0 24 24" aria-hidden="true"
        fill="none" stroke={bezig ? "#3a2600" : licht ? "#1d3f7a" : "#ffffff"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill={bezig ? "#3a2600" : licht ? "#1d3f7a" : "#ffffff"} />
        <path d="M15.5 9a4 4 0 0 1 0 6" />
        <path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
      </svg>
    </span>
  );
}
