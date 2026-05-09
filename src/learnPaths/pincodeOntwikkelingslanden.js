// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk 8 (Ontwikkelingslanden)
// Uitgebreide versie 2026-05-09: 7 stappen voor compleet examen-blok.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  geld: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  vraag: "#42a5f5",
  aanbod: "#ef5350",
  rood: "#ff5252",
  oranje: "#ffa040",
  grijs: "#90a4ae",
};

const stepEmojis = ["🌏", "📊", "🔄", "🤲", "🌱", "🌍", "🎯"];

const chapters = [
  { letter: "A", title: "Verschillen meten", emoji: "🌏", from: 0, to: 1 },
  { letter: "B", title: "Oorzaken + globalisering", emoji: "🔄", from: 2, to: 3 },
  { letter: "C", title: "Hulp en duurzaamheid", emoji: "🤲", from: 4, to: 5 },
  { letter: "D", title: "Toekomst", emoji: "🎯", from: 6, to: 6 },
];

const steps = [
  // ─── Stap 1: Verschillen rijke en arme landen ──────
  {
    title: "Verschillen tussen rijke en arme landen",
    explanation: "**Ontwikkelingslanden** = landen met een laag inkomen per inwoner, vaak onvoldoende basisvoorzieningen.\n\n**Categorieën** (Wereldbank-classificatie):\n• **Hoge-inkomenslanden** (>$13.845 BBP/hoofd): NL, DE, USA, Japan\n• **Hoog-middeninkomen**: China, Brazilië, Mexico, Turkije\n• **Laag-middeninkomen**: India, Indonesië, Egypte\n• **Lage-inkomen** (<$1.135 BBP/hoofd): veel landen Sub-Sahara Afrika\n\n**Indicatoren voor welvaart van een land**:\n\n**1. BBP per hoofd**\n• Totaal nationaal inkomen / aantal inwoners\n• NL: ~$56.000 / Mali: ~$900\n• Hoger = rijker\n• MAAR: zegt niets over verdeling (Saoedi-Arabië hoog gemiddeld, maar veel ongelijkheid)\n\n**2. HDI (Human Development Index)**\n• 0-1 schaal\n• Combineert: inkomen, levensverwachting, onderwijs (jaren scholing)\n• Bredere maat dan BBP alleen\n• NL HDI ~0,94 (top 10) / Niger HDI ~0,40 (laagste)\n\n**3. Levensverwachting**\n• Rijke landen: ~80 jaar\n• Arme landen: 50-65 jaar\n• Verschil door zorg, voeding, hygiëne, oorlog\n\n**4. Kindersterfte (onder 5 jaar per 1000)**\n• Rijke landen: <5 per 1000\n• Armste landen: >50 per 1000\n• Belangrijke graadmeter ontwikkeling\n\n**5. Toegang tot basisvoorzieningen**\n• Schoon water (in NL: 100%)\n• Elektriciteit\n• Sanitair\n• Internet (groeit overal snel)\n\n**6. Gini-coëfficiënt** (ongelijkheid binnen land)\n• 0 = perfect gelijk, 1 = volledig ongelijk\n• NL: 0,28 / Zuid-Afrika: 0,63\n\n**Wereldwijde voortgang**:\n• Aantal mensen in extreme armoede daalde van ~1,9 mrd (1990) naar ~700 mln (2020)\n• Door China + India vooral\n• Sub-Sahara Afrika blijft achter\n• Corona en oorlog Oekraïne sloegen terug (vorig 2 jaar)\n\n**Welvaart in ruime zin** (zie ook h1):\n• Rijk land kan slecht scoren op milieu of geluk\n• Bhutan meet 'Gross National Happiness' — geluk-index\n\n**Belangrijke bronnen**:\n• Wereldbank, IMF, UNDP (UN Development Program), OESO\n• 'Human Development Report' — jaarlijks UN-rapport",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">RIJK vs ARM</text>
<rect x="20" y="40" width="80" height="100" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="60" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">RIJK</text>
<text x="60" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">BBP/hoofd hoog</text>
<text x="60" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">HDI 0,9+</text>
<text x="60" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">leef ~80jr</text>
<text x="60" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">kind &lt;5 per 1000</text>
<rect x="110" y="40" width="80" height="100" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="150" y="58" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">MIDDEN</text>
<text x="150" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">groeiend</text>
<text x="150" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">HDI 0,7</text>
<text x="150" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">leef ~70jr</text>
<text x="150" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">China · BR</text>
<rect x="200" y="40" width="80" height="100" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="240" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">ARM</text>
<text x="240" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">BBP/hoofd laag</text>
<text x="240" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">HDI &lt;0,5</text>
<text x="240" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">leef ~60jr</text>
<text x="240" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">Sub-Sahara</text>
<text x="160" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">extreme armoede daalde 1990: 1,9 mrd → 2020: 700 mln</text>
</svg>`,
    checks: [
      {
        q: "Wat meet de **HDI** (Human Development Index)?",
        options: ["Combinatie inkomen + levensverwachting + onderwijs", "Alleen inkomen", "Aantal toeristen", "Auto's per inwoner"],
        answer: 0,
        wrongHints: [null, "BBP/hoofd is alleen inkomen.", "Toerisme apart.", "Niet HDI."],
      },
      {
        q: "**Levensverwachting** in een arm land ligt vaak rond:",
        options: ["50-65 jaar", "~80 jaar", "~100 jaar", "~30 jaar"],
        answer: 0,
        wrongHints: [null, "Rijk-niveau.", "Uitzondering.", "Te laag."],
      },
      {
        q: "Welk land scoort verwacht **HOOGST** op HDI?",
        options: ["Nederland", "Mali", "Bangladesh", "Niger"],
        answer: 0,
        wrongHints: [null, "Mali laag.", "Bangladesh middel.", "Niger heel laag."],
      },
      {
        q: "Hoeveel mensen in **extreme armoede** wereldwijd (~2020)?",
        options: ["~700 miljoen", "~10 miljoen", "~5 miljard", "Niemand"],
        answer: 0,
        wrongHints: [null, "Te laag — dat is groep 8 van Amsterdam.", "Veel te hoog.", "Helaas wel veel."],
      },
      {
        q: "**Kindersterfte** is goede graadmeter omdat:",
        options: ["Reflecteert toegang zorg, voeding, hygiëne breed", "Het is onbelangrijk", "Alleen relevant voor moeders", "Geen verband met welvaart"],
        answer: 0,
        wrongHints: [null, "Wel belangrijk.", "Voor iedereen.", "Wel direct verband."],
      },
      {
        q: "Wereldbank-categorie 'lage-inkomen-land':",
        options: ["BBP/hoofd onder $1.135/jaar", "Iedereen onder €30k", "Geen automaat", "Geen categorie"],
        answer: 0,
        wrongHints: [null, "Per land, niet per persoon.", "Wel automatisch.", "Wel categorie."],
      },
    ],
  },
  // ─── Stap 2: Welvaart en welzijn ─────────────────
  {
    title: "Welvaart vs welzijn — meer dan alleen geld",
    explanation: "**Welvaart** = materieel, in geld uitdrukbaar (BBP, inkomen, bezit).\n**Welzijn** = bredere kwaliteit van leven (gezondheid, geluk, vrije tijd, milieu, sociale relaties, veiligheid).\n\nEen rijk land kan slecht scoren op welzijn als:\n• Mensen veel werken, weinig tijd voor familie\n• Hoge stress\n• Slecht milieu\n• Veel ongelijkheid (relatief arm voelen)\n\nEen 'minder rijk' land kan goed welzijn hebben:\n• Sterke gemeenschap\n• Beter klimaat\n• Minder stress\n\n**Indices die welzijn meten**:\n\n**1. Better Life Index** (OESO)\n• 11 dimensies: huisvesting, inkomen, banen, gemeenschap, onderwijs, milieu, civiele rechten, gezondheid, tevredenheid, veiligheid, werk-privé-balans\n• Alle landen kunnen vergelijken\n• NL scoort hoog op werk-privé balans\n\n**2. World Happiness Report** (UN)\n• Jaarlijks rapport, gelukscores per land\n• Top: Finland, Denemarken, Noorwegen, IJsland, Nederland\n• Belangrijke factoren: vertrouwen, sociaal vangnet, vrijheid\n\n**3. Gross National Happiness** (Bhutan)\n• Bhutan meet ipv BBP\n• 9 domeinen: psychologisch welzijn, gezondheid, onderwijs, cultuur, etc.\n\n**4. Sustainable Development Index** (SDI)\n• Combineert ontwikkeling + ecologische voetafdruk\n• Meet of land 'duurzaam' welvarend is\n\n**Voorbeeld 2 landen vergelijken**:\n• **Land A** (rijk westers): BBP/hoofd $50k, gelukscore 6,5/10, leeftijd 80, milieu slecht, 2x salaris-ongelijkheid\n• **Land B** (Costa Rica): BBP/hoofd $13k, gelukscore 7,3/10, leeftijd 80, milieu goed, gemeenschap sterk\n\nLand A 'rijker', maar Costa Rica heeft mogelijk meer **welzijn**.\n\n**Easterlin-paradox** (1974):\n• Boven $20-30k inkomen/hoofd: extra inkomen levert nauwelijks meer geluk\n• 'Geld kan kort geluk kopen, maar wordt het nieuwe normaal'\n• Sociale vergelijking matters\n\n**Wat maakt mensen écht gelukkig?**\n• Sociale relaties (familie, vrienden)\n• Gezondheid\n• Doel hebben (zinvol werk)\n• Autonomie (eigen keuzes)\n• Vertrouwen in samenleving\n\n**Voor jou als toekomstige werker**:\n• Salaris is belangrijk (basisbehoefte)\n• Maar werk-privé-balans, collega's, doel ook\n• 'Maximaal salaris' = vaak niet maximaal geluk\n\n**Kritisch denken**:\n• BBP-fixatie kan leiden tot verkeerde beleidskeuzes (niet duurzaam)\n• Welzijns-meting is ook subjectief (wat IS geluk?)\n• Sommigen vinden materieel toch belangrijker",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">WELVAART vs WELZIJN</text>
<rect x="20" y="40" width="135" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">WELVAART</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">materieel</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">BBP, inkomen</text>
<text x="87" y="98" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">in geld</text>
<rect x="165" y="40" width="135" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">WELZIJN</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">geluk · gezondheid</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">milieu · vrije tijd</text>
<text x="232" y="98" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">subjectief</text>
<text x="160" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Indices: HDI · Better Life · GNH</text>
<text x="160" y="155" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">EASTERLIN-PARADOX</text>
<text x="160" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">boven $20-30k: extra geld ≠ meer geluk</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">top geluk: Finland · Denemarken · NL</text>
</svg>`,
    checks: [
      {
        q: "Wat is **welvaart in enge zin**?",
        options: ["Alleen materiële zaken (geld, spullen)", "Alleen geluk", "Alleen gezondheid", "Alles"],
        answer: 0,
        wrongHints: [null, "Geluk = ruime zin.", "Gezondheid = ruime zin.", "Te breed."],
      },
      {
        q: "Welke landen scoren typisch **hoog op geluksindex**?",
        options: ["Finland, Denemarken, Noorwegen, NL", "Saoedi-Arabië", "Rusland", "Noord-Korea"],
        answer: 0,
        wrongHints: [null, "Niet automatisch met olierijkdom.", "Politieke onrust drukt geluk.", "Geen vrijheid → geen geluk-meting."],
      },
      {
        q: "**Easterlin-paradox** zegt:",
        options: ["Boven ~$20-30k extra geld levert nauwelijks meer geluk", "Geld kan altijd geluk kopen", "Geluk is niet meetbaar", "Iedereen wil meer geld"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Wel ruwweg meetbaar.", "Niet wat het zegt."],
      },
      {
        q: "Wat meet de **Better Life Index** (OESO)?",
        options: ["11 dimensies van kwaliteit van leven", "Alleen BBP", "Aantal banen", "Kosten levensonderhoud"],
        answer: 0,
        wrongHints: [null, "Veel breder.", "1 dimensie.", "1 dimensie."],
      },
      {
        q: "Bhutan meet **Gross National Happiness** (GNH) ipv:",
        options: ["BBP — om welzijn ipv welvaart te benadrukken", "Inflatie", "Belasting", "Niets"],
        answer: 0,
        wrongHints: [null, "Inflatie meet nog steeds.", "Wel belasting.", "Wel iets."],
      },
      {
        q: "Wat maakt mensen vooral **gelukkig** (volgens onderzoek)?",
        options: ["Sociale relaties + gezondheid + doel + autonomie", "Alleen geld", "Alleen vakantie", "Alleen status"],
        answer: 0,
        wrongHints: [null, "Boven basis-niveau geen sterke link.", "1 onderdeel.", "1 onderdeel."],
      },
    ],
  },
  // ─── Stap 3: Oorzaken armoede ────────────────────
  {
    title: "Oorzaken van armoede",
    explanation: "Waarom blijven sommige landen arm? **Geen enkel antwoord** — combinatie van factoren:\n\n**1. Slechte landbouw**\n• Droogte / klimaatverandering\n• Geen mest/technieken\n• Lage opbrengst per hectare\n• Veel mensen zijn boer maar verdienen weinig\n\n**2. Weinig industrie**\n• Land exporteert vooral grondstoffen (cacao, koffie, olie)\n• Verwerking gebeurt elders → buitenland verdient meer\n• Bv. cacaoboer in Ghana krijgt 6% van de prijs van een chocoladereep in NL\n\n**3. Slecht onderwijs**\n• Niet alle kinderen naar school\n• Lage gemiddelde scholingsjaren (2-5 jaar)\n• → Lage productiviteit\n• → Lage lonen\n\n**4. Slechte gezondheid**\n• Hoge ziekte (malaria, hiv, TBC, ondervoeding)\n• → Mensen kunnen niet werken\n• Geen goede zorg → meer doden\n\n**5. Politiek**\n• **Corruptie**: hulp + belasting verdwijnt in zakken leiders\n• **Oorlog en conflicten**: onveiligheid voor bedrijven\n• **Slecht bestuur**: onvoorspelbare wetten, geen rechtszekerheid\n• **Dictatuur**: weinig vrijheid → weinig innovatie\n\n**6. Schulden**\n• Land leende veel in het verleden\n• Rente eet inkomen op — geen geld voor scholen / wegen\n• 'Schuldenval' van arme landen\n\n**7. Kolonisatie-erfenis**\n• Grenzen door koloniale machten getrokken zonder oog voor volkeren → conflicten\n• Economie afhankelijk gemaakt van 1 product (mono-cultuur)\n• Brain drain (slimste mensen vertrokken)\n\n**8. Klimaat en geografie**\n• Hete tropen: ziektes, droogtes\n• Geen havens (binnenlandse landen)\n• Ver van handelsroutes\n\n**Vicieuze cirkel armoede**:\n→ Geen geld voor scholen\n→ Geen opgeleide werkers\n→ Geen industrie\n→ Geen belastinginkomsten\n→ Geen geld voor scholen ...\n\nMoeilijk te doorbreken zonder externe hulp of ENORME inspanning.\n\n**Voorbeelden van succesverhalen**:\n• **Zuid-Korea** (1960 armer dan Ghana, nu rijk land — onderwijs + export)\n• **China** (sinds 1980 800 mln mensen uit armoede gehaald)\n• **Singapore** (van haven naar globaal financieel centrum)\n• **India** (groeiende middenklasse, nog veel armoede maar daling)\n\n**En tegenvallers**:\n• **Argentinië** (1900 een van rijkste landen, nu middel — instabiel)\n• **Venezuela** (olie-rijk maar sinds 2014 ineenstorting door slechte beleid)",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">OORZAKEN ARMOEDE</text>
<rect x="20" y="40" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="87" y="60" text-anchor="middle" fill="${COLORS.aanbod}" font-size="10" font-family="Arial">slechte landbouw</text>
<rect x="165" y="40" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="232" y="60" text-anchor="middle" fill="${COLORS.aanbod}" font-size="10" font-family="Arial">weinig industrie</text>
<rect x="20" y="80" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.oranje}" font-size="10" font-family="Arial">slecht onderwijs</text>
<rect x="165" y="80" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="232" y="100" text-anchor="middle" fill="${COLORS.oranje}" font-size="10" font-family="Arial">corruptie · oorlog</text>
<rect x="20" y="120" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="87" y="140" text-anchor="middle" fill="${COLORS.rood}" font-size="10" font-family="Arial">schulden</text>
<rect x="165" y="120" width="135" height="32" rx="4" fill="${COLORS.paper}" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="232" y="140" text-anchor="middle" fill="${COLORS.rood}" font-size="10" font-family="Arial">kolonisatie</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vicieuze cirkel: arm → geen scholen → geen industrie</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.geld}" font-size="10" font-family="Arial" font-weight="bold">success: ZK · China · Singapore</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **vicieuze cirkel van armoede**?",
        options: ["Armoede veroorzaakt zichzelf — bv. geen geld voor scholen, dus geen opgeleide werkers", "Willekeurige situatie", "Alleen externe oorzaken", "Iedereen gelijk arm"],
        answer: 0,
        wrongHints: [null, "Vicieuze cirkel ≠ willekeurig.", "Interne feedback-loop.", "Geen gelijkheid-claim."],
      },
      {
        q: "Waarom kan **export van alleen grondstoffen** een land arm houden?",
        options: ["Verwerking (waar geld in zit) gebeurt elders", "Grondstoffen altijd schaars", "Geen havens", "Vervuiling"],
        answer: 0,
        wrongHints: [null, "Sommige grondstoffen overvloedig.", "Veel landen hebben havens.", "Vervuiling kan issue zijn maar niet hoofdreden."],
      },
      {
        q: "Welk land is een **succesverhaal** van armoede naar welvaart?",
        options: ["Zuid-Korea (1960 armer dan Ghana, nu rijk)", "Niger", "Tsjaad", "Mali"],
        answer: 0,
        wrongHints: [null, "Niger is nog arm.", "Tsjaad is nog arm.", "Mali is nog arm."],
      },
      {
        q: "**Kolonisatie-erfenis** als oorzaak armoede betekent:",
        options: ["Grenzen + economische structuur door koloniale machten gemaakt zonder oog voor volkeren", "Te veel kolonies", "Een soort belasting", "Niet relevant"],
        answer: 0,
        wrongHints: [null, "Niet aantal.", "Geen belasting.", "Wel relevant."],
      },
      {
        q: "Waarom zijn **schulden** zo slecht voor arme landen?",
        options: ["Rente eet jaarlijks geld op dat anders naar onderwijs/zorg ging", "Schulden zijn altijd te groot", "Rente is altijd 0%", "Schulden bestaan niet"],
        answer: 0,
        wrongHints: [null, "Soms haalbaar — opofferingen wel.", "Rente is juist hoog.", "Wel reëel."],
      },
      {
        q: "Wat verklaart het **succes van China sinds 1980**?",
        options: ["Hervormingen, openheid, exportgroei, ~800 mln uit armoede", "Toeval", "Geen verandering", "Communisme onveranderd"],
        answer: 0,
        wrongHints: [null, "Niet toeval — beleid.", "Wel verandering.", "Communistisch label maar markteconomie."],
      },
    ],
  },
  // ─── Stap 4: Ontwikkelingshulp ────────────────────
  {
    title: "Ontwikkelingshulp — werkt het?",
    explanation: "**Ontwikkelingshulp** = rijkere landen helpen armere landen vooruit.\n\n**Soorten hulp**:\n\n**1. Bilaterale hulp**\n• Rechtstreeks van NL naar bv. Mali\n• Vaak met voorwaarden (NL bedrijf moet leveren)\n\n**2. Multilaterale hulp**\n• Via VN, EU, Wereldbank — meerdere landen samen\n• Vermijdt politieke beïnvloeding\n• Bv. UNICEF, WHO, UNDP, World Bank\n\n**3. Particuliere hulp**\n• NGO's: Oxfam Novib, Cordaid, Artsen zonder Grenzen, Save the Children\n• Donaties van burgers + bedrijven\n• Vaak directer naar projecten\n\n**4. Noodhulp**\n• Bij rampen — voedsel, medicijnen, tenten\n• Bv. aardbeving, oorlog, droogte\n• Snel, kort\n\n**5. Structurele hulp**\n• Lange termijn — scholen, ziekenhuizen, watervoorzieningen\n• Vaak meerjarige projecten\n• Effect na 10-20 jaar\n\n**NL-bijdrage**:\n• ~€5 miljard/jaar (~0,5% van BBP)\n• Doel: 0,7% van BBP (UN-norm), maar daar zit NL onder\n• Recent verlaagd door Rutte IV en daarna\n\n**Voor- en nadelen hulp**:\n\n**Voor**:\n• ✓ Helpt bij rampen, vermindert directe nood\n• ✓ Investeringen in onderwijs/zorg leveren lange termijn winst op\n• ✓ Stabiliteit voorkomt migratie en conflict\n• ✓ Eigen markt op termijn (NL-bedrijven kunnen aan deze landen verkopen)\n\n**Tegen**:\n• ✗ Soms verdwijnt het in corruptie\n• ✗ Kan **afhankelijkheid** creëren — lokale producent kan niet concurreren met gratis hulp\n• ✗ Verkeerde prioriteiten (donor besluit, niet ontvanger)\n• ✗ Kortetermijn-projecten zonder duurzaam effect\n\n**Modern denken** (Easterly, Banerjee/Duflo):\n• 'Big push' (massale hulp): vaak teleurstellend\n• 'Randomized controlled trials': test wat WERKELIJK werkt\n• Voorbeeld: muskietennetten gratis = redt levens, kosten laag\n• Voorbeeld: cashtransfers (direct geld geven) = vaak beter dan goederen\n\n**Eerlijke handel (Fair Trade)**:\n• Kopers betalen een eerlijke prijs aan boeren, niet de laagst mogelijke\n• Logo's: Max Havelaar, Fairtrade, UTZ, Rainforest Alliance\n• Voor: koffie, thee, cacao, bananen, bloemen\n• Iets duurder voor consument, beter voor producent\n\n**Beste vorm hulp?**\nGeen consensus. Meeste effectief lijkt: **investering in onderwijs + zorg + infrastructuur** + **handel** + **stabiliteit**.\n\n**Migratie als 'hulp'**:\n• Gastarbeiders sturen geld terug naar familie ('remittances')\n• Wereldwijd ~$700 mrd/jaar — 3x zo groot als alle ontwikkelingshulp\n• Maar: brain drain ook risico",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">ONTWIKKELINGSHULP</text>
<rect x="20" y="40" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="60" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">noodhulp</text>
<rect x="165" y="40" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="232" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">structurele hulp</text>
<rect x="20" y="85" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="105" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">bilateraal</text>
<rect x="165" y="85" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="232" y="105" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">multilateraal</text>
<text x="160" y="145" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">NL: ~€5 mrd / 0,5% BBP</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">UN-norm: 0,7%</text>
<text x="160" y="185" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">remittances: $700 mrd/jaar (3× hulp)</text>
</svg>`,
    checks: [
      {
        q: "**Multilaterale hulp** is:",
        options: ["Via VN, EU, Wereldbank — meerdere landen samen", "Direct van NL naar Mali", "Particuliere hulp", "Noodhulp"],
        answer: 0,
        wrongHints: [null, "Dat is bilateraal.", "Particulier = NGO.", "Noodhulp = bij rampen."],
      },
      {
        q: "Welke NGO is bekend van **noodhulp bij rampen**?",
        options: ["Artsen zonder Grenzen", "Belastingdienst", "Wereldbank", "Rabobank"],
        answer: 0,
        wrongHints: [null, "Geen hulp.", "Wereldbank is multilateraal.", "Bank, geen NGO."],
      },
      {
        q: "Wat is een **risico van gratis hulp**?",
        options: ["Lokale producenten kunnen niet concurreren met gratis goederen", "Gratis is altijd goed", "Mensen ondankbaar", "Te duur"],
        answer: 0,
        wrongHints: [null, "Soms wel risico.", "Niet relevant.", "Gratis ≠ duur voor ontvanger."],
      },
      {
        q: "Wat is **NL ontwikkelingsbudget** als % BBP?",
        options: ["~0,5% (onder de UN-norm van 0,7%)", "~5%", "~50%", "~10%"],
        answer: 0,
        wrongHints: [null, "Te hoog.", "Veel te hoog.", "Te hoog."],
      },
      {
        q: "Wat is **Fair Trade**?",
        options: ["Eerlijke prijs voor boeren in arme landen, hoger dan minimum", "Gratis producten", "Geen handel", "Alleen Europese handel"],
        answer: 0,
        wrongHints: [null, "Wel handel, eerlijker.", "Tegendeel.", "Wereldwijd."],
      },
      {
        q: "**Remittances** — wat zijn dat?",
        options: ["Geld dat migranten naar familie thuis sturen — wereldwijd $700 mrd/jaar", "Een soort belasting", "Toeristisch geld", "Ontwikkelingshulp van overheden"],
        answer: 0,
        wrongHints: [null, "Niet belasting.", "Niet toerisme.", "Niet overheid."],
      },
    ],
  },
  // ─── Stap 5: Duurzame ontwikkeling + SDGs ───────
  {
    title: "Duurzame ontwikkeling en SDG's",
    explanation: "**Duurzame ontwikkeling** = ontwikkeling die voorziet in behoeften van NU zonder die van toekomstige generaties in gevaar te brengen (Brundtland 1987).\n\n**Drie pijlers** (3P's):\n• **People** (mensen): sociale gerechtigheid, gezondheid\n• **Planet** (planeet): milieu, klimaat, biodiversiteit\n• **Profit** (winst): economische ontwikkeling\n\nVerwarringssvalkuil: 'duurzaam' wordt vaak gebruikt voor 'milieuvriendelijk', maar het breder.\n\n**Sustainable Development Goals (SDG's)** — 17 VN-doelen voor 2030:\n\n1. Geen armoede\n2. Geen honger\n3. Goede gezondheid en welzijn\n4. Kwaliteitsonderwijs\n5. Gendergelijkheid\n6. Schoon water en sanitair\n7. Betaalbare en duurzame energie\n8. Eerlijk werk en economische groei\n9. Industrie, innovatie en infrastructuur\n10. Verminderde ongelijkheid\n11. Duurzame steden\n12. Verantwoorde consumptie en productie\n13. Klimaatactie\n14. Leven onder water\n15. Leven op land (biodiversiteit)\n16. Vrede, gerechtigheid, sterke instellingen\n17. Partnerschap voor doelen\n\n**Voor élk land** — ook NL heeft hier nog werk aan (klimaat, ongelijkheid, stikstof).\n\n**Microkrediet**:\n• Kleine leningen (€50-€500) voor ondernemers in arme landen\n• **Muhammad Yunus** (Bangladesh, Nobelprijs 2006) — Grameen Bank\n• Vaak voor vrouwen (terugbetaalt beter, investeren in gezin)\n• Werkt: kleine investering → eigen bedrijfje → uit armoede\n• Critici: ook risico op schuldenval bij hoge rentes\n\n**Klimaat en arme landen**:\n• Veroorzaken weinig CO2 maar lijden meeste\n• Droogtes, stijgende zeespiegel, extreme weer\n• 'Loss and damage'-fonds: rijke landen betalen aan arme voor klimaatschade\n\n**Tech als hefboom**:\n• Mobiele telefoon: 90%+ heeft er een, ook in arme landen\n• Mobiel bankieren (M-Pesa Kenya): voor wie geen bankrekening kan\n• Online onderwijs (Khan Academy etc.)\n• Solar panels worden goedkoop genoeg voor afgelegen dorpen\n\n**'Leapfrogging'**:\n• Arme landen slaan stappen over\n• Bv. geen vaste telefoon → direct mobiel\n• Geen kolencentrales → direct zon/wind\n\n**Kritiek op SDG's**:\n• Te veel doelen (17!) → moeilijk focus\n• Geen sterke handhaving\n• Voortgang is gemengd: sommige doelen halen, andere niet\n\n**Wat KUN je doen**:\n• Bewust kopen (Fair Trade)\n• Minder verspillen\n• Doneren aan goede doelen\n• Stem op partijen met sterk ontwikkelings-/klimaat-beleid\n• Carrière met impact",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">DUURZAME ONTWIKKELING</text>
<rect x="20" y="40" width="280" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="160" y="60" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">3P's: PEOPLE · PLANET · PROFIT</text>
<text x="160" y="72" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Brundtland 1987</text>
<rect x="20" y="85" width="280" height="50" rx="6" fill="rgba(255,213,79,0.10)" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="160" y="103" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">17 SDG's voor 2030</text>
<text x="160" y="118" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">geen armoede · gezond · onderwijs · klimaat</text>
<text x="160" y="130" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">voor élk land</text>
<rect x="20" y="145" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="87" y="163" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">MICROKREDIET</text>
<text x="87" y="177" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">€50-500 voor ondernemers</text>
<rect x="165" y="145" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="232" y="163" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">LEAPFROGGING</text>
<text x="232" y="177" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">stappen overslaan</text>
<text x="160" y="208" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">M-Pesa · Khan Academy · solar</text>
</svg>`,
    checks: [
      {
        q: "Wat zijn **SDG's**?",
        options: ["Sustainable Development Goals — 17 VN-doelen voor 2030", "Sociale Druk Geld", "Schoolse Doelen Groep", "Subsidie Donatie Geld"],
        answer: 0,
        wrongHints: [null, "Internationale Engelse afkorting.", "Niet onderwijs-specifiek.", "Geen donaties."],
      },
      {
        q: "Wat zijn de **3 P's** van duurzaamheid?",
        options: ["People, Planet, Profit", "Pro, Plus, Premium", "Plant, Plant, Plant", "Plan, Pay, Promote"],
        answer: 0,
        wrongHints: [null, "Onzin.", "Onzin.", "Niet 3 P's."],
      },
      {
        q: "**Microkrediet** werkt vooral voor:",
        options: ["Beginnende kleine ondernemers in arme landen", "Internationale grote bedrijven", "NL-studenten", "Hele dorpen tegelijk"],
        answer: 0,
        wrongHints: [null, "Grote bedrijven hebben gewone leningen.", "DUO doet dat in NL.", "Per persoon."],
      },
      {
        q: "Wie won de **Nobelprijs** voor microkrediet (2006)?",
        options: ["Muhammad Yunus", "Mark Rutte", "Donald Trump", "Christine Lagarde"],
        answer: 0,
        wrongHints: [null, "Geen Nobelprijs.", "Geen Nobelprijs.", "ECB-president."],
      },
      {
        q: "**Leapfrogging** is:",
        options: ["Arme landen slaan stappen over (geen vaste tel → mobiel)", "Een kinderspel", "Belastingontwijking", "Soort hulp"],
        answer: 0,
        wrongHints: [null, "Niet relevant hier.", "Niet hetzelfde.", "Geen specifieke hulpvorm."],
      },
      {
        q: "**Klimaat en arme landen**:",
        options: ["Veroorzaken weinig CO2 maar lijden meest (droogtes, zeespiegel)", "Geen verband", "Profiteren van klimaat", "Weten van niets"],
        answer: 0,
        wrongHints: [null, "Wel sterk verband.", "Tegendeel.", "Velen weten goed."],
      },
    ],
  },
  // ─── Stap 6: Eerlijke handel en consumeer-keuzes ──────
  {
    title: "Eerlijke handel en jouw keuzes als consument",
    explanation: "Als consument heb je **macht**. Wat je koopt, beïnvloedt wat geproduceerd wordt en hoe.\n\n**Eerlijke handel (Fair Trade)** in detail:\n\n**Hoe het werkt**:\n• Boeren in arme landen organiseren in coöperatie\n• Kopers (Westerse bedrijven) betalen **hogere prijs** + **vaste minimumprijs** (zelfs als wereldprijs laag)\n• Extra premie voor sociale projecten in dorp (school, kliniek)\n• Garantie geen kinderarbeid + veilig werk\n\n**Belangrijkste keurmerken**:\n• **Max Havelaar** / **Fairtrade** — koffie, thee, cacao, fruit\n• **UTZ** (nu Rainforest Alliance) — koffie, thee, cacao\n• **Rainforest Alliance** — milieu + sociaal\n• **GOTS** — duurzame textiel\n• **MSC** — visserij\n• **EU-bio** — biologisch\n• **B-Corp** — bedrijven die hele organisatie sociaal+milieu doen\n\n**Voorbeeld koffie**:\n• Reguliere koffie: boer in Ethiopië krijgt $0,02 per kop (1%!)\n• Fair Trade: $0,08 (4%)\n• Verschil voor jou: ~10 cent per kop. Voor boer: dubbel salaris.\n\n**Kritiek op Fair Trade**:\n• Niet alle boeren kunnen meedoen (organisatie-eisen)\n• Hogere prijs leidt soms tot OVERPRODUCTIE\n• Marketing > daadwerkelijk effect (sommige bedrijven 'fair-washing')\n\n**Andere bewuste keuzes**:\n\n**1. Lokaal kopen**\n• Minder transport-CO2\n• Steun lokale economie\n• Maar: niet alles kan lokaal (koffie, banaan)\n\n**2. Tweedehands**\n• Vinted, Marktplaats, kringloop\n• Minder grondstof-gebruik\n• Goedkoper\n\n**3. Repareren in plaats van weggooien**\n• Repair Café\n• Right to Repair (EU-wetgeving in maak)\n• Spullen langer gebruiken\n\n**4. Minder vlees**\n• Vlees-productie veel CO2 + water + ruimte\n• 1 kg rundvlees ~15.000 liter water\n• 'Flexitariër': minder, niet geen\n\n**5. Energie besparen**\n• Verwarming 1°C lager = 6% minder gas\n• LED-lampen\n• Beter geïsoleerd huis\n\n**'Stem met je portemonnee'**:\n• Bedrijven volgen consumenten\n• Massa-keuzes maken verschil\n• Maar: niet ALLES op individu — beleid + bedrijven hebben grootste impact\n\n**Greenwashing**:\n• Bedrijven die zich groener voordoen dan ze zijn\n• Bv. olie-bedrijven met 'duurzaam'-reclames\n• Wees kritisch — kijk naar ACTIES, niet woorden\n\n**Voor jouw dagelijks leven**:\n• Koffie/thee: kies Fair Trade als je het kan betalen\n• Kleren: koop minder, beter kwaliteit, tweedehands\n• Eten: minder vlees, minder verspillen\n• Reizen: trein > vliegtuig\n• Spullen: lang gebruiken, repareren",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">JOUW MACHT ALS CONSUMENT</text>
<rect x="20" y="40" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="60" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">FAIR TRADE</text>
<text x="87" y="72" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Max Havelaar · UTZ</text>
<rect x="165" y="40" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="232" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">LOKAAL</text>
<text x="232" y="72" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">minder transport</text>
<rect x="20" y="85" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="105" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">2EHANDS</text>
<text x="87" y="117" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Vinted · Marktplaats</text>
<rect x="165" y="85" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="232" y="105" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">REPAREREN</text>
<text x="232" y="117" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Repair Café</text>
<text x="160" y="155" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">⚠ pas op greenwashing</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">stem met je portemonnee — én met je stem</text>
</svg>`,
    checks: [
      {
        q: "Wat doet **Fair Trade** voor boeren?",
        options: ["Eerlijke prijs (hoger dan minimum) + premie voor sociale projecten", "Gratis goederen", "Korting voor consument", "Belasting"],
        answer: 0,
        wrongHints: [null, "Niet gratis.", "Tegendeel.", "Geen belasting."],
      },
      {
        q: "Welk **keurmerk** gaat over koffie/cacao?",
        options: ["Max Havelaar / Fairtrade / UTZ", "EU-bio", "MSC", "Energy Star"],
        answer: 0,
        wrongHints: [null, "EU-bio = biologisch.", "MSC = vis.", "Niet voedsel."],
      },
      {
        q: "Wat is **greenwashing**?",
        options: ["Bedrijven doen zich groener voor dan ze zijn", "Wassen met groen wasmiddel", "Een soort belasting", "Echt duurzaam beleid"],
        answer: 0,
        wrongHints: [null, "Niet letterlijk wassen.", "Geen belasting.", "Tegendeel."],
      },
      {
        q: "Wat is een **flexitariër**?",
        options: ["Iemand die minder vlees eet, maar niet helemaal geen", "Veganist", "Vleeseter", "Iemand die alleen vis eet"],
        answer: 0,
        wrongHints: [null, "Veganist eet helemaal geen dierlijk.", "Niet hetzelfde.", "Pescatarier."],
      },
      {
        q: "Hoeveel water kost **1 kg rundvlees** ongeveer?",
        options: ["~15.000 liter", "~10 liter", "~100 liter", "~1 miljoen liter"],
        answer: 0,
        wrongHints: [null, "Veel te weinig.", "Veel te weinig.", "Te veel."],
      },
      {
        q: "**'Stem met je portemonnee'** betekent:",
        options: ["Wat je koopt beïnvloedt wat bedrijven produceren", "Letterlijk stemmen met geld", "Onzin", "Niets"],
        answer: 0,
        wrongHints: [null, "Metafoor.", "Wel betekenis.", "Wel betekenis."],
      },
    
      {
        q: "🎓 _Echt examen VMBO-GL en TL 2024 tijdvak 2, vraag 28_\n\nDe inkoop en verkoop van fairtrade producten is een vorm van particuliere ontwikkelingshulp. Hoe noemen we deze hulp?",
        options: ["bilaterale hulp", "noodhulp", "structurele hulp"],
        answer: 2,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 _Echt examen VMBO-GL en TL 2024 tijdvak 2, vraag 28_",
      },
    
      {
        q: "🎓 _Echt examen VMBO-GL en TL 2024 tijdvak 2, vraag 32_\n\nMarcia gaat ook fairtrade koffie verkopen. Marcia: \"Als alle restaurants hier fairtrade koffie zouden verkopen, is dat echt een bijdrage aan een meer eerlijke verdeling van de inkomens in de wereld.\" Hieronder staan vijf economische verschijnselen. 1 de koffieboer krijgt een eerlijke prijs 2 de koffieboeren kunnen meer investeren 3 er ontstaat meer werkgelegenheid 4 de werknemers ontvangen meer inkomen 5 de inkomens in de wereld worden gelijkmatiger verdeeld In welke regel staan de verschijnselen zo, dat er een logische gedachtegang ontstaat?",
        options: ["12345", "12435", "13245", "13425", "14235 F 14325 Rijken worden rijker De familie Boot is blij. Tijdens de kredietcrisis in 2008 was hun vermogen gedaald, maar gelukkig stijgt dankzij economische groei hun vermogen weer langzaam. Je ber"],
        answer: 0,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 _Echt examen VMBO-GL en TL 2024 tijdvak 2, vraag 32_",
      },
    ],
  },
  // ─── Stap 7: Toekomst ─────────────────────────
  {
    title: "Toekomst — wat brengt de komende decennia?",
    explanation: "Hoe kan ontwikkeling de komende 30 jaar gaan? Geen kristallen bol, maar trends + uitdagingen:\n\n**Positieve trends**:\n\n**1. Aantal mensen in extreme armoede blijft dalen**\n• Van 1,9 mrd (1990) naar ~700 mln (2020)\n• Doel SDG: nul in 2030\n• Realistisch: nog wel honderden miljoenen, maar steeds minder\n\n**2. Gezondheidswinst**\n• Levensverwachting wereldwijd ~73 jaar (was 50 in 1950)\n• Kindersterfte halveerde\n• Vaccinaties bereiken meer kinderen\n\n**3. Technologie democratiseert**\n• Mobiele telefoon overal\n• Online onderwijs (Khan Academy, Coursera, YouTube)\n• Solar wordt goedkoop genoeg voor dorpen\n\n**4. Onderwijs groeit**\n• Vooral meisjes-onderwijs (was decennialang achter)\n• Geletterdheid stijgt wereldwijd\n\n**Uitdagingen**:\n\n**1. Klimaatverandering**\n• Arme landen lijden het meest (droogte, overstromingen)\n• Migratie zal groter worden\n• Energietransitie nodig (van kolen → zon/wind)\n• 'Just transition': niemand achterlaten\n\n**2. Ongelijkheid stijgt vaak**\n• Binnen landen vaak groter\n• 1% rijksten heeft veel groter aandeel sinds 1980\n• Tussen landen wel gedaald (China inhalen)\n\n**3. Demografie**\n• Afrika: jonge bevolking, snel groeiend (van 1,4 mrd nu naar 2,5 mrd in 2050)\n• Westen + Azië: vergrijzing\n• Migratie en arbeidsmarkt-shifts\n\n**4. Geopolitiek**\n• China-VS spanning\n• Rusland-Oekraïne oorlog impact wereldwijd\n• Globalisering wordt 'reshoring' (productie terug)\n\n**5. Schulden**\n• Veel arme landen post-corona zwaar in schuld\n• Risico op nieuwe schuldencrisis\n\n**6. Pandemieën**\n• Covid showed kwetsbaarheid\n• Volgende kan nog erger\n\n**7. AI en automatisering**\n• Veel banen verdwijnen door AI\n• Vooral routinematige administratie + kassa's\n• Maar ook nieuwe banen erbij\n\n**Wat KAN écht helpen?**\n• **Onderwijs voor meisjes** (#1 effect op ontwikkeling)\n• **Cash-transfers** (direct geld geven, mensen weten zelf wat ze nodig hebben)\n• **Investering in zorg** (basisgezondheid)\n• **Stabiliteit + goede instituties** (rechtvaardigheid, anti-corruptie)\n• **Open handel** (wel met eerlijke regels)\n• **Klimaatactie** wereldwijd\n\n**Voor jou als toekomstige burger/werker**:\n• Wereld is veranderlijker dan ooit\n• Levenslang leren is cruciaal\n• Internationaal denken (problemen + oplossingen grenzen-overschrijdend)\n• Bewuste consumenten-keuzes maken verschil\n• Stem op politici met visie + ethiek\n• Eventueel werk met impact (development, klimaat, gezondheid)\n\n**Hoopvol**: laatste 50 jaar is wereldwijd bijna alles beter geworden — armoede, gezondheid, onderwijs. Vaak vergeten in nieuws (slechte gebeurtenissen krijgen aandacht).",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">DE TOEKOMST</text>
<rect x="20" y="40" width="135" height="55" rx="6" fill="rgba(105,240,174,0.10)" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">+ TRENDS</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">armoede daalt</text>
<text x="87" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">gezondheid · tech</text>
<rect x="165" y="40" width="135" height="55" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">− UITDAGINGEN</text>
<text x="232" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">klimaat · oorlog</text>
<text x="232" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">ongelijkheid · AI</text>
<text x="160" y="120" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">WAT WERKT</text>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">onderwijs (vooral meisjes)</text>
<text x="160" y="152" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">cash-transfers · zorg · stabiliteit</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">de wereld is beter dan we denken</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">levenslang leren · internationaal denken</text>
</svg>`,
    checks: [
      {
        q: "Wat zal in arme landen vooral het **MEEST** helpen?",
        options: ["Onderwijs (vooral voor meisjes)", "Meer wapens", "Meer luxe-import", "Geen verandering"],
        answer: 0,
        wrongHints: [null, "Wapens vergroten conflict.", "Luxe-import niet basis.", "Wel verandering nodig."],
      },
      {
        q: "Wereldwijde **levensverwachting** is nu ongeveer:",
        options: ["~73 jaar", "~30 jaar", "~50 jaar", "~100 jaar"],
        answer: 0,
        wrongHints: [null, "Te laag.", "Was 1950-niveau.", "Uitzonderlijk."],
      },
      {
        q: "Welke regio heeft **snelste bevolkingsgroei** komende decennia?",
        options: ["Afrika", "Europa", "Japan", "Noord-Amerika"],
        answer: 0,
        wrongHints: [null, "Krimp/vergrijzing.", "Krimp.", "Stagnatie."],
      },
      {
        q: "Hoeveel mensen leefden in **extreme armoede** in 1990 vs 2020?",
        options: ["1,9 mrd → ~700 mln (sterke daling)", "Geen verandering", "Toename", "Onbekend"],
        answer: 0,
        wrongHints: [null, "Wel verandering.", "Tegendeel.", "Wel cijfers."],
      },
      {
        q: "Een **uitdaging** voor de toekomst is:",
        options: ["Klimaatverandering — arme landen meest geraakt", "Te weinig technologie", "Geen ongelijkheid meer", "Geen problemen"],
        answer: 0,
        wrongHints: [null, "Tech overal.", "Ongelijkheid bestaat.", "Wel uitdagingen."],
      },
      {
        q: "Wat is een tip voor jouw **rol als toekomstige burger**?",
        options: ["Levenslang leren + internationaal denken + bewuste keuzes", "Niet stemmen", "Niet werken", "Geen interesse"],
        answer: 0,
        wrongHints: [null, "Stemmen heeft impact.", "Werken levert bijdrage.", "Interesse helpt."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeOntwikkelingslanden = {
  id: "pincode-ontwikkelingslanden",
  title: "Ontwikkelingslanden",
  emoji: "🌏",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk 8",
  intro:
    "Hoofdstuk 8 van Pincode 7e ed. VMBO-GT 4: rijk vs arm, welvaart vs welzijn, oorzaken armoede, ontwikkelingshulp + Fair Trade, duurzame ontwikkeling + 17 SDG's, microkrediet, en de toekomst. 7 stappen examenvoorbereiding.",
  triggerKeywords: [
    "ontwikkelingsland", "ontwikkelingslanden", "arme landen", "rijke landen",
    "hdi", "human development index", "bbp per hoofd",
    "wereldbank", "imf", "undp", "wto",
    "levensverwachting", "kindersterfte", "extreme armoede",
    "welvaart in ruime zin", "welvaart in enge zin", "welzijn", "geluk",
    "better life index", "world happiness report", "easterlin",
    "vicieuze cirkel", "armoede",
    "kolonisatie", "kolonisatie-erfenis", "corruptie", "schuldenval", "brain drain",
    "zuid-korea", "china", "singapore", "venezuela",
    "ontwikkelingshulp", "bilateraal", "multilateraal", "noodhulp", "structurele hulp",
    "ngo", "oxfam", "artsen zonder grenzen", "unicef", "remittances",
    "fair trade", "max havelaar", "utz", "rainforest alliance", "msc", "gots",
    "duurzame ontwikkeling", "brundtland", "people planet profit",
    "sdg", "sustainable development goals", "millennium goals",
    "microkrediet", "yunus", "grameen bank",
    "klimaat", "klimaatverandering", "loss and damage",
    "leapfrogging", "m-pesa", "khan academy",
    "tweedehands", "vinted", "repair cafe", "right to repair",
    "greenwashing", "flexitariër", "vegan",
    "pincode hoofdstuk 8", "pincode hoofdstuk h",
  ],
  chapters,
  steps,
};

export default pincodeOntwikkelingslanden;
