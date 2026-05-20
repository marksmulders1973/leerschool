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
      "**Verstedelijking (urbanisatie)** = toename van het aandeel mensen dat in steden woont.\n\n**Wereldwijde trend**:\n• 1800: ~3% in steden.\n• 1950: ~30%.\n• 2024: ~57%.\n• 2050 (prognose): ~68%.\n\n**Push + pull factoren** (zoals migratie):\n• **Push** (van platteland weg): armoede, gebrek aan werk/onderwijs/zorg, klimaatsverandering, conflict.\n• **Pull** (naar stad toe): banen, onderwijs, voorzieningen, vrijheid, anonimiteit.\n\n**Fasen van urbanisatie** (Klaassen-model):\n1. **Urbanisatie**: trek naar stadscentrum + nabij gebied.\n2. **Suburbanisatie**: stadscentrum verliest, rand wint (auto-bezit + voorkeur ruimte).\n3. **Disurbanisatie**: hele stedelijke gebied verliest (mensen verder naar platteland).\n4. **Re-urbanisatie**: terug naar centrum (jong + welvarend, gentrification).\n\n**Suburbanisatie** in NL/west (jaren 1960-90):\n• Auto's + snelwegen maken pendelen mogelijk.\n• Gezinnen wilden tuin + ruimte.\n• Voorsteden groeien (Almere, Zoetermeer, Houten).\n• Stadcentrum verliest middenklasse → 'donut-effect'.\n\n**Re-urbanisatie / gentrification** (jaren 1990+):\n• Hoogopgeleide jongeren willen weer stedelijk leven.\n• Oude wijken opknappen (cafés, design-winkels).\n• Resultaat: huren stijgen → oude bewoners verdrongen.\n• Voorbeelden NL: Amsterdam-Noord, Rotterdam-Katendrecht, Antwerpen-Eilandje.\n\n**Counter-urbanisatie**:\n• Mensen verlaten stad voor platteland.\n• Versterkt door thuiswerk (COVID-effect).\n• Maar netto-trend wereldwijd nog steeds NAAR stad.\n\n**Verstedelijkings-tempo** verschilt:\n• **Westen**: trage verstedelijking, deels al 80% stadbewoners → groei vlak.\n• **Globale Zuiden**: explosief — Afrika + Azië bouwen 'een Hong Kong per maand'.\n• Lagos, Karachi, Dhaka groeien met >300k inwoners/jaar.\n\n**Definitie 'stad'**:\n• Statistisch: >10 000 inwoners (NL), >50 000 (sommige landen).\n• Geografisch: dichte bebouwing, voorzieningen.\n• Soms 'stedelijk gebied' = stad + voorsteden (metropolitan area).\n\n**Nederland** is **zeer verstedelijkt**:\n• 92% inwoners in stedelijk gebied.\n• Randstad-conurbatie: Amsterdam + Rotterdam + Den Haag + Utrecht + voorsteden = 7+ mln.\n• 'Groene Hart' tussen Randstad-steden bewust open gehouden.",
    checks: [
      {
        q: "**Verstedelijking** wereldwijd in 2024 is ongeveer:",
        options: ["57% in steden", "30%", "75%", "10%"],
        answer: 0,
        wrongHints: [null, "Te weinig — was 1950.", "Te veel.", "Veel te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Tipping point ~2007", tekst: "In 2007 voor eerst meer mensen in steden dan op platteland (50/50). Sindsdien stijgend. Schatting 2050: 68%. Asia + Africa drijven groei." }],
          niveaus: { basis: "~57%. A.", simpeler: "Iets meer dan helft. A.", nogSimpeler: "57% = A." },
        },
      },
      {
        q: "**Suburbanisatie** is:",
        options: [
          "Trek van stadscentrum naar voorsteden / rand",
          "Migratie van platteland naar centrum",
          "Vertrek uit stad",
          "Verdichting binnenstad"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is urbanisatie.", "Niet — disurbanisatie.", "Niet — re-urbanisatie."],
        uitlegPad: {
          stappen: [
            { titel: "Tuin + auto", tekst: "Naoorlogse trend in westen: gezinnen kopen huis met tuin in voorstad + pendelen met auto. NL: Almere (1976-) speciaal als suburbanisatie-stad gebouwd. Zoetermeer, Houten, Hoofddorp idem. Stadcentrum 'leegt' (donut-effect)." },
          ],
          niveaus: { basis: "Naar voorstad. A.", simpeler: "Stad-rand groeit. A.", nogSimpeler: "Suburb = A." },
        },
      },
      {
        q: "**Gentrification** = ?",
        options: [
          "Hoogopgeleide jongeren trekken naar oude wijken → huren stijgen → oude bewoners verdrongen",
          "Nieuwe wijken bouwen",
          "Migratie naar platteland",
          "Stad afbreken"
        ],
        answer: 0,
        wrongHints: [null, "Te beperkt.", "Tegenovergesteld.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Verheviging woningmarkt", tekst: "Voorbeelden: Brooklyn (NYC) ooit arbeiderswijk, nu hipster-paradijs. Amsterdam-Noord ooit volkswijk, nu yuppie-buurt. Voordeel: investering + leefbaarheid. Nadeel: oorspronkelijke bewoners niet meer kunnen betalen, kunnen niet meer in eigen wijk wonen." },
          ],
          niveaus: { basis: "Verdringing door welvaart. A.", simpeler: "Wijken duurder = arme weg. A.", nogSimpeler: "Gentr = A." },
        },
      },
      {
        q: "Welk land heeft **explosiefste verstedelijking** vandaag?",
        options: [
          "Sub-Sahara Afrika (Nigeria, Kenia, Ethiopië)",
          "Nederland",
          "Japan",
          "Duitsland"
        ],
        answer: 0,
        wrongHints: [null, "Al verstedelijkt.", "Krimpt.", "Stabiel."],
        uitlegPad: {
          stappen: [
            { titel: "Demografische + economische druk", tekst: "Afrika: jong bevolking + landbouw mechaniseert → mensen trekken naar steden. Lagos van 200k (1950) → ~21 mln vandaag → 35 mln in 2050 verwacht. Dhaka, Karachi, Kinshasa idem. Infrastructuur kan tempo niet bijhouden → krottenwijken." },
          ],
          niveaus: { basis: "Afrika. A.", simpeler: "Sub-Sahara Afrika snel. A.", nogSimpeler: "Afrika = A." },
        },
      },
      {
        q: "**Counter-urbanisatie** is:",
        options: [
          "Mensen verlaten stad richting platteland",
          "Naar stad trekken",
          "Naar megacity",
          "Skyscrapers bouwen"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Onjuist."],
        uitlegPad: {
          stappen: [
            { titel: "Trend versterkt door COVID + thuiswerk", tekst: "Sommige hoogopgeleiden + welvarende families verlaten dure stad voor platteland/kleine stad. Vereist hoge huizenprijs in stad + thuiswerk-mogelijkheid. Beperkt fenomeen — netto wereld nog steeds urbaniseert." },
          ],
          niveaus: { basis: "Van stad weg. A.", simpeler: "Stad verlaten. A.", nogSimpeler: "Anti-stad = A." },
        },
      },
    ],
  },

  // ─── B. Stadstructuur + modellen ──────────────────────────
  {
    title: "Stadstructuur — modellen Burgess + Hoyt + Multinucleair",
    explanation:
      "**Hoe is een stad opgebouwd?** Geografen ontwierpen modellen.\n\n**1. Burgess-Concentrische-Ringen-Model** (1925, Chicago):\n• **Ring 1 (CBD)**: Central Business District = centrum met kantoren, winkels.\n• **Ring 2**: overgangszone — oude industrie, vervallen woningen, krottenwijken-NL: 19e-eeuwse arbeiderswijken.\n• **Ring 3**: arbeiderswijken.\n• **Ring 4**: betere woningen (middenklasse).\n• **Ring 5**: pendelaars-zone (voorsteden).\n• Aanname: stad groeit RADIAAL uit centrum.\n\n**2. Hoyt-Sector-Model** (1939):\n• Stad groeit in **sectoren** vanuit centrum.\n• Sectoren volgen vaak transport-assen (treinrails, snelwegen).\n• Bv. rijke wijken langs goede transport-assen, fabrieken langs spoor.\n• Realistischer dan ringen.\n\n**3. Harris-Ullman Multinucleair Model** (1945):\n• Stad heeft meerdere centra (nuclei): hoofdcentrum + sub-centra.\n• Bv. universiteits-buurt, industrieel park, winkel-cluster — elk eigen 'centrum'.\n• Bv. Amsterdam: Centrum + Zuidas (zakelijk) + Bijlmer + Noord — meerdere kernen.\n\n**4. Edge City** (post-1980, Garreau):\n• Nieuwe centra ontstaan AAN RAND van stad rond snelwegen-knooppunten.\n• Bv. Reading-Berkshire (Londen-edge), Tysons Corner (Washington-edge).\n• Steeds meer kantoren + winkels DAAR ipv binnenstad.\n\n**CBD (Central Business District)**:\n• Hoge gronden-prijzen → hoogbouw.\n• Kantoren + grote winkels + restaurants.\n• Weinig bewoners (verlaten 's avonds — 'donut-effect').\n• Goede openbaar vervoer-verbinding.\n• Bv. La Défense (Parijs), Canary Wharf (Londen), Zuidas (Amsterdam).\n\n**Land-use** (grondgebruik):\n• Hoge huur in centrum → kantoren + commercie.\n• Lager naar rand → wonen.\n• Industriële gebieden bij transport (haven, spoor, weg).\n• Recreatie-zones (parken, golfbanen).\n\n**NL-specifieke patronen**:\n• Historische binnenstad met grachtenpand (Amsterdam, Utrecht, Delft).\n• 19e-eeuwse 'gordel' (Pijp, Oud-Zuid Amsterdam).\n• 20e-eeuwse uitbreidingswijken (Bijlmer, Tuinsteden).\n• 21e-eeuwse herontwikkeling (Eilandje Antwerpen, Katendrecht Rotterdam).\n\n**Krottenwijken** (slums, favela's, township):\n• In globale-zuid steden: 1 mld mensen wereldwijd.\n• Vaak op rand of risicovolle plekken (hellingen, overstromingsgebied).\n• Geen formele eigendomsrechten, geen of slechte infrastructuur.\n• Voorbeelden: Dharavi (Mumbai), Khayelitsha (Kaapstad), Rocinha (Rio).\n• Wel innovatieve sociale netwerken + economische dynamiek.\n\n**Verschillen tussen Westerse + Niet-Westerse steden**:\n• Westers: planning + zonering, regulering, kapitaal-intensief.\n• Niet-westers: vaak informele groei aan rand, hoge dichtheid in centrum.",
    checks: [
      {
        q: "**CBD** staat voor:",
        options: [
          "Central Business District — kantoren-centrum stad",
          "Centraal Bestuur Departement",
          "Cleaning + Buildings Done",
          "Geen betekenis"
        ],
        answer: 0,
        wrongHints: [null, "Onzin.", "Onzin.", "Wel betekenis."],
        uitlegPad: {
          stappen: [{ titel: "Zakelijk centrum", tekst: "Centrum met hoofdkantoren, grote winkels, restaurants. Hoge gronden-prijzen → hoogbouw. NL: Zuidas (A'dam-zuid), Beurs/Damrak (binnenstad). Londen: City + Canary Wharf. NYC: Manhattan-zuid." }],
          niveaus: { basis: "Central Business District. A.", simpeler: "Centrum kantoren. A.", nogSimpeler: "CBD = A." },
        },
      },
      {
        q: "**Burgess-model** beschrijft stad als:",
        options: [
          "Concentrische ringen rond centrum",
          "Sectoren langs transport",
          "Meerdere centra",
          "Geen structuur"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is Hoyt.", "Niet — dat is multinucleair.", "Wel structuur."],
        uitlegPad: {
          stappen: [
            { titel: "Chicago 1925", tekst: "5 ringen: CBD → overgang → arbeiders → middenklasse → pendelaars. Aanname: stad groeit RADIAAL. Eenvoudig maar deels achterhaald. Werkt nog deels voor oude Europese steden. Niet voor moderne edge-cities + meerdere-centrum-steden." },
          ],
          niveaus: { basis: "Ringen. A.", simpeler: "Concentrische cirkels. A.", nogSimpeler: "Ringen = A." },
        },
      },
      {
        q: "**Edge City** is:",
        options: [
          "Nieuw subcentrum aan rand stad bij snelwegknooppunt",
          "Krottenwijk",
          "Stadcentrum",
          "Toeristische trekpleister"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is slum/favela.", "Tegenovergesteld.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Garreau 1991", tekst: "Vooral in VS sinds 1980: nieuwe kantoor- + winkelclusters AAN RAND, vaak rond snelweg-knooppunt + luchthaven. Bv. Reston (Washington), Schaumburg (Chicago), Walnut Creek (San Francisco). Mensen werken + winkelen DAAR, hoeven niet meer naar binnenstad." },
          ],
          niveaus: { basis: "Nieuw centrum aan rand. A.", simpeler: "Subcentrum bij snelweg. A.", nogSimpeler: "Edge = A." },
        },
      },
      {
        q: "**Donut-effect** in westerse steden:",
        options: [
          "Stadcentrum verliest bewoners (vooral 's nachts) terwijl rand groeit",
          "Hoogbouw in centrum",
          "Volle markt",
          "Tijdsverschil"
        ],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet relevant.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Leeg gat in midden", tekst: "Naoorlogs: gezinnen verhuizen naar voorsteden. Centrum verliest woningen, alleen kantoor + winkel. Avond: centrum LEEG. Vandaag deels omgekeerd door gentrification + re-urbanisatie." },
          ],
          niveaus: { basis: "Centrum leeg, rand vol. A.", simpeler: "Lege binnenstad 's avonds. A.", nogSimpeler: "Donut = A." },
        },
      },
      {
        q: "**Dharavi** (Mumbai) is een:",
        options: [
          "Grootste krottenwijk Azië (~1 mln inwoners)",
          "Luxe wijk",
          "Toeristische plek alleen",
          "Industriële zone"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Te beperkt.", "Wel deels."],
        uitlegPad: {
          stappen: [
            { titel: "Slum-economie", tekst: "1-2 mln mensen op 2 km². Verbazend economisch actief: ~$1 mld jaaromzet uit pottenbakkerijen, recycling, kledingindustrie. Geen formele woningen, slechte sanitair. Bekend uit film 'Slumdog Millionaire'. Indiase overheid plant herontwikkeling." },
          ],
          niveaus: { basis: "Grote krottenwijk. A.", simpeler: "Mumbai-slum. A.", nogSimpeler: "Dharavi = A." },
        },
      },
    ],
  },

  // ─── C. Megacities + global cities ────────────────────────
  {
    title: "Megacities + Global cities",
    explanation:
      "**Megacity** = stadelijk gebied met **>10 mln inwoners**.\n\n**Top-10 megacities (2024)**:\n1. **Tokyo-Yokohama**: ~37 mln.\n2. **Delhi**: ~33 mln.\n3. **Shanghai**: ~29 mln.\n4. **Dhaka**: ~24 mln.\n5. **São Paulo**: ~23 mln.\n6. **Cairo**: ~22 mln.\n7. **Mexico City**: ~22 mln.\n8. **Beijing**: ~22 mln.\n9. **Mumbai**: ~21 mln.\n10. **Osaka**: ~19 mln.\n\n**Trend**: in 1950 had alleen NYC + Tokyo >10 mln. Vandaag ~35 megacities, in 2030 verwacht ~43. Vrijwel alle nieuwe in globale-zuid.\n\n**Global City (alpha-stad)**:\n• Concept van Saskia Sassen (1991).\n• Steden die wereldeconomie aansturen.\n• Top: New York, Londen, Tokyo, Hong Kong, Singapore, Parijs, Shanghai.\n• Niet altijd grootste, wel meest invloedrijk.\n• Kenmerken:\n  - Hoofdkantoren multinationals.\n  - Internationale financiële diensten.\n  - Hub voor lucht + zee + data.\n  - Cultureel-icoon (musea, theaters).\n  - Universiteiten van wereldklasse.\n\n**Megacity vs global city**:\n• Lagos = megacity maar geen global city (regionaal belang).\n• Singapore = klein (5,9 mln) maar global city.\n• Mumbai = beide.\n\n**Voordelen grote steden**:\n• **Schaalvoordelen**: meer mensen → meer specialisatie → meer innovatie.\n• Universiteiten + ziekenhuizen + cultuur bereikbaar.\n• Werkgelegenheid in vele sectoren.\n• Diversiteit + tolerantie.\n• Trends starten in steden + verspreiden.\n\n**Nadelen**:\n• **Verkeers-files**: Jakarta verliest 7% BBP aan files.\n• **Vervuiling**: New Delhi airpollution erger dan Pekings dieptepunt.\n• **Hoge huren**: SF, NYC, Londen, Amsterdam onbetaalbaar voor middenklasse.\n• **Sociale ongelijkheid**: rijke + arme binnen kilometer naast elkaar.\n• **Druk op infrastructuur**: water, riool, elektriciteit, openbaar vervoer.\n• **Brain-drain platteland**: jonge talent vertrekt.\n\n**Smart Cities**:\n• Steden die data + IoT gebruiken voor efficiëntie.\n• Voorbeelden: Singapore (sensoren overal), Songdo (Zuid-Korea, gepland), Barcelona (sensor-netwerk).\n• Diensten: real-time verkeer, slimme straatverlichting, vuilnis-sensoren.\n\n**Mexico City**:\n• ~22 mln in Valle de México.\n• Lucht extreem vervuild (oude auto's + ligging in vallei).\n• Water-tekort + zinkende grond.\n• Sterke kunst + cultuur.\n\n**Tokyo-Yokohama**:\n• Grootste metropolitan area ter wereld.\n• Extreme dichtheid + perfecte openbaar vervoer.\n• Aging crisis: bevolking begint te krimpen.\n\n**Lagos** (Nigeria):\n• Snelst groeiend wereldwijd.\n• Krottenwijken + miljardairs naast elkaar.\n• Predictie: 100 mln in 2100?",
    checks: [
      {
        q: "**Megacity** is een stad met:",
        options: [">10 miljoen inwoners", ">1 miljoen", ">100 miljoen", ">1 miljard"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is 'grote stad'.", "Onmogelijk.", "Onmogelijk."],
        uitlegPad: {
          stappen: [{ titel: "VN-definitie", tekst: ">10 mln in stedelijk gebied (incl. voorsteden, niet alleen stadsgrens). 1950: alleen NYC + Tokyo. 2024: ~35 stuks. Vrijwel alle nieuwe in globale-zuid (Lagos, Dhaka, Karachi)." }],
          niveaus: { basis: ">10 mln. A.", simpeler: "10 miljoen+. A.", nogSimpeler: "10M = A." },
        },
      },
      {
        q: "Wat is een **'global city'** (Sassen)?",
        options: [
          "Stad die wereldeconomie aanstuurt (NYC, Londen, Tokyo, etc.)",
          "Toeristische topbestemming",
          "Stad >5 mln",
          "Hoofdstad van groot land"
        ],
        answer: 0,
        wrongHints: [null, "Niet specifiek.", "Niet alleen grootte.", "Niet alle."],
        uitlegPad: {
          stappen: [
            { titel: "Drie-stad-as", tekst: "Sassen identificeerde NY-LON-TOK als top-3: financiële markten wereldwijd lopen door deze drie. Vandaag uitgebreid (Hongkong, Singapore, Shanghai, Frankfurt). Hub-functie voor MNCs, banken, internationale verbindingen." },
          ],
          niveaus: { basis: "Wereldeconomie-leider. A.", simpeler: "Stad die wereld aanstuurt. A.", nogSimpeler: "Global = A." },
        },
      },
      {
        q: "Welke is **grootste metropolitan area** ter wereld?",
        options: ["Tokyo-Yokohama (~37 mln)", "Mumbai", "New York", "London"],
        answer: 0,
        wrongHints: [null, "Niet — kleiner.", "Veel kleiner.", "Veel kleiner."],
        uitlegPad: {
          stappen: [{ titel: "Stedelijk gigant", tekst: "Tokyo-Yokohama-Kawasaki: ~37 mln. Op één plek 4x NL-bevolking. Goed georganiseerd: 's werelds beste openbaar vervoer (Yamanote-lijn elke 3 min). Maar bevolking krimpt (Japan-veroudering)." }],
          niveaus: { basis: "Tokyo. A.", simpeler: "Tokyo metropool. A.", nogSimpeler: "Tokyo = A." },
        },
      },
      {
        q: "**Lagos** (Nigeria) is bijzonder door:",
        options: [
          "Snelst-groeiende megacity wereldwijd",
          "Oudste stad",
          "Hoogste BBP",
          "Beste OV"
        ],
        answer: 0,
        wrongHints: [null, "Niet — relatief nieuw.", "Niet — laag BBP/capita.", "Niet — files zijn extreem."],
        uitlegPad: {
          stappen: [
            { titel: "Van 200k naar 21 mln in 70 jaar", tekst: "1950: 200 000 inwoners. 2024: ~21 mln. Predictie 2050: 35 mln (in 2100 mss 100 mln). Onbetwist snelst-groeiend wereldwijd. Mix van miljardairs en grootste krottenwijken. Olie + nieuwe industrie + Nigerian-film (Nollywood) trekken instroom." },
          ],
          niveaus: { basis: "Snelst groeiend. A.", simpeler: "Lagos = boom city. A.", nogSimpeler: "Snel = A." },
        },
      },
      {
        q: "**Smart City** gebruikt:",
        options: [
          "Data + sensoren + IoT voor efficiëntie",
          "Alleen ouderwetse planning",
          "Geen technologie",
          "Verbod op auto's"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Niet vereist."],
        uitlegPad: {
          stappen: [
            { titel: "Data-gedreven beheer", tekst: "Singapore-voorbeeld: sensoren in straten (verkeer, lucht, vuilnis), apps voor parkeren, gemeentelijke data open beschikbaar. Songdo (KR) gepland als smart city-totaal. Barcelona, Amsterdam (Smart-City-tag) experimenteren met sensor-netwerken." },
          ],
          niveaus: { basis: "Tech voor stad. A.", simpeler: "Sensoren + data + AI. A.", nogSimpeler: "Smart = A." },
        },
      },
    ],
  },

  // ─── D. Stadsproblemen ────────────────────────────────────
  {
    title: "Stadsproblemen — files, vervuiling, ongelijkheid, krapte",
    explanation:
      "**Grootste uitdagingen voor steden**:\n\n**1. Verkeer + Bereikbaarheid**:\n• File-tijd kost economie miljarden. Jakarta: 7% BBP.\n• Auto's domineren nog in veel steden (LA, Houston).\n• Oplossingen: metro/tram/bus-systemen (Curitiba-BRT, Tokyo-rail), fietspaden (Amsterdam, Kopenhagen), tolheffing centrum (London, Singapore).\n• Toekomst: zelfrijdende auto's, deelmobiliteit, Hyperloop.\n\n**2. Luchtvervuiling**:\n• WHO: 99% wereld-bevolking ademt lucht onder normen.\n• PM2.5-deeltjes uit verkeer + industrie + verbranding.\n• Delhi piek (winter) AQI 500+ (gevaarlijk). Beijing verbeterd door beleid.\n• Veroorzaakt ~7 mln vroegtijdige doden/jaar.\n• Oplossingen: elektrische voertuigen, OV, schone industrie, beplanting.\n\n**3. Woon-crisis**:\n• Wereldwijd 1 mld in krottenwijken.\n• In rijke landen huizen-tekort: NL ~400k tekort 2024.\n• Hoge huren in alpha-cities (SF, NYC, London, Amsterdam) → middenklasse verdrongen.\n• Oplossingen: bouw-versnelling, sociaal-woningbeleid, regulering Airbnb, gemixte projecten.\n\n**4. Klimaat-impact**:\n• Steden veroorzaken 70% CO₂-uitstoot wereldwijd.\n• Heat-island-effect: stad 2-5°C warmer dan platteland → versterkt door beton + auto's, minder groen.\n• Kustssteden (NYC, Miami, Amsterdam, Mumbai) kwetsbaar voor zeespiegelstijging.\n• Oplossingen: groene daken, parken, watermanagement, geveltuinen.\n\n**5. Watercrisis**:\n• Day Zero in Kaapstad 2018 — bijna zonder water.\n• Mexico City zinkt door grondwater-ontginning.\n• Bangkok, Jakarta zinken.\n• Oplossingen: leakage repareren, regen-water-vangst, ontzilten zeewater (duur).\n\n**6. Sociale ongelijkheid**:\n• Rijke wijken naast krottenwijken (Rio: Copacabana naast Rocinha).\n• Toegang tot OV, scholen, parken ongelijk.\n• Gentrification verergert.\n\n**7. Criminaliteit**:\n• Niet altijd hoger in steden (varieert sterk).\n• Slum-gebieden vaak hoger drugs + geweld.\n• Maatregelen: politie-aanwezigheid, sociaal werk, jeugdcentra, banen.\n\n**8. Veroudering** (rijke steden):\n• Tokyo, Berlin, Seoul: bevolking krimpt + vergrijst.\n• Lege scholen, meer ouderenzorg nodig.\n• Pensioen-druk.\n\n**9. Pandemie-kwetsbaarheid**:\n• COVID startte in stad (Wuhan) + verspreidde via vliegnetwerk + dichtheid.\n• Lockdown-impact veel groter in steden (geen tuin, kleine appartementen).\n• Maar ook: stedelijke infrastructuur (ziekenhuizen) reageren beter.\n\n**Stadsplanning-strategieën**:\n• **Compacte stad** (Jane Jacobs): dichte + gemengde wijken, voetganger-vriendelijk.\n• **15-minuten-stad** (Parijs): alles binnen 15 min lopen/fietsen.\n• **Transit-oriented development**: bouwen rond OV-knooppunten.\n• **New Urbanism**: terug naar pre-auto-stadsdesign.",
    checks: [
      {
        q: "**Heat-island-effect** in steden:",
        options: [
          "Stad 2-5°C warmer dan platteland door beton + minder groen",
          "Stad kouder dan platteland",
          "Geen verschil",
          "Alleen 's nachts warmer"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel verschil.", "Beide dag + nacht."],
        uitlegPad: {
          stappen: [
            { titel: "Beton + asfalt + auto's", tekst: "Beton absorbeert + houdt warmte vast. Minder bomen + parken voor verkoeling. Auto's + airconditioning produceren warmte. Resultaat: stadscentrum 2-5°C warmer dan omliggend platteland. Versterkt door klimaatverandering → hittegolven extra gevaarlijk in stad (ouderen-sterfte)." },
          ],
          niveaus: { basis: "2-5°C warmer. A.", simpeler: "Stad = warmer. A.", nogSimpeler: "Warmer = A." },
        },
      },
      {
        q: "Wereldwijd **veroorzaken steden** welk % van CO₂-uitstoot?",
        options: ["~70%", "~30%", "~10%", "Nul"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "Energie + verkeer + industrie", tekst: "Steden verbruiken veel energie voor verlichting, koeling, transport, productie. ~70% van CO₂ komt hieruit. Cruciaal aanpakken steden = cruciaal klimaatactie. Daarom 'C40-coalitie' van 96 grote steden samenwerkt." }],
          niveaus: { basis: "70%. A.", simpeler: "Steden grootste vervuiler. A.", nogSimpeler: "70% = A." },
        },
      },
      {
        q: "**15-minuten-stad** (Parijs):",
        options: [
          "Alle dagelijkse voorzieningen binnen 15 min lopen/fietsen",
          "Auto-verbod",
          "Snel-stad",
          "Tijdelijke woonplaats"
        ],
        answer: 0,
        wrongHints: [null, "Niet hoofdidee.", "Niet relevant.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Burgemeester Hidalgo 2020", tekst: "Concept: school, dokter, winkel, park, werk binnen 15 min van huis. Vermindert verkeer, sociale binding, klimaat-impact. Parijs leidende stad. Vergelijkbaar: 'Superblocks' Barcelona (verkeers-luwe wijken)." },
          ],
          niveaus: { basis: "Alles dichtbij. A.", simpeler: "15 min naar alles. A.", nogSimpeler: "15min = A." },
        },
      },
      {
        q: "**Kaapstad 'Day Zero'** (2018):",
        options: [
          "Stad bijna zonder drinkwater door extreme droogte",
          "Stroomstoring",
          "Pandemie",
          "Aardbeving"
        ],
        answer: 0,
        wrongHints: [null, "Niet alleen elektriciteit.", "Niet 2018.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wake-up call", tekst: "Aanhoudende droogte → reservoirs daalden onder 13%. Stad maakte plan om watertoevoer aan inwoners stop te zetten ('Day Zero'), inwoners moesten met emmer naar verzamelpunten. Net op tijd regende het → crisis afgewend. Eerste wereldstad die zoiets bijna meemaakte. Klimaatverandering maakt dit meer waarschijnlijk." },
          ],
          niveaus: { basis: "Water-crisis. A.", simpeler: "Bijna zonder water. A.", nogSimpeler: "Water = A." },
        },
      },
      {
        q: "Een **Brt** (Bus Rapid Transit) systeem zoals Curitiba (Brazilië):",
        options: [
          "Bussen op afgescheiden baan met metro-achtige stations",
          "Privé taxi-systeem",
          "Vliegtuig-shuttle",
          "Trein-systeem"
        ],
        answer: 0,
        wrongHints: [null, "Onzin.", "Onzin.", "Niet — bus."],
        uitlegPad: {
          stappen: [
            { titel: "Goedkoper alternatief voor metro", tekst: "Curitiba 1974 pionier. Eigen bus-baan in midden weg, vooruitbetaling bij station (snelle inscheping), grote bussen (180 mensen). Veel goedkoper dan metro maar bijna zelfde capaciteit. Wereldwijd gekopieerd: Bogotá, Mexico City, Istanbul, Johannesburg." },
          ],
          niveaus: { basis: "Bus op eigen baan. A.", simpeler: "Snelle bus-corridor. A.", nogSimpeler: "BRT = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — duurzame stad + toekomst",
    explanation:
      "**Duurzame stad** = stad die voldoet aan huidige behoeften ZONDER toekomstige generaties te schaden.\n\n**Drie pijlers**:\n• **Sociaal**: leefbaar, eerlijk, inclusief, sociale binding.\n• **Economisch**: banen, betaalbare huren, kansen.\n• **Milieu**: lage CO₂, schone lucht, biodiversiteit, water.\n\n**Goede voorbeelden**:\n\n**Kopenhagen**:\n• Doel CO₂-neutraal 2025.\n• 50%+ verplaatsingen op fiets.\n• Fietspaden + 'cycle highways' naar voorsteden.\n• Windmolens leveren elektriciteit.\n\n**Amsterdam**:\n• Doel klimaat-neutraal 2050, halvering CO₂ 2030.\n• Auto's uit binnenstad (steeds meer geprivilegieerd voetganger).\n• Donut-economy-model (Kate Raworth) ingevoerd 2020.\n• Veel groen + water.\n\n**Curitiba (Brazilië)**:\n• Pionier BRT-bus (jaren 1970).\n• Slim afval-management (ruilen voedsel voor recycling).\n• Veel parken.\n• Voorbeeld voor andere globale-zuid steden.\n\n**Singapore**:\n• 'Garden City' met enorm groen-percentage.\n• Verbod op vuilnis op straat (boetes).\n• Slim watermanagement (recycling, ontzilting, reservoirs).\n• Smart-City-pionier.\n\n**Reykjavik**:\n• Bijna 100% geothermische + waterkracht-energie.\n• Verwarmt alle huizen + zwembaden duurzaam.\n\n**Strategieën voor duurzame steden**:\n\n**1. Compacte stad**:\n• Dichter bouwen → minder pendelen → minder CO₂.\n• Gemengde wijken (wonen + werken + winkels) → 15-min-stad.\n\n**2. Modal shift transport**:\n• Auto's UIT, fietsen + OV IN.\n• Park+ride aan rand, dan met OV verder.\n• Auto-vrije zones (parken, voetgangersgebied).\n\n**3. Groene gebouwen**:\n• Isolatie + warmtepompen + zonnepanelen.\n• Groene daken (regenwater + verkoeling).\n• Hergebruik oude gebouwen.\n\n**4. Circulaire economie**:\n• Afval recyclen op industrieel niveau.\n• 'Cradle-to-cradle' design.\n• Reparatie-cafés, deeleconomie.\n\n**5. Sociale duurzaamheid**:\n• Sociale woningbouw mengen met markt-woningen → geen gettos.\n• Toegankelijke parken + voorzieningen voor iedereen.\n• Burgerparticipatie in planning.\n\n**Toekomst-trends**:\n• **Autonome voertuigen**: minder ruimte voor parkeren, ander stadsdesign.\n• **Vertical farms**: voedselproductie IN stad.\n• **3D-printed buildings**: snellere + goedkopere woningbouw.\n• **AI in stadsplanning**: simulaties optimaliseren verkeer + groen.\n• **Klimaat-migratie**: stedelijke groei uit klimaat-vluchtelingen wordt grote uitdaging.\n\n**Politieke discussie**:\n• 'Recht op de stad' (Lefebvre) - wie mag waar wonen?\n• Anti-Airbnb-bewegingen (verdringt bewoners).\n• Climate-justice: arme wijken extra getroffen door hitte + overstroming.\n\n**Persoonlijke handvatten**:\n• Kies fiets/OV boven auto.\n• Steun sociale woningbouw + buurt-initiatieven.\n• Stem bij gemeenteraad-verkiezingen — lokale politiek zeer impactvol.\n• Buurttuin, repair-café, kringloop-winkel: doe lokaal mee.",
    checks: [
      {
        q: "Welke stad heeft doel **CO₂-neutraal 2025**?",
        options: ["Kopenhagen", "New York", "Lagos", "Sydney"],
        answer: 0,
        wrongHints: [null, "Niet zo ambitieus.", "Niet — meer overleven.", "Pas later."],
        uitlegPad: {
          stappen: [
            { titel: "Eerste wereldstad CO₂-neutraal", tekst: "Kopenhagen heeft ~10 jaar werk: 50% verplaatsingen fiets, geothermische + windkracht, alle gemeentelijke gebouwen verduurzaamd. Doel mss niet exact 2025 gehaald maar veel verder dan andere wereldsteden." },
          ],
          niveaus: { basis: "Kopenhagen. A.", simpeler: "Kopenhagen = klimaat-leider. A.", nogSimpeler: "Kop = A." },
        },
      },
      {
        q: "Het concept **'donut-economy'** in Amsterdam:",
        options: [
          "Balans tussen menselijke behoeften (basis) + planetaire grenzen (plafond)",
          "Veel donuts",
          "Mond-vorm",
          "Sport"
        ],
        answer: 0,
        wrongHints: [null, "Onzin.", "Onzin.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Kate Raworth 2017", tekst: "Donut-vorm: binnenste cirkel = sociale ondergrens (geen mens zonder onderdak, eten, gezondheid, etc.). Buitenste = planetaire grens (klimaat, biodiversiteit). Economie moet TUSSEN beide rings opereren. Amsterdam eerste stad die dit officieel omarmde (2020) als beleidskader." },
          ],
          niveaus: { basis: "Sociale + ecologische grens. A.", simpeler: "Tussen mens + planeet. A.", nogSimpeler: "Donut = A." },
        },
      },
      {
        q: "Een **modal shift** in stadsverkeer betekent:",
        options: [
          "Verschuiving van auto naar fiets + OV + lopen",
          "Andere ringweg",
          "Snelheid omhoog",
          "Auto-aanschaf"
        ],
        answer: 0,
        wrongHints: [null, "Niet.", "Tegenovergesteld bedoeling.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Cruciaal voor klimaat + lucht", tekst: "'Modus' = vervoersmiddel. 'Shift' = verschuiving. Voorbeeld: NL 1970s veel auto's → vanaf 1980 sterk fiets-beleid → 27% van verplaatsingen op fiets (wereldrecord). Modal shift verbeterd lucht + minder CO₂ + minder ruimte voor auto's." },
          ],
          niveaus: { basis: "Verschuiving vervoer. A.", simpeler: "Auto naar fiets/OV. A.", nogSimpeler: "Modal = A." },
        },
      },
      {
        q: "**'Circulaire economie'** in stad betekent:",
        options: [
          "Afval = grondstof voor iets anders (recycling op industrieel niveau)",
          "Rondrijden",
          "Niet recyclen",
          "Alleen kopen"
        ],
        answer: 0,
        wrongHints: [null, "Onzin.", "Tegenovergesteld.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Geen lineair (maken-gebruiken-weggooien)", tekst: "In plaats van afval naar stortplaats: hergebruik, repareer, recycle. NL leidende positie: PET-flessen voor 95%+ recycled, oude kleren naar second-hand. Doel 2050 EU: volledig circulaire economie." },
          ],
          niveaus: { basis: "Hergebruik continu. A.", simpeler: "Geen afval, alles nieuw gebruik. A.", nogSimpeler: "Circular = A." },
        },
      },
      {
        q: "Welke stad heeft bijna 100% **geothermische** + waterkracht-energie?",
        options: ["Reykjavik (IJsland)", "Lagos", "Tokyo", "Sydney"],
        answer: 0,
        wrongHints: [null, "Niet — Afrika.", "Niet primair.", "Niet primair."],
        uitlegPad: {
          stappen: [
            { titel: "Natuurlijke bron", tekst: "IJsland zit op tektonische breuk → veel vulkanische activiteit + hot springs. Reykjavik (en hele IJsland) gebruikt geothermische warmte voor verwarming + waterkracht voor elektriciteit. Bijna 100% hernieuwbaar. Klein voorbeeld dat moeilijk te kopiëren elders." },
          ],
          niveaus: { basis: "Reykjavik. A.", simpeler: "IJsland-hoofdstad. A.", nogSimpeler: "Reyk = A." },
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
