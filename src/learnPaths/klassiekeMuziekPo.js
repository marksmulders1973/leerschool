// Leerpad: Klassieke muziek + componisten - groep 6-8 cultuur.
// toets-relevant. 1F. 4 stappen.

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
      "**Muziek** = geluiden in tijd geordend = zorgt voor emotie + plezier + verhaal.\n\n**Klassieke muziek** = muziek die meestal werd geschreven tussen **1600-1900** door bekende componisten *(later ook 20e eeuw)*.\n\nNiet zoals **pop, jazz, hiphop** — meer:\n• Geschreven op **partituur** *(bladmuziek)*.\n• Gespeeld door **orkest** of kleine groepen.\n• Geen tekst meestal *(instrumentaal)*.\n• Lang *(symfonie kan 1 uur duren)*.\n• Ernstig / 'serieus' *(maar ook leuk + vrolijk)*.\n\n**Onderdelen van muziek**:\n\n**1. Melodie** 🎵:\n• De **liedjes-lijn**.\n• Hoge + lage tonen na elkaar.\n• Wat je kunt **na-zingen**.\n\n**2. Ritme** 🥁:\n• De **pols** of beat.\n• Snel of langzaam.\n• Soms in 4/4, 3/4 *(wals)*, 6/8.\n\n**3. Harmonie** 🎶:\n• Meerdere noten **tegelijk** *(akkoord)*.\n• Goed-klinkende combinatie = consonant.\n• Wrijven = dissonant.\n\n**4. Tempo**:\n• Snelheid.\n• **Adagio** = langzaam.\n• **Andante** = wandelend.\n• **Allegro** = vrolijk + snel.\n• **Presto** = heel snel.\n\n**5. Dynamiek**:\n• Luidheid.\n• **Piano (p)** = zacht.\n• **Forte (f)** = luid.\n• **Mezzo-forte (mf)** = matig luid.\n\n**Periodes van klassieke muziek**:\n\n**1. Middeleeuwen + Renaissance** *(1100-1600)*:\n• Gregoriaans gezang *(kerkmuziek)*.\n• Vooral religieus.\n\n**2. Barok** *(1600-1750)*:\n• Versierd + groots.\n• **Bach, Vivaldi, Händel**.\n\n**3. Klassiek** *(1750-1820)*:\n• Eenvoudiger + helder.\n• **Mozart, Haydn, jonge Beethoven**.\n\n**4. Romantiek** *(1820-1900)*:\n• Emotioneel + dramatisch.\n• **Beethoven (later), Schubert, Chopin, Brahms, Tsjaikovski, Wagner**.\n\n**5. 20e eeuw**:\n• Modern + experimenteel.\n• **Stravinsky, Debussy, Schönberg**.\n\n**Notenschrift**:\n• 7 notennamen: **do-re-mi-fa-sol-la-si** *(Italiaans)*.\n• Of: **C-D-E-F-G-A-B** *(internationaal)*.\n• Op **balk** *(5 lijnen)* geschreven.\n• **Sleutel** *(bijv. de G-sleutel)* + **toonsoort** *(c-mineur, F-majeur)*.\n\n**Instrumenten** *(groepen)*:\n\n**Strijkers**: viool, altviool, cello, contrabas.\n**Houtblazers**: fluit, hobo, klarinet, fagot.\n**Koperblazers**: trompet, hoorn, trombone, tuba.\n**Slagwerk**: pauken, trommel, bekkens, triangel.\n**Tokkelinstrument**: harp, gitaar.\n**Toets-instrumenten**: piano, orgel.\n\n**Toets-feitje**:\n**Symfonische rock** combineert rock met orkest. NL-band **Within Temptation** gaf in 2008 de show 'Black Symphony' met een orkest — die werd live opgenomen. Populaire crossover.",
    checks: [
      {
        q: "Wat is **klassieke muziek**?",
        options: ["Muziek van componisten als Bach en Mozart", "Popmuziek uit de hitlijsten van nu", "Jazz met veel improvisatie en swing", "Hiphop met rap en beats uit de computer"],
        answer: 0,
        wrongHints: [null, "Pop is moderne lichte muziek.", "Jazz is een jongere stijl.", "Hiphop ontstond pas rond 1975."],
      },
      {
        q: "Wat is **allegro**?",
        options: ["Snel tempo", "Langzaam tempo", "Zacht spelen", "Hard spelen"],
        answer: 0,
        wrongHints: [null, "Langzaam heet adagio. Allegro gaat wel over tempo, maar niet over dit tempo.", "Zacht spelen heet piano. Gaat allegro over hoe hard je speelt, of over hoe snel?", "Hard spelen heet forte. Gaat allegro over hoe hard je speelt, of over hoe snel?"],
      },
      {
        q: "Welk instrument is een **strijker**?",
        options: ["Viool", "Fluit", "Trompet", "Trommel"],
        answer: 0,
        wrongHints: [null, "Op een fluit blaas je. Strijk je er ook met een stok overheen?", "Op een trompet blaas je. Hoor je die bij de strijkers?", "Op een trommel sla je. Dat hoort bij het slagwerk."],
      },
      {
        q: "Welke periode is de **Romantiek**?",
        options: ["1820-1900", "1600-1750", "1100-1600", "1750-1820"],
        answer: 0,
        wrongHints: [null, "Dat is de barok, de tijd van Bach. De Romantiek komt later.", "Dat is de tijd van het gregoriaans gezang, nog veel eerder.", "Dat is de klassieke periode, de tijd van Mozart. De Romantiek komt daarna."],
      },
    ],
  },
  {
    title: "Bach + Mozart + Beethoven",
    explanation:
      "De **drie grootste klassieke componisten** *(meeste mensen vinden)*:\n\n**Johann Sebastian Bach** *(1685-1750, Duits)*:\n• Geboren in **Eisenach** *(Duitsland)*.\n• Tijd: **barok**.\n• Werkte als organist + kapelmeester *(in kerken)*.\n• Schreef **enorm** veel werk: ~1100 stukken.\n• Hele Bach-familie was muzikaal *(meerdere generaties musici)*.\n• Raakte na zijn dood in de vergetelheid — pas zo'n 80 jaar later herontdekt *(door Mendelssohn)*.\n\n**Bekendste werken**:\n• **'Brandenburgse Concerten'** *(6 concerten voor verschillende instrumenten)*.\n• **'Matthäus Passion'** *(groot koor + orkest over kruisiging Jezus)*.\n• **'Toccata + fuga in d mineur'** *(orgel — beroemd griezelig)*.\n• **'Goldberg-variaties'** *(voor klavecimbel, nu vaak op piano)*.\n• Vele **cantates** *(zang met orkest)*.\n\n**Beroemd citaat**:\n*'Het doel van muziek is alleen de eer van God + de verkwikking van de geest.'*\n\n**Wolfgang Amadeus Mozart** *(1756-1791, Oostenrijks)*:\n• Geboren in **Salzburg**.\n• Tijd: **klassiek**.\n• **Wonderkind**: piano + viool als 4-jarige.\n• Begon componeren met 5 jaar.\n• Op 6 jaar al rond Europa op toer met zus.\n• Stierf jong op **35 jaar** *(armoede + ziekte)*.\n• Schreef **~600 werken** in 25 jaar.\n\n**Bekendste werken**:\n• **'Eine kleine Nachtmusik'** *(serenade voor strijkers — beroemd vrolijk)*.\n• **'Die Zauberflöte'** *(De Toverfluit — opera, sprookjesachtig)*.\n• **'Don Giovanni'** *(opera over rokkenjager)*.\n• **'Le Nozze di Figaro'** *(opera over bediende)*.\n• **'Requiem'** *(grafmis, onafgemaakt — stierf tijdens schrijven)*.\n• **Symfonie nr. 40** *(g-mineur, droevig + bekend)*.\n• **Pianoconcerten 20, 21, 23** *(voor piano + orkest)*.\n\n**Bekend verhaal**:\nFilm **'Amadeus'** *(1984, Oscar)* beschrijft hoe Mozarts rivaal **Salieri** mogelijk jaloers werd. Mooie film maar veel verzonnen.\n\n**Ludwig van Beethoven** *(1770-1827, Duits)*:\n• Geboren in **Bonn**.\n• Werkte in **Wenen**.\n• Tijd: **klassiek → romantiek** *(overbrugger)*.\n• **Begon doof te worden** rond 26 jaar.\n• Op latere leeftijd **helemaal doof** — maar bleef componeren!\n• Hoorde muziek in zijn hoofd.\n\n**Bekendste werken**:\n• **Symfonie nr. 5** *('Da-da-da-DUM' — beroemde opening)*.\n• **Symfonie nr. 9** *(met koorzang 'Ode an die Freude' — werd EU-volkslied!)*.\n• **'Für Elise'** *(piano-stuk, populair voor beginners)*.\n• **'Mondscheinsonate' (Maanlicht-sonate)**.\n• **Pianoconcerten** + **strijkkwartetten**.\n\n**Beroemd verhaal**:\nNa première van Symfonie 9 *(1824)* stond Beethoven met zijn rug naar het publiek *(was doof)*. Solist draaide hem om — hij zag iedereen klappen. Tranen.\n\n**Bekend citaat**:\n*'Muziek is een hogere openbaring dan alle wijsheid + filosofie.'*\n\n**Andere grote componisten**:\n• **Joseph Haydn** *(1732-1809, Oostenrijks)*: 'Vader van de symfonie'.\n• **Franz Schubert** *(1797-1828, Oostenrijks)*: 600 liederen.\n• **Frédéric Chopin** *(1810-1849, Pools-Frans)*: piano-meester.\n• **Pjotr Tsjaikovski** *(1840-1893, Russisch)*: 'Notenkraker', 'Zwanenmeer'.\n• **Antonio Vivaldi** *(1678-1741, Italiaans)*: 'De Vier Jaargetijden'.\n• **Johann Strauss** *(1825-1899, Oostenrijks)*: walsen *('Donau wals')*.\n• **Antonin Dvořák** *(1841-1904, Tsjechisch)*: 'Uit de Nieuwe Wereld'.\n\n**Toets-feitje**:\nDe **Negende Symfonie** van **Beethoven** *(1824)* — laatste deel met koorzang 'Ode an die Freude' *(Ode aan de Vreugde)* — is sinds **1985 officieel volkslied van de EU**. Wordt gespeeld bij EU-evenementen.",
    checks: [
      {
        q: "Welke componist was een **wonderkind** dat al als klein kind optrad in heel Europa?",
        options: ["Mozart", "Bach", "Beethoven", "Chopin"],
        answer: 0,
        wrongHints: [null, "Bach was ook jong muzikaal, maar hij reisde niet als kleuter door Europa om op te treden.", "Beethoven werd vooral beroemd als volwassene, met zijn symfonieën. Wie speelde al op zijn vierde piano en viool?", "Chopin leefde in de 19e eeuw en werd beroemd om zijn pianomuziek, niet als reizend wonderkind."],
      },
      {
        q: "Welke componist werd **doof**?",
        options: ["Beethoven", "Mozart", "Bach", "Vivaldi"],
        answer: 0,
        wrongHints: [null, "Mozart hoorde tot zijn dood — stierf jong op 35.", "Bach kon tot het eind goed horen — werd 65.", "Vivaldi schreef veel vioolwerken, geen doofheid bekend."],
      },
      {
        q: "Wat is het **EU-volkslied**?",
        options: ["Ode an die Freude", "Wilhelmus", "Mozart Requiem", "Bach Toccata"],
        answer: 0,
        wrongHints: [null, "Het Wilhelmus is het volkslied van Nederland, niet van heel Europa.", "Een requiem is een treurmis voor een overledene. Past dat bij een feestelijk volkslied?", "Dat is een griezelig klinkend orgelstuk. Past dat bij een feestelijk volkslied?"],
      },
      {
        q: "Wie componeerde **'De Vier Jaargetijden'**?",
        options: ["Vivaldi", "Bach", "Mozart", "Beethoven"],
        answer: 0,
        wrongHints: [null, "Bach is bekend om orgel + Brandenburgse Concerten.", "Mozart schreef opera + Eine kleine Nachtmusik.", "Beethoven schreef vooral symfonieën en piano-werken."],
      },
    ],
  },
  {
    title: "Orkest + Nederlandse muziek",
    explanation:
      "**Orkest** = groep muzikanten die samen spelen.\n\n**Symfonieorkest** *(klassiek orkest)*:\n• ~80-100 muzikanten.\n• Verdeling:\n  - **Strijkers** *(meeste, 50-60)*: violen, alt, cello, contrabas.\n  - **Houtblazers** *(10-15)*: fluit, hobo, klarinet, fagot.\n  - **Koperblazers** *(8-10)*: trompet, hoorn, trombone, tuba.\n  - **Slagwerk** *(2-5)*: pauken + andere.\n  - Soms harp, piano.\n• **Dirigent**: leidt orkest, staat voor de muzikanten.\n• **Concertmeester** = eerste violist, leidt strijkers.\n\n**Verschillende grootten**:\n• **Kamermuziek**: klein *(2-10 muzikanten)*.\n• **Strijkkwartet**: 4 strijkers.\n• **Trio**: 3 muzikanten.\n• **Duo**: 2.\n• **Solo**: 1.\n\n**Nederlandse beroemde orkesten**:\n• **Koninklijk Concertgebouworkest** *(Amsterdam)*: een van **beste orkesten ter wereld**!\n• **Rotterdams Philharmonisch Orkest**.\n• **Residentie Orkest** *(Den Haag)*.\n• **Radio Filharmonisch Orkest** *(Hilversum)*.\n\n**Concertgebouw Amsterdam** *(1888)*:\n• Een van de beste **akoestieken** ter wereld.\n• Beroemd om Mahler-uitvoeringen.\n• Top-3 in jaarlijkse rankings.\n\n**Bekende NL-dirigenten + musici**:\n\n• **Bernard Haitink** *(1929-2021)*: jarenlang chef-dirigent van het Concertgebouworkest.\n• **Mariss Jansons** *(1943-2019, Lets)*: ook dirigent Concertgebouw.\n• **André Rieu** *(1949+, Maastricht)*: walsmaestro + violist, populaire concerten met groot Johann Strauss Orkest. Wereld-bestseller.\n• **Janine Jansen** *(1978+, violiste)*: internationale ster.\n\n**Nederlandse componisten**:\n• **Jan Pieterszoon Sweelinck** *(1562-1621)*: organist van de Oude Kerk in Amsterdam.\n• **Louis Andriessen** *(1939-2021)*: modern.\n• **Cornelis Dopper** *(1870-1939)*: symfonieën.\n\n**Beroemde NL-popmuziek**:\n• **André Hazes** *(1951-2004)*: levenslied — 'Bloed, Zweet en Tranen'.\n• **Marco Borsato** *(1966+)*: popzanger.\n• **Anouk** *(1975+)*: rock-zangeres.\n• **Within Temptation** *(symfonische rock)*.\n• **Tiësto, Armin van Buuren, Hardwell, Martin Garrix** *(allemaal DJ's — NL is DJ-grootmacht!)*.\n• **Caro Emerald** *(jazz/pop)*.\n• **Davina Michelle** *(pop)*.\n\n**Eurovisie Songfestival** 🎤:\n• NL won 5 keer: 1957, 1959, 1969, 1975 *(Teach-In)*, en **2019 *(Duncan Laurence — 'Arcade')***.\n• Eurovisie 2020 zou in Rotterdam zijn — ging niet door vanwege corona; Rotterdam was in 2021 gastheer.\n\n**Bekende NL-bands**:\n• **Doe Maar** *(80s, pop)*.\n• **Golden Earring** *('Radar Love', 'When the Lady Smiles')*.\n• **Shocking Blue** *('Venus' — wereldhit)*.\n• **Anouk, Krezip, BLØF**.\n\n**Muziek-onderwijs**:\n• In NL **muziekschool** voor kinderen *(les viool, piano, gitaar)*.\n• Of in **muziekvereniging** *(harmonie, fanfare, brassband)*.\n• Sommige kinderen leren op **basisschool**.\n\n**Voordelen muziek-maken**:\n• Betere **concentratie**.\n• Beter in **wiskunde + taal** *(volgens sommige studies)*.\n• Plezier + zelfvertrouwen.\n• Sociaal *(samen spelen)*.\n• Discipline.\n\n**Toets-feitje**:\n**Wilhelmus** *(NL-volkslied)* is een van de **oudste nationale liederen** ter wereld — geschreven rond **1568-1572** voor Willem van Oranje *(Tachtigjarige Oorlog)*. Eerste regel: *'Wilhelmus van Nassouwe, ben ik van Duitsen bloed'*.",
    checks: [
      {
        q: "Hoeveel muzikanten spelen er ongeveer in een **symfonieorkest**?",
        options: ["~80-100", "~20-30", "~300-400", "~8-10"],
        answer: 0,
        wrongHints: [null, "Dat is een klein orkest of ensemble. Een symfonieorkest vult een heel podium.", "Zoveel muzikanten passen niet op één podium.", "Dat is een klein groepje, zoals een band. Een symfonieorkest is veel groter."],
      },
      {
        q: "Wie **leidt** het orkest tijdens een concert?",
        options: ["Dirigent", "Eerste violist", "Pianist", "Componist"],
        answer: 0,
        wrongHints: [null, "De eerste violist (concertmeester) leidt alleen de strijkers. Wie staat vóór het hele orkest?", "Een pianist speelt zelf mee. Wie speelt niet mee, maar geeft de maat aan?", "De componist schreef de muziek, vaak lang geleden. Wie geeft tijdens het concert de maat aan?"],
      },
      {
        q: "Welk **Nederlands orkest** hoort bij de wereldtop?",
        options: ["Concertgebouworkest", "Berliner Philharmoniker", "Wiener Philharmoniker", "London Symphony Orchestra"],
        answer: 0,
        wrongHints: [null, "De Berliner Philharmoniker is wereldtop, maar komt uit Duitsland (Berlijn). Welk orkest speelt in Amsterdam?", "De Wiener Philharmoniker is wereldtop, maar komt uit Oostenrijk (Wenen). Welk orkest speelt in Amsterdam?", "Het London Symphony Orchestra is wereldtop, maar komt uit Engeland (Londen). Welk orkest speelt in Amsterdam?"],
      },
      {
        q: "Wie won **Eurovisie 2019** voor NL?",
        options: ["Duncan Laurence", "Marco Borsato", "André Hazes", "Tiësto"],
        answer: 0,
        wrongHints: [null, "Marco Borsato is een bekende popzanger, maar hij deed nooit mee aan het Songfestival.", "André Hazes is bekend van het levenslied, niet van het Songfestival.", "Tiësto is een dj; hij draait op festivals, niet op het Songfestival."],
      },
    ],
  },
  {
    title: "Eind-toets — muziek mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Welke componist werd **doof**?", options: ["Beethoven", "Mozart", "Bach", "Vivaldi"], answer: 0, wrongHints: [null, "Mozart stierf al jong, op 35 jaar, en kon tot het einde goed horen — past 'doof' bij hem?", "Bach kreeg aan het eind juist problemen met zijn ogen, niet met zijn oren — klopt doofheid dan?", "Vivaldi is beroemd om zijn vioolmuziek; van doofheid is bij hem niets bekend — is hij het?"] },
      { q: "Wie schreef **De Vier Jaargetijden**?", options: ["Vivaldi", "Mozart", "Bach", "Schubert"], answer: 0, wrongHints: [null, "Mozart schreef opera + serenades.", "Bach schreef vooral kerk- + orgelwerken.", "Schubert is bekend om liederen + Onvoltooide Symfonie."] },
      { q: "Wat is **allegro**?", options: ["Snel tempo", "Langzaam tempo", "Zacht spelen", "Hard spelen"], answer: 0, wrongHints: [null, "Langzaam heet adagio. Allegro gaat wel over tempo, maar niet over dit tempo.", "Zacht spelen heet piano. Gaat allegro over hoe hard je speelt, of over hoe snel?", "Hard spelen heet forte. Gaat allegro over hoe hard je speelt, of over hoe snel?"] },
      { q: "Hoeveel **strijkers** spelen er ongeveer in een symfonieorkest?", options: ["~50-60", "~4-5", "~150-200", "~10-15"], answer: 0, wrongHints: [null, "Zo klein is een strijkkwartet. In een orkest zijn de strijkers juist de grootste groep.", "Dat zijn er meer dan het hele orkest bij elkaar.", "Zo groot is de groep houtblazers. De strijkers zijn de grootste groep van het orkest."] },
      { q: "Welk muziekstuk is het **volkslied van de EU**?", options: ["Beethoven 9e", "Mozart Requiem", "Wilhelmus", "Bach Toccata"], answer: 0, wrongHints: [null, "Een requiem is een treurmis voor een overledene. Past dat bij het lied van Europa?", "Het Wilhelmus is het volkslied van Nederland, niet van heel Europa.", "Dat is een griezelig klinkend orgelstuk. Past dat bij een feestelijk volkslied?"] },
      { q: "In welke soort muziek is Nederland een echte **grootmacht**?", options: ["DJ-muziek", "Klassiek componeren", "Opera", "Countrymuziek"], answer: 0, wrongHints: [null, "Nederland heeft wel componisten, maar de beroemdste klassieke componisten komen uit Duitsland en Oostenrijk.", "Opera is vooral groot in Italië en Duitsland.", "Country is muziek uit de Verenigde Staten."] },
      { q: "Welke **muziekstijl** hoort bij **Mozart** en **Beethoven**?", options: ["Klassieke muziek", "Pop", "Hip-hop", "Country"], answer: 0, wrongHints: [null, "Popmuziek bestaat pas sinds de 20e eeuw. Mozart leefde in de 18e eeuw.", "Hiphop ontstond rond 1975 — Beethoven was toen al bijna 150 jaar dood.", "Country is Amerikaanse muziek uit de 20e eeuw."] },
      { q: "**Wilhelmus** (NL-volkslied) is uit welke tijd?", options: ["1568-1572", "1900-1905", "1945-1950", "1813-1815"], answer: 0, wrongHints: [null, "Veel ouder — denk aan de tijd van Willem van Oranje.", "Veel ouder — het lied bestond al eeuwen vóór de Tweede Wereldoorlog.", "In 1815 werd Nederland een koninkrijk, maar het lied is nog veel ouder."] },
      { q: "Wat is een **strijkkwartet**?", options: ["4 strijkers samen", "4 blazers samen", "40 strijkers samen", "1 violist alleen"], answer: 0, wrongHints: [null, "Kijk naar het eerste deel van het woord: strijk-. Welke instrumenten strijk je?", "Kijk naar het tweede deel van het woord: kwartet. Denk aan het kaartspel — hoeveel kaarten horen daar bij elkaar?", "Een kwartet speel je niet in je eentje. Denk aan het kaartspel kwartet."] },
      { q: "Welk instrument hoort bij **strijkers**?", options: ["Viool", "Fluit", "Trompet", "Drum"], answer: 0, wrongHints: [null, "Op een fluit blaas je. Strijk je er ook met een stok overheen?", "Op een trompet blaas je. Hoor je die bij de strijkers?", "Op een drum sla je. Dat hoort bij het slagwerk."] },
      { q: "**Eurovisie Songfestival 2019** werd gewonnen door welke Nederlander?", options: ["Duncan Laurence", "Anouk", "Tiësto", "Marco Borsato"], answer: 0, wrongHints: [null, "Anouk deed wel mee, maar in 2013 — en ze won niet.", "Tiësto is een dj; hij deed nooit mee aan het Songfestival.", "Marco Borsato is een popzanger, maar hij deed nooit mee aan het Songfestival."] },
      { q: "Wat is **adagio**?", options: ["Langzaam tempo", "Snel tempo", "Stil", "Hard"], answer: 0, wrongHints: [null, "Snel heet allegro. Adagio is een ander tempo.", "Stil gaat over hoe hard je speelt, niet over tempo. Adagio gaat over tempo.", "Hard gaat over hoe luid je speelt, niet over tempo. Adagio gaat over tempo."] },
      { q: "Welk land is bekend om **klompendansen**?", options: ["Nederland", "Spanje", "Japan", "Brazilië"], answer: 0, wrongHints: [null, "In Spanje dansen ze flamenco, op schoenen met hakken.", "In Japan dragen ze geen klompen.", "In Brazilië dansen ze samba."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const klassiekeMuziekPo = {
  id: "klassieke-muziek-po",
  title: "Klassieke muziek + componisten (groep 6-8, Doorstroomtoets-stof)",
  emoji: "🎼",
  level: "groep6-8",
  subject: "geschiedenis",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — cultuur / muziek",
  prerequisites: [
    { id: "nederlandse-kunstenaars-po", title: "Nederlandse kunstenaars", niveau: "1F" },
  ],
  intro:
    "Klassieke muziek voor groep 6-8, Doorstroomtoets-stof — muziek-basis (melodie/ritme/tempo/instrumenten) + 5 perioden (barok-klassiek-romantiek) + grote 3 (Bach/Mozart-wonderkind/Beethoven-doof) + Vivaldi/Tsjaikovski + orkest + NL (Concertgebouw + André Rieu + Duncan Laurence Eurovisie 2019 + DJ-grootmacht). ~15 min.",
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
