// ⭐ HubSter — zet een héle hub (bv. de printhoek of de examens) op je
// persoonlijke pagina (Mark 16 aug: "de printhub met een sterretje; als je die
// aanklikt komt de hele hub op je persoonlijke pagina — dat ook met examens").
//
// Anders dan LijstjeSter (klein grijs sterretje op een leerpad-tegel) is dit een
// duidelijke pil-knop bovenaan een hub. Hij hergebruikt hetzelfde "mijn lijstje"
// als de leerpad-sterren, maar bewaart óók een `page`-sleutel zodat Mijn pagina
// naar de hele hub kan navigeren i.p.v. naar één leerpad.
import { useEffect, useState } from "react";
import { inLijstje, toggleLijstje, LIJSTJE_EVENT, LIJSTJE_MAX } from "../mijnLijstje.js";

// Huidige spelernaam — zelfde bron (ls_user) als de rest van de app.
function huidigeSpeler() {
  try {
    const u = JSON.parse(localStorage.getItem("ls_user") || "{}");
    return (u.name || "").trim();
  } catch {
    return "";
  }
}

export default function HubSter({ id, titel, emoji = "⭐", page }) {
  const speler = huidigeSpeler();
  const [aan, setAan] = useState(() => inLijstje(speler, id));
  const [melding, setMelding] = useState("");

  useEffect(() => {
    const sync = () => setAan(inLijstje(speler, id));
    window.addEventListener(LIJSTJE_EVENT, sync);
    return () => window.removeEventListener(LIJSTJE_EVENT, sync);
  }, [speler, id]);

  const klik = () => {
    const r = toggleLijstje(speler, { id, titel, emoji, page });
    if (r.vol) {
      setMelding(`Je pagina zit vol (${LIJSTJE_MAX}) — haal er eerst eentje af.`);
      setTimeout(() => setMelding(""), 2800);
      return;
    }
    setAan(r.opgeslagen);
    setMelding(r.opgeslagen ? "✓ Toegevoegd aan je pagina" : "Van je pagina gehaald");
    setTimeout(() => setMelding(""), 2200);
  };

  return (
    <span style={{ position: "relative", display: "inline-flex", flexShrink: 0 }}>
      <button
        type="button"
        onClick={klik}
        aria-pressed={aan}
        aria-label={aan ? "Van mijn persoonlijke pagina halen" : "Zet deze hub op mijn persoonlijke pagina"}
        title={aan ? "Staat op je pagina — tik om weg te halen" : "Zet op je persoonlijke pagina"}
        style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          padding: "8px 14px", borderRadius: 999, cursor: "pointer",
          border: `1.5px solid ${aan ? "#ffd54f" : "rgba(255,213,79,0.45)"}`,
          background: aan ? "rgba(255,213,79,0.18)" : "rgba(255,255,255,0.05)",
          color: aan ? "#ffd54f" : "var(--color-text, #e8edf5)",
          fontWeight: 800, fontSize: 13, fontFamily: "var(--font-display)", whiteSpace: "nowrap",
          transition: "transform 0.15s, background 0.15s, border-color 0.15s",
        }}
      >
        <span aria-hidden="true" style={{ fontSize: 15, filter: aan ? "none" : "grayscale(1) opacity(0.6)", transform: aan ? "scale(1.1)" : "none" }}>⭐</span>
        {aan ? "Staat op je pagina" : "Op mijn pagina"}
      </button>
      {melding && (
        <span style={{
          position: "absolute", left: 0, top: "100%", marginTop: 6, zIndex: 5, whiteSpace: "nowrap",
          background: "#243447", color: "#ffd54f", fontSize: 11.5, fontWeight: 700,
          borderRadius: 8, padding: "5px 9px", boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
        }}>
          {melding}
        </span>
      )}
    </span>
  );
}
