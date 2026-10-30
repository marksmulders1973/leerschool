// Leerpad: Financiële vorming — groep 6-8 PO.
// Onderdeel Toets-rekenen + leefwereld. Referentieniveau 1F.
// 6 stappen met uitlegPad. Sluit op geldRekenen (groep 5-8).

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  spaar: "#66bb6a",
  uitgaaf: "#ff7043",
  belang: "#ffd54f",
  lenen: "#ef5350",
  highlight: "#42a5f5",
};

const stepEmojis = ["💶", "💰", "🏦", "📊", "⚠️", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is geld?", emoji: "💶", from: 0, to: 0 },
  { letter: "B", title: "Zakgeld + verdienen", emoji: "💰", from: 1, to: 1 },
  { letter: "C", title: "Sparen + rente", emoji: "🏦", from: 2, to: 2 },
  { letter: "D", title: "Begroten (50/30/20)", emoji: "📊", from: 3, to: 3 },
  { letter: "E", title: "Lenen + reclame-trucs", emoji: "⚠️", from: 4, to: 4 },
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function begrotingSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">50/30/20-regel — €100 zakgeld</text>

<rect x="20" y="50" width="140" height="40" rx="6" fill="rgba(255,112,67,0.18)" stroke="${COLORS.uitgaaf}" stroke-width="1.5"/>
<text x="90" y="68" text-anchor="middle" fill="${COLORS.uitgaaf}" font-size="11" font-family="Arial" font-weight="bold">50% NODIG</text>
<text x="90" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">€50 — eten, school</text>

<rect x="170" y="50" width="80" height="40" rx="6" fill="rgba(255,213,79,0.18)" stroke="${COLORS.belang}" stroke-width="1.5"/>
<text x="210" y="68" text-anchor="middle" fill="${COLORS.belang}" font-size="11" font-family="Arial" font-weight="bold">30% LEUK</text>
<text x="210" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">€30 — uitstapje</text>

<rect x="260" y="50" width="40" height="40" rx="6" fill="rgba(102,187,106,0.18)" stroke="${COLORS.spaar}" stroke-width="1.5"/>
<text x="280" y="68" text-anchor="middle" fill="${COLORS.spaar}" font-size="10" font-family="Arial" font-weight="bold">20%</text>
<text x="280" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">SPAAR</text>

<text x="160" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">💡 50% nodig + 30% leuk + 20% sparen = gezonde verdeling</text>
<text x="160" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Werkt voor zakgeld, salaris, of weekgeld</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is geld?
  {
    title: "Wat is geld + waarom?",
    explanation:
      "**Geld** is iets dat we gebruiken om dingen te kopen of te verkopen.\n\n**Drie functies van geld** *(uit het hoofd!)*:\n\n**1. Ruilmiddel** 🔄\n• Vroeger ruilden mensen direct *(boer ruilt 1 koe voor 10 zakken graan)*.\n• Probleem: wat als boer geen graan wil maar wel schoenen?\n• Geld lost dit op: alles heeft een **prijs in geld**, en met geld koop je wat je wil.\n\n**2. Rekeneenheid** 📏\n• Met geld kun je **prijzen vergelijken**.\n• 'Deze fiets kost €200, die andere €150 — verschil €50.'\n• Zonder geld moeilijk vergelijken.\n\n**3. Spaarmiddel** 🏦\n• Geld kun je **bewaren** voor later.\n• Een koe kan vandaag €1000 waard zijn, maar geeft je geen rente en kan ziek worden.\n• Geld op spaarrekening krijg je rente over.\n\n**Soorten geld in Nederland**:\n\n**1. Munten** 🪙\n• 1 cent, 2 cent (zelden), 5 cent, 10 cent, 20 cent, 50 cent.\n• 1 euro, 2 euro.\n• In NL worden 1+2 cent vrijwel niet gebruikt → afronden op 5 cent.\n\n**2. Biljetten** 💵\n• €5, €10, €20, €50, €100, €200, €500.\n• €500 wordt steeds minder uitgegeven *(witwas-risico)*.\n\n**3. Digitaal geld** 📱\n• Op bankrekening *(saldo, niet munten/biljetten)*.\n• Pinpas / creditcard.\n• Smartphone (Tikkie, Apple Pay).\n• 95% van geld in NL is digitaal.\n\n**4. Crypto-valuta** 🪙\n• Bitcoin, Ethereum.\n• **Niet erkend** als officiële munt in NL.\n• Heel volatiele waarde — kan in dag 20% stijgen of dalen.\n• Niet aanbevolen voor kinderen.\n\n**Euro — waar betaal je mee?**\nDe **euro** is munt in **21 landen** in EU *(eurozone)*:\nNederland, België, Duitsland, Frankrijk, Italië, Spanje, Portugal, Oostenrijk, Ierland, Finland, Letland, Litouwen, Estland, Slowakije, Slovenië, Malta, Cyprus, Griekenland, Luxemburg, Kroatië *(sinds 2023)*, Bulgarije *(sinds 2026)*.\n\n**Niet-euro EU**: Zweden, Denemarken, Polen, Tsjechië, Hongarije, Roemenië.\n**Buiten EU**: Pond *(UK)*, Dollar *(VS)*, Yen *(Japan)*, etc.\n\n**Wisselkoersen** *(als je naar buitenland gaat)*:\n• €1 ≈ $1,08 *(varieert)*.\n• €1 ≈ £0,85.\n• €100 → ongeveer $108 of £85.\n\n**Toets-feitje**:\nVóór de euro had Nederland de **gulden** (1814-2002). 1 euro = 2,20371 gulden.\n\n**toetsvragen**:\n*'Wat is een ruilmiddel?'* → iets om mee te ruilen, zoals geld.\n*'Welke landen gebruiken euro?'* → 21 landen in eurozone.\n*'Wat is digitaal geld?'* → geld op bank, pinpas, telefoon.",
    checks: [
      {
        q: "Wat zijn de **3 functies** van geld?",
        options: ["Ruilmiddel + rekeneenheid + spaarmiddel", "Munten + biljetten + digitaal geld", "Sparen + lenen + boodschappen doen", "Bankrekening + pinpas + contant geld"],
        answer: 0,
        wrongHints: [null, "Dat zijn soorten geld. Waarvoor gebrúík je geld?", "Dat zijn dingen die jij doet. Welke taken heeft geld zelf?", "Dat zijn plekken en manieren om te betalen, geen functies."],
        uitlegPad: {
          stappen: [
            { titel: "Waarom hebben we geld?", tekst: "Geld vervult 3 functies tegelijk. Daardoor is het zo handig in het dagelijks leven." },
            { titel: "1) Ruilmiddel", tekst: "Vroeger ruilden mensen direct (koe voor graan). Met geld kun je ALLES kopen met hetzelfde middel. Veel makkelijker." },
            { titel: "2) Rekeneenheid", tekst: "Met geld kun je prijzen vergelijken. 'Deze fiets €200, die €150' — je ziet meteen welke goedkoper is." },
            { titel: "3) Spaarmiddel", tekst: "Geld kun je BEWAREN voor later. Een koe wordt ouder, geld op de bank groeit door rente." },
          ],
          woorden: [
            { woord: "ruilmiddel", uitleg: "Voor uitwisseling van goederen/diensten." },
            { woord: "rekeneenheid", uitleg: "Om prijzen te vergelijken." },
            { woord: "spaarmiddel", uitleg: "Om waarde te bewaren." },
          ],
          theorie: "Toets-tip: onthoud de drie werkwoorden: ruilen, rekenen, sparen. Drie functies, drie woorden.",
          voorbeelden: [
            { type: "stap", tekst: "Je koopt een boek met €10 = ruilen. Je vergelijkt prijs van 2 boeken = rekenen. Je legt €10 opzij = sparen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "3 functies = Ruilmiddel + Rekeneenheid + Spaarmiddel. Munten/biljetten/digitaal = soorten, geen functies." }],
          niveaus: {
            basis: "Geld doet 3 dingen: ruilen, rekenen, sparen.",
            simpeler: "Kopen + prijzen vergelijken + bewaren voor later.",
            nogSimpeler: "Ruilen, rekenen, sparen.",
          },
        },
      },
      {
        q: "Hoeveel landen van de **Europese Unie (EU)** gebruiken de euro?",
        options: ["21", "19", "27", "12"],
        answer: 0,
        wrongHints: [null, "Zoveel waren het een paar jaar geleden. Kwamen er sindsdien landen bij?", "Dat zijn alle landen van de Europese Unie (EU). Gebruiken die allemaal de euro?", "Met zoveel landen begon de euro in 2002. Daarna kwamen er meer bij."],
        uitlegPad: {
          stappen: [
            { titel: "Twee verschillende dingen", tekst: "Let op: EU (Europese Unie) en eurozone zijn NIET hetzelfde." },
            { titel: "EU = 27 landen", tekst: "De EU is een samenwerking van **27 landen** in Europa. Daar horen ze allemaal bij." },
            { titel: "Eurozone = 21 landen met euro", tekst: "Van die 27 EU-landen gebruiken **21** ook de euro als geld. De andere 6 (Zweden, Denemarken, Polen, Tsjechië, Hongarije, Roemenië) hebben nog eigen munt." },
          ],
          woorden: [
            { woord: "EU", uitleg: "Europese Unie — 27 landen die samenwerken." },
            { woord: "eurozone", uitleg: "21 landen in EU die de euro gebruiken." },
          ],
          theorie: "Toets-truc: EU = 27 LANDEN (politiek). Eurozone = 21 met EURO (geld). Verschillende dingen. Sinds 1 jan 2026: Bulgarije is de nieuwste die de euro invoerde (daarvóór Kroatië in 2023).",
          voorbeelden: [
            { type: "stap", tekst: "Zweden: WEL in EU, NIET in eurozone (gebruikt Zweedse kroon)." },
            { type: "stap", tekst: "Frankrijk: WEL in EU, WEL in eurozone (gebruikt euro)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eurozone is een KLEINERE groep BINNEN de EU." }],
          niveaus: {
            basis: "21 EU-landen gebruiken de euro. Samen heten ze de eurozone.",
            simpeler: "De EU heeft 27 landen. Daarvan gebruiken er 21 de euro.",
            nogSimpeler: "21 landen met de euro.",
          },
        },
      },
      {
        q: "Met welk geld betaalde je in Nederland **vóór de euro**?",
        options: ["Gulden", "Dollar", "Pond", "Frank"],
        answer: 0,
        wrongHints: [null, "Met dollars betalen ze in Amerika.", "Met ponden betalen ze in Engeland.", "Met franken betaalden ze vroeger in België en Frankrijk."],
      },
      {
        q: "Welk geld is **digitaal**?",
        options: ["Pinpas-saldo + Apple Pay", "Papieren cadeaubon + spaarzegels", "Biljetten + muntgeld", "Goudstukken + zilver"],
        answer: 0,
        wrongHints: [null, "Een bon en zegels kun je vastpakken. Bestaan ze alleen op een scherm?", "Kun je dit vastpakken?", "Goud kun je vastpakken. Bestaat het alleen op een scherm?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je kijkt naar twee fietsen. De ene kost €180, de andere €140. Welke **functie** van geld gebruik je als je ze vergelijkt?",
        options: ["Rekeneenheid", "Ruilmiddel", "Spaarmiddel", "Leenmiddel"],
        answer: 0,
        wrongHints: [
          null,
          "Ruil je nu al iets, of kijk je alleen naar de prijzen?",
          "Zet je nu geld opzij voor later, of vergelijk je prijzen?",
          "Leen je hier geld, of vergelijk je prijzen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat doe je hier?",
              tekst: "Je koopt nog niets en je bewaart ook niets. Je kijkt alleen welke fiets duurder is.",
            },
            {
              titel: "Prijzen vergelijken",
              tekst: "Omdat allebei de fietsen een **prijs in geld** hebben, zie je meteen het verschil: €180 − €140 = €40.",
            },
            {
              titel: "Welke functie?",
              tekst: "Geld gebruiken om prijzen te vergelijken heet **rekeneenheid**.",
            },
          ],
          woorden: [
            {
              woord: "rekeneenheid",
              uitleg: "Geld als maat om prijzen te vergelijken.",
            },
            {
              woord: "ruilmiddel",
              uitleg: "Geld om iets mee te kopen.",
            },
          ],
          theorie: "De drie functies: ruilmiddel (kopen), rekeneenheid (vergelijken), spaarmiddel (bewaren). Munten, biljetten en digitaal geld zijn soorten geld, geen functies.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Een boek kost €8 in de ene winkel en €10 in de andere. Vergelijken = rekeneenheid.",
            },
            {
              type: "stap",
              tekst: "Je betaalt het boek = ruilmiddel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Vergelijken = rekenen = rekeneenheid.",
            },
          ],
          niveaus: {
            basis: "Prijzen vergelijken = rekeneenheid.",
            simpeler: "Je kijkt welke fiets duurder is. Dan gebruik je geld om te rekenen.",
            nogSimpeler: "Vergelijken = rekenen.",
          },
        },
      },
      {
        q: "Lisa stopt elke week €2 in een potje voor later. Welke **functie** van geld gebruikt ze?",
        options: ["Spaarmiddel", "Ruilmiddel", "Rekeneenheid", "Leenmiddel"],
        answer: 0,
        wrongHints: [null, "Koopt Lisa er nu iets mee?", "Vergelijkt Lisa prijzen, of bewaart ze geld voor later?", "Leent Lisa geld aan iemand?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat doet Lisa?",
              tekst: "Lisa geeft het geld niet uit. Ze **bewaart** het voor later.",
            },
            {
              titel: "Bewaren = sparen",
              tekst: "Geld kun je bewaren en later gebruiken. Daarom is geld een **spaarmiddel**.",
            },
            {
              titel: "De andere functies",
              tekst: "Ruilmiddel = iets kopen. Rekeneenheid = prijzen vergelijken. Dat doet Lisa hier niet.",
            },
          ],
          woorden: [
            {
              woord: "spaarmiddel",
              uitleg: "Geld om te bewaren voor later.",
            },
            {
              woord: "sparen",
              uitleg: "Geld niet uitgeven maar bewaren.",
            },
          ],
          theorie: "Drie functies van geld: ruilen (kopen), rekenen (vergelijken), sparen (bewaren).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tim legt zijn verjaardagsgeld opzij voor een nieuwe fiets = spaarmiddel.",
            },
            {
              type: "stap",
              tekst: "Tim koopt later de fiets = ruilmiddel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Bewaren voor later = spaarmiddel.",
            },
          ],
          niveaus: {
            basis: "Geld bewaren = spaarmiddel.",
            simpeler: "Lisa koopt niets. Ze bewaart het geld voor later.",
            nogSimpeler: "Bewaren = sparen.",
          },
        },
      },
      {
        q: "Vroeger ruilden mensen spullen met elkaar, zonder geld. Wat was daar een **probleem** bij?",
        options: [
          "De ander wil jouw spullen misschien niet hebben",
          "Je mocht alleen ruilen met je familie",
          "Je moest bij elke ruil rente betalen",
          "Je moest eerst een bankrekening hebben",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Was ruilen alleen binnen de familie?",
          "Bij ruilen zonder geld: waarover zou je dan rente betalen?",
          "Bestonden banken toen al voor iedereen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Ruilen zonder geld",
              tekst: "Een boer heeft graan en wil schoenen. Hij moet iemand vinden die schoenen heeft én graan wil.",
            },
            {
              titel: "Het probleem",
              tekst: "Wil de schoenmaker geen graan? Dan lukt de ruil niet. De ander wil jouw spullen misschien niet.",
            },
            {
              titel: "Geld lost het op",
              tekst: "Met geld heeft alles een **prijs**. De boer verkoopt zijn graan voor geld en koopt met dat geld schoenen.",
            },
          ],
          woorden: [
            {
              woord: "ruilen",
              uitleg: "Iets geven en er iets anders voor terugkrijgen.",
            },
            {
              woord: "ruilmiddel",
              uitleg: "Iets waarmee je kunt ruilen, zoals geld.",
            },
          ],
          theorie: "Geld als ruilmiddel: iedereen wil geld hebben, dus je kunt er alles mee kopen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Jij hebt stickers en wilt een stuiterbal. Je vriend wil geen stickers. Met geld kun je de bal toch kopen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Ruilen werkt alleen als allebei willen wat de ander heeft. Geld werkt altijd.",
            },
          ],
          niveaus: {
            basis: "De ander wil jouw spullen misschien niet.",
            simpeler: "Jij wilt iets van de ander, maar de ander wil niet wat jij hebt.",
            nogSimpeler: "Ander wil het niet.",
          },
        },
      },
      {
        q: "Welk bedrag bestaat **NIET** als eurobiljet?",
        options: ["€25", "€5", "€50", "€200"],
        answer: 0,
        wrongHints: [null, "Dat is het kleinste biljet.", "Een biljet van €50 zie je vaak in de winkel.", "Dit biljet bestaat wel, al zie je het weinig."],
        uitlegPad: {
          stappen: [
            {
              titel: "Eurobiljetten",
              tekst: "Er zijn eurobiljetten van €5, €10, €20, €50, €100, €200 en €500.",
            },
            {
              titel: "Kijk naar het rijtje",
              tekst: "Steeds 5, 10, 20, 50 en dan weer ×10. Een biljet van €25 zit er niet tussen.",
            },
            {
              titel: "Conclusie",
              tekst: "€25 bestaat niet als biljet.",
            },
          ],
          woorden: [
            {
              woord: "biljet",
              uitleg: "Geld van papier.",
            },
            {
              woord: "munt",
              uitleg: "Geld van metaal.",
            },
          ],
          theorie: "Biljetten: €5, €10, €20, €50, €100, €200, €500. Munten: 1, 2, 5, 10, 20, 50 cent en €1 en €2.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "€30 betaal je met een biljet van €20 en een biljet van €10.",
            },
            {
              type: "stap",
              tekst: "€25 betaal je met een biljet van €20 en een biljet van €5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Biljetten: 5 - 10 - 20 - 50 - 100 - 200 - 500.",
            },
          ],
          niveaus: {
            basis: "Een biljet van €25 bestaat niet.",
            simpeler: "Biljetten zijn €5, €10, €20, €50, €100, €200, €500. Geen €25.",
            nogSimpeler: "Geen €25-biljet.",
          },
        },
      },
      {
        q: "Waarom wordt er in Nederland bij **contant betalen** vaak afgerond op 5 cent?",
        options: [
          "Munten van 1 en 2 cent worden bijna niet gebruikt",
          "Biljetten van €5 zijn te groot voor de kassa",
          "Prijzen mogen in Nederland niet op 1 of 2 cent eindigen",
          "Er zijn in Nederland bijna geen 5-centmunten meer",
        ],
        answer: 0,
        wrongHints: [null, "Wat hebben biljetten met centen te maken?", "Een prijs als €1,99 zie je overal. Wordt de prijs veranderd, of alleen het totaal als je contant betaalt?", "Als 5-centmunten op waren, zou je dan juist op 5 cent afronden?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Kleine munten",
              tekst: "Er bestaan munten van 1 en 2 cent. Maar in Nederland worden die bijna niet gebruikt.",
            },
            {
              titel: "Afronden",
              tekst: "Daarom ronden winkels het bedrag bij contant betalen af op 5 cent. Dan heb je die kleine muntjes niet nodig.",
            },
            {
              titel: "Pinnen",
              tekst: "Betaal je met de pinpas? Dan betaal je het precieze bedrag.",
            },
          ],
          woorden: [
            {
              woord: "contant",
              uitleg: "Betalen met munten en biljetten.",
            },
            {
              woord: "afronden",
              uitleg: "Een bedrag een beetje veranderen naar een rond getal.",
            },
          ],
          theorie: "Munten: 1, 2, 5, 10, 20, 50 cent, €1 en €2. In Nederland worden 1 en 2 cent bijna niet gebruikt, dus wordt er afgerond op 5 cent.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Je betaalt contant voor een snoepje. De kassa rondt af op 5 cent, zodat je geen 1- of 2-centmunten nodig hebt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Geen 1 en 2 cent in je portemonnee = afronden op 5 cent.",
            },
          ],
          niveaus: {
            basis: "Omdat 1 en 2 cent bijna niet gebruikt worden.",
            simpeler: "Kleine muntjes gebruikt bijna niemand. Daarom ronden ze af.",
            nogSimpeler: "Geen 1 en 2 cent.",
          },
        },
      },
      {
        q: "Welk land in de Europese Unie gebruikt de euro **NIET**?",
        options: ["Zweden", "België", "Duitsland", "Spanje"],
        answer: 0,
        wrongHints: [null, "Wat betaal je in een winkel in Brussel?", "Waarmee betaal je in een winkel in Berlijn?", "Waarmee betaal je op vakantie in Spanje?"],
        uitlegPad: {
          stappen: [
            {
              titel: "EU en eurozone",
              tekst: "Niet alle landen van de Europese Unie (EU) gebruiken de euro. De landen met de euro heten samen de **eurozone**.",
            },
            {
              titel: "Met euro",
              tekst: "België, Duitsland en Spanje gebruiken de euro, net als Nederland.",
            },
            {
              titel: "Zonder euro",
              tekst: "Zweden zit wel in de EU, maar gebruikt de euro niet. Zweden heeft een eigen munt.",
            },
          ],
          woorden: [
            {
              woord: "EU",
              uitleg: "Europese Unie — een groep landen in Europa die samenwerken.",
            },
            {
              woord: "eurozone",
              uitleg: "De EU-landen die de euro gebruiken.",
            },
          ],
          theorie: "Niet-euro in de EU: Zweden, Denemarken, Polen, Tsjechië, Hongarije, Roemenië.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Ga je op vakantie naar België? Dan betaal je gewoon met euro's.",
            },
            {
              type: "stap",
              tekst: "Ga je naar Zweden? Dan heb je ander geld nodig.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "In de EU zitten ≠ de euro hebben.",
            },
          ],
          niveaus: {
            basis: "Zweden gebruikt de euro niet.",
            simpeler: "Zweden zit in de EU, maar heeft eigen geld.",
            nogSimpeler: "Zweden: geen euro.",
          },
        },
      },
    ],
  },

  // STAP 2: Zakgeld
  {
    title: "Zakgeld + zelf verdienen",
    explanation:
      "**Zakgeld** is geld dat je ouders je geven om zelf te beheren.\n\n**Wat is gewoon in NL?**\n• **Groep 5** *(8-9 jr)*: ~€2,50-5 per week.\n• **Groep 6**: ~€3-5 per week.\n• **Groep 7**: ~€4-7 per week.\n• **Groep 8**: ~€5-10 per week.\n• Per familie verschillend — niet stressen of vergelijken!\n\n**Waarom zakgeld?**\n• Leren **kiezen** *(wel/niet kopen)*.\n• Leren **wachten** *(sparen voor groter)*.\n• Leren **prioriteit** *(wat is echt belangrijk?)*.\n• Verantwoordelijkheid.\n\n**Soms gekoppeld aan klusjes**:\n• Stofzuigen.\n• Vaatwasser uit.\n• Hond uitlaten.\n• Tafel dekken.\n\n**Pas op — niet té veel klusjes verplicht**:\nSommige ouders willen dat zakgeld 'altijd verdiend' wordt. Voordeel: leert werken. Nadeel: alledaagse hulp lijkt op betaald werk.\n\n**Zelf verdienen op latere leeftijd**:\n\n**Wat mag in NL (qua leeftijd)?**\n• **13-14 jaar**: **licht werk** *(krant bezorgen, oppassen, hondje uitlaten)*. In de vakantie max 7 uur per dag.\n• **15 jaar**: meer soorten werk; in de vakantie max 8 uur per dag, geen avondwerk.\n• **16-17 jaar**: weekend + avondwerk *(max 9 uur/dag, geen werk na 23.00 uur)*.\n• **18+**: alle banen, volwassen werknemer.\n\n**Klusjes voor extra zakgeld**:\n• **Oppassen op buurkinderen**: ~€5-8 per uur.\n• **Hond uitlaten**: ~€3-5 per keer.\n• **Krant bezorgen** *(13+ in NL)*: ~€30-50 per week.\n• **Folders/reclames bezorgen**: ~€20-30 per zaterdag.\n• **Auto wassen** voor opa/oma: ~€5-10.\n• **Gras maaien** voor buren: ~€10-15.\n\n**Statiegeld** 🍾\n• Lege flessen + blikjes inleveren = geld terug.\n• Statiegeld plastic fles 0,5L = €0,15.\n• Statiegeld grote plastic fles (meer dan 1 liter) = €0,25.\n• Statiegeld glazen bierflesje = €0,10.\n• Statiegeld blikje = €0,15.\n• Bij Albert Heijn + Jumbo via automaat.\n\n**Tip — geld leren beheren**:\n• Houd een **boekje** bij: wat krijg je + waar geef je het uit?\n• **Doelen** stellen: 'Ik spaar voor een speelconsole van €300'.\n• **Niet impulsief** kopen: wacht 1 dag, wil je het dan nog?\n\n**Toets-feitje**:\nVolgens NIBUD *(Nationaal Instituut voor Budgetvoorlichting)* sparen kinderen die zakgeld krijgen vaker dan kinderen die alles vragen.\n\n**toetsvragen**:\n*'Vanaf welke leeftijd licht vakantiewerk?'* → 13 jaar.\n*'Wat is statiegeld?'* → geld dat je terugkrijgt bij inleveren flessen/blikjes.\n*'Hoe leer je geld beheren?'* → boekje bijhouden, doelen stellen, niet impulsief.",
    checks: [
      {
        q: "Vanaf welke leeftijd mag je in NL in de vakantie **licht werk** doen?",
        options: ["13 jaar", "12 jaar", "18 jaar", "16 jaar"],
        answer: 0,
        wrongHints: [null, "Op je twaalfde mag het nog niet. Wanneer wel?", "Zo lang hoef je niet te wachten: ook tieners mogen al licht werk doen.", "Vanaf 16 mag je meer soorten werk doen. Licht werk mag al eerder."],
      },
      {
        q: "Wat is **statiegeld**?",
        options: ["Geld terug bij flessen inleveren", "Extra belasting op elke fles cola", "Spaargeld dat op de bank staat", "Korting als je veel flessen koopt"],
        answer: 0,
        wrongHints: [null, "Gaat statiegeld naar de overheid? Wat gebeurt er met lege flessen?", "Heeft statiegeld met een bank te maken? Denk aan de supermarkt.", "Krijg je statiegeld bij het kopen? Denk aan lege flessen."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is statiegeld?", tekst: "Statiegeld is een **extra bedrag** dat je betaalt bij aankoop van een fles of blikje. Je krijgt dit geld TERUG als je de lege verpakking inlevert." },
            { titel: "Waarom?", tekst: "Statiegeld stimuleert mensen om flessen + blikjes IN TE LEVEREN (niet weg te gooien). Zo recycle je beter en minder zwerfafval." },
            { titel: "Hoeveel?", tekst: "Plastic fles tot en met 1L = €0,15. Plastic fles groter dan 1L = €0,25. Glazen bierflesje = €0,10. Blikje (sinds 2023) = €0,15." },
          ],
          woorden: [
            { woord: "statiegeld", uitleg: "Bedrag op fles/blikje dat je terug krijgt." },
            { woord: "recyclen", uitleg: "Hergebruiken van materiaal in nieuwe producten." },
          ],
          theorie: "Toets-feit: statiegeld is geen belasting, geen winst voor de winkel. Het is gewoon TIJDELIJK je eigen geld dat je terugkrijgt bij inleveren. Bij Albert Heijn / Jumbo via automaat.",
          voorbeelden: [
            { type: "stap", tekst: "Je koopt cola van €2. Daar komt €0,15 statiegeld bij. Je betaalt €2 + €0,15 = €2,15. Lege fles inleveren = €0,15 terug." },
            { type: "stap", tekst: "Schoolfeest met 20 flessen frisdrank = €0,15 × 20 = €3 statiegeld om terug te halen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Statiegeld = jouw eigen geld in bewaring. Niet vergeten in te leveren!" }],
          niveaus: {
            basis: "Denk aan de automaat in de supermarkt waar je lege flessen in stopt. Wat krijg je daar?",
            simpeler: "Bij het kopen betaal je een beetje extra. Lever je de lege fles in, dan krijg je dat geld terug. Zo komen minder flessen in het milieu.",
            nogSimpeler: "Inleveren = geld terug.",
          },
        },
      },
      {
        q: "Voor welke verpakking betaal je **€0,25** statiegeld?",
        options: ["Grote plastic fles (meer dan 1 liter)", "Kleine plastic fles (tot 1 liter)", "Blikje frisdrank (0,33 liter)", "Glazen bierflesje (0,3 liter)"],
        answer: 0,
        wrongHints: [null, "Voor kleine flesjes krijg je minder terug.", "Voor een blikje krijg je €0,15.", "Glazen bierflesjes hebben een eigen, lager bedrag."],
      },
      {
        q: "Hoe leer je **geld beheren**?",
        options: ["Bijhouden wat je uitgeeft en doelen stellen", "Al je geld op de bank zetten en niet aankomen", "Je ouder of verzorger alles laten regelen", "Pas met geld beginnen als je volwassen bent"],
        answer: 0,
        wrongHints: [null, "Dan is je geld veilig. Maar leer je ermee omgaan als je er nooit naar kijkt?", "Dan regelt een ander het. Leer jij het dan zelf?", "Hoe eerder je oefent, hoe beter je het later kunt. Waarom wachten?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat kun je leren van **zakgeld** krijgen?",
        options: [
          "Zelf kiezen waar je je geld aan uitgeeft",
          "Hoe je geld leent van je vrienden",
          "Dat sparen dan niet meer nodig is",
          "Hoe je rente betaalt aan de bank",
        ],
        answer: 0,
        wrongHints: [null, "Leen je iets als je zakgeld krijgt? Het is toch al van jou?", "Wat doe je als je iets wilt dat meer kost dan je zakgeld van één week?", "Betaal je rente als je zakgeld krijgt? Rente hoort bij lenen."],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is zakgeld?",
              tekst: "Zakgeld is geld dat je van je ouder of verzorger krijgt om **zelf** te beheren.",
            },
            {
              titel: "Wat leer je ervan?",
              tekst: "Je leert **kiezen** (koop ik dit wel of niet?), **wachten** (sparen voor iets groters) en wat écht belangrijk is.",
            },
            {
              titel: "Verantwoordelijkheid",
              tekst: "Is je geld op? Dan moet je wachten tot je weer zakgeld krijgt. Zo leer je goed opletten.",
            },
          ],
          woorden: [
            {
              woord: "zakgeld",
              uitleg: "Geld dat je krijgt om zelf te beheren.",
            },
            {
              woord: "beheren",
              uitleg: "Goed opletten waar je geld naartoe gaat.",
            },
          ],
          theorie: "Zakgeld leert: kiezen, wachten, prioriteit (wat is echt belangrijk) en verantwoordelijkheid.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Je hebt €4. Koop je nu snoep, of spaar je voor een boek? Die keuze maak jij zelf.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zakgeld = oefenen met kiezen.",
            },
          ],
          niveaus: {
            basis: "Met zakgeld mag jij zelf iets doen. Wat beslis jij dan?",
            simpeler: "Met zakgeld beslis jij: kopen of sparen?",
            nogSimpeler: "Zelf kiezen.",
          },
        },
      },
      {
        q: "Wat is een **nadeel** als je voor élk klusje thuis geld krijgt?",
        options: [
          "Gewoon thuis helpen lijkt dan op betaald werk",
          "Je leert dan minder goed rekenen met geld",
          "Je moet dan belasting over dat geld betalen",
          "Je krijgt dan meer geld dan je kunt uitgeven",
        ],
        answer: 0,
        wrongHints: [null, "Met meer geld oefen je juist vaker. Wat verandert er aan het helpen zelf?", "Over klusjesgeld van thuis betaal je geen belasting. Wat verandert er aan het helpen?", "Is te veel geld het echte probleem? Denk eraan of je dan nog gratis wilt helpen."],
        uitlegPad: {
          stappen: [
            {
              titel: "Klusjes voor zakgeld",
              tekst: "Sommige ouders of verzorgers geven zakgeld voor klusjes, zoals de vaatwasser uitruimen of de tafel dekken.",
            },
            {
              titel: "Voordeel",
              tekst: "Je leert dat je voor geld moet werken.",
            },
            {
              titel: "Nadeel",
              tekst: "Gewone hulp in huis gaat lijken op betaald werk. Dan help je misschien alleen nog als je er geld voor krijgt.",
            },
          ],
          woorden: [
            {
              woord: "klusje",
              uitleg: "Een kleine taak, bijvoorbeeld de hond uitlaten.",
            },
            {
              woord: "nadeel",
              uitleg: "Iets wat minder goed is.",
            },
          ],
          theorie: "Zakgeld voor klusjes: voordeel = leert werken. Nadeel = alledaagse hulp lijkt op betaald werk.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Je ruimt de tafel af. Krijg je daar steeds geld voor? Dan voelt helpen thuis als een baantje.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Voordeel: je leert werken. Nadeel: helpen wordt een baantje.",
            },
          ],
          niveaus: {
            basis: "Denk aan helpen in huis, zoals de tafel dekken. Doe je dat nog vanzelf als je er steeds geld voor krijgt?",
            simpeler: "Als je voor alles geld krijgt, help je misschien alleen nog voor geld.",
            nogSimpeler: "Helpen wordt werk.",
          },
        },
      },
      {
        q: "Je gooit een lege plastic fles met statiegeld in de **prullenbak**. Wat gebeurt er met het statiegeld?",
        options: [
          "Je krijgt het niet terug",
          "Je krijgt het later thuisgestuurd",
          "De winkel betaalt het je toch uit",
          "Het wordt van je volgende boodschappen afgetrokken",
        ],
        answer: 0,
        wrongHints: [null, "Hoe weet de winkel dat jij die fles had?", "Je levert niets in bij de winkel. Waarvoor zou de winkel dan betalen?", "Weet de kassa welke fles jij hebt weggegooid?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Statiegeld",
              tekst: "Bij een fles of blikje met statiegeld betaal je een extra bedrag.",
            },
            {
              titel: "Terugkrijgen",
              tekst: "Dat geld krijg je pas terug als je de lege fles **inlevert**, bijvoorbeeld in een automaat in de supermarkt.",
            },
            {
              titel: "Weggooien",
              tekst: "Gooi je de fles weg? Dan ben je dat geld kwijt.",
            },
          ],
          woorden: [
            {
              woord: "statiegeld",
              uitleg: "Geld dat je terugkrijgt als je een lege fles of blik inlevert.",
            },
            {
              woord: "inleveren",
              uitleg: "Terugbrengen naar de winkel.",
            },
          ],
          theorie: "Statiegeld is jouw eigen geld dat even 'vastzit' in de fles. Alleen inleveren geeft het terug.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Je drinkt een blikje leeg en neemt het mee naar de supermarkt. In de automaat krijg je je statiegeld terug.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Inleveren = geld terug. Weggooien = geld weg.",
            },
          ],
          niveaus: {
            basis: "Statiegeld krijg je pas terug als je de fles inlevert. Lever je de fles nu nog in?",
            simpeler: "Alleen als je de fles inlevert, krijg je je geld terug.",
            nogSimpeler: "Weggooien = geld weg.",
          },
        },
      },
      {
        q: "Je levert **4 blikjes** in. Elk blikje heeft €0,15 statiegeld. Hoeveel krijg je terug?",
        options: ["€0,60", "€0,40", "€0,15", "€1,00"],
        answer: 0,
        wrongHints: [
          null,
          "Heb je met 10 cent per blikje gerekend? Elk blikje is €0,15.",
          "Is dat voor één blikje of voor alle vier?",
          "Heb je met 25 cent per blikje gerekend? Kijk nog eens wat één blikje oplevert.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat weet je?",
              tekst: "Eén blikje = €0,15 statiegeld. Je hebt 4 blikjes.",
            },
            {
              titel: "Rekenen",
              tekst: "4 × €0,15. Reken in centen: 4 × 15 cent = 60 cent.",
            },
            {
              titel: "Antwoord",
              tekst: "60 cent = **€0,60**.",
            },
          ],
          woorden: [
            {
              woord: "statiegeld",
              uitleg: "Geld terug bij inleveren van een lege fles of blik.",
            },
            {
              woord: "cent",
              uitleg: "100 cent = 1 euro.",
            },
          ],
          theorie: "Rekenen met kleine bedragen: reken in centen en zet het daarna terug in euro's.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3 blikjes: 3 × 15 cent = 45 cent = €0,45.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Rekenen met centen is makkelijker dan met komma's.",
            },
          ],
          niveaus: {
            basis: "Reken in centen: één blikje is 15 cent. Hoeveel is dat bij 4 blikjes?",
            simpeler: "4 × 15 cent = 60 cent.",
            nogSimpeler: "60 cent.",
          },
        },
      },
      {
        q: "Welk werk mag je in Nederland vanaf **13 jaar** doen?",
        options: [
          "Kranten bezorgen",
          "In een fabriek aan een machine werken",
          "Op een bouwplaats werken",
          "'s Nachts in een bakkerij werken",
        ],
        answer: 0,
        wrongHints: [null, "Is dat licht werk, of zwaar en gevaarlijk?", "Is werken op een bouwplaats licht en veilig werk?", "Mag je op je dertiende 's nachts werken?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Licht werk",
              tekst: "Met 13 en 14 jaar mag je alleen **licht werk** doen. Dat is makkelijk werk dat niet gevaarlijk is.",
            },
            {
              titel: "Voorbeelden",
              tekst: "Kranten bezorgen, oppassen en een hondje uitlaten zijn licht werk.",
            },
            {
              titel: "Niet toegestaan",
              tekst: "Zwaar of gevaarlijk werk, zoals met machines of op een bouwplaats, mag je dan nog niet.",
            },
          ],
          woorden: [
            {
              woord: "licht werk",
              uitleg: "Makkelijk, veilig werk voor jongeren.",
            },
            {
              woord: "vakantiewerk",
              uitleg: "Werk dat je in de schoolvakantie doet.",
            },
          ],
          theorie: "13-14 jaar: licht werk (krant, oppassen, hond uitlaten). In de vakantie hoogstens 7 uur per dag.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Joris is 13 en past op het buurmeisje. Dat is licht werk.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "13 jaar = licht en veilig werk.",
            },
          ],
          niveaus: {
            basis: "Met 13 jaar mag je alleen licht werk doen: werk dat niet zwaar of gevaarlijk is en niet 's nachts. Welk werk past daarbij?",
            simpeler: "Kranten bezorgen is licht werk. Dat mag vanaf 13 jaar.",
            nogSimpeler: "Krant.",
          },
        },
      },
    ],
  },

  // STAP 3: Sparen
  {
    title: "Sparen + rente",
    explanation:
      "**Sparen** = geld bewaren voor later in plaats van meteen uitgeven.\n\n**Waarom sparen?**\n• Voor **groot doel** *(speelconsole, fiets, reis)*.\n• Voor **noodgeval** *(als iets stuk gaat)*.\n• Voor **toekomst** *(later studeren, eigen huis)*.\n\n**Hoe sparen?**\n\n**1. Spaarpot** 🐷\n• Munten + biljetten thuis.\n• Geen rente.\n• Maar wel voelbaar — zien hoe het groeit.\n• Risico: diefstal of verlies.\n\n**2. Kinderspaarrekening** 🏦\n• Bij bank *(ouders openen voor jou)*.\n• Krijgt **rente** *(klein percentage extra per jaar)*.\n• Veiliger dan thuis.\n• Niet impulsief uit te geven — moet via bank.\n\n**Banken in NL met kinderspaarrekening**:\n• ING — Oranje Spaarrekening.\n• Rabobank — JeugdSparen.\n• ABN AMRO — Jongerenrekening.\n• Knab, ASN, SNS, andere.\n\n**Wat is rente?**\n• **Rente** = beloning voor sparen. Bank gebruikt jouw geld om uit te lenen aan anderen.\n• In ruil krijg je een **percentage** *(%)*.\n\n**Rente-voorbeeld**:\n• Je hebt **€100** op spaarrekening.\n• Rente: **2% per jaar**.\n• Na 1 jaar: €100 + 2% = **€102**.\n• Na 10 jaar: ongeveer **€121,90** *(samengestelde rente)*.\n\n**Samengestelde rente** 📈 *(belangrijk!)*:\n• Je krijgt rente over rente.\n• Voorbeeld: €100 met 5% rente per jaar.\n  - Jaar 1: €100 + 5 = €105.\n  - Jaar 2: €105 + 5% van €105 = €110,25.\n  - Jaar 3: €110,25 + 5% = €115,76.\n• **Het 'sneeuwbal-effect'** — geld groeit steeds harder.\n• Albert Einstein zou hebben gezegd: 'Samengestelde rente is het achtste wereldwonder.'\n\n**Tip — sparen vroeg beginnen**:\nAls je elke maand €20 spaart vanaf je 10e tot je 18e *(8 jaar)* heb je €1.920 + rente. Dat kan je goed gebruiken voor scooter, studie of reis.\n\n**Spaardoel**:\nMaak een **plan**:\n1. Wat wil je *(bv. game-console €300)*.\n2. Hoeveel kun je per week sparen *(bv. €5)*.\n3. Hoe lang duurt het *(€300 ÷ €5 = 60 weken = ~14 maanden)*.\n4. Begin + houd vol.\n\n**Verleidingen vermijden**:\n• Reclame *(kinderkanaal Nickelodeon zit vol)*.\n• Vrienden die altijd nieuwe spullen kopen.\n• 'Impulsaankopen' bij supermarkt-kassa *(snoep)*.\n\n**Toets-tip — beste momenten voor sparen**:\n• **Direct bij ontvangst** — voor je het kunt uitgeven.\n• **Vooraf overschrijven** naar spaarrekening *(automatische overschrijving)*.\n• 'Kijken wat er aan het eind overblijft' werkt zelden — meestal niets.\n\n**toetsvragen**:\n*'Wat is rente?'* → percentage extra geld over je spaargeld.\n*'Wat is samengestelde rente?'* → rente over rente, sneeuwbal-effect.\n*'Hoe spaar je het beste?'* → vooraf opzij zetten, niet eind-maand-hopen.",
    checks: [
      {
        q: "Wat is **rente**?",
        options: ["Extra geld dat je krijgt over je spaargeld", "Geld dat je aan de overheid moet betalen", "Geld dat je betaalt als je te laat bent", "Geld dat je minder betaalt in de uitverkoop"],
        answer: 0,
        wrongHints: [null, "Dat is belasting.", "Dat is een boete.", "Dat is korting."],
        uitlegPad: {
          stappen: [
            { titel: "Rente = beloning voor sparen", tekst: "**Rente** is een **percentage extra geld** dat je krijgt van de **bank** als jij geld bij hen bewaart. Een soort 'bedankje' voor je vertrouwen." },
            { titel: "Waarom geeft de bank rente?", tekst: "De bank gebruikt jouw spaargeld om **uit te lenen** aan andere mensen (bv. voor een huis-hypotheek). Die mensen betalen MEER rente aan de bank dan jij krijgt. Verschil = winst voor de bank." },
            { titel: "Verschillende soorten rente", tekst: "• **Spaarrente** = krijg je over spaargeld (laag, bv. 2%).\n• **Hypotheekrente** = betaal je voor lening (bv. 4%).\n• **Negatieve rente** = soms moet je BETALEN om geld op bank te zetten (zeldzaam)." },
          ],
          woorden: [
            { woord: "rente", uitleg: "Percentage extra geld over een bedrag (op spaargeld of lening)." },
            { woord: "spaarrente", uitleg: "Wat je KRIJGT van bank over je spaargeld." },
            { woord: "hypotheekrente", uitleg: "Wat je BETAALT voor een lening (bv. huis kopen)." },
          ],
          theorie: "Toets-feit rente:\n• KRIJG je over spaargeld.\n• BETAAL je over lening.\n• Wordt jaarlijks uitgekeerd (vaak in januari).\n• Hoger % = meer geld na jaar.",
          voorbeelden: [
            { type: "stap", tekst: "Spaarrekening met 3% rente, €1000 spaargeld → na jaar €1030 (€30 rente)." },
            { type: "stap", tekst: "Niet verwarren: belasting = geld AF (overheid). Rente = geld erbij (bij sparen) of eraf (bij lening)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Rente = % extra. Bij sparen = krijgen. Bij lenen = betalen. Een procent (%) op een bedrag." }],
          niveaus: {
            basis: "Rente = extra geld over je spaargeld.",
            simpeler: "De bank betaalt jou rente omdat jij geld bij hen bewaart.",
            nogSimpeler: "Extra geld",
          },
        },
      },
      {
        q: "Je zet **€100** op de bank met **2% rente** per jaar. Hoeveel heb je na 1 jaar?",
        options: ["€102", "€2", "€120", "€98"],
        answer: 0,
        wrongHints: [null, "Dat is alleen de rente. Hoeveel heb je in totaal?", "Is 2% van €100 echt €20? Hoeveel is 1% van €100?", "Rente komt erbij, niet eraf."],
        uitlegPad: {
          stappen: [
            { titel: "Rente berekenen: 2 stappen", tekst: "1) Reken de **rente** uit: 2% van €100.\n2) **Tel die rente op** bij het oorspronkelijke bedrag." },
            { titel: "Stap 1: 2% van €100", tekst: "2% = 2 per 100 = 2/100 = 0,02.\n0,02 × €100 = **€2** rente.\n(Truc: bij 100 is het % gelijk aan het rente-bedrag in euro's.)" },
            { titel: "Stap 2: totaal", tekst: "Spaargeld + rente = €100 + €2 = **€102**.\nDus na 1 jaar heb je €102 op je rekening." },
          ],
          woorden: [
            { woord: "rente-bedrag", uitleg: "Hoeveel euro extra je krijgt." },
            { woord: "eindbedrag", uitleg: "Spaargeld + rente samen." },
          ],
          theorie: "Toets-formule rente: **Eindbedrag = Begin × (1 + rente%/100)**. Bij €100 + 2%: 100 × 1,02 = 102. Slim om uit te rekenen: × 1,02 is precies hetzelfde als +2%.",
          voorbeelden: [
            { type: "stap", tekst: "€500 met 4% = €500 × 1,04 = €520 (of: €500 + €20 rente)." },
            { type: "stap", tekst: "€200 met 5% = €200 × 1,05 = €210." },
            { type: "stap", tekst: "Toets-fout: alleen 'rente' = €2 zonder oorspronkelijk bedrag. De vraag vraagt 'na 1 jaar' = totaal-bedrag." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Rente komt BOVENOP je spaargeld. Niet alleen 'de rente' is antwoord, maar TOTAAL (oud + rente)." }],
          niveaus: {
            basis: "€102 (€100 + €2 rente).",
            simpeler: "2% van €100 = €2. Totaal = €100 + €2 = €102.",
            nogSimpeler: "€102",
          },
        },
      },
      {
        q: "Wat is **samengestelde rente**?",
        options: ["Je krijgt ook rente over de rente van vorig jaar", "Je krijgt elk jaar precies hetzelfde bedrag aan rente", "Je krijgt rente van twee banken tegelijk", "Je betaalt rente en krijgt het later terug"],
        answer: 0,
        wrongHints: [null, "Dat is gewone rente. Wat gebeurt er als de rente ook op de bank blijft staan?", "'Samengesteld' gaat niet over het aantal banken. Waarover krijg je rente?", "Bij sparen betaal je geen rente. Waarover krijg je rente?"],
      },
      {
        q: "Wanneer zet je het best geld opzij om **te sparen**?",
        options: ["Vooraf opzij zetten, niet wachten", "Aan het einde van de maand sparen", "Sparen zodra je iets duurs wilt kopen", "Sparen vanaf dat je een baan hebt"],
        answer: 0,
        wrongHints: [null, "Is er aan het einde van de maand nog wat over?", "Dan begin je pas laat. Hoe lang moet je dan nog wachten?", "Ook met zakgeld kun je al sparen. Waarom wachten?"],
        uitlegPad: {
          stappen: [
            { titel: "Sparen-strategie: 'Pay yourself first'", tekst: "De **beste manier om te sparen** is: zet geld **DIRECT** opzij zodra je het krijgt. **Vóórdat** je iets uitgeeft. Dat heet 'pay yourself first' (eerst jezelf betalen)." },
            { titel: "Waarom werkt 'eind van maand' niet?", tekst: "Mensen die wachten tot eind van maand om te sparen merken vaak: er is **niets over**. Uitgaven vullen elke euro die je hebt — zo werkt het brein. Vooraf opzij zetten = veilig." },
            { titel: "Praktisch", tekst: "Bij **zakgeld**: zodra je €5 krijgt, doe €1 in spaarpot. Bij **werkende volwassenen**: automatische overschrijving op de 1e van maand naar spaarrekening. Dan blijft de rest voor uitgaven over." },
          ],
          woorden: [
            { woord: "pay yourself first", uitleg: "Engelse term voor 'eerst jezelf betalen' — eerst sparen, dan uitgeven." },
            { woord: "automatische overschrijving", uitleg: "Bank zet maandelijks automatisch een bedrag over." },
          ],
          theorie: "Toets-tip sparen-gewoonte: vaste regel = 'eerst sparen, dan uitgeven'. Werkt voor zakgeld, salaris en familie-budget. Hoe vroeger je begint, hoe sterker het wordt door samengestelde rente.",
          voorbeelden: [
            { type: "stap", tekst: "Krijg je €10 zakgeld? Doe direct €2 in spaarpot. €8 over voor uitgeven." },
            { type: "stap", tekst: "Bij volwassenen: salaris komt 25e binnen → 26e gaat €100 automatisch naar spaarrekening." },
            { type: "stap", tekst: "Vergelijk: wachten tot 30e en hopen dat er nog €100 over is = werkt zelden." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "VOORAF opzij = werkt. ACHTERAF hopen = werkt niet. Volgorde maakt het verschil." }],
          niveaus: {
            basis: "Vooraf opzij zetten, niet wachten.",
            simpeler: "Krijg je geld? Direct deel in spaarpot. Rest blijft voor uitgaven.",
            nogSimpeler: "Direct opzij",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Waarom geef je geld op een **kinderspaarrekening** minder snel zomaar uit?",
        options: [
          "Je moet het eerst via de bank opnemen",
          "De bank kiest waar je het aan uitgeeft",
          "Het geld wordt daar elke week minder",
          "Je kunt het daar niet meer terugzien",
        ],
        answer: 0,
        wrongHints: [null, "Wie beslist waar jouw geld aan opgaat?", "Op een spaarrekening krijg je juist rente. Wordt het dan minder?", "In de app van de bank zie je je spaargeld gewoon staan."],
        uitlegPad: {
          stappen: [
            {
              titel: "Spaarpot of rekening",
              tekst: "In een spaarpot zit het geld thuis. Je pakt het er zo uit.",
            },
            {
              titel: "Spaarrekening",
              tekst: "Op een kinderspaarrekening staat het geld bij de **bank**. Wil je het gebruiken, dan moet het eerst via de bank.",
            },
            {
              titel: "Waarom handig?",
              tekst: "Omdat het niet zo snel gaat, koop je minder snel iets zonder na te denken.",
            },
          ],
          woorden: [
            {
              woord: "kinderspaarrekening",
              uitleg: "Een spaarrekening bij de bank voor kinderen.",
            },
            {
              woord: "opnemen",
              uitleg: "Geld van je rekening halen.",
            },
          ],
          theorie: "Kinderspaarrekening: je krijgt rente, het is veiliger dan thuis en je geeft het niet impulsief uit, want het moet via de bank.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Je wilt een zakje snoep. Je spaargeld staat op de bank. Je moet eerst je ouder of verzorger vragen het geld over te zetten. Zo denk je er nog even over na.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Geld op de bank = even wachten = minder snel uitgeven.",
            },
          ],
          niveaus: {
            basis: "Je moet het eerst via de bank halen.",
            simpeler: "Het geld zit niet in je zak. Daardoor geef je het minder snel uit.",
            nogSimpeler: "Eerst via de bank.",
          },
        },
      },
      {
        q: "Wat is een **risico** als je al je geld in een spaarpot thuis bewaart?",
        options: [
          "Het kan gestolen worden of kwijtraken",
          "Je moet er rente over betalen",
          "De bank kan het geld uitlenen",
          "Je moet er belasting over betalen",
        ],
        answer: 0,
        wrongHints: [null, "Betaal je rente over geld in je eigen spaarpot?", "Staat je spaarpot bij de bank? Wie kan er dan aan je geld?", "Over geld in je spaarpot betaal je geen belasting. Wat kan er thuis wél misgaan?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Spaarpot",
              tekst: "In een spaarpot bewaar je munten en biljetten thuis. Je ziet het groeien, dat is leuk.",
            },
            {
              titel: "Geen rente",
              tekst: "Je krijgt er geen rente over.",
            },
            {
              titel: "Risico",
              tekst: "Het geld kan **gestolen** worden of je kunt de spaarpot **kwijtraken**. Op een spaarrekening is het veiliger.",
            },
          ],
          woorden: [
            {
              woord: "risico",
              uitleg: "Kans dat er iets misgaat.",
            },
            {
              woord: "spaarpot",
              uitleg: "Potje om thuis geld in te bewaren.",
            },
          ],
          theorie: "Spaarpot: geen rente, wel zichtbaar, risico op diefstal of verlies. Spaarrekening: rente, veiliger.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Bij een verhuizing raakt de spaarpot van Noor zoek. Al haar spaargeld is weg.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Thuis = zichtbaar maar minder veilig. Bank = veiliger.",
            },
          ],
          niveaus: {
            basis: "Het kan gestolen worden of kwijtraken.",
            simpeler: "Geld thuis is minder veilig dan op de bank.",
            nogSimpeler: "Kwijt of gestolen.",
          },
        },
      },
      {
        q: "Waarom geeft de bank je **rente** over je spaargeld?",
        options: [
          "De bank leent jouw geld uit aan anderen",
          "De bank krijgt geld van de overheid voor jou",
          "Je betaalt de bank daarvoor elke maand",
          "De bank verdient aan de kosten van je pinpas",
        ],
        answer: 0,
        wrongHints: [null, "Betaalt de overheid jouw rente? Waar verdient de bank zelf zijn geld mee?", "Betaal jij de bank om rente te krijgen? Dan zou je er niets aan overhouden.", "Je krijgt rente over spaargeld, ook zonder pinpas. Wat doet de bank met jouw spaargeld?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Rente",
              tekst: "Rente is een beloning voor sparen: je krijgt een **percentage** extra.",
            },
            {
              titel: "Wat doet de bank met je geld?",
              tekst: "De bank gebruikt jouw spaargeld om **uit te lenen** aan andere mensen.",
            },
            {
              titel: "In ruil",
              tekst: "Omdat de bank jouw geld mag gebruiken, krijg jij er rente voor.",
            },
          ],
          woorden: [
            {
              woord: "rente",
              uitleg: "Extra geld over je spaargeld.",
            },
            {
              woord: "uitlenen",
              uitleg: "Geld aan iemand geven die het later terugbetaalt.",
            },
          ],
          theorie: "Rente bij sparen = beloning. De bank leent jouw geld uit en geeft jou daarvoor een klein percentage.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Jouw spaargeld helpt de bank om iemand een lening te geven. Als bedankje krijg jij rente.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Jouw geld wordt uitgeleend → jij krijgt rente.",
            },
          ],
          niveaus: {
            basis: "De bank leent jouw geld uit.",
            simpeler: "De bank gebruikt jouw geld voor leningen. Daarom krijg jij rente.",
            nogSimpeler: "Uitlenen.",
          },
        },
      },
      {
        q: "Je spaart voor een **noodgeval**. Waarvoor is dat geld bedoeld?",
        options: [
          "Voor als er onverwacht iets stukgaat",
          "Voor snoep bij de kassa",
          "Voor een uitje dit weekend",
          "Voor een nieuwe game die net uit is",
        ],
        answer: 0,
        wrongHints: [null, "Is dat een noodgeval, of iets leuks?", "Is een uitje onverwacht, of iets leuks dat je plant?", "Een nieuwe game is leuk. Is het een noodgeval?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Waarom sparen?",
              tekst: "Je spaart voor een groot doel, voor de toekomst of voor een **noodgeval**.",
            },
            {
              titel: "Wat is een noodgeval?",
              tekst: "Iets wat je niet had verwacht en wat toch betaald moet worden, bijvoorbeeld als je fiets kapotgaat.",
            },
            {
              titel: "Geen leuke dingen",
              tekst: "Snoep, een uitje of een game zijn leuk, maar geen noodgeval.",
            },
          ],
          woorden: [
            {
              woord: "noodgeval",
              uitleg: "Iets onverwachts dat geld kost.",
            },
            {
              woord: "onverwacht",
              uitleg: "Wat je niet zag aankomen.",
            },
          ],
          theorie: "Drie redenen om te sparen: groot doel, noodgeval, toekomst.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "De band van je fiets is lek. Je betaalt de reparatie van je noodgeld.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Noodgeld = voor als iets misgaat.",
            },
          ],
          niveaus: {
            basis: "Voor als er onverwacht iets stukgaat.",
            simpeler: "Noodgeld gebruik je als er iets kapotgaat wat je niet had verwacht.",
            nogSimpeler: "Iets kapot.",
          },
        },
      },
      {
        q: "Je ziet bij de kassa snoep liggen en koopt het zonder na te denken. Hoe heet zo'n aankoop?",
        options: ["Een impulsaankoop", "Een spaardoel", "Een begroting", "Een lening"],
        answer: 0,
        wrongHints: [null, "Spaar je hier ergens voor?", "Een begroting is een plan. Heb je hier iets gepland?", "Heb je geld geleend voor dit snoep?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Verleiding",
              tekst: "Bij de kassa liggen vaak snoep en kleine dingen. Die zijn er om je te verleiden.",
            },
            {
              titel: "Impulsaankoop",
              tekst: "Iets kopen zonder erover na te denken heet een **impulsaankoop**.",
            },
            {
              titel: "Waarom opletten?",
              tekst: "Impulsaankopen maken je spaargeld kleiner zonder dat je het merkt.",
            },
          ],
          woorden: [
            {
              woord: "impulsaankoop",
              uitleg: "Iets snel kopen zonder nadenken.",
            },
            {
              woord: "verleiding",
              uitleg: "Iets wat je zin geeft om te kopen.",
            },
          ],
          theorie: "Verleidingen: reclame, vrienden met nieuwe spullen en snoep bij de kassa. Eerst nadenken, dan pas kopen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Je komt voor brood en gaat naar huis met brood én een reep chocola. Die reep is een impulsaankoop.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Impuls = opeens, zonder nadenken.",
            },
          ],
          niveaus: {
            basis: "Een impulsaankoop.",
            simpeler: "Iets kopen zonder nadenken heet een impulsaankoop.",
            nogSimpeler: "Impuls.",
          },
        },
      },
      {
        q: "Je wilt een skateboard van **€48**. Je spaart **€4 per week**. Hoeveel weken moet je sparen?",
        options: ["12 weken", "44 weken", "52 weken", "16 weken"],
        answer: 0,
        wrongHints: [null, "Moet je hier aftrekken of delen?", "Moet je hier optellen of delen?", "Hoeveel is 16 × €4? Is dat €48?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Spaarplan",
              tekst: "Een spaarplan: 1) wat wil je, 2) hoeveel spaar je per week, 3) hoe lang duurt het.",
            },
            {
              titel: "Rekenen",
              tekst: "Je deelt de prijs door wat je per week spaart: €48 ÷ €4.",
            },
            {
              titel: "Antwoord",
              tekst: "€48 ÷ €4 = **12** weken. Controle: 12 × €4 = €48.",
            },
          ],
          woorden: [
            {
              woord: "spaarplan",
              uitleg: "Plan hoe je voor iets spaart.",
            },
            {
              woord: "delen",
              uitleg: "Uitrekenen hoe vaak iets in een getal past.",
            },
          ],
          theorie: "Hoe lang sparen? Prijs ÷ bedrag per week = aantal weken.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Een bal van €20 en je spaart €5 per week: €20 ÷ €5 = 4 weken.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Controleer met keer: weken × bedrag per week = prijs.",
            },
          ],
          niveaus: {
            basis: "12 weken.",
            simpeler: "€48 ÷ €4 = 12.",
            nogSimpeler: "12.",
          },
        },
      },
    ],
  },

  // STAP 4: Begroten
  {
    title: "Begroten — de 50/30/20-regel",
    explanation:
      "**Begroten** = vooraf bedenken hoeveel je waar aan uitgeeft.\n\n**De 50/30/20-regel** *(uit het hoofd!)*:\nVerdeel je geld in **3 groepen**:\n\n**50% — NODIG** *(must-have)* 🍞\n• Eten + drinken.\n• Schoolspullen.\n• Reisgeld *(bus, fiets)*.\n• Kleding *(basis)*.\n• Telefoon-abonnement.\n\n**30% — LEUK** *(want-to-have)* 🎮\n• Uitstapjes.\n• Bioscoop, pretpark.\n• Snoep, friet, ijs.\n• Spelletjes, games.\n• Extra kleding *(niet basis)*.\n\n**20% — SPAREN** 💰\n• Voor grote dingen later.\n• Noodgeval.\n• Toekomst.\n\n**Voorbeeld €100 zakgeld/maand**:\n• **NODIG**: €50 *(eten, school)*.\n• **LEUK**: €30 *(uitstapjes, snoep)*.\n• **SPAREN**: €20.\n\nHet werkt ook voor een later salaris:\n• **€2000 salaris**: €1000 nodig + €600 leuk + €400 sparen.\n\n**Belangrijk — flexibel**:\nVoor kinderen + tieners werkt het niet altijd zo strikt:\n• Soms is 'nodig' wat ouders betalen *(eten)* en is **alle zakgeld 'leuk + sparen'**.\n• Dan verdeel: **50% leuk + 50% sparen** of **30/70-spaar**.\n\n**Begroting voor 1 week**:\n```\nInkomsten:\n• Zakgeld: €5\n• Klusje hondje: €2\n• TOTAAL: €7\n\nUitgaven:\n• Snoep: €1\n• Bioscoop met vrienden: €3\n• Sparen: €3\n• TOTAAL: €7 ✓\n```\n\n**Tips voor begroten**:\n\n**1. Schrijf op**:\n• In schriftje, budget-app of Excel.\n• Per dag of week — wat in + wat uit.\n\n**2. Categoriseer**:\n• Eten + drinken.\n• Uitgaan.\n• Sparen.\n• Cadeaus *(verjaardagen)*.\n\n**3. Check eind van maand**:\n• Klopt je begroting?\n• Geld over? → meer sparen!\n• Tekort? → minder leuk uitgeven volgende maand.\n\n**Geldwijsheid-tips voor kinderen**:\n\n**1. Wachten loont**:\nWil je iets van €50 kopen? **Wacht 1 week**. Wil je het dan nog steeds? Koop het dan. Vaak zakt de wens.\n\n**2. Vergelijken**:\nHetzelfde spelletje bij AH, Hema, Bart Smit, online — kijk waar goedkoopst.\n\n**3. Spaar voor doel, niet 'gewoon'**:\nGericht sparen voor X is leuker dan 'oneindig sparen voor niets'.\n\n**4. Reclame is niet eerlijk**:\nReclame wil dat je koopt. **Niet alle 'aanbiedingen' zijn echt.**\n\n**5. Tweede-hands kan**:\nVintage kleding, gebruikte boeken, marktplaats-spullen — vaak veel goedkoper en oké kwaliteit.\n\n**toetsvragen**:\n*'Wat is de 50/30/20-regel?'* → 50% nodig, 30% leuk, 20% sparen.\n*'Begroting — wat houden bij?'* → inkomsten + uitgaven per categorie.\n*'Hoe wachten met kopen?'* → 1 week wachten, wil je het dan nog?",
    svg: begrotingSvg(),
    checks: [
      {
        q: "Wat is de **50/30/20-regel**?",
        options: ["50% nodig, 30% leuk, 20% sparen", "50% sparen, 30% leuk, 20% nodig", "50% nodig, 30% sparen, 20% leuk", "50% leuk, 30% sparen, 20% nodig"],
        answer: 0,
        wrongHints: [null, "Moet het grootste deel naar sparen, of naar wat je echt nodig hebt?", "Kijk naar de 30 en de 20: welke hoort bij leuk, welke bij sparen?", "Welk deel moet het grootst zijn: wat je écht nodig hebt of wat leuk is?"],
      },
      {
        q: "Bij **€100 zakgeld** met 50/30/20 — hoeveel sparen?",
        options: ["€20", "€50", "€30", "€100"],
        answer: 0,
        wrongHints: [null, "Welk getal uit 50/30/20 hoort bij sparen? Reken dat deel van €100 uit.", "Kijk nog eens welk getal bij sparen hoort.", "Volgens de regel spaar je maar een deel van je geld."],
      },
      {
        q: "Wat betekent de geldtip **'wachten'**?",
        options: ["1 week wachten — wil je het dan nog?", "Wachten met sparen tot je ouder bent", "Snel kopen — straks is het uitverkocht", "Wachten tot een vriend het ook heeft"],
        answer: 0,
        wrongHints: [null, "Bij deze tip gaat het niet om sparen, maar om kopen.", "Dat is juist het tegenovergestelde van wachten.", "Waar wacht je eigenlijk op als je slim met geld bent?"],
      },
      {
        q: "Wat hoort bij de groep **'NODIG'**?",
        options: ["Eten + schoolspullen", "Snoep + bioscoop", "Merkkleding + games", "Spaargeld voor een fiets"],
        answer: 0,
        wrongHints: [null, "Dat is 'leuk'.", "Kun je zonder merkkleding en games?", "Dat hoort bij sparen, de derde groep."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Deze week krijg je **€8**. Je geeft €2 uit aan snoep en €3 aan een uitje. De rest spaar je. Hoeveel spaar je?",
        options: ["€3", "€5", "€13", "€2"],
        answer: 0,
        wrongHints: [null, "Is dat wat je uitgeeft of wat overblijft?", "Moet je optellen, of geld eraf halen?", "Dat geef je aan snoep uit. Wat blijft er over?"],
      },
      {
        q: "In welke groep van de 50/30/20-regel hoort een **busabonnement** om naar school te reizen?",
        options: ["NODIG", "LEUK", "SPAREN", "LENEN"],
        answer: 0,
        wrongHints: [null, "Kun je zonder, of moet je er elke dag mee naar school?", "Spaar je met een busabonnement, of geef je het uit?", "Hoort dit bij de drie groepen?"],
      },
      {
        q: "Welke uitgave hoort bij **LEUK**?",
        options: [
          "Een ijsje op het strand",
          "Brood voor je lunch",
          "Een schrift voor school",
          "Een fietsband voor je schoolfiets",
        ],
        answer: 0,
        wrongHints: [null, "Heb je dit nodig om te eten?", "Heb je een schrift nodig voor school?", "Kun je zonder fietsband naar school fietsen?"],
      },
      {
        q: "Aan het eind van de maand heb je een **tekort**. Wat doe je volgende maand?",
        options: [
          "Minder uitgeven aan leuke dingen",
          "Geld lenen van een vriend",
          "Alleen nog met je pinpas betalen",
          "Je begroting niet meer bijhouden",
        ],
        answer: 0,
        wrongHints: [null, "Dan moet je het later terugbetalen. Wordt je tekort dan kleiner?", "Met een pinpas betaal je net zo goed. Geef je dan minder uit?", "Weet je dan nog waar je geld blijft?"],
      },
      {
        q: "Waarom kan **tweedehands** kopen slim zijn?",
        options: [
          "Het is vaak veel goedkoper",
          "Je krijgt er vaak garantie bij",
          "Het is vaak nog gloednieuw",
          "Het is vaak sterker dan nieuw",
        ],
        answer: 0,
        wrongHints: [null, "Koop je iets van een ander, dan krijg je meestal géén garantie. Wat is dan wél het voordeel?", "Tweedehands betekent: iemand anders heeft het al gebruikt.", "Wordt iets sterker als het al gebruikt is?"],
      },
    ],
  },

  // STAP 5: Lenen + reclame
  {
    title: "Lenen + reclame-trucs",
    explanation:
      "**Lenen** = geld krijgen dat je later moet **terugbetalen**.\n\n**Waarom lenen?**\n• Voor **groot iets** dat je nu niet kunt betalen *(auto, huis)*.\n• Maar: lenen **kost geld** *(rente)*.\n• Daarom: **alleen lenen voor lange-termijn nodige dingen**.\n\n**Soorten lenen** *(voor volwassenen — kinderen lenen meestal niet)*:\n\n**1. Persoonlijke lening** 💵\n• Vast bedrag *(bv. €5.000)*.\n• Vaste rente.\n• Vaste looptijd *(2-5 jaar)*.\n• Voor: auto, verbouwing.\n\n**2. Hypotheek** 🏠\n• Lening voor **huis**.\n• Looptijd 20-30 jaar.\n• Huis = **onderpand** *(kun je niet betalen → bank pakt huis)*.\n\n**3. Krediet / rood staan** 💳\n• Op de bank **negatief**.\n• Heel duur — 10-15% rente.\n• **Vermijden**.\n\n**4. Studielening (DUO)** 📚\n• Voor universiteit / hbo.\n• Lage rente.\n• Terugbetalen na afstuderen.\n\n**Pas op — verleidingen**:\n\n**A. 'Koop nu, betaal later' (BNPL)**:\n• Klarna, Afterpay, Riverty, Tinka.\n• 14-30 dagen om te betalen — lijkt fijn.\n• Maar: te laat = boete + rente.\n• Veel jongeren komen in schulden door BNPL.\n• Eigenlijk **gewoon lenen**, vermomd als 'gratis'.\n\n**B. Reclame voor 'kleine leningen'**:\n• 'Snel €500 op je rekening!'\n• Hoge rente *(soms 15-20% per jaar)*.\n• Voor noodgevallen → wegblijven.\n\n**C. Credit cards**:\n• In NL minder gebruikt dan VS.\n• Als je niet maandelijks betaalt → hoge rente.\n\n**Reclame-trucs herkennen** *(voor kinderen + volwassenen)*:\n\n**1. 'Vandaag korting!'**\n• Vaak nep-druk — geen echte korting.\n• Vergelijk prijs met andere winkels.\n\n**2. 'Iedereen heeft 't'**\n• Druk om bij groep te horen.\n• Niet altijd waar.\n\n**3. 'Speciaal voor jou!'**\n• Niet echt voor jou — iedereen krijgt dezelfde 'persoonlijke' mail.\n\n**4. Influencers + sociale media**\n• Krijgen geld om iets aan te prijzen.\n• Niet hun echte mening.\n\n**5. Gratis = niet altijd gratis**\n• Gratis app vraagt later om premium.\n• Gratis proefles = abonnement opzeggen lastig.\n\n**6. Verlies-aversie**\n• 'Mis dit aanbod niet!'\n• Mensen kopen om verlies te voorkomen, niet omdat ze willen.\n\n**Schulden vermijden**:\n• **Niet lenen** voor 'leuke dingen' *(reis, nieuwe telefoon)*.\n• **Eerst sparen**, dan kopen.\n• **Bij twijfel**: vraag ouders / volwassene om advies.\n• Bij echte problemen: **schuldhulpverlening** *(via je gemeente)*.\n\n**Tip — vragen om geld bij ouders**:\n• Eerlijk uitleggen waarvoor je het wilt.\n• Tonen dat je al iets gespaard hebt.\n• Voorstellen om iets terug te doen *(klusjes, deel zelf)*.\n\n**Toets-feitje**:\nVolgens NIBUD heeft **1 op 5 jongeren tussen 18-25** schulden, vaak door BNPL of slimme reclame. Daarom is **financiële educatie** belangrijk.\n\n**toetsvragen**:\n*'Wat is BNPL?'* → buy now pay later — uitgesteld betalen.\n*'Hoe schulden vermijden?'* → niet lenen voor 'leuke dingen', eerst sparen.\n*'Welke reclame-truc?'* → 'iedereen heeft 't' / 'mis dit niet!' / influencer-pushen.",
    checks: [
      {
        q: "Wat is **BNPL**?",
        options: ["Buy Now Pay Later — uitgesteld betalen", "Korting als je online iets bestelt", "Belasting op spullen uit het buitenland", "Spaarrekening speciaal voor kinderen"],
        answer: 0,
        wrongHints: [null, "Krijg je korting, of betaal je pas later?", "Geen belasting. Wanneer betaal je bij BNPL?", "Bij BNPL spaar je niet."],
      },
      {
        q: "Hoe voorkom je **schulden**?",
        options: ["Eerst sparen, dan kopen", "Kopen en later betalen", "Lenen bij een vriend", "Alleen kopen in de uitverkoop"],
        answer: 0,
        wrongHints: [null, "Als je later betaalt, heb je tot die tijd een schuld.", "Ook geld van een vriend moet je terugbetalen. Dat is ook een schuld.", "Ook in de uitverkoop kun je meer uitgeven dan je hebt."],
      },
      {
        q: "Welke zin is een **reclame-truc**?",
        options: ["'Iedereen heeft het al!'", "'Kijk eerst wat het kost.'", "'Vergelijk de prijzen.'", "'Spaar eerst voor je doel.'"],
        answer: 0,
        wrongHints: [null, "Zou een winkel dat zeggen als hij snel wil verkopen?", "Wie heeft er voordeel van als jij prijzen vergelijkt: jij of de winkel?", "Wil reclame dat je eerst gaat sparen?"],
      },
      {
        q: "Wat is een **hypotheek**?",
        options: ["Lening voor een huis", "Spaarrekening voor een huis", "Belasting op een huis", "Lening voor een auto"],
        answer: 0,
        wrongHints: [null, "Spaar je bij een hypotheek, of krijg je geld van de bank?", "Gaat een hypotheek naar de overheid, of naar de bank?", "Een lening voor een auto heet anders. Waarvoor is een hypotheek?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Waarom **kost** lenen geld?",
        options: [
          "Je betaalt rente over wat je leent",
          "Je krijgt rente van de bank",
          "Je betaalt belasting over wat je leent",
          "Je koopt er automatisch een verzekering bij",
        ],
        answer: 0,
        wrongHints: [null, "Krijg je rente bij lenen, of bij sparen?", "Gaat het extra geld naar de overheid of naar de bank?", "Moet dat? Wat vraagt de bank voor het uitlenen?"],
      },
      {
        q: "Wat betekent **rood staan** bij de bank?",
        options: ["Je hebt minder dan nul euro op je rekening", "Je hebt extra veel gespaard op je rekening", "Je pinpas is kapot en werkt niet meer", "Je hebt rente gekregen over je spaargeld"],
        answer: 0,
        wrongHints: [null, "Is rood staan iets goeds of iets wat je wilt vermijden?", "Heeft rood staan met je pasje te maken?", "Rente krijgen is fijn. Is rood staan fijn?"],
      },
      {
        q: "Waarom zijn influencers die een product aanprijzen **niet altijd eerlijk**?",
        options: [
          "Ze krijgen vaak geld om het aan te prijzen",
          "Ze mogen geen eigen mening hebben",
          "Ze weten niet hoe het product werkt",
          "Ze worden betaald door de overheid",
        ],
        answer: 0,
        wrongHints: [null, "Mag een influencer zeggen wat hij of zij vindt?", "Vaak weten ze dat wel. Wat krijgen ze ervoor?", "De overheid betaalt geen reclame voor producten. Wie dan wel?"],
      },
      {
        q: "Een winkel roept: **'Mis dit aanbod niet!'** Wat wil de winkel daarmee?",
        options: [
          "Dat je snel koopt uit angst iets te missen",
          "Dat je het aanbod aan je vrienden vertelt",
          "Dat je eerst prijzen gaat vergelijken",
          "Dat je een klantenkaart gaat aanvragen",
        ],
        answer: 0,
        wrongHints: [null, "Wat wil de winkel dat jíj doet, en hoe snel?", "Als je gaat vergelijken, koop je misschien ergens anders. Wil de winkel dat?", "Wat zou je volgens de winkel kunnen 'missen'?"],
      },
      {
        q: "Je krijgt een mail: **'Speciaal voor jou!'** Wat is meestal waar?",
        options: [
          "Heel veel mensen krijgen dezelfde mail",
          "Alleen jij krijgt deze mail",
          "Je krijgt echt een extra lage prijs",
          "Je hebt een prijs gewonnen",
        ],
        answer: 0,
        wrongHints: [null, "Hoeveel klanten heeft een winkel?", "Hoeveel mensen krijgen die 'speciale' prijs, denk je?", "Heb je ergens aan meegedaan? Waarom zou je dan gewonnen hebben?"],
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — geldwijsheid mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: geld-functies, zakgeld, sparen, begroten, lenen.\n\nVeel succes!",
    checks: [
      {
        q: "Hoeveel **landen** gebruiken de euro?",
        options: ["21", "5", "19", "15"],
        answer: 0,
        wrongHints: [null, "Dat is het aantal landen in de hele Europese Unie (EU). Doen die allemaal mee?", "Zoveel waren het een paar jaar geleden. Kwamen er sindsdien landen bij?", "Tel eens de buurlanden en vakantielanden die met de euro betalen. Dat zijn er meer."],
      },
      {
        q: "Je zet **€200** op de bank met **5% rente**. Hoeveel heb je na 1 jaar?",
        options: ["€210", "€205", "€220", "€250"],
        answer: 0,
        wrongHints: [null, "Dat is €5 rente erbij. Is 5% van €200 echt €5?", "Dat is 10% rente erbij. Hoeveel is 5% van €200?", "Dan zou je €50 rente krijgen. Hoeveel is 1% van €200?"],
      },
      {
        q: "Wat is **rente**?",
        options: ["Beloning voor sparen", "Betaling aan de overheid", "Korting bij de kassa", "Straf voor te laat betalen"],
        answer: 0,
        wrongHints: [null, "Dat is belasting.", "Dat is korting.", "Dat is een boete."],
      },
      {
        q: "**50/30/20** — wat is **30%** voor?",
        options: ["Leuk", "Nodig", "Sparen", "Belasting"],
        answer: 0,
        wrongHints: [null, "Zeg de regel eens op: 50 voor …, 30 voor …, 20 voor …. Welke groep hoort bij 30?", "Welk getal hoort bij sparen? Is dat 30?", "Belasting is geen groep in de 50/30/20-regel. Welke drie groepen zijn er?"],
      },
      {
        q: "Wat is **statiegeld**?",
        options: ["Geld terug bij flessen", "Rente op je spaargeld", "Geld lenen bij de winkel", "Belasting op frisdrank"],
        answer: 0,
        wrongHints: [null, "Heeft statiegeld met de bank te maken?", "Moet je statiegeld terugbetalen?", "Gaat statiegeld naar de overheid?"],
      },
      {
        q: "Hoe vermijd je **impulsaankopen**?",
        options: ["1 week wachten — wil je het dan nog?", "Snel kopen — voordat de aanbieding weg is", "Een klantenkaart nemen — dan krijg je punten", "Meer zakgeld vragen — dan kun je het betalen"],
        answer: 0,
        wrongHints: [null, "Snel kopen is juist kopen zonder na te denken.", "Met punten sparen ga je juist vaker kopen.", "Dan koop je het nog steeds zonder na te denken."],
      },
      { q: "**50/30/20** — wat is **50%** voor?", options: ["Nodig","Leuk","Sparen","Belasting"], answer: 0, wrongHints: [null, "Welk getal hoort bij leuke dingen? Is dat 50?", "Zeg de regel eens op: welke groep krijgt de helft?", "Belasting is geen groep in de 50/30/20-regel. Welke drie groepen zijn er?"] },
      { q: "**50/30/20** — wat is **20%** voor?", options: ["Sparen","Leuk","Nodig","Belasting"], answer: 0, wrongHints: [null, "Welk getal hoort bij leuke dingen? Is dat 20?", "Zeg de regel eens op: welke groep krijgt het kleinste deel?", "Belasting is geen groep in de 50/30/20-regel. Welke drie groepen zijn er?"] },
      { q: "Je krijgt **€10** zakgeld per week. Hoeveel krijg je in **4 weken**?", options: ["€40","€14","€10","€100"], answer: 0, wrongHints: [null, "Je hebt 10 + 4 gedaan. Moet je hier optellen?", "Dat is het zakgeld van één week.", "Je deed 10 × 10. Hoeveel weken zijn het?"] },
      { q: "Je spaart **€5** per week. Hoeveel heb je na **10 weken**?", options: ["€50","€5","€15","€100"], answer: 0, wrongHints: [null, "Dat spaar je in één week.", "Je hebt 5 + 10 gedaan. Moet je hier optellen?", "Je deed 10 × 10. Hoeveel spaar je per week?"] },
      { q: "Wat wil **reclame** vooral dat je doet?", options: ["Iets kopen","Iets nieuws leren","Geld opsparen","Prijzen vergelijken"], answer: 0, wrongHints: [null, "Soms leer je er iets van. Maar wat wil het bedrijf achter de reclame?", "Wil een winkel dat je je geld bewaart?", "Wil een winkel dat je bij een ander gaat kijken?"] },
      { q: "Wat doe je als je iets duurs wilt kopen?", options: ["Sparen tot je het zelf kunt betalen", "Lenen en in kleine stukjes terugbetalen", "Kopen met 'achteraf betalen'", "Je zakgeld maanden vooruit vragen"], answer: 0, wrongHints: [null, "Dan heb je een schuld, en vaak betaal je ook rente.", "Achteraf betalen is ook lenen. Dan heb je een schuld.", "Dan heb je de komende maanden niets. Is dat anders dan lenen?"] },
      { q: "Wat is **BNPL** (Buy Now Pay Later)?", options: ["Een vorm van lenen","Een soort spaarrekening","Een soort cadeaubon","Een soort korting"], answer: 0, wrongHints: [null, "Spaar je bij BNPL, of betaal je later?", "Een cadeaubon is al betaald. Wanneer betaal je bij BNPL?", "Wordt het goedkoper, of betaal je alleen later?"] },
      { q: "Welke 3 **functies** heeft geld?", options: ["Ruilen + rekenen + sparen","Ruilen + rekenen + lenen","Ruilen + sparen + lenen","Rekenen + sparen + lenen"], answer: 0, wrongHints: [null, "Kijk naar het laatste woord. Doet geld dat zelf, of doe jij dat bij de bank?", "Hoe vergelijk je twee prijzen met elkaar? Zit die functie in dit rijtje?", "Hoe betaal je in de winkel? Zit die functie in dit rijtje?"] },
      { q: "Wanneer ontstaan er **schulden**? Als je …", options: ["Niet terugbetaalt wat je leende", "Met je pinpas in de winkel betaalt", "Rente krijgt over je spaargeld", "Meer dan €100 in je spaarpot hebt"], answer: 0, wrongHints: [null, "Met een pinpas betaal je met geld dat al op je rekening staat.", "Rente krijgen is fijn: dan krijg je geld. Is dat een schuld?", "Geld in je spaarpot is van jou. Moet je dat aan iemand terugbetalen?"] },
      { q: "Hoe heet reclame die een influencer maakt?", options: ["Sponsored content / partnership", "Eerlijke mening / eigen review", "Gewoon filmpje / geen reclame", "Overheidsbericht / voorlichting"], answer: 0, wrongHints: [null, "Krijgt de influencer er iets voor? Dan is het niet zomaar een mening.", "Als een bedrijf betaalt, is het dan nog 'gewoon'?", "Wie betaalt de influencer: de overheid of een bedrijf?"] },
      { q: "Wat krijg je vaak als je geld op een spaarrekening laat staan?", options: ["Rente","Boete","Korting","Bonus"], answer: 0, wrongHints: [null,"Een boete krijg je als je iets fout doet. Is sparen fout?","Korting is bij kopen, niet bij sparen.","Een bonus is eenmalig; dit krijg je elk jaar opnieuw over je spaargeld."] },
      { q: "Wat is een **begroting**?", options: ["Plan voor inkomsten + uitgaven", "Lijst met alle boodschappen", "Reclame voor een nieuwe winkel", "Rekening bij een bank + pinpas"], answer: 0, wrongHints: [null, "Boodschappen zijn maar een deel. Wat hoort er nog meer bij?", "Heeft een begroting met reclame te maken?", "Daar bewaar je geld. Een begroting maak je zelf — wat staat erin?"] },
      { q: "Welke geldzaak is voor **kinderen** verstandig?", options: ["Een klein deel van je zakgeld sparen", "Al je zakgeld sparen en niets uitgeven", "Zakgeld vooruit vragen voor iets leuks", "Je geld bewaren zonder het bij te houden"], answer: 0, wrongHints: [null, "Dan leer je nooit kiezen hoe je geld uitgeeft. Is dat handig?", "Vooruit vragen is eigenlijk lenen. Wat heb je dan volgende week?", "Weet je dan nog hoeveel je hebt?"] },
      { q: "Op welk product zit **statiegeld** in Nederland?", options: ["Plastic flessen","Melkpakken","Glazen jampotten","Chipszakken"], answer: 0, wrongHints: [null, "Kijk eens op een pak melk: staat daar statiegeld op?", "Een lege jampot gooi je in de glasbak. Krijg je daar geld voor?", "Een lege chipszak gaat bij het plastic afval. Krijg je daar geld voor?"] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const financieleVormingPo = {
  id: "financiele-vorming-po",
  title: "Geldwijsheid + sparen (groep 6-8)",
  emoji: "💶",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Rekenen + leefwereld — financiële educatie",
  prerequisites: [
    { id: "geld-rekenen", title: "Geld rekenen", niveau: "po-1F" },
  ],
  intro:
    "Geldwijsheid voor groep 6-8 — 3 functies geld (ruil/reken/spaar), zakgeld + zelf verdienen, sparen + rente + samengestelde rente, 50/30/20-begrotingsregel, lenen + reclame-trucs (BNPL, influencers). ~15 min.",
  triggerKeywords: [
    "zakgeld", "sparen", "rente", "geldwijsheid",
    "begroten", "50/30/20",
    "lenen", "BNPL", "schulden",
    "reclame trucs",
  ],
  chapters,
  steps,
};

export default financieleVormingPo;
