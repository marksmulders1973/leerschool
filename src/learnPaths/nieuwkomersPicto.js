// 🖼️ Plaatjes bij de eerste woorden (Nieuwkomer-pakket, Mark 26 sep 2026: "doe maar").
// Bron: Mulberry Symbols (Steve Lee), CC BY-SA 4.0 — commercieel gebruik mag, mét
// naamsvermelding (staat op /nieuwkomers). Bewust níét ARASAAC: die licentie is
// niet-commercieel. Bestanden staan in public/picto/ (ongewijzigd uit de set).
// Geen eigen of AI-plaatjes. Kleuren krijgen een kleurvlak in plaats van een plaatje.
//
// Regel: een vraag krijgt alleen plaatjes als ÁLLE antwoorden er een hebben — één
// antwoord zonder plaatje valt anders op en verklapt of verwart. Weggelaten omdat de
// set geen duidelijk plaatje heeft: het kind, de neus, de moeder, de vader, de zus
// (Mulberry toont familie als stamboom-schema, niet als persoon).
//
// Uitbreiding 29 sep 2026 (Woordkaarten + Luister en kies): 155 extra plaatjes, elk
// op een contactvel bekeken op telefoonformaat. Afgekeurd o.a.: de leerling (Engels
// "pupil" = oogpupil), de politieagent (Britse helm), de taxi (Londense taxi), het
// potlood/krijtje (lijkt te veel op de pen), het glas (lijkt op het water), de tand
// (lijkt op de mond), het been + de knie (lijken op de voet), de aardappel, de maan,
// de spiegel, de telefoon (oud model), opa/oma/broer (schema), duwen/trekken,
// lopen/staan/vallen (lijken op rennen), bouwen, helpen, wachten, aankleden.
// Het boek en de juf/meester hebben nu wél een plaatje (open boek; juf/meester bij het
// bord). Let op: schrijven en tekenen (allebei een hand met pen) liever niet samen in
// één vraag.
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
  // In de klas
  "de schaar": P("schaar"), "de lijm": P("lijm"), "het papier": P("papier"),
  "het schrift": P("schrift"), "het boek": P("boek"), "de kwast": P("kwast"),
  "het etui": P("etui"), "de computer": P("computer"), "de klok": P("klok"), "de juf": P("juf"),
  "de meester": P("meester"), "de wc": P("wc"),
  // Eten en drinken
  "het ei": P("ei"), "de rijst": P("rijst"), "de soep": P("soep"), "de thee": P("thee"),
  "de boterham": P("boterham"), "de pizza": P("pizza"), "het koekje": P("koekje"),
  "de taart": P("taart"), "het ijsje": P("ijsje"), "de chocola": P("chocola"),
  "de patat": P("patat"), "de lepel": P("lepel"), "de vork": P("vork"), "het mes": P("mes"),
  "de beker": P("beker"),
  // Fruit en groente
  "de sinaasappel": P("sinaasappel"), "de peer": P("peer"), "de druif": P("druif"),
  "de aardbei": P("aardbei"), "de citroen": P("citroen"), "de kers": P("kers"),
  "de ananas": P("ananas"), "de wortel": P("wortel"), "de tomaat": P("tomaat"),
  "de komkommer": P("komkommer"),
  // Mijn lichaam
  "de tong": P("tong"), "de arm": P("arm"),
  // Kleding
  "de broek": P("broek"), "het T-shirt": P("t-shirt"), "de trui": P("trui"), "de jurk": P("jurk"),
  "de rok": P("rok"), "de korte broek": P("korte-broek"), "de onderbroek": P("onderbroek"),
  "de sok": P("sok"), "de schoen": P("schoen"), "de laars": P("laars"), "de muts": P("muts"),
  "de pet": P("pet"), "de sjaal": P("sjaal"), "de handschoen": P("handschoen"),
  // Thuis
  "het gezin": P("gezin"), "de baby": P("baby"), "het bed": P("bed"), "de lamp": P("lamp"),
  "de kast": P("kast"), "de bank": P("bank"), "de televisie": P("televisie"),
  "de sleutel": P("sleutel"), "de koelkast": P("koelkast"), "de trap": P("trap"),
  "het bad": P("bad"), "de douche": P("douche"), "de wasbak": P("wasbak"),
  "de handdoek": P("handdoek"), "de zeep": P("zeep"), "de tandenborstel": P("tandenborstel"),
  // Dieren thuis en op de boerderij
  "de hond": P("hond"), "de kat": P("kat"), "de vogel": P("vogel"), "de vis": P("vis"),
  "het paard": P("paard"), "de koe": P("koe"), "het varken": P("varken"),
  "het schaap": P("schaap"), "de kip": P("kip"), "de eend": P("eend"), "het konijn": P("konijn"),
  "de muis": P("muis"),
  // Dieren in de dierentuin en de natuur
  "de leeuw": P("leeuw"), "de olifant": P("olifant"), "de giraf": P("giraf"), "de beer": P("beer"),
  "de tijger": P("tijger"), "de zebra": P("zebra"), "de aap": P("aap"), "de slang": P("slang"),
  "de kikker": P("kikker"), "de vlinder": P("vlinder"), "de bij": P("bij"), "de spin": P("spin"),
  "de uil": P("uil"),
  // Spelen
  "de bal": P("bal"), "de ballon": P("ballon"), "de schommel": P("schommel"),
  "de glijbaan": P("glijbaan"), "de wip": P("wip"), "de trampoline": P("trampoline"),
  "de vlieger": P("vlieger"), "de pop": P("pop"), "de knuffelbeer": P("knuffelbeer"),
  "de trommel": P("trommel"), "de gitaar": P("gitaar"), "de piano": P("piano"),
  // Buiten en verkeer
  "de bus": P("bus"), "de fiets": P("fiets"), "de trein": P("trein"),
  "het vliegtuig": P("vliegtuig"), "de boot": P("boot"), "de motor": P("motor"),
  "de vrachtwagen": P("vrachtwagen"), "de tractor": P("tractor"),
  "de brandweerauto": P("brandweerauto"), "de ambulance": P("ambulance"),
  "de politieauto": P("politieauto"), "de straat": P("straat"), "het stoplicht": P("stoplicht"),
  "het zebrapad": P("zebrapad"), "de winkel": P("winkel"),
  // Het weer en de natuur
  "de zon": P("zon"), "de regen": P("regen"), "de regenboog": P("regenboog"), "de ster": P("ster"),
  "de paraplu": P("paraplu"), "de boom": P("boom"), "de bloem": P("bloem"),
  "het strand": P("strand"),
  // Doen in de klas
  praten: P("praten"), zingen: P("zingen"), klappen: P("klappen"), wijzen: P("wijzen"),
  // Doen: elke dag
  eten: P("eten"), drinken: P("drinken"), slapen: P("slapen"), "handen wassen": P("handen-wassen"),
  "tanden poetsen": P("tanden-poetsen"), koken: P("koken"), lachen: P("lachen"), geven: P("geven"),
  knuffelen: P("knuffelen"),
  // Doen: bewegen
  rennen: P("rennen"), springen: P("springen"), zitten: P("zitten"), zwemmen: P("zwemmen"),
  klimmen: P("klimmen"), fietsen: P("fietsen"), schoppen: P("schoppen"), vangen: P("vangen"),
  schommelen: P("schommelen"), rijden: P("rijden"),
  // los (nog in geen thema)
  "de dokter": P("dokter"), "de lolly": P("lolly"), "de chips": P("chips"),
  // Gevoelens bewust zonder plaatje (kliktest 26 sep 2026): de vier gezichten (blij/boos/bang/
  // verdrietig) waren op telefoonformaat niet uit elkaar te houden en "verdrietig" had geen tranen.
  // kleurvlakken
  rood: "#e53935", blauw: "#1e88e5", geel: "#fdd835", groen: "#43a047", wit: "#ffffff",
};

