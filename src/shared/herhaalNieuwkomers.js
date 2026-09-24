// 🔁 Herhalen over dagen (Nieuwkomer-pakket, 24 sep 2026).
// Onderzoek naar nieuwkomersonderwijs (LOWAN, 4-takt): een woord zit pas vast als het
// over meerdere dagen terugkomt. Elke vraag die een kind in een nieuwkomerpad voor het
// eerst beantwoordt, komt in een doosje (Leitner): morgen terug, dan na 2, 4 en 8 dagen.
// Goed → volgend doosje; fout → terug naar doosje 1 (morgen weer). Na doosje 4 goed = geleerd.
// Alleen op dit apparaat (localStorage), geen account nodig.

const KEY = "lk_nk_herhaal";
const WACHT = [1, 2, 4, 8]; // dagen tot de volgende herhaling, per doosje 1-4

function vandaag(plusDagen = 0) {
  const d = new Date();
  d.setDate(d.getDate() + plusDagen);
  return d.toLocaleDateString("sv-SE"); // YYYY-MM-DD, lokale tijd
}

function lees() {
  try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch { return {}; }
}
function schrijf(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* */ }
}

// Vanuit LearnPath, bij de eerste poging op een vraag in een nieuwkomerpad.
export function noteerAntwoord(padId, stap, q, goed) {
  if (!padId || typeof q !== "string") return;
  const data = lees();
  const k = `${padId}|${q}`;
  if (!data[k]) data[k] = { pad: padId, stap, q, doos: 1, due: vandaag(1) };
  else if (!goed) Object.assign(data[k], { doos: 1, due: vandaag(1) });
  schrijf(data);
}

// Vragen die vandaag (of eerder) aan de beurt zijn, oudste eerst.
export function teHerhalen(max = 10) {
  const nu = vandaag();
  return Object.entries(lees())
    .filter(([, v]) => v.due <= nu)
    .sort((a, b) => (a[1].due < b[1].due ? -1 : 1))
    .slice(0, max)
    .map(([k, v]) => ({ key: k, ...v }));
}

export function aantalTeHerhalen() {
  const nu = vandaag();
  return Object.values(lees()).filter((v) => v.due <= nu).length;
}

// Na een herhaalvraag: goed → volgend doosje (of geleerd), fout → doosje 1.
export function herhaalResultaat(key, goed) {
  const data = lees();
  const v = data[key];
  if (!v) return;
  if (!goed) Object.assign(v, { doos: 1, due: vandaag(1) });
  else if (v.doos >= WACHT.length) delete data[key];
  else { v.doos += 1; v.due = vandaag(WACHT[v.doos - 1]); }
  schrijf(data);
}
