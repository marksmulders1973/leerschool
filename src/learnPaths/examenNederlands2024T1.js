// Leerpad: Examen-oefenpad Nederlands VMBO-GL/TL 2024 tijdvak 1.
// 3e Nederlands-pad 2026-05-21. 6 echte MC-vragen uit 20.
// Bron: examenblad.nl, 0011 GT 2024-1.
// V4 (deelonderwerp) · V9 (hoofdgedachte) · V18 (functie conclusie) ·
// V22 (doel advertentie) · V24 (dubbele inleiding) · V30 (hoofdonderwerp).

const tekst1 = {
  titel: "T1 — Klimaatverandering: het Britse dorp dat wordt opgeslokt door de zee",
  body:
    "**(1)** Het Engelse kustplaatsje Happisburgh heeft een 14e-eeuwse kerk, een beroemde rood-wit gestreepte vuurtoren en zo'n zeshonderd woningen. Maar dat aantal huizen wordt elk jaar minder.\n\n**(2-4)** Door erosie van de Engelse kust worden steeds meer huizen meegezogen door de zee. Bewoner Kerby wijst naar het strand waar 'eerst een weiland met paarden' lag — nu staat er een 'road closed'-bord zodat mensen niet per ongeluk in de afgrond lopen.\n\n**(5)** De Britse regering trekt zich grotendeels terug uit kustverdediging — anders dan Nederland, dat actief zand opspuit. Wat moet je beschermen? Een dorp? Een vuurtoren? Of laat je de natuur z'n gang gaan?\n\n*(De tekst beschrijft erosie als een eeuwen-oud maar versnellend proces. Slot-alinea: er moet nagedacht worden over WAT bescherming verdient.)*",
};

const tekst2 = {
  titel: "T2 — Maal meer (over kauwen en spijsvertering)",
  body:
    "**(1)** Het fijnkauwen van je maaltijd is de eerste stap in het verteringsproces. Maar hoe grondig moet dat? Krijg je meer vitamines binnen als je een hap helemaal tot moes maalt?\n\n**(3-5)** Wetenschappers zeggen: het ouderwetse advies '20× kauwen per hap' is niet per se nodig. Maar bij plantaardig voedsel worden voedingsstoffen wél beter opgenomen als je goed fijnmaalt — vooral bij groente en noten.\n\n**(9)** *Slot-alinea*: 'Kauwen helpt vooral bij vegetarisch eten — bij vlees maakt het weinig uit. Wie meer plantaardig eet, doet er goed aan langer te kauwen.' *(De tekst trekt zo een eindconclusie uit alle onderzoeken samen.)*",
};

const tekst3 = {
  titel: "T3 — Advertentie Cultuurfonds: 'Muziek als erfenis'",
  body:
    "**Wat gaat u straks steunen?**\n\n*'Ik kreeg mijn eerste trompet van mijn opa, speelde de hele dag en legde hem pas weg als ik naar bed moest. Het heeft mij zoveel gegeven door de jaren heen, zoveel gebracht. Daarom voelt het logisch dat ik iets teruggeef en straks muziek ga steunen door na te laten aan het Cultuurfonds.'*\n\n**Wordt uw erfenis het begin van iets moois?** Het Prins Bernhard Cultuurfonds begeleidt en adviseert bij het organiseren van cultuur-nalatenschap. **Kijk op cultuurfonds.nl/nalaten of vraag onze brochure aan** voor meer informatie over hoe u muziek, kunst of natuur kunt steunen via uw testament.\n\n*(advertentie van het Prins Bernhard Cultuurfonds)*",
};

