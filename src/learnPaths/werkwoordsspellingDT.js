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
      },
      {
        q: "Wat is de **stam** van **maken**?",
        options: ["maak","mak","make","maken"],
        answer: 0,
        wrongHints: [null,"Klinker te kort — moet 'maak' worden.","-e hoort er niet bij.","Dat is het hele werkwoord."],
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
      },
      {
        q: "Welke is **goed**?",
        options: ["Werk jij hard?","Werkt jij hard?","Werken jij hard?","Werks jij hard?"],
        answer: 0,
        wrongHints: [null,"Bij 'jij ACHTER werkwoord' valt de t weg.","-en is voor meervoud.","Geen Nederlandse vorm."],
      },
      {
        q: "**Zij** (= meervoud) loopt of lopen?",
        options: ["lopen","loopt","loops","loopen"],
        answer: 0,
        wrongHints: [null,"Dat is bij hij/zij ENKELVOUD.","-s is geen Nederlandse vervoeging.","Klinker fout — moet kort blijven in 'lopen'."],
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
      },
      {
        q: "**'Zij (meervoud) ____ een schat'** — kies juiste vorm van **vinden**:",
        options: ["vinden","vindt","vinden t","vindt t"],
        answer: 0,
        wrongHints: [null,"Bij meervoud (zij = meerdere mensen) gebruik je 'vinden'.","Geen Nederlandse vorm.","Geen Nederlandse vorm."],
      },
      {
        q: "Welke is **goed**?",
        options: ["Hij houdt van pizza","Hij houd van pizza","Hij hout van pizza","Hij houden van pizza"],
        answer: 0,
        wrongHints: [null,"Mist de t.","Mist de d en heeft geen t van vervoeging op juiste plek.","-en is voor meervoud."],
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
      },
      {
        q: "**'Zij (meervoud) ____ pizza'** — kies juiste vorm van **eten**:",
        options: ["eten","eett","eet","eett"],
        answer: 0,
        wrongHints: [null,"Geen Nederlandse vorm — dubbele tt aan einde.","Dat is enkelvoud.","Geen NL vorm."],
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
      },
      {
        q: "Verleden tijd van **werken**:",
        options: ["werkte","werkde","werken","werkte t"],
        answer: 0,
        wrongHints: [null,"k zit in 't kofschip — dus -te.","Dat is tegenwoordige tijd meervoud.","Geen NL vorm."],
      },
      {
        q: "Verleden tijd van **leren**:",
        options: ["leerde","leerte","leren","leerts"],
        answer: 0,
        wrongHints: [null,"r zit NIET in 't kofschip — dus -de niet -te.","Dat is tegenwoordige tijd meervoud.","Geen NL vorm."],
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
      },
      {
        q: "**'Hij heeft ____'** — voltooid deelwoord van **leren**:",
        options: ["geleerd","geleert","geleren","gegelerd"],
        answer: 0,
        wrongHints: [null,"r zit NIET in kofschip → -d niet -t.","Dat is een werkwoord-vorm.","Geen NL vorm."],
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
      },
      {
        q: "Kies de juiste: **'Hij ____ boos.'**",
        options: ["wordt","word","wordd","worden"],
        answer: 0,
        wrongHints: [null,"Mist de -t van vervoeging bij hij.","Dubbel-d bestaat niet.","Meervoud — niet bij hij."],
      },
      {
        q: "Kies de juiste: **'Ik ____ ziek.'**",
        options: ["word","wordt","wordd","worden"],
        answer: 0,
        wrongHints: [null,"Bij ik geen extra t.","Dubbel-d bestaat niet.","Meervoud past niet bij ik."],
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
      },
      {
        q: "Verleden tijd van **fietsen**:",
        options: ["fietste","fietsde","fietsen","fietst"],
        answer: 0,
        wrongHints: [null,"s zit in kofschip → -te niet -de.","Dat is tegenwoordige tijd meervoud.","Dat is tegenwoordige tijd hij/zij."],
      },
      {
        q: "Voltooid deelwoord van **wandelen**:",
        options: ["gewandeld","gewandelt","wandeld","wandelden"],
        answer: 0,
        wrongHints: [null,"l zit niet in kofschip → -d niet -t.","Mist 'ge-' aan begin.","Verleden tijd, niet voltooid."],
      },
      {
        q: "**'Werk ____ vandaag?'** — vul jij/hij in:",
        options: ["jij","hij","zij","ze"],
        answer: 0,
        wrongHints: [null,"Bij 'hij' zou het 'werkt hij?' zijn met t.","Bij 'zij' zou het ook 'werkt zij?' zijn.","Idem als zij."],
      },
      {
        q: "Welke is goed: **'Hij vint het mooi'** of **'Hij vindt het mooi'**?",
        options: ["Hij vindt het mooi","Hij vint het mooi","Hij vind het mooi","Hij vindd het mooi"],
        answer: 0,
        wrongHints: [null,"Stam = vind (met d), + t = vindt.","Mist de d van de stam.","Mist de t van vervoeging.","Dubbel-d bestaat niet."],
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
  subject: "taal",
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
