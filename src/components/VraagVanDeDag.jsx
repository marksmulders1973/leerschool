import { useState } from "react";
import { getSocialVraag, vraagVanVandaagId } from "../socialVragen.js";
import { track } from "../utils.js";
import DeelVraagKnop from "./DeelVraagKnop.jsx";

// "Doorstroomtoets-vraag van de dag" — een dagelijkse, lichte reden om de app te
// openen, ook zonder een heel leerpad te doen. Hergebruikt de /v/-vragenpool
// (geen extra kosten/AI). Elke dag dezelfde vraag voor iedereen (deterministisch
// op dagindex), inline te beantwoorden mét uitleg op 3 niveaus. Voedt de
// kwartier-gewoonte + het Doorstroomtoets-koning-doel (Mark 2026-06-05).

const GROEN = "#00C853";
const GROEN_LICHT = "#69f0ae";
const LETTERS = ["A", "B", "C", "D", "E", "F"];

function renderTekst(s) {
  if (!s) return null;
  return String(s).split(/(\*\*[^*]+\*\*)/g).map((deel, i) =>
    deel.startsWith("**") && deel.endsWith("**")
      ? <strong key={i} style={{ color: "#fff" }}>{deel.slice(2, -2)}</strong>
      : <span key={i}>{deel}</span>
  );
}

function _dagKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Deterministische dag-index zodat iedereen op dezelfde dag dezelfde vraag ziet
// (en het rouleert per dag door de pool). getSocialVraag levert de opties in
// de vaste, per-id geschudde volgorde (altijd-A-fix) — zelfde volgorde als /v/<id>.
function _vraagVanVandaag() {
  return getSocialVraag(vraagVanVandaagId());
}

export default function VraagVanDeDag() {
  const vraag = _vraagVanVandaag();
  const dagKey = `lk_vraag_vd_dag_${_dagKey()}`;
  const [gekozen, setGekozen] = useState(() => {
    try {
      const v = localStorage.getItem(dagKey);
      return v != null ? parseInt(v, 10) : null;
    } catch { return null; }
  });
  const [niveau, setNiveau] = useState("basis");

  if (!vraag) return null;

  const beantwoord = gekozen != null;
  const isGoed = beantwoord && gekozen === vraag.answer;

  const kies = (i) => {
    if (gekozen != null) return;
    setGekozen(i);
    try { localStorage.setItem(dagKey, String(i)); } catch {}
    track("vraag_vd_dag_answered", { id: vraag.id, goed: i === vraag.answer });
  };

  const niveaus = vraag.uitlegPad?.niveaus || {};
  const NIV = [
    { key: "basis", label: "Basis", t: niveaus.basis },
    { key: "simpeler", label: "Simpeler", t: niveaus.simpeler },
    { key: "nogSimpeler", label: "Nog simpeler", t: niveaus.nogSimpeler },
  ].filter((n) => n.t);

  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(0,200,83,0.10), rgba(0,200,83,0.03))",
      border: "1.5px solid rgba(0,200,83,0.30)", borderRadius: 16, padding: "16px 18px",
      fontFamily: "var(--font-body, sans-serif)",
    }}>
      <div style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 800, fontSize: 15, color: GROEN_LICHT, marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
        🎯 Doorstroomtoets-vraag van de dag
      </div>

      <div style={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.4, color: "rgba(255,255,255,0.95)", marginBottom: 12 }}>
        {renderTekst(vraag.vraag)}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {vraag.options.map((o, i) => {
          const onthul = beantwoord;
          let bg = "rgba(255,255,255,0.05)", border = "1px solid rgba(255,255,255,0.14)", kleur = "rgba(255,255,255,0.92)";
          if (onthul && i === vraag.answer) { bg = "rgba(0,200,83,0.16)"; border = `1.5px solid ${GROEN}`; kleur = GROEN_LICHT; }
          else if (onthul && i === gekozen) { bg = "rgba(255,82,82,0.14)"; border = "1.5px solid #ff5252"; kleur = "#ff8a80"; }
          return (
            <button key={i} type="button" onClick={() => kies(i)} disabled={beantwoord}
              style={{
                display: "flex", alignItems: "center", gap: 10, textAlign: "left", padding: "11px 13px",
                borderRadius: 11, background: bg, border, color: kleur, fontSize: 14.5, fontWeight: 700,
                cursor: beantwoord ? "default" : "pointer", minHeight: 46,
              }}>
              <span style={{
                flexShrink: 0, width: 23, height: 23, borderRadius: "50%",
                background: onthul && i === vraag.answer ? GROEN : (onthul && i === gekozen ? "#ff5252" : "rgba(255,255,255,0.12)"),
                color: "#0b1a2e", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800,
              }}>{LETTERS[i]}</span>
              <span style={{ flex: 1 }}>{o}</span>
              {onthul && i === vraag.answer && <span aria-hidden="true">✓</span>}
              {onthul && i === gekozen && i !== vraag.answer && <span aria-hidden="true">✗</span>}
            </button>
          );
        })}
      </div>

      {beantwoord && (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 13.5, color: isGoed ? GROEN_LICHT : "#ffcc80", marginBottom: 10 }}>
            {isGoed ? "🎉 Goed! En zo leg je het uit voor wie twijfelt:" : `💭 ${vraag.wrongHints?.[gekozen] || "Bijna! Kijk hieronder hoe het zit."}`}
          </div>
          {NIV.length > 0 && (
            <>
              <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
                {NIV.map((n) => (
                  <button key={n.key} type="button" onClick={() => setNiveau(n.key)}
                    style={{
                      padding: "4px 11px", borderRadius: 999,
                      border: niveau === n.key ? `1.5px solid ${GROEN}` : "1px solid rgba(255,255,255,0.16)",
                      background: niveau === n.key ? "rgba(0,200,83,0.15)" : "rgba(255,255,255,0.04)",
                      color: niveau === n.key ? GROEN_LICHT : "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 700, cursor: "pointer",
                    }}>{n.label}</button>
                ))}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.92)", background: "rgba(0,0,0,0.18)", borderRadius: 10, padding: "11px 13px", borderLeft: `3px solid ${GROEN}` }}>
                {NIV.find((n) => n.key === niveau)?.t}
              </div>
            </>
          )}
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", marginTop: 10, marginBottom: 10 }}>
            ✅ Klaar voor vandaag — morgen staat er een nieuwe vraag klaar.
          </div>
          {/* Mond-tot-mond: laat ouders de vraag van vandaag doorsturen. */}
          <DeelVraagKnop id={vraag.id} />
        </div>
      )}
    </div>
  );
}
