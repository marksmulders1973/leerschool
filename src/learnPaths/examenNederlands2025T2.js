// Leerpad: Examen-oefenpad Nederlands VMBO-GL/TL 2025 tijdvak 2.
// 5e Nederlands-pad 2026-05-21. 6 echte MC-vragen uit 18.
// Bron: examenblad.nl, 0011 GT 2025-2.
// V9 (doel T1) · V16 (doel T2) · V19 (doelgroep T3) · V26 (tegenstelling) ·
// V32 (doel T4) · V33 (hoofdgedachte T4).

const tekst1 = {
  titel: "T1 — Dure vis weggooien, dat doet pijn (voedselverspilling horeca)",
  body:
    "**(1)** Met een groot mes snijdt chef-kok Dyon den Dunnen (24) in de keuken van restaurant Three in Rotterdam groene appels brunoise — tot kleine blokjes. Die veranderen door een marinade van yuzu in vegetarische ceviche, verrijkt met groente en bloemen uit eigen tuin.\n\n**(3-4)** *Hoofddocent Ilona de Hooge (Wageningen Universiteit) zegt*: 'Eten, met name zwaarder voedsel zoals vlees, kost veel energie en water. Daar zit het grootste aandeel CO₂ in. Als je het vervolgens weggooit, is het helemaal zonde.'\n\n**(5-9)** Restaurants experimenteren met: minder porties, hergebruik van schillen, vegetarische gerechten, en samenwerking met boeren-coöperaties. Bedrijfsleider Daan Veldhoen vertelt over een tegenvaller: het is niet altijd financieel haalbaar. Veel chefs willen wel, maar het kost tijd + geld.\n\n*(Slot: een overzicht van wat er in de horeca aan verspilling gedaan kan worden — informerend, niet adviserend.)*",
};

const tekst2 = {
  titel: "T2 — Kun je met een cursus of app twee tot drie keer zo snel leren lezen?",
  body:
    "**(1)** Zou het niet handig zijn om dit artikel twee of drie keer zo snel te kunnen lezen als normaal? Verschillende cursussen snellezen beloven dit — meerdaagse cursussen, online apps, alles.\n\n**(3-5)** Snellezen-tip: stop met 'regressie' (terugspringen naar woorden) en met 'sub-vocaliseren' (woorden in je hoofd uitspreken). Maar wetenschapper Roel uit Nijmegen waarschuwt: in lange, complexe zinnen LEES je regelmatig vooruit en terug — dat is normaal en NODIG voor begrip.\n\n**(8-10)** *Risico*: bij snellezen leer je vooral SCANNEN — niet diep begrijpen. Bij FICTIE (romans) is snellezen vaak ongewenst, omdat je sfeer/karakter mist. Slot: 'De beste manier om snel te leren lezen, zonder in te leveren op begrip, is gewoon: VEEL lezen.'\n\n*(De tekst weegt voordelen en risico's af — informerend.)*",
};

const tekst3 = {
  titel: "T3 — Advertentie 'KRANTENBEZORGERS BEDANKT!'",
  body:
    "**KRANTENBEZORGERS BEDANKT!**\n\n**Uw waardering maakt voor hen het verschil**\n\nElke dag opnieuw, weer of geen weer, bezorgen toegewijde krantenbezorgers uw krant.\n\n**Geef uw krantenbezorger een blijk van waardering!** U kunt uw bedankje insturen tot en met 7 december. Alle ontvangen berichten worden door ons gebundeld in een speciaal boek, dat eind januari aan de krantenbezorgers wordt overhandigd.\n\nScan de QR-code, ga naar **www.krantenbezorgen.nl/dank** of stuur een kaartje naar Postbus 5000, Amsterdam.\n\n*(advertentie van de gezamenlijke dagbladuitgevers)*",
};

