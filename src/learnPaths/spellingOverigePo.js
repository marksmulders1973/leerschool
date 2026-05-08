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
      },
      {
        q: "**'mogelijk'** of **'mogelik'**?",
        options: ["mogelijk","mogelik","mogeluk","mogelijck"],
        answer: 0,
        wrongHints: [null,"-lijk wordt geschreven met -lijk, niet -lik.","Niet 'uk' geschreven als 'uk'.","Geen -ck."],
      },
      {
        q: "Welke is **fout** geschreven?",
        options: ["fantasties","fantastisch","logisch","komisch"],
        answer: 0,
        wrongHints: [null,"Goed gespeld.","Goed gespeld.","Goed gespeld."],
      },
      {
        q: "**'gevaarlijk'** of **'gevaarlik'**?",
        options: ["gevaarlijk","gevaarlik","gevaarluk","gevarelijk"],
        answer: 0,
        wrongHints: [null,"Niet -lik.","Niet -luk.","Niet 'gevarelijk' — er staat een 'a-a'."],
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
      },
      {
        q: "*'Wauw___ wat een mooi cadeau___'* — welke twee leestekens?",
        options: ["! en !","? en ?",". en .",", en ."],
        answer: 0,
        wrongHints: [null,"Geen vraag.","Te neutraal voor een sterk gevoel.","Eerste is 'wauw' — sterk."],
      },
      {
        q: "Welke zin staat **fout**?",
        options: ["Ik kocht appels peren en bananen.","Ik kocht appels, peren en bananen.","Ik ging naar huis.","Ben je oké?"],
        answer: 0,
        wrongHints: [null,"Goed — komma's in opsomming.","Goed gespeld.","Goed gespeld."],
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
      },
      {
        q: "Welke is **fout** geschreven?",
        options: ["voetbal schoen","voetbalschoen","tandarts","zonnebril"],
        answer: 0,
        wrongHints: [null,"Goed (samenstelling).","Goed (samenstelling).","Goed (samenstelling)."],
      },
      {
        q: "**'boekenkast'** — waarom -en- ertussen?",
        options: ["Een kast voor boeken (meervoud)","Klinkt mooier","Geen reden","Altijd -en- gebruiken"],
        answer: 0,
        wrongHints: [null,"Er is een regel.","Wel een reden.","Niet altijd."],
      },
      {
        q: "Welke is **goed** geschreven?",
        options: ["zonnebril","zonne bril","zonne-bril","zonenbril"],
        answer: 0,
        wrongHints: [null,"Niet los.","Geen streepje.","Niet 'zonen'."],
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
      },
      {
        q: "Welke woord schrijf je met **hoofdletter**?",
        options: ["Nederland","maandag","januari","kerst"],
        answer: 0,
        wrongHints: [null,"Klein (tenzij begin zin).","Klein.","Klein."],
      },
      {
        q: "*'Hij spreekt vloeiend ___ans en ___ngels.'* — welk?",
        options: ["Frans, Engels","frans, engels","FRANS, ENGELS","Frans, engels"],
        answer: 0,
        wrongHints: [null,"Talen schrijf je met hoofdletter.","Geen reden voor hoofdletters overal.","Beide met hoofdletter."],
      },
      {
        q: "Welke is **fout**?",
        options: ["mijn naam is sara","Mijn naam is Sara.","Sara is jarig.","Wij gaan naar België."],
        answer: 0,
        wrongHints: [null,"Goed.","Goed.","Goed."],
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
      },
      {
        q: "*'Ben jij klaar___'* — welk leesteken?",
        options: ["?","!",".",","],
        answer: 0,
        wrongHints: [null,"Geen sterk gevoel.","Het is een vraag.","Komma is pauze."],
      },
      {
        q: "Welke is **fout** geschreven?",
        options: ["voetbal schoen","tandarts","boekenkast","zonnebril"],
        answer: 0,
        wrongHints: [null,"Goed.","Goed.","Goed."],
      },
      {
        q: "Welke woord schrijf je met **hoofdletter**?",
        options: ["België","dinsdag","mei","kerst"],
        answer: 0,
        wrongHints: [null,"Klein (tenzij begin zin).","Klein.","Klein."],
      },
      {
        q: "**'gemakkelijk'** of **'gemaklijk'**?",
        options: ["gemakkelijk","gemaklijk","gemakelik","gemakelijck"],
        answer: 0,
        wrongHints: [null,"-mak-kelijk met dubbele k.","-lik niet.","Geen -ck."],
      },
      {
        q: "*'Wat een leuk feest___'* — welk leesteken (sterke uiting)?",
        options: ["!","?",".",","],
        answer: 0,
        wrongHints: [null,"Geen vraag.","Met punt mag, maar ! past meer bij 'Wat'-uiting.","Komma is pauze in zin."],
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
