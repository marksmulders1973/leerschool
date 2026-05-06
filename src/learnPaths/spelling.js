// Leerpad: Spelling — Nederlands onderbouw (klas 1-2 vmbo/havo/vwo)
// 14 stappen in 5 hoofdstukken (A t/m E).
// Tone: vriendelijk en heel praktisch. Veel voorbeelden uit gewone zinnen.
// Geen werkwoordsspelling — die zit al in werkwoordsvervoeging.js.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  goodSoft: "#69f0ae",
  warm: "#ffd54f",
  warmSoft: "#fff59d",
  alt: "#ff7043",
  altSoft: "#ffab91",
  blue: "#5b86b8",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = [
  "🔓", "🅰️", "🔚",                    // A. Klanken en lettergrepen
  "🪞", "🪙", "🌬️",                    // B. Lastige klanken
  "🧱", "🔗", "✂️",                     // C. Samenstellingen
  "🔠", "🐣", "❜",                      // D. Bijzondere gevallen
  "🎯", "🏆",                            // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Klanken en lettergrepen", emoji: "🔓", from: 0, to: 2 },
  { letter: "B", title: "Lastige klanken (ei/ij, au/ou, ch/g)", emoji: "🪞", from: 3, to: 5 },
  { letter: "C", title: "Samenstellingen", emoji: "🔗", from: 6, to: 8 },
  { letter: "D", title: "Bijzondere gevallen", emoji: "🔠", from: 9, to: 11 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 12, to: 13 },
];