const tekst4 = {
  titel: "T4 — Zwerfafval, is er een oplossing?",
  body:
    "**(1)** Zwerfafval is overal: drankblikjes, sigarettenpeuken, plastic flesjes, snoeppapiertjes. Hoe pakken we dit aan?\n\n**(3-6)** De Landelijke Opschoondag mobiliseert duizenden vrijwilligers. Maar dat lost niet alles op — er komt steeds nieuw afval. Vervuilers zijn vaak gemakzuchtige individuen, maar ook bedrijven die te veel verpakking gebruiken. Statiegeld op flesjes en blikjes WERKT meetbaar — minder zwerfafval sinds invoering.\n\n**(7)** *Onderzoeker Bos zegt*: 'De overheid moet aan gedragssturing doen — statiegeld, boetes, campagnes. Burgers alleen redden het niet.'\n\n**(8)** *Maar het is óók niet alleen overheidsverantwoordelijkheid* — bedrijven moeten kiezen voor minder/ander verpakkingsmateriaal. *(Alinea 7 vs 8 = tegenstelling: wie is verantwoordelijk?)*\n\n**(9-13)** EU-regels dwingen producenten tot 'uitgebreide producentenverantwoordelijkheid' (UPV) — bedrijven betalen mee aan inzameling. Maar internationale verschillen + verpakkingslobby zorgen voor traagheid.\n\n*(Slot: zwerfafval blijft moeilijk aan te pakken — ondanks initiatieven van burgers, overheid en regels voor bedrijven.)*",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Nederlands 2025 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2025/vmbo-gl/documenten/cse-2/gt-0011-a-25-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie:
    "Cito leesvaardigheid: 4 doelen (informeren/overtuigen/amuseren/activeren). Doelgroep = wie ECHT de oproep kan opvolgen. Tekstverband alineas onderling: opsomming/tegenstelling/gevolg/conclusie/uitwerking. Hoofdgedachte = wat schrijver wil zeggen IN 1 ZIN.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Doel & doelgroep", emoji: "🎯", from: 0, to: 3 },
  { letter: "B", title: "Verband & hoofdgedachte", emoji: "🔗", from: 4, to: 5 },
];

