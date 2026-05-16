// Leerpad: Examen-oefenpad Maatschappijkunde VMBO-GL/TL 2023 tijdvak 2.
// 2026-05-16: 6e maatschappij-pilot. 6 echte MC-vragen geselecteerd uit 22.
// Bron: examenblad.nl, 1127 GT 2023-2.

const tekst1 = {
  titel: "T1 — Scholen Helsinki verruilen koemelk voor haverdrank (referendum)",
  body:
    "De Finse hoofdstad Helsinki trekt 100.000 euro uit om kinderen uit het basisonderwijs over te laten stappen op havermelk. Het besluit is het resultaat van een **raadpleging onder de bevolking** — een referendum waarin Helsinki-inwoners konden stemmen over duurzaamheids-maatregelen voor basisscholen. Havermelk is een plantaardig alternatief; door de overstap zou de stad jaarlijks tienduizenden kilo's CO₂ besparen.",
};

const tekst2 = {
  titel: "T2 — Coalitieakkoord op hoofdlijnen (Pijnacker-Nootdorp)",
  body:
    "De gemeente Pijnacker-Nootdorp is zo'n gemeente waar ze het 7 jaar geleden al over een andere boeg gooiden en afscheid namen van dichtgetimmerde coalitieakkoorden. Wethouder Ilona Jense van Haarts onderhandelde namens haar partij over een 'akkoord op hoofdlijnen' — wel een meerderheid achter een aantal kern-punten, maar geen detail-afspraken. Na het akkoord werd in de raad de samenstelling van het college van B&W vastgesteld: 4 wethouders verdeeld over de coalitiepartijen.",
};

const tekst4 = {
  titel: "T4 — Charles Michel als voorzitter Europese Raad (okt 2020)",
  body:
    "De afbeelding is een foto uit oktober 2020 van **Charles Michel**. Hij is op dat moment voorzitter van de **Europese Raad** — het overlegorgaan waarin de regeringsleiders van alle EU-lidstaten bijeenkomen om strategische beslissingen te nemen. Op de foto geeft Michel een toespraak waarin hij de samenwerking tussen lidstaten oproept te versterken in coronatijd.",
};

const tekst7 = {
  titel: "T7 — OM strafbeschikking + slachtoffer-betrokkenheid",
  body:
    "Het OM (Openbaar Ministerie) kan voor veel voorkomende strafbare feiten zelf een straf opleggen, een zogenaamde **strafbeschikking**. Dat kan bijvoorbeeld een **geldboete** zijn, een **taakstraf**, een schadevergoeding-verplichting of een leerstraf. Maar de slachtoffers worden hier niet altijd voldoende bij betrokken. Onderzoek toont dat slachtoffers vaker tevreden zijn als ze inspraak hebben — een belangrijk verbeterpunt voor het OM.",
};

const tekst9 = {
  titel: "T9 — Klassenjustitie: arbeidsmigranten + taal-barrière",
  body:
    "Als bijvoorbeeld arbeidsmigranten die het Nederlands niet goed beheersen, een zwaardere straf krijgen omdat met hen op de rechtszitting niet goed te praten valt, en ze een celstraf krijgen terwijl iemand anders in een soortgelijke zaak een taakstraf zou hebben gekregen — dan is er sprake van een ongelijke behandeling op basis van iemand's positie in de samenleving. Dit gaat in tegen het rechtsstaat-principe 'iedereen gelijk voor de wet'.",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Maatschappijkunde 2023 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2023/vmbo-gl/documenten/cse-2/gt-1127-a-23-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc maatschappij: zoek SLEUTELBEGRIP + match definitie. EU? 4 instellingen (Commissie/Raad/Parlement/Europese Raad). Beleidsfasen? 4 fasen. Trias politica? 3 machten (wetgevend/uitvoerend/rechterlijk). Klassenjustitie = ongelijke behandeling.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Politieke besluitvorming", emoji: "🗳️", from: 0, to: 1 },
  { letter: "B", title: "EU-instellingen", emoji: "🇪🇺", from: 2, to: 3 },
  { letter: "C", title: "Strafrecht & gelijkheid", emoji: "⚖️", from: 4, to: 5 },
];

