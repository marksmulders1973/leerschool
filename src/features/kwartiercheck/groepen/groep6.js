// Kwartiercheck — groep 6 (medio groep 6 = januari/februari).
// Ontwerp + niveaus: docs/kwartiercheck/CONCEPTEN-PER-GROEP.md § 5.
// Niveau 1 = basis (stof die er al in moet zitten, ook in september eerlijk).
// Niveau 2 = toepassen (stof van halverwege groep 6, in een verhaaltje of lastiger vorm).
// Per concept minstens 3 × niveau 1 (1 + bevestiging + reserve) en 2 × niveau 2.
// Eigen vragen, "in de stijl van" — niets overgenomen uit toetsen of methodes.

const concepten = [
  {
    id: "g6-grote-getallen",
    label: "Grote getallen en afronden",
    vak: "rekenen",
    leerpadId: "schatten-afronden",
    leerpadTitel: "Schatten en afronden",
  },
  {
    id: "g6-keer-en-delen",
    label: "Vermenigvuldigen en delen",
    vak: "rekenen",
    leerpadId: "cijferend-rekenen",
    leerpadTitel: "Cijferend rekenen",
  },
  {
    id: "g6-breuken",
    label: "Breuken: eerste stappen",
    vak: "rekenen",
    leerpadId: "breuken-po",
    leerpadTitel: "Breuken",
  },
  {
    id: "g6-meten",
    label: "Meten: lengte, gewicht en inhoud",
    vak: "rekenen",
    leerpadId: "maten-eenheden",
    leerpadTitel: "Maten & eenheden",
  },
  {
    id: "g6-werkwoorden-nu",
    label: "Werkwoorden in de tegenwoordige tijd",
    vak: "taal",
    leerpadId: "werkwoordsspelling-dt",
    leerpadTitel: "Werkwoordsspelling d/t",
  },
  {
    id: "g6-spelling",
    label: "Spelling: leenwoorden en uitgangen",
    vak: "taal",
    leerpadId: "spelling-overige-po",
    leerpadTitel: "Spelling",
  },
  {
    id: "g6-woordsoorten",
    label: "Woordsoorten herkennen",
    vak: "taal",
    leerpadId: "woordsoorten-po",
    leerpadTitel: "Woordsoorten herkennen",
  },
  {
    id: "g6-informatie-in-tekst",
    label: "Informatie vinden in een tekst",
    vak: "begrijpend-lezen",
    leerpadId: "feiten-details-opzoeken-po",
    leerpadTitel: "Feiten en details opzoeken",
  },
];

