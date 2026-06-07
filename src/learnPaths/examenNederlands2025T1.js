// Leerpad: Examen-oefenpad Nederlands VMBO-GL/TL 2025 tijdvak 1.
// 8e Nederlands-pad 2026-05-30. 6 echte MC-vragen uit 30.
// Bron: examenblad.nl, 0011 GT 2025-1.
// V1 (kopje/deelonderwerp) · V2 (kern-gegeven) · V13 (hoofdresultaat) ·
// V15 (tekstdoel) · V17 (doel = activeren) · V29 (centrale vraag).

const tekst1 = {
  titel: "T1 — Ook lichte gehoorschade leidt tot lagere schoolresultaten",
  body:
    "**(1)** Uit onderzoek onder ~4.500 Rotterdamse kinderen (Generation R, Erasmus MC) blijkt dat zelfs heel licht gehoorverlies (15-20 decibel) al leidt tot één à twee punten lagere Cito-scores. Jongens hebben daarnaast vaker concentratieproblemen.\n\n**(2)** *Opzet:* twee jaar eerder kregen de 9-11-jarigen een gehoortest; één op de vijf bleek licht gehoorverlies te hebben. De onderzoekers bekeken de Cito-scores en lieten ouders vragenlijsten invullen.\n\n**(3)** *Resultaten:* ook bij heel lichte gehoorschade scoren kinderen lager. Dat matig/slecht gehoor slechter doet presteren wás al bekend — nieuw is dat zélfs heel lichte schade dat effect heeft.\n\n**(4-7)** Waaróm is niet onderzocht; vermoedelijk kost luisteren meer energie. Leraren kunnen rekening houden (kind vooraan zetten). Een vervolgtest volgt op 13-16-jarige leeftijd.",
};

const tekst2 = {
  titel: "T2 — Geen herinnering aan (geheugen voor gesprekken)",
  body:
    "**(1)** Mensen onthouden weinig van gesprekken — belangrijk om te weten (rechtbank, slechtnieuwsgesprek, diplomatie).\n\n**(2-3)** Cognitief psycholoog Sarah Brown-Schmidt onderzoekt wat mensen zich van gesprekken herinneren. Kort na een gesprek nog <20% van de informatie, na een paar dagen nog maar ~6% — alleen de **kern**.\n\n**(4-6)** We onthouden concrete en opvallende dingen beter, en vooral wat we zélf zeiden. We hebben zelfs 'valse' herinneringen (verwachte antwoorden) en vergeten vaak wíe iets zei — ideaal voor nepnieuws.\n\n**(7-11)** Psycholinguïst Eirini Zormpa toont met experimenten het 'generation effect', 'production effect' en 'focus effect': zelf bedenken/hardop zeggen → beter onthouden; antwoorden beter dan vragen.\n\n**(12-14, slot)** Conclusie: we onthouden van nature de **kern** van wat is gezegd, maar bronnen slecht. *(Doel: informeren over onderzoeken naar het onthouden van informatie in gesprekken.)*",
};

const tekst3 = {
  titel: "T3 — NK Tegelwippen (flyer)",
  body:
    "Een flyer voor het *NK Tegelwippen 2024*: van 21 maart t/m 31 oktober strijden gemeenten om de Gouden Tegel en Gouden Schep door tegels te vervangen door groen.\n\n*'Iedereen kan meedoen door tegels in z'n voor-, achter- of geveltuin te vervangen door groen. Zorg ervoor dat jij en je buren klaarstaan, want er is werk aan de winkel!'* Je meldt je gewipte tegels aan via de website.\n\n*(Tekstsoort: flyer/advertentie, met illustraties die de inhoud ondersteunen.)*",
};

