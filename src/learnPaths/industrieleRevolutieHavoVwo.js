// Leerpad: Industriële Revolutie — HAVO/VWO Geschiedenis
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Tijdvak Verlichting → 20e eeuw.
// Stoom, fabriek, arbeiders, sociale kwestie, Marx, 2e revolutie.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["🌾", "🚂", "🔨", "💡", "🏆"];

const chapters = [
  { letter: "A", title: "Voor 1750: agrarisch", emoji: "🌾", from: 0, to: 0 },
  { letter: "B", title: "1e revolutie (1750-1850)", emoji: "🚂", from: 1, to: 1 },
  { letter: "C", title: "Sociale kwestie", emoji: "🔨", from: 2, to: 2 },
  { letter: "D", title: "2e revolutie (1870-1914)", emoji: "💡", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (Marx + nu)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Voor 1750 ─────────────────────────────────────────
  {
    title: "Voor 1750 — agrarische maatschappij",
    explanation:
      "**Pre-industrieel Europa** (tot ~1750):\n• ~80% bevolking werkte in landbouw.\n• Productie thuis (huisnijverheid) of in **gilden** in stadjes.\n• Energie: spierkracht (mens, paard, os), wind (molens), water (waterrad), hout (vuur).\n• Transport: paard + kar, schip — traag + duur.\n• Voedsel-productie aan natuur overgeleverd → misoogsten = hongersnood.\n• Bevolking groei beperkt door honger + ziekte → 'Malthusiaanse val' (Malthus 1798).\n\n**Agrarische revolutie** (~1700-1850, vooraf aan industriële):\n• **Drieslagstelsel** vervangen door vruchtwisseling met klaver/raapzaad → stikstof terug in bodem.\n• Nieuw gereedschap: stalen ploeg, dorsmachine.\n• Selectieve veeteelt → grotere koeien, schapen.\n• **Inclosure Acts** in Engeland: gemeenschappelijke gronden naar privé-bezit → kleine boeren weggedrukt → trek naar steden.\n• Gevolg: meer voedsel → bevolkingsgroei → arbeidsoverschot voor fabrieken.\n\n**Klassen-piramide vóór 1789**:\n• **1e stand**: geestelijken (~1%).\n• **2e stand**: adel (~2%).\n• **3e stand**: 'volk' — boer, ambachtsman, koopman, arbeider (~97%).\n• Eerste twee standen niet of nauwelijks belasting; derde betaalde alles.\n• Franse Revolutie 1789 breekt deze structuur in Frankrijk.\n\n**Mercantilisme**: economisch denken vóór 1750. Doel: zoveel mogelijk **edelmetaal** verzamelen via export-overschot. Kolonies leveren grondstoffen, koloniaal moederland verkoopt eindproducten. Beperkt door staatsregulering.\n\n**Verlichting** (1700-1789) als geestelijke voorloper:\n• Rede + wetenschap > traditie + religie.\n• Locke, Voltaire, Rousseau, Adam Smith.\n• Smith's 'Wealth of Nations' (1776): vrije markt > mercantilisme.\n• Vrije markt + uitvindingen + arbeidsoverschot → recept voor industrialisatie.\n\n**Britse voorsprong** (waarom Engeland eerst?):\n• Steenkool + ijzer in overvloed (in Wales + Midlands).\n• Grote koloniale markt (afzet).\n• Nederlandse vluchtelingen brachten financierings-kennis.\n• Stabiele politieke situatie sinds 1688 (Glorious Revolution).\n• Goede infrastructuur (kanaal-netwerk).",
    checks: [
      {
        q: "Wat was het **drieslagstelsel**?",
        options: [
          "Landbouw-systeem: 3 akkers, één braak liggend",
          "Belasting van 3 standen",
          "Driemachten-staat",
          "Loonstandaard"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is politiek.", "Niet — dat is bestuur.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "Wintergraan/zomergraan/braak", tekst: "Driehoeks-vruchtwisseling: 1) wintergraan (rogge/tarwe). 2) zomergraan (haver/gerst). 3) braak (rust voor bodem). 1/3 grond produceerde dus NIETS. Vruchtwisseling met klaver verving braak → klaver bindt N → bodem rijker zonder rust." }],
          niveaus: { basis: "Driedeling akkers. A.", simpeler: "Een derde liet je rusten. A.", nogSimpeler: "Drieslag = A." },
        },
      },
      {
        q: "Wat waren **Inclosure Acts** in Engeland?",
        options: [
          "Wetten die gemeenschappelijke gronden privatiseerden",
          "Wetten tegen kinderarbeid",
          "Belasting op import",
          "Wetten voor onderwijs"
        ],
        answer: 0,
        wrongHints: [null, "Niet — pas later.", "Niet — economisch beleid.", "Niet — kwam later."],
        uitlegPad: {
          stappen: [
            { titel: "Privé-grond + arbeidsoverschot", tekst: "Common land werd toegewezen aan grote landeigenaren. Kleine boeren + 'commoners' verloren toegang tot weide/brandhout. Moesten gaan werken als loonarbeider of trekken naar stad → leverde fabrieks-arbeiders." },
          ],
          theorie: "Marx noemde dit later 'oorspronkelijke accumulatie' — onteigening als basis voor kapitalisme.",
          niveaus: { basis: "Privatisering grond. A.", simpeler: "Gemeenschappelijke gronden naar rijke landheren. A.", nogSimpeler: "Privatisering = A." },
        },
      },
      {
        q: "**Mercantilisme** was:",
        options: [
          "Economisch beleid: handelsoverschot opbouwen voor goud/zilver",
          "Vrije markt-theorie",
          "Communisme",
          "Religieus systeem"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — kwam later.", "Niet — kwam pas 19e eeuw.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "Goud = welvaart", tekst: "Pre-1776 dominant: zoveel mogelijk export, zo weinig mogelijk import = handelsbalans positief → goud-instroom. Staat reguleert handel + ondersteunt monopolies (VOC, WIC)." }],
          theorie: "Adam Smith's 'Wealth of Nations' (1776) bekritiseerde mercantilisme: vrije ruil → meer welvaart voor alle landen.",
          niveaus: { basis: "Goud verzamelen. A.", simpeler: "Veel exporteren, weinig importeren. A.", nogSimpeler: "Goud = A." },
        },
      },
      {
        q: "Waarom begon de industriële revolutie in **Engeland** en niet bv. in Frankrijk?",
        options: [
          "Combinatie: kolen + ijzer + kolonies + stabiele politiek + kanaal-netwerk",
          "Engelsen werkten harder",
          "Het regende meer",
          "Frans onderwijs was slechter"
        ],
        answer: 0,
        wrongHints: [null, "Niet — stereotype, niet feit.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [
            { titel: "Meerdere factoren", tekst: "Steenkool-rijkdom + grote afzetmarkt (Brits Rijk) + politieke stabiliteit sinds 1688 (Glorious Revolution) + sterke maritieme handel + Inclosure-arbeidsoverschot + Verlichtings-cultuur. Frankrijk had revolutie 1789 + napoleontische oorlogen → industrialisatie pas vanaf 1830." },
          ],
          niveaus: { basis: "Samenloop van factoren. A.", simpeler: "Veel ingrediënten samen in Engeland. A.", nogSimpeler: "Combo = A." },
        },
      },
      {
        q: "Vóór 1750 werkte ~**80%** van bevolking in:",
        options: ["Landbouw", "Fabriek", "Mijnen", "Handel"],
        answer: 0,
        wrongHints: [null, "Niet — fabrieken bestonden nog niet als nu.", "Niet — kleinschalig.", "Niet — minder dan 5%."],
        uitlegPad: {
          stappen: [{ titel: "Agrarische samenleving", tekst: "Tot industriële revolutie domineerde landbouw. Per 1850 (UK): nog ~30% in landbouw. Per 1900: <20%. Vandaag (NL): <3%. Reusachtige verschuiving van werk-aard binnen ~150 jaar." }],
          niveaus: { basis: "Landbouw. A.", simpeler: "Bijna iedereen boer. A.", nogSimpeler: "80% boer = A." },
        },
      },
    ],
  },

  // ─── B. 1e revolutie ──────────────────────────────────────
  {
    title: "1e Industriële Revolutie (1750-1850)",
    explanation:
      "**Startpunt**: Britse textiel-industrie + stoomkracht, ~1760.\n\n**Kern-uitvindingen**:\n• **Stoomma chine** — James Watt 1769 (verbetering eerdere Newcomen). Energiebron onafhankelijk van wind/water.\n• **Spinning Jenny** — Hargreaves 1764: 1 arbeider, 8 spillen tegelijk.\n• **Water frame** — Arkwright 1769: water-aangedreven spin-machine.\n• **Power loom** — Cartwright 1785: mechanische weefstoel.\n• Resultaat: textielproductie stijgt **100×** in 50 jaar.\n\n**Stoom-toepassingen**:\n• **Trein**: Stephenson's Rocket 1829, 50 km/h. NL: Amsterdam-Haarlem 1839.\n• **Stoomschip**: vervangt zeilboot, niet meer afhankelijk van wind.\n• **Stoom-fabriek**: machines aangedreven door één centrale stoommachine via riemen.\n\n**Fabriekssysteem** vervangt huisnijverheid:\n• Productie van huis → fabriek.\n• Specialisatie: arbeider doet 1 simpele taak (Adam Smith's speldfabriek-voorbeeld).\n• Schaalvoordelen → goedkopere producten → grotere markt.\n• Vereist disciplinering: vaste uren, klokken, opzichters.\n\n**Verstedelijking** (urbanisatie):\n• Manchester 1750: 17 000 inwoners → 1850: 300 000.\n• Birmingham, Leeds, Liverpool, Sheffield: zelfde patroon.\n• Slechte sanitair → cholera-epidemieën 1830s-1840s.\n• Slums, ovrbevolkte rijtjeshuizen.\n\n**Schalen-eindigheid**:\n• Kolen + ijzer-vraag explodeert.\n• Britse kolen-productie: 5 mln ton (1750) → 60 mln ton (1850).\n• IJzer-productie 25× hoger.\n• Spoorweg-netwerk: 0 km → 10 000 km in UK alleen.\n\n**Continentaal Europa** loopt achter, haalt in:\n• België 1830 (Cockerill in Luik) — eerste op continent.\n• Frankrijk 1830-1850.\n• Duitsland 1850s (Krupp staal).\n• Nederland traag (~1870, gedeeltelijk door rijkdom uit kolonies + handel).",
    checks: [
      {
        q: "**Stoom-machine** van wie maakte de Industriële Revolutie mogelijk?",
        options: ["James Watt (1769)", "Thomas Edison", "Karl Marx", "Henry Ford"],
        answer: 0,
        wrongHints: [null, "Niet — elektriciteit, later.", "Niet — filosoof.", "Niet — 1908 lopende band."],
        uitlegPad: {
          stappen: [
            { titel: "Watt verbeterde Newcomen", tekst: "Newcomen had stoom-mijnpomp (1712). Watt voegde aparte condensor toe → 70% minder kolen → economisch winstgevend buiten mijnbouw. Patentverlening 1769; commercialisatie tot 1800." },
          ],
          theorie: "Eenheid 'watt' (vermogen) is naar hem genoemd.",
          niveaus: { basis: "James Watt. A.", simpeler: "Watt 1769. A.", nogSimpeler: "Watt = A." },
        },
      },
      {
        q: "Engelse stad Manchester groeide tussen 1750-1850:",
        options: [
          "Van ~17 000 naar ~300 000 inwoners (~18× zoveel)",
          "Bleef gelijk",
          "Halveerde",
          "Verdubbelde"
        ],
        answer: 0,
        wrongHints: [null, "Niet — explosief gegroeid.", "Onjuist.", "Te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Cottonopolis", tekst: "Manchester werd centrum van textiel-industrie ('Cottonopolis'). Migratie uit platteland (Inclosure-slachtoffers) + Ierse immigranten (na hongersnood 1845). Sterke verstedelijking, slechte huisvesting + sanitair." }],
          niveaus: { basis: "~17k → 300k. A.", simpeler: "Bijna 20× zo groot in 100 jaar. A.", nogSimpeler: "18× = A." },
        },
      },
      {
        q: "Wat is de **fabriekssysteem**?",
        options: [
          "Productie geconcentreerd op één locatie met machines + arbeiders + vaste uren",
          "Werkdag van 8 uur",
          "Ambachtswerk thuis",
          "Slavernij in fabrieken"
        ],
        answer: 0,
        wrongHints: [null, "Niet — kwam pas eind 19e eeuw.", "Tegenovergesteld.", "Niet — vrije loonarbeid, niet slavernij."],
        uitlegPad: {
          stappen: [{ titel: "Discipline + machines", tekst: "Vorm: arbeiders verzamelen in groot gebouw, werken aan machines onder opzichter. Vereist klok-discipline, gestandaardiseerde taken, hiërarchie. Vervangt 'putting-out'-systeem waarin koopman ruwe grondstof aan thuiswerkers gaf." }],
          niveaus: { basis: "Geconcentreerde productie. A.", simpeler: "Iedereen samen in één gebouw werken. A.", nogSimpeler: "Fabriek = A." },
        },
      },
      {
        q: "**Eerste trein** in Nederland reed in:",
        options: ["1839 (Amsterdam-Haarlem)", "1825", "1880", "1900"],
        answer: 0,
        wrongHints: [null, "Niet — dat was eerste UK-trein (Stockton-Darlington).", "Te laat.", "Te laat."],
        uitlegPad: {
          stappen: [{ titel: "HSM 1839", tekst: "Hollandse IJzeren Spoorweg-Maatschappij (HSM) opende Amsterdam-Haarlem 1839. 20 km, ~30 min. Vooral passagiers. NL liep relatief achter — handelseconomie was minder afhankelijk van industriële infrastructuur dan UK." }],
          theorie: "Eerste passagierstrein wereldwijd: Liverpool-Manchester 1830.",
          niveaus: { basis: "1839. A.", simpeler: "Amsterdam-Haarlem 1839. A.", nogSimpeler: "1839 = A." },
        },
      },
      {
        q: "**Spinning Jenny** (Hargreaves 1764) was uitvinding in welke sector?",
        options: ["Textiel — spinnen van garen", "Mijnbouw", "Transport", "Landbouw"],
        answer: 0,
        wrongHints: [null, "Niet — andere uitvindingen daar.", "Niet — Stephenson.", "Niet — eerder."],
        uitlegPad: {
          stappen: [{ titel: "Vroege spin-machine", tekst: "Spinning Jenny: één arbeider bedient 8 spillen tegelijk i.p.v. 1 traditioneel. Tienvoud van productiviteit. Textiel was eerste gemechaniseerde sector — vandaar dat industriële revolutie er begon." }],
          niveaus: { basis: "Textiel. A.", simpeler: "Garen-spinning. A.", nogSimpeler: "Textiel = A." },
        },
      },
    ],
  },

  // ─── C. Sociale kwestie ───────────────────────────────────
  {
    title: "Sociale kwestie — arbeiders + reacties",
    explanation:
      "**Werkomstandigheden** in vroege fabrieken (~1820-1870):\n• Werkdag 12-16 uur, 6 dagen per week.\n• Kinder-arbeid vanaf 5-6 jaar (klein = kruipt onder machines).\n• Vrouwen: zelfde uren, half loon.\n• Geen veiligheid: handen + benen verloren in machines.\n• Geen pensioen, geen ziektewet, geen werkloosheidsuitkering.\n• Lonen vaak NET genoeg voor brood — geen reserve.\n• Wonen in 'slums': overbevolkte krotten, geen riool, cholera.\n\n**Reacties op de sociale kwestie**:\n\n1. **Liberalisme** (Adam Smith, John Stuart Mill):\n• Vrije markt regelt vanzelf.\n• Werkgever + werknemer onderhandelen vrij.\n• Staat moet zo weinig mogelijk ingrijpen ('laissez-faire').\n• Probleem: enorme machts-ongelijkheid tussen werkgever + ongeschoolde arbeider.\n\n2. **Socialisme** (vroege, vóór Marx):\n• Robert Owen (UK) + Saint-Simon (Frankrijk).\n• Productiemiddelen in gemeenschapshand.\n• Owen bouwde 'utopische' fabriek New Lanark met scholen + goede arbeidsvoorwaarden.\n\n3. **Marxisme** (Karl Marx + Friedrich Engels, 1848 Communistisch Manifest):\n• Geschiedenis = klassenstrijd (slaaf vs heer → boer vs adel → arbeider vs kapitalist).\n• Kapitalisme exploiteert arbeider (loon < waarde van werk = winst voor eigenaar).\n• Voorspelling: arbeiders revolutie → afschaffing privé-bezit productiemiddelen.\n• Inspiratie voor latere communistische bewegingen (1917 Rusland).\n\n4. **Confessioneel / Sociaal-christendom**:\n• Paus Leo XIII: encycliek 'Rerum Novarum' 1891 — verdedig recht op vakbond + leefbaar loon.\n• Protestants: Abraham Kuyper, ARP.\n\n5. **Vakbeweging**:\n• Arbeiders verenigen zich om collectief loon af te dwingen.\n• Eerste stakingen → wetten tegen vakbonden (UK: Combination Acts 1799) → geleidelijk toegestaan (1824).\n• Algemene staking als wapen.\n\n**Sociale wetten** (Nederland):\n• **Kinderwetje van Van Houten 1874**: verbod kinderarbeid < 12 jaar (in fabrieken, niet landbouw).\n• Arbeidswet 1889: max werkdag voor vrouwen + jongeren.\n• Ongevallenwet 1901: verzekering bij arbeidsongeval.\n• Stilaan: 8-uurs werkdag (1919), AOW (1957), sociaal stelsel (jaren 60).\n\n**Vakorganisaties NL**:\n• ANDB (diamantbewerkers, 1894) — eerste moderne vakbond, leider Henri Polak.\n• SDAP (1894) — sociaaldemocratische arbeiderspartij.\n• Splitste later in CPN (communistisch) + PvdA (sociaaldemocratisch).",
    checks: [
      {
        q: "Wat regelde **'Kinderwetje van Van Houten' (1874)**?",
        options: [
          "Verbod kinderarbeid onder 12 jaar in fabrieken",
          "Leerplicht",
          "Kinderbijslag",
          "Adoptie-regels"
        ],
        answer: 0,
        wrongHints: [null, "Niet — leerplicht kwam 1900.", "Veel later (1939).", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Beperkt maar mijlpaal", tekst: "Eerste NL sociale wet. Verbood kinderarbeid in fabrieken — maar NIET in landbouw + huishouden. Handhaving zwak (geen inspectie). Toch begin van 'sociale wetgeving' in NL. Sammuel van Houten was liberaal Tweede Kamerlid." },
          ],
          niveaus: { basis: "Verbod kinderarbeid <12 fabriek. A.", simpeler: "Geen kleine kinderen meer in fabrieken. A.", nogSimpeler: "Kinderwet = A." },
        },
      },
      {
        q: "Karl Marx + Engels publiceerden **Communistisch Manifest** in welk jaar?",
        options: ["1848", "1789", "1917", "1900"],
        answer: 0,
        wrongHints: [null, "Niet — Franse Revolutie.", "Niet — Russische Revolutie (gevolg).", "Te laat."],
        uitlegPad: {
          stappen: [{ titel: "Revolutiejaar 1848", tekst: "Klassiek 1848: revoluties in heel Europa (Wenen, Berlijn, Parijs, Milaan). Marx + Engels publiceren *Manifest der Kommunistischen Partei* — oproep tot arbeiders-revolutie. 'Een spook waart door Europa, het spook van het communisme.'" }],
          theorie: "1848-revoluties grotendeels mislukt; absolutisme keerde terug. Maar idee bleef bestaan → 1917 Russische Revolutie + later.",
          niveaus: { basis: "1848. A.", simpeler: "1848 Communistisch Manifest. A.", nogSimpeler: "1848 = A." },
        },
      },
      {
        q: "Liberalisme volgens Adam Smith:",
        options: [
          "Vrije markt + minimale staats-rol (laissez-faire)",
          "Sterke staat met centrale planning",
          "Productiemiddelen in gemeenschap",
          "Religieus geleide economie"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — dat is socialisme.", "Niet — laat religie buiten."],
        uitlegPad: {
          stappen: [{ titel: "'Onzichtbare hand'", tekst: "Smith argueerde: als iedereen vrij eigen belang nastreeft, leidt 'onzichtbare hand' van de markt vanzelf tot optimale uitkomst voor allen. Staat alleen voor leger + rechtspraak + infrastructuur (klein). Probleem: werkt minder goed bij grote machts-ongelijkheid + externaliteiten (milieu)." }],
          niveaus: { basis: "Laissez-faire. A.", simpeler: "Vrije markt zonder staat. A.", nogSimpeler: "Laissez-faire = A." },
        },
      },
      {
        q: "**Robert Owen** stichtte 'New Lanark' als voorbeeld van:",
        options: [
          "Utopisch socialisme — fabriek met goede voorwaarden",
          "Kapitalistische fabriek",
          "Religieuze gemeente",
          "Militaire kazerne"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — sociale experiment.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "Pre-Marx socialisme", tekst: "Owen kocht textielfabriek in New Lanark (Schotland), 1810s. Verkortte werkdag, bouwde scholen voor kinderen, verbood kinderarbeid <10, betaalde betere lonen. Toch winstgevend. Bewees: humane fabriek kan. Inspireerde latere socialistische bewegingen." }],
          niveaus: { basis: "Utopisch socialisme. A.", simpeler: "Sociale fabriek met goede voorwaarden. A.", nogSimpeler: "Owen = A." },
        },
      },
      {
        q: "**Vakbond** is een organisatie die:",
        options: [
          "Arbeiders verenigt om collectief loon + voorwaarden af te dwingen",
          "Werkgevers verenigt",
          "Religieuze gemeenschap",
          "Politieke partij"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is werkgeversorganisatie.", "Niet — niet religieus.", "Niet — vakbond ≠ partij (al gelieerd)."],
        uitlegPad: {
          stappen: [{ titel: "Collectief gewicht > individu", tekst: "Eén arbeider kan tegen kapitalist geen onderhandelingspositie hebben. 100 arbeiders die SAMEN dreigen te staken = krachtigere stem. Sociaal recht in NL grotendeels via vakbond-druk + akkoord met werkgevers + overheid (poldermodel)." }],
          niveaus: { basis: "Collectieve actie arbeiders. A.", simpeler: "Arbeiders samen sterker. A.", nogSimpeler: "Vakbond = A." },
        },
      },
    ],
  },

  // ─── D. 2e revolutie ──────────────────────────────────────
  {
    title: "2e Industriële Revolutie (1870-1914)",
    explanation:
      "**Tweede revolutie** = nieuwe technologieën + meer landen industrialiseren.\n\n**Kern-uitvindingen**:\n• **Elektriciteit**:\n  - Edison's gloeilamp 1879.\n  - Tesla's wisselstroom-systeem 1888.\n  - Eerste centrale 1882 (NYC).\n  - Steden verlicht, fabrieken niet meer aan stoom gebonden.\n• **Verbrandingsmotor**:\n  - Otto 4-takt 1876.\n  - Diesel 1893.\n  - Auto: Benz 1886.\n• **Chemische industrie**:\n  - Synthetische kleurstoffen (BASF, Bayer in Duitsland).\n  - Kunstmest (basis Haber-Bosch 1909).\n  - Plastic (bakeliet 1907).\n• **Communicatie**:\n  - Telegraaf (Morse 1837).\n  - Telefoon (Bell 1876).\n  - Radio (Marconi 1895).\n• **Productie**:\n  - Lopende band (Ford 1908): T-Ford-auto in 90 min ipv 12 uur.\n  - Taylor's scientific management: tijdsstudies + standaardisatie.\n\n**Industrialiserende landen**:\n• Duitsland: na eenwording 1871 → snel industrieel. Krupp staal, BASF chemie. Anti-Brits.\n• VS: na burgeroorlog 1865 → enorme groei. Rockefeller olie, Carnegie staal, JP Morgan bank.\n• Japan: Meiji-restauratie 1868 → razendsnel industrialiseert (eerste niet-Europese industrieland).\n• Rusland: traag, vooral spoorwegen + textiel. Rev. 1917 toen ze vastliepen.\n• Nederland: laat (Philips 1891, Hoogovens 1918).\n\n**Imperialisme + globalisering** (1870-1914):\n• Europese landen jagen Afrika + Azië voor grondstoffen + afzetmarkten.\n• Berlijn-Conferentie 1884-85: verdeling Afrika.\n• Wereldhandel groeit 3× tussen 1870-1914.\n• Goederen + mensen + kapitaal stromen vrij — eerste globalisatie-golf.\n\n**Spanning + WO1**:\n• Industriële capaciteit → reusachtige legers + wapenfabrieken.\n• Duitsland inhaalt Britse industriële macht → geopolitieke spanningen.\n• 1914: industriële oorlog (mitrailleur, gif gas, tank, vliegtuig) → 17 miljoen doden.\n\n**Tweede industriële revolutie eindigt** WO1 (1914-1918) en Spaanse griep + Grote Depressie 1929-1939. Daarna recovery → derde rev. (computers, vanaf 1950s).",
    checks: [
      {
        q: "**Lopende band** voor auto-productie was door:",
        options: ["Henry Ford (1908)", "Karl Benz", "Thomas Edison", "James Watt"],
        answer: 0,
        wrongHints: [null, "Niet — Benz uitvond de auto, niet de lopende band.", "Niet — Edison gloeilamp.", "Niet — stoom-machine, eerder."],
        uitlegPad: {
          stappen: [{ titel: "Massa-productie revolutie", tekst: "Ford T (1908): auto-bouw door arbeiders die elk één taak doen aan langs-bewegende band. Bouwtijd 12 uur → 1,5 uur. Prijs daalde van ~$850 naar $260 → eerste 'massa-product' auto." }],
          theorie: "Ford betaalde arbeiders relatief hoog loon ($5/dag) zodat ze zelf auto's konden kopen → eigen afzetmarkt.",
          niveaus: { basis: "Ford 1908. A.", simpeler: "T-Ford lopende band. A.", nogSimpeler: "Ford = A." },
        },
      },
      {
        q: "**Edison** patenteerde welke uitvinding (1879)?",
        options: ["Gloeilamp", "Stoom-machine", "Telegraaf", "Telefoon"],
        answer: 0,
        wrongHints: [null, "Niet — Watt, eerder.", "Niet — Morse 1837.", "Niet — Bell 1876."],
        uitlegPad: {
          stappen: [{ titel: "Lichtgevend filament", tekst: "Edison's praktische gloeilamp (1879) gebruikte koolstof-filament dat ~40 uur brandde. Vereiste ook hele elektriciteits-distributiesysteem → Pearl Street centrale NYC 1882. Veranderde nachtleven + arbeidstijden voorgoed." }],
          niveaus: { basis: "Gloeilamp 1879. A.", simpeler: "Edison + gloeilamp. A.", nogSimpeler: "Gloeilamp = A." },
        },
      },
      {
        q: "**Meiji-restauratie** (1868) in Japan:",
        options: [
          "Razendsnelle modernisering — eerste niet-Europese industrieland",
          "Boeren-revolutie",
          "Religieuze hervorming",
          "Oorlog tegen China"
        ],
        answer: 0,
        wrongHints: [null, "Niet — keizer-restauratie.", "Niet — niet religieus.", "Niet — kwam later (1894)."],
        uitlegPad: {
          stappen: [
            { titel: "Westerse technologie + Japans bestuur", tekst: "Na 250 jaar isolement (Tokugawa) opende Japan onder druk van Amerikaanse oorlogsschepen (Perry 1853). Meiji-keizer hervormde: stuur studenten naar Europa/VS, importeer machines, bouw fabrieken + leger naar westers model. In 50 jaar van feudal tot wereldmacht (versloeg Rusland 1905)." },
          ],
          theorie: "Japan toonde: industrialisatie is geen 'westers' fenomeen, maar systeem dat overal kopieerbaar is.",
          niveaus: { basis: "Japanse modernisering. A.", simpeler: "Japan kopieerde westerse techniek snel. A.", nogSimpeler: "Meiji = A." },
        },
      },
      {
        q: "**Berlijn-Conferentie** (1884-85):",
        options: [
          "Europese landen verdelen Afrika onderling",
          "Vredesakkoord WO1",
          "Internationale wetenschapsconferentie",
          "Olympische Spelen-overleg"
        ],
        answer: 0,
        wrongHints: [null, "Niet — die was 1919.", "Onzin.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "'Scramble for Africa'", tekst: "Bismarck bracht 14 Europese landen samen om koloniaal Afrika-verdeling te formaliseren. Lijnen op kaart getrokken zonder rekening met inheemse etnische groepen. Veel huidige conflicten hebben hier wortels (Rwanda, Soedan, etc.)." }],
          theorie: "1914: 90% Afrika in Europese handen (uitzondering: Liberia + Ethiopië).",
          niveaus: { basis: "Verdeling Afrika. A.", simpeler: "Europa pakt Afrika op vergadertafel. A.", nogSimpeler: "Berlin Conf. = A." },
        },
      },
      {
        q: "**Wisselstroom** voor elektriciteits-net door:",
        options: ["Nikola Tesla (~1888)", "Thomas Edison", "Albert Einstein", "Maxwell"],
        answer: 0,
        wrongHints: [null, "Niet — Edison voorstander gelijkstroom (en verloor stroom-oorlog).", "Niet — relativiteit.", "Niet — theorie EM, niet praktische generator."],
        uitlegPad: {
          stappen: [
            { titel: "AC won 'War of Currents'", tekst: "Edison wilde gelijkstroom; Tesla + Westinghouse promootten wisselstroom. AC kan via trafo's omhoog/omlaag → lange-afstand-transport mogelijk → AC won eind 19e eeuw. Tesla werd ietwat vergeten tot recent (eer voor Edison oneerlijk groot)." },
          ],
          niveaus: { basis: "Tesla. A.", simpeler: "Tesla bedacht wisselstroom-systeem. A.", nogSimpeler: "Tesla = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Marx, nalatenschap + nu",
    explanation:
      "**Marx's analyse** in 1 paragraaf:\n• Onder kapitalisme: eigenaar productiemiddelen (kapitalist) huurt arbeid (proletariër) tegen loon.\n• Arbeider produceert waarde groter dan zijn loon — verschil = 'meerwaarde' = winst voor kapitalist.\n• Concurrentie tussen kapitalisten → mechanisatie → minder arbeid nodig → werkloosheid + lonen onder druk.\n• Spanning leidt uiteindelijk tot revolutie + overdracht productiemiddelen naar arbeiders.\n\n**Wat klopte van Marx?**\n• Werkomstandigheden waren echt verschrikkelijk → erkende noodzaak voor verandering.\n• Concentratie van rijkdom in handen weinige (rijksten 1% bezit ~50% wereld-vermogen, 2023).\n• Mechanisatie verandert arbeidsmarkt fundamenteel — geldt zowel toen (textiel) als nu (AI).\n\n**Wat klopte niet?**\n• Voorspelde revolutie kwam niet in geïndustrialiseerde landen — wel in agrarisch Rusland 1917.\n• Onderschatte aanpassingsvermogen van kapitalisme: sociale wetten, vakbonden, welvaartsstaat.\n• Socialistische staten (USSR, China) waren niet vrij maar autoritair.\n\n**Welvaartsstaat als 'compromis'** (na WO2):\n• Vrije markt + sociale rechten = sociaal-democratische middenweg.\n• AOW, WW, kinderbijslag, gezondheidszorg, onderwijs.\n• Vooral sterk in Noord-West Europa.\n• Sinds 1980s: terugtrekking → meer individuele verantwoordelijkheid (neoliberalisme: Thatcher, Reagan).\n\n**3e + 4e industriële revolutie** (na 1950):\n• **3e revolutie** (1950-2000): computer, microchip, software, internet.\n• **4e revolutie** (2010-nu): AI, robotica, biotechnologie, IoT, automatisering kennis-werk.\n• Vraag: gaan we naar 'post-werk-samenleving'? Universal Basic Income (UBI) discussies.\n\n**Klimaat-uitdaging**:\n• Industriële revolutie = verbranden fossiele brandstoffen op gigantische schaal.\n• Voorraad CO₂ stijgt van 280 ppm (preindustrieel) → 420 ppm (2024).\n• Voor klimaatdoelen: tegen 2050 (bijna) emissie-neutraal nodig → 'groene revolutie' = 4e/5e revolutie.\n\n**Historische lessen**:\n• Technologische verandering verloopt sneller dan sociale aanpassing → spanningen.\n• Onderwijs + her-scholing → cruciaal voor mensen om mee te kunnen.\n• Welvaartsstaat kan worst-case-vermijden, maar vereist politieke wil.",
    checks: [
      {
        q: "Marx voorspelde dat de arbeiders-revolutie zou plaatsvinden in:",
        options: [
          "Geïndustrialiseerde landen (UK, Duitsland) — gebeurde NIET",
          "Rusland — gebeurde wel",
          "China",
          "Frankrijk"
        ],
        answer: 0,
        wrongHints: [null, "Niet — Marx zag Rusland niet als rijp (te agrarisch).", "Wel 1949, na Marx.", "Niet — 1789 was burgerlijk."],
        uitlegPad: {
          stappen: [
            { titel: "Marx had het mis", tekst: "Marx zag socialisme als logisch eindstadium van kapitalisme → revolutie zou eerst in industrieel-meest-ontwikkelde landen komen (UK, Duitsland). In praktijk: 1917 Rusland (vooral agrarisch), 1949 China (idem). UK + DE losten kwesties op via vakbond + welvaartsstaat. Voorspelling: fout. Analyse-werktuig: nog steeds gebruikt in sociologie." },
          ],
          niveaus: { basis: "Industriële landen, niet gebeurd. A.", simpeler: "Marx dacht in rijke landen, was Rusland. A.", nogSimpeler: "UK/DE = A." },
        },
      },
      {
        q: "Wat is **meerwaarde** volgens Marx?",
        options: [
          "Verschil tussen waarde-arbeid produceert + loon dat arbeider krijgt",
          "Belasting",
          "Overuren betaling",
          "Rente op kapitaal"
        ],
        answer: 0,
        wrongHints: [null, "Niet — staats-element.", "Niet — bonus op uren.", "Verwant maar niet identiek."],
        uitlegPad: {
          stappen: [
            { titel: "Bron van winst (Marx)", tekst: "Arbeider werkt 8 uur → produceert waarde van 16 € (zeg). Krijgt 8 € loon. Verschil 8 € = meerwaarde → winst van kapitalist. Marx zag dit als systematische uitbuiting; verdedigers van kapitalisme: arbeider verkoopt vrijwillig arbeid + winst beloont risico van investering." },
          ],
          niveaus: { basis: "Waarde min loon. A.", simpeler: "Wat de baas overhoudt. A.", nogSimpeler: "Meerwaarde = A." },
        },
      },
      {
        q: "Welvaartsstaat in Nederland kwam vooral tot stand:",
        options: [
          "Na WO2 (1945-1970)",
          "Vóór WO1",
          "In de jaren 1830",
          "Nooit"
        ],
        answer: 0,
        wrongHints: [null, "Niet — toen begon het pas (Kinderwet 1874).", "Niet — toen geen sociaal stelsel.", "Onjuist."],
        uitlegPad: {
          stappen: [
            { titel: "Naoorlogse opbouw", tekst: "Drees AOW 1957, Algemene Bijstandswet 1965, ziektewet/WW uitgebreid, onderwijs gratis. Sterke economische groei + brede politieke consensus. Vanaf 1980s: terugtrekking (geprivatiseerd, versoberd, sancties)." },
          ],
          niveaus: { basis: "1945-1970. A.", simpeler: "Naoorlogse periode. A.", nogSimpeler: "Na WO2 = A." },
        },
      },
      {
        q: "CO₂-concentratie atmosfeer veranderde van **280 ppm** (preindustrieel) naar:",
        options: ["~420 ppm (2024)", "~300 ppm", "~600 ppm", "~250 ppm"],
        answer: 0,
        wrongHints: [null, "Veel hoger.", "Nog niet zo hoog.", "Onjuist — stijgt, niet daalt."],
        uitlegPad: {
          stappen: [
            { titel: "150 jaar fossiele brandstoffen", tekst: "1850: ~285 ppm. 1950: ~310 ppm. 2000: ~370 ppm. 2024: ~420 ppm. Stijgsnelheid +2,5 ppm/jaar = snelste in 800 000 jaar (volgens ijs-kernen). Doel 1,5 °C: <450 ppm." },
          ],
          theorie: "Hoogtepunten ijstijd: ~180 ppm. Tussen-tijdperken (zoals nu): ~280. We zitten ver boven natuurlijke schommeling.",
          niveaus: { basis: "420 ppm. A.", simpeler: "Steeds hoger sinds 1850. A.", nogSimpeler: "420 = A." },
        },
      },
      {
        q: "**4e industriële revolutie** (sinds ~2010) wordt gekenmerkt door:",
        options: [
          "AI + robotica + biotechnologie + automatisering kenniswerk",
          "Stoom-machine + textiel",
          "Elektriciteit + verbrandingsmotor",
          "Internet + PC"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is 1e.", "Niet — dat is 2e.", "Niet — dat is 3e."],
        uitlegPad: {
          stappen: [
            { titel: "Cyber-fysieke systemen", tekst: "Term geïntroduceerd in 2016 (Klaus Schwab, World Economic Forum). Kenmerk: niet alleen handarbeid wordt geautomatiseerd, maar ook kenniswerk (boekhouden, juridische analyse, code schrijven, vertalen). Brengt grote vragen over werkgelegenheid, ongelijkheid, ethiek." },
          ],
          theorie: "Vergelijkbare debatten als bij 1e revolutie: nieuwe banen ontstaan ook (UX-designers, data-scientists, AI-trainers). Schaal van verschuiving onbekend.",
          niveaus: { basis: "AI + automation. A.", simpeler: "Computers nemen denkwerk over. A.", nogSimpeler: "AI = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const industrieleRevolutieHavoVwo = {
  id: "industriele-revolutie-havo-vwo",
  title: "Industriële Revolutie (HAVO/VWO Geschiedenis)",
  emoji: "🚂",
  level: "havo-vwo-4-5",
  subject: "geschiedenis",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Geschiedenis — Industriële Revolutie 1750-1914 (CSE-onderwerp)",
  prerequisites: [
    { id: "verlichting-revoluties-havo-vwo", title: "Verlichting + Revoluties", niveau: "havo-3F" },
  ],
  intro:
    "Industriële Revolutie voor HAVO/VWO eindexamen — agrarische voorgeschiedenis, 1e + 2e revolutie, sociale kwestie + Marx, imperialisme, doorlijn naar nu. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "industriële revolutie",
    "agrarisch", "drieslag", "vruchtwisseling",
    "inclosure", "gemene grond",
    "mercantilisme", "Adam Smith",
    "Engeland", "Manchester", "Cottonopolis",
    "stoom-machine", "James Watt",
    "spinning jenny", "Hargreaves",
    "weefstoel", "textielindustrie",
    "trein", "Stephenson", "spoorweg",
    "fabriekssysteem", "verstedelijking",
    "kinderarbeid", "Kinderwet Van Houten",
    "sociale kwestie",
    "liberalisme", "laissez-faire",
    "socialisme", "Robert Owen",
    "Marx", "Engels", "Communistisch Manifest", "1848",
    "kapitalisme", "meerwaarde",
    "vakbond", "ANDB", "SDAP",
    "Rerum Novarum",
    "2e revolutie", "elektriciteit", "Edison", "Tesla",
    "verbrandingsmotor", "Otto", "Diesel",
    "auto", "Benz", "Ford",
    "lopende band", "Taylor", "scientific management",
    "Berlijn-Conferentie", "imperialisme",
    "Meiji", "Japan modernisering",
    "welvaartsstaat",
    "neoliberalisme", "Thatcher", "Reagan",
    "4e revolutie", "AI", "automatisering",
  ],
  chapters,
  steps,
};

export default industrieleRevolutieHavoVwo;
