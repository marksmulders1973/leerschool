// 🔊 Park-gids-stem (Mark 12 jul 2026): Charley praat HARDOP door de luidspreker
// terwijl je door het park loopt — "je hoort hoe alles werkt". Web Speech API
// (speechSynthesis): gratis, lokaal op het apparaat, geen API-kosten, werkt op
// Chrome/Edge/Android/iOS met een Nederlandse stem. Geen ondersteuning of stem?
// Dan valt alles stil terug op de geschreven tekstballon — nooit een crash.
//
// Stil-knop: `lk_park_gids_stil` in localStorage (🔇 in de park-HUD). Stil =
// géén ongevraagde praatjes en géén voorlezen; tikken op objecten blijft werken
// (dan alleen tekst).

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
export function spreek(tekst, onKlaar = null) {
  try {
    if (gidsIsStil()) return false;
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(tekst));
    u.lang = "nl-NL";
    const stem = kiesStem();
    if (stem) u.voice = stem;
    u.rate = 0.95;  // ietsje rustiger — kind van ~10 luistert mee
    u.pitch = 1.05;
    if (onKlaar) { u.onend = onKlaar; u.onerror = onKlaar; }
    window.speechSynthesis.speak(u);
    return true;
  } catch { return false; }
}

export function stopSpreken() {
  try { window.speechSynthesis?.cancel(); } catch { /* */ }
}
