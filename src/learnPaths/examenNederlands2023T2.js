// Leerpad: Examen-oefenpad Nederlands VMBO-GL/TL 2023 tijdvak 2.
// 2e Nederlands-pilot 2026-05-21. 6 echte MC-vragen uit 20, gespreid over
// alle 4 teksten. Bron: examenblad.nl, 0011 GT 2023-2.
// V3 (tegenstelling) · V7 (functie conclusie) · V10 (inleiding) ·
// V18 (doel) · V21 (doelgroep) · V33 (doel).

const tekst1 = {
  titel: "T1 — Zo kom je van je uitstelgedrag af",
  body:
    "**(1)** Vervelende taken uitstellen heeft met luieren niets te maken — integendeel, het is vaak een grote bron van stress. Waarom stellen we dan toch zo veel uit? En wat kunnen we ertegen doen?\n\n**(4)** Volgens onderwijskundige Joost van der Horst werkt het maken van een planning vaak averechts. De planning is namelijk niet het probleem — bijna iedereen kan een mooie planning maken. Het probleem zit in de uitvoering: het daadwerkelijk gaan dóen. Mensen denken: als ik een goeie planning heb, komt het wel goed. Maar planning en uitvoering zijn twee verschillende dingen.\n\n**(14)** Wat blijkt nu uit alle adviezen samen? Uitstelgedrag los je niet op met betere planningen, maar door eerlijk te zijn over WAAROM je iets uitstelt — angst, perfectionisme, of de taak is gewoon té vaag. Pas als je dat onder ogen ziet, kun je een stapje zetten. *(slot-alinea als conclusie van het hele stuk)*",
};

const tekst2 = {
  titel: "T2 — Kunstlicht is een killer voor insecten",
  body:
    "**(1)** Nederland, Duitsland, Engeland, Scandinavië, maar ook Puerto Rico en zelfs Costa Rica. Vanuit alle uithoeken van de wereld komen berichten over een dramatische achteruitgang in het aantal insecten. De lijst met mogelijke verklaringen is op al die plekken even lang: pesticiden, monoculturen, klimaatverandering, verlies van leefgebied. Maar onderzoekers publiceerden vorige week in het wetenschappelijke tijdschrift 'Biological Conservation' nu hun conclusie: **ook kunstlicht is een belangrijke oorzaak van de insectensterfte.**\n\n**(8)** Wat kunnen we doen? Volgens de onderzoekers helpt vooral: warmer licht (oranje/rood ipv blauw/wit), licht uit als het kan, en lampen die alleen verlichten waar het echt nodig is. Lampen die naar boven schijnen lokken duizenden insecten per nacht uit hun habitat — die overleven het niet. *(De tekst gaat in op het mechanisme + welke insecten kwetsbaar zijn + wat steden en burgers kunnen doen.)*",
};

const tekst3 = {
  titel: "T3 — Advertentie Artsen zonder Grenzen: 'Kerstcadeautip'",
  body:
    "**Muskietennetten €25,-**\n\n**Geef een kerstpakket waarmee je levens redt**\n\nMet €25,- geef je 10 netten om mensen tegen malaria te beschermen.\n\nDoor de coronapandemie, rampen en conflicten is wereldwijd meer dan ooit dringend medische zorg nodig. Zorg waar ieder mens recht op heeft. Artsen zonder Grenzen bereikt de mensen die onze hulp het hardst nodig hebben. Ook tijdens de feestdagen.\n\n**Noodhulp is teamwork. Help mee en vul een kerstpakket met levensreddende hulpgoederen.**\n\n*Scan de QR-code en vul een pakket — Azg.nl/kerstcadeau*\n\n*(advertentie van Artsen zonder Grenzen)*",
};

const tekst4 = {
  titel: "T4 — McDonald's wil weten waarom u frietbakjes op straat gooit",
  body:
    "**(1)** Hamburgerketen McDonald's wil af van zwerfafval. Per 2022 moet álle verpakkingsmateriaal van de 250 restaurants in Nederland ook weer worden ingezameld. Megaklus. Hoe? De firma wil schone klanten gaan belonen en vraagt psychologen om uit te zoeken waarom mensen hun rommel weggooien terwijl er gewoon afvalbakken staan.\n\n**(5)** In de hele afvalketen van McDonald's is zwerfafval een van de meest hardnekkige en meest zichtbare vormen van afval. Troep rond je restaurant kun je nog opruimen en je kunt zorgen voor voldoende afvalbakken. Je kunt zelfs afspraken maken met de gemeente over straatreiniging in de buurt. Maar zodra klanten de verpakking meenemen naar buiten, ligt het buiten je directe invloed.\n\n*(De tekst beschrijft McDonald's-acties, een psychologisch onderzoek naar weggooi-gedrag, en mogelijke oplossingen — vooral informerend over hoe McDonald's met afval omgaat.)*",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Nederlands 2023 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2023/vmbo-gl/documenten/cse-2/gt-0011-a-23-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie:
    "Cito-truc leesvaardigheid: kop + alinea 1 = onderwerp. Slot-alinea = conclusie/oproep/nuancering. Tekstverbanden via signaalwoord: tegenstelling (maar/echter), gevolg (dus/daardoor), doel-middel (om...te), opsomming (en, ook), voorbeeld (zoals).",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Tekst-structuur", emoji: "📖", from: 0, to: 2 },
  { letter: "B", title: "Doel & doelgroep", emoji: "🎯", from: 3, to: 5 },
];

