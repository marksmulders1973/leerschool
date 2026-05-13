// Leerpad: Spelling overige — -isch, leestekens, samenstellingen, hoofdletters
// 5 stappen voor groep 5-8.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#26c6da",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["🔤","✒️","🔗","🅰️","🏆"];

const chapters = [
  { letter: "A", title: "-isch / -lijk", emoji: "🔤", from: 0, to: 0 },
  { letter: "B", title: "Leestekens — punt, komma, vraagteken", emoji: "✒️", from: 1, to: 1 },
  { letter: "C", title: "Samenstellingen — woorden plakken", emoji: "🔗", from: 2, to: 2 },
  { letter: "D", title: "Hoofdletters", emoji: "🅰️", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Spelling van -isch en -lijk",
    explanation: "Twee woord-eindes die vaak fout gaan: **-isch** en **-lijk**.\n\n**Regel -isch**:\nAls een woord eindigt op een **'ies'-klank** *(zoals in 'tropisch')* schrijf je **-isch** (met -ch).\n• tropisch (niet 'tropies')\n• logisch\n• elektrisch\n• fantastisch\n• komisch\n\n**Truc**: zet er '-e' achter. Hoor je 'iese'? Dan -isch.\n• tropisch → tropische ✓\n• logisch → logische ✓\n\n**Uitzondering**: na een **f, t, p, ch, k, s** krijgt het soms 'ies'-spelling, bijv. 'fris', 'kennis'. Maar dat zijn meestal **andere** woorden, geen -isch-woorden.\n\n**Regel -lijk**:\nWoorden die eindigen op een **'-uk'-klank** schrijf je met **-lijk**.\n• vrolijk\n• mogelijk\n• waarschijnlijk\n• gemakkelijk\n• gevaarlijk\n\n**Truc**: zet er '-e' achter. Hoor je '-luk-e'? Dan -lijk.\n• vrolijk → vrolijke ✓\n\n**Cito-tip**:\n• Hoor je 'iese' op het eind → schrijf -isch.\n• Hoor je '-uk' op het eind → schrijf -lijk.",
    checks: [
      {
        q: "**'tropisch'** of **'tropies'**?",
        options: ["tropisch","tropies","tropich","tropiesch"],
        answer: 0,
        wrongHints: [null,"Truc: hoor je 'iese' achter 'tropisch-e'? Dan -isch.","-ch komt na de 's', dus -isch (volgorde s-c-h).","Eén 'sch' is genoeg."],
        uitlegPad: {
          stappen: [
            { titel: "-isch herkennen", tekst: "'Iese'-klank op het eind = -isch (sch)." },
            { titel: "-e-truc", tekst: "Tropisch + e = tropische ✓. Hoorbaar 'iese'." },
          ],
          woorden: [{ woord: "-isch", uitleg: "Veelvoorkomend Latijns/Grieks achtervoegsel: tropisch, logisch, fantastisch." }],
          theorie: "Hoor je 'iese' op het eind? Schrijf -isch (3 letters: s-c-h). Niet 'ies', niet 'ich'.",
          voorbeelden: [{ type: "isch", tekst: "logisch, fantastisch, komisch, elektrisch, tropisch — allemaal -isch." }],
          basiskennis: [{ onderwerp: "Latijnse afkomst", uitleg: "Veel -isch-woorden komen uit Grieks/Latijn." }],
          niveaus: {
            basis: "Iese-klank → -isch. A.",
            simpeler: "Zeg 'tropisch-e'. Hoor je 'iese'? Ja. Dan -isch (sch). = A.",
            nogSimpeler: "Iese = isch = A.",
          },
        },
      },
      {
        q: "**'mogelijk'** of **'mogelik'**?",
        options: ["mogelijk","mogelik","mogeluk","mogelijck"],
        answer: 0,
        wrongHints: [null,"-lijk wordt geschreven met -lijk, niet -lik.","Niet 'uk' geschreven als 'uk'.","Geen -ck."],
        uitlegPad: {
          stappen: [
            { titel: "-lijk herkennen", tekst: "'Uk'-klank op het eind = altijd -lijk geschreven (met ij)." },
            { titel: "Test", tekst: "Mogelijk + e = mogelijke ✓. Niet -lik (te kort), niet -luk (geen ij)." },
          ],
          woorden: [{ woord: "-lijk", uitleg: "Veelvoorkomend NL achtervoegsel met onuitgesproken ij." }],
          theorie: "Hoor je 'uk' op het eind? Schrijf altijd -lijk (vaste spelling). Vrolijk, mogelijk, gevaarlijk.",
          voorbeelden: [{ type: "lijk", tekst: "vrolijk, mogelijk, gevaarlijk, gemakkelijk, waarschijnlijk." }],
          basiskennis: [{ onderwerp: "Stille ij", uitleg: "De ij in -lijk wordt zwak uitgesproken (bijna 'uk' klank), maar wel ij geschreven." }],
          niveaus: {
            basis: "Uk-klank → -lijk. A.",
            simpeler: "'Mogelijk' klinkt als 'mogeluk' aan het eind, maar SCHRIJF altijd -lijk (met ij). = A.",
            nogSimpeler: "Uk = lijk = A.",
          },
        },
      },
      {
        q: "Welke is **fout** geschreven?",
        options: ["fantasties","fantastisch","logisch","komisch"],
        answer: 0,
        wrongHints: [null,"Goed gespeld.","Goed gespeld.","Goed gespeld."],
        uitlegPad: {
          stappen: [
            { titel: "Welke is FOUT?", tekst: "'Fantasties' eindigt op -ies. Moet -isch zijn: fantastisch." },
          ],
          woorden: [{ woord: "fout", uitleg: "Niet correct gespeld." }],
          theorie: "-ies bestaat niet als achtervoegsel voor deze woorden. Altijd -isch: fantastisch, niet fantasties.",
          voorbeelden: [{ type: "fout", tekst: "fantasties ✗ → fantastisch ✓." }],
          basiskennis: [{ onderwerp: "FOUT-vraag", uitleg: "Lees vraag goed: zoek wat NIET klopt, niet wat wel klopt." }],
          niveaus: {
            basis: "Fantasties = fout (moet fantastisch). A.",
            simpeler: "Iese-klank → altijd -isch. 'Fantasties' is verkeerd, moet 'fantastisch' zijn. = A.",
            nogSimpeler: "Fantasties fout = A.",
          },
        },
      },
      {
        q: "**'gevaarlijk'** of **'gevaarlik'**?",
        options: ["gevaarlijk","gevaarlik","gevaarluk","gevarelijk"],
        answer: 0,
        wrongHints: [null,"Niet -lik.","Niet -luk.","Niet 'gevarelijk' — er staat een 'a-a'."],
        uitlegPad: {
          stappen: [
            { titel: "Uk-klank → -lijk", tekst: "Gevaarlijk eindigt op 'uk-klank' → schrijf -lijk." },
          ],
          woorden: [{ woord: "stille ij", uitleg: "ij in -lijk wordt zwak uitgesproken." }],
          theorie: "Vaste regel: -uk-klank op eind = -lijk. Zelfde als vrolijk, mogelijk.",
          voorbeelden: [{ type: "lijk", tekst: "gevaarlijk, vrolijk, mogelijk, gemakkelijk." }],
          basiskennis: [{ onderwerp: "Onthoud", uitleg: "-lijk komt heel vaak voor in NL." }],
          niveaus: {
            basis: "Uk-klank = -lijk → gevaarlijk. A.",
            simpeler: "Klinkt als 'gevaar-luk', schrijf 'gevaar-lijk'. Standaard NL-regel. = A.",
            nogSimpeler: "Lijk = A.",
          },
        },
      },
    ],
  },

  {
    title: "Leestekens — punt, komma, vraagteken",
    explanation: "**Leestekens** maken een tekst leesbaar.\n\n**Punt . **\n• **Einde van een zin** die een gewone **mededeling** is.\n• 'De zon schijnt vandaag.'\n• Na een afkorting: 'mevr.', 'bv.', 'a.u.b.'\n\n**Komma , **\n• **Pauze in een zin** of bij **opsomming**.\n• 'Ik kocht appels, peren en bananen.' *(de laatste vóór 'en' is optioneel)*.\n• Na 'maar', 'omdat' soms wel/niet — luister naar de pauze.\n• Tussen twee hoofdzinnen verbonden met 'en'/'of'/'maar' kan komma.\n\n**Vraagteken ?**\n• **Einde van een vraag**.\n• 'Wat is jouw naam?'\n\n**Uitroepteken !**\n• **Sterk gevoel** of **bevel**.\n• 'Wauw, geweldig!' / 'Stop!' / 'Pas op!'\n\n**Cito-fouten**:\n• Vergeten van punt aan eind = fout.\n• ? aan einde van een mededeling = fout.\n• Komma's missen in opsomming = fout.\n\n**Voorbeeld**:\n*'Wat een mooie dag'* — mist een **!** of **.**\n*'Ben jij ziek'* — mist een **?**\n\n**Cito-tip**:\nLees de zin hardop in je hoofd. Hoor je de stem **omhoog gaan** aan eind → vraagteken. Hoor je **uitroep** → uitroepteken. Anders: **punt**.",
    checks: [
      {
        q: "*'Hoe oud ben je___'* — welk leesteken?",
        options: ["?",".","!",","],
        answer: 0,
        wrongHints: [null,"Maar dit is een vraag.","Geen sterk gevoel — gewone vraag.","Komma is voor pauze in zin."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is dit?", tekst: "'Hoe oud ben je' = vraag → vraagteken (?)." },
          ],
          woorden: [{ woord: "vraagteken", uitleg: "? aan eind van een vraag-zin." }],
          theorie: "Leestekens: . (mededeling), ? (vraag), ! (uitroep), , (pauze). Vraag = altijd ?.",
          voorbeelden: [{ type: "vraag", tekst: "'Wat is je naam?', 'Hoe heet je?', 'Ga je mee?' — allemaal ?." }],
          basiskennis: [{ onderwerp: "Stem omhoog", uitleg: "Bij vraag gaat je stem omhoog aan het eind. Hoor je dat → ?." }],
          niveaus: {
            basis: "Vraag = ?. A.",
            simpeler: "'Hoe oud ben je' is een vraag. Bij vragen schrijf je een vraagteken: ?. = A.",
            nogSimpeler: "Vraag = ? = A.",
          },
        },
      },
      {
        q: "*'Wauw___ wat een mooi cadeau___'* — welke twee leestekens?",
        options: ["! en !","? en ?",". en .",", en ."],
        answer: 0,
        wrongHints: [null,"Geen vraag.","Te neutraal voor een sterk gevoel.","Eerste is 'wauw' — sterk."],
        uitlegPad: {
          stappen: [
            { titel: "Sterk gevoel", tekst: "'Wauw' = uitroep van verbazing. 'Wat een mooi cadeau' = uitroep van blijheid. Beide = !." },
          ],
          woorden: [{ woord: "uitroepteken", uitleg: "! voor sterke emotie of bevel." }],
          theorie: "Uitroepteken (!) bij: verbazing (Wauw!), blijheid (Geweldig!), bevel (Stop!), boosheid (Eruit!).",
          voorbeelden: [{ type: "!", tekst: "Wauw! / Pas op! / Wat fijn! — allemaal !." }],
          basiskennis: [{ onderwerp: "Niet overdrijven", uitleg: "Niet ELKE zin met !, alleen sterke gevoelens." }],
          niveaus: {
            basis: "Uitroep + uitroep = ! + !. A.",
            simpeler: "Wauw is een verbaasde uitroep — !. 'Wat een mooi cadeau' is ook een uitroep van blijheid — !. Dus ! en !. = A.",
            nogSimpeler: "Twee uitroepen = !! = A.",
          },
        },
      },
      {
        q: "Welke zin staat **fout**?",
        options: ["Ik kocht appels peren en bananen.","Ik kocht appels, peren en bananen.","Ik ging naar huis.","Ben je oké?"],
        answer: 0,
        wrongHints: [null,"Goed — komma's in opsomming.","Goed gespeld.","Goed gespeld."],
        uitlegPad: {
          stappen: [
            { titel: "Welke is fout?", tekst: "'Ik kocht appels peren en bananen' mist komma. Bij opsomming zet je komma tussen items." },
          ],
          woorden: [{ woord: "opsomming", uitleg: "Lijst van 2+ dingen achter elkaar." }],
          theorie: "Bij opsomming: komma tussen items. 'Appels, peren en bananen' (komma na appels). Laatste item meestal met 'en' (geen komma daar nodig).",
          voorbeelden: [{ type: "opsomming", tekst: "Goed: 'rood, geel, groen en blauw'. Fout: 'rood geel groen en blauw'." }],
          basiskennis: [{ onderwerp: "Komma = pauze", uitleg: "Komma = kleine pauze in lezen. Bij opsomming pauzeer je tussen items." }],
          niveaus: {
            basis: "Opsomming zonder komma's = fout. A.",
            simpeler: "Lees A hardop: 'Ik kocht appels peren en bananen' — voelt vreemd, geen pauze tussen appels en peren. Komma nodig. = A is fout.",
            nogSimpeler: "Geen komma's = A fout = A.",
          },
        },
      },
    ],
  },

  {
    title: "Samenstellingen — woorden plakken",
    explanation: "**Samenstellingen** = twee of meer woorden aan elkaar geplakt tot één woord.\n\n**Voorbeelden**:\n• tand + arts = **tandarts**\n• voetbal + schoen = **voetbalschoen**\n• boek + kast = **boekenkast**\n• zonne + bril = **zonnebril**\n\n**Hoofdregel**: schrijf het samengestelde woord aan elkaar.\n• ✓ tandarts (niet 'tand arts')\n• ✓ voetbalschoen (niet 'voetbal schoen')\n\n**Tussenletter -en-**:\nSoms zit er een '-en-' tussen.\n• boek**en**kast (1 boek of meer? meer)\n• pann**en**koek\n• Regel: de eerste woord-deel kun je je voorstellen in **meervoud** → **-en-** ertussen.\n  - 'boekenkast' = kast voor **boeken** (meervoud).\n  - 'pannenkoek' = koek uit een **pan** — toch -en-, dat is een uitzondering!\n\n**Tussenletter -e-**:\n• zonn**e**bril (de zon — 1 stuk, dus -e-)\n• begrot**e**ningskosten\n• regel: enkelvoud-zelfstandig naamwoord met -e- tussen.\n\n**Cito-fouten**:\n• 'voetbal schoen' (los geschreven) = fout. Aan elkaar.\n• 'pannekoek' = fout sinds 1995. Het is **pannenkoek**.\n• 'boekenwurm' = goed (boekenwurm — een persoon die veel boeken leest).\n\n**Tip**: Twijfel? Probeer het hardop:\n• 'voetbalschoen' = 1 ding (een soort schoen voor voetbal). Aan elkaar.",
    checks: [
      {
        q: "Welke is **goed** geschreven?",
        options: ["pannenkoek","pannekoek","panne koek","panne-koek"],
        answer: 0,
        wrongHints: [null,"Sinds 1995 met -en-.","Niet los.","Geen streepje."],
        uitlegPad: {
          stappen: [
            { titel: "Tussen-n", tekst: "Pan → meervoud pannen → samenstelling = pannenkoek." },
          ],
          woorden: [{ woord: "tussen-n", uitleg: "Extra letters 'en' bij samenstellingen waar eerste woord meervoud op -en heeft." }],
          theorie: "Sinds 1995 (spellingherziening): pan → pannen → pannenkoek met tussen-n. NIET 'pannekoek' (oude spelling).",
          voorbeelden: [{ type: "tussen-n", tekst: "pannenkoek, paddenstoel, boekenkast, hondenbak — allemaal tussen-n." }],
          basiskennis: [{ onderwerp: "Geen spatie", uitleg: "Samenstellingen aaneen geschreven, geen spatie of streepje." }],
          niveaus: {
            basis: "Pan → pannen → pannenkoek. A.",
            simpeler: "Meervoud van pan = pannen. Bij samenstelling met -en-meervoud → tussen-n. Pannen + koek = pannenkoek. = A.",
            nogSimpeler: "Pannenkoek = A.",
          },
        },
      },
      {
        q: "Welke is **fout** geschreven?",
        options: ["voetbal schoen","voetbalschoen","tandarts","zonnebril"],
        answer: 0,
        wrongHints: [null,"Goed (samenstelling).","Goed (samenstelling).","Goed (samenstelling)."],
        uitlegPad: {
          stappen: [
            { titel: "FOUT-vraag", tekst: "Zoek welke FOUT is. 'Voetbal schoen' staat los — moet aaneen: voetbalschoen." },
          ],
          woorden: [{ woord: "samenstelling", uitleg: "2+ woorden samen tot 1 nieuw woord. Aaneen schrijven in NL." }],
          theorie: "NL-regel: samenstellingen ALTIJD aaneen. Geen spatie, geen streepje (tenzij klinker-botsing).",
          voorbeelden: [{ type: "fout", tekst: "Voetbal schoen ✗ → voetbalschoen ✓. Net als tandarts en zonnebril." }],
          basiskennis: [{ onderwerp: "FOUT-vraag", uitleg: "Lees vraag goed: zoek wat NIET klopt." }],
          niveaus: {
            basis: "Voetbal schoen los = fout. A.",
            simpeler: "In NL plak je samenstellingen aaneen. 'Voetbal schoen' met spatie = fout. Moet 'voetbalschoen' zijn. = A.",
            nogSimpeler: "Spatie = fout = A.",
          },
        },
      },
      {
        q: "**'boekenkast'** — waarom -en- ertussen?",
        options: ["Een kast voor boeken (meervoud)","Klinkt mooier","Geen reden","Altijd -en- gebruiken"],
        answer: 0,
        wrongHints: [null,"Er is een regel.","Wel een reden.","Niet altijd."],
        uitlegPad: {
          stappen: [
            { titel: "Tussen-n-regel", tekst: "Boek heeft meervoud op -en (boeken). Daarom tussen-n in samenstellingen: boekenkast." },
          ],
          woorden: [{ woord: "tussen-n", uitleg: "Extra 'en' bij eerste-deel met meervoud op -en." }],
          theorie: "Bij elke samenstelling check: heeft eerste woord meervoud op -en? Ja → tussen-n. Boek → boeken → boekenkast.",
          voorbeelden: [{ type: "tussen-n", tekst: "boekenkast (boeken), pannenkoek (pannen), kindertekening — wacht, kind heeft meervoud kinderen → kindertekening." }],
          basiskennis: [{ onderwerp: "Niet altijd", uitleg: "Niet alle samenstellingen krijgen -en-. Alleen als eerste woord meervoud op -en heeft." }],
          niveaus: {
            basis: "Tussen-n want meervoud boeken. A.",
            simpeler: "Een 'boekenkast' is een kast VOOR meerdere boeken. Meervoud van boek = boeken. Daarom -en- ertussen. = A.",
            nogSimpeler: "Meervoud → -en- = A.",
          },
        },
      },
      {
        q: "Welke is **goed** geschreven?",
        options: ["zonnebril","zonne bril","zonne-bril","zonenbril"],
        answer: 0,
        wrongHints: [null,"Niet los.","Geen streepje.","Niet 'zonen'."],
        uitlegPad: {
          stappen: [
            { titel: "Aaneen", tekst: "Zonnebril = 1 woord (samenstelling). Geen spatie, geen streepje." },
          ],
          woorden: [{ woord: "aaneen", tekst: "Samenstellingen schrijf je aaneen.", uitleg: "Samenstellingen schrijf je aaneen." }],
          theorie: "Zon + bril = zonnebril. Verdubbel n omdat zon korte o heeft (zonn-).",
          voorbeelden: [{ type: "aaneen", tekst: "zonnebril, schoolboek, fietsenrek." }],
          basiskennis: [{ onderwerp: "Geen 'zonen'", uitleg: "Zonen = meervoud van zoon (kind). Geen relatie met zon." }],
          niveaus: {
            basis: "Aaneen = zonnebril. A.",
            simpeler: "Zon + bril = zonnebril, aaneen. (Niet 'zonen' — dat zijn kinderen, niet de zon). = A.",
            nogSimpeler: "Zonnebril = A.",
          },
        },
      },
    ],
  },

  {
    title: "Hoofdletters — wanneer wel?",
    explanation: "**Hoofdletter (BIG letter)** schrijf je in deze gevallen:\n\n**1. Aan het begin van een zin**.\n• 'Het regent vandaag.'\n• 'Na het ontbijt ging ik naar school.'\n\n**2. Eigennamen** *(namen van mensen, dieren, plaatsen)*:\n• Tom, Lisa, Amsterdam, Jupiter, Nederland\n• Mijn hond Buddy is lief.\n\n**3. Landen, talen, nationaliteiten**:\n• België, Frankrijk, Duitsland\n• Nederlands, Engels, Frans\n• een Nederlander, een Belg\n\n**4. Dagen, maanden NIET (tegenwoordig)**:\n• maandag, dinsdag — **kleine letter**\n• januari, februari — **kleine letter**\n• Uitzondering: aan begin van zin natuurlijk wel.\n\n**5. Feestdagen — meestal kleine letter**:\n• kerst, sinterklaas, pasen — kleine letter (sinds spelling-update)\n• MAAR: namen als 'Kerstmis' soms wel hoofdletter — context-afhankelijk.\n\n**6. Titels van boeken/films — eerste woord**:\n• 'Harry Potter en de Steen der Wijzen' — alleen het eerste woord+eigennamen.\n\n**7. God, namen religies**:\n• God, Allah, Boeddha — hoofdletter.\n• christendom, islam — kleine letter (dat zijn algemene woorden).\n\n**Cito-fouten**:\n• 'maandag' met **M** = fout (tenzij begin van zin).\n• 'amsterdam' zonder hoofdletter = fout.\n• Een naam zonder hoofdletter = fout.\n\n**Voorbeeld-zin**:\n*'Op maandag 5 mei 2026 ging Tom naar Amsterdam.'*\n• 'Op' = begin zin → hoofdletter.\n• 'maandag' = dag → klein.\n• '5 mei' = datum → klein.\n• '2026' = jaar.\n• 'Tom' = naam → hoofdletter.\n• 'Amsterdam' = plaats → hoofdletter.",
    checks: [
      {
        q: "Welke zin is **goed**?",
        options: ["Tom ging naar Amsterdam op maandag.","tom ging naar amsterdam op maandag.","Tom Ging Naar Amsterdam Op Maandag.","Tom ging naar amsterdam op Maandag."],
        answer: 0,
        wrongHints: [null,"Eerste woord en eigennamen vergeten.","Niet ELK woord met hoofdletter.","'amsterdam' wel met hoofdletter, 'maandag' niet."],
        uitlegPad: {
          stappen: [
            { titel: "Check elk woord", tekst: "Tom (eigennaam ✓), Amsterdam (eigennaam ✓), maandag (dag = klein ✓), Op (begin = hoofd ✓)." },
          ],
          woorden: [{ woord: "eigennaam", uitleg: "Specifieke naam: persoon, plaats, instantie. Krijgt hoofdletter." }],
          theorie: "**3 hoofdletter-regels:** begin zin + eigennamen + talen/volken. NIET: dagen, maanden, seizoenen.",
          voorbeelden: [{ type: "goed", tekst: "Tom (naam) + Amsterdam (plaats) = hoofd. Maandag (dag) = klein." }],
          basiskennis: [{ onderwerp: "Niet alles hoofd", uitleg: "Niet ELK woord met hoofdletter zoals in titels — alleen waar regels zeggen." }],
          niveaus: {
            basis: "Tom + Amsterdam hoofd, maandag klein. A.",
            simpeler: "Tom (naam = hoofdletter), Amsterdam (plaats = hoofdletter), maandag (dag = klein). A heeft alle 3 goed. = A.",
            nogSimpeler: "Naam + plaats hoofd = A.",
          },
        },
      },
      {
        q: "Welke woord schrijf je met **hoofdletter**?",
        options: ["Nederland","maandag","januari","kerst"],
        answer: 0,
        wrongHints: [null,"Klein (tenzij begin zin).","Klein.","Klein."],
        uitlegPad: {
          stappen: [
            { titel: "Welke is eigennaam?", tekst: "Nederland = land = eigennaam = hoofdletter. Maandag/januari/kerst = klein." },
          ],
          woorden: [{ woord: "eigennaam", uitleg: "Specifieke unieke naam — krijgt hoofdletter." }],
          theorie: "Landen WEL hoofdletter (Nederland, België). Dagen/maanden/feestdagen NIET (anders dan Engels).",
          voorbeelden: [{ type: "hoofd", tekst: "Nederland, Anna, Amsterdam = hoofd. maandag, mei, kerst = klein." }],
          basiskennis: [{ onderwerp: "NL ≠ Engels", uitleg: "Engels: Monday, December. NL: maandag, december." }],
          niveaus: {
            basis: "Land = hoofdletter. Nederland. A.",
            simpeler: "Welke is een land? Nederland — krijgt hoofdletter. De rest (dagen/maanden/feestdag) klein. = A.",
            nogSimpeler: "Land = hoofd = A.",
          },
        },
      },
      {
        q: "*'Hij spreekt vloeiend ___ans en ___ngels.'* — welk?",
        options: ["Frans, Engels","frans, engels","FRANS, ENGELS","Frans, engels"],
        answer: 0,
        wrongHints: [null,"Talen schrijf je met hoofdletter.","Geen reden voor hoofdletters overal.","Beide met hoofdletter."],
        uitlegPad: {
          stappen: [
            { titel: "Talen = hoofdletter", tekst: "In NL: namen van talen krijgen hoofdletter. Frans, Engels, Duits, Spaans." },
          ],
          woorden: [{ woord: "taal-namen", uitleg: "Namen van talen krijgen hoofdletter (anders dan algemene woorden)." }],
          theorie: "Hoofdletter-regel #3: talen + volken WEL hoofdletter. 'de Fransen', 'het Engels', 'een Belg'.",
          voorbeelden: [{ type: "talen", tekst: "Frans, Engels, Duits, Spaans, Italiaans, Chinees — allemaal hoofdletter." }],
          basiskennis: [{ onderwerp: "Niet ALLE caps", uitleg: "Niet 'FRANS' in hoofdletters — gewoon eerste letter hoofdletter." }],
          niveaus: {
            basis: "Talen = hoofdletter. A.",
            simpeler: "Frans en Engels zijn TALEN. Talen krijgen in NL hoofdletter (anders dan dagen/maanden). Dus: Frans, Engels. = A.",
            nogSimpeler: "Talen = hoofd = A.",
          },
        },
      },
      {
        q: "Welke is **fout**?",
        options: ["mijn naam is sara","Mijn naam is Sara.","Sara is jarig.","Wij gaan naar België."],
        answer: 0,
        wrongHints: [null,"Goed.","Goed.","Goed."],
        uitlegPad: {
          stappen: [
            { titel: "Welke is FOUT?", tekst: "'mijn naam is sara' mist 2 hoofdletters: Mijn (begin) + Sara (naam). + punt aan einde." },
          ],
          woorden: [{ woord: "begin zin", uitleg: "Eerste woord altijd hoofdletter." }],
          theorie: "3 fouten in optie A: kleine 'm' begin, kleine 's' naam, geen punt eind. Andere opties hebben alles correct.",
          voorbeelden: [{ type: "fout", tekst: "'mijn naam is sara' ✗ → 'Mijn naam is Sara.' ✓" }],
          basiskennis: [{ onderwerp: "Altijd punt aan einde", uitleg: "Mededeling-zin eindigt op punt." }],
          niveaus: {
            basis: "A heeft 3 fouten (Mijn, Sara, punt). A.",
            simpeler: "Loop A langs: 'mijn' (FOUT, begin zin moet hoofdletter), 'sara' (FOUT, eigennaam moet hoofdletter), geen punt aan eind (FOUT). 3 fouten = duidelijk fout. = A.",
            nogSimpeler: "Geen hoofdletters/punt = A.",
          },
        },
      },
    ],
  },

  {
    title: "Cito-eindopdracht — spelling-mix",
    explanation: "Mix-toets: -isch/-lijk, leestekens, samenstellingen, hoofdletters.",
    checks: [
      {
        q: "Welke is **goed** gespeld?",
        options: ["fantastisch","fantasties","fantastiesch","fantastich"],
        answer: 0,
        wrongHints: [null,"-ies in plaats van -isch — fout.","Té veel.","Niet -ch alleen, het is -sch."],
        uitlegPad: {
          stappen: [
            { titel: "-isch-regel", tekst: "Iese-klank op eind = -isch (3 letters: s-c-h)." },
          ],
          woorden: [{ woord: "-isch", uitleg: "Vaste spelling voor iese-klank-eind." }],
          theorie: "Niet 'ies', niet 'iesch', niet 'ich'. Altijd -isch.",
          voorbeelden: [{ type: "isch", tekst: "fantastisch, logisch, tropisch — allemaal -isch." }],
          basiskennis: [{ onderwerp: "Volgorde: s-c-h", uitleg: "Letters in volgorde: eerst s, dan c, dan h." }],
          niveaus: {
            basis: "Iese = -isch → fantastisch. A.",
            simpeler: "Hoor je 'iese' op eind? Schrijf altijd -isch (s-c-h). Fantastisch klopt. = A.",
            nogSimpeler: "Iese = isch = A.",
          },
        },
      },
      {
        q: "*'Ben jij klaar___'* — welk leesteken?",
        options: ["?","!",".",","],
        answer: 0,
        wrongHints: [null,"Geen sterk gevoel.","Het is een vraag.","Komma is pauze."],
        uitlegPad: {
          stappen: [
            { titel: "Vraag = ?", tekst: "'Ben jij klaar' = vraag → vraagteken." },
          ],
          woorden: [{ woord: "vraagteken", uitleg: "? aan eind van vraag." }],
          theorie: "Vraag herken je aan: 'Ben...', 'Wat...', 'Hoe...', 'Waarom...'. Eindigt op ?.",
          voorbeelden: [{ type: "vraag", tekst: "Ben jij klaar?, Hoe heet je?, Wat doe je? — allemaal ?." }],
          basiskennis: [{ onderwerp: "Begin = signaal", uitleg: "Vragen beginnen vaak met werkwoord (Ben, Doe, Heb) of vraag-woord (Wat, Hoe)." }],
          niveaus: {
            basis: "Vraag = ?. A.",
            simpeler: "'Ben jij klaar' is een vraag (begint met werkwoord 'Ben'). Vragen krijgen ?. = A.",
            nogSimpeler: "Vraag = ? = A.",
          },
        },
      },
      {
        q: "Welke is **fout** geschreven?",
        options: ["voetbal schoen","tandarts","boekenkast","zonnebril"],
        answer: 0,
        wrongHints: [null,"Goed.","Goed.","Goed."],
        uitlegPad: {
          stappen: [
            { titel: "Welke is fout?", tekst: "'Voetbal schoen' staat los met spatie. Samenstellingen aaneen: voetbalschoen." },
          ],
          woorden: [{ woord: "samenstelling", uitleg: "2+ woorden samen tot 1. Aaneen schrijven." }],
          theorie: "NL-regel: aaneen schrijven (geen spatie). Voetbalschoen, tandarts, boekenkast, zonnebril — allemaal aaneen.",
          voorbeelden: [{ type: "fout", tekst: "'Voetbal schoen' ✗ → 'voetbalschoen' ✓." }],
          basiskennis: [{ onderwerp: "Aaneen", uitleg: "Geen spatie, geen streepje (tenzij klinker-botsing)." }],
          niveaus: {
            basis: "Spatie in samenstelling = fout. A.",
            simpeler: "'Voetbal schoen' met spatie = fout. Moet aaneen: voetbalschoen. = A.",
            nogSimpeler: "Spatie = A fout = A.",
          },
        },
      },
      {
        q: "Welke woord schrijf je met **hoofdletter**?",
        options: ["België","dinsdag","mei","kerst"],
        answer: 0,
        wrongHints: [null,"Klein (tenzij begin zin).","Klein.","Klein."],
        uitlegPad: {
          stappen: [
            { titel: "Land = hoofdletter", tekst: "België = land = eigennaam = hoofdletter. Dinsdag/mei/kerst = klein in NL." },
          ],
          woorden: [{ woord: "eigennaam", uitleg: "Specifieke naam — hoofdletter." }],
          theorie: "Landen WEL hoofdletter. Dagen, maanden, feestdagen NIET (anders dan Engels).",
          voorbeelden: [{ type: "hoofd", tekst: "België, Nederland, Frankrijk = hoofd. dinsdag, mei, kerst = klein." }],
          basiskennis: [{ onderwerp: "NL ≠ Engels", uitleg: "In Engels: Tuesday, May. NL: dinsdag, mei." }],
          niveaus: {
            basis: "Land = hoofd → België. A.",
            simpeler: "Welke is een land? België. Landen krijgen hoofdletter. De rest (dag, maand, feest) klein. = A.",
            nogSimpeler: "Land = hoofd = A.",
          },
        },
      },
      {
        q: "**'gemakkelijk'** of **'gemaklijk'**?",
        options: ["gemakkelijk","gemaklijk","gemakelik","gemakelijck"],
        answer: 0,
        wrongHints: [null,"-mak-kelijk met dubbele k.","-lik niet.","Geen -ck."],
        uitlegPad: {
          stappen: [
            { titel: "Dubbele k + -lijk", tekst: "Gemak (korte a) → verdubbel k. Plus uk-klank op eind = -lijk. Gemakkelijk." },
          ],
          woorden: [{ woord: "verdubbel-regel + -lijk", uitleg: "2 regels combineren: korte klank → dubbele medeklinker, uk-klank → -lijk." }],
          theorie: "Korte a in gemak → bij uitbreiding verdubbel k → gemakk-. Plus uk-klank → -elijk. Gemakkelijk.",
          voorbeelden: [{ type: "combo", tekst: "Gemak + kelijk → gemakkelijk. Net als vrolijk, mogelijk." }],
          basiskennis: [{ onderwerp: "2 regels", uitleg: "Soms moet je 2 spelregels tegelijk toepassen." }],
          niveaus: {
            basis: "Dubbele k + -lijk = gemakkelijk. A.",
            simpeler: "Korte a in 'gemak' → verdubbel k bij uitbreiding. Plus uk-klank = -lijk. Samen: gemakkelijk. = A.",
            nogSimpeler: "Kk + lijk = A.",
          },
        },
      },
      {
        q: "*'Wat een leuk feest___'* — welk leesteken (sterke uiting)?",
        options: ["!","?",".",","],
        answer: 0,
        wrongHints: [null,"Geen vraag.","Met punt mag, maar ! past meer bij 'Wat'-uiting.","Komma is pauze in zin."],
        uitlegPad: {
          stappen: [
            { titel: "Sterke uiting = !", tekst: "'Wat een leuk feest' = enthousiaste uiting → uitroepteken." },
          ],
          woorden: [{ woord: "uitroepteken", uitleg: "! voor sterke emotie." }],
          theorie: "'Wat een ...!' is een typische uitroep-vorm. Net als 'Wat fijn!', 'Wat een mooie dag!'.",
          voorbeelden: [{ type: "!", tekst: "Wat een leuk feest!, Wat fijn!, Wat een geluk! — allemaal !." }],
          basiskennis: [{ onderwerp: "Wat een ... !", uitleg: "Combinatie 'Wat een' + bijvoeglijk = signaal voor uitroep." }],
          niveaus: {
            basis: "Uitroep = !. A.",
            simpeler: "'Wat een leuk feest' is een blije uitroep — krijg je een uitroepteken (!) bij. = A.",
            nogSimpeler: "Wat een... ! = A.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const spellingOverigePo = {
  id: "spelling-overige-po",
  title: "Spelling overige — Cito groep 5-8",
  emoji: "✒️",
  level: "groep5-8",
  subject: "spelling",
  referentieNiveau: "1F",
  sloThema: "Taalverzorging — spelling overig",
  prerequisites: [
    { id: "spelling-ei-ij-au-ou", title: "Spelling ei/ij + au/ou", niveau: "po-1F" },
  ],
  intro:
    "-isch / -lijk, leestekens, samenstellingen, hoofdletters. Cito-stijl woordtoets. ~12 min.",
  triggerKeywords: [
    "spelling","leestekens","komma","punt","vraagteken","uitroepteken",
    "isch","lijk","samenstellingen","hoofdletters","tropisch","mogelijk",
  ],
  chapters,
  steps,
};

export default spellingOverigePo;
