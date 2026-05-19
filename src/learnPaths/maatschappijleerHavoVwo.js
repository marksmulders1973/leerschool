// Leerpad: Maatschappijleer — HAVO/VWO klas 4
// Verplicht SE: NL-staatsinrichting + pluriforme samenleving + rechtsstaat + criminaliteit + media.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  staat: "#42a5f5",
  cultuur: "#66bb6a",
  recht: "#ef6c00",
  crim: "#ef5350",
  media: "#ab47bc",
};

const stepEmojis = ["🏛️", "🌍", "⚖️", "🚨", "📱"];

const chapters = [
  { letter: "A", title: "Staatsinrichting + politiek", emoji: "🏛️", from: 0, to: 0 },
  { letter: "B", title: "Pluriforme samenleving", emoji: "🌍", from: 1, to: 1 },
  { letter: "C", title: "Rechtsstaat", emoji: "⚖️", from: 2, to: 2 },
  { letter: "D", title: "Criminaliteit + veiligheid", emoji: "🚨", from: 3, to: 3 },
  { letter: "E", title: "Media + technologie", emoji: "📱", from: 4, to: 4 },
];

const steps = [
  // ─── A. Staatsinrichting + politiek ───────────────────────
  {
    title: "Staatsinrichting + politiek",
    explanation:
      "**Maatschappijleer** = verplicht SE-vak (HAVO klas 4, VWO klas 4) voor **alle leerlingen**. Geen CSE. Telt mee voor zak/slaag (combinatiecijfer).\n\n**Onderwerpen**: staatsinrichting + pluriforme samenleving + rechtsstaat + criminaliteit + (vaak) media.\n\n**NL-staatsinrichting**:\n\n**Type staat**:\n• **Constitutionele monarchie** (sinds 1815, Willem I).\n• **Parlementaire democratie**: regering verantwoording aan parlement.\n• **Decentrale eenheidsstaat**: één rechtssysteem, gedecentraliseerd (provincies + gemeenten).\n\n**Trias politica** (scheiding der machten — Montesquieu 1748):\n\n**1. Wetgevende macht**:\n• Maakt wetten.\n• Staten-Generaal (Tweede Kamer 150 + Eerste Kamer 75) **samen met regering**.\n• Tweede Kamer = direct gekozen elke 4 jaar.\n• Eerste Kamer = indirect via Provinciale Staten.\n\n**2. Uitvoerende macht**:\n• Past wetten toe.\n• **Regering** = koning + ministers + staatssecretarissen.\n• **Kabinet** = ministers + staatssecretarissen samen (zonder koning).\n• Hoofd: **minister-president** (premier).\n• Ambtelijke apparaat voert beleid uit.\n\n**3. Rechterlijke macht**:\n• Beoordeelt + spreekt recht.\n• Onafhankelijk van politiek.\n• Levenslange benoeming rechters.\n\n**Hoe komt wet tot stand?**:\n1. **Initiatief**: regering of Kamerlid.\n2. **Wetsvoorstel** ingediend Tweede Kamer.\n3. **Commissie** behandelt + amendementen.\n4. **Plenair debat** + stemming Tweede Kamer.\n5. **Eerste Kamer** stemt (zonder amendementen mogelijk, alleen ja/nee).\n6. **Koning + verantwoordelijke minister** ondertekenen.\n7. **Publicatie Staatsblad** → in werking.\n\n**Politieke stromingen + partijen**:\n• **Liberaal** (vrijheid individu): VVD, D66.\n• **Christen-democratisch** (gemeenschap + traditie): CDA, CU.\n• **Sociaal-democratisch** (gelijkheid + zorg): PvdA-GL.\n• **Confessioneel** (religieus geïnspireerd): SGP, CU.\n• **Populistisch-rechts**: PVV, FvD, BVNL.\n• **Populistisch-platteland**: BBB.\n• **Conservatief-burgerlijk**: NSC.\n• **Socialistisch**: SP.\n• **Groen**: GL (samen met PvdA).\n• **Etnisch**: DENK.\n• **Cultureel-progressief**: Volt.\n\n**Kabinet-Schoof** (sinds 2 juli 2024):\n• PVV + VVD + NSC + BBB.\n• Premier: Dick Schoof (extra-parlementair).\n• Eerste PVV-deelname.\n\n**Verkiezingen**:\n• **Tweede Kamer**: elke 4 jaar (of eerder bij val kabinet).\n• **Europees Parlement**: elke 5 jaar.\n• **Provinciale Staten + Eerste Kamer**: elke 4 jaar.\n• **Gemeenteraad**: elke 4 jaar.\n• **Waterschap**: elke 4 jaar (oudste democratische organisatie NL!).\n\n**Stemrecht**:\n• Vanaf 18 jaar.\n• Alle NL-burgers + sommige EU-burgers (gemeentelijk).\n• Sinds **1917 mannen algemeen stemrecht** (loskoppeling welvaart), **1919 vrouwen** (Aletta Jacobs-strijd).\n• Niet verplicht — wel hoog opkomst-percentage NL (~75-85%).\n\n**Politieke participatie**:\n• Stemmen.\n• Lid worden van partij (gedaald: ~2% NL'ers).\n• Demonstreren.\n• Petities (burgerinitiatief 40.000 handtekeningen).\n• Lobby.\n• Politieke media.\n\n**Politieke macht-bronnen**:\n• Formele macht (ambt).\n• Economisch (geld).\n• Kennis (experts).\n• Aantal (massa-beweging).\n• Geweld (politie/leger).\n• Media-invloed.\n\n**EU-context**:\n• NL EU-lid sinds 1958 (oprichter).\n• Eurozone sinds 1999/2002.\n• EU-recht heeft voorrang in afgesproken gebieden.\n• Spanningen: NL-soevereiniteit vs EU-besluitvorming.",
    checks: [
      {
        q: "Hoeveel leden heeft de **Tweede Kamer**?",
        options: ["150","75","100","225"],
        answer: 0,
        wrongHints: [null, "Eerste Kamer.", "Niet correct.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Vast aantal", tekst: "**Tweede Kamer: 150 leden** (sinds 1956). Direct gekozen door volk elke 4 jaar via evenredige vertegenwoordiging. **Eerste Kamer: 75 leden** (indirect via Provinciale Staten). Daarvoor: TK had 100 leden — uitgebreid om beter representatie te krijgen na uitbreiding kiesrecht." }],
          niveaus: { basis: "150. A.", simpeler: "TK = 150 = A.", nogSimpeler: "150 = A." },
        },
      },
      {
        q: "**Trias politica** is bedacht door:",
        options: ["Montesquieu (1748)","Karl Marx","John Locke","Rousseau"],
        answer: 0,
        wrongHints: [null, "Niet — Marx kwam later.", "Locke beïnvloedde wel maar Montesquieu formaliseerde.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "De l'esprit des lois", tekst: "**Montesquieu** in *De geest van de wetten* (1748): **trias politica** = scheiding van wetgevende, uitvoerende, rechterlijke macht voorkomt tirannie. Geïnspireerd door Engels parlementair systeem. Invloed: Amerikaanse Grondwet 1787, Franse 1791, NL 1815." }],
          niveaus: { basis: "Montesquieu. A.", simpeler: "Trias = Montesq. = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **kabinet**?",
        options: ["Ministers + staatssecretarissen samen","Koning + ministers","Alle volksvertegenwoordigers","Politieke partij"],
        answer: 0,
        wrongHints: [null, "Dat is regering.", "Te breed.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Regering vs kabinet", tekst: "**Regering** = koning + ministers + staatssecretarissen. **Kabinet** = alleen ministers + staatssecretarissen (zonder koning). Hoofd: **minister-president** (premier). Kabinet vergadert vrijdagen in 'Trêveszaal' (Den Haag). Beslissingen bij meerderheid + collegiale verantwoordelijkheid." }],
          niveaus: { basis: "Ministers. A.", simpeler: "Kabinet = ministers = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Sinds wanneer hebben **vrouwen stemrecht** in NL?",
        options: ["1919","1948","1789","1965"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Frankrijk Revolutie.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Aletta Jacobs", tekst: "Vrouwen NL-stemrecht: **1919** (passief 1917, actief 1919). Strijd geleid door **Aletta Jacobs** (1854-1929), eerste vrouwelijke arts NL. **Mannen algemeen stemrecht**: 1917 (loskoppeling van welvaart-vereiste). Vergelijking: Nieuw-Zeeland 1893 (eerste vrouwen-stemrecht wereldwijd), UK 1918/1928 (gefaseerd), VS 1920, Frankrijk 1944 (laat!)." }],
          niveaus: { basis: "1919. A.", simpeler: "Vrouwen 1919 = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Coalitie Schoof** (juli 2024) bestaat uit:",
        options: ["PVV + VVD + NSC + BBB","CDA + PvdA","D66 + VVD","Eén partij meerderheid"],
        answer: 0,
        wrongHints: [null, "Niet huidige.", "Niet huidige.", "Onmogelijk NL."],
        uitlegPad: {
          stappen: [{ titel: "Eerste PVV-deelname", tekst: "**Kabinet-Schoof** sinds 2 juli 2024: 4-partij-coalitie **PVV + VVD + NSC + BBB**. **Premier**: Dick Schoof (extra-parlementair, geen partij). Eerste keer PVV in regering. Compromis-akkoord 'Hoofdlijnenakkoord'. Controvers + spanningen rond migratie + EU-positie." }],
          niveaus: { basis: "4 partijen. A.", simpeler: "Schoof = PVV/VVD/NSC/BBB = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Pluriforme samenleving ────────────────────────────
  {
    title: "Pluriforme samenleving",
    explanation:
      "**Pluriforme samenleving** = samenleving met diverse groepen mensen (verschillen in cultuur, religie, herkomst, leefstijl).\n\nNL **altijd al divers** maar diversiteit-omvang sterk veranderd 20e-21e eeuw.\n\n**Cultuur**:\n• **Cultuur** = aangeleerde gedragspatronen + ideeën binnen groep.\n• Manifestaties: taal, religie, gewoonten, eten, kunst, kleding.\n• Niet statisch — verandert door tijd.\n\n**Sub-cultuur**: kleinere groep binnen hoofdcultuur met eigen kenmerken (hippies, hiphop, gamers).\n\n**Tegen-cultuur**: tegen dominante cultuur ingericht (punk, kraakbeweging).\n\n**Etniciteit**:\n• Groep met **gedeelde achtergrond** (herkomst, geschiedenis, taal, gewoonten).\n• Subjectief — wie voelt zich erbij horen?\n• In NL ~14% bevolking 1e/2e generatie migrant.\n\n**Belangrijke groepen NL** (2024):\n• Autochtoon: ~75% (= NL-geboren met NL-geboren ouders).\n• 1e/2e generatie migratie-achtergrond: ~25%.\n  - Westers (EU/VS/etc.): ~10%.\n  - Niet-westers: ~15% (Turks, Marokkaans, Surinaams, Antilliaans, Indonesisch, Syrisch, Iraans, etc.).\n\n**Religies NL** (2023):\n• **Geen religie / atheïst**: ~55%.\n• **Christelijk**: ~30% (rooms-katholiek ~20%, protestant ~10%).\n• **Islam**: ~5%.\n• **Hindoeïsme, Boeddhisme, Joods**: elk <1%.\n• Trend: secularisatie (kerkbezoek daalt sinds 1960s).\n\n**Religies wereldwijd** (2024):\n• Christendom: ~2,4 mld (31%).\n• Islam: ~1,9 mld (25%).\n• Hindoeïsme: ~1,2 mld (15%).\n• Boeddhisme: ~500 mln (6%).\n• Joods: ~15 mln (0,2%).\n• Onafhankelijk: ~1,2 mld (16%).\n\n**Migratie-redenen** (push/pull):\n\n**Push-factoren** (waarom weg uit thuisland):\n• Oorlog / vervolging.\n• Armoede / werkloosheid.\n• Klimaat / natuurramp.\n• Politieke instabiliteit.\n\n**Pull-factoren** (waarom naar nieuw land):\n• Werk / kansen.\n• Familie-hereniging.\n• Onderwijs.\n• Veiligheid.\n• Welvaart.\n\n**Soorten migranten**:\n• **Asielzoeker**: vraagt formele bescherming (vluchteling).\n• **Vluchteling**: erkende bescherming volgens Vluchtelingenverdrag 1951.\n• **Arbeidsmigrant**: werk-gerelateerd.\n• **Gezinshereniging**: bij familie wonen.\n• **Studenten**.\n• **Klimaat-migrant**: nog geen formele status.\n• **Expatriate**: tijdelijk werk (vaak hoogopgeleide).\n• **Ongedocumenteerd**: zonder verblijfsvergunning.\n\n**NL-migratie-geschiedenis**:\n• 17e eeuw: Joden uit Iberisch Schiereiland, Hugenoten uit FR.\n• 19e eeuw: Duitse arbeiders, koloniale verbanden.\n• 1945-1962: Indonesië-Indo's na onafhankelijkheid.\n• 1960s: gastarbeiders uit Turkije + Marokko (later familie-hereniging).\n• 1975: Suriname-onafhankelijkheid → grote groep verhuist NL.\n• 1990s: Joegoslavië-oorlogen.\n• 2000s: Oost-Europese EU-werkers (Polen, Bulgaren, Roemenen).\n• 2015+: vluchtelingen uit Syrië, Eritrea, Afghanistan, Iran.\n• 2022+: Oekraïners.\n\n**Integratie-modellen**:\n• **Assimilatie**: migranten passen volledig aan dominante cultuur ('smelting pot').\n• **Multiculturalisme**: behoud eigen cultuur naast NL ('salad bowl').\n• **Interculturalisme**: actief uitwisselen + leren.\n• **Segregatie**: aparte groepen, weinig contact (vermijden).\n\n**Discriminatie**:\n• Behandelen op basis groep-kenmerk (niet individu).\n• **Direct**: openlijk uitsluiten.\n• **Indirect**: neutrale regel benadeelt groep onevenredig.\n• Verboden volgens Grondwet (art. 1) + Algemene Wet Gelijke Behandeling.\n\n**Toeslagenaffaire** (2005-2019) als voorbeeld discriminatie:\n• Belastingdienst beschuldigde ouders met migratie-achtergrond vaker van fraude.\n• Resultaat: financiële drama's voor 26.000+ gezinnen.\n• Kabinet-Rutte III viel hierdoor 2021.\n\n**Identiteitspolitiek**:\n• Politiek vanuit groep-identiteit (gender, etniciteit, sexualiteit).\n• Kritiek: leidt tot polarisatie.\n• Voorstanders: noodzakelijk om achterstanden adresseren.",
    checks: [
      {
        q: "Welk **integratie-model** behoudt eigen cultuur?",
        options: ["Multiculturalisme","Assimilatie","Segregatie","Discriminatie"],
        answer: 0,
        wrongHints: [null, "Niet — aanpassen.", "Niet — apart.", "Niet integratie."],
        uitlegPad: {
          stappen: [{ titel: "Salad bowl", tekst: "**Multiculturalisme**: migranten behouden eigen culturele identiteit naast nieuwe samenleving ('salad bowl'). **Assimilatie**: volledig aanpassen aan dominante cultuur ('smelting pot' VS-traditioneel). NL heeft historisch geneigd richting multiculturalisme, sinds 2002 (Fortuyn-moord) meer assimilatie-eis." }],
          niveaus: { basis: "Multiculturalisme. A.", simpeler: "Behoud cultuur = multi = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk percentage NL-bevolking heeft **niet-westerse migratie-achtergrond** (2024)?",
        options: ["~15%","~5%","~50%","~1%"],
        answer: 0,
        wrongHints: [null, "Te laag.", "Te hoog.", "Veel te laag."],
        uitlegPad: {
          stappen: [{ titel: "CBS-cijfers", tekst: "NL-bevolking 2024 (~18 mln):\n• **Autochtoon**: ~75% (NL-geboren met NL-geboren ouders).\n• **Westers** (EU/VS/etc.): ~10%.\n• **Niet-westers**: **~15%** (Turks, Marokkaans, Surinaams, Antilliaans, Syrisch, Iraans, etc.).\n\nGroei van migratie-achtergrond: 1972 ~9%, 2024 ~25%. CBS-definities veranderd 2022 — nu meer focus op herkomst-land." }],
          niveaus: { basis: "15%. A.", simpeler: "Niet-westers ~15% = A.", nogSimpeler: "15 = A." },
        },
      },
      {
        q: "Wat zijn **push-factoren** bij migratie?",
        options: ["Redenen om thuisland te verlaten","Aantrekkings-redenen","Welvaart-creatie","Politiek-belang"],
        answer: 0,
        wrongHints: [null, "Dat zijn pull-factoren.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Push vs Pull", tekst: "**Push-factoren**: redenen om **weg** te gaan uit thuisland — oorlog, vervolging, armoede, klimaat. **Pull-factoren**: redenen om naar **nieuw** land te gaan — werk, kansen, familie, veiligheid. Migratie-beslissing meestal combinatie van beide. Vluchteling: push dominant. Expat: pull dominant." }],
          niveaus: { basis: "Weg-redenen. A.", simpeler: "Push = weg = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel % NL is **geen religie** (2023)?",
        options: ["~55%","~10%","~80%","~30%"],
        answer: 0,
        wrongHints: [null, "Te laag.", "Te hoog.", "Christelijk."],
        uitlegPad: {
          stappen: [{ titel: "Sterke secularisatie", tekst: "**NL 2023**: ~55% geen religie / atheïst / agnost. Christendom ~30% (RK 20%, protestants 10%). Islam ~5%. Andere <1%.\n\n**Trend secularisatie**: 1960 ~80% kerkelijk → 2023 ~30%. Eén van snelst-seculierende landen wereld. Verzuiling (1900-1960) afgebroken." }],
          niveaus: { basis: "55%. A.", simpeler: "Geen religie = 55% = A.", nogSimpeler: "55 = A." },
        },
      },
      {
        q: "**Toeslagenaffaire** illustreert:",
        options: ["Indirecte discriminatie door overheid","Goede uitvoering belastingen","Migratiebeleid","Sociaal vangnet"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet primair.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Etnisch profileren", tekst: "**Toeslagenaffaire (2005-2019)**: belastingdienst beschuldigde ~26.000 ouders van fraude met kinderopvang-toeslag. Ouders met migratie-achtergrond (vooral Surinaams + Turks-Marokkaans) **disproportioneel** geraakt door indirecte discriminatie via algoritme dat 'risico-profielen' creëerde. Hoge boetes + schuld → financiële drama's. Kabinet-Rutte III viel 2021. Symbool van rechtsstaat-falen + structurele discriminatie." }],
          niveaus: { basis: "Discriminatie. A.", simpeler: "Toeslagen = discr = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Rechtsstaat ───────────────────────────────────────
  {
    title: "Rechtsstaat — burgerrechten + scheiding machten",
    explanation:
      "**Rechtsstaat** = staat waarin macht beperkt is door wet + iedereen (ook overheid) onder die wet valt.\n\n**Kenmerken**:\n• Trias politica (scheiding der machten).\n• Onafhankelijke rechters.\n• Grondrechten in grondwet + verdragen.\n• Voorspelbare + transparante regels.\n• Toegang tot rechtspraak.\n\n**Tegenovergesteld**: 'rule by law' — wetten als instrument onderdrukking (autoritaire staten).\n\n**Grondrechten NL** (Grondwet 1815, herziening 1983):\n\n**Klassieke vrijheidsrechten** (overheid moet 'met rust laten'):\n• Vrijheid van meningsuiting (art 7).\n• Vrijheid godsdienst (art 6).\n• Vrijheid vereniging + vergadering (art 8 + 9).\n• Onaantastbaarheid lichaam (art 11).\n• Recht op privacy: briefgeheim, woning (art 12-13).\n• Persvrijheid.\n• Stemrecht (art 4).\n\n**Sociale grondrechten** (overheid moet 'iets doen'):\n• Werkgelegenheid + bestaanszekerheid (art 19).\n• Leefbaar milieu (art 21).\n• Volksgezondheid (art 22).\n• Onderwijs (art 23).\n\n**Internationale grondrechten**:\n• **UVRM 1948** (VN): universeel maar niet juridisch bindend.\n• **EVRM 1950** (Raad van Europa): **juridisch bindend**, klagen mogelijk bij Europees Hof voor de Rechten van de Mens (Straatsburg).\n• **EU-Handvest 2009**: bindend EU-niveau.\n• **Vluchtelingenverdrag 1951**, **Kinderrechtenverdrag 1989**, etc.\n\n**Beperking grondrechten**:\n• Niet absoluut — kunnen beperkt voor andere belangen (veiligheid, rechten anderen).\n• Voorbeeld: vrijheid meningsuiting beperkt door verbod opruiing + smaad + groepsbelediging.\n• **Wetenschappelijk** geregeld + alleen 'noodzakelijk + proportioneel' (volgens EVRM-toets).\n\n**Soorten recht**:\n\n**Publiek recht** (staat ↔ burger):\n• **Staatsrecht**: grondwet, instituties.\n• **Bestuursrecht**: vergunningen, uitkeringen, etc.\n• **Strafrecht**: strafbare feiten + straffen.\n• **Belastingrecht**.\n\n**Privaatrecht** (burgers/organisaties onderling):\n• **Familierecht** (huwelijk, scheiding, kinderen).\n• **Contractenrecht** (overeenkomsten).\n• **Eigendomsrecht**.\n• **Aansprakelijkheidsrecht** (schade).\n• **Erfrecht**.\n• **Arbeidsrecht**.\n\n**Internationaal recht** (tussen staten).\n\n**Rechtspraak**:\n\n**Rechtbanken** (eerste aanleg):\n• Kantonrechter (kleine zaken).\n• Civiele kamer.\n• Strafkamer.\n• Bestuursrechter.\n\n**Gerechtshoven** (hoger beroep): 4 hoven NL (Amsterdam, Den Haag, Arnhem-Leeuwarden, 's-Hertogenbosch).\n\n**Hoge Raad** (cassatie): hoogste rechter, niet over feiten maar of wet correct toegepast.\n\n**Internationaal**:\n• **ICJ** (Internationaal Gerechtshof, Den Haag): geschillen tussen staten.\n• **ICC** (Internationaal Strafhof, Den Haag): individuele oorlogsmisdaden.\n• **EHRM** (Straatsburg): mensenrechten EVRM.\n• **HvJ EU** (Luxemburg): EU-recht.\n\n**Strafrecht**:\n\n**Strafbare feiten**:\n• **Overtredingen** (lichte): verkeer, openbare orde.\n• **Misdrijven** (zware): diefstal, geweld, moord.\n\n**Straffen**:\n• Geldboete.\n• Taakstraf.\n• Gevangenisstraf.\n• Levenslang (max in NL — geen doodstraf sinds 1870).\n• TBS (Ter Beschikking Stelling): bij geestelijk gestoorden gevaarlijken.\n\n**Doelen straf**:\n• **Vergelding** (verdiende straf).\n• **Preventie** (afschrikken: speciaal + generaal).\n• **Resocialisatie** (terugkeer maatschappij).\n• **Beveiliging maatschappij** (gevaarlijke daders weg).\n\n**Strafprocesrecht**:\n• Verdachte heeft rechten: presumptie onschuld, recht op advocaat, zwijgrecht, eerlijk proces.\n• Officier van Justitie vervolgt.\n• Rechter beoordeelt.\n• Hoger beroep mogelijk.\n\n**Recente debatten**:\n• Toeslagenaffaire (overheid faalde rechtsstaat).\n• Discriminatie + etnisch profileren.\n• Asielprocedures + IND-tekorten.\n• Sleepwet 2017/2018 (massa-surveillance — referendum tegen).\n• Klimaatzaak Urgenda 2019 (HR dwingt overheid tot CO₂-reductie).\n• Box-3-belastingrechtszaken.\n• Stikstof-uitspraak Raad van State 2019.",
    checks: [
      {
        q: "**Klassieke grondrechten** beschermen burger:",
        options: ["Tegen overheid (vrijheid)","Voor overheid","Tegen andere burgers alleen","Tegen EU"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet primair.", "Niet primair."],
        uitlegPad: {
          stappen: [{ titel: "Vrijheidsrechten", tekst: "**Klassieke grondrechten**: burger TEGEN overheid (vrijheidsrechten). Overheid moet 'met rust laten' (negatief recht). Bv. meningsuiting, godsdienst, privacy, vereniging. **Sociale grondrechten**: overheid moet 'iets doen' (positief recht) — werkgelegenheid, milieu, gezondheid, onderwijs." }],
          niveaus: { basis: "Tegen overheid. A.", simpeler: "Klassiek = vrijheid vs staat = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk verdrag is **juridisch bindend** voor lidstaten?",
        options: ["EVRM (Europees Verdrag)","UVRM (VN)","Geen","Allebei niet"],
        answer: 0,
        wrongHints: [null, "Niet — moreel sterk, niet bindend.", "Wel bindend.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "Hof Straatsburg", tekst: "**EVRM** (Europees Verdrag Rechten van de Mens, 1950) is **juridisch bindend** voor Raad van Europa-lidstaten. Burgers kunnen klagen bij **Europees Hof Mensenrechten (EHRM) Straatsburg**. **UVRM** (Universele Verklaring, 1948) is wereldwijd moreel sterk maar **niet juridisch bindend**." }],
          theorie: "Cito-actueel: NL veroordeeld bij EHRM voor o.a. Toeslagenaffaire-elementen + Urgenda klimaat.",
          niveaus: { basis: "EVRM. A.", simpeler: "EVRM = bindend = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoogste **rechter** in NL is:",
        options: ["Hoge Raad","Gerechtshof","Rechtbank","Koning"],
        answer: 0,
        wrongHints: [null, "Niet — hoger beroep, maar nog niet hoogste.", "Eerste aanleg.", "Geen rechter."],
        uitlegPad: {
          stappen: [{ titel: "Cassatie", tekst: "**Hoge Raad** (Den Haag) = hoogste rechter NL. **Cassatie**: niet over feiten, maar of wet correct is toegepast door lagere rechter. Boven Hoge Raad alleen internationale instanties (EHRM voor mensenrechten, HvJ EU voor EU-recht). HR kan **niet** wetten toetsen aan grondwet (art 120 — uniek NL-element)." }],
          niveaus: { basis: "Hoge Raad. A.", simpeler: "Hoogste = HR = A.", nogSimpeler: "HR = A." },
        },
      },
      {
        q: "Welk **doel-straf** is herinpassen in maatschappij?",
        options: ["Resocialisatie","Vergelding","Preventie","Beveiliging"],
        answer: 0,
        wrongHints: [null, "Verdiende straf.", "Afschrikken.", "Apart houden."],
        uitlegPad: {
          stappen: [{ titel: "Heropvoeden", tekst: "**Resocialisatie**: dader heropvoeden + voorbereiden op terugkeer in maatschappij. Bv. via onderwijs in gevangenis, werk-projecten, reclassering, schuldhulp. NL-strafrecht legt **veel nadruk** op resocialisatie (kortere straffen dan VS). Tegenargument: te lichte straffen geven slechte signaal. Andere doelen: vergelding, preventie, beveiliging." }],
          niveaus: { basis: "Resocialisatie. A.", simpeler: "Terug in maatschappij = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk recht **geldt tussen burgers onderling**?",
        options: ["Privaatrecht","Strafrecht","Bestuursrecht","Staatsrecht"],
        answer: 0,
        wrongHints: [null, "Staat vervolgt.", "Overheid neemt besluiten.", "Grondwet + instituties."],
        uitlegPad: {
          stappen: [{ titel: "Civiel recht", tekst: "**Privaatrecht (civiel)** regelt verhoudingen tussen burgers/organisaties: contracten, eigendom, huwelijk, schade, erfrecht, arbeidsrecht. Conflict → civiele rechter. **Publiek recht** (staat ↔ burger): strafrecht, bestuursrecht, staatsrecht, belastingrecht." }],
          niveaus: { basis: "Privaat. A.", simpeler: "Burger-burger = privaat = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Criminaliteit + veiligheid ────────────────────────
  {
    title: "Criminaliteit + veiligheid",
    explanation:
      "**Criminaliteit** = gedrag dat in strijd is met strafwet.\n\n**Soorten criminaliteit**:\n\n**Veelvoorkomende criminaliteit** (gewone):\n• Diefstal, inbraak, vandalisme.\n• Geweld (mishandeling).\n• Verkeersmisdrijven.\n• 'Klassieke' criminaliteit.\n\n**Witteboorden-criminaliteit**:\n• Door 'nette' mensen in functies.\n• Fraude, omkoping, witwassen, belastingontduiking, milieumisdrijven.\n• Hoge schade, vaak laag opsporings-percentage.\n• Voorbeeld: Vestia-affaire (woningcorporatie-fraude), bonus-vergrijpen Ahold.\n\n**Georganiseerde criminaliteit**:\n• Misdaadbedrijven, **hiërarchisch + grensoverschrijdend**.\n• NL-drug-handel: cocaine via Rotterdam-Antwerpen-havens.\n• Geweld: liquidaties, ondergrondse banken.\n• 'Narcostaat'-discussie (Peter R. de Vries-moord 2021, Khaled F. de Vries' broer 2023, etc.).\n\n**Cyber-criminaliteit**:\n• Phishing, malware, ransomware, identiteitsdiefstal, online fraude, DDoS.\n• Snelste groeiende criminaliteits-vorm.\n• Internationale dimensie (vaak Russische / Noord-Koreaanse hackers).\n\n**Terrorisme**:\n• Geweld voor politiek/religieus doel om angst te creëren.\n• NL: aanslag tram Utrecht 2019, eerder bedreiging Wilders + Hirsi Ali.\n• Internationaal: 9/11, Bataclan Parijs, Manchester Arena.\n\n**Statistieken NL** (CBS + politie 2024):\n• ~700.000 misdrijven geregistreerd/jaar.\n• Daalt sinds 2002 (toen ~1,2 mln). **Daling-paradox**: terwijl gevoel onveiligheid stijgt door media.\n• **Aangifte-bereidheid** sterk gedaald (vooral cyber + lichte feiten — niet de moeite).\n• Werkelijke criminaliteit ('dark figure') groter dan registratie.\n\n**Oorzaken criminaliteit** (criminologie):\n\n**Sociale oorzaken**:\n• Armoede + ongelijkheid (statistisch verband).\n• Werkloosheid.\n• Slechte buurt-cohesie ('broken windows-theorie').\n• Gezinsproblemen.\n• Schooluitval.\n\n**Persoonlijke oorzaken**:\n• Psychische problemen.\n• Verslaving.\n• Persoonlijkheidskenmerken (impulsief, lage empathie).\n• Trauma.\n\n**Situatie**:\n• Gelegenheid (onbeveiligd object).\n• Pieker-mentaliteit ('iedereen doet het').\n\n**Theoretisch**:\n• **Anomie** (Durkheim/Merton): wanneer normen + waarden niet meer gelden / niet bereikbaar zijn.\n• **Sociale-controle-theorie** (Hirschi): mensen plegen criminaliteit als sociale bindingen zwak.\n• **Labelling-theorie**: stempel 'crimineel' versterkt criminaliteit.\n\n**Aanpak criminaliteit**:\n\n**Repressief** (na het feit):\n• Politie, opsporing.\n• Justitie, rechtszaken, gevangenissen.\n• Doelen: vergelding, preventie, resocialisatie.\n\n**Preventief** (voorkomen):\n• Sociaal: aanpak armoede, opvoeding, onderwijs.\n• Situationeel: betere beveiliging, cameratoezicht, verlichting.\n• 'Burgemeester-aanpak' tegen ondermijning (drugsproductie afkliffen).\n\n**Politie NL** (~65.000 medewerkers):\n• Nationale Politie sinds 2013.\n• 10 regionale eenheden + landelijke eenheden.\n• Minister van Justitie + Veiligheid politiek verantwoordelijk.\n• Discussies: capaciteit (ondertekorten), etnisch profileren, geweldsincidenten.\n\n**Veiligheidsbeleving**:\n• Subjectieve veiligheid ≠ objectieve criminaliteit.\n• Media-effect: incidenten breed uitgemeten → meer angst.\n• 'Moral panic': overdreven angst voor bepaalde groepen.\n• Vertrouwen politie + justitie meet jaarlijks.\n\n**Polarisatie + radicalisering**:\n• Online ecochambers (filterbubbels) versterken extreme opvattingen.\n• Onderwerpen: islam, immigratie, klimaat, COVID-maatregelen.\n• Anti-overheid-bewegingen: gele hesjes, boerenprotesten, COVID-tegenstanders.\n• Risico: van protest naar geweld (Capitol Hill 2021 VS, NL nooit zo erg).\n\n**Slachtoffer-perspectief**:\n• **Slachtofferhulp NL** ondersteunt.\n• Schadevergoeding via dader of overheid (Schadefonds Geweldsmisdrijven).\n• PTSS na ernstig misdrijf.\n• Restitutieve rechtspraak: dader-slachtoffer-gesprekken.",
    checks: [
      {
        q: "**Witteboorden-criminaliteit** wordt gepleegd door:",
        options: ["'Nette' mensen in functies (fraude, omkoping)","Tieners","Daklozen","Buitenlandse groepen"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet primair.", "Niet specifiek."],
        uitlegPad: {
          stappen: [{ titel: "Edwin Sutherland 1939", tekst: "**White-collar crime** (Edwin Sutherland 1939): door **'nette' mensen** in hun beroep gepleegd. Fraude, omkoping, witwassen, milieumisdrijven, belastingontduiking. **Tegenovergesteld** klassieke 'street crime'. Vaak: hogere schade, lager opsporings-percentage, mildere straffen. Voorbeelden NL: Vestia-affaire, Imtech-faillissement, recente ABN AMRO-witwasboetes." }],
          niveaus: { basis: "'Nette' functies. A.", simpeler: "Witteboord = nette = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Aanmeld**-bereidheid bij politie:",
        options: ["Sterk gedaald sinds 2002","Sterk gestegen","Stabiel","Onbekend"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — wel veranderd.", "Wel bekend."],
        uitlegPad: {
          stappen: [{ titel: "Dark figure groter", tekst: "**Aangifte-bereidheid** is **sterk gedaald** sinds 2002. Redenen: 'politie doet er toch niets mee', lange wachttijden, online opmaken te omslachtig, lichte feiten niet meer aangegeven. Daardoor: officiële cijfers lager → maar werkelijke criminaliteit niet noodzakelijk lager. **Dark figure** (niet-geregistreerde criminaliteit) groot." }],
          niveaus: { basis: "Gedaald. A.", simpeler: "Aangifte ↓ = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Broken windows-theorie** zegt:",
        options: ["Verloedering buurt → meer criminaliteit","Cameratoezicht werkt niet","Politie heeft macht","Te veel diefstal"],
        answer: 0,
        wrongHints: [null, "Niet primair stelling.", "Niet primair.", "Niet primair."],
        uitlegPad: {
          stappen: [{ titel: "Kelling + Wilson 1982", tekst: "**Broken windows-theorie**: zichtbare verloedering (gebroken ramen, graffiti, vandalisme) signaleert dat niemand controleert → mensen denken normen zijn afwezig → meer criminaliteit. Aanpak: snel ingrijpen op kleine vergrijpen + buurt schoon houden. **New York-burgemeester Giuliani** 1990s pasten radicaal toe — criminaliteit daalde (oorzaak omstreden). Kritiek: leidt tot etnisch profileren + over-aanhouding minderheden." }],
          niveaus: { basis: "Verloedering → crim. A.", simpeler: "BW = verloedering = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is **georganiseerde criminaliteit** NL?",
        options: ["Drugshandel via havens","Verkeersovertredingen","Belasting-ontduiking","Diefstal fiets"],
        answer: 0,
        wrongHints: [null, "Niet primair georg.", "Witteboorden.", "Veelvoorkomend, niet georg."],
        uitlegPad: {
          stappen: [{ titel: "Cocaine + heroïne via havens", tekst: "**Georganiseerde criminaliteit NL**: vooral **drugshandel** via Rotterdam + Antwerpen-havens. NL = belangrijk doorvoerland EU. Bij wachten op container: enorme bedragen + geweld. Liquidaties (Marengo-zaak Ridouan Taghi). **Peter R. de Vries vermoord 2021** door criminele organisatie. Discussie 'narcostaat'. Aanpak via 'ondermijningsfonds' + politie + justitie." }],
          niveaus: { basis: "Drugs. A.", simpeler: "Georg = drugs = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Subjectieve veiligheid** is:",
        options: ["Hoe veilig je je voelt (kan ≠ objectief)","Aantal misdrijven","Politie-cijfers","Cameratoezicht"],
        answer: 0,
        wrongHints: [null, "Objectief.", "Objectief.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Gevoel vs cijfers", tekst: "**Subjectieve veiligheid** = gevoel + perceptie van veiligheid. Kan **afwijken** van objectieve criminaliteit. Voorbeeld: criminaliteit NL daalt sinds 2002, maar **gevoel onveiligheid stijgt** door media-aandacht voor incidenten + polarisatie. **Moral panic**: overdreven angst over specifieke groep (jongeren, migranten, etc.). Belangrijk voor politiek beleid." }],
          niveaus: { basis: "Gevoel. A.", simpeler: "Subj = gevoel = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Media + technologie ───────────────────────────────
  {
    title: "Media + technologie + maatschappij",
    explanation:
      "**Media** = communicatie-kanalen + boodschappen. Massa-media bereiken velen.\n\n**Functies media**:\n• **Informeren** (nieuws).\n• **Opiniëren** (commentaren, columns).\n• **Entertainen** (films, sport).\n• **Adverteren** (commercie).\n• **Controleren macht** ('vierde macht', waakhond).\n• **Verbinden** (gemeenschappelijke gespreksstof).\n• **Verstrooien** (escapisme).\n\n**Typen media**:\n\n**Traditionele media**:\n• Krant (Volkskrant, NRC, AD, Trouw, Telegraaf, Parool).\n• TV (NPO publiek + commercieel SBS/RTL).\n• Radio (NPO Radio 1-5, commercieel SkyRadio etc.).\n• Magazines (Margriet, Vogue, Donald Duck).\n\n**Nieuwe media** (sinds ~1995):\n• Websites + apps.\n• Sociale media (Instagram, TikTok, YouTube, X/Twitter, LinkedIn, Reddit, Snapchat).\n• Podcasts.\n• Streaming-platforms (Netflix, Disney+, Prime, Spotify).\n• Online games.\n\n**Mediasysteem NL**:\n\n**Publiek (NPO)**:\n• Onafhankelijk van regering — onafhankelijke bestuur.\n• Gefinancierd via belasting.\n• Pluriformiteit: verschillende omroepen vertegenwoordigen groepen (KRO-NCRV katholiek, EO evangelisch, BNN/VARA progressief, AvroTros breed).\n• Wettelijke opdracht: informatie, cultuur, educatie.\n\n**Commercieel**:\n• Gefinancierd via reclame + abonnementen.\n• SBS, RTL, Talpa.\n• Streaming: voornamelijk VS-bedrijven.\n\n**Online-platforms**:\n• Big tech: Meta (FB/Instagram/WhatsApp), Google (YouTube), TikTok (China), X (Musk).\n• Niet 'klassieke media' — eerder infrastructuur.\n• Maar functioneren ook als media (algoritmes selecteren wat je ziet).\n\n**Persvrijheid**:\n• Grondrecht (art 7 NL-Grondwet + EVRM art 10).\n• Recht om informatie te verzamelen + publiceren.\n• **Bronbescherming** (Wet Bronbescherming 2019): journalisten hoeven bron niet onthullen, behalve uitzonderlijke gevallen.\n• NL-positie wereld: ~6e plek persvrijheid-index (RWB 2024) — gedaald van top 3.\n• Bedreigingen journalisten: Peter R. de Vries vermoord 2021.\n\n**Bias + framing**:\n• **Bias** = vooringenomenheid.\n• **Framing** = bepaalde invalshoek kiezen ('vluchteling' vs 'gelukszoeker').\n• Geen medium echt 'neutraal'.\n• **Filterbubbels** + **echokamers**: alleen eigen mening tegenkomen.\n\n**Sociale media-effecten**:\n• **Versterken polarisatie** (algoritmes promoten emotionele content).\n• **Verspreiden desinformatie** snel.\n• **Cyberpesten**.\n• **Verslaving** (dopamine-effecten).\n• **Mentale gezondheid**: onderzoek toont negatief effect bij jongeren (Jonathan Haidt's *The Anxious Generation* 2024).\n• Positief: verbinden, leren, oproepen tot actie.\n\n**Fake news + desinformatie**:\n• Vals nieuws bewust verspreid.\n• Gebruik: politieke beïnvloeding, scams, verdienmodel.\n• Voorbeelden: Russische trollenfabriek bij Trump-verkiezing 2016, Brexit-misinformatie, COVID-anti-vax.\n• AI-deepfakes: vertekenen werkelijkheid.\n\n**Media-wijsheid**:\n• Bron-check (wie heeft dit geschreven, met welk doel?).\n• Datum-check.\n• Triangulatie (meerdere bronnen).\n• Bias herkennen.\n• Onderscheid tussen feit + opinie + reclame.\n\n**EU + tech-regulering**:\n• **DSA** (Digital Services Act 2024): grote platforms moeten illegale content adresseren + transparant zijn.\n• **DMA** (Digital Markets Act): tegen monopolies big tech.\n• **AI Act**: zie informatica-pad.\n• **AVG/GDPR**: persoonsgegevens-bescherming.\n\n**Recente debatten**:\n• TikTok-verbod (VS overweegt, EU geen verbod maar federale apparaten).\n• Twitter/X onder Musk: contentmoderatie versoepeld, polarisering gestegen.\n• ChatGPT in onderwijs: helper of toetsbedreiging?\n• Streaming-belasting (Netflix bv. NL-content-verplichting).\n• Klimaat-desinformatie online.\n\n**Algoritmen + privacy**:\n• Personalisatie via cookies + tracking.\n• Profielen bouwen.\n• Reclame-targeting.\n• 'Surveillance kapitalisme' (Shoshana Zuboff).\n• EU AVG poogt te beperken.\n\n**Nieuws-consumptie NL** 2024:\n• Jongeren (Gen Z) krijgen nieuws vooral via **TikTok + Instagram**.\n• Ouderen: kranten + NPO.\n• Vertrouwen in mainstream-media gedaald (~50% nu).\n• Verschuiving 'algemene gespreksstof' weg — fragmentatie.\n• Effect democratie: gedeelde feiten worden zeldzamer.",
    checks: [
      {
        q: "Wat is een **filterbubbel**?",
        options: ["Online ecosphere waar je alleen eigen mening tegenkomt","Filter wasmachine","Soort bubbeltjes","Internet-protocol"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Eli Pariser 2011", tekst: "**Filterbubbel**: algoritmes (Facebook, YouTube, etc.) tonen je vooral content die je waarschijnlijk leuk vindt → je komt alleen eigen mening tegen → polarisatie versterkt. **Echokamer**: vergelijkbaar maar specifieker over gemeenschap (vrienden) die dezelfde opvattingen versterkt. Term door Eli Pariser (*The Filter Bubble*, 2011).\n\nOplossing: actief diverse bronnen zoeken, niet alleen aanbevolen content." }],
          niveaus: { basis: "Eigen mening. A.", simpeler: "Filter = eigen mening = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoe wordt **NPO** gefinancierd?",
        options: ["Belasting (publiek)","Alleen reclame","Donaties","Aandeelhouders"],
        answer: 0,
        wrongHints: [null, "Niet — beperkte reclame.", "Niet — institutioneel.", "Niet — geen aandelen."],
        uitlegPad: {
          stappen: [{ titel: "Publieke omroep", tekst: "**NPO** (Nederlandse Publieke Omroep) wordt vooral **gefinancierd via belasting** (~€800 mln/jaar Mediafonds). Beperkte reclame toegestaan (Ster). Onafhankelijk van regering — eigen bestuur. Bedoeld voor pluriforme + kwalitatieve programmering. Tegenovergesteld: SBS/RTL = commercieel, gefinancierd door reclame + abonnementen." }],
          niveaus: { basis: "Belasting. A.", simpeler: "NPO = belasting = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **bronbescherming** voor journalisten?",
        options: ["Recht om bron niet te onthullen","Verzekering tegen geweld","Vrije parkeerplaats","Goedkope koffie"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Wet 2019", tekst: "**Bronbescherming**: journalisten hoeven hun **bron niet te onthullen**, ook niet aan rechter of politie (behalve uitzonderlijke gevallen, bv. terrorisme). Wet Bronbescherming 2019 NL. Cruciaal voor **persvrijheid** — zonder bronbescherming durven mensen geen info te geven. Beschermd ook door EVRM art 10 (vrijheid van meningsuiting + ontvangen)." }],
          niveaus: { basis: "Bron geheim. A.", simpeler: "Bronbescherming = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Vierde macht** is een ander woord voor:",
        options: ["Onafhankelijke media (waakhond democratie)","Politie","Leger","EU"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Edmund Burke", tekst: "**Vierde macht** (fourth estate): onafhankelijke media als controlerend orgaan naast trias politica (wetgevend/uitvoerend/rechterlijk). Term uit Britse parlement. **Waakhond democratie** — onthullen schandalen, controleren machthebbers (Watergate, Panama Papers, MeToo, Toeslagenaffaire-onthullingen door Trouw + RTL). Vandaag onder druk door commercialisering + sociale media + populisme." }],
          niveaus: { basis: "Media. A.", simpeler: "4e macht = media = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Onderzoeker **Jonathan Haidt** waarschuwt voor:",
        options: ["Mentale gezondheid jongeren door sociale media","Klimaatverandering","Inflatie","Migratie"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet primair.", "Niet primair."],
        uitlegPad: {
          stappen: [{ titel: "The Anxious Generation 2024", tekst: "**Jonathan Haidt** (NYU psycholoog) — *The Anxious Generation* (2024): stelt dat **smartphones + sociale media** sinds ~2010 mentale gezondheid jongeren beschadigen (depressie + angst + zelfdoding gestegen). Aanbevelingen: **geen smartphone vóór 14**, **geen sociale media vóór 16**, **smartphone-vrije scholen**. Internationaal debat — diverse landen overwegen wetgeving (Australië verbiedt sociale media <16 jaar 2025)." }],
          niveaus: { basis: "Mentale gezondheid jongeren. A.", simpeler: "Haidt = mental health = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const maatschappijleerHavoVwo = {
  id: "maatschappijleer-havo-vwo",
  title: "Maatschappijleer (HAVO/VWO klas 4 verplicht)",
  emoji: "🏛️",
  level: "havo4-5-vwo",
  subject: "maatschappij",
  referentieNiveau: "havo-vwo-SE-maatschappijleer",
  sloThema: "Maatschappijleer HAVO/VWO — verplicht SE klas 4",
  prerequisites: [
    { id: "nederlandse-staat-maatschappijleer", title: "NL-staatsinrichting basis", niveau: "vmbo-gt-klas3" },
    { id: "mensenrechten-maatschappijleer", title: "Mensenrechten", niveau: "vmbo-gt-klas3" },
  ],
  intro:
    "Maatschappijleer HAVO/VWO klas 4 = verplicht SE-vak voor alle leerlingen. Onderwerpen: staatsinrichting (trias politica + 2K + kabinet-Schoof 2024), pluriforme samenleving (cultuur + religies + migratie + integratie-modellen), rechtsstaat (klassieke vs sociale grondrechten + EVRM + Hoge Raad), criminaliteit + veiligheid (witteboord + georganiseerde + broken windows + subjectief), media + technologie (filterbubbels + NPO + bronbescherming + Haidt). ~15-20 min.",
  triggerKeywords: [
    "maatschappijleer", "ML",
    "staatsinrichting",
    "trias politica",
    "Tweede Kamer", "Eerste Kamer",
    "regering", "kabinet",
    "minister-president",
    "Schoof", "PVV", "VVD", "NSC", "BBB",
    "stemrecht", "Aletta Jacobs",
    "pluriforme samenleving",
    "cultuur", "subcultuur",
    "etniciteit",
    "migratie", "vluchteling", "asielzoeker",
    "push pull",
    "integratie", "assimilatie", "multiculturalisme",
    "discriminatie",
    "religie", "secularisatie",
    "rechtsstaat",
    "grondrecht", "klassieke", "sociale",
    "EVRM", "UVRM",
    "Hoge Raad",
    "Toeslagenaffaire",
    "publiek recht", "privaatrecht",
    "criminaliteit",
    "witteboorden",
    "georganiseerde criminaliteit",
    "cybercriminaliteit",
    "broken windows",
    "subjectieve veiligheid",
    "Peter R de Vries",
    "media",
    "NPO",
    "persvrijheid",
    "bronbescherming",
    "filterbubbel", "echokamer",
    "fake news",
    "Haidt sociale media",
    "vierde macht",
  ],
  chapters,
  steps,
};

export default maatschappijleerHavoVwo;
