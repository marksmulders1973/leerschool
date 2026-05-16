// Leerpad: Examen-oefenpad Maatschappijkunde VMBO-GL/TL 2022 tijdvak 2.
// 2026-05-16: 8e maatschappij-pilot. Maakt cluster compleet (8/8).
// 6 echte MC-vragen geselecteerd uit 13. Bron: examenblad.nl, 1127 GT 2022-2.

const tekst1 = {
  titel: "T1 — SP blokkeert gebied Over de Maas (granuliet-stort)",
  body:
    "Leden van de SP hebben de toegang tot het gebied Over de Maas symbolisch geblokkeerd. De actie is bedoeld om de stort van granuliet in de zandafgraving te stoppen. Burgers die het oneens zijn met overheidsbeleid kunnen verschillende stappen zetten: een klacht indienen bij de **Nationale ombudsman** (over ambtenaren), een rechtszaak beginnen, demonstreren, een petitie organiseren of via partijen het besluit terugdraaien.",
};

const tekst3 = {
  titel: "T3 — Afspraak 'groenere' verpakkingen (Plastic Pact)",
  body:
    "Al het plastic dat we dagelijks gebruiken, moet over vijf jaar herbruikbaar zijn. Dat is een belangrijke doelstelling waar tientallen ondertekenaars van het zogenaamde Plastic Pact zich aan binden. Bedrijven, milieuorganisaties en de overheid streven naar minder eenmalig plastic, 100% recyclebaar verpakkingsmateriaal en meer hergebruik. De doelstelling past bij een politieke stroming die DUURZAAMHEID en MILIEUBESCHERMING centraal stelt.",
};

const tekst14 = {
  titel: "T14 — 228.000 beveiligingscamera's in NL — politie-gebruik",
  body:
    "Het valt vaak helemaal niet op, maar als je eens goed om je heen kijkt op straat, zie je overal camera's. In heel Nederland zijn er zeker 228.000 beveiligingscamera's. Politie gebruikt deze camera's na een misdrijf om VERDACHTEN OP TE SPOREN (gezichten, kleding, fietsen-modellen). Daarnaast helpen camera's bij het reconstrueren van wat er precies gebeurde. Niet de afschrikking (preventie) maar de na-onderzoek-rol (opsporing) is hier de hoofdfunctie.",
};

const tekst15 = {
  titel: "T15 — Rijden onder invloed: rechter legt 2 sancties op",
  body:
    "De rechtbank in Alkmaar heeft J.M. (47) veroordeeld voor het veroorzaken van een verkeersongeval door het rijden onder invloed en met zeer onverantwoord hoge snelheid (220 km/u). Hij kreeg een **gevangenisstraf van 3 maanden** (= hoofdstraf) en een **rijontzegging van 2 jaar** (= bijkomende straf). De officier van justitie was tevreden — de straffen kwamen overeen met zijn eis.",
};

const tekst17 = {
  titel: "T17 — Corona + minder woninginbraken (rationele keuze)",
  body:
    "De pandemie heeft ook positieve effecten: het aantal woninginbraken is in 2020 fors afgenomen. Met de meeste mensen overdag thuis zijn 'lege huizen' voor inbrekers een zeldzaamheid geworden. Inbrekers berekenen kans-op-pakking + opbrengst voordat ze toeslaan; als de pakking-kans hoog is wordt het te risicovol. Een crimineel maakt dus een AFWEGING van kosten en baten.",
};

