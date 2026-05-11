// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2024 tijdvak 2
// 2026-05-10: derde pilot-examen — 6 vragen geverifieerd tegen origineel.
// Bron: examenblad.nl, examen 0233 GT 2024-2 (-o/-b/-c).

const chapters = [
  { letter: "A", title: "Internationale handel", emoji: "🌍", from: 0, to: 0 },
  { letter: "B", title: "Ondernemen & marketing", emoji: "🏪", from: 1, to: 2 },
  { letter: "C", title: "Sociale zekerheid", emoji: "🤝", from: 3, to: 4 },
  { letter: "D", title: "Vermogen", emoji: "💰", from: 5, to: 5 },
];

const steps = [
  // ─── Vraag 1 — Nationaal inkomen Kameroen ────────────────
  {
    title: "Vraag 1 — Kameroen en nationaal inkomen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 2, vraag 1. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland** of **Ontwikkelingslanden**.",
    emoji: "🎓",
    checks: [
      {
        q: "Als we landen met elkaar vergelijken, kijken we naar het nationaal inkomen van een land. In welke regel staat een economisch verschijnsel waardoor het nationaal inkomen in Kameroen stijgt?",
        options: [
          "De overheid van Kameroen koopt Nederlandse helikopters.",
          "In Kameroen verbouwen veel mensen hun eigen groenten.",
          "Nederlandse toeristen gaan op vakantie naar Kameroen.",
        ],
        answer: 2,
        wrongHints: [
          "Hier stroomt geld JUIST naar Nederland (Kameroen koopt en betaalt aan NL).",
          "Eigen groente verbouwen → geen geldstroom tussen landen.",
          null,
          "Klopt ook (NL geld → Kameroen), maar context-vraag wijst meestal op toerisme als 'export van diensten'.",
        ],
        explanation: "Nederlandse toeristen op vakantie in Kameroen geven daar geld uit (hotel, eten, souvenirs). Dat is geld dat van NL naar Kameroen stroomt — voor Kameroen is het export van diensten. Voor NL is het import.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag 1",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'nationaal inkomen', 'export', 'import', 'export van diensten'" },
          { id: "kaartlezen-po", title: "Kaartlezen", niveau: "po-1F", why: "Kameroen op de kaart + geldstroom-richting tussen 2 landen visualiseren" },
          { id: "pincode-buitenland-eu", title: "Nederland en het buitenland", niveau: "vmbo-4", why: "import vs export + effect op nationaal inkomen — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is nationaal inkomen?", tekst: "Het totaal aan inkomen van iedereen in een land in 1 jaar. Stijgt als er meer geld het land binnen komt dan eruit gaat." },
            { titel: "Wanneer stijgt nationaal inkomen Kameroen?", tekst: "Als er GELD het land in stroomt — vanuit andere landen. Dat heet export (van producten of diensten)." },
            { titel: "Loop opties langs", tekst: "Optie 1: Kameroen KOOPT in NL (geld weg uit Kameroen) ✗. Optie 2: eigen groente verbouwen (geen geldstroom) ✗. Optie 3: NL-toeristen GEVEN UIT in Kameroen (geld komt binnen) ✓." },
          ],
          woorden: [
            { woord: "nationaal inkomen", uitleg: "Totale verdiende inkomen van alle mensen + bedrijven in een land per jaar. Maatstaf voor welvaart." },
            { woord: "export", uitleg: "Goederen of diensten verkopen aan het buitenland → geld komt het land BINNEN." },
            { woord: "import", uitleg: "Goederen of diensten kopen IN het buitenland → geld gaat het land UIT." },
            { woord: "export van diensten", uitleg: "Buitenlanders die in jouw land geld uitgeven aan diensten (toerisme, transport, financieel)." },
          ],
          theorie: "**Wat doet wat met nationaal inkomen?**\n\n• **Export** (NL verkoopt aan buitenland) → geld komt NL binnen → NL-inkomen STIJGT\n• **Import** (NL koopt buitenland) → geld gaat eruit → NL-inkomen DAALT (relatief)\n• **Toerisme**: buitenlandse toerist in NL = export van diensten = NL-inkomen STIJGT\n\nVoor Kameroen geldt het omgekeerd. Een NL-toerist die in Kameroen Cola koopt = export van diensten voor Kameroen.",
          voorbeelden: [
            { type: "export goederen", tekst: "NL verkoopt bloemen aan Duitsland → Duits geld → NL → NL-inkomen stijgt." },
            { type: "export diensten", tekst: "Duits gezin gaat skiën in NL bergen (theoretisch 😉) → geeft Duits geld uit in NL → export van diensten." },
            { type: "Kameroen", tekst: "NL-toerist Sarah betaalt Kameroenese hotelhouder voor 5 nachten → geld stroomt NL → Kameroen → KAM-inkomen stijgt." },
          ],
          basiskennis: [
            { onderwerp: "Lopende rekening", uitleg: "Onderdeel van betalingsbalans dat export-import bijhoudt. Positief saldo = land verdient meer dan het uitgeeft aan buitenland." },
          ],
          niveaus: {
            basis: "Export (geld van buiten → Kameroen) → nationaal inkomen stijgt. Toerisme = export diensten. Antwoord C.",
            simpeler: "Stel je voor dat jij €1.000 op vakantie naar Kameroen meeneemt. Dat geld geef je uit aan hotel, eten, taxi. Dat geld komt nu Kameroen BINNEN — voor Kameroen is dat 'verdienen aan toeristen'. Hun nationaal inkomen stijgt.",
            nogSimpeler: "NL-toerist geeft uit in KAM = geld komt KAM binnen = inkomen omhoog = C.",
          },
        },
      },
    ],
  },
  // ─── Vraag 17 — Arjun ondernemingsvorm ──────────────────
  {
    title: "Vraag 17 — niet hoofdelijk aansprakelijk",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 2, vraag 17. Doorklik voor de Pincode-uitleg in **Ondernemen** (stap 'Rechtsvormen').",
    emoji: "🎓",
    checks: [
      {
        q: "Een eigenaar van een bedrijf moet een ondernemingsvorm kiezen. Welke ondernemingsvorm moet Arjun kiezen, zodat hij niet hoofdelijk aansprakelijk is voor de schulden van het bedrijf?",
        options: [
          "bv (besloten vennootschap)",
          "eenmanszaak",
          "vof (vennootschap onder firma)",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij een eenmanszaak ben je JUIST volledig privé aansprakelijk voor schulden.",
          "Bij een VOF zijn alle vennoten hoofdelijk aansprakelijk — ook voor schulden van de ander.",
        ],
        explanation: "Een BV (besloten vennootschap) is een rechtspersoon. Dat betekent dat het bedrijf juridisch een aparte 'persoon' is. De eigenaar is daardoor niet privé aansprakelijk voor schulden — alleen het bedrijfsvermogen kan worden verkocht bij faillissement. Dat is precies waarom Arjun een BV moet kiezen.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag 17",
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'eenmanszaak', 'VOF', 'BV', 'hoofdelijk aansprakelijk', 'rechtspersoon'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "kernwoord 'hoofdelijk' uit de vraag halen + linken aan welke vorm WEL/NIET" },
          { id: "pincode-ondernemen", title: "Ondernemen", niveau: "vmbo-4", why: "ondernemingsvormen + aansprakelijkheid bij faillissement — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is hoofdelijk aansprakelijk?", tekst: "Aansprakelijk = je moet het terugbetalen. Hoofdelijk = met je PRIVÉ-vermogen (eigen huis, auto, spaargeld). Dus: het bedrijf gaat failliet → schuldeisers kunnen JOUW spullen pakken." },
            { titel: "Welke ondernemingsvormen zijn er?", tekst: "Eenmanszaak (1 baas, hoofdelijk) / VOF (meerdere bazen, allemaal hoofdelijk) / BV (rechtspersoon, NIET hoofdelijk)." },
            { titel: "Welke past bij Arjun?", tekst: "Hij wil NIET hoofdelijk = niet privé-aansprakelijk → BV." },
          ],
          woorden: [
            { woord: "ondernemingsvorm", uitleg: "Juridische vorm van een bedrijf: eenmanszaak, VOF, BV, NV, stichting." },
            { woord: "hoofdelijk aansprakelijk", uitleg: "Je moet schulden van het bedrijf met je PRIVÉ-vermogen betalen als het bedrijf het niet kan." },
            { woord: "rechtspersoon", uitleg: "Het bedrijf is juridisch een aparte 'persoon' — eigen vermogen, eigen schulden. De eigenaar staat ERBUITEN. BV en NV zijn rechtspersonen." },
            { woord: "BV", uitleg: "Besloten Vennootschap — rechtspersoon. Aandeelhouders zijn alleen aansprakelijk voor hun ingelegde geld (het aandelenkapitaal)." },
          ],
          theorie: "**Aansprakelijkheid per ondernemingsvorm:**\n\n| Vorm | Aansprakelijk? | Risico |\n|---|---|---|\n| Eenmanszaak | Ja, privé | Verlies privé-vermogen |\n| VOF | Ja, privé (alle vennoten) | Idem, ook voor schulden ander |\n| BV | Nee, alleen ingelegd kapitaal | Verlies aandelen-waarde |\n| NV | Nee, alleen aandelen | Idem |\n\nBV is dus juridisch een **schild** tussen het bedrijf en jouw privé-bezit.",
          voorbeelden: [
            { type: "eenmanszaak", tekst: "Bakker Bram begint als eenmanszaak. Bedrijf failliet → schuldeisers pakken zijn huis. Risico = privé-vermogen weg." },
            { type: "BV", tekst: "Arjun begint Camping BV. Bedrijf failliet → camping en machines worden verkocht. Arjuns huis blijft veilig." },
          ],
          basiskennis: [
            { onderwerp: "Waarom rechtspersoon?", uitleg: "Om risico te beperken én om makkelijker investeerders te krijgen (aandeelhouders riskeren alleen wat ze inleggen)." },
          ],
          niveaus: {
            basis: "BV = rechtspersoon = niet hoofdelijk aansprakelijk. Antwoord A.",
            simpeler: "Stel: jij start een bedrijf en het gaat failliet voor €50.000. Bij een eenmanszaak: jij betaalt die €50.000 zelf (huis verkopen evt). Bij een BV: het bedrijf 'is' aparte persoon — alleen wat in het bedrijf zit gaat weg, jouw eigen huis blijft.",
            nogSimpeler: "Niet hoofdelijk = BV = A.",
          },
        },
      },
    ],
  },
  // ─── Vraag 21 — Camping marketing-mix ──────────────────
  {
    title: "Vraag 21 — luxe campingplaats marketing",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 2, vraag 21. Doorklik voor de Pincode-uitleg in **Ondernemen** (stap 'Doelgroep en marketing').",
    emoji: "🎓",
    checks: [
      {
        q: "Veel campinggasten willen tegenwoordig een luxe, trendy campingplaats met eigen sanitair en luxe keuken. Arjun wil hierin investeren, zodat er een glamping ontstaat. Onder welk marketinginstrument vallen de aanpassingen van de campingplaatsen?",
        options: [
          "onder personeelsbeleid",
          "onder plaatsbeleid",
          "onder presentatiebeleid",
          "onder productbeleid",
        ],
        answer: 3,
        wrongHints: [
          "Personeelsbeleid gaat over de medewerkers, niet over wat je verkoopt.",
          "Plaatsbeleid gaat over WAAR je verkoopt (locatie, kanaal).",
          "Presentatiebeleid gaat over hoe je het AANBIEDT (uiterlijk, sfeer).",
          null,
        ],
        explanation: "De luxe campingplaats met eigen sanitair en keuken is het PRODUCT zelf — wat Arjun verkoopt. Productbeleid gaat over wat je biedt aan klanten (kwaliteit, kenmerken, variatie). De 4 P's van marketing: Product, Prijs, Plaats, Promotie.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag 21",
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'marketinginstrument' + de P's: product, prijs, plaats, promotie, personeel, presentatie" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "uit de vraag halen WAT Arjun verandert (luxe-aanbod) en welke P daarbij hoort" },
          { id: "pincode-ondernemen", title: "Ondernemen", niveau: "vmbo-4", why: "marketing-mix + 4/6 P's — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat zijn marketing-instrumenten (P's)?", tekst: "Klassiek 4: Product, Prijs, Plaats, Promotie. Pincode noemt vaak 5: Personeel + Presentatie. Allemaal 'wat kun je veranderen om beter te verkopen'." },
            { titel: "Wat verandert Arjun?", tekst: "Hij maakt de PLAATSEN op de camping luxer (sanitair, keuken). Hij verandert het PRODUCT (= wat hij aan klanten verkoopt)." },
            { titel: "Loop opties langs", tekst: "Personeel = medewerkers ✗. Plaats = waar je verkoopt ✗. Presentatie = uiterlijk/sfeer (wel verwarrend, maar Pincode rekent dit als hoe je AANBIEDT, niet wat). Product = wat je verkoopt ✓." },
          ],
          woorden: [
            { woord: "marketinginstrument", uitleg: "Een knop waar je aan kunt draaien om beter te verkopen. De 4 (of 5) P's." },
            { woord: "productbeleid", uitleg: "Beslissingen over WAT je verkoopt: kwaliteit, variaties, ontwerp, garantie." },
            { woord: "prijsbeleid", uitleg: "Beslissingen over HOEVEEL je vraagt: korting, premium-prijs, inkoopprijzen." },
            { woord: "plaatsbeleid", uitleg: "Beslissingen over WAAR + HOE je verkoopt: winkel, online, kanaal." },
            { woord: "promotiebeleid", uitleg: "Beslissingen over RECLAME + communicatie: advertenties, social media, kortingsacties." },
          ],
          theorie: "**Marketingmix (4 P's):**\n\n• **Product** = wat verkoop je? (kwaliteit, variatie)\n• **Prijs** = hoeveel kost het? (premium, korting)\n• **Plaats** = waar verkoop je? (winkel, online)\n• **Promotie** = hoe maak je het bekend? (reclame)\n\nPincode-uitbreiding: Personeel (wie levert het) + Presentatie (uiterlijk).\n\nGlamping = upgrade van het PRODUCT (wat de klant krijgt). Niet de prijs, niet de plaats waar Arjun verkoopt.",
          voorbeelden: [
            { type: "product", tekst: "AH introduceert vegan rookworst → product-aanpassing." },
            { type: "prijs", tekst: "Lidl: alles 10% korting met app → prijsbeleid." },
            { type: "plaats", tekst: "Bol opent 4 fysieke winkels → plaatsbeleid." },
            { type: "promotie", tekst: "Coca-Cola TikTok-campagne → promotiebeleid." },
          ],
          basiskennis: [
            { onderwerp: "Doelgroep", uitleg: "Voor wie is je product bedoeld? Marketing past aan op die groep (campinggasten = gezin met behoefte aan comfort)." },
          ],
          niveaus: {
            basis: "Luxe sanitair + keuken = aanpassing van wat Arjun verkoopt = productbeleid. Antwoord D.",
            simpeler: "De 'plaats' op een camping is het PRODUCT dat Arjun verhuurt. Als hij die luxer maakt, verandert hij wat de klant KRIJGT = product. Productbeleid.",
            nogSimpeler: "Wat de klant krijgt = product = D.",
          },
        },
      },
    ],
  },
  // ─── Vraag 27 — i/a-ratio ──────────────────────────────
  {
    title: "Vraag 27 — i/a-ratio en sociale uitkeringen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 2, vraag 27. Doorklik voor de Pincode-uitleg in **Werk en arbeidsmarkt** (stap 'Sociale zekerheid').",
    emoji: "🎓",
    checks: [
      {
        q: "Als de i/a-ratio stijgt:",
        options: [
          "blijft de betaalbaarheid van de sociale uitkeringen gelijk",
          "neemt de betaalbaarheid van de sociale uitkeringen af",
          "neemt de betaalbaarheid van de sociale uitkeringen toe",
        ],
        answer: 1,
        wrongHints: [
          "Wel verandering — meer ontvangers + minder betalers = wel impact.",
          null,
          "Tegendeel — als er per werkende meer uitkeringen betaald moeten worden, wordt het zwaarder, niet lichter.",
        ],
        explanation: "i/a-ratio stijgt = meer mensen met uitkering t.o.v. werkenden. De werkenden moeten via belasting/premies de uitkeringen betalen — als er minder werkenden per uitkering zijn, wordt het MOEILIJKER om uitkeringen te financieren. Vergrijzing is een grote drijver van een stijgende i/a-ratio.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag 27",
        leerpadLink: { id: "pincode-werk-arbeidsmarkt", title: "Werk en arbeidsmarkt" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'i/a-ratio', 'sociale uitkering', 'premies', 'betaalbaarheid'" },
          { id: "procenten-po", title: "Procenten", niveau: "po-1F", why: "verhouding inactieven/actieven — wat betekent stijging voor lasten per werkende" },
          { id: "pincode-werk-arbeidsmarkt", title: "Werk en arbeidsmarkt", niveau: "vmbo-4", why: "sociale zekerheid + vergrijzing + betaalbaarheid — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is i/a-ratio?", tekst: "Verhouding INACTIEVEN (mensen met uitkering: werkloos, AOW, WIA) tegen ACTIEVEN (werkenden). Bv. 80 inactieven per 100 actieven = i/a 0,80." },
            { titel: "Wat als i/a STIJGT?", tekst: "Meer uitkeringsontvangers per werkende. Werkenden moeten via belasting/premies meer betalen voor minder collega's." },
            { titel: "Wat doet dat met BETAALBAARHEID?", tekst: "Wordt MOEILIJKER om de uitkeringen te financieren. Antwoord B (neemt af)." },
          ],
          woorden: [
            { woord: "i/a-ratio", uitleg: "Inactieven gedeeld door actieven. Maatstaf voor draagkracht van sociale zekerheid." },
            { woord: "inactieven", uitleg: "Mensen met een uitkering: werkloos, arbeidsongeschikt, AOW, bijstand." },
            { woord: "actieven", uitleg: "Mensen die WERKEN en daar inkomen mee verdienen — betalen belasting + premies." },
            { woord: "vergrijzing", uitleg: "Bevolking wordt gemiddeld OUDER → meer AOW-ers per werkende → i/a-ratio stijgt." },
            { woord: "sociale zekerheid", uitleg: "Stelsel van uitkeringen (WW, WIA, AOW, bijstand) gefinancierd door werkenden via premies." },
          ],
          theorie: "**i/a-ratio en sociale zekerheid:**\n\nUitkeringen worden betaald door werkenden via premies (sociale lasten op loon).\n\n• i/a stijgt → minder werkenden per uitkering → ELK lid moet meer betalen → wordt zwaarder\n• i/a daalt → meer werkenden per uitkering → lasten verspreid → blijft betaalbaar\n\n**NL-context (2024):** vergrijzing → veel AOW-ers, minder werkenden → i/a stijgt → druk op AOW-systeem.",
          voorbeelden: [
            { type: "berekening", tekst: "100 actieven moeten 50 inactieven onderhouden (i/a = 0,5). Bij vergrijzing: 100 actieven moeten 80 inactieven onderhouden (i/a = 0,8). Lasten per werkende stijgen 60%." },
          ],
          basiskennis: [
            { onderwerp: "Hoe werken premies?", uitleg: "Op je loon worden 'sociale premies' ingehouden (WW, WIA, AOW). Die geld gaat naar uitkeringen voor anderen." },
          ],
          niveaus: {
            basis: "i/a stijgt → meer ontvangers per werkende → moeilijker betaalbaar. Antwoord B.",
            simpeler: "Stel: 10 werkende neefjes betalen voor 5 oma's. Goed te doen. Dan worden er 8 oma's: nog 10 neefjes maar moeten meer betalen per persoon. Wordt zwaar = MINDER betaalbaar. Antwoord B.",
            nogSimpeler: "Meer ontvangers = zwaardere last per werkende = afnemend = B.",
          },
        },
      },
    ],
  },
  // ─── Vraag 28 — Fairtrade hulp-type ─────────────────────
  {
    title: "Vraag 28 — fairtrade als ontwikkelingshulp",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 2, vraag 28. Doorklik voor de Pincode-uitleg in **Ontwikkelingslanden** (stap 'Eerlijke handel en jouw keuzes als consument').",
    emoji: "🎓",
    checks: [
      {
        q: "De inkoop en verkoop van fairtrade producten is een vorm van particuliere ontwikkelingshulp. Hoe noemen we deze hulp?",
        options: [
          "bilaterale hulp",
          "noodhulp",
          "structurele hulp",
        ],
        answer: 2,
        wrongHints: [
          "Bilateraal = land-tot-land hulp (overheid). Fairtrade is privaat.",
          "Noodhulp = bij rampen (voedsel, medicijnen, snel). Fairtrade is langdurig.",
          null,
        ],
        explanation: "Fairtrade biedt boeren in ontwikkelingslanden een eerlijke prijs voor hun producten — over jaren heen. Dat is structurele hulp: gericht op duurzame verbetering van inkomens. Tegenover noodhulp (acuut, kortlopend) staat structurele hulp (lange termijn, op de oorzaken van armoede gericht).",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag 28",
        leerpadLink: { id: "pincode-ontwikkelingslanden", title: "Ontwikkelingslanden" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'bilateraal', 'noodhulp', 'structurele hulp', 'particulier', 'fairtrade'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "fairtrade = langdurig + via consument — welk label past daarbij" },
          { id: "pincode-ontwikkelingslanden", title: "Ontwikkelingslanden", niveau: "vmbo-4", why: "ontwikkelingshulp-types + eerlijke handel — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is fairtrade?", tekst: "Boeren in ontwikkelingslanden krijgen EERLIJKE PRIJS voor producten (cacao, koffie, bananen) — over jaren heen, niet 1x." },
            { titel: "Welke 3 typen ontwikkelingshulp ken je?", tekst: "(1) Noodhulp = direct bij ramp (eten, medicijnen). (2) Bilaterale hulp = van overheid-tot-overheid (NL → KAM regering). (3) Structurele hulp = LANGDURIG, op oorzaken (onderwijs, eerlijke handel)." },
            { titel: "Welke past bij fairtrade?", tekst: "Fairtrade is langdurig en pakt oorzaken (te lage prijzen voor boeren) aan = STRUCTUREEL." },
          ],
          woorden: [
            { woord: "fairtrade", uitleg: "Keurmerk dat producent in ontwikkelingsland gegarandeerde min-prijs krijgt voor product, plus premie voor lokale projecten." },
            { woord: "particuliere ontwikkelingshulp", uitleg: "Hulp via PRIVATE kanalen: NGO's, consumenten, bedrijven — niet via overheid." },
            { woord: "bilaterale hulp", uitleg: "Hulp van overheid-A naar overheid-B (bv. NL stuurt geld naar Bangladesh-regering)." },
            { woord: "noodhulp", uitleg: "Acute hulp bij ramp/oorlog: voedsel, water, medicijnen, opvang. Kortlopend." },
            { woord: "structurele hulp", uitleg: "Langlopend, op DE OORZAKEN van armoede: onderwijs, infrastructuur, eerlijke handel." },
          ],
          theorie: "**Soorten ontwikkelingshulp:**\n\n| Type | Hoe lang | Wat | Wie |\n|---|---|---|---|\n| Noodhulp | Kort (weken) | Acuut overleven | Rode Kruis, UNICEF |\n| Bilateraal | Mid-lang | Project-financiering | Overheden |\n| Multilateraal | Mid-lang | Via VN/Wereldbank | VN, IMF, WB |\n| Structureel | Lang (jaren) | Eerlijke kansen | NGO's, Fairtrade |\n\nFairtrade past bij STRUCTUREEL — gericht op duurzame inkomensverbetering, niet op acute crises.",
          voorbeelden: [
            { type: "noodhulp", tekst: "Aardbeving Turkije 2023 → Rode Kruis stuurt voedsel + tenten = noodhulp." },
            { type: "structureel", tekst: "Fairtrade-cacaoboer in Ivoorkust krijgt 20% meer per kilo dan marktprijs → kan kinderen naar school sturen → langdurige verbetering." },
          ],
          basiskennis: [
            { onderwerp: "Particulier vs publiek", uitleg: "Particuliere hulp = van privé-personen, bedrijven, NGO's. Publieke = van overheden. Fairtrade = particulier (consumenten kopen)." },
          ],
          niveaus: {
            basis: "Fairtrade = langlopend + pakt oorzaken (lage prijzen) = structureel. Antwoord C.",
            simpeler: "Bij een aardbeving stuurt het Rode Kruis tenten — dat is noodhulp (direct, kort). Fairtrade is anders: je BLIJFT eerlijke prijs betalen — over jaren. Geeft boeren stabiel inkomen. Dat is langdurig = structureel.",
            nogSimpeler: "Fairtrade = lang + helpt structureel = C.",
          },
        },
      },
    ],
  },
  // ─── Vraag 33 — Vermogen familie Boot ───────────────────
  {
    title: "Vraag 33 — vermogen berekenen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2024 tijdvak 2, vraag 33. Doorklik voor de Pincode-uitleg in **Geld, sparen en lenen**.",
    emoji: "🎓",
    checks: [
      {
        q: "De waarde van de bezittingen van de familie Boot bedraagt 100.000 en de waarde van schulden is 20.000. In welke situatie kan het vermogen van dit huishouden stijgen?",
        options: [
          "als de bezittingen dalen met 4% en de schulden stijgen met 4%",
          "als de bezittingen dalen met 4% en de schulden dalen met 6%",
          "als de bezittingen stijgen met 2% en de schulden stijgen met 6%",
        ],
        answer: 2,
        wrongHints: [
          "Bezittingen dalen + schulden stijgen → vermogen daalt zeker.",
          "Reken: -4% van €100k = -€4.000, -6% van €20k = -€1.200. Netto -€2.800. Vermogen DAALT.",
          null,
        ],
        explanation: "Vermogen = bezittingen − schulden = €100.000 − €20.000 = €80.000.\n\nOptie C: bezittingen +2% = +€2.000 (nu €102.000), schulden +6% = +€1.200 (nu €21.200). Nieuw vermogen = €102.000 − €21.200 = €80.800. Toename van €800. ✓\n\nOptie A en B leiden allebei tot een vermogen-DALING.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag 33",
        leerpadLink: { id: "pincode-geld-sparen-lenen", title: "Geld, sparen en lenen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'vermogen', 'bezittingen', 'schulden'" },
          { id: "procenten-po", title: "Procenten", niveau: "po-1F", why: "% van een bedrag berekenen (-4% van €100k, +6% van €20k) en optellen/aftrekken" },
          { id: "pincode-geld-sparen-lenen", title: "Geld, sparen en lenen", niveau: "vmbo-3", why: "vermogen-formule (bezit − schuld) + huishoudfinanciën — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is vermogen?", tekst: "Vermogen = BEZITTINGEN − SCHULDEN. Boot heeft €100k bezittingen + €20k schulden → vermogen €80.000." },
            { titel: "Wanneer STIJGT vermogen?", tekst: "Als bezittingen meer toenemen dan schulden. Of als schulden meer dalen dan bezittingen." },
            { titel: "Reken elke optie uit", tekst: "A: bezit −€4.000, schuld +€800 = vermogen −€4.800 ✗. B: bezit −€4.000, schuld −€1.200 = −€2.800 ✗. C: bezit +€2.000, schuld +€1.200 = +€800 ✓." },
            { titel: "Tip bij %-vragen", tekst: "Reken altijd in EURO's, niet in %. 6% van €20.000 (€1.200) is veel kleiner dan 2% van €100.000 (€2.000)." },
          ],
          woorden: [
            { woord: "vermogen", uitleg: "Bezittingen MIN schulden. Wat je over zou houden als je alles verkoopt en leningen aflost." },
            { woord: "bezittingen", uitleg: "Alles wat je HEBT en in geld kunt omzetten: huis, auto, spaargeld, beleggingen." },
            { woord: "schulden", uitleg: "Alles wat je nog moet TERUGBETALEN: hypotheek, persoonlijke lening, creditcard." },
            { woord: "procent", uitleg: "% = per honderd. 6% van €20.000 = (6/100) × 20.000 = €1.200." },
          ],
          theorie: "**Vermogen-berekening:**\n\nVermogen = Bezittingen − Schulden\n\nBoot start: €100.000 − €20.000 = €80.000\n\n**Wanneer STIJGT vermogen?**\n• Bezittingen ↑ meer dan schulden ↑\n• Bezittingen ↓ minder dan schulden ↓\n• Bezittingen ↑ + schulden ↓\n\n**Bij %-vragen: ALTIJD eurobedragen uitrekenen**, want dezelfde % op verschillende basis = ander €-bedrag.",
          voorbeelden: [
            { type: "rekenvoorbeeld", tekst: "+2% × €100.000 = €2.000. +6% × €20.000 = €1.200. Bezit groeit MEER (€2.000) dan schuld (€1.200) → netto vermogen +€800." },
            { type: "tegengesteld", tekst: "−4% × €100.000 = −€4.000. +4% × €20.000 = +€800. Vermogen −€4.000 − €800 = −€4.800. Vermogen DAALT." },
          ],
          basiskennis: [
            { onderwerp: "% rekenen", uitleg: "Procent = per honderd. X% van Y = (X/100) × Y. Bv. 6% van 20 = 1,20." },
          ],
          niveaus: {
            basis: "Vermogen stijgt als bezittingen méér in € groeien dan schulden. Optie C: +€2.000 vs +€1.200 = +€800. Antwoord C.",
            simpeler: "De truc: zelfde % op verschillende bedragen = ander €-bedrag. 2% van €100.000 = €2.000 (groot bedrag, klein %). 6% van €20.000 = maar €1.200 (klein bedrag, hoog %). Bezit groeit MEER → vermogen stijgt.",
            nogSimpeler: "+2% × 100k > +6% × 20k = vermogen +800 = C.",
          },
        },
      },
    ],
  },
];

const examenEconomie2024T2 = {
  id: "examen-economie-2024-t2",
  title: "Examen oefenen — Economie 2024 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2024-T2",
  intro:
    "6 echte examenvragen uit het VMBO-GL/TL economie-examen 2024 tijdvak 2. Per vraag de echte antwoorden, didactische denkprikkel-hints, inhoudelijke uitleg, en doorklik naar het bijhorende Pincode-leerpad. V4, V32, V43 (volgorde-vragen) en V7, V24 (vereisen grafiek) zijn weggelaten.",
  triggerKeywords: [
    "examen 2024", "examen oefenen", "echte examenvragen", "eindexamen oefenen 2024 tv2",
    "kameroen toerisme", "arjun ondernemingsvorm", "luxe camping marketing",
    "i/a-ratio", "fairtrade structureel", "familie boot vermogen",
  ],
  chapters,
  steps,
};

export default examenEconomie2024T2;
