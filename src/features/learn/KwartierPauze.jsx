// Kwartier-pauze: prompt na 15 min die de gebruiker even uitnodigt te
// pauzeren of door te gaan. Sluit aan op Leerkwartier-belofte (15 min/dag).
//
// Niveau 1 (Mark 2026-05-14): pauze-prompt zonder game-koppeling.
// Resume-positie wordt opgeslagen zodat de leerling de volgende sessie
// exact daar verder kan.

import { useState, useEffect, useRef } from "react";

const KWARTIER_MS = 15 * 60 * 1000;
const SNOOZE_MS = 5 * 60 * 1000;

// Resume-positie in localStorage onder per-speler key.
function resumeKey(player) {
  return `leerkwartier:resume:${(player || "Speler").trim() || "Speler"}`;
}

export function saveResume(player, pathId, stepIdx) {
  try {
    localStorage.setItem(resumeKey(player), JSON.stringify({
      pathId, stepIdx,
      ts: Date.now(),
    }));
  } catch {}
}

export function loadResume(player) {
  try {
    const raw = localStorage.getItem(resumeKey(player));
    if (!raw) return null;
    const obj = JSON.parse(raw);
    // Resume verloopt na 7 dagen (anders blijft hij eindeloos staan).
    if (Date.now() - (obj.ts || 0) > 7 * 24 * 60 * 60 * 1000) return null;
    return obj;
  } catch {
    return null;
  }
}

export function clearResume(player) {
  try {
    localStorage.removeItem(resumeKey(player));
  } catch {}
}

export default function KwartierPauze({ player, pathId, stepIdx, onStopForToday, onContinue }) {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false); // user koos 'Door' = nooit meer deze sessie
  const startRef = useRef(Date.now());
  const snoozeRef = useRef(null);

  useEffect(() => {
    if (hidden) return undefined;
    const check = () => {
      const elapsed = Date.now() - startRef.current;
      const snoozeOk = snoozeRef.current ? Date.now() >= snoozeRef.current : true;
      if (elapsed >= KWARTIER_MS && snoozeOk) {
        setShow(true);
      }
    };
    const id = setInterval(check, 30 * 1000); // elke 30s checken
    return () => clearInterval(id);
  }, [hidden]);

  if (!show) return null;

  const handleStop = () => {
    saveResume(player, pathId, stepIdx);
    setShow(false);
    if (onStopForToday) onStopForToday();
  };
  const handleSnooze = () => {
    snoozeRef.current = Date.now() + SNOOZE_MS;
    setShow(false);
  };
  const handleContinue = () => {
    setHidden(true);
    setShow(false);
    if (onContinue) onContinue();
  };

  return (
    <div
      role="dialog"
      aria-label="Kwartier gehaald"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        zIndex: 9000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1a2744, #0f1729)",
          border: "1px solid rgba(0,200,83,0.40)",
          borderRadius: 16,
          maxWidth: 420,
          width: "100%",
          padding: "24px 24px 20px",
          color: "#e0e6f0",
          fontFamily: "var(--font-body)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <div style={{ fontSize: 38, lineHeight: 1, marginBottom: 8 }}>🎉</div>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          fontWeight: 800,
          color: "#00e676",
          margin: "0 0 6px",
        }}>
          Kwartier gehaald!
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.5, margin: "0 0 18px", color: "#cdd6e2" }}>
          Je hebt 15 minuten geleerd. Pauze of doorgaan?
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <button
            type="button"
            onClick={handleStop}
            style={{
              padding: "11px 14px",
              borderRadius: 10,
              border: "1px solid rgba(0,200,83,0.45)",
              background: "rgba(0,200,83,0.18)",
              color: "#00e676",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            ✋ Stop voor vandaag
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>
              Morgen ga je verder waar je nu bent.
            </div>
          </button>
          <button
            type="button"
            onClick={handleSnooze}
            style={{
              padding: "11px 14px",
              borderRadius: 10,
              border: "1px solid rgba(255,213,79,0.40)",
              background: "rgba(255,213,79,0.12)",
              color: "#ffd54f",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            ⏸️ 5 min later weer
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>
              Pauze van 5 min, daarna deze prompt weer.
            </div>
          </button>
          <button
            type="button"
            onClick={handleContinue}
            style={{
              padding: "11px 14px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "transparent",
              color: "#cdd6e2",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            ▶️ Door, ik heb zin in meer
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>
              Ik vraag het niet meer deze sessie.
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
