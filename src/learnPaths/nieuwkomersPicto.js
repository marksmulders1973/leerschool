// 🖼️ Plaatjes bij de eerste woorden (Nieuwkomer-pakket, Mark 26 sep 2026: "doe maar").
// Bron: Mulberry Symbols (Steve Lee), CC BY-SA 4.0 — commercieel gebruik mag, mét
// naamsvermelding (staat op /nieuwkomers). Bewust níét ARASAAC: die licentie is
// niet-commercieel. Bestanden staan in public/picto/ (ongewijzigd uit de set).
// Geen eigen of AI-plaatjes. Kleuren krijgen een kleurvlak in plaats van een plaatje.
//
// Regel: een vraag krijgt alleen plaatjes als ÁLLE antwoorden er een hebben — één
// antwoord zonder plaatje valt anders op en verklapt of verwart. Weggelaten omdat de
// set geen duidelijk plaatje heeft: het boek, het kind, de neus, de juf/meester in
// een familie-rijtje, de moeder, de vader, de zus.
const P = (naam) => `/picto/${naam}.svg`;

const PICTO = {
  "de tafel": P("tafel"), "de stoel": P("stoel"), "de deur": P("deur"), "het raam": P("raam"),
  "de tas": P("tas"), "de pen": P("pen"), "het bord": P("bord"), "de jas": P("jas"),
  "het huis": P("huis"), "de school": P("school"), "de auto": P("auto"), "de tuin": P("tuin"),
  "de melk": P("melk"), "de appel": P("appel"), "het water": P("water"), "het brood": P("brood"),
  "de kaas": P("kaas"), "de banaan": P("banaan"),
  "het hoofd": P("hoofd"), "de hand": P("hand"), "de voet": P("voet"), "de buik": P("buik"),
  "het oog": P("oog"), "het oor": P("oor"), "de mond": P("mond"),
  schrijven: P("schrijven"), lezen: P("lezen"), tekenen: P("tekenen"), tellen: P("tellen"),
  knippen: P("knippen"), plakken: P("plakken"), kleuren: P("kleuren"), kijken: P("kijken"),
  luisteren: P("luisteren"), opruimen: P("opruimen"),
  blij: P("blij"), verdrietig: P("verdrietig"), boos: P("boos"), bang: P("bang"), moe: P("moe"), ziek: P("ziek"),
  // kleurvlakken
  rood: "#e53935", blauw: "#1e88e5", geel: "#fdd835", groen: "#43a047", wit: "#ffffff",
};

// Map optie → plaatje voor één vraag, of undefined als niet elke optie er een heeft.
export function pictoVoor(opties) {
  if (!opties.every((o) => PICTO[o])) return undefined;
  return Object.fromEntries(opties.map((o) => [o, PICTO[o]]));
}

export const PICTO_BRON = "Plaatjes: Mulberry Symbols (Steve Lee), CC BY-SA 4.0";
