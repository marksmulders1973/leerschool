// Leerpad: Werkwoordsspelling d/t — de basisregels
// 9 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: groep 5-8 basisschool. toets-relevant.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  ik: "#5d9cec",
  hij: "#ec407a",
  zij: "#9be069",
  jij: "#b388ff",
  fout: "#ef5350",
};

const stepEmojis = ["✍️","🅰️","🅱️","🤓","🅵","⏪","🔍","🚧","🏆"];

const chapters = [
  { letter: "A", title: "Wat is een werkwoord?", emoji: "✍️", from: 0, to: 0 },
  { letter: "B", title: "Tegenwoordige tijd — d/t-regel", emoji: "🅰️", from: 1, to: 3 },
  { letter: "C", title: "Verleden tijd — 't kofschip", emoji: "⏪", from: 4, to: 5 },
  { letter: "D", title: "Voltooid deelwoord", emoji: "🔍", from: 6, to: 7 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 8, to: 8 },
];

// Vergelijking-tabel SVG voor werkwoordsvormen
function vervoegingTabelSvg(werkwoord, stam, varianten) {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Vervoeging van: ${werkwoord} (stam: ${stam})</text>

${varianten.map((v, i) => {
  const y = 40 + i * 30;
  const fill = v.persoonKleur || COLORS.ik;
  return `
<rect x="20" y="${y - 12}" width="100" height="24" rx="4" fill="${fill}" opacity="0.5"/>
<text x="70" y="${y + 4}" text-anchor="middle" fill="#fff" font-size="13" font-family="Arial" font-weight="bold">${v.persoon}</text>
<text x="135" y="${y + 4}" fill="${COLORS.text}" font-size="13" font-family="Arial">→</text>
<text x="160" y="${y + 4}" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">${v.vorm}</text>
<text x="295" y="${y + 4}" text-anchor="end" fill="${COLORS.muted}" font-size="10" font-family="Arial">${v.uitleg || ''}</text>`;
}).join('')}
</svg>`;
}

function tKofschipSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">'t kofschip — geheugenezel voor verleden tijd</text>

<!-- Onderlijn -->
<line x1="20" y1="100" x2="300" y2="100" stroke="${COLORS.muted}" stroke-width="0.5"/>

<!-- Letters -->
${["t","k","o","f","s","c","h","i","p"].map((l, i) => {
  const cx = 50 + i * 30;
  const klinker = ["o","i"].includes(l);
  const isKey = ["t","k","f","s","c","h","p"].includes(l);
  return `
<circle cx="${cx}" cy="80" r="14" fill="${isKey ? COLORS.warm : COLORS.muted}" opacity="${isKey ? 0.85 : 0.35}"/>
<text x="${cx}" y="86" text-anchor="middle" fill="#000" font-size="16" font-family="Arial" font-weight="bold">${l}</text>`;
}).join('')}

<text x="160" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">stam eindigt op één van deze 7 letters → -te / -ten</text>
<text x="160" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">anders → -de / -den</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">(de klinkers o + i tellen niet — alleen medeklinkers)</text>
</svg>`;
}