const tekst4 = {
  titel: "T4 — Uit gewoonte naar Instagram",
  body:
    "**(1)** De storing bij Facebook weerhield mensen er maandagavond niet van om tegen beter weten in toch steeds Instagram, WhatsApp en Facebook te openen. Duimen van gebruikers leken er als vanzelf naartoe te gaan. *'Het is volstrekt onbewust geworden'*, zegt **mediapsycholoog Tom de Leeuw** van de Universiteit Twente.\n\n**(3-4)** De Leeuw legt uit waarom sociale media-apps zo verslavend zijn: random beloning (de TIMELINE laat steeds iets anders zien), variabele feedback (likes), en designtrucs (oneindig scrollen). Daardoor blijft je brein geprikkeld en blijf je scrollen.\n\n**(5-6)** Uit het *Nationale Social Media Onderzoek 2021* blijkt: 7,5 miljoen Nederlanders gebruiken Facebook, 3,7 miljoen Instagram. Nederlanders besteden gemiddeld 97 minuten per dag aan sociale media — jongeren 15-19 jaar zelfs veel meer.\n\n*(Slot van de tekst gaat over verslavings-mechanismen, normalisatie ('iedereen doet het'), en hoe moeilijk afkicken is. Rode draad: verslaving aan sociale media.)*",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Nederlands 2024 tijdvak 1, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2024/vmbo-gl/documenten/cse-1/gt-0011-a-24-1-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie:
    "Cito-truc leesvaardigheid: ZOOM IN op kop, alinea 1, slot. Deelonderwerp = wat dit STUK behandelt, hoofdonderwerp = wat de HELE tekst behandelt, hoofdgedachte = wat de schrijver wil zeggen IN 1 ZIN. Doel-typen: informeren/overtuigen/amuseren/activeren.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Onderwerpen herkennen", emoji: "📖", from: 0, to: 2 },
  { letter: "B", title: "Doel & inleiding", emoji: "🎯", from: 3, to: 5 },
];

