// Leerpad: Examen-oefenpad Maatschappijkunde VMBO-GL/TL 2022 tijdvak 1.
// 2026-05-16: 7e maatschappij-pilot. 6 echte MC-vragen geselecteerd uit 13.
// Bron: examenblad.nl, 1127 GT 2022-1.

const tekst3 = {
  titel: "T3 — Parlementaire onderzoekscommissie Kinderopvangtoeslag",
  body:
    "De Parlementaire onderzoekscommissie Kinderopvangtoeslag heeft haar **openbare verhoren** afgesloten. De commissie biedt op 17 december 2020 haar verslag met bevindingen aan de Tweede Kamer. De commissie heeft onderzoek gedaan op verschillende **ministeries** — Sociale Zaken, Financiën, Belastingdienst — om uit te zoeken hoe duizenden ouders ten onrechte als fraudeurs werden aangemerkt. Op ministeries werken vooral ambtenaren die het beleid voorbereiden en uitvoeren.",
};

const tekst6 = {
  titel: "T6 — Kan een minister een burgemeester ontslaan?",
  body:
    "De huidige bepalingen rond het ontslag van de burgemeester zijn in 2001 ingevoerd en sindsdien niet meer gewijzigd. De Gemeentewet bepaalt dat de burgemeester te allen tijde op eigen verzoek ontslag kan krijgen, maar gedwongen ontslag is gebonden aan strikte voorwaarden. Dit valt onder de verantwoordelijkheid van een **minister**, die leiding geeft aan een **ministerie** en politiek verantwoordelijk is voor het beleid in zijn portefeuille.",
};

const tekst8 = {
  titel: "T8 — Toespraak koning Willem-Alexander (corona-saamhorigheid)",
  body:
    "De toespraak die koning Willem-Alexander vrijdagavond gaf, is door meer dan 6,7 miljoen mensen bekeken. De toespraak, waarin de koning onder meer opriep tot saamhorigheid in coronatijd, was opgesteld in samenwerking met de minister-president en het kabinet. Volgens de Nederlandse staatsregeling is de koning ONSCHENDBAAR — voor de inhoud van wat hij in zijn officiële rol zegt zijn de **ministers verantwoordelijk**.",
};

const tekst10 = {
  titel: "T10 — EU-parlement eist actie tegen illegale handel huisdieren",
  body:
    "De illegale handel in huisdieren zorgt voor veel dierenleed en moet snel worden aangepakt, vindt het Europees Parlement. Een grote meerderheid riep de **Europese Commissie** op om met een actieplan te komen. De Commissie is het EU-orgaan dat als enige wetsvoorstellen mag INDIENEN bij de andere EU-instellingen. Ursula von der Leyen is de huidige voorzitter.",
};

const tekst19 = {
  titel: "T19 — Tieners + Netflix-serie + magneet bij winkelroof",
  body:
    "Twee tieners zagen in een Netflix-serie dat de alarmpoortjes van een winkel niet af zouden gaan als je een sterke magneet bij je hebt. Dat bracht ze op ideeën. Ze kochten online een sterke magneet en probeerden in een drogisterij parfums weg te nemen. De magneet werkte echter niet zoals in de serie — de alarmpoortjes gingen wel degelijk af, en de tieners werden aangehouden. De rechter vond hen schuldig aan poging tot diefstal.",
};

const tekst20 = {
  titel: "T20 — Hoogbejaarde Utrechter voorkomt beroving (noodweer)",
  body:
    "In Utrecht werd een hoogbejaarde man slachtoffer van criminaliteit. Een inbreker wilde de man overvallen in zijn huis, maar de bewoner liet dat niet zomaar gebeuren en sloeg de inbreker neer met een pook. Toen de politie ter plaatse kwam, werd niet de man, maar de inbreker meegenomen. De man werd niet aangehouden — de politie hield rekening met de omstandigheden waarin hij zich verdedigde.",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Maatschappijkunde 2022 tijdvak 1, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2022/vmbo-gl/documenten/cse-1/gt-1127-a-22-1-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc maatschappij: zoek SLEUTELBEGRIP + match definitie. Wie werkt waar (ambtenaren/Kamerleden/wethouders)? EU-instellingen scheiden (Commissie initieert, Parlement controleert, Raad besluit). Strafuitsluitingsgronden: noodweer/overmacht/ontoerekeningsvatbaarheid.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Ambtenaren & ministers", emoji: "🏛️", from: 0, to: 2 },
  { letter: "B", title: "EU-instellingen", emoji: "🇪🇺", from: 3, to: 3 },
  { letter: "C", title: "Media & strafrecht", emoji: "📺", from: 4, to: 5 },
];

