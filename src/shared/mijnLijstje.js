// ⭐ Mijn lijstje — "bewaar voor later" (Mark-idee 13 aug, 01:33: "leerlingen
// bladeren door de app; zien ze iets wat ze later willen leren, dan drukken ze
// op een soort sterretje en verschijnt er een link op je persoonlijke pagina —
// net als foto's op favorieten zetten").
//
// Bewust simpel: per speler in localStorage (zelfde patroon als de rest van de
// voortgang; account-sync kan later meeliften met de parkmaatjes-sync). Zacht
// maximum zodat het lijstje geen vergaarbak wordt. Wijzigingen sturen een
// window-event zodat het blok op Mijn pagina live meebeweegt.

import { track } from "../utils.js";

export const LIJSTJE_MAX = 10;
export const LIJSTJE_EVENT = "lk-lijstje-changed";

const sleutel = (speler) => `lk_lijstje_${String(speler || "").trim().toLowerCase() || "gast"}`;

export function leesLijstje(speler) {
  try {
    const r = JSON.parse(localStorage.getItem(sleutel(speler)) || "[]");
    return Array.isArray(r) ? r : [];
  } catch {
    return [];
  }
}

export function inLijstje(speler, id) {
  return leesLijstje(speler).some((i) => i.id === id);
}

function bewaar(speler, lijst) {
  try { localStorage.setItem(sleutel(speler), JSON.stringify(lijst)); } catch { /* */ }
  try { window.dispatchEvent(new CustomEvent(LIJSTJE_EVENT)); } catch { /* */ }
}

/**
 * Ster aan/uit. item = { id, titel, emoji?, page? }. Geeft { ok, vol, opgeslagen } terug.
 * `page` (optioneel) = een pagina-sleutel voor een hele hub (bv. "printen",
 * "examens"); zo kun je niet alleen losse leerpaden maar ook complete hubs op je
 * persoonlijke pagina zetten (Mark 16 aug). Zonder `page` = een gewoon leerpad.
 */
export function toggleLijstje(speler, item) {
  const lijst = leesLijstje(speler);
  const staatErop = lijst.some((i) => i.id === item.id);
  if (staatErop) {
    bewaar(speler, lijst.filter((i) => i.id !== item.id));
    try { track("lijstje_ster", { actie: "af", pad: item.id }); } catch { /* */ }
    return { ok: true, vol: false, opgeslagen: false };
  }
  if (lijst.length >= LIJSTJE_MAX) {
    return { ok: false, vol: true, opgeslagen: false };
  }
  const nieuw = { id: item.id, titel: item.titel, emoji: item.emoji || "📘" };
  if (item.page) nieuw.page = item.page;
  bewaar(speler, [nieuw, ...lijst]);
  try { track("lijstje_ster", { actie: "op", pad: item.id, soort: item.page ? "hub" : "pad" }); } catch { /* */ }
  return { ok: true, vol: false, opgeslagen: true };
}
