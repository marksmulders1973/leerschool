// Hulpjes voor de nieuwkomerpaden (24 sep 2026).
// vulSteun: vraag- en antwoordvertalingen (`steun` / `steunOpties`) uit het centrale
// woordenboek nieuwkomersSteun.js halen, zodat een nieuw pad alleen Nederlandse tekst
// hoeft te bevatten. Wat al met de hand is ingevuld blijft staan.
import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";

export function vulSteun(steps) {
  for (const s of steps) {
    for (const c of s.checks || []) {
      if (!c.steun && NIEUWKOMERS_STEUN[c.q]) c.steun = NIEUWKOMERS_STEUN[c.q];
      if (!c.steunOpties && Array.isArray(c.options)) {
        const m = Object.fromEntries(c.options.map((o) => [o, NIEUWKOMERS_STEUN[o]]).filter(([, v]) => v));
        if (Object.keys(m).length) c.steunOpties = m;
      }
    }
  }
  return steps;
}