const steps = [
  {
    title: "Vraag 1 — Helsinki havermelk: welke invloed-mogelijkheid?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2023-T2, vraag 1.",
    emoji: "🎓",
    checks: [{
      q: "Helsinki besloot na een 'raadpleging onder de bevolking' tot havermelk in basisscholen. Van welke mogelijkheid om invloed uit te oefenen op de politiek is hier gebruik gemaakt?",
      options: [
        "het inschakelen van politieke partijen",
        "het referendum",
        "lobbyen",
        "openlijke actie",
      ],
      answer: 1,
      wrongHints: ["Politieke partijen = via stemmen op partij of lid worden. Geen directe bevolkings-raadpleging.", null, "Lobbyen = achter de schermen druk uitoefenen op politici. Niet een open volksraadpleging.", "Openlijke actie = demonstreren, staken. Hier was een gestructureerde stem-raadpleging."],
      explanation: "**Referendum** = volksraadpleging waarbij burgers direct over een vraag mogen stemmen. Helsinki organiseerde dit voor de havermelk-keuze. Andere invloed-vormen: politieke partij (kies/lid), lobby (druk achter de schermen), actie (demonstreren). Antwoord B.",
      examenBron: BRON_LABEL(1),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & politieke invloed" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'referendum', 'lobby', 'raadpleging', 'invloed'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "vormen van politieke invloed — kern" },
      ],
      uitlegPad: compact(
        "4 manieren van politieke invloed: PARTIJ (stemmen/lid), REFERENDUM (volksraadpleging — direct over vraag stemmen), LOBBYEN (druk achter de schermen), ACTIE (demonstratie/staking/petitie). 'Raadpleging onder bevolking' = referendum.",
        { basis: "Raadpleging onder bevolking = referendum. = B.", simpeler: "Referendum = volk wordt direct gevraagd 'ja of nee'. = B.", nogSimpeler: "Referendum = B." },
        [{ woord: "referendum", uitleg: "Volksraadpleging — burgers stemmen direct over kwestie." }, { woord: "lobbyen", uitleg: "Achter de schermen druk uitoefenen op politici." }],
      ),
    }],
  },
  {
    title: "Vraag 3 — Coalitieakkoord Pijnacker: wat is volgende stap?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2023-T2, vraag 3.",
    emoji: "🎓",
    checks: [{
      q: "Na het bereiken van een coalitieakkoord in Pijnacker-Nootdorp — waarmee kan begonnen worden?",
      options: [
        "het kiezen van de wethouders",
        "het oprichten van oppositiepartijen",
        "het vormen van een coalitie van lokale partijen",
        "het zoeken van een nieuwe burgemeester",
      ],
      answer: 0,
      wrongHints: [null, "Oppositie = automatisch alles wat NIET in de coalitie zit. Geen apart oprichten nodig.", "Coalitie vormen is JUIST het coalitieakkoord — al gebeurd vóór deze stap.", "Burgemeester wordt door de Kroon (rijk) benoemd, niet door de coalitie. Plus: niet ELKE 4 jaar nieuw."],
      explanation: "Volgorde gemeente na verkiezingen: 1) verkiezingen → 2) **coalitie vormen** + akkoord schrijven → 3) **wethouders kiezen** (gemeenteraad benoemt ze, 1 per coalitiepartij meestal) → 4) college van B&W is compleet (burgemeester + wethouders). Antwoord A.",
      examenBron: BRON_LABEL(3),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & gemeente" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'coalitie', 'wethouder', 'college B&W', 'oppositie'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "gemeente + college B&W formatie — kern" },
      ],
      uitlegPad: compact(
        "Gemeente-formatie volgorde: VERKIEZINGEN → onderhandelen → COALITIEAKKOORD → WETHOUDERS kiezen → samen vormen ze + burgemeester het COLLEGE VAN B&W (dagelijks bestuur). Burgemeester is door Kroon benoemd, niet door coalitie. Wethouder = uit gemeenteraad, door coalitie gekozen.",
        { basis: "Na akkoord = wethouders kiezen. = A.", simpeler: "Akkoord is af → nu wie wordt wethouder van welke partij? = A.", nogSimpeler: "Wethouders = A." },
        [{ woord: "wethouder", uitleg: "Lid van college van B&W — bestuurt specifiek vakgebied (zorg, ruimte, etc.)." }, { woord: "college van B&W", uitleg: "Dagelijks bestuur gemeente — burgemeester + wethouders." }],
      ),
    }],
  },
  {
    title: "Vraag 7 — Charles Michel Europese Raad: aan wie spreekt hij?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2023-T2, vraag 7.",
    emoji: "🎓",
    checks: [{
      q: "Charles Michel was in oktober 2020 voorzitter van de Europese Raad. Aan welke groep mensen geeft hij dan een toespraak?",
      options: [
        "aan de leden van de Europese Commissie",
        "aan de leden van het Europees Parlement",
        "aan de ministers van Buitenlandse Zaken van alle Europese landen",
        "aan de regeringsleiders van de EU-lidstaten",
      ],
      answer: 3,
      wrongHints: ["Europese Commissie = ambtenaren-apparaat dat wetten voorbereidt. Voorzitter daarvan = Ursula von der Leyen.", "Europees Parlement = gekozen MEPs. Voorzitter daarvan is een aparte functie.", "Ministers Buitenlandse Zaken zitten in de RAAD VAN DE EU (vakraden), niet de EUROPESE Raad.", null],
      explanation: "**Europese Raad** = bijeenkomst van de **regeringsleiders** (president/premier) van alle EU-lidstaten. Voorzitter = Charles Michel (toen). Niet te verwarren met: COMMISSIE (ambtenaren, Von der Leyen), RAAD VAN DE EU (ministers per vakgebied), EUROPEES PARLEMENT (gekozen MEPs). Antwoord D.",
      examenBron: BRON_LABEL(7),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "pincode-buitenland-eu", title: "Pincode buitenland & EU" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'regeringsleider', 'Europese Raad', 'Commissie', 'Parlement'" },
        { id: "pincode-buitenland-eu", title: "Pincode buitenland & EU", niveau: "VMBO-GT eindexamen", why: "EU-instellingen — kern" },
      ],
      uitlegPad: compact(
        "4 EU-instellingen: EUROPESE COMMISSIE (Von der Leyen — ambtenaren, wetten voorbereiden), RAAD VAN DE EU (vakministers per onderwerp), EUROPESE RAAD (Michel/Costa — regeringsleiders, strategie), EUROPEES PARLEMENT (gekozen MEPs — controle + wetten goedkeuren). Charles Michel = Europese Raad = regeringsleiders.",
        { basis: "Europese Raad = regeringsleiders. = D.", simpeler: "Europese Raad = de presidenten/premiers van alle EU-landen samen. Michel was hun voorzitter. = D.", nogSimpeler: "Regeringsleiders = D." },
        [{ woord: "Europese Raad", uitleg: "Bijeenkomst regeringsleiders alle EU-lidstaten." }, { woord: "Raad van de EU", uitleg: "Vakministers van EU-lidstaten (anders dan Europese Raad)." }],
      ),
    }],
  },
  {
    title: "Vraag 8 — EU-richtlijn: wat betekent dit?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2023-T2, vraag 8.",
    emoji: "🎓",
    checks: [{
      q: "De Europese Unie maakt wetgeving. Soms is zo'n besluit een 'richtlijn'. Wat betekent het als een EU-besluit een richtlijn is?",
      options: [
        "Het doel staat vast. Hoe een lidstaat dat doel wil bereiken, dat mag de lidstaat zelf bepalen.",
        "Lidstaten mogen richtlijnen uitvoeren. Het is echter geen verplichting.",
        "Richtlijnen gelden niet alleen voor de lidstaten van de Europese Unie. Andere landen kunnen zich er ook aan houden.",
      ],
      answer: 0,
      wrongHints: [null, "Tegenovergesteld: richtlijnen ZIJN verplicht — lidstaat MOET het doel halen, alleen het 'hoe' is vrij.", "Tegenovergesteld: richtlijnen gelden ALLEEN voor EU-lidstaten. Niet voor buiten-EU-landen."],
      explanation: "**EU-richtlijn** = lidstaat MOET een doel bereiken, maar mag zelf bepalen HOE dat in eigen wetgeving wordt vastgelegd. Verschil met **EU-verordening** = die geldt direct, woordelijk in alle lidstaten (geen vertaling nodig). Antwoord A.",
      examenBron: BRON_LABEL(8),
      bronLink: BRON_LINK,
      leerpadLink: { id: "pincode-buitenland-eu", title: "Pincode buitenland & EU" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'richtlijn', 'verordening', 'lidstaat', 'doel'" },
        { id: "pincode-buitenland-eu", title: "Pincode buitenland & EU", niveau: "VMBO-GT eindexamen", why: "EU-wetgevingstypen — kern" },
      ],
      uitlegPad: compact(
        "2 EU-wettypen: VERORDENING (direct in alle lidstaten — letterlijk verplicht, geen vertaling), RICHTLIJN (doel-verplicht, hoe is vrij — lidstaat schrijft eigen wet die het doel haalt). Voorbeeld: EU-richtlijn 'auto's moeten X kg CO₂ minder uitstoten' = NL maakt eigen autobelastingwet, FR maakt iets anders.",
        { basis: "Doel verplicht, hoe vrij = richtlijn. = A.", simpeler: "Richtlijn = EU zegt WAT moet, lidstaat zegt HOE. = A.", nogSimpeler: "Doel vast, hoe vrij = A." },
        [{ woord: "richtlijn", uitleg: "EU-besluit met doel-verplichting; hoe is aan lidstaat." }, { woord: "verordening", uitleg: "EU-besluit direct geldig in alle lidstaten." }],
      ),
    }],
  },
  {
    title: "Vraag 21 — Machtenscheiding: welke 2 machten zichtbaar?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2023-T2, vraag 21.",
    emoji: "🎓",
    checks: [{
      q: "Een rechter veroordeelt iemand op basis van een straf die het Openbaar Ministerie eist. Welke twee machten van de Trias Politica zie je hier?",
      options: [
        "de controlerende en rechterlijke macht",
        "de rechterlijke en wetgevende macht",
        "de uitvoerende en rechterlijke macht",
        "de wetgevende en uitvoerende macht",
      ],
      answer: 2,
      wrongHints: ["'Controlerende macht' is niet de officiële vierde — Trias kent 3 (wetgevend/uitvoerend/rechterlijk).", "Wetgevende macht = parlement maakt wetten. Hier is GEEN wet gemaakt, alleen toegepast.", null, "Wetgevend + uitvoerend = parlement + regering. Geen rechter erbij."],
      explanation: "**Trias Politica** (Montesquieu): WETGEVENDE macht (parlement maakt wetten), UITVOERENDE macht (regering + OM voeren uit), RECHTERLIJKE macht (rechters spreken recht). OM = onderdeel uitvoerende macht (eist straf). Rechter = rechterlijke macht (beslist). Antwoord C.",
      examenBron: BRON_LABEL(21),
      bronLink: BRON_LINK,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & rechtsstaat" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'wetgevend', 'uitvoerend', 'rechterlijk', 'Trias Politica'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "Trias Politica — kern" },
      ],
      uitlegPad: compact(
        "Trias Politica (Montesquieu 1748): WETGEVEND = Eerste+Tweede Kamer (wet MAKEN). UITVOEREND = regering+ambtenaren+politie+OM (wet UITVOEREN). RECHTERLIJK = rechters (wet TOEPASSEN op zaak). OM eist (uitvoerend) → rechter beslist (rechterlijk).",
        { basis: "OM (uitvoerend) + rechter (rechterlijk) = C.", simpeler: "OM eist = doet uitvoering. Rechter spreekt vonnis = rechterlijk. = C.", nogSimpeler: "Uitvoerend + rechterlijk = C." },
        [{ woord: "Trias Politica", uitleg: "Drie scheiden machten: wetgevend + uitvoerend + rechterlijk." }, { woord: "Openbaar Ministerie", uitleg: "OM — vervolgingsinstantie, deel van uitvoerende macht." }],
      ),
    }],
  },
  {
    title: "Vraag 23 — Arbeidsmigrant + zwaardere straf: welk begrip?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2023-T2, vraag 23.",
    emoji: "🎓",
    checks: [{
      q: "Arbeidsmigranten die het Nederlands niet goed beheersen krijgen een zwaardere straf dan iemand anders in een soortgelijke zaak — omdat de communicatie moeilijker is. Welk begrip past hierbij?",
      options: [
        "klassenjustitie",
        "rechtsbescherming",
        "rechtszekerheid",
        "recidive",
      ],
      answer: 0,
      wrongHints: [null, "Rechtsbescherming = burgers BESCHERMEN tegen onrecht. Hier wordt iemand juist BENADEELD.", "Rechtszekerheid = burgers weten waar ze aan toe zijn (wat strafbaar is). Niet over ongelijke straffen.", "Recidive = herhaling-criminaliteit. Geen ongelijkheid-onderwerp."],
      explanation: "**Klassenjustitie** = ongelijke behandeling in het recht op basis van iemand's positie/klasse/achtergrond. Gaat in tegen rechtsstaat-principe 'iedereen gelijk voor de wet'. Arbeidsmigrant zwaarder straffen wegens taal = klassenjustitie. Antwoord A.",
      examenBron: BRON_LABEL(23),
      bronLink: BRON_LINK,
      bronTekst: tekst9,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & rechtsstaat" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'klassenjustitie', 'rechtsbescherming', 'rechtszekerheid', 'recidive'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "rechtsstaat-principes + klassenjustitie — kern" },
      ],
      uitlegPad: compact(
        "Klassenjustitie = ongelijke behandeling per sociale klasse/positie. Voorbeelden: dakloze zwaarder gestraft dan rijke verdachte voor zelfde delict; allochtoon vaker gecontroleerd. RECHTSBESCHERMING = burgers beschermen tegen onrecht. RECHTSZEKERHEID = weten waar je aan toe bent. Klassenjustitie strijdig met rechtsstaat.",
        { basis: "Ongelijke straf naar achtergrond = klassenjustitie. = A.", simpeler: "Klassen = sociale groep. Klassenjustitie = wet werkt anders voor armen/rijken/allochtonen. = A.", nogSimpeler: "Klassenjustitie = A." },
        [{ woord: "klassenjustitie", uitleg: "Ongelijke behandeling in recht naar sociale klasse." }, { woord: "rechtszekerheid", uitleg: "Burgers weten waar ze rechtsgeldig aan toe zijn." }],
      ),
    }],
  },
];

const examenMaatschappijkunde2023T2 = {
  id: "examen-maatschappijkunde-2023-t2",
  title: "Examen oefenen — Maatschappijkunde 2023 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "maatschappijleer",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Maatschappijkunde - eindexamen oefenen 2023-T2",
  intro: "6 echte examenvragen uit VMBO-GL/TL Maatschappijkunde 2023 tijdvak 2. Onderwerpen: referendum Helsinki, wethouders kiezen na coalitieakkoord, Europese Raad regeringsleiders, EU-richtlijn, Trias Politica, klassenjustitie.",
  triggerKeywords: ["examen maatschappijkunde 2023 tijdvak 2", "referendum helsinki", "wethouder coalitieakkoord", "europese raad regeringsleiders", "eu richtlijn verordening", "trias politica", "klassenjustitie"],
  chapters,
  steps,
};

export default examenMaatschappijkunde2023T2;
