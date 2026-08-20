// 🥾 Wandelroutes — bron-van-waarheid voor de drie stappenpaden (M2 van
// WANDELKWARTIER-PLAN.md, Mark-go 20 aug "bouw M2 maar").
//
// Elke route = kleur + groep-label + de voetstap-cellen + DRIE stops. Een stop
// verwijst naar een bestaand leermoment (PARK_LEERMOMENTEN-id): sta je bij dat
// object en opent het praatje, dan telt de stop als gevonden. Route af =
// viering. De voetstappen/stempels worden getekend door WandelPreview.jsx;
// de wandel-logica (kiezen, voortgang, viering) zit in ZookwartierGame.jsx.
//
// Kind-regel: alles hier is in één blik te snappen — kleur = route, ovaal met
// "groep 3-5" in het spoor (zoals tekst op een fietspad), stops met emoji.

import { PARK_LEERMOMENTEN } from "./parkLeermomenten";

export const WANDEL_ROUTES = [
  {
    id: "geel",
    naam: "Gele route",
    groep: "groep 3-5",
    stempel: "groep 3-5",
    kleur: "#ffd54f",
    tekstKleur: "#5c4300",
    offset: -0.95,
    // Objecten langs deze route die een persoonlijke stop mogen worden (M2b).
    pool: ["klok", "telraam", "moestuin", "weegschaal", "breukentaart", "parkkaart"],
    // Kort rondje: ingang → boulevard → meet-tuin en terug.
    // (Route-inspectie 20 aug: eindpunt [-30,30] = midden van het meet-plein,
    //  vrij van de weegschaal; zijsporen wijzen vandaar naar de objecten.)
    cells: [
      [0, 16], [0, 12], [0, 7], [-3, 5], [-6, 3], [-8, 0],
      [-16, 0], [-24, 0], [-29, 2], [-29, 10], [-29, 18], [-29, 25], [-30, 30],
      [-29, 25], [-29, 18], [-29, 10], [-29, 2], [-24, 0], [-16, 0], [-8, 0],
      [-6, 3], [-3, 5], [0, 7], [0, 12], [0, 15],
    ],
    stops: [
      { moment: "klok", emoji: "🕐", label: "de klok" },
      { moment: "telraam", emoji: "🧮", label: "het telraam" },
      { moment: "moestuin", emoji: "🥕", label: "de moestuin" },
    ],
  },
  {
    id: "groen",
    naam: "Groene route",
    groep: "groep 6-8",
    stempel: "groep 6-8",
    kleur: "#00c853",
    tekstKleur: "#0b3d20",
    offset: 0,
    pool: ["breukentaart", "kubus", "kegel", "cilinder", "bol", "halvebol", "piramide", "klok", "weegschaal", "moestuin", "telraam", "kompas", "parkkaart"],
    // De grote ronde: meet-tuin → vormen → piramide → rustpunt → poorten-laan.
    // (Route-inspectie 20 aug: om de bomenlaan, achtbaan-steun, kei en
    //  wereldbol heen gelegd; piramide-keerpunt buiten de botszone.)
    cells: [
      [0, 16], [0, 12], [0, 7], [-3, 5], [-6, 3], [-8, 0],
      [-16, 0], [-24, 0], [-29, 2], [-29, 8], [-29, 13],
      [-29, 19], [-29, 25], [-30, 30],
      [-29, 24], [-29, 16], [-29, 8], [-29, 1],
      [-29, -5], [-30, -11],
      [-29, -8], [-29, -2], [-24, 0], [-16, 0], [-8, 0],
      [-6, -3], [-2, -4], [2, -4], [6, -3], [8, 0],
      [12, 1], [17, 1], [22, 0], [24, 2], [29, 3],
      [24, 2], [22, 0], [17, 1], [12, 1], [9, 0], [6, 3], [3, 5],
      [0, 7], [0, 12], [0, 15],
    ],
    stops: [
      { moment: "breukentaart", emoji: "🥧", label: "de breukentaart" },
      { moment: "kubus", emoji: "🧊", label: "de kubus" },
      { moment: "piramide", emoji: "🔺", label: "de piramide" },
    ],
  },
  {
    id: "blauw",
    naam: "Blauwe route",
    groep: "brugklas & examens",
    stempel: "brugklas",
    kleur: "#42a5f5",
    tekstKleur: "#0b2a4a",
    offset: 0.95,
    pool: ["eiffeltoren", "tempel", "wereldbol", "telescoop", "standbeeld", "molen", "raket", "vulkaan", "kas", "weerstation", "spaarpot", "kompas"],
    // De poorten-laan op en neer, langs de landmark-poorten.
    // (Route-inspectie 20 aug: knikken om de bomenlaan/achtbaan/kei/wereldbol
    //  heen; keerpunt vóór het kompas i.p.v. erín.)
    cells: [
      [0, 16], [0, 12], [0, 7], [3, 5], [6, 3], [9, 0],
      [12, 1], [17, 1], [22, 0], [24, 2], [29, 3], [29, 8], [29, 10],
      [29, 7], [29, 1], [29, -5], [29, -11],
      [29, -6], [29, 0], [24, 2], [22, 0], [17, 1], [12, 1], [9, 0],
      [6, 3], [3, 5], [0, 7], [0, 12], [0, 15],
    ],
    stops: [
      { moment: "eiffeltoren", emoji: "🗼", label: "de Eiffeltoren" },
      { moment: "wereldbol", emoji: "🌍", label: "de wereldbol" },
      { moment: "telescoop", emoji: "🔭", label: "de telescoop" },
    ],
  },
];

