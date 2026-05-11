// Route-tabel: bron-van-waarheid voor page-keys ↔ URL-paden.
//
// Tijdens de incrementele migratie naar React Router (P1.2 uit de
// rebuild-roadmap) leeft `page` nog als useState in App.jsx. Deze tabel
// koppelt de oude page-keys aan URL-paden zodat:
//   1. Een wijziging in `page` (oude flow, setPage) de URL bijwerkt.
//   2. Een directe URL-bezoek (deep link, back-button) `page` zet.
// Beide flows werken parallel tot we elke pagina als `<Route>` rendren.

export const PAGE_TO_PATH = {
  home: "/",
  "home-v2": "/v2",
  "home-v3": "/v3",
  // Leerflow
  "learn-paths-hub": "/leren",
  "learn-path": "/leren/pad",
  curriculum: "/leerlijn",
  "learn-meebezig": "/komt-eraan",
  "my-mastery": "/voortgang",
  // Voortgang & kampioenen
  kampioenen: "/kampioenen",
  leaderboard: "/scorebord",
  "student-progress": "/voortgang/leerling",
  "teacher-progress": "/voortgang/leerkracht",
  // Rolspecifieke homes
  "student-home": "/leerling",
  "teacher-home": "/leerkracht",
  "ouder-dashboard": "/ouder",
  // Oefenen
  "self-study": "/zelfstudie",
  textbook: "/oefenen",
  cito: "/cito",
  tafels: "/tafels",
  redactiesommen: "/redactiesommen",
  spelling: "/spelling",
  woordenschat: "/woordenschat",
  "begrijpend-lezen": "/begrijpend-lezen",
  // Quiz / spel
  play: "/quiz",
  results: "/resultaat",
  // /obliterator deeplink → de play-versie (niet de "Direct"-conversie-flow,
  // die werkt alleen via ?play=obliterator query met onboarding na 3 deaths).
  obliteratorPlay: "/obliterator",
  // Leerkracht
  "create-quiz": "/leerkracht/toets-maken",
  "quiz-preview": "/leerkracht/toets-preview",
  "class-manager": "/leerkracht/klassen",
  lobby: "/lobby",
  // Pro / admin
  pro: "/pro",
  upgrade: "/upgrade",
  "admin-feedback": "/admin/feedback",
};

// Path-aliassen: extra URL → bestaande page-key. Voor leesvriendelijke deep-links
// die NIET de canonical PAGE_TO_PATH overschrijven (canonical blijft de waarde
// van PAGE_TO_PATH zodat setPage("X") naar de canonical URL gaat).
//
// /spel — alias voor /obliterator. Visie-bewaker maand 1 (2026-05-10):
// OBLITERATOR uit hoofd-nav, maar zoon kan via /spel direct naar het spel
// (vriendelijker dan /obliterator).
// /leaderboard — Engelse alias voor /scorebord (canonical = NL). Backward-compat
// voor oude deeplinks en testchecklists (2026-05-11).
const PATH_ALIASES = {
  "/spel": "obliteratorPlay",
  "/leaderboard": "leaderboard",
};

// Reverse-lookup: pad → page-key. Lange paden eerst zodat /leren/pad
// niet geclashed wordt met /leren.
export const PATH_TO_PAGE = (() => {
  const entries = Object.entries(PAGE_TO_PATH);
  // Sort op padlengte aflopend voor specifieke matches eerst
  entries.sort((a, b) => b[1].length - a[1].length);
  const map = new Map();
  for (const [page, path] of entries) {
    if (!map.has(path)) map.set(path, page);
  }
  // Aliassen toevoegen — overschrijft NIET de canonical entries.
  for (const [path, page] of Object.entries(PATH_ALIASES)) {
    if (!map.has(path)) map.set(path, page);
  }
  return map;
})();

export function pathForPage(page) {
  return PAGE_TO_PATH[page] || null;
}

export function pageForPath(pathname) {
  // Exact match eerst
  if (PATH_TO_PAGE.has(pathname)) return PATH_TO_PAGE.get(pathname);
  // Startsmet-match voor sub-routes (later voor /leren/:pathId etc.)
  for (const [path, page] of PATH_TO_PAGE) {
    if (pathname.startsWith(path) && path !== "/") return page;
  }
  return "home";
}
