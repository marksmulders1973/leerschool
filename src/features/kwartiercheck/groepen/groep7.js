// Kwartiercheck — groep 7 (medio groep 7, januari/februari).
// Ontwerp: docs/kwartiercheck/CONCEPTEN-PER-GROEP.md § 6.
// Niveau 1 = stof die er al in moet zitten (eind groep 6 + begin groep 7).
// Niveau 2 = stof van halverwege groep 7, in een verhaaltje of lastiger vorm.
// Per concept 3 × niveau 1 (1e vraag + bevestiging + reserve) en 2 × niveau 2.
// Eigen vragen "in de stijl van" de Doorstroomtoets — niets overgenomen.

const concepten = [
  // ─── REKENEN ───────────────────────────────────────────────────
  {
    id: "g7-breuken",
    label: "Rekenen met breuken",
    vak: "rekenen",
    leerpadId: "breuken-po",
    leerpadTitel: "Breuken",
  },
  {
    id: "g7-kommagetallen",
    label: "Kommagetallen",
    vak: "rekenen",
    leerpadId: "kommagetallen-po",
    leerpadTitel: "Kommagetallen",
  },
  {
    id: "g7-procenten",
    label: "Procenten: eerste stappen",
    vak: "rekenen",
    leerpadId: "procenten-po",
    leerpadTitel: "Procenten",
  },
  {
    id: "g7-meten-oppervlakte",
    label: "Meten, omrekenen en oppervlakte",
    vak: "rekenen",
    leerpadId: "maten-omtrek-oppervlakte-po",
    leerpadTitel: "Maten, omtrek en oppervlakte",
  },

  // ─── TAAL ──────────────────────────────────────────────────────
  {
    id: "g7-werkwoordspelling",
    label: "Werkwoordspelling (d of t)",
    vak: "taal",
    leerpadId: "werkwoordsspelling-dt",
    leerpadTitel: "Werkwoordsspelling d/t",
  },
  {
    id: "g7-spelling-leestekens",
    label: "Spelling en leestekens",
    vak: "taal",
    leerpadId: "spelling-overige-po",
    leerpadTitel: "Spelling",
  },
  {
    id: "g7-woordenschat",
    label: "Woordenschat en uitdrukkingen",
    vak: "taal",
    leerpadId: "woordenschat-po",
    leerpadTitel: "Woordenschat",
  },

  // ─── BEGRIJPEND LEZEN ──────────────────────────────────────────
  {
    id: "g7-hoofdgedachte-verbanden",
    label: "Hoofdgedachte en verbanden in een tekst",
    vak: "begrijpend-lezen",
    leerpadId: "samenvatten-hoofdgedachte-po",
    leerpadTitel: "Samenvatten & hoofdgedachte",
  },
];

