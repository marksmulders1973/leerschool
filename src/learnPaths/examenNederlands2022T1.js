// Leerpad: Examen-oefenpad Nederlands VMBO-GL/TL 2022 tijdvak 1.
// 6e Nederlands-pad 2026-05-30. 6 echte MC-vragen uit 36.
// Bron: examenblad.nl, 0011 GT 2022-1.
// V2 (verband in zin) · V7 (deelonderwerp) · V13 (hoofdgedachte) ·
// V17 (betekenis "afzwakt") · V26 (doel advertentie) · V29 (kernboodschap).

const tekst1 = {
  titel: "T1 — Moet de smartphone ook in Nederlandse scholen worden verboden?",
  body:
    "**(1-2)** Frankrijk verbood smartphones op basisscholen en colleges: de apparaten leiden de aandacht van scholieren te veel af en frustreren zo het opdoen van kennis. Zou zo'n verbod ook in Nederland goed zijn?\n\n**(3-5)** In Nederland mogen scholen het zelf bepalen. Hoogleraar Paul Kirschner: mensen kunnen niet multitasken — 'we hebben maar één stel hersens'. Alleen bij een automatisme (strijken, lopen) lukt twee dingen tegelijk.\n\n**(6-8)** Kirschner verbiedt schermen tijdens zijn colleges; een flikkerend scherm leidt ook de buurman af. Overheidscijfers (DUO) bevestigen: smartphones in de klas → lagere cijfers en zwakkere taal- en leesvaardigheid.\n\n**(9-12)** Kennisnet (Remco Pijpers): scholen gaan er beter mee om, maar het is een ongelijke strijd tegen verslavende techniek. Tegelijk bieden nieuwe technologieën ook voordelen. *(Deelonderwerp 9-12: zoeken naar evenwichtig gebruik.)*\n\n**(13-14, slot)** Verantwoord gebruik moet vooral door ouders worden bijgebracht; orthopedagoog Groeneveld geeft advies: praat erover, stel toetsbare regels, geef zelf het goede voorbeeld. *(Slot = advies.)*",
};

const tekst2 = {
  titel: "T2 — We worden slimmer, maar niet per se wijzer",
  body:
    "**(1-4)** IQ-scores stijgen al een eeuw, elk decennium ~3 punten — het *Flynn-effect*. Nederlandse 18-jarigen uit de jaren 80 scoorden 20 punten hoger dan die uit de jaren 50. De stijging gaat wereldwijd door.\n\n**(5-6)** Over de oorzaak wordt gespeculeerd: kleinere gezinnen (meer aandacht), betere voeding/zorg/scholing, en andere manieren van spelen (computerspelletjes → ruimtelijk inzicht, vooruitdenken, snel reageren).\n\n**(7)** Toch zijn we niet over de hele breedte slimmer: we redeneren beter, maar ons vocabulaire is zwakker.\n\n**(8, slot)** Recente onderzoeken tonen dat de toename in IQ *afzwakt* — d.w.z. het gemiddelde IQ stijgt minder hard dan voorheen. De oorzaak is onbekend: 'We weten nog te weinig over hoe intelligentie zich ontwikkelt.' *(Hoofdgedachte: de stijgende IQ-scores roepen vooral vragen op — er is veel onzeker.)*",
};

const tekst3 = {
  titel: "T3 — Advertentie: 'Als je taal leuk vindt, doe er dan wat mee!'",
  body:
    "Een advertentie (met een afbeelding van woordmagneten op een koelkast) roept lezers op om **taalvrijwilliger** te worden: help nieuwkomers in Nederland de Nederlandse taal te leren.\n\nHet werk heeft twee voordelen — één voor de vrijwilliger zelf en één voor de nieuwe landgenoten. De advertentie eindigt met een concrete oproep: **kijk op de website en geef je op als taalcoach**.\n\n*(Tekstsoort: advertentie. De afbeelding ondersteunt de inhoud en trekt de aandacht.)*",
};

