// Leerpad: Conditionals (if-zinnen) — klas 3 Engels.
// Onderdeel Engelse grammatica. Referentieniveau 2F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  type1: "#80cbc4",
  type2: "#ffd54f",
  type3: "#ff8a65",
  mixed: "#9575cd",
  highlight: "#42a5f5",
};

const stepEmojis = ["❓", "1️⃣", "2️⃣", "3️⃣", "🔀", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een conditional?", emoji: "❓", from: 0, to: 0 },
  { letter: "B", title: "Type 1 — real present/future", emoji: "1️⃣", from: 1, to: 1 },
  { letter: "C", title: "Type 2 — unreal present", emoji: "2️⃣", from: 2, to: 2 },
  { letter: "D", title: "Type 3 — unreal past", emoji: "3️⃣", from: 3, to: 3 },
  { letter: "E", title: "Mixed conditionals", emoji: "🔀", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function typeOverzichtSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">3 hoofdtypen conditional</text>

<rect x="20" y="40" width="280" height="48" rx="6" fill="rgba(128,203,196,0.15)" stroke="${COLORS.type1}" stroke-width="1.5"/>
<text x="160" y="58" text-anchor="middle" fill="${COLORS.type1}" font-size="11" font-family="Arial" font-weight="bold">TYPE 1 — als het kan gebeuren (REAL)</text>
<text x="160" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Courier New, monospace">If + present, will + base</text>

<rect x="20" y="95" width="280" height="48" rx="6" fill="rgba(255,213,79,0.15)" stroke="${COLORS.type2}" stroke-width="1.5"/>
<text x="160" y="113" text-anchor="middle" fill="${COLORS.type2}" font-size="11" font-family="Arial" font-weight="bold">TYPE 2 — als het waarschijnlijk niet gebeurt</text>
<text x="160" y="133" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Courier New, monospace">If + past, would + base</text>

<rect x="20" y="150" width="280" height="48" rx="6" fill="rgba(255,138,101,0.15)" stroke="${COLORS.type3}" stroke-width="1.5"/>
<text x="160" y="168" text-anchor="middle" fill="${COLORS.type3}" font-size="11" font-family="Arial" font-weight="bold">TYPE 3 — als het had kunnen gebeuren (verleden)</text>
<text x="160" y="188" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Courier New, monospace">If + had + past part., would have + past part.</text>

<text x="160" y="212" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Type 0 (algemene waarheid) ook bestaat — zie stap 2</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is een conditional?
  {
    title: "Wat is een conditional (if-zin)?",
    explanation:
      "Een **conditional** *(of 'if-zin')* is een zin met een **voorwaarde**.\n\n**Voorbeeld**:\n*'**If** it rains, **I will** stay home.'*\n→ Als het regent, blijf ik thuis.\n\nDe zin heeft 2 delen:\n• **If-clause** *(de voorwaarde)*: 'If it rains'.\n• **Main clause** *(het gevolg)*: 'I will stay home'.\n\n**Welke conditional hangt af van:**\n• Hoe **realistisch** is de voorwaarde?\n• Wanneer **vindt het plaats**? *(nu / toekomst / verleden)*\n\n**De 4 types** *(Type 0 t/m 3)*:\n\n**Type 0 — Algemene waarheid**\n• 'If you heat water to 100°C, it **boils**.'\n• Voor wetten van natuur of vaste regels.\n• If + present, present.\n\n**Type 1 — Reëel in heden/toekomst** *(kan echt gebeuren)*\n• 'If it **rains**, I **will** stay home.'\n• If + present, will + base.\n\n**Type 2 — Onreëel in heden** *(niet waarschijnlijk of niet zo)*\n• 'If I **had** a million euros, I **would** travel.'\n• If + past, would + base.\n• *(Ik heb geen miljoen — dus 'als ik die had')*.\n\n**Type 3 — Onreëel in verleden** *(had kunnen gebeuren maar niet)*\n• 'If I **had studied**, I **would have passed**.'\n• If + had + past participle, would have + past participle.\n• *(Ik heb niet geleerd — dus 'had ik geleerd...')*.\n\n**Cito-truc — vraag jezelf**:\n• **Is het reëel?** *(kan echt gebeuren)* → Type 1.\n• **Is het wens of fantasie nu?** → Type 2.\n• **Is het gemist in verleden?** → Type 3.",
    svg: typeOverzichtSvg(),
    checks: [
      {
        q: "Welk type conditional bij **algemene waarheid**?",
        options: ["Type 0 (if + present, present)", "Type 1", "Type 2", "Type 3"],
        answer: 0,
        wrongHints: [null, "Klopt — 'If you heat water, it boils.'", "Type 1 = toekomst.", "Type 2 = onreëel nu.", "Type 3 = verleden."],
      },
      {
        q: "Welke 2 **delen** heeft een conditional?",
        options: ["If-clause + main clause", "Subject + object", "Verb + adverb", "Adjective + noun"],
        answer: 0,
        wrongHints: [null, "Klopt — voorwaarde + gevolg.", "Ander concept.", "Ander concept.", "Ander concept."],
      },
      {
        q: "**'If I had a car, I would drive.'** Welk type?",
        options: ["Type 2", "Type 1", "Type 3", "Type 0"],
        answer: 0,
        wrongHints: [null, "Klopt — wens nu (geen auto in werkelijkheid).", "Type 1 zou 'If I have a car, I will drive' zijn.", "Type 3 = verleden.", "Type 0 = altijd waar."],
      },
      {
        q: "Welk type voor **toekomst (kan gebeuren)**?",
        options: ["Type 1", "Type 0", "Type 2", "Type 3"],
        answer: 0,
        wrongHints: [null, "Klopt — 'If it rains, I will stay home.'", "Algemene waarheid.", "Onreëel nu.", "Verleden."],
      },
    ],
  },

  // STAP 2: Type 1
  {
    title: "Type 1 — Reëel (heden/toekomst)",
    explanation:
      "**Type 1** gebruik je voor situaties die **echt kunnen gebeuren** *(realistisch)*.\n\n**Formule** *(uit je hoofd!)*:\n**If + present simple, will + base form.**\n\n**Voorbeelden**:\n• 'If it **rains** tomorrow, I **will** stay home.'\n• 'If you **study** hard, you **will** pass the exam.'\n• 'If we **leave** now, we **will** be on time.'\n• 'If she **calls**, I **will** answer.'\n\n**Volgorde — beide werken**:\n• 'If it rains, I will stay home.' *(komma na if-clause)*\n• 'I will stay home if it rains.' *(geen komma)*\n\n**Type 1 — gebruikt voor**:\n• **Toekomstige plannen** met voorwaarde.\n• **Beloftes** *('If you help me, I will buy you ice cream.')*.\n• **Waarschuwingen** *('If you don't sleep, you will be tired.')*.\n• **Aanbiedingen** *('If you need help, I will help.')*.\n\n**Alternatieven voor 'will'**:\nIn de hoofdzin kun je ook:\n• **may/might** *(misschien)*: 'If it rains, I may stay home.'\n• **can** *(kunnen)*: 'If you finish, you can go.'\n• **must** *(moeten)*: 'If you go out, you must wear a coat.'\n• **should** *(zou moeten)*: 'If you're tired, you should rest.'\n\n**Imperatief in hoofdzin**:\n• 'If you see her, **tell** her hello!'\n• 'If you're hungry, **eat** something.'\n\n**Cito-stikvraag**:\n*'Pas op — geen will in if-clause zelf!'*\n• Fout: ❌ 'If it will rain, I will stay home.'\n• Goed: ✓ 'If it rains, I will stay home.'\nIn de **if-clause** gebruik je gewone present, niet will.\n\n**Cito-voorbeeld-vraag**:\n*'Complete: If she ___ (call), I will answer.'*\n→ **calls** *(present simple, 3e persoon)*.\n\n*'Complete: If you study hard, you ___ (pass).'*\n→ **will pass**.\n\n**Pas op — 3e persoon enkelvoud krijgt -s**:\n• 'If she **calls**, ...' *(niet 'If she call')*.\n• 'If he **studies**, ...' *(niet 'If he study')*.",
    checks: [
      {
        q: "**'If it ___ (rain), I will stay home.'** Welk woord?",
        options: ["rains", "will rain", "rained", "would rain"],
        answer: 0,
        wrongHints: [null, "Klopt — present simple in if-clause.", "Niet 'will' in if-clause!", "Type 2.", "Type 2."],
      },
      {
        q: "**'If you study hard, you ___ (pass).'**",
        options: ["will pass", "pass", "passes", "would pass"],
        answer: 0,
        wrongHints: [null, "Klopt — will in hoofdzin.", "Geen toekomst.", "3e persoon -s, maar geen toekomst.", "Type 2."],
      },
      {
        q: "**'If she ___ (call), I will answer.'**",
        options: ["calls", "call", "will call", "called"],
        answer: 0,
        wrongHints: [null, "Klopt — 3e pers ev krijgt -s.", "Mist -s.", "Niet 'will' in if-clause.", "Verleden — type 2."],
        uitlegPad: {
          stappen: [
            { titel: "Type 1: if + present simple", tekst: "Bij Type 1 staat in de if-clause de **present simple** (gewone tegenwoordige tijd)." },
            { titel: "3e persoon enkelvoud krijgt -s", tekst: "She / he / it + werkwoord met -s of -es: she calls, he studies, it works." },
          ],
          woorden: [{ woord: "if-clause", uitleg: "Het deel met 'if' — de voorwaarde." }, { woord: "present simple", uitleg: "Gewone tegenwoordige tijd: I work, she works." }],
          theorie: "Type 1 = if + present simple, will + base verb.",
          voorbeelden: [{ type: "stap", tekst: "If she calls = correct. If she call = fout (mist -s)." }],
          basiskennis: [{ onderwerp: "Werkwoord-uitgang", uitleg: "Net als gewone present simple: -s voor 3e persoon enkelvoud." }],
          niveaus: {
            basis: "calls. A.",
            simpeler: "Type 1 if-clause = present simple. 'She' is 3e persoon enkelvoud → werkwoord krijgt -s. Dus: calls. = A.",
            nogSimpeler: "calls = A.",
          },
        },
      },
      {
        q: "**'If you don't sleep, you ___ tired.'**",
        options: ["will be", "are", "would be", "were"],
        answer: 0,
        wrongHints: [null, "Klopt — toekomst-gevolg.", "Niet alleen present — toekomst.", "Type 2.", "Type 2."],
      },
    ],
  },

  // STAP 3: Type 2
  {
    title: "Type 2 — Onreëel in heden",
    explanation:
      "**Type 2** voor situaties die **NU niet zo zijn** maar je fantaseert.\n\n**Formule**:\n**If + past simple, would + base form.**\n\n**Voorbeelden**:\n• 'If I **had** a million euros, I **would** travel the world.' *(ik heb geen miljoen)*.\n• 'If I **were** you, I **would** apologize.' *(ik ben jou niet)*.\n• 'If she **knew** the answer, she **would** tell us.' *(ze weet het niet)*.\n• 'If we **lived** in Spain, we **would** speak Spanish.' *(we wonen daar niet)*.\n\n**Speciaal — 'were' in plaats van 'was'**:\nIn Type 2 conditionals gebruik je voor **alle personen** **'were'**, niet 'was':\n• 'If I **were** a bird, I **would** fly.' *(formeel, klassiek)*.\n• 'If he **were** here, he **would** know.'\n\nIn **dagelijks Engels** wordt 'was' ook geaccepteerd voor I/he/she/it:\n• 'If I was rich...' *(informeel)*.\nMaar bij Cito-toets en formele teksten: **'were' is correcter**.\n\n**Gebruik Type 2 voor**:\n• **Fantasie** — *'If I had wings, I would fly.'*\n• **Onmogelijke wensen** — *'If I were taller, I would be a model.'*\n• **Beleefd advies** — *'If I were you, I would call her.'*\n• **Hypothetische situaties** — *'What would you do if you won the lottery?'*\n\n**Vragen in Type 2**:\n*'What would you do if ___?'*\n→ 'What would you do if you won?' *(if + past simple, would + base)*.\n\n**Cito-truc — niet wat is, maar wat zou kunnen zijn**:\n• Type 2 is voor **niet-waar nu** situaties.\n• In Nederlands: 'als ik ... zou ik ...'.\n\n**Voorbeeld stikvraag**:\n*'If I ___ rich, I would buy a Ferrari.'*\n→ **were** *(formeel)* of **was** *(informeel)*. Cito accepteert beide vaak; were is veiliger.\n\n**Cito-voorbeeld**:\n*'If I had time, I ___ (visit) my grandmother.'*\n→ **would visit** *(would + base)*.\n\n*'If she ___ (know), she would help.'*\n→ **knew** *(past simple)*.\n\n**Hoe Type 1 vs Type 2 herkennen?**\n• 'If it rains, I will stay home.' → realistische voorspelling = Type 1.\n• 'If it rained on Mars, I would visit.' → niet realistisch = Type 2.",
    checks: [
      {
        q: "**'If I had a car, I ___ to school.'**",
        options: ["would drive", "will drive", "drive", "drove"],
        answer: 0,
        wrongHints: [null, "Klopt — Type 2 wens.", "Type 1 (maar dan if I have).", "Geen would.", "Beide if + verleden = mismatch."],
      },
      {
        q: "Welke vorm in Type 2 if-clause (3e persoon)?",
        options: ["If she were ...", "If she is ...", "If she will be ...", "If she has been ..."],
        answer: 0,
        wrongHints: [null, "Klopt — 'were' in Type 2 (formeel).", "Type 1.", "Niet would-pendant.", "Te complex tense."],
      },
      {
        q: "**'If I ___ you, I would apologize.'**",
        options: ["were", "am", "will be", "have been"],
        answer: 0,
        wrongHints: [null, "Klopt — Type 2 advies-formule.", "Type 1.", "Niet conditional.", "Niet conditional."],
      },
      {
        q: "**'What ___ you do if you won the lottery?'**",
        options: ["would", "will", "do", "are"],
        answer: 0,
        wrongHints: [null, "Klopt — Type 2 vraag.", "Type 1 (maar dan if you win).", "Geen conditional-marker.", "Geen conditional-marker."],
      },
    ],
  },

  // STAP 4: Type 3
  {
    title: "Type 3 — Onreëel in verleden",
    explanation:
      "**Type 3** voor situaties die **in het verleden hadden kunnen gebeuren maar niet zijn gebeurd**. Spijt of regret.\n\n**Formule**:\n**If + had + past participle, would have + past participle.**\n\n*Past participle* = 3e vorm van werkwoord *(zie ook onregelmatige werkwoorden)*.\n• study → studied → studied.\n• go → went → **gone**.\n• see → saw → **seen**.\n• do → did → **done**.\n\n**Voorbeelden**:\n• 'If I **had studied**, I **would have passed** the exam.' *(ik heb niet geleerd, dus ben gezakt)*.\n• 'If we **had left** earlier, we **would have caught** the bus.' *(we waren te laat)*.\n• 'If she **had called**, I **would have answered**.' *(ze heeft niet gebeld)*.\n• 'If you **had told** me, I **would have helped**.' *(je hebt niet verteld)*.\n\n**Type 3 — gebruikt voor**:\n• **Spijt** — *'If I had known...'*.\n• **Hypothetisch verleden** — *'What would you have done if...?'*\n• **Kritiek** — *'If you had been careful, this wouldn't have happened.'*\n\n**Negatieve vormen**:\n• 'If you **hadn't** told me, I **wouldn't have known**.'\n• 'If I **hadn't been** so tired, I **would have stayed**.'\n\n**Variants in main clause**:\n• **could have** = had gekund.\n• **might have** = had misschien.\n• **should have** = had moeten.\n\n• 'If I had known, I **could have** helped you.' *(ik had je kunnen helpen)*.\n• 'If he hadn't been late, he **might have** caught the bus.' *(had misschien)*.\n\n**Cito-truc — herken Type 3**:\n• Praat over **verleden** *('had studied', 'would have passed')*.\n• Spijt-gevoel.\n• Werkwoorden in 'had + past participle' en 'would have + past participle'.\n\n**Cito-voorbeeld**:\n*'If I ___ (study), I would have passed.'*\n→ **had studied**.\n\n*'If she had called, I ___ (answer).'*\n→ **would have answered**.\n\n**Veel-voorkomende fout**:\n• Vergeten **'have'** in main clause:\n  ❌ 'If I had studied, I would passed.' \n  ✓ 'If I had studied, I would **have** passed.'\n\n**Lange formule om te onthouden**:\n```\nIf + [hadden gedaan]   ,  [zou hebben gedaan]\nIf + had + 3e vorm     ,  would have + 3e vorm\n```",
    checks: [
      {
        q: "**'If I had studied, I ___ passed.'**",
        options: ["would have", "would", "had", "will have"],
        answer: 0,
        wrongHints: [null, "Klopt — Type 3 main clause.", "Type 2.", "Past perfect — geen would.", "Geen Type 3."],
      },
      {
        q: "**'If she ___ (call), I would have answered.'**",
        options: ["had called", "called", "calls", "had been calling"],
        answer: 0,
        wrongHints: [null, "Klopt — had + past participle.", "Past simple = Type 2.", "Present.", "Te complex tense."],
      },
      {
        q: "**'If we had left earlier, we ___ the bus.'**",
        options: ["would have caught", "would catch", "had caught", "will have caught"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Type 2.", "Past perfect mist 'would'.", "Future perfect."],
      },
      {
        q: "Type 3 gebruik je voor:",
        options: ["Spijt over verleden", "Toekomst-plannen", "Algemene waarheid", "Hypothese nu"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Type 1.", "Type 0.", "Type 2."],
        uitlegPad: {
          stappen: [
            { titel: "Type 3 = wat had kunnen gebeuren", tekst: "Type 3 is voor situaties in het verleden die NIET zijn gebeurd. Vaak met spijt of kritiek." },
            { titel: "Formule", tekst: "If + had + 3e vorm, would have + 3e vorm." },
          ],
          woorden: [{ woord: "past participle", uitleg: "3e vorm van werkwoord: gone, seen, done, studied." }],
          theorie: "Type 3 verwijst altijd naar verleden — naar iets dat niet is gebeurd.",
          voorbeelden: [{ type: "stap", tekst: "'If I had studied, I would have passed' = ik heb niet geleerd, dus gezakt." }],
          basiskennis: [{ onderwerp: "Spijt-formule", uitleg: "Onthoud Type 3 als de 'spijt-zin'." }],
          niveaus: {
            basis: "Spijt over verleden. A.",
            simpeler: "Type 3 is voor situaties in het verleden die niet zijn gebeurd. Vaak met spijt: 'als ik geleerd had, was ik geslaagd.' = A.",
            nogSimpeler: "Spijt verleden = A.",
          },
        },
      },
    ],
  },

  // STAP 5: Mixed conditionals
  {
    title: "Mixed conditionals — combinatie",
    explanation:
      "Soms combineer je 2 tijden — **mixed conditional**.\n\n**Mix Type 3 + Type 2** *(verleden voorwaarde, gevolg nu)*:\n• 'If I **had studied** medicine, I **would be** a doctor now.'\n  → Ik heb geen medicijnen gestudeerd (verleden), dus ben nu geen dokter.\n• 'If she **had taken** the job, she **would live** in Paris.'\n  → Ze heeft de baan niet aangenomen (verleden), dus woont nu niet in Parijs.\n\n**Formule**:\nIf + had + past participle, would + base form.\n\n**Mix Type 2 + Type 3** *(huidige situatie, verleden gevolg)*:\n• 'If I **were** more careful, I **wouldn't have lost** my keys.'\n  → Ik ben niet voorzichtig (nu), dus heb ik gisteren mijn sleutels verloren (verleden).\n• 'If he **knew** Spanish, he **could have helped** us yesterday.'\n  → Hij kent geen Spaans (nu), dus kon ons gisteren niet helpen.\n\n**Formule**:\nIf + past simple, would have + past participle.\n\n**Cito-zelden — meestal alleen Type 1/2/3**:\nMixed conditionals zijn voor gevorderde leerlingen *(klas 4-5+, of bovenbouw)*. Voor klas 3 vooral Type 1/2/3 kennen.\n\n**Alternatieve constructies**:\nIn plaats van 'if' kun je ook gebruiken:\n\n**'Unless'** = 'als niet' / 'tenzij':\n• 'Unless you study, you will fail.' = 'If you don't study, you will fail.'\n• 'Unless it rains, we'll go.' = 'If it doesn't rain, we'll go.'\n\n**'Should'** = 'mocht':\n• 'Should you need help, call me.' = 'If you need help, call me.'\n• Formele toon.\n\n**'Were'** *(inversion)* = 'mocht het zo zijn':\n• 'Were I rich, I would travel.' = 'If I were rich...'\n• Heel formeel/literair.\n\n**'In case'** = 'voor het geval':\n• 'Take an umbrella in case it rains.' *(neem 'm mee, je weet maar nooit)*.\nNiet hetzelfde als 'if' — 'in case' = preventief, 'if' = voorwaardelijk.\n\n**Cito-stikvraag**:\n*'Difference between if and unless?'*\n→ Unless = if + not. Tegenovergesteld.\n\n*'Difference between if and in case?'*\n→ If = voorwaarde-gevolg. In case = preventieve maatregel.",
    checks: [
      {
        q: "**'If I had studied medicine, I ___ a doctor now.'** Welk type?",
        options: ["Mixed (Type 3 + 2)", "Type 1", "Type 2", "Type 3"],
        answer: 0,
        wrongHints: [null, "Klopt — verleden voorwaarde, nu-gevolg.", "Reëel toekomst.", "Alleen Type 2.", "Alleen Type 3."],
      },
      {
        q: "**'Unless you hurry, you ___ the train.'**",
        options: ["will miss", "would miss", "miss", "missed"],
        answer: 0,
        wrongHints: [null, "Klopt — 'unless' = if not. Type 1.", "Geen Type 2.", "Geen toekomst.", "Verleden — geen match."],
      },
      {
        q: "**'Unless'** betekent ... ?",
        options: ["If not", "If always", "Until", "Since"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet 'altijd'.", "Tot — iets anders.", "Sinds — iets anders."],
      },
      {
        q: "**'Take an umbrella ___ it rains.'**",
        options: ["in case", "if", "unless", "when"],
        answer: 0,
        wrongHints: [null, "Klopt — preventieve maatregel.", "Kan ook maar 'in case' beter voor 'voor het geval'.", "Tegenovergesteld.", "Tijd, niet voorwaarde."],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — conditionals mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: Type 1, 2, 3 + unless.\n\nVeel succes!",
    checks: [
      {
        q: "**'If it ___ (rain) tomorrow, we will stay home.'**",
        options: ["rains", "will rain", "rained", "rain"],
        answer: 0,
        wrongHints: [null, "Klopt — Type 1, if + present.", "Geen 'will' in if.", "Type 2.", "Mist -s (3e persoon)."],
      },
      {
        q: "**'If I had a million euros, I ___ travel the world.'**",
        options: ["would", "will", "have", "had"],
        answer: 0,
        wrongHints: [null, "Klopt — Type 2 hoofdzin.", "Type 1.", "Niet conditional.", "Past simple is in if-clause, niet hoofdzin."],
      },
      {
        q: "**'If she had known, she ___ have helped.'**",
        options: ["would", "will", "had", "would be"],
        answer: 0,
        wrongHints: [null, "Klopt — Type 3.", "Type 1.", "Mist 'would'.", "Mixed met 'be'."],
      },
      {
        q: "**'___ you study harder, you will pass.'**",
        options: ["If", "Unless", "Were", "Should"],
        answer: 0,
        wrongHints: [null, "Klopt — Type 1.", "Tegenovergesteld.", "Inversion — formeel, ongewoon hier.", "Kan formeel, maar 'If' gangbaarder."],
      },
      {
        q: "**'If I ___ you, I would tell the truth.'**",
        options: ["were", "am", "was", "had been"],
        answer: 0,
        wrongHints: [null, "Klopt — formeel correct.", "Type 1.", "Informeel kan, formeel were.", "Type 3."],
      },
      {
        q: "**'Unless you sleep, you ___ tired.'**",
        options: ["will be", "would be", "are", "had been"],
        answer: 0,
        wrongHints: [null, "Klopt — Type 1 (unless = if not).", "Type 2.", "Niet conditional.", "Niet matchend."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const conditionalsEngels = {
  id: "conditionals-engels",
  title: "Conditionals (if-zinnen) Engels (klas 3)",
  emoji: "❓",
  level: "klas3",
  subject: "engels",
  referentieNiveau: "2F",
  sloThema: "Engels — voorwaardelijke zinnen",
  prerequisites: [
    { id: "present-tenses-engels", title: "Present tenses Engels", niveau: "2F" },
    { id: "past-tenses-engels", title: "Past tenses Engels", niveau: "2F" },
    { id: "onregelmatige-werkwoorden-engels", title: "Onregelmatige werkwoorden Engels", niveau: "2F" },
  ],
  intro:
    "Conditionals (if-zinnen) voor klas 3 — Type 0 algemene waarheid, Type 1 reëel toekomst, Type 2 onreëel heden (would + base), Type 3 onreëel verleden (would have + past participle), mixed + unless/should/in case. ~15 min.",
  triggerKeywords: [
    "conditional", "if-zin", "if zin",
    "would", "would have", "had + past participle",
    "type 1", "type 2", "type 3",
    "unless", "in case",
  ],
  chapters,
  steps,
};

export default conditionalsEngels;
