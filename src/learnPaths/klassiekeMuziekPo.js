// Leerpad: Klassieke muziek + componisten - groep 6-8 cultuur.
// Cito-relevant. 1F. 4 stappen.

const stepEmojis = ["🎼", "🎹", "🎻", "🏆"];

const chapters = [
  { letter: "A", title: "Muziek basis", emoji: "🎼", from: 0, to: 0 },
  { letter: "B", title: "Bach, Mozart, Beethoven", emoji: "🎹", from: 1, to: 1 },
  { letter: "C", title: "Orkest + NL-muziek", emoji: "🎻", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Muziek basis — wat is klassieke muziek?",
    explanation:
      "**Muziek** = geluiden in tijd geordend = zorgt voor emotie + plezier + verhaal.\n\n**Klassieke muziek** = muziek die meestal werd geschreven tussen **1600-1900** door bekende componisten *(later ook 20e eeuw)*.\n\nNiet zoals **pop, jazz, hiphop** — meer:\n• Geschreven op **partituur** *(bladmuziek)*.\n• Gespeeld door **orkest** of kleine groepen.\n• Geen tekst meestal *(instrumentaal)*.\n• Lang *(symfonie kan 1 uur duren)*.\n• Ernstig / 'serieus' *(maar ook leuk + vrolijk)*.\n\n**Onderdelen van muziek**:\n\n**1. Melodie** 🎵:\n• De **liedjes-lijn**.\n• Hoge + lage tonen na elkaar.\n• Wat je kunt **na-zingen**.\n\n**2. Ritme** 🥁:\n• De **pols** of beat.\n• Snel of langzaam.\n• Soms in 4/4, 3/4 *(wals)*, 6/8.\n\n**3. Harmonie** 🎶:\n• Meerdere noten **tegelijk** *(akkoord)*.\n• Goed-klinkende combinatie = consonant.\n• Wrijven = dissonant.\n\n**4. Tempo**:\n• Snelheid.\n• **Adagio** = langzaam.\n• **Andante** = wandelend.\n• **Allegro** = vrolijk + snel.\n• **Presto** = heel snel.\n\n**5. Dynamiek**:\n• Luidheid.\n• **Piano (p)** = zacht.\n• **Forte (f)** = luid.\n• **Mezzo-forte (mf)** = matig luid.\n\n**Periodes van klassieke muziek**:\n\n**1. Middeleeuwen + Renaissance** *(1100-1600)*:\n• Gregoriaans gezang *(kerkmuziek)*.\n• Vooral religieus.\n\n**2. Barok** *(1600-1750)*:\n• Versierd + groots.\n• **Bach, Vivaldi, Händel**.\n\n**3. Klassiek** *(1750-1820)*:\n• Eenvoudiger + helder.\n• **Mozart, Haydn, jonge Beethoven**.\n\n**4. Romantiek** *(1820-1900)*:\n• Emotioneel + dramatisch.\n• **Beethoven (later), Schubert, Chopin, Brahms, Tsjaikovski, Wagner**.\n\n**5. 20e eeuw**:\n• Modern + experimenteel.\n• **Stravinsky, Debussy, Schönberg**.\n\n**Notenschrift**:\n• 7 notennamen: **do-re-mi-fa-sol-la-si** *(Italiaans)*.\n• Of: **C-D-E-F-G-A-B** *(internationaal)*.\n• Op **balk** *(5 lijnen)* geschreven.\n• **Sleutel** *(treble = G-sleutel)* + **toonaard** *(C-mineur, F-majeur)*.\n\n**Instrumenten** *(groepen)*:\n\n**Strijkers**: viool, altviool, cello, contrabas.\n**Houtblazers**: fluit, hobo, klarinet, fagot.\n**Koperblazers**: trompet, hoorn, trombone, tuba.\n**Slagwerk**: pauken, trommel, bekkens, triangle.\n**Tokkelinstrument**: harp, gitaar.\n**Toets-instrumenten**: piano, orgel.\n\n**Cito-feitje**:\nIn 1986 ontstond **'Symphonic Rock'** combinatie. NL-band **Within Temptation** maakt rock met orkest. Show in 2016 'Black Symphony' werd live opgenomen — populaire crossover.",
    checks: [
      {
        q: "Wat is **klassieke muziek**?",
        options: ["Muziek 1600-1900 door bekende componisten", "Pop", "Jazz", "Sport"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wat is **allegro**?",
        options: ["Vrolijk + snel tempo", "Langzaam", "Wals", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Adagio.", "3/4.", "Wel."],
      },
      {
        q: "Welke instrument is **strijker**?",
        options: ["Viool", "Fluit", "Trompet", "Trommel"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Houtblazer.", "Koperblazer.", "Slagwerk."],
      },
      {
        q: "Welke is **Romantiek**-periode?",
        options: ["1820-1900", "1600-1750", "1100-1600", "2024"],
        answer: 0,
        wrongHints: [null, "Klopt — Chopin/Tsjaikovski.", "Barok.", "Middeleeuwen.", "Modern."],
      },
    ],
  },
  {
    title: "Bach + Mozart + Beethoven",
    explanation:
      "De **drie grootste klassieke componisten** *(meeste mensen vinden)*:\n\n**Johann Sebastian Bach** *(1685-1750, Duits)*:\n• Geboren in **Eisenach** *(Duitsland)*.\n• Tijd: **barok**.\n• Werkte als organist + kapelmeester *(in kerken)*.\n• Schreef **enorm** veel werk: ~1100 stukken.\n• Hele Bach-familie was muzikaal *(20+ generaties componisten)*.\n• Stond niet bekend toen — pas 100 jaar later weer herontdekt *(door Mendelssohn)*.\n\n**Bekendste werken**:\n• **'Brandenburgse Concerten'** *(6 concerten voor verschillende instrumenten)*.\n• **'Matthäus Passion'** *(grote koor + orkest over kruisiging Jezus)*.\n• **'Toccata + fuga in d mineur'** *(orgel — beroemd griezelig)*.\n• **'Goldberg-variaties'** *(piano + klavecimbel)*.\n• Vele **cantates** *(zang met orkest)*.\n\n**Beroemd citaat**:\n*'De doel van muziek is alleen de eer van God + de verkwikking van de geest.'*\n\n**Wolfgang Amadeus Mozart** *(1756-1791, Oostenrijks)*:\n• Geboren in **Salzburg**.\n• Tijd: **klassiek**.\n• **Wonderkind**: piano + viool als 4-jarige.\n• Begon componeren met 5 jaar.\n• Op 6 jaar al rond Europa op toer met zus.\n• Stierf jong op **35 jaar** *(armoede + ziekte)*.\n• Schreef **~600 werken** in 25 jaar.\n\n**Bekendste werken**:\n• **'Eine kleine Nachtmusik'** *(serenade voor strijkers — beroemd vrolijk)*.\n• **'Die Zauberflöte'** *(De Toverfluit — opera, sprookjesachtig)*.\n• **'Don Giovanni'** *(opera over rokkenjager)*.\n• **'Le Nozze di Figaro'** *(opera over bediende)*.\n• **'Requiem'** *(grafmis, onafgemaakt — stierf tijdens schrijven)*.\n• **Symfonie nr. 40** *(g-mineur, droevig + bekend)*.\n• **Pianoconcerten 20, 21, 23** *(voor piano + orkest)*.\n\n**Bekend verhaal**:\nFilm **'Amadeus'** *(1984, Oscar)* beschrijft hoe Mozart's rivaal **Salieri** mogelijk jaloers werd. Mooie film maar veel verzonnen.\n\n**Ludwig van Beethoven** *(1770-1827, Duits)*:\n• Geboren in **Bonn**.\n• Werkte in **Wenen**.\n• Tijd: **klassiek → romantiek** *(overbrugger)*.\n• **Begon doof te worden** rond 26 jaar.\n• Op latere leeftijd **helemaal doof** — maar bleef componeren!\n• Hoorde muziek in zijn hoofd.\n\n**Bekendste werken**:\n• **Symfonie nr. 5** *('Da-da-da-DUM' — beroemde opening)*.\n• **Symfonie nr. 9** *(met koorzang 'Ode an die Freude' — werd EU-volkslied!)*.\n• **'Für Elise'** *(piano-stuk, populair voor beginners)*.\n• **'Mondscheinsonate' (Maanlicht-sonate)**.\n• **Pianoconcerten** + **strijkkwartetten**.\n\n**Beroemd verhaal**:\nNa première van Symfonie 9 *(1824)* keek Beethoven niet weg het publiek aan *(was doof)*. Solist draaide hem om — hij zag iedereen klappen. Tranen.\n\n**Bekend citaat**:\n*'Muziek is een hogere openbaring dan alle wijsheid + filosofie.'*\n\n**Andere grote componisten**:\n• **Joseph Haydn** *(1732-1809, Oostenrijks)*: 'Vader van symfonie'.\n• **Franz Schubert** *(1797-1828, Oostenrijks)*: 600 liederen.\n• **Frédéric Chopin** *(1810-1849, Pools-Frans)*: piano-meester.\n• **Pjotr Tsjaikovski** *(1840-1893, Russisch)*: 'Notenkraker', 'Zwanenmeer'.\n• **Antonio Vivaldi** *(1678-1741, Italiaans)*: 'De Vier Jaargetijden'.\n• **Johann Strauss** *(1825-1899, Oostenrijks)*: walsen *('Donau wals')*.\n• **Antonin Dvořák** *(1841-1904, Tsjechisch)*: 'Symphony from the New World'.\n\n**Cito-feitje**:\nDe **Negende Symfonie** van **Beethoven** *(1824)* — laatste deel met koorzang 'Ode an die Freude' *(Ode aan de Vreugde)* — is sinds **1985 officieel volkslied van de EU**. Wordt gespeeld bij EU-evenementen.",
    checks: [
      {
        q: "Wie was **'Wonderkind' componist** in 18e eeuw?",
        options: ["Mozart (begon op 5)", "Bach", "Beethoven", "Chopin"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel jong begonnen maar niet primair zo bekend.", "Niet.", "Niet."],
      },
      {
        q: "Welke componist werd **doof**?",
        options: ["Beethoven", "Mozart", "Bach", "Vivaldi"],
        answer: 0,
        wrongHints: [null, "Klopt — bleef doorgaan.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wat is **EU-volkslied**?",
        options: ["Ode an die Freude (Beethoven 9e)", "Wilhelmus", "Mozart Requiem", "Bach Toccata"],
        answer: 0,
        wrongHints: [null, "Klopt.", "NL.", "Mis-/grafmis.", "Orgel."],
      },
      {
        q: "Wie componeerde **'De Vier Jaargetijden'**?",
        options: ["Vivaldi", "Bach", "Mozart", "Beethoven"],
        answer: 0,
        wrongHints: [null, "Klopt — Italiaans barok.", "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Orkest + Nederlandse muziek",
    explanation:
      "**Orkest** = groep muzikanten die samen spelen.\n\n**Symfonieorkest** *(klassiek orkest)*:\n• ~80-100 muzikanten.\n• Verdeling:\n  - **Strijkers** *(meeste, 50-60)*: violen, alt, cello, contrabas.\n  - **Houtblazers** *(10-15)*: fluit, hobo, klarinet, fagot.\n  - **Koperblazers** *(8-10)*: trompet, hoorn, trombone, tuba.\n  - **Slagwerk** *(2-5)*: pauken + andere.\n  - Soms harp, piano.\n• **Dirigent**: leidt orkest, staat voor de muzikanten.\n• **Concertmeester** = eerste violist, leidt strijkers.\n\n**Verschillende grootten**:\n• **Kamermuziek**: klein *(2-10 muzikanten)*.\n• **Strijkkwartet**: 4 strijkers.\n• **Trio**: 3 muzikanten.\n• **Duo**: 2.\n• **Solo**: 1.\n\n**Nederlandse beroemde orkesten**:\n• **Koninklijk Concertgebouworkest** *(Amsterdam)*: een van **beste orkesten ter wereld**!\n• **Rotterdams Philharmonisch Orkest**.\n• **Residentie Orkest** *(Den Haag)*.\n• **Radio Filharmonisch Orkest** *(Hilversum)*.\n\n**Concertgebouw Amsterdam** *(1888)*:\n• Een van mooiste **akoestiek** ter wereld.\n• Beroemd om Mahler-uitvoeringen.\n• Top-3 in jaarlijkse rankings.\n\n**Bekende NL-dirigenten + musici**:\n\n• **Bernard Haitink** *(1929-2021)*: lange dirigent Concertgebouw.\n• **Mariss Jansons** *(1943-2019, Lets)*: ook dirigent Concertgebouw.\n• **André Rieu** *(1949+, Maastricht)*: walsmaestro + violist, populaire concerten met groot Johann Strauss Orkest. Wereld-bestseller.\n• **Janine Jansen** *(1978+, violiste)*: internationale ster.\n\n**Nederlandse componisten**:\n• **Jan Pieterszoon Sweelinck** *(1562-1621)*: barok-organist Oude Kerk Amsterdam.\n• **Louis Andriessen** *(1939-2021)*: modern.\n• **Cornelis Dopper** *(1870-1939)*: symfonieën.\n\n**Beroemde NL-popmuziek**:\n• **André Hazes** *(1951-2004)*: levenslied — 'Bloed, Zweet en Tranen'.\n• **Marco Borsato** *(1966+)*: popzanger.\n• **Anouk** *(1975+)*: rock-zangeres.\n• **Within Temptation** *(symfonische rock)*.\n• **Tiësto, Armin van Buuren, Hardwell, Martin Garrix** *(allemaal DJ's — NL is DJ-grootmacht!)*.\n• **Caro Emerald** *(jazz/pop)*.\n• **Davina Michelle** *(pop)*.\n\n**Eurovisie Songfestival** 🎤:\n• NL won 5 keer: 1957, 1959, 1969, 1975 *(Teach-In)*, en **2019 *(Duncan Laurence — 'Arcade')***.\n• Eurovisie 2020 zou in Rotterdam zijn — verschoof naar 2021 door Corona.\n\n**Bekende NL-bands**:\n• **Doe Maar** *(80s, pop)*.\n• **Golden Earring** *('Radar Love', 'When the Lady Smiles')*.\n• **Shocking Blue** *('Venus' — wereldhit)*.\n• **Anouk, Krezip, BLØF**.\n\n**Muziek-onderwijs**:\n• In NL **muziekschool** voor kinderen *(les viool, piano, gitaar)*.\n• Of in **muziekvereniging** *(harmonie, fanfare, brassband)*.\n• Sommige kinderen leren op **basisschool**.\n\n**Voordelen muziek-maken**:\n• Beter **concentratie**.\n• Beter **wiskunde + taal** *(studies bewijzen)*.\n• Plezier + zelfvertrouwen.\n• Sociaal *(samen spelen)*.\n• Discipline.\n\n**Cito-feitje**:\n**Wilhelmus** *(NL-volkslied)* is een van **oudste nationale liederen** ter wereld — geschreven rond **1568-1572** voor Willem van Oranje *(Tachtigjarige Oorlog)*. Eerste regel: *'Wilhelmus van Nassouwe, ben ik van Duitsen bloed'*.",
    checks: [
      {
        q: "Hoeveel mensen in **symfonieorkest**?",
        options: ["~80-100", "10", "1000", "5"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Te weinig."],
      },
      {
        q: "Wie **leidt orkest**?",
        options: ["Dirigent", "Eerste violist", "Pianist", "Niemand"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Concertmeester strijkers.", "Niet primair.", "Wel."],
      },
      {
        q: "Welk **NL-orkest** is wereldtop?",
        options: ["Concertgebouworkest Amsterdam", "Rotterdam Symfonie", "Andre Rieu", "Niet"],
        answer: 0,
        wrongHints: [null, "Klopt — top-3 wereld.", "Goed, maar Concertgebouw bovenaan.", "Wel populair maar individu.", "Wel."],
      },
      {
        q: "Wie won **Eurovisie 2019** voor NL?",
        options: ["Duncan Laurence ('Arcade')", "Marco Borsato", "André Hazes", "Tiësto"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet.", "DJ — niet Eurovisie."],
      },
    ],
  },
  {
    title: "Eind-toets — muziek mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Welke componist werd **doof**?", options: ["Beethoven", "Mozart", "Bach", "Vivaldi"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."] },
      { q: "Wie schreef **De Vier Jaargetijden**?", options: ["Vivaldi", "Mozart", "Bach", "Schubert"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."] },
      { q: "Wat is **allegro**?", options: ["Snel tempo", "Langzaam", "Stil", "Hard"], answer: 0, wrongHints: [null, "Klopt.", "Adagio.", "Piano.", "Forte."] },
      { q: "Hoeveel **strijkers** in symfonieorkest?", options: ["~50-60", "5", "200", "10"], answer: 0, wrongHints: [null, "Klopt — meeste.", "Te weinig.", "Te veel.", "Te weinig."] },
      { q: "**EU-volkslied** = ?", options: ["Beethoven 9e (Ode an die Freude)", "Mozart Requiem", "Wilhelmus", "Bach Toccata"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "NL.", "Niet."] },
      { q: "Welk NL-feit: **NL is grootmacht in**?", options: ["DJ-muziek (Tiësto/Armin)", "Klassiek componeren", "Opera", "Geen"], answer: 0, wrongHints: [null, "Klopt — wereldwijd top.", "Wel deelnemers.", "Niet specifiek NL.", "Wel."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const klassiekeMuziekPo = {
  id: "klassieke-muziek-po",
  title: "Klassieke muziek + componisten (Cito groep 6-8)",
  emoji: "🎼",
  level: "groep6-8",
  subject: "geschiedenis",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — cultuur / muziek",
  prerequisites: [
    { id: "nederlandse-kunstenaars-po", title: "Nederlandse kunstenaars", niveau: "1F" },
  ],
  intro:
    "Klassieke muziek voor Cito groep 6-8 — muziek-basis (melodie/ritme/tempo/instrumenten) + 5 perioden (barok-klassiek-romantiek) + grote 3 (Bach/Mozart-wonderkind/Beethoven-doof) + Vivaldi/Tsjaikovski + orkest + NL (Concertgebouw + André Rieu + Duncan Laurence Eurovisie 2019 + DJ-grootmacht). ~15 min.",
  triggerKeywords: [
    "klassieke muziek", "componist",
    "Bach", "Mozart", "Beethoven", "Vivaldi", "Chopin",
    "symfonie", "concerto", "opera",
    "orkest", "dirigent", "viool", "piano",
    "Concertgebouw", "Andre Rieu",
    "Duncan Laurence", "Eurovisie",
    "DJ", "Tiesto", "Armin",
    "Wilhelmus",
  ],
  chapters,
  steps,
};

export default klassiekeMuziekPo;
