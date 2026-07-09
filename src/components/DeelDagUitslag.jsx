import { useState } from "react";
import { track, getMyRefCode } from "../utils.js";
import { BRAND } from "../brand.js";

// DeelDagUitslag — het "Wordle-blokje" (groei-masterplan top-2, 2026-07-09):
// na het beantwoorden van de Vraag van de dag een spoiler-vrij, kopieerbaar
// resultaat voor de groepsapp. De kracht zit in synchroniciteit: iedereen
// krijgt vandaag dezélfde vraag, dus "kun jij 'm?" is direct te checken via
// /vandaag. Verklapt niets: geen antwoordletter, alleen 🟩/🟨.
//
// Werkt voor pool- én actuele vragen (de link is altijd /vandaag, niet /v/<id>)
// en draagt de eigen ref-code mee voor de vrienden-werven-attributie.

const MAANDEN = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

function vandaagLabel() {
  const d = new Date();
  return `${d.getDate()} ${MAANDEN[d.getMonth()]}`;
}

export default function DeelDagUitslag({ goed, actueel = false }) {
  const [gekopieerd, setGekopieerd] = useState(false);

  const url = `https://${BRAND.domain}/vandaag?ref=${getMyRefCode()}&utm_source=dagvraag_share`;
  const kop = `🎓 Dagvraag ${vandaagLabel()}`;
  const uitslag = goed ? "🟩 In één keer goed!" : "🟨 Instinker! Maar nu snap ik 'm.";
  const uitdaging = goed ? "Kun jij 'm ook?" : "Kun jij 'm wél?";
  const tekst = `${kop}\n${uitslag}\n${uitdaging} 👉`;

  const deel = async () => {
    const heeftNative = typeof navigator !== "undefined" && typeof navigator.share === "function";
    track("dagvraag_uitslag_gedeeld", { goed: !!goed, actueel: !!actueel, via: heeftNative ? "native" : "fallback" });
    if (heeftNative) {
      try { await navigator.share({ title: BRAND.name, text: tekst, url }); return; }
      catch { /* geannuleerd of niet ondersteund → val terug */ }
    }
    try { window.open(`https://wa.me/?text=${encodeURIComponent(tekst + " " + url)}`, "_blank", "noopener"); } catch {}
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(`${tekst} ${url}`);
        setGekopieerd(true);
        setTimeout(() => setGekopieerd(false), 2000);
      }
    } catch {}
  };

  return (
    <div style={{ marginBottom: 10 }}>
      {/* Voorvertoning van wat er gedeeld wordt — zien = snappen (Wordle-les). */}
      <div style={{
        background: "rgba(0,0,0,0.22)", border: "1px dashed rgba(255,255,255,0.22)", borderRadius: 12,
        padding: "10px 13px", marginBottom: 8, fontSize: 13.5, lineHeight: 1.55,
        color: "rgba(255,255,255,0.85)", whiteSpace: "pre-line",
      }}>
        {tekst} <span style={{ color: "#69f0ae" }}>{BRAND.domain}/vandaag</span>
      </div>
      <button
        type="button"
        onClick={deel}
        style={{
          display: "block", width: "100%", padding: "12px 14px", borderRadius: 12, cursor: "pointer",
          border: "none", background: "linear-gradient(135deg, #00C853, #00a846)", color: "#fff",
          fontFamily: "var(--font-body, sans-serif)", fontSize: 15, fontWeight: 800,
        }}
      >
        {gekopieerd ? "✓ Gekopieerd — plak 'm in de groepsapp!" : "📲 Deel je resultaat in de groepsapp"}
      </button>
    </div>
  );
}
