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
export function zeg(tekst, { rate = 0.9, onEnd, onWoord } = {}) {
  const t = String(tekst ?? "").trim();
  if (!t || typeof window === "undefined" || !window.speechSynthesis) { onEnd && onEnd(false); return () => {}; }
  stopZeggen();
  const stop = spreekMetMeelezen(t, {
    rate,
    pitch: 1.05,
    onWoord,
    onEnd: (gelukt) => { if (stopHuidige === stop) stopHuidige = null; onEnd && onEnd(gelukt); },
  });
  stopHuidige = stop;
  return stop;
}

// ── Zin in stukjes (Mark + nieuwkomers-directeur, 5 okt 2026: "het gaat nu erg snel") ──
// Zoals een NT2-juf het doet: 1) de hele zin in gewoon tempo (zo klinkt het in de klas),
// 2) woord voor woord met een pauze ertussen, 3) de hele zin nog eens, iets langzamer.
// Niet trager dan 0,8: daaronder gaat de telefoonstem vervormen. `onWoord(i)` krijgt de
// index van het woord dat nu klinkt (−1 = niets), voor het oplichten in de kaart.
// Geeft een stop-functie terug; stopZeggen() onderbreekt de hele reeks.
export function zegInStukjes(zin, { onWoord, onEnd } = {}) {
  const t = String(zin ?? "").trim();
  const woorden = t.split(/\s+/).filter(Boolean);
  if (!t || typeof window === "undefined" || !window.speechSynthesis) { onEnd && onEnd(false); return () => {}; }
  let gestopt = false;
  let timer = null;
  let stopStap = null;
  const woord = (i) => { try { onWoord && onWoord(i); } catch { /* */ } };
  const stop = () => { gestopt = true; if (timer) clearTimeout(timer); if (stopStap) { try { stopStap(); } catch { /* */ } } woord(-1); };
  const wacht = (ms, f) => { if (gestopt) return; timer = setTimeout(() => { if (!gestopt) f(); }, ms); };
  const spreek = (tekst, rate, opties, daarna) => {
    if (gestopt) return;
    stopStap = spreekMetMeelezen(tekst, { rate, pitch: 1.05, ...opties, onEnd: () => { stopStap = null; if (!gestopt) daarna(); } });
  };
  const klaar = () => { woord(-1); stopHuidige = null; onEnd && onEnd(true); };
  const stap3 = () => spreek(t, 0.8, { onWoord: woord }, klaar);
  const stapWoorden = (i) => {
    if (i >= woorden.length) { woord(-1); return wacht(600, stap3); }
    woord(i);
    // los woord: zonder leesteken, zodat "vragen?" niet als vraagintonatie op één woord klinkt
    spreek(woorden[i].replace(/[?!.,;:]+$/g, ""), 0.85, {}, () => wacht(450, () => stapWoorden(i + 1)));
  };
  stopZeggen();
  stopHuidige = stop;
  // Eén woord? Dan heeft opdelen geen zin: gewoon tempo, dan langzaam.
  spreek(t, 0.9, { onWoord: woord }, () => wacht(500, () => (woorden.length > 1 ? stapWoorden(0) : stap3())));
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
// taal verklapt de Nederlandse spelling niet). Niet elk toestel heeft een Arabische/Oekraïense/Turkse/Roemeense/Bulgaarse
// stem: heeftStem() zegt of het kan; zo niet, dan toont het scherm het woord in de thuistaal.
const TAAL_CODE = { en: "en", ar: "ar", uk: "uk", tr: "tr", ro: "ro", bg: "bg", nl: "nl" };
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
