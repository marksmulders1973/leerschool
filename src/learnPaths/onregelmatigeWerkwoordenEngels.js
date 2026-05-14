// Leerpad: Onregelmatige werkwoorden Engels (irregular verbs)
// 12 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: onderbouw VO (klas 1-3) — basis Engels.
// Aanpak: 3 vormen V1/V2/V3, gegroepeerd per klankpatroon.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  goodSoft: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  altSoft: "#ffab91",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  v1: "#80deea",
  v2: "#ffab91",
  v3: "#ce93d8",
};

const stepEmojis = [
  "📖", "🔤",                        // A. Wat & welke vormen
  "🧭",                              // A. Wanneer welke vorm
  "🟰", "🔄", "🔁",                  // B. Patronen 1-3
  "🎵", "✍️",                        // B. Patronen 4-5
  "⭐",                              // C. Must-know (be/have/do/go)
  "🧪", "🧩",                        // D. Toepassen
  "🏆",                              // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat zijn onregelmatige werkwoorden?", emoji: "📖", from: 0, to: 2 },
  { letter: "B", title: "Klankpatronen — groepen leren", emoji: "🎵", from: 3, to: 7 },
  { letter: "C", title: "Must-knows: be, have, do, go", emoji: "⭐", from: 8, to: 8 },
  { letter: "D", title: "Toepassen in zinnen", emoji: "🧪", from: 9, to: 10 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 11, to: 11 },
];

