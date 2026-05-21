// Leerpad: Examen-oefenpad Nederlands VMBO-GL/TL 2024 tijdvak 2.
// 4e Nederlands-pad 2026-05-21. 6 echte MC-vragen uit 20.
// Bron: examenblad.nl, 0011 GT 2024-2.
// V1 (inleiding) · V9 (doel T1) · V18 (doel T2) · V23 (doelgroep T3) ·
// V24 (doel advertentie) · V33 (doel T4).

const tekst1 = {
  titel: "T1 — Flitsmeister: 'We bedienen vooral mensen die nét een paar km/u te hard rijden'",
  body:
    "**(1)** Net als op een scherm in een luchtverkeerstoren bewegen tienduizenden blauwe stipjes zich langzaam over de kaart van West-Europa. Ze worden getoond op het kantoor van Flitsmeister in Veenendaal.\n\n**(2)** Wat begon als een simpel lijstje van flitspalen op iemands route is uitgegroeid tot een app met miljoenen gebruikers. Maar Flitsmeister doet inmiddels veel meer dan flitsers melden: filewaarschuwingen, parkeerbetaling, verzekeringskoppeling. *(De tekst introduceert het bedrijf + de app.)*\n\n**(5+)** De app werd ooit gratis omdat de oprichter meer gebruikers wilde — schaal boven directe omzet. Later kwamen betaalde extra's. Het bedrijf is bewust een 'hobbyproject uit de hand gelopen'.\n\n*(De tekst is een interview met de oprichter over de evolutie van Flitsmeister — verandering door de tijd, niet een mening.)*",
};

const tekst2 = {
  titel: "T2 — Wil je me? Leer dan eerst spellen",
  body:
    "**(1)** Leren jongeren nog wel correct spellen? Het klinkt misschien als een verzuchting van een bezorgde grootvader, maar die zorg wordt gedeeld door jongeren zelf. Volgens onderzoek van NRC en De Standaard vinden ruim 7 op de 10 jongeren spelfouten een afknapper op datingsites.\n\n**(3-6)** Linguïst Vandekerckhove deed onderzoek: spelvaardigheid van jongeren is afgenomen, maar dat betekent niet dat dictees ophouden te bestaan. Sociale media zijn vaak informeel — daar mogen 'me' en 'm'n' door elkaar. Maar in officiële teksten verwachten lezers WEL goede spelling.\n\n**(8-10)** Conclusie peiling: jongeren keuren spelfouten in cv's en op dates streng af. *Slotbevinding: jongeren weten dat spelling op SOMMIGE momenten ertoe doet, ook al maken ze er zelf in chats minder werk van.*",
};

const tekst3 = {
  titel: "T3 — Advertentie Independer: 'De ene zorgverzekering is de andere niet'",
  body:
    "**De ene zorgverzekering is de andere niet**\n\nWe lijken soms best veel op elkaar. Toch zijn we allemaal net een tikje anders. De een heeft genoeg aan een bitje. Een ander zit jarenlang vast aan slotjes. Ook elke zorgverzekering is een tikje anders.\n\n*(Afbeelding: kind met beugel)*\n\nBij Independer vergelijk je alle zorgverzekeringen op één plek. Dan vind je de polis die precies past bij wat jouw kind nodig heeft — of dat nu een bitje is of slotjes voor twee jaar. **Sluit eenvoudig en snel af via Independer.nl.**\n\n*(advertentie van Independer)*",
};

const tekst4 = {
  titel: "T4 — Vegan leer: diervriendelijk en duurzaam, of synoniem voor plastic?",
  body:
    "**(1)** Vegan leer heeft vaak een negatief imago en wordt beschouwd als 'nepleer'. Maar Abigail Bakker (36), eigenaar van de duurzame Geitenwollenwinkel, is het daar niet mee eens. Veel vegan-leer voldoet aan kwaliteitseisen — zeker bij intensief gebruikte werktassen.\n\n**(3-7)** Vegan leer kan gemaakt zijn van plastic (PU, PVC) — niet diervriendelijk EN niet duurzaam. Maar er zijn ook biobased alternatieven: van appelschillen, ananasbladeren, cactus, druivenpitten. Onderzoeker Stillman: 'Op het vlak van milieu valt nog winst te behalen.' Mensen vergeten vaak dat 'vegan' niet automatisch 'duurzaam' betekent.\n\n**(8-11)** De industrie werkt aan kwaliteit + biobased ontwikkeling. Het beeld 'vegan = altijd plastic' klopt steeds minder. Slot: er zijn drie generaties vegan leer — van plastic naar plant-gebaseerd. *(De tekst is informerend over de ontwikkeling, niet overtuigend.)*",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Nederlands 2024 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2024/vmbo-gl/documenten/cse-2/gt-0011-a-24-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie:
    "Cito leesvaardigheid: 4 doel-typen (informeren/overtuigen/amuseren/activeren). Onderwerp-introductie ≠ centraal probleem ≠ aanleiding. Advertentie = bijna altijd activeren. Interview = bijna altijd informeren. Doelgroep = de IDENTITEIT die wordt aangesproken.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Inleidings-types", emoji: "📖", from: 0, to: 0 },
  { letter: "B", title: "Doel & doelgroep", emoji: "🎯", from: 1, to: 5 },
];

