// Leerpad: Zinsontleding — onderwerp & persoonsvorm — groep 7-8 PO.
// Doorstroomtoets-onderdeel taal. De persoonsvorm en het onderwerp vinden,
// congruentie (enkelvoud/meervoud), en ontleden in echte zinnen.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter (opties shufflen).
// 4 hoofdstukken × ~4 checks. Referentieniveau 1F/2F.

const chapters = [
  { letter: "A", title: "De persoonsvorm vinden", emoji: "⚙️", from: 0, to: 0 },
  { letter: "B", title: "Het onderwerp vinden", emoji: "👤", from: 1, to: 1 },
  { letter: "C", title: "Onderwerp en persoonsvorm samen", emoji: "🔗", from: 2, to: 2 },
  { letter: "D", title: "In het echt: zinnen ontleden", emoji: "📝", from: 3, to: 3 },
];

const steps = [
  // ─── A. Persoonsvorm ──────────────────────────────────────
  {
    title: "De persoonsvorm vinden",
    explanation:
      "De **persoonsvorm** is het werkwoord in de zin dat **verandert** als je de tijd of het aantal verandert. Er staat er altijd precies één in een hele zin.\n\n" +
      "**Twee trucs om 'm te vinden:**\n" +
      "1. **Zet de zin in een andere tijd** (bijv. verleden tijd). Het woord dat dan verandert, is de persoonsvorm.\n" +
      "   *De hond blaft.* → *De hond blafte.* → 'blaft/blafte' verandert = persoonsvorm.\n" +
      "2. **Maak er een ja/nee-vraag van.** De persoonsvorm springt naar voren.\n" +
      "   *Tom fietst naar school.* → *Fietst Tom naar school?* → 'fietst' springt vooraan = persoonsvorm.\n\n" +
      "**Let op bij twee werkwoorden:** *Sara heeft gewonnen.* Hier zijn twee werkwoorden, maar alleen **'heeft'** verandert met de tijd (*Sara had gewonnen*). 'Heeft' is dus de persoonsvorm; 'gewonnen' niet.",
    checks: [
      {
        q: "Wat is de persoonsvorm? *De kinderen spelen buiten.*",
        options: ["spelen", "kinderen", "buiten", "De"],
        answer: 0,
        wrongHints: [null, "Dat is geen werkwoord — wie of wat doet iets?", "Dat zegt wáár, niet wat er gebeurt.", "Een lidwoord verandert nooit met de tijd."],
        uitlegPad: {
          stappen: [{ titel: "Verander de tijd", tekst: "Zet de zin in de verleden tijd: 'De kinderen speelden buiten.' Het woord dat verandert is 'spelen' → de persoonsvorm." }],
          niveaus: {
            basis: "De persoonsvorm is het werkwoord dat verandert als je de tijd verandert. 'spelen' wordt 'speelden'.",
            simpeler: "Welk woord beschrijft wat ze dóén? Dat is het werkwoord.",
            nogSimpeler: "Wat doen de kinderen? Het woord daarvoor is de persoonsvorm.",
          },
        },
      },
      {
        q: "Maak een vraag van *Tom fietst naar school.* Welk woord springt vooraan en is dus de persoonsvorm?",
        options: ["Fietst", "Tom", "naar", "school"],
        answer: 0,
        wrongHints: [null, "Dat is degene die de handeling doet, niet de handeling zelf.", "Dat is een klein verbindingswoord.", "Dat is de plaats."],
        uitlegPad: {
          stappen: [{ titel: "Ja/nee-vraag maken", tekst: "'Fietst Tom naar school?' — het werkwoord 'fietst' springt naar voren. Dat is de persoonsvorm." }],
          niveaus: {
            basis: "Bij een ja/nee-vraag komt de persoonsvorm vooraan te staan.",
            simpeler: "Welk woord beweegt naar het begin als je er een vraag van maakt?",
            nogSimpeler: "Wat doet Tom? Dat woord springt vooraan in de vraag.",
          },
        },
      },
      {
        q: "Wat is de persoonsvorm? *Gisteren regende het hard.*",
        options: ["regende", "Gisteren", "hard", "het"],
        answer: 0,
        wrongHints: [null, "Dat zegt wannéér, niet wat er gebeurt.", "Dat zegt hóé hard, niet wat er gebeurt.", "Dat verwijst, het is geen werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Welk woord is het werkwoord?", tekst: "'Regende' beschrijft wat er gebeurt en verandert met de tijd (regent/regende). Dat is de persoonsvorm." }],
          niveaus: {
            basis: "Zoek het werkwoord: wat gebeurt er? Het regende.",
            simpeler: "Welk woord vertelt wat er aan de hand was met het weer?",
            nogSimpeler: "Wat deed het buiten? Het … (werkwoord).",
          },
        },
      },
      {
        q: "Er staan twee werkwoorden in: *Sara heeft haar huiswerk gemaakt.* Wat is de persoonsvorm?",
        options: ["heeft", "gemaakt", "huiswerk", "Sara"],
        answer: 0,
        wrongHints: [null, "Bijna — maar verandert dít woord met de tijd? 'Sara had gemaakt' …", "Dat is het ding dat af is, geen werkwoord.", "Dat is degene die het deed."],
        uitlegPad: {
          stappen: [{ titel: "Welk werkwoord verandert met de tijd?", tekst: "Zet in verleden tijd: 'Sara had haar huiswerk gemaakt.' Alleen 'heeft' wordt 'had' — dat is de persoonsvorm. 'Gemaakt' blijft hetzelfde." }],
          niveaus: {
            basis: "Van de twee werkwoorden is de persoonsvorm degene die verandert met de tijd: heeft → had.",
            simpeler: "'Gemaakt' blijft altijd 'gemaakt'. Welk ander werkwoord verandert wél?",
            nogSimpeler: "Welk woord wordt 'had' in de verleden tijd?",
          },
        },
      },
      {
        q: "Wat is de persoonsvorm? *De leraar schrijft iets op het bord.*",
        options: ["schrijft", "leraar", "bord", "iets"],
        answer: 0,
        wrongHints: [null, "Dat is degene die iets doet, niet de handeling zelf.", "Dat is het voorwerp, geen werkwoord.", "Dat is een onbepaald voornaamwoord, geen werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Maak een vraag", tekst: "Vraag: 'Schrijft de leraar iets op het bord?' → 'schrijft' springt vooraan. Dat is de persoonsvorm." }],
          niveaus: {
            basis: "'schrijft' is het werkwoord dat met de tijd verandert (schreef).",
            simpeler: "Wat doet de leraar? Dat woord is de persoonsvorm.",
            nogSimpeler: "Welk woord beschrijft de handeling?",
          },
        },
      },
      {
        q: "Wat is de persoonsvorm? *Wij fietsen elke dag naar school.*",
        options: ["fietsen", "Wij", "school", "dag"],
        answer: 0,
        wrongHints: [null, "Dat is het onderwerp, niet de persoonsvorm.", "Dat is de bestemming.", "Dat is wanneer, geen werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Verleden tijd: fietsten", tekst: "Zet in de verleden tijd: 'Wij fietsten elke dag.' 'Fietsen' wordt 'fietsten' — dat verandert, dus het is de persoonsvorm." }],
          niveaus: {
            basis: "'fietsen' verandert met de tijd (fietsten) → persoonsvorm.",
            simpeler: "Welk woord beschrijft wat wij doen?",
            nogSimpeler: "Wat doen wij elke dag? Dat woord is de persoonsvorm.",
          },
        },
      },
      {
        q: "Wat is de persoonsvorm? *Gaat jullie morgen mee?*",
        options: ["Gaat", "jullie", "morgen", "mee"],
        answer: 0,
        wrongHints: [null, "Dat is het onderwerp.", "Dat zegt wanneer.", "Dat zegt waarheen, geen werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Vraagzin: pv staat vooraan", tekst: "In een vraagzin staat de persoonsvorm altijd vooraan. 'Gaat' staat vooraan → persoonsvorm." }],
          niveaus: {
            basis: "In een vraagzin staat de persoonsvorm als eerste woord.",
            simpeler: "Welk woord staat helemaal vooraan in deze vraag?",
            nogSimpeler: "Gaat staat vooraan: is dat het werkwoord?",
          },
        },
      },
    ],
  },

  // ─── B. Onderwerp ─────────────────────────────────────────
  {
    title: "Het onderwerp vinden",
    explanation:
      "Het **onderwerp** is wie of wat de persoonsvorm doet. Je vindt het in twee stappen:\n\n" +
      "1. **Zoek eerst de persoonsvorm.**\n" +
      "2. **Stel de vraag: 'wie of wat + persoonsvorm?'** Het antwoord is het onderwerp.\n\n" +
      "*De hond blaft.* → persoonsvorm = 'blaft' → *wie of wat blaft?* → 'de hond' = onderwerp.\n\n" +
      "**Let op:** het onderwerp staat **niet altijd vooraan!**\n" +
      "*In de tuin spelen twee meisjes.* → *wie spelen?* → 'twee meisjes' is het onderwerp, ook al staat het achteraan.",
    checks: [
      {
        q: "Wat is het onderwerp? *De hond blaft naar de poes.*",
        options: ["De hond", "de poes", "blaft", "naar"],
        answer: 0,
        wrongHints: [null, "Naar wie blaft hij? Dat is niet wie het dóét.", "Dat is de persoonsvorm, niet het onderwerp.", "Dat is een verbindingswoord."],
        uitlegPad: {
          stappen: [{ titel: "Wie of wat blaft?", tekst: "Persoonsvorm = 'blaft'. Vraag: wie of wat blaft? Antwoord: 'de hond'. Dat is het onderwerp." }],
          niveaus: {
            basis: "Zoek de persoonsvorm (blaft) en vraag: wie of wat blaft?",
            simpeler: "Wie maakt het geluid in deze zin?",
            nogSimpeler: "Wie blaft er? De …",
          },
        },
      },
      {
        q: "Wat is het onderwerp? *In de tuin spelen twee meisjes.*",
        options: ["twee meisjes", "de tuin", "spelen", "In"],
        answer: 0,
        wrongHints: [null, "Dat is wáár het gebeurt, niet wie het doet.", "Dat is de persoonsvorm.", "Dat is een verbindingswoord."],
        uitlegPad: {
          stappen: [{ titel: "Onderwerp staat niet altijd vooraan", tekst: "Persoonsvorm = 'spelen'. Vraag: wie spelen? Antwoord: 'twee meisjes' — ook al staat het achteraan." }],
          niveaus: {
            basis: "Vraag bij de persoonsvorm 'spelen': wie spelen er? Twee meisjes.",
            simpeler: "Wie zijn er aan het spelen in de tuin?",
            nogSimpeler: "Wie doen er iets? Twee …",
          },
        },
      },
      {
        q: "Wat is het onderwerp? *Morgen komt oma op bezoek.*",
        options: ["oma", "Morgen", "bezoek", "komt"],
        answer: 0,
        wrongHints: [null, "Dat zegt wannéér, niet wie er komt.", "Dat is waarvoor ze komt.", "Dat is de persoonsvorm."],
        uitlegPad: {
          stappen: [{ titel: "Wie komt er?", tekst: "Persoonsvorm = 'komt'. Vraag: wie komt? Antwoord: 'oma'. Dat is het onderwerp." }],
          niveaus: {
            basis: "Vraag bij 'komt': wie komt er op bezoek? Oma.",
            simpeler: "Wie komt er langs?",
            nogSimpeler: "Wie komt er? …",
          },
        },
      },
      {
        q: "Wat is het onderwerp? *Wij hebben gisteren gewonnen.*",
        options: ["Wij", "gisteren", "gewonnen", "hebben"],
        answer: 0,
        wrongHints: [null, "Dat zegt wannéér.", "Dat is het voltooid deelwoord, geen onderwerp.", "Dat is de persoonsvorm."],
        uitlegPad: {
          stappen: [{ titel: "Wie hebben gewonnen?", tekst: "Persoonsvorm = 'hebben'. Vraag: wie hebben gewonnen? Antwoord: 'wij'. Dat is het onderwerp." }],
          niveaus: {
            basis: "Vraag bij 'hebben': wie hebben er gewonnen? Wij.",
            simpeler: "Wie wonnen er?",
            nogSimpeler: "Wie hebben gewonnen? …",
          },
        },
      },
      {
        q: "Wat is het onderwerp? *De kat slaapt op de bank.*",
        options: ["De kat", "de bank", "slaapt", "op"],
        answer: 0,
        wrongHints: [null, "Dat is de plek, niet wie de handeling doet.", "Dat is de persoonsvorm.", "Dat is een voorzetsel."],
        uitlegPad: {
          stappen: [{ titel: "Wie of wat slaapt?", tekst: "Persoonsvorm = 'slaapt'. Vraag: wie of wat slaapt? Antwoord: 'de kat' = onderwerp." }],
          niveaus: {
            basis: "Vraag bij 'slaapt': wie slaapt er? De kat.",
            simpeler: "Wie is er aan het slapen?",
            nogSimpeler: "Wie slaapt er? De …",
          },
        },
      },
      {
        q: "Wat is het onderwerp? *Naast de school staat een oude boom.*",
        options: ["een oude boom", "de school", "staat", "Naast"],
        answer: 0,
        wrongHints: [null, "Dat is de plek wáár de boom staat.", "Dat is de persoonsvorm.", "Dat is een voorzetsel."],
        uitlegPad: {
          stappen: [{ titel: "Wat staat er?", tekst: "Persoonsvorm = 'staat'. Vraag: wat staat er? Antwoord: 'een oude boom' — ook al staat het achteraan in de zin." }],
          niveaus: {
            basis: "Vraag bij 'staat': wat staat er naast de school? Een oude boom.",
            simpeler: "Wat staat er? Het onderwerp hoeft niet vooraan.",
            nogSimpeler: "Wat staat er naast de school? Een …",
          },
        },
      },
      {
        q: "Hoe zoek je het onderwerp?",
        options: [
          "Stel de vraag: wie of wat + persoonsvorm?",
          "Zoek het eerste zelfstandig naamwoord.",
          "Zoek het langste woord in de zin.",
          "Zoek het werkwoord met -en erachter.",
        ],
        answer: 0,
        wrongHints: [null, "Het eerste zelfstandig naamwoord is niet altijd het onderwerp.", "De lengte van een woord zegt niets over de zinsdelen.", "Dat is de manier om een werkwoord te herkennen, niet het onderwerp."],
        uitlegPad: {
          stappen: [{ titel: "Wie of wat + persoonsvorm?", tekst: "Stap 1: zoek de persoonsvorm. Stap 2: stel de vraag 'wie of wat + persoonsvorm?' Het antwoord is het onderwerp." }],
          niveaus: {
            basis: "Zoek persoonsvorm → vraag: wie of wat … ? → dat is het onderwerp.",
            simpeler: "Welke vraag gebruik je om het onderwerp te vinden?",
            nogSimpeler: "Wie of wat doet de handeling?",
          },
        },
      },
    ],
  },

  // ─── C. Samen / congruentie ───────────────────────────────
  {
    title: "Onderwerp en persoonsvorm samen",
    explanation:
      "Het onderwerp en de persoonsvorm horen bij elkaar: ze moeten **kloppen in aantal** (enkelvoud of meervoud). Dat heet **congruentie**.\n\n" +
      "• Eén iemand (enkelvoud): *De jongen **loopt**.*\n" +
      "• Meer dan één (meervoud): *De jongens **lopen**.*\n\n" +
      "**Truc:** zoek eerst het onderwerp. Is het meervoud (meer dan één), dan hoort er een meervoudsvorm van het werkwoord bij.\n\n" +
      "**Let op bij 'en':** *Het meisje **en** haar broer* zijn samen meervoud → *spelen* (niet 'speelt'). Twee dingen met 'en' ertussen tellen samen als meervoud.",
    checks: [
      {
        q: "Welke zin is goed?",
        options: [
          "De jongens lopen naar huis.",
          "De jongens loopt naar huis.",
          "De jongen lopen naar huis.",
          "De jongens lopend naar huis.",
        ],
        answer: 0,
        wrongHints: [null, "'De jongens' is meervoud — past 'loopt' (enkelvoud) daarbij?", "Eén jongen met een meervoudswerkwoord — klopt het aantal?", "Dat is geen persoonsvorm meer."],
        uitlegPad: {
          stappen: [{ titel: "Meervoud onderwerp → meervoud werkwoord", tekst: "'De jongens' is meervoud, dus de persoonsvorm is 'lopen' (niet 'loopt')." }],
          niveaus: {
            basis: "Meerdere jongens → 'lopen'. Het werkwoord moet bij het aantal passen.",
            simpeler: "Is het onderwerp meervoud? Dan hoort 'lopen' erbij, niet 'loopt'.",
            nogSimpeler: "Meer dan één jongen: de jongens … (meervoud van lopen).",
          },
        },
      },
      {
        q: "Vul goed in: *Het meisje en haar broer ___ in de tuin.*",
        options: ["spelen", "speelt", "speelde", "spelend"],
        answer: 0,
        wrongHints: [null, "Twee personen samen ('en') — is dat enkelvoud of meervoud?", "Dat is verleden tijd; de zin is in de tegenwoordige tijd.", "Dat is geen persoonsvorm."],
        uitlegPad: {
          stappen: [{ titel: "'A en B' is samen meervoud", tekst: "Het meisje én haar broer = twee personen = meervoud, dus 'spelen'." }],
          niveaus: {
            basis: "Twee personen met 'en' ertussen tellen als meervoud → 'spelen'.",
            simpeler: "Hoeveel personen spelen er? Twee. Dus meervoud.",
            nogSimpeler: "Meisje + broer = meer dan één → spelen.",
          },
        },
      },
      {
        q: "Wat is het onderwerp én de persoonsvorm? *De buurman wast zijn auto.*",
        options: [
          "onderwerp: De buurman — persoonsvorm: wast",
          "onderwerp: zijn auto — persoonsvorm: wast",
          "onderwerp: De buurman — persoonsvorm: auto",
          "onderwerp: wast — persoonsvorm: De buurman",
        ],
        answer: 0,
        wrongHints: [null, "De auto wordt gewassen, maar wie dóét het?", "'auto' is geen werkwoord.", "Onderwerp en persoonsvorm staan hier omgedraaid."],
        uitlegPad: {
          stappen: [{ titel: "Eerst pv, dan ow", tekst: "Persoonsvorm = 'wast' (verandert met de tijd: waste). Wie wast? 'De buurman' = onderwerp." }],
          niveaus: {
            basis: "Persoonsvorm 'wast'; vraag wie wast → de buurman.",
            simpeler: "Welk woord is het werkwoord, en wie doet dat?",
            nogSimpeler: "Wie wast de auto? En welk woord is 'wast'?",
          },
        },
      },
      {
        q: "Wat is het onderwerp? *Achter het huis staat een grote boom.*",
        options: ["een grote boom", "het huis", "staat", "Achter"],
        answer: 0,
        wrongHints: [null, "Dat zegt wáár, niet wat er staat.", "Dat is de persoonsvorm.", "Dat is een verbindingswoord."],
        uitlegPad: {
          stappen: [{ titel: "Wat staat er?", tekst: "Persoonsvorm = 'staat'. Vraag: wie of wat staat? Antwoord: 'een grote boom' — ook al staat het achteraan." }],
          niveaus: {
            basis: "Vraag bij 'staat': wat staat er achter het huis? Een grote boom.",
            simpeler: "Wat staat daar? Het onderwerp hoeft niet vooraan te staan.",
            nogSimpeler: "Wat staat er achter het huis? Een grote …",
          },
        },
      },
      {
        q: "Welke zin is goed? (enkelvoud/meervoud)",
        options: [
          "De vogel zingt een liedje.",
          "De vogels zingt een liedje.",
          "De vogel zingen een liedje.",
          "De vogels zingend een liedje.",
        ],
        answer: 0,
        wrongHints: [null, "Meervoud onderwerp ('vogels') past niet bij 'zingt' (enkelvoud).", "Enkelvoud onderwerp ('vogel') past niet bij 'zingen' (meervoud).", "Dat is geen persoonsvorm."],
        uitlegPad: {
          stappen: [{ titel: "Enkelvoud → enkelvoudswerkwoord", tekst: "'De vogel' is enkelvoud → 'zingt' (enkelvoud). Dat klopt." }],
          niveaus: {
            basis: "Eén vogel → 'zingt'. Onderwerp en werkwoord passen bij elkaar.",
            simpeler: "Is het één vogel of meerdere? Check dan het werkwoord.",
            nogSimpeler: "Één vogel: de vogel … (enkelvoud van zingen).",
          },
        },
      },
      {
        q: "Vul goed in: *Mijn broer en ik ___ elke avond samen tv.* (kijken)",
        options: ["kijken", "kijkt", "kijkend", "keek"],
        answer: 0,
        wrongHints: [null, "Mijn broer én ik zijn samen twee personen → meervoud.", "Dat is geen persoonsvorm.", "Dat is de verleden tijd; de zin is in de tegenwoordige tijd."],
        uitlegPad: {
          stappen: [{ titel: "'A en ik' = meervoud", tekst: "'Mijn broer en ik' zijn samen twee personen → meervoud → 'kijken' (niet 'kijkt')." }],
          niveaus: {
            basis: "Twee personen met 'en' tellen mee als meervoud → 'kijken'.",
            simpeler: "Hoeveel mensen kijken er? Tel ze.",
            nogSimpeler: "Broer + ik = meer dan één → kijken.",
          },
        },
      },
      {
        q: "Wat is het onderwerp én de persoonsvorm? *De kinderen spelen in de regen.*",
        options: [
          "onderwerp: De kinderen — persoonsvorm: spelen",
          "onderwerp: de regen — persoonsvorm: spelen",
          "onderwerp: De kinderen — persoonsvorm: regen",
          "onderwerp: spelen — persoonsvorm: De kinderen",
        ],
        answer: 0,
        wrongHints: [null, "De regen doet niets — wie spelen er?", "'regen' is geen werkwoord.", "Onderwerp en persoonsvorm zijn hier omgewisseld."],
        uitlegPad: {
          stappen: [{ titel: "Pv = spelen; ow = de kinderen", tekst: "Persoonsvorm = 'spelen' (verandert: speelden). Wie spelen? 'De kinderen' = onderwerp." }],
          niveaus: {
            basis: "Persoonsvorm 'spelen'; vraag wie spelen → de kinderen.",
            simpeler: "Welk woord is het werkwoord, en wie doet dat?",
            nogSimpeler: "Wie spelen er? En welk woord is 'spelen'?",
          },
        },
      },
    ],
  },

  // ─── D. In het echt ───────────────────────────────────────
  {
    title: "In het echt — zinnen ontleden",
    explanation:
      "Bij de Doorstroomtoets krijg je zinnen waarin je het **onderwerp** of de **persoonsvorm** moet aanwijzen. Doe het altijd in deze vaste volgorde:\n\n" +
      "1. **Persoonsvorm**: zet de zin in een andere tijd of maak er een vraag van → welk werkwoord verandert/springt naar voren?\n" +
      "2. **Onderwerp**: vraag 'wie of wat + persoonsvorm?'.\n" +
      "3. **Controleer**: kloppen onderwerp en persoonsvorm in aantal (enkelvoud/meervoud)?\n\n" +
      "Met deze drie stappen ontleed je elke zin, ook als de woorden in een rare volgorde staan.",
    checks: [
      {
        q: "Wat is de persoonsvorm? *Na de pauze begonnen de lessen weer.*",
        options: ["begonnen", "de lessen", "pauze", "weer"],
        answer: 0,
        wrongHints: [null, "Dat is wát er begon (het onderwerp), niet de persoonsvorm.", "Dat is wannéér.", "Dat zegt 'opnieuw', geen werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Welk werkwoord verandert met de tijd?", tekst: "Tegenwoordige tijd: 'beginnen de lessen weer'. 'Begonnen/beginnen' verandert → persoonsvorm." }],
          niveaus: {
            basis: "Zoek het werkwoord dat met de tijd verandert: begonnen.",
            simpeler: "Wat gebeurde er na de pauze? Dat werkwoord is de persoonsvorm.",
            nogSimpeler: "Welk woord betekent 'startten'?",
          },
        },
      },
      {
        q: "Wat is het onderwerp? *Op het plein speelden veel kinderen.*",
        options: ["veel kinderen", "het plein", "speelden", "Op"],
        answer: 0,
        wrongHints: [null, "Dat is wáár ze speelden.", "Dat is de persoonsvorm.", "Dat is een verbindingswoord."],
        uitlegPad: {
          stappen: [{ titel: "Wie speelden?", tekst: "Persoonsvorm = 'speelden'. Vraag: wie speelden er? 'Veel kinderen' = onderwerp." }],
          niveaus: {
            basis: "Vraag bij 'speelden': wie speelden er op het plein? Veel kinderen.",
            simpeler: "Wie waren er aan het spelen?",
            nogSimpeler: "Wie speelden er? Veel …",
          },
        },
      },
      {
        q: "Welke zin is goed?",
        options: [
          "Mijn ouders werken allebei in de stad.",
          "Mijn ouders werkt allebei in de stad.",
          "Mijn ouder werken allebei in de stad.",
          "Mijn ouders werkend allebei in de stad.",
        ],
        answer: 0,
        wrongHints: [null, "'Mijn ouders' is meervoud — past 'werkt' daarbij?", "Eén ouder met 'werken'? Check het aantal.", "Dat is geen persoonsvorm."],
        uitlegPad: {
          stappen: [{ titel: "Meervoud klopt", tekst: "'Mijn ouders' = meervoud, dus 'werken' (niet 'werkt')." }],
          niveaus: {
            basis: "Meerdere ouders → 'werken'. Werkwoord past bij het aantal.",
            simpeler: "Is het onderwerp meervoud? Dan 'werken'.",
            nogSimpeler: "Twee ouders: ze … (meervoud van werken).",
          },
        },
      },
      {
        q: "Wat is de persoonsvorm? *Heeft jouw zus al gegeten?*",
        options: ["Heeft", "gegeten", "zus", "jouw"],
        answer: 0,
        wrongHints: [null, "Dat is het voltooid deelwoord; verandert het met de tijd?", "Dat is het onderwerp (wie).", "Dat hoort bij 'zus', het is geen werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Bij een vraag staat de pv vooraan", tekst: "In een vraag springt de persoonsvorm naar voren: 'Heeft'. 'Gegeten' verandert niet met de tijd (had gegeten)." }],
          niveaus: {
            basis: "In een ja/nee-vraag is de persoonsvorm het eerste werkwoord: heeft.",
            simpeler: "Welk woord wordt 'had' in de verleden tijd?",
            nogSimpeler: "Welk werkwoord staat helemaal vooraan in de vraag?",
          },
        },
      },
      {
        q: "Wat is de persoonsvorm? *Vroeger woonde onze familie in Utrecht.*",
        options: ["woonde", "Vroeger", "familie", "Utrecht"],
        answer: 0,
        wrongHints: [null, "Dat zegt wannéér, geen werkwoord.", "Dat is een zelfstandig naamwoord.", "Dat is een plaatsnaam, geen werkwoord."],
        uitlegPad: {
          stappen: [{ titel: "Welk werkwoord verandert?", tekst: "Tegenwoordige tijd: 'woont'. 'woonde/woont' verandert met de tijd → persoonsvorm." }],
          niveaus: {
            basis: "'woonde' verandert met de tijd (woont) → persoonsvorm.",
            simpeler: "Welk woord vertelt wat de familie deed?",
            nogSimpeler: "Wat deed de familie? Dat werkwoord is de persoonsvorm.",
          },
        },
      },
      {
        q: "Wat is het onderwerp? *Vanochtend belden drie vrienden tegelijk.*",
        options: ["drie vrienden", "Vanochtend", "belden", "tegelijk"],
        answer: 0,
        wrongHints: [null, "Dat zegt wannéér.", "Dat is de persoonsvorm.", "Dat zegt hóé, geen onderwerp."],
        uitlegPad: {
          stappen: [{ titel: "Wie belden?", tekst: "Persoonsvorm = 'belden'. Vraag: wie belden er? Antwoord: 'drie vrienden' — ook al staat het niet vooraan." }],
          niveaus: {
            basis: "Vraag bij 'belden': wie belden er? Drie vrienden.",
            simpeler: "Wie deden er iets in deze zin?",
            nogSimpeler: "Wie belden er tegelijk?",
          },
        },
      },
      {
        q: "Welke zin heeft een fout in de congruentie?",
        options: [
          "De honden blaft luid.",
          "De honden blaffen luid.",
          "De hond blaft luid.",
          "De hond en de kat blaffen luid.",
        ],
        answer: 0,
        wrongHints: [null, "Meervoud onderwerp + meervoud werkwoord — dat klopt.", "Enkelvoud onderwerp + enkelvoud werkwoord — dat klopt.", "Twee dieren met 'en' = meervoud + meervoud werkwoord — dat klopt."],
        uitlegPad: {
          stappen: [{ titel: "Meervoud vraagt meervoud werkwoord", tekst: "'De honden' is meervoud, maar 'blaft' is enkelvoud. Dat is een fout. Het moet zijn: 'De honden blaffen luid'." }],
          niveaus: {
            basis: "Meerdere honden → 'blaffen' (niet 'blaft').",
            simpeler: "Is het onderwerp meervoud? Dan moet het werkwoord ook meervoud zijn.",
            nogSimpeler: "Meer dan één hond: de honden … (meervoud van blaffen).",
          },
        },
      },
    ],
  },
];

export default {
  id: "zinsontleding-onderwerp-persoonsvorm-po",
  title: "Zinsontleding: onderwerp & persoonsvorm",
  subject: "taal",
  level: "groep7-8",
  sloThema: "taal-zinsontleding",
  chapters,
  steps,
  prerequisites: [],
};
