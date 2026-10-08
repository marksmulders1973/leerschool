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
        wrongHints: [null, "Die klank zit achteraan.", "Die klank zit in het midden.", "Zeg het woord langzaam. Welke klank hoor je als eerste?"],
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
        wrongHints: [null, "Die klank zit juist vooraan.", "Die klank zit in het midden.", "Zeg het woord langzaam. Welke klank hoor je als laatste?"],
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
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Met welke letter begint **sok**?",
        options: ["s", "k", "o", "z"],
        answer: 0,
        wrongHints: [
          null,
          "Die klank zit achteraan.",
          "Die klank zit in het midden.",
          "Die lijkt erop — maar zeg het woord eens hardop.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister vooraan",
              tekst: "Zeg langzaam: **sss**-ok. De eerste klank is de **s**.",
            },
          ],
          niveaus: {
            basis: "sok begint met de s.",
            simpeler: "Zeg: sss... sok!",
            nogSimpeler: "s",
          },
        },
      },
      {
        q: "Met welke letter begint **pen**?",
        options: ["p", "n", "e", "b"],
        answer: 0,
        wrongHints: [
          null,
          "Die klank zit achteraan.",
          "Die klank zit in het midden.",
          "Die lijkt erop — maar zeg het woord eens hardop.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister vooraan",
              tekst: "Zeg langzaam: **p**-en. De eerste klank is de **p**.",
            },
          ],
          niveaus: {
            basis: "pen begint met de p.",
            simpeler: "Zeg: p... pen!",
            nogSimpeler: "p",
          },
        },
      },
      {
        q: "Welke klank hoor je **achteraan** bij **kat**?",
        options: ["t", "k", "a", "p"],
        answer: 0,
        wrongHints: [
          null,
          "Die klank zit juist vooraan.",
          "Die klank zit in het midden.",
          "Zeg het woord langzaam. Welke klank hoor je als laatste?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister achteraan",
              tekst: "Zeg langzaam: ka-**t**. De laatste klank is de **t**.",
            },
          ],
          niveaus: {
            basis: "kat eindigt op de t.",
            simpeler: "Zeg: ka... t!",
            nogSimpeler: "t",
          },
        },
      },
      {
        q: "Met welke letter begint **hond**?",
        options: ["h", "o", "d", "k"],
        answer: 0,
        wrongHints: [
          null,
          "Die klank zit in het midden.",
          "Die letter staat achteraan.",
          "Zeg het woord langzaam. Welke klank hoor je als eerste?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister vooraan",
              tekst: "Zeg langzaam: **h**-ond. De eerste klank is de **h**.",
            },
          ],
          niveaus: {
            basis: "hond begint met de h.",
            simpeler: "Zeg: h... hond!",
            nogSimpeler: "h",
          },
        },
      },
      {
        q: "Welk woord begint met dezelfde letter als **muis**?",
        options: ["mes", "bus", "pot", "zon"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg allebei hardop: m-uis en b-us. Klinkt het begin hetzelfde?",
          "Zeg allebei hardop — hoor je hetzelfde begin?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vergelijk het begin",
              tekst: "**m**-uis en **m**-es beginnen allebei met de **m**.",
            },
          ],
          niveaus: {
            basis: "muis en mes beginnen met de m.",
            simpeler: "m... muis. m... mes!",
            nogSimpeler: "mes",
          },
        },
      },
      {
        q: "Welk woord begint **niet** met de **r**?",
        options: ["lamp", "raam", "rok", "rat"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg het hardop: r-aam. Hoor je de r vooraan? Dan zoeken we verder.",
          "Dat begint wél met de r — we zoeken het woord dat NIET met de r begint.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister vooraan",
              tekst: "**r**-aam, **r**-ok, **r**-at beginnen met de **r**. **l**-amp begint met de **l**.",
            },
          ],
          niveaus: {
            basis: "lamp begint met de l, niet met de r.",
            simpeler: "l... lamp!",
            nogSimpeler: "lamp",
          },
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
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk woord rijmt op **bus**?",
        options: ["mus", "bak", "bal", "roos"],
        answer: 0,
        wrongHints: [
          null,
          "Zelfde begin — maar klinkt het einde ook hetzelfde?",
          "Zeg het hardop — klinkt het einde hetzelfde?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister naar het einde",
              tekst: "b-**us** en m-**us** eindigen allebei op **-us**. Dat rijmt!",
            },
          ],
          niveaus: {
            basis: "bus en mus rijmen.",
            simpeler: "bus... mus... zelfde einde!",
            nogSimpeler: "mus",
          },
        },
      },
      {
        q: "Welk woord rijmt op **boom**?",
        options: ["droom", "bos", "maan", "bal"],
        answer: 0,
        wrongHints: [
          null,
          "Zelfde begin — maar klinkt het einde ook hetzelfde?",
          "Zeg het hardop — klinkt het einde hetzelfde?",
          "Zeg het hardop — klinkt het einde hetzelfde?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister naar het einde",
              tekst: "b-**oom** en dr-**oom** eindigen allebei op **-oom**. Dat rijmt!",
            },
          ],
          niveaus: {
            basis: "boom en droom rijmen.",
            simpeler: "boom... droom... zelfde einde!",
            nogSimpeler: "droom",
          },
        },
      },
      {
        q: "Welk woord rijmt **niet** op **pan**?",
        options: ["pen", "man", "kan", "van"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg het hardop: pan... man. Dat klinkt hetzelfde, dus dat rijmt wél.",
          "Dat rijmt wél — we zoeken het woord dat NIET rijmt.",
          "Dat rijmt wél — we zoeken het woord dat NIET rijmt.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister naar het einde",
              tekst: "p-**an**, m-**an**, k-**an** en v-**an** rijmen. p-**en** eindigt anders.",
            },
          ],
          niveaus: {
            basis: "pen rijmt niet op pan.",
            simpeler: "pan... pen... ander einde!",
            nogSimpeler: "pen",
          },
        },
      },
      {
        q: "Maak het rijmpje af: *Er zit een muis in mijn …*",
        options: ["huis", "kast", "bed", "tas"],
        answer: 0,
        wrongHints: [null, "Klinkt dat als 'muis'?", "Klinkt dat als 'muis'?", "Klinkt dat als 'muis'?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek de muis-klank",
              tekst: "m-**uis** en h-**uis** rijmen. *Er zit een muis in mijn huis.*",
            },
          ],
          niveaus: {
            basis: "muis rijmt op huis.",
            simpeler: "muis... huis!",
            nogSimpeler: "huis",
          },
        },
      },
      {
        q: "Welk woord rijmt op **pet**?",
        options: ["net", "pot", "pen", "sok"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna hetzelfde woord — maar rijmt het?",
          "Zelfde begin — maar klinkt het einde ook hetzelfde?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister naar het einde",
              tekst: "p-**et** en n-**et** eindigen allebei op **-et**. Dat rijmt!",
            },
          ],
          niveaus: {
            basis: "pet en net rijmen.",
            simpeler: "pet... net... zelfde einde!",
            nogSimpeler: "net",
          },
        },
      },
      {
        q: "Welke twee woorden **rijmen**?",
        options: ["roos — doos", "roos — rok", "bal — bus", "vis — vos"],
        answer: 0,
        wrongHints: [
          null,
          "Zelfde begin — maar klinkt het einde ook hetzelfde?",
          "Zeg ze allebei hardop — klinkt het einde hetzelfde?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister naar het einde",
              tekst: "r-**oos** en d-**oos** eindigen allebei op **-oos**. Dat rijmt!",
            },
          ],
          niveaus: {
            basis: "roos en doos rijmen.",
            simpeler: "roos... doos... zelfde einde!",
            nogSimpeler: "roos — doos",
          },
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
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Plak de klanken aan elkaar: **p - e - n**. Welk woord is het?",
        options: ["pen", "pan", "pet", "nep"],
        answer: 0,
        wrongHints: [
          null,
          "Luister goed naar de middelste klank: e of a?",
          "Luister goed naar de laatste klank: n of t?",
          "Dat zijn dezelfde klanken, maar in de verkeerde volgorde.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Plakken",
              tekst: "p... e... n... → **pen**! Zeg de klanken steeds sneller achter elkaar.",
            },
          ],
          niveaus: {
            basis: "p-e-n is pen.",
            simpeler: "Zeg sneller: p-e-n... pen!",
            nogSimpeler: "pen",
          },
        },
      },
      {
        q: "Plak de klanken aan elkaar: **r - aa - m**. Welk woord is het?",
        options: ["raam", "ram", "maar", "room"],
        answer: 0,
        wrongHints: [
          null,
          "Luister: is het een korte a of een lange aa?",
          "Dat zijn dezelfde klanken in de verkeerde volgorde.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Plakken",
              tekst: "r... aa... m... → **raam**! Zeg de klanken steeds sneller achter elkaar.",
            },
          ],
          niveaus: {
            basis: "r-aa-m is raam.",
            simpeler: "Zeg sneller: r-aa-m... raam!",
            nogSimpeler: "raam",
          },
        },
      },
      {
        q: "Hak het woord **kip** in stukjes. Wat hoor je?",
        options: ["k - i - p", "k - a - p", "k - i - t", "t - i - p"],
        answer: 0,
        wrongHints: [
          null,
          "Luister naar de middelste klank: i of a?",
          "Luister naar de laatste klank: p of t?",
          "Luister naar de eerste klank: k of t?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Hakken",
              tekst: "kip → **k... i... p**. Zeg elke klank los.",
            },
          ],
          niveaus: {
            basis: "kip is k-i-p.",
            simpeler: "k... i... p!",
            nogSimpeler: "k - i - p",
          },
        },
      },
      {
        q: "Hoeveel klanken hoor je in **lamp**?",
        options: ["4", "3", "5", "2"],
        answer: 0,
        wrongHints: [
          null,
          "Hak maar: l... a... m... p. Tel nog eens.",
          "Hak maar: l... a... m... p. Tel nog eens.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Hakken en tellen",
              tekst: "l... a... m... p... = **4** klanken. Tel op je vingers mee!",
            },
          ],
          niveaus: {
            basis: "lamp heeft 4 klanken: l-a-m-p.",
            simpeler: "l (1)... a (2)... m (3)... p (4)!",
            nogSimpeler: "4",
          },
        },
      },
      {
        q: "Welke klank hoor je in het **midden** van **pot**?",
        options: ["o", "p", "t", "a"],
        answer: 0,
        wrongHints: [
          null,
          "Die klank zit vooraan.",
          "Die klank zit achteraan.",
          "Zeg het woord langzaam: p... o... t. Wat hoor je in het midden?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Hakken",
              tekst: "pot → p... **o**... t. In het midden hoor je de **o**.",
            },
          ],
          niveaus: {
            basis: "In het midden van pot hoor je de o.",
            simpeler: "p... o... t!",
            nogSimpeler: "o",
          },
        },
      },
      {
        q: "Plak de klanken aan elkaar: **m - ui - s**. Welk woord is het?",
        options: ["muis", "mus", "huis", "muur"],
        answer: 0,
        wrongHints: [
          null,
          "Luister goed naar de middelste klank: ui of u?",
          "Luister naar de eerste klank: m of h?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Plakken",
              tekst: "m... ui... s... → **muis**! Zeg de klanken steeds sneller achter elkaar.",
            },
          ],
          niveaus: {
            basis: "m-ui-s is muis.",
            simpeler: "Zeg sneller: m-ui-s... muis!",
            nogSimpeler: "muis",
          },
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
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk woord is een **dier**?",
        options: ["geit", "deur", "tas", "bank"],
        answer: 0,
        wrongHints: [null, "Daar loop je doorheen.", null, "Daar zit je op."],
        uitlegPad: {
          stappen: [
            {
              titel: "Lezen en denken",
              tekst: "g-ei-t → **geit**. Een geit is een dier.",
            },
          ],
          niveaus: {
            basis: "Een geit is een dier.",
            simpeler: "Lees: g... ei... t.",
            nogSimpeler: "geit",
          },
        },
      },
      {
        q: "Waar **slaap** je in?",
        options: ["bed", "bad", "bel", "bes"],
        answer: 0,
        wrongHints: [null, "Lees goed: e of a? Daar ga je in om je te wassen.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Lezen en denken",
              tekst: "b-e-d → **bed**. In je bed slaap je.",
            },
          ],
          niveaus: {
            basis: "Je slaapt in je bed.",
            simpeler: "Lees: b... e... d.",
            nogSimpeler: "bed",
          },
        },
      },
      {
        q: "Wat doe je aan je **voet**?",
        options: ["sok", "soep", "sap", "sla"],
        answer: 0,
        wrongHints: [null, "Dat eet je uit een bord.", "Dat drink je.", "Dat eet je."],
        uitlegPad: {
          stappen: [
            {
              titel: "Lezen en denken",
              tekst: "s-o-k → **sok**. Die doe je aan je voet.",
            },
          ],
          niveaus: {
            basis: "Een sok doe je aan je voet.",
            simpeler: "Lees: s... o... k.",
            nogSimpeler: "sok",
          },
        },
      },
      {
        q: "Wat kun je **lezen**?",
        options: ["boek", "boer", "boom", "boot"],
        answer: 0,
        wrongHints: [null, "Dat is een man of vrouw met koeien.", null, "Daar vaar je mee."],
        uitlegPad: {
          stappen: [
            {
              titel: "Lezen en denken",
              tekst: "b-oe-k → **boek**. Een boek kun je lezen.",
            },
          ],
          niveaus: {
            basis: "Een boek kun je lezen.",
            simpeler: "Lees: b... oe... k.",
            nogSimpeler: "boek",
          },
        },
      },
      {
        q: "Welk woord is een **getal**?",
        options: ["tien", "tent", "teen", "tak"],
        answer: 0,
        wrongHints: [null, "Daar slaap je in op de camping.", "Die zit aan je voet.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Lezen en denken",
              tekst: "t-ie-n → **tien**. Tien is een getal.",
            },
          ],
          niveaus: {
            basis: "Tien is een getal.",
            simpeler: "Lees: t... ie... n.",
            nogSimpeler: "tien",
          },
        },
      },
      {
        q: "Wat **vliegt** in de lucht?",
        options: ["mug", "mol", "muis", "mes"],
        answer: 0,
        wrongHints: [null, "Die graaft onder de grond.", "Die rent over de grond.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Lezen en denken",
              tekst: "m-u-g → **mug**. Een mug vliegt in de lucht.",
            },
          ],
          niveaus: {
            basis: "Een mug vliegt.",
            simpeler: "Lees: m... u... g.",
            nogSimpeler: "mug",
          },
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
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Lees: *ik heb een rode pet.* — **Wat** heb ik?",
        options: ["een pet", "een tas", "een bal", "een sok"],
        answer: 0,
        wrongHints: [
          null,
          "Lees het laatste woord nog eens.",
          "Lees het laatste woord nog eens.",
          "Lees het laatste woord nog eens.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek in de zin",
              tekst: "ik - heb - een - rode - **pet**. Ik heb een pet!",
            },
          ],
          niveaus: {
            basis: "Ik heb een rode pet.",
            simpeler: "Het staat achteraan de zin.",
            nogSimpeler: "een pet",
          },
        },
      },
      {
        q: "Lees: *ik zie drie eenden.* — **Hoeveel** eenden zie ik?",
        options: ["drie", "twee", "vier", "één"],
        answer: 0,
        wrongHints: [
          null,
          "Lees het woord voor 'eenden' nog eens.",
          "Lees het woord voor 'eenden' nog eens.",
          "Lees het woord voor 'eenden' nog eens.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Woord voor woord",
              tekst: "ik - zie - **drie** - eenden. Ik zie drie eenden!",
            },
          ],
          niveaus: {
            basis: "Ik zie drie eenden.",
            simpeler: "Kijk naar het woord vóór eenden.",
            nogSimpeler: "drie",
          },
        },
      },
      {
        q: "Lees: *papa bakt een taart.* — **Wie** bakt een taart?",
        options: ["papa", "mama", "oma", "ik"],
        answer: 0,
        wrongHints: [
          null,
          "Lees nog eens: staat dat woord in de zin?",
          "Lees nog eens: staat dat woord in de zin?",
          "Lees nog eens: staat dat woord in de zin?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Woord voor woord",
              tekst: "**papa** - bakt - een - taart. Wie bakt? **Papa**!",
            },
          ],
          niveaus: {
            basis: "Papa bakt een taart.",
            simpeler: "Lees het eerste woord.",
            nogSimpeler: "papa",
          },
        },
      },
      {
        q: "Lees: *de zon is heet.* — **Wat** is heet?",
        options: ["de zon", "de maan", "de soep", "de thee"],
        answer: 0,
        wrongHints: [
          null,
          "Lees nog eens: staat dat woord in de zin?",
          "Lees nog eens: staat dat woord in de zin?",
          "Lees nog eens: staat dat woord in de zin?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Woord voor woord",
              tekst: "de - **zon** - is - heet. Wat is heet? **De zon**!",
            },
          ],
          niveaus: {
            basis: "De zon is heet.",
            simpeler: "Lees de eerste twee woorden.",
            nogSimpeler: "de zon",
          },
        },
      },
      {
        q: "Lees: *ik ga in bad.* — **Waar** ga ik in?",
        options: ["in bad", "in bed", "in de tent", "in de auto"],
        answer: 0,
        wrongHints: [
          null,
          "Lees goed: e of a?",
          "Lees het laatste woord nog eens.",
          "Lees het laatste woord nog eens.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek in de zin",
              tekst: "ik - ga - in - **bad**. Ik ga in bad!",
            },
          ],
          niveaus: {
            basis: "Ik ga in bad.",
            simpeler: "Het staat achteraan de zin.",
            nogSimpeler: "in bad",
          },
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
