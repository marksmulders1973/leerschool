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
  obliterator: "/obliterator",
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
