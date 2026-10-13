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
        options: ["Leestekens en hoofdletters", "Alleen leestekens", "Alleen hoofdletters", "Alle woorden"],
        answer: 0,
        wrongHints: [null, "Te beperkt — ook hoofdletters horen erbij.", "Te beperkt — ook leestekens.", "Nee, woorden zijn iets anders."],
      },
      {
        q: "**Waarom** gebruiken we leestekens?",
        options: ["Voor goed lezen", "Voor mooi maken", "Geen reden", "Om woorden te tellen"],
        answer: 0,
        wrongHints: [null, "Mooi maken is niet hun functie.", "Wél een reden — duidelijk lezen.", "Woorden tellen doen leestekens niet."],
      },
      {
        q: "Welk leesteken hoort bij een **vraag**?",
        options: ["?", ".", "!", ","],
        answer: 0,
        wrongHints: [null, "Punt is voor een gewone zin.", "Uitroepteken is voor verbazing.", "Komma zit midden in een zin."],
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
        q: "Welke krijgt **wél een hoofdletter** in een zin?",
        options: ["Een naam (Anna, Tom)", "Een dag (maandag)", "Een maand (januari)", "Een seizoen (zomer)"],
        answer: 0,
        wrongHints: [null, "Dagen niet — kleine letter.", "Maanden niet — kleine letter.", "Seizoenen niet — kleine letter."],
      },
      {
        q: "Welke schrijf je **MET hoofdletter** in een zin?",
        options: ["Frans (als taal)", "maandag", "december", "voorjaar"],
        answer: 0,
        wrongHints: [null, "Dagen niet — kleine letter.", "Maanden niet.", "Seizoenen niet."],
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
        wrongHints: [null, "Klopt qua schrijven.", "Klopt — Lisa is naam.", "Klopt — Spanje is land."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke woorden krijgen een hoofdletter in: *'wij wonen in de kerkstraat'*?",
        options: ["Wij en Kerkstraat", "Alleen Wij", "Alleen Kerkstraat", "Wij, Wonen en Kerkstraat"],
        answer: 0,
        wrongHints: [
          null,
          "Is de naam van een straat ook een naam?",
          "Kijk ook naar het eerste woord van de zin.",
          null,
        ],
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
        wrongHints: [null, "Krijgt een maand een hoofdletter?", "Kijk ook naar het eerste woord.", null],
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
        wrongHints: [null, "Te rustig voor 'STOP'.", "Geen vraag.", "Komma sluit niet af."],
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
            basis: "?",
            simpeler: "Het is een vraag (begint met 'Hoe'), dus een vraagteken.",
            nogSimpeler: "?",
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
            basis: "Wil je een koekje",
            simpeler: "Het werkwoord 'Wil' staat vooraan en je verwacht ja of nee. Dus een vraag.",
            nogSimpeler: "Wil je ...?",
          },
        },
      },
      {
        q: "Waaraan zie je dat *'Gaat de bus om acht uur'* een **vraag** is?",
        options: [
          "Het werkwoord staat vooraan",
          "Er staat een getal in",
          "De zin is kort",
          "Het gaat over een bus",
        ],
        answer: 0,
        wrongHints: [null, null, "Zou de zin anders zijn als hij lang was?", null],
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
            basis: "Het werkwoord staat vooraan.",
            simpeler: "'Gaat' staat vooraan. Dat is hoe een vraag begint.",
            nogSimpeler: "Werkwoord eerst.",
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
        q: "*'Ik ga tóch naar buiten ___ het regent'.* Welke komma + woord?",
        options: [", maar", ", omdat", "en", "—"],
        answer: 0,
        wrongHints: [null, "'Omdat' geeft reden — dan ga je juist NIET naar buiten.", "'En' opsommend — geen tegenstelling.", "Streepje is voor heel andere reden."],
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
        options: ["Anna en Tom gaan naar school.", "Anna gaat naar school, maar Tom blijft thuis.", "Anna, die ziek is, blijft thuis.", "Toen het regende, gingen we naar binnen."],
        answer: 0,
        wrongHints: [null, "Klopt qua komma — tegenstelling.", "Klopt qua komma's — bijzin.", "Klopt qua komma — bijzin vooraan."],
      },
      {
        q: "*'Lisa zei ___ ik kom morgen.'* Welk leesteken op de plek?",
        options: [": (dubbele punt)", ", (komma)", ". (punt)", "geen leesteken"],
        answer: 0,
        wrongHints: [null, "Een komma is een pauze in de zin — welk teken kondigt aan wat iemand gaat zeggen?", "Punt sluit zin te vroeg af.", "Wel leesteken nodig."],
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
            basis: "2",
            simpeler: "Na 'pen' en na 'gum' een komma. Vóór 'en' niet.",
            nogSimpeler: "2 komma's.",
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
            basis: "Ik blijf binnen, omdat ik ziek ben.",
            simpeler: "De komma staat vóór 'omdat'. Daar begint de reden.",
            nogSimpeler: "..., omdat ...",
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
            basis: "Na 'gaat'.",
            simpeler: "'Als de bel gaat, ruimen we op.' De pauze valt na 'gaat'.",
            nogSimpeler: "gaat, ruimen",
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
            basis: "Ik heb, een fiets.",
            simpeler: "In die korte zin is geen pauze. De komma hoort daar niet.",
            nogSimpeler: "Ik heb een fiets.",
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
        wrongHints: [null, "Mist aanhalingstekens, dubbele punt, hoofdletters.", "Mist hoofdletter aan begin zin + dubbele punt.", "Mist dubbele punt na 'zei'."],
      },
      {
        q: "Waar staat het **uitroepteken** bij: *'Tom roept: \"Pas op!\"'*?",
        options: ["Binnen aanhalingstekens", "Buiten aanhalingstekens", "Vóór 'roept'", "Niet nodig"],
        answer: 0,
        wrongHints: [null, "Niet juist — leesteken bij wat gezegd wordt.", "Niet vóór.", "Wél nodig — bij uitroep altijd !."],
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
            basis: "Mama zei: \"Kom maar mee.\"",
            simpeler: "5 dingen nodig: Hoofdletter / dubbele punt / aanhalingstekens / hoofdletter / leesteken binnen. Het goede antwoord heeft alles.",
            nogSimpeler: "Truc: Wie zei : \"Inhoud .\" — 5 dingen op rij.",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is er **fout** in: *Sem riep: \"Kijk eens!*",
        options: [
          "Het aanhalingsteken aan het eind mist",
          "De dubbele punt mist",
          "Er staat geen hoofdletter bij 'Kijk'",
          "Het uitroepteken mist",
        ],
        answer: 0,
        wrongHints: [null, "Kijk goed achter 'riep'.", null, null],
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
            basis: "Het aanhalingsteken aan het eind mist.",
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
            basis: "Noor zei: 'Ik ben klaar.'",
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
            basis: "roept",
            simpeler: "'Roept' vertelt dat iemand praat. Daarna komt de dubbele punt.",
            nogSimpeler: "roept:",
          },
        },
      },
      {
        q: "In welke zin horen **aanhalingstekens**?",
        options: [
          "Bram zegt: ik heb dorst.",
          "Bram heeft dorst.",
          "Bram drinkt een glas water.",
          "Bram heeft een fles bij zich.",
        ],
        answer: 0,
        wrongHints: [null, "Praat er iemand in deze zin?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Iemand praat",
              tekst: "Alleen in 'Bram zegt: ...' praat iemand. Wat Bram zegt, zet je tussen aanhalingstekens: Bram zegt: \"Ik heb dorst.\"",
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
            basis: "Bram zegt: ik heb dorst.",
            simpeler: "Daar zegt Bram iets. Dat moet tussen aanhalingstekens: Bram zegt: \"Ik heb dorst.\"",
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
        wrongHints: [null, "Mist hoofdletters.", "Mist hoofdletter plaats + punt.", "Werkwoord krijgt geen hoofdletter zomaar."],
      },
      {
        q: "Hoe eindigt de zin *'Wat is je naam'*?",
        options: ["?", ".", "!", ","],
        answer: 0,
        wrongHints: [null, "Punt past niet bij vraag.", "Niet boos genoeg.", "Komma sluit niet af."],
      },
      {
        q: "*'Ik kocht appels ___ peren ___ druiven ___ bananen.'* Welke komma's?",
        options: [", , en", "en en en", ", en ,", ", , ,"],
        answer: 0,
        wrongHints: [null, "Te veel 'en'.", "Verkeerde plek.", "Geen komma vóór laatste — daar 'en'."],
      },
      {
        q: "*'pas op er rijdt een auto'* — netjes geschreven?",
        options: ["Pas op! Er rijdt een auto.", "pas op er rijdt een auto.", "Pas op er rijdt een auto.", "Pas op, er rijdt een auto?"],
        answer: 0,
        wrongHints: [null, "Geen hoofdletters of leestekens.", "Mist uitroepteken na 'op'.", "Geen vraag."],
      },
      {
        q: "Welke woorden krijgen een **hoofdletter** in een zin?",
        options: ["Namen + landen + begin zin", "Alle werkwoorden", "Alle zelfstandige naamwoorden", "Maanden + dagen"],
        answer: 0,
        wrongHints: [null, "Werkwoorden niet zonder reden.", "Niet alle — alleen namen.", "Maanden/dagen krijgen GEEN hoofdletter in NL."],
      },
      {
        q: "*'tom zei: ___ ___ ___'* met inhoud 'ik kom morgen'. Wat staat tussen?",
        options: ["\"Ik kom morgen.\"", "Ik kom morgen.", "\"ik kom morgen\"", "'Ik kom morgen'"],
        answer: 0,
        wrongHints: [null, "Mist aanhalingstekens.", "Mist hoofdletter + punt binnen aanhalingstekens.", "Kijk naar het einde: waar is het leesteken van de zin gebleven?"],
      },
      { q: "Welke zin heeft de **juiste komma**?", options: ["Ik kocht brood, kaas en melk.","Ik kocht brood kaas en melk.","Ik kocht, brood kaas en melk.","Ik kocht brood, kaas en, melk."], answer: 0, wrongHints: [null, "Komma's ontbreken.", "Verkeerde positie.", "Kijk goed naar het woordje 'en': hoort daar een komma bij in een opsomming?"] },
      { q: "Welk **leesteken** sluit een vraag af?", options: ["Vraagteken (?)","Punt (.)","Komma (,)","Uitroepteken (!)"], answer: 0, wrongHints: [null, "Niet vraag.", "Niet einde.", "Uitroep."] },
      { q: "Welk **leesteken** voor een uitroep?", options: ["!","?",".",","], answer: 0, wrongHints: [null, "Vraag.", "Mededeling.", "Niet einde."] },
      { q: "Wanneer **hoofdletter** in midden van zin?", options: ["Bij namen (van personen/plaatsen)","Altijd","Nooit","Alleen na komma"], answer: 0, wrongHints: [null, "Niet altijd.", "Wel soms.", "Niet alleen daar."] },
      { q: "Welke zin is **fout**?", options: ["mijn naam is anna.","Mijn naam is Anna.","Hoe heet jij?","Hallo!"], answer: 0, wrongHints: [null, "Deze klopt qua hoofdletters. Welke zin mist een hoofdletter aan het begin?", "Hoofdletter én vraagteken zitten goed. Zoek de zin zónder hoofdletter.", "Deze is goed. Welke zin begint niet met een hoofdletter?"] },
      { q: "Een **dubbele punt (:)** zet je vóór?", options: ["Een opsomming of citaat","Vraag","Einde","Komma's"], answer: 0, wrongHints: [null, "Vraagteken.", "Punt.", "Niet."] },
      { q: "Een **puntkomma (;)** verbindt?", options: ["Twee verwante zinnen","Een opsomming","Niets","Vraag en antwoord"], answer: 0, wrongHints: [null, "Komma's doen dat.", "Wel functie.", "Niet."] },
      { q: "Welke zin heeft **goede aanhalingstekens**?", options: ["Hij zei: \"Kom!\"","Hij zei: Kom!","\"Hij zei kom!\"","Hij zei \"kom!"], answer: 0, wrongHints: [null, "Aanhalingstekens missen.", "Aanhalingstekens fout.", "Niet gesloten."] },
      { q: "Welke zin is goed?", options: ["Ik ga naar Amsterdam.","ik ga naar amsterdam.","ik ga naar Amsterdam.","Ik ga naar amsterdam."], answer: 0, wrongHints: [null, "Geen hoofdletters.", "Begin mist.", "Plaats mist."] },
      { q: "Een **lange streep (—)** kun je gebruiken voor?", options: ["Onderbreking of toelichting","Aftrekken","Niet leesteken","Vraag"], answer: 0, wrongHints: [null, "Wiskundig.", "Wel leesteken.", "Niet."] },
      { q: "Welke zin heeft een **fout vraagteken**?", options: ["Ik ga slapen?","Ga je mee?","Hoe heet je?","Waar is mijn boek?"], answer: 0, wrongHints: [null, "Dit is een échte vraag — het vraagteken klopt. Welke zin vraagt eigenlijk niets?", "Een echte vraag; vraagteken hoort hier. Zoek de zin die een mededeling is.", "Dit is een vraag. Welke zin vraagt niets maar eindigt tóch met een vraagteken?"] },
      { q: "Welke **hoofdletter** is fout?", options: ["Ik Eet brood","Ik eet brood","Ik eet brood.","Eet jij brood?"], answer: 0, wrongHints: [null, "Hier staan de hoofdletters goed. Zoek de zin met een hoofdletter midden in de zin.", "Deze klopt. Welke zin heeft een hoofdletter waar dat niet hoort?", "Hoofdletter aan het begin is goed. Zoek de verkeerd geplaatste hoofdletter."] },
      { q: "Wat staat tussen **haakjes ()**?", options: ["Extra info / verduidelijking","Vraag","Naam","Niet relevant"], answer: 0, wrongHints: [null, "Vraagteken.", "Niet specifiek.", "Wel."] },
      { q: "Welke zin heeft de **juiste komma's** rond de extra informatie?", options: ["Mijn opa, die 80 is, fietst nog elke dag.","Mijn opa die 80 is, fietst nog elke dag.","Mijn opa die 80 is fietst nog elke dag.","Mijn opa, die 80 is fietst nog elke dag."], answer: 0, wrongHints: [null, "Mist de komma vóór de extra informatie.", "Hier staan helemaal geen komma's. Welke woorden vertellen iets extra's over opa?", "Mist de komma ná de extra informatie."] },
      { q: "Welke afkorting krijgt **geen** hoofdletter?", options: ["bv.","NL","EU","VS"], answer: 0, wrongHints: [null, "Land = hoofdletter.", "Land/instituut.", "Land."] },
      { q: "Welke zin heeft de **juiste interpunctie**?", options: ["Wat een mooie dag!","Wat een mooie dag.","wat een mooie dag!","Wat een mooie dag?"], answer: 0, wrongHints: [null, "Niet emotie.", "Begin-hoofdletter mist.", "Geen vraag."] },
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
