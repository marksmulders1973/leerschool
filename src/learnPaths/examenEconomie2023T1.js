// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2023 tijdvak 1
// 2026-05-10: vierde pilot-examen — 5 vragen geverifieerd tegen origineel.
// Bron: examenblad.nl, examen 0233 GT 2023-1 (-o/-b/-c).

const chapters = [
  { letter: "A", title: "Inkomen", emoji: "💰", from: 0, to: 0 },
  { letter: "B", title: "Internationale handel", emoji: "🌍", from: 1, to: 1 },
  { letter: "C", title: "Marketing & marktvormen", emoji: "🏪", from: 2, to: 4 },
];

const steps = [
  // ─── Vraag 4 — Subsidie zonne-energie ────────────────────
  {
    title: "Vraag 4 — soorten inkomen (subsidie)",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 1, vraag 4. Doorklik voor de Pincode-uitleg in **Inkomen en welvaart** (stap 'Soorten inkomen').",
    emoji: "🎓",
    checks: [
      {
        q: "De gemeente Zonhoven wil het gebruik van zonne-energie stimuleren en verleent subsidies op de aanschaf van zonnepanelen door huishoudens. Hoe worden deze subsidies die de huishoudens van de gemeente ontvangen genoemd?",
        options: [
          "inkomen uit arbeid",
          "inkomen uit bezit",
          "inkomen uit overdrachten",
          "inkomen uit vermogen",
        ],
        answer: 2,
        wrongHints: [
          "Inkomen uit arbeid = loon voor werk. Voor een subsidie hoef je niet te werken.",
          "Inkomen uit bezit = huur/pacht/winst uit eigendom. Subsidie is geen bezit.",
          null,
          "Inkomen uit vermogen = rente, dividend. Subsidie is geen kapitaal-rendement.",
        ],
        explanation: "Een subsidie van de gemeente is een **overdracht** van overheid naar burger zonder dat de burger er een productiefactor (arbeid, kapitaal, natuur, ondernemerschap) tegenover hoeft te stellen. Daarom heet het overdrachtsinkomen — net als kinderbijslag, AOW, of zorgtoeslag.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag 4",
        leerpadLink: { id: "pincode-inkomen-welvaart", title: "Inkomen en welvaart" },
        uitlegPad: {
          stappen: [
            { titel: "Wat krijgt het huishouden?", tekst: "De gemeente geeft GELD aan huishoudens die zonnepanelen kopen. Dat heet een subsidie." },
            { titel: "Moet het huishouden ervoor werken?", tekst: "Nee. Geen werk, geen huis verhuren, geen geld op de bank. Het is een uitkering van de overheid." },
            { titel: "Welke 4 inkomenssoorten zijn er?", tekst: "Loon (arbeid), winst/rente/dividend (bezit/vermogen), én overdrachten (cadeau van overheid). Een subsidie hoort bij de laatste." },
          ],
          woorden: [
            { woord: "subsidie", uitleg: "Geld dat de overheid geeft om iets te stimuleren (bv. zonnepanelen, isolatie, kinderopvang)." },
            { woord: "overdrachtsinkomen", uitleg: "Geld dat je krijgt van de overheid zonder dat je ervoor werkt of iets bezit. Bv: AOW, bijstand, kinderbijslag, zorgtoeslag." },
            { woord: "productiefactor", uitleg: "Iets dat je inzet om geld te verdienen: arbeid (werk), kapitaal (geld/machines), natuur (grond), ondernemerschap." },
            { woord: "primair inkomen", uitleg: "Inkomen dat je verdient MET een productiefactor (loon, rente, winst, huur). NIET hetzelfde als overdrachten." },
          ],
          theorie: "**Inkomen heeft 4 soorten:**\n• **Loon** = inkomen uit arbeid\n• **Rente** = inkomen uit vermogen (geld op bank)\n• **Huur, winst** = inkomen uit bezit/ondernemerschap\n• **Overdrachten** = inkomen ZONDER tegenprestatie, van overheid (subsidie, uitkering, toeslag)\n\nEen subsidie van de gemeente past bij categorie 4: je krijgt geld omdat de overheid iets wil stimuleren. Je hoeft er niet voor te werken.",
          voorbeelden: [
            { type: "loon", tekst: "Vakkenvuller bij AH krijgt €120 per week → inkomen uit arbeid." },
            { type: "overdracht", tekst: "Ouders met laag inkomen krijgen kinderbijslag van overheid → overdrachtsinkomen." },
            { type: "overdracht", tekst: "Huishouden krijgt €1.000 zonnepaneel-subsidie van gemeente → óók overdrachtsinkomen." },
          ],
          basiskennis: [
            { onderwerp: "Wat is 'inkomen'?", uitleg: "Geld dat binnenkomt bij een huishouden in een bepaalde periode (week, maand, jaar)." },
          ],
          niveaus: {
            basis: "Subsidie = geld van de overheid waar je niets voor hoeft te doen → categorie 'overdrachten'. Antwoord C.",
            simpeler: "De gemeente GEEFT je geld voor zonnepanelen — je werkt er niet voor, je verhuurt geen huis. Dat is een 'cadeau' van de overheid = overdracht. Net als kinderbijslag.",
            nogSimpeler: "Geld van overheid + jij doet niks terug = overdrachtsinkomen. Antwoord C.",
          },
        },
      },
    ],
  },
  // ─── Vraag 13 — Importheffing boter ──────────────────────
  {
    title: "Vraag 13 — wie betaalt de importheffing?",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 1, vraag 13. Doorklik voor de Pincode-uitleg in **Nederland en het buitenland** (stap 'Beschermingsmaatregelen').",
    emoji: "🎓",
    checks: [
      {
        q: "Wie betaalde de importheffing eerst en aan wie werd de importheffing uiteindelijk doorberekend?",
        options: [
          "De importheffing werd eerst betaald door de Nederlandse overheid, daarna werd de heffing doorberekend aan de Nederlandse consumenten.",
          "De importheffing werd eerst betaald door de Nederlandse overheid, daarna werd de heffing doorberekend aan de Belgische consumenten.",
          "De importheffing werd eerst betaald door de Belgische importeurs, daarna werd de heffing doorberekend aan de Nederlandse consumenten.",
          "De importheffing werd eerst betaald door de Belgische importeurs, daarna werd de heffing doorberekend aan de Belgische consumenten.",
        ],
        answer: 3,
        wrongHints: [
          "Niet de NL-overheid — die heft niets als de import naar BE gaat. De BE-overheid heft, en de BE-importeur betaalt.",
          "Niet de NL-overheid — de heffing is van BE. Importeur in BE betaalt.",
          "Belgische importeur betaalt eerst, klopt — maar uiteindelijk komt het bij de BE-eindkoper terecht (BE-consument koopt het immers in BE).",
          null,
        ],
        explanation: "Importheffing geheven door BE → wordt betaald door BE-importeur (die haalt boter uit NL). Die importeur rekent de heffing door in zijn verkoopprijs aan de uiteindelijke BE-consument. Dus: Belgische importeur betaalt eerst, BE-consument betaalt indirect via hogere boterprijs. De Nederlandse overheid heeft hier niets mee te maken.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag 13",
        leerpadLink: { id: "pincode-buitenland-eu", title: "Nederland en het buitenland" },
        uitlegPad: {
          stappen: [
            { titel: "Wie heft de importheffing?", tekst: "België — om de eigen Belgische boterboeren te beschermen tegen goedkope Nederlandse boter." },
            { titel: "Wie betaalt de heffing eerst?", tekst: "De Belgische importeur (degene die de boter NL→BE invoert). Hij betaalt het bij de Belgische douane voor hij de boter mag verkopen." },
            { titel: "Aan wie geeft die de kosten door?", tekst: "Hij verhoogt zijn verkoopprijs in BE → de BE-consument betaalt indirect mee via duurdere boter in de Belgische winkel." },
          ],
          woorden: [
            { woord: "importheffing", uitleg: "Belasting die je betaalt op een product dat je INVOERT vanuit een ander land. De ontvangende overheid heft het." },
            { woord: "doorberekenen", uitleg: "De kosten die jij maakt, optellen bij je verkoopprijs zodat de KOPER het uiteindelijk betaalt." },
            { woord: "importeur", uitleg: "Bedrijf dat goederen uit het buitenland naar het eigen land haalt om te verkopen." },
            { woord: "beschermingsmaatregel", uitleg: "Maatregel om eigen producenten (bv. boterboeren) te beschermen tegen goedkope import — heffing of quotum." },
          ],
          theorie: "**Hoe werkt een importheffing?**\n1. Land X heft een belasting op product P uit land Y\n2. De importeur in land X betaalt de heffing bij de douane\n3. De importeur verhoogt zijn verkoopprijs → eindkoper betaalt indirect mee\n4. Buitenlandse producent (in land Y) merkt er weinig van — die krijgt nog steeds zijn prijs\n\nDoel: import duurder maken zodat eigen producenten (in land X) beter kunnen concurreren.",
          voorbeelden: [
            { type: "vroeger", tekst: "België 1950: NL-boter werd duurder gemaakt zodat BE-boter aantrekkelijker werd voor Belgische klanten." },
            { type: "nu", tekst: "EU heft heffing op Chinese fietsen → Chinese fiets in EU-winkel is duurder, EU-fiets aantrekkelijker." },
          ],
          basiskennis: [
            { onderwerp: "Wat is import?", uitleg: "Goederen IN het land halen vanuit het buitenland. Tegenovergestelde van export (uit het land verkopen)." },
          ],
          niveaus: {
            basis: "BE-overheid heft → BE-importeur betaalt → BE-consument betaalt indirect via duurdere boter. Antwoord D.",
            simpeler: "Stel je voor: BE-importeur Frans haalt boter uit NL. BE-douane zegt 'jij moet €0,50 per kilo extra betalen'. Frans rekent dat door: in BE-winkel kost de boter nu €0,50 meer per kilo. De BE-consument betaalt dat. Niemand in NL doet eraan mee.",
            nogSimpeler: "BE heft = BE-importeur betaalt eerst = BE-consument betaalt uiteindelijk = D.",
          },
        },
      },
    ],
  },
  // ─── Vraag 36 — Influencer-beïnvloeding ─────────────────
  {
    title: "Vraag 36 — sociale vs commerciële beïnvloeding",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 1, vraag 36. Doorklik voor de Pincode-uitleg in **Ondernemen** (stap 'Doelgroep en marketing').",
    emoji: "🎓",
    checks: [
      {
        q: "Volgers van influencers hebben het gevoel dat zij een intieme band hebben met de influencers die zij volgen, een soortgelijke band als met een vriend of familielid. De beïnvloeding van influencers noemen we sociale beïnvloeding. Is er ook sprake van commerciële beïnvloeding?",
        options: [
          "Ja, het is beïnvloeding door consumenten met winstoogmerk.",
          "Ja, het is beïnvloeding door producenten met winstoogmerk.",
          "Nee, het is beïnvloeding door consumenten zonder winstoogmerk.",
          "Nee, het is beïnvloeding door producenten zonder winstoogmerk.",
        ],
        answer: 1,
        wrongHints: [
          "Wie betaalt de influencer — een consument of een bedrijf?",
          null,
          "Als bedrijven ervoor BETALEN, is er dan geen winstoogmerk?",
          "Waarom zou een bedrijf een influencer betalen als er niets te winnen viel?",
        ],
        explanation: "Sociale beïnvloeding = via een persoonlijke band (vriend, familie, idool). Commerciële beïnvloeding = met een verkoop-doel, betaald door een producent (bedrijf), met winstoogmerk. Influencers vallen onder ALLEBEI: volgers ervaren een sociale band, MAAR het bedrijf betaalt de influencer om te verkopen → producent + winstoogmerk = ook commerciële beïnvloeding.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag 36",
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
        // Pilot 2026-05-10: dynamisch uitlegpad — Mark wens (blauwdruk economie)
        uitlegPad: {
          // STAP 1 — Stap-voor-stap door de vraag
          stappen: [
            { titel: "Lees de vraag rustig", tekst: "De vraag begint met een voorbeeld over influencers. Lees eerst dat voorbeeld voor je naar de antwoord-opties kijkt." },
            { titel: "Wat WORDT al verteld?", tekst: "De vraag vertelt jou al dat de invloed van influencers SOCIALE beïnvloeding heet (omdat volgers een persoonlijke band ervaren). Dat hoef je niet zelf te bedenken." },
            { titel: "Wat MOET je beantwoorden?", tekst: "De vraag is: is er ÓÓK sprake van COMMERCIËLE beïnvloeding? Een ja/nee met de juiste reden eronder." },
            { titel: "Welke 4 opties zijn er?", tekst: "Elke optie heeft 2 keuzes: (1) ja of nee, en (2) wie beïnvloedt en met of zonder winstoogmerk. Kies eerst ja/nee, dan wordt het kiezen makkelijker." },
            { titel: "Denk aan: wie betaalt de influencer?", tekst: "Een influencer krijgt geld van bedrijven om producten aan te prijzen. Bedrijven (producenten) willen meer verkopen → dat is winst maken → dus winstoogmerk." },
          ],
          // STAP 2 — Moeilijke woorden
          woorden: [
            { woord: "intieme band", uitleg: "Een gevoel van persoonlijke nabijheid, zoals met een vriend." },
            { woord: "sociale beïnvloeding", uitleg: "Iemand beïnvloedt jouw mening via een persoonlijke band: een vriend, familielid of idool dat je vertrouwt. Geen verkoop-doel." },
            { woord: "commerciële beïnvloeding", uitleg: "Iemand probeert je iets te laten KOPEN. Een bedrijf (producent) betaalt voor reclame, en wil daarmee winst maken. = met winstoogmerk." },
            { woord: "winstoogmerk", uitleg: "Het doel om er GELD aan te verdienen. Een bakker bakt brood met winstoogmerk; je moeder bakt voor jou ZONDER winstoogmerk." },
            { woord: "producent", uitleg: "Een bedrijf of persoon die iets MAAKT om te verkopen. Bv. Coca-Cola, Nike, een boer." },
            { woord: "consument", uitleg: "Iemand die iets KOOPT en gebruikt. Jij bent consument als je een blikje cola koopt." },
          ],
          // STAP 3 — Theorie achter de vraag
          theorie: "**Twee soorten beïnvloeding in economie:**\n\n• **Sociale beïnvloeding** = invloed via een persoonlijke band. Geen winstoogmerk. Voorbeeld: je vriend zegt 'kijk deze film'.\n\n• **Commerciële beïnvloeding** = invloed met een verkoop-doel. Wel winstoogmerk. Voorbeeld: een TV-spotje voor cola.\n\n**Bij influencers gebeuren ze ALLEBEI tegelijk:**\n• Volgers VOELEN een sociale band ('zij is mijn online-vriendin')\n• MAAR: het bedrijf BETAALT de influencer om producten aan te prijzen → dat is commercieel\n\nDus: het kan ÓÓK commerciële beïnvloeding zijn, terwijl het tegelijk sociale beïnvloeding is.",
          // STAP 4 — Eenvoudige voorbeelden
          voorbeelden: [
            { type: "sociaal", tekst: "Je zus zegt: 'Dit boek is super!' → sociale beïnvloeding (geen geld erbij betrokken)." },
            { type: "commercieel", tekst: "Een radio-reclame zegt: 'Koop nu Pepsi!' → commerciële beïnvloeding (Pepsi betaalt om jou te overtuigen)." },
            { type: "beide", tekst: "Een influencer drinkt op video een blikje energy drink — gesponsord. Volgers denken: 'mijn favoriete YouTuber drinkt het' (sociaal). Maar de YouTuber krijgt €5.000 van het merk (commercieel)." },
          ],
          // STAP 5 — Basiskennis (wat moet je al weten?)
          basiskennis: [
            { onderwerp: "Wie is wie in de markt?", uitleg: "Producent maakt + verkoopt. Consument koopt + gebruikt. De influencer hoort hier bij de PRODUCENT-kant — hij/zij helpt het bedrijf verkopen." },
            { onderwerp: "Wat betekent 'met winstoogmerk'?", uitleg: "Met de bedoeling er geld mee te verdienen. Een bedrijf werkt ALTIJD met winstoogmerk. Vrienden/familie helpen je meestal ZONDER winstoogmerk." },
          ],
          // STAP 6 — 3 niveaus van uitleg
          niveaus: {
            basis: "Influencers worden BETAALD door bedrijven (producenten) om producten aan te prijzen. Bedrijven willen meer verkopen = winst. Dus: het IS ook commerciële beïnvloeding (door producenten, met winstoogmerk) → antwoord B.",
            simpeler: "Stel: een YouTuber maakt een video over een blikje energy drink. Volgers vertrouwen die YouTuber (= sociaal). MAAR het merk heeft de YouTuber betaald om dat blikje te tonen (= commercieel). Allebei tegelijk! De YouTuber werkt voor het merk = doet PRODUCENT-werk. Het merk verdient eraan = WINSTOOGMERK. Antwoord B: 'Ja, beïnvloeding door producenten met winstoogmerk'.",
            nogSimpeler: "Heel kort: bedrijf betaalt influencer → influencer = werkt voor bedrijf = producent-kant. Bedrijf wil verkoop = winst. Dus: JA + producenten + winstoogmerk = optie B.",
          },
        },
      },
    ],
  },
  // ─── Vraag 38 — K2 bv marktvorm ──────────────────────────
  {
    title: "Vraag 38 — heterogene producten + veel concurrenten",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 1, vraag 38. Doorklik voor de Pincode-uitleg in **Ondernemen** (stap 'Macht op de markt').",
    emoji: "🎓",
    checks: [
      {
        q: "K2 bv biedt heterogene producten aan en er zijn veel concurrenten op de markt. Van welke marktvorm is hier sprake?",
        options: [
          "monopolie",
          "monopolistische concurrentie",
          "oligopolie",
          "volkomen concurrentie",
        ],
        answer: 1,
        wrongHints: [
          "Monopolie = 1 aanbieder. Hier zijn er veel.",
          null,
          "Oligopolie = enkele grote spelers. Hier zijn er veel.",
          "Volkomen concurrentie = veel aanbieders + HOMOGeen product. Hier zijn de producten heterogeen (verschillend).",
        ],
        explanation: "**Monopolistische concurrentie** = veel aanbieders + HETEROGENE producten (verschillende merken, kwaliteiten, design). Bv. kledingmerken, kappers, restaurants. Elke aanbieder heeft een 'klein monopolie' op zijn unieke product, maar concurreert met vele anderen. Past precies bij K2 bv.",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag 38",
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
        uitlegPad: {
          stappen: [
            { titel: "Wat staat er over K2 bv?", tekst: "Twee feiten: (1) heterogene producten = elk product is anders, (2) veel concurrenten op de markt." },
            { titel: "Welke 4 marktvormen kennen we?", tekst: "Monopolie, oligopolie, monopolistische concurrentie, volkomen concurrentie. Elk verschilt in 'aantal aanbieders' en 'product gelijk of niet'." },
            { titel: "Welke past?", tekst: "Veel aanbieders → niet monopolie (1) of oligopolie (paar). Heterogene producten → niet volkomen concurrentie (homogeen). Dat laat MONOPOLISTISCHE concurrentie over." },
          ],
          woorden: [
            { woord: "marktvorm", uitleg: "Beschrijving van hoe een markt werkt: hoeveel aanbieders, en of de producten hetzelfde of verschillend zijn." },
            { woord: "heterogene producten", uitleg: "Verschillende producten — elk merk/aanbieder heeft iets unieks (kwaliteit, design, smaak). Tegenovergestelde van homogeen (allemaal hetzelfde)." },
            { woord: "homogene producten", uitleg: "Alle producten zijn precies hetzelfde — bv. tarwe, ruwe olie, suiker. Klant kiest puur op prijs." },
            { woord: "monopolistische concurrentie", uitleg: "Veel aanbieders maar elke aanbieder heeft een uniek product. Bv. kledingmerken, kappers, restaurants." },
            { woord: "oligopolie", uitleg: "Een paar grote aanbieders. Bv. supermarkt-ketens, telecomproviders." },
          ],
          theorie: "**4 marktvormen:**\n\n| | Veel aanbieders | Weinig | 1 |\n|---|---|---|---|\n| **Homogeen** | volkomen concurrentie | — | — |\n| **Heterogeen** | monopolistische concurrentie | oligopolie | monopolie |\n\nK2 bv: veel aanbieders + heterogeen → vak rechtsboven = monopolistische concurrentie.",
          voorbeelden: [
            { type: "monopolistisch", tekst: "Friettentenen in jouw stad: er zijn er 20, maar elke patatzaak heeft iets unieks (saus, type frietjes, sfeer)." },
            { type: "oligopolie", tekst: "Supermarktketens NL: AH, Jumbo, Lidl, Aldi, Plus — paar grote spelers." },
            { type: "monopolie", tekst: "ProRail beheert al het spoor in NL → 1 aanbieder = monopolie." },
          ],
          basiskennis: [
            { onderwerp: "Concurrentie", uitleg: "Strijd tussen aanbieders om de gunst van de klant. Hoe meer aanbieders + hoe gelijker de producten, hoe scherper de concurrentie." },
          ],
          niveaus: {
            basis: "Veel aanbieders + heterogene producten = monopolistische concurrentie. Antwoord B.",
            simpeler: "Denk aan kappers in een grote stad: er zijn er HEEL VEEL (= veel aanbieders) en elke kapper is net iets anders (= heterogeen: prijs, sfeer, ervaring). Dat is precies monopolistische concurrentie.",
            nogSimpeler: "Veel + verschillend = monopolistische concurrentie = B.",
          },
        },
      },
    ],
  },
  // ─── Vraag 42 — Winstmarge bij productie-uitbreiding ────
  {
    title: "Vraag 42 — winstmarge na productie-uitbreiding",
    explanation: "Echte examenvraag uit VMBO-GL/TL economie 2023 tijdvak 1, vraag 42. Doorklik voor de Pincode-uitleg in **Ondernemen** (stap 'Omzet, kosten en winst').",
    emoji: "🎓",
    checks: [
      {
        q: "Kaj vervolgt: \"Bovendien blijft de vraag naar onze producten stijgen, dus het is wijs om de verkoopprijs na productie-uitbreiding gelijk te houden.\" Welk gevolg voor de winstmarge van K2 bv heeft het gelijk houden van de verkoopprijs na de productie-uitbreiding?",
        options: [
          "De winstmarge daalt.",
          "De winstmarge stijgt.",
          "De winstmarge blijft gelijk.",
        ],
        answer: 1,
        wrongHints: [
          "Tegendeel — door schaalvoordelen daalt de kostprijs per stuk, niet de marge.",
          null,
          "Niet als de kostprijs daalt door schaalvoordelen.",
        ],
        explanation: "Bij productie-uitbreiding ontstaan vaak SCHAALVOORDELEN: vaste kosten verdeeld over meer producten = lagere kostprijs per stuk. Als de verkoopprijs gelijk blijft maar de kostprijs daalt, stijgt de winstmarge per product (verkoopprijs − kostprijs).",
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag 42",
        leerpadLink: { id: "pincode-ondernemen", title: "Ondernemen" },
        uitlegPad: {
          stappen: [
            { titel: "Wat verandert er voor K2?", tekst: "K2 gaat MEER produceren (uitbreiding) en houdt de verkoopprijs GELIJK." },
            { titel: "Wat is winstmarge?", tekst: "Winst per product = verkoopprijs − kostprijs. Verandert dat als prijs gelijk blijft? Alleen als kostprijs verandert." },
            { titel: "Wat doet de kostprijs bij meer productie?", tekst: "Vaste kosten (gebouw, machines) blijven hetzelfde maar worden verdeeld over MEER producten → kostprijs per stuk daalt = SCHAALVOORDEEL." },
            { titel: "Conclusie", tekst: "Verkoopprijs gelijk + kostprijs daalt → winstmarge per stuk STIJGT." },
          ],
          woorden: [
            { woord: "winstmarge", uitleg: "Hoeveel WINST je per product maakt: verkoopprijs minus kostprijs. Bv: verkoop €10, kostprijs €7, marge €3." },
            { woord: "kostprijs", uitleg: "Wat het je kost om 1 product te maken: materiaal + arbeid + deel van de vaste kosten." },
            { woord: "vaste kosten", uitleg: "Kosten die hetzelfde blijven of je nu 100 of 1000 producten maakt: huur, machines, vaste salarissen." },
            { woord: "schaalvoordeel", uitleg: "Voordeel dat je krijgt door GROTER te produceren — vaste kosten verdeeld over meer producten = goedkoper per stuk." },
          ],
          theorie: "**Verkoopprijs gelijk + meer producten:**\n\n• Vaste kosten (huur fabriek, machine) = bv €10.000 per maand\n• Bij 1.000 producten: vaste kosten per stuk = €10\n• Bij 2.000 producten: vaste kosten per stuk = €5\n→ Kostprijs daalt = winstmarge stijgt (want verkoopprijs blijft gelijk)\n\nDit heet **schaalvoordeel**. Grote bedrijven kunnen daarom vaak goedkoper produceren dan kleine.",
          voorbeelden: [
            { type: "kleine bakkerij", tekst: "Bakker maakt 100 broden/dag. Vaste kosten oven = €100. Per brood = €1 vaste kosten." },
            { type: "uitbreiding", tekst: "Bakker breidt uit naar 200 broden/dag. Zelfde oven (€100). Per brood = €0,50. Bij gelijke verkoopprijs verdient hij €0,50 méér per brood." },
          ],
          basiskennis: [
            { onderwerp: "Winst = omzet - kosten", uitleg: "Winstmarge per stuk = verkoopprijs - kostprijs per stuk. Totale winst = winstmarge × aantal stuks." },
          ],
          niveaus: {
            basis: "Meer produceren → vaste kosten per stuk dalen → kostprijs daalt → bij gelijke verkoopprijs stijgt de winstmarge. Antwoord B.",
            simpeler: "Stel: K2 maakt eerst 100 stuks. De fabriek-huur is €1.000/maand = €10 per product. Nu maakt K2 200 stuks → huur per product = €5. Verkoopprijs gelijk → winst per stuk groter. Antwoord B.",
            nogSimpeler: "Meer = goedkoper per stuk = grotere marge = B.",
          },
        },
      },
    ],
  },
];

const examenEconomie2023T1 = {
  id: "examen-economie-2023-t1",
  title: "Examen oefenen — Economie 2023 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2023-T1",
  intro:
    "5 echte examenvragen uit VMBO-GL/TL economie 2023 tijdvak 1. Per vraag de echte antwoorden, didactische denkprikkels, inhoudelijke uitleg, doorklik naar Pincode-leerpad. V9 + V30 (vereist tabel/grafiek) en V31 + V35 (volgorde-vragen) zijn weggelaten.",
  triggerKeywords: [
    "examen 2023", "examen oefenen", "echte examenvragen", "eindexamen oefenen 2023",
    "subsidie zonne-energie", "importheffing belgië boter", "influencer beïnvloeding",
    "k2 bv heterogeen", "winstmarge schaalvoordeel",
  ],
  chapters,
  steps,
};

export default examenEconomie2023T1;
