// Kwartier-stand op dit apparaat: welk plan loopt er vandaag, welk blokje is
// aan de beurt, wat is al gedaan. De pagina's dictee/werkwoorden lezen dit om
// in "kwartier-modus" te starten (5 items) en na afloop "Volgende blokje →"
// te tonen i.p.v. hun eigen knoppen.
import { track } from "../../utils.js";

const KEY = "lk_kwartier";
const vandaagStr = () => new Date().toISOString().slice(0, 10);

function lees() {
  try { const k = JSON.parse(localStorage.getItem(KEY) || "null"); return k && k.datum === vandaagStr() ? k : null; } catch { return null; }
}
function schrijf(k) { try { localStorage.setItem(KEY, JSON.stringify(k)); } catch { /* */ } }

export function startKwartierPlan(plan) {
  const k = { datum: vandaagStr(), reden: plan.reden, uitleg: plan.uitleg, blokjes: plan.blokjes, idx: 0, resultaten: [], klaar: false, gestart: Date.now() };
  schrijf(k);
  try { track("vandaag_start", { reden: plan.reden, blokjes: plan.blokjes.map((b) => b.soort).join(","), n: plan.blokjes.length }); } catch { /* */ }
  return k;
}
export function kwartierStand() { return lees(); }
export function kwartierActief() { const k = lees(); return !!k && !k.klaar; }
export function huidigBlok() { const k = lees(); return k && !k.klaar ? k.blokjes[k.idx] || null : null; }
/** Blokje van soort X is nu aan de beurt? (voor dictee-/werkwoordenpagina) */
export function kwartierBlokVan(soort) { const b = huidigBlok(); return b && b.soort === soort ? b : null; }

export function blokKlaar(resultaat) {
  const k = lees(); if (!k || k.klaar) return null;
  const blok = k.blokjes[k.idx];
  k.resultaten[k.idx] = { soort: blok?.soort, titel: blok?.titel, ...resultaat };
  k.idx += 1;
  if (k.idx >= k.blokjes.length) { k.klaar = true; k.klaarOp = Date.now(); }
  schrijf(k);
  try { track("vandaag_blok_klaar", { soort: blok?.soort, goed: resultaat?.goed ?? null, totaal: resultaat?.totaal ?? null, idx: k.idx, laatste: k.klaar ? 1 : 0 }); } catch { /* */ }
  if (k.klaar) {
    const goed = k.resultaten.reduce((s, r) => s + (r?.goed || 0), 0), totaal = k.resultaten.reduce((s, r) => s + (r?.totaal || 0), 0);
    try { track("vandaag_klaar", { reden: k.reden, goed, totaal, sec: Math.round((Date.now() - k.gestart) / 1000) }); } catch { /* */ }
  }
  return k;
}
export function kwartierGedaanVandaag() { const k = lees(); return !!k && k.klaar; }
export function stopKwartier() { try { localStorage.removeItem(KEY); } catch { /* */ } }
