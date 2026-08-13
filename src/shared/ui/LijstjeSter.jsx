// ⭐ Ster-knop "bewaar voor later" op een leerpad-tegel. Ligt bovenop de
// klikbare kaart (span, geen button-in-button) en stopt de klik zodat het pad
// niet meteen opent. Vol lijstje → korte melding in plaats van stil falen.
import { useEffect, useState } from "react";
import { inLijstje, toggleLijstje, LIJSTJE_EVENT, LIJSTJE_MAX } from "../mijnLijstje.js";

export default function LijstjeSter({ speler, item, size = 20 }) {
  const [aan, setAan] = useState(() => inLijstje(speler, item.id));
  const [melding, setMelding] = useState("");

  useEffect(() => {
    const sync = () => setAan(inLijstje(speler, item.id));
    window.addEventListener(LIJSTJE_EVENT, sync);
    return () => window.removeEventListener(LIJSTJE_EVENT, sync);
  }, [speler, item.id]);

  const klik = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const r = toggleLijstje(speler, item);
    if (r.vol) {
      setMelding(`Je lijstje is vol (${LIJSTJE_MAX}) — maak eerst iets af! 😉`);
      setTimeout(() => setMelding(""), 2600);
      return;
    }
    setAan(r.opgeslagen);
  };

  return (
    <span style={{ position: "relative", display: "inline-flex", flexShrink: 0 }}>
      <span
        role="button"
        tabIndex={0}
        aria-pressed={aan}
        aria-label={aan ? "Van mijn lijstje halen" : "Bewaar voor later op mijn lijstje"}
        title={aan ? "Staat op je lijstje — tik om weg te halen" : "Bewaar voor later"}
        onClick={klik}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") klik(e); }}
        style={{
          fontSize: size, lineHeight: 1, cursor: "pointer", userSelect: "none",
          filter: aan ? "none" : "grayscale(1) opacity(0.45)",
          transition: "transform 0.15s, filter 0.15s",
          transform: aan ? "scale(1.12)" : "scale(1)",
          padding: 4,
        }}
      >
        ⭐
      </span>
      {melding && (
        <span style={{
          position: "absolute", right: 0, top: "100%", zIndex: 5, whiteSpace: "nowrap",
          background: "#243447", color: "#ffd54f", fontSize: 11.5, fontWeight: 700,
          borderRadius: 8, padding: "5px 9px", boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
        }}>
          {melding}
        </span>
      )}
    </span>
  );
}