// Map optie → plaatje voor één vraag, of undefined als niet elke optie er een heeft.
export function pictoVoor(opties) {
  if (!opties.every((o) => PICTO[o])) return undefined;
  return Object.fromEntries(opties.map((o) => [o, PICTO[o]]));
}

// Plaatje bij één woord (met lidwoord, zoals in PICTO), of undefined. Kleurvlakken
// tellen niet mee: die zijn geen plaatje.
export function plaatjeVan(woord) {
  const p = PICTO[woord];
  return typeof p === "string" && p.startsWith("/picto/") ? p : undefined;
}

// Woordkaarten per thema (makkelijkste eerst): alleen woorden met een goedgekeurd
// plaatje, 8-20 per thema. Binnen een thema zien de plaatjes er duidelijk anders uit,
// zodat "Luister en kies" er vier uit één thema kan pakken.
export const WOORDKAARTEN = [
  {
    id: "in-de-klas",
    thema: "In de klas",
    woorden: [
      "de tafel", "de stoel", "de deur", "het raam", "het bord", "de tas", "de pen", "de schaar",
      "de lijm", "het papier", "het schrift", "het boek", "de kwast", "het etui", "de computer",
      "de klok", "de juf", "de meester", "de wc",
    ],
  },
  {
    id: "eten-drinken",
    thema: "Eten en drinken",
    woorden: [
      "de melk", "het water", "het brood", "de kaas", "het ei", "de rijst", "de soep", "de thee",
      "de boterham", "de pizza", "het koekje", "de taart", "het ijsje", "de chocola", "de patat",
      "de lepel", "de vork", "het mes", "de beker",
    ],
  },
  {
    id: "fruit-groente",
    thema: "Fruit en groente",
    woorden: [
      "de appel", "de banaan", "de sinaasappel", "de peer", "de druif", "de aardbei",
      "de citroen", "de kers", "de ananas", "de wortel", "de tomaat", "de komkommer",
    ],
  },
  {
    id: "lichaam",
    thema: "Mijn lichaam",
    woorden: [
      "het hoofd", "het oog", "het oor", "de mond", "de tong", "de buik", "de arm", "de hand",
      "de voet",
    ],
  },
  {
    id: "kleding",
    thema: "Kleding",
    woorden: [
      "de jas", "de broek", "het T-shirt", "de trui", "de jurk", "de rok", "de korte broek",
      "de onderbroek", "de sok", "de schoen", "de laars", "de muts", "de pet", "de sjaal",
      "de handschoen",
    ],
  },
  {
    id: "thuis",
    thema: "Thuis",
    woorden: [
      "het huis", "de tuin", "het gezin", "de baby", "het bed", "de lamp", "de kast", "de bank",
      "de televisie", "de sleutel", "de koelkast", "de trap", "het bad", "de douche",
      "de wasbak", "de handdoek", "de zeep", "de tandenborstel",
    ],
  },
  {
    id: "dieren-boerderij",
    thema: "Dieren thuis en op de boerderij",
    woorden: [
      "de hond", "de kat", "de vogel", "de vis", "het paard", "de koe", "het varken",
      "het schaap", "de kip", "de eend", "het konijn", "de muis",
    ],
  },
  {
    id: "dieren-wild",
    thema: "Dieren in de dierentuin en de natuur",
    woorden: [
      "de leeuw", "de olifant", "de giraf", "de beer", "de tijger", "de zebra", "de aap",
      "de slang", "de kikker", "de vlinder", "de bij", "de spin", "de uil",
    ],
  },
  {
    id: "spelen",
    thema: "Spelen",
    woorden: [
      "de bal", "de ballon", "de schommel", "de glijbaan", "de wip", "de trampoline",
      "de vlieger", "de pop", "de knuffelbeer", "de trommel", "de gitaar", "de piano",
    ],
  },
  {
    id: "buiten-verkeer",
    thema: "Buiten en verkeer",
    woorden: [
      "de auto", "de bus", "de fiets", "de trein", "het vliegtuig", "de boot", "de motor",
      "de vrachtwagen", "de tractor", "de brandweerauto", "de ambulance", "de politieauto",
      "de straat", "het stoplicht", "het zebrapad", "de winkel", "de school",
    ],
  },
  {
    id: "weer-natuur",
    thema: "Het weer en de natuur",
    woorden: [
      "de zon", "de regen", "de regenboog", "de ster", "de paraplu", "de boom", "de bloem",
      "het strand",
    ],
  },
  {
    id: "doen-klas",
    thema: "Doen in de klas",
    woorden: [
      "schrijven", "lezen", "kleuren", "knippen", "plakken", "tellen", "kijken",
      "luisteren", "opruimen", "praten", "zingen", "klappen", "wijzen",
    ],
  },
  {
    id: "doen-elke-dag",
    thema: "Doen: elke dag",
    woorden: [
      "eten", "drinken", "slapen", "handen wassen", "tanden poetsen", "koken", "lachen", "geven",
      "knuffelen",
    ],
  },
  {
    id: "doen-bewegen",
    thema: "Doen: bewegen",
    woorden: [
      "rennen", "springen", "zitten", "zwemmen", "klimmen", "fietsen", "schoppen", "vangen",
      "schommelen", "rijden",
    ],
  },
];

export const PICTO_BRON = "Plaatjes: Mulberry Symbols (Steve Lee), CC BY-SA 4.0";
