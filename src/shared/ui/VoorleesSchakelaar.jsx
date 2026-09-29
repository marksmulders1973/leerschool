// Aan/uit voor de "alles voorlezen"-stand (zie shared/voorleesModus.js). Groot en met een
// plaatje van een oor/luidspreker, zodat ook een kind dat niet leest (of de juf) hem vindt.
// Bij aanzetten zegt de app meteen wat er gebeurt — dan weet je dat het geluid werkt.
import { useVoorleesAltijd, zetVoorleesAltijd, zeg, stopZeggen } from "../voorleesModus.js";

export default function VoorleesSchakelaar({ licht = false, compact = false }) {
  const aan = useVoorleesAltijd();
  const kan = typeof window !== "undefined" && !!window.speechSynthesis;
  if (!kan) return null;
  const wissel = () => {
    const nieuw = !aan;
    zetVoorleesAltijd(nieuw);
    if (nieuw) zeg("Ik lees alles voor. Tik op de luidspreker om een woord nog eens te horen.");
    else stopZeggen();
  };
  const kleur = licht
    ? { bg: aan ? "#e7f6ec" : "#ffffff", rand: aan ? "#2e9d57" : "#c9d3e0", tekst: "#0f2a44", zacht: "#4a5a6a" }
    : { bg: aan ? "rgba(46,157,87,0.22)" : "rgba(255,255,255,0.06)", rand: aan ? "#3ecf7a" : "rgba(255,255,255,0.25)", tekst: "var(--color-text)", zacht: "var(--color-text-muted)" };
  return (
    <button
      type="button"
      onClick={wissel}
      aria-pressed={aan}
      style={{
        display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left", cursor: "pointer",
        padding: compact ? "8px 12px" : "12px 14px", borderRadius: 14, fontFamily: "inherit",
        background: kleur.bg, border: `2px solid ${kleur.rand}`, color: kleur.tekst,
      }}
    >
      <svg width={compact ? 28 : 36} height={compact ? 28 : 36} viewBox="0 0 24 24" aria-hidden="true" fill="none"
        stroke={aan ? "#2e9d57" : kleur.zacht} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill={aan ? "#2e9d57" : kleur.zacht} />
        <path d="M15.5 9a4 4 0 0 1 0 6" />
        <path d="M18.5 6.5a7.5 7.5 0 0 1 0 11" />
      </svg>
      <span style={{ flex: 1 }}>
        <span style={{ display: "block", fontWeight: 800, fontSize: compact ? 14 : 16 }}>
          {aan ? "Alles wordt voorgelezen" : "Ik kan nog niet (goed) lezen"}
        </span>
        {!compact && (
          <span style={{ display: "block", fontSize: 13, color: kleur.zacht, marginTop: 2 }}>
            {aan ? "Elke vraag klinkt vanzelf, en naast elk antwoord zit een luisterknop. Tik om uit te zetten." : "Tik hier: dan leest de app elke vraag en elk antwoord voor."}
          </span>
        )}
      </span>
      <span aria-hidden="true" style={{ width: 44, height: 26, borderRadius: 13, flexShrink: 0, position: "relative", background: aan ? "#2e9d57" : "rgba(128,128,128,0.45)" }}>
        <span style={{ position: "absolute", top: 3, left: aan ? 21 : 3, width: 20, height: 20, borderRadius: "50%", background: "#fff", transition: "left .15s" }} />
      </span>
    </button>
  );
}
