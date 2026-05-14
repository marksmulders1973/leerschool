// Mapping: boek-deel-id × hoofdstuk-index → leerpad-id(s).
//
// Mark visie 2026-04-30 (memory idea_studiebol_universal_concepts):
// "Leerpaden bouwen per concept (parabolen, pythagoras, present-tenses),
//  niet per boek/methode. Mapping-laag voor methodes erbovenop."
//
// Deze mapping maakt dat concreet: bij klik op "Stepping Stones H3" of
// "Getal & Ruimte Havo/vwo 2 H6" weet de app welke leerpaden het concept
// behandelen. Eén leerpad dekt dus 5+ methodes — content-werk schaalt
// niet met aantal boeken.
//
// Schema:
//   bookId: [
//     ["leerpad-id-1", "leerpad-id-2"],  // hoofdstuk 1
//     ["leerpad-id-3"],                  // hoofdstuk 2
//     [],                                 // hoofdstuk 3 (geen direct leerpad)
//   ]
//
// Index 0 = eerste hoofdstuk. Lege array = nog niet gemapt. Eén hoofdstuk
// kan meerdere leerpaden hebben (multidisciplinair) of slechts één.
//
// Start: 2026-05-14 met 7 boeken, ~50 hoofdstuk-mappings. Volgende batches
// breiden uit naar talen-methodes (Stepping Stones, All Right, etc).

