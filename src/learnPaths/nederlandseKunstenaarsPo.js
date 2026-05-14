// Leerpad: Nederlandse kunstenaars - groep 6-8 wereldoriëntatie/cultuur.
// Cito-relevant. 1F. 5 stappen.

const stepEmojis = ["🎨", "🌻", "⬜", "🖼️", "🏆"];

const chapters = [
  { letter: "A", title: "Rembrandt + Vermeer", emoji: "🎨", from: 0, to: 0 },
  { letter: "B", title: "Van Gogh", emoji: "🌻", from: 1, to: 1 },
  { letter: "C", title: "Mondriaan + abstract", emoji: "⬜", from: 2, to: 2 },
  { letter: "D", title: "Moderne kunst NL", emoji: "🖼️", from: 3, to: 3 },
  { letter: "E", title: "Eind-toets", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Rembrandt + Vermeer — Gouden Eeuw",
    explanation:
      "Nederland kent veel beroemde **kunstenaars** *(schilders, beeldhouwers)*. Vooral in de **Gouden Eeuw** *(1600-1700)* maakten NL-schilders meesterwerken.\n\n**REMBRANDT** *(1606-1669)*:\n• Voluit: **Rembrandt Harmensz. van Rijn**.\n• Geboren in **Leiden**, werkte vooral in **Amsterdam**.\n• Bekendst van: **De Nachtwacht** *(1642)*, een 4 meter breed schilderij met schutterij-leden.\n• Gebruikte **clair-obscur** *(licht-donker contrast)*.\n• Schilderde **portretten** *(zelfportret, anderen)*, Bijbelse scènes, landschappen.\n• Werd rijk, later **failliet**.\n• ~300 schilderijen, ~700 tekeningen, ~300 etsen.\n\n**Belangrijke werken**:\n• **De Nachtwacht** *(Rijksmuseum, Amsterdam)*.\n• **De Anatomische Les van Dr. Tulp** *(1632)*.\n• **De Joodse Bruid** *(1665)*.\n• Vele **zelfportretten** *(60+)*.\n\n**Citaten over Rembrandt**:\n*'Onze grootste schilder.'* — Vincent van Gogh.\n\n**VERMEER** *(1632-1675)*:\n• Voluit: **Johannes Vermeer**.\n• Geboren + werkte in **Delft**.\n• Maakte **slechts ~35 schilderijen** in hele leven.\n• **Klein + intiem** *(meestal binnenshuis, vrouwen)*.\n• Gebruikte **camera obscura** *(soort projector, vroege foto-techniek)* — daarom zo natuurgetrouw.\n• Stierf jong + arm.\n\n**Belangrijkste werken**:\n• **Het Meisje met de Parel** *(~1665)* — 'Mona Lisa van het Noorden'.\n• **Het Melkmeisje** *(~1660)*.\n• **Zicht op Delft** *(~1660)* — beroemde stadsgezicht.\n\n**OUDERE EN ANDERE GOUDEN EEUW-MEESTERS**:\n\n**Jan Steen** *(1626-1679)*:\n• Vrolijke chaotische taferelen.\n• 'Een huishouden van Jan Steen' = spreekwoord voor chaos.\n\n**Frans Hals** *(1582-1666)*:\n• Portretten van vrolijke mensen.\n• Snelle, losse penseelstreken.\n• Werkte in Haarlem.\n\n**Pieter de Hooch** *(1629-1684)*:\n• Binnenhuizen + binnenplaatsen.\n• Vergelijkbaar met Vermeer.\n\n**Jacob van Ruisdael** *(1628-1682)*:\n• Landschappen — molens, bossen.\n• Stond model voor latere romantici.\n\n**Waarom zoveel kunst in Gouden Eeuw?**\n• NL was **rijk** door VOC-handel.\n• **Burgerij** *(kooplui)* wilde portret van zichzelf + huis.\n• Geen katholieke kerk-bestellingen *(protestantse NL)* → portretten + alledaags leven.\n• Veel schilders + concurrentie → kwaliteit hoog.\n\n**Schatting**: in 17e eeuw zijn **5-10 miljoen schilderijen** in NL gemaakt.\nMeeste verloren — maar wat over is, is wereldberoemd.\n\n**Cito-feitje**:\n**De Nachtwacht** werd in 1990 zo erg beschadigd door iemand met mes dat restauratie 4 jaar duurde. In 2019 begon **Operation Night Watch** — onderzoek + restauratie live te volgen in Rijksmuseum.",
    checks: [
      {
        q: "Wie schilderde **De Nachtwacht**?",
        options: ["Rembrandt (1642)", "Vermeer", "Van Gogh", "Mondriaan"],
        answer: 0,
        wrongHints: [null, "Klein-werk schilder.", "Veel later.", "Veel later."],
      },
      {
        q: "Waar staat de **Nachtwacht**?",
        options: ["Rijksmuseum Amsterdam", "Mauritshuis", "Van Gogh Museum", "Louvre"],
        answer: 0,
        wrongHints: [null, "Meisje met Parel hier.", "Andere.", "Frans."],
      },
      {
        q: "Wie schilderde **Het Meisje met de Parel**?",
        options: ["Vermeer (~1665)", "Rembrandt", "Van Gogh", "Hals"],
        answer: 0,
        wrongHints: [null, "Andere.", "Veel later.", "Andere."],
      },
      {
        q: "Wat is **clair-obscur**?",
        options: ["Licht-donker contrast", "Soort kleur", "Naam schilder", "Penseel"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Vincent van Gogh",
    explanation:
      "**Vincent van Gogh** *(1853-1890)* = misschien beroemdste NL-schilder ooit.\n\n**Leven**:\n• Geboren in **Zundert** *(Noord-Brabant)*.\n• Werkte eerst in **kunsthandel** + als **leraar** + als **predikant**.\n• Begon pas schilderen op **27 jaar**.\n• Stierf op **37 jaar** — schoot zichzelf in borst.\n• Tijdens leven slechts **1 schilderij verkocht** *('De Rode Wijngaard', 400 frank)*.\n• Nu zijn schilderijen miljoenen waard.\n\n**Mentaal**:\n• Worstelde met **mentaal lijden** *(depressie, mogelijk schizofrenie)*.\n• Stond in psychiatrische inrichting in **Saint-Rémy-de-Provence**.\n• Snijdde zijn **eigen oor** af *(deel ervan, 1888)* na ruzie met Gauguin.\n• Stierf 2 dagen na zichzelf te hebben geschoten.\n\n**Productie**:\n• In 10 jaar tijd: **~860 schilderijen** + **~1300 tekeningen**.\n• Vooral laatste 2 jaar enorm productief.\n• Bewoog veel: NL → België → Parijs → Provence → Saint-Rémy → Auvers.\n\n**Stijl** *(post-impressionisme)*:\n• Felle, **levendige kleuren**.\n• Korte, **dikke penseelstreken**.\n• Niet realistisch — meer **emotie** + ritme.\n• Gebruikte **complementaire kleuren** *(geel-paars, oranje-blauw)*.\n\n**Beroemdste werken**:\n\n**1. Zonnebloemen** *(1888)*:\n• Serie van 7 schilderijen.\n• Felle gele bloemen.\n• Een hangt in Van Gogh Museum, andere wereldwijd.\n\n**2. De Sterrennacht** *(1889)*:\n• Schilderij van nacht boven dorpje.\n• Wervelende sterren + maan.\n• Gemaakt in Saint-Rémy-inrichting.\n• Hangt in MoMA, New York.\n\n**3. De Aardappeleters** *(1885)*:\n• Eerste meesterwerk.\n• Boerengezin eet samen.\n• Gemaakt in Nuenen *(NL)*.\n• Donker, sociaal-betrokken.\n\n**4. Zelfportretten**:\n• ~35 zelfportretten.\n• Met oor verband na incident.\n\n**5. Café terras 's nachts** *(1888)*.\n\n**6. Slaapkamer in Arles** *(1888)*:\n• Zijn eigen kleine slaapkamer.\n\n**Van Gogh Museum** *(Amsterdam)*:\n• Geopend in 1973.\n• Bezit ~200 schilderijen + 500 tekeningen + 700 brieven.\n• Brieven aan zijn broer **Theo** zijn beroemd — vertellen over zijn leven.\n\n**Cito-feitje**:\nVan Gogh schreef **800+ brieven** aan zijn broer Theo. Daarin schreef hij wat hij wilde schilderen + waarom. Theo betaalde voor Vincent's leven + verf. Vincent stierf 1890, Theo stierf 6 maanden later — uitgeput. Beide begraven naast elkaar in Auvers (Frankrijk).",
    checks: [
      {
        q: "Hoe oud was Van Gogh bij **dood**?",
        options: ["37 jaar", "85", "20", "60"],
        answer: 0,
        wrongHints: [null, "Veel ouder.", "Te jong.", "Ouder."],
      },
      {
        q: "Hoeveel schilderijen verkocht hij **tijdens leven**?",
        options: ["1 schilderij", "Honderden", "Nul", "Duizend"],
        answer: 0,
        wrongHints: [null, "Veel minder.", "Wel 1.", "Niet."],
      },
      {
        q: "Welk **beroemd schilderij**?",
        options: ["Zonnebloemen", "Nachtwacht", "Meisje met Parel", "Watermolen"],
        answer: 0,
        wrongHints: [null, "Rembrandt.", "Vermeer.", "Niet."],
      },
      {
        q: "Waar is **Van Gogh Museum**?",
        options: ["Amsterdam", "Den Haag", "Eindhoven", "Parijs"],
        answer: 0,
        wrongHints: [null, "Mauritshuis.", "Niet hier.", "Frans."],
      },
    ],
  },
  {
    title: "Mondriaan + abstracte kunst",
    explanation:
      "Begin 20e eeuw: kunst werd **abstract** — niet meer realistisch, maar **vormen + kleuren + emoties**.\n\n**Piet Mondriaan** *(1872-1944)*:\n• Voluit: Pieter Mondriaan, later **'Mondrian'**.\n• Geboren in **Amersfoort**.\n• Begon realistisch *(boomen + landschappen)*.\n• Steeds **abstracter** → uiteindelijk alleen **rechthoeken + 3 kleuren**.\n• Stichter van kunststroming **De Stijl** *(1917)*.\n\n**Stijl-evolutie**:\n• Vroege werk: realistische bomen.\n• Daarna: bomen abstract maken — alleen lijnen.\n• Eind: alleen **horizontale + verticale lijnen** + **primaire kleuren** *(rood, geel, blauw)* + zwart + wit.\n\n**Belangrijke werken**:\n• **Compositie met groot rood vlak, geel, zwart, grijs en blauw** *(1921)*.\n• **Victory Boogie Woogie** *(1942-1944, onaf)* — geïnspireerd door jazz NYC.\n• **Broadway Boogie Woogie** *(1942-1943)*.\n\n**De Stijl** *(beweging)*:\n• Mondriaan + **Theo van Doesburg** + anderen.\n• Tijdschrift 'De Stijl' uitgegeven.\n• Verspreidde naar architectuur + design.\n\n**Gerrit Rietveld** *(1888-1964)*:\n• NL-architect + meubelmaker, lid De Stijl.\n• **Rietveld-stoel** *(1918)* — beroemde stoel met rechthoeken.\n• **Rietveld-Schröder-Huis** in Utrecht *(1924, UNESCO)*.\n• Heel kleurrijk + functioneel.\n\n**M.C. Escher** *(1898-1972)*:\n• Niet 'abstract' maar wel speciaal.\n• Maakte **onmogelijke figuren** *(trappen die op zich zelf eindigen)*.\n• Hand die zichzelf tekent.\n• Bekend van **tessellaties** *(figuren die in elkaar passen)*.\n• Wereldwijd vooral populair in jaren 1960-1970 *(hippies, wetenschappers)*.\n\n**Karel Appel** *(1921-2006)*:\n• Lid van groep **CoBrA** *(Kopenhagen, Brussel, Amsterdam)*.\n• Wilde **kinderlijke + spontane** kunst.\n• Felle kleuren + groffe vormen.\n• 'Een vraag, wat is mooi?' — beroemd citaat.\n\n**Cito-feitje**:\nDe **iconische Mondriaan-stijl** *(witte vlakken + zwarte lijnen + primaire kleuren)* werd ook gebruikt in mode *(Yves Saint Laurent 'Mondrian-jurken', 1965)* + design *(L'Oréal, Nike)*. Daardoor wereldberoemd.",
    checks: [
      {
        q: "**Mondriaan** is bekend om?",
        options: ["Rechthoeken + primaire kleuren", "Zonnebloemen", "Nachtwacht", "Foto's"],
        answer: 0,
        wrongHints: [null, "Van Gogh.", "Rembrandt.", "Niet."],
      },
      {
        q: "Welke **primaire kleuren** gebruikte Mondriaan?",
        options: ["Rood + geel + blauw", "Groen + paars + oranje", "Alle kleuren", "Alleen zwart-wit"],
        answer: 0,
        wrongHints: [null, "Secundair.", "Nee.", "Wel + drie."],
      },
      {
        q: "Wat is **De Stijl**?",
        options: ["Kunstbeweging 1917 (Mondriaan/Doesburg)", "Schilderij", "Kleur", "Museum"],
        answer: 0,
        wrongHints: [null, "Niet één.", "Niet.", "Niet."],
      },
      {
        q: "Wie maakte **onmogelijke trappen**?",
        options: ["M.C. Escher", "Mondriaan", "Rembrandt", "Vermeer"],
        answer: 0,
        wrongHints: [null, "Abstract.", "Realistisch.", "Realistisch."],
      },
    ],
  },
  {
    title: "Moderne NL-kunst + musea",
    explanation:
      "Naast schilders ook **moderne kunst** + **architectuur** + **design** + **fotografie**.\n\n**Moderne / hedendaagse kunstenaars NL**:\n\n**Anton Pieck** *(1895-1987)*:\n• Romantische sprookjes-illustraties.\n• Maakte ontwerpen voor **Efteling** *(1952)*.\n• Bekend van kalender-tekeningen.\n\n**Dick Bruna** *(1927-2017)*:\n• Bedacht **Nijntje (Miffy)** *(1955)*.\n• Eenvoudige zwarte lijnen + primaire kleuren.\n• Wereldwijd bekend kinderboek-figuur.\n• Werkte vooral in Utrecht.\n\n**Joost Swarte** *(1947+)*:\n• Stripteknaar — 'clear line'-stijl.\n• Tekende ook gebouwen *(Toneelschuur Haarlem)*.\n\n**Marlene Dumas** *(1953+)*:\n• Zuid-Afrikaans-NL.\n• Schilderijen van mensen.\n• Donker + emotioneel.\n\n**Rineke Dijkstra** *(1959+)*:\n• Fotograaf.\n• Beroemd om strand-portretten van tieners.\n\n**Erwin Olaf** *(1959-2023)*:\n• Fotograaf.\n• Theatrale + opgepoetste foto's.\n\n**Belangrijke NL-musea**:\n\n**Rijksmuseum** *(Amsterdam)*:\n• Grootste museum NL.\n• Nachtwacht + Vermeer + Hals + andere meesters.\n• 1 miljoen bezoekers per jaar.\n• Heropend 2013 na grote renovatie.\n\n**Van Gogh Museum** *(Amsterdam)*:\n• ~200 Van Gogh schilderijen.\n• Brief-collectie aan Theo.\n• Tweede meest bezochte NL-museum.\n\n**Mauritshuis** *(Den Haag)*:\n• 'Meisje met de Parel' van Vermeer.\n• Klein maar zeer beroemd.\n\n**Kröller-Müller Museum** *(Otterlo, Hoge Veluwe)*:\n• 2e grootste Van Gogh-collectie ter wereld.\n• Beeldenpark.\n\n**Stedelijk Museum** *(Amsterdam)*:\n• Moderne kunst *(Mondriaan, Appel, etc.)*.\n• Iconisch 'badkuip'-gebouw.\n\n**Boijmans Van Beuningen** *(Rotterdam)*:\n• Brede collectie van Bosch tot nu.\n\n**Frans Hals Museum** *(Haarlem)*:\n• Gewijd aan Frans Hals + tijdgenoten.\n\n**Andere musea**:\n• Dordrechts Museum *(Dordrecht)*.\n• Singer Museum *(Laren)*.\n• Bonnefantenmuseum *(Maastricht)*.\n• Museum Het Valkhof *(Nijmegen)*.\n\n**Tips voor museumbezoek**:\n• **Museumkaart**: voor €76/jaar gratis naar 500+ musea.\n• **Kids vaak gratis** of korting.\n• **Audio-tour** of app: nuttig voor uitleg.\n• Niet meer dan **2 uur** — overweldigd.\n• **Stop bij wat je raakt**, niet alles bekijken.\n\n**Kunst maken**:\nNiet alleen kijken — zelf maken is ook leuk!\n• Schilderen + tekenen.\n• Foto's maken.\n• Klei + boetseren.\n• Digital kunst *(Procreate, Photoshop)*.\n• Stripverhalen.\n\n**Cito-feitje**:\nIn 1990 werd **Vincent's broer Theo van Gogh** *(naamgenoot kleinkind van Vincent's broer)* vermoord — de filmregisseur. Niet hetzelfde als Vincent's broer Theo. Verwarrend!",
    checks: [
      {
        q: "Wie bedacht **Nijntje**?",
        options: ["Dick Bruna (1955)", "Anton Pieck", "Mondriaan", "Van Gogh"],
        answer: 0,
        wrongHints: [null, "Efteling.", "Abstract.", "Vooraf."],
      },
      {
        q: "Waar staat **Het Meisje met de Parel**?",
        options: ["Mauritshuis Den Haag", "Rijksmuseum", "Louvre", "Stedelijk"],
        answer: 0,
        wrongHints: [null, "Nachtwacht.", "Frans.", "Modern."],
      },
      {
        q: "Wat is een **Museumkaart**?",
        options: ["Jaarkaart voor 500+ musea", "App", "Toegangsbewijs 1x", "Krant"],
        answer: 0,
        wrongHints: [null, "Niet kaart.", "Niet jaar.", "Niet."],
      },
      {
        q: "Wie ontwierp **Efteling**?",
        options: ["Anton Pieck", "Bruna", "Mondriaan", "Hals"],
        answer: 0,
        wrongHints: [null, "Nijntje.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — kunstenaars mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wie schilderde **De Nachtwacht**?", options: ["Rembrandt", "Vermeer", "Van Gogh", "Mondriaan"], answer: 0, wrongHints: [null, "Klein-werk.", "Veel later.", "Veel later."] },
      { q: "Wie schilderde **Zonnebloemen**?", options: ["Van Gogh", "Rembrandt", "Vermeer", "Mondriaan"], answer: 0, wrongHints: [null, "Realistisch.", "Klein.", "Abstract."] },
      { q: "**Meisje met de Parel** is van?", options: ["Vermeer", "Rembrandt", "Hals", "Steen"], answer: 0, wrongHints: [null, "Andere.", "Andere.", "Chaos-scènes."] },
      { q: "**Mondriaan** stijl?", options: ["Rechthoeken + primaire kleuren", "Realistisch", "Donker", "Sprookjes"], answer: 0, wrongHints: [null, "Tegenovergesteld.", "Niet.", "Niet."] },
      { q: "Wie bedacht **Nijntje**?", options: ["Dick Bruna", "Pieck", "Mondriaan", "Hals"], answer: 0, wrongHints: [null, "Efteling.", "Niet.", "Niet."] },
      { q: "**Grootste museum** NL?", options: ["Rijksmuseum Amsterdam", "Mauritshuis", "Bonnefanten", "Eftelingmuseum"], answer: 0, wrongHints: [null, "Klein.", "Niet grootst.", "Pretpark."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const nederlandseKunstenaarsPo = {
  id: "nederlandse-kunstenaars-po",
  title: "Nederlandse kunstenaars (Cito groep 6-8)",
  emoji: "🎨",
  level: "groep6-8",
  subject: "geschiedenis",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — cultuur / kunstgeschiedenis",
  prerequisites: [
    { id: "gouden-eeuw-geschiedenis", title: "Gouden Eeuw", niveau: "klas2-3" },
  ],
  intro:
    "Nederlandse kunstenaars voor Cito groep 6-8 — Rembrandt (Nachtwacht) + Vermeer (Meisje met Parel) + Gouden Eeuw (Jan Steen/Hals) + Van Gogh (Zonnebloemen/Sterrennacht) + Mondriaan + De Stijl (Rietveld) + Escher + moderne (Bruna/Pieck) + musea. ~15 min.",
  triggerKeywords: [
    "kunstenaar", "schilder", "schilderij",
    "Rembrandt", "Nachtwacht",
    "Vermeer", "Meisje met de Parel", "Delft",
    "Van Gogh", "Vincent", "Zonnebloemen", "Sterrennacht",
    "Mondriaan", "De Stijl", "Rietveld",
    "Escher", "onmogelijke figuren",
    "Dick Bruna", "Nijntje", "Anton Pieck", "Efteling",
    "Rijksmuseum", "Mauritshuis", "Van Gogh Museum",
  ],
  chapters,
  steps,
};

export default nederlandseKunstenaarsPo;
