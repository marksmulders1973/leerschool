// Leerpad: Stedelijke Ontwikkeling + Verstedelijking — HAVO/VWO AK
// CSE-onderwerp. Urbanisatie-proces, stadsmodellen, megacities,
// stadsproblemen, duurzame stad.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["🏙️", "🏛️", "🌆", "🚧", "🏆"];

const chapters = [
  { letter: "A", title: "Verstedelijking-proces", emoji: "🏙️", from: 0, to: 0 },
  { letter: "B", title: "Stadstructuur + modellen", emoji: "🏛️", from: 1, to: 1 },
  { letter: "C", title: "Megacities + global cities", emoji: "🌆", from: 2, to: 2 },
  { letter: "D", title: "Stadsproblemen", emoji: "🚧", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — duurzame stad", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Verstedelijking-proces ────────────────────────────
  {
    title: "Verstedelijking — proces + termen",
    explanation:
      "**Verstedelijking (urbanisatie)** = toename van het aandeel mensen dat in steden woont.\n\n**Wereldwijde trend**:\n• 1800: ~3% in steden.\n• 1950: ~30%.\n• 2024: ~57%.\n• 2050 (prognose): ~68%.\n\n**Push + pull factoren** (zoals migratie):\n• **Push** (van platteland weg): armoede, gebrek aan werk/onderwijs/zorg, klimaatverandering, conflict.\n• **Pull** (naar stad toe): banen, onderwijs, voorzieningen, vrijheid, anonimiteit.\n\n**Fasen van urbanisatie** (Klaassen-model):\n1. **Urbanisatie**: trek naar stadscentrum + nabij gebied.\n2. **Suburbanisatie**: stadscentrum verliest, rand wint (auto-bezit + voorkeur ruimte).\n3. **Disurbanisatie**: hele stedelijke gebied verliest (mensen verder naar platteland).\n4. **Re-urbanisatie**: terug naar centrum (jong + welvarend, gentrification).\n\n**Suburbanisatie** in NL/west (jaren 1960-90):\n• Auto's + snelwegen maken pendelen mogelijk.\n• Gezinnen wilden tuin + ruimte.\n• Voorsteden groeien (Almere, Zoetermeer, Houten).\n• Stadscentrum verliest middenklasse → 'donut-effect'.\n\n**Re-urbanisatie / gentrification** (jaren 1990+):\n• Hoogopgeleide jongeren willen weer stedelijk leven.\n• Oude wijken opknappen (cafés, design-winkels).\n• Resultaat: huren stijgen → oude bewoners verdrongen.\n• Voorbeelden: Amsterdam-Noord, Rotterdam-Katendrecht, Antwerpen-Eilandje.\n\n**Counter-urbanisatie**:\n• Mensen verlaten stad voor platteland.\n• Versterkt door thuiswerk (COVID-effect).\n• Maar netto-trend wereldwijd nog steeds NAAR stad.\n\n**Verstedelijkings-tempo** verschilt:\n• **Westen**: trage verstedelijking, deels al 80% stadsbewoners → groei vlak.\n• **Globale Zuiden**: explosief — Afrika + Azië bouwen 'een Hong Kong per maand'.\n• Lagos, Karachi, Dhaka groeien met >300k inwoners/jaar.\n\n**Definitie 'stad'**:\n• Statistisch: verschilt per land (bv. >2 000 of >50 000 inwoners).\n• Geografisch: dichte bebouwing, voorzieningen.\n• Soms 'stedelijk gebied' = stad + voorsteden (metropolitan area).\n\n**Nederland** is **zeer verstedelijkt**:\n• 92% inwoners in stedelijk gebied.\n• Randstad-conurbatie: Amsterdam + Rotterdam + Den Haag + Utrecht + voorsteden = 7+ mln.\n• 'Groene Hart' tussen Randstad-steden bewust open gehouden.",
    checks: [
      {
        q: "**Verstedelijking** wereldwijd in 2024 is ongeveer:",
        options: ["57%", "30%", "75%", "10%"],
        answer: 0,
        wrongHints: [null, "Zo was het rond 1950. Is de wereld sindsdien meer of minder stedelijk geworden?", "In Nederland en Europa is het zo hoog, maar hoe zit het in Afrika en Zuid-Azië?", "Zo laag was het ruim 200 jaar geleden. Denk aan alle grote steden die er nu zijn."],
        uitlegPad: {
          stappen: [{ titel: "Tipping point ~2007", tekst: "In 2007 voor het eerst meer mensen in steden dan op platteland (50/50). Sindsdien stijgend. Schatting 2050: 68%. Azië + Afrika drijven groei." }],
          niveaus: { basis: "~57%.", simpeler: "Iets meer dan helft.", nogSimpeler: "57%" },
        },
      },
      {
        q: "**Suburbanisatie** is:",
        options: [
          "Trek van stadscentrum naar voorsteden / rand",
          "Migratie van platteland naar centrum",
          "Vertrek uit het hele stedelijke gebied naar het platteland",
          "Verdichting binnenstad"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is urbanisatie.", "Niet — disurbanisatie.", "Niet — re-urbanisatie."],
        uitlegPad: {
          stappen: [
            { titel: "Tuin + auto", tekst: "Naoorlogse trend in westen: gezinnen kopen huis met tuin in voorstad + pendelen met auto. NL: Almere (1976-) speciaal als suburbanisatie-stad gebouwd. Zoetermeer, Houten, Hoofddorp idem. Stadcentrum 'leegt' (donut-effect)." },
          ],
          niveaus: { basis: "Naar voorstad.", simpeler: "Stad-rand groeit.", nogSimpeler: "Suburb" },
        },
      },
      {
        q: "**Gentrification** = ?",
        options: [
          "Hoogopgeleide jongeren trekken naar oude wijken → huren stijgen → oude bewoners verdrongen",
          "Nieuwe woonwijken bouwen aan de rand van de stad voor jonge gezinnen",
          "Rijke bewoners verlaten de stad → huizen in oude wijken worden goedkoper",
          "Oude wijken slopen → bewoners verhuizen naar nieuwbouw in voorsteden"
        ],
        answer: 0,
        wrongHints: [null, "Dat is uitbreiding van de stad (suburbanisatie), geen verandering in een bestaande wijk.", "Bij gentrification wordt een wijk juist duurder — wie komt er dan wonen?", "Bij gentrification blijven de oude panden juist staan en worden ze opgeknapt."],
        uitlegPad: {
          stappen: [
            { titel: "Verhitting woningmarkt", tekst: "Voorbeelden: Brooklyn (NYC) ooit arbeiderswijk, nu hipster-paradijs. Amsterdam-Noord ooit volkswijk, nu yuppie-buurt. Voordeel: investering + leefbaarheid. Nadeel: oorspronkelijke bewoners kunnen de huur niet meer betalen en moeten hun wijk uit." },
          ],
          niveaus: { basis: "Verdringing door welvaart.", simpeler: "Wijken duurder = arme weg.", nogSimpeler: "Gentr" },
        },
      },
      {
        q: "Welke regio heeft de **explosiefste verstedelijking** vandaag?",
        options: [
          "Afrika ten zuiden van de Sahara",
          "Noordwest-Europa, zoals Nederland",
          "Oost-Azië, zoals Japan en Korea",
          "Midden-Europa, zoals Duitsland"
        ],
        answer: 0,
        wrongHints: [null, "Nederland is al grotendeels verstedelijkt. Hoeveel ruimte is er nog voor groei?", "De bevolking van Japan krimpt. Waar groeit de bevolking het snelst?", "In Duitsland woont al zo'n driekwart in steden. Waar woont nog een groot deel op het platteland?"],
        uitlegPad: {
          stappen: [
            { titel: "Demografische + economische druk", tekst: "Afrika: jonge bevolking + landbouw mechaniseert → mensen trekken naar steden. Lagos van 200k (1950) → ~21 mln vandaag → 35 mln in 2050 verwacht. Dhaka, Karachi, Kinshasa idem. Infrastructuur kan tempo niet bijhouden → krottenwijken." },
          ],
          niveaus: { basis: "Afrika.", simpeler: "Sub-Sahara Afrika snel.", nogSimpeler: "Afrika" },
        },
      },
      {
        q: "**Counter-urbanisatie** is:",
        options: [
          "Mensen verlaten stad richting platteland",
          "Mensen trekken van platteland naar stad",
          "Mensen trekken naar een megacity",
          "Steden bouwen steeds meer hoogbouw"
        ],
        answer: 0,
        wrongHints: [null, "Dat is gewone urbanisatie. Wat betekent 'counter' (tegen)?", "Een megacity is juist de grootste stad. Gaat counter-urbanisatie die kant op?", "Hoogbouw gaat over bouwen, niet over verhuizen. Welke kant trekken de mensen op?"],
        uitlegPad: {
          stappen: [
            { titel: "Trend versterkt door COVID + thuiswerk", tekst: "Sommige hoogopgeleiden + welvarende families verlaten dure stad voor platteland/kleine stad. Vereist hoge huizenprijs in stad + thuiswerk-mogelijkheid. Beperkt fenomeen — netto verstedelijkt de wereld nog steeds." },
          ],
          niveaus: { basis: "Van stad weg.", simpeler: "Stad verlaten.", nogSimpeler: "Anti-stad" },
        },
      },
    ],
  },

  // ─── B. Stadstructuur + modellen ──────────────────────────
  {
    title: "Stadstructuur — modellen Burgess + Hoyt + Multinucleair",
    explanation:
      "**Hoe is een stad opgebouwd?** Geografen ontwierpen modellen.\n\n**1. Burgess-Concentrische-Ringen-Model** (1925, Chicago):\n• **Ring 1 (CBD)**: Central Business District = centrum met kantoren, winkels.\n• **Ring 2**: overgangszone — oude industrie, vervallen woningen (NL: 19e-eeuwse arbeiderswijken).\n• **Ring 3**: arbeiderswijken.\n• **Ring 4**: betere woningen (middenklasse).\n• **Ring 5**: pendelaars-zone (voorsteden).\n• Aanname: stad groeit RADIAAL uit centrum.\n\n**2. Hoyt-Sector-Model** (1939):\n• Stad groeit in **sectoren** vanuit centrum.\n• Sectoren volgen vaak transport-assen (treinrails, snelwegen).\n• Bv. rijke wijken langs goede transport-assen, fabrieken langs spoor.\n• Realistischer dan ringen.\n\n**3. Harris-Ullman Multinucleair Model** (1945):\n• Stad heeft meerdere centra (nuclei): hoofdcentrum + sub-centra.\n• Bv. universiteits-buurt, industrieel park, winkel-cluster — elk eigen 'centrum'.\n• Bv. Amsterdam: Centrum + Zuidas (zakelijk) + Bijlmer + Noord — meerdere kernen.\n\n**4. Edge City** (post-1980, Garreau):\n• Nieuwe centra ontstaan AAN RAND van stad rond snelwegen-knooppunten.\n• Bv. Reading-Berkshire (Londen-edge), Tysons Corner (Washington-edge).\n• Steeds meer kantoren + winkels DAAR ipv binnenstad.\n\n**CBD (Central Business District)**:\n• Hoge grondprijzen → hoogbouw.\n• Kantoren + grote winkels + restaurants.\n• Weinig bewoners (verlaten 's avonds — 'donut-effect').\n• Goede OV-verbinding.\n• Bv. La Défense (Parijs), Canary Wharf (Londen), Zuidas (Amsterdam).\n\n**Land-use** (grondgebruik):\n• Hoge huur in centrum → kantoren + commercie.\n• Lager naar rand → wonen.\n• Industriële gebieden bij transport (haven, spoor, weg).\n• Recreatie-zones (parken, golfbanen).\n\n**NL-specifieke patronen**:\n• Historische binnenstad met grachtenpanden (Amsterdam, Utrecht, Delft).\n• 19e-eeuwse 'gordel' (Pijp, Oud-Zuid Amsterdam).\n• 20e-eeuwse uitbreidingswijken (Bijlmer, Tuinsteden).\n• 21e-eeuwse herontwikkeling (Amsterdam-Noord, Katendrecht Rotterdam).\n\n**Krottenwijken** (slums, favela's, township):\n• In globale-zuid steden: 1 mld mensen wereldwijd.\n• Vaak op rand of risicovolle plekken (hellingen, overstromingsgebied).\n• Geen formele eigendomsrechten, geen of slechte infrastructuur.\n• Voorbeelden: Dharavi (Mumbai), Khayelitsha (Kaapstad), Rocinha (Rio).\n• Wel innovatieve sociale netwerken + economische dynamiek.\n\n**Verschillen tussen Westerse + Niet-Westerse steden**:\n• Westers: planning + zonering, regulering, kapitaal-intensief.\n• Niet-westers: vaak informele groei aan rand, hoge dichtheid in centrum.",
    checks: [
      {
        q: "**CBD** staat voor:",
        options: [
          "Central Business District",
          "Centraal Bestuur Departement",
          "Centrale Bouw Dienst",
          "City Bus Depot"
        ],
        answer: 0,
        wrongHints: [null, "Het is een Engelse term uit de stadsgeografie — over welk deel van de stad gaat het?", "Denk aan het zakelijke hart van de stad, niet aan een overheidsdienst.", "Het gaat om een deel van de stad met kantoren en winkels, niet om vervoer."],
        uitlegPad: {
          stappen: [{ titel: "Zakelijk centrum", tekst: "Centrum met hoofdkantoren, grote winkels, restaurants. Hoge grondprijzen → hoogbouw. NL: Zuidas (A'dam-zuid), Beurs/Damrak (binnenstad). Londen: City + Canary Wharf. NYC: Manhattan-zuid." }],
          niveaus: { basis: "Central Business District.", simpeler: "Centrum kantoren.", nogSimpeler: "CBD" },
        },
      },
      {
        q: "**Burgess-model** beschrijft stad als:",
        options: [
          "Concentrische ringen rond het centrum",
          "Sectoren langs uitvalswegen en spoor",
          "Meerdere losse kernen in de stad",
          "Een rasterpatroon van rechte straten"
        ],
        answer: 0,
        wrongHints: [null, "Sectoren als taartpunten horen bij het model van Hoyt. Hoe zag Burgess de stad?", "Meerdere kernen is het multinucleaire model. Hoe zag Burgess de stad?", "Een rasterplan zegt iets over straten, niet over zones. Hoe deelde Burgess de stad in?"],
        uitlegPad: {
          stappen: [
            { titel: "Chicago 1925", tekst: "5 ringen: CBD → overgang → arbeiders → middenklasse → pendelaars. Aanname: stad groeit RADIAAL. Eenvoudig maar deels achterhaald. Werkt nog deels voor oude Europese steden. Niet voor moderne edge-cities + meerdere-centrum-steden." },
          ],
          niveaus: { basis: "Ringen.", simpeler: "Concentrische cirkels.", nogSimpeler: "Ringen" },
        },
      },
      {
        q: "**Edge City** is:",
        options: [
          "Nieuw centrum aan de stadsrand bij de snelweg",
          "Krottenwijk aan de rand van de stad",
          "Het oude historische stadscentrum",
          "Toeristische trekpleister buiten de stad"
        ],
        answer: 0,
        wrongHints: [null, "Een krottenwijk heet ook wel favela of slum. Is dat hetzelfde als een edge city?", "Edge betekent rand. Ligt het oude centrum aan de rand?", "Gaat het bij een edge city om toerisme of om iets anders?"],
        uitlegPad: {
          stappen: [
            { titel: "Garreau 1991", tekst: "Vooral in VS sinds 1980: nieuwe kantoor- + winkelclusters AAN RAND, vaak rond snelweg-knooppunt + luchthaven. Bv. Reston (Washington), Schaumburg (Chicago), Walnut Creek (San Francisco). Mensen werken + winkelen DAAR, hoeven niet meer naar binnenstad." },
          ],
          niveaus: { basis: "Nieuw centrum aan rand.", simpeler: "Subcentrum bij snelweg.", nogSimpeler: "Edge" },
        },
      },
      {
        q: "**Donut-effect** in westerse steden:",
        options: [
          "Stadscentrum loopt leeg terwijl de rand groeit",
          "Het centrum groeit vooral de hoogte in",
          "Centrum en rand groeien even hard",
          "Rand loopt leeg terwijl het centrum groeit"
        ],
        answer: 0,
        wrongHints: [null, "Hoogbouw is juist een teken van drukte in het centrum — denk aan het gat in een donut.", "Bij een donut zit er een gat in het midden — groeit alles dan even hard?", "Andersom: waar zit het gat van de donut?"],
        uitlegPad: {
          stappen: [
            { titel: "Leeg gat in midden", tekst: "Naoorlogs: gezinnen verhuizen naar voorsteden. Centrum verliest woningen, alleen kantoor + winkel. Avond: centrum LEEG. Vandaag deels omgekeerd door gentrification + re-urbanisatie." },
          ],
          niveaus: { basis: "Centrum leeg, rand vol.", simpeler: "Lege binnenstad 's avonds.", nogSimpeler: "Donut" },
        },
      },
      {
        q: "**Dharavi** (Mumbai) is een:",
        options: [
          "Een van de grootste krottenwijken van Azië",
          "Luxe villawijk aan de kust van Mumbai",
          "Toeristisch oud centrum van Mumbai",
          "Bedrijventerrein zonder bewoners"
        ],
        answer: 0,
        wrongHints: [null, "Dharavi is extreem dicht bebouwd met kleine, zelfgebouwde huisjes. Past 'villawijk' daarbij?", "Er komen wel toeristen, maar vooral wonen en werken er honderdduizenden mensen. Wat voor wijk is het?", "Er wordt veel gewerkt, maar er wonen ook heel veel mensen — wat voor wijk is het dan?"],
        uitlegPad: {
          stappen: [
            { titel: "Slum-economie", tekst: "1-2 mln mensen op 2 km². Verbazend economisch actief: ~$1 mld jaaromzet uit pottenbakkerijen, recycling, kledingindustrie. Geen formele woningen, slecht sanitair. Bekend uit film 'Slumdog Millionaire'. Indiase overheid plant herontwikkeling." },
          ],
          niveaus: { basis: "Grote krottenwijk.", simpeler: "Mumbai-slum.", nogSimpeler: "Dharavi" },
        },
      },
    ],
  },

  // ─── C. Megacities + global cities ────────────────────────
  {
    title: "Megacities + Global cities",
    explanation:
      "**Megacity** = stedelijk gebied met **>10 mln inwoners**.\n\n**Top-10 megacities (2024)**:\n1. **Tokyo-Yokohama**: ~37 mln.\n2. **Delhi**: ~33 mln.\n3. **Shanghai**: ~29 mln.\n4. **Dhaka**: ~24 mln.\n5. **São Paulo**: ~23 mln.\n6. **Cairo**: ~22 mln.\n7. **Mexico City**: ~22 mln.\n8. **Beijing**: ~22 mln.\n9. **Mumbai**: ~21 mln.\n10. **Osaka**: ~19 mln.\n\n**Trend**: in 1950 had alleen NYC + Tokyo >10 mln. Vandaag ~35 megacities, in 2030 verwacht ~43. Vrijwel alle nieuwe in globale-zuid.\n\n**Global City (alpha-stad)**:\n• Concept van Saskia Sassen (1991).\n• Steden die wereldeconomie aansturen.\n• Top: New York, Londen, Tokyo, Hong Kong, Singapore, Parijs, Shanghai.\n• Niet altijd grootste, wel meest invloedrijk.\n• Kenmerken:\n  - Hoofdkantoren multinationals.\n  - Internationale financiële diensten.\n  - Hub voor lucht + zee + data.\n  - Cultureel-icoon (musea, theaters).\n  - Universiteiten van wereldklasse.\n\n**Megacity vs global city**:\n• Lagos = megacity maar geen global city (regionaal belang).\n• Singapore = klein (5,9 mln) maar global city.\n• Mumbai = beide.\n\n**Voordelen grote steden**:\n• **Schaalvoordelen**: meer mensen → meer specialisatie → meer innovatie.\n• Universiteiten + ziekenhuizen + cultuur bereikbaar.\n• Werkgelegenheid in vele sectoren.\n• Diversiteit + tolerantie.\n• Trends starten in steden + verspreiden.\n\n**Nadelen**:\n• **Verkeers-files**: Jakarta verliest 7% BBP aan files.\n• **Vervuiling**: New Delhi luchtvervuiling erger dan Pekings dieptepunt.\n• **Hoge huren**: SF, NYC, Londen, Amsterdam onbetaalbaar voor middenklasse.\n• **Sociale ongelijkheid**: rijke + arme binnen kilometer naast elkaar.\n• **Druk op infrastructuur**: water, riool, elektriciteit, openbaar vervoer.\n• **Brain-drain platteland**: jong talent vertrekt.\n\n**Smart Cities**:\n• Steden die data + IoT gebruiken voor efficiëntie.\n• Voorbeelden: Singapore (sensoren overal), Songdo (Zuid-Korea, gepland), Barcelona (sensor-netwerk).\n• Diensten: real-time verkeer, slimme straatverlichting, vuilnis-sensoren.\n\n**Mexico City**:\n• ~22 mln in Valle de México.\n• Lucht extreem vervuild (oude auto's + ligging in vallei).\n• Water-tekort + zinkende grond.\n• Sterke kunst + cultuur.\n\n**Tokyo-Yokohama**:\n• Grootste metropolitan area ter wereld.\n• Extreme dichtheid + perfect openbaar vervoer.\n• Vergrijzing: bevolking begint te krimpen.\n\n**Lagos** (Nigeria):\n• Snelst groeiend wereldwijd.\n• Krottenwijken + miljardairs naast elkaar.\n• Prognose: 100 mln in 2100?",
    checks: [
      {
        q: "**Megacity** is een stad met:",
        options: [">10 miljoen inwoners", ">1 miljoen inwoners", ">100 miljoen inwoners", ">1 miljard inwoners"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 'grote stad'.", "Dat is meer dan heel Duitsland. Bestaat er zo'n stad?", "Zoveel mensen wonen er in heel Europa niet eens. Kan één stad dat hebben?"],
        uitlegPad: {
          stappen: [{ titel: "VN-definitie", tekst: ">10 mln in stedelijk gebied (incl. voorsteden, niet alleen stadsgrens). 1950: alleen NYC + Tokyo. 2024: ~35 stuks. Vrijwel alle nieuwe in globale-zuid (Lagos, Dhaka, Karachi)." }],
          niveaus: { basis: ">10 mln.", simpeler: "10 miljoen+.", nogSimpeler: "10M" },
        },
      },
      {
        q: "Wat is een **'global city'** (Sassen)?",
        options: [
          "Stad die de wereldeconomie aanstuurt",
          "Toeristische topbestemming van de wereld",
          "Stad met meer dan 5 miljoen inwoners",
          "Hoofdstad van een groot, machtig land"
        ],
        answer: 0,
        wrongHints: [null, "Veel toeristen maakt een stad nog niet invloedrijk. Waar gaat het Sassen om?", "Grootte alleen zegt weinig: Lagos is groot maar geen global city. Wat dan wel?", "New York is geen hoofdstad, maar wel een global city. Waar gaat het dan om?"],
        uitlegPad: {
          stappen: [
            { titel: "Drie-stad-as", tekst: "Sassen identificeerde NY-LON-TOK als top-3: financiële markten wereldwijd lopen door deze drie. Vandaag uitgebreid (Hongkong, Singapore, Shanghai, Frankfurt). Hub-functie voor multinationals, banken, internationale verbindingen." },
          ],
          niveaus: { basis: "Wereldeconomie-leider.", simpeler: "Stad die wereld aanstuurt.", nogSimpeler: "Global" },
        },
      },
      {
        q: "Welke is **grootste metropolitan area** ter wereld?",
        options: ["Tokyo-Yokohama", "Mumbai", "New York", "Londen"],
        answer: 0,
        wrongHints: [null, "Niet — kleiner.", "Veel kleiner.", "Veel kleiner."],
        uitlegPad: {
          stappen: [{ titel: "Stedelijk gigant", tekst: "Tokyo-Yokohama-Kawasaki: ~37 mln. Op één plek 2x NL-bevolking. Goed georganiseerd: een van 's werelds beste openbaarvervoernetten (Yamanote-lijn elke 3 min). Maar bevolking krimpt (Japan-veroudering)." }],
          niveaus: { basis: "Tokyo.", simpeler: "Tokyo metropool.", nogSimpeler: "Tokyo" },
        },
      },
      {
        q: "**Lagos** (Nigeria) is bijzonder door:",
        options: [
          "Een van de snelst groeiende megacities ter wereld",
          "Een van de oudste steden ter wereld",
          "Het hoogste inkomen per inwoner van Afrika",
          "Het beste openbaar vervoer van Afrika"
        ],
        answer: 0,
        wrongHints: [null, "Niet — er zijn veel oudere steden.", "Niet — laag BBP/capita.", "Niet — files zijn extreem."],
        uitlegPad: {
          stappen: [
            { titel: "Van 200k naar 21 mln in 70 jaar", tekst: "1950: 200 000 inwoners. 2024: ~21 mln. Prognose 2050: 35 mln (in 2100 mss 100 mln). Een van de snelst groeiende steden ter wereld. Mix van miljardairs en grootste krottenwijken. Olie + nieuwe industrie + Nigeriaanse film (Nollywood) trekken instroom." },
          ],
          niveaus: { basis: "Snelst groeiend.", simpeler: "Lagos = boom city.", nogSimpeler: "Snel" },
        },
      },
      {
        q: "**Smart City** gebruikt:",
        options: [
          "Data en sensoren voor slimmer beheer",
          "Alleen ouderwetse planning op papier",
          "Zo min mogelijk technologie in de stad",
          "Een verbod op auto's in het centrum"
        ],
        answer: 0,
        wrongHints: [null, "Wat zegt het woord 'smart' over de hulpmiddelen die een stad gebruikt?", "Een slimme stad zonder technologie: klopt dat?", "Een autoverbod kan, maar is dat wat een stad 'smart' maakt?"],
        uitlegPad: {
          stappen: [
            { titel: "Data-gedreven beheer", tekst: "Singapore-voorbeeld: sensoren in straten (verkeer, lucht, vuilnis), apps voor parkeren, gemeentelijke data open beschikbaar. Songdo (KR) gepland als smart city-totaal. Barcelona, Amsterdam (Smart-City-tag) experimenteren met sensor-netwerken." },
          ],
          niveaus: { basis: "Tech voor stad.", simpeler: "Sensoren + data + AI.", nogSimpeler: "Smart" },
        },
      },
    ],
  },

  // ─── D. Stadsproblemen ────────────────────────────────────
  {
    title: "Stadsproblemen — files, vervuiling, ongelijkheid, krapte",
    explanation:
      "**Grootste uitdagingen voor steden**:\n\n**1. Verkeer + Bereikbaarheid**:\n• File-tijd kost economie miljarden. Jakarta: 7% BBP.\n• Auto's domineren nog in veel steden (LA, Houston).\n• Oplossingen: metro/tram/bus-systemen (Curitiba-BRT, Tokyo-rail), fietspaden (Amsterdam, Kopenhagen), tolheffing centrum (London, Singapore).\n• Toekomst: zelfrijdende auto's, deelmobiliteit, Hyperloop.\n\n**2. Luchtvervuiling**:\n• WHO: 99% wereld-bevolking ademt lucht boven de normen.\n• PM2.5-deeltjes uit verkeer + industrie + verbranding.\n• Delhi piek (winter) AQI 500+ (gevaarlijk). Beijing verbeterd door beleid.\n• Veroorzaakt ~7 mln vroegtijdige doden/jaar.\n• Oplossingen: elektrische voertuigen, OV, schone industrie, beplanting.\n\n**3. Woon-crisis**:\n• Wereldwijd 1 mld in krottenwijken.\n• In rijke landen huizen-tekort: NL ~400k tekort 2024.\n• Hoge huren in alpha-cities (SF, NYC, London, Amsterdam) → middenklasse verdrongen.\n• Oplossingen: bouw-versnelling, sociaal-woningbeleid, regulering Airbnb, gemixte projecten.\n\n**4. Klimaat-impact**:\n• Steden veroorzaken 70% CO₂-uitstoot wereldwijd.\n• Heat-island-effect: stad 2-5°C warmer dan platteland → versterkt door beton + auto's, minder groen.\n• Kuststeden (NYC, Miami, Amsterdam, Mumbai) kwetsbaar voor zeespiegelstijging.\n• Oplossingen: groene daken, parken, watermanagement, geveltuinen.\n\n**5. Watercrisis**:\n• Day Zero in Kaapstad 2018 — bijna zonder water.\n• Mexico City zinkt door grondwater-onttrekking.\n• Bangkok, Jakarta zinken.\n• Oplossingen: lekkages repareren, regen-water-vangst, ontzilten zeewater (duur).\n\n**6. Sociale ongelijkheid**:\n• Rijke wijken naast krottenwijken (Rio: Copacabana naast Rocinha).\n• Toegang tot OV, scholen, parken ongelijk.\n• Gentrification verergert.\n\n**7. Criminaliteit**:\n• Niet altijd hoger in steden (varieert sterk).\n• Slum-gebieden vaak hoger drugs + geweld.\n• Maatregelen: politie-aanwezigheid, sociaal werk, jeugdcentra, banen.\n\n**8. Veroudering** (rijke steden):\n• Tokyo, Seoul: bevolking krimpt + vergrijst.\n• Lege scholen, meer ouderenzorg nodig.\n• Pensioen-druk.\n\n**9. Pandemie-kwetsbaarheid**:\n• COVID startte in stad (Wuhan) + verspreidde via vliegnetwerk + dichtheid.\n• Lockdown-impact veel groter in steden (geen tuin, kleine appartementen).\n• Maar ook: stedelijke infrastructuur (ziekenhuizen) reageert beter.\n\n**Stadsplanning-strategieën**:\n• **Compacte stad** (Jane Jacobs): dichte + gemengde wijken, voetganger-vriendelijk.\n• **15-minuten-stad** (Parijs): alles binnen 15 min lopen/fietsen.\n• **Transit-oriented development**: bouwen rond OV-knooppunten.\n• **New Urbanism**: terug naar pre-auto-stadsdesign.",
    checks: [
      {
        q: "**Heat-island-effect** in steden:",
        options: [
          "Stad warmer dan platteland",
          "Stad kouder dan platteland",
          "Stad vochtiger dan platteland",
          "Alleen 's nachts warmer"
        ],
        answer: 0,
        wrongHints: [null, "Steen en asfalt slaan zonnewarmte op. Wordt de stad daar kouder van?", "'Heat' betekent hitte. Gaat het dan om vocht?", "Het effect is 's nachts het sterkst, maar is het overdag dan weg?"],
        uitlegPad: {
          stappen: [
            { titel: "Beton + asfalt + auto's", tekst: "Beton absorbeert + houdt warmte vast. Minder bomen + parken voor verkoeling. Auto's + airconditioning produceren warmte. Resultaat: stadscentrum 2-5°C warmer dan omliggend platteland. Versterkt door klimaatverandering → hittegolven extra gevaarlijk in stad (ouderen-sterfte)." },
          ],
          niveaus: { basis: "2-5°C warmer.", simpeler: "Stad = warmer.", nogSimpeler: "Warmer" },
        },
      },
      {
        q: "Wereldwijd **veroorzaken steden** welk % van CO₂-uitstoot?",
        options: ["~70%", "~30%", "~10%", "~90%"],
        answer: 0,
        wrongHints: [null, "Steden hebben veel verkeer, fabrieken en verwarmde gebouwen. Zou dat maar een derde zijn?", "Ruim de helft van de mensen woont in steden en gebruikt daar energie. Kan het dan zo weinig zijn?", "Ook landbouw, scheepvaart en ontbossing buiten de stad stoten veel uit. Blijft er dan zo weinig over?"],
        uitlegPad: {
          stappen: [{ titel: "Energie + verkeer + industrie", tekst: "Steden verbruiken veel energie voor verlichting, koeling, transport, productie. ~70% van CO₂ komt hieruit. Steden aanpakken = cruciale klimaatactie. Daarom werken ~96 grote steden samen in de 'C40-coalitie'." }],
          niveaus: { basis: "70%.", simpeler: "Steden grootste vervuiler.", nogSimpeler: "70%" },
        },
      },
      {
        q: "**15-minuten-stad** (Parijs):",
        options: [
          "Dagelijkse voorzieningen op 15 min lopen of fietsen",
          "Een verbod op alle auto's in de hele stad",
          "Elke wijk een bus die om de 15 minuten rijdt",
          "Maximaal 15 minuten met de auto naar je werk"
        ],
        answer: 0,
        wrongHints: [null, "Minder autoverkeer is een gevolg, maar is een verbod het hoofdidee?", "Het gaat niet om hoe vaak de bus rijdt, maar om wat er dichtbij is.", "Het idee is juist mínder autoritten — hoe kom je dan bij je voorzieningen?"],
        uitlegPad: {
          stappen: [
            { titel: "Burgemeester Hidalgo 2020", tekst: "Concept: school, dokter, winkel, park, werk binnen 15 min van huis. Minder verkeer en klimaat-impact, meer sociale binding. Parijs leidende stad. Vergelijkbaar: 'Superblocks' Barcelona (verkeers-luwe wijken)." },
          ],
          niveaus: { basis: "Alles dichtbij.", simpeler: "15 min naar alles.", nogSimpeler: "15min" },
        },
      },
      {
        q: "**Kaapstad 'Day Zero'** (2018):",
        options: [
          "Stad bijna zonder drinkwater door droogte",
          "Stad urenlang zonder stroom door een storing",
          "Eerste dag van een lockdown door een pandemie",
          "Stad zwaar getroffen door een aardbeving"
        ],
        answer: 0,
        wrongHints: [null, "Kaapstad had wel stroomproblemen, maar Day Zero ging over iets anders. Wat dreigde op te raken?", "Lockdowns kwamen pas in 2020. Wat speelde er in Kaapstad in 2018?", "Kaapstad ligt niet in een aardbevingsgebied. Wat dreigde er op te raken?"],
        uitlegPad: {
          stappen: [
            { titel: "Wake-up call", tekst: "Aanhoudende droogte → stuwmeren raakten bijna leeg. Stad maakte plan om watertoevoer aan inwoners stop te zetten ('Day Zero'), inwoners moesten met emmer naar verzamelpunten. Net op tijd regende het → crisis afgewend. Een van de eerste grote steden die zoiets bijna meemaakte. Klimaatverandering maakt dit meer waarschijnlijk." },
          ],
          niveaus: { basis: "Water-crisis.", simpeler: "Bijna zonder water.", nogSimpeler: "Water" },
        },
      },
      {
        q: "Een **BRT** (Bus Rapid Transit) systeem zoals Curitiba (Brazilië):",
        options: [
          "Bussen op eigen baan met metro-achtige stations",
          "Privé-taxi's die je via een app bestelt",
          "Kleine vliegtuigjes tussen stadsdelen",
          "Treinen op een eigen spoor met stations"
        ],
        answer: 0,
        wrongHints: [null, "Waar staat de B in BRT voor?", "Is een vliegtuig openbaar vervoer binnen een stad?", "Lees de afkorting nog eens: welk voertuig zit erin?"],
        uitlegPad: {
          stappen: [
            { titel: "Goedkoper alternatief voor metro", tekst: "Curitiba 1974 pionier. Eigen bus-baan in midden weg, vooruitbetaling bij station (snelle inscheping), grote gelede bussen (ruim 200 mensen). Veel goedkoper dan metro maar bijna zelfde capaciteit. Wereldwijd gekopieerd: Bogotá, Mexico City, Istanbul, Johannesburg." },
          ],
          niveaus: { basis: "Bus op eigen baan.", simpeler: "Snelle bus-corridor.", nogSimpeler: "BRT" },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — duurzame stad + toekomst",
    explanation:
      "**Duurzame stad** = stad die voldoet aan huidige behoeften ZONDER toekomstige generaties te schaden.\n\n**Drie pijlers**:\n• **Sociaal**: leefbaar, eerlijk, inclusief, sociale binding.\n• **Economisch**: banen, betaalbare huren, kansen.\n• **Milieu**: lage CO₂, schone lucht, biodiversiteit, water.\n\n**Goede voorbeelden**:\n\n**Kopenhagen**:\n• Doel was CO₂-neutraal in 2025 (niet gehaald).\n• 50%+ verplaatsingen op fiets.\n• Fietspaden + 'cycle highways' naar voorsteden.\n• Windmolens leveren elektriciteit.\n\n**Amsterdam**:\n• Doel klimaat-neutraal 2050, halvering CO₂ 2030.\n• Auto's uit binnenstad (voorrang voor voetgangers).\n• Donut-economy-model (Kate Raworth) ingevoerd 2020.\n• Veel groen + water.\n\n**Curitiba (Brazilië)**:\n• Pionier BRT-bus (jaren 1970).\n• Slim afval-management (afval ruilen tegen voedsel).\n• Veel parken.\n• Voorbeeld voor andere globale-zuid steden.\n\n**Singapore**:\n• 'Garden City' met enorm groen-percentage.\n• Verbod op vuilnis op straat (boetes).\n• Slim watermanagement (recycling, ontzilting, reservoirs).\n• Smart-City-pionier.\n\n**Reykjavik**:\n• Bijna 100% geothermische + waterkracht-energie.\n• Verwarmt bijna alle huizen + zwembaden duurzaam.\n\n**Strategieën voor duurzame steden**:\n\n**1. Compacte stad**:\n• Dichter bouwen → minder pendelen → minder CO₂.\n• Gemengde wijken (wonen + werken + winkels) → 15-min-stad.\n\n**2. Modal shift transport**:\n• Auto's UIT, fietsen + OV IN.\n• Park+ride aan rand, dan met OV verder.\n• Auto-vrije zones (parken, voetgangersgebied).\n\n**3. Groene gebouwen**:\n• Isolatie + warmtepompen + zonnepanelen.\n• Groene daken (regenwater + verkoeling).\n• Hergebruik oude gebouwen.\n\n**4. Circulaire economie**:\n• Afval recyclen op industrieel niveau.\n• 'Cradle-to-cradle' design.\n• Reparatie-cafés, deeleconomie.\n\n**5. Sociale duurzaamheid**:\n• Sociale woningbouw mengen met markt-woningen → geen getto's.\n• Toegankelijke parken + voorzieningen voor iedereen.\n• Burgerparticipatie in planning.\n\n**Toekomst-trends**:\n• **Autonome voertuigen**: minder ruimte voor parkeren, ander stadsdesign.\n• **Vertical farms**: voedselproductie IN stad.\n• **3D-printed buildings**: snellere + goedkopere woningbouw.\n• **AI in stadsplanning**: simulaties optimaliseren verkeer + groen.\n• **Klimaat-migratie**: stedelijke groei uit klimaat-vluchtelingen wordt grote uitdaging.\n\n**Politieke discussie**:\n• 'Recht op de stad' (Lefebvre) - wie mag waar wonen?\n• Anti-Airbnb-bewegingen (verdringt bewoners).\n• Climate-justice: arme wijken extra getroffen door hitte + overstroming.\n\n**Persoonlijke handvatten**:\n• Kies fiets/OV boven auto.\n• Steun sociale woningbouw + buurt-initiatieven.\n• Stem bij gemeenteraad-verkiezingen — lokale politiek zeer impactvol.\n• Buurttuin, repair-café, kringloop-winkel: doe lokaal mee.",
    checks: [
      {
        q: "Welke stad had als doel **CO₂-neutraal in 2025**?",
        options: ["Kopenhagen", "New York", "Lagos", "Sydney"],
        answer: 0,
        wrongHints: [null, "Niet zo ambitieus.", "Niet — meer overleven.", "Pas later."],
        uitlegPad: {
          stappen: [
            { titel: "Eerste wereldstad CO₂-neutraal", tekst: "Kopenhagen werkte ~10 jaar aan dit doel: 50% verplaatsingen fiets, windkracht + biomassa, gemeentelijke gebouwen verduurzaamd. Doel in 2025 niet gehaald, maar wel veel verder dan andere wereldsteden." },
          ],
          niveaus: { basis: "Kopenhagen.", simpeler: "Kopenhagen = klimaat-leider.", nogSimpeler: "Kop" },
        },
      },
      {
        q: "Het concept **'donut-economy'** in Amsterdam:",
        options: [
          "Balans tussen basisbehoeften en grenzen van de aarde",
          "Zo veel mogelijk economische groei, zonder grenzen",
          "Bedrijven verhuizen van het centrum naar de rand",
          "Alle winkels concentreren in de binnenstad"
        ],
        answer: 0,
        wrongHints: [null, "Het model stelt juist een plafond aan wat de aarde aankan — mag groei dan onbeperkt?", "Dat is het donut-effect in de stad, iets anders dan de donut-economie.", "Het gaat om een model met een ondergrens en een bovengrens, niet om waar winkels staan."],
        uitlegPad: {
          stappen: [
            { titel: "Kate Raworth 2017", tekst: "Donut-vorm: binnenste cirkel = sociale ondergrens (geen mens zonder onderdak, eten, gezondheid, etc.). Buitenste = planetaire grens (klimaat, biodiversiteit). Economie moet TUSSEN beide ringen opereren. Amsterdam eerste stad die dit officieel omarmde (2020) als beleidskader." },
          ],
          niveaus: { basis: "Sociale + ecologische grens.", simpeler: "Tussen mens + planeet.", nogSimpeler: "Donut" },
        },
      },
      {
        q: "Een **modal shift** in stadsverkeer betekent:",
        options: [
          "Verschuiving van auto naar fiets, OV en lopen",
          "Aanleg van een nieuwe ringweg om de stad",
          "Hogere maximumsnelheid voor auto's",
          "Meer mensen die zelf een auto kopen"
        ],
        answer: 0,
        wrongHints: [null, "Een ringweg verandert de route, niet het vervoermiddel. Waar slaat 'modal' op?", "Sneller rijden verandert niet hoe je reist. Waar slaat 'modal' op?", "Ziet een stad met een modal shift meer of minder auto's?"],
        uitlegPad: {
          stappen: [
            { titel: "Cruciaal voor klimaat + lucht", tekst: "'Modus' = vervoersmiddel. 'Shift' = verschuiving. Voorbeeld: NL jaren '70 veel auto's → vanaf 1980 sterk fiets-beleid → 27% van verplaatsingen op fiets (wereldrecord). Modal shift verbetert lucht + minder CO₂ + minder ruimte voor auto's." },
          ],
          niveaus: { basis: "Verschuiving vervoer.", simpeler: "Auto naar fiets/OV.", nogSimpeler: "Modal" },
        },
      },
      {
        q: "**'Circulaire economie'** in stad betekent:",
        options: [
          "Afval wordt grondstof voor nieuwe producten",
          "Een ringweg rond de stad aanleggen",
          "Afval zo veel mogelijk verbranden",
          "Producten sneller vervangen door nieuwe"
        ],
        answer: 0,
        wrongHints: [null, "'Circulair' slaat hier niet op een rondweg — wat gaat er rond?", "Bij verbranden is de grondstof weg. Blijft er dan iets 'rondgaan'?", "Snel vervangen levert juist meer afval op. Is dat 'rond'?"],
        uitlegPad: {
          stappen: [
            { titel: "Geen lineair (maken-gebruiken-weggooien)", tekst: "In plaats van afval naar stortplaats: hergebruik, repareer, recycle. NL voorop: PET-flessen met statiegeld grotendeels gerecycled, oude kleren naar second-hand. Doel NL 2050: volledig circulaire economie." },
          ],
          niveaus: { basis: "Hergebruik continu.", simpeler: "Geen afval, alles nieuw gebruik.", nogSimpeler: "Circular" },
        },
      },
      {
        q: "Welke stad heeft bijna 100% **geothermische** + waterkracht-energie?",
        options: ["Reykjavik (IJsland)", "Lagos (Nigeria)", "Tokyo (Japan)", "Sydney (Australië)"],
        answer: 0,
        wrongHints: [null, "Lagos draait vooral op olie en gas. Waar vind je veel aardwarmte?", "Japan heeft wel vulkanen, maar Tokyo gebruikt vooral gas en kolen. Welke stad haalt bijna alles uit de natuur?", "Sydney gebruikt nog veel steenkool. Waar ligt een stad op een plaatgrens met warme bronnen?"],
        uitlegPad: {
          stappen: [
            { titel: "Natuurlijke bron", tekst: "IJsland zit op tektonische breuk → veel vulkanische activiteit + hot springs. Reykjavik (en heel IJsland) gebruikt geothermische warmte voor verwarming + waterkracht voor elektriciteit. Bijna 100% hernieuwbaar. Klein voorbeeld dat moeilijk elders te kopiëren is." },
          ],
          niveaus: { basis: "Reykjavik.", simpeler: "IJsland-hoofdstad.", nogSimpeler: "Reyk" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const stedelijkeOntwikkelingHavoVwo = {
  id: "stedelijke-ontwikkeling-havo-vwo",
  title: "Stedelijke Ontwikkeling + Verstedelijking (HAVO/VWO Aardrijkskunde)",
  emoji: "🏙️",
  level: "havo-vwo-4-5",
  subject: "aardrijkskunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Aardrijkskunde — Stedelijke Ontwikkeling (CSE-onderwerp)",
  prerequisites: [
    { id: "bevolking-migratie-aardrijkskunde", title: "Bevolking + Migratie", niveau: "vmbo-3" },
    { id: "globalisering-havo-vwo", title: "Globalisering", niveau: "havo-3F" },
  ],
  intro:
    "Stedelijke Ontwikkeling voor HAVO/VWO eindexamen — verstedelijking-proces (urbanisatie/suburbanisatie/gentrification), stadsmodellen (Burgess/Hoyt/Multinucleair), megacities + global cities, stadsproblemen (heat island, files, woon-crisis), duurzame stad-strategieën. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "verstedelijking", "urbanisatie",
    "suburbanisatie", "voorstad",
    "disurbanisatie", "re-urbanisatie",
    "gentrification",
    "counter-urbanisatie",
    "CBD", "Central Business District",
    "Burgess-model", "concentrische ringen",
    "Hoyt-sector-model",
    "multinucleair model", "Harris-Ullman",
    "Edge City",
    "donut-effect",
    "krottenwijk", "slum", "favela", "Dharavi",
    "megacity",
    "global city", "Sassen",
    "Tokyo", "Delhi", "Lagos", "Mumbai", "Mexico City",
    "smart city", "Singapore", "Songdo",
    "heat island", "stedelijk hitte-eiland",
    "luchtvervuiling",
    "PM2.5", "AQI",
    "woon-crisis",
    "Day Zero", "Kaapstad",
    "15-minuten-stad", "Parijs",
    "BRT", "Bus Rapid Transit", "Curitiba",
    "compacte stad", "Jane Jacobs",
    "transit-oriented development",
    "duurzame stad",
    "Kopenhagen klimaat",
    "Amsterdam donut",
    "Reykjavik geothermisch",
    "circulaire economie",
    "modal shift",
  ],
  chapters,
  steps,
};

export default stedelijkeOntwikkelingHavoVwo;