const tekst19 = {
  titel: "T19 — Project X-feest Rosmalen: politie groot aanwezig",
  body:
    "De politie was in grote getale aanwezig in Rosmalen om een massale samenkomst van jongeren te voorkomen. Er zou via social media zijn opgeroepen tot een 'Project X-feest'. Onder de jongeren zaten ook slachtoffers van eerdere geweldsdelicten — die wilden bij de rechtszaken hun verhaal vertellen via het slachtoffer-spreekrecht.",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Maatschappijkunde 2022 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2022/vmbo-gl/documenten/cse-2/gt-1127-a-22-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc maatschappij: zoek SLEUTELBEGRIP + match definitie. Politieke stromingen: liberaal/sociaal/christen-democratisch/ecologisch/nationalistisch/populistisch. 3 soorten sancties: hoofdstraf/bijkomende straf/maatregel. Theorieën crimineel gedrag: anomie/binding/etiket/neutralisatie/rationele keuze.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Burgers + politiek", emoji: "🗳️", from: 0, to: 1 },
  { letter: "B", title: "Strafrecht + sancties", emoji: "⚖️", from: 2, to: 3 },
  { letter: "C", title: "Criminologie", emoji: "🔍", from: 4, to: 5 },
];

const steps = [
  {
    title: "Vraag 5 — Klacht over Rijksambtenaar: welke instantie?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2022-T2, vraag 5.",
    emoji: "🎓",
    checks: [{
      q: "Bij welke instantie kan een klacht worden ingediend over ambtenaren van de Rijksoverheid?",
      options: [
        "de Europese Commissie",
        "de Nationale ombudsman",
        "het ministerie van Algemene Zaken",
      ],
      answer: 1,
      wrongHints: ["Europese Commissie = EU-orgaan voor wetsvoorstellen. Niet voor NL-klachten over ambtenaren.", null, "Ministerie van Algemene Zaken = ministerie van de minister-president. Niet voor klachten — dat is een onafhankelijke functie."],
      explanation: "**Nationale ombudsman** = onafhankelijk orgaan dat klachten van burgers tegen Rijksoverheid (ministeries, Belastingdienst, UWV, politie etc.) onderzoekt. Geen rechter — wel publiek rapport + adviezen. Sinds 1982 in NL. Antwoord B.",
      examenBron: BRON_LABEL(5),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & burgerrechten" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'ombudsman', 'Rijksoverheid', 'klacht', 'ambtenaar'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "burgerklachten + Ombudsman — kern" },
      ],
      uitlegPad: compact(
        "Klacht-stappen NL: 1) eerst bij de organisatie zelf (klachten-afdeling), 2) bij weigering → NATIONALE OMBUDSMAN (onafhankelijk). Ombudsman onderzoekt + adviseert, niet straft. Buiten NL = Europees Ombudsman voor EU-instellingen. Algemene Zaken = ministerie van premier — niet klachten-functie.",
        { basis: "Rijksklacht = Nationale Ombudsman. = B.", simpeler: "Klacht over Belastingdienst/UWV/politie = Ombudsman. = B.", nogSimpeler: "Ombudsman = B." },
        [{ woord: "Nationale Ombudsman", uitleg: "Onafhankelijk orgaan voor burgerklachten over Rijksoverheid." }, { woord: "Rijksoverheid", uitleg: "Landelijke overheid (ministeries + uitvoeringsorganisaties)." }],
      ),
    }],
  },
  {
    title: "Vraag 7 — Plastic Pact: welke politieke stroming?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2022-T2, vraag 7.",
    emoji: "🎓",
    checks: [{
      q: "Het Plastic Pact stelt 100% herbruikbaar verpakkingsmateriaal als doel. Bij welke politieke stroming past deze doelstelling het beste?",
      options: [
        "de ecologische stroming",
        "de liberale stroming",
        "de nationalistische stroming",
        "de sociaaldemocratische stroming",
      ],
      answer: 0,
      wrongHints: [null, "Liberalisme = vrijheid + vrije markt + min. overheid. Niet primair milieu-gericht.", "Nationalisme = eigen land/cultuur centraal. Geen milieu-focus.", "Sociaaldemocratie = arbeider + sociale wetten + gelijke verdeling. Milieu is bijzaak."],
      explanation: "**Ecologische stroming** (GroenLinks, Partij voor de Dieren, D66 deels) heeft milieu + duurzaamheid + klimaat als KERN-thema. Herbruikbaar plastic = duurzaamheid = ecologische doelstelling. Andere stromingen zijn niet primair milieu-georiënteerd. Antwoord A.",
      examenBron: BRON_LABEL(7),
      bronLink: BRON_LINK,
      bronTekst: tekst3,
      leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'ecologisch', 'liberaal', 'nationalistisch', 'sociaaldemocratisch'" },
        { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "politieke stromingen — kern" },
      ],
      uitlegPad: compact(
        "5 politieke stromingen: LIBERAAL (vrijheid + vrije markt — VVD/D66), CHRISTEN-DEMOCRATISCH (religie + gemeenschap — CDA/CU/SGP), SOCIAAL-DEMOCRATISCH (arbeiders + sociaal — PvdA/SP), ECOLOGISCH (milieu — GroenLinks/PvdD), NATIONALISTISCH (eigen land — PVV/FvD). Duurzaam plastic = ecologisch.",
        { basis: "Milieu/duurzaam = ecologisch. = A.", simpeler: "Ecologie = leer van leefomgeving = milieu. = A.", nogSimpeler: "Ecologisch = A." },
        [{ woord: "ecologische stroming", uitleg: "Politiek met milieu + duurzaamheid centraal." }, { woord: "sociaaldemocratie", uitleg: "Politiek met arbeider/gelijkheid centraal." }],
      ),
    }],
  },
  {
    title: "Vraag 25 — 228.000 camera's: hoe gebruikt politie ze?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2022-T2, vraag 25.",
    emoji: "🎓",
    checks: [{
      q: "In Nederland hangen 228.000 camera's. Hoe gebruikt de politie deze camera's volgens het gangbare strafrechts-onderzoek?",
      options: [
        "als opsporingsmiddel",
        "als preventiemiddel",
        "als sanctiemiddel",
      ],
      answer: 0,
      wrongHints: [null, "Preventie = misdaad VOORKOMEN. Camera's zichtbaarheid kan wel afschrikken, maar de hoofdfunctie is achteraf-onderzoek.", "Sancties = straffen opleggen. Doet de rechter, niet de camera."],
      explanation: "**Opsporingsmiddel** = na een misdrijf het bewijs verzamelen + verdachten identificeren (gezichten, fietsen, kleding op de beelden). Camera's = na-onderzoek-tool. PREVENTIE = misdaad voorkomen (zichtbaarheid kan helpen). SANCTIE = straf opleggen (rechter, niet politie). Antwoord A.",
      examenBron: BRON_LABEL(25),
      bronLink: BRON_LINK,
      bronTekst: tekst14,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & politie" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'opsporing', 'preventie', 'sanctie', 'beveiligingscamera'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "politie-functies — kern" },
      ],
      uitlegPad: compact(
        "3 politie-rollen: OPSPORING (na misdrijf — bewijs + verdachten zoeken), PREVENTIE (vóór misdrijf — agenten op straat, voorlichting), SANCTIE (straf opleggen — eigenlijk rechter's taak, politie schrijft hooguit boete). Camera's gebruikt POLITIE primair voor OPSPORING.",
        { basis: "Na-misdrijf-bewijs = opsporing. = A.", simpeler: "Politie kijkt naar camera-beelden om dader te VINDEN = opsporen. = A.", nogSimpeler: "Opsporing = A." },
        [{ woord: "opsporing", uitleg: "Na misdrijf bewijs + verdachte vinden." }, { woord: "preventie", uitleg: "Misdrijf voorkomen — vóórdat het gebeurt." }],
      ),
    }],
  },
  {
    title: "Vraag 26 — 220 km/u-rijder: welke 2 soorten sancties?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2022-T2, vraag 26.",
    emoji: "🎓",
    checks: [{
      q: "Een man kreeg voor rijden onder invloed (220 km/u) een gevangenisstraf van 3 maanden en een rijontzegging van 2 jaar. Welke twee soorten sancties zijn dit?",
      options: [
        "de bijkomende straffen en de hoofdstraffen",
        "de bijkomende straffen en de maatregelen",
        "de hoofdstraffen en de maatregelen",
      ],
      answer: 0,
      wrongHints: [null, "Maatregel = bv. TBS, schadevergoeding, onttrekking. Rijontzegging is GEEN maatregel — wel een bijkomende straf.", "Gevangenisstraf is GEEN maatregel — wel een hoofdstraf. Rijontzegging is GEEN maatregel — wel een bijkomende straf."],
      explanation: "**3 categorieën sancties**: 1) HOOFDSTRAFFEN (gevangenisstraf / hechtenis / taakstraf / geldboete), 2) BIJKOMENDE STRAFFEN (ontzegging rijbevoegdheid / ontzetting uit ambt / verbeurdverklaring), 3) MAATREGELEN (TBS / schadevergoeding / onttrekking aan het verkeer). Gevangenisstraf = hoofdstraf, rijontzegging = bijkomend. Antwoord A.",
      examenBron: BRON_LABEL(26),
      bronLink: BRON_LINK,
      bronTekst: tekst15,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & sancties" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'hoofdstraf', 'bijkomende straf', 'maatregel', 'rijontzegging'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "soorten sancties — kern" },
      ],
      uitlegPad: compact(
        "3 sancties-categorieën: HOOFDSTRAFFEN (de hoofdtypen — cel/hechtenis/taakstraf/boete), BIJKOMENDE STRAFFEN (extra erbij — rijontzegging/ontzetting/verbeurdverklaring), MAATREGELEN (bescherming + herstel — TBS/schadevergoeding/onttrekking). Cel + rijontzegging = hoofd + bijkomend.",
        { basis: "Cel (hoofd) + rijontzegging (bijkomend). = A.", simpeler: "Cel zit altijd 'top straf' = hoofdstraf. Rijontzegging is extra. = A.", nogSimpeler: "Hoofd + bijkomend = A." },
        [{ woord: "hoofdstraf", uitleg: "Hoofd-categorie sanctie: cel/hechtenis/taakstraf/boete." }, { woord: "bijkomende straf", uitleg: "Extra sanctie naast hoofdstraf: rijontzegging/ontzetting/verbeurdverklaring." }, { woord: "maatregel", uitleg: "Niet-strafkarakter: TBS, schadevergoeding, onttrekking aan verkeer." }],
      ),
    }],
  },
  {
    title: "Vraag 30 — Corona + minder inbraken: welke theorie?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2022-T2, vraag 30.",
    emoji: "🎓",
    checks: [{
      q: "Tijdens corona daalde het aantal woninginbraken fors omdat mensen vaker thuis waren. Bij welke theorie over crimineel gedrag past deze daling?",
      options: [
        "de aangeleerd-gedrag-theorie",
        "de bindingstheorie",
        "de neutraliseringstheorie",
        "de rationele-keuze-theorie",
      ],
      answer: 3,
      wrongHints: ["Aangeleerd-gedrag = misdaad leren van omgeving (vrienden, ouders). Geen verband met thuis-zijn.", "Bindingstheorie = sociale banden voorkomen criminaliteit. Hier gaat het niet om banden, maar om risico-berekening.", "Neutralisering = goedpraten van eigen misdaad ('ik moest wel'). Niet over berekening.", null],
      explanation: "**Rationele keuze-theorie** (Becker): criminelen maken een AFWEGING van kosten/baten — pakking-kans + opbrengst + risico vs verwachte straf. Corona = mensen thuis = pakking-kans hoog = te risicovol = inbreker kiest tegen. Inbreker berekent dus rationeel. Antwoord D.",
      examenBron: BRON_LABEL(30),
      bronLink: BRON_LINK,
      bronTekst: tekst17,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & criminologie" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'rationele keuze', 'binding', 'aangeleerd gedrag', 'neutralisering'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "criminologie-theorieën — kern" },
      ],
      uitlegPad: compact(
        "5 criminaliteit-theorieën onthouden: ANOMIE (normloze samenleving — Durkheim), BINDING (banden voorkomen — Hirschi), ETIKETTERING (label houdt vast), NEUTRALISERING (goedpraten), RATIONELE KEUZE (kosten/baten-afweging — Becker). Berekenen van risico = rationele keuze.",
        { basis: "Risico-afweging = rationele keuze. = D.", simpeler: "Inbreker denkt: 'als pakkans hoog → niet doen'. Dat is rationele keuze. = D.", nogSimpeler: "Rationele keuze = D." },
        [{ woord: "rationele keuze-theorie", uitleg: "Criminelen wegen kosten + baten af voordat ze toeslaan." }, { woord: "aangeleerd-gedrag-theorie", uitleg: "Criminaliteit door imitatie van omgeving (vrienden/ouders)." }],
      ),
    }],
  },
  {
    title: "Vraag 33 — Slachtoffer in rechtszaak: welk recht?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2022-T2, vraag 33.",
    emoji: "🎓",
    checks: [{
      q: "Welk recht heeft een slachtoffer van een ernstig misdrijf tijdens een rechtszaak?",
      options: [
        "de hoogte van de straf voor de dader te bepalen",
        "een rechter aan te wijzen",
        "excuses van de dader te krijgen",
        "op de zitting te mogen spreken",
      ],
      answer: 3,
      wrongHints: ["De RECHTER bepaalt de straf — niet het slachtoffer (anders zou het verschillen per emoties).", "Rechter wijzen = neutraal-proces — wordt door rechtbank-management bepaald, niet partijen.", "Recht op excuses bestaat NIET officieel — slachtoffer kan ze hopen/vragen, maar dader kan weigeren.", null],
      explanation: "**Slachtoffer-spreekrecht** (sinds 2005 verbreed): slachtoffer mag op de zitting voor de strafmaat-uitspraak emotioneel verklaren wat het delict betekend heeft. Geen invloed op straf zelf — wel zichtbaarheid. Andere opties = niet wettelijk recht. Antwoord D.",
      examenBron: BRON_LABEL(33),
      bronLink: BRON_LINK,
      bronTekst: tekst19,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & slachtofferrechten" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'spreekrecht', 'slachtoffer', 'rechtszitting', 'strafmaat'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "slachtoffer-rechten — kern" },
      ],
      uitlegPad: compact(
        "Slachtoffer-rechten in NL: 1) SPREEKRECHT op de zitting (sinds 2005, verbreed 2016 naar familie), 2) SCHADEVERGOEDING via voegen-actie, 3) INZAGE in dossier (beperkt), 4) BEGELEIDING door Slachtofferhulp Nederland. NIET: straf bepalen of rechter kiezen.",
        { basis: "Slachtoffer-recht = spreken op zitting. = D.", simpeler: "Slachtoffer mag aan rechter vertellen wat dader heeft aangedaan. = D.", nogSimpeler: "Spreken = D." },
        [{ woord: "spreekrecht", uitleg: "Recht slachtoffer/nabestaande om op rechtszitting te spreken." }, { woord: "Slachtofferhulp NL", uitleg: "Organisatie die slachtoffers begeleidt." }],
      ),
    }],
  },
];

const examenMaatschappijkunde2022T2 = {
  id: "examen-maatschappijkunde-2022-t2",
  title: "Examen oefenen — Maatschappijkunde 2022 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "maatschappijleer",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Maatschappijkunde - eindexamen oefenen 2022-T2",
  intro: "6 echte examenvragen uit VMBO-GL/TL Maatschappijkunde 2022 tijdvak 2. Onderwerpen: Nationale Ombudsman, ecologische stroming (Plastic Pact), camera's opsporingsmiddel, hoofdstraf + bijkomende straf, rationele keuze-theorie (corona-inbraken), slachtoffer-spreekrecht.",
  triggerKeywords: ["examen maatschappijkunde 2022 tijdvak 2", "nationale ombudsman", "ecologische stroming plastic", "camera opsporing politie", "hoofdstraf bijkomende straf", "rationele keuze theorie", "slachtoffer spreekrecht"],
  chapters,
  steps,
};

export default examenMaatschappijkunde2022T2;
