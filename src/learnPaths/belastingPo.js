// Leerpad: Belasting — groep 6-8 PO.
// Onderdeel Toets-rekenen + leefwereld (financiële educatie). Referentieniveau 1F.
// 4 stappen met uitlegPad. Sluit op geld-rekenen + financiele-vorming-po.
//
// Dit pad is de "waarom betalen we samen?" + redactiesom-brug achter het
// Zookwartier-loonstrookje (bruto → belasting → netto) en het inkoop-bonnetje
// (btw zit in de prijs). Sommen blijven klein + rond — kwartier-belofte.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  bruto: "#42a5f5",
  belasting: "#ff7043",
  netto: "#66bb6a",
  highlight: "#ffd54f",
};

const stepEmojis = ["🏛️", "💼", "🧾", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is belasting?", emoji: "🏛️", from: 0, to: 0 },
  { letter: "B", title: "Belasting op je loon", emoji: "💼", from: 1, to: 1 },
  { letter: "C", title: "Btw in de winkelprijs", emoji: "🧾", from: 2, to: 2 },
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 3, to: 3 },
];

// Bruto → belasting eraf → netto, als 3 blokjes met een ronde som (€100 / 20%).
function loonSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.highlight}" font-size="13" font-family="Arial" font-weight="bold">Van brutoloon naar nettoloon</text>

<rect x="20" y="50" width="80" height="46" rx="6" fill="rgba(66,165,245,0.18)" stroke="${COLORS.bruto}" stroke-width="1.5"/>
<text x="60" y="70" text-anchor="middle" fill="${COLORS.bruto}" font-size="11" font-family="Arial" font-weight="bold">BRUTO</text>
<text x="60" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">€100</text>

<text x="115" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="18" font-family="Arial">−</text>

<rect x="130" y="50" width="80" height="46" rx="6" fill="rgba(255,112,67,0.18)" stroke="${COLORS.belasting}" stroke-width="1.5"/>
<text x="170" y="70" text-anchor="middle" fill="${COLORS.belasting}" font-size="11" font-family="Arial" font-weight="bold">BELASTING</text>
<text x="170" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">€20</text>

<text x="225" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="18" font-family="Arial">=</text>

<rect x="240" y="50" width="80" height="46" rx="6" fill="rgba(102,187,106,0.18)" stroke="${COLORS.netto}" stroke-width="1.5"/>
<text x="280" y="70" text-anchor="middle" fill="${COLORS.netto}" font-size="11" font-family="Arial" font-weight="bold">NETTO</text>
<text x="280" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">€80</text>

