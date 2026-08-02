// ══════════════════════════════════════════════════════════════════════
// Ouderkaart-inhoud — handgeschreven "zo leg je 't uit"-kaarten (Mark 2 aug).
//
// WAAROM curatie i.p.v. alleen auto-afleiden: het uitlegPad is gemaakt om een
// KIND stap voor stap te helpen; automatisch samengevoegd tot een ouder-kaart
// werd het een incoherent allegaartje (los eerste-stapje uit losse checks, soms
// zelfs van een ander onderwerp). De ideeënkaart waarschuwde precies hiervoor:
// "de toon moet écht goed en concreet zijn per concept, niet generiek."
//
// Deze kaarten zijn dus met de hand geschreven vóór de ouder/verzorger: warm,
// concreet, jargon-arm. Structuur = wat OuderkaartPagina rendert:
//   intro (waar het over gaat) · stappen[] (zo leg je het uit) · zegDit (een zin
//   die je letterlijk kunt zeggen) · valkuil (de veelgemaakte fout) · voorbeeld
//   (samen doen) · woorden[] (begrippen die helpen).
//
// Concepten zonder curatie vallen terug op de auto-afleiding uit het uitlegPad.
// ══════════════════════════════════════════════════════════════════════

export const OUDERKAARTEN = {
  // ── 1. Breuken ──────────────────────────────────────────────────────
  breuken: {
    titel: "Breuken",
    emoji: "🍕",
    intro:
      "Een breuk is een manier om een deel van iets heels op te schrijven. Het getal ónder de streep zegt in hoeveel gelijke stukken het geheel is verdeeld; het getal bóven de streep zegt hoeveel van die stukken je hebt.",
    stappen: [
      { titel: "Maak het echt", tekst: "Pak een pizza, een reep chocola of teken een cirkel en verdeel die in gelijke stukken. Een breuk zien maakt 'm meteen begrijpelijk." },
      { titel: "Onder = in hoeveel stukken", tekst: "Het onderste getal is in hoeveel gelijke stukken je het geheel hebt gesneden. Bij 3/4 zijn dat 4 stukken." },
      { titel: "Boven = hoeveel je pakt", tekst: "Het bovenste getal is hoeveel van die stukken je neemt. Bij 3/4 pak je er 3 van de 4." },
      { titel: "Optellen? Eerst dezelfde stukken", tekst: "Je mag breuken alleen optellen als het onderste getal gelijk is (dezelfde soort stukken): 1/4 + 2/4 = 3/4. Zijn ze verschillend, maak ze dan eerst gelijknamig." },
    ],
    zegDit:
      "Kijk, de pizza is in 4 stukken gesneden — dat is de 4 onderaan. Wij hebben er 3 — dat is de 3 bovenaan. Samen noemen we dat drie kwart.",
    valkuil:
      "Kinderen tellen vaak óók de onderste getallen op: 1/4 + 2/4 = 3/8. Dat is fout. Het onderste getal zegt alleen in wat voor stukken je rekent en blijft hetzelfde — je telt alleen de bovenkant.",
    voorbeeld:
      "Snijd samen een appel of reep in 4 gelijke stukken. Eet er 1 op en vraag: hoeveel is er nog? (3/4). Zo voelt je kind dat de 4 onderaan gewoon blijft staan.",
    woorden: [
      { woord: "teller", uitleg: "het getal bóven de streep — hoeveel stukken je hebt" },
      { woord: "noemer", uitleg: "het getal ónder de streep — in hoeveel stukken het geheel is verdeeld" },
      { woord: "gelijknamig", uitleg: "breuken met dezelfde noemer, zodat je ze kunt optellen" },
    ],
  },

  // ── 2. Staartdeling ─────────────────────────────────────────────────
  staartdeling: {
    titel: "Staartdeling",
    emoji: "➗",
    intro:
      "Een staartdeling is een manier om een grote deling stap voor stap op te lossen — cijfer voor cijfer, van links naar rechts. Je deelt eigenlijk steeds een klein stukje van het getal, in plaats van alles in één keer.",
    stappen: [
      { titel: "Begin links", tekst: "Kijk naar het eerste cijfer (of de eerste paar cijfers) links. Hoe vaak past de deler daarin?" },
      { titel: "Delen · keer · min", tekst: "Schrijf hoe vaak het past bovenaan, vermenigvuldig dat terug, en trek het eraf. Dat is de vaste dans: hoe vaak past het → keer doen → eraf halen." },
      { titel: "Volgende cijfer erbij", tekst: "Haal het volgende cijfer naar beneden bij wat er overbleef, en doe precies dezelfde dans opnieuw. Herhaal tot je door het hele getal bent." },
      { titel: "Rest of komma", tekst: "Blijft er iets over? Dat is de rest. Moet het 'op', zet dan een komma en reken verder met nullen." },
    ],
    zegDit:
      "We doen het in kleine hapjes: hoe vaak past de 4 in dit cijfer? Dat keer doen, eraf halen, en dan het volgende cijfer erbij. En weer opnieuw.",
    valkuil:
      "Kinderen vergeten vaak een cijfer 'naar beneden te halen', of slaan een 0 in het antwoord over als de deler even niet past. Laat je kind bij élk cijfer de stap doen — ook als het antwoord op die plek 0 is.",
    voorbeeld:
      "Doe samen 84 ÷ 4. Hoe vaak past 4 in 8? (2). 2×4 = 8, eraf = 0. Volgende cijfer: 4. Hoe vaak past 4 in 4? (1). Antwoord: 21.",
    woorden: [
      { woord: "deler", uitleg: "het getal waardoor je deelt — waarin het getal 'past'" },
      { woord: "deeltal", uitleg: "het grote getal dat je aan het delen bent" },
      { woord: "rest", uitleg: "wat er overblijft als de deling niet precies opgaat" },
    ],
  },

  // ── 3. Werkwoordspelling ────────────────────────────────────────────
  werkwoordspelling: {
    titel: "Werkwoordspelling",
    emoji: "✍️",
    intro:
      "Werkwoordspelling draait om één vraag: krijgt het werkwoord -t, -d, -dt of niks? Voor de tegenwoordige tijd helpt bijna altijd één trucje: eerst de stam zoeken, dan de -t-regel toepassen.",
    stappen: [
      { titel: "Zoek de stam (de ik-vorm)", tekst: "Haal -en van het hele werkwoord af: 'werken' → 'werk'. Dat is de stam, de basis van alles." },
      { titel: "ik = stam · hij/zij/het = stam + t", tekst: "Bij ik schrijf je alleen de stam ('ik werk'). Bij hij, zij, het (en jij vóór het werkwoord): stam + t ('hij werkt', 'werk jij?')." },
      { titel: "Verleden tijd? 't kofschip", tekst: "Eindigt de stam op een klank uit 't kofschip (t, k, f, s, ch, p) → -te(n): 'werkte'. Anders → -de(n): 'speelde'." },
      { titel: "Twijfel? Vervang door 'lopen'", tekst: "Zeg de zin met 'lopen'. Zou je 'loopt' zeggen? Dan een -t. 'Hij wordt' → 'hij loopt', dus mét die extra t." },
    ],
    zegDit:
      "Even checken met 'lopen': je zegt 'hij loopt', met een t. Dan schrijf je 'hij wordt' ook met die t erbij: word + t.",
    valkuil:
      "De klassieker: 'hij wordt' en 'hij vindt'. Je hóórt maar één t, maar de stam eindigt al op een d (word, vind) én hij/zij krijgt er +t bij — dus -dt. Stam + t, ook al hoor je het niet.",
    voorbeeld:
      "Schrijf samen drie zinnen met 'worden': ik word, jij wordt, hij wordt. Zeg er telkens 'lopen' bij (loop, loopt, loopt) om de t te controleren.",
    woorden: [
      { woord: "stam", uitleg: "het werkwoord zonder -en; gelijk aan de ik-vorm (werken → werk)" },
      { woord: "'t kofschip", uitleg: "ezelsbruggetje (t, k, f, s, ch, p) om -te of -de te kiezen in de verleden tijd" },
      { woord: "persoonsvorm", uitleg: "het werkwoord dat met het onderwerp meebuigt (ik werk, hij werkt)" },
    ],
  },

  // ── 4. Delen (het idee van eerlijk verdelen) ────────────────────────
  delen: {
    titel: "Delen",
    emoji: "🍬",
    intro:
      "Delen is eerlijk verdelen: je splitst een hoeveelheid in gelijke groepjes. 12 ÷ 3 betekent: 12 snoepjes eerlijk over 3 kinderen — hoeveel krijgt ieder?",
    stappen: [
      { titel: "Verdeel het echt", tekst: "Leg 12 blokjes of snoepjes neer en verdeel ze één voor één over 3 bordjes. Wat op één bordje ligt, is het antwoord (4)." },
      { titel: "Delen = terug-vermenigvuldigen", tekst: "12 ÷ 3 = 4, want 3 × 4 = 12. De tafels die je kind al kent, zijn hier het gereedschap." },
      { titel: "Gaat het niet op? Rest", tekst: "13 ÷ 3 = 4, met 1 over. Die ene die niemand er meer bij kan krijgen, heet de rest." },
    ],
    zegDit:
      "Deel de snoepjes eerlijk over 3 kinderen — één voor jou, één voor jou, één voor jou. Hoeveel heeft ieder er dan? Dát is de uitkomst van de deling.",
    valkuil:
      "Kinderen halen delen en aftrekken door elkaar. Benadruk: delen is niet 'eraf halen', maar 'in gelijke groepjes verdelen'. En 12 ÷ 3 is iets anders dan 3 ÷ 12.",
    voorbeeld:
      "Pak 12 blokjes. Vraag: hoe verdeel je die eerlijk over 4 kinderen? (3 elk). En over 3 kinderen? (4 elk). Zo zien ze het verband met de tafels.",
    woorden: [
      { woord: "delen door", uitleg: "in dat aantal gelijke groepjes verdelen" },
      { woord: "rest", uitleg: "wat overblijft als het niet eerlijk opgaat" },
    ],
  },

  // ── 5. Tafels ───────────────────────────────────────────────────────
  tafels: {
    titel: "Tafels",
    emoji: "✖️",
    intro:
      "Een tafel is een korte manier om steeds hetzelfde getal bij elkaar op te tellen. 4 × 3 betekent: 4 keer 3, dus 3 + 3 + 3 + 3. Vlot kunnen ophalen scheelt bij bijna elke rekensom later.",
    stappen: [
      { titel: "Laat zien dat het optellen is", tekst: "4 × 3 is 4 groepjes van 3. Leg 4 stapeltjes van 3 blokjes: samen 12. Zo is 'keer' geen toverwoord maar iets zichtbaars." },
      { titel: "Omkeren mag", tekst: "4 × 3 is hetzelfde als 3 × 4. Ken je er één, dan ken je er meteen twee. Dat halveert het werk." },
      { titel: "Oefen kort en vaak", tekst: "Twee minuten per dag onthoudt beter dan een half uur in het weekend. Doe ze door elkaar, niet alleen op volgorde." },
    ],
    zegDit:
      "4 keer 3 betekent gewoon: vier groepjes van drie. Tel maar mee — 3, 6, 9, 12. Dus 4 × 3 is 12.",
    valkuil:
      "Kinderen dreunen de tafel op volgorde op, maar haken vast bij een losse som ('7 × 8?'). Oefen daarom door elkaar heen, zodat elk antwoord los paraat komt.",
    voorbeeld:
      "Dek de trap: loop samen de tafel van 2 op de trap (2, 4, 6, 8…). Of vraag bij het dekken van de tafel: 4 borden × 2 vorken, hoeveel vorken?",
    woorden: [
      { woord: "keer (×)", uitleg: "'zoveel groepjes van' — herhaald optellen" },
      { woord: "product", uitleg: "de uitkomst van een keersom" },
    ],
  },

  // ── 6. Spelling ei / ij ─────────────────────────────────────────────
  "spelling-ei-ij": {
    titel: "Spelling ei / ij",
    emoji: "📝",
    intro:
      "De 'ei' (korte ei) en 'ij' (lange ij) klinken precies hetzelfde. Er is geen regel die zegt welke het is — je leert per woord welke erin zit. Wél helpen woordfamilies en een paar ezelsbruggetjes.",
    stappen: [
      { titel: "Eerlijk zijn: het is onthouden", tekst: "Vertel je kind gerust dat je 't niet kúnt horen — dat scheelt frustratie. Het is inprenten, geen truc die altijd werkt." },
      { titel: "Gebruik woordfamilies", tekst: "Ken je 'trein', dan weet je 'treintje' en 'treinstation' ook. Verzamel woorden die bij elkaar horen." },
      { titel: "Hang lastige woorden op", tekst: "Kies de 5 woorden die telkens fout gaan en hang ze zichtbaar op. Herhaling in het voorbijgaan werkt." },
    ],
    zegDit:
      "Deze klank kun je niet horen, dus die leren we uit ons hoofd. 'Trein' schrijf je met de korte ei — die onthouden we samen.",
    valkuil:
      "Ouders zoeken naar een sluitende regel die er niet is. Beter: gok niet op de klank, maar leer de veelvoorkomende woorden per stuk (net als losse woordbeelden).",
    voorbeeld:
      "Maak samen twee lijstjes op de koelkast: één met 'ei'-woorden (trein, klein, reis) en één met 'ij'-woorden (fijn, wijn, tijd). Vul ze de komende week aan.",
    woorden: [
      { woord: "korte ei", uitleg: "de e-i, zoals in trein en klein" },
      { woord: "lange ij", uitleg: "de i-j, zoals in fijn en tijd" },
    ],
  },

  // ── 7. Kommagetallen ────────────────────────────────────────────────
  kommagetallen: {
    titel: "Kommagetallen",
    emoji: "🔢",
    intro:
      "Een kommagetal is een getal met een deel dat kleiner is dan 1, achter de komma. De komma scheidt de hele getallen (links) van de stukjes (rechts): tienden, honderdsten. Denk aan euro's en centen: € 3,50.",
    stappen: [
      { titel: "Gebruik geld", tekst: "€ 2,75 is 2 euro en 75 cent. De komma is de grens tussen de hele euro's en de centen. Geld maakt kommagetallen meteen vertrouwd." },
      { titel: "Elke plek is 10 keer kleiner", tekst: "Vlak achter de komma staan de tienden (0,1), daarna de honderdsten (0,01). Net als bij hele getallen, maar dan kleiner." },
      { titel: "Zet komma's onder elkaar", tekst: "Bij optellen of aftrekken: zet de komma's recht onder elkaar, dan staan tienden onder tienden. Vul zo nodig aan met een 0." },
    ],
    zegDit:
      "Zie het als geld: 3,5 is drieënhalve euro, dus € 3,50. De komma is gewoon de grens tussen de euro's en de centen.",
    valkuil:
      "Kinderen denken dat 0,7 kleiner is dan 0,65 omdat '65 groter is dan 7'. Leg uit: 0,7 = 0,70, en 70 centen is meer dan 65 centen. Vul in gedachten aan met een 0.",
    voorbeeld:
      "Reken samen af bij het (nep)winkeltje: € 1,20 + € 0,90. Zet de komma's onder elkaar. Uitkomst: € 2,10. Geld maakt het concreet.",
    woorden: [
      { woord: "komma", uitleg: "de grens tussen de hele getallen en de stukjes erachter" },
      { woord: "tienden", uitleg: "het eerste cijfer achter de komma (0,1)" },
      { woord: "honderdsten", uitleg: "het tweede cijfer achter de komma (0,01)" },
    ],
  },
};

