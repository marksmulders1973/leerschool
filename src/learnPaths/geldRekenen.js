// Leerpad: Geld rekenen — voor groep 5-8
// 5 stappen. Doorstroomtoets-stijl praktijksommen.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#00c853",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  euro: "#ffaa30",
};

const stepEmojis = ["💶","➕","🛒","📊","🏆"];

const chapters = [
  { letter: "A", title: "Euro's en centen", emoji: "💶", from: 0, to: 0 },
  { letter: "B", title: "Optellen en aftrekken", emoji: "➕", from: 1, to: 1 },
  { letter: "C", title: "Wisselgeld + slim kopen", emoji: "🛒", from: 2, to: 2 },
  { letter: "D", title: "Vergelijken — wat is voordeligst?", emoji: "📊", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Euro's en centen",
    explanation: "**1 euro = 100 cent**. Net zoals 1 meter = 100 cm.\n\nGeld schrijf je met een **komma** tussen euro's en centen:\n• € 1,50 = 1 euro 50 cent\n• € 0,75 = 75 cent\n• € 12,05 = 12 euro 5 cent *(let op: nul-cent niet vergeten!)*\n• € 100,00 = honderd euro precies\n\n**Belangrijk**: na de komma altijd **2 cijfers** voor de centen.\n• € 3,5 schrijven we als € 3,50.\n• € 0,5 = € 0,50.\n• € 10 = € 10,00.\n\n**Munten en biljetten in Nederland**:\n• Munten: 1, 2, 5, 10, 20, 50 cent + 1 en 2 euro.\n• Biljetten: 5, 10, 20, 50, 100, 200, 500 euro.\n\n**Cent → euro** *(omrekenen)*:\n• 250 cent = € 2,50.\n• 1000 cent = € 10,00.\n• 75 cent = € 0,75.\n\n**Euro → cent**:\n• € 3,40 = 340 cent.\n• € 0,80 = 80 cent.\n• € 1,05 = 105 cent.",
    checks: [
      {
        q: "**€ 2,75** — hoeveel **cent**?",
        options: ["275","2750","27,5","27"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je per ongeluk × 1000 in plaats van × 100 gedaan?","Past niet — cent zijn hele getallen, geen kommagetallen.","Te weinig — ben je de komma vergeten?"],
        uitlegPad: {
          stappen: [{ titel: "Euro→cent", tekst: "1 euro = 100 cent. €2,75 × 100 = 275 cent." }],
          woorden: [{ woord: "cent", uitleg: "1/100 euro. 100 cent = 1 euro." }],
          theorie: "Komma 2 plekken naar rechts schuiven = ×100. €2,75 → 275 cent.",
          voorbeelden: [{ type: "omrekenen", tekst: "€1=100c, €0,50=50c, €2,75=275c, €10=1000c." }],
          basiskennis: [{ onderwerp: "Cent = heel getal", uitleg: "Cent geen kommagetal — altijd hele getal." }],
          niveaus: { basis: "1 euro is 100 cent. Hoeveel cent zijn 2 euro? En dan nog 75 cent erbij.", simpeler: "1 euro = 100 cent. € 2,75 = 2 × 100 + 75 = 275 cent.", nogSimpeler: "275" },
        },
      },
      {
        q: "Welk bedrag is **correct geschreven** voor 'drie euro vijftig cent'?",
        options: ["€ 3,50","€ 3,5","€ 350","€ 3,05"],
        answer: 0,
        wrongHints: [null,"Bijna — maar geld schrijf je altijd met 2 cijfers achter de komma.","Veel te veel — dat is € 350 (driehonderdvijftig euro).","Dat is 5 cent, niet 50 cent."],
        uitlegPad: {
          stappen: [
            { titel: "Geld-notatie", tekst: "Altijd 2 cijfers na komma. €3,50 (50 cent), €3,05 (5 cent), niet '€3,5'." },
          ],
          woorden: [{ woord: "decimaal", uitleg: "Cijfers na komma. Bij geld: altijd 2 (cent)." }],
          theorie: "Geld-conventie: €X,YZ. Y en Z zijn altijd 2 cijfers, ook bij ronde bedragen (€10,00).",
          voorbeelden: [{ type: "notatie", tekst: "€3,50 ✓. €3,5 ✗ (mist cijfer). €3,05 = 5 cent (niet 50)." }],
          basiskennis: [{ onderwerp: "0 invullen", uitleg: "Bij minder dan 10 cent: 0 ervoor. €0,05 = 5 cent." }],
          niveaus: { basis: "Geld schrijf je met twee cijfers achter de komma.", simpeler: "Vijftig cent schrijf je als ,50. Dus € 3,50.", nogSimpeler: "€ 3,50" },
        },
      },
      {
        q: "**450 cent** = ?",
        options: ["€ 4,50","€ 0,45","€ 45,00","€ 4,05"],
        answer: 0,
        wrongHints: [null,"Komma fout — je deelde door 1000 in plaats van door 100.","Veel te veel — dat is 4500 cent.","Let op: 50 cent schrijf je als ,50 — niet als ,05."],
        uitlegPad: {
          stappen: [{ titel: "Cent→euro", tekst: "÷100 = komma 2 plekken naar links. 450 → €4,50." }],
          woorden: [{ woord: "omrekenen", uitleg: "Cent → euro = ÷100." }],
          theorie: "Andersom van euro→cent: cent ÷100 = euro. 450 cent ÷100 = €4,50.",
          voorbeelden: [{ type: "cent→euro", tekst: "100c=€1. 250c=€2,50. 450c=€4,50. 1000c=€10." }],
          basiskennis: [{ onderwerp: "Komma schuiven", uitleg: "÷100 = komma 2 plekken naar links." }],
          niveaus: { basis: "Van cent naar euro: deel door 100.", simpeler: "100 cent = € 1. 400 cent = € 4. Plus 50 cent = € 4,50.", nogSimpeler: "€ 4,50" },
        },
      },
      {
        q: "Welke munten samen maken **€ 1,75**?",
        options: ["1 × € 1 + 1 × 50 ct + 1 × 20 ct + 1 × 5 ct","1 × € 1 + 1 × 50 ct + 1 × 25 ct","1 × € 1 + 2 × 20 ct + 2 × 10 ct + 1 × 5 ct","1 × € 1 + 1 × 50 ct + 2 × 20 ct + 1 × 5 ct"],
        answer: 0,
        wrongHints: [null,"Tel je goed? Bestaat er eigenlijk een munt van 25 cent?","Tel de munten één voor één op. Kom je precies op € 1,75?","Hoeveel is 2 × 20 ct? Kom je dan boven of onder € 1,75?"],
        uitlegPad: {
          stappen: [
            { titel: "NL-munten kennen", tekst: "In Nederland bestaan deze munten: 1c, 2c, 5c, 10c, 20c, 50c, €1, €2. Géén 25-cent." },
            { titel: "Combineer naar €1,75", tekst: "€1 (munt) + €0,50 (munt) + €0,20 (munt) + €0,05 (munt) = €1,75. Vier munten in totaal." },
          ],
          woorden: [
            { woord: "munt", uitleg: "Metalen geldstuk. Nederland: 1c-2c-5c-10c-20c-50c-€1-€2." },
            { woord: "biljet", uitleg: "Papieren geldstuk: €5, €10, €20, €50, €100, €200, €500." },
          ],
          theorie: "Geen 25-cent-munt: in Nederland gebruik je 20c + 5c = 25c (twee munten).",
          voorbeelden: [
            { type: "samenstellen", tekst: "€1,75 = €1 + 50c + 20c + 5c. Vier munten." },
            { type: "samenstellen", tekst: "€3,30 = €2 + €1 + 20c + 10c. Vier munten." },
          ],
          basiskennis: [{ onderwerp: "Geen 25-cent", uitleg: "Soms in oude boeken nog wel; sinds invoering euro (2002) niet meer in NL." }],
          niveaus: { basis: "Tel de munten op, en kijk of elke munt echt bestaat.", simpeler: "Begin met de grootste munt: € 1. Dan 50 cent: € 1,50. Plus 20 cent: € 1,70. Plus 5 cent: € 1,75.", nogSimpeler: "€ 1 + 50 cent + 20 cent + 5 cent = € 1,75" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**€ 6,08** — hoeveel **cent**?",
        options: ["608", "680", "68", "6080"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk goed achter de komma: staat daar 80 cent of 8 cent?",
          "Waar is de 0 gebleven? Hoeveel cent is € 0,08?",
          "Te veel — 1 euro is 100 cent, niet 1000 cent.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Euro→cent",
              tekst: "1 euro = 100 cent. 6 euro = 600 cent. Daarbij nog 8 cent: 600 + 8 = 608 cent.",
            },
          ],
          woorden: [
            {
              woord: "cent",
              uitleg: "1/100 euro. 100 cent = 1 euro.",
            },
          ],
          theorie: "Achter de komma staan altijd 2 cijfers. ',08' betekent 8 cent, ',80' betekent 80 cent.",
          voorbeelden: [
            {
              type: "omrekenen",
              tekst: "€6,08 = 608 cent. €6,80 = 680 cent.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "De nul telt",
              uitleg: "De 0 in ',08' laat zien dat het maar 8 cent is.",
            },
          ],
          niveaus: {
            basis: "€ 6,08 = 608 cent.",
            simpeler: "6 euro = 600 cent. Plus 8 cent = 608 cent.",
            nogSimpeler: "608",
          },
        },
      },
      {
        q: "Lisa heeft **920 cent** in haar spaarpot. Hoeveel **euro** is dat?",
        options: ["€ 9,20", "€ 92,00", "€ 0,92", "€ 9,02"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — hoeveel cent gaat er in 1 euro?",
          "Dat zou 92 cent zijn. Lisa heeft veel meer.",
          "Let op: 20 cent schrijf je als ,20 — niet als ,02.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Cent→euro",
              tekst: "100 cent = €1. 900 cent = €9. De 20 cent die over is komt achter de komma: €9,20.",
            },
          ],
          woorden: [
            {
              woord: "omrekenen",
              uitleg: "Cent → euro = ÷100.",
            },
          ],
          theorie: "Cent ÷ 100 = euro. De komma schuift 2 plekken naar links: 920 → 9,20.",
          voorbeelden: [
            {
              type: "cent→euro",
              tekst: "100c = €1. 920c = €9,20.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Komma schuiven",
              uitleg: "÷100 = komma 2 plekken naar links.",
            },
          ],
          niveaus: {
            basis: "920 cent = € 9,20.",
            simpeler: "900 cent = € 9. Plus 20 cent = € 9,20.",
            nogSimpeler: "€ 9,20",
          },
        },
      },
      {
        q: "Welk bedrag is **acht euro en negen cent**?",
        options: ["€ 8,09", "€ 8,90", "€ 8,9", "€ 89,00"],
        answer: 0,
        wrongHints: [null, "Dat is 90 cent. Hoeveel cent moest het zijn?", "€ 8,9 lees je als 8 euro en 90 cent. Hoeveel cent moest het zijn?", "Dat is negenentachtig euro. Waar hoort de komma?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Geld-notatie",
              tekst: "Euro's voor de komma: 8. Centen achter de komma, altijd 2 cijfers: 9 cent = 09. Samen €8,09.",
            },
          ],
          woorden: [
            {
              woord: "komma",
              uitleg: "Scheidt de euro's van de centen.",
            },
          ],
          theorie: "Minder dan 10 cent? Zet er een 0 voor: 9 cent = ,09.",
          voorbeelden: [
            {
              type: "notatie",
              tekst: "€8,09 = 8 euro 9 cent. €8,90 = 8 euro 90 cent.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "0 invullen",
              uitleg: "Bij minder dan 10 cent: 0 ervoor. €0,09 = 9 cent.",
            },
          ],
          niveaus: {
            basis: "Acht euro voor de komma, negen cent erachter met twee cijfers.",
            simpeler: "8 euro voor de komma. 9 cent wordt ,09. Dus € 8,09.",
            nogSimpeler: "€ 8,09",
          },
        },
      },
      {
        q: "Welk geld is een **biljet** (papiergeld)?",
        options: ["€ 5", "€ 2", "€ 1", "50 cent"],
        answer: 0,
        wrongHints: [null, "Dat is het grootste muntstuk. Welk bedrag is van papier?", "Een euro is een munt die in je portemonnee rammelt. Welk bedrag is van papier?", "50 cent is een munt. Welk bedrag is van papier?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Munt of biljet",
              tekst: "Munten: 1, 2, 5, 10, 20, 50 cent en 1 en 2 euro. Biljetten beginnen bij €5.",
            },
          ],
          woorden: [
            {
              woord: "munt",
              uitleg: "Metalen geldstuk.",
            },
            {
              woord: "biljet",
              uitleg: "Papieren geldstuk: €5, €10, €20, €50, €100, €200, €500.",
            },
          ],
          theorie: "Het grootste muntstuk is €2. Alles vanaf €5 is een biljet.",
          voorbeelden: [
            {
              type: "indelen",
              tekst: "€2 = munt. €5 = biljet. €10 = biljet.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kleinste biljet",
              uitleg: "Het kleinste biljet is €5.",
            },
          ],
          niveaus: {
            basis: "Munten gaan tot en met € 2. Daarboven begint het papiergeld.",
            simpeler: "€ 1 en € 2 zijn munten. € 5 is het kleinste biljet.",
            nogSimpeler: "€ 5",
          },
        },
      },
      {
        q: "Je hebt **3 munten van € 2**. Hoeveel **cent** is dat?",
        options: ["600", "6", "60", "200"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het aantal euro's. Hoeveel cent zit er in 1 euro?",
          "Hoeveel cent is één munt van € 2? En drie munten?",
          "Dat is maar één munt. Je hebt er drie.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst euro's",
              tekst: "3 munten van €2 = €6.",
            },
            {
              titel: "Dan cent",
              tekst: "1 euro = 100 cent. €6 = 6 × 100 = 600 cent.",
            },
          ],
          woorden: [
            {
              woord: "cent",
              uitleg: "1/100 euro. 100 cent = 1 euro.",
            },
          ],
          theorie: "Euro → cent = × 100. €6 → 600 cent.",
          voorbeelden: [
            {
              type: "omrekenen",
              tekst: "€2 = 200 cent. €6 = 600 cent.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Twee stappen",
              uitleg: "Tel eerst het geld op, reken dan om naar cent.",
            },
          ],
          niveaus: {
            basis: "Reken eerst uit hoeveel euro drie munten van € 2 zijn, en maak er dan cent van.",
            simpeler: "3 × € 2 = € 6. En € 6 = 600 cent.",
            nogSimpeler: "600",
          },
        },
      },
      {
        q: "Welk bedrag is het **grootst**?",
        options: ["€ 5,10", "€ 5,01", "€ 5,09", "€ 4,99"],
        answer: 0,
        wrongHints: [null, "Dat is 5 euro en 1 cent. Vergelijk de centen eens goed.", "9 cent is minder dan 10 cent. Vergelijk de centen goed.", "Begin bij de euro's: is 4 meer of minder dan 5?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Euro's vergelijken",
              tekst: "€4,99 heeft maar 4 euro, dus die is het kleinst. De andere drie hebben 5 euro.",
            },
            {
              titel: "Centen vergelijken",
              tekst: "€5,10 = 10 cent extra. €5,09 = 9 cent. €5,01 = 1 cent. Dus €5,10 is het grootst.",
            },
          ],
          woorden: [
            {
              woord: "vergelijken",
              uitleg: "Kijken welk bedrag meer of minder is.",
            },
          ],
          theorie: "Eerst de euro's vergelijken. Zijn die gelijk? Dan de centen (2 cijfers achter de komma).",
          voorbeelden: [
            {
              type: "vergelijken",
              tekst: "€5,10 = 510 cent. €5,09 = 509 cent. 510 is meer.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Reken in cent",
              uitleg: "Twijfel? Maak er cent van: dan zie je het grootste getal meteen.",
            },
          ],
          niveaus: {
            basis: "Vergelijk eerst de euro's, dan de centen.",
            simpeler: "Alle bedragen in cent: 510, 501, 509, 499. Het grootste is 510 = € 5,10.",
            nogSimpeler: "€ 5,10",
          },
        },
      },
    ],
  },

  {
    title: "Optellen en aftrekken met geld",
    explanation: "Geldsommen werken net als gewone sommen, maar pas op met de **komma**.\n\n**Voorbeelden — optellen**:\n• € 2,50 + € 1,75 = ?\n  - 2,50 + 1,75 — schrijf onder elkaar, zorg dat komma's recht staan.\n  - Eindbedrag: **€ 4,25**.\n\n• € 0,80 + € 0,30 = ?\n  - Cents: 80 + 30 = 110 cent = € 1,10.\n  - Of: 0,80 + 0,30 = **1,10**.\n\n**Voorbeelden — aftrekken**:\n• € 5,00 − € 2,35 = ?\n  - Schrijf onder elkaar: 5,00 − 2,35.\n  - Eindbedrag: **€ 2,65**.\n\n• € 10,00 − € 3,75 = ?\n  - Truc: gebruik 9,99 − 3,75 = 6,24, dan +0,01 = **€ 6,25**.\n\n**Toets-tip**:\n• Schrijf altijd **netjes onder elkaar** met komma's recht.\n• Centen apart tellen kan ook: € 2,75 + € 1,80 → 275 + 180 = 455 cent → **€ 4,55**.",
    checks: [
      {
        q: "**€ 3,40 + € 1,75** = ?",
        options: ["€ 5,15","€ 5,05","€ 4,95","€ 5,25"],
        answer: 0,
        wrongHints: [null,"Te weinig — tel de cent-delen apart op: 40 + 75 = ? cent.","Veel te weinig — heb je het euro-deel correct?","Tel de centen nog eens precies: 40 + 75 = ?"],
        uitlegPad: {
          stappen: [
            { titel: "Cent + cent", tekst: "Cent: 40+75=115 cent = €1,15. Plus euro's: 3+1+1=5. Totaal €5,15." },
          ],
          woorden: [{ woord: "geld optellen", uitleg: "Centen apart, euro's apart. Centen >100 = onthoudje euro." }],
          theorie: "Truc: tel centen apart (40+75=115). 100 cent = 1 euro extra. Schrijf 15 cent + 1 euro extra erbij.",
          voorbeelden: [{ type: "stap", tekst: "€3,40 + €1,75: cent 40+75=115 (€1,15). Euro 3+1+1=5. = €5,15." }],
          basiskennis: [{ onderwerp: "Schat", uitleg: "Schat: 3+2=5. Antwoord rond €5. €5,15 past." }],
          niveaus: { basis: "€3,40+€1,75=€5,15.", simpeler: "Cent eerst: 40+75=115 (= €1,15). Euro's: 3+1+1(onthoud)=5. Antwoord €5,15.", nogSimpeler: "€5,15" },
        },
      },
      {
        q: "**€ 10,00 − € 3,45** = ?",
        options: ["€ 6,55","€ 6,45","€ 7,55","€ 6,65"],
        answer: 0,
        wrongHints: [null,"Tel je antwoord op bij € 3,45. Kom je dan op € 10?","Veel te veel — heb je 3,45 wel afgetrokken?","Tel vooruit vanaf € 3,45: tot € 4, en dan tot € 10."],
        uitlegPad: {
          stappen: [
            { titel: "999-truc", tekst: "10 − 3,45 = 9,99 − 3,45 + 0,01 = 6,54 + 0,01 = €6,55." },
            { titel: "Of vooruit-tellen", tekst: "Van 3,45 → 4 = 0,55. Van 4 → 10 = 6. Totaal: 6,55." },
          ],
          woorden: [{ woord: "vooruit-tellen", uitleg: "Tel vanaf het kleine getal naar het grote — alternatief voor aftrekken." }],
          theorie: "Bij 'rond getal − iets' = vooruit-tellen vaak makkelijker dan cijferen.",
          voorbeelden: [{ type: "vooruit", tekst: "10 − 3,45: van 3,45 naar 4 = +0,55. Van 4 naar 10 = +6. Samen 6,55." }],
          basiskennis: [{ onderwerp: "Wisselgeld-truc", uitleg: "Vooruit-tellen werkt extra goed bij wisselgeld-vragen." }],
          niveaus: { basis: "€10−€3,45=€6,55.", simpeler: "Vooruit-tellen vanaf 3,45: +0,55=4, +6=10. Totaal +6,55.", nogSimpeler: "€6,55" },
        },
      },
      {
        q: "Mam koopt **brood € 2,15**, **kaas € 4,80** en **fruit € 3,55**. Hoeveel betaalt ze in totaal?",
        options: ["€ 10,50","€ 9,50","€ 11,50","€ 10,40"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je een product overgeslagen?","Te veel — tel eerst de euro's apart (2 + 4 + 3) en kijk dan pas wat de centen samen maken.","Net te weinig — tel de centen nog eens precies: 15 + 80 + 55."],
        uitlegPad: {
          stappen: [
            { titel: "Tel op", tekst: "Cent: 15+80+55=150 (=€ 1,50). Euro: 2+4+3+1(onthoud)=10. Totaal € 10,50." },
          ],
          woorden: [{ woord: "boodschappen-totaal", uitleg: "Alles bij elkaar optellen." }],
          theorie: "Bij 3+ items: tel ze allemaal op. Centen tellen kan vaak in hoofd (afronden helpt).",
          voorbeelden: [{ type: "totaal", tekst: "Schat: 2+5+4=11. Echt: € 10,50. Past." }],
          basiskennis: [{ onderwerp: "Schat eerst", uitleg: "Schatting helpt om dom-foute antwoorden uit te sluiten." }],
          niveaus: { basis: "Tel eerst alle euro's bij elkaar en daarna alle centen; zijn de centen samen meer dan een euro, dan komt die euro erbij.", simpeler: "Centen: 15+80+55=150 (= € 1,50). Euro: 2+4+3=9. Plus de € 1,50 = € 10,50.", nogSimpeler: "€ 10,50" },
        },
      },
      {
        q: "**€ 2,99 + € 4,99** = ?",
        options: ["€ 7,98","€ 6,98","€ 7,99","€ 8,98"],
        answer: 0,
        wrongHints: [null, "Te weinig — 99 + 99 cent is meer dan één euro. Heb je die extra euro bij de euro's gedaan?", "Dat is maar één cent onder € 8. Tel de centen precies: 99 + 99.", "Te veel — € 2,99 is nog geen € 3 en € 4,99 nog geen € 5. Als je naar boven afrondt, moet je dat verschil er ook weer af halen."],
        uitlegPad: {
          stappen: [
            { titel: "Toets-truc: bijna-rond-getal", tekst: "€ 2,99 ≈ € 3 en € 4,99 ≈ € 5. Reken eerst met de ronde getallen: € 3 + € 5 = € 8. Dan corrigeren voor de 'bijna-eurootjes'." },
            { titel: "Correctie toepassen", tekst: "Elke 'X,99' is 1 cent minder dan X+1 hele euro's. Twee keer 'bijna-euro' = 2 cent minder. € 8 − € 0,02 = **€ 7,98**." },
            { titel: "Of: cent-stijl", tekst: "Cent: 99 + 99 = 198 → € 1,98 → onthoudje 1. Euro: 2 + 4 + 1 = 7. Antwoord € 7,98. Beide trucs werken." },
          ],
          woorden: [
            { woord: "bijna-rond", uitleg: "Prijzen als € X,99 of € X,98 — bijna heel getal." },
            { woord: "winkel-truc", uitleg: "Winkels gebruiken X,99-prijzen omdat het lijkt op '€ 2 iets' ipv '€ 3'." },
          ],
          theorie: "Bij ',99'-prijzen: rond AF naar boven, reken in hele euro's, trek dan 1 cent per ',99' weer af. Veel sneller dan cijferen.",
          voorbeelden: [
            { type: "stap", tekst: "€ 1,99 + € 2,99 = € 5 − € 0,02 = € 4,98." },
            { type: "stap", tekst: "€ 4,99 + € 4,99 + € 4,99 = € 15 − € 0,03 = € 14,97." },
          ],
          basiskennis: [{ onderwerp: "Toets-instinker", uitleg: "Winkelprijzen eindigen vaak op ,99 zodat ze goedkoper lijken. Het echte verschil met het hele bedrag is maar 1 cent." },],
          niveaus: { basis: "Tel eerst de centen bij elkaar; 99 + 99 is meer dan een euro, dus die euro komt bij de euro's.", simpeler: "€ 2,99 ≈ € 3. € 4,99 ≈ € 5. Samen € 8. Min 2 cent (twee 'bijna') = € 7,98.", nogSimpeler: "€ 7,98" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**€ 1,65 + € 2,50** = ?",
        options: ["€ 4,15", "€ 3,15", "€ 4,05", "€ 4,25"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — de centen samen zijn meer dan 100. Wat doe je dan?",
          "Hoeveel is 65 + 50 cent precies?",
          "Tel de centen nog eens precies: 65 + 50.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Cent + cent",
              tekst: "Cent: 65 + 50 = 115 cent = € 1,15. Euro: 1 + 2 + 1 (onthouden) = 4. Totaal € 4,15.",
            },
          ],
          woorden: [
            {
              woord: "onthouden",
              uitleg: "Zijn de centen samen 100 of meer, dan gaat er 1 euro bij de euro's.",
            },
          ],
          theorie: "Centen apart, euro's apart. 100 cent = 1 euro extra.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "€ 1,65 + € 2,50: cent 65+50=115 (€ 1,15). Euro 1+2+1=4. = € 4,15.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schat",
              uitleg: "Schat: € 1,50 + € 2,50 = € 4. Antwoord net boven € 4.",
            },
          ],
          niveaus: {
            basis: "Tel eerst de centen op (65 + 50); komt dat boven de 100, dan heb je een extra euro.",
            simpeler: "Centen: 65 + 50 = 115 (= € 1,15). Euro's: 1 + 2 = 3. Plus € 1,15 = € 4,15.",
            nogSimpeler: "€ 4,15",
          },
        },
      },
      {
        q: "**€ 6,00 − € 2,70** = ?",
        options: ["€ 3,30", "€ 4,30", "€ 3,70", "€ 3,40"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — je moet 2 euro én 70 cent aftrekken.",
          "Tel eens vooruit vanaf € 2,70: hoeveel tot € 3, en dan tot € 6?",
          "Reken terug: € 3,40 + € 2,70 = ? Kom je dan op € 6?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vooruit-tellen",
              tekst: "Van € 2,70 naar € 3 = +€ 0,30. Van € 3 naar € 6 = +€ 3. Samen € 3,30.",
            },
          ],
          woorden: [
            {
              woord: "vooruit-tellen",
              uitleg: "Tel vanaf het kleine bedrag naar het grote.",
            },
          ],
          theorie: "Bij 'rond bedrag − iets' is vooruit-tellen vaak makkelijker.",
          voorbeelden: [
            {
              type: "vooruit",
              tekst: "6 − 2,70: 2,70 → 3 (+0,30), 3 → 6 (+3). Samen 3,30.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "€ 3,30 + € 2,70 = € 6,00 ✓.",
            },
          ],
          niveaus: {
            basis: "Tel vanaf € 2,70 vooruit: eerst naar een hele euro, dan verder naar € 6,00.",
            simpeler: "Van € 2,70 tel je € 0,30 tot € 3. Dan nog € 3 tot € 6. Samen € 3,30.",
            nogSimpeler: "€ 3,30",
          },
        },
      },
      {
        q: "Je koopt een schrift van **€ 1,85** en een gum van **€ 0,65**. Wat betaal je **samen**?",
        options: ["€ 2,50", "€ 1,50", "€ 2,40", "€ 2,60"],
        answer: 0,
        wrongHints: [null, "Te weinig — 85 + 65 cent is meer dan 1 euro. Is die euro erbij?", "Tel de centen precies: 85 + 65.", "Reken terug: € 2,60 − € 0,65 = ? Is dat € 1,85?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel op",
              tekst: "Cent: 85 + 65 = 150 cent = € 1,50. Euro: 1 + 0 = 1. Samen € 1 + € 1,50 = € 2,50.",
            },
          ],
          woorden: [
            {
              woord: "samen",
              uitleg: "Alles bij elkaar optellen.",
            },
          ],
          theorie: "Centen optellen: boven de 100? Dan 1 euro erbij.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "185 cent + 65 cent = 250 cent = € 2,50.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "In cent rekenen",
              uitleg: "Kan ook: alles in cent, dan optellen, dan terug naar euro.",
            },
          ],
          niveaus: {
            basis: "Tel de centen op: 85 + 65 is meer dan een euro, dus die euro komt bij de hele euro's.",
            simpeler: "185 cent + 65 cent = 250 cent. Dat is € 2,50.",
            nogSimpeler: "€ 2,50",
          },
        },
      },
      {
        q: "Sanne heeft **€ 8,25**. Ze geeft **€ 3,60** uit. Hoeveel heeft ze **nog**?",
        options: ["€ 4,65", "€ 5,65", "€ 4,75", "€ 11,85"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — 25 cent min 60 cent gaat niet zomaar. Moet je een euro inwisselen?",
          "Reken terug: € 4,75 + € 3,60 = ? Is dat € 8,25?",
          "Ze geeft geld uit, dus heeft ze er straks minder.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Aftrekken",
              tekst: "In cent: 825 − 360 = 465 cent = € 4,65.",
            },
            {
              titel: "Check",
              tekst: "€ 4,65 + € 3,60 = € 8,25 ✓.",
            },
          ],
          woorden: [
            {
              woord: "nog over",
              uitleg: "Wat je had − wat je uitgeeft.",
            },
          ],
          theorie: "Uitgeven = aftrekken. Zijn de centen te weinig? Wissel 1 euro om in 100 cent.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "€ 8,25 − € 3,60: € 8,25 − € 3 = € 5,25. € 5,25 − € 0,60 = € 4,65.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Terugrekenen",
              uitleg: "Tel het antwoord en de uitgave op: komt er € 8,25 uit? Dan klopt het.",
            },
          ],
          niveaus: {
            basis: "Haal eerst de hele euro's eraf en daarna pas de centen.",
            simpeler: "Eerst € 3 eraf: € 5,25. Dan nog 60 cent eraf: € 4,65.",
            nogSimpeler: "€ 4,65",
          },
        },
      },
      {
        q: "Welke som heeft als uitkomst **€ 5,00**?",
        options: ["€ 2,60 + € 2,40", "€ 2,60 + € 2,60", "€ 2,40 + € 2,40", "€ 2,50 + € 2,60"],
        answer: 0,
        wrongHints: [null, "Tel de centen: 60 + 60 = ? Is dat precies 1 euro?", "Tel de centen: 40 + 40. Wordt dat een hele euro?", "Tel de centen: 50 + 60. Kom je dan precies op een hele euro?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Centen samen",
              tekst: "Je zoekt centen die samen precies 100 maken: 60 + 40 = 100.",
            },
            {
              titel: "Euro's samen",
              tekst: "2 + 2 = 4, plus de 100 cent = € 1. Samen € 5,00.",
            },
          ],
          woorden: [
            {
              woord: "uitkomst",
              uitleg: "Wat er uit de som komt.",
            },
          ],
          theorie: "Twee bedragen maken samen een rond bedrag als de centen samen precies 100 zijn.",
          voorbeelden: [
            {
              type: "rond maken",
              tekst: "€ 2,60 + € 2,40 = € 5,00. € 1,70 + € 1,30 = € 3,00.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Maatjes van 100",
              uitleg: "60 en 40, 70 en 30, 25 en 75 maken samen 100 cent.",
            },
          ],
          niveaus: {
            basis: "Kijk bij elke som of de centen samen precies 100 cent (een hele euro) maken.",
            simpeler: "60 + 40 cent = 100 cent = € 1. 2 + 2 + 1 = € 5.",
            nogSimpeler: "€ 2,60 + € 2,40",
          },
        },
      },
      {
        q: "**€ 4,20 − € 0,85** = ?",
        options: ["€ 3,35", "€ 4,35", "€ 3,45", "€ 3,25"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — je haalt bijna een hele euro weg, dus kom je onder de € 4.",
          "Tel vooruit vanaf € 0,85: naar € 1, en dan naar € 4,20.",
          "Controleer: tel je antwoord op bij € 0,85. Kom je dan op € 4,20?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "In cent",
              tekst: "420 cent − 85 cent = 335 cent = € 3,35.",
            },
            {
              titel: "Check",
              tekst: "€ 3,35 + € 0,85 = € 4,20 ✓.",
            },
          ],
          woorden: [
            {
              woord: "aftrekken",
              uitleg: "Een bedrag eraf halen.",
            },
          ],
          theorie: "Truc: 85 cent eraf = 1 euro eraf en 15 cent er weer bij. € 4,20 − € 1 = € 3,20. + € 0,15 = € 3,35.",
          voorbeelden: [
            {
              type: "truc",
              tekst: "€ 4,20 − € 0,85 = € 4,20 − € 1 + € 0,15 = € 3,35.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Bijna een euro",
              uitleg: "85 cent is bijna 1 euro: haal 1 euro weg en tel het teveel terug.",
            },
          ],
          niveaus: {
            basis: "Haal eerst een hele euro weg en kijk dan hoeveel je te veel hebt weggehaald.",
            simpeler: "Haal 1 euro weg: € 3,20. Je haalde 15 cent te veel weg, dus erbij: € 3,35.",
            nogSimpeler: "€ 3,35",
          },
        },
      },
    ],
  },

  {
    title: "Wisselgeld berekenen",
    explanation: "Bij **wisselgeld** krijg je terug = (wat je betaalt) − (wat het kost).\n\n**Voorbeeld**: een ijsje kost € 1,80. Je betaalt met € 5. Wisselgeld?\n• €5,00 − €1,80 = **€3,20**.\n\n**Toets-truc — vooruit-tellen**:\nJe kunt ook **vooruit tellen** vanaf de prijs.\n• €1,80 → €0,20 erbij → €2,00 *(20 cent)*\n• €2,00 → €3 erbij → €5,00 *(3 euro)*\n• Totaal terug: **€3 + €0,20 = €3,20**.\n\n**Voorbeeld 2**: 3 spullen van € 2,75, je betaalt met een biljet van € 10:\n• 3 × €2,75 = €8,25.\n• €10 − €8,25 = **€1,75 wisselgeld**.\n\n**Toets-tip**:\nReken altijd met de **juiste bedragen** *(een biljet van 5,00 is gewoon € 5)*. Schrijf netjes op.",
    checks: [
      {
        q: "Een tas kost **€ 24,50**. Je betaalt met **€ 50**. Wisselgeld?",
        options: ["€ 25,50","€ 24,50","€ 26,50","€ 35,50"],
        answer: 0,
        wrongHints: [null,"Dat is de prijs — je hebt aftrekking nodig.","Tel vooruit vanaf € 24,50: tot € 25, en dan tot € 50.","Schat: € 50 − € 25 is ongeveer € 25. Past jouw antwoord daarbij?"],
        uitlegPad: {
          stappen: [
            { titel: "Wisselgeld = betaald − prijs", tekst: "€50 − €24,50 = €25,50. Vooruit-tellen: van €24,50 → €25 = €0,50 erbij. Van €25 → €50 = €25 erbij. Totaal €25,50." },
          ],
          woorden: [{ woord: "wisselgeld", uitleg: "Wat je TERUGKRIJGT als je meer betaalt dan de prijs." }],
          theorie: "Wisselgeld = betaald − prijs. Vooruit-tellen vanaf prijs is vaak sneller dan cijferen.",
          voorbeelden: [{ type: "wisselgeld", tekst: "Prijs €24,50, biljet €50: 50−24,50 = 25,50. Of vooruit-tellen vanaf 24,50." }],
          basiskennis: [{ onderwerp: "Niet de prijs!", uitleg: "Verwar wisselgeld niet met de prijs zelf." }],
          niveaus: { basis: "€50 − €24,50 = €25,50.", simpeler: "Vooruit-tellen: €24,50 → €25 = +€0,50. €25 → €50 = +€25. Totaal wisselgeld €25,50.", nogSimpeler: "€25,50" },
        },
      },
      {
        q: "**3 koeken van € 1,25** met een **€ 5-biljet**. Wisselgeld?",
        options: ["€ 1,25","€ 0,75","€ 2,25","€ 3,75"],
        answer: 0,
        wrongHints: [null,"Te weinig — reken eerst uit wat de 3 koeken samen kosten.","Wat kosten 3 koeken samen? Trek dat af van € 5.","Dat is wat de koeken kosten, niet wisselgeld."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: kosten", tekst: "3 × €1,25 = €3,75 (totaal koeken)." },
            { titel: "Stap 2: wisselgeld", tekst: "€5 − €3,75 = €1,25 wisselgeld." },
          ],
          woorden: [{ woord: "totaalkosten", uitleg: "Aantal × prijs per stuk = totaal." }],
          theorie: "Bij 'meerdere stuks + wisselgeld' = 2 stappen: eerst kosten berekenen, dan aftrekken.",
          voorbeelden: [{ type: "2-stappen", tekst: "3 × €1,25 = €3,75. €5 − €3,75 = €1,25 wisselgeld." }],
          basiskennis: [{ onderwerp: "Niet 1 stap", uitleg: "Vergeet niet de aantallen mee te nemen." }],
          niveaus: { basis: "3 × €1,25 = €3,75. €5 − €3,75 = €1,25.", simpeler: "Eerst kosten: 3 koeken × €1,25 = €3,75. Dan: €5 − €3,75 = €1,25.", nogSimpeler: "€1,25" },
        },
      },
      {
        q: "Een stuk speelgoed kost **€ 17,40**. Je betaalt met **twee biljetten van € 10**. Hoeveel **wisselgeld** krijg je?",
        options: ["€ 2,60","€ 2,40","€ 3,60","€ 7,60"],
        answer: 0,
        wrongHints: [null,"Te weinig. Tel nog eens vooruit vanaf € 17,40 tot het bedrag dat je betaalt.","Tel vooruit vanaf € 17,40 naar € 18. Hoeveel cent is dat?","Te veel. Tel je antwoord op bij € 17,40: kom je dan uit op wat je betaalde?"],
        uitlegPad: {
          stappen: [
            { titel: "Betaald", tekst: "2 × € 10 = € 20." },
            { titel: "Wisselgeld", tekst: "Vooruit-tellen: 17,40 → 18 = +0,60. 18 → 20 = +2. Totaal € 2,60." },
          ],
          woorden: [{ woord: "vooruit-tellen", uitleg: "Vanaf de prijs naar het betaalde bedrag tellen." }],
          theorie: "Wisselgeld via vooruit-tellen werkt vaak snel: van prijs → ronde getal → betaalde bedrag.",
          voorbeelden: [{ type: "vooruit", tekst: "17,40 → 18 (+0,60). 18 → 20 (+2). Totaal: 2,60." }],
          basiskennis: [{ onderwerp: "Twee biljetten = € 20", uitleg: "Je betaalt met twee biljetten: 2 × € 10 = € 20." }],
          niveaus: { basis: "Hoeveel geld geef je in totaal? Tel daarna vooruit vanaf € 17,40.", simpeler: "Twee biljetten van € 10 is € 20. Tel vooruit: van € 17,40 naar € 18, en dan naar € 20.", nogSimpeler: "€ 2,60" },
        },
      },
      {
        q: "Je koopt een patatje van **€ 2,80** en een frisdrank van **€ 1,75**. Je betaalt met **€ 10**. Hoeveel **wisselgeld** krijg je?",
        options: ["€ 5,45","€ 6,45","€ 5,55","€ 4,55"],
        answer: 0,
        wrongHints: [null, "Te veel. Tel de twee prijzen nog eens precies op: klopt je totaal?", "Reken terug: tel je antwoord op bij wat je kocht. Kom je dan precies op € 10?", "Dat is wat je samen moet betalen, niet wat je terugkrijgt."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: totale kosten", tekst: "Patatje + frisdrank = € 2,80 + € 1,75. Cent: 80+75=155 (=€ 1,55). Euro: 2+1+1=4. Totaal **€ 4,55**." },
            { titel: "Stap 2: wisselgeld", tekst: "Betaald € 10 − kosten € 4,55 = wisselgeld. Vooruit-tellen: 4,55 → 5 = +0,45. Van 5 → 10 = +5. Totaal **€ 5,45**." },
            { titel: "Toets-truc bij twee-stappen-vragen", tekst: "De toets gebruikt vaak vragen met 2 stappen: eerst kosten optellen, dan aftrekken van betaald bedrag. Schat eerst om grove fouten te vermijden: kosten ~€ 5, betaald € 10, dus wisselgeld ~€ 5. € 5,45 past." },
          ],
          woorden: [
            { woord: "twee-stappen-vraag", uitleg: "Vraag waarin je eerst iets uitrekent (totaal), dan iets anders (wisselgeld)." },
            { woord: "wisselgeld", uitleg: "Wat je TERUGKRIJGT na betalen. Betaald − prijs." },
          ],
          theorie: "Bij meerdere producten + wisselgeld: stappenplan altijd:\n1. Tel alle producten op = totaalkosten\n2. Trek totaalkosten af van betaalde bedrag = wisselgeld",
          voorbeelden: [
            { type: "stap", tekst: "IJsje € 1,80 + drinken € 2,20 = € 4. Betaald € 5: wisselgeld € 1." },
            { type: "stap", tekst: "Boek € 7,95 + pen € 2,05 = € 10. Betaald € 10: wisselgeld € 0 precies." },
          ],
          basiskennis: [{ onderwerp: "Niet 1 product vergeten", uitleg: "Bij de Doorstroomtoets staan vaak meerdere producten — lees alles voor je rekent." }],
          niveaus: { basis: "Tel eerst de twee prijzen op. Trek dat daarna af van € 10.", simpeler: "€ 2,80 + € 1,75 = € 4,55. Tel nu vooruit van € 4,55 naar € 10.", nogSimpeler: "€ 5,45" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een boek kost **€ 6,35**. Je betaalt met een biljet van **€ 10**. Hoeveel **wisselgeld** krijg je?",
        options: ["€ 3,65", "€ 4,65", "€ 3,75", "€ 16,35"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — tel vooruit: van € 6,35 naar € 7, en dan naar € 10.",
          "Reken terug: € 3,75 + € 6,35 = ? Is dat € 10?",
          "Je krijgt geld terug, dus het moet minder zijn dan € 10.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vooruit-tellen",
              tekst: "€ 6,35 → € 7 = +€ 0,65. € 7 → € 10 = +€ 3. Samen € 3,65.",
            },
          ],
          woorden: [
            {
              woord: "wisselgeld",
              uitleg: "Wat je TERUGKRIJGT als je meer betaalt dan de prijs.",
            },
          ],
          theorie: "Wisselgeld = betaald − prijs. € 10 − € 6,35 = € 3,65.",
          voorbeelden: [
            {
              type: "wisselgeld",
              tekst: "Prijs € 6,35, biljet € 10: tel vooruit 0,65 + 3 = 3,65.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "€ 3,65 + € 6,35 = € 10 ✓.",
            },
          ],
          niveaus: {
            basis: "Tel vooruit vanaf € 6,35: eerst naar een hele euro, dan naar € 10.",
            simpeler: "Van € 6,35 tot € 7 is 65 cent. Hoeveel is het nog van € 7 tot € 10?",
            nogSimpeler: "€ 3,65",
          },
        },
      },
      {
        q: "Een flesje water kost **€ 1,40**. Je betaalt met een munt van **€ 2**. Hoeveel krijg je **terug**?",
        options: ["€ 0,60", "€ 1,60", "€ 0,70", "€ 3,40"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — de 2 euro en de 1 euro trek je ook van elkaar af.",
          "Tel vooruit: van € 1,40 naar € 1,50, en dan naar € 2.",
          "Je krijgt geld terug: dat is minder dan je betaalt.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vooruit-tellen",
              tekst: "€ 1,40 → € 2 = +€ 0,60.",
            },
          ],
          woorden: [
            {
              woord: "terugkrijgen",
              uitleg: "Het wisselgeld: betaald − prijs.",
            },
          ],
          theorie: "Wisselgeld = betaald − prijs. € 2,00 − € 1,40 = € 0,60.",
          voorbeelden: [
            {
              type: "wisselgeld",
              tekst: "Prijs € 1,40, munt € 2: 60 cent terug.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "€ 0,60 + € 1,40 = € 2,00 ✓.",
            },
          ],
          niveaus: {
            basis: "Tel vooruit vanaf € 1,40 tot € 2.",
            simpeler: "Van € 1,40 naar € 1,50 is 10 cent. Hoeveel is het nog van € 1,50 tot € 2?",
            nogSimpeler: "€ 0,60",
          },
        },
      },
      {
        q: "Je koopt **2 kaartjes van € 4,50**. Je betaalt met **€ 20**. Hoeveel **wisselgeld** krijg je?",
        options: ["€ 11,00", "€ 15,50", "€ 9,00", "€ 12,00"],
        answer: 0,
        wrongHints: [
          null,
          "Zo reken je maar één kaartje. Hoeveel kaartjes koop je?",
          "Dat kosten de kaartjes samen. Wat krijg je terug van € 20?",
          "Wat kosten 2 kaartjes samen? Reken dat precies uit.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: kosten",
              tekst: "2 × € 4,50 = € 9,00.",
            },
            {
              titel: "Stap 2: wisselgeld",
              tekst: "€ 20 − € 9 = € 11,00.",
            },
          ],
          woorden: [
            {
              woord: "totaalkosten",
              uitleg: "Aantal × prijs per stuk.",
            },
          ],
          theorie: "Meerdere stuks + wisselgeld = 2 stappen: eerst kosten, dan aftrekken van wat je betaalt.",
          voorbeelden: [
            {
              type: "2-stappen",
              tekst: "2 × € 4,50 = € 9. € 20 − € 9 = € 11.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niets vergeten",
              uitleg: "Lees goed hoeveel stuks je koopt.",
            },
          ],
          niveaus: {
            basis: "Reken eerst uit wat twee kaartjes samen kosten. Trek dat daarna af van € 20.",
            simpeler: "€ 4,50 + € 4,50 = € 9. Hoeveel is € 20 − € 9?",
            nogSimpeler: "€ 11,00",
          },
        },
      },
      {
        q: "Je betaalt met **€ 5** en krijgt **€ 1,15** terug. Hoeveel **kostte** het?",
        options: ["€ 3,85", "€ 6,15", "€ 4,85", "€ 3,95"],
        answer: 0,
        wrongHints: [null, "Je krijgt geld terug, dus het kostte minder dan € 5.", "Reken terug: € 4,85 + € 1,15 = ? Is dat € 5?", "Reken terug: € 3,95 + € 1,15 = ? Is dat € 5?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Omdraaien",
              tekst: "Prijs = betaald − wisselgeld. € 5 − € 1,15 = € 3,85.",
            },
            {
              titel: "Check",
              tekst: "€ 3,85 + € 1,15 = € 5,00 ✓.",
            },
          ],
          woorden: [
            {
              woord: "prijs",
              uitleg: "Wat iets kost.",
            },
            {
              woord: "wisselgeld",
              uitleg: "Wat je terugkrijgt.",
            },
          ],
          theorie: "Prijs + wisselgeld = wat je betaalt. Dus prijs = betaald − wisselgeld.",
          voorbeelden: [
            {
              type: "omgekeerd",
              tekst: "Betaald € 5, terug € 1,15: prijs € 3,85.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Terugrekenen",
              uitleg: "Tel prijs en wisselgeld op: dan moet je op het betaalde bedrag uitkomen.",
            },
          ],
          niveaus: {
            basis: "Wat je betaalt = prijs + wisselgeld. Dus de prijs = € 5 − € 1,15.",
            simpeler: "Tel vooruit van € 1,15 tot € 2, en dan tot € 5. Tel de stukjes op.",
            nogSimpeler: "€ 3,85",
          },
        },
      },
      {
        q: "Een pakje kost **€ 3,70**. Je betaalt met **€ 5**. De verkoper telt vooruit: eerst tot € 4, dan tot € 5. Hoeveel krijg je **terug**?",
        options: ["€ 1,30", "€ 2,30", "€ 1,70", "€ 0,30"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel. Tel elk stukje nog eens na: eerst tot € 4, en daarna tot € 5.",
          "Hoeveel cent is het van € 3,70 naar € 4?",
          "Dat is alleen het stukje tot € 4. Er komt nog een stukje bij.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tot € 4",
              tekst: "€ 3,70 → € 4 = +€ 0,30.",
            },
            {
              titel: "Tot € 5",
              tekst: "€ 4 → € 5 = +€ 1.",
            },
            {
              titel: "Samen",
              tekst: "€ 0,30 + € 1 = € 1,30.",
            },
          ],
          woorden: [
            {
              woord: "vooruit-tellen",
              uitleg: "Vanaf de prijs naar het betaalde bedrag tellen.",
            },
          ],
          theorie: "Vooruit-tellen: van prijs → rond bedrag → betaald bedrag. Tel de stukjes op.",
          voorbeelden: [
            {
              type: "vooruit",
              tekst: "3,70 → 4 (+0,30). 4 → 5 (+1). Totaal 1,30.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Zo doet de kassa het",
              uitleg: "De verkoper legt eerst kleine munten neer tot een rond bedrag, dan de rest.",
            },
          ],
          niveaus: {
            basis: "Tel de twee stukjes van de verkoper op: van € 3,70 tot € 4, en van € 4 tot € 5.",
            simpeler: "Van € 3,70 tot € 4 is 30 cent. Van € 4 tot € 5 is € 1. Tel ze op.",
            nogSimpeler: "€ 1,30",
          },
        },
      },
    ],
  },

  {
    title: "Wat is voordeligst? — vergelijken",
    explanation: "Toetsvragen vragen vaak: **welke aanbieding is goedkoper per stuk**?\n\n**Voorbeeld**: chips!\n• A: een zak van **200 g** voor **€ 1,80**.\n• B: een zak van **500 g** voor **€ 4,00**.\n\nWelke is **voordeliger per gram**?\n\n**Aanpak — prijs per eenheid berekenen**:\n• A: 1,80 ÷ 200 = € 0,009 per gram = **0,9 cent per g**.\n• B: 4,00 ÷ 500 = € 0,008 per gram = **0,8 cent per g**.\n\n**Antwoord**: B is goedkoper per gram.\n\n**Toets-truc — vergelijk per 100 g**:\nMakkelijker zonder kommagetallen:\n• A: 200 g voor € 1,80 → 100 g = € 0,90.\n• B: 500 g voor € 4,00 → 100 g = € 0,80.\n• Per 100 g: B is goedkoper.\n\n**Voorbeeld 2 — limonade**:\n• A: 1 L = € 2,40.\n• B: 1,5 L = € 3,30.\n\nPer L:\n• A: € 2,40.\n• B: 3,30 ÷ 1,5 = € 2,20.\n• B is voordeliger.\n\n**Toets-tip**:\nReken altijd **per zelfde eenheid** *(per 100 g, per liter, per stuk)*. Anders vergelijk je appels met peren.",
    checks: [
      {
        q: "Pak A: **6 koekjes voor € 1,20**. Pak B: **10 koekjes voor € 2,40**. Welke is **goedkoper per koekje**?",
        options: ["A","B","Hetzelfde","Niet te zeggen"],
        answer: 0,
        wrongHints: [null,"Reken per koekje: deel bij elk pak de prijs door het aantal.","Niet hetzelfde — reken per koekje.","Wel te zeggen — deel prijs door aantal."],
        uitlegPad: {
          stappen: [
            { titel: "Per koekje", tekst: "A: 1,20÷6 = € 0,20/koekje. B: 2,40÷10 = € 0,24/koekje. A is goedkoper." },
          ],
          woorden: [{ woord: "per stuk", uitleg: "Prijs gedeeld door aantal = prijs per individueel item." }],
          theorie: "Voordelig vergelijken: deel prijs door aantal. Laagste prijs per stuk = winnaar.",
          voorbeelden: [{ type: "per-stuk", tekst: "A: € 0,20/k. B: € 0,24/k. A wint." }],
          basiskennis: [{ onderwerp: "Niet de totaalprijs", uitleg: "Hoogste totaalprijs ≠ duurder per stuk. Reken per stuk!" }],
          niveaus: { basis: "Deel bij elk pak de prijs door het aantal koekjes. Welk pak heeft de laagste prijs per koekje?", simpeler: "Reken per stuk: A € 1,20 ÷ 6 = € 0,20. B € 2,40 ÷ 10 = € 0,24. A is goedkoper per koekje.", nogSimpeler: "Pak A is goedkoper per koekje." },
        },
      },
      {
        q: "Pak A: **500 g rijst voor € 1,50**. Pak B: **1 kg rijst voor € 2,80**. Welk pak is **het voordeligst**?",
        options: ["B","A","Hetzelfde","Niet vergelijkbaar"],
        answer: 0,
        wrongHints: [null,"Reken voor allebei de prijs per 100 g uit — 1 kg is 1000 g.","Niet hetzelfde — reken per 100 g.","Het is allebei rijst. Je kunt ze dus wel vergelijken."],
        uitlegPad: {
          stappen: [
            { titel: "Per 100 g", tekst: "A: 500g € 1,50 → 100g = € 0,30. B: 1000g € 2,80 → 100g = € 0,28. B goedkoper." },
          ],
          woorden: [{ woord: "per gewicht", uitleg: "Vergelijk altijd per zelfde eenheid (100g, kg, liter)." }],
          theorie: "Verschillende verpakkingsgrootten? Reken per 100g (of per kg). Anders vergelijk je niet eerlijk.",
          voorbeelden: [{ type: "per-100g", tekst: "A € 0,30/100g. B € 0,28/100g. B 2 cent goedkoper per 100g." }],
          basiskennis: [{ onderwerp: "kg ≠ g", uitleg: "1 kg = 1000 g. Even omrekenen voor je vergelijkt." }],
          niveaus: { basis: "Maak de hoeveelheden gelijk: wat kost 100 g bij pak A, en wat kost 100 g bij pak B?", simpeler: "Per 100g vergelijken. A: 500g voor 1,50 → 100g voor 0,30. B: 1000g voor 2,80 → 100g voor 0,28. B 2 cent goedkoper.", nogSimpeler: "Pak B is voordeliger." },
        },
      },
      {
        q: "Pak A: **4 yoghurts voor € 2,00**. Pak B: **6 yoghurts voor € 2,40**. Welk pak is **per yoghurt het voordeligst**?",
        options: ["B","A","Hetzelfde","Niet te zeggen"],
        answer: 0,
        wrongHints: [null,"Reken per yoghurt: deel bij elk pak de prijs door het aantal.","Niet hetzelfde — reken per stuk.","Wel te zeggen — deel prijs door aantal."],
        uitlegPad: {
          stappen: [
            { titel: "Per stuk", tekst: "A: 2,00÷4=€ 0,50. B: 2,40÷6=€ 0,40. B is € 0,10 goedkoper per yoghurt." },
          ],
          woorden: [{ woord: "vergelijken", uitleg: "Reken altijd per zelfde eenheid." }],
          theorie: "Groter pak ≠ altijd voordeliger — reken NA om te checken.",
          voorbeelden: [{ type: "per-stuk", tekst: "A € 0,50/stuk. B € 0,40/stuk. B wint." }],
          basiskennis: [{ onderwerp: "Reken altijd na", uitleg: "Niet vertrouwen op intuïtie — reken het uit." }],
          niveaus: { basis: "Deel bij elk pak de prijs door het aantal yoghurts. Welk pak is per yoghurt het goedkoopst?", simpeler: "A: € 2,00 voor 4 = € 0,50/stuk. B: € 2,40 voor 6 = € 0,40/stuk. B is goedkoper.", nogSimpeler: "Pak B is voordeliger per yoghurt." },
        },
      },
      {
        q: "Pak A: **2 L melk voor € 2,40**. Pak B: **1 L melk voor € 1,30**. Welk pak is **goedkoper per liter**?",
        options: ["A","B","Hetzelfde","Te weinig info"],
        answer: 0,
        wrongHints: [null, "Reken per liter: wat kost 1 liter uit pak A?", "Niet hetzelfde — reken na per liter.", "Bij allebei staan de prijs én de hoeveelheid. Je kunt het dus uitrekenen."],
        uitlegPad: {
          stappen: [
            { titel: "Per liter berekenen", tekst: "A: 2 L voor € 2,40 → 1 L = € 2,40 ÷ 2 = **€ 1,20**. B: 1 L voor € 1,30 → 1 L = **€ 1,30**." },
            { titel: "Vergelijken", tekst: "A € 1,20/L < B € 1,30/L. A is **10 cent goedkoper per liter**. Hoewel A duurder TOTAAL lijkt, krijg je meer voor je geld." },
            { titel: "Toets-instinker: hoogste totaalprijs ≠ duurste", tekst: "A kost € 2,40 (hoger dan B's € 1,30). Maar je krijgt 2L (dubbele hoeveelheid). Reken altijd per L of per kg om eerlijk te vergelijken." },
          ],
          woorden: [
            { woord: "per liter", uitleg: "Prijs gedeeld door het aantal liters." },
            { woord: "hoeveelheid", uitleg: "Wat je krijgt: aantal stuks, kg, liter, gram." },
          ],
          theorie: "Voordeel-vergelijking-stappenplan:\n1. Bepaal de eenheid (stuk / liter / 100g)\n2. Reken prijs per eenheid voor beide pakken\n3. Laagste prijs/eenheid = winnaar\n4. Negeer totaalprijs als hoeveelheden verschillen",
          voorbeelden: [
            { type: "per-L", tekst: "Cola: 1L € 1,50 vs 2L € 2,50 → 1L=€ 1,50, per-L bij 2L=€ 1,25. 2L-fles voordeliger." },
            { type: "per-stuk", tekst: "Appel: 1 los € 0,50 vs 5-pak € 2,00 → per stuk € 0,40. 5-pak voordeliger." },
          ],
          basiskennis: [{ onderwerp: "Familiepak", uitleg: "Vaak (niet altijd!) is groter pak voordeliger per eenheid. De toets test of je kunt NA-rekenen." }],
          niveaus: { basis: "Reken eerst uit wat 1 liter kost bij pak A. Vergelijk dat daarna met pak B.", simpeler: "A: 2 liter voor € 2,40 → 1 liter = € 1,20. B: 1 liter = € 1,30. A is goedkoper per liter.", nogSimpeler: "Pak A is goedkoper per liter." },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Zak A: **5 appels voor € 2,00**. Zak B: **8 appels voor € 2,80**. Welke is **goedkoper per appel**?",
        options: ["Zak B", "Zak A", "Even duur", "Niet te zeggen"],
        answer: 0,
        wrongHints: [
          null,
          "Reken per appel: deel bij elke zak de prijs door het aantal appels.",
          "Reken het na: wat kost één appel in zak A, en één in zak B?",
          "Wel te zeggen — je weet de prijs én het aantal.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Per appel",
              tekst: "A: € 2,00 ÷ 5 = € 0,40. B: € 2,80 ÷ 8 = € 0,35. B is goedkoper.",
            },
          ],
          woorden: [
            {
              woord: "per stuk",
              uitleg: "Prijs gedeeld door aantal.",
            },
          ],
          theorie: "Vergelijk de prijs per appel. Laagste prijs per stuk = voordeligst.",
          voorbeelden: [
            {
              type: "per-stuk",
              tekst: "A € 0,40 per appel. B € 0,35 per appel. B wint.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet de totaalprijs",
              uitleg: "B kost meer, maar je krijgt ook meer appels.",
            },
          ],
          niveaus: {
            basis: "Reken in centen: deel bij elke zak het aantal centen door het aantal appels.",
            simpeler: "A: 200 cent ÷ 5 = 40 cent. B: 280 cent ÷ 8 = 35 cent. B is goedkoper per appel.",
            nogSimpeler: "Zak B",
          },
        },
      },
      {
        q: "Pak A: **2 pennen voor € 3,00**. Pak B: **4 pennen voor € 6,00**. Welke is **goedkoper per pen**?",
        options: ["Even duur", "Pak B", "Pak A", "Niet te zeggen"],
        answer: 0,
        wrongHints: [null, "Reken per pen: deel de prijs door het aantal pennen.", "Reken per pen: wat kost één pen in pak A? En in pak B?", "Je weet de prijs én het aantal. Reken per pen."],
        uitlegPad: {
          stappen: [
            {
              titel: "Per pen",
              tekst: "A: € 3,00 ÷ 2 = € 1,50. B: € 6,00 ÷ 4 = € 1,50.",
            },
            {
              titel: "Vergelijken",
              tekst: "Allebei € 1,50 per pen. Ze zijn even duur.",
            },
          ],
          woorden: [
            {
              woord: "per stuk",
              uitleg: "Prijs gedeeld door aantal.",
            },
          ],
          theorie: "Soms is een groter pak niet voordeliger. Dubbel zoveel pennen voor dubbel zoveel geld = even duur.",
          voorbeelden: [
            {
              type: "per-stuk",
              tekst: "A € 1,50 per pen. B € 1,50 per pen. Gelijk.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Reken altijd na",
              uitleg: "Denk niet meteen dat het grote pak goedkoper is.",
            },
          ],
          niveaus: {
            basis: "Reken bij elk pak uit wat één pen kost en vergelijk die twee bedragen.",
            simpeler: "A: € 3,00 voor 2 pennen = € 1,50 per pen. B: € 6,00 voor 4 pennen = € 1,50 per pen. Even duur.",
            nogSimpeler: "Even duur",
          },
        },
      },
      {
        q: "Kaas A: **200 g voor € 2,40**. Kaas B: **400 g voor € 4,40**. Wat kost **100 g** van kaas B?",
        options: ["€ 1,10", "€ 1,20", "€ 2,20", "€ 0,44"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de prijs per 100 g van kaas A. Je zoekt kaas B.",
          "Dat is de prijs van 200 g. Hoe vaak past 100 g in 400 g?",
          "Let op de komma: hoe vaak past 100 g in 400 g?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Per 100 g",
              tekst: "400 g = 4 × 100 g. €4,40 ÷ 4 = €1,10 per 100 g.",
            },
            {
              titel: "Vergelijken",
              tekst: "Kaas A: €2,40 ÷ 2 = €1,20 per 100 g. Kaas B is dus goedkoper.",
            },
          ],
          woorden: [
            {
              woord: "per 100 g",
              uitleg: "Wat 100 gram kost. Handig om pakken te vergelijken.",
            },
          ],
          theorie: "Deel het gewicht en de prijs door hetzelfde getal tot je bij 100 g bent.",
          voorbeelden: [
            {
              type: "per-100g",
              tekst: "400 g €4,40 → 100 g €1,10.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Gram",
              uitleg: "1 kg = 1000 g. 400 g is 4 keer 100 g.",
            },
          ],
          niveaus: {
            basis: "€4,40 ÷ 4 = €1,10.",
            simpeler: "400 g is 4 stukjes van 100 g. €4,40 verdelen in 4 stukjes = €1,10 per stukje.",
            nogSimpeler: "€1,10",
          },
        },
      },
      {
        q: "Een los zwemkaartje kost **€ 4,00**. Een kaart voor **10 keer** zwemmen kost **€ 35,00**. Wat kost **1 keer** zwemmen met de kaart voor 10 keer?",
        options: ["€ 3,50", "€ 4,00", "€ 3,00", "€ 0,35"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de prijs van een los kaartje. Reken met de kaart voor 10 keer.",
          "Reken na: 10 × € 3,00 = ? Is dat € 35,00?",
          "Let op de komma: kan één keer zwemmen echt minder dan een halve euro kosten?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Per keer",
              tekst: "€ 35,00 ÷ 10 = € 3,50 per keer.",
            },
            {
              titel: "Vergelijken",
              tekst: "Los € 4,00. Met de kaart € 3,50. Met de kaart ben je 50 cent per keer goedkoper uit.",
            },
          ],
          woorden: [
            {
              woord: "per keer",
              uitleg: "Prijs gedeeld door het aantal keren.",
            },
          ],
          theorie: "Delen door 10: de komma schuift 1 plek naar links. € 35,00 → € 3,50.",
          voorbeelden: [
            {
              type: "per-keer",
              tekst: "€ 35,00 voor 10 keer = € 3,50 per keer.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "10 × € 3,50 = € 35,00 ✓.",
            },
          ],
          niveaus: {
            basis: "Verdeel de prijs van de kaart over de 10 keer zwemmen. Bij delen door 10 schuift de komma één plek.",
            simpeler: "€ 35,00 verdelen over 10 keer. 10 × € 3,00 = € 30, en de € 5,00 die over is wordt 50 cent per keer. Samen € 3,50.",
            nogSimpeler: "€ 3,50",
          },
        },
      },
      {
        q: "Welke aanbieding voor pakjes drinken is **per pakje het goedkoopst**?",
        options: [
          "3 pakjes voor € 1,50",
          "2 pakjes voor € 1,20",
          "4 pakjes voor € 2,80",
          "5 pakjes voor € 2,75",
        ],
        answer: 0,
        wrongHints: [null, "Reken per pakje: deel de prijs door het aantal.", "Wat kost één pakje hier? Vergelijk dat met de andere aanbiedingen.", "Meer pakjes is niet altijd goedkoper per stuk. Reken € 2,75 ÷ 5."],
        uitlegPad: {
          stappen: [
            {
              titel: "Per pakje",
              tekst: "3 voor € 1,50 = € 0,50. 2 voor € 1,20 = € 0,60. 4 voor € 2,80 = € 0,70. 5 voor € 2,75 = € 0,55.",
            },
            {
              titel: "Vergelijken",
              tekst: "€ 0,50 is het laagst: 3 pakjes voor € 1,50.",
            },
          ],
          woorden: [
            {
              woord: "aanbieding",
              uitleg: "Een speciale prijs als je meer stuks koopt.",
            },
          ],
          theorie: "Vergelijk altijd per stuk. Het laagste bedrag per stuk is het voordeligst.",
          voorbeelden: [
            {
              type: "per-stuk",
              tekst: "150 ÷ 3 = 50 cent. 275 ÷ 5 = 55 cent.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "In cent rekenen",
              uitleg: "Delen gaat vaak makkelijker in cent.",
            },
          ],
          niveaus: {
            basis: "Reken bij elke aanbieding uit wat één pakje kost, in centen. Welk bedrag is het laagst?",
            simpeler: "Per pakje: 50, 60, 70 en 55 cent. De goedkoopste is 50 cent: 3 pakjes voor € 1,50.",
            nogSimpeler: "3 pakjes voor € 1,50",
          },
        },
      },
    ],
  },

  {
    title: "Eindopdracht — geldsommen mix",
    explanation: "Mix-toets met geldsommen in Doorstroomtoets-stijl. Verschillende vragen — winkel, wisselgeld, vergelijken.\n\nVeel succes!",
    checks: [
      {
        q: "**€ 4,75 + € 2,80** = ?",
        options: ["€ 7,55","€ 7,45","€ 6,55","€ 7,65"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer cent-deel.","Te weinig — euro-deel correct?","Tel de centen nog eens: 75 + 80 = ?"],
        uitlegPad: {
          stappen: [{ titel: "Optellen", tekst: "Cent: 75+80=155 (€1,55). Euro: 4+2+1=7. Totaal €7,55." }],
          woorden: [{ woord: "geld optellen", uitleg: "Cent + cent, euro + euro. Cent>100 = onthoudje." }],
          theorie: "Schat: €5+€3=€8. Antwoord rond €7,50. €7,55 past.",
          voorbeelden: [{ type: "stap", tekst: "75+80=155 (1,55). 4+2+1=7. €7,55." }],
          basiskennis: [{ onderwerp: "Schat", uitleg: "Schatting helpt om foute antwoorden uit te sluiten." }],
          niveaus: { basis: "€4,75+€2,80=€7,55.", simpeler: "Cent: 75+80=155 (€1,55 = 1 euro extra + 55c). Euro 4+2+1=7. €7,55.", nogSimpeler: "€7,55" },
        },
      },
      {
        q: "Een tas van **€ 35**, **15% korting**. Wat **betaal** je?",
        options: ["€ 29,75","€ 30","€ 5,25","€ 31,75"],
        answer: 0,
        wrongHints: [null,"Te veel — reken eerst de korting (15% van 35) en trek die pas af.","Klopt niet — dat is wat je BESPAART, niet betaalt.","Hoeveel is 15% van € 35? Reken dat eerst precies uit."],
        uitlegPad: {
          stappen: [
            { titel: "Korting berekenen", tekst: "15% van €35 = 35 × 0,15 = €5,25." },
            { titel: "Betaal = prijs − korting", tekst: "35 − 5,25 = €29,75." },
          ],
          woorden: [
            { woord: "korting", uitleg: "Bedrag dat je MINDER hoeft te betalen." },
            { woord: "procent", uitleg: "Per 100. 15% = 15 per 100 = 0,15." },
          ],
          theorie: "Truc: 15% = 10% + 5%. 10% van 35 = 3,50. 5% = 1,75. Samen 5,25. Of: 35×0,15 direct.",
          voorbeelden: [{ type: "korting", tekst: "Tas €35 met 15% korting. Korting €5,25. Betalen €29,75." }],
          basiskennis: [{ onderwerp: "Niet 15", uitleg: "5,25 is de KORTING (wat je bespaart), niet wat je betaalt." }],
          niveaus: { basis: "35−5,25=€29,75.", simpeler: "15% korting van €35: bereken 15% (=€5,25). Trek af: 35−5,25=€29,75.", nogSimpeler: "€29,75" },
        },
      },
      {
        q: "Pak A: **3 paar sokken € 6**. Pak B: **5 paar sokken € 8**. Per **paar** voordeligst?",
        options: ["B","A","Hetzelfde","Niet te zeggen"],
        answer: 0,
        wrongHints: [null,"Reken per paar: deel bij elk pak de prijs door het aantal paren.","Reken het na: wat kost één paar in pak A, en één in pak B?","Wel — reken per paar."],
        uitlegPad: {
          stappen: [{ titel: "Per paar", tekst: "A: 6÷3=€2/paar. B: 8÷5=€1,60/paar. B is goedkoper." }],
          woorden: [{ woord: "per paar", uitleg: "Prijs gedeeld door aantal paren." }],
          theorie: "Reken per zelfde eenheid (paar). Laagste prijs/paar wint.",
          voorbeelden: [{ type: "per-paar", tekst: "A €2/paar. B €1,60/paar. Verschil €0,40 per paar." }],
          basiskennis: [{ onderwerp: "Niet de totaalprijs", uitleg: "B kost meer (€8 vs €6) maar IS goedkoper per paar." }],
          niveaus: { basis: "B €1,60/paar wint.", simpeler: "A: €6÷3=€2/paar. B: €8÷5=€1,60/paar. B is voordeliger.", nogSimpeler: "B" },
        },
      },
      {
        q: "Tom heeft **€ 25**. Hij koopt boeken van **€ 8,50** + **€ 12,75**. Hoeveel **over**?",
        options: ["€ 3,75","€ 4,75","€ 2,75","€ 21,25"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je beide boeken meegerekend?","Te weinig — controleer som van boeken.","Dat kosten de boeken samen. Hoeveel houdt Tom over?"],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: kosten", tekst: "8,50+12,75=€21,25." },
            { titel: "Stap 2: over", tekst: "25−21,25=€3,75." },
          ],
          woorden: [{ woord: "over", uitleg: "Wat je niet uitgeeft = startbedrag − uitgaven." }],
          theorie: "2-stappen-vraag: eerst kosten, dan startbedrag − kosten.",
          voorbeelden: [{ type: "2-stappen", tekst: "€25 budget − €21,25 boeken = €3,75 over." }],
          basiskennis: [{ onderwerp: "Beide boeken", uitleg: "Niet 1 boek vergeten — tel beide op." }],
          niveaus: { basis: "25−21,25=€3,75.", simpeler: "Eerst kosten: €8,50+€12,75=€21,25. Dan: €25−€21,25=€3,75.", nogSimpeler: "€3,75" },
        },
      },
      {
        q: "**12 stickers van € 0,15** — totaal?",
        options: ["€ 1,80","€ 1,50","€ 1,20","€ 2,00"],
        answer: 0,
        wrongHints: [null,"Te weinig — reken: 12 × 15 cent = hoeveel cent? Zet dat om naar euro's.","Dat zou 12 × 10 cent zijn. Wat kost één sticker?","Reken precies: 12 × 15 cent = ? cent."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldigen", tekst: "12 × €0,15 = 12 × 15 cent = 180 cent = €1,80." },
          ],
          woorden: [{ woord: "stuks × prijs", uitleg: "Aantal × prijs per stuk = totaal." }],
          theorie: "Tip: reken in cent als prijs <€1. 12×15c=180c=€1,80. Anders met komma rekenen.",
          voorbeelden: [{ type: "stuks", tekst: "12 × 15c = 180c = €1,80. Of 12×0,15=1,80." }],
          basiskennis: [{ onderwerp: "Cent of euro", uitleg: "Beide manieren werken — kies de makkelijkste." }],
          niveaus: { basis: "12×0,15=€1,80.", simpeler: "12 stickers × 15 cent = 180 cent = €1,80.", nogSimpeler: "€1,80" },
        },
      },
      {
        q: "Anna spaart **€ 7,50 per week**. Hoeveel heeft ze **na 8 weken** gespaard?",
        options: ["€ 60","€ 56","€ 75","€ 50"],
        answer: 0,
        wrongHints: [null, "Te weinig — heb je alleen 8 × €7 gerekend, zonder de 50 cent?", "Dat is €7,50 × 10 — Anna spaart maar 8 weken.", "Te weinig — controleer met schatting (8 × €7,50 ≈ 8 × 8 = €64)."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de som?", tekst: "Sparen-per-week × aantal weken = totaal. 8 weken × €7,50/week = ?" },
            { titel: "Slim splitsen", tekst: "Splits in 2 sommen die makkelijker zijn:\n• 8 × €7 = €56 (gewone tafel)\n• 8 × €0,50 = €4 (8 halve euro's)\n• Samen: €56 + €4 = **€60**" },
            { titel: "Of: × 0,50 = ÷ 2", tekst: "Andere truc: 8 × €0,50 = 8 ÷ 2 = €4. En 8 × €7 = €56. Samen €60." },
          ],
          woorden: [
            { woord: "sparen", uitleg: "Geld bewaren ipv uitgeven, vaak om iets te kopen later." },
            { woord: "per week", uitleg: "Elke week hetzelfde bedrag." },
          ],
          theorie: "Bij 'per week × X weken'-sommen:\n• Splits prijs in hele euro's + cent-deel\n• Reken beide × aantal weken\n• Tel op = totaal\nGeschat: 8 × €7 ≈ €56. Antwoord moet rond €60 zijn.",
          voorbeelden: [
            { type: "stap", tekst: "€2,50/week × 4 weken: 4×€2=€8, 4×€0,50=€2, totaal €10." },
            { type: "stap", tekst: "€5,25/week × 6 weken: 6×€5=€30, 6×€0,25=€1,50, totaal €31,50." },
          ],
          basiskennis: [{ onderwerp: "Spaardoel-rekenen", uitleg: "De toets test vaak: 'Hoe lang om €X bij elkaar te sparen?' = X ÷ weekbedrag." }],
          niveaus: { basis: "8 × €7,50 = €60.", simpeler: "8 × €7 = €56. Plus 8 × €0,50 = €4. Totaal €60.", nogSimpeler: "€60" },
        },
      },
      {
        q: "**3 broodjes** kosten samen **€ 7,80**. Wat kost **1 broodje**?",
        options: ["€ 2,60","€ 2,40","€ 3,80","€ 2,80"],
        answer: 0,
        wrongHints: [null, "Te weinig — controleer: 3 × €2,40 = €7,20, niet €7,80.", "Te veel — controleer: 3 × € 3,80 = € 11,40, niet € 7,80.", "Te veel — 3 × €2,80 = €8,40, niet €7,80."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de som?", tekst: "Totaal ÷ aantal = prijs per stuk. €7,80 ÷ 3 = ?" },
            { titel: "Slim delen", tekst: "Splits €7,80 in delen die door 3 deelbaar zijn:\n• €6,00 ÷ 3 = €2 (gewone tafel)\n• €1,80 ÷ 3 = €0,60 (18 ÷ 3 = 6, dus €0,60)\n• Samen: €2 + €0,60 = **€2,60**" },
            { titel: "Check je antwoord", tekst: "Reken terug: 3 × €2,60 = ? Cent: 3×60=180 (=€1,80). Euro: 3×2+1=7. Totaal **€7,80** ✓ — klopt." },
          ],
          woorden: [
            { woord: "per stuk", uitleg: "Wat 1 los exemplaar kost. Totaal ÷ aantal." },
            { woord: "delen", uitleg: "Iets in gelijke stukken verdelen. €7,80 over 3 = €2,60 elk." },
          ],
          theorie: "Bij 'wat kost 1?'-sommen:\n• Totaal ÷ aantal = prijs per stuk\n• Splits het totaal in stukken die makkelijker te delen zijn\n• Check altijd: aantal × prijs per stuk = totaal?",
          voorbeelden: [
            { type: "stap", tekst: "€6,00 ÷ 4 = €1,50/stuk. Check: 4 × €1,50 = €6 ✓." },
            { type: "stap", tekst: "€9,90 ÷ 3: splits in €9 + €0,90. €9÷3=€3, €0,90÷3=€0,30. Samen €3,30." },
          ],
          basiskennis: [{ onderwerp: "Check terug", uitleg: "Bij twijfel: vermenigvuldig je antwoord met het aantal. Komt het totaal eruit? Dan klopt het." }],
          niveaus: { basis: "€7,80 ÷ 3 = €2,60.", simpeler: "Splits: €6 ÷ 3 = €2. €1,80 ÷ 3 = €0,60. Samen €2,60.", nogSimpeler: "€2,60" },
        },
      },
      { q: "Mark koopt 2 broden van €2,15. Hij betaalt met €5. Hoeveel wisselgeld?", options: ["€0,70","€1,30","€2,85","€4,30"], answer: 0, wrongHints: [null,"Niet het wisselgeld — reken €5 − (2 × €2,15).","Dat is €5 − één brood; je kocht er twee.","Dat is de prijs van 2 broden zelf, niet het wisselgeld."] },
      { q: "Een pen kost €1,25. Hoeveel kosten 4 pennen?", options: ["€5,00","€4,80","€5,25","€4,00"], answer: 0, wrongHints: [null, "Reken 4 × € 1,25. Hoeveel is 4 × 25 cent?", "Heb je er € 1,25 extra bij geteld? Reken 4 × € 1,25.", "Dat is 4 × €1."] },
      { q: "Je krijgt €5 zakgeld en €2 voor je verjaardag. Hoeveel krijg je samen?", options: ["€7","€3","€10","€5"], answer: 0, wrongHints: [null, "Je hebt €2 van €5 afgehaald. Krijg je geld erbij of eraf?", "Je hebt €5 × 2 gedaan. Moet je hier optellen of keer doen?", "Dat is alleen je zakgeld. Komt de €2 er niet bij?"] },
      { q: "Eén sticker kost €0,20. Wat kosten 10 stickers?", options: ["€2,00","€0,20","€20,00","€1,00"], answer: 0, wrongHints: [null, "Dat is de prijs van één sticker.", "Kijk naar de komma: kosten 10 kleine stickers echt twintig euro?", "Dat zou 10 × 10 cent zijn. Wat kost één sticker?"] },
      { q: "Hoeveel cent zit in **€1,75**?", options: ["175","75","17,5","1,75"], answer: 0, wrongHints: [null, "Dat zijn alleen de centen achter de komma. Hoeveel cent is die € 1 nog?", "Cent is een heel getal, geen kommagetal. Hoeveel cent is € 1?", "Dat is het bedrag in euro's. Hoeveel cent is dat?"] },
      { q: "**€10 − €3,45** = ?", options: ["€6,55","€7,55","€6,45","€7"], answer: 0, wrongHints: [null, "Niet — kijk goed naar het cent-deel bij de aftrekking.", "Reken terug: € 6,45 + € 3,45 = ? Is dat € 10?", "Je rekende alleen met hele euro's. Wat gebeurt er met de 45 cent?"] },
      { q: "Je wilt 3 pakken sap. Los kost een pak €4, een voordeelpak met 3 pakken kost €11. Wat is voordeliger?", options: ["het voordeelpak van €11","3 losse pakken","even duur","niet te zeggen"], answer: 0, wrongHints: [null, "Reken eerst uit wat 3 losse pakken samen kosten.", "Reken het na: kosten 3 losse pakken echt evenveel als het voordeelpak?", "Je kunt het uitrekenen: wat kosten 3 losse pakken samen?"] },
      { q: "Iets kost **€40**. Je krijgt **10% korting**. Wat is de nieuwe prijs?", options: ["€36","€30","€4","€39"], answer: 0, wrongHints: [null, "Dan haal je €10 eraf. Is 10% van €40 echt €10?", "Dat is de korting, niet wat je betaalt.", "Dan haal je maar €1 eraf. Hoeveel is 10% van €40?"] },
      { q: "In je spaarpot zit €8,50. Je doet er €1,25 bij. Hoeveel zit erin?", options: ["€9,75","€9,25","€8,75","€10"], answer: 0, wrongHints: [null, "Tel de centen los op: 50 + 25 cent, hoeveel is dat samen? Klopt jouw uitkomst dan nog?", "Heb je de hele euro's meegeteld? 8 + 1 euro erbij, en dan pas de centen.", "Dat lijkt naar boven afgerond. Reken de centen precies: 50 + 25 cent."] },
      { q: "Welke is **goedkoper** per stuk: 3 stuks voor €6 OF 5 stuks voor €8?", options: ["3 stuks voor €6","5 stuks voor €8","Gelijk","Niet te zeggen"], answer: 1, wrongHints: ["Reken per stuk: deel de prijs door het aantal.",null,"Niet gelijk — reken per stuk en vergelijk.","Wél te zeggen — reken de prijs per stuk (prijs ÷ aantal)."] },
      { q: "**€25 ÷ 5** = ?", options: ["€5","€20","€30","€125"], answer: 0, wrongHints: [null, "Je hebt 5 afgetrokken. Wat betekent ÷?", "Je hebt 5 opgeteld. Wat betekent ÷?", "Je hebt keer gedaan. Wordt het bij delen meer of minder?"] },
      { q: "Je hebt **€100**. Je koopt een boek van **€18** en een spel van **€25**. Hoeveel houd je over?", options: ["€57","€43","€73","€67"], answer: 0, wrongHints: [null, "Dat geef je uit. Hoeveel blijft er over?", "Heb je zowel het boek als het spel eraf gehaald?", "Reken nog eens: €18 + €25 = ? Trek dat af van €100."] },
      { q: "Een verjaardagsfeest kost **€120** voor **8 gasten**. Hoeveel is dat per gast?", options: ["€15","€16","€960","€12"], answer: 0, wrongHints: [null, "Reken na: 8 × €16 = ? Is dat €120?", "Je hebt keer gedaan. Moet het bedrag per gast kleiner of groter zijn dan €120?", "Reken na: 8 × €12 = ? Is dat €120?"] },
      { q: "Wat is **wisselgeld**?", options: ["Geld dat je terugkrijgt bij betalen","Geld dat je van iemand leent","Geld dat je krijgt voor vakantie","Geld dat je opspaart in een pot"], answer: 0, wrongHints: [null,"Lenen moet je terugbetalen — dat is iets anders.","Denk aan de kassa. Wat gebeurt er als je met te veel geld betaalt?","Spaargeld zet je opzij. Krijg je wisselgeld op die manier?"] },
      { q: "Een fiets kost **€100** zonder btw. Er komt **21% btw** bij. Wat is de prijs mét btw?", options: ["€121","€21","€100","€79"], answer: 0, wrongHints: [null, "Dat is alleen de btw.", "Dat is de prijs zonder btw.", "Je hebt de btw eraf gehaald. Komt hij erbij of eraf?"] },
      { q: "Welke munten heb je nodig voor **€2,75**?", options: ["1×€2 + 1×€0,50 + 1×€0,20 + 1×€0,05","1×€2 + 1×€0,50 + 1×€0,20 + 1×€0,02","1×€2 + 2×€0,20 + 2×€0,10 + 1×€0,05","1×€2 + 1×€0,50 + 2×€0,20 + 1×€0,05"], answer: 0, wrongHints: [null,"Tel na: kom je precies op €2,75, of mis je nog een paar cent?","Tel de munten één voor één op. Hoeveel cent heb je na de €2?","Hoeveel is 2 × €0,20? Kom je dan boven of onder €2,75?"] },
      { q: "Je verdient als oppas **€2,50 per uur**. Hoeveel verdien je in **4 uur**?", options: ["€10","€8","€12","€2,50"], answer: 0, wrongHints: [null, "Dat zou 4 × €2 zijn. Vergeet je de 50 cent niet?", "Reken na: hoeveel is 4 × 50 cent?", "Dat verdien je in één uur."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const geldRekenen = {
  id: "geld-rekenen",
  title: "Geld rekenen — groep 5-8, Doorstroomtoets-stof",
  emoji: "💶",
  level: "groep5-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen — geld",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "procenten-po", title: "Procenten", niveau: "po-1F" },
  ],
  intro:
    "Geld rekenen voor groep 5-8: euro's en centen, optellen + aftrekken, wisselgeld berekenen, vergelijken (wat is voordeligst). Doorstroomtoets-stijl praktijksommen. ~12 min.",
  triggerKeywords: [
    "geld","euro","cent","wisselgeld","prijs","kosten","betalen","goedkoper",
    "voordeliger","vergelijken","kassabon",
  ],
  chapters,
  steps,
};

export default geldRekenen;
