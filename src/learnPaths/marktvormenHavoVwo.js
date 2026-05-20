// Leerpad: Marktvormen + Markfalen — HAVO/VWO Economie
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Vraag-aanbod, marktvormen,
// markfalen, overheidsingrijpen, inkomensverdeling.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["📊", "🏪", "⚠️", "🏛️", "🏆"];

const chapters = [
  { letter: "A", title: "Vraag + aanbod + prijs", emoji: "📊", from: 0, to: 0 },
  { letter: "B", title: "4 Marktvormen", emoji: "🏪", from: 1, to: 1 },
  { letter: "C", title: "Markfalen", emoji: "⚠️", from: 2, to: 2 },
  { letter: "D", title: "Overheidsingrijpen", emoji: "🏛️", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (Lorenz + Gini)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Vraag + aanbod ────────────────────────────────────
  {
    title: "Vraag + aanbod — prijsmechanisme",
    explanation:
      "**Vraag** (Qd) = hoeveelheid die consumenten willen kopen bij een gegeven prijs.\n• Wet van de vraag: prijs ↑ → Qd ↓ (vraagcurve helt naar beneden).\n• Verschuiving vraagcurve door: inkomen, voorkeuren, prijs vervangers/aanvullingen, verwachtingen, aantal kopers.\n\n**Aanbod** (Qs) = hoeveelheid die producenten willen verkopen.\n• Wet van het aanbod: prijs ↑ → Qs ↑ (aanbodcurve helt naar boven).\n• Verschuiving aanbodcurve door: productiekosten, technologie, aantal aanbieders, belasting/subsidie, verwachtingen.\n\n**Evenwichtsprijs (P*)**:\n• Snijpunt vraag- en aanbodcurve.\n• Qd = Qs = evenwichtshoeveelheid.\n• Hier 'klaart de markt': geen tekort, geen overschot.\n\n**Boven evenwicht**: overschot → producenten verlagen prijs.\n**Onder evenwicht**: tekort → consumenten bieden meer → prijs stijgt.\n\n**Elasticiteit** = mate waarin Qd of Qs reageert op prijsverandering.\n• **Prijselasticiteit vraag** Ev = (%ΔQd) / (%ΔP).\n• |Ev| > 1: elastisch (luxegoed, veel substituten).\n• |Ev| < 1: inelastisch (basis, geen substituut: brood, benzine, medicijnen).\n• Ev = 0: volledig inelastisch (insuline voor diabeet).\n\n**Voorbeelden inelastisch**:\n• Sigaretten (verslaving).\n• Insuline.\n• Water/elektriciteit (geen alternatief op korte termijn).\n\n**Inkomenselasticiteit** Ei = (%ΔQd) / (%Δinkomen):\n• Ei > 0: normaal goed.\n• Ei < 0: inferieur goed (vraag daalt bij hoger inkomen — bv. discount-merken).\n• Ei > 1: luxegoed (auto's, vakanties).\n\n**Kruiselasticiteit** Ek = (%ΔQd_A) / (%ΔP_B):\n• Ek > 0: substituten (boter ↔ margarine).\n• Ek < 0: complementen (auto ↔ benzine).",
    checks: [
      {
        q: "Een **prijsstijging** leidt tot:",
        options: [
          "Daling Qd, stijging Qs (langs curves)",
          "Stijging Qd",
          "Daling Qs",
          "Geen verandering"
        ],
        answer: 0,
        wrongHints: [null, "Niet — wet van de vraag.", "Niet — wet van het aanbod.", "Niet — markten reageren."],
        uitlegPad: {
          stappen: [{ titel: "Beweging langs curves", tekst: "Bij prijsstijging: minder vraag (mensen kopen minder), meer aanbod (producent verdient meer per stuk → produceren meer). Dit is een BEWEGING langs de curves, geen verschuiving." }],
          niveaus: { basis: "Qd ↓, Qs ↑. A.", simpeler: "Duur = minder kopers, meer verkopers. A.", nogSimpeler: "Qd↓Qs↑ = A." },
        },
      },
      {
        q: "Wat is **prijselasticiteit van insuline** voor een diabeet?",
        options: [
          "Heel laag (inelastisch) — moet kopen ongeacht prijs",
          "Heel hoog (elastisch)",
          "Onbepaald",
          "Negatief"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel te bepalen.", "Niet — niet zo gemeten."],
        uitlegPad: {
          stappen: [{ titel: "Geen substituut, levensbelangrijk", tekst: "Insuline: geen alternatief beschikbaar voor diabetes type 1; levensreddend. Vraag daalt nauwelijks bij prijsstijging → bijna volledig inelastisch (|Ev| ≈ 0). Daarom controversieel: in VS schieten insuline-prijzen omhoog → ethisch dilemma." }],
          theorie: "Inelastische vraag → producent kan veel prijs verhogen zonder veel verkoop te verliezen → reden voor regulatie.",
          niveaus: { basis: "Inelastisch. A.", simpeler: "Moet kopen, dus prijs maakt weinig uit voor vraag. A.", nogSimpeler: "Inelastisch = A." },
        },
      },
      {
        q: "Bij **goede oogst** in graan (overvloed aanbod), wat gebeurt met evenwicht?",
        options: [
          "Aanbod-curve schuift naar rechts → lagere prijs",
          "Vraag-curve schuift naar rechts → hogere prijs",
          "Beweging langs aanbodcurve",
          "Geen verandering"
        ],
        answer: 0,
        wrongHints: [null, "Niet — geen vraag-verandering.", "Niet — verschuiving, niet langs.", "Wel reactie."],
        uitlegPad: {
          stappen: [{ titel: "Aanbod-shift", tekst: "Goede oogst = elke prijs nu hoger aanbod → curve naar rechts. Nieuwe evenwicht: lagere P, hogere Q. Boeren paradox: goede oogst kan tot **lager inkomen** leiden als vraag inelastisch is." }],
          niveaus: { basis: "Aanbod-shift → P daalt. A.", simpeler: "Veel oogst = lagere prijs. A.", nogSimpeler: "Q↑P↓ = A." },
        },
      },
      {
        q: "Boter + margarine zijn **substituten**. Boter-prijs stijgt. Wat met margarine?",
        options: [
          "Vraagcurve margarine schuift rechts → meer verkoop",
          "Vraagcurve daalt",
          "Geen effect",
          "Margarine verdwijnt"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — wel effect.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "Substituten = + Ek", tekst: "Mensen schakelen over: 'boter te duur, neem margarine'. Vraag naar margarine stijgt → curve naar rechts. Klassiek voorbeeld substituten met positieve kruiselasticiteit." }],
          theorie: "Complementen werken omgekeerd: benzine-prijs ↑ → minder auto-vraag (Ek < 0).",
          niveaus: { basis: "Margarine-vraag stijgt. A.", simpeler: "Boter duurder = mensen kopen margarine. A.", nogSimpeler: "Margarine↑ = A." },
        },
      },
      {
        q: "Bij **prijsplafond** onder evenwichtsprijs (zoals huurprijsplafond):",
        options: [
          "Tekort op markt — minder aanbod dan vraag",
          "Overschot — meer aanbod",
          "Geen effect",
          "Evenwicht herstelt zich snel"
        ],
        answer: 0,
        wrongHints: [null, "Niet — onder evenwicht is tekort.", "Wel effect.", "Niet — plafond houdt prijs vast."],
        uitlegPad: {
          stappen: [
            { titel: "Onder evenwicht: Qd > Qs", tekst: "Met prijsplafond P_max < P*: bij die lage prijs willen veel mensen kopen (hoog Qd), weinig willen verkopen (laag Qs) → tekort. NL huurmarkt: gereguleerde sector → wachtlijsten + black-market. Vrije sector hogere prijzen." },
          ],
          niveaus: { basis: "Tekort. A.", simpeler: "Te lage prijs → meer vraag dan aanbod. A.", nogSimpeler: "Tekort = A." },
        },
      },
    ],
  },

  // ─── B. 4 Marktvormen ─────────────────────────────────────
  {
    title: "Vier marktvormen — concurrentie ↔ monopolie",
    explanation:
      "**Marktvormen** verschillen in aantal aanbieders + productdifferentiatie + toetredingsbarrières.\n\n**1. Volkomen concurrentie**:\n• Heel veel kleine aanbieders + kopers.\n• Homogeen product (graan, aardappels).\n• Vrije toetreding/uittreding.\n• Volledige informatie.\n• Resultaat: prijs = marginale kosten = laagst mogelijk.\n• **Theoretisch ideaal**, in praktijk zeldzaam (landbouwgrondstoffen, aandelenmarkt benaderen).\n\n**2. Monopolistische concurrentie**:\n• Veel aanbieders maar **gedifferentieerd product** (merk, smaak, locatie).\n• Lage toetredingsdrempel.\n• Voorbeelden: restaurants, kappers, schoenenwinkels, kleding.\n• Bedrijf heeft beperkt prijszettings-vermogen door merken-loyaliteit.\n\n**3. Oligopolie**:\n• **Weinig grote aanbieders** (meestal 3-8).\n• Hoge toetredingsdrempels (investering, schaal).\n• Voorbeelden: supermarkten (AH, Jumbo, Lidl, Aldi, Plus), benzinepompen (Shell, BP, Esso, Total), telecom (KPN, VodafoneZiggo, T-Mobile).\n• Onderlinge afhankelijkheid: één bedrijf prijs daalt → anderen volgen.\n• Risico **kartelvorming** (prijsafspraken — illegaal).\n• Game-theory: 'prisoner's dilemma' tussen samenwerken + concurreren.\n\n**4. Monopolie**:\n• **Eén aanbieder**.\n• Geen substituten.\n• Toetredingsbarrières heel hoog.\n• Voorbeelden:\n  - Natuurlijk: ProRail (spoor-infrastructuur), waterleiding.\n  - Wettelijk: octrooien (Pfizer-medicijn), Postbus 51-zegels.\n  - Markt-: Microsoft Windows decennia (afnemend), De Beers diamant historisch.\n• **Marktmacht**: bedrijf kan prijs zetten boven marginale kosten → hoge winst, lage Q, **welvaartsverlies** voor maatschappij.\n\n**Vergelijking productie + prijs**:\n| | aantal | prijs | output |\n|---|---|---|---|\n| Volkomen | veel | laag | hoog |\n| Monopolistisch | veel | iets hoger | iets lager |\n| Oligopolie | weinig | hoger | lager |\n| Monopolie | één | hoogst | laagst |\n\n**Toetredingsbarrières**:\n• Schaalvoordelen (eerst groot bedrijf bouwen kost veel).\n• Octrooien + auteursrecht.\n• Netwerkeffecten (WhatsApp meer waardevol naarmate meer gebruikers).\n• Regulering (vergunningen, normen).\n• Kapitaalbehoefte (oliemaatschappij vereist miljarden).",
    checks: [
      {
        q: "Hoeveelheid supermarkt-ketens in Nederland: 5-7 grote. Welke marktvorm?",
        options: ["Oligopolie", "Volkomen concurrentie", "Monopolie", "Monopolistische concurrentie"],
        answer: 0,
        wrongHints: [null, "Niet — niet veel kleinen.", "Niet — meer dan 1.", "Niet — niet zo gedifferentieerd."],
        uitlegPad: {
          stappen: [
            { titel: "Weinig grote spelers", tekst: "AH (35%), Jumbo (22%), Lidl (12%), Aldi, Plus, Coop. Hoge toetredingsdrempels: distributiecentra, lange-termijn-contracten met leveranciers. Onderlinge prijs-volgers. Typisch oligopolie." },
          ],
          theorie: "Albert Heijn kartel-onderzoek 2008-2010 → boete ~€10 mln voor afspraken met concurrenten.",
          niveaus: { basis: "Oligopolie. A.", simpeler: "5-7 grote bepalen markt. A.", nogSimpeler: "Oligopolie = A." },
        },
      },
      {
        q: "**Volkomen concurrentie** vereist:",
        options: [
          "Veel kleine aanbieders, homogeen product, vrije toetreding",
          "Eén aanbieder",
          "Heel weinig spelers",
          "Hoge prijzen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is monopolie.", "Niet — dat is oligopolie.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [{ titel: "Theoretisch ideaal", tekst: "Modellen-marktvorm: prijs = marginale kosten = zeer efficiënt. In praktijk benaderen graan- en aandelenmarkten dit. Realiteit: meeste markten hebben enige imperfecties." }],
          niveaus: { basis: "Veel kleinen, identiek. A.", simpeler: "Veel aanbieders met zelfde product. A.", nogSimpeler: "Volkomen = A." },
        },
      },
      {
        q: "**Monopolie** ontstaat vaak door:",
        options: [
          "Hoge toetredingsbarrières (schaal, octrooi, netwerk)",
          "Lage prijzen",
          "Veel concurrentie",
          "Klanten-loyaliteit alleen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — tegenovergesteld.", "Tegenovergesteld.", "Niet alleen."],
        uitlegPad: {
          stappen: [{ titel: "Bescherming tegen concurrenten", tekst: "Een monopolie blijft bestaan zolang anderen niet kunnen toetreden. Diverse mechanismen: investering enorm (Boeing fabriek), wettelijk monopolie (octrooi 20 jaar), netwerkeffect (WhatsApp), of natuurlijke schaal (één spoorwegnet)." }],
          niveaus: { basis: "Hoge barrières. A.", simpeler: "Anderen kunnen niet erbij komen. A.", nogSimpeler: "Barrières = A." },
        },
      },
      {
        q: "Een **kartel** is:",
        options: [
          "Geheime prijsafspraken tussen concurrenten — wettelijk verboden",
          "Een legaal samenwerkingsverband",
          "Een type monopolie",
          "Een sociale beweging"
        ],
        answer: 0,
        wrongHints: [null, "Niet — illegaal in EU.", "Niet — apart van monopolie.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Mededingingsautoriteit (ACM)", tekst: "EU + NL: prijsafspraken/marktverdeling tussen onafhankelijke bedrijven verboden onder mededingingsrecht. Boetes tot 10% wereldwijde omzet. Bekende boetes: liftbedrijven (€1 mld EU 2007), bierbrouwers (€273 mln NL 2007)." },
          ],
          theorie: "OPEC (olie-export-landen) is een kartel — maar landen vallen niet onder mededingingsrecht.",
          niveaus: { basis: "Verboden prijsafspraken. A.", simpeler: "Stiekem geld-afspraken = illegaal. A.", nogSimpeler: "Kartel = A." },
        },
      },
      {
        q: "Restaurants in een grote stad: veel aanbieders met **verschillende menukaart + sfeer**. Marktvorm?",
        options: ["Monopolistische concurrentie", "Volkomen concurrentie", "Oligopolie", "Monopolie"],
        answer: 0,
        wrongHints: [null, "Niet — producten verschillen.", "Niet — niet weinig.", "Niet — veel restaurants."],
        uitlegPad: {
          stappen: [{ titel: "Veel + gedifferentieerd", tekst: "Veel restaurants (geen oligopolie of monopolie), maar elk biedt iets unieks (sushi, italiaans, vegan). Klanten hebben merken-/keuken-voorkeur → restaurant kan iets boven gemiddelde prijs vragen. Lage toetreding (huur + vergunning)." }],
          niveaus: { basis: "Monopolistische conc. A.", simpeler: "Veel + gedifferentieerd. A.", nogSimpeler: "Monopolistisch = A." },
        },
      },
    ],
  },

  // ─── C. Markfalen ─────────────────────────────────────────
  {
    title: "Markfalen — wanneer markt niet werkt",
    explanation:
      "**Markfalen** = situatie waarin vrije markt geen efficiënt resultaat oplevert.\n\n**1. Externaliteiten** (externe effecten):\n• **Negatief**: kosten voor derden niet in prijs (vervuiling van fabriek, files door auto's, herrie).\n• **Positief**: baten voor derden niet beloond (onderwijs → samenleving wint, bijenhouder → buren-bestuiving).\n• Markt produceert TE VEEL van negatieve externaliteiten + TE WEINIG van positieve.\n• Oplossing: belasting (Pigouvian), subsidie, regelgeving.\n\n**Voorbeeld negatief**: fabrieks-CO₂. Producent betaalt geen klimaatschade → te veel productie + uitstoot. Oplossing: CO₂-belasting/heffing.\n\n**2. Collectieve goederen** (publieke goederen):\n• **Niet-uitsluitbaar** (iedereen kan gebruiken).\n• **Niet-rivaliserend** (mijn gebruik vermindert die van jou niet).\n• Voorbeelden: schoon leger, openbare verlichting, klimaat, kennis.\n• Markt levert ze NIET (geen winst — 'free riders'). Overheid moet voorzien.\n\n**3. Asymmetrische informatie**:\n• **Verkoper weet meer**: tweedehands auto-handelaar weet of er defecten zijn (Akerlof's 'lemons-probleem').\n• **Koper weet meer**: ziekteverzekering, klant kent eigen risico's beter dan verzekeraar (anti-selectie).\n• Oplossingen: APK, garanties, certificeringen, verzekeringsplicht.\n\n**4. Marktmacht** (monopolies):\n• Zie stap B — leidt tot hoger prijs + lagere productie dan optimaal.\n• Oplossing: mededingingsbeleid (ACM), opdelen van monopolisten (AT&T 1984, mogelijk Google?).\n\n**5. Inkomensongelijkheid** (deels markfalen, deels normatief):\n• Markt is efficiënt maar niet noodzakelijk rechtvaardig.\n• Sommige basis-behoeftes (gezondheidszorg, onderwijs) zouden volgens veel mensen onafhankelijk van inkomen moeten zijn.\n\n**6. Macro-economische instabiliteit**:\n• Conjunctuurcyclus, financiële crises (2008, 1929).\n• Markt kan tot 'animal spirits' (Keynes) → onnodige paniek + werkloosheid.\n• Oplossing: centrale bank rente-beleid + overheid fiscaal beleid.\n\n**Geen markfalen ≠ goede uitkomst**: efficiëntie is één criterium; rechtvaardigheid + duurzaamheid + welzijn zijn andere.",
    checks: [
      {
        q: "Een fabriek loost vervuiling in de rivier zonder kosten voor zichzelf. Type markfalen?",
        options: [
          "Negatieve externaliteit",
          "Positieve externaliteit",
          "Collectief goed",
          "Asymmetrische informatie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — schade, niet baat.", "Niet — andere categorie.", "Niet — gaat om kosten, niet info."],
        uitlegPad: {
          stappen: [
            { titel: "Kosten voor derden niet in prijs", tekst: "Fabriek produceert tegen privé-kosten (loon + materiaal), maar **maatschappelijke** kosten zijn hoger (visserij verlies, ziekte stroomafwaarts). Prijs op markt is TE laag → TE veel productie + vervuiling. Oplossing: heffing of regulering." },
          ],
          theorie: "Klimaatverandering = grootste externaliteit ooit — CO₂ uitstoot betaalt nu geen prijs voor toekomstige schade.",
          niveaus: { basis: "Negatieve externaliteit. A.", simpeler: "Schade aan anderen niet ingeprijsd. A.", nogSimpeler: "Externaliteit = A." },
        },
      },
      {
        q: "Welk is een **collectief goed**?",
        options: [
          "Nationaal defensie-leger",
          "Auto",
          "Brood",
          "Bioscoop-kaartje"
        ],
        answer: 0,
        wrongHints: [null, "Niet — uitsluitbaar.", "Niet — uitsluitbaar + rival.", "Niet — uitsluitbaar (toegangsbewijs)."],
        uitlegPad: {
          stappen: [
            { titel: "Niet-uitsluitbaar + niet-rivaliserend", tekst: "Het leger beschermt iedereen of niemand — kan niet bepaalde inwoners uitsluiten. Mijn 'gebruik' (in leven blijven) vermindert die van mijn buren niet. Daarom moet overheid leger betalen via belasting — geen markt-oplossing." },
          ],
          theorie: "Andere voorbeelden: openbare verlichting, dijken, basisonderzoek, klimaatstabiliteit.",
          niveaus: { basis: "Leger = collectief. A.", simpeler: "Iedereen profiteert ongeacht betaling. A.", nogSimpeler: "Leger = A." },
        },
      },
      {
        q: "Tweedehands auto-handelaar verkoopt auto met verborgen gebreken. Type markfalen?",
        options: [
          "Asymmetrische informatie (Akerlof's 'lemons')",
          "Externaliteit",
          "Monopolie",
          "Collectief goed"
        ],
        answer: 0,
        wrongHints: [null, "Niet — info-asymmetrie hier kern.", "Niet — geen monopolie nodig.", "Niet — wel een privé-transactie."],
        uitlegPad: {
          stappen: [
            { titel: "Akerlof 1970 (Nobel)", tekst: "Akerlof's 'The Market for Lemons': tweedehands auto-markt. Verkopers van slechte auto's ('lemons') verbergen gebreken; goede auto's halen niet hun waarde. Goede aanbieders trekken zich terug → markt 'rot van onderaf'." },
          ],
          theorie: "Oplossingen: APK-keuringen, garantie-verplichtingen, derden-rapporten, BOVAG-keurmerk.",
          niveaus: { basis: "Asymmetrische info. A.", simpeler: "Verkoper weet meer dan koper. A.", nogSimpeler: "Lemons = A." },
        },
      },
      {
        q: "Wat is **positieve externaliteit**?",
        options: [
          "Baten voor derden niet in prijs (bv. educatie, vaccinatie)",
          "Negatieve schade",
          "Overheidsbelasting",
          "Privé-winst"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — heffing.", "Niet — winst is intern."],
        uitlegPad: {
          stappen: [
            { titel: "Markt produceert te weinig van", tekst: "Voorbeelden: vaccinaties (kuddebescherming voor anderen), onderwijs (productievere samenleving), groene daken (verkoeling stad). Markt onderproduceert want individu krijgt niet alle baten. Oplossing: subsidie." },
          ],
          niveaus: { basis: "Baten voor derden. A.", simpeler: "Anderen profiteren ongevraagd. A.", nogSimpeler: "Positief = A." },
        },
      },
      {
        q: "Wat is **Pigouvian-belasting**?",
        options: [
          "Belasting gelijk aan externe schade → internaliseert die in prijs",
          "Vermogensbelasting",
          "BTW",
          "Importheffing"
        ],
        answer: 0,
        wrongHints: [null, "Niet — niet op vermogen.", "Niet — BTW is consumentenbelasting.", "Niet — voor handel."],
        uitlegPad: {
          stappen: [
            { titel: "Pigou 1920", tekst: "Belasting precies op activiteit met externaliteit, gelijk aan grootte schade. Voorbeeld: CO₂-heffing, accijns op sigaretten, congestion-charge London. Idee: prijs reflecteert nu **maatschappelijke** kosten → markt optimaliseert correct." },
          ],
          theorie: "Praktijk: schade exact kwantificeren is moeilijk → discussies over hoogte. Maar principe wijdverbreid.",
          niveaus: { basis: "Belasting = schade. A.", simpeler: "Belasting maakt vervuiling duurder. A.", nogSimpeler: "Pigou = A." },
        },
      },
    ],
  },

  // ─── D. Overheidsingrijpen ────────────────────────────────
  {
    title: "Overheidsingrijpen — instrumenten",
    explanation:
      "**Waarom overheid ingrijpt** in markt:\n• Markfalen herstellen (zie C).\n• Inkomensherverdeling (sociale rechtvaardigheid).\n• Macro-economisch stabiliseren (recessie, inflatie).\n• Collectieve goederen leveren.\n\n**Instrumenten**:\n\n**1. Wet- + regelgeving**:\n• Mededingingswet (ACM).\n• Minimumloon, arbeidsrecht.\n• Productveiligheid + standaarden.\n• Vergunningen.\n\n**2. Belastingen**:\n• Inkomstenbelasting (progressief — herverdeling).\n• BTW (consumptie).\n• Vennootschapsbelasting.\n• Pigouvian heffingen (sigaretten, alcohol, CO₂).\n• Vermogensbelasting (NL: Box 3 — discussie).\n\n**3. Subsidies + uitkeringen**:\n• Onderwijs gratis.\n• AOW, WW, bijstand.\n• Zorg-toeslag, huur-toeslag.\n• Subsidies voor zonnepanelen, EV, isolatie.\n\n**4. Eigen productie**:\n• ProRail, NS, waterschappen, gemeentelijke vuilnis, post (vroeger PTT).\n• Discussie privatisering: 1990s-2000s veel geprivatiseerd (energie, post, treinen). Mixed resultaten.\n\n**5. Monetair beleid** (centrale bank, niet overheid direct):\n• ECB stelt rente in voor eurozone.\n• Hogere rente → minder lenen → minder vraag → inflatie daalt.\n• Lagere rente → meer lenen → economie stimulerend.\n• 2015-2022: rente bij 0% of negatief → 'gratis geld' tegen lage inflatie.\n• Sinds 2022: hoge inflatie → ECB rente snel omhoog (0% → 4%).\n\n**6. Fiscaal beleid**:\n• Anticyclisch (Keynesiaans): in recessie meer uitgeven + minder belasten; in hoogconjunctuur omgekeerd.\n• Procyclisch: omgekeerd (vaak politiek aantrekkelijker maar slecht).\n\n**Begrotingsregels EU**:\n• Stabiliteits + Groei Pact (1997): begrotingstekort < 3% BBP, staatsschuld < 60% BBP.\n• Vaak overschreden (Frankrijk + Italië structureel; NL meestal niet).\n\n**Trade-offs**:\n• Efficiëntie vs. rechtvaardigheid.\n• Vrije markt vs. zekerheid.\n• Belasting hoogte vs. arbeidsprikkels.\n• Centrale planning vs. innovatie.\n\nGeen 'juist' antwoord — politieke keuze.\n\n**Politieke spectrum**:\n• Liberaal/rechts: minder overheid, lagere belasting, vrije markt.\n• Sociaal-democratisch/links: meer overheid, herverdeling, sociale zekerheid.\n• Sinds 1980 (Reagan/Thatcher): rechts dominanter.\n• Sinds 2008: heroverwegingen, klimaat-uitdaging dwingt nieuwe rol overheid.",
    checks: [
      {
        q: "Wat is **progressieve belasting**?",
        options: [
          "Hogere inkomens betalen procentueel meer",
          "Iedereen zelfde % betaalt",
          "Hogere inkomens betalen minder",
          "Alleen bedrijven betalen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is vlaktax.", "Niet — regressief, onbillijk.", "Niet — privé ook."],
        uitlegPad: {
          stappen: [
            { titel: "NL inkomstenbelasting 2024", tekst: "Schijf 1 (< €38.441): 36,97%.\nSchijf 2 (€38.441-76.817): 36,97%.\nSchijf 3 (> €76.817): 49,5%.\nHogere inkomens hogere %. Progressief = herverdeling. Tegen-vorm 'regressief' (lage inkomens hoger %) — BTW heeft regressief karakter want lage inkomens consumeren groter % van inkomen." },
          ],
          niveaus: { basis: "Hoger inkomen → hoger %. A.", simpeler: "Rijken procentueel meer. A.", nogSimpeler: "Progressief = A." },
        },
      },
      {
        q: "**ECB** verhoogt rente. Verwacht effect:",
        options: [
          "Minder lenen → minder vraag → lagere inflatie + werkloosheid kan stijgen",
          "Meer lenen + hoog werk",
          "Niets",
          "Direct hogere prijzen"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel effect.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Klassiek anti-inflatie", tekst: "Hogere rente: hypotheek + bedrijfslening duurder → minder investering + consumptie → minder druk op prijzen → inflatie daalt. Bijwerking: werkloosheid stijgt (minder investering, ontslagen). 2022-2024 cyclus." },
          ],
          niveaus: { basis: "Inflatie ↓, werkloosheid ↑ mogelijk. A.", simpeler: "Duurder lenen remt economie. A.", nogSimpeler: "Remt = A." },
        },
      },
      {
        q: "**EU-Stabiliteits- en Groei Pact** zegt begrotingstekort max:",
        options: ["3% van BBP", "10%", "1%", "Geen regel"],
        answer: 0,
        wrongHints: [null, "Te hoog.", "Te laag.", "Wel een regel."],
        uitlegPad: {
          stappen: [
            { titel: "3% / 60%-regel", tekst: "1997 SGP-regels: jaarlijks begrotingstekort < 3% BBP, totale staatsschuld < 60% BBP. Bij overtreding 'buitensporig tekort procedure' → boete (in praktijk nauwelijks gebruikt). Tijdens COVID + energie-crisis tijdelijk geschorst. 2024: nieuwe versie." },
          ],
          niveaus: { basis: "3%. A.", simpeler: "Tekort max 3% BBP. A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "**Keynesiaans beleid** in een recessie:",
        options: [
          "Overheidsuitgaven omhoog + belasting omlaag → economie stimuleren",
          "Bezuinigen + belasting omhoog",
          "Geen ingrijpen",
          "Hogere rente"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is austerity.", "Niet — Keynes vooral pro-interventie.", "Niet — monetair, niet fiscaal."],
        uitlegPad: {
          stappen: [
            { titel: "Anticyclisch fiscaal", tekst: "In recessie: privé-uitgaven dalen → overheid moet gat vullen via meer uitgaven (infrastructuur, sociale wetten) + minder belasting → consumenten houden meer over → vraag stijgt → werk-herstel. Crisis 2008-2009 + 2020-COVID: Keynesiaanse pakketten." },
          ],
          theorie: "Tegen-school: austerity (Hayek, Friedman): in recessie ook bezuinigen om schuld onder controle te houden. Praktijk: ECB-eurocrisis 2010-2015 gebruikte deels austerity → langere recessie Zuid-EU.",
          niveaus: { basis: "Stimulerend. A.", simpeler: "Meer uitgaven, minder belasting. A.", nogSimpeler: "Keynes = A." },
        },
      },
      {
        q: "**Privatisering** van energie-bedrijven sinds 1990s heeft als doel:",
        options: [
          "Marktwerking → efficiëntie + lagere prijzen (theoretisch)",
          "Hogere prijzen",
          "Meer ambtenaren",
          "Sluiting bedrijven"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld bedoeld.", "Tegenovergesteld.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Theorie vs praktijk", tekst: "Argument: privé-bedrijven competeren → efficiënter → lagere prijzen. Praktijk in NL: liberalisering 1998 (gas + elektriciteit). Wel keuze tussen aanbieders, maar netwerk-tarieven nog steeds gereguleerd (TenneT, Gasunie). 2022-crisis: gasprijzen schoten omhoog → kritiek op privatisering." },
          ],
          niveaus: { basis: "Marktwerking. A.", simpeler: "Concurrentie zou prijzen drukken. A.", nogSimpeler: "Markt = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — inkomensverdeling, Lorenz, Gini",
    explanation:
      "**Inkomensverdeling** = hoe inkomen verdeeld is over bevolking.\n\n**Maten**:\n\n**1. Lorenz-curve**:\n• X-as: cumulatieve % bevolking (van armste naar rijkste).\n• Y-as: cumulatieve % inkomen.\n• Bij perfecte gelijkheid: rechte 45°-lijn (10% bevolking = 10% inkomen).\n• Bij ongelijkheid: curve onder de 45°-lijn.\n• Meer doorbuigend = ongelijker.\n\n**2. Gini-coëfficient** (afgeleid uit Lorenz):\n• 0 = perfecte gelijkheid.\n• 1 = perfecte ongelijkheid (1 persoon alles).\n• NL Gini: ~0,30 (na belasting + uitkeringen — relatief gelijk).\n• VS Gini: ~0,42.\n• Brazilië: ~0,53.\n• Zuid-Afrika: ~0,63 (meest ongelijk wereldwijd).\n\n**Belasting + uitkeringen** verminderen ongelijkheid significant:\n• NL bruto-inkomen Gini: ~0,45.\n• NL netto (na belasting + sociaal): ~0,29.\n• Verschil = effect van herverdeling.\n\n**Werkenden vs. niet-werkenden**:\n• Mediaan + percentielen.\n• Top 10% vs. onderste 10%.\n• Decielen-verdeling.\n\n**Wereldwijde ongelijkheid**:\n• 50% wereldbevolking heeft <5% van wereldvermogen.\n• Top 1% bezit ~50% wereldvermogen.\n• Trend sinds 1980s: stijgend (Piketty: r > g — rendement op kapitaal > economische groei → vermogen accumuleert in handen weinige).\n\n**Effecten ongelijkheid**:\n• Negatief:\n  - Sociale onrust + criminaliteit.\n  - Politieke polarisatie + populisme.\n  - Verlies van vertrouwen tussen klassen.\n  - Volksgezondheid: ongelijke landen scoren slechter (Wilkinson + Pickett, 'Spirit Level').\n  - Lagere economische groei (verspilde talenten in armoede).\n• Argument vóór enige ongelijkheid:\n  - Prikkels om hard te werken / risico te nemen.\n  - Beloning voor innovatie + ondernemerschap.\n\n**Beleidsopties** voor minder ongelijkheid:\n• Progressievere belasting.\n• Erfbelasting (NL: 10-20% boven vrijstelling).\n• Vermogensbelasting (NL: Box 3, discussie).\n• Minimumloon verhogen.\n• Basisinkomen experimenten (UBI).\n• Beter onderwijs voor lage inkomens.\n• Vakbond + cao versterken.\n\n**Mark wens: VWO eindexamen-relevant** — geweldige onderwerp voor essay-vraagjes 'evalueer ongelijkheid + beleidsmaatregelen'.",
    checks: [
      {
        q: "**Gini-coëfficient** van 0 betekent:",
        options: [
          "Perfecte gelijkheid (iedereen zelfde inkomen)",
          "Perfecte ongelijkheid",
          "Recessie",
          "Geen meting mogelijk"
        ],
        answer: 0,
        wrongHints: [null, "Niet — 1.", "Niet — geen Gini-verband.", "Wel meting."],
        uitlegPad: {
          stappen: [{ titel: "0 → 1 schaal", tekst: "Gini 0 = iedereen zelfde inkomen. Gini 1 = één persoon alles. NL ~0,30 = relatief gelijk; VS ~0,42 = meer ongelijk; Zuid-Afrika 0,63 = extreem ongelijk." }],
          niveaus: { basis: "0 = gelijkheid. A.", simpeler: "Hoe lager Gini, hoe gelijker. A.", nogSimpeler: "0 = A." },
        },
      },
      {
        q: "Een **Lorenz-curve** verder van de 45°-lijn betekent:",
        options: ["Grotere ongelijkheid", "Meer gelijkheid", "Hoger BBP", "Lagere belasting"],
        answer: 0,
        wrongHints: [null, "Niet — tegenovergesteld.", "Niet — geen verband.", "Idem."],
        uitlegPad: {
          stappen: [{ titel: "Verbuiging = ongelijkheid", tekst: "45°-lijn = perfecte verdeling. Lorenz-curve buigt naar onder als rijke top steeds groter % inkomen heeft. Oppervlak tussen 45°-lijn + Lorenz / oppervlak driehoek = Gini-coëfficient." }],
          niveaus: { basis: "Meer afstand = meer ongelijk. A.", simpeler: "Verre Lorenz = ongelijker. A.", nogSimpeler: "Ver = A." },
        },
      },
      {
        q: "Nederlandse Gini **na belasting + uitkeringen** is:",
        options: [
          "~0,30 (relatief gelijk)",
          "~0,60",
          "~0,15",
          "~0,90"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is Zuid-Afrika.", "Te gelijk — onmogelijk in praktijk.", "Onmogelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Herverdeling werkt", tekst: "Bruto-inkomens Gini ~0,45 (markt). Na belasting + uitkeringen ~0,29. Welvaartsstaat reduceert ongelijkheid significant. Bij vergelijking: VS 0,42 (minder herverdeling), Denemarken 0,28 (meer), Brazilië 0,53." },
          ],
          niveaus: { basis: "~0,30. A.", simpeler: "NL relatief gelijk na herverdeling. A.", nogSimpeler: "0,30 = A." },
        },
      },
      {
        q: "Piketty's stelling **r > g** betekent:",
        options: [
          "Rendement op kapitaal > economische groei → vermogen concentreert",
          "Rente > groei → recessie",
          "Geen verband",
          "Salarissen stijgen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — onderbouwing voor ongelijkheid.", "Wel — bekend mechanisme.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "'Capital in 21e Century'", tekst: "Thomas Piketty, 2014: historisch r ~5% > g ~2-3%. Dus vermogen groeit sneller dan economie → bestaande rijken accumuleren ratio relatief. Verklaart trend stijgende ongelijkheid sinds 1980. Veel discussie + kritiek, maar invloedrijk." },
          ],
          theorie: "Oplossing volgens Piketty: globale vermogensbelasting → moeilijk politiek.",
          niveaus: { basis: "Kapitaal > groei = concentratie. A.", simpeler: "Bezittingen groeien sneller dan economie. A.", nogSimpeler: "r>g = A." },
        },
      },
      {
        q: "Wat is een argument **vóór** enige ongelijkheid?",
        options: [
          "Prikkels voor hard werken, ondernemen, risico nemen",
          "Sociale rust",
          "Gezondheid",
          "Eenzaamheid"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — minder rust.", "Tegen — minder gezond.", "Niet relevant."],
        uitlegPad: {
          stappen: [
            { titel: "Incentive-argument", tekst: "Als arts en kassière hetzelfde verdienen → wie wordt arts (lange dure studie + verantwoordelijkheid)? Sommige inkomensverschillen prikkelen tot inspanning + investering. Hoeveel ongelijkheid is 'gezond' is normatieve discussie — sociaal-democraten zien 0,25-0,30 als optimaal, libertaire 0,40+." },
          ],
          niveaus: { basis: "Prikkels. A.", simpeler: "Beloning voor moeite. A.", nogSimpeler: "Prikkel = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const marktvormenHavoVwo = {
  id: "marktvormen-havo-vwo",
  title: "Marktvormen + Markfalen (HAVO/VWO Economie)",
  emoji: "🏪",
  level: "havo-vwo-4-5",
  subject: "economie",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Economie — Marktvormen + Markfalen + Inkomensverdeling (CSE-onderwerp)",
  prerequisites: [
    { id: "vraag-aanbod", title: "Vraag + Aanbod basis", niveau: "havo-2F" },
    { id: "bbp-conjunctuur-economie", title: "BBP + Conjunctuur", niveau: "havo-3F" },
  ],
  intro:
    "Marktvormen + Markfalen voor HAVO/VWO eindexamen — vraag+aanbod, prijselasticiteit, vier marktvormen, markfalen + externaliteiten, overheidsingrijpen, inkomensverdeling (Lorenz, Gini). 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "vraag", "aanbod", "evenwichtsprijs",
    "elasticiteit", "prijselasticiteit",
    "inkomenselasticiteit", "kruiselasticiteit",
    "substituut", "complement",
    "volkomen concurrentie",
    "monopolistische concurrentie",
    "oligopolie", "supermarkt", "telecom",
    "monopolie", "marktmacht",
    "kartel", "ACM", "mededinging",
    "toetredingsbarrière",
    "markfalen", "externaliteit",
    "collectief goed", "publiek goed",
    "asymmetrische informatie", "Akerlof", "lemons",
    "Pigouvian", "Pigou", "CO2-heffing",
    "overheidsingrijpen",
    "progressieve belasting",
    "monetair beleid", "ECB", "rente",
    "fiscaal beleid", "Keynes", "anticyclisch",
    "Stabiliteit Groei Pact", "EU-begroting",
    "privatisering",
    "inkomensverdeling",
    "Lorenz-curve", "Gini-coëfficient",
    "Piketty", "r>g",
    "ongelijkheid",
    "basisinkomen", "UBI",
  ],
  chapters,
  steps,
};

export default marktvormenHavoVwo;