const steps = [
  // ─── A. Klanken en lettergrepen ───────────────────────
  {
    title: "Open en gesloten lettergrepen",
    explanation: "Een **lettergreep** is een stukje van een woord dat je in één 'hap' kunt uitspreken.\n\n**maan** = 1 lettergreep   ·   **ma-nen** = 2 lettergrepen   ·   **op-tel-len** = 3 lettergrepen\n\n**Open lettergreep** = eindigt op een **klinker** (a, e, i, o, u).\n• ma-nen → \"ma-\" eindigt op a → open\n• ho-pen → \"ho-\" eindigt op o → open\n\n**Gesloten lettergreep** = eindigt op een **medeklinker** (b, c, d, ... behalve a/e/i/o/u).\n• man-nen → \"man-\" eindigt op n → gesloten\n• hop-pen → \"hop-\" eindigt op p → gesloten\n\n**Waarom belangrijk?** De spelregels voor klinkers hangen ervan af:\n• In een **open** lettergreep is één klinker al lang: \"ma-nen\" (= aa-klank), \"ho-pen\" (= oo-klank).\n• In een **gesloten** lettergreep is één klinker kort: \"man-nen\" (a-klank), \"hop-pen\" (o-klank).\n\n**Truc om woorden in lettergrepen te splitsen**:\n1. Klap mee op je hand bij elke klinker-klank: ma-nen → 2 keer klappen.\n2. Of: zeg het langzaam — waar je adem hapt = nieuwe lettergreep.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<rect x="35" y="60" width="105" height="64" rx="8" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="87" y="82" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">OPEN</text>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">eindigt op klinker</text>
<text x="87" y="116" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">ma-nen</text>
<rect x="160" y="60" width="105" height="64" rx="8" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="212" y="82" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">GESLOTEN</text>
<text x="212" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">eindigt op medekl.</text>
<text x="212" y="116" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">man-nen</text>
<text x="150" y="148" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">truc: klap mee bij elke klinker</text>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">open = klinker is lang · gesloten = klinker is kort</text>
</svg>`,
    checks: [
      {
        q: "*Hoe wordt 'lopen' verdeeld in lettergrepen?*",
        options: ["lo-pen", "lop-en", "l-open", "lopen"],
        answer: 0,
        wrongHints: [
          null,
          "De o is een lange klank — die hoort bij een open lettergreep, dus eindigt op een klinker.",
          "Eén letter kan geen lettergreep zijn — er moet minstens een klinker bij.",
          "Lopen heeft 2 lettergrepen, niet 1. Klap mee: lo - pen.",
        ],
      },
      {
        q: "*In het woord 'kammen' (= het meervoud van kam): is de eerste lettergreep 'kam' open of gesloten?*",
        options: ["Gesloten (eindigt op m)", "Open (eindigt op a)", "Halfopen", "Geen van beide"],
        answer: 0,
        wrongHints: [
          null,
          "Bij 'kam-men' eindigt de eerste lettergreep op een m — dat is een medeklinker, dus gesloten.",
          "Halfopen bestaat niet als spellingbegrip.",
          "Eén van beide moet kloppen. Loop het rijtje: eindigt 'kam-' op een klinker of een medeklinker?",
        ],
      },
    ],
  },
  {
    title: "Korte en lange klinkers — verdubbelen of niet",
    explanation: "Bij meervouds- en verkleinvormen moet je vaak **letters verdubbelen** of juist **eentje weglaten**. De regel hangt af van de **klank**:\n\n**Korte klinker** in gesloten lettergreep → de **medeklinker erna verdubbelen** zodat het kort blijft klinken.\n• kam → kam**m**en (anders zou je 'ka-men' zeggen)\n• pop → pop**p**en (anders 'po-pen')\n• bus → bus**s**en\n• hek → hek**k**en\n• rat → rat**t**en\n\n**Lange klinker** in open lettergreep → **één klinker is genoeg** (verdubbeling weghalen).\n• maan → ma-nen (één a)\n• boom → bo-men (één o)\n• vuur → vu-ren\n• zee → ze-ten? Nee — bij 'ee' blijft de dubbele e meestal: ze-ten/zeden, maar zeg-gen niet. Speciaal bij 'ee': de dubbele e blijft staan vóór een medeklinker (zee-pen), en wordt enkel vóór een klinker (ze-en, twee-en kan beide).\n\n**Heel makkelijke vuistregel**:\n• Klinker kort → medeklinker erna verdubbelen.\n• Klinker lang → één klinker schrijven.\n\n**Voorbeelden testen**:\n• man (kort) → mannen ✓ (medeklinker dubbel)\n• maan (lang) → manen ✓ (één klinker)\n• pop (kort) → poppen ✓\n• poot (lang) → poten ✓ — *let op: dit is geen werkwoord, maar het meervoud van poot!*\n• ster (kort) → sterren ✓",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">korte ↔ lange klank</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<rect x="35" y="62" width="105" height="50" rx="8" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="87" y="82" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">KORT</text>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">verdubbel medekl.</text>
<rect x="160" y="62" width="105" height="50" rx="8" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="212" y="82" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">LANG</text>
<text x="212" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">één klinker</text>
<text x="35" y="138" fill="${COLORS.text}" font-size="11" font-family="Arial">kam → kam<tspan fill="${COLORS.alt}" font-weight="bold">m</tspan>en</text>
<text x="160" y="138" fill="${COLORS.text}" font-size="11" font-family="Arial">maan → m<tspan fill="${COLORS.good}" font-weight="bold">a</tspan>nen</text>
<text x="35" y="158" fill="${COLORS.text}" font-size="11" font-family="Arial">pop → pop<tspan fill="${COLORS.alt}" font-weight="bold">p</tspan>en</text>
<text x="160" y="158" fill="${COLORS.text}" font-size="11" font-family="Arial">boom → b<tspan fill="${COLORS.good}" font-weight="bold">o</tspan>men</text>
<text x="35" y="178" fill="${COLORS.text}" font-size="11" font-family="Arial">bus → bus<tspan fill="${COLORS.alt}" font-weight="bold">s</tspan>en</text>
<text x="160" y="178" fill="${COLORS.text}" font-size="11" font-family="Arial">vuur → v<tspan fill="${COLORS.good}" font-weight="bold">u</tspan>ren</text>
</svg>`,
    checks: [
      {
        q: "*Wat is het meervoud van 'pen' (om mee te schrijven)?*",
        options: ["pennen", "penen", "pens", "penn"],
        answer: 0,
        wrongHints: [
          null,
          "Penen zou de e-klank lang maken — maar 'pen' heeft een korte e. Wat moet je dan met de medeklinker?",
          "Het Nederlandse meervoud van 'pen' eindigt op -en, niet op -s.",
          "Niet bestaand woord. Meervoud = stam + en + verdubbeling van de eindmedeklinker bij een korte klank.",
        ],
      },
      {
        q: "*Wat is het meervoud van 'boom'?*",
        options: ["bomen", "boomen", "bommen", "booms"],
        answer: 0,
        wrongHints: [
          null,
          "De oo-klank in 'boom' is lang. In een open lettergreep ('bo-men') volstaat één o.",
          "Bommen = van 'bom' (korte o). Dat is iets anders dan een boom!",
          "Het Nederlandse meervoud eindigt op -en, niet -s.",
        ],
      },
    ],
  },
  {
    title: "Eindletter — stemhebbend of stemloos?",
    explanation: "Aan het eind van een woord schrijf je vaak een **andere letter** dan je hoort. Daar zit een regel achter:\n\n**Aan het eind van een Nederlands woord** wordt een 'd' uitgesproken als 't', en een 'v'/'z' als 'f'/'s'. Maar je schrijft de letter zoals die in het meervoud / lange vorm verschijnt.\n\n**Voorbeelden**:\n• hond → klink: 'hont'. Maar meervoud = honden → dus schrijf je hond.\n• lief → klink: 'lief'. Maar lange vorm = lieve → dus schrijf je lief.\n• huis → klink: 'huis'. Meervoud = huizen → schrijf huis (let op: hier verschilt z/s).\n• raad → klink: 'raat'. Meervoud raden → raad.\n\n**Geheugentruc — verleng het woord**:\nZet er een uitgang achter (-en, -e, -de) en luister wat de letter dan is.\n• raad → ra-d-en → d ✓ (niet raat)\n• graf → gra-v-en → v? Nee, hier blijft het 'graf' want graven heeft v. Hmm. Dus schrijf graf met f maar het meervoud is graven met v.\n\n**De v/f-regel**:\n• Als de meervoud-vorm met **v** is, schrijf je in enkelvoud **f**: graf-graven, brief-brieven, doof-dove.\n• Als de meervoud-vorm met **z** is, schrijf je in enkelvoud **s**: huis-huizen, glas-glazen.\n\n**De d/t-regel** (niet werkwoord):\n• Eind klinkt als 't' maar meervoud heeft d → schrijf d: hond → honden, paard → paarden, hand → handen.\n• Eind klinkt als 't' en meervoud heeft ook t → schrijf t: kat → katten, voet → voeten.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">truc: verleng het woord</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.text}" font-size="12" font-family="Arial">hond (klinkt 'hont') → hon<tspan fill="${COLORS.good}" font-weight="bold">d</tspan>en → schrijf d</text>
<text x="35" y="98" fill="${COLORS.text}" font-size="12" font-family="Arial">lief → lie<tspan fill="${COLORS.good}" font-weight="bold">v</tspan>e → schrijf f (lief)</text>
<text x="35" y="120" fill="${COLORS.text}" font-size="12" font-family="Arial">huis → hui<tspan fill="${COLORS.good}" font-weight="bold">z</tspan>en → schrijf s (huis)</text>
<text x="35" y="142" fill="${COLORS.text}" font-size="12" font-family="Arial">paard (klinkt 'paart') → paar<tspan fill="${COLORS.good}" font-weight="bold">d</tspan>en</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">verleng + luister naar de medeklinker</text>
</svg>`,
    checks: [
      {
        q: "*Welke letter staat aan het eind van 'paard'?*",
        options: ["d", "t", "td", "dt"],
        answer: 0,
        wrongHints: [
          null,
          "Het klinkt als 't', maar pas de truc toe: meervoud is paar___en. Welke letter hoor je daar?",
          "td-combinatie staat niet aan het eind van een Nederlands zelfstandig naamwoord.",
          "dt is een werkwoordsuitgang (zoals bij vindt). Bij een gewoon woord komt er één letter.",
        ],
      },
      {
        q: "*Welke laatste letter heeft 'lief'?*",
        options: ["f", "v", "ff", "vt"],
        answer: 0,
        wrongHints: [
          null,
          "Bij meervoud/lange vorm zie je 'lieve' met v. Maar aan het eind van het enkelvoud schrijf je f (regel: v wordt aan het eind een f).",
          "Dubbele f is bij geen enkele lange vorm hier nodig.",
          "vt is geen normale eindcombinatie in het Nederlands.",
        ],
      },
    ],
  },

  // ─── B. Lastige klanken ───────────────────────────────
  {
    title: "ei vs ij — geen logische regel",
    explanation: "**ei** en **ij** klinken **precies hetzelfde** in het Nederlands. Er is **geen logische regel** waarmee je het altijd goed doet. Je moet het **woord-voor-woord leren** (woordbeeld).\n\n**Vuistregels die soms helpen** (meer trucjes dan regels):\n\n**1. ij komt veel vaker voor dan ei** in Nederlandse woorden. Bij twijfel: ij is statistisch een betere gok.\n\n**2. Korte ei (= 'kort ei') komt vaak voor in**:\n• Veel **woorden van vroeger / Latijn**: trein, plein, fontein, zwijn, plezier ← (dit is 'ie' overigens)\n• Veelvoorkomend rijtje: trein, plein, klein, sein, fontein, fortein, geheim, eik, eind, einde, eis, eilander\n\n**3. Lange ij komt vaak voor in**:\n• De meeste werkwoorden: krijgen, lijden, blijven, schrijven\n• Veel zelfstandige naamwoorden: vrijheid, gelijkheid, blijdschap\n• Eigennamen: Marije, Chris-tij-n, IJ (de rivier)\n\n**4. Specifieke woordfamilies**:\n• 'klein' (klein, kleinkind, kleinood) → ei\n• 'wijs' (wijs, wijzer, wijsheid) → ij\n\n**5. Het beruchte rijtje voor ei** (om te oefenen):\n*\"de meid eet feiten met haar reisleider in de trein.\"*\n\n**Geheim**: gewoon vaak lezen + spellingfouten zelf controleren in eigen tekst. Hoe meer woorden je tegenkomt, hoe beter je woordbeeld wordt.\n\n**Beruchte instinkers**: \n• rein vs reinigen (beide ei)\n• zijn (werkwoord) vs zeyn (bestaat niet — alleen ij)\n• mei (maand) vs mij (= 'aan mij'): beide bestaan!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">ei = ij (klinken hetzelfde!)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<rect x="35" y="62" width="105" height="56" rx="8" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="87" y="82" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">ei (kort)</text>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">trein, plein,</text>
<text x="87" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">klein, fontein</text>
<rect x="160" y="62" width="105" height="56" rx="8" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="212" y="82" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">ij (lang)</text>
<text x="212" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vrijheid, krijgen,</text>
<text x="212" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">schrijven, blij</text>
<text x="150" y="142" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">geen logische regel — woordbeeld leren</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">vaak lezen = beste oefening</text>
<text x="150" y="178" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">tip: bij twijfel — ij komt vaker voor</text>
</svg>`,
    checks: [
      {
        q: "*Hoe schrijf je het woord voor de witte vloeistof uit een koe (in een rijm-rijtje met 'plein')?*",
        options: ["melk — geen ei/ij", "meilk", "mijlk", "melk"],
        answer: 0,
        wrongHints: [
          null,
          "'Meilk' bestaat niet. Melk heeft helemaal geen ei/ij — alleen een korte e.",
          "'Mijlk' bestaat ook niet. Melk is een gewoon woord met e.",
          "Klopt — geen instinker met ei/ij hier. Melk schrijf je gewoon zo.",
        ],
      },
      {
        q: "*Welk woord is correct gespeld?*",
        options: ["vrijheid", "vreiheid", "vryheid", "vreyheid"],
        answer: 0,
        wrongHints: [
          null,
          "Vrijheid is een 'ij'-woord, geen 'ei'.",
          "De y wordt in modern Nederlands niet meer gebruikt voor deze klank — wel ij.",
          "De combinatie 'ey' bestaat niet in het Nederlands.",
        ],
      },
    ],
  },
  {
    title: "au vs ou — net zo lastig",
    explanation: "**au** en **ou** klinken ook **precies hetzelfde**. Net als bij ei/ij: woordbeeld leren is de enige weg.\n\n**Ou is veel vaker voorkomend dan au.** Bij twijfel = ou een goede gok.\n\n**Veelvoorkomende au-woorden** (om te leren):\n• auto, augustus, applaus, blauw, kabouter, paus, restaurant, saus, taupe, trauma\n• En ook: nautisch, klauw, lauw, mauw, pauw, rauw, paus, kraut\n\n**Veelvoorkomende ou-woorden**:\n• oud, ouder, koud, vrouw, mouw, hout, route, fout, schouder, bouwen, vouwen, houden, jou, nou, zou, zout, blouson, koud, woud\n• En ook: bouw, douche, rouwen, hou, bout, gouden, houtwol\n\n**Trucjes**:\n\n**1. Familie-truc**: woorden uit dezelfde familie hebben dezelfde spelling.\n• oud → ouder, oudst, oudheid (allemaal ou)\n• vouwen → opvouwen, vouwfiets (allemaal ou)\n\n**2. Werkwoorden -ouwen / -auwen**:\n• Vaak ou: bouwen, vouwen, houwen, schouwen, zouwen\n• Soms au: blauwen (= blauw maken), klauwen, lauwen, mauwen, pauwen\n\n**Beruchte fouten**:\n• \"olifant\" — schrijf je met o, niet ou\n• \"oranje\" — schrijf je met o\n• \"roze\" — schrijf je met o (één z!)\n\n**Tip**: bij twijfel, schrijf het **op** en kijk of het 'er goed uitziet'. Soms gebruikt je hersenen het woordbeeld zonder dat je de regel kent.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">au = ou (klinken hetzelfde!)</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<rect x="35" y="62" width="105" height="56" rx="8" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="87" y="82" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">au (zeldzaam)</text>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">auto, blauw, paus,</text>
<text x="87" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">augustus, saus</text>
<rect x="160" y="62" width="105" height="56" rx="8" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="212" y="82" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">ou (vaker)</text>
<text x="212" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">oud, vrouw, hout,</text>
<text x="212" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">koud, bouwen</text>
<text x="150" y="142" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">familie-truc: oud, ouder, oudheid (al ou)</text>
<text x="150" y="162" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">bij twijfel: schrijf het op + kijk</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">ou komt vaker voor — gokken? ou.</text>
</svg>`,
    checks: [
      {
        q: "*Welke spelling is correct voor het voertuig met 4 wielen waar je in rijdt?*",
        options: ["auto", "outo", "ouwto", "auwto"],
        answer: 0,
        wrongHints: [
          null,
          "Auto is een van de bekendste au-woorden. Niet ou.",
          "Ouwto bestaat niet — geen 'w' in dit woord.",
          "Auwto bestaat ook niet. Het is gewoon: au + to.",
        ],
      },
      {
        q: "*Welke spelling klopt voor het tegenovergestelde van warm?*",
        options: ["koud", "kaud", "kowd", "cowd"],
        answer: 0,
        wrongHints: [
          null,
          "Koud is een typisch ou-woord — heeft een familie: koud, kouder, koudst.",
          "Kowd bestaat niet in Nederlands. We gebruiken 'ou' voor deze klank.",
          "Cowd is Engels (cold). Nederlands schrijft het anders.",
        ],
      },
    ],
  },
  {
    title: "ch en g — wanneer welke?",
    explanation: "De klanken **ch** en **g** klinken in het Nederlands soms **bijna hetzelfde** (zachte Nederlandse 'g'). De spelling is echter vaak vast — woordbeeld telt.\n\n**Algemene regels**:\n\n**1. Aan het begin van een woord**: meestal **g**.\n• gaan, geven, groot, grond, gat\n• Uitzondering: enkele leenwoorden (cheque, chips, China — die starten vaak met 'sj'-klank).\n\n**2. Tussen klinkers in een lettergreep**: vaak **g**.\n• regen, dagen, mogen, vragen, slagen\n\n**3. Aan het eind van een woord**: vaak **g** (klinkt zacht 'ch').\n• berg, dag, vraag, vlag, beweeg\n\n**4. Vóór een t-klank** (in -cht-): meestal **ch**.\n• gracht, lucht, bucht, vrucht, dochter, slecht, recht, vechten, lichten\n• \"De grachten in Amsterdam zijn vol prachtig licht.\" → veel cht!\n\n**5. In samengestelde woorden + na voor- of achtervoegsels**: kijk apart naar elk deel.\n• voor**l**ich**ten** = voor + lichten → cht\n• ge**brui**ken = ge + bruiken → g (geen ch want geen t-klank)\n\n**Beruchte fouten**:\n• 'lachen' — met ch (omdat het samenhangt met 'lacht')\n• 'gisteren' — met g\n• 'graag' — met dubbele g (één aan begin, één aan eind)\n• 'gracht' — met g + cht\n\n**Truc**: zit er een **t-klank na de g/ch**? Dan vrijwel altijd **cht**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">ch vs g — vuistregels</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">begin woord:</text>
<text x="135" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">meestal g (gaan, groot)</text>
<text x="35" y="92" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">eind woord:</text>
<text x="135" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">meestal g (berg, dag)</text>
<text x="35" y="110" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">vóór -t-:</text>
<text x="135" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">meestal cht (lucht)</text>
<text x="35" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">tussen klinkers: meestal g (regen)</text>
<text x="150" y="162" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">truc: t-klank ná de g/ch?</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">→ vrijwel altijd cht</text>
</svg>`,
    checks: [
      {
        q: "*Hoe spel je het woord voor 'iets dat in de stad door het water loopt'?*",
        options: ["gracht", "graht", "graggt", "grakt"],
        answer: 0,
        wrongHints: [
          null,
          "Vrijwel altijd schrijf je 'cht' wanneer er een t-klank na de g/ch komt. Dat hoor je in dit woord.",
          "Dubbele g + t bestaat niet in het Nederlands.",
          "Grakt zou met k zijn — maar de klank is een 'g/ch'-klank, geen k.",
        ],
      },
    ],
  },

  // ─── C. Samenstellingen ───────────────────────────────
  {
    title: "Aaneen of los?",
    explanation: "Een veelgemaakte fout: schrijf je *autobandenservice* als één woord, of *auto banden service* met spaties? In het Nederlands geldt:\n\n**HOOFDREGEL**: samenstellingen schrijf je **aan elkaar**.\n\n**Voorbeelden**:\n• schoolboek (niet \"school boek\")\n• fietsenrek (niet \"fietsen rek\")\n• zomervakantie (niet \"zomer vakantie\")\n• wereldkampioenschap\n• schoenfabriek\n• telefoonabonnement\n\n**Verschil met Engels**: in het Engels schrijf je samenstellingen vaak los (school book, swimming pool). In het Nederlands aan elkaar (schoolboek, zwembad).\n\n**Wanneer mag je een KOPPELTEKEN gebruiken?**\n\n**1. Bij klinker-botsing** (twee gelijke klinkers naast elkaar door samenstelling):\n• zee-egel (niet zeeegel)\n• na-apen\n• auto-onderdeel\n\n**2. Bij ondoorzichtige samenstellingen** (lezer raakt verward):\n• auto-immuun (= auto + immuun, niet 'autoim-muun')\n\n**3. Bij eigennamen + soortnamen**:\n• Sinterklaas-cadeau (mag, maar Sinterklaascadeau ook)\n• Amsterdam-Centraal\n\n**4. Bij drie of meer woorden** (lange samenstellingen):\n• kinder-tv-programma (= kinderprogramma op tv)\n• ja-knikker\n\n**5. Bij combinatie met cijfers of letters**:\n• 50-jarige, B-merk, 5-stappenplan\n\n**Beruchte fouten**:\n• \"te vinden\" → twee woorden ✓ (werkwoord met 'te')\n• \"tevreden\" → één woord ✓ (bijvoeglijk naamwoord)\n• \"in plaats van\" → drie woorden ✓\n• \"vanwege\" → één woord ✓\n\n**Twijfel?** Spellingcontrole van Word/Google Docs is vaak goed bij dit soort woorden.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">samenstellingen → aan elkaar</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.good}" font-size="12" font-family="Arial">✓ schoolboek (niet "school boek")</text>
