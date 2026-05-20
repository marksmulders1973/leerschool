// Leerpad: Stijlfiguren + Literatuur — HAVO/VWO Nederlands
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Stijlmiddelen, literaire periodes,
// genres, tekstanalyse, bekende NL-werken.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["✨", "📜", "📖", "🔍", "🏆"];

const chapters = [
  { letter: "A", title: "Stijlfiguren herkennen", emoji: "✨", from: 0, to: 0 },
  { letter: "B", title: "Literaire periodes", emoji: "📜", from: 1, to: 1 },
  { letter: "C", title: "Genres (lyriek/epiek/drama)", emoji: "📖", from: 2, to: 2 },
  { letter: "D", title: "Tekstanalyse + interpretatie", emoji: "🔍", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — NL-canon", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Stijlfiguren ──────────────────────────────────────
  {
    title: "Stijlfiguren — figuurlijk taalgebruik herkennen",
    explanation:
      "**Stijlfiguur** = bewuste afwijking van letterlijke taal voor effect.\n\n**Belangrijkste types**:\n\n**Beeldspraak**:\n• **Vergelijking**: 'haar ogen zijn ALS sterren'. Met signaalwoord (als, lijkt, gelijk).\n• **Metafoor**: 'haar ogen zijn sterren'. Zonder signaalwoord — beeld vervangt zaak.\n• **Personificatie**: levenloos krijgt menselijke eigenschap. 'De zon LACHTE'.\n• **Synesthesie**: zintuigen door elkaar. 'EEN ZOETE klank', 'EEN WARME kleur'.\n\n**Klankfiguren**:\n• **Alliteratie**: zelfde beginklank — 'wonderlijke wereld'.\n• **Assonantie**: zelfde klinker — 'ik dwaal door donk're dalen'.\n• **Onomatopee** (klanknabootsing): 'kwaak', 'tikketak'.\n\n**Herhaling**:\n• **Anafoor**: zelfde woorden aan begin van regels.\n• **Refrein**: terugkerende regel/strofe.\n• **Climax**: opbouwende reeks van zwakker naar sterker. 'Ik kwam, ik zag, ik overwon.'\n• **Tautologie**: dubbel — 'enkel en alleen'.\n• **Pleonasme**: overbodig versterker — 'witte sneeuw'.\n\n**Contrast**:\n• **Antithese**: tegenstellingen samen — 'rijk en arm', 'leven en dood'.\n• **Paradox**: schijnbare tegenstrijdigheid — 'ik weet dat ik niets weet' (Socrates).\n• **Oxymoron**: contrast in 2 woorden — 'oorverdovende stilte'.\n\n**Vertekening**:\n• **Hyperbool**: overdrijving — 'ik heb het wel duizend keer gezegd'.\n• **Eufemisme**: verzachting — 'heengaan' voor sterven.\n• **Litotes**: dubbel-ontkenning of zachte uitdrukking — 'niet slecht' = goed.\n• **Understatement**: kleinmaken voor effect — 'het regent een beetje' (= plenst).\n• **Ironie**: bedoelt tegenovergestelde van wat je zegt.\n• **Sarcasme**: ironie met agressieve toon.\n\n**Beeldend**:\n• **Metonymia**: woord vervangen door verwant — 'het Witte Huis besluit' (= president). 'Ik drink een glas' (= inhoud, niet glas zelf).\n• **Synecdoche** (vorm metonymia): deel staat voor geheel of omgekeerd — 'er staat geen ziel op straat' (= mens), '10 monden te voeden' (= mensen).\n• **Rhetorische vraag**: vraag zonder antwoord-verwachting — 'wie zou dat niet willen?'.\n\n**Examen-tip**: bij analyse vraag-type 'welk stijlfiguur?' altijd 2 dingen doen:\n1. Letterlijk lezen — wat staat er?\n2. Welke afwijking van letterlijk → welk type?",
    checks: [
      {
        q: "'De wind FLUISTERDE door de bomen.' Welk stijlfiguur?",
        options: ["Personificatie", "Metafoor", "Hyperbool", "Alliteratie"],
        answer: 0,
        wrongHints: [null, "Niet — geen beeld-vervanging.", "Niet — niet overdreven.", "Niet — geen herhaling beginklank."],
        uitlegPad: {
          stappen: [{ titel: "Levenloos = menselijk", tekst: "De wind kan niet écht fluisteren (alleen levende wezens kunnen dat). Levenloos voorwerp (wind) krijgt menselijke eigenschap (fluisteren) → **personificatie**. Onderscheid van metafoor: bij metafoor zou wind iets ANDERS zijn, niet menselijk doen." }],
          niveaus: { basis: "Personificatie. A.", simpeler: "Wind doet menselijk = personificatie. A.", nogSimpeler: "Person. = A." },
        },
      },
      {
        q: "'Haar tanden zijn parels' is een:",
        options: ["Metafoor", "Vergelijking", "Hyperbool", "Personificatie"],
        answer: 0,
        wrongHints: [null, "Niet — geen 'als'.", "Wel overdreven maar formuel = metafoor.", "Niet — tanden niet menselijk gemaakt."],
        uitlegPad: {
          stappen: [{ titel: "Geen signaalwoord = metafoor", tekst: "Bij **vergelijking**: 'haar tanden zijn ALS parels' (met als/gelijk/zoals). Bij **metafoor**: 'haar tanden ZIJN parels' (zonder signaalwoord — beeld vervangt zaak direct). Sterk beeld + compact." }],
          niveaus: { basis: "Metafoor. A.", simpeler: "Geen 'als' = metafoor. A.", nogSimpeler: "Meta = A." },
        },
      },
      {
        q: "'Oorverdovende stilte' is een:",
        options: ["Oxymoron", "Pleonasme", "Tautologie", "Ironie"],
        answer: 0,
        wrongHints: [null, "Niet — geen overbodige versterker.", "Niet — geen dubbel.", "Niet — geen tegenovergestelde bedoeling."],
        uitlegPad: {
          stappen: [{ titel: "Tegenstrijdige termen samen", tekst: "Oorverdovend = heel hard geluid. Stilte = afwezigheid geluid. **Twee tegenstrijdige woorden** = oxymoron. Effect: paradoxale ervaring (bv. heel intense stilte voelt 'oorverdovend')." }],
          theorie: "Andere voorbeelden: 'bittere zoetheid', 'levende doden', 'controlled chaos'.",
          niveaus: { basis: "Oxymoron. A.", simpeler: "Tegenovergestelde woorden samen. A.", nogSimpeler: "Oxymoron = A." },
        },
      },
      {
        q: "'Het Witte Huis besluit tot sancties.' Stijlfiguur?",
        options: ["Metonymia", "Synecdoche", "Personificatie", "Hyperbool"],
        answer: 0,
        wrongHints: [null, "Verwante vorm maar specifieker — synecdoche is deel/geheel.", "Niet primair — gebouw niet 'menselijk' bedoeld.", "Niet — geen overdrijving."],
        uitlegPad: {
          stappen: [{ titel: "Verwant begrip", tekst: "Het Witte Huis is GEBOUW, kan zelf niet besluiten. Bedoeld: de **president/regering** die daar zit. Vervanging door VERWANT begrip = metonymia. Soms genoemd 'metonymie' in school-NL." }],
          theorie: "Andere voorbeelden: 'Den Haag besluit' (=overheid), 'glas drinken' (=inhoud), 'een Picasso' (=schilderij van Picasso).",
          niveaus: { basis: "Metonymia. A.", simpeler: "Verwant ding gebruikt. A.", nogSimpeler: "Metonymia = A." },
        },
      },
      {
        q: "'Lekker rustig' (terwijl het stikvol is) — welke?",
        options: ["Ironie", "Metafoor", "Antithese", "Eufemisme"],
        answer: 0,
        wrongHints: [null, "Niet — geen beeld.", "Niet — geen contrast in zin.", "Niet — geen verzachting."],
        uitlegPad: {
          stappen: [{ titel: "Bedoeld tegendeel", tekst: "Spreker zegt 'rustig' maar betekent **DRUK**. Tegengestelde van wat letterlijk staat = ironie. Op papier soms moeilijk; in spreektaal: toon doet het werk. Wanneer + agressief: sarcasme." }],
          niveaus: { basis: "Ironie. A.", simpeler: "Bedoeld tegengesteld. A.", nogSimpeler: "Ironie = A." },
        },
      },
    ],
  },

  // ─── B. Literaire periodes ────────────────────────────────
  {
    title: "Literaire periodes — Middeleeuwen tot nu",
    explanation:
      "**Belangrijkste perioden NL-literatuur**:\n\n**1. Middeleeuwen** (~1100-1500):\n• **Hoofs**: ridderverhalen, ridderepiek. Voorbeeld: 'Karel ende Elegast' (rond 1300).\n• **Geestelijk**: religieuze teksten, Bijbel-vertaalstukken.\n• **Wereldlijk**: 'Van den Vos Reynaerde' (Reynaert de vos, ~1260) — satire op feodale maatschappij.\n• Vooral mondeling-gesproken, weinig papier (duur).\n• Boekdruk pas vanaf ~1450 (Gutenberg).\n\n**2. Renaissance** (~1500-1670):\n• Herontdekking Klassieke Oudheid (Grieken, Romeinen).\n• Letterkunde groeit + verbreedt.\n• **P.C. Hooft** (1581-1647): sonnetten, 'Granida'.\n• **Bredero** (1585-1618): kluchten, 'Spaanschen Brabander'.\n• **Joost van den Vondel** (1587-1679): treurspelen, 'Gysbreght van Aemstel' (Amsterdam-mythe).\n• Hugo de Groot (Grotius): rechtsgeleerde.\n\n**3. Verlichting** (~1700-1800):\n• Rede, wetenschap, kritiek op tradities.\n• Niet groot in NL (Frankrijk leidde — Voltaire, Rousseau).\n• Hieronymus van Alphen: kinderpoëzie ('Jantje zag eens pruimen hangen').\n• Justus van Effen: tijdschriften.\n\n**4. Romantiek** (~1800-1850):\n• Reactie op verstand-Verlichting. Gevoel, natuur, individu.\n• **Multatuli** = Eduard Douwes Dekker (1820-1887): 'Max Havelaar' (1860) — aanklacht koloniaal beleid.\n• Beets, Potgieter, Bilderdijk.\n\n**5. Tachtigers** (~1880-1894):\n• Reactie op brave 19e-eeuwse Nederland.\n• 'Vorm = inhoud', 'kunst om de kunst'.\n• **Willem Kloos**, **Frederik van Eeden**, Albert Verwey, Lodewijk van Deyssel.\n• 'De Nieuwe Gids' tijdschrift 1885.\n\n**6. 1900-1940 Modernisme**:\n• Internationale invloeden, experiment.\n• **Louis Couperus** (1863-1923): psychologische romans, 'De stille kracht'.\n• Nescio (Frits Grönloh, 1882-1961): novellen ('Titaantjes').\n• Slauerhoff, Marsman, Vestdijk, du Perron.\n\n**7. Naoorlogs** (1945-1970):\n• **De Vijftigers** (poëzie 1950s): Lucebert, Kouwenaar, Campert, Vinkenoog.\n• **De Grote Drie** (proza): **W.F. Hermans** ('De donkere kamer van Damocles'), **Gerard Reve** ('De avonden'), **Harry Mulisch** ('De ontdekking van de hemel').\n• Anne Frank: 'Het Achterhuis' (postuum 1947) — wereldwijd gelezen.\n• Hella Haasse: historische romans.\n\n**8. 1970-nu**:\n• Postmodernisme + diversiteit.\n• Cees Nooteboom, A.F.Th. van der Heijden, Hugo Claus (België).\n• Connie Palmen, Marieke Lucas Rijneveld, Tommy Wieringa.\n• Migratie-literatuur: Abdelkader Benali, Yasmine Allas, Hafid Bouazza.",
    checks: [
      {
        q: "**Van den Vos Reynaerde** komt uit welke periode?",
        options: ["Middeleeuwen (~1260)", "Renaissance", "Romantiek", "20e eeuw"],
        answer: 0,
        wrongHints: [null, "Niet — al ver vóór.", "Veel later.", "Veel later."],
        uitlegPad: {
          stappen: [{ titel: "Middelnederlands dierenepos", tekst: "Geschreven rond 1260 door Willem (achternaam onbekend). Satire op feodale samenleving via dieren-personages. Reynaert (vos) bedriegt iedereen. Klassieker uit middelnederlands. Net als de Karel-romans uit dezelfde periode." }],
          niveaus: { basis: "Middeleeuwen. A.", simpeler: "13e eeuw = ME. A.", nogSimpeler: "ME = A." },
        },
      },
      {
        q: "**Max Havelaar** is geschreven door:",
        options: ["Multatuli (Douwes Dekker)", "Vondel", "Mulisch", "Reve"],
        answer: 0,
        wrongHints: [null, "Niet — eerder.", "Niet — naoorlogs.", "Niet — naoorlogs."],
        uitlegPad: {
          stappen: [
            { titel: "1860, koloniale aanklacht", tekst: "Eduard Douwes Dekker (pseudoniem **Multatuli** = 'ik heb veel geleden' in Latijn). Was ambtenaar in Indië, zag misbruik. Schreef Max Havelaar als wake-up call. Politiek-revolutionair effect — leidde tot herziening koloniaal beleid." },
          ],
          theorie: "Vandaag essentieel-lezen voor begrip Nederlandse koloniale geschiedenis.",
          niveaus: { basis: "Multatuli. A.", simpeler: "Douwes Dekker = Multatuli. A.", nogSimpeler: "Multatuli = A." },
        },
      },
      {
        q: "**Tachtigers** (1880s) waren bekend om:",
        options: [
          "'Vorm is inhoud' — kunst om de kunst",
          "Politieke pamfletten",
          "Religieuze poëzie",
          "Wetenschap"
        ],
        answer: 0,
        wrongHints: [null, "Niet primair — wel later impact.", "Niet — afgewezen.", "Niet — kunst."],
        uitlegPad: {
          stappen: [
            { titel: "Esthetisch programma", tekst: "Reactie op brave, moralistische 19e-eeuwse NL-literatuur. Willem Kloos: 'Kunst moet geen moraal, alleen schoonheid'. Tijdschrift 'De Nieuwe Gids' 1885. Belangrijke vernieuwers: Kloos (sonnetten), Van Eeden ('De kleine Johannes'), Gorter ('Mei')." },
          ],
          niveaus: { basis: "Kunst om kunst. A.", simpeler: "Vorm = inhoud. A.", nogSimpeler: "Esthetiek = A." },
        },
      },
      {
        q: "Wie horen bij 'De Grote Drie' (naoorlogs proza)?",
        options: [
          "Hermans, Reve, Mulisch",
          "Vondel, Bredero, Hooft",
          "Lucebert, Kouwenaar, Campert",
          "Multatuli, Couperus, Nescio"
        ],
        answer: 0,
        wrongHints: [null, "Niet — Renaissance.", "Niet — dat zijn Vijftigers (poëzie).", "Niet — eerder."],
        uitlegPad: {
          stappen: [
            { titel: "Naoorlogs proza-klassieken", tekst: "**W.F. Hermans** (1921-1995): 'De donkere kamer van Damocles', 'Nooit meer slapen'.\n**Gerard Reve** (1923-2006): 'De avonden', 'Op weg naar het einde'.\n**Harry Mulisch** (1927-2010): 'De aanslag', 'De ontdekking van de hemel'.\nGedomineerd NL-proza tussen 1947-2000." },
          ],
          niveaus: { basis: "Hermans, Reve, Mulisch. A.", simpeler: "HRM = Grote Drie. A.", nogSimpeler: "HRM = A." },
        },
      },
      {
        q: "**Gysbreght van Aemstel** is van:",
        options: ["Vondel (Renaissance, 1637)", "Bredero", "Hooft", "Bilderdijk"],
        answer: 0,
        wrongHints: [null, "Niet — Bredero meer komedie.", "Niet — Hooft sonnetten + historiografie.", "Niet — later."],
        uitlegPad: {
          stappen: [
            { titel: "Amsterdam-mythe", tekst: "Treurspel over verovering Amsterdam in 1304. Voor 200+ jaar elk Nieuwjaar opgevoerd in Schouwburg. Vondel: belangrijkste NL-toneelschrijver Renaissance. Ook 'Lucifer', 'Adam in ballingschap'." },
          ],
          niveaus: { basis: "Vondel. A.", simpeler: "Vondel-treurspel. A.", nogSimpeler: "Vondel = A." },
        },
      },
    ],
  },

  // ─── C. Genres ────────────────────────────────────────────
  {
    title: "Drie hoofdgenres — lyriek, epiek, drama",
    explanation:
      "**Drie literaire genres** (klassieke indeling van Aristoteles):\n\n**1. Lyriek** (poëzie):\n• Geen verhaal — gevoel + ervaring uitgedrukt.\n• Korter, geconcentreerder.\n• Vormen:\n  - **Sonnet**: 14 regels (8+6 of 4+4+3+3), vast rijmschema.\n  - **Ode**: lofdicht aan persoon/onderwerp.\n  - **Elegie**: rouwgedicht.\n  - **Haiku**: 5-7-5 lettergrepen (Japans).\n  - **Vrije verzen**: geen vast rijm/metrum.\n\n**Versvoeten** (klassieke metriek):\n• **Jambe**: kort-lang (ta-DAH). Meest gebruikt.\n• **Trochee**: lang-kort (DAH-ta).\n• **Anapest**: kort-kort-lang.\n• **Dactylus**: lang-kort-kort.\n\n**Rijmschemata** (sonnet):\n• Italiaans: ABBA ABBA CDC DCD.\n• Engels (Shakespeare): ABAB CDCD EFEF GG.\n\n**2. Epiek** (verhalende kunst):\n• Verteller + verhaal-personages.\n• Vormen:\n  - **Roman**: lang verhaal met meerdere personages.\n  - **Novelle**: korter verhaal, één hoofdpersoon, vaak omslagpunt.\n  - **Kort verhaal** (short story).\n  - **Epos**: langer verhalend gedicht (Ilias, Odyssee).\n  - **Sage/Mythe/Sprookje**: mondelinge traditie.\n\n**Verteller-perspectief**:\n• **Ik-perspectief** (1e persoon): 'Ik liep door de regen.'\n• **Personaal** (3e persoon, één hoofd): vertelt vanuit één personage maar 'hij/zij'. 'Hij liep door de regen, voelde de kou.'\n• **Auctorial** (alwetend, 3e persoon): verteller kent alles + iedereen. 'Hij liep door de regen. Wat hij niet wist: zijn vrouw zou hem die avond verlaten.'\n\n**3. Drama** (toneel):\n• Geschreven om opgevoerd te worden.\n• Bestaat uit dialogen + regie-aanwijzingen.\n• Vormen:\n  - **Tragedie**: hoofdpersoon ondergaat (hubris).\n  - **Komedie**: humor, happy end.\n  - **Tragikomedie**: mix.\n  - **Absurdisme**: Beckett, Ionesco — onzinnige situaties.\n\n**Structuur klassiek drama** (5 bedrijven):\n1. Expositie (situatie + personages).\n2. Verwikkeling (knoop).\n3. Climax (hoogtepunt).\n4. Ontknoping (oplossing begint).\n5. Catastrofe of resolutie.\n\n**Hybride vormen**:\n• Toneelroman (gepubliceerd om te lezen, niet op te voeren).\n• Prozagedicht.\n• Multimedia: film/podcast/serie combineren genres.\n\n**Modern: blurring of genres** — autobiografische roman (Karl Ove Knausgård), poëzie-essays (Maggie Nelson), graphic novels (Maus).",
    checks: [
      {
        q: "Een **sonnet** heeft hoeveel regels?",
        options: ["14", "10", "16", "Variabel"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Te lang.", "Vast getal."],
        uitlegPad: {
          stappen: [{ titel: "Vaste vorm sinds Petrarca", tekst: "14 regels, twee hoofdmodellen:\n- **Italiaans/Petrarca**: 8 (octaaf) + 6 (sextet).\n- **Engels/Shakespeare**: 3 × 4 + 1 × 2 (couplet)." }],
          niveaus: { basis: "14. A.", simpeler: "Sonnet = 14 regels. A.", nogSimpeler: "14 = A." },
        },
      },
      {
        q: "Wat is **personaal perspectief**?",
        options: [
          "3e persoon verteller die binnen één hoofdpersonage blijft",
          "1e persoon ('ik')",
          "Alwetende verteller",
          "Geen verteller"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is ik-perspectief.", "Niet — dat is auctorial.", "Niet — er is wel verteller."],
        uitlegPad: {
          stappen: [{ titel: "'Hij/zij' maar beperkt zicht", tekst: "Verteller in 3e persoon ('hij liep') maar kent ALLEEN gedachten/gevoel van één personage. Effect: meer afstand dan ik-perspectief maar meer intimiteit dan alwetend. Veel gebruikt in moderne literatuur." }],
          niveaus: { basis: "3e persoon, één hoofd. A.", simpeler: "Hij/zij + één gezichtspunt. A.", nogSimpeler: "Personaal = A." },
        },
      },
      {
        q: "Welke is een **drama-vorm**?",
        options: ["Tragedie", "Roman", "Sonnet", "Novelle"],
        answer: 0,
        wrongHints: [null, "Niet — dat is epiek.", "Niet — dat is lyriek.", "Niet — epiek."],
        uitlegPad: {
          stappen: [{ titel: "Toneel-categorie", tekst: "Tragedie = drama-subvorm waarin hoofdpersoon ondergaat (hubris → val). Oedipus, Hamlet, Othello. Komedie = ander drama-subvorm met happy end. Roman/Novelle/Sonnet zijn epiek/lyriek." }],
          niveaus: { basis: "Tragedie. A.", simpeler: "Tragedie = toneel. A.", nogSimpeler: "Tragedie = A." },
        },
      },
      {
        q: "**Vrije verzen** kenmerken zich door:",
        options: [
          "Geen vast rijm of metrum",
          "Verplicht ABBA-rijm",
          "Altijd 14 regels",
          "Geen onderwerp"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is sonnet.", "Niet — geen vaste lengte.", "Wel onderwerp."],
        uitlegPad: {
          stappen: [{ titel: "Vrijheid in vorm", tekst: "Modern poëzie sinds eind 19e eeuw: niet langer gebonden aan klassieke metriek. Whitman ('Leaves of Grass' 1855) pionier. Ritme komt uit zin-bouw + adempauze, niet uit voorgeschreven jamben." }],
          niveaus: { basis: "Geen vaste vorm. A.", simpeler: "Geen rijm-regel. A.", nogSimpeler: "Vrij = A." },
        },
      },
      {
        q: "Welke versvoet is **jambe**?",
        options: ["Kort-Lang (ta-DAH)", "Lang-Kort", "Kort-Kort-Lang", "Lang-Lang"],
        answer: 0,
        wrongHints: [null, "Niet — dat is trochee.", "Niet — dat is anapest.", "Niet — meestal niet 'lang-lang'."],
        uitlegPad: {
          stappen: [{ titel: "Meest voorkomend in NL", tekst: "ta-DAH-ta-DAH-ta-DAH. Voorbeeld: 'De NACHT was KOEL en STIL'. Klassieke 'jambische pentameter' = 5 jamben per regel (Shakespeare-standaard)." }],
          niveaus: { basis: "Kort-Lang. A.", simpeler: "ta-DAH. A.", nogSimpeler: "Jambe = A." },
        },
      },
    ],
  },

  // ─── D. Tekstanalyse + interpretatie ──────────────────────
  {
    title: "Tekstanalyse — niveaus + interpretatie",
    explanation:
      "**Vier niveaus tekstanalyse**:\n\n**1. Letterlijk niveau** (wat staat er?):\n• Wie? Wat? Waar? Wanneer?\n• Plot-samenvatting.\n• Personages: hoofdpersoon, antagonist.\n• Tijd + plaats.\n\n**2. Vorm-niveau** (hoe is het geschreven?):\n• Genre + subgenre.\n• Verteller-perspectief.\n• Stijl: korte/lange zinnen, woordkeuze, register.\n• Stijlfiguren: metafoor, ironie, etc.\n• Structuur: chronologisch? flashbacks? raamvertelling?\n\n**3. Inhoudelijk niveau** (waar gaat het ECHT over?):\n• **Thema** = hoofdgedachte (vaak universeel): liefde, dood, macht, identiteit.\n• Onderwerp: concrete topic (bv. WO2-Holocaust = onderwerp; menselijke wreedheid = thema).\n• Motieven: terugkerende kleine elementen die thema versterken (kleur rood, regen, klok).\n• Symboliek.\n\n**4. Interpretatief niveau** (wat betekent het?):\n• Boodschap van auteur.\n• Relatie met tijd van schrijven.\n• Maatschappelijke kritiek?\n• Persoonlijke reactie (lezer-respons).\n\n**Belangrijke begrippen tekstanalyse**:\n\n**Karakterisering**:\n• **Directe**: verteller zegt 'Jan was egoïstisch'.\n• **Indirecte**: via daden/dialoog laat zien (Jan pakt het laatste stuk taart).\n• **Plat personage**: één hoofd-eigenschap, weinig ontwikkeling.\n• **Rond personage**: complex, ontwikkelt.\n\n**Vertel-tijd vs. vertelde tijd**:\n• Vertelde tijd: wat tijd in het verhaal speelt (bv. 20 jaar).\n• Vertel-tijd: hoeveel pagina's nodig (bv. 200 pagina's).\n• Verhouding bepaalt tempo: snel (samenvatting) vs. langzaam (scène).\n\n**Tijd-bewerking**:\n• **Flashback** (terugverwijzing).\n• **Flashforward** (vooruitwijzing).\n• **Raamvertelling**: verhaal IN verhaal (Boccaccio's Decamerone, 1001 Nacht).\n\n**Eindes**:\n• **Gesloten einde**: alles opgelost.\n• **Open einde**: lezer mag invullen.\n• **Twist-einde**: onverwachte ommekeer (Mulisch 'De aanslag').\n\n**Lezer-rol**:\n• **Empathisch lezen**: meeleven met personages.\n• **Kritisch lezen**: vragen stellen, twijfelen.\n• **Symbolisch lezen**: motieven herkennen + interpreteren.\n• **Historisch lezen**: in context van tijd.\n\n**Examen-strategie**:\n1. Lees rustig eerst zonder vragen.\n2. Onderstreep personages, plaatsen, tijden.\n3. Identificeer thema + motieven.\n4. Pas op interpretatie-valkuilen: niet meer/minder zien dan tekst toelaat.",
    checks: [
      {
        q: "Wat is het **thema** van een verhaal?",
        options: [
          "De universele gedachte/idee (bv. liefde, dood, identiteit)",
          "De plotsamenvatting",
          "De hoofdpersoon",
          "De plaats van handeling"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is plot.", "Niet — dat is personage.", "Niet — dat is setting."],
        uitlegPad: {
          stappen: [{ titel: "Onderwerp vs thema", tekst: "**Onderwerp** = concreet (WO2, eerste liefde, verhuizing).\n**Thema** = universele gedachte (mens-onmenselijkheid, identiteit-vorming, vergankelijkheid). Eén onderwerp kan vele thema's hebben." }],
          niveaus: { basis: "Universele gedachte. A.", simpeler: "Hoofdidee. A.", nogSimpeler: "Hoofdidee = A." },
        },
      },
      {
        q: "**Indirecte karakterisering** is:",
        options: [
          "Via daden/dialoog laten zien wat personage is",
          "Verteller zegt direct wat personage is",
          "Personage karakteriseert zichzelf",
          "Lezer bedenkt"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is direct.", "Niet specifiek — kan ook indirect.", "Niet — auteur geeft signalen."],
        uitlegPad: {
          stappen: [{ titel: "'Show don't tell'", tekst: "Krachtiger dan direct: lezer trekt zelf conclusie uit handelingen. 'Jan pakt het laatste stuk taart zonder vragen' → wij snappen: egoïstisch. Meer literair dan: 'Jan was een egoïst'." }],
          niveaus: { basis: "Via daden. A.", simpeler: "Tonen, niet zeggen. A.", nogSimpeler: "Tonen = A." },
        },
      },
      {
        q: "**Vertelde tijd** is:",
        options: [
          "Hoeveel tijd er in het verhaal verloopt (bv. 1 dag, 20 jaar)",
          "Hoeveel pagina's er zijn",
          "Wanneer het boek geschreven is",
          "Hoe lang lezer over boek doet"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is vertel-tijd.", "Niet — publicatie-jaar.", "Niet — lees-tijd."],
        uitlegPad: {
          stappen: [
            { titel: "Tijd in verhaal", tekst: "Bv. 'Ulysses' (Joyce): vertelde tijd 1 dag. Vertel-tijd: 700 pagina's. Verhouding 1:700 → traag tempo, gedetailleerd. 'War and Peace': 7 jaar in 1200p → matig tempo. **Tempo** = vertel/vertelde-verhouding." },
          ],
          niveaus: { basis: "Tijd in verhaal. A.", simpeler: "Hoeveel tijd er gebeurt. A.", nogSimpeler: "In-verhaal = A." },
        },
      },
      {
        q: "Een **rond personage** is:",
        options: [
          "Complex, ontwikkelt zich, meerdere eigenschappen",
          "Eén dominant eigenschap",
          "Bijfiguur",
          "Antagonist"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is plat.", "Niet — los van karakterisering.", "Niet — rol, niet karakter-diepte."],
        uitlegPad: {
          stappen: [{ titel: "E.M. Forster's onderscheid", tekst: "Plat = stereotype (de gemene baas, dom blondje) — voorspelbaar.\nRond = complex + soms tegenstrijdig + ontwikkelt door verhaal — realistisch. Hoofdpersonages moderne romans meestal rond." }],
          niveaus: { basis: "Complex + ontwikkelend. A.", simpeler: "Meerlagig + verandert. A.", nogSimpeler: "Complex = A." },
        },
      },
      {
        q: "**Raamvertelling** is:",
        options: [
          "Verhaal IN een verhaal (vertel-situatie omkadert verteld verhaal)",
          "Verhaal op één plek",
          "Verhaal zonder einde",
          "Verhaal met flashback"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is setting.", "Niet specifiek.", "Wel mogelijk maar geen definitie."],
        uitlegPad: {
          stappen: [
            { titel: "Buiten- + binnen-verhaal", tekst: "Klassiek: '1001 Nacht' — Sheherazade vertelt elke nacht een verhaal om execitie uit te stellen. Het 'vertel-vertellen' is het raam, de individuele verhalen zijn binnen-verhalen. Ook: Boccaccio's Decamerone, Conrad's 'Heart of Darkness'." },
          ],
          niveaus: { basis: "Verhaal-in-verhaal. A.", simpeler: "Verteller vertelt verhaal in verhaal. A.", nogSimpeler: "Raam = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — NL-canon + analyse-oefening",
    explanation:
      "**Veelgelezen NL-werken op CSE-lijst**:\n\n**Klassiek**:\n• Multatuli — Max Havelaar (1860).\n• Couperus — De stille kracht (1900).\n• Anne Frank — Het Achterhuis (1947).\n\n**Grote Drie**:\n• Hermans — De donkere kamer van Damocles (1958), Nooit meer slapen (1966).\n• Reve — De avonden (1947).\n• Mulisch — De aanslag (1982), De ontdekking van de hemel (1992).\n\n**Modern + recent**:\n• Connie Palmen — De vriendschap (1995).\n• Tim Krabbé — Het gouden ei (1984).\n• A.F.Th. van der Heijden — De tandeloze tijd (cycle).\n• Tommy Wieringa — Joe Speedboot (2005).\n• Marieke Lucas Rijneveld — De avond is ongemak (2018, Booker International 2020).\n\n**Bekende dichters**:\n• Slauerhoff, Marsman, Achterberg, Bloem, Lucebert, Kopland, Komrij, Pfeijffer.\n\n**Vlaamse literatuur** (deel van NL-taalgebied):\n• Hugo Claus — Het verdriet van België (1983).\n• Tom Lanoye, Stefan Hertmans, Dimitri Verhulst.\n\n**Voorbeeld-analyse — 'De avonden' (Reve)**:\n• **Plot**: 10 winterse dagen in leven Frits van Egters, jonge kantoorbediende Amsterdam 1946.\n• **Verteller**: personaal 3e persoon, dicht bij Frits.\n• **Stijl**: ironisch, leeg, droog. Veel dialoog, weinig actie.\n• **Thema's**: zinloosheid, verveling, naoorlogse trauma, ouderen + jongeren.\n• **Stijlfiguren**: ironie + understatement + repetitie ('er is geen einde aan').\n• **Slot**: open — herhaald monotoon leven.\n• **Impact**: één van eerste Nederlandse romans waarin 'gewone' levens-onbeduidendheid centraal — afwijking van heroïsche traditie.\n\n**Examen-stijl-tip voor literair essay**:\n1. **Stelling** (these): wat beweer je?\n2. **Bewijs uit tekst** (citaten + verwijzingen).\n3. **Context** (auteur, tijd, genre).\n4. **Conclusie** (samenvatting + persoonlijke positie).\n\nVoorbeeld-stelling: '*De avonden* van Reve toont hoe naoorlogs Nederland leed onder existentieel vacuüm, door gebruik van ironische understatement.'",
    checks: [
      {
        q: "**'De avond is ongemak'** (Marieke Lucas Rijneveld) won welke prijs?",
        options: ["Booker International 2020", "Nobelprijs", "Pulitzer", "Hugo-prijs"],
        answer: 0,
        wrongHints: [null, "Niet — geen NL'er.", "Niet — Amerikaans.", "Niet — SF/fantasy."],
        uitlegPad: {
          stappen: [{ titel: "Internationaal doorgebroken", tekst: "Eerste Nederlandstalige auteur ooit met Booker International Prize. Roman over jong meisje na verlies broer in streng-gereformeerd boeren-milieu. Rijneveld was toen 29 — jongste laureaat ooit." }],
          niveaus: { basis: "Booker International. A.", simpeler: "Booker 2020. A.", nogSimpeler: "Booker = A." },
        },
      },
      {
        q: "Welke roman wordt **NIET** door Mulisch geschreven?",
        options: [
          "De avonden",
          "De aanslag",
          "De ontdekking van de hemel",
          "Twee vrouwen"
        ],
        answer: 0,
        wrongHints: [null, "Wel Mulisch.", "Wel Mulisch.", "Ook Mulisch."],
        uitlegPad: {
          stappen: [
            { titel: "Reve schreef 'De avonden'", tekst: "**'De avonden'** is van **Gerard Reve** (1947, debuutroman, baanbrekend). Mulisch-romans: 'De aanslag' (1982), 'De ontdekking van de hemel' (1992), 'Twee vrouwen', 'Het stenen bruidsbed'." },
          ],
          theorie: "Klassieke valkuil: Grote Drie naam-verwarring. Hermans schreef 'De donkere kamer van Damocles', 'Nooit meer slapen'.",
          niveaus: { basis: "Reve, niet Mulisch. A.", simpeler: "De avonden = Reve. A.", nogSimpeler: "Reve = A." },
        },
      },
      {
        q: "Een **personaal verteller** kan:",
        options: [
          "Alleen gedachten/gevoel van één personage weten",
          "Alle gedachten van iedereen",
          "Niet vertellen",
          "Alleen feiten"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is auctorial.", "Wel verteller.", "Wel emoties."],
        uitlegPad: {
          stappen: [{ titel: "Beperkt 3e-persoon", tekst: "Personaal: alles wordt verteld VANUIT één personage's gezichtspunt. Wat andere personages denken/voelen: ALLEEN via wat hoofdpersonage observeert of vermoedt. Geeft intimiteit + onbetrouwbaarheid (hoofdpersonage kan zich vergissen)." }],
          niveaus: { basis: "Eén hoofd. A.", simpeler: "Beperkt tot één personage. A.", nogSimpeler: "Eén = A." },
        },
      },
      {
        q: "'Het regende katten en honden' is een:",
        options: ["Hyperbool", "Personificatie", "Metafoor", "Litotes"],
        answer: 0,
        wrongHints: [null, "Niet — geen menselijking.", "Mogelijk metafoor maar primair = overdrijving.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [{ titel: "Sterke overdrijving", tekst: "Het regent niet ECHT katten + honden — overdrijving voor 'het regent enorm hard'. Engelse uitdrukking ('it's raining cats and dogs'), in NL minder gebruikelijk. Primair: hyperbool. Een uitdrukking als deze noem je 'idioom' of 'cliché' als vaste taalvorm." }],
          niveaus: { basis: "Hyperbool. A.", simpeler: "Overdrijving. A.", nogSimpeler: "Hyperbool = A." },
        },
      },
      {
        q: "Een **open einde** is:",
        options: [
          "Slot zonder definitieve oplossing — lezer mag invullen",
          "Slot dat alles oplost",
          "Geen slot",
          "Twist"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is gesloten.", "Wel slot, maar onafgewerkt.", "Twist is anders."],
        uitlegPad: {
          stappen: [
            { titel: "Lezer-werk", tekst: "Auteur kiest bewust onvoltooidheid: lezer moet zelf nadenken over uitkomst. Voorbeeld: 'No Country for Old Men' (McCarthy), 'De avonden' (Reve). Versterkt thema 'onbeantwoordbare vragen van leven'." },
          ],
          niveaus: { basis: "Niet opgelost. A.", simpeler: "Lezer mag invullen. A.", nogSimpeler: "Open = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const stijlLiteratuurHavoVwo = {
  id: "stijl-literatuur-havo-vwo",
  title: "Stijlfiguren + Literatuur (HAVO/VWO Nederlands)",
  emoji: "📜",
  level: "havo-vwo-4-5",
  subject: "nederlands",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Nederlands — Stijlfiguren + Literatuur (CSE-onderwerp)",
  prerequisites: [
    { id: "betoog-beschouwing-havo-vwo", title: "Betoog + Beschouwing", niveau: "havo-3F" },
  ],
  intro:
    "Stijlfiguren + Literatuur voor HAVO/VWO eindexamen — beeldspraak, klankfiguren, contrast + vertekening, literaire periodes (ME tot nu), drie genres, tekstanalyse + interpretatie, NL-canon. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "stijlfiguur", "stijlmiddel",
    "metafoor", "vergelijking",
    "personificatie", "synesthesie",
    "alliteratie", "assonantie", "onomatopee",
    "anafoor", "refrein", "climax",
    "tautologie", "pleonasme",
    "antithese", "paradox", "oxymoron",
    "hyperbool", "eufemisme", "litotes", "understatement",
    "ironie", "sarcasme",
    "metonymia", "synecdoche",
    "rhetorische vraag",
    "Middeleeuwen", "Reynaert", "Karel ende Elegast",
    "Renaissance", "Vondel", "Hooft", "Bredero",
    "Gysbreght van Aemstel",
    "Verlichting",
    "Romantiek", "Multatuli", "Max Havelaar",
    "Tachtigers", "Kloos", "Van Eeden",
    "Couperus", "Nescio",
    "Vijftigers", "Lucebert",
    "Grote Drie", "Hermans", "Reve", "Mulisch",
    "De avonden", "De aanslag",
    "Marieke Lucas Rijneveld", "Booker",
    "lyriek", "epiek", "drama",
    "sonnet", "ode", "elegie", "haiku",
    "jambe", "trochee",
    "roman", "novelle", "epos",
    "ik-perspectief", "personaal", "auctorial",
    "tragedie", "komedie",
    "thema", "motief", "symboliek",
    "karakterisering", "rond plat personage",
    "vertelde tijd", "vertel-tijd",
    "flashback",
    "raamvertelling",
    "open einde", "gesloten einde",
  ],
  chapters,
  steps,
};

export default stijlLiteratuurHavoVwo;