<text x="160" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">💡 20% van €100 = €20 belasting → je houdt €80 over</text>
<text x="160" y="158" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Netto = bruto − belasting</text>
</svg>`;
}

const steps = [
  // STAP A: Wat is belasting + waarom?
  {
    title: "Wat is belasting + waarom betalen we het?",
    explanation:
      "**Belasting** is geld dat je aan de **overheid** betaalt. Daarmee betalen we **samen** dingen die iedereen gebruikt.\n\n**Waar gaat belasting naartoe?** 🏛️\n• **Wegen** en fietspaden.\n• **Scholen** *(ook die van jou!)*.\n• **Ziekenhuizen** en de dokter.\n• **Brandweer** en **politie**.\n• Straatverlichting, parken, dijken die ons droog houden.\n\nZou niemand belasting betalen, dan was er geen geld voor deze dingen. **Samen betalen** = iedereen kan een dokter, school en veilige weg gebruiken.\n\n**Wie int de belasting?**\nDe **Belastingdienst** *(een dienst van de overheid)* zorgt dat de belasting binnenkomt. Waar het geld naartoe gaat, beslissen de regering en de Tweede Kamer.\n\n**Wie betaalt mee?**\nBijna iedereen die geld verdient of iets koopt. **Wie meer verdient, betaalt meestal meer** belasting. Zo dragen sterke schouders een grotere last.\n\n**Twee soorten belasting die jij al tegenkomt**:\n1. **Belasting op loon** — als je werkt, gaat er een stukje van je loon af *(volgende stap)*.\n2. **Btw** — als je iets koopt, zit er belasting in de prijs verstopt *(stap daarna)*.\n\n**toetsvragen**:\n*'Wat is belasting?'* → geld voor de overheid om samen dingen van te betalen.\n*'Waarvan betalen we belasting?'* → wegen, scholen, ziekenhuizen, politie.\n*'Wie int belasting?'* → de Belastingdienst.",
    svg: loonSvg(),
    checks: [
      {
        q: "Wat is **belasting**?",
        options: [
          "Geld dat je aan de overheid betaalt voor dingen die we samen gebruiken",
          "Geld dat de bank je cadeau geeft",
          "Korting die je in de winkel krijgt",
          "Geld dat je in je spaarpot stopt",
        ],
        answer: 0,
        wrongHints: [null, "Denk: krijg je het, of geef je het?", "Korting maakt iets goedkoper — gaat dit naar de overheid?", "Sparen is je eigen geld bewaren. Naar wie gaat belasting?"],
        uitlegPad: {
          stappen: [
            { titel: "Belasting = samen betalen", tekst: "Belasting is geld dat je aan de **overheid** geeft. Niet voor jezelf, maar om er **samen** dingen van te betalen die iedereen gebruikt." },
            { titel: "Waarvoor dan?", tekst: "Van belasting betalen we wegen, scholen, ziekenhuizen, de brandweer en de politie. Dingen die te duur zijn voor één persoon alleen." },
            { titel: "Waarom samen?", tekst: "Als iedereen een beetje meebetaalt, kan iedereen naar een veilige school, over een goede weg en naar de dokter. Dat lukt niet als niemand betaalt." },
          ],
          woorden: [
            { woord: "belasting", uitleg: "Geld dat je aan de overheid betaalt." },
            { woord: "overheid", uitleg: "Het bestuur van het land (regering, gemeente)." },
          ],
          theorie: "Toets-kern: belasting = geld voor de overheid om er gezamenlijke dingen van te betalen (wegen, scholen, zorg, veiligheid). Het is geen cadeau en geen korting — het gaat juist van jou áf naar de overheid.",
          voorbeelden: [
            { type: "stap", tekst: "Jouw school heeft een gebouw, juffen en boeken nodig. Dat wordt grotendeels van belasting betaald." },
            { type: "stap", tekst: "De brandweer komt gratis als er brand is — omdat we die samen via belasting betalen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Belasting gaat van jou náár de overheid. Cadeau/korting/sparen gaan juist niet naar de overheid." }],
          niveaus: {
            basis: "Belasting = geld voor de overheid om er samen dingen van te betalen.",
            simpeler: "Je betaalt een beetje aan de overheid. Daarvan komen wegen, scholen en ziekenhuizen.",
            nogSimpeler: "Samen betalen voor wegen en scholen.",
          },
        },
      },
      {
        q: "Waarvan betalen we onder andere **belasting**?",
        options: ["Wegen, scholen en ziekenhuizen", "Snoep en speelgoed van jezelf", "Je eigen verjaardagscadeau", "De vakantie van de buurman"],
        answer: 0,
        wrongHints: [null, "Dat koop je zelf met je eigen geld — is dat 'samen'?", "Een cadeau is voor één persoon. Belasting is voor iedereen samen.", "Belasting is voor dingen die we állemaal gebruiken."],
      },
      {
        q: "Wie **int** de belasting in Nederland?",
        options: ["De Belastingdienst", "De supermarkt", "De school", "De spaarpot"],
        answer: 0,
        wrongHints: [null, "Daar koop je boodschappen — int die belasting voor het hele land?", "Een school gebruikt belasting juist; int hij het ook?", "Daar bewaar je je eigen geld in."],
      },
      {
        q: "Wie betaalt **meestal méér** belasting?",
        options: ["Wie meer geld verdient", "Wie het jongst is", "Wie het verst weg woont", "Wie het langst is"],
        answer: 0,
        wrongHints: [null, "Leeftijd bepaalt niet hoeveel je verdient.", "Waar je woont verandert je loon niet.", "Lengte heeft niets met geld te maken."],
      },
      {
        q: "Welke van deze dingen wordt **niet** van belasting betaald?",
        options: ["Je eigen ijsje", "De brandweer", "Wegen en fietspaden", "Scholen"],
        answer: 0,
        wrongHints: [null, "De brandweer wordt juist wél van belasting betaald.", "Wegen worden wél van belasting betaald.", "Scholen worden wél van belasting betaald."],
        uitlegPad: {
          stappen: [
            { titel: "Belasting = samen betalen", tekst: "Belasting gaat naar dingen die iedereen gebruikt: scholen, wegen, ziekenhuizen, brandweer. Een ijsje koop je voor jezelf — dat betaal je uit eigen zak." },
          ],
          niveaus: {
            basis: "Belasting dekt gezamenlijke voorzieningen, niet persoonlijke aankopen.",
            simpeler: "Scholen, wegen en de brandweer zijn voor iedereen. Een ijsje is voor jou alleen.",
            nogSimpeler: "Je eigen ijsje.",
          },
        },
      },
      {
        q: "Betaal je belasting **alleen** als je werkt?",
        options: ["Nee, ook als je iets koopt (btw)", "Ja, alleen wie werkt betaalt belasting", "Nee, belasting bestaat niet in Nederland", "Ja, maar alleen voor volwassenen"],
        answer: 0,
        wrongHints: [null, "Denk aan de prijs in de winkel — zit daar ook belasting in?", "Belasting bestaat wel degelijk — van wegen tot scholen.", "Kinderen betalen btw mee als ze iets kopen in de winkel."],
        uitlegPad: {
          stappen: [
            { titel: "Twee soorten", tekst: "Loonbelasting betaal je als je werkt. Btw betaal je als je iets koopt — al van jongs af aan." },
          ],
          niveaus: {
            basis: "Er zijn meerdere soorten belasting: loonbelasting (als je werkt) en btw (als je iets koopt).",
            simpeler: "Als je snoep koopt zit er al btw in de prijs. Dat is ook belasting.",
            nogSimpeler: "Nee, ook bij aankopen.",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wie **beslist** waar het belastinggeld naartoe gaat?",
        options: [
          "De regering en de Tweede Kamer",
          "De Belastingdienst en de banken",
          "De winkels en de supermarkten",
          "De werkgevers en de banken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Die dienst zorgt dat het geld binnenkomt. Beslist hij ook waar het heen gaat?",
          null,
          "Een werkgever haalt belasting van het loon. Beslist hij waar het geld heen gaat?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Binnenhalen en beslissen",
              tekst: "Het **binnenhalen** van belasting en het **beslissen** waar het geld heen gaat, zijn twee verschillende taken.",
            },
            {
              titel: "Wie haalt het binnen?",
              tekst: "De **Belastingdienst** zorgt dat de belasting binnenkomt.",
            },
            {
              titel: "Wie beslist?",
              tekst: "De **regering** en de **Tweede Kamer** beslissen waar het geld naartoe gaat: naar wegen, scholen, ziekenhuizen en meer.",
            },
          ],
          woorden: [
            {
              woord: "regering",
              uitleg: "De ministers die het land besturen.",
            },
            {
              woord: "Tweede Kamer",
              uitleg: "Gekozen mensen die samen beslissen over de wetten en het geld van het land.",
            },
          ],
          theorie: "Toets-kern: de Belastingdienst int de belasting (haalt het binnen). De regering en de Tweede Kamer beslissen waar het geld aan wordt uitgegeven.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "De Belastingdienst haalt het geld binnen, zoals een kassa.",
            },
            {
              type: "stap",
              tekst: "De regering en de Tweede Kamer kiezen: hoeveel geld gaat naar scholen, hoeveel naar wegen?",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Belastingdienst = binnenhalen. Regering + Tweede Kamer = beslissen waar het heen gaat.",
            },
          ],
          niveaus: {
            basis: "De regering en de Tweede Kamer beslissen waar het belastinggeld naartoe gaat.",
            simpeler: "De Belastingdienst haalt het geld op. De regering en de Tweede Kamer kiezen wat ermee gebeurt.",
            nogSimpeler: "Regering en Tweede Kamer kiezen.",
          },
        },
      },
      {
        q: "Stel: **niemand** betaalt nog belasting. Wat gebeurt er dan?",
        options: [
          "Er is geen geld meer voor scholen en wegen",
          "Alles in de winkel wordt dan gratis",
          "Iedereen krijgt meer zakgeld van de overheid",
          "Er komen veel meer ziekenhuizen bij",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Wie betaalt de winkel dan voor zijn spullen?",
          null,
          "Waarvan worden ziekenhuizen eigenlijk betaald?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Belasting = de pot van iedereen",
              tekst: "Iedereen betaalt een beetje belasting. Zo komt er een grote pot geld bij de overheid.",
            },
            {
              titel: "Uit die pot betalen we samen",
              tekst: "Uit die pot komen scholen, wegen, ziekenhuizen, de brandweer en de politie.",
            },
            {
              titel: "Geen belasting = lege pot",
              tekst: "Betaalt niemand meer, dan blijft de pot leeg. Dan is er geen geld meer voor die dingen.",
            },
          ],
          woorden: [
            {
              woord: "belasting",
              uitleg: "Geld dat je aan de overheid betaalt.",
            },
            {
              woord: "overheid",
              uitleg: "Het bestuur van het land (regering, gemeente).",
            },
          ],
          theorie: "Toets-kern: zonder belasting heeft de overheid geen geld voor dingen die we samen gebruiken, zoals scholen, wegen en ziekenhuizen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Geen belasting → geen geld voor de juf en het schoolgebouw.",
            },
            {
              type: "stap",
              tekst: "Geen belasting → geen geld om kapotte wegen te maken.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Belasting is het geld waarmee we samen betalen. Valt het weg, dan valt ook dat 'samen betalen' weg.",
            },
          ],
          niveaus: {
            basis: "Zonder belasting is er geen geld voor scholen, wegen en ziekenhuizen.",
            simpeler: "Belasting vult de pot van de overheid. Lege pot = geen geld voor scholen en wegen.",
            nogSimpeler: "Geen belasting, geen school en geen weg.",
          },
        },
      },
      {
        q: "Welke **twee soorten** belasting kom jij nu al tegen?",
        options: ["Belasting op loon en btw", "Btw en zakgeld", "Korting en rente", "Loon en spaargeld"],
        answer: 0,
        wrongHints: [
          null,
          "Zakgeld krijg je. Is dat belasting?",
          null,
          "Loon verdien je en spaargeld bewaar je. Gaat dat naar de overheid?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Soort 1: op je loon",
              tekst: "Wie werkt, krijgt **loon**. Daar gaat eerst een stukje **belasting** af.",
            },
            {
              titel: "Soort 2: btw",
              tekst: "Koop je iets, dan zit er **btw** in de prijs. Dat is ook belasting.",
            },
            {
              titel: "Allebei naar de overheid",
              tekst: "Beide soorten gaan naar de overheid. Daarvan betalen we samen wegen en scholen.",
            },
          ],
          woorden: [
            {
              woord: "loon",
              uitleg: "Geld dat je verdient met werken.",
            },
            {
              woord: "btw",
              uitleg: "Belasting die in de prijs zit van wat je koopt.",
            },
          ],
          theorie: "Toets-kern: twee soorten belasting zijn belasting op loon (als je werkt) en btw (als je iets koopt). Korting, rente, zakgeld en spaargeld zijn geen belasting.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Mama of papa werkt → er gaat belasting van het loon af.",
            },
            {
              type: "stap",
              tekst: "Jij koopt een schrift → in de prijs zit btw.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Belasting gaat altijd van jou náár de overheid. Geld dat je krijgt (zakgeld, rente) is dus geen belasting.",
            },
          ],
          niveaus: {
            basis: "Twee soorten belasting: belasting op loon en btw in de prijs.",
            simpeler: "Werk je, dan betaal je belasting op je loon. Koop je iets, dan betaal je btw.",
            nogSimpeler: "Loon-belasting en btw.",
          },
        },
      },
    ],
  },

  // STAP B: Belasting op je loon — bruto → netto (redactiesom)
  {
    title: "Belasting op je loon — van bruto naar netto",
    explanation:
      "Als je later **werkt**, verdien je **loon**. Maar je krijgt niet alles in je hand: er gaat eerst **belasting** af.\n\n**Drie woorden** *(uit het hoofd!)*:\n• **Brutoloon** 💼 = je héle loon, vóórdat er iets af gaat.\n• **Belasting** = het stukje dat naar de overheid gaat.\n• **Nettoloon** 💰 = wat je **overhoudt** en echt krijgt.\n\n**De som**:\n> **Netto = bruto − belasting**\n\n**Voorbeeld**:\n• Brutoloon: **€100**.\n• Belasting: **€20**.\n• Netto: €100 − €20 = **€80**.\n\nJe baas *(de werkgever)* haalt de belasting er al **vanaf voordat** jij je loon krijgt. Je hoeft het dus niet zelf te regelen.\n\n**Rekenen met procenten** *(%)*:\nVaak is de belasting een **percentage** van je loon. Bijvoorbeeld **20%**:\n• 20% van €100 = €20 *(truc: bij €100 is het percentage gelijk aan het bedrag)*.\n• 10% van €100 = €10, dus 20% = 2 × €10 = €20.\n• Netto = €100 − €20 = €80.\n\n**Op je loonstrookje** *(papiertje van je werk)* zie je deze drie regels netjes onder elkaar: bruto, belasting eraf, netto in je spaarpot.\n\n**toetsvragen**:\n*'Wat is netto?'* → wat je overhoudt nadat de belasting eraf is.\n*'Bruto €100, belasting €20 — netto?'* → €80.\n*'Wie haalt de belasting van je loon?'* → je werkgever, voordat je het krijgt.",
    svg: loonSvg(),
    checks: [
      {
        q: "Wat betekent **nettoloon**?",
        options: ["Wat je overhoudt nadat de belasting eraf is", "Je hele loon vóór de belasting", "De belasting zelf", "Een bonus bovenop je loon"],
        answer: 0,
        wrongHints: [null, "Dat is juist het bruto — vóór er iets af gaat.", "Netto is wat je houdt, niet wat je betaalt.", "Netto komt er niet bij, er gaat juist iets áf."],
        uitlegPad: {
          stappen: [
            { titel: "Drie woorden op een rij", tekst: "**Bruto** = je hele loon. **Belasting** = wat eraf gaat. **Netto** = wat je overhoudt." },
            { titel: "Netto is het laatste blokje", tekst: "Je begint bij bruto, trekt de belasting eraf, en wat dan overblijft is je netto. Dat komt echt in je portemonnee." },
            { titel: "De som", tekst: "Netto = bruto − belasting. Bij €100 bruto en €20 belasting: €100 − €20 = €80 netto." },
          ],
          woorden: [
            { woord: "brutoloon", uitleg: "Je hele loon, vóór de belasting." },
            { woord: "nettoloon", uitleg: "Wat je overhoudt, ná de belasting." },
          ],
          theorie: "Toets-truc: NETto = wat NET overblijft. BRUto is het BRok dat je nog moet 'opsplitsen' in belasting + netto.",
          voorbeelden: [
            { type: "stap", tekst: "Bruto €50, belasting €10 → netto €40." },
            { type: "stap", tekst: "Bruto €200, belasting €40 → netto €160." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bruto = alles. Netto = wat overblijft. Het verschil is de belasting." }],
          niveaus: {
            basis: "Netto = wat je overhoudt nadat de belasting eraf is.",
            simpeler: "Eerst bruto, dan belasting eraf, en wat overblijft is netto.",
            nogSimpeler: "Wat je echt krijgt.",
          },
        },
      },
      {
        q: "Brutoloon **€100**, belasting **€20**. Hoeveel is je **netto**?",
        options: ["€80", "€120", "€20", "€100"],
        answer: 0,
        wrongHints: [null, "Belasting komt er niet bij, hij gaat er juist áf.", "Dat is alleen de belasting, niet wat je overhoudt.", "Bij bruto is er nog niets afgehaald."],
        uitlegPad: {
          stappen: [
            { titel: "Welke som?", tekst: "Netto = bruto − belasting. Je trekt de belasting van je hele loon af." },
            { titel: "Vul in", tekst: "Bruto = €100. Belasting = €20. Dus: €100 − €20." },
            { titel: "Reken uit", tekst: "€100 − €20 = **€80**. Dat is je nettoloon: het bedrag dat je echt krijgt." },
          ],
          woorden: [
            { woord: "aftrekken", uitleg: "Iets eraf halen (het min-teken −)." },
          ],
          theorie: "Toets-valkuil: niet optellen! De belasting gaat van je loon ÁF. €100 + €20 = €120 is fout. Het is €100 − €20 = €80.",
          voorbeelden: [
            { type: "stap", tekst: "Bruto €30, belasting €6 → €30 − €6 = €24 netto." },
            { type: "stap", tekst: "Bruto €1000, belasting €200 → €1000 − €200 = €800 netto." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Netto is altijd KLEINER dan bruto. Kom je op een groter getal uit? Dan heb je opgeteld in plaats van afgetrokken." }],
          niveaus: {
            basis: "€80 (€100 − €20).",
            simpeler: "Trek de belasting eraf: €100 − €20 = €80.",
            nogSimpeler: "€80",
          },
        },
      },
      {
        q: "Hoeveel is **20%** belasting van een brutoloon van **€1000**?",
        options: ["€200", "€20", "€800", "€2000"],
        answer: 0,
        wrongHints: [null, "Dat is 20% van €100, niet van €1000.", "Dat is juist wat je overhoudt, niet de belasting.", "Belasting is maar een stukje, niet meer dan je loon."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is 20%?", tekst: "20% betekent 20 van elke 100. Een vijfde deel van het geheel." },
            { titel: "Eerst 10%", tekst: "10% van €1000 is makkelijk: streep één nul weg → €100. (10% = een tiende.)" },
            { titel: "Dan 20%", tekst: "20% = 2 × 10% = 2 × €100 = **€200** belasting." },
          ],
          woorden: [
            { woord: "procent (%)", uitleg: "Zoveel per honderd. 20% = 20 per 100." },
          ],
          theorie: "Toets-truc procenten: reken eerst 10% uit (één nul wegstrepen of delen door 10). Daarna keer zoveel als nodig. 20% = 2 × 10%, 30% = 3 × 10%.",
          voorbeelden: [
            { type: "stap", tekst: "10% van €1000 = €100, dus 20% = €200." },
            { type: "stap", tekst: "Controle: netto = €1000 − €200 = €800. Klopt: €800 + €200 = €1000." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "10% = delen door 10. Daarna keer het aantal tientallen-procenten." }],
          niveaus: {
            basis: "€200 (20% van €1000).",
            simpeler: "10% van €1000 = €100. 20% = 2 × €100 = €200.",
            nogSimpeler: "€200",
          },
        },
      },
      {
        q: "Wie haalt de **belasting van je loon** af?",
        options: ["Je werkgever, vóórdat je het loon krijgt", "Jij zelf, aan het eind van het jaar", "De supermarkt bij de kassa", "Niemand — loon is altijd netto"],
        answer: 0,
        wrongHints: [null, "Handig toch, dat het al voor je geregeld is?", "Bij de kassa betaal je btw, niet de belasting over je loon.", "Er gaat juist wél iets af voor je het krijgt."],
      },
      {
        q: "Brutoloon **€200**, belasting **€50**. Hoeveel is het **nettoloon**?",
        options: ["€150", "€250", "€50", "€200"],
        answer: 0,
        wrongHints: [null, "Belasting komt er niet bij — die gaat er juist áf.", "Dat is alleen de belasting, niet het nettoloon.", "Bij bruto is er nog niets afgehaald — trek de belasting eraf."],
        uitlegPad: {
          stappen: [
            { titel: "Netto = bruto − belasting", tekst: "€200 − €50 = **€150** netto." },
          ],
          niveaus: {
            basis: "€150 (€200 − €50).",
            simpeler: "Trek de belasting van het brutoloon af: €200 − €50 = €150.",
            nogSimpeler: "€150",
          },
        },
      },
      {
        q: "Hoeveel is **10%** belasting van een brutoloon van **€300**?",
        options: ["€30", "€3", "€270", "€300"],
        answer: 0,
        wrongHints: [null, "Dat is 10% van €30, niet van €300.", "Dat is wat je overhoudt, niet de belasting zelf.", "Dat is het hele brutoloon, niet de belasting erover."],
        uitlegPad: {
          stappen: [
            { titel: "10% van €300", tekst: "10% = een tiende. €300 ÷ 10 = **€30**." },
          ],
          niveaus: {
            basis: "€30 (10% van €300 = €300 ÷ 10).",
            simpeler: "Streep één nul weg: 300 → 30.",
            nogSimpeler: "€30",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Brutoloon **€400**, belasting **€90**. Hoeveel is het **nettoloon**?",
        options: ["€310", "€490", "€290", "€400"],
        answer: 0,
        wrongHints: [
          null,
          "Komt de belasting erbij, of gaat hij eraf?",
          "Reken nog eens rustig: €400 − €90.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Drie woorden op een rij",
              tekst: "**Bruto** = je hele loon. **Belasting** = wat eraf gaat. **Netto** = wat je overhoudt.",
            },
            {
              titel: "Netto is wat overblijft",
              tekst: "Je begint bij bruto, trekt de belasting eraf, en wat dan overblijft is je netto.",
            },
            {
              titel: "De som",
              tekst: "Netto = bruto − belasting.",
            },
          ],
          woorden: [
            {
              woord: "brutoloon",
              uitleg: "Je hele loon, vóór de belasting.",
            },
            {
              woord: "nettoloon",
              uitleg: "Wat je overhoudt, ná de belasting.",
            },
          ],
          theorie: "Toets-truc: belasting gaat er altijd áf. Netto is dus altijd kleiner dan bruto.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "€400 − €90: eerst €400 − €100 = €300, dan €10 terug erbij = €310.",
            },
            {
              type: "stap",
              tekst: "Bruto €400, belasting €90 → netto €310.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Bruto = alles. Netto = wat overblijft. Het verschil is de belasting.",
            },
          ],
          niveaus: {
            basis: "Netto = bruto − belasting = €400 − €90 = €310.",
            simpeler: "Je hele loon is €400. Er gaat €90 af. Je houdt €310 over.",
            nogSimpeler: "€400 − €90 = €310.",
          },
        },
      },
      {
        q: "Hoeveel is **20%** belasting van een brutoloon van **€500**?",
        options: ["€100", "€20", "€400", "€480"],
        answer: 0,
        wrongHints: [
          null,
          "Dat zou 20% van €100 zijn. Is het loon hier groter?",
          "Dat is wat je overhoudt, niet de belasting.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst 10%",
              tekst: "10% is een tiende deel. 10% van €500 = €500 : 10 = €50.",
            },
            {
              titel: "Dan 20%",
              tekst: "20% is twee keer zoveel als 10%. Dus 2 × €50 = €100.",
            },
            {
              titel: "Klaar",
              tekst: "De belasting is €100. (Netto zou dan €500 − €100 = €400 zijn.)",
            },
          ],
          woorden: [
            {
              woord: "procent (%)",
              uitleg: "Een deel van de honderd.",
            },
            {
              woord: "brutoloon",
              uitleg: "Je hele loon, vóór de belasting.",
            },
          ],
          theorie: "Toets-truc: reken eerst 10% uit (deel door 10), en maak daarna het percentage dat je nodig hebt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "10% van €500 = €50, dus 20% = €100.",
            },
            {
              type: "stap",
              tekst: "10% van €800 = €80, dus 20% = €160.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "10% = delen door 10. 20% = dat getal keer 2.",
            },
          ],
          niveaus: {
            basis: "20% van €500 = 2 × 10% = 2 × €50 = €100.",
            simpeler: "Een tiende van €500 is €50. Twee keer zoveel is €100.",
            nogSimpeler: "€50 + €50 = €100.",
          },
        },
      },
      {
        q: "Brutoloon **€600**. Er gaat **10%** belasting af. Hoeveel is het **nettoloon**?",
        options: ["€540", "€594", "€60", "€660"],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel is 10% van €600 precies? Reken het eerst los uit.",
          "Dat is de belasting. Wat hou je over?",
          "Gaat de belasting erbij of eraf?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: de belasting",
              tekst: "10% van €600 = €600 : 10 = €60.",
            },
            {
              titel: "Stap 2: eraf halen",
              tekst: "Netto = bruto − belasting = €600 − €60.",
            },
            {
              titel: "Stap 3: uitkomst",
              tekst: "€600 − €60 = €540. Dat krijg je echt.",
            },
          ],
          woorden: [
            {
              woord: "brutoloon",
              uitleg: "Je hele loon, vóór de belasting.",
            },
            {
              woord: "nettoloon",
              uitleg: "Wat je overhoudt, ná de belasting.",
            },
          ],
          theorie: "Toets-truc: bij een percentage reken je in twee stappen. Eerst de belasting uitrekenen, dan pas aftrekken van het bruto.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Bruto €100, 20% belasting → €20 eraf → netto €80.",
            },
            {
              type: "stap",
              tekst: "Bruto €600, 10% belasting → €60 eraf → netto €540.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eerst het stukje belasting uitrekenen, dan aftrekken. Niet het percentage zelf aftrekken!",
            },
          ],
          niveaus: {
            basis: "10% van €600 = €60. Netto = €600 − €60 = €540.",
            simpeler: "Eerst kijk je hoeveel belasting eraf gaat: €60. Dan haal je dat van €600 af.",
            nogSimpeler: "€600 − €60 = €540.",
          },
        },
      },
    ],
  },

  // STAP C: Btw — belasting in de winkelprijs (redactiesom)
  {
    title: "Btw — de belasting die in de prijs zit",
    explanation:
      "Belasting betaal je niet alleen over je loon. Ook als je iets **koopt** betaal je belasting: de **btw**.\n\n**Btw** *(belasting over de toegevoegde waarde)* zit al **in de prijs verstopt**. Je betaalt 'm automatisch mee bij de kassa. De winkel geeft dat stukje door aan de **Belastingdienst**.\n\n**Twee tarieven in Nederland**:\n• **9%** *(laag tarief)* — op **eten, drinken en boeken** 🍎📚.\n• **21%** *(hoog tarief)* — op bijna **al het andere** *(speelgoed, kleding, een telefoon)*.\n\n**Belangrijk**: het prijskaartje is de prijs **inclusief** btw. Je betaalt dus nooit méér dan wat op het kaartje staat — de btw zit er al in.\n\n**Voorbeeld** *(redactiesom)*:\n• Een boek kost **€10,90** *(dat is inclusief btw)*.\n• Daarvan is **€0,90** btw *(9%)*.\n• Voor het boek zelf blijft dan over: €10,90 − €0,90 = **€10**.\n\nZo zit in elke prijs een klein stukje belasting. Bij een park vol dieren in **Mijn Park** zie je dit terug op je **bonnetje**: de prijs van het dier + de btw die er al in zat.\n\n**Waarom btw?**\nNet als loonbelasting: van de btw betaalt de overheid **samen** de wegen, scholen en ziekenhuizen.\n\n**toetsvragen**:\n*'Wat is btw?'* → belasting die al in de winkelprijs zit.\n*'Welk tarief op eten?'* → 9% *(laag)*.\n*'Prijs €10,90, €0,90 btw — hoeveel voor het product zelf?'* → €10.",
    checks: [
      {
        q: "Wat is **btw**?",
        options: ["Belasting die al in de winkelprijs zit", "Korting bij de kassa", "Geld dat je terugkrijgt bij sparen", "Een soort spaarpot"],
        answer: 0,
        wrongHints: [null, "Korting maakt iets goedkoper; btw is juist belasting.", "Dat is rente — dat krijg je, btw betaal je.", "In een spaarpot bewaar je je eigen geld."],
        uitlegPad: {
          stappen: [
            { titel: "Btw zit in de prijs", tekst: "Btw is belasting die je betaalt als je iets koopt. Het zit al **in de prijs** verstopt — je ziet het niet apart op het prijskaartje." },
            { titel: "Je betaalt het mee", tekst: "Bij de kassa betaal je de prijs van het kaartje. Daar zit de btw al in. De winkel geeft dat stukje door aan de Belastingdienst." },
            { titel: "Twee tarieven", tekst: "9% op eten, drinken en boeken. 21% op bijna al het andere, zoals speelgoed en kleding." },
          ],
          woorden: [
            { woord: "btw", uitleg: "Belasting over de toegevoegde waarde — belasting in de verkoopprijs." },
            { woord: "inclusief", uitleg: "Er al in zit (de btw zit ín de prijs)." },
          ],
          theorie: "Toets-kern: btw is belasting in de prijs van wat je koopt. Het prijskaartje is altijd inclusief btw — je betaalt nooit extra bij de kassa.",
          voorbeelden: [
            { type: "stap", tekst: "Op een appel zit 9% btw. Op een step zit 21% btw." },
            { type: "stap", tekst: "Staat er €5 op het kaartje? Dan betaal je €5 — de btw zit er al in." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Loonbelasting gaat van je loon áf. Btw zit ín de prijs van wat je koopt. Beide gaan naar de overheid." }],
          niveaus: {
            basis: "Btw = belasting die al in de winkelprijs zit.",
            simpeler: "Als je iets koopt, betaal je belasting mee. Die zit in de prijs.",
            nogSimpeler: "Belasting in de prijs.",
          },
        },
      },
      {
        q: "Welk **btw-tarief** geldt voor **eten en drinken**?",
        options: ["9% (laag tarief)", "21% (hoog tarief)", "50%", "100%"],
        answer: 0,
        wrongHints: [null, "Dat hoge tarief is voor de meeste andere spullen.", "Zoveel belasting zou eten wel heel duur maken.", "Dan zou alles dubbel zo duur zijn — te veel."],
      },
      {
        q: "Een knuffel kost **€10**. Daarvan is **€1,74** btw. Hoeveel is voor de **knuffel zelf**?",
        options: ["€8,26", "€11,74", "€1,74", "€10"],
        answer: 0,
        wrongHints: [null, "De btw zit er al in — je telt hem er niet nóg eens bij.", "Dat is alleen de btw, niet de knuffel.", "Daar zit de btw nog in; haal die er eerst af."],
        uitlegPad: {
          stappen: [
            { titel: "De prijs bestaat uit 2 stukjes", tekst: "De €10 op het kaartje bestaat uit: de knuffel zelf + de btw. Samen €10." },
            { titel: "Welke som?", tekst: "Je weet het totaal (€10) en de btw (€1,74). De knuffel zelf = totaal − btw." },
            { titel: "Reken uit", tekst: "€10 − €1,74 = **€8,26** voor de knuffel zelf. Tel terug: €8,26 + €1,74 btw = €10. Klopt!" },
          ],
          woorden: [
            { woord: "totaalprijs", uitleg: "De prijs inclusief btw (wat op het kaartje staat)." },
          ],
          theorie: "Toets-valkuil: de btw zit AL in de prijs. Niet optellen (€10 + €1,74 = €11,74 is fout). Je haalt de btw er juist af om te zien wat het product zelf kost: €10 − €1,74 = €8,26.",
          voorbeelden: [
            { type: "stap", tekst: "Pen €12,10, btw €2,10 → pen zelf €10." },
            { type: "stap", tekst: "Boek €21,80, btw €1,80 → boek zelf €20." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Product zelf = totaalprijs − btw. Het antwoord is altijd kleiner dan de totaalprijs." }],
          niveaus: {
            basis: "€8,26 (€10 − €1,74 btw).",
            simpeler: "Haal de btw eraf: €10 − €1,74 = €8,26.",
            nogSimpeler: "€8,26",
          },
        },
      },
      {
        q: "In de prijs van bijna **alles wat je koopt** zit?",
        options: ["Een beetje btw", "Helemaal geen belasting", "Korting", "Rente"],
        answer: 0,
        wrongHints: [null, "Toch wel — bij bijna elke aankoop betaal je btw mee.", "Korting is een prijs die lager wordt, geen belasting.", "Rente krijg je bij sparen, niet bij kopen."],
      },
      {
        q: "Welk **btw-tarief** geldt voor een **stuk fruit** van €1,50?",
        options: ["Laag tarief van 9% — op eten", "Hoog tarief van 21% — op alles", "Geen btw — eten is vrijgesteld", "21% — speciaal tarief voor groente en fruit"],
        answer: 0,
        wrongHints: [null, "21% is het hoge tarief voor de meeste andere spullen, niet voor eten.", "Er zit wél btw op eten.", "Bestaat er wel een apart tarief voor fruit? Denk aan de twee tarieven."],
        uitlegPad: {
          stappen: [
            { titel: "Twee btw-tarieven", tekst: "9% (laag) op eten, drinken en boeken. 21% (hoog) op bijna al het andere." },
            { titel: "Fruit = eten", tekst: "Fruit is eten, dus het lage tarief van 9% geldt." },
          ],
          niveaus: {
            basis: "Eten: 9% btw (laag tarief). Al het andere: 21% (hoog).",
            simpeler: "Fruit is eten → 9%.",
            nogSimpeler: "9%",
          },
        },
      },
      {
        q: "Een speelgoeddoos kost **€25** inclusief btw. Daarvan is **€4,34** btw. Hoeveel kost het speelgoed **zelf**?",
        options: ["€20,66", "€29,34", "€4,34", "€25"],
        answer: 0,
        wrongHints: [null, "Je telt de btw erbij op — maar die zit er al in. Trek hem eraf.", "Dat is de btw, niet de prijs van het speelgoed.", "Daar zit de btw nog in; haal die er eerst af."],
        uitlegPad: {
          stappen: [
            { titel: "Prijs zelf = totaal − btw", tekst: "€25 − €4,34 = **€20,66** voor het speelgoed zelf." },
          ],
          niveaus: {
            basis: "€20,66 (€25 − €4,34).",
            simpeler: "Trek de btw van de totaalprijs af: 25 − 4,34 = 20,66.",
            nogSimpeler: "€20,66",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Op welk van deze dingen zit **21%** btw?",
        options: ["Een telefoon", "Een brood", "Een pak melk", "Een leesboek"],
        answer: 0,
        wrongHints: [
          null,
          "Brood is eten. Welk tarief hoort bij eten?",
          null,
          "Voor boeken geldt hetzelfde tarief als voor eten.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Btw zit in de prijs",
              tekst: "Btw is belasting die je betaalt als je iets koopt. Het zit al **in de prijs**.",
            },
            {
              titel: "Twee tarieven",
              tekst: "**9%** op eten, drinken en boeken. **21%** op bijna al het andere, zoals speelgoed, kleding en een telefoon.",
            },
            {
              titel: "Kijk wat het is",
              tekst: "Is het eten, drinken of een boek? Dan 9%. Anders meestal 21%.",
            },
          ],
          woorden: [
            {
              woord: "btw",
              uitleg: "Belasting over de toegevoegde waarde — belasting in de verkoopprijs.",
            },
            {
              woord: "tarief",
              uitleg: "Hoeveel procent belasting er geldt.",
            },
          ],
          theorie: "Toets-kern: 9% op eten, drinken en boeken; 21% op bijna al het andere. Een telefoon is geen eten, drinken of boek → 21%.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Brood, melk en een leesboek: 9%.",
            },
            {
              type: "stap",
              tekst: "Een telefoon, een trui en een bal: 21%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eten, drinken, boeken = laag (9%). Bijna de rest = hoog (21%).",
            },
          ],
          niveaus: {
            basis: "Een telefoon heeft 21% btw. Brood, melk en boeken hebben 9%.",
            simpeler: "Brood en melk zijn eten en drinken: 9%. Een boek ook: 9%. Een telefoon niet: 21%.",
            nogSimpeler: "Telefoon = 21%.",
          },
        },
      },
      {
        q: "Je koopt een **leesboek**. Welk btw-tarief zit in de prijs?",
        options: ["9%", "21%", "0%", "50%"],
        answer: 0,
        wrongHints: [
          null,
          "Dat hoge tarief is voor de meeste andere spullen. Hoort een boek daarbij?",
          null,
          "Dan zou de helft van de prijs belasting zijn. Klopt dat?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Btw zit in de prijs",
              tekst: "Btw is belasting die je betaalt als je iets koopt. Het zit al **in de prijs**.",
            },
            {
              titel: "Twee tarieven",
              tekst: "**9%** op eten, drinken en boeken. **21%** op bijna al het andere, zoals speelgoed, kleding en een telefoon.",
            },
            {
              titel: "Kijk wat het is",
              tekst: "Is het eten, drinken of een boek? Dan 9%. Anders meestal 21%.",
            },
          ],
          woorden: [
            {
              woord: "btw",
              uitleg: "Belasting over de toegevoegde waarde — belasting in de verkoopprijs.",
            },
            {
              woord: "tarief",
              uitleg: "Hoeveel procent belasting er geldt.",
            },
          ],
          theorie: "Toets-kern: voor boeken geldt het lage tarief van 9%, net als voor eten en drinken.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Een leesboek, een appel en een pak sap: 9%.",
            },
            {
              type: "stap",
              tekst: "Een spelletje, een jas en een step: 21%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eten, drinken, boeken = laag (9%). Bijna de rest = hoog (21%).",
            },
          ],
          niveaus: {
            basis: "Op een leesboek zit 9% btw (laag tarief).",
            simpeler: "Boeken horen bij het lage tarief, net als eten en drinken: 9%.",
            nogSimpeler: "Boek = 9%.",
          },
        },
      },
      {
        q: "Een pak sap kost **€3,27** inclusief btw. Daarvan is **€0,27** btw. Hoeveel kost het sap **zelf**?",
        options: ["€3,00", "€3,54", "€0,27", "€3,27"],
        answer: 0,
        wrongHints: [
          null,
          "De btw zit er al in — tel je hem er dan nog eens bij?",
          "Dat is alleen de btw, niet het sap.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Prijs = product + btw",
              tekst: "De prijs op het kaartje (€3,27) = de prijs van het sap zelf + de btw.",
            },
            {
              titel: "Btw eraf halen",
              tekst: "Wil je weten wat het sap zelf kost? Haal de btw eraf: €3,27 − €0,27.",
            },
            {
              titel: "Uitkomst",
              tekst: "€3,27 − €0,27 = €3,00. Dat is de prijs van het sap zelf.",
            },
          ],
          woorden: [
            {
              woord: "inclusief",
              uitleg: "Er al in zit (de btw zit ín de prijs).",
            },
            {
              woord: "btw",
              uitleg: "Belasting in de verkoopprijs.",
            },
          ],
          theorie: "Toets-kern: prijs inclusief btw − btw = prijs van het product zelf. Je trekt af, je telt niet op.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Boek €10,90 inclusief btw, €0,90 btw → boek zelf €10.",
            },
            {
              type: "stap",
              tekst: "Sap €3,27 inclusief btw, €0,27 btw → sap zelf €3,00.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zit de btw er al in? Dan haal je hem eraf om de prijs van het product zelf te vinden.",
            },
          ],
          niveaus: {
            basis: "Sap zelf = €3,27 − €0,27 = €3,00.",
            simpeler: "Het kaartje is sap + btw samen. Haal de btw (€0,27) eraf, dan hou je €3,00 over.",
            nogSimpeler: "€3,27 − €0,27 = €3,00.",
          },
        },
      },
      {
        q: "Wie geeft de btw die jij bij de kassa betaalt **door** aan de Belastingdienst?",
        options: ["De winkel", "Jij stuurt het zelf op", "De bank", "Je school"],
        answer: 0,
        wrongHints: [
          null,
          "Moet jij na het boodschappen doen nog iets opsturen?",
          null,
          "Waar heb je de btw eigenlijk betaald?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Je betaalt bij de kassa",
              tekst: "Je betaalt de prijs van het kaartje. Daar zit de btw al in.",
            },
            {
              titel: "De winkel houdt het even vast",
              tekst: "Het geld komt eerst bij de winkel terecht, ook het stukje btw.",
            },
            {
              titel: "De winkel geeft het door",
              tekst: "De winkel geeft dat stukje btw door aan de **Belastingdienst**. Jij hoeft niets zelf te regelen.",
            },
          ],
          woorden: [
            {
              woord: "btw",
              uitleg: "Belasting die in de prijs zit van wat je koopt.",
            },
            {
              woord: "Belastingdienst",
              uitleg: "De dienst van de overheid die zorgt dat de belasting binnenkomt.",
            },
          ],
          theorie: "Toets-kern: jij betaalt btw mee in de prijs; de winkel geeft dat stukje door aan de Belastingdienst.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Jij koopt een schrift → de winkel krijgt je geld → de winkel geeft de btw door.",
            },
            {
              type: "stap",
              tekst: "Net als bij loon: je werkgever regelt de belasting, jij hoeft niets op te sturen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Wie het geld van jou krijgt (de winkel), geeft de btw door.",
            },
          ],
          niveaus: {
            basis: "De winkel geeft de btw door aan de Belastingdienst.",
            simpeler: "Jij betaalt de winkel. De winkel stuurt het stukje btw naar de Belastingdienst.",
            nogSimpeler: "De winkel geeft het door.",
          },
        },
      },
    ],
  },

  // STAP D: Doorstroomtoets-mix
  {
    title: "Eindopdracht — belasting mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: wat is belasting, loon (bruto → netto) en btw in de prijs. Reken rustig en kijk goed of je moet **optellen of aftrekken**.\n\nVeel succes!",
    checks: [
      {
        q: "Belasting gebruiken we om **samen** te betalen voor?",
        options: ["Wegen, scholen en ziekenhuizen", "Jouw eigen snoep", "Een cadeau voor één kind", "Niets"],
        answer: 0,
        wrongHints: [null, "Dat koop je zelf — niet 'samen'.", "Een cadeau is voor één persoon.", "Er wordt juist veel mee betaald."],
      },
      {
        q: "Brutoloon **€50**, belasting **€10**. **Netto**?",
        options: ["€40", "€60", "€10", "€50"],
        answer: 0,
        wrongHints: [null, "De belasting gaat eráf, niet erbij.", "Dat is alleen de belasting.", "Bij bruto is nog niets afgehaald."],
      },
      {
        q: "Hoeveel is **10%** van **€200**?",
        options: ["€20", "€2", "€100", "€200"],
        answer: 0,
        wrongHints: [null, "Dat is 10% van €20, niet van €200.", "Dat is de helft (50%), niet 10%.", "Dat is het hele bedrag."],
      },
      {
        q: "Welk **btw-tarief** geldt voor de meeste spullen (speelgoed, kleding)?",
        options: ["21% (hoog tarief)", "9% (laag tarief)", "0%", "100%"],
        answer: 0,
        wrongHints: [null, "Dat lage tarief is juist voor eten en drinken.", "Er zit wél btw op, dus niet 0.", "Dat zou alles dubbel zo duur maken."],
      },
      {
        q: "Een bal kost **€20**, daarvan is **€3,47** btw. De bal **zelf**?",
        options: ["€16,53", "€23,47", "€3,47", "€20"],
        answer: 0,
        wrongHints: [null, "De btw zit er al in — niet nog eens optellen.", "Dat is alleen de btw.", "Daar zit de btw nog in."],
      },
      {
        q: "Welke **dienst van de overheid** zorgt dat de belasting binnenkomt?",
        options: ["De Belastingdienst", "De juf", "De winkel", "De spaarpot"],
        answer: 0,
        wrongHints: [null, "Een juf wordt juist van belasting betaald.", "De winkel geeft btw door, maar is geen dienst van de overheid.", "Daar bewaar je je eigen geld."],
      },
      {
        q: "Wat is **bruto**?",
        options: ["Je hele loon, vóór de belasting eraf gaat", "Wat je overhoudt", "De belasting zelf", "Een bonus"],
        answer: 0,
        wrongHints: [null, "Dat is netto — wat overblijft.", "Bruto is het geheel, niet alleen het afgehaalde stuk.", "Er gaat juist iets af, het komt er niet bij."],
      },
      {
        q: "Btw zit **in de prijs** — dus bij de kassa betaal je?",
        options: ["Precies de prijs van het kaartje", "Altijd nog extra erbovenop", "Minder dan het kaartje", "Niets"],
        answer: 0,
        wrongHints: [null, "De btw zit er al in, dus er komt niets bij.", "Het kaartje is de prijs die je betaalt, niet minder.", "Je betaalt natuurlijk wel iets."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Brutoloon **€300**, belasting **€45**. Hoeveel is het **nettoloon**?",
        options: ["€255", "€345", "€45", "€265"],
        answer: 0,
        wrongHints: [null, "Gaat de belasting erbij of eraf?", "Dat is alleen de belasting.", null],
      },
      {
        q: "Hoeveel is **20%** van **€400**?",
        options: ["€80", "€8", "€320", "€40"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is 2% — kijk nog eens naar het getal.",
          null,
          "Dat is 10%. Hoeveel keer zoveel is 20%?",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const belastingPo = {
  id: "belasting-po",
  title: "Belasting snappen (groep 6-8)",
  emoji: "🏛️",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Rekenen + leefwereld — financiële educatie (belasting)",
  prerequisites: [
    { id: "geld-rekenen", title: "Geld rekenen", niveau: "po-1F" },
  ],
  intro:
    "Belasting voor groep 6-8 — waarom we samen betalen voor wegen, scholen en ziekenhuizen, belasting op je loon (bruto → belasting eraf → netto) en btw die in de winkelprijs zit (9% / 21%). Met echte redactiesommen. ~15 min.",
  triggerKeywords: [
    "belasting", "btw", "loonheffing",
    "brutoloon", "nettoloon", "bruto", "netto",
    "Belastingdienst", "samen betalen",
    "overheid", "redactiesom geld",
  ],
  chapters,
  steps,
};

export default belastingPo;
