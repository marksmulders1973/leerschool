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
          "een woord dat twee betekenissen heeft",
          "een woord met twee of meer lettergrepen",
          "een woord dat uit een andere taal komt",
        ],
        answer: 0,
        wrongHints: [null, "'Bank' heeft twee betekenissen. Is 'bank' daarom een samenstelling?", "'Tafel' heeft twee lettergrepen. Is 'tafel' een samenstelling?", "'Voetbal' is een Nederlands woord en toch een samenstelling. Waar let je dan op?"],
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
        options: ["voet + bal", "voeten + bal", "voetb + al", "voet + baal"],
        answer: 0,
        wrongHints: [null, "Zie je 'en' staan in 'voetbal'? Kijk letter voor letter.", "'voetb' is geen woord.", "Hoeveel a's staan er in 'voetbal'?"],
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
        options: ["tafelpoot", "olifant", "vakantie", "limonade"],
        answer: 0,
        wrongHints: [null, "Kun je 'olifant' knippen in twee echte woorden?", "Is 'va' of 'kantie' een echt woord?", "Kun je 'limonade' knippen in twee echte woorden?"],
        uitlegPad: {
          stappen: [{ titel: "Twee woorden erin", tekst: "Tafelpoot = tafel + poot, dus een samenstelling. 'olifant', 'vakantie' en 'limonade' kun je niet in twee echte woorden knippen." }],
          niveaus: {
            basis: "tafelpoot (tafel + poot) is een samenstelling.",
            simpeler: "Welk woord kun je in twee woorden knippen?",
            nogSimpeler: "In welk woord zitten twee woorden: tafelpoot?",
          },
        },
      },
      {
        q: "Hoe schrijf je een samenstelling?",
        options: ["aan elkaar, als één woord", "met een streepje tussen de woorden", "los, met een spatie ertussen", "met een hoofdletter in het midden"],
        answer: 0,
        wrongHints: [null, "Schrijf je 'voet-bal'? Kijk hoe 'voetbal' in de les staat.", "Zie je een spatie in 'tafelpoot'?", "Geen hoofdletter midden in een woord."],
        uitlegPad: {
          stappen: [{ titel: "Eén woord", tekst: "Een samenstelling schrijf je aan elkaar: voetbal, tafelpoot — niet 'voet bal'." }],
          niveaus: {
            basis: "Een samenstelling schrijf je als één woord, aan elkaar.",
            simpeler: "Schrijf je 'voetbal' los of aan elkaar?",
            nogSimpeler: "Is 'voetbal' één woord?",
          },
        },
      },
      {
        q: "Uit welke twee woorden bestaat 'speelgoedwinkel'?",
        options: ["speelgoed + winkel", "speel + goedwinkel", "speelgoed + winkels", "speel + goed + winkel"],
        answer: 0,
        wrongHints: [null, "'goedwinkel' is geen zelfstandig woord.", "Staat er 'winkels' in 'speelgoedwinkel'? Kijk naar het eind.", "De vraag zoekt twee woorden. Hoeveel stukken heb je hier?"],
        uitlegPad: {
          stappen: [{ titel: "Twee echte woorden", tekst: "Speelgoedwinkel = speelgoed + winkel. Allebei zijn het echte woorden." }],
          niveaus: {
            basis: "speelgoed + winkel = speelgoedwinkel.",
            simpeler: "Welke twee échte woorden zitten erin?",
            nogSimpeler: "Speelgoed en … winkel?",
          },
        },
      },
      {
        q: "Welk woord is GEEN samenstelling?",
        options: ["bloemen", "bloembol", "bloemkool", "bloemperk"],
        answer: 0,
        wrongHints: [null,"Kun je 'bloembol' in twee losse woorden knippen? Dan is het wél een samenstelling.","Kun je 'bloemkool' in twee losse woorden knippen? Dan is het ook een samenstelling.","Kun je 'bloemperk' in twee losse woorden knippen? Dan is het ook een samenstelling."],
        uitlegPad: {
          stappen: [{ titel: "Eén woord is geen samenstelling", tekst: "'Bloemen' is het meervoud van bloem — één woord, geen twee samengevoegde woorden." }],
          niveaus: {
            basis: "'Bloemen' is één woord, geen twee woorden samengevoegd.",
            simpeler: "Kun je 'bloemen' in twee echte woorden knippen? Nee.",
            nogSimpeler: "Bij welk woord kun je geen twee losse woorden vinden?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Uit welke twee woorden bestaat 'zandkasteel'?",
        options: ["zand + kasteel", "zan + dkasteel", "zandkas + teel", "zandka + steel"],
        answer: 0,
        wrongHints: [null, "Is 'zan' een echt woord?", "Is 'teel' een echt woord?", "Zijn allebei de stukjes echte woorden?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Knippen",
              tekst: "Knip op de plek waar twee echte woorden ontstaan: zand + kasteel = zandkasteel.",
            },
          ],
          niveaus: {
            basis: "zandkasteel = zand + kasteel: twee echte woorden.",
            simpeler: "Waar bouw je een kasteel van op het strand? Van zand.",
            nogSimpeler: "zand + kasteel = ?",
          },
        },
      },
      {
        q: "Je plakt 'boom' en 'hut' aan elkaar. Welk woord krijg je?",
        options: ["boomhut", "hutboom", "boom hut", "boomshut"],
        answer: 0,
        wrongHints: [
          null,
          "Welk woord komt eerst: 'boom' of 'hut'?",
          "Hoe schrijf je een samenstelling: los of aan elkaar?",
          "Hoor je een s tussen 'boom' en 'hut'?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Aan elkaar",
              tekst: "Een hut in een boom is een boomhut: boom + hut, als één woord geschreven.",
            },
          ],
          niveaus: {
            basis: "boom + hut = boomhut, aan elkaar.",
            simpeler: "Een hut in een boom heet een ...",
            nogSimpeler: "boom + hut = ?",
          },
        },
      },
      {
        q: "Waarom is 'huisdeur' een samenstelling?",
        options: [
          "het bestaat uit 'huis' en 'deur'",
          "het is een heel lang woord",
          "het heeft twee lettergrepen",
          "het is de naam van een ding",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Is elk lang woord een samenstelling?",
          "'Tafel' heeft ook twee lettergrepen. Is dat een samenstelling?",
          "Waar is een samenstelling van gemaakt?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Twee woorden",
              tekst: "Een samenstelling is één woord gemaakt van twee losse woorden: huis + deur = huisdeur.",
            },
          ],
          niveaus: {
            basis: "huis + deur = huisdeur: twee woorden samen.",
            simpeler: "Welke twee woorden zie je in 'huisdeur'?",
            nogSimpeler: "huis + deur = ?",
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
        wrongHints: [null,"Wat is het meervoud van 'pan'? Dat hoor je terug in het woord.","Kijk naar het meervoud van 'pan'. Schrijf je die hele uitgang ook in het woord?","Dat is het meervoud (meerdere koeken)."],
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
        wrongHints: [null, "Wat is het meervoud van 'krant'? Hoor je dat terug?", "Hoor je alleen een e, of ook een n na 'krant'?", "Dat is het meervoud."],
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
        options: ["als het eerste woord meervoud op -en heeft","als het tweede woord met een klinker begint","als het eerste woord eindigt op een -n","als het eerste woord meer dan één lettergreep heeft"],
        answer: 0,
        wrongHints: [null,"Denk aan 'krantenwijk': 'wijk' begint niet met een klinker.","Denk aan 'krantenwijk': 'krant' eindigt niet op een n en toch komt er -en-.","'Krant' heeft maar één lettergreep en toch schrijf je 'krantenwijk'."],
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
        options: ["boekenkast", "boekkast", "boekekast", "boekskast"],
        answer: 0,
        wrongHints: [null, "Wat is het meervoud van 'boek'? Hoor je dat stukje terug in het woord?", "Je hoort wel iets tussen 'boek' en 'kast' — welke letters horen daar precies?", "Hoor je echt een s tussen 'boek' en 'kast'? Denk aan het meervoud van 'boek'."],
        uitlegPad: {
          stappen: [{ titel: "boek → boeken → boekenkast", tekst: "Het meervoud van 'boek' is 'boeken'. Daarom boekenkast, met tussen-n." }],
          niveaus: {
            basis: "boek → boeken, dus boekenkast.",
            simpeler: "Meervoud van 'boek'? Dat -en- komt erin.",
            nogSimpeler: "boeken + kast = ?",
          },
        },
      },
      {
        q: "Hoe schrijf je: de tafel in de keuken?",
        options: ["keukentafel", "keukenstafel", "keuktafel", "keukenetafel"],
        answer: 0,
        wrongHints: [null, "Hoor je een s tussen 'keuken' en 'tafel'?", "Het woord is 'keuken'. Laat je daar letters van weg?", "Het is -en-, niet een extra -e-."],
        uitlegPad: {
          stappen: [{ titel: "keuken + tafel = keukentafel", tekst: "Het meervoud van 'keuken' is 'keukens' (op -s), maar het woord zelf eindigt al op -en. Daarom: keukentafel, met het -en- van het eerste woord." }],
          niveaus: {
            basis: "keuken + tafel = keukentafel.",
            simpeler: "Zet de twee woorden aan elkaar: keuken en tafel.",
            nogSimpeler: "keuken + tafel = ?",
          },
        },
      },
      {
        q: "Hoeveel lettergrepen heeft het woord 'bloemenwinkel'?",
        options: ["4", "3", "5", "2"],
        answer: 0,
        wrongHints: [null, "Klap nog eens mee en tel — het zijn er meer.", "Zo veel zijn het er niet.", "Het zijn er meer dan twee."],
        uitlegPad: {
          stappen: [{ titel: "bloe-men-win-kel", tekst: "Bloe (1), men (2), win (3), kel (4): vier klappen, dus 4 lettergrepen." }],
          niveaus: {
            basis: "bloe-men-win-kel = 4 lettergrepen.",
            simpeler: "Klap mee bij 'bloemenwinkel'.",
            nogSimpeler: "bloe — men — win — kel: hoeveel klappen?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoe schrijf je: het hok voor de kippen?",
        options: ["kippenhok", "kiphok", "kippehok", "kipshok"],
        answer: 0,
        wrongHints: [null, "Wat is het meervoud van 'kip'?", "Hoe eindigt het meervoud van 'kip'?", "Hoor je een s tussen 'kip' en 'hok'?"],
        uitlegPad: {
          stappen: [
            {
              titel: "kip → kippen → kippenhok",
              tekst: "Het meervoud van 'kip' is 'kippen'. Dat -en- komt in het woord: kippenhok.",
            },
          ],
          niveaus: {
            basis: "kip → kippen, dus kippenhok.",
            simpeler: "Meervoud van 'kip'? Dat -en- komt erin.",
            nogSimpeler: "kippen + hok = ?",
          },
        },
      },
      {
        q: "Hoe schrijf je: de borstel voor je tanden?",
        options: ["tandenborstel", "tandeborstel", "tandsborstel", "tanden borstel"],
        answer: 0,
        wrongHints: [
          null,
          "Hoe eindigt het meervoud van 'tand'?",
          "Hoor je een s tussen 'tand' en 'borstel'?",
          "Schrijf je een samenstelling los of aan elkaar?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "tand → tanden → tandenborstel",
              tekst: "Het meervoud van 'tand' is 'tanden'. Daarom tandenborstel, met tussen-n, aan elkaar.",
            },
          ],
          niveaus: {
            basis: "tand → tanden, dus tandenborstel.",
            simpeler: "Meervoud van 'tand'? Dat -en- komt erin.",
            nogSimpeler: "tanden + borstel = ?",
          },
        },
      },
      {
        q: "In welk woord zit een tussen-n?",
        options: ["eendenvijver", "verkeerslicht", "deurbel", "zandbak"],
        answer: 0,
        wrongHints: [null, "Welke tussenletter hoor je hier?", "Hoor je iets tussen 'deur' en 'bel'?", "Zit hier wel een tussenletter in?"],
        uitlegPad: {
          stappen: [
            {
              titel: "eend → eenden",
              tekst: "Het meervoud van 'eend' is 'eenden'. Dat -en- zit in eendenvijver. Verkeerslicht heeft een tussen-s; deurbel en zandbak hebben geen tussenletter.",
            },
          ],
          niveaus: {
            basis: "eend → eenden, dus eendenvijver heeft een tussen-n.",
            simpeler: "Zoek het woord met -en- in het midden.",
            nogSimpeler: "eenden + vijver = ?",
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
        options: ["verkeersbord", "verkeerbord", "verkeerenbord", "verkeersborden"],
        answer: 0,
        wrongHints: [null, "Spreek het uit — je hoort een -s-.", "Hoor je -en- tussen 'verkeer' en 'bord'?", "Dat is het meervoud."],
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
        wrongHints: [null, "Dat heeft juist een tussen-n.", "Ook een tussen-n.", "Die heeft helemaal geen tussenletter."],
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
        options: ["een tussen-s", "een tussen-n", "geen van beide", "een tussen-e"],
        answer: 0,
        wrongHints: [null, "Spreek het woord eens langzaam uit — welke letter hoor je tussen 'stad' en 'plein'?", "Er zit wél een tussenletter — luister nog eens goed.", "Zeg je 'stade-plein'? Luister welke klank je echt hoort."],
        uitlegPad: {
          stappen: [{ titel: "stads-plein", tekst: "Zeg 'stad...plein': je hoort een s. Dus stadsplein, met tussen-s." }],
          niveaus: {
            basis: "Je hoort een -s-: stadsplein (tussen-s).",
            simpeler: "Hoor je 'staden' of 'stads'? Een s dus.",
            nogSimpeler: "Klinkt er een s tussen stad en plein?",
          },
        },
      },
      {
        q: "Hoe schrijf je: de markt in een stad?",
        options: ["stadsmarkt", "stadmarkt", "stadenmarkt", "stademarkt"],
        answer: 0,
        wrongHints: [null, "Spreek het uit — hoor je een -s- tussen stad en markt?", "Hier hoor je geen -en-.", "Het is alleen een -s-, geen -e-."],
        uitlegPad: {
          stappen: [{ titel: "stad + s + markt = stadsmarkt", tekst: "Zeg 'stad...markt': je hoort een s ertussen. Dus stadsmarkt, met tussen-s." }],
          niveaus: {
            basis: "Je hoort een -s-: stadsmarkt.",
            simpeler: "Hoor je een s tussen stad en markt?",
            nogSimpeler: "stads + markt = ?",
          },
        },
      },
      {
        q: "Welk woord heeft een tussen-s?",
        options: ["verjaardagstaart", "kerstvakantie", "schoolvoetbal", "postzegelalbum"],
        answer: 0,
        wrongHints: [null, "De s hoort bij 'kerst' zelf. Is dat een tussen-s?", "Hoor je een s tussen 'school' en 'voetbal'?", "De s hoort bij 'post' zelf. Komt er tussen 'postzegel' en 'album' iets bij?"],
        uitlegPad: {
          stappen: [{ titel: "verjaardags-taart", tekst: "Bij 'verjaardagstaart' hoor je een -s- tussen verjaardag en taart. Bij de andere woorden hoort de s bij het woord zelf, of hoor je geen s." }],
          niveaus: {
            basis: "'verjaardagstaart' heeft een tussen-s.",
            simpeler: "Hoor je bij welk woord een -s- ertussen?",
            nogSimpeler: "Bij welk woord hoor je 'verjaardags' (met s) ertussen?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Het lied van een land, dat je zingt bij een grote wedstrijd, heet het...",
        options: ["volkslied", "volklied", "volkenlied", "volkeslied"],
        answer: 0,
        wrongHints: [
          null,
          "Spreek het uit: hoor je een s tussen 'volk' en 'lied'?",
          "Hoor je hier -en- of een -s-?",
          "Hoor je 'es' of alleen een s tussen 'volk' en 'lied'?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "volks-lied",
              tekst: "Zeg 'volk...lied': je hoort een s. Dus volkslied, met tussen-s.",
            },
          ],
          niveaus: {
            basis: "Je hoort een -s-: volkslied.",
            simpeler: "Zeg het hardop: 'volkslied'. Hoor je de s?",
            nogSimpeler: "volk + s + lied = ?",
          },
        },
      },
      {
        q: "Welk woord is FOUT gespeld, omdat de tussen-s ontbreekt?",
        options: ["oorlogschip", "fietsbel", "kerstboom", "dorpsstraat"],
        answer: 0,
        wrongHints: [
          null,
          "Spreek dit woord uit: hoor je een extra s tussen de twee delen?",
          "De s in 'kerst' hoort bij het woord zelf. Mist hier iets?",
          "Kijk goed: staat de s die je hoort er al in?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "oorlogs-schip",
              tekst: "Zeg 'oorlog...schip': je hoort een s. Dus het moet 'oorlogsschip' zijn. Bij fietsbel en kerstboom hoor je geen extra s; dorpsstraat heeft de s al.",
            },
          ],
          niveaus: {
            basis: "oorlog + s + schip = oorlogsschip. Daar ontbreekt de s.",
            simpeler: "Zeg 'oorlogsschip' hardop. Staat die s in het woord?",
            nogSimpeler: "Hoor je een s na 'oorlog'?",
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
      "2. **Tussenletter?** Spreek het hardop uit: hoor je een **-en-** (pan→pannen → pannenkoek) of een **-s-** (dorpsplein)? Soms hoor je niets — dan schrijf je gewoon de twee woorden aan elkaar (voetbalveld, fietspad).\n\n" +
      "Twijfel je over -en-? Maak het eerste woord meervoud: kan dat met -en, dan komt dat -en- meestal in het woord.",
    checks: [
      {
        q: "Welk woord is een samenstelling?",
        options: ["speelgoedwinkel", "verschrikkelijk", "temperatuur", "bibliotheek"],
        answer: 0,
        wrongHints: [null, "Kun je 'verschrikkelijk' knippen in twee echte woorden?", "Kun je 'temperatuur' knippen in twee echte woorden?", "Kun je 'bibliotheek' knippen in twee echte woorden?"],
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
        options: ["fietsenstalling", "fietsen stalling", "fietsestalling", "fietsenstallingen"],
        answer: 0,
        wrongHints: [null, "Een samenstelling schrijf je aan elkaar.", "Het is -en-, niet alleen -e-.", "Dat is het meervoud."],
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
        q: "Hoe schrijf je: het pad voor fietsers?",
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
      {
        q: "Hoe schrijf je: een winkel waar je schoenen koopt?",
        options: ["schoenenwinkel", "schoenewinkel", "schoeneswinkel", "schoenenswinkels"],
        answer: 0,
        wrongHints: [null, "Het is -en-, niet alleen -e-.", "Er hoort geen -s- in.", "Dat is het meervoud, en er hoort geen -s- in."],
        uitlegPad: {
          stappen: [{ titel: "schoen → schoenen → schoenenwinkel", tekst: "Het meervoud van 'schoen' is 'schoenen'. Daarom schoenenwinkel, met tussen-n." }],
          niveaus: {
            basis: "schoen → schoenen, dus schoenenwinkel.",
            simpeler: "Meervoud van 'schoen'? Dat -en- komt erin.",
            nogSimpeler: "schoenen + winkel = ?",
          },
        },
      },
      {
        q: "Welke twee woorden maken samen 'woordenboek'?",
        options: ["woorden + boek", "woord + enboek", "het is één woord, je kunt het niet knippen", "woor + denboek"],
        answer: 0,
        wrongHints: [null, "'enboek' is geen woord.", "Kijk naar het eind: staat daar een los woord?", "'denboek' is geen woord."],
        uitlegPad: {
          stappen: [{ titel: "woorden + boek", tekst: "Woordenboek = woord + boek, met -en- ertussen (woord → woorden). Dus woorden + boek." }],
          niveaus: {
            basis: "woord → woorden + boek = woordenboek.",
            simpeler: "Meervoud van 'woord'? Dat -en- zit ertussen.",
            nogSimpeler: "woorden + boek = ?",
          },
        },
      },
      {
        q: "Hoe schrijf je: een centrum voor sport in een stad?",
        options: ["sportcentrum", "sportencentrum", "sportscentrum", "sport centrum"],
        answer: 0,
        wrongHints: [null, "Je hoort hier geen -en-.", "Je hoort hier geen -s-.", "Een samenstelling schrijf je aan elkaar."],
        uitlegPad: {
          stappen: [{ titel: "Geen tussenletter", tekst: "Bij 'sportcentrum' hoor je geen extra -en- of -s-: gewoon sport + centrum aan elkaar." }],
          niveaus: {
            basis: "sport + centrum = sportcentrum, zonder tussenletter.",
            simpeler: "Hoor je een extra letter tussen sport en centrum? Nee.",
            nogSimpeler: "sport + centrum = ?",
          },
        },
      },
      {
        q: "Hoe schrijf je: de rand van een stad?",
        options: ["stadsrand", "stadrand", "stadenrand", "stadsranden"],
        answer: 0,
        wrongHints: [null, "Spreek het uit — hoor je een -s- tussen stad en rand?", "Hier hoor je geen -en-.", "Dat is het meervoud."],
        uitlegPad: {
          stappen: [{ titel: "stad + s + rand = stadsrand", tekst: "Zeg 'stad...rand': je hoort een s. Dus stadsrand, met tussen-s." }],
          niveaus: {
            basis: "Je hoort een -s-: stadsrand.",
            simpeler: "Hoor je een s tussen stad en rand?",
            nogSimpeler: "stads + rand = ?",
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
