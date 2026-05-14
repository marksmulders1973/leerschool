// Leerpad: Spreekwoorden + uitdrukkingen — groep 6-8 taal/Cito.
// Cito-vraag: figuurlijk taalgebruik vs letterlijk. Referentieniveau 1F-2F.
// 6 stappen.

const stepEmojis = ["💬", "🐱", "🌧️", "🎯", "📚", "🏆"];

const chapters = [
  { letter: "A", title: "Letterlijk vs figuurlijk", emoji: "💬", from: 0, to: 0 },
  { letter: "B", title: "Veel-gebruikte uitdrukkingen", emoji: "🐱", from: 1, to: 1 },
  { letter: "C", title: "Spreekwoorden", emoji: "🌧️", from: 2, to: 2 },
  { letter: "D", title: "Uitdrukking + situatie", emoji: "🎯", from: 3, to: 3 },
  { letter: "E", title: "Cito-strategie", emoji: "📚", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

const steps = [
  {
    title: "Letterlijk vs figuurlijk",
    explanation:
      "**Letterlijk** = de woorden betekenen precies wat er staat.\n**Figuurlijk** = de woorden betekenen iets **anders** dan wat er staat *(een soort plaatje)*.\n\n**Voorbeelden**:\n\n• *'Ik eet een appel.'* → **letterlijk** *(je eet écht een appel)*.\n• *'Ik ga koud op die toets.'* → **figuurlijk** *(je gaat niet écht koud op een toets, je bedoelt: rustig, zonder zenuwen)*.\n\n**Waarom figuurlijk taalgebruik?**\n• Maakt taal **levendiger** + leuker.\n• Sterke beeldspraak: 'het regent pijpenstelen' is sterker dan 'het regent hard'.\n• Cultureel — generatieoverdracht van wijsheden.\n\n**Soorten figuurlijk taalgebruik**:\n\n**1. Uitdrukking** *(idioom)*: vaste combinatie van woorden met betekenis die je los niet kunt afleiden.\n• *'De kat op het spek binden'* — iemand in verleiding brengen.\n• *'Het loopt in de papieren'* — het wordt duur.\n\n**2. Spreekwoord**: korte volkswijsheid, vaak met les of moraal.\n• *'Hoge bomen vangen veel wind.'* — bekende mensen krijgen veel kritiek.\n• *'Wie het kleine niet eert, is het grote niet weert.'* — wees zuinig met kleine dingen.\n\n**3. Vergelijking**: *'zo + bijvoeglijk naamwoord + als + zelfstandig naamwoord'*.\n• *'Zo zwart als roet'*.\n• *'Zo wit als sneeuw'*.\n• *'Zo dom als het achtereind van een varken'*.\n\n**4. Metafoor**: zonder *'als'* — gewoon iets vergelijken.\n• *'Ze is een engel.'* — bedoelt: ze is heel lief, niet écht een engel.\n• *'De wereld is een toneel.'*\n\n**Cito-vraag-type**:\nVaak: 'Wat betekent de uitdrukking *'het is in kannen en kruiken'*?'\n→ Antwoord: 'het is afgerond / klaar'.\n\nLetterlijke betekenis is **fout** in deze vraag.",
    checks: [
      {
        q: "Wat is **figuurlijk**?",
        options: ["Woorden betekenen iets anders dan letterlijk", "Letterlijk", "Beeld in boek", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel een soort.", "Wel."],
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
          theorie: "Cito-vraag-type: 'Wat betekent uitdrukking X?' De letterlijke betekenis is bijna altijd FOUT. Je moet de FIGUURLIJKE betekenis weten. Daarom uitdrukkingen leren.",
          voorbeelden: [
            { type: "stap", tekst: "'De kat uit de boom kijken' = figuurlijk = afwachten. Letterlijk zou raar zijn." },
            { type: "stap", tekst: "'Boter op het hoofd hebben' = figuurlijk = schuldig zijn. Letterlijk zou vies zijn." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Klinkt het raar als je het letterlijk neemt? Dan is het figuurlijk. Zoek de bedoelde betekenis." }],
          niveaus: {
            basis: "Figuurlijk = woorden betekenen iets anders dan letterlijk (beeldspraak).",
            simpeler: "Niet letterlijk waar, maar een beeld in taal.",
            nogSimpeler: "Figuurlijk = ander betekenis.",
          },
        },
      },
      {
        q: "*'Het regent pijpenstelen'* — wat betekent?",
        options: ["Het regent heel hard", "Pijpen vallen uit lucht", "Het sneeuwt", "Geen idee"],
        answer: 0,
        wrongHints: [null, "Letterlijk = nee.", "Niet.", "Probeer."],
        uitlegPad: {
          stappen: [
            { titel: "Klassieke Nederlandse uitdrukking", tekst: "'Het regent pijpenstelen' is een beroemde **uitdrukking** in NL. **Letterlijk** zou het betekenen: er vallen lange pijpen (zoals oude tabakspijpen) uit de lucht. Onmogelijk! Dus: **figuurlijk**." },
            { titel: "Figuurlijke betekenis", tekst: "Pijpenstelen waren rechte staafjes (rookpijpen vroeger). Als regendruppels zo lang + dik zijn als pijpenstelen, **regent het HEEL hard** — dikke stralen water uit de lucht." },
            { titel: "Vergelijkbare uitdrukkingen", tekst: "Andere manieren om 'hard regenen' te zeggen:\n• 'De hemel staat open'\n• 'Het giet'\n• Engels: 'It's raining cats and dogs'\n• Frans: 'Il pleut des cordes' (het regent touwen)\nElke taal heeft eigen plaatjes." },
          ],
          woorden: [
            { woord: "pijpensteel", uitleg: "Het lange deel van een tabakspijp (vroeger gebruikelijk)." },
            { woord: "uitdrukking", uitleg: "Vaste woord-combinatie met figuurlijke betekenis." },
          ],
          theorie: "Cito-tip uitdrukkingen: oude woorden (pijpensteel, korf, kruik) blijven in uitdrukkingen, ook al zien we ze niet vaak meer. Dat maakt sommige uitdrukkingen onlogisch — pas gewoon de **bedoelde betekenis** toe.",
          voorbeelden: [
            { type: "stap", tekst: "'Het regent pijpenstelen, we kunnen niet naar buiten' = het regent hard, dus we blijven binnen." },
            { type: "stap", tekst: "Andere weer-uitdrukkingen: 'het is hondenweer' (slecht weer), 'het is om geen hond door te jagen' (heel slecht weer)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij uitdrukkingen: vraag jezelf 'kan dit letterlijk?'. Nee? → figuurlijk. Zoek bedoelde betekenis in context." }],
          niveaus: {
            basis: "Het regent heel hard (uitdrukking). = A.",
            simpeler: "Pijpenstelen-regen = dikke, lange regendruppels = hard regenen. = A.",
            nogSimpeler: "Hard regenen = A.",
          },
        },
      },
      {
        q: "Wat is een **vergelijking**?",
        options: ["'Zo X als Y'-zin", "Boek", "Letterlijk", "Som"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet primair.", "Niet."],
      },
      {
        q: "*'Ze is een engel'* — wat soort?",
        options: ["Metafoor", "Spreekwoord", "Letterlijk", "Vergelijking"],
        answer: 0,
        wrongHints: [null, "Niet kort genoeg.", "Geen mens-engel.", "Geen 'als'."],
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
          theorie: "Cito-tip beeldspraak: zoek 'als' in de zin. Heeft het 'als'? → vergelijking. Heeft het geen 'als' maar wel iets-is-iets-anders? → metafoor.",
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
    ],
  },
  {
    title: "Veel-gebruikte uitdrukkingen",
    explanation:
      "Top-30 Cito-uitdrukkingen — leer ze uit het hoofd.\n\n**Lichaam**:\n• *'Iets uit je duim zuigen'* — iets verzinnen.\n• *'Een appeltje met iemand te schillen hebben'* — iets uit te praten.\n• *'Iemand een poot uitdraaien'* — iemand teveel laten betalen.\n• *'Door de bocht gaan'* — iets toegeven.\n• *'Voet bij stuk houden'* — niet toegeven.\n• *'De handen ineenslaan'* — samenwerken.\n• *'Zijn hart vasthouden'* — zich grote zorgen maken.\n\n**Dieren**:\n• *'Een kat in de zak kopen'* — iets slechts kopen *(zonder kijken)*.\n• *'Twee vliegen in één klap'* — twee dingen tegelijk doen.\n• *'Een muis in een hoekje'* — heel stil/verlegen.\n• *'Het hondje van de bakker zijn'* — een vleier zijn.\n• *'Een wolf in schaapskleren'* — slecht persoon doet aardig.\n• *'De kat uit de boom kijken'* — afwachten.\n• *'Op je tenen lopen'* — heel voorzichtig zijn.\n\n**Eten**:\n• *'Met de mond vol tanden staan'* — niet weten wat te zeggen.\n• *'Een appeltje voor de dorst'* — geld of voorraad opzij voor later.\n• *'De koe bij de horens vatten'* — een probleem direct aanpakken.\n• *'Iets met een korreltje zout nemen'* — niet alles geloven.\n• *'Boter op het hoofd hebben'* — schuldig zijn.\n• *'Iets onder de pet houden'* — geheim houden.\n\n**Geld**:\n• *'In de rooie staan'* — schulden hebben.\n• *'Het regent geld'* — verdienen veel.\n• *'Op de kleintjes letten'* — zuinig zijn.\n• *'Met een sisser aflopen'* — beter aflopen dan gedacht.\n\n**Plek**:\n• *'In zak en as zitten'* — heel verdrietig zijn.\n• *'Op rozen zitten'* — het heel goed hebben.\n• *'De wind van voren krijgen'* — een uitbrander krijgen.\n• *'De hete adem in je nek voelen'* — onder druk staan.\n\n**Cito-tip**:\nNiet alle uitdrukkingen moeten je weten. Maak een lijst van de **20-30 meest voorkomende** + oefen die. Komt 1 onbekende: kijk goed naar context.",
    checks: [
      {
        q: "*'Een appeltje met iemand te schillen hebben'* — wat?",
        options: ["Iets uit te praten", "Appel eten", "Boos zijn", "Niet weten"],
        answer: 0,
        wrongHints: [null, "Letterlijk = nee.", "Wel iets in die richting.", "Probeer."],
        uitlegPad: {
          stappen: [
            { titel: "Letterlijk = onmogelijk", tekst: "Letterlijk een appel schillen met iemand kan natuurlijk wel, maar zou raar zijn als uitdrukking. Dus: figuurlijk!" },
            { titel: "Figuurlijke betekenis", tekst: "Deze uitdrukking betekent: iets uit te PRATEN hebben met iemand, een ONGENOEGEN bespreken. Vaak licht boos." },
            { titel: "Voorbeeld", tekst: "'Ik heb nog een appeltje met je te schillen over die fiets die je niet had teruggebracht!' = ik wil dit met je bespreken." },
          ],
          woorden: [
            { woord: "een appeltje schillen", uitleg: "Figuurlijk: iets uit te praten hebben." },
            { woord: "ongenoegen", uitleg: "Iets dat je niet zint, irritatie." },
          ],
          theorie: "Cito-tip: bij uitdrukkingen-vragen denk je: 'wat is het FIGUURLIJK?' Letterlijke betekenis is bijna altijd FOUT. Onthoud de top-30 vaak-voorkomende uitdrukkingen.",
          voorbeelden: [
            { type: "stap", tekst: "Andere lichaams-uitdrukkingen: 'voet bij stuk houden' = niet toegeven. 'Hart vasthouden' = zorgen maken." },
            { type: "stap", tekst: "Andere eten-uitdrukkingen: 'koekje van eigen deeg' = iemand zijn eigen behandeling teruggeven." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Maak een uitdrukkingen-lijst. Leer er 5-10 per week. Op Cito komen 2-4 vragen erover." }],
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
        wrongHints: [null, "Niet.", "Letterlijk.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Waar komt 'rood staan' vandaan?", tekst: "Vroeger gebruikten **boekhouders + banken** gekleurde inkt:\n• **Zwart** = je hebt geld (positief saldo)\n• **Rood** = je hebt schuld (negatief saldo).\nVandaar de term '**in het rood staan**' of '**rood staan**'." },
            { titel: "Figuurlijke betekenis", tekst: "Als je '**in de rooie staat**' = je hebt **MEER UITGEGEVEN** dan je hebt. Je rekening staat onder nul. Je hebt schuld bij de bank." },
            { titel: "Modern", tekst: "Tegenwoordig zie je het op je bank-app: '−€50' in rood. Saldo positief = blauw of zwart. Banken laten je vaak €500-1000 'rood staan' (= **'rood-stand'**) met extra rente." },
          ],
          woorden: [
            { woord: "rood staan", uitleg: "Negatief saldo op bankrekening = schuld." },
            { woord: "saldo", uitleg: "Hoeveel geld er op je rekening staat." },
            { woord: "rood-stand", uitleg: "Toegestane schuld op rekening (bank betaalt vooruit)." },
          ],
          theorie: "Cito-feit financien-uitdrukkingen:\n• **'In de rooie'** = schuld.\n• **'In het zwart'** = winst/positief.\n• **'Op de kleintjes letten'** = zuinig zijn.\n• **'Het regent geld'** = veel verdienen.",
          voorbeelden: [
            { type: "stap", tekst: "'Hij stond €200 in de rooie aan het eind van de maand' = hij had €200 schuld bij de bank." },
            { type: "stap", tekst: "Niet verwarren met 'op rood licht staan' (verkeer) of 'rood worden' (schaamte)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "ROOD = schuld (bank). ZWART = winst. Onthoud die kleur-koppeling." }],
          niveaus: {
            basis: "Schulden hebben (negatief saldo). = A.",
            simpeler: "Je bankrekening staat onder nul = je hebt geld geleend = 'in het rood'. = A.",
            nogSimpeler: "Schuld = A.",
          },
        },
      },
      {
        q: "*'De koe bij de horens vatten'* — wat?",
        options: ["Probleem direct aanpakken", "Boerderij", "Koe kopen", "Letterlijk koe"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Figuurlijk."],
      },
      {
        q: "*'Wolf in schaapskleren'* — wat?",
        options: ["Slecht persoon doet aardig", "Echte wolf", "Schaap", "Verkleden"],
        answer: 0,
        wrongHints: [null, "Figuurlijk.", "Niet.", "Wel maar figuurlijk."],
      },
    ],
  },
  {
    title: "Spreekwoorden",
    explanation:
      "**Spreekwoorden** = volkswijsheden, vaak met een **les**.\n\nTop-20 Cito-spreekwoorden:\n\n**Over geduld + tijd**:\n• *'Beter laat dan nooit.'* — beter laat doen dan helemaal niet.\n• *'Rome is niet op één dag gebouwd.'* — grote dingen kosten tijd.\n• *'Wie het laatst lacht, lacht het best.'* — wacht maar af wie wint.\n• *'Haastige spoed is zelden goed.'* — te snel werken = fouten.\n\n**Over zuinigheid**:\n• *'Wie het kleine niet eert, is het grote niet weert.'* — wees zuinig.\n• *'Goedkoop is duurkoop.'* — goedkope dingen gaan vaak snel kapot.\n• *'Beter een vogel in de hand dan tien in de lucht.'* — wat je hebt is meer waard dan iets onzekers.\n\n**Over werken**:\n• *'Wie niet werkt, zal niet eten.'* — alleen door werk verdien je.\n• *'Vele handen maken licht werk.'* — samen gaat het makkelijk.\n• *'Hoge bomen vangen veel wind.'* — bekende mensen krijgen veel kritiek.\n• *'Wie het onderste uit de kan wil, krijgt het lid op de neus.'* — wie alles wil, krijgt niets.\n\n**Over vrienden + familie**:\n• *'Eigen haard is goud waard.'* — thuis is het mooist.\n• *'Bloed kruipt waar het niet gaan kan.'* — familie blijft familie.\n• *'Een goede buur is beter dan een verre vriend.'* — buren helpen meer.\n• *'Vele vrienden, weinig hulp.'* — als je in nood zit zijn er weinig over.\n\n**Over leren**:\n• *'Al doende leert men.'* — door te doen leer je.\n• *'Wie zijn neus schendt, schendt zijn aangezicht.'* — wie zichzelf in de problemen brengt, lijdt het meest.\n• *'Een gewaarschuwd man telt voor twee.'* — als je waarschuwt, ben je sterker.\n\n**Over geluk + tegenslag**:\n• *'Na regen komt zonneschijn.'* — na slechte tijden komen goede.\n• *'Wat je in de wieg leert, leer je in het graf niet meer.'* — wat je jong leert, blijft je leven lang.\n• *'Onbekend maakt onbemind.'* — wat je niet kent, vind je niet mooi.\n\n**Cito-vraag-trick**:\nVaak: 'Welk spreekwoord past bij deze situatie?'\nLees situatie → denk aan **les** → kies spreekwoord met **zelfde les**.",
    checks: [
      {
        q: "*'Rome is niet op één dag gebouwd'* — wat is les?",
        options: ["Grote dingen kosten tijd", "Geschiedenis", "Reis naar Rome", "Bouwbedrijf"],
        answer: 0,
        wrongHints: [null, "Niet primair — het is een SPREEKWOORD, niet feiten.", "Niet.", "Niet."],
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
          theorie: "Cito-truc spreekwoord-vragen: zoek de **LES** (= algemene wijsheid), niet de letterlijke woorden. Rome / vogels / boter / koeien zijn maar BEELDEN — de wijsheid is universeel.",
          voorbeelden: [
            { type: "stap", tekst: "Andere spreekwoorden over tijd: 'Haastige spoed is zelden goed.' 'Beter laat dan nooit.' 'Geduld is een schone zaak.'" },
            { type: "stap", tekst: "Engels equivalent: 'Rome wasn't built in a day.' = exact zelfde betekenis." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Spreekwoord = LES = wijsheid voor de toekomst. Niet over Rome zelf, maar over GEDULD bij grote dingen." }],
          niveaus: {
            basis: "Grote dingen kosten tijd. = A.",
            simpeler: "Iets groots maken (project, studie, gebouw) duurt lang — heb geduld. = A.",
            nogSimpeler: "Tijd nodig = A.",
          },
        },
      },
      {
        q: "*'Goedkoop is duurkoop'* — wat?",
        options: ["Goedkope dingen breken snel", "Alles duur", "Letterlijk", "Onmogelijk"],
        answer: 0,
        wrongHints: [null, "Niet.", "Figuurlijk.", "Wel."],
      },
      {
        q: "*'Vele handen maken licht werk'* — les?",
        options: ["Samen gaat het makkelijker", "Licht uit", "Werk in donker", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Wel."],
      },
      {
        q: "*'Hoge bomen vangen veel wind'* — wat betekent?",
        options: ["Bekende mensen krijgen veel kritiek", "Letterlijk bomen", "Storm", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Figuurlijk.", "Niet.", "Wel."],
      },
    ],
  },
  {
    title: "Uitdrukking + situatie matchen",
    explanation:
      "**Cito-vraag-type**: krijg situatie → kies passende uitdrukking / spreekwoord.\n\n**Werkwijze**:\n1. Lees situatie goed.\n2. Bepaal de **kern-les** *(geduld, doorzettingsvermogen, samenwerking, etc.)*.\n3. Match met spreekwoord dat **zelfde les** geeft.\n4. Negeer afleiders die alleen letterlijk passen.\n\n**Voorbeelden**:\n\n**Situatie 1**:\n*'Lisa is laat begonnen met leren voor de toets, maar in de laatste week leerde ze elke dag 3 uur. Ze haalde een goed cijfer.'*\n\nWelk spreekwoord past?\nA. Beter laat dan nooit. ✅\nB. Goedkoop is duurkoop.\nC. Vele handen maken licht werk.\nD. Op rood licht staan.\n\n**Antwoord: A** — laat begonnen, toch goed afgelopen.\n\n**Situatie 2**:\n*'Peter wilde de mooiste fiets en de beste laptop en de duurste schoenen kopen — maar nu heeft hij geen geld meer voor eten.'*\n\nWelk spreekwoord past?\nA. Wie het onderste uit de kan wil, krijgt het lid op de neus. ✅\nB. Rome is niet op één dag gebouwd.\nC. Een appeltje voor de dorst.\nD. Op de kleintjes letten.\n\n**Antwoord: A** — wie alles wil, krijgt niets.\n\n**Situatie 3**:\n*'Marie en haar oma wonen elk in een ander land. Ze zien elkaar maar 1× per jaar, maar als oma binnenkomt is de band meteen warm weer.'*\n\nWelk spreekwoord?\nA. Bloed kruipt waar het niet gaan kan. ✅\nB. Wie niet werkt, zal niet eten.\nC. Goedkoop is duurkoop.\nD. Beter laat dan nooit.\n\n**Antwoord: A** — familieband blijft, ondanks afstand.\n\n**Strategie bij twijfel**:\n• Werk **uitsluitend** — sluit antwoorden die NIET de situatie beschrijven uit.\n• Vermijd antwoorden die alleen **letterlijk** passen *(als het verhaal over eten gaat, hoeft het spreekwoord niet over eten te gaan)*.\n• Kijk naar **kern-emotie** *(verdriet, dapperheid, geduld, hebzucht, samenwerking)*.\n\n**Veel-voorkomende valkuilen**:\n• Twee spreekwoorden lijken op elkaar *(bijv. 'Beter laat dan nooit' vs 'Haastige spoed is zelden goed')* — kies welke past bij de **richting** van situatie.\n• Soms past geen enkel perfect → kies het **dichtstbijzijnde**.",
    checks: [
      {
        q: "Marie kreeg 's morgens een rapport met 1 zes — verdrietig. 's Middags kreeg ze een lieve brief van oma. Spreekwoord?",
        options: ["Na regen komt zonneschijn", "Goedkoop is duurkoop", "Vele handen", "Hoge bomen"],
        answer: 0,
        wrongHints: [null, "Niet over geld.", "Niet over samen.", "Niet."],
      },
      {
        q: "Tien klasgenoten ruimden samen het lokaal — duurde 10 min ipv 1 uur. Spreekwoord?",
        options: ["Vele handen maken licht werk", "Beter laat dan nooit", "Op rozen zitten", "Hoge bomen"],
        answer: 0,
        wrongHints: [null, "Niet over tijd.", "Niet.", "Niet."],
      },
      {
        q: "Tom kocht 6 paar goedkope schoenen — alle 6 binnen 2 maanden kapot. Spreekwoord?",
        options: ["Goedkoop is duurkoop", "Vele vrienden", "Op rozen", "Vele handen"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Anna's broer was wereldberoemd → kreeg veel haatmail + kritiek. Spreekwoord?",
        options: ["Hoge bomen vangen veel wind", "Goedkoop is duurkoop", "Beter laat dan nooit", "Vele handen"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Cito-strategie + valkuilen",
    explanation:
      "**Cito-tips** voor uitdrukking-vragen:\n\n**1. Letterlijk uitsluiten**:\nVraag noemt 'koe bij horens vatten' → antwoord met 'koe op boerderij' is letterlijk = bijna altijd fout.\n\n**2. Twee opties die lijken op elkaar**:\nSoms zijn twee opties bijna hetzelfde — kies de **specifieke** boven de algemene.\n• *'Iets met een korreltje zout nemen'* = **niet alles letterlijk geloven**.\n• Niet: 'iets met zout strooien' *(letterlijk)*.\n\n**3. Context-woorden zoeken**:\nIn de situatie staan vaak **signaalwoorden**:\n• *'Hij wachtte maandenlang...'* → spreekwoord over geduld.\n• *'Plotseling...'* → spreekwoord over onverwachte gebeurtenis.\n• *'Iedereen samen...'* → spreekwoord over samenwerken.\n• *'Hij had spijt...'* → spreekwoord over fout/leren.\n\n**4. Begint met 'beter' of 'wie...'**:\nVeel spreekwoorden beginnen zo:\n• *'Beter laat dan nooit'* / *'Beter een vogel in de hand'* / *'Beter een goede buur'*.\n• *'Wie A doet, krijgt B'* — een 'als-dan' regel.\n\n**5. Tijd-aanduidingen letten**:\n• Spreekwoorden met *'morgen / vandaag'* gaan vaak over timing.\n• *'Komt tijd, komt raad.'* — wacht maar.\n\n**6. Drie soorten foute antwoorden Cito gebruikt**:\n• **Letterlijk** *(over koe als dier)*.\n• **Klinkt similar** *(zelfde dier maar andere les)*.\n• **Helemaal niets met situatie** *(afleider)*.\n\n**7. Bij volledig onbekend spreekwoord**:\nKijk in de optie naar **kern-woorden**:\n• 'Boter' → over schuld of eerlijkheid.\n• 'Hand' → over werken of nemen.\n• 'Tijd' → over geduld.\n• 'Geld' → over zuinigheid.\n\n**8. Lijst voor thuis**:\nMaak je eigen lijst van 30 uitdrukkingen + spreekwoorden die je vaak tegenkomt. Schrijf ernaast wat ze betekenen. Oefen elke avond 5 minuten.\n\n**9. Niet stressen**:\nCito vraagt op 50 vragen ongeveer 3-5 spreekwoord-uitdrukking-vragen. Dat is **6-10%**. Belangrijk maar geen toets-bepaler.\n\n**Voorbeeld-vraag**:\n*'Welke uitdrukking betekent: iemand in de problemen brengen?'*\nA. Het stof opwerken.\nB. Op het verkeerde paard wedden.\nC. Iemand met de neus op de feiten drukken.\nD. Op tijd opzeggen.\n\n**Antwoord**: C — iemand wijzen op een fout / probleem.\n\n**Cito-feitje**:\nKinderen die thuis veel **lezen** scoren gemiddeld 20% hoger op spreekwoord-vragen. Lees boeken met dialoog en oude verhalen — daar zitten veel uitdrukkingen in.",
    checks: [
      {
        q: "Hoe vaak komen **spreekwoord/uitdrukking-vragen** op Cito ongeveer voor?",
        options: ["3-5 vragen (6-10%)", "Helft", "Alle", "Geen"],
        answer: 0,
        wrongHints: [null, "Veel minder.", "Niet.", "Wel."],
      },
      {
        q: "Hoe **letterlijk uitsluiten** werkt bij Cito?",
        options: ["Antwoord met figuurlijk = vaak goed", "Letterlijk is goed", "Beide", "Geen verschil"],
        answer: 0,
        wrongHints: [null, "Bijna nooit.", "Niet.", "Wel."],
      },
      {
        q: "*'Iemand met de neus op de feiten drukken'* — wat?",
        options: ["Wijzen op fout/probleem", "Vechten", "Letterlijk", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Niet — geen geweld.", "Figuurlijk.", "Wel."],
      },
      {
        q: "Bij **onbekend** spreekwoord — wat doen?",
        options: ["Kijk naar kern-woorden + context", "Maar gokken", "Skippen", "Vraag hulp"],
        answer: 0,
        wrongHints: [null, "Beter slim gokken.", "Niet.", "Niet op toets."],
      },
    ],
  },
  {
    title: "Eind-toets — uitdrukking mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "*'Twee vliegen in één klap'* — wat?", options: ["Twee dingen tegelijk lukken", "Letterlijk vliegen", "Boos", "Sneller"], answer: 0, wrongHints: [null, "Figuurlijk.", "Niet.", "Wel maar specifiek."] },
      { q: "*'Beter een vogel in de hand dan tien in de lucht'* — les?", options: ["Wat je hebt is meer waard dan onzekerheid", "Vogels", "Tellen", "Vliegen"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "Wat is **figuurlijk taalgebruik**?", options: ["Woorden in andere betekenis", "Letterlijk", "Spelling", "Som"], answer: 0, wrongHints: [null, "Tegenovergesteld.", "Niet.", "Niet."] },
      { q: "*'Op rozen zitten'* — wat?", options: ["Het heel goed hebben", "Letterlijk", "Pijn", "Tuinieren"], answer: 0, wrongHints: [null, "Figuurlijk.", "Tegenovergesteld.", "Niet."] },
      { q: "*'Onbekend maakt onbemind'* — les?", options: ["Wat je niet kent, vind je niet mooi", "Onbekend", "Geheim", "Mind games"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "Wat is een **vergelijking**?", options: ["'Zo X als Y'-zin", "Som", "Spreekwoord", "Verhaal"], answer: 0, wrongHints: [null, "Niet.", "Niet primair.", "Niet."] },
      { q: "*'De **kogel** is door de kerk.'* Wat betekent dit?", options: ["Definitief besluit genomen","Geweld","Religieuze actie","Sport"], answer: 0, wrongHints: [null, "Letterlijk lezen.", "Niet hoofdbetekenis.", "Niet."] },
      { q: "*'Vele handen maken licht werk.'* — betekenis?", options: ["Samen gaat het makkelijker","Veel handen wegen niets","Licht zien","Niets"], answer: 0, wrongHints: [null, "Letterlijk gelezen.", "Niet bedoeld.", "Wel."] },
      { q: "*'Aan zijn lot overlaten.'* — betekenis?", options: ["Iemand niet helpen","Lot kopen","Loten trekken","Spelen"], answer: 0, wrongHints: [null, "Letterlijk.", "Niet.", "Niet."] },
      { q: "Wat is een **figuurlijke uitdrukking**?", options: ["Niet letterlijk, beeldspraak","Letterlijk","Wiskundige formule","Tekening"], answer: 0, wrongHints: [null, "Tegenstelling.", "Niet.", "Niet."] },
      { q: "*'Iemand iets onder de neus wrijven.'* — betekenis?", options: ["Iemand er steeds aan herinneren","Iemand schoonmaken","Iemand kietelen","Niet relevant"], answer: 0, wrongHints: [null, "Letterlijk.", "Niet.", "Wel."] },
      { q: "*'Op één lijn zitten.'* — betekenis?", options: ["Eens zijn","Wachten in een rij","Sport","Niet relevant"], answer: 0, wrongHints: [null, "Letterlijk.", "Niet.", "Wel."] },
      { q: "*'De druppel die de emmer doet overlopen.'* — betekenis?", options: ["Laatste reden waardoor je boos wordt","Letterlijk water","Klein probleem","Goed nieuws"], answer: 0, wrongHints: [null, "Letterlijk.", "Tegenovergesteld.", "Niet."] },
      { q: "*'Een kat in de zak kopen.'* — betekenis?", options: ["Iets kopen dat tegenvalt","Echte kat kopen","Niet relevant","Goedkoop"], answer: 0, wrongHints: [null, "Letterlijk.", "Wel uitdrukking.", "Niet primair."] },
      { q: "*'Een appeltje voor de dorst.'* — betekenis?", options: ["Geld bewaren voor later","Letterlijk fruit","Recept","Niet relevant"], answer: 0, wrongHints: [null, "Letterlijk.", "Niet.", "Wel."] },
      { q: "*'Met de neus in de boter vallen.'* — betekenis?", options: ["Net op tijd komen voor iets goeds","Niet relevant","Verlies","Vies worden"], answer: 0, wrongHints: [null, "Wel.", "Tegengestelde.", "Letterlijk."] },
      { q: "*'Boontje komt om zijn loontje.'* — betekenis?", options: ["Wie kwaad doet, krijgt straf","Boontjes kopen","Niet relevant","Eten geven"], answer: 0, wrongHints: [null, "Letterlijk.", "Wel.", "Niet."] },
      { q: "*'Een open deur intrappen.'* — betekenis?", options: ["Iets zeggen dat iedereen al weet","Inbraak","Voetbal","Letterlijk"], answer: 0, wrongHints: [null, "Letterlijk.", "Niet.", "Niet bedoeld."] },
      { q: "*'Met twee maten meten.'* — betekenis?", options: ["Iets oneerlijk beoordelen","Wiskunde doen","Meten","Niet relevant"], answer: 0, wrongHints: [null, "Letterlijk.", "Letterlijk.", "Wel."] },
      { q: "*'Knollen voor citroenen verkopen.'* — betekenis?", options: ["Mensen bedriegen","Markt","Niet relevant","Recept"], answer: 0, wrongHints: [null, "Letterlijk.", "Wel.", "Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const spreekwoordenUitdrukkingenPo = {
  id: "spreekwoorden-uitdrukkingen-po",
  title: "Spreekwoorden + uitdrukkingen (Cito groep 6-8)",
  emoji: "💬",
  level: "groep6-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taal — figuurlijk taalgebruik / Cito",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "1F" },
  ],
  intro:
    "Spreekwoorden + uitdrukkingen voor Cito groep 6-8 — letterlijk vs figuurlijk + top-30 uitdrukkingen (lichaam/dier/eten) + top-20 spreekwoorden + matching-strategie (Cito-vraag) + valkuilen. ~15 min.",
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
