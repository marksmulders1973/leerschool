// Leerpad: Oudheid - Egyptenaren + Grieken + Romeinen - groep 6-8.
// Sluit op tijdvakken-NL. Cito-Tijdvak 1-3. 1F. 4 stappen.

const stepEmojis = ["🏺", "🏛️", "⚔️", "🏆"];

const chapters = [
  { letter: "A", title: "Egyptenaren", emoji: "🏺", from: 0, to: 0 },
  { letter: "B", title: "Oude Grieken", emoji: "🏛️", from: 1, to: 1 },
  { letter: "C", title: "Romeinen", emoji: "⚔️", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Oude Egyptenaren — Piramides + Nijl",
    explanation:
      "**Oude Egyptische beschaving** *(~3100 v.Chr. - 30 v.Chr., ~3000 jaar)*.\nLand: **Egypte** langs **Nijl-rivier**.\n\n**Nijl** 🌊:\n• **Langste rivier ter wereld** *(6650 km)*.\n• Stroomt door woestijn → vruchtbaar land langs oever.\n• Zonder Nijl = geen Egypte.\n• Jaarlijkse **overstroming** bracht slik *(meststof)* → goede oogst.\n\n**Farao's** 👑:\n• 'Koning' van Egypte.\n• **God-status** *(beschouwd als levende god)*.\n• Beroemd:\n  - **Toetanchamon** *(rond 1330 v.Chr.)*: jong gestorven *(19 jaar)*. Graf ontdekt 1922 — vol goud + 'vloek van Toet'-verhaal.\n  - **Ramses II** *(1303-1213 v.Chr.)*: lange regering *(66 jaar)*, vele bouwwerken.\n  - **Cleopatra VII** *(69-30 v.Chr.)*: **laatste farao**, slim + meertalig. Liefdes met Caesar + Marcus Antonius.\n\n**Piramides** 🔺:\n• Graf-monumenten voor farao's.\n• **Piramides van Gizeh** *(2580-2510 v.Chr.)*: 3 grote.\n  - **Grote piramide van Cheops** *(146 m hoog, oudste van 7 wereldwonderen)*.\n  - **Khafre** *(daarbij Sfinx).*\n  - **Menkaure**.\n• Gebouwd uit **2,3 mln stenen** elk 2-15 ton.\n• Hoe? **Nog steeds mysterie** — duizenden arbeiders + slim hijssysteem.\n• ~138 piramides in Egypte totaal.\n\n**Sfinx** 🦁:\n• Mens-hoofd + leeuwen-lichaam.\n• 73 m lang, 20 m hoog.\n• ~4500 jaar oud.\n• Bij piramides Gizeh.\n• Neus weggeslagen *(vele theorieën)*.\n\n**Mummies** 🧟:\n• Lijken **geconserveerd** door drogen + balsemen.\n• Doel: ziel kan in lichaam **terugkeren** na dood.\n• 70 dagen proces *(organen weg behalve hart, droging in zout, wikkel in linnen)*.\n• Veel ontdekt + tentoongesteld.\n\n**Hiërogliefen** 𓂀:\n• Egyptisch **schrift** *(plaatjes)*.\n• ~700 verschillende symbolen.\n• Lang **niet leesbaar** voor wetenschap.\n• **Rosetta-steen** *(1799 gevonden)*: zelfde tekst in 3 schriften — hielp ontcijferen door **Champollion** *(1822)*.\n\n**Goden** 🌞:\n• Veel goden *(polytheïsme)*:\n  - **Ra** *(zonnegod)*.\n  - **Osiris** *(god van dood + onderwereld)*.\n  - **Isis** *(godin van magie + moederschap)*.\n  - **Anubis** *(jakhals-hoofd, balsemer der doden)*.\n  - **Thoth** *(god van wijsheid + schrift)*.\n  - **Bastet** *(katten-godin)* — katten heilig.\n\n**Maatschappij**:\n• Farao bovenaan.\n• Adel + priesters.\n• Ambachtslieden.\n• Boeren *(meerderheid)*.\n• Slaven *(onderaan)*.\n\n**Uitvindingen**:\n• **Papier** *(papyrus uit Nijl-riet)*.\n• **Inkt**.\n• **Kalender** *(365 dagen, 12 maanden)*.\n• **Geometrie** *(om Nijl-overstromingen te meten)*.\n• Eerste **scheikunde** *(balsem).*\n\n**Einde**:\n• Egypte veroverd door **Alexander de Grote** *(332 v.Chr.)*.\n• Toen Romeinen *(30 v.Chr. — Cleopatra-zelfmoord)*.\n\n**Cito-feitje**:\nDe **piramide van Cheops** was 3800 jaar lang het **hoogste gebouw ter wereld**. Pas overtroffen in 1311 door Lincoln Cathedral *(Engeland)*. **Nu** is de Burj Khalifa *(Dubai, 828 m)* hoogst.",
    checks: [
      {
        q: "Welke rivier was **levensader** Egypte?",
        options: ["Nijl", "Donau", "Rijn", "Mississippi"],
        answer: 0,
        wrongHints: [null, "Klopt — langste rivier wereldwijd.", "Europa.", "NL.", "VS."],
      },
      {
        q: "Wat is een **farao**?",
        options: ["Koning + god van Egypte", "Soldaat", "Boer", "Priester"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet primair.", "Niet.", "Apart."],
      },
      {
        q: "Wie was **Toetanchamon**?",
        options: ["Jong gestorven farao (graf 1922)", "Romein", "Griek", "Pirate"],
        answer: 0,
        wrongHints: [null, "Klopt — 19 jaar.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wat is **Rosetta-steen**?",
        options: ["Hielp hiëroglyfen ontcijferen", "Goud", "Mummie", "Berg"],
        answer: 0,
        wrongHints: [null, "Klopt — Champollion 1822.", "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Oude Grieken — Democratie + filosofie",
    explanation:
      "**Oude Griekenland** *(~800 - 146 v.Chr.)*:\nNiet één land, maar **stadstaten** *(polis)* met elk eigen regering.\n\n**Belangrijke steden**:\n• **Athene**: democratie + filosofie + kunst.\n• **Sparta**: militair + krijgers.\n• **Korinthe**: handel.\n• **Thebe, Mycene, Delphi**.\n\n**Democratie ontstaan!** 🗳️\n• Athene rond **508 v.Chr.**: eerste **democratie**.\n• **Demos** = volk, **kratos** = macht.\n• Alleen mannen mochten stemmen *(geen vrouwen, slaven, vreemdelingen)*.\n• Volksvergadering — alle burgers konden meepraten.\n• Niet perfect maar revolutionair voor zijn tijd.\n\n**Filosofie** 💭:\n• **Socrates** *(469-399 v.Chr.)*: **'Ken uzelf'**. Stelde altijd vragen. Veroordeeld + ter dood gebracht.\n• **Plato** *(427-347 v.Chr.)*: Socrates' leerling. Academie. **'Wat is rechtvaardigheid?'**\n• **Aristoteles** *(384-322 v.Chr.)*: Plato's leerling. Logica + biologie + politiek. Leraar van **Alexander de Grote**.\n\n**Wetenschap**:\n• **Pythagoras** *(580-500 v.Chr.)*: wiskunde *(driehoek-stelling)*.\n• **Archimedes** *(287-212 v.Chr.)*: hefboom + drijvermerkrachten. *'Geef mij een hefboom en ik til de wereld op.'*\n• **Euclides** *(300 v.Chr.)*: geometrie.\n• **Hippocrates** *(460-370 v.Chr.)*: medicijn. **Eed van Hippocrates** *(door artsen nog gezworen)*.\n\n**Olympische Spelen** 🥇:\n• Begon **776 v.Chr.** in **Olympia**.\n• Elke 4 jaar.\n• Alleen mannen.\n• Tijdens spelen — vrede.\n• Winnaars: olijftakkrans.\n• Eindigde 393 n.Chr.\n• Heropgericht 1896 *(Athene)*.\n\n**Mythologie** ⚡:\n• Vele goden + helden.\n• Bovenaan: **Zeus** *(oppergod, bliksem)*.\n• Andere: **Hera** *(vrouw Zeus)*, **Poseidon** *(zee)*, **Hades** *(onderwereld)*, **Athena** *(wijsheid)*, **Apollo** *(zon, muziek)*, **Ares** *(oorlog)*, **Hermes** *(boodschapper)*, **Aphrodite** *(liefde)*.\n• Helden: **Achilles, Odysseus, Heracles, Theseus**.\n• Verhalen: **Trojaanse Oorlog**, **Odyssee**.\n\n**Theater** 🎭:\n• Uitgevonden door Grieken!\n• **Tragedies** + **komedies**.\n• Open-air theaters in steen.\n• Acteurs met **maskers**.\n• **Sophocles, Aeschylos, Euripides** = tragedie-schrijvers.\n• **Aristophanes** = komedies.\n\n**Architectuur** 🏛️:\n• **Parthenon** in Athene *(beroemd marmer-tempel)*.\n• Pilaren *(Dorische, Ionische, Korinthische)*.\n• Beeldhouwwerk *(perfecte vorm)*.\n• Standaard voor Europese architectuur tot vandaag.\n\n**Alexander de Grote** *(356-323 v.Chr.)*:\n• Zoon koning Macedonië.\n• Leerling van Aristoteles.\n• Op 20 koning.\n• Veroverde **Perzië, Egypte, deel India** in 10 jaar.\n• Grootste rijk tot dan.\n• Stierf op 32 *(koorts)*.\n• Verspreidde Griekse cultuur *(Hellenisme)*.\n• Stichtte **Alexandrië** *(Egypte)* — beroemde bibliotheek.\n\n**Einde Oude Griekenland**:\n• Romeinen veroverden Griekenland *(146 v.Chr.)*.\n• Maar Griekse cultuur **bleef** — Romeinen kopieerden veel.\n\n**Cito-feitje**:\nVeel **moderne woorden** zijn Grieks!\n• Demokratie = volk + macht.\n• Filosofie = liefhebber van wijsheid.\n• Olympische = van Olympia.\n• Telefoon = ver + geluid.\n• Astronaut = ster + zeeman.\n• Logica, geografie, biologie, fysica, geometrie — allemaal Grieks!",
    checks: [
      {
        q: "Waar ontstond **democratie**?",
        options: ["Athene (~508 v.Chr.)", "Sparta", "Rome", "Egypte"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Militair.", "Later.", "Farao-systeem."],
      },
      {
        q: "Wie was **leraar** van Alexander de Grote?",
        options: ["Aristoteles", "Socrates", "Plato", "Pythagoras"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Eerder.", "Eerder.", "Wiskundige."],
      },
      {
        q: "Wie veroverde **Perzië + Egypte + deel India**?",
        options: ["Alexander de Grote (~330 v.Chr.)", "Caesar", "Aristoteles", "Plato"],
        answer: 0,
        wrongHints: [null, "Klopt — stierf jong.", "Romein later.", "Filosoof.", "Filosoof."],
      },
      {
        q: "Wat is **Eed van Hippocrates**?",
        options: ["Belofte van artsen", "Soldaten-eed", "Politieke", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt — nog steeds.", "Niet.", "Niet.", "Wel."],
      },
    ],
  },
  {
    title: "Romeinen — Imperium + invloed",
    explanation:
      "**Romeinse Rijk** *(~753 v.Chr. - 476 n.Chr., 1200 jaar)*.\nGrootste rijk in geschiedenis Europa.\n\n**Beginnen**:\n• Legende: **Romulus + Remus** *(tweelingbroers gevoed door wolf)* stichten Rome 753 v.Chr.\n• Eerst **koningen**, daarna **Republiek** *(509 v.Chr.)*, daarna **Keizerrijk** *(27 v.Chr.)*.\n\n**Belangrijke gebeurtenissen**:\n\n**Republiek** *(509-27 v.Chr.)*:\n• **Senaat** *(adelijke regering)*.\n• Volk koos consuls *(jaarlijks)*.\n• Geen koning — geleerd van Etrusken.\n\n**Julius Caesar** *(100-44 v.Chr.)*:\n• Beroemd generaal + politicus.\n• Veroverde **Gallië** *(Frankrijk)* + invasie Engeland.\n• **'Veni, vidi, vici'** *(Ik kwam, ik zag, ik overwon)* — beroemde uitspraak.\n• Stak Rubicon-rivier over → burgeroorlog.\n• **Vermoord** in **Senaat 15 maart 44 v.Chr.** *(Iden van maart, door senatoren)*.\n• 'Et tu, Brute?' *(Ook jij, Brutus?)* — Brutus was zijn vriend.\n• Maand **juli** naar hem genoemd!\n\n**Keizerrijk** *(27 v.Chr. - 476 n.Chr.)*:\n• Caesar's neef **Octavianus** werd eerste keizer.\n• Naam: **Augustus** *('verhevene')*.\n• Maand **augustus** naar hem!\n• Pax Romana *(Romeinse vrede)* — 200 jaar relatieve rust.\n\n**Beroemde keizers**:\n• **Augustus**: eerste.\n• **Tiberius**: tweede.\n• **Caligula**: gek + wreed.\n• **Nero**: speelde fluit terwijl Rome brandde *(64 n.Chr.)*. Vervolgde christenen.\n• **Marcus Aurelius**: 'goede keizer', filosoof.\n• **Constantijn**: bekeerde tot christendom *(312)*.\n\n**Rome veroverde**:\n• Op piek: heel Middellandse Zee-gebied.\n• Spanje, Frankrijk, Engeland, Duitsland-deel, Noord-Afrika, Egypte, Midden-Oosten, Griekenland, Balkan.\n• **70 miljoen** inwoners *(20% van toenmalige wereldbevolking)*.\n\n**Bouwwerken** 🏛️:\n• **Colosseum** *(Rome, 70-80 n.Chr.)*: 50.000 toeschouwers. Gladiator-gevechten + dier-gevechten.\n• **Pantheon** *(Rome)*: tempel met enorme koepel.\n• **Forum**: centrum van politiek.\n• **Wegen**: 80.000 km, sommige nog gebruikt.\n• **Aquaducten**: water vervoeren.\n• **Thermen** *(badhuizen)*: tot 3000 mensen.\n• **Hadrianus' Muur** *(Engeland)*: 117 km lange muur.\n\n**Romeinen in Nederland** 🇳🇱:\n• ~50 v.Chr. - 400 n.Chr.\n• Grens **Limes** = langs Rijn.\n• Veroverden tot Rijn — niet verder *(Bataven + Friezen weerstand)*.\n• Steden: **Nijmegen** *(Noviomagus)*, **Utrecht** *(Trajectum)*, **Maastricht**.\n• Bataven onder leiding **Iulius Civilis** opstand *(69 n.Chr.)*.\n• Verleden zichtbaar: archeologie + Latijnse woorden in NL.\n\n**Cultuur + erfenis**:\n\n**Taal**: **Latijn** — basis voor Frans, Spaans, Italiaans, Portugees, Roemeens.\nVeel NL/Engelse woorden komen uit Latijn *(via Frans)*.\n\n**Recht**: **Romeins recht** = basis voor modern recht.\n• 'Ius civile' *(burgerrecht)*.\n• 'Pacta sunt servanda' *(afspraken moeten gehouden)*.\n\n**Schrift**: **Latijnse alfabet** — wij gebruiken het!\nA-B-C-D-...-Z = Romeins.\n\n**Christendom**:\n• Begon als kleine sekte.\n• Vervolgd door Nero + andere keizers.\n• **Constantijn** maakt **legaal** *(312)*.\n• **Theodosius** maakt staat-religie *(380)*.\n• Daarna verspreidde overal.\n\n**Einde West-Romeinse Rijk** *(476 n.Chr.)*:\n• Germaanse stammen *(Visigoten, Vandalen, Hunnen)* vielen binnen.\n• Laatste keizer afgezet door Odoaker.\n• Begin Middeleeuwen.\n\n**Oost-Romeinse Rijk** = **Byzantijnse Rijk** *(330-1453)*:\n• Hoofdstad **Constantinopel** *(nu Istanbul, Turkije)*.\n• Bleef nog 1000 jaar bestaan na West.\n• Eindigde toen Ottoanen veroverden 1453.\n\n**Cito-feitje**:\nDe **Romeinen telden in letters**! Het cijfer-systeem dat we nu gebruiken *(0-9)* komt uit **India** *(via Arabieren)* en kwam pas rond 1200 in Europa. Romeinse cijfers: I, V, X, L, C, D, M *(1, 5, 10, 50, 100, 500, 1000)*. Probeer 1989 in Romeins: **MCMLXXXIX**!",
    checks: [
      {
        q: "Wie stichtte volgens legende **Rome**?",
        options: ["Romulus + Remus (753 v.Chr.)", "Caesar", "Augustus", "Alexander"],
        answer: 0,
        wrongHints: [null, "Klopt — gevoed door wolf.", "Veel later.", "Eerste keizer later.", "Griek."],
      },
      {
        q: "Wie zei **'Veni, vidi, vici'**?",
        options: ["Julius Caesar", "Augustus", "Alexander", "Aristoteles"],
        answer: 0,
        wrongHints: [null, "Klopt — 'Ik kwam, zag, overwon'.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "**Romeinse grens in NL** was?",
        options: ["Rijn (Limes)", "Maas", "IJssel", "Schelde"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet primair.", "Niet."],
      },
      {
        q: "Wanneer **viel West-Romeinse Rijk**?",
        options: ["476 n.Chr.", "100 n.Chr.", "1000 n.Chr.", "Bestaat nog"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Bestond nog.", "Te laat.", "Wel uitgestorven."],
      },
    ],
  },
  {
    title: "Eind-toets — Oudheid mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Welke rivier was levensader **Egypte**?", options: ["Nijl", "Donau", "Rijn", "Tigris"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Andere oude beschaving."] },
      { q: "Waar ontstond **democratie**?", options: ["Athene", "Sparta", "Rome", "Egypte"], answer: 0, wrongHints: [null, "Klopt.", "Militair.", "Republiek anders.", "Farao."] },
      { q: "Wie was leraar **Alexander de Grote**?", options: ["Aristoteles", "Socrates", "Caesar", "Plato"], answer: 0, wrongHints: [null, "Klopt.", "Eerder.", "Niet — Romein.", "Eerder."] },
      { q: "Wie zei **'Veni, vidi, vici'**?", options: ["Caesar", "Augustus", "Alexander", "Toetanchamon"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Egyptisch."] },
      { q: "Hoogste **piramide** wereld 3800 jr lang?", options: ["Cheops (Gizeh, 146 m)", "Khafre", "Menkaure", "Burj Khalifa"], answer: 0, wrongHints: [null, "Klopt.", "Kleinere.", "Kleinere.", "Modern."] },
      { q: "Wanneer **viel West-Romeinse Rijk**?", options: ["476 n.Chr.", "100 v.Chr.", "1000 n.Chr.", "Bestaat nog"], answer: 0, wrongHints: [null, "Klopt.", "Bestond nog.", "Te laat.", "Wel."] },
      {
        q: "Wat waren **hiërogliefen** (Egypte)?",
        options: ["Schrift met plaatjes — letters, klanken, hele woorden", "Soort vis", "Egyptische dansvorm", "Tegels"],
        answer: 0,
        wrongHints: [null, "Klopt — gebruikt in tempels + piramides + boekrollen.", "Niet — dat zijn vissen-namen.", "Niet — geen dans.", "Niet — wel sommige tekst stond op stenen."],
        uitlegPad: {
          stappen: [
            { titel: "Wat zijn hiërogliefen?", tekst: "**Hiërogliefen** waren het **schrift van het oude Egypte**. Gebruikt **~3000 v.Chr. tot ~400 n.Chr.** (~3.500 jaar lang).\n\nElke 'letter' was eigenlijk een **plaatje** (vogel, oog, slang, hand). Sommige stonden voor:\n• **Klank** (zoals letters)\n• **Hele woord** (zoals Chinese tekens)\n• **Idee** (zoals emoji's)\n\nGevolg: ~700 verschillende symbolen. Alleen **priesters + schrijvers** konden lezen + schrijven (~1% van bevolking)." },
            { titel: "Hoe konden we ze ontcijferen?", tekst: "Lange tijd kon **niemand meer hiërogliefen lezen** (was vergeten). Tot **1799**: Franse soldaten van Napoleon vonden in Egypte de **Steen van Rosetta**.\n\nDe Steen had hetzelfde tekst in **3 schriften**:\n• Hiërogliefen (Egyptisch)\n• Demotisch (laat-Egyptisch)\n• **Grieks** (deze konden we wel lezen!)\n\nFransman **Champollion** ontcijferde in **1822** de code door Grieks naast hiërogliefen te leggen. Daardoor weten we nu hoe Egyptisch werkte." },
            { titel: "Cito-feit: waar zie je ze?", tekst: "Hiërogliefen zijn te zien op:\n• **Piramides** van Gizeh (rond Cheops)\n• **Sfinx**\n• **Karnak-tempel** in Luxor\n• **Tutankhamun's graf** (ontdekt 1922 door Carter)\n• **Steen van Rosetta** (nu in British Museum, Londen)\n\nCito vraagt soms: **'Wat is het oudste schrift?'** Antwoord: hiërogliefen of spijkerschrift (Mesopotamië, ook ~3000 v.Chr. — eigen schrijfsysteem)." },
          ],
          woorden: [
            { woord: "hiërogliefen", uitleg: "Egyptisch plaatjes-schrift. Werd geschreven op steen, papyrus, tempel-muren." },
            { woord: "papyrus", uitleg: "Egyptisch 'papier' — gemaakt van papyrus-plant uit Nijl." },
            { woord: "Champollion", uitleg: "Frans wetenschapper die in 1822 hiërogliefen ontcijferde." },
            { woord: "Steen van Rosetta", uitleg: "Steen uit 196 v.Chr. met zelfde tekst in 3 schriften. Sleutel tot Egyptische taal." },
          ],
          theorie: "Belangrijke schrift-systemen oudheid (Cito-stof):\n• **Hiërogliefen** (Egypte, 3000 v.Chr.)\n• **Spijkerschrift** (Mesopotamië, 3500 v.Chr.) — wedgevormige tekens in klei\n• **Grieks alfabet** (Griekenland, ~800 v.Chr.) — basis voor Latijn + ons alfabet\n• **Romeinse cijfers** (I, V, X, L, C, D, M) — nog gebruikt voor klok + pausen-namen\n• **Chinees schrift** (ook ~3000 v.Chr., nog steeds gebruikt!)",
          voorbeelden: [
            { type: "feit", tekst: "Onze letter 'A' komt via Grieks 'alpha' uit Fenicisch 'aleph' = stier. De vorm leek vroeger op een omgekeerde stier-kop." },
            { type: "feit", tekst: "Cleopatra (laatste farao, gestorven 30 v.Chr.) sprak Grieks als hoofdtaal, niet Egyptisch — koningshuis was Grieks (Ptolemaeën-dynastie)." },
          ],
          basiskennis: [{ onderwerp: "Niet zomaar plaatjes", uitleg: "Hiërogliefen zijn echt schrift, niet 'lekker tekenen'. Elk symbool had vaste betekenis + uitspraak." }],
          niveaus: { basis: "Egyptisch plaatjes-schrift. = A.", simpeler: "Hiërogliefen waren het schrift van oude Egyptenaren. Plaatjes die letters/klanken/woorden voorstelden. ~3000 v.Chr. tot 400 n.Chr. = A.", nogSimpeler: "Schrift Egypte = A." },
        },
      },
      {
        q: "Wat zijn de **Olympische Spelen** oorsprong?",
        options: ["Griekse stad Olympia, sinds 776 v.Chr.", "Frankrijk 1900", "China 200 v.Chr.", "Rusland 1850"],
        answer: 0,
        wrongHints: [null, "Klopt — oudste sport-event, vernoemd naar plaats Olympia in Griekenland.", "Niet — moderne OS sinds 1896 in Athene, maar oude OS veel ouder.", "Niet — Chinese sport-cultuur anders.", "Niet — geen Russische oorsprong."],
        uitlegPad: {
          stappen: [
            { titel: "Antieke Olympische Spelen", tekst: "De **eerste Olympische Spelen** waren in **776 v.Chr.** in de Griekse stad **Olympia** (vandaar de naam). **Elke 4 jaar** kwamen mannen samen om sport te beoefenen ter ere van de **god Zeus** (oppergod Grieken).\n\n**Sporten waren**:\n• Hardlopen\n• Discus + speerwerpen\n• Worstelen\n• Boksen\n• Wagenrennen\n• Pentatlon (5 sporten combi)" },
            { titel: "Regels in oude OS", tekst: "Bijzondere regels:\n• **Alleen mannen** mochten meedoen + kijken\n• **Vrouwen** verboden — eigen Herafestival\n• Atleten waren **naakt** (Grieks: gymnos → 'gymnastiek')\n• Tijdens spelen: **wapenstilstand** in alle Griekse stadstaten (Olympische Truce)\n• Geen geldprijzen — winnaar kreeg **olijfkrans** + eeuwige roem\n• **1200 jaar lang** gehouden — tot 393 n.Chr. (Christelijke keizer Theodosius verbood)" },
            { titel: "Cito-feit: moderne OS", tekst: "**Moderne Olympische Spelen** zijn herstart in **1896** in **Athene** (Griekenland — als eerbetoon aan oorsprong) door Fransman **Pierre de Coubertin**.\n\nVerschillen met oude OS:\n• **Vrouwen mogen meedoen** sinds 1900 (Parijs)\n• **Internationale deelname** (niet alleen Grieken)\n• **Winter + zomer OS** afwisselend\n• **Sport-medailles** (goud/zilver/brons) ipv olijfkrans\n• Locatie wisselt elke 4 jaar (2024: Parijs, 2028: LA, 2032: Brisbane)\n\nNL was succesvol op 2024 Parijs: ~30+ medailles." },
          ],
          woorden: [
            { woord: "Olympia", uitleg: "Stad in Griekenland — religieus + sport-centrum oude OS. Bestaat nog (toeristische ruïnes)." },
            { woord: "Zeus", uitleg: "Oppergod in Griekse mythologie. Heerste op berg Olympus." },
            { woord: "gymnasium", uitleg: "Grieks woord voor 'oefenplaats' — wij gebruiken het nu voor sport-zaal + middelbare school (VWO)." },
            { woord: "Pierre de Coubertin", uitleg: "Franse baron die in 1896 moderne OS herstartte. Vandaar 'IOC' = Internationaal Olympisch Comité." },
          ],
          theorie: "Oude Olympische Spelen-feiten:\n• 776 v.Chr. — eerste OS (officieel)\n• 393 n.Chr. — verboden door Christelijke keizer\n• 1896 — moderne herstart Athene\n• Symbolen: 5 ringen = 5 continenten, vlam komt uit Olympia overgedragen\n• 'Citius, Altius, Fortius' = Latijns motto: 'Sneller, Hoger, Sterker'\n\nVerband met andere Cito-stof: Griekse cultuur → Romeinen → Middeleeuwen → Renaissance → wij.",
          voorbeelden: [
            { type: "feit", tekst: "Marathon (42 km) komt van Griekse soldaat die in 490 v.Chr. van veldslag Marathon naar Athene rende met overwinningsbericht — viel daar dood neer." },
            { type: "feit", tekst: "Op NL OS-2024 Parijs: Femke Bol won goud op 4×400m mixed estafette. Spirit van Olympia leeft door." },
          ],
          basiskennis: [{ onderwerp: "Olympia ≠ Olympus", uitleg: "**Olympia** = stad in Griekenland (waar spelen waren). **Berg Olympus** = waar Zeus woonde volgens mythologie. Andere plek." }],
          niveaus: { basis: "Griekenland, 776 v.Chr. = A.", simpeler: "De Olympische Spelen ontstonden in 776 v.Chr. in de Griekse stad Olympia. Werden 1200 jaar lang elke 4 jaar gehouden ter ere van god Zeus. = A.", nogSimpeler: "Griekenland oud = A." },
        },
      },
      {
        q: "Wat is **mythologie**?",
        options: ["Verhalen over goden + helden om wereld + natuur uit te leggen", "Bewezen wetenschap", "Geschiedenis-boek voor middelbaar", "Sport in oudheid"],
        answer: 0,
        wrongHints: [null, "Klopt — verklarend verhaal vóór wetenschap bestond.", "Niet — mythologie = vóór wetenschap, geen feit.", "Niet — wel deel van geschiedenisles maar mythologie zelf is iets anders.", "Niet — wel sport komt VOOR in mythen (Hercules), niet hetzelfde."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is mythologie?", tekst: "**Mythologie** = **verhalen over goden + bovennatuurlijke wezens** die mensen vroeger geloofden. Bedoeld om **uit te leggen**:\n• Hoe de wereld ontstond\n• Waarom donder + bliksem\n• Waarom seizoenen\n• Waarom mensen sterven\n• Lessen voor goed leven\n\nVoordat wetenschap dit ALLES kon uitleggen, gebruikten mensen mythologie." },
            { titel: "Bekende mythologieën", tekst: "**Griekse mythologie** (meest bekend in NL-onderwijs):\n• **Zeus** — oppergod, donder + bliksem\n• **Hera** — vrouw Zeus, beschermt huwelijk\n• **Poseidon** — god zee\n• **Hades** — god onderwereld\n• **Athena** — wijsheid + oorlog\n• **Aphrodite** — liefde\n• **Apollo** — zon + muziek\n• **Hercules** — sterkste held (12 werken)\n\n**Romeinse mythologie** = bijna identiek, andere namen:\n• Zeus → Jupiter\n• Hera → Juno\n• Athena → Minerva\n• etc.\n\nAndere bekende: **Egyptisch** (Osiris, Ra, Anubis), **Noors** (Odin, Thor, Loki — bekend via Marvel-films)." },
            { titel: "Cito-feit: mythologie in onze taal + cultuur", tekst: "Mythologie zit OVERAL in onze cultuur:\n• **Maanden**: maart (Mars, god oorlog), juli (Julius Caesar — voortaan een god)\n• **Planeten**: Mars, Venus, Jupiter, Saturnus — allemaal Romeinse goden\n• **Merken**: Nike (Griekse godin overwinning), Amazon (Amazones-strijdsters), Hermes (boodschapper-god)\n• **Films**: Hercules (Disney), Marvel Thor-films (Noors), Percy Jackson (Grieks)\n• **Uitdrukkingen**: 'Achilles-hiel' (zwakke plek), 'Trojaans paard' (verraderlijke gift), 'Pandora's doos' (rampen losmaken)\n• **Sterrenbeelden**: 12 sterrenbeelden zodiak — allemaal Griekse mythen" },
          ],
          woorden: [
            { woord: "mythologie", uitleg: "Verhalen-collectie over goden + helden van een cultuur. Bedoeld om wereld te verklaren." },
            { woord: "mythe", uitleg: "Enkel verhaal binnen een mythologie. Bv. mythe van Hercules." },
            { woord: "god", uitleg: "Bovennatuurlijk wezen met macht over natuur, leven, lot. Vaak meerdere in oude religies (polytheïsme)." },
            { woord: "polytheïsme", uitleg: "Geloof in meerdere goden. Vroeger normaal in Griekenland, Egypte, Noord-Europa." },
          ],
          theorie: "Mythologie vs religie vs wetenschap:\n• **Mythologie** = oude verklaringen, vaak meerdere goden, niet meer geloofd (door velen)\n• **Religie** = georganiseerd geloof — nu vooral monotheïstisch (1 god): christendom, islam, jodendom\n• **Wetenschap** = bewezen verklaringen via experiment\n\nOude Grieken hadden vooral mythologie. Romeinen idem. Daarna kwam christendom (1 god). Tegelijkertijd ontstond wetenschap.",
          voorbeelden: [
            { type: "feit", tekst: "Het Trojaanse Paard-verhaal (Griekse oorlog tegen Troje) was lang gezien als mythe. Maar archeologen vonden Troje WEL terug in 1870 — het gebeurde echt." },
            { type: "feit", tekst: "Hercules deed '12 werken' (zware opdrachten) — een ervan: Nemese-leeuw doden + huid dragen. Symbool van moed." },
          ],
          basiskennis: [{ onderwerp: "Niet zelfde als sprookje", uitleg: "Mythen werden ECHT geloofd door oude volken. Sprookjes werden altijd als fictie verteld. Verschil." }],
          niveaus: { basis: "Verhalen over goden om wereld uit te leggen. = A.", simpeler: "Mythologie = oude verhalen over goden + helden die uitleggen hoe natuur + wereld werkt. Bv. Grieks: Zeus voor bliksem. Niet wetenschappelijk maar wel cultureel waardevol. = A.", nogSimpeler: "Verhalen over goden = A." },
        },
      },
      { q: "Bij welke **rivier** woonden de oude Egyptenaren?", options: ["De Nijl","De Amazone","De Donau","De Rijn"], answer: 0, wrongHints: [null,"Klopt — vruchtbare oevers.","Zuid-Amerika.","Europa.","Europa."] },
      { q: "Welke **stad** was eerste democratie?", options: ["Athene","Sparta","Rome","Cairo"], answer: 0, wrongHints: [null,"Klopt — 508 v.Chr.","Wel Grieks maar geen democratie.","Republiek, maar later.","Egyptisch."] },
      { q: "Welk **Romeins bouwwerk** was het grote arena-gebouw in Rome?", options: ["Colosseum","Acropolis","Parthenon","Piramide"], answer: 0, wrongHints: [null,"Klopt — gladiatoren-arena.","Grieks.","Grieks.","Egyptisch."] },
      { q: "In welk jaar viel het **West-Romeinse Rijk**?", options: ["476 n.Chr.","100 v.Chr.","1066","1500"], answer: 0, wrongHints: [null,"Klopt — begin Middeleeuwen.","Te vroeg.","Slag bij Hastings.","Renaissance."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const oudheidEgyptiansGriekenPo = {
  id: "oudheid-egyptenaren-grieken-romeinen-po",
  title: "Oudheid — Egyptenaren + Grieken + Romeinen (Cito groep 6-8)",
  emoji: "🏺",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — geschiedenis (Tijdvak 1-3)",
  prerequisites: [
    { id: "tijdvakken-nederland-po", title: "Tijdvakken NL", niveau: "1F" },
  ],
  intro:
    "Oudheid voor Cito groep 6-8 — Egyptenaren (Nijl/farao's/Toetanchamon/piramides/mummies/hiëroglyfen + Rosetta-steen) + Grieken (Athene democratie 508 v.Chr./Socrates-Plato-Aristoteles/Olympische Spelen 776 v.Chr./Alexander de Grote) + Romeinen (Caesar/Augustus/Colosseum/Limes-Rijn-NL/Latijn) + 476 val West-Romeinse Rijk. ~15 min.",
  triggerKeywords: [
    "oudheid", "antiek",
    "Egyptenaren", "farao", "piramide", "Nijl",
    "Toetanchamon", "Cleopatra",
    "hiërogliefen", "Rosetta",
    "Grieken", "Athene", "Sparta",
    "Socrates", "Plato", "Aristoteles",
    "Alexander de Grote",
    "Romeinen", "Caesar", "Augustus",
    "Colosseum", "Limes",
  ],
  chapters,
  steps,
};

export default oudheidEgyptiansGriekenPo;
