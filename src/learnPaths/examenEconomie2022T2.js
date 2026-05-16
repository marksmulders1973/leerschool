// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2022 tijdvak 2.
// 2026-05-16: completeert economie-cluster naar 8/8.
// 5 echte MC-vragen geselecteerd uit 10 MC's. Bron: examenblad.nl, 0233 GT 2022-2.
// Geskipt: V11 (grafiek), V23 (mist context), V25 (tabel), V32+V40 (volgorde-vragen).

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Economie 2022 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2022/vmbo-gl/documenten/cse-2/gt-0233-a-22-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc economie: zoek begrip-anker in vraag + match definitie. 'Welke werkloosheid' / 'incidentele uitgave' / 'wie berekent' = directe definitie-toets.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Werk & inkomen", emoji: "💼", from: 0, to: 0 },
  { letter: "B", title: "Persoonlijke financiën", emoji: "🐶", from: 1, to: 2 },
  { letter: "C", title: "EU + macro-economie", emoji: "🇪🇺", from: 3, to: 4 },
];

const steps = [
  {
    title: "Vraag 5 — Bangladesh textielindustrie: welke werkloosheid?",
    explanation: "Echte examenvraag uit Economie 2022-T2, vraag 5. Onderwerp: soorten werkloosheid.",
    emoji: "🎓",
    checks: [{
      q: "In 2013 stortte in Bangladesh een kledingfabriek in. Nederlandse winkelketens ondertekenden veiligheidsakkoord. Hoe noemen we de werkloosheid die ontstaat door het verplaatsen van de textielindustrie van Nederland naar Bangladesh?",
      options: [
        "conjuncturele werkloosheid",
        "seizoenswerkloosheid",
        "structurele werkloosheid",
        "verborgen werkloosheid",
      ],
      answer: 2,
      wrongHints: ["Conjunctureel = afhankelijk van conjunctuur (op/neer met economie). Verplaatsing van industrie is geen tijdelijke dip — wat is het wel?", "Seizoen = weer-afhankelijk werk (ijsverkoper, strandtent). Textielindustrie is jaarrond — past niet.", null, "Verborgen werkloosheid = mensen die wel kunnen werken maar niet zoeken. Hier zijn mensen ontslagen door verplaatsing — dat is openlijk."],
      explanation: "**Structurele werkloosheid** = werkloosheid door blijvende veranderingen in de economie. Textielproductie verplaatste structureel van NL → lage-lonenlanden (Bangladesh, China). Banen kwamen niet terug, dus geen tijdelijke dip (conjunctureel) maar permanent (structureel). Antwoord C.",
      examenBron: BRON_LABEL(5),
      bronLink: BRON_LINK,
      leerpadLink: { id: "pincode-werk-arbeidsmarkt", title: "Pincode werk & arbeidsmarkt" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'werkloosheid', 'structureel/conjunctureel/seizoen/verborgen'" },
        { id: "pincode-werk-arbeidsmarkt", title: "Pincode werk & arbeidsmarkt", niveau: "VMBO-GT eindexamen", why: "soorten werkloosheid + arbeidsmarkt — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "4 soorten werkloosheid: STRUCTUREEL (blijvende verandering — bv. fabriek dicht, banen niet terug), CONJUNCTUREEL (tijdelijk, met op/neer economie), SEIZOEN (weer/seizoen-afhankelijk), VERBORGEN (kan werken maar zoekt niet). Textiel → Bangladesh = blijvend = structureel.",
        { basis: "Structurele werkloosheid. = C.", simpeler: "Textiel-banen weg + komen niet terug → blijvende verandering = structureel. = C.", nogSimpeler: "Structureel = C." },
        [{ woord: "structurele werkloosheid", uitleg: "Door blijvende verandering in economie." }, { woord: "conjunctureel", uitleg: "Tijdelijk, met economische op/neer." }],
      ),
    }],
  },
  {
    title: "Vraag 13 — Huisdier-kosten: welke is incidentele uitgave?",
    explanation: "Echte examenvraag uit Economie 2022-T2, vraag 13. Onderwerp: typen uitgaven.",
    emoji: "🎓",
    checks: [{
      q: "Welke van de volgende bestedingen voor een huisdier is een incidentele uitgave?",
      options: [
        "de aanschaf van het dier",
        "de jaarlijkse vaccinaties",
        "de voeding",
        "het zaagsel als bodembedekking in het hok",
      ],
      answer: 0,
      wrongHints: [null, "Jaarlijks = elk jaar terug. Wat is dan het tegenovergestelde?", "Voeding kopen elke week — komt regelmatig terug. Welke uitgave is juist eenmalig?", "Zaagsel vervang je elke week/maand. Welke is juist één keer?"],
      explanation: "**Incidentele uitgave** = eenmalige, niet-regelmatige uitgave. Aanschaf dier = doe je 1× (of zelden). Vaccinaties = jaarlijks (regelmatig). Voeding + zaagsel = wekelijks/maandelijks (regelmatig = vaste of variabele lasten). Antwoord A.",
      examenBron: BRON_LABEL(13),
      bronLink: BRON_LINK,
      leerpadLink: { id: "pincode-inkomen-welvaart", title: "Pincode inkomen & welvaart" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'incidenteel', 'vaste lasten', 'variabele lasten'" },
        { id: "pincode-inkomen-welvaart", title: "Pincode inkomen & welvaart", niveau: "VMBO-GT eindexamen", why: "soorten uitgaven (vast/variabel/incidenteel) — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "3 soorten uitgaven: VASTE LASTEN (regelmatig, vast bedrag — huur, abonnement), VARIABELE LASTEN (regelmatig, wisselend — voeding, benzine), INCIDENTELE UITGAVEN (eenmalig, onverwacht — aanschaf huisdier, bruiloft, kapotte koelkast). Aanschaf = eenmalig = incidenteel.",
        { basis: "Aanschaf dier = incidenteel. = A.", simpeler: "Incidenteel = 1×, niet elke maand/week. Vaccinatie + voeding + zaagsel komen telkens terug. = A.", nogSimpeler: "Aanschaf = A." },
        [{ woord: "incidentele uitgave", uitleg: "Eenmalig, niet-regelmatig." }, { woord: "vaste lasten", uitleg: "Vast bedrag, regelmatig (bv. huur)." }],
      ),
    }],
  },
  {
    title: "Vraag 14 — Huisdieren-verzekering: vaste vs incidentele lasten",
    explanation: "Echte examenvraag uit Economie 2022-T2, vraag 14. Onderwerp: effect verzekering op huishoudboekje.",
    emoji: "🎓",
    checks: [{
      q: "Steeds meer honden- en kattenbezitters sluiten een huisdieren-ziektekosten-verzekering af voor hun huisdier. Wat is een gevolg voor de begroting van het huishouden als zij zo'n verzekering afsluiten?",
      options: [
        "De vaste lasten nemen af en de post incidentele uitgaven neemt af.",
        "De vaste lasten nemen af en de post incidentele uitgaven neemt toe.",
        "De vaste lasten nemen toe en de post incidentele uitgaven neemt af.",
        "De vaste lasten nemen toe en de post incidentele uitgaven neemt toe.",
      ],
      answer: 2,
      wrongHints: ["Een nieuwe verzekering afsluiten = vaste lasten OMHOOG, niet omlaag.", "Verzekering = elke maand premie = vaste lasten omhoog (niet omlaag).", null, "Verzekering bedoelt onverwachte rekeningen TE DEKKEN — dus incidentele uitgaven OMLAAG, niet omhoog."],
      explanation: "Verzekering afsluiten heeft 2 effecten op huishoudboekje: **vaste lasten ↑** (elke maand premie betalen) + **incidentele uitgaven ↓** (onverwachte dierenarts-rekening wordt door verzekering betaald). Antwoord C.",
      examenBron: BRON_LABEL(14),
      bronLink: BRON_LINK,
      leerpadLink: { id: "pincode-inkomen-welvaart", title: "Pincode inkomen & welvaart" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'vaste lasten', 'incidentele uitgaven', 'verzekering', 'premie'" },
        { id: "pincode-inkomen-welvaart", title: "Pincode inkomen & welvaart", niveau: "VMBO-GT eindexamen", why: "begroting + soorten uitgaven + verzekering-werking — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Verzekering werkt zo: jij betaalt elke maand een PREMIE (= vast bedrag = vaste lasten omhoog). In ruil dekt de verzekering grote/onverwachte kosten (= incidentele uitgaven omlaag). Hond breekt poot? Verzekering betaalt. Jij hoeft niet 500 ineens uit eigen zak.",
        { basis: "Vaste lasten ↑ + incidentele uitgaven ↓ = C.", simpeler: "Premie elke maand = vaste lasten OMHOOG. Onverwachte dierenarts gedekt = incidentele uitgaven OMLAAG. = C.", nogSimpeler: "Vaste ↑ incidenteel ↓ = C." },
        [{ woord: "premie", uitleg: "Maandelijks/jaarlijks bedrag dat je aan verzekering betaalt." }, { woord: "vaste lasten", uitleg: "Regelmatige vaste kosten (huur, abonnement, premie)." }],
      ),
    }],
  },
  {
    title: "Vraag 29 — EU-suiker zelfvoorziening: welke maatregel?",
    explanation: "Echte examenvraag uit Economie 2022-T2, vraag 29. Onderwerp: handel + protectionisme EU.",
    emoji: "🎓",
    checks: [{
      q: "In 1968 besloot de EU maatregelen voor suiker in te voeren om meer zelfvoorzienend te worden. Welke van de onderstaande maatregelen bevordert de zelfvoorziening voor suiker in de EU?",
      options: [
        "invoerheffingen verhogen",
        "invoerquota verhogen",
        "uitvoersubsidies verhogen",
      ],
      answer: 0,
      wrongHints: [null, "Invoerquota VERHOGEN = méér buitenlandse suiker toelaten — dat verlaagt juist zelfvoorziening (lokaal minder nodig).", "Uitvoersubsidies stimuleert EU om suiker te exporteren — minder voor eigen markt, dus zelfvoorziening daalt."],
      explanation: "**Zelfvoorziening** = land/blok produceert zelf wat het nodig heeft (importeert minder). **Invoerheffing verhogen** = buitenlandse suiker duurder maken → consumenten kopen EU-suiker → EU-boeren leveren meer → zelfvoorziening stijgt. Quota verhogen = méér import (omgekeerd). Uitvoersubsidies = méér export (omgekeerd). Antwoord A.",
      examenBron: BRON_LABEL(29),
      bronLink: BRON_LINK,
      leerpadLink: { id: "pincode-buitenland-eu", title: "Pincode buitenland & EU" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'invoerheffing', 'quota', 'subsidie', 'zelfvoorziening'" },
        { id: "pincode-buitenland-eu", title: "Pincode buitenland & EU", niveau: "VMBO-GT eindexamen", why: "EU-handelspolitiek + protectionisme — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "EU-protectionisme = eigen industrie beschermen. 3 instrumenten: INVOERHEFFING (extra belasting op import — duurder), INVOERQUOTA (max hoeveelheid import — schaarste), UITVOERSUBSIDIE (geld geven aan eigen export). Voor MEER zelfvoorziening: invoerheffing OMHOOG (buitenland duur → eigen markt groter).",
        { basis: "Invoerheffing verhogen. = A.", simpeler: "Eigen suiker meer = buitenlands duurder maken = invoerheffing OMHOOG. = A.", nogSimpeler: "Invoerheffing = A." },
        [{ woord: "invoerheffing", uitleg: "Belasting op buitenlandse producten — maakt ze duurder." }, { woord: "zelfvoorzienend", uitleg: "Eigen productie dekt eigen behoefte." }],
      ),
    }],
  },
  {
    title: "Vraag 38 — Wie berekent economische groei + hoe?",
    explanation: "Echte examenvraag uit Economie 2022-T2, vraag 38. Onderwerp: macro-economische instanties.",
    emoji: "🎓",
    checks: [{
      q: "Welke instantie berekent de economische groei en op welke manier?",
      options: [
        "het CBS, die de groei van het nationaal inkomen berekent",
        "het CBS, die de groei van het gemiddeld besteedbaar inkomen berekent",
        "het CPB, die de groei van het nationaal inkomen berekent",
        "het CPB, die de groei van het gemiddeld besteedbaar inkomen berekent",
      ],
      answer: 0,
      wrongHints: [null, "CBS klopt voor instantie. Maar 'gemiddeld besteedbaar inkomen' meet wat huishoudens overhouden — niet groei van hele economie.", "CPB = Centraal Planbureau, maakt VOORSPELLINGEN (Prinsjesdag-cijfers). Maar wie MEET de werkelijke groei?", "Twee fouten: CPB voorspelt (meet niet) + besteedbaar inkomen meet niet de hele economie."],
      explanation: "**CBS** = Centraal Bureau voor de Statistiek = meet wat werkelijk gebeurd is (achteraf). **CPB** = Centraal Planbureau = voorspelt (vooruit). Economische groei = groei van **nationaal inkomen** (= BBP) — niet besteedbaar inkomen (= wat huishouden overhoudt na belasting). Dus CBS + nationaal inkomen. Antwoord A.",
      examenBron: BRON_LABEL(38),
      bronLink: BRON_LINK,
      leerpadLink: { id: "pincode-inkomen-welvaart", title: "Pincode inkomen & welvaart" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'CBS', 'CPB', 'nationaal inkomen', 'besteedbaar inkomen'" },
        { id: "pincode-inkomen-welvaart", title: "Pincode inkomen & welvaart", niveau: "VMBO-GT eindexamen", why: "BBP/nationaal inkomen + macro-instanties — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Onthoud: CBS = STATISTIEK = meet wat geweest is (groei 2024 cijfer komt 2025). CPB = PLAN = voorspelt wat komt (Prinsjesdag-cijfers). Economische groei = stijging nationaal inkomen / BBP (Bruto Binnenlands Product). Niet besteedbaar inkomen (dat is na belasting voor één huishouden).",
        { basis: "CBS + nationaal inkomen = A.", simpeler: "CBS meet (achteraf), CPB voorspelt (vooruit). Groei = nationaal inkomen. = A.", nogSimpeler: "CBS + nationaal = A." },
        [{ woord: "CBS", uitleg: "Centraal Bureau voor de Statistiek — meet de werkelijkheid." }, { woord: "CPB", uitleg: "Centraal Planbureau — voorspelt." }, { woord: "nationaal inkomen", uitleg: "BBP — totale productie/inkomen van NL." }],
      ),
    }],
  },
];

const examenEconomie2022T2 = {
  id: "examen-economie-2022-t2",
  title: "Examen oefenen — Economie 2022 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2022-T2",
  intro: "5 echte examenvragen uit VMBO-GL/TL Economie 2022 tijdvak 2. Onderwerpen: structurele werkloosheid, incidentele uitgave + verzekering-effect, EU-protectionisme suiker, CBS/CPB en economische groei.",
  triggerKeywords: ["examen economie 2022 tijdvak 2", "structurele werkloosheid bangladesh", "incidentele uitgave huisdier", "verzekering vaste lasten", "invoerheffing eu suiker", "cbs economische groei"],
  chapters,
  steps,
};

export default examenEconomie2022T2;
