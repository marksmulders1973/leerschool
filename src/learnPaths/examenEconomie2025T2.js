// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2025 tijdvak 2
// 2026-05-10: zesde en laatste economie-pilot. 5 vragen geverifieerd.
// Bron: examenblad.nl, examen 0233 GT 2025-2.

const chapters = [
  { letter: "A", title: "Geld & begroten", emoji: "💰", from: 0, to: 0 },
  { letter: "B", title: "Werk & loon", emoji: "👷", from: 1, to: 1 },
  { letter: "C", title: "Belasting & inkomen", emoji: "🧾", from: 2, to: 4 },
];

const steps = [
  // V3
  {
    title: "Vraag 3 — wat is een begroting?",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 2, vraag 3. Doorklik voor de Pincode-uitleg in **Geld, sparen en lenen** (stap 'Begroten').",
    emoji: "🎓",
    checks: [
      {
        q: "Begroten leidt tot afname van geldstress. Wat is een begroting?",
        options: [
          "Het maken van een plan hoe je meer inkomsten kunt ontvangen.",
          "Het maken van een plan hoe je op de uitgaven kunt bezuinigen.",
          "Je huidige bezittingen en schulden op een rijtje zetten.",
          "Je verwachte inkomsten en uitgaven op een rijtje zetten.",
        ],
        answer: 3,
        wrongHints: [
          "Niet specifiek 'meer inkomsten' — een begroting kijkt naar het GEHEEL.",
          "Niet specifiek 'bezuinigen' — een begroting is een overzicht, geen besluit.",
          "Bezittingen + schulden = vermogen-overzicht, geen begroting.",
          null,
        ],
        explanation: "Een begroting is een overzicht van wat je verwacht binnen te krijgen (inkomsten) en wat je verwacht uit te geven (uitgaven) — meestal per maand of per jaar. Door dat naast elkaar te zetten zie je vooraf of je geld overhoudt of tekortkomt.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 2, vraag 3",
        leerpadLink: { id: "pincode-geld-sparen-lenen", title: "Geld, sparen en lenen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'begroting', 'inkomsten', 'uitgaven', 'vermogen', 'geldstress'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "elke optie meten tegen de definitie — eliminatie van te-beperkte en off-topic definities" },
          { id: "pincode-geld-sparen-lenen", title: "Geld, sparen en lenen", niveau: "vmbo-3", why: "begroten + inkomsten/uitgaven plannen — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat doet een begroting?", tekst: "Een PLAN VOORAF voor je geld. Helpt om te zien of je rondkomt, voor je in de problemen zit." },
            { titel: "Wat staat erin?", tekst: "INKOMSTEN (loon, uitkering, zakgeld) + UITGAVEN (huur, eten, kleding). Verwacht voor de komende periode." },
            { titel: "Loop opties langs", tekst: "A: 'plan voor meer inkomsten' — te beperkt, begroting is niet alleen verdienen ✗. B: 'plan om te bezuinigen' — te beperkt, een begroting is een OVERZICHT, geen besluit ✗. C: 'bezittingen + schulden' = vermogen-overzicht, niet inkomsten/uitgaven ✗. D: 'verwachte inkomsten + uitgaven' ✓." },
          ],
          woorden: [
            { woord: "begroting", uitleg: "Plan vooraf van inkomsten + uitgaven over een periode (week/maand/jaar)." },
            { woord: "inkomsten", uitleg: "Geld dat binnenkomt: loon, uitkering, zakgeld, rente." },
            { woord: "uitgaven", uitleg: "Geld dat eruit gaat: huur, boodschappen, vervoer, vrije tijd." },
            { woord: "geldstress", uitleg: "Stress door gebrek aan geld of zorgen over rondkomen. Begroting helpt dit verminderen." },
            { woord: "vermogen", uitleg: "Bezittingen MIN schulden. Anders dan inkomsten/uitgaven (= geld-STROOM)." },
          ],
          theorie: "**Begroting basis:**\n\n```\nInkomsten:\n  Loon            €1.200\n  Zakgeld          €30\n  TOTAAL        €1.230\n\nUitgaven:\n  Huur            €450\n  Boodschappen   €300\n  Telefoon         €25\n  Vrije tijd      €100\n  Vervoer          €60\n  TOTAAL          €935\n\nOVERSCHOT      €295\n```\n\nBegroting laat ZIEN of je rondkomt + waar je kunt sparen/snijden.",
          voorbeelden: [
            { type: "student", tekst: "Student maakt begroting maand: bijbaan €400 + studiefin €200 = €600. Huur €300 + boodschappen €200 + uitgaan €100 = €600. Net rond. Geen overschot." },
          ],
          basiskennis: [
            { onderwerp: "Inkomsten vs vermogen", uitleg: "Inkomsten = wat binnenkomt PER PERIODE (stroom). Vermogen = wat je HEBT op een moment (stand). Verschillende dingen." },
          ],
          niveaus: {
            basis: "Begroting = vooraf inkomsten + uitgaven op rij. Antwoord D.",
            simpeler: "Stel je voor: aan het begin van de maand schrijf je op: 'wat krijg ik binnen?' (loon, zakgeld) en 'wat ga ik uitgeven?' (huur, boodschappen). Dat is begroten — vooruit kijken.",
            nogSimpeler: "Verwacht inkomsten + uitgaven = D.",
          },
        },
      },
    ],
  },
  // V8
  {
    title: "Vraag 8 — wanneer verhoogt werkgever lonen?",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 2, vraag 8. Doorklik voor de Pincode-uitleg in **Werk en arbeidsmarkt**.",
    emoji: "🎓",
    checks: [
      {
        q: "Wanneer is een werkgever bereid om de lonen van werknemers te verhogen?",
        options: [
          "Als de arbeidsproductiviteit meer stijgt dan de lonen.",
          "Als de lonen meer stijgen dan de arbeidsproductiviteit.",
          "Als de lonen meer stijgen dan het aantal arbeidsjaren.",
          "Als het aantal arbeidsjaren meer stijgt dan de arbeidsproductiviteit.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Tegendeel — als lonen sneller stijgen dan productiviteit, krimpt de winst.",
          "Arbeidsjaren is geen logische maatstaf voor loonsverhoging.",
          "Idem — arbeidsjaren is hier niet relevant.",
        ],
        explanation: "Een werkgever wil winst maken. Hij kan het zich permitteren om lonen te verhogen als zijn werknemers méér produceren (productiviteitstijging). Stijgt de productiviteit met 5% en de loonkosten met 3%? Dan blijft er winstmarge over. Andersom (loonstijging > productiviteit) krimpt de winst.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 2, vraag 8",
        leerpadLink: { id: "pincode-werk-arbeidsmarkt", title: "Werk en arbeidsmarkt" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'arbeidsproductiviteit', 'lonen', 'winstmarge'" },
          { id: "procenten-po", title: "Procenten", niveau: "po-1F", why: "% productiviteit hoger dan % lonen → werkgever houdt winstmarge over — 2 % vergelijken" },
          { id: "pincode-werk-arbeidsmarkt", title: "Werk en arbeidsmarkt", niveau: "vmbo-4", why: "loonvorming + arbeidsproductiviteit — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wanneer wil een werkgever loon verhogen?", tekst: "Als hij het kan BETALEN. Dat kan als de werknemer méér gaat opleveren — dus als de productiviteit stijgt." },
            { titel: "Wat is arbeidsproductiviteit?", tekst: "Hoeveel een werknemer per uur produceert. Als die stijgt = werkgever krijgt meer voor zelfde loon." },
            { titel: "Verband loon-productiviteit", tekst: "Productiviteit ↑ MEER dan loon ↑ → werkgever houdt meer over → kan loon verhogen. Productiviteit ↓ minder → werkgever lijdt verlies." },
          ],
          woorden: [
            { woord: "arbeidsproductiviteit", uitleg: "Hoeveel een werknemer per tijdseenheid produceert. Bv. 100 stuks/uur." },
            { woord: "loonkosten", uitleg: "Wat de werkgever in totaal aan loon + premies + sociale lasten betaalt." },
            { woord: "winstmarge", uitleg: "Wat het bedrijf overhoudt per product = verkoopprijs − kosten." },
            { woord: "investering in scholing", uitleg: "Werkgever betaalt cursussen/training → werknemer wordt productiever → ruimte voor loonsverhoging." },
          ],
          theorie: "**Loon kan stijgen als:**\n\nProductiviteitstijging > loonstijging\n\n• Werknemer maakt 100 stuks/uur → 110 stuks/uur (+10%)\n• Loon stijgt +5% → werkgever HOUDT EXTRA over (5% productiviteits-winst)\n• Werkgever wint, werknemer wint = beide tevreden\n\n**Andersom (loon ↑ > productiviteit ↑):**\n• Werkgever maakt MINDER winst per product\n• Op den duur: hogere prijzen (= inflatie) of ontslag",
          voorbeelden: [
            { type: "voorbeeld", tekst: "Bakker introduceert nieuwe oven → 200 broden/uur ipv 100 (+100% productiviteit). Lonen kunnen +20% omhoog en bakker verdient nog meer." },
          ],
          basiskennis: [
            { onderwerp: "Waarom productiviteit?", uitleg: "Een bedrijf kan alleen lonen blijven verhogen als er ook MEER opbrengsten zijn. Productiviteit is de bron van die extra opbrengst." },
          ],
          niveaus: {
            basis: "Productiviteit > loonstijging → ruimte voor loonsverhoging. Antwoord A.",
            simpeler: "Een werkgever kijkt: 'krijg ik genoeg terug voor wat ik betaal?' Als zijn mensen MEER gaan produceren (per uur), kan hij ze meer loon geven. Anders niet — anders maakt hij verlies.",
            nogSimpeler: "Productiviteit > loon = ruimte = A.",
          },
        },
      },
    ],
  },
  // V16
  {
    title: "Vraag 16 — algemene heffingskorting & nivellering",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 2, vraag 16. Doorklik voor de Pincode-uitleg in **Belasting** (stap 'Heffingskortingen').",
    emoji: "🎓",
    checks: [
      {
        q: "De algemene heffingskorting is hoger voor mensen met een lager inkomen. Leidt de algemene heffingskorting tot een nivellering of een denivellering van de inkomensverdeling in een land?",
        options: [
          "Tot denivellering: het verandert in het voordeel van de hoge inkomens.",
          "Tot denivellering: het verandert in het voordeel van de lage inkomens.",
          "Tot nivellering: het verandert in het voordeel van de hoge inkomens.",
          "Tot nivellering: het verandert in het voordeel van de lage inkomens.",
        ],
        answer: 3,
        wrongHints: [
          "Denivellering = verschillen GROTER worden — past niet bij hogere korting voor laag.",
          "Inconsistent — verandering in voordeel lage inkomens = nivellering, niet denivellering.",
          "Inconsistent — nivellering = inkomensverschillen kleiner, niet 'voordeel hoge inkomens'.",
          null,
        ],
        explanation: "**Nivellering** = inkomensverschillen worden KLEINER. **Denivellering** = inkomensverschillen worden GROTER. Een hogere korting voor lage inkomens = lage inkomens houden relatief meer over = verschil tussen arm en rijk wordt kleiner = NIVELLERING in voordeel van lage inkomens.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 2, vraag 16",
        leerpadLink: { id: "pincode-belasting", title: "Belasting" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'heffingskorting', 'nivellering', 'denivellering', 'inkomensverdeling'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "2 dimensies tegelijk: nivellering/denivellering EN voordeel hoog/laag — eliminatie" },
          { id: "pincode-belasting", title: "Belasting", niveau: "vmbo-3", why: "heffingskortingen + IB-systematiek + herverdeling — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat doet de heffingskorting?", tekst: "Korting op te betalen IB. HOGER voor lage inkomens, LAGER voor hoge inkomens." },
            { titel: "Wie heeft daar voordeel bij?", tekst: "Lage inkomens — zij krijgen meer korting → houden relatief meer over." },
            { titel: "Wat doet dat met inkomensverschillen?", tekst: "Verschil arm ↔ rijk wordt KLEINER (laag krijgt erbij, hoog niet). = NIVELLERING." },
            { titel: "Welke optie?", tekst: "Nivellering + voordeel laag = D." },
          ],
          woorden: [
            { woord: "heffingskorting", uitleg: "Vast bedrag dat wordt afgetrokken van de te betalen IB. Algemene heffingskorting daalt met inkomen." },
            { woord: "nivellering", uitleg: "Inkomensverschillen worden KLEINER. Linkse politiek vaak voor." },
            { woord: "denivellering", uitleg: "Inkomensverschillen worden GROTER. Rechtse politiek soms." },
            { woord: "inkomensverdeling", uitleg: "Hoe inkomens over de bevolking verdeeld zijn. Gemeten via Lorenz-curve / Gini." },
          ],
          theorie: "**Nivellering vs denivellering:**\n\n• **Nivellering** = verschillen kleiner (vaak via belasting/uitkering)\n  - Voorbeeld: hogere belasting voor rijk + uitkering voor arm\n  - Heffingskorting hoger voor laag = nivellering\n\n• **Denivellering** = verschillen groter\n  - Voorbeeld: BTW verlagen (rijk profiteert meer in absolute zin)\n  - Vlaktaks (1 belastingpercentage voor iedereen)",
          voorbeelden: [
            { type: "nivellering", tekst: "Lage inkomens krijgen €3.000 heffingskorting, hoge €2.000. Verschil arm-rijk wordt €1.000 kleiner = nivellerend." },
            { type: "denivellering", tekst: "BTW van 21% naar 25% (op alles). Treft iedereen procentueel gelijk maar absoluut harder armen — denivellerend." },
          ],
          basiskennis: [
            { onderwerp: "Progressief belastingstelsel", uitleg: "Hoger inkomen = hoger belasting%. Werkt nivellerend." },
          ],
          niveaus: {
            basis: "Hogere korting voor laag = laag krijgt voordeel = verschil kleiner = nivellering. Antwoord D.",
            simpeler: "Heffingskorting helpt vooral lage inkomens (zij krijgen meer korting). Verschil tussen arm en rijk wordt KLEINER = nivellering. En het voordeel zit bij de LAGE inkomens.",
            nogSimpeler: "Nivellering + voordeel laag = D.",
          },
        },
      },
    ],
  },
  // V39
  {
    title: "Vraag 39 — wat is modaal inkomen?",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 2, vraag 39. Doorklik voor de Pincode-uitleg in **Inkomen en welvaart** (stap 'Inkomensverdeling').",
    emoji: "🎓",
    checks: [
      {
        q: "Wat wordt bedoelt met het begrip modaal inkomen?",
        options: [
          "Het afgesproken minimum inkomen als je werkt in loondienst.",
          "Het gemiddelde inkomen in Nederland.",
          "Het inkomen dat in Nederland het meeste voorkomt.",
          "Het netto inkomen dat je verdient als je werkt in loondienst.",
        ],
        answer: 2,
        wrongHints: [
          "Dat is het MINIMUMLOON, niet modaal.",
          "Dat is het GEMIDDELDE inkomen — anders dan modaal.",
          null,
          "Te vaag — netto-inkomen is een algemeen begrip, niet modaal.",
        ],
        explanation: "Modaal inkomen = het inkomen dat het MEEST voorkomt in Nederland (modus uit de statistiek). Niet hetzelfde als gemiddelde (= alle inkomens opgeteld / aantal mensen) of mediaan (= middelste inkomen). Modaal NL ~€44.000 bruto/jaar (2024) — dat is wat een 'modaal gezin' typisch verdient.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 2, vraag 39",
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'modaal', 'modus', 'gemiddelde', 'mediaan', 'minimumloon'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "modaal ≠ minimum ≠ gemiddelde — elke optie afpassen tegen de juiste betekenis" },
          { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart", niveau: "vmbo-3", why: "inkomensbegrippen + 'modaal' als referentie — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent modaal?", tekst: "Modus = wat het MEESTE voorkomt. Modaal inkomen = inkomen dat het MEEST verdiend wordt in NL." },
            { titel: "Niet hetzelfde als...", tekst: "Gemiddelde (alle inkomens opgeteld / aantal). Mediaan (middelste). Modaal = vaakst voorkomende, los van extreme rijk/arm." },
            { titel: "Loop opties langs", tekst: "A: minimumloon ✗. B: gemiddeld inkomen ✗ (verschilt). C: meest voorkomend ✓. D: netto inkomen loondienst (te vaag) ✗." },
          ],
          woorden: [
            { woord: "modaal", uitleg: "Modus uit statistiek = wat het VAAKSTE voorkomt. NL ~€44.000 bruto/jaar (2024)." },
            { woord: "gemiddelde", uitleg: "Som van alle inkomens / aantal mensen. Wordt opgetrokken door enkele rijken. NL gemiddelde > modaal." },
            { woord: "mediaan", uitleg: "Het MIDDELSTE inkomen — helft verdient minder, helft meer. Niet beïnvloed door extremen." },
            { woord: "minimumloon", uitleg: "Wettelijk minimum dat werkgever moet betalen. ~€26.000 bruto/jaar (2024). Veel lager dan modaal." },
          ],
          theorie: "**3 statistiek-maten voor inkomen:**\n\n| Maat | Wat |\n|---|---|\n| Modus = modaal | Vaakst voorkomende inkomen |\n| Mediaan | Middelste inkomen (50/50) |\n| Gemiddelde | Som / aantal — getrokken door rijke uitschieters |\n\nIn NL: modaal ~€44k, mediaan ~€42k, gemiddelde ~€55k.\n\n'Modaal gezin' is de vaak gebruikte term in politiek/media als referentie voor 'gewone burger'.",
          voorbeelden: [
            { type: "groep", tekst: "5 mensen verdienen: €10k, €10k, €30k, €30k, €1.000k. Modus = €10k én €30k (vaakst). Mediaan = €30k (middelste). Gemiddelde = €216k (rijke trekt op)." },
          ],
          basiskennis: [
            { onderwerp: "Welke maat is 'eerlijkst'?", uitleg: "Voor 'gewone burger' geeft mediaan of modaal beter beeld dan gemiddelde — gemiddelde wordt vertekend door enkele zeer rijken." },
          ],
          niveaus: {
            basis: "Modaal = meest voorkomend. Antwoord C.",
            simpeler: "Modus betekent in statistiek 'wat het meest voorkomt'. Modaal inkomen = wat de meeste mensen verdienen. Niet het gemiddelde (dat trekken rijken op) en niet het minimum.",
            nogSimpeler: "Modaal = meest voorkomend = C.",
          },
        },
      },
    ],
  },
  // V43
  {
    title: "Vraag 43 — modaal inkomen en koopkracht",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 2, vraag 43. Doorklik voor de Pincode-uitleg in **Inkomen en welvaart**.",
    emoji: "🎓",
    checks: [
      {
        q: "Het modale inkomen wordt nog vaak gebruikt om de koopkracht te onderzoeken. Waar moet rekening mee gehouden worden bij het bepalen van de koopkracht?",
        options: [
          "De inflatie van het land.",
          "De inkomensverdeling in het land.",
          "De oppervlakte van het land.",
          "Het aantal inwoners in het land.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Inkomensverdeling is een aparte indicator (Lorenzcurve), niet wat koopkracht meet.",
          "Oppervlakte heeft geen invloed op wat je voor je geld kunt kopen.",
          "Aantal inwoners zegt niets over koopkracht per persoon.",
        ],
        explanation: "Koopkracht = wat je werkelijk kunt kopen voor je inkomen. Daarvoor moet je nominaal inkomen corrigeren voor INFLATIE (prijsstijgingen). Stijgt je modaal inkomen met 3% terwijl prijzen 5% stijgen → koopkracht daalt 2%. Inflatie is de KERN-correctie voor koopkracht.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 2, vraag 43",
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'koopkracht', 'inflatie', 'inkomensverdeling', 'modaal inkomen'" },
          { id: "procenten-po", title: "Procenten", niveau: "po-1F", why: "inflatie als % aftrekken van loonstijging % voor reële verandering" },
          { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart", niveau: "vmbo-3", why: "koopkracht-formule + inflatiecorrectie — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is koopkracht?", tekst: "Hoeveel je werkelijk KAN KOPEN voor je inkomen. Niet euro's, maar boodschappen-equivalent." },
            { titel: "Wat beïnvloedt dat?", tekst: "(1) hoeveel je verdient (modaal inkomen). (2) hoe duur dingen zijn (prijzen → inflatie)." },
            { titel: "Dus correctie nodig voor:", tekst: "INFLATIE. Inkomen +3%, prijzen +5% → koopkracht −2%." },
            { titel: "Andere opties?", tekst: "Inkomensverdeling = verdeling, niet wat een gemiddeld iemand kan kopen. Oppervlakte, aantal inwoners = irrelevant." },
          ],
          woorden: [
            { woord: "koopkracht", uitleg: "Hoeveelheid goederen die je voor je inkomen kunt kopen. Stijgt als loon meer stijgt dan prijzen." },
            { woord: "inflatie", uitleg: "Gemiddelde prijsstijging per jaar. Gemeten via CPI (consumentenprijsindex)." },
            { woord: "nominaal vs reëel", uitleg: "Nominaal = in euro's. Reëel = in koopkracht (gecorrigeerd voor inflatie)." },
            { woord: "Lorenz-curve", uitleg: "Grafiek die inkomensVERDELING toont (mate van ongelijkheid)." },
          ],
          theorie: "**Koopkracht-formule (vuistregel):**\n\nReële verandering = nominale loonverandering − inflatie\n\n• Loon +5%, inflatie +3% → koopkracht +2%\n• Loon +0%, inflatie +5% → koopkracht −5%\n\nVoor een NATIONAAL koopkracht-cijfer wordt het **modale** inkomen vergeleken met de **CPI** (prijsindex).",
          voorbeelden: [
            { type: "Prinsjesdag", tekst: "Regering presenteert: 'modaal inkomen +4%, inflatie +6% → koopkracht modaal −2%' = modale gezin gaat erop achteruit." },
          ],
          basiskennis: [
            { onderwerp: "CPI", uitleg: "Consumentenprijsindex — meet gemiddelde prijsverandering van een mandje boodschappen + diensten dat een gemiddeld huishouden koopt." },
          ],
          niveaus: {
            basis: "Koopkracht corrigeert inkomen voor INFLATIE. Antwoord A.",
            simpeler: "Stel: jouw inkomen blijft gelijk maar boodschappen worden 10% duurder. Kun je nog evenveel kopen? Nee — je koopkracht is gedaald. Dat verschil komt door INFLATIE. Daarom moet je inflatie meenemen.",
            nogSimpeler: "Koopkracht corrigeren = inflatie = A.",
          },
        },
      },
    ],
  },
];

const examenEconomie2025T2 = {
  id: "examen-economie-2025-t2",
  title: "Examen oefenen — Economie 2025 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2025-T2",
  intro:
    "5 echte examenvragen uit VMBO-GL/TL economie 2025 tijdvak 2 (laatste van 6 economie examens). Per vraag de echte antwoorden, denkprikkel-hints, inhoudelijke uitleg, doorklik naar Pincode-leerpad. V20 (Lorenzcurve) en V26 (volgorde-vraag) zijn weggelaten.",
  triggerKeywords: [
    "examen 2025 tijdvak 2", "examen oefenen", "echte examenvragen",
    "begroting definitie", "loon arbeidsproductiviteit", "heffingskorting nivellering",
    "modaal inkomen", "koopkracht inflatie",
  ],
  chapters,
  steps,
};

export default examenEconomie2025T2;