const vragen = [
  // ─── BREUKEN ───────────────────────────────────────────────────
  {
    id: "g7-breuken-1a", concept: "g7-breuken", niveau: 1,
    vraag: "Welke breuk is even groot als 3/4?",
    opties: ["4/6", "3/8", "6/8", "5/6"],
    correct: 2,
  },
  {
    id: "g7-breuken-1b", concept: "g7-breuken", niveau: 1,
    vraag: "Maak de breuk zo eenvoudig mogelijk: 6/10 = ?",
    opties: ["3/10", "3/5", "2/3", "1/2"],
    correct: 1,
  },
  {
    id: "g7-breuken-1c", concept: "g7-breuken", niveau: 1,
    vraag: "Hoeveel is 2/7 + 3/7?",
    opties: ["5/14", "6/7", "1/7", "5/7"],
    correct: 3,
  },
  {
    id: "g7-breuken-2a", concept: "g7-breuken", niveau: 2,
    vraag: "In groep 7 zitten 28 kinderen. 3/4 van de kinderen neemt een lunchpakket mee op schoolreis. Hoeveel kinderen nemen een lunchpakket mee?",
    opties: ["21", "7", "25", "24"],
    correct: 0,
  },
  {
    id: "g7-breuken-2b", concept: "g7-breuken", niveau: 2,
    vraag: "Mila heeft 11/4 liter limonade. Hoeveel liter is dat?",
    opties: ["2 1/4 liter", "3 1/4 liter", "11,4 liter", "2 3/4 liter"],
    correct: 3,
  },

  // ─── KOMMAGETALLEN ─────────────────────────────────────────────
  {
    id: "g7-kommagetallen-1a", concept: "g7-kommagetallen", niveau: 1,
    vraag: "Welk getal is het grootst?",
    opties: ["4,09", "4,1", "4,089", "4,01"],
    correct: 1,
  },
  {
    id: "g7-kommagetallen-1b", concept: "g7-kommagetallen", niveau: 1,
    vraag: "Hoeveel is 3,6 + 1,25?",
    opties: ["4,85", "4,31", "4,95", "3,85"],
    correct: 0,
  },
  {
    id: "g7-kommagetallen-1c", concept: "g7-kommagetallen", niveau: 1,
    vraag: "Hoeveel is 2,5 × 10?",
    opties: ["250", "2,50", "20,5", "25"],
    correct: 3,
  },
  {
    id: "g7-kommagetallen-2a", concept: "g7-kommagetallen", niveau: 2,
    vraag: "Een schrift kost € 1,85. Je koopt er 4. Hoeveel moet je betalen?",
    opties: ["€ 7,20", "€ 6,40", "€ 7,40", "€ 74,00"],
    correct: 2,
  },
  {
    id: "g7-kommagetallen-2b", concept: "g7-kommagetallen", niveau: 2,
    vraag: "Bij verspringen springt Sanne 3,45 m. Ruben springt 2,9 m. Hoeveel meter springt Sanne verder dan Ruben?",
    opties: ["1,36 m", "0,55 m", "0,65 m", "1,55 m"],
    correct: 1,
  },

  // ─── PROCENTEN ─────────────────────────────────────────────────
  {
    id: "g7-procenten-1a", concept: "g7-procenten", niveau: 1,
    vraag: "Hoeveel is 50% van 90?",
    opties: ["45", "9", "40", "50"],
    correct: 0,
  },
  {
    id: "g7-procenten-1b", concept: "g7-procenten", niveau: 1,
    vraag: "25% is hetzelfde als …",
    opties: ["een tiende", "een vijfde", "de helft", "een kwart"],
    correct: 3,
  },
  {
    id: "g7-procenten-1c", concept: "g7-procenten", niveau: 1,
    vraag: "Hoeveel is 10% van 350?",
    opties: ["35", "3,5", "340", "70"],
    correct: 0,
  },
  {
    id: "g7-procenten-2a", concept: "g7-procenten", niveau: 2,
    vraag: "In een klas zitten 20 kinderen. 25% van hen gaat met de bus naar school. Hoeveel kinderen gaan met de bus?",
    opties: ["25", "4", "5", "15"],
    correct: 2,
  },
  {
    id: "g7-procenten-2b", concept: "g7-procenten", niveau: 2,
    vraag: "Een spel kost € 40. In de uitverkoop krijg je 10% korting. Hoeveel betaal je?",
    opties: ["€ 4", "€ 30", "€ 44", "€ 36"],
    correct: 3,
  },

  // ─── METEN & OPPERVLAKTE ───────────────────────────────────────
  {
    id: "g7-meten-oppervlakte-1a", concept: "g7-meten-oppervlakte", niveau: 1,
    vraag: "Hoeveel meter is 2,5 kilometer?",
    opties: ["250 m", "25 m", "2500 m", "25.000 m"],
    correct: 2,
  },
  {
    id: "g7-meten-oppervlakte-1b", concept: "g7-meten-oppervlakte", niveau: 1,
    vraag: "Hoeveel gram is 1,2 kilogram?",
    opties: ["1200 g", "120 g", "12 g", "1020 g"],
    correct: 0,
  },
  {
    id: "g7-meten-oppervlakte-1c", concept: "g7-meten-oppervlakte", niveau: 1,
    vraag: "Een rechthoekige tuin is 9 m lang en 4 m breed. Er komt een hek omheen. Hoe lang is het hek?",
    opties: ["13 m", "26 m", "36 m", "22 m"],
    correct: 1,
  },
  {
    id: "g7-meten-oppervlakte-2a", concept: "g7-meten-oppervlakte", niveau: 2,
    vraag: "Een kamer is 5 m lang en 3,5 m breed. Hoeveel m² is de vloer?",
    opties: ["8,5 m²", "15,5 m²", "17 m²", "17,5 m²"],
    correct: 3,
  },
  {
    id: "g7-meten-oppervlakte-2b", concept: "g7-meten-oppervlakte", niveau: 2,
    vraag: "Een wandelroute is 3,2 km lang. Je hebt al 1800 m gelopen. Hoeveel meter moet je nog?",
    opties: ["140 m", "2400 m", "1400 m", "5000 m"],
    correct: 2,
  },

  // ─── WERKWOORDSPELLING ─────────────────────────────────────────
  {
    id: "g7-werkwoordspelling-1a", concept: "g7-werkwoordspelling", niveau: 1,
    vraag: "Welk woord is de persoonsvorm? 'Na school speelt Noor met haar vriendinnen.'",
    opties: ["school", "speelt", "Noor", "vriendinnen"],
    correct: 1,
  },
  {
    id: "g7-werkwoordspelling-1b", concept: "g7-werkwoordspelling", niveau: 1,
    vraag: "Welke vorm is goed? 'Mijn broer … elke ochtend de krant.' (lezen)",
    opties: ["lees", "leesd", "leest", "lezen"],
    correct: 2,
  },
  {
    id: "g7-werkwoordspelling-1c", concept: "g7-werkwoordspelling", niveau: 1,
    vraag: "Welke vorm is goed? 'Lotte … meteen op mijn berichtje.' (antwoorden)",
    opties: ["antwoord", "antwoort", "antwoorden", "antwoordt"],
    correct: 3,
  },
  {
    id: "g7-werkwoordspelling-2a", concept: "g7-werkwoordspelling", niveau: 2,
    vraag: "Welke vorm is goed? 'Gisteren … ik mijn kamer op.' (opruimen)",
    opties: ["ruimte", "ruimde", "ruimden", "ruimt"],
    correct: 1,
  },
  {
    id: "g7-werkwoordspelling-2b", concept: "g7-werkwoordspelling", niveau: 2,
    vraag: "Welke vorm is goed? 'Vorige week … wij samen een taart.' (bakken)",
    opties: ["bakte", "bakden", "bakten", "gebakken"],
    correct: 2,
  },

  // ─── SPELLING & LEESTEKENS ─────────────────────────────────────
  {
    id: "g7-spelling-leestekens-1a", concept: "g7-spelling-leestekens", niveau: 1,
    vraag: "Welk woord is goed geschreven?",
    opties: ["praktis", "praktisch", "praktiesch", "praktish"],
    correct: 1,
  },
  {
    id: "g7-spelling-leestekens-1b", concept: "g7-spelling-leestekens", niveau: 1,
    vraag: "Welk woord is goed geschreven?",
    opties: ["sjokolade", "chokolade", "chocolade", "sjocolade"],
    correct: 2,
  },
  {
    id: "g7-spelling-leestekens-1c", concept: "g7-spelling-leestekens", niveau: 1,
    vraag: "Welk woord is goed geschreven?",
    opties: ["theater", "teater", "theather", "theatre"],
    correct: 0,
  },
  {
    id: "g7-spelling-leestekens-2a", concept: "g7-spelling-leestekens", niveau: 2,
    vraag: "Welke zin is goed geschreven?",
    opties: [
      "Mijn oma woont in noord-Holland.",
      "Mijn oma woont in Noord-holland.",
      "Mijn oma woont in noord-holland.",
      "Mijn oma woont in Noord-Holland.",
    ],
    correct: 3,
  },
  {
    id: "g7-spelling-leestekens-2b", concept: "g7-spelling-leestekens", niveau: 2,
    vraag: "Welke zin is goed geschreven?",
    opties: [
      'Opa vroeg: "wil je thee?"',
      'Opa vroeg: "Wil je thee?"',
      'Opa vroeg "Wil je thee"?',
      "Opa vroeg: Wil je thee?",
    ],
    correct: 1,
  },

  // ─── WOORDENSCHAT ──────────────────────────────────────────────
  {
    id: "g7-woordenschat-1a", concept: "g7-woordenschat", niveau: 1,
    vraag: "Wat betekent 'vergroten'?",
    opties: ["groter maken", "kleiner maken", "groot zijn", "vergeten"],
    correct: 0,
  },
  {
    id: "g7-woordenschat-1b", concept: "g7-woordenschat", niveau: 1,
    vraag: "Wat is het tegenovergestelde van 'toestaan'?",
    opties: ["verbieden", "toegeven", "beloven", "vragen"],
    correct: 0,
  },
  {
    id: "g7-woordenschat-1c", concept: "g7-woordenschat", niveau: 1,
    vraag: "Welk woord past boven deze groep: hamer, zaag, schroevendraaier?",
    opties: ["timmerman", "spijker", "gereedschap", "werkplaats"],
    correct: 2,
  },
  {
    id: "g7-woordenschat-2a", concept: "g7-woordenschat", niveau: 2,
    vraag: "Lees de zin: 'Omdat de weg spiegelglad was, reed de bus heel behoedzaam over de dijk.' Wat betekent 'behoedzaam'?",
    opties: ["snel", "voorzichtig", "luidruchtig", "scheef"],
    correct: 1,
  },
  {
    id: "g7-woordenschat-2b", concept: "g7-woordenschat", niveau: 2,
    vraag: "Wat betekent de uitdrukking 'met de deur in huis vallen'?",
    opties: [
      "per ongeluk struikelen als je binnenkomt",
      "te laat binnenkomen",
      "iemand niet binnenlaten",
      "meteen zeggen waar het om gaat",
    ],
    correct: 3,
  },

  // ─── HOOFDGEDACHTE & VERBANDEN ─────────────────────────────────
  {
    id: "g7-hoofdgedachte-verbanden-1a", concept: "g7-hoofdgedachte-verbanden", niveau: 1,
    vraag: "Lees de tekst. “Op steeds meer schoolpleinen staan moestuinbakken. Kinderen zaaien er in het voorjaar radijsjes, sla en bonen. Elke week geven ze de plantjes water en halen ze het onkruid weg. In de zomer mogen ze oogsten wat ze hebben gekweekt. Veel kinderen proeven dan voor het eerst een groente die ze zelf hebben laten groeien.” Waar gaat de tekst vooral over?",
    opties: [
      "Kinderen die op school groente kweken",
      "Hoe je onkruid weghaalt",
      "Groenten die kinderen niet lekker vinden",
      "Schoolpleinen die te klein zijn",
    ],
    correct: 0,
  },
  {
    id: "g7-hoofdgedachte-verbanden-1b", concept: "g7-hoofdgedachte-verbanden", niveau: 1,
    vraag: "Lees de tekst. “Jesse wilde heel graag mee naar de voetbalwedstrijd. Die ochtend had hij koorts, daarom moest hij thuisblijven. Zijn vader nam de wedstrijd op, zodat Jesse hem later toch kon zien. 's Avonds keken ze samen op de bank.” Waarom moest Jesse thuisblijven?",
    opties: [
      "Zijn vader nam de wedstrijd op.",
      "Er waren geen kaartjes meer.",
      "Hij had koorts.",
      "Hij wilde liever op de bank zitten.",
    ],
    correct: 2,
  },
  {
    id: "g7-hoofdgedachte-verbanden-1c", concept: "g7-hoofdgedachte-verbanden", niveau: 1,
    vraag: "Lees de tekst. “Uilen jagen vooral 's nachts. Ze kunnen in het donker heel goed zien. Bovendien horen ze een muis al van ver ritselen. Toch lukt niet elke jacht.” Welk woord laat zien dat er nog iets bij komt?",
    opties: ["Toch", "Bovendien", "vooral", "heel"],
    correct: 1,
  },
  {
    id: "g7-hoofdgedachte-verbanden-2a", concept: "g7-hoofdgedachte-verbanden", niveau: 2,
    vraag: "Lees de tekst. “Vroeger gooiden de meeste mensen oude kleren gewoon weg. Nu brengen steeds meer mensen hun kleding naar een tweedehandswinkel. Daar kan iemand anders er weer blij mee worden. Ook hoeft er dan minder nieuwe stof gemaakt te worden, en daarvoor is veel water en energie nodig. Van kapotte kleding kan soms zelfs nieuwe draad worden gemaakt. Zo krijgt een oude trui een tweede leven.” Welke zin vertelt het belangrijkste van de tekst?",
    opties: [
      "Voor nieuwe stof is veel water en energie nodig.",
      "Vroeger hadden mensen minder kleren dan nu.",
      "Oude kleren kunnen vaak opnieuw gebruikt worden in plaats van weggegooid.",
      "In een tweedehandswinkel kun je alleen truien kopen.",
    ],
    correct: 2,
  },
  {
    id: "g7-hoofdgedachte-verbanden-2b", concept: "g7-hoofdgedachte-verbanden", niveau: 2,
    vraag: "Lees de tekst. “Bij een klein dorp is vorig jaar een nieuwe snelweg aangelegd. Sindsdien rijden er veel minder vrachtwagens door de Dorpsstraat. Daardoor is het daar een stuk rustiger geworden. Ouders laten hun kinderen nu vaker alleen naar school fietsen. De bakker in de Dorpsstraat is minder blij: er stoppen minder mensen voor een broodje.” Waarom laten ouders hun kinderen nu vaker alleen naar school fietsen?",
    opties: [
      "Omdat de bakker minder klanten heeft.",
      "Omdat het in de Dorpsstraat rustiger is geworden.",
      "Omdat de school dichterbij is gekomen.",
      "Omdat de kinderen ouder zijn geworden.",
    ],
    correct: 1,
  },
];

export default { concepten, vragen };