const steps = [
  {
    title: "Vraag 4 — Deelonderwerp van alinea 1-5 (T1 Happisburgh)",
    explanation: "Echte examenvraag uit Nederlands 2024-T1, vraag 4.",
    emoji: "📖",
    checks: [{
      q: "Welk deelonderwerp hebben de alinea's 1 tot en met 5?",
      options: [
        "de afbrokkeling van de kust door klimaatverandering",
        "de risico's die kusterosie met zich meebrengt",
        "het terugtrekken van de kust van Engeland",
        "het verdwijnen van het dorp Happisburgh",
      ],
      answer: 2,
      wrongHints: [
        "Te breed — klimaatverandering komt pas later in beeld; alinea 1-5 gaan over WAT er gebeurt aan de kust.",
        "Te smal — alinea 1-5 noemen geen aparte risico-analyse, maar BESCHRIJVEN de verdwijning.",
        null,
        "Te smal — Happisburgh is 1 voorbeeld. Alinea 1-5 zoomen ook uit naar Britse kust algemeen.",
      ],
      explanation: "Alinea 1-5 vertellen: kust trekt terug, dorpen verdwijnen, paden + huizen verdwijnen, Britse overheid grijpt niet in zoals Nederland. Rode draad door dit blok = TERUGTREKKEN van Engelse kust. Antwoord C.",
      examenBron: BRON_LABEL(4),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "deelonderwerp = wat dit BLOK behandelt" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "alinea-clusters herkennen — kern" },
      ],
      uitlegPad: compact(
        "Deelonderwerp = wat dit BLOK behandelt (niet de hele tekst). Truc: lees alinea 1 + alinea 5 — wat hebben ze gemeen? Hier: kust verdwijnt + overheid doet weinig. Rode draad = TERUGTREKKEN van kust. = C.",
        {
          basis: "Alinea 1-5 = kust trekt terug. = C.",
          simpeler: "Wat is in al die alineas hetzelfde? Kust wordt minder. = C.",
          nogSimpeler: "Terugtrekkende kust = C.",
        },
        [
          { woord: "deelonderwerp", uitleg: "Het sub-thema dat één blok alineas behandelt." },
          { woord: "erosie", uitleg: "Het wegspoelen of afbrokkelen van land door water of wind." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 9 — Hoofdgedachte T1 (Happisburgh)",
    explanation: "Echte examenvraag uit Nederlands 2024-T1, vraag 9.",
    emoji: "📖",
    checks: [{
      q: "Wat is de hoofdgedachte van deze tekst?",
      options: [
        "De geschiedenis van Engeland gaat verloren door erosie en stijgende zeespiegel.",
        "De kustlijn van Engeland erodeert door klimaatverandering en er moeten maatregelen worden getroffen.",
        "Engelse dorpen verdwijnen omdat de Britse regering geen maatregelen neemt, anders dan Nederland.",
        "Erosie is een eeuwenoud proces dat sneller gaat — er moet nagedacht worden over WAT beschermd moet worden.",
      ],
      answer: 3,
      wrongHints: [
        "Te smal + emotioneel — tekst gaat niet vooral over 'geschiedenis verliezen' maar over keuzes.",
        "Te eenzijdig — tekst geeft GEEN moetes ('er moeten maatregelen'), maar stelt VRAAG ('wat verdient bescherming?').",
        "Te smal — Britse-vs-Nederlandse vergelijking is 1 detail, niet de kerngedachte.",
        null,
      ],
      explanation: "De hoofdgedachte is de boodschap die de hele tekst draagt. Hier: erosie is niet nieuw, gaat sneller door klimaat, en het echte vraagstuk is — wat beschermen we, wat laten we los? Antwoord D dekt precies dat. Antwoord C en B hebben actie-toon die de tekst NIET aanneemt.",
      examenBron: BRON_LABEL(9),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "hoofdgedachte = boodschap in 1 zin" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "kerngedachte vinden — kern" },
      ],
      uitlegPad: compact(
        "Hoofdgedachte = wat de schrijver wil ZEGGEN met de hele tekst (in 1 zin). Truc: kijk naar slot + alinea-functies. Tekst eindigt met OPEN VRAAG ('wat moet bescherming?'), dus hoofdgedachte bevat OOK die vraag. = D.",
        {
          basis: "Slot stelt vraag — hoofdgedachte ook. = D.",
          simpeler: "Hoofdgedachte = de KERN-boodschap. Hier: erosie + keuze maken. = D.",
          nogSimpeler: "Erosie + keuze = D.",
        },
        [
          { woord: "hoofdgedachte", uitleg: "De centrale boodschap van de tekst, samengevat in 1 zin." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 18 — Functie van slot-alinea (T2 Maal meer)",
    explanation: "Echte examenvraag uit Nederlands 2024-T1, vraag 18.",
    emoji: "📖",
    checks: [{
      q: "Wat is de belangrijkste functie van alinea 9?",
      options: [
        "een advies geven",
        "een conclusie trekken",
        "een samenvatting geven",
        "een toekomstverwachting geven",
      ],
      answer: 1,
      wrongHints: [
        "Advies = 'doe X'. Slot bevat een tip maar de KERN is een eindoordeel uit de onderzoeken.",
        null,
        "Samenvatting = ALLES kort herhalen. Slot trekt 1 conclusie, niet een lijstje.",
        "Toekomstverwachting = wat ER GAAT gebeuren. Slot zegt wat NU geldt.",
      ],
      explanation: "Slot-alinea (9): 'Kauwen helpt vooral bij vegetarisch eten — wie meer plantaardig eet, doet er goed aan langer te kauwen.' Dat is een EINDOORDEEL uit alle onderzoeken samen = conclusie. (Tip-element is bijproduct; de KERN is de redenering die wordt afgesloten.) Antwoord B.",
      examenBron: BRON_LABEL(18),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "slot-alinea: conclusie/advies/samenvatting onderscheiden" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "tekststructuur — kern" },
      ],
      uitlegPad: compact(
        "Conclusie = EINDoordeel na redenering. Advies = aansporing om iets te doen. Samenvatting = alles kort herhalen. 'Kauwen helpt VOORAL bij plantaardig' = oordeel uit onderzoeken = conclusie. = B.",
        {
          basis: "Eindoordeel uit redenering = conclusie. = B.",
          simpeler: "De schrijver trekt de eindstreep onder alle info. = B.",
          nogSimpeler: "Conclusie = B.",
        },
        [
          { woord: "conclusie", uitleg: "Het eindoordeel na een redenering of onderzoek." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 22 — Doel T3 (Cultuurfonds-advertentie)",
    explanation: "Echte examenvraag uit Nederlands 2024-T1, vraag 22.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het belangrijkste doel van deze advertentie?",
      options: [
        "lezers aansporen om net zoals de man uit de advertentie muziek te maken voor het Cultuurfonds",
        "lezers aansporen om op de website van het Cultuurfonds te kijken of hun brochure aan te vragen",
        "lezers informeren over de mogelijkheid geld aan het Cultuurfonds na te laten uit hun erfenis",
        "lezers informeren over het bestaan van de website en brochure van het Cultuurfonds",
      ],
      answer: 1,
      wrongHints: [
        "Te vrij — niemand begint muziek MAKEN door deze advertentie. Het gaat om GELD geven.",
        null,
        "Informeren = lezer iets LEREN. Hier wil de advertentie ACTIE: kijk op de site. = activeren, niet informeren.",
        "Te smal — informeren over BESTAAN is geen activatie. De advertentie WIL dat je actie onderneemt.",
      ],
      explanation: "Advertentie = ALMOST ALWAYS activeren (oproep tot actie). Hier: 'Kijk op cultuurfonds.nl/nalaten of vraag onze brochure aan.' Concrete oproep. Antwoord B.",
      examenBron: BRON_LABEL(22),
      bronLink: BRON_LINK,
      bronTekst: tekst3,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "advertentie = (bijna altijd) activeren" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "schrijfdoel + tekstsoort koppeling — kern" },
      ],
      uitlegPad: compact(
        "Tekstsoort → doel: NIEUWSARTIKEL = informeren, OPINIESTUK = overtuigen, COLUMN/GEDICHT = amuseren, ADVERTENTIE = activeren. Concrete oproep ('kijk op...') = activeren. = B.",
        {
          basis: "Advertentie + 'kijk op site' = activeren. = B.",
          simpeler: "Een advertentie WIL dat je iets doet — hier: naar de site. = B.",
          nogSimpeler: "Activeren = B.",
        },
        [
          { woord: "activeren", uitleg: "Lezer aansporen om concreet iets te doen (kopen, klikken, geven)." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 24 — Inleiding op 2 manieren (T4 Instagram)",
    explanation: "Echte examenvraag uit Nederlands 2024-T1, vraag 24.",
    emoji: "📖",
    checks: [{
      q: "Een tekst kan op verschillende manieren ingeleid worden: (1) de aanleiding melden, (2) een anekdote vertellen, (3) een conclusie trekken, (4) een deskundige introduceren. Op welke twee manieren wordt deze tekst ingeleid in alinea 1?",
      options: [
        "1 en 2",
        "1 en 4",
        "2 en 3",
        "3 en 4",
      ],
      answer: 1,
      wrongHints: [
        "Anekdote = klein verhaaltje over een persoon. Alinea 1 vertelt geen verhaaltje, alleen wat MENSEN deden bij de storing.",
        null,
        "Geen anekdote (geen verhaal); geen conclusie (staat aan begin, niet na redenering).",
        "Geen conclusie aan het BEGIN — die hoort aan het EIND.",
      ],
      explanation: "Alinea 1: 'De storing bij Facebook weerhield mensen er niet van...' = aanleiding (1: de storing is dé reden om dit NU te schrijven). + 'zegt mediapsycholoog Tom de Leeuw' = deskundige introductie (4). Beide tegelijk. Antwoord B.",
      examenBron: BRON_LABEL(24),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "inleidings-types onderscheiden — combinatie mogelijk" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "multi-inleiding herkennen — kern" },
      ],
      uitlegPad: compact(
        "Inleiding kan COMBINEREN. Loop ze af: aanleiding (=gebeurtenis NU)? Ja, de Facebook-storing. Anekdote (=verhaaltje)? Nee. Conclusie? Nee, staat aan begin. Deskundige? Ja, Tom de Leeuw wordt geïntroduceerd. = 1+4 = B.",
        {
          basis: "Aanleiding + deskundige = 1 en 4. = B.",
          simpeler: "De STORING = aanleiding. De PSYCHOLOOG = deskundige. = B.",
          nogSimpeler: "1+4 = B.",
        },
        [
          { woord: "aanleiding", uitleg: "De gebeurtenis NU die maakte dat dit geschreven werd." },
          { woord: "deskundige", uitleg: "Iemand met specialistische kennis die geciteerd wordt voor gezag." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 30 — Hoofdonderwerp T4 (Instagram)",
    explanation: "Echte examenvraag uit Nederlands 2024-T1, vraag 30.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het hoofdonderwerp van deze tekst?",
      options: [
        "storing bij Facebook",
        "storing op sociale media",
        "verslaafd aan Instagram",
        "verslaafd aan sociale media",
      ],
      answer: 3,
      wrongHints: [
        "Te smal — Facebook-storing is alleen aanleiding (alinea 1). De tekst gaat verder over VERSLAVING.",
        "Te smal — storing zelf is geen onderwerp van de hele tekst; verslaving wel.",
        "Te smal — Instagram is 1 van de apps. Tekst noemt ook WhatsApp + Facebook.",
        null,
      ],
      explanation: "Rode draad door alle alineas = verslavings-mechanismen + cijfers gebruik + 97 minuten/dag + normalisatie. Storing was alleen aanleiding. = verslaving aan SOCIALE MEDIA (niet 1 platform). Antwoord D.",
      examenBron: BRON_LABEL(30),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "hoofdonderwerp = rode draad ALLE alineas, niet 1 detail" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "aanleiding vs hoofdonderwerp scheiden — kern" },
      ],
      uitlegPad: compact(
        "Hoofdonderwerp = rode draad. Aanleiding (storing) ≠ hoofdonderwerp. Tekst beschrijft verslavingsmechanismen + cijfers + 97 minuten + normalisatie — allemaal over verslaving. Niet 1 platform → SOCIALE MEDIA in het algemeen. = D.",
        {
          basis: "Rode draad = verslaving sociale media. = D.",
          simpeler: "Storing was de hook, verslaving is het ONDERWERP. = D.",
          nogSimpeler: "Verslaving SM = D.",
        },
        [
          { woord: "hoofdonderwerp", uitleg: "Het centrale thema dat door ALLE alineas loopt." },
          { woord: "aanleiding", uitleg: "De gebeurtenis die de schrijver het begin gaf — vaak niet het hoofdthema." },
        ],
      ),
    }],
  },
];

const path = {
  id: "examen-nederlands-2024-t1",
  subject: "nederlands",
  title: "Examen Nederlands 2024 — tijdvak 1 (VMBO-GL/TL)",
  shortTitle: "Examen Nederlands 2024-T1",
  description: "6 echte examenvragen Nederlands VMBO-GL/TL 2024 tijdvak 1, met didactische uitleg + leerpad-link bij elke fout.",
  groep: "vmbo-gt",
  category: "examen-vmbo",
  chapters,
  steps,
  meta: {
    bron: "examenblad.nl",
    bronLink: BRON_LINK,
    jaar: 2024,
    tijdvak: 1,
    niveau: "vmbo-gltl",
    leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
  },
};

export default path;
