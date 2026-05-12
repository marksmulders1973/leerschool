// Leerpad: Comparatives + Superlatives — klas 2 Engels.
// Onderdeel Engelse grammatica. Referentieniveau 2F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  base: "#80cbc4",
  compar: "#ffd54f",
  superl: "#ff7043",
  highlight: "#42a5f5",
};

const stepEmojis = ["📏", "📝", "⚠️", "📏", "✅", "🏆"];

const chapters = [
  { letter: "A", title: "Wat zijn trappen?", emoji: "📏", from: 0, to: 0 },
  { letter: "B", title: "Korte woorden (-er / -est)", emoji: "📝", from: 1, to: 1 },
  { letter: "C", title: "Onregelmatige (good/better/best)", emoji: "⚠️", from: 2, to: 2 },
  { letter: "D", title: "Lange woorden (more / most)", emoji: "📏", from: 3, to: 3 },
  { letter: "E", title: "Spelling-regels", emoji: "✅", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function trapSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">De 3 trappen — "big" als voorbeeld</text>

<rect x="20" y="100" width="80" height="60" rx="6" fill="rgba(128,203,196,0.18)" stroke="${COLORS.base}" stroke-width="1.5"/>
<text x="60" y="125" text-anchor="middle" fill="${COLORS.base}" font-size="12" font-family="Arial" font-weight="bold">big</text>
<text x="60" y="142" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">groot</text>
<text x="60" y="156" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">stellend</text>

<text x="115" y="135" text-anchor="middle" fill="${COLORS.muted}" font-size="14" font-family="Arial">→</text>

<rect x="120" y="80" width="80" height="80" rx="6" fill="rgba(255,213,79,0.18)" stroke="${COLORS.compar}" stroke-width="1.5"/>
<text x="160" y="110" text-anchor="middle" fill="${COLORS.compar}" font-size="13" font-family="Arial" font-weight="bold">bigger</text>
<text x="160" y="128" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">groter</text>
<text x="160" y="144" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">vergrotend</text>
<text x="160" y="156" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">(2 dingen)</text>

<text x="215" y="135" text-anchor="middle" fill="${COLORS.muted}" font-size="14" font-family="Arial">→</text>

<rect x="220" y="60" width="80" height="100" rx="6" fill="rgba(255,112,67,0.18)" stroke="${COLORS.superl}" stroke-width="1.5"/>
<text x="260" y="90" text-anchor="middle" fill="${COLORS.superl}" font-size="13" font-family="Arial" font-weight="bold">biggest</text>
<text x="260" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">grootst</text>
<text x="260" y="124" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">overtreffend</text>
<text x="260" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">(3+ dingen,</text>
<text x="260" y="148" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">met 'the')</text>
</svg>`;
}

const steps = [
  // STAP 1: 3 trappen
  {
    title: "De 3 trappen van een bijvoeglijk naamwoord",
    explanation:
      "In het Engels zijn er **3 trappen** voor woorden die iets beschrijven *(bijvoeglijke naamwoorden zoals 'big', 'small', 'fast')*.\n\n**1. Stellende trap** = de gewone vorm.\n• big *(groot)*\n• small *(klein)*\n• fast *(snel)*\n\n**2. Vergrotende trap (comparative)** = 'meer/groter dan iets'.\n• big**ger** *(groter)*\n• small**er** *(kleiner)*\n• fast**er** *(sneller)*\nGebruik je bij **2 dingen** vergelijken: 'My bag is bigger **than** yours.'\n\n**3. Overtreffende trap (superlative)** = 'meest/grootst van allemaal'.\n• **the** big**gest** *(de grootste)*\n• **the** small**est** *(de kleinste)*\n• **the** fast**est** *(de snelste)*\nGebruik je bij **3 of meer** dingen — altijd met **'the'**.\n\n**Voorbeelden in een zin**:\n• 'A car is **fast**.' → stellend.\n• 'A bike is slower than a car.' → vergrotend.\n• 'A plane is **the fastest** of these three.' → overtreffend.\n\n**Wanneer welke trap?**\n• 1 ding beschrijven → **stellend**.\n• 2 dingen vergelijken → **vergrotend + than**.\n• 3+ dingen vergelijken → **overtreffend + the**.\n\n**Cito-vragen**:\n*'My brother is ___ than me. (tall)'* → *taller*.\n*'Mount Everest is ___ mountain in the world. (high)'* → *the highest*.",
    svg: trapSvg(),
    checks: [
      {
        q: "Welke trap voor **vergelijking van 2 dingen**?",
        options: ["Comparative (-er + than)", "Superlative (the -est)", "Stellend (gewoon)", "Verleden tijd"],
        answer: 0,
        wrongHints: [null, "Klopt — bv. taller than.", "Bij 3+ dingen.", "Bij 1 ding.", "Tijden, niet trap."],
      },
      {
        q: "Welke trap voor **'allerhoogste'**?",
        options: ["Superlative met 'the'", "Comparative", "Stellend", "Wisselt"],
        answer: 0,
        wrongHints: [null, "Klopt — 'the highest'.", "Vergrotend bij 2.", "Geen vergelijking.", "Wel vaste regel."],
      },
      {
        q: "**'My bag is ___ than yours.'** Welk woord?",
        options: ["bigger", "biggest", "big", "more big"],
        answer: 0,
        wrongHints: [null, "Klopt — 2 tassen, vergrotend.", "Niet voor 2 dingen.", "Geen 'than'.", "Niet voor 'big' (kort woord)."],
      },
      {
        q: "**'This is ___ car in the world.'** Welk woord (snelst)?",
        options: ["the fastest", "faster", "fast", "more fast"],
        answer: 0,
        wrongHints: [null, "Klopt — overtreffend.", "Niet alle auto's.", "Geen vergelijking.", "Niet voor 'fast'."],
      },
    ],
  },

  // STAP 2: -er / -est voor korte woorden
  {
    title: "Korte woorden — -er / -est",
    explanation:
      "**Korte bijvoeglijke naamwoorden** *(1 of 2 lettergrepen)* krijgen meestal:\n• Vergrotend: **+ er**\n• Overtreffend: **+ est** *(met 'the')*\n\n**Voorbeelden** *(uit het hoofd!)*:\n\n| stellend | vergrotend | overtreffend |\n|---|---|---|\n| tall *(lang)* | taller | the tallest |\n| short *(kort)* | shorter | the shortest |\n| fast *(snel)* | faster | the fastest |\n| slow *(traag)* | slower | the slowest |\n| young *(jong)* | younger | the youngest |\n| old *(oud)* | older | the oldest |\n| cheap *(goedkoop)* | cheaper | the cheapest |\n| strong *(sterk)* | stronger | the strongest |\n| clean *(schoon)* | cleaner | the cleanest |\n| dark *(donker)* | darker | the darkest |\n\n**Voorbeeldzinnen**:\n• 'I am **taller** than my sister.'\n• 'My dog is **the smallest** of all the dogs in the park.'\n• 'A car is **faster** than a bike.'\n• 'This bag is **cheaper** than that one.'\n\n**Cito-tip — vergelijking met 'than'**:\nAchter vergrotende trap komt altijd **'than'** *(in NL: 'dan')*.\n• 'higher **than**'\n• 'older **than**'\n• 'cheaper **than**'\n\n**Cito-tip — superlative altijd met 'the'**:\n• 'the tallest'\n• 'the fastest'\n• 'the youngest'\n\n**Veel-voorkomende fout**:\n• 'than' als 'then' schrijven *(verschillende woorden!)*. 'Than' = vergelijking. 'Then' = daarna.\n• 'the' vergeten bij superlatief.",
    checks: [
      {
        q: "**'small'** in vergrotende trap?",
        options: ["smaller", "smallest", "more small", "smaller than"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Overtreffend.", "Niet voor kort woord.", "Klopt maar zonder 'than'."],
      },
      {
        q: "**'cheap'** in overtreffende trap?",
        options: ["the cheapest", "cheaper", "the cheaper", "most cheap"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Vergrotend.", "Klopt qua 'the' maar woord verkeerd.", "Niet voor kort woord."],
      },
      {
        q: "**'I am ___ than my brother.'** (young)",
        options: ["younger", "youngest", "the youngest", "more young"],
        answer: 0,
        wrongHints: [null, "Klopt — vergelijking 2 dingen.", "Niet vergelijking.", "Niet vergelijking.", "Niet voor 'young'."],
      },
      {
        q: "**'My car is the ___ in the street.'** (fast)",
        options: ["fastest", "faster", "fast", "more fast"],
        answer: 0,
        wrongHints: [null, "Klopt — overtreffend met 'the'.", "Vergrotend.", "Stellend.", "Niet voor 'fast'."],
      },
    ],
  },

  // STAP 3: Onregelmatige
  {
    title: "Onregelmatige — uit het hoofd leren!",
    explanation:
      "Sommige veel-gebruikte woorden zijn **onregelmatig**. Die moet je gewoon **uit het hoofd leren**.\n\n**Top 5 onregelmatige** *(absoluut kennen!)*:\n\n| stellend | vergrotend | overtreffend | NL |\n|---|---|---|---|\n| **good** | **better** | **the best** | goed/beter/best |\n| **bad** | **worse** | **the worst** | slecht/slechter/slechtst |\n| **far** | **farther / further** | **the farthest / furthest** | ver/verder/verst |\n| **little** | **less** | **the least** | weinig/minder/minst |\n| **much/many** | **more** | **the most** | veel/meer/meest |\n\n**Voorbeeldzinnen**:\n• 'This pizza is **better** than that one.'\n• 'This is **the best** movie ever!'\n• 'My grade is **worse** than yours.'\n• 'I have **less** money than you.'\n• 'He earns **the most** of all of us.'\n\n**Pas op — 'old' heeft 2 vergrotende trappen**:\n• **older** — voor leeftijd algemeen: 'My dog is older than yours.'\n• **elder** — voor familieleden: 'my elder brother' *(maar ook 'older brother' is goed)*.\n\n**Pas op — 'far'**:\n• **farther** = afstand letterlijk *(2 km farther)*.\n• **further** = meer / verdere actie *(further information)*.\n• In Amerikaans Engels minder strikt — beide veel gebruikt.\n\n**Cito-truc — onregelmatige herkennen**:\nAls het woord helemaal verandert (good→better, bad→worse) = onregelmatig. Anders meestal regelmatig met -er/-est of more/most.",
    checks: [
      {
        q: "**'good'** in vergrotende trap?",
        options: ["better", "gooder", "more good", "best"],
        answer: 0,
        wrongHints: [null, "Klopt — onregelmatig.", "Bestaat niet.", "Niet correct.", "Overtreffend."],
      },
      {
        q: "**'bad'** in overtreffende trap?",
        options: ["the worst", "the baddest", "the more bad", "the worse"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Bestaat alleen informeel/slang.", "Niet juist.", "Vergrotend."],
      },
      {
        q: "**'much'** in vergrotende trap?",
        options: ["more", "mucher", "many", "the most"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Bestaat niet.", "Andere vorm — voor telbare dingen.", "Overtreffend."],
      },
      {
        q: "**'This is ___ pizza I ever ate.'** (good)",
        options: ["the best", "better", "good", "more good"],
        answer: 0,
        wrongHints: [null, "Klopt — overtreffend onregelmatig.", "Vergrotend.", "Stellend.", "Bestaat niet."],
      },
    ],
  },

  // STAP 4: Lange woorden
  {
    title: "Lange woorden — more / most",
    explanation:
      "**Lange bijvoeglijke naamwoorden** *(3 of meer lettergrepen)* gebruiken:\n• Vergrotend: **more** + woord.\n• Overtreffend: **the most** + woord.\n\n**Voorbeelden**:\n\n| stellend | vergrotend | overtreffend |\n|---|---|---|\n| beautiful *(mooi)* | more beautiful | the most beautiful |\n| difficult *(moeilijk)* | more difficult | the most difficult |\n| expensive *(duur)* | more expensive | the most expensive |\n| interesting *(interessant)* | more interesting | the most interesting |\n| important *(belangrijk)* | more important | the most important |\n| dangerous *(gevaarlijk)* | more dangerous | the most dangerous |\n| comfortable *(comfortabel)* | more comfortable | the most comfortable |\n\n**Voorbeeldzinnen**:\n• 'Mathematics is **more difficult** than English.' *(2 vakken)*\n• 'This is **the most beautiful** painting in the museum.' *(alle schilderijen)*\n• 'My phone is **more expensive** than yours.'\n\n**Hoe weet je 'kort' vs 'lang'?**\n• **1 lettergreep** → -er/-est *(big, fast, tall)*.\n• **2 lettergrepen** met -y eind → **y → i + er/est** *(happy → happier → happiest)*.\n• **2 lettergrepen** algemeen → kan beide *(narrow → narrower / more narrow)*. Vaker -er.\n• **3+ lettergrepen** → more / most *(beautiful, difficult, expensive)*.\n\n**Cito-stikvraag**:\n*'Why is 'expensive' more expensive but 'big' bigger?'*\n→ 'expensive' is **3 lettergrepen** (ex-pen-sive) → more. 'big' is **1 lettergreep** → -er.\n\n**Meer voorbeelden**:\n• 'My homework is more interesting than yours.' *(in-te-res-ting = 4 lettergrepen)*\n• 'This is the most important rule.' *(im-por-tant = 3 lettergrepen)*",
    checks: [
      {
        q: "**'difficult'** in vergrotende trap?",
        options: ["more difficult", "difficulter", "most difficult", "more difficulter"],
        answer: 0,
        wrongHints: [null, "Klopt — 3 lettergrepen → more.", "Bestaat niet.", "Overtreffend mist 'the'.", "Niet correct."],
      },
      {
        q: "**'beautiful'** in overtreffende trap?",
        options: ["the most beautiful", "more beautiful", "beautifulest", "the beautifulest"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Vergrotend.", "Bestaat niet.", "Niet correct."],
      },
      {
        q: "**'This is ___ movie I ever saw.'** (interesting)",
        options: ["the most interesting", "more interesting", "interestinger", "interestingest"],
        answer: 0,
        wrongHints: [null, "Klopt — overtreffend bij 3+ lettergrepen.", "Vergrotend.", "Bestaat niet.", "Bestaat niet."],
      },
      {
        q: "Wanneer gebruik je **more** + woord?",
        options: ["Bij 3+ lettergrepen", "Bij elk woord", "Bij korte woorden", "Bij werkwoorden"],
        answer: 0,
        wrongHints: [null, "Klopt — lange woorden.", "Te ruim.", "Korte → -er.", "Niet werkwoord-vorm."],
      },
    ],
  },

  // STAP 5: Spelling-regels
  {
    title: "Spelling-regels (let op!)",
    explanation:
      "Bij -er / -est gelden **een paar spellingsregels**:\n\n**Regel 1 — woord eindigt op -e**:\nGewoon -r of -st erbij (niet 2× e).\n• large → larg**er** → the larg**est** *(niet largeer)*\n• nice → nic**er** → the nic**est**\n• safe → saf**er** → the saf**est**\n\n**Regel 2 — woord eindigt op -y (na medeklinker)**:\nVerander y → i, dan -er/-est.\n• happy → happ**ier** → the happ**iest** *(niet happyer)*\n• easy → eas**ier** → the eas**iest**\n• funny → funn**ier** → the funn**iest**\n• pretty → prett**ier** → the prett**iest**\n\n**Regel 3 — korte klinker + 1 medeklinker einde**:\nVerdubbel de laatste medeklinker.\n• big → bi**gg**er → the bi**gg**est *(niet biger)*\n• hot → ho**tt**er → the ho**tt**est\n• fat → fa**tt**er → the fa**tt**est\n• thin → thi**nn**er → the thi**nn**est\n• sad → sa**dd**er → the sa**dd**est\n\n**Regel 4 — woord eindigt op -er, -ow, -le**:\nMeestal -er/-est werkt, soms ook more/most.\n• narrow → narrower / more narrow *(beide OK)*\n• simple → simpler / more simple\n• clever → cleverer / more clever\n\n**Cito-truc — spel-stappen**:\n1. Lettergrepen tellen.\n2. Korte → -er/-est. Lange (3+) → more/most.\n3. Bij korte: kijk naar eindletter:\n   - -e → -r/-st.\n   - -y → -ier/-iest.\n   - korte klinker + medeklinker → verdubbel medeklinker.\n   - Anders gewoon -er/-est.\n\n**Veel-voorkomende fouten**:\n• 'happyer' → moet 'happier'.\n• 'biger' → moet 'bigger'.\n• 'largeer' → moet 'larger'.\n• 'more bigger' = dubbel (kies één: bigger of much bigger).",
    checks: [
      {
        q: "**'happy'** in vergrotende trap?",
        options: ["happier", "happyer", "more happy", "happiest"],
        answer: 0,
        wrongHints: [null, "Klopt — y → i + er.", "Spelling fout.", "Niet voor 'happy' (te kort).", "Overtreffend."],
      },
      {
        q: "**'big'** in vergrotende trap?",
        options: ["bigger", "biger", "more big", "biggest"],
        answer: 0,
        wrongHints: [null, "Klopt — medeklinker verdubbelen.", "Spelling fout.", "Niet voor 'big' (kort).", "Overtreffend."],
      },
      {
        q: "**'nice'** in overtreffende trap?",
        options: ["the nicest", "the niceest", "the most nice", "nicer"],
        answer: 0,
        wrongHints: [null, "Klopt — eindigt op e → +st (geen dubbele e).", "Spelling fout.", "Niet voor 'nice' (kort).", "Vergrotend."],
      },
      {
        q: "**'hot'** in overtreffende trap?",
        options: ["the hottest", "the hotest", "the most hot", "hotter"],
        answer: 0,
        wrongHints: [null, "Klopt — t verdubbelen.", "Spelling fout.", "Niet voor 'hot' (kort).", "Vergrotend."],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — comparatives mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: kort/lang, regelmatig/onregelmatig, spelling.\n\nVeel succes!",
    checks: [
      {
        q: "**'tall'** in vergrotende trap?",
        options: ["taller", "tallest", "more tall", "the taller"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Overtreffend.", "Niet voor 'tall'.", "Geen 'the' bij vergrotend."],
      },
      {
        q: "**'good'** in overtreffende trap?",
        options: ["the best", "the goodest", "the better", "more good"],
        answer: 0,
        wrongHints: [null, "Klopt — onregelmatig.", "Bestaat niet.", "Vergrotend.", "Geen 'more' bij onregelmatig."],
      },
      {
        q: "**'expensive'** in vergrotende trap?",
        options: ["more expensive", "expensiver", "the most expensive", "expensivest"],
        answer: 0,
        wrongHints: [null, "Klopt — 3 lettergrepen.", "Bestaat niet.", "Overtreffend.", "Bestaat niet."],
      },
      {
        q: "**'easy'** in overtreffende trap?",
        options: ["the easiest", "the easyest", "the most easy", "easier"],
        answer: 0,
        wrongHints: [null, "Klopt — y → i + est.", "Spelling fout.", "Niet voor 'easy'.", "Vergrotend."],
      },
      {
        q: "**'I have ___ books than you.'** (many)",
        options: ["more", "manyer", "the most", "much more"],
        answer: 0,
        wrongHints: [null, "Klopt — many → more (onregelmatig).", "Bestaat niet.", "Overtreffend.", "Te veel."],
      },
      {
        q: "**'My grade is ___ than last year.'** (bad)",
        options: ["worse", "badder", "more bad", "worser"],
        answer: 0,
        wrongHints: [null, "Klopt — bad → worse onregelmatig.", "Bestaat niet.", "Onregelmatig krijgt niet 'more'.", "Bestaat niet."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const comparativesEngels = {
  id: "comparatives-engels",
  title: "Comparatives + superlatives (klas 2)",
  emoji: "📏",
  level: "klas2",
  subject: "engels",
  referentieNiveau: "2F",
  sloThema: "Engels — bijvoeglijke naamwoorden trappen",
  prerequisites: [
    { id: "present-tenses-engels", title: "Present tenses Engels", niveau: "2F" },
  ],
  intro:
    "Engelse trappen van vergelijking voor klas 2 — stellend/vergrotend/overtreffend (big/bigger/biggest), -er/-est vs more/most, onregelmatig (good/better/best), spellingsregels (-y, dubbele medeklinker). ~15 min.",
  triggerKeywords: [
    "comparative", "superlative", "vergrotende trap", "overtreffende trap",
    "bigger", "biggest", "more", "most",
    "good better best", "bad worse worst",
    "trap engels",
  ],
  chapters,
  steps,
};

export default comparativesEngels;
