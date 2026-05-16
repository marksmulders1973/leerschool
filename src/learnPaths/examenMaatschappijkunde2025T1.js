// Leerpad: Examen-oefenpad Maatschappijkunde VMBO-GL/TL 2025 tijdvak 1.
// 2026-05-16: 4e maatschappij-pilot. 6 echte MC-vragen geselecteerd uit 16.
// Bron: examenblad.nl, 1127 GT 2025-1.

const tekst1 = {
  titel: "T1 — 'Thuiswerkwet' D66 + GroenLinks sneuvelt in Eerste Kamer",
  body:
    "Een wetsvoorstel van D66 en GroenLinks waardoor werkgevers een verzoek om thuis te mogen werken niet meer zomaar zouden mogen weigeren, is gesneuveld in de Eerste Kamer. De fracties van BBB, VVD, PVV, JA21, FVD, SGP en 50PLUS stemden tegen, waardoor het voorstel met de kleinst mogelijke meerderheid is verworpen.\n\n(Eerste Kamer telt 75 leden + voorzitter = 75 stemmen. 'Kleinst mogelijke meerderheid' = 38-37.)",
};

const tekst11 = {
  titel: "T11 — Rechtszitting ouders die zoontje van 8 lieten stelen",
  body:
    "Pas 8 jaar was het jongetje, toch werd hij door zijn ouders meegenomen op rooftocht langs drogisterijen. Hij liep met gestolen parfums naar buiten terwijl ook zijn ouders flesjes meenamen zonder af te rekenen. 'Ze brengen hun 8-jarige kind zo op het criminele pad,' zei de officier van justitie donderdag 30 november. De officier eiste 100 uur taakstraf voor beide ouders en stelde voor dat de kinderbescherming wordt ingeschakeld. Het 8-jarige jongetje hoeft niet zelf voor de rechter te verschijnen — vanwege zijn leeftijd is hij niet strafrechtelijk verantwoordelijk.",
};

const tekst14 = {
  titel: "T14 — Minister Weerwind bezoekt 'vadervleugel' gevangenis Veenhuizen",
  body:
    "Demissionair minister voor Rechtsbescherming Franc Weerwind heeft een werkbezoek gebracht aan gevangenis Veenhuizen. Weerwind ging in gesprek met twee gedetineerden die op de **vadervleugel** verblijven. Op deze afdeling is plek voor 23 gemotiveerde gedetineerden die vader zijn en tijdens hun detentie in staat worden gesteld om de band met hun kinderen te onderhouden via extra bezoek-uren, ouder-cursussen en gezamenlijk koken. Doel: bij vrijlating een hechte gezinsband + lagere recidive.",
};

const tekst17 = {
  titel: "T17 — Vrouw Schijndel mishandelt ambtenaar gemeente Meierijstad",
  body:
    "Een vrouw (27) uit Schijndel heeft dinsdagmiddag van de rechter een **taakstraf van 150 uur** gekregen voor poging tot zware mishandeling van een ambtenaar van de gemeente Meierijstad. Ook moet ze een **schadevergoeding van €2000** betalen en kreeg ze een **voorwaardelijke celstraf van twee maanden** voor als ze nog een keer in de fout gaat. (Hoofdstraffen: gevangenisstraf / hechtenis / taakstraf / geldboete. Bijkomende straf: ontzegging rijbevoegdheid / verbeurdverklaring. Maatregel: schadevergoeding / TBS / onttrekking aan het verkeer.)",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Maatschappijkunde 2025 tijdvak 1, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2025/vmbo-gl/documenten/cse-1/gt-1127-a-25-1-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc maatschappij: zoek SLEUTELBEGRIP + match definitie. Recht parlement? 4 rechten (amendement/initiatief/budget/interpellatie). Rechtszitting? 5 onderdelen (tenlastelegging→verhoor→requisitoir→pleidooi→vonnis). Crimineel-gedrag-theorie? 4 hoofdtheorieën (anomie/binding/etiket/neutralisatie).",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Parlement & politiek", emoji: "🏛️", from: 0, to: 0 },
  { letter: "B", title: "Strafrecht & rechtszitting", emoji: "⚖️", from: 1, to: 3 },
  { letter: "C", title: "Criminologie & media", emoji: "🔍", from: 4, to: 5 },
];

