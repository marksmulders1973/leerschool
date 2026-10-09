// Leerpad: Spreekwoorden + uitdrukkingen — groep 6-8 taal/Cito.
// toetsvraag: figuurlijk taalgebruik vs letterlijk. Referentieniveau 1F-2F.
// 6 stappen.

const stepEmojis = ["💬", "🐱", "🌧️", "🎯", "📚", "🏆"];

const chapters = [
  { letter: "A", title: "Letterlijk vs figuurlijk", emoji: "💬", from: 0, to: 0 },
  { letter: "B", title: "Veel-gebruikte uitdrukkingen", emoji: "🐱", from: 1, to: 1 },
  { letter: "C", title: "Spreekwoorden", emoji: "🌧️", from: 2, to: 2 },
  { letter: "D", title: "Uitdrukking + situatie", emoji: "🎯", from: 3, to: 3 },
  { letter: "E", title: "Toets-strategie", emoji: "📚", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

const steps = [
  {
    title: "Letterlijk vs figuurlijk",
    explanation:
      "**Letterlijk** = de woorden betekenen precies wat er staat.\n**Figuurlijk** = de woorden betekenen iets **anders** dan wat er staat *(een soort plaatje)*.\n\n**Voorbeelden**:\n\n• *'Ik eet een appel.'* → **letterlijk** *(je eet écht een appel)*.\n• *'Ik heb vlinders in mijn buik.'* → **figuurlijk** *(er zitten geen echte vlinders in je buik, je bent zenuwachtig of verliefd)*.\n\n**Waarom figuurlijk taalgebruik?**\n• Maakt taal **levendiger** + leuker.\n• Sterke beeldspraak: 'het regent pijpenstelen' is sterker dan 'het regent hard'.\n• Cultureel — generatieoverdracht van wijsheden.\n\n**Soorten figuurlijk taalgebruik**:\n\n**1. Uitdrukking** *(idioom)*: vaste combinatie van woorden met betekenis die je los niet kunt afleiden.\n• *'De kat op het spek binden'* — iemand in verleiding brengen.\n• *'Het loopt in de papieren'* — het wordt duur.\n\n**2. Spreekwoord**: korte volkswijsheid, vaak met les of moraal.\n• *'Hoge bomen vangen veel wind.'* — bekende mensen krijgen veel kritiek.\n• *'Wie het kleine niet eert, is het grote niet weert.'* — wees zuinig met kleine dingen.\n\n**3. Vergelijking**: *'zo + bijvoeglijk naamwoord + als + zelfstandig naamwoord'*.\n• *'Zo zwart als roet'*.\n• *'Zo wit als sneeuw'*.\n• *'Zo dom als het achtereind van een varken'*.\n\n**4. Metafoor**: zonder *'als'* — gewoon iets vergelijken.\n• *'Ze is een engel.'* — bedoelt: ze is heel lief, niet écht een engel.\n• *'De wereld is een toneel.'*\n\n**toetsvraag-type**:\nVaak: 'Wat betekent de uitdrukking *'het is in kannen en kruiken'*?'\n→ Antwoord: 'het is afgerond / klaar'.\n\nLetterlijke betekenis is **fout** in deze vraag.",
    checks: [
      {
        q: "Wat is **figuurlijk**?",
        options: ["Woorden betekenen iets anders dan er staat", "Woorden betekenen precies wat er staat", "Woorden zijn heel moeilijk gespeld", "Woorden komen uit een andere taal"],
        answer: 0,
        wrongHints: [null, "Dat is letterlijk.", "Nee, het gaat om betekenis, niet om spelling.", "Nee, het gaat om betekenis, niet om de taal."],
        uitlegPad: {
          stappen: [
            { titel: "Twee manieren om iets te zeggen", tekst: "Bij **letterlijk** taalgebruik betekenen de woorden EXACT wat er staat. Bij **figuurlijk** taalgebruik bedoel je iets ANDERS — een soort woordbeeld." },
            { titel: "Voorbeeld letterlijk", tekst: "'Ik eet een appel' = letterlijk. Je eet écht een appel, geen beeld, geen verzinsel. Gewoon eten." },
            { titel: "Voorbeeld figuurlijk", tekst: "'Het regent pijpenstelen' = figuurlijk. Er vallen geen ECHTE pijpen uit de lucht. Je bedoelt: het regent heel hard. Het is een SOORT plaatje in taal." },
          ],
          woorden: [
            { woord: "letterlijk", uitleg: "Woorden betekenen precies wat er staat." },
            { woord: "figuurlijk", uitleg: "Woorden betekenen iets anders (beeldspraak)." },
          ],
          theorie: "toetsvraag-type: 'Wat betekent uitdrukking X?' De letterlijke betekenis is bijna altijd FOUT. Je moet de FIGUURLIJKE betekenis weten. Daarom uitdrukkingen leren.",
          voorbeelden: [
            { type: "stap", tekst: "'De kat uit de boom kijken' = figuurlijk = afwachten. Letterlijk zou raar zijn." },
            { type: "stap", tekst: "'Boter op het hoofd hebben' = figuurlijk = zelf doen wat je een ander verwijt. Letterlijk zou vies zijn." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Klinkt het raar als je het letterlijk neemt? Dan is het figuurlijk. Zoek de bedoelde betekenis." }],
          niveaus: {
            basis: "Figuurlijk = woorden betekenen iets anders dan letterlijk (beeldspraak).",
            simpeler: "Niet letterlijk waar, maar een beeld in taal.",
            nogSimpeler: "Figuurlijk = andere betekenis.",
          },
        },
      },
      {
        q: "*'Het regent pijpenstelen'* — wat betekent?",
        options: ["Het regent heel hard", "Er vallen pijpen uit de lucht", "Het sneeuwt", "Het regent een klein beetje"],
        answer: 0,
        wrongHints: [null, "Letterlijk kan dat niet — denk figuurlijk.", "Het gaat over regen, niet over sneeuw.", "Andersom — pijpenstelen zijn juist lang en dik."],
        uitlegPad: {
          stappen: [
            { titel: "Klassieke Nederlandse uitdrukking", tekst: "'Het regent pijpenstelen' is een beroemde **uitdrukking** in NL. **Letterlijk** zou het betekenen: er vallen lange pijpen (zoals oude tabakspijpen) uit de lucht. Onmogelijk! Dus: **figuurlijk**." },
            { titel: "Figuurlijke betekenis", tekst: "Pijpenstelen waren rechte staafjes (rookpijpen vroeger). Als regendruppels zo lang + dik zijn als pijpenstelen, **regent het HEEL hard** — dikke stralen water uit de lucht." },
            { titel: "Vergelijkbare uitdrukkingen", tekst: "Andere manieren om 'hard regenen' te zeggen:\n• 'Het regent dat het giet'\n• 'Het giet'\n• Engels: 'It's raining cats and dogs'\n• Frans: 'Il pleut des cordes' (het regent touwen)\nElke taal heeft eigen plaatjes." },
          ],
          woorden: [
            { woord: "pijpensteel", uitleg: "Het lange deel van een tabakspijp (vroeger gebruikelijk)." },
            { woord: "uitdrukking", uitleg: "Vaste woord-combinatie met figuurlijke betekenis." },
          ],
          theorie: "Toets-tip uitdrukkingen: oude woorden (pijpensteel, korf, kruik) blijven in uitdrukkingen, ook al zien we ze niet vaak meer. Dat maakt sommige uitdrukkingen onlogisch — pas gewoon de **bedoelde betekenis** toe.",
          voorbeelden: [
            { type: "stap", tekst: "'Het regent pijpenstelen, we kunnen niet naar buiten' = het regent hard, dus we blijven binnen." },
            { type: "stap", tekst: "Andere weer-uitdrukkingen: 'het is hondenweer' (slecht weer), 'het is om geen hond door te jagen' (heel slecht weer)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij uitdrukkingen: vraag jezelf 'kan dit letterlijk?'. Nee? → figuurlijk. Zoek bedoelde betekenis in context." }],
          niveaus: {
            basis: "Het regent heel hard (uitdrukking).",
            simpeler: "Pijpenstelen-regen = dikke, lange regendruppels = hard regenen.",
            nogSimpeler: "Hard regenen",
          },
        },
      },
      {
        q: "Wat is een **vergelijking**?",
        options: ["Een zin als 'zo sterk als een beer'", "Een zin als 'hij is een beer'", "Een zin als 'wie wat bewaart, heeft wat'", "Een zin als 'ik eet een appel'"],
        answer: 0,
        wrongHints: [null, "Dat is een metafoor — er staat geen 'als'.", "Dat is een spreekwoord met een les.", "Dat is letterlijk taalgebruik."],
      },
      {
        q: "*'Ze is een engel'* — wat voor soort beeldspraak?",
        options: ["Metafoor", "Spreekwoord", "Letterlijk", "Vergelijking"],
        answer: 0,
        wrongHints: [null, "Geen volkswijsheid met een les.", "Geen mens-engel.", "Geen 'als'."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een metafoor?", tekst: "Een **metafoor** is een korte beeldspraak waarbij je iets IS iets anders, zonder 'als'. Je vergelijkt direct." },
            { titel: "Verschil met vergelijking", tekst: "**Vergelijking**: 'Ze is ZO LIEF ALS een engel' (met 'als'). **Metafoor**: 'Ze IS een engel' (zonder 'als', direct). De metafoor is sterker, meer direct." },
            { titel: "Past in zin", tekst: "Bij 'Ze is een engel' bedoel je niet letterlijk dat ze vleugels heeft. Je bedoelt: ze is heel lief. Metafoor maakt taal levendiger." },
          ],
          woorden: [
            { woord: "metafoor", uitleg: "Korte beeldspraak: A IS B (zonder 'als')." },
            { woord: "vergelijking", uitleg: "A is zo X ALS B (met 'als')." },
          ],
          theorie: "Toets-tip beeldspraak: zoek 'als' in de zin. Heeft het 'als'? → vergelijking. Heeft het geen 'als' maar wel iets-is-iets-anders? → metafoor.",
          voorbeelden: [
            { type: "stap", tekst: "'Hij vecht ALS een leeuw' = vergelijking (met 'als')." },
            { type: "stap", tekst: "'Hij is een leeuw' = metafoor (zonder 'als')." },
            { type: "stap", tekst: "'De wereld is een toneel' (Shakespeare) = beroemde metafoor." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Test op 'als'. Met 'als' = vergelijking. Zonder = metafoor." }],
          niveaus: {
            basis: "Metafoor = beeldspraak zonder 'als' (A IS B).",
            simpeler: "Zonder 'als' = metafoor. Met 'als' = vergelijking.",
            nogSimpeler: "Geen 'als' = metafoor.",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke zin is **letterlijk** bedoeld?",
        options: [
          "Ik drink een glas melk",
          "Ik heb vlinders in mijn buik",
          "Het regent pijpenstelen",
          "Ze is een engel",
        ],
        answer: 0,
        wrongHints: [null, "Zitten er echt vlinders in je buik? Denk na.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Letterlijk of figuurlijk?",
              tekst: "Bij **letterlijk** betekenen de woorden precies wat er staat. Bij **figuurlijk** bedoel je iets anders — een soort plaatje in taal.",
            },
            {
              titel: "Test elke zin",
              tekst: "Vraag bij elke zin: kan dit écht zo gebeuren? Een glas melk drinken kan echt. Vlinders in je buik, pijpen uit de lucht of een mens die een engel is: dat kan niet echt.",
            },
            {
              titel: "Conclusie",
              tekst: "'Ik drink een glas melk' is de enige zin die precies betekent wat er staat. Die is dus letterlijk.",
            },
          ],
          woorden: [
            {
              woord: "letterlijk",
              uitleg: "De woorden betekenen precies wat er staat.",
            },
            {
              woord: "figuurlijk",
              uitleg: "De woorden betekenen iets anders dan er staat.",
            },
          ],
          theorie: "Klinkt een zin raar als je hem precies zo neemt? Dan is hij figuurlijk bedoeld.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Ik eet een appel' = letterlijk.",
            },
            {
              type: "stap",
              tekst: "'Ik heb vlinders in mijn buik' = figuurlijk: je bent zenuwachtig of verliefd.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Vraag jezelf: kan dit echt zo gebeuren? Ja = letterlijk. Nee = figuurlijk.",
            },
          ],
          niveaus: {
            basis: "'Ik drink een glas melk' is letterlijk: het gebeurt echt.",
            simpeler: "Alleen bij de melk gebeurt echt wat er staat.",
            nogSimpeler: "Melk drinken = echt.",
          },
        },
      },
      {
        q: "*'Ik heb vlinders in mijn buik.'* Wat bedoelt iemand die dit zegt?",
        options: [
          "Ik ben zenuwachtig of verliefd",
          "Ik heb een vlinder ingeslikt",
          "Ik heb buikpijn van het eten",
          "Ik heb heel erge honger",
        ],
        answer: 0,
        wrongHints: [null, "Kan dat echt? Denk figuurlijk.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Kan dit letterlijk?",
              tekst: "Er zitten geen echte vlinders in je buik. Dus is de zin **figuurlijk** bedoeld.",
            },
            {
              titel: "Het plaatje",
              tekst: "Vlinders fladderen heen en weer. Zo kriebelt het in je buik als je spannend vindt wat er komt.",
            },
            {
              titel: "De betekenis",
              tekst: "'Vlinders in je buik hebben' betekent: je bent **zenuwachtig of verliefd**.",
            },
          ],
          woorden: [
            {
              woord: "figuurlijk",
              uitleg: "Iets anders bedoelen dan er staat.",
            },
            {
              woord: "zenuwachtig",
              uitleg: "Een kriebelig, gespannen gevoel.",
            },
          ],
          theorie: "Bij figuurlijke zinnen zoek je de bedoelde betekenis, niet de letterlijke.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Ik heb vlinders in mijn buik voor de musical' = ik ben zenuwachtig voor de musical.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Kan het niet echt zo gebeuren? Zoek dan het gevoel dat ermee bedoeld wordt.",
            },
          ],
          niveaus: {
            basis: "Zenuwachtig of verliefd zijn.",
            simpeler: "Kriebels in je buik door spanning of verliefdheid.",
            nogSimpeler: "Zenuwachtig of verliefd.",
          },
        },
      },
      {
        q: "*'Zo wit als sneeuw'* — wat voor soort beeldspraak is dit?",
        options: ["Vergelijking", "Metafoor", "Spreekwoord", "Letterlijk"],
        answer: 0,
        wrongHints: [null, "Kijk of er 'als' in staat.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek naar 'als'",
              tekst: "In 'zo wit als sneeuw' staan de woorden **zo** en **als**.",
            },
            {
              titel: "Vergelijking",
              tekst: "Een **vergelijking** maak je met 'zo + bijvoeglijk naamwoord + als + zelfstandig naamwoord': zo wit als sneeuw, zo zwart als roet.",
            },
            {
              titel: "Geen metafoor",
              tekst: "Bij een metafoor staat er geen 'als', bijvoorbeeld 'ze is een engel'.",
            },
          ],
          woorden: [
            {
              woord: "vergelijking",
              uitleg: "Beeldspraak met 'zo ... als'.",
            },
            {
              woord: "metafoor",
              uitleg: "Beeldspraak zonder 'als'.",
            },
          ],
          theorie: "Staat er 'zo ... als'? Dan is het een vergelijking.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Zo zwart als roet' = vergelijking.",
            },
            {
              type: "stap",
              tekst: "'Hij is een leeuw' = metafoor (geen 'als').",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Met 'als' = vergelijking. Zonder 'als' = metafoor.",
            },
          ],
          niveaus: {
            basis: "Vergelijking: er staat 'zo ... als'.",
            simpeler: "'Zo wit als' heeft 'als', dus vergelijking.",
            nogSimpeler: "Vergelijking.",
          },
        },
      },
      {
        q: "Welke zin is een **metafoor**?",
        options: [
          "Hij is een leeuw",
          "Hij is zo sterk als een leeuw",
          "Hij ziet een leeuw in de dierentuin",
          "Beter laat dan nooit",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kijk goed: staat er 'als' in deze zin?",
          "Is dit beeldspraak, of gebeurt het echt?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is een metafoor?",
              tekst: "Bij een **metafoor** zeg je dat iets iets anders IS, zonder 'als'.",
            },
            {
              titel: "Vergelijk de zinnen",
              tekst: "'Hij is zo sterk als een leeuw' heeft 'als': dat is een vergelijking. 'Hij is een leeuw' heeft geen 'als': dat is een metafoor.",
            },
            {
              titel: "Wat bedoel je?",
              tekst: "Hij is natuurlijk geen echt dier. Je bedoelt dat hij sterk of dapper is.",
            },
          ],
          woorden: [
            {
              woord: "metafoor",
              uitleg: "Beeldspraak zonder 'als': A is B.",
            },
            {
              woord: "vergelijking",
              uitleg: "Beeldspraak met 'zo ... als'.",
            },
          ],
          theorie: "Test op 'als'. Met 'als' = vergelijking. Zonder 'als' = metafoor.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Ze is een engel' = metafoor.",
            },
            {
              type: "stap",
              tekst: "'Hij vecht als een leeuw' = vergelijking.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Geen 'als', wel beeldspraak? Dan is het een metafoor.",
            },
          ],
          niveaus: {
            basis: "'Hij is een leeuw' is een metafoor.",
            simpeler: "Zonder 'als' en niet echt bedoeld = metafoor.",
            nogSimpeler: "Hij is een leeuw.",
          },
        },
      },
      {
        q: "*'Het loopt in de papieren.'* Wat betekent dit?",
        options: ["Het wordt duur", "Er is veel papier nodig", "Het gaat heel snel", "Het wordt makkelijk"],
        answer: 0,
        wrongHints: [null, "Dat is letterlijk gedacht.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Een uitdrukking",
              tekst: "'Het loopt in de papieren' is een **uitdrukking**: een vaste groep woorden met een betekenis die je niet uit de losse woorden haalt.",
            },
            {
              titel: "Letterlijk klopt niet",
              tekst: "Het gaat niet om echt papier.",
            },
            {
              titel: "De betekenis",
              tekst: "'Het loopt in de papieren' betekent: **het wordt duur**.",
            },
          ],
          woorden: [
            {
              woord: "uitdrukking",
              uitleg: "Vaste groep woorden met een figuurlijke betekenis.",
            },
            {
              woord: "figuurlijk",
              uitleg: "Iets anders bedoelen dan er staat.",
            },
          ],
          theorie: "Bij een uitdrukking is de letterlijke betekenis bijna altijd fout.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Een nieuwe fiets, een helm en een slot: dat loopt in de papieren' = dat wordt duur.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Leer uitdrukkingen als een geheel: woorden + betekenis.",
            },
          ],
          niveaus: {
            basis: "Het wordt duur.",
            simpeler: "Het gaat veel geld kosten.",
            nogSimpeler: "Duur.",
          },
        },
      },
    ],
  },
  {
    title: "Veel-gebruikte uitdrukkingen",
    explanation:
      "Top-30 Toets-uitdrukkingen — leer ze uit het hoofd.\n\n**Lichaam**:\n• *'Iets uit je duim zuigen'* — iets verzinnen.\n• *'Een appeltje met iemand te schillen hebben'* — iets uit te praten.\n• *'Iemand een poot uitdraaien'* — iemand te veel laten betalen.\n• *'Door de bocht gaan'* — iets toegeven.\n• *'Voet bij stuk houden'* — niet toegeven.\n• *'De handen ineenslaan'* — samenwerken.\n• *'Zijn hart vasthouden'* — zich grote zorgen maken.\n\n**Dieren**:\n• *'Een kat in de zak kopen'* — iets slechts kopen *(zonder kijken)*.\n• *'Twee vliegen in één klap'* — twee dingen tegelijk doen.\n• *'Als een kip zonder kop'* — zonder nadenken rondrennen.\n• *'Van een mug een olifant maken'* — overdrijven.\n• *'Een wolf in schaapskleren'* — slecht persoon doet aardig.\n• *'De kat uit de boom kijken'* — afwachten.\n• *'Op je tenen lopen'* — je uiterste best moeten doen.\n\n**Eten**:\n• *'Met de mond vol tanden staan'* — niet weten wat te zeggen.\n• *'Een appeltje voor de dorst'* — geld of voorraad opzij voor later.\n• *'De koe bij de horens vatten'* — een probleem direct aanpakken.\n• *'Iets met een korreltje zout nemen'* — niet alles geloven.\n• *'Boter op het hoofd hebben'* — zelf doen wat je een ander verwijt.\n• *'Iets onder de pet houden'* — geheim houden.\n\n**Geld**:\n• *'In de rooie staan'* — schulden hebben.\n• *'Het geld groeit me niet op de rug'* — geld is niet onbeperkt.\n• *'Op de kleintjes letten'* — zuinig zijn.\n• *'Met een sisser aflopen'* — beter aflopen dan gedacht.\n\n**Plek**:\n• *'In zak en as zitten'* — heel verdrietig zijn.\n• *'Op rozen zitten'* — het heel goed hebben.\n• *'De wind van voren krijgen'* — een uitbrander krijgen.\n• *'De hete adem in je nek voelen'* — onder druk staan.\n\n**Toets-tip**:\nJe hoeft niet alle uitdrukkingen te kennen. Maak een lijst van de **20-30 meest voorkomende** + oefen die. Onbekend? Kijk naar de context.",
    checks: [
      {
        q: "*'Een appeltje met iemand te schillen hebben'* — wat?",
        options: ["Iets uit te praten", "Samen een appel eten", "Iemand iets cadeau geven", "Iemand helpen met koken"],
        answer: 0,
        wrongHints: [null, "Letterlijk gedacht — denk figuurlijk.", "Nee — het gaat om iets wat nog besproken moet worden.", "Letterlijk gedacht — het gaat niet om eten."],
        uitlegPad: {
          stappen: [
            { titel: "Letterlijk = raar", tekst: "Letterlijk een appel schillen met iemand kan natuurlijk wel, maar zou raar zijn als uitdrukking. Dus: figuurlijk!" },
            { titel: "Figuurlijke betekenis", tekst: "Deze uitdrukking betekent: iets uit te PRATEN hebben met iemand, een ONGENOEGEN bespreken. Vaak licht boos." },
            { titel: "Voorbeeld", tekst: "'Ik heb nog een appeltje met je te schillen over die fiets die je niet had teruggebracht!' = ik wil dit met je bespreken." },
          ],
          woorden: [
            { woord: "een appeltje schillen", uitleg: "Figuurlijk: iets uit te praten hebben." },
            { woord: "ongenoegen", uitleg: "Iets dat je niet zint, irritatie." },
          ],
          theorie: "Toets-tip: bij uitdrukkingen-vragen denk je: 'wat is het FIGUURLIJK?' Letterlijke betekenis is bijna altijd FOUT. Onthoud de top-30 vaak-voorkomende uitdrukkingen.",
          voorbeelden: [
            { type: "stap", tekst: "Andere lichaams-uitdrukkingen: 'voet bij stuk houden' = niet toegeven. 'Hart vasthouden' = zorgen maken." },
            { type: "stap", tekst: "Andere eten-uitdrukkingen: 'koekje van eigen deeg' = iemand zijn eigen behandeling teruggeven." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Maak een uitdrukkingen-lijst. Leer er 5-10 per week en herhaal ze regelmatig." }],
          niveaus: {
            basis: "Een appeltje met iemand schillen = iets uit te praten.",
            simpeler: "Iets bespreken, vaak met lichte irritatie.",
            nogSimpeler: "Iets uit te praten.",
          },
        },
      },
      {
        q: "*'In de rooie staan'* — wat?",
        options: ["Schulden hebben", "Boos zijn", "Op rood licht", "Veel geld"],
        answer: 0,
        wrongHints: [null, null, "Letterlijk.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Waar komt 'rood staan' vandaan?", tekst: "Vroeger gebruikten **boekhouders + banken** gekleurde inkt:\n• **Zwart** = je hebt geld (positief saldo)\n• **Rood** = je hebt schuld (negatief saldo).\nVandaar de term '**in het rood staan**' of '**rood staan**'." },
            { titel: "Figuurlijke betekenis", tekst: "Als je '**in de rooie staat**' = je hebt **MEER UITGEGEVEN** dan je hebt. Je rekening staat onder nul. Je hebt schuld bij de bank." },
            { titel: "Modern", tekst: "Tegenwoordig zie je het op je bank-app: '−€50' in rood. Saldo positief = blauw of zwart. Banken laten je vaak een beetje 'rood staan' (= **'roodstand'**) met extra rente." },
          ],
          woorden: [
            { woord: "rood staan", uitleg: "Negatief saldo op bankrekening = schuld." },
            { woord: "saldo", uitleg: "Hoeveel geld er op je rekening staat." },
            { woord: "roodstand", uitleg: "Toegestane schuld op rekening (bank betaalt vooruit)." },
          ],
          theorie: "Toets-feit financiën-uitdrukkingen:\n• **'In de rooie'** = schuld.\n• **'Zwarte cijfers schrijven'** = winst maken.\n• **'Op de kleintjes letten'** = zuinig zijn.\n• **'Het geld groeit me niet op de rug'** = geld is niet onbeperkt.",
          voorbeelden: [
            { type: "stap", tekst: "'Hij stond €200 in de rooie aan het eind van de maand' = hij had €200 schuld bij de bank." },
            { type: "stap", tekst: "Niet verwarren met 'op rood licht staan' (verkeer) of 'rood worden' (schaamte)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "ROOD = schuld (bank). ZWART = winst. Onthoud die kleur-koppeling." }],
          niveaus: {
            basis: "Schulden hebben (negatief saldo).",
            simpeler: "Je bankrekening staat onder nul = je hebt geld geleend = 'in het rood'.",
            nogSimpeler: "Schuld",
          },
        },
      },
      {
        q: "*'De koe bij de horens vatten'* — wat?",
        options: ["Een probleem direct aanpakken", "Een probleem uit de weg gaan", "Heel sterk zijn", "Een dier vastpakken"],
        answer: 0,
        wrongHints: [null, "Andersom — wie de koe bij de horens vat, loopt niet weg.", "Niet — het gaat om hoe je iets aanpakt.", "Dat is letterlijk — denk figuurlijk."],
      },
      {
        q: "*'Wolf in schaapskleren'* — wat?",
        options: ["Een slecht persoon die aardig doet", "Een aardig persoon die eng lijkt", "Iemand die heel bang is", "Iemand die zich verkleedt voor een feest"],
        answer: 0,
        wrongHints: [null, "Andersom — wie lijkt hier aardig?", "Niet — het gaat om iemand die anders is dan hij lijkt.", "Dat is te letterlijk gedacht."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*'Iets uit je duim zuigen'* — wat betekent dit?",
        options: ["Iets verzinnen", "Op je duim sabbelen", "Iets goed onthouden", "Iets eerlijk vertellen"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is letterlijk — denk figuurlijk.",
          null,
          "Is wat je uit je duim zuigt echt gebeurd?",
        ],
      },
      {
        q: "*'De kat uit de boom kijken'* — wat betekent dit?",
        options: ["Afwachten", "Meteen ingrijpen", "Naar dieren kijken", "Iemand redden"],
        answer: 0,
        wrongHints: [null, null, "Dat is te letterlijk.", null],
      },
      {
        q: "*'Met de mond vol tanden staan'* — wat betekent dit?",
        options: [
          "Niet weten wat je moet zeggen",
          "Heel veel praten",
          "Een nieuwe tand krijgen",
          "Met volle mond eten",
        ],
        answer: 0,
        wrongHints: [null, null, "Dat is letterlijk gedacht.", null],
      },
      {
        q: "*'Voet bij stuk houden'* — wat betekent dit?",
        options: ["Niet toegeven", "Snel weglopen", "Toch toegeven", "Stil blijven staan"],
        answer: 0,
        wrongHints: [null, null, "Andersom.", "Dat is te letterlijk."],
      },
      {
        q: "*'Iets onder de pet houden'* — wat betekent dit?",
        options: ["Iets geheim houden", "Iets aan iedereen vertellen", "Een pet opzetten", "Iets kwijtraken"],
        answer: 0,
        wrongHints: [null, "Andersom.", "Dat is letterlijk — denk figuurlijk.", null],
      },
    ],
  },
  {
    title: "Spreekwoorden",
    explanation:
      "**Spreekwoorden** = volkswijsheden, vaak met een **les**.\n\nTop-20 Toets-spreekwoorden:\n\n**Over geduld + tijd**:\n• *'Beter laat dan nooit.'* — beter laat doen dan helemaal niet.\n• *'Rome is niet op één dag gebouwd.'* — grote dingen kosten tijd.\n• *'Wie het laatst lacht, lacht het best.'* — wacht maar af wie wint.\n• *'Haastige spoed is zelden goed.'* — te snel werken = fouten.\n\n**Over zuinigheid**:\n• *'Wie het kleine niet eert, is het grote niet weert.'* — wees zuinig.\n• *'Goedkoop is duurkoop.'* — goedkope dingen gaan vaak snel kapot.\n• *'Beter een vogel in de hand dan tien in de lucht.'* — wat je hebt is meer waard dan iets onzekers.\n\n**Over werken**:\n• *'Wie niet werkt, zal niet eten.'* — alleen door werk verdien je.\n• *'Vele handen maken licht werk.'* — samen gaat het makkelijk.\n• *'Hoge bomen vangen veel wind.'* — bekende mensen krijgen veel kritiek.\n• *'Wie het onderste uit de kan wil, krijgt het lid op de neus.'* — wie alles wil, krijgt niets.\n\n**Over vrienden + familie**:\n• *'Eigen haard is goud waard.'* — thuis is het mooist.\n• *'Bloed kruipt waar het niet gaan kan.'* — familie blijft familie.\n• *'Een goede buur is beter dan een verre vriend.'* — buren helpen meer.\n• *'In nood leert men zijn vrienden kennen.'* — echte vrienden helpen als het moeilijk is.\n\n**Over leren**:\n• *'Al doende leert men.'* — door te doen leer je.\n• *'Wie zijn neus schendt, schendt zijn aangezicht.'* — wie slecht praat over eigen familie, schaadt zichzelf.\n• *'Een gewaarschuwd man telt voor twee.'* — wie gewaarschuwd is, kan zich voorbereiden.\n\n**Over geluk + tegenslag**:\n• *'Na regen komt zonneschijn.'* — na slechte tijden komen goede.\n• *'Jong geleerd, oud gedaan.'* — wat je jong leert, blijft je leven lang.\n• *'Onbekend maakt onbemind.'* — wat je niet kent, vind je niet mooi.\n\n**toetsvraag-truc**:\nVaak: 'Welk spreekwoord past bij deze situatie?'\nLees situatie → denk aan **les** → kies spreekwoord met **zelfde les**.",
    checks: [
      {
        q: "*'Rome is niet op één dag gebouwd'* — wat is les?",
        options: ["Grote dingen kosten tijd", "Rome is een heel oude stad", "Je moet snel werken om klaar te komen", "Bouwen is zwaar werk"],
        answer: 0,
        wrongHints: [null, "Dat is een feit, geen les.", "Andersom — haast is hier niet de les.", "Niet — het gaat niet echt over bouwen."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een spreekwoord?", tekst: "Een **spreekwoord** = korte volkswijsheid met een **les** (moraal). Niet bedoeld als letterlijk feit, maar als algemene WIJSHEID die geldt voor allerlei situaties." },
            { titel: "De les van dit spreekwoord", tekst: "**'Rome is niet op één dag gebouwd'** betekent: **grote, mooie dingen kosten TIJD + geduld**. De stad Rome werd in eeuwen gebouwd — met al die bouwwerken (Colosseum, paleizen, kerken). Niemand kan dat in een dag." },
            { titel: "Wanneer gebruiken?", tekst: "Als iemand ongeduldig is over een groot project. Bv:\n• 'Mijn project is nog niet klaar!' → 'Rome is niet op één dag gebouwd, geef het tijd.'\n• Studie van 4 jaar voor diploma: idem.\n• Eigen bedrijf opbouwen: idem." },
          ],
          woorden: [
            { woord: "spreekwoord", uitleg: "Korte wijsheid met les." },
            { woord: "moraal / les", uitleg: "Wat je leert uit de uitspraak." },
          ],
          theorie: "Toets-truc spreekwoord-vragen: zoek de **LES** (= algemene wijsheid), niet de letterlijke woorden. Rome / vogels / boter / koeien zijn maar BEELDEN — de wijsheid is universeel.",
          voorbeelden: [
            { type: "stap", tekst: "Andere spreekwoorden over tijd: 'Haastige spoed is zelden goed.' 'Beter laat dan nooit.' 'Geduld is een schone zaak.'" },
            { type: "stap", tekst: "Engels equivalent: 'Rome wasn't built in a day.' = exact zelfde betekenis." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Spreekwoord = LES = wijsheid voor de toekomst. Niet over Rome zelf, maar over GEDULD bij grote dingen." }],
          niveaus: {
            basis: "Grote dingen kosten tijd.",
            simpeler: "Iets groots maken (project, studie, gebouw) duurt lang — heb geduld.",
            nogSimpeler: "Tijd nodig",
          },
        },
      },
      {
        q: "*'Goedkoop is duurkoop'* — wat?",
        options: ["Goedkoop kopen kost je uiteindelijk meer", "Dure dingen zijn altijd slecht", "Je moet altijd het goedkoopste kopen", "Duur kopen is zonde van je geld"],
        answer: 0,
        wrongHints: [null, "Niet — het gaat over goedkope dingen.", "Andersom — wat gebeurt er met goedkope spullen?", "Andersom — wat kost goedkoop je uiteindelijk?"],
      },
      {
        q: "*'Vele handen maken licht werk'* — les?",
        options: ["Samen gaat het makkelijker", "Werk gaat sneller als je het alleen doet", "Licht werk kun je met één hand doen", "Hoe meer mensen, hoe meer ruzie"],
        answer: 0,
        wrongHints: [null, "Andersom — kijk naar 'vele handen'.", "Te letterlijk — het gaat niet om licht of zwaar tillen.", "Niet — het spreekwoord is juist positief over samen."],
      },
      {
        q: "*'Hoge bomen vangen veel wind'* — wat betekent?",
        options: ["Bekende mensen krijgen veel kritiek", "Grote bomen waaien snel om", "Bekende mensen krijgen veel hulp", "Wie groot is, is sterk"],
        answer: 0,
        wrongHints: [null, "Dat is letterlijk — denk figuurlijk.", "Niet — wat 'vangen' hoge bomen: iets fijns of iets lastigs?", "Niet — het gaat om opvallen en wat je dan over je heen krijgt."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*'Haastige spoed is zelden goed'* — wat is de les?",
        options: [
          "Als je te snel werkt, maak je fouten",
          "Wie snel werkt, is eerder klaar",
          "Je moet altijd op tijd komen",
          "Langzaam werken is saai",
        ],
        answer: 0,
        wrongHints: [null, "Andersom — is haast hier iets goeds?", null, null],
      },
      {
        q: "*'Eigen haard is goud waard'* — wat betekent dit?",
        options: [
          "Thuis is het het fijnst",
          "Een open haard is heel duur",
          "Je moet zuinig zijn met goud",
          "Op vakantie is het het leukst",
        ],
        answer: 0,
        wrongHints: [null, "Dat is letterlijk — het gaat niet echt om een haard.", null, "Andersom."],
      },
      {
        q: "*'In nood leert men zijn vrienden kennen'* — wat is de les?",
        options: [
          "Echte vrienden helpen je als het moeilijk is",
          "Op een feest maak je nieuwe vrienden",
          "Vrienden moet je niet om hulp vragen",
          "Hoe meer vrienden, hoe beter",
        ],
        answer: 0,
        wrongHints: [null, null, null, "Het gaat niet om het aantal — wat betekent 'in nood'?"],
      },
      {
        q: "*'Een gewaarschuwd man telt voor twee'* — wat is de les?",
        options: [
          "Wie gewaarschuwd is, kan zich voorbereiden",
          "Twee mannen zijn sterker dan één",
          "Je moet anderen nooit waarschuwen",
          "Wie waarschuwt, moet dubbel betalen",
        ],
        answer: 0,
        wrongHints: [null, "Te letterlijk — het gaat niet om echt tellen.", null, null],
      },
      {
        q: "*'Jong geleerd, oud gedaan'* — wat is de les?",
        options: [
          "Wat je jong leert, kun je je hele leven",
          "Alleen oude mensen kunnen goed leren",
          "Kinderen hoeven nog niet te leren",
          "Oude mensen weten alles al",
        ],
        answer: 0,
        wrongHints: [null, null, "Andersom — wanneer leer je het in dit spreekwoord?", null],
      },
    ],
  },
  {
    title: "Uitdrukking + situatie matchen",
    explanation:
      "**toetsvraag-type**: krijg situatie → kies passende uitdrukking / spreekwoord.\n\n**Werkwijze**:\n1. Lees situatie goed.\n2. Bepaal de **kern-les** *(geduld, doorzettingsvermogen, samenwerking, etc.)*.\n3. Match met spreekwoord dat **zelfde les** geeft.\n4. Negeer afleiders die alleen letterlijk passen.\n\n**Voorbeelden**:\n\n**Situatie 1**:\n*'Lisa is laat begonnen met leren voor de toets, maar in de laatste week leerde ze elke dag 3 uur. Ze haalde een goed cijfer.'*\n\nWelk spreekwoord past?\nA. Beter laat dan nooit. ✅\nB. Goedkoop is duurkoop.\nC. Vele handen maken licht werk.\nD. Op rood licht staan.\n\n**Antwoord: A** — laat begonnen, toch goed afgelopen.\n\n**Situatie 2**:\n*'Peter wilde de mooiste fiets en de beste laptop en de duurste schoenen kopen — maar nu heeft hij geen geld meer voor eten.'*\n\nWelk spreekwoord past?\nA. Wie het onderste uit de kan wil, krijgt het lid op de neus. ✅\nB. Rome is niet op één dag gebouwd.\nC. Een appeltje voor de dorst.\nD. Op de kleintjes letten.\n\n**Antwoord: A** — wie alles wil, krijgt niets.\n\n**Situatie 3**:\n*'Marie en haar oma wonen elk in een ander land. Ze zien elkaar maar 1× per jaar, maar als oma binnenkomt is de band meteen warm weer.'*\n\nWelk spreekwoord?\nA. Bloed kruipt waar het niet gaan kan. ✅\nB. Wie niet werkt, zal niet eten.\nC. Goedkoop is duurkoop.\nD. Beter laat dan nooit.\n\n**Antwoord: A** — familieband blijft, ondanks afstand.\n\n**Strategie bij twijfel**:\n• Werk met **uitsluiten** — sluit antwoorden die NIET de situatie beschrijven uit.\n• Vermijd antwoorden die alleen **letterlijk** passen *(als het verhaal over eten gaat, hoeft het spreekwoord niet over eten te gaan)*.\n• Kijk naar **kern-emotie** *(verdriet, dapperheid, geduld, hebzucht, samenwerking)*.\n\n**Veel-voorkomende valkuilen**:\n• Twee spreekwoorden lijken op elkaar *(bijv. 'Beter laat dan nooit' vs 'Haastige spoed is zelden goed')* — kies welke past bij de **richting** van situatie.\n• Soms past geen enkel perfect → kies het **dichtstbijzijnde**.",
    checks: [
      {
        q: "Marie kreeg 's morgens een rapport met 1 zes — verdrietig. 's Middags kreeg ze een lieve brief van oma. Spreekwoord?",
        options: ["Na regen komt zonneschijn", "Goedkoop is duurkoop", "Vele handen maken licht werk", "Hoge bomen vangen veel wind"],
        answer: 0,
        wrongHints: [null, "Niet over geld.", "Niet over samen.", "Niet over kritiek."],
      },
      {
        q: "Tien klasgenoten ruimden samen het lokaal — duurde 10 min ipv 1 uur. Spreekwoord?",
        options: ["Vele handen maken licht werk", "Beter laat dan nooit", "Op rozen zitten", "Hoge bomen vangen veel wind"],
        answer: 0,
        wrongHints: [null, "Niet over tijd.", null, null],
      },
      {
        q: "Tom kocht 6 paar goedkope schoenen — alle 6 binnen 2 maanden kapot. Spreekwoord?",
        options: ["Goedkoop is duurkoop", "Beter een goede buur dan een verre vriend", "Op rozen zitten", "Vele handen maken licht werk"],
        answer: 0,
        wrongHints: [null, "Gaat dit verhaal over vrienden? Kijk wat Tom overkomt met zijn géld.", "Zit Tom lekker op rozen, of gaat het juist mis? Zoek het spreekwoord over kopen.", "Er helpt hier niemand mee — het gaat over goedkoop kopen en wat dat kost."],
      },
      {
        q: "Anna's broer was wereldberoemd → kreeg veel haatmail + kritiek. Spreekwoord?",
        options: ["Hoge bomen vangen veel wind", "Goedkoop is duurkoop", "Beter laat dan nooit", "Vele handen maken licht werk"],
        answer: 0,
        wrongHints: [null, "Er wordt niets gekocht — het gaat om iemand die hoog en zichtbaar staat en daardoor kritiek 'vangt'.", "Komt hier iemand te laat? Zoek het spreekwoord over opvallen en kritiek krijgen.", "Er wordt niet samengewerkt — wie opvalt, krijgt hier iets over zich heen."],
      },
    ],
  },
  {
    title: "Toets-strategie + valkuilen",
    explanation:
      "**Toets-tips** voor uitdrukking-vragen:\n\n**1. Letterlijk uitsluiten**:\nVraag noemt 'koe bij horens vatten' → antwoord met 'koe op boerderij' is letterlijk = bijna altijd fout.\n\n**2. Twee opties die lijken op elkaar**:\nSoms zijn twee opties bijna hetzelfde — kies de **specifieke** boven de algemene.\n• *'Iets met een korreltje zout nemen'* = **niet alles letterlijk geloven**.\n• Niet: 'iets met zout strooien' *(letterlijk)*.\n\n**3. Context-woorden zoeken**:\nIn de situatie staan vaak **signaalwoorden**:\n• *'Hij wachtte maandenlang...'* → spreekwoord over geduld.\n• *'Plotseling...'* → spreekwoord over onverwachte gebeurtenis.\n• *'Iedereen samen...'* → spreekwoord over samenwerken.\n• *'Hij had spijt...'* → spreekwoord over fout/leren.\n\n**4. Begint met 'beter' of 'wie...'**:\nVeel spreekwoorden beginnen zo:\n• *'Beter laat dan nooit'* / *'Beter een vogel in de hand'* / *'Beter een goede buur'*.\n• *'Wie A doet, krijgt B'* — een 'als-dan' regel.\n\n**5. Tijd-aanduidingen letten**:\n• Spreekwoorden met *'morgen / vandaag'* gaan vaak over timing.\n• *'Komt tijd, komt raad.'* — wacht maar.\n\n**6. Drie soorten foute antwoorden die de toets gebruikt**:\n• **Letterlijk** *(over koe als dier)*.\n• **Lijkt erop** *(zelfde dier maar andere les)*.\n• **Helemaal niets met situatie** *(afleider)*.\n\n**7. Bij volledig onbekend spreekwoord**:\nKijk in de optie naar **kern-woorden**:\n• 'Boter' → over schuld of eerlijkheid.\n• 'Hand' → over werken of nemen.\n• 'Tijd' → over geduld.\n• 'Geld' → over zuinigheid.\n\n**8. Lijst voor thuis**:\nMaak een lijst van 30 uitdrukkingen + spreekwoorden met hun betekenis. Oefen elke avond 5 minuten.\n\n**9. Niet stressen**:\nSpreekwoord- en uitdrukking-vragen zijn maar een **klein deel** van de toets. Belangrijk, maar geen toets-bepaler.\n\n**Voorbeeld-vraag**:\n*'Welke uitdrukking betekent: iemand op een fout wijzen?'*\nA. Het stof opwerken.\nB. Op het verkeerde paard wedden.\nC. Iemand met de neus op de feiten drukken.\nD. Op tijd opzeggen.\n\n**Antwoord**: C — iemand wijzen op een fout / probleem.\n\n**Toets-feitje**:\nKinderen die veel **lezen**, kennen vaak meer uitdrukkingen. Lees boeken met dialoog en oude verhalen — daar zitten veel uitdrukkingen in.",
    checks: [
      {
        q: "Hoe vaak komen **spreekwoord/uitdrukking-vragen** op de Doorstroomtoets ongeveer voor?",
        options: ["Een paar vragen", "De helft van alle vragen", "Bijna alle vragen", "Geen enkele vraag"],
        answer: 0,
        wrongHints: [null, "Veel minder.", "Veel minder.", "Ze komen wel voor."],
      },
      {
        q: "Hoe werkt **letterlijk uitsluiten** bij de Doorstroomtoets?",
        options: ["Je streept de letterlijke betekenis weg", "Je kiest juist de letterlijke betekenis", "Je streept de figuurlijke betekenis weg", "Je kiest het langste antwoord"],
        answer: 0,
        wrongHints: [null, "Letterlijk is bijna nooit goed bij uitdrukkingen.", "Andersom.", "Niet — lengte zegt niets."],
      },
      {
        q: "*'Iemand met de neus op de feiten drukken'* — wat?",
        options: ["Iemand op een fout wijzen", "Iemand pijn doen", "Iemand iets laten ruiken", "Iemand een geheim vertellen"],
        answer: 0,
        wrongHints: [null, "Niet — geen geweld.", "Dat is te letterlijk.", "Niet — het gaat om iets wat iemand liever niet wil zien."],
      },
      {
        q: "Bij **onbekend** spreekwoord — wat doen?",
        options: ["Kijk naar de kernwoorden en de context", "Zomaar een antwoord gokken", "De vraag leeg laten", "Het eerste antwoord kiezen"],
        answer: 0,
        wrongHints: [null, "Gok liever slim: gebruik eerst wat je wél weet.", "Niet — leeg is altijd fout.", "Niet — lees eerst alle opties."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*'Iets met een korreltje zout nemen'* — wat betekent dit?",
        options: [
          "Niet alles zomaar geloven",
          "Zout over je eten strooien",
          "Iets heel zuinig gebruiken",
          "Iets snel opeten",
        ],
        answer: 0,
        wrongHints: [null, "Dat is letterlijk — streep het weg.", null, null],
      },
      {
        q: "*'Komt tijd, komt raad'* — wat betekent dit?",
        options: [
          "Wacht maar af, er komt vanzelf een oplossing",
          "Je moet altijd op tijd komen",
          "Vraag meteen iemand om advies",
          "Tijd is het belangrijkste wat er is",
        ],
        answer: 0,
        wrongHints: [null, "Te letterlijk — het gaat niet over op tijd komen.", null, null],
      },
    ],
  },
  {
    title: "Eind-toets — uitdrukking mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "*'Twee vliegen in één klap'* — wat?", options: ["Twee dingen tegelijk bereiken", "Twee vliegen tegelijk doodslaan", "Twee keer dezelfde fout maken", "Iets heel snel doen"], answer: 0, wrongHints: [null, "Dat is letterlijk.", "Niet — het gaat juist om iets wat lukt.", "Niet — het gaat om twee dingen met één actie."] },
      { q: "*'Beter een vogel in de hand dan tien in de lucht'* — les?", options: ["Wat je zeker hebt, is meer waard dan iets onzekers", "Je moet zo veel mogelijk verzamelen", "Vogels moet je vrij laten", "Wie veel wil, krijgt ook veel"], answer: 0, wrongHints: [null, "Niet — de tien in de lucht heb je nog niet.", "Het gaat niet écht over vogels.", "Andersom — wat is het risico als je te veel wilt?"] },
      { q: "Wat is **figuurlijk taalgebruik**?", options: ["Woorden in een andere betekenis", "Woorden precies zoals ze staan", "Woorden zonder spelfouten", "Woorden uit een andere taal"], answer: 0, wrongHints: [null, "Dat is letterlijk.", "Het gaat om betekenis, niet om spelling.", "Het gaat om betekenis, niet om de taal."] },
      { q: "*'Op rozen zitten'* — wat?", options: ["Het heel goed hebben", "Het heel moeilijk hebben", "Op een stekelige plek zitten", "Van bloemen houden"], answer: 0, wrongHints: [null, "Andersom.", "Dat is letterlijk.", "Niet — het gaat om hoe het met je gaat."] },
      { q: "*'Onbekend maakt onbemind'* — les?", options: ["Wat je niet kent, vind je niet mooi", "Wat je niet kent, is nieuw en spannend", "Je moet geheimen bewaren", "Onbekende mensen zijn altijd gemeen"], answer: 0, wrongHints: [null, "Andersom — 'onbemind' betekent: niet geliefd.", "Het gaat niet om geheimen — 'onbemind' zegt iets over mooi of niet mooi vinden.", "Te sterk — het gaat over wat je vindt van iets onbekends."] },
      { q: "Wat is een **vergelijking**?", options: ["Beeldspraak met 'zo ... als'", "Beeldspraak zonder 'als'", "Een volkswijsheid met een les", "Een zin die je letterlijk neemt"], answer: 0, wrongHints: [null, "Dat is een metafoor.", "Dat is een spreekwoord.", "Dat is juist geen beeldspraak."] },
      { q: "*'De **kogel** is door de kerk.'* Wat betekent dit?", options: ["Er is definitief een besluit genomen", "Er is iets kapotgeschoten", "De kerkdienst is begonnen", "Het besluit is nog niet genomen"], answer: 0, wrongHints: [null, "Letterlijk gelezen.", "Niet — het gaat niet om de kerk.", "Andersom."] },
      { q: "*'Vele handen maken licht werk.'* — betekenis?", options: ["Samen gaat het makkelijker", "Veel handen wegen samen weinig", "Met veel lampen zie je beter", "Alleen werken gaat het snelst"], answer: 0, wrongHints: [null, "Letterlijk gelezen.", "Niet bedoeld.", "Andersom."] },
      { q: "*'Aan zijn lot overlaten.'* — betekenis?", options: ["Iemand niet helpen", "Een lot uit de loterij kopen", "Iemand goed verzorgen", "Iemand laten winnen"], answer: 0, wrongHints: [null, "Letterlijk.", "Andersom.", "Niet — het gaat om iemand alleen laten."] },
      { q: "Wat is een **figuurlijke uitdrukking**?", options: ["Een zin die je niet letterlijk moet nemen", "Een zin die je precies zo moet nemen", "Een rekenformule met woorden", "Een tekening bij een tekst"], answer: 0, wrongHints: [null, "Tegenstelling.", "Niet — het gaat om taal.", "Niet — het gaat om taal, niet om plaatjes."] },
      { q: "*'Iemand iets onder de neus wrijven.'* — betekenis?", options: ["Iemand verwijtend op een fout wijzen", "Iemand schoonmaken", "Iemand kietelen", "Iemand een compliment geven"], answer: 0, wrongHints: [null, "Letterlijk.", null, "Andersom — het is juist niet aardig bedoeld."] },
      { q: "*'Op één lijn zitten.'* — betekenis?", options: ["Eens zijn", "Wachten in een rij", "Ruzie hebben", "Naast elkaar in de bus zitten"], answer: 0, wrongHints: [null, "Letterlijk.", "Andersom.", "Dat is letterlijk."] },
      { q: "*'De druppel die de emmer doet overlopen.'* — betekenis?", options: ["Laatste reden waardoor je boos wordt", "Water dat over de rand stroomt", "Een groot ongeluk", "Goed nieuws"], answer: 0, wrongHints: [null, "Letterlijk.", "Niet — het is juist iets kleins, maar wát doet die laatste druppel?", null] },
      { q: "*'Een kat in de zak kopen.'* — betekenis?", options: ["Iets kopen dat tegenvalt", "Een echte kat kopen", "Een cadeau voor een huisdier kopen", "Iets heel goedkoops kopen"], answer: 0, wrongHints: [null, "Letterlijk.", "Letterlijk gedacht.", "Niet — het gaat erom dat je niet goed keek wat je kocht."] },
      { q: "*'Een appeltje voor de dorst.'* — betekenis?", options: ["Geld bewaren voor later", "Een appel voor als je dorst hebt", "Iets lekkers voor tussendoor", "Al je geld meteen uitgeven"], answer: 0, wrongHints: [null, "Letterlijk.", "Te letterlijk.", "Andersom."] },
      { q: "*'Met de neus in de boter vallen.'* — betekenis?", options: ["Net op tijd komen voor iets goeds", "Te laat komen", "Verlies lijden", "Vies worden"], answer: 0, wrongHints: [null, "Andersom — je komt juist op het goede moment.", "Tegengestelde.", "Letterlijk."] },
      { q: "*'Boontje komt om zijn loontje.'* — betekenis?", options: ["Wie kwaad doet, krijgt straf", "Bonen kopen op de markt", "Wie hard werkt, krijgt meer loon", "Je moet je groente opeten"], answer: 0, wrongHints: [null, "Letterlijk.", "Niet — het gaat om iets slechts dat terugkomt.", "Te letterlijk."] },
      { q: "*'Een open deur intrappen.'* — betekenis?", options: ["Iets zeggen dat iedereen al weet", "Inbreken in een huis", "Ergens boos binnenkomen", "Iets heel nieuws vertellen"], answer: 0, wrongHints: [null, "Letterlijk.", "Niet — het gaat om wat je zegt.", "Andersom."] },
      { q: "*'Met twee maten meten.'* — betekenis?", options: ["Iets oneerlijk beoordelen", "Iets twee keer nameten", "Iedereen precies gelijk behandelen", "Twee dingen tegelijk doen"], answer: 0, wrongHints: [null, "Letterlijk.", "Andersom.", "Niet — het gaat om eerlijk beoordelen."] },
      { q: "*'Knollen voor citroenen verkopen.'* — betekenis?", options: ["Mensen bedriegen", "Groente verkopen op de markt", "Eerlijk zaken doen", "Heel goedkoop verkopen"], answer: 0, wrongHints: [null, "Letterlijk.", "Andersom.", "Niet — het gaat erom dat iets anders is dan beloofd."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const spreekwoordenUitdrukkingenPo = {
  id: "spreekwoorden-uitdrukkingen-po",
  title: "Spreekwoorden + uitdrukkingen (Doorstroomtoets groep 6-8)",
  emoji: "💬",
  level: "groep6-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taal — figuurlijk taalgebruik / Doorstroomtoets",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "1F" },
  ],
  intro:
    "Spreekwoorden + uitdrukkingen voor Doorstroomtoets groep 6-8 — letterlijk vs figuurlijk + top-30 uitdrukkingen (lichaam/dier/eten) + top-20 spreekwoorden + matching-strategie (toetsvraag) + valkuilen. ~15 min.",
  triggerKeywords: [
    "spreekwoord", "spreekwoorden",
    "uitdrukking", "uitdrukkingen", "idioom",
    "figuurlijk", "letterlijk",
    "metafoor", "vergelijking",
    "cito-taal", "doorstroomtoets-taal",
  ],
  chapters,
  steps,
};

export default spreekwoordenUitdrukkingenPo;
