// Leerpad: Breuken, procenten & kommagetallen omzetten — groep 7-8 PO.
// Doorstroomtoets-onderdeel rekenen. De drie schrijfwijzen van een deel
// (1/2 = 0,5 = 50%) naar elkaar omzetten en vergelijken.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Breuk ↔ kommagetal", emoji: "🔢", from: 0, to: 0 },
  { letter: "B", title: "Kommagetal ↔ procent", emoji: "％", from: 1, to: 1 },
  { letter: "C", title: "Breuk ↔ procent", emoji: "🍰", from: 2, to: 2 },
  { letter: "D", title: "In het echt: vergelijken", emoji: "⚖️", from: 3, to: 3 },
];

const steps = [
  // ─── A. Breuk ↔ kommagetal ────────────────────────────────
  {
    title: "Breuk en kommagetal",
    explanation:
      "Een **deel** kun je op drie manieren opschrijven: als **breuk**, als **kommagetal** en als **procent**. Ze betekenen hetzelfde.\n\n" +
      "**Handige om uit je hoofd te kennen:**\n" +
      "| Breuk | Kommagetal | Procent |\n" +
      "|---|---|---|\n" +
      "| ½ | 0,5 | 50% |\n" +
      "| ¼ | 0,25 | 25% |\n" +
      "| ¾ | 0,75 | 75% |\n" +
      "| 1/10 | 0,1 | 10% |\n" +
      "| 1/5 | 0,2 | 20% |\n\n" +
      "**Breuk → kommagetal:** deel de teller door de noemer. ¾ = 3 ÷ 4 = 0,75.\n" +
      "**Kommagetal → breuk:** 0,5 is vijf tienden = 5/10 = ½.",
    checks: [
      {
        q: "Wat is ½ als kommagetal?",
        options: ["0,5", "0,2", "1,2", "0,12"],
        answer: 0,
        wrongHints: [null, "Dat is 1/5, niet de helft.", "Dat is meer dan 1 — een halve is minder.", "Dat is veel te klein."],
        uitlegPad: {
          stappen: [
            { titel: "Een breuk is een deling", tekst: "Een breuk zoals ½ betekent: de teller (1) gedeeld door de noemer (2). Reken dus 1 ÷ 2." },
            { titel: "Hoeveel achter de komma", tekst: "1 ÷ 2 past niet precies. Denk aan geld: de helft van 1 euro is 50 cent — hoeveel is dat als kommagetal?" },
          ],
          woorden: [{ woord: "kommagetal", uitleg: "Een getal met een komma erin, zoals 0,5 of 0,25. Het laat een deel van een geheel zien." }],
          theorie: "Een **breuk** laat zien hoeveel delen je hebt van een geheel. Om een breuk om te zetten naar een **kommagetal**, deel je de teller (het bovenste getal) door de noemer (het onderste getal). Zo krijg je hetzelfde deel, maar in een andere schrijfwijze.",
          voorbeelden: [{ type: "winkel", tekst: "Een reep chocola kost 1 euro. Je koopt ¼ reep — dat bedrag schrijf je als kommagetal via dezelfde deling: 1 ÷ 4." }],
          basiskennis: [{ onderwerp: "Teller en noemer", uitleg: "Bij een breuk staat het bovenste getal (teller) voor wat je hebt, en het onderste getal (noemer) voor het totaal aantal delen." }],
          niveaus: {
            basis: "De helft schrijf je als kommagetal als 0,5.",
            simpeler: "1 ÷ 2 = ?",
            nogSimpeler: "Wat is de helft van 1?",
          },
        },
      },
      {
        q: "Wat is 0,25 als breuk?",
        options: ["¼", "½", "2/5", "1/25"],
        answer: 0,
        wrongHints: [null, "Dat is 0,5, niet 0,25.", "Dat is 0,4.", "Dat is veel te klein (0,04)."],
        uitlegPad: {
          stappen: [
            { titel: "Tel de cijfers achter de komma", tekst: "0,25 heeft twee cijfers achter de komma: dat zijn 25 honderdsten, dus 25/100." },
            { titel: "Vereenvoudig de breuk", tekst: "Deel teller en noemer allebei door 25: 25/100 wordt dan een simpele breuk met noemer 4." },
          ],
          woorden: [{ woord: "honderdste", uitleg: "Het tweede cijfer achter de komma geeft aan hoeveel honderdste delen het is. 0,25 = 25 honderdsten." }],
          theorie: "Een **kommagetal** kun je terugschrijven als breuk door te kijken hoeveel cijfers er achter de komma staan. Eén cijfer achter de komma betekent tienden, twee cijfers betekent honderdsten. Daarna maak je de breuk zo klein mogelijk door te **vereenvoudigen**.",
          voorbeelden: [{ type: "school", tekst: "Een proefwerk telt voor 100 punten en je haalt 0,75 van het maximum. Dat schrijf je eerst als 75/100." }],
          basiskennis: [{ onderwerp: "Tienden en honderdsten", uitleg: "0,1 is één tiende (1/10). 0,01 is één honderdste (1/100). Hoe meer cijfers achter de komma, hoe kleiner elk stapje." }],
          niveaus: {
            basis: "0,25 is een kwart = ¼.",
            simpeler: "Hoeveel kwarten passen er in 1? Vier. Dus 0,25 = ¼.",
            nogSimpeler: "Welke breuk hoort bij 'een kwart'?",
          },
        },
      },
      {
        q: "Wat is ¾ als kommagetal?",
        options: ["0,75", "0,34", "0,43", "0,7"],
        answer: 0,
        wrongHints: [null, "Reken: 3 ÷ 4.", "Dat zijn niet de juiste cijfers.", "Bijna — maar ¾ is iets meer dan 0,7."],
        uitlegPad: {
          stappen: [
            { titel: "Teller ÷ noemer", tekst: "¾ betekent 3 gedeeld door 4. Reken de deling 3 ÷ 4 uit." },
            { titel: "Bouw het op uit kwarten", tekst: "Je weet dat ¼ gelijk is aan 0,25. ¾ is drie keer zoveel: tel 0,25 drie keer bij elkaar op." },
          ],
          woorden: [{ woord: "kwart", uitleg: "Een kwart is 1 van de 4 gelijke delen, geschreven als ¼." }],
          theorie: "Om een breuk om te zetten naar een **kommagetal** deel je de teller door de noemer. Ken je een deel van de tafel al (zoals ¼), dan kun je de rest opbouwen door dat deel een paar keer op te tellen.",
          voorbeelden: [{ type: "sport", tekst: "Een training duurt 1 uur en je hebt ¾ van de training gedaan. Hoeveel dat als kommagetal is, reken je met dezelfde truc uit." }],
          basiskennis: [{ onderwerp: "Optellen met kommagetallen", uitleg: "0,25 + 0,25 = 0,50 en nog een keer 0,25 erbij geeft het antwoord voor drie kwart." }],
          niveaus: {
            basis: "¾ = 0,75 (drie keer een kwart van 0,25).",
            simpeler: "Een kwart is 0,25. Hoeveel is drie kwart?",
            nogSimpeler: "0,25 + 0,25 + 0,25 = ?",
          },
        },
      },
      {
        q: "Wat is 1/10 als kommagetal?",
        options: ["0,1", "0,01", "1,0", "0,10 0"],
        answer: 0,
        wrongHints: [null, "Dat is 1/100.", "Dat is een heel getal.", "Dat is geen geldig kommagetal."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent tiende", tekst: "1/10 betekent: het geheel is verdeeld in 10 gelijke stukjes, en jij hebt er 1." },
            { titel: "Plaats achter de komma", tekst: "De eerste plaats achter de komma staat voor tienden. Bij 1 stukje van de 10 vul je daar een 1 in." },
          ],
          woorden: [{ woord: "tiende", uitleg: "Eén van de 10 gelijke delen van een geheel. Je schrijft dat als 1/10." }],
          theorie: "Bij **tienden** is het geheel verdeeld in 10 stukjes. De plaats direct achter de komma laat zien hoeveel tienden je hebt — dezelfde truc gebruik je bij geld: 10 cent is een tiende van een euro.",
          voorbeelden: [{ type: "geld", tekst: "Een euro bestaat uit 10 dubbeltjes. Eén dubbeltje is dus 1/10 van een euro." }],
          basiskennis: [{ onderwerp: "Plaatswaarde na de komma", uitleg: "Het eerste cijfer na de komma zijn tienden, het tweede cijfer zijn honderdsten." }],
          niveaus: {
            basis: "1/10 = 0,1 (één tiende).",
            simpeler: "Eén tiende: hoeveel achter de komma?",
            nogSimpeler: "1 gedeeld door 10 = ?",
          },
        },
      },
      {
        q: "Wat is 1/5 als kommagetal?",
        options: ["0,2", "0,5", "0,15", "1,5"],
        answer: 0,
        wrongHints: [null, "Dat is de helft (½), niet een vijfde.", "Reken: 1 ÷ 5.", "Dat is meer dan 1 — een vijfde is kleiner dan 1."],
        uitlegPad: {
          stappen: [
            { titel: "Teller ÷ noemer", tekst: "1/5 betekent 1 gedeeld door 5 — dezelfde truc als bij elke breuk: teller ÷ noemer." },
            { titel: "Denk aan vijf gelijke stapjes", tekst: "Verdeel de lijn van 0 tot 1 in 5 even grote stapjes. Reken uit hoe groot 1 stapje is." },
          ],
          woorden: [{ woord: "vijfde", uitleg: "Eén van de 5 gelijke delen van een geheel." }],
          theorie: "Bij breuken zoals 1/5 verdeel je het geheel in evenveel stukjes als de noemer aangeeft. Hoe groter de noemer, hoe kleiner elk stukje wordt, want je verdeelt hetzelfde geheel over meer delen.",
          voorbeelden: [{ type: "sport", tekst: "Bij een estafette van 5 lopers doet elke loper 1/5 van de afstand." }],
          basiskennis: [{ onderwerp: "Groter noemer = kleiner stukje", uitleg: "1/2 is groter dan 1/5, want bij 1/5 deel je het geheel in meer (dus kleinere) stukjes." }],
          niveaus: {
            basis: "1/5 = 0,2 (één vijfde).",
            simpeler: "Vijf stappen op een lijn van 0 tot 1: elk stukje is 0,2.",
            nogSimpeler: "1 ÷ 5 = ?",
          },
        },
      },
      {
        q: "Wat is 0,75 als breuk (zo eenvoudig mogelijk)?",
        options: ["¾", "7/5", "75/10", "3/10"],
        answer: 0,
        wrongHints: [null, "Dat is meer dan 1.", "Dat klopt niet vereenvoudigd — denk aan kwarten.", "Dat is 0,3, niet 0,75."],
        uitlegPad: {
          stappen: [
            { titel: "Schrijf als honderdsten", tekst: "0,75 heeft twee cijfers achter de komma, dus dat zijn 75 honderdsten: 75/100." },
            { titel: "Vereenvoudig", tekst: "Zoek een getal waar 75 én 100 allebei door deelbaar zijn (bijvoorbeeld 25) en deel teller en noemer daardoor." },
          ],
          woorden: [{ woord: "vereenvoudigen", uitleg: "Een breuk kleiner maken door teller en noemer door hetzelfde getal te delen, zonder dat de waarde verandert." }],
          theorie: "Een kommagetal met twee cijfers achter de komma kun je altijd eerst schrijven als **honderdsten**. Daarna maak je de breuk zo klein mogelijk door te vereenvoudigen: deel teller en noemer door hun grootste gemeenschappelijke deler.",
          voorbeelden: [{ type: "recept", tekst: "Een recept gebruikt 0,50 van een zak bloem. Als breuk in honderdsten schrijf je dat eerst als 50/100." }],
          basiskennis: [{ onderwerp: "Grootste gemeenschappelijke deler", uitleg: "Het grootste getal waar teller én noemer allebei door deelbaar zijn. Bij 75 en 100 is dat 25." }],
          niveaus: {
            basis: "0,75 = drie kwart = ¾.",
            simpeler: "0,25 is een kwart. Hoeveel kwarten is 0,75?",
            nogSimpeler: "0,25 + 0,25 + 0,25 = 0,75 = … kwart?",
          },
        },
      },
    ],
  },

  // ─── B. Kommagetal ↔ procent ──────────────────────────────
  {
    title: "Kommagetal en procent",
    explanation:
      "**Procent** betekent letterlijk 'per honderd'. 50% = 50 van de 100.\n\n" +
      "**Kommagetal → procent:** vermenigvuldig met 100 (de komma 2 plaatsen naar rechts).\n" +
      "0,5 → 50%. 0,25 → 25%. 0,07 → 7%.\n\n" +
      "**Procent → kommagetal:** deel door 100 (de komma 2 plaatsen naar links).\n" +
      "25% → 0,25. 8% → 0,08.\n\n" +
      "Onthoud: 100% = 1 (het geheel), 50% = 0,5 (de helft), 10% = 0,1.",
    checks: [
      {
        q: "Wat is 0,5 in procent?",
        options: ["50%", "5%", "0,5%", "500%"],
        answer: 0,
        wrongHints: [null, "Te weinig — schuif de komma 2 plaatsen, niet 1.", "Veel te klein.", "Dat is meer dan het geheel."],
        uitlegPad: {
          stappen: [
            { titel: "Kommagetal naar procent", tekst: "Om van een kommagetal naar procent te gaan, vermenigvuldig je met 100." },
            { titel: "Schuif de komma", tekst: "Vermenigvuldigen met 100 betekent: de komma schuift twee plaatsen naar rechts. Doe dat met 0,5 en kijk wat er gebeurt." },
          ],
          woorden: [{ woord: "procent", uitleg: "Procent betekent 'per honderd'. Het symbool is %." }],
          theorie: "**Procent** is een andere manier om een deel te laten zien, altijd gerekend 'per honderd'. Van kommagetal naar procent vermenigvuldig je met 100, wat hetzelfde is als de komma twee plaatsen naar rechts schuiven.",
          voorbeelden: [{ type: "winkel", tekst: "Een broek heeft 0,2 korting — wil je weten hoeveel procent dat is, dan schuif je de komma op dezelfde manier op." }],
          basiskennis: [{ onderwerp: "100% is het geheel", uitleg: "100% staat voor het hele bedrag of de hele hoeveelheid — net als het kommagetal 1,0." }],
          niveaus: {
            basis: "0,5 × 100 = 50%.",
            simpeler: "Schuif de komma 2 plaatsen naar rechts: 0,5 wordt 50.",
            nogSimpeler: "De helft is hoeveel procent?",
          },
        },
      },
      {
        q: "Wat is 25% als kommagetal?",
        options: ["0,25", "2,5", "0,025", "25,0"],
        answer: 0,
        wrongHints: [null, "Te groot — deel door 100.", "Te klein, je schoof 3 plaatsen.", "Dat is het hele getal."],
        uitlegPad: {
          stappen: [
            { titel: "Procent naar kommagetal", tekst: "Om van procent naar kommagetal te gaan, deel je door 100." },
            { titel: "Schuif de komma naar links", tekst: "Delen door 100 betekent: de komma schuift twee plaatsen naar links. Probeer dat met 25." },
          ],
          woorden: [{ woord: "delen door 100", uitleg: "Het getal honderd keer kleiner maken — de komma gaat daardoor twee plaatsen naar links." }],
          theorie: "Van **procent** naar kommagetal ga je de andere kant op dan bij procent uitrekenen: je deelt door 100, oftewel de komma schuift twee plaatsen naar links.",
          voorbeelden: [{ type: "sport", tekst: "Een speler wint 60% van de wedstrijden. Als kommagetal schrijf je dat met dezelfde truc." }],
          basiskennis: [{ onderwerp: "Komma-plaatsen", uitleg: "Bij ×100 gaat de komma naar rechts, bij ÷100 gaat de komma naar links — precies het tegenovergestelde." }],
          niveaus: {
            basis: "25 ÷ 100 = 0,25.",
            simpeler: "Schuif de komma 2 plaatsen naar links: 25 wordt 0,25.",
            nogSimpeler: "Een kwart als kommagetal is …",
          },
        },
      },
      {
        q: "Wat is 0,1 in procent?",
        options: ["10%", "1%", "0,1%", "100%"],
        answer: 0,
        wrongHints: [null, "Te weinig — schuif 2 plaatsen.", "Veel te klein.", "Dat is het hele getal (1,0)."],
        uitlegPad: {
          stappen: [
            { titel: "× 100", tekst: "Om van kommagetal naar procent te gaan vermenigvuldig je met 100 — de komma schuift twee plaatsen naar rechts." },
            { titel: "Pas het toe", tekst: "Doe dat nu met 0,1: schuif de komma twee plekken naar rechts en kijk welk getal je krijgt." },
          ],
          woorden: [{ woord: "tiende", uitleg: "0,1 is één tiende deel van het geheel." }],
          theorie: "Elk kommagetal kun je omzetten naar procenten door met 100 te vermenigvuldigen. Klein kommagetal, klein percentage; groot kommagetal, groot percentage.",
          voorbeelden: [{ type: "school", tekst: "Van een klas van 30 is 0,3 jongens — reken zelf uit hoeveel procent dat is met dezelfde truc." }],
          basiskennis: [{ onderwerp: "Komma twee plaatsen", uitleg: "×100 = komma twee plaatsen naar rechts. Vergeet je dit, dan reken je fout." }],
          niveaus: {
            basis: "0,1 × 100 = 10%.",
            simpeler: "Komma 2 naar rechts: 0,1 → 10.",
            nogSimpeler: "Eén tiende is hoeveel procent?",
          },
        },
      },
      {
        q: "Hoe ga je van een kommagetal naar procent?",
        options: ["keer 100", "deel door 100", "keer 10", "deel door 10"],
        answer: 0,
        wrongHints: [null, "Dat is juist andersom (procent → kommagetal).", "Dat is maar 1 plaats.", "Ook maar 1 plaats."],
        uitlegPad: {
          stappen: [
            { titel: "Denk aan een voorbeeld", tekst: "Je weet dat 0,5 hetzelfde is als 50%. Bedenk welke rekenstap je nodig hebt om van 0,5 naar 50 te komen." },
            { titel: "Kijk naar de komma", tekst: "Vergelijk 0,5 met 50: hoeveel plaatsen schuift de komma, en welke kant op?" },
          ],
          woorden: [{ woord: "vermenigvuldigen", uitleg: "Een ander woord voor 'keer nemen', bijvoorbeeld 3 × 4." }],
          theorie: "Kommagetal en procent zijn twee schrijfwijzen voor hetzelfde deel, maar procent rekent altijd 'per honderd'. Er is steeds dezelfde vaste rekenstap nodig om van de ene naar de andere schrijfwijze te gaan.",
          voorbeelden: [{ type: "geld", tekst: "0,25 euro extra spaargeld en 25% korting gebruiken allebei dezelfde soort rekenstap om van vorm te wisselen." }],
          basiskennis: [{ onderwerp: "Tegenovergestelde bewerkingen", uitleg: "Twee bewerkingen kunnen elkaars tegenovergestelde zijn, zoals optellen/aftrekken of vermenigvuldigen/delen." }],
          niveaus: {
            basis: "Kommagetal × 100 = procent.",
            simpeler: "0,3 wordt 30%. Wat deed je: × 100 of ÷ 100?",
            nogSimpeler: "Wordt het getal groter of kleiner als je naar procent gaat?",
          },
        },
      },
      {
        q: "Wat is 0,07 in procent?",
        options: ["7%", "70%", "0,7%", "700%"],
        answer: 0,
        wrongHints: [null, "Schuif de komma twee plaatsen naar rechts en let goed op de nul.", "Veel te klein.", "Dat is meer dan het geheel."],
        uitlegPad: {
          stappen: [
            { titel: "× 100", tekst: "Vermenigvuldig 0,07 met 100 — de komma schuift twee plaatsen naar rechts." },
            { titel: "Let op de nullen", tekst: "0,07 heeft een nul vlak na de komma. Schuif toch netjes twee plaatsen op en kijk welk cijfer overblijft." },
          ],
          woorden: [{ woord: "honderdste", uitleg: "0,07 is zeven honderdste delen van het geheel." }],
          theorie: "Bij kleine kommagetallen met een nul erin (zoals 0,07) is het extra belangrijk om goed te tellen hoeveel plaatsen de komma schuift. De regel blijft hetzelfde: vermenigvuldigen met 100 bij het omzetten naar procent.",
          voorbeelden: [{ type: "school", tekst: "Van een klas doet 0,04 mee aan een wedstrijd — reken met dezelfde regel uit hoeveel procent dat is." }],
          basiskennis: [{ onderwerp: "Nullen tellen mee", uitleg: "Een nul direct na de komma is een plek die je niet mag overslaan bij het schuiven." }],
          niveaus: {
            basis: "0,07 × 100 = 7%.",
            simpeler: "Komma 2 naar rechts: 0,07 → 07 → 7.",
            nogSimpeler: "Zijn dat twee nullen achter de komma?",
          },
        },
      },
      {
        q: "Wat is 40% als kommagetal?",
        options: ["0,4", "4,0", "0,04", "40"],
        answer: 0,
        wrongHints: [null, "Dat is veel te groot — deel door 100.", "Je schoof 3 plaatsen in plaats van 2.", "Dat is het getal zonder komma."],
        uitlegPad: {
          stappen: [
            { titel: "÷ 100", tekst: "Om van procent naar kommagetal te gaan deel je door 100 — de komma schuift twee plaatsen naar links." },
            { titel: "Pas het toe op 40", tekst: "Schuif bij het getal 40 de komma twee plaatsen naar links en kijk wat je overhoudt." },
          ],
          woorden: [{ woord: "procent", uitleg: "Procent (%) betekent altijd 'per honderd', dus 40% is 40 van de 100." }],
          theorie: "Elk percentage kun je terugschrijven als kommagetal door door 100 te delen. Dit is precies het omgekeerde van kommagetal naar procent omrekenen.",
          voorbeelden: [{ type: "winkel", tekst: "Een jas heeft 70% korting — als kommagetal reken je dat op dezelfde manier uit." }],
          basiskennis: [{ onderwerp: "Delen door 100", uitleg: "Delen door 100 maakt een getal honderd keer kleiner, en de komma schuift twee plaatsen naar links." }],
          niveaus: {
            basis: "40 ÷ 100 = 0,4.",
            simpeler: "Komma 2 naar links: 40 → 0,40 = 0,4.",
            nogSimpeler: "Is 40% meer of minder dan 1?",
          },
        },
      },
    ],
  },

  // ─── C. Breuk ↔ procent ───────────────────────────────────
  {
    title: "Breuk en procent",
    explanation:
      "Een **procent** is eigenlijk een breuk van honderd: 25% = 25/100 = ¼.\n\n" +
      "**De handigste om te onthouden:**\n" +
      "• ½ = 50%\n" +
      "• ¼ = 25%\n" +
      "• ¾ = 75%\n" +
      "• 1/5 = 20%\n" +
      "• 1/10 = 10%\n\n" +
      "**Truc:** ga via het kommagetal als je het niet zo weet. ¼ → 0,25 → 25%.",
    checks: [
      {
        q: "Wat is ¼ in procent?",
        options: ["25%", "14%", "40%", "4%"],
        answer: 0,
        wrongHints: [null, "Dat zijn de cijfers door elkaar.", "Dat is 2/5.", "Veel te klein."],
        uitlegPad: {
          stappen: [
            { titel: "Ga via het delen van honderd", tekst: "Een breuk met teller 1 zet je om naar procent door 100 te delen door de noemer." },
            { titel: "Reken uit", tekst: "Bereken 100 ÷ 4 om te weten hoeveel van de honderd bij één kwart hoort." },
          ],
          woorden: [{ woord: "kwart", uitleg: "Eén van de 4 gelijke delen van een geheel, geschreven als ¼." }],
          theorie: "Een breuk kun je omzetten naar procent door te bedenken welk deel van de 100 daarbij hoort. Ken je de breuk al als kommagetal, dan kun je ook gewoon met 100 vermenigvuldigen.",
          voorbeelden: [{ type: "sport", tekst: "Een team wint 1/4 van de wedstrijden dit seizoen — hoeveel procent dat is, reken je met dezelfde truc uit." }],
          basiskennis: [{ onderwerp: "Delen van 100", uitleg: "100 ÷ 4, 100 ÷ 5 en 100 ÷ 10 zijn handig om uit je hoofd te kennen." }],
          niveaus: {
            basis: "¼ = 25%.",
            simpeler: "Een kwart van 100 is hoeveel?",
            nogSimpeler: "100 ÷ 4 = ?",
          },
        },
      },
      {
        q: "Wat is 50% als breuk?",
        options: ["½", "1/5", "5", "1/50"],
        answer: 0,
        wrongHints: [null, "Dat is 20%.", "Dat is een heel getal.", "Veel te klein."],
        uitlegPad: {
          stappen: [
            { titel: "50 van de 100", tekst: "50% betekent 50 van de 100 delen. Schrijf dat eerst als breuk: 50/100." },
            { titel: "Vereenvoudig", tekst: "Deel teller en noemer allebei door 50. Welke kleine breuk krijg je dan?" },
          ],
          woorden: [{ woord: "de helft", uitleg: "Precies één van de twee gelijke delen van een geheel." }],
          theorie: "Elk percentage is eigenlijk al een breuk met noemer 100. Je schrijft het percentage als teller boven de 100, en vereenvoudigt daarna zoals bij elke andere breuk.",
          voorbeelden: [{ type: "winkel", tekst: "Een spaarpot zit voor 20% vol. Schrijf dat eerst als 20/100 en maak de breuk daarna zo klein mogelijk." }],
          basiskennis: [{ onderwerp: "Procent is een breuk met noemer 100", uitleg: "Elk percentage kun je direct als breuk over 100 opschrijven, bijvoorbeeld 30% = 30/100." }],
          niveaus: {
            basis: "50% = de helft = ½.",
            simpeler: "50 van de 100 — welk deel is dat?",
            nogSimpeler: "Welke breuk betekent 'de helft'?",
          },
        },
      },
      {
        q: "Wat is ¾ in procent?",
        options: ["75%", "34%", "43%", "7%"],
        answer: 0,
        wrongHints: [null, "Dat zijn de cijfers door elkaar.", "Niet de juiste cijfers.", "Veel te klein."],
        uitlegPad: {
          stappen: [
            { titel: "Bouw op uit kwarten", tekst: "Je weet al hoeveel procent één kwart is. ¾ bestaat uit drie van die kwarten." },
            { titel: "Tel op", tekst: "Tel het percentage van één kwart drie keer bij elkaar op." },
          ],
          woorden: [{ woord: "drie kwart", uitleg: "Drie van de vier gelijke delen van een geheel, geschreven als ¾." }],
          theorie: "Als je weet hoeveel procent één kwart is, kun je drie kwart uitrekenen door dat getal drie keer op te tellen. Deze truc werkt voor elke breuk: reken eerst het kleinste stukje uit.",
          voorbeelden: [{ type: "recept", tekst: "Een taartrecept gebruikt ¾ van een zak suiker — hoeveel procent van de zak dat is, reken je met dezelfde opbouw." }],
          basiskennis: [{ onderwerp: "Eenheidsbreuk eerst", uitleg: "Reken altijd eerst het kleinste deel uit (zoals ¼), en vermenigvuldig dat met het aantal delen dat je nodig hebt." }],
          niveaus: {
            basis: "¾ = 75% (drie keer 25%).",
            simpeler: "Een kwart is 25%. Hoeveel is drie kwart?",
            nogSimpeler: "25 + 25 + 25 = ?",
          },
        },
      },
      {
        q: "Wat is 1/5 in procent?",
        options: ["20%", "15%", "5%", "50%"],
        answer: 0,
        wrongHints: [null, "Dat zijn de cijfers door elkaar.", "Te klein.", "Dat is ½."],
        uitlegPad: {
          stappen: [
            { titel: "Deel 100 door de noemer", tekst: "Om een eenheidsbreuk (teller 1) om te zetten naar procent, deel je 100 door de noemer." },
            { titel: "Reken uit", tekst: "Bereken 100 ÷ 5 en kijk welk percentage daarbij hoort." },
          ],
          woorden: [{ woord: "eenheidsbreuk", uitleg: "Een breuk met teller 1, zoals 1/5 of 1/10." }],
          theorie: "Bij een eenheidsbreuk (teller = 1) reken je het percentage uit door 100 te delen door de noemer. Dat werkt omdat je het geheel (100%) in evenveel gelijke stukjes verdeelt als de noemer aangeeft.",
          voorbeelden: [{ type: "geld", tekst: "Een spaardoos verdeel je in vier gelijke vakjes voor verschillende doelen — met dezelfde deling reken je uit hoeveel procent elk vakje is." }],
          basiskennis: [{ onderwerp: "100 delen door de noemer", uitleg: "Bij 1/2, 1/4, 1/5, 1/10 kun je steeds 100 delen door de noemer om het percentage te vinden." }],
          niveaus: {
            basis: "1/5 = 20%.",
            simpeler: "Een vijfde van 100 is hoeveel?",
            nogSimpeler: "100 ÷ 5 = ?",
          },
        },
      },
      {
        q: "Wat is 10% als breuk (zo eenvoudig mogelijk)?",
        options: ["1/10", "10/1", "1/100", "1/5"],
        answer: 0,
        wrongHints: [null, "Dat is 10, niet een tiende.", "Dat is 1%, niet 10%.", "Dat is 20%."],
        uitlegPad: {
          stappen: [
            { titel: "Schrijf als breuk van honderd", tekst: "10% betekent 10 van de 100 delen: schrijf dat als 10/100." },
            { titel: "Vereenvoudig", tekst: "Deel teller en noemer allebei door 10. Kijk welke kleine breuk overblijft." },
          ],
          woorden: [{ woord: "procentteken", uitleg: "Het teken % betekent altijd 'gedeeld door honderd'." }],
          theorie: "Elk percentage kun je direct opschrijven als breuk met 100 als noemer. Daarna vereenvoudig je de breuk net zoals je bij elke andere breuk zou doen: deel teller en noemer door hetzelfde getal.",
          voorbeelden: [{ type: "school", tekst: "Een toets heeft 100 vragen en 30% ging fout. Schrijf dat eerst als 30/100 en maak het daarna zo klein mogelijk." }],
          basiskennis: [{ onderwerp: "Delen door dezelfde factor", uitleg: "10/100, 20/100 en 50/100 kun je allemaal vereenvoudigen door teller en noemer door hetzelfde getal te delen." }],
          niveaus: {
            basis: "10% = 1/10.",
            simpeler: "10 van de 100 → 10/100 → vereenvoudigd?",
            nogSimpeler: "10 ÷ 10 = 1 en 100 ÷ 10 = 10 → welke breuk?",
          },
        },
      },
      {
        q: "Wat is 75% als breuk (zo eenvoudig mogelijk)?",
        options: ["¾", "7/5", "3/5", "½"],
        answer: 0,
        wrongHints: [null, "Dat is meer dan 1.", "Dat is 60%.", "Dat is de helft, 50%."],
        uitlegPad: {
          stappen: [
            { titel: "Schrijf als breuk van honderd", tekst: "75% is 75 van de 100 delen: 75/100." },
            { titel: "Zoek de grootste gemeenschappelijke deler", tekst: "75 en 100 zijn allebei deelbaar door 25. Deel teller en noemer daardoor en kijk wat er overblijft." },
          ],
          woorden: [{ woord: "grootste gemeenschappelijke deler", uitleg: "Het grootste getal waar twee andere getallen allebei precies door deelbaar zijn." }],
          theorie: "Om een percentage als eenvoudige breuk te schrijven, zet je het eerst om naar honderdsten en zoek je daarna de grootste gemeenschappelijke deler van teller en noemer om te vereenvoudigen.",
          voorbeelden: [{ type: "sport", tekst: "Een speler scoort bij 50% van de pogingen. Schrijf dat als 50/100 en maak het net zo klein mogelijk als bij elke andere breuk." }],
          basiskennis: [{ onderwerp: "Grote getallen delen", uitleg: "75 en 100 zijn allebei deelbaar door 5 en door 25 — probeer steeds het grootste getal waar beide door deelbaar zijn." }],
          niveaus: {
            basis: "75% = ¾ (drie kwart).",
            simpeler: "¼ = 25%. Hoeveel kwarten zijn 75%?",
            nogSimpeler: "25 + 25 + 25 = 75 → hoeveel kwarten?",
          },
        },
      },
    ],
  },

  // ─── D. Vergelijken ───────────────────────────────────────
  {
    title: "In het echt — welke is groter?",
    explanation:
      "Bij de Doorstroomtoets moet je vaak **vergelijken**: wat is groter, een breuk, een procent of een kommagetal? De truc: **maak ze dezelfde soort** (meestal allemaal procent of allemaal kommagetal), dan zie je het meteen.\n\n" +
      "Voorbeeld: wat is groter, ½ of 0,4?\n" +
      "½ = 0,5. En 0,5 > 0,4, dus ½ is groter.\n\n" +
      "Zet alles om naar procent of kommagetal en vergelijk dan de getallen.",
    checks: [
      {
        q: "Wat is groter: ½ of 0,4?",
        options: ["½", "0,4", "ze zijn gelijk", "dat kun je niet vergelijken"],
        answer: 0,
        wrongHints: [null, "Reken ½ om naar een kommagetal en vergelijk.", "0,5 en 0,4 zijn niet gelijk.", "Het kan juist wél: maak ze dezelfde soort."],
        uitlegPad: {
          stappen: [
            { titel: "Maak ze dezelfde soort getal", tekst: "Om deze twee getallen te vergelijken, schrijf je de breuk uit de vraag om naar een kommagetal — dat ken je vast uit het tabelletje." },
            { titel: "Vergelijk de kommagetallen", tekst: "Zet de twee kommagetallen naast elkaar en kijk welk cijfer na de komma groter is." },
          ],
          woorden: [{ woord: "vergelijken", uitleg: "Kijken welk getal groter of kleiner is dan een ander getal." }],
          theorie: "Om een breuk en een kommagetal te **vergelijken**, geef je ze eerst dezelfde vorm. Meestal is het handigst om alles om te zetten naar kommagetallen of allemaal naar procenten, en dan de getallen naast elkaar te leggen.",
          voorbeelden: [{ type: "sport", tekst: "Een hardloper legt ¾ van de afstand af, een ander legt 0,6 van de afstand af — om te zien wie verder is, zet je beide om naar dezelfde vorm." }],
          basiskennis: [{ onderwerp: "Breuk-tabelletje", uitleg: "Als je ½, ¼ en ¾ als kommagetal uit je hoofd kent, gaat vergelijken veel sneller." }],
          niveaus: {
            basis: "½ = 0,5 en dat is meer dan 0,4.",
            simpeler: "Schrijf ½ als kommagetal (0,5) en vergelijk met 0,4.",
            nogSimpeler: "Is 0,5 groter of kleiner dan 0,4?",
          },
        },
      },
      {
        q: "Welke korting is meer: ¼ korting of 20% korting?",
        options: ["¼ korting", "20% korting", "ze zijn gelijk", "geen van beide"],
        answer: 0,
        wrongHints: [null, "Reken ¼ om naar procent en vergelijk met 20%.", "Reken ¼ om naar procent — dan zie je dat ze niet gelijk zijn.", "Eén korting haalt echt meer van de prijs af; reken ¼ om."],
        uitlegPad: {
          stappen: [
            { titel: "Zet om naar dezelfde soort", tekst: "Om twee kortingen te vergelijken, reken je de breuk om naar procenten — dan kun je ze naast elkaar leggen." },
            { titel: "Vergelijk de percentages", tekst: "Bereken hoeveel procent de breuk-korting is en vergelijk dat met 20%." },
          ],
          woorden: [{ woord: "korting", uitleg: "Een stukje van de prijs dat je niet hoeft te betalen." }],
          theorie: "Bij het vergelijken van kortingen maakt het niet uit of ze als breuk of als procent worden gegeven — je zet ze eerst om naar dezelfde soort getal en vergelijkt dan pas.",
          voorbeelden: [{ type: "winkel", tekst: "Winkel A geeft ⅕ korting, winkel B geeft 15% korting — om te zien welke winkel voordeliger is, reken je de breuk om naar procent." }],
          basiskennis: [{ onderwerp: "Breuk naar procent", uitleg: "Een breuk zet je om naar procent door eerst het kommagetal te zoeken en dat met 100 te vermenigvuldigen, of bij een eenheidsbreuk direct 100 te delen door de noemer." }],
          niveaus: {
            basis: "¼ = 25%, dat is meer dan 20%.",
            simpeler: "Reken ¼ om naar procent: 25%. Is dat meer dan 20%?",
            nogSimpeler: "Hoeveel procent is ¼? Vergelijk dat met 20%.",
          },
        },
      },
      {
        q: "Je had op een toets ¾ van de vragen goed. Hoeveel procent is dat?",
        options: ["75%", "34%", "50%", "60%"],
        answer: 0,
        wrongHints: [null, "Dat zijn de cijfers door elkaar.", "Dat is ½.", "Reken ¾ om naar procent."],
        uitlegPad: {
          stappen: [
            { titel: "Ga via kwarten", tekst: "Je kent het percentage van één kwart. ¾ bestaat uit drie van die kwarten." },
            { titel: "Tel op", tekst: "Tel het percentage van één kwart drie keer bij elkaar op om het percentage van ¾ te vinden." },
          ],
          woorden: [{ woord: "toets", uitleg: "Een proefwerk of overhoring waarbij je vragen beantwoordt." }],
          theorie: "Scores op een toets worden vaak als procent gegeven zodat je makkelijk kunt vergelijken, ook als toetsen een verschillend aantal vragen hebben. Een breuk zoals ¾ zet je om naar procent met dezelfde regels als altijd.",
          voorbeelden: [{ type: "school", tekst: "Bij een andere toets had een klasgenoot ⅘ van de vragen goed — om te vergelijken reken je ook dat om naar procent." }],
          basiskennis: [{ onderwerp: "Kwarten uit je hoofd", uitleg: "¼, ½ en ¾ als kommagetal en procent ken je het beste uit je hoofd." }],
          niveaus: {
            basis: "¾ = 75%.",
            simpeler: "Een kwart is 25%, drie kwart is …",
            nogSimpeler: "25 + 25 + 25 = ?",
          },
        },
      },
      {
        q: "Welke is het grootst: 0,7 of 65% of ¾?",
        options: ["¾", "0,7", "65%", "ze zijn gelijk"],
        answer: 0,
        wrongHints: [null, "Reken alles om naar hetzelfde soort getal en vergelijk.", "Zet ook de breuk om naar procent — is dat meer of minder?", "65% is de kleinste."],
        uitlegPad: {
          stappen: [
            { titel: "Maak alles dezelfde soort", tekst: "Zet alle drie de getallen om naar procenten, zodat je ze eerlijk kunt vergelijken." },
            { titel: "Reken de breuk om", tekst: "0,7 is al makkelijk als procent te schrijven. Reken ook uit hoeveel procent de breuk uit de vraag is." },
            { titel: "Vergelijk de drie percentages", tekst: "Zet de drie percentages op een rijtje en kijk welk getal het hoogst is." },
          ],
          woorden: [{ woord: "dezelfde soort maken", uitleg: "Getallen die je wilt vergelijken, moet je eerst allemaal breuk, allemaal kommagetal, of allemaal procent maken." }],
          theorie: "Wanneer je een breuk, een kommagetal en een procent met elkaar wilt vergelijken, reken je ze eerst allemaal om naar dezelfde soort — meestal is procent het handigst, want dan vergelijk je gewoon hele getallen.",
          voorbeelden: [{ type: "sport", tekst: "Drie teams scoren 0,8, 78% en ⅘ van hun kansen — om te zien welk team het beste scoort, zet je ze allemaal om naar procent." }],
          basiskennis: [{ onderwerp: "Procent vergelijkt makkelijk", uitleg: "Bij procenten vergelijk je gewone hele getallen, zoals 70 met 65, in plaats van breuken met verschillende noemers." }],
          niveaus: {
            basis: "0,7 = 70%, ¾ = 75%. ¾ is het grootst.",
            simpeler: "Maak alles procent: 70%, 65%, 75%. Welke is het hoogst?",
            nogSimpeler: "Welk getal is het grootst: 70, 65 of 75?",
          },
        },
      },
      {
        q: "Is 0,3 groter of kleiner dan ¼?",
        options: ["groter", "kleiner", "even groot", "dat kun je niet vergelijken"],
        answer: 0,
        wrongHints: [null, "Reken ¼ om naar een kommagetal — dan zie je welke groter is.", "0,3 en 0,25 zijn niet gelijk.", "Breuken en kommagetallen kun je wel vergelijken: zet ze om naar dezelfde soort."],
        uitlegPad: {
          stappen: [
            { titel: "Zet ¼ om naar kommagetal", tekst: "Schrijf ¼ als kommagetal, zodat je het makkelijk kunt vergelijken met 0,3." },
            { titel: "Vergelijk de twee kommagetallen", tekst: "Zet 0,3 en het kommagetal van ¼ naast elkaar en bepaal welk getal hoger is." },
          ],
          woorden: [{ woord: "vergelijken", uitleg: "Bepalen welk van twee getallen het grootst is." }],
          theorie: "Een breuk en een kommagetal kun je pas eerlijk vergelijken als je ze in dezelfde vorm hebt gezet. Zet de breuk om naar een kommagetal met evenveel cijfers achter de komma, en vergelijk dan cijfer voor cijfer.",
          voorbeelden: [{ type: "thuis", tekst: "Je broer heeft ⅓ van zijn zakgeld gespaard, jij hebt 0,4 gespaard — om te zien wie er meer heeft gespaard, zet je ⅓ eerst om naar een kommagetal." }],
          basiskennis: [{ onderwerp: "Cijfer voor cijfer vergelijken", uitleg: "Bij kommagetallen vergelijk je eerst het cijfer vóór de komma, dan het eerste cijfer erna, enzovoort." }],
          niveaus: {
            basis: "0,3 en ¼ = 0,25. 0,3 is groter.",
            simpeler: "Schrijf ¼ als kommagetal (0,25) en vergelijk met 0,3.",
            nogSimpeler: "Is 0,3 groter of kleiner dan 0,25?",
          },
        },
      },
      {
        q: "Op een school doet 0,6 van de leerlingen aan sport. Hoeveel procent is dat?",
        options: ["60%", "6%", "0,6%", "600%"],
        answer: 0,
        wrongHints: [null, "Van kommagetal naar procent: schuif de komma twee plaatsen naar rechts.", "Veel te klein — komma 2 naar rechts.", "Dat is meer dan het geheel."],
        uitlegPad: {
          stappen: [
            { titel: "× 100", tekst: "Om van kommagetal naar procent te gaan, vermenigvuldig je met 100 — de komma schuift twee plaatsen naar rechts." },
            { titel: "Pas het toe op 0,6", tekst: "Schuif de komma van 0,6 twee plaatsen naar rechts en kijk welk getal je krijgt." },
          ],
          woorden: [{ woord: "kommagetal", uitleg: "Een getal met een komma, zoals 0,6 — dat laat een deel van een geheel zien." }],
          theorie: "Verhalen over groepen mensen (zoals leerlingen op een school) gebruiken vaak kommagetallen of procenten door elkaar. De omreken-regel blijft steeds hetzelfde: keer 100 om van kommagetal naar procent te gaan.",
          voorbeelden: [{ type: "school", tekst: "Van een sportclub traint 0,8 van de leden twee keer per week — hoeveel procent dat is, reken je met dezelfde truc uit." }],
          basiskennis: [{ onderwerp: "Komma twee plaatsen naar rechts", uitleg: "Bij ×100 schuift de komma altijd twee plaatsen naar rechts, ook als er een 0 in het getal staat." }],
          niveaus: {
            basis: "0,6 × 100 = 60%.",
            simpeler: "Komma 2 naar rechts: 0,6 → 60.",
            nogSimpeler: "De helft (0,5) is 50%. Is 0,6 meer of minder dan 0,5?",
          },
        },
      },
      {
        q: "Welk antwoord klopt? 30% is groter dan …",
        options: ["¼ (= 25%)", "½ (= 50%)", "0,4 (= 40%)", "¾ (= 75%)"],
        answer: 0,
        wrongHints: [null, "50% > 30%, dus 30% is niet groter dan ½.", "40% > 30%, dus 30% is niet groter dan 0,4.", "75% > 30%, dus 30% is niet groter dan ¾."],
        uitlegPad: {
          stappen: [
            { titel: "Reken elke optie om naar procent", tekst: "Elke optie is al een breuk of kommagetal mét het percentage erbij. Vergelijk die percentages met 30%." },
            { titel: "Zoek het kleinste percentage", tekst: "30% is alleen groter dan percentages die lager zijn dan 30. Welke optie heeft het laagste percentage?" },
          ],
          woorden: [{ woord: "vergelijken met een lijst", uitleg: "Meerdere getallen naast elkaar leggen om te zien welke groter of kleiner zijn dan een bepaald getal." }],
          theorie: "Als je een percentage moet vergelijken met een lijst van breuken en kommagetallen, reken je ze allemaal eerst om naar procent. Dan hoef je alleen nog maar hele getallen met elkaar te vergelijken.",
          voorbeelden: [{ type: "winkel", tekst: "Je wilt weten of 45% korting meer is dan ⅖, 0,5 en ⅗ korting — zet ze allemaal eerst om naar procent." }],
          basiskennis: [{ onderwerp: "Grootte van percentages", uitleg: "Hoe hoger het percentage, hoe groter het deel van het geheel." }],
          niveaus: {
            basis: "30% > 25% (= ¼), dus 30% is groter dan ¼.",
            simpeler: "Zet ¼ om naar procent en vergelijk met 30%.",
            nogSimpeler: "Is 30 groter of kleiner dan 25?",
          },
        },
      },
      {
        q: "Rangschik van klein naar groot: 0,2 — ¼ — 15%",
        options: ["15% — 0,2 — ¼", "0,2 — 15% — ¼", "¼ — 0,2 — 15%", "ze zijn allemaal gelijk"],
        answer: 0,
        wrongHints: [null, "Reken alle drie om naar procent en vergelijk de getallen.", "Zet alles om naar procent en bekijk de volgorde opnieuw.", "Zet ze eerst allemaal om naar procenten en vergelijk ze dan."],
        uitlegPad: {
          stappen: [
            { titel: "Zet alles om naar dezelfde soort", tekst: "Reken alle drie de getallen om naar procenten, dan kun je ze eerlijk vergelijken." },
            { titel: "Zet op volgorde", tekst: "Heb je alle drie als procent? Zet ze dan van het kleinste naar het grootste getal." },
          ],
          woorden: [{ woord: "rangschikken", uitleg: "Getallen op volgorde zetten, bijvoorbeeld van klein naar groot." }],
          theorie: "Om meerdere getallen in verschillende vormen (breuk, kommagetal, procent) op volgorde te zetten, reken je ze eerst allemaal om naar dezelfde soort. Zo voorkom je dat je appels met peren vergelijkt.",
          voorbeelden: [{ type: "sport", tekst: "Drie lopers halen 0,3, ⅖ en 45% van het parcours in de eerste ronde — om te zien wie voorloopt, zet je alle drie om naar procent." }],
          basiskennis: [{ onderwerp: "Volgorde bepalen", uitleg: "Zodra alle getallen dezelfde vorm hebben, zet je ze gewoon op volgorde zoals bij gewone getallen." }],
          niveaus: {
            basis: "15% < 20% (0,2) < 25% (¼).",
            simpeler: "Zet alles om naar procent: 15%, 20%, 25%. Welke is het kleinst?",
            nogSimpeler: "Welk getal is het kleinst: 15, 20 of 25?",
          },
        },
      },
    ],
  },
];

export default {
  id: "omzetten-breuk-procent-komma-po",
  title: "Breuken, procenten & kommagetallen omzetten",
  subject: "rekenen",
  level: "groep7-8",
  sloThema: "rekenen-omzetten",
  chapters,
  steps,
  prerequisites: [],
};
