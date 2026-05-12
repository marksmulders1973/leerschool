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
