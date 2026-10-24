// Leerpad: Algoritmen + programmeren - groep 6-8.
// Herschreven 24 okt 2026 (Mark: "zijn die vragen voor groep 8 niet te
// moeilijk?"). Oude versie had middelbare-schoolstof in de uitleg (Big-O,
// quicksort, goto) en vooral namen-weetjes als vraag. Nu: Robot Rob als vast
// figuur, uitleg kort en in gewone taal, vragen die laten DENKEN (volgorde,
// herhalen, als-dan, onthouden, fout zoeken). 4 delen, eindtoets 10 vragen.

const stepEmojis = ["📋", "🔁", "🧩", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een algoritme?", emoji: "📋", from: 0, to: 0 },
  { letter: "B", title: "Herhalen, als-dan en onthouden", emoji: "🔁", from: 1, to: 1 },
  { letter: "C", title: "Programmeren met blokjes", emoji: "🧩", from: 2, to: 2 },
  { letter: "D", title: "Eindtoets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Wat is een algoritme?",
    explanation:
      "Maak kennis met **Robot Rob** 🤖. Rob doet precies wat je zegt. Niet meer, niet minder.\n\n" +
      "Wil je dat Rob iets doet? Dan geef je hem een **stappenplan**: stap 1, stap 2, stap 3. " +
      "Zo'n stappenplan heet een **algoritme**.\n\n" +
      "Je kent er al veel:\n" +
      "• Een **recept** voor pannenkoeken.\n" +
      "• De **route** naar school.\n" +
      "• **Tanden poetsen**: borstel pakken, tandpasta erop, poetsen, spoelen.\n\n" +
      "Twee dingen zijn belangrijk:\n" +
      "1. **De volgorde.** Eerst de tandpasta, dan poetsen. Andersom werkt het niet.\n" +
      "2. **Niets overslaan.** Een mens snapt wat je bedoelt. Rob niet: vergeet je een stap, dan doet hij die gewoon niet.\n\n" +
      "Een computer werkt net als Rob. Een app op je telefoon is één groot stappenplan dat iemand heeft geschreven.\n\n" +
      "**Weetje:** de route-app op een telefoon zoekt de kortste weg met een slim stappenplan. Een van de bekendste is bedacht door een Nederlander, Edsger Dijkstra.",
    checks: [
      {
        q: "Robot Rob moet een boterham met hagelslag maken. In welke volgorde moeten de stappen?",
        options: [
          "Brood pakken → boter smeren → hagelslag erop → opeten",
          "Boter smeren → brood pakken → hagelslag erop → opeten",
          "Hagelslag erop → brood pakken → boter smeren → opeten",
          "Brood pakken → hagelslag erop → opeten → boter smeren",
        ],
        answer: 0,
        wrongHints: [null, "Kan Rob boter smeren als hij nog geen brood heeft?", "Waar valt de hagelslag op als er nog geen brood ligt?", null],
        uitlegPad: {
          stappen: [
            { titel: "Wat heb je eerst nodig?", tekst: "Zonder brood kun je niets smeren of strooien. Dus stap 1 is: brood pakken." },
            { titel: "Wat moet eronder?", tekst: "De boter houdt de hagelslag vast. Dus eerst boter, dan hagelslag." },
            { titel: "Wat komt als laatste?", tekst: "Opeten doe je pas als de boterham klaar is." },
          ],
          woorden: [{ woord: "volgorde", uitleg: "Welke stap eerst komt, welke daarna." }],
          niveaus: {
            basis: "Bij een algoritme telt de volgorde: brood, boter, hagelslag, opeten.",
            simpeler: "Vraag bij elke stap: kan dit al, of heb ik eerst iets anders nodig?",
            nogSimpeler: "Eerst het brood. Wat komt daarna op het brood?",
          },
        },
      },
      {
        q: "Wat is een **algoritme**?",
        options: [
          "Een stappenplan om iets te doen of op te lossen",
          "Een heel snelle computer",
          "Een fout in een computerspel",
          "Een knop op het toetsenbord",
        ],
        answer: 0,
        wrongHints: [null, "Een computer is een apparaat. Is een algoritme een ding dat je kunt vastpakken?", null, "Kun je een knop stap voor stap volgen?"],
        uitlegPad: {
          stappen: [
            { titel: "Een stappenplan", tekst: "Een algoritme is een rijtje stappen in de goede volgorde. Volg je ze, dan lukt de klus." },
            { titel: "Overal om je heen", tekst: "Een recept, een routebeschrijving en de handleiding van een bouwdoos zijn allemaal algoritmes." },
          ],
          woorden: [{ woord: "algoritme", uitleg: "Een stappenplan om iets te doen of op te lossen." }],
          niveaus: {
            basis: "Algoritme = stappenplan.",
            simpeler: "Denk aan een recept: stap 1, stap 2, stap 3.",
            nogSimpeler: "Een recept is een algoritme. Wat is een recept?",
          },
        },
      },
      {
        q: "Rob gaat tanden poetsen:\n1. Pak de tandenborstel.\n2. ???\n3. Poets 2 minuten.\n4. Spoel je mond.\n\nWelke stap ontbreekt?",
        options: [
          "Doe tandpasta op de borstel",
          "Ga naar bed",
          "Spoel je mond",
          "Eet je ontbijt",
        ],
        answer: 0,
        wrongHints: [null, "Hoort dat bij het poetsen zelf?", "Staat die stap er al?", null],
        uitlegPad: {
          stappen: [
            { titel: "Loop het plan na", tekst: "Rob heeft de borstel. Dan gaat hij poetsen. Wat zit er nog niet op de borstel?" },
            { titel: "Rob raadt niets", tekst: "Een mens doet vanzelf tandpasta op de borstel. Rob niet: staat het er niet, dan poetst hij zonder." },
          ],
          niveaus: {
            basis: "Tussen borstel pakken en poetsen hoort: tandpasta erop.",
            simpeler: "Wat doe jij zelf vlak voordat je gaat poetsen?",
            nogSimpeler: "Wat smeer je op je tandenborstel?",
          },
        },
      },
      {
        q: "Waarom moet je een computer **elke stap** precies vertellen?",
        options: [
          "Hij doet alleen wat er staat en raadt zelf niets",
          "Anders gaat hij te snel",
          "Anders wordt hij te warm",
          "Een computer kan niet lezen",
        ],
        answer: 0,
        wrongHints: [null, "Heeft snelheid iets te maken met een vergeten stap?", null, "Een computer leest de opdrachten juist wel. Maar vult hij zelf iets aan?"],
        uitlegPad: {
          stappen: [
            { titel: "Mens of computer?", tekst: "Zeg je tegen een vriend 'maak een boterham', dan snapt hij alles zelf. Een computer niet: die volgt alleen de stappen die er staan." },
          ],
          niveaus: {
            basis: "Een computer volgt precies het stappenplan en vult zelf niets aan.",
            simpeler: "Rob raadt nooit wat je bedoelt. Wat gebeurt er met een stap die je vergeet?",
            nogSimpeler: "Doet Rob een stap die er niet staat?",
          },
        },
      },
    ],
  },
  {
    title: "Herhalen, als-dan en onthouden",
    explanation:
      "Programmeurs gebruiken een paar handige **bouwstenen**. Drie ervan leer je nu.\n\n" +
      "**1. Herhalen** 🔁\n" +
      "In plaats van tien keer 'stap vooruit' schrijf je: **Herhaal 10 keer: [stap vooruit]**. " +
      "Rob doet wat tussen de haken staat, steeds opnieuw. Programmeurs noemen dat een **lus** (Engels: *loop*).\n\n" +
      "**2. Als-dan** 🚦\n" +
      "Soms moet Rob kiezen. **ALS het licht rood is → wachten. ANDERS → doorlopen.** " +
      "Rob kijkt eerst of het waar is, en doet dan maar één van de twee.\n\n" +
      "**3. Onthouden** 📦\n" +
      "Rob kan iets bewaren in een doosje met een naam, bijvoorbeeld **punten**. " +
      "Begint het spel, dan is **punten = 0**. Pakt Rob een munt, dan wordt het **punten + 1**. " +
      "Zo'n doosje heet een **variabele**: wat erin zit kan veranderen.\n\n" +
      "Met deze drie bouwstenen zijn bijna alle spelletjes gemaakt.",
    checks: [
      {
        q: "Rob krijgt deze opdracht:\n**Herhaal 3 keer: [zet 1 stap vooruit]**\n\nHoeveel stappen zet Rob in totaal?",
        options: ["3", "1", "4", "6"],
        answer: 0,
        wrongHints: [null, "Hoe vaak doet Rob wat tussen de haken staat?", null, "Zet Rob bij elke herhaling 2 stappen, of 1?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat staat tussen de haken?", tekst: "Tussen de haken staat: zet 1 stap vooruit." },
            { titel: "Hoe vaak?", tekst: "Herhaal 3 keer. Dus: 1 stap, nog 1 stap, nog 1 stap." },
            { titel: "Tel op", tekst: "1 + 1 + 1 = 3 stappen." },
          ],
          woorden: [{ woord: "lus", uitleg: "Een stukje programma dat steeds wordt herhaald. Engels: loop." }],
          niveaus: {
            basis: "Herhaal 3 keer × 1 stap = 3 stappen.",
            simpeler: "Loop het zelf: 1 stap, nog 1, nog 1. Hoeveel?",
            nogSimpeler: "Hoe vaak staat er 'herhaal'? 3 keer.",
          },
        },
      },
      {
        q: "Rob krijgt deze opdracht:\n**Herhaal 4 keer: [loop 1 meter vooruit, draai een kwartslag naar rechts]**\n\nWelke vorm loopt Rob?",
        options: ["Een vierkant", "Een rechte lijn", "Een driehoek", "Een cirkel"],
        answer: 0,
        wrongHints: [null, "Rob draait elke keer. Blijft hij dan rechtdoor lopen?", "Hoeveel kanten loopt Rob? Tel de herhalingen.", null],
        uitlegPad: {
          stappen: [
            { titel: "Teken het na", tekst: "Pak een papiertje. Trek een streep, draai een kwartslag, trek weer een streep. Doe dat 4 keer." },
            { titel: "Wat zie je?", tekst: "4 even lange kanten met 4 rechte hoeken: een vierkant. Rob staat aan het eind weer waar hij begon." },
          ],
          niveaus: {
            basis: "4 kanten met elke keer een kwartslag draaien = een vierkant.",
            simpeler: "Teken het op papier: streep, draaien, streep, draaien… Welke vorm heeft 4 kanten en 4 rechte hoeken?",
            nogSimpeler: "Welke vorm heeft 4 even lange kanten?",
          },
        },
      },
      {
        q: "Rob heeft deze regel:\n**ALS het stoplicht rood is → wachten. ANDERS → doorlopen.**\n\nHet stoplicht is **groen**. Wat doet Rob?",
        options: ["Doorlopen", "Wachten", "Omdraaien", "Niets, hij snapt het niet"],
        answer: 0,
        wrongHints: [null, "Is groen hetzelfde als rood? Welk deel van de regel geldt dan?", "Staat omdraaien ergens in de regel?", null],
        uitlegPad: {
          stappen: [
            { titel: "Klopt het ALS-deel?", tekst: "De regel vraagt: is het licht rood? Het is groen, dus nee." },
            { titel: "Dan het ANDERS-deel", tekst: "Klopt het ALS-deel niet, dan doet Rob wat na ANDERS staat: doorlopen." },
          ],
          woorden: [{ woord: "als-dan", uitleg: "Een keuze: als iets waar is, doe dit. Anders doe dat." }],
          niveaus: {
            basis: "Groen is niet rood, dus geldt het ANDERS-deel: doorlopen.",
            simpeler: "Is het licht rood? Nee. Wat staat er na ANDERS?",
            nogSimpeler: "Wat doe jij zelf bij groen licht?",
          },
        },
      },
      {
        q: "**ALS het regent → paraplu mee. ANDERS → pet op.**\n\nHet is een zonnige dag. Wat neemt Rob mee?",
        options: ["Een pet", "Een paraplu", "Allebei", "Niets"],
        answer: 0,
        wrongHints: [null, "Regent het vandaag?", "Doet Rob bij als-dan allebei, of maar één van de twee?", null],
        uitlegPad: {
          stappen: [
            { titel: "Klopt het ALS-deel?", tekst: "Regent het? Nee, het is zonnig." },
            { titel: "Kies het andere deel", tekst: "Dan doet Rob wat na ANDERS staat: pet op. Bij als-dan doet Rob altijd maar één van de twee." },
          ],
          niveaus: {
            basis: "Het regent niet, dus het ANDERS-deel: pet op.",
            simpeler: "Eerst kijken: regent het? Zo nee, wat staat er na ANDERS?",
            nogSimpeler: "Wat zet je op tegen de zon?",
          },
        },
      },
      {
        q: "In een spel staat:\n**punten = 0**\nRob pakt 3 munten. Bij elke munt: **punten = punten + 1**\n\nHoeveel punten heeft Rob nu?",
        options: ["3", "0", "1", "4"],
        answer: 0,
        wrongHints: [null, "Blijft het doosje leeg als Rob munten pakt?", "Krijgt Rob alleen bij de eerste munt een punt?", null],
        uitlegPad: {
          stappen: [
            { titel: "Het begint bij 0", tekst: "In het doosje 'punten' zit eerst 0." },
            { titel: "Elke munt +1", tekst: "Munt 1: 0 + 1 = 1. Munt 2: 1 + 1 = 2. Munt 3: 2 + 1 = 3." },
          ],
          woorden: [{ woord: "variabele", uitleg: "Een doosje met een naam waarin de computer iets onthoudt. Wat erin zit kan veranderen." }],
          niveaus: {
            basis: "0 + 1 + 1 + 1 = 3 punten.",
            simpeler: "Begin bij 0 en tel bij elke munt er 1 bij.",
            nogSimpeler: "3 munten, elke munt 1 punt. Hoeveel?",
          },
        },
      },
    ],
  },
  {
    title: "Programmeren met blokjes",
    explanation:
      "Echte programmeurs typen hun stappenplan in een **programmeertaal**. Voor kinderen bestaat er iets makkelijkers: **Scratch**. " +
      "Daar schuif je **blokjes** in elkaar, zoals puzzelstukjes. Elk blokje is één opdracht: 'loop 10 stappen', 'herhaal', 'als … dan'.\n\n" +
      "**Fouten horen erbij** 🐞\n" +
      "Bijna elk programma doet de eerste keer iets wat je niet wilde. Zo'n fout heet een **bug** (Engels voor 'beestje'). " +
      "De fout zoeken en verbeteren heet **debuggen**.\n\n" +
      "Hoe vind je een bug? Doe alsof jij Rob bent. Loop het programma **stap voor stap** na en kijk bij elke stap: gebeurt hier wat ik wil?\n\n" +
      "**Overal zitten programma's in**: een spelcomputer, een wasmachine, een verkeerslicht, een robotstofzuiger. " +
      "Iemand heeft daar een stappenplan voor geschreven.\n\n" +
      "**Weetje:** de allereerste programmeur was een vrouw, Ada Lovelace. Bijna 200 jaar geleden schreef ze al een stappenplan voor een rekenmachine.",
    checks: [
      {
        q: "Hoe programmeer je in **Scratch**?",
        options: [
          "Door blokjes met opdrachten in elkaar te schuiven",
          "Door op het scherm te tekenen",
          "Door hardop te praten tegen de computer",
          "Door heel veel lange zinnen te typen",
        ],
        answer: 0,
        wrongHints: [null, null, "Luistert Scratch naar je stem?", "Scratch is juist gemaakt om typen makkelijker te maken. Waarmee werk je dan?"],
        uitlegPad: {
          stappen: [
            { titel: "Blokjes als puzzelstukjes", tekst: "In Scratch is elke opdracht een gekleurd blokje. Je schuift ze onder elkaar en zo bouw je een stappenplan." },
          ],
          niveaus: {
            basis: "Scratch = blokjes met opdrachten in elkaar schuiven.",
            simpeler: "Denk aan puzzelstukjes die je aan elkaar klikt.",
            nogSimpeler: "Waar bouw je mee in Scratch: blokjes of woorden?",
          },
        },
      },
      {
        q: "De deur is **3 stappen** vóór Rob. Het programma zegt:\n**Herhaal 2 keer: [zet 1 stap vooruit]**\n\nRob komt niet bij de deur. Wat is de bug?",
        options: [
          "Er moet 'herhaal 3 keer' staan",
          "Rob moet eerst draaien",
          "Er moet 'herhaal 1 keer' staan",
          "Rob moet 2 stappen achteruit",
        ],
        answer: 0,
        wrongHints: [null, "Staat de deur recht voor Rob of opzij?", "Komt Rob dan dichterbij of verder weg van de deur?", null],
        uitlegPad: {
          stappen: [
            { titel: "Wat doet het programma nu?", tekst: "Herhaal 2 keer 1 stap = 2 stappen. Rob staat dan nog 1 stap voor de deur." },
            { titel: "Wat is nodig?", tekst: "De deur is 3 stappen weg. Dus moet Rob 3 keer een stap zetten: herhaal 3 keer." },
          ],
          woorden: [
            { woord: "bug", uitleg: "Een fout in een programma." },
            { woord: "debuggen", uitleg: "De fout zoeken en verbeteren." },
          ],
          niveaus: {
            basis: "2 stappen is te weinig; de deur is 3 stappen weg → herhaal 3 keer.",
            simpeler: "Tel: hoeveel stappen zet Rob nu, en hoeveel moet hij er zetten?",
            nogSimpeler: "Rob mist 1 stap. Moet het getal groter of kleiner?",
          },
        },
      },
      {
        q: "Hoe heet een **fout** in een computerprogramma?",
        options: ["Een bug", "Een lus", "Een variabele", "Een algoritme"],
        answer: 0,
        wrongHints: [null, "Een lus is herhalen. Is herhalen een fout?", "Een variabele is een doosje dat iets onthoudt. Is dat een fout?", null],
        uitlegPad: {
          stappen: [
            { titel: "Een beestje in de machine", tekst: "Bug is Engels voor 'beestje'. Programmeurs noemen een fout zo, alsof er een beestje in het programma zit dat dingen verkeerd laat gaan." },
          ],
          niveaus: {
            basis: "Een fout in een programma heet een bug.",
            simpeler: "Het Engelse woord voor 'beestje'.",
            nogSimpeler: "Begint met een b.",
          },
        },
      },
      {
        q: "Je spelletje in Scratch doet iets raars. Wat is de **slimste** manier om de fout te vinden?",
        options: [
          "Stap voor stap nakijken wat elk blokje doet",
          "Alles weggooien en opnieuw beginnen",
          "Er snel nog meer blokjes bij zetten",
          "De computer uit- en weer aanzetten",
        ],
        answer: 0,
        wrongHints: [null, "Dan ben je ook alles kwijt wat wél goed was. Kan het slimmer?", null, "Staan de blokjes daarna anders?"],
        uitlegPad: {
          stappen: [
            { titel: "Speel zelf Rob", tekst: "Lees het eerste blokje: wat gebeurt er? Klopt dat? Dan het volgende blokje. Zo vind je precies waar het misgaat." },
          ],
          niveaus: {
            basis: "Debuggen = stap voor stap nakijken waar het misgaat.",
            simpeler: "Doe alsof jij de robot bent en volg elk blokje.",
            nogSimpeler: "Kijk elk blokje na, één voor één.",
          },
        },
      },
      {
        q: "In welk van deze dingen zit **geen** computerprogramma?",
        options: ["Een houten stoel", "Een verkeerslicht", "Een wasmachine", "Een spelcomputer"],
        answer: 0,
        wrongHints: [null, "Wie bepaalt wanneer het licht op groen springt?", "Hoe weet de wasmachine hoe lang hij moet draaien?", null],
        uitlegPad: {
          stappen: [
            { titel: "Doet het zelf iets?", tekst: "Een apparaat dat zelf dingen doet in een vaste volgorde (licht aan, licht uit, draaien, stoppen) werkt met een programma." },
            { titel: "En een stoel?", tekst: "Een houten stoel doet niets uit zichzelf. Daar zit geen stappenplan in." },
          ],
          niveaus: {
            basis: "Een houten stoel heeft geen stroom en doet niets zelf, dus geen programma.",
            simpeler: "Welk ding heeft geen stroom en doet nooit iets uit zichzelf?",
            nogSimpeler: "Waar kun je alleen op zitten?",
          },
        },
      },
    ],
  },
  {
    title: "Eindtoets",
    explanation: "Laat zien wat je weet: 10 vragen over stappenplannen, herhalen, als-dan, onthouden en bugs. Tip: doe bij elke vraag alsof jij Robot Rob bent.",
    checks: [
      {
        q: "Rob bakt een pannenkoek. Welke stap komt **als eerste**?",
        options: ["Beslag maken", "Pannenkoek omdraaien", "Op een bord leggen", "Stroop erop doen"],
        answer: 0,
        wrongHints: [null, "Wat moet er in de pan liggen voordat je kunt omdraaien?", null, "Waar doe je de stroop op als er nog geen pannenkoek is?"],
      },
      {
        q: "**Herhaal 5 keer: [spring]**\n\nHoe vaak springt Rob?",
        options: ["5 keer", "1 keer", "6 keer", "10 keer"],
        answer: 0,
        wrongHints: [null, "Hoe vaak doet Rob wat tussen de haken staat?", null, "Staat er 2 keer 'spring' tussen de haken?"],
      },
      {
        q: "**Herhaal 3 keer: [zet 2 stappen vooruit]**\n\nHoeveel stappen zet Rob in totaal?",
        options: ["6", "3", "5", "2"],
        answer: 0,
        wrongHints: [null, "Zet Rob per keer 1 stap, of 2?", null, "Doet Rob het maar één keer?"],
        uitlegPad: {
          stappen: [{ titel: "Per keer 2 stappen", tekst: "Keer 1: 2 stappen. Keer 2: nog 2. Keer 3: nog 2. Samen 2 + 2 + 2 = 6." }],
          niveaus: {
            basis: "3 keer × 2 stappen = 6 stappen.",
            simpeler: "Tel 2 + 2 + 2.",
            nogSimpeler: "3 keer 2 is…?",
          },
        },
      },
      {
        q: "De taart ligt **4 vakjes** recht vóór Rob. Welk programma brengt Rob **precies** bij de taart?",
        options: [
          "Herhaal 4 keer: [1 vakje vooruit]",
          "Herhaal 2 keer: [1 vakje vooruit]",
          "Herhaal 4 keer: [draai naar rechts]",
          "Herhaal 5 keer: [1 vakje vooruit]",
        ],
        answer: 0,
        wrongHints: [null, "Komt Rob dan ver genoeg?", "Komt Rob vooruit als hij alleen draait?", "Komt Rob dan precies bij de taart, of loopt hij er voorbij?"],
      },
      {
        q: "**ALS je 10 punten of meer hebt → 'Gewonnen!' ANDERS → 'Probeer opnieuw'**\n\nJe hebt **8 punten**. Wat zegt het spel?",
        options: ["Probeer opnieuw", "Gewonnen!", "Allebei", "Niets"],
        answer: 0,
        wrongHints: [null, "Is 8 punten 10 of meer?", "Kiest het spel bij als-dan allebei, of één?", null],
        uitlegPad: {
          stappen: [
            { titel: "Klopt het ALS-deel?", tekst: "Heb je 10 of meer? 8 is minder dan 10, dus nee." },
            { titel: "Dan ANDERS", tekst: "Het spel zegt wat na ANDERS staat: 'Probeer opnieuw'." },
          ],
          niveaus: {
            basis: "8 is minder dan 10, dus het ANDERS-deel: 'Probeer opnieuw'.",
            simpeler: "Is 8 groter of kleiner dan 10?",
            nogSimpeler: "Heb je genoeg punten om te winnen?",
          },
        },
      },
      {
        q: "**ALS het 7 uur is → de wekker piept.**\n\nHet is **6 uur**. Wat doet de wekker?",
        options: ["Niets, hij blijft stil", "Hij piept", "Hij piept twee keer", "Hij gaat uit"],
        answer: 0,
        wrongHints: [null, "Is het al 7 uur?", null, "Staat 'uitgaan' ergens in de regel?"],
      },
      {
        q: "Rob heeft **munten = 5**. Hij koopt een snoepje: **munten = munten − 2**.\n\nHoeveel munten heeft Rob nu?",
        options: ["3", "7", "5", "2"],
        answer: 0,
        wrongHints: [null, "Krijgt Rob er munten bij als hij iets koopt?", "Verandert er niets in het doosje?", null],
        uitlegPad: {
          stappen: [{ titel: "Wat zat er in het doosje?", tekst: "Eerst 5 munten. Er gaan er 2 af: 5 − 2 = 3." }],
          niveaus: {
            basis: "5 − 2 = 3 munten.",
            simpeler: "Je had 5 en je geeft er 2 uit.",
            nogSimpeler: "5 min 2 is…?",
          },
        },
      },
      {
        q: "Hoe heet het als je een **fout in je programma** zoekt en verbetert?",
        options: ["Debuggen", "Herhalen", "Onthouden", "Opslaan"],
        answer: 0,
        wrongHints: [null, "Herhalen is iets steeds opnieuw doen. Zoek je dan een fout?", null, "Verbeter je een fout door op te slaan?"],
      },
      {
        q: "Waarom is een **recept** een algoritme?",
        options: [
          "Het heeft vaste stappen in de goede volgorde",
          "Het staat altijd op een computer",
          "Het is altijd heel lang",
          "Je kunt het opeten",
        ],
        answer: 0,
        wrongHints: [null, "Staat een recept in een kookboek ook op een computer?", null, "Eet je het recept, of wat je ermee maakt?"],
      },
      {
        q: "Rob staat voor een **plas**. Zijn regel: **ALS er een plas is → spring eroverheen. ANDERS → gewoon lopen.**\n\nWat doet Rob nu?",
        options: ["Over de plas springen", "Gewoon lopen", "Stoppen", "Omdraaien"],
        answer: 0,
        wrongHints: [null, "Is er een plas of niet?", null, "Staat omdraaien ergens in de regel?"],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const algoritmenProgrammerenPo = {
  id: "algoritmen-programmeren-po",
  title: "Algoritmen + programmeren (groep 6-8, Doorstroomtoets-stof)",
  emoji: "📋",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / digitaal",
  prerequisites: [
    { id: "digitale-geletterdheid-po", title: "Digitale geletterdheid", niveau: "1F" },
  ],
  intro:
    "Programmeren voor groep 6-8 met Robot Rob: wat een algoritme (stappenplan) is, herhalen, als-dan, onthouden en fouten (bugs) zoeken. Zonder computer te snappen, ~15 min.",
  triggerKeywords: [
    "algoritme", "stappenplan",
    "programmeren", "code", "coderen",
    "Scratch", "robot",
    "herhalen", "lus", "loop",
    "als-dan", "if-else",
    "variabele", "bug", "debuggen",
  ],
  chapters,
  steps,
};

export default algoritmenProgrammerenPo;
