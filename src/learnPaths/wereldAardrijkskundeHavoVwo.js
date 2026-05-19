// Leerpad: Wereld — globalisering + ontwikkeling — HAVO/VWO Aardrijkskunde
// Eindexamen-CSE-thema: ongelijkheid, China-opkomst, sub-Sahara, EU.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  noord: "#42a5f5",
  zuid: "#ef6c00",
  china: "#ef5350",
  hl: "#ffd54f",
};

const stepEmojis = ["🌍", "💸", "🌐", "🇨🇳", "🏆"];

const chapters = [
  { letter: "A", title: "Globalisering", emoji: "🌍", from: 0, to: 0 },
  { letter: "B", title: "Mondiale ongelijkheid", emoji: "💸", from: 1, to: 1 },
  { letter: "C", title: "Sub-Sahara + ontwikkeling", emoji: "🌐", from: 2, to: 2 },
  { letter: "D", title: "China + opkomende reuzen", emoji: "🇨🇳", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Globalisering ─────────────────────────────────────
  {
    title: "Globalisering — verbonden wereld",
    explanation:
      "**Globalisering** = toenemende **verwevenheid** tussen landen + regio's wereldwijd via handel, kapitaal, informatie, mensen, ideeën.\n\nNiet nieuw — al Zijderoute 2000+ jaar geleden, ontdekkingsreizen 1500s — maar **versneld** sinds 1990 door:\n• Containerisatie (sinds jaren '60-70).\n• Internet (sinds 1990s).\n• WTO 1995 + China-toetreding 2001.\n• Telecommunicatie + smartphone.\n• Goedkope vliegreis.\n\n**Vier hoofd-dimensies**:\n\n**1. Economisch**:\n• Wereldhandel groeit sneller dan BBP sinds 1950.\n• Productieketens wereldwijd verspreid (iPhone: ontwerp VS, chips TW/KR, montage CN, verkoop wereldwijd).\n• Multinationals: Apple, Shell, Toyota, Samsung, IKEA.\n• Financiële markten 24/7 verbonden.\n• **Containerschepen** revolutie: kostprijs transport gedaald 90% sinds 1956.\n\n**2. Cultureel**:\n• Hollywood, K-pop, Netflix wereldwijd.\n• Engels als lingua franca.\n• Amerikanisering vs lokale culturen.\n• **Glokalisering**: globaal product met lokale aanpassing (McDonald's serveert McKroket NL, Maharaja Mac in India).\n• Sociale media — wereldwijde trends.\n\n**3. Politiek**:\n• Internationale organisaties: VN, WTO, IMF, World Bank, EU.\n• Klimaatverdragen (Parijs 2015).\n• Mensenrechten-regimes.\n• Globale ngo's: Greenpeace, Amnesty, MSF.\n\n**4. Technologisch**:\n• Internet (4-5 mld gebruikers wereldwijd).\n• Mobiele telefonie (>5 mld).\n• Big tech: Google, Meta, Apple, Microsoft, Tencent, Alibaba.\n• AI sinds 2020s versterkt verder.\n\n**Voordelen globalisering**:\n• Goedkopere producten voor consumenten.\n• Specialisatie + comparatieve voordelen.\n• Honderden miljoenen mensen uit armoede (vooral China + India sinds 1990).\n• Kennis-verspreiding (medisch, technologie).\n• Cultureel contact.\n\n**Nadelen / problemen**:\n• **Ongelijkheid**: winnaars (kennis-werkers, kapitaalbezitters) + verliezers (laaggeschoolde industrieën in Westen).\n• **Bedrijven verplaatsen** naar lage-loon-landen (deindustrialisatie Westen).\n• **CO₂-emissies** door transport + productie.\n• **Cultureel verlies** lokale tradities.\n• **Race to the bottom** belastingen + milieu-normen.\n• **Kwetsbaarheid keten**: COVID 2020-21 + Suezkanaal-blokkade 2021 toonden afhankelijkheid.\n\n**Anti-globalisering**:\n• Beweging vanaf ~1999 (Seattle WTO-protesten).\n• **Politiek-populisme**: Trump, Brexit, Le Pen — terug naar nationale belangen.\n• **Trade wars**: VS-China sinds 2018 (tarieven, chip-restricties).\n• **Re-shoring**: bedrijven brengen productie terug naar westen (chips Intel-Magdeburg, TSMC-Arizona).\n• **De-coupling**: VS + China economisch ontkoppelen.\n\n**Globalisering-indicatoren**:\n• **KOF-index** (Zwitserse): Globalisering-score per land.\n• NL behoort altijd top-10 (kleine open economie, Rotterdam-haven, EU-lid).\n• China-score gestegen enorm sinds 1990.\n\n**Wereldhandelsstromen**:\n• 60% goederenhandel intra-regionaal (binnen EU, binnen NAFTA/USMCA, binnen Aziatische ketens).\n• 40% inter-regionaal.\n• Rotterdam-haven: grootste van EU, top-10 wereld.\n• Shanghai-haven: grootste wereld.\n\n**Migratie als globalisering-onderdeel**:\n• ~280 mln migranten wereldwijd (3,6% wereldbevolking).\n• Push-factoren: armoede, oorlog, klimaat, vervolging.\n• Pull-factoren: betere kansen, gezinshereniging, onderwijs.\n• Brain drain (verlies hoogopgeleiden uit ontwikkelingslanden) vs remittances (geld terug naar familie).\n• NL: ~14% bevolking 1e/2e generatie migrant.",
    checks: [
      {
        q: "**WTO** = ?",
        options: ["World Trade Organization (handelsregels wereld)","Western Travel Office","World Tourism Organization","Wereld-Tech-Officie"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Bestaat wel maar niet bedoeld.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "1995 Genève", tekst: "**WTO** = World Trade Organization, opgericht 1995 (opvolger GATT). Genève. Doel: wereldhandel reguleren via regels + geschillen-oplossing. 164 lidstaten. **China-toetreding 2001** = mega-stap voor globalisering. Sinds 2018 onder druk door VS-China-tarieven." }],
          niveaus: { basis: "World Trade Org. A.", simpeler: "WTO = handel = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke gebeurtenis **versnelde globalisering** vooral?",
        options: ["China-WTO-toetreding 2001","Steenkooluitvinding","WW2","Brexit"],
        answer: 0,
        wrongHints: [null, "Veel eerder.", "Wel impact maar andere.", "Tegenovergesteld — anti-globalisering."],
        uitlegPad: {
          stappen: [{ titel: "1,3 mld nieuwe arbeiders", tekst: "**China-WTO-toetreding 11 dec 2001**: bracht 1,3 mld Chinezen in wereldhandelssysteem. Massa-productie tegen lage prijs → goedkope producten in westen, miljoenen Chinezen uit armoede, deindustrialisatie westen. Grootste wereldhandel-event sinds containerisatie 1960s." }],
          niveaus: { basis: "China 2001. A.", simpeler: "China-WTO 2001 = A.", nogSimpeler: "2001 = A." },
        },
      },
      {
        q: "Wat is **glokalisering**?",
        options: ["Globaal product met lokale aanpassing","Alleen globaal","Alleen lokaal","Geen woord"],
        answer: 0,
        wrongHints: [null, "Niet — combinatie.", "Niet — combinatie.", "Wel woord."],
        uitlegPad: {
          stappen: [{ titel: "Global + local", tekst: "**Glokalisering** = globalisatie met lokale aanpassing. **Voorbeelden**:\n• McDonald's: Big Mac wereldwijd, maar McKroket NL, Maharaja Mac India (geen rund vanwege hindoeïsme), Teriyaki Burger Japan.\n• Netflix: globale platform, lokale producties (NL-series, K-drama).\n• Wereld-merken passen verpakking, smaak, marketing aan." }],
          niveaus: { basis: "Globaal + lokaal. A.", simpeler: "Glokal = G+L = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat zorgt voor **transport-revolutie** in globalisering?",
        options: ["Containerschepen (sinds 1956)","Trein","Helikopters","Boten in oude tijd"],
        answer: 0,
        wrongHints: [null, "Wel rol — eerder.", "Niet voor grote goederen.", "Lange tijd duur."],
        uitlegPad: {
          stappen: [{ titel: "Standaard-container 20ft/40ft", tekst: "**Containerisatie** (Malcom McLean, 1956): standaard-container 20 voet (TEU) of 40 voet (FEU) → snelle overslag schip-trein-truck zonder herverpakken. Daalde transport-kostprijs **90%**. Maakte wereldhandel mogelijk in massa. Rotterdam + Shanghai super-havens." }],
          niveaus: { basis: "Container. A.", simpeler: "1956 container = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk **antiglobalisering**-fenomeen?",
        options: ["Re-shoring (bedrijven terug naar westen)","Containerschepen","Internet","Vliegreis"],
        answer: 0,
        wrongHints: [null, "Globaliseringsfactor.", "Globaliseringsfactor.", "Globaliseringsfactor."],
        uitlegPad: {
          stappen: [{ titel: "Tegenbeweging", tekst: "**Re-shoring** = productie terugbrengen naar thuisland. Reden: COVID-19 + Suezkanaal-blokkade 2021 + VS-China-spanningen + chip-tekorten. Voorbeelden: **Intel** fabriek Magdeburg DE (€30 mld), **TSMC** Arizona VS. Trend van deglobalisering / 'friend-shoring' (alleen bij vrienden). Voorbeeld trade war: Trump 2018-tarieven + Biden's CHIPS Act 2022." }],
          niveaus: { basis: "Re-shoring. A.", simpeler: "Re-shoring = anti-glob = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Mondiale ongelijkheid ─────────────────────────────
  {
    title: "Mondiale ongelijkheid + ontwikkelingsmeting",
    explanation:
      "**Wereldongelijkheid** is enorm. Top 1% bezit ~50% wereldvermogen.\n\n**Categorieën landen** (klassieke termen, gedeeltelijk verouderd):\n\n**Westen / Globale Noord** (~1 mld mensen):\n• West-Europa, VS, Canada, Australië, NZ, Japan, Z-Korea.\n• Hoge BBP per capita (€30k+).\n• Vergrijzing, kennis-economie.\n\n**Globale Zuid** / **ontwikkelingslanden** (~6 mld):\n• Maar enorm divers binnen deze groep.\n• **BRICS** (Brazilië, Rusland, India, China, Zuid-Afrika): opkomende reuzen.\n• **MIST/NEXT-11** (Mexico, Indonesië, Turkije, etc.): groeilanden.\n• **Minst Ontwikkelde Landen** (LDC's, 46 stuks volgens VN): vooral sub-Sahara + enkele Aziatische.\n\n**Recente term**: 'Globale Noord/Zuid' ipv 1e/2e/3e wereld.\n\n**Meetinstrumenten ontwikkeling**:\n\n**BBP per capita**:\n• Economisch.\n• Bv: NL ~€56.000, Burundi ~€250.\n• Werelddata: Worldbank.org.\n• Beperking: alleen economie, niet welzijn.\n\n**HDI** (Human Development Index, VN):\n• Combineert: **BBP per cap + levensverwachting + onderwijs**.\n• Score 0-1.\n• Top 2024: Zwitserland, Noorwegen, IJsland.\n• NL ~10e plek.\n• Onderaan: Tsjaad, Niger, Zuid-Sudan.\n\n**Gini-coëfficiënt**:\n• Meet **interne ongelijkheid** in land (0 = perfect gelijk, 1 = max ongelijk).\n• NL Gini ~0,28 (relatief gelijk).\n• VS Gini ~0,40 (ongelijker).\n• Brazilië Gini ~0,53 (zeer ongelijk).\n• ZA Gini ~0,63 (hoogste ter wereld).\n\n**MPI** (Multidimensional Poverty Index):\n• Beyond inkomen: gezondheid, onderwijs, levensstandaard.\n• Vooral voor ontwikkelingslanden.\n\n**Voortgang** 1990-2020:\n• Wereldarmoede (<$2,15/dag): 1990 ~1,9 mld → 2020 ~700 mln.\n• Vooral door China-groei + India.\n• Kindersterfte halveerd.\n• Onderwijs-toegang gestegen.\n• Maar in absolute aantallen: nog steeds 700 mln+ extreem arm.\n\n**Ongelijkheid binnen landen** is wel gestegen:\n• Sinds 1980 trend dat top 1% sneller groeit dan gemiddeld.\n• **Thomas Piketty**: *Le Capital au XXIe siècle* (2013) — vermogen groeit sneller dan inkomen → ongelijkheid stijgt.\n\n**Verklaringen ongelijkheid tussen landen**:\n\n**Geografisch (Jared Diamond *Guns Germs Steel* 1997)**:\n• Klimaat, ziekten, ligging continenten.\n• Eurazië vs Amerika vs Afrika startposities.\n• Beperking: deterministisch.\n\n**Institutioneel (Acemoglu + Robinson *Why Nations Fail* 2012)**:\n• Sterke instellingen (rule of law, eigendomsrechten, democratie) drijven welvaart.\n• Extractieve instellingen (elite plundert) verarmen.\n• Voorbeeld: Noord-Korea vs Zuid-Korea.\n• Nobelprijs Economie 2024 voor Acemoglu + Johnson + Robinson.\n\n**Koloniaal verleden**:\n• Europa exploiteerde Afrika, Azië, Amerika eeuwen.\n• Grenzen getrokken zonder rekening met volkeren (Afrika 1884-85 Berlijn).\n• Resources weggehaald, plantages ipv industrie ontwikkeld.\n• Onafhankelijkheid: jaren '50-'60 (Afrika), 1947 India, 1949 Indonesië.\n• **Postkoloniale schuld**: discussie over compensatie / verontschuldiging.\n\n**Globalisering-effect**:\n• Convergentie globaal: arme landen groeien sneller (China, India).\n• Divergentie nationaal: ongelijkheid binnen veel landen stijgt.\n\n**Sustainable Development Goals (SDG's)**:\n• 17 doelen voor 2030, VN 2015.\n• Geen armoede, geen honger, onderwijs, gender-gelijkheid, klimaat, etc.\n• Voortgang traag, soms achteruit door COVID + oorlog.\n\n**Hulp + handel**:\n• **Ontwikkelingshulp**: VN-norm 0,7% BBP. NL haalt het meestal (recent verlaagd).\n• **Trade not aid**: economische groei via handel duurzamer dan giften.\n• **Eerlijke handel** (Fair Trade): hogere prijs voor producenten ontwikkelingslanden.\n• Schuldenkwijtschelding (HIPC-initiatief).",
    checks: [
      {
        q: "Welke index combineert **BBP + onderwijs + levensverwachting**?",
        options: ["HDI (Human Development Index)","Gini-coëfficiënt","BBP per cap","Big Mac Index"],
        answer: 0,
        wrongHints: [null, "Niet — interne ongelijkheid.", "Alleen economie.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "VN-indicator", tekst: "**HDI** (Human Development Index, VN) combineert 3 dimensies in 1 score 0-1:\n• Inkomen (BBP per cap).\n• Onderwijs (jaren onderwijs + verwacht).\n• Gezondheid (levensverwachting).\n\nTop 2024: Zwitserland, Noorwegen, IJsland. NL top-10. Onderaan: Tsjaad, Niger." }],
          niveaus: { basis: "HDI. A.", simpeler: "HDI = 3-in-1 = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**BRICS**-landen zijn:",
        options: ["Brazilië, Rusland, India, China, Zuid-Afrika","Vijf Aziatische landen","Vijf rijke landen","Brazilië, Republiek Congo, Israël, China, Spanje"],
        answer: 0,
        wrongHints: [null, "Niet — divers.", "Niet — opkomend.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "5 opkomende reuzen", tekst: "**BRICS** = Brazilië, Rusland, India, China, Zuid-Afrika. Opkomende grote economieën. Recent uitbreiding (2024): Iran, Egypte, Verenigde Arabische Emiraten, Ethiopië, Saudi-Arabië (genodigd) → BRICS+. Doel: tegenwicht G7 + dollar." }],
          niveaus: { basis: "B/R/I/C/ZA. A.", simpeler: "BRICS = 5 reuzen = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Gini = 0** betekent:",
        options: ["Perfecte gelijkheid","Maximale ongelijkheid","Geen meting","Slechte economie"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel meting.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "0-1 schaal", tekst: "**Gini-coëfficiënt**: 0 = volledig gelijke verdeling (iedereen evenveel), 1 = volledige ongelijkheid (1 persoon heeft alles). NL ~0,28 (gelijk). VS ~0,40. ZA ~0,63 (zeer ongelijk). Sociaal-democratische landen lager." }],
          niveaus: { basis: "Gelijk. A.", simpeler: "Gini 0 = gelijk = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke verklaring komt van **Acemoglu + Robinson**?",
        options: ["Instellingen bepalen welvaart","Klimaat beslist","Genen","Toeval"],
        answer: 0,
        wrongHints: [null, "Niet — Diamond.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Why Nations Fail 2012", tekst: "**Daron Acemoglu + James Robinson**: *Why Nations Fail* (2012). **Instellingen** (rule of law, eigendomsrechten, democratie, gelijke kansen) verklaren waarom landen welvarend worden of falen. **Inclusief vs extractief**: inclusieve instellingen verspreiden voordelen, extractieve concentreren ze. **Nobelprijs Economie 2024**." }],
          theorie: "Voorbeeld: Noord-Korea (extractief, arm) vs Zuid-Korea (inclusief, welvarend) — dezelfde bevolking + cultuur, verschillende instellingen.",
          niveaus: { basis: "Instellingen. A.", simpeler: "A+R = instellingen = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wereld-armoede (<$2,15/dag) is sinds 1990:",
        options: ["Sterk afgenomen (1,9 mld → ~700 mln)","Verdubbeld","Stabiel","Verviervoudigd"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — sterk gedaald.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "China-effect vooral", tekst: "**Wereld-extreme armoede** (Wereldbank-definitie < $2,15/dag): 1990 ~1,9 mld → 2020 ~700 mln. **Sterke daling**. Vooral door China (sinds 1980 800+ mln uit armoede) + India + andere groeilanden. Maar absolute aantal nog hoog + Sub-Sahara stagneert. **SDG-doel 'nul armoede 2030'** lijkt onhaalbaar." }],
          niveaus: { basis: "Afgenomen. A.", simpeler: "Armoede ↓ = A.", nogSimpeler: "↓ = A." },
        },
      },
    ],
  },

  // ─── C. Sub-Sahara + ontwikkeling ─────────────────────────
  {
    title: "Sub-Sahara Afrika + ontwikkelingsuitdagingen",
    explanation:
      "**Sub-Sahara Afrika** (SSA) = Afrika ten zuiden van de Sahara. ~1,2 mld inwoners. Vaak focus in eindexamen-aardrijkskunde HAVO.\n\n**Diversiteit** (let op generaliseren!):\n• 49 landen.\n• Rijkere: Mauritius, Zuid-Afrika, Botswana, Gabon.\n• Middel: Kenia, Ghana, Senegal, Ethiopië.\n• Armere: DR Congo, Tsjaad, Centraal-Afrikaanse Republiek, Niger, Burundi.\n\n**Demografie**:\n• Snel groeiende bevolking: ~2,5%/jaar (wereld 1%).\n• Jongste continent: mediaan-leeftijd 19 jaar (NL 42).\n• **Bevolkingsexplosie** verwacht: 2024 ~1,2 mld → 2050 ~2,5 mld → 2100 ~3,9 mld.\n• Reden: hoge geboortecijfer (6+ kinderen/vrouw in Niger) + dalende kindersterfte.\n• Demografische transitie nog niet voltooid.\n\n**Economische uitdagingen**:\n\n**Grondstoffen-afhankelijkheid**:\n• 'Resource curse': landen rijk aan grondstoffen vaak armer (paradox).\n• Olie: Nigeria, Angola, Algerije.\n• Diamonds: Botswana, DRC, Sierra Leone.\n• Goud: ZA, Ghana, Mali.\n• Kobalt (voor batterijen): DRC (~70% wereldproductie).\n• Probleem: weinig waarde-toevoeging — ruwe export, niet verwerking.\n\n**Landbouw**:\n• 60% Sub-Sahara werkt in landbouw.\n• Vooral kleine-schaal zelfvoorzienend.\n• Productiviteit laag (geen mechanisatie, weinig kunstmest).\n• Klimaat-kwetsbaar: droogtes Sahel, overstromingen.\n\n**Industrialisatie**:\n• Beperkt — China haalt grondstoffen, levert eindproducten.\n• Sommige textiel + lichte industrie (Ethiopië).\n• Tech-hubs: Lagos, Nairobi, Kaapstad.\n\n**Ontwikkelingsfactoren**:\n\n**Pro-groei**:\n• Mobiele telefonie boomt (M-Pesa Kenia mobile banking).\n• Onderwijs verbetert.\n• Sommige democratische transities (Senegal, Ghana, ZA).\n• Diaspora-remittances (geld terug naar familie).\n\n**Tegen groei**:\n• Politieke instabiliteit (DRC, Sudan-burgeroorlog 2023+, militaire coups Sahel).\n• Corruptie (Transparency International ranglijsten).\n• Conflicten + vluchtelingen.\n• Klimaatverandering hard treft.\n• Ziekten (HIV, ebola, malaria).\n• Brain drain.\n• Schulden aan China (Belt + Road).\n\n**Sahel-regio**: zone tussen Sahara + savanne.\n• Senegal, Mali, Niger, Burkina Faso, Tsjaad, Sudan.\n• **Droogte + woestijn-uitbreiding (desertificatie)**.\n• Conflicten: jihadistische bewegingen (Boko Haram, Al-Shabaab, ISIS-Sahel).\n• Militaire coups recent: Mali 2020 + 2021, Burkina Faso 2022, Niger 2023.\n• Frankrijk-troepen vertrokken — Russische Wagner-aanwezigheid.\n• Klimaatmigratie: mensen trekken zuid + naar steden + Europa.\n\n**Klimaat-impact** Afrika:\n• Continent bijdraagt ~3% aan CO₂-emissies.\n• Maar **lijdt onder klimaatverandering**: droogte, overstroming, ziekte-verspreiding.\n• 'Loss + damage'-fonds (COP27 2022): rijke landen vergoeden — uitvoering moeizaam.\n\n**Ontwikkelingshulp**:\n• NL geeft hulp aan Afrika (vooral via EU + VN).\n• Recent: focus op handel + lokale ondernemerschap ipv giften.\n• Kritiek: 'aid dependency' kan groei verhinderen — eigen instituties nodig.\n\n**Chinese aanwezigheid in Afrika**:\n• **Belt + Road Initiative (BRI)** sinds 2013: infrastructuur (havens, spoorlijnen, wegen).\n• China is grootste handelspartner Afrika sinds 2009.\n• Voordelen: snelle bouw, geen 'rule of law'-eisen.\n• Nadelen: schulden-val ('Hambantota-port' Sri Lanka als waarschuwing), arbeids-omstandigheden.\n• Geopolitiek: Afrika als 'arena' tussen China vs westen.\n\n**Migratie naar Europa**:\n• Voornamelijk door Middellandse Zee (Italië, Spanje).\n• Doodlopende routes: Libië-detentie, woestijn-tocht.\n• EU-deals: betalen aan Libië/Tunesië/Egypte om migranten tegen te houden (controvers).\n• Bron-landen: ZA, Nigeria, Eritrea, Somalië, Soedan, West-Afrika.\n• Reden: economische kansen + conflicten + klimaat.\n\n**Successtory's**:\n• **Rwanda** sinds 1994-genocide: snelle wederopbouw, technologie-hub, Kigali als 'Singapore Afrika'.\n• **Botswana**: stabiele democratie + diamant-management → middeninkomen-land.\n• **Ghana**: relatief democratisch + groei.\n• **Mauritius**: hoogste HDI Sub-Sahara.\n• **Ethiopië-groei** 2000s-2010s (vóór Tigray-oorlog 2020-22).\n\n**Sustainable Development Goals + Afrika**:\n• SSA achterst gebleven op meeste SDG's.\n• Doel 'nul armoede 2030' verre van bereikt.\n• Maar vooruitgang: jeugd-onderwijs, internet-toegang, mobiele financiën.",
    checks: [
      {
        q: "**Demografische uitdaging Sub-Sahara**:",
        options: ["Snelle bevolkingsgroei (2,5%/jaar)","Vergrijzing","Bevolkingsdaling","Stabiel"],
        answer: 0,
        wrongHints: [null, "Niet — westers probleem.", "Tegenovergesteld.", "Niet — wel verandering."],
        uitlegPad: {
          stappen: [{ titel: "1,2 → 2,5 → 3,9 mld", tekst: "**Sub-Sahara**: snelste groeiende bevolking wereld. ~2,5%/jaar (wereld 1%). Geboortecijfer hoog (Niger 6+), kindersterfte dalend. Projectie: 2024 1,2 mld → 2050 2,5 mld → 2100 3,9 mld. Helft wereld-bevolking-groei vanuit Afrika." }],
          niveaus: { basis: "Snel groei. A.", simpeler: "SSA = bevolking-explosie = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Resource curse** (grondstoffen-paradox):",
        options: ["Landen rijk aan grondstoffen vaak relatief arm","Grondstoffen altijd goed","Geen verband","Allemaal export-rijk"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel verband.", "Niet allemaal."],
        uitlegPad: {
          stappen: [{ titel: "Paradox", tekst: "**Resource curse / paradox of plenty**: landen met veel natuurlijke grondstoffen blijken vaak slechter te presteren dan landen zonder. Reden: corruptie (elite pakt grondstofgeld), gebrek aan diversificatie, conflicten over hulpbronnen, 'Dutch disease' (sterke munt door olie-export beschadigt andere industrie). Voorbeeld: Nigeria (olie) vs Botswana (diamant, beter management)." }],
          niveaus: { basis: "Grondstoffen-paradox. A.", simpeler: "Resource curse = paradox = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **Sahel-regio**?",
        options: ["Zone tussen Sahara + savanne (Mali, Niger, Tsjaad)","Sahara zelf","Zuid-Afrika","Hoorn van Afrika"],
        answer: 0,
        wrongHints: [null, "Niet — apart.", "Niet relevant.", "Hoorn = oost (Somalia, Ethiopia)."],
        uitlegPad: {
          stappen: [{ titel: "Overgangszone", tekst: "**Sahel** = Arabisch voor 'kust', overgangszone tussen Sahara-woestijn + tropische savanne. Loopt door Senegal, Mauritanië, Mali, Burkina Faso, Niger, Tsjaad, Soedan, Eritrea. **Klimaatcrisis-zone**: droogte + desertificatie. **Politieke crisis**: jihadisme + militaire coups (Mali 2020-21, Burkina 2022, Niger 2023)." }],
          niveaus: { basis: "Tussen Sahara + savanne. A.", simpeler: "Sahel = overgang = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Belt + Road Initiative (BRI)** is van:",
        options: ["China","VS","EU","Rusland"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "EU heeft 'Global Gateway' als reactie.", "Niet primair."],
        uitlegPad: {
          stappen: [{ titel: "Chinese mega-investering", tekst: "**Belt + Road Initiative (BRI)** = Chinese infrastructuur-programma sinds 2013 (Xi Jinping). $1+ biljoen geïnvesteerd in havens, spoorlijnen, wegen wereldwijd, vooral Azië + Afrika. **China grootste handelspartner Afrika** sinds 2009. Controverse: schulden-val + arbeids-omstandigheden. **EU's reactie**: Global Gateway €300 mld (2021)." }],
          niveaus: { basis: "China. A.", simpeler: "BRI = China = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is **success-story Sub-Sahara** sinds 1994?",
        options: ["Rwanda (post-genocide wederopbouw)","Sudan (oorlog)","DRC (instabiel)","Centraal-Afrika"],
        answer: 0,
        wrongHints: [null, "Conflict-zone.", "Conflict-zone.", "Conflict-zone."],
        uitlegPad: {
          stappen: [{ titel: "Kigali = Singapore Afrika", tekst: "**Rwanda**: na 1994-genocide (~800.000 Tutsi's vermoord in 100 dagen) snelle wederopbouw onder Kagame. Tech-hub Kigali, schoonste stad Afrika, weinig corruptie. Schaduw: autoritair regime + persvrijheid beperkt. Cito-favoriet succes-voorbeeld in 'ontwikkelingslanden'." }],
          theorie: "Andere succes: Botswana (diamant + stabiele democratie), Ghana (democratie), Mauritius (toerisme + diensten).",
          niveaus: { basis: "Rwanda. A.", simpeler: "Rwanda = succes = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. China + opkomende reuzen ──────────────────────────
  {
    title: "China + opkomende reuzen",
    explanation:
      "**China** = grootste economische opkomst sinds WO2. Van arm boerenland naar 2e (mogelijk #1) wereldmacht.\n\n**Geschiedenis modern China**:\n• 1949: Mao Zedong's communisten winnen burgeroorlog → Volksrepubliek China.\n• 1949-76 onder Mao: Grote Sprong Voorwaarts 1958-62 (50 mln+ honger-doden), Culturele Revolutie 1966-76 (chaos).\n• 1978: **Deng Xiaoping** start economische hervorming. 'Socialisme met Chinese karakteristieken'.\n• 1980s: Special Economic Zones (Shenzhen → wereldfabriek).\n• 1989 Tiananmen: bloedige onderdrukking studenten-protest.\n• **2001 WTO-toetreding**: keerpunt.\n• 2008: Olympische Spelen Peking = 'China is back' moment.\n• 2013+: Xi Jinping consolideert macht, autoritairer + assertiever.\n\n**Economie**:\n• BBP 2024: ~$18 biljoen (#2 wereld, #1 koopkracht-pariteit).\n• Groei 1980-2010 ~10% per jaar.\n• Sinds 2020 vertraging naar ~5%.\n• 800+ miljoen mensen uit armoede gehaald sinds 1980.\n• Wereldfabriek: bouwt ~30% wereld-industriële productie.\n• Steden mega-grootte: Shanghai 28 mln, Beijing 22 mln, Shenzhen 17 mln.\n\n**Sterke punten**:\n• Massieve infrastructuur (hogesnelheidstreinen, snelwegen, havens).\n• Tech-leider in 5G, AI, EV's, zon-energie, batterijen.\n• Beheersing zeldzame aardmetalen.\n• Massa-onderwijs + STEM-focus.\n• Hoge spaarquote (50% BBP).\n\n**Zwakke punten**:\n• Demografie: vergrijzing (1-kind-beleid 1979-2015 nawerking), bevolking begon dalen 2022.\n• Vastgoed-crisis sinds 2021 (Evergrande, Country Garden defaults).\n• Schulden hoog (vooral provinciaal).\n• Centralisatie + censuur beperken creativiteit.\n• Trade war + chip-restricties VS.\n• Klimaat: grootste CO₂-uitstoter wereld.\n\n**Politiek systeem**:\n• Eénpartij-staat: CCP (Chinese Communistische Partij), ~90 mln leden.\n• President Xi Jinping sinds 2013 (mandaten-limiet 2018 afgeschaft, kan voor leven).\n• Geen vrije verkiezingen, geen onafhankelijke rechters, geen vrije pers.\n• Massasurveillance: gezichtsherkenning, social credit-systeem.\n• Hong Kong: 'one country two systems' 1997-2047 — sinds 2020 vrijwel ingelijfd.\n• Taiwan: China claimt — toenemende spanningen, mogelijke vlampunt.\n• Xinjiang: Uigoeren onderdrukking, 'heropvoedingskampen'.\n• Tibet: onder Chinese controle sinds 1950.\n\n**Geopolitiek**:\n• **Belt + Road Initiative** sinds 2013.\n• Militair: 2e leger wereld.\n• Marine-uitbreiding, kunstmatige eilanden Zuid-Chinese Zee.\n• Allianties: Rusland (partner), Iran, Noord-Korea.\n• Spanningen: VS, Japan, Z-Korea, Vietnam, Filipijnen, India.\n\n**India** = de andere demografische + economische reus:\n• ~1,44 mld inwoners (overheeft China 2023).\n• Mediaan-leeftijd 28 (China 39).\n• BBP-groei ~6-7%/jaar.\n• IT-hub: Bangalore.\n• Tata, Reliance, Infosys.\n• Maar enorme ongelijkheid + armoede.\n• Premier Narendra Modi (BJP, hindoe-nationalistisch).\n• Democratie maar onder druk.\n\n**Andere BRICS**:\n• **Brazilië**: grondstoffen-rijk, vee-vee + soja. Sociale ongelijkheid. Lula (linkse president sinds 2023).\n• **Rusland**: na Sovjet-Unie veel grondstoffen. Sancties sinds 2022. Demografische crisis. Poetin.\n• **Zuid-Afrika**: rijkste Afrika, maar enorme ongelijkheid (hoogste Gini wereld). Politiek-economisch onstabiel.\n\n**Opkomende reuzen (NEXT-11)**: Indonesië, Turkije, Mexico, Vietnam, Filipijnen, Iran, Pakistan, Egypte, Bangladesh, Nigeria, Korea.\n\n**Zuid-Korea + Japan**:\n• Officieel ontwikkelde landen.\n• Z-Korea: Samsung, Hyundai, K-pop, world-class chips.\n• Japan: 3e/4e BBP wereld, technologie, vergrijzing extreem (28% 65+, populatie krimp).\n• Beide: VS-bondgenoten in regio.\n\n**Geopolitieke spanningen 2024-25**:\n• **VS-China-rivaliteit**: chips, AI, Taiwan, handel.\n• **Rusland-Oekraïne-oorlog** sinds 2022.\n• **Midden-Oosten**: Israël-Gaza-oorlog 2023+, Iran-spanningen, Saudi-Iran detente.\n• **Indo-Pacific**: AUKUS-pact (Australië-UK-VS), Quad (VS-Japan-India-Aus), tegen China.\n\n**Cito-pattern**:\n• Vergelijk landen op ontwikkelings-indicatoren.\n• Analyseer geopolitieke verschuiving (China-opkomst).\n• Klimaat-rol opkomende reuzen.\n• Migratiestromen Noord-Zuid + Zuid-Zuid.",
    checks: [
      {
        q: "Wanneer **China-WTO-toetreding**?",
        options: ["2001","1949","1978","1989"],
        answer: 0,
        wrongHints: [null, "Niet — VR China oprichting.", "Niet — Deng-hervorming start.", "Niet — Tiananmen."],
        uitlegPad: {
          stappen: [{ titel: "Sleutel-event globalisering", tekst: "**11 dec 2001**: China lid WTO. **Sleutel-event** wereldgeschiedenis 21e eeuw — 1,3 mld Chinezen in wereldhandelssysteem. Versnelde productie-verschuiving naar China + uitkomst Westerse 'goedkope spullen'. Mark Carney noemde het 'tweede globalisering'." }],
          niveaus: { basis: "2001. A.", simpeler: "China-WTO = 2001 = A.", nogSimpeler: "2001 = A." },
        },
      },
      {
        q: "Wie startte **Chinese economische hervormingen** 1978?",
        options: ["Deng Xiaoping","Mao Zedong","Xi Jinping","Sun Yat-sen"],
        answer: 0,
        wrongHints: [null, "Mao stierf 1976.", "Niet — later.", "Veel eerder."],
        uitlegPad: {
          stappen: [{ titel: "Reform + Opening 1978", tekst: "**Deng Xiaoping** (1904-1997) startte **gaige kaifang** (hervorming + opening) 1978 na Mao's dood. 'Socialisme met Chinese karakteristieken' — toestaan kapitalisme onder partij-controle. 'Kat-theorie': maakt niet uit of kat zwart of wit is, zolang ze muizen vangt." }],
          niveaus: { basis: "Deng. A.", simpeler: "1978 = Deng = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk land **overhaalde China qua bevolking** in 2023?",
        options: ["India","Indonesië","Pakistan","Nigeria"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet primair.", "Sterk groeiend, niet nog gepakt."],
        uitlegPad: {
          stappen: [{ titel: "1,44 mld 2023", tekst: "**India** werd grootste bevolking 2023 (1,44 mld) door snelle groei + China bevolkingsdaling (1-kind-beleid 1979-2015 nawerking + vergrijzing). India veel **jonger** (mediaan 28 vs China 39). Implicatie: India waarschijnlijk economische opkomst voor jaren." }],
          niveaus: { basis: "India. A.", simpeler: "2023 = India boven China = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is China's **demografische uitdaging**?",
        options: ["Vergrijzing + bevolkingsdaling","Te veel jongeren","Migratie-tekort","Geen probleem"],
        answer: 0,
        wrongHints: [null, "Niet — daling vooral.", "Wel issue maar niet primair.", "Wel groot probleem."],
        uitlegPad: {
          stappen: [{ titel: "1-kind-beleid-nawerking", tekst: "China **1-kind-beleid 1979-2015** voorkwam ~400 mln geboorten. Nu **gevolgen**: vergrijzing (ouder dan VS), beroepsbevolking krimpt, **bevolking daalt sinds 2022**. Verlate 2-kind- en 3-kind-beleid hielpen weinig. 'China wordt oud voor het rijk wordt' — uitdaging." }],
          theorie: "Cito-vraag-pattern: vergelijk China demografisch met India of NL.",
          niveaus: { basis: "Vergrijzing. A.", simpeler: "China = oud + daalt = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Hong Kong**-statuut sinds 1997:",
        options: ["'One country two systems' (geërodeerd na 2020)","Volledig China","Onafhankelijk","Brits"],
        answer: 0,
        wrongHints: [null, "Niet — was — nu vrijwel zo.", "Niet — al lang in China.", "Niet — 1997 overgedragen."],
        uitlegPad: {
          stappen: [{ titel: "1997-2047 belofte", tekst: "**Hong Kong**: tot 1997 Brits, **overgedragen aan China**. Beloofd 'one country two systems' tot 2047 — semi-autonomie + vrijheden. **Sinds 2020 National Security Law**: persvrijheid + protest beperkt, oppositie opgesloten of in ballingschap. 'One system in praktijk'. Andere precedent voor Taiwan — afschrikwekkend." }],
          niveaus: { basis: "One country two systems. A.", simpeler: "HK = 2 systemen erodeert = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Wereld-aardrijkskunde mix",
    explanation:
      "Mix van globalisering + ongelijkheid + Sub-Sahara + China.\n\nVeel succes!",
    checks: [
      {
        q: "Wereldhandel groeit sinds 1950:",
        options: ["Sneller dan wereld-BBP","Trager","Gelijk","Krimpt"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — sneller.", "Niet — wel groeit."],
        uitlegPad: {
          stappen: [{ titel: "Globalisering-effect", tekst: "**Wereldhandel groeit sneller dan BBP** sinds 1950, vooral 1990-2008 (Chinese opkomst + WTO). Tijdelijk afgevlakt door 2008-crisis + Trump-tarieven 2018+. Recent (post-COVID + Russisch-Oekraïens) iets meer re-shoring → mogelijk einde 'hyperglobalisatie'." }],
          niveaus: { basis: "Sneller dan BBP. A.", simpeler: "Handel > BBP-groei = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke regio heeft **hoogste Gini** wereld (~0,63)?",
        options: ["Zuid-Afrika","Nederland","Zweden","Japan"],
        answer: 0,
        wrongHints: [null, "0,28 — laag.", "0,29 — laag.", "0,33 — matig."],
        uitlegPad: {
          stappen: [{ titel: "Apartheid-erfenis", tekst: "**Zuid-Afrika** heeft Gini ~0,63 = **hoogste wereld**. Erfenis apartheid (1948-94): zwarte meerderheid economisch achtergesteld, witte minderheid bezit groot deel land + bedrijven. Ondanks ANC-regering sinds 1994 niet wezenlijk verbeterd." }],
          niveaus: { basis: "ZA. A.", simpeler: "Hoogste Gini = ZA = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Nigeria** is rijk aan grondstoffen maar:",
        options: ["Veel armoede + corruptie ('resource curse')","Heel welvarend","Stabiele democratie","Industrieleider"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet stabiel.", "Niet primair industrie."],
        uitlegPad: {
          stappen: [{ titel: "Olie-paradox", tekst: "**Nigeria** = grootste olie-producent Afrika + grootste Afrikaanse bevolking (~220 mln). **Resource curse**: olie-rijkdom heeft niet welvaart breed verspreid. Corruptie, geweld in Niger-Delta, jihadisme noord (Boko Haram), economische ongelijkheid. Klassiek voorbeeld 'paradox of plenty'." }],
          niveaus: { basis: "Resource curse. A.", simpeler: "Nigeria = olie-paradox = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk land is **grootste handelspartner Afrika** sinds 2009?",
        options: ["China","VS","Frankrijk","NL"],
        answer: 0,
        wrongHints: [null, "Niet meer.", "Was, niet meer.", "Wel groot maar niet grootste."],
        uitlegPad: {
          stappen: [{ titel: "China-Afrika handel", tekst: "**China is grootste handelspartner Afrika sinds 2009**. Via Belt + Road Initiative: havens, spoor, wegen. Chinese bedrijven actief in mijnbouw, olie, infrastructuur. NL/EU/FR/VS gedeeltelijk verdrongen. Geopolitieke spanning: VS + EU starten eigen Afrika-strategieën om China terug te drukken." }],
          niveaus: { basis: "China. A.", simpeler: "Afrika = China-partner = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**SDG's** (Sustainable Development Goals) van VN gaan over:",
        options: ["17 doelen voor 2030 (armoede/klimaat/onderwijs/etc.)","Olympische Spelen","Vredesakkoorden","Belastingen"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet primair.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "VN 2015", tekst: "**SDG's** (Sustainable Development Goals) = VN-doelen 2015-2030. **17 doelen** met 169 targets:\n1. Geen armoede\n2. Geen honger\n3. Goede gezondheid\n4. Onderwijs\n5. Gendergelijkheid\n...\n13. Klimaat\n...\n17. Partnerschap.\n\nVoortgang: gedeeltelijk + COVID/oorlog vertraagden. Veel onhaalbaar tegen 2030." }],
          niveaus: { basis: "17 doelen 2030. A.", simpeler: "SDG = VN-doelen 2030 = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const wereldAardrijkskundeHavoVwo = {
  id: "wereld-globalisering-havo-vwo",
  title: "Wereld — globalisering + ontwikkeling (HAVO/VWO aardrijkskunde)",
  emoji: "🌍",
  level: "havo4-5-vwo",
  subject: "aardrijkskunde",
  referentieNiveau: "havo-vwo-CSE-aardrijkskunde",
  sloThema: "Aardrijkskunde HAVO/VWO — Wereld eindexamen-thema",
  prerequisites: [
    { id: "klimaten-aardrijkskunde", title: "Klimaten", niveau: "klas2" },
    { id: "bevolking-migratie-aardrijkskunde", title: "Bevolking + migratie", niveau: "klas3-4" },
    { id: "europese-unie-po", title: "EU (basis)", niveau: "groep7-8" },
  ],
  intro:
    "Wereld-aardrijkskunde HAVO/VWO CSE. Globalisering (4 dimensies + WTO + container + anti-glob), mondiale ongelijkheid (HDI/Gini + Diamond/Acemoglu + SDG's), Sub-Sahara Afrika (demografie/Sahel/BRI/Rwanda-succes), China + opkomende reuzen (Deng 1978 → WTO 2001 → vergrijzing). NL-context: Rotterdam-haven, EU-positie, migratie. ~15-20 min.",
  triggerKeywords: [
    "globalisering",
    "WTO", "wereldhandel",
    "container",
    "multinational",
    "glokalisering",
    "re-shoring", "deglobalisering",
    "Trump-tarieven", "trade war",
    "ongelijkheid",
    "HDI", "Gini",
    "BBP per capita",
    "BRICS",
    "ontwikkelingsland", "ontwikkelingslanden",
    "Globale Noord", "Globale Zuid",
    "armoede", "Wereldbank",
    "Sub-Sahara Afrika",
    "Sahel", "Mali", "Niger", "Burkina Faso", "Sudan",
    "Nigeria", "olie",
    "DR Congo", "kobalt",
    "Rwanda", "Botswana",
    "resource curse", "paradox of plenty",
    "Belt and Road", "BRI",
    "China",
    "Deng Xiaoping", "Mao",
    "Xi Jinping",
    "WTO 2001",
    "Shenzhen", "Shanghai",
    "Hong Kong", "Taiwan",
    "Tiananmen 1989",
    "Uigoeren", "Xinjiang", "Tibet",
    "India", "Modi",
    "Sustainable Development Goals", "SDG",
    "demografische transitie",
    "klimaatmigratie",
    "Diamond Guns Germs Steel",
    "Acemoglu instellingen",
  ],
  chapters,
  steps,
};

export default wereldAardrijkskundeHavoVwo;
