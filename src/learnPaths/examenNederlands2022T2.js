// Leerpad: Examen-oefenpad Nederlands VMBO-GL/TL 2022 tijdvak 2.
// 7e Nederlands-pad 2026-05-30. 6 echte MC-vragen uit 35.
// Bron: examenblad.nl, 0011 GT 2022-2.
// V1 (hoofdonderwerp) · V7 (verband middel-doel) · V11 (hoofdgedachte) ·
// V13 (deelonderwerp) · V19 (tekstdoel) · V24 (beeldspraak duiden).

const tekst1 = {
  titel: "T1 — Kappen is pure verspilling (bomenmakelaar)",
  body:
    "**(1-3)** Net als auto's krijgen nu ook volwassen bomen online een tweede leven. Bomenexpert Arjan Zoontjens lanceerde *bomenmakelaar.nl*, een marktplaats waarop gemeenten bomen die voor nieuwbouw moeten wijken, kunnen verplaatsen in plaats van kappen. 'Pure verspilling — veel bomen zijn prima te verplanten.'\n\n**(4-7)** Volwassen bomen leveren flinke milieuwinst: ze verkoelen de stad (hitte-eilandeffect), houden water vast, filteren fijnstof en CO₂ en herbergen tachtig soorten insecten. 'Bomen zijn complete ecosystemen.'\n\n**(8-11)** Verplanten kost geld en kan alleen oktober-maart. In het eerste seizoen wisselden ~50 bomen van eigenaar — ook grote spelers (Staatsbosbeheer, gemeentes) doen mee.\n\n**(12-15)** Adviseur Heindijk wil een nationale bomendatabank zodat beleidsmakers met één muisklik zien waar bomen staan en hoe ze te verplaatsen zijn. *(Hoofdonderwerp: een oplossing om onnodige bomenkap tegen te gaan — bomen in kaart brengen en verplaatsen.)*",
};

const tekst2 = {
  titel: "T2 — Waarom is gapen zo aanstekelijk?",
  body:
    "**(1-2)** We zien gapen als teken van vermoeidheid en verveling. Toch doen alle mensen (en veel dieren) het, 6 tot 23 keer per dag — en het werkt aanstekelijk. Waarom, en wat is de functie?\n\n**(3-5)** Wetenschappers (o.a. bioloog Jorg Massen) lanceerden door de jaren heen veel *verklaringen*: sociale spanning verminderen, ziekteverwekkers verwijderen, extra zuurstof voor het brein (al 30 jaar geleden ontkracht). We gapen vooral bij overgangsfases (rust → inspanning).\n\n**(6-7)** Nieuw inzicht uit metingen: een gaap koelt de hersenen af richting de optimale temperatuur. De aanstekelijkheid werd lang verklaard via empathie.\n\n**(8-10, slot)** Massen denkt anders: 'nagapen' helpt een groep zich klaar te maken (pinguïns voor een gevaarlijke oversteek). Conclusie: gapen is geen teken van verveling, maar een manier om alert te blijven. *(Tekstdoel: informeren over functie en werking van gapen.)*",
};

const tekst3 = {
  titel: "T3 — Advertentie: Kontakt Mediapartners, 'een andere kijk op bereik'",
  body:
    "Een advertentie van mediabedrijf Kontakt Mediapartners, gericht op ondernemers uit de regio (Goudriaan/Alblasserwaard). Het bedrijf wil ondernemers helpen hun bereik te vergroten.\n\nDe slogan: *'Opvallen in de kudde, maar ook met beide laarzen in de Hollandse klei blijven staan.'* — Kontakt presenteert zich als tegelijk **onderscheidend** ('opvallen in de kudde') én **nuchter/down-to-earth** ('beide laarzen in de Hollandse klei').\n\n*(Tekstsoort: advertentie, met een afbeelding van een boer die op een hek leunt.)*",
};