export const BOOK_CHAPTER_TO_LEARN_PATH = {
  // ───── Biologie voor Jou (BvJ) ──────────────────────────────────
  "bvj-havo-vwo-1": [
    [],                                                  // Wat is biologie?
    ["fotosynthese-biologie"],                          // Planten
    ["cel-biologie"],                                    // Organen en cellen
    ["dierenklassen-po"],                                // Ordening
    [],                                                  // Stevigheid en beweging
    [],                                                  // Waarneming, gedrag en regeling
    ["voortplanting-hormonen-biologie"],                 // Voortplanting bij planten en dieren
  ],
  "bvj-havo-vwo-2": [
    [],                                                  // Verbranding en ademhaling
    ["gezonde-voeding-po"],                              // Voeding en vertering
    [],                                                  // Bloedsomloop
    ["genetica-erfelijkheid-biologie", "evolutie-mens-po"], // Erfelijkheid en evolutie
    ["ecosystemen-biologie"],                            // Ecologie en duurzaamheid
  ],
  "bvj-vmbo-onderbouw": [
    ["dierenklassen-po", "fotosynthese-biologie"],       // Planten en dieren
    ["cel-biologie"],                                    // Organen en cellen
    ["dierenklassen-po"],                                // Ordening
    [],                                                  // Stevigheid en beweging
    [],                                                  // Waarneming en regeling
    ["voortplanting-hormonen-biologie"],                 // Voortplanting
  ],
  "bvj-vmbo-bovenbouw": [
    [],                                                  // Verbranding en ademhaling
    ["gezonde-voeding-po"],                              // Voeding en vertering
    [],                                                  // Bloedsomloop
    ["genetica-erfelijkheid-biologie"],                  // Erfelijkheid
    ["ecosystemen-biologie"],                            // Ecologie
  ],
  "nectar": [
    ["cel-biologie"],                                    // Cellen en weefsels
    ["gezonde-voeding-po"],                              // Voeding en spijsvertering
    [],                                                  // Transport
    [],                                                  // Ademhaling
    [],                                                  // Uitscheiding
    [],                                                  // Regeling en gedrag
    [],                                                  // Beweging
    ["voortplanting-hormonen-biologie"],                 // Voortplanting
    ["genetica-erfelijkheid-biologie"],                  // Erfelijkheid
    ["evolutie-mens-po"],                                // Evolutie
    ["ecosystemen-biologie"],                            // Ecologie
  ],
  "10voorbiologie": [
    ["cel-biologie"],                                    // Cellen
    [],                                                  // Weefsels en organen
    ["gezonde-voeding-po"],                              // Spijsvertering
    [],                                                  // Transport
    [],                                                  // Ademhaling
    [],                                                  // Uitscheiding
    [],                                                  // Zintuigen
    [],                                                  // Hormonen en regeling
    ["voortplanting-hormonen-biologie"],                 // Voortplanting
    ["genetica-erfelijkheid-biologie"],                  // Erfelijkheid
    ["evolutie-mens-po"],                                // Evolutie
    ["ecosystemen-biologie"],                            // Ecologie
  ],

  // ───── Wiskunde — Getal & Ruimte (GR) ───────────────────────────
  "gr-hv1-deel1": [
    ["vlakke-figuren-po"],                               // Figuren
    ["cijferend-rekenen", "negatieve-getallen"],         // Getallen en formules
    ["coordinatenstelsel"],                              // Assenstelsel en grafieken
    [],                                                  // Hoeken en symmetrie
    ["cijferend-rekenen", "tafels-po"],                  // Reken
  ],
  "gr-hv1-deel2": [
    ["rekenen-met-letters", "lineaire-formules"],        // Formules en letters
    ["maten-eenheden"],                                  // Meten
    ["rekenen-met-letters", "machten"],                  // Herleiden en machten
    ["vlakke-figuren"],                                  // Symmetrie en vlakke figuren
  ],
  "gr-hv2": [
    ["rekenen-met-letters"],                             // Rekenen met letters
    ["vlakke-figuren", "pythagoras"],                    // Afstanden en oppervlakte
    ["lineaire-formules", "vergelijkingen-oplossen"],    // Lineaire formules en vergelijkingen
    ["procenten", "grafieken-lezen-po"],                 // Procenten en diagrammen
    ["kwadraten-wortels"],                               // Kwadraten en wortels
    ["pythagoras"],                                      // De stelling van Pythagoras
    ["kwadratische-vergelijkingen", "parabolen"],        // Kwadratische vergelijkingen
    ["meetkunde-bouwsels"],                              // Inhoud en vergroten
  ],
  "gr-hv3": [
    ["lineaire-formules", "vergelijkingen-oplossen"],    // Lineaire problemen
    ["vlakke-figuren"],                                  // Gelijkvormigheid
    ["kwadratische-vergelijkingen", "parabolen"],        // Kwadratische problemen
    ["procenten", "statistiek"],                         // Procenten en statistiek
    ["rekenen-met-letters", "machten"],                  // Algebraïsche vaardigheden
    ["kwadratische-vergelijkingen"],                     // Kwadratische vergelijkingen en ongelijkheden
    ["goniometrie", "pythagoras"],                       // Goniometrie
    ["lineaire-formules", "exponentieel"],               // Allerlei verbanden
    ["statistiek", "kansrekening"],                      // Spreiding, tellen en kans
  ],
  "gr-hv4": [
    ["tabellen-grafieken", "grafieken-lezen-po"],        // Tabellen en grafieken
    ["statistiek"],                                      // De statistische cyclus
    ["lineaire-formules"],                               // Lineaire verbanden
    ["kansrekening"],                                    // Handig tellen
    ["differentieren"],                                  // Veranderingen
    ["rekenen-met-letters", "machten"],                  // Rekenregels en formules
    ["statistiek"],                                      // Statistiek en beslissingen
    ["statistiek"],                                      // Statistiek met de computer
  ],

  // ───── Geschiedenis ─────────────────────────────────────────────
  "feniks": [
    ["tijdvakken-nederland-po"],                         // Jagers en boeren
    ["oudheid-egyptenaren-grieken-romeinen-po", "romeinen-geschiedenis"], // Grieken en Romeinen
    ["middeleeuwen-geschiedenis"],                       // Monniken en ridders
    ["middeleeuwen-geschiedenis"],                       // Steden en staten
    ["ontdekkingsreizen-po", "gouden-eeuw-geschiedenis"], // Ontdekkers en hervormers
    ["gouden-eeuw-geschiedenis"],                        // Regenten en vorsten
    ["franse-revolutie-geschiedenis"],                   // Pruiken en revoluties
    ["industriele-revolutie-po"],                        // Burgers en stoommachines
    ["wereldoorlog1-geschiedenis", "wereldoorlog2-geschiedenis"], // Wereldoorlogen
    ["koude-oorlog-modern-po"],                          // Televisie en computers
  ],
  "sprekend-verleden": [
    ["tijdvakken-nederland-po"],                         // Prehistorie
    ["oudheid-egyptenaren-grieken-romeinen-po"],         // Grieken en Romeinen
    ["middeleeuwen-geschiedenis"],                       // Middeleeuwen
    ["ontdekkingsreizen-po", "gouden-eeuw-geschiedenis"], // Nieuwe Tijd
    ["franse-revolutie-geschiedenis"],                   // Revoluties
    ["industriele-revolutie-po"],                        // Industrialisatie
    ["wereldoorlog1-geschiedenis", "wereldoorlog2-geschiedenis"], // Wereldoorlogen
    ["koude-oorlog-modern-po"],                          // Koude Oorlog
    [],                                                  // Globalisering
  ],
  "memo-geschiedenis": [
    [],                                                  // De oudste tijden
    ["oudheid-egyptenaren-grieken-romeinen-po"],         // Grieken en Romeinen
    ["middeleeuwen-geschiedenis"],                       // De Middeleeuwen
    [],                                                  // Reformatie en Renaissance
    ["gouden-eeuw-geschiedenis"],                        // De Gouden Eeuw
    ["franse-revolutie-geschiedenis"],                   // Revoluties
    ["industriele-revolutie-po"],                        // Industrialisatie
    ["wereldoorlog1-geschiedenis", "wereldoorlog2-geschiedenis"], // De 20e eeuw
    ["koude-oorlog-modern-po"],                          // Na 1945
  ],

  // ───── Economie — Pincode ──────────────────────────────────────
  "pincode": [
    [],                                                  // Wat is economie?
    ["vraag-aanbod-economie"],                           // Vraag en aanbod
    ["pincode-geld-sparen-lenen"],                       // Geld en betalen
    ["pincode-werk-arbeidsmarkt", "pincode-inkomen-welvaart"], // Werken en inkomen
    ["pincode-overheid", "pincode-belasting"],           // Overheid en beleid
    ["pincode-buitenland-eu"],                           // Internationaal
  ],
  "kern-economie": [
    [],                                                  // Schaarste en keuzes
    ["vraag-aanbod-economie"],                           // Vraag en aanbod
    ["pincode-geld-sparen-lenen"],                       // Geld en banken
    ["pincode-overheid"],                                // Overheid
    ["pincode-buitenland-eu"],                           // Internationaal
  ],
};

