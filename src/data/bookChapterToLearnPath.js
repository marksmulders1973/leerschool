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
  "economie-integraal": [
    [],                                                  // Inleiding economie
    ["vraag-aanbod-economie"],                           // Markten en prijzen
    ["pincode-ondernemen"],                              // Productie en bedrijven
    ["pincode-werk-arbeidsmarkt", "pincode-inkomen-welvaart"], // Arbeid en lonen
    ["pincode-overheid", "pincode-belasting"],           // Overheidseconomie
    ["pincode-geld-sparen-lenen"],                       // Geld en banken
    ["pincode-buitenland-eu", "pincode-ontwikkelingslanden"], // Internationale economie
    ["bbp-conjunctuur-economie"],                        // Groei en welvaart
  ],

  // ───── Wiskunde — Moderne Wiskunde (MW) ─────────────────────────
  "mw-hv1a": [
    ["cijferend-rekenen"],                               // Rekenen
    ["negatieve-getallen"],                              // Negatieve getallen
    ["lineaire-formules", "vergelijkingen-oplossen"],    // Formules en vergelijkingen
    ["vlakke-figuren", "meetkunde-bouwsels"],            // Oppervlakte en inhoud
    ["rekenen-met-letters"],                             // Rekenen met variabelen
    ["vlakke-figuren"],                                  // Vlakke figuren
  ],
  "mw-vwo1a": [
    ["meetkunde-bouwsels"],                              // Ruimtefiguren
    ["cijferend-rekenen", "negatieve-getallen"],         // Getallen
    ["coordinatenstelsel", "grafieken-lezen-po"],        // Grafieken
    ["vlakke-figuren"],                                  // Lijnen en hoeken
    ["verhoudingen"],                                    // Verhoudingen
    ["lineaire-formules", "coordinatenstelsel"],         // Formules en grafieken
  ],
  "mw-havo-a1": [
    ["cijferend-rekenen", "rekenen-met-letters"],        // Rekenen
    ["lineaire-formules"],                               // Verbanden
    [],                                                  // Vaardigheden 1
    ["statistiek"],                                      // Statistische vraagstellingen
    ["kansrekening"],                                    // Systematisch tellen
    [],                                                  // Vaardigheden 2
    ["lineaire-formules", "exponentieel"],               // Lineaire en exponentiële groei
    ["coordinatenstelsel", "vergelijkingen-oplossen"],   // Grafieken en vergelijkingen
    [],                                                  // Vaardigheden 3
  ],
  "mw-vwo-b1": [
    ["kansrekening"],                                    // Systematisch tellen
    ["lineaire-formules"],                               // Verbanden
    [],                                                  // Vaardigheden 1
    ["machten"],                                         // Machtsfuncties
    [],                                                  // Vaardigheden 2
    ["exponentieel"],                                    // Exponentiële functies
    ["differentieren"],                                  // Veranderingen
    [],                                                  // Vaardigheden 3
  ],

  // ───── Wiskunde — KERN ──────────────────────────────────────────
  "kern-wis-hv1a": [
    ["cijferend-rekenen", "negatieve-getallen"],         // Getallen en bewerkingen
    ["verhoudingen", "verhoudingen-po"],                 // Verhoudingen
    ["vlakke-figuren", "meetkunde-bouwsels"],            // Meetkunde
    ["rekenen-met-letters"],                             // Algebra
    ["statistiek"],                                      // Statistiek
  ],
  "kern-wis-hv1b": [
    ["breuken", "procenten"],                            // Breuken en procenten
    ["rekenen-met-letters", "vergelijkingen-oplossen"],  // Algebra
    ["vlakke-figuren", "pythagoras"],                    // Meetkunde
    ["lineaire-formules", "coordinatenstelsel"],         // Functies en grafieken
    ["kansrekening"],                                    // Kansen
  ],
  "kern-wis-hv2a": [
    ["lineaire-formules"],                               // Lineaire verbanden
    ["kwadratische-vergelijkingen", "parabolen"],        // Kwadratische verbanden
    ["pythagoras", "vlakke-figuren"],                    // Meetkunde
    ["statistiek"],                                      // Statistiek
    ["stelsels"],                                        // Stelsels
  ],
  "gr-vwo1": [
    ["cijferend-rekenen", "negatieve-getallen"],         // Getallen en bewerkingen
    ["verhoudingen", "procenten"],                       // Verhoudingen en procenten
    ["maten-eenheden", "vlakke-figuren"],                // Meten en meetkunde
    ["lineaire-formules", "coordinatenstelsel"],         // Formules en grafieken
    ["statistiek", "kansrekening"],                      // Statistiek en kansen
    ["rekenen-met-letters"],                             // Algebra
  ],
  "gr-vmbo-havo1": [
    ["cijferend-rekenen", "negatieve-getallen"],         // Getallen
    ["verhoudingen"],                                    // Verhoudingen
    ["maten-eenheden"],                                  // Meten
    ["lineaire-formules"],                               // Formules
    ["statistiek"],                                      // Statistiek
  ],
  "netwerk-wis": [
    ["cijferend-rekenen", "negatieve-getallen"],         // Getallen
    ["verhoudingen", "procenten"],                       // Verhoudingen
    ["vlakke-figuren", "pythagoras"],                    // Meetkunde
    ["lineaire-formules"],                               // Verbanden en grafieken
    ["statistiek", "kansrekening"],                      // Statistiek en kansen
  ],
  "mathplus": [
    ["differentieren", "exponentieel", "logaritmen"],    // Analyse
    ["rekenen-met-letters", "machten"],                  // Algebra
    ["vlakke-figuren", "pythagoras", "goniometrie"],     // Meetkunde
    ["statistiek", "kansrekening"],                      // Statistiek en kansen
    ["differentieren"],                                  // Differentiëren
  ],

  // ───── Natuurkunde ──────────────────────────────────────────────
  "sys-natuurkunde": [
    ["krachten-natuurkunde"],                            // Krachten
    ["bewegingen-snelheid-natuurkunde"],                 // Beweging
    [],                                                  // Energie en arbeid
    [],                                                  // Warmte en temperatuur
    ["licht-geluid-natuurkunde"],                        // Trillingen en golven
    ["elektriciteit-natuurkunde"],                       // Elektriciteit
    [],                                                  // Magnetisme en inductie
    [],                                                  // Straling en atoomfysica
  ],
  "pulsar": [
    ["krachten-natuurkunde", "bewegingen-snelheid-natuurkunde"], // Krachten en beweging
    [],                                                  // Energie
    [],                                                  // Warmte
    ["licht-geluid-natuurkunde"],                        // Golven en geluid
    ["licht-geluid-natuurkunde"],                        // Licht en optica
    ["elektriciteit-natuurkunde"],                       // Elektriciteit
    [],                                                  // Magnetisme
    [],                                                  // Moderne fysica
  ],
  "nova-nat": [
    ["krachten-natuurkunde"],                            // Krachten
    ["bewegingen-snelheid-natuurkunde"],                 // Beweging
    [],                                                  // Energie
    [],                                                  // Warmte
    ["licht-geluid-natuurkunde"],                        // Golven
    ["elektriciteit-natuurkunde"],                       // Elektriciteit
    [],                                                  // Magnetisme
    [],                                                  // Straling
  ],
  "overal-nat": [
    ["krachten-natuurkunde", "bewegingen-snelheid-natuurkunde"], // Krachten en beweging
    [],                                                  // Energie en arbeid
    [],                                                  // Warmte
    ["licht-geluid-natuurkunde"],                        // Golven en geluid
    ["elektriciteit-natuurkunde"],                       // Elektriciteit
    [],                                                  // Magnetisme
    ["licht-geluid-natuurkunde"],                        // Licht
    [],                                                  // Straling
  ],

  // ───── NaSk (vmbo gecombineerd) ─────────────────────────────────
  "overal-nask": [
    ["stoffen-mengsels-scheikunde", "toestand-stoffen-po"], // Stoffen en materialen
    ["krachten-natuurkunde", "bewegingen-snelheid-natuurkunde"], // Kracht en beweging
    [],                                                  // Warmte en energie
    ["licht-geluid-natuurkunde"],                        // Licht en zien
    ["licht-geluid-natuurkunde"],                        // Geluid
    ["elektriciteit-natuurkunde"],                       // Elektriciteit
    ["chemische-reacties-scheikunde"],                   // Scheikundige reacties
    ["atoombouw-scheikunde"],                            // Atomen en moleculen
  ],
  "newton-nask": [
    [],                                                  // Het vak NaSk
    ["licht-geluid-natuurkunde"],                        // Licht en straling
    ["elektriciteit-natuurkunde"],                       // Elektriciteit en magnetisme
    [],                                                  // Energie en warmte
    ["krachten-natuurkunde", "bewegingen-snelheid-natuurkunde"], // Kracht en beweging
    ["licht-geluid-natuurkunde"],                        // Geluid
    ["stoffen-mengsels-scheikunde", "atoombouw-scheikunde"], // Stoffen en deeltjes
  ],
  "nova-nask": [
    [],                                                  // Natuur- en scheikunde
    ["stoffen-mengsels-scheikunde", "toestand-stoffen-po"], // Stoffen en materialen
    ["waterkringloop-po"],                               // Water
    ["elektriciteit-natuurkunde"],                       // Elektriciteit
    [],                                                  // Warmte
    ["krachten-natuurkunde", "bewegingen-snelheid-natuurkunde"], // Kracht en beweging
    ["licht-geluid-natuurkunde"],                        // Geluid
    ["licht-geluid-natuurkunde"],                        // Licht
  ],

  // ───── Scheikunde ───────────────────────────────────────────────
  "chemie-overal": [
    ["stoffen-mengsels-scheikunde", "chemische-reacties-scheikunde"], // Scheiden en reageren
    ["atoombouw-scheikunde"],                            // Bouwstenen van stoffen
    ["chemische-reacties-scheikunde"],                   // Stoffen en reacties
    ["atoombouw-scheikunde"],                            // Moleculaire stoffen
    [],                                                  // Zouten en zoutoplossingen
    [],                                                  // Koolstofchemie
    [],                                                  // Zuren
    [],                                                  // Basen
  ],
  "nova-scheikunde": [
    ["chemische-reacties-scheikunde"],                   // Chemisch rekenen
    ["atoombouw-scheikunde"],                            // Chemische bindingen
    [],                                                  // Organische verbindingen
    [],                                                  // Zouten
    ["chemische-reacties-scheikunde"],                   // Reacties in beweging
    [],                                                  // Chemisch evenwicht en zuur-base
  ],

  // ───── Aardrijkskunde ───────────────────────────────────────────
  "de-geo": [
    ["werelddelen-landen-po"],                           // Iran
    ["klimaten-aardrijkskunde", "klimaatverandering-aardrijkskunde"], // Grote natuurlandschappen
    ["werelddelen-landen-po"],                           // Gambia
    ["platentektoniek-aardrijkskunde"],                  // Natuurrampen in Japan
    ["werelddelen-landen-po"],                           // Indonesië
    ["klimaten-aardrijkskunde"],                         // Klimaat en natuurlandschap Europa
    ["topografie-nederland", "kaartlezen-po"],           // Je eigen omgeving
    ["werelddelen-landen-po"],                           // Brazilië
  ],
  "buitenland": [
    ["platentektoniek-aardrijkskunde"],                  // Aarde in beweging
    ["bevolking-migratie-aardrijkskunde"],               // Bevolking en cultuur
    ["klimaten-aardrijkskunde", "klimaatverandering-aardrijkskunde"], // Klimaat
    [],                                                  // Ontwikkeling: arm en rijk
    ["werelddelen-landen-po"],                           // Project Europa
  ],

  // ───── Maatschappijleer ─────────────────────────────────────────
  "themas-maatschappijleer": [
    [],                                                  // Wat is maatschappijleer?
    ["nederlandse-staat-maatschappijleer"],              // Rechtsstaat
    ["nederlandse-staat-maatschappijleer", "politiek-democratie-po"], // Parlementaire democratie
    ["mensenrechten-maatschappijleer"],                  // Pluriforme samenleving
    [],                                                  // Verzorgingsstaat
  ],
  "memo-maatschappijleer": [
    ["nederlandse-staat-maatschappijleer", "politiek-democratie-po"], // Staat en democratie
    ["mensenrechten-maatschappijleer"],                  // Rechten en plichten
    [],                                                  // Samenleving
    ["pincode-inkomen-welvaart"],                        // Economie en welvaart
    ["pincode-buitenland-eu"],                           // Internationaal beleid
  ],
  "de-basis": [
    ["politiek-democratie-po"],                          // Democratie
    ["nederlandse-staat-maatschappijleer"],              // Rechtsstaat
    ["mensenrechten-maatschappijleer"],                  // Samenleving
    ["nederlandse-staat-maatschappijleer"],              // Overheid
    ["pincode-buitenland-eu"],                           // Internationaal
  ],

  // ───── PO — Rekenen-methodes ────────────────────────────────────
  "pluspunt": [
    ["cijferend-rekenen", "tafels-po"],                  // Tellen en getallen
    ["cijferend-rekenen"],                               // Optellen en aftrekken
    ["tafels-po"],                                       // Vermenigvuldigen
    ["delen-po"],                                        // Delen
    ["breuken-po"],                                      // Breuken
    ["maten-eenheden", "klokkijken", "tijdsduur-rekenen-po"], // Meten en tijd
    ["vlakke-figuren-po", "meetkunde-bouwsels"],         // Meetkunde
    ["tabellen-grafieken", "gemiddelden-statistiek-po"], // Statistiek
  ],
  "wereld-in-getallen": [
    ["cijferend-rekenen", "tafels-po"],                  // Tellen en getallen
    ["cijferend-rekenen"],                               // Optellen en aftrekken
    ["tafels-po"],                                       // Vermenigvuldigen
    ["delen-po"],                                        // Delen
    ["breuken-po", "kommagetallen-po"],                  // Breuken en kommagetallen
    ["maten-eenheden", "klokkijken", "kalender-rekenen-po"], // Meten en tijd
    ["vlakke-figuren-po"],                               // Meetkunde
    ["tabellen-grafieken"],                              // Statistiek
  ],
  "gr-junior": [
    ["cijferend-rekenen"],                               // Getallen
    ["cijferend-rekenen"],                               // Optellen en aftrekken
    ["tafels-po"],                                       // Vermenigvuldigen
    ["delen-po"],                                        // Delen
    ["breuken-po"],                                      // Breuken
    ["maten-eenheden"],                                  // Meten
    ["vlakke-figuren-po"],                               // Meetkunde
  ],
  "wizwijs": [
    ["cijferend-rekenen"],                               // Getallen
    ["cijferend-rekenen"],                               // Optellen en aftrekken
    ["tafels-po", "delen-po"],                           // Vermenigvuldigen en delen
    ["breuken-po"],                                      // Breuken
    ["maten-eenheden", "klokkijken"],                    // Meten en tijd
    ["vlakke-figuren-po"],                               // Meetkunde
  ],
  "alles-telt": [
    ["cijferend-rekenen"],                               // Getallen
    ["cijferend-rekenen"],                               // Optellen en aftrekken
    ["tafels-po"],                                       // Vermenigvuldigen
    ["delen-po"],                                        // Delen
    ["maten-eenheden", "klokkijken"],                    // Meten en tijd
    ["vlakke-figuren-po"],                               // Meetkunde
    ["tabellen-grafieken"],                              // Statistiek
  ],

  // ───── PO — Taal-methodes ───────────────────────────────────────
  "taal-actief": [
    [],                                                  // Luisteren en spreken
    ["begrijpend-lezen-strategie", "begrijpend-lezen-teksten-po"], // Lezen
    [],                                                  // Schrijven
    ["spelling-ei-ij-au-ou", "spelling-overige-po", "werkwoordsspelling-dt"], // Spelling
    ["woordenschat-po", "synoniemen-tegenstellingen-po"], // Woordenschat
    ["woordsoorten-po", "werkwoord-tijden-po"],          // Taalbeschouwing
  ],
  "staal": [
    [],                                                  // Luisteren en spreken
    ["begrijpend-lezen-strategie", "samenvatten-hoofdgedachte-po"], // Lezen
    [],                                                  // Schrijven
    ["spelling-ei-ij-au-ou", "spelling-overige-po", "werkwoordsspelling-dt"], // Spelling
    ["woordenschat-po", "spreekwoorden-uitdrukkingen-po"], // Woordenschat
    ["woordsoorten-po", "werkwoord-tijden-po", "interpunctie-po"], // Grammatica
  ],
  "nieuw-nl-junior": [
    [],                                                  // Luisteren
    [],                                                  // Spreken
    ["begrijpend-lezen-strategie", "begrijpend-lezen-teksten-po"], // Lezen
    [],                                                  // Schrijven
    ["spelling-ei-ij-au-ou", "spelling-overige-po"],     // Spelling
    ["woordenschat-po", "synoniemen-tegenstellingen-po"], // Woordenschat
  ],

  // ───── VO — Nederlands ──────────────────────────────────────────
  "nn-hv1": [
    [], [], [], [], [], [], [], [], [], [],
    ["literatuurgeschiedenis"],
    ["argumentatieleer"],
  ],
  "nn-hv2": [
    [], [], [], [],
    ["literatuurgeschiedenis"],
    [], [], [],
    ["nederlandse-staat-maatschappijleer"],
    [],
    ["argumentatieleer"],
    ["schrijfvaardigheid"],
  ],
  "nn-havo3": [
    [],
    ["tekstanalyse", "begrijpend-lezen-strategie"],
    ["schrijfvaardigheid"],
    [],
    ["spelling", "spelling-ei-ij-au-ou", "werkwoordsspelling-dt", "zinsontleding"],
    ["woordenschat-po", "synoniemen-tegenstellingen-po"],
    ["literatuurgeschiedenis"],
    ["argumentatieleer"],
  ],
  "nn-vwo4": [
    ["tekstanalyse"],
    ["schrijfvaardigheid"],
    [],
    ["literatuurgeschiedenis"],
    ["argumentatieleer"],
    ["zinsontleding", "woordsoorten-nederlands"],
    ["cse-leesvaardigheid-nederlands", "cse-schrijfvaardigheid-nederlands"],
  ],
  "op-niveau-havo45": [
    ["tekstanalyse", "begrijpend-lezen-strategie"],
    ["schrijfvaardigheid"],
    [],
    ["literatuurgeschiedenis"],
    ["spelling", "werkwoordsspelling-dt", "zinsontleding"],
    ["argumentatieleer"],
    ["cse-leesvaardigheid-nederlands", "cse-schrijfvaardigheid-nederlands"],
  ],
  "op-niveau-vwo56": [
    ["tekstanalyse"],
    ["schrijfvaardigheid"],
    [],
    ["literatuurgeschiedenis"],
    ["argumentatieleer"],
    ["zinsontleding", "woordsoorten-nederlands"],
    ["cse-leesvaardigheid-nederlands", "cse-schrijfvaardigheid-nederlands"],
  ],
  "kern-nl-hv1": [
    [],
    ["begrijpend-lezen-strategie"],
    ["schrijfvaardigheid"],
    ["spelling-ei-ij-au-ou", "spelling-overige-po"],
    ["woordenschat-po"],
    ["woordsoorten-nederlands", "werkwoord-tijden-po"],
    ["zinsontleding"],
  ],
  "kern-nl-hv2": [
    [],
    ["begrijpend-lezen-strategie", "samenvatten-hoofdgedachte-po"],
    ["schrijfvaardigheid"],
    ["spelling", "werkwoordsspelling-dt"],
    ["woordenschat-po", "spreekwoorden-uitdrukkingen-po"],
    ["zinsontleding"],
    ["literatuurgeschiedenis"],
  ],
  "kern-nl-havo3": [
    ["tekstanalyse", "begrijpend-lezen-strategie"],
    ["schrijfvaardigheid"],
    [],
    ["literatuurgeschiedenis"],
    ["zinsontleding"],
    ["argumentatieleer"],
  ],

  // ───── VO — Engels ──────────────────────────────────────────────
  // Engels-methodes hebben thema-hoofdstukken niet grammatica.
  // Thematisch mappen naar woordenschat-pad; grammatica-paden bij
  // typische hoofdstukken (Free time → present, Travel → past tenses).
  "stepping-stones": [
    ["woordenschat-engels-po", "basis-grammatica-engels-po"],
    ["woordenschat-engels-po"],
    ["present-tenses-engels"],
    ["present-tenses-engels"],
    ["woordenschat-engels-po"],
    ["past-tenses-engels"],
    ["present-tenses-engels"],
    [],
    ["comparatives-engels"],
    ["conditionals-engels"],
    ["comparatives-engels", "past-tenses-engels"],
    ["past-tenses-engels"],
  ],
  "all-right": [
    ["woordenschat-engels-po", "basis-grammatica-engels-po"],
    ["woordenschat-engels-po"],
    ["present-tenses-engels"],
    ["present-tenses-engels"],
    ["woordenschat-engels-po"],
    ["past-tenses-engels"],
    ["woordenschat-engels-po"],
    [],
    ["comparatives-engels"],
    ["present-tenses-engels"],
    ["conditionals-engels"],
    ["past-tenses-engels"],
  ],
  "new-interface": [
    ["woordenschat-engels-po", "basis-grammatica-engels-po"],
    ["woordenschat-engels-po"],
    ["present-tenses-engels"],
    ["present-tenses-engels"],
    ["woordenschat-engels-po"],
    ["past-tenses-engels"],
    ["woordenschat-engels-po"],
    [],
    ["conditionals-engels"],
    ["present-tenses-engels"],
    ["comparatives-engels"],
    ["cse-leesvaardigheid-engels", "cse-schrijfvaardigheid-engels"],
  ],
  "kern-engels": [
    ["woordenschat-engels-po", "basis-grammatica-engels-po"],
    ["woordenschat-engels-po"],
    ["present-tenses-engels"],
    ["present-tenses-engels"],
    ["woordenschat-engels-po"],
    ["past-tenses-engels"],
    ["present-tenses-engels"],
    [],
    ["comparatives-engels", "conditionals-engels"],
    [],
  ],
  "upload": [
    ["woordenschat-engels-po", "basis-grammatica-engels-po"],
    ["woordenschat-engels-po"],
    ["present-tenses-engels"],
    ["present-tenses-engels"],
    ["woordenschat-engels-po"],
    ["past-tenses-engels"],
    ["woordenschat-engels-po"],
    [],
    ["present-tenses-engels"],
    ["comparatives-engels"],
    ["conditionals-engels"],
    ["cse-leesvaardigheid-engels", "cse-schrijfvaardigheid-engels"],
  ],
  "keys": [
    ["woordenschat-engels-po", "basis-grammatica-engels-po"],
    ["woordenschat-engels-po"],
    ["present-tenses-engels"],
    ["present-tenses-engels"],
    ["woordenschat-engels-po"],
    ["past-tenses-engels"],
    ["woordenschat-engels-po"],
    [],
    ["present-tenses-engels"],
    ["comparatives-engels"],
    ["conditionals-engels"],
    [],
  ],

  // ───── VO — Duits / Frans ───────────────────────────────────────
  "na-klar": [
    ["werkwoordsvervoeging-duits", "naamvallen-duits"],
    [], [], [], [], [], [], [], [], [],
  ],
  "trabitour": [
    ["werkwoordsvervoeging-duits", "naamvallen-duits"],
    [], [], [], [], [], [], [], [], [],
  ],
  "neue-kontakte": [
    ["werkwoordsvervoeging-duits", "naamvallen-duits"],
    [], [], [], [], [], [], [], [], [], [],
  ],
  "grandes-lignes": [
    ["werkwoordsvervoeging-frans"],
    [], [], [], [],
    ["passe-compose-frans"],
    [], [], [], [], [],
  ],
  "bravoure": [
    ["werkwoordsvervoeging-frans"],
    [], [], [], [],
    ["passe-compose-frans"],
    [], [], [], [], [],
  ],
  "daccord": [
    ["werkwoordsvervoeging-frans"],
    [], [], [], [],
    ["passe-compose-frans"],
    [], [], [], [],
  ],

  // ───── Biologie — bovenbouw + MAX-uitbreidingen ─────────────────
  "bvj-havo-bovenbouw": [
    ["genetica-erfelijkheid-biologie"],
    ["evolutie-mens-po"],
    ["ecosystemen-biologie"],
    [], [],
  ],
  "bvj-vwo-bovenbouw": [
    ["genetica-erfelijkheid-biologie"],
    ["evolutie-mens-po"],
    ["ecosystemen-biologie"],
    [], [],
  ],
  "bvj-max-onderbouw": [
    ["dierenklassen-po", "fotosynthese-biologie"],
    ["cel-biologie"],
    ["dierenklassen-po"],
    [], [],
    ["voortplanting-hormonen-biologie"],
  ],
  "bvj-max-havo-vwo": [
    ["dierenklassen-po", "fotosynthese-biologie"],
    ["cel-biologie"],
    ["dierenklassen-po"],
    [], [],
    ["voortplanting-hormonen-biologie"],
    [],
    ["gezonde-voeding-po"],
    [],
    ["genetica-erfelijkheid-biologie", "evolutie-mens-po"],
  ],
  "bvj-max-vmbo": [
    ["dierenklassen-po", "fotosynthese-biologie"],
    ["cel-biologie"],
    ["dierenklassen-po"],
    [], [],
    ["voortplanting-hormonen-biologie"],
  ],
  "bvj-max-vwo-bovenbouw": [
    ["genetica-erfelijkheid-biologie"],
    ["evolutie-mens-po"],
    ["ecosystemen-biologie"],
    [], [],
  ],
  "vivo": [
    ["cel-biologie"],
    [],
    ["gezonde-voeding-po"],
    [], [], [],
    ["voortplanting-hormonen-biologie"],
    ["genetica-erfelijkheid-biologie"],
    ["ecosystemen-biologie"],
  ],

  // ───── Geschiedenis — extra ─────────────────────────────────────
  "geschiedeniswerkplaats": [
    ["tijdvakken-nederland-po"],
    ["oudheid-egyptenaren-grieken-romeinen-po", "romeinen-geschiedenis"],
    ["middeleeuwen-geschiedenis"],
    ["middeleeuwen-geschiedenis"],
    ["ontdekkingsreizen-po", "gouden-eeuw-geschiedenis"],
    ["gouden-eeuw-geschiedenis"],
    ["franse-revolutie-geschiedenis"],
    ["industriele-revolutie-po"],
    ["wereldoorlog1-geschiedenis", "wereldoorlog2-geschiedenis"],
    ["koude-oorlog-modern-po"],
  ],
  "historica": [
    ["tijdvakken-nederland-po"],
    ["oudheid-egyptenaren-grieken-romeinen-po", "romeinen-geschiedenis"],
    ["middeleeuwen-geschiedenis"],
    ["middeleeuwen-geschiedenis"],
    [],
    ["gouden-eeuw-geschiedenis"],
    ["franse-revolutie-geschiedenis"],
    ["industriele-revolutie-po"],
    ["wereldoorlog1-geschiedenis", "wereldoorlog2-geschiedenis"],
    ["koude-oorlog-modern-po"],
  ],

  // ───── Wiskunde — GR VWO 5 ──────────────────────────────────────
  "gr-vwo5": [
    ["lineaire-formules", "exponentieel"],
    ["statistiek"],
    ["rekenen-met-letters", "machten"],
    ["kansrekening"],
    ["machten"],
    ["kansrekening"],
    ["statistiek"],
    ["differentieren"],
    ["kansrekening"],
    ["exponentieel", "logaritmen"],
    ["statistiek"],
    [],
    ["lineaire-formules"],
    ["differentieren"],
    [],
  ],

  // ───── M&O / Bedrijfseconomie ───────────────────────────────────
  "mo-havo": [
    [], [], [],
    ["pincode-werk-arbeidsmarkt"],
    ["vraag-aanbod-economie"],
    [],
    ["balans-beco"],
  ],
  "mo-vwo": [
    [], [], [],
    ["pincode-werk-arbeidsmarkt"],
    ["vraag-aanbod-economie"],
    [],
    ["balans-beco"],
    ["balans-beco"],
  ],
  "kern-mo": [
    [], [], [],
    ["vraag-aanbod-economie"],
    ["pincode-werk-arbeidsmarkt"],
    ["balans-beco"],
  ],
  "beco-havo": [
    [], [],
    ["balans-beco"],
    [],
    ["pincode-werk-arbeidsmarkt"],
    ["vraag-aanbod-economie"],
    [],
  ],

  // ───── PO Wereldoriëntatie ──────────────────────────────────────
  "naut-meander-brandaan": [
    ["lichaam-gezondheid-po", "gezonde-voeding-po"],
    ["dierenklassen-po", "dieren-seizoenen-natuur"],
    ["ecosystemen-biologie", "recyclen-afval-po"],
    ["weersvoorspelling-po", "dieren-seizoenen-natuur"],
    ["sterren-planeten", "waterkringloop-po"],
    ["algoritmen-programmeren-po", "energiebronnen-po"],
    ["topografie-nederland", "werelddelen-landen-po"],
  ],
  "argus-clou": [
    ["lichaam-gezondheid-po", "gezonde-voeding-po"],
    ["fotosynthese-biologie"],
    ["dierenklassen-po"],
    ["ecosystemen-biologie", "recyclen-afval-po"],
    ["weersvoorspelling-po", "klimaten-aardrijkskunde"],
    ["sterren-planeten"],
    ["energiebronnen-po", "algoritmen-programmeren-po"],
  ],
  "blink": [
    ["lichaam-gezondheid-po", "gezonde-voeding-po"],
    ["dierenklassen-po", "fotosynthese-biologie"],
    ["ecosystemen-biologie", "recyclen-afval-po"],
    ["klimaten-aardrijkskunde", "weersvoorspelling-po"],
    ["sterren-planeten"],
    ["energiebronnen-po", "algoritmen-programmeren-po"],
    ["topografie-nederland", "werelddelen-landen-po"],
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
