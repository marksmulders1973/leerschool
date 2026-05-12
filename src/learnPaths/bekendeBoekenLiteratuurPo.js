// Leerpad: Bekende kinderboeken + literatuur - groep 6-8.
// Cito-taal/cultuur. 1F. 4 stappen.

const stepEmojis = ["📖", "👧", "✍️", "🏆"];

const chapters = [
  { letter: "A", title: "Annie M.G. Schmidt + klassiek", emoji: "📖", from: 0, to: 0 },
  { letter: "B", title: "Jeugdboeken + serie", emoji: "👧", from: 1, to: 1 },
  { letter: "C", title: "Anne Frank + Multatuli", emoji: "✍️", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Annie M.G. Schmidt + klassieke kinderboeken",
    explanation:
      "**Annie M.G. Schmidt** *(1911-1995)* = beroemdste **kinderboekenschrijfster** van NL.\n\n**Wie was zij?**\n• Voluit: **Anna Maria Geertruida Schmidt**.\n• Geboren in **Kapelle** *(Zeeland)*.\n• Werkte eerst als **bibliothecaris**.\n• Begon schrijven voor radio + tijdschriften.\n• Schreef ook **toneelstukken** + **musicals**.\n• Won veel prijzen, o.a. **Hans Christian Andersen Prijs** *(1988, hoogste internationale kinderboek-prijs)*.\n• Stierf 1995 *(suïcide door uitzichtloze gezondheid)*.\n\n**Beroemdste boeken**:\n\n**Jip en Janneke** *(1953-1960)*:\n• Korte verhaaltjes over kleuter-broer-en-zus.\n• Eerst in tijdschriften, later in boeken.\n• Tekeningen van **Fiep Westendorp**.\n• 6 delen — verkocht miljoenen.\n• Vertaald in 20+ talen.\n\n**Pluk van de Petteflet** *(1971)*:\n• Jongetje Pluk woont in de torenflat 'De Petteflet'.\n• Heeft brandweerauto-tje.\n• Maakt vrienden: torteltje, mevrouw Helderder, de Stampertjes.\n• Tekeningen Fiep Westendorp.\n\n**Otje** *(1980)*:\n• Meisje Otje en haar papa Tos *(kok)*.\n• Otje kan dieren verstaan.\n• Familieverhaal met avontuur.\n\n**Andere Schmidt-boeken**:\n• Floddertje *(meisje dat alles vies maakt)*.\n• Wiplala *(klein wezen)*.\n• Minoes *(kat die mens wordt — verfilmd in 2001 met Carice van Houten)*.\n• Abeltje *(kleine man maakt avonturen)*.\n\n**Liedjes + gedichten**:\n• Schreef ~200 liedjes, vele beroemd.\n• 'Dikkertje Dap' *(over giraffe)*.\n• 'De Lapjeskat'.\n• 'Sebastiaan de spin'.\n• Hele generaties NL-kinderen zingen ze nog.\n\n**Fiep Westendorp** *(1916-2004)*:\n• **Illustratrice** van Schmidts boeken.\n• Eenvoudige zwarte lijntjes.\n• Iconisch — niet verwarbaar.\n\n**Andere klassieke NL-kinderschrijvers**:\n\n**Paul Biegel** *(1925-2006)*:\n• Sprookjesachtige verhalen.\n• 'Koning van de Kopermijnberg'.\n• '12 Sloeg de Klok'.\n\n**Tonke Dragt** *(1930+)*:\n• Fantasy-jeugdboeken.\n• 'De Brief voor de Koning' *(1962)* — verfilmd op Netflix.\n• 'Geheimen van het Wilde Woud'.\n\n**Guus Kuijer** *(1942+)*:\n• Realistisch, herkenbaar.\n• 'Het Boek van Alle Dingen'.\n• 'Polleke' *(serie van 5)*.\n• Won Astrid Lindgren Award *(2012)*.\n\n**Joke van Leeuwen** *(1952+)*:\n• Humoristisch + filosofisch.\n• 'De Verhalen' *(Een Indiaan als jij en ik)*.\n\n**Internationaal beroemd**:\n• **Roald Dahl** *(Brits, 'Sjakie + chocoladefabriek', 'Matilda', 'BFG')*.\n• **J.K. Rowling** *(Brits, Harry Potter)*.\n• **Astrid Lindgren** *(Zweeds, Pippi Langkous)*.\n• **Tove Jansson** *(Fins, Moemins)*.\n\n**Cito-feitje**:\nDe **Gouden Griffel** is sinds 1971 jaarlijkse prijs voor beste NL-jeugdboek. **Annie M.G. Schmidt** won 'm meerdere keren — 'Pluk van de Petteflet' werd in 2007 verkozen tot **beste NL-jeugdboek van de 20e eeuw**.",
    checks: [
      {
        q: "Wie schreef **Jip en Janneke**?",
        options: ["Annie M.G. Schmidt", "Roald Dahl", "Tonke Dragt", "Multatuli"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Brits.", "Andere.", "Volwassen."],
      },
      {
        q: "Wie maakte **tekeningen** bij Schmidt?",
        options: ["Fiep Westendorp", "Dick Bruna", "Anton Pieck", "Rembrandt"],
        answer: 0,
        wrongHints: [null, "Klopt — iconisch.", "Nijntje.", "Efteling.", "Veel ouder."],
      },
      {
        q: "**Pluk van de Petteflet** — wat is dat?",
        options: ["Jongetje in flat met brandweerauto", "Kat die mens wordt", "Spin", "Indiaan"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Minoes.", "Sebastiaan-liedje.", "Andere."],
      },
      {
        q: "**Hoogste internationale kinderboek-prijs** die Schmidt won?",
        options: ["Hans Christian Andersen Prijs", "Nobelprijs", "Oscar", "Gouden Pen"],
        answer: 0,
        wrongHints: [null, "Klopt — 1988.", "Geen kinder.", "Film.", "Niet."],
      },
    ],
  },
  {
    title: "Jeugdboeken + populaire series",
    explanation:
      "Naast klassiek zijn er **moderne series** populair bij groep 6-8.\n\n**Carry Slee** *(1949+)*:\n• Realistische jeugdboeken voor 10+.\n• Onderwerpen: pesten, scheiding, drugs, vriendschap.\n• Boeken: 'Spijt!' *(over pesten + zelfmoord)*, 'Razend', 'Afblijven'.\n• Verkochte miljoenen.\n• Eerst zelf uitgegeven.\n\n**Francine Oomen** *(1958+)*:\n• 'Hoe overleef ik...'-serie *(13+ boeken)*.\n• Over Rosa en haar leven *(school, jongens, ouders)*.\n• Voor meiden 10-14.\n\n**Mirjam Mous** *(1963+)*:\n• Spannende boeken voor 12+.\n• 'Boy 7', 'Vigil 9'.\n\n**Jacques Vriens** *(1946+)*:\n• Realistische verhalen, vaak groep 8.\n• 'Achtste-groepers Huilen Niet' *(over groep 8-eindgevoel)* — beroemd verfilmd 2012.\n• 'Meester Jaap' *(serie)*.\n\n**Internationale series voor PO**:\n\n**Harry Potter** *(J.K. Rowling, 1997-2007)*:\n• 7 delen over jonge tovenaar.\n• Verkocht 600+ miljoen exemplaren.\n• 8 films.\n• Themaparken Orlando + Hollywood + Japan.\n\n**Hunger Games, Percy Jackson, Bouwer, Geronimo Stilton** etc.\n\n**Dolfje Weerwolfje** *(Paul van Loon)*:\n• Jongetje wordt 's nachts weerwolf.\n• 25+ delen.\n• Verfilmd.\n\n**Sammie + de Mannen** *(Dirk Nielandt)*.\n\n**Strips + comics**:\n• **Suske en Wiske** *(Willy Vandersteen, sinds 1945)*.\n• **Asterix** *(René Goscinny + Albert Uderzo, Frans)*.\n• **Tintin / Kuifje** *(Hergé, Belgisch)*.\n• **Donald Duck-weekblad** *(Disney)* — 200.000 NL-abonnees.\n• **Manga** *(Japans)* steeds populairder.\n\n**Bibliotheek**:\n• In NL ~700 bibliotheken.\n• **Gratis** voor jongeren onder 18 *(soms abonnement nodig)*.\n• Lenen 5-15 boeken tegelijk *(2-3 weken)*.\n• Niet teruggeven = boete *(€0,15-0,30 per dag)*.\n\n**E-readers + audio-boeken**:\n• Apps: Yindo, Onleihe.\n• Audio: Storytel, audible.\n\n**Lezen + brein**:\n• Lezen verbetert **woordenschat** + **concentratie** + **empathie**.\n• Studies: kinderen die ouders **dagelijks voorgelezen** krijgen, scoren beter op school.\n• Belangrijk: lees wat je leuk vindt — niet alleen 'echte boeken'.\n\n**Top-tips Cito**:\nLees veel verschillende dingen:\n• Tijdschrift, krant, strip, roman, gedicht.\n• Versterkt **leesvaardigheid + woordenschat** = goed voor Cito.\n\n**Kinderboekenweek** 📚:\n• Jaarlijks in **oktober** *(2 weken)*.\n• Thema verschilt per jaar.\n• **Kinderboekenweek-geschenk**: gratis boek bij €15 boeken.\n• **Penseel** + **Griffel**-prijzen uitgereikt.\n• Sinds 1955.\n\n**Cito-feitje**:\nDe **'Kinderboekenweek 2024'** had als thema **'Tijdmachine'** *(geschiedenis-onderwerp)*. Het geschenk werd geschreven door **Bibi Dumon Tak**.",
    checks: [
      {
        q: "Welke schrijfster: **'Hoe overleef ik...'-serie**?",
        options: ["Francine Oomen", "Annie M.G. Schmidt", "Carry Slee", "Mirjam Mous"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Klassiek.", "Pesten.", "Spanning."],
      },
      {
        q: "**Achtste-groepers Huilen Niet** door?",
        options: ["Jacques Vriens", "Schmidt", "Vriens", "Roald Dahl"],
        answer: 0,
        wrongHints: [null, "Klopt — verfilmd 2012.", "Niet.", "Wel Vriens.", "Niet."],
      },
      {
        q: "Wanneer **Kinderboekenweek**?",
        options: ["Oktober (2 wkn)", "Februari", "Mei", "Geen vaste tijd"],
        answer: 0,
        wrongHints: [null, "Klopt — sinds 1955.", "Niet.", "Niet.", "Wel."],
      },
      {
        q: "Hoeveel **Harry Potter-boeken**?",
        options: ["7 delen", "1", "100", "3"],
        answer: 0,
        wrongHints: [null, "Klopt — + extra-boeken.", "Te weinig.", "Te veel.", "Te weinig."],
      },
    ],
  },
  {
    title: "Anne Frank + grote NL-literatuur",
    explanation:
      "**Anne Frank** *(1929-1945)* = beroemdste NL-jonge schrijfster.\n\n**Wie was Anne?**\n• Geboren in Frankfurt, Duitsland *(joods gezin)*.\n• Vluchtte met familie naar **Amsterdam** *(1933)* — wegens **nazi's**.\n• Vader **Otto Frank** runde bedrijf 'Opekta'.\n• Toen Duitsers NL bezetten *(1940)* → joden vervolgd.\n\n**Onderduiken** *(1942-1944)*:\n• Familie verstopt in **achterhuis** *(Prinsengracht 263, Amsterdam)*.\n• Anne was **13 jaar**.\n• Met haar familie: ouders + zus **Margot** + 4 anderen *(familie Van Pels + tandarts Pfeffer)*.\n• 25 maanden in stilte + angst.\n\n**Dagboek**:\n• Anne kreeg **dagboek voor 13e verjaardag** *(juni 1942)*.\n• Schreef in over haar leven + emoties + dromen.\n• Wilde **schrijfster of journalist** worden.\n• 'Lieve Kitty' — schreef alsof aan vriendin.\n\n**Verraden + gepakt**:\n• Augustus 1944: nazi's vonden hen na **verraad** *(door wie? — onbekend tot vandaag)*.\n• Naar **kampen** in Duitsland + Polen.\n• Anne + Margot stierven in **Bergen-Belsen** in **februari/maart 1945** *(precieze datum onbekend — vlak voor bevrijding kamp in april)* aan **tyfus**.\n• Alleen **vader Otto** overleefde.\n\n**Dagboek gepubliceerd**:\n• Otto vond dagboek na oorlog.\n• Eerste editie 1947 *(NL)*.\n• Vertaald in **70+ talen**.\n• Verkocht **35+ miljoen** exemplaren.\n• Een van meest gelezen boeken ooit.\n\n**Anne Frank Huis** *(museum)*:\n• Amsterdam, Prinsengracht 263.\n• Originele achterhuis te bezichtigen.\n• Boekenkast voor verborgen ingang nog te zien.\n• 1,3 miljoen bezoekers per jaar *(2024)*.\n• Beste reservering ruim van te voren.\n\n**Anne's beroemde citaat**:\n*'Ondanks alles geloof ik nog steeds dat de mensen werkelijk goed zijn van hart.'*\n\nNu door **Anne Frank Stichting** wordt onderwijs gegeven aan jongeren over discriminatie + tolerantie.\n\n**Grote Nederlandse schrijvers** *(volwassen)*:\n\n**Multatuli** *(1820-1887)*:\n• Pseudoniem van **Eduard Douwes Dekker**.\n• Schreef **'Max Havelaar'** *(1860)*.\n• Beroemde aanklacht tegen NL-koloniaal beleid in **Nederlands-Indië**.\n• Geld + macht voor Europeanen, leed voor Javanen *(koffieboeren)*.\n• Boek leidde tot debat → langzaam beter beleid.\n• Multatuli = 'ik heb veel geleden' *(Latijn)*.\n• 'Max Havelaar' = nu ook **fair-trade** keurmerk voor eerlijke handel.\n\n**Harry Mulisch** *(1927-2010)*:\n• 'De Aanslag' *(WO2-trauma)* — verfilmd, Oscar.\n• 'De Ontdekking van de Hemel' *(filosofisch)*.\n\n**Cees Nooteboom** *(1933+)*:\n• Reisverhalen + romans.\n• 'Het volgende verhaal'.\n\n**Hella Haasse** *(1918-2011)*:\n• Historische romans.\n• 'Oeroeg' *(Indonesië)*.\n\n**Gerard Reve** *(1923-2006)*:\n• 'De Avonden' *(1947)* — naoorlogs gevoel.\n• 'Brieven' + religieuze + erotische schrijvers.\n\n**Hendrik Marsman, Martinus Nijhoff, Lucebert** — dichters.\n\n**Internationaal**:\n• **Etty Hillesum** *(joods, dagboek voor + tijdens WO2)*.\n• **Anne Frank**.\n• **Theo van Gogh** *(filmmaker, vermoord 2004)*.\n\n**Cito-feitje**:\n**Anne Frank's verjaardag** *(12 juni)* wordt soms herdacht. UNESCO heeft haar dagboek opgenomen in **Memory of the World Register** *(2009)* — een van de belangrijkste documenten ooit.",
    checks: [
      {
        q: "Wanneer **gestorven** Anne Frank?",
        options: ["Februari/maart 1945 (Bergen-Belsen)", "1944", "1950", "Overleefd"],
        answer: 0,
        wrongHints: [null, "Klopt — net voor bevrijding kamp april 1945.", "Te vroeg.", "Te laat.", "Helaas niet."],
      },
      {
        q: "Wie schreef **Max Havelaar** (1860)?",
        options: ["Multatuli", "Mulisch", "Schmidt", "Anne Frank"],
        answer: 0,
        wrongHints: [null, "Klopt — pseudoniem Dekker.", "Veel later.", "Kinderboek.", "Dagboek."],
      },
      {
        q: "Waar is **Anne Frank Huis**?",
        options: ["Prinsengracht 263, Amsterdam", "Bergen-Belsen", "Den Haag", "Rotterdam"],
        answer: 0,
        wrongHints: [null, "Klopt — origineel achterhuis.", "Waar overleed.", "Niet.", "Niet."],
      },
      {
        q: "Hoeveel **talen** Anne Frank dagboek?",
        options: ["70+", "1", "5", "200"],
        answer: 0,
        wrongHints: [null, "Klopt — wereldberoemd.", "NL alleen niet waar.", "Veel meer.", "Te veel."],
      },
    ],
  },
  {
    title: "Eind-toets — boeken mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wie schreef **Jip en Janneke**?", options: ["Annie M.G. Schmidt", "Roald Dahl", "Vriens", "Slee"], answer: 0, wrongHints: [null, "Klopt.", "Brits.", "Modern.", "Realistisch."] },
      { q: "Wie tekende **bij Schmidt**?", options: ["Fiep Westendorp", "Bruna", "Pieck", "Rembrandt"], answer: 0, wrongHints: [null, "Klopt.", "Nijntje.", "Efteling.", "Veel ouder."] },
      { q: "**Anne Frank** zat ondergedoken in?", options: ["Achterhuis Prinsengracht 263 Amsterdam", "Den Haag", "Rotterdam", "Frankfurt"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Vluchtte daaruit."] },
      { q: "Wie schreef **Max Havelaar**?", options: ["Multatuli (1860)", "Mulisch", "Vriens", "Schmidt"], answer: 0, wrongHints: [null, "Klopt — over koloniaal kwaad.", "Andere.", "Niet.", "Niet."] },
      { q: "**Kinderboekenweek** = welke maand?", options: ["Oktober", "Januari", "Mei", "Geen"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Wel vast."] },
      { q: "**Harry Potter** = aantal delen?", options: ["7", "1", "100", "3"], answer: 0, wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Te weinig."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const bekendeBoekenLiteratuurPo = {
  id: "bekende-boeken-literatuur-po",
  title: "Bekende boeken + literatuur (Cito groep 6-8)",
  emoji: "📖",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — cultuur / literatuur",
  prerequisites: [
    { id: "dichten-poezie-rijmen-po", title: "Dichten + poezie", niveau: "1F" },
  ],
  intro:
    "Bekende kinderboeken + literatuur voor Cito groep 6-8 — Annie M.G. Schmidt (Jip+Janneke, Pluk, Otje) + Fiep Westendorp + Tonke Dragt + Vriens + moderne (Slee, Oomen) + internationaal (Dahl, Rowling) + Anne Frank + Multatuli + Kinderboekenweek. ~15 min.",
  triggerKeywords: [
    "boek", "boeken", "literatuur",
    "Annie M.G. Schmidt", "Jip Janneke", "Pluk Petteflet",
    "Fiep Westendorp",
    "Tonke Dragt", "Paul Biegel",
    "Jacques Vriens", "Carry Slee", "Francine Oomen",
    "Harry Potter", "Roald Dahl",
    "Anne Frank", "achterhuis", "dagboek",
    "Multatuli", "Max Havelaar",
    "Kinderboekenweek", "Gouden Griffel",
  ],
  chapters,
  steps,
};

export default bekendeBoekenLiteratuurPo;
