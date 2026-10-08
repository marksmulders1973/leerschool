// 👀 Geziene vragen per apparaat (Mark 8 okt 2026, "ouders zeggen dat er te weinig vragen zijn").
//
// Gemeten: een terugkerend kind kreeg na een paar dagen steeds dezelfde vragen, terwijl de
// paden er veel meer hebben. Deze module onthoudt per apparaat welke vragen al eens
// beantwoord zijn, zodat leerpaden en het kwartier eerst nieuwe vragen kiezen.
//
// Sleutel per vraag = pathId + hash van de vraagtekst (niet de index: vragen worden achteraan
// toegevoegd en een stap kan verschuiven, de tekst blijft). Opslag in localStorage, max
// MAX_SLEUTELS; bij vol gaan de oudste eruit. Volgorde in het object = volgorde van zien
// (opnieuw gezien → achteraan), dus de eerste sleutels zijn de oudste.

const KEY = "lk_gezien_v1";
const SELECTIE_KEY = "lk_stap_selectie_v1";
export const MAX_SLEUTELS = 5000;
export const VRAGEN_PER_BEZOEK = 5;

// Kleine, stabiele string-hash (FNV-1a 32-bit) → base36. Geen crypto nodig.
function hash(s) {
  let h = 0x811c9dc5;
  const str = String(s || "");
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}

export function vraagSleutel(pathId, q) {
  const tekst = String(q || "").replace(/\s+/g, " ").trim();
  return `${pathId || "?"}|${hash(tekst)}`;
}

function lees(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const obj = JSON.parse(raw);
    return obj && typeof obj === "object" && !Array.isArray(obj) ? obj : {};
  } catch {
    return {};
  }
}

function schrijf(key, obj) {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch {
    // quota / private mode — stil falen
  }
}

export function isGezien(sleutel) {
  return Object.prototype.hasOwnProperty.call(lees(KEY), sleutel);
}

// Plek in de zie-volgorde (0 = langst geleden), of -1 als nooit gezien.
function gezienVolgorde() {
  const alle = lees(KEY);
  const m = new Map();
  Object.keys(alle).forEach((k, i) => m.set(k, i));
  return m;
}

export function markeerGezien(sleutel) {
  if (!sleutel) return;
  const alle = lees(KEY);
  delete alle[sleutel]; // opnieuw gezien → achteraan (nieuwste)
  alle[sleutel] = 1;
  const keys = Object.keys(alle);
  if (keys.length > MAX_SLEUTELS) {
    for (const k of keys.slice(0, keys.length - MAX_SLEUTELS)) delete alle[k];
  }
  schrijf(KEY, alle);
}

export function aantalGezien() {
  return Object.keys(lees(KEY)).length;
}

// Sorteert items: eerst nooit gezien (in hun oorspronkelijke volgorde), dan gezien (langst
// geleden eerst). `sleutelVan(item)` geeft de vraagsleutel. Stabiel; muteert niets.
export function ongezienEerst(items, sleutelVan) {
  const volg = gezienVolgorde();
  const nieuw = [];
  const oud = [];
  (items || []).forEach((it, i) => {
    const pos = volg.get(sleutelVan(it));
    if (pos === undefined) nieuw.push(it);
    else oud.push({ it, pos, i });
  });
  oud.sort((a, b) => a.pos - b.pos || a.i - b.i);
  return [...nieuw, ...oud.map((o) => o.it)];
}

// ── Leerpad: welke vragen krijgt dit stapbezoek? ─────────────────────────────
// `fouteIdx` = indexen die vorige keer fout gingen (adaptiveStore) — die gaan altijd voor.
// Daarna nog niet geziene vragen, dan de langst geleden geziene. Max `max` vragen;
// heeft de stap er niet meer dan `max`, dan alle (in de adaptieve volgorde).
// De keuze wordt per (pad, stap) bewaard tot de stap af is, zodat stoppen en hervatten
// (checkIdx = plek in déze keuze) naar dezelfde vraag wijst.
function selectieSleutel(pathId, stepIdx) {
  return `${pathId}::${stepIdx}`;
}

export function kiesStapVragen({ pathId, stepIdx, checks, fouteIdx = [], max = VRAGEN_PER_BEZOEK }) {
  const n = (checks || []).length;
  const geldigeFout = [...new Set(fouteIdx)].filter((i) => Number.isInteger(i) && i >= 0 && i < n);
  // Bewaarde keuze van een nog niet afgemaakt bezoek → hergebruiken (mits nog geldig).
  const bewaard = lees(SELECTIE_KEY)[selectieSleutel(pathId, stepIdx)];
  if (bewaard && Array.isArray(bewaard.idx) && bewaard.n === n && bewaard.idx.length > 0
      && bewaard.idx.every((i) => Number.isInteger(i) && i >= 0 && i < n)) {
    return bewaard.idx.slice();
  }
  const foutSet = new Set(geldigeFout);
  const rest = [];
  for (let i = 0; i < n; i++) if (!foutSet.has(i)) rest.push(i);
  let keuze;
  if (n <= max) {
    keuze = [...geldigeFout, ...rest];
  } else {
    const restGesorteerd = ongezienEerst(rest, (i) => vraagSleutel(pathId, checks[i]?.q));
    keuze = [...geldigeFout, ...restGesorteerd].slice(0, max);
  }
  if (keuze.length) {
    const alle = lees(SELECTIE_KEY);
    alle[selectieSleutel(pathId, stepIdx)] = { idx: keuze, n };
    // Klein houden: hooguit 200 open stappen onthouden (oudste eruit).
    const ks = Object.keys(alle);
    if (ks.length > 200) for (const k of ks.slice(0, ks.length - 200)) delete alle[k];
    schrijf(SELECTIE_KEY, alle);
  }
  return keuze;
}

// Bewaarde keuze opvragen zonder iets te kiezen (voor "Doorgaan: deel X, vraag Y").
export function bewaardeStapVragen(pathId, stepIdx) {
  const b = lees(SELECTIE_KEY)[selectieSleutel(pathId, stepIdx)];
  return b && Array.isArray(b.idx) ? b.idx.slice() : null;
}

// Stap af → keuze vergeten, zodat het volgende bezoek nieuwe vragen kiest.
export function vergeetStapVragen(pathId, stepIdx) {
  const alle = lees(SELECTIE_KEY);
  const k = selectieSleutel(pathId, stepIdx);
  if (k in alle) {
    delete alle[k];
    schrijf(SELECTIE_KEY, alle);
  }
}

// Verwachte aantal vragen per bezoek (voor de minuten-schatting).
export function vragenPerBezoek(aantalChecks, max = VRAGEN_PER_BEZOEK) {
  return Math.min(Math.max(0, aantalChecks || 0), max);
}
