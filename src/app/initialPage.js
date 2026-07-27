// Deeplinks bij eerste page-load:
//   /duel/:code      — PvP-uitnodiging (WhatsApp-link)
//   ?play=obliterator — mini-game direct openen
//   ?go=<key>        — vak vanaf SEO-landingpage
//
// De pure parsers (parsePvpJoinCode, parseInitialPage) krijgen pathname/search
// als argument en zijn dus zonder window testbaar. De getInitial-wrappers
// lezen window af voor gebruik in App.jsx.

export const GO_PARAM_TO_PAGE = {
  cito: "cito",
  oefenpakket: "oefenpakket",
  tafels: "tafels",
  spelling: "spelling",
  woordenschat: "woordenschat",
  "begrijpend-lezen": "begrijpend-lezen",
  redactiesommen: "redactiesommen",
  schoolboeken: "textbook",
  leerkracht: "teacher-home",
  scorebord: "leaderboard",
  kwartiercheck: "kwartiercheck",
};

export function parsePvpJoinCode(pathname) {
  if (!pathname) return null;
  const m = pathname.match(/^\/duel\/([a-z0-9]{4,12})/i);
  return m ? m[1].toLowerCase() : null;
}

// /v/<id> — social-deep-link naar één vraag (Mark's trechter-concept 2026-06-04).
export function parseVraagId(pathname) {
  if (!pathname) return null;
  const m = pathname.match(/^\/v\/([A-Za-z0-9_-]{2,40})/);
  return m ? m[1] : null;
}

// ?pad=<id> — social-deep-link die direct een leerpad opent (Mark 2026-06-05:
// reclame-link moet rechtstreeks naar het onderwerp leiden).
export function parseLeerpadId(search = "") {
  try {
    const p = new URLSearchParams(search).get("pad");
    return p && /^[A-Za-z0-9_-]{2,60}$/.test(p) ? p : null;
  } catch { return null; }
}

export function parseInitialPage({ pathname = "", search = "" } = {}) {
  if (parsePvpJoinCode(pathname)) return "pvp-lobby";
  if (parseVraagId(pathname)) return "vraag";
  if (parseLeerpadId(search)) return "learn-path";
  if (/^\/actie(\/|$)/.test(pathname)) return "actie";
  if (/^\/dank(\/|$)/.test(pathname)) return "dank";
  if (/^\/vandaag(\/|$)/.test(pathname)) return "vandaag";
  try {
    const sp = new URLSearchParams(search);
    if (sp.get("play") === "obliterator") return "obliteratorDirect";
    const go = sp.get("go");
    if (go && GO_PARAM_TO_PAGE[go]) return GO_PARAM_TO_PAGE[go];
  } catch {}
  return "home";
}

export function getInitialPvpJoinCode() {
  if (typeof window === "undefined") return null;
  return parsePvpJoinCode(window.location.pathname);
}

export function getInitialVraagId() {
  if (typeof window === "undefined") return null;
  return parseVraagId(window.location.pathname);
}

export function getInitialLeerpadId() {
  if (typeof window === "undefined") return null;
  // Lees zowel ?pad=<id> (social-deeplink) als ?id=<id> (SEO-landingpage
  // /leren/pad?id=...). Zo overleeft het pad-id een reload — bv. de stille
  // service-worker-update die window.location.reload() doet — i.p.v. op een
  // leeg /leren/pad te belanden (blauw scherm, Mark 2026-06-16).
  try {
    const sp = new URLSearchParams(window.location.search);
    const p = sp.get("pad") || sp.get("id");
    return p && /^[A-Za-z0-9_-]{2,60}$/.test(p) ? p : null;
  } catch {
    return null;
  }
}

export function getInitialPage() {
  if (typeof window === "undefined") return "home";
  return parseInitialPage({
    pathname: window.location.pathname,
    search: window.location.search,
  });
}
