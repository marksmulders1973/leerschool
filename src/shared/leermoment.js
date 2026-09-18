// Leermoment-vlag per dag — hoort bij de "soepele" kwartier-telling.
//
// Aanleiding (18 sep 2026): het event `kwartier_reached` vuurde puur op tijd.
// De dagteller in dailyGoal.js loopt namelijk op élke pagina zolang het tabblad
// zichtbaar is, dus "vijftien minuten de site open" telde als "een kwartier
// geleerd". In september was 21 van de 66 kwartieren zo ontstaan: geen som,
// geen proefvraag, niets.
//
// Marks keuze: soepel tellen. Zoeken naar de juiste som of uitzoeken waar je
// verder moet, telt gewoon mee als leren — de klok blijft dus breed lopen en
// het kind ziet exact hetzelfde als eerst. Alleen een dag waarop er écht
// niets van leren gebeurde, telt niet meer mee als kwartier.
//
// Wat telt als leermoment staat in LEERMOMENT_EVENTS in utils.js (ruim: een
// oefenvraag, een proefvraag op het welkomscherm, de vraag van de dag, een
// dictee-woord, de Kwartiercheck, een rekenvraag in het park, een toets).
//
// Dit bestand staat los van dailyGoal.js en utils.js zodat er geen
// import-cirkel ontstaat (utils → leermoment, dailyGoal → leermoment).

const KEY = "lk_leermoment_v1";

function vandaag() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function lees() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const obj = JSON.parse(raw);
    return obj && typeof obj === "object" ? obj : null;
  } catch {
    return null;
  }
}

/** Heeft dit apparaat vandaag minstens één leermoment gehad? */
export function leermomentVandaag() {
  const cur = lees();
  return !!cur && cur.date === vandaag() && (cur.count || 0) > 0;
}

// dailyGoal.js hangt zich hieraan op: als het kwartier al vol was vóór het
// eerste leermoment, moet het event alsnog vuren zodra dat leermoment komt.
const luisteraars = new Set();
export function onLeermoment(cb) {
  luisteraars.add(cb);
  return () => luisteraars.delete(cb);
}

/** Aanroepen bij elk leermoment-event (zie utils.js → track). */
export function meldLeermoment() {
  try {
    const dag = vandaag();
    const cur = lees();
    const next = cur && cur.date === dag ? { date: dag, count: (cur.count || 0) + 1 } : { date: dag, count: 1 };
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // private mode / quota: dan telt deze dag niet mee, en dat is beter dan crashen
  }
  for (const cb of luisteraars) {
    try { cb(); } catch { /* een luisteraar mag de meting nooit breken */ }
  }
}
