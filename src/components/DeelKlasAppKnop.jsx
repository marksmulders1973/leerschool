import { useState } from "react";
import { track, getMyRefCode } from "../utils.js";

// 📲 "Stuur door naar de klas-app" (groeiplan punt 4, Mark 21 okt 2026).
// Elke klas heeft een ouder-groepsapp; één tip van een ouder daar bereikt 25+
// gezinnen. Tot nu toe was er alleen een kale vriendenlink (60 dgn: 0 bezoeken);
// wat wél gedeeld wordt is de dagvraag-uitslag (26 apparaten) — één tik met een
// kant-en-klaar bericht. Dit is datzelfde patroon voor ouders.
//
// Alleen op volwassen-schermen (ouder-dashboard, kwartiercheck-uitslag); nooit in
// kinderschermen (STOPLIST: geen werf-druk op kinderen).
// Meting: event klasapp_gedeeld {plek, via}; bezoekers komen binnen met
// utm_source=klas-app&utm_campaign=<plek> en de eigen ref-code (vrienden-attributie).

export function klasAppBericht(plek) {
  const url = `https://leerkwartier.app/?ref=${getMyRefCode()}&utm_source=klas-app&utm_campaign=${encodeURIComponent(plek)}`;
  const tekst = "Tip voor ouders uit de klas: Leerkwartier is een gratis oefen-app voor groep 3 t/m 8. "
    + "Een kwartier per dag rekenen, taal en lezen, met uitleg als het fout gaat. Geen account, geen reclame.";
  return { tekst, url };
}

export default function DeelKlasAppKnop({ plek, compact = false }) {
  const [gekopieerd, setGekopieerd] = useState(false);

  const deel = async () => {
    const { tekst, url } = klasAppBericht(plek);
    const heeftNative = typeof navigator !== "undefined" && typeof navigator.share === "function";
    track("klasapp_gedeeld", { plek, via: heeftNative ? "native" : "whatsapp" });
    if (heeftNative) {
      try { await navigator.share({ title: "Leerkwartier", text: tekst, url }); return; }
      catch { /* geannuleerd of niet ondersteund → WhatsApp */ }
    }
    try { window.open(`https://wa.me/?text=${encodeURIComponent(`${tekst} ${url}`)}`, "_blank", "noopener"); } catch { /* */ }
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(`${tekst} ${url}`);
        setGekopieerd(true);
        setTimeout(() => setGekopieerd(false), 2000);
      }
    } catch { /* */ }
  };

  return (
    <div style={{ margin: compact ? "12px 0" : "18px auto", maxWidth: 560, padding: compact ? "12px 14px" : "14px 16px", borderRadius: 14, background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.35)", color: "#fff", fontFamily: "var(--font-body, system-ui)" }}>
      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>📲 Tip voor de klas-app</div>
      <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.75)", marginBottom: 10, lineHeight: 1.5 }}>
        Heb je iets aan Leerkwartier? Andere ouders uit de klas misschien ook. Eén tik en er staat een kort berichtje klaar voor de groepsapp.
      </div>
      <button type="button" onClick={deel}
        style={{ background: "#25D366", color: "#062b14", border: "none", borderRadius: 10, padding: "10px 16px", fontWeight: 800, fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>
        {gekopieerd ? "Bericht gekopieerd ✓" : "Stuur door naar de klas-app"}
      </button>
    </div>
  );
}
