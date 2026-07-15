// VoorleesBlok (Mark 15 jul): zet een "🔊 Lees voor"-knop boven een stuk
// tekst. Tijdens het voorlezen wordt de tekst karaoke-stijl weergegeven
// (MeeleesTekst): het woord dat de stem uitspreekt licht op. Bedoeld voor
// uitleg-stappen en leesteksten — extra steun voor zwakkere lezers.
// Geen browser-stem beschikbaar? Dan alleen de gewone tekst, geen knop.
import { useEffect, useState } from "react";
import { maakMeeleesPlan, koppelMeelezen } from "../spraakTekst.js";
import MeeleesTekst from "./MeeleesTekst.jsx";

export default function VoorleesBlok({ tekst, accent = "#00C853", children }) {
  const [leest, setLeest] = useState(false);
  const [woord, setWoord] = useState(-1);
  const kan = typeof window !== "undefined" && !!window.speechSynthesis;

  const stop = () => {
    try { window.speechSynthesis?.cancel(); } catch { /* */ }
    setLeest(false);
    setWoord(-1);
  };

  // Stoppen bij weggaan of bij tekst-wissel (volgende stap/vraag).
  useEffect(() => stop, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { if (leest) stop(); }, [tekst]);

  const start = () => {
    try {
      const plan = maakMeeleesPlan(tekst);
      if (!plan.gesproken) return;
      const u = new SpeechSynthesisUtterance(plan.gesproken);
      u.lang = "nl-NL";
      const v = window.speechSynthesis.getVoices().find((x) => (x.lang || "").toLowerCase().startsWith("nl"));
      if (v) u.voice = v;
      u.rate = 0.95; // rustig voorleestempo — kind leest mee
      u.pitch = 1.05;
      koppelMeelezen(u, plan, setWoord);
      u.onend = stop;
      u.onerror = stop;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
      setLeest(true);
      setWoord(-1);
    } catch { stop(); }
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
      {leest
        ? <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}><MeeleesTekst tekst={tekst} actief={woord} accent={accent} /></div>
        : children}
    </div>
  );
}