// Leerpad-id's (die de ≥2-fout-trigger meestuurt) → curatie-sleutel, zodat de
// handgeschreven kaart ook opent vanuit de leerpad-speler i.p.v. de auto-afleiding.
const ALIASES = {
  "breuken-po": "breuken",
  breuken: "breuken",
  "omzetten-breuk-procent-komma-po": "breuken",
  "delen-po": "delen",
  "deelsommen-met-rest-po": "staartdeling",
  "staartdeling-po": "staartdeling",
  "tafels-po": "tafels",
  "spelling-ei-ij-au-ou": "spelling-ei-ij",
  "werkwoordsspelling-dt": "werkwoordspelling",
  "kommagetallen-po": "kommagetallen",
};

// Geeft { titel, emoji, kaart } terug als er curatie bestaat voor dit id
// (direct of via alias), anders null → OuderkaartPagina valt terug op auto-afleiden.
export function getOuderkaart(id) {
  if (!id) return null;
  const key = OUDERKAARTEN[id] ? id : ALIASES[id];
  const k = key ? OUDERKAARTEN[key] : null;
  if (!k) return null;
  return {
    titel: k.titel,
    emoji: k.emoji,
    kaart: {
      intro: k.intro,
      stappen: k.stappen,
      zegDit: k.zegDit,
      valkuil: k.valkuil,
      voorbeeld: k.voorbeeld,
      woorden: k.woorden || [],
    },
  };
}