const steps = [
  {
    title: "Wat is een werkwoord?",
    explanation: "Een **werkwoord** zegt **wat iemand doet** of **hoe iemand is**. Voorbeelden: lopen, schrijven, denken, zijn, hebben.\n\n**Hoe herken je een werkwoord?**\n• Past in: 'Ik **... [werkwoord]**.' (Ik **loop**. Ik **schrijf**. Ik **ben**.)\n• Verandert van vorm afhankelijk van wie het doet (ik, jij, hij...).\n\n**Soorten werkwoorden**:\n• **Sterk werkwoord**: verandert klinker in verleden tijd (lopen → liep, drinken → dronk).\n• **Zwak werkwoord**: krijgt -de of -te (werken → werkte, leren → leerde).\n• Hoeveel zwakke werkwoorden? Ongeveer **95%** van alle werkwoorden — dus de meeste!\n\n**De stam — basis voor spelling**\nDe **stam** is de **'kale'** vorm van het werkwoord — zonder uitgang. Hoe vind je 'm?\n\n1. Neem het hele werkwoord: bv. **lopen**.\n2. Haal **-en** eraf: **lop**.\n3. Maak korte klinker lang als nodig: **lop** → **loop** (omdat 'open' lettergreep een lange klank had).\n\n**Voorbeelden van stam**:\n• lopen → **loop**\n• werken → **werk**\n• maken → **maak**\n• gaan → **ga**\n• willen → **wil**\n• hebben → **heb**\n\n**Onthoud**: de stam is wat je krijgt als je '-en' weghaalt. **Met juiste klinker-lengte**.\n\nIn dit pad leer je de spelling-regels voor d/t — vooral lastig omdat je het verschil niet hoort, alleen ziet.",
    svg: vervoegingTabelSvg("lopen", "loop", [
      { persoon: "ik", vorm: "loop", persoonKleur: COLORS.ik, uitleg: "alleen stam" },
      { persoon: "jij", vorm: "loopt", persoonKleur: COLORS.jij, uitleg: "stam + t" },
      { persoon: "hij/zij", vorm: "loopt", persoonKleur: COLORS.hij, uitleg: "stam + t" },
      { persoon: "wij/zij", vorm: "lopen", persoonKleur: COLORS.zij, uitleg: "stam + en" },
    ]),
    checks: [
      {
        q: "Wat is de **stam** van **werken**?",
        options: ["werk","werken","wer","wert"],
        answer: 0,
        wrongHints: [null,"Dat is het hele werkwoord (infinitief).","Er mist een letter — haal alléén -en weg.","-t hoort er niet bij."],
        uitlegPad: {
          stappen: [
            { titel: "Stam vinden", tekst: "Hele werkwoord 'werken' minus -en = 'werk'. Klinker blijft kort want lettergreep blijft gesloten." },
          ],
          woorden: [{ woord: "stam", uitleg: "De 'kale' vorm van een werkwoord — basis voor alle vervoegingen." }],
          theorie: "Stam = hele werkwoord (infinitief) MIN -en. Bij open lettergreep verleng je klinker (lopen → loop), bij gesloten blijft kort (werken → werk).",
          voorbeelden: [{ type: "stam", tekst: "werken → werk, lopen → loop, maken → maak." }],
          basiskennis: [{ onderwerp: "Open vs gesloten", uitleg: "Lopen (open) → loop (verlengen). Werken (gesloten) → werk (blijft)." }],
          niveaus: { basis: "Werken − en = werk.", simpeler: "Haal -en weg van 'werken'. Wat blijft? Werk. Dat is de stam.", nogSimpeler: "Werk" },
        },
      },
      {
        q: "Wat is de **stam** van **maken**?",
        options: ["maak","mak","make","maken"],
        answer: 0,
        wrongHints: [null,"Klinker te kort — hoor je in ma-ken een korte of een lange a?","-e hoort er niet bij.","Dat is het hele werkwoord."],
        uitlegPad: {
          stappen: [
            { titel: "Stam met klinker-verlengen", tekst: "Maken − en = mak. Maar 'mak' heeft korte a, terwijl 'ma-ken' lange a heeft. Verleng: maak." },
          ],
          woorden: [{ woord: "klinker-verlengen", uitleg: "Bij open lettergreep moet 1 klinker bij stam-vorming → dubbele klinker." }],
          theorie: "Stam-regel: open lettergreep (klinker lang) → bij stam dubbele klinker. Maken (ma-ken) → maak.",
          voorbeelden: [{ type: "verlengen", tekst: "maken → maak, lopen → loop, leven → leef, weten → weet." }],
          basiskennis: [{ onderwerp: "Hoor de klank", uitleg: "Open klank in 'ma-' = lang. Schrijf maak (dubbele a) niet mak." }],
          niveaus: { basis: "Maken → maak.", simpeler: "Maken klinkt 'maa-ken' (lange a). Stam moet ook lange a hebben: maak.", nogSimpeler: "Maak" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is de **stam** van **lopen**?",
        options: ["loop", "lop", "lopen", "loopt"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg lo-pen hardop. Hoor je een korte of een lange o?",
          null,
          "Die t hoort bij hij of jij — niet bij de stam.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam vinden",
              tekst: "Lopen − en = lop. In lo-pen hoor je een lange o. Die moet blijven: **loop**.",
            },
          ],
          woorden: [
            {
              woord: "stam",
              uitleg: "De 'kale' vorm van een werkwoord, zonder uitgang.",
            },
          ],
          theorie: "Stam = hele werkwoord min -en. Hoor je een lange klinker? Dan schrijf je die dubbel: lopen → loop.",
          voorbeelden: [
            {
              type: "stam",
              tekst: "lopen → loop, maken → maak, spelen → speel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lange klank houden",
              uitleg: "Lo-pen heeft een lange o. Lop klinkt kort. Daarom: loop.",
            },
          ],
          niveaus: {
            basis: "Lopen → loop.",
            simpeler: "Haal -en weg: lop. Maar je hoort een lange o, dus schrijf je loop.",
            nogSimpeler: "Loop",
          },
        },
      },
      {
        q: "Wat is de **stam** van **willen**?",
        options: ["wil", "will", "wille", "willen"],
        answer: 0,
        wrongHints: [
          null,
          "Eindigt een woord op twee l'en?",
          "Haal de hele uitgang -en weg, niet alleen de n.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam vinden",
              tekst: "Willen − en = will. Aan het eind van een woord schrijf je geen twee l'en: **wil**.",
            },
          ],
          woorden: [
            {
              woord: "stam",
              uitleg: "Het werkwoord zonder -en, zoals je zegt: ik ...",
            },
          ],
          theorie: "Stam = hele werkwoord min -en. Twee dezelfde medeklinkers aan het eind worden er één: willen → wil, hebben → heb.",
          voorbeelden: [
            {
              type: "stam",
              tekst: "willen → wil, hebben → heb, bellen → bel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Ik-test",
              uitleg: "Zeg: 'ik ...'. Ik wil. Dat is de stam.",
            },
          ],
          niveaus: {
            basis: "Willen → wil.",
            simpeler: "Haal -en weg en houd één l over: wil. Ik wil.",
            nogSimpeler: "Wil",
          },
        },
      },
      {
        q: "Wat is de **stam** van **hebben**?",
        options: ["heb", "hebb", "hebbe", "hebt"],
        answer: 0,
        wrongHints: [null, "Eindigt een woord op twee b's?", null, "Die t hoort bij jij — niet bij de stam."],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam vinden",
              tekst: "Hebben − en = hebb. Twee b's aan het eind schrijf je niet: **heb**.",
            },
          ],
          woorden: [
            {
              woord: "stam",
              uitleg: "De kale vorm van het werkwoord: ik heb.",
            },
          ],
          theorie: "Stam = hele werkwoord min -en. Twee dezelfde medeklinkers aan het eind worden er één.",
          voorbeelden: [
            {
              type: "stam",
              tekst: "hebben → heb, willen → wil, zwemmen → zwem.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Ik-test",
              uitleg: "Ik heb een fiets. 'Heb' is de stam.",
            },
          ],
          niveaus: {
            basis: "Hebben → heb.",
            simpeler: "Haal -en weg: hebb. Eén b is genoeg: heb. Ik heb.",
            nogSimpeler: "Heb",
          },
        },
      },
      {
        q: "Wat is de **stam** van **gaan**?",
        options: ["ga", "gaa", "gan", "gaat"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg 'ik ...' — hoe schrijf je dat?",
          null,
          "Die t hoort bij hij — niet bij de stam.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kort werkwoord",
              tekst: "Gaan is een kort werkwoord. Zeg 'ik ...': ik **ga**. Dat is de stam.",
            },
          ],
          woorden: [
            {
              woord: "stam",
              uitleg: "De vorm die je gebruikt bij 'ik'.",
            },
          ],
          theorie: "Bij korte werkwoorden zoals gaan vind je de stam met de ik-test: ik ga.",
          voorbeelden: [
            {
              type: "stam",
              tekst: "gaan → ga, staan → sta.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Ik-test",
              uitleg: "De ik-vorm is (bijna altijd) de stam: ik ga, ik loop, ik werk.",
            },
          ],
          niveaus: {
            basis: "Gaan → ga.",
            simpeler: "Zeg: ik ga. 'Ga' is de stam.",
            nogSimpeler: "Ga",
          },
        },
      },
      {
        q: "Wat is de **stam** van **spelen**?",
        options: ["speel", "spel", "spelen", "speelt"],
        answer: 0,
        wrongHints: [null, "Zeg spe-len hardop. Is de e kort of lang?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam vinden",
              tekst: "Spelen − en = spel. In spe-len hoor je een lange e. Die blijft: **speel**.",
            },
          ],
          woorden: [
            {
              woord: "stam",
              uitleg: "Het werkwoord zonder -en, met de goede klinker.",
            },
          ],
          theorie: "Stam = hele werkwoord min -en. Lange klank? Dan dubbele klinker: spelen → speel.",
          voorbeelden: [
            {
              type: "stam",
              tekst: "spelen → speel, lopen → loop, maken → maak.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Ik-test",
              uitleg: "Ik speel buiten. 'Speel' is de stam.",
            },
          ],
          niveaus: {
            basis: "Spelen → speel.",
            simpeler: "Haal -en weg: spel. Je hoort een lange e, dus: speel. Ik speel.",
            nogSimpeler: "Speel",
          },
        },
      },
      {
        q: "Wat is de **stam** van **fietsen**?",
        options: ["fiets", "fiet", "fietse", "fietst"],
        answer: 0,
        wrongHints: [
          null,
          "Haal alléén -en weg — niet meer.",
          null,
          "Die t hoort bij hij of jij — niet bij de stam.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam vinden",
              tekst: "Fietsen − en = **fiets**. De klinker verandert niet.",
            },
          ],
          woorden: [
            {
              woord: "stam",
              uitleg: "De kale vorm van het werkwoord: ik fiets.",
            },
          ],
          theorie: "Stam = hele werkwoord min -en. Bij fietsen hoef je verder niets te veranderen.",
          voorbeelden: [
            {
              type: "stam",
              tekst: "fietsen → fiets, werken → werk.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Ik-test",
              uitleg: "Ik fiets naar school. 'Fiets' is de stam.",
            },
          ],
          niveaus: {
            basis: "Fietsen → fiets.",
            simpeler: "Haal -en weg van fietsen. Wat blijft er over? Fiets.",
            nogSimpeler: "Fiets",
          },
        },
      },
      {
        q: "Wat is de **stam** van **zwemmen**?",
        options: ["zwem", "zwemm", "zwemme", "zwemmen"],
        answer: 0,
        wrongHints: [null, "Eindigt een woord op twee m'en?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam vinden",
              tekst: "Zwemmen − en = zwemm. Eén m is genoeg aan het eind: **zwem**.",
            },
          ],
          woorden: [
            {
              woord: "stam",
              uitleg: "De vorm bij 'ik': ik zwem.",
            },
          ],
          theorie: "Stam = hele werkwoord min -en. Twee dezelfde medeklinkers aan het eind worden er één.",
          voorbeelden: [
            {
              type: "stam",
              tekst: "zwemmen → zwem, willen → wil, hebben → heb.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Ik-test",
              uitleg: "Ik zwem in het zwembad. 'Zwem' is de stam.",
            },
          ],
          niveaus: {
            basis: "Zwemmen → zwem.",
            simpeler: "Haal -en weg: zwemm. Eén m is genoeg: zwem.",
            nogSimpeler: "Zwem",
          },
        },
      },
      {
        q: "Welk woord is een **werkwoord**?",
        options: ["zwemmen", "tafel", "groen", "langzaam"],
        answer: 0,
        wrongHints: [null, "Past dit in 'Ik ...'? Kun je dat doen?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Werkwoord-test",
              tekst: "Een werkwoord zegt wat iemand doet. Probeer: 'Ik zwem.' Dat kan! Zwemmen is een werkwoord.",
            },
          ],
          woorden: [
            {
              woord: "werkwoord",
              uitleg: "Woord dat zegt wat iemand doet of hoe iemand is.",
            },
          ],
          theorie: "Een werkwoord past in 'Ik ...' en verandert van vorm: ik zwem, hij zwemt, wij zwemmen.",
          voorbeelden: [
            {
              type: "werkwoorden",
              tekst: "lopen, schrijven, denken, zwemmen, zijn, hebben.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geen werkwoord",
              uitleg: "Tafel is een ding. Groen is een kleur. Langzaam zegt hoe iets gaat.",
            },
          ],
          niveaus: {
            basis: "Zwemmen is iets wat je doet.",
            simpeler: "Kun je het doen? Ik zwem — ja! Ik tafel — nee.",
            nogSimpeler: "Zwemmen = doen",
          },
        },
      },
    ],
  },
  {
    title: "Tegenwoordige tijd — basisregel",
    explanation: "**Regel voor de tegenwoordige tijd** (NU):\n\n| Persoon | Vorm | Voorbeeld |\n|---|---|---|\n| **ik** | stam (alleen) | ik **werk** |\n| **jij/u** | stam + t | jij **werkt** |\n| **hij/zij/het** | stam + t | hij **werkt** |\n| **wij/jullie/zij** | stam + en | wij **werken** |\n\n**Belangrijkste regel**: bij **hij/zij/het** voeg je **-t** toe achter de stam. Dit is waar veel kinderen fouten maken.\n\n**Voorbeelden**:\n• Stam = **werk** (van werken)\n  - Ik werk\n  - Jij werkt\n  - Hij werkt ← **t bij hij!**\n  - Wij werken\n\n• Stam = **loop** (van lopen)\n  - Ik loop\n  - Jij loopt\n  - Hij loopt\n  - Wij lopen\n\n**Veelvoorkomende fout**: vergeten van de **t bij hij/zij/het**. Onthoud: hij/zij/het = altijd extra **t**.\n\n*\"Hij werk hard\"* ❌ (mist de t)\n*\"Hij werkt hard\"* ✓\n\n**Speciaal: 'jij' achter het werkwoord**\nAls **jij** ACHTER het werkwoord komt (in vragen), valt de **t** weg!\n\n• Jij werkt hard. ✓ *(jij vóór werkwoord = met t)*\n• Werk **jij** hard? ✓ *(jij erachter = zonder t!)*\n• Wat doe **jij**? ✓\n• Wat doet **hij**? ✓ *(blijft met t)*\n\n**Trucje**: alleen 'jij' achter het werkwoord laat de t vallen. Hij/zij/het houdt altijd de t.",
    svg: vervoegingTabelSvg("werken", "werk", [
      { persoon: "ik", vorm: "werk", persoonKleur: COLORS.ik, uitleg: "alleen stam" },
      { persoon: "jij", vorm: "werkt", persoonKleur: COLORS.jij, uitleg: "stam + t" },
      { persoon: "hij/zij", vorm: "werkt", persoonKleur: COLORS.hij, uitleg: "stam + t" },
      { persoon: "wij/jullie/zij", vorm: "werken", persoonKleur: COLORS.zij, uitleg: "stam + en" },
    ]),
    checks: [
      {
        q: "Welke is **goed**?",
        options: ["Hij speelt","Hij speel","Hij speelen","Hij speelts"],
        answer: 0,
        wrongHints: [null,"Mist de -t bij 'hij'!","-en is voor wij/zij meervoud.","Geen Nederlandse vorm."],
        uitlegPad: {
          stappen: [{ titel: "Hij + werkwoord", tekst: "Bij hij/zij/het: stam + t. Stam 'speel' + t = speelt." }],
          woorden: [{ woord: "stam + t", uitleg: "Hij/zij/het krijgt altijd een t achter de stam." }],
          theorie: "Tegenwoordige tijd hij/zij/het = stam + t. Vergeet die t nooit.",
          voorbeelden: [{ type: "speelt", tekst: "spelen → speel (stam) + t = speelt." }],
          basiskennis: [{ onderwerp: "Lopen-test", uitleg: "Vervang door 'loopt' — past zelfde structuur." }],
          niveaus: { basis: "Hij = stam + t = speelt.", simpeler: "Bij 'hij' altijd een -t achter de stam. Stam van spelen = speel. Hij speel + t = speelt.", nogSimpeler: "Hij + t = speelt" },
        },
      },
      {
        q: "Welke is **goed**?",
        options: ["Werk jij hard?","Werkt jij hard?","Werken jij hard?","Werks jij hard?"],
        answer: 0,
        wrongHints: [null,"Bij 'jij ACHTER werkwoord' valt de t weg.","-en is voor meervoud.","Geen Nederlandse vorm."],
        uitlegPad: {
          stappen: [
            { titel: "Jij ACHTER", tekst: "Vraag: 'Werk jij...' → jij staat ACHTER het werkwoord. Dan valt de t weg." },
            { titel: "Vergelijk vóór/achter", tekst: "Jij werkt (vóór: t blijft). Werk jij? (achter: geen t)." },
          ],
          woorden: [{ woord: "jij-achter-regel", uitleg: "Speciale regel: alleen jij na het werkwoord = t valt weg." }],
          theorie: "JIJ achter werkwoord (in vragen, in inversie) = t valt weg. Hij/zij/het houden ALTIJD de t.",
          voorbeelden: [{ type: "achter", tekst: "Werk jij? / Heb jij? / Doe jij? — allemaal zonder t. Werkt hij? / Heeft hij? — t blijft." }],
          basiskennis: [{ onderwerp: "Alleen jij", uitleg: "Deze regel geldt ALLEEN voor 'jij'. Niet voor hij/zij/u." }],
          niveaus: { basis: "Jij achter = geen t.", simpeler: "Bij vragen waar 'jij' achter het werkwoord staat (inversie), valt de t weg. 'Werk jij hard?' niet 'werkt jij hard?'.", nogSimpeler: "Jij achter = geen t" },
        },
      },
      {
        q: "**Zij** (= meervoud) loopt of lopen?",
        options: ["lopen","loopt","loops","loopen"],
        answer: 0,
        wrongHints: [null,"Dat is bij hij/zij ENKELVOUD.","-s is geen Nederlandse vervoeging.","Kijk naar de o: in lo-pen staat die aan het eind van de lettergreep. Hoeveel o's schrijf je dan?"],
        uitlegPad: {
          stappen: [
            { titel: "Meervoud", tekst: "Wij/jullie/zij (meervoud) = stam + en. Lopen heeft hele werkwoord-vorm." },
          ],
          woorden: [{ woord: "meervoud", uitleg: "Meer dan één persoon: wij, jullie, zij (=zij allemaal)." }],
          theorie: "Meervoud-vorm = stam + en (= hele werkwoord). Niet stam + t.",
          voorbeelden: [{ type: "meervoud", tekst: "Wij lopen, jullie lopen, zij lopen — geen t maar -en." }],
          basiskennis: [{ onderwerp: "Verschil enkelvoud/meervoud", uitleg: "Hij loopt (1 persoon, +t). Zij lopen (meer personen, +en)." }],
          niveaus: { basis: "Meervoud = +en. Lopen.", simpeler: "'Zij' kan enkelvoud (1 vrouw) of meervoud (zij allemaal) zijn. Hier meervoud. Bij meervoud: hele werkwoord (lopen).", nogSimpeler: "Meervoud = lopen" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Kies de goede zin met **jij** en **fietsen**:",
        options: [
          "Jij fietst naar school.",
          "Jij fiets naar school.",
          "Jij fietsen naar school.",
          "Jij fietse naar school.",
        ],
        answer: 0,
        wrongHints: [null, "Staat 'jij' hier vóór of achter het werkwoord?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Jij vóór",
              tekst: "'Jij' staat vóór het werkwoord. Dan: stam + t. Fiets + t = **fietst**.",
            },
          ],
          woorden: [
            {
              woord: "stam + t",
              uitleg: "Bij jij (vóór het werkwoord) en hij/zij/het komt er een t achter de stam.",
            },
          ],
          theorie: "Tegenwoordige tijd: jij (vóór het werkwoord) = stam + t.",
          voorbeelden: [
            {
              type: "jij",
              tekst: "Jij fietst, jij werkt, jij loopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Jij achter",
              uitleg: "Alleen als jij áchter het werkwoord staat, valt de t weg: Fiets jij?",
            },
          ],
          niveaus: {
            basis: "Jij fietst.",
            simpeler: "Jij staat vooraan. Dan komt er een t achter de stam: fiets + t = fietst.",
            nogSimpeler: "Jij fietst",
          },
        },
      },
      {
        q: "Welke vraag is **goed** geschreven?",
        options: [
          "Speel jij vandaag buiten?",
          "Speelt jij vandaag buiten?",
          "Spelen jij vandaag buiten?",
          "Spel jij vandaag buiten?",
        ],
        answer: 0,
        wrongHints: [null, "Waar staat 'jij' in deze vraag?", null, "Zeg spe-len hardop: is de e kort of lang?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Jij achter",
              tekst: "In deze vraag staat 'jij' áchter het werkwoord. Dan valt de t weg: **Speel jij**?",
            },
          ],
          woorden: [
            {
              woord: "jij-achter-regel",
              uitleg: "Staat jij achter het werkwoord, dan schrijf je alleen de stam.",
            },
          ],
          theorie: "Jij achter het werkwoord = alleen de stam, zonder t. Hij/zij/het houden altijd de t.",
          voorbeelden: [
            {
              type: "achter",
              tekst: "Speel jij? Werk jij? Loop jij?",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vergelijk",
              uitleg: "Jij speelt buiten. (vóór: met t) — Speel jij buiten? (achter: zonder t)",
            },
          ],
          niveaus: {
            basis: "Speel jij? (geen t)",
            simpeler: "Jij staat achter 'speel'. Dan valt de t weg. Speel jij vandaag buiten?",
            nogSimpeler: "Speel jij",
          },
        },
      },
      {
        q: "Kies de juiste vorm van **koken**: 'Mijn opa ____ elke dag.'",
        options: ["kookt", "kook", "koken", "kookd"],
        answer: 0,
        wrongHints: [null, "Mijn opa = hij. Wat komt er bij hij achter de stam?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wie doet het?",
              tekst: "Mijn opa = hij.",
            },
            {
              titel: "Stam + t",
              tekst: "Stam van koken = kook. Hij = stam + t = **kookt**.",
            },
          ],
          woorden: [
            {
              woord: "hij-vorm",
              uitleg: "Bij hij/zij/het: stam + t.",
            },
          ],
          theorie: "Tegenwoordige tijd hij/zij/het = stam + t. Vervang 'mijn opa' door 'hij' om te checken.",
          voorbeelden: [
            {
              type: "hij",
              tekst: "Hij kookt, hij werkt, hij loopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "Mijn opa loopt — met t. Dus ook: mijn opa kookt.",
            },
          ],
          niveaus: {
            basis: "Opa = hij → kookt.",
            simpeler: "Mijn opa is één persoon: hij. Bij hij komt er een t achter de stam: kook + t = kookt.",
            nogSimpeler: "Kookt",
          },
        },
      },
      {
        q: "Kies de juiste vorm van **doen**: 'Wat ____ hij?'",
        options: ["doet", "doe", "doen", "doed"],
        answer: 0,
        wrongHints: [null, "Voor wie geldt de regel 'de t valt weg'? Alleen voor ...", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Hij achter",
              tekst: "Hier staat 'hij' achter het werkwoord. Bij hij blijft de t altijd: **doet**.",
            },
          ],
          woorden: [
            {
              woord: "jij-achter-regel",
              uitleg: "Alleen bij jij valt de t weg. Niet bij hij.",
            },
          ],
          theorie: "Hij/zij/het = stam + t, ook in een vraag. Alleen 'jij' achter het werkwoord laat de t vallen.",
          voorbeelden: [
            {
              type: "vergelijk",
              tekst: "Wat doe jij? — Wat doet hij?",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alleen jij",
              uitleg: "De t valt alleen weg bij jij achter het werkwoord.",
            },
          ],
          niveaus: {
            basis: "Wat doet hij?",
            simpeler: "Bij 'hij' blijft de t er altijd. Ook als hij achter het werkwoord staat. Wat doet hij?",
            nogSimpeler: "Doet",
          },
        },
      },
      {
        q: "Kies de juiste vorm van **bellen**: 'Jullie ____ de juf.'",
        options: ["bellen", "belt", "bel", "bellt"],
        answer: 0,
        wrongHints: [null, "Is 'jullie' één persoon of meer?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Meervoud",
              tekst: "Jullie = meer personen. Meervoud = stam + en = **bellen**.",
            },
          ],
          woorden: [
            {
              woord: "meervoud",
              uitleg: "Meer dan één: wij, jullie, zij.",
            },
          ],
          theorie: "Wij/jullie/zij (meervoud) = stam + en. Dat is hetzelfde als het hele werkwoord.",
          voorbeelden: [
            {
              type: "meervoud",
              tekst: "Wij bellen, jullie bellen, zij bellen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Jullie",
              uitleg: "Jullie hoort bij meervoud: jullie lopen, jullie werken, jullie bellen.",
            },
          ],
          niveaus: {
            basis: "Jullie bellen.",
            simpeler: "Jullie zijn meer mensen. Dan gebruik je het hele werkwoord: bellen.",
            nogSimpeler: "Bellen",
          },
        },
      },
      {
        q: "Kies de juiste vorm van **hebben**: '____ jij een hond?'",
        options: ["Heb", "Hebt", "Hebben", "Hep"],
        answer: 0,
        wrongHints: [null, "Waar staat 'jij' in deze vraag?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Jij achter",
              tekst: "'Jij' staat achter het werkwoord. Dan valt de t weg: **Heb jij** een hond?",
            },
          ],
          woorden: [
            {
              woord: "jij-achter-regel",
              uitleg: "Jij achter het werkwoord = geen t.",
            },
          ],
          theorie: "Jij achter het werkwoord = alleen de stam. Stam van hebben = heb.",
          voorbeelden: [
            {
              type: "achter",
              tekst: "Heb jij? Werk jij? Doe jij?",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vergelijk",
              uitleg: "Jij hebt een hond. — Heb jij een hond?",
            },
          ],
          niveaus: {
            basis: "Heb jij? (geen t)",
            simpeler: "Jij staat achter het werkwoord. Dan geen t: Heb jij een hond?",
            nogSimpeler: "Heb jij",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Kies de juiste vorm van **lachen**: 'Het meisje ____ hard om de grap.'",
        options: ["lacht", "lach", "lachen", "lachd"],
        answer: 0,
        wrongHints: [null, "Het meisje = het. Komt er bij het iets achter de stam?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam = lach",
              tekst: "Lachen − en = lach.",
            },
            {
              titel: "Het meisje = het",
              tekst: "Bij hij/zij/het: stam + t. Lach + t = **lacht**.",
            },
          ],
          woorden: [
            {
              woord: "stam",
              uitleg: "Het werkwoord zonder -en: lach.",
            },
          ],
          theorie: "hij/zij/het = stam + t.",
          voorbeelden: [
            {
              type: "het",
              tekst: "Het kind lacht. Het paard loopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "Het meisje loopt — met t. Dus: het meisje lacht.",
            },
          ],
          niveaus: {
            basis: "Lach + t = lacht.",
            simpeler: "Het meisje is één persoon (het). Dan komt er een t achter de stam.",
            nogSimpeler: "Lacht",
          },
        },
      },
    ],
  },
  {
    title: "Stam eindigt op d (worden, vinden)",
    explanation: "Wanneer de **stam eindigt op d**, krijgt 'ie bij hij/zij/het **nog een -t erachter**. Resultaat: **dt**!\n\n**Regel**: stam **+ t** = uitgang. Dus:\n• Stam **word** + t = **wordt** (hij wordt)\n• Stam **vind** + t = **vindt** (hij vindt)\n• Stam **houd** + t = **houdt** (hij houdt)\n\n**Vergelijk**:\n\n| Werkwoord | Stam | Hij/zij |\n|---|---|---|\n| werken | werk | werk**t** |\n| lopen | loop | loop**t** |\n| **worden** | word | wor**dt** ← extra t na d! |\n| **vinden** | vind | vin**dt** |\n| **houden** | houd | hou**dt** |\n\n**Veelvoorkomende fouten**:\n\n*\"Hij word boos\"* ❌ — mist de -t (alleen stam, niet vervoegd voor hij)\n*\"Hij wordt boos\"* ✓ — stam (word) + t = wordt\n\n*\"Hij wordd boos\"* ❌ — een woord eindigt nooit op dd, het is d-t\n*\"Hij wort boos\"* ❌ — t-t mist de d van de stam\n*\"Hij wordt boos\"* ✓\n\n**Trucje** om te checken:\n1. Vind de stam (haal -en weg).\n2. Eindigt de stam op **d**? Voeg dan **t** toe → **dt**.\n\n**Belangrijk**: de **d** is van de stam, de **t** is van de vervoeging. Beide schrijf je apart — vandaar **dt**.\n\n**Trucje voor twijfel** (de '**lopen-test**'):\nVervang het werkwoord door **lopen** in dezelfde zin:\n• Hij wordt → vervang: hij loopt. Eindigt op t? Ja → dus 'wordt' eindigt ook op t. ✓\n\n**Voorbeelden om te oefenen**:\n• De man (worden) heel oud. → De man **wordt** heel oud.\n• Zij (vinden) een schat. → Zij **vinden** een schat (= meervoud, geen t-toevoeging).\n• Hij (houden) van haar. → Hij **houdt** van haar.",
    svg: vervoegingTabelSvg("worden", "word", [
      { persoon: "ik", vorm: "word", persoonKleur: COLORS.ik, uitleg: "alleen stam" },
      { persoon: "jij", vorm: "wordt", persoonKleur: COLORS.jij, uitleg: "stam + t = dt" },
      { persoon: "hij/zij", vorm: "wordt", persoonKleur: COLORS.hij, uitleg: "stam + t = dt" },
      { persoon: "wij/zij", vorm: "worden", persoonKleur: COLORS.zij, uitleg: "stam + en" },
    ]),
    checks: [
      {
        q: "**'Hij ____ boos'** — kies juiste vorm van **worden**:",
        options: ["wordt","word","wort","wordd"],
        answer: 0,
        wrongHints: [null,"Mist de t van vervoeging — bij hij/zij altijd t.","Mist de d van de stam.","Een woord eindigt nooit op dd — welke letter hoort bij hij achter de stam?"],
        uitlegPad: {
          stappen: [
            { titel: "Stam = word", tekst: "Worden − en = word (eindigt op d)." },
            { titel: "Hij = stam + t", tekst: "Word + t = wordt. Beide letters apart: d van stam, t van vervoeging = dt." },
          ],
          woorden: [{ woord: "dt-combinatie", uitleg: "Bij stam-op-d + hij/zij vervoeging = dt schrijven." }],
          theorie: "Word (stam) + t (hij) = wordt. Niet 'wort' (mist d), niet 'wordd' (een woord eindigt nooit op dd).",
          voorbeelden: [{ type: "dt", tekst: "worden → hij wordt. Vinden → hij vindt. Houden → hij houdt." }],
          basiskennis: [{ onderwerp: "Lopen-test", uitleg: "Hij wordt = hij loopt. Beide eindigen op t. ✓" }],
          niveaus: { basis: "Hij = stam + t = wordt.", simpeler: "Stam van worden = word. Bij hij +t. Word + t = wordt. Niet 'word' (mist t), niet 'wort' (mist d).", nogSimpeler: "Word + t = wordt" },
        },
      },
      {
        q: "**'Zij (meervoud) ____ een schat'** — kies juiste vorm van **vinden**:",
        options: ["vinden","vindt","vind","vint"],
        answer: 0,
        wrongHints: [null,"Dat is de vorm voor één persoon (hij of zij enkelvoud).","Dat is de ik-vorm: alleen de stam.","Mist de d van de stam."],
        uitlegPad: {
          stappen: [{ titel: "Meervoud = +en", tekst: "Zij meervoud = vinden (hele werkwoord)." }],
          woorden: [{ woord: "meervoud", uitleg: "Meer personen = werkwoord op -en." }],
          theorie: "Meervoud regel: stam + en. Geen losse t. Vinden, niet vindt-en.",
          voorbeelden: [{ type: "meervoud", tekst: "Zij vinden, wij vinden, jullie vinden — allemaal -en." }],
          basiskennis: [{ onderwerp: "Verschil enkelvoud/meervoud", uitleg: "Zij vindt (1 vrouw). Zij vinden (meer mensen)." }],
          niveaus: { basis: "Meervoud = vinden.", simpeler: "'Zij' meervoud = meer personen → werkwoord op -en. Vinden.", nogSimpeler: "Meervoud = vinden" },
        },
      },
      {
        q: "Welke is **goed**?",
        options: ["Hij houdt van pizza","Hij houd van pizza","Hij hout van pizza","Hij houden van pizza"],
        answer: 0,
        wrongHints: [null,"Mist de t.","Mist de d en heeft geen t van vervoeging op juiste plek.","-en is voor meervoud."],
        uitlegPad: {
          stappen: [{ titel: "Stam-op-d + t", tekst: "Stam = houd. Hij = + t. Houd + t = houdt." }],
          woorden: [{ woord: "houden → houd", uitleg: "Stam van houden = houd (eindigt op d)." }],
          theorie: "Zelfde patroon als worden, vinden, binden — allemaal stam-op-d → bij hij = dt.",
          voorbeelden: [{ type: "dt-werkwoorden", tekst: "houden → houdt, worden → wordt, vinden → vindt, binden → bindt." }],
          basiskennis: [{ onderwerp: "Niet 'hout'", uitleg: "Hout = ander woord (boom-materiaal). Werkwoord = houdt met dt." }],
          niveaus: { basis: "Hij houdt = houd + t = dt.", simpeler: "Houden, stam = houd (op d). Hij krijgt +t. Houd + t = houdt. Beide letters d en t schrijven.", nogSimpeler: "Houdt" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Kies de juiste vorm van **binden**: 'De juf ____ de ballonnen aan het hek.'",
        options: ["bindt", "bind", "bint", "binden"],
        answer: 0,
        wrongHints: [null, "De juf = zij. Krijgt zij een t achter de stam?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam = bind",
              tekst: "Binden − en = bind (eindigt op d).",
            },
            {
              titel: "Juf = zij",
              tekst: "Zij + stam + t: bind + t = **bindt**.",
            },
          ],
          woorden: [
            {
              woord: "stam op d",
              uitleg: "De stam eindigt op een d. Bij hij/zij komt er nog een t bij.",
            },
          ],
          theorie: "Stam op d + t = dt. Zelfde patroon als worden, vinden, houden.",
          voorbeelden: [
            {
              type: "dt",
              tekst: "binden → bindt, vinden → vindt, worden → wordt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "De juf loopt — met t. Dus: de juf bindt.",
            },
          ],
          niveaus: {
            basis: "Bind + t = bindt.",
            simpeler: "Stam van binden = bind. De juf is één persoon, dus + t: bindt.",
            nogSimpeler: "Bindt",
          },
        },
      },
      {
        q: "Wat is de **stam** van **vinden**?",
        options: ["vind", "vint", "vindt", "vinde"],
        answer: 0,
        wrongHints: [
          null,
          "Haal alleen -en weg. Welke letter staat er dan aan het eind?",
          "Dat is de vorm bij hij of zij.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam vinden",
              tekst: "Vinden − en = **vind**. De stam eindigt op een d.",
            },
          ],
          woorden: [
            {
              woord: "stam",
              uitleg: "Het werkwoord zonder -en.",
            },
          ],
          theorie: "De d hoort bij de stam: vind. Pas bij hij/zij komt er een t achter: vindt.",
          voorbeelden: [
            {
              type: "stam op d",
              tekst: "vinden → vind, worden → word, binden → bind.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Je hoort een t",
              uitleg: "Je zegt 'vint', maar je schrijft de stam met d: vind.",
            },
          ],
          niveaus: {
            basis: "Vinden → vind.",
            simpeler: "Haal -en weg van vinden. Er blijft over: vind. Met een d!",
            nogSimpeler: "Vind",
          },
        },
      },
      {
        q: "**Hij vindt** — waar komt de **d** vandaan?",
        options: ["van de stam vind", "van de uitgang voor hij", "van het woord hij", "van de verleden tijd"],
        answer: 0,
        wrongHints: [null, "Wat komt er bij hij achter de stam: een d of een t?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Twee stukjes",
              tekst: "Vindt = **vind** (stam) + **t** (voor hij). De d hoort bij de stam.",
            },
          ],
          woorden: [
            {
              woord: "stam",
              uitleg: "Vinden − en = vind. Daar zit de d al in.",
            },
          ],
          theorie: "De d is van de stam, de t is van de vervoeging. Daarom schrijf je ze allebei: dt.",
          voorbeelden: [
            {
              type: "dt",
              tekst: "word + t = wordt, houd + t = houdt, vind + t = vindt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Uitgang bij hij",
              uitleg: "Bij hij komt er altijd een t achter de stam — nooit een d.",
            },
          ],
          niveaus: {
            basis: "De d is van de stam.",
            simpeler: "Haal -en weg van vinden: vind. Daar zit de d al. Bij hij komt er een t bij.",
            nogSimpeler: "d = stam",
          },
        },
      },
      {
        q: "Kies de juiste vorm van **houden**: 'Mijn broer ____ zijn adem in.'",
        options: ["houdt", "houd", "hout", "houden"],
        answer: 0,
        wrongHints: [
          null,
          "Mijn broer = hij. Komt er een t achter de stam?",
          "Waar is de d van de stam gebleven?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam = houd",
              tekst: "Houden − en = houd (eindigt op d).",
            },
            {
              titel: "Hij + t",
              tekst: "Mijn broer = hij. Houd + t = **houdt**.",
            },
          ],
          woorden: [
            {
              woord: "adem inhouden",
              uitleg: "Even niet ademen, bijvoorbeeld onder water.",
            },
          ],
          theorie: "Stam op d + hij = dt. Houdt, wordt, vindt.",
          voorbeelden: [
            {
              type: "dt",
              tekst: "Hij houdt, hij wordt, hij vindt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "Mijn broer loopt — met t. Dus: mijn broer houdt.",
            },
          ],
          niveaus: {
            basis: "Houd + t = houdt.",
            simpeler: "Mijn broer is hij. Bij hij komt er een t achter de stam houd: houdt.",
            nogSimpeler: "Houdt",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Kies de juiste vorm van **vinden**: 'Mijn vriend ____ een euro op straat.'",
        options: ["vindt", "vind", "vint", "vinden"],
        answer: 0,
        wrongHints: [null, "Mijn vriend = hij. Komt er een t achter de stam?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam = vind",
              tekst: "Vinden − en = vind (eindigt op d).",
            },
            {
              titel: "Mijn vriend = hij",
              tekst: "Hij + stam + t: vind + t = **vindt**.",
            },
          ],
          woorden: [
            {
              woord: "stam op d",
              uitleg: "De stam eindigt op een d. Bij hij/zij komt er nog een t bij.",
            },
          ],
          theorie: "Stam op d + t = dt.",
          voorbeelden: [
            {
              type: "dt",
              tekst: "worden → hij wordt, houden → hij houdt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "Mijn vriend loopt — met t. Dus: mijn vriend vindt.",
            },
          ],
          niveaus: {
            basis: "Vind + t = vindt.",
            simpeler: "Stam van vinden = vind. Mijn vriend is hij, dus + t: vindt.",
            nogSimpeler: "Vindt",
          },
        },
      },
      {
        q: "Kies de juiste vorm van **worden**: 'Het ____ al donker buiten.'",
        options: ["wordt", "word", "wort", "wordd"],
        answer: 0,
        wrongHints: [null, null, "Waar is de d van de stam gebleven?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam = word",
              tekst: "Worden − en = word (eindigt op d).",
            },
            {
              titel: "Het",
              tekst: "Bij het: stam + t. Word + t = **wordt**.",
            },
          ],
          woorden: [
            {
              woord: "stam op d",
              uitleg: "De d hoort bij de stam, de t komt erbij voor hij/zij/het.",
            },
          ],
          theorie: "hij/zij/het + stam op d = dt.",
          voorbeelden: [
            {
              type: "dt",
              tekst: "De soep wordt koud. Het boek wordt spannend.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "Het loopt — met t. Dus: het wordt.",
            },
          ],
          niveaus: {
            basis: "Word + t = wordt.",
            simpeler: "Bij het komt er een t achter de stam word.",
            nogSimpeler: "Wordt",
          },
        },
      },
      {
        q: "Welke zin is **niet** goed geschreven?",
        options: [
          "De hond word nat in de regen.",
          "Ik word nat in de regen.",
          "De hond wordt nat in de regen.",
          "Wij worden nat in de regen.",
        ],
        answer: 0,
        wrongHints: [null, "Bij ik schrijf je alleen de stam. Klopt dat hier?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wie doet het?",
              tekst: "De hond = hij. Bij hij komt er een t achter de stam: word + t = wordt. 'De hond word' mist dus de t.",
            },
          ],
          woorden: [
            {
              woord: "stam",
              uitleg: "Worden − en = word.",
            },
          ],
          theorie: "ik = stam (word). hij/zij/het = stam + t (wordt). wij = worden.",
          voorbeelden: [
            {
              type: "vergelijk",
              tekst: "Ik word moe. Hij wordt moe. Wij worden moe.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "De hond loopt — met t. Dus: de hond wordt.",
            },
          ],
          niveaus: {
            basis: "'De hond word' is fout: het moet 'wordt' zijn.",
            simpeler: "De hond is één dier (hij). Dan hoort er een t achter word.",
            nogSimpeler: "De hond wordt",
          },
        },
      },
    ],
  },
  {
    title: "Stam eindigt op t (zitten, vechten)",
    explanation: "Wanneer de stam al op een **t** eindigt, **voeg je géén extra t toe** — dat zou een dubbele t geven, en dat schrijven we niet.\n\n**Regel**: stam eindigt op t → bij hij/zij blijft het gewoon **stam met t**.\n\n**Voorbeelden**:\n\n| Werkwoord | Stam | Hij/zij |\n|---|---|---|\n| zitten | zit | zit (NIET zitt) |\n| eten | eet | eet |\n| vechten | vecht | vecht |\n| moeten | moet | moet |\n| haten | haat | haat |\n\n**Vergelijk fout vs goed**:\n\n*\"Hij zitt op de stoel\"* ❌ — dubbele t bestaat niet aan einde stam.\n*\"Hij zit op de stoel\"* ✓\n\n*\"Hij eet brood\"* ✓\n*\"Hij eett brood\"* ❌\n\n**Trucje**: Eindigt de stam al op t? Dan blijft 'ie zoals 'ie is. Geen extra t.\n\n**Lopen-test ook hier handig**:\n• Hij zit → hij loopt. Beide eindigen op één t-klank. Goed.\n• Hij eet → hij loopt. Idem. Goed.\n\n**Verschil: stam eindigt op t vs op d**\n\n*Stam op **t**: blijft t.*\n• zitten → zit (stam) → hij zit (geen extra t).\n\n*Stam op **d**: krijgt -t erachter (= dt).*\n• worden → word (stam) → hij wordt (extra t!).\n\n**Pas op met sommige werkwoorden** waar het lijkt op stam-op-t maar het is anders:\n• 'praten' → stam **praat** → hij praat (al t, blijft t).\n• 'wachten' → stam **wacht** → hij wacht (al t, blijft t).\n\n**Speciaal: 'doen', 'gaan', 'staan'** — sterke werkwoorden\n• ik doe / hij doet (geen stam-op-t, gewoon stam + t)\n• ik ga / hij gaat (gewoon stam + t)\n• ik sta / hij staat (gewoon stam + t)",
    svg: vervoegingTabelSvg("zitten", "zit", [
      { persoon: "ik", vorm: "zit", persoonKleur: COLORS.ik, uitleg: "stam (al op t)" },
      { persoon: "jij", vorm: "zit", persoonKleur: COLORS.jij, uitleg: "geen extra t" },
      { persoon: "hij/zij", vorm: "zit", persoonKleur: COLORS.hij, uitleg: "geen extra t" },
      { persoon: "wij/zij", vorm: "zitten", persoonKleur: COLORS.zij, uitleg: "stam + en" },
    ]),
    checks: [
      {
        q: "Welke is **goed**?",
        options: ["Hij zit op de stoel","Hij zitt op de stoel","Hij zits op de stoel","Hij zitten op de stoel"],
        answer: 0,
        wrongHints: [null,"Stam eindigt al op t — geen dubbele t.","Geen Nederlandse vervoeging.","-en is voor meervoud."],
        uitlegPad: {
          stappen: [
            { titel: "Stam-op-t", tekst: "Zitten → stam = zit (eindigt al op t). Bij hij geen extra t (anders dubbele tt = bestaat niet)." },
          ],
          woorden: [{ woord: "stam-op-t", uitleg: "Werkwoorden waarvan stam al op t eindigt — krijgen geen extra t." }],
          theorie: "Regel: stam eindigt op t? Hij = stam, geen extra t. Anders zou je 'zitt' krijgen — bestaat niet.",
          voorbeelden: [{ type: "stam-op-t", tekst: "zitten → hij zit. Eten → hij eet. Wachten → hij wacht. Allemaal geen extra t." }],
          basiskennis: [{ onderwerp: "Verschil stam-op-d vs t", uitleg: "Stam-op-d → +t = dt. Stam-op-t → blijft t (geen tt)." }],
          niveaus: { basis: "Stam-op-t blijft t. Zit.", simpeler: "Zit eindigt al op t. Geen extra t erbij want 'zitt' bestaat niet. Hij zit.", nogSimpeler: "Zit" },
        },
      },
      {
        q: "**'Zij (meervoud) ____ pizza'** — kies juiste vorm van **eten**:",
        options: ["eten","eett","eet","etten"],
        answer: 0,
        wrongHints: [null,"Geen Nederlandse vorm — dubbele tt aan einde.","Dat is enkelvoud.","Geen NL vorm — kijk in je woordenboek hoe het hele werkwoord eruitziet."],
        uitlegPad: {
          stappen: [{ titel: "Meervoud = hele werkwoord", tekst: "Zij meervoud = eten (hele werkwoord)." }],
          woorden: [{ woord: "infinitief", uitleg: "Het hele werkwoord (eten, lopen, werken). Wordt gebruikt voor meervoud." }],
          theorie: "Meervoud = stam + en = hele werkwoord. Eten, lopen, werken — allemaal in meervoud.",
          voorbeelden: [{ type: "meervoud", tekst: "Zij eten, wij eten, jullie eten — allemaal 'eten'." }],
          basiskennis: [{ onderwerp: "1 vs meer", uitleg: "Zij (1 vrouw) = eet. Zij (meervoud) = eten." }],
          niveaus: { basis: "Meervoud = eten.", simpeler: "Bij meervoud (zij = meer mensen) gebruik je hele werkwoord: eten.", nogSimpeler: "Meervoud = eten" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Kies de juiste vorm van **wachten**: 'Hij ____ op de bus.'",
        options: ["wacht", "wachtt", "wachten", "wachtd"],
        answer: 0,
        wrongHints: [null, "De stam eindigt al op een t. Schrijf je dan nog een t?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam = wacht",
              tekst: "Wachten − en = wacht. Eindigt al op t.",
            },
            {
              titel: "Geen extra t",
              tekst: "Hij + stam = **wacht**. Geen tt.",
            },
          ],
          woorden: [
            {
              woord: "stam op t",
              uitleg: "Stam die al op t eindigt: krijgt geen extra t.",
            },
          ],
          theorie: "Stam eindigt op t → bij hij/zij blijft het de stam. Wacht, zit, eet.",
          voorbeelden: [
            {
              type: "stam op t",
              tekst: "wachten → hij wacht, zitten → hij zit, praten → hij praat.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geen tt",
              uitleg: "Aan het eind van het werkwoord schrijf je nooit tt.",
            },
          ],
          niveaus: {
            basis: "Hij wacht.",
            simpeler: "Stam wacht eindigt al op t. Er komt geen t meer bij: hij wacht.",
            nogSimpeler: "Wacht",
          },
        },
      },
      {
        q: "Kies de juiste vorm van **eten**: 'Mijn vader ____ elke ochtend een appel.'",
        options: ["eet", "eett", "eten", "et"],
        answer: 0,
        wrongHints: [
          null,
          "De stam eindigt al op t. Komt er nog een t bij?",
          null,
          "Zeg e-ten hardop: is de e kort of lang?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam = eet",
              tekst: "Eten − en = et. Lange e → **eet**. Eindigt al op t.",
            },
            {
              titel: "Geen extra t",
              tekst: "Mijn vader = hij. Hij **eet**.",
            },
          ],
          woorden: [
            {
              woord: "stam op t",
              uitleg: "De stam eindigt al op t, dus geen extra t.",
            },
          ],
          theorie: "Stam op t → bij hij blijft het de stam: hij eet.",
          voorbeelden: [
            {
              type: "stam op t",
              tekst: "eten → hij eet, zitten → hij zit, moeten → hij moet.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "Mijn vader loopt — één t aan het eind. Mijn vader eet — ook één t.",
            },
          ],
          niveaus: {
            basis: "Hij eet.",
            simpeler: "Stam eet eindigt al op t. Geen t erbij: mijn vader eet.",
            nogSimpeler: "Eet",
          },
        },
      },
      {
        q: "Kies de juiste vorm van **moeten**: 'Jij ____ je tas inpakken.'",
        options: ["moet", "moett", "moeten", "moetd"],
        answer: 0,
        wrongHints: [null, "De stam eindigt al op t. Hoeveel t's schrijf je dan?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam = moet",
              tekst: "Moeten − en = moet. Eindigt al op t.",
            },
            {
              titel: "Jij vóór",
              tekst: "Jij + stam + t... maar er staat al een t. Dus: jij **moet**.",
            },
          ],
          woorden: [
            {
              woord: "stam op t",
              uitleg: "Geen dubbele t aan het eind.",
            },
          ],
          theorie: "Stam eindigt op t → bij jij/hij blijft het de stam. Geen tt.",
          voorbeelden: [
            {
              type: "stam op t",
              tekst: "Jij moet, hij moet, jij zit, hij zit.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geen tt",
              uitleg: "'Moett' bestaat niet.",
            },
          ],
          niveaus: {
            basis: "Jij moet.",
            simpeler: "Moet eindigt al op t. Er komt geen t meer bij: jij moet.",
            nogSimpeler: "Moet",
          },
        },
      },
      {
        q: "Kies de juiste vorm van **praten**: 'Oma ____ heel zacht.'",
        options: ["praat", "praatt", "praten", "prat"],
        answer: 0,
        wrongHints: [
          null,
          "Stam praat eindigt al op t. Komt er nog een t bij?",
          null,
          "Zeg pra-ten hardop: is de a kort of lang?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam = praat",
              tekst: "Praten − en = prat. Lange a → **praat**. Eindigt al op t.",
            },
            {
              titel: "Oma = zij",
              tekst: "Zij + praat, geen extra t: **praat**.",
            },
          ],
          woorden: [
            {
              woord: "stam op t",
              uitleg: "Stam eindigt op t → geen extra t.",
            },
          ],
          theorie: "Stam op t: hij/zij = gewoon de stam. Praat, wacht, eet.",
          voorbeelden: [
            {
              type: "stam op t",
              tekst: "praten → zij praat, wachten → zij wacht.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lange a",
              uitleg: "Pra-ten heeft een lange a. In de stam schrijf je aa: praat.",
            },
          ],
          niveaus: {
            basis: "Oma praat.",
            simpeler: "Stam praat eindigt al op t. Geen t erbij: oma praat.",
            nogSimpeler: "Praat",
          },
        },
      },
      {
        q: "Bij welk werkwoord eindigt de **stam** al op een **t**?",
        options: ["vechten", "werken", "lopen", "spelen"],
        answer: 0,
        wrongHints: [
          null,
          "Haal bij elk werkwoord -en weg. Op welke letter eindigt wat overblijft?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam zoeken",
              tekst: "Vechten → **vecht** (t). Werken → werk (k). Lopen → loop (p). Spelen → speel (l).",
            },
          ],
          woorden: [
            {
              woord: "stam",
              uitleg: "Het werkwoord zonder -en.",
            },
          ],
          theorie: "Eindigt de stam op t, dan krijgt hij bij hij/zij geen extra t: hij vecht.",
          voorbeelden: [
            {
              type: "stam op t",
              tekst: "vechten → vecht, zitten → zit, wachten → wacht.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Laatste letter",
              uitleg: "Kijk naar de laatste letter van de stam.",
            },
          ],
          niveaus: {
            basis: "Vechten → vecht (t).",
            simpeler: "Haal -en weg van vechten: vecht. Die eindigt op een t.",
            nogSimpeler: "Vecht",
          },
        },
      },
      {
        q: "In welke zin is het werkwoord **fout** gespeld?",
        options: [
          "Hij vechtt met zijn broer.",
          "Ik vecht niet graag.",
          "Hij moet naar bed.",
          "Zij wacht op haar vriendin.",
        ],
        answer: 0,
        wrongHints: [null, "Kijk naar het eind van elk werkwoord. Zie je ergens iets dubbels?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Check",
              tekst: "Ik vecht ✓. Hij moet ✓. Zij wacht ✓. Hij vechtt ✗ — stam vecht eindigt al op t: **hij vecht**.",
            },
          ],
          woorden: [
            {
              woord: "stam op t",
              uitleg: "Geen extra t als de stam al op t eindigt.",
            },
          ],
          theorie: "Stam op t → bij hij/zij blijft het de stam. Nooit tt aan het eind.",
          voorbeelden: [
            {
              type: "stam op t",
              tekst: "Hij vecht, hij moet, zij wacht.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geen tt",
              uitleg: "Een werkwoord eindigt nooit op tt.",
            },
          ],
          niveaus: {
            basis: "Fout: hij vechtt. Goed: hij vecht.",
            simpeler: "Vecht eindigt al op t. Er hoort geen tweede t bij.",
            nogSimpeler: "Hij vecht",
          },
        },
      },
      {
        q: "Kies de juiste vorm van **gaan**: 'Hij ____ naar school.'",
        options: ["gaat", "ga", "gaatt", "gaan"],
        answer: 0,
        wrongHints: [null, "Bij hij komt er iets achter de stam. Wat?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam = ga",
              tekst: "Gaan → stam ga. Eindigt niet op t.",
            },
            {
              titel: "Hij + t",
              tekst: "Ga + t = **gaat** (met aa, net als staat).",
            },
          ],
          woorden: [
            {
              woord: "gaan",
              uitleg: "Kort werkwoord: ik ga, hij gaat.",
            },
          ],
          theorie: "Doen, gaan, staan: gewoon stam + t bij hij. Ik ga / hij gaat.",
          voorbeelden: [
            {
              type: "kort",
              tekst: "ik doe / hij doet, ik ga / hij gaat, ik sta / hij staat.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "Hij loopt — met t. Dus: hij gaat.",
            },
          ],
          niveaus: {
            basis: "Hij gaat.",
            simpeler: "Stam = ga. Bij hij komt er een t bij: gaat.",
            nogSimpeler: "Gaat",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Kies de juiste vorm van **zetten**: 'Papa ____ elke ochtend thee.'",
        options: ["zet", "zett", "zetten", "zetd"],
        answer: 0,
        wrongHints: [null, "De stam eindigt al op een t. Hoeveel t's schrijf je dan?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam = zet",
              tekst: "De stam van zetten is zet. Die eindigt al op t.",
            },
            {
              titel: "Geen extra t",
              tekst: "Papa = hij. Er komt geen tweede t bij: papa **zet**.",
            },
          ],
          woorden: [
            {
              woord: "stam op t",
              uitleg: "Eindigt de stam al op t, dan blijft het zo bij hij/zij.",
            },
          ],
          theorie: "Stam op t → geen extra t. Net als zitten → hij zit.",
          voorbeelden: [
            {
              type: "t",
              tekst: "Hij zit. Zij wacht. Hij zet.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "Papa loopt — één t aan het eind. Dus: papa zet.",
            },
          ],
          niveaus: {
            basis: "Hij zet (één t).",
            simpeler: "De stam zet eindigt al op t. Er komt geen t meer bij.",
            nogSimpeler: "Zet",
          },
        },
      },
    ],
  },
  {
    title: "Verleden tijd zwakke werkwoorden — 't kofschip",
    explanation: "**Verleden tijd** vorm je bij **zwakke werkwoorden** (95% van alle werkwoorden) door **-de of -te** achter de stam te zetten.\n\nWELKE? Dat hangt af van de **laatste medeklinker van de stam**:\n\n**Geheugenezel: 't kofschip**\nAls de stam eindigt op een van deze medeklinkers — **t, k, f, s, ch, p** — dan krijgt 'ie **-te** of **-ten**.\n\nAlle andere medeklinkers (en klinkers) → **-de** of **-den**.\n\n*\"'t kofschip\"* is een woord-trucje om de letters te onthouden:\n• 't = t\n• k\n• o (klinker, telt niet)\n• f\n• s\n• ch\n• i (klinker, telt niet)\n• p\n\nDe **klinkers o + i tellen NIET** — alleen de medeklinkers.\n\n**Voorbeelden** (eindigt op t-kofschip-letter → -te/-ten):\n\n| Werkwoord | Stam | Verleden tijd |\n|---|---|---|\n| werken | werk (k) | werk**te** / werk**ten** |\n| stoppen | stop (p) | stop**te** / stop**ten** |\n| fietsen | fiets (s) | fiets**te** / fiets**ten** |\n| straffen | straf (f) | straf**te** / straf**ten** |\n| lachen | lach (ch) | lach**te** / lach**ten** |\n\n**Voorbeelden** (eindigt NIET op kofschip-letter → -de/-den):\n\n| Werkwoord | Stam | Verleden tijd |\n|---|---|---|\n| leren | leer (r) | leer**de** / leer**den** |\n| spelen | speel (l) | speel**de** / speel**den** |\n| dromen | droom (m) | droom**de** / droom**den** |\n| reizen | reis (z in reizen) | reis**de** / reis**den** |\n\n**Pas op bij 'reizen'**: de stam schrijf je als **reis** (een z aan het eind wordt s). Maar voor 't kofschip kijk je naar de letter in het hele werkwoord: reizen heeft een **z**, en die zit niet in 't kofschip — dus reisde (-de), niet reiste.\n\n**Lastige gevallen** met geluid-trucje:\nLuister wat de stam eindigt OP IN HET WERKWOORDSGELUID. Niet de geschreven letter — de uitspraak.\n• 'verhuizen' → uitspraak eindigt op 'z'-klank → **verhuisde**\n• 'leven' → uitspraak eindigt op 'v' → **leefde** (let op: f komt van v in geluid)\n• 'beloven' → uitspraak eindigt op 'v' → **beloofde**",
    svg: tKofschipSvg(),
    checks: [
      {
        q: "Welke medeklinkers zitten in **'t kofschip**?",
        options: ["t, k, f, s, ch, p","t, k, o, f, s, ch, i, p","b, d, g, v, z, l","t, k, f, s, g, p"],
        answer: 0,
        wrongHints: [null,"Klinkers o, i tellen niet mee.","Bij deze letters krijg je juist -de.","Eén letter klopt niet — zeg 't kofschip nog eens langzaam."],
        uitlegPad: {
          stappen: [
            { titel: "'t kofschip", tekst: "Geheugenezel: 't k o f s ch i p. Klinkers (o, i) tellen NIET. Medeklinkers: t, k, f, s, ch, p (de ch telt als één klank)." },
          ],
          woorden: [{ woord: "geheugenezel", uitleg: "Trucje om iets te onthouden via een woord of zinnetje." }],
          theorie: "'t kofschip = de medeklinkers t, k, f, s, ch en p waarop een werkwoordstam kan eindigen voor -te (verleden tijd). Anders -de.",
          voorbeelden: [{ type: "letters", tekst: "t (zetten → zette), k (werken → werkte), f (straffen → strafte), s (fietsen → fietste), ch (lachen → lachte), p (stoppen → stopte)." }],
          basiskennis: [{ onderwerp: "h verschijnt zelden", uitleg: "h aan einde van stam zeldzaam (lach is met ch, niet h alleen)." }],
          niveaus: { basis: "'t kofschip = t, k, f, s, ch, p.", simpeler: "De medeklinkers in 't kofschip zijn: t, k, f, s, ch en p. Klinkers (o, i) doen niet mee.", nogSimpeler: "t k f s ch p" },
        },
      },
      {
        q: "Verleden tijd van **werken**:",
        options: ["werkte","werkde","werken","werkt"],
        answer: 0,
        wrongHints: [null,"k zit in 't kofschip — dus -te.","Dat is tegenwoordige tijd meervoud.","Dat is tegenwoordige tijd (hij werkt)."],
        uitlegPad: {
          stappen: [
            { titel: "Stam check", tekst: "Werken → werk. Eindigt op K. K zit in 't kofschip → -te." },
            { titel: "Vorm", tekst: "Werk + te = werkte. Verleden tijd." },
          ],
          woorden: [{ woord: "verleden tijd", uitleg: "Wat al gebeurd is. Vorm: stam + te/de." }],
          theorie: "'t kofschip-letters → -te. Andere letters → -de.",
          voorbeelden: [{ type: "te", tekst: "werken → werkte, stoppen → stopte, fietsen → fietste." }],
          basiskennis: [{ onderwerp: "K = kofschip", uitleg: "K is een van de 7 letters waarbij -te wordt gebruikt." }],
          niveaus: { basis: "k in kofschip → werkte.", simpeler: "Stam werk eindigt op k. K zit in 't kofschip. Dus verleden tijd met -te: werkte.", nogSimpeler: "K = -te = werkte" },
        },
      },
      {
        q: "Verleden tijd van **leren**:",
        options: ["leerde","leerte","leren","leert"],
        answer: 0,
        wrongHints: [null,"r zit NIET in 't kofschip — dus -de niet -te.","Dat is tegenwoordige tijd meervoud.","Dat is tegenwoordige tijd (hij leert)."],
        uitlegPad: {
          stappen: [
            { titel: "Stam check", tekst: "Leren → leer. Eindigt op R. R zit NIET in 't kofschip → -de." },
            { titel: "Vorm", tekst: "Leer + de = leerde. Verleden tijd." },
          ],
          woorden: [{ woord: "-de uitgang", uitleg: "Voor stammen die NIET op kofschip-letter eindigen." }],
          theorie: "Niet-kofschip → -de. R zit niet in 't kofschip (alleen t, k, f, s, ch, p).",
          voorbeelden: [{ type: "de", tekst: "leren → leerde, spelen → speelde, dromen → droomde." }],
          basiskennis: [{ onderwerp: "R niet kofschip", uitleg: "R, L, M, N, klinkers — geen kofschip → -de." }],
          niveaus: { basis: "r niet in kofschip → leerde.", simpeler: "Stam leer eindigt op r. R zit NIET in 't kofschip. Dus -de: leerde.", nogSimpeler: "Niet-kofschip = -de = leerde" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Verleden tijd van **stoppen**: 'De bus ____ bij de halte.'",
        options: ["stopte", "stopde", "stopt", "stoppte"],
        answer: 0,
        wrongHints: [
          null,
          "Op welke letter eindigt de stam stop? Zit die in 't kofschip?",
          "Dat is de tegenwoordige tijd.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam check",
              tekst: "Stoppen → stop. Eindigt op p. P zit in 't kofschip → -te.",
            },
            {
              titel: "Vorm",
              tekst: "Stop + te = **stopte**.",
            },
          ],
          woorden: [
            {
              woord: "verleden tijd",
              uitleg: "Wat al gebeurd is.",
            },
          ],
          theorie: "Stam eindigt op t, k, f, s, ch of p → -te. Anders → -de.",
          voorbeelden: [
            {
              type: "te",
              tekst: "stoppen → stopte, werken → werkte, lachen → lachte.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eén p",
              uitleg: "De stam is stop (één p). Daar komt -te achter: stopte.",
            },
          ],
          niveaus: {
            basis: "p in kofschip → stopte.",
            simpeler: "Stam stop eindigt op p. P zit in 't kofschip. Dus -te: stopte.",
            nogSimpeler: "Stopte",
          },
        },
      },
      {
        q: "Verleden tijd van **lachen**: 'Ik ____ om de grap.'",
        options: ["lachte", "lachde", "lacht", "lachtte"],
        answer: 0,
        wrongHints: [
          null,
          "Stam lach eindigt op ch. Zit ch in 't kofschip?",
          "Dat is de tegenwoordige tijd.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam check",
              tekst: "Lachen → lach. Eindigt op ch. Ch zit in 't kofschip → -te.",
            },
            {
              titel: "Vorm",
              tekst: "Lach + te = **lachte**.",
            },
          ],
          woorden: [
            {
              woord: "'t kofschip",
              uitleg: "Geheugensteuntje voor t, k, f, s, ch, p.",
            },
          ],
          theorie: "Kofschip-letter aan het eind van de stam → -te.",
          voorbeelden: [
            {
              type: "te",
              tekst: "lachen → lachte, fietsen → fietste, stoppen → stopte.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "ch telt als één",
              uitleg: "De ch in 't kofschip telt als één klank.",
            },
          ],
          niveaus: {
            basis: "ch in kofschip → lachte.",
            simpeler: "Stam lach eindigt op ch. Ch zit in 't kofschip. Dus -te: lachte.",
            nogSimpeler: "Lachte",
          },
        },
      },
      {
        q: "Verleden tijd van **dromen**: 'Ik ____ over een draak.'",
        options: ["droomde", "droomte", "droomt", "dromde"],
        answer: 0,
        wrongHints: [
          null,
          "Stam droom eindigt op m. Zit m in 't kofschip?",
          null,
          "Zeg dro-men hardop. Is de o kort of lang?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam check",
              tekst: "Dromen → droom. Eindigt op m. M zit NIET in 't kofschip → -de.",
            },
            {
              titel: "Vorm",
              tekst: "Droom + de = **droomde**.",
            },
          ],
          woorden: [
            {
              woord: "-de",
              uitleg: "Uitgang voor stammen die niet op een kofschip-letter eindigen.",
            },
          ],
          theorie: "Niet-kofschip-letter → -de. M is geen kofschip-letter.",
          voorbeelden: [
            {
              type: "de",
              tekst: "dromen → droomde, leren → leerde, spelen → speelde.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lange o",
              uitleg: "De stam is droom (oo). Daar komt -de achter: droomde.",
            },
          ],
          niveaus: {
            basis: "m niet in kofschip → droomde.",
            simpeler: "Stam droom eindigt op m. M zit niet in 't kofschip. Dus -de: droomde.",
            nogSimpeler: "Droomde",
          },
        },
      },
      {
        q: "Verleden tijd van **reizen**: 'Wij ____ met de trein.'",
        options: ["reisden", "reisten", "reizden", "reizen"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de letter in het hele werkwoord reizen. Zit die in 't kofschip?",
          null,
          "Dat is de tegenwoordige tijd.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kijk naar reizen",
              tekst: "In reizen staat een z. Z zit NIET in 't kofschip → -de.",
            },
            {
              titel: "Vorm",
              tekst: "Stam reis + den (wij = meervoud) = **reisden**.",
            },
          ],
          woorden: [
            {
              woord: "-den",
              uitleg: "Verleden tijd meervoud bij niet-kofschip-letter.",
            },
          ],
          theorie: "De stam schrijf je als reis, maar voor 't kofschip kijk je naar de z in reizen. Z is geen kofschip-letter → reisde, reisden.",
          voorbeelden: [
            {
              type: "z",
              tekst: "reizen → reisde, verhuizen → verhuisde.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Meervoud",
              uitleg: "Wij → -den in plaats van -de: wij reisden.",
            },
          ],
          niveaus: {
            basis: "z niet in kofschip → reisden.",
            simpeler: "Reizen heeft een z. Z zit niet in 't kofschip. Dus -de, en bij wij -den: reisden.",
            nogSimpeler: "Reisden",
          },
        },
      },
      {
        q: "Waarom schrijf je de verleden tijd van **koken** met **-te** (kookte)?",
        options: [
          "De stam eindigt op k.",
          "Het werkwoord heeft twee o's.",
          "De stam eindigt op een klinker.",
          "Koken is een sterk werkwoord.",
        ],
        answer: 0,
        wrongHints: [null, "Doet een klinker mee in 't kofschip?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam check",
              tekst: "Koken → kook. Laatste letter = k. K zit in 't kofschip → -te: kookte.",
            },
          ],
          woorden: [
            {
              woord: "'t kofschip",
              uitleg: "t, k, f, s, ch, p → -te.",
            },
          ],
          theorie: "Je kijkt alleen naar de laatste medeklinker van de stam. Kofschip-letter → -te.",
          voorbeelden: [
            {
              type: "k",
              tekst: "koken → kookte, werken → werkte, pakken → pakte.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Klinkers tellen niet",
              uitleg: "De o's in kook doen niet mee. Alleen de laatste letter k telt.",
            },
          ],
          niveaus: {
            basis: "Kook eindigt op k → -te.",
            simpeler: "Stam kook eindigt op k. K zit in 't kofschip. Daarom: kookte.",
            nogSimpeler: "k = -te",
          },
        },
      },
      {
        q: "Welk werkwoord krijgt in de verleden tijd **-de**?",
        options: ["bellen", "pakken", "hopen", "missen"],
        answer: 0,
        wrongHints: [
          null,
          "Zoek bij elk werkwoord de stam. Welke eindigt NIET op een kofschip-letter?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stammen",
              tekst: "Bellen → bel (l): -de → **belde**. Pakken → pak (k), hopen → hoop (p), missen → mis (s): allemaal -te.",
            },
          ],
          woorden: [
            {
              woord: "-de",
              uitleg: "Voor stammen die niet op t, k, f, s, ch of p eindigen.",
            },
          ],
          theorie: "Kofschip-letter → -te. Andere letter → -de. L is geen kofschip-letter.",
          voorbeelden: [
            {
              type: "vergelijk",
              tekst: "belde, pakte, hoopte, miste.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Laatste letter",
              uitleg: "Kijk alleen naar de laatste letter van de stam.",
            },
          ],
          niveaus: {
            basis: "Bel (l) → belde.",
            simpeler: "Stam bel eindigt op l. L zit niet in 't kofschip. Dus -de: belde.",
            nogSimpeler: "Belde",
          },
        },
      },
      {
        q: "Verleden tijd van **straffen**: 'De juf ____ niemand.'",
        options: ["strafte", "strafde", "straft", "straffte"],
        answer: 0,
        wrongHints: [
          null,
          "Stam straf eindigt op f. Zit f in 't kofschip?",
          "Dat is de tegenwoordige tijd.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stam check",
              tekst: "Straffen → straf. Eindigt op f. F zit in 't kofschip → -te.",
            },
            {
              titel: "Vorm",
              tekst: "Straf + te = **strafte**.",
            },
          ],
          woorden: [
            {
              woord: "'t kofschip",
              uitleg: "t, k, f, s, ch, p → -te.",
            },
          ],
          theorie: "Kofschip-letter → -te. F is een kofschip-letter.",
          voorbeelden: [
            {
              type: "f",
              tekst: "straffen → strafte.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eén f",
              uitleg: "De stam is straf (één f). Daar komt -te achter.",
            },
          ],
          niveaus: {
            basis: "f in kofschip → strafte.",
            simpeler: "Stam straf eindigt op f. F zit in 't kofschip. Dus: strafte.",
            nogSimpeler: "Strafte",
          },
        },
      },
    ],
  },
  {
    title: "Lastig: verleden tijd vs voltooid deelwoord",
    explanation: "Niet verwarren! Twee vormen die op elkaar lijken:\n\n**Verleden tijd** *(simpel verleden — gewoonlijk -te of -de)*\n• Ik werk**te** gisteren.\n• Hij stop**te** vroeg.\n• Wij leer**den** Frans.\n\n**Voltooid deelwoord** *(na 'hebben' of 'zijn' — meestal ge-...-d of ge-...-t)*\n• Ik **heb** ge**werk**t. *(ge + stam + t)*\n• Hij **is** ge**stopt**. *(ge + stam + t)*\n• Wij **hebben** ge**leerd**. *(ge + stam + d)*\n\n**De regel voor voltooid deelwoord**:\n• ge-stam-**t** als stam eindigt op kofschip-letter\n• ge-stam-**d** als stam NIET eindigt op kofschip-letter\n\n**Zelfde regel als verleden tijd**, maar dan met -t of -d in plaats van -te of -de.\n\n**Voorbeelden**:\n\n| Werkwoord | Stam | Verleden | Voltooid |\n|---|---|---|---|\n| werken | werk (k) | werk**te** | ge**werk**t |\n| leren | leer (r) | leer**de** | ge**leerd** |\n| stoppen | stop (p) | stop**te** | ge**stopt** |\n| dromen | droom (m) | droom**de** | ge**droomd** |\n\n**Voltooid deelwoord wordt gebruikt na**:\n• **hebben** of **zijn**: ik heb gewerkt, hij is gevallen.\n• In **passief**: het werd gemaakt, het is gevonden.\n\n**Lastig: gewoon **-d** of **-t** kiezen?**\nVoor voltooid deelwoord, dezelfde 't kofschip-regel:\n• Stam eindigt op kofschip → -**t** (gewerkt, gestopt, gefietst)\n• Stam eindigt op andere letter → -**d** (geleerd, gespeeld, gedroomd)\n\n**Veelgemaakte fout** met d/t:\n*\"Ik heb gewerkt\"* ✓ (k zit in kofschip → t)\n*\"Ik heb gewerkd\"* ❌\n\n*\"Ik heb geleerd\"* ✓ (r zit niet in kofschip → d)\n*\"Ik heb geleert\"* ❌",
    svg: tKofschipSvg(),
    checks: [
      {
        q: "**'Ik heb ____'** — voltooid deelwoord van **werken**:",
        options: ["gewerkt","gewerkd","gewerken","gewerk"],
        answer: 0,
        wrongHints: [null,"Op welke letter eindigt de stam 'werk'? Zit die letter in 't kofschip?","Een voltooid deelwoord eindigt hier niet op -en. Denk aan ge + stam + ...","Mist de uitgang."],
        uitlegPad: {
          stappen: [
            { titel: "Voltooid deelwoord-formule", tekst: "ge + stam + t/d. Stam werk eindigt op k = kofschip → +t. Resultaat: gewerkt." },
          ],
          woorden: [{ woord: "voltooid deelwoord", uitleg: "Werkwoordvorm na 'hebben' of 'zijn'. Bijv. ik heb gewerkt." }],
          theorie: "Voltooid deelwoord: ge-stam-t als stam op kofschip-letter, ge-stam-d anders. Zelfde regel als verleden tijd, andere uitgang.",
          voorbeelden: [{ type: "voltooid", tekst: "werken → gewerkt, stoppen → gestopt, fietsen → gefietst — allemaal -t." }],
          basiskennis: [{ onderwerp: "Hebben/zijn + voltooid", uitleg: "Voltooid deelwoord komt na 'heb', 'is', 'wordt' etc." }],
          niveaus: { basis: "ge + werk + t = gewerkt.", simpeler: "Voltooid deelwoord: ge-...-t/d. Werk eindigt op k (kofschip) → t. Dus: ge + werk + t = gewerkt.", nogSimpeler: "Gewerkt" },
        },
      },
      {
        q: "**'Hij heeft ____'** — voltooid deelwoord van **leren**:",
        options: ["geleerd","geleert","geleren","gegelerd"],
        answer: 0,
        wrongHints: [null,"r zit NIET in kofschip → -d niet -t.","Dat is een werkwoord-vorm.","Geen NL vorm."],
        uitlegPad: {
          stappen: [
            { titel: "ge + leer + d", tekst: "Stam leer eindigt op r (geen kofschip) → -d. Resultaat: geleerd." },
          ],
          woorden: [{ woord: "ge-...-d", uitleg: "Voltooid-deelwoord-vorm voor niet-kofschip-stammen." }],
          theorie: "ge + stam + d (als niet-kofschip). Niet 'geleert' (zou kofschip impliceren).",
          voorbeelden: [{ type: "voltooid -d", tekst: "leren → geleerd, spelen → gespeeld, dromen → gedroomd." }],
          basiskennis: [{ onderwerp: "r-stam", uitleg: "Werkwoorden op -ren krijgen vaak ge-...-d." }],
          niveaus: { basis: "r niet kofschip → geleerd.", simpeler: "Stam leer eindigt op r. R zit NIET in 't kofschip. Dus voltooid: ge + leer + d = geleerd.", nogSimpeler: "Geleerd" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**'Hij is vroeg ____.'** — voltooid deelwoord van **stoppen**:",
        options: ["gestopt", "gestopd", "gestoppt", "gestop"],
        answer: 0,
        wrongHints: [
          null,
          "Stam stop eindigt op p. Zit p in 't kofschip?",
          null,
          "Er mist een letter aan het eind.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Formule",
              tekst: "ge + stam + t/d. Stam stop eindigt op p (kofschip) → t. **Gestopt**.",
            },
          ],
          woorden: [
            {
              woord: "voltooid deelwoord",
              uitleg: "Vorm na 'hebben' of 'zijn': hij is gestopt.",
            },
          ],
          theorie: "Voltooid deelwoord: ge-stam-t bij kofschip-letter, ge-stam-d bij andere letters.",
          voorbeelden: [
            {
              type: "t",
              tekst: "stoppen → gestopt, werken → gewerkt, fietsen → gefietst.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Na zijn",
              uitleg: "'Is' is een vorm van zijn. Daarna komt het voltooid deelwoord.",
            },
          ],
          niveaus: {
            basis: "ge + stop + t = gestopt.",
            simpeler: "Stop eindigt op p. P zit in 't kofschip. Dus ge-stop-t: gestopt.",
            nogSimpeler: "Gestopt",
          },
        },
      },
      {
        q: "**'Ik heb ____ over de zee.'** — voltooid deelwoord van **dromen**:",
        options: ["gedroomd", "gedroomt", "gedromd", "droomde"],
        answer: 0,
        wrongHints: [
          null,
          "Stam droom eindigt op m. Zit m in 't kofschip?",
          "Zeg dro-men hardop: kort of lang?",
          "Dat is de verleden tijd. Wat komt er na 'heb'?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Formule",
              tekst: "ge + stam + t/d. Stam droom eindigt op m (geen kofschip) → d. **Gedroomd**.",
            },
          ],
          woorden: [
            {
              woord: "voltooid deelwoord",
              uitleg: "Vorm na 'heb': ik heb gedroomd.",
            },
          ],
          theorie: "Na hebben/zijn komt het voltooid deelwoord. M is geen kofschip-letter → -d.",
          voorbeelden: [
            {
              type: "d",
              tekst: "dromen → gedroomd, leren → geleerd, spelen → gespeeld.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Verleden tijd anders",
              uitleg: "Ik droomde (verleden tijd) — ik heb gedroomd (voltooid deelwoord).",
            },
          ],
          niveaus: {
            basis: "ge + droom + d = gedroomd.",
            simpeler: "Droom eindigt op m. M zit niet in 't kofschip. Dus ge-droom-d: gedroomd.",
            nogSimpeler: "Gedroomd",
          },
        },
      },
      {
        q: "Welke zin over een fietstocht is **goed**?",
        options: [
          "Wij hebben gefietst.",
          "Wij hebben gefietsd.",
          "Wij hebben gefiets.",
          "Wij hebben fietste.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Stam fiets eindigt op s. Zit s in 't kofschip?",
          null,
          "Wat komt er na 'hebben': de verleden tijd of het voltooid deelwoord?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Formule",
              tekst: "ge + fiets + t. S zit in 't kofschip → t. **Gefietst**.",
            },
          ],
          woorden: [
            {
              woord: "voltooid deelwoord",
              uitleg: "Vorm na hebben of zijn.",
            },
          ],
          theorie: "Voltooid deelwoord: ge-stam-t (kofschip) of ge-stam-d (anders).",
          voorbeelden: [
            {
              type: "t",
              tekst: "fietsen → gefietst, werken → gewerkt, stoppen → gestopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Na hebben",
              uitleg: "Na 'hebben' komt het voltooid deelwoord, niet de verleden tijd.",
            },
          ],
          niveaus: {
            basis: "Gefietst.",
            simpeler: "Fiets eindigt op s. S zit in 't kofschip. Dus ge-fiets-t: gefietst.",
            nogSimpeler: "Gefietst",
          },
        },
      },
      {
        q: "**'Opa heeft de auto ____.'** — voltooid deelwoord van **poetsen**:",
        options: ["gepoetst", "gepoetsd", "poetste", "gepoets"],
        answer: 0,
        wrongHints: [null, "Stam poets eindigt op s. Zit s in 't kofschip?", "Wat komt er na 'heeft'?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Formule",
              tekst: "ge + poets + t. S zit in 't kofschip → t. **Gepoetst**.",
            },
          ],
          woorden: [
            {
              woord: "poetsen",
              uitleg: "Schoonmaken tot het glimt.",
            },
          ],
          theorie: "Na heeft komt het voltooid deelwoord. Kofschip-letter → ge-stam-t.",
          voorbeelden: [
            {
              type: "t",
              tekst: "poetsen → gepoetst, fietsen → gefietst.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Stam poets",
              uitleg: "Poetsen − en = poets. Laatste letter: s. Daar komt de t achter: gepoetst.",
            },
          ],
          niveaus: {
            basis: "ge + poets + t = gepoetst.",
            simpeler: "Poets eindigt op s. S zit in 't kofschip. Dus ge-poets-t: gepoetst.",
            nogSimpeler: "Gepoetst",
          },
        },
      },
      {
        q: "**'Wij hebben een paard ____.'** — voltooid deelwoord van **tekenen**:",
        options: ["getekend", "getekent", "tekende", "getekenen"],
        answer: 0,
        wrongHints: [null, "Stam teken eindigt op n. Zit n in 't kofschip?", "Wat komt er na 'hebben'?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Formule",
              tekst: "ge + teken + d. N zit niet in 't kofschip → d. **Getekend**.",
            },
          ],
          woorden: [
            {
              woord: "voltooid deelwoord",
              uitleg: "Vorm na hebben of zijn.",
            },
          ],
          theorie: "Niet-kofschip-letter → ge-stam-d. N is geen kofschip-letter.",
          voorbeelden: [
            {
              type: "d",
              tekst: "tekenen → getekend, leren → geleerd, dromen → gedroomd.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Stam teken",
              uitleg: "Tekenen − en = teken. Laatste letter: n.",
            },
          ],
          niveaus: {
            basis: "ge + teken + d = getekend.",
            simpeler: "Teken eindigt op n. N zit niet in 't kofschip. Dus ge-teken-d: getekend.",
            nogSimpeler: "Getekend",
          },
        },
      },
      {
        q: "Welk woord is een **voltooid deelwoord**?",
        options: ["gehoopt", "hoopte", "hoopt", "hopen"],
        answer: 0,
        wrongHints: [null, "Welk woord past na 'ik heb ...'?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Test",
              tekst: "Ik heb **gehoopt** ✓. Hoopte = verleden tijd, hoopt = tegenwoordige tijd, hopen = hele werkwoord.",
            },
          ],
          woorden: [
            {
              woord: "voltooid deelwoord",
              uitleg: "Ge + stam + t/d, na hebben of zijn.",
            },
          ],
          theorie: "Voltooid deelwoord van hopen: ge + hoop + t (p zit in 't kofschip) = gehoopt.",
          voorbeelden: [
            {
              type: "hopen",
              tekst: "hoopt, hoopte, gehoopt, hopen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Heb-test",
              uitleg: "Zet 'ik heb' ervoor. Klinkt het goed? Dan is het een voltooid deelwoord.",
            },
          ],
          niveaus: {
            basis: "Gehoopt.",
            simpeler: "Je zegt: ik heb gehoopt. Het begint met ge-. Dat is een voltooid deelwoord.",
            nogSimpeler: "Gehoopt",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**'Papa heeft soep ____.'** — voltooid deelwoord van **koken**:",
        options: ["gekookt", "gekookd", "kookte", "gekoken"],
        answer: 0,
        wrongHints: [null, "Stam kook eindigt op k. Zit k in 't kofschip?", "Wat komt er na 'heeft'?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Na heeft",
              tekst: "Na 'heeft' komt een voltooid deelwoord: ge + stam + d of t.",
            },
            {
              titel: "Kofschip",
              tekst: "Stam kook eindigt op k. De k zit in 't kofschip, dus -t: **gekookt**.",
            },
          ],
          woorden: [
            {
              woord: "voltooid deelwoord",
              uitleg: "De vorm na hebben of zijn, zoals gewerkt of geleerd.",
            },
          ],
          theorie: "Stam op kofschip-letter → -t. Andere letter → -d.",
          voorbeelden: [
            {
              type: "t",
              tekst: "gewerkt, gestopt, gefietst",
            },
          ],
          basiskennis: [
            {
              onderwerp: "'t kofschip",
              uitleg: "De letters t, k, f, s, ch en p.",
            },
          ],
          niveaus: {
            basis: "Ge + kook + t = gekookt.",
            simpeler: "De k zit in 't kofschip. Dus eindigt het op t.",
            nogSimpeler: "Gekookt",
          },
        },
      },
    ],
  },
  {
    title: "Het verschil tussen 'word' en 'wordt' — extra strikt",
    explanation: "Dit is **dé klassieke d/t-fout** — bijna iedereen maakt 'm wel eens.\n\n**Word vs Wordt**\n\n| Persoon | Vorm | Voorbeeld |\n|---|---|---|\n| ik | **word** *(geen t!)* | Ik **word** boos. |\n| jij | **wordt** *(stam + t)* | Jij **wordt** snel kwaad. |\n| jij ACHTER werkwoord | **word** *(t valt weg)* | **Word** jij boos? |\n| hij/zij/het | **wordt** *(stam + t)* | Hij **wordt** beter. |\n| wij/zij (meervoud) | **worden** *(stam + en)* | Wij **worden** moe. |\n\n**Dezelfde regel voor**:\n\n| Werkwoord | ik | jij/hij | jij ACHTER | meervoud |\n|---|---|---|---|---|\n| worden | word | wordt | word? | worden |\n| vinden | vind | vindt | vind? | vinden |\n| zenden | zend | zendt | zend? | zenden |\n| houden | houd | houdt | houd? | houden |\n| binden | bind | bindt | bind? | binden |\n\n**4 stappen om te kiezen**:\n1. **Wie doet het?**\n2. **Eindigt stam op d?** Zo ja: bij ik = alleen d. Bij hij/zij = dt. Bij meervoud = den.\n3. **Staat 'jij' achter het werkwoord?** Dan valt de t weg.\n4. **Lopen-test**: vervang werkwoord door 'lopen'. Welke vorm is gelijkwaardig?\n\n**Voorbeelden**:\n• Ik (worden) gek → ik **word** gek. (Stam alleen)\n• Jij (worden) groot → jij **wordt** groot. (Stam + t)\n• Word **jij** soms moe? → **word** (jij erachter, t valt weg).\n• Hij (worden) koud → hij **wordt** koud. (Stam + t)\n• Zij (worden) ouder → zij **worden** ouder. (Meervoud, stam + en).\n\n**Pas op**: bij **ik** is het gewoon de stam — geen t en geen extra letter. Veel mensen schrijven hier 'wordt' of 'wordd' — beide fout.\n\n*\"Ik word boos\"* ✓\n*\"Ik wordt boos\"* ❌\n*\"Ik wordd boos\"* ❌\n\n**Onthoud**: ik = stam alleen. Hij/zij/jij vóór = stam + t = dt.",
    svg: vervoegingTabelSvg("worden", "word", [
      { persoon: "ik", vorm: "word", persoonKleur: COLORS.ik, uitleg: "stam alleen" },
      { persoon: "jij voor", vorm: "wordt", persoonKleur: COLORS.jij, uitleg: "stam + t = dt" },
      { persoon: "Word jij?", vorm: "word", persoonKleur: COLORS.fout, uitleg: "jij achter = t weg" },
      { persoon: "hij/zij", vorm: "wordt", persoonKleur: COLORS.hij, uitleg: "stam + t = dt" },
      { persoon: "wij/zij", vorm: "worden", persoonKleur: COLORS.zij, uitleg: "stam + en" },
    ]),
    checks: [
      {
        q: "Kies de juiste: **'____ jij vandaag jarig?'**",
        options: ["Word","Wordt","Wordd","Worden"],
        answer: 0,
        wrongHints: [null,"Bij 'jij ACHTER het werkwoord' valt de t weg.","Een woord eindigt nooit op dd.","Meervoud past niet bij jij."],
        uitlegPad: {
          stappen: [
            { titel: "Jij ACHTER", tekst: "'Word jij...' = jij staat ACHTER werkwoord. T valt weg. Word (geen t)." },
          ],
          woorden: [{ woord: "inversie", uitleg: "Werkwoord vóór onderwerp (in vragen, na voegwoorden)." }],
          theorie: "Bij vraag-vorm 'WW jij...': t valt weg. Hij/zij behouden t altijd ('Wordt hij...').",
          voorbeelden: [{ type: "jij-achter", tekst: "Word jij?, Heb jij?, Doe jij? — geen t. Wordt hij?, Heeft hij? — t blijft." }],
          basiskennis: [{ onderwerp: "Alleen jij", uitleg: "Deze regel geldt ALLEEN bij jij — niet bij hij/zij/u." }],
          niveaus: { basis: "Jij achter = geen t. Word.", simpeler: "Vraag begint met werkwoord. Jij komt erachter. Bij deze inversie valt de t weg: 'Word jij' niet 'Wordt jij'.", nogSimpeler: "Jij achter = Word" },
        },
      },
      {
        q: "Kies de juiste: **'Hij ____ boos.'**",
        options: ["wordt","word","wordd","worden"],
        answer: 0,
        wrongHints: [null,"Mist de -t van vervoeging bij hij.","Een woord eindigt nooit op dd.","Meervoud — niet bij hij."],
        uitlegPad: {
          stappen: [{ titel: "Hij = stam + t", tekst: "Word + t = wordt. d (stam) + t (vervoeging) = dt." }],
          woorden: [{ woord: "dt-regel", uitleg: "Stam-op-d + hij/zij = dt." }],
          theorie: "Klassieke valkuil: hij wordt (dt). Niet 'word' (mist t), niet 'wordd' (geen dubbele d).",
          voorbeelden: [{ type: "dt", tekst: "Hij wordt boos / Zij wordt blij — dt-eindigingen." }],
          basiskennis: [{ onderwerp: "Lopen-test", uitleg: "Hij wordt = hij loopt. Beide eindigen op t. ✓" }],
          niveaus: { basis: "Hij wordt (dt).", simpeler: "Bij hij altijd stam + t. Stam = word. Word + t = wordt. Allebei letters apart schrijven.", nogSimpeler: "Wordt" },
        },
      },
      {
        q: "Kies de juiste: **'Ik ____ ziek.'**",
        options: ["word","wordt","wordd","worden"],
        answer: 0,
        wrongHints: [null,"Bij ik geen extra t.","Een woord eindigt nooit op dd.","Meervoud past niet bij ik."],
        uitlegPad: {
          stappen: [{ titel: "Ik = alleen stam", tekst: "Bij 'ik' alleen de stam — geen extra letters. Stam = word. Ik word." }],
          woorden: [{ woord: "ik-vorm", uitleg: "Bij ik altijd ALLEEN de stam, nooit +t." }],
          theorie: "Ik = stam (geen t). Niet 'ik wordt' (dat is hij/zij), niet 'ik word t' (geen extra letter).",
          voorbeelden: [{ type: "ik", tekst: "Ik word, ik vind, ik houd, ik zit, ik werk — allemaal alleen stam." }],
          basiskennis: [{ onderwerp: "Klassieke fout", uitleg: "Veel mensen schrijven 'ik wordt' of 'ik vindt' — beide fout. Bij ik = ALLEEN stam." }],
          niveaus: { basis: "Ik = stam alleen = word.", simpeler: "Bij 'ik' krijg je nooit een extra t. Alleen de stam. Stam van worden = word. Dus 'ik word'.", nogSimpeler: "Ik = stam = word" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Kies de juiste: **'Jij ____ steeds beter in rekenen.'**",
        options: ["wordt", "word", "wordd", "worden"],
        answer: 0,
        wrongHints: [null, "Staat 'jij' vóór of achter het werkwoord?", "Een woord eindigt nooit op dd.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Jij vóór",
              tekst: "Jij staat vóór het werkwoord. Dan: stam + t. Word + t = **wordt**.",
            },
          ],
          woorden: [
            {
              woord: "jij vóór",
              uitleg: "Jij vóór het werkwoord = stam + t.",
            },
          ],
          theorie: "Jij (vóór het werkwoord) en hij/zij/het: wordt. Alleen jij áchter het werkwoord: word.",
          voorbeelden: [
            {
              type: "jij",
              tekst: "Jij wordt groot. — Word jij groot?",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "Jij loopt — met t. Dus: jij wordt.",
            },
          ],
          niveaus: {
            basis: "Jij wordt.",
            simpeler: "Jij staat vooraan. Dan komt er een t achter de stam word: wordt.",
            nogSimpeler: "Wordt",
          },
        },
      },
      {
        q: "Kies de juiste: **'____ jij dit een mooie tekening?'** (vinden)",
        options: ["Vind", "Vindt", "Vint", "Vinden"],
        answer: 0,
        wrongHints: [null, "Waar staat 'jij' in deze vraag?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Jij achter",
              tekst: "Jij staat achter het werkwoord. De t valt weg: **Vind jij**...?",
            },
          ],
          woorden: [
            {
              woord: "jij-achter-regel",
              uitleg: "Jij achter het werkwoord = alleen de stam.",
            },
          ],
          theorie: "Vinden werkt net als worden: ik vind, jij vindt, vind jij?, hij vindt, wij vinden.",
          voorbeelden: [
            {
              type: "vinden",
              tekst: "Jij vindt het mooi. — Vind jij het mooi?",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Stam vind",
              uitleg: "Vinden − en = vind. Met d, want die hoort bij de stam.",
            },
          ],
          niveaus: {
            basis: "Vind jij? (geen t)",
            simpeler: "Jij staat achter het werkwoord. Dan valt de t weg. Alleen de stam: vind.",
            nogSimpeler: "Vind jij",
          },
        },
      },
      {
        q: "Kies de juiste: **'Wij ____ samen kampioen!'**",
        options: ["worden", "wordt", "word", "worde"],
        answer: 0,
        wrongHints: [null, "Is 'wij' één persoon of meer?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Meervoud",
              tekst: "Wij = meer personen. Meervoud = stam + en: **worden**.",
            },
          ],
          woorden: [
            {
              woord: "meervoud",
              uitleg: "Wij, jullie, zij (meer mensen).",
            },
          ],
          theorie: "Wij/jullie/zij = stam + en = hele werkwoord: worden.",
          voorbeelden: [
            {
              type: "meervoud",
              tekst: "Wij worden, jullie worden, zij worden.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "Wij lopen — op -en. Dus: wij worden.",
            },
          ],
          niveaus: {
            basis: "Wij worden.",
            simpeler: "Wij zijn meer mensen. Dan het hele werkwoord: worden.",
            nogSimpeler: "Worden",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Kies de juiste: **'____ jij ook van pannenkoeken?'** (houden)",
        options: ["Houd", "Houdt", "Hout", "Houden"],
        answer: 0,
        wrongHints: [null, "Staat 'jij' vóór of achter het werkwoord?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Jij achter",
              tekst: "Jij staat achter het werkwoord. Dan valt de t weg: **Houd** jij…?",
            },
          ],
          woorden: [
            {
              woord: "jij achter",
              uitleg: "Jij na het werkwoord, in een vraag. Dan geen t.",
            },
          ],
          theorie: "Jij vóór: houdt. Jij achter: houd.",
          voorbeelden: [
            {
              type: "jij",
              tekst: "Jij houdt van ijs. — Houd jij van ijs?",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alleen jij",
              uitleg: "Alleen bij jij achter het werkwoord valt de t weg. Bij hij blijft de t staan: Houdt hij van ijs?",
            },
          ],
          niveaus: {
            basis: "Houd jij?",
            simpeler: "Jij staat achter het werkwoord. Dan alleen de stam: houd.",
            nogSimpeler: "Houd",
          },
        },
      },
      {
        q: "Welke zin is **goed**?",
        options: [
          "Wordt het morgen mooi weer?",
          "Word het morgen mooi weer?",
          "Worden het morgen mooi weer?",
          "Wort het morgen mooi weer?",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Staat er 'jij' achter het werkwoord, of een ander woord?",
          null,
          "Waar is de d van de stam gebleven?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Het, niet jij",
              tekst: "Achter het werkwoord staat 'het', niet 'jij'. Alleen bij jij valt de t weg. Het houdt de t: **Wordt** het…?",
            },
          ],
          woorden: [
            {
              woord: "het",
              uitleg: "Hoort bij hij/zij/het: stam + t.",
            },
          ],
          theorie: "Alleen jij achter het werkwoord laat de t vallen. Hij/zij/het houdt altijd de t.",
          voorbeelden: [
            {
              type: "vergelijk",
              tekst: "Word jij moe? — Wordt hij moe?",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Lopen-test",
              uitleg: "Loopt het? — met t. Dus: wordt het?",
            },
          ],
          niveaus: {
            basis: "Wordt het?",
            simpeler: "De t valt alleen weg bij jij. Hier staat het.",
            nogSimpeler: "Wordt",
          },
        },
      },
    ],
  },
  {
    title: "Eindopdracht — alle d/t-regels samen",
    explanation: "Alle regels op een rij:\n\n**1. Tegenwoordige tijd**:\n• ik = stam (geen t)\n• jij/hij/zij/het (vóór wkw) = stam + t\n• jij ACHTER wkw = stam (t valt weg!)\n• wij/jullie/zij = stam + en\n• Stam op d → bij hij wordt = dt\n• Stam op t → blijft t (geen dubbele t)\n\n**2. Verleden tijd zwakke werkwoorden**:\n• Stam eindigt op **t-k-f-s-ch-p** ('t kofschip) → -te / -ten\n• Anders → -de / -den\n\n**3. Voltooid deelwoord**:\n• ge-stam-**t** (kofschip-stam)\n• ge-stam-**d** (anders)\n\n**4. Lopen-test**:\nBij twijfel: vervang werkwoord door 'lopen'. Eindigt 'lopen' op t? Dan ook jouw werkwoord. Eindigt op n? Idem.\n\nVeel succes!",
    svg: vervoegingTabelSvg("worden + werken", "word/werk", [
      { persoon: "ik werk", vorm: "stam", persoonKleur: COLORS.ik, uitleg: "" },
      { persoon: "hij werkt", vorm: "+ t", persoonKleur: COLORS.hij, uitleg: "" },
      { persoon: "ik word", vorm: "stam", persoonKleur: COLORS.ik, uitleg: "" },
      { persoon: "hij wordt", vorm: "+ t = dt", persoonKleur: COLORS.hij, uitleg: "" },
    ]),
    checks: [
      {
        q: "**'Hij ____ vroeg op'** — kies de juiste vorm van **staan** (tegenwoordige tijd):",
        options: ["staat","stat","stant","staan"],
        answer: 0,
        wrongHints: [null,"Stam = sta, niet stat.","Er hoort geen n in.","Meervoud."],
        uitlegPad: {
          stappen: [{ titel: "Sterk werkwoord", tekst: "Staan → stam = sta. Hij = sta + t = staat (er komt een t achter, dus de lettergreep is gesloten en de lange a schrijf je dan als aa)." }],
          woorden: [{ woord: "staan", uitleg: "Sterk/onregelmatig werkwoord. Stam = sta, hij = staat." }],
          theorie: "Bij staan/gaan/zien is de stam kort (sta, ga, zie). Bij hij komt er een t achter: staat, gaat, ziet. Bij sta en ga schrijf je dan aa, omdat de lettergreep gesloten wordt; bij zie blijft ie gewoon ie.",
          voorbeelden: [{ type: "sterk", tekst: "ik sta, jij staat, hij staat, wij staan." }],
          basiskennis: [{ onderwerp: "Klinker-verleng", uitleg: "Lange a aan het eind van een lettergreep = één a (sta). Komt er een medeklinker achter (gesloten lettergreep), dan schrijf je aa (staat)." }],
          niveaus: { basis: "Hij staat.", simpeler: "Stam van staan = sta. Bij hij + t = staat (met dubbele aa). Niet 'stat' (te kort) of 'stant' (geen n).", nogSimpeler: "Staat" },
        },
      },
      {
        q: "Verleden tijd van **fietsen**:",
        options: ["fietste","fietsde","fietsen","fietst"],
        answer: 0,
        wrongHints: [null,"s zit in kofschip → -te niet -de.","Dat is tegenwoordige tijd meervoud.","Dat is tegenwoordige tijd hij/zij."],
        uitlegPad: {
          stappen: [{ titel: "S zit in kofschip", tekst: "Stam fiets eindigt op s. S in 't kofschip → -te. Fietste." }],
          woorden: [{ woord: "kofschip-s", uitleg: "S is een van de 7 kofschip-letters → -te." }],
          theorie: "Verleden tijd: kofschip → -te. Fietsen, fietste, gefietst (allemaal -t).",
          voorbeelden: [{ type: "kofschip", tekst: "fietsen → fietste, lachen → lachte, stoppen → stopte." }],
          basiskennis: [{ onderwerp: "S = kofschip", uitleg: "S aan eind van stam = -te." }],
          niveaus: { basis: "S kofschip → fietste.", simpeler: "Stam fiets eindigt op s. S zit in 't kofschip. Verleden tijd met -te: fietste.", nogSimpeler: "S = -te = fietste" },
        },
      },
      {
        q: "Voltooid deelwoord van **wandelen**:",
        options: ["gewandeld","gewandelt","wandeld","wandelden"],
        answer: 0,
        wrongHints: [null,"l zit niet in kofschip → -d niet -t.","Mist 'ge-' aan begin.","Verleden tijd, niet voltooid."],
        uitlegPad: {
          stappen: [
            { titel: "Voltooid + l-stam", tekst: "Wandelen → wandel. L zit NIET in 't kofschip → -d. Voltooid: ge + wandel + d = gewandeld." },
          ],
          woorden: [{ woord: "ge-...-d", uitleg: "Voltooid deelwoord voor niet-kofschip-stammen." }],
          theorie: "Voltooid deelwoord: ge-stam-t/d. L is niet in kofschip → -d.",
          voorbeelden: [{ type: "voltooid -d", tekst: "wandelen → gewandeld, spelen → gespeeld, leren → geleerd." }],
          basiskennis: [{ onderwerp: "Ge- voorvoegsel", uitleg: "Voltooid deelwoord begint vrijwel altijd met 'ge-'." }],
          niveaus: { basis: "L niet kofschip → gewandeld.", simpeler: "Wandelen, stam = wandel. L zit NIET in kofschip → -d. Voltooid: ge + wandel + d = gewandeld.", nogSimpeler: "Gewandeld" },
        },
      },
      {
        q: "**'Werk ____ vandaag?'** — vul jij/hij in:",
        options: ["jij","hij","zij","ze"],
        answer: 0,
        wrongHints: [null,"Bij 'hij' zou het 'werkt hij?' zijn met t.","Bij 'zij' zou het ook 'werkt zij?' zijn.","Idem als zij."],
        uitlegPad: {
          stappen: [
            { titel: "Werkwoord zonder t", tekst: "'Werk' (geen t) past alleen bij 'jij' (achter, t valt weg). Bij hij/zij zou 't 'werkt hij/zij' zijn." },
          ],
          woorden: [{ woord: "jij-achter-regel", uitleg: "Alleen bij jij na werkwoord valt t weg." }],
          theorie: "Werkwoord-vorm zonder t + onderwerp erna = jij. Met t = hij/zij/het.",
          voorbeelden: [{ type: "vergelijking", tekst: "Werk jij? (jij = geen t). Werkt hij? (hij = wel t). Werkt zij? (zij = wel t)." }],
          basiskennis: [{ onderwerp: "T-aanwezigheid signaal", uitleg: "Geen t in werkwoord = jij na werkwoord. Wel t = hij/zij/het." }],
          niveaus: { basis: "Werk zonder t → jij.", simpeler: "'Werk' (geen t) = vorm bij 'jij' na werkwoord. Bij hij/zij zou er 'werkt' staan.", nogSimpeler: "Werk + ?  = jij" },
        },
      },
      {
        q: "Welke is goed: **'Hij vint het mooi'** of **'Hij vindt het mooi'**?",
        options: ["Hij vindt het mooi","Hij vint het mooi","Hij vind het mooi","Hij vindd het mooi"],
        answer: 0,
        wrongHints: [null,"Mist de d van de stam (vind).","Mist de t van de vervoeging.","Dubbel-d bestaat hier niet."],
        uitlegPad: {
          stappen: [{ titel: "vinden → vind + t = vindt", tekst: "Stam vind eindigt op d. Hij = +t. Beide letters: dt." }],
          woorden: [{ woord: "vindt", uitleg: "Tegenwoordige tijd hij/zij/het van 'vinden'. Met dt-eindiging." }],
          theorie: "Klassieke d/t-fout: 'hij vint' of 'hij vind' = beide fout. Stam-op-d + hij = dt = vindt.",
          voorbeelden: [{ type: "dt", tekst: "Hij vindt, hij wordt, hij houdt, hij bindt — allemaal dt." }],
          basiskennis: [{ onderwerp: "Lopen-test", uitleg: "Hij vindt = hij loopt. Beide t-einde. ✓" }],
          niveaus: { basis: "Vindt (dt).", simpeler: "Stam van vinden = vind (op d). Bij hij + t. Vind + t = vindt. Beide letters d en t schrijven.", nogSimpeler: "Vindt" },
        },
      },
      {
        q: "**'Hij heeft gisteren ____'** (werken, voltooid deelwoord)?",
        options: ["gewerkt","werkte","gewerkd","werkt"],
        answer: 0,
        wrongHints: [null, "Niet — dat is verleden tijd (VT), niet voltooid (VTT).", "Niet — bij kofschip-letter krijg je -t niet -d.", "Niet — dat is tegenwoordige tijd."],
        uitlegPad: {
          stappen: [
            { titel: "Voltooid deelwoord recipe", tekst: "**Voltooid deelwoord** = **ge- + stam + -t/-d**.\n• Stam-eindletter in 't kofschip (t,k,f,s,ch,p)? → **-t**\n• Anders → **-d**\n\nVoor 'werken':\n• Stam: werk\n• 'k' staat in 't kofschip → -t\n• Voltooid deelwoord: **ge-werk-t = gewerkt**\n\nHulpwerkwoord ervoor: 'heeft'. 'Hij heeft gewerkt'." },
            { titel: "Toets-tip: VTT vs VT", tekst: "**Drie tijden onderscheiden**:\n• Tegenwoordig (TT): 'hij werkt'\n• Verleden (VT): 'hij werkte'\n• Voltooid (VTT): 'hij heeft gewerkt'\n\nLees de vraag scherp! 'Hij heeft gisteren ____' = voltooide gebeurtenis = VTT = gewerkt." },
          ],
          woorden: [
            { woord: "voltooid deelwoord", uitleg: "Werkwoordsvorm met ge-. Bij hulpwerkwoord 'hebben/zijn'." },
            { woord: "'t kofschip", uitleg: "Ezelsbruggetje voor -t-letters: t-k-f-s-ch-p. Stam-eind in kofschip = -t in verleden + voltooid." },
          ],
          theorie: "Voltooid deelwoord-stappenplan:\n1. Stam vinden (werkwoord min -en)\n2. Stam-eindletter checken\n3. In 't kofschip? → ge-stam-t\n4. Niet in kofschip? → ge-stam-d\n\nGeldt voor zwakke werkwoorden. Sterke werkwoorden = klinker-wissel (geslapen, gegeten, gelezen).",
          voorbeelden: [
            { type: "stap", tekst: "Werken (k = kofschip) → gewerkt. Hopen (p = kofschip) → gehoopt. Reizen (z ≠ kofschip) → gereisd." },
          ],
          basiskennis: [{ onderwerp: "Sterk anders", uitleg: "Sterke werkwoorden volgen kofschip NIET: gaan→gegaan (geen -t/-d), zien→gezien, eten→gegeten." }],
          niveaus: { basis: "gewerkt.", simpeler: "Werken: stam 'werk', k in kofschip → gewerkt.", nogSimpeler: "Gewerkt" },
        },
      },
      {
        q: "**'word'** of **'wordt'**? — 'Hij ___ vanavond ouder.'",
        options: ["wordt","word","wort","worden"],
        answer: 0,
        wrongHints: [null, "Niet — 'word' is ik-vorm.", "Niet — geen 't' alleen.", "Niet — meervoud, niet bij 'hij'."],
        uitlegPad: {
          stappen: [
            { titel: "Word vs wordt", tekst: "Werkwoord **'worden'** — TT-vervoeging:\n• Ik: word (stam zonder t)\n• Jij/hij/zij/het: **wordt** (stam + t)\n• Wij/jullie/zij: worden (hele werkwoord)\n\nStam = 'word'. Eindigt op 'd'. Hij + stam + t = 'word + t' = **wordt** (twee letters dt)." },
            { titel: "Toets-instinker: dt of d?", tekst: "**Veel-gemaakte fouten**:\n• 'Hij word' ✗ — mist de t (verplicht bij hij-vorm)\n• 'Hij wort' ✗ — geen d, kan niet (stam = word, met d)\n• 'Hij wordt' ✓ — d (van stam) + t (van uitgang)\n\nKlinkt hetzelfde: 'wort'. Maar SCHRIJVEN met dt." },
          ],
          woorden: [
            { woord: "wordt", uitleg: "TT 3e persoon van worden. Stam (word) + t = wordt. Dubbele letter dt." },
          ],
          theorie: "Andere stam-op-d werkwoorden:\n• Vinden (vind) → vindt\n• Houden (houd) → houdt\n• Rijden (rijd) → rijdt\n• Snijden (snijd) → snijdt\n\nAllemaal dt-eindiging bij hij-vorm. Alleen een t schrijven ('wort') is fout.",
          voorbeelden: [
            { type: "stap", tekst: "Stam 'word'. Hij + stam + t. Word + t = wordt." },
          ],
          basiskennis: [{ onderwerp: "Lopen-test", uitleg: "Vervang 'worden' door 'lopen': 'hij loopt'. Loopt = met t. Dus wordt = met t. Lopen-test bevestigt dt." }],
          niveaus: { basis: "wordt.", simpeler: "Hij-vorm = stam 'word' + t = wordt (dt-eindiging).", nogSimpeler: "Wordt" },
        },
      },
      { q: "Vul in: 'Ik ___ je morgen.' (zien)", options: ["zie","ziet","ziende","gezien"], answer: 0, wrongHints: [null, "Niet — dat is hij-vorm.", "Niet.", "Voltooid."] },
      { q: "Vul in: 'Hij ___ heel snel.' (lopen)", options: ["loopt","loop","loopd","loopen"], answer: 0, wrongHints: [null, "Dat is ik-vorm.", "Niet — geen d.", "Hele werkwoord."] },
      { q: "Verleden tijd: 'Ik ___ thuis.' (werken, kofschip-regel)", options: ["werkte","werkde","werk","werkten"], answer: 0, wrongHints: [null, "Niet — k → t.", "Geen verleden.", "Meervoud."] },
      { q: "Verleden tijd: 'Wij ___ vrolijk.' (spelen)", options: ["speelden","speelde","speelten","spelen"], answer: 0, wrongHints: [null, "Enkelvoud.", "Niet.", "Tegenwoordige tijd."] },
      { q: "Voltooid deelwoord van 'werken'?", options: ["gewerkt","gewerkd","werkte","werkten"], answer: 0, wrongHints: [null, "Niet — k in kofschip = t.", "Verleden tijd.", "Niet."] },
      { q: "Voltooid deelwoord van 'leren'?", options: ["geleerd","geleert","leerde","leren"], answer: 0, wrongHints: [null, "Niet — r → d.", "Verleden tijd.", "Hele werkwoord."] },
      { q: "Vul: 'Hij ___ niet wat hij wil.' (weten, tegenwoordige tijd)", options: ["weet","weett","weeten","wist"], answer: 0, wrongHints: [null, "Dubbel — niet.", "Bij hij geen -en, en let op de spelling.", "Verleden tijd."] },
      { q: "Vul: 'Ik ___ dat ik gelijk heb.' (vinden)", options: ["vind","vindt","vindde","vinden"], answer: 0, wrongHints: [null, "Niet — dat is hij-vorm.", "Niet.", "Hele."] },
      { q: "Vul: 'Zij ___ snel.' (rennen, hij/zij-vorm)", options: ["rent","rend","rennen","rende"], answer: 0, wrongHints: [null, "Stam van rennen is ren — waar komt die d vandaan?", "Hele.", "Verleden."] },
      { q: "Voltooid deelwoord van 'spelen'?", options: ["gespeeld","gespelt","speelde","gespeelde"], answer: 0, wrongHints: [null, "Niet — l geen kofschip.", "Verleden tijd.", "Niet."] },
      { q: "Vul in: 'Hij ___ niet boos.' (worden)", options: ["wordt","word","wordtt","worden"], answer: 0, wrongHints: [null, "Niet — d-stam + t = dt.", "Niet — dubbele t.", "Hele."] },
      { q: "Vul in: 'Wij ___ het verhaal.' (horen)", options: ["horen","hoort","horede","horeden"], answer: 0, wrongHints: [null, "Dat is hij/zij/het.", "Niet bestaand.", "Niet."] },
      { q: "Verleden tijd: 'Hij ___ snel.' (rennen)", options: ["rende","rendde","rend","rennen"], answer: 0, wrongHints: [null, "Geen dubbele d.", "Geen verleden vorm.", "Hele."] },
      { q: "Voltooid deelwoord van 'gaan'?", options: ["gegaan","gegaand","gegan","gaan"], answer: 0, wrongHints: [null, "Geen +d/t bij onregelmatig.", "Niet.", "Hele."] },
      { q: "Vul in: 'Ik ___ aan een werkstuk.' (werken)", options: ["werk","werkt","gewerkt","werkte"], answer: 0, wrongHints: [null, "Dat is hij-vorm.", "Voltooid.", "Verleden."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const werkwoordsspellingDT = {
  id: "werkwoordsspelling-dt",
  title: "Werkwoordsspelling — d/t en 't kofschip",
  emoji: "✍️",
  level: "groep5-8", // Mark 5 okt 2026: groep 8 had maar 1 spelling-pad; d/t hoort bij de Doorstroomtoets
  subject: "spelling",
  referentieNiveau: "1F/1S",
  sloThema: "Taalverzorging — werkwoordsspelling d/t",
  prerequisites: [
    { id: "werkwoord-tijden-po", title: "Werkwoord-tijden", niveau: "po-1F" },
    { id: "woordsoorten-po", title: "Woordsoorten", niveau: "po-1F" },
  ],
  intro:
    "De d/t-regels: tegenwoordige tijd (stam + t bij hij/zij), verleden tijd ('t kofschip — t, k, f, s, ch, p → -te), voltooid deelwoord (ge-stam-t/d). Plus de klassieke valkuil word vs wordt. Voor groep 5-7 — examenstof.",
  triggerKeywords: [
    "werkwoordsspelling","d/t","dt-regel","dt regels","kofschip","t kofschip","'t kofschip",
    "tegenwoordige tijd werkwoord","verleden tijd zwak werkwoord",
    "voltooid deelwoord","ge-...-t","ge-...-d",
    "word wordt","vind vindt","houd houdt",
    "stam werkwoord","persoonsvorm",
  ],
  chapters,
  steps,
};

export default werkwoordsspellingDT;
