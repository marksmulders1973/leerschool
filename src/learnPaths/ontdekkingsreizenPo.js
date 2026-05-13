// Leerpad: Ontdekkingsreizen - groep 6-8 geschiedenis/aardrijkskunde.
// Cito-relevant Tijdvak 5. 1F. 4 stappen.

const stepEmojis = ["🧭", "⛵", "🇳🇱", "🏆"];

const chapters = [
  { letter: "A", title: "Waarom op reis?", emoji: "🧭", from: 0, to: 0 },
  { letter: "B", title: "Columbus + Vasco da Gama", emoji: "⛵", from: 1, to: 1 },
  { letter: "C", title: "Nederlandse ontdekkers", emoji: "🇳🇱", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Waarom ontdekkingsreizen?",
    explanation:
      "Vanaf **1450** gingen Europeanen op zoek naar onbekende werelddelen. Deze periode heet **'Tijd van Ontdekkers en Hervormers'** *(Tijdvak 5, 1500-1600)*.\n\n**Waarom?**\n\n**1. Specerijen** 🌶️\n• Peper, kaneel, kruidnagel, nootmuskaat = duur in Europa.\n• Kwamen uit **Azië** *(India, Indonesië)*.\n• Maar de **landroute** *(Zijderoute)* werd geblokkeerd door Turken na val Constantinopel *(1453)*.\n• Oplossing: zoek **zeeroute naar Azië**.\n\n**2. Goud + rijkdom** 💰\n• Hoop op nieuwe schatten.\n• Goud + zilver uit verre landen.\n\n**3. Kennis** 📚\n• Wetenschappelijke nieuwsgierigheid.\n• In **Renaissance** *(herontdekking oude kennis)* nieuwe interesse in wereld.\n\n**4. Religie** ✝️\n• Christendom verspreiden *('heidenen' bekeren)*.\n• Vooral katholieke Spanjaarden + Portugezen.\n\n**5. Concurrentie** 🇪🇺\n• Spanje, Portugal, Engeland, Nederland — allemaal wilden eerst zijn.\n\n**Wat hadden ze nodig?**\n\n**Schepen** ⛵:\n• **Karveel** *(Portugees)*: snel, klein, ~25 m.\n• **Galjoen**: groter, voor handel + oorlog.\n• Later: Nederlandse **fluitschip** + **VOC-schip**.\n\n**Navigatie** 🧭:\n• **Kompas** *(uit China, vanaf 12e eeuw in Europa)* — wijst noord.\n• **Astrolabium** *(Arabisch)*: bepaalt breedtegraad met sterren/zon.\n• **Logboek** + dagboek.\n• **Kaarten** *(verbeterd door Mercator, NL, 1569)*.\n• Sterren *(Poolster = noord)*.\n\n**Bewaring eten** 🥖:\n• Gezouten vlees + vis *(houdbaar)*.\n• Hardtack *(droog brood)*.\n• Bier ipv water *(blijft langer goed)*.\n• Maar — **scheurbuik** door tekort vitamine C → veel doden.\n• Later: limoen / zuurkool tegen scheurbuik.\n\n**Gevaren**:\n• Stormen + schipbreuk.\n• Tekort water + eten.\n• Scheurbuik.\n• Aanvallen door piraten of vijanden.\n• Onbekende ziektes *(malaria)*.\n• Op de helft van reizen kwam meer dan **30% niet thuis**.\n\n**Cito-feitje**:\n**Portugal** en **Spanje** waren eerste landen — daarom veel Zuid-Amerika spreekt Spaans of Portugees. **Verdrag van Tordesillas** *(1494, gesloten door paus)* verdeelde de niet-Europese wereld tussen beide: Spanje krijgt west, Portugal krijgt oost. Brazilië = Portugees, rest van Zuid-Amerika = Spaans.",
    checks: [
      {
        q: "Waarom wilden Europeanen naar **Azië**?",
        options: ["Specerijen + goud + handel", "Toerisme", "Vakantie", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Bestond nog niet.", "Niet.", "Wel reden."],
        uitlegPad: {
          stappen: [
            { titel: "Wat waren specerijen?", tekst: "**Specerijen** zoals peper, kruidnagel, kaneel, nootmuskaat kwamen uit Azië (vooral Indonesië). In 1500 waren ze ENORM duur in Europa — voor smaak én om voedsel langer te bewaren (vóór koelkasten)." },
            { titel: "Goud + zilver", tekst: "Europese landen waren arm aan edelmetalen. Ze hoopten goud + zilver te vinden in onbekende landen. Spanje vond enorme hoeveelheden in Zuid-Amerika." },
            { titel: "Handel = macht", tekst: "Wie de handel met Azië controleerde, werd rijk. Daarom investeerden koningen + steden in dure expedities. Eerst land-route (Zijderoute) via Turkije — toen die werd geblokkeerd, ZEE-route bedacht." },
          ],
          woorden: [
            { woord: "specerijen", uitleg: "Dure kruiden uit Azië (peper, kaneel, kruidnagel)." },
            { woord: "Zijderoute", uitleg: "Land-handelsroute tussen Europa en Azië." },
          ],
          theorie: "Cito-feit: 1453 viel Constantinopel (huidig Istanbul) in handen van Turken. Daardoor was Zijderoute moeilijk → ZEE-route via Afrika was nieuwe doel. Vasco da Gama lukte het in 1498.",
          voorbeelden: [
            { type: "stap", tekst: "1 pond peper in 1500 = soms 1 maand-loon waard. Daarom 'peperduur'." },
            { type: "stap", tekst: "VOC (NL Oost-Indische Compagnie, 1602) verdiende fortuin met specerijen-handel uit Indonesië." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Drie motieven: specerijen (smaak/bewaring), goud (rijkdom), handel (economische macht)." }],
          niveaus: {
            basis: "Europeanen wilden specerijen, goud, en handel met Azië.",
            simpeler: "Kruiden uit Azië = duur in Europa = zoeken naar zee-route.",
            nogSimpeler: "Peper = duur.",
          },
        },
      },
      {
        q: "Wat is een **astrolabium**?",
        options: ["Apparaat voor breedtegraad via sterren", "Schip", "Kaart", "Voedsel"],
        answer: 0,
        wrongHints: [null, "Klopt — Arabisch.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wat is **scheurbuik**?",
        options: ["Vitamine C-tekort ziekte", "Maagpijn", "Hoofdpijn", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt — beslag op zeereis.", "Niet specifiek.", "Niet.", "Wel."],
      },
      {
        q: "Wat verdeelde **Verdrag van Tordesillas**?",
        options: ["Wereld tussen Portugal + Spanje", "Europa", "Azië", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt — 1494.", "Niet primair.", "Niet alleen.", "Wel."],
      },
    ],
  },
  {
    title: "Bekende ontdekkers — Columbus + Vasco da Gama",
    explanation:
      "**Christoffel Columbus** *(1451-1506, Italiaans)*:\n• Voer voor **Spanje** *(in dienst van koningin Isabella)*.\n• Wilde **westwaarts** naar **Indië** *(omdat aarde rond is)*.\n• Vertrok 1492 met 3 schepen: **Niña, Pinta, Santa María**.\n• Na 2 maanden zee land gezien.\n• Landde in **Caraïbisch gebied** *(Bahamas)*.\n• Dacht dat hij in Indië was — noemde inwoners 'indianen' *(fout, blijft nog steeds!)*.\n• In werkelijkheid: **Nieuwe Wereld** *(Amerika)*.\n• 4 reizen gemaakt 1492-1502.\n\n**Wat gebeurde verder?**\n• Spaanse + Portugese **veroveraars** *(conquistadores)* volgden.\n• **Hernán Cortés** versloeg Azteken in Mexico *(1519-1521)*.\n• **Francisco Pizarro** versloeg Inca's in Peru *(1532)*.\n• Indianen stierven in massa's aan **Europese ziektes** *(pokken, mazelen)* + geweld.\n• ~80-90% van inwoners stierf in eerste 100 jaar — vreselijke gevolg van 'ontdekking'.\n\n**Vasco da Gama** *(1469-1524, Portugees)*:\n• Voer **rond Afrika** naar **India**.\n• Vertrok 1497, kwam aan in **Calicut** *(India)* in 1498.\n• Eerste Europeaan die zeeroute naar Azië vond.\n• Bracht specerijen mee terug → enorme winst.\n• Begon Portugese handelsmonopolie in Azië.\n\n**Ferdinand Magellan** *(1480-1521, Portugees voor Spanje)*:\n• Wilde **rond de aarde** zeilen.\n• Vertrok 1519 met 5 schepen.\n• Magellan zelf stierf in **Filipijnen** *(1521)*.\n• Eén schip terug naar Spanje 1522 — **eerste schip dat de aarde rondzeilde**.\n• Bewees dat aarde rond is + dat oceanen verbonden zijn.\n\n**Andere bekende ontdekkers**:\n\n**Bartolomeu Dias** *(Portugees)*: Eerste rond Kaap de Goede Hoop *(1488)*.\n**Amerigo Vespucci** *(Italiaans)*: Verkende Zuid-Amerika. **Amerika** is naar hem genoemd!\n**John Cabot** *(Italiaans voor Engeland)*: Newfoundland *(1497)*.\n**Jacques Cartier** *(Frans)*: Canada *(1534)*.\n**James Cook** *(Brits, 1700s)*: Australië + Nieuw-Zeeland + Hawaii.\n\n**Wat ontdekten ze + waarvoor?**\n\n**Voor Europeanen**: nieuwe handel, rijkdom, kennis, mensen om te koloniseren.\n\n**Voor inheemse bevolking**: ramp.\n• Massasterfte door ziekte.\n• Slavernij.\n• Verlies van land + cultuur.\n• Geweld + onderdrukking.\n\n**Slavenhandel** *(driehoeksvaart 1500-1800)*:\n• Europa → Afrika: wapens, alcohol, stof.\n• Afrika → Amerika: **mensen** *(slaven)*, ~12 miljoen Afrikanen.\n• Amerika → Europa: suiker, koffie, katoen, tabak.\n• Vreselijke periode.\n• NL deel — VOC + WIC handelden ook in slaven.\n• Slavernij in NL-kolonien afgeschaft 1863.\n\n**Cito-feitje**:\nIn 2022 boden NL-premier + koning excuses aan voor **slavernijverleden** *(150 jaar na afschaffing)*. Tijdens **Keti Koti** *(1 juli)* wordt slavernij herdacht.",
    checks: [
      {
        q: "Welk jaar **Columbus** in Amerika?",
        options: ["1492", "1500", "1300", "1700"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Iets later.", "Te vroeg.", "Te laat."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Columbus?", tekst: "**Christoffel Columbus** (1451-1506) was een Italiaanse zeevaarder in Spaanse dienst. Hij wilde naar Azië varen via het WESTEN — dacht dat dit korter was." },
            { titel: "1492: aankomst in 'Amerika'", tekst: "Op **12 oktober 1492** kwam Columbus aan op een eiland in de Bahama's. Dacht dat hij in India was — daarom heten inheemse Amerikanen 'indianen' (verkeerde naam, eigenlijk geen India)." },
            { titel: "Belangrijk jaartal", tekst: "**1492** wordt gezien als START van het 'Ontdekkings'-tijdperk (vanuit Europees perspectief). Begint kolonisatie van Amerika door Spanje. Heeft enorme gevolgen voor inheemse volken." },
          ],
          woorden: [
            { woord: "Columbus", uitleg: "Zeevaarder die 1492 in Amerika kwam (dacht: India)." },
            { woord: "1492", uitleg: "Belangrijke jaartal — start Europese 'ontdekking' Amerika." },
          ],
          theorie: "Cito-feit: 1492 = vaak gezien als overgang van Middeleeuwen naar Nieuwe Tijd. Maar opgepast — 'ontdekken' is Europees perspectief. Indianen waren er al duizenden jaren. Tegenwoordig vinden veel mensen 'ontdekking' geen goed woord — beter: 'contact'.",
          voorbeelden: [
            { type: "stap", tekst: "Columbus maakte 4 reizen (1492, 1493, 1498, 1502). Stierf in armoede in 1506." },
            { type: "stap", tekst: "Aankomstdag 12 oktober = vroeger 'Columbusdag' in VS. Nu vaak vervangen door Inheemse Volkerendag." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "1492 = vaak het begin van moderne wereldgeschiedenis (vanuit Europees oogpunt)." }],
          niveaus: {
            basis: "Columbus kwam in 1492 in Amerika (dacht: India).",
            simpeler: "1492: westwaarts van Spanje → kwam in Caraïben aan.",
            nogSimpeler: "1492.",
          },
        },
      },
      {
        q: "Wie ging **rond Afrika naar India**?",
        options: ["Vasco da Gama (1498)", "Columbus", "Magellan", "Cook"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Westwaarts.", "Rond aarde.", "Australië."],
      },
      {
        q: "Wie zeilde **eerst rond aarde**?",
        options: ["Magellan-expeditie (1519-1522)", "Columbus", "Cabot", "Dias"],
        answer: 0,
        wrongHints: [null, "Klopt — Magellan zelf stierf onderweg.", "Niet rond.", "Niet rond.", "Niet."],
      },
      {
        q: "Wanneer **slavernij in NL afgeschaft**?",
        options: ["1863", "1700", "1492", "2022"],
        answer: 0,
        wrongHints: [null, "Klopt — Keti Koti.", "Veel later.", "Begon kort daarna.", "Excuses, geen afschaffing."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is slavernij?", tekst: "**Slavernij** = mensen worden GEDWONGEN gehouden als 'eigendom' en moeten zonder loon werken. Mocht je niet gewoon stoppen. Werd vooral toegepast op Afrikanen in koloniën." },
            { titel: "Afschaffing 1863", tekst: "Nederland schafte slavernij af op **1 juli 1863**. Dit gebeurde vooral in de NL-koloniën (Suriname + Caraïben). Maar — slaven moesten nog 10 jaar 'staatstoezicht' werken voordat ze écht vrij waren (tot 1873)." },
            { titel: "Keti Koti = 'kettingen losgemaakt'", tekst: "**1 juli** wordt nu gevierd als **Keti Koti** (Surinaams voor 'kettingen losgemaakt'). Officiële herdenking. In 2022 boden NL premier Rutte + koning Willem-Alexander excuses aan voor het slavernij-verleden." },
          ],
          woorden: [
            { woord: "slavernij", uitleg: "Mensen gedwongen als eigendom houden — verboden." },
            { woord: "Keti Koti", uitleg: "Vieringdag afschaffing slavernij (1 juli 1863)." },
          ],
          theorie: "Cito-feit: NL kwam relatief LAAT met afschaffing. UK: 1833. Frankrijk: 1848. VS: 1865 (na burgeroorlog). NL was 1863. Daarvoor 200+ jaar deelnemer aan trans-Atlantische slavenhandel.",
          voorbeelden: [
            { type: "stap", tekst: "NL-koopvaardij vervoerde geschat ~600.000 Afrikanen als slaven (1600-1863)." },
            { type: "stap", tekst: "Afschaffing 1863 gebeurde mede door internationale druk + economische redenen, niet alleen moraal." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "1863 = 1 juli = Keti Koti = afschaffing slavernij in NL-koloniën." }],
          niveaus: {
            basis: "Slavernij in NL afgeschaft op 1 juli 1863.",
            simpeler: "1863 = Keti Koti = bevrijding slaven NL-koloniën.",
            nogSimpeler: "1863.",
          },
        },
      },
    ],
  },
  {
    title: "Nederlandse ontdekkers + VOC",
    explanation:
      "NL deed mee aan ontdekken vanaf **1600**.\n\n**VOC** *(Verenigde Oostindische Compagnie)*:\n• Opgericht **1602** in Amsterdam.\n• Eerste **wereldwijde aandelenvennootschap**.\n• Monopolie op **handel met Azië**.\n• Eigen leger + schepen + handelsposten.\n• Hoofdkwartier in **Batavia** *(nu Jakarta, Indonesië)*.\n• Failliet 1799.\n\n**VOC importeerde**:\n• Specerijen *(peper, kaneel, kruidnagel, nootmuskaat)*.\n• Thee + koffie.\n• Porselein + zijde.\n• Suikerriet.\n\n**WIC** *(West-Indische Compagnie)*:\n• Opgericht 1621.\n• Voor handel met **Amerika + Afrika**.\n• Ook **slavenhandel** *(~600.000 mensen)*.\n• Failliet 1791.\n\n**Bekende NL-ontdekkers**:\n\n**Willem Barentsz** *(1550-1597)*:\n• Zocht **noordoostelijke route** naar Azië *(rond Rusland)*.\n• Strandde 1596 op **Nova Zembla** *(eiland boven Rusland)*.\n• Overwinterde in 'Het Behouden Huys' *(Het Veilige Huis)*.\n• Stierf op terugreis.\n\n**Henry Hudson** *(Engels voor VOC, 1565-1611)*:\n• Zocht **noordwestelijke route**.\n• Ontdekte **Hudson-rivier** + **Hudson Bay** *(Canada)*.\n• Stichtte gebied voor NL: **Nieuw-Amsterdam** *(later New York)*.\n\n**Abel Tasman** *(1603-1659)*:\n• Voor VOC.\n• Ontdekte **Tasmanië** *(naar hem genoemd)*.\n• Ontdekte **Nieuw-Zeeland** *(1642)*.\n• Eerst Europeaan in Australië-noord *(Nieuw-Holland)*.\n\n**Willem Janszoon** *(1570-1630)*:\n• Vermoedelijk **eerste Europeaan op Australië** *(1606)*.\n• Voor VOC.\n• Ontdekte 'Nieuw-Holland'.\n\n**Jacob Roggeveen** *(1659-1729)*:\n• Ontdekte **Paaseiland** op Paasdag 1722.\n• Beroemd om Moai-stenen-koppen.\n\n**Pieter Stuyvesant** *(1610-1672)*:\n• Gouverneur van **Nieuw-Amsterdam**.\n• Moest stad overgeven aan Engelsen in 1664 → werd **New York**.\n• Standbeeld in New York staat van hem.\n\n**Nieuw-Amsterdam / New York**:\n• Door NL gesticht 1626.\n• Peter Minuit kocht eiland Manhattan van indianen voor 60 gulden *(legende)*.\n• Engelsen namen over 1664.\n• 'Wall Street' = oorspronkelijk muur die NL bouwde.\n• 'Brooklyn' = van NL-dorpje Breukelen *(Utrecht)*.\n• 'Harlem' = naar Haarlem.\n\n**NL-koloniën**:\n• **Nederlands-Indië** *(nu Indonesië)* — 1602-1949.\n• **Suriname** + Antillen *(Caraïben)*.\n• **Zuid-Afrika** *(Kaap)* — door VOC, later naar Engeland.\n• Vroeger ook: Sri Lanka, Taiwan, Mauritius, delen van Brazilië.\n\n**Hoe goed of slecht?**\nDe **economie van NL** profiteerde enorm *(rijke Gouden Eeuw)*.\nMaar — **inwoners van koloniën** leden veel:\n• Gedwongen werk + slavernij.\n• Cultuur onderdrukt.\n• Land afgenomen.\n• Massasterfte.\n\nIn 2024 erkent NL dit publiekelijk + biedt excuses aan + start onderwijs in deze geschiedenis.\n\n**Cito-feitje**:\nDe **VOC** had op piek ~25.000 werknemers + 200 schepen. Bij faillissement *(1799)* had het bedrijf veel verloren aan oorlogen + corruptie. Was eerste **multinational** + eerste bedrijf met aandelen die je kon kopen + verkopen.",
    checks: [
      {
        q: "Wanneer **VOC** opgericht?",
        options: ["1602", "1492", "1700", "1800"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Columbus.", "Te laat.", "Bijna failliet."],
      },
      {
        q: "Wie ontdekte **Nieuw-Zeeland**?",
        options: ["Abel Tasman (1642)", "Columbus", "Magellan", "Cook"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Later — herontdekt."],
      },
      {
        q: "Wat werd **Nieuw-Amsterdam**?",
        options: ["New York (1664)", "Boston", "Washington", "Chicago"],
        answer: 0,
        wrongHints: [null, "Klopt — Engelsen namen over.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "**Paaseiland** ontdekt door?",
        options: ["Jacob Roggeveen (1722)", "Tasman", "Hudson", "Columbus"],
        answer: 0,
        wrongHints: [null, "Klopt — op Paasdag.", "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — ontdekkingsreizen mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Columbus** in welk jaar Amerika?", options: ["1492", "1500", "1300", "1700"], answer: 0, wrongHints: [null, "Klopt.", "Iets later.", "Te vroeg.", "Te laat."] },
      { q: "Wie zeilde **eerste rond aarde**?", options: ["Magellan-expeditie", "Columbus", "Cook", "Hudson"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Veel later.", "Niet."] },
      { q: "**VOC** stond voor?", options: ["Verenigde Oostindische Compagnie", "Vereniging Oude Cargo", "Veiligheidsdienst", "Niet bestaand"], answer: 0, wrongHints: [null, "Klopt — 1602.", "Niet.", "Niet.", "Wel."] },
      { q: "Wat ontdekte **Abel Tasman**?", options: ["Nieuw-Zeeland + Tasmanië", "Amerika", "India", "Australië-zuid"], answer: 0, wrongHints: [null, "Klopt.", "Columbus.", "Vasco da Gama.", "Janszoon noord."] },
      { q: "**Verdrag van Tordesillas** deed wat?", options: ["Wereld verdeeld Portugal/Spanje 1494", "Vrede in Europa", "Slavernij stop", "Niets"], answer: 0, wrongHints: [null, "Klopt.", "Niet primair.", "Niet.", "Wel iets."] },
      { q: "**Slavernij in NL** afgeschaft?", options: ["1863", "1492", "2024", "Nooit"], answer: 0, wrongHints: [null, "Klopt — Keti Koti.", "Te vroeg.", "Te laat — excuses dat jaar.", "Wel afgeschaft."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const ontdekkingsreizenPo = {
  id: "ontdekkingsreizen-po",
  title: "Ontdekkingsreizen (Cito groep 6-8)",
  emoji: "🧭",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — geschiedenis (Tijdvak 5)",
  prerequisites: [
    { id: "tijdvakken-nederland-po", title: "Tijdvakken NL", niveau: "1F" },
    { id: "gouden-eeuw-geschiedenis", title: "Gouden Eeuw", niveau: "klas2-3" },
  ],
  intro:
    "Ontdekkingsreizen voor Cito groep 6-8 — waarom op reis (specerijen, goud) + Columbus 1492 + Vasco da Gama + Magellan + slavenhandel + NL-ontdekkers (Tasman, Hudson, Barentsz, Roggeveen) + VOC + Nieuw-Amsterdam → New York. Tijdvak 5. ~15 min.",
  triggerKeywords: [
    "ontdekkingsreizen", "ontdekkers",
    "Columbus", "Vasco da Gama", "Magellan",
    "Cortes", "Pizarro",
    "Abel Tasman", "Henry Hudson",
    "Barentsz", "Nova Zembla",
    "VOC", "WIC",
    "Nieuw-Amsterdam", "New York",
    "Tordesillas", "slavernij",
    "Keti Koti",
  ],
  chapters,
  steps,
};

export default ontdekkingsreizenPo;