const steps = [
  {
    title: "Vraag 6 — Wie werken op ministeries?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2022-T1, vraag 6.",
    emoji: "🎓",
    checks: [{
      q: "De parlementaire onderzoekscommissie kinderopvangtoeslag heeft onderzoek gedaan op verschillende ministeries. Welke mensen werken op ministeries?",
      options: [
        "ambtenaren",
        "Eerste Kamerleden",
        "fractievoorzitters",
        "Tweede Kamerleden",
      ],
      answer: 0,
      wrongHints: [null, "Eerste Kamerleden werken in de SENAAT (Eerste Kamer), niet op ministeries.", "Fractievoorzitters zijn LEIDERS van Kamerfracties — werken in Tweede Kamer.", "Tweede Kamerleden werken in het PARLEMENT, niet op ministeries."],
      explanation: "**Ambtenaren** = vaste medewerkers van de overheid die het beleid voorbereiden, uitvoeren en evalueren. Werken op ministeries (Sociale Zaken, Financiën, etc.), gemeentehuizen, etc. Kamerleden zitten in parlement, niet ministerie. Antwoord A.",
      examenBron: BRON_LABEL(6),
      bronLink: BRON_LINK,
      bronTekst: tekst3,
      leerpadLink: { id: "pincode-overheid", title: "Pincode overheid" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'ambtenaar', 'ministerie', 'parlement', 'fractie'" },
        { id: "pincode-overheid", title: "Pincode overheid", niveau: "VMBO-GT eindexamen", why: "rolverdeling overheid — kern" },
      ],
      uitlegPad: compact(
        "Onthoud: AMBTENAREN = werken op ministeries + gemeenten (vast in dienst, voeren beleid uit). KAMERLEDEN = werken in parlement (gekozen, maken wetten). FRACTIE = groep Kamerleden van zelfde partij. MINISTER = leidt ministerie + ambtenaren.",
        { basis: "Ministerie = ambtenaren. = A.", simpeler: "Ambtenaar = personeel van de overheid. Werken op ministerie. = A.", nogSimpeler: "Ambtenaren = A." },
        [{ woord: "ambtenaar", uitleg: "Vast personeel overheid — beleid voorbereiden + uitvoeren." }, { woord: "ministerie", uitleg: "Werkvloer + ambtenaren onder een minister." }],
      ),
    }],
  },
  {
    title: "Vraag 11 — Wat doet een minister?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2022-T1, vraag 11.",
    emoji: "🎓",
    checks: [{
      q: "Wat doet een minister?",
      options: [
        "Die beslist of er amendementen ingediend mogen worden op een wetsvoorstel.",
        "Die beslist of wetsvoorstellen worden aangenomen.",
        "Die geeft leiding aan een ministerie.",
        "Die geeft leiding aan zijn partijleden in het parlement.",
      ],
      answer: 2,
      wrongHints: ["Amendementen indienen = recht van TWEEDE KAMERLEDEN, niet minister.", "Wetsvoorstellen aannemen = stemmen in PARLEMENT, niet minister.", null, "Leiding aan partijleden = FRACTIEVOORZITTER, niet minister."],
      explanation: "Een **minister** is hoofd van een ministerie. Verantwoordelijk voor beleid op zijn vakgebied + leiding aan ambtenaren. Beslist niet over wet-aanname (dat doet Kamer). Geeft leiding aan eigen ministerie, niet aan partijfractie. Antwoord C.",
      examenBron: BRON_LABEL(11),
      bronLink: BRON_LINK,
      bronTekst: tekst6,
      leerpadLink: { id: "pincode-overheid", title: "Pincode overheid" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'minister', 'ministerie', 'amendement', 'fractievoorzitter'" },
        { id: "pincode-overheid", title: "Pincode overheid", niveau: "VMBO-GT eindexamen", why: "minister-rol — kern" },
      ],
      uitlegPad: compact(
        "MINISTER = baas van een MINISTERIE. Politiek verantwoordelijk voor zijn vakgebied. Geeft leiding aan ambtenaren. Hoort bij kabinet (regering). Niet hetzelfde als KAMERLID (wetgevend) of FRACTIEVOORZITTER (partijleider in parlement).",
        { basis: "Minister leidt ministerie. = C.", simpeler: "Minister = baas van zijn vakgebied + ambtenaren. = C.", nogSimpeler: "Ministerie = C." },
        [{ woord: "minister", uitleg: "Politiek hoofd van een ministerie." }, { woord: "fractievoorzitter", uitleg: "Leider Kamerfractie (partij in parlement)." }],
      ),
    }],
  },
  {
    title: "Vraag 15 — Wie verantwoordelijk voor toespraak Willem-Alexander?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2022-T1, vraag 15.",
    emoji: "🎓",
    checks: [{
      q: "Wie is of zijn verantwoordelijk voor de inhoud van een officiële toespraak van koning Willem-Alexander?",
      options: [
        "de ministers",
        "de Nationale Ombudsman",
        "de voorzitters van de Eerste en Tweede Kamer",
        "het Nederlandse volk",
      ],
      answer: 0,
      wrongHints: [null, "Ombudsman = onafhankelijk orgaan voor klachten van burgers tegen overheid. Niet verantwoordelijk voor koning.", "Kamervoorzitters = leiden vergaderingen Eerste/Tweede Kamer. Niet voor koning.", "Volk = stemt op politici, maar niet verantwoordelijk voor koning's woorden."],
      explanation: "**Ministeriële verantwoordelijkheid** = grondwettelijk principe sinds 1848 (Thorbecke): 'De Koning is onschendbaar, de ministers zijn verantwoordelijk.' Inhoud van elke officiële toespraak/handeling van koning wordt door minister opgesteld en die is politiek verantwoordelijk. Antwoord A.",
      examenBron: BRON_LABEL(15),
      bronLink: BRON_LINK,
      bronTekst: tekst8,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & monarchie" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'onschendbaar', 'verantwoordelijk', 'Ombudsman'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "ministeriële verantwoordelijkheid — kern" },
      ],
      uitlegPad: compact(
        "Ministeriële verantwoordelijkheid (1848 Thorbecke): KONING ONSCHENDBAAR (mag geen kritiek krijgen), MINISTERS VERANTWOORDELIJK (zij dragen politieke verantwoording in parlement). Reden: koning is niet democratisch gekozen, dus democratisch gekozen ministers zijn verantwoordelijk voor wat hij doet/zegt.",
        { basis: "Toespraak koning = ministers verantwoordelijk. = A.", simpeler: "Koning praat namens regering — ministers schrijven mee + dragen verantwoordelijkheid. = A.", nogSimpeler: "Ministers = A." },
        [{ woord: "onschendbaar", uitleg: "Mag geen kritiek krijgen — geldt voor de koning." }, { woord: "Nationale Ombudsman", uitleg: "Onafhankelijk orgaan voor burgerklachten over overheid." }],
      ),
    }],
  },
  {
    title: "Vraag 17 — Welke EU-instelling indient wetsvoorstellen?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2022-T1, vraag 17.",
    emoji: "🎓",
    checks: [{
      q: "Het Europees Parlement vraagt een instantie om met een actieplan te komen tegen illegale huisdieren-handel. Welke EU-instelling moet dat actieplan opstellen?",
      options: [
        "de Europese Commissie",
        "de Europese Raad",
        "de Raad van de Europese Unie",
      ],
      answer: 0,
      wrongHints: [null, "Europese Raad = regeringsleiders (bijeenkomst). Maakt geen wetsvoorstellen — geeft strategische richting.", "Raad van de EU = vakministers. Stemt OVER voorstellen, maakt ze niet."],
      explanation: "**Europese Commissie** = enige EU-orgaan dat wetsvoorstellen INDIENT (initiatiefrecht). Voorzitter Ursula von der Leyen. Heeft 27 commissarissen (1 per lidstaat). 3 EU-RADEN onthouden: COMMISSIE (initieert wetten), RAAD VAN EU (vakministers, stemmen), EUROPESE RAAD (regeringsleiders, strategie), EUROPEES PARLEMENT (gekozen, stemmen + controleren). Antwoord A.",
      examenBron: BRON_LABEL(17),
      bronLink: BRON_LINK,
      bronTekst: tekst10,
      leerpadLink: { id: "pincode-buitenland-eu", title: "Pincode buitenland & EU" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'commissie', 'wetsvoorstel', 'initiatief', 'lidstaat'" },
        { id: "pincode-buitenland-eu", title: "Pincode buitenland & EU", niveau: "VMBO-GT eindexamen", why: "EU-instellingen — kern" },
      ],
      uitlegPad: compact(
        "EU-trio onthouden: COMMISSIE = initiatief (alleen zij mag wetsvoorstellen indienen + Von der Leyen). PARLEMENT = controle + stemmen (gekozen MEPs). RAAD VAN EU = vakministers (stemmen mee). EUROPESE RAAD = regeringsleiders (strategische richting). Actieplan opstellen = Commissie.",
        { basis: "Wetten/actie initiëren = Commissie. = A.", simpeler: "Alleen de Europese Commissie mag voorstellen indienen — de andere EU-organen stemmen of controleren. = A.", nogSimpeler: "Commissie = A." },
        [{ woord: "Europese Commissie", uitleg: "EU-orgaan met initiatiefrecht voor wetsvoorstellen." }, { woord: "lidstaat", uitleg: "Land dat lid is van de EU." }],
      ),
    }],
  },
  {
    title: "Vraag 32 — Tieners + Netflix: welke media-invloed?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2022-T1, vraag 32.",
    emoji: "🎓",
    checks: [{
      q: "Twee tieners besloten na een Netflix-serie om een magneet-truc te proberen voor een winkelroof. Welke invloed van de media speelt hier?",
      options: [
        "Media kunnen bepaalde opvattingen over de oorzaken van criminaliteit beïnvloeden.",
        "Media kunnen een belangrijke rol spelen in het tot stand komen van wetgeving.",
        "Media kunnen het stereotype beeld laten ontstaan dat criminaliteit gewoon is.",
        "Media kunnen van invloed zijn op het ontstaan van crimineel gedrag.",
      ],
      answer: 3,
      wrongHints: ["Hier gaat het niet om OPVATTINGEN over oorzaken, maar over GEDRAG bij kijkers.", "Media en wetgeving: niet hier — geen wet wordt gemaakt.", "Stereotypering = beeldvorming. Hier gaat het om DAADWERKELIJK GEDRAG (de roof zelf).", null],
      explanation: "**Media kunnen direct gedrag uitlokken** — bekend effect van geweld/criminaliteit op tv-series (kopieer-effect). Tieners zagen truc in serie + namen actie. Dit is directe invloed op crimineel gedrag, niet alleen opvattingen of beeldvorming. Antwoord D.",
      examenBron: BRON_LABEL(32),
      bronLink: BRON_LINK,
      bronTekst: tekst19,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & media-invloed" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'invloed', 'stereotype', 'opvatting', 'gedrag'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "media-effecten — kern" },
      ],
      uitlegPad: compact(
        "4 media-effecten: 1) beïnvloeden OPVATTINGEN (waarom mensen iets denken), 2) helpen WETGEVING (aandacht voor problemen), 3) creëren STEREOTYPES (rol-beelden), 4) UITLOKKEN GEDRAG (kopieer-effect). Truc kopiëren uit serie = directe gedrags-invloed.",
        { basis: "Truc uit serie → roof = gedrags-invloed. = D.", simpeler: "Tieners zagen iets in serie + DEDEN het. Media → gedrag. = D.", nogSimpeler: "Gedrag = D." },
        [{ woord: "media-invloed", uitleg: "Effect van TV/film/social media op kijkers (opvattingen, gedrag, beeldvorming)." }],
      ),
    }],
  },
  {
    title: "Vraag 33 — Hoogbejaarde slaat inbreker neer: welk begrip?",
    explanation: "Echte examenvraag uit Maatschappijkunde 2022-T1, vraag 33.",
    emoji: "🎓",
    checks: [{
      q: "Een hoogbejaarde Utrechter sloeg een inbreker neer met een pook. De politie hield hem niet aan, vanwege de omstandigheden waarin hij zich moest verdedigen. Welk begrip past hierbij?",
      options: [
        "eigenrichting",
        "heling",
        "noodweer",
        "overmacht",
      ],
      answer: 2,
      wrongHints: ["Eigenrichting = zelf het recht in handen nemen (wraak, vigilante). Strafbaar — past niet.", "Heling = gestolen goed kopen/verkopen. Geen verband.", null, "Overmacht = onbedwingbare situatie (bv. iemand met gun bedreigd om iets te doen). Past niet helemaal."],
      explanation: "**Noodweer** = wettelijke strafuitsluitingsgrond: jezelf of een ander verdedigen tegen een wederrechtelijke aanval. De man werd aangevallen → mocht zich verdedigen → niet strafbaar. Andere strafuitsluitingsgronden: overmacht, ontoerekeningsvatbaarheid, wettelijk voorschrift. Antwoord C.",
      examenBron: BRON_LABEL(33),
      bronLink: BRON_LINK,
      bronTekst: tekst20,
      leerpadLink: { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat & strafrecht" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'noodweer', 'overmacht', 'eigenrichting', 'heling'" },
        { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "VMBO-GT eindexamen", why: "strafuitsluitingsgronden — kern" },
      ],
      uitlegPad: compact(
        "4 strafuitsluitingsgronden: NOODWEER (jezelf/ander verdedigen tegen aanval), OVERMACHT (gedwongen door situatie), ONTOEREKENINGSVATBAARHEID (psychisch niet verantwoordelijk), WETTELIJK VOORSCHRIFT (uitvoering wet — politie schiet). EIGENRICHTING = niet uitgesloten, wel strafbaar (wraak nemen).",
        { basis: "Aangevallen + verdedigt = noodweer. = C.", simpeler: "Inbreker aanvalt → man slaat terug = noodweer = mag van de wet. = C.", nogSimpeler: "Noodweer = C." },
        [{ woord: "noodweer", uitleg: "Strafuitsluitingsgrond — verdediging tegen wederrechtelijke aanval." }, { woord: "eigenrichting", uitleg: "Zelf wraak nemen — STRAFBAAR (geen noodweer)." }],
      ),
    }],
  },
];

const examenMaatschappijkunde2022T1 = {
  id: "examen-maatschappijkunde-2022-t1",
  title: "Examen oefenen — Maatschappijkunde 2022 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "maatschappijleer",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Maatschappijkunde - eindexamen oefenen 2022-T1",
  intro: "6 echte examenvragen uit VMBO-GL/TL Maatschappijkunde 2022 tijdvak 1. Onderwerpen: ambtenaren werken op ministeries, minister leidt ministerie, ministeriële verantwoordelijkheid (koning onschendbaar), Europese Commissie indient wetsvoorstellen, media-invloed op crimineel gedrag, noodweer.",
  triggerKeywords: ["examen maatschappijkunde 2022 tijdvak 1", "ambtenaren ministerie", "minister leiding", "ministeriële verantwoordelijkheid koning", "europese commissie wetsvoorstel", "media crimineel gedrag", "noodweer"],
  chapters,
  steps,
};

export default examenMaatschappijkunde2022T1;