const steps = [
  {
    title: "Vraag 9 — Doel T1 (voedselverspilling horeca)",
    explanation: "Echte examenvraag uit Nederlands 2025-T2, vraag 9.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het belangrijkste doel van deze tekst?",
      options: [
        "adviseren over hoe de horeca voedselverspilling zou moeten aanpakken",
        "adviseren over hoe klanten in de horeca zelf voedselverspilling tegen kunnen gaan",
        "informeren over de verschillende standpunten over voedselverspilling in de horeca",
        "informeren over wat er in de horeca aan voedselverspilling gedaan kan worden",
      ],
      answer: 3,
      wrongHints: [
        "Adviseren = 'doe dit, doe dat'. Tekst beschrijft — geeft geen voorschrift aan de horeca.",
        "Adviseren = 'doe dit, doe dat'. Tekst is over wat RESTAURANTS doen, niet wat KLANTEN moeten doen.",
        "Te smal — tekst noemt geen pro/contra standpunten, maar concrete ACTIES + tegenvallers.",
        null,
      ],
      explanation: "Tekst beschrijft AANPAK-voorbeelden (vegetarische ceviche, hergebruik schillen, samenwerking met boeren) + tegenvallers (financieel niet altijd haalbaar). Geen voorschrift, geen mening — INFORMATIE over wat MOGELIJK is. Antwoord D.",
      examenBron: BRON_LABEL(9),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "informeren vs adviseren onderscheiden" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "doel + scope — kern" },
      ],
      uitlegPad: compact(
        "Informeren vs adviseren: ADVIES = 'doe X' (voorschrift). INFORMEREN = 'dit zijn de feiten / mogelijkheden'. Tekst noemt voorbeelden + tegenvallers zonder voorschrift = informeren. Antwoord met BREDE scope (wat er gedaan KAN worden) = D.",
        {
          basis: "Beschrijving van mogelijkheden = informeren. = D.",
          simpeler: "De tekst zegt niet 'doe dit' — vertelt wat KAN. = D.",
          nogSimpeler: "Informeren-mogelijk = D.",
        },
        [
          { woord: "adviseren", uitleg: "Aanraden wat iemand moet doen ('je zou X moeten doen')." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 16 — Doel T2 (snellezen)",
    explanation: "Echte examenvraag uit Nederlands 2025-T2, vraag 16.",
    emoji: "🎯",
    checks: [{
      q: "Van welk tekstdoel is vooral sprake in deze tekst?",
      options: [
        "de lezer informeren over de trainingen en apps om je leessnelheid te vergroten",
        "de lezer informeren over de voordelen en de risico's van snellezen",
        "de lezer overtuigen van de resultaten van een cursus snellezen",
        "de lezer overtuigen van de verschillen tussen fictie en non-fictie bij snellezen",
      ],
      answer: 1,
      wrongHints: [
        "Te smal — trainingen/apps zijn 1 paragraaf. De KERN is de afweging snellezen wel of niet.",
        null,
        "Overtuigen = mening + aansporing. Tekst NUANCEERT — laat juist zien wat WEL/NIET werkt.",
        "Overtuigen vraagt mening. Fictie-stuk is INFO, geen pleidooi.",
      ],
      explanation: "Tekst weegt voordelen (sneller info opnemen) tegen risico's (minder begrip, vooral bij fictie). Beide kanten = informeren. Specifiek: VOORDELEN ÉN RISICO'S. Antwoord B.",
      examenBron: BRON_LABEL(16),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "voor/nadeel-mix zonder mening = informeren" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "doel + scope — kern" },
      ],
      uitlegPad: compact(
        "Bij voor/nadeel-mix zonder eigen kant kiezen = informeren. Hier: snellezen heeft VOORDELEN (snelheid) en RISICO'S (begripverlies). = B.",
        {
          basis: "Voordelen + risico's beschreven = informeren erover. = B.",
          simpeler: "Tekst zegt 'goed' en 'pas op'. Allebei → informeren. = B.",
          nogSimpeler: "Voor/nadeel = B.",
        },
        [
          { woord: "nuancering", uitleg: "Een zwart/wit-beeld kleuren met genuanceerde voor- en nadelen." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 19 — Doelgroep T3 (krantenbezorgers-advertentie)",
    explanation: "Echte examenvraag uit Nederlands 2025-T2, vraag 19.",
    emoji: "🎯",
    checks: [{
      q: "Voor welke doelgroep is deze advertentie met name bedoeld? Voor lezers",
      options: [
        "die een krant laten thuisbezorgen",
        "die ervaring hebben als krantenbezorger",
        "die iemand kennen die krantenbezorger is",
        "die zelf kranten willen gaan bezorgen",
      ],
      answer: 0,
      wrongHints: [
        null,
        "Bezorgers zelf hoeven zichzelf niet te bedanken. Doelgroep = mensen die hun bezorger willen bedanken.",
        "Te indirect — advertentie zegt 'UW bezorger', niet 'kennen iemand die'.",
        "Voor wervings-advertentie zou je iets anders verwachten — hier wordt om bedankje gevraagd, niet om sollicitanten.",
      ],
      explanation: "Tekst: 'UW krant' + 'UW krantenbezorger' = lezers die ZELF een krant ontvangen worden direct aangesproken. Zij kunnen hun eigen bezorger bedanken. Antwoord A.",
      examenBron: BRON_LABEL(19),
      bronLink: BRON_LINK,
      bronTekst: tekst3,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "doelgroep = wie wordt direct met 'u/jij/uw' aangesproken" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "advertentie-analyse — kern" },
      ],
      uitlegPad: compact(
        "Doelgroep-truc: zoek wie ECHT de actie kan/wil doen. Advertentie zegt 'UW krant' → mensen die zelf een krant ontvangen worden direct aangesproken. = A.",
        {
          basis: "'UW krant' = lezers met krant. = A.",
          simpeler: "Wie ontvangt 'UW krant'? Mensen die abonnee zijn. = A.",
          nogSimpeler: "Abonnees = A.",
        },
        [
          { woord: "doelgroep", uitleg: "De groep mensen waar een tekst zich vooral op richt." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 32 — Doel T4 (zwerfafval)",
    explanation: "Echte examenvraag uit Nederlands 2025-T2, vraag 32.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het belangrijkste doel van deze tekst?",
      options: [
        "de lezer activeren om geen afval meer op straat te gooien",
        "de lezer activeren om ook mee te doen met de Landelijke Opschoondag",
        "de lezer informeren over de problemen bij het bestrijden van zwerfafval",
        "de lezer informeren over wie er verantwoordelijk zijn voor zwerfafval",
      ],
      answer: 2,
      wrongHints: [
        "Activeren = oproep doen. Tekst bevat geen 'jij moet stoppen'-boodschap.",
        "Activeren = oproep. Tekst noemt Opschoondag, maar roept lezer niet op mee te doen.",
        null,
        "Te smal — verantwoordelijkheids-discussie is 1 deel (alinea 7-8). Hele tekst gaat over álle problemen.",
      ],
      explanation: "Tekst schetst HET PROBLEEM: oprapen werkt deels, statiegeld helpt, overheid vs bedrijven, EU-regels, lobby — allemaal HORDES bij zwerfafval-bestrijding. = informeren over PROBLEMEN bij aanpak. Antwoord C.",
      examenBron: BRON_LABEL(32),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "problem-analyse-tekst = informeren, niet activeren" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "schrijfdoel + breedste passende optie — kern" },
      ],
      uitlegPad: compact(
        "Tekst zonder OPROEP = niet activeren. Tekst zonder MENING = niet overtuigen. Tekst LEGT UIT waar het stroef gaat = informeren over PROBLEMEN. = C.",
        {
          basis: "Schetst alle problemen, geen oproep = informeren over problemen. = C.",
          simpeler: "De tekst zegt: 'aanpakken is moeilijk omdat...'. = C.",
          nogSimpeler: "Problemen = C.",
        },
        [
          { woord: "informeren-over-problemen", uitleg: "Lezer LATEN ZIEN waar de moeilijkheden zitten, zonder oplossing op te dringen." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 26 — Verband tussen alinea 7 en 8 (T4)",
    explanation: "Echte examenvraag uit Nederlands 2025-T2, vraag 26.",
    emoji: "🔗",
    checks: [{
      q: "Wat is het verband tussen de alinea's 7 en 8?",
      options: [
        "Alinea 7 en 8 vormen samen een opsomming.",
        "Alinea 7 en 8 vormen samen een tegenstelling.",
        "Alinea 8 geeft een conclusie bij alinea 7.",
        "Alinea 8 noemt een gevolg van de oorzaak in alinea 7.",
      ],
      answer: 1,
      wrongHints: [
        "Opsomming = 'A én B én C' op dezelfde lijn. Alinea 7 zegt overheid; 8 zegt JUIST OOK bedrijven (contrast).",
        null,
        "Conclusie = 'dus...'. Alinea 8 is geen samengevat oordeel, maar ander standpunt.",
        "Gevolg = 'A → B'. Alinea 8 is geen automatisch gevolg, maar een aanvulling/correctie.",
      ],
      explanation: "Alinea 7 (Bos): 'overheid moet gedragssturing doen'. Alinea 8: 'MAAR het is ÓÓK niet alleen overheidsverantwoordelijkheid — bedrijven moeten ook'. Klassiek 'aan de ene kant — aan de andere kant' = tegenstelling. Antwoord B.",
      examenBron: BRON_LABEL(26),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "tegenstelling tussen 2 alineas (overheid ↔ bedrijven)" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "alineas-verband — kern" },
      ],
      uitlegPad: compact(
        "Tegenstelling-signalen tussen alineas: MAAR, ÓÓK NIET, ANDERZIJDS, AAN DE ANDERE KANT. Hier: 7 'overheid moet' ↔ 8 'maar OOK bedrijven'. = B.",
        {
          basis: "'Niet alleen overheid maar ook bedrijven' = tegenstelling. = B.",
          simpeler: "Alinea 7 wijst naar A, alinea 8 zegt 'ook B'. Tegenstelling. = B.",
          nogSimpeler: "Tegenstelling = B.",
        },
        [
          { woord: "tegenstelling tussen alineas", uitleg: "Twee alineas die elkaar AANVULLEN met een tegenwerping ('niet alleen X, ook Y')." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 33 — Hoofdgedachte T4 (zwerfafval)",
    explanation: "Echte examenvraag uit Nederlands 2025-T2, vraag 33.",
    emoji: "🔗",
    checks: [{
      q: "Wat is de hoofdgedachte van deze tekst?",
      options: [
        "De overheid en vervuilende bedrijven hebben de grootste verantwoordelijkheid voor het terugdringen van zwerfafval.",
        "Mensen zijn van nature gemakzuchtig en zorgen voor zwerfafval — daarom hebben ze overheidssturing nodig.",
        "Om zwerfafval succesvol aan te pakken, moeten er meer Europese regels voor bedrijven ingevoerd worden.",
        "Zwerfafval blijft een moeilijk aan te pakken probleem, ondanks burgerinitiatieven, overheidsmaatregelen en regels voor bedrijven.",
      ],
      answer: 3,
      wrongHints: [
        "Te eenzijdig — tekst noemt ÓÓK burgers + EU-regels, niet alleen overheid+bedrijven.",
        "Te smal — gemakzucht is 1 stukje. Hoofdgedachte dekt heel het probleem.",
        "Te smal — EU-regels zijn 1 instrument. Hoofdgedachte erkent dat NIETS volledig werkt.",
        null,
      ],
      explanation: "Hoofdgedachte = boodschap van HELE tekst. Tekst beschrijft burger-acties + overheid + bedrijven + EU-regels — ALLE pogingen, MAAR ondanks alles blijft het PROBLEEM. Antwoord D dekt precies die nuance: 'moeilijk aan te pakken ondanks X, Y, Z'.",
      examenBron: BRON_LABEL(33),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "hoofdgedachte = boodschap in 1 zin die alles dekt" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "kerngedachte vinden — kern" },
      ],
      uitlegPad: compact(
        "Hoofdgedachte = wat schrijver wil zeggen IN 1 ZIN. Tekst zegt: niets werkt 100% — alle inzet ten spijt blijft zwerfafval probleem. Optie D bevat ÉN burgerinitiatief ÉN overheid ÉN bedrijven ÉN conclusie 'moeilijk'. = D.",
        {
          basis: "Slot-toon = 'ondanks alles, blijft probleem' = D.",
          simpeler: "Hoofdgedachte = de boodschap. Hier: 'we proberen alles maar het werkt niet goed'. = D.",
          nogSimpeler: "Moeilijk-ondanks = D.",
        },
        [
          { woord: "hoofdgedachte", uitleg: "De centrale boodschap van de tekst in één zin." },
        ],
      ),
    }],
  },
];

const path = {
  id: "examen-nederlands-2025-t2",
  subject: "nederlands",
  title: "Examen Nederlands 2025 — tijdvak 2 (VMBO-GL/TL)",
  shortTitle: "Examen Nederlands 2025-T2",
  description: "6 echte examenvragen Nederlands VMBO-GL/TL 2025 tijdvak 2, met didactische uitleg + leerpad-link bij elke fout.",
  groep: "vmbo-gt",
  category: "examen-vmbo",
  chapters,
  steps,
  meta: {
    bron: "examenblad.nl",
    bronLink: BRON_LINK,
    jaar: 2025,
    tijdvak: 2,
    niveau: "vmbo-gltl",
    leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
  },
};

export default path;
