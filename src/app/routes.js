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
  examens: "/examens",
  herkansing: "/herkansing",
  "cito-leerpad-toets": "/doorstroomtoets-oefentoets",
  rondleiding: "/rondleiding",
  oefenpakket: "/oefenpakket",
  // Leesladder — printbaar begrijpend-lezen-pakket dat klein begint (5 zinnen)
  // en opbouwt naar toets-lengte (Mark 2026-07-02, idee via Brian).
  leesladder: "/leesladder",
  // Print-hub + tafel-werkbladen (Mark 2026-07-02: "maak duidelijk wat printbaar is")
  printen: "/printen",
  tafelbladen: "/tafelbladen",
  redactiebladen: "/redactiebladen",
  dictees: "/dictees",
  // Branded dagkaart-generator voor social (Mark 3 jul)
  dagkaart: "/dagkaart",
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
  // Spel van de maand (tijdelijk, ~1 maand) — bedankje voor onze supporter.
  supporterGame: "/supporter",
  // Zookwartier "Mijn Park" — 3D verzamel-dierentuin als beloningsspel (lazy
  // three.js). Verving 2026-06-20 de oude spellen-hub; /spellen + /spel = aliassen.
  zoo: "/dierentuin",
  // "Maatje in je broekzak" — je droom-maatje altijd bij je: praten, groeit
  // door te leren, en altijd een link terug naar de leer-app (2026-06-30).
  maatje: "/maatje",
  // Leerkracht
  "create-quiz": "/leerkracht/toets-maken",
  "quiz-preview": "/leerkracht/toets-preview",
  "class-manager": "/leerkracht/klassen",
  lobby: "/lobby",
  // Pro / admin
  pro: "/pro",
  upgrade: "/upgrade",
  "admin-feedback": "/admin/feedback",
  "admin-stats": "/admin/stats",
  "admin-ai-referrers": "/admin/ai-referrers",
  wishes: "/tips",
  actie: "/actie",
  dank: "/dank",
  vandaag: "/vandaag",
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
  // 2026-06-20: de oude spellen-hub is vervangen door "Mijn Park" (3D-dierentuin).
  // /spel en /spellen openen nu het park. De directe game-deeplinks /obliterator
  // en /supporter blijven resolvable (lopende ads breken niet) maar zijn nergens
  // in de app nog klikbaar.
  "/spel": "zoo",
  "/spellen": "zoo",
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
