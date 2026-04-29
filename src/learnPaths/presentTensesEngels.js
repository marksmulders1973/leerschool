// Leerpad: Present simple & present continuous — Engels onderbouw VO
// 10 stappen in 4 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  simple: "#42a5f5", cont: "#ec407a", good: "#00c853",
};

const stepEmojis = ["📘", "👤", "❓", "🔄", "📝", "⚖️", "🕒", "🚫", "🎯", "🏆"];

const chapters = [
  { letter: "A", title: "Present simple", emoji: "📘", from: 0, to: 2 },
  { letter: "B", title: "Present continuous", emoji: "🔄", from: 3, to: 4 },
  { letter: "C", title: "Wanneer welke?", emoji: "⚖️", from: 5, to: 7 },
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 8, to: 9 },
];

const steps = [
  {
    title: "Wat is present simple?",
    explanation: "**Present simple** = de gewone tegenwoordige tijd. Je gebruikt 'm voor:\n• **Gewoontes / regelmaat**: *I play football every Tuesday.*\n• **Feiten / waarheden**: *Water boils at 100 °C.*\n• **Voorkeuren**: *She likes pizza.*\n• **Schema's** (treintijden, lesroosters): *The train leaves at 8.*\n\n**Vorm**:\n• I / you / we / they → **basisvorm** van het werkwoord. *I play, you eat, we live.*\n• he / she / it → basisvorm + **-s**. *He plays, she eats, it lives.*\n\n**De -s-regel** is de grootste spelregel om te onthouden. Bij he/she/it gaat er een -s achter:\n• I work → He works\n• She play**s** football.\n• It look**s** good.\n\nNiet vergeten: ALLEEN bij he/she/it. Bij we/they NIET.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="260" height="50" rx="8" fill="${COLORS.simple}" opacity="0.18" stroke="${COLORS.simple}" stroke-width="2"/>
<text x="150" y="68" text-anchor="middle" fill="${COLORS.simple}" font-size="14" font-family="Arial" font-weight="bold">PRESENT SIMPLE</text>
<text x="150" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">altijd / vaak / waar</text>
<text x="40" y="118" fill="${COLORS.text}" font-size="11" font-family="Arial">I / you / we / they → play</text>
<text x="40" y="138" fill="${COLORS.text}" font-size="11" font-family="Arial">he / she / it → play<tspan fill="${COLORS.alt}" font-weight="bold">s</tspan></text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">vergeet de -s niet!</text>
</svg>`,
    checks: [
      {
        q: "Welke vorm is **goed**? — *She ___ to school every day.*",
        options: ["walks", "walk", "walking", "is walk"],
        answer: 0,
        wrongHints: [null, "She is he/she/it → -s erachter.", "Dat is -ing, andere tijd.", "Geen geldige vorm."],
      },
      {
        q: "Welke zin is **goed**?",
        options: ["We live in Amsterdam.", "We lives in Amsterdam.", "We living in Amsterdam.", "We is live in Amsterdam."],
        answer: 0,
        wrongHints: [null, "We → geen -s. -s alleen bij he/she/it.", "-ing-vorm zonder hulpwerkwoord werkt niet.", "Geen geldige vorm."],
      },
    ],
  },
  {
    title: "He / she / it — uitzonderingen op de -s",
    explanation: "Bij he/she/it komt meestal **-s** achter het werkwoord. Maar sommige werkwoorden hebben een andere uitgang:\n\n**Werkwoord eindigt op -ss, -sh, -ch, -x, -o → -es**\n• kiss → kiss**es**\n• wash → wash**es**\n• watch → watch**es**\n• fix → fix**es**\n• go → go**es**\n• do → do**es**\n\n**Werkwoord eindigt op consonant + y → y wordt -ies**\n• study → stud**ies**\n• cry → cr**ies**\n• try → tr**ies**\n\n**Werkwoord eindigt op klinker + y → gewoon -s**\n• play → play**s**\n• say → say**s**\n• buy → buy**s**\n\n**Onregelmatig**:\n• have → **has** *(NIET: haves)*\n• be → **is** (am/is/are)",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">he/she/it — spelling -s</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">-ss/sh/ch/x/o → -es</text>
<text x="40" y="72" fill="${COLORS.muted}" font-size="10" font-family="Arial">watch → watches, go → goes</text>
<text x="20" y="98" fill="${COLORS.text}" font-size="11" font-family="Arial">cons. + y → -ies</text>
<text x="40" y="115" fill="${COLORS.muted}" font-size="10" font-family="Arial">study → studies</text>
<text x="20" y="138" fill="${COLORS.text}" font-size="11" font-family="Arial">have → has</text>
<text x="20" y="160" fill="${COLORS.text}" font-size="11" font-family="Arial">be → is/am/are</text>
</svg>`,
    checks: [
      {
        q: "Wat is de he/she/it-vorm van **study**?",
        options: ["studies", "studys", "studyes", "studyies"],
        answer: 0,
        wrongHints: [null, "consonant + y → y wordt ies.", "Niet -es maar -ies bij consonant + y.", "Niet i + ies, alleen -ies."],
      },
      {
        q: "Welke is **goed**? — *She ___ TV every evening.* (watch)",
        options: ["watches", "watchs", "watching", "watched"],
        answer: 0,
        wrongHints: [null, "Watch eindigt op -ch → -es.", "-ing-vorm, andere tijd.", "Verleden tijd, niet present."],
      },
    ],
  },
  {
    title: "Vragen + ontkenningen: do / does",
    explanation: "In present simple gebruik je **do / does** als hulpwerkwoord voor vragen en ontkenningen.\n\n**Do** voor I / you / we / they.\n**Does** voor he / she / it.\n\n**Vragen** (do/does + onderwerp + basisvorm):\n• Do you play football? (NIET: Do you plays?)\n• Does she like pizza? (NIET: Does she likes?)\n\n**Belangrijk**: na do/does **geen -s meer** op het werkwoord.\n\n**Ontkenningen** (don't / doesn't + basisvorm):\n• I don't play football.\n• She doesn't like pizza.\n\n**Veelgemaakte fout**: ❌ *She doesn't likes pizza.* → ✅ *She doesn't **like** pizza.*\n\nWaarom? De -s zit al in 'doesn't' (= does not). Het werkwoord blijft basisvorm.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">do / does</text>
<text x="20" y="50" fill="${COLORS.simple}" font-size="11" font-family="Arial" font-weight="bold">vraag:</text>
<text x="20" y="68" fill="${COLORS.text}" font-size="11" font-family="Arial">  Do you play? · Does she play?</text>
<text x="20" y="98" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">ontkenning:</text>
<text x="20" y="116" fill="${COLORS.text}" font-size="11" font-family="Arial">  I don't play · She doesn't play</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">na do/does → basisvorm!</text>
</svg>`,
    checks: [
      {
        q: "Welke is **goed**?",
        options: ["Does he speak English?", "Do he speak English?", "Does he speaks English?", "Is he speak English?"],
        answer: 0,
        wrongHints: [null, "He = does, niet do.", "Na 'does' komt basisvorm — geen -s.", "Is is een ander hulpwerkwoord (be)."],
      },
      {
        q: "Welke is **goed**?",
        options: ["She doesn't like coffee.", "She don't likes coffee.", "She doesn't likes coffee.", "She not likes coffee."],
        answer: 0,
        wrongHints: [null, "She = doesn't, en geen -s na doesn't.", "Geen -s na doesn't.", "'Not' alleen werkt niet — je hebt do/does nodig."],
      },
    ],
  },

  // B
  {
    title: "Wat is present continuous?",
    explanation: "**Present continuous** = bezig-met-nu vorm. Je gebruikt 'm voor:\n• **NU bezig**: *I am eating breakfast (right now).*\n• **Tijdelijke situaties**: *He is staying with friends this week.*\n• **Veranderingen**: *The world is getting warmer.*\n• **Geplande toekomst**: *I'm meeting Sarah tomorrow.*\n\n**Vorm**: vorm van **be (am/is/are) + werkwoord met -ing**\n\n• I → **am** + V-ing → I **am** play**ing**.\n• he/she/it → **is** + V-ing → She **is** read**ing**.\n• you/we/they → **are** + V-ing → They **are** wait**ing**.\n\n**Spelling van -ing**:\n• Standaard: play → playing.\n• Eindigt op -e → e weg + ing: make → making, write → writing.\n• Korte klank + medeklinker → verdubbel + ing: run → running, sit → sitting, swim → swimming.\n• Eindigt op -ie → -ie wordt -y: lie → lying, die → dying.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="260" height="50" rx="8" fill="${COLORS.cont}" opacity="0.18" stroke="${COLORS.cont}" stroke-width="2"/>
<text x="150" y="68" text-anchor="middle" fill="${COLORS.cont}" font-size="14" font-family="Arial" font-weight="bold">PRESENT CONTINUOUS</text>
<text x="150" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">am/is/are + V-ing</text>
<text x="40" y="118" fill="${COLORS.text}" font-size="11" font-family="Arial">I am playing</text>
<text x="40" y="136" fill="${COLORS.text}" font-size="11" font-family="Arial">She is reading</text>
<text x="40" y="154" fill="${COLORS.text}" font-size="11" font-family="Arial">They are waiting</text>
</svg>`,
    checks: [
      {
        q: "Welke is **goed**? — *They ___ TV right now.*",
        options: ["are watching", "is watching", "watch", "are watch"],
        answer: 0,
        wrongHints: [null, "They → are, niet is.", "Past niet bij 'right now' — moet continuous.", "-ing ontbreekt."],
      },
      {
        q: "Wat is de -ing-vorm van **run**?",
        options: ["running", "runing", "runeing", "ran"],
        answer: 0,
        wrongHints: [null, "Korte klank + medeklinker → verdubbel: running.", "Geen -e in run.", "Verleden tijd, geen -ing."],
      },
    ],
  },
  {
    title: "Vragen + ontkenningen in continuous",
    explanation: "**Vragen** in present continuous: be-vorm naar voren.\n• *Are you working?*\n• *Is she sleeping?*\n• *What are you doing?*\n\n**Ontkenningen**: not tussen be en V-ing.\n• I am not (= I'm not) sleeping.\n• She is not (= isn't) listening.\n• They are not (= aren't) coming.\n\n**Korte vormen**:\n• I'm = I am\n• you're = you are\n• he's / she's / it's = he is / she is / it is\n• we're / they're = we are / they are\n• isn't = is not\n• aren't = are not\n\n**Voorbeelden**:\n• What's she doing? → She's reading.\n• Are you coming? → No, I'm not.\n• Is it raining? → Yes, it is.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">vragen + ontkenningen</text>
<text x="20" y="55" fill="${COLORS.simple}" font-size="11" font-family="Arial" font-weight="bold">vraag:</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">  Are you working? · Is she sleeping?</text>
<text x="20" y="100" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">ontkenning:</text>
<text x="20" y="118" fill="${COLORS.text}" font-size="11" font-family="Arial">  I'm not / he isn't / they aren't</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">be naar voren = vraag</text>
</svg>`,
    checks: [
      {
        q: "Wat is **goed**?",
        options: ["Are they coming?", "Is they coming?", "Do they coming?", "They are come?"],
        answer: 0,
        wrongHints: [null, "They → are, niet is.", "'Do' is voor present simple, niet continuous.", "Be naar voren bij vraag."],
      },
      {
        q: "Welke ontkenning is **goed**?",
        options: ["She isn't listening.", "She doesn't listening.", "She not listening.", "She doesn't listens."],
        answer: 0,
        wrongHints: [null, "Doesn't is voor simple, niet continuous.", "'Not' alleen volstaat niet.", "Mengt continuous (-ing) met simple-hulpwerkwoord."],
      },
    ],
  },

  // C
  {
    title: "Simple of continuous? — de basisregel",
    explanation: "De grote vraag: **simple of continuous?** Eenvoudige regel:\n\n**Present simple** = altijd / vaak / gewoonte / waar.\n**Present continuous** = nu bezig / tijdelijk / op dit moment.\n\n**Vergelijk**:\n• *I work in Amsterdam.* — Mijn vaste baan, altijd. (simple)\n• *I'm working in Amsterdam this week.* — Tijdelijk, alleen deze week. (continuous)\n\n• *She speaks French.* — Ze kan Frans. (simple, vermogen/feit)\n• *She is speaking French.* — Op dit moment praat ze Frans. (continuous)\n\n• *It rains a lot in November.* — Algemene regel. (simple)\n• *It is raining.* — Nu, regen valt. (continuous)\n\n**Vraag jezelf af**: *gebeurt dit altijd of nu?*",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="120" height="120" rx="10" fill="${COLORS.simple}" opacity="0.15" stroke="${COLORS.simple}" stroke-width="2"/>
<text x="80" y="65" text-anchor="middle" fill="${COLORS.simple}" font-size="13" font-family="Arial" font-weight="bold">SIMPLE</text>
<text x="80" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">altijd</text>
<text x="80" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">vaak</text>
<text x="80" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">waar</text>
<rect x="160" y="40" width="120" height="120" rx="10" fill="${COLORS.cont}" opacity="0.15" stroke="${COLORS.cont}" stroke-width="2"/>
<text x="220" y="65" text-anchor="middle" fill="${COLORS.cont}" font-size="13" font-family="Arial" font-weight="bold">CONTINUOUS</text>
<text x="220" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">nu bezig</text>
<text x="220" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">tijdelijk</text>
<text x="220" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">op dit moment</text>
</svg>`,
    checks: [
      {
        q: "Welke is goed? — *Look! It ___ outside.*",
        options: ["is raining", "rains", "rain", "are raining"],
        answer: 0,
        wrongHints: [null, "'Look!' = nu → continuous. Klopt als je is raining koos.", "Simple = algemeen, niet 'nu'.", "It → is, niet are."],
      },
      {
        q: "Welke is goed? — *My dad ___ in a hospital.* (vaste baan)",
        options: ["works", "is working", "are working", "work"],
        answer: 0,
        wrongHints: [null, "Vaste baan = simple.", "Continuous past niet bij vaste situatie.", "He → works."],
      },
    ],
  },
  {
    title: "Signaalwoorden: kies snel",
    explanation: "Bepaalde **tijdwoorden** geven direct aan welke tijd je nodig hebt:\n\n**Simple-signalen** (regelmaat):\n• always, usually, often, sometimes, never\n• every day / week / year\n• in the morning, on Mondays\n• once a week, twice a year\n\n**Continuous-signalen** (nu):\n• now, right now\n• at the moment, currently\n• today, this week, this morning\n• Look! Listen!\n\n**Voorbeelden**:\n• *I always **drink** coffee in the morning.* (always = simple)\n• *I'm **drinking** coffee right now.* (right now = continuous)\n• *She often **plays** tennis.* (often = simple)\n• *She is **playing** tennis at the moment.* (at the moment = continuous)\n\n**Truc**: zie je een tijdwoord? Sla direct over naar de juiste tijd. Geen tijdwoord → kijk naar betekenis.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">signaalwoorden</text>
<rect x="20" y="40" width="120" height="120" rx="10" fill="${COLORS.simple}" opacity="0.12"/>
<text x="80" y="62" text-anchor="middle" fill="${COLORS.simple}" font-size="11" font-family="Arial" font-weight="bold">SIMPLE</text>
<text x="80" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">always</text>
<text x="80" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">often / never</text>
<text x="80" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">every day</text>
<text x="80" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">on Mondays</text>
<rect x="160" y="40" width="120" height="120" rx="10" fill="${COLORS.cont}" opacity="0.12"/>
<text x="220" y="62" text-anchor="middle" fill="${COLORS.cont}" font-size="11" font-family="Arial" font-weight="bold">CONTINUOUS</text>
<text x="220" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">now / right now</text>
<text x="220" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">at the moment</text>
<text x="220" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">today / this week</text>
<text x="220" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Look! Listen!</text>
</svg>`,
    checks: [
      {
        q: "Welke is goed? — *We ___ in this street since 2010.* (NB: signaalwoord 'usually'?)\n\nKies bij: *Tom usually ___ to school by bike.*",
        options: ["goes", "is going", "go", "going"],
        answer: 0,
        wrongHints: [null, "'Usually' = simple. Tom = he/she/it → -s.", "Continuous past niet bij usually.", "Tom → goes, niet go.", "Geen -ing zonder hulpwerkwoord."],
      },
      {
        q: "Welke is goed? — *Sarah ___ a film at the moment.*",
        options: ["is watching", "watches", "watch", "watching"],
        answer: 0,
        wrongHints: [null, "'At the moment' = continuous.", "Simple past niet bij 'at the moment'.", "Sarah → 3e persoon.", "-ing zonder be werkt niet."],
      },
    ],
  },
  {
    title: "State verbs — geen continuous!",
    explanation: "Een paar werkwoorden gebruik je **bijna nooit** in continuous, ook al gebeurt er iets nu. Dit zijn **state verbs**: ze beschrijven een toestand, geen actie.\n\n**Belangrijke state verbs**:\n• **Voorkeur / mening**: like, love, hate, prefer, want, need.\n• **Denken / weten**: know, understand, believe, remember, forget, mean.\n• **Hebben / bezit**: have *(bezit)*, own, belong.\n• **Zintuigen**: see, hear, smell, taste *(in de betekenis van waarnemen)*.\n• **Andere**: be (meestal), seem, look (lijken).\n\n**Met state verbs gebruik je dus simple**, ook als 't 'nu' is:\n• ❌ *I am knowing the answer.*\n• ✅ *I **know** the answer.*\n• ❌ *She is loving pizza.*\n• ✅ *She **loves** pizza.*\n\n**Uitzondering**: 'have' kan continuous zijn als het géén bezit betekent:\n• I'm having lunch. (ik eet) ✓\n• I am having a car. ❌ (bezit) → I have a car. ✓",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">state verbs — geen continuous</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">like, love, hate, want</text>
<text x="20" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">know, understand, remember</text>
<text x="20" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">have (bezit), own</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">see, hear, smell</text>
<text x="20" y="135" fill="${COLORS.text}" font-size="11" font-family="Arial">be (meestal), seem</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">→ altijd simple gebruiken</text>
</svg>`,
    checks: [
      {
        q: "Welke is **goed**?",
        options: ["I know the answer.", "I am knowing the answer.", "I knows the answer.", "I knowing the answer."],
        answer: 0,
        wrongHints: [null, "Know is state verb — simple, geen continuous.", "I → geen -s.", "-ing zonder be werkt niet, en know is state."],
      },
      {
        q: "Welke is **goed**?",
        options: ["She loves chocolate.", "She is loving chocolate.", "She love chocolate.", "She loving chocolate."],
        answer: 0,
        wrongHints: [null, "Love is state verb — simple.", "She = -s.", "-ing past niet."],
      },
    ],
  },

  // D
  {
    title: "Mix-oefening — alle regels samen",
    explanation: "Tijd om alle regels los te laten op gemengde zinnen. Stappenplan per zin:\n\n1. **Tijdwoord?** Always/often → simple. Now/at the moment → continuous.\n2. **State verb?** know/like/want/be (bezit) → simple, ook bij 'now'.\n3. **Onderwerp?** he/she/it → -s in simple, is in continuous; we/they → are.\n4. **Vraag?** do/does naar voren (simple), be-vorm naar voren (continuous).\n5. **Ontkenning?** don't/doesn't (simple), isn't/aren't (continuous).\n\nVerder: spelling check — verdubbeling, -ies, -es bij -ch/-sh/-x/-o.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">checklist per zin</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Tijdwoord? → simple of continuous</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">2. State verb? → altijd simple</text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Onderwerp + werkwoord-vorm</text>
<text x="20" y="109" fill="${COLORS.text}" font-size="11" font-family="Arial">4. Vraag of ontkenning?</text>
<text x="20" y="127" fill="${COLORS.text}" font-size="11" font-family="Arial">5. Spelling check</text>
</svg>`,
    checks: [
      {
        q: "*My brother ___ tennis every Saturday.*",
        options: ["plays", "is playing", "play", "playing"],
        answer: 0,
        wrongHints: [null, "'Every Saturday' = simple. He = -s.", "Continuous past niet hier.", "He → -s.", "Geen werkwoordvorm."],
      },
      {
        q: "*Listen! The teacher ___ something.*",
        options: ["is saying", "says", "say", "is says"],
        answer: 0,
        wrongHints: [null, "'Listen!' = continuous.", "Simple past niet hier.", "He → is, niet 'say'.", "Geen geldige combinatie."],
      },
      {
        q: "*___ you ___ to school by bus?* (gewoonte)",
        options: ["Do / go", "Are / going", "Does / go", "Do / going"],
        answer: 0,
        wrongHints: [null, "Gewoonte = simple. You → do.", "Continuous past niet bij gewoonte.", "You → do, niet does.", "Geen geldige combinatie."],
      },
    ],
  },
  {
    title: "Eindopdracht — kiezen onder druk",
    explanation: "Slot-toets. Kies de beste vorm in elke zin. Gebruik de 5-stappen-checklist en let op signalen.\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="24" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">eindtoets</text>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.simple}" font-size="13" font-family="Arial">simple = altijd</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.cont}" font-size="13" font-family="Arial">continuous = nu</text>
<text x="150" y="150" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — good luck!</text>
</svg>`,
    checks: [
      {
        q: "*She ___ a great song right now.* (sing)",
        options: ["is singing", "sings", "sing", "singing"],
        answer: 0,
        wrongHints: [null, "'Right now' = continuous.", "Simple past niet bij 'right now'.", "She → -s of is.", "Geen vorm zonder hulpwerkwoord."],
      },
      {
        q: "*We ___ that man.* (know — state verb!)",
        options: ["know", "are knowing", "knows", "knowing"],
        answer: 0,
        wrongHints: [null, "Know = state verb → altijd simple. We → geen -s.", "Know is state verb, geen continuous.", "We → geen -s.", "-ing past niet."],
      },
      {
        q: "*___ your sister ___ this weekend?* (work, tijdelijk)",
        options: ["Is / working", "Does / work", "Do / works", "Are / working"],
        answer: 0,
        wrongHints: [null, "'This weekend' tijdelijk = continuous. She → is.", "Tijdelijk past niet bij simple.", "Vorm klopt niet.", "Sister = is, niet are."],
      },
      {
        q: "*Tom usually ___ his homework after dinner.*",
        options: ["does", "is doing", "do", "doing"],
        answer: 0,
        wrongHints: [null, "'Usually' = simple. Tom = he → -s of -es. Do → does.", "Continuous past niet bij 'usually'.", "He → does.", "Geen geldige vorm."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const presentTensesEngels = {
  id: "present-tenses-engels",
  title: "Present simple & present continuous",
  emoji: "📘",
  level: "klas1-3",
  subject: "engels",
  intro:
    "De twee belangrijkste tegenwoordige tijden in het Engels: present simple (altijd, gewoonte) en present continuous (nu bezig). Met de -s-regel, do/does, am/is/are + V-ing, signaalwoorden en state verbs.",
  triggerKeywords: [
    "present simple", "present continuous",
    "tegenwoordige tijd engels", "english present",
    "do does", "don't doesn't",
    "am is are", "isn't aren't",
    "ing form", "v-ing", "gerund",
    "always usually often", "right now at the moment",
    "state verbs", "know like love hate",
    "tenses engels", "engels tijden",
  ],
  chapters,
  steps,
};

export default presentTensesEngels;
