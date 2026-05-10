// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2025 tijdvak 1
// Pilot 2026-05-09 (Mark wens): echte MC-vragen met informatiebron uit
// bijlage als nette tabellen, officiele uitleg uit correctievoorschrift,
// link naar Pincode-leerpad voor diepe stof.
//
// Specifiek voor klas 4 (eindexamen) — level: vmbo-gt-4.
// Bron: examenblad.nl, examen 0233 GT 2025-1-o/b/c.

// Bron-tekst-helpers (hergebruikt over meerdere vragen)
const bronSintMaarten = {
  titel: "informatiebron 1 — economische gegevens van Sint-Maarten 2010, 2016 en 2017, omgerekend in euro's",
  tableData: {
    headers: ["", "2010", "2016", "2017"],
    rows: [
      ["nationaal inkomen (× miljoen)", "798", "960", "934"],
      ["reële nationaal inkomen (× miljoen)", "746", "840", "798"],
      ["waarde export van goederen en diensten (× miljoen)", "854", "1.046", "835"],
      ["waarde import van goederen en diensten (× miljoen)", "847", "1.014", "921"],
      ["aantal verblijfstoeristen", "443.136", "528.150", "402.092"],
      ["aantal cruisetoeristen (× 1.000)", "1.513", "1.669", "1.238"],
      ["bevolking Sint-Maarten", "34.496", "39.410", "40.535"],
    ],
  },
};

const bronGemeente = {
  titel: "informatiebron 3 — aantal huishoudens en gemiddeld vermogen",
  tableData: {
    headers: ["", "gemeente Rijkwijk", "gemeente Armere"],
    rows: [
      ["aantal huishoudens", "6.433", "174.765"],
      ["gemiddeld vermogen per huishouden", "€ 230.000", "€ 18.000"],
    ],
  },
};

const bronJongerenInkomen = {
  titel: "Bronnen van inkomen voor jongeren",
  body: "Gemiddeld beginnen jongeren op 21-jarige leeftijd met een (volledige) baan.\n\nVoor die tijd hebben jongeren meestal verschillende bronnen van inkomen, zoals:\n• zakgeld van ouders (overdrachtsinkomen)\n• inkomen uit een bijbaan (loon)\n• rente op spaargeld\n• evt. studiefinanciering",
};

const bronDog4fun = {
  titel: "informatiebron 6 — concurrent Dogrunner",
  body: "Wij halen uw hond bij u thuis op met een van onze speciaal ingerichte verwarmde bussen en nemen uw hond mee naar ons eigen ruime en omheinde uitlaatterrein in de duinen. Uw hond kan zo'n twee uur lekker rennen, spelen en dollen met soortgenoten onder deskundig toezicht van twee Wibevo-gecertificeerde hondenbegeleiders.\n\nTarieven abonnement (per hond per week):\n• 3 maal per week: € 29\n• 4 maal per week: € 37\n• 5 maal per week: € 47,50",
};

// Geen verzonnen bronnen — V29 + V37 zijn conceptueel oplosbaar zonder bijlage

const chapters = [
  { letter: "A", title: "Sint-Maarten — economie", emoji: "🏝️", from: 0, to: 2 },
  { letter: "B", title: "De gemeente", emoji: "🏛️", from: 3, to: 4 },
  { letter: "C", title: "Inkomen jongeren", emoji: "💰", from: 5, to: 5 },
  { letter: "D", title: "Dog4fun ondernemen", emoji: "🐕", from: 6, to: 6 },
  { letter: "E", title: "Buitenland", emoji: "🌍", from: 7, to: 7 },
  { letter: "F", title: "Sparen of beleggen", emoji: "💸", from: 8, to: 8 },
];