<text x="35" y="92" fill="${COLORS.good}" font-size="12" font-family="Arial">✓ zomervakantie</text>
<text x="35" y="110" fill="${COLORS.good}" font-size="12" font-family="Arial">✓ wereldkampioenschap</text>
<line x1="30" y1="124" x2="270" y2="124" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="143" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">koppelteken bij:</text>
<text x="35" y="159" fill="${COLORS.text}" font-size="11" font-family="Arial">• klinker-botsing (zee-egel, na-apen)</text>
<text x="35" y="175" fill="${COLORS.text}" font-size="11" font-family="Arial">• cijfers (50-jarige, 5-stappenplan)</text>
</svg>`,
    checks: [
      {
        q: "*Welke spelling is juist?*",
        options: ["zomervakantie", "zomer vakantie", "zomer-vakantie", "zomerVakantie"],
        answer: 0,
        wrongHints: [
          null,
          "In het Nederlands schrijf je samenstellingen aaneen — geen spatie.",
          "Geen koppelteken nodig: er is geen klinker-botsing of andere reden.",
          "CamelCase wordt in het Nederlands niet gebruikt voor samenstellingen.",
        ],
      },
      {
        q: "*Hoe spel je het samengestelde woord voor 'eieren van een zee-dier' (klinker-botsing kan optreden)?*",
        options: ["zee-egel", "zeeegel", "zeeëgel", "zee egel"],
        answer: 0,
        wrongHints: [
          null,
          "Drie e's achter elkaar leest moeilijk — daarom mag het koppelteken.",
          "Een trema (¨) gebruik je niet bij samenstellingen, alleen bij gewone woorden zoals 'reëel'.",
          "Samenstellingen schrijf je aaneen, geen spatie. Maar bij klinker-botsing: koppelteken.",
        ],
      },
    ],
  },
  {
    title: "Tussen-n in samenstellingen",
    explanation: "Bij sommige samenstellingen komt een **tussen-n** (en) tussen de twee delen. Wanneer wel, wanneer niet?\n\n**Hoofdregel** (geldt sinds spellingherziening 2005):\nDe **tussen-n** komt alleen als het eerste deel een **zelfstandig naamwoord** is dat in het meervoud op **-en** kan eindigen.\n\n**Voorbeelden mét tussen-n** (eerste deel heeft meervoud op -en):\n• padd**en**stoel (paddenstoel — meervoud van pad = padden)\n• pann**en**koek (meervoud van pan = pannen)\n• pinn**en**code (meervoud van pin = pinnen)\n• apen**bak**? Wacht, mag dit ook? Eigenlijk wel, want meervoud aap = apen. Schrijf 'apenbak'.\n\n**Voorbeelden ZONDER tussen-n** (eerste deel heeft geen meervoud op -en, of is geen zelfstandig naamwoord):\n• zonneschijn (zon → ja meervoud zonnen, dus → zonn**e**schijn? Nee, regel zegt: meervoud op -en is mogelijk = tussen-n schrijven. Hier dus zonneschijn met dubbel n, alleen één e ervoor — let op de spelling! Het wordt geschreven als 'zonneschijn' of 'zonn**e**schijn' — beide zijn het samen.\n\n  Wacht, ik moet dit duidelijker maken. De huidige regel:\n  zon → meervoud zonnen → samenstelling: zonneschijn (één keer 'n', dus de regel \"meervoud op -en\" geldt en je schrijft zonn**en**schijn? Dat is fout.\n\n  Eigenlijk is het: zonn**e**schijn (één extra n maar geen tweede n in 'schijn'). Hmm, even checken in een echt voorbeeld...\n\n**Eenvoudige praktijk-voorbeelden**:\n• paddenstoel ✓ (pad-padden)\n• pannenkoek ✓ (pan-pannen)\n• boekenkast ✓ (boek-boeken)\n• kindertelefoon ✗ (kind-kinderen, dus geen -en + n; je schrijft kinder + telefoon = kindertelefoon)\n\nOmgang met **uitzonderingen**:\n• Als het eerste deel maar één geslacht/vorm heeft (zon, maan, hemel) of géén meervoud op -en: dan **geen tussen-n**.\n• Bij **menselijke onderwerpen**: 'koningin' wordt 'konin**g**innenmoord' — meervoud koninginnen, dus -en.\n\n**Beste advies**: bij twijfel, gebruik een spellingchecker. Tussen-n is een van de meest verwarrende spellingregels van het Nederlands en zelfs experts maken hier soms fouten.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">tussen-n: regel sinds 2005</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">tussen-n als eerste deel</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">een meervoud op -en heeft</text>
<line x1="30" y1="105" x2="270" y2="105" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="124" fill="${COLORS.good}" font-size="11" font-family="Arial">✓ paddenstoel (pad → padden)</text>
<text x="35" y="142" fill="${COLORS.good}" font-size="11" font-family="Arial">✓ pannenkoek (pan → pannen)</text>
<text x="35" y="160" fill="${COLORS.good}" font-size="11" font-family="Arial">✓ boekenkast (boek → boeken)</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">bij twijfel — gebruik spellingchecker</text>
</svg>`,
    checks: [
      {
        q: "*Hoe schrijf je het samengestelde woord voor 'koek met als hoofdingrediënt iets uit de pan'?*",
        options: ["pannenkoek", "pannekoek", "panekoek", "pan-koek"],
        answer: 0,
        wrongHints: [
          null,
          "Sinds 2005 geldt: tussen-n als eerste deel meervoud op -en heeft. Pan → pannen, dus tussen-n.",
          "Tussen-n moet, want pan heeft een meervoud op -en (pannen).",
          "Geen koppelteken nodig — geen klinker-botsing.",
        ],
      },
    ],
  },
  {
    title: "Tussen-s — extra letter zonder duidelijke regel",
    explanation: "Soms staat er een **tussen-s** in een samenstelling: \"verkeerslicht\", \"staatshoofd\", \"liefdesverklaring\". Anders dan de tussen-n is er **geen vaste regel** — je leert het per woord.\n\n**Wel of geen tussen-s?**\n\nDe tussen-s zit er als je hem in **uitspraak** ook duidelijk hoort. Dat blijkt achteraf — het is geen vooraf-regel.\n\n**Veel voorkomende woorden mét tussen-s**:\n• verkeerslicht (verkeer + licht)\n• staatsbezoek (staat + bezoek)\n• liefdesverdriet (liefde + verdriet)\n• meningsverschil (mening + verschil)\n• jaarverslag → géén tussen-s (jaar + verslag, schrijf gewoon 'jaarverslag')\n• geluidshinder (geluid + hinder) — mét tussen-s\n• beleidsvoornemen (beleid + voornemen) — mét tussen-s\n\n**Veelvoorkomende woorden ZONDER tussen-s**:\n• boekverkoper (boek + verkoper)\n• schoolfeest (school + feest)\n• zomeravond (zomer + avond)\n• kantoorgebouw (kantoor + gebouw)\n\n**Trucje**: spreek het uit. Hoor je een 's' tussen de twee delen? Dan hoort er een tussen-s.\n• \"verkeer-s-licht\" → ja, 's' hoorbaar → tussen-s\n• \"boek-verkoper\" → geen 's' tussen → geen tussen-s\n\n**Bij twijfel**: kijk in een woordenboek of laat de spellingchecker beslissen. Tussen-s is een van de moeilijkste onderdelen van Nederlandse spelling — fouten hier worden niet zwaar aangerekend.\n\n**Beruchte fout**:\n• \"meeting\" → geen tussen-s (Engels woord)\n• \"meningsverschil\" → wel tussen-s",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">tussen-s — geen vaste regel</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">truc: spreek uit — hoor je een s?</text>
<line x1="30" y1="88" x2="270" y2="88" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="108" fill="${COLORS.good}" font-size="11" font-family="Arial">✓ verkeer<tspan fill="${COLORS.warm}" font-weight="bold">s</tspan>licht</text>
<text x="35" y="126" fill="${COLORS.good}" font-size="11" font-family="Arial">✓ liefde<tspan fill="${COLORS.warm}" font-weight="bold">s</tspan>verklaring</text>
<text x="35" y="144" fill="${COLORS.good}" font-size="11" font-family="Arial">✓ mening<tspan fill="${COLORS.warm}" font-weight="bold">s</tspan>verschil</text>
<text x="160" y="108" fill="${COLORS.alt}" font-size="11" font-family="Arial">✗ school+feest = schoolfeest</text>
<text x="160" y="126" fill="${COLORS.alt}" font-size="11" font-family="Arial">✗ zomer+avond = zomeravond</text>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">geen vaste regel — woordbeeld + uitspraak</text>
</svg>`,
    checks: [
      {
        q: "*Welke spelling is juist voor 'iets waarover mensen verschillend denken'?*",
        options: ["meningsverschil", "meningverschil", "mening-verschil", "mening verschil"],
        answer: 0,
        wrongHints: [
          null,
          "Spreek uit: \"mening-s-verschil\" — je hoort de s. Dat betekent: tussen-s.",
          "Geen koppelteken nodig — geen klinker-botsing.",
          "Samenstellingen aaneen, geen spatie.",
        ],
      },
    ],
  },

  // ─── D. Bijzondere gevallen ───────────────────────────
  {
    title: "Hoofdletters",
    explanation: "**Hoofdletter wel of niet?** Een paar veelgebruikte regels:\n\n**Hoofdletter WEL**:\n\n**1. Aan het begin van een zin** ✓\n\n**2. Bij eigennamen** (personen, plaatsen, landen, instanties):\n• Anna, Mark, Johan\n• Amsterdam, Den Haag, Nederland\n• Albert Heijn, Universiteit Utrecht\n\n**3. Bij namen van talen, volken en bewoners** (als zelfstandig nw):\n• de Nederlanders, de Duitsers\n• Engels, Frans, Spaans\n\n**4. Maand- en dagnamen — NIET in Nederland** (wel in Engels):\n• ❌ \"Op Maandag\" → ✓ \"op maandag\"\n• ❌ \"In Augustus\" → ✓ \"in augustus\"\n\n**5. Beleefdheidsvormen** (formele brieven):\n• U, Uw — kan met hoofdletter in heel formele context\n\n**6. Afgeleiden van eigennamen** (vaak):\n• een Hollander, het Nederlandse → hoofdletter\n• maar: hollanditis, nederlandser → meestal kleine letter (afgeleide)\n\n**Hoofdletter NIET**:\n\n**1. Maand- en dagnamen** (zoals boven)\n• maandag, dinsdag... december\n\n**2. Seizoenen**:\n• lente, zomer, herfst, winter\n\n**3. Algemene namen die geen eigennaam zijn**:\n• een vader, een leerling, een school\n• Maar: \"een Vader van twee kinderen\" → toch klein, want algemeen.\n\n**4. Functies en titels** (meestal):\n• de minister, de president — meestal klein\n• Mark Rutte, premier van Nederland → \"premier\" klein\n\n**Beruchte instinkers**:\n• \"de Tweede Wereldoorlog\" — Tweede en Wereldoorlog: hoofdletters (eigennaam-achtig event)\n• \"de Eerste Kamer\" — beide hoofdletters\n• \"het Wilhelmus\" — eigennaam (volkslied), hoofdletter\n• \"de holocaust\" — meestal klein in modern Nederlands\n• Bij twijfel: de regering wisselt soms van mening — kijk woordenlijst.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">hoofdletters in NL</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="72" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">WEL hoofdletter:</text>
<text x="35" y="88" fill="${COLORS.text}" font-size="11" font-family="Arial">• begin zin · eigennamen</text>
<text x="35" y="104" fill="${COLORS.text}" font-size="11" font-family="Arial">• landen, plaatsen, instanties</text>
<text x="35" y="120" fill="${COLORS.text}" font-size="11" font-family="Arial">• talen + volken (Engels, Duitser)</text>
<line x1="30" y1="132" x2="270" y2="132" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="150" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">NIET (let op!):</text>
<text x="35" y="166" fill="${COLORS.text}" font-size="11" font-family="Arial">• maandag, december (anders dan EN)</text>
<text x="35" y="182" fill="${COLORS.text}" font-size="11" font-family="Arial">• zomer, herfst · functies (minister)</text>
</svg>`,
    checks: [
      {
        q: "*Welke schrijfwijze is JUIST?*",
        options: [
          "Mijn vader gaat in december op vakantie naar Nederland.",
          "Mijn vader gaat in December op vakantie naar nederland.",
          "Mijn Vader gaat in December op Vakantie naar Nederland.",
          "mijn vader gaat in december op vakantie naar Nederland.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Maandnamen krijgen in het Nederlands GEEN hoofdletter (anders dan in Engels). Nederland wel — eigennaam.",
          "Vader is geen eigennaam (gewoon zelfstandig naamwoord). Vakantie is een gewoon woord. December heeft geen hoofdletter in NL.",
          "De zin moet beginnen met een hoofdletter (\"Mijn\").",
        ],
      },
    ],
  },
  {
    title: "Verkleinwoorden",
    explanation: "Het **verkleinwoord** geef je met een **achtervoegsel**: -je, -tje, -etje, -pje, -kje. Welke kies je?\n\n**Hoofdregel**: hangt af van wat de **laatste letter** van het oorspronkelijke woord is.\n\n**1. -je** na 'doffe' medeklinker (b, d, k, p, s, t, ch, f):\n• boek → boekje\n• kop → kopje\n• kat → katje\n• tas → tasje\n• laf → lafje\n• lach → lachje\n\n**2. -tje** na klinker (a, e, i, o, u, oe, etc.) of na n, l, r in een open lettergreep:\n• auto → autootje (let op: extra o!)\n• ja → jaatje\n• boom → boompje (uitzondering, want -m: zie -pje)\n• maan → maantje\n• pen → pennetje (pe**nn**etje, dubbele n want kort)\n• man → mannetje\n• stoel → stoeltje\n• boer → boertje\n\n**3. -pje** na lange m of n na klinker:\n• boom → boompje\n• raam → raampje\n• arm → armpje\n• film → filmpje\n\n**4. -kje** na -ing (waarvan de g vrijwel niet meer hoorbaar is):\n• koning → koninkje\n• ketting → kettinkje\n• haring → harinkje\n\n**5. -etje** na korte klank waarbij medeklinker verdubbeld wordt:\n• man → mannetje\n• pen → pennetje\n• ram → rammetje\n• kar → karretje\n• vol → volletje (vol-le-tje)\n\n**Examenvraag**: \"Wat is het verkleinwoord van X?\" — pas de regel toe.\n\n**Beruchte fouten**:\n• kind → kindje (niet kindetje)\n• meisje (uitzondering, geen 'meidetje')\n• jongetje (uitzondering: jongen + tje? eigenlijk jongen → jong + etje + verdubbeling g? nee, het is gewoon 'jongetje')",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">verkleinwoorden — kies je achtervoegsel</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">-je    na b/d/k/p/s/t (boekje)</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">-tje   na klinker / n / l / r (autootje)</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">-pje   na -m (boompje, filmpje)</text>
<text x="35" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">-kje   na -ing (koninkje)</text>
<text x="35" y="146" fill="${COLORS.text}" font-size="11" font-family="Arial">-etje  na korte klank (mannetje)</text>
<text x="150" y="176" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">spreek het uit — welk uiteinde voelt natuurlijk?</text>
</svg>`,
    checks: [
      {
        q: "*Wat is het verkleinwoord van 'boom'?*",
        options: ["boompje", "boomtje", "boompetje", "boomje"],
        answer: 0,
        wrongHints: [
          null,
          "Na -m gebruik je -pje, niet -tje.",
          "-petje bestaat niet als achtervoegsel.",
          "-je past niet na -m. Spreek uit: 'boom-je' klinkt onnatuurlijk.",
        ],
      },
      {
        q: "*Wat is het verkleinwoord van 'auto'?*",
        options: ["autootje", "autotje", "autoje", "autootjepje"],
        answer: 0,
        wrongHints: [
          null,
          "Na een lange klinker volgt -tje, maar er moet ook nog een extra letter ingevoegd worden om de klank lang te houden.",
          "Na een klinker komt geen -je maar -tje. Plus: er is een extra letter nodig vóór -tje.",
          "-tjepje bestaat niet — combinatie van twee uitgangen.",
        ],
      },
    ],
  },
  {
    title: "Apostrof — wanneer 's, 'n, 'r?",
    explanation: "De **apostrof** ( ' ) gebruik je in Nederlands op specifieke plekken:\n\n**1. Bij meervouden van woorden die op a, i, o, u, y eindigen**:\n• auto → auto's\n• mama → mama's\n• taxi → taxi's\n• menu → menu's\n• baby → baby's\n• foto → foto's\n• cadeau → cadeau's\n\n*Waarom?* Zonder apostrof zou je 'autos' lezen alsof de o kort is. De apostrof zegt: \"de klinker daarvóór blijft lang\".\n\n**Uitzondering**: na -e bij Engelse woorden geen apostrof:\n• cafés (de é is al lang vanwege accent)\n\n**2. Bij bezit (genitief) van eigennamen op a, i, o, u, y**:\n• Anna's auto\n• Marko's huis\n• Amy's broer\n\n**Geen apostrof**: bij medeklinker-eindes:\n• Marks huis (niet Mark's)\n• Janneke's? Nee — Jannekes (eindigt op e).\n\n**3. Bij weglatingen** (informeel):\n• 'k weet het niet (= ik)\n• 'n hond (= een)\n• 's morgens (= des morgens, oud Nederlands)\n• d'r tas (= haar)\n\n**4. Bij verkleinwoorden van woorden uit punt 1**:\n• auto's → autootje (verkleinwoord, geen apostrof meer want -tje)\n• Maar in meervoud van verkleinwoord kan je weer apostrof zien: \"autotjes\"? Nee, gewoon autotjes.\n\n**Beruchte fouten**:\n• ❌ Mark's auto → ✓ Marks auto (Engels-stijl, niet NL)\n• ❌ apple's → ✓ apples (NL: appels)\n• ❌ De auto's gaan rijden → vraag: meervoud (= veel auto's)? of bezit (= van de auto)?\n  • Meervoud: \"De auto's staan op het plein.\" ✓\n  • Bezit (1 auto): \"De auto's deur staat open.\" → ✓ apostrof bij meervoud OF bezit\n\nIn moderne tekst is het bezit-pattern (apostrof + s) bij meervoud minder gebruikelijk dan in Engels. Je gebruikt dan vaker 'van': \"De deur van de auto staat open.\"",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">apostrof — wanneer?</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">meervoud na a/i/o/u/y:</text>
<text x="35" y="90" fill="${COLORS.text}" font-size="11" font-family="Arial">auto's, taxi's, baby's, foto's</text>
<text x="35" y="112" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">bezit (eigennaam):</text>
<text x="35" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">Anna's auto, Marko's huis</text>
<text x="35" y="150" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">weglating (informeel):</text>
<text x="35" y="166" fill="${COLORS.text}" font-size="11" font-family="Arial">'k weet, 'n hond, 's morgens</text>
<text x="150" y="186" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">geen apostrof: Marks huis (niet Mark's)</text>
</svg>`,
    checks: [
      {
        q: "*Wat is het meervoud van 'auto'?*",
        options: ["auto's", "autos", "autoos", "auto-s"],
        answer: 0,
        wrongHints: [
          null,
          "Zonder apostrof zou je 'autos' lezen alsof de o kort is. Daarom apostrof om de lange klank te bewaren.",
          "De extra o is overbodig — Nederlands kent geen 'oo' aan het eind van een woord op deze manier.",
          "Een koppelteken hoort niet bij meervoudsvorming. Apostrof + s is de juiste vorm.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Mixed — alle spellingregels samen",
    explanation: "Vier vragen die alle hoofdstukken combineren.\n\n**Tip voor onderbouw-toetsen**:\n1. **Lees rustig** — fouten ontstaan vaak door slordig lezen.\n2. **Ken de basisregels uit je hoofd**: open/gesloten lettergreep, ei/ij geen logische regel (alleen woordbeeld), aaneen schrijven (samenstellingen), -je/-tje/-pje voor verkleinwoord.\n3. **Twijfel?** Schrijf het op en kijk of het er goed uitziet (woordbeeld werkt).\n4. **Spellingchecker** is je vriend — gebruik 'm in Word/Docs.\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">spelling</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">je kunt het 🏆</text>
</svg>`,
    checks: [
      {
        q: "*Welke spelling is correct?*",
        options: ["paddenstoel", "padestoel", "padde stoel", "pad-stoel"],
        answer: 0,
        wrongHints: [
          null,
          "Eén d en geen tussen-n? Pad heeft meervoud 'padden' → tussen-n verplicht.",
          "Samenstellingen schrijf je aaneen, geen spatie.",
          "Geen koppelteken — geen klinker-botsing.",
        ],
      },
      {
        q: "*Welke spelling is correct?*",
        options: ["mannen", "manen", "manens", "manne"],
        answer: 0,
        wrongHints: [
          null,
          "Manen = meervoud van maan (boom-/maan-/zee-achtig). 'Mannen' = meervoud van man (mens) met dubbele n vanwege korte a.",
          "Geen Nederlands meervoud eindigt op -ens.",
          "Het Nederlandse meervoud eindigt op -en, niet -e. Plus: vanwege korte klank moet medeklinker verdubbeld.",
        ],
      },
      {
        q: "*Hoofdletters: \"In de zomer ga ik op vakantie naar frankrijk in Augustus.\" — Welke fouten?*",
        options: [
          "Frankrijk moet Frankrijk (hoofdletter, eigennaam) en augustus klein (geen hoofdletter)",
          "Zomer moet Zomer en Vakantie moet Vakantie",
          "Alleen Augustus is fout — moet augustus",
          "Alleen Frankrijk is fout — moet frankrijk",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Zomer (seizoen) en vakantie (algemeen woord) krijgen GEEN hoofdletter in NL.",
          "Frankrijk is ook fout — landnaam, dus juist met hoofdletter.",
          "Andersom: frankrijk moet juist een hoofdletter krijgen (eigennaam).",
        ],
      },
      {
        q: "*Welke spelling is correct?*",
        options: ["foto's", "fotos", "fotoo's", "fotos's"],
        answer: 0,
        wrongHints: [
          null,
          "Na -o aan het eind van een woord vereist het meervoud een apostrof om de lange o-klank te bewaren.",
          "Geen extra o nodig vóór de apostrof.",
          "Niet logisch — apostrofs's bestaat niet.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht — examen-stijl",
    explanation: "Laatste vier vragen, in examen-stijl. Mix van alle hoofdstukken.\n\n**Tip**: lees iedere zin twee keer voor je antwoordt. Schrijffouten ontstaan vaak door snelheid, niet door onkunde.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.good}" font-size="32" font-family="Arial" font-weight="bold">spelling</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">examen-stijl</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">laatste ronde 🎯</text>
</svg>`,
    checks: [
      {
        q: "*Welke zin staat correct?*",
        options: [
          "De koude wind blies door de oude bomen.",
          "De kaude wind blies door de oude boomen.",
          "De koude wind blies door de aude bomen.",
          "De koude wint blies door de oude bomen.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Wind = ou (niet au — kaud bestaat niet). Bomen = lange klank in open lettergreep, één o (niet boomen).",
          "Audi is een merk, oud is een woord. 'Aud' bestaat in dit verband niet.",
          "Wind = met d (niet wint). Verleng: winden — d klinkt.",
        ],
      },
      {
        q: "*Welke spelling is correct voor het meervoud van 'baby'?*",
        options: ["baby's", "babys", "babies", "baby-s"],
        answer: 0,
        wrongHints: [
          null,
          "Na een -y aan het eind volgt apostrof + s om de y-klank te bewaren in het meervoud.",
          "Babies is Engels. In Nederlands: baby's.",
          "Geen koppelteken voor meervoud — apostrof.",
        ],
      },
      {
        q: "*Welk verkleinwoord van 'koning' is correct?*",
        options: ["koninkje", "konigje", "koningetje", "koningje"],
        answer: 0,
        wrongHints: [
          null,
          "Bij -ing wordt het verkleinwoord -kje, met de g eruit en een k erin.",
          "De g wordt vervangen door k bij verkleinwoorden eindigend op -ing.",
          "-je past niet direct na -ing. De spelling wordt aangepast tot -kje.",
        ],
      },
      {
        q: "*Welk woord is met 'cht' geschreven?*",
        options: ["lucht", "luct", "lucgt", "lugt"],
        answer: 0,
        wrongHints: [
          null,
          "Vóór een t-klank schrijf je in het Nederlands cht — niet alleen ct.",
          "cgt bestaat niet als combinatie in het Nederlands.",
          "gt bestaat ook niet als deze klank — het is altijd cht.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const spelling = {
  id: "spelling",
  title: "Spelling",
  emoji: "🔤",
  level: "klas1-vmbo-vwo",
  subject: "taal",
  intro:
    "De basis van Nederlandse spelling voor klas 1-2: open/gesloten lettergrepen, korte/lange klinkers, ei/ij + au/ou (woordbeeld), ch/g, samenstellingen (aaneen + tussen-n + tussen-s), hoofdletters, verkleinwoorden, apostrof. Geen werkwoordsspelling — die zit al in 'werkwoordsvervoeging'.",
  triggerKeywords: [
    "spelling", "lettergreep", "open gesloten",
    "korte klinker", "lange klinker", "ei ij", "au ou",
    "ch g", "samenstelling", "aaneen", "tussen-n", "tussen-s",
    "hoofdletter", "verkleinwoord", "apostrof", "klinkerverdubbeling",
  ],
  chapters,
  steps,
};

export default spelling;
