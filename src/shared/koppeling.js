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

import supabase from "../supabase.js";

const KEY = "lk_koppelingen";
export const KOPPELING_EVENT = "lk-koppeling-changed";

// 🧒 "Laat <kind> hier oefenen" (2 sep 2026): de ouder zet z'n eigen toestel
// tijdelijk op het kind-profiel. Zolang deze sleutel staat, is het account
// van de ouder, maar het profiel op het scherm van het kind. useAuth mag dan
// het server-profiel (naam/rol/groep van de ouder) NIET over het kind heen
// zetten bij herladen, en profiel-schrijfacties (groep kiezen, hernoemen)
// mogen het ouder-profiel op de server NIET overschrijven met het kind.
export const TERUG_NAAR_OUDER_KEY = "lk_terug_naar_ouder";

/** { naam, at } van de ouder waar dit toestel naar terug kan, of null. */
export function kindWisselActief() {
  try {
    const v = JSON.parse(localStorage.getItem(TERUG_NAAR_OUDER_KEY) || "null");
    return v && v.naam ? v : null;
  } catch { return null; }
}

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
  // Stap 2: geschiedenis van dít toestel (eigen sessie + deze naam) meteen aan
  // de koppeling hangen, zodat de ouder niet met een leeg dashboard begint.
  if (r === "ouder") {
    try {
      supabase.rpc("koppel_mijn_data", { p_link_id: linkId, p_naam: naam }).then(() => {}).catch(() => {});
    } catch { /* best-effort */ }
  }
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

/** Hulpje voor schrijfpaden: voeg link_id toe aan een rij als die naam gekoppeld is.
 *
 * Ouder gaat vóór leraar (4 sep 2026). Een rij draagt één link_id, en de
 * ouder-koppeling is de persoonlijkste: die hoort bij één kind in één gezin.
 * Was er geen ouder-koppeling, dan valt hij terug op de leraar-koppeling —
 * zonder die fallback schreef een schoolleerling helemaal geen link_id en bleef
 * het leerkracht-overzicht per definitie leeg.
 *
 * Bekende grens: is een kind zowel thuis als op school gekoppeld, dan wint de
 * ouder en ziet de leerkracht dit werk niet via link_id. Zie
 * docs/KOPPELING-GRENZEN.md.
 */
export function metLinkId(row) {
  try {
    if (!row || row.link_id) return row;
    const id = linkIdVoor(row.player_name) || linkIdVoor(row.player_name, "leraar");
    return id ? { ...row, link_id: id } : row;
  } catch { return row; }
}