const tekst4 = {
  titel: "T4 — Green Friday in plaats van Black Friday, slaat dat aan?",
  body:
    "**(1-2)** Tegenover het koopjesfestijn Black Friday staan initiatieven als *Green Friday*: winkels (Dille & Kamille, Ikea, Bever) sluiten of bieden reparatie/inruil. Black Friday levert wel veel omzet op, maar is velen een doorn in het oog gezien het klimaat.\n\n**(3-5)** Dille & Kamille bedacht met Trees for All Green Friday. Maar als bedrijven tóch korting blijven geven, hoe geloofwaardig is dat? Trees for All scherpte de eisen aan (geen korting) — met ~100 aanmeldingen minder. Sommige bedrijven geven Black Friday een duurzame draai.\n\n**(6-10, slot)** Pablo Druijts (Black Friday Nederland) en milieuactivisten zetten vraagtekens: gaat het om duurzaamheid of om *greenwashing*? De koopgekte lijkt er niet onder te lijden. *(Centrale vraag: zijn deze 'groene' initiatieven écht duurzaam, of doen bedrijven maar alsof?)*",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Nederlands 2025 tijdvak 1, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2025/vmbo-gl/documenten/cse-1/gt-0011-a-25-1-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie:
    "Cito-truc leesvaardigheid: ZOOM IN op kop, alinea 1, slot. Een kopje vat samen waar een blok alinea's over gaat. Hoofdresultaat/hoofdgedachte = de kernuitkomst in 1 zin. Doel-typen: informeren/overtuigen/amuseren/activeren — een flyer/advertentie wil activeren (aanzetten tot doen).",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Onderwerp & resultaat", emoji: "👂", from: 0, to: 2 },
  { letter: "B", title: "Doel & centrale vraag", emoji: "🎯", from: 3, to: 5 },
];

const KETEN = [
  { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "leesstrategie is de basis" },
  { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "examen-leesvaardigheid — kern" },
];

