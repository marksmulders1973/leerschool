// Leerpad: Bekende kinderboeken + literatuur - groep 6-8.
// Toets-taal/cultuur. 1F. 4 stappen.

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
      "**Annie M.G. Schmidt** *(1911-1995)* = beroemdste **kinderboekenschrijfster** van NL.\n\n**Wie was zij?**\n• Voluit: **Anna Maria Geertruida Schmidt**.\n• Geboren in **Kapelle** *(Zeeland)*.\n• Werkte eerst als **bibliothecaris**.\n• Begon met schrijven voor radio + tijdschriften.\n• Schreef ook **toneelstukken** + **musicals**.\n• Won veel prijzen, o.a. **Hans Christian Andersen Prijs** *(1988, hoogste internationale kinderboek-prijs)*.\n• Stierf in 1995, een dag na haar 84e verjaardag.\n\n**Beroemdste boeken**:\n\n**Jip en Janneke** *(1953-1960)*:\n• Korte verhaaltjes over twee kleuters: buurjongen en buurmeisje.\n• Eerst in tijdschriften, later in boeken.\n• Tekeningen van **Fiep Westendorp**.\n• 6 delen — verkocht miljoenen.\n• Vertaald in 20+ talen.\n\n**Pluk van de Petteflet** *(1971)*:\n• Jongetje Pluk woont in de torenflat 'De Petteflet'.\n• Heeft een rood kraanwagentje.\n• Maakt vrienden: het torteltje, de Stampertjes, meneer Penseel. Tegenstander: mevrouw Helderder.\n• Tekeningen Fiep Westendorp.\n\n**Otje** *(1980)*:\n• Meisje Otje en haar papa Tos *(kok)*.\n• Otje kan dieren verstaan.\n• Familieverhaal met avontuur.\n\n**Andere Schmidt-boeken**:\n• Floddertje *(meisje dat alles vies maakt)*.\n• Wiplala *(klein wezen)*.\n• Minoes *(kat die mens wordt — verfilmd in 2001 met Carice van Houten)*.\n• Abeltje *(liftjongen in een vliegende lift)*.\n\n**Liedjes + gedichten**:\n• Schreef ~200 liedjes, vele beroemd.\n• 'Dikkertje Dap' *(over giraffe)*.\n• 'De Lapjeskat'.\n• 'Sebastiaan de spin'.\n• Hele generaties NL-kinderen zingen ze nog.\n\n**Fiep Westendorp** *(1916-2004)*:\n• **Illustratrice** van Schmidts boeken.\n• Eenvoudige zwarte lijntjes.\n• Iconisch — niet te verwarren.\n\n**Andere klassieke NL-kinderschrijvers**:\n\n**Paul Biegel** *(1925-2006)*:\n• Sprookjesachtige verhalen.\n• 'De koning van de Kopermijnen'.\n• '12 Sloeg de Klok'.\n\n**Tonke Dragt** *(1930-2024)*:\n• Fantasy-jeugdboeken.\n• 'De Brief voor de Koning' *(1962)* — verfilmd op Netflix.\n• 'Geheimen van het Wilde Woud'.\n\n**Guus Kuijer** *(1942+)*:\n• Realistisch, herkenbaar.\n• 'Het Boek van Alle Dingen'.\n• 'Polleke' *(serie van 5)*.\n• Won Astrid Lindgren Award *(2012)*.\n\n**Joke van Leeuwen** *(1952+)*:\n• Humoristisch + filosofisch.\n• 'Iep!', 'Toen mijn vader een struik werd'.\n\n**Internationaal beroemd**:\n• **Roald Dahl** *(Brits, 'Sjakie + chocoladefabriek', 'Matilda', 'BFG')*.\n• **J.K. Rowling** *(Brits, Harry Potter)*.\n• **Astrid Lindgren** *(Zweeds, Pippi Langkous)*.\n• **Tove Jansson** *(Fins, Moemins)*.\n\n**Toets-feitje**:\nDe **Gouden Griffel** is sinds 1971 jaarlijkse prijs voor beste NL-jeugdboek. **Annie M.G. Schmidt** won 'm in **1981** met **'Otje'**.",
    checks: [
      {
        q: "Wie schreef **Jip en Janneke**?",
        options: ["Annie M.G. Schmidt", "Roald Dahl", "Tonke Dragt", "Multatuli"],
        answer: 0,
        wrongHints: [null, "Roald Dahl schreef in het Engels — Jip en Janneke is een Nederlands boek.", "Tonke Dragt schreef dikke avonturenboeken, geen korte verhaaltjes voor kleuters.", "Multatuli schreef lang geleden boeken voor volwassenen."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Annie M.G. Schmidt?", tekst: "**Annie M.G. Schmidt** (1911-1995) was de **beroemdste Nederlandse kinderboekenschrijfster** aller tijden. Ze schreef gedichten, verhalen, liedjes en musicals." },
            { titel: "Bekende werken", tekst: "**Jip en Janneke** (verhalen over 2 buurkinderen), **Pluk van de Petteflet** (jongetje met rood kraanwagentje), **Minoes** (kat die mens wordt), **Otje**, **Pippeloentje**, **Sebastiaan**." },
            { titel: "Stijl + onderscheidingen", tekst: "Eenvoudige taal, vrolijk, soms een beetje opstandig tegen autoriteit. Won in 1988 de **Hans Christian Andersen Prijs** — de 'Nobelprijs' van kinderboeken." },
          ],
          woorden: [
            { woord: "Annie M.G. Schmidt", uitleg: "NL-kinderboekenschrijfster, leefde 1911-1995." },
            { woord: "Jip en Janneke", uitleg: "Verhalen over 2 buurkinderen, met tekeningen van Fiep Westendorp." },
          ],
          theorie: "Toets-feit: NL-schrijvers onthouden — Schmidt (klassiek), Roald Dahl (Brits, 'BFG'), Tonke Dragt ('De brief voor de koning'), Paul van Loon ('Dolfje'), Carry Slee (realistisch).",
          voorbeelden: [
            { type: "stap", tekst: "Pluk woont in de Petteflet met meneer Penseel — Schmidt-boek uit 1971." },
            { type: "stap", tekst: "Annie M.G. Schmidt staat op een postzegel + er is een Annie M.G. Schmidtprijs (voor het beste theaterlied)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Annie M.G. Schmidt = klassieke NL-kinderboeken. Roald Dahl = Britse klassieke." }],
          niveaus: {
            basis: "Annie M.G. Schmidt schreef Jip en Janneke + Pluk + Minoes.",
            simpeler: "Beroemdste NL-kinderboekenschrijver, jaren 1950-1990.",
            nogSimpeler: "Schmidt = Jip en Janneke.",
          },
        },
      },
      {
        q: "Wie maakte de **tekeningen** bij de boeken van Annie M.G. Schmidt?",
        options: ["Fiep Westendorp", "Dick Bruna", "Anton Pieck", "Marten Toonder"],
        answer: 0,
        wrongHints: [null, "Dick Bruna tekende vooral bij zijn eigen boeken.", "Anton Pieck tekende ouderwetse, sprookjesachtige platen, zoals voor de Efteling.", "Marten Toonder tekende strips, zoals Tom Poes."],
        uitlegPad: {
          stappen: [
            { titel: "Fiep Westendorp (1916-2004)", tekst: "**Fiep Westendorp** was de **tekenares** die de plaatjes maakte bij Annie M.G. Schmidt's boeken. Beroemd duo: zij tekende, Schmidt schreef." },
            { titel: "Iconische stijl", tekst: "Eenvoudige, herkenbare lijnen. Jip en Janneke = silhouet-tekeningen. Pluk = kleine jongen met rood kraanwagentje. Heel typisch Nederlandse kinderboek-stijl." },
            { titel: "Niet verwarren met andere illustratoren", tekst: "**Dick Bruna** = Nijntje (eenvoudige zwart-witte lijnen + kleurvlakken). **Anton Pieck** = Efteling (sprookjes-stijl). Verschillende beroemde Nederlandse illustratoren." },
          ],
          woorden: [
            { woord: "Fiep Westendorp", uitleg: "Illustratrice bij Schmidt's boeken." },
            { woord: "Dick Bruna", uitleg: "Maker van Nijntje (Miffy)." },
            { woord: "Anton Pieck", uitleg: "Tekenaar van de Efteling-sfeer." },
          ],
          theorie: "Toets-feit NL-illustratoren: Schmidt + Westendorp werkten 40+ jaar samen. Geweldig duo. Bekend zijn ook: Bruna (Nijntje wereldwijd), Pieck (Efteling), Marit Törnqvist.",
          voorbeelden: [
            { type: "stap", tekst: "Jip en Janneke = silhouet-figuurtjes van Fiep Westendorp. Nijntje = vlak konijntje van Dick Bruna." },
            { type: "stap", tekst: "Jip en Janneke verscheen eerst als wekelijks verhaaltje mét tekening in de krant Het Parool." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Schmidt + Westendorp = team. Bruna = Nijntje. Pieck = Efteling." }],
          niveaus: {
            basis: "Fiep Westendorp tekende Jip en Janneke (+ andere Schmidt-boeken).",
            simpeler: "Schmidt schreef, Westendorp tekende — vast duo.",
            nogSimpeler: "Westendorp = tekeningen Schmidt.",
          },
        },
      },
      {
        q: "Waar gaat **Pluk van de Petteflet** over?",
        options: ["Een jongetje met een kraanwagen in een flat", "Een poes die in een mens verandert", "Een meisje dat dieren kan verstaan", "Een mannetje dat mensen klein tovert"],
        answer: 0,
        wrongHints: [null, "Dat is Minoes — ook van Annie M.G. Schmidt.", "Dat is Otje — ook van Annie M.G. Schmidt.", "Dat is Wiplala — ook van Annie M.G. Schmidt."],
        uitlegPad: {
          stappen: [
            { titel: "Wie is Pluk?", tekst: "**Pluk** is het hoofdpersoon van een klassiek NL-kinderboek van **Annie M.G. Schmidt** (1971). Een **jongetje** dat in z'n eentje gaat wonen in een grote flat genaamd 'de **Petteflet**'." },
            { titel: "Zijn rode kraanwagentje", tekst: "Pluk rijdt rond in z'n eigen kleine **rode kraanwagentje**. Hij helpt mensen + dieren in nood — een lieve jonge held." },
            { titel: "Andere personages", tekst: "Personages die Pluk tegenkomt:\n• **Mevrouw Helderder** — buurvrouw die alles schoon wil (tegenstander)\n• **De Stampertjes** — drukke kinderen\n• Het **torteltje** dat hij redt\n• **Meneer Penseel** — schilder.\nVoorgelezen door generaties NL-ouders." },
          ],
          woorden: [
            { woord: "Pluk", uitleg: "Jongetje hoofd-personage van Schmidt's boek." },
            { woord: "Petteflet", uitleg: "Verzonnen flat-naam waar Pluk woont." },
          ],
          theorie: "Toets-feit: 'Pluk van de Petteflet' is een van de **meest voorgelezen** Nederlandse kinderboeken. Klassieker dus. Niet verwarren met andere Schmidt-boeken: Minoes = kat-die-mens-wordt, Otje = meisje-dat-dieren-verstaat, Wiplala = klein wezentje.",
          voorbeelden: [
            { type: "stap", tekst: "Het boek werd in 2004 verfilmd. Ook musical-versie." },
            { type: "stap", tekst: "'Petteflet' is een Schmidt-bedacht woord, geen echt Nederlands. Hoort bij haar speelse stijl." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Pluk = jongetje + kraanwagentje + Petteflet-flat. Schmidt's beroemdste solo-personage." }],
          niveaus: {
            basis: "Jongetje in flat met rood kraanwagentje.",
            simpeler: "Pluk = hoofdpersoon Schmidt-boek (1971). Woont in Petteflet-flat + rijdt rond met klein rood kraanwagentje.",
            nogSimpeler: "Jongetje met kraanwagentje",
          },
        },
      },
      {
        q: "Welke **hoogste internationale prijs voor kinderboeken** won Annie M.G. Schmidt?",
        options: ["Hans Christian Andersen Prijs", "Nobelprijs voor de Literatuur", "Astrid Lindgren Herdenkingsprijs", "Carnegie Medal"],
        answer: 0,
        wrongHints: [null, "De Nobelprijs is geen prijs speciaal voor kinderboeken.", "Die prijs bestaat pas sinds 2002 — Schmidt overleed in 1995.", "Die Engelse prijs is alleen voor boeken in het Engels."],
      },
    ],
  },
  {
    title: "Jeugdboeken + populaire series",
    explanation:
      "Naast klassiek zijn er **moderne series** populair bij groep 6-8.\n\n**Carry Slee** *(1949+)*:\n• Realistische jeugdboeken voor 10+.\n• Onderwerpen: pesten, scheiding, drugs, vriendschap.\n• Boeken: 'Spijt!' *(over pesten + zelfmoord)*, 'Razend', 'Afblijven'.\n• Verkocht miljoenen.\n• Eerst zelf uitgegeven.\n\n**Francine Oomen** *(1958+)*:\n• 'Hoe overleef ik...'-serie *(13+ boeken)*.\n• Over Rosa en haar leven *(school, jongens, ouders)*.\n• Voor meiden 10-14.\n\n**Mirjam Mous** *(1963+)*:\n• Spannende boeken voor 12+.\n• 'Boy 7', 'Vigil 9'.\n\n**Jacques Vriens** *(1946+)*:\n• Realistische verhalen, vaak groep 8.\n• 'Achtste-groepers Huilen Niet' *(over groep 8-eindgevoel)* — beroemd verfilmd 2012.\n• 'Meester Jaap' *(serie)*.\n\n**Internationale series voor PO**:\n\n**Harry Potter** *(J.K. Rowling, 1997-2007)*:\n• 7 delen over jonge tovenaar.\n• Verkocht 600+ miljoen exemplaren.\n• 8 films.\n• Themaparken Orlando + Hollywood + Japan.\n\n**Hunger Games, Percy Jackson, Geronimo Stilton** etc.\n\n**Dolfje Weerwolfje** *(Paul van Loon)*:\n• Jongetje wordt 's nachts weerwolf.\n• 25+ delen.\n• Verfilmd.\n\n**Sammie + de Mannen** *(Dirk Nielandt)*.\n\n**Strips + comics**:\n• **Suske en Wiske** *(Willy Vandersteen, sinds 1945)*.\n• **Asterix** *(René Goscinny + Albert Uderzo, Frans)*.\n• **Tintin / Kuifje** *(Hergé, Belgisch)*.\n• **Donald Duck-weekblad** *(Disney)* — 200.000 NL-abonnees.\n• **Manga** *(Japans)* steeds populairder.\n\n**Bibliotheek**:\n• In NL ~700 bibliotheken.\n• **Gratis** voor jongeren onder 18 *(soms abonnement nodig)*.\n• Lenen 5-15 boeken tegelijk *(3-4 weken)*.\n• Niet teruggeven = boete *(€0,15-0,30 per dag)*.\n\n**E-readers + audio-boeken**:\n• Apps: de online Bibliotheek, Yindo.\n• Audio: Storytel, Audible.\n\n**Lezen + brein**:\n• Lezen verbetert **woordenschat** + **concentratie** + **empathie**.\n• Studies: kinderen die thuis **dagelijks worden voorgelezen**, scoren beter op school.\n• Belangrijk: lees wat je leuk vindt — niet alleen 'echte boeken'.\n\n**Top-tips voor de toets**:\nLees veel verschillende dingen:\n• Tijdschrift, krant, strip, roman, gedicht.\n• Versterkt **leesvaardigheid + woordenschat** = goed voor de Doorstroomtoets.\n\n**Kinderboekenweek** 📚:\n• Jaarlijks in **oktober** *(2 weken)*.\n• Thema verschilt per jaar.\n• **Kinderboekenweek-geschenk**: gratis boek bij €15 boeken.\n• **Penseel** + **Griffel**-prijzen uitgereikt.\n• Sinds 1955.\n\n**Toets-feitje**:\nDe **'Kinderboekenweek 2024'** had als thema **'Lekker eigenwijs!'**.",
    checks: [
      {
        q: "Welke schrijfster schreef de serie **'Hoe overleef ik...'**?",
        options: ["Francine Oomen", "Annie M.G. Schmidt", "Carry Slee", "Mirjam Mous"],
        answer: 0,
        wrongHints: [null, "Annie M.G. Schmidt schreef klassiekers voor jonge kinderen, lang vóór deze serie.", "Carry Slee is bekend van Spijt! en Afblijven.", "Mirjam Mous schrijft vooral spannende boeken, zoals Boy 7."],
      },
      {
        q: "Wie schreef **Achtste-groepers huilen niet**?",
        options: ["Jacques Vriens", "Annie M.G. Schmidt", "Carry Slee", "Roald Dahl"],
        answer: 0,
        wrongHints: [null, "Zij schreef klassiekers als Jip en Janneke — dit boek gaat over groep 8.", "Zij schrijft over pesten en scheiding (Spijt!), niet over het afscheid van groep 8.", "Brits — dit is een oer-Nederlands schoolverhaal."],
      },
      {
        q: "Wanneer is de **Kinderboekenweek**?",
        options: ["Oktober", "Februari", "Mei", "Geen vaste tijd"],
        answer: 0,
        wrongHints: [null, "In februari is het nog winter. De Kinderboekenweek is in de herfst, kort na het begin van het schooljaar. Welke maand is dat?", "In mei is het lente. De Kinderboekenweek is in de herfst, als de blaadjes van de bomen vallen. Welke maand past daarbij?", "De Kinderboekenweek is elk jaar rond dezelfde tijd, alleen het thema is steeds anders. In welk seizoen was het ook alweer?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de Kinderboekenweek?", tekst: "De **Kinderboekenweek** is een jaarlijks evenement in NL om kinderen aan het LEZEN te krijgen. Sinds 1955 elk jaar in oktober." },
            { titel: "Tien dagen in oktober", tekst: "Loopt altijd tien dagen in **oktober**, van woensdag tot en met de zondag van de week erna. Elk jaar een ander thema (2024 was 'Lekker eigenwijs!'). Op scholen + in bibliotheken veel activiteiten." },
            { titel: "Kinderboekenweekgeschenk", tekst: "Bij aankoop van €15 boeken krijg je GRATIS een speciaal boekje dat speciaal voor die week is geschreven. Ook prijzen: Gouden Griffel (beste tekst), Gouden Penseel (beste illustratie)." },
          ],
          woorden: [
            { woord: "Kinderboekenweek", uitleg: "Jaarlijks NL-evenement in oktober om lezen te promoten." },
            { woord: "Gouden Griffel", uitleg: "Prijs voor beste kinderboek-tekst." },
            { woord: "Gouden Penseel", uitleg: "Prijs voor beste kinderboek-illustratie." },
          ],
          theorie: "Toets-feit: Kinderboekenweek is een vast NL-instituut. Hoort bij kennis over Nederlandse cultuur. Wordt georganiseerd door de **CPNB** (Stichting Collectieve Propaganda van het Nederlandse Boek).",
          voorbeelden: [
            { type: "stap", tekst: "Kinderboekenweek 2024: 2-13 oktober, thema 'Lekker eigenwijs!'." },
            { type: "stap", tekst: "Veel scholen hebben in deze week voorleeswedstrijden + auteursbezoeken." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud: oktober + 2 weken + gratis boek bij €15 aankoop." }],
          niveaus: {
            basis: "De Kinderboekenweek is elk jaar in oktober en duurt tien dagen.",
            simpeler: "Oktober-evenement om lezen leuk te maken.",
            nogSimpeler: "Oktober!",
          },
        },
      },
      {
        q: "Uit hoeveel boeken bestaat de **Harry Potter**-serie?",
        options: ["7", "5", "6", "9"],
        answer: 0,
        wrongHints: [null, "Dat zijn er te weinig. De serie loopt door tot Harry bijna volwassen is.", "Dat zijn er te weinig. Na het zesde boek komt er nog een groot slotdeel.", "Dat zijn er te veel. Je denkt misschien aan de films, maar ook die zijn er geen negen."],
      },
    ],
  },
  {
    title: "Anne Frank + grote NL-literatuur",
    explanation:
      "**Anne Frank** *(1929-1945)* = beroemdste NL-jonge schrijfster.\n\n**Wie was Anne?**\n• Geboren in Frankfurt, Duitsland *(joods gezin)*.\n• Vluchtte met familie naar **Amsterdam** *(1933)* — wegens **nazi's**.\n• Vader **Otto Frank** runde bedrijf 'Opekta'.\n• Toen Duitsers NL bezetten *(1940)* → joden vervolgd.\n\n**Onderduiken** *(1942-1944)*:\n• Familie verstopt in **achterhuis** *(Prinsengracht 263, Amsterdam)*.\n• Anne was **13 jaar**.\n• Met haar familie: ouders + zus **Margot** + 4 anderen *(familie Van Pels + tandarts Pfeffer)*.\n• 25 maanden in stilte + angst.\n\n**Dagboek**:\n• Anne kreeg **dagboek voor 13e verjaardag** *(juni 1942)*.\n• Schreef erin over haar leven + emoties + dromen.\n• Wilde **schrijfster of journalist** worden.\n• 'Lieve Kitty' — schreef alsof aan vriendin.\n\n**Verraden + gepakt**:\n• Augustus 1944: nazi's vonden hen na **verraad** *(door wie? — onbekend tot vandaag)*.\n• Naar **kampen** in Duitsland + Polen.\n• Anne + Margot stierven in **Bergen-Belsen** in **februari/maart 1945** *(precieze datum onbekend — vlak voor bevrijding kamp in april)* aan **tyfus**.\n• Alleen **vader Otto** overleefde.\n\n**Dagboek gepubliceerd**:\n• Otto vond dagboek na oorlog.\n• Eerste editie 1947 *(NL)*.\n• Vertaald in **70+ talen**.\n• Verkocht **35+ miljoen** exemplaren.\n• Een van meest gelezen boeken ooit.\n\n**Anne Frank Huis** *(museum)*:\n• Amsterdam, Prinsengracht 263.\n• Originele achterhuis te bezichtigen.\n• Boekenkast voor verborgen ingang nog te zien.\n• 1,3 miljoen bezoekers per jaar *(2024)*.\n• Reserveer het best ruim van tevoren.\n\n**Anne's beroemde citaat**:\n*'Ondanks alles geloof ik nog steeds dat de mensen werkelijk goed zijn van hart.'*\n\nDe **Anne Frank Stichting** geeft nu onderwijs aan jongeren over discriminatie + tolerantie.\n\n**Grote Nederlandse schrijvers** *(volwassen)*:\n\n**Multatuli** *(1820-1887)*:\n• Pseudoniem van **Eduard Douwes Dekker**.\n• Schreef **'Max Havelaar'** *(1860)*.\n• Beroemde aanklacht tegen NL-koloniaal beleid in **Nederlands-Indië**.\n• Geld + macht voor Europeanen, leed voor Javanen *(koffieboeren)*.\n• Boek leidde tot debat → langzaam beter beleid.\n• Multatuli = 'ik heb veel geleden' *(Latijn)*.\n• 'Max Havelaar' = nu ook **fair-trade** keurmerk voor eerlijke handel.\n\n**Harry Mulisch** *(1927-2010)*:\n• 'De Aanslag' *(WO2-trauma)* — verfilmd, Oscar.\n• 'De Ontdekking van de Hemel' *(filosofisch)*.\n\n**Cees Nooteboom** *(1933+)*:\n• Reisverhalen + romans.\n• 'Het volgende verhaal'.\n\n**Hella Haasse** *(1918-2011)*:\n• Historische romans.\n• 'Oeroeg' *(Indonesië)*.\n\n**Gerard Reve** *(1923-2006)*:\n• 'De Avonden' *(1947)* — naoorlogs gevoel.\n• Ook brievenboeken; religieuze + erotische thema's.\n\n**Hendrik Marsman, Martinus Nijhoff, Lucebert** — dichters.\n\n**Internationaal**:\n• **Etty Hillesum** *(joods, dagboek voor + tijdens WO2)*.\n• **Anne Frank**.\n• **Theo van Gogh** *(filmmaker, vermoord 2004)*.\n\n**Toets-feitje**:\n**Anne Frank's verjaardag** *(12 juni)* wordt soms herdacht. UNESCO heeft haar dagboek opgenomen in **Memory of the World Register** *(2009)* — een van de belangrijkste documenten ooit.",
    checks: [
      {
        q: "In welk jaar **stierf** Anne Frank?",
        options: ["1945", "1944", "1950", "1942"],
        answer: 0,
        wrongHints: [null, "In 1944 werd ze opgepakt — daarna leefde ze nog een paar maanden.", "In 1947 gaf haar vader het dagboek al uit.", "In 1942 ging ze juist onderduiken."],
        uitlegPad: {
          stappen: [
            { titel: "Anne's verhaal kort", tekst: "**Anne Frank** (geb. 1929 Frankfurt) zat met haar familie ondergedoken in het achterhuis (Amsterdam) **1942-1944**. In augustus 1944 werden ze **verraden** + opgepakt door de nazi's." },
            { titel: "Naar de kampen", tekst: "Anne + zus Margot werden uiteindelijk naar **Bergen-Belsen** gestuurd (concentratiekamp in Duitsland). Daar stierven ze aan **tyfus** in **februari of maart 1945**." },
            { titel: "Bittere bijna-bevrijding", tekst: "Het kamp werd **15 april 1945** bevrijd door Engelse troepen. Anne stierf maar enkele weken **VÓÓR** die bevrijding. Daarom voelt haar verhaal extra tragisch. Alleen vader Otto overleefde." },
          ],
          woorden: [
            { woord: "Anne Frank", uitleg: "Joods meisje uit Amsterdam dat dagboek schreef tijdens WO2." },
            { woord: "Bergen-Belsen", uitleg: "Nazi-concentratiekamp in NW-Duitsland." },
            { woord: "tyfus", uitleg: "Besmettelijke ziekte (luizen) die in kampen veel doden veroorzaakte." },
          ],
          theorie: "Toets-feit Anne Frank-tijdlijn:\n• **1929** geboren Frankfurt.\n• **1933** familie vlucht naar Amsterdam.\n• **1942** ondergedoken in achterhuis.\n• **1944** verraden + opgepakt.\n• **feb/mrt 1945** overleden Bergen-Belsen.\n• **april 1945** kamp bevrijd.",
          voorbeelden: [
            { type: "stap", tekst: "Otto Frank vond het dagboek na de oorlog en publiceerde het in 1947. Vertaald in 70+ talen." },
            { type: "stap", tekst: "Hetzelfde lot trof miljoenen anderen — Anne staat symbool voor alle joodse kinderen die in WO2 omkwamen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Anne overleed 1945 (vlak vóór bevrijding). Niet 1944 (toen ontdekt) of later (heeft ze nooit beleefd). De zin 'bijna gered' = kern." }],
          niveaus: {
            basis: "Februari/maart 1945, Bergen-Belsen.",
            simpeler: "Anne stierf eind winter 1945 aan tyfus in concentratiekamp Bergen-Belsen, vlak voor het kamp bevrijd werd.",
            nogSimpeler: "1945",
          },
        },
      },
      {
        q: "Wie schreef **Max Havelaar** (1860)?",
        options: ["Multatuli", "Harry Mulisch", "Annie M.G. Schmidt", "Hildebrand"],
        answer: 0,
        wrongHints: [null, "Harry Mulisch leefde in de 20e eeuw — dit boek is van 1860.", "Annie M.G. Schmidt schreef in de 20e eeuw voor kinderen.", "Hildebrand schreef de Camera Obscura, een ander boek uit die tijd."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Multatuli?", tekst: "**Multatuli** is een pseudoniem (schuilnaam) van **Eduard Douwes Dekker** (1820-1887). 'Multatuli' is Latijn voor: 'ik heb veel geleden'. Hij koos die naam toen hij schrijver werd." },
            { titel: "Waar gaat 'Max Havelaar' over?", tekst: "Het boek (1860) is een **aanklacht tegen het Nederlandse koloniaal beleid** in **Nederlands-Indië** (het huidige Indonesië). Dekker werkte daar zelf als ambtenaar en zag hoe de Javanen werden uitgebuit." },
            { titel: "Impact van het boek", tekst: "Het boek schokte de NL-publieke opinie. Veroorzaakte langzaam betere wetten + minder uitbuiting. **Max Havelaar** is later een **fair-trade keurmerk** geworden — symbool voor eerlijke handel met ontwikkelingslanden." },
          ],
          woorden: [
            { woord: "Multatuli", uitleg: "Schrijversnaam van Eduard Douwes Dekker." },
            { woord: "Max Havelaar", uitleg: "Klassieke NL-roman uit 1860 + later fair-trade keurmerk." },
            { woord: "Nederlands-Indië", uitleg: "NL-kolonie 1816-1949, nu Indonesië." },
          ],
          theorie: "Toets-feit Multatuli:\n• Schreef 'Max Havelaar' in **1860**.\n• Was zelf ambtenaar in NL-Indië voor hij schreef.\n• Niet verwarren met andere schrijvers: **Mulisch** (20e eeuw, 'De Aanslag'), **Schmidt** (kinderboeken), **Anne Frank** (dagboek).",
          voorbeelden: [
            { type: "stap", tekst: "Tegenwoordig zie je 'Max Havelaar' op koffie, chocolade, bananen — keurmerk voor eerlijke prijzen voor boeren." },
            { type: "stap", tekst: "Boek wordt op middelbare scholen nog steeds gelezen als belangrijk historisch document." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Multatuli + 1860 + Max Havelaar + NL-Indië = de combinatie. Pseudoniem = schuilnaam, Latijn voor 'ik heb veel geleden'." }],
          niveaus: {
            basis: "Multatuli.",
            simpeler: "Multatuli (de schuilnaam van Eduard Douwes Dekker) schreef Max Havelaar in 1860. Het boek klaagt aan hoe Nederland de mensen in Indonesië behandelde.",
            nogSimpeler: "Multatuli",
          },
        },
      },
      {
        q: "In welke stad staat het **Anne Frank Huis**?",
        options: ["Amsterdam", "Bergen-Belsen", "Den Haag", "Rotterdam"],
        answer: 0,
        wrongHints: [null, "Daar overleed ze, in een kamp in Duitsland.", "Den Haag is de stad van de regering — dook de familie Frank daar onder?", "Rotterdam is de havenstad — zat Anne daar ondergedoken?"],
      },
      {
        q: "In hoeveel **talen** is het dagboek van Anne Frank vertaald?",
        options: ["ongeveer 70", "ongeveer 10", "ongeveer 30", "ongeveer 300"],
        answer: 0,
        wrongHints: [null, "Het dagboek wordt over de hele wereld gelezen — kijk in de les hoeveel talen.", "Het is een van de bekendste boeken ter wereld — kijk in de les hoeveel talen.", "Kijk in de les: zoveel talen zijn het niet."],
      },
    ],
  },
  {
    title: "Eind-toets — boeken mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wie schreef **Jip en Janneke**?", options: ["Annie M.G. Schmidt", "Roald Dahl", "Jacques Vriens", "Carry Slee"], answer: 0, wrongHints: [null, "Roald Dahl schreef in het Engels — Jip en Janneke is een Nederlands boek.", "Jacques Vriens schreef boeken voor oudere kinderen, veel later.", "Carry Slee schrijft voor tieners, over moeilijke onderwerpen."] },
      { q: "Wie tekende de plaatjes bij de boeken van **Annie M.G. Schmidt**?", options: ["Fiep Westendorp", "Dick Bruna", "Anton Pieck", "Marten Toonder"], answer: 0, wrongHints: [null, "Dick Bruna tekende vooral bij zijn eigen boeken.", "Anton Pieck tekende ouderwetse, sprookjesachtige platen.", "Marten Toonder tekende strips, zoals Tom Poes."] },
      { q: "In welke stad zat **Anne Frank** ondergedoken?", options: ["Amsterdam", "Den Haag", "Rotterdam", "Frankfurt"], answer: 0, wrongHints: [null, "Den Haag is de stad van de regering — zat het Achterhuis daar?", "Rotterdam is de havenstad — zat het Achterhuis daar?", "Daar werd Anne geboren — het gezin vluchtte er juist weg."] },
      { q: "Wie schreef **Max Havelaar**?", options: ["Multatuli", "Harry Mulisch", "Hildebrand", "Annie M.G. Schmidt"], answer: 0, wrongHints: [null, "Harry Mulisch leefde in de 20e eeuw — Max Havelaar is van 1860.", "Hildebrand schreef de Camera Obscura.", "Annie M.G. Schmidt schreef boeken voor kinderen."] },
      { q: "In welke maand is de **Kinderboekenweek**?", options: ["Oktober", "Januari", "Mei", "December"], answer: 0, wrongHints: [null, "In januari zijn de Nationale Voorleesdagen — dat is iets anders.", "In mei is het lente — de Kinderboekenweek is in de herfst.", "In december vieren we Sinterklaas en Kerstmis."] },
      { q: "Hoeveel delen heeft de **Harry Potter**-serie?", options: ["7", "5", "6", "9"], answer: 0, wrongHints: [null, "Elk deel is één schooljaar op Zweinstein — hoeveel jaar zit Harry daar?", "Elk deel is één schooljaar op Zweinstein — hoeveel jaar zit Harry daar?", "Elk deel is één schooljaar op Zweinstein — hoeveel jaar zit Harry daar?"] },
      {
        q: "Waar gaat **Kruistocht in Spijkerbroek** van Thea Beckman over?",
        options: ["Een jongen reist terug naar de middeleeuwen", "Een ridder brengt een geheime brief weg", "Een soldaat vecht in de Eerste Wereldoorlog", "Een meisje duikt onder in de oorlog"],
        answer: 0,
        wrongHints: [null, "Dat is De brief voor de koning, van een andere schrijfster.", "Kijk naar het woord kruistocht — welke tijd hoort daarbij?", "Dat lijkt op het verhaal van Anne Frank — dat is geen boek van Thea Beckman."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Thea Beckman?", tekst: "**Thea Beckman** *(1923-2004)* was een **Nederlandse kinderboekenschrijfster**. Schreef vooral **historische romans** voor 10+ kinderen. Won meerdere Kinderboeken-prijzen." },
            { titel: "Wat is 'Kruistocht in Spijkerbroek'?", tekst: "Boek uit **1973**. Hoofdpersoon **Rudolf Wega** wordt onverwacht teruggeflitst naar het jaar **1212** en sluit zich aan bij de **Kinderkruistocht** — een echte historische gebeurtenis waarbij duizenden kinderen probeerden naar het Heilige Land te lopen." },
            { titel: "Toets-feit: NL-historische jeugdliteratuur", tekst: "Beckman is een **klassieker** voor groep 7-8. De toets vraagt soms naar bekende kinderboeken-schrijvers. Andere belangrijke NL-jeugdschrijvers:\n• **Annie M.G. Schmidt** (Jip en Janneke, Pluk van de Petteflet)\n• **Roald Dahl** (Brits — Matilda, Sjakie, GVR)\n• **Paul Biegel** (Het sleutelkruid)\n• **Tonke Dragt** (De brief voor de koning)" },
          ],
          woorden: [
            { woord: "historische roman", uitleg: "Verzonnen verhaal in échte historische periode (Middeleeuwen, WO2, etc.)." },
            { woord: "Kinderkruistocht", uitleg: "1212: ~30.000 Europese kinderen liepen richting Jeruzalem. De meesten kwamen nooit aan." },
          ],
          theorie: "Kinderboeken waar de toets naar kan vragen:\n• 'Jip en Janneke' — Annie M.G. Schmidt, illustraties Fiep Westendorp\n• 'Kruistocht in Spijkerbroek' — Thea Beckman, 1973\n• 'De brief voor de koning' — Tonke Dragt, 1962\n• 'Pluk van de Petteflet' — Annie M.G. Schmidt\n• 'Het sleutelkruid' — Paul Biegel\n• 'Oorlogswinter' — Jan Terlouw (WO2)",
          voorbeelden: [
            { type: "feit", tekst: "'Kruistocht in Spijkerbroek' werd ook verfilmd (2006). Het boek wordt nog steeds op scholen gelezen — toetsstof." },
          ],
          basiskennis: [{ onderwerp: "Niet sprookje", uitleg: "Historische roman = échte gebeurtenis met verzonnen hoofdpersoon. Niet hetzelfde als sprookje." }],
          niveaus: { basis: "Tijdreis Middeleeuwen.", simpeler: "Boek door Thea Beckman: jongen reist terug naar 1212 voor de kinderkruistocht. Historische roman.", nogSimpeler: "Tijdreis" },
        },
      },
      {
        q: "Wie schreef **'De brief voor de koning'** (1962, ook verfilmd op Netflix)?",
        options: ["Tonke Dragt", "Annie M.G. Schmidt", "Thea Beckman", "Roald Dahl"],
        answer: 0,
        wrongHints: [null, "Annie M.G. Schmidt schreef kortere boeken, zoals Jip en Janneke.", "Thea Beckman schreef Kruistocht in Spijkerbroek.", "Roald Dahl schreef in het Engels."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Tonke Dragt?", tekst: "**Tonke Dragt** *(1930-2024)* was een Nederlandse schrijfster van avontuurlijke fantasy-romans voor jeugd. Geboren in Nederlands-Indië (Jakarta), kwam naar NL na WO2. Schreef vooral over **ridders, kastelen, geheime missies**." },
            { titel: "'De brief voor de koning' (1962)", tekst: "Hoofdpersoon **Tiuri** is een **page** (jongeling-ridder-in-opleiding). Op de nacht voor zijn ridderslag krijgt hij een geheime missie: een brief afleveren bij een koning ver weg. Het boek volgt zijn gevaarlijke reis met paard door bossen, bergen en vijandige steden." },
            { titel: "Toets-feit: prijzen + film", tekst: "Het boek werd in 1963 **Kinderboek van het Jaar** en kreeg in 2004 de **Griffel der Griffels** (beste Griffel-boek ooit). In **2020** maakte Netflix er een serie van. Veel Nederlandse leerlingen lezen het in groep 7-8. Een ECHTE klassieker." },
          ],
          woorden: [
            { woord: "page", uitleg: "Jongeling die opgeleid wordt tot ridder in de Middeleeuwen." },
            { woord: "ridderslag", uitleg: "Ceremonie waarbij page officieel ridder wordt — met zwaardklap op schouder." },
            { woord: "Gouden Griffel", uitleg: "Belangrijkste NL-prijs voor het beste kinderboek van het jaar." },
          ],
          theorie: "NL-jeugd-fantasy-klassiekers:\n• **Tonke Dragt** — De brief voor de koning (1962), Geheimen van het Wilde Woud (1965), Torenhoog en mijlenbreed (1969)\n• **Paul Biegel** — Het sleutelkruid\n• **Imme Dros** — Annetje Lie in het holst van de nacht\nDeze worden nog steeds gelezen + krijgen film/serie-bewerkingen.",
          voorbeelden: [
            { type: "feit", tekst: "Tonke Dragt schilderde haar eigen boekomslagen — zij was ook een goede illustrator." },
            { type: "feit", tekst: "Netflix-serie 'The Letter for the King' (2020): wereldwijd te zien. Diende als marketing voor het oorspronkelijke boek." },
          ],
          basiskennis: [{ onderwerp: "Niet Beckman", uitleg: "Beckman = 'Kruistocht in Spijkerbroek'. Dragt = 'De brief voor de koning'. Beide historische jeugdverhalen, maar verschillende schrijvers." }],
          niveaus: { basis: "Tonke Dragt.", simpeler: "Tonke Dragt schreef 'De brief voor de koning' (1962). Werd Kinderboek van het Jaar, verfilmd door Netflix 2020.", nogSimpeler: "Tonke Dragt" },
        },
      },
      {
        q: "Wat is een **bibliotheek**?",
        options: ["Plek waar je boeken kunt lenen", "Winkel waar je boeken kunt kopen", "Fabriek waar boeken gedrukt worden", "Kantoor waar schrijvers boeken maken"],
        answer: 0,
        wrongHints: [null, "In een bibliotheek betaal je niet per boek — je neemt het mee en brengt het terug.", "Boeken worden gedrukt in een drukkerij.", "Schrijvers werken meestal thuis — wat doe jij in de bibliotheek?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een bibliotheek?", tekst: "Een **bibliotheek** (of 'biep') is een plek waar je **boeken kunt lenen** voor een paar weken. **Voor kinderen onder 18: GRATIS** in heel Nederland (sinds 2015 wettelijk geregeld). Volwassenen betalen ~€50/jaar." },
            { titel: "Wat kun je doen in een bibliotheek?", tekst: "• **Boeken lenen** (4 weken meestal)\n• **Stripverhalen** lezen op locatie\n• **Huiswerk** maken (rustige werkplek + wifi)\n• **Tijdschriften** lezen\n• **DVD's, audioboeken, games** lenen\n• **Leesclubs**, voorleesuurtjes, workshops" },
            { titel: "Toets-feit: openbare bibliotheek NL", tekst: "Nederland heeft **~1.300 openbare bibliotheek-vestigingen** (2024). Ze werken samen in een netwerk met de **Koninklijke Bibliotheek**. Sommige bibliotheken hebben ook 3D-printers, escape rooms, en taalcafés voor nieuwkomers. **Veel meer dan alleen boeken!**" },
          ],
          woorden: [
            { woord: "bibliotheek", uitleg: "Plek waar boeken (en andere media) gratis te lenen zijn." },
            { woord: "lenen", uitleg: "Tijdelijk meenemen, daarna terugbrengen. Niet kopen." },
            { woord: "boetes", uitleg: "Kleine kosten als je boek te laat terugbrengt. Voor kinderen <18: vaak geen boetes meer in 2024." },
          ],
          theorie: "Hoe werkt de bibliotheek:\n1. **Lid worden** (gratis <18, formulier ouders)\n2. Pasje krijgen + 5-15 boeken tegelijk lenen\n3. Boek **vier weken** thuis houden\n4. Op tijd terugbrengen of online verlengen\n5. **Niet vinden wat je zoekt?** Vraag aan bibliothecaris — die kan reserveren of bestellen van andere vestiging.",
          voorbeelden: [
            { type: "feit", tekst: "Veel scholen hebben hun eigen kleine bibliotheek + organiseren bezoeken aan grote openbare bibliotheek." },
            { type: "feit", tekst: "Hoe meer boeken je leest, hoe beter je leesvaardigheid — handig voor de Doorstroomtoets." },
          ],
          basiskennis: [{ onderwerp: "Niet boekenwinkel", uitleg: "Verschil: bibliotheek = lenen (gratis). Boekenwinkel = kopen (kost geld)." }],
          niveaus: { basis: "Boeken lenen gratis kind.", simpeler: "Bibliotheek = plek om boeken gratis te lenen. Voor kinderen <18 is lidmaatschap gratis in heel NL.", nogSimpeler: "Gratis lenen" },
        },
      },
      { q: "Wie schreef **Jip en Janneke**?", options: ["Annie M.G. Schmidt","Roald Dahl","Tonke Dragt","Anne Frank"], answer: 0, wrongHints: [null, "Roald Dahl schreef in het Engels — Jip en Janneke is een Nederlands boek.", "Tonke Dragt schreef dikke avonturenboeken.", "Anne Frank schreef geen verhalen voor kleuters."] },
      { q: "Wie tekende de illustraties bij **Jip en Janneke**?", options: ["Fiep Westendorp","Anton Pieck","Marten Toonder","Dick Bruna"], answer: 0, wrongHints: [null, "Anton Pieck tekende ouderwetse, sprookjesachtige platen.", "Marten Toonder tekende strips, zoals Tom Poes.", "Dick Bruna tekende vooral bij zijn eigen boeken."] },
      { q: "In welke tijd schreef **Anne Frank** haar dagboek?", options: ["Tweede Wereldoorlog","Eerste Wereldoorlog","Middeleeuwen","Gouden Eeuw"], answer: 0, wrongHints: [null, "In de Eerste Wereldoorlog was Anne nog niet geboren.", "In de middeleeuwen leefden de ridders — Anne leefde veel later.", "De Gouden Eeuw was in de 17e eeuw — Anne leefde veel later."] },
      { q: "Welk boekenfeest vieren **scholen** elk jaar, met steeds een nieuw thema?", options: ["Kinderboekenweek","Boekenweek","Poëzieweek","Koningsspelen"], answer: 0, wrongHints: [null, "De Boekenweek is vooral voor volwassenen, in de boekwinkel.", "De Poëzieweek gaat alleen over gedichten.", "De Koningsspelen zijn een sportdag, geen boekenfeest."] },
      { q: "Wie schreef *Harry Potter*?", options: ["J.K. Rowling","Roald Dahl","Annie M.G. Schmidt","C.S. Lewis"], answer: 0, wrongHints: [null, "Roald Dahl overleed al in 1990 — Harry Potter kwam later.", "Annie M.G. Schmidt schreef in het Nederlands.", "C.S. Lewis schreef Narnia, lang vóór Harry Potter."] },
      { q: "Wie schreef *Pluk van de Petteflet*?", options: ["Annie M.G. Schmidt","Tonke Dragt","Jacques Vriens","Carry Slee"], answer: 0, wrongHints: [null, "Tonke Dragt schreef dikke avonturenboeken.", "Jacques Vriens schreef vooral over oudere schoolkinderen.", "Carry Slee schrijft voor tieners."] },
      { q: "*De brief voor de koning* is van?", options: ["Tonke Dragt","Annie M.G. Schmidt","Roald Dahl","J.K. Rowling"], answer: 0, wrongHints: [null, "Schmidt schreef vooral korte, grappige boeken (Jip en Janneke) — dit is een dik ridderavontuur.", "Dahl was Brits — dit ridderboek is oer-Nederlands (en op Netflix verfilmd).", "Rowling schreef Harry Potter — dit boek is ouder en Nederlands."] },
      { q: "Wie schreef *Sjakie en de Chocoladefabriek*?", options: ["Roald Dahl","Annie M.G. Schmidt","Tonke Dragt","Astrid Lindgren"], answer: 0, wrongHints: [null, "Annie M.G. Schmidt schreef in het Nederlands — dit boek is vertaald uit het Engels.", "Tonke Dragt is een Nederlandse schrijfster — dit boek komt uit Engeland.", "Astrid Lindgren kwam uit Zweden en schreef Pippi Langkous."] },
      { q: "Wat is **proza**?", options: ["Gewone tekst, zoals een verhaal","Tekst op rijm in versregels","Tekst om op toneel te spelen","Een tekst met alleen plaatjes"], answer: 0, wrongHints: [null, "Tekst op rijm in versregels heet poëzie.", "Tekst om te spelen heet een toneelstuk.", "Proza bestaat juist uit woorden."] },
      { q: "Waar gaat **Max Havelaar** van Multatuli over?", options: ["Oneerlijke behandeling van mensen op Java", "Een verboden liefde in Amsterdam", "De reizen van de VOC-schepen", "Het zware leven van boeren in Drenthe"], answer: 0, wrongHints: [null, "Kijk in de les: waar speelt Max Havelaar?", "De VOC bestond in 1860 al lang niet meer.", "Max Havelaar speelt niet in Nederland zelf."] },
      { q: "Wie tekende **Nijntje**?", options: ["Dick Bruna","Fiep Westendorp","Annie M.G. Schmidt","Anton Pieck"], answer: 0, wrongHints: [null, "Fiep Westendorp tekende voor de boeken van een schrijfster.", "Annie M.G. Schmidt schreef de verhalen — zij tekende niet zelf.", "Anton Pieck tekende ouderwetse, sprookjesachtige platen."] },
      { q: "Wie schreef *Het Achterhuis*?", options: ["Anne Frank","Multatuli","Tonke Dragt","Annie M.G. Schmidt"], answer: 0, wrongHints: [null, "Multatuli leefde in de 19e eeuw.", "Tonke Dragt schreef verzonnen avonturen, geen dagboek.", "Annie M.G. Schmidt schreef vrolijke kinderboeken en versjes."] },
      { q: "Waarvoor is de prijs **Gouden Griffel**?", options: ["Het best geschreven kinderboek","De mooiste tekeningen in een boek","De beste kinderfilm van het jaar","Het meest verkochte kinderboek"], answer: 0, wrongHints: [null, "Voor tekeningen bestaat het Gouden Penseel — een griffel is iets om mee te schrijven.", "Films winnen een Gouden Kalf.", "Het gaat niet om hoeveel er verkocht is — een jury kiest."] },
      { q: "Wie is **Carry Slee**?", options: ["Schrijfster van jeugdboeken", "Bekende tv-presentatrice", "Nederlandse zangeres", "Tekenaar van strips"], answer: 0, wrongHints: [null, "Zie je haar op tv? Kijk in de les in welk rijtje haar naam staat.", "Zingt ze liedjes? Kijk in de les in welk rijtje haar naam staat.", "Tekent ze strips? Kijk in de les wat zij maakt."] },
      { q: "Wat is een **strip**?", options: ["Verhaal met tekeningen en tekstballonnen", "Dik boek met alleen tekst, zonder plaatjes", "Gedicht op rijm met korte regels", "Fotoboek met een zin onder elke foto"], answer: 0, wrongHints: [null, "Wat heeft een strip juist wél?", "Rijmen de figuren in een strip, of praten ze?", "Waar staat in een strip wat de figuren zeggen?"] },
      { q: "Wie schreef het fantasyboek *De Hobbit*?", options: ["J.R.R. Tolkien","Roald Dahl","C.S. Lewis","Tonke Dragt"], answer: 0, wrongHints: [null, "Roald Dahl schreef grappige boeken, niet over Midden-aarde.", "C.S. Lewis schreef de verhalen over Narnia.", "Tonke Dragt schreef in het Nederlands — De Hobbit is vertaald uit het Engels."] },
      { q: "Wat is een **leesclub**?", options: ["Groep mensen die samen lezen en bespreken", "Groep schrijvers die samen een boek maken", "Winkel waar je boeken kunt kopen", "School waar je leert boeken schrijven"], answer: 0, wrongHints: [null, "Zit in het woord leesclub iets over schrijven?", "Een club is geen winkel — wat doen de leden samen?", "Het gaat om lezen, niet om schrijven leren."] },
      { q: "Wat doet een **bibliothecaris**?", options: ["De bibliotheek bijhouden en lezers helpen", "Boeken schrijven en laten uitgeven", "Boeken drukken in een drukkerij", "Boeken verkopen in een boekwinkel"], answer: 0, wrongHints: [null, "Wie boeken schrijft, heet een schrijver.", "Boeken drukken doet een drukker.", "Een bibliothecaris werkt niet in een winkel — waar dan?"] },
      { q: "Welke twee bekende prijzen zijn er voor Nederlandse kinderboeken?", options: ["Gouden en Zilveren Griffel","Pulitzer en Booker","Oscar en Gouden Kalf","Nobelprijs en Edison"], answer: 0, wrongHints: [null, "Dat zijn prijzen voor Engelse boeken voor volwassenen.", "Dat zijn filmprijzen.", "Dat zijn geen jeugdboekenprijzen."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const bekendeBoekenLiteratuurPo = {
  id: "bekende-boeken-literatuur-po",
  title: "Bekende boeken + literatuur (groep 6-8, Doorstroomtoets-stof)",
  emoji: "📖",
  level: "groep6-8",
  subject: "geschiedenis",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — cultuur / literatuur",
  prerequisites: [
    { id: "dichten-poezie-rijmen-po", title: "Dichten + poëzie", niveau: "1F" },
  ],
  intro:
    "Bekende kinderboeken + literatuur voor groep 6-8, Doorstroomtoets-stof — Annie M.G. Schmidt (Jip+Janneke, Pluk, Otje) + Fiep Westendorp + Tonke Dragt + Vriens + moderne (Slee, Oomen) + internationaal (Dahl, Rowling) + Anne Frank + Multatuli + Kinderboekenweek. ~15 min.",
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
