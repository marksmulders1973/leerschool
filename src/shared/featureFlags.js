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

/**
 * Mag een gebruiker leerkracht-features zien (TeacherHome, CreateQuiz,
 * StudentProgress voor leerkracht, ClassManager)?
 *
 * Per audit-3 S2: leerkracht-flow is een B2B-koop-cyclus (maanden,
 * pilots) terwijl Cito-ouder-ICP individueel + direct koopt. Tot
 * post-PMF blijven teacher-features achter feature-flag voor non-teacher.
 *
 * Regels:
 *   - Admin (Mark): altijd ja.
 *   - Flag UIT: ja (huidig gedrag — anyone can see).
 *   - Flag AAN + authUser met role 'teacher' (of email-domain school): ja.
 *   - Flag AAN + andere: NEE.
 *
 * @param {object|null} authUser — Supabase auth-user
 * @param {string|null} [userRole] — gebruikers-rol uit profiel ('leerling' | 'teacher' | 'ouder' | etc.)
 * @returns {boolean}
 */
export function teacherFeaturesVisibleForUser(authUser, userRole = null) {
  // Admin altijd zichtbaar
  if (authUser?.email?.toLowerCase() === "mark-smulders@hotmail.com") return true;
  const flagAan = readBoolEnv("VITE_HIDE_TEACHER_FOR_NON_TEACHERS", false);
  if (!flagAan) return true; // huidig gedrag
  // Flag aan: alleen voor expliciete teacher-rol
  if (userRole === "teacher" || userRole === "leerkracht") return true;
  return false;
}

/**
 * Mogen interactieve 3D-componenten in leerpad-stappen renderen?
 *
 * Per audit-3 S3: 3D-modellen kosten veel ontwikkeltijd (Claude.ai TSX-
 * workflow per model) maar bedienen alleen VO-onderbouw (klas 1-3
 * meetkunde). Voor Cito-ouder-ICP (groep 6-8) = nul ROI. Beslissing:
 * geen NIEUWE 3D-modellen tot post-PMF; bestaande blijven werken,
 * maar via deze flag kan Mark ze tijdelijk dichtschakelen voor
 * performance/data-besparing op trage netwerken.
 *
 * Default true (huidig gedrag — 3D aan).
 *
 * @returns {boolean}
 */
export function interactive3DEnabled() {
  const hide = readBoolEnv("VITE_HIDE_3D_IN_PATHS", false);
  return !hide;
}

function readBoolEnv(key, fallback) {
  try {
    const v = (import.meta.env?.[key] ?? "").toString().toLowerCase().trim();
    if (v === "true" || v === "1" || v === "yes") return true;
    if (v === "false" || v === "0" || v === "no") return false;
  } catch {}
  return fallback;
}