const tekst4 = {
  titel: "T4 — Duurzaam leven lukt niet altijd en dat vinden we 'stom'",
  body:
    "**(1-2)** Duurzaam leven: we willen wel, maar doen het niet — een *discrepantie*, blijkt uit onderzoek van Milieu Centraal. Onderzoekers vroegen naar dagelijkse dingen (korter douchen, plantaardige melk, plastic scheiden, minder vlees).\n\n**(3-5)** Vooral minder vlees en korter douchen lukt niet. 41% vindt een maaltijd zonder vlees 'armoedig'. Jongeren vinden het stom van zichzelf, maar douchen juist langer.\n\n**(6-8)** Gedragsdeskundige Anne Kluivers: 'Gewoontegedrag veranderen is moeilijk.' Je hebt kennis, nieuwe normen én een meewerkende omgeving nodig. De sociale norm (koemelk is normaal, vlees = welvaart) drukt zwaar.\n\n**(9-10, slot)** Van vlees nemen we moeilijker afscheid dan van het plastic tasje. Daarom kiest Milieu Centraal voor een *campagne van kleine stapjes*: niet 'word veganist', maar 'probeer eens een dagje geen kaas' — in de hoop dat een dagje 150 dagen wordt.",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Nederlands 2022 tijdvak 1, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2022/vmbo-gl/documenten/cse-1/gt-0011-a-22-1-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie:
    "Toets-truc leesvaardigheid: ZOOM IN op kop, alinea 1, slot. Deelonderwerp = wat dit STUK behandelt, hoofdonderwerp = wat de HELE tekst behandelt, hoofdgedachte = wat de schrijver wil zeggen IN 1 ZIN. Verbanden: let op signaalwoorden (daarmee/daardoor = oorzaak-gevolg; maar/toch = tegenstelling). Doel-typen: informeren/overtuigen/amuseren/activeren.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Verbanden & onderwerpen", emoji: "🔗", from: 0, to: 2 },
  { letter: "B", title: "Hoofdgedachte & doel", emoji: "🎯", from: 3, to: 5 },
];

const KETEN = [
  { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "leesstrategie is de basis" },
  { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "examen-leesvaardigheid — kern" },
];

