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
// 23 okt 2026 (Mark: "sommige kinderen worden bekeken door 2 ouders"): naast `ouder` (= de
// laatste koppeling, die gaat mee met het oefenwerk) bewaren we `ouders`: álle ouder-koppelingen
// van dit kind op dit toestel, elk { link_id, van_wie, voornaam?, at }. Oude opslag zonder
// `ouders` telt als [ouder].

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
  const nieuw = { link_id: linkId, van_wie: String(vanWie || "").trim(), at: Date.now() };
  const oud = alles[k] || {};
  const volgend = { ...oud, [r]: nieuw };
  if (r === "ouder") {
    const lijst = ouderLijst(oud).filter((x) => x.link_id !== linkId);
    volgend.ouders = [...lijst, nieuw].slice(-6);
  }
  alles[k] = volgend;
  schrijf(alles);
  // Stap 2: geschiedenis van dít toestel (eigen sessie + deze naam) meteen aan
  // de koppeling hangen, zodat de ouder niet met een leeg dashboard begint.
  if (r === "ouder") {
    try {
      supabase.rpc("koppel_mijn_data", { p_link_id: linkId, p_naam: naam }).then(() => {}).catch(() => {});
    } catch { /* best-effort */ }
  }
}

function ouderLijst(v) {
  if (Array.isArray(v?.ouders) && v.ouders.length) return v.ouders.filter((x) => x && x.link_id);
  return v?.ouder?.link_id ? [v.ouder] : [];
}

/** Alle ouder-koppelingen van deze naam op dit toestel (oudste eerst). */
export function oudersVoor(naam) {
  const k = sleutel(naam);
  return k ? ouderLijst(lees()[k]) : [];
}

/** Alle link_id's op dit toestel (voor het opzoeken van de namen). */
export function alleLinkIds() {
  const ids = new Set();
  for (const v of Object.values(lees())) {
    for (const o of ouderLijst(v)) ids.add(o.link_id);
    if (v?.leraar?.link_id) ids.add(v.leraar.link_id);
  }
  // Alleen geldige uuid's: één kapotte waarde laat de hele opvraag mislukken (400).
  return [...ids].filter((id) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(id)));
}

/**
 * Namen uit de server (RPC koppel_namen) bij de koppelingen op dit toestel zetten.
 * rijen: [{ link_id, van_wie, voornaam }]. Een eigen "van wie" op het toestel blijft staan;
 * alleen wat leeg is wordt aangevuld. Schrijft alleen als er iets verandert.
 */
export function zetKoppelNamen(rijen) {
  const per = new Map((rijen || []).filter((r) => r && r.link_id).map((r) => [r.link_id, r]));
  if (!per.size) return;
  const alles = lees();
  let veranderd = false;
  const vul = (o) => {
    const r = o && per.get(o.link_id);
    if (!r) return o;
    const n = { ...o };
    if (!n.van_wie && r.van_wie) n.van_wie = String(r.van_wie).trim();
    if (r.voornaam && n.voornaam !== r.voornaam) n.voornaam = String(r.voornaam).trim();
    if (n.van_wie !== o.van_wie || n.voornaam !== o.voornaam) veranderd = true;
    return n;
  };
  for (const [k, v] of Object.entries(alles)) {
    const nv = { ...v };
    if (v.ouder) nv.ouder = vul(v.ouder);
    if (Array.isArray(v.ouders)) nv.ouders = v.ouders.map(vul);
    else if (v.ouder) { nv.ouders = [nv.ouder]; veranderd = true; }
    if (v.leraar) nv.leraar = vul(v.leraar);
    alles[k] = nv;
  }
  if (veranderd) schrijf(alles);
}

/** Alle koppelingen van deze naam op dit toestel: { ouder?, ouders?, leraar? } of null. */
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
  if (rol) { delete alles[k][rol]; if (rol === "ouder") delete alles[k].ouders; } else delete alles[k];
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
