// Leerpad: Maatschappijwetenschappen kernconcepten — HAVO/VWO
// Politiek, vorming + verandering, binding, verhouding. Eindexamen-CSE-stof.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  politiek: "#ab47bc",
  binding: "#42a5f5",
  vorming: "#66bb6a",
  verhoud: "#ef6c00",
  hl: "#ffd54f",
};

const stepEmojis = ["🗳️", "🫂", "🔄", "⚖️", "🏆"];

const chapters = [
  { letter: "A", title: "Politiek + macht", emoji: "🗳️", from: 0, to: 0 },
  { letter: "B", title: "Sociale binding", emoji: "🫂", from: 1, to: 1 },
  { letter: "C", title: "Vorming + verandering", emoji: "🔄", from: 2, to: 2 },
  { letter: "D", title: "Verhouding (rechtsstaat)", emoji: "⚖️", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Politiek + macht ──────────────────────────────────
  {
    title: "Politiek + macht",
    explanation:
      "**Maatschappijwetenschappen HAVO/VWO** (afgekort MAW) onderzoekt samenleving via 4 hoofdconcepten: **politiek, binding, vorming, verhouding**.\n\n**Kernconcept Politiek**:\n• **Politiek** = bindende besluiten nemen voor samenleving (Easton: 'gezaghebbende toedeling van waarden').\n• **Macht** = vermogen anderen iets te laten doen wat ze anders niet zouden doen.\n• **Gezag** = legitieme macht (aanvaard door betrokkenen).\n• Max Weber: drie soorten gezag:\n  - **Traditioneel** (koning erft).\n  - **Charismatisch** (persoonlijke uitstraling: Mandela, Churchill).\n  - **Rationeel-legaal** (op basis van regels: ministers, ambtenaren).\n\n**Politieke systemen**:\n\n**Democratie**:\n• Volk kiest leiders + heeft inspraak.\n• **Directe democratie** (Athene, Zwitserse referenda).\n• **Representatieve democratie** (NL: kiezen volksvertegenwoordigers).\n• Kenmerken: vrije + eerlijke verkiezingen, scheiding der machten, persvrijheid, rechtsstaat.\n\n**Autoritair** / **dictatuur**:\n• Macht bij één persoon of groep, geen vrije verkiezingen.\n• Voorbeelden: China (Xi), Rusland (Poetin), Iran, NK.\n\n**Hybride regimes** (gedeeltelijk democratisch):\n• Hongarije (Orbán), Turkije (Erdoğan).\n• Verkiezingen, maar pers + rechters onder druk.\n\n**Nederlands politiek systeem**:\n• **Constitutionele monarchie**: Koning ceremonieel, regering politiek.\n• **Parlementaire democratie**: regering rekenschap aan parlement.\n• **Coalitie-regering**: meerdere partijen vormen meerderheid (NL nooit één-partij-meerderheid).\n• **Twee Kamer-stelsel**:\n  - **Tweede Kamer** (150 leden, direct gekozen) — wetten + controle regering.\n  - **Eerste Kamer / Senaat** (75 leden, indirect via Provinciale Staten) — toetst kwaliteit wetten.\n• **Politieke partijen** (2024-25): VVD, D66, PvdA-GL, CDA, PVV, BBB, NSC, FvD, SP, CU, SGP, Volt, DENK, BVNL.\n• **Coalitie-Schoof** (sinds juli 2024): PVV + VVD + NSC + BBB.\n\n**Politieke ideologieën**:\n• **Liberalisme**: vrijheid individu, minimale staat. VVD.\n• **Sociaal-democratie**: gelijke kansen + sociale zekerheid. PvdA-GL.\n• **Christen-democratie**: gemeenschap + traditie. CDA, CU.\n• **Conservatisme**: behoud + voorzichtige verandering.\n• **Populisme**: 'het volk vs elite'. PVV, BBB, FvD.\n• **Socialisme**: gelijkheid + collectief eigendom. SP.\n• **Groen**: milieu + duurzaamheid. GL.\n\n**Politieke participatie**:\n• **Stemmen** (basisniveau).\n• **Demonstreren** (Klimaatmars, Boerenprotest).\n• **Lidmaatschap politieke partij** (gedaald: ~2% volwassen NL'ers).\n• **Lobbyen** (organisaties beïnvloeden beleid).\n• **Burgerinitiatief** (40.000 handtekeningen → behandeling parlement).\n• **Referendum** (NL afgeschaft 2018, behalve correctief lokaal).\n\n**Pressiegroepen + belangenorganisaties**:\n• **Vakbonden** (FNV, CNV): arbeidsbelangen.\n• **Werkgevers** (VNO-NCW): bedrijfsleven.\n• **Milieubeweging** (Greenpeace, Milieudefensie).\n• **Mensenrechten** (Amnesty).\n• **Boerenbelangen** (LTO, recent BBB als partij).\n\n**Macht-bronnen**:\n• **Formele macht**: ambt / functie.\n• **Geld / economisch**: rijkdom.\n• **Kennis / expertise**.\n• **Informatie / media**.\n• **Aantal mensen** (massa-beweging).\n• **Geweld / fysiek**.\n\n**Politieke besluitvorming-modellen**:\n• **Rationele model**: beste alternatief op basis analyse.\n• **Incrementeel** (Lindblom): kleine aanpassingen op bestaand beleid ('muddling through').\n• **Garbage can** (Cohen, March, Olsen): problemen, oplossingen, deelnemers ontmoeten elkaar toevallig.\n• **Beleidsnetwerken**: belangengroepen + ambtenaren + politici verweven.",
    checks: [
      {
        q: "Max Weber's **drie soorten gezag** zijn:",
        options: ["Traditioneel / charismatisch / rationeel-legaal","Goed / slecht / neutraal","Wettelijk / illegaal","Mannelijk / vrouwelijk / divers"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Weber 1922", tekst: "**Max Weber**: drie types gezag.\n• **Traditioneel** (koning erft).\n• **Charismatisch** (uitstraling).\n• **Rationeel-legaal** (regels).\n\nModerne staat = vooral rationeel-legaal." }],
          niveaus: { basis: "Trad/char/rat. A.", simpeler: "Weber-3 = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "NL is een **constitutionele monarchie + parlementaire democratie**. Wat houdt 'constitutionele' in?",
        options: ["Koning gebonden aan grondwet, niet absoluut","Koning kiest minister","Volledig democratisch","Geen regering"],
        answer: 0,
        wrongHints: [null, "Niet — formaliteit alleen.", "Wel democratisch — ander deel.", "Wel regering."],
        uitlegPad: {
          stappen: [{ titel: "Grondwet > koning", tekst: "**Constitutionele monarchie**: monarch (koning) onderworpen aan **grondwet**. Niet absoluut zoals Lodewijk XIV ('l'État c'est moi'). Koning ceremonieel rol. NL sinds 1815 (Willem I) constitutioneel; ministersverantwoordelijkheid sinds 1848 (Thorbecke)." }],
          niveaus: { basis: "Koning gebonden aan grondwet. A.", simpeler: "Const. = grondwet boven koning = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke partij past bij **sociaal-democratie**?",
        options: ["PvdA-GL","VVD","CU","FvD"],
        answer: 0,
        wrongHints: [null, "Niet — liberalisme.", "Niet — christen-democratie.", "Niet — conservatief populisme."],
        uitlegPad: {
          stappen: [{ titel: "PvdA-GL combinatie", tekst: "**Sociaal-democratie** combineert markteconomie met sterke sociale zekerheid + herverdeling. **PvdA-GL** (samengaan PvdA + GroenLinks bij 2023-verkiezingen) is de centraal-linkse partij in NL." }],
          niveaus: { basis: "PvdA-GL. A.", simpeler: "Soc-dem = PvdA-GL = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **burgerinitiatief**?",
        options: ["40.000 handtekeningen → parlement behandelt","Verplicht stemmen","Een wet over burgers","Belasting initiatief"],
        answer: 0,
        wrongHints: [null, "Niet — NL niet verplicht.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Onderwerp agenderen", tekst: "**Burgerinitiatief**: burgers kunnen onderwerp op agenda Tweede Kamer zetten met **40.000 handtekeningen + steun voor behandeling**. Geen referendum — alleen agendering. Resultaat niet bindend. Voorbeeld: campagne *Stop Particulier Vuurwerk* (2017)." }],
          niveaus: { basis: "40k → parlement. A.", simpeler: "Burgerinit. = 40k handt. = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Coalitie-Schoof** (sinds juli 2024) bestaat uit:",
        options: ["PVV + VVD + NSC + BBB","VVD + D66 + CDA + CU","PvdA + GL + SP","CDA alleen"],
        answer: 0,
        wrongHints: [null, "Vorige Rutte-IV.", "Nooit zo.", "Niet — coalitie."],
        uitlegPad: {
          stappen: [{ titel: "Schoof-kabinet", tekst: "**Kabinet-Schoof** sinds 2 juli 2024: vierpartij-coalitie **PVV + VVD + NSC + BBB**. Eerste keer PVV in regering. Dick Schoof als minister-president (extra-parlementair, geen partij). Discussie over uitvoeringskracht + standpunten migratie." }],
          niveaus: { basis: "PVV/VVD/NSC/BBB. A.", simpeler: "Schoof = 4 partijen = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Sociale binding ───────────────────────────────────
  {
    title: "Sociale binding — wat houdt mensen samen?",
    explanation:
      "**Kernconcept Binding** = hoe mensen tot maatschappij samen worden gehouden.\n\n**Drie typen binding** (klassiek):\n\n**1. Affectieve binding** (gevoel):\n• Liefde, vriendschap, familie.\n• Identificatie met groep ('wij-gevoel').\n• Loyaliteit aan club, land, religie.\n\n**2. Cognitieve binding** (kennis + waarden):\n• Gedeelde normen + waarden.\n• Cultuur, geschiedenis, taal.\n• Religie en levensovertuiging.\n• Wetenschap + bewezen kennis.\n\n**3. Functionele binding** (taakverdeling):\n• Mensen hebben elkaar nodig om te leven.\n• Arbeidsdeling, ruil, economie.\n• Diensten + producten van anderen.\n\n**4. Politiek-juridische binding** (wetten + regels):\n• Gedeelde rechtsregels (wet, grondwet).\n• Staatsburgerschap.\n• Staatsmacht handhaaft.\n\n**Sociale cohesie**:\n• Mate waarin mensen verbonden zijn + samenwerken.\n• Hoog: gemeenschappelijke doelen + waarden, vertrouwen.\n• Laag: polarisatie, wantrouwen.\n\n**Identiteit + groepen**:\n• **Persoonlijke identiteit**: wie ben ik?\n• **Sociale identiteit**: tot welke groepen behoor ik? (nationaliteit, gender, religie, beroep, etc.).\n• Mensen hebben meerdere overlappende identiteiten (intersectionaliteit).\n\n**Sociale categorieën**:\n• **Klasse** (Marx): bezit van productie-middelen.\n• **Sociaaleconomische status** (modern): inkomen + opleiding + beroep.\n• **Gender** + sexualiteit.\n• **Etniciteit / herkomst**.\n• **Generatie** (boomers, Gen X, millennials, Gen Z, alpha).\n\n**Cultuur**:\n• **Cultuur** = aangeleerde gedragspatronen + ideeën binnen groep.\n• Manifestaties: taal, religie, kunst, eten, kleding, gebruiken.\n• Sub-culturen + tegenculturen.\n• **Cultuurrelativisme**: geen cultuur beter dan ander (descriptief uitgangspunt).\n• **Etnocentrisme**: eigen cultuur als norm (vermijden in MAW).\n\n**Socialisatie**:\n• Hoe mensen cultuur + waarden + rollen leren.\n• **Primair**: in familie (eerste jaren).\n• **Secundair**: school, vrienden, media, werk.\n• **Tertiair**: levenslang door nieuwe ervaringen.\n• **Socialisatie-agenten**: familie, peergroup, school, media, religieuze instituties, werk.\n\n**Sociale instellingen** (institutions):\n• Gezin, school, kerk, leger, gevangenis, ziekenhuis, bedrijven.\n• Structureren gedrag + verwachtingen.\n• Veranderen over tijd (gezin-vormen, kerkbezoek, etc.).\n\n**Polarisatie** (recent grote zorg):\n• **Affectieve polarisatie**: niet inhoudelijk maar emotioneel — andere groep niet meer aardig.\n• Onderzoek: NL gepolariseerd op klimaat, migratie, Israël-Palestina, COVID-maatregelen.\n• Filterbubbels in sociale media versterken.\n• Risico: democratie functioneert slechter, geweld stijgt.\n\n**Vertrouwen**:\n• **Sociaal vertrouwen** = vertrouwen in mede-burgers.\n• **Institutioneel vertrouwen** = in overheid, rechters, media.\n• NL relatief hoog, maar dalend laatste jaren.\n• SCP onderzoekt jaarlijks.\n\n**Robert Putnam** + sociaal kapitaal:\n• *Bowling Alone* (2000): VS-Amerikanen minder gemeenschapsleven.\n• **Bridging capital**: verbindingen tussen verschillende groepen.\n• **Bonding capital**: binnen eigen groep.\n• Beide nodig voor gezonde samenleving.\n\n**Multiculturalisme**:\n• **Pluraliteit** = verschillende groepen leven naast elkaar.\n• Debatten over integratie (assimilatie vs accommodatie).\n• NL: jaren '90 optimisme, post-2001 + Van Gogh-moord 2004 omslag.\n• Recente politiek: meer assimilatie-eis (PVV, NSC, VVD).\n\n**Émile Durkheim** (1858-1917, socioloog):\n• Klassieker: studie zelfmoord.\n• **Mechanische solidariteit** (traditioneel): mensen op elkaar lijken → samenhang.\n• **Organische solidariteit** (modern): verschillende rollen → samenhang door afhankelijkheid.\n• **Anomie**: gebrek aan normen → ontworteling.",
    checks: [
      {
        q: "Welk type binding is **gemeenschappelijke taal + religie + waarden**?",
        options: ["Cognitief","Affectief","Functioneel","Politiek-juridisch"],
        answer: 0,
        wrongHints: [null, "Niet — dat is gevoel.", "Niet — dat is taakverdeling.", "Niet — wetten."],
        uitlegPad: {
          stappen: [{ titel: "Kennis + waarden samen", tekst: "**Cognitieve binding** = gedeelde normen, waarden, cultuur, taal, kennis. Mensen weten + geloven hetzelfde → voelen verbondenheid. Voorbeeld: Nederlandse taal binden NL'ers (zelfs in buitenland)." }],
          niveaus: { basis: "Cognitief. A.", simpeler: "Cult/taal = cognitief = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Primaire socialisatie** vindt vooral plaats in:",
        options: ["Familie / gezin","School","Werk","Online"],
        answer: 0,
        wrongHints: [null, "Niet — dat is secundair.", "Tertiair.", "Tertiair."],
        uitlegPad: {
          stappen: [{ titel: "Eerste jaren = familie", tekst: "**Primaire socialisatie** = eerste belangrijke (0-6 jaar): vooral in **familie**. Daar leren kinderen basis-taal, basis-waarden, gehechtheid. **Secundair** (school, peergroep) breidt uit. **Tertiair** (werk, eigen gezin) gaat door volwassen leven." }],
          niveaus: { basis: "Familie. A.", simpeler: "Primair = gezin = A.", nogSimpeler: "Gezin = A." },
        },
      },
      {
        q: "**Affectieve polarisatie** is:",
        options: ["Niet inhoudelijk maar emotionele afkeer andere groep","Geweld","Verkiezingen","Migratie"],
        answer: 0,
        wrongHints: [null, "Kan gevolg zijn — niet hetzelfde.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Emotioneel verschil", tekst: "**Affectieve polarisatie**: niet op inhoud maar **emotioneel**. Ik kan ander politiek standpunt verdragen, maar **vind aanhanger niet aardig + wantrouw die**. Onderzoek toont stijging laatste 10 jaar. Filterbubbels online versterken." }],
          theorie: "Cito-actueel: COVID-maatregelen, klimaat, migratie, Israël-Palestina-debat hebben affectieve polarisatie versterkt.",
          niveaus: { basis: "Emotionele afkeer. A.", simpeler: "Affectief pol = emotie = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Durkheim's** verschil traditioneel vs modern:",
        options: ["Mechanische → organische solidariteit","Religieus → atheïstisch","Boer → arbeider","Rijk → arm"],
        answer: 0,
        wrongHints: [null, "Soms gevolg, niet kern.", "Te eng.", "Niet de focus."],
        uitlegPad: {
          stappen: [{ titel: "Solidariteit-vormen", tekst: "**Durkheim**:\n• **Mechanische solidariteit** (traditioneel kleine gemeenschap): mensen **lijken** op elkaar → samenhang.\n• **Organische solidariteit** (modern complexe maatschappij): mensen **verschillen** in rol → afhankelijk van elkaar → samenhang.\n\nVoorbeeld: dorp van 100 boeren = mechanisch. Stad van 1 mln verschillende beroepen = organisch." }],
          niveaus: { basis: "Mech → org. A.", simpeler: "Durkheim 2 soorten = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Bridging capital** (Putnam) is:",
        options: ["Verbinding tussen verschillende groepen","Binnen eigen groep","Internetkabel","Geld lenen"],
        answer: 0,
        wrongHints: [null, "Niet — dat is bonding.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Bruggen slaan", tekst: "**Bridging social capital** (Putnam): netwerken die **verschillende groepen** verbinden (etnisch, religieus, klasse). Versus **bonding capital**: binnen eigen groep (familie, kerk). Beide nodig — bridging vooral voor diverse maatschappij." }],
          niveaus: { basis: "Tussen groepen. A.", simpeler: "Bridging = brug tussen = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Vorming + verandering ─────────────────────────────
  {
    title: "Vorming + verandering — hoe ontstaan + veranderen samenlevingen?",
    explanation:
      "**Kernconcept Vorming + Verandering** = hoe individu socialiseert + hoe samenleving zich ontwikkelt.\n\n**Op individueel niveau** (zie ook 'binding'):\n• **Socialisatie** vormt individu tot lid samenleving.\n• **Identiteitsontwikkeling**: hoe ontwikkel je 'wie ben ik?' over leven.\n• **Levensloop-perspectief**: kindertijd → adolescentie → volwassen → ouderdom. Sociale verwachtingen elke fase.\n\n**Op samenleving-niveau**:\n\n**Maatschappelijke veranderingen** (modernisering):\n• **Industrialisatie** (~1750-1900): van landbouw naar fabrieken.\n• **Urbanisatie**: mensen trekken naar steden.\n• **Secularisatie**: religie verliest invloed op maatschappij.\n• **Individualisering**: nadruk op individu boven groep.\n• **Globalisering**: wereldwijde verbondenheid (sinds ~1970).\n• **Digitalisering**: informatie-revolutie (sinds ~1990).\n• **Vergrijzing**: meer ouderen, minder werkenden.\n\n**Theorieën maatschappelijke verandering**:\n\n**Karl Marx**: dialectiek + materialisme.\n• Productieverhoudingen veranderen → maatschappij verandert.\n• Klassen-strijd drijft historie.\n• Feodalisme → kapitalisme → communisme.\n\n**Max Weber** (1864-1920):\n• 'Protestantse ethiek + de geest van het kapitalisme' (1905).\n• Calvinisme + werkethiek → ontstaan modern kapitalisme.\n• Rationalisering = sleutel-proces modernisering.\n• 'IJzeren kooi' van bureaucratie.\n\n**Émile Durkheim**:\n• Modernisering vergroot complexiteit + arbeidsdeling.\n• Risico: anomie (normloosheid).\n\n**Theodor Adorno + Frankfurter Schule**:\n• Kritiek op massacultuur + cultuurindustrie.\n• Modernisering kan barbarij opleveren (Holocaust als 'product' moderniteit).\n\n**Anthony Giddens** (1938-):\n• Late moderniteit / reflexieve moderniteit.\n• Globalisering + risico-maatschappij.\n• Detraditionalisering: ouders/kerk/buren minder bepalend.\n\n**Ulrich Beck**:\n• *Risikogesellschaft* (1986).\n• Moderne maatschappij produceert eigen risico's (klimaat, kernenergie, financiële crises).\n\n**Pierre Bourdieu** (1930-2002):\n• **Habitus**: aangeleerde manier van denken/voelen/handelen door omgeving.\n• **Sociaal kapitaal**: netwerken.\n• **Cultureel kapitaal**: kennis, smaak, opleiding (geërfd van ouders).\n• Reproductie van klasse via onderwijs.\n\n**Generatie-verschillen** (Cito-pattern):\n• **Stille generatie** (1928-45): WO2-trauma, sober.\n• **Boomers** (1946-64): wederopbouw, optimisme.\n• **Gen X** (1965-80): individualisering, 'no future' jaren '80.\n• **Millennials** (1981-96): digitale revolutie, financiële crisis 2008.\n• **Gen Z** (1997-2012): smartphone-natives, klimaat-angst, COVID-puberteit.\n• **Gen Alpha** (2013-): post-COVID, AI-natives.\n\n**Veranderend onderwijs (NL)**:\n• Tot 1960s: standsverschillen sterk in school-toegang.\n• Mammoetwet 1968 (Cals): integreerde middelbaar.\n• Stijgende deelname: 1960 ~10% HBO/WO → 2024 ~50%.\n• Maar **stapeling stopt**: minder doorstroom dan vroeger.\n\n**Veranderend gezin**:\n• Klassiek: mannen-vrouwen gehuwd, kinderen.\n• Modern: divorces (~30-35%), samenwonen, eenoudergezinnen, regenbooggezinnen, kinderloos.\n• Vrouwen werken: 1960 ~25% → 2024 ~80% (vaak deeltijd).\n• Vaders meer betrokken bij zorg (geboorteverlof verhoogd 2019-2020).\n\n**Veranderende religie (NL)**:\n• 1960: ~80% kerkelijk.\n• 2024: ~50% onkerkelijk.\n• 'Ietsisme': geloof in 'iets', niet specifieke godsdienst.\n• Islam ~5% (groei door migratie + hogere geboortecijfer).\n• Hindoeïsme, Boeddhisme groeien op kleine schaal.\n\n**Veranderende media**:\n• 1990: tv + krant dominant.\n• 2024: internet + social media (TikTok, Instagram, YouTube).\n• Vertrouwen in traditionele media gedaald.\n• Fake news + filterbubbels.\n• AI gen content versterkt problemen.\n\n**Klimaat als nieuwe variabele**:\n• Klimaatverandering = mens-veroorzaakt.\n• Beleidsuitdaging eeuw 21.\n• Tegenstellingen: pro-klimaat (jongeren, GL, D66) vs sceptisch (delen oude PVV/BBB-aanhang).",
    checks: [
      {
        q: "**Secularisatie** betekent:",
        options: ["Religie verliest maatschappelijke invloed","Mensen worden religieuzer","Meer kerken bouwen","Religieus onderwijs"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet relevant.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Religie naar privé", tekst: "**Secularisatie**: religie verliest publieke invloed; wordt privé-zaak. NL: 1960 ~80% kerkelijk → 2024 ~50% onkerkelijk. Verzuiling (1900-1960) afgebroken. Vroeger eigen scholen, omroep, kranten per zuil." }],
          niveaus: { basis: "Religie kwijnt. A.", simpeler: "Secul = religie minder = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Weber** verbond opkomst kapitalisme met:",
        options: ["Calvinistische werkethiek","Boeddhisme","Communisme","Tovenarij"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — Marx-context.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Werkethiek + uitverkiezing", tekst: "**Weber** in *Protestantse ethiek* (1905): **calvinisme** (NL, Schotland, deel DE, VS-New England) leerde: hard werken + zuinig leven + tekenen uitverkiezing zijn. Dat creëerde mindset voor kapitalisme: arbeid + spaarzaamheid = goed. Vandaar opkomst NL als eerste 'kapitalistisch' land 17e eeuw." }],
          niveaus: { basis: "Calvinistisch. A.", simpeler: "Weber = calvinisme + kap = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Bourdieu's** habitus is:",
        options: ["Aangeleerde manier van denken/voelen door omgeving","Geld","Klederdracht","Habitat (woonomgeving)"],
        answer: 0,
        wrongHints: [null, "Niet — wel verwante concepten.", "Niet — slechts uitdrukking.", "Klinkt zo maar nee."],
        uitlegPad: {
          stappen: [{ titel: "Onbewuste smaak", tekst: "**Habitus** (Bourdieu): aangeleerde + grotendeels onbewuste manier van denken/voelen/handelen. Gevormd door omgeving (klasse, gezin). Bepaalt smaak (klassieke muziek vs hardcore, krant vs tv), praat, manieren. **Reproductie**: kinderen erven habitus → klasse blijft gereproduceerd ondanks formele gelijkheid." }],
          theorie: "Cito-pattern: 'leg uit waarom onderwijssucces deels afhangt van gezinscultuur' → Bourdieu's habitus + cultureel kapitaal.",
          niveaus: { basis: "Aangeleerd. A.", simpeler: "Habitus = aangeleerde stijl = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Beck's risikogesellschaft** zegt dat moderne maatschappij:",
        options: ["Eigen nieuwe risico's produceert (klimaat, kern, financiën)","Geen risico's heeft","Alleen oude risico's","Veilig is"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — beide.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Door techniek nieuwe gevaren", tekst: "**Beck**: moderne samenleving produceert door techniek + economische ontwikkeling **nieuwe risico's** die zij niet meer goed kan beheersen. Voorbeelden: klimaatverandering, kernrampen (Tsjernobyl/Fukushima), pandemieën, financiële crises (2008), AI-risico's. Klassieke risico's (oorlog, ziekte) niet weg, modern erbij." }],
          niveaus: { basis: "Eigen risico's. A.", simpeler: "Beck = nieuwe risico's = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk **generatie-kenmerk** past bij **Gen Z**?",
        options: ["Smartphone-natives + klimaat-angst","WO2-trauma","Wederopbouw-optimisme","No future jaren '80"],
        answer: 0,
        wrongHints: [null, "Niet — stille generatie.", "Niet — boomers.", "Niet — Gen X."],
        uitlegPad: {
          stappen: [{ titel: "1997-2012", tekst: "**Gen Z** (geboren 1997-2012): **smartphone-natives** (geen tijd zonder), opgroeiend met **klimaatangst** (Greta Thunberg-generatie), **COVID** raakte hen op middelbare/HBO-leeftijd, mentale gezondheid groot thema, fluïde identiteits-opvattingen (gender, sexualiteit)." }],
          theorie: "Cito-vraag-pattern: 'koppel maatschappelijke verandering aan generatie'. Bv: klimaatbeleid groot voor Gen Z, pensioen voor boomers.",
          niveaus: { basis: "Smartphone + klimaat. A.", simpeler: "Gen Z = smartphone + klimaat = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Verhouding (rechtsstaat) ──────────────────────────
  {
    title: "Verhouding — burger, staat, rechtsstaat",
    explanation:
      "**Kernconcept Verhouding** = relatie tussen burger + staat + samenleving + andere actoren.\n\n**Rechtsstaat** (Rule of Law):\n• Iedereen, ook overheid, onder de wet.\n• Onafhankelijke rechters.\n• Burgerrechten gewaarborgd (grondwet + verdragen).\n• Scheiding der machten (Montesquieu).\n• Voorspelbare + transparante regels.\n\n**Tegenovergesteld: 'rule by law'** — wetten als instrument voor onderdrukking (autoritaire staten).\n\n**Grondrechten in NL** (Grondwet hoofdstuk 1):\n• **Klassieke rechten** (vrijheidsrechten):\n  - Vrijheid van meningsuiting (art 7).\n  - Vrijheid godsdienst + levensovertuiging (art 6).\n  - Vrijheid van vereniging + vergadering (art 8 + 9).\n  - Onaantastbaarheid lichaam (art 11).\n  - Privacy briefgeheim + woning (art 12 + 13).\n  - Persvrijheid.\n• **Sociale grondrechten** (zorgplicht overheid):\n  - Werkgelegenheid + bestaanszekerheid (art 19).\n  - Leefbaar milieu (art 21).\n  - Volksgezondheid (art 22).\n  - Onderwijs (art 23).\n• **Politieke rechten**:\n  - Stemrecht (art 4).\n  - Recht op bestuurlijke kennisgeving.\n\n**Internationale rechten**:\n• **UVRM 1948** (universele verklaring rechten van de mens) — VN, niet juridisch bindend maar moreel sterk.\n• **EVRM 1950** (Europees Verdrag Rechten van de Mens) — Raad van Europa, **juridisch bindend** (Europees Hof Straatsburg).\n• **EU Handvest** (2009) — bindend EU-niveau.\n• **Verdragen specifieke groepen**: Vluchtelingenverdrag 1951, Kinderrechtenverdrag 1989.\n\n**Soorten recht**:\n• **Publiek recht**: staat ↔ burger (strafrecht, bestuursrecht, staatsrecht).\n• **Privaat recht**: burgers ↔ burgers/organisaties (contracten, eigendom, familie, schadeloos).\n• **Internationaal recht**: tussen staten + binnen EU-niveau.\n\n**Strafrecht** in NL:\n• Wetboek van Strafrecht: lijst strafbare feiten + straffen.\n• Maximumstraf moord: levenslang.\n• Doodstraf: afgeschaft 1870 (algemeen), volledig 1983.\n• Doel straf:\n  - **Vergelding** (verdiende straf).\n  - **Preventie** (afschrikken: speciaal + generaal).\n  - **Resocialisatie** (terug naar maatschappij).\n  - **Beveiliging** (gevaarlijke daders weg houden).\n• Recent debat: te hoge of te lage straffen?\n\n**Bestuurlijk recht**:\n• Overheid neemt besluiten (vergunning, uitkering, etc.).\n• Burger kan bezwaar maken + naar bestuursrechter.\n• AWB (Algemene Wet Bestuursrecht) regelt procedures.\n\n**Toeslagenaffaire** (recent groot voorbeeld):\n• 2005-2019: belastingdienst beschuldigde 26.000+ ouders onterecht van fraude met kinderopvangtoeslag.\n• Vooral mensen met migratie-achtergrond.\n• Hoge boetes + schuld → financiële + persoonlijke drama's.\n• Kabinet-Rutte III ontslag-genomen 2021.\n• Trage hersteloperatie tot heden.\n• Symbool van overheid die rechtsstaat schade toebracht.\n\n**Mediavrijheid**:\n• **Persvrijheid** = recht media te publiceren.\n• Geheim houden van bron toegestaan (Wet bronbescherming 2019).\n• NL hoog in Wereld Persvrijheid-index, maar dalend (~6e plek 2024).\n• Recente zorgen: bedreigingen tegen journalisten (Peter R. de Vries 2021), polarisatie.\n\n**Inspraak + participatie**:\n• Verkiezingen elke 4 jaar Tweede Kamer.\n• Tussentijds: petities, demonstraties, lobby.\n• Inspraakavonden gemeentelijk.\n• Klachtrecht.\n• Ombudsman: onafhankelijke klachten-instantie.\n\n**Sociale zekerheid** (verhouding individu ↔ collectief):\n• **Werkloosheidswet (WW)**.\n• **AOW** (Algemene Ouderdomswet).\n• **Bijstand** (Participatiewet).\n• **WIA** (arbeidsongeschiktheid).\n• Verschil **volksverzekering** (alle ingezetenen, premie via belasting) en **werknemersverzekering** (werknemers, premie loon).\n\n**Verzorgingsstaat-debat**:\n• NL tussen liberale (VS) en sociaaldemocratische (Zweden) model.\n• Bezuinigingen op zorg + sociale zekerheid (sinds 2000).\n• Discussie: te veel/te weinig overheid?\n\n**EU + NL-soevereiniteit**:\n• Veel besluiten op EU-niveau (handel, klimaat, justitie).\n• EU-recht heeft voorrang op NL-recht (in afgesproken gebieden).\n• Spanning: NL-democratie ↔ EU-besluitvorming (Brussel ver weg gevoeld).\n• Brexit-voorbeeld: VK uit EU 2020.\n\n**Internationale verhoudingen**:\n• NL in VN, EU, NAVO.\n• Klein land, sterke handelsbelangen (Rotterdam-haven, Schiphol).\n• Ontwikkelingssamenwerking (recent verminderd).\n• Mensenrechten-beleid (vaak in spanning met handel: China).",
    checks: [
      {
        q: "Welke recht is een **klassiek grondrecht**?",
        options: ["Vrijheid van meningsuiting","Recht op werk","Recht op zorg","Recht op vakantie"],
        answer: 0,
        wrongHints: [null, "Niet — sociaal recht.", "Niet — sociaal recht.", "Niet primair grondrecht."],
        uitlegPad: {
          stappen: [{ titel: "Vrijheidsrechten vs zorgplicht", tekst: "**Klassieke grondrechten** beschermen burger TEGEN staat (vrijheid van meningsuiting, godsdienst, privacy). **Sociale grondrechten** verplichten staat tot zorg voor burgers (werkgelegenheid, milieu, gezondheid, onderwijs). Verschil: klassiek = 'laat met rust', sociaal = 'doe iets voor'." }],
          niveaus: { basis: "Mening. A.", simpeler: "Klassiek = vrijheid = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**EVRM** verschilt van **UVRM** doordat:",
        options: ["EVRM is juridisch bindend (Hof Straatsburg)","UVRM is bindend","Geen verschil","UVRM is Europees"],
        answer: 0,
        wrongHints: [null, "Niet — UVRM moreel, niet bindend.", "Wel verschil.", "Niet — UVRM is wereldwijd."],
        uitlegPad: {
          stappen: [{ titel: "VN moreel, Europa bindend", tekst: "**UVRM** (Universele Verklaring 1948, VN): moreel + politiek krachtig, **niet juridisch bindend** voor staten. **EVRM** (Europees Verdrag 1950): **juridisch bindend** voor lidstaten Raad van Europa. Burger kan via nationaal recht uitkomen → Europees Hof Mensenrechten **Straatsburg** voor klacht tegen eigen staat." }],
          theorie: "Cito-actueel: NL veroordeeld 2023 om Klimaatzaak Urgenda + Toeslagenaffaire-elementen.",
          niveaus: { basis: "EVRM bindend. A.", simpeler: "EVRM = bindend = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk recht is **privaat recht**?",
        options: ["Koopcontract tussen burgers","Strafrecht","Belastingrecht","Vreemdelingenrecht"],
        answer: 0,
        wrongHints: [null, "Niet — publiek.", "Niet — publiek.", "Niet — publiek."],
        uitlegPad: {
          stappen: [{ titel: "Burgers onderling", tekst: "**Privaat (civiel) recht**: regelt verhoudingen tussen burgers/organisaties: contracten, eigendom, huur, huwelijk, schadevergoeding. Conflict → civiele rechter (kantonrechter, rechtbank). **Publiek recht**: staat ↔ burger: strafrecht (overheid vervolgt), bestuursrecht (vergunning), staatsrecht (grondwet), belastingrecht." }],
          niveaus: { basis: "Koopcontract. A.", simpeler: "Privaat = burger-burger = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "De **Toeslagenaffaire** illustreert vooral falen van:",
        options: ["Rechtsstaat (overheid onterecht beschuldigde burgers)","Verkiezingen","NAVO","EU"],
        answer: 0,
        wrongHints: [null, "Niet — vond plaats binnen normale verkiezingen.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Rechtsstaat-crisis", tekst: "**Toeslagenaffaire**: belastingdienst beschuldigde duizenden ouders **zonder grondige check** van fraude. Hoge boetes, schuld, gezinsdramas. **Rechtsstaat** faalde: geen eerlijke procedure, ouders niet gehoord, discriminatie op herkomst. Rapport-Donner + Parlementaire Enquête lieten zien dat ambtenaren-cultuur + politieke druk samenwerkten." }],
          theorie: "Cito-pattern: 'leg uit waarom Toeslagenaffaire schadelijk voor rechtsstaat'. Antwoord: schending grondrechten + onafhankelijke rechter omzeild.",
          niveaus: { basis: "Rechtsstaat. A.", simpeler: "Toeslagen = rechtsstaat = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is een **doel van straf**?",
        options: ["Resocialisatie","Geld verdienen","Politieke macht","Tijdverlies"],
        answer: 0,
        wrongHints: [null, "Niet — geen doel.", "Niet — anti-rechtsstaat.", "Niet — wel doel."],
        uitlegPad: {
          stappen: [{ titel: "Vier doelen", tekst: "Strafdoelen: **vergelding** (verdiende straf), **preventie** (speciaal: afschrikken dader; generaal: afschrikken anderen), **resocialisatie** (heropvoeden, terug in maatschappij), **beveiliging** (gevaarlijke daders weg).\n\nNederlandse strafrecht legt nadruk op resocialisatie (TBS-systeem, kortere straffen dan VS)." }],
          niveaus: { basis: "Resocialisatie. A.", simpeler: "Doel = resocial. = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — MAW mix",
    explanation:
      "Mix van politiek + binding + vorming + verhouding.\n\nVeel succes!",
    checks: [
      {
        q: "Welk concept gaat over **gedeelde waarden + cultuur**?",
        options: ["Cognitieve binding","Politiek","Macht","Privaat recht"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet primair.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Cognitief = kennis", tekst: "Gedeelde **waarden, normen, cultuur** = cognitieve binding. Naast affectieve (gevoel), functionele (taakverdeling), politiek-juridische (wetten)." }],
          niveaus: { basis: "Cognitief. A.", simpeler: "Waarden = cognitief = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke partij in NL is **liberaal-rechts**?",
        options: ["VVD","PvdA","CU","SP"],
        answer: 0,
        wrongHints: [null, "Sociaal-dem.", "Christen-dem.", "Socialistisch."],
        uitlegPad: {
          stappen: [{ titel: "VVD-positie", tekst: "**VVD** = Volkspartij voor Vrijheid en Democratie: liberaal-rechts. Klassiek liberalisme + economische vrijheid + beperkte overheid. D66: progressief-liberaal (sociaal liberaal). Beide in liberale-traditie maar verschillende accenten." }],
          niveaus: { basis: "VVD. A.", simpeler: "Liberaal-rechts = VVD = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Anomie** (Durkheim) is:",
        options: ["Normloosheid bij snelle maatschappelijke verandering","Een tropische ziekte","Een woord-grap","Belastingvorm"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Ontworteling", tekst: "**Anomie** (Durkheim): gebrek aan duidelijke normen + waarden, vaak bij snelle maatschappelijke verandering (industrialisatie, oorlog, COVID). Mensen voelen zich ontworteld → angst + zelfdoding-risico (Durkheim toonde aan met zelfdoding-statistieken)." }],
          niveaus: { basis: "Normloosheid. A.", simpeler: "Anomie = normloos = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Scheiding der machten** voorkomt:",
        options: ["Tirannie (concentratie macht)","Belastingontduiking","Klimaatverandering","Migratie"],
        answer: 0,
        wrongHints: [null, "Niet — apart probleem.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Macht in evenwicht", tekst: "**Trias politica** (Montesquieu): wetgevende, uitvoerende, rechterlijke macht gescheiden → geen enkele tak kan absoluut worden → **tirannie voorkomen**. Onafhankelijke rechters cruciaal: zonder hen kan regering wetten misbruiken." }],
          niveaus: { basis: "Tirannie. A.", simpeler: "Trias = anti-tirannie = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **populisme** als ideologie?",
        options: ["'Het volk vs elite' — zuiver volk tegen corrupte top","Religieus extremisme","Communisme","Liberalisme"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet relevant.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Anti-elite politiek", tekst: "**Populisme**: politieke stijl die ' **zuivere volk** ' contrasteert met ' **corrupte elite** '. Kan links (Chavez, La France Insoumise) of rechts (PVV, FvD, Trump) zijn. Vaak charismatische leider, simpele oplossingen voor complexe problemen, weerstand tegen mainstream-media + experts." }],
          theorie: "Cito-trend: opkomst populisme in westen sinds 2008-crisis + 2016 (Brexit, Trump).",
          niveaus: { basis: "Volk vs elite. A.", simpeler: "Populisme = volk vs elite = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const maatschappijwetenschappenHavoVwo = {
  id: "maatschappijwetenschappen-havo-vwo",
  title: "Maatschappijwetenschappen kernconcepten (HAVO/VWO)",
  emoji: "🏛️",
  level: "havo4-5-vwo",
  subject: "maatschappij",
  referentieNiveau: "havo-vwo-CSE-MAW",
  sloThema: "MAW HAVO/VWO — kernconcepten politiek/binding/vorming/verhouding eindexamen",
  prerequisites: [
    { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "vmbo-gt-klas3" },
    { id: "mensenrechten-maatschappijleer", title: "Mensenrechten", niveau: "vmbo-gt-klas3" },
  ],
  intro:
    "Maatschappijwetenschappen HAVO/VWO CSE-kernconcepten. Politiek + macht (Weber-gezagstypen, NL-coalitie-Schoof 2024, ideologieën), binding (cognitief/affectief/functioneel + socialisatie + Durkheim + Bourdieu-habitus), vorming + verandering (secularisatie/individualisering + Weber/Beck + generaties), verhouding (rechtsstaat + EVRM + Toeslagenaffaire + strafdoelen). ~15-20 min.",
  triggerKeywords: [
    "maatschappijwetenschappen", "MAW",
    "politiek", "macht", "gezag",
    "Weber", "rationeel-legaal",
    "democratie", "dictatuur", "autoritair",
    "coalitie Schoof", "Schoof-kabinet",
    "PVV", "VVD", "NSC", "BBB", "PvdA-GL", "D66", "CDA",
    "Tweede Kamer", "Eerste Kamer",
    "ideologie", "liberalisme", "sociaal-democratie",
    "populisme",
    "binding", "socialisatie",
    "Durkheim", "anomie",
    "mechanische solidariteit", "organische solidariteit",
    "Bourdieu", "habitus", "cultureel kapitaal",
    "Putnam", "bridging capital",
    "secularisatie", "individualisering",
    "globalisering", "digitalisering",
    "generatie", "Gen Z", "millennial", "boomer",
    "Beck", "risikogesellschaft",
    "rechtsstaat",
    "grondrechten",
    "UVRM", "EVRM",
    "Toeslagenaffaire",
    "trias politica", "Montesquieu",
    "polarisatie",
  ],
  chapters,
  steps,
};

export default maatschappijwetenschappenHavoVwo;
