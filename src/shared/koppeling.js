// 🔗 Koppeling-identiteit op het kind-toestel (Mark-go 2 sep 2026, stap 1).
//
// Probleem dat dit oplost: de "identiteit" van een kind was de getypte
// voornaam + een vluchtige anonieme sessie. Naamgenoten uit andere gezinnen
// lekten in het ouder-dashboard, hernoemen brak de koppeling, twee kinderen
// op één tablet deelden één sessie.
//
// Nu: bij het claimen van een koppelcode geeft de RPC `link_id` terug
// (= parent_child_links.id resp. leraar_leerling_links.id). Dat bewaren we
// hier per kindnaam op het toestel, en élke score-, leerpad- en beheersings-
// rij schrijft `link_id` mee. De ouder-kant leest (stap 2) op link_id, met
// naam-fallback voor oude rijen.
//
// Opslag: localStorage "lk_koppelingen" = { "<naam lower>": { ouder?: {...}, leraar?: {...} } }
// waarbij {...} = { link_id, van_wie, at }.

const KEY = "lk_koppelingen";
export const KOPPELING_EVENT = "lk-koppeling-changed";

function lees() {
  try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch { return {}; }
}
function schrijf(obj) {
  try { localStorage.setItem(KEY, JSON.stringify(obj)); } catch { /* */ }
  try { window.dispatchEvent(new CustomEvent(KOPPELING_EVENT)); } catch { /* */ }
}
const sleutel = (naam) => String(naam || "").trim().toLowerCase();

/** Na een geslaagde claim_link_code: koppeling op dit toestel vastleggen. */
export function bewaarKoppeling({ naam, linkId, rol = "ouder", vanWie = "" }) {
  const k = sleutel(naam);
  if (!k || !linkId) return;
  const alles = lees();
  const r = rol === "leraar" ? "leraar" : "ouder";
  alles[k] = { ...(alles[k] || {}), [r]: { link_id: linkId, van_wie: String(vanWie || "").trim(), at: Date.now() } };
  schrijf(alles);
}

/** Alle koppelingen van deze naam op dit toestel: { ouder?, leraar? } of null. */
export function koppelingVoor(naam) {
  const k = sleutel(naam);
  if (!k) return null;
  const v = lees()[k];
  return v && (v.ouder || v.leraar) ? v : null;
}

/** Het ouder-link_id voor deze naam (gaat mee in leaderboard/learn_progress/mastery). */
export function linkIdVoor(naam, rol = "ouder") {
  const v = koppelingVoor(naam);
  return v?.[rol]?.link_id || null;
}

/** Koppeling van dit toestel halen (bv. na "verwijder koppeling" of naamwissel-opruiming). */
export function vergeetKoppeling(naam, rol = null) {
  const k = sleutel(naam);
  if (!k) return;
  const alles = lees();
  if (!alles[k]) return;
  if (rol) delete alles[k][rol]; else delete alles[k];
  if (alles[k] && !alles[k].ouder && !alles[k].leraar) delete alles[k];
  schrijf(alles);
}

/** Hulpje voor schrijfpaden: voeg link_id toe aan een rij als die naam gekoppeld is. */
export function metLinkId(row) {
  try {
    if (!row || row.link_id) return row;
    const id = linkIdVoor(row.player_name);
    return id ? { ...row, link_id: id } : row;
  } catch { return row; }
}