const steps = [
  {
    title: "Vraag 1 — Welk kopje past bij alinea 2-3? (T1 gehoorschade)",
    explanation: "Echte examenvraag uit Nederlands 2025-T1, vraag 1.",
    emoji: "👂",
    checks: [{
      q: "Welk kopje vat de inhoud van de alinea's 2 en 3 het best samen?",
      options: [
        "deelnemers aan de gehoortest",
        "onderzoekers van de gehoortest",
        "resultaten van het onderzoek",
        "uitvoering van het onderzoek",
      ],
      answer: 2,
      wrongHints: [
        "Te smal — de deelnemers worden genoemd, maar dat is niet waar het blok om draait.",
        "Te smal — de onderzoekers zijn een detail, niet de inhoud van beide alinea's samen.",
        null,
        "Dekt alleen alinea 2 (de opzet); alinea 3 gaat juist over wat eruit kwam.",
      ],
      explanation: "Alinea 2 beschrijft de opzet (gehoortest, Cito-scores, vragenlijsten), alinea 3 de uitkomsten ('Uit de resultaten bleek dat...'). Samen draait het blok vooral om wat het onderzoek heeft opgeleverd: de resultaten. Antwoord C.",
      examenBron: BRON_LABEL(1),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Een kopje dekt de KERN van het blok. Alinea 2 vertelt hoe getest is, alinea 3 wat eruit kwam — de payoff. Het overkoepelende kopje is dan 'resultaten van het onderzoek'.",
        {
          basis: "Blok eindigt in de uitkomsten.",
          simpeler: "Waar loopt het blok op uit? De resultaten.",
          nogSimpeler: "Resultaten",
        },
        [
          { woord: "kopje", uitleg: "Een korte titel boven een blok tekst die de inhoud ervan samenvat." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 2 — Wat is het nieuwe gegeven? (T1 gehoorschade)",
    explanation: "Echte examenvraag uit Nederlands 2025-T1, vraag 2.",
    emoji: "👂",
    checks: [{
      q: "Welk tot nu onbekend gegeven is vooral uit het onderzoek naar voren gekomen?",
      options: [
        "Jongens met gehoorschade hebben meer moeite om zich te concentreren.",
        "Jongens met gehoorschade hebben problemen in de omgang met andere kinderen.",
        "Kinderen met een matig of slecht gehoor presteren slechter op school.",
        "Kinderen met heel lichte gehoorschade presteren slechter op school.",
      ],
      answer: 3,
      wrongHints: [
        "Dit is een bijkomende uitkomst, maar niet het 'tot nu onbekende' hoofdresultaat.",
        "Ook een bijvinding — niet het nieuwe kerngegeven van dit onderzoek.",
        "Let op: dit wás al bekend. De vraag vraagt naar wat NIEUW is.",
        null,
      ],
      explanation: "De tekst zegt expliciet dat matig/slecht gehoor → slechter presteren al bekend wás. Nieuw is dat zélfs heel lichte gehoorschade al lagere scores geeft. Antwoord D.",
      examenBron: BRON_LABEL(2),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Let op het woord 'onbekend/nieuw'. De tekst zegt dat matig/slecht gehoor al bekend was — dus dat valt af. Het nieuwe: zélfs héél lichte schade telt al.",
        {
          basis: "Nieuw = heel lichte schade telt al.",
          simpeler: "Wat wisten we nog niet? Lichte schade telt al.",
          nogSimpeler: "Heel lichte schade",
        },
        [
          { woord: "gegeven", uitleg: "Een feit of uitkomst; hier: wat het onderzoek nieuw heeft aangetoond." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 13 — Belangrijkste resultaat (T2 geheugen)",
    explanation: "Echte examenvraag uit Nederlands 2025-T1, vraag 13.",
    emoji: "📖",
    checks: [{
      q: "Wat is het belangrijkste resultaat van de onderzoeken in de tekst 'Geen herinnering aan'?",
      options: [
        "Gespreksdeelnemers onthouden kort na een gesprek het merendeel van dat gesprek.",
        "Gespreksdeelnemers onthouden met name de opvallende woorden van een gesprek.",
        "Gespreksdeelnemers onthouden vooral de kern van het gesprek.",
        "Gespreksdeelnemers onthouden voornamelijk wat ze zelf hebben gezegd.",
      ],
      answer: 2,
      wrongHints: [
        "Tegendeel — al na een korte pauze onthoudt men minder dan 20%, dus niet het merendeel.",
        "Opvallende woorden onthouden we beter, maar dat is een detail, niet het hoofdresultaat.",
        null,
        "Dat klopt deels, maar het overkoepelende resultaat is dat we vooral de kern onthouden.",
      ],
      explanation: "De rode draad door alle onderzoeken: 'in feite onthouden we alleen de kern' en 'mensen herinneren zich van nature de kern van wat is gezegd'. Antwoord C.",
      examenBron: BRON_LABEL(13),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Hoofdresultaat = wat ALLE onderzoeken samen laten zien. Hier komt steeds terug: we vergeten het meeste snel en houden alleen de kern over.",
        {
          basis: "Alleen de kern blijft hangen.",
          simpeler: "Wat onthouden we echt? De kern.",
          nogSimpeler: "De kern",
        },
        [
          { woord: "hoofdresultaat", uitleg: "De belangrijkste uitkomst die uit de hele tekst naar voren komt." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 15 — Tekstdoel (T2 geheugen)",
    explanation: "Echte examenvraag uit Nederlands 2025-T1, vraag 15.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het belangrijkste doel van de tekst 'Geen herinnering aan'?",
      options: [
        "adviseren over de manier waarop mensen de informatie in een gesprek beter kunnen onthouden",
        "adviseren over onderzoeken naar het onthouden van gesprekken",
        "informeren over de manier waarop mensen gesprekken voeren en hoe ze die woordelijk kunnen onthouden",
        "informeren over onderzoeken naar het onthouden van informatie in gesprekken",
      ],
      answer: 3,
      wrongHints: [
        "Adviseren = tips geven. De tekst legt vooral onderzoek uit, ze is geen advies-tekst.",
        "Ook 'adviseren' is hier niet de kern — de tekst beschrijft onderzoek, ze raadt niet aan.",
        "Te smal/onjuist — juist het 'woordelijk' onthouden lukt níet; het gaat om de kern, niet om gespreksvoering.",
        null,
      ],
      explanation: "De tekst beschrijft neutraal verschillende onderzoeken naar wat we van gesprekken onthouden. Dat is informeren — niet adviseren. Antwoord D.",
      examenBron: BRON_LABEL(15),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Informeren = uitleggen/laten weten. Adviseren = tips geven om iets te doen. De tekst beschrijft onderzoeken zonder tips → informeren over onderzoeken.",
        {
          basis: "Beschrijft onderzoek = informeren.",
          simpeler: "Geen tips, wel uitleg over onderzoek.",
          nogSimpeler: "Informeren",
        },
        [
          { woord: "tekstdoel", uitleg: "Wat de schrijver wil bereiken: informeren, overtuigen, amuseren of activeren." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 17 — Doel van de flyer (T3 Tegelwippen)",
    explanation: "Echte examenvraag uit Nederlands 2025-T1, vraag 17.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het belangrijkste doel van deze tekst (NK Tegelwippen)?",
      options: [
        "gemeenten informeren op welke manier ze kunnen winnen met het NK Tegelwippen",
        "gemeenten oproepen om hun inwoners mee te laten doen aan het NK Tegelwippen",
        "lezers aansporen om met hun buren mee te doen aan het NK Tegelwippen",
        "lezers uitleggen hoe het NK Tegelwippen werkt",
      ],
      answer: 2,
      wrongHints: [
        "De flyer richt zich op lezers/burgers ('jij en je buren'), niet op gemeenten als doelgroep.",
        "Ook hier: de oproep gaat naar de lezer zelf, niet naar gemeenten.",
        null,
        "Uitleggen hoe het werkt is een middel; het echte doel is je aanzetten om mee te doen.",
      ],
      explanation: "Een flyer wil activeren. De tekst spoort de lezer rechtstreeks aan: 'Zorg ervoor dat jij en je buren klaarstaan' en 'Meld je gewipte tegels aan'. Antwoord C.",
      examenBron: BRON_LABEL(17),
      bronLink: BRON_LINK,
      bronTekst: tekst3,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Tekstsoort flyer → doel = activeren. Aan wie is het gericht? 'Jij en je buren' = de lezer. Dus: lezers aansporen om mee te doen.",
        {
          basis: "Flyer spoort de lezer aan.",
          simpeler: "Ze willen dat JIJ meedoet.",
          nogSimpeler: "Aansporen mee te doen",
        },
        [
          { woord: "activeren", uitleg: "De lezer aanzetten om concreet iets te doen (meedoen, aanmelden)." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 29 — Centrale vraag van de tekst (T4 Green Friday)",
    explanation: "Echte examenvraag uit Nederlands 2025-T1, vraag 29.",
    emoji: "🎯",
    checks: [{
      q: "Op welke vraag probeert de tekst antwoord te geven?",
      options: [
        "Is het mogelijk dat dagen als Green Friday en Black Friday in de toekomst helemaal afgeschaft worden en wat komt daar eventueel voor in de plaats?",
        "Waarom is Green Friday volgens velen een slecht idee en waarom zouden winkelketens zich niet bezig moeten houden met deze vorm van greenwashing?",
        "Welke winkelketens kiezen voor Green Friday in plaats van voor Black Friday en wat zijn hun argumenten hiervoor?",
        "Zijn initiatieven als Green Friday van winkelketens een mooi initiatief of doen deze bedrijven alleen maar alsof ze zich bezighouden met duurzaamheid?",
      ],
      answer: 3,
      wrongHints: [
        "De tekst gaat niet over afschaffen of vervanging — dat komt niet aan bod.",
        "Te eenzijdig — de tekst zegt niet dat Green Friday slecht is; ze weegt het juist af.",
        "Te smal — welke ketens meedoen is een detail, niet de centrale vraag.",
        null,
      ],
      explanation: "De titel eindigt al met een vraag ('slaat dat aan?') en de tekst weegt steeds af: echte duurzaamheid of greenwashing? Dat is de centrale vraag. Antwoord D.",
      examenBron: BRON_LABEL(29),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "De centrale vraag is de twijfel die de hele tekst onderzoekt. Hier komt steeds terug: menen bedrijven het (duurzaam) of doen ze maar alsof (greenwashing)?",
        {
          basis: "Echt duurzaam of doen ze alsof?",
          simpeler: "De tekst twijfelt: serieus of schijn?",
          nogSimpeler: "Duurzaam of alsof",
        },
        [
          { woord: "greenwashing", uitleg: "Je groener of duurzamer voordoen dan je werkelijk bent." },
        ],
      ),
    }],
  },
];

const path = {
  id: "examen-nederlands-2025-t1",
  subject: "nederlands",
  title: "Examen Nederlands 2025 — tijdvak 1 (VMBO-GL/TL)",
  shortTitle: "Examen Nederlands 2025-T1",
  description: "6 echte examenvragen Nederlands VMBO-GL/TL 2025 tijdvak 1, met didactische uitleg + leerpad-link bij elke fout.",
  groep: "vmbo-gt",
  category: "examen-vmbo",
  chapters,
  steps,
  meta: {
    bron: "examenblad.nl",
    bronLink: BRON_LINK,
    jaar: 2025,
    tijdvak: 1,
    niveau: "vmbo-gltl",
    leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
  },
};

export default path;
