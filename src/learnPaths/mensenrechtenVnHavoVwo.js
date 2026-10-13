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
      "**UDHR** (Universal Declaration of Human Rights) aangenomen door VN-Algemene Vergadering op **10 december 1948** in Parijs. Geen verdrag maar verklaring → niet juridisch bindend, wel basis voor latere verdragen.\n\n**Achtergrond**:\n• Na Holocaust + WO2-gruwelijkheden.\n• Eleanor Roosevelt (weduwe Amerikaanse president) voorzitter commissie.\n• 58 landen lid VN toen, 48 stemden voor, 8 onthielden (USSR-blok, Saudi-Arabië, Zuid-Afrika).\n\n**30 artikelen** — belangrijke voorbeelden:\n• **Art. 1**: 'Alle mensen zijn vrij en gelijk geboren in waardigheid + rechten.'\n• **Art. 2**: gelijkheid zonder onderscheid (geslacht, ras, kleur, taal, religie, etc.).\n• **Art. 3**: recht op leven, vrijheid + veiligheid.\n• **Art. 5**: verbod marteling + onmenselijke behandeling.\n• **Art. 9**: verbod willekeurige arrestatie.\n• **Art. 10**: recht op eerlijk proces.\n• **Art. 18**: vrijheid van denken, geweten, religie.\n• **Art. 19**: vrijheid van meningsuiting.\n• **Art. 26**: recht op onderwijs (gratis basisonderwijs).\n\n**Drie generaties mensenrechten**:\n• **1e generatie**: BURGERRECHTEN + politieke (vrijheid, gelijkheid, vrije meningsuiting, eerlijk proces). Beschermen tegen de staat.\n• **2e generatie**: SOCIALE + economische + culturele (onderwijs, gezondheidszorg, werk, eten). Staat moet leveren.\n• **3e generatie**: COLLECTIEVE (zelfbeschikking, ontwikkeling, schoon milieu, vrede). Voor hele volkeren.\n\n**Bindende verdragen** (gebouwd op UDHR):\n• **ICCPR** (Internationaal Verdrag inzake Burger- + Politieke Rechten, 1966).\n• **ICESCR** (idem economisch/sociaal/cultureel, 1966).\n• **EVRM** (Europees Verdrag voor de Rechten van de Mens, 1950) — Europees Hof Straatsburg.\n• **Geneefse Conventies** (1949) — oorlogsrecht.\n• **Vluchtelingenverdrag** (1951).\n• **Conventie Vrouwendiscriminatie** (CEDAW, 1979).\n• **Conventie Kinderrechten** (CRC, 1989).\n\n**UDHR-impact**:\n• Inspireerde ~100 nationale grondwetten.\n• EU-Handvest Grondrechten (2000).\n• Voortdurend gebruikt door NGO's (Amnesty, HRW).",
    checks: [
      {
        q: "**UDHR** werd aangenomen op:",
        options: ["10 december 1948", "24 oktober 1945", "4 november 1950", "20 november 1989"],
        answer: 0,
        wrongHints: [null, "Dat is de oprichting van de VN. Kwam de verklaring meteen daarna?", "Dat is de datum van het EVRM (Rome), het Europese verdrag.", "Dat is de datum van het Kinderrechtenverdrag."],
        uitlegPad: {
          stappen: [{ titel: "Mensenrechten-dag", tekst: "10 december = Internationale Dag van de Mensenrechten, jaarlijks gevierd. Eleanor Roosevelt-commissie. Niet juridisch bindend maar morele standaard wereldwijd." }],
          niveaus: { basis: "10-12-1948.", simpeler: "Dec 1948.", nogSimpeler: "1948" },
        },
      },
      {
        q: "**1e generatie mensenrechten** zijn:",
        options: [
          "Burger- en politieke rechten",
          "Sociaal-economische rechten",
          "Collectieve solidariteitsrechten",
          "Digitale en privacyrechten"
        ],
        answer: 0,
        wrongHints: [null, "Niet — 2e generatie.", "Dat is de 3e generatie (vrede, milieu).", "Die bestonden nog niet toen de eerste rechten werden vastgelegd, rond 1789."],
        uitlegPad: {
          stappen: [{ titel: "Klassieke vrijheidsrechten", tekst: "1e generatie beschermt INDIVIDU tegen MACHT van staat. Vrijheid van meningsuiting, godsdienst, vereniging. Geen willekeurige arrestatie. Eerlijk proces. Stamt uit Verlichting-revoluties (Amerikaans 1776, Frans 1789)." }],
          niveaus: { basis: "Burger + politiek.", simpeler: "Vrijheden tegen overheid.", nogSimpeler: "1e gen" },
        },
      },
      {
        q: "**EVRM** (Europees Verdrag) wordt afgedwongen door:",
        options: [
          "Het Europees Hof in Straatsburg",
          "De VN-Mensenrechtenraad in Genève",
          "Het Internationaal Strafhof in Den Haag",
          "Het EU-Hof van Justitie in Luxemburg"
        ],
        answer: 0,
        wrongHints: [null, "De Mensenrechtenraad is een VN-orgaan zonder rechters. Het EVRM is Europees.", "Het Strafhof berecht personen voor oorlogsmisdaden. Wie toetst of een staat zich aan het EVRM houdt?", "Dat hof hoort bij de EU, terwijl het EVRM bij de Raad van Europa hoort."],
        uitlegPad: {
          stappen: [{ titel: "Sinds 1959", tekst: "Bij een EVRM-schending kan elk individu in een lidstaat een klacht indienen, na het uitputten van de nationale rechtsmiddelen. Hof oordeelt + lidstaat moet uitspraak volgen (politieke + reputationele druk). 46 lidstaten Raad van Europa. Rusland 2022 verwijderd na Oekraïne-invasie." }],
          niveaus: { basis: "Straatsburg.", simpeler: "Europees mensenrechtenhof.", nogSimpeler: "Straatsburg" },
        },
      },
      {
        q: "**Convention on the Rights of the Child** (CRC):",
        options: [
          "Kinderrechtenverdrag uit 1989",
          "Kinderrechtenverdrag uit 1948",
          "ILO-verdrag tegen kinderarbeid",
          "EU-richtlijn over kinderopvang"
        ],
        answer: 0,
        wrongHints: [null, "In 1948 kwam de Universele Verklaring. Kwam het kinderverdrag tegelijk?", "De ILO maakte aparte verdragen over arbeid. Gaat de CRC alleen over werk?", "Het is een VN-verdrag. Geldt het dan alleen in de EU?"],
        uitlegPad: {
          stappen: [{ titel: "Meest geratificeerde verdrag ooit", tekst: "196 staten lid (alle behalve VS — wel ondertekend). Rechten kind onder 18: bescherming, onderwijs, gezin, participatie. Comité Kinderrechten in Genève monitort. NL: Defence for Children + Kinderombudsman volgen op." }],
          niveaus: { basis: "Kinderrechten 1989.", simpeler: "Verdrag voor kinderen.", nogSimpeler: "CRC" },
        },
      },
      {
        q: "Welke is GEEN UDHR-recht?",
        options: [
          "Recht op schoon milieu",
          "Recht op leven",
          "Vrijheid van meningsuiting",
          "Recht op onderwijs"
        ],
        answer: 0,
        wrongHints: [null, "Bescherming van je leven is het meest fundamentele recht. Zou dat ontbreken?", "Vrije meningsuiting is een klassiek recht dat de UDHR beschermt (artikel 19).", "De UDHR noemt onderwijs voor iedereen als recht (artikel 26). Welke optie hoort niet in dit rijtje?"],
        uitlegPad: {
          stappen: [{ titel: "UDHR = fundament", tekst: "30 artikelen behandelen leven, vrijheid, gelijkheid, onderwijs, werk, religie, etc. — geen luxe-goederen. Recht op privé-eigendom WEL (art 17), maar een recht op een schoon milieu staat er niet in — milieu werd pas later een mensenrechtenthema (3e generatie; de VN erkende het recht op een gezond milieu in 2022)." }],
          niveaus: { basis: "Milieu niet.", simpeler: "Geen recht op een schoon milieu.", nogSimpeler: "Milieu" },
        },
      },
    ],
  },

  // ─── B. VN-structuur ──────────────────────────────────────
  {
    title: "VN-structuur — hoofdorganen",
    explanation:
      "**Verenigde Naties (VN/UN)** opgericht **24 oktober 1945** (VN-dag) door 51 stichtende landen na WO2. Vandaag 193 leden (bijna alle landen behalve Taiwan, Vaticaan, Kosovo).\n\n**Doelen** (VN-Handvest):\n• Vrede + veiligheid handhaven.\n• Vriendschappelijke betrekkingen.\n• Internationale samenwerking economisch + sociaal.\n• Mensenrechten promoten.\n\n**Hoofdkantoor**: New York. Genève (Europees centrum), Wenen, Nairobi.\n\n**Zes hoofdorganen**:\n\n**1. Algemene Vergadering** (AV):\n• Alle 193 lidstaten, één land één stem.\n• Resoluties NIET juridisch bindend (vooral een politiek oordeel).\n• Begroting + nieuwe leden toelaten.\n\n**2. Veiligheidsraad** (UNSC):\n• 15 leden: 5 PERMANENT met **vetorecht** (VS, UK, Frankrijk, Rusland, China) + 10 tijdelijk (2-jaars termijn).\n• Beslissingen WEL juridisch bindend.\n• Kan sancties opleggen + vredesoperaties autoriseren.\n• Vetorecht = vaak verlamming (Rusland blokkeerde Oekraïne-resoluties, VS Israël-resoluties).\n• Hervormingsdebat al decennia.\n\n**3. Economische + Sociale Raad** (ECOSOC):\n• 54 leden gekozen.\n• Coördineert het sociaal-economische werk.\n• UNCTAD, UN-Habitat, etc.\n\n**4. Trustschapsraad** (Trusteeship Council):\n• Voor voogdijgebieden (kolonies overgangsstatus).\n• Sinds 1994 inactief (laatste dekolonisatie).\n\n**5. Internationaal Gerechtshof** (ICJ, Den Haag):\n• Beslecht juridische geschillen tussen STATEN (niet individuen).\n• Voorbeelden: maritieme grensgeschillen, Bosnië vs Servië over Srebrenica (2007).\n• 15 rechters, 9-jaars termijn.\n• ≠ Internationaal Strafhof (ICC, ook Den Haag, voor individuen).\n\n**6. Secretariaat**:\n• Onder leiding **Secretaris-Generaal** (huidig: António Guterres, Portugees, sinds 2017).\n• 41 000 medewerkers wereldwijd.\n\n**Gespecialiseerde agentschappen**:\n• **WHO** (gezondheid, Genève).\n• **UNICEF** (kinderen).\n• **UNESCO** (cultuur + onderwijs).\n• **UNHCR** (vluchtelingen).\n• **WFP** (voedsel).\n• **ILO** (arbeid).\n• **IMF + Wereldbank** (financieel).\n\n**VN-vredesoperaties** ('Blauwhelmen'):\n• Ruim 10 actieve missies 2024 (DRC, Zuid-Soedan, Libanon, Cyprus, etc.).\n• Tienduizenden personeelsleden.\n• NL stuurde bv. troepen naar MINUSMA (Mali), tot 2019.\n• Beperkt mandaat: alleen zelfverdediging + bescherming burgers.\n\n**Kritiek op VN**:\n• Vetorecht verlamming UNSC.\n• Onmacht in genocides (Rwanda 1994 niet gestopt, Srebrenica 1995, Syrië nog).\n• Bureaucratisch + duur.\n• Voorgesteld: vetorecht hervormen, meer permanente leden (Brazilië, India, Duitsland, Japan, Afrika).\n• Maar zelfde vetorecht-houders moeten ermee instemmen → bijna onmogelijk.",
    checks: [
      {
        q: "Welke landen hebben **vetorecht** in VN-Veiligheidsraad?",
        options: [
          "VS, UK, Frankrijk, Rusland, China",
          "Alle 15 leden van de Veiligheidsraad",
          "VS, UK, Frankrijk, Duitsland, Japan",
          "VS, Rusland, China, India, Brazilië"
        ],
        answer: 0,
        wrongHints: [null, "Alle leden stemmen mee, maar hebben de 10 tijdelijke leden ook een veto?", "Duitsland en Japan verloren WO2 — kregen zij in 1945 een vaste zetel?", "India en Brazilië willen graag een vaste zetel, maar hebben ze die?"],
        uitlegPad: {
          stappen: [
            { titel: "WO2-overwinnaars", tekst: "Vijf zegevierende grote machten WO2: VS, UK, FR (Westen) + USSR (nu Rusland) + China (vanaf 1971 Volksrepubliek ipv Taiwan). Elk heeft vetorecht in UNSC = kan elke bindende resolutie blokkeren. Reden voor verlamming bij conflicten Oekraïne, Syrië, Israel-Palestina." },
          ],
          niveaus: { basis: "P5: VS/UK/FR/RU/CN.", simpeler: "Vijf grote machten.", nogSimpeler: "P5" },
        },
      },
      {
        q: "Hoeveel **lidstaten** heeft de VN?",
        options: ["193", "100", "51", "211"],
        answer: 0,
        wrongHints: [null, "Bij de oprichting waren het er 51. Na de dekolonisatie kwamen er veel landen bij — meer of minder dan dit?", "Zoveel landen richtten de VN op in 1945. Bleef het daarbij?", "211 is het aantal landen bij de FIFA. Telt de VN er net zoveel?"],
        uitlegPad: {
          stappen: [{ titel: "Bijna alle landen", tekst: "Stichting 1945: 51 landen. Vandaag 193. Niet-leden: Vaticaan (waarnemer), Taiwan (China-blokkeert), Kosovo (niet door alle landen erkend), Palestina (waarnemer-status). Zuid-Soedan was laatste toelating (2011)." }],
          niveaus: { basis: "193.", simpeler: "193 landen.", nogSimpeler: "193" },
        },
      },
      {
        q: "**ICJ** (International Court of Justice) zit in:",
        options: ["Den Haag", "New York", "Genève", "Straatsburg"],
        answer: 0,
        wrongHints: [null, "In New York staat het hoofdkantoor van de VN, maar het hof zit in een andere stad.", "In Genève zitten de Mensenrechtenraad en de WHO, maar niet dit hof.", "In Straatsburg zit het Europees Hof voor de Rechten van de Mens. Waar zit het VN-hof?"],
        uitlegPad: {
          stappen: [{ titel: "Vredespaleis", tekst: "ICJ in Vredespaleis Den Haag (sinds 1946). Beslecht juridische geschillen tussen STATEN. ICC (apart) ook Den Haag — voor individuele oorlogsmisdadigers. NL = 'juridische hoofdstad van de wereld' door beide + Joegoslavië-tribunaal." }],
          niveaus: { basis: "Den Haag.", simpeler: "NL Den Haag.", nogSimpeler: "DH" },
        },
      },
      {
        q: "Huidige **VN-Secretaris-Generaal**:",
        options: ["António Guterres", "Ban Ki-moon", "Kofi Annan", "Jens Stoltenberg"],
        answer: 0,
        wrongHints: [null, "Ban Ki-moon was de vorige, van 2007 tot 2016.", "Kofi Annan was secretaris-generaal van 1997 tot 2006.", "Stoltenberg leidde de NAVO, niet de VN."],
        uitlegPad: {
          stappen: [{ titel: "Vluchtelingen-achtergrond", tekst: "Voor VN was hij hoge commissaris voor vluchtelingen (UNHCR). Portugees. Klimaatactivist. Werkt aan VN-hervorming. Tweede termijn loopt tot 2026." }],
          niveaus: { basis: "Guterres.", simpeler: "Guterres = SG.", nogSimpeler: "Guterres" },
        },
      },
      {
        q: "VN **vredesoperatie-troepen** worden genoemd:",
        options: ["Blauwhelmen", "Mariniers", "Witte Helmen", "Groene baretten"],
        answer: 0,
        wrongHints: [null, "Mariniers horen bij het leger van één land. Hoe herken je VN-soldaten aan hun hoofddeksel?", "De Witte Helmen zijn Syrische reddingswerkers, geen VN-soldaten.", "Groene baretten zijn Nederlandse commando's, geen VN-troepen."],
        uitlegPad: {
          stappen: [{ titel: "Blauwe helm + baret", tekst: "VN-troepen uit lidstaten dragen blauwe helmen voor herkenbaarheid + neutraliteit. Tienduizenden wereldwijd in ruim 10 missies. Beperkt mandaat: alleen zelfverdediging + bescherming burgers. Niet-aanvallende rol." }],
          niveaus: { basis: "Blauwhelmen.", simpeler: "Blauwe helm-troepen.", nogSimpeler: "Blauw" },
        },
      },
    ],
  },

  // ─── C. Internationale rechtspraak ────────────────────────
  {
    title: "Internationale rechtspraak — ICC + Tribunalen",
    explanation:
      "**Drie hoofd-internationale rechtbanken**:\n\n**1. Internationaal Gerechtshof (ICJ)** Den Haag:\n• VN-hoofd-orgaan (zie stap 2).\n• Tussen STATEN: grenzen, verdragen, etc.\n• Bekende zaken: Zuid-Afrika vs Israel (genocide-aanklacht Gaza), Bosnië vs Servië (Srebrenica, 2007).\n\n**2. Internationaal Strafhof (ICC)** Den Haag:\n• Onafhankelijk van VN, opgericht 2002 (Statuut van Rome 1998).\n• Berecht INDIVIDUEN voor:\n  - Oorlogsmisdaden.\n  - Misdaden tegen de menselijkheid.\n  - Genocide.\n  - Agressie-misdrijf.\n• 124 staten lid (NL, EU, etc.). **NIET-leden**: VS, China, Rusland, India, Israel.\n• Arrestatiebevelen lopen ondertussen voor Poetin (Oekraïne deportatie kinderen) + Netanyahu (Gaza-conflict).\n• Probleem: ICC heeft geen eigen politie → afhankelijk van staten om verdachten te arresteren.\n\n**3. Ad-hoc tribunalen** (specifiek conflict):\n• **ICTY** (1993-2017): Joegoslavië-tribunaal Den Haag. Berechtte Milošević, Karadžić, Mladić.\n• **ICTR** (1994-2015): Rwanda-tribunaal Arusha. Berechtte hutu-leiders voor genocide.\n• **Speciale rechtbanken** Sierra Leone, Cambodja, Libanon.\n\n**Geschiedenis**:\n• Vóór 1945: weinig internationaal recht-handhaving.\n• **Neurenberg-processen** (1945-46): eerste keer dat staatsleiders berecht werden voor oorlogsmisdaden. Beginsel: 'orders volgen' geen verdediging.\n• 1948 Genocideverdrag.\n• 1949 Geneefse Conventies (4 verdragen + protocollen) over oorlogsrecht: bescherming krijgsgevangenen, gewonden, burgers, medisch personeel.\n\n**Bekende cases**:\n• **Adolf Eichmann** (Israel 1961): organisator van de deportaties voor de Endlösung. Geëxecuteerd.\n• **Milošević** (ICTY): stierf in cel 2006 voor uitspraak.\n• **Charles Taylor** (Sierra Leone): ex-president Liberia, 50 j voor oorlogsmisdaden.\n• **Karadžić + Mladić**: Bosnisch-Servische leiders, levenslang voor Srebrenica.\n• **Lubanga** (DRC): eerste ICC-veroordeling (2012) voor kindsoldaten.\n\n**Genocide-criteria** (1948-verdrag):\n• Doel: een nationale, etnische, raciale of religieuze groep geheel of gedeeltelijk VERNIETIGEN.\n• Niet alle massamoord = genocide (vereist 'special intent' = dolus specialis).\n• Bewezen: Holocaust, Rwanda, Srebrenica.\n• Discussie: Armeense 1915 (Turkije ontkent), Oeigoeren-huidig (China ontkent).\n\n**Universele jurisdictie**:\n• Sommige misdrijven (genocide, marteling) zo ernstig dat ELKE staat ze mag berechten, ongeacht waar gepleegd.\n• Spaanse rechter Garzón probeerde Pinochet (Chili) te berechten 1998.\n• Vandaag NL-rechtbanken: Syrische ex-officieren voor martelingen.\n\n**Beperkingen**:\n• Trage processen (jaren lang).\n• Hoge kosten.\n• Politiek beïnvloed (sommige verdachten beschermd door eigen staat).\n• Selectieve uitvoering (vooral Afrikaanse verdachten, ICC bekritiseerd).\n• Geen tanden: VS + China + Rusland erkennen ICC niet.",
    checks: [
      {
        q: "Wat doet **ICC** (International Criminal Court)?",
        options: [
          "Berecht personen voor oorlogsmisdaden",
          "Beslecht conflicten tussen staten",
          "Berecht staten die mensenrechten schenden",
          "Stuurt vredesmissies naar conflictgebieden"
        ],
        answer: 0,
        wrongHints: [null, "Ruzies tussen staten gaan naar het Internationaal Gerechtshof (ICJ). Wie staat bij het ICC terecht?", "Staten worden aangesproken door bijvoorbeeld het Europees Hof in Straatsburg. Wie staat bij het ICC terecht?", "Dat doet de Veiligheidsraad met blauwhelmen. Is het ICC een leger of een rechtbank?"],
        uitlegPad: {
          stappen: [{ titel: "Permanente strafrechtbank", tekst: "Sinds 2002 (Rome-Statuut 1998). Tussen Neurenberg-processen (ad-hoc) + ICTY/ICTR (per conflict) → behoefte permanente rechtbank. ICC handelt VOOR (preventie via afschrikking) + NA (berechting). 124 leden, maar grootmachten ontbreken." }],
          niveaus: { basis: "Berecht individuen.", simpeler: "ICC = strafhof persoonlijk.", nogSimpeler: "ICC" },
        },
      },
      {
        q: "**Neurenberg-principe**:",
        options: [
          "Bevelen volgen is geen excuus voor oorlogsmisdaden",
          "Alleen leiders zijn strafbaar, geen gewone soldaten",
          "Staten worden gestraft, geen individuele personen",
          "Oorlogsmisdaden verjaren na twintig jaar"
        ],
        answer: 0,
        wrongHints: [null, "In Neurenberg stonden vooral leiders terecht. Maar gold het principe niet ook voor lagere uitvoerders?", "In Neurenberg stonden personen terecht. Wat zegt dat?", "Oorlogsmisdaden verjaren juist niet. Welk principe kwam uit de processen in Neurenberg?"],
        uitlegPad: {
          stappen: [
            { titel: "Individuele verantwoordelijkheid", tekst: "Vóór WO2: militairen volgden orders, niet persoonlijk verantwoordelijk. Neurenberg 1945-46 verwierp dit. Eichmann ('ich war nur ein Rädchen') opnieuw gepoogd 1961 — verworpen. Vandaag basis voor ICC. Plicht om duidelijk misdadige bevelen NIET uit te voeren." },
          ],
          niveaus: { basis: "Orders ≠ vrij.", simpeler: "Persoonlijke verantwoording.", nogSimpeler: "Persoon" },
        },
      },
      {
        q: "**Geneefse Conventies** (1949) regelen:",
        options: [
          "Bescherming in oorlogstijd",
          "Rechten van vluchtelingen",
          "Verbod op kernwapens",
          "Mensenrechten algemeen"
        ],
        answer: 0,
        wrongHints: [null, "Het Vluchtelingenverdrag kwam in 1951, ook uit Genève. Waar gaan de Conventies van 1949 over?", "Kernwapens regelen latere verdragen, zoals het Non-proliferatieverdrag (1968).", "Dat doet de UVRM. De Conventies gaan over een bijzondere situatie: welke?"],
        uitlegPad: {
          stappen: [{ titel: "Vier verdragen", tekst: "I: gewonden land. II: gewonden zee. III: krijgsgevangenen. IV: burgers in oorlog. Plus aanvullende protocollen (1977). Schending = oorlogsmisdaad. Universeel geratificeerd (alle 196 landen) — uniek voor internationaal verdrag." }],
          niveaus: { basis: "Oorlogsrecht.", simpeler: "Oorlogs-regels.", nogSimpeler: "Genève" },
        },
      },
      {
        q: "**Genocide-definitie** vereist:",
        options: [
          "Opzet om een etnische of religieuze groep te vernietigen",
          "Een zeer groot aantal burgerdoden in korte tijd",
          "Geweld tussen twee etnische groepen in een land",
          "Doden van politieke tegenstanders door een regime"
        ],
        answer: 0,
        wrongHints: [null, "Ook heel veel slachtoffers maken het juridisch nog geen genocide. Wat is het doel van de dader?", "Geweld alleen is niet genoeg. Wat moet de dader van plan zijn?", "Politieke groepen staan niet in het Genocideverdrag van 1948."],
        uitlegPad: {
          stappen: [
            { titel: "Dolus specialis", tekst: "1948-Genocideverdrag: doel = vernietigen 'in whole or in part' van groep wegens nationale/etnische/raciale/religieuze identiteit. Niet alleen daad maar BEDOELING telt. Daarom moeilijk te bewijzen. Rwanda + Srebrenica + Holocaust formeel erkend. Of de deportatie van Oekraïense kinderen genocide is: nog discussie." },
          ],
          niveaus: { basis: "Opzet groep vernietigen.", simpeler: "Bedoeling tellen, niet alleen doden.", nogSimpeler: "Intent" },
        },
      },
      {
        q: "**Universele jurisdictie**:",
        options: [
          "Elke staat mag de zwaarste misdrijven berechten",
          "Een staat berecht misdrijven op eigen grondgebied",
          "Elk land past hetzelfde strafrecht toe",
          "De Veiligheidsraad beslist welk land iemand berecht"
        ],
        answer: 0,
        wrongHints: [null, "Dat is het territorialiteitsbeginsel. Wat is er dan 'universeel' aan?", "Landen houden hun eigen strafrecht. Jurisdictie gaat over wie mag rechtspreken.", "Moeten landen eerst toestemming van de Veiligheidsraad vragen?"],
        uitlegPad: {
          stappen: [
            { titel: "Voor genocide + marteling", tekst: "Concept: bepaalde misdrijven (jus cogens) zo ernstig dat ALLE staten ze mogen berechten ongeacht plek of slachtoffer. Voorbeeld: Pinochet-arrestatie Spanje 1998 voor Chileense martelingen. NL berecht Syrische ex-officieren in Den Haag. Mogelijk preventief effect: nergens veilig." },
          ],
          niveaus: { basis: "Elke staat kan.", simpeler: "Elk land mag berechten.", nogSimpeler: "Univ" },
        },
      },
    ],
  },

  // ─── D. Actuele schendingen ───────────────────────────────
  {
    title: "Actuele mensenrechten-schendingen wereldwijd",
    explanation:
      "**Voorbeelden van huidige zorgen**:\n\n**1. China — Oeigoeren** (XUAR/Xinjiang):\n• Schatting >1 miljoen Oeigoeren (moslim-minderheid) in 're-educatiekampen'.\n• Gedwongen arbeid, surveillance, religie-onderdrukking, dwang-sterilisatie.\n• China ontkent: noemt het 'beroepsopleiding tegen extremisme'.\n• Westerse sancties + bedrijven heroverwegen toeleveringsketens (katoen).\n• Discussie: genocide-criteria voldaan? VS + Canada + UK zeggen ja.\n\n**2. Rusland — Oekraïne** (2022+):\n• Oorlogsmisdaden in Boetsja, Marioepol, Cherson (executies, marteling, verkrachting).\n• Deportatie ~20 000 Oekraïense kinderen naar Rusland.\n• Aanvallen op civiele infrastructuur (ziekenhuizen, scholen, energie).\n• ICC arrestatiebevel Poetin maart 2023.\n• Sancties + isolatie Rusland.\n\n**3. Israel-Gaza** (sinds 2023):\n• Hamas-aanval 7 okt 2023: ~1200 doden + 250 gegijzelden Israel.\n• Israelische tegenactie Gaza: 40 000+ doden (vooral burgers), hongersnood.\n• ICC-arrestatiebevel premier Netanyahu (nov 2024) + Hamas-leiders.\n• Zuid-Afrika klacht ICJ (genocide-aanklacht).\n• Internationale druk + protesten + sancties.\n\n**4. Iran — Vrouwen + Mahsa Amini-protesten**:\n• Sept 2022: Mahsa Amini (22) stierf in politiebewaring voor 'verkeerd dragen' hijab.\n• Massa-protesten 'Vrouw, leven, vrijheid' (Zan, Zendegi, Azadi).\n• Honderden doden, duizenden gevangen.\n• Wereldwijde solidariteit + Nobelprijs Narges Mohammadi 2023.\n\n**5. Afghanistan — Taliban + vrouwen**:\n• Sinds VS-vertrek 2021 Taliban-bestuur.\n• Vrouwen verbod onderwijs >12 jaar, werk, openbaar leven zonder begeleider, soms zelfs gezondheidszorg.\n• 'Gender-apartheid'-debat.\n\n**6. Noord-Korea**:\n• Regime onder Kim Jong-un = totalitair.\n• Concentratiekampen (~120 000 mensen), executies, geen vrije pers, gedwongen-arbeid, hongersnood-cycli.\n\n**7. Saudi-Arabië**:\n• Vrouwen weinig rechten (verbeterd 2018+ met autorijden), strafzaken (zweepslagen, executies in publiek), Jamal Khashoggi-moord 2018.\n\n**8. Myanmar — Rohingya**:\n• 2017: militaire 'zuiverings'-operatie tegen moslim-Rohingya in Rakhine.\n• ~750 000 gevlucht naar Bangladesh.\n• Genocide-aanklacht ICJ (loopt).\n\n**9. Klimaat-vluchtelingen**:\n• Toenemend: zeespiegelstijging (Tuvalu), droogte (Sahel), overstromingen (Bangladesh).\n• Geen specifieke juridische status onder Vluchtelingenverdrag 1951.\n• Discussie over uitbreiding.\n\n**10. LGBTQ+-rechten**:\n• 64 landen criminaliseren nog homoseksualiteit (vooral Afrika, Midden-Oosten, Caribisch).\n• Oeganda: wet met doodstraf (2023).\n• Tegelijk: het homohuwelijk steeds breder geaccepteerd (~35 landen).\n\n**NGO-rol**:\n• **Amnesty International** (1961): rapporteert mensenrechten-schendingen.\n• **Human Rights Watch** (1978): grote organisatie New York.\n• **Reporters Without Borders** (pers-vrijheid).\n• **Amnesty NL**: honderdduizenden leden en donateurs.\n• Effect: niet directe macht maar shaming + politieke druk werkt soms.\n\n**Wat kun je zelf doen?**\n• Word lid van Amnesty / Reporters Sans Frontières.\n• Schrijf brieven aan politici + ambassades.\n• Steun mensenrechten-organisaties financieel.\n• Doe mee aan acties + petities.\n• Eet/koop bewust (geen producten uit problematische ketens — bv. katoen Xinjiang).\n• Stem op partijen die mensenrechten serieus nemen in buitenlands beleid.",
    checks: [
      {
        q: "**Oeigoeren** (China-Xinjiang) volgens westerse bronnen:",
        options: [
          "Meer dan 1 miljoen vastgehouden in kampen",
          "Ongeveer 100.000 vastgehouden in kampen",
          "Ongeveer 10 miljoen vastgehouden in kampen",
          "Vrijwillige beroepsopleiding tegen extremisme"
        ],
        answer: 0,
        wrongHints: [null, "Er wonen ongeveer 12 miljoen Oeigoeren in Xinjiang. Zou bijna iedereen vastzitten?", "Gelekte documenten en satellietfoto's wijzen op een veel grotere schaal.", "Dat is de uitleg van China zelf. Wat zeggen westerse bronnen?"],
        uitlegPad: {
          stappen: [
            { titel: "Bekend sinds 2018", tekst: "Eerst bestreden, maar gelekte documenten 2019 + satellietfoto's tonen massale kampen. China noemt 'beroepsopleiding'. Westerse landen + ngo's spreken van massa-detentie, dwang-arbeid (katoen!), dwangsterilisatie. VS + UK + Canada noemen genocide. Reputatie China geschaad." },
          ],
          niveaus: { basis: "Meer dan 1 miljoen in kampen.", simpeler: "Kampen voor moslims.", nogSimpeler: "Oeigoeren" },
        },
      },
      {
        q: "**ICC-arrestatiebevel Poetin** (maart 2023) voor:",
        options: [
          "Deportatie van Oekraïense kinderen",
          "Executies van burgers in Boetsja",
          "Het beginnen van de oorlog (agressie)",
          "Cyberaanvallen op Oekraïense banken"
        ],
        answer: 0,
        wrongHints: [null, "Boetsja wordt wel onderzocht, maar was dat de grond voor dit bevel?", "Het ICC kan Rusland niet voor agressie vervolgen, want Rusland is geen lid. Waar ging het dan om?", "Cyberaanvallen vallen buiten dit bevel. Welke groep slachtoffers stond centraal?"],
        uitlegPad: {
          stappen: [
            { titel: "Oorlogsmisdaad gedocumenteerd", tekst: "Tijdens Oekraïne-oorlog: Russische troepen brachten Oekraïense kinderen naar Rusland → 'heropvoeding' tot Russen. Het ICC noemt dit de oorlogsmisdaad 'onrechtmatige deportatie'; of het ook genocide is, is nog discussie. Poetin kan niet meer zonder risico reizen naar ICC-leden." },
          ],
          niveaus: { basis: "Kinder-deportatie.", simpeler: "Oekraïense kinderen ontvoerd.", nogSimpeler: "Kinderen" },
        },
      },
      {
        q: "**Mahsa Amini-protesten** Iran (2022):",
        options: [
          "Protest tegen de verplichte hoofddoek en het regime",
          "Protest tegen het tekort aan water en stroom",
          "Protest tegen de hoge prijzen en inflatie",
          "Protest tegen verkiezingsfraude bij de president"
        ],
        answer: 0,
        wrongHints: [null, "Er waren ook waterprotesten (2021), maar deze begonnen na de dood van een jonge vrouw. Waarom was zij opgepakt?", "Economische onvrede speelde mee, maar waarmee begon het?", "Dat was de Groene Beweging van 2009."],
        uitlegPad: {
          stappen: [
            { titel: "'Vrouw, leven, vrijheid'", tekst: "Mahsa Amini stierf 22 j oud na arrestatie zedenpolitie wegens 'verkeerd' dragen hijab. Wekenlang massa-protesten in Iran-steden. Slogan Zan-Zendegi-Azadi (Vrouw-Leven-Vrijheid) wereldwijd bekend. Honderden doden, duizenden gevangen. Internationale solidariteit." },
          ],
          niveaus: { basis: "Tegen hijab + regime.", simpeler: "Iran vrouwen-protest.", nogSimpeler: "Mahsa" },
        },
      },
      {
        q: "**Amnesty International** opgericht in:",
        options: ["1961", "1945", "1977", "1948"],
        answer: 0,
        wrongHints: [null, "1945 is het jaar van de VN. Is Amnesty een VN-organisatie?", "In 1977 kreeg Amnesty de Nobelprijs voor de Vrede. Was het toen net opgericht?", "1948 is het jaar van de UVRM. Werd Amnesty in datzelfde jaar opgericht?"],
        uitlegPad: {
          stappen: [{ titel: "Peter Benenson", tekst: "Britse jurist begon na bericht Portugese studenten gevangen voor 'vrijheid'-toost. Letter-schrijven aan dictators. Vandaag 10 mln leden, Nobelvredesprijs 1977. Rapporten over politieke gevangenen, doodstraf, marteling. Onafhankelijk van staten + bedrijven (alleen lid-bijdragen)." }],
          niveaus: { basis: "1961.", simpeler: "Begin '60.", nogSimpeler: "1961" },
        },
      },
      {
        q: "Hoeveel landen criminaliseren **homoseksualiteit** nog (2024)?",
        options: ["~64 landen", "~12 landen", "~130 landen", "~30 landen"],
        answer: 0,
        wrongHints: [null, "Helaas meer: denk aan grote delen van Afrika en het Midden-Oosten.", "Er zijn zo'n 195 landen. Zou het in twee derde daarvan strafbaar zijn?", "Helaas meer: denk aan grote delen van Afrika, het Midden-Oosten en het Caribisch gebied."],
        uitlegPad: {
          stappen: [
            { titel: "Vooral Afrika + Midden-Oosten + Caribisch", tekst: "Oeganda + Saudi-Arabië + Iran + Mauretanië dreigen met doodstraf. Veel anderen gevangenisstraf. Tegelijkertijd: ~35 landen erkennen het homohuwelijk (Argentinië, Australië, Nieuw-Zeeland, NL eerste in 2001). Verschillen wereldwijd enorm." },
          ],
          niveaus: { basis: "64.", simpeler: "Veel landen.", nogSimpeler: "64" },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Mensenrechten in NL + persoonlijke actie",
    explanation:
      "**Mensenrechten in Nederland**:\n\n**Grondwet** (1983 huidige versie, basis 1814/1815):\n• Hoofdstuk 1 = grondrechten.\n• Art. 1: 'Allen die zich in Nederland bevinden, worden in gelijke gevallen gelijk behandeld. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht, handicap, seksuele gerichtheid of op welke grond dan ook, is niet toegestaan.'\n• Art. 6: vrijheid van godsdienst.\n• Art. 7: vrijheid van meningsuiting.\n• Art. 8: vrijheid van vereniging.\n• Art. 10: privacy.\n\n**Voorbeelden NL-cases**:\n\n**1. Stikstofcrisis 2019** + boeren-protesten:\n• PAS-uitspraak Raad van State: Nederlands stikstofbeleid voldoet niet aan EU-natuurregels.\n• Massa-boerenprotest 2019-22.\n• Spanning tussen recht op eigendom + werk vs natuurbescherming.\n\n**2. Toeslagenaffaire** (2020+):\n• ~26 000 ouders ten onrechte beschuldigd van fraude met kinderopvangtoeslag.\n• Gezinnen gebroken, kinderen uit huis geplaatst.\n• Discriminatie (etnisch profileren, dubbele nationaliteit-bias).\n• Kabinet-Rutte III viel jan 2021. Officieel excuus + compensatie loopt nog.\n• Schendt onder andere art 1 grondwet + EVRM (eerlijk proces, privacy).\n\n**3. Klimaatzaak Urgenda** (2015-2019):\n• Stichting Urgenda klaagde NL-staat aan voor te zwak klimaatbeleid.\n• Rechter (Hoge Raad 2019): staat MOET CO₂-uitstoot uiterlijk eind 2020 met 25% verminderen.\n• Eerste keer wereldwijd dat rechter staat dwong tot klimaatactie. Inspiratie elders.\n\n**4. Zwarte Piet-debat**:\n• Anti-zwartepiet-protesten sinds 2013.\n• Klacht art 1 grondwet (discriminatie).\n• Geleidelijke verandering: meeste regio's nu 'roetveeg-Piet'.\n• Politiek explosief onderwerp.\n\n**5. Avondklok 2021** (COVID):\n• Rechter Den Haag oordeelde aanvankelijk: ongeoorloofd zonder noodtoestand.\n• Hoger beroep: wel geoorloofd.\n• Discussie privacy + bewegingsvrijheid vs publieke gezondheid.\n\n**6. Surveillance + AVG**:\n• Etnisch profileren: rechter verbood de marechaussee in 2023 om etniciteit te gebruiken bij grenscontroles.\n• AVG (Europese privacywet 2018) een van de strengste privacywetten ter wereld.\n\n**Toezichthouders NL**:\n• **College voor de Rechten van de Mens** (CRM): onafhankelijk instituut, kan klachten beoordelen.\n• **Nationale Ombudsman**: behartigt klachten burgers tegen overheid.\n• **Kinderombudsman**: specifiek kinderen.\n• **Autoriteit Persoonsgegevens** (AP): privacy + AVG-handhaver.\n\n**Persoonlijke handvatten**:\n• **Stem**: gemeenteraad, provincie, Tweede Kamer, EU-parlement. Veel impact!\n• **Word lid** van Amnesty, Human Rights Watch, partij, etc.\n• **Schrijf** aan ministers, ambassades, krantenredacties.\n• **Demonstreer** vreedzaam.\n• **Steun financieel** kleine ngo's (vaak meer impact dan grote).\n• **Lees + verspreid betrouwbare info** — niet alleen sociale-media-bubble.\n• **Koop ethisch** (Fair Trade, geen producten uit problematische ketens).\n• **Verken eigen vooroordelen** — discriminatie zit ook in ons.\n• **Onderwijs** kinderen + jongeren over rechten.\n\n**Mensenrechten = niet gegeven, vechten voor**:\n• 1948 UDHR was reactie op WO2.\n• Eerder geen automatische rechten (vrouwenkiesrecht NL pas 1919).\n• Wereldwijd is nog steeds strijd nodig.\n• 'It always seems impossible until it's done' — Nelson Mandela.\n\n**Toekomst-uitdagingen**:\n• AI + privacy + discriminerende algoritmes.\n• Klimaat als mensenrecht?\n• Surveillance-state vs vrijheid.\n• Sociale media + haatzaaien + desinformatie.\n• Migratie + grenzen-ethiek.\n\n**Optimistisch eindigen**:\n• Wereldwijd minder armoede dan ooit.\n• Vrouwenrechten verbeterd in veel landen.\n• Genocide minder dan WO2-tijd.\n• Onderwijs + gezondheid breder beschikbaar.\n• Internet maakt onderdrukking moeilijker te verbergen.\n• Maar veel werk over!",
    checks: [
      {
        q: "**Art. 1 Nederlandse Grondwet** verbiedt:",
        options: [
          "Discriminatie op welke grond dan ook",
          "Grote verschillen tussen arm en rijk",
          "Het beledigen van de Koning en de regering",
          "Haatzaaien en bedreigen via internet"
        ],
        answer: 0,
        wrongHints: [null, "Artikel 1 eist gelijke behandeling, niet gelijke inkomens. Wat verbiedt het dan?", "Dat regelt het Wetboek van Strafrecht, niet artikel 1.", "Dat regelt het strafrecht. Waar gaat artikel 1 over?"],
        uitlegPad: {
          stappen: [
            { titel: "Brede tekst", tekst: "Letterlijk: '...of op welke grond dan ook'. Dus naast genoemde categorieën (geslacht, ras, religie, etc.) ook open voor toekomstige interpretatie. Beschermt onder andere ook LGBTQ+ (formeel pas 2023 expliciet toegevoegd via grondwetwijziging: 'seksuele gerichtheid + handicap')." },
          ],
          niveaus: { basis: "Geen discriminatie.", simpeler: "Verbod discriminatie.", nogSimpeler: "Art 1" },
        },
      },
      {
        q: "**Toeslagenaffaire** is voorbeeld van:",
        options: [
          "Discriminatie en onterechte fraudebeschuldigingen",
          "Grootschalige fraude door ouders met toeslagen",
          "Een computerstoring bij de Belastingdienst",
          "Te hoge toeslagen door een rekenfout"
        ],
        answer: 0,
        wrongHints: [null, "Hadden de meeste ouders echt gefraudeerd?", "Er speelde een algoritme mee, maar was het een storing of een bewuste werkwijze?", "Ging het om te veel uitbetalen, of om wat de Belastingdienst ouders aandeed?"],
        uitlegPad: {
          stappen: [
            { titel: "26 000 families schade", tekst: "Belastingdienst werkte met algoritme dat 'risico' voorspelde — bias tegen mensen met dubbele nationaliteit/migratie-achtergrond. Bij mensen werd ten onrechte toeslag teruggevorderd (soms €30k+), met schulden en kinderen uit huis als gevolg. Kabinet viel jan 2021. Het compensatieproces loopt nog steeds. Schendt Art 1 (discriminatie) + EVRM (eerlijk proces). Diepe vertrouwens-crisis." },
          ],
          niveaus: { basis: "Discriminatie+fraude-beschuldiging.", simpeler: "Onschuldigen vervolgd.", nogSimpeler: "Toeslag" },
        },
      },
      {
        q: "**Urgenda-zaak** (2019):",
        options: [
          "Rechter dwong de staat tot meer CO₂-reductie",
          "Rechter wees de eis van Urgenda af",
          "Rechter verbood nieuwe kolencentrales",
          "Shell moest van de rechter minder uitstoten"
        ],
        answer: 0,
        wrongHints: [null, "Waarom wordt deze zaak dan wereldwijd als voorbeeld gezien?", "Ging de uitspraak over één soort centrale, of over de totale uitstoot van Nederland?", "Dat was een andere zaak (Milieudefensie tegen Shell). Wie was hier de gedaagde?"],
        uitlegPad: {
          stappen: [
            { titel: "Mensenrechten + klimaat", tekst: "Urgenda Foundation klaagde staat aan: klimaatbeleid te zwak schendt zorgplicht onder EVRM (recht op leven + familie-leven, gezondheid). Rechter gaf Urgenda gelijk → NL MOET 25% CO₂-reductie 2020. Eerste wereldwijde precedent klimaat-rechtszaak tegen staat. Inspiratie voor Duitsland, Frankrijk, Pakistan, etc." },
          ],
          niveaus: { basis: "25% CO₂-reductie bevolen.", simpeler: "Klimaat-uitspraak NL.", nogSimpeler: "Urgenda" },
        },
      },
      {
        q: "**College voor de Rechten van de Mens** (NL):",
        options: [
          "Instituut dat discriminatieklachten beoordeelt",
          "Rechtbank die discriminatie bestraft",
          "Ombudsman voor klachten over de overheid",
          "Toezichthouder op privacy en de AVG"
        ],
        answer: 0,
        wrongHints: [null, "Het College legt geen straffen op. Zijn de uitspraken bindend?", "Dat doet de Nationale Ombudsman.", "Dat doet de Autoriteit Persoonsgegevens."],
        uitlegPad: {
          stappen: [{ titel: "Sinds 2012", tekst: "Onafhankelijk van regering. Behandelt klachten (kosteloos) over discriminatie + adviseert. Uitspraken niet juridisch bindend, maar morele autoriteit. Volgt VN-mensenrechten-systeem. Plus rapporteert jaarlijks over mensenrechten-situatie NL." }],
          niveaus: { basis: "Discriminatie-klachten.", simpeler: "Rechten-instituut.", nogSimpeler: "CRM" },
        },
      },
      {
        q: "Wat is **effectiefste persoonlijke actie** voor mensenrechten?",
        options: [
          "Combinatie: stemmen + ngo-lid + bewust kopen + onderwijs",
          "Combinatie: petities tekenen + posts delen + liken",
          "Vooral geld doneren aan één grote ngo",
          "Vooral demonstreren bij ambassades"
        ],
        answer: 0,
        wrongHints: [null, "Online steun helpt een beetje, maar blijf je zo niet in je eigen bubbel? Wat heeft meer invloed?", "Doneren helpt, maar de lesstof noemt meer manieren. Welke?", "Demonstreren kan, maar is één middel genoeg?"],
        uitlegPad: {
          stappen: [
            { titel: "Veel kleine acties tellen op", tekst: "Geen één 'wonder-actie' — maar veel kleine acties opgeteld maken verschil. Wereld is veranderd door massa-bewegingen: vrouwenkiesrecht, burgerrechten VS, anti-apartheid Zuid-Afrika, gay marriage. Begint vaak met paar mensen die niet stoppen." },
          ],
          niveaus: { basis: "Combineren.", simpeler: "Veel kleine acties.", nogSimpeler: "Combo" },
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
