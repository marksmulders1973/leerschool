// Leerpad: Taal — leren lezen (groep 3).
// Mark 12 aug 2026: laatste "hieraan bouwen we"-tegels wegwerken — groep 3
// had géén taal-pad. Dé klus van groep 3 is leren lezen: letters en klanken,
// rijmen, hakken en plakken, eerste woordjes en een eerste zinnetje.
// Kinderen van 6-7 lezen nog nauwelijks: superkorte vragen, woorden van
// één lettergreep, en de tip om samen te oefenen met iemand die al kan lezen.

const stepEmojis = ["🔡", "🎵", "🧩", "📗", "⭐"];

const chapters = [
  { letter: "A", title: "Letters en klanken", emoji: "🔡", from: 0, to: 0 },
  { letter: "B", title: "Rijmen", emoji: "🎵", from: 1, to: 1 },
  { letter: "C", title: "Hakken en plakken", emoji: "🧩", from: 2, to: 2 },
  { letter: "D", title: "Woordjes lezen", emoji: "📗", from: 3, to: 3 },
  { letter: "E", title: "Een zinnetje lezen", emoji: "⭐", from: 4, to: 4 },
];

const steps = [
  // ─── A. Letters en klanken ────────────────────────────────
  {
    title: "Letters en klanken — wat hoor je vooraan?",
    explanation:
      "Elk woord is gemaakt van **klanken**.\n\nZeg maar eens langzaam: **v-i-s**. Hoor je de **v** vooraan?\n\n• **maan** begint met de **m**\n• **roos** begint met de **r**\n• **vis** begint met de **v**\n\n**Tip**: zeg het woord hardop en luister naar de eerste klank. Oefen je samen met iemand die al goed kan lezen? Nog leuker!",
    checks: [
      {
        q: "Met welke letter begint **maan**?",
        options: ["m", "n", "a", "s"],
        answer: 0,
        wrongHints: [null, "Die klank zit achteraan.", "Die klank zit in het midden.", "Zeg het woord langzaam: mmm-aan."],
        uitlegPad: {
          stappen: [{ titel: "Luister vooraan", tekst: "Zeg langzaam: **mmm**-aan. De eerste klank is de **m**." }],
          niveaus: { basis: "maan begint met de m.", simpeler: "Zeg: mmm... maan!", nogSimpeler: "m" },
        },
      },
      {
        q: "Met welke letter begint **vis**?",
        options: ["v", "s", "i", "f"],
        answer: 0,
        wrongHints: [null, "Die klank zit achteraan.", "Die klank zit in het midden.", "Die lijkt erop — maar zeg het woord eens hardop."],
        uitlegPad: {
          stappen: [{ titel: "Luister vooraan", tekst: "Zeg langzaam: **vvv**-is. De eerste klank is de **v**." }],
          niveaus: { basis: "vis begint met de v.", simpeler: "Zeg: vvv... vis!", nogSimpeler: "v" },
        },
      },
      {
        q: "Welke klank hoor je **achteraan** bij **roos**?",
        options: ["s", "r", "oo", "t"],
        answer: 0,
        wrongHints: [null, "Die klank zit juist vooraan.", "Die klank zit in het midden.", "Zeg het woord langzaam: roo-sss."],
        uitlegPad: {
          stappen: [{ titel: "Luister achteraan", tekst: "Zeg langzaam: r-oo-**sss**. Achteraan hoor je de **s**." }],
          niveaus: { basis: "roos eindigt op de s.", simpeler: "Zeg: roo... sss!", nogSimpeler: "s" },
        },
      },
      {
        q: "Welk woord begint met dezelfde letter als **boom**?",
        options: ["bal", "map", "sok", "vis"],
        answer: 0,
        wrongHints: [null, "Zeg allebei hardop: b-oom en m-ap. Klinkt het begin hetzelfde?", "Zeg allebei hardop — hoor je hetzelfde begin?", "Zeg allebei hardop — hoor je hetzelfde begin?"],
        uitlegPad: {
          stappen: [{ titel: "Vergelijk het begin", tekst: "**b**-oom en **b**-al beginnen allebei met de **b**." }],
          niveaus: { basis: "boom en bal beginnen met de b.", simpeler: "b... boom. b... bal!", nogSimpeler: "bal" },
        },
      },
    ],
  },

  // ─── B. Rijmen ────────────────────────────────────────────
  {
    title: "Rijmen — woorden die hetzelfde klinken",
    explanation:
      "Woorden **rijmen** als het einde hetzelfde klinkt:\n\n• maan — **baan**\n• vis — **mis**\n• kat — **mat**\n\nZeg de woorden hardop. Klinkt het einde hetzelfde? Dan rijmt het!\n\nRijmen helpt je bij het lezen: als je *kat* kunt lezen, kun je *mat* ook!",
    checks: [
      {
        q: "Welk woord rijmt op **kat**?",
        options: ["mat", "kap", "kip", "boom"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop: kat... kap. Klinkt het einde hetzelfde?", "Bijna hetzelfde woord — maar rijmt het?", "Zeg het hardop — klinkt het einde hetzelfde?"],
        uitlegPad: {
          stappen: [{ titel: "Luister naar het einde", tekst: "k-**at** en m-**at** eindigen allebei op **-at**. Dat rijmt!" }],
          niveaus: { basis: "kat en mat rijmen.", simpeler: "kat... mat... zelfde einde!", nogSimpeler: "mat" },
        },
      },
      {
        q: "Welk woord rijmt op **maan**?",
        options: ["baan", "man", "boom", "mier"],
        answer: 0,
        wrongHints: [null, "Bijna — maar luister: maan heeft een lange aa.", "Zeg het hardop — klinkt het einde hetzelfde?", "Zeg het hardop — klinkt het einde hetzelfde?"],
        uitlegPad: {
          stappen: [{ titel: "Luister naar het einde", tekst: "m-**aan** en b-**aan** eindigen allebei op **-aan**. Dat rijmt! Let op: *man* (korte a) rijmt níét op *maan* (lange aa)." }],
          niveaus: { basis: "maan en baan rijmen.", simpeler: "maan... baan... zelfde einde!", nogSimpeler: "baan" },
        },
      },
      {
        q: "Welk woord rijmt **niet** op **vis**?",
        options: ["vos", "mis", "gis", "lis"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop: vis... mis. Dat klinkt hetzelfde, dus dat rijmt wél.", "Dat rijmt wél — we zoeken het woord dat NIET rijmt.", "Dat rijmt wél — we zoeken het woord dat NIET rijmt."],
        uitlegPad: {
          stappen: [{ titel: "Welke valt uit de toon?", tekst: "mis, gis en lis eindigen op **-is**, net als vis. **vos** eindigt op -os. Die rijmt dus niet." }],
          niveaus: { basis: "vos rijmt niet op vis.", simpeler: "vis-mis-gis-lis... en vos doet niet mee!", nogSimpeler: "vos" },
        },
      },
      {
        q: "Maak het rijmpje af: *Ik zie een beer, hij valt steeds …*",
        options: ["neer", "om", "hard", "weg"],
        answer: 0,
        wrongHints: [null, "Klinkt dat als 'beer'?", "Klinkt dat als 'beer'?", "Klinkt dat als 'beer'?"],
        uitlegPad: {
          stappen: [{ titel: "Zoek de beer-klank", tekst: "b-**eer** en n-**eer** rijmen. *Ik zie een beer, hij valt steeds neer.*" }],
          niveaus: { basis: "beer rijmt op neer.", simpeler: "beer... neer!", nogSimpeler: "neer" },
        },
      },
    ],
  },

  // ─── C. Hakken en plakken ─────────────────────────────────
  {
    title: "Hakken en plakken — k-a-t wordt kat",
    explanation:
      "**Hakken** = een woord in stukjes zeggen: *kat* → **k - a - t**.\n\n**Plakken** = de stukjes weer aan elkaar zeggen: **k - a - t** → *kat*!\n\nZo leer je elk nieuw woord lezen:\n1. Zeg elke klank los: m - u - s.\n2. Plak ze aan elkaar: mus!\n\nProbeer maar: **b - u - s** → ? Ja, bus!",
    checks: [
      {
        q: "Plak de klanken aan elkaar: **s - o - k**. Welk woord is het?",
        options: ["sok", "kos", "sik", "kok"],
        answer: 0,
        wrongHints: [null, "Dat zijn dezelfde klanken, maar in de verkeerde volgorde.", "Luister goed naar de middelste klank: o of i?", "Waar begint het woord mee: s of k?"],
        uitlegPad: {
          stappen: [{ titel: "Plakken", tekst: "s... o... k... → **sok**! Zeg de klanken steeds sneller achter elkaar." }],
          niveaus: { basis: "s-o-k is sok.", simpeler: "Zeg sneller: s-o-k... sok!", nogSimpeler: "sok" },
        },
      },
      {
        q: "Plak de klanken aan elkaar: **m - aa - n**. Welk woord is het?",
        options: ["maan", "man", "naam", "mand"],
        answer: 0,
        wrongHints: [null, "Luister: is het een korte a of een lange aa?", "Dat zijn dezelfde klanken in de verkeerde volgorde.", "Daar zit een klank te veel in."],
        uitlegPad: {
          stappen: [{ titel: "Lange klank", tekst: "m... aa... n... → **maan**. De **aa** is een lange klank." }],
          niveaus: { basis: "m-aa-n is maan.", simpeler: "Zeg sneller: m-aa-n... maan!", nogSimpeler: "maan" },
        },
      },
      {
        q: "Hak het woord **bus** in stukjes. Wat hoor je?",
        options: ["b - u - s", "b - a - s", "p - u - s", "b - u - k"],
        answer: 0,
        wrongHints: [null, "Luister naar de middelste klank: u of a?", "Luister naar de eerste klank: b of p?", "Luister naar de laatste klank: s of k?"],
        uitlegPad: {
          stappen: [{ titel: "Hakken", tekst: "Zeg *bus* heel langzaam: **b**... **u**... **s**. Drie klanken." }],
          niveaus: { basis: "bus = b-u-s.", simpeler: "Zeg het heeeel langzaam: b...u...s.", nogSimpeler: "b - u - s" },
        },
      },
      {
        q: "Hoeveel klanken hoor je in **vis**?",
        options: ["3", "2", "4", "1"],
        answer: 0,
        wrongHints: [null, "Hak maar: v... i... s. Tel nog eens.", "Hak maar: v... i... s. Tel nog eens.", "Een woord heeft bijna altijd meer klanken."],
        uitlegPad: {
          stappen: [{ titel: "Hakken en tellen", tekst: "v... i... s... = **3** klanken. Tel op je vingers mee!" }],
          niveaus: { basis: "vis heeft 3 klanken: v-i-s.", simpeler: "v (1)... i (2)... s (3)!", nogSimpeler: "3" },
        },
      },
    ],
  },

  // ─── D. Woordjes lezen ────────────────────────────────────
  {
    title: "Woordjes lezen — welk woord staat er?",
    explanation:
      "Nu ga je **echte woordjes lezen**!\n\nZo doe je het:\n1. Kijk naar de letters.\n2. Zeg elke klank: **b - a - l**.\n3. Plak ze aan elkaar: **bal**!\n\nGaat het nog langzaam? Dat geeft niks. Elke keer gaat het een beetje sneller. Zo leert iedereen lezen.",
    checks: [
      {
        q: "Welk woord hoort bij een dier dat **miauw** zegt?",
        options: ["poes", "boek", "stoel", "fiets"],
        answer: 0,
        wrongHints: [null, "Lees het woord: b-oe-k. Zegt een boek miauw?", "Lees het woord: s-t-oe-l. Zegt die miauw?", "Lees het woord: f-ie-t-s. Zegt die miauw?"],
        uitlegPad: {
          stappen: [{ titel: "Lezen en denken", tekst: "p-oe-s → **poes**. Een poes zegt miauw!" }],
          niveaus: { basis: "De poes zegt miauw.", simpeler: "Lees: p... oe... s.", nogSimpeler: "poes" },
        },
      },
      {
        q: "Welk woord is een **kleur**?",
        options: ["rood", "roos", "rok", "raam"],
        answer: 0,
        wrongHints: [null, "Dat is een bloem.", "Dat trek je aan.", "Daar kijk je doorheen."],
        uitlegPad: {
          stappen: [{ titel: "Lezen en kiezen", tekst: "r-oo-d → **rood**. Dat is een kleur, net als blauw en geel." }],
          niveaus: { basis: "Rood is een kleur.", simpeler: "Lees: r... oo... d.", nogSimpeler: "rood" },
        },
      },
      {
        q: "Wat kun je **eten**?",
        options: ["soep", "sok", "stoep", "steen"],
        answer: 0,
        wrongHints: [null, "Die doe je aan je voet.", "Daar loop je op.", "Die is veel te hard om op te eten."],
        uitlegPad: {
          stappen: [{ titel: "Lezen en denken", tekst: "s-oe-p → **soep**. Mmm, dat kun je eten!" }],
          niveaus: { basis: "Soep kun je eten.", simpeler: "Lees: s... oe... p.", nogSimpeler: "soep" },
        },
      },
      {
        q: "Welk woord past bij het plaatje in je hoofd: *hij schijnt in de nacht aan de hemel*?",
        options: ["maan", "man", "mand", "muur"],
        answer: 0,
        wrongHints: [null, "Lees goed: korte a of lange aa?", "Daar stop je spullen in.", "Die staat in het huis."],
        uitlegPad: {
          stappen: [{ titel: "Lezen en denken", tekst: "m-aa-n → **maan**. Die zie je in de nacht aan de hemel." }],
          niveaus: { basis: "De maan schijnt in de nacht.", simpeler: "Lees: m... aa... n.", nogSimpeler: "maan" },
        },
      },
    ],
  },

  // ─── E. Zinnetje lezen ────────────────────────────────────
  {
    title: "Een zinnetje lezen — jij kunt het al!",
    explanation:
      "Woorden achter elkaar maken een **zin**.\n\nLees maar, woord voor woord:\n\n*ik zie een vis.*\n\nKnap hoor! Lees rustig, wijs met je vinger mee. Snap je de zin niet meteen? Lees hem gewoon nog een keer.\n\nDit is de laatste stap — laat maar zien wat je kunt!",
    checks: [
      {
        q: "Lees: *de kat zit op de mat.* — **Wie** zit op de mat?",
        options: ["de kat", "de hond", "de vis", "papa"],
        answer: 0,
        wrongHints: [null, "Lees nog eens: staat dat woord in de zin?", "Lees nog eens: staat dat woord in de zin?", "Lees nog eens: staat dat woord in de zin?"],
        uitlegPad: {
          stappen: [{ titel: "Woord voor woord", tekst: "de - kat - zit - op - de - mat. Wie zit er? **De kat**!" }],
          niveaus: { basis: "De kat zit op de mat.", simpeler: "Lees de eerste twee woorden.", nogSimpeler: "de kat" },
        },
      },
      {
        q: "Lees: *ik eet een appel.* — **Wat** eet ik?",
        options: ["een appel", "een peer", "een koek", "soep"],
        answer: 0,
        wrongHints: [null, "Lees het laatste woord nog eens.", "Lees het laatste woord nog eens.", "Lees het laatste woord nog eens."],
        uitlegPad: {
          stappen: [{ titel: "Zoek in de zin", tekst: "ik - eet - een - **appel**. Het laatste woord zegt wat ik eet." }],
          niveaus: { basis: "Ik eet een appel.", simpeler: "Het staat achteraan de zin.", nogSimpeler: "een appel" },
        },
      },
      {
        q: "Lees: *de bal is rood.* — Welke **kleur** heeft de bal?",
        options: ["rood", "blauw", "geel", "groen"],
        answer: 0,
        wrongHints: [null, "Lees het laatste woord nog eens.", "Lees het laatste woord nog eens.", "Lees het laatste woord nog eens."],
        uitlegPad: {
          stappen: [{ titel: "Zoek in de zin", tekst: "de - bal - is - **rood**. Daar staat de kleur." }],
          niveaus: { basis: "De bal is rood.", simpeler: "De kleur staat achteraan.", nogSimpeler: "rood" },
        },
      },
      {
        q: "Lees: *mam en ik gaan naar de bus.* — **Waar** gaan we naartoe?",
        options: ["naar de bus", "naar huis", "naar school", "naar oma"],
        answer: 0,
        wrongHints: [null, "Lees het laatste woord nog eens.", "Lees het laatste woord nog eens.", "Lees het laatste woord nog eens."],
        uitlegPad: {
          stappen: [{ titel: "Zoek in de zin", tekst: "mam - en - ik - gaan - naar - de - **bus**. We gaan naar de bus!" }],
          niveaus: { basis: "We gaan naar de bus.", simpeler: "Het staat achteraan de zin.", nogSimpeler: "naar de bus" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const taalLerenLezenG3 = {
  id: "taal-leren-lezen-g3",
  title: "Taal — leren lezen (groep 3)",
  emoji: "📗",
  level: "groep3",
  subject: "taal",
  referentieNiveau: "po-1F",
  sloThema: "Taal — aanvankelijk lezen: klanken, rijmen, hakken/plakken, eerste woorden en zinnen (groep 3)",
  prerequisites: [],
  intro:
    "Leren lezen, stap voor stap: klanken horen, rijmen, hakken en plakken (k-a-t → kat), je eerste woordjes en een echt zinnetje. Voor groep 3 — samen oefenen mag! ~15 min.",
  triggerKeywords: [
    "leren lezen", "letters", "klanken", "rijmen", "hakken en plakken",
    "groep 3", "aanvankelijk lezen", "eerste woordjes",
  ],
  chapters,
  steps,
};

export default taalLerenLezenG3;
