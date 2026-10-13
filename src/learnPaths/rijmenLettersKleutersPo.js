// Leerpad: Rijmen en letters — groep 1-2 PO (kleuters, 4-6 jaar).
// Beginnende geletterdheid: rijmen, klanken horen, letters herkennen, woordenschat.
// Doelgroep kan nog niet lezen: korte vragen, emoji als beelddragers,
// alles bedoeld om voorgelezen te worden (voorlees-knop).
// 5 stappen × ~4-5 checks — spelend leren, ~15 min.

const stepEmojis = ["🎵", "👂", "🔠", "🍎", "🎈"];

const chapters = [
  { letter: "A", title: "Rijmen", emoji: "🎵", from: 0, to: 0 },
  { letter: "B", title: "Klanken horen", emoji: "👂", from: 1, to: 1 },
  { letter: "C", title: "Letters herkennen", emoji: "🔠", from: 2, to: 2 },
  { letter: "D", title: "Woorden kennen", emoji: "🍎", from: 3, to: 3 },
  { letter: "E", title: "Letter-feestje!", emoji: "🎈", from: 4, to: 4 },
];

const steps = [
  // ─── A. Rijmen ────────────────────────────────────────────
  {
    title: "Rijmen — woorden die hetzelfde klinken",
    explanation:
      "Rijmen is een spelletje met woorden! 🎵\n\n" +
      "Twee woorden **rijmen** als het einde **hetzelfde klinkt**:\n" +
      "• kat 🐱 — rat 🐀 (allebei *at*!)\n" +
      "• muis 🐭 — huis 🏠 (allebei *uis*!)\n" +
      "• beer 🐻 — peer 🍐 (allebei *eer*!)\n\n" +
      "**Zo doe je het**: zeg de woorden hardop en luister goed naar het einde. 👂\n\n" +
      "Klaar? Daar gaan we! 🎉",
    checks: [
      {
        q: "Wat rijmt op **kat** 🐱?",
        options: ["rat 🐀", "hond 🐶", "vis 🐟", "boot ⛵"],
        answer: 0,
        wrongHints: [null, "Zeg de woorden hardop: kat... hond... Klinken de eindes hetzelfde?", "Luister naar het einde: kat... vis... Hoor je hetzelfde stukje?", "Zeg ze samen hardop — welk woord eindigt net als *kat*?"],
        uitlegPad: {
          stappen: [{ titel: "Luister naar het einde", tekst: "Zeg het hardop: k-**at** 🐱 en r-**at** 🐀. Hoor je het? Allebei *at*! Dat is rijmen. 🎵" }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Nog meer *at*-woorden: kat, rat, mat, gat. Allemaal rijm-vriendjes!" }],
          niveaus: {
            basis: "Kat en rat rijmen — allebei eindigen ze op *at*. 🐱🐀",
            simpeler: "Zeg hardop: kat... rat... Het einde klinkt hetzelfde!",
            nogSimpeler: "rat 🐀",
          },
        },
      },
      {
        q: "Wat rijmt op **muis** 🐭?",
        options: ["huis 🏠", "kaas 🧀", "poes 🐈", "boom 🌳"],
        answer: 0,
        wrongHints: [null, "Een muis is er dol op — maar luister: klinkt het einde hetzelfde als *muis*?", "Zeg ze hardop: muis... poes... Eindigen ze op hetzelfde stukje?", "Luister goed naar het einde van elk woord — welk woord klinkt als *uis*?"],
        uitlegPad: {
          stappen: [{ titel: "Zoek het *uis*-stukje", tekst: "M-**uis** 🐭 en h-**uis** 🏠 — allebei *uis*! Zeg het maar hardop, dan hoor je het. 👂" }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Een muis in een huis — dat rijmt én is een grappig zinnetje! 😄" }],
          niveaus: {
            basis: "Muis en huis rijmen — allebei *uis*. 🐭🏠",
            simpeler: "Zeg hardop: muis... huis... Hetzelfde einde!",
            nogSimpeler: "huis 🏠",
          },
        },
      },
      {
        q: "Wat rijmt op **beer** 🐻?",
        options: ["peer 🍐", "appel 🍎", "eend 🦆", "bal ⚽"],
        answer: 0,
        wrongHints: [null, "Zeg ze hardop: beer... appel... Klinkt het einde hetzelfde?", "Luister naar het laatste stukje — hoor je *eer*?", "Zeg de woorden langzaam — welk woord eindigt net als *beer*?"],
        uitlegPad: {
          stappen: [{ titel: "Hoor je *eer*?", tekst: "B-**eer** 🐻 en p-**eer** 🍐 — allebei eindigen ze op *eer*. Rijm gevonden! 🎵" }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Een beer met een peer — zeg het maar drie keer snel! 😄" }],
          niveaus: {
            basis: "Beer en peer rijmen — allebei *eer*. 🐻🍐",
            simpeler: "Zeg hardop: beer... peer... Hetzelfde einde!",
            nogSimpeler: "peer 🍐",
          },
        },
      },
      {
        q: "Wat rijmt op **maan** 🌙?",
        options: ["banaan 🍌", "ster ⭐", "zon ☀️", "boek 📖"],
        answer: 0,
        wrongHints: [null, "Die staat ook in de lucht — maar luister: klinkt het einde als *aan*?", "Zeg ze hardop: maan... zon... Hoor je hetzelfde einde?", "Luister goed — welk woord eindigt op *aan*?"],
        uitlegPad: {
          stappen: [{ titel: "Lange woorden rijmen ook", tekst: "M-**aan** 🌙 en ban-**aan** 🍌 — allebei *aan*! Een lang woord kan óók rijmen, als het einde maar hetzelfde klinkt. 👂" }],
          niveaus: {
            basis: "Maan en banaan rijmen — allebei *aan*. 🌙🍌",
            simpeler: "Zeg hardop: maan... banaan... Hetzelfde einde!",
            nogSimpeler: "banaan 🍌",
          },
        },
      },
      {
        q: "Welke twee woorden rijmen?",
        options: ["boot ⛵ en poot 🐾", "kat 🐱 en hond 🐶", "beer 🐻 en muis 🐭", "zon ☀️ en maan 🌙"],
        answer: 0,
        wrongHints: [null, "Dat zijn allebei dieren — maar zeg ze hardop: klinken de eindes hetzelfde?", "Zeg ze langzaam: beer... muis... Hoor je hetzelfde einde?", "Die horen allebei bij de lucht — maar luister: eindigen ze op hetzelfde stukje?"],
        uitlegPad: {
          stappen: [{ titel: "Rijm-paren zoeken", tekst: "B-**oot** ⛵ en p-**oot** 🐾 — allebei *oot*! Woorden rijmen als het EINDE hetzelfde klinkt, niet als ze bij elkaar horen. 🎵" }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Kat en hond horen bij elkaar (dieren!), maar ze rijmen niet. Boot en poot rijmen wél." }],
          niveaus: {
            basis: "Boot en poot rijmen — allebei *oot*. ⛵🐾",
            simpeler: "Zeg hardop: boot... poot... Hetzelfde einde!",
            nogSimpeler: "boot ⛵ en poot 🐾",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat rijmt op **sok** 🧦?",
        options: ["klok 🕰️", "jas 🧥", "hand ✋", "schoen 👟"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg ze hardop: sok... jas... Klinkt het einde hetzelfde?",
          null,
          "Luister naar het laatste stukje — hoor je *ok*?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister naar het einde",
              tekst: "Zeg het hardop: s-**ok** 🧦 en kl-**ok** 🕰️. Hoor je het? Allebei *ok*! Dat is rijmen. 🎵",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Nog meer *ok*-woorden: sok, klok, rok. Allemaal rijm-vriendjes!",
            },
          ],
          niveaus: {
            basis: "Sok en klok rijmen — allebei eindigen ze op *ok*. 🧦🕰️",
            simpeler: "Zeg hardop: sok... klok... Het einde klinkt hetzelfde!",
            nogSimpeler: "klok 🕰️",
          },
        },
      },
      {
        q: "Wat rijmt op **pan** 🍳?",
        options: ["man 👨", "lepel 🥄", "vork 🍴", "bord 🍽️"],
        answer: 0,
        wrongHints: [
          null,
          "Die hoort ook in de keuken — maar luister: klinkt het einde als *an*?",
          "Zeg ze hardop: pan... vork... Hoor je hetzelfde einde?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister naar het einde",
              tekst: "Zeg het hardop: p-**an** 🍳 en m-**an** 👨. Allebei *an*! Dat is rijmen. 🎵",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Nog meer *an*-woorden: pan, man, kan. Allemaal rijm-vriendjes!",
            },
          ],
          niveaus: {
            basis: "Pan en man rijmen — allebei eindigen ze op *an*. 🍳👨",
            simpeler: "Zeg hardop: pan... man... Het einde klinkt hetzelfde!",
            nogSimpeler: "man 👨",
          },
        },
      },
      {
        q: "Wat rijmt op **koek** 🍪?",
        options: ["boek 📖", "melk 🥛", "kaas 🧀", "taart 🎂"],
        answer: 0,
        wrongHints: [
          null,
          "Lekker bij een koek — maar zeg ze hardop: klinkt het einde hetzelfde?",
          null,
          "Zeg de woorden langzaam — welk woord eindigt net als *koek*?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister naar het einde",
              tekst: "Zeg het hardop: k-**oek** 🍪 en b-**oek** 📖. Allebei *oek*! Dat is rijmen. 🎵",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Nog meer *oek*-woorden: koek, boek, doek. Allemaal rijm-vriendjes!",
            },
          ],
          niveaus: {
            basis: "Koek en boek rijmen — allebei eindigen ze op *oek*. 🍪📖",
            simpeler: "Zeg hardop: koek... boek... Het einde klinkt hetzelfde!",
            nogSimpeler: "boek 📖",
          },
        },
      },
      {
        q: "Wat rijmt op **roos** 🌹?",
        options: ["doos 📦", "bloem 🌸", "blad 🍃", "gras 🌱"],
        answer: 0,
        wrongHints: [
          null,
          "Een roos is óók een bloem — maar luister: klinkt het einde als *oos*?",
          "Zeg ze hardop: roos... blad... Hoor je hetzelfde einde?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister naar het einde",
              tekst: "Zeg het hardop: r-**oos** 🌹 en d-**oos** 📦. Allebei *oos*! Dat is rijmen. 🎵",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Rijmen gaat om het **einde** van het woord. Roos en doos eindigen allebei op *oos*.",
            },
          ],
          niveaus: {
            basis: "Roos en doos rijmen — allebei eindigen ze op *oos*. 🌹📦",
            simpeler: "Zeg hardop: roos... doos... Het einde klinkt hetzelfde!",
            nogSimpeler: "doos 📦",
          },
        },
      },
      {
        q: "**Mond** 👄 rijmt op een dier. Welk dier?",
        options: ["hond 🐶", "kat 🐱", "koe 🐮", "vis 🐟"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg ze hardop: mond... kat... Klinken de eindes hetzelfde?",
          "Luister naar het einde: mond... koe... Hoor je hetzelfde stukje?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister naar het einde",
              tekst: "Zeg het hardop: m-**ond** 👄 en h-**ond** 🐶. Allebei *ond*! Dat is rijmen. 🎵",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Nog meer *ond*-woorden: mond, hond, rond. Allemaal rijm-vriendjes!",
            },
          ],
          niveaus: {
            basis: "Mond en hond rijmen — allebei eindigen ze op *ond*. 👄🐶",
            simpeler: "Zeg hardop: mond... hond... Het einde klinkt hetzelfde!",
            nogSimpeler: "hond 🐶",
          },
        },
      },
    ],
  },

  // ─── B. Klanken horen ─────────────────────────────────────
  {
    title: "Klanken horen — luister goed!",
    explanation:
      "Elk woord is gemaakt van **klanken**. 👂\n\n" +
      "• Zeg *appel* 🍎 heel langzaam: **aaa**-ppel. Hoor je de *a* vooraan?\n" +
      "• Zeg *slang* 🐍: **sss**-lang. Daar zit de *s*!\n\n" +
      "En je kunt woorden in **stukjes klappen** 👏:\n" +
      "• ba-naan 🍌 = klap, klap = 2 stukjes!\n" +
      "• o-li-fant 🐘 = klap, klap, klap = 3 stukjes!\n\n" +
      "Doe maar mee met je handen! 👏",
    checks: [
      {
        q: "Met welke klank begint **appel** 🍎?",
        options: ["a", "b", "s", "m"],
        answer: 0,
        wrongHints: [null, "Zeg het heel langzaam en luister naar de allereerste klank. Hoor je een *b*?", "Ssss klinkt als een slang — hoor je dat aan het begin van *appel*?", "Mmm zeg je bij lekker eten — maar hoor je dat vooraan in *appel*?"],
        uitlegPad: {
          stappen: [{ titel: "Zeg het langzaam", tekst: "Zeg heel langzaam: **aaa**-ppel 🍎. De allereerste klank die je hoort is de **a**! 👂" }],
          niveaus: {
            basis: "Appel begint met de klank *a*. 🍎",
            simpeler: "Zeg langzaam: aaa-ppel. Hoor je de *a* vooraan?",
            nogSimpeler: "a",
          },
        },
      },
      {
        q: "Met welke klank begint **slang** 🐍?",
        options: ["s", "k", "b", "o"],
        answer: 0,
        wrongHints: [null, "Zeg het heel langzaam — hoor je een *k* aan het begin?", "Zeg *slang* hardop — hoor je een *b* aan het begin?", "Zeg het nog eens langzaam — begint het met *o*?"],
        uitlegPad: {
          stappen: [{ titel: "Sss als een slang", tekst: "Zeg langzaam: **sss**-lang 🐍. Hoor je dat? Het klinkt zelfs als een slang: sssss! De eerste klank is de **s**. 👂" }],
          niveaus: {
            basis: "Slang begint met de klank *s* — sssss! 🐍",
            simpeler: "Zeg langzaam: sss-lang. De *s* komt eerst!",
            nogSimpeler: "s",
          },
        },
      },
      {
        q: "Klap mee 👏: **ba-naan** 🍌 — hoeveel stukjes?",
        options: ["2", "1", "3", "4"],
        answer: 0,
        wrongHints: [null, "Klap bij elk stukje: ba 👏 ... en dan komt er nog wat! Klap nog eens mee.", "Zeg het langzaam en klap: ba... naan... Tel je klappen!", "Dat zijn wel heel veel klappen — probeer het nog eens langzaam: ba... naan..."],
        uitlegPad: {
          stappen: [{ titel: "Klappen en tellen", tekst: "Zeg het woord in stukjes en klap mee: **ba** 👏 **naan** 👏. Twee klappen = **2 stukjes**! 🍌" }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Probeer ook eens: **po** 👏 **pen** 👏 = 2 stukjes. En **kip** 👏 = maar 1 stukje!" }],
          niveaus: {
            basis: "Ba-naan = 2 stukjes: ba 👏 naan 👏.",
            simpeler: "Klap mee: ba 👏 naan 👏. Twee klappen!",
            nogSimpeler: "2",
          },
        },
      },
      {
        q: "Klap mee 👏: **o-li-fant** 🐘 — hoeveel stukjes?",
        options: ["3", "2", "1", "4"],
        answer: 0,
        wrongHints: [null, "Klap nog eens mee: o... li... en er komt nog een stukje!", "Eén klap maar? Zeg het langzaam: o... li... fant... en klap bij elk stukje.", "Dat is één klap te veel — probeer het nog eens rustig."],
        uitlegPad: {
          stappen: [{ titel: "Drie klappen", tekst: "Zeg het langzaam en klap: **o** 👏 **li** 👏 **fant** 👏. Drie klappen = **3 stukjes**! 🐘" }],
          niveaus: {
            basis: "O-li-fant = 3 stukjes: o 👏 li 👏 fant 👏.",
            simpeler: "Klap mee: o 👏 li 👏 fant 👏. Drie klappen!",
            nogSimpeler: "3",
          },
        },
      },
      {
        q: "Welk woord begint met de klank **m**?",
        options: ["maan 🌙", "zon ☀️", "bal ⚽", "vis 🐟"],
        answer: 0,
        wrongHints: [null, "Zeg het langzaam: zzz-on. Hoor je een *m* vooraan?", "Zeg het langzaam: b-al. Welke klank hoor je eerst?", "Zeg het langzaam: vvv-is. Is dat de *m*?"],
        uitlegPad: {
          stappen: [{ titel: "Mmm-aan", tekst: "Zeg alle woorden langzaam en luister naar de eerste klank. **Mmm**-aan 🌙 — die begint met de **m**! 👂" }],
          niveaus: {
            basis: "Maan begint met de klank *m* — mmm-aan. 🌙",
            simpeler: "Zeg langzaam: mmm-aan. Hoor je de *m*?",
            nogSimpeler: "maan 🌙",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Met welke klank begint **lamp** 💡?",
        options: ["l", "m", "s", "k"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg het heel langzaam — hoor je een *m* aan het begin?",
          null,
          "Zeg *lamp* nog eens hardop — welke klank komt het allereerst?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zeg het langzaam",
              tekst: "Zeg heel langzaam: **lll**-amp 💡. De allereerste klank die je hoort is de **l**! 👂",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Nog meer woorden met *l* vooraan: lamp, lepel, leeuw.",
            },
          ],
          niveaus: {
            basis: "Lamp begint met de klank *l*. 💡",
            simpeler: "Zeg langzaam: lll-amp. Hoor je de *l* vooraan?",
            nogSimpeler: "l",
          },
        },
      },
      {
        q: "Klap mee 👏: **kip** 🐔 — hoeveel stukjes?",
        options: ["1", "2", "3", "4"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg het langzaam en klap: kip... Komt er nog een stukje achteraan?",
          "Dat zijn wel heel veel klappen — zeg het nog eens rustig: kip.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Klap bij elk stukje",
              tekst: "Zeg het langzaam en klap mee: **kip** 👏. Dat is maar één klap! Kip is een kort woord: **1 stukje**.",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Ba-naan 🍌 heeft 2 klappen. Kip 🐔 heeft er maar 1.",
            },
          ],
          niveaus: {
            basis: "Kip = één klap = 1 stukje. 🐔",
            simpeler: "Zeg kip en klap één keer. Klaar!",
            nogSimpeler: "1",
          },
        },
      },
      {
        q: "Klap mee 👏: **ko-nijn** 🐰 — hoeveel stukjes?",
        options: ["2", "1", "3", "4"],
        answer: 0,
        wrongHints: [
          null,
          "Klap bij elk stukje: ko 👏 ... en dan komt er nog wat! Klap nog eens mee.",
          "Zeg het langzaam en klap: ko... nijn... Tel je klappen!",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Klap bij elk stukje",
              tekst: "Zeg het langzaam en klap mee: **ko** 👏 - **nijn** 👏. Twee klappen = **2 stukjes**!",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Ba-naan 🍌 heeft ook 2 stukjes, net als ko-nijn 🐰.",
            },
          ],
          niveaus: {
            basis: "Ko-nijn = klap, klap = 2 stukjes. 🐰",
            simpeler: "Zeg ko... nijn... en klap mee. Twee klappen!",
            nogSimpeler: "2",
          },
        },
      },
      {
        q: "Met welke klank begint **oma** 👵?",
        options: ["o", "a", "m", "b"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg het heel langzaam en luister naar de allereerste klank. Hoor je een *a*?",
          "Mmm hoor je wel in *oma* — maar komt die als allereerste?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zeg het langzaam",
              tekst: "Zeg heel langzaam: **ooo**-ma 👵. De allereerste klank die je hoort is de **o**! 👂",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Hoor je de *m* ook? Die komt pas daarna: o-**m**-a.",
            },
          ],
          niveaus: {
            basis: "Oma begint met de klank *o*. 👵",
            simpeler: "Zeg langzaam: ooo-ma. Hoor je de *o* vooraan?",
            nogSimpeler: "o",
          },
        },
      },
    ],
  },

  // ─── C. Letters herkennen ─────────────────────────────────
  {
    title: "Letters herkennen — kijk goed!",
    explanation:
      "Klanken kun je ook **zien** — dan heten ze **letters**! 🔠\n\n" +
      "• De klank *sss* 🐍 schrijf je zo: **s**.\n" +
      "• De klank *mmm* schrijf je zo: **m**.\n\n" +
      "Sommige letters lijken op elkaar — kijk dus goed! 👀\n\n" +
      "En wist je dit? Een **grote letter** en een **kleine letter** zijn dezelfde letter: **A** en **a** zijn allebei de *a*!\n\n" +
      "Jouw naam begint ook met een letter. Weet jij welke? 😊",
    checks: [
      {
        q: "Kijk goed 👀 — welke letter is dit: **m**?",
        options: ["m", "n", "w", "u"],
        answer: 0,
        wrongHints: [null, "Bijna! Tel de boogjes — heeft de letter hierboven er net zo veel?", "Kijk nog eens: staan de boogjes bij deze letter dezelfde kant op als hierboven?", "Leg ze naast elkaar in je hoofd — zijn de vormen precies hetzelfde?"],
        uitlegPad: {
          stappen: [{ titel: "Kijk naar de boogjes", tekst: "De **m** heeft **twee boogjes** naar beneden — als twee heuveltjes ⛰️. Zeg er maar bij: *mmm*!" }],
          voorbeelden: [{ type: "voorbeeld", tekst: "De *n* heeft maar één boogje. De *m* heeft er twee. Tel maar na! 👀" }],
          niveaus: {
            basis: "Dit is de m — twee boogjes, klinkt als *mmm*.",
            simpeler: "Tel de boogjes: twee heuveltjes = m.",
            nogSimpeler: "m",
          },
        },
      },
      {
        q: "In welk woord zie je de letter **s**? 👀",
        options: ["sok 🧦", "bal ⚽", "kip 🐔", "eend 🦆"],
        answer: 0,
        wrongHints: [null, "Kijk letter voor letter: b-a-l. Zie je ergens een kronkeltje zoals de *s*?", "Kijk goed naar k-i-p — staat daar een *s* tussen?", "Zoek het kronkeltje van de *s* — zie je het in dit woord?"],
        uitlegPad: {
          stappen: [{ titel: "Zoek het kronkeltje", tekst: "De **s** is een kronkeltje, net een slangetje 🐍. Kijk naar **s**-o-k 🧦: daar staat hij, helemaal vooraan!" }],
          niveaus: {
            basis: "In *sok* zie je de s — helemaal vooraan. 🧦",
            simpeler: "De s is een kronkeltje 🐍. Kijk: s-o-k!",
            nogSimpeler: "sok 🧦",
          },
        },
      },
      {
        q: "Welke kleine letter hoort bij de grote **B**?",
        options: ["b", "d", "p", "q"],
        answer: 0,
        wrongHints: [null, "Kijk goed naar het buikje — zit het aan dezelfde kant als bij de B?", "Het stokje van deze letter wijst naar beneden — klopt dat met de B?", "Draai je hoofd eens — staat deze letter er net zo bij als de B?"],
        uitlegPad: {
          stappen: [
            { titel: "Grote en kleine letter", tekst: "Elke letter heeft een **grote** en een **kleine** vorm — maar het blijft dezelfde letter! **B** en **b** zijn allebei de *b*. 🔠" },
            { titel: "Kijk naar het buikje", tekst: "Bij de kleine **b** zit het buikje rechts van het stokje, net als bij de grote **B**. De *d*, *p* en *q* lijken erop, maar staan nét anders. 👀" },
          ],
          niveaus: {
            basis: "B en b zijn dezelfde letter — groot en klein.",
            simpeler: "Kijk naar het buikje: bij de b zit het rechts, net als bij B.",
            nogSimpeler: "b",
          },
        },
      },
      {
        q: "Welke letter staat vooraan in **maan** 🌙?",
        options: ["m", "n", "a", "b"],
        answer: 0,
        wrongHints: [null, "Bijna — tel de boogjes van de eerste letter nog eens!", "Die letter zit wél in *maan*, maar niet vooraan. Kijk naar de allereerste letter.", "Zeg het woord langzaam en kijk dan naar de allereerste letter."],
        uitlegPad: {
          stappen: [{ titel: "Eerste letter = eerste klank", tekst: "Zeg langzaam: **mmm**-aan 🌙. Je hoort de *m* — en kijk: **m**-a-a-n, daar staat hij vooraan! Horen en zien horen bij elkaar. 👂👀" }],
          niveaus: {
            basis: "Maan begint met de letter m: m-a-a-n. 🌙",
            simpeler: "Zeg mmm-aan en kijk naar de eerste letter: m!",
            nogSimpeler: "m",
          },
        },
      },
      {
        q: "In welk woord zie je de letter **a**? 👀",
        options: ["kat 🐱", "vis 🐟", "bus 🚌", "pen ✏️"],
        answer: 0,
        wrongHints: [null, "Kijk letter voor letter: v-i-s. Zie je een rondje met een stokje, zoals de *a*?", "Kijk goed naar b-u-s — staat daar een *a* tussen?", "Zoek het rondje van de *a* — zie je het in dit woord?"],
        uitlegPad: {
          stappen: [{ titel: "Zoek de a", tekst: "De **a** is een rondje met een stokje ernaast. Kijk naar k-**a**-t 🐱: daar zit hij, in het midden! Zit de *a* ook in jouw naam? Kijk maar eens samen thuis. 😊" }],
          niveaus: {
            basis: "In *kat* zit de a: k-a-t. 🐱",
            simpeler: "De a is een rondje met een stokje. Kijk: k-a-t!",
            nogSimpeler: "kat 🐱",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke kleine letter hoort bij de grote **A**?",
        options: ["a", "o", "e", "u"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk goed: heeft deze letter ook een stokje aan de kant, zoals de *a*?",
          null,
          "Leg ze naast elkaar in je hoofd — klinkt deze letter als *aaa*?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Groot en klein",
              tekst: "De grote **A** en de kleine **a** zijn **dezelfde letter**! Ze klinken allebei als *aaa*. 🔠",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Zo hoort de grote **B** bij de kleine **b**, en de grote **M** bij de kleine **m**.",
            },
          ],
          niveaus: {
            basis: "A en a zijn dezelfde letter: de *a*.",
            simpeler: "Grote A, kleine a — allebei de *a*!",
            nogSimpeler: "a",
          },
        },
      },
      {
        q: "In welk woord zie je de letter **o**? 👀",
        options: ["boot ⛵", "kip 🐔", "bus 🚌", "vis 🐟"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk letter voor letter: k-i-p. Zie je ergens een dicht rondje zoals de *o*?",
          "Kijk goed naar b-u-s — staat daar een *o* tussen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek het rondje",
              tekst: "Kijk letter voor letter: b-**o**-**o**-t ⛵. Daar staat de **o** zelfs twee keer! 👀",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "In *kip* zie je k-i-p. Daar zit geen *o* in.",
            },
          ],
          niveaus: {
            basis: "In *boot* zie je de o — zelfs twee keer! ⛵",
            simpeler: "b-o-o-t: zie je de rondjes?",
            nogSimpeler: "boot ⛵",
          },
        },
      },
      {
        q: "Welke grote letter hoort bij de kleine **m**?",
        options: ["M", "N", "W", "H"],
        answer: 0,
        wrongHints: [
          null,
          "Tel de bergjes — heeft deze letter er net zo veel als de *m*?",
          "Kijk goed: staat deze letter niet op zijn kop?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Groot en klein",
              tekst: "De kleine **m** en de grote **M** zijn **dezelfde letter**! Ze klinken allebei als *mmm*. 🔠",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Zo hoort de kleine **a** bij de grote **A**, en de kleine **b** bij de grote **B**.",
            },
          ],
          niveaus: {
            basis: "m en M zijn dezelfde letter: de *m*.",
            simpeler: "Kleine m, grote M — allebei *mmm*!",
            nogSimpeler: "M",
          },
        },
      },
    ],
  },

  // ─── D. Woorden kennen ────────────────────────────────────
  {
    title: "Woorden kennen — wat hoort bij elkaar?",
    explanation:
      "Hoe meer woorden je kent, hoe leuker praten en voorlezen wordt! 💬\n\n" +
      "**Sommige woorden horen bij elkaar**:\n" +
      "• appel 🍎 en banaan 🍌 → allebei **fruit**!\n" +
      "• hond 🐶 en poes 🐈 → allebei **dieren**!\n\n" +
      "**En sommige woorden zijn juist elkaars tegendeel**:\n" +
      "• groot 🐘 en klein 🐭\n" +
      "• warm ☀️ en koud ❄️\n\n" +
      "Kijk goed naar de plaatjes en denk mee! 👀",
    checks: [
      {
        q: "Appel 🍎 en banaan 🍌 — wat zijn dat allebei?",
        options: ["fruit 🍇", "dieren 🐾", "speelgoed 🧸", "kleren 👕"],
        answer: 0,
        wrongHints: [null, "Kunnen een appel en een banaan lopen of geluid maken? Denk nog eens na!", "Speel je met een appel, of doe je er iets anders mee?", "Trek je een banaan aan? Wat doe je écht met een appel en een banaan?"],
        uitlegPad: {
          stappen: [{ titel: "Wat doe je ermee?", tekst: "Een appel 🍎 en een banaan 🍌 kun je allebei **eten** — ze groeien aan een boom of plant. Zulk lekkers noemen we **fruit**! 🍇" }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Nog meer fruit: peer 🍐, aardbei 🍓, druif 🍇. Allemaal familie!" }],
          niveaus: {
            basis: "Appel en banaan zijn allebei fruit — je kunt ze eten. 🍎🍌",
            simpeler: "Je eet ze allebei — dat is fruit!",
            nogSimpeler: "fruit 🍇",
          },
        },
      },
      {
        q: "Een olifant 🐘 is groot. Een muis 🐭 is juist...",
        options: ["klein", "groot", "rood", "nat"],
        answer: 0,
        wrongHints: [null, "Kijk naar de plaatjes: past een muis in jouw hand? En een olifant?", "Gaat de vraag over kleur? Kijk nog eens goed wat er gevraagd wordt.", "Gaat de vraag over water? Denk aan hoe groot of klein een muis is."],
        uitlegPad: {
          stappen: [{ titel: "Tegendeel", tekst: "Groot en **klein** zijn elkaars **tegendeel** — net als warm ☀️ en koud ❄️. Een olifant 🐘 is heel groot, een muis 🐭 past in je hand: die is **klein**!" }],
          niveaus: {
            basis: "Een muis is klein — het tegendeel van groot. 🐭",
            simpeler: "Olifant = groot 🐘, muis = klein 🐭.",
            nogSimpeler: "klein",
          },
        },
      },
      {
        q: "Kijk naar het plaatje 👀: 🐸 — wat is dit?",
        options: ["kikker 🐸", "vogel 🐦", "vis 🐟", "hond 🐶"],
        answer: 0,
        wrongHints: [null, "Kan dit dier vliegen? Kijk nog eens goed naar het plaatje.", "Zwemt dit dier de hele dag onder water? Wat kan het nog meer?", "Zegt dit dier *woef*? Of maakt het een ander geluid?"],
        uitlegPad: {
          stappen: [{ titel: "Kijk goed", tekst: "Dit groene dier is een **kikker** 🐸! Hij is groen, kan héél ver springen en zegt *kwaak kwaak*! 🎵" }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Doe maar na: kwaak kwaak! En spring er eens bij, net als een kikker! 🐸" }],
          niveaus: {
            basis: "Dit is een kikker — groen, springt ver en zegt kwaak. 🐸",
            simpeler: "Groen en hij zegt kwaak: een kikker!",
            nogSimpeler: "kikker 🐸",
          },
        },
      },
      {
        q: "Wat kun je **aandoen** als het koud is? 🥶",
        options: ["jas 🧥", "appel 🍎", "bal ⚽", "boom 🌳"],
        answer: 0,
        wrongHints: [null, "Een appel is om op te eten — wat trek je aan als je naar buiten gaat?", "Met een bal kun je spelen — maar kun je hem aantrekken?", "Een boom staat buiten — maar kun je een boom aandoen?"],
        uitlegPad: {
          stappen: [{ titel: "Kleren doe je aan", tekst: "Een **jas** 🧥 is **kleding** — die trek je aan als het koud is 🥶. Een appel eet je 🍎, met een bal speel je ⚽. Elk woord hoort ergens bij!" }],
          niveaus: {
            basis: "Een jas doe je aan als het koud is — dat is kleding. 🧥",
            simpeler: "Koud buiten? Jas aan! 🧥",
            nogSimpeler: "jas 🧥",
          },
        },
      },
      {
        q: "Warm ☀️ en ... horen bij elkaar als tegendeel. Welk woord?",
        options: ["koud ❄️", "heet 🔥", "groot 🐘", "blij 😃"],
        answer: 0,
        wrongHints: [null, "Heet lijkt juist heel erg op warm — we zoeken het tegendeel! Wat voel je bij sneeuw?", "Groot hoort bij klein — maar wat hoort bij warm?", "Blij hoort bij verdrietig — maar wat hoort bij warm?"],
        uitlegPad: {
          stappen: [{ titel: "Tegendeel-vriendjes", tekst: "Warm ☀️ en **koud** ❄️ zijn tegendeel-vriendjes: precies het omgekeerde van elkaar! Denk maar aan een warme zomerdag ☀️ en aan sneeuw ❄️ — brrr!" }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Meer tegendeel-vriendjes: groot 🐘 en klein 🐭, blij 😃 en verdrietig 😢." }],
          niveaus: {
            basis: "Het tegendeel van warm is koud. ☀️❄️",
            simpeler: "Zon = warm ☀️, sneeuw = koud ❄️.",
            nogSimpeler: "koud ❄️",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een poes 🐈 is een dier. Wat is óók een dier?",
        options: ["paard 🐴", "banaan 🍌", "jas 🧥", "bal ⚽"],
        answer: 0,
        wrongHints: [
          null,
          "Kan een banaan lopen of geluid maken? Denk nog eens na!",
          "Trek je dit aan, of kan het zelf rondlopen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kan het lopen en eten?",
              tekst: "Een poes 🐈 en een paard 🐴 leven allebei: ze lopen, eten en maken geluid. Dat zijn **dieren**! 🐾",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Nog meer dieren: hond 🐶, koe 🐮, eend 🦆.",
            },
          ],
          niveaus: {
            basis: "Een paard is een dier, net als een poes. 🐴🐈",
            simpeler: "Een paard loopt en eet — dat is een dier!",
            nogSimpeler: "paard 🐴",
          },
        },
      },
      {
        q: "Welke is **geen** fruit?",
        options: ["bal ⚽", "peer 🍐", "aardbei 🍓", "druif 🍇"],
        answer: 0,
        wrongHints: [
          null,
          "Kun je een peer eten? Dan is het misschien wel fruit!",
          null,
          "Een druif kun je eten — zoek iets wat je níét kunt eten.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat kun je eten?",
              tekst: "Een peer 🍐, een aardbei 🍓 en een druif 🍇 kun je allemaal **eten** — dat is **fruit**. Een bal ⚽ eet je niet: daar speel je mee!",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Fruit: appel 🍎, banaan 🍌, peer 🍐. Speelgoed: bal ⚽, pop, blokken.",
            },
          ],
          niveaus: {
            basis: "Een bal is geen fruit — daar speel je mee. ⚽",
            simpeler: "Kun je een bal eten? Nee! Dus geen fruit.",
            nogSimpeler: "bal ⚽",
          },
        },
      },
      {
        q: "**Lepel** 🥄 en ... horen bij elkaar. Welk woord?",
        options: ["vork 🍴", "bal ⚽", "boom 🌳", "kat 🐱"],
        answer: 0,
        wrongHints: [
          null,
          "Met een bal kun je spelen — maar eet je er ook mee?",
          "Een boom staat buiten — hoort die bij het eten?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat doe je ermee?",
              tekst: "Met een **lepel** 🥄 en een **vork** 🍴 kun je allebei **eten**. Daarom horen ze bij elkaar!",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Nog meer dingen om mee te eten: mes, bord 🍽️, beker.",
            },
          ],
          niveaus: {
            basis: "Lepel en vork horen bij elkaar — daar eet je mee. 🥄🍴",
            simpeler: "Lepel en vork: allebei om mee te eten!",
            nogSimpeler: "vork 🍴",
          },
        },
      },
    ],
  },

  // ─── E. Letter-feestje! ───────────────────────────────────
  {
    title: "Letter-feestje!",
    explanation:
      "🎈🎉 Wauw, wat kun jij al veel!\n\n" +
      "Je kunt **rijmen** 🎵, **klanken horen** 👂, **letters herkennen** 🔠 én je kent heel veel **woorden**! 💬\n\n" +
      "Nu komt het feestje: een paar vragen door elkaar.\n\n" +
      "**Laat maar zien wat je al kunt!** 🌟\n\n" +
      "Rustig aan, hardop meezeggen mag altijd. Veel plezier! 🎈",
    checks: [
      {
        q: "🎵 Wat rijmt op **boot** ⛵?",
        options: ["poot 🐾", "boom 🌳", "bal ⚽", "huis 🏠"],
        answer: 0,
        wrongHints: [null, "Boom begint net als boot — maar luister naar het EINDE: klinkt dat hetzelfde?", "Zeg ze hardop: boot... bal... Eindigen ze op hetzelfde stukje?", "Luister naar het einde: boot... huis... Hoor je *oot*?"],
        uitlegPad: {
          stappen: [{ titel: "Luister naar het einde", tekst: "B-**oot** ⛵ en p-**oot** 🐾 — allebei *oot*! Rijmen zit altijd aan het **einde** van het woord, niet aan het begin. 🎵" }],
          niveaus: {
            basis: "Boot en poot rijmen — allebei *oot*. ⛵🐾",
            simpeler: "Zeg hardop: boot... poot... Hetzelfde einde!",
            nogSimpeler: "poot 🐾",
          },
        },
      },
      {
        q: "👂 Met welke klank begint **kikker** 🐸?",
        options: ["k", "s", "m", "b"],
        answer: 0,
        wrongHints: [null, "Sss klinkt als een slang 🐍 — hoor je dat vooraan in *kikker*?", "Zeg het langzaam: k-ikker. Hoor je een *m*?", "Zeg *kikker* nog eens hardop — welke klank komt het allereerst?"],
        uitlegPad: {
          stappen: [{ titel: "Zeg het langzaam", tekst: "Zeg heel langzaam: **k**-ikker 🐸. De allereerste klank is de **k**! Kwaak kwaak! 🎵" }],
          niveaus: {
            basis: "Kikker begint met de klank *k*. 🐸",
            simpeler: "Zeg langzaam: k-ikker. De *k* komt eerst!",
            nogSimpeler: "k",
          },
        },
      },
      {
        q: "🔠 Kijk goed 👀 — welke letter is dit: **s**?",
        options: ["s", "z", "c", "e"],
        answer: 0,
        wrongHints: [null, "Deze letter heeft rechte hoekjes — heeft de letter hierboven die ook?", "Bijna — deze is maar een half rondje. Kijk nog eens naar de kronkel hierboven.", "Kijk goed: is deze vorm precies hetzelfde als de letter hierboven?"],
        uitlegPad: {
          stappen: [{ titel: "Het kronkeltje", tekst: "De **s** is een kronkeltje, net een slangetje 🐍 — en hij klinkt er ook naar: *sssss*! Kijk goed naar de vorm en zeg de klank erbij." }],
          niveaus: {
            basis: "Dit is de s — een kronkeltje dat klinkt als *sss*. 🐍",
            simpeler: "Kronkeltje als een slangetje = s!",
            nogSimpeler: "s",
          },
        },
      },
      {
        q: "👏 Klap mee: **kro-ko-dil** 🐊 — hoeveel stukjes?",
        options: ["3", "2", "4", "1"],
        answer: 0,
        wrongHints: [null, "Klap nog eens mee: kro... ko... en er komt nog een stukje!", "Dat is één klap te veel — zeg het rustig: kro... ko... dil...", "Eén klap maar? Zeg het woord heel langzaam en klap bij elk stukje."],
        uitlegPad: {
          stappen: [{ titel: "Drie klappen", tekst: "Zeg het langzaam en klap mee: **kro** 👏 **ko** 👏 **dil** 👏. Drie klappen = **3 stukjes**! 🐊" }],
          niveaus: {
            basis: "Kro-ko-dil = 3 stukjes: kro 👏 ko 👏 dil 👏.",
            simpeler: "Klap mee: kro 👏 ko 👏 dil 👏. Drie klappen!",
            nogSimpeler: "3",
          },
        },
      },
      {
        q: "🌟 Laatste vraag! Welk woord begint met dezelfde klank als **bal** ⚽?",
        options: ["boot ⛵", "kat 🐱", "vis 🐟", "maan 🌙"],
        answer: 0,
        wrongHints: [null, "Zeg ze langzaam: b-al... k-at... Klinkt het begin hetzelfde?", "Zeg het langzaam: vvv-is. Is dat dezelfde beginklank als bij *bal*?", "Zeg het langzaam: mmm-aan. Hoor je vooraan hetzelfde als bij *bal*?"],
        uitlegPad: {
          stappen: [{ titel: "Luister naar het begin", tekst: "Zeg ze langzaam: **b**-al ⚽ en **b**-oot ⛵. Allebei beginnen ze met de klank **b**! Nu luisterde je naar het **begin** van het woord — knap hoor! 🌟" }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Speel dit ook eens samen thuis: zoek om de beurt woorden die beginnen met dezelfde klank als jouw naam! 😊" }],
          niveaus: {
            basis: "Bal en boot beginnen allebei met de klank *b*. ⚽⛵",
            simpeler: "Zeg langzaam: b-al... b-oot... Hetzelfde begin!",
            nogSimpeler: "boot ⛵",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "🎵 Wat rijmt op **jas** 🧥?",
        options: ["tas 👜", "schoen 👟", "jurk 👗", "pet 🧢"],
        answer: 0,
        wrongHints: [
          null,
          "Ook iets om aan te trekken — maar luister: klinkt het einde als *as*?",
          "Zeg ze hardop: jas... jurk... Beginnen ze hetzelfde of eindigen ze hetzelfde?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Luister naar het einde",
              tekst: "J-**as** 🧥 en t-**as** 👜 — allebei *as*! Rijmen zit altijd aan het **einde** van het woord, niet aan het begin. 🎵",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Jas en jurk beginnen hetzelfde, maar ze rijmen niet: het einde is anders.",
            },
          ],
          niveaus: {
            basis: "Jas en tas rijmen — allebei *as*. 🧥👜",
            simpeler: "Zeg hardop: jas... tas... Hetzelfde einde!",
            nogSimpeler: "tas 👜",
          },
        },
      },
      {
        q: "👂 Met welke klank begint **neus** 👃?",
        options: ["n", "m", "s", "k"],
        answer: 0,
        wrongHints: [
          null,
          "Mmm zeg je bij lekker eten — hoor je dat vooraan in *neus*?",
          "De *s* hoor je wel in *neus* — maar komt die als allereerste?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zeg het langzaam",
              tekst: "Zeg heel langzaam: **nnn**-eus 👃. De allereerste klank die je hoort is de **n**! 👂",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Hoor je de *s*? Die komt pas helemaal aan het einde: neu-**s**.",
            },
          ],
          niveaus: {
            basis: "Neus begint met de klank *n*. 👃",
            simpeler: "Zeg langzaam: nnn-eus. Hoor je de *n* vooraan?",
            nogSimpeler: "n",
          },
        },
      },
      {
        q: "👏 Klap mee: **ze-bra** 🦓 — hoeveel stukjes?",
        options: ["2", "1", "3", "4"],
        answer: 0,
        wrongHints: [
          null,
          "Eén klap maar? Zeg het langzaam: ze... bra... en klap bij elk stukje.",
          "Dat is één klap te veel — zeg het rustig: ze... bra...",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Klap bij elk stukje",
              tekst: "Zeg het langzaam en klap mee: **ze** 👏 - **bra** 👏. Twee klappen = **2 stukjes**!",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Ba-naan 🍌 heeft ook 2 stukjes, net als ze-bra 🦓.",
            },
          ],
          niveaus: {
            basis: "Ze-bra = klap, klap = 2 stukjes. 🦓",
            simpeler: "Zeg ze... bra... en klap mee. Twee klappen!",
            nogSimpeler: "2",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const rijmenLettersKleutersPo = {
  id: "rijmen-letters-kleuters-po",
  title: "Rijmen en letters (groep 1-2)",
  emoji: "🎈",
  level: "groep1-2",
  subject: "taal",
  sloThema: "Taal — beginnende geletterdheid: rijmen, klanken, letters, woordenschat groep 1-2",
  prerequisites: [],
  intro:
    "Spelen met woorden voor kleuters: rijmen, klanken horen, letters herkennen en woorden kennen. Lekker samen doen — een ouder of verzorger leest voor (of druk op de voorlees-knop) en jij mag antwoorden! ~15 min.",
  triggerKeywords: [
    "rijmen", "letters", "klanken", "kleuters",
    "groep 1", "groep 2", "beginnende geletterdheid",
    "letters leren", "voorlezen", "woordenschat kleuters",
    "taal kleuters", "hakken en plakken",
  ],
  chapters,
  steps,
};

export default rijmenLettersKleutersPo;
