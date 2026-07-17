// 🔊 Park-gids-stem (Mark 12 jul 2026): Charley praat HARDOP door de luidspreker
// terwijl je door het park loopt — "je hoort hoe alles werkt". Web Speech API
// (speechSynthesis): gratis, lokaal op het apparaat, geen API-kosten, werkt op
// Chrome/Edge/Android/iOS met een Nederlandse stem. Geen ondersteuning of stem?
// Dan valt alles stil terug op de geschreven tekstballon — nooit een crash.
//
// Stil-knop: `lk_park_gids_stil` in localStorage (🔇 in de park-HUD). Stil =
// géén ongevraagde praatjes en géén voorlezen; tikken op objecten blijft werken
// (dan alleen tekst).

import { schoonVoorSpraak } from "../../shared/spraakTekst.js";

const KEY_STIL = "lk_park_gids_stil";

export function gidsIsStil() {
  try { return localStorage.getItem(KEY_STIL) === "1"; } catch { return false; }
}

export function zetGidsStil(stil) {
  try { localStorage.setItem(KEY_STIL, stil ? "1" : "0"); } catch { /* */ }
  if (stil) stopSpreken();
}

// Stemmen laden is async in Chrome — één keer opwarmen zodat kiesStem() raak is.
try {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener?.("voiceschanged", () => window.speechSynthesis.getVoices());
  }
} catch { /* */ }

// iOS Safari negeert speak() dat niet uit een tik komt — precies wat de
// ongevraagde rondloop-praatjes zijn (review 17 jul: gids stil op iPhone/iPad).
// Bekende workaround: bij de EERSTE tik ergens in de app een lege utterance
// uitspreken; daarna accepteert iOS ook programmatische speak()-aanroepen.
try {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    const ontgrendel = () => {
      try {
        const u = new SpeechSynthesisUtterance(" ");
        u.volume = 0;
        window.speechSynthesis.speak(u);
      } catch { /* */ }
      window.removeEventListener("pointerdown", ontgrendel);
    };
    window.addEventListener("pointerdown", ontgrendel, { once: true, passive: true });
  }
} catch { /* */ }

function kiesStem() {
  try {
    const alle = window.speechSynthesis.getVoices() || [];
    const nl = alle.filter((v) => (v.lang || "").toLowerCase().startsWith("nl"));
    if (!nl.length) return null;
    // Natuurlijker klinkende stemmen eerst (Edge "Natural", Google, dan de rest).
    return (
      nl.find((v) => /natural/i.test(v.name)) ||
      nl.find((v) => /google/i.test(v.name)) ||
      nl.find((v) => /fenna|colette|xander|frank/i.test(v.name)) ||
      nl[0]
    );
  } catch { return null; }
}

// Spreek een tekst uit (breekt een eventueel lopend praatje af). Geeft true
// terug als er echt gesproken wordt — de beller weet dan dat audio loopt.
// PER ZIN een eigen utterance (review 17 jul): Chrome laat lange utterances
// met een netwerk-stem (Google NL — juist onze voorkeursstem) na ~15 s
// stilvallen; spraakTekst.js omzeilde dat al zo, de gids nog niet. Trigger was
// het stoomtrein-praatje (~30 s) dat halverwege stopte.
export function spreek(tekst, onKlaar = null) {
  try {
    if (gidsIsStil()) return false;
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
    const schoon = schoonVoorSpraak(tekst);
    if (!schoon) return false;
    window.speechSynthesis.cancel();
    const zinnen = schoon.match(/[^.!?…]+[.!?…]+["')]?|[^.!?…]+$/g) || [schoon];
    const stem = kiesStem();
    let klaarGeteld = 0;
    for (const zin of zinnen) {
      const z = zin.trim();
      if (!z) { klaarGeteld += 1; continue; }
      const u = new SpeechSynthesisUtterance(z);
      u.lang = "nl-NL";
      if (stem) u.voice = stem;
      u.rate = 0.95;  // ietsje rustiger — kind van ~10 luistert mee
      u.pitch = 1.05;
      if (onKlaar) {
        const zinKlaar = () => { klaarGeteld += 1; if (klaarGeteld >= zinnen.length) onKlaar(); };
        u.onend = zinKlaar;
        u.onerror = zinKlaar;
      }
      window.speechSynthesis.speak(u);
    }
    return true;
  } catch { return false; }
}

export function stopSpreken() {
  try { window.speechSynthesis?.cancel(); } catch { /* */ }
}