const tekst4 = {
  titel: "T4 — Chatten bevordert schrijfvaardigheid",
  body:
    "**(1-3)** Taalwetenschapper Lieke Verheijen onderzocht of chattaal (WhatsApp, sms) de schrijfvaardigheid van jongeren schaadt. 'We hoeven niet bang te zijn voor taalgebruik op sociale media.'\n\n**(4-7)** Op sociale media wijken jongeren af van het Standaardnederlands (inkorten, fonetisch, geen hoofdletters) — vooral middelbare scholieren experimenteren. Maar wie vóór een schrijfopdracht had geappt, maakte juist iets minder spelfouten: ze waren al met taal bezig.\n\n**(8-9)** *Passief* gebruik (alleen lezen) heeft géén goede invloed. Jongeren switchen goed tussen chattaal en schooltaal — mits het Standaardnederlands goed wordt aangeleerd.\n\n**(10-12, slot)** Verheijen adviseert docenten chattaal in te zetten (vertaaloefeningen) en niet weg te zetten als 'fout'. *(Doel: informeren over onderzoeksuitkomsten naar het effect van chattaal.)*",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Nederlands 2022 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2022/vmbo-gl/documenten/cse-2/gt-0011-a-22-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie:
    "Cito-truc leesvaardigheid: ZOOM IN op kop, alinea 1, slot. Hoofdonderwerp = waar de HELE tekst over gaat; deelonderwerp = wat één blok alinea's behandelt; hoofdgedachte = de boodschap in 1 zin. Verbanden: middel-doel ('om te...'), oorzaak-gevolg ('daardoor'), tegenstelling ('maar'). Doel-typen: informeren/overtuigen/amuseren/activeren.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Onderwerp & verband", emoji: "🌳", from: 0, to: 2 },
  { letter: "B", title: "Doel & betekenis", emoji: "🎯", from: 3, to: 5 },
];

const KETEN = [
  { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "leesstrategie is de basis" },
  { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "examen-leesvaardigheid — kern" },
];

