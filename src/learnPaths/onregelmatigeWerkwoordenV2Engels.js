// Leerpad: Engels — onregelmatige werkwoorden uitbreiding (V2 niveau)
// 9 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: klas 2 onderbouw VO. Bouwt voort op het klas-1-pad
// `onregelmatige-werkwoorden-engels` met meer werkwoorden + patronen.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  v1: "#5d9cec",  // infinitive
  v2: "#ec407a",  // past simple
  v3: "#9be069",  // past participle
};

const stepEmojis = [
  "🔄",   // A1. wat zijn onregelmatige
  "🎯",   // A2. drie vormen
  "🅰️",   // B1. AAA pattern
  "🅱️",   // B2. ABA + AAB pattern
  "🆎",   // B3. ABC pattern
  "📚",   // C1. lijst veelvoorkomend
  "🔍",   // C2. patroon -ought
  "🎤",   // D1. patroon vowel-shift
  "🏆",   // E. eindopdracht
];

const chapters = [
  { letter: "A", title: "Inleiding — wat en waarom?", emoji: "🔄", from: 0, to: 1 },
  { letter: "B", title: "Patronen herkennen", emoji: "🎯", from: 2, to: 4 },
  { letter: "C", title: "Veelvoorkomende werkwoorden", emoji: "📚", from: 5, to: 6 },
  { letter: "D", title: "Klinker-shift werkwoorden", emoji: "🎤", from: 7, to: 7 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 8, to: 8 },
];

// Visuele tabel met de 3 vormen.
function drieVormenSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">De drie vormen</text>

<rect x="20" y="40" width="90" height="80" rx="6" fill="${COLORS.v1}" opacity="0.55"/>
<text x="65" y="62" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial" font-weight="bold">V1</text>
<text x="65" y="80" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">Infinitive</text>
<text x="65" y="93" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">"to ..."</text>
<text x="65" y="110" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">go</text>

<rect x="115" y="40" width="90" height="80" rx="6" fill="${COLORS.v2}" opacity="0.55"/>
<text x="160" y="62" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial" font-weight="bold">V2</text>
<text x="160" y="80" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">Past Simple</text>
<text x="160" y="93" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">"yesterday I..."</text>
<text x="160" y="110" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">went</text>

<rect x="210" y="40" width="90" height="80" rx="6" fill="${COLORS.v3}" opacity="0.55"/>
<text x="255" y="62" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial" font-weight="bold">V3</text>
<text x="255" y="80" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">Past Participle</text>
<text x="255" y="93" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">"have/had ..."</text>
<text x="255" y="110" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial" font-weight="bold">gone</text>

<text x="160" y="148" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">Voorbeeld: I go (V1) — I went (V2) — I have gone (V3)</text>
<text x="160" y="166" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">Onregelmatig = niet gewoon -ed plakken</text>
</svg>`;
}

// Patroon-overzicht (AAA, AAB, ABA, ABC).
function patronenSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">Patroon-types bij onregelmatige werkwoorden</text>

${[
    { label: "AAA", v1: "cut", v2: "cut", v3: "cut", desc: "alle 3 hetzelfde" },
    { label: "ABA", v1: "come", v2: "came", v3: "come", desc: "V1 = V3" },
    { label: "AAB", v1: "make", v2: "made", v3: "made", desc: "V2 = V3" },
    { label: "ABC", v1: "go", v2: "went", v3: "gone", desc: "alle 3 verschillend" },
  ].map((p, i) => {
    const y = 40 + i * 35;
    return `
<rect x="20" y="${y}" width="40" height="28" rx="4" fill="${COLORS.warm}" opacity="0.45"/>
<text x="40" y="${y + 18}" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">${p.label}</text>
<rect x="70" y="${y}" width="50" height="28" rx="4" fill="${COLORS.v1}" opacity="0.45"/>
<text x="95" y="${y + 18}" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">${p.v1}</text>
<rect x="125" y="${y}" width="50" height="28" rx="4" fill="${COLORS.v2}" opacity="0.45"/>
<text x="150" y="${y + 18}" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">${p.v2}</text>
<rect x="180" y="${y}" width="50" height="28" rx="4" fill="${COLORS.v3}" opacity="0.45"/>
<text x="205" y="${y + 18}" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">${p.v3}</text>
<text x="240" y="${y + 18}" fill="${COLORS.text}" font-size="10" font-family="Arial">${p.desc}</text>`;
  }).join("")}
</svg>`;
}