const steps = [
  {
    title: "Vraag 1 — D66 + GroenLinks Thuiswerkwet: welk parlement-recht?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2025-T1, vraag 1.",
    emoji: "🎓",
    checks: [{
      q: "Van welk recht van het parlement hebben Tweede Kamerleden van D66 en GroenLinks gebruikgemaakt om de Thuiswerkwet in te dienen?",
      options: [
        "het budgetrecht",
        "het recht om moties in te dienen",
        "het recht van amendement",
        "het recht van initiatief",
      ],
      answer: 3,
      wrongHints: ["Budgetrecht = jaarlijks Rijksbegroting goedkeuren. Niet over thuiswerken-wet.", "Moties = de regering oproepen iets te doen of niet. Geen wet zelf indienen.", "Amendement = bestaande wet WIJZIGEN. Hier is een NIEUWE wet ingediend.", null],
      explanation: "**Recht van initiatief** = Kamerleden mogen ZELF nieuwe wetsvoorstellen indienen (i.p.v. dat dit alleen via de regering loopt). D66+GroenLinks dienden zelf een Thuiswerkwet in via initiatiefrecht. Antwoord D.",
      examenBron: BRON_LABEL(1),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & parlement" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'parlement', 'amendement', 'initiatief', 'motie', 'budgetrecht'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "Kamer-rechten + parlement — kern" },
      ],
      uitlegPad: compact(
        "4 Kamer-rechten onthouden: AMENDEMENT (wet WIJZIGEN), INITIATIEF (NIEUWE wet voorstellen), BUDGET (Rijksbegroting goedkeuren), INTERPELLATIE (minister verantwoording vragen). Plus MOTIE (oproep). D66+GroenLinks indienen = initiatief.",
        { basis: "Nieuwe wet indienen = initiatief. = D.", simpeler: "Initiatief = jij start iets nieuws. Ze MAAKTEN de wet zelf — niet alleen aanpassen. = D.", nogSimpeler: "Initiatief = D." },
        [{ woord: "recht van initiatief", uitleg: "Kamerleden mogen zelf nieuwe wetsvoorstellen indienen." }, { woord: "amendement", uitleg: "Wijziging op bestaande wettekst." }],
      ),
    }],
  },
  {
    title: "Vraag 17 — Onderdelen rechtszitting: requisitoir",
    explanation: "Echte examenvraag uit Maatschappijkunde 2025-T1, vraag 17.",
    emoji: "🎓",
    checks: [{
      q: "Een rechtszitting bestaat uit verschillende onderdelen. In tekst 11 zegt de officier van justitie: 'Ze brengen hun 8-jarige kind zo op het criminele pad. Ik eis 100 uur taakstraf voor beide ouders.' Welk onderdeel van de rechtszitting komt hier aan bod?",
      options: [
        "de tenlastelegging",
        "het pleidooi",
        "het requisitoir",
        "het verhoor",
      ],
      answer: 2,
      wrongHints: ["Tenlastelegging = de OFFICIËLE aanklacht voorlezen (waarvan word je beschuldigd). Hier is de officier al verder.", "Pleidooi = de ADVOCAAT van de verdachte spreekt. Hier spreekt de officier van JUSTITIE.", null, "Verhoor = vragen STELLEN. Hier zegt de officier zijn EIS — geen vraag."],
      explanation: "**Requisitoir** = het deel van de rechtszitting waarin de officier van justitie zijn EIS uitspreekt (vaak: feitelijke uiteenzetting + strafmaat-eis). Volgorde: 1) tenlastelegging 2) onderzoek/verhoor 3) requisitoir (OvJ) 4) pleidooi (advocaat) 5) vonnis (rechter). Antwoord C.",
      examenBron: BRON_LABEL(17),
      bronLink: BRON_LINK,
      bronTekst: tekst11,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & rechtssysteem" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'tenlastelegging', 'requisitoir', 'pleidooi', 'verhoor'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "rechtszitting + strafrecht — kern" },
      ],
      uitlegPad: compact(
        "Volgorde rechtszitting: 1) TENLASTELEGGING (aanklacht voorlezen) → 2) VERHOOR (vragen aan verdachte) → 3) REQUISITOIR (OvJ eist straf) → 4) PLEIDOOI (advocaat verdedigt) → 5) VONNIS (rechter beslist). 'Officier eist X straf' = requisitoir.",
        { basis: "OvJ eist straf = requisitoir. = C.", simpeler: "Re-quisi-toir van REQUEST = officier VRAAGT/EIST de straf. = C.", nogSimpeler: "Requisitoir = C." },
        [{ woord: "requisitoir", uitleg: "Toespraak officier van justitie met strafeis." }, { woord: "pleidooi", uitleg: "Toespraak advocaat verdedigt verdachte." }, { woord: "tenlastelegging", uitleg: "Officiële aanklacht voorlezen." }],
      ),
    }],
  },
  {
    title: "Vraag 22 — Vadervleugel + criminaliteit-theorie",
    explanation: "Echte examenvraag uit Maatschappijkunde 2025-T1, vraag 22.",
    emoji: "🎓",
    checks: [{
      q: "Met welke theorie over crimineel gedrag past het idee van de 'vadervleugel' in gevangenis Veenhuizen het beste samen (gedetineerden houden band met kinderen)?",
      options: [
        "anomietheorie",
        "bindingstheorie",
        "etikettentheorie",
        "neutraliseringstheorie",
      ],
      answer: 1,
      wrongHints: ["Anomie = normloze samenleving (Durkheim). Geen direct verband met FAMILIEbanden.", null, "Etikettering = 'eens een dief = altijd een dief'-stempel. Vadervleugel doet juist het OMGEKEERDE.", "Neutralisering = goedpraten van eigen criminaliteit ('ik moest wel'). Geen verband met familie."],
      explanation: "**Bindingstheorie** (Hirschi): wie sterke BANDEN heeft met familie/werk/school/maatschappij komt minder snel in de criminaliteit. Vadervleugel versterkt vader-kind-band → minder recidive. Antwoord B.",
      examenBron: BRON_LABEL(22),
      bronLink: BRON_LINK,
      bronTekst: tekst14,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & criminologie" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'theorie', 'binding', 'anomie', 'etikettering', 'neutraliseren'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "criminologie-theorieën — kern" },
      ],
      uitlegPad: compact(
        "4 criminaliteit-theorieën: ANOMIE (Durkheim — normloze samenleving), BINDING (Hirschi — sterke banden voorkomen criminaliteit), ETIKETTERING (stempel houdt iemand in criminaliteit), NEUTRALISATIE (criminelen praten gedrag goed). Vadervleugel = familieband versterken = binding.",
        { basis: "Familieband = bindingstheorie. = B.", simpeler: "Binding aan familie/werk/school → minder criminaliteit. Vadervleugel houdt vader+kind-band. = B.", nogSimpeler: "Binding = B." },
        [{ woord: "bindingstheorie", uitleg: "Sterke sociale banden voorkomen crimineel gedrag (Hirschi)." }, { woord: "anomie", uitleg: "Normloze, ontregelde samenleving." }],
      ),
    }],
  },
  {
    title: "Vraag 30 — Rechtsstaat-kenmerk + ontsnappingspoging",
    explanation: "Echte examenvraag uit Maatschappijkunde 2025-T1, vraag 30.",
    emoji: "🎓",
    checks: [{
      q: "Een gedetineerde probeerde uit de gevangenis te ontsnappen. Hij werd hiervoor NIET extra gestraft, omdat 'ontsnappen' niet als apart strafbaar feit in de wet staat. Volgens welk kenmerk van de rechtsstaat krijgt hij geen extra straf?",
      options: [
        "Alle burgers zijn voor de wet gelijk.",
        "Er is sprake van een machtenscheiding.",
        "Er is sprake van rechtshandhaving.",
        "Het legaliteitsbeginsel geldt.",
      ],
      answer: 3,
      wrongHints: ["Gelijkheid = iedereen wordt gelijk behandeld. Hier gaat het niet om gelijkheid maar om wát strafbaar is.", "Machtenscheiding = wetgevende/uitvoerende/rechterlijke macht apart. Niet direct hier.", "Rechtshandhaving = wetten DOEN naleven. Hier vraagt vraag wat strafbaar IS.", null],
      explanation: "**Legaliteitsbeginsel** = NULLA POENA SINE LEGE = geen straf zonder wet. Als ontsnappen niet expliciet als strafbaar feit in de wet staat, kan iemand er niet voor gestraft worden. Een fundamenteel rechtsstaat-principe. Antwoord D.",
      examenBron: BRON_LABEL(30),
      bronLink: BRON_LINK,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & rechtsstaat" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'rechtsstaat', 'legaliteitsbeginsel', 'machtenscheiding'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "rechtsstaat-kenmerken — kern" },
      ],
      uitlegPad: compact(
        "4 rechtsstaat-kenmerken: GELIJKHEID (iedereen gelijk voor wet), MACHTENSCHEIDING (3 machten gescheiden — Trias Politica Montesquieu), RECHTSHANDHAVING (wet WORDT naleeft), LEGALITEITSBEGINSEL (geen straf zonder wet). Latijn: 'nulla poena sine lege'.",
        { basis: "Geen wet = geen straf = legaliteitsbeginsel. = D.", simpeler: "Legaliteit = alleen straf als het in de WET staat. Ontsnappen staat niet in de wet → geen straf. = D.", nogSimpeler: "Legaliteit = D." },
        [{ woord: "legaliteitsbeginsel", uitleg: "Geen straf zonder wet (nulla poena sine lege)." }, { woord: "machtenscheiding", uitleg: "Wetgevende + uitvoerende + rechterlijke macht apart (Trias Politica)." }],
      ),
    }],
  },
  {
    title: "Vraag 33 — Wie leest de aanklacht voor in rechtszitting?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2025-T1, vraag 33.",
    emoji: "🎓",
    checks: [{
      q: "Wie leest in een rechtszitting de aanklacht (tenlastelegging) voor?",
      options: [
        "de advocaat",
        "de officier van justitie",
        "de rechter",
        "het slachtoffer",
      ],
      answer: 1,
      wrongHints: ["Advocaat = verdedigt de VERDACHTE. Leest niet de aanklacht voor — die is jegens zijn cliënt.", null, "Rechter = LEIDT de zitting + spreekt vonnis. Aanklacht voorlezen is taak OvJ.", "Slachtoffer = mag wel verklaring afleggen, maar leest niet de officiële aanklacht voor."],
      explanation: "**Officier van justitie** (OvJ) is de aanklager namens de staat. Leest TENLASTELEGGING voor (= 'u wordt verdacht van...') aan begin van rechtszitting. Later in zitting volgt zijn REQUISITOIR met strafeis. Antwoord B.",
      examenBron: BRON_LABEL(33),
      bronLink: BRON_LINK,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & rechtssysteem" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'officier van justitie', 'aanklacht', 'tenlastelegging'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "rolverdeling rechtszitting — kern" },
      ],
      uitlegPad: compact(
        "Rolverdeling rechtszitting: OvJ (aanklager namens staat) leest aanklacht + eist straf. RECHTER leidt zitting + spreekt vonnis. ADVOCAAT verdedigt verdachte. Slachtoffer mag verklaring afleggen. OvJ + rechter + advocaat = de 3 hoofdrolspelers.",
        { basis: "Aanklacht voorlezen = OvJ. = B.", simpeler: "Officier van justitie = staats-aanklager. Hij/zij leest waarvan iemand wordt beschuldigd. = B.", nogSimpeler: "OvJ = B." },
        [{ woord: "officier van justitie", uitleg: "Aanklager namens staat — leest aanklacht en eist straf." }, { woord: "tenlastelegging", uitleg: "Officiële beschrijving wat iemand wordt verweten." }],
      ),
    }],
  },
  {
    title: "Vraag 40 — TikTok-influencers + vapende jongeren: welke theorie?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2025-T1, vraag 40.",
    emoji: "🎓",
    checks: [{
      q: "Via TikTok kunnen jongeren beïnvloed worden om te gaan vapen. Een influencer toont vapen als 'cool, vrij, modern' — die positieve INVALSHOEK bepaalt hoe kijkers het onderwerp zien. Welke theorie over media-beïnvloeding past hierbij?",
      options: [
        "de agendatheorie",
        "de framingtheorie",
        "de injectienaaldtheorie",
      ],
      answer: 1,
      wrongHints: ["Agendatheorie = media bepalen WAAR mensen over praten (welke onderwerpen) — niet hoe ze het inkaderen.", null, "Injectienaaldtheorie = media-boodschap wordt direct 'ingespoten' (oude/onhoudbare theorie). Past niet bij subtiele framing."],
      explanation: "**Framingtheorie**: media kiezen een INVALSHOEK (frame) waardoor publiek het onderwerp op die manier ziet. Vapen als 'cool' framen = positief frame. AGENDA-theorie = media bepalen WAAR over wordt gesproken (niet HOE). INJECTIENAALD = ouder model, direct effect (achterhaald). Antwoord B.",
      examenBron: BRON_LABEL(40),
      bronLink: BRON_LINK,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & media" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'framing', 'agenda', 'invalshoek', 'influencer'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "media-theorieën — kern" },
      ],
      uitlegPad: compact(
        "3 media-beïnvloedingstheorieën onthouden: AGENDA (media bepalen onderwerpen — 'waar praten we over?'), FRAMING (media bepalen invalshoek — 'hoe kijken we ernaar?'), INJECTIENAALD (oude theorie: directe inwerking, achterhaald). Cool vapen = frame.",
        { basis: "Invalshoek = framingtheorie. = B.", simpeler: "Frame = lijst om foto. Influencer stopt 'vapen' in COOL-lijst. = B.", nogSimpeler: "Framing = B." },
        [{ woord: "framing", uitleg: "Inkadering — gekozen invalshoek bij nieuws/communicatie." }, { woord: "agendatheorie", uitleg: "Media bepalen welke onderwerpen besproken worden." }],
      ),
    }],
  },
];

const examenMaatschappijkunde2025T1 = {
  id: "examen-maatschappijkunde-2025-t1",
  title: "Examen oefenen — Maatschappijkunde 2025 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "maatschappijleer",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Maatschappijkunde - eindexamen oefenen 2025-T1",
  intro: "6 echte examenvragen uit VMBO-GL/TL Maatschappijkunde 2025 tijdvak 1. Onderwerpen: recht van initiatief (Thuiswerkwet), requisitoir rechtszitting, bindingstheorie vadervleugel, legaliteitsbeginsel rechtsstaat, officier van justitie aanklacht, framingtheorie vapen.",
  triggerKeywords: ["examen maatschappijkunde 2025 tijdvak 1", "recht van initiatief thuiswerkwet", "requisitoir rechtszitting", "bindingstheorie hirschi", "legaliteitsbeginsel rechtsstaat", "framingtheorie media"],
  chapters,
  steps,
};

export default examenMaatschappijkunde2025T1;
