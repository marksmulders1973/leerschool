// Leerpad: Interpunctie & hoofdletters — groep 5-7 PO.
// Toets-onderdeel taalverzorging. Referentieniveau 1F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  highlight: "#ffd54f",
  punt: "#ff5252",
  alt: "#42a5f5",
  ok: "#69f0ae",
};

const stepEmojis = ["✏️", "🔤", "❓", ",", '"', "🏆"];

const chapters = [
  { letter: "A", title: "Wat is interpunctie?", emoji: "✏️", from: 0, to: 0 },
  { letter: "B", title: "Hoofdletters", emoji: "🔤", from: 1, to: 1 },
  { letter: "C", title: "Punt, vraag, uitroep", emoji: "❓", from: 2, to: 2 },
  { letter: "D", title: "Komma's", emoji: ",", from: 3, to: 3 },
  { letter: "E", title: "Aanhalingstekens", emoji: '"', from: 4, to: 4 },
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function leestekensSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">De belangrijkste leestekens</text>

<rect x="20" y="40" width="60" height="40" rx="6" fill="rgba(255,82,82,0.18)" stroke="${COLORS.punt}" stroke-width="1.5"/>
<text x="50" y="68" text-anchor="middle" fill="${COLORS.punt}" font-size="22" font-family="Arial" font-weight="bold">.</text>
<text x="50" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">punt</text>
<text x="50" y="110" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">einde zin</text>

<rect x="90" y="40" width="60" height="40" rx="6" fill="rgba(66,165,245,0.18)" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="120" y="70" text-anchor="middle" fill="${COLORS.alt}" font-size="22" font-family="Arial" font-weight="bold">?</text>
<text x="120" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">vraag</text>
<text x="120" y="110" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">einde vraag</text>

<rect x="160" y="40" width="60" height="40" rx="6" fill="rgba(255,213,79,0.18)" stroke="${COLORS.highlight}" stroke-width="1.5"/>
<text x="190" y="70" text-anchor="middle" fill="${COLORS.highlight}" font-size="22" font-family="Arial" font-weight="bold">!</text>
<text x="190" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">uitroep</text>
<text x="190" y="110" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">verbazing/bevel</text>

<rect x="230" y="40" width="60" height="40" rx="6" fill="rgba(105,240,174,0.18)" stroke="${COLORS.ok}" stroke-width="1.5"/>
<text x="260" y="70" text-anchor="middle" fill="${COLORS.ok}" font-size="22" font-family="Arial" font-weight="bold">,</text>
<text x="260" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">komma</text>
<text x="260" y="110" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">in een zin</text>

<text x="160" y="142" text-anchor="middle" fill="${COLORS.curve2}" font-size="11" font-family="Arial">' '   — aanhalingstekens (wat iemand zegt)</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Hoofdletters: begin zin, eigen namen, plaatsen</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is interpunctie?
  {
    title: "Wat is interpunctie?",
    explanation:
      "**Interpunctie** = de **leestekens** in een zin én het juiste gebruik van **hoofdletters**.\n\n**Waarom zijn leestekens belangrijk?**\nLeestekens helpen je **goed lezen**. Ze laten zien:\n• waar een zin begint en eindigt,\n• of het een vraag of uitroep is,\n• of er een korte pauze in een zin zit,\n• wat iemand zegt.\n\n**De 5 belangrijkste leestekens**:\n• **.** punt — einde van een gewone zin.\n• **?** vraagteken — einde van een vraag.\n• **!** uitroepteken — verbazing of bevel.\n• **,** komma — korte pauze, of opsomming.\n• ' **'** aanhalingstekens — wat iemand zegt.\n\n**Hoofdletters** gebruik je:\n• Aan **begin van een zin**.\n• Bij **namen van mensen** *(Anna, Lisa, Tom)*.\n• Bij **namen van plaatsen** *(Amsterdam, Frankrijk)*.\n• Bij **dagen en maanden** gebruik je in het Nederlands géén hoofdletter *(maandag, januari)*.\n\n**Voorbeeld zonder interpunctie**:\n*'mijn naam is tom ik woon in utrecht waar woon jij'*\n\n**Met interpunctie**:\n*'Mijn naam is Tom. Ik woon in Utrecht. Waar woon jij?'*\n\nVeel makkelijker te lezen! Daar is interpunctie voor.",
    svg: leestekensSvg(),
    checks: [
      {
        q: "Wat is **interpunctie**?",
        options: ["Leestekens en hoofdletters", "Spelling en leestekens", "Hoofdletters en spelling", "Zinnen en alinea's"],
        answer: 0,
        wrongHints: [null, "Hoe je een woord spelt (d of dt, ei of ij) — valt dat onder interpunctie?", "Gaat spelling over tekens in een zin, of over de letters in een woord?", "Een alinea is een stuk tekst. Gaat interpunctie over hoe je een tekst in stukken verdeelt?"],
      },
      {
        q: "**Waarom** gebruiken we leestekens?",
        options: ["Zodat je weet hoe je de zin moet lezen", "Zodat je ziet hoe je de woorden spelt", "Zodat je ziet welke woorden belangrijk zijn", "Zodat een tekst er netjes uitziet"],
        answer: 0,
        wrongHints: [null, "Spelling gaat over de letters in een woord. Wat doen tekens als . en ? met een zin?", "Een belangrijk woord maak je vet of dik. Wat doet een punt of een vraagteken?", "Netjes is fijn, maar wat gebeurt er als je een tekst zonder punten voorleest?"],
      },
      {
        q: "Welk leesteken hoort bij een **vraag**?",
        options: ["?", ".", "!", ","],
        answer: 0,
        wrongHints: [null, "Een punt is voor een gewone zin die iets vertelt.", "Een uitroepteken is voor verbazing of een uitroep.", "Een komma staat midden in een zin, niet aan het eind."],
        uitlegPad: {
          stappen: [
            { titel: "Vraagteken (?) hoort bij vragen", tekst: "Een **vraag** = zin waarop je een **antwoord verwacht**. Aan het eind komt altijd een **vraagteken (?)**. Geen punt, geen uitroepteken." },
            { titel: "Hoe herken je een vraag?", tekst: "**Vraag-signalen**:\n• Begint met een **vraagwoord**: wat / wie / waar / wanneer / waarom / hoe.\n• OF begint met een **werkwoord**: Heb je...? / Ga je...? / Wil je...?\n• Je verwacht een antwoord (ja/nee of meer)." },
            { titel: "Vergelijk de 4 leestekens", tekst: "• **.** = einde gewone zin (mededeling). 'Het regent.'\n• **?** = einde vraag. 'Regent het?'\n• **!** = uitroep/verbazing/bevel. 'Het regent!'\n• **,** = pauze MIDDEN in zin (geen einde)." },
          ],
          woorden: [
            { woord: "vraagteken (?)", uitleg: "Eind van een vraag." },
            { woord: "vraagwoord", uitleg: "Wat / wie / waar / wanneer / waarom / hoe." },
          ],
          theorie: "Toets-feit eindleesteken:\n• Mededeling → **.**\n• Vraag → **?**\n• Uitroep/emotie → **!**\nKomma sluit GEEN zin af — die zit binnen een zin als pauze.",
          voorbeelden: [
            { type: "stap", tekst: "'Ben jij Anna?' = vraag (begint met 'Ben' = werkwoord, antwoord verwacht)." },
            { type: "stap", tekst: "'Waar is mijn boek?' = vraag (begint met 'Waar' = vraagwoord)." },
            { type: "stap", tekst: "'Mooi weer.' = mededeling → punt. 'Mooi weer!' = enthousiast → uitroep." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lees zin hardop. Klinkt het als vraag (toonhoogte omhoog aan eind)? Dan ?. Klinkt het als feit? Dan ." },
          ],
          niveaus: {
            basis: "? (vraagteken).",
            simpeler: "Vraag eindigt met vraagteken (?). Punt = mededeling, uitroep = emotie.",
            nogSimpeler: "?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk leesteken zet je aan het eind van een **gewone zin**?",
        options: [". (punt)", "? (vraagteken)", "! (uitroepteken)", ", (komma)"],
        answer: 0,
        wrongHints: [
          null,
          "Een gewone zin vraagt niets. Welk teken hoort dan?",
          null,
          "Een komma staat midden in een zin, niet aan het eind.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Gewone zin = punt",
              tekst: "Een **gewone zin** vertelt iets, zonder vraag en zonder sterk gevoel. Zo'n zin sluit je af met een **punt (.)**.",
            },
          ],
          woorden: [
            {
              woord: "mededeling",
              uitleg: "Een gewone zin die iets vertelt.",
            },
          ],
          theorie: "Gewone zin → **.** · Vraag → **?** · Uitroep → **!**. Een komma sluit nooit een zin af.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'De bus is laat.' = gewone zin → punt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Vertelt de zin gewoon iets? Dan zet je een punt.",
            },
          ],
          niveaus: {
            basis: ". (punt)",
            simpeler: "Een gewone zin vertelt iets. Die sluit je af met een punt.",
            nogSimpeler: ".",
          },
        },
      },
      {
        q: "Waarvoor gebruik je **aanhalingstekens**?",
        options: [
          "Om te laten zien wat iemand zegt",
          "Om te laten zien dat het een vraag is",
          "Om een korte pauze te maken",
          "Om te laten zien waar een zin begint",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een vraag herken je aan een ander teken.",
          null,
          "Waar begint een zin? Denk aan de eerste letter.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Aanhalingstekens = wat iemand zegt",
              tekst: "Tussen **aanhalingstekens** (\" \") staan de woorden die iemand **zegt**. Zo zie je meteen welk stuk gesproken is.",
            },
          ],
          woorden: [
            {
              woord: "aanhalingstekens",
              uitleg: "De tekens \" \" of ' ' rond wat iemand zegt.",
            },
          ],
          theorie: "Aanhalingstekens = wat iemand zegt. Vraagteken = vraag. Komma = pauze. Hoofdletter = begin van een zin.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Juf zei: \"Pak je schrift.\" → 'Pak je schrift.' is wat juf zegt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zie je aanhalingstekens? Dan praat er iemand.",
            },
          ],
          niveaus: {
            basis: "Om te laten zien wat iemand zegt.",
            simpeler: "De woorden tussen aanhalingstekens zijn precies wat iemand zegt.",
            nogSimpeler: "Wat iemand zegt.",
          },
        },
      },
      {
        q: "Wat doet een **komma** in een zin?",
        options: [
          "Hij geeft een korte pauze aan",
          "Hij sluit de zin af",
          "Hij laat zien dat het een vraag is",
          "Hij laat zien wat iemand zegt",
        ],
        answer: 0,
        wrongHints: [null, "Staat een komma aan het eind of midden in een zin?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Komma = korte pauze",
              tekst: "Een **komma (,)** staat **midden** in een zin. Bij het lezen stop je daar heel even. Je gebruikt hem ook in een opsomming.",
            },
          ],
          woorden: [
            {
              woord: "komma",
              uitleg: "Het teken , voor een korte pauze in een zin.",
            },
          ],
          theorie: "Komma = pauze of opsomming, midden in de zin. Punt, vraagteken en uitroepteken sluiten een zin af.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Na school, als het droog is, ga ik voetballen.' → twee korte pauzes.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Lees de zin hardop. Stop je heel even? Daar staat vaak een komma.",
            },
          ],
          niveaus: {
            basis: "Een korte pauze.",
            simpeler: "Een komma staat midden in de zin en geeft een kleine pauze aan.",
            nogSimpeler: "Pauze.",
          },
        },
      },
      {
        q: "Welke zin heeft **geen** interpunctie?",
        options: [
          "ik ga morgen naar het strand",
          "Ik ga morgen naar het strand.",
          "Ga jij morgen naar het strand?",
          "Morgen ga ik naar het strand.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de eerste letter en naar het eind van de zin.",
          null,
          "Begint deze zin met een hoofdletter? Staat er een teken aan het eind?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Interpunctie = leestekens én hoofdletters",
              tekst: "**Interpunctie** zijn de leestekens (. ? ! , \" \") en de hoofdletters. Een zin zonder interpunctie begint met een kleine letter en heeft geen leesteken aan het eind.",
            },
          ],
          woorden: [
            {
              woord: "interpunctie",
              uitleg: "Leestekens en hoofdletters samen.",
            },
          ],
          theorie: "Zonder interpunctie: geen hoofdletter aan het begin, geen leesteken aan het eind. Dat leest lastig.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'ik ga morgen naar het strand' → geen hoofdletter, geen punt.",
            },
            {
              type: "stap",
              tekst: "'Ik ga morgen naar het strand.' → wel hoofdletter, wel punt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Check twee plekken: de eerste letter en het eind van de zin.",
            },
          ],
          niveaus: {
            basis: "ik ga morgen naar het strand",
            simpeler: "Die zin begint met een kleine letter en heeft geen punt aan het eind.",
            nogSimpeler: "Geen hoofdletter, geen punt.",
          },
        },
      },
      {
        q: "Hoeveel woorden krijgen een **hoofdletter** in: *'mijn tante woont in leiden'*?",
        options: ["2", "1", "3", "0"],
        answer: 0,
        wrongHints: [null, "Kijk naar het begin van de zin én naar namen van plaatsen.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek de hoofdletter-plekken",
              tekst: "• **Mijn** → begin van de zin.\n• **Leiden** → naam van een stad.\n• tante, woont, in → gewone woorden, kleine letter.",
            },
          ],
          woorden: [
            {
              woord: "plaatsnaam",
              uitleg: "Naam van een stad, dorp of land.",
            },
          ],
          theorie: "Hoofdletter bij: begin van een zin, namen van mensen, namen van plaatsen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Mijn tante woont in Leiden.' → 2 hoofdletters.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Loop de zin woord voor woord langs: begin? naam? plaats?",
            },
          ],
          niveaus: {
            basis: "2 (Mijn en Leiden).",
            simpeler: "Het eerste woord en de stad Leiden krijgen een hoofdletter.",
            nogSimpeler: "Mijn + Leiden.",
          },
        },
      },
    ],
  },

  // STAP 2: Hoofdletters
  {
    title: "Hoofdletters — wanneer gebruik je ze?",
    explanation:
      "**Hoofdletters** zijn de **grote letters** *(A, B, C...)*. Je gebruikt ze op deze plekken:\n\n**1. Aan begin van een zin**:\n• 'Het is mooi weer.'\n• 'Vandaag ga ik naar school.'\n\n**2. Bij namen van mensen**:\n• Anna, Lisa, Tom, Mark, Sara, Bram.\n• Ook achternamen: De Vries, Jansen.\n\n**3. Bij namen van plaatsen**:\n• Steden: Amsterdam, Utrecht, Den Haag.\n• Landen: Nederland, België, Duitsland.\n• Werelddelen: Europa, Afrika, Azië.\n• Straten: Hoofdstraat, Schoolplein.\n\n**4. Bij eigennamen van dingen**:\n• Boektitels: 'Harry Potter', 'De Zwarte Zwaan'.\n• Bedrijven: Hema, Albert Heijn.\n• Eigen merken: Lego, Coca-Cola.\n\n**5. Bij namen van talen**:\n• Frans, Duits, Engels, Spaans, Chinees — **wél hoofdletter** (talen krijgen er één!).\n\n**Géén hoofdletter** bij:\n• Dagen: maandag, dinsdag *(in het Nederlands)*.\n• Maanden: januari, februari.\n• Seizoenen: zomer, winter.\n\n**Toets-strikvraag**:\n*'in nederland eten we vaak in januari oliebollen'* → **'In Nederland eten we vaak in januari oliebollen.'**\n• Hoofdletter: In (begin zin), Nederland (land).\n• Géén hoofdletter: januari (maand), oliebollen (gewoon woord).",
    checks: [
      {
        q: "Welke zin is **goed**?",
        options: ["Vandaag ga ik naar Amsterdam.", "vandaag ga ik naar Amsterdam.", "Vandaag ga ik naar amsterdam.", "VANDAAG ga ik naar amsterdam."],
        answer: 0,
        wrongHints: [null, "Begin zin mist hoofdletter.", "Plaatsnaam mist hoofdletter.", "Een heel woord in hoofdletters hoeft niet. Kijk ook naar de plaatsnaam."],
      },
      {
        q: "Welk woord krijgt **wél een hoofdletter** in een zin?",
        options: ["De naam van een persoon", "Een dag van de week", "Een maand van het jaar", "Een seizoen van het jaar"],
        answer: 0,
        wrongHints: [null, "Hoe schrijf je 'maandag' in 'Ik kom op maandag'?", "Hoe schrijf je 'januari' in 'Ik ben in januari jarig'?", "Is 'zomer' een naam of een gewoon woord?"],
      },
      {
        q: "Welk woord schrijf je **ook midden in een zin** met een hoofdletter?",
        options: ["Frans", "Maandag", "December", "Voorjaar"],
        answer: 0,
        wrongHints: [null, "Een dag van de week schrijf je midden in een zin met een kleine letter.", "Hoe schrijf je een maand midden in een zin?", "Een seizoen is een gewoon woord, geen naam."],
        uitlegPad: {
          stappen: [
            { titel: "Talen krijgen hoofdletter", tekst: "In het Nederlands: talen krijgen hoofdletter, dagen/maanden/seizoenen niet. Dus 'Frans' wel, 'maandag' niet." },
          ],
          woorden: [{ woord: "taal-naam", uitleg: "Naam van een taal — bv. Frans, Duits, Spaans." }],
          theorie: "Talen krijgen in het Nederlands hoofdletter. Dagen/maanden/seizoenen niet.",
          voorbeelden: [{ type: "stap", tekst: "'Ik leer Frans op woensdag in januari.' (Frans WEL, woensdag NIET, januari NIET)." }],
          basiskennis: [{ onderwerp: "Tegenintuïtief", uitleg: "Dit verschilt soms van Engels — onthoud de regel goed." }],
          niveaus: {
            basis: "Frans (taal).",
            simpeler: "Talen krijgen hoofdletter in het Nederlands. Dagen/maanden/seizoenen niet. Frans is een taal, dus wél hoofdletter.",
            nogSimpeler: "Frans",
          },
        },
      },
      {
        q: "Welke zin is **fout**?",
        options: ["Ik woon in nederland.", "Ik woon in Nederland.", "Mijn naam is Lisa.", "We gaan op vakantie naar Spanje."],
        answer: 0,
        wrongHints: [null, "Deze zin is goed geschreven. Vergelijk hem eens met de andere zinnen.", "Deze zin is goed: Lisa is een naam en krijgt een hoofdletter.", "Deze zin is goed: Spanje is een land en krijgt een hoofdletter."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke woorden krijgen een hoofdletter in: *'wij wonen in de kerkstraat'*?",
        options: ["Wij en Kerkstraat", "Wij en Wonen", "Wij, De en Kerkstraat", "Wonen en Kerkstraat"],
        answer: 0,
        wrongHints: [null, "'Wonen' is een werkwoord. Krijgt dat midden in een zin een hoofdletter?", "Hoort 'de' bij de naam van de straat, of staat het ervoor?", "Met welk woord begint de zin?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Begin van de zin",
              tekst: "**Wij** is het eerste woord → hoofdletter.",
            },
            {
              titel: "Straatnaam",
              tekst: "**Kerkstraat** is de naam van een straat → hoofdletter.",
            },
          ],
          woorden: [
            {
              woord: "straatnaam",
              uitleg: "De naam van een straat, zoals Hoofdstraat.",
            },
          ],
          theorie: "Straatnamen zijn namen van plaatsen, dus met hoofdletter. Werkwoorden (wonen) krijgen geen hoofdletter.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Wij wonen in de Kerkstraat.'",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Begin van de zin + elke naam = hoofdletter.",
            },
          ],
          niveaus: {
            basis: "Wij en Kerkstraat.",
            simpeler: "Wij staat vooraan, Kerkstraat is een straatnaam. Die twee krijgen een hoofdletter.",
            nogSimpeler: "Wij + Kerkstraat.",
          },
        },
      },
      {
        q: "Welke woorden krijgen een hoofdletter in: *'in juli fietst tom naar spanje'*?",
        options: ["In, Tom en Spanje", "In, Juli, Tom en Spanje", "Tom en Spanje", "In en Spanje"],
        answer: 0,
        wrongHints: [null, "Krijgt een maand een hoofdletter?", "Kijk ook naar het eerste woord van de zin.", "Tom is een naam. Krijgt een naam een hoofdletter?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Loop de zin langs",
              tekst: "• **In** → begin van de zin.\n• juli → maand → kleine letter.\n• **Tom** → naam.\n• **Spanje** → land.",
            },
          ],
          woorden: [
            {
              woord: "maand",
              uitleg: "Januari t/m december: in het Nederlands zonder hoofdletter.",
            },
          ],
          theorie: "Hoofdletter: begin zin, namen, landen. Geen hoofdletter: dagen, maanden, seizoenen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'In juli fietst Tom naar Spanje.'",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Strikvraag",
              uitleg: "Maanden lijken belangrijk, maar krijgen toch géén hoofdletter.",
            },
          ],
          niveaus: {
            basis: "In, Tom en Spanje.",
            simpeler: "In (begin), Tom (naam) en Spanje (land). Juli is een maand: kleine letter.",
            nogSimpeler: "In + Tom + Spanje.",
          },
        },
      },
    ],
  },

  // STAP 3: Punt + vraagteken + uitroepteken
  {
    title: "Punt, vraagteken, uitroepteken",
    explanation:
      "Een zin eindigt op een **leesteken**. Welk teken hangt af van het soort zin.\n\n**Gewone zin → punt (.)**\nEen mededeling of beschrijving.\n• 'Het regent buiten.'\n• 'Ik ga naar school.'\n• 'Anna heeft een hond.'\n\n**Vraag → vraagteken (?)**\nEen zin waarop je een antwoord verwacht.\n• 'Waar ga je heen?'\n• 'Hoe heet jouw kat?'\n• 'Heb je gehoord wat ik zei?'\n\n**Hoe herken je een vraag?**\n• Begint vaak met een vraagwoord: wat / wie / waar / wanneer / waarom / hoe.\n• OF begint met werkwoord: 'Heb je...?' / 'Ga je...?' / 'Wil je...?'\n\n**Uitroep → uitroepteken (!)**\nVerbazing, blijdschap, schrik, bevel.\n• 'Wat een mooie hond!'\n• 'Stop! Niet doen!'\n• 'Hoera, ik heb gewonnen!'\n• 'Pas op!'\n\n**Toets-trucs**:\n• **Twijfel tussen . en !**: zit er emotie in? Dan !. Anders een rustige zin → punt.\n• **Vraag herkennen**: kun je er 'ja' of 'nee' (of een ander antwoord) op geven? Dan is het een vraag.\n• **Nooit** mixen: '?!' is informele schrijftaal, maar bij de Doorstroomtoets altijd 1 leesteken kiezen.\n\n**Veel-voorkomende fout**:\nVergeten leesteken aan eind. De toets test ALTIJD of je een zin afsluit.",
    checks: [
      {
        q: "Welk leesteken **mist** er in: *'Wat een mooie auto'*?",
        options: ["! (uitroepteken)", ". (punt)", "? (vraagteken)", ", (komma)"],
        answer: 0,
        wrongHints: [null, "Is dit een rustige mededeling, of zit er gevoel in?", "Geen vraag.", "Komma sluit geen zin af."],
      },
      {
        q: "*'Heb je je tanden gepoetst'* — welk leesteken?",
        options: ["?", ".", "!", ","],
        answer: 0,
        wrongHints: [null, "Punt is geen vraag.", "Niet boos genoeg voor uitroep.", "Komma sluit geen zin af."],
        uitlegPad: {
          stappen: [
            { titel: "Begint met werkwoord = vraag", tekst: "De zin begint met '**Heb**' (werkwoord). Dat is een typische **vraag-opbouw** in het Nederlands: werkwoord vooraan + persoon erachter. 'Heb **je**...?'" },
            { titel: "Wacht op antwoord", tekst: "Bij deze zin verwacht je een **ja/nee-antwoord** ('Ja, ik heb gepoetst' of 'Nee, nog niet'). Dat is hét kenmerk van een vraag." },
            { titel: "Test: vervang de woord-volgorde", tekst: "Mededeling: 'Je hebt je tanden gepoetst.' (volgorde: persoon → werkwoord) → eindigt op **.**\nVraag: 'Heb je je tanden gepoetst?' (volgorde: werkwoord → persoon) → eindigt op **?**\nDe omdraai-truc helpt." },
          ],
          woorden: [
            { woord: "ja/nee-vraag", uitleg: "Vraag waarop antwoord 'ja' of 'nee' kan zijn." },
            { woord: "vraag-opbouw", uitleg: "Werkwoord eerst, dan persoon (in het Nederlands)." },
          ],
          theorie: "Toets-truc vraag-herkenning: **Werkwoord vooraan** = vraag (Heb je..., Ga je..., Komt zij...). **Persoon vooraan** = mededeling (Je hebt..., Jij gaat..., Zij komt...). Hoofdregel om snel te zien.",
          voorbeelden: [
            { type: "stap", tekst: "'Ga jij mee?' = vraag (Ga + jij)." },
            { type: "stap", tekst: "'Jij gaat mee.' = mededeling (Jij + gaat)." },
            { type: "stap", tekst: "'Heeft Anna een hond?' = vraag (Heeft + Anna)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Werkwoord vooraan → vraag → ?. Werkwoord midden/achter → mededeling → ." },
          ],
          niveaus: {
            basis: "? (vraagteken).",
            simpeler: "'Heb je...?' = vraag-opbouw. Vraagteken aan eind.",
            nogSimpeler: "?",
          },
        },
      },
      {
        q: "*'Ik ga vandaag fietsen'* — welk leesteken?",
        options: [".", "?", "!", ","],
        answer: 0,
        wrongHints: [null, "Geen vraag.", "Geen sterke emotie.", "Komma sluit niet af."],
      },
      {
        q: "*'STOP'* — welk leesteken hoort hier?",
        options: ["!", ".", "?", ","],
        answer: 0,
        wrongHints: [null, "Een punt is te rustig voor een woord dat je roept.", "'STOP' is geen vraag: je verwacht geen antwoord.", "Een komma sluit een zin niet af."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*'Hoe laat begint de film'* — welk leesteken hoort aan het eind?",
        options: ["?", ".", "!", ","],
        answer: 0,
        wrongHints: [
          null,
          "Met welk woord begint de zin? Verwacht je een antwoord?",
          null,
          "Een komma sluit geen zin af.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vraagwoord vooraan",
              tekst: "De zin begint met **Hoe**, een vraagwoord. Je verwacht een antwoord ('om zeven uur'). Dus een **vraagteken**.",
            },
          ],
          woorden: [
            {
              woord: "vraagwoord",
              uitleg: "Wat / wie / waar / wanneer / waarom / hoe.",
            },
          ],
          theorie: "Begint een zin met een vraagwoord en verwacht je een antwoord? Dan eindigt hij met ?.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Wanneer komt opa?' → vraagwoord 'Wanneer'.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Kun je erop antwoorden? Dan is het een vraag.",
            },
          ],
          niveaus: {
            basis: "Lees de zin hardop. Verwacht je na deze zin een antwoord van iemand?",
            simpeler: "De zin begint met 'Hoe'. Zinnen die met een vraagwoord beginnen, zijn vragen. Welk teken hoort achter een vraag?",
            nogSimpeler: "Het is een vraag, dus er hoort een vraagteken (?) achter.",
          },
        },
      },
      {
        q: "Welke zin is een **vraag**?",
        options: ["Wil je een koekje", "Ik wil een koekje", "Hier is een koekje", "Jij krijgt een koekje"],
        answer: 0,
        wrongHints: [null, "Waar staat het werkwoord in elke zin: vooraan of verderop?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Werkwoord vooraan",
              tekst: "In '**Wil** je een koekje' staat het werkwoord **vooraan**, daarna pas 'je'. Dat is de opbouw van een vraag. Je verwacht 'ja' of 'nee'.",
            },
          ],
          woorden: [
            {
              woord: "ja/nee-vraag",
              uitleg: "Een vraag waarop je ja of nee kunt zeggen.",
            },
          ],
          theorie: "Werkwoord vooraan (Wil je...?, Heb je...?) = vraag. Persoon vooraan (Ik wil..., Jij krijgt...) = gewone zin.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Kom jij ook?' = vraag. 'Jij komt ook.' = gewone zin.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Kun je er ja of nee op zeggen? Dan is het een vraag.",
            },
          ],
          niveaus: {
            basis: "Bij welke zin verwacht je een antwoord, zoals 'ja' of 'nee'?",
            simpeler: "Kijk waar het werkwoord staat. Bij een vraag staat het werkwoord vaak helemaal vooraan.",
            nogSimpeler: "'Wil je een koekje?' is de vraag: het werkwoord 'wil' staat vooraan en je verwacht ja of nee.",
          },
        },
      },
      {
        q: "Waaraan zie je dat *'Gaat de bus om acht uur'* een **vraag** is?",
        options: ["Het werkwoord staat vooraan", "Er staat een tijd in de zin", "Er staat geen punt achter", "Het eerste woord heeft een hoofdletter"],
        answer: 0,
        wrongHints: [null, "Ook 'De bus gaat om acht uur.' heeft een tijd. Is dat een vraag?", "Er staat ook geen ander teken achter. Waar moet je dan op letten?", "Elke zin begint met een hoofdletter. Maakt dat er een vraag van?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Werkwoord vooraan",
              tekst: "**Gaat** is het werkwoord en staat helemaal vooraan. Daarna komt 'de bus'. Zo bouw je een vraag. Gewone zin: 'De bus gaat om acht uur.'",
            },
          ],
          woorden: [
            {
              woord: "werkwoord",
              uitleg: "Een woord dat zegt wat iemand doet, zoals gaat of loopt.",
            },
          ],
          theorie: "Werkwoord vooraan = vraag. Onderwerp vooraan = gewone zin.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Komt Lisa morgen?' (werkwoord eerst) ↔ 'Lisa komt morgen.'",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Draai de zin om. Staat het werkwoord eerst? Dan is het een vraag.",
            },
          ],
          niveaus: {
            basis: "Vergelijk met de gewone zin 'De bus gaat om acht uur.' Wat is er anders aan de volgorde van de woorden?",
            simpeler: "Kijk naar het eerste woord: 'Gaat'. Wat voor soort woord is dat?",
            nogSimpeler: "Het werkwoord 'gaat' staat vooraan. Daaraan herken je een vraag.",
          },
        },
      },
    ],
  },

  // STAP 4: Komma's
  {
    title: "Komma's — kleine pauzes in een zin",
    explanation:
      "Een **komma (,)** is een **kleine pauze** in een zin. Maar wanneer zet je er een?\n\n**Regel 1 — opsomming**:\nBij meer dan 2 dingen achter elkaar.\n• 'Ik kocht **appels, peren, druiven en bananen**.'\n• Komma's tussen items.\n• **Vóór 'en' GEEN komma** *(bij 2 items)*.\n• Maar bij 3+ items en de laatste begint met 'en': komma's tussen tussenliggende items, geen komma vóór 'en'.\n\n**Regel 2 — bijzin/aanvulling**:\nAls je een extra zin tussenvoegt.\n• 'De jongen, **die een blauwe trui had**, rende weg.'\n• Komma's omsluiten de bijzin.\n\n**Regel 3 — vóór bepaalde woorden** (omdat / maar / als / wanneer):\n• 'Ik ben moe**,** omdat ik laat opbleef.'\n• 'Hij komt mee**,** als het droog blijft.'\n• 'Ze fietst hard**,** maar wordt toch nat.'\n\n**Regel 4 — iemand aanhalen (directe rede)**:\n• 'Anna zei**:** \"Ik kom morgen.\"'\n• **Dubbele punt** vóór de aanhalingstekens *(zie ook stap E voor de hele regel)*.\n\n**Toets-truc — lees-pauze**:\nLees de zin hardop. Pauzeer je heel even? Daar staat vaak een komma.\n\n*'Toen het regende, gingen we naar binnen.'*\n• 'Toen het regende' (pauze) 'gingen we naar binnen.'\n• Komma op de pauze.\n\n**Veel-voorkomende fouten**:\n• Komma vóór 'en' bij 2 items: ❌ 'Anna en, Tom' → ✓ 'Anna en Tom'.\n• Geen komma waar wel een lange pauze is.\n• Komma in plaats van een punt — als de 2 delen zelfstandige zinnen zijn, gebruik een punt.",
    checks: [
      {
        q: "Welke zin heeft komma's op de **juiste plek**?",
        options: ["Ik kocht appels, peren en druiven.", "Ik kocht appels peren, en druiven.", "Ik kocht appels, peren, en druiven.", "Ik, kocht appels peren en druiven."],
        answer: 0,
        wrongHints: [null, "Kijk waar de komma staat: tussen twee dingen uit het lijstje, of vlak vóór 'en'?", "Geen komma vóór het laatste 'en'.", "Geen komma na werkwoord zonder reden."],
        uitlegPad: {
          stappen: [
            { titel: "Regel voor opsommingen", tekst: "Bij een opsomming (3 of meer items achter elkaar) zet je **komma's tussen de items**. MAAR: **vóór het laatste 'en' GEEN komma** — dat is de Nederlandse regel." },
            { titel: "Stap voor stap door de zin", tekst: "'Ik kocht **appels**, **peren** en **druiven**.'\n• Appels → komma erna (want er volgt nog meer)\n• Peren → 'en' volgt direct, dus GEEN komma vóór 'en'\n• Druiven → laatste item, daarna punt." },
            { titel: "Verschil met Engels", tekst: "In het Engels gebruiken ze soms wél een komma vóór 'and' (Oxford-komma). In het **Nederlands NIET**. Onthoud: NL-regel = geen komma vóór 'en'." },
          ],
          woorden: [
            { woord: "opsomming", uitleg: "Lijstje van 3 of meer items in een zin." },
            { woord: "Oxford-komma", uitleg: "Engelse komma vóór 'and' (NL gebruikt deze niet)." },
          ],
          theorie: "Toets-regel komma's bij opsomming:\n• 2 items: GEEN komma. 'Anna en Tom.'\n• 3+ items: komma's TUSSEN items, NIET vóór 'en'. 'Anna, Tom en Lisa.'\n• Eind: punt.",
          voorbeelden: [
            { type: "stap", tekst: "'Ik wil rood, blauw, geel en groen.' = correct (3+ items, geen komma vóór 'en')." },
            { type: "stap", tekst: "'Ik wil rood en blauw.' = correct (2 items, geen komma)." },
            { type: "stap", tekst: "'Ik wil rood, blauw, geel, en groen.' = FOUT (komma vóór 'en' is Engelse stijl)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Komma's TUSSEN items. 'En' = de laatste verbinder, geen komma daarvoor. NL ≠ Engels." }],
          niveaus: {
            basis: "'Ik kocht appels, peren en druiven.'",
            simpeler: "Komma tussen items van opsomming. Voor laatste 'en' geen komma.",
            nogSimpeler: "Appels, peren en druiven.",
          },
        },
      },
      {
        q: "*'Ik ga tóch naar buiten ___ het regent.'* Welke komma met welk woord past op de lege plek?",
        options: [", maar", ", omdat", ", en", ", dus"],
        answer: 0,
        wrongHints: [null, "'Omdat' geeft een reden. Ga je naar buiten omdát het regent?", "'En' zet twee dingen gewoon naast elkaar. Klopt dat hier?", "'Dus' geeft een gevolg. Ga je naar buiten doordat het regent?"],
        uitlegPad: {
          stappen: [
            { titel: "Tegenstelling = maar", tekst: "Je gaat ondanks de regen naar buiten. 'Maar' geeft tegenstelling. Komma altijd vóór 'maar'." },
          ],
          woorden: [{ woord: "tegenstelling", uitleg: "Twee dingen die niet bij elkaar lijken te passen." }],
          theorie: "Komma vóór 'maar', 'omdat', 'als', 'wanneer' = standaard bij zin-koppelingen.",
          voorbeelden: [{ type: "stap", tekst: "'Ik ga naar buiten, maar het regent.' = ondanks regen ga ik." }],
          basiskennis: [{ onderwerp: "Welk woord?", uitleg: "Maar = tegenstelling. Omdat = reden. Als = voorwaarde." }],
          niveaus: {
            basis: ", maar.",
            simpeler: "Tegenstelling tussen 'naar buiten' en 'regen'. Gebruik 'maar' met komma ervoor.",
            nogSimpeler: ", maar",
          },
        },
      },
      {
        q: "Welke zin heeft **GEEN komma nodig**?",
        options: ["Anna en Tom gaan naar school.", "Anna gaat naar school maar Tom blijft thuis.", "Anna die ziek is blijft thuis.", "Toen het regende gingen we naar binnen."],
        answer: 0,
        wrongHints: [null, "Twee zinnen met 'maar' ertussen: hoor je daar een pauze?", "'die ziek is' is extra informatie over Anna. Hoe zet je die apart?", "Waar stopt het eerste deel van de zin? Hoor je daar een pauze?"],
      },
      {
        q: "*'Lisa zei ___ ik kom morgen.'* Welk leesteken hoort op de lege plek?",
        options: [": (dubbele punt)", ", (komma)", ". (punt)", "geen leesteken"],
        answer: 0,
        wrongHints: [null, "Een komma is een pauze in de zin — welk teken kondigt aan wat iemand gaat zeggen?", "Punt sluit zin te vroeg af.", "Lees de zin hardop: wat zegt Lisa precies, en hoe laat je zien dat dat begint?"],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoeveel **komma's** horen in: *'Ik heb een pen een gum een liniaal en een schrift.'*?",
        options: ["2", "3", "1", "4"],
        answer: 0,
        wrongHints: [null, "Komt er ook een komma vóór 'en'?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Komma's tussen de dingen",
              tekst: "Het lijstje is: een pen / een gum / een liniaal / en een schrift.\n• Na 'pen' een komma.\n• Na 'gum' een komma.\n• Vóór 'en' **geen** komma.",
            },
            {
              titel: "Uitkomst",
              tekst: "'Ik heb een pen, een gum, een liniaal en een schrift.' → **2 komma's**.",
            },
          ],
          woorden: [
            {
              woord: "opsomming",
              uitleg: "Een lijstje van dingen in een zin.",
            },
          ],
          theorie: "Bij een opsomming komen komma's tussen de dingen, maar niet vóór het laatste 'en'.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Ik zie een kat, een hond en een muis.' → 1 komma.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tel de dingen. Het aantal komma's is meestal 2 minder dan het aantal dingen.",
            },
          ],
          niveaus: {
            basis: "In een opsomming zet je een komma tussen de dingen, maar niet vóór 'en'.",
            simpeler: "Tel de dingen die je hebt. Tussen elk paar komt een komma, behalve waar 'en' staat.",
            nogSimpeler: "Na 'pen' en na 'gum' komt een komma, dus 2 komma's.",
          },
        },
      },
      {
        q: "Welke zin heeft de komma op de **goede plek**?",
        options: [
          "Ik blijf binnen, omdat ik ziek ben.",
          "Ik blijf, binnen omdat ik ziek ben.",
          "Ik blijf binnen omdat, ik ziek ben.",
          "Ik, blijf binnen omdat ik ziek ben.",
        ],
        answer: 0,
        wrongHints: [null, "Waar maak je een pauze als je de zin hardop leest?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Komma vóór 'omdat'",
              tekst: "De komma komt **vlak vóór 'omdat'**. Daar begint het stukje met de reden.",
            },
          ],
          woorden: [
            {
              woord: "omdat",
              uitleg: "Woord dat een reden geeft.",
            },
          ],
          theorie: "Komma vóór woorden als omdat, maar, als, wanneer, als daar een nieuw stuk zin begint.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Ik ben blij, omdat het vakantie is.'",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Lees hardop. De pauze valt vóór 'omdat'.",
            },
          ],
          niveaus: {
            basis: "Lees de zin hardop. De komma staat waar je even pauzeert.",
            simpeler: "De komma staat vóór 'omdat'. Daar begint de reden.",
            nogSimpeler: "De komma komt vóór 'omdat': Ik blijf binnen, omdat ik ziek ben.",
          },
        },
      },
      {
        q: "Waar hoort de komma in: *'Als de bel gaat ruimen we op.'*?",
        options: ["Na 'gaat'", "Na 'Als'", "Na 'bel'", "Na 'ruimen'"],
        answer: 0,
        wrongHints: [null, "Lees de zin hardop. Waar stop je even?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerste stukje afmaken",
              tekst: "Het eerste stukje is 'Als de bel gaat'. Daarna begint het tweede stukje: 'ruimen we op'. Daartussen komt de komma.",
            },
          ],
          woorden: [
            {
              woord: "pauze",
              uitleg: "Een korte stop bij het lezen.",
            },
          ],
          theorie: "Begint een zin met 'Als ...' of 'Toen ...'? Dan komt er een komma na dat eerste stukje.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Toen het donker werd, gingen we slapen.'",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zoek waar het tweede werkwoord-stuk begint. Daar vóór komt de komma.",
            },
          ],
          niveaus: {
            basis: "De zin heeft twee delen. De komma komt waar het eerste deel stopt.",
            simpeler: "Het eerste deel begint met 'Als'. Na welk woord is dat deel klaar?",
            nogSimpeler: "De komma komt na 'gaat': Als de bel gaat, ruimen we op.",
          },
        },
      },
      {
        q: "In welke zin staat een komma **fout**?",
        options: [
          "Ik heb, een fiets.",
          "Ik heb een fiets, een step en een skateboard.",
          "Ik ben moe, omdat ik hard heb gerend.",
          "Als het mooi weer is, gaan we zwemmen.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dit is een opsomming. Staan de komma's tussen de dingen?",
          null,
          "Is er na 'is' een pauze?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Komma zonder reden",
              tekst: "In 'Ik heb, een fiets.' is er geen opsomming, geen extra stukje en geen nieuw stuk zin. Daar hoort dus **geen komma**.",
            },
          ],
          woorden: [
            {
              woord: "komma",
              uitleg: "Het teken , voor een pauze of een opsomming.",
            },
          ],
          theorie: "Een komma zet je bij een opsomming, rond extra informatie of vóór een nieuw stuk zin. Niet zomaar midden in een korte zin.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Ik heb een fiets.' → geen komma nodig.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Lees hardop. Stop je echt na 'heb'? Nee, dus geen komma.",
            },
          ],
          niveaus: {
            basis: "Een komma staat bij een opsomming, bij een extra stukje of tussen twee delen van een zin.",
            simpeler: "Zoek de korte zin zonder opsomming en zonder tweede deel. Hoort daar wel een komma?",
            nogSimpeler: "In 'Ik heb, een fiets.' hoort geen komma. Goed is: Ik heb een fiets.",
          },
        },
      },
    ],
  },

  // STAP 5: Aanhalingstekens
  {
    title: "Aanhalingstekens — wat iemand zegt",
    explanation:
      "**Aanhalingstekens** zijn de tekens '' of \"\" — ze geven aan **wat iemand zegt**.\n\n**Voorbeeld**:\n*'Mama zei: **\"Ga je tanden poetsen.\"**'*\n\nDe woorden tussen de aanhalingstekens zijn precies wat mama zei.\n\n**Toets-stappenplan voor directe rede**:\n1. Wie zegt iets? Bijv. 'Mama zegt'.\n2. **Dubbele punt** (:) na 'zegt' / 'zei' / 'roept'.\n3. **Aanhalingsteken openen** (\").\n4. Hoofdletter aan het begin van wat hij/zij zegt.\n5. Leesteken aan eind van het gezegde (binnen aanhalingstekens).\n6. **Aanhalingsteken sluiten** (\").\n\n**Voorbeeld goed**:\n*'Tom roept: \"Pas op!\"'*\n• Komma/dubbele punt na 'roept': → ':' (dubbele punt is standaard).\n• Hoofdletter bij 'Pas'.\n• Uitroepteken binnen aanhalingstekens.\n\n**In het echt zie je vaak deze 3 varianten**:\n• \"Hier de tekst.\" *(dubbele aanhalingstekens)*\n• 'Hier de tekst.' *(enkele aanhalingstekens, veel in boeken)*\n• „Hier de tekst.\" *(oudere stijl)*\n\nAlle drie zijn goed Nederlands; bij de toets zie je meestal de eerste. Wat belangrijk is: **begin én eind hetzelfde type** aanhalingsteken.\n\n**Veel-voorkomende fout**:\n• Aanhalingstekens vergeten te sluiten.\n• Geen dubbele punt vóór de aanhaling.\n• Geen hoofdletter bij 1e woord van de aanhaling.\n• Leesteken (.!?) buiten de aanhalingstekens i.p.v. binnen.",
    checks: [
      {
        q: "Welke schrijfwijze is **correct**?",
        options: ["Anna zei: \"Ik kom morgen.\"", "Anna zei: ik kom morgen", "anna zei \"Ik kom morgen\"", "Anna zei \"Ik kom morgen\""],
        answer: 0,
        wrongHints: [null, "Staan de woorden van Anna tussen aanhalingstekens? En hoe begint en eindigt wat ze zegt?", "Kijk naar de eerste letter van de zin. En wat hoort er direct na 'zei' te staan?", "Wat hoort er direct na 'zei' te staan? En waarmee eindigt wat Anna zegt?"],
      },
      {
        q: "Waar zet je het **uitroepteken** in: *Tom roept: \"Pas op\"*?",
        options: ["Binnen de aanhalingstekens", "Buiten de aanhalingstekens", "Na het woord 'roept'", "Na het woord 'Pas'"],
        answer: 0,
        wrongHints: [null, "Hoort het uitroepteken bij wat Tom roept, of bij de zin eromheen?", "Roept Tom het woord 'roept'? Waar hoort het teken bij?", "Lees 'Pas op' hardop: waar eindigt de uitroep?"],
      },
      {
        q: "*'mama zei kom maar mee'* — hoe schrijf je dit netjes?",
        options: ["Mama zei: \"Kom maar mee.\"", "Mama zei \"Kom maar mee\".", "mama zei \"Kom maar mee\"", "Mama zei: kom maar mee."],
        answer: 0,
        wrongHints: [null, "Punt moet binnen aanhalingstekens, dubbele punt mist.", "Mist hoofdletter bij 'Mama'.", "Mist aanhalingstekens."],
        uitlegPad: {
          stappen: [
            { titel: "5 dingen", tekst: "Hoofdletter aan begin (Mama). Dubbele punt na zei (:). Aanhalingstekens openen (\"). Hoofdletter aan begin (Kom). Leesteken binnen aanhalingstekens (.\")." },
          ],
          woorden: [{ woord: "directe rede", uitleg: "Letterlijk wat iemand zegt, tussen aanhalingstekens." }],
          theorie: "Standaard volgorde: Wie zei: \"Inhoud.\"",
          voorbeelden: [{ type: "stap", tekst: "Mama zei: \"Kom maar mee.\" — netjes opgebouwd." }],
          basiskennis: [{ onderwerp: "5 onderdelen", uitleg: "Hoofdletter / dubbele punt / aanhalen / hoofdletter / leesteken." }],
          niveaus: {
            basis: "Controleer elke zin: staat er een dubbele punt na 'zei', staan de woorden van mama tussen aanhalingstekens en staat de punt binnen?",
            simpeler: "5 dingen nodig: Hoofdletter / dubbele punt / aanhalingstekens / hoofdletter / leesteken binnen. Het goede antwoord heeft alles.",
            nogSimpeler: "Truc: Wie zei : \"Inhoud .\" — 5 dingen op rij.",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is er **fout** in: *Sem riep: \"Kijk eens!*",
        options: ["Het aanhalingsteken na 'eens' mist", "De dubbele punt na 'riep' mist", "De hoofdletter van 'Kijk' mist", "Het uitroepteken na 'eens' mist"],
        answer: 0,
        wrongHints: [null, "Kijk goed achter 'riep'.", "Kijk naar de eerste letter van 'Kijk'.", "Kijk wat er direct achter 'eens' staat."],
        uitlegPad: {
          stappen: [
            {
              titel: "Openen én sluiten",
              tekst: "Aanhalingstekens komen altijd **in paren**: één aan het begin en één aan het eind. Hier is er wel een geopend, maar niet gesloten. Goed: Sem riep: \"Kijk eens!\"",
            },
          ],
          woorden: [
            {
              woord: "aanhalingstekens",
              uitleg: "De tekens \" \" rond wat iemand zegt.",
            },
          ],
          theorie: "Wat je opent, moet je ook sluiten. Het leesteken staat vlak vóór het sluitende aanhalingsteken.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Fout: Ik zei: \"Hoi. → Goed: Ik zei: \"Hoi.\"",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Veelgemaakte fout",
              uitleg: "Aanhalingstekens vergeten te sluiten.",
            },
          ],
          niveaus: {
            basis: "Aanhalingstekens komen altijd in paren. Tel hoeveel aanhalingstekens je in de zin ziet.",
            simpeler: "Er is er één geopend vóór 'Kijk', maar na het uitroepteken is hij niet gesloten.",
            nogSimpeler: "Sluit-teken mist.",
          },
        },
      },
      {
        q: "Welke schrijfwijze is **goed**?",
        options: [
          "Noor zei: 'Ik ben klaar.'",
          "Noor zei: \"Ik ben klaar.'",
          "Noor zei: 'Ik ben klaar.\"",
          "Noor zei: 'Ik ben klaar'.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Is het teken aan het begin hetzelfde als het teken aan het eind?",
          null,
          "Waar hoort de punt: binnen of buiten?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zelfde soort teken",
              tekst: "Enkele aanhalingstekens (' ') en dubbele (\" \") zijn allebei goed. Maar **begin en eind moeten hetzelfde type** zijn.",
            },
            {
              titel: "Punt binnen",
              tekst: "De punt hoort **binnen** de aanhalingstekens, vóór het sluitteken.",
            },
          ],
          woorden: [
            {
              woord: "enkele aanhalingstekens",
              uitleg: "De tekens ' ', vaak gebruikt in boeken.",
            },
          ],
          theorie: "Begin en eind hetzelfde type aanhalingsteken. Leesteken binnen de aanhalingstekens.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Opa zei: 'Goedemorgen.' → begin ' en eind ', punt binnen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Kijk naar het eerste en het laatste teken: zijn ze hetzelfde?",
            },
          ],
          niveaus: {
            basis: "Kijk naar het eerste en het laatste aanhalingsteken: zijn ze hetzelfde? En staat de punt binnen of buiten?",
            simpeler: "Begin en eind zijn allebei enkele aanhalingstekens, en de punt staat binnen.",
            nogSimpeler: "' ... .'",
          },
        },
      },
      {
        q: "Welk woord zie je vaak vlak vóór de dubbele punt en de aanhalingstekens?",
        options: ["roept", "omdat", "maar", "en"],
        answer: 0,
        wrongHints: [null, "Dit woord geeft een reden. Kondigt het aan dat iemand praat?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Praat-woorden",
              tekst: "Vóór de dubbele punt staat een woord dat vertelt dat iemand **praat**: zegt, zei, roept, vraagt. Daarna komt wat er gezegd wordt.",
            },
          ],
          woorden: [
            {
              woord: "praat-woord",
              uitleg: "Een woord als zegt, zei, roept of vraagt.",
            },
          ],
          theorie: "Wie + praat-woord + : + \"wat er gezegd wordt\".",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Bram roept: \"Ik heb gewonnen!\"",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zoek het woord dat zegt dát iemand praat. Daarna komt de dubbele punt.",
            },
          ],
          niveaus: {
            basis: "Zoek het woord dat vertelt dát iemand praat. Daarna komt de dubbele punt.",
            simpeler: "'Roept' vertelt dat iemand praat. Daarna komt de dubbele punt.",
            nogSimpeler: "roept:",
          },
        },
      },
      {
        q: "In welke zin horen **aanhalingstekens**?",
        options: ["Bram zegt: ik heb dorst.", "Bram zegt dat hij dorst heeft.", "Bram heeft na het rennen dorst.", "Bram vraagt om een glas water."],
        answer: 0,
        wrongHints: [null, "Staan hier de woorden precies zoals Bram ze zelf zegt?", "Praat er iemand in deze zin?", "Staan Brams eigen woorden in de zin, of vertelt iemand wat hij doet?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Iemand praat",
              tekst: "Alleen in 'Bram zegt: ...' staan Brams eigen woorden precies zoals hij ze zegt. In 'Bram zegt dat hij dorst heeft' vertel je het na: daar horen geen aanhalingstekens. Wat Bram zelf zegt, zet je tussen aanhalingstekens: Bram zegt: \"Ik heb dorst.\"",
            },
          ],
          woorden: [
            {
              woord: "aanhalingstekens",
              uitleg: "De tekens \" \" rond wat iemand zegt.",
            },
          ],
          theorie: "Aanhalingstekens alleen bij woorden die iemand letterlijk zegt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Mila zegt: \"Ik ben moe.\"",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Zie je zegt, zei of roept met een dubbele punt? Dan komen er aanhalingstekens.",
            },
          ],
          niveaus: {
            basis: "Zoek de zin waarin je precies leest wat Bram zelf zegt, met zijn eigen woorden.",
            simpeler: "Daar staan Brams eigen woorden. Die moeten tussen aanhalingstekens: Bram zegt: \"Ik heb dorst.\"",
            nogSimpeler: "Bram zegt: \"...\"",
          },
        },
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — interpunctie-mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: hoofdletters, leestekens, komma's, aanhalingstekens.\n\n**Tip**: bij twijfel lees de zin hardop. Pauzeer je? → komma. Verwacht je antwoord? → vraagteken. Begint zin? → hoofdletter.\n\nVeel succes!",
    checks: [
      {
        q: "Welke zin is **goed**?",
        options: ["Anna woont in Amsterdam.", "anna woont in amsterdam.", "Anna woont in amsterdam", "anna Woont in Amsterdam."],
        answer: 0,
        wrongHints: [null, "Kijk naar de eerste letter van de zin en van de namen.", "Kijk naar de plaatsnaam en naar het einde van de zin.", "Krijgt 'woont' midden in de zin een hoofdletter?"],
      },
      {
        q: "Hoe eindigt de zin *'Wat is je naam'*?",
        options: ["?", ".", "!", ","],
        answer: 0,
        wrongHints: [null, "Een punt zet je achter een zin die iets vertelt. Vertelt deze zin iets, of vraagt hij iets?", "Een uitroepteken zet je achter een uitroep. Is dit een uitroep?", "Met een komma maak je een zin niet af."],
      },
      {
        q: "*'Ik kocht appels ___ peren ___ druiven ___ bananen.'* Wat hoort er op de drie lege plekken?",
        options: [", , en", "en en en", ", en ,", ", , ,"],
        answer: 0,
        wrongHints: [null, "Drie keer 'en' achter elkaar: klinkt dat goed als je het hardop leest?", "Waar staat 'en' in een opsomming meestal?", "Wat zet je tussen de laatste twee dingen van een opsomming?"],
      },
      {
        q: "Hoe schrijf je *'pas op er rijdt een auto'* netjes op?",
        options: ["Pas op! Er rijdt een auto.", "pas op er rijdt een auto.", "Pas op er rijdt een auto.", "Pas op, er rijdt een auto?"],
        answer: 0,
        wrongHints: [null, "Hoe begint een zin, en hoe eindigt hij?", "Lees het hardop: zijn dit twee zinnen of één? En roep je 'pas op' rustig?", "Vraag je hier iets aan iemand?"],
      },
      {
        q: "Welke woorden krijgen een **hoofdletter** in een zin?",
        options: ["Namen, landen en het eerste woord", "Namen, dagen en het eerste woord", "Namen, landen en maanden", "Landen, seizoenen en het eerste woord"],
        answer: 0,
        wrongHints: [null, "Schrijf je 'maandag' midden in een zin met een hoofdletter?", "Hoe schrijf je 'januari' midden in een zin?", "Schrijf je 'zomer' midden in een zin met een hoofdletter?"],
      },
      {
        q: "*Tom zei: ___* Hoe schrijf je **ik kom morgen** goed achter de dubbele punt?",
        options: ["\"Ik kom morgen.\"", "Ik kom morgen.", "\"ik kom morgen\"", "'Ik kom morgen'"],
        answer: 0,
        wrongHints: [null, "Hoe laat je zien welke woorden Tom precies zegt?", "Kijk naar de eerste letter en naar het einde van wat Tom zegt.", "Kijk naar het einde: waar is het leesteken van de zin gebleven?"],
      },
      { q: "Welke zin heeft de **juiste komma**?", options: ["Ik kocht brood, kaas en melk.","Ik kocht brood kaas en melk.","Ik kocht, brood kaas en melk.","Ik kocht brood, kaas en, melk."], answer: 0, wrongHints: [null, "Komma's ontbreken.", "Pauzeer je direct na 'kocht'?", "Kijk goed naar het woordje 'en': hoort daar een komma bij in een opsomming?"] },
      { q: "Welk **leesteken** sluit een vraag af?", options: ["Vraagteken (?)","Punt (.)","Komma (,)","Uitroepteken (!)"], answer: 0, wrongHints: [null, "Een punt zet je achter een gewone zin die iets vertelt.", "Een komma staat midden in een zin, niet aan het eind.", "Dit teken zet je achter een zin met veel gevoel."] },
      { q: "Welk **leesteken** zet je achter een uitroep?", options: ["!","?",".",","], answer: 0, wrongHints: [null, "Dit teken zet je achter een vraag.", "Dit teken zet je achter een gewone zin die iets vertelt.", "Een komma staat midden in een zin, niet aan het eind."] },
      { q: "Wanneer krijgt een woord **midden in een zin** een hoofdletter?", options: ["Als het een naam is", "Als het een dag of maand is", "Als het een belangrijk woord is", "Als er een komma vóór staat"], answer: 0, wrongHints: [null, "Hoe schrijf je 'maandag' in 'Ik kom op maandag'?", "Krijgt 'fiets' een hoofdletter als het het belangrijkste woord is?", "Kijk naar 'Ja, dat klopt.' Krijgt 'dat' een hoofdletter?"] },
      { q: "Welke zin is **fout**?", options: ["mijn naam is anna.","Mijn naam is Anna.","Hoe heet jij?","Hallo!"], answer: 0, wrongHints: [null, "Deze zin klopt. Kijk bij elke zin naar de eerste letter en naar de namen.", "Deze zin klopt: hoofdletter en vraagteken staan goed. Controleer de andere zinnen ook zo.", "Deze klopt: een groet mag met een uitroepteken. Kijk bij de andere zinnen naar de hoofdletters."] },
      { q: "Waar zet je een **dubbele punt (:)** vóór?", options: ["Een opsomming of wat iemand zegt", "Een vraag of een uitroep", "Het einde van een gewone zin", "Een reden, zoals met 'omdat'"], answer: 0, wrongHints: [null, "Daar horen een vraagteken of uitroepteken bij.", "Daar hoort een punt bij.", "Vóór 'omdat' zet je soms een komma, geen dubbele punt."] },
      { q: "Wat verbindt een **puntkomma (;)**?", options: ["Twee zinnen die bij elkaar horen", "Twee woorden tot één woord", "Een naam en de rest van de zin", "Een vraag en het antwoord erop"], answer: 0, wrongHints: [null, "Twee woorden aan elkaar plakken doe je zonder teken, of soms met een streepje.", "Als je iemand aanspreekt, gebruik je een komma: 'Kom je, Lisa?'", "Een vraag en het antwoord schrijf je meestal als losse zinnen, elk met een eigen eindteken."] },
      { q: "Welke zin heeft **goede aanhalingstekens**?", options: ["Hij zei: \"Kom!\"","Hij zei: Kom!","\"Hij zei kom!\"","Hij zei \"kom!"], answer: 0, wrongHints: [null, "Hoe zie je hier welk woord hij precies zegt?", "Zei hij 'Hij zei kom', of alleen het woord 'Kom'?", "Tel de aanhalingstekens: staat er één aan het begin én één aan het eind?"] },
      { q: "Welke zin is goed?", options: ["Ik ga naar Amsterdam.","ik ga naar amsterdam.","ik ga naar Amsterdam.","Ik ga naar amsterdam."], answer: 0, wrongHints: [null, "Kijk naar het eerste woord én naar de plaatsnaam.", "Met wat voor letter begint een zin?", "Amsterdam is een naam. Hoe schrijf je die?"] },
      { q: "Waarvoor kun je een **lange streep (—)** gebruiken?", options: ["Een extra stukje uitleg in de zin", "Twee delen van één woord", "Het einde van een zin", "Een vraag of een uitroep"], answer: 0, wrongHints: [null, "Dat doet het korte streepje, zoals in 'zee-egel'. De lange streep is iets anders.", "Een zin sluit je af met een punt, vraagteken of uitroepteken.", "Daar zijn vraag- en uitroeptekens voor."] },
      { q: "Welke zin heeft een **fout vraagteken**?", options: ["Ik ga slapen?","Ga je mee?","Hoe heet je?","Waar is mijn boek?"], answer: 0, wrongHints: [null, "Dit is een échte vraag, dus het vraagteken klopt. Lees de andere zinnen ook hardop.", "Hier vraag je iets, dus het vraagteken hoort erbij. Controleer de andere zinnen.", "Dit is een vraag, dus het vraagteken klopt. Lees de andere zinnen ook hardop."] },
      { q: "In welke zin staat een **hoofdletter** op een verkeerde plek?", options: ["Ik Eet brood","Ik eet brood","Ik eet brood.","Eet jij brood?"], answer: 0, wrongHints: [null, "Hier mist de punt, maar de hoofdletters staan goed. Kijk bij elke zin naar alle hoofdletters.", "Deze zin klopt. Kijk bij de andere zinnen naar elke hoofdletter.", "Een zin begint met een hoofdletter, dus deze klopt. Kijk bij de andere zinnen naar elke hoofdletter."] },
      { q: "Wat staat tussen **haakjes ()**?", options: ["Extra uitleg bij de zin", "Een vraag aan de lezer", "De naam van de schrijver", "Het belangrijkste van de zin"], answer: 0, wrongHints: [null, "Daar is het vraagteken voor.", "Er kán een naam tussen staan, maar daar zijn haakjes niet voor bedoeld.", "Zou je het belangrijkste deel van een zin tussen haakjes wegstoppen?"] },
      { q: "Welke zin heeft de **juiste komma's** rond de extra informatie?", options: ["Mijn opa, die 80 is, fietst nog elke dag.","Mijn opa die 80 is, fietst nog elke dag.","Mijn opa die 80 is fietst nog elke dag.","Mijn opa, die 80 is fietst nog elke dag."], answer: 0, wrongHints: [null, "Hier staat maar aan één kant van de extra informatie een komma. Hoort er aan beide kanten een?", "Hier staan helemaal geen komma's. Welke woorden vertellen iets extra's over opa?", "Hier staat maar aan één kant van de extra informatie een komma. Hoort er aan beide kanten een?"] },
      { q: "Welke afkorting krijgt **geen** hoofdletter?", options: ["bv.","NL","EU","VS"], answer: 0, wrongHints: [null, "NL is de afkorting van Nederland. Hoe schrijf je een landnaam?", "EU staat voor Europese Unie. Is dat een naam?", "VS staat voor Verenigde Staten. Is dat een naam?"] },
      { q: "Welke zin heeft de **juiste interpunctie**?", options: ["Wat een mooie dag!","Wat een mooie dag.","wat een mooie dag!","Wat een mooie dag?"], answer: 0, wrongHints: [null, "Klinkt 'Wat een mooie dag' rustig, of vol gevoel?", "Kijk naar de eerste letter van de zin.", "Vraag je hier iets aan iemand?"] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const interpunctiePo = {
  id: "interpunctie-po",
  title: "Interpunctie & hoofdletters (groep 5-7)",
  emoji: "✏️",
  level: "groep5-7",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taalverzorging — interpunctie en hoofdletters",
  prerequisites: [
    { id: "woordsoorten-po", title: "Woordsoorten", niveau: "po-1F" },
    { id: "spelling", title: "Spelling — basis", niveau: "po-1F" },
  ],
  intro:
    "Interpunctie voor groep 5-7 — hoofdletters, punt, vraagteken, uitroepteken, komma's, aanhalingstekens. Met Doorstroomtoets-stijl oefenvragen en duidelijke regels. ~15 min.",
  triggerKeywords: [
    "interpunctie", "leestekens", "hoofdletter",
    "punt", "komma", "vraagteken", "uitroepteken",
    "aanhalingstekens", "taalverzorging",
  ],
  chapters,
  steps,
};

export default interpunctiePo;
