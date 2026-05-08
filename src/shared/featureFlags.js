// Feature-flags — sprint-5 S1 (audit-3 2026-05-08).
//
// Doel: ICP-conversie verbeteren door 'spelletjes' (OBLITERATOR, PvP,
// Hall of Fame) te verbergen voor niet-ingelogde bezoekers. Bezorgde
// Cito-ouder ziet zo eerst een serieus oefenplatform.
//
// Activeren via Vercel env-var:
//   VITE_HIDE_GAME_FOR_GUESTS=true
//
// Default = false zodat huidig gedrag behouden blijft tot Mark de
// flag actief in productie aanzet.

/**
 * Mag een gebruiker de game-features (OBLITERATOR, PvP, Hall of Fame) zien?
 *
 * Regels:
 *   - Ingelogde gebruikers: altijd ja (game = beloning).
 *   - Niet-ingelogd + flag UIT: ja (huidig gedrag).
 *   - Niet-ingelogd + flag AAN + geen deeplink: NEE (ICP-focus).
 *   - Niet-ingelogd + flag AAN + deeplink (?play=obliterator of /duel/...): JA
 *     (viral-hook van gedeelde scores moet blijven werken).
 *
 * @param {object|null} authUser — Supabase auth-user of null
 * @param {boolean} [hasDeepLink=false] — kwam de bezoeker binnen via een
 *   game-deeplink (vanuit gedeelde-score-WhatsApp etc.)?
 * @returns {boolean}
 */
export function gameVisibleForUser(authUser, hasDeepLink = false) {
  if (authUser) return true;
  if (hasDeepLink) return true;
  const flagAan = readBoolEnv("VITE_HIDE_GAME_FOR_GUESTS", false);
  return !flagAan;
}

/**
 * Detecteer of de huidige URL een game-deeplink is.
 * Gebruikt window.location als beschikbaar.
 */
export function urlHasGameDeepLink() {
  if (typeof window === "undefined") return false;
  try {
    const search = window.location.search || "";
    if (search.includes("play=obliterator")) return true;
    if (window.location.pathname.startsWith("/duel/")) return true;
  } catch {}
  return false;
}

function readBoolEnv(key, fallback) {
  try {
    const v = (import.meta.env?.[key] ?? "").toString().toLowerCase().trim();
    if (v === "true" || v === "1" || v === "yes") return true;
    if (v === "false" || v === "0" || v === "no") return false;
  } catch {}
  return fallback;
}