const steps = [
  {
    title: "Vraag 1 — Hoe wordt T1 ingeleid (Flitsmeister)?",
    explanation: "Echte examenvraag uit Nederlands 2024-T2, vraag 1.",
    emoji: "📖",
    checks: [{
      q: "Op welke manier wordt de tekst ingeleid in de alinea's 1 en 2?",
      options: [
        "door de aanleiding voor het schrijven van de tekst te noemen",
        "door het centrale probleem aan de orde te stellen",
        "door het onderwerp te introduceren",
        "door verschillende voorbeelden te geven",
      ],
      answer: 2,
      wrongHints: [
        "Aanleiding = de gebeurtenis NU die maakt dat dit geschreven wordt. Niet in alinea 1-2.",
        "Probleem = iets dat MIS is. Alinea 1-2 noemen geen probleem rond Flitsmeister.",
        null,
        "Voorbeelden = meerdere concrete gevallen. Alinea 1-2 schetsen 1 beeld (kantoor), geen rijtje.",
      ],
      explanation: "Alinea 1-2 schetsen het Flitsmeister-kantoor + het bedrijf — letterlijk het onderwerp 'wat IS Flitsmeister' wordt geïntroduceerd. Geen probleem, geen aanleiding, geen voorbeelden — gewoon onderwerps-introductie. Antwoord C.",
      examenBron: BRON_LABEL(1),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "inleidings-types: aanleiding/probleem/onderwerp/voorbeeld" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "tekststructuur — kern" },
      ],
      uitlegPad: compact(
        "Inleiding kan: AANLEIDING (gebeurtenis NU), PROBLEEM (iets mis), ONDERWERP (wat IS X), VOORBEELDEN (3+ concrete gevallen), ANEKDOTE (verhaaltje), DEFINITIE. Hier: beschrijving van wat Flitsmeister IS = onderwerps-introductie. = C.",
        {
          basis: "'Wat IS X' beschrijving = onderwerps-introductie. = C.",
          simpeler: "Alinea 1-2 zeggen wie/wat Flitsmeister is. Onderwerp introduceren. = C.",
          nogSimpeler: "Onderwerp = C.",
        },
        [
          { woord: "introduceren", uitleg: "Voor het eerst voorstellen of laten zien." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 9 — Doel T1 (Flitsmeister-interview)",
    explanation: "Echte examenvraag uit Nederlands 2024-T2, vraag 9.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het belangrijkste doel van deze tekst?",
      options: [
        "lezers informeren over de samenwerking tussen Flitsmeister en de overheid",
        "lezers informeren over veranderingen die Flitsmeister heeft doorgemaakt",
        "lezers overtuigen om vaker gebruik te gaan maken van de Flitsmeister-app",
        "lezers overtuigen van het nut van de Flitsmeister-app voor de weggebruiker",
      ],
      answer: 1,
      wrongHints: [
        "Te smal — overheidssamenwerking komt 1× ter sprake, geen rode draad.",
        null,
        "Overtuigen = mening + actie-oproep. Interview noemt geen oproep om de app te gaan gebruiken.",
        "Overtuigen vraagt MENING. Interview is feitelijk + chronologisch, geen pleidooi.",
      ],
      explanation: "Interview-tekst over hoe Flitsmeister zich ONTWIKKELDE — van flitserlijst naar volledige app. Chronologisch + feitelijk = informeren. Specifiek: VERANDERINGEN die het bedrijf doorging. Antwoord B.",
      examenBron: BRON_LABEL(9),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "interview = informeren (bijna altijd)" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "schrijfdoel + tekstsoort — kern" },
      ],
      uitlegPad: compact(
        "Interview = de schrijver geeft de geïnterviewde het woord — feiten + ontwikkeling. Bijna altijd informeren. Hier: van flitserlijst → multi-app = veranderingen. = B.",
        {
          basis: "Interview over hoe iets veranderde = informeren over veranderingen. = B.",
          simpeler: "De tekst vertelt wat er met Flitsmeister GEBEURDE. = B.",
          nogSimpeler: "Veranderingen = B.",
        },
        [
          { woord: "informeren", uitleg: "Feiten geven zonder mening op te dringen." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 18 — Doel T2 (jongeren + spelling)",
    explanation: "Echte examenvraag uit Nederlands 2024-T2, vraag 18.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het belangrijkste doel van deze tekst? De lezer informeren over",
      options: [
        "het gegeven dat jongeren door de tijd heen slechter zijn gaan spellen",
        "het onderzoeksresultaat dat jongeren spelling op datingsites belangrijk vinden",
        "onderzoek dat vertelt wat jongeren van spelfouten vinden",
        "spelfouten die jongeren maken op sociale media",
      ],
      answer: 2,
      wrongHints: [
        "Te smal + onjuist — tekst noemt geen historische dalende lijn, maar HOE jongeren NU denken.",
        "Te smal — datingsite is 1 van de contexten (peiling NRC), maar de tekst zegt veel meer.",
        null,
        "Te smal + verkeerd accent — tekst gaat over WAT jongeren VINDEN van fouten, niet welke fouten ze MAKEN.",
      ],
      explanation: "De tekst combineert ONDERZOEK (Vandekerckhove + NRC-peiling) met wat jongeren VINDEN van spelfouten. Antwoord C is breed genoeg om beide te dekken — 'onderzoek wat jongeren van spelfouten vinden'. Antwoord B is té smal (alleen datingsite). Antwoord C.",
      examenBron: BRON_LABEL(18),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "doel-formuleringen vergelijken op SCOPE" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "informeren over X — precisie — kern" },
      ],
      uitlegPad: compact(
        "Bij doel-vragen: kijk welke optie ALLE alineas dekt. Tekst combineert onderzoek + opinie van jongeren = 'onderzoek wat jongeren VAN spelfouten VINDEN'. Optie C dekt zowel onderzoek als mening. = C.",
        {
          basis: "Onderzoek + mening jongeren = optie C dekt allebei. = C.",
          simpeler: "Wat zit ER ALLEMAAL in? Onderzoek + opinie. C zegt dat. = C.",
          nogSimpeler: "Onderzoek+opinie = C.",
        },
        [
          { woord: "scope", uitleg: "De BREEDTE van wat een bewering of doel dekt." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 23 — Doelgroep T3 (Independer-advertentie)",
    explanation: "Echte examenvraag uit Nederlands 2024-T2, vraag 23.",
    emoji: "🎯",
    checks: [{
      q: "Welke doelgroep wordt vooral aangesproken in deze advertentie?",
      options: [
        "kinderen die een beugel nodig hebben",
        "mensen die een nieuwe zorgverzekering nodig hebben",
        "ouders en verzorgers van kinderen die een beugel nodig hebben",
        "zorgverzekeraars die beugels en bitjes vergoeden",
      ],
      answer: 2,
      wrongHints: [
        "Kinderen sluiten geen zorgverzekering af — ze worden niet ZELF aangesproken.",
        "Te breed — advertentie noemt specifiek BEUGELS/BITJES voor kinderen. Geen algemene verzekerings-tekst.",
        null,
        "Zorgverzekeraars zijn de CONCURRENTEN/leveranciers, niet de doelgroep van een vergelijkings-advertentie.",
      ],
      explanation: "'Beugel/bitje voor kind' + 'wat jouw kind nodig heeft' = de advertentie spreekt OUDERS/VERZORGERS aan die voor hun KIND een zorgverzekering kiezen. Niet de kinderen zelf (kunnen niet kopen), niet algemene zorgverzekerings-zoekers (te breed). Antwoord C.",
      examenBron: BRON_LABEL(23),
      bronLink: BRON_LINK,
      bronTekst: tekst3,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "doelgroep = wie KAN actie ondernemen op deze tekst" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "advertentie-analyse — kern" },
      ],
      uitlegPad: compact(
        "Doelgroep = wie ECHT de oproep KAN/WIL doen. Filter: kinderen kopen geen verzekering, zorgverzekeraars zijn de concurrent. Blijven over: ouders die voor kind kiezen. Plus de tekst zegt 'voor jouw kind'. = C.",
        {
          basis: "Wie koopt voor het kind? Ouder. = C.",
          simpeler: "Kinderen kopen niets. Verzekeraars zijn concurrent. Ouders kiezen. = C.",
          nogSimpeler: "Ouders = C.",
        },
        [
          { woord: "doelgroep", uitleg: "De mensen die de tekst probeert te bereiken en aan te zetten tot actie." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 24 — Doel T3 (Independer-advertentie)",
    explanation: "Echte examenvraag uit Nederlands 2024-T2, vraag 24.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het belangrijkste doel van deze advertentie?",
      options: [
        "lezers aansporen om een zorgverzekering af te sluiten die beugels vergoedt",
        "lezers aansporen om via Independer een zorgverzekering af te sluiten",
        "lezers informeren over de beste zorgverzekering voor kinderen met een beugel",
        "lezers informeren over de verschillende verzekeringen van Independer",
      ],
      answer: 1,
      wrongHints: [
        "Te specifiek — Independer wil ALLE verzekeringen via zich verkocht hebben, niet alleen beugel-verzekeringen.",
        null,
        "Informeren ≠ doel van een advertentie. Advertentie WIL actie.",
        "Informeren ≠ doel van een advertentie. Independer verkoopt geen eigen verzekeringen, vergelijkt ze.",
      ],
      explanation: "Advertentie = activeren. Specifiek: 'Sluit eenvoudig en snel af via Independer.nl' — de oproep is om VIA INDEPENDER te kiezen, niet om een specifieke verzekering. Antwoord B.",
      examenBron: BRON_LABEL(24),
      bronLink: BRON_LINK,
      bronTekst: tekst3,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "advertentie = activeren — naar WAT precies" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "specificeer call-to-action — kern" },
      ],
      uitlegPad: compact(
        "Advertentie-doel altijd activeren. WAARtoe? Zoek de exacte oproep in de tekst. Hier: 'Sluit af via Independer.nl' — niet 'sluit beugel-verzekering af' (te smal). = B.",
        {
          basis: "Oproep = 'via Independer afsluiten'. = B.",
          simpeler: "Independer is een vergelijker — wil dat je VIA HEN kiest. = B.",
          nogSimpeler: "Via Independer = B.",
        },
        [
          { woord: "call-to-action", uitleg: "De expliciete oproep in een advertentie wat je moet doen." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 33 — Doel T4 (vegan leer)",
    explanation: "Echte examenvraag uit Nederlands 2024-T2, vraag 33.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het doel van deze tekst? De lezer",
      options: [
        "informeren over de nadelen van vegan leer",
        "informeren over de ontwikkeling van vegan leer",
        "overhalen om toch dierlijk leer te kopen",
        "overhalen om voortaan alleen vegan leer te kopen",
      ],
      answer: 1,
      wrongHints: [
        "Te smal — tekst noemt ZOWEL nadelen (plastic) ALS voordelen (biobased) — een ONTWIKKELING.",
        null,
        "Overhalen = mening + aansporing. Tekst neemt geen kant — beschrijft.",
        "Overhalen = mening + aansporing. Tekst is genuanceerd — geen 'koop alleen X' boodschap.",
      ],
      explanation: "Tekst legt 3 generaties vegan leer uit (plastic → biobased), met voor- en nadelen. Geen mening 'koop dit'. = informeren. Specifiek: ONTWIKKELING door de tijd. Antwoord B.",
      examenBron: BRON_LABEL(33),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "neutraal beschrijven = informeren, ook bij voor/nadeel-mix" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "schrijfdoel + scope — kern" },
      ],
      uitlegPad: compact(
        "Bij voor/nadeel-mix zonder eigen mening = informeren. Bij KANT KIEZEN = overtuigen. Hier 3 generaties + genuanceerd = ontwikkeling. = B.",
        {
          basis: "3 generaties beschreven zonder mening = informeren over ontwikkeling. = B.",
          simpeler: "Tekst kiest geen kant — beschrijft hoe vegan leer veranderde. = B.",
          nogSimpeler: "Ontwikkeling = B.",
        },
        [
          { woord: "ontwikkeling", uitleg: "Hoe iets in de loop van de tijd veranderd of gegroeid is." },
        ],
      ),
    }],
  },
];

const path = {
  id: "examen-nederlands-2024-t2",
  subject: "nederlands",
  title: "Examen Nederlands 2024 — tijdvak 2 (VMBO-GL/TL)",
  shortTitle: "Examen Nederlands 2024-T2",
  description: "6 echte examenvragen Nederlands VMBO-GL/TL 2024 tijdvak 2, met didactische uitleg + leerpad-link bij elke fout.",
  groep: "vmbo-gt",
  category: "examen-vmbo",
  chapters,
  steps,
  meta: {
    bron: "examenblad.nl",
    bronLink: BRON_LINK,
    jaar: 2024,
    tijdvak: 2,
    niveau: "vmbo-gltl",
    leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
  },
};

export default path;
