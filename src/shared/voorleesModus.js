// 🔊 "Alles voorlezen"-stand (Mark 29 sep 2026, na de mail van een nieuwkomers-directeur:
// "het merendeel van onze leerlingen is ongeletterd en niet alles kan voorgelezen worden").
// Staat de stand aan, dan wordt elke vraag vanzelf voorgelezen, krijgt elk antwoord een
// luisterknop en wordt de reactie na een antwoord uitgesproken. Eén vlag per toestel,
// aan te zetten op /nieuwkomers ("Ik kan nog niet lezen") of in een leerpad.
import { useEffect, useState } from "react";
import { spreekMetMeelezen } from "./spraakTekst.js";

const KEY = "lk_voorlees_altijd";
const EVENT = "lk-voorlees-altijd";

export function voorleesAltijd() {
  try { return localStorage.getItem(KEY) === "1"; } catch { return false; }
}

export function zetVoorleesAltijd(aan) {
  try { if (aan) localStorage.setItem(KEY, "1"); else localStorage.removeItem(KEY); } catch { /* */ }
  try { window.dispatchEvent(new CustomEvent(EVENT, { detail: !!aan })); } catch { /* */ }
}

/** Reageert op aan/uit, ook als een ander scherm de stand omzet. */
export function useVoorleesAltijd() {
  const [aan, setAan] = useState(voorleesAltijd);
  useEffect(() => {
    const f = () => setAan(voorleesAltijd());
    window.addEventListener(EVENT, f);
    window.addEventListener("storage", f);
    return () => { window.removeEventListener(EVENT, f); window.removeEventListener("storage", f); };
  }, []);
  return aan;
}

// Eén spreker tegelijk: een nieuwe zin (volgende vraag, ander luisterknopje) breekt de vorige af.
let stopHuidige = null;

export function stopZeggen() {
  if (stopHuidige) { try { stopHuidige(); } catch { /* */ } stopHuidige = null; }
  try { window.speechSynthesis?.cancel(); } catch { /* */ }
}

/** Spreek een korte tekst uit (rustig tempo). Geeft een stop-functie terug. */
export function zeg(tekst, { rate = 0.9, onEnd } = {}) {
  const t = String(tekst ?? "").trim();
  if (!t || typeof window === "undefined" || !window.speechSynthesis) { onEnd && onEnd(false); return () => {}; }
  stopZeggen();
  const stop = spreekMetMeelezen(t, {
    rate,
    pitch: 1.05,
    onEnd: (gelukt) => { if (stopHuidige === stop) stopHuidige = null; onEnd && onEnd(gelukt); },
  });
  stopHuidige = stop;
  return stop;
}

/** Zeg `tekst` vanzelf zodra hij verschijnt of verandert — alleen als `actief` (meestal de voorlees-stand).
 *  `sleutel` (bv. vraagnummer): ook opnieuw zeggen als twee vragen na elkaar dezelfde tekst hebben. */
export function useVanzelfZeggen(tekst, actief, sleutel = null) {
  useEffect(() => {
    if (!actief || !tekst) return undefined;
    // kleine pauze: het scherm is net gewisseld, en een vorige zin mag eerst stoppen
    const t = setTimeout(() => zeg(tekst), 350);
    return () => { clearTimeout(t); stopZeggen(); };
  }, [tekst, actief, sleutel]);
}

// ── Spreken in de thuistaal (Plaatjesdictee, Mark 29 sep 2026: "spell home" — de vraag in de eigen
// taal verklapt de Nederlandse spelling niet). Niet elk toestel heeft een Arabische/Oekraïense/Turkse
// stem: heeftStem() zegt of het kan; zo niet, dan toont het scherm het woord in de thuistaal.
const TAAL_CODE = { en: "en", ar: "ar", uk: "uk", tr: "tr", nl: "nl" };
export function stemVoor(taal) {
  try {
    const code = TAAL_CODE[taal] || taal;
    const alle = window.speechSynthesis?.getVoices?.() || [];
    return alle.find((v) => String(v.lang || "").toLowerCase().startsWith(code)) || null;
  } catch { return null; }
}
export function heeftStem(taal) { return !!stemVoor(taal); }
export function zegInTaal(tekst, taal, { rate = 0.85, onEnd } = {}) {
  const stem = stemVoor(taal);
  if (!stem || !tekst) { onEnd && onEnd(false); return false; }
  stopZeggen();
  try {
    const u = new SpeechSynthesisUtterance(String(tekst));
    u.voice = stem; u.lang = stem.lang; u.rate = rate;
    u.onend = () => onEnd && onEnd(true);
    u.onerror = () => onEnd && onEnd(false);
    window.speechSynthesis.speak(u);
    return true;
  } catch { onEnd && onEnd(false); return false; }
}

/** Korte vaste zinnen voor de reactie na een antwoord. */
export const ZEG = {
  goed: "Goed zo!",
  fout: "Nog niet. Luister nog eens.",
  klaar: "Klaar! Goed gedaan.",
};
