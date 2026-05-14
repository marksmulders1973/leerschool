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
        wrongHints: [null, "Rembrandt.", "Modern.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Erasmus?", tekst: "**Desiderius Erasmus van Rotterdam** (1466-1536) was een NL **humanist** en **filosoof**. Hij wordt vaak gezien als de slimste Nederlander ooit." },
            { titel: "Wat schreef hij?", tekst: "Zijn beroemdste boek heet **'Lof der Zotheid'** (1511) — een satirisch werk waarin de godin 'Zotheid' zelf praat. Hij gebruikte humor om kritiek te leveren op de kerk en de elite van zijn tijd." },
            { titel: "Waarom belangrijk?", tekst: "Erasmus stond voor **vrij denken** + **onderzoek** + **internationaal contact**. De **Erasmus Universiteit Rotterdam** + Europees Erasmus-uitwisselingsprogramma zijn naar hem genoemd. Een soort vader-figuur voor moderne Europese cultuur." },
          ],
          woorden: [
            { woord: "humanist", uitleg: "Iemand die de mens centraal stelt + onderzoek/rede waardeert." },
            { woord: "filosoof", uitleg: "Iemand die nadenkt over grote levensvragen + denken zelf." },
          ],
          theorie: "Cito-tip Erasmus-koppelingen: **Rotterdam** + **Lof der Zotheid** + **humanisme** + **1466-1536**. Zit in tijdvak 5 (Tijd van ontdekkers + hervormers) van de NL-canon.",
          voorbeelden: [
            { type: "stap", tekst: "Het Erasmus-uitwisselingsprogramma laat NL-studenten in een ander EU-land studeren. Vernoemd naar hem omdat hij zelf door Europa reisde." },
            { type: "stap", tekst: "Erasmus en Maarten Luther kenden elkaar (allebei 1500s-denkers) maar Erasmus bleef rooms-katholiek terwijl Luther de reformatie startte." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Erasmus = boeken-denker uit Rotterdam, 1500. Niet verwarren met schilders (Rembrandt = 1600, Amsterdam) of moderne mensen." }],
          niveaus: {
            basis: "Erasmus = humanist + filosoof uit Rotterdam. = A.",
            simpeler: "Beroemde NL-denker (1466-1536) die het boek 'Lof der Zotheid' schreef. = A.",
            nogSimpeler: "Filosoof uit Rotterdam = A.",
          },
        },
      },
      {
        q: "Wie was **Willem van Oranje**?",
        options: ["Leider Tachtigjarige Oorlog + Vader des Vaderlands", "Voetballer", "Schilder", "Astronaut"],
        answer: 0,
        wrongHints: [null, "Modern.", "Niet.", "Niet."],
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
        wrongHints: [null, "Astronoom.", "Niet.", "Niet."],
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
        wrongHints: [null, "Filosoof, ander tijdperk.", "Toneeldichter, geen gevangene.", "WO2-tijdperk, anders."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Hugo de Groot?", tekst: "**Hugo de Groot** (1583-1645) was een Nederlandse **jurist** + **filosoof**. Wordt vaak 'Vader van het internationaal recht' genoemd — zijn boeken gelden nog vandaag als basis." },
            { titel: "Waarom in de gevangenis?", tekst: "Hij kwam in conflict met **Maurits van Oranje** over religieuze + politieke kwesties. In **1619** werd hij veroordeeld tot **levenslang** + opgesloten in **Slot Loevestein** (kasteel bij Gorinchem)." },
            { titel: "De boekenkist-truc (1621)", tekst: "Zijn vrouw **Maria van Reigersberch** bedacht een list: ze stuurde regelmatig een grote kist met boeken naar het slot. Op een dag verstopte Hugo zich in die kist + ontsnapte. Vluchtte naar Parijs. Het meest beroemde ontsnappings-verhaal van NL." },
          ],
          woorden: [
            { woord: "Slot Loevestein", uitleg: "Kasteel bij Gorinchem, vroeger gevangenis voor 'staatsgevangenen'." },
            { woord: "Hugo de Groot", uitleg: "NL-jurist + filosoof, vader internationaal recht." },
          ],
          theorie: "Cito-feit Hugo de Groot:\n• Boek **'De jure belli ac pacis'** (1625) — basis volkenrecht.\n• Stierf bij schipbreuk 1645 in Rostock.\n• Standbeeld in **Delft**.\n• Boekenkist nu te zien in Rijksmuseum.",
          voorbeelden: [
            { type: "stap", tekst: "De originele boekenkist staat in het Rijksmuseum (Amsterdam) + Slot Loevestein zelf — verhaal blijft populair." },
            { type: "stap", tekst: "Erasmus stierf 1536 = vóór Hugo de Groot. Vondel was toneeldichter (Gijsbreght van Aemstel), niet gevangene. Mussert was WO2 (NSB)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Boekenkist + Slot Loevestein + 1621 = Hugo de Groot. Beroemd ontsnappingsverhaal." }],
          niveaus: {
            basis: "Hugo de Groot. = A.",
            simpeler: "Hugo de Groot ontsnapte 1621 uit Slot Loevestein verborgen in een boekenkist die zijn vrouw stuurde. = A.",
            nogSimpeler: "Hugo de Groot = A.",
          },
        },
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
        wrongHints: [null, "F1.", "Niet zo bekend.", "Modern."],
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
        wrongHints: [null, "Giro.", "Vrouwen.", "Voetbal."],
      },
      {
        q: "**3x wereldkampioen F1** Nederlander?",
        options: ["Max Verstappen (2021-2023, 2024)", "Jos Verstappen", "Cruijff", "Geen"],
        answer: 0,
        wrongHints: [null, "Vader, geen titel.", "Voetbal.", "Wel."],
      },
      {
        q: "**Meeste medailles** NL ooit?",
        options: ["Ireen Wüst (13 schaatsen)", "Verstappen", "Cruijff", "Sven Kramer"],
        answer: 0,
        wrongHints: [null, "F1 wel maar geen OS-medaille.", "Niet.", "Iets minder."],
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
        wrongHints: [null, "Sinds juli 2024.", "Eerder.", "Eerder."],
      },
      {
        q: "Sinds welk jaar **Willem-Alexander** koning?",
        options: ["30 april 2013", "2000", "2020", "1980"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Beatrix."],
      },
      {
        q: "Wie regisseerde **Robocop + Basic Instinct**?",
        options: ["Paul Verhoeven", "Anton Corbijn", "Carice van Houten", "Tarantino"],
        answer: 0,
        wrongHints: [null, "Music-films.", "Actrice.", "Amerikaan."],
      },
      {
        q: "Wie begon **Ocean Cleanup**?",
        options: ["Boyan Slat (16 jr begin)", "Mark Rutte", "Verstappen", "Cruijff"],
        answer: 0,
        wrongHints: [null, "Politicus.", "F1.", "Voetbal."],
        uitlegPad: {
          stappen: [
            { titel: "Wie is Boyan Slat?", tekst: "**Boyan Slat** (geboren 1994) is een **Nederlandse uitvinder**. Op zijn **16e** kreeg hij tijdens een duik-vakantie in Griekenland het idee om **plastic uit de oceaan** te halen." },
            { titel: "De Ocean Cleanup", tekst: "In 2013 (Boyan was 18) richtte hij **The Ocean Cleanup** op. Doel: drijvende systemen ontwikkelen die plastic uit de Stille Oceaan + rivieren halen vóór het zee bereikt." },
            { titel: "Waarom inspirerend voor kinderen", tekst: "Hij toont dat **jongeren grote problemen kunnen aanpakken**. Begon met €200.000 crowdfunding, nu wereldwijd actief in 5 oceanen + 30 rivieren. **Tedx-talk** met miljoenen views maakte 'm beroemd." },
          ],
          woorden: [
            { woord: "Boyan Slat", uitleg: "NL-uitvinder Ocean Cleanup, geb. 1994." },
            { woord: "Ocean Cleanup", uitleg: "NL-organisatie die plastic uit zeeën en rivieren haalt." },
          ],
          theorie: "Cito-feit Boyan Slat:\n• Geboren **Delft**, 1994.\n• Hoort niet bij een politieke partij of bedrijf — eigen non-profit.\n• Won **VN-Champions of the Earth Award** (2014).\n• Mooi voorbeeld van een jonge NL'er met wereldimpact.",
          voorbeelden: [
            { type: "stap", tekst: "Ocean Cleanup System 001 + 002 = drijvende installaties die plastic 'vangen' in een grote boog. Wordt steeds verbeterd." },
            { type: "stap", tekst: "Ook **Interceptor** = boot die plastic uit rivieren vist vóór het in zee komt. 80% van plastic in oceaan komt uit ~1000 rivieren." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Modern jong NL-held = Boyan Slat. Niet verwarren met politiek (Rutte) of sport (Verstappen/Cruijff). Slat = ocean + plastic." }],
          niveaus: {
            basis: "Boyan Slat. = A.",
            simpeler: "Jonge NL-uitvinder die op zijn 16e Ocean Cleanup bedacht om plastic uit zee te halen. = A.",
            nogSimpeler: "Boyan Slat = A.",
          },
        },
      },
    ],
  },
  {
    title: "Eind-toets — NL'ers mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wie was **Vader des Vaderlands**?", options: ["Willem van Oranje", "Erasmus", "Cruijff", "Rutte"], answer: 0, wrongHints: [null, "Humanist.", "Voetbal.", "Modern."] },
      { q: "Wie maakte **microscoop** als eerste?", options: ["Antoni van Leeuwenhoek", "Huygens", "Eisinga", "Mussert"], answer: 0, wrongHints: [null, "Andere wetenschap.", "Andere wetenschap.", "Niet."] },
      { q: "**Grootste voetballer** NL ooit?", options: ["Johan Cruijff", "Verstappen", "Rutte", "Erasmus"], answer: 0, wrongHints: [null, "F1.", "Politiek.", "Filosoof."] },
      { q: "**Premier NL** 2010-2024?", options: ["Mark Rutte (langste ooit)", "Wim Kok", "Lubbers", "Balkenende"], answer: 0, wrongHints: [null, "Eerder.", "Eerder.", "Eerder."] },
      { q: "Wie ontwierp **Fokker-vliegtuigen**?", options: ["Anthony Fokker", "Slat", "Cruijff", "Verstappen"], answer: 0, wrongHints: [null, "Ocean Cleanup.", "Voetbal.", "F1."] },
      { q: "Wie was **eerste man-koning** NL sinds 1890?", options: ["Willem-Alexander (2013)", "Beatrix", "Juliana", "Wilhelmina"], answer: 0, wrongHints: [null, "Te recent gekroond.", "Eerder maar nog steeds een koningin.", "Begin 20e eeuw."] },
      {
        q: "Wie schreef **Max Havelaar** (1860) — boek tegen koloniale uitbuiting?",
        options: ["Multatuli (Eduard Douwes Dekker)", "Anne Frank", "Willem Frederik Hermans", "Annie M.G. Schmidt"],
        answer: 0,
        wrongHints: [null, "Andere periode — 2e Wereldoorlog dagboek.", "Andere generatie — na 1945.", "Kinderboeken (Jip & Janneke)."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Multatuli?", tekst: "**Multatuli** is het pseudoniem (= schuilnaam) van **Eduard Douwes Dekker** *(1820-1887)*. Werkte als bestuurder in Nederlands-Indië, zag uitbuiting van Javanen door koloniaal systeem." },
            { titel: "Wat is 'Max Havelaar'?", tekst: "Boek uit **1860**. Roman, gebaseerd op Dekker's eigen ervaring. Max Havelaar is de hoofdpersoon — koloniaal bestuurder die zich verzet tegen onrecht. Schokte Nederland en startte het debat over Indonesische onafhankelijkheid." },
            { titel: "Cito-feitje", tekst: "Pseudoniem 'Multatuli' komt uit Latijn: 'multa tuli' = 'ik heb veel gedragen'. Belangrijk schoolvak: dit is **één van de bekendste NL-boeken ooit** en wordt vaak getoetst. Heden ten dage is 'Max Havelaar' ook het Fair-Trade-keurmerk-logo (zelfde naam)." },
          ],
          woorden: [
            { woord: "pseudoniem", uitleg: "Andere naam waaronder een schrijver/artiest publiceert." },
            { woord: "Nederlands-Indië", uitleg: "Nederlandse kolonie (1816-1945), nu Indonesië." },
            { woord: "koloniaal systeem", uitleg: "Land bezet en uitbuit een ander land. NL deed dit eeuwenlang in Indonesië, Suriname, Caribische eilanden." },
          ],
          theorie: "Belangrijke NL-schrijvers per tijdvak:\n• 1600 — **P.C. Hooft** (Gouden Eeuw poëzie)\n• 1700 — **Justus van Effen** (essay)\n• 1860 — **Multatuli** (Max Havelaar, koloniale kritiek)\n• 1947 — **Anne Frank** (dagboek, WO2)\n• 1950-2000 — **Willem Frederik Hermans, Reve, Mulisch** (Grote Drie)\n• Kinderboeken NL: **Annie M.G. Schmidt** (Jip & Janneke, Pluk)",
          voorbeelden: [
            { type: "feit", tekst: "Multatuli wordt vaak vergeleken met 'Uncle Tom's Cabin' uit Amerika — beide boeken over kolonialisme/slavernij die de publieke opinie veranderden." },
          ],
          basiskennis: [{ onderwerp: "Niet Anne Frank", uitleg: "Anne Frank schreef DAGBOEK (1942-1944), niet een roman. Andere periode (WO2)." }],
          niveaus: { basis: "Multatuli. = A.", simpeler: "Multatuli is de schuilnaam van Eduard Douwes Dekker. Schreef Max Havelaar (1860) over uitbuiting Indonesië. = A.", nogSimpeler: "Multatuli = A." },
        },
      },
      {
        q: "**Boyan Slat** — wat doet hij?",
        options: ["Ocean Cleanup — plastic uit zeeën halen", "F1-coureur", "Voetballer", "Politicus"],
        answer: 0,
        wrongHints: [null, "Andere jongere — Max Verstappen.", "Andere sport.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wie is Boyan Slat?", tekst: "Boyan Slat (geboren **1994**) is een **Nederlandse uitvinder**. Begon **The Ocean Cleanup** op zijn 18e — bedrijf dat plastic uit oceanen verwijdert met grote drijvende systemen." },
            { titel: "Wat doet The Ocean Cleanup?", tekst: "• In **oceanen** (vooral Great Pacific Garbage Patch) — drijvende U-vormige systemen die plastic verzamelen\n• In **rivieren** — Interceptors vangen plastic voordat het de zee bereikt\n• 100+ rivieren wereldwijd in actie sinds 2019" },
            { titel: "Cito-feitje", tekst: "Slat is een **moderne Nederlandse held** — wordt vaak in Cito-onderwijs genoemd als voorbeeld van milieu-innovatie. Zijn TED-talk in 2012 (toen 18 jaar) ging viraal. In 2022 NL-Onderscheiding ontvangen." },
          ],
          woorden: [
            { woord: "Ocean Cleanup", uitleg: "Nederlandse non-profit, opgericht 2013. Doel: 90% plastic uit oceanen tegen 2040." },
            { woord: "Interceptor", uitleg: "Slat's rivierfilter — zonne-aangedreven schip dat plastic uit rivieren vist voor het zee bereikt." },
          ],
          theorie: "Beroemde moderne NL-vernieuwers:\n• **Boyan Slat** (1994) — Ocean Cleanup\n• **Bas Lansdorp** (1977) — Mars One initiatief\n• **Wouter Kaalverink** (architect duurzaam)\n• Diverse start-ups uit TU Delft / Eindhoven\nCito test vaak op 'wie deed wat?' bij moderne NL-figuren.",
          voorbeelden: [
            { type: "feit", tekst: "Ocean Cleanup heeft tot 2025+ ~330.000 kg plastic verwijderd uit Great Pacific Garbage Patch." },
          ],
          basiskennis: [{ onderwerp: "Jong + impact", uitleg: "Slat is voorbeeld van 'jong + grote impact'. Inspirerend voor Cito-leerlingen." }],
          niveaus: { basis: "Ocean Cleanup. = A.", simpeler: "Boyan Slat is Nederlandse uitvinder van The Ocean Cleanup — plastic uit oceanen halen. = A.", nogSimpeler: "Ocean Cleanup = A." },
        },
      },
      {
        q: "**Anne Frank** — wat is ze beroemd door?",
        options: ["Haar dagboek uit de onderduiktijd WO2", "Schilderingen", "Politiek leider", "Sport-prestaties"],
        answer: 0,
        wrongHints: [null, "Niet — was schoolmeisje.", "Niet — was joods slachtoffer, geen politicus.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Anne Frank?", tekst: "**Anne Frank** *(1929-1945)* was een **joods meisje** dat tijdens de Tweede Wereldoorlog ondergedoken zat in Amsterdam aan de **Prinsengracht 263** (nu Anne Frank Huis museum). Schreef daar haar dagboek." },
            { titel: "Het dagboek", tekst: "Schreef van haar 13e tot 15e in een rood-geblokt dagboekje. Gaf het de naam **'Kitty'** alsof ze een vriendin aansprak. Behandelt onderduikleven, gezinsproblemen, eerste liefde, hoop op vrijheid. Vader Otto Frank publiceerde het na de oorlog (1947)." },
            { titel: "Cito-feitje + erfgoed", tekst: "Het Anne Frank-dagboek is in **70+ talen** vertaald — een van de meest gelezen boeken ooit. Anne werd verraden in **augustus 1944**, gedeporteerd naar Bergen-Belsen waar ze begin **1945** stierf aan vlektyfus, vlak vóór de bevrijding. Symbool wereldwijd voor slachtoffers van de Holocaust." },
          ],
          woorden: [
            { woord: "onderduiken", uitleg: "Zich verbergen voor vervolging (in WO2 vooral joden voor nazi's)." },
            { woord: "Holocaust", uitleg: "Systematische moord op ~6 miljoen joden door nazi-Duitsland tijdens WO2." },
            { woord: "Achterhuis", uitleg: "Naam van Anne's dagboek-uitgave + naam van het schuilhuis." },
          ],
          theorie: "WO2 Nederland-kerntermen:\n• **1940 mei** — Duitse inval NL\n• **1941-1944** — vervolging joden, deportaties\n• **1944 'Hongerwinter'** — extreme honger in west-NL\n• **1945 mei** — bevrijding\n• ~104.000 NL-joden vermoord (75% van NL-joden vóór WO2)\n• Anne Frank = symbool voor allen die niet meer konden vertellen.",
          voorbeelden: [
            { type: "feit", tekst: "Anne Frank Huis is een van de meest bezochte musea NL (1+ miljoen bezoekers/jaar)." },
          ],
          basiskennis: [{ onderwerp: "Niet leider, slachtoffer", uitleg: "Anne was 13-15 jaar, geen politicus. Symbool door haar persoonlijk perspectief." }],
          niveaus: { basis: "Dagboek WO2. = A.", simpeler: "Anne Frank schreef dagboek tijdens onderduik in WO2 — joods meisje, vermoord in concentratiekamp 1945. = A.", nogSimpeler: "Dagboek = A." },
        },
      },
      {
        q: "**Max Verstappen** — beroemd om?",
        options: ["F1-coureur (wereldkampioen 2021-2024)", "Voetballer", "Tennisser", "Schaatsers"],
        answer: 0,
        wrongHints: [null, "Andere sport.", "Andere sport.", "Andere sport."],
        uitlegPad: {
          stappen: [
            { titel: "Wie is Max Verstappen?", tekst: "**Max Verstappen** (geboren **1997** in Hasselt, België) is een Nederlands-Belgische **Formule 1-coureur**. Rijdt sinds 2015 in de F1, tegenwoordig voor Red Bull Racing. Jongste F1-winnaar ooit (Spanje 2016, 18 jaar oud)." },
            { titel: "Wereldkampioen-jaren", tekst: "Verstappen werd **wereldkampioen F1 in 2021, 2022, 2023, 2024** — vier opeenvolgende titels. Sinds 2024 is hij **één van de meest succesvolle NL-sporters** ooit." },
            { titel: "Cito-feitje familie", tekst: "Max's vader is **Jos Verstappen** (ook ex-F1-coureur), moeder is **Sophie Kumpen** (Belgisch karting-talent). Reden waarom hij Nederlands EN Belgisch paspoort kreeg. Officieel rijdt hij voor **Nederland** (oranje shirt + Wilhelmus bij podium)." },
          ],
          woorden: [
            { woord: "Formule 1", uitleg: "Hoogste klasse autoraces wereldwijd. 20+ races per jaar, exclusief talent." },
            { woord: "wereldkampioen", uitleg: "Coureur met meeste punten over hele F1-seizoen." },
          ],
          theorie: "Grote NL-sporthelden modern (2000-heden):\n• **Max Verstappen** — F1 (4× WK)\n• **Sven Kramer** — schaatsen (3× Olympisch goud)\n• **Ireen Wüst** — schaatsen (meeste OS-medailles ooit, 13 stuks)\n• **Lieke Martens** — voetbal (WK-finale 2019)\n• **Robin van Persie** — voetbal (kop in WK 2014)\n• **Dafne Schippers** — atletiek (2× WK 200m)",
          voorbeelden: [
            { type: "feit", tekst: "Verstappen won zijn eerste race meteen bij zijn debuut voor Red Bull in 2016 — uniek in F1-historie." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen Cruijff", uitleg: "Bij 'grootste NL-sporter ooit' debatteren mensen: Cruijff (voetbal), Verstappen (F1), Wüst (schaatsen). Cito vraagt zelden 'wie is grootste' — wel 'wie won wat'." }],
          niveaus: { basis: "F1. = A.", simpeler: "Max Verstappen = Nederlandse F1-coureur, 4× wereldkampioen 2021-2024. = A.", nogSimpeler: "F1 = A." },
        },
      },
      { q: "**Willem van Oranje** leefde tijdens?", options: ["Tachtigjarige Oorlog (16e eeuw)","Tweede Wereldoorlog","Gouden Eeuw","Romeinen"], answer: 0, wrongHints: [null, "Veel later.", "Iets later — Gouden Eeuw is 17e eeuw.", "Veel eerder."] },
      { q: "Welke Nederlander is bekend van de **microscoop**?", options: ["Anton van Leeuwenhoek","Christiaan Huygens","Erasmus","Boyan Slat"], answer: 0, wrongHints: [null, "Astronoom en klokmaker.", "Filosoof.", "Plastic-soep-opruimer."] },
      { q: "**Boyan Slat** is bekend om?", options: ["Plastic uit oceanen halen","F1-races","Schaatsen","Politiek"], answer: 0, wrongHints: [null, "Andere persoon.", "Andere persoon.", "Andere persoon."] },
      { q: "Wie is huidige koning van NL (2026)?", options: ["Willem-Alexander","Beatrix","Juliana","Willem I"], answer: 0, wrongHints: [null, "Vorige.", "Eerder.", "Eerste."] },
      { q: "Wie is **koningin Máxima** geboren?", options: ["Argentinië","Nederland","Duitsland","België"], answer: 0, wrongHints: [null, "Wel woont nu.", "Niet.", "Niet."] },
      { q: "**Erasmus** was een?", options: ["Humanistische filosoof (1466-1536)","Politicus","Schilder","Atleet"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "Wie schreef *Max Havelaar*?", options: ["Multatuli","Vondel","Anne Frank","Annie M.G. Schmidt"], answer: 0, wrongHints: [null, "Andere periode.", "Andere.", "Niet."] },
      { q: "**Rembrandt** schilderde welk beroemd werk?", options: ["De Nachtwacht","Mona Lisa","Sterrennacht","Niet bekend"], answer: 0, wrongHints: [null, "Da Vinci.", "Van Gogh.", "Wel."] },
      { q: "**Vincent van Gogh** is bekend om welk werk?", options: ["De Zonnebloemen / Sterrennacht","Nachtwacht","Niet bekend","Anna Karenina"], answer: 0, wrongHints: [null, "Rembrandt.", "Wel beroemd.", "Niet schilder."] },
      { q: "**Cruijff** was beroemde NL-?", options: ["Voetballer","Politicus","Wetenschapper","Schaker"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "Wie was **Ann Schmidt** (afk. Annie M.G.)?", options: ["NL kinderboeken-schrijfster","Voetbalspeelster","Politicus","Niet bekend"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Wel."] },
      { q: "**Marga Klompé** was eerste vrouwelijke wat in NL?", options: ["Minister","Premier","Koningin","Bibliothecaris"], answer: 0, wrongHints: [null, "Nooit was er nog.", "Was koningin.", "Niet."] },
      { q: "Wie is huidige **premier** NL (2026)?", options: ["Dick Schoof","Mark Rutte","Wilders","Rutte"], answer: 0, wrongHints: [null, "Vorige.", "Politicus, geen premier.", "Vorige."] },
      { q: "Welke beroemde NL-schaatser?", options: ["Sven Kramer / Ireen Wüst","Cruijff","Rembrandt","Erasmus"], answer: 0, wrongHints: [null, "Voetbal.", "Schilder.", "Filosoof."] },
      { q: "**Vermeer** is bekend om?", options: ["Schilderij 'Meisje met de parel'","Wetenschap","Politiek","Sport"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "**Mata Hari** was een?", options: ["NL-danseres / spionne in WO1","Schilder","Wetenschapper","Politicus"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "Welke NL-zanger had hit *Bloed, Zweet en Tranen*?", options: ["André Hazes","Hazes jr.","Niet bekend","Niet bestaand"], answer: 0, wrongHints: [null, "Wel ook bekend.", "Wel.", "Wel."] },
      { q: "Wie won 2010 **Tour de France** (NL'er)?", options: ["Niet NL — wel Jan Janssen 1968","Cruijff","Niemand","Verstappen"], answer: 0, wrongHints: [null, "Voetbal.", "Wel.", "F1."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const bekendeNederlandersPo = {
  id: "bekende-nederlanders-po",
  title: "Bekende Nederlanders (Cito groep 6-8)",
  emoji: "📜",
  level: "groep6-8",
  subject: "geschiedenis",
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
