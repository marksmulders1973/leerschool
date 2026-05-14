// Leerpad: Werkwoordsspelling d/t — de basisregels
// 9 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: groep 5-8 basisschool. Cito-relevant.

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
        wrongHints: [null,"Dat is het hele werkwoord (infinitief).","Klinker is fout — werk niet wer.","-t hoort er niet bij."],
        uitlegPad: {
          stappen: [
            { titel: "Stam vinden", tekst: "Hele werkwoord 'werken' minus -en = 'werk'. Klinker blijft kort want lettergreep blijft gesloten." },
          ],
          woorden: [{ woord: "stam", uitleg: "De 'kale' vorm van een werkwoord — basis voor alle vervoegingen." }],
          theorie: "Stam = hele werkwoord (infinitief) MIN -en. Bij open lettergreep verleng je klinker (lopen → loop), bij gesloten blijft kort (werken → werk).",
          voorbeelden: [{ type: "stam", tekst: "werken → werk, lopen → loop, maken → maak." }],
          basiskennis: [{ onderwerp: "Open vs gesloten", uitleg: "Lopen (open) → loop (verlengen). Werken (gesloten) → werk (blijft)." }],
          niveaus: { basis: "Werken − en = werk. A.", simpeler: "Haal -en weg van 'werken'. Wat blijft? Werk. Dat is de stam. = A.", nogSimpeler: "Werk = A." },
        },
      },
      {
        q: "Wat is de **stam** van **maken**?",
        options: ["maak","mak","make","maken"],
        answer: 0,
        wrongHints: [null,"Klinker te kort — moet 'maak' worden.","-e hoort er niet bij.","Dat is het hele werkwoord."],
        uitlegPad: {
          stappen: [
            { titel: "Stam met klinker-verlengen", tekst: "Maken − en = mak. Maar 'mak' heeft korte a, terwijl 'ma-ken' lange a heeft. Verleng: maak." },
          ],
          woorden: [{ woord: "klinker-verlengen", uitleg: "Bij open lettergreep moet 1 klinker bij stam-vorming → dubbele klinker." }],
          theorie: "Stam-regel: open lettergreep (klinker lang) → bij stam dubbele klinker. Maken (ma-ken) → maak.",
          voorbeelden: [{ type: "verlengen", tekst: "maken → maak, lopen → loop, leven → leef, weten → weet." }],
          basiskennis: [{ onderwerp: "Hoor de klank", uitleg: "Open klank in 'ma-' = lang. Schrijf maak (dubbele a) niet mak." }],
          niveaus: { basis: "Maken → maak. A.", simpeler: "Maken klinkt 'maa-ken' (lange a). Stam moet ook lange a hebben: maak. = A.", nogSimpeler: "Maak = A." },
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
          niveaus: { basis: "Hij = stam + t = speelt. A.", simpeler: "Bij 'hij' altijd een -t achter de stam. Stam van spelen = speel. Hij speel + t = speelt. = A.", nogSimpeler: "Hij + t = speelt = A." },
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
          niveaus: { basis: "Jij achter = geen t. A.", simpeler: "Bij vragen waar 'jij' achter het werkwoord staat (inversie), valt de t weg. 'Werk jij hard?' niet 'werkt jij hard?'. = A.", nogSimpeler: "Jij achter = geen t = A." },
        },
      },
      {
        q: "**Zij** (= meervoud) loopt of lopen?",
        options: ["lopen","loopt","loops","loopen"],
        answer: 0,
        wrongHints: [null,"Dat is bij hij/zij ENKELVOUD.","-s is geen Nederlandse vervoeging.","Klinker fout — moet kort blijven in 'lopen'."],
        uitlegPad: {
          stappen: [
            { titel: "Meervoud", tekst: "Wij/jullie/zij (meervoud) = stam + en. Lopen heeft hele werkwoord-vorm." },
          ],
          woorden: [{ woord: "meervoud", uitleg: "Meer dan één persoon: wij, jullie, zij (=zij allemaal)." }],
          theorie: "Meervoud-vorm = stam + en (= hele werkwoord). Niet stam + t.",
          voorbeelden: [{ type: "meervoud", tekst: "Wij lopen, jullie lopen, zij lopen — geen t maar -en." }],
          basiskennis: [{ onderwerp: "Verschil enkelvoud/meervoud", uitleg: "Hij loopt (1 persoon, +t). Zij lopen (meer personen, +en)." }],
          niveaus: { basis: "Meervoud = +en. Lopen. A.", simpeler: "'Zij' kan enkelvoud (1 vrouw) of meervoud (zij allemaal) zijn. Hier meervoud. Bij meervoud: hele werkwoord (lopen). = A.", nogSimpeler: "Meervoud = lopen = A." },
        },
      },
    ],
  },
  {
    title: "Stam eindigt op d (worden, vinden)",
    explanation: "Wanneer de **stam eindigt op d**, krijgt 'ie bij hij/zij/het **nog een -t erachter**. Resultaat: **dt**!\n\n**Regel**: stam **+ t** = uitgang. Dus:\n• Stam **word** + t = **wordt** (hij wordt)\n• Stam **vind** + t = **vindt** (hij vindt)\n• Stam **houd** + t = **houdt** (hij houdt)\n\n**Vergelijk**:\n\n| Werkwoord | Stam | Hij/zij |\n|---|---|---|\n| werken | werk | werk**t** |\n| lopen | loop | loop**t** |\n| **worden** | word | word**dt** ← extra t na d! |\n| **vinden** | vind | vind**dt** |\n| **houden** | houd | houd**dt** |\n\n**Veelvoorkomende fouten**:\n\n*\"Hij word boos\"* ❌ — mist de -t (alleen stam, niet vervoegd voor hij)\n*\"Hij wordt boos\"* ✓ — stam (word) + t = wordt\n\n*\"Hij wordd boos\"* ❌ — d-d bestaat niet, het is d-t\n*\"Hij wort boos\"* ❌ — t-t mist de d van de stam\n*\"Hij wordt boos\"* ✓\n\n**Trucje** om te checken:\n1. Vind de stam (haal -en weg).\n2. Eindigt de stam op **d**? Voeg dan **t** toe → **dt**.\n\n**Belangrijk**: de **d** is van de stam, de **t** is van de vervoeging. Beide schrijf je apart — vandaar **dt**.\n\n**Trucje voor twijfel** (de '**lopen-test**'):\nVervang het werkwoord door **lopen** in dezelfde zin:\n• Hij wordt → vervang: hij loopt. Eindigt op t? Ja → dus 'wordt' eindigt ook op t. ✓\n\n**Voorbeelden om te oefenen**:\n• De man (worden) heel oud. → De man **wordt** heel oud.\n• Zij (vinden) een schat. → Zij **vinden** een schat (= meervoud, geen t-toevoeging).\n• Hij (houden) van haar. → Hij **houdt** van haar.",
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
        wrongHints: [null,"Mist de t van vervoeging — bij hij/zij altijd t.","Mist de d van de stam.","Dubbel-d komt niet voor in NL spelling."],
        uitlegPad: {
          stappen: [
            { titel: "Stam = word", tekst: "Worden − en = word (eindigt op d)." },
            { titel: "Hij = stam + t", tekst: "Word + t = wordt. Beide letters apart: d van stam, t van vervoeging = dt." },
          ],
          woorden: [{ woord: "dt-combinatie", uitleg: "Bij stam-op-d + hij/zij vervoeging = dt schrijven." }],
          theorie: "Word (stam) + t (hij) = wordt. Niet 'wort' (mist d), niet 'wordd' (dubbel-d bestaat niet).",
          voorbeelden: [{ type: "dt", tekst: "worden → hij wordt. Vinden → hij vindt. Houden → hij houdt." }],
          basiskennis: [{ onderwerp: "Lopen-test", uitleg: "Hij wordt = hij loopt. Beide eindigen op t. ✓" }],
          niveaus: { basis: "Hij = stam + t = wordt. A.", simpeler: "Stam van worden = word. Bij hij +t. Word + t = wordt. Niet 'word' (mist t), niet 'wort' (mist d). = A.", nogSimpeler: "Word + t = wordt = A." },
        },
      },
      {
        q: "**'Zij (meervoud) ____ een schat'** — kies juiste vorm van **vinden**:",
        options: ["vinden","vindt","vinden t","vindt t"],
        answer: 0,
        wrongHints: [null,"Bij meervoud (zij = meerdere mensen) gebruik je 'vinden'.","Geen Nederlandse vorm.","Geen Nederlandse vorm."],
        uitlegPad: {
          stappen: [{ titel: "Meervoud = +en", tekst: "Zij meervoud = vinden (hele werkwoord)." }],
          woorden: [{ woord: "meervoud", uitleg: "Meer personen = werkwoord op -en." }],
          theorie: "Meervoud regel: stam + en. Geen losse t. Vinden, niet vindt-en.",
          voorbeelden: [{ type: "meervoud", tekst: "Zij vinden, wij vinden, jullie vinden — allemaal -en." }],
          basiskennis: [{ onderwerp: "Verschil enkelvoud/meervoud", uitleg: "Zij vindt (1 vrouw). Zij vinden (meer mensen)." }],
          niveaus: { basis: "Meervoud = vinden. A.", simpeler: "'Zij' meervoud = meer personen → werkwoord op -en. Vinden. = A.", nogSimpeler: "Meervoud = vinden = A." },
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
          niveaus: { basis: "Hij houdt = houd + t = dt. A.", simpeler: "Houden, stam = houd (op d). Hij krijgt +t. Houd + t = houdt. Beide letters d en t schrijven. = A.", nogSimpeler: "Houdt = A." },
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
          niveaus: { basis: "Stam-op-t blijft t. Zit. A.", simpeler: "Zit eindigt al op t. Geen extra t erbij want 'zitt' bestaat niet. Hij zit. = A.", nogSimpeler: "Zit = A." },
        },
      },
      {
        q: "**'Zij (meervoud) ____ pizza'** — kies juiste vorm van **eten**:",
        options: ["eten","eett","eet","eett"],
        answer: 0,
        wrongHints: [null,"Geen Nederlandse vorm — dubbele tt aan einde.","Dat is enkelvoud.","Geen NL vorm."],
        uitlegPad: {
          stappen: [{ titel: "Meervoud = hele werkwoord", tekst: "Zij meervoud = eten (hele werkwoord)." }],
          woorden: [{ woord: "infinitief", uitleg: "Het hele werkwoord (eten, lopen, werken). Wordt gebruikt voor meervoud." }],
          theorie: "Meervoud = stam + en = hele werkwoord. Eten, lopen, werken — allemaal in meervoud.",
          voorbeelden: [{ type: "meervoud", tekst: "Zij eten, wij eten, jullie eten — allemaal 'eten'." }],
          basiskennis: [{ onderwerp: "1 vs meer", uitleg: "Zij (1 vrouw) = eet. Zij (meervoud) = eten." }],
          niveaus: { basis: "Meervoud = eten. A.", simpeler: "Bij meervoud (zij = meer mensen) gebruik je hele werkwoord: eten. = A.", nogSimpeler: "Meervoud = eten = A." },
        },
      },
    ],
  },
  {
    title: "Verleden tijd zwakke werkwoorden — 't kofschip",
    explanation: "**Verleden tijd** vorm je bij **zwakke werkwoorden** (95% van alle werkwoorden) door **-de of -te** achter de stam te zetten.\n\nWELKE? Dat hangt af van de **laatste medeklinker van de stam**:\n\n**Geheugenezel: 't kofschip**\nAls de stam eindigt op een van deze 7 medeklinkers — **t, k, f, s, ch, h, p** — dan krijgt 'ie **-te** of **-ten**.\n\nAlle andere medeklinkers (en klinkers) → **-de** of **-den**.\n\n*\"'t kofschip\"* is een woord-trucje om de letters te onthouden:\n• 't = t\n• k\n• o (klinker, telt niet)\n• f\n• s\n• ch\n• i (klinker, telt niet)\n• p\n\nDe **klinkers o + i tellen NIET** — alleen de medeklinkers.\n\n**Voorbeelden** (eindigt op t-kofschip-letter → -te/-ten):\n\n| Werkwoord | Stam | Verleden tijd |\n|---|---|---|\n| werken | werk (k) | werk**te** / werk**ten** |\n| stoppen | stop (p) | stop**te** / stop**ten** |\n| fietsen | fiets (s) | fiets**te** / fiets**ten** |\n| straffen | straf (f) | straf**te** / straf**ten** |\n| lachen | lach (ch) | lach**te** / lach**ten** |\n\n**Voorbeelden** (eindigt NIET op kofschip-letter → -de/-den):\n\n| Werkwoord | Stam | Verleden tijd |\n|---|---|---|\n| leren | leer (r) | leer**de** / leer**den** |\n| spelen | speel (l) | speel**de** / speel**den** |\n| dromen | droom (m) | droom**de** / droom**den** |\n| reizen | reis... wacht, eindigt op **z**? Nee, op **s** | reis**de** / reis**den** ❌ MOEILIJK |\n\n**Pas op met 'verzen' (z) vs 'reizen' (z)**: bij 'reizen' is stam **reis** (NIET met z, want eind-z wordt s). Maar de oorspronkelijke z telt voor 't kofschip — dus reisde (-de) niet reiste.\n\n**Lastige gevallen** met geluid-trucje:\nLuister wat de stam eindigt OP IN HET WERKWOORDSGELUID. Niet de geschreven letter — de uitspraak.\n• 'verhuizen' → uitspraak eindigt op 'z'-klank → **verhuisde**\n• 'leven' → uitspraak eindigt op 'v' → **leefde** (let op: f komt van v in geluid)\n• 'beloven' → uitspraak eindigt op 'v' → **beloofde**",
    svg: tKofschipSvg(),
    checks: [
      {
        q: "Welke 7 medeklinkers zitten in **'t kofschip**?",
        options: ["t, k, f, s, ch, h, p","t, k, o, f, s, c, h","b, c, d, e, f, g, h","Het is een trein"],
        answer: 0,
        wrongHints: [null,"Klinkers o, i tellen niet mee.","Niet alfabetisch — specifieke letters.","Het is een spelling-truc!"],
        uitlegPad: {
          stappen: [
            { titel: "'t kofschip", tekst: "Geheugenezel: 't k o f s ch i p. Klinkers (o, i) tellen NIET. Medeklinkers: t, k, f, s, ch, h, p." },
          ],
          woorden: [{ woord: "geheugenezel", uitleg: "Trucje om iets te onthouden via een woord of zinnetje." }],
          theorie: "'t kofschip = de 7 medeklinkers waarop een werkwoordstam kan eindigen voor -te (verleden tijd). Anders -de.",
          voorbeelden: [{ type: "letters", tekst: "t (zetten → zette), k (werken → werkte), f (straffen → strafte), s (fietsen → fietste), ch (lachen → lachte), p (stoppen → stopte)." }],
          basiskennis: [{ onderwerp: "h verschijnt zelden", uitleg: "h aan einde van stam zeldzaam (lach is met ch, niet h alleen)." }],
          niveaus: { basis: "'t kofschip = t,k,f,s,ch,h,p. A.", simpeler: "De 7 medeklinkers in 't kofschip zijn: t, k, f, s, ch, h, p. Klinkers (o, i) doen niet mee. = A.", nogSimpeler: "tkfsch(h)p = A." },
        },
      },
      {
        q: "Verleden tijd van **werken**:",
        options: ["werkte","werkde","werken","werkte t"],
        answer: 0,
        wrongHints: [null,"k zit in 't kofschip — dus -te.","Dat is tegenwoordige tijd meervoud.","Geen NL vorm."],
        uitlegPad: {
          stappen: [
            { titel: "Stam check", tekst: "Werken → werk. Eindigt op K. K zit in 't kofschip → -te." },
            { titel: "Vorm", tekst: "Werk + te = werkte. Verleden tijd." },
          ],
          woorden: [{ woord: "verleden tijd", uitleg: "Wat al gebeurd is. Vorm: stam + te/de." }],
          theorie: "'t kofschip-letters → -te. Andere letters → -de.",
          voorbeelden: [{ type: "te", tekst: "werken → werkte, stoppen → stopte, fietsen → fietste." }],
          basiskennis: [{ onderwerp: "K = kofschip", uitleg: "K is een van de 7 letters waarbij -te wordt gebruikt." }],
          niveaus: { basis: "k in kofschip → werkte. A.", simpeler: "Stam werk eindigt op k. K zit in 't kofschip. Dus verleden tijd met -te: werkte. = A.", nogSimpeler: "K = -te = werkte = A." },
        },
      },
      {
        q: "Verleden tijd van **leren**:",
        options: ["leerde","leerte","leren","leerts"],
        answer: 0,
        wrongHints: [null,"r zit NIET in 't kofschip — dus -de niet -te.","Dat is tegenwoordige tijd meervoud.","Geen NL vorm."],
        uitlegPad: {
          stappen: [
            { titel: "Stam check", tekst: "Leren → leer. Eindigt op R. R zit NIET in 't kofschip → -de." },
            { titel: "Vorm", tekst: "Leer + de = leerde. Verleden tijd." },
          ],
          woorden: [{ woord: "-de uitgang", uitleg: "Voor stammen die NIET op kofschip-letter eindigen." }],
          theorie: "Niet-kofschip → -de. R zit niet in 't kofschip (alleen t,k,f,s,ch,h,p).",
          voorbeelden: [{ type: "de", tekst: "leren → leerde, spelen → speelde, dromen → droomde." }],
          basiskennis: [{ onderwerp: "R niet kofschip", uitleg: "R, L, M, N, klinkers — geen kofschip → -de." }],
          niveaus: { basis: "r niet in kofschip → leerde. A.", simpeler: "Stam leer eindigt op r. R zit NIET in 't kofschip. Dus -de: leerde. = A.", nogSimpeler: "Niet-kofschip = -de = leerde = A." },
        },
      },
    ],
  },
  {
    title: "Lastig: verleden tijd vs voltooid deelwoord",
    explanation: "Niet verwarren! Twee vormen die op elkaar lijken:\n\n**Verleden tijd** *(simpel verleden — gewoonlijk -te of -de)*\n• Ik werk**te** gisteren.\n• Hij stop**te** vroeg.\n• Wij leer**den** Frans.\n\n**Voltooid deelwoord** *(na 'hebben' of 'zijn' — meestal ge-...-d of ge-...-t)*\n• Ik **heb** ge**werk**t. *(ge + stam + t)*\n• Hij **is** ge**stopt**. *(ge + stam + t)*\n• Wij **hebben** ge**leerd**. *(ge + stam + d)*\n\n**De regel voor voltooid deelwoord**:\n• ge-stam-**t** als stam eindigt op kofschip-letter\n• ge-stam-**d** als stam NIET eindigt op kofschip-letter\n\n**Zelfde regel als verleden tijd**, maar dan met -t of -d in plaats van -te of -de.\n\n**Voorbeelden**:\n\n| Werkwoord | Stam | Verleden | Voltooid |\n|---|---|---|---|\n| werken | werk (k) | werk**te** | ge**werk**t |\n| leren | leer (r) | leer**de** | ge**leerd** |\n| stoppen | stop (p) | stop**te** | ge**stopt** |\n| dromen | droom (m) | droom**de** | ge**droomd** |\n\n**Voltooid deelwoord wordt gebruikt na**:\n• **hebben** of **zijn**: ik heb gewerkt, hij is gevallen.\n• In **passief**: het werd gemaakt, het is gevonden.\n\n**Lastig: gewoon **-d** of **-t** kiezen?**\nVoor voltooid deelwoord, dezelfde 't kofschip-regel:\n• Stam eindigt op kofschip → -**t** (gewerkt, gestopt, gefietst)\n• Stam eindigt op andere letter → -**d** (geleerd, gespeeld, gedoomd)\n\n**Veelgemaakte fout** met d/t:\n*\"Ik heb gewerkt\"* ✓ (k zit in kofschip → t)\n*\"Ik heb gewerkd\"* ❌\n\n*\"Ik heb geleerd\"* ✓ (r zit niet in kofschip → d)\n*\"Ik heb geleert\"* ❌",
    svg: tKofschipSvg(),
    checks: [
      {
        q: "**'Ik heb ____'** — voltooid deelwoord van **werken**:",
        options: ["gewerkt","gewerkd","gewerken","gewerk"],
        answer: 0,
        wrongHints: [null,"k zit in kofschip → -t niet -d.","Dat is een werkwoord-vorm, niet voltooid deelwoord.","Mist de uitgang."],
        uitlegPad: {
          stappen: [
            { titel: "Voltooid deelwoord-formule", tekst: "ge + stam + t/d. Stam werk eindigt op k = kofschip → +t. Resultaat: gewerkt." },
          ],
          woorden: [{ woord: "voltooid deelwoord", uitleg: "Werkwoordvorm na 'hebben' of 'zijn'. Bijv. ik heb gewerkt." }],
          theorie: "Voltooid deelwoord: ge-stam-t als stam op kofschip-letter, ge-stam-d anders. Zelfde regel als verleden tijd, andere uitgang.",
          voorbeelden: [{ type: "voltooid", tekst: "werken → gewerkt, stoppen → gestopt, fietsen → gefietst — allemaal -t." }],
          basiskennis: [{ onderwerp: "Hebben/zijn + voltooid", uitleg: "Voltooid deelwoord komt na 'heb', 'is', 'wordt' etc." }],
          niveaus: { basis: "ge + werk + t = gewerkt. A.", simpeler: "Voltooid deelwoord: ge-...-t/d. Werk eindigt op k (kofschip) → t. Dus: ge + werk + t = gewerkt. = A.", nogSimpeler: "Gewerkt = A." },
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
          niveaus: { basis: "r niet kofschip → geleerd. A.", simpeler: "Stam leer eindigt op r. R zit NIET in 't kofschip. Dus voltooid: ge + leer + d = geleerd. = A.", nogSimpeler: "Geleerd = A." },
        },
      },
    ],
  },
  {
    title: "Het verschil tussen 'word' en 'wordt' — extra strikt",
    explanation: "Dit is **dé klassieke d/t-fout** — bijna iedereen maakt 'm wel eens.\n\n**Word vs Wordt**\n\n| Persoon | Vorm | Voorbeeld |\n|---|---|---|\n| ik | **word** *(geen t!)* | Ik **word** boos. |\n| jij | **wordt** *(stam + t)* | Jij **wordt** snel kwaad. |\n| jij ACHTER werkwoord | **word** *(t valt weg)* | **Word** jij boos? |\n| hij/zij/het | **wordt** *(stam + t)* | Hij **wordt** beter. |\n| wij/zij (meervoud) | **worden** *(stam + en)* | Wij **worden** moe. |\n\n**Dezelfde regel voor**:\n\n| Werkwoord | ik | jij/hij | jij ACHTER | meervoud |\n|---|---|---|---|---|\n| worden | word | wordt | word? | worden |\n| vinden | vind | vindt | vind? | vinden |\n| zenden | zend | zendt | zend? | zenden |\n| houden | houd | houdt | houd? | houden |\n| binden | bind | bindt | bind? | binden |\n\n**4 stappen om te kiezen**:\n1. **Wie doet het?**\n2. **Eindigt stam op d?** Zoja: bij ik = alleen d. Bij hij/zij = dt. Bij meervoud = den.\n3. **Staat 'jij' achter het werkwoord?** Dan valt de t weg.\n4. **Lopen-test**: vervang werkwoord door 'lopen'. Welke vorm is gelijkwaardig?\n\n**Voorbeelden**:\n• Ik (worden) gek → ik **word** gek. (Stam alleen)\n• Jij (worden) groot → jij **wordt** groot. (Stam + t)\n• Word **jij** soms moe? → **word** (jij erachter, t valt weg).\n• Hij (worden) koud → hij **wordt** koud. (Stam + t)\n• Zij (worden) ouder → zij **worden** ouder. (Meervoud, stam + en).\n\n**Pas op**: bij **ik** is het gewoon de stam — geen t en geen extra letter. Veel mensen schrijven hier 'wordt' of 'wordd' — beide fout.\n\n*\"Ik word boos\"* ✓\n*\"Ik wordt boos\"* ❌\n*\"Ik wordd boos\"* ❌\n\n**Onthoud**: ik = stam alleen. Hij/zij/jij vóór = stam + t = dt.",
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
        wrongHints: [null,"Bij 'jij ACHTER het werkwoord' valt de t weg.","Dubbel-d komt niet voor.","Meervoud past niet bij jij."],
        uitlegPad: {
          stappen: [
            { titel: "Jij ACHTER", tekst: "'Word jij...' = jij staat ACHTER werkwoord. T valt weg. Word (geen t)." },
          ],
          woorden: [{ woord: "inversie", uitleg: "Werkwoord vóór onderwerp (in vragen, na voegwoorden)." }],
          theorie: "Bij vraag-vorm 'WW jij...': t valt weg. Hij/zij behouden t altijd ('Wordt hij...').",
          voorbeelden: [{ type: "jij-achter", tekst: "Word jij?, Heb jij?, Doe jij? — geen t. Wordt hij?, Heeft hij? — t blijft." }],
          basiskennis: [{ onderwerp: "Alleen jij", uitleg: "Deze regel geldt ALLEEN bij jij — niet bij hij/zij/u." }],
          niveaus: { basis: "Jij achter = geen t. Word. A.", simpeler: "Vraag begint met werkwoord. Jij komt erachter. Bij deze inversie valt de t weg: 'Word jij' niet 'Wordt jij'. = A.", nogSimpeler: "Jij achter = Word = A." },
        },
      },
      {
        q: "Kies de juiste: **'Hij ____ boos.'**",
        options: ["wordt","word","wordd","worden"],
        answer: 0,
        wrongHints: [null,"Mist de -t van vervoeging bij hij.","Dubbel-d bestaat niet.","Meervoud — niet bij hij."],
        uitlegPad: {
          stappen: [{ titel: "Hij = stam + t", tekst: "Word + t = wordt. d (stam) + t (vervoeging) = dt." }],
          woorden: [{ woord: "dt-regel", uitleg: "Stam-op-d + hij/zij = dt." }],
          theorie: "Klassieke valkuil: hij wordt (dt). Niet 'word' (mist t), niet 'wordd' (geen dubbele d).",
          voorbeelden: [{ type: "dt", tekst: "Hij wordt boos / Zij wordt blij — dt-eindigingen." }],
          basiskennis: [{ onderwerp: "Lopen-test", uitleg: "Hij wordt = hij loopt. Beide eindigen op t. ✓" }],
          niveaus: { basis: "Hij wordt (dt). A.", simpeler: "Bij hij altijd stam + t. Stam = word. Word + t = wordt. Allebei letters apart schrijven. = A.", nogSimpeler: "Wordt = A." },
        },
      },
      {
        q: "Kies de juiste: **'Ik ____ ziek.'**",
        options: ["word","wordt","wordd","worden"],
        answer: 0,
        wrongHints: [null,"Bij ik geen extra t.","Dubbel-d bestaat niet.","Meervoud past niet bij ik."],
        uitlegPad: {
          stappen: [{ titel: "Ik = alleen stam", tekst: "Bij 'ik' alleen de stam — geen extra letters. Stam = word. Ik word." }],
          woorden: [{ woord: "ik-vorm", uitleg: "Bij ik altijd ALLEEN de stam, nooit +t." }],
          theorie: "Ik = stam (geen t). Niet 'ik wordt' (dat is hij/zij), niet 'ik word t' (geen extra letter).",
          voorbeelden: [{ type: "ik", tekst: "Ik word, ik vind, ik houd, ik zit, ik werk — allemaal alleen stam." }],
          basiskennis: [{ onderwerp: "Klassieke fout", uitleg: "Veel mensen schrijven 'ik wordt' of 'ik vindt' — beide fout. Bij ik = ALLEEN stam." }],
          niveaus: { basis: "Ik = stam alleen = word. A.", simpeler: "Bij 'ik' krijg je nooit een extra t. Alleen de stam. Stam van worden = word. Dus 'ik word'. = A.", nogSimpeler: "Ik = stam = word = A." },
        },
      },
    ],
  },
  {
    title: "Eindopdracht — alle d/t-regels samen",
    explanation: "Alle regels op een rij:\n\n**1. Tegenwoordige tijd**:\n• ik = stam (geen t)\n• jij/hij/zij/het (vóór wkw) = stam + t\n• jij ACHTER wkw = stam (t valt weg!)\n• wij/jullie/zij = stam + en\n• Stam op d → bij hij wordt = dt\n• Stam op t → blijft t (geen dubbele t)\n\n**2. Verleden tijd zwakke werkwoorden**:\n• Stam eindigt op **t-k-f-s-ch-h-p** ('t kofschip) → -te / -ten\n• Anders → -de / -den\n\n**3. Voltooid deelwoord**:\n• ge-stam-**t** (kofschip-stam)\n• ge-stam-**d** (anders)\n\n**4. Lopen-test**:\nBij twijfel: vervang werkwoord door 'lopen'. Eindigt 'lopen' op t? Dan ook jouw werkwoord. Eindigt op n? Idem.\n\nVeel succes!",
    svg: vervoegingTabelSvg("worden + werken", "word/werk", [
      { persoon: "ik werk", vorm: "stam", persoonKleur: COLORS.ik, uitleg: "" },
      { persoon: "hij werkt", vorm: "+ t", persoonKleur: COLORS.hij, uitleg: "" },
      { persoon: "ik word", vorm: "stam", persoonKleur: COLORS.ik, uitleg: "" },
      { persoon: "hij wordt", vorm: "+ t = dt", persoonKleur: COLORS.hij, uitleg: "" },
    ]),
    checks: [
      {
        q: "**'Hij ____ vroeg op'** — kies juiste van **staan** (tegenwoordige tijd):",
        options: ["staat","stat","stant","staan"],
        answer: 0,
        wrongHints: [null,"Stam = sta, niet stat.","Dubbel-n is fout.","Meervoud."],
        uitlegPad: {
          stappen: [{ titel: "Sterk werkwoord", tekst: "Staan → stam = sta. Hij = sta + t = staat (a wordt aa want open lettergreep)." }],
          woorden: [{ woord: "staan", uitleg: "Sterk/onregelmatig werkwoord. Stam = sta, hij = staat." }],
          theorie: "Bij staan/gaan/zien: stam is kort (sta, ga, zie). Bij hij wordt klinker lang: staat, gaat, ziet.",
          voorbeelden: [{ type: "sterk", tekst: "ik sta, jij staat, hij staat, wij staan." }],
          basiskennis: [{ onderwerp: "Klinker-verleng", uitleg: "Open lettergreep + meer letters → klinker wordt lang." }],
          niveaus: { basis: "Hij staat. A.", simpeler: "Stam van staan = sta. Bij hij + t = staat (met dubbele aa). Niet 'stat' (te kort) of 'stant' (geen n). = A.", nogSimpeler: "Staat = A." },
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
          niveaus: { basis: "S kofschip → fietste. A.", simpeler: "Stam fiets eindigt op s. S zit in 't kofschip. Verleden tijd met -te: fietste. = A.", nogSimpeler: "S = -te = fietste = A." },
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
          niveaus: { basis: "L niet kofschip → gewandeld. A.", simpeler: "Wandelen, stam = wandel. L zit NIET in kofschip → -d. Voltooid: ge + wandel + d = gewandeld. = A.", nogSimpeler: "Gewandeld = A." },
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
          niveaus: { basis: "Werk zonder t → jij. A.", simpeler: "'Werk' (geen t) = vorm bij 'jij' na werkwoord. Bij hij/zij zou er 'werkt' staan. = A.", nogSimpeler: "Werk + ?  = jij = A." },
        },
      },
      {
        q: "Welke is goed: **'Hij vint het mooi'** of **'Hij vindt het mooi'**?",
        options: ["Hij vindt het mooi","Hij vint het mooi","Hij vind het mooi","Hij vindd het mooi"],
        answer: 0,
        wrongHints: [null,"Stam = vind (met d), + t = vindt.","Mist de d van de stam.","Mist de t van vervoeging.","Dubbel-d bestaat niet."],
        uitlegPad: {
          stappen: [{ titel: "vinden → vind + t = vindt", tekst: "Stam vind eindigt op d. Hij = +t. Beide letters: dt." }],
          woorden: [{ woord: "vindt", uitleg: "Tegenwoordige tijd hij/zij/het van 'vinden'. Met dt-eindiging." }],
          theorie: "Klassieke d/t-fout: 'hij vint' of 'hij vind' = beide fout. Stam-op-d + hij = dt = vindt.",
          voorbeelden: [{ type: "dt", tekst: "Hij vindt, hij wordt, hij houdt, hij bindt — allemaal dt." }],
          basiskennis: [{ onderwerp: "Lopen-test", uitleg: "Hij vindt = hij loopt. Beide t-einde. ✓" }],
          niveaus: { basis: "Vindt (dt). A.", simpeler: "Stam van vinden = vind (op d). Bij hij + t. Vind + t = vindt. Beide letters d en t schrijven. = A.", nogSimpeler: "Vindt = A." },
        },
      },
      {
        q: "**'Hij is gisteren ____'** (werken, voltooid deelwoord)?",
        options: ["gewerkt","werkte","gewerkd","werkt"],
        answer: 0,
        wrongHints: [null,"Klopt — voltooid deelwoord: ge-stam-t want stam 'werk' eindigt op kofschip-letter k.","Niet — dat is verleden tijd (VT), niet voltooid (VTT).","Niet — bij kofschip-letter krijg je -t niet -d.","Niet — dat is tegenwoordige tijd."],
        uitlegPad: {
          stappen: [
            { titel: "Voltooid deelwoord recipe", tekst: "**Voltooid deelwoord** = **ge- + stam + -t/-d**.\n• Stam-eindletter in 't kofschip (t,k,f,s,ch,p)? → **-t**\n• Anders → **-d**\n\nVoor 'werken':\n• Stam: werk\n• 'k' staat in 't kofschip → -t\n• Voltooid deelwoord: **ge-werk-t = gewerkt**\n\nHulpwerkwoord ervoor: 'is/heeft'. 'Hij is/heeft gewerkt'." },
            { titel: "Cito-tip: VTT vs VT", tekst: "**Drie tijden onderscheiden**:\n• Tegenwoordig (TT): 'hij werkt'\n• Verleden (VT): 'hij werkte'\n• Voltooid (VTT): 'hij heeft gewerkt'\n\nLezen vraag scherp! 'Hij is gisteren ____' = voltooide gebeurtenis = VTT = gewerkt." },
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
          niveaus: { basis: "gewerkt. = A.", simpeler: "Werken: stam 'werk', k in kofschip → gewerkt. = A.", nogSimpeler: "Gewerkt = A." },
        },
      },
      {
        q: "**'word'** of **'wordt'**? — 'Hij ___ vanavond ouder.'",
        options: ["wordt","word","wort","worden"],
        answer: 0,
        wrongHints: [null,"Klopt — 3e persoon (hij) = stam + t = wordt.","Niet — 'word' is ik-vorm.","Niet — geen 't' alleen.","Niet — meervoud, niet bij 'hij'."],
        uitlegPad: {
          stappen: [
            { titel: "Word vs wordt", tekst: "Werkwoord **'worden'** — TT-vervoeging:\n• Ik: word (stam zonder t)\n• Jij/hij/zij/het: **wordt** (stam + t)\n• Wij/jullie/zij: worden (hele werkwoord)\n\nStam = 'word'. Eindigt op 'd'. Hij + stam + t = 'word + t' = **wordt** (twee letters dt)." },
            { titel: "Cito-instinker: dt of d?", tekst: "**Veel-gemaakte fouten**:\n• 'Hij word' ✗ — mist de t (verplicht bij hij-vorm)\n• 'Hij wort' ✗ — geen d, kan niet (stam = word, met d)\n• 'Hij wordt' ✓ — d (van stam) + t (van uitgang)\n\nKlinkt hetzelfde: 'wort'. Maar SCHRIJVEN met dt." },
          ],
          woorden: [
            { woord: "wordt", uitleg: "TT 3e persoon van worden. Stam (word) + t = wordt. Dubbele letter dt." },
          ],
          theorie: "Andere stam-op-d werkwoorden:\n• Vinden (vind) → vindt\n• Houden (houd) → houdt\n• Rijden (rijd) → rijdt\n• Snijden (snijd) → snijdt\n\nAllemaal dt-eindiging bij hij-vorm. Engel-stijl: één t — fout.",
          voorbeelden: [
            { type: "stap", tekst: "Stam 'word'. Hij + stam + t. Word + t = wordt." },
          ],
          basiskennis: [{ onderwerp: "Lopen-test", uitleg: "Vervang 'worden' door 'lopen': 'hij loopt'. Loopt = met t. Dus wordt = met t. Lopen-test bevestigt dt." }],
          niveaus: { basis: "wordt. = A.", simpeler: "Hij-vorm = stam 'word' + t = wordt (dt-eindiging). = A.", nogSimpeler: "Wordt = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const werkwoordsspellingDT = {
  id: "werkwoordsspelling-dt",
  title: "Werkwoordsspelling — d/t en 't kofschip",
  emoji: "✍️",
  level: "groep5-7",
  subject: "spelling",
  referentieNiveau: "1F/1S",
  sloThema: "Taalverzorging — werkwoordsspelling d/t",
  prerequisites: [
    { id: "werkwoord-tijden-po", title: "Werkwoord-tijden", niveau: "po-1F" },
    { id: "woordsoorten-po", title: "Woordsoorten", niveau: "po-1F" },
  ],
  intro:
    "De d/t-regels: tegenwoordige tijd (stam + t bij hij/zij), verleden tijd ('t kofschip — t,k,f,s,ch,h,p → -te), voltooid deelwoord (ge-stam-t/d). Plus de klassieke valkuil word vs wordt. Voor groep 5-7 — examenstof.",
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
