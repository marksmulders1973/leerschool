// Leerpad: Bekende Nederlanders - groep 6-8 wereldoriëntatie.
// Cito-relevant. 1F. 4 stappen.

const stepEmojis = ["📜", "⚽", "🎤", "🏆"];

const chapters = [
  { letter: "A", title: "Historische helden", emoji: "📜", from: 0, to: 0 },
  { letter: "B", title: "Sport + ontdekking", emoji: "⚽", from: 1, to: 1 },
  { letter: "C", title: "Moderne bekendheid", emoji: "🎤", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Historische Nederlanders",
    explanation:
      "**Beroemde Nederlanders door de eeuwen** — Cito vraagt vaak wie wat deed.\n\n**Middeleeuwen + Gouden Eeuw**:\n\n**Erasmus van Rotterdam** *(1466-1536)*:\n• Beroemd **humanist + filosoof**.\n• Schreef **'Lof der Zotheid'** *(1511)* — kritisch op kerk + maatschappij.\n• Reisde door Europa, woonde in Engeland.\n• Beschouwd als **Vader van het humanisme**.\n• Universiteit van Rotterdam heet **Erasmus Universiteit** naar hem.\n• Cito-feit: in 2025 = **490 jaar geleden** dat hij stierf.\n\n**Willem van Oranje (Willem de Zwijger)** *(1533-1584)*:\n• Leider van **Tachtigjarige Oorlog** *(1568-1648)* tegen Spanje.\n• Stamvader **koninklijke familie** *(Oranje-Nassau)*.\n• Vermoord 1584 in Delft door Balthasar Gerards.\n• Inspireerde **Wilhelmus** *(volkslied)* — geschreven over hem.\n• Wordt vaak **Vader des Vaderlands** genoemd.\n\n**Michiel de Ruyter** *(1607-1676)*:\n• **Beroemde admiraal** *(vlootleider)* in 17e eeuw.\n• Versloeg Engelse + Franse vloten.\n• Beroemde tocht: **Naar Chatham** *(1667)* — overweldigde Engelse vloot in eigen haven.\n• Stierf in slag bij Sicilië.\n• Standbeeld in Vlissingen.\n\n**Hugo de Groot** *(1583-1645)*:\n• **Vader van internationaal recht**.\n• Schreef boeken die nog steeds basis zijn voor wereldrecht.\n• Gevangen in **Slot Loevestein** *(1619-1621)*.\n• **Ontsnapt in boekenkist**! *(beroemd verhaal)*.\n• Standbeeld in Delft.\n\n**Jacob van Lennep, Cats, Vondel** — schrijvers.\n\n**Schilders Gouden Eeuw**:\n• **Rembrandt, Vermeer, Frans Hals, Jan Steen** *(zie ander pad)*.\n\n**Wetenschap + uitvindingen**:\n\n**Antoni van Leeuwenhoek** *(1632-1723)*:\n• Uit Delft.\n• Maakte **microscoop** + zag eerst **bacteriën + cellen**.\n• 'Vader van de microbiologie'.\n• Brieven naar Engelse Royal Society.\n\n**Christiaan Huygens** *(1629-1695)*:\n• Astronoom + wiskundige.\n• Vond **slingerklok** uit *(1656)* — eerste nauwkeurige klok.\n• Bedacht **golftheorie** van licht.\n• Zag ringen Saturnus + manen Titan.\n\n**Eise Eisinga** *(1744-1828)*:\n• Bouwde **planetarium** in **woonkamer** *(Franeker)* in 1781!\n• Toont planeten-bewegingen.\n• Nog steeds werkend — oudste planetarium ter wereld + UNESCO.\n\n**Eduard Douwes Dekker / Multatuli** *(1820-1887)*:\n• **'Max Havelaar'** *(1860)* — boek tegen NL-koloniaal beleid.\n• Veranderde publieke opinie over Nederlands-Indië.\n\n**Anne Frank** *(1929-1945)*:\n• Bekendste joods slachtoffer van WO2 in NL.\n• Dagboek vertaald in 70+ talen.\n• Achterhuis Prinsengracht 263 = museum.\n\n**Anton Mussert** *(1894-1946)*:\n• Leider van **NSB** *(pro-nazi-partij)* tijdens WO2.\n• Veroordeeld + geëxecuteerd na oorlog.\n• Geschiedenis-vraag — kant van **bezetters/foute keuze**.\n\n**Soekarno, Hatta** *(Indonesische leiders)*:\n• Niet NL maar belangrijk voor NL-geschiedenis.\n• Riepen onafhankelijkheid Indonesië uit *(1945)* — NL erkende pas 1949.\n\n**Cito-feitje**:\nNederlandse **Nobelprijs-winnaars**: **20+** door geschiedenis. Bekende: **Christiaan Eijkman** *(geneeskunde 1929, ontdekking vitamine B1)*, **Jan Tinbergen** *(economie 1969)*, **Frits Zernike** *(natuurkunde 1953, fasecontrastmicroscoop)*.",
    checks: [
      {
        q: "Wie is **Erasmus**?",
        options: ["Beroemde humanist + filosoof Rotterdam", "Schilder", "Voetballer", "Politicus"],
        answer: 0,
        wrongHints: [null, "Klopt — 1466-1536.", "Rembrandt.", "Modern.", "Niet."],
      },
      {
        q: "Wie was **Willem van Oranje**?",
        options: ["Leider Tachtigjarige Oorlog + Vader des Vaderlands", "Voetballer", "Schilder", "Astronaut"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Modern.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was hij?", tekst: "**Willem van Oranje** (1533-1584) was een edelman die de leiding nam in de **opstand tegen Spanje** (1568-1648, ook bekend als de Tachtigjarige Oorlog)." },
            { titel: "Waarom 'Vader des Vaderlands'?", tekst: "Hij begon de Nederlandse onafhankelijkheidsstrijd. Daarom zien Nederlanders hem als oprichter van NL als zelfstandig land. Het Wilhelmus (volkslied) gaat over hem." },
            { titel: "Vermoord 1584", tekst: "In **Delft** werd hij doodgeschoten door **Balthasar Gerards**. Eerste politieke moord met vuurwapen ter wereld. Hij werd begraven in de **Nieuwe Kerk Delft** — waar nu nog de koninklijke familie begraven wordt." },
          ],
          woorden: [
            { woord: "Willem van Oranje", uitleg: "Leider opstand tegen Spanje, Vader des Vaderlands." },
            { woord: "Tachtigjarige Oorlog", uitleg: "1568-1648: NL-onafhankelijkheid van Spanje." },
            { woord: "Wilhelmus", uitleg: "NL-volkslied, geschreven over Willem van Oranje (oudst volkslied ter wereld)." },
          ],
          theorie: "Cito-feit: Willem van Oranje zit in **Tijdvak 6** van NL-canon (Tijd van ontdekkers en hervormers). Hij gaf 'Oranje' aan koninklijk huis Oranje-Nassau (huidige koning Willem-Alexander stamt af).",
          voorbeelden: [
            { type: "stap", tekst: "Wilhelmus-tekst: 'Wilhelmus van Nassouwe ben ik van Duitsen bloed...'" },
            { type: "stap", tekst: "Koningsdag wordt gevierd op 27 april — verjaardag huidige koning, niet Willem van Oranje zelf." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Oranje = vorstenhuis NL = afstamming Willem van Oranje. Geboren in Duitsland (Dillenburg) maar werd Nederlands held." }],
          niveaus: {
            basis: "Willem van Oranje = leider opstand tegen Spanje + Vader des Vaderlands.",
            simpeler: "Eerste 'leider' van Nederland, vermoord in Delft 1584.",
            nogSimpeler: "Vader des Vaderlands.",
          },
        },
      },
      {
        q: "Wie zag **bacteriën** als eerste?",
        options: ["Antoni van Leeuwenhoek (microscoop, Delft)", "Huygens", "Cruijff", "Mussert"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Astronoom.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was hij?", tekst: "**Antoni van Leeuwenhoek** (1632-1723) was een lakenkoopman uit **Delft**. Hij was geen wetenschapper van opleiding, maar bouwde zelf **microscopen** uit nieuwsgierigheid." },
            { titel: "Wat ontdekte hij?", tekst: "Met zijn beste microscoop (270x vergroting!) zag hij als eerste mens **bacteriën** + **spermacellen** + andere mini-leven. Hij noemde ze 'kleine diertjes'." },
            { titel: "Onthouden", tekst: "Hij stuurde brieven naar de Royal Society in Londen. Daarom is hij wereldberoemd als 'vader van de microbiologie'. Sterk Nederlands-Engels samenspel in 1600s." },
          ],
          woorden: [
            { woord: "microscoop", uitleg: "Apparaat om iets HEEL klein groot te zien." },
            { woord: "microbiologie", uitleg: "Wetenschap van micro-organismen (bacteriën, virussen, schimmels)." },
          ],
          theorie: "Cito-tip: van Leeuwenhoek is een NL-trots-figuur. Hij toonde dat er een onzichtbare wereld bestaat — basis voor moderne medische wetenschap. Pasteur bouwde later voort (vaccins).",
          voorbeelden: [
            { type: "stap", tekst: "Eerste keer dat een mens een bacterie zag: rond 1675." },
            { type: "stap", tekst: "Niet verwarren: HUYGENS (Christiaan) = astronoom + uitvinder slingerklok. Andere NL-wetenschapper." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Van Leeuwenhoek + Delft + microscoop = de combinatie. Christiaan Huygens = klok + ringen Saturnus." }],
          niveaus: {
            basis: "Van Leeuwenhoek (Delft) zag als eerste bacteriën via zelfgebouwde microscoop.",
            simpeler: "Lakenkoopman uit Delft = vader van microbiologie.",
            nogSimpeler: "Van Leeuwenhoek = microscoop + bacteriën.",
          },
        },
      },
      {
        q: "Wie ontsnapte uit **boekenkist Slot Loevestein**?",
        options: ["Hugo de Groot (1621)", "Erasmus", "Vondel", "Mussert"],
        answer: 0,
        wrongHints: [null, "Klopt — beroemd verhaal.", "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Sport + ontdekkingen + wetenschappers",
    explanation:
      "**Beroemde NL-ontdekkers + reizigers**:\n\n**Willem Barentsz** *(1550-1597)*:\n• Zocht **noordoostelijke route** naar Azië.\n• Strandde op **Nova Zembla** *(Russisch eiland)*.\n• Overwinterde in 'Het Behouden Huys'.\n• Stierf op terugreis.\n• **Barentsz-zee** *(boven Rusland)* genoemd.\n\n**Abel Tasman** *(1603-1659)*:\n• Voor VOC ontdekte **Tasmanië + Nieuw-Zeeland** *(1642)*.\n\n**Jan van Riebeeck** *(1619-1677)*:\n• Stichter van **Kaapstad** *(Zuid-Afrika)* in 1652 voor VOC.\n• Begin NL-kolonie *(Afrikaans = NL-dialect)*.\n\n**Anthony Fokker** *(1890-1939)*:\n• **Vliegtuig-bouwer**.\n• Beroemde Fokker-fabriek.\n• Fokker-Dr.I vliegtuig in WO1.\n• Rode Baron *(Manfred von Richthofen)* vloog Fokker.\n• In NL Fokker tot 1996.\n\n**SPORT — Voetbal** ⚽:\n\n**Johan Cruijff** *(1947-2016)*:\n• **Grootste NL-voetballer** ooit.\n• 'Hollandse School'-voetbal.\n• Speelde Ajax + FC Barcelona + Feyenoord.\n• Drie keer **Gouden Bal** *(1971, 1973, 1974)*.\n• Coach van legendarisch FC Barcelona-Dream Team *(1988-1996)*.\n• Beroemd om uitspraken: *'Je gaat het pas zien als je het door hebt.'*\n• Cruijff-passenstijl + #14-shirt.\n\n**Marco van Basten** *(1964+)*:\n• Topscorer Ajax + AC Milan.\n• **Europees kampioen** met NL *(1988)*.\n• Drie keer **Gouden Bal**.\n• Bekend om **iconische volley** tegen USSR-finale 1988.\n\n**Ruud Gullit** *(1962+)*:\n• Aanvoerder Oranje 1988.\n• Gouden Bal 1987.\n• Eerste zwarte voetballer als Gouden Bal-winner.\n\n**Frank de Boer, Patrick Kluivert, Edgar Davids, Marc Overmars** — andere helden.\n\n**Recent**:\n• **Virgil van Dijk** *(verdediger Liverpool, kapitein Oranje)*.\n• **Frenkie de Jong** *(midden, Barcelona)*.\n• **Vivianne Miedema** *(vrouwen-topscorer Arsenal)*.\n• **Memphis Depay** *(aanvaller)*.\n\n**SPORT — Andere**:\n\n**Schaatsen**:\n• **Sven Kramer**: 4 olympisch goud.\n• **Ireen Wüst**: meest gedecoreerde NL-atleet ooit *(13 medailles)*.\n• **Yvonne van Gennip**: 3 goud 1988 *(Calgary)*.\n\n**Tennis**:\n• **Martina Hingis** — niet NL, even denken — **Richard Krajicek** *(1971+)*: Wimbledon-winner 1996.\n• **Krajicek**.\n• **Kiki Bertens** *(1991+)*: top-10 vrouwen-tennis.\n\n**Boksen**:\n• **Lucia Rijker**.\n• **Bep van Klaveren** *(historisch — Olympische bokser 1928)*.\n\n**Wielrennen**:\n• **Joop Zoetemelk** *(Tour-winnaar 1980)*.\n• **Annemiek van Vleuten + Anna van der Breggen** *(vrouwen)*.\n• **Tom Dumoulin** *(Giro-winnaar 2017)*.\n• **Mathieu van der Poel** *(allround topfietser)*.\n\n**Atletiek**:\n• **Fanny Blankers-Koen** *(1918-2004)*: 4 goud OS 1948 — beste atlete ooit.\n• **Sifan Hassan** *(1993+)*: olympisch marathon-goud 2024 Parijs.\n• **Femke Bol** *(2000+)*: huidige top-400m horden.\n\n**Formule 1**:\n• **Max Verstappen** *(1997+)*: **3x wereldkampioen** *(2021, 2022, 2023, ook 2024)*.\n• Vader **Jos Verstappen** ook F1.\n\n**Wetenschap (modern)**:\n\n**Tim Krabbé, Hella Haasse, Cees Nooteboom** — schrijvers.\n• **Connie Palmen** — eigentijds.\n\n**Christiaan Eijkman** *(1858-1930)*:\n• Nobelprijs 1929.\n• Ontdekte oorzaak **beriberi-ziekte** *(vitamine B1-tekort)*.\n• Werkte in Nederlands-Indië.\n\n**Jan Tinbergen** *(1903-1994)*:\n• Eerste **economie-Nobelprijs** *(1969)*.\n• Econometrie.\n\n**Niek Wolters, Robbert Dijkgraaf** *(wetenschappers, recent)*.\n\n**Cito-feitje**:\n**Mata Hari** *(1876-1917)* was **danseres + (spion?)** van Friesland. Geboren als Margaretha Geertruida Zelle in Leeuwarden. Werd gefusilleerd door Frankrijk 1917 als Duitse spion in WO1. Vandaag onduidelijk of ze echt spioneerde of slachtoffer was van schandaal.",
    checks: [
      {
        q: "Wie is **grootste NL-voetballer** ooit?",
        options: ["Johan Cruijff (3x Gouden Bal)", "Verstappen", "Cruyff junior", "Memphis"],
        answer: 0,
        wrongHints: [null, "Klopt — overleden 2016.", "F1.", "Niet zo bekend.", "Modern."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Cruijff?", tekst: "**Johan Cruijff** (1947-2016) was een NL-voetballer die wereldberoemd werd om zijn techniek + creativiteit. Speelde bij **Ajax** + **FC Barcelona** + Feyenoord." },
            { titel: "3x Gouden Bal", tekst: "De **Gouden Bal** is de prijs voor de **beste voetballer van Europa per jaar**. Cruijff won hem 3 keer (1971, 1973, 1974). Bijna niemand wint hem 3x." },
            { titel: "Cruijff-school", tekst: "Hij was niet alleen speler maar ook **denker**. Bedacht 'totaalvoetbal'. Later coach FC Barcelona (1988-1996, 'Dream Team'). Beïnvloedt voetbal nog steeds." },
          ],
          woorden: [
            { woord: "Gouden Bal", uitleg: "Prijs voor beste voetballer Europa per jaar." },
            { woord: "totaalvoetbal", uitleg: "NL-stijl: spelers wisselen van positie, alles aanvallen." },
          ],
          theorie: "Cito-feit: Cruijff was niet alleen sport-icoon maar cultureel symbool. Beroemde uitspraken: 'Je gaat het pas zien als je het door hebt'. Stierf 2016 aan longkanker.",
          voorbeelden: [
            { type: "stap", tekst: "Cruijff #14-shirt = legendarisch, wordt nu niet meer gegeven bij Ajax." },
            { type: "stap", tekst: "Andere 3x Gouden Bal-winnaars: Lionel Messi (Argentinië), Marco van Basten (NL)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Cruijff = #14 = grootste NL-voetballer. Niet verwarren met zoon Jordi Cruijff (ook voetballer, minder bekend)." }],
          niveaus: {
            basis: "Johan Cruijff = grootste NL-voetballer (3x Gouden Bal).",
            simpeler: "Cruijff van Ajax + Barcelona, drie keer beste van Europa.",
            nogSimpeler: "Cruijff = grootste.",
          },
        },
      },
      {
        q: "Wie won **Tour de France 1980**?",
        options: ["Joop Zoetemelk", "Tom Dumoulin", "Van Vleuten", "Cruijff"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Giro.", "Vrouwen.", "Voetbal."],
      },
      {
        q: "**3x wereldkampioen F1** Nederlander?",
        options: ["Max Verstappen (2021-2023, 2024)", "Jos Verstappen", "Cruijff", "Geen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Vader, geen titel.", "Voetbal.", "Wel."],
      },
      {
        q: "**Meeste medailles** NL ooit?",
        options: ["Ireen Wüst (13 schaatsen)", "Verstappen", "Cruijff", "Sven Kramer"],
        answer: 0,
        wrongHints: [null, "Klopt.", "F1 wel maar geen OS-medaille.", "Niet.", "Iets minder."],
      },
    ],
  },
  {
    title: "Moderne bekendheden — politiek + cultuur",
    explanation:
      "**Politici** *(moderne tijd)*:\n\n**Koning Willem-Alexander** *(1967+)*:\n• Sinds **30 april 2013** koning.\n• Eerste man-koning sinds 1890.\n• Studeerde geschiedenis Leiden.\n• Vliegt soms zelf KLM-vluchten als hobby-piloot.\n\n**Koningin Máxima** *(1971+)*:\n• Uit **Argentinië**.\n• Trouwde Willem-Alexander 2002.\n• Werkt actief voor financial inclusion (VN).\n\n**Mark Rutte** *(1967+)*:\n• Premier NL **2010-2024** *(langste regerend premier ooit, 14 jaar)*.\n• VVD-leider.\n• 4 kabinetten Rutte.\n• Bekend om sobere stijl *(eet appel op werk, fiets naar Binnenhof)*.\n• Stopte 2024 om **NAVO-secretaris-generaal** te worden.\n\n**Dick Schoof** *(1957+)*:\n• Huidige premier sinds **juli 2024**.\n• Eerst NCTV-baas *(terrorismebestrijding)*.\n• Niet uit politieke partij.\n\n**Geert Wilders** *(1963+)*:\n• PVV-leider.\n• Won verkiezingen **2023** met 37 zetels.\n• Bekend om strenge migratie-standpunten.\n\n**Frans Timmermans** *(1961+)*:\n• PvdA-GL leider.\n• Was Eurocommissaris Klimaat.\n\n**Eerdere premiers**:\n• **Wim Kok** *(1994-2002, PvdA)*.\n• **Jan Peter Balkenende** *(2002-2010, CDA)*.\n• **Ruud Lubbers** *(1982-1994, CDA, 12 jaar)*.\n\n**Acteurs + films**:\n\n**Carice van Houten** *(1976+)*:\n• Bekend door **Game of Thrones** *(Melisandre)*.\n• Vele NL-films + internationale rollen.\n\n**Famke Janssen** *(1964+)*:\n• Hollywood-actrice.\n• **X-Men** *(Jean Grey)*, **GoldenEye** *(Bond-vrouw)*.\n\n**Anne-Marie van Bemmel, Theo Maassen, Najib Amhali** — cabaret.\n\n**Paul Verhoeven** *(1938+)*:\n• Regisseur *(Hollywood)*.\n• **Robocop, Total Recall, Basic Instinct, Starship Troopers**.\n• Recent **'Elle'** *(Frans, met Isabelle Huppert)*.\n\n**Anton Corbijn** *(1955+)*:\n• Fotograaf + regisseur.\n• Foto's van U2, Depeche Mode, Joy Division.\n• Films 'Control' + 'A Most Wanted Man'.\n\n**Muziek (modern)**:\n\n**André Hazes Sr.** *(1951-2004)*:\n• 'Bloed, Zweet en Tranen', 'Een Beetje Verliefd'.\n• Stierf jong na alcoholisme.\n\n**André Hazes Jr.** *(1994+)*:\n• Zoon.\n• Volgt voetstappen vader.\n\n**Marco Borsato, Anouk, Davina Michelle**.\n\n**Volendam-erfgoed**: Jan Smit, Nick & Simon, Karin & Kim.\n\n**DJ's** *(NL wereldtop)*:\n• **Tiësto, Armin van Buuren, Hardwell, Martin Garrix, Afrojack** — wereldwijd top-10 lijsten.\n• Nederland is **DJ-grootmacht** door Amsterdam Music Festival + electronic-cultuur.\n\n**TV-bekendheden**:\n• **Linda de Mol** *(presentator, eigen tijdschrift)*.\n• **Matthijs van Nieuwkerk** *(DWDD-presentator)*.\n• **Jeroen Pauw + Eva Jinek** *(talkshows)*.\n\n**Influencers + youtubers**:\n• **Enzo Knol** *(YouTube-gamer)*.\n• **NikkieTutorials** *(make-up)*.\n• **StukTV, Concentrate**.\n\n**Bekende NL-bedrijfsoprichters**:\n• **Anton Philips** *(Philips, gloeilampen, Eindhoven)*.\n• **Gerard Heineken** *(bier)*.\n• **Albert Heijn** *(supermarkten)*.\n• **Jaap Stam (?), Karel van Eerden (Albert Heijn)**.\n• **Ben Verwaayen** *(BT)*.\n• **Boyan Slat** *(young, Ocean Cleanup — opruimen plastic in zee)*.\n\n**Boyan Slat** *(1994+)*:\n• Bedacht systeem om plastic uit oceaan op te ruimen.\n• Begon op 16 jaar met idee.\n• Nu wereldwijd actief.\n• Echt cool — laat zien dat jongeren grote impact kunnen hebben.\n\n**Cito-feitje**:\nIn **2024** was er **wereldwijd** veel aandacht voor NL door **Eurovisie-finale Malmö** *(Joost Klein vertegenwoordigde NL met 'Europapa' maar werd gediskwalificeerd door incident)*. Spannende editie.",
    checks: [
      {
        q: "Wie was **premier 2010-2024**?",
        options: ["Mark Rutte (VVD, langste ooit)", "Dick Schoof", "Wim Kok", "Balkenende"],
        answer: 0,
        wrongHints: [null, "Klopt — 14 jaar.", "Sinds juli 2024.", "Eerder.", "Eerder."],
      },
      {
        q: "Sinds welk jaar **Willem-Alexander** koning?",
        options: ["30 april 2013", "2000", "2020", "1980"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Beatrix."],
      },
      {
        q: "Wie regisseerde **Robocop + Basic Instinct**?",
        options: ["Paul Verhoeven", "Anton Corbijn", "Carice van Houten", "Tarantino"],
        answer: 0,
        wrongHints: [null, "Klopt — NL → Hollywood.", "Music-films.", "Actrice.", "Amerikaan."],
      },
      {
        q: "Wie begon **Ocean Cleanup**?",
        options: ["Boyan Slat (16 jr begin)", "Mark Rutte", "Verstappen", "Cruijff"],
        answer: 0,
        wrongHints: [null, "Klopt — jonge held.", "Politicus.", "F1.", "Voetbal."],
      },
    ],
  },
  {
    title: "Eind-toets — NL'ers mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wie was **Vader des Vaderlands**?", options: ["Willem van Oranje", "Erasmus", "Cruijff", "Rutte"], answer: 0, wrongHints: [null, "Klopt — 1533-1584.", "Humanist.", "Voetbal.", "Modern."] },
      { q: "Wie maakte **microscoop** als eerste?", options: ["Antoni van Leeuwenhoek", "Huygens", "Eisinga", "Mussert"], answer: 0, wrongHints: [null, "Klopt — Delft, 17e eeuw.", "Andere wetenschap.", "Andere wetenschap.", "Niet."] },
      { q: "**Grootste voetballer** NL ooit?", options: ["Johan Cruijff", "Verstappen", "Rutte", "Erasmus"], answer: 0, wrongHints: [null, "Klopt.", "F1.", "Politiek.", "Filosoof."] },
      { q: "**Premier NL** 2010-2024?", options: ["Mark Rutte (langste ooit)", "Wim Kok", "Lubbers", "Balkenende"], answer: 0, wrongHints: [null, "Klopt.", "Eerder.", "Eerder.", "Eerder."] },
      { q: "Wie ontwierp **Fokker-vliegtuigen**?", options: ["Anthony Fokker", "Slat", "Cruijff", "Verstappen"], answer: 0, wrongHints: [null, "Klopt.", "Ocean Cleanup.", "Voetbal.", "F1."] },
      { q: "Wie was **eerste man-koning** NL sinds 1890?", options: ["Willem-Alexander (2013)", "Beatrix", "Juliana", "Wilhelmina"], answer: 0, wrongHints: [null, "Klopt — vóór hem ~123 jaar koninginnen.", "Te recent gekroond.", "Eerder maar nog steeds een koningin.", "Begin 20e eeuw."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const bekendeNederlandersPo = {
  id: "bekende-nederlanders-po",
  title: "Bekende Nederlanders (Cito groep 6-8)",
  emoji: "📜",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / cultuur",
  prerequisites: [
    { id: "tijdvakken-nederland-po", title: "Tijdvakken NL", niveau: "1F" },
  ],
  intro:
    "Bekende Nederlanders voor Cito groep 6-8 — historisch (Erasmus/Willem van Oranje/Hugo de Groot/Leeuwenhoek/Huygens/Eisinga) + sport (Cruijff/Van Basten/Kramer/Wüst/Verstappen) + modern (Willem-Alexander/Rutte/Boyan Slat) + films/muziek (Verhoeven/Hazes/DJ's). Sluit op tijdvakken-NL. ~15 min.",
  triggerKeywords: [
    "Nederlander", "beroemde Nederlanders",
    "Erasmus", "Willem van Oranje", "Hugo de Groot",
    "Leeuwenhoek", "Huygens", "Eisinga",
    "Multatuli",
    "Cruijff", "Van Basten", "Verstappen", "Sven Kramer",
    "Willem-Alexander", "Maxima",
    "Mark Rutte", "Dick Schoof",
    "Boyan Slat", "Ocean Cleanup",
    "Paul Verhoeven", "Anton Corbijn",
    "Anne Frank", "Mata Hari",
  ],
  chapters,
  steps,
};

export default bekendeNederlandersPo;
