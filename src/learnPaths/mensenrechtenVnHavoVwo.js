// Leerpad: Mensenrechten + VN — HAVO/VWO Maatschappij
// CSE-onderwerp. UDHR, VN-structuur, internationale rechtspraak,
// actuele cases, mensenrechten in NL.
// 5 stappen × ~5 checks.

const stepEmojis = ["🕊️", "🏛️", "⚖️", "🚨", "🏆"];

const chapters = [
  { letter: "A", title: "Universele Verklaring 1948", emoji: "🕊️", from: 0, to: 0 },
  { letter: "B", title: "VN-structuur", emoji: "🏛️", from: 1, to: 1 },
  { letter: "C", title: "Internationale rechtspraak", emoji: "⚖️", from: 2, to: 2 },
  { letter: "D", title: "Actuele schendingen", emoji: "🚨", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — NL + persoonlijke actie", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. UDHR ──────────────────────────────────────────────
  {
    title: "Universele Verklaring van de Rechten van de Mens (UDHR)",
    explanation:
      "**UDHR** (Universal Declaration of Human Rights) aangenomen door VN-Algemene Vergadering op **10 december 1948** in Parijs. Geen verdrag maar verklaring → niet juridisch bindend, wel basis voor latere verdragen.\n\n**Achtergrond**:\n• Na Holocaust + WO2-gruwelijkheden.\n• Eleanor Roosevelt (weduwe Amerikaanse president) voorzitter commissie.\n• 50 landen lid VN toen, 48 stemden voor, 8 onthielden (USSR-blok, Saudi-Arabië, Zuid-Afrika).\n\n**30 artikelen** — belangrijke voorbeelden:\n• **Art. 1**: 'Alle mensen zijn vrij en gelijk geboren in waardigheid + rechten.'\n• **Art. 2**: gelijkheid zonder onderscheid (geslacht, ras, kleur, taal, religie, etc.).\n• **Art. 3**: recht op leven, vrijheid + veiligheid.\n• **Art. 5**: verbod marteling + onmenselijke behandeling.\n• **Art. 9**: verbod willekeurige arrestatie.\n• **Art. 10**: recht op eerlijk proces.\n• **Art. 18**: vrijheid van denken, geweten, religie.\n• **Art. 19**: vrijheid van meningsuiting.\n• **Art. 26**: recht op onderwijs (gratis basisonderwijs).\n\n**Drie generaties mensenrechten**:\n• **1e generatie**: BURGERRECHTEN + politieke (vrijheid, gelijkheid, vrije meningsuiting, eerlijk proces). Bescherm tegen staat.\n• **2e generatie**: SOCIALE + economische + culturele (onderwijs, gezondheidszorg, werk, eten). Staat moet leveren.\n• **3e generatie**: COLLECTIEVE (zelfbeschikking, ontwikkeling, schoon milieu, vrede). Voor hele volkeren.\n\n**Bindende verdragen** (gebouwd op UDHR):\n• **ICCPR** (Internationaal Verdrag inzake Burger- + Politieke Rechten, 1966).\n• **ICESCR** (idem economisch/sociaal/cultureel, 1966).\n• **EVRM** (Europees Verdrag voor de Rechten van de Mens, 1950) — Europese Hof Straatsburg.\n• **Geneefse Conventies** (1949) — oorlogsrecht.\n• **Vluchtelingenverdrag** (1951).\n• **Conventie Vrouwendiscriminatie** (CEDAW, 1979).\n• **Conventie Kinderrechten** (CRC, 1989).\n\n**UDHR-impact**:\n• Geïnspireerd ~100 nationale grondwetten.\n• EU-Handvest Grondrechten (2000).\n• Voortdurend gebruikt door NGO's (Amnesty, HRW).",
    checks: [
      {
        q: "**UDHR** werd aangenomen op:",
        options: ["10 december 1948", "10 december 1945", "1 januari 2000", "Geen vaste datum"],
        answer: 0,
        wrongHints: [null, "Niet — VN-stichting wel 24 okt 1945.", "Veel later.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "Mensenrechten-dag", tekst: "10 december = Internationale Dag van de Mensenrechten, jaarlijks gevierd. Eleanor Roosevelt-commissie. Niet juridisch bindend maar morele standaard wereldwijd." }],
          niveaus: { basis: "10-12-1948. A.", simpeler: "Dec 1948. A.", nogSimpeler: "1948 = A." },
        },
      },
      {
        q: "**1e generatie mensenrechten** zijn:",
        options: [
          "Burger + politieke (vrijheid, gelijkheid, eerlijk proces)",
          "Economische rechten",
          "Collectieve rechten",
          "Geen onderscheid"
        ],
        answer: 0,
        wrongHints: [null, "Niet — 2e generatie.", "3e generatie.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "Klassieke vrijheidsrechten", tekst: "1e generatie beschermt INDIVIDU tegen MACHT van staat. Vrijheid van meningsuiting, godsdienst, vereniging. Geen willekeurige arrestatie. Eerlijk proces. Stamt uit Verlichting-revoluties (Amerikaans 1776, Frans 1789)." }],
          niveaus: { basis: "Burger + politiek. A.", simpeler: "Vrijheden tegen overheid. A.", nogSimpeler: "1e gen = A." },
        },
      },
      {
        q: "**EVRM** (Europees Verdrag) wordt afgedwongen door:",
        options: [
          "Europees Hof voor de Rechten van de Mens (Straatsburg)",
          "VN-Veiligheidsraad",
          "Internationaal Strafhof Den Haag",
          "Geen rechtbank"
        ],
        answer: 0,
        wrongHints: [null, "Globaal, niet EVRM.", "Apart — oorlogsmisdaden.", "Wel rechtbank."],
        uitlegPad: {
          stappen: [{ titel: "Sinds 1959", tekst: "EVRM-overtreding kan elk individu in lidstaat klacht indienen na uitputten nationaal rechtsmiddel. Hof oordeelt + lidstaat moet uitspraak volgen (politieke + reputationele druk). 46 lidstaten Raad van Europa. Rusland 2022 verwijderd na Oekraïne-invasie." }],
          niveaus: { basis: "Straatsburg. A.", simpeler: "EU-rechten-hof. A.", nogSimpeler: "Straatsburg = A." },
        },
      },
      {
        q: "**Convention Rights of the Child** (CRC):",
        options: [
          "Kinderrechten-verdrag 1989, bijna alle landen geratificeerd",
          "Volwassenen-verdrag",
          "Bestaat niet",
          "Alleen Europees"
        ],
        answer: 0,
        wrongHints: [null, "Specifiek kinderen.", "Wel.", "Wereldwijd."],
        uitlegPad: {
          stappen: [{ titel: "Meest geratificeerde verdrag ooit", tekst: "196 staten lid (alle behalve VS — wel ondertekend). Rechten kind onder 18: bescherming, onderwijs, gezin, participatie. Comité Kinderrechten in Genève monitort. NL: Defence for Children + Kinderombudsman volgen op." }],
          niveaus: { basis: "Kinderrechten 1989. A.", simpeler: "Convention kinderen. A.", nogSimpeler: "CRC = A." },
        },
      },
      {
        q: "Welke is GEEN UDHR-recht?",
        options: [
          "Recht op auto",
          "Recht op leven",
          "Vrijheid van meningsuiting",
          "Recht op onderwijs"
        ],
        answer: 0,
        wrongHints: [null, "Wel.", "Wel.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "UDHR = fundament", tekst: "30 artikelen behandelen leven, vrijheid, gelijkheid, onderwijs, werk, religie, etc. — geen luxe-goederen. Recht op privé-eigendom WEL (art 17), maar specifiek 'auto' niet." }],
          niveaus: { basis: "Auto niet. A.", simpeler: "Geen recht op auto. A.", nogSimpeler: "Auto = A." },
        },
      },
    ],
  },

  // ─── B. VN-structuur ──────────────────────────────────────
  {
    title: "VN-structuur — hoofdorganen",
    explanation:
      "**Verenigde Naties (VN/UN)** opgericht **24 oktober 1945** (VN-dag) door 51 stichters-landen na WO2. Vandaag 193 leden (bijna alle landen behalve Taiwan, Vaticaan, Kosovo).\n\n**Doelen** (VN-Handvest):\n• Vrede + veiligheid handhaven.\n• Vriendschappelijke betrekkingen.\n• Internationale samenwerking economisch + sociaal.\n• Mensenrechten promoten.\n\n**Hoofdkantoor**: New York. Genève (Europees centrum), Wenen, Nairobi.\n\n**Zes hoofdorganen**:\n\n**1. Algemene Vergadering** (AV):\n• Alle 193 lidstaten, één land één stem.\n• Resoluties NIET juridisch bindend (vooral 'opinion').\n• Begroting + nieuwe leden toelaten.\n\n**2. Veiligheidsraad** (UNSC):\n• 15 leden: 5 PERMANENT met **vetorecht** (VS, UK, Frankrijk, Rusland, China) + 10 tijdelijk (2-jaars termijn).\n• Beslissingen WEL juridisch bindend.\n• Kan sancties opleggen + vredesoperaties autoriseren.\n• Vetorecht = vaak verlamming (Rusland vetote Oekraïne-resoluties, VS Israel-resoluties).\n• Hervormingsdebat al decennia.\n\n**3. Economische + Sociale Raad** (ECOSOC):\n• 54 leden gekozen.\n• Coördineert sociaal-economische werk.\n• UNCTAD, UN-Habitat, etc.\n\n**4. Trusteeship Raad**:\n• Voor voogdijgebieden (kolonies overgangsstatus).\n• Sinds 1994 inactief (laatste dekolonisatie).\n\n**5. Internationaal Gerechtshof** (ICJ, Den Haag):\n• Beslecht juridische geschillen tussen STATEN (niet individuen).\n• Voorbeelden: maritieme grensgeschillen, NL vs Servië over Srebrenica.\n• 15 rechters, 9-jaars termijn.\n• ≠ Internationaal Strafhof (ICC, ook Den Haag, voor individuen).\n\n**6. Secretariaat**:\n• Onder leiding **Secretaris-Generaal** (huidig: António Guterres, Portugees, sinds 2017).\n• 41 000 medewerkers wereldwijd.\n\n**Gespecialiseerde agentschappen**:\n• **WHO** (gezondheid, Genève).\n• **UNICEF** (kinderen).\n• **UNESCO** (cultuur + onderwijs).\n• **UNHCR** (vluchtelingen).\n• **WFP** (voedsel).\n• **ILO** (arbeid).\n• **IMF + Wereldbank** (financieel).\n\n**VN-vredesoperaties** ('Blauwhelmen'):\n• 12 actieve missies 2024 (DRC, Zuid-Sudan, Mali, Libanon, etc.).\n• 100 000+ personeel.\n• NL stuurt bv. troepen naar MINUSMA (Mali) tot 2019.\n• Beperkt mandaat: alleen zelfverdediging + bescherming burgers.\n\n**Kritiek op VN**:\n• Vetorecht verlamming UNSC.\n• Onmacht in genocides (Rwanda 1994 niet gestopt, Srebrenica 1995, Syrië nog).\n• Bureaucratisch + duur.\n• Voorgesteld: vetorecht hervormen, meer permanente leden (Brazilië, India, DE, Japan, Afrika).\n• Maar zelfde vetorecht-houders moeten ermee instemmen → bijna onmogelijk.",
    checks: [
      {
        q: "Welke landen hebben **vetorecht** in VN-Veiligheidsraad?",
        options: [
          "VS, UK, Frankrijk, Rusland, China",
          "Alle 193 lidstaten",
          "Geen — niet meer",
          "Alleen VS"
        ],
        answer: 0,
        wrongHints: [null, "Niet — alleen 5.", "Wel.", "Wel meerdere."],
        uitlegPad: {
          stappen: [
            { titel: "WO2-overwinnaars", tekst: "Vijf zegevierende grote machten WO2: VS, UK, FR (Westen) + USSR (nu Rusland) + China (vanaf 1971 Volksrepubliek ipv Taiwan). Elk veto-recht in UNSC = kan elke bindende resolutie blokkeren. Reden voor verlamming bij conflicten Oekraïne, Syrië, Israel-Palestina." },
          ],
          niveaus: { basis: "P5: VS/UK/FR/RU/CN. A.", simpeler: "Vijf grote machten. A.", nogSimpeler: "P5 = A." },
        },
      },
      {
        q: "Hoeveel **lidstaten** heeft de VN?",
        options: ["193", "100", "50", "Onbeperkt"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Stichters waren 51.", "Wel begrensd."],
        uitlegPad: {
          stappen: [{ titel: "Bijna alle landen", tekst: "Stichting 1945: 51 landen. Vandaag 193. Niet-leden: Vaticaan (waarnemer), Taiwan (China-blokkeert), Kosovo (niet door alle landen erkend), Palestina (waarnemer-status). Zuid-Soedan was laatste toelating (2011)." }],
          niveaus: { basis: "193. A.", simpeler: "193 landen. A.", nogSimpeler: "193 = A." },
        },
      },
      {
        q: "**ICJ** (International Court of Justice) zit in:",
        options: ["Den Haag", "New York", "Genève", "Straatsburg"],
        answer: 0,
        wrongHints: [null, "VN HQ.", "WHO HQ.", "EVRM-hof."],
        uitlegPad: {
          stappen: [{ titel: "Vredespaleis", tekst: "ICJ in Vredespaleis Den Haag (sinds 1946). Beslecht juridische geschillen tussen STATEN. ICC (apart) ook Den Haag — voor individuele oorlogsmisdadigers. NL = 'juridische hoofdstad van de wereld' door beide + Joegoslavië-tribunaal." }],
          niveaus: { basis: "Den Haag. A.", simpeler: "NL Den Haag. A.", nogSimpeler: "DH = A." },
        },
      },
      {
        q: "Huidige **VN-Secretaris-Generaal**:",
        options: ["António Guterres (Portugees, sinds 2017)", "Ban Ki-moon", "Kofi Annan", "Kanselier Merkel"],
        answer: 0,
        wrongHints: [null, "Vorige (2007-16).", "Vorige (1997-06).", "Niet VN."],
        uitlegPad: {
          stappen: [{ titel: "Vluchtelingen-achtergrond", tekst: "Voor VN was hij hoge commissaris voor vluchtelingen (UNHCR). Portugees. Klimaatactivist. Werkt aan VN-hervorming. Tweede termijn loopt tot 2026." }],
          niveaus: { basis: "Guterres. A.", simpeler: "Guterres = SG. A.", nogSimpeler: "Guterres = A." },
        },
      },
      {
        q: "VN **vredesoperatie-troepen** worden genoemd:",
        options: ["Blauwhelmen", "Marines", "Brigade Anti-Terreur", "VN-soldaten"],
        answer: 0,
        wrongHints: [null, "Niet — VS-soldaten.", "Onzin.", "Algemener."],
        uitlegPad: {
          stappen: [{ titel: "Blauwe helm + barret", tekst: "VN-troepen uit lidstaten dragen blauwe helmen voor herkenbaarheid + neutraliteit. ~100 000 wereldwijd in 12 missies. Beperkt mandaat: alleen zelfverdediging + bescherming burgers. Niet-aanvallende rol." }],
          niveaus: { basis: "Blauwhelmen. A.", simpeler: "Blauwe helm-troepen. A.", nogSimpeler: "Blauw = A." },
        },
      },
    ],
  },

  // ─── C. Internationale rechtspraak ────────────────────────
  {
    title: "Internationale rechtspraak — ICC + Tribunalen",
    explanation:
      "**Drie hoofd-internationale rechtbanken**:\n\n**1. Internationaal Gerechtshof (ICJ)** Den Haag:\n• VN-hoofd-orgaan (zie stap B).\n• Tussen STATEN: grenzen, verdragen, etc.\n• Recente: Zuid-Afrika vs Israel (genocide-aanklacht Gaza), NL vs Servië (Srebrenica).\n\n**2. Internationaal Strafhof (ICC)** Den Haag:\n• Onafhankelijk van VN, opgericht 2002 (Statuut van Rome 1998).\n• Berecht INDIVIDUEN voor:\n  - Oorlogsmisdaden.\n  - Misdaden tegen de menselijkheid.\n  - Genocide.\n  - Agressie-misdrijf.\n• 124 staten lid (NL, EU, etc.). **NIET-leden**: VS, China, Rusland, India, Israel.\n• Arrestatiebevelen lopen ondertussen voor Poetin (Oekraïne deportatie kinderen) + Netanyahu (Gaza-conflict).\n• Probleem: ICC heeft geen eigen politie → afhankelijk van staten om verdachten te arresteren.\n\n**3. Ad-hoc tribunalen** (specifiek conflict):\n• **ICTY** (1993-2017): Joegoslavië-tribunaal Den Haag. Berechtte Milošević, Karadžić, Mladić.\n• **ICTR** (1994-2015): Rwanda-tribunaal Arusha. Berechtte hutu-leiders van genocide.\n• **Speciale rechtbanken** Sierra Leone, Cambodja, Libanon.\n\n**Geschiedenis**:\n• Vóór 1945: weinig internationaal recht-handhaving.\n• **Neurenberg-processen** (1945-46): eerste keer dat staatsleiders berecht werden voor oorlogsmisdaden. Beginsel: 'orders volgen' geen verdediging.\n• 1948 Genocideverdrag.\n• 1949 Geneefse Conventies (4 verdragen + protocollen) over oorlogsrecht: bescherming krijgsgevangenen, gewonden, burgers, medisch personeel.\n\n**Bekende cases**:\n• **Adolf Eichmann** (Israel 1961): hoofd Endlösung. Geëxecuteerd.\n• **Milošević** (ICTY): stierf in cel 2006 voor uitspraak.\n• **Charles Taylor** (Sierra Leone): ex-president Liberia, 50 j voor oorlogsmisdaden.\n• **Karadžić + Mladić**: Bosnisch-Servische leiders, levenslang voor Srebrenica.\n• **Lubanga** (DRC): eerste ICC-veroordeling (2012) voor kindsoldaten.\n\n**Genocide-criteria** (1948-verdrag):\n• Doel: hele etnische, raciale, nationale of religieuze groep VERNIETIGEN.\n• Niet alle mass-moord = genocide (vereist 'special intent' = dolus specialis).\n• Bewezen: Holocaust, Rwanda, Srebrenica.\n• Discussie: Armeense 1915 (Turkije ontkent), Oeigoeren-huidig (China ontkent).\n\n**Universele jurisdictie**:\n• Sommige misdrijven (genocide, marteling) zo ernstig dat ELKE staat ze mag berechten, ongeacht waar gepleegd.\n• Spaanse rechter Garzón probeerde Pinochet (Chili) te berechten 1998.\n• Vandaag NL-rechtbanken: Syrische ex-officieren voor martelingen.\n\n**Beperkingen**:\n• Trage processen (jaren lang).\n• Hoge kosten.\n• Politiek beïnvloed (sommige verdachten beschermd door eigen staat).\n• Selectieve uitvoering (vooral Afrikaanse verdachten, ICC bekritiseerd).\n• Geen tanden: VS + China + Rusland erkennen ICC niet.",
    checks: [
      {
        q: "Wat doet **ICC** (International Criminal Court)?",
        options: [
          "Berecht INDIVIDUEN voor oorlogsmisdaden, genocide, etc.",
          "Beslecht staten-conflicten",
          "Maakt VN-wetten",
          "Bewaakt grenzen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is ICJ.", "Niet — VN AV.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "Permanente strafrechtbank", tekst: "Sinds 2002 (Rome-Statuut 1998). Tussen Neurenberg-processen (ad-hoc) + ICTY/ICTR (per conflict) → behoefte permanente rechtbank. ICC handelt VOOR (preventie via afschrikking) + NA (berechting). 124 leden, maar grootmachten ontbreken." }],
          niveaus: { basis: "Individuele berechtigers. A.", simpeler: "ICC = strafhof persoonlijk. A.", nogSimpeler: "ICC = A." },
        },
      },
      {
        q: "**Neurenberg-principe**:",
        options: [
          "'Orders volgen' geen verdediging voor oorlogsmisdaden",
          "Soldaten altijd vrij",
          "Alleen leiders berecht",
          "Geen straf mogelijk"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Onjuist.", "Wel mogelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Individuele verantwoordelijkheid", tekst: "Vóór WO2: militairen volgden orders, niet persoonlijk verantwoordelijk. Neurenberg 1945-46 verwierp dit. Eichmann ('ich war nur ein Rädchen') opnieuw gepoogd 1961 — verworpen. Vandaag basis voor ICC. Plicht om weigerbare bevelen NIET uit te voeren." },
          ],
          niveaus: { basis: "Orders ≠ vrij. A.", simpeler: "Persoonlijke verantwoording. A.", nogSimpeler: "Persoon = A." },
        },
      },
      {
        q: "**Geneefse Conventies** (1949) regelen:",
        options: [
          "Oorlogsrecht — bescherming krijgsgevangenen, gewonden, burgers",
          "Handel",
          "Klimaat",
          "Mensenrechten algemeen"
        ],
        answer: 0,
        wrongHints: [null, "Apart.", "Veel later.", "UDHR apart."],
        uitlegPad: {
          stappen: [{ titel: "Vier verdragen", tekst: "I: gewonden land. II: gewonden zee. III: krijgsgevangenen. IV: burgers in oorlog. Plus aanvullende protocollen (1977). Schending = oorlogsmisdaad. Universeel geratificeerd (alle 196 landen) — uniek voor internationaal verdrag." }],
          niveaus: { basis: "Oorlogsrecht. A.", simpeler: "Oorlogs-regels. A.", nogSimpeler: "Genève = A." },
        },
      },
      {
        q: "**Genocide-definitie** vereist:",
        options: [
          "Special intent — doel hele etnische/religieuze groep vernietigen",
          "Veel doden",
          "Etnisch geweld",
          "Politieke conflicten"
        ],
        answer: 0,
        wrongHints: [null, "Niet voldoende — opzet ontbreekt.", "Te ruim.", "Niet specifiek."],
        uitlegPad: {
          stappen: [
            { titel: "Dolus specialis", tekst: "1948-Genocideverdrag: doel = vernietigen 'in whole or in part' van groep wegens nationale/etnische/raciale/religieuze identiteit. Niet alleen daad maar BEDOELING telt. Daarom moeilijk te bewijzen. Rwanda + Srebrenica + Holocaust formeel erkend. Oekraïne deportatie Russisch standpunt: nog discussie." },
          ],
          niveaus: { basis: "Opzet groep vernietigen. A.", simpeler: "Bedoeling tellen, niet alleen doden. A.", nogSimpeler: "Intent = A." },
        },
      },
      {
        q: "**Universele jurisdictie**:",
        options: [
          "Sommige misdrijven zo erg dat elke staat ze mag berechten",
          "Alleen eigen burger",
          "Niet bestaat",
          "VN beslist altijd"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel.", "Onafhankelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Voor genocide + marteling", tekst: "Concept: bepaalde misdrijven (jus cogens) zo ernstig dat ALLE staten ze mogen berechten ongeacht plek of slachtoffer. Voorbeeld: Pinochet-arrestatie Spanje 1998 voor Chileense martelingen. NL berecht Syrische ex-officieren in Den Haag. Mogelijk preventief effect: nergens veilig." },
          ],
          niveaus: { basis: "Elke staat kan. A.", simpeler: "Iedere land mag berechten. A.", nogSimpeler: "Univ = A." },
        },
      },
    ],
  },

  // ─── D. Actuele schendingen ───────────────────────────────
  {
    title: "Actuele mensenrechten-schendingen wereldwijd",
    explanation:
      "**Voorbeelden van huidige zorgen**:\n\n**1. China — Oeigoeren** (XUAR/Xinjiang):\n• Schatting >1 miljoen Oeigoeren (moslim-minderheid) in 're-educatiekampen'.\n• Gedwongen arbeid, surveillance, religie-onderdrukking, dwang-sterilisatie.\n• China ontkent: noemt het 'beroepsopleiding tegen extremisme'.\n• Westerse sancties + bedrijven heroverwegen toeleveringsketens (katoen).\n• Discussie: genocide-criteria voldaan? VS + Canada + UK zeggen ja.\n\n**2. Rusland — Oekraïne** (2022+):\n• Oorlogsmisdaden in Boetsja, Marioepol, Cherson (executies, marteling, verkrachting).\n• Deportatie ~20 000 Oekraïense kinderen naar Rusland.\n• Aanvallen op civiele infrastructuur (ziekenhuizen, scholen, energie).\n• ICC arrestatiebevel Poetin maart 2023.\n• Sancties + isolatie Rusland.\n\n**3. Israel-Gaza** (sinds 2023):\n• Hamas-aanval 7 okt 2023: ~1200 doden + 250 gegijzelden Israel.\n• Israelische tegenactie Gaza: 40 000+ doden (vooral burgers), hongersnood.\n• ICC-arrestatiebevel premier Netanyahu (nov 2024) + Hamas-leiders.\n• Zuid-Afrika klacht ICJ (genocide-aanklacht).\n• Internationale druk + protesten + sancties.\n\n**4. Iran — Vrouwen + Mahsa Amini-protesten**:\n• Sept 2022: Mahsa Amini (22) stierf in politiebewaring voor 'verkeerd dragen' hijab.\n• Massa-protesten 'Vrouw, leven, vrijheid' (Zan, Zendegi, Azadi).\n• Honderden doden, duizenden gevangen.\n• Wereldwijde solidariteit + Nobelprijs Narges Mohammadi 2023.\n\n**5. Afghanistan — Taliban + vrouwen**:\n• Sinds VS-vertrek 2021 Taliban-bestuur.\n• Vrouwen verbod onderwijs >12 jaar, werk, openbaar leven zonder begeleider, soms zelfs gezond-zorg.\n• 'Gender-apartheid'-debat.\n\n**6. Noord-Korea**:\n• Regime onder Kim Jong-un = totalitair.\n• Concentratiekampen (~120 000 mensen), executies, geen vrije pers, gedwongen-arbeid, hongersnood-cycli.\n\n**7. Saudi-Arabië**:\n• Vrouwen weinig rechten (verbeterd 2018+ met autorijden), strafzaken (zweepslagen, executies in publiek), Jamal Khashoggi-moord 2018.\n\n**8. Myanmar — Rohingya**:\n• 2017: militaire 'zuiverings'-operatie tegen moslim-Rohingya in Rakhine.\n• ~750 000 gevlucht naar Bangladesh.\n• Genocide-aanklacht ICJ (loopt).\n\n**9. Klimaat-vluchtelingen**:\n• Toenemend: zeespiegelstijging (Tuvalu), droogte (Sahel), overstromingen (Bangladesh).\n• Geen specifieke juridische status onder Vluchtelingenverdrag 1951.\n• Discussie over uitbreiding.\n\n**10. LGBTQ+-rechten**:\n• 64 landen criminaliseren nog homoseksualiteit (vooral Afrika, Midden-Oosten, Caribisch).\n• Oeganda + Uganda: doodstraf-wetgeving 2023.\n• Tegelijk: gay marriage steeds breder geaccepteerd (~35 landen).\n\n**NGO-rol**:\n• **Amnesty International** (1961): rapporteert mensenrechten-schendingen.\n• **Human Rights Watch** (1978): grote organisatie New York.\n• **Reporters Without Borders** (pers-vrijheid).\n• **Amnesty NL**: ~150 000 leden.\n• Effect: niet directe macht maar shaming + politieke druk werkt soms.\n\n**Wat kun je zelf doen?**\n• Word lid van Amnesty / Reporters Sans Frontières.\n• Schrijf brieven aan politici + ambassades.\n• Steun mensenrechten-organisaties financieel.\n• Doe mee aan acties + petities.\n• Eet/koop bewust (geen producten uit problematische ketens — bv. katoen Xinjiang).\n• Stem op partijen die mensenrechten serieus nemen in buitenlands beleid.",
    checks: [
      {
        q: "**Oeigoeren** (China-Xinjiang) volgens westerse bronnen:",
        options: [
          ">1 miljoen in 're-educatiekampen' — westerse bronnen noemen het genocide",
          "Vrijheid",
          "Normale werkomstandigheden",
          "Geen probleem"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Geleerd 2018+", tekst: "Eerst bestreden, maar gelekt documenten 2019 + satellietfoto's tonen massale kampen. China noemt 'beroepsopleiding'. Westerse landen + ngo's spreken van massa-detentie, dwang-arbeid (katoen!), dwangsterilisatie. VS + UK + Canada noemen genocide. Reputatie China geschaad." },
          ],
          niveaus: { basis: "Miljoenen in kamp. A.", simpeler: "Kampen voor moslims. A.", nogSimpeler: "Oeigoeren = A." },
        },
      },
      {
        q: "**ICC-arrestatiebevel Poetin** (maart 2023) voor:",
        options: [
          "Deportatie ~20 000 Oekraïense kinderen naar Rusland",
          "Cyberaanvallen",
          "Sancties",
          "Verkiezingen"
        ],
        answer: 0,
        wrongHints: [null, "Apart.", "Wel sancties maar geen ICC-criterium.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Oorlogsmisdaad gedocumenteerd", tekst: "Tijdens Oekraïne-oorlog: Russische troepen brachten Oekraïense kinderen naar Rusland → 'heropvoeding' tot Russen. Onder Genocide-verdrag een vorm van etnische uitwissing. Poetin kan niet meer veilig reizen naar ICC-leden (Russen gaat naar BRICS-landen)." },
          ],
          niveaus: { basis: "Kinder-deportatie. A.", simpeler: "Oekraïense kinderen ontvoerd. A.", nogSimpeler: "Kinderen = A." },
        },
      },
      {
        q: "**Mahsa Amini-protesten** Iran (2022):",
        options: [
          "Vrouwen + jeugd tegen verplichte hijab + regime",
          "Klimaatprotesten",
          "Economische protest",
          "Geen relevant"
        ],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet primair.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "'Vrouw, leven, vrijheid'", tekst: "Mahsa Amini stierf 22 j oud na arrestatie zedenpolitie wegens 'verkeerd' dragen hijab. Wekenlang massa-protesten in Iran-steden. Slogan Zan-Zendegi-Azadi (Vrouw-Leven-Vrijheid) wereldwijd bekend. Honderden doden, duizenden gevangen. Internationaal solidariteit." },
          ],
          niveaus: { basis: "Tegen hijab + regime. A.", simpeler: "Iran vrouwen-protest. A.", nogSimpeler: "Mahsa = A." },
        },
      },
      {
        q: "**Amnesty International** opgericht in:",
        options: ["1961", "1945", "2000", "1900"],
        answer: 0,
        wrongHints: [null, "Niet — VN.", "Veel later.", "Te vroeg."],
        uitlegPad: {
          stappen: [{ titel: "Peter Benenson", tekst: "Britse jurist begon na bericht Portugese studenten gevangen voor 'vrijheid'-toost. Letter-schrijven aan dictators. Vandaag 10 mln leden, Nobelvredesprijs 1977. Rapporten over politieke gevangenen, doodstraf, marteling. Onafhankelijk van staten + bedrijven (alleen lid-bijdragen)." }],
          niveaus: { basis: "1961. A.", simpeler: "Begin '60. A.", nogSimpeler: "1961 = A." },
        },
      },
      {
        q: "Hoeveel landen criminaliseren **homoseksualiteit** nog (2024)?",
        options: ["~64 landen", "Geen", "Alle behalve EU", "200+"],
        answer: 0,
        wrongHints: [null, "Helaas wel.", "Niet alleen EU.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Vooral Afrika + Midden-Oosten + Caribisch", tekst: "Uganda + Saudi-Arabië + Iran + Soedan + Mauretanië straffen met doodstraf. Veel anderen gevangenisstraf. Tegelijkertijd: ~35 landen erkennen gay marriage (Argentinië, Australië, Nieuw-Zeeland, NL eerste in 2001). Verschillen wereldwijd enorm." },
          ],
          niveaus: { basis: "64. A.", simpeler: "Veel landen. A.", nogSimpeler: "64 = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Mensenrechten in NL + persoonlijke actie",
    explanation:
      "**Mensenrechten in Nederland**:\n\n**Grondwet** (1983 huidige versie, basis 1814/1815):\n• Hoofdstuk 1 = grondrechten.\n• Art. 1: 'Allen die zich in Nederland bevinden, worden in gelijke gevallen gelijk behandeld. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht of op welke grond dan ook is niet toegestaan.'\n• Art. 6: vrijheid van godsdienst.\n• Art. 7: vrijheid van meningsuiting.\n• Art. 8: vrijheid van vereniging.\n• Art. 10: privacy.\n\n**Voorbeelden NL-cases**:\n\n**1. Stikstofcrisis 2019** + boeren-protesten:\n• PAS-uitspraak Raad van State: Nederlands stikstofbeleid voldoet niet aan EU-natuurregels.\n• Massa-boerenprotest 2019-22.\n• Spanning tussen recht op eigendom + werk vs natuurbescherming.\n\n**2. Toeslagenaffaire** (2020+):\n• ~26 000 ouders ten onrechte beschuldigd van fraude met kinderopvangtoeslag.\n• Familie's gebroken, kinderen uit huis geplaatst.\n• Discriminatie (etnisch profilering, dubbele nationaliteit-bias).\n• Kabinet-Rutte III viel jan 2021. Officieel excuus + compensatie loopt nog.\n• Schendt onder andere art 1 grondwet + EVRM (eerlijk proces, privacy).\n\n**3. Klimaatzaak Urgenda** (2015-2019):\n• Urgenda-foundation klaagde NL-staat aan voor te zwak klimaatbeleid.\n• Rechter (Hoogste Raad 2019): staat MOET CO₂ 25% verminderen tegen 2020.\n• Eerste keer wereldwijd dat rechter staat dwong tot klimaatactie. Inspiratie elders.\n\n**4. Black Pete (Zwarte Piet)-debat**:\n• Anti-zwartepiet-protesten sinds 2013.\n• Klacht art 1 grondwet (discriminatie).\n• Geleidelijk verandering: meeste regio's nu 'roetveeg-Piet'.\n• Politiek explosief onderwerp.\n\n**5. Avondklok 2021** (COVID):\n• Rechter Den Haag oordeelde aanvankelijk: ongeoorloofd zonder noodtoestand.\n• Hoger beroep: wel geoorloofd.\n• Discussie privacy + bewegingsvrijheid vs publieke gezondheid.\n\n**6. Surveillance + AVG**:\n• Politie-bestand ('Bewerken Persoonsgegevens Politie'): jongeren uit minderheidsgroepen oversampled.\n• AVG (Europese privacywet 2018) sterkste regelgeving wereldwijd.\n\n**Toezichthouders NL**:\n• **College voor de Rechten van de Mens** (CRM): onafhankelijk instituut, kan klachten beoordelen.\n• **Nationale Ombudsman**: behartigt klachten burgers tegen overheid.\n• **Kinderombudsman**: specifiek kinderen.\n• **Autoriteit Persoonsgegevens** (AP): privacy + AVG-handhaver.\n\n**Persoonlijke handvatten**:\n• **Stem**: gemeenteraad, provincie, Tweede Kamer, EU-parlement. Veel impact!\n• **Word lid** van Amnesty, Human Rights Watch, partij, etc.\n• **Schrijf** aan ministers, ambassades, krantenredacties.\n• **Demonstreer** vreedzaam.\n• **Steun financieel** kleine ngo's (vaak meer impact dan grote).\n• **Lees + verspreid betrouwbare info** — niet alleen sociale-media-bubble.\n• **Koop ethisch** (Fair Trade, geen producten uit problematische ketens).\n• **Verken eigen vooroordelen** — discriminatie zit ook in ons.\n• **Onderwijs** kinderen + jongeren over rechten.\n\n**Mensenrechten = niet gegeven, vechten voor**:\n• 1948 UDHR was reactie op WO2.\n• Eerder geen automatische rechten (vrouwenkiesrecht NL pas 1919).\n• Wereldwijd nog steeds bestrijden.\n• 'It always seems impossible until it's done' — Nelson Mandela.\n\n**Toekomst-uitdagingen**:\n• AI + privacy + discrimineerd-algoritmes.\n• Klimaat als mensenrecht?\n• Surveillance-state vs vrijheid.\n• Sociale media + haatzaaien + desinformatie.\n• Migratie + grenzen-ethiek.\n\n**Optimistisch eindigen**:\n• Wereldwijd minder armoede dan ooit.\n• Vrouwenrechten verbeterd in veel landen.\n• Genocide minder dan WO2-tijd.\n• Onderwijs + gezondheid breder beschikbaar.\n• Internet maakt onderdrukking moeilijker te verbergen.\n• Maar veel werk over!",
    checks: [
      {
        q: "**Art. 1 Nederlandse Grondwet** verbiedt:",
        options: [
          "Discriminatie op welke grond dan ook",
          "Alleen rassendiscriminatie",
          "Niets",
          "Vrijheid"
        ],
        answer: 0,
        wrongHints: [null, "Veel breder.", "Wel verbiedt.", "Beschermt juist."],
        uitlegPad: {
          stappen: [
            { titel: "Brede tekst", tekst: "Letterlijk: '...of op welke grond dan ook'. Dus naast genoemde categorieën (geslacht, ras, religie, etc.) ook open voor toekomstige interpretatie. Beschermd onder andere LGBTQ+ (formeel pas 2023 expliciet toegevoegd via grondwetwijziging: 'seksuele gerichtheid + handicap')." },
          ],
          niveaus: { basis: "Geen discriminatie. A.", simpeler: "Verbod discriminatie. A.", nogSimpeler: "Art 1 = A." },
        },
      },
      {
        q: "**Toeslagenaffaire** is voorbeeld van:",
        options: [
          "Massa-schending door discriminatie + onjuiste fraude-beschuldigingen",
          "Slecht weer",
          "Goed beleid",
          "Geen issue"
        ],
        answer: 0,
        wrongHints: [null, "Onzin.", "Tegenovergesteld.", "Wel issue."],
        uitlegPad: {
          stappen: [
            { titel: "26 000 families schade", tekst: "Belastingdienst werkte met algoritme dat 'risico' voorspelde — bias tegen mensen met dubbele nationaliteit/migratie-achtergrond. Mensen ten onrechte teruggevorderde toeslag (€30k+), schulden, kinderen uit huis. Kabinet viel jan 2021. Nog steeds compensatie-proces loopt. Schendt Art 1 (discriminatie) + EVRM (eerlijk proces). Diepe vertrouwens-crisis." },
          ],
          niveaus: { basis: "Discriminatie+fraude-beschuldiging. A.", simpeler: "Onschuldigen vervolgd. A.", nogSimpeler: "Toeslag = A." },
        },
      },
      {
        q: "**Urgenda-zaak** (2019):",
        options: [
          "Rechter dwong NL tot 25% CO₂-reductie 2020 — wereldwijde primeur",
          "Verloor",
          "Geen klimaat-zaak",
          "Te vroeg"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Mensenrechten + klimaat", tekst: "Urgenda Foundation klaagde staat aan: klimaatbeleid te zwak schendt zorgplicht onder EVRM (recht op leven + familie-leven, gezondheid). Rechter agreed → NL MOET 25% CO₂-reductie 2020. Eerste wereldwijde precedent klimaat-rechtszaak tegen staat. Inspiratie voor Duitsland, Frankrijk, Pakistan, etc." },
          ],
          niveaus: { basis: "25% CO₂-bevolen. A.", simpeler: "Klimaat-uitspraak NL. A.", nogSimpeler: "Urgenda = A." },
        },
      },
      {
        q: "**College voor de Rechten van de Mens** (NL):",
        options: [
          "Onafhankelijk instituut dat klachten over discriminatie beoordeelt",
          "Politie",
          "Rechter",
          "Geen functie"
        ],
        answer: 0,
        wrongHints: [null, "Apart.", "Apart.", "Wel functie."],
        uitlegPad: {
          stappen: [{ titel: "Sinds 2012", tekst: "Onafhankelijk van regering. Behandelt klachten (kosteloos) over discriminatie + adviseert. Uitspraken niet juridisch bindend, maar morele autoriteit. Volgt VN-mensenrechten-systeem. Plus rapporteert jaarlijks over mensenrechten-situatie NL." }],
          niveaus: { basis: "Discriminatie-klachten. A.", simpeler: "Rechten-instituut. A.", nogSimpeler: "CRM = A." },
        },
      },
      {
        q: "Wat is **effectiefste persoonlijke actie** voor mensenrechten?",
        options: [
          "Combinatie: stemmen + ngo-lid + bewust kopen + onderwijs",
          "Niets doen",
          "Alleen klagen",
          "Alleen geld geven"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Te beperkt.", "Niet enige manier."],
        uitlegPad: {
          stappen: [
            { titel: "Veel kleine acties tellen op", tekst: "Geen één 'wonder-actie' — maar veel kleine acties opgeteld maken verschil. Wereld is veranderd door massa-bewegingen: vrouwenkiesrecht, burgerrechten VS, anti-apartheid Zuid-Afrika, gay marriage. Begint vaak met paar mensen die niet stoppen." },
          ],
          niveaus: { basis: "Combineren. A.", simpeler: "Veel kleine acties. A.", nogSimpeler: "Combo = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const mensenrechtenVnHavoVwo = {
  id: "mensenrechten-vn-havo-vwo",
  title: "Mensenrechten + VN (HAVO/VWO Maatschappij)",
  emoji: "🕊️",
  level: "havo-vwo-4-5",
  subject: "maatschappijleer",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Maatschappijleer — Mensenrechten + VN (CSE)",
  prerequisites: [],
  intro:
    "Mensenrechten + VN voor HAVO/VWO eindexamen — UDHR 1948 + 3 generaties rechten, VN-structuur + vetorecht, internationale rechtspraak (ICJ/ICC/tribunalen), actuele schendingen (Oeigoeren/Oekraïne/Gaza/Iran), NL-cases (toeslagenaffaire, Urgenda) + persoonlijke actie. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "mensenrechten", "human rights",
    "UDHR", "Universele Verklaring", "1948",
    "Eleanor Roosevelt",
    "Geneefse Conventies",
    "EVRM", "Straatsburg",
    "ICCPR", "ICESCR",
    "CRC", "kinderrechten",
    "CEDAW", "vrouwenrechten",
    "3 generaties rechten",
    "VN", "Verenigde Naties", "UN",
    "Algemene Vergadering", "Veiligheidsraad", "UNSC",
    "vetorecht", "P5",
    "Guterres", "secretaris-generaal",
    "WHO", "UNICEF", "UNESCO", "UNHCR",
    "Blauwhelmen", "vredesoperatie",
    "ICJ", "Internationaal Gerechtshof",
    "ICC", "Strafhof", "Rome-Statuut",
    "ICTY", "ICTR",
    "Neurenberg", "Eichmann",
    "genocide", "Genocideverdrag",
    "universele jurisdictie",
    "Oeigoeren", "Xinjiang", "China",
    "Oekraïne", "Poetin",
    "Gaza", "Netanyahu",
    "Mahsa Amini", "Iran",
    "Afghanistan", "Taliban", "vrouwen",
    "Noord-Korea",
    "Rohingya", "Myanmar",
    "LGBTQ", "Uganda",
    "Amnesty International",
    "Human Rights Watch",
    "Reporters Without Borders",
    "Toeslagenaffaire",
    "Urgenda",
    "Zwarte Piet",
    "art 1 Grondwet",
    "College Rechten Mens",
    "Nationale Ombudsman",
    "Autoriteit Persoonsgegevens", "AVG",
  ],
  chapters,
  steps,
};

export default mensenrechtenVnHavoVwo;