export const ROUTE_BY_ID = Object.fromEntries(WANDEL_ROUTES.map((r) => [r.id, r]));

// ── M2b: persoonlijke stops (Mark-go 20 aug "bouw M2b ook maar").
// De route kiest stop 1 en 2 uit wat dít kind echt moet doen: herhaling die
// eraan toe is (next_due_at) en zwakste concepten. De finale-stop blijft vast
// (het herkenbare einddoel), en zonder leer-data vallen we stil terug op de
// vaste stops — een nieuw kind merkt niets.
const MOMENT_BY_LEERPAD = (() => {
  const m = {};
  Object.values(PARK_LEERMOMENTEN).forEach((lm) => {
    if (lm.leerpadId && !m[lm.leerpadId]) m[lm.leerpadId] = lm.id;
    if (lm.leerpadId2 && !m[lm.leerpadId2]) m[lm.leerpadId2] = lm.id;
  });
  return m;
})();

function stopVoorMoment(momentId, reden) {
  const lm = PARK_LEERMOMENTEN[momentId];
  if (!lm) return null;
  const titel = String(lm.titel || momentId);
  return { moment: momentId, emoji: lm.emoji || "📍", label: titel.charAt(0).toLowerCase() + titel.slice(1), reden };
}

// 🏞️ Stops afstemmen op wat er ÉCHT in dit park staat (speeltest 20 aug:
// oudere parken missen de leerplein-objecten → "loop naar de klok" terwijl er
// geen klok is = doodlopende belofte). aanwezig = Set van moment-ids waarvan
// het object in het park staat. Ontbrekende stops worden vervangen door een
// aanwezig object uit de route-pool, anders door élk aanwezig leermoment-
// object; blijft er niets over → minder (of nul) stops, de kiezer meldt dat.
export function kiesStopsVoorPark(route, kandidaten, aanwezig) {
  const basis = personaliseerStops(route, kandidaten);
  if (!aanwezig) return basis;
  const gebruikt = new Set();
  const vervang = (nietIn) => {
    for (const momentId of route.pool || []) {
      if (aanwezig.has(momentId) && !gebruikt.has(momentId) && !nietIn.has(momentId)) return momentId;
    }
    for (const momentId of aanwezig) {
      if (!gebruikt.has(momentId) && !nietIn.has(momentId)) return momentId;
    }
    return null;
  };
  const basisMomenten = new Set(basis.map((s) => s.moment));
  const uit = [];
  for (const s of basis) {
    if (aanwezig.has(s.moment) && !gebruikt.has(s.moment)) {
      gebruikt.add(s.moment);
      uit.push(s);
      continue;
    }
    const anders = vervang(basisMomenten);
    if (!anders) continue; // niets aanwezig → stop vervalt
    gebruikt.add(anders);
    const nieuw = stopVoorMoment(anders, s.reden && aanwezig.has(s.moment) ? s.reden : null);
    if (nieuw) uit.push(nieuw);
  }
  return uit;
}

// kandidaten = [{ pathId, reden: "herhalen"|"oefenen" }] op volgorde van belang.
export function personaliseerStops(route, kandidaten) {
  const stops = route.stops.slice();
  const gebruikt = new Set(stops.map((s) => s.moment));
  let slot = 0;
  for (const k of kandidaten || []) {
    if (slot >= 2) break; // finale-stop blijft altijd de vaste
    const momentId = MOMENT_BY_LEERPAD[k.pathId];
    if (!momentId || !(route.pool || []).includes(momentId) || gebruikt.has(momentId)) continue;
    const stop = stopVoorMoment(momentId, k.reden);
    if (!stop) continue;
    stops[slot] = stop;
    gebruikt.add(momentId);
    slot++;
  }
  return stops;
}

// ── Wandel-voortgang (localStorage, per dag — morgen ligt er een verse route).
const KEY = "lk_wandeling";
const vandaag = () => new Date().toISOString().slice(0, 10);

export function leesWandeling() {
  try {
    const w = JSON.parse(localStorage.getItem(KEY) || "null");
    if (!w || w.datum !== vandaag()) return null; // gisteren = weg
    return w;
  } catch {
    return null;
  }
}

export function startWandeling(routeId, stops = null) {
  const w = { datum: vandaag(), routeId, stopIdx: 0, klaar: false, ...(Array.isArray(stops) && stops.length ? { stops } : {}) };
  try { localStorage.setItem(KEY, JSON.stringify(w)); } catch { /* private mode */ }
  return w;
}

// De stops van déze wandeling: persoonlijk (M2b) als ze zijn meegegeven,
// anders de vaste route-stops.
export function stopsVan(w) {
  if (Array.isArray(w?.stops) && w.stops.length) return w.stops;
  return ROUTE_BY_ID[w?.routeId]?.stops || [];
}

export function volgendeStop(w) {
  const stops = stopsVan(w);
  const idx = w.stopIdx + 1;
  const klaar = idx >= stops.length;
  const nw = { ...w, stopIdx: Math.min(idx, stops.length - 1), klaar };
  try { localStorage.setItem(KEY, JSON.stringify(nw)); } catch { /* private mode */ }
  return nw;
}

export function stopWandeling() {
  try { localStorage.removeItem(KEY); } catch { /* private mode */ }
}
