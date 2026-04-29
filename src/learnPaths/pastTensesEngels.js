// Leerpad: Past simple & present perfect — Engels onderbouw VO
// 10 stappen in 4 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  past: "#ff7043", perfect: "#7e57c2", good: "#00c853",
};

const stepEmojis = ["⏰", "❓", "🔁", "🆚", "📅", "♾️", "🎯", "⚠️", "🧩", "🏆"];

const chapters = [
  { letter: "A", title: "Past simple", emoji: "⏰", from: 0, to: 1 },
  { letter: "B", title: "Present perfect", emoji: "🔁", from: 2, to: 4 },
  { letter: "C", title: "Verschil & toepassen", emoji: "🆚", from: 5, to: 8 },
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 9, to: 9 },
];

const steps = [
  {
    title: "Past simple — afgeronde verleden tijd",
    explanation: "**Past simple** = gewone verleden tijd, voor afgesloten gebeurtenissen.\n\n**Vorm regelmatige werkwoorden**: basisvorm + **-ed**.\n• work → worked\n• play → played\n• watch → watched\n• live → lived (e was er al, alleen -d)\n\n**Spelling**:\n• -e → +d: live → lived\n• cons. + y → -ied: study → studied, cry → cried\n• korte klank + medeklinker → verdubbel: stop → stopped, plan → planned\n\n**Onregelmatige werkwoorden** (V2 leren!):\n• go → went, see → saw, eat → ate\n• be → was/were, have → had, do → did\n• Zie ook leerpad 'Onregelmatige werkwoorden'.\n\n**Zelfde vorm voor alle personen** (geen -s, geen verschil tussen I/he/we):\n• I worked, you worked, he worked, we worked.\n• I went, she went, they went.\n\n**Tijdwoorden**: yesterday, last week, in 2010, two days ago, when I was a child.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="260" height="50" rx="8" fill="${COLORS.past}" opacity="0.18" stroke="${COLORS.past}" stroke-width="2"/>
<text x="150" y="68" text-anchor="middle" fill="${COLORS.past}" font-size="14" font-family="Arial" font-weight="bold">PAST SIMPLE</text>
<text x="150" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">basisvorm + -ed (of V2 onregelmatig)</text>
<text x="40" y="118" fill="${COLORS.text}" font-size="11" font-family="Arial">work → worked</text>
<text x="40" y="138" fill="${COLORS.text}" font-size="11" font-family="Arial">go → went</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">yesterday · last week · ago</text>
</svg>`,
    checks: [
      {
        q: "Wat is past simple van **play**?",
        options: ["played", "plaied", "playd", "playyed"],
        answer: 0,
        wrongHints: [null, "klinker + y → gewoon +ed.", "+ed, niet +d.", "Geen verdubbeling."],
      },
      {
        q: "Wat is past simple van **stop**?",
        options: ["stopped", "stoped", "stopd", "stopt"],
        answer: 0,
        wrongHints: [null, "Korte klank + medeklinker → verdubbeling: stopped.", "+ed, niet +d.", "Geen Engelse uitgang."],
      },
    ],
  },
  {
    title: "Past simple — vragen + ontkenningen met did",
    explanation: "Voor vragen en ontkenningen in past simple gebruik je **did** als hulpwerkwoord.\n\n**Belangrijk**: na did → **basisvorm** van het werkwoord, GEEN -ed of V2.\n\n**Vragen**:\n• Did you go? *(NIET: Did you went?)*\n• Did she play? *(NIET: Did she played?)*\n• What did you eat? *(NIET: What did you ate?)*\n\n**Ontkenningen** (didn't = did not):\n• I didn't see him. *(NIET: I didn't saw him.)*\n• They didn't come. *(NIET: They didn't came.)*\n\n**Waarom?** De verleden tijd zit al in 'did'. Het werkwoord blijft basisvorm — anders zeg je twee keer verleden tijd.\n\n**Veel gemaakte fout**: ❌ *Did you went home?* → ✅ *Did you **go** home?*",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">did + basisvorm</text>
<text x="20" y="55" fill="${COLORS.past}" font-size="11" font-family="Arial" font-weight="bold">vraag:</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">  Did you go? · Did she play?</text>
<text x="20" y="100" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">ontkenning:</text>
<text x="20" y="118" fill="${COLORS.text}" font-size="11" font-family="Arial">  I didn't see · They didn't come</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">na did → basisvorm, geen V2!</text>
</svg>`,
    checks: [
      {
        q: "Welke is **goed**?",
        options: ["Did you see the film?", "Did you saw the film?", "Do you see the film?", "Did you sees the film?"],
        answer: 0,
        wrongHints: [null, "Na did → basisvorm.", "Do is voor present, niet past.", "Geen -s na did."],
      },
      {
        q: "Welke is **goed**?",
        options: ["She didn't go to school.", "She didn't went to school.", "She not go to school.", "She didn't goes to school."],
        answer: 0,
        wrongHints: [null, "Didn't + basisvorm = go.", "Niet alleen 'not' — je hebt didn't nodig.", "Geen -s na didn't."],
      },
    ],
  },

  // B
  {
    title: "Present perfect — vorm en gebruik",
    explanation: "**Present perfect** = have/has + V3 (past participle).\n\n**Vorm**:\n• I / you / we / they → **have** + V3 — *I have eaten.*\n• he / she / it → **has** + V3 — *She has gone.*\n• Korte vormen: I've, you've, he's, she's, we've, they've.\n\n**V3** (past participle):\n• Regelmatig: zelfde als V2 (worked, played).\n• Onregelmatig: leren! (gone, seen, eaten, broken, written, taken).\n\n**Wanneer present perfect?** Drie hoofdgebruiken:\n\n**1. Ervaring** (heb je het ooit gedaan?):\n• I have visited Paris. (ooit, geen vast tijdstip)\n• She has never tried sushi.\n\n**2. Recent gebeurd, gevolg nu**:\n• I have lost my keys. (kan nog niet binnen)\n• He has just arrived. (hij is er nu)\n\n**3. Doorlopende situatie** (sinds wanneer / hoe lang):\n• I have lived here for 5 years. (en ik woon er nog steeds)\n• We have known each other since 2010.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="260" height="50" rx="8" fill="${COLORS.perfect}" opacity="0.18" stroke="${COLORS.perfect}" stroke-width="2"/>
<text x="150" y="68" text-anchor="middle" fill="${COLORS.perfect}" font-size="14" font-family="Arial" font-weight="bold">PRESENT PERFECT</text>
<text x="150" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">have/has + V3</text>
<text x="40" y="118" fill="${COLORS.text}" font-size="11" font-family="Arial">I have eaten</text>
<text x="40" y="138" fill="${COLORS.text}" font-size="11" font-family="Arial">She has gone</text>
<text x="40" y="158" fill="${COLORS.text}" font-size="11" font-family="Arial">We have lived here for 5 years</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">ervaring · gevolg nu · doorlopend</text>
</svg>`,
    checks: [
      {
        q: "Welke is **goed**?",
        options: ["I have eaten breakfast.", "I has eaten breakfast.", "I am eaten breakfast.", "I have eat breakfast."],
        answer: 0,
        wrongHints: [null, "I → have, niet has.", "Be is geen hulpwerkwoord voor perfect.", "Na 'have' moet V3 = eaten, niet eat."],
      },
      {
        q: "Wat is V3 van **see**?",
        options: ["seen", "saw", "seed", "seeing"],
        answer: 0,
        wrongHints: [null, "Saw is V2 (past simple).", "See is onregelmatig — geen -ed.", "-ing-vorm, andere tijd."],
      },
    ],
  },
  {
    title: "Signaalwoorden voor present perfect",
    explanation: "Bepaalde tijdwoorden geven aan dat je present perfect moet gebruiken:\n\n**Ervaring-signalen**:\n• ever (ooit) — *Have you ever been to Spain?*\n• never — *I have never tried that.*\n\n**Tijd-tot-nu**:\n• since (sinds) — *I have lived here since 2020.*\n• for (gedurende, tot nu) — *She has worked here for 10 years.*\n\n**Recent / nu nog merkbaar**:\n• just — *He has just left.*\n• already — *I have already eaten.*\n• yet (nog niet, in vraag/ontkenning) — *Have you finished yet? — I haven't finished yet.*\n• recently / lately — *We have seen them recently.*\n\n**Niet-afgeronde periode**:\n• today, this week, this month, this year (als 't nog loopt!)\n• *I have read 2 books this month.* (maand is nog niet voorbij)\n\n**Truc**: zie je een van deze woorden? Bijna zeker present perfect.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">perfect-signalen</text>
<text x="20" y="55" fill="${COLORS.perfect}" font-size="11" font-family="Arial" font-weight="bold">ervaring:</text>
<text x="40" y="72" fill="${COLORS.text}" font-size="11" font-family="Arial">ever, never</text>
<text x="20" y="98" fill="${COLORS.perfect}" font-size="11" font-family="Arial" font-weight="bold">duur tot nu:</text>
<text x="40" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">since 2020, for 5 years</text>
<text x="20" y="140" fill="${COLORS.perfect}" font-size="11" font-family="Arial" font-weight="bold">recent / nog niet:</text>
<text x="40" y="157" fill="${COLORS.text}" font-size="11" font-family="Arial">just, already, yet, recently</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ have/has + V3</text>
</svg>`,
    checks: [
      {
        q: "Welke is **goed**? — *I ___ that film three times.* (see)",
        options: ["have seen", "saw", "have see", "saw three times"],
        answer: 0,
        wrongHints: [null, "Ervaring-betekenis = perfect.", "'Three times' = ervaring → perfect.", "Na 'have' moet V3.", "Geen geldige vorm."],
      },
      {
        q: "Welke is **goed**? — *We ___ here since 2018.* (live)",
        options: ["have lived", "lived", "are living", "live"],
        answer: 0,
        wrongHints: [null, "'Since' = perfect (duur tot nu).", "Past simple past niet bij 'since'.", "Continuous past hier minder goed.", "Simple past niet bij 'since'."],
      },
    ],
  },
  {
    title: "Yet, already, just, ever — exact gebruik",
    explanation: "Vier woorden die je veel ziet bij present perfect — let op de **plek** in de zin:\n\n**Just** = zojuist, net.\n• Tussen have/has en V3.\n• *I have **just** eaten.*\n• *She has **just** arrived.*\n\n**Already** = al.\n• Tussen have/has en V3 (positief).\n• *I have **already** seen that film.*\n• *He has **already** gone.*\n\n**Yet** = nog (in ontkenning) / al (in vraag).\n• Aan het EIND van de zin.\n• *Have you finished **yet**?* (al?)\n• *I haven't finished **yet**.* (nog niet)\n\n**Ever** = ooit.\n• Tussen have/has en V3, vooral in vragen.\n• *Have you **ever** been to Japan?*\n• *Have they **ever** met before?*\n\n**Never** = nooit.\n• Zelfde plek als ever.\n• *I have **never** tried sushi.*",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">tussen have / V3</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">have <tspan fill="${COLORS.perfect}" font-weight="bold">just</tspan> eaten — net</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">have <tspan fill="${COLORS.perfect}" font-weight="bold">already</tspan> seen — al</text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">have <tspan fill="${COLORS.perfect}" font-weight="bold">ever</tspan> been — ooit</text>
<text x="20" y="109" fill="${COLORS.text}" font-size="11" font-family="Arial">have <tspan fill="${COLORS.perfect}" font-weight="bold">never</tspan> tried — nooit</text>
<line x1="20" y1="120" x2="280" y2="120" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="20" y="140" fill="${COLORS.text}" font-size="11" font-family="Arial">aan het EIND: <tspan fill="${COLORS.alt}" font-weight="bold">yet</tspan></text>
<text x="20" y="158" fill="${COLORS.muted}" font-size="10" font-family="Arial">  Have you finished yet? · I haven't yet.</text>
</svg>`,
    checks: [
      {
        q: "Welke is **goed**?",
        options: ["I have already eaten.", "I already have eaten.", "I have eaten already at start.", "Already I have eaten."],
        answer: 0,
        wrongHints: [null, "'Already' staat tussen have en V3.", "Engelse zinsvolgorde plaatst already binnenin.", "Beetje raar geformuleerd.", "'Already' niet vooraan."],
      },
      {
        q: "Welke is **goed**?",
        options: ["Have you finished yet?", "Have yet you finished?", "Yet have you finished?", "You have yet finished?"],
        answer: 0,
        wrongHints: [null, "Yet hoort aan het eind.", "Verkeerde plek.", "Niet vooraan.", "Geen vraagvolgorde."],
      },
    ],
  },

  // C
  {
    title: "Past simple of present perfect? — kernregel",
    explanation: "De grote vraag bij verleden tijden: **simple of perfect?**\n\n**Past simple** = afgesloten verleden, vaak met **vast tijdstip**.\n• Yesterday, last week, in 2010, two days ago, when I was 12.\n• *I **saw** her yesterday.*\n• *We **went** to Paris last year.*\n\n**Present perfect** = link met nu (geen vast tijdstip, of tijd loopt nog).\n• ever, never, just, already, yet, since, for, recently.\n• This week / month / year (als nog niet voorbij).\n• *I **have seen** that film twice.*\n• *We **have lived** here for 5 years.*\n\n**Vergelijk**:\n• *I saw him yesterday.* (gisteren = klaar) **→ simple**\n• *I have seen him today.* (vandaag is nog bezig) **→ perfect**\n• *She went to Paris in 2019.* (vast jaartal) **→ simple**\n• *She has been to Paris.* (ervaring, geen jaartal) **→ perfect**\n\n**Truc**: vraag jezelf af — *kan ik er een specifiek tijdstip bij zetten?* Ja → simple. Nee → perfect.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="120" height="120" rx="10" fill="${COLORS.past}" opacity="0.15" stroke="${COLORS.past}" stroke-width="2"/>
<text x="80" y="65" text-anchor="middle" fill="${COLORS.past}" font-size="13" font-family="Arial" font-weight="bold">SIMPLE</text>
<text x="80" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vast tijdstip</text>
<text x="80" y="102" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">yesterday</text>
<text x="80" y="118" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">last week</text>
<text x="80" y="134" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">in 2010</text>
<rect x="160" y="40" width="120" height="120" rx="10" fill="${COLORS.perfect}" opacity="0.15" stroke="${COLORS.perfect}" stroke-width="2"/>
<text x="220" y="65" text-anchor="middle" fill="${COLORS.perfect}" font-size="13" font-family="Arial" font-weight="bold">PERFECT</text>
<text x="220" y="86" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">link met nu</text>
<text x="220" y="102" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">ever / never</text>
<text x="220" y="118" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">since / for</text>
<text x="220" y="134" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">just / yet</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">vast tijdstip? simple. anders: perfect.</text>
</svg>`,
    checks: [
      {
        q: "Welke is goed? — *I ___ him yesterday.* (see)",
        options: ["saw", "have seen", "see", "did see"],
        answer: 0,
        wrongHints: [null, "Yesterday = vast tijdstip → simple.", "Perfect past niet bij 'yesterday'.", "Tegenwoordige tijd, klopt niet.", "Geen geldige vorm."],
      },
      {
        q: "Welke is goed? — *I ___ him three times this week.* (see)",
        options: ["have seen", "saw", "see", "have see"],
        answer: 0,
        wrongHints: [null, "'This week' = nog bezig → perfect.", "Simple past niet bij 'this week' (nog bezig).", "Tegenwoordige tijd.", "Na 'have' moet V3 = seen."],
      },
    ],
  },
  {
    title: "Veelgemaakte fouten — top 5",
    explanation: "Deze fouten kom je elke schoolweek tegen. Onthoud ze.\n\n**1. ❌ I have went** → ✅ I have **gone** (V2 vs V3)\n*Na have/has hoort V3, niet V2.*\n\n**2. ❌ Did you saw him?** → ✅ Did you **see** him?\n*Na did → basisvorm.*\n\n**3. ❌ I have seen him yesterday.** → ✅ I **saw** him yesterday.\n*Yesterday = vast tijdstip → past simple, geen perfect.*\n\n**4. ❌ I am living here for 5 years.** → ✅ I **have lived** here for 5 years.\n*'For 5 years' (tot nu) = perfect, geen present continuous.*\n\n**5. ❌ She has lived here since 5 years.** → ✅ She has lived here **for** 5 years.\n*Since = sinds (een tijdstip): since 2020. For = gedurende (een duur): for 5 years.*",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">top 5 fouten</text>
<text x="20" y="50" fill="${COLORS.text}" font-size="10" font-family="Arial">1. have went → have <tspan fill="${COLORS.good}" font-weight="bold">gone</tspan></text>
<text x="20" y="70" fill="${COLORS.text}" font-size="10" font-family="Arial">2. did you saw → did you <tspan fill="${COLORS.good}" font-weight="bold">see</tspan></text>
<text x="20" y="90" fill="${COLORS.text}" font-size="10" font-family="Arial">3. have seen yesterday → <tspan fill="${COLORS.good}" font-weight="bold">saw</tspan> yesterday</text>
<text x="20" y="110" fill="${COLORS.text}" font-size="10" font-family="Arial">4. am living for 5 yrs → <tspan fill="${COLORS.good}" font-weight="bold">have lived</tspan> for 5 yrs</text>
<text x="20" y="130" fill="${COLORS.text}" font-size="10" font-family="Arial">5. since 5 years → <tspan fill="${COLORS.good}" font-weight="bold">for</tspan> 5 years</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">since 2020 ✓ · for 5 years ✓</text>
</svg>`,
    checks: [
      {
        q: "Welke is **goed**?",
        options: ["I have lost my keys.", "I have lose my keys.", "I have lost my keys yesterday.", "I am lost my keys."],
        answer: 0,
        wrongHints: [null, "Lost is V3 — klopt na have.", "Lose = basis, na have moet V3 = lost.", "Vast tijdstip + perfect klopt niet.", "Be is geen hulpwerkwoord voor perfect."],
      },
      {
        q: "Welke is **goed**? — sinds 2020 woon ik in Amsterdam.",
        options: ["I have lived in Amsterdam since 2020.", "I live in Amsterdam since 2020.", "I have lived in Amsterdam for 2020.", "I live in Amsterdam for 5 years."],
        answer: 0,
        wrongHints: [null, "Since + perfect = goed.", "Simple past niet bij 'since'.", "For + jaartal klopt niet — 'for' bij duur, 'since' bij tijdstip.", "Simple past niet bij doorlopende situatie."],
      },
    ],
  },
  {
    title: "Spreektaal: contracties + intonatie",
    explanation: "In gesproken Engels gebruik je bijna altijd **korte vormen** (contractions). Belangrijk voor natuurlijk klinken.\n\n**Past simple — geen contractie nodig** (tenzij ontkenning):\n• I went, she saw, they came.\n• I **didn't** = did not.\n\n**Present perfect — wel contracties**:\n• I've = I have\n• You've = you have\n• He's / She's / It's = he has / she has / it has *(let op: ook = he is!)*\n• We've / They've = we have / they have\n• I haven't = I have not\n• She hasn't = she has not\n\n**Verwarring**: *He's gone* kan zijn:\n• He **is** gone (continuous of als adjectief — minder vaak)\n• He **has** gone (perfect — vaakst gebruikt)\n\nUit context blijkt het meestal: *He's gone home.* = perfect (weggegaan).\n\n**Tip**: in spreektaal hoor je vaak de hulpwerkwoord-contractie. Train je oor.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">contracties</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">I have → <tspan fill="${COLORS.good}" font-weight="bold">I've</tspan></text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">she has → <tspan fill="${COLORS.good}" font-weight="bold">she's</tspan></text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">they have → <tspan fill="${COLORS.good}" font-weight="bold">they've</tspan></text>
<text x="20" y="109" fill="${COLORS.text}" font-size="11" font-family="Arial">have not → <tspan fill="${COLORS.alt}" font-weight="bold">haven't</tspan></text>
<text x="20" y="127" fill="${COLORS.text}" font-size="11" font-family="Arial">has not → <tspan fill="${COLORS.alt}" font-weight="bold">hasn't</tspan></text>
<text x="20" y="145" fill="${COLORS.text}" font-size="11" font-family="Arial">did not → <tspan fill="${COLORS.alt}" font-weight="bold">didn't</tspan></text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">spreektaal = bijna altijd kort</text>
</svg>`,
    checks: [
      {
        q: "Wat betekent *She's gone home*?",
        options: ["She has gone home.", "She is going home.", "Her gone home.", "She does gone home."],
        answer: 0,
        wrongHints: [null, "Met 'gone' = perfect → has gone.", "Continuous zou 'going' zijn, niet 'gone'.", "Geen geldige zin.", "Geen geldige Engelse vorm."],
      },
      {
        q: "Wat is **haven't**?",
        options: ["have not", "had not", "has not", "having"],
        answer: 0,
        wrongHints: [null, "Hadn't = had not.", "Hasn't = has not.", "Geen contractie."],
      },
    ],
  },
  {
    title: "Mix-oefening: simple of perfect?",
    explanation: "Stappen om elke zin te beslissen:\n\n1. **Tijdwoord lezen**:\n   - Vast tijdstip (yesterday, in 2010, last week) → **simple**.\n   - Open tijdstip (ever, never, just, since, for, this week-not-finished) → **perfect**.\n\n2. **Geen tijdwoord?** Vraag: heeft het nog effect nu?\n   - Ja (gevolg, ervaring) → perfect.\n   - Nee (gewoon iets uit verleden) → simple.\n\n3. **Werkwoordvorm**:\n   - Simple → V2 (-ed of onregelmatig).\n   - Perfect → have/has + V3.\n\n4. **Vraag/ontkenning?**\n   - Simple: did + basisvorm.\n   - Perfect: have/has naar voren.\n\n**Veel succes!**",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">mix — checklist</text>
<text x="20" y="50" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Tijdwoord lezen</text>
<text x="20" y="68" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Vast of open?</text>
<text x="20" y="86" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Vorm: V2 / have+V3</text>
<text x="20" y="104" fill="${COLORS.text}" font-size="11" font-family="Arial">4. Vraag → did / have+...</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">je kunt het — go for it!</text>
</svg>`,
    checks: [
      {
        q: "*She ___ to Spain in 2018.* (go)",
        options: ["went", "has gone", "go", "did went"],
        answer: 0,
        wrongHints: [null, "Vast jaartal = simple. Went = V2.", "Vast tijdstip → niet perfect.", "Tegenwoordige tijd.", "Na did → basisvorm; en vast tijdstip = simple zonder did."],
      },
      {
        q: "*___ you ever ___ a snake?* (see)",
        options: ["Have / seen", "Did / see", "Have / saw", "Do / see"],
        answer: 0,
        wrongHints: [null, "Ever → perfect. Seen = V3.", "Did is voor simple zonder 'ever'.", "V2 past niet na have.", "Do is voor present, en 'ever' eist perfect."],
      },
      {
        q: "*We ___ each other for 10 years.* (know)",
        options: ["have known", "knew", "know", "have knew"],
        answer: 0,
        wrongHints: [null, "For 10 years (tot nu) = perfect. Known = V3.", "Simple past niet bij 'for ... years' = nu.", "Tegenwoordige tijd past niet.", "V2 past niet na have."],
      },
    ],
  },
  {
    title: "Eindopdracht — verhaal vertellen",
    explanation: "Veel verhalen mengen past simple en present perfect. Voorbeeld:\n\n*\"I **have lived** in Amsterdam since 2020. Before that, I **lived** in Utrecht. I **moved** to Amsterdam in March 2020 because I **got** a new job. **Have** you ever **been** to Amsterdam? Last summer my friend **visited** me. We **had** a great time. I **have** also **visited** her in London twice — the second time was last December.\"*\n\n**Let op de wisseling**:\n- *have lived since 2020* → perfect, doorlopend.\n- *lived in Utrecht* → past simple, afgesloten.\n- *moved in March 2020* → past simple, vast tijdstip.\n- *Have you ever been* → perfect, ervaring.\n- *Last summer visited* → past simple, vast tijdstip.\n- *have visited her twice* → perfect, ervaring.\n- *the second time was last December* → past simple, vast.\n\nDit is hoe een echt Engels verhaal werkt. Mix is normaal.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">eindtoets</text>
<text x="20" y="55" fill="${COLORS.past}" font-size="11" font-family="Arial">past simple = vast tijdstip</text>
<text x="20" y="75" fill="${COLORS.perfect}" font-size="11" font-family="Arial">present perfect = link met nu</text>
<text x="150" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">verhalen mengen beide vormen</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "*When I was 10, I ___ a dog.* (have)",
        options: ["had", "have had", "have", "had have"],
        answer: 0,
        wrongHints: [null, "'When I was 10' = vast verleden → simple. Had = V2.", "Vast tijdstip → niet perfect.", "Tegenwoordige tijd, klopt niet.", "Geen geldige vorm."],
      },
      {
        q: "*She ___ never ___ a horror film.* (watch)",
        options: ["has / watched", "did / watch", "has / watch", "does / watch"],
        answer: 0,
        wrongHints: [null, "Never = perfect. Watched = V3 (regelmatig).", "Did is voor simple zonder 'never' meestal niet juist hier.", "Na has moet V3, niet basisvorm.", "Does is present simple."],
      },
      {
        q: "*I ___ my homework. Can I go now?*",
        options: ["have finished", "finished", "did finish", "finishing"],
        answer: 0,
        wrongHints: [null, "Gevolg nu (mag ik gaan?) = perfect.", "Simple kan, maar perfect drukt 'gevolg nu' beter uit; in deze context is perfect natuurlijker.", "Did finish past minder, perfect drukt 'klaar nu' uit.", "Geen werkwoordvorm."],
      },
      {
        q: "*Last weekend we ___ to the cinema and ___ a great film.* (go / see)",
        options: ["went / saw", "have gone / seen", "went / have seen", "have gone / saw"],
        answer: 0,
        wrongHints: [null, "Last weekend = simple. Went en saw zijn V2.", "Last weekend → niet perfect.", "Beide werkwoorden hetzelfde tense met vast tijdstip.", "Eerste klopt niet, vast tijdstip."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pastTensesEngels = {
  id: "past-tenses-engels",
  title: "Past simple & present perfect",
  emoji: "⏰",
  level: "klas2-3",
  subject: "engels",
  intro:
    "De twee verleden tijden van het Engels: past simple (afgesloten verleden, vast tijdstip) en present perfect (have/has + V3, link met nu). Met spelling, signaalwoorden, top 5 fouten en het verschil since vs for.",
  triggerKeywords: [
    "past simple", "past tense engels",
    "present perfect", "have V3", "has V3",
    "did didn't",
    "yesterday last week ago",
    "ever never just already yet",
    "since for", "since vs for",
    "verleden tijd engels",
    "yet already",
  ],
  chapters,
  steps,
};

export default pastTensesEngels;