// ──────────────────────────────────────────────────────────────────
// API
// ──────────────────────────────────────────────────────────────────

/**
 * Returns array of leerpad-ids voor een specifiek hoofdstuk.
 * @param {string} bookId - bv. "gr-hv2"
 * @param {number} chapterIdx - 0-based index van het hoofdstuk
 * @returns {string[]} leerpad-ids, of [] als geen mapping
 */
export function getLearnPathsForChapter(bookId, chapterIdx) {
  const book = BOOK_CHAPTER_TO_LEARN_PATH[bookId];
  if (!Array.isArray(book)) return [];
  const ch = book[chapterIdx];
  return Array.isArray(ch) ? ch.slice() : [];
}

/**
 * Returns alle (bookId, chapterIdx)-tuples waarin dit leerpad voorkomt.
 * Reverse-lookup: voor leerpad "pythagoras" → welke boekhoofdstukken
 * behandelen dit concept?
 * @param {string} pathId
 * @returns {Array<{bookId, chapterIdx}>}
 */
export function getChaptersForLearnPath(pathId) {
  const out = [];
  for (const [bookId, chapters] of Object.entries(BOOK_CHAPTER_TO_LEARN_PATH)) {
    chapters.forEach((paths, chapterIdx) => {
      if (Array.isArray(paths) && paths.includes(pathId)) {
        out.push({ bookId, chapterIdx });
      }
    });
  }
  return out;
}

/**
 * Snelle check: is er een mapping voor dit hoofdstuk?
 */
export function hasLearnPathMapping(bookId, chapterIdx) {
  return getLearnPathsForChapter(bookId, chapterIdx).length > 0;
}

/**
 * Hoeveel boekhoofdstukken delen dit leerpad? Gebruikt voor UI-badge
 * ("Dit pad wordt behandeld in 5 boeken").
 */
export function countChaptersUsingLearnPath(pathId) {
  return getChaptersForLearnPath(pathId).length;
}

/**
 * Statistieken voor audit: hoeveel hoofdstukken zijn gemapt vs. ongemapt?
 */
export function getMappingStats() {
  let totalChapters = 0;
  let mappedChapters = 0;
  let totalMappings = 0;
  for (const chapters of Object.values(BOOK_CHAPTER_TO_LEARN_PATH)) {
    totalChapters += chapters.length;
    for (const ch of chapters) {
      if (Array.isArray(ch) && ch.length > 0) {
        mappedChapters++;
        totalMappings += ch.length;
      }
    }
  }
  return {
    books: Object.keys(BOOK_CHAPTER_TO_LEARN_PATH).length,
    totalChapters,
    mappedChapters,
    coverage: totalChapters ? Math.round((mappedChapters / totalChapters) * 100) : 0,
    totalMappings,
  };
}
