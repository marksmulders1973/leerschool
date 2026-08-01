// Leerpad: Trappen van vergelijking — groep 7-8 PO.
// Doorstroomtoets-onderdeel taal. Stellende, vergrotende (-er) en
// overtreffende (-st) trap, onregelmatige vormen en spelling.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "De drie trappen", emoji: "📊", from: 0, to: 0 },
  { letter: "B", title: "Vergrotende trap (-er, met 'dan')", emoji: "⬆️", from: 1, to: 1 },
  { letter: "C", title: "Overtreffende trap (-st)", emoji: "🏆", from: 2, to: 2 },
  { letter: "D", title: "In het echt: kiezen & spellen", emoji: "✍️", from: 3, to: 3 },
];

const steps = [
  // ─── A. De drie trappen ───────────────────────────────────
  {
    title: "De drie trappen van vergelijking",
    explanation:
      "Met een bijvoeglijk naamwoord (zoals *groot, snel, mooi*) kun je **vergelijken**. Dat gaat in drie trappen:\n\n" +
      "1. **Stellende trap** — de gewone vorm: *snel.*\n" +
      "2. **Vergrotende trap** — met **-er**: *sneller.* (meer dan iets anders)\n" +
      "3. **Overtreffende trap** — met **-st**: *snelst.* (het meest van allemaal)\n\n" +
      "Voorbeeld: *groot → groter → grootst.* / *mooi → mooier → mooist.*\n\n" +
      "Sommige woorden zijn **onregelmatig**: *goed → beter → best*, *veel → meer → meest*.",
    checks: [
      {
        q: "Wat zijn de drie trappen van 'snel'?",
        options: ["snel – sneller – snelst", "snel – snelst – sneller", "snel – snel – snel", "snelle – sneller – snelst"],
        answer: 0,
        wrongHints: [null, "De vergrotende (-er) komt vóór de overtreffende (-st).", "Een trap maakt het woord juist sterker.", "De stellende trap is gewoon 'snel', zonder -e."],
        uitlegPad: {
          stappen: [{ titel: "Gewoon – -er – -st", tekst: "Stellend: snel. Vergrotend: sneller (-er). Overtreffend: snelst (-st)." }],
          niveaus: {
            basis: "snel → sneller → snelst (gewoon, dan -er, dan -st).",
            simpeler: "Welke rij gaat van gewoon, naar meer, naar het meest?",
            nogSimpeler: "snel, dan snel-ler, dan snel-st.",
          },
        },
      },
      {
        q: "Welke is de **vergrotende** trap van 'groot'?",
        options: ["groter", "grootst", "groot", "grote"],
        answer: 0,
        wrongHints: [null, "Dat is de overtreffende trap (het meest).", "Dat is de gewone (stellende) vorm.", "Dat is gewoon 'groot' met een -e."],
        uitlegPad: {
          stappen: [{ titel: "-er erbij", tekst: "De vergrotende trap krijgt -er: groot → groter." }],
          niveaus: {
            basis: "groot + -er = groter.",
            simpeler: "Welke vorm betekent 'meer groot dan iets anders'?",
            nogSimpeler: "groot + er = ?",
          },
        },
      },
      {
        q: "Welke is de **overtreffende** trap van 'mooi'?",
        options: ["mooist", "mooier", "mooi", "mooie"],
        answer: 0,
        wrongHints: [null, "Dat is de vergrotende trap (meer).", "Dat is de gewone vorm.", "Dat is 'mooi' met een -e."],
        uitlegPad: {
          stappen: [{ titel: "-st erbij", tekst: "De overtreffende trap krijgt -st: mooi → mooist (het meest mooi)." }],
          niveaus: {
            basis: "mooi + -st = mooist.",
            simpeler: "Welke vorm betekent 'het allermooist'?",
            nogSimpeler: "mooi + st = ?",
          },
        },
      },
      {
        q: "De **stellende** trap is...",
        options: ["de gewone vorm", "de vorm met -er", "de vorm met -st", "altijd onregelmatig"],
        answer: 0,
        wrongHints: [null, "Dat is de vergrotende trap.", "Dat is de overtreffende trap.", "De meeste woorden zijn juist regelmatig."],
        uitlegPad: {
          stappen: [{ titel: "Stellend = gewoon", tekst: "De stellende trap is de gewone vorm, zonder -er of -st: snel, groot, mooi." }],
          niveaus: {
            basis: "De stellende trap is de basisvorm (snel, groot).",
            simpeler: "Welke trap heeft nog geen -er of -st?",
            nogSimpeler: "Is 'groot' de gewone vorm of een vergroting?",
          },
        },
      },
      {
        q: "Welke rij klopt helemaal? (stellend – vergrotend – overtreffend)",
        options: ["koud – kouder – koudst", "koud – koudst – kouder", "kouder – koud – koudst", "koud – koude – koudste"],
        answer: 0,
        wrongHints: [null, "De vergrotende (-er) komt altijd vóór de overtreffende (-st).", "De stellende trap is de gewone basisvorm.", "Dat zijn geen trappen van vergelijking — dat zijn vormen met een buigings-e."],
        uitlegPad: {
          stappen: [{ titel: "Gewoon – meer – meest", tekst: "De volgorde is altijd: stellend (koud), vergrotend (kouder, -er), overtreffend (koudst, -st)." }],
          niveaus: {
            basis: "koud → kouder → koudst (gewoon, dan -er, dan -st).",
            simpeler: "Welke rij gaat van gewoon naar meer naar het meest?",
            nogSimpeler: "koud, dan koud-er, dan koud-st.",
          },
        },
      },
      {
        q: "Hoeveel trappen van vergelijking zijn er?",
        options: ["drie", "twee", "vier", "vijf"],
        answer: 0,
        wrongHints: [null, "Er is er eentje meer dan twee: stellend, vergrotend én overtreffend.", "Dat zijn er te veel.", "Dat zijn er te veel."],
        uitlegPad: {
          stappen: [{ titel: "Altijd drie trappen", tekst: "Er zijn altijd drie trappen: stellend (de gewone vorm), vergrotend (-er) en overtreffend (-st)." }],
          niveaus: {
            basis: "Drie trappen: stellend, vergrotend, overtreffend.",
            simpeler: "Tel ze: gewoon, meer, het meest. Dat zijn er …?",
            nogSimpeler: "Snel, sneller, snelst — hoeveel woorden?",
          },
        },
      },
      {
        q: "Wat is de vergrotende trap van 'slim'?",
        options: ["slimmer", "slimst", "slim", "slimste"],
        answer: 0,
        wrongHints: [null, "Dat is de overtreffende trap.", "Dat is de stellende trap.", "Dat is 'slim' met een buigings-e, geen trap."],
        uitlegPad: {
          stappen: [{ titel: "slim + -mer", tekst: "De vergrotende trap van 'slim' is 'slimmer'. De m verdubbelt omdat de klank kort is." }],
          niveaus: {
            basis: "slim + -mer = slimmer (dubbele m door korte klank).",
            simpeler: "Welke vorm betekent 'slimmer dan iemand anders'?",
            nogSimpeler: "slim + mer = ?",
          },
        },
      },
    ],
  },

  // ─── B. Vergrotende trap ──────────────────────────────────
  {
    title: "Vergrotende trap — met 'dan'",
    explanation:
      "De **vergrotende trap** (met **-er**) gebruik je om **twee dingen** te vergelijken. Er hoort meestal het woordje **'dan'** bij:\n\n" +
      "*Tom is **langer dan** Sara.* / *Deze fiets is **duurder dan** die.*\n\n" +
      "**Onregelmatige vergrotende trappen** (uit je hoofd leren):\n" +
      "• goed → **beter**\n" +
      "• veel → **meer**\n" +
      "• weinig → **minder**\n\n" +
      "Let op: het is 'groter **dan**', niet 'groter **als**'.",
    checks: [
      {
        q: "Vul in: *Tom is ___ dan Sara.* (lang)",
        options: ["langer", "langst", "lang", "lange"],
        answer: 0,
        wrongHints: [null, "Dat is de overtreffende trap; bij 'dan' hoort -er.", "Dat is de gewone vorm.", "Dat is 'lang' met een -e."],
        uitlegPad: {
          stappen: [{ titel: "Vergelijken met 'dan' → -er", tekst: "Je vergelijkt Tom en Sara, met 'dan' erbij. Dan gebruik je de vergrotende trap: langer." }],
          niveaus: {
            basis: "Bij 'dan' hoort de -er-vorm: langer.",
            simpeler: "Twee mensen vergelijken met 'dan' → welke vorm?",
            nogSimpeler: "lang + er = ?",
          },
        },
      },
      {
        q: "Bij de vergrotende trap hoort vaak het woordje...",
        options: ["dan", "het", "als", "zeer"],
        answer: 0,
        wrongHints: [null, "Dat hoort meer bij de overtreffende trap ('het snelst').", "'Groter als' is fout; het is 'groter dan'.", "Dat versterkt alleen, het hoort niet bij de trap."],
        uitlegPad: {
          stappen: [{ titel: "'groter dan'", tekst: "De vergrotende trap gaat samen met 'dan': groter dan, sneller dan." }],
          niveaus: {
            basis: "Bij de vergrotende trap hoort 'dan'.",
            simpeler: "Zeg je 'groter dan' of 'groter als'? Het juiste is 'dan'.",
            nogSimpeler: "groter … die? (dan/als — het juiste is 'dan')",
          },
        },
      },
      {
        q: "De vergrotende trap van 'goed' is...",
        options: ["beter", "goeder", "best", "goedst"],
        answer: 0,
        wrongHints: [null, "'Goeder' bestaat niet — dit woord is onregelmatig.", "Dat is de overtreffende trap.", "Dat bestaat niet."],
        uitlegPad: {
          stappen: [{ titel: "Onregelmatig: goed → beter", tekst: "'Goed' is onregelmatig: de vergrotende trap is 'beter' (niet 'goeder')." }],
          niveaus: {
            basis: "goed → beter → best. Onregelmatig, uit je hoofd leren.",
            simpeler: "Wat zeg je: 'goeder' of 'beter'?",
            nogSimpeler: "Beter is de vergroting van …?",
          },
        },
      },
      {
        q: "Welke zin is goed?",
        options: [
          "Deze fiets is duurder dan die.",
          "Deze fiets is duurste dan die.",
          "Deze fiets is duur dan die.",
          "Deze fiets is duurder als die.",
        ],
        answer: 0,
        wrongHints: [null, "Dat is de overtreffende trap; bij vergelijken hoort -er.", "De vergrotende trap mist (-er).", "Het is 'dan', niet 'als'."],
        uitlegPad: {
          stappen: [{ titel: "duurder + dan", tekst: "Twee fietsen vergelijken: 'duurder' (-er) met 'dan'. Dus 'duurder dan die'." }],
          niveaus: {
            basis: "'duurder dan' is juist (-er + dan).",
            simpeler: "Welke heeft de -er-vorm én het woordje 'dan'?",
            nogSimpeler: "Welke zin zegt 'duurder dan'?",
          },
        },
      },
      {
        q: "De vergrotende trap van 'weinig' is...",
        options: ["minder", "minst", "weinigst", "weinigger"],
        answer: 0,
        wrongHints: [null, "Dat is de overtreffende trap.", "'Weinigst' bestaat niet — dit woord is onregelmatig.", "'Weinigger' bestaat niet."],
        uitlegPad: {
          stappen: [{ titel: "Onregelmatig: weinig → minder", tekst: "'Weinig' is onregelmatig. De vergrotende trap is 'minder', niet 'weiniger'." }],
          niveaus: {
            basis: "weinig → minder (vergrotend) → minst (overtreffend).",
            simpeler: "Zeg je 'weiniger' of 'minder'?",
            nogSimpeler: "Beter is de vergroting van goed; minder is de vergroting van …?",
          },
        },
      },
      {
        q: "Welke zin klopt?",
        options: [
          "Mijn rugzak is zwaarder dan die van jou.",
          "Mijn rugzak is zwaarder als die van jou.",
          "Mijn rugzak is zwaarst dan die van jou.",
          "Mijn rugzak is meer zwaar dan die van jou.",
        ],
        answer: 0,
        wrongHints: [null, "Bij de vergrotende trap gebruik je 'dan', niet 'als'.", "Dat is de overtreffende trap; bij twee dingen vergelijken hoort -er.", "In het Nederlands zeg je 'zwaarder', niet 'meer zwaar'."],
        uitlegPad: {
          stappen: [{ titel: "Vergrotend + dan", tekst: "Twee rugzakken vergelijken: 'zwaarder' (-er) + 'dan'. Dat is de juiste combinatie." }],
          niveaus: {
            basis: "zwaarder dan = vergrotende trap + juiste vergelijkingswoord.",
            simpeler: "Welke vorm vergelijkt twee dingen met 'dan'?",
            nogSimpeler: "zwaar + er = zwaarder. En dan welk woordje?",
          },
        },
      },
      {
        q: "De vergrotende trap van 'veel' is...",
        options: ["meer", "meest", "veelst", "veeler"],
        answer: 0,
        wrongHints: [null, "Dat is de overtreffende trap.", "'Veelst' bestaat niet — dit woord is onregelmatig.", "'Veeler' bestaat niet."],
        uitlegPad: {
          stappen: [{ titel: "Onregelmatig: veel → meer", tekst: "'Veel' is onregelmatig. De vergrotende trap is 'meer', niet 'veeler'." }],
          niveaus: {
            basis: "veel → meer (vergrotend) → meest (overtreffend).",
            simpeler: "Zeg je 'veeler appels' of 'meer appels'?",
            nogSimpeler: "Welke vorm gebruik je als je twee hoeveelheden vergelijkt?",
          },
        },
      },
    ],
  },

  // ─── C. Overtreffende trap ────────────────────────────────
  {
    title: "Overtreffende trap — het meest van allemaal",
    explanation:
      "De **overtreffende trap** (met **-st**) gebruik je als iets **het meest** is van allemaal. Er staat vaak **'het'** of **'de ...ste'** bij:\n\n" +
      "*Dit is **de hoogste** berg.* / *Zij loopt **het snelst**.*\n\n" +
      "**Onregelmatige overtreffende trappen:**\n" +
      "• goed → best → **best**\n" +
      "• veel → meer → **meest**\n" +
      "• weinig → minder → **minst**\n\n" +
      "Bij een zelfstandig naamwoord komt er vaak nog een -e bij: de hoog**ste** berg, de snel**ste** auto.",
    checks: [
      {
        q: "Vul in: *Dit is de ___ berg van Nederland.* (hoog)",
        options: ["hoogste", "hoger", "hoog", "hoogst"],
        answer: 0,
        wrongHints: [null, "Dat is de vergrotende trap (met 'dan').", "Dat is de gewone vorm.", "Bij 'de … berg' hoort er een -e bij: hoogste."],
        uitlegPad: {
          stappen: [{ titel: "het meest → -st(e)", tekst: "Eén berg is het hoogst van allemaal → overtreffende trap. Bij 'de berg' wordt het 'de hoogste berg'." }],
          niveaus: {
            basis: "De hoogste berg = overtreffende trap met -ste.",
            simpeler: "Welke vorm betekent 'het allerhoogst'?",
            nogSimpeler: "hoog + ste = ?",
          },
        },
      },
      {
        q: "Welke is de **overtreffende** trap?",
        options: ["het snelst", "sneller", "snel", "sneller dan"],
        answer: 0,
        wrongHints: [null, "Dat is de vergrotende trap.", "Dat is de gewone vorm.", "Dat is vergrotend (met 'dan')."],
        uitlegPad: {
          stappen: [{ titel: "'het …st'", tekst: "'Het snelst' betekent het meest snel van allemaal → overtreffende trap." }],
          niveaus: {
            basis: "'het snelst' is de overtreffende trap.",
            simpeler: "Welke betekent 'het allersnelst'?",
            nogSimpeler: "Welke heeft 'het' + -st?",
          },
        },
      },
      {
        q: "De overtreffende trap van 'veel' is...",
        options: ["meest", "meer", "veelst", "meerst"],
        answer: 0,
        wrongHints: [null, "Dat is de vergrotende trap.", "'Veelst' bestaat niet — dit woord is onregelmatig.", "Dat bestaat niet."],
        uitlegPad: {
          stappen: [{ titel: "Onregelmatig: veel → meer → meest", tekst: "'Veel' is onregelmatig: meer (vergrotend), meest (overtreffend)." }],
          niveaus: {
            basis: "veel → meer → meest.",
            simpeler: "Wat is het meest van veel: 'veelst' of 'meest'?",
            nogSimpeler: "Meest is de overtreffing van …?",
          },
        },
      },
      {
        q: "Welke zin is goed?",
        options: [
          "Zij is de slimste van de klas.",
          "Zij is de slimmer van de klas.",
          "Zij is de slim van de klas.",
          "Zij is de slimst dan de klas.",
        ],
        answer: 0,
        wrongHints: [null, "Dat is de vergrotende trap; 'van de klas' vraagt de overtreffende.", "De trap mist.", "'Dan' hoort bij de vergrotende trap, niet hier."],
        uitlegPad: {
          stappen: [{ titel: "de …ste van", tekst: "'Van de klas' betekent het meest van allemaal → overtreffende trap: de slimste." }],
          niveaus: {
            basis: "'de slimste van de klas' is juist (overtreffend).",
            simpeler: "Welke heeft de -ste-vorm bij 'van de klas'?",
            nogSimpeler: "Welke zegt 'de slimste'?",
          },
        },
      },
      {
        q: "Welke is de **overtreffende** trap van 'goed'?",
        options: ["best", "beter", "goedst", "goeder"],
        answer: 0,
        wrongHints: [null, "Dat is de vergrotende trap.", "'Goedst' bestaat niet — dit woord is onregelmatig.", "'Goeder' bestaat niet."],
        uitlegPad: {
          stappen: [{ titel: "Onregelmatig: goed → beter → best", tekst: "'Goed' is onregelmatig. De overtreffende trap is 'best' (niet 'goedst')." }],
          niveaus: {
            basis: "goed → beter → best. Uit je hoofd leren.",
            simpeler: "Wat zeg je: 'goedst' of 'best'?",
            nogSimpeler: "Best is de overtreffing van …?",
          },
        },
      },
      {
        q: "Vul in: *Van alle renners is hij het ___.* (snel)",
        options: ["snelst", "sneller", "snel", "snelste"],
        answer: 0,
        wrongHints: [null, "Dat is de vergrotende trap; bij 'van alle' hoort de overtreffende.", "Dat is de gewone vorm.", "Bij 'het …' zonder lidwoord schrijf je 'snelst'."],
        uitlegPad: {
          stappen: [{ titel: "'het …st van alle'", tekst: "'Van alle renners' = hij is de allersnelste → overtreffende trap: het snelst." }],
          niveaus: {
            basis: "het snelst van alle = overtreffende trap.",
            simpeler: "Wie is het allerbeste? Zoek de overtreffende trap.",
            nogSimpeler: "snel + st = ?",
          },
        },
      },
      {
        q: "Bij welke zin hoort de overtreffende trap?",
        options: [
          "Dit is de langste straat van de stad.",
          "De Keizersgracht is langer dan de Prinsengracht.",
          "De straat is lang.",
          "Die straat is bijna even lang.",
        ],
        answer: 0,
        wrongHints: [null, "Dat is een vergelijking van twee dingen → vergrotende trap.", "Dat is de stellende trap.", "Dat is geen trap van vergelijking."],
        uitlegPad: {
          stappen: [{ titel: "'de …ste van' = overtreffend", tekst: "'De langste straat van de stad' — dat is het meeste van allemaal → overtreffende trap." }],
          niveaus: {
            basis: "De …ste van … = overtreffende trap.",
            simpeler: "Welke zin vergelijkt iets met alles van de stad?",
            nogSimpeler: "Welke zin zegt 'de langste'?",
          },
        },
      },
    ],
  },

  // ─── D. In het echt ───────────────────────────────────────
  {
    title: "In het echt — kiezen & spellen",
    explanation:
      "Bij de Doorstroomtoets moet je de **juiste trap kiezen** én **goed spellen**. Twee aandachtspunten:\n\n" +
      "1. **Welke trap?** Vergelijk je twee dingen (met 'dan')? → vergrotende trap (-er). Is iets het meest van allemaal? → overtreffende trap (-st).\n" +
      "2. **Spelling:** bij een korte klank verdubbel je vaak de medeklinker: *dik → dikker → dikst*, *nat → natter → natst*.\n\n" +
      "En denk aan de onregelmatige: goed-beter-best, veel-meer-meest, weinig-minder-minst.",
    checks: [
      {
        q: "De vergrotende trap van 'dik' is...",
        options: ["dikker", "diker", "dikst", "dikke"],
        answer: 0,
        wrongHints: [null, "Bij de korte klank verdubbel je de k: dik → dikker.", "Dat is de overtreffende trap.", "Dat is 'dik' met een -e."],
        uitlegPad: {
          stappen: [{ titel: "Korte klank → dubbele letter", tekst: "'Dik' heeft een korte i-klank, dus de k verdubbelt: dik → dikker." }],
          niveaus: {
            basis: "dik + -er met dubbele k = dikker.",
            simpeler: "Schrijf je 'diker' of 'dikker'? De korte klank vraagt dubbel.",
            nogSimpeler: "dik + ker = ?",
          },
        },
      },
      {
        q: "Vul in: *Een olifant is ___ dan een muis.* (groot)",
        options: ["groter", "grootst", "groot", "grote"],
        answer: 0,
        wrongHints: [null, "Bij 'dan' hoort de vergrotende trap (-er).", "Dat is de gewone vorm.", "Dat is 'groot' met een -e."],
        uitlegPad: {
          stappen: [{ titel: "Vergelijken met 'dan'", tekst: "Je vergelijkt twee dieren met 'dan' → vergrotende trap: groter." }],
          niveaus: {
            basis: "groter dan = vergrotende trap.",
            simpeler: "Welke vorm hoort bij 'dan'?",
            nogSimpeler: "groot + er = ?",
          },
        },
      },
      {
        q: "Maak de rij af: weinig – minder – ___",
        options: ["minst", "weinigst", "minder", "minste"],
        answer: 0,
        wrongHints: [null, "'Weinigst' bestaat niet — dit is onregelmatig.", "Dat is de vergrotende trap (al gegeven).", "Bij een rij zonder lidwoord schrijf je 'minst'."],
        uitlegPad: {
          stappen: [{ titel: "Onregelmatig: weinig → minder → minst", tekst: "'Weinig' is onregelmatig: minder (vergrotend), minst (overtreffend)." }],
          niveaus: {
            basis: "weinig → minder → minst.",
            simpeler: "Wat is het minst van weinig: 'weinigst' of 'minst'?",
            nogSimpeler: "Na 'minder' komt …?",
          },
        },
      },
      {
        q: "Vul in: *Van alle dieren is de cheetah het ___.* (snel)",
        options: ["snelst", "sneller", "snel", "snelle"],
        answer: 0,
        wrongHints: [null, "Bij 'het … van alle' hoort de overtreffende trap.", "Dat is de gewone vorm.", "Dat is 'snel' met een -e."],
        uitlegPad: {
          stappen: [{ titel: "het …st van alle", tekst: "De cheetah is het meest snel van alle dieren → overtreffende trap: het snelst." }],
          niveaus: {
            basis: "'het snelst' = overtreffende trap.",
            simpeler: "Welke vorm betekent 'het allersnelst'?",
            nogSimpeler: "snel + st = ?",
          },
        },
      },
      {
        q: "De vergrotende trap van 'nat' is...",
        options: ["natter", "nater", "natst", "natte"],
        answer: 0,
        wrongHints: [null, "Bij de korte klank verdubbel je de t: nat → natter.", "Dat is de overtreffende trap.", "Dat is 'nat' met een -e."],
        uitlegPad: {
          stappen: [{ titel: "Korte klank → dubbele letter", tekst: "'Nat' heeft een korte a-klank, dus de t verdubbelt: nat → natter." }],
          niveaus: {
            basis: "nat + -ter (dubbele t) = natter.",
            simpeler: "Schrijf je 'nater' of 'natter'? De korte klank vraagt dubbel.",
            nogSimpeler: "nat + ter = ?",
          },
        },
      },
      {
        q: "Welke zin is fout?",
        options: [
          "Hij is de sterkste als iedereen.",
          "Hij is sterker dan iedereen.",
          "Hij is de sterkste van iedereen.",
          "Hij is het sterkst van allemaal.",
        ],
        answer: 0,
        wrongHints: [null, "Sterker + dan is de juiste vergrotende trap.", "De sterkste + van is de juiste overtreffende trap.", "Het sterkst + van is ook juist."],
        uitlegPad: {
          stappen: [{ titel: "'Als' klopt niet bij de overtreffende trap", tekst: "'De sterkste als iedereen' is fout: bij de overtreffende trap gebruik je 'van', niet 'als'. 'Als' hoort ook niet bij 'dan'. Zeg: 'de sterkste van iedereen'." }],
          niveaus: {
            basis: "Bij de overtreffende trap gebruik je 'van', niet 'als'.",
            simpeler: "Welke zin heeft een fout woordje bij de overtreffende trap?",
            nogSimpeler: "De sterkste … iedereen. Welk woordje klopt hier niet?",
          },
        },
      },
      {
        q: "Maak de rij af: goed – beter – ___",
        options: ["best", "goedst", "beters", "bester"],
        answer: 0,
        wrongHints: [null, "'Goedst' bestaat niet — dit is een onregelmatig woord.", "'Beters' bestaat niet.", "'Bester' bestaat niet."],
        uitlegPad: {
          stappen: [{ titel: "Onregelmatig: goed → beter → best", tekst: "'Goed' is onregelmatig. De rij is: goed (stellend), beter (vergrotend), best (overtreffend)." }],
          niveaus: {
            basis: "goed → beter → best. Uit je hoofd leren.",
            simpeler: "Na 'beter' komt …?",
            nogSimpeler: "goed, beter, …?",
          },
        },
      },
    ],
  },
];

export default {
  id: "trappen-van-vergelijking-po",
  title: "Trappen van vergelijking",
  subject: "taal",
  level: "groep7-8",
  sloThema: "taal-trappen-vergelijking",
  chapters,
  steps,
  prerequisites: [],
};
