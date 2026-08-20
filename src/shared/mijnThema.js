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

// Kind-thema's met een subtiel icoon-patroon (hartjes/sterren/…). We bouwen de
// achtergrond-URL via encodeURIComponent zodat spaties/#/<> nooit een CSS-
// coderingsfout geven. Opzet blijft: een gekleurde tint bovenaan die naar het
// donkere Leerkwartier-blauw (#0b1020) vervaagt, zodat de lichte tekst leesbaar
// blijft — het patroon ligt er licht (lage opacity) overheen (Mark 14 aug:
// "meer keuzes, duidelijke hartjes/regenbogen — personalisatie voor kinderen").
const patroon = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

// 🌫️ Patroon-fade (Brian 20 aug: sterretjes prikten door álle kaarten heen —
// tekst onleesbaar). De bovenste CSS-laag dekt het icoon-patroon vanaf ~150 px
// steeds verder af naar het effen donkerblauw: bovenaan (naam/avatar) blijft
// het thema-gevoel, daaronder staan alle kaarten weer op een rustige bodem.
const PATROON_FADE = "linear-gradient(180deg, rgba(11,16,32,0) 0%, rgba(11,16,32,0) 150px, rgba(11,16,32,0.94) 430px, #0b1020 620px)";
const HARTJES = "<svg xmlns='http://www.w3.org/2000/svg' width='42' height='42'><path d='M11 19C11 19 4 14 4 9C4 6.5 6 5 8 5C9.7 5 11 6.8 11 6.8C11 6.8 12.3 5 14 5C16 5 18 6.5 18 9C18 14 11 19 11 19Z' fill='#ff8fbf' opacity='0.42'/><path d='M32 39C32 39 25 34 25 29C25 26.5 27 25 29 25C30.7 25 32 26.8 32 26.8C32 26.8 33.3 25 35 25C37 25 39 26.5 39 29C39 34 32 39 32 39Z' fill='#ffb3d4' opacity='0.3'/></svg>";
const STERREN = "<svg xmlns='http://www.w3.org/2000/svg' width='54' height='54'><path d='M14 4 L16 12 L24 14 L16 16 L14 24 L12 16 L4 14 L12 12 Z' fill='#ffe08a' opacity='0.5'/><path d='M40 30 L41.5 36 L47 37.5 L41.5 39 L40 45 L38.5 39 L33 37.5 L38.5 36 Z' fill='#fff2c0' opacity='0.38'/></svg>";
const SPARKLES = "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><path d='M12 4 L13.5 10 L19 11.5 L13.5 13 L12 19 L10.5 13 L5 11.5 L10.5 10 Z' fill='#ffd6f5' opacity='0.52'/><path d='M35 27 L36 31 L40 32 L36 33 L35 37 L34 33 L30 32 L34 31 Z' fill='#c9b3ff' opacity='0.4'/></svg>";
const STIPPEN = "<svg xmlns='http://www.w3.org/2000/svg' width='38' height='38'><circle cx='10' cy='10' r='4.5' fill='#ff8ac2' opacity='0.44'/><circle cx='29' cy='26' r='4.5' fill='#7ecbff' opacity='0.4'/><circle cx='29' cy='8' r='3' fill='#ffd76a' opacity='0.42'/><circle cx='9' cy='29' r='3' fill='#8affc0' opacity='0.4'/></svg>";

export const THEMAS = [
  { id: "standaard", naam: "Leerkwartier", emoji: "🌙", swatch: "#0b1020", pageStyle: null },
  { id: "oceaan", naam: "Oceaan", emoji: "🌊", swatch: "#0a3a55", pageStyle: { background: "linear-gradient(180deg, #072a40 0%, #0b1020 60%)" } },
  { id: "bos", naam: "Bos", emoji: "🌲", swatch: "#14502c", pageStyle: { background: "linear-gradient(180deg, #0d2f1b 0%, #0b1020 60%)" } },
  { id: "ruimte", naam: "Ruimte", emoji: "🚀", swatch: "#2c1a55", pageStyle: { background: "linear-gradient(180deg, #1c1140 0%, #0b1020 60%)" } },
  { id: "zonsopkomst", naam: "Zonsopkomst", emoji: "🌅", swatch: "#7a2e4a", pageStyle: { background: "linear-gradient(180deg, #401a30 0%, #0b1020 60%)" } },
  { id: "regenboog", naam: "Regenboog", emoji: "🌈", swatch: "linear-gradient(90deg,#e23b57,#e8912f,#d9b52f,#3fae6b,#3f7fd9,#8a5fd9)", pageStyle: { background: "linear-gradient(180deg, rgba(255,60,80,0.16) 0%, rgba(255,150,60,0.14) 7%, rgba(255,220,70,0.13) 14%, rgba(70,200,110,0.13) 21%, rgba(70,160,255,0.14) 28%, rgba(150,90,255,0.16) 35%, #0b1020 66%)" } },
  { id: "hartjes", naam: "Hartjes", emoji: "💖", swatch: "#e0568f", pageStyle: { background: `${PATROON_FADE}, ${patroon(HARTJES)} repeat, linear-gradient(180deg, #3a1430 0%, #0b1020 62%)` } },
  { id: "sterren", naam: "Sterren", emoji: "✨", swatch: "#2a2a6a", pageStyle: { background: `${PATROON_FADE}, ${patroon(STERREN)} repeat, linear-gradient(180deg, #161642 0%, #0b1020 62%)` } },
  { id: "eenhoorn", naam: "Eenhoorn", emoji: "🦄", swatch: "#7a3fb0", pageStyle: { background: `${PATROON_FADE}, ${patroon(SPARKLES)} repeat, linear-gradient(180deg, #2e1442 0%, #0b1020 62%)` } },
  { id: "snoep", naam: "Snoep", emoji: "🍬", swatch: "#d94f8a", pageStyle: { background: `${PATROON_FADE}, ${patroon(STIPPEN)} repeat, linear-gradient(180deg, #3a1a2e 0%, #0b1020 62%)` } },
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

// ── "Wat staat bovenaan?" (Mark 13 aug: "de blokken kunnen schuiven op
// eigen voorkeur") — bewust simpel: kies je top-blok, geen drag-and-drop
// (foutgevoelig op een telefoon). Zelfde event als de thema's.
const topSleutel = (s) => `lk_topblok_${String(s || "").trim().toLowerCase() || "gast"}`;
export const TOP_BLOKKEN = [
  { id: "lijstje", naam: "⭐ Mijn lijstje" },
  { id: "klaar", naam: "📌 Voor jou klaar" },
  { id: "diploma", naam: "🏆 Diploma-kast" },
];

export function leesTopBlok(speler) {
  try {
    const v = localStorage.getItem(topSleutel(speler));
    return TOP_BLOKKEN.some((b) => b.id === v) ? v : "lijstje";
  } catch { return "lijstje"; }
}

export function kiesTopBlok(speler, id) {
  try {
    localStorage.setItem(topSleutel(speler), id);
    window.dispatchEvent(new CustomEvent(THEMA_EVENT));
  } catch { /* */ }
  try { track("topblok_gekozen", { blok: id }); } catch { /* */ }
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