const steps = [
  // ─── Vraag 1 — Sint-Maarten — handel ────────────────────────
  {
    title: "Vraag 1 — Sint-Maarten — handel",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 1. Lees eerst informatiebron 1 (de tabel). Doorklik na de vraag voor diepere uitleg in het Pincode-leerpad **Nederland en het buitenland**.",
    emoji: "🎓",
    checks: [
      {
        q: "Welke bewering over de export en import van Sint-Maarten is juist?",
        options: [
          "In 2010 was de waarde van de export lager dan de waarde van de import.",
          "In 2016 was de waarde van de export lager dan de waarde van de import.",
          "In 2017 was de waarde van de export lager dan de waarde van de import.",
          "In alle jaren was de waarde van de export lager dan de waarde van de import.",
        ],
        answer: 2,
        wrongHints: [
          "Vergelijk export 854 met import 847 in 2010 — wie is hoger?",
          "Vergelijk export 1.046 met import 1.014 in 2016.",
          null,
          "Klopt niet voor 2010 en 2016 — daar was export juist hoger.",
        ],
        explanation: "In 2017 is de waarde van de export (835 mln) lager dan de waarde van de import (921 mln). In 2010 en 2016 was het omgekeerd: export was hoger dan import.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 1",
        bronTekst: bronSintMaarten,
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
        uitlegPad: {
          stappen: [
            { titel: "Wat moet je vergelijken?", tekst: "In de tabel: 'waarde export' vs 'waarde import' per jaar (2010, 2016, 2017)." },
            { titel: "Reken per jaar", tekst: "2010: export 854 vs import 847 → export HOGER. 2016: 1.046 vs 1.014 → export HOGER. 2017: 835 vs 921 → import HOGER." },
            { titel: "Welke optie past?", tekst: "Optie C zegt 'in 2017 export lager dan import' = correct ✓. Andere opties spreken de tabel tegen." },
          ],
          woorden: [
            { woord: "export", uitleg: "Goederen + diensten die een land VERKOOPT aan buitenland → geld komt binnen." },
            { woord: "import", uitleg: "Goederen + diensten die een land KOOPT in buitenland → geld gaat eruit." },
            { woord: "handelsbalans", uitleg: "Verschil export − import. Positief = overschot, negatief = tekort." },
            { woord: "miljoen (mln)", uitleg: "1.000.000. In de tabel: 854 = €854 miljoen." },
          ],
          theorie: "**Hoe lees je een jaar-vergelijkings-tabel?**\n\n1. Vind kolommen voor de jaren\n2. Vind rij voor de gevraagde data (export, import)\n3. Lees waarde per jaar\n4. Vergelijk per jaar (export vs import)\n\nIn dit examen: 2017 was een tegenvaller voor Sint-Maarten (Irma-orkaan trof eilanden 2017) → minder toerisme → minder export.",
          voorbeelden: [
            { type: "berekening", tekst: "2010: export 854 − import 847 = +7 (overschot). 2017: export 835 − import 921 = −86 (tekort)." },
          ],
          basiskennis: [
            { onderwerp: "Tabel-lezen", uitleg: "Bovenste rij = kolom-koppen (jaren). Linker kolom = rij-titels. Snijpunt = de waarde." },
          ],
          niveaus: {
            basis: "2017: export 835 < import 921 → C.",
            simpeler: "Vergelijk in elk jaar export en import. 2017 is het enige jaar waar import hoger was — daar valt Sint-Maarten in een tekort.",
            nogSimpeler: "Alleen 2017: export < import = C.",
          },
        },
      },
    ],
  },
  // ─── Vraag 2 — Sint-Maarten — welvaart ──────────────────────
  {
    title: "Vraag 2 — reëel nationaal inkomen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 2. Doorklik na de vraag voor diepere uitleg in het Pincode-leerpad **Inkomen en welvaart**.",
    emoji: "🎓",
    checks: [
      {
        q: "De welvaart van een land kan worden gemeten door het nationaal inkomen te berekenen. Waarmee moet je rekening houden als je het reële nationale inkomen berekent?",
        options: [
          "de belastingen",
          "de inkomensverdeling",
          "de veranderde prijzen",
          "zelfvoorziening",
        ],
        answer: 2,
        wrongHints: [
          "Belasting beïnvloedt netto inkomen, niet de 'reële' meting.",
          "Inkomensverdeling = Lorenz/Gini, andere maat.",
          null,
          "Zelfvoorziening = nauwelijks voor moderne economie relevant.",
        ],
        explanation: "Reëel nationaal inkomen = nominaal inkomen gecorrigeerd voor inflatie (de veranderde prijzen). Zo zie je hoeveel je écht kunt kopen — niet enkel hoeveel euro het is.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 2",
        bronTekst: bronSintMaarten,
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
        uitlegPad: {
          stappen: [
            { titel: "Wat is reëel inkomen?", tekst: "Inkomen GECORRIGEERD voor inflatie. Vertelt je niet hoeveel euro, maar wat dat geld waard is qua koopkracht." },
            { titel: "Wat moet je dus aftrekken?", tekst: "De prijsstijging — dus 'de veranderde prijzen' (= inflatie)." },
            { titel: "Andere opties?", tekst: "Belasting (over netto), inkomensverdeling (Lorenz/Gini) en zelfvoorziening hebben niets te maken met reëel vs nominaal." },
          ],
          woorden: [
            { woord: "nominaal inkomen", uitleg: "Inkomen in EURO'S. Wat je op je rekening krijgt." },
            { woord: "reëel inkomen", uitleg: "Nominaal inkomen MIN inflatie. Vertelt wat je echt kan kopen — = koopkracht." },
            { woord: "inflatie", uitleg: "Gemiddelde prijsstijging per jaar. CPI = consumentenprijsindex." },
            { woord: "nationaal inkomen", uitleg: "Totale verdiende inkomen van alle inwoners + bedrijven van een land per jaar." },
          ],
          theorie: "**Reëel = nominaal − inflatie**\n\nVoorbeeld:\n• Nominaal inkomen vorig jaar: €40.000\n• Nominaal inkomen dit jaar: €42.000 (+5%)\n• Inflatie: 4%\n• Reëel: ~+1% (groei)\n\nWil je INTERnationaal of over jaren vergelijken? Gebruik REËEL — anders worden cijfers door inflatie misleidend.",
          voorbeelden: [
            { type: "Sint-Maarten", tekst: "Nominaal inkomen 2010: 798 mln. 2017: 934 mln. Lijkt groei. Maar reëel: 746 → 798 mln. Veel kleinere groei dan nominaal suggereert." },
          ],
          basiskennis: [
            { onderwerp: "Indexcijfers", uitleg: "Manier om verandering in % uit te drukken. CPI = 100 in basisjaar; CPI = 105 = 5% prijsstijging." },
          ],
          niveaus: {
            basis: "Reëel = gecorrigeerd voor PRIJZEN (inflatie). Antwoord C.",
            simpeler: "Stel: jij verdiende €1.000, nu €1.050 (+5%). Maar boodschappen zijn 4% duurder. Reëel: je hebt 1% méér koopkracht. We trekken 'veranderde prijzen' eraf om reëel te krijgen.",
            nogSimpeler: "Reëel = nominaal − inflatie = veranderde prijzen = C.",
          },
        },
      },
    ],
  },
  // ─── Vraag 4 — Sint-Maarten — toerisme ──────────────────────
  {
    title: "Vraag 4 — uitgaven van toeristen",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 4. Doorklik na de vraag voor diepere uitleg in het Pincode-leerpad **Nederland en het buitenland**.",
    emoji: "🎓",
    checks: [
      {
        q: "Waartoe behoren de uitgaven van de toeristen, die een souvenir kopen op Sint-Maarten?",
        options: [
          "Tot de export van diensten door Sint-Maarten.",
          "Tot de export van goederen door Sint-Maarten.",
          "Tot de import van diensten door Sint-Maarten.",
          "Tot de import van goederen door Sint-Maarten.",
        ],
        answer: 1,
        wrongHints: [
          "Souvenir is een tastbaar product, geen dienst.",
          null,
          "Sint-Maarten verkoopt — niet importeert.",
          "Souvenir is wel goed, maar export ipv import (verkocht aan buitenlandse toerist).",
        ],
        explanation: "Een souvenir is een goed (tastbaar). Een buitenlandse toerist die het op Sint-Maarten koopt, betaalt aan een Sint-Maartens bedrijf — dat heet export van goederen door Sint-Maarten.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 4",
        bronTekst: bronSintMaarten,
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
        uitlegPad: {
          stappen: [
            { titel: "Wie KOOPT?", tekst: "De toerist (buitenlander) — geld komt vanuit het buitenland." },
            { titel: "Waar wordt gekocht?", tekst: "Op Sint-Maarten — bij een lokaal bedrijf." },
            { titel: "Goed of dienst?", tekst: "Een SOUVENIR = tastbaar voorwerp = goed. Niet een dienst (=ervaring)." },
            { titel: "Export of import voor Sint-Maarten?", tekst: "Geld komt SX BINNEN → EXPORT van goederen DOOR Sint-Maarten. Antwoord B." },
          ],
          woorden: [
            { woord: "goed", uitleg: "Tastbaar voorwerp dat je vast kunt pakken: souvenir, kleding, eten." },
            { woord: "dienst", uitleg: "Niet-tastbaar: hotelovernachting, kapper, vervoer, advies." },
            { woord: "export van goederen", uitleg: "Een land verkoopt voorwerpen aan buitenlandse kopers. Hier: SX-bedrijf verkoopt souvenir aan NL-toerist." },
            { woord: "export van diensten", uitleg: "Een land verkoopt diensten (toerisme, transport) aan buitenland. Bv. NL-toerist die in een SX-hotel slaapt." },
          ],
          theorie: "**Vier combinaties: export/import × goed/dienst:**\n\n• Toerist koopt souvenir = export van GOED door SX\n• Toerist boekt hotel = export van DIENST door SX\n• SX-bedrijf koopt cement uit NL = import van GOED door SX\n• SX-bedrijf huurt NL-consultant = import van DIENST door SX\n\nKijk altijd: 1) wie KOOPT (buitenlander = export voor verkoopland), 2) tastbaar of niet (goed/dienst).",
          voorbeelden: [
            { type: "souvenir", tekst: "NL-toerist Lisa koopt SX-mok (€8). SX-bedrijf krijgt €8 van NL-geld. Voor SX = export van goederen." },
            { type: "hotelovernachting", tekst: "Lisa slaapt 5 nachten in SX-hotel (€500). Voor SX = export van DIENSTEN." },
          ],
          basiskennis: [
            { onderwerp: "Vanuit wiens kant?", uitleg: "Bij export/import-vragen: bedenk altijd OF je vanuit het verkoopland of koopland kijkt. De vraag specificeert vaak 'door land X'." },
          ],
          niveaus: {
            basis: "Souvenir = goed. Toerist koopt in SX = SX verkoopt = export goed door SX. Antwoord B.",
            simpeler: "Een souvenir kun je vasthouden (= goed, niet dienst). De toerist KOOPT van een SX-winkel → SX VERKOOPT aan buitenland → dat heet export. Dus: export van goederen.",
            nogSimpeler: "Souvenir = goed + verkocht aan buitenlander = export goed = B.",
          },
        },
      },
    ],
  },
  // ─── Vraag 8 — Gemeente — taken ─────────────────────────────
  {
    title: "Vraag 8 — taken van de gemeente",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 8. Doorklik voor de Pincode-uitleg in **De overheid**.",
    emoji: "🎓",
    checks: [
      {
        q: "Welke overheidstaken voert de gemeente uit?",
        options: [
          "Het onderhoud aan dijken, kanalen en waterwegen.",
          "Het uitgeven van een paspoort, identiteitskaart en rijbewijs.",
          "Het verstrekken van huur- en zorgtoeslag.",
          "Het verstrekken van uitkeringen, zoals de AOW.",
        ],
        answer: 1,
        wrongHints: [
          "Dat doet het waterschap.",
          null,
          "Toeslagen worden door de Belastingdienst verstrekt.",
          "AOW is een Rijkstaak (uitvoering: SVB).",
        ],
        explanation: "De gemeente verzorgt o.a. paspoorten, ID-kaarten en rijbewijzen — dat zijn lokale burger­zaken. Dijken = waterschap, toeslagen = Belastingdienst, AOW = SVB/Rijksoverheid.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 8",
        leerpadLink: { id: "pincode-overheid", title: "De overheid" },
        uitlegPad: {
          stappen: [
            { titel: "Welke overheidslagen zijn er?", tekst: "Rijk (Den Haag), provincie, gemeente, waterschap. Elke laag heeft eigen taken." },
            { titel: "Wat doet de gemeente?", tekst: "Lokale burgerzaken: paspoorten, ID-kaarten, rijbewijzen, vergunningen, OZB innen, vuilnisophalen, jeugdzorg." },
            { titel: "Loop opties langs", tekst: "Dijken = waterschap ✗. Paspoort/ID/rijbewijs = gemeente ✓. Toeslagen = Belastingdienst (Rijk) ✗. AOW = SVB (Rijk) ✗." },
          ],
          woorden: [
            { woord: "Rijksoverheid", uitleg: "Centrale overheid in Den Haag. Doet AOW, defensie, onderwijs (deels), belastingen." },
            { woord: "gemeente", uitleg: "Lokale overheid (~340 in NL). Doet paspoorten, ID, rijbewijzen, jeugdzorg, OZB, vuilnis." },
            { woord: "waterschap", uitleg: "Speciale overheid voor water (~21 in NL). Dijken, sluizen, kanalen, waterkwaliteit." },
            { woord: "SVB", uitleg: "Sociale Verzekeringsbank — voert AOW + kinderbijslag uit namens het Rijk." },
            { woord: "Belastingdienst", uitleg: "Rijksdienst die belastingen + toeslagen (huur-, zorg-, kinderopvang-) regelt." },
          ],
          theorie: "**Wie doet wat?**\n\n| Taak | Wie? |\n|---|---|\n| Paspoort, ID, rijbewijs | gemeente |\n| OZB, vuilnis, jeugdzorg | gemeente |\n| Dijken, sluizen | waterschap |\n| AOW, kinderbijslag | SVB (Rijk) |\n| Toeslagen | Belastingdienst (Rijk) |\n| Defensie, justitie | Rijk |\n| Onderwijs (deels) | Rijk + gemeente |\n\nGemeente = lokaal, dichtbij burger. Rijk = landelijk.",
          voorbeelden: [
            { type: "gemeente", tekst: "Je gaat 18 worden → paspoort vernieuwen → naar het GEMEENTEHUIS." },
            { type: "rijk", tekst: "Je opa wordt 67 → krijgt AOW van de SVB (Rijksdienst), niet van de gemeente." },
          ],
          basiskennis: [
            { onderwerp: "Decentralisatie", uitleg: "Sinds 2015 doen gemeenten meer (jeugdzorg, WMO) — bedoeld om zorg dichter bij burger te brengen." },
          ],
          niveaus: {
            basis: "Paspoort/ID/rijbewijs = burgerzaken = gemeente. Antwoord B.",
            simpeler: "Waar haal jij je paspoort? Niet bij de premier in Den Haag, niet bij het waterschap — bij het GEMEENTEHUIS in jouw woonplaats. Dat is gemeentelijke taak.",
            nogSimpeler: "Paspoort = gemeente = B.",
          },
        },
      },
    ],
  },
  // ─── Vraag 9 — Gemeente — belasting ─────────────────────────
  {
    title: "Vraag 9 — gemeentelijke belasting",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 9. Doorklik voor de Pincode-uitleg in **De overheid**.",
    emoji: "🎓",
    checks: [
      {
        q: "Een gemeente ontvangt inkomsten vanuit de gemeentelijke belastingen en gemeentelijke heffingen. Welke belasting betalen de inwoners aan de gemeente?",
        options: [
          "accijns",
          "motorrijtuigenbelasting",
          "onroerendezaakbelasting",
          "vennootschapsbelasting",
        ],
        answer: 2,
        wrongHints: [
          "Accijns wordt geheven door de Rijksoverheid (op brandstof, alcohol, tabak).",
          "Motorrijtuigenbelasting gaat naar de Rijksoverheid (en provincie via opcenten).",
          null,
          "VPB is een Rijksbelasting voor BV's en NV's.",
        ],
        explanation: "OZB (onroerendezaakbelasting) is de belangrijkste gemeentelijke belasting voor inwoners. Het wordt geheven over het bezit van een woning of bedrijfspand binnen de gemeente.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 9",
        leerpadLink: { id: "pincode-overheid", title: "De overheid" },
        uitlegPad: {
          stappen: [
            { titel: "Welke 4 belastingen worden opgegeven?", tekst: "Accijns, motorrijtuigenbelasting, OZB, vennootschapsbelasting. Welke zijn voor de GEMEENTE?" },
            { titel: "Loop ze langs", tekst: "Accijns (alcohol/brandstof) = Rijk ✗. Motorrijtuigenbelasting = Rijk + provincie ✗. OZB = gemeente ✓. VPB (BV winst) = Rijk ✗." },
            { titel: "Waarom OZB?", tekst: "OZB = belasting op huis/pand-EIGENDOM in de gemeente. Heffing en inning gebeurt door GEMEENTE." },
          ],
          woorden: [
            { woord: "OZB", uitleg: "Onroerendezaakbelasting — gemeentelijke belasting voor eigenaren van een woning of bedrijfspand. Berekend op WOZ-waarde." },
            { woord: "accijns", uitleg: "Rijksbelasting op alcohol, tabak, brandstof, frisdrank. Geheven om consumptie te ontmoedigen + extra inkomsten Rijk." },
            { woord: "motorrijtuigenbelasting", uitleg: "Rijksbelasting (+ provinciale opcenten) voor het BEZIT van een auto/motor." },
            { woord: "vennootschapsbelasting", uitleg: "Rijksbelasting voor BV's en NV's over hun winst." },
          ],
          theorie: "**Wie heft welke belasting?**\n\n| Belasting | Wie heft |\n|---|---|\n| OZB | gemeente |\n| Afvalstoffenheffing | gemeente |\n| Hondenbelasting | gemeente |\n| Toeristenbelasting | gemeente |\n| BTW | Rijk |\n| Inkomstenbelasting | Rijk |\n| Loonheffing | Rijk |\n| VPB | Rijk |\n| Accijns | Rijk |\n| Motorrijtuigenbelasting | Rijk + provincie |\n\nGemeentebelastingen zijn relatief klein in totaal — meeste belastinggeld stroomt naar het Rijk.",
          voorbeelden: [
            { type: "gemeente", tekst: "Familie heeft huis WOZ €350.000. OZB ~0,1% = €350/jaar. Wordt op gemeentelijke aanslag bij vuilnis + rioolheffing opgeteld." },
          ],
          basiskennis: [
            { onderwerp: "WOZ-waarde", uitleg: "Geschatte marktwaarde van je huis door de gemeente. Basis voor OZB en eigenwoningforfait IB." },
          ],
          niveaus: {
            basis: "OZB = gemeente. Antwoord C.",
            simpeler: "OZB betekent letterlijk 'Onroerendezaakbelasting' — belasting op je huis. Die wordt door de GEMEENTE geheven (zij innen het, gebruiken het voor lokale voorzieningen). De andere drie zijn allemaal Rijksbelastingen.",
            nogSimpeler: "OZB = gemeente = C.",
          },
        },
      },
    ],
  },
  // ─── Vraag 14 — Inkomen jongeren ────────────────────────────
  {
    title: "Vraag 14 — overdrachtsinkomen jongeren",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 14. Doorklik voor de Pincode-uitleg in **Inkomen en welvaart**.",
    emoji: "🎓",
    checks: [
      {
        q: "Gemiddeld beginnen jongeren op 21-jarige leeftijd met een (volledige) baan. Voor die tijd hebben jongeren meestal verschillende bronnen van inkomen, zoals een overdrachtsinkomen. Wat is een voorbeeld van een overdrachtsinkomen?",
        options: [
          "loon",
          "rente",
          "winst",
          "zakgeld",
        ],
        answer: 3,
        wrongHints: [
          "Loon = primair inkomen (uit arbeid).",
          "Rente = primair inkomen (uit kapitaal).",
          "Winst = primair inkomen (uit ondernemerschap).",
          null,
        ],
        explanation: "Zakgeld is een overdrachtsinkomen: je krijgt het ZONDER er een productiefactor (arbeid/kapitaal/etc.) tegenover te zetten. Loon, rente en winst zijn primaire inkomens (verdiend met een productiefactor).",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 14",
        bronTekst: bronJongerenInkomen,
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
        uitlegPad: {
          stappen: [
            { titel: "Wat is een overdrachtsinkomen?", tekst: "Geld dat je krijgt ZONDER er een productiefactor (arbeid, kapitaal, natuur, ondernemerschap) tegenover te zetten. Vaak van overheid of familie." },
            { titel: "Wat is GEEN overdrachtsinkomen?", tekst: "Loon (= arbeid). Rente (= kapitaal/spaargeld). Winst (= ondernemerschap). Allemaal primair inkomen." },
            { titel: "Welke optie past?", tekst: "Zakgeld krijg je van ouders zonder productiefactor → overdrachtsinkomen. Antwoord D." },
          ],
          woorden: [
            { woord: "primair inkomen", uitleg: "Inkomen dat je verdient MET een productiefactor: loon (arbeid), rente (kapitaal), huur (natuur), winst (ondernemerschap)." },
            { woord: "overdrachtsinkomen", uitleg: "Inkomen ZONDER tegenprestatie: kinderbijslag, AOW, bijstand, zakgeld, subsidie." },
            { woord: "zakgeld", uitleg: "Geld dat ouders aan kinderen geven zonder dat kind ervoor werkt. = overdracht." },
            { woord: "productiefactor", uitleg: "Iets dat je inzet om te produceren: arbeid, kapitaal, natuur, ondernemerschap." },
          ],
          theorie: "**Inkomenssoorten:**\n\n• **Primair** (= verdiend met productiefactor): loon, rente, huur, winst, dividend\n• **Secundair / overdrachten** (= ZONDER tegenprestatie): bijstand, AOW, kinderbijslag, zorgtoeslag, zakgeld\n\nVoor jongeren komt het inkomen vaak gemixt: bijbaan-loon (primair) + zakgeld van ouders (overdracht) + studiefinanciering (overdracht).",
          voorbeelden: [
            { type: "primair", tekst: "Bijbaan AH = loon = primair (uit arbeid)." },
            { type: "overdracht", tekst: "Zakgeld €15/week van ouders = overdrachtsinkomen." },
            { type: "overdracht", tekst: "Zorgtoeslag voor 18+ student = overdrachtsinkomen (van overheid)." },
          ],
          basiskennis: [
            { onderwerp: "Loon vs zakgeld", uitleg: "Loon krijg je voor WERK. Zakgeld krijg je gewoon, zonder dat je iets terug levert. Daarom is loon primair en zakgeld overdracht." },
          ],
          niveaus: {
            basis: "Zakgeld = krijg je zonder tegenprestatie = overdrachtsinkomen. Antwoord D.",
            simpeler: "Vraag jezelf bij elke optie: 'lever ik er iets voor?' Loon = ja (werk). Rente = ja (geld op de bank). Winst = ja (ondernemerschap). Zakgeld = nee, krijg je gewoon. Dat 'gewoon krijgen' = overdrachtsinkomen.",
            nogSimpeler: "Niets gedaan + krijg geld = overdracht = zakgeld = D.",
          },
        },
      },
    ],
  },
  // ─── Vraag 17 — Dog4fun rechtsvorm ──────────────────────────
  {
    title: "Vraag 17 — ondernemingsvorm Dog4fun",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 17. Doorklik voor de Pincode-uitleg in **Ondernemen**.",
    emoji: "🎓",
    checks: [
      {
        q: "De leerlingen van de klas doen allemaal mee. Ze zijn allen privé aansprakelijk voor de eventuele schulden van Dog4fun. Welke ondernemingsvorm heeft Dog4fun?",
        options: [
          "besloten vennootschap (bv)",
          "eenmanszaak",
          "naamloze vennootschap (nv)",
          "vennootschap onder firma (vof)",
        ],
        answer: 3,
        wrongHints: [
          "BV = juist NIET privé aansprakelijk (eigenaars beschermd).",
          "Eenmanszaak = 1 eigenaar, hier zijn meerdere leerlingen vennoten.",
          "NV = juist NIET privé aansprakelijk + grote organisatie.",
          null,
        ],
        explanation: "Bij een VOF (vennootschap onder firma) zijn meerdere personen samen ondernemer EN allen privé aansprakelijk voor de schulden. Past precies bij 'klas met allen privé aansprakelijk'.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 17",
        bronTekst: bronDog4fun,
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
        uitlegPad: {
          stappen: [
            { titel: "Hoeveel eigenaren?", tekst: "ALLE leerlingen van de klas = meerdere personen. Dus geen eenmanszaak (= 1 persoon)." },
            { titel: "Hoofdelijk aansprakelijk?", tekst: "Allen PRIVÉ aansprakelijk = ja, hoofdelijk. Dus geen BV of NV (= rechtspersoon, juist NIET privé aansprakelijk)." },
            { titel: "Welke ondernemingsvorm dan?", tekst: "Meerdere eigenaren + allen privé aansprakelijk = VOF (vennootschap onder firma). Antwoord D." },
          ],
          woorden: [
            { woord: "VOF", uitleg: "Vennootschap onder firma — 2+ personen samen ondernemen, allen hoofdelijk aansprakelijk." },
            { woord: "BV", uitleg: "Besloten Vennootschap — rechtspersoon. Eigenaars NIET privé aansprakelijk." },
            { woord: "NV", uitleg: "Naamloze Vennootschap — grote rechtspersoon, aandelen vrij verhandelbaar (op beurs). Eigenaars NIET privé aansprakelijk." },
            { woord: "eenmanszaak", uitleg: "1 eigenaar, privé aansprakelijk." },
            { woord: "hoofdelijk aansprakelijk", uitleg: "Met je PRIVÉ-vermogen verantwoordelijk voor schulden. Bij VOF: ook voor schulden van de ander!" },
          ],
          theorie: "**Beslisboom ondernemingsvorm:**\n\n1. Hoeveel eigenaren? → 1 = eenmanszaak / 2+ = vennootschap\n2. Privé aansprakelijk? → ja = VOF (of eenmanszaak) / nee = BV / NV (rechtspersoon)\n\n| | 1 persoon | 2+ personen |\n|---|---|---|\n| Privé aansprakelijk | eenmanszaak | VOF |\n| Beschermd | BV (eigen) | BV / NV |\n\nDog4fun = klas (veel mensen) + allen privé = VOF.",
          voorbeelden: [
            { type: "VOF", tekst: "2 vriendinnen openen samen een kapsalon zonder BV op te richten = VOF. Allebei privé aansprakelijk." },
            { type: "VOF in les", tekst: "Klas richt mini-onderneming op voor schoolproject. Geen formele BV. = VOF (of vergelijkbaar)." },
          ],
          basiskennis: [
            { onderwerp: "Rechtspersoon", uitleg: "BV/NV is juridisch een aparte 'persoon'. Heeft eigen vermogen, kan failliet gaan zonder eigenaar mee te trekken." },
          ],
          niveaus: {
            basis: "Meerdere personen + allen privé aansprakelijk = VOF. Antwoord D.",
            simpeler: "De klas is GEEN BV opgericht (= geen rechtspersoon). Met meerdere mensen samen ondernemen + privé aansprakelijk → VOF.",
            nogSimpeler: "Veel + privé = VOF = D.",
          },
        },
      },
    ],
  },
  // ─── Vraag 29 — Handelsoverschot ────────────────────────────
  {
    title: "Vraag 29 — handelsoverschot agrarisch",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 29. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland**.",
    emoji: "🎓",
    checks: [
      {
        q: "De import van agrarische producten is procentueel sterker gegroeid dan de export. Toch is het Nederlandse handelsoverschot van de handel toegenomen. Wat kan daarvan de reden zijn?",
        options: [
          "Het prijspeil van de export is minder gestegen dan het prijspeil van de import.",
          "Het prijspeil van de export is meer gestegen dan het prijspeil van de import.",
          "De geëxporteerde hoeveelheid is minder gestegen dan de geïmporteerde hoeveelheid.",
        ],
        answer: 1,
        wrongHints: [
          "Tegendeel: dan zou overschot juist kleiner worden.",
          null,
          "Klopt al uit de vraag (import procentueel sterker), maar verklaart niet waarom overschot toch toeneemt.",
          "Tegendeel uit de vraag.",
        ],
        explanation: "Hoewel het AANTAL geïmporteerd sterker stijgt, is de WAARDE van de export hoger geworden door hogere exportprijzen. Resultaat: overschot in geld neemt toe, ondanks dat het volume-saldo wijzigt.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 29",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
        uitlegPad: {
          stappen: [
            { titel: "Wat zijn 2 dingen aan handelsoverschot?", tekst: "AANTAL (volume = hoeveelheid) en PRIJS. WAARDE = aantal × prijs. Het 'overschot in geld' kijkt naar WAARDE." },
            { titel: "Wat zegt de vraag?", tekst: "Import is procentueel STERKER gegroeid in volume. Toch werd het overschot GROTER. Hoe kan dat?" },
            { titel: "Conclusie", tekst: "Alleen mogelijk als de PRIJS van export harder is gestegen dan prijs van import. Dan compenseert hogere prijs het lagere volume → overschot in geld groeit." },
          ],
          woorden: [
            { woord: "handelsoverschot", uitleg: "Verschil export − import in WAARDE (€). Positief = exporteer meer dan importeer." },
            { woord: "prijspeil", uitleg: "Gemiddelde prijs in een sector/categorie. Stijgt = inflatie." },
            { woord: "volume", uitleg: "AANTAL of hoeveelheid (kilo's, stuks). Niet de waarde." },
            { woord: "waarde", uitleg: "Volume × prijs. Wat het in EURO's opbrengt of kost." },
          ],
          theorie: "**Waarde = volume × prijs**\n\nAls je waarde wilt verklaren, kijk naar:\n• Volume-verandering (aantal eenheden)\n• Prijs-verandering (€ per eenheid)\n\n**Hier:**\n• Import-volume groeit harder dan export-volume → in volume gaat NL achteruit\n• Maar overschot in WAARDE groeit → de prijzen moeten dat compenseren\n• Dus: export-prijs is harder gestegen dan import-prijs (NL exporteert duurdere producten)",
          voorbeelden: [
            { type: "rekenvoorbeeld", tekst: "Export volume +5%, prijs +20% → waarde +26%. Import volume +10%, prijs +5% → waarde +15,5%. Waarde-overschot stijgt ondanks dat import volume harder groeit." },
          ],
          basiskennis: [
            { onderwerp: "Verschil volume en waarde", uitleg: "Volume = aantal stuks. Waarde = aantal × prijs. Bij prijsstijging blijft volume gelijk maar groeit waarde." },
          ],
          niveaus: {
            basis: "Overschot in € groeit ondanks meer import-volume → exportprijs moet harder zijn gestegen dan importprijs. Antwoord B.",
            simpeler: "Stel: NL verkoopt 10 ton bloemen voor €100/kg = €1.000.000. Dit jaar 8 ton voor €200/kg = €1.600.000. Volume DAALT maar waarde STIJGT door prijs. Hetzelfde principe hier: prijs export ↑ harder dan prijs import → waarde-overschot ↑.",
            nogSimpeler: "Volume export laag, waarde stijgt → exportprijs ↑ meer = B.",
          },
        },
      },
    ],
  },
  // ─── Vraag 32 GESKIPT: was volgorde-vraag (1-2-3 in juiste volgorde, 6 opties A-F),
  // niet een 4-MC vraag. Parser pakte het verkeerd. Voor zuivelboeren-onderwerp
  // verwijst leerling naar Pincode 'Ondernemen' stap 'Vraag en aanbod'.
  // ─── Vraag 37 — Sparen of beleggen ──────────────────────────
  {
    title: "Vraag 37 — investeren in warmtepomp",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag 37. Doorklik voor de Pincode-uitleg in **Geld, sparen en lenen** (stap 'Sparen of beleggen').",
    emoji: "🎓",
    checks: [
      {
        q: "Germaine: \"Tegenwoordig levert sparen weinig op en is geld lenen goedkoop. Spaarders kunnen beter het geld investeren in een warmtepomp, dat levert op termijn meer op.\" Wat is een juiste samenvatting van Germaines bewering?",
        options: [
          "De besparing op energiekosten is hoger dan de te ontvangen rente.",
          "De besparing op energiekosten is lager dan de te ontvangen rente.",
          "Geld lenen is goedkoper dan de investering in een warmtepomp.",
          "Geld lenen is duurder dan de investering in een warmtepomp.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Tegendeel — als besparing lager was dan rente, zou sparen juist beter zijn.",
          "Germaine zegt iets over het terugverdienen via energie-besparing, niet vergelijking lening vs warmtepomp-prijs.",
          "Idem als C — niet de kern van Germaine's redenering.",
        ],
        explanation: "Germaine's redenering: spaarrente is laag → een investering die jaarlijks méér bespaart dan die rente, levert per saldo meer op. Antwoord A vat dat precies samen: besparing energie > rente op spaargeld.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 37",
        leerpadLink: { id: "pincode-geld-sparen-lenen", title: "Geld, sparen en lenen" },
        uitlegPad: {
          stappen: [
            { titel: "Wat zegt Germaine?", tekst: "1. Spaarrente is laag. 2. Investeer geld in warmtepomp. 3. Dat levert meer op." },
            { titel: "Hoe levert een warmtepomp 'op'?", tekst: "Door BESPARING op energiekosten elk jaar. Geen rente, maar minder uitgaven." },
            { titel: "Wat is dus de samenvatting?", tekst: "BESPARING op energie > rente op spaargeld → warmtepomp is beter dan sparen. Antwoord A." },
          ],
          woorden: [
            { woord: "spaarrente", uitleg: "Vergoeding die de bank betaalt over je spaargeld. In 2024-2025 erg laag (0-2%)." },
            { woord: "investeren", uitleg: "Geld vastleggen in iets dat later opbrengst geeft (huis, machine, warmtepomp, aandelen)." },
            { woord: "warmtepomp", uitleg: "Apparaat dat warmte uit lucht/grond haalt voor verwarming. Vervangt CV-ketel. Bespaart energiekosten." },
            { woord: "rendement", uitleg: "Wat een investering OPLEVERT in % per jaar. Sparen: rente. Warmtepomp: besparing op energie." },
          ],
          theorie: "**Sparen vs investeren — vergelijken op rendement:**\n\nSpaarrente = 1% → €10.000 sparen geeft €100/jaar\n\nWarmtepomp = €10.000 → bespaart €1.500/jaar op gas\n→ rendement 15% — VEEL beter dan sparen\n\nVuistregel: investering loont als opbrengst (besparing of inkomsten) > rente die je anders zou krijgen.",
          voorbeelden: [
            { type: "rendement", tekst: "€20.000 op spaarrekening 2% = €400/jaar. €20.000 in zonnepanelen die €1.200/jaar besparen = 6% effectief rendement → veel beter." },
          ],
          basiskennis: [
            { onderwerp: "Tijdsvoorkeur", uitleg: "Geld nu vs later. Investeringen vragen geld nu maar leveren later structureel op. Als opbrengst > rente, loont het." },
          ],
          niveaus: {
            basis: "Germaine zegt: warmtepomp-besparing > spaarrente → investeren loont. Antwoord A.",
            simpeler: "Germaine vergelijkt 2 opties: 1) sparen (krijg je rente, weinig). 2) warmtepomp kopen (bespaar je energiekosten, veel). Optie 2 is beter omdat besparing > rente. Antwoord A.",
            nogSimpeler: "Energie-besparing > rente = warmtepomp wint = A.",
          },
        },
      },
    ],
  },
];

const examenEconomie2025T1 = {
  id: "examen-economie-2025-t1",
  title: "Examen oefenen — Economie 2025 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2025-T1",
  intro:
    "10 echte examenvragen uit het VMBO-GL/TL economie-examen 2025 tijdvak 1. Per vraag krijg je de informatiebron uit de bijlage als nette tabel of tekst, de 4 antwoorden uit het examen, en daarna de '📖 Leg uit'-knop voor de officiële uitleg uit het correctievoorschrift. V12 + V19 zijn weggelaten omdat die een grafiek/tabel-afbeelding nodig hebben.",
  triggerKeywords: [
    "examen 2025", "examen oefenen", "echte examenvragen", "eindexamen oefenen",
    "informatiebron", "sint-maarten", "dog4fun", "rijkwijk", "armere",
    "warmtepomp", "melkrobot", "zuivelboer", "handelsoverschot",
  ],
  chapters,
  steps,
};

export default examenEconomie2025T1;
