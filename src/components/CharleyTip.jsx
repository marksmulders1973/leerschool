// 🐕 CharleyTip — één advies-bubbel van Charley (Mark 1 sep 2026).
// De aanroepende pagina bepaalt WANNEER (de twijfel-conditie); dit component
// regelt de vaste vorm + de anti-Clippy-mechanieken via charleyTips.js
// (sessie-cap, niet-meer-tonen, meting). Charley = de echte hond van de
// maker en hét gezicht van de app — daarom zijn foto, niet een emoji.

import { useEffect, useRef, useState } from "react";
import { kanTipTonen, markeerTipGetoond, tipGeklikt, tipWeggeklikt } from "../shared/charleyTips.js";

export default function CharleyTip({ id, tekst, actieLabel, onActie }) {
  const [weg, setWeg] = useState(false);
  const [mag] = useState(() => kanTipTonen(id));
  const gemeld = useRef(false);
  useEffect(() => {
    if (mag && !gemeld.current) { gemeld.current = true; markeerTipGetoond(id); }
  }, [mag, id]);
  if (!mag || weg) return null;

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", borderRadius: 14, border: "1px solid rgba(255,213,79,0.4)", background: "rgba(255,213,79,0.07)", padding: "11px 13px", margin: "10px 0" }}>
      <img src="/maatjes/charley-echt.jpg" alt="Charley" width={38} height={38} style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,213,79,0.6)", flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 800, color: "#ffd54f", marginBottom: 2 }}>🐕 Tip van Charley</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{tekst}</div>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 7, flexWrap: "wrap" }}>
          {actieLabel && onActie && (
            <button onClick={() => { tipGeklikt(id); onActie(); }} style={{ border: "1px solid rgba(255,213,79,0.55)", background: "rgba(255,213,79,0.14)", color: "#ffd54f", borderRadius: 999, padding: "5px 12px", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700 }}>
              {actieLabel}
            </button>
          )}
          <button onClick={() => { tipWeggeklikt(id, true); setWeg(true); }} style={{ border: "none", background: "none", color: "rgba(255,255,255,0.35)", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 11 }}>
            niet meer tonen
          </button>
        </div>
      </div>
      <button onClick={() => { tipWeggeklikt(id, false); setWeg(true); }} aria-label="Tip sluiten" style={{ border: "none", background: "none", color: "rgba(255,255,255,0.35)", cursor: "pointer", fontSize: 15, padding: 2, flexShrink: 0 }}>×</button>
    </div>
  );
}