const steps = [
  {
    title: "Vraag 2 — Welk verband? (T1 smartphone)",
    explanation: "Echte examenvraag uit Nederlands 2022-T1, vraag 2.",
    emoji: "🔗",
    checks: [{
      q: "\"De apparaten leiden volgens hem de aandacht van de tieners af en frustreren daarmee het opdoen van kennis (...)\" (regels 15-18). Van welk verband is er sprake in deze zin?",
      options: ["middel - doel", "oorzaak - gevolg", "opsomming", "uitspraak - toelichting"],
      answer: 1,
      wrongHints: [
        "Middel-doel = 'om te...'. Hier gebeurt iets en dáárdoor volgt iets — dat is een ander verband.",
        null,
        "Opsomming = los naast elkaar (en... en...). Hier volgt het tweede uit het eerste.",
        "Toelichting = uitleg geven. Hier is het tweede deel een gevólg, geen uitleg.",
      ],
      explanation: "Het signaalwoord 'daarmee' wijst op een gevolg: afleiden (oorzaak) → kennis opdoen wordt gefrustreerd (gevolg). Dus oorzaak-gevolg.",
      examenBron: BRON_LABEL(2),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Zoek het signaalwoord. 'Daarmee' / 'daardoor' = oorzaak-gevolg. Het eerste (afleiden) veroorzaakt het tweede (kennis opdoen lukt niet).",
        {
          basis: "'Daarmee' = gevolg.",
          simpeler: "Door A gebeurt B → oorzaak-gevolg.",
          nogSimpeler: "Oorzaak-gevolg",
        },
        [
          { woord: "verband", uitleg: "De manier waarop twee zinsdelen of zinnen met elkaar samenhangen." },
          { woord: "signaalwoord", uitleg: "Een woord dat het verband verraadt (daardoor, maar, want, bijvoorbeeld)." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 7 — Deelonderwerp alinea 9-12 (T1 smartphone)",
    explanation: "Echte examenvraag uit Nederlands 2022-T1, vraag 7.",
    emoji: "📖",
    checks: [{
      q: "De alinea's 9 tot en met 12 hebben een gezamenlijk deelonderwerp. Welk deelonderwerp is dat?",
      options: [
        "nadelen van het gebruiken van smartphones op school",
        "nieuwe technologieën op school dankzij smartphones",
        "ongelijke strijd voor docenten tegen smartphones",
        "zoeken naar evenwichtig gebruik van smartphones op school",
      ],
      answer: 3,
      wrongHints: [
        "Te eenzijdig — deze alinea's noemen óók voordelen en oplossingen, niet alleen nadelen.",
        "Te smal — voordelen zijn één punt; het blok gaat over de balans als geheel.",
        "Te smal — de 'ongelijke strijd' is één opmerking, niet het deelonderwerp van alle vier de alinea's.",
        null,
      ],
      explanation: "Alinea 9-12: scholen praten erover, zoeken balans tussen voor- en nadelen, en proberen kinderen te leren focussen. De rode draad door dit blok = zoeken naar evenwichtig gebruik.",
      examenBron: BRON_LABEL(7),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Deelonderwerp = wat dit BLOK alinea's samen behandelt (niet één detail). Lees de eerste en laatste alinea van het blok: balans + leren focussen → evenwichtig gebruik.",
        {
          basis: "Blok 9-12 = balans zoeken.",
          simpeler: "Wat hebben die alinea's gemeen? Evenwicht zoeken.",
          nogSimpeler: "Evenwichtig gebruik",
        },
        [
          { woord: "deelonderwerp", uitleg: "Het sub-thema dat één blok alinea's samen behandelt." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 13 — Hoofdgedachte (T1 smartphone)",
    explanation: "Echte examenvraag uit Nederlands 2022-T1, vraag 13.",
    emoji: "📖",
    checks: [{
      q: "Welke zin geeft het best de hoofdgedachte van de tekst weer?",
      options: [
        "Nederland moet, net als Frankrijk, een smartphoneverbod op scholen invoeren, omdat de schoolcijfers en -prestaties achteruitgaan.",
        "Smartphonegebruik op scholen zorgt voor lagere cijfers en prestaties, maar er kan in Nederland geen landelijk smartphoneverbod op school ingevoerd worden.",
        "Verantwoord smartphonegebruik aanleren is belangrijk, onder andere omdat de cijfers en prestaties op school achteruitgaan.",
        "Verantwoord smartphonegebruik aanleren is puur een taak voor ouders, ook al vinden veel ouders dit erg lastig.",
      ],
      answer: 2,
      wrongHints: [
        "Te stellig — de tekst roept niet op tot een verbod zoals Frankrijk; in NL kan dat niet eens landelijk.",
        "Te smal — dit is één detail (geen landelijk verbod mogelijk), niet de boodschap van de hele tekst.",
        null,
        "Te smal — ouders spelen een rol, maar de tekst legt het niet 'puur' bij hen; school en samenleving doen ook mee.",
      ],
      explanation: "De hoofdgedachte draagt de hele tekst: gebruik leidt tot lagere prestaties, een verbod is in NL lastig, dus de nadruk ligt op het AANLEREN van verantwoord gebruik (door school én ouders). Antwoord C dekt dat het breedst.",
      examenBron: BRON_LABEL(13),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Hoofdgedachte = de boodschap van de HELE tekst in 1 zin. Niet te smal (1 detail), niet te stellig (de tekst eist geen verbod). Kern: verantwoord gebruik aanleren is belangrijk.",
        {
          basis: "Kern = verantwoord gebruik aanleren.",
          simpeler: "Wat wil de schrijver vooral zeggen? Leer er goed mee omgaan.",
          nogSimpeler: "Aanleren verantwoord gebruik",
        },
        [
          { woord: "hoofdgedachte", uitleg: "De centrale boodschap van de tekst, samengevat in 1 zin." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 17 — Wat betekent 'de toename zwakt af'? (T2 IQ)",
    explanation: "Echte examenvraag uit Nederlands 2022-T1, vraag 17.",
    emoji: "🎯",
    checks: [{
      q: "\"(...) dat de toename in IQ afzwakt.\" (regels 78-79). Wat wordt hiermee bedoeld?",
      options: [
        "De scores op IQ-tests lopen steeds minder uiteen.",
        "De scores zijn lager op alle onderdelen van de IQ-test.",
        "Het gemiddelde IQ neemt langzamerhand af.",
        "Het gemiddelde IQ stijgt minder hard dan voorheen.",
      ],
      answer: 3,
      wrongHints: [
        "Dat gaat over verschillen tussen scores; 'toename afzwakt' gaat over hoe snel het gemiddelde stijgt.",
        "De tekst zegt niet dat alles lager wordt — het IQ stijgt nog steeds, alleen langzamer.",
        "Let op: 'toename afzwakt' ≠ 'IQ daalt'. Het IQ wordt nog steeds hoger, maar trager.",
        null,
      ],
      explanation: "'De toename zwakt af' = het IQ stijgt nog steeds, maar minder snel dan vroeger. Het daalt dus niet — de groei wordt alleen kleiner.",
      examenBron: BRON_LABEL(17),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Lees nauwkeurig: 'toename afzwakt' = de STIJGING wordt kleiner, niet dat het IQ daalt. Het gemiddelde stijgt nog, maar minder hard.",
        {
          basis: "Stijgt nog, maar trager.",
          simpeler: "Het wordt nog steeds hoger, alleen langzamer.",
          nogSimpeler: "Minder hard stijgen",
        },
        [
          { woord: "afzwakken", uitleg: "Minder sterk worden. Een afzwakkende toename = de stijging wordt kleiner." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 26 — Doel van de advertentie (T3 taalvrijwilliger)",
    explanation: "Echte examenvraag uit Nederlands 2022-T1, vraag 26.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het belangrijkste doel van deze advertentie? Lezers...",
      options: [
        "aansporen op de website hetbegintmettaal.nl/word-taalcoach te kijken",
        "informeren over allerlei manieren om de wereld te verbeteren",
        "oproepen om zich op te geven als taalvrijwilliger",
        "overtuigen dat de wereld met taal verbeterd kan worden",
      ],
      answer: 2,
      wrongHints: [
        "Te smal — de website bekijken is een middel; het echte doel zit erachter.",
        "Informeren = iets laten weten. Een advertentie wil juist dat je iets DOET.",
        null,
        "Overtuigen van een idee is niet het hoofddoel — de advertentie wil concrete actie: meld je aan.",
      ],
      explanation: "Een advertentie wil bijna altijd activeren (tot actie aanzetten). De kern hier: meld je aan als taalvrijwilliger. De website is daarbij het middel.",
      examenBron: BRON_LABEL(26),
      bronLink: BRON_LINK,
      bronTekst: tekst3,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Tekstsoort → doel: NIEUWSARTIKEL = informeren, OPINIE = overtuigen, ADVERTENTIE = activeren. Hier: word vrijwilliger = oproep tot actie.",
        {
          basis: "Advertentie = activeren.",
          simpeler: "Ze willen dat je iets DOET: je aanmelden.",
          nogSimpeler: "Oproepen tot actie",
        },
        [
          { woord: "activeren", uitleg: "De lezer aansporen om concreet iets te doen (aanmelden, kopen, klikken)." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 29 — Kernboodschap onderzoek (T4 duurzaam)",
    explanation: "Echte examenvraag uit Nederlands 2022-T1, vraag 29.",
    emoji: "📖",
    checks: [{
      q: "Wat is de belangrijkste boodschap uit het onderzoek van Milieu Centraal, volgens de alinea's 1 en 2?",
      options: [
        "We kunnen nog niet duurzamer leven, omdat er te veel hindernissen zijn.",
        "We vinden vooral dat anderen duurzamer moeten leven, zelf doen we al genoeg.",
        "We wensen een duurzamer leven, maar weigeren ons gedrag aan te passen.",
        "We willen wel duurzamer leven, maar het lukt ons nog niet om te veranderen.",
      ],
      answer: 3,
      wrongHints: [
        "Te negatief — de tekst zegt niet dat het 'niet kan', maar dat het ons nog niet lukt.",
        "Dat staat er niet — het gaat juist over onszelf (wel willen, niet doen), niet over anderen.",
        "'Weigeren' is te sterk — het is geen onwil maar onmacht/gewoonte ('het komt er niet van').",
        null,
      ],
      explanation: "Alinea 1-2: 'we willen wel, maar we doen het niet' — een discrepantie tussen wens en gedrag. Niet onwil, maar het lukt nog niet.",
      examenBron: BRON_LABEL(29),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Let op het verschil tussen 'kan niet' (onmogelijk), 'weigert' (onwil) en 'lukt nog niet' (wens botst met gewoonte). De tekst zegt: we willen wél, maar veranderen lukt nog niet.",
        {
          basis: "Willen wel, lukt nog niet.",
          simpeler: "We wíllen duurzamer, maar doen het (nog) niet.",
          nogSimpeler: "Wel willen, niet doen",
        },
        [
          { woord: "discrepantie", uitleg: "Een kloof tussen twee dingen — hier: tussen wat we willen en wat we doen." },
        ],
      ),
    }],
  },
];

const path = {
  id: "examen-nederlands-2022-t1",
  subject: "taal",
  title: "Examen Nederlands 2022 — tijdvak 1 (VMBO-GL/TL)",
  shortTitle: "Examen Nederlands 2022-T1",
  description: "6 echte examenvragen Nederlands VMBO-GL/TL 2022 tijdvak 1, met didactische uitleg + leerpad-link bij elke fout.",
  groep: "vmbo-gt",
  category: "examen-vmbo",
  chapters,
  steps,
  meta: {
    bron: "examenblad.nl",
    bronLink: BRON_LINK,
    jaar: 2022,
    tijdvak: 1,
    niveau: "vmbo-gltl",
    leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
  },
};

export default path;
