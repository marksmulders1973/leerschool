// Leerpad: Samenstellingen & tussenletters — groep 7-8 PO.
// Doorstroomtoets-onderdeel taal (spelling). Twee woorden samenvoegen, en de
// tussen-n (pannenkoek) en tussen-s (dorpsplein) herkennen.
// Alleen canonieke, eenduidige voorbeelden (geen uitzonderingsgevallen).
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Wat is een samenstelling?", emoji: "🔗", from: 0, to: 0 },
  { letter: "B", title: "Tussen-n (pannenkoek)", emoji: "🥞", from: 1, to: 1 },
  { letter: "C", title: "Tussen-s (dorpsplein)", emoji: "🏘️", from: 2, to: 2 },
  { letter: "D", title: "In het echt: herkennen & spellen", emoji: "✍️", from: 3, to: 3 },
];

const steps = [
  // ─── A. Wat is een samenstelling ──────────────────────────
  {
    title: "Wat is een samenstelling?",
    explanation:
      "Een **samenstelling** is één woord dat is gemaakt van **twee (of meer) losse woorden**. Samen vormen ze een nieuw woord met een eigen betekenis.\n\n" +
      "• **voet + bal = voetbal**\n" +
      "• **tafel + poot = tafelpoot**\n" +
      "• **speelgoed + winkel = speelgoedwinkel**\n\n" +
      "Je schrijft een samenstelling **aan elkaar** (één woord). Soms komt er een extra **tussenletter** tussen: een **-n-** (pannenkoek) of een **-s-** (dorpsplein). Daar gaan de volgende hoofdstukken over.",
    checks: [
      {
        q: "Wat is een samenstelling?",
        options: [
          "één woord gemaakt van twee losse woorden",
          "een woord met een hoofdletter",
          "een woord dat je niet kunt spellen",
          "een woord uit een andere taal",
        ],
        answer: 0,
        wrongHints: [null, "Een hoofdletter maakt nog geen samenstelling.", "Je kunt een samenstelling juist gewoon spellen.", "Het hoeft niet uit een andere taal te komen."],
        uitlegPad: {
          stappen: [{ titel: "Twee woorden samen", tekst: "Een samenstelling bestaat uit twee losse woorden die samen één nieuw woord vormen, zoals voet + bal = voetbal." }],
          niveaus: {
            basis: "Een samenstelling = twee woorden samengevoegd tot één.",
            simpeler: "Uit hoeveel woorden bestaat een samenstelling? Uit twee.",
            nogSimpeler: "Is 'voetbal' gemaakt van voet + bal?",
          },
        },
      },
      {
        q: "Uit welke twee woorden bestaat 'voetbal'?",
        options: ["voet + bal", "voe + tbal", "voetb + al", "vo + etbal"],
        answer: 0,
        wrongHints: [null, "Knip op de plek waar twee echte woorden ontstaan.", "'voetb' is geen woord.", "'vo' is geen woord."],
        uitlegPad: {
          stappen: [{ titel: "Twee echte woorden", tekst: "Voetbal = voet + bal. Allebei zijn het op zichzelf een woord." }],
          niveaus: {
            basis: "voet + bal samen = voetbal.",
            simpeler: "Welke twee échte woorden zitten erin?",
            nogSimpeler: "Voet en … bal?",
          },
        },
      },
      {
        q: "Welk woord is een samenstelling?",
        options: ["tafelpoot", "lopen", "mooi", "snel"],
        answer: 0,
        wrongHints: [null, "Dat is één werkwoord, geen twee woorden.", "Dat is één bijvoeglijk naamwoord.", "Ook één woord, geen samenstelling."],
        uitlegPad: {
          stappen: [{ titel: "Twee woorden erin", tekst: "Tafelpoot = tafel + poot, dus een samenstelling. 'lopen', 'mooi' en 'snel' bestaan elk uit maar één woord." }],
          niveaus: {
            basis: "tafelpoot (tafel + poot) is een samenstelling.",
            simpeler: "Welk woord kun je in twee woorden knippen?",
            nogSimpeler: "In welk woord zitten twee woorden: tafelpoot?",
          },
        },
      },
      {
        q: "Hoe schrijf je een samenstelling?",
        options: ["aan elkaar, als één woord", "altijd met een streepje", "altijd los", "met een hoofdletter in het midden"],
        answer: 0,
        wrongHints: [null, "Een streepje is meestal niet nodig.", "Los schrijven is juist fout.", "Geen hoofdletter midden in een woord."],
        uitlegPad: {
          stappen: [{ titel: "Eén woord", tekst: "Een samenstelling schrijf je aan elkaar: voetbal, tafelpoot — niet 'voet bal'." }],
          niveaus: {
            basis: "Een samenstelling schrijf je als één woord, aan elkaar.",
            simpeler: "Schrijf je 'voetbal' los of aan elkaar?",
            nogSimpeler: "Is 'voetbal' één woord?",
          },
        },
      },
    ],
  },

  // ─── B. Tussen-n ──────────────────────────────────────────
  {
    title: "Tussen-n — pannenkoek",
    explanation:
      "Soms hoor en schrijf je een **-en-** tussen de twee delen van een samenstelling. Dat heet de **tussen-n**.\n\n" +
      "• pan → pan**nen** → **pannenkoek**\n" +
      "• krant → kran**ten** → **krantenwijk**\n" +
      "• boek → boe**ken** → **boekenkast**\n\n" +
      "**Vuistregel:** je schrijft vaak **-en-** als je van het eerste woord een **meervoud op -en** kunt maken (pan → pannen, boek → boeken). Dan komt dat -en- ook in de samenstelling.",
    checks: [
      {
        q: "Hoe schrijf je het woord voor een koek die je in een pan bakt?",
        options: ["pannenkoek", "pankoek", "pannekoek", "pannenkoeken"],
        answer: 0,
        wrongHints: [null, "Er hoort een tussen-n: pan → pannen.", "Volgens de huidige spelling is het 'pannenkoek'.", "Dat is het meervoud (meerdere koeken)."],
        uitlegPad: {
          stappen: [{ titel: "pan → pannen → pannenkoek", tekst: "Het meervoud van 'pan' is 'pannen' (op -en). Daarom: pannenkoek, met tussen-n." }],
          niveaus: {
            basis: "pan → pannen, dus pannenkoek (met -en-).",
            simpeler: "Wat is het meervoud van 'pan'? Dat -en- komt in het woord.",
            nogSimpeler: "pannen + koek = ?",
          },
        },
      },
      {
        q: "De wijk waar iemand kranten bezorgt, heet de...",
        options: ["krantenwijk", "krantwijk", "krantewijk", "krantenwijken"],
        answer: 0,
        wrongHints: [null, "Krant → kranten, dus met tussen-n.", "Het is -en-, niet alleen -e-.", "Dat is het meervoud."],
        uitlegPad: {
          stappen: [{ titel: "krant → kranten → krantenwijk", tekst: "Het meervoud van 'krant' is 'kranten'. Daarom krantenwijk, met tussen-n." }],
          niveaus: {
            basis: "krant → kranten, dus krantenwijk.",
            simpeler: "Meervoud van 'krant'? Dat -en- komt erin.",
            nogSimpeler: "kranten + wijk = ?",
          },
        },
      },
      {
        q: "Wanneer schrijf je vaak een tussen-n (-en-)?",
        options: [
          "als het eerste woord een meervoud op -en heeft",
          "altijd, bij elke samenstelling",
          "nooit",
          "alleen bij dieren",
        ],
        answer: 0,
        wrongHints: [null, "Niet bij élke samenstelling (voetbal heeft er geen).", "Soms juist wél.", "Het heeft niets met dieren te maken."],
        uitlegPad: {
          stappen: [{ titel: "Meervoud op -en", tekst: "Kun je van het eerste woord een meervoud op -en maken (pan → pannen)? Dan schrijf je vaak -en- in de samenstelling." }],
          niveaus: {
            basis: "Tussen-n als het eerste woord meervoud op -en heeft.",
            simpeler: "Helpt het meervoud van het eerste woord? Ja.",
            nogSimpeler: "pan → pannen → pannenkoek: zie je het -en-?",
          },
        },
      },
      {
        q: "Welke is goed gespeld?",
        options: ["boekenkast", "boekkast", "boekekast", "boekenkasten"],
        answer: 0,
        wrongHints: [null, "Boek → boeken, dus met tussen-n.", "Het is -en-, niet alleen -e-.", "Dat is het meervoud."],
        uitlegPad: {
          stappen: [{ titel: "boek → boeken → boekenkast", tekst: "Het meervoud van 'boek' is 'boeken'. Daarom boekenkast, met tussen-n." }],
          niveaus: {
            basis: "boek → boeken, dus boekenkast.",
            simpeler: "Meervoud van 'boek'? Dat -en- komt erin.",
            nogSimpeler: "boeken + kast = ?",
          },
        },
      },
    ],
  },

  // ─── C. Tussen-s ──────────────────────────────────────────
  {
    title: "Tussen-s — dorpsplein",
    explanation:
      "Soms hoor en schrijf je een **-s-** tussen de twee delen. Dat heet de **tussen-s**.\n\n" +
      "• dorp + plein = **dorpsplein**\n" +
      "• verkeer + bord = **verkeersbord**\n" +
      "• schip → scheep**s**bel = **scheepsbel**\n\n" +
      "**Vuistregel:** spreek het woord hardop uit. Hoor je duidelijk een **-s-** tussen de twee delen? Dan schrijf je die ook. (Bij 'dorpsplein' hoor je de s; bij 'tafelpoot' niet.)",
    checks: [
      {
        q: "Het plein midden in een dorp heet het...",
        options: ["dorpsplein", "dorpplein", "dorpenplein", "dorpesplein"],
        answer: 0,
        wrongHints: [null, "Spreek het uit — hoor je de -s-?", "Hier hoor je geen -en- maar een -s-.", "Het is alleen een -s-, geen -es-."],
        uitlegPad: {
          stappen: [{ titel: "Hoor de -s-", tekst: "Zeg 'dorp...plein' hardop: je hoort een s. Daarom dorpsplein, met tussen-s." }],
          niveaus: {
            basis: "Je hoort een -s-: dorpsplein.",
            simpeler: "Spreek het uit. Hoor je een s tussen dorp en plein?",
            nogSimpeler: "dorps + plein = ?",
          },
        },
      },
      {
        q: "Het bord langs de weg voor het verkeer heet het...",
        options: ["verkeersbord", "verkeerbord", "verkerenbord", "verkeersborden"],
        answer: 0,
        wrongHints: [null, "Spreek het uit — je hoort een -s-.", "Dat is geen woord.", "Dat is het meervoud."],
        uitlegPad: {
          stappen: [{ titel: "verkeer + s + bord", tekst: "Zeg 'verkeer...bord': je hoort een s ertussen. Daarom verkeersbord." }],
          niveaus: {
            basis: "Je hoort een -s-: verkeersbord.",
            simpeler: "Hoor je een s tussen verkeer en bord?",
            nogSimpeler: "verkeers + bord = ?",
          },
        },
      },
      {
        q: "Welk woord heeft een tussen-s?",
        options: ["scheepsbel", "pannenkoek", "boekenkast", "tafelpoot"],
        answer: 0,
        wrongHints: [null, "Klopt — schip → scheeps, met -s-.", "Dat heeft juist een tussen-n.", "Ook een tussen-n.", "Die heeft helemaal geen tussenletter."],
        uitlegPad: {
          stappen: [{ titel: "scheeps-bel", tekst: "Bij 'scheepsbel' hoor je een -s- tussen scheeps en bel. De andere hebben -en- of geen tussenletter." }],
          niveaus: {
            basis: "'scheepsbel' heeft een tussen-s.",
            simpeler: "Bij welk woord hoor je een -s- ertussen?",
            nogSimpeler: "Welke heeft een s: scheepsbel?",
          },
        },
      },
      {
        q: "Hoor je in 'stadsplein' een tussen-n of een tussen-s?",
        options: ["een tussen-s", "een tussen-n", "geen van beide", "allebei"],
        answer: 0,
        wrongHints: [null, "Spreek het uit: je hoort een s, geen -en-.", "Er zit geen -en- in.", "Er zit wél een tussenletter: de s.", "Het is maar één tussenletter."],
        uitlegPad: {
          stappen: [{ titel: "stads-plein", tekst: "Zeg 'stad...plein': je hoort een s. Dus stadsplein, met tussen-s." }],
          niveaus: {
            basis: "Je hoort een -s-: stadsplein (tussen-s).",
            simpeler: "Hoor je 'staden' of 'stads'? Een s dus.",
            nogSimpeler: "Klinkt er een s tussen stad en plein?",
          },
        },
      },
    ],
  },

  // ─── D. In het echt ───────────────────────────────────────
  {
    title: "In het echt — herkennen & spellen",
    explanation:
      "Bij de Doorstroomtoets moet je samenstellingen **herkennen** en goed **spellen**. Twee stappen:\n\n" +
      "1. **Knip** het woord in twee echte woorden (voetbal → voet + bal).\n" +
      "2. **Tussenletter?** Spreek het hardop uit: hoor je een **-en-** (pan→pannen → pannenkoek) of een **-s-** (dorps­plein)? Soms hoor je niets — dan schrijf je gewoon de twee woorden aan elkaar (voetbalveld, fietspad).\n\n" +
      "Twijfel je over -en-? Maak het eerste woord meervoud: kan dat met -en, dan komt dat -en- meestal in het woord.",
    checks: [
      {
        q: "Welk woord is een samenstelling?",
        options: ["speelgoedwinkel", "vrolijk", "rennen", "groot"],
        answer: 0,
        wrongHints: [null, "Dat is één bijvoeglijk naamwoord.", "Dat is één werkwoord.", "Ook één woord."],
        uitlegPad: {
          stappen: [{ titel: "speelgoed + winkel", tekst: "Speelgoedwinkel = speelgoed + winkel, dus een samenstelling." }],
          niveaus: {
            basis: "speelgoedwinkel (speelgoed + winkel) is een samenstelling.",
            simpeler: "Welk woord kun je in twee woorden knippen?",
            nogSimpeler: "In welk woord zitten twee woorden?",
          },
        },
      },
      {
        q: "Hoe schrijf je: het veld waarop je voetbalt?",
        options: ["voetbalveld", "voetbalsveld", "voetbalenveld", "voetbal veld"],
        answer: 0,
        wrongHints: [null, "Je hoort hier geen -s-.", "Je hoort hier geen -en-.", "Een samenstelling schrijf je aan elkaar."],
        uitlegPad: {
          stappen: [{ titel: "Geen tussenletter", tekst: "Bij 'voetbalveld' hoor je geen -s- of -en-: gewoon voetbal + veld aan elkaar." }],
          niveaus: {
            basis: "voetbal + veld = voetbalveld, zonder tussenletter.",
            simpeler: "Hoor je een s of -en- tussen voetbal en veld? Nee.",
            nogSimpeler: "voetbal + veld = ?",
          },
        },
      },
      {
        q: "Hoe schrijf je: een stalling voor fietsen?",
        options: ["fietsenstalling", "fietsstalling", "fietsestalling", "fietsenstallingen"],
        answer: 0,
        wrongHints: [null, "Fiets → fietsen, dus met tussen-n.", "Het is -en-, niet alleen -e-.", "Dat is het meervoud."],
        uitlegPad: {
          stappen: [{ titel: "fiets → fietsen → fietsenstalling", tekst: "Het meervoud van 'fiets' is 'fietsen'. Daarom fietsenstalling, met tussen-n." }],
          niveaus: {
            basis: "fiets → fietsen, dus fietsenstalling.",
            simpeler: "Meervoud van 'fiets'? Dat -en- komt erin.",
            nogSimpeler: "fietsen + stalling = ?",
          },
        },
      },
      {
        q: "Welke is goed: het pad voor fietsers?",
        options: ["fietspad", "fietsenpad", "fietsspad", "fiets pad"],
        answer: 0,
        wrongHints: [null, "Je hoort hier geen -en-.", "Je hoort geen dubbele -s-.", "Een samenstelling schrijf je aan elkaar."],
        uitlegPad: {
          stappen: [{ titel: "Geen tussenletter", tekst: "Bij 'fietspad' hoor je geen -en- of extra -s-: gewoon fiets + pad. (Vergelijk: bij fietsenstalling hoor je wél -en-.)" }],
          niveaus: {
            basis: "fiets + pad = fietspad, zonder tussenletter.",
            simpeler: "Hoor je een -en- tussen fiets en pad? Nee.",
            nogSimpeler: "fiets + pad = ?",
          },
        },
      },
    ],
  },
];

export default {
  id: "samenstellingen-tussenletters-po",
  title: "Samenstellingen & tussenletters",
  subject: "taal",
  level: "groep7-8",
  sloThema: "taal-samenstellingen",
  chapters,
  steps,
  prerequisites: [],
};
