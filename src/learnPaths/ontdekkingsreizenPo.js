// Leerpad: Ontdekkingsreizen - groep 6-8 geschiedenis/aardrijkskunde.
// toets-relevant Tijdvak 5. 1F. 4 stappen.

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
      "Vanaf **1450** gingen Europeanen op zoek naar onbekende werelddelen. Deze periode heet **'Tijd van Ontdekkers en Hervormers'** *(Tijdvak 5, 1500-1600)*.\n\n**Waarom?**\n\n**1. Specerijen** 🌶️\n• Peper, kaneel, kruidnagel, nootmuskaat = duur in Europa.\n• Kwamen uit **Azië** *(India, Indonesië)*.\n• Maar de **landroute** *(Zijderoute)* werd geblokkeerd door Turken na val Constantinopel *(1453)*.\n• Oplossing: zoek **zeeroute naar Azië**.\n\n**2. Goud + rijkdom** 💰\n• Hoop op nieuwe schatten.\n• Goud + zilver uit verre landen.\n\n**3. Kennis** 📚\n• Wetenschappelijke nieuwsgierigheid.\n• In **Renaissance** *(herontdekking oude kennis)* nieuwe interesse in wereld.\n\n**4. Religie** ✝️\n• Christendom verspreiden *('heidenen' bekeren)*.\n• Vooral katholieke Spanjaarden + Portugezen.\n\n**5. Concurrentie** 🇪🇺\n• Spanje, Portugal, Engeland, Nederland — allemaal wilden eerst zijn.\n\n**Wat hadden ze nodig?**\n\n**Schepen** ⛵:\n• **Karveel** *(Portugees)*: snel, klein, ~25 m.\n• **Galjoen**: groter, voor handel + oorlog.\n• Later: Nederlandse **fluitschip** + **VOC-schip**.\n\n**Navigatie** 🧭:\n• **Kompas** *(uit China, vanaf 12e eeuw in Europa)* — wijst noord.\n• **Astrolabium** *(Arabisch)*: bepaalt breedtegraad met sterren/zon.\n• **Logboek** + dagboek.\n• **Kaarten** *(verbeterd door Mercator, Vlaams, 1569)*.\n• Sterren *(Poolster = noord)*.\n\n**Bewaring eten** 🥖:\n• Gezouten vlees + vis *(houdbaar)*.\n• Scheepsbeschuit *(hard, droog brood)*.\n• Bier ipv water *(blijft langer goed)*.\n• Maar — **scheurbuik** door tekort vitamine C → veel doden.\n• Later: limoen / zuurkool tegen scheurbuik.\n\n**Gevaren**:\n• Stormen + schipbreuk.\n• Tekort water + eten.\n• Scheurbuik.\n• Aanvallen door piraten of vijanden.\n• Onbekende ziektes *(malaria)*.\n• Op veel reizen kwam een **groot deel van de bemanning niet thuis**.\n\n**Toets-feitje**:\n**Portugal** en **Spanje** waren de eerste landen — daarom spreekt men in Zuid-Amerika vooral Spaans of Portugees. **Verdrag van Tordesillas** *(1494, tussen Spanje en Portugal, met steun van de paus)* verdeelde de niet-Europese wereld tussen beide: Spanje krijgt west, Portugal krijgt oost. Brazilië = Portugees, rest van Zuid-Amerika = Spaans.",
    checks: [
      {
        q: "Waarom wilden Europeanen naar **Azië** varen?",
        options: ["Specerijen + goud + handel", "Om nieuwe talen te leren", "Om er als boer te gaan wonen", "Om oorlog te voeren met China"],
        answer: 0,
        wrongHints: [null, "Talen leren kun je niet maandenlang op zee. Waarom gaven koningen zoveel geld uit aan zo'n reis?", "Boeren hadden grond genoeg in Europa. Wat was er in Azië dat Europa níét had?", "Ze wilden geen oorlog met China; ze wilden iets kópen. Wat?"],
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
          theorie: "Toets-feit: 1453 viel Constantinopel (huidig Istanbul) in handen van Turken. Daardoor was Zijderoute moeilijk → ZEE-route via Afrika was nieuwe doel. Vasco da Gama lukte het in 1498.",
          voorbeelden: [
            { type: "stap", tekst: "1 pond peper in 1500 = soms 1 maand-loon waard. Daarom 'peperduur'." },
            { type: "stap", tekst: "VOC (NL Oost-Indische Compagnie, 1602) verdiende fortuin met specerijen-handel uit Indonesië." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Drie motieven: specerijen (smaak/bewaring), goud (rijkdom), handel (economische macht)." }],
          niveaus: {
            basis: "Europeanen wilden specerijen en goud uit Azië halen en er handel mee drijven.",
            simpeler: "Specerijen zoals peper waren in Europa heel duur. Daarom zochten ze een zeeroute naar Azië.",
            nogSimpeler: "Ze wilden dure specerijen, zoals peper, halen.",
          },
        },
      },
      {
        q: "Wat is een **astrolabium**?",
        options: ["Een instrument om met de sterren je breedtegraad te bepalen", "Een snel zeilschip uit Portugal", "Een oude kaart van de zeeën", "Hard brood voor aan boord"],
        answer: 0,
        wrongHints: [null, "Een schip is iets om mee te varen. Een astrolabium hield een zeeman in zijn hand.", "Een kaart laat zien waar land en zee liggen. Een astrolabium is iets anders.", "Hard scheepsbrood heet scheepsbeschuit. Een astrolabium is geen eten."],
      },
      {
        q: "Wat is **scheurbuik**?",
        options: ["Een ziekte door een tekort aan vitamine C", "Een maagziekte door bedorven eten", "Hoofdpijn door de felle zon op zee", "Een huidziekte door zout zeewater"],
        answer: 0,
        wrongHints: [null, "Scheurbuik komt niet door bedorven eten. Wat aten zeelui maandenlang níét?", "Heeft scheurbuik met de zon te maken?", "Zout water geeft geen scheurbuik."],
      },
      {
        q: "Wat verdeelde het **Verdrag van Tordesillas**?",
        options: ["De wereld tussen Portugal en Spanje", "Europa tussen Frankrijk en Engeland", "Azië tussen Nederland en Engeland", "Afrika tussen Spanje en Italië"],
        answer: 0,
        wrongHints: [null, "Welke twee landen voeren in 1494 al ver over zee op ontdekkingsreis?", "Nederland en Engeland kwamen pas later op zee. Welke landen waren eerder?", "Italië was in 1494 geen land dat op ontdekkingsreis ging. Welk ander land wel?"],
      },
    ],
  },
  {
    title: "Bekende ontdekkers — Columbus + Vasco da Gama",
    explanation:
      "**Christoffel Columbus** *(1451-1506, Italiaans)*:\n• Voer voor **Spanje** *(in dienst van koningin Isabella)*.\n• Wilde **westwaarts** naar **Indië** *(omdat aarde rond is)*.\n• Vertrok 1492 met 3 schepen: **Niña, Pinta, Santa María**.\n• Na 2 maanden zee land gezien.\n• Landde in **Caraïbisch gebied** *(Bahamas)*.\n• Dacht dat hij in Indië was — noemde inwoners 'indianen' *(fout, blijft nog steeds!)*.\n• In werkelijkheid: **Nieuwe Wereld** *(Amerika)*.\n• 4 reizen gemaakt 1492-1502.\n\n**Wat gebeurde verder?**\n• Spaanse + Portugese **veroveraars** *(conquistadores)* volgden.\n• **Hernán Cortés** versloeg Azteken in Mexico *(1519-1521)*.\n• **Francisco Pizarro** versloeg Inca's in Peru *(1532)*.\n• Indianen stierven in massa's aan **Europese ziektes** *(pokken, mazelen)* + geweld.\n• ~80-90% van inwoners stierf in eerste 100 jaar — vreselijk gevolg van de 'ontdekking'.\n\n**Vasco da Gama** *(1469-1524, Portugees)*:\n• Voer **rond Afrika** naar **India**.\n• Vertrok 1497, kwam aan in **Calicut** *(India)* in 1498.\n• Eerste Europeaan die zeeroute naar Azië vond.\n• Bracht specerijen mee terug → enorme winst.\n• Begon Portugese handelsmonopolie in Azië.\n\n**Ferdinand Magellan** *(1480-1521, Portugees voor Spanje)*:\n• Wilde **rond de aarde** zeilen.\n• Vertrok 1519 met 5 schepen.\n• Magellan zelf stierf in **Filipijnen** *(1521)*.\n• Eén schip terug naar Spanje 1522 — **eerste schip dat de aarde rondzeilde**.\n• Bewees dat je rond de aarde kunt varen + dat de oceanen verbonden zijn.\n\n**Andere bekende ontdekkers**:\n\n**Bartolomeu Dias** *(Portugees)*: Eerste rond Kaap de Goede Hoop *(1488)*.\n**Amerigo Vespucci** *(Italiaans)*: Verkende Zuid-Amerika. **Amerika** is naar hem genoemd!\n**John Cabot** *(Italiaans voor Engeland)*: Newfoundland *(1497)*.\n**Jacques Cartier** *(Frans)*: Canada *(1534)*.\n**James Cook** *(Brits, 18e eeuw)*: Australië + Nieuw-Zeeland + Hawaii.\n\n**Wat ontdekten ze + waarvoor?**\n\n**Voor Europeanen**: nieuwe handel, rijkdom, kennis, mensen om te koloniseren.\n\n**Voor inheemse bevolking**: ramp.\n• Massasterfte door ziekte.\n• Slavernij.\n• Verlies van land + cultuur.\n• Geweld + onderdrukking.\n\n**Slavenhandel** *(driehoeksvaart 1500-1800)*:\n• Europa → Afrika: wapens, alcohol, stof.\n• Afrika → Amerika: **mensen** *(slaven)*, ~12 miljoen Afrikanen.\n• Amerika → Europa: suiker, koffie, katoen, tabak.\n• Vreselijke periode.\n• NL deel — VOC + WIC handelden ook in slaven.\n• Slavernij in NL-koloniën afgeschaft 1863.\n\n**Toets-feitje**:\nIn 2022 bood premier Rutte excuses aan voor het **slavernijverleden**, in 2023 *(160 jaar na afschaffing)* deed de koning dat ook. Tijdens **Keti Koti** *(1 juli)* wordt slavernij herdacht.",
    checks: [
      {
        q: "In welk jaar kwam **Columbus** in Amerika?",
        options: ["1492", "1500", "1300", "1700"],
        answer: 0,
        wrongHints: [null, "In 1500 had Columbus zijn beroemde reis al gemaakt. Welk jaartal staat in de uitleg?", "In 1300 waren er nog geen ontdekkingsreizen. Die begonnen pas na 1450.", "In 1700 bestond de VOC al bijna 100 jaar. Columbus was veel eerder."],
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
          theorie: "Toets-feit: 1492 = vaak gezien als overgang van Middeleeuwen naar Nieuwe Tijd. Maar opgepast — 'ontdekken' is Europees perspectief. Indianen waren er al duizenden jaren. Tegenwoordig vinden veel mensen 'ontdekking' geen goed woord — beter: 'contact'.",
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
        options: ["Vasco da Gama", "Columbus", "Magellan", "Cook"],
        answer: 0,
        wrongHints: [null, "Columbus voer naar het wésten en kwam in Amerika uit.", "Magellan wilde helemaal rond de aarde zeilen.", "Cook voer 250 jaar later naar Australië."],
      },
      {
        q: "Wie zeilde als **eerste rond de aarde**?",
        options: ["Magellan-expeditie", "Columbus-expeditie", "Cabot-expeditie", "Dias-expeditie"],
        answer: 0,
        wrongHints: [null, "Columbus kwam in Amerika en voer weer terug — niet rond.", "Cabot voer naar Newfoundland (Canada) en terug.", "Dias ging als eerste om Kaap de Goede Hoop, maar keerde daarna om."],
      },
      {
        q: "In welk jaar schafte Nederland de **slavernij** af in Suriname en op de Antillen?",
        options: ["1863", "1700", "1492", "2022"],
        answer: 0,
        wrongHints: [null, "In 1700 was de slavenhandel juist in volle gang.", "1492 is het jaar van Columbus — daarna begón de slavernij in Amerika pas.", "In 2022 bood de premier excuses aan — dat is geen afschaffing."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is slavernij?", tekst: "**Slavernij** = mensen worden GEDWONGEN gehouden als 'eigendom' en moeten zonder loon werken. Mocht je niet gewoon stoppen. Werd vooral toegepast op Afrikanen in koloniën." },
            { titel: "Afschaffing 1863", tekst: "Nederland schafte slavernij af op **1 juli 1863**. Dit gebeurde vooral in de NL-koloniën (Suriname + Caraïben). Maar — slaven moesten nog 10 jaar 'staatstoezicht' werken voordat ze écht vrij waren (tot 1873)." },
            { titel: "Keti Koti = 'kettingen losgemaakt'", tekst: "**1 juli** wordt nu gevierd als **Keti Koti** (Surinaams voor 'kettingen losgemaakt'). Officiële herdenking. In 2022 bood premier Rutte excuses aan voor het slavernijverleden, in 2023 deed koning Willem-Alexander dat ook." },
          ],
          woorden: [
            { woord: "slavernij", uitleg: "Mensen gedwongen als eigendom houden — verboden." },
            { woord: "Keti Koti", uitleg: "Vieringdag afschaffing slavernij (1 juli 1863)." },
          ],
          theorie: "Toets-feit: NL kwam relatief LAAT met afschaffing. UK: 1833. Frankrijk: 1848. VS: 1865 (na burgeroorlog). NL was 1863. Daarvoor 200+ jaar deelnemer aan trans-Atlantische slavenhandel.",
          voorbeelden: [
            { type: "stap", tekst: "NL-koopvaardij vervoerde geschat ~600.000 Afrikanen als slaven (1600-1863)." },
            { type: "stap", tekst: "Afschaffing 1863 gebeurde mede door internationale druk + economische redenen, niet alleen moraal." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "1863 = 1 juli = Keti Koti = afschaffing slavernij in NL-koloniën." }],
          niveaus: {
            basis: "Nederland schafte de slavernij in zijn koloniën af op 1 juli 1863.",
            simpeler: "Die dag, 1 juli 1863, wordt nog elk jaar gevierd als Keti Koti: de dag dat de slaven in de Nederlandse koloniën vrij werden.",
            nogSimpeler: "1863.",
          },
        },
      },
    ],
  },
  {
    title: "Nederlandse ontdekkers + VOC",
    explanation:
      "NL deed mee aan ontdekken vanaf **1600**.\n\n**VOC** *(Verenigde Oostindische Compagnie)*:\n• Opgericht **1602** in Amsterdam.\n• Eerste **wereldwijde aandelenvennootschap**.\n• Monopolie op **handel met Azië**.\n• Eigen leger + schepen + handelsposten.\n• Hoofdkwartier in **Batavia** *(nu Jakarta, Indonesië)*.\n• Failliet 1799.\n\n**VOC importeerde**:\n• Specerijen *(peper, kaneel, kruidnagel, nootmuskaat)*.\n• Thee + koffie.\n• Porselein + zijde.\n• Suikerriet.\n\n**WIC** *(West-Indische Compagnie)*:\n• Opgericht 1621.\n• Voor handel met **Amerika + Afrika**.\n• Ook **slavenhandel** *(~600.000 mensen)*.\n• Failliet 1791.\n\n**Bekende NL-ontdekkers**:\n\n**Willem Barentsz** *(1550-1597)*:\n• Zocht **noordoostelijke route** naar Azië *(rond Rusland)*.\n• Strandde 1596 op **Nova Zembla** *(eiland boven Rusland)*.\n• Overwinterde in 'Het Behouden Huys' *(Het Veilige Huis)*.\n• Stierf op terugreis.\n\n**Henry Hudson** *(Engels voor VOC, 1565-1611)*:\n• Zocht **noordwestelijke route**.\n• Ontdekte **Hudson-rivier** + **Hudson Bay** *(Canada)*.\n• Zijn reis leidde tot het Nederlandse gebied **Nieuw-Nederland**, met later **Nieuw-Amsterdam** *(nu New York)*.\n\n**Abel Tasman** *(1603-1659)*:\n• Voor VOC.\n• Ontdekte **Tasmanië** *(naar hem genoemd)*.\n• Ontdekte **Nieuw-Zeeland** *(1642)*.\n• Bracht in 1644 de noordkust van Australië *(Nieuw-Holland)* in kaart.\n\n**Willem Janszoon** *(1570-1630)*:\n• Vermoedelijk **eerste Europeaan op Australië** *(1606)*.\n• Voor VOC.\n• Ontdekte 'Nieuw-Holland'.\n\n**Jacob Roggeveen** *(1659-1729)*:\n• Ontdekte **Paaseiland** op Paasdag 1722.\n• Beroemd om Moai-stenen-koppen.\n\n**Pieter Stuyvesant** *(1610-1672)*:\n• Gouverneur van **Nieuw-Amsterdam**.\n• Moest stad overgeven aan Engelsen in 1664 → werd **New York**.\n• Standbeeld in New York staat van hem.\n\n**Nieuw-Amsterdam / New York**:\n• Door NL gesticht 1626.\n• Peter Minuit kocht eiland Manhattan van indianen voor 60 gulden *(legende)*.\n• Engelsen namen over 1664.\n• 'Wall Street' = oorspronkelijk muur die NL bouwde.\n• 'Brooklyn' = van NL-dorpje Breukelen *(Utrecht)*.\n• 'Harlem' = naar Haarlem.\n\n**NL-koloniën**:\n• **Nederlands-Indië** *(nu Indonesië)* — 1602-1949.\n• **Suriname** + Antillen *(Caraïben)*.\n• **Zuid-Afrika** *(Kaap)* — door VOC, later naar Engeland.\n• Vroeger ook: Sri Lanka, Taiwan, Mauritius, delen van Brazilië.\n\n**Hoe goed of slecht?**\nDe **economie van NL** profiteerde enorm *(rijke Gouden Eeuw)*.\nMaar — **inwoners van koloniën** leden veel:\n• Gedwongen werk + slavernij.\n• Cultuur onderdrukt.\n• Land afgenomen.\n• Massasterfte.\n\nSinds 2022 erkent NL dit steeds meer publiekelijk: regering en koning boden excuses aan voor het slavernijverleden.\n\n**Toets-feitje**:\nDe **VOC** had op haar hoogtepunt ~50.000 werknemers + ~200 schepen. Bij faillissement *(1799)* had het bedrijf veel verloren aan oorlogen + corruptie. Was eerste **multinational** + eerste bedrijf met aandelen die je kon kopen + verkopen.",
    checks: [
      {
        q: "Wanneer werd de **VOC** opgericht?",
        options: ["1602", "1492", "1700", "1800"],
        answer: 0,
        wrongHints: [null, "1492 is het jaar van Columbus — Nederland deed toen nog niet mee aan de ontdekkingsreizen.", "In 1700 bestond de VOC al bijna 100 jaar.", "In 1800 was de VOC net failliet (1799)."],
      },
      {
        q: "Welke Europeaan ontdekte **Nieuw-Zeeland**?",
        options: ["Abel Tasman", "Columbus", "Magellan", "Cook"],
        answer: 0,
        wrongHints: [null, "Columbus voer naar het Caribisch gebied, de andere kant van de wereld.", "Magellan stierf in 1521 op de Filipijnen, lang voordat Nieuw-Zeeland werd gevonden.", "Cook bracht Nieuw-Zeeland in 1769 in kaart — maar iemand anders was er in 1642 al."],
      },
      {
        q: "Wat werd **Nieuw-Amsterdam**?",
        options: ["New York", "Boston", "Washington", "Chicago"],
        answer: 0,
        wrongHints: [null, "Boston is door Engelsen gesticht, niet door Nederlanders.", "Washington is later gesticht (1791) als hoofdstad.", "Chicago ligt midden in het binnenland."],
      },
      {
        q: "Welke ontdekkingsreiziger kwam als eerste Europeaan op **Paaseiland**?",
        options: ["Jacob Roggeveen", "Abel Tasman", "Henry Hudson", "Christoffel Columbus"],
        answer: 0,
        wrongHints: [null, "Tasman ontdekte Tasmanië en Nieuw-Zeeland.", "Hudson voer in Noord-Amerika.", "Columbus was 1492, in het Caribisch gebied."],
      },
    ],
  },
  {
    title: "Eind-toets — ontdekkingsreizen mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "In welk jaar kwam **Columbus** in Amerika?", options: ["1492", "1500", "1300", "1700"], answer: 0, wrongHints: [null, "In 1500 had Columbus zijn beroemde reis al gemaakt. Welk jaartal staat in de uitleg?", "In 1300 waren de grote reizen over de oceaan nog niet begonnen.", "In 1700 bestond de VOC al bijna 100 jaar. Columbus was veel eerder."] },
      { q: "Welke expeditie zeilde als **eerste rond de aarde**?", options: ["Magellan-expeditie", "Columbus-expeditie", "Cook-expeditie", "Hudson-expeditie"], answer: 0, wrongHints: [null, "Columbus voer heen en weer naar Amerika, niet rond de aarde.", "Cook maakte zijn reizen pas zo'n 250 jaar later.", "Hudson zocht een route in het noorden en kwam om in Canada."] },
      { q: "Waar staan de letters **VOC** voor?", options: ["Verenigde Oostindische Compagnie", "Vereniging Oost-China", "Verbond van Oceaan-Commandanten", "Vereniging van Oude Christenen"], answer: 0, wrongHints: [null, "China was niet het belangrijkste doel, en de VOC was geen club maar een handelsbedrijf.", "Het was geen leger, maar een handelsbedrijf. Waar staat de C voor?", "Met het geloof had de VOC weinig te maken: het ging om handel."] },
      { q: "Welke gebieden bereikte **Abel Tasman** als eerste Europeaan?", options: ["Nieuw-Zeeland en Tasmanië", "Amerika en de Cariben", "Zuid-Afrika en India", "Nova Zembla en Spitsbergen"], answer: 0, wrongHints: [null, "Daar kwam Columbus terecht.", "Dat was de route van Vasco da Gama.", "Daar voer Willem Barentsz naartoe."] },
      { q: "Wat regelde het **Verdrag van Tordesillas**?", options: ["Spanje en Portugal verdeelden de nieuw ontdekte landen (1494)", "Het maakte een einde aan de Tachtigjarige Oorlog (1648)", "Het verbood de slavenhandel in alle koloniën (1814)", "Het gaf Nederland een eigen handelscompagnie (1602)"], answer: 0, wrongHints: [null, "Dat was de Vrede van Münster.", "In 1814 was de tijd van de grote ontdekkingsreizen al lang voorbij. Dit verdrag is veel ouder.", "In 1602 werd de VOC opgericht; dat was geen verdrag tussen landen."] },
      { q: "In welk jaar werd de **slavernij** in Suriname en op de Antillen afgeschaft?", options: ["1863", "1492", "2024", "1945"], answer: 0, wrongHints: [null, "1492 is het jaar van Columbus — toen begon het juist.", "Zo laat was het niet. Elk jaar op 1 juli (Keti Koti) herdenken mensen dat de slavernij al lang geleden is afgeschaft.", "1945 is het einde van de Tweede Wereldoorlog. De slavernij was toen al veel eerder afgeschaft."] },
      {
        q: "Wat was het doel van **ontdekkingsreizen** (15e-17e eeuw)?",
        options: ["Nieuwe handelsroutes en grondstoffen vinden", "Nieuwe vakantieplekken en stranden vinden", "Zeilwedstrijden winnen en records breken", "Alleen sterren en dieren onderzoeken"],
        answer: 0,
        wrongHints: [null, "Toerisme bestond nog niet — het risico was veel te hoog.", "Waren het wedstrijden? Denk aan wat de schepen mee terug namen.", "Onderzoek gebeurde wel een beetje, maar was dat de hoofdreden voor zulke dure reizen?"],
        uitlegPad: {
          stappen: [
            { titel: "Waarom gingen Europeanen weg?", tekst: "In de **15e-17e eeuw** wilden Europeanen vooral:\n• **Specerijen** uit Azië (peper, kaneel, kruidnagel) — heel duur in Europa, gebruikt voor smaak + bewaren vlees\n• **Goud + zilver** (Amerika bleek vol)\n• **Nieuwe handelsroutes** — Turkse Rijk versperde de oude landroute naar Azië\n• **Christelijk geloof** verspreiden\n• **Macht + roem** voor land/koning" },
            { titel: "Belangrijke ontdekkers", tekst: "• **Columbus** (1492) — Amerika 'ontdekt' (was er al door inheemse volkeren)\n• **Vasco da Gama** (1498) — Portugal → India via Kaap de Goede Hoop\n• **Magellan** (1519-1522) — eerste reis rond de wereld (zelf gestorven onderweg)\n• **Willem Barentsz** (NL, 1596) — zocht noordelijke route, vast in ijs\n• **Abel Tasman** (NL, 1642) — Nieuw-Zeeland + Tasmanië\n• **James Cook** (1768-1779) — Australië in kaart" },
            { titel: "Toets-feit: positief én negatief", tekst: "Ontdekkingsreizen hadden **twee kanten**:\n\n**Positief**:\n• Nieuwe planten (aardappel, tomaat, chocola → Europa)\n• Wereldwijde handel\n• Kaarten + wetenschap\n\n**Negatief** — niet vergeten:\n• **Slavernij** — Afrikanen naar Amerika voor plantages (NL = grote slavenhandelaar)\n• **Ziektes** — Europese ziektes zoals pokken doodden het grootste deel van de inheemse Amerikanen\n• **Kolonisatie** — eigen volken in landen onderdrukt\n• **Verdrag van Tordesillas** (1494) — wereld verdeeld tussen Spanje + Portugal, met steun van de paus" },
          ],
          woorden: [
            { woord: "ontdekkingsreiziger", uitleg: "Iemand die met schip naar onbekende delen wereld voer. Vaak in dienst koning/handelaar." },
            { woord: "specerij", uitleg: "Smaakmaker uit verre landen: peper, kaneel, kruidnagel, gember." },
            { woord: "kolonie", uitleg: "Land dat door een ander land bezet + uitgebuit wordt. NL had veel kolonies." },
            { woord: "Keti Koti", uitleg: "'Ketens gebroken' — Surinaams voor afschaffing slavernij 1 juli 1863." },
          ],
          theorie: "Belangrijke jaartallen ontdekkingsreizen + NL:\n• **1492** — Columbus Amerika\n• **1498** — Da Gama India-route\n• **1602** — **VOC** opgericht (NL) — eerste aandelen-handel ter wereld\n• **1621** — **WIC** opgericht — slavenhandel\n• **1863** — Slavernij in NL afgeschaft\n• **2022** — NL-excuses voor slavernij (premier Rutte)\n\nKolonies van NL: Indonesië, Suriname, Caribische eilanden, Zuid-Afrika (deels).",
          voorbeelden: [
            { type: "feit", tekst: "De VOC was 's werelds eerste 'aandelenmaatschappij' — investeerders kochten aandelen om handel te financieren. Begin van de moderne beurs (de Amsterdamse beurs)." },
            { type: "feit", tekst: "Tijdens 1600-1800: NL bracht ~600.000 Afrikanen als slaaf naar het Caribisch gebied en Zuid-Amerika, o.a. via de WIC. Donker hoofdstuk geschiedenis." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen heldenverhaal", uitleg: "Vroeger werd het positief verteld. Tegenwoordig erkent de toets ook negatieve kanten — slavernij + onderdrukking." }],
          niveaus: { basis: "Denk aan wat de schepen mee terug namen naar Europa, zoals peper en kaneel uit Azië.", simpeler: "De ontdekkingsreizigers zochten nieuwe routes om specerijen en goud te halen. Dat maakte Europa rijk, maar bracht ook slavernij en veel leed voor inheemse volken.", nogSimpeler: "Nieuwe handelsroutes en grondstoffen vinden" },
        },
      },
      {
        q: "Wat was de **rol van de VOC** (Verenigde Oostindische Compagnie)?",
        options: ["Handelsbedrijf met eigen leger en bestuur", "Leger van de koning met eigen schepen", "Groep ontdekkers die kaarten maakte", "Kerk die zendelingen naar Azië stuurde"],
        answer: 0,
        wrongHints: [null, "Nederland had toen geen koning, en de VOC was geen leger — al had ze wel soldaten. Waar staat de C van VOC voor?", "Kaarten maken deden ze ook, maar waarmee verdiende de VOC haar geld?", "Geloof was niet het doel. Wat haalde de VOC uit Azië?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat was de VOC?", tekst: "De **VOC** (Verenigde Oostindische Compagnie) was een **Nederlands handelsbedrijf**, opgericht **1602**.\n\n**Doel**: handel in Azië (vooral huidig Indonesië) — specerijen kopen + verkopen in Europa. Maar VOC kreeg ook **politieke macht**:\n• Mocht **forten** bouwen\n• Mocht **oorlogen voeren**\n• Mocht **verdragen sluiten** met lokale heersers\n• Mocht **eigen geld slaan** (munten)\n\n→ VOC = 's werelds **eerste multinational** + **eerste aandelenmaatschappij**." },
            { titel: "Wat deden ze?", tekst: "VOC vestigde **handelsposten** in:\n• **Batavia** (huidig Jakarta) — hoofdkwartier in Indië\n• **Ceylon** (Sri Lanka)\n• **Kaap de Goede Hoop** (Zuid-Afrika)\n• Diverse andere plekken\n\nHandel in: peper, kaneel, kruidnagel, nootmuskaat, **textiel**, **porselein**, **thee**, **opium**.\n\n**Donkere kant**: VOC onderdrukte lokale bevolking, voerde oorlogen, monopoliseerde markten met geweld. **Slavernij** ook." },
            { titel: "Toets-feit: einde + erfenis", tekst: "VOC ging in **1799 failliet** — corruptie, oorlogen, slechte handel-resultaten.\n\n**Wat NL nu nog herinnert**:\n• **Naam VOC** in oude geschiedenisboeken\n• **Indonesische woorden** in NL: pisang, sarong, pajong\n• **Kolonie Indonesië** — door VOC begonnen, pas in **1945-1949** onafhankelijk\n• **Amsterdamse beurs** — oudste beurs ter wereld (gestart voor VOC-aandelen)\n• **'VOC-mentaliteit'** — uitspraak Balkenende (2006) — veroorzaakte debat over koloniaal verleden" },
          ],
          woorden: [
            { woord: "VOC", uitleg: "Verenigde Oostindische Compagnie. Nederlands handelsbedrijf 1602-1799." },
            { woord: "multinational", uitleg: "Bedrijf met activiteiten in meerdere landen. VOC was de allereerste." },
            { woord: "aandeel", uitleg: "Klein stukje eigendom van een bedrijf. VOC vond dit uit in 1602." },
            { woord: "Indonesië", uitleg: "Land in Zuidoost-Azië. Was NL-kolonie tot 1949." },
          ],
          theorie: "VOC-tijdlijn:\n• **1602** — opgericht\n• **1619** — Batavia (Jakarta) gesticht\n• **1652** — Kaap de Goede Hoop kolonie\n• **1799** — failliet\n• **1814-1949** — NL-staat nam Indonesië over\n• **1945** — Indonesische onafhankelijkheidsverklaring\n• **1949** — NL erkende onafhankelijkheid",
          voorbeelden: [
            { type: "feit", tekst: "Op het hoogtepunt had de VOC ~50.000 medewerkers en ~200 schepen. Volgens sommige (omstreden) schattingen was ze naar huidige maatstaven meer waard dan Apple of Google nu." },
            { type: "feit", tekst: "VOC had eigen vlag, leger, ambassadeurs — bijna een 'land binnen het bedrijf'." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen positief", uitleg: "Toets-onderwijs nu benadrukt ook negatieve kant: dwangarbeid, slavernij, onderdrukking lokale volken. Andere kijk dan 50 jaar geleden." }],
          niveaus: { basis: "Handelsbedrijf 1602-1799.", simpeler: "VOC = Verenigde Oostindische Compagnie. NL handelsbedrijf 1602-1799. Eerste multinational ter wereld. Handelde in specerijen uit Indonesië + bestuurde kolonie.", nogSimpeler: "Handelsbedrijf Indonesië" },
        },
      },
      {
        q: "Welke **gevolgen** had de ontdekking van Amerika voor inheemse volkeren?",
        options: ["Massale sterfte en onderdrukking", "Alleen voordeel: handel en welvaart", "Niets: ze werden met rust gelaten", "Ze werden rijker door het goud"],
        answer: 0,
        wrongHints: [null, "Denk aan wat de Spanjaarden kwamen halen. Was dat goed nieuws voor de mensen die er al woonden?", "Lees bij 'Wat gebeurde verder?' — werden ze met rust gelaten?", "Het goud ging naar Spanje. Wat bleef er over voor de inheemse volken?"],
        uitlegPad: {
          stappen: [
            { titel: "Het tragische verhaal", tekst: "Toen Europeanen in **1492** aankwamen in Amerika, woonden er al **~60-100 miljoen inheemse mensen** (Azteken, Maya's, Inka's, en veel kleine stammen).\n\nBinnen **150 jaar** waren er nog ~**6-10 miljoen** over. **80-90%** stierf. Belangrijkste oorzaken:" },
            { titel: "3 hoofdoorzaken", tekst: "1. **Ziektes** (~70-80% van sterfte)\n• Europeanen hadden generaties immuniteit voor pokken, mazelen, griep, etc.\n• Inheemse volken NIET — hele dorpen werden weggevaagd\n• Soms zonder dat Europeanen er fysiek waren (ziekte ging vooruit)\n\n2. **Geweld + oorlog**\n• Conquistadores als Cortés (Mexico, Azteken) + Pizarro (Peru, Inka's)\n• Inheemse legers met pijl-en-boog tegen Spaanse zwaarden + paarden + geweren\n• Inheemse rijken vielen binnen 20 jaar uiteen\n\n3. **Dwangarbeid + slavernij**\n• Inheemse mensen moesten werken in zilvermijnen + plantages\n• Overlevenden vluchtten naar bergen of werden opgenomen in Europese maatschappij" },
            { titel: "Toets-feit: erfenis vandaag", tekst: "**In 1500 bestaande beschavingen** zoals Azteken (huidig Mexico) + Inka's (Peru) hadden **eigen schrift, wiskunde, sterrenkunde, gigantische steden** — totaal niet 'primitief'.\n\n**Vandaag**:\n• ~50-60 miljoen inheemse mensen leven nog in Amerika\n• Veel talen + culturen wel verdwenen\n• Erkenning + excuses van overheden begint pas in 21e eeuw\n• **Columbus Day** (VS, 12 oktober) wordt steeds vaker 'Indigenous Peoples' Day' genoemd om recht te doen" },
          ],
          woorden: [
            { woord: "inheems volk", uitleg: "Oorspronkelijke inwoners van een land voordat anderen kwamen." },
            { woord: "conquistador", uitleg: "Spaanse 'veroveraar' — soldaten die in 1500-1600 Amerika onderwierpen." },
            { woord: "pokken", uitleg: "Zeer dodelijke virus-ziekte (uitgeroeid in 1980). Veroorzaakte massale inheemse sterfte." },
            { woord: "kolonialisme", uitleg: "Europees beleid: land bezetten + uitbuiten ten gunste eigen rijk." },
          ],
          theorie: "Toets-tip: vroeger versus nu in geschiedenisles\n• **Vroeger**: 'Columbus ontdekte Amerika' = held\n• **Nu**: 'Columbus zeilde naar Amerika — er woonden al miljoenen mensen. Wat hij begon werd ramp voor hen.'\n\nGeschiedenis kijkt naar **alle perspectieven** — winnaars + verliezers. Bij de Doorstroomtoets zien we meer historische nuance dan vroeger.",
          voorbeelden: [
            { type: "feit", tekst: "Mexico-stad (Tenochtitlán) was in 1519 GROTER dan de meeste Europese steden — ~200.000 inwoners. Cortés vernietigde het." },
            { type: "feit", tekst: "Inheemse Amerikaanse landbouw gaf de wereld: aardappel, tomaat, maïs, chocola, paprika, ananas, tabak, vanille, pompoen. Onze keuken zou totaal anders zijn zonder." },
          ],
          basiskennis: [{ onderwerp: "Niet 'ontdekt'", uitleg: "Het woord 'ontdekt' is moderne kritiek waard — Amerika was bewoond. 'Eerste contact' of 'binnengevallen' is feitelijker." }],
          niveaus: { basis: "Denk aan de ziektes die de Europeanen meenamen, zoals pokken, en aan het geweld van de veroveraars.", simpeler: "Na de komst van de Europeanen stierven de meeste inheemse Amerikanen: vooral door ziektes als pokken, maar ook door geweld en dwangarbeid.", nogSimpeler: "Massale sterfte en onderdrukking" },
        },
      },
      { q: "In welk jaar **ontdekte Columbus Amerika**?", options: ["1492","1066","1776","1900"], answer: 0, wrongHints: [null, "1066 is de Slag bij Hastings — Middeleeuwen, lang vóór de ontdekkingsreizen.", "1776 is de onafhankelijkheid van de VS — toen woonden er al lang Europeanen in Amerika.", "In 1900 waren er al stoomschepen. Columbus voer met zeilschepen."] },
      { q: "Wat is de **VOC**?", options: ["Verenigde Oost-Indische Compagnie", "Vereniging van Oude Cartografen", "Verbond van Oranje-Commandanten", "Vrije Oceaan-Compagnie"], answer: 0, wrongHints: [null, "Cartografen maken kaarten. De VOC was een handelsbedrijf.", "Oranje-commandanten? De VOC was geen leger van de prins.", "Klopt het woord 'vrij'? De VOC mocht juist als enige Nederlandse bedrijf in Azië handelen."] },
      { q: "Welke zeevaarder bereikte in **1642** voor de VOC als eerste Europeaan een groot eiland ten zuiden van Australië?", options: ["Abel Tasman","Columbus","Magellan","Barentsz"], answer: 0, wrongHints: [null, "Columbus voer naar Amerika, meer dan honderd jaar voordat de VOC bestond.", "Magellan voer rond de wereld, maar kwam niet bij Australië.", "Barentsz zocht het hoge noorden (Nova Zembla)."] },
      { q: "Welke Amerikaanse stad heette eerst **Nieuw-Amsterdam**?", options: ["New York","Boston","Chicago","Philadelphia"], answer: 0, wrongHints: [null, "Boston is door Engelsen gesticht.", "Chicago ligt diep in het binnenland.", "Philadelphia is later gesticht door Quakers."] },
      { q: "Welke ontdekkingsreiziger begon in **1519** aan de eerste reis rond de wereld?", options: ["Magellan","Columbus","Vasco da Gama","Tasman"], answer: 0, wrongHints: [null, "Columbus stak alleen de Atlantische Oceaan over, heen en terug.", "Vasco da Gama voer naar India en weer terug.", "Tasman voer ruim 100 jaar later, voor de VOC."] },
      { q: "Welk land bereikte **Vasco da Gama** als eerste Europeaan over zee?", options: ["India","Amerika","Australië","Japan"], answer: 0, wrongHints: [null, "Amerika was Columbus, naar het westen. Da Gama voer om Afrika heen — waarheen?", "Australië werd pas ruim 100 jaar later bereikt.", "Japan ligt nog veel verder dan het land waar hij specerijen wilde halen."] },
      { q: "Welke Spanjaard veroverde het **Aztekenrijk** (Mexico)?", options: ["Cortés","Pizarro","Columbus","Magellan"], answer: 0, wrongHints: [null, "Pizarro versloeg een ander rijk, in Peru.", "Columbus kwam op de Bahama's en veroverde geen rijk.", "Magellan voer rond de wereld en was geen veroveraar."] },
      { q: "Welke Spanjaard veroverde **Inca-rijk** (Peru)?", options: ["Pizarro","Cortés","Columbus","Magellan"], answer: 0, wrongHints: [null, "Cortés versloeg de Azteken in Mexico.", "Columbus kwam op de Bahama's en veroverde geen rijk.", "Magellan voer rond de wereld; hij was Portugees en geen veroveraar."] },
      { q: "Waar staan de letters **WIC** voor?", options: ["West-Indische Compagnie","Wereld-Import-Centrale","Westerse Inkoop-Centrale","Waterschap In Curaçao"], answer: 0, wrongHints: [null, "Een import-centrale? De WIC was een handelscompagnie, net als de VOC — maar voor welk werelddeel?", "Inkoop-centrale is een modern woord. Denk aan de tegenhanger van de VOC (Oost) — waar voer de WIC heen?", "Een waterschap zorgt voor dijken, niet voor handel."] },
      { q: "Welk eiland in het Caribisch gebied hoort bij het Koninkrijk der Nederlanden?", options: ["Curaçao","Hawaii","Sicilië","Cuba"], answer: 0, wrongHints: [null, "Hawaii ligt in de Stille Oceaan en hoort bij de Verenigde Staten.", "Sicilië ligt in de Middellandse Zee en is Italiaans.", "Cuba ligt wel in het Caribisch gebied, maar is een onafhankelijk land."] },
      { q: "Welke nationaliteit had **Henry Hudson**?", options: ["Engels","Frans","Spaans","Portugees"], answer: 0, wrongHints: [null, "Klinkt 'Hudson' als een Franse naam? Lees in de uitleg voor wie hij voer.", "Spaanse ontdekkers waren bijvoorbeeld Cortés en Pizarro.", "Portugese ontdekkers waren bijvoorbeeld Vasco da Gama en Magellan."] },
      { q: "**Willem Barentsz** zocht naar?", options: ["Noordelijke route naar Azië", "Westelijke route naar Amerika", "Zuidelijke route naar Australië", "Oostelijke route rond Afrika"], answer: 0, wrongHints: [null, "Westwaarts naar Amerika — dat deden Columbus en Hudson. Welke kant ging Barentsz op?", "Waar ligt Nova Zembla, waar hij overwinterde?", "De route om Afrika heen bestond al. Barentsz zocht een nieuwe."] },
      { q: "**Verdrag van Tordesillas** (1494) verdeelde wat?", options: ["Wereld tussen Spanje en Portugal", "Europa tussen Nederland en België", "Wereld tussen Engeland en Frankrijk", "Afrika tussen Duitsland en Italië"], answer: 0, wrongHints: [null, "België bestond in 1494 nog niet eens.", "Engeland en Frankrijk kwamen later. Wie voeren in 1494 al ver over zee?", "Duitsland en Italië waren toen nog geen landen met grote vloten."] },
      { q: "Wat is **slavernij** in koloniale tijd?", options: ["Mensen gevangen + gedwongen werken zonder vrijheid", "Mensen die werken voor loon en vrij mogen gaan", "Mensen die vrijwillig meehelpen op een plantage", "Mensen die betaald werken als matroos op een schip"], answer: 0, wrongHints: [null, "Kregen slaafgemaakten loon en vrijheid?", "Was het vrijwillig?", "Werden ze betaald?"] },
      { q: "Wat is **Keti Koti**?", options: ["Herdenking afschaffing slavernij","Surinaams nieuwjaarsfeest","Een Surinaams gerecht","Een voetbaltoernooi"], answer: 0, wrongHints: [null, "Keti Koti valt op 1 juli, niet op 1 januari. Lees nog eens wat er op 1 juli 1863 gebeurde.", "Keti Koti kun je niet eten. De naam betekent 'ketenen gebroken' — waar herinnert dat aan?", "Geen sport. Denk aan de betekenis van de naam: 'ketenen gebroken'."] },
      { q: "Welke producten bracht de **VOC** mee terug?", options: ["Specerijen + thee + porselein", "Aardappels + tomaten + maïs", "Bont + hout uit Noord-Amerika", "Kaas + haring + wol uit Holland"], answer: 0, wrongHints: [null, "Die kwamen uit Amerika.", "Noord-Amerika was niet het werkgebied van de VOC. Waar voer de VOC heen?", "Dat kwam juist uit Nederland zelf. Wat haalde de VOC uit het Oosten?"] },
      { q: "Welke eeuw noemen we de **Gouden Eeuw** van Nederland?", options: ["17e eeuw","20e eeuw","Middeleeuwen","19e eeuw"], answer: 0, wrongHints: [null, "In de 20e eeuw waren er twee wereldoorlogen — geen Gouden Eeuw. Denk aan de tijd van de VOC.", "De Middeleeuwen zijn vóór de ontdekkingsreizen. De Gouden Eeuw kwam daarna, met de VOC.", "In de 19e eeuw was de VOC al failliet. Wanneer bloeide de handel?"] },
      { q: "Welke **dodelijke ziekte** brachten Europeanen naar Amerika?", options: ["Pokken","Verkoudheid","Hooikoorts","Suikerziekte"], answer: 0, wrongHints: [null, "Aan een verkoudheid ga je niet dood. Welke ziekte uit de uitleg wel?", "Hooikoorts komt van pollen, niet van mensen. Kun je die meebrengen op een schip?", "Suikerziekte is niet besmettelijk."] },
      { q: "Wat is een **compagnie** (zoals de VOC)?", options: ["Handelsorganisatie","Politieke partij","Soort schip","Leger van de koning"], answer: 0, wrongHints: [null, "Een partij wil regeren. Wat deed de VOC met specerijen?", "Een compagnie hád schepen, maar wás geen schip.", "De VOC had soldaten, maar was geen leger van een koning. Waar verdiende ze geld mee?"] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const ontdekkingsreizenPo = {
  id: "ontdekkingsreizen-po",
  title: "Ontdekkingsreizen (groep 6-8, Doorstroomtoets-stof)",
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
    "Ontdekkingsreizen voor groep 6-8, Doorstroomtoets-stof — waarom op reis (specerijen, goud) + Columbus 1492 + Vasco da Gama + Magellan + slavenhandel + NL-ontdekkers (Tasman, Hudson, Barentsz, Roggeveen) + VOC + Nieuw-Amsterdam → New York. Tijdvak 5. ~15 min.",
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