// Hulp-SVG: drie kolommen V1/V2/V3 met rijen werkwoorden.
function tableSvg(rows, opts = {}) {
  const headers = opts.headers || ["V1 — infinitive", "V2 — past simple", "V3 — past participle"];
  const colors = opts.colors || [COLORS.v1, COLORS.v2, COLORS.v3];
  const rowH = 22;
  const startY = 36;
  const totalH = startY + rows.length * rowH + 14;
  const colX = [20, 110, 200];
  const colW = 80;
  return `<svg viewBox="0 0 300 ${totalH}">
  ${headers.map((h, i) => `<rect x="${colX[i]}" y="10" width="${colW}" height="20" rx="4" fill="${colors[i]}" opacity="0.25"/>
  <text x="${colX[i] + colW / 2}" y="24" text-anchor="middle" fill="${colors[i]}" font-size="10" font-family="Arial" font-weight="bold">${h}</text>`).join("\n")}
  ${rows.map((r, ri) => {
    const y = startY + ri * rowH;
    return r.map((cell, ci) => `<text x="${colX[ci] + colW / 2}" y="${y + 14}" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">${cell}</text>`).join("\n");
  }).join("\n")}
  </svg>`;
}

const steps = [
  // ─── A. Wat zijn onregelmatige werkwoorden? ───────────────
  {
    title: "Wat is een onregelmatig werkwoord?",
    explanation: "Een **regelmatig** werkwoord krijgt in de verleden tijd gewoon **-ed**:\n• work → work**ed**\n• play → play**ed**\n• watch → watch**ed**\n\nMaar bij **onregelmatige** werkwoorden (irregular verbs) verandert het woord op een andere manier:\n• go → **went**\n• see → **saw**\n• eat → **ate**\n\nJe kunt deze vormen niet uitrekenen — je moet ze **uit je hoofd leren**. Het goede nieuws: er zijn maar zo'n 70-100 echt belangrijke onregelmatige werkwoorden, en ze zitten in een paar **klankgroepen** waardoor je ze in stukjes kunt leren.\n\nIn dit leerpad gaan we ze stap-voor-stap herkennen en oefenen.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">regelmatig vs onregelmatig</text>
<rect x="20" y="40" width="120" height="120" rx="10" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="80" y="60" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">regelmatig</text>
<text x="80" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">work → worked</text>
<text x="80" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">play → played</text>
<text x="80" y="118" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">watch → watched</text>
<text x="80" y="146" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">+ -ed</text>
<rect x="160" y="40" width="120" height="120" rx="10" fill="rgba(255,112,67,0.10)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="220" y="60" text-anchor="middle" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">onregelmatig</text>
<text x="220" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">go → went</text>
<text x="220" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">see → saw</text>
<text x="220" y="118" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">eat → ate</text>
<text x="220" y="146" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">uit je hoofd leren</text>
</svg>`,
    checks: [
      {
        q: "Welk werkwoord is **onregelmatig**?",
        options: ["go", "play", "watch", "work"],
        answer: 0,
        wrongHints: [
          null,
          "Play wordt gewoon played in de past simple. Dat is regelmatig.",
          "Watch → watched. Dat past in het regelmatige -ed-rijtje.",
          "Work → worked, helemaal volgens het rijtje. Welke verandert van vorm op een rare manier?",
        ],
        uitlegPad: {
          stappen: [{ titel: "Go = onregelmatig", tekst: "go → went → gone. Geen -ed, woord verandert helemaal." }],
          woorden: [{ woord: "onregelmatig", uitleg: "irregular, geen -ed" }],
          theorie: "Regelmatig krijgt -ed. Onregelmatig verandert.",
          voorbeelden: [{ type: "voorbeeld", tekst: "go-went-gone, eat-ate-eaten" }],
          basiskennis: [{ onderwerp: "uit hoofd", uitleg: "lijst leren" }],
          niveaus: { basis: "go.", simpeler: "Go verandert vreemd.", nogSimpeler: "Go verandert vreemd. → go." },
        },
      },
      {
        q: "Wat is de past simple van **work**?",
        options: ["worked", "wored", "wrought", "worken"],
        answer: 0,
        wrongHints: [
          null,
          "De stam blijft heel — alleen -ed erachter.",
          "Bestaat als oud-Engels woord, maar niet de normale vorm.",
          "Geen Engelse vervoeging — het werkt anders.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Work = regelmatig", tekst: "work + ed = worked." }],
          woorden: [{ woord: "-ed", uitleg: "standaardvorm verleden tijd" }],
          theorie: "Regelmatige werkwoorden: basis + -ed.",
          voorbeelden: [{ type: "voorbeeld", tekst: "work-worked, play-played" }],
          basiskennis: [{ onderwerp: "geen klinkerwissel", uitleg: "blijft 'work'" }],
          niveaus: { basis: "worked.", simpeler: "Work + ed.", nogSimpeler: "worked." },
        },
      },
    ],
  },
  {
    title: "De drie vormen: V1, V2 en V3",
    explanation: "Ieder werkwoord heeft drie hoofdvormen. Je leert ze meestal samen, in een rijtje:\n\n| | naam | gebruikt voor |\n|---|---|---|\n| **V1** | infinitive (basisvorm) | tegenwoordige tijd, after to/will/can |\n| **V2** | past simple | gewone verleden tijd |\n| **V3** | past participle | voltooide tijd (have / has / had) |\n\n**Voorbeeld: go**\n• V1 = **go** — *I go to school.*\n• V2 = **went** — *Yesterday I went to school.*\n• V3 = **gone** — *I have gone to school many times.*\n\nDoor V1/V2/V3 als rijtje te leren, weet je meteen welke vorm je nodig hebt zodra je weet welke tijd je wilt schrijven.",
    svg: tableSvg([
      ["go", "went", "gone"],
      ["see", "saw", "seen"],
      ["eat", "ate", "eaten"],
      ["take", "took", "taken"],
    ]),
    checks: [
      {
        q: "Welke vorm gebruik je na **have / has / had**?",
        options: ["V3 (past participle)", "V1 (infinitive)", "V2 (past simple)", "Maakt niet uit"],
        answer: 0,
        wrongHints: [
          null,
          "V1 komt na to/will/can. Niet na have.",
          "V2 staat los, zonder hulpwerkwoord. Welke vorm hoort *bij* have?",
          "Het maakt zeker wel uit — anders zijn de drie vormen overbodig.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Na have/has/had = V3", tekst: "V3 = past participle, gebruikt in perfect tijden." }],
          woorden: [{ woord: "V3", uitleg: "past participle" }],
          theorie: "have + V3 = present perfect.",
          voorbeelden: [{ type: "voorbeeld", tekst: "I have eaten, she has gone" }],
          basiskennis: [{ onderwerp: "drie vormen", uitleg: "V1=basis, V2=verleden, V3=na have" }],
          niveaus: { basis: "V3.", simpeler: "Na have = V3.", nogSimpeler: "Na have = V3. → V3." },
        },
      },
      {
        q: "Wat is V2 van **see**?",
        options: ["saw", "seen", "seed", "sawn"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is V3 (past participle). V2 is de gewone past simple.",
          "Bestaat niet — see is onregelmatig, krijgt geen -ed.",
          "Niet de normale vorm. Denk aan *Yesterday I ___ a film.*",
        ],
        uitlegPad: {
          stappen: [{ titel: "see → saw → seen", tekst: "V2 van see = saw." }],
          woorden: [{ woord: "see-saw-seen", uitleg: "1-2-3 rijtje" }],
          theorie: "V2 voor past simple, V3 voor perfect.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Yesterday I saw a film" }],
          basiskennis: [{ onderwerp: "onthouden", uitleg: "see-saw-seen rhymes" }],
          niveaus: { basis: "saw.", simpeler: "V2 = saw.", nogSimpeler: "V2 = saw. → saw." },
        },
      },
    ],
  },
  {
    title: "Wanneer welke vorm? — V1, V2, V3 in zinnen",
    explanation: "Korte stelregel:\n\n• **V1** = NU of ALGEMEEN, of na *to / will / can / must / would*.\n  → *I **eat** breakfast.* — *I will **eat** later.* — *to **eat***\n\n• **V2** = TOEN (past simple, één moment in het verleden).\n  → *Yesterday I **ate** an apple.* — *We **saw** a film last night.*\n\n• **V3** = NA *have / has / had* (perfect tenses) of in passieve zinnen.\n  → *I have **eaten** already.* — *She has **gone** home.* — *The book was **written** in 1850.*\n\n**Truc**: vraag jezelf af welk hulpwerkwoord ervoor staat:\n– geen hulpwerkwoord + verleden? → V2.\n– *have/has/had* ervoor? → V3.\n– *to/will/can*? → V1.",
    svg: `<svg viewBox="0 0 300 200">
<text x="20" y="28" fill="${COLORS.v1}" font-size="13" font-family="Arial" font-weight="bold">V1: I eat breakfast every day.</text>
<text x="40" y="46" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">→ algemeen / nu</text>
<line x1="20" y1="58" x2="280" y2="58" stroke="${COLORS.muted}" stroke-width="0.5" stroke-dasharray="3"/>
<text x="20" y="80" fill="${COLORS.v2}" font-size="13" font-family="Arial" font-weight="bold">V2: Yesterday I ate an apple.</text>
<text x="40" y="98" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">→ toen, één moment in 't verleden</text>
<line x1="20" y1="110" x2="280" y2="110" stroke="${COLORS.muted}" stroke-width="0.5" stroke-dasharray="3"/>
<text x="20" y="132" fill="${COLORS.v3}" font-size="13" font-family="Arial" font-weight="bold">V3: I have eaten already.</text>
<text x="40" y="150" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">→ na have/has/had</text>
<text x="150" y="184" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">kijk altijd naar het hulpwerkwoord</text>
</svg>`,
    checks: [
      {
        q: "Welke vorm hoort hier? — *Last week we ___ to Paris.* (go)",
        options: ["went", "go", "gone", "goes"],
        answer: 0,
        wrongHints: [
          null,
          "V1 — maar 'last week' is verleden tijd. Welke vorm gebruik je dan?",
          "V3, dat hoort bij have/has/had. Hier staat geen hulpwerkwoord.",
          "Dat is voor he/she/it in het heden. Hier gaat het om de verleden tijd.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Last week = past simple", tekst: "go → V2 = went. We went to Paris." }],
          woorden: [{ woord: "tijdwoord", uitleg: "last week = verleden" }],
          theorie: "Past simple signaalwoord → V2.",
          voorbeelden: [{ type: "voorbeeld", tekst: "yesterday, last week, in 2010, ago" }],
          basiskennis: [{ onderwerp: "go-went-gone", uitleg: "V2 = went" }],
          niveaus: { basis: "went.", simpeler: "Last week = V2.", nogSimpeler: "went." },
        },
      },
      {
        q: "Welke vorm hoort hier? — *She has ___ her keys.* (lose)",
        options: ["lost", "lose", "losed", "loses"],
        answer: 0,
        wrongHints: [
          null,
          "V1 — maar er staat 'has' ervoor. Dan hoort V3.",
          "Lose is onregelmatig — geen -ed erachter.",
          "Dat is V1 voor he/she/it in het heden. Maar 'has' eist V3.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Has + V3", tekst: "lose → V3 = lost. She has lost her keys." }],
          woorden: [{ woord: "lose-lost-lost", uitleg: "V2 én V3 = lost" }],
          theorie: "Na has = altijd V3.",
          voorbeelden: [{ type: "voorbeeld", tekst: "has lost, has eaten, has gone" }],
          basiskennis: [{ onderwerp: "perfect", uitleg: "have/has + V3" }],
          niveaus: { basis: "lost.", simpeler: "Has + V3.", nogSimpeler: "lost." },
        },
      },
    ],
  },

  // ─── B. Klankpatronen — groepen leren ───────────────
  {
    title: "Groep 1 — Alle drie de vormen gelijk",
    explanation: "De makkelijkste groep: **V1 = V2 = V3**. Alle drie de vormen zijn precies hetzelfde, je hoeft niets te veranderen.\n\nKern-werkwoorden van deze groep:\n• cut – cut – cut *(snijden)*\n• put – put – put *(zetten)*\n• hit – hit – hit *(slaan / raken)*\n• let – let – let *(laten)*\n• shut – shut – shut *(sluiten)*\n• cost – cost – cost *(kosten)*\n• hurt – hurt – hurt *(pijn doen)*\n• set – set – set *(zetten / instellen)*\n• read – read – read *(lezen — schrijfwijze gelijk, uitspraak verandert: \"reed\" → \"red\")*\n\n**Truc**: deze werkwoorden hebben meestal een **korte klank** en eindigen op een -t of -d. Eén keer leren = klaar voor alle tijden.",
    svg: tableSvg([
      ["cut", "cut", "cut"],
      ["put", "put", "put"],
      ["hit", "hit", "hit"],
      ["let", "let", "let"],
      ["cost", "cost", "cost"],
      ["read", "read", "read"],
    ]),
    checks: [
      {
        q: "Wat is de past simple van **put**?",
        options: ["put", "putted", "pat", "putt"],
        answer: 0,
        wrongHints: [
          null,
          "Put is onregelmatig — geen -ed erachter.",
          "Niet bestaand werkwoord.",
          "Geen Engelse vervoeging.",
        ],
        uitlegPad: {
          stappen: [{ titel: "put-put-put", tekst: "Put is groep 1: alle 3 vormen gelijk." }],
          woorden: [{ woord: "groep 1", uitleg: "V1 = V2 = V3" }],
          theorie: "Korte werkwoorden op -t/-d: vaak gelijk.",
          voorbeelden: [{ type: "voorbeeld", tekst: "cut, put, hit, let, cost, hurt" }],
          basiskennis: [{ onderwerp: "makkelijk", uitleg: "geen verandering" }],
          niveaus: { basis: "put.", simpeler: "Blijft put.", nogSimpeler: "Blijft put. → put." },
        },
      },
      {
        q: "Welke zin is **goed**?",
        options: [
          "Yesterday she cut her finger.",
          "Yesterday she cutted her finger.",
          "Yesterday she cuts her finger.",
          "Yesterday she has cut her finger.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Cut is onregelmatig — V2 is gewoon 'cut', geen -ed.",
          "Dat is V1 voor she — maar 'yesterday' eist verleden tijd.",
          "Met 'has' kan, maar dan past 'yesterday' niet — present perfect en een vast tijdstip botsen.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Yesterday cut", tekst: "Yesterday she cut her finger. V2 = cut (geen -ed)." }],
          woorden: [{ woord: "geen cutted", uitleg: "cut blijft cut" }],
          theorie: "Onregelmatige V2 + tijdwoord verleden.",
          voorbeelden: [{ type: "voorbeeld", tekst: "She cut, He hit, They put" }],
          basiskennis: [{ onderwerp: "tijdwoord", uitleg: "yesterday signaleert V2" }],
          niveaus: { basis: "cut.", simpeler: "Yesterday + cut.", nogSimpeler: "Yesterday + cut. → cut." },
        },
      },
    ],
  },
  {
    title: "Groep 2 — V1, dan V2 = V3 (vaak met -ought / -aught)",
    explanation: "Patroon: **V1 verandert, V2 = V3**. Heel vaak zit er een -ought of -aught in.\n\nDe -ought groep:\n• buy – **bought** – bought *(kopen)*\n• bring – **brought** – brought *(brengen)*\n• think – **thought** – thought *(denken)*\n• fight – **fought** – fought *(vechten)*\n• seek – **sought** – sought *(zoeken)*\n\nDe -aught groep:\n• catch – **caught** – caught *(vangen)*\n• teach – **taught** – taught *(lesgeven)*\n\nNog wat handige A-B-B werkwoorden:\n• tell – told – told\n• sell – sold – sold\n• find – found – found\n• keep – kept – kept\n• sleep – slept – slept\n• feel – felt – felt\n• leave – left – left\n• meet – met – met\n• lose – lost – lost\n• say – said – said\n\n**Truc**: leer V2 en V3 als één blok — ze zijn hetzelfde.",
    svg: tableSvg([
      ["buy", "bought", "bought"],
      ["bring", "brought", "brought"],
      ["think", "thought", "thought"],
      ["catch", "caught", "caught"],
      ["teach", "taught", "taught"],
      ["find", "found", "found"],
    ]),
    checks: [
      {
        q: "Wat is V2 van **think**?",
        options: ["thought", "thinked", "thaught", "thunk"],
        answer: 0,
        wrongHints: [
          null,
          "Think is onregelmatig, geen -ed.",
          "Bijna goed — maar de spelling is -ought, niet -aught (anders dan teach/catch).",
          "Spreektaal/grappig, maar niet de standaardvorm.",
        ],
        uitlegPad: {
          stappen: [{ titel: "think → thought", tekst: "Think-thought-thought (V2=V3 met -ought)." }],
          woorden: [{ woord: "-ought groep", uitleg: "bought, brought, thought, fought" }],
          theorie: "Veel werkwoorden met V2=V3 = -ought.",
          voorbeelden: [{ type: "voorbeeld", tekst: "buy-bought, bring-brought, think-thought" }],
          basiskennis: [{ onderwerp: "spelling", uitleg: "-ought (niet -aught)" }],
          niveaus: { basis: "thought.", simpeler: "Think → thought.", nogSimpeler: "thought." },
        },
      },
      {
        q: "Welke zin staat goed?",
        options: [
          "She has taught English for ten years.",
          "She has teached English for ten years.",
          "She has teach English for ten years.",
          "She have taught English for ten years.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Teach is onregelmatig — V3 is taught, niet teached.",
          "Na 'has' moet V3, niet V1.",
          "She → has, niet have.",
        ],
        uitlegPad: {
          stappen: [{ titel: "has + taught", tekst: "Teach-taught-taught. She has taught (V3)." }],
          woorden: [{ woord: "-aught groep", uitleg: "catch-caught, teach-taught" }],
          theorie: "Sommige -ought, andere -aught (teach/catch).",
          voorbeelden: [{ type: "voorbeeld", tekst: "teach-taught, catch-caught" }],
          basiskennis: [{ onderwerp: "spelling", uitleg: "-aught vs -ought" }],
          niveaus: { basis: "has taught.", simpeler: "Has + taught.", nogSimpeler: "taught." },
        },
      },
    ],
  },
  {
    title: "Groep 3 — V1 = V3 (de \"come back\"-groep)",
    explanation: "Patroon: **V1 en V3 zijn gelijk, V2 is anders**. Het werkwoord lijkt terug te keren naar zichzelf.\n\nKlassieke voorbeelden:\n• come – **came** – come *(komen)*\n• become – **became** – become *(worden)*\n• run – **ran** – run *(rennen)*\n\nVoorbeeldzinnen om het te zien:\n• *I **come** home every day.* (V1)\n• *Yesterday I **came** home late.* (V2)\n• *I have **come** home many times.* (V3)\n\nLet op de val:\n• *I have **came** home* ❌ — dit is een bekende fout. Na 'have' moet V3 = come, niet V2 = came.\n\n**Truc**: zeg het hardop in een rijtje: come – came – come (1-2-1). Hetzelfde voor become en run.",
    svg: tableSvg([
      ["come", "came", "come"],
      ["become", "became", "become"],
      ["run", "ran", "run"],
    ]),
    checks: [
      {
        q: "Welke vorm hoort hier? — *He has just ___ home.* (come)",
        options: ["come", "came", "comes", "coming"],
        answer: 0,
        wrongHints: [
          null,
          "Klassieke val! Na 'has' moet V3 — en V3 = come (gelijk aan V1), niet 'came'.",
          "V1 voor he/she/it in het heden. Hier staat 'has' — dan V3.",
          "Dat is de -ing-vorm. Past niet na 'has'.",
        ],
        uitlegPad: {
          stappen: [{ titel: "come-came-come", tekst: "V3 = come (gelijk aan V1). Na has: come, niet came." }],
          woorden: [{ woord: "groep 3", uitleg: "V1 = V3, V2 anders" }],
          theorie: "come-came-come patroon (1-2-1).",
          voorbeelden: [{ type: "voorbeeld", tekst: "come, become, run" }],
          basiskennis: [{ onderwerp: "klassieke val", uitleg: "'I have came' is fout" }],
          niveaus: { basis: "come.", simpeler: "V3 = come.", nogSimpeler: "come." },
        },
      },
      {
        q: "Wat is V2 van **run**?",
        options: ["ran", "run", "runned", "ranned"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is V1 én V3. V2 verandert: r__n.",
          "Run is onregelmatig — geen -ed.",
          "Niet bestaand woord.",
        ],
        uitlegPad: {
          stappen: [{ titel: "run-ran-run", tekst: "V2 = ran. Klinker i → a." }],
          woorden: [{ woord: "klinkerwissel", uitleg: "i → a in V2" }],
          theorie: "Run is groep 3 (V1=V3=run, V2=ran).",
          voorbeelden: [{ type: "voorbeeld", tekst: "I run, I ran, I have run" }],
          basiskennis: [{ onderwerp: "geen -ed", uitleg: "geen 'runned'" }],
          niveaus: { basis: "ran.", simpeler: "V2 = ran.", nogSimpeler: "V2 = ran. → ran." },
        },
      },
    ],
  },
  {
    title: "Groep 4 — Klinkerwissel i → a → u",
    explanation: "Een hele groep werkwoorden volgt het muzikale patroon **i → a → u**: de klinker schuift in elke vorm op.\n\n• begin – **began** – **begun**\n• drink – **drank** – **drunk**\n• swim – **swam** – **swum**\n• sing – **sang** – **sung**\n• ring – **rang** – **rung**\n• sink – **sank** – **sunk**\n• shrink – shrank – shrunk\n• run *(uitzondering: V3 = run, niet \"run\")* — zat in groep 3.\n\nLees ze hardop in dit rijtje — de klank rolt bijna vanzelf. Dit is een van de makkelijkste groepen om te onthouden zodra je het patroon hoort.\n\n**Voorbeeldzinnen**:\n• *I **drink** water now.*\n• *Yesterday I **drank** orange juice.*\n• *I have **drunk** all my coffee.*",
    svg: tableSvg([
      ["begin", "began", "begun"],
      ["drink", "drank", "drunk"],
      ["swim", "swam", "swum"],
      ["sing", "sang", "sung"],
      ["ring", "rang", "rung"],
    ]),
    checks: [
      {
        q: "Wat is V3 van **swim**?",
        options: ["swum", "swam", "swimmed", "swimming"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna! Dat is V2. V3 heeft de u-klank.",
          "Swim is onregelmatig.",
          "Dat is de -ing-vorm, niet V3.",
        ],
        uitlegPad: {
          stappen: [{ titel: "swim-swam-swum", tekst: "V3 = swum. Klinker u-klank." }],
          woorden: [{ woord: "groep 4", uitleg: "i → a → u patroon" }],
          theorie: "begin-began-begun, drink-drank-drunk, swim-swam-swum.",
          voorbeelden: [{ type: "voorbeeld", tekst: "have swum, has drunk, have sung" }],
          basiskennis: [{ onderwerp: "ritme", uitleg: "leuk om hardop te zeggen" }],
          niveaus: { basis: "swum.", simpeler: "V3 = swum.", nogSimpeler: "swum." },
        },
      },
      {
        q: "Welke zin staat goed?",
        options: [
          "The bell rang loudly.",
          "The bell ringed loudly.",
          "The bell rung loudly.",
          "The bell has rang loudly.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Ring is onregelmatig — V2 = rang.",
          "Rung is V3. Zonder 'has' hoort V2.",
          "Na 'has' hoort V3 = rung, niet rang.",
        ],
        uitlegPad: {
          stappen: [{ titel: "ring-rang-rung", tekst: "Bell rang (V2, geen 'has')." }],
          woorden: [{ woord: "rang", uitleg: "V2 van ring" }],
          theorie: "Zonder hulpwerkwoord + verleden → V2.",
          voorbeelden: [{ type: "voorbeeld", tekst: "The bell rang. The phone rang." }],
          basiskennis: [{ onderwerp: "ring groep 4", uitleg: "i→a→u" }],
          niveaus: { basis: "rang.", simpeler: "V2 = rang.", nogSimpeler: "rang." },
        },
      },
    ],
  },
  {
    title: "Groep 5 — V3 op -en (write/wrote/written)",
    explanation: "Een grote groep onregelmatige werkwoorden krijgt **-en** (of -n) achter V3. Vaak zit er een klinkerwissel in V2.\n\nPatroon **i → o → i + en**:\n• write – wrote – **written**\n• ride – rode – **ridden**\n• drive – drove – **driven**\n• rise – rose – **risen**\n\nPatroon **-ake → -ook/-oke → -aken/-oken**:\n• take – took – **taken**\n• break – broke – **broken**\n• speak – spoke – **spoken**\n• wake – woke – **woken**\n• choose – chose – **chosen**\n\nNog meer -en op het eind:\n• give – gave – **given**\n• see – saw – **seen**\n• eat – ate – **eaten**\n• fall – fell – **fallen**\n• forget – forgot – **forgotten**\n• get – got – **gotten** *(US-Engels)* / **got** *(UK)*\n\n**Truc**: wanneer V3 eindigt op -en, dan staat er bijna altijd 'have/has/had' voor.",
    svg: tableSvg([
      ["write", "wrote", "written"],
      ["take", "took", "taken"],
      ["break", "broke", "broken"],
      ["give", "gave", "given"],
      ["eat", "ate", "eaten"],
      ["see", "saw", "seen"],
    ]),
    checks: [
      {
        q: "Welke vorm hoort hier? — *I have ___ a letter.* (write)",
        options: ["written", "wrote", "writed", "writing"],
        answer: 0,
        wrongHints: [
          null,
          "Wrote is V2 — past simple, zonder hulpwerkwoord. Hier staat 'have' = V3.",
          "Write is onregelmatig — geen -ed.",
          "-ing-vorm past niet na 'have' in deze betekenis.",
        ],
        uitlegPad: {
          stappen: [{ titel: "have written", tekst: "Write-wrote-written. Na have → V3 = written." }],
          woorden: [{ woord: "groep 5", uitleg: "V3 op -en" }],
          theorie: "Veel V3 eindigt op -en (written, taken, broken, given).",
          voorbeelden: [{ type: "voorbeeld", tekst: "I have written a letter" }],
          basiskennis: [{ onderwerp: "patroon i→o→i+en", uitleg: "write/ride/drive" }],
          niveaus: { basis: "written.", simpeler: "V3 = written.", nogSimpeler: "written." },
        },
      },
      {
        q: "Wat is V3 van **break**?",
        options: ["broken", "broke", "broked", "breaked"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna — dat is V2. V3 heeft -en erachter.",
          "Break is onregelmatig.",
          "Geen -ed bij onregelmatige werkwoorden.",
        ],
        uitlegPad: {
          stappen: [{ titel: "break-broke-broken", tekst: "V3 = broken (-en achter)." }],
          woorden: [{ woord: "broken", uitleg: "V3 van break" }],
          theorie: "-ake → -oke → -oken patroon.",
          voorbeelden: [{ type: "voorbeeld", tekst: "break-broke-broken, speak-spoke-spoken" }],
          basiskennis: [{ onderwerp: "groep 5", uitleg: "V3 op -en" }],
          niveaus: { basis: "broken.", simpeler: "V3 = broken.", nogSimpeler: "broken." },
        },
      },
    ],
  },

  // ─── C. Must-knows ───────────────
  {
    title: "Must-knows: be, have, do, go",
    explanation: "Vier werkwoorden gebruik je *de hele tijd* — dus deze moet je echt feilloos kennen.\n\n**be** *(zijn)*\n• V1: am / is / are\n• V2: was / were\n• V3: been\n*\"I am, you are, he is — I was, we were — I have been.\"*\n\n**have** *(hebben)*\n• V1: have / has\n• V2: had\n• V3: had\n*\"I have, she has — I had — I have had.\"*\n\n**do** *(doen)*\n• V1: do / does\n• V2: did\n• V3: done\n*\"I do, he does — I did — I have done.\"*\n\n**go** *(gaan)*\n• V1: go / goes\n• V2: went\n• V3: gone\n*\"I go, she goes — I went — I have gone.\"*\n\nLet op: **be** is de enige met aparte vormen voor verschillende personen (am/is/are én was/were). De andere drie hebben alleen voor he/she/it een aparte V1 (has, does, goes).",
    svg: `<svg viewBox="0 0 300 220">
<rect x="10" y="10" width="280" height="200" rx="8" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="0.5"/>
${["be / am-is-are", "have / has", "do / does", "go / goes"].map((v, i) => `
<text x="20" y="${36 + i * 46}" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">${v}</text>
<text x="20" y="${56 + i * 46}" fill="${COLORS.text}" font-size="11" font-family="Arial">${["V2: was/were • V3: been", "V2: had • V3: had", "V2: did • V3: done", "V2: went • V3: gone"][i]}</text>
`).join("")}
</svg>`,
    checks: [
      {
        q: "Wat is V3 van **go**?",
        options: ["gone", "went", "going", "goed"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is V2 — past simple. V3 staat na have/has/had.",
          "Dat is de -ing-vorm.",
          "Geen Engels woord — go is onregelmatig.",
        ],
        uitlegPad: {
          stappen: [{ titel: "go-went-gone", tekst: "V3 van go = gone." }],
          woorden: [{ woord: "must-know", uitleg: "be/have/do/go = vaakst gebruikt" }],
          theorie: "Vier kerwerkwoorden uit hoofd kennen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "I have gone, she has gone" }],
          basiskennis: [{ onderwerp: "geen 'goed'", uitleg: "fout: I goed" }],
          niveaus: { basis: "gone.", simpeler: "V3 = gone.", nogSimpeler: "gone." },
        },
      },
      {
        q: "Welke zin staat goed?",
        options: [
          "She has done her homework.",
          "She has did her homework.",
          "She has done her homeworks.",
          "She have done her homework.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Na 'has' hoort V3 = done, niet V2 = did.",
          "'Homework' is in het Engels onbekreidbaar — geen meervoud.",
          "She → has, niet have.",
        ],
        uitlegPad: {
          stappen: [{ titel: "has done", tekst: "do-did-done. Na has → done." }],
          woorden: [{ woord: "done", uitleg: "V3 van do" }],
          theorie: "Korte rijtje: do-did-done. Have-had-had. Be-was-been.",
          voorbeelden: [{ type: "voorbeeld", tekst: "She has done her homework" }],
          basiskennis: [{ onderwerp: "she + has", uitleg: "3e persoon enkv" }],
          niveaus: { basis: "has done.", simpeler: "Has + done.", nogSimpeler: "done." },
        },
      },
    ],
  },

  // ─── D. Toepassen ───────────────
  {
    title: "Toepassen: kies de juiste vorm in past simple",
    explanation: "**Past simple** = V2. Gebruik je voor één afgeronde gebeurtenis in het verleden, vaak met tijdwoorden zoals *yesterday, last week, in 2010, ago*.\n\nGeen hulpwerkwoord nodig (in een gewone bewering) — gewoon V2 op de plek van het werkwoord.\n\n**Voorbeelden**:\n• *Yesterday I **bought** a new bike.* (buy → bought)\n• *We **saw** that film last week.* (see → saw)\n• *He **gave** me the keys.* (give → gave)\n• *They **were** at the cinema.* (be → were, meervoud)\n• *She **wrote** a letter to her grandma.* (write → wrote)\n\n**Let op de twee fouten die je veel hoort**:\n1. ❌ *I **goed** to school.* → ✅ *I **went** to school.* (go is onregelmatig)\n2. ❌ *He **buyed** a book.* → ✅ *He **bought** a book.* (geen -ed bij irregular)",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="20" width="260" height="40" rx="8" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="150" y="38" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">✓ Yesterday I bought a bike.</text>
<text x="150" y="54" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">V2 (past simple) — geen 'have'</text>
<rect x="20" y="80" width="260" height="40" rx="8" fill="rgba(255,112,67,0.10)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="150" y="98" text-anchor="middle" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">✗ Yesterday I buyed a bike.</text>
<text x="150" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">geen -ed bij onregelmatige werkwoorden</text>
<text x="150" y="156" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">tijdwoorden = signaal voor V2</text>
</svg>`,
    checks: [
      {
        q: "Welke vorm hoort hier? — *Last summer we ___ to Spain.* (go)",
        options: ["went", "gone", "go", "goed"],
        answer: 0,
        wrongHints: [
          null,
          "V3 — die hoort na have/has/had. Hier staat alleen 'last summer'.",
          "V1 voor heden of na to/will. 'Last summer' eist past simple.",
          "Geen Engels woord — go is onregelmatig.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Last summer → V2", tekst: "We went to Spain. Last summer = past simple." }],
          woorden: [{ woord: "tijdwoord", uitleg: "last summer = afgesloten verleden" }],
          theorie: "Past simple bij vast tijdstip.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Last summer, last year, 5 days ago" }],
          basiskennis: [{ onderwerp: "geen 'goed'", uitleg: "go is onregelmatig" }],
          niveaus: { basis: "went.", simpeler: "Last summer + V2.", nogSimpeler: "went." },
        },
      },
      {
        q: "Welke vorm hoort hier? — *She ___ me a present yesterday.* (give)",
        options: ["gave", "gived", "given", "gives"],
        answer: 0,
        wrongHints: [
          null,
          "Give is onregelmatig — geen -ed.",
          "V3 — moet na have/has/had. Hier alleen 'yesterday'.",
          "V1 voor he/she/it in het heden. Hier verleden tijd.",
        ],
        uitlegPad: {
          stappen: [{ titel: "give-gave-given", tekst: "Yesterday she gave (V2)." }],
          woorden: [{ woord: "gave", uitleg: "V2 van give" }],
          theorie: "Past simple bij yesterday → V2.",
          voorbeelden: [{ type: "voorbeeld", tekst: "She gave me a present" }],
          basiskennis: [{ onderwerp: "groep 5", uitleg: "V3 = given (-en)" }],
          niveaus: { basis: "gave.", simpeler: "Yesterday → V2.", nogSimpeler: "gave." },
        },
      },
      {
        q: "Welke vorm hoort hier? — *I ___ a strange noise last night.* (hear)",
        options: ["heard", "heared", "hear", "heared up"],
        answer: 0,
        wrongHints: [
          null,
          "Hear is onregelmatig — V2 is heard, geen -ed-spelling.",
          "V1 — past niet bij 'last night'.",
          "Geen werkwoord-vorm.",
        ],
        uitlegPad: {
          stappen: [{ titel: "hear-heard-heard", tekst: "Last night I heard. V2 = heard (geen -ed-spelling)." }],
          woorden: [{ woord: "heard", uitleg: "V2 én V3 = heard" }],
          theorie: "Hear is onregelmatig — heard met -d (geen -ed achteraan d).",
          voorbeelden: [{ type: "voorbeeld", tekst: "I heard, you heard, they heard" }],
          basiskennis: [{ onderwerp: "spelling", uitleg: "heard, niet heared" }],
          niveaus: { basis: "heard.", simpeler: "V2 = heard.", nogSimpeler: "heard." },
        },
      },
    ],
  },
  {
    title: "Toepassen: kies de juiste vorm in present perfect",
    explanation: "**Present perfect** = have/has + V3. Gebruik je voor een gebeurtenis in het verleden waarvan het **gevolg nu nog telt** — of bij tijdwoorden zoals *ever, never, just, already, yet, since, for, recently*.\n\n**Vorm**:\n• I / you / we / they → **have** + V3\n• he / she / it → **has** + V3\n\n**Voorbeelden**:\n• *I have **seen** that film three times.* (see → seen)\n• *She has **gone** to bed.* (go → gone)\n• *We have **eaten** already.* (eat → eaten)\n• *They have **been** to Paris.* (be → been)\n• *He has **forgotten** his bag.* (forget → forgotten)\n\n**Veelgemaakte fouten**:\n1. ❌ *I have went* → ✅ *I have **gone*** (V2 → moet V3)\n2. ❌ *She has saw* → ✅ *She has **seen*** (V2 → moet V3)\n3. ❌ *We have ate* → ✅ *We have **eaten*** (V2 → moet V3)",
    svg: `<svg viewBox="0 0 300 180">
<text x="20" y="28" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">have / has + V3</text>
<rect x="20" y="42" width="260" height="34" rx="6" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="150" y="63" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">✓ I have seen that film.</text>
<rect x="20" y="86" width="260" height="34" rx="6" fill="rgba(255,112,67,0.10)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="150" y="107" text-anchor="middle" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">✗ I have saw that film.</text>
<text x="150" y="148" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">na 'have/has' altijd V3 — niet V2</text>
<text x="150" y="166" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">signalen: ever, never, just, already, yet, since, for</text>
</svg>`,
    checks: [
      {
        q: "Welke vorm hoort hier? — *They have ___ in this house for ten years.* (live)",
        options: ["lived", "lives", "live", "living"],
        answer: 0,
        wrongHints: [
          null,
          "V1 voor he/she/it. Niet de juiste vorm na 'have'.",
          "V1 — past niet na have.",
          "-ing-vorm. Andere tijd (continuous).",
        ],
        uitlegPad: {
          stappen: [{ titel: "have lived", tekst: "Live is regelmatig: live+ed=lived. Na have: lived." }],
          woorden: [{ woord: "regelmatig", uitleg: "lived = V2 én V3" }],
          theorie: "Regelmatige V3 = -ed. Voor 'for X years' → perfect.",
          voorbeelden: [{ type: "voorbeeld", tekst: "They have lived for 10 years" }],
          basiskennis: [{ onderwerp: "for/since", uitleg: "doorlopende tijd → perfect" }],
          niveaus: { basis: "lived.", simpeler: "Have + lived.", nogSimpeler: "lived." },
        },
      },
      {
        q: "Welke vorm hoort hier? — *Have you ever ___ to Japan?* (be)",
        options: ["been", "was", "were", "be"],
        answer: 0,
        wrongHints: [
          null,
          "V2 single — past niet na 'have'. V3 van be is 'been'.",
          "V2 plural — past niet na 'have'.",
          "V1 — niet juist na 'have'.",
        ],
        uitlegPad: {
          stappen: [{ titel: "be-was-been", tekst: "V3 van be = been." }],
          woorden: [{ woord: "been", uitleg: "V3, gebruikt na have" }],
          theorie: "Be is onregelmatig: am/is/are - was/were - been.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Have you ever been to Japan?" }],
          basiskennis: [{ onderwerp: "ervaring", uitleg: "ever + perfect → V3" }],
          niveaus: { basis: "been.", simpeler: "Have + been.", nogSimpeler: "been." },
        },
      },
      {
        q: "Welke zin staat goed?",
        options: [
          "She has just spoken to her teacher.",
          "She has just spoke to her teacher.",
          "She just speak to her teacher.",
          "She have just spoken to her teacher.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Na 'has' moet V3 = spoken, niet V2 = spoke.",
          "Zonder 'has' verandert de tijd — en V1 past niet bij 'just' in deze betekenis.",
          "She → has, niet have.",
        ],
        uitlegPad: {
          stappen: [{ titel: "has spoken", tekst: "Speak-spoke-spoken. Na has → V3 = spoken." }],
          woorden: [{ woord: "spoken", uitleg: "V3 van speak" }],
          theorie: "Just/already/yet → perfect → V3.",
          voorbeelden: [{ type: "voorbeeld", tekst: "She has just spoken to her teacher" }],
          basiskennis: [{ onderwerp: "groep 5", uitleg: "-oken patroon" }],
          niveaus: { basis: "has spoken.", simpeler: "Has + spoken.", nogSimpeler: "spoken." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ───────────────
  {
    title: "Eindopdracht — alles door elkaar",
    explanation: "Tijd om alles te combineren. Bij elke zin: bepaal eerst welke **tijd** nodig is (heden / past simple / present perfect), en kies dan **V1, V2 of V3**.\n\n**Stappen**:\n1. Lees de zin en zoek het tijdwoord (yesterday / for / since / always / last week...).\n2. Geen hulpwerkwoord + verleden? → V2.\n3. Have / has / had ervoor? → V3.\n4. Geen verleden tijd? → V1.\n5. Onregelmatig? Roep het 1-2-3-rijtje op.\n\nAls je twijfelt: zeg het rijtje hardop in je hoofd — *go-went-gone, see-saw-seen, eat-ate-eaten* — en kies dan.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">checklist per zin</text>
<text x="20" y="50" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Welk tijdwoord staat er?</text>
<text x="20" y="72" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Is er een hulpwerkwoord (have/has/had)?</text>
<text x="20" y="94" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Verleden tijd zonder hulpwerkwoord → V2</text>
<text x="20" y="116" fill="${COLORS.text}" font-size="11" font-family="Arial">4. have/has/had ervoor → V3</text>
<text x="20" y="138" fill="${COLORS.text}" font-size="11" font-family="Arial">5. Heden of na to/will/can → V1</text>
<text x="150" y="178" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "*Last weekend I ___ a book and ___ it in two days.* (buy / read)",
        options: [
          "bought / read",
          "buyed / read",
          "have bought / have read",
          "buy / read",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Buy is onregelmatig — geen -ed. V2 = bought.",
          "Last weekend = past simple. Geen present perfect.",
          "V1 past niet bij 'last weekend'.",
        ],
        uitlegPad: {
          stappen: [{ titel: "bought / read (V2 beide)", tekst: "Buy → bought. Read → read (zelfde schrijfwijze, andere uitspraak)." }],
          woorden: [{ woord: "read", uitleg: "groep 1: V1=V2=V3, alleen uitspraak verandert" }],
          theorie: "Bij past simple: beide werkwoorden in V2.",
          voorbeelden: [{ type: "voorbeeld", tekst: "I bought a book and read it" }],
          basiskennis: [{ onderwerp: "consistent", uitleg: "zelfde tijd in zelfde zin" }],
          niveaus: { basis: "bought / read.", simpeler: "Beide V2.", nogSimpeler: "bought + read." },
        },
      },
      {
        q: "*She has ___ to school every day this week.* (go)",
        options: ["gone", "went", "go", "goes"],
        answer: 0,
        wrongHints: [
          null,
          "V2 — past niet na 'has'. Na 'has' altijd V3.",
          "V1 — past niet na 'has'.",
          "V1 voor he/she/it in het heden, maar 'has' eist V3.",
        ],
        uitlegPad: {
          stappen: [{ titel: "has gone every day", tekst: "Perfect: she has gone (V3)." }],
          woorden: [{ woord: "this week", uitleg: "open tijd → perfect" }],
          theorie: "Open periode + meermaals → present perfect.",
          voorbeelden: [{ type: "voorbeeld", tekst: "She has gone every day this week" }],
          basiskennis: [{ onderwerp: "frequentie", uitleg: "every day → perfect" }],
          niveaus: { basis: "gone.", simpeler: "Has + V3.", nogSimpeler: "gone." },
        },
      },
      {
        q: "*Yesterday they ___ early because they ___ tired.* (leave / be)",
        options: [
          "left / were",
          "leaved / was",
          "have left / have been",
          "leave / are",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Leave is onregelmatig — V2 = left. En 'they' eist 'were', niet 'was'.",
          "'Yesterday' = past simple, niet present perfect.",
          "V1 + heden past niet bij 'yesterday'.",
        ],
        uitlegPad: {
          stappen: [{ titel: "left / were", tekst: "Leave-left-left. Be: they → were (mv)." }],
          woorden: [{ woord: "left", uitleg: "V2/V3 van leave" }],
          theorie: "Yesterday → V2. Be past: was (1) / were (mv).",
          voorbeelden: [{ type: "voorbeeld", tekst: "They left because they were tired" }],
          basiskennis: [{ onderwerp: "were vs was", uitleg: "they/we → were" }],
          niveaus: { basis: "left / were.", simpeler: "Beide V2.", nogSimpeler: "left + were." },
        },
      },
      {
        q: "*I have never ___ such a beautiful sunset.* (see)",
        options: ["seen", "saw", "see", "seeing"],
        answer: 0,
        wrongHints: [
          null,
          "V2 — past niet na 'have'.",
          "V1 — niet juist na 'have never'.",
          "-ing-vorm — andere tijd.",
        ],
        uitlegPad: {
          stappen: [{ titel: "have never seen", tekst: "See-saw-seen. Na have → V3 = seen." }],
          woorden: [{ woord: "never", uitleg: "ervaring → perfect" }],
          theorie: "Ervaring (ever/never) → perfect → V3.",
          voorbeelden: [{ type: "voorbeeld", tekst: "I have never seen such a sunset" }],
          basiskennis: [{ onderwerp: "seen", uitleg: "V3 van see" }],
          niveaus: { basis: "seen.", simpeler: "Have + V3.", nogSimpeler: "seen." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const onregelmatigeWerkwoordenEngels = {
  id: "onregelmatige-werkwoorden-engels",
  title: "Onregelmatige werkwoorden (irregular verbs)",
  emoji: "🇬🇧",
  level: "klas1-3",
  subject: "engels",
  referentieNiveau: "A2/B1",
  sloThema: "Engels — onregelmatige werkwoorden V1/V2/V3",
  prerequisites: [
    { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "engels-A2" },
    { id: "past-tenses-engels", title: "Past tenses Engels", niveau: "engels-A2/B1" },
  ],
  intro:
    "De Engelse onregelmatige werkwoorden — V1/V2/V3, gegroepeerd per klankpatroon. Van de gelijk-blijvers (cut/cut/cut) tot de must-knows (be/have/do/go). Met toepassing in past simple en present perfect.",
  triggerKeywords: [
    "irregular", "irregular verbs", "onregelmatig", "onregelmatige werkwoorden",
    "past simple", "past participle", "present perfect", "v1 v2 v3",
    "tenses", "engels werkwoorden", "engelse werkwoorden",
    "go went gone", "see saw seen", "eat ate eaten", "be was been",
    "bought", "thought", "taught", "caught", "broken", "written",
  ],
  chapters,
  steps,
};

export default onregelmatigeWerkwoordenEngels;
