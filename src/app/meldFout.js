// 📟 Omgevallen scherm vastleggen als meetpunt (9 nov 2026, Mark: "ja leg de foutmelding vast").
//
// Aanleiding: twee schermen vielen in productie om ("Iets ging mis") zonder dat iemand het wist: het
// leerling-startscherm drie dagen (vergeten import), de Leren-knop op /oefenen een half jaar. De fout
// stond alleen in de console van de bezoeker. Nu schrijft de foutvanger één event `app_fout` weg:
//   fout   = de melding, ingekort tot 60 tekens (langere tekst gooit track() weg)
//   soort  = ReferenceError, TypeError, …
//   chunk  = het bestand waar het misging, zonder hash ("StudentHome", "main")
//   plek   = "app" (heel scherm om) of "park" (alleen het park)
//   herstel = 1 bij een laadfout na een uitrol die de app zelf herstelt (geen echte storing)
// Pagina (path) en bouwversie (app_v) zet track() er zelf bij. Geen namen, geen invoer van het kind.
// Per sessie wordt dezelfde melding één keer gemeld, zodat een scherm dat blijft omvallen niet spamt.
// Dagrapport: zie CLAUDE.md, blok "Omgevallen schermen".

import { track } from "../utils.js";

const SLEUTEL = "lk_fout_gemeld";

/** "…/assets/StudentHome-CYuGM-GK.js:2:12405" → "StudentHome"; onbekend → null. */
export function chunkUitStack(stack) {
  const m = String(stack || "").match(/\/assets\/(.+?)-[A-Za-z0-9_-]{8}\.m?js/);
  return m ? m[1].slice(0, 40) : null;
}

/** De props van het event (puur, voor de test). */
export function foutProps(error, plek = "app", herstel = false) {
  const melding = String(error?.message || error || "onbekende fout").replace(/https?:\/\/\S+/g, "(url)").replace(/\s+/g, " ").trim();
  const p = { fout: melding.slice(0, 60), soort: String(error?.name || "Error").slice(0, 30), plek };
  const chunk = chunkUitStack(error?.stack);
  if (chunk) p.chunk = chunk;
  if (herstel) p.herstel = 1;
  return p;
}

/** Meld een opgevangen fout. Gooit nooit zelf een fout: de foutvanger mag hier niet over struikelen. */
export function meldFout(error, plek = "app", herstel = false) {
  try {
    const p = foutProps(error, plek, herstel);
    const merk = `${p.plek}|${p.soort}|${p.fout}`;
    try {
      const al = JSON.parse(sessionStorage.getItem(SLEUTEL) || "[]");
      if (al.includes(merk)) return false;
      sessionStorage.setItem(SLEUTEL, JSON.stringify([...al, merk].slice(-20)));
    } catch { /* geen sessionStorage: dan zonder ontdubbelen */ }
    const r = track("app_fout", p);
    if (r && typeof r.catch === "function") r.catch(() => {});
    return true;
  } catch { return false; }
}