const steps = [
  {
    title: "Vraag 1 — Hoofdonderwerp (T1 bomen)",
    explanation: "Echte examenvraag uit Nederlands 2022-T2, vraag 1.",
    emoji: "🌳",
    checks: [{
      q: "Wat is het hoofdonderwerp van deze tekst?",
      options: [
        "gevolgen van bomenkap op de leefomgeving",
        "oplossing om bomenkap tegen te gaan",
        "positieve milieueffecten van bomen",
        "samenwerking tussen boomeigenaren",
      ],
      answer: 1,
      wrongHints: [
        "Te smal — de gevolgen van kap zijn achtergrond; de tekst draait om wat ertegen gedaan wordt.",
        null,
        "Dat is een deelonderwerp (alinea 4-7), niet waar de hele tekst om draait.",
        "Te smal — samenwerking is een detail; de kern is de marktplaats/oplossing zelf.",
      ],
      explanation: "De hele tekst draait om bomenmakelaar.nl: een manier om bomen te verplaatsen in plaats van te kappen. Dat is dé oplossing om onnodige bomenkap tegen te gaan.",
      examenBron: BRON_LABEL(1),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Hoofdonderwerp = rode draad door ALLE alinea's. Milieueffecten en samenwerking zijn losse stukken; de kern die alles verbindt is de marktplaats/oplossing tegen bomenkap.",
        {
          basis: "Rode draad = oplossing tegen kap.",
          simpeler: "Waar gaat ALLES over? Bomen redden/verplaatsen.",
          nogSimpeler: "Oplossing tegen kap",
        },
        [
          { woord: "hoofdonderwerp", uitleg: "Het centrale thema dat door de hele tekst loopt." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 7 — Verband tussen alinea 12 en 13 (T1 bomen)",
    explanation: "Echte examenvraag uit Nederlands 2022-T2, vraag 7.",
    emoji: "🔗",
    checks: [{
      q: "Van welk verband is er sprake tussen alinea 12 en alinea 13?",
      options: ["middel - doel", "opsomming", "probleem - oplossing", "tegenstelling"],
      answer: 0,
      wrongHints: [
        null,
        "Opsomming = los naast elkaar. Hier dient het ene (platform) juist een doel in het andere.",
        "Er wordt geen probleem-en-dan-oplossing gepresenteerd; het platform is het middel, informeren het doel.",
        "Geen tegenstelling — alinea 13 gaat juist verder op alinea 12 in.",
      ],
      explanation: "Alinea 12: Heindijk wil een bomendatabank/platform (het middel). Alinea 13: 'Zo kun je burgers beter informeren...' = waarvóór dat platform dient (het doel). Dus middel-doel.",
      examenBron: BRON_LABEL(7),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Vraag jezelf af: is het tweede een DOEL van het eerste? Het platform (12) bestaat OM burgers te informeren (13). 'Zo kun je...' = waartoe het dient = middel-doel.",
        {
          basis: "Platform dient om te informeren = middel-doel.",
          simpeler: "Het ene is een middel voor het doel in het andere.",
          nogSimpeler: "Middel-doel",
        },
        [
          { woord: "middel-doel", uitleg: "Verband waarbij het ene wordt gebruikt OM het andere te bereiken." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 11 — Hoofdgedachte (T1 bomen)",
    explanation: "Echte examenvraag uit Nederlands 2022-T2, vraag 11.",
    emoji: "🌳",
    checks: [{
      q: "Welke zin geeft de hoofdgedachte van de tekst het best weer?",
      options: [
        "Bomen hebben een positief effect op mens en milieu. Omdat er niet zo veel volwassen bomen meer zijn, moeten we er wel zuinig op zijn.",
        "Er is een nieuwe marktplaats voor bomen opgericht. Nu is het wachten op vraag en aanbod om bomen in kale nieuwbouwwijken te plaatsen.",
        "Het planten van bomen in steden en woonwijken is een trend aan het worden vanwege de positieve invloed van bomen op mens en milieu.",
        "Om onnodige bomenkap te voorkomen en volwassen bomen te redden, worden bomen in Nederland in kaart gebracht en verplaatst.",
      ],
      answer: 3,
      wrongHints: [
        "Te smal — de milieueffecten zijn ondersteuning, niet de kern-boodschap over verplaatsen.",
        "Te smal — de marktplaats is één element; de hoofdgedachte gaat over het redden/verplaatsen zelf.",
        "Niet de kern — 'nieuwe bomen planten' is iets anders dan bestaande bomen redden en verplaatsen.",
        null,
      ],
      explanation: "De hoofdgedachte vat de hele tekst samen: bomen worden in kaart gebracht en verplaatst om onnodige kap te voorkomen en volwassen bomen te redden.",
      examenBron: BRON_LABEL(11),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Hoofdgedachte = boodschap van de HELE tekst in 1 zin. Niet te smal (alleen milieu of alleen marktplaats). Kern: bomen redden door ze in kaart te brengen en te verplaatsen.",
        {
          basis: "Kern = bomen redden + verplaatsen.",
          simpeler: "Hele tekst: kap voorkomen door verplaatsen.",
          nogSimpeler: "Redden + verplaatsen",
        },
        [
          { woord: "hoofdgedachte", uitleg: "De centrale boodschap van de tekst, samengevat in 1 zin." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 13 — Deelonderwerp alinea 3-5 (T2 gapen)",
    explanation: "Echte examenvraag uit Nederlands 2022-T2, vraag 13.",
    emoji: "📖",
    checks: [{
      q: "De alinea's 3, 4 en 5 hebben een gezamenlijk deelonderwerp. Welk deelonderwerp hebben deze alinea's?",
      options: [
        "bewijs voor gapen",
        "gapen tegen verveling",
        "gapen vermindert spanningen",
        "verklaringen voor gapen",
      ],
      answer: 3,
      wrongHints: [
        "Te vaag — er is geen 'bewijs voor gapen'; de alinea's bespreken juist mogelijke verklaringen.",
        "Te smal — verveling is één van de besproken ideeën, niet het deelonderwerp van alle drie.",
        "Te smal — spanning verminderen is één theorie tussen meerdere.",
        null,
      ],
      explanation: "Alinea 3-5 zetten verschillende theorieën/verklaringen voor gapen op een rij (sociale spanning, zuurstof, overgangsfases). De rode draad door dit blok = verklaringen voor gapen.",
      examenBron: BRON_LABEL(13),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Deelonderwerp = wat dit BLOK samen behandelt. De alinea's noemen meerdere mogelijke redenen — dus de overkoepelende noemer is 'verklaringen voor gapen'.",
        {
          basis: "Blok = verschillende verklaringen.",
          simpeler: "Ze noemen meerdere redenen → verklaringen.",
          nogSimpeler: "Verklaringen",
        },
        [
          { woord: "deelonderwerp", uitleg: "Het sub-thema dat één blok alinea's samen behandelt." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 19 — Tekstdoel (T2 gapen)",
    explanation: "Echte examenvraag uit Nederlands 2022-T2, vraag 19.",
    emoji: "🎯",
    checks: [{
      q: "Van welk tekstdoel is vooral sprake in deze tekst?",
      options: [
        "de lezer informeren over de nieuwste inzichten op het gebied van gapen",
        "de lezer informeren over de functie en werking van gapen",
        "de lezer overtuigen van de juistheid van de ideeën van Massen over gapen",
        "de lezer overtuigen van de waarde van onderzoek naar gapen",
      ],
      answer: 1,
      wrongHints: [
        "Te smal — 'nieuwste inzichten' is een deel; de tekst legt vooral uit hoe en waarom gapen werkt.",
        null,
        "De tekst presenteert Massens idee neutraal náást andere; ze wil je niet overtuigen dat hij gelijk heeft.",
        "De tekst prijst het onderzoek niet aan — ze legt het verschijnsel zelf uit.",
      ],
      explanation: "De tekst legt neutraal uit wat de functie van gapen is en hoe het werkt — dat is informeren. Ze probeert je niet van één standpunt te overtuigen.",
      examenBron: BRON_LABEL(19),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Informeren = uitleggen/laten weten. Overtuigen = een mening doordrukken. De tekst legt feiten en theorieën uit zonder partij te kiezen → informeren over functie en werking.",
        {
          basis: "Legt uit, kiest geen partij = informeren.",
          simpeler: "De tekst LEERT je hoe gapen werkt.",
          nogSimpeler: "Informeren",
        },
        [
          { woord: "tekstdoel", uitleg: "Wat de schrijver met de tekst wil bereiken: informeren, overtuigen, amuseren of activeren." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 24 — Wat betekent de slogan? (T3 advertentie)",
    explanation: "Echte examenvraag uit Nederlands 2022-T2, vraag 24.",
    emoji: "🎯",
    checks: [{
      q: "Wat wordt er bedoeld met \"Opvallen in de kudde, maar ook met beide laarzen in de Hollandse klei blijven staan.\"? Kontakt Mediapartners is zowel...",
      options: [
        "onderscheidend als ambitieus.",
        "onderscheidend als nuchter.",
        "trendy als nuchter.",
        "vernieuwend als ambitieus.",
      ],
      answer: 1,
      wrongHints: [
        "'Beide laarzen in de klei' betekent niet ambitieus, maar juist met beide benen op de grond.",
        null,
        "'Opvallen in de kudde' = jezelf onderscheiden, niet per se trendy/modieus.",
        "'Laarzen in de klei' = nuchter/down-to-earth, niet ambitieus.",
      ],
      explanation: "'Opvallen in de kudde' = je onderscheiden van de rest (onderscheidend). 'Met beide laarzen in de Hollandse klei' = met beide benen op de grond, nuchter. Samen: onderscheidend én nuchter.",
      examenBron: BRON_LABEL(24),
      bronLink: BRON_LINK,
      bronTekst: tekst3,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: KETEN,
      uitlegPad: compact(
        "Beeldspraak ontleden: 'opvallen in de kudde' = anders dan de rest = onderscheidend. 'Laarzen in de Hollandse klei' = met beide benen op de grond = nuchter.",
        {
          basis: "Opvallen = onderscheidend, klei = nuchter.",
          simpeler: "Anders dan de rest + down-to-earth.",
          nogSimpeler: "Onderscheidend + nuchter",
        },
        [
          { woord: "beeldspraak", uitleg: "Iets niet letterlijk zeggen maar met een beeld — hier 'laarzen in de klei' voor nuchterheid." },
        ],
      ),
    }],
  },
];

const path = {
  id: "examen-nederlands-2022-t2",
  subject: "taal",
  title: "Examen Nederlands 2022 — tijdvak 2 (VMBO-GL/TL)",
  shortTitle: "Examen Nederlands 2022-T2",
  description: "6 echte examenvragen Nederlands VMBO-GL/TL 2022 tijdvak 2, met didactische uitleg + leerpad-link bij elke fout.",
  groep: "vmbo-gt",
  category: "examen-vmbo",
  chapters,
  steps,
  meta: {
    bron: "examenblad.nl",
    bronLink: BRON_LINK,
    jaar: 2022,
    tijdvak: 2,
    niveau: "vmbo-gltl",
    leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
  },
};

export default path;
