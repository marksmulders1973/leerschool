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
      {
        q: "Wat was het doel van **ontdekkingsreizen** (15e-17e eeuw)?",
        options: ["Nieuwe handelsroutes + grondstoffen vinden", "Toerisme", "Sport", "Wetenschap-onderzoek alleen"],
        answer: 0,
        wrongHints: [null, "Klopt — vooral specerijen (peper/kaneel) + goud + zilver halen uit Azië/Amerika.", "Toerisme bestond nog niet — risico te hoog.", "Niet — geen sportwedstrijden.", "Wetenschap deels (kaarten maken), maar geld was hoofdmotief."],
        uitlegPad: {
          stappen: [
            { titel: "Waarom gingen Europeanen weg?", tekst: "In de **15e-17e eeuw** wilden Europeanen vooral:\n• **Specerijen** uit Azië (peper, kaneel, kruidnagel) — heel duur in Europa, gebruikt voor smaak + bewaren vlees\n• **Goud + zilver** (Amerika bleek vol)\n• **Nieuwe handelsroutes** — Turkse Rijk versperde de oude landroute naar Azië\n• **Christelijk geloof** verspreiden\n• **Macht + roem** voor land/koning" },
            { titel: "Belangrijke ontdekkers", tekst: "• **Columbus** (1492) — Amerika 'ontdekt' (was er al door inheemse volkeren)\n• **Vasco da Gama** (1498) — Portugal → India via Kaap de Goede Hoop\n• **Magellan** (1519-1522) — eerste wereld-omzeiling (zelf gestorven onderweg)\n• **Willem Barentsz** (NL, 1596) — zocht noordelijke route, vast in ijs\n• **Abel Tasman** (NL, 1642) — Nieuw-Zeeland + Tasmanië\n• **James Cook** (1768-1779) — Australië in kaart" },
            { titel: "Cito-feit: positief én negatief", tekst: "Ontdekkingsreizen hadden **twee kanten**:\n\n**Positief**:\n• Nieuwe planten (aardappel, tomaat, chocola → Europa)\n• Wereldwijde handel\n• Kaarten + wetenschap\n\n**Negatief** — niet vergeten:\n• **Slavernij** — Afrikanen naar Amerika voor plantages (NL = grote slavenhandelaar)\n• **Ziektes** — Europese pokken doodden 90% inheemse Amerikanen\n• **Kolonisatie** — eigen volken in landen onderdrukt\n• **Verdrag van Tordesillas** (1494) — wereld verdeeld door Paus over Spanje + Portugal" },
          ],
          woorden: [
            { woord: "ontdekkingsreiziger", uitleg: "Iemand die met schip naar onbekende delen wereld voer. Vaak in dienst koning/handelaar." },
            { woord: "specerij", uitleg: "Smaakmaker uit verre landen: peper, kaneel, kruidnagel, gember." },
            { woord: "kolonie", uitleg: "Land dat door ander land bezet + uitbuit wordt. NL had veel kolonies." },
            { woord: "Keti Koti", uitleg: "'Ketens gebroken' — Surinaams voor afschaffing slavernij 1 juli 1863." },
          ],
          theorie: "Belangrijke jaartallen ontdekkingsreizen + NL:\n• **1492** — Columbus Amerika\n• **1498** — Da Gama India-route\n• **1602** — **VOC** opgericht (NL) — eerste aandelen-handel ter wereld\n• **1621** — **WIC** opgericht — slavenhandel\n• **1863** — Slavernij in NL afgeschaft\n• **2022** — NL-excuses voor slavernij (premier Rutte)\n\nKolonies van NL: Indonesië, Suriname, Caribische eilanden, Zuid-Afrika (deels).",
          voorbeelden: [
            { type: "feit", tekst: "VOC was wereld's eerste 'aandelenmaatschappij' — investeerders kochten aandelen om handel te financieren. Begin van moderne beurs (Amsterdam Stock Exchange)." },
            { type: "feit", tekst: "Tijdens 1600-1800: NL bracht ~600.000 Afrikanen als slaaf naar Caribische gebieden via WIC. Donker hoofdstuk geschiedenis." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen heldenverhaal", uitleg: "Vroeger werd het positief verteld. Tegenwoordig erkent Cito ook negatieve kanten — slavernij + onderdrukking." }],
          niveaus: { basis: "Handel + grondstoffen. = A.", simpeler: "Ontdekkingsreizen zochten nieuwe routes om specerijen + goud te halen. Maakten Europa rijk maar veroorzaakten slavernij + uitsterving inheemse volken. = A.", nogSimpeler: "Handel + grondstoffen = A." },
        },
      },
      {
        q: "Wat was de **rol van de VOC** (Verenigde Oostindische Compagnie)?",
        options: ["Eerste multinational — handel + bestuur in Indië voor NL", "Sport-organisatie", "Universiteit", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt — 1602-1799, handel in specerijen + bestuur Indonesië namens NL.", "Geen sport.", "Geen onderwijs.", "Wel — 200 jaar invloed."],
        uitlegPad: {
          stappen: [
            { titel: "Wat was de VOC?", tekst: "De **VOC** (Verenigde Oostindische Compagnie) was een **Nederlands handelsbedrijf**, opgericht **1602**.\n\n**Doel**: handel in Azië (vooral huidig Indonesië) — specerijen kopen + verkopen in Europa. Maar VOC kreeg ook **politieke macht**:\n• Mocht **forten** bouwen\n• Mocht **oorlogen voeren**\n• Mocht **verdragen sluiten** met lokale heersers\n• Mocht **eigen geld slaan** (munten)\n\n→ VOC = wereld's **eerste multinational** + **eerste aandelenmaatschappij**." },
            { titel: "Wat deden ze?", tekst: "VOC vestigde **handelsposten** in:\n• **Batavia** (huidig Jakarta) — hoofdkwartier in Indië\n• **Ceylon** (Sri Lanka)\n• **Kaap de Goede Hoop** (Zuid-Afrika)\n• Diverse andere plekken\n\nHandel in: peper, kaneel, kruidnagel, nootmuskaat, **textiel**, **porselein**, **thee**, **opium**.\n\n**Donkere kant**: VOC onderdrukte lokale bevolking, voerde oorlogen, monopoliseerde markten met geweld. **Slavernij** ook." },
            { titel: "Cito-feit: einde + erfenis", tekst: "VOC ging in **1799 failliet** — corruptie, oorlogen, slechte handel-resultaten.\n\n**Wat NL nu nog herinnert**:\n• **Naam VOC** in oude geschiedenisboeken\n• **Indonesische woorden** in NL: pisang, sarong, pajong\n• **Kolonie Indonesië** — door VOC begonnen, pas in **1945-1949** onafhankelijk\n• **Amsterdam Stock Exchange** — oudste beurs ter wereld (gestart voor VOC-aandelen)\n• **'VOC-mentaliteit'** — uitspraak Balkenende (2006) — veroorzaakte debat over koloniaal verleden" },
          ],
          woorden: [
            { woord: "VOC", uitleg: "Verenigde Oostindische Compagnie. Nederlands handelsbedrijf 1602-1799." },
            { woord: "multinational", uitleg: "Bedrijf met activiteiten in meerdere landen. VOC was de allereerste." },
            { woord: "aandeel", uitleg: "Klein stukje eigendom van een bedrijf. VOC vond dit uit in 1602." },
            { woord: "Indonesië", uitleg: "Land in Zuidoost-Azië. Was NL-kolonie tot 1949." },
          ],
          theorie: "VOC-tijdlijn:\n• **1602** — opgericht\n• **1619** — Batavia (Jakarta) gesticht\n• **1652** — Kaap de Goede Hoop kolonie\n• **1799** — failliet\n• **1814-1949** — NL-staat nam Indonesië over\n• **1945** — Indonesische onafhankelijkheidsverklaring\n• **1949** — NL erkende onafhankelijkheid",
          voorbeelden: [
            { type: "feit", tekst: "Op het hoogtepunt had VOC ~50.000 medewerkers, 200+ schepen, was rijker dan Apple of Google nu (geschatte waarde tegenwoordig: ~7 biljoen euro)." },
            { type: "feit", tekst: "VOC had eigen vlag, leger, ambassadeurs — bijna een 'land binnen het bedrijf'." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen positief", uitleg: "Cito-onderwijs nu benadrukt ook negatieve kant: dwangarbeid, slavernij, onderdrukking lokale volken. Andere kijk dan 50 jaar geleden." }],
          niveaus: { basis: "Handelsbedrijf 1602-1799. = A.", simpeler: "VOC = Verenigde Oostindische Compagnie. NL handelsbedrijf 1602-1799. Eerste multinational ter wereld. Handelde in specerijen uit Indonesië + bestuurde kolonie. = A.", nogSimpeler: "Handelsbedrijf Indonesië = A." },
        },
      },
      {
        q: "Welke **gevolgen** had de ontdekking van Amerika voor inheemse volkeren?",
        options: ["Massale sterfte door Europese ziektes + onderdrukking", "Alleen positief — handel + welvaart", "Niets — Europeanen lieten hen met rust", "Inheemse volken werden rijker"],
        answer: 0,
        wrongHints: [null, "Klopt — ~90% van inheemse bevolking stierf in 1500-1600. Vooral pokken, mazelen, griep.", "Niet — historische feiten zijn duidelijk donkerder.", "Niet — Europeanen vestigden kolonies + tot slaaf gemaakt.", "Niet — meeste werden armer of dood."],
        uitlegPad: {
          stappen: [
            { titel: "Het tragische verhaal", tekst: "Toen Europeanen in **1492** aankwamen in Amerika, woonden er al **~60-100 miljoen inheemse mensen** (Azteken, Maya's, Inka's, en veel kleine stammen).\n\nBinnen **150 jaar** waren er nog ~**6-10 miljoen** over. **80-90%** stierf. Belangrijkste oorzaken:" },
            { titel: "3 hoofdoorzaken", tekst: "1. **Ziektes** (~70-80% van sterfte)\n• Europeanen hadden generaties immuniteit voor pokken, mazelen, griep, etc.\n• Inheemse volken NIET — hele dorpen wegvaagde\n• Soms zonder dat Europeanen er fysiek waren (ziekte ging vooruit)\n\n2. **Geweld + oorlog**\n• Conquistadores als Cortés (Mexico, Azteken) + Pizarro (Peru, Inka's)\n• Inheemse legers met pijl-en-boog tegen Spaanse zwaarden + paarden + geweren\n• Inheemse rijken vielen binnen 20 jaar uiteen\n\n3. **Dwangarbeid + slavernij**\n• Inheemse mensen moesten werken in zilvermijnen + plantages\n• Overlevenden vluchten naar bergen of werden opgenomen in Europese maatschappij" },
            { titel: "Cito-feit: erfenis vandaag", tekst: "**In 1500 bestaande beschavingen** zoals Azteken (huidig Mexico) + Inka's (Peru) hadden **eigen schrift, wiskunde, sterrenkunde, gigantische steden** — totaal niet 'primitief'.\n\n**Vandaag**:\n• ~50-60 miljoen inheemse mensen leven nog in Amerika\n• Veel talen + culturen wel verdwenen\n• Erkenning + excuses van overheden begint pas in 21e eeuw\n• **Columbus Day** (VS, 12 oktober) wordt steeds vaker 'Indigenous Peoples' Day' genoemd om recht te doen" },
          ],
          woorden: [
            { woord: "inheems volk", uitleg: "Oorspronkelijke inwoners van een land voordat anderen kwamen." },
            { woord: "conquistador", uitleg: "Spaanse 'veroveraar' — soldaten die in 1500-1600 Amerika onderwierpen." },
            { woord: "pokken", uitleg: "Zeer dodelijke virus-ziekte (uitgeroeid in 1980). Veroorzaakte massale inheemse sterfte." },
            { woord: "kolonialisme", uitleg: "Europees beleid: land bezetten + uitbuiten ten gunste eigen rijk." },
          ],
          theorie: "Cito-tip: vroeger versus nu in geschiedenisles\n• **Vroeger**: 'Columbus ontdekte Amerika' = held\n• **Nu**: 'Columbus zeilde naar Amerika — er woonden al miljoenen mensen. Wat hij begon werd ramp voor hen.'\n\nGeschiedenis kijkt naar **alle perspectieven** — winnaars + verliezers. Bij Cito zien we meer historische nuance dan vroeger.",
          voorbeelden: [
            { type: "feit", tekst: "Mexico-stad (Tenochtitlán) was in 1519 GROTER dan elke Europese stad — ~200.000 inwoners. Cortés vernietigde het." },
            { type: "feit", tekst: "Inheemse Amerikaanse landbouw gaf de wereld: aardappel, tomaat, maïs, chocola, paprika, ananas, tabak, vanille, pompoen. Onze keuken zou totaal anders zijn zonder." },
          ],
          basiskennis: [{ onderwerp: "Niet 'ontdekt'", uitleg: "Het woord 'ontdekt' is moderne kritiek waard — Amerika was bewoond. 'Aangelegd contact' of 'binnengevallen' is feitelijker." }],
          niveaus: { basis: "Massale sterfte. = A.", simpeler: "~90% van inheemse Amerikanen stierf in 150 jaar na Columbus. Vooral door Europese ziektes (pokken) + geweld + dwangarbeid. Beschavingen verloren. = A.", nogSimpeler: "Massa-sterfte = A." },
        },
      },
      { q: "In welk jaar **ontdekte Columbus Amerika**?", options: ["1492","1066","1776","1900"], answer: 0, wrongHints: [null,"Klopt — beroemd jaartal.","Slag bij Hastings.","Onafhankelijkheid VS.","Te recent."] },
      { q: "Wat is de **VOC**?", options: ["Verenigde Oost-Indische Compagnie","Voetbal-Organisatie-Club","Voor Op Computer","Vinden Onder Cito"], answer: 0, wrongHints: [null,"Klopt — eerste multinational, 1602.","Niet.","Niet.","Onzin."] },
      { q: "Welke Nederlander ontdekte **Tasmanië**?", options: ["Abel Tasman","Columbus","Magellan","Barentsz"], answer: 0, wrongHints: [null,"Klopt — eiland is naar hem genoemd.","Niet — Amerika.","Wereldreis maar niet Tasmanië-eerst.","Nova Zembla."] },
      { q: "Welke Amerikaanse stad heette eerst **Nieuw-Amsterdam**?", options: ["New York","Boston","Chicago","Philadelphia"], answer: 0, wrongHints: [null,"Klopt — Nederlands tot 1664.","Niet.","Niet.","Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const ontdekkingsreizenPo = {
  id: "ontdekkingsreizen-po",
  title: "Ontdekkingsreizen (Cito groep 6-8)",
  emoji: "🧭",
  level: "groep6-8",
  subject: "geschiedenis",
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
