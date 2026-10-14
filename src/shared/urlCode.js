// 🔗 Wat betekent `?code=` in de adresbalk? (Mark 14 okt 2026, idee 6 uit het dagrapport)
//
// Aanleiding: /koppelen?code=TBZ5WJ (ouderkoppelcode) werd door de globale lezer in App.jsx
// als toets-deelcode opgevat → "Toets met code … niet gevonden" over de koppelpagina heen.
// Dit is nu de ENIGE plek die per route zegt wat `?code=` betekent. Nieuwe link met ?code=?
// Voeg de route hier toe én in de test (src/shared/urlCode.test.js), anders valt hij terug op "toets".
//
// Andere parameters hebben hun eigen lezer en hóren hier niet: ?partner= en ?vriend= (bron.js),
// ?pad= / ?id= (leerpad-deeplink), ?samen= (park), ?ic= (interne bezoeken).

/** @typedef {"toets"|"koppelen"} CodeBetekenis */

/** Routes waar `?code=` iets anders is dan een toets-deelcode. Volgorde: eerste match wint. */
export const CODE_ROUTES = [
  { patroon: /^\/koppelen(\/|$)/, betekenis: "koppelen" }, // ouder- of leerkrachtkoppelcode (claim_link_code)
];

/** Standaard: een deelcode van een toets of takenlijst (findQuizByCode). */
export const CODE_STANDAARD = "toets";

/**
 * @param {string} pathname  bv. window.location.pathname
 * @returns {CodeBetekenis}
 */
export function betekenisVanCode(pathname) {
  const p = String(pathname || "/");
  const hit = CODE_ROUTES.find((r) => r.patroon.test(p));
  return hit ? hit.betekenis : CODE_STANDAARD;
}

/**
 * Leest `?code=` alleen als hij op deze route een toets-deelcode is (max 8 tekens, hoofdletters).
 * @param {{pathname:string, search:string}} loc  bv. window.location
 * @returns {string|null}
 */
export function toetsCodeUitUrl(loc) {
  if (betekenisVanCode(loc?.pathname) !== "toets") return null;
  let code = "";
  try { code = new URLSearchParams(loc?.search || "").get("code") || ""; } catch { return null; }
  code = code.trim();
  // Supabase-OAuth zet óók ?code= (lange UUID-achtige waarde) → nooit als toetscode lezen.
  if (!code || code.length > 8) return null;
  return code.toUpperCase();
}
