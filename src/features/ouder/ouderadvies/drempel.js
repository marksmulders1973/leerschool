// 🔒 Drempel voor het ouderdeel op een gedeeld apparaat (prototype, 7 okt 2026).
//
// Geen beveiliging, wel een drempel: het voorkomt dat een kind per ongeluk in
// de ouderweergave komt. Standaard een som die een kind tot en met groep 8
// niet uit het hoofd weet (twee getallen van twee cijfers keer elkaar); de
// ouder of verzorger kan er een pincode van 4 cijfers van maken. De pincode
// staat gehasht op het apparaat (SHA-256 met een vaste zout) — niet omdat dat
// echt veilig is (4 cijfers zijn snel te raden), maar zodat hij niet leesbaar
// in de opslag staat.

const PIN_KEY = "lk_ouder_pin";
const OPEN_KEY = "lk_ouder_open_tot";
export const OPEN_MINUTEN = 15;

/** Een som als { vraag: "23 × 14", antwoord: 322 }. `rnd` voor tests. */
export function maakSom(rnd = Math.random) {
  const a = 12 + Math.floor(rnd() * 27); // 12..38
  const b = 12 + Math.floor(rnd() * 17); // 12..28
  return { vraag: `${a} × ${b}`, antwoord: a * b };
}

async function hash(pin) {
  const data = new TextEncoder().encode(`leerkwartier-ouder:${pin}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

export function heeftPin() {
  try { return !!localStorage.getItem(PIN_KEY); } catch { return false; }
}

export async function zetPin(pin) {
  if (!/^\d{4}$/.test(String(pin || ""))) return false;
  try { localStorage.setItem(PIN_KEY, await hash(pin)); return true; } catch { return false; }
}

export async function pinKlopt(pin) {
  try { return (await hash(String(pin || ""))) === localStorage.getItem(PIN_KEY); } catch { return false; }
}

/** Na de drempel blijft het ouderdeel even open (in deze tab). */
export function markeerOpen() {
  try { sessionStorage.setItem(OPEN_KEY, String(Date.now() + OPEN_MINUTEN * 60000)); } catch { /* */ }
}
export function isOpen() {
  try { return Number(sessionStorage.getItem(OPEN_KEY) || 0) > Date.now(); } catch { return false; }
}
export function sluit() {
  try { sessionStorage.removeItem(OPEN_KEY); } catch { /* */ }
}
