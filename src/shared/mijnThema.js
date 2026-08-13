// 🎨 Mijn thema — eigen achtergrond voor Mijn pagina (Mark 13 aug, 02:21:
// "laat het kind het gevoel hebben een eigen pagina te hebben — trots; evt
// speciale achtergrond bij behaalde scores").
//
// Bewuste keuzes: een gekozen palet in plaats van vrije foto-upload (rustig
// beeld, geen moderatie- of privacy-risico met kinderfoto's) en één
// VERDIEN-thema: goud gaat pas open bij je eerste échte diploma uit de
// diploma-kast — personalisatie als beloning voor leren, geen gokmechaniek.

import { track } from "../utils.js";

export const THEMA_EVENT = "lk-thema-changed";

export const THEMAS = [
  { id: "standaard", naam: "Leerkwartier", emoji: "🌙", swatch: "#0b1020", pageStyle: null },
  { id: "oceaan", naam: "Oceaan", emoji: "🌊", swatch: "#0a3a55", pageStyle: { background: "linear-gradient(180deg, #072a40 0%, #0b1020 60%)" } },
  { id: "bos", naam: "Bos", emoji: "🌲", swatch: "#14502c", pageStyle: { background: "linear-gradient(180deg, #0d2f1b 0%, #0b1020 60%)" } },
  { id: "ruimte", naam: "Ruimte", emoji: "🚀", swatch: "#2c1a55", pageStyle: { background: "linear-gradient(180deg, #1c1140 0%, #0b1020 60%)" } },
  { id: "zonsopkomst", naam: "Zonsopkomst", emoji: "🌅", swatch: "#7a2e4a", pageStyle: { background: "linear-gradient(180deg, #401a30 0%, #0b1020 60%)" } },
  { id: "goud", naam: "Goud", emoji: "🏆", swatch: "#8a6a14", verdienMet: "je eerste échte diploma", pageStyle: { background: "linear-gradient(180deg, #3a2c0a 0%, #0b1020 60%)" } },
];

const sleutel = (s) => `lk_thema_${String(s || "").trim().toLowerCase() || "gast"}`;
const goudSleutel = (s) => `lk_thema_goud_${String(s || "").trim().toLowerCase() || "gast"}`;

export function leesThemaId(speler) {
  try { return localStorage.getItem(sleutel(speler)) || "standaard"; } catch { return "standaard"; }
}

export function themaVan(speler) {
  const id = leesThemaId(speler);
  const t = THEMAS.find((x) => x.id === id) || THEMAS[0];
  // Goud gekozen maar (op dit apparaat) niet verdiend? Val stil terug.
  if (t.id === "goud" && !goudVerdiend(speler)) return THEMAS[0];
  return t;
}

export function kiesThema(speler, id) {
  try {
    localStorage.setItem(sleutel(speler), id);
    window.dispatchEvent(new CustomEvent(THEMA_EVENT));
  } catch { /* */ }
  try { track("thema_gekozen", { thema: id }); } catch { /* */ }
}

export function goudVerdiend(speler) {
  try { return localStorage.getItem(goudSleutel(speler)) === "1"; } catch { return false; }
}

/** Wordt door de diploma-kast aangeroepen zodra er ≥1 écht verdiend diploma hangt. */
export function ontgrendelGoud(speler) {
  try {
    if (!speler || localStorage.getItem(goudSleutel(speler)) === "1") return;
    localStorage.setItem(goudSleutel(speler), "1");
    window.dispatchEvent(new CustomEvent(THEMA_EVENT));
    track("thema_goud_verdiend", {});
  } catch { /* */ }
}