const steps = [
  {
    title: "Vraag 3 — Tegenstelling in alinea 4 (T1 uitstelgedrag)",
    explanation: "Echte examenvraag uit Nederlands 2023-T2, vraag 3.",
    emoji: "📖",
    checks: [{
      q: "Wat wordt er in alinea 4 tegenover elkaar gezet?",
      options: [
        "oorzaak — verwachting",
        "planning — uitvoering",
        "studenten — onderwijskundige",
        "uitstelgedrag — tijdmanagement",
      ],
      answer: 1,
      wrongHints: [
        "Oorzaak/verwachting wordt niet als paar genoemd in alinea 4.",
        null,
        "Studenten/onderwijskundige zijn personen, geen contrast-paar in alinea 4.",
        "Uitstelgedrag is het ONDERWERP — geen contrast-paar in alinea 4 zelf.",
      ],
      explanation: "Alinea 4 zegt: 'De planning is namelijk niet het probleem... Het probleem zit in de UITVOERING'. Klassieke tegenstelling: iedereen kan een planning maken, maar het GAAN DOEN is een ander dier. Antwoord B.",
      examenBron: BRON_LABEL(3),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "tegenstellingen herkennen via signaalwoorden (niet... maar...)" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "contrasten in alineas — kern" },
      ],
      uitlegPad: compact(
        "Tegenstelling-signaalwoorden: MAAR, ECHTER, TOCH, NIET... MAAR, INTEGENDEEL. Hier: 'NIET het probleem... HET PROBLEEM zit in...'. Wat staat tegenover wat? Planning ↔ uitvoering. = B.",
        {
          basis: "'Niet planning, maar uitvoering' = tegenstelling. = B.",
          simpeler: "Plannen kan iedereen — DOEN is moeilijker. Dat is de tegenstelling. = B.",
          nogSimpeler: "Planning ↔ uitvoering = B.",
        },
        [
          { woord: "tegenstelling", uitleg: "Twee dingen tegenover elkaar zetten ('niet X, maar Y')." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 7 — Functie van slot-alinea (T1)",
    explanation: "Echte examenvraag uit Nederlands 2023-T2, vraag 7.",
    emoji: "📖",
    checks: [{
      q: "Welke functie heeft alinea 14? Alinea 14",
      options: [
        "geeft een conclusie.",
        "geeft een persoonlijke noot.",
        "noemt een toekomstverwachting.",
        "verwoordt nieuwe informatie.",
      ],
      answer: 0,
      wrongHints: [
        null,
        "Persoonlijke noot = MENING/ANEKDOTE van schrijver zelf. Alinea 14 trekt rationeel een conclusie.",
        "Toekomstverwachting = wat ER GAAT gebeuren. Alinea 14 spreekt over hoe je het NU aanpakt.",
        "Geen nieuwe info — alinea 14 vat samen wat eerder werd gezegd.",
      ],
      explanation: "Alinea 14 zegt: 'Wat blijkt nu uit alle adviezen samen?' — dat is een afsluitende redenering met EINDOORDEEL (uitstelgedrag los je niet op met planning maar met eerlijkheid over WAAROM). Klassieke conclusie. Antwoord A.",
      examenBron: BRON_LABEL(7),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "slot-alinea types (conclusie/samenvatting/oproep)" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "tekststructuur — kern" },
      ],
      uitlegPad: compact(
        "Slot-alinea = vaak CONCLUSIE (eindoordeel), SAMENVATTING (alles kort herhalen), NUANCERING (ja-maar), OPROEP (doe iets), of TOEKOMSTVERWACHTING. 'Wat blijkt nu uit alles...' = klassiek conclusie-signaal. = A.",
        {
          basis: "'Wat blijkt' + eindoordeel = conclusie. = A.",
          simpeler: "Schrijver trekt de eindstreep onder het hele verhaal. = A.",
          nogSimpeler: "Conclusie = A.",
        },
        [
          { woord: "conclusie", uitleg: "Eindoordeel of slotsom na een redenering." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 10 — Inleiding T2 (kunstlicht-insecten)",
    explanation: "Echte examenvraag uit Nederlands 2023-T2, vraag 10.",
    emoji: "📖",
    checks: [{
      q: "Hoe wordt de tekst ingeleid in alinea 1? Vooral door",
      options: [
        "de samenvatting van het onderwerp van de tekst te geven",
        "een conclusie over het onderwerp van de tekst te trekken",
        "een voorbeeld bij het onderwerp van de tekst uit te werken",
        "het centrale probleem van de tekst te benoemen",
      ],
      answer: 3,
      wrongHints: [
        "Samenvatting = ALLE punten kort herhalen. Alinea 1 noemt 1 issue.",
        "Conclusie = eindoordeel na redenering. Alinea 1 staat AAN HET BEGIN, niet na.",
        "Voorbeeld = 1 concreet geval. Alinea 1 noemt landen + probleem, geen 1 uitgewerkt voorbeeld.",
        null,
      ],
      explanation: "Alinea 1 noemt: 'overal ter wereld dramatische achteruitgang van insecten' + 'ook kunstlicht is oorzaak'. Dat IS het centrale probleem dat de hele tekst behandelt. Antwoord D.",
      examenBron: BRON_LABEL(10),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "inleidings-types onderscheiden" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "tekststructuur — kern" },
      ],
      uitlegPad: compact(
        "Inleidings-types: AANLEIDING (gebeurtenis NU), ANEKDOTE (verhaaltje), VOORBEELD (concreet geval), PROBLEEM (rode draad), SAMENVATTING (overzicht), DEFINITIE (wat IS X). Insecten-sterfte = probleem dat de tekst gaat uitleggen. = D.",
        {
          basis: "Insecten-sterfte is een probleem → alinea 1 benoemt dat. = D.",
          simpeler: "Probleem = iets dat MIS is. Hier: insecten verdwijnen. = D.",
          nogSimpeler: "Probleem = D.",
        },
        [
          { woord: "centraal probleem", uitleg: "Het kern-issue dat de hele tekst onderzoekt of oplost." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 18 — Doel T2 (kunstlicht-insecten)",
    explanation: "Echte examenvraag uit Nederlands 2023-T2, vraag 18.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het belangrijkste doel van deze tekst? De tekst wil de lezer",
      options: [
        "informeren over de hoofdoorzaak van de enorme achteruitgang van insecten, namelijk lichtvervuiling.",
        "informeren over een nieuwe, waarschijnlijk belangrijke oorzaak van de dramatische afname van insecten.",
        "overtuigen dat er meer onderzoek moet worden gedaan naar de effecten van kunstlicht op insecten.",
        "overtuigen dat 's nachts alle onnodige verlichting uitgezet moet worden om onnodige insectensterfte te voorkomen.",
      ],
      answer: 1,
      wrongHints: [
        "Te sterk — tekst zegt 'BELANGRIJKE oorzaak', niet 'HOOFDoorzaak'. Pesticiden + klimaat zijn ook genoemd.",
        null,
        "Overtuigen vraagt MENING/OPROEP. Tekst noemt resultaten — geen oproep tot meer onderzoek.",
        "Overtuigen tot uitzetten = oproep. Tekst doet aanbevelingen maar drukt niet op de knop 'doe dit nu'.",
      ],
      explanation: "Doel = informeren (feiten + onderzoeksresultaten zonder eigen mening). Specifiek over een NIEUWE oorzaak — kunstlicht — die naast de bekende oorzaken (pesticiden, klimaat) komt. NIET 'de hoofdoorzaak' want de tekst zegt 'een belangrijke oorzaak'. Antwoord B.",
      examenBron: BRON_LABEL(18),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "doel-typen herkennen + nuance hoofd vs een" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "schrijfdoel + precisie in formulering — kern" },
      ],
      uitlegPad: compact(
        "4 doelen: INFORMEREN, OVERTUIGEN, AMUSEREN, ACTIVEREN. Hier: feiten + onderzoek + geen mening = informeren. PAS OP nuance: 'HOOFDoorzaak' (alle insectendood door licht) ≠ 'EEN belangrijke oorzaak' (licht is één van de oorzaken). Tekst zegt het laatste. = B.",
        {
          basis: "Informeren + EEN oorzaak (niet DE). = B.",
          simpeler: "B is voorzichtig geformuleerd: 'nieuwe, waarschijnlijk belangrijke'. Dat matcht de tekst. = B.",
          nogSimpeler: "Informeren-EEN = B.",
        },
        [
          { woord: "een vs de", uitleg: "'Een' = één van meerdere. 'De' = de enige. Bij Cito altijd opletten." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 21 — Doelgroep T3 (advertentie Artsen zonder Grenzen)",
    explanation: "Echte examenvraag uit Nederlands 2023-T2, vraag 21.",
    emoji: "🎯",
    checks: [{
      q: "Op welke doelgroep richt deze advertentie zich vooral? Vooral op lezers die",
      options: [
        "een goed doel willen steunen",
        "het belang van een muskietennet inzien",
        "met Kerstmis graag cadeaus geven",
        "willen helpen om kerstpakketten in te pakken",
      ],
      answer: 0,
      wrongHints: [
        null,
        "Te smal — de meeste lezers weten niet eens precies hoe muskietennetten werken. De advertentie verklaart het kort.",
        "Te oppervlakkig — kerstcadeaus geven kan iedereen, het GOEDE DOEL is de hook.",
        "Letterlijk inpakken = vrijwilligerswerk. De advertentie vraagt om GELD, niet om handen.",
      ],
      explanation: "Tekst: 'Geef een kerstpakket waarmee je levens redt' + Artsen zonder Grenzen + medische zorg redden + €25 voor 10 netten. Hele framing = mensen die GELD willen geven aan een goed doel rond Kerstmis. Antwoord A.",
      examenBron: BRON_LABEL(21),
      bronLink: BRON_LINK,
      bronTekst: tekst3,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "doelgroep = wie spreekt deze tekst aan" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "advertentie-analyse — kern" },
      ],
      uitlegPad: compact(
        "Doelgroep = WIE wordt aangesproken. Truc: kijk naar de IDENTITEIT die de tekst suggereert. Goed-doel-organisatie + 'levens redden' + 'help mee' = mensen met gever-motivatie. = A.",
        {
          basis: "Artsen zonder Grenzen + €25 voor levens = gevers van goede doelen. = A.",
          simpeler: "De advertentie zegt 'help mee', 'levens redden'. Dat raakt mensen die WILLEN GEVEN. = A.",
          nogSimpeler: "Goed-doel-gevers = A.",
        },
        [
          { woord: "doelgroep", uitleg: "De groep mensen waar een tekst zich op richt." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 33 — Doel T4 (McDonald's-tekst)",
    explanation: "Echte examenvraag uit Nederlands 2023-T2, vraag 33.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het belangrijkste doel van deze tekst? De tekst is vooral bedoeld om de lezer te",
      options: [
        "informeren over de hoeveelheid zwerfafval van McDonald's.",
        "informeren over de manier waarop McDonald's omgaat met afval.",
        "overtuigen dat McDonald's zijn best doet om afval te recyclen.",
        "overtuigen om afval van McDonald's zelf netjes op te ruimen.",
      ],
      answer: 1,
      wrongHints: [
        "Te smal — de tekst noemt geen cijfers over hoeveelheid; gaat over AANPAK.",
        null,
        "Overtuigen = mening. Tekst beschrijft + nuanceert (zelfs psychologen ingeschakeld), neemt geen stelling 'McDonald's is goed'.",
        "Overtuigen lezer = aansporing voor de LEZER. Tekst is over wat MCDONALD'S doet, niet wat jij moet doen.",
      ],
      explanation: "Tekst beschrijft: McDonald's wil zwerfafval aanpakken, gebruikt psychologen, beloont schone klanten, neemt verpakkingen terug. Allemaal AANPAK-info zonder mening. = informeren over hoe ze omgaan met afval. Antwoord B.",
      examenBron: BRON_LABEL(33),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "doel-typen herkennen + nuance scope" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "schrijfdoel onderscheiden — kern" },
      ],
      uitlegPad: compact(
        "Doel-truc: zoek de WERKWOORDEN. 'Beschrijven hoe ze X aanpakken' + geen mening = informeren. 'Hoeveelheid' (smal) ≠ 'manier waarop' (breed). = B.",
        {
          basis: "Beschrijving zonder mening = informeren. AANPAK = manier waarop. = B.",
          simpeler: "De tekst vertelt WAT McDonald's doet om zwerfafval te stoppen. Dat is informeren over de aanpak. = B.",
          nogSimpeler: "Informeren-aanpak = B.",
        },
        [
          { woord: "aanpak", uitleg: "De manier waarop iemand een probleem oplost." },
        ],
      ),
    }],
  },
];

const path = {
  id: "examen-nederlands-2023-t2",
  subject: "nederlands",
  title: "Examen Nederlands 2023 — tijdvak 2 (VMBO-GL/TL)",
  shortTitle: "Examen Nederlands 2023-T2",
  description: "6 echte examenvragen Nederlands VMBO-GL/TL 2023 tijdvak 2, met didactische uitleg + leerpad-link bij elke fout.",
  groep: "vmbo-gt",
  category: "examen-vmbo",
  chapters,
  steps,
  meta: {
    bron: "examenblad.nl",
    bronLink: BRON_LINK,
    jaar: 2023,
    tijdvak: 2,
    niveau: "vmbo-gltl",
    leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
  },
};

export default path;
