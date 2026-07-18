// VoorleesBlok (Mark 15 jul): zet een "🔊 Lees voor"-knop boven een stuk
// tekst. Tijdens het voorlezen wordt de tekst karaoke-stijl weergegeven
// (MeeleesTekst): het woord dat de stem uitspreekt licht op. Bedoeld voor
// uitleg-stappen en leesteksten — extra steun voor zwakkere lezers.
// Geen browser-stem beschikbaar? Dan alleen de gewone tekst, geen knop.
import { useEffect, useRef, useState } from "react";
import { spreekMetMeelezen } from "../spraakTekst.js";
import MeeleesTekst from "./MeeleesTekst.jsx";

export default function VoorleesBlok({ tekst, accent = "#00C853", children }) {
  const [leest, setLeest] = useState(false);
  const [woord, setWoord] = useState(-1);
  const [faalt, setFaalt] = useState(false); // speech-engine weigert (bv. browser zonder voorleesstem)
  const stopRef = useRef(null);
  const kan = typeof window !== "undefined" && !!window.speechSynthesis;

  const stop = () => {
    if (stopRef.current) { stopRef.current(); stopRef.current = null; }
    setLeest(false);
    setWoord(-1);
  };

  // Stoppen bij weggaan of bij tekst-wissel (volgende stap/vraag).
  useEffect(() => stop, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { if (leest) stop(); }, [tekst]);

  const start = () => {
    setLeest(true);
    setWoord(-1);
    setFaalt(false);
    stopRef.current = spreekMetMeelezen(tekst, {
      rate: 0.95, // rustig voorleestempo — kind leest mee
      pitch: 1.05,
      onWoord: setWoord,
      onEnd: (gelukt) => {
        stopRef.current = null; setLeest(false); setWoord(-1);
        if (gelukt === false) setFaalt(true);
      },
    });
  };

  if (!kan) return children ?? null;

  return (
    <div>
      <button
        type="button"
        onClick={() => (leest ? stop() : start())}
        aria-label={leest ? "Stop met voorlezen" : "Lees deze tekst voor"}
        style={{
          background: leest ? "rgba(226,75,74,0.12)" : "rgba(255,255,255,0.05)",
          border: `1px solid ${leest ? "rgba(226,75,74,0.45)" : "rgba(255,255,255,0.14)"}`,
          color: leest ? "#ff9a9a" : "rgba(230,235,245,0.85)",
          borderRadius: 999,
          padding: "5px 12px",
          fontSize: 12,
          fontWeight: 700,
          cursor: "pointer",
          marginBottom: 10,
          fontFamily: "var(--font-body)",
        }}
      >
        {leest ? "⏹ Stop" : "🔊 Lees voor"}
      </button>
      {faalt && !leest && (
        <div style={{ fontSize: 12, color: "rgba(230,235,245,0.65)", marginBottom: 10 }}>
          Voorlezen lukt niet op deze telefoon of browser. Probeer het in Chrome,
          of zet in de telefoon-instellingen een Nederlandse voorleesstem aan.
        </div>
      )}
      {leest
        ? <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}><MeeleesTekst tekst={tekst} actief={woord} accent={accent} /></div>
        : children}
    </div>
  );
}