const steps = [
  // ─── A. Inleiding ───────────────
  {
    title: "Wat zijn onregelmatige werkwoorden?",
    explanation: "**Reguliere (regelmatige) werkwoorden** vormen hun verleden tijd door **-ed** toe te voegen:\n• walk → walked → walked\n• play → played → played\n• talk → talked → talked\n\nMakkelijk!\n\n**Maar Engelse hebben ook ~150 onregelmatige werkwoorden** die je gewoon moet leren:\n• go → went → gone (NIET 'goed'!)\n• see → saw → seen\n• eat → ate → eaten\n• be → was/were → been\n\nJe moet ze **uit je hoofd kennen** — er bestaat geen regel die altijd werkt.\n\n**Slecht nieuws**: dit is een leertopic.\n**Goed nieuws**: ze zijn de **meest gebruikte** werkwoorden in het Engels. 80% van wat je hoort/leest gebruikt deze. Dus zodra je ze kent, kun je heel veel.\n\n**Strategie om ze te leren**:\n1. **Patronen herkennen** — sommige werkwoorden volgen dezelfde verandering (bv. sing/sang/sung en ring/rang/rung).\n2. **Lijstjes uit je hoofd** — typisch ~15 werkwoorden tegelijk leren.\n3. **In zinnen oefenen** — niet alleen rijtjes, maar voorbeelden.\n4. **Tegelijk vertalen + horen** — sommige zien je, hoor je in films/series.\n\nIn dit pad bouwen we op het bestaande klas-1-pad voort met meer werkwoorden + slimme patronen.\n\n**Quick check Klas-1 herhaling**: ken je deze 8 al?\n\n| V1 | V2 | V3 | Vertaling |\n|---|---|---|---|\n| be | was/were | been | zijn |\n| have | had | had | hebben |\n| do | did | done | doen |\n| go | went | gone | gaan |\n| see | saw | seen | zien |\n| make | made | made | maken |\n| take | took | taken | nemen |\n| come | came | come | komen |\n\nAls deze nog wennen, doe eerst even het klas-1 pad. Dit pad bouwt erop voort.",
    svg: drieVormenSvg(),
    checks: [
      {
        q: "Wat is de verleden tijd (V2) van **walk** (regelmatig werkwoord)?",
        options: ["walked", "walk", "walken", "wolken"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is V1 (infinitive) — verleden tijd is anders.",
          "Geen Engels — Nederlands.",
          "Geen Engels.",
        ],
      },
      {
        q: "Wat is de juiste V2 van **go**?",
        options: ["went", "goed", "gone", "going"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is geen Engelse vorm.",
          "Dat is V3 (past participle), gebruikt na 'have/had'.",
          "Dat is een -ing vorm, niet verleden tijd.",
        ],
      },
    ],
  },
  {
    title: "De drie vormen — V1, V2, V3",
    explanation: "Bij elk werkwoord onthoud je **drie vormen**:\n\n**V1 — Infinitive (basisvorm)**\n• De vorm die in het woordenboek staat.\n• Gebruikt voor: tegenwoordige tijd, 'to + V1', na hulpwerkwoorden (will, can, must).\n• Voorbeelden: *I go to school. I want to eat. She can swim.*\n\n**V2 — Past Simple (verleden tijd, eenvoudig)**\n• Gebruikt voor: gebeurde in het verleden, vaak met tijdsbepaling.\n• Voorbeelden: *Yesterday I went to school. Last year she ate sushi.*\n• Signaalwoorden: yesterday, last (week, year), ago, in 1999, when I was young.\n\n**V3 — Past Participle (voltooid deelwoord)**\n• Gebruikt na **have / has / had** (perfect-tijden).\n• Voorbeelden: *I have eaten. She has gone home. They had seen it.*\n• Ook: passive voice (be + V3): *The book was written by her.*\n\n**Volledige conjugatie van 'eat' (eten)**:\n• V1: I eat\n• V2: I ate (yesterday)\n• V3: I have eaten (recently / already / before)\n\n**Hoe weet je welke vorm je nodig hebt?**\n• Tegenwoordige tijd → V1 (+ s bij 3e persoon: he/she/it eats)\n• Past simple → V2 (yesterday, last week)\n• Present perfect → have/has + V3 (already, just, ever, never, since)\n• Past perfect → had + V3 (when I came home, she had already left)\n\n**Top tip**: Engels gebruikt vaker present perfect dan Nederlands. Waar wij zeggen *'Ik heb het al gegeten'* (verleden), gebruiken Engelsen *'I have eaten it already'* (present perfect, V3).",
    svg: drieVormenSvg(),
    checks: [
      {
        q: "Wanneer gebruik je **V3** (past participle)?",
        options: [
          "Na have/has/had",
          "Bij tegenwoordige tijd",
          "Als basisvorm",
          "Bij hulpwerkwoorden",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Tegenwoordige tijd = V1 (+ s).",
          "Basisvorm is V1.",
          "Bij will/can/must volgt V1, niet V3.",
        ],
      },
      {
        q: "Welk signaalwoord vraagt om **V2** (past simple)?",
        options: ["yesterday", "already", "since", "ever"],
        answer: 0,
        wrongHints: [
          null,
          "'already' gebruik je vaak met present perfect (V3).",
          "'since' = present perfect (V3): 'I have lived here since 2010'.",
          "'ever' = present perfect: 'Have you ever been to Paris?'",
        ],
      },
    ],
  },

  // ─── B. Patronen ───────────────
  {
    title: "Patroon AAA — alle 3 hetzelfde",
    explanation: "Sommige onregelmatige werkwoorden hebben **alle 3 vormen hetzelfde**! Geen werk om te onthouden, gewoon ongewijzigd.\n\n**Lijst AAA** (V1 = V2 = V3):\n\n| V1 | V2 | V3 | Vertaling |\n|---|---|---|---|\n| cut | cut | cut | snijden |\n| put | put | put | leggen, zetten |\n| set | set | set | zetten, instellen |\n| let | let | let | laten, toestaan |\n| hit | hit | hit | slaan |\n| shut | shut | shut | sluiten |\n| cost | cost | cost | kosten |\n| hurt | hurt | hurt | pijn doen |\n| read* | read* | read* | lezen |\n| spread | spread | spread | verspreiden |\n\n*Let op: 'read' is geschreven hetzelfde, maar uitspraak verandert: V1 'reed' (lange ee), V2/V3 'red' (rood-uitspraak).\n\n**Voorbeeldzinnen**:\n• I **cut** my hair every month. (V1, present)\n• Yesterday I **cut** my finger. (V2, past)\n• I have **cut** myself many times. (V3, perfect)\n\n• Please **shut** the door. (V1)\n• She **shut** the door angrily. (V2)\n• They have **shut** the windows. (V3)\n\n**Trucje**: AAA-werkwoorden zijn vaak korte, simpele woorden die op een **t** of **d** eindigen.",
    svg: patronenSvg(),
    checks: [
      {
        q: "Wat is de V2 van **cut**?",
        options: ["cut", "cutted", "cut(ten)", "cuts"],
        answer: 0,
        wrongHints: [
          null,
          "'cut' is onregelmatig — geen -ed.",
          "Geen Engels.",
          "Dat is 3e persoon present (he cuts).",
        ],
      },
      {
        q: "Welk werkwoord heeft het AAA-patroon?",
        options: ["put", "go", "see", "eat"],
        answer: 0,
        wrongHints: [
          null,
          "go-went-gone is ABC.",
          "see-saw-seen is ABC.",
          "eat-ate-eaten is ABC.",
        ],
      },
    ],
  },
  {
    title: "Patroon ABA + AAB — twee gelijk",
    explanation: "**ABA-patroon** — V1 = V3 (alleen V2 is anders)\n\n| V1 | V2 | V3 | Vertaling |\n|---|---|---|---|\n| come | came | come | komen |\n| become | became | become | worden |\n| run | ran | run | rennen |\n\n**Voorbeelden ABA**:\n• I **come** here every day.\n• Yesterday I **came** here too.\n• I have **come** here a hundred times.\n\n**AAB-patroon** — V1 ≠ V2 = V3\n\nDit is het MEEST VOORKOMENDE patroon. Veel werkwoorden hebben dit:\n\n| V1 | V2 | V3 | Vertaling |\n|---|---|---|---|\n| have | had | had | hebben |\n| make | made | made | maken |\n| say | said | said | zeggen |\n| pay | paid | paid | betalen |\n| tell | told | told | vertellen |\n| sell | sold | sold | verkopen |\n| think | thought | thought | denken |\n| bring | brought | brought | brengen |\n| buy | bought | bought | kopen |\n| catch | caught | caught | vangen |\n| teach | taught | taught | leren (aan iemand) |\n| find | found | found | vinden |\n| feel | felt | felt | voelen |\n| keep | kept | kept | houden |\n| sleep | slept | slept | slapen |\n| meet | met | met | ontmoeten |\n| sit | sat | sat | zitten |\n| stand | stood | stood | staan |\n| lose | lost | lost | verliezen |\n| send | sent | sent | sturen |\n| spend | spent | spent | uitgeven, besteden |\n\n**Voorbeelden AAB**:\n• I **buy** food. (V1)\n• Yesterday I **bought** food. (V2)\n• I have **bought** food. (V3)\n\n**Patroon-tip**: heel veel AAB-werkwoorden hebben **-ought** of **-aught** in V2/V3 (zie volgende stap voor uitgebreider patroon).\n\n**AAB**-werkwoorden zijn **makkelijker** dan ABC omdat je maar 2 vormen hoeft te onthouden.",
    svg: patronenSvg(),
    checks: [
      {
        q: "Wat is V3 van **buy**?",
        options: ["bought", "buyed", "buy", "buying"],
        answer: 0,
        wrongHints: [
          null,
          "buy is onregelmatig — geen -ed.",
          "V3 ≠ V1 hier.",
          "Dat is -ing vorm, niet V3.",
        ],
      },
      {
        q: "Welk werkwoord heeft ABA-patroon (V1 = V3)?",
        options: ["come", "make", "go", "eat"],
        answer: 0,
        wrongHints: [
          null,
          "make-made-made is AAB.",
          "go-went-gone is ABC (alle 3 verschillend).",
          "eat-ate-eaten is ABC.",
        ],
      },
      {
        q: "Wat zijn de drie vormen van **think**?",
        options: [
          "think — thought — thought",
          "think — thinked — thinked",
          "think — thank — thunk",
          "think — thought — thunk",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Onregelmatig — geen -ed.",
          "Niet correct, V2 = thought.",
          "V3 is hetzelfde als V2: thought.",
        ],
      },
    ],
  },
  {
    title: "Patroon ABC — alle drie verschillend (lastigste)",
    explanation: "**ABC-patroon** — alle drie vormen zijn anders. Lastigste te onthouden.\n\n**De belangrijkste lijst**:\n\n| V1 | V2 | V3 | Vertaling |\n|---|---|---|---|\n| be | was/were | been | zijn |\n| do | did | done | doen |\n| go | went | gone | gaan |\n| see | saw | seen | zien |\n| eat | ate | eaten | eten |\n| drink | drank | drunk | drinken |\n| swim | swam | swum | zwemmen |\n| sing | sang | sung | zingen |\n| ring | rang | rung | bellen, klinken |\n| begin | began | begun | beginnen |\n| run | ran | run | rennen *(eigenlijk ABA)* |\n| give | gave | given | geven |\n| take | took | taken | nemen |\n| break | broke | broken | breken |\n| speak | spoke | spoken | spreken |\n| steal | stole | stolen | stelen |\n| choose | chose | chosen | kiezen |\n| forget | forgot | forgotten | vergeten |\n| get | got | got/gotten | krijgen |\n| write | wrote | written | schrijven |\n| ride | rode | ridden | rijden (paard, fiets) |\n| drive | drove | driven | rijden (auto) |\n| fall | fell | fallen | vallen |\n| know | knew | known | weten/kennen |\n| grow | grew | grown | groeien |\n| throw | threw | thrown | gooien |\n| show | showed | shown | tonen |\n| fly | flew | flown | vliegen |\n| draw | drew | drawn | tekenen |\n| wear | wore | worn | dragen (kleding) |\n| tear | tore | torn | scheuren |\n| sweat | sweat | sweat | zweten *(of regelmatig)* |\n\n**Voorbeelden ABC**:\n• I **eat** breakfast. (V1)\n• Yesterday I **ate** breakfast. (V2)\n• I have **eaten** breakfast. (V3)\n\n• They **drink** water. \n• They **drank** water yesterday.\n• They have **drunk** water.\n\n**Pro tip**: bij ABC-werkwoorden hoor je vaak **klinker-shift**: i-a-u of e-o-o (zie volgende stap voor patronen).",
    svg: drieVormenSvg(),
    checks: [
      {
        q: "Wat is V3 van **eat**?",
        options: ["eaten", "ate", "eat", "eated"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is V2 (yesterday I ate).",
          "Dat is V1.",
          "Eten is onregelmatig.",
        ],
      },
      {
        q: "Wat zijn de 3 vormen van **drink**?",
        options: [
          "drink — drank — drunk",
          "drink — drinked — drunk",
          "drink — drunk — drank",
          "drink — drank — drinken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Onregelmatig — geen -ed.",
          "Volgorde fout — eerst V2 (drank), dan V3 (drunk).",
          "Geen Engels.",
        ],
      },
    ],
  },

  // ─── C. Veelvoorkomend ───────────────
  {
    title: "Top 30 — meest gebruikte onregelmatige werkwoorden",
    explanation: "Hier zijn de **30 meest voorkomende** onregelmatige werkwoorden in het Engels. Ken je deze, dan kun je 80% van het dagelijks Engels begrijpen.\n\n| V1 | V2 | V3 | Vertaling |\n|---|---|---|---|\n| be | was/were | been | zijn |\n| have | had | had | hebben |\n| do | did | done | doen |\n| say | said | said | zeggen |\n| go | went | gone | gaan |\n| get | got | got | krijgen |\n| make | made | made | maken |\n| know | knew | known | weten |\n| think | thought | thought | denken |\n| take | took | taken | nemen |\n| see | saw | seen | zien |\n| come | came | come | komen |\n| want* | wanted | wanted | willen |\n| look* | looked | looked | kijken |\n| use* | used | used | gebruiken |\n| find | found | found | vinden |\n| give | gave | given | geven |\n| tell | told | told | vertellen |\n| become | became | become | worden |\n| feel | felt | felt | voelen |\n| leave | left | left | weggaan, achterlaten |\n| put | put | put | leggen |\n| mean | meant | meant | betekenen, bedoelen |\n| keep | kept | kept | houden |\n| let | let | let | laten |\n| begin | began | begun | beginnen |\n| seem* | seemed | seemed | lijken |\n| help* | helped | helped | helpen |\n| show | showed | shown | tonen |\n| hear | heard | heard | horen |\n\n*regelmatig (gemarkeerd) — bij wijze van uitzondering: deze zijn regelmatig maar staan in top frequency.\n\n**Tip om te leren**:\n1. Pak elke dag **5 werkwoorden**.\n2. Maak voor elk een **eigen voorbeeldzin** in alle 3 vormen.\n3. Lees ze **hardop** — gehoor onthoudt beter dan ogen.\n4. Test jezelf de volgende dag.\n\nIn 6 dagen ken je deze top 30.",
    svg: drieVormenSvg(),
    checks: [
      {
        q: "Wat is V2 van **leave**?",
        options: ["left", "leaved", "lefted", "leaving"],
        answer: 0,
        wrongHints: [
          null,
          "Onregelmatig — geen -ed.",
          "Geen Engels.",
          "Dat is -ing vorm.",
        ],
      },
      {
        q: "Wat is V3 van **hear**?",
        options: ["heard", "heared", "hear", "hearing"],
        answer: 0,
        wrongHints: [
          null,
          "Onregelmatig — geen -ed.",
          "Dat is V1.",
          "Dat is -ing vorm.",
        ],
      },
    ],
  },
  {
    title: "Patroon -ought / -aught (think → thought)",
    explanation: "Een **mooi patroon**: als je dit één keer hebt gezien, herken je het overal.\n\nVeel werkwoorden eindigen in V2/V3 op **-ought** of **-aught**:\n\n**-ought groep**:\n\n| V1 | V2 | V3 |\n|---|---|---|\n| think | thought | thought |\n| bring | brought | brought |\n| buy | bought | bought |\n| fight | fought | fought |\n| seek | sought | sought |\n\n**-aught groep**:\n\n| V1 | V2 | V3 |\n|---|---|---|\n| catch | caught | caught |\n| teach | taught | taught |\n\n**Geheugentruc**: deze werkwoorden hebben allemaal het patroon AAB (V2 = V3 = '-ought' of '-aught').\n\n**Uitspraak**:\n• -ought: klinkt als 'oht' (vergelijkbaar met 'boat' zonder de t).\n• -aught: klinkt hetzelfde — 'oht'.\n\nIn beide gevallen is de 'gh' **stom** (niet uitgesproken).\n\n**Voorbeelden**:\n• I **think** he is right. → I **thought** he was right.\n• They **buy** new shoes. → They **bought** new shoes.\n• She **catches** fish. → She **caught** a big fish.\n• He **teaches** math. → He **taught** us math.\n\n**Andere klinker-patronen**:\n\n*-eep → -ept*\n• keep → kept\n• sleep → slept\n• weep → wept\n\n*-eet → -et*\n• meet → met\n\n*-end → -ent*\n• send → sent\n• spend → spent\n• lend → lent\n\nAls je deze patronen herkent, hoef je niet elk werkwoord apart te onthouden.",
    svg: patronenSvg(),
    checks: [
      {
        q: "Wat is V2 van **teach**?",
        options: ["taught", "teached", "teach", "teaching"],
        answer: 0,
        wrongHints: [
          null,
          "Geen -ed — onregelmatig.",
          "Dat is V1.",
          "Dat is -ing vorm.",
        ],
      },
      {
        q: "Welk werkwoord past **niet** bij het -ought/aught patroon?",
        options: [
          "swim (drinkt-patroon, niet -ought)",
          "think",
          "buy",
          "catch",
        ],
        answer: 0,
        wrongHints: [
          null,
          "think → thought, klopt -ought patroon.",
          "buy → bought, klopt -ought patroon.",
          "catch → caught, klopt -aught patroon.",
        ],
      },
    ],
  },

  // ─── D. Klinker-shift ───────────────
  {
    title: "Klinker-shift werkwoorden (sing → sang → sung)",
    explanation: "Sommige onregelmatige werkwoorden volgen een **klinker-shift** patroon: de medeklinkers blijven hetzelfde, alleen de klinker verandert.\n\n**Patroon i → a → u**:\n\n| V1 | V2 | V3 |\n|---|---|---|\n| sing | sang | sung |\n| ring | rang | rung |\n| swim | swam | swum |\n| drink | drank | drunk |\n| sink | sank | sunk |\n| begin | began | begun |\n| run | ran | run |\n| spring | sprang | sprung |\n\n*Geheugentruc: '**I-A-U**' (zoals 'ik-aa-uu')*\n\n**Patroon i → o → o** (V2 = V3):\n\n| V1 | V2 | V3 |\n|---|---|---|\n| win | won | won |\n| spin | spun | spun |\n| dig | dug | dug |\n| stick | stuck | stuck |\n| swing | swung | swung |\n| sting | stung | stung |\n| string | strung | strung |\n| hang | hung | hung |\n\n**Patroon ee → e → e**:\n\n| V1 | V2 | V3 |\n|---|---|---|\n| feed | fed | fed |\n| breed | bred | bred |\n| bleed | bled | bled |\n| meet | met | met |\n| keep | kept | kept |\n| sleep | slept | slept |\n\n**Patroon ow → ew → own**:\n\n| V1 | V2 | V3 |\n|---|---|---|\n| know | knew | known |\n| grow | grew | grown |\n| throw | threw | thrown |\n| blow | blew | blown |\n| fly | flew | flown (ja, geen 'ow' in V1 maar volgt zelfde patroon) |\n| draw | drew | drawn |\n\n**Patroon i → o → en (driemaal verschillend)**:\n\n| V1 | V2 | V3 |\n|---|---|---|\n| ride | rode | ridden |\n| drive | drove | driven |\n| write | wrote | written |\n| rise | rose | risen |\n| forget | forgot | forgotten |\n| break | broke | broken |\n| speak | spoke | spoken |\n| steal | stole | stolen |\n| choose | chose | chosen |\n\n**Strategie voor leren**: groepeer werkwoorden die hetzelfde patroon volgen. Die ken je dan in batch.",
    svg: drieVormenSvg(),
    checks: [
      {
        q: "Wat zijn de 3 vormen van **swim**?",
        options: [
          "swim — swam — swum",
          "swim — swimmed — swimmed",
          "swim — swom — swam",
          "swim — swam — swam",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Onregelmatig — geen -ed.",
          "Volgorde fout: i-a-u patroon.",
          "V3 ≠ V2 hier.",
        ],
      },
      {
        q: "Welk werkwoord volgt het **i → o → o** patroon?",
        options: ["win", "sing", "drink", "ride"],
        answer: 0,
        wrongHints: [
          null,
          "sing-sang-sung is i → a → u.",
          "drink-drank-drunk is i → a → u.",
          "ride-rode-ridden is verschillend i-o-i.",
        ],
      },
      {
        q: "Wat is V3 van **write**?",
        options: ["written", "wrote", "writed", "writting"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is V2.",
          "Onregelmatig — geen -ed.",
          "Dat is geen vorm — gewoon -ing.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ───────────────
  {
    title: "Eindopdracht — kies de juiste vorm",
    explanation: "Tijd om alles toe te passen! Bij elke zin: welke vorm hoort erbij?\n\n**Snelle check**:\n\n| Patroon | V1 | V2 | V3 |\n|---|---|---|---|\n| AAA | cut | cut | cut |\n| ABA | come | came | come |\n| AAB | think | thought | thought |\n| ABC | go | went | gone |\n| i-a-u | swim | swam | swum |\n| i-o-o | win | won | won |\n\n**Wanneer welke vorm?**\n• V1: present (I/you/we/they go), of na will/can/must.\n• V1 + 's': 3e persoon present (he/she/it goes).\n• V2: past simple (yesterday I went).\n• V3: na have/has/had (I have gone).\n• V3: ook in passive voice (it was made).\n\n**Veel succes!**",
    svg: drieVormenSvg(),
    checks: [
      {
        q: "Yesterday I _____ to the cinema. (go)",
        options: ["went", "go", "gone", "going"],
        answer: 0,
        wrongHints: [
          null,
          "'Yesterday' = past simple = V2.",
          "V3 vereist have/has/had ervoor.",
          "Dat is -ing vorm, hier hebben we past simple nodig.",
        ],
      },
      {
        q: "I have _____ that book three times. (read)",
        options: ["read", "readed", "red", "reading"],
        answer: 0,
        wrongHints: [
          null,
          "Onregelmatig — geen -ed. V3 = read (uitgesproken als 'red').",
          "Geen Engelse spelling — wel zo uitgesproken.",
          "-ing vorm past hier niet (geen continuous).",
        ],
      },
      {
        q: "She _____ her keys yesterday. (lose)",
        options: ["lost", "loses", "loose", "losed"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is present tense (3e persoon).",
          "'loose' is een ander woord (= los).",
          "Onregelmatig — geen -ed.",
        ],
      },
      {
        q: "Have you _____ the new movie? (see)",
        options: ["seen", "saw", "see", "seeing"],
        answer: 0,
        wrongHints: [
          null,
          "Past simple V2 — maar 'have' vereist V3.",
          "V1 — zonder hulpwerkwoord.",
          "-ing vorm voor 'be seeing'.",
        ],
      },
      {
        q: "He _____ his arm last week. (break)",
        options: ["broke", "broken", "breaked", "breaks"],
        answer: 0,
        wrongHints: [
          null,
          "V3 — vereist have/had.",
          "Onregelmatig — geen -ed.",
          "Dat is present.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const onregelmatigeWerkwoordenV2Engels = {
  id: "onregelmatige-werkwoorden-v2-engels",
  title: "Engels — onregelmatige werkwoorden uitbreiding",
  emoji: "📖",
  level: "klas2",
  subject: "engels",
  intro:
    "Onregelmatige werkwoorden in het Engels — uitbreiding op het klas-1-pad. Patronen herkennen (AAA, ABA, AAB, ABC + klinker-shifts), de 30 meest voorkomende werkwoorden + slimme groepen zoals -ought/-aught en de i-a-u shift. Met voorbeeldzinnen en eindopdracht waarbij je de juiste vorm kiest in zinnen.",
  triggerKeywords: [
    "onregelmatige werkwoorden", "irregular verbs",
    "engels werkwoorden",
    "v1 v2 v3", "past simple", "past participle", "infinitive",
    "present perfect", "past perfect",
    "hulpwerkwoord have has had",
    "go went gone", "eat ate eaten", "drink drank drunk",
    "think thought", "buy bought", "catch caught",
    "swim swam swum", "sing sang sung",
    "klinker shift", "vowel shift",
    "regelmatig vs onregelmatig",
  ],
  chapters,
  steps,
};

export default onregelmatigeWerkwoordenV2Engels;
