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
      "**Oude Egyptische beschaving** *(~3100 v.Chr. - 30 v.Chr., ~3000 jaar)*.\nLand: **Egypte** langs **Nijl-rivier**.\n\n**Nijl** 🌊:\n• **Een van de langste rivieren ter wereld** *(6650 km)*.\n• Stroomt door woestijn → vruchtbaar land langs oever.\n• Zonder Nijl = geen Egypte.\n• Jaarlijkse **overstroming** bracht slik *(meststof)* → goede oogst.\n\n**Farao's** 👑:\n• 'Koning' van Egypte.\n• **God-status** *(beschouwd als levende god)*.\n• Beroemd:\n  - **Toetanchamon** *(rond 1330 v.Chr.)*: jong gestorven *(19 jaar)*. Graf ontdekt 1922 — vol goud + 'vloek van Toet'-verhaal.\n  - **Ramses II** *(1303-1213 v.Chr.)*: lange regering *(66 jaar)*, vele bouwwerken.\n  - **Cleopatra VII** *(69-30 v.Chr.)*: **laatste farao**, slim + meertalig. Liefdes met Caesar + Marcus Antonius.\n\n**Piramides** 🔺:\n• Graf-monumenten voor farao's.\n• **Piramides van Gizeh** *(2580-2510 v.Chr.)*: 3 grote.\n  - **Grote piramide van Cheops** *(146 m hoog, oudste van 7 wereldwonderen)*.\n  - **Chefren** *(daarbij Sfinx).*\n  - **Mykerinos**.\n• Gebouwd uit **2,3 mln stenen** elk 2-15 ton.\n• Hoe? **Nog steeds mysterie** — duizenden arbeiders + slim hijssysteem.\n• ~138 piramides in Egypte totaal.\n\n**Sfinx** 🦁:\n• Mens-hoofd + leeuwen-lichaam.\n• 73 m lang, 20 m hoog.\n• ~4500 jaar oud.\n• Bij piramides Gizeh.\n• Neus weggeslagen *(vele theorieën)*.\n\n**Mummies** 🧟:\n• Lijken **geconserveerd** door drogen + balsemen.\n• Doel: ziel kan in lichaam **terugkeren** na dood.\n• 70 dagen proces *(organen weg behalve hart, droging in zout, wikkel in linnen)*.\n• Veel ontdekt + tentoongesteld.\n\n**Hiërogliefen** 𓂀:\n• Egyptisch **schrift** *(plaatjes)*.\n• ~700 verschillende symbolen.\n• Lang **niet leesbaar** voor wetenschap.\n• **Rosetta-steen** *(1799 gevonden)*: zelfde tekst in 3 schriften — hielp ontcijferen door **Champollion** *(1822)*.\n\n**Goden** 🌞:\n• Veel goden *(polytheïsme)*:\n  - **Ra** *(zonnegod)*.\n  - **Osiris** *(god van dood + onderwereld)*.\n  - **Isis** *(godin van magie + moederschap)*.\n  - **Anubis** *(jakhals-hoofd, balsemer der doden)*.\n  - **Thoth** *(god van wijsheid + schrift)*.\n  - **Bastet** *(katten-godin)* — katten heilig.\n\n**Maatschappij**:\n• Farao bovenaan.\n• Adel + priesters.\n• Ambachtslieden.\n• Boeren *(meerderheid)*.\n• Slaven *(onderaan)*.\n\n**Uitvindingen**:\n• **Papier** *(papyrus uit Nijl-riet)*.\n• **Inkt**.\n• **Kalender** *(365 dagen, 12 maanden)*.\n• **Geometrie** *(om Nijl-overstromingen te meten)*.\n• Eerste **scheikunde** *(balsem).*\n\n**Einde**:\n• Egypte veroverd door **Alexander de Grote** *(332 v.Chr.)*.\n• Toen Romeinen *(30 v.Chr. — Cleopatra-zelfmoord)*.\n\n**Toets-feitje**:\nDe **piramide van Cheops** was 3800 jaar lang het **hoogste gebouw ter wereld**. Pas overtroffen in 1311 door Lincoln Cathedral *(Engeland)*. **Nu** is de Burj Khalifa *(Dubai, 828 m)* hoogst.",
    checks: [
      {
        q: "Welke rivier was de **levensader** van het oude Egypte?",
        options: ["Nijl", "Tigris", "Eufraat", "Jordaan"],
        answer: 0,
        wrongHints: [null, "De Tigris stroomt door Irak, waar een andere oude beschaving woonde. Welke rivier stroomt door de woestijn van Egypte?", "De Eufraat stroomt naast de Tigris door Irak, niet door Egypte.", "De Jordaan is een kleine rivier in Israël en Jordanië. Egypte had een veel grotere rivier."],
      },
      {
        q: "Wat is een **farao**?",
        options: ["Koning van Egypte, die als god werd gezien", "Priester die in de tempel offers bracht", "Rijke boer met grote akkers langs de Nijl", "Schrijver die hiërogliefen in steen kraste"],
        answer: 0,
        wrongHints: [null, "Priesters werkten in de tempels voor de farao. Wie was hij zelf?", "Boeren werkten voor de farao. Wie was hij dan?", "Schrijvers werkten voor de farao. Wie was hij dan?"],
      },
      {
        q: "Wie was **Toetanchamon**?",
        options: ["Jonge farao van Egypte", "Romeinse keizer uit Rome", "Griekse filosoof uit Athene", "Koning van het Perzische Rijk"],
        answer: 0,
        wrongHints: [null, "De Romeinse keizers kwamen pas veel later. Waar werd in 1922 zijn graf gevonden?", "Griekse filosofen schreven boeken. Waar is Toetanchamon om bekend?", "Perzische koningen woonden verder naar het oosten. In welk land werd zijn graf gevonden?"],
      },
      {
        q: "Wat is de **Steen van Rosetta**?",
        options: ["Een steen met één tekst in drie schriften", "Een steen met een kaart van de Nijl", "Een steen boven het graf van Cheops", "Een steen uit de top van een piramide"],
        answer: 0,
        wrongHints: [null, "Er stond wel tekst op, geen kaart. Waarom kon Champollion er zoveel mee?", "Hij lag niet bij een piramide; Franse soldaten vonden hem in 1799. Wat stond erop?", "Het is geen bouwsteen. Waarom hielp juist deze steen om hiërogliefen te lezen?"],
      },
    ],
  },
  {
    title: "Oude Grieken — Democratie + filosofie",
    explanation:
      "**Oude Griekenland** *(~800 - 146 v.Chr.)*:\nNiet één land, maar **stadstaten** *(polis)* met elk eigen regering.\n\n**Belangrijke steden**:\n• **Athene**: democratie + filosofie + kunst.\n• **Sparta**: militair + krijgers.\n• **Korinthe**: handel.\n• **Thebe, Mycene, Delphi**.\n\n**Democratie ontstaan!** 🗳️\n• Athene rond **508 v.Chr.**: eerste **democratie**.\n• **Demos** = volk, **kratos** = macht.\n• Alleen mannen mochten stemmen *(geen vrouwen, slaven, vreemdelingen)*.\n• Volksvergadering — alle burgers konden meepraten.\n• Niet perfect maar revolutionair voor zijn tijd.\n\n**Filosofie** 💭:\n• **Socrates** *(469-399 v.Chr.)*: **'Ken uzelf'**. Stelde altijd vragen. Veroordeeld + ter dood gebracht.\n• **Plato** *(427-347 v.Chr.)*: Socrates' leerling. Academie. **'Wat is rechtvaardigheid?'**\n• **Aristoteles** *(384-322 v.Chr.)*: Plato's leerling. Logica + biologie + politiek. Leraar van **Alexander de Grote**.\n\n**Wetenschap**:\n• **Pythagoras** *(580-500 v.Chr.)*: wiskunde *(driehoek-stelling)*.\n• **Archimedes** *(287-212 v.Chr.)*: hefboom + opwaartse kracht. *'Geef mij een hefboom en ik til de wereld op.'*\n• **Euclides** *(300 v.Chr.)*: geometrie.\n• **Hippocrates** *(460-370 v.Chr.)*: geneeskunde. **Eed van Hippocrates** *(door artsen nog gezworen)*.\n\n**Olympische Spelen** 🥇:\n• Begon **776 v.Chr.** in **Olympia**.\n• Elke 4 jaar.\n• Alleen mannen.\n• Tijdens spelen — vrede.\n• Winnaars: olijftakkrans.\n• Eindigde 393 n.Chr.\n• Heropgericht 1896 *(Athene)*.\n\n**Mythologie** ⚡:\n• Vele goden + helden.\n• Bovenaan: **Zeus** *(oppergod, bliksem)*.\n• Andere: **Hera** *(vrouw Zeus)*, **Poseidon** *(zee)*, **Hades** *(onderwereld)*, **Athena** *(wijsheid)*, **Apollo** *(zon, muziek)*, **Ares** *(oorlog)*, **Hermes** *(boodschapper)*, **Aphrodite** *(liefde)*.\n• Helden: **Achilles, Odysseus, Heracles, Theseus**.\n• Verhalen: **Trojaanse Oorlog**, **Odyssee**.\n\n**Theater** 🎭:\n• Uitgevonden door Grieken!\n• **Tragedies** + **komedies**.\n• Open-air theaters in steen.\n• Acteurs met **maskers**.\n• **Sophocles, Aeschylos, Euripides** = tragedie-schrijvers.\n• **Aristophanes** = komedies.\n\n**Architectuur** 🏛️:\n• **Parthenon** in Athene *(beroemde marmeren tempel)*.\n• Pilaren *(Dorische, Ionische, Korinthische)*.\n• Beeldhouwwerk *(perfecte vorm)*.\n• Standaard voor Europese architectuur tot vandaag.\n\n**Alexander de Grote** *(356-323 v.Chr.)*:\n• Zoon koning Macedonië.\n• Leerling van Aristoteles.\n• Op 20 koning.\n• Veroverde **Perzië, Egypte, deel India** in 10 jaar.\n• Grootste rijk tot dan.\n• Stierf op 32 *(koorts)*.\n• Verspreidde Griekse cultuur *(Hellenisme)*.\n• Stichtte **Alexandrië** *(Egypte)* — beroemde bibliotheek.\n\n**Einde Oude Griekenland**:\n• Romeinen veroverden Griekenland *(146 v.Chr.)*.\n• Maar Griekse cultuur **bleef** — Romeinen kopieerden veel.\n\n**Toets-feitje**:\nVeel **moderne woorden** zijn Grieks!\n• Democratie = volk + macht.\n• Filosofie = liefhebber van wijsheid.\n• Olympische = van Olympia.\n• Telefoon = ver + geluid.\n• Astronaut = ster + zeeman.\n• Logica, geografie, biologie, fysica, geometrie — allemaal Grieks!",
    checks: [
      {
        q: "In welke stad ontstond de **democratie**?",
        options: ["Athene", "Sparta", "Rome", "Korinthe"],
        answer: 0,
        wrongHints: [null, "In Sparta hadden twee koningen en een raad van oude mannen de macht.", "Rome werd een republiek met een senaat. In welke stad mochten álle burgers meepraten?", "Korinthe was een Griekse handelsstad, maar de democratie begon daar niet."],
      },
      {
        q: "Wie was **leraar** van Alexander de Grote?",
        options: ["Aristoteles", "Socrates", "Plato", "Pythagoras"],
        answer: 0,
        wrongHints: [null, "Socrates leefde eerder; hij was de leraar van Plato.", "Plato gaf les op zijn eigen school in Athene, maar Alexander kreeg les van iemand anders.", "Pythagoras was een wiskundige die veel eerder leefde."],
      },
      {
        q: "Wie veroverde **Perzië, Egypte en een deel van India**?",
        options: ["Alexander de Grote", "Julius Caesar", "Ramses II", "Marcus Aurelius"],
        answer: 0,
        wrongHints: [null, "Caesar veroverde Gallië, een stuk van het huidige Frankrijk. Wie trok veel verder naar het oosten?", "Ramses II was zelf een farao van Egypte; hij hoefde Egypte niet te veroveren.", "Marcus Aurelius was een Romeinse keizer en filosoof, eeuwen later. Het Romeinse Rijk kwam nooit tot India."],
      },
      {
        q: "Wat is de **Eed van Hippocrates**?",
        options: ["Belofte van artsen", "Belofte van soldaten", "Belofte van politici", "Belofte van sporters"],
        answer: 0,
        wrongHints: [null, "Hippocrates was geen legeraanvoerder — waar stond hij om bekend?", "Hippocrates was geen politicus — denk aan zijn vak.", "Hippocrates was geen atleet — welk vak hoort bij hem?"],
      },
    ],
  },
  {
    title: "Romeinen — Imperium + invloed",
    explanation:
      "**Romeinse Rijk** *(~753 v.Chr. - 476 n.Chr., 1200 jaar)*.\nGrootste rijk in geschiedenis Europa.\n\n**Beginnen**:\n• Legende: **Romulus + Remus** *(tweelingbroers gevoed door wolf)* stichten Rome 753 v.Chr.\n• Eerst **koningen**, daarna **Republiek** *(509 v.Chr.)*, daarna **Keizerrijk** *(27 v.Chr.)*.\n\n**Belangrijke gebeurtenissen**:\n\n**Republiek** *(509-27 v.Chr.)*:\n• **Senaat** *(adellijke regering)*.\n• Volk koos consuls *(jaarlijks)*.\n• Geen koning meer — de laatste (Etruskische) koning was verjaagd.\n\n**Julius Caesar** *(100-44 v.Chr.)*:\n• Beroemd generaal + politicus.\n• Veroverde **Gallië** *(Frankrijk)* + invasies in Brittannië.\n• **'Veni, vidi, vici'** *(Ik kwam, ik zag, ik overwon)* — beroemde uitspraak.\n• Stak Rubicon-rivier over → burgeroorlog.\n• **Vermoord** in **Senaat 15 maart 44 v.Chr.** *(Iden van maart, door senatoren)*.\n• 'Et tu, Brute?' *(Ook jij, Brutus?)* — Brutus was zijn vriend.\n• Maand **juli** naar hem genoemd!\n\n**Keizerrijk** *(27 v.Chr. - 476 n.Chr.)*:\n• Caesars achterneef en adoptiezoon **Octavianus** werd eerste keizer.\n• Naam: **Augustus** *('verhevene')*.\n• Maand **augustus** naar hem!\n• Pax Romana *(Romeinse vrede)* — 200 jaar relatieve rust.\n\n**Beroemde keizers**:\n• **Augustus**: eerste.\n• **Tiberius**: tweede.\n• **Caligula**: gek + wreed.\n• **Nero**: volgens een (onbetrouwbaar) verhaal speelde hij lier terwijl Rome brandde *(64 n.Chr.)*. Vervolgde christenen.\n• **Marcus Aurelius**: 'goede keizer', filosoof.\n• **Constantijn**: bekeerde zich tot het christendom *(312)*.\n\n**Rome veroverde**:\n• Op piek: heel Middellandse Zee-gebied.\n• Spanje, Frankrijk, Engeland, Duitsland-deel, Noord-Afrika, Egypte, Midden-Oosten, Griekenland, Balkan.\n• **70 miljoen** inwoners *(20% van toenmalige wereldbevolking)*.\n\n**Bouwwerken** 🏛️:\n• **Colosseum** *(Rome, 70-80 n.Chr.)*: 50.000 toeschouwers. Gladiator-gevechten + dier-gevechten.\n• **Pantheon** *(Rome)*: tempel met enorme koepel.\n• **Forum**: centrum van politiek.\n• **Wegen**: 80.000 km, sommige nog gebruikt.\n• **Aquaducten**: water vervoeren.\n• **Thermen** *(badhuizen)*: tot 3000 mensen.\n• **Hadrianus' Muur** *(Engeland)*: 117 km lange muur.\n\n**Romeinen in Nederland** 🇳🇱:\n• ~50 v.Chr. - 400 n.Chr.\n• Grens **Limes** = langs Rijn.\n• Veroverden tot Rijn — niet verder *(ten noorden ervan woonden o.a. de Friezen)*.\n• Steden: **Nijmegen** *(Noviomagus)*, **Utrecht** *(Trajectum)*, **Maastricht**.\n• Bataven onder leiding **Iulius Civilis** opstand *(69 n.Chr.)*.\n• Verleden zichtbaar: archeologie + Latijnse woorden in NL.\n\n**Cultuur + erfenis**:\n\n**Taal**: **Latijn** — basis voor Frans, Spaans, Italiaans, Portugees, Roemeens.\nVeel NL/Engelse woorden komen uit Latijn *(via Frans)*.\n\n**Recht**: **Romeins recht** = basis voor modern recht.\n• 'Ius civile' *(burgerrecht)*.\n• 'Pacta sunt servanda' *(afspraken moeten worden nagekomen)*.\n\n**Schrift**: **Latijns alfabet** — wij gebruiken het!\nA-B-C-D-...-Z = Romeins.\n\n**Christendom**:\n• Begon als kleine sekte.\n• Vervolgd door Nero + andere keizers.\n• **Constantijn** maakt **legaal** *(313)*.\n• **Theodosius** maakt staat-religie *(380)*.\n• Daarna verspreidde het zich overal.\n\n**Einde West-Romeinse Rijk** *(476 n.Chr.)*:\n• Germaanse stammen *(Visigoten, Vandalen; ook de Hunnen)* vielen binnen.\n• Laatste keizer afgezet door Odoaker.\n• Begin Middeleeuwen.\n\n**Oost-Romeinse Rijk** = **Byzantijnse Rijk** *(330-1453)*:\n• Hoofdstad **Constantinopel** *(nu Istanbul, Turkije)*.\n• Bleef nog 1000 jaar bestaan na West.\n• Eindigde toen de Ottomanen het veroverden in 1453.\n\n**Toets-feitje**:\nDe **Romeinen telden in letters**! Het cijfer-systeem dat we nu gebruiken *(0-9)* komt uit **India** *(via Arabieren)* en kwam pas rond 1200 in Europa. Romeinse cijfers: I, V, X, L, C, D, M *(1, 5, 10, 50, 100, 500, 1000)*. Probeer 1989 in Romeins: **MCMLXXXIX**!",
    checks: [
      {
        q: "Wie werden volgens de legende als baby door een **wolf** gevoed, en stichtten later in 753 v.Chr. een stad?",
        options: ["Romulus en Remus", "Zeus en Hera", "Achilles en Odysseus", "Caesar en Augustus"],
        answer: 0,
        wrongHints: [null, "Zeus en Hera zijn Griekse goden uit de mythologie, geen stichters van een stad.", "Dit zijn Griekse helden uit de verhalen over de Trojaanse Oorlog.", "Caesar en Augustus leefden pas zo'n 650 jaar na 753 v.Chr."],
      },
      {
        q: "Wie zei **'Veni, vidi, vici'**?",
        options: ["Julius Caesar", "Keizer Augustus", "Alexander de Grote", "Marcus Antonius"],
        answer: 0,
        wrongHints: [null, "Augustus leefde in dezelfde tijd, maar deze woorden zijn niet van hem.", "Alexander de Grote sprak Grieks — deze uitspraak is Latijn.", "Marcus Antonius was een Romeinse generaal en de geliefde van Cleopatra, maar deze beroemde woorden zijn niet van hem."],
      },
      {
        q: "Welke rivier vormde de **Romeinse grens** in Nederland?",
        options: ["Rijn", "Maas", "IJssel", "Schelde"],
        answer: 0,
        wrongHints: [null, "De Maas stroomt door Limburg. Maastricht was een Romeinse stad, maar de grens lag noordelijker.", "De IJssel ligt in het oosten van ons land. De grens liep langs een grotere rivier.", "De Schelde stroomt door België en Zeeland, ver ten zuiden van de grens."],
      },
      {
        q: "Wanneer viel het **West-Romeinse Rijk**?",
        options: ["476 n.Chr.", "27 v.Chr.", "1453 n.Chr.", "753 v.Chr."],
        answer: 0,
        wrongHints: [null, "In dat jaar begon juist het keizerrijk.", "Toen viel het Oost-Romeinse Rijk, met Constantinopel. Het westen viel eerder.", "In dat jaar werd Rome volgens de legende juist gesticht."],
      },
    ],
  },
  {
    title: "Eind-toets — Oudheid mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Welke rivier trad elk jaar buiten haar oevers en liet vruchtbaar slik achter op de akkers van **Egypte**?", options: ["Nijl", "Tigris", "Indus", "Jordaan"], answer: 0, wrongHints: [null, "De Tigris trad ook buiten haar oevers, maar dan in Mesopotamië (nu Irak).", "De Indus stroomt door Pakistan, ver van Egypte.", "De Jordaan is een kleine rivier in Israël en Jordanië, ten oosten van Egypte."] },
      { q: "In welke stad mochten rond 508 v.Chr. alle mannelijke burgers in de **volksvergadering** meestemmen over wetten?", options: ["Athene", "Sparta", "Rome", "Thebe"], answer: 0, wrongHints: [null, "In Sparta hadden twee koningen en een raad van oude mannen de macht.", "Rome was toen net een republiek met een senaat. De macht lag bij rijke families, niet bij alle burgers.", "Thebe was een andere Griekse stadstaat. In welke stad werd deze manier van stemmen bedacht?"] },
      { q: "Welke Griekse denker schreef over **logica, biologie en politiek**?", options: ["Aristoteles", "Archimedes", "Hippocrates", "Socrates"], answer: 0, wrongHints: [null, "Archimedes is bekend van de hefboom en van dingen die drijven in water.", "Hippocrates was arts; hij schreef over ziektes en genezen.", "Socrates schreef zelf niets op; hij stelde vooral vragen."] },
      { q: "Welke Romein stak met zijn leger de rivier de **Rubicon** over, waarna een burgeroorlog begon?", options: ["Caesar", "Augustus", "Nero", "Brutus"], answer: 0, wrongHints: [null, "Augustus werd later de eerste keizer. Deze oversteek was van iemand vóór hem.", "Nero leefde ruim honderd jaar later en is bekend van de brand in Rome.", "Brutus is bekend van een moord in de Senaat, niet van deze oversteek."] },
      { q: "Welke **piramide** was 3800 jaar lang het hoogste gebouw ter wereld?", options: ["Cheops", "Chefren", "Mykerinos", "Djoser"], answer: 0, wrongHints: [null, "De piramide van Chefren lijkt hoger omdat hij op hogere grond staat, maar hij is iets kleiner.", "Mykerinos is de kleinste van de drie grote piramides bij Gizeh.", "De piramide van Djoser is een oudere trappenpiramide, maar veel lager."] },
      { q: "In welk jaar zette de Germaanse aanvoerder **Odoaker** de laatste keizer van het West-Romeinse Rijk af?", options: ["476 n.Chr.", "509 v.Chr.", "1453 n.Chr.", "312 n.Chr."], answer: 0, wrongHints: [null, "Toen begon juist de Romeinse Republiek.", "Toen viel Constantinopel, de hoofdstad van het Oost-Romeinse Rijk. Het westen viel eerder.", "In dat jaar bekeerde keizer Constantijn zich tot het christendom; het rijk bestond toen nog."] },
      {
        q: "Wat waren **hiërogliefen**?",
        options: ["Schrift met plaatjes", "Graven voor farao's", "Rollen van papyrus", "Egyptische goden"],
        answer: 0,
        wrongHints: [null, "Graven voor farao's zijn bijvoorbeeld piramides. Wat stond er op de muren in die graven?", "Papyrus is het 'papier' van Egypte. Wat schreven ze erop?", "Ra en Osiris zijn goden. Wat stond er op de Steen van Rosetta?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat zijn hiërogliefen?", tekst: "**Hiërogliefen** waren het **schrift van het oude Egypte**. Gebruikt **~3000 v.Chr. tot ~400 n.Chr.** (~3.500 jaar lang).\n\nElke 'letter' was eigenlijk een **plaatje** (vogel, oog, slang, hand). Sommige stonden voor:\n• **Klank** (zoals letters)\n• **Hele woord** (zoals Chinese tekens)\n• **Idee** (zoals emoji's)\n\nGevolg: ~700 verschillende symbolen. Alleen **priesters + schrijvers** konden lezen + schrijven (~1% van bevolking)." },
            { titel: "Hoe konden we ze ontcijferen?", tekst: "Lange tijd kon **niemand meer hiërogliefen lezen** (was vergeten). Tot **1799**: Franse soldaten van Napoleon vonden in Egypte de **Steen van Rosetta**.\n\nDe Steen had dezelfde tekst in **3 schriften**:\n• Hiërogliefen (Egyptisch)\n• Demotisch (laat-Egyptisch)\n• **Grieks** (deze konden we wel lezen!)\n\nFransman **Champollion** ontcijferde in **1822** de code door Grieks naast hiërogliefen te leggen. Daardoor weten we nu hoe Egyptisch werkte." },
            { titel: "Toets-feit: waar zie je ze?", tekst: "Hiërogliefen zijn te zien op:\n• **Graven** in het Dal der Koningen\n• **Obelisken**\n• **Karnak-tempel** in Luxor\n• **Toetanchamons graf** (ontdekt 1922 door Carter)\n• **Steen van Rosetta** (nu in British Museum, Londen)\n\nEen toetsvraag kan zijn: **'Wat is het oudste schrift?'** Antwoord: meestal spijkerschrift (Mesopotamië, ~3200 v.Chr.); de hiërogliefen kwamen kort daarna (~3100 v.Chr.)." },
          ],
          woorden: [
            { woord: "hiërogliefen", uitleg: "Egyptisch plaatjes-schrift. Werd geschreven op steen, papyrus, tempel-muren." },
            { woord: "papyrus", uitleg: "Egyptisch 'papier' — gemaakt van papyrus-plant uit Nijl." },
            { woord: "Champollion", uitleg: "Frans wetenschapper die in 1822 hiërogliefen ontcijferde." },
            { woord: "Steen van Rosetta", uitleg: "Steen uit 196 v.Chr. met zelfde tekst in 3 schriften. Sleutel tot Egyptische taal." },
          ],
          theorie: "Belangrijke schrift-systemen oudheid (toetsstof):\n• **Hiërogliefen** (Egypte, 3000 v.Chr.)\n• **Spijkerschrift** (Mesopotamië, ~3200 v.Chr.) — wigvormige tekens in klei\n• **Grieks alfabet** (Griekenland, ~800 v.Chr.) — basis voor Latijn + ons alfabet\n• **Romeinse cijfers** (I, V, X, L, C, D, M) — nog gebruikt voor klok + pausen-namen\n• **Chinees schrift** (~1200 v.Chr., nog steeds gebruikt!)",
          voorbeelden: [
            { type: "feit", tekst: "Onze letter 'A' komt via Grieks 'alpha' uit Fenicisch 'aleph' = os. De vorm leek vroeger op een omgekeerde ossenkop." },
            { type: "feit", tekst: "Cleopatra (laatste farao, gestorven 30 v.Chr.) sprak Grieks als hoofdtaal, niet Egyptisch — koningshuis was Grieks (Ptolemaeën-dynastie)." },
          ],
          basiskennis: [{ onderwerp: "Niet zomaar plaatjes", uitleg: "Hiërogliefen zijn echt schrift, niet 'lekker tekenen'. Elk symbool had vaste betekenis + uitspraak." }],
          niveaus: { basis: "Egyptisch plaatjes-schrift.", simpeler: "Hiërogliefen waren het schrift van oude Egyptenaren. Plaatjes die letters/klanken/woorden voorstelden. ~3000 v.Chr. tot 400 n.Chr.", nogSimpeler: "Schrift Egypte" },
        },
      },
      {
        q: "Waar en wanneer werden de **allereerste** Olympische Spelen gehouden?",
        options: ["Griekenland, rond 776 v.Chr.", "Frankrijk, in 1900 n.Chr.", "Italië, rond 100 n.Chr.", "Egypte, rond 2500 v.Chr."],
        answer: 0,
        wrongHints: [null, "In 1900 waren er wel Spelen in Parijs, maar de allereerste waren veel ouder.", "Bij de Romeinen in Italië waren gladiatorgevechten populair, maar de Spelen begonnen eerder en ergens anders.", "Rond 2500 v.Chr. bouwden de Egyptenaren piramides; Olympische Spelen hielden ze niet."],
        uitlegPad: {
          stappen: [
            { titel: "Antieke Olympische Spelen", tekst: "De **eerste Olympische Spelen** waren in **776 v.Chr.** in de Griekse stad **Olympia** (vandaar de naam). **Elke 4 jaar** kwamen mannen samen om sport te beoefenen ter ere van de **god Zeus** (oppergod Grieken).\n\n**Sporten waren**:\n• Hardlopen\n• Discus + speerwerpen\n• Worstelen\n• Boksen\n• Wagenrennen\n• Pentatlon (5 sporten combi)" },
            { titel: "Regels in oude OS", tekst: "Bijzondere regels:\n• **Alleen mannen** mochten meedoen + kijken\n• **Vrouwen** verboden — eigen Herafestival\n• Atleten waren **naakt** (Grieks: gymnos → 'gymnastiek')\n• Tijdens spelen: **wapenstilstand** in alle Griekse stadstaten (Olympische Truce)\n• Geen geldprijzen — winnaar kreeg **olijfkrans** + eeuwige roem\n• **1200 jaar lang** gehouden — tot 393 n.Chr. (Christelijke keizer Theodosius verbood)" },
            { titel: "Toets-feit: moderne OS", tekst: "**Moderne Olympische Spelen** zijn herstart in **1896** in **Athene** (Griekenland — als eerbetoon aan oorsprong) door Fransman **Pierre de Coubertin**.\n\nVerschillen met oude OS:\n• **Vrouwen mogen meedoen** sinds 1900 (Parijs)\n• **Internationale deelname** (niet alleen Grieken)\n• **Winter + zomer OS** afwisselend\n• **Sport-medailles** (goud/zilver/brons) ipv olijfkrans\n• Locatie wisselt elke 4 jaar (2024: Parijs, 2028: LA, 2032: Brisbane)\n\nNL was succesvol op 2024 Parijs: ~30+ medailles." },
          ],
          woorden: [
            { woord: "Olympia", uitleg: "Stad in Griekenland — religieus + sport-centrum oude OS. Bestaat nog (toeristische ruïnes)." },
            { woord: "Zeus", uitleg: "Oppergod in Griekse mythologie. Heerste op berg Olympus." },
            { woord: "gymnasium", uitleg: "Grieks woord voor 'oefenplaats' — wij gebruiken het nu voor sport-zaal + middelbare school (VWO)." },
            { woord: "Pierre de Coubertin", uitleg: "Franse baron die in 1896 moderne OS herstartte. Richtte in 1894 het IOC (Internationaal Olympisch Comité) op." },
          ],
          theorie: "Oude Olympische Spelen-feiten:\n• 776 v.Chr. — eerste OS (officieel)\n• 393 n.Chr. — verboden door Christelijke keizer\n• 1896 — moderne herstart Athene\n• Symbolen: 5 ringen = 5 continenten, vlam komt uit Olympia overgedragen\n• 'Citius, Altius, Fortius' = Latijns motto: 'Sneller, Hoger, Sterker'\n\nVerband met andere toetsstof: Griekse cultuur → Romeinen → Middeleeuwen → Renaissance → wij.",
          voorbeelden: [
            { type: "feit", tekst: "Marathon (42 km) komt van Griekse soldaat die in 490 v.Chr. van veldslag Marathon naar Athene rende met overwinningsbericht — en daar volgens de legende dood neerviel." },
            { type: "feit", tekst: "Op NL OS-2024 Parijs: Femke Bol won goud op 4×400m mixed estafette. Spirit van Olympia leeft door." },
          ],
          basiskennis: [{ onderwerp: "Olympia ≠ Olympus", uitleg: "**Olympia** = stad in Griekenland (waar spelen waren). **Berg Olympus** = waar Zeus woonde volgens mythologie. Andere plek." }],
          niveaus: { basis: "Griekenland, 776 v.Chr.", simpeler: "De Olympische Spelen ontstonden in 776 v.Chr. in de Griekse stad Olympia. Werden 1200 jaar lang elke 4 jaar gehouden ter ere van god Zeus.", nogSimpeler: "Griekenland oud" },
        },
      },
      {
        q: "Wat is **mythologie**?",
        options: ["Verhalen over goden en helden", "Verslagen van echte veldslagen", "Regels voor de Olympische Spelen", "Lijsten met Griekse koningen"],
        answer: 0,
        wrongHints: [null, "Mythen gaan niet over echte, bewezen gebeurtenissen. Waarover dan wel?", "Sport komt soms voor in mythen, maar mythologie zelf is iets anders.", "Een lijst met namen is nog geen verhaal. Wat vertelt een mythe?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is mythologie?", tekst: "**Mythologie** = **verhalen over goden + bovennatuurlijke wezens** die mensen vroeger geloofden. Bedoeld om **uit te leggen**:\n• Hoe de wereld ontstond\n• Waarom donder + bliksem\n• Waarom seizoenen\n• Waarom mensen sterven\n• Lessen voor goed leven\n\nVoordat wetenschap dit ALLES kon uitleggen, gebruikten mensen mythologie." },
            { titel: "Bekende mythologieën", tekst: "**Griekse mythologie** (meest bekend in NL-onderwijs):\n• **Zeus** — oppergod, donder + bliksem\n• **Hera** — vrouw Zeus, beschermt huwelijk\n• **Poseidon** — god zee\n• **Hades** — god onderwereld\n• **Athena** — wijsheid + oorlog\n• **Aphrodite** — liefde\n• **Apollo** — zon + muziek\n• **Hercules** — sterkste held (12 werken)\n\n**Romeinse mythologie** = bijna identiek, andere namen:\n• Zeus → Jupiter\n• Hera → Juno\n• Athena → Minerva\n• etc.\n\nAndere bekende: **Egyptisch** (Osiris, Ra, Anubis), **Noors** (Odin, Thor, Loki — bekend via Marvel-films)." },
            { titel: "Toets-feit: mythologie in onze taal + cultuur", tekst: "Mythologie zit OVERAL in onze cultuur:\n• **Maanden**: maart (Mars, god oorlog), juli (Julius Caesar — voortaan een god)\n• **Planeten**: Mars, Venus, Jupiter, Saturnus — allemaal Romeinse goden\n• **Merken**: Nike (Griekse godin overwinning), Amazon (Amazones-strijdsters), Hermes (boodschapper-god)\n• **Films**: Hercules (Disney), Marvel Thor-films (Noors), Percy Jackson (Grieks)\n• **Uitdrukkingen**: 'Achilles-hiel' (zwakke plek), 'Trojaans paard' (verraderlijke gift), 'Pandora's doos' (rampen losmaken)\n• **Sterrenbeelden**: 12 sterrenbeelden van de dierenriem — veel namen komen uit Griekse mythen" },
          ],
          woorden: [
            { woord: "mythologie", uitleg: "Verhalen-collectie over goden + helden van een cultuur. Bedoeld om wereld te verklaren." },
            { woord: "mythe", uitleg: "Enkel verhaal binnen een mythologie. Bv. mythe van Hercules." },
            { woord: "god", uitleg: "Bovennatuurlijk wezen met macht over natuur, leven, lot. Vaak meerdere in oude religies (polytheïsme)." },
            { woord: "polytheïsme", uitleg: "Geloof in meerdere goden. Vroeger normaal in Griekenland, Egypte, Noord-Europa." },
          ],
          theorie: "Mythologie vs religie vs wetenschap:\n• **Mythologie** = oude verklaringen, vaak meerdere goden, niet meer geloofd (door velen)\n• **Religie** = georganiseerd geloof — nu vooral monotheïstisch (1 god): christendom, islam, jodendom\n• **Wetenschap** = bewezen verklaringen via experiment\n\nOude Grieken hadden vooral mythologie. Romeinen idem. Daarna kwam christendom (1 god). Tegelijkertijd ontstond wetenschap.",
          voorbeelden: [
            { type: "feit", tekst: "Het Trojaanse Paard-verhaal (Griekse oorlog tegen Troje) was lang gezien als mythe. Maar archeologen vonden Troje WEL terug in 1870 — de stad bestond echt. Of de oorlog en het paard echt zo gebeurden, weten we niet." },
            { type: "feit", tekst: "Hercules deed '12 werken' (zware opdrachten) — een ervan: Nemeïsche leeuw doden + huid dragen. Symbool van moed." },
          ],
          basiskennis: [{ onderwerp: "Niet zelfde als sprookje", uitleg: "Mythen werden ECHT geloofd door oude volken. Sprookjes werden altijd als fictie verteld. Verschil." }],
          niveaus: { basis: "Verhalen over goden om wereld uit te leggen.", simpeler: "Mythologie = oude verhalen over goden + helden die uitleggen hoe natuur + wereld werkt. Bv. Grieks: Zeus voor bliksem. Niet wetenschappelijk maar wel cultureel waardevol.", nogSimpeler: "Verhalen over goden" },
        },
      },
      { q: "Over welke **rivier** vervoerden de Egyptenaren met boten de stenen voor hun piramides?", options: ["De Nijl","De Eufraat","De Jordaan","De Ganges"], answer: 0, wrongHints: [null, "De Eufraat stroomt door Syrië en Irak, niet door Egypte.", "De Jordaan stroomt langs Israël en Jordanië, niet door Egypte.", "De Ganges is een heilige rivier in India, ver van Egypte."] },
      { q: "In welke stad staat het **Parthenon**, de beroemde marmeren tempel van de Grieken?", options: ["Athene","Mycene","Rome","Alexandrië"], answer: 0, wrongHints: [null, "Mycene was een oudere Griekse stad met machtige koningen. Deze tempel staat in een andere stad.", "In Rome staat het Pantheon. Die naam lijkt erop, maar het is een ander gebouw.", "Alexandrië in Egypte werd pas gesticht toen deze tempel al lang klaar was."] },
      { q: "Welk **Romeins bouwwerk** was het grote arena-gebouw in Rome?", options: ["Colosseum","Pantheon","Forum","Parthenon"], answer: 0, wrongHints: [null, "Het Pantheon is een Romeinse tempel met een enorme koepel, geen arena.", "Het Forum was het plein voor politiek en handel.", "Het Parthenon is een Griekse tempel, geen Romeinse arena."] },
      { q: "Met welk jaar laat men de **middeleeuwen** in West-Europa meestal beginnen?", options: ["476 n.Chr.","44 v.Chr.","1066 n.Chr.","1500 n.Chr."], answer: 0, wrongHints: [null, "In dat jaar werd Julius Caesar vermoord; het Romeinse Rijk ging daarna nog eeuwen door.", "Dat is het jaar van de Slag bij Hastings; toen waren de middeleeuwen al lang bezig.", "Rond 1500 eindigden de middeleeuwen juist."] },
      { q: "Van welke **farao** werd in 1922 het graf gevonden, vol goud en schatten?", options: ["Toetanchamon","Cleopatra","Ramses II","Cheops"], answer: 0, wrongHints: [null, "Cleopatra was de laatste farao; haar graf is nooit gevonden.", "Ramses II was een beroemde farao, maar zijn graf was al veel eerder bekend.", "Cheops is bekend van de Grote Piramide, maar die was al lang leeggeroofd."] },
      { q: "Wat is een **piramide**?", options: ["Grafmonument voor een farao","Tempel voor de zonnegod Ra","Paleis waar de farao woonde","Schuur voor graan uit de Nijl"], answer: 0, wrongHints: [null, "Ra werd vereerd in tempels. Waarvoor liet een farao een piramide bouwen?", "Een farao woonde tijdens zijn leven in een paleis, niet in een piramide.", "Graan bewaarden ze in schuren bij de akkers, niet in een piramide."] },
      { q: "Bij welk volk hoorden de **hiërogliefen**?", options: ["Bij de Egyptenaren","Bij de Grieken","Bij de Romeinen","Bij de Perzen"], answer: 0, wrongHints: [null, "De Grieken schreven met letters zoals alfa en bèta, niet met plaatjes.", "De Romeinen schreven met het Latijnse alfabet en cijfers als I, V en X.", "In het oosten schreven ze vooral spijkerschrift, met wigvormige tekens in klei."] },
      { q: "Wie ontcijferde de tekst op de **Steen van Rosetta**?", options: ["Champollion","Napoleon","Carter","Erasmus"], answer: 0, wrongHints: [null, "De soldaten van Napoleon vonden de steen in 1799, maar wie kon hem lezen?", "Carter vond in 1922 het graf van Toetanchamon.", "Erasmus was een geleerde uit Rotterdam, maar hij leefde lang vóór 1799."] },
      { q: "Wie was **Julius Caesar**?", options: ["Romeinse veldheer en dictator", "Egyptische farao aan de Nijl", "Griekse filosoof en wiskundige", "Macedonische koning en veroveraar"], answer: 0, wrongHints: [null, "Hij had wel iets met Cleopatra, maar was zelf geen Egyptenaar.", "Caesar schreef wel boeken, maar daar werd hij niet beroemd om.", "Dat was Alexander de Grote, ruim 200 jaar eerder. Caesar kwam niet uit Macedonië."] },
      { q: "Waarvan was **Augustus** de eerste?", options: ["Romeinse keizer","Romeinse consul","Romeinse senator","Romeinse koning"], answer: 0, wrongHints: [null, "Consuls had Rome al vanaf 509 v.Chr., eeuwen vóór Augustus.", "De senaat bestond al sinds de tijd van de koningen, lang vóór Augustus.", "De eerste koning van Rome was volgens de legende Romulus — Augustus kwam veel later."] },
      { q: "Wat was **Socrates**?", options: ["Griekse filosoof","Griekse veldheer","Griekse koning","Griekse arts"], answer: 0, wrongHints: [null, "Socrates vocht wel mee als soldaat, maar daar is hij niet beroemd om.", "Athene had in de tijd van Socrates geen koning meer.", "De bekende Griekse arts uit die tijd was Hippocrates."] },
      { q: "Wie was een leerling van **Plato**?", options: ["Aristoteles","Socrates","Pythagoras","Hippocrates"], answer: 0, wrongHints: [null, "Socrates was juist de leraar van Plato, niet zijn leerling.", "Pythagoras leefde al vóór Plato — kan hij dan zijn leerling zijn?", "Hippocrates was een arts die in dezelfde tijd leefde als Socrates."] },
      { q: "Waar kwam **Alexander de Grote** vandaan?", options: ["Macedonië","Egypte","Italië","Perzië"], answer: 0, wrongHints: [null, "Egypte veroverde hij juist; daar stichtte hij Alexandrië.", "In Italië lag Rome, dat pas later machtig werd. Alexander was geen Romein.", "Perzië veroverde hij juist — waar kwam hij zelf vandaan?"] },
      { q: "Op welke plek en in welk jaar hielden de Grieken voor het eerst hun grote **sportfeest ter ere van Zeus**?", options: ["Olympia, 776 v.Chr.","Athene, 600 v.Chr.","Sparta, 900 v.Chr.","Delphi, 500 v.Chr."], answer: 0, wrongHints: [null, "Athene was een belangrijke stad, maar het allereerste sportfeest voor Zeus werd ergens anders gehouden.", "Sparta was een machtige stadstaat, maar dit sportfeest werd er niet gehouden.", "In Delphi stond een beroemde tempel voor Apollo. Het sportfeest voor Zeus was ergens anders."] },
      { q: "Welke grens van het **Romeinse Rijk** liep door Nederland?", options: ["De Limes langs de Rijn","De Limes langs de Maas","De Limes langs de IJssel","De Muur van Hadrianus"], answer: 0, wrongHints: [null, "De Maas ligt zuidelijker; Maastricht lag midden in het Romeinse gebied, niet aan de grens.", "De IJssel loopt van zuid naar noord. Liep de grens zo, of van oost naar west?", "Die muur ligt in Engeland, niet in Nederland."] },
      { q: "Wat geloofden de Romeinen in de tijd van **Julius Caesar**?", options: ["Veel verschillende goden","Eén god voor iedereen","Geen enkele god","Goden met dierenkoppen"], answer: 0, wrongHints: [null, "Het geloof in één god werd pas eeuwen na Caesar groot in Rome.", "De Romeinen bouwden juist veel tempels. Voor wie waren die?", "Goden met dierenkoppen kende vooral Egypte."] },
      { q: "Wat is een **gladiator**?", options: ["Romeinse arena-vechter","Romeinse tempelpriester","Romeinse senator","Romeinse grenssoldaat"], answer: 0, wrongHints: [null, "Een priester zorgde voor de tempels. 'Gladius' is Latijn voor zwaard: wat deed een gladiator dan?", "Een senator besliste mee over de wetten. Een gladiator had heel ander werk.", "Een grenssoldaat diende in het leger aan de Limes. Een gladiator hoorde niet bij het leger."] },
      { q: "Welke taal spraken de Romeinen?", options: ["Latijn","Grieks","Egyptisch","Italiaans"], answer: 0, wrongHints: [null, "Grieks spraken de Grieken; veel rijke Romeinen leerden het wel als tweede taal.", "Egyptisch spraken ze aan de Nijl, niet in Rome.", "Italiaans bestond toen nog niet; het is later uit de taal van de Romeinen ontstaan."] },
      { q: "Welke Griekse stad had het **beroemdste leger**?", options: ["Sparta","Athene","Korinthe","Milete"], answer: 0, wrongHints: [null, "Athene was vooral bekend om democratie, filosofie en kunst.", "Korinthe was vooral een stad van handel.", "Milete was een handelsstad aan de kust van het huidige Turkije, bekend om zijn denkers."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const oudheidEgyptiansGriekenPo = {
  id: "oudheid-egyptenaren-grieken-romeinen-po",
  title: "Oudheid — Egyptenaren + Grieken + Romeinen (groep 6-8, Doorstroomtoets-stof)",
  emoji: "🏺",
  level: "groep6-8",
  subject: "geschiedenis",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — geschiedenis (Tijdvak 1-3)",
  prerequisites: [
    { id: "tijdvakken-nederland-po", title: "Tijdvakken NL", niveau: "1F" },
  ],
  intro:
    "Oudheid voor groep 6-8, Doorstroomtoets-stof — Egyptenaren (Nijl/farao's/Toetanchamon/piramides/mummies/hiëroglyfen + Rosetta-steen) + Grieken (Athene democratie 508 v.Chr./Socrates-Plato-Aristoteles/Olympische Spelen 776 v.Chr./Alexander de Grote) + Romeinen (Caesar/Augustus/Colosseum/Limes-Rijn-NL/Latijn) + 476 val West-Romeinse Rijk. ~15 min.",
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
