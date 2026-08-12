// Leerpad: Spelling — je eerste woorden schrijven (groep 3).
// Mark 12 aug 2026: laatste "hieraan bouwen we"-tegels wegwerken — groep 3
// had géén spelling-pad. Groep-3-spelling = luisterwoorden: schrijf wat je
// hoort. Korte woorden (kat, vis), lange klanken (aa/oo/ee/uu), tweeteken-
// klanken (oe/ie/eu) en de eerste lastige vriendjes (sch-, -ng).

const stepEmojis = ["✍️", "🅰️", "👂", "🤝", "🏅"];

const chapters = [
  { letter: "A", title: "Schrijf wat je hoort", emoji: "✍️", from: 0, to: 0 },
  { letter: "B", title: "Lange klanken: aa, oo, ee", emoji: "🅰️", from: 1, to: 1 },
  { letter: "C", title: "Twee letters, één klank: oe, ie, eu", emoji: "👂", from: 2, to: 2 },
  { letter: "D", title: "Lastige vriendjes: sch- en -ng", emoji: "🤝", from: 3, to: 3 },
  { letter: "E", title: "Laat maar zien!", emoji: "🏅", from: 4, to: 4 },
];

const steps = [
  // ─── A. Schrijf wat je hoort ──────────────────────────────
  {
    title: "Schrijf wat je hoort — k, a, t: kat",
    explanation:
      "Spelling is: **schrijven wat je hoort**.\n\nZo doe je het:\n1. Zeg het woord langzaam: *kat* → **k - a - t**.\n2. Schrijf voor elke klank een letter: **k**, **a**, **t**.\n3. Lees na wat je schreef: staat er echt *kat*?\n\nWoorden als kat, vis, bus en pen schrijf je precies zoals je ze hoort. Dat heet een **luisterwoord**.",
    checks: [
      {
        q: "Hoe schrijf je het woord voor dit dier: 🐱?",
        options: ["kat", "kad", "cat", "katt"],
        answer: 0,
        wrongHints: [null, "Luister naar de laatste klank: t of d?", "Zo schrijf je het in het Engels — wij zoeken het Nederlandse woord.", "Hoor je twee t's? Zeg het maar langzaam."],
        uitlegPad: {
          stappen: [{ titel: "Hakken en schrijven", tekst: "k... a... t... → drie klanken, drie letters: **kat**." }],
          niveaus: { basis: "Je schrijft: kat.", simpeler: "k-a-t.", nogSimpeler: "kat" },
        },
      },
      {
        q: "Hoe schrijf je het woord voor dit dier: 🐟?",
        options: ["vis", "fis", "viss", "vus"],
        answer: 0,
        wrongHints: [null, "Luister naar de eerste klank: v of f?", "Hoor je twee s'en? Zeg het maar langzaam.", "Luister naar de middelste klank: i of u?"],
        uitlegPad: {
          stappen: [{ titel: "Hakken en schrijven", tekst: "v... i... s... → **vis**. Drie klanken, drie letters." }],
          niveaus: { basis: "Je schrijft: vis.", simpeler: "v-i-s.", nogSimpeler: "vis" },
        },
      },
      {
        q: "Welk woord is **goed** geschreven?",
        options: ["bus", "buss", "bas", "pus"],
        answer: 0,
        wrongHints: [null, "Hoor je twee s'en aan het einde?", "Luister naar de middelste klank: u of a?", "Luister naar de eerste klank: b of p?"],
        uitlegPad: {
          stappen: [{ titel: "Nalezen", tekst: "b... u... s... → **bus**. Elke klank één letter." }],
          niveaus: { basis: "Je schrijft: bus.", simpeler: "b-u-s.", nogSimpeler: "bus" },
        },
      },
      {
        q: "Zeg langzaam: **p - e - n**. Welk woord schrijf je?",
        options: ["pen", "pan", "pin", "peen"],
        answer: 0,
        wrongHints: [null, "Luister naar de middelste klank: e of a?", "Luister naar de middelste klank: e of i?", "Dat is een lange ee — hoor je die hier?"],
        uitlegPad: {
          stappen: [{ titel: "Plakken en schrijven", tekst: "p... e... n... → **pen**. Daarmee schrijf je!" }],
          niveaus: { basis: "Je schrijft: pen.", simpeler: "p-e-n.", nogSimpeler: "pen" },
        },
      },
    ],
  },

  // ─── B. Lange klanken ─────────────────────────────────────
  {
    title: "Lange klanken — aa, oo, ee, uu",
    explanation:
      "Sommige klanken klinken **lang**. Die schrijf je met **twee letters**:\n\n• **aa** zoals in m**aa**n\n• **oo** zoals in b**oo**m\n• **ee** zoals in b**ee**n\n• **uu** zoals in v**uu**r\n\nLuister goed:\n• *man* (kort) — *maan* (lang)\n• *bom* (kort) — *boom* (lang)\n\nHoor je de lange klank? Dan twee letters!",
    checks: [
      {
        q: "Hoe schrijf je het woord voor dit ding aan de hemel: 🌙?",
        options: ["maan", "man", "maann", "men"],
        answer: 0,
        wrongHints: [null, "Dat is de korte a — luister: is de klank kort of lang?", "Daar staan te veel letters.", "Luister nog eens naar de klank in het midden."],
        uitlegPad: {
          stappen: [{ titel: "Lange aa", tekst: "Je hoort een **lange aa**: m-aa-n. Lange klank = twee letters: **maan**." }],
          niveaus: { basis: "Lange aa = 2 letters: maan.", simpeler: "maaaaan → aa!", nogSimpeler: "maan" },
        },
      },
      {
        q: "Hoe schrijf je het woord voor dit ding: 🌳?",
        options: ["boom", "bom", "bome", "buum"],
        answer: 0,
        wrongHints: [null, "Dat is de korte o — een 💣! Luister: kort of lang?", "Zeg het woord — hoor je een e aan het einde?", "Luister: is het een oo of een uu?"],
        uitlegPad: {
          stappen: [{ titel: "Lange oo", tekst: "Je hoort een **lange oo**: b-oo-m. Dus twee o's: **boom**. Let op: *bom* met één o is iets heel anders!" }],
          niveaus: { basis: "Lange oo = 2 letters: boom.", simpeler: "booooom → oo!", nogSimpeler: "boom" },
        },
      },
      {
        q: "Welk woord heeft een **lange klank**?",
        options: ["been", "bel", "bal", "bus"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop: b-e-l. Klinkt de e lang?", "Zeg het hardop: b-a-l. Klinkt de a lang?", "Zeg het hardop: b-u-s. Klinkt de u lang?"],
        uitlegPad: {
          stappen: [{ titel: "Kort of lang?", tekst: "b-**ee**-n heeft de lange ee (twee letters). bel, bal en bus hebben korte klanken (één letter)." }],
          niveaus: { basis: "been heeft de lange ee.", simpeler: "beeeeen → lang!", nogSimpeler: "been" },
        },
      },
      {
        q: "Zeg langzaam: **v - uu - r**. Welk woord schrijf je?",
        options: ["vuur", "vur", "voer", "vier"],
        answer: 0,
        wrongHints: [null, "De uu is lang — hoeveel letters heeft een lange klank?", "Dat is de oe-klank — luister nog eens.", "Dat is de ie-klank — luister nog eens."],
        uitlegPad: {
          stappen: [{ titel: "Lange uu", tekst: "v... uu... r... → **vuur**. De lange uu schrijf je met twee letters." }],
          niveaus: { basis: "Lange uu = 2 letters: vuur.", simpeler: "vuuuuur → uu!", nogSimpeler: "vuur" },
        },
      },
    ],
  },

  // ─── C. Tweetekenklanken ──────────────────────────────────
  {
    title: "Twee letters, één klank — oe, ie, eu",
    explanation:
      "Sommige klanken schrijf je altijd met **twee letters samen**:\n\n• **oe** zoals in b**oe**k\n• **ie** zoals in f**ie**ts\n• **eu** zoals in r**eu**s\n• **ui** zoals in h**ui**s\n• **ei** zoals in **ei**\n\nDe twee letters horen bij elkaar. Samen maken ze één klank.\n\n*b - oe - k* → drie klanken, maar vier letters!",
    checks: [
      {
        q: "Hoe schrijf je het woord voor dit ding: 📖?",
        options: ["boek", "book", "buk", "boec"],
        answer: 0,
        wrongHints: [null, "Zo schrijf je het in het Engels — de Nederlandse oe-klank schrijf je anders.", "Daar mist een letter — de oe heeft er twee.", "Luister naar de laatste klank: k of c?"],
        uitlegPad: {
          stappen: [{ titel: "De oe-klank", tekst: "b... oe... k... → **boek**. De oe-klank = de letters o en e samen." }],
          niveaus: { basis: "De oe schrijf je als o+e: boek.", simpeler: "b-oe-k.", nogSimpeler: "boek" },
        },
      },
      {
        q: "Hoe schrijf je het woord voor dit ding: 🚲?",
        options: ["fiets", "fits", "viets", "fiet"],
        answer: 0,
        wrongHints: [null, "Daar mist een letter — de ie heeft er twee.", "Luister naar de eerste klank: f of v?", "Luister naar het einde: hoor je nog een s?"],
        uitlegPad: {
          stappen: [{ titel: "De ie-klank", tekst: "f... ie... t... s... → **fiets**. De ie-klank = de letters i en e samen." }],
          niveaus: { basis: "De ie schrijf je als i+e: fiets.", simpeler: "f-ie-t-s.", nogSimpeler: "fiets" },
        },
      },
      {
        q: "Welke **twee letters** samen maken de klank die je hoort in **huis**?",
        options: ["ui", "uu", "oe", "ei"],
        answer: 0,
        wrongHints: [null, "Dat is de klank van vuur.", "Dat is de klank van boek.", "Dat is de klank van ei."],
        uitlegPad: {
          stappen: [{ titel: "De ui-klank", tekst: "h-**ui**-s. De klank in het midden is de **ui** — de letters u en i samen." }],
          niveaus: { basis: "In huis zit de ui-klank.", simpeler: "h-ui-s.", nogSimpeler: "ui" },
        },
      },
      {
        q: "Hoe schrijf je het woord voor een **hele grote man uit een sprookje**?",
        options: ["reus", "rus", "roes", "ruis"],
        answer: 0,
        wrongHints: [null, "Daar mist een letter — luister naar de klank in het midden.", "Dat is de oe-klank — luister nog eens.", "Dat is de ui-klank — luister nog eens."],
        uitlegPad: {
          stappen: [{ titel: "De eu-klank", tekst: "r... eu... s... → **reus**. De eu-klank = de letters e en u samen." }],
          niveaus: { basis: "De eu schrijf je als e+u: reus.", simpeler: "r-eu-s.", nogSimpeler: "reus" },
        },
      },
    ],
  },

  // ─── D. sch- en -ng ───────────────────────────────────────
  {
    title: "Lastige vriendjes — sch- en -ng",
    explanation:
      "Twee groepjes letters die je vaak samen ziet:\n\n**sch-** aan het begin:\n• **sch**ool, **sch**oen, **sch**aap\n• Je schrijft s + c + h, ook al hoor je de c bijna niet.\n\n**-ng** aan het einde:\n• ri**ng**, ba**ng**, la**ng**\n• Eén klank, twee letters: n + g.\n\nDeze moet je gewoon **onthouden**. Na een tijdje gaat het vanzelf!",
    checks: [
      {
        q: "Hoe schrijf je de plek waar je elke dag leert?",
        options: ["school", "sgool", "chool", "skool"],
        answer: 0,
        wrongHints: [null, "Bijna — het begint met sch, met een c erin.", "Er mist een letter aan het begin.", "Bijna — het is geen k maar ch."],
        uitlegPad: {
          stappen: [{ titel: "sch-woord", tekst: "**sch**-oo-l → school. Onthoud: s + c + h aan het begin." }],
          niveaus: { basis: "School begint met sch.", simpeler: "s-c-h: school.", nogSimpeler: "school" },
        },
      },
      {
        q: "Hoe schrijf je het woord voor wat je aan je voet draagt: 👟?",
        options: ["schoen", "sgoen", "schun", "soen"],
        answer: 0,
        wrongHints: [null, "Bijna — het begint met sch, met een c erin.", "Luister naar de klank in het midden: oe.", "Er missen letters aan het begin: sch."],
        uitlegPad: {
          stappen: [{ titel: "sch-woord", tekst: "**sch**-oe-n → schoen. Weer s + c + h aan het begin." }],
          niveaus: { basis: "Schoen begint met sch.", simpeler: "sch + oen.", nogSimpeler: "schoen" },
        },
      },
      {
        q: "Hoe schrijf je het woord voor dit sieraad om je vinger: 💍?",
        options: ["ring", "rink", "rin", "rig"],
        answer: 0,
        wrongHints: [null, "Luister naar het einde: hoor je een k?", "Er mist een letter aan het einde.", "Er mist een letter — de eindklank heeft er twee: n + g."],
        uitlegPad: {
          stappen: [{ titel: "-ng aan het einde", tekst: "r-i-**ng** → ring. De eindklank schrijf je met n + g." }],
          niveaus: { basis: "Ring eindigt op -ng.", simpeler: "ri + ng.", nogSimpeler: "ring" },
        },
      },
      {
        q: "Welk woord eindigt op **-ng**?",
        options: ["lang", "land", "lamp", "las"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop: hoor je aan het einde een d?", "Zeg het hardop: hoor je aan het einde een p?", "Zeg het hardop: hoor je aan het einde een ng-klank?"],
        uitlegPad: {
          stappen: [{ titel: "Luister naar het einde", tekst: "l-a-**ng**: daar hoor je de ng-klank. land, lamp en las eindigen anders." }],
          niveaus: { basis: "Lang eindigt op -ng.", simpeler: "laaa-ng!", nogSimpeler: "lang" },
        },
      },
    ],
  },

  // ─── E. Eindronde ─────────────────────────────────────────
  {
    title: "Laat maar zien! — alles door elkaar",
    explanation:
      "De laatste ronde! Alles wat je leerde komt nog één keer langs:\n\n• Schrijf wat je hoort: k-a-t → kat\n• Lange klanken met twee letters: maan, boom\n• Twee letters, één klank: boek, fiets, huis\n• sch- en -ng: school, ring\n\nDoe je best — en weet je het even niet? Zeg het woord langzaam hardop. Je oren helpen je!",
    checks: [
      {
        q: "Welk woord is **goed** geschreven?",
        options: ["schaap", "sgaap", "schap", "scaap"],
        answer: 0,
        wrongHints: [null, "Het begint met s + c + h.", "Luister: is de a kort of lang?", "Er mist een letter: s-c-h."],
        uitlegPad: {
          stappen: [{ titel: "Twee dingen tegelijk", tekst: "**sch** aan het begin + lange **aa** in het midden = schaap. 🐑" }],
          niveaus: { basis: "sch + aa + p = schaap.", simpeler: "sch... aaa... p.", nogSimpeler: "schaap" },
        },
      },
      {
        q: "Hoe schrijf je het woord voor het huis van een koning: 🏰?",
        options: ["kasteel", "kastel", "kastteel", "casteel"],
        answer: 0,
        wrongHints: [null, "Luister naar het einde: hoor je een lange ee?", "Daar staat een t te veel.", "Begint het met een c of een k?"],
        uitlegPad: {
          stappen: [{ titel: "Lang woord, zelfde trucje", tekst: "kas-teel: hak het in stukjes. k-a-s + t-ee-l. De lange **ee** krijgt twee letters: **kasteel**." }],
          niveaus: { basis: "kas + teel = kasteel.", simpeler: "Zeg het in twee stukjes: kas-teel.", nogSimpeler: "kasteel" },
        },
      },
      {
        q: "Welk woord is **fout** geschreven?",
        options: ["boec", "boot", "bank", "bloem"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop en hak het: b-oo-t. Klopt elke letter?", "Zeg het hardop en hak het: b-a-n-k. Klopt elke letter?", "Zeg het hardop en hak het: b-l-oe-m. Klopt elke letter?"],
        uitlegPad: {
          stappen: [{ titel: "Zoek de fout", tekst: "*boec* moet zijn: **boek** — met een k aan het einde. De andere woorden kloppen." }],
          niveaus: { basis: "boec is fout, het is boek.", simpeler: "Een boek eindigt op k.", nogSimpeler: "boec" },
        },
      },
      {
        q: "Zeg langzaam: **k - eu - k - e - n**. Welk woord schrijf je?",
        options: ["keuken", "kuken", "koeken", "kieken"],
        answer: 0,
        wrongHints: [null, "De eu-klank heeft twee letters: e + u.", "Dat is de oe-klank — luister nog eens naar het begin.", "Dat is de ie-klank — luister nog eens naar het begin."],
        uitlegPad: {
          stappen: [{ titel: "De eu in een groot woord", tekst: "k-**eu**-k-e-n → keuken. Daar wordt gekookt! De eu = e + u samen." }],
          niveaus: { basis: "k + eu + ken = keuken.", simpeler: "keu... ken.", nogSimpeler: "keuken" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const spellingEersteWoordenG3 = {
  id: "spelling-eerste-woorden-g3",
  title: "Spelling — je eerste woorden schrijven (groep 3)",
  emoji: "✍️",
  level: "groep3",
  subject: "spelling",
  referentieNiveau: "po-1F",
  sloThema: "Spelling — luisterwoorden, lange klanken, tweetekenklanken, sch-/-ng (groep 3)",
  prerequisites: [],
  intro:
    "Je eerste woorden schrijven: schrijf wat je hoort (k-a-t → kat), lange klanken (maan, boom), oe/ie/eu-woorden en de lastige vriendjes sch- en -ng. Voor groep 3. ~15 min.",
  triggerKeywords: [
    "spelling", "eerste woorden", "luisterwoorden", "lange klanken",
    "oe ie eu", "sch", "ng", "groep 3", "woorden schrijven",
  ],
  chapters,
  steps,
};

export default spellingEersteWoordenG3;
