// Leerpad: Koude Oorlog + moderne geschiedenis 1945-nu - groep 7-8.
// Sluit op WO2 + tijdvakken. Cito Tijdvak 10. 1F. 4 stappen.

const stepEmojis = ["🧊", "🧱", "💻", "🏆"];

const chapters = [
  { letter: "A", title: "Koude Oorlog basis", emoji: "🧊", from: 0, to: 0 },
  { letter: "B", title: "Muur, Cuba, Vietnam", emoji: "🧱", from: 1, to: 1 },
  { letter: "C", title: "Val Muur + nu", emoji: "💻", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Koude Oorlog — wat was het?",
    explanation:
      "**Koude Oorlog** *(1945-1991, ~45 jaar)* = **spanning tussen VS (Verenigde Staten van Amerika) + Sovjet-Unie (USSR)** zonder echte vechtoorlog.\n\n**Waarom 'koud'?**\n• Geen directe oorlog tussen de 2 grootmachten.\n• Wel **kernwapen-wedloop, spionage, proxy-oorlogen** *(via andere landen)*.\n\n**Achtergrond**:\nNa **WO2** *(1945)* lag Europa in puin.\n2 supermachten over:\n• **VS** *(kapitalisme, democratie, Westen)*.\n• **USSR / Sovjet-Unie** *(communisme, dictatuur, Oosten)*.\n\nEerst **bondgenoten** tegen Hitler. Maar daarna **oneens** over toekomst Europa.\n\n**Ideologisch verschil**:\n\n**VS / kapitalisme**:\n• Markt-economie *(bedrijven privé)*.\n• Vrije verkiezingen, meerdere partijen.\n• Vrije pers + religie + meningsuiting.\n• Privé-eigendom.\n\n**USSR / communisme**:\n• **Plan-economie** *(staat beheert alles)*.\n• Eén partij *(Communistische Partij)*.\n• Gecontroleerde pers.\n• 'Werk + voedsel + zorg voor iedereen' *(theorie)*.\n• In praktijk: dictatuur + armoede.\n\n**'IJzeren Gordijn'** *(Winston Churchill, 1946)*:\n• Europa **gedeeld** in 2:\n  - **West-Europa**: vrij + kapitalistisch *(NL, Duitsland-West, Frankrijk, GB, Italië)*.\n  - **Oost-Europa**: communistisch + onder USSR-controle *(Polen, Duitsland-Oost, Hongarije, Roemenië, etc.)*.\n• Mensen konden niet vrij oversteken.\n\n**Belangrijke leiders**:\n\n**VS-presidenten Koude Oorlog**:\n• Truman *(1945-53)*: begin.\n• Eisenhower *(1953-61)*.\n• Kennedy *(1961-63)*: vermoord 1963.\n• Johnson, Nixon, Reagan *(1981-89, eindigde Koude Oorlog)*.\n\n**USSR-leiders**:\n• Stalin *(1924-53)*: enge dictator, miljoenen doden.\n• Chroesjtsjov *(1953-64)*.\n• Brezjnev *(1964-82)*.\n• Gorbatsjov *(1985-91)*: eindigde Koude Oorlog.\n\n**NAVO + Warschaupact**:\n\n**NAVO** *(Noord-Atlantische Verdragsorganisatie)*:\n• Opgericht **1949** door VS + bondgenoten.\n• Doel: gezamenlijke verdediging tegen USSR.\n• Motto: **'Aanval op één = aanval op allen'**.\n• Hoofdkwartier: Brussel.\n• Nu: 32 landen *(incl. NL)*.\n• Mark Rutte = secretaris-generaal sinds **oktober 2024**.\n\n**Warschaupact** *(1955-1991)*:\n• Communistische tegenhanger van NAVO.\n• USSR + Oost-Europese landen.\n• Bestond niet meer na val Sovjet-Unie.\n\n**Kernwapens** ☢️:\n• **Atoombom** uitgevonden door VS *(1945, gegooid op Hiroshima + Nagasaki, Japan)*.\n• USSR ontwikkelde ook *(1949)*.\n• Hoeveelheid groeide naar **70.000 wapens** *(piek 1986)*.\n• **MAD-doctrine** *(Mutually Assured Destruction)*: als één land schiet, gaan beide ten onder.\n• Daarom geen oorlog — te gevaarlijk.\n\n**Wapenwedloop**:\n• Steeds krachtigere bommen.\n• Raketten met intercontinentaal bereik.\n• Onderzeeërs met kernwapens.\n• Bommenwerpers altijd in lucht.\n\n**Spionage**:\n• **CIA** *(VS)* + **KGB** *(USSR)*.\n• Veel spionnen + tegenspionnen.\n• James Bond-films romantiseren deze tijd.\n\n**Toets-feitje**:\n**Ruimtevaart-wedloop** was deel van Koude Oorlog!\n• **Sputnik** *(USSR, 1957)*: eerste satelliet → VS geschrokken.\n• **Gagarin** *(USSR, 1961)*: eerste mens in ruimte.\n• Kennedy zei: 'We gaan naar maan voor 1970!'\n• **Apollo 11** *(VS, 1969)*: eerste maanlanding = VS won deze.",
    checks: [
      {
        q: "Wat was de **Koude Oorlog**?",
        options: ["Spanning tussen VS en USSR", "Echte oorlog tussen VS en USSR", "Oorlog in de winter", "Ruzie tussen VS en Engeland"],
        answer: 0,
        wrongHints: [null, "Er was wél geweld via andere landen (proxy), maar geen rechtstreeks gevecht.", "De naam slaat niet op weer of seizoen.", "Engeland was juist een bondgenoot van de VS."],
        uitlegPad: {
          stappen: [
            { titel: "Waarom 'koud'?", tekst: "Twee supermachten (VS + USSR) waren elkaars tegenstander, maar vochten nooit direct. Daarom 'koud' — geen schoten tussen ze." },
            { titel: "Wel spanning, wel wapens", tekst: "Wapenwedloop (kernwapens), spionage (CIA vs KGB), proxy-oorlogen (Vietnam, Korea, Afghanistan). Spannend genoeg om naar adem te happen." },
            { titel: "Hoe lang duurde het?", tekst: "Ongeveer **46 jaar**: vanaf einde Wereldoorlog 2 (1945) tot uiteenvallen van de Sovjet-Unie (1991)." },
          ],
          woorden: [
            { woord: "Koude Oorlog", uitleg: "Lange spanning VS vs USSR zonder directe oorlog." },
            { woord: "USSR / Sovjet-Unie", uitleg: "Communistische unie van Rusland en buurlanden (1922-1991)." },
            { woord: "supermacht", uitleg: "Land met enorm veel militaire + economische macht." },
          ],
          theorie: "De Koude Oorlog draaide om twee tegengestelde systemen: kapitalisme (VS) versus communisme (USSR). Beide kanten wilden hun systeem aan andere landen geven.",
          voorbeelden: [
            { type: "proxy", tekst: "Vietnam-oorlog: VS hielp Zuid-Vietnam, USSR hielp Noord-Vietnam. De grootmachten vochten via Vietnamezen, niet zelf." },
            { type: "wedloop", tekst: "In 1986 had de wereld ~70.000 kernwapens — meer dan genoeg om alles 100× te vernietigen. Mensen lazen elke dag de krant met angst." },
          ],
          basiskennis: [{ onderwerp: "Begin + einde", uitleg: "Start: 1945 na WO2. Einde: 1991 toen de Sovjet-Unie uit elkaar viel. Geen één-dag-moment maar een geleidelijk proces." }],
          niveaus: {
            basis: "Koude Oorlog = lange spanning VS vs USSR (1945-1991) zonder direct gevecht.",
            simpeler: "Twee landen die elkaars vijand waren maar nooit echt oorlog tegen elkaar voerden. Wel veel wapens en angst.",
            nogSimpeler: "VS en Sovjet-Unie waren boos op elkaar, 46 jaar lang. Niet echt vechten.",
          },
        },
      },
      {
        q: "Wat is de **NAVO**?",
        options: ["Westers militair bondgenootschap","Oosters militair bondgenootschap","Wereldwijde organisatie voor vrede","Europese samenwerking voor handel"],
        answer: 0,
        wrongHints: [null,"Dat was het Warschaupact — die hoorde bij USSR.","Dat lijkt op de VN. Doen bij de NAVO alle landen van de wereld mee?","Dat lijkt op de EU. Ging de NAVO over handel, of over iets anders?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent NAVO?", tekst: "**NAVO** = Noord-Atlantische Verdragsorganisatie (Engels: NATO). Een militair bondgenootschap van westerse landen rond de Atlantische Oceaan." },
            { titel: "Opgericht in 1949 — waarom?", tekst: "Na WO2 was de Sovjet-Unie sterk in Oost-Europa. Westerse landen waren bang: 'wat als de USSR aanvalt?'. NAVO werd opgericht zodat ze elkaar zouden helpen verdedigen." },
            { titel: "Belangrijkste regel", tekst: "**Artikel 5**: een aanval op één NAVO-land = aanval op allemaal. Alle landen moeten helpen verdedigen. Sterk afschrikkingsmiddel." },
          ],
          woorden: [
            { woord: "NAVO", uitleg: "Westerse militaire alliantie, opgericht 1949." },
            { woord: "alliantie", uitleg: "Bondgenootschap — landen die elkaar steunen." },
            { woord: "artikel 5", uitleg: "Wettelijke regel die elk NAVO-land verplicht de andere te verdedigen." },
          ],
          theorie: "Tijdens de Koude Oorlog was NAVO de westerse kant, het Warschaupact (USSR + Oost-Europa) was de andere kant. Na 1991 bestaat alleen NAVO nog.",
          voorbeelden: [
            { type: "leden", tekst: "Onder andere VS, VK, Frankrijk, Duitsland, Nederland, België. Sinds 2024 zijn er 32 lidstaten." },
            { type: "leider", tekst: "Sinds oktober 2024 is de Nederlander Mark Rutte secretaris-generaal van de NAVO — de baas." },
          ],
          basiskennis: [{ onderwerp: "Tegenhanger", uitleg: "Warschaupact (1955-1991) was de oosterse tegenhanger. Bestaat niet meer sinds USSR uit elkaar viel." }],
          niveaus: {
            basis: "NAVO = westers militair bondgenootschap sinds 1949.",
            simpeler: "Een groep westerse landen die afspraken dat ze elkaar helpen als iemand wordt aangevallen.",
            nogSimpeler: "Westerse landen die samen verdedigen. De baas is nu Mark Rutte.",
          },
        },
      },
      {
        q: "Wat was het **IJzeren Gordijn**?",
        options: ["Scheiding tussen West- en Oost-Europa","Een muur dwars door de stad Berlijn","Een groot wapen uit de Koude Oorlog","Een beroemd Russisch oorlogsschip"],
        answer: 0,
        wrongHints: [null, "Dat is de Berlijnse Muur — het IJzeren Gordijn was veel langer.", "Geen wapen — het woord is beeldspraak.", "Geen schip — het woord is beeldspraak."],
        uitlegPad: {
          stappen: [
            { titel: "Wie bedacht het?", tekst: "Winston Churchill (oud-premier Groot-Brittannië) zei in 1946: 'Een ijzeren gordijn is over Europa gevallen'. Het werd direct een wereldberoemde term." },
            { titel: "Wat bedoelde hij?", tekst: "Europa was na WO2 in twee delen gevallen. West = vrij + kapitalistisch. Oost = onder controle van USSR + communistisch. Tussen die twee delen kon je niet zomaar lopen — bewaakte grenzen." },
            { titel: "Letterlijke grens", tekst: "Vooral in Duitsland zichtbaar: het werd in 1949 in tweeën gesplitst. Berlijn ook. Later kwam zelfs een echte muur (1961). Niet van ijzer, wel net zo onbeweeglijk." },
          ],
          woorden: [
            { woord: "IJzeren Gordijn", uitleg: "Beeldspraak voor de scheiding tussen Oost- en West-Europa tijdens Koude Oorlog." },
            { woord: "beeldspraak", uitleg: "Iets wordt vergeleken met iets anders om het duidelijker te maken." },
          ],
          theorie: "Een goede beeldspraak blijft hangen. 'IJzeren Gordijn' suggereerde: hard, ondoordringbaar, alles afsluitend. Dat klopte: mensen aan de Oost-kant konden niet vrij naar West.",
          voorbeelden: [
            { type: "concrete grens", tekst: "Tussen West- en Oost-Duitsland stond een muur, hekken, mijnvelden en wachttorens. ~1400 km lang." },
            { type: "westkant", tekst: "Nederland, België, Frankrijk, GB, West-Duitsland, Italië — vrij." },
            { type: "oostkant", tekst: "Polen, Oost-Duitsland, Tsjechoslowakije, Hongarije, Roemenië, Bulgarije — onder USSR-invloed." },
          ],
          basiskennis: [{ onderwerp: "Geen echt gordijn", uitleg: "De term is poëtisch. Bewaakte landgrenzen + muren waren wel echt." }],
          niveaus: {
            basis: "IJzeren Gordijn = grens tussen West- en Oost-Europa in de Koude Oorlog.",
            simpeler: "Een naam voor de scherpe scheiding tussen vrije westerse landen en communistische oosterse landen.",
            nogSimpeler: "Een onzichtbare muur door Europa, oost ↔ west.",
          },
        },
      },
      {
        q: "Welke Nederlander is sinds 2024 **secretaris-generaal van de NAVO**?",
        options: ["Mark Rutte", "Geert Wilders", "Dick Schoof", "Jaap de Hoop Scheffer"],
        answer: 0,
        wrongHints: [null, "Geert Wilders is partijleider in de Tweede Kamer, geen NAVO-baas.", "Dick Schoof werd in 2024 minister-president in Den Haag.", "Hij was ook baas van de NAVO, maar van 2004 tot 2009."],
      },
    ],
  },
  {
    title: "Berlijnse Muur, Cuba, Vietnam — crises",
    explanation:
      "Tijdens Koude Oorlog waren er **gevaarlijke momenten** dat het bijna echt oorlog werd.\n\n**1. Berlijnse blokkade + luchtbrug** *(1948-49)*:\n• USSR sloot wegen naar West-Berlijn af.\n• Wilden dat Westen wegging.\n• VS + bondgenoten **vlogen voorraden binnen** *(11 maanden lang!)*.\n• 277.000 vluchten.\n• USSR gaf op.\n\n**2. Berlijnse Muur** 🧱 *(1961-1989)*:\n• Berlijn was gedeeld: West *(vrij)* + Oost *(communistisch)*.\n• 1949: 2 Duitslanden *(West-Duitsland + Oost-Duitsland)*.\n• Berlijn was eiland van Westen in Oost-Duitsland.\n• Oost-Duitsers vluchtten naar West *(beter leven)*.\n• **1961**: Oost-Duitsland bouwde *(met steun van de USSR)* een **muur** door Berlijn.\n• 155 km lang, 3,6 m hoog, wachters.\n• Mensen aan Oost-kant **gevangen** in eigen land.\n• ~140 mensen gedood bij vluchtpoging.\n• Symbool van Koude Oorlog.\n\n**John F. Kennedy** in Berlijn *(1963)*:\n• Beroemde toespraak.\n• *'Ich bin ein Berliner'* *(Ik ben een Berlijner)* — solidariteit met West-Berlijn.\n\n**3. Cuba-crisis** *(oktober 1962)* — **dichtste bij kernoorlog OOIT!**\n\n**Wat gebeurde?**\n• Cuba *(Caraïbisch eiland, dicht bij VS)* werd communistisch in 1959 *(Fidel Castro)*.\n• USSR plaatste **kernraketten** op Cuba *(150 km van Florida)*.\n• VS-president **Kennedy** ontdekt dit met spion-vliegtuigen.\n• **13 dagen** spanning.\n• VS blokkeerde Cuba.\n• USSR-leider Chroesjtsjov + Kennedy onderhandelden.\n• Oplossing: USSR haalt raketten weg + VS haalt raketten Turkije weg + belooft geen invasie Cuba.\n\nAls 1 verkeerde stap → kernoorlog → einde wereld.\n\n**4. Vietnam-oorlog** *(1955-1975)* — bekendste proxy-oorlog:\n\n• Noord-Vietnam *(communistisch)* vs Zuid-Vietnam *(westers gesteund)*.\n• **VS hielp Zuid** met soldaten + bommen.\n• 1968: ~500.000 VS-soldaten in Vietnam.\n• Veel verzet thuis VS *('Stop de oorlog!')*.\n• **My Lai-bloedbad** *(1968)*: VS-soldaten doodden 500 burgers.\n• Beelden op TV: eerste 'tv-oorlog'.\n• **Noord-Vietnam won**: VS trok zich terug 1973-1975.\n• Vereniging: heel Vietnam communistisch onder Hanoi.\n• Doden: ~3 miljoen, vooral Vietnamezen.\n\n**Iconische foto's**:\n• **Naakt meisje, brandwonden van napalm** *(1972, Phan Thi Kim Phuc)*.\n• **Saigon-executie** *(1968)*.\n• **Helikopter-evacuatie ambassade VS** *(1975)*.\n\n**Hippie-beweging + tegenstand**:\n• Jongeren tegen oorlog.\n• 'Make love, not war'.\n• Beatmuziek + folk *(Bob Dylan, Joan Baez)*.\n• **Woodstock** *(1969)* = festival.\n• Vredesteken **✌️** populair.\n\n**5. Andere proxy-oorlogen**:\n• **Korea-oorlog** *(1950-53)*: Noord vs Zuid Korea — nog steeds gedeeld.\n• **Afghanistan** *(1979-89)*: USSR-invasie — verloren.\n• **Angola, Mozambique, Vietnam, Cuba, Nicaragua, El Salvador** — vele.\n\n**6. Olympische Spelen-boycot** *(1980 + 1984)*:\n• 1980 Moskou: VS + 65 landen weg uit protest tegen invasie Afghanistan.\n• 1984 Los Angeles: USSR + 14 landen weg uit wraak.\n• Sport + politiek gemengd.\n\n**Toets-feitje**:\nDe **Cubaanse Rakettencrisis** *(16-28 okt 1962)* was zo gevaarlijk dat de kapitein van een **Russische onderzeeër een kerntorpedo wilde afvuren**. Eén officier — **Vasili Arkhipov** — weigerde in te stemmen en verhinderde zo mogelijk **Wereldoorlog III**. Hij wordt 'de man die de wereld redde' genoemd.",
    checks: [
      {
        q: "Wanneer werd de **Berlijnse Muur gebouwd**?",
        options: ["1961", "1945", "1989", "1949"],
        answer: 0,
        wrongHints: [null, "In 1945 eindigde de Tweede Wereldoorlog.", "In 1989 gebeurde er juist iets anders met de muur.", "In 1949 ontstonden de twee Duitslanden."],
      },
      {
        q: "Wat was de **Cuba-crisis** (1962)?",
        options: ["Bijna-kernoorlog om raketten op Cuba", "Echte oorlog tussen VS en Cuba", "Opstand tegen de dictator van Cuba", "Blokkade van de stad Berlijn"],
        answer: 0,
        wrongHints: [null, "Echte oorlog werd nét voorkomen — dat is juist het verhaal.", "Die revolutie was al in 1959 — wat gebeurde er in 1962?", "Berlijn werd in 1948 afgesloten — dat was een andere crisis."],
        uitlegPad: {
          stappen: [
            { titel: "Wat was er aan de hand?", tekst: "Cuba werd in 1959 communistisch (Fidel Castro). De USSR plaatste daar kernraketten — slechts **150 km** van Florida (VS). De VS schrok zich rot." },
            { titel: "13 dagen op het randje", tekst: "President **Kennedy** (VS) en leider **Chroesjtsjov** (USSR) onderhandelden 13 dagen lang (16-28 oktober 1962). De VS blokkeerde Cuba met oorlogsschepen. Eén verkeerde beweging = kernoorlog." },
            { titel: "Hoe is het opgelost?", tekst: "Compromis: USSR haalt raketten weg uit Cuba, VS belooft Cuba niet binnen te vallen + haalt stiekem ook raketten weg uit Turkije. Beide kanten konden 'gezicht behouden'." },
          ],
          woorden: [
            { woord: "Cuba-crisis", uitleg: "Spanning okt 1962 tussen VS en USSR over kernraketten op Cuba." },
            { woord: "kernraket", uitleg: "Raket met kernkop — kan een hele stad wegvagen." },
            { woord: "blokkade", uitleg: "Het afsnijden van een land of haven door schepen." },
          ],
          theorie: "Cuba-crisis wordt vaak '**dichtste bij kernoorlog ooit**' genoemd. Door dit gevaar maakten VS en USSR daarna een directe 'rode telefoon' tussen Washington en Moskou — om snel te overleggen bij volgende crisis.",
          voorbeelden: [
            { type: "held", tekst: "Sovjet-officier **Vasili Arkhipov** weigerde op 27 oktober 1962 in te stemmen met het afvuren van een kerntorpedo vanaf een onderzeeër. Mogelijk redde hij de wereld." },
            { type: "context", tekst: "Cuba was communistisch geworden onder Fidel Castro (1959). Zijn vriendschap met USSR maakte de VS nerveus — een communistische bondgenoot zo dichtbij." },
          ],
          basiskennis: [{ onderwerp: "Waarom belangrijk?", uitleg: "Eerste keer dat de wereld besefte: kernoorlog kan letterlijk in dagen ontstaan. Daarna kwamen ontwapenings-onderhandelingen." }],
          niveaus: {
            basis: "Cuba-crisis = USSR-raketten op Cuba, bijna kernoorlog (1962).",
            simpeler: "Sovjet-Unie zette raketten op Cuba dicht bij VS. 13 dagen lang dreigde kernoorlog. Opgelost via onderhandelen.",
            nogSimpeler: "Bijna kernoorlog in 1962.",
          },
        },
      },
      {
        q: "Wie won de **Vietnam-oorlog**?",
        options: ["Noord-Vietnam", "De VS", "Zuid-Vietnam", "Frankrijk"],
        answer: 0,
        wrongHints: [null, "De VS trok zich terug zonder de oorlog te winnen — pijnlijke nederlaag.", "Zuid-Vietnam verloor en hield in 1975 op te bestaan.", "Frankrijk had Vietnam eerder als kolonie maar verloor al in 1954 (Dien Bien Phu)."],
        uitlegPad: {
          stappen: [
            { titel: "Wie vocht tegen wie?", tekst: "Noord-Vietnam (communistisch, geholpen door USSR en China) vocht tegen Zuid-Vietnam (gesteund door VS en bondgenoten). Een proxy-oorlog tussen grootmachten." },
            { titel: "Hoe ging het mis voor de VS?", tekst: "VS stuurde ~500.000 soldaten + dropte meer bommen dan in heel WO2. Maar Vietnamezen vochten met guerrilla-tactieken (verbergen in jungle, tunnels). VS won wel veel gevechten, maar niet de oorlog. Thuis groeide het verzet ('Stop de oorlog!')." },
            { titel: "Uitkomst 1975", tekst: "VS trok zich in 1973 terug. Noord-Vietnam veroverde Saigon in 1975. Heel Vietnam werd communistisch. ~3 miljoen doden, vooral Vietnamezen." },
          ],
          woorden: [
            { woord: "guerrilla", uitleg: "Kleine, snelle aanvallen van verzetsstrijders — niet groot leger tegen groot leger." },
            { woord: "proxy-oorlog", uitleg: "Een oorlog waar grootmachten via andere landen vechten." },
          ],
          theorie: "Vietnam was de eerste 'tv-oorlog' — mensen zagen beelden thuis. Foto's zoals **Phan Thi Kim Phuc** (1972, naakt kind met napalm-brandwonden) keerden de publieke opinie in de VS tegen de oorlog.",
          voorbeelden: [
            { type: "cultuur", tekst: "Hippie-beweging (1960s) protesteerde tegen Vietnam-oorlog. 'Make love, not war'. Woodstock-festival (1969) werd symbool." },
            { type: "Vietnam vandaag", tekst: "Vietnam is nu één land, communistisch maar economisch open. Veel Nederlandse toeristen bezoeken Hanoi en Ho Chi Minh-stad." },
          ],
          basiskennis: [{ onderwerp: "Les van Vietnam", uitleg: "Een grote militaire macht kan een oorlog verliezen tegen een kleinere tegenstander die volk + tijd + thuisvoordeel heeft." }],
          niveaus: {
            basis: "De Vietnam-oorlog is gewonnen door Noord-Vietnam, het communistische noorden.",
            simpeler: "De VS verloor de Vietnam-oorlog. Noord-Vietnam veroverde Saigon in 1975 en verenigde het land.",
            nogSimpeler: "Noord-Vietnam won, VS trok zich terug.",
          },
        },
      },
      {
        q: "Wat zei **Kennedy in Berlijn** (1963)?",
        options: ["'Ich bin ein Berliner'", "'We choose to go to the Moon'", "'I have a dream'", "'Tear down this wall!'"],
        answer: 0,
        wrongHints: [null, "Dat zei Kennedy ook, maar over NASA — niet in Berlijn.", "Dat was Martin Luther King, niet Kennedy.", "Dat zei president Reagan in 1987 — niet Kennedy."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent het?", tekst: "**'Ich bin ein Berliner'** = 'Ik ben een Berlijner'. Kennedy zei dit op 26 juni 1963 voor een enorme menigte in West-Berlijn. Hij sprak Duits om solidariteit te tonen." },
            { titel: "Waarom belangrijk?", tekst: "De Berlijnse Muur stond er nog maar 2 jaar. West-Berlijners voelden zich kwetsbaar — een vrij eiland in communistisch Oost-Duitsland. Kennedy zei: **'Wij Amerikanen staan aan jullie kant.'**" },
            { titel: "Mythe over de Berliner bol", tekst: "Sommigen zeggen: 'Berliner' betekent ook een soort oliebol met jam (een Berliner bol)! Dus Kennedy zou hebben gezegd 'Ik ben een Berliner bol'. Maar Berlijners zelf noemen die niet 'Berliner' — dus dit is een grapje, geen echte fout." },
          ],
          woorden: [
            { woord: "toespraak", uitleg: "Een speech voor publiek, vaak politiek." },
            { woord: "solidariteit", uitleg: "Je voelen verbonden met anderen, vooral als zij steun nodig hebben." },
          ],
          theorie: "Een goede toespraak in een crisis kan een symbool worden van een hele tijd. Kennedy's 'Ich bin ein Berliner' werd dat voor de Koude Oorlog: VS = vriend, USSR = vijand.",
          voorbeelden: [
            { type: "andere zin", tekst: "26 jaar later (1987) zei president Reagan in Berlijn: 'Mr. Gorbachev, tear down this wall!' (Hr. Gorbatsjov, breek deze muur af!). 2 jaar later vond de val plaats." },
          ],
          basiskennis: [{ onderwerp: "Toets-context", uitleg: "Kennedy = jonge populaire VS-president (1961-1963). Vermoord 22 november 1963 — slechts 5 maanden na deze toespraak." }],
          niveaus: {
            basis: "Kennedy zei in Berlijn: 'Ich bin ein Berliner' (1963).",
            simpeler: "Beroemde toespraak: 'Ik ben een Berlijner' — solidariteit met West-Berlijn.",
            nogSimpeler: "'Ich bin ein Berliner'.",
          },
        },
      },
    ],
  },
  {
    title: "Val Berlijnse Muur + 1990s + nu",
    explanation:
      "**Eind van Koude Oorlog** *(1985-1991)*:\n\n**Mikhail Gorbatsjov** *(USSR-leider 1985-1991)*:\n• Probeerde USSR te **hervormen**:\n  - **Glasnost** *(openheid)* — minder geheim.\n  - **Perestrojka** *(omstructurering)* — meer markt-economie.\n• Onder hem werden Oost-Europese communistische regeringen zwakker.\n• Won **Nobelprijs voor Vrede** 1990.\n\n**Revolutie 1989** 🎉:\n• **Polen** *(juni)*: Solidarność-beweging *(Lech Walesa)*.\n• **Hongarije** *(mei)*: opent grens naar Oostenrijk.\n• **DDR** *(Oost-Duitsland)*: enorme demonstraties.\n• **Tsjecho-Slowakije**: 'Fluwelen Revolutie' *(Vaclav Havel)*.\n• **Roemenië**: bloedig, dictator Ceausescu geëxecuteerd.\n• **Bulgarije, Albanië, Joegoslavië** ook.\n\n**Val van de Berlijnse Muur** *(9 november 1989)* 🎊:\n• DDR liet plotseling reizen toe.\n• Mensen aan beide kanten klommen op muur.\n• Met **hamers** + **pikhouwelen** sloegen ze muur stuk.\n• Wereldwijd live op TV.\n• Symbool van vrijheid.\n• **3 oktober 1990**: hereniging Duitsland.\n\n**Einde Sovjet-Unie** *(december 1991)*:\n• Sovjetrepublieken werden onafhankelijk *(Estland, Letland, Litouwen, Oekraïne, etc.)*.\n• USSR officieel **opgeheven 26 december 1991**.\n• **Boris Jeltsin** werd president nieuw Rusland.\n\n**1990s — 'einde geschiedenis'?**\n• Filosoof Francis Fukuyama: 'kapitalisme + democratie wonnen, einde van grote conflicten'.\n• Optimisme.\n• EU groeide.\n• Internet kwam op.\n\n**Maar:**\n• **Joegoslavië-oorlog** *(1991-2001)*: brutaal in voormalig Joegoslavië *(Bosnië, Kosovo)*. **Genocide Srebrenica** *(1995)* — NL-blauwhelmen konden dit niet voorkomen *(zwarte vlek geschiedenis NL)*.\n• **Rwanda-genocide** *(1994)*: 800.000 doden.\n• Probleem-zones bleven.\n\n**11 september 2001** *(9/11)* 🏢:\n• **Terreuraanslag** op VS.\n• 4 vliegtuigen gekaapt door **Al-Qaida** *(Osama bin Laden)*.\n• 2 vlogen in **Twin Towers** *(World Trade Center, NYC)*.\n• 1 in Pentagon.\n• 1 neergestort *(passagiers vochten terug)*.\n• **2977 doden** — meer dan bij de aanval op Pearl Harbor (1941).\n• Wereld veranderde — 'War on Terror' begon.\n\n**War on Terror**:\n• VS viel **Afghanistan** binnen *(2001, Bin Laden)*.\n• VS viel **Irak** binnen *(2003, Saddam Hoessein)*.\n• Bin Laden gedood *(2011)*.\n• Verlies miljoenen levens + biljoenen $.\n\n**Andere conflicten 21e eeuw**:\n• **Arabische Lente** *(2011)*: opstanden Tunesië → Egypte → Libië → Syrië.\n• **Syrië-oorlog** *(2011+)*: nog steeds, miljoenen vluchtelingen.\n• **IS / Daesh** *(2014-2017)*: terreurgroep in Irak/Syrië.\n\n**Oekraïne**:\n• 2014: **Krim** door Rusland geannexeerd.\n• **24 februari 2022**: Rusland valt Oekraïne binnen *(grote oorlog!)*.\n• NL + EU steunen Oekraïne met wapens + geld.\n• Vluchtelingen *(~100.000 in NL)*.\n• Nog steeds gaande.\n\n**Israël + Palestina**:\n• Conflict sinds **1948** *(stichting Israël)*.\n• **7 oktober 2023**: Hamas-aanval op Israël.\n• Daarna Israëlisch antwoord op Gaza.\n• Veel doden — vooral burgers.\n• Internationaal protest + recht-zaken.\n\n**Klimaatcrisis** 🌍:\n• Niet 'oorlog' maar grootste uitdaging 21e eeuw.\n• Vereist wereldwijde samenwerking.\n• Generatie van **Greta Thunberg** *(2018+)*: jonge klimaat-activisten.\n\n**Corona-pandemie** *(2020-2022)* 🦠:\n• Virus uit China.\n• Wereldwijde lockdowns.\n• Miljoenen doden + economische crisis.\n• Toonde wereldwijde afhankelijkheid.\n\n**Veranderende wereld** *(2024)*:\n• China **groeiende grootmacht**.\n• VS-China rivaliteit *('nieuwe Koude Oorlog'?)*.\n• AI-revolutie *(ChatGPT, 2022+)*.\n• Migratie + ongelijkheid groeiend.\n• Populisme + polarisatie in democratieën.\n\n**Toets-feitje**:\nDe **Berlijnse Muur** stond **28 jaar** *(1961-1989)*. De wereld voorspelde dat de DDR nog **decennia** zou bestaan. Niemand zag de val aankomen. Geschiedenis is **niet voorspelbaar** — verandering kan ineens komen.",
    checks: [
      {
        q: "Wanneer **viel de Berlijnse Muur**?",
        options: ["1989", "1961", "1979", "1999"],
        answer: 0,
        wrongHints: [null, "In 1961 werd de muur juist gebouwd.", "In 1979 stond de muur nog overeind.", "Kijk in de les naar het jaartal bij de val van de muur."],
      },
      {
        q: "Wie was **Gorbatsjov**?",
        options: ["Leider van de Sovjet-Unie", "President van de VS", "Leider van Oost-Duitsland", "Leider van China"],
        answer: 0,
        wrongHints: [null, "De presidenten van de VS in die tijd waren Reagan en Bush.", "Oost-Duitsland had eigen leiders, zoals Honecker.", "China had eigen leiders, zoals Mao."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was hij?", tekst: "**Mikhail Gorbatsjov** (1931-2022) werd in 1985 leider van de Sovjet-Unie. Hij begreep dat het systeem stond te wankelen — armoede, corruptie, achterstand op Westen." },
            { titel: "Glasnost + Perestrojka", tekst: "Twee hervormingen: **Glasnost** = openheid (minder geheim, vrijere pers). **Perestrojka** = omstructurering (meer markt, minder staat). Onbedoeld effect: Oost-Europese landen begonnen ook te hervormen → revoluties 1989." },
            { titel: "Einde van USSR", tekst: "In 1991 viel de Sovjet-Unie uit elkaar. Republieken werden onafhankelijk (Estland, Letland, Oekraïne, etc.). Gorbatsjov trad af. Hij kreeg in 1990 de Nobelprijs voor de Vrede." },
          ],
          woorden: [
            { woord: "Glasnost", uitleg: "Openheid — letterlijk 'het laten zien'." },
            { woord: "Perestrojka", uitleg: "Omstructurering — economische hervorming." },
            { woord: "hervormen", uitleg: "Iets veranderen om beter te maken." },
          ],
          theorie: "Gorbatsjov wilde de USSR redden door hervorming. Maar zodra mensen iets meer vrijheid kregen, eisten ze meer — en het systeem stortte in. Een belangrijke les: half-vrij is moeilijk vast te houden.",
          voorbeelden: [
            { type: "in NL", tekst: "Gorbatsjov was in het Westen geliefd — 'Gorby' werd hij genoemd. Russen zelf zijn verdeeld: hij verloor hun supermacht-status." },
            { type: "tegenstelling Poetin", tekst: "Huidige Russische president Poetin noemt het uiteenvallen van USSR 'grootste geopolitieke ramp van 20e eeuw' — tegenovergesteld van Gorbatsjov." },
          ],
          basiskennis: [{ onderwerp: "Toets-truc", uitleg: "Gorbatsjov = laatste Sovjet-leider, hervormer. Jeltsin = eerste president van het nieuwe Rusland (1991-1999)." }],
          niveaus: {
            basis: "Gorbatsjov = USSR-leider 1985-1991, hervormde via Glasnost + Perestrojka.",
            simpeler: "Laatste leider van Sovjet-Unie. Wilde hervormen, daardoor viel het uit elkaar.",
            nogSimpeler: "Hij was de baas van de USSR aan het einde.",
          },
        },
      },
      {
        q: "Wat gebeurde op **11 september 2001**?",
        options: ["Aanslag op de Twin Towers in New York", "De Berlijnse Muur viel", "De Cuba-crisis begon", "De Sovjet-Unie viel uiteen"],
        answer: 0,
        wrongHints: [null, "De Muur viel al in de vorige eeuw.", "De Cuba-crisis was in 1962, niet in 2001.", "De Sovjet-Unie viel al in de vorige eeuw uit elkaar."],
        uitlegPad: {
          stappen: [
            { titel: "Wat gebeurde er?", tekst: "Op dinsdag 11 september 2001 kaapten **19 terroristen van Al-Qaida** 4 vliegtuigen in de VS. Twee vlogen in de Twin Towers (World Trade Center, New York). Eén in het Pentagon. Eén crashte in Pennsylvania (passagiers vochten terug)." },
            { titel: "Waarom 'kantelpunt'?", tekst: "**2977 mensen** stierven die dag. De Twin Towers stortten allebei in. Live op TV — de hele wereld zag het gebeuren. De aanslag veranderde hoe landen denken over veiligheid, terreur, vliegen." },
            { titel: "Wat kwam erna?", tekst: "VS-president Bush startte de '**War on Terror**'. VS viel **Afghanistan** binnen (2001) — daar zat Bin Laden (de leider van Al-Qaida). Later ook **Irak** (2003). Bin Laden werd in 2011 in Pakistan gedood." },
          ],
          woorden: [
            { woord: "9/11", uitleg: "Korte Amerikaanse schrijfwijze: maand 9 (september), dag 11." },
            { woord: "Al-Qaida", uitleg: "Terreurgroep van Osama bin Laden, gericht tegen het Westen." },
            { woord: "terreuraanslag", uitleg: "Geweldsdaad om angst te zaaien voor een politiek doel." },
          ],
          theorie: "11 september wordt vaak gezien als de gebeurtenis die de 21e eeuw vormde — meer veiligheidschecks, langere oorlogen, andere internationale verhoudingen.",
          voorbeelden: [
            { type: "concrete impact", tekst: "Sinds 9/11 moet je je schoenen + riem uittrekken op het vliegveld. Veiligheidscontroles werden veel strenger." },
            { type: "NL deelname", tekst: "Nederland stuurde militairen naar Afghanistan (2001-2014). 25 NL-soldaten kwamen om." },
          ],
          basiskennis: [{ onderwerp: "Onthouden", uitleg: "9/11 = 11 september 2001 = Twin Towers New York = Al-Qaida = begin War on Terror." }],
          niveaus: {
            basis: "Op 11 september 2001 vlogen terroristen met gekaapte vliegtuigen in de Twin Towers in New York.",
            simpeler: "Bij die aanslag kwamen bijna 3000 mensen om. Daarna begon Amerika een lange strijd tegen terreurgroepen.",
            nogSimpeler: "Het was de aanslag op de Twin Towers in New York.",
          },
        },
      },
      {
        q: "Wanneer begon de **grote oorlog tussen Rusland en Oekraïne**?",
        options: ["24 februari 2022","18 maart 2014","24 augustus 1991","9 november 1989"],
        answer: 0,
        wrongHints: [null,"Toen pakte Rusland het schiereiland de Krim af van Oekraïne, maar de grote oorlog begon later.","Toen werd Oekraïne een onafhankelijk land, los van de Sovjet-Unie.","Toen viel de Berlijnse Muur in Duitsland."],
      },
    ],
  },
  {
    title: "Eind-toets — Koude Oorlog mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wat was de **Koude Oorlog**?", options: ["Spanning tussen VS en USSR", "Echte oorlog tussen VS en USSR", "Oorlog in de winter", "Ruzie tussen VS en Engeland"], answer: 0, wrongHints: [null, "Er werd wel gevochten in andere landen, maar niet rechtstreeks tussen die twee.", "De naam slaat niet op het weer.", "Engeland was juist een bondgenoot van de VS."] },
      { q: "Wanneer **viel de Berlijnse Muur**?", options: ["1989", "1961", "1945", "1999"], answer: 0, wrongHints: [null, "In 1961 werd de muur gebouwd.", "In 1945 eindigde de Tweede Wereldoorlog.", "Kijk in de les naar het jaartal bij de val van de muur."] },
      { q: "Wie voorkwamen een **kernoorlog tijdens de Cuba-crisis (1962)**?", options: ["Kennedy en Chroesjtsjov", "Stalin en Truman", "Gorbatsjov en Reagan", "Hitler en Churchill"], answer: 0, wrongHints: [null, "Stalin was in 1953 al overleden.", "Die waren pas in de jaren '80 aan de macht.", "Zij leefden in de tijd van de Tweede Wereldoorlog."] },
      { q: "Wat is **NAVO**?", options: ["Westers militair bondgenootschap","Oosters militair bondgenootschap","Wereldwijde organisatie voor vrede","Europese samenwerking voor handel"], answer: 0, wrongHints: [null,"Dat was het Warschaupact, rond de Sovjet-Unie.","Dat lijkt op de VN. Doen bij de NAVO alle landen van de wereld mee?","Dat lijkt op de EU. Ging de NAVO over handel, of over iets anders?"] },
      { q: "Wie won de **Vietnam-oorlog**?", options: ["Noord-Vietnam", "De VS", "Frankrijk", "Zuid-Vietnam"], answer: 0, wrongHints: [null, "De VS trok zich terug zonder te winnen.", "Frankrijk was al in 1954 vertrokken.", "Zuid-Vietnam verloor en hield in 1975 op te bestaan."] },
      { q: "Wanneer was **9/11**?", options: ["11 september 2001","9 november 1989","5 mei 1945","24 februari 2022"], answer: 0, wrongHints: [null,"Toen viel de Berlijnse Muur. 9/11 gaat over een aanslag in Amerika.","Toen werd Nederland bevrijd.","Toen begon de grote oorlog in Oekraïne."] },
      { q: "Wat was het **IJzeren Gordijn**?", options: ["Een grens tussen Oost- en West-Europa","De muur dwars door de stad Berlijn","Een lange rivier tussen twee landen","Een hoge bergketen midden in Europa"], answer: 0, wrongHints: [null,"De Berlijnse Muur was maar een klein stukje — het IJzeren Gordijn was veel langer.","Is een rivier van ijzer? Waar zou het woord 'gordijn' voor staan?","Bergen horen bij de natuur. Gaat het IJzeren Gordijn over natuur of over politiek?"] },
      { q: "Welke leider leidde de **Sovjet-Unie** in WO2?", options: ["Stalin", "Hitler", "Roosevelt", "Churchill"], answer: 0, wrongHints: [null, "Hitler leidde Duitsland.", "Roosevelt was president van de VS.", "Churchill leidde het Verenigd Koninkrijk."] },
      { q: "Welk land was in de NAVO een **bondgenoot van de VS**?", options: ["West-Duitsland", "Oost-Duitsland", "Sovjet-Unie", "China"], answer: 0, wrongHints: [null, "Oost-Duitsland hoorde bij het Warschaupact.", "De Sovjet-Unie was juist de tegenstander van de VS.", "China was communistisch en zat niet in de NAVO."] },
      { q: "Wat is een **dictatuur**?", options: ["Eén leider met alle macht", "Een land met eerlijke verkiezingen", "Een land met koning en parlement", "Een land zonder leger"], answer: 0, wrongHints: [null, "Dat is juist een democratie.", "Zo is het in Nederland: daar beslist het parlement mee.", "Een dictator heeft juist vaak een sterk leger."] },
      { q: "Wanneer viel de **Sovjet-Unie uiteen**?", options: ["1991", "1945", "1989", "2000"], answer: 0, wrongHints: [null, "In 1945 eindigde de Tweede Wereldoorlog.", "In 1989 viel de Berlijnse Muur — de Sovjet-Unie bestond toen nog.", "Kijk in de les naar het jaartal."] },
      { q: "Wie werd **leider van Cuba na de revolutie van 1959**?", options: ["Fidel Castro", "John F. Kennedy", "Che Guevara", "Chroesjtsjov"], answer: 0, wrongHints: [null, "Kennedy was president van de VS.", "Che Guevara vocht mee in de revolutie, maar werd niet de leider.", "Chroesjtsjov leidde de Sovjet-Unie."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const koudeOorlogModernPo = {
  id: "koude-oorlog-modern-po",
  title: "Koude Oorlog + moderne geschiedenis (groep 7-8, Doorstroomtoets-stof)",
  emoji: "🧊",
  level: "groep7-8",
  subject: "geschiedenis",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — geschiedenis (Tijdvak 10)",
  prerequisites: [
    { id: "wereldoorlog2-geschiedenis", title: "WO2", niveau: "klas3-4" },
    { id: "tijdvakken-nederland-po", title: "Tijdvakken NL", niveau: "1F" },
  ],
  intro:
    "Koude Oorlog + moderne geschiedenis voor groep 7-8, Doorstroomtoets-stof — VS vs USSR (kapitalisme vs communisme + NAVO 1949 + Rutte 2024) + crises (Berlijnse Muur 1961, Cuba 1962 bijna-kernoorlog, Vietnam) + val Muur 1989 + Gorbatsjov + 9/11 + Oekraïne 2022 + huidige wereld. Tijdvak 10. ~15 min.",
  triggerKeywords: [
    "Koude Oorlog",
    "VS", "USSR", "Sovjet-Unie",
    "communisme", "kapitalisme",
    "NAVO", "Warschaupact",
    "Berlijnse Muur",
    "Cuba-crisis", "Kennedy",
    "Vietnam-oorlog",
    "Gorbatsjov", "perestrojka", "glasnost",
    "9/11", "Twin Towers", "Bin Laden",
    "Oekraïne", "Poetin",
  ],
  chapters,
  steps,
};

export default koudeOorlogModernPo;
