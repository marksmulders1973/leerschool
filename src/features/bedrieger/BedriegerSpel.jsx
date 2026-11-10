// 🕵️ Wie is de bedrieger? — het tweede spel achter de knop Spelletje (Mark, 10 nov 2026).
// Het spel zelf is gewone DOM-code (bedriegerSpel.js, Marks spelbestand); dit scherm geeft het een
// plek, zonder onderbalk: de telefoon gaat rond en niemand mag per ongeluk wegtikken.
import { useEffect, useRef } from "react";
import { track } from "../../utils.js";
import { startBedrieger } from "./bedriegerSpel.js";
import "./bedrieger.css";

export default function BedriegerSpel({ onTerug }) {
  const plek = useRef(null);
  const terugRef = useRef(onTerug);
  terugRef.current = onTerug;
  useEffect(() => {
    const el = plek.current;
    if (!el) return undefined;
    try { track("bedrieger_open"); } catch { /* meten mag het spel nooit breken */ }
    startBedrieger(el, {
      onTerug: () => terugRef.current && terugRef.current(),
      meld: (naam, extra) => { try { track(naam, extra); } catch { /* */ } },
    });
    return () => { el.replaceChildren(); };
  }, []);
  return (
    <div className="bdg">
      <div className="bdg-app" ref={plek} />
    </div>
  );
}