const vragen = [
  // ─── GROTE GETALLEN EN AFRONDEN ────────────────────────────────
  {
    id: "g6-getallen-1a", concept: "g6-grote-getallen", niveau: 1,
    vraag: "Hoe schrijf je 'zesduizend dertig' in cijfers?",
    opties: ["6030", "6300", "60.030", "6003"],
    correct: 0,
  },
  {
    id: "g6-getallen-1b", concept: "g6-grote-getallen", niveau: 1,
    vraag: "Hoeveel is de 5 waard in het getal 3591?",
    opties: ["50", "5000", "5", "500"],
    correct: 3,
  },
  {
    id: "g6-getallen-1c", concept: "g6-grote-getallen", niveau: 1,
    vraag: "Welk getal is het grootst?",
    opties: ["10.001", "9990", "10.010", "9899"],
    correct: 2,
  },
  {
    id: "g6-getallen-1d", concept: "g6-grote-getallen", niveau: 1,
    vraag: "Rond 368 af op tientallen.",
    opties: ["360", "370", "300", "400"],
    correct: 1,
  },
  {
    id: "g6-getallen-2a", concept: "g6-grote-getallen", niveau: 2,
    vraag: "Rond 5629 af op duizendtallen.",
    opties: ["6000", "5000", "5600", "5630"],
    correct: 0,
  },
  {
    id: "g6-getallen-2b", concept: "g6-grote-getallen", niveau: 2,
    vraag: "Welk bedrag is het hoogst?",
    opties: ["€ 3,18", "€ 2,99", "€ 3,80", "€ 3,08"],
    correct: 2,
  },
  {
    id: "g6-getallen-2c", concept: "g6-grote-getallen", niveau: 2,
    vraag: "In een stad wonen 48.650 mensen. Hoeveel is dat, afgerond op duizendtallen?",
    opties: ["48.700", "48.000", "50.000", "49.000"],
    correct: 3,
  },
  {
    id: "g6-getallen-2d", concept: "g6-grote-getallen", niveau: 2,
    vraag: "Vier kinderen meten hoe lang ze zijn. Wie is het langst?",
    opties: ["Sara: 1,45 m", "Omar: 1,54 m", "Lieke: 1,5 m", "Tim: 1,05 m"],
    correct: 1,
  },

  // ─── VERMENIGVULDIGEN EN DELEN ─────────────────────────────────
  {
    id: "g6-keerdelen-1a", concept: "g6-keer-en-delen", niveau: 1,
    vraag: "8 × 60 = ?",
    opties: ["48", "480", "540", "4800"],
    correct: 1,
  },
  {
    id: "g6-keerdelen-1b", concept: "g6-keer-en-delen", niveau: 1,
    vraag: "3600 : 9 = ?",
    opties: ["4000", "40", "360", "400"],
    correct: 3,
  },
  {
    id: "g6-keerdelen-1c", concept: "g6-keer-en-delen", niveau: 1,
    vraag: "4 × 38 = ?",
    opties: ["122", "132", "152", "162"],
    correct: 2,
  },
  {
    id: "g6-keerdelen-1d", concept: "g6-keer-en-delen", niveau: 1,
    vraag: "72 : 8 = ?",
    opties: ["9", "8", "7", "64"],
    correct: 0,
  },
  {
    id: "g6-keerdelen-2a", concept: "g6-keer-en-delen", niveau: 2,
    vraag: "Er gaan 78 kinderen op schoolreis. In elk busje passen 5 kinderen. Hoeveel busjes zijn er minstens nodig?",
    opties: ["15", "16", "3", "17"],
    correct: 1,
  },
  {
    id: "g6-keerdelen-2b", concept: "g6-keer-en-delen", niveau: 2,
    vraag: "93 : 4 = ?",
    opties: ["22 rest 5", "24 rest 1", "23 rest 1", "23 rest 3"],
    correct: 2,
  },
  {
    id: "g6-keerdelen-2c", concept: "g6-keer-en-delen", niveau: 2,
    vraag: "In een bus passen 48 kinderen. Er rijden 6 bussen. Hoeveel kinderen kunnen er in totaal mee?",
    opties: ["248", "278", "54", "288"],
    correct: 3,
  },
  {
    id: "g6-keerdelen-2d", concept: "g6-keer-en-delen", niveau: 2,
    vraag: "Mia heeft 120 stickers. Ze verdeelt ze eerlijk over 8 vriendinnen. Hoeveel stickers krijgt elke vriendin?",
    opties: ["15", "12", "16", "960"],
    correct: 0,
  },

  // ─── BREUKEN: EERSTE STAPPEN ───────────────────────────────────
  {
    id: "g6-breuken-1a", concept: "g6-breuken", niveau: 1,
    vraag: "Een taart is in 6 gelijke stukken gesneden. Jij eet er 1. Welk deel van de taart heb je gegeten?",
    opties: ["1/6", "1/5", "6/1", "5/6"],
    correct: 0,
  },
  {
    id: "g6-breuken-1b", concept: "g6-breuken", niveau: 1,
    vraag: "Welke breuk is het grootst?",
    opties: ["1/8", "1/3", "1/5", "1/10"],
    correct: 1,
  },
  {
    id: "g6-breuken-1c", concept: "g6-breuken", niveau: 1,
    vraag: "Een pizza is in 8 gelijke stukken gesneden. Er zijn 5 stukken opgegeten. Welk deel van de pizza is er nog over?",
    opties: ["5/8", "3/5", "3/8", "1/3"],
    correct: 2,
  },
  {
    id: "g6-breuken-1d", concept: "g6-breuken", niveau: 1,
    vraag: "Hoeveel is 1/4 van 20?",
    opties: ["80", "4", "16", "5"],
    correct: 3,
  },
  {
    id: "g6-breuken-2a", concept: "g6-breuken", niveau: 2,
    vraag: "Hoeveel is 2/3 van 24?",
    opties: ["8", "16", "12", "18"],
    correct: 1,
  },
  {
    id: "g6-breuken-2b", concept: "g6-breuken", niveau: 2,
    vraag: "Welke breuk is het grootst?",
    opties: ["4/7", "2/7", "5/7", "3/7"],
    correct: 2,
  },
  {
    id: "g6-breuken-2c", concept: "g6-breuken", niveau: 2,
    vraag: "Je hebt 3/8 van je puzzel al gemaakt. Welk deel moet je nog doen?",
    opties: ["3/8", "1/8", "8/5", "5/8"],
    correct: 3,
  },
  {
    id: "g6-breuken-2d", concept: "g6-breuken", niveau: 2,
    vraag: "In de klas zitten 28 kinderen. 1/4 van de kinderen komt op de fiets naar school. Hoeveel kinderen zijn dat?",
    opties: ["7", "4", "24", "14"],
    correct: 0,
  },

  // ─── METEN ─────────────────────────────────────────────────────
  {
    id: "g6-meten-1a", concept: "g6-meten", niveau: 1,
    vraag: "Hoeveel centimeter is 3 meter?",
    opties: ["30", "300", "3000", "13"],
    correct: 1,
  },
  {
    id: "g6-meten-1b", concept: "g6-meten", niveau: 1,
    vraag: "Hoeveel gram is 2 kilogram?",
    opties: ["200", "20", "2000", "20.000"],
    correct: 2,
  },
  {
    id: "g6-meten-1c", concept: "g6-meten", niveau: 1,
    vraag: "Hoeveel milliliter is 1 liter?",
    opties: ["1000", "10", "100", "10.000"],
    correct: 0,
  },
  {
    id: "g6-meten-1d", concept: "g6-meten", niveau: 1,
    vraag: "Hoeveel meter is 4 kilometer?",
    opties: ["400", "40.000", "40", "4000"],
    correct: 3,
  },
  {
    id: "g6-meten-2a", concept: "g6-meten", niveau: 2,
    vraag: "Een rechthoekige tuin is 9 m lang en 4 m breed. Er komt een hek helemaal om de tuin. Hoe lang is het hek?",
    opties: ["13 m", "36 m", "26 m", "22 m"],
    correct: 2,
  },
  {
    id: "g6-meten-2b", concept: "g6-meten", niveau: 2,
    vraag: "In een pak sap zit 1,5 liter. Hoeveel milliliter is dat?",
    opties: ["150", "1500", "15", "1050"],
    correct: 1,
  },
  {
    id: "g6-meten-2c", concept: "g6-meten", niveau: 2,
    vraag: "Hoe schrijf je 2 meter en 37 centimeter als kommagetal?",
    opties: ["2,037 m", "237 m", "23,7 m", "2,37 m"],
    correct: 3,
  },
  {
    id: "g6-meten-2d", concept: "g6-meten", niveau: 2,
    vraag: "Een rechthoekige fotolijst is 30 cm lang en 20 cm breed. Hoe lang is de rand eromheen?",
    opties: ["100 cm", "50 cm", "600 cm", "80 cm"],
    correct: 0,
  },

  // ─── WERKWOORDEN IN DE TEGENWOORDIGE TIJD ──────────────────────
  {
    id: "g6-ww-1a", concept: "g6-werkwoorden-nu", niveau: 1,
    vraag: "Welke vorm is goed? 'Mijn broer … elke ochtend jam op zijn brood.' (smeren)",
    opties: ["smeer", "smeren", "smeerd", "smeert"],
    correct: 3,
  },
  {
    id: "g6-ww-1b", concept: "g6-werkwoorden-nu", niveau: 1,
    vraag: "Welke vorm is goed? 'Ik … hard aan mijn werkstuk.' (werken)",
    opties: ["werkt", "werk", "werken", "werkd"],
    correct: 1,
  },
  {
    id: "g6-ww-1c", concept: "g6-werkwoorden-nu", niveau: 1,
    vraag: "Welke vorm is goed? 'Wij … samen een hut.' (bouwen)",
    opties: ["bouwt", "bouw", "bouwen", "bouwd"],
    correct: 2,
  },
  {
    id: "g6-ww-1d", concept: "g6-werkwoorden-nu", niveau: 1,
    vraag: "Welk woord is de persoonsvorm? 'Lisa speelt op het plein.'",
    opties: ["speelt", "Lisa", "het", "plein"],
    correct: 0,
  },
  {
    id: "g6-ww-1e", concept: "g6-werkwoorden-nu", niveau: 1,
    vraag: "Welke vorm is goed? 'Jij … heel hard.' (rennen)",
    opties: ["ren", "rent", "rennen", "rend"],
    correct: 1,
  },
  {
    id: "g6-ww-2a", concept: "g6-werkwoorden-nu", niveau: 2,
    vraag: "Welke vorm is goed? '… jij morgen mee naar school?' (lopen)",
    opties: ["Loopt", "Lopen", "Loop", "Liep"],
    correct: 2,
  },
  {
    id: "g6-ww-2b", concept: "g6-werkwoorden-nu", niveau: 2,
    vraag: "Welke vorm is goed? 'Mijn moeder … elke dag naar haar werk.' (rijden)",
    opties: ["rijt", "rijden", "rijd", "rijdt"],
    correct: 3,
  },
  {
    id: "g6-ww-2c", concept: "g6-werkwoorden-nu", niveau: 2,
    vraag: "Welke vorm is goed? 'Ik … dit een spannend boek.' (vinden)",
    opties: ["vindt", "vind", "vint", "vinden"],
    correct: 1,
  },
  {
    id: "g6-ww-2d", concept: "g6-werkwoorden-nu", niveau: 2,
    vraag: "Welke vorm is goed? 'Wanneer … jij je nieuwe fiets?' (krijgen)",
    opties: ["krijg", "krijgt", "krijgen", "krijgd"],
    correct: 0,
  },
  {
    id: "g6-ww-2e", concept: "g6-werkwoorden-nu", niveau: 2,
    vraag: "Welke vorm is goed? 'Mijn broertje … morgen acht jaar.' (worden)",
    opties: ["word", "wordt", "wort", "worden"],
    correct: 1,
  },

  // ─── SPELLING: LEENWOORDEN EN UITGANGEN ────────────────────────
  {
    id: "g6-spelling-1a", concept: "g6-spelling", niveau: 1,
    vraag: "Welk woord is goed geschreven?",
    opties: ["vakantie", "vakansie", "vakantsie", "fakantie"],
    correct: 0,
  },
  {
    id: "g6-spelling-1b", concept: "g6-spelling", niveau: 1,
    vraag: "Een gele vrucht die zuur smaakt. Welk woord is goed geschreven?",
    opties: ["sitroen", "citroen", "citron", "sietroen"],
    correct: 1,
  },
  {
    id: "g6-spelling-1c", concept: "g6-spelling", niveau: 1,
    vraag: "Wat is het meervoud van 'huis'?",
    opties: ["huisen", "huissen", "huizen", "huises"],
    correct: 2,
  },
  {
    id: "g6-spelling-1d", concept: "g6-spelling", niveau: 1,
    vraag: "Welk woord is goed geschreven?",
    opties: ["kamera", "camerra", "kammera", "camera"],
    correct: 3,
  },
  {
    id: "g6-spelling-1e", concept: "g6-spelling", niveau: 1,
    vraag: "Iemand die een vliegtuig bestuurt. Welk woord is goed geschreven?",
    opties: ["pieloot", "pilood", "piloot", "pielood"],
    correct: 2,
  },
  {
    id: "g6-spelling-2a", concept: "g6-spelling", niveau: 2,
    vraag: "Welke schrijfwijze is goed?",
    opties: ["s'morgens", "'s morgens", "smorgens", "'S morgens"],
    correct: 1,
  },
  {
    id: "g6-spelling-2b", concept: "g6-spelling", niveau: 2,
    vraag: "Wat is het meervoud van 'auto'?",
    opties: ["autoos", "autos", "autoes", "auto's"],
    correct: 3,
  },
  {
    id: "g6-spelling-2c", concept: "g6-spelling", niveau: 2,
    vraag: "In welke zin staan de komma's goed?",
    opties: [
      "Ik neem een pen, een gum en een liniaal mee.",
      "Ik neem een pen een gum, en een liniaal mee.",
      "Ik neem, een pen, een gum en een liniaal mee.",
      "Ik neem een pen, een gum, en, een liniaal mee.",
    ],
    correct: 0,
  },
  {
    id: "g6-spelling-2d", concept: "g6-spelling", niveau: 2,
    vraag: "Welk woord is goed geschreven?",
    opties: ["snelhijd", "snelheit", "snelheid", "snelhijt"],
    correct: 2,
  },

  // ─── WOORDSOORTEN ──────────────────────────────────────────────
  {
    id: "g6-woordsoort-1a", concept: "g6-woordsoorten", niveau: 1,
    vraag: "Welk woord is een bijvoeglijk naamwoord? 'Mijn zus heeft een blauwe jas.'",
    opties: ["zus", "heeft", "blauwe", "jas"],
    correct: 2,
  },
  {
    id: "g6-woordsoort-1b", concept: "g6-woordsoorten", niveau: 1,
    vraag: "Welk woord is een zelfstandig naamwoord? 'Wij zwemmen vandaag in het zwembad.'",
    opties: ["Wij", "zwemmen", "vandaag", "zwembad"],
    correct: 3,
  },
  {
    id: "g6-woordsoort-1c", concept: "g6-woordsoorten", niveau: 1,
    vraag: "Welk woord is een werkwoord? 'De vogel zingt een mooi liedje.'",
    opties: ["vogel", "zingt", "mooi", "liedje"],
    correct: 1,
  },
  {
    id: "g6-woordsoort-1d", concept: "g6-woordsoorten", niveau: 1,
    vraag: "Welk woord is een lidwoord? 'Een meisje leest het boek.'",
    opties: ["het", "meisje", "leest", "boek"],
    correct: 0,
  },
  {
    id: "g6-woordsoort-2a", concept: "g6-woordsoorten", niveau: 2,
    vraag: "Welk woord is een voorzetsel? 'De bal ligt achter de schuur.'",
    opties: ["bal", "ligt", "achter", "schuur"],
    correct: 2,
  },
  {
    id: "g6-woordsoort-2b", concept: "g6-woordsoorten", niveau: 2,
    vraag: "Welk woord is een telwoord? 'Oma bakt twaalf koekjes voor ons.'",
    opties: ["twaalf", "Oma", "bakt", "koekjes"],
    correct: 0,
  },
  {
    id: "g6-woordsoort-2c", concept: "g6-woordsoorten", niveau: 2,
    vraag: "Welk woord is een persoonlijk voornaamwoord? 'Morgen gaat hij naar de tandarts.'",
    opties: ["Morgen", "hij", "gaat", "tandarts"],
    correct: 1,
  },
  {
    id: "g6-woordsoort-2d", concept: "g6-woordsoorten", niveau: 2,
    vraag: "Welk woord is een voorzetsel? 'Bram fietst over de brug.'",
    opties: ["Bram", "fietst", "brug", "over"],
    correct: 3,
  },

  // ─── INFORMATIE VINDEN IN EEN TEKST ────────────────────────────
  {
    id: "g6-info-1a", concept: "g6-informatie-in-tekst", niveau: 1,
    vraag: "Lees: 'De kievit is een weidevogel. Hij maakt zijn nest op de grond, midden in het weiland. Een kievit legt meestal vier eieren. Na ongeveer vier weken komen de jongen uit het ei.' Hoeveel eieren legt een kievit meestal?",
    opties: ["twee", "acht", "vier", "zes"],
    correct: 2,
  },
  {
    id: "g6-info-1b", concept: "g6-informatie-in-tekst", niveau: 1,
    vraag: "Lees: 'Bijen maken honing van nectar. Nectar is een zoet sap uit bloemen. De bijen brengen de nectar naar hun kast. Daar wordt de nectar langzaam honing.' Waar halen bijen de nectar vandaan?",
    opties: ["uit de bijenkast", "uit bloemen", "uit het gras", "uit de honing"],
    correct: 1,
  },
  {
    id: "g6-info-1c", concept: "g6-informatie-in-tekst", niveau: 1,
    vraag: "Lees de tekst over de bibliotheek: 'De bibliotheek in ons dorp is op maandag dicht. Op dinsdag en donderdag is hij open van 10.00 tot 17.00 uur. Op woensdagmiddag is er een voorleesuurtje voor kleine kinderen. Boeken lenen is gratis tot je achttien jaar bent.' Tot hoe laat is de bibliotheek op donderdag open?",
    opties: ["17.00 uur", "10.00 uur", "12.00 uur", "18.00 uur"],
    correct: 0,
  },
  {
    id: "g6-info-1d", concept: "g6-informatie-in-tekst", niveau: 1,
    vraag: "Lees: 'De Nijl is een van de langste rivieren ter wereld. Hij stroomt door Afrika en is ongeveer 6650 kilometer lang. De rivier eindigt in de Middellandse Zee. Langs de Nijl wonen al duizenden jaren mensen, omdat daar water is voor hun akkers.' In welke zee eindigt de Nijl?",
    opties: ["de Rode Zee", "de Noordzee", "de Atlantische Oceaan", "de Middellandse Zee"],
    correct: 3,
  },
  {
    id: "g6-info-2a", concept: "g6-informatie-in-tekst", niveau: 2,
    vraag: "Lees: 'Vroeger broedden er veel kieviten in de weilanden. Tegenwoordig maaien boeren het gras vaak al in april. Juist dan zitten de kieviten op hun nest. Daardoor gaan veel nesten verloren. Sommige boeren zetten nu een stokje bij elk nest, zodat de maaier eromheen kan rijden.' Waardoor gaan veel kievitnesten verloren?",
    opties: [
      "Omdat er stokjes bij de nesten staan.",
      "Omdat boeren al maaien als de kieviten nog op hun nest zitten.",
      "Omdat kieviten geen eieren meer leggen.",
      "Omdat er te weinig weilanden zijn.",
    ],
    correct: 1,
  },
  {
    id: "g6-info-2b", concept: "g6-informatie-in-tekst", niveau: 2,
    vraag: "Lees de tekst 'Slapen in de winter': 'Een eekhoorn houdt geen echte winterslaap. Hij slaapt wel veel, maar op zachte dagen wordt hij wakker. Dan zoekt hij de nootjes die hij in de herfst heeft verstopt. Die heeft hij onder de grond begraven.' Waar gaat het woord 'Die' in de laatste zin over?",
    opties: ["de zachte dagen", "de herfst", "de nootjes", "de winterslaap"],
    correct: 2,
  },
  {
    id: "g6-info-2c", concept: "g6-informatie-in-tekst", niveau: 2,
    vraag: "Lees de tekst 'Waarom is de zee zout?': 'Regenwater stroomt over rotsen en neemt daarbij kleine beetjes zout mee. Rivieren brengen dat zout naar de zee. In de zee verdampt het water door de warmte van de zon, maar het zout blijft achter. Zo komt er steeds zout in de zee terecht.' Waarom blijft het zout in de zee achter?",
    opties: [
      "Omdat het zout naar de bodem zakt.",
      "Omdat regenwater heel zout is.",
      "Omdat rivieren het zout weer meenemen.",
      "Omdat alleen het water verdampt en het zout niet.",
    ],
    correct: 3,
  },
  {
    id: "g6-info-2d", concept: "g6-informatie-in-tekst", niveau: 2,
    vraag: "Lees de tekst over de kinderboerderij: 'In het park ligt een kinderboerderij. Daar wonen geiten, kippen en twee varkens. De geiten lopen vrij rond, maar de varkens hebben een eigen hok. Ze zijn namelijk te wild voor kleine kinderen.' Wie zijn er te wild voor kleine kinderen?",
    opties: ["de varkens", "de geiten", "de kippen", "de kinderen"],
    correct: 0,
  },
];

export default { concepten, vragen };
