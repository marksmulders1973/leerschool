// Leerpad: Leestekens & hoofdletters — groep 7-8 PO.
// Doorstroomtoets-onderdeel taal. Hoofdletters, zinseinde-tekens, de komma,
// directe rede + dubbele punt. Meerkeuze, dagelijks-taalgebruik.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter (opties shufflen) —
// ze leren de regel. 4 hoofdstukken × ~4 checks. Referentieniveau 1F/2F.

const chapters = [
  { letter: "A", title: "Hoofdletters", emoji: "🔠", from: 0, to: 0 },
  { letter: "B", title: "Punt, vraagteken & uitroepteken", emoji: "❓", from: 1, to: 1 },
  { letter: "C", title: "De komma", emoji: "✏️", from: 2, to: 2 },
  { letter: "D", title: "Directe rede & dubbele punt", emoji: "💬", from: 3, to: 3 },
];

const steps = [
  // ─── A. Hoofdletters ──────────────────────────────────────
  {
    title: "Hoofdletters — waar wel en waar niet",
    explanation:
      "**Een hoofdletter gebruik je bij:**\n" +
      "• Het **begin van een zin**: *Vandaag is het mooi weer.*\n" +
      "• **Namen van mensen**: *Sanne, meneer De Vries*.\n" +
      "• **Plaatsen, landen, rivieren**: *Utrecht, Frankrijk, de Rijn*.\n" +
      "• **Talen en volken**: *het Nederlands, de Fransen*.\n\n" +
      "**Géén hoofdletter bij:**\n" +
      "• **Dagen en maanden**: *maandag, januari* — in het Nederlands klein! (Dit is een veelgemaakte fout, in het Engels is het wél groot.)\n" +
      "• **Gewone woorden** midden in de zin: *hond, school, tafel*.\n" +
      "• **Seizoenen**: *lente, zomer, herfst, winter*.\n\n" +
      "**Let op:** na een komma gaat de zin verder, dus dáár géén hoofdletter (tenzij het een naam is). Na een punt begint een nieuwe zin → wél een hoofdletter.",
    checks: [
      {
        q: "Welke zin is goed geschreven?",
        options: [
          "We gaan in januari naar Frankrijk.",
          "We gaan in Januari naar frankrijk.",
          "we gaan in januari naar Frankrijk.",
          "We gaan in Januari naar Frankrijk.",
        ],
        answer: 0,
        wrongHints: [null, "In het Nederlands schrijf je maanden klein — en een land?", "Hoe begint een zin altijd?", "Eén woord heeft hier ten onrechte een hoofdletter."],
        uitlegPad: {
          stappen: [{ titel: "Zinsbegin + land groot, maand klein", tekst: "Een zin begint met een hoofdletter (We). Een land is een naam, dus groot (Frankrijk). Maanden schrijf je in het Nederlands klein (januari)." }],
          niveaus: {
            basis: "Zinsbegin = hoofdletter. Landen = hoofdletter. Maanden = klein.",
            simpeler: "Loop de woorden langs: begint de zin? Is het een naam/land? Zo niet, dan klein.",
            nogSimpeler: "Welke zin heeft de maand klein én het land met een hoofdletter?",
          },
        },
      },
      {
        q: "In welke zin staat een hoofdletter die er **niet** hoort?",
        options: [
          "Mijn favoriete Sport is voetbal.",
          "Op zondag spelen we in Almere.",
          "Spreek jij ook Spaans?",
          "Komende dinsdag is Bram jarig.",
        ],
        answer: 0,
        wrongHints: [null, "Een plaats hoort groot — klopt deze.", "Een taal hoort groot — klopt deze.", "Een naam hoort groot — klopt deze."],
        uitlegPad: {
          stappen: [{ titel: "'Sport' is een gewoon woord", tekst: "Sport is geen naam, plaats of taal — het is een gewoon zelfstandig naamwoord midden in de zin en hoort dus klein: *sport*." }],
          niveaus: {
            basis: "Alleen namen, plaatsen, talen en het zinsbegin krijgen een hoofdletter. 'Sport' is niets daarvan.",
            simpeler: "Is 'sport' een naam of een plaats? Nee. Dan klein.",
            nogSimpeler: "Welk woord is een gewoon ding, geen naam — en heeft toch een hoofdletter?",
          },
        },
      },
      {
        q: "Hoe schrijf je dit goed op? *de fransen spreken frans in parijs.*",
        options: [
          "De Fransen spreken Frans in Parijs.",
          "De fransen spreken frans in Parijs.",
          "De Fransen spreken frans in parijs.",
          "de Fransen spreken Frans in Parijs.",
        ],
        answer: 0,
        wrongHints: [null, "Een volk en een taal horen ook groot.", "Een taal en een stad horen groot.", "Hoe begint een zin?"],
        uitlegPad: {
          stappen: [{ titel: "Volk, taal én stad = groot", tekst: "Zinsbegin (De), volk (Fransen), taal (Frans) en stad (Parijs) krijgen allemaal een hoofdletter." }],
          niveaus: {
            basis: "Volk, taal en plaats zijn allemaal namen → hoofdletter. Plus het zinsbegin.",
            simpeler: "Vier woorden moeten groot: het eerste woord, het volk, de taal en de stad.",
            nogSimpeler: "Welke zin heeft álle vier (zinsbegin, volk, taal, stad) met een hoofdletter?",
          },
        },
      },
      {
        q: "Welke zin klopt?",
        options: [
          "Volgende week begint de zomer.",
          "Volgende week begint de Zomer.",
          "volgende week begint de zomer.",
          "Volgende Week begint de zomer.",
        ],
        answer: 0,
        wrongHints: [null, "Een seizoen is een gewoon woord, geen naam.", "Hoe begint een zin?", "'Week' is een gewoon woord."],
        uitlegPad: {
          stappen: [{ titel: "Seizoenen zijn klein", tekst: "De zin begint met een hoofdletter (Volgende). Een seizoen als *zomer* is een gewoon woord en blijft klein." }],
          niveaus: {
            basis: "Seizoenen (lente, zomer, herfst, winter) schrijf je klein. Alleen het zinsbegin is groot.",
            simpeler: "Is 'zomer' een naam? Nee, een seizoen. Dus klein.",
            nogSimpeler: "Welke zin begint met een hoofdletter maar heeft 'zomer' klein?",
          },
        },
      },
    ],
  },

  // ─── B. Zinseinde-tekens ──────────────────────────────────
  {
    title: "Punt, vraagteken en uitroepteken",
    explanation:
      "Aan het **einde van een zin** zet je een leesteken. Welke je kiest, hangt af van wat de zin doet:\n\n" +
      "• **Punt (.)** — bij een gewone mededeling: *Het regent buiten.*\n" +
      "• **Vraagteken (?)** — bij een vraag: *Regent het buiten?*\n" +
      "• **Uitroepteken (!)** — bij een uitroep, bevel of iets met veel gevoel: *Wat regent het hard!* / *Kom binnen!*\n\n" +
      "**Hoe herken je een vraag?** Vaak staat het werkwoord vooraan (*Ga jij mee?*) of begint de zin met een vraagwoord (*wie, wat, waar, wanneer, hoe, waarom*).\n\n" +
      "**Let op:** na het leesteken begint een nieuwe zin met een hoofdletter. Een vraag eindigt op een vraagteken, ook al klinkt-ie als een mededeling: *Je komt toch wel?*",
    checks: [
      {
        q: "Welk leesteken hoort hier? *Wanneer ben je jarig___*",
        options: ["?", ".", "!", ","],
        answer: 0,
        wrongHints: [null, "Het is geen mededeling — er wordt iets gevraagd.", "Het is geen uitroep.", "Een komma sluit geen zin af."],
        uitlegPad: {
          stappen: [{ titel: "Vraagwoord = vraag", tekst: "De zin begint met 'Wanneer', een vraagwoord. Dat maakt het een vraag, dus eindig met een vraagteken." }],
          niveaus: {
            basis: "Begint de zin met wie/wat/waar/wanneer/hoe/waarom? Dan is het een vraag → vraagteken.",
            simpeler: "Iemand wil iets weten ('wanneer'). Welk teken hoort bij een vraag?",
            nogSimpeler: "Wat zet je achter een vraag?",
          },
        },
      },
      {
        q: "Welke zin is een **uitroep** en hoort dus een uitroepteken?",
        options: [
          "Wat is dat een enorme hond",
          "Ik loop naar de winkel",
          "Hoe heet jouw broer",
          "De les begint om negen uur",
        ],
        answer: 0,
        wrongHints: [null, "Dit is een rustige mededeling.", "Dit is een vraag.", "Dit is een mededeling."],
        uitlegPad: {
          stappen: [{ titel: "Veel gevoel = uitroep", tekst: "'Wat is dat een enorme hond!' drukt verbazing/gevoel uit. Zulke zinnen krijgen een uitroepteken." }],
          niveaus: {
            basis: "Een uitroep laat een sterk gevoel of verbazing zien. Die krijgt een uitroepteken.",
            simpeler: "Welke zin roep je uit van verbazing, in plaats van rustig te vertellen of te vragen?",
            nogSimpeler: "Zoek de zin met verbazing erin ('Wat een …').",
          },
        },
      },
      {
        q: "*Je hebt je tas toch wel mee___* Welk teken past?",
        options: ["?", ".", "!", ":"],
        answer: 0,
        wrongHints: [null, "Er wordt iets gevraagd, ook al klinkt het zeker.", "Het is geen uitroep.", "Een dubbele punt sluit geen zin af."],
        uitlegPad: {
          stappen: [{ titel: "Het is een vraag", tekst: "Met 'toch wel' vraag je om bevestiging. Het is dus een vraag en eindigt op een vraagteken, ook al lijkt het een mededeling." }],
          niveaus: {
            basis: "De spreker wil iets weten (een bevestiging). Dat is een vraag → vraagteken.",
            simpeler: "Verwacht de spreker een antwoord (ja/nee)? Dan is het een vraag.",
            nogSimpeler: "Iemand vraagt om zeker te weten of de tas mee is. Welk teken hoort bij vragen?",
          },
        },
      },
      {
        q: "Welke zin is correct afgesloten?",
        options: [
          "Pas op, daar komt een auto!",
          "Pas op, daar komt een auto.",
          "Pas op, daar komt een auto?",
          "pas op, daar komt een auto!",
        ],
        answer: 0,
        wrongHints: [null, "Een waarschuwing zeg je niet rustig.", "Het is geen vraag.", "Hoe begint een zin?"],
        uitlegPad: {
          stappen: [{ titel: "Waarschuwing = uitroepteken + hoofdletter", tekst: "'Pas op' is een waarschuwing met gevoel → uitroepteken. En de zin begint met een hoofdletter." }],
          niveaus: {
            basis: "Een waarschuwing roep je met nadruk → uitroepteken. Zinsbegin met hoofdletter.",
            simpeler: "Welke zin heeft én een hoofdletter aan het begin én een uitroepteken?",
            nogSimpeler: "Een waarschuwing klinkt fel. Welk teken past en welke begint goed?",
          },
        },
      },
    ],
  },

  // ─── C. De komma ──────────────────────────────────────────
  {
    title: "De komma — even een korte pauze",
    explanation:
      "De **komma (,)** geeft een korte pauze in de zin. Je gebruikt hem onder andere:\n\n" +
      "• **In een opsomming**: *Ik koop appels, peren, druiven en kersen.* (Vaak géén komma vlak vóór 'en'.)\n" +
      "• **Bij het aanspreken** van iemand: *Kom je, Tom?* / *Dag, mevrouw.*\n" +
      "• **Tussen twee zinsdelen** waar je even pauzeert: *Toen het ging regenen, gingen we naar binnen.*\n" +
      "• **Na een tussenwerpsel**: *Oké, we beginnen.* / *Nou, dat valt tegen.*\n\n" +
      "**Tip:** lees de zin hardop. Pauzeer je even? Dan staat daar meestal een komma. Maar zet niet voor élk los woord een komma — alleen waar je echt even adem haalt.",
    checks: [
      {
        q: "Waar hoort een komma? *Ik neem mijn jas mijn pet en mijn sjaal mee.*",
        options: [
          "Ik neem mijn jas, mijn pet en mijn sjaal mee.",
          "Ik neem mijn jas, mijn pet, en mijn sjaal mee.",
          "Ik neem mijn jas mijn pet, en mijn sjaal mee.",
          "Ik, neem mijn jas mijn pet en mijn sjaal mee.",
        ],
        answer: 0,
        wrongHints: [null, "Vlak vóór 'en' hoeft meestal geen komma.", "De eerste pauze mist nog.", "Tussen onderwerp en werkwoord pauzeer je niet."],
        uitlegPad: {
          stappen: [{ titel: "Opsomming: komma's, niet vóór 'en'", tekst: "Tussen de losse dingen komt een komma (jas, pet …), maar vlak vóór 'en' laat je de komma meestal weg: *jas, pet en sjaal*." }],
          niveaus: {
            basis: "In een rijtje zet je komma's tussen de dingen, behalve vlak voor 'en'.",
            simpeler: "jas — pauze — pet — 'en' — sjaal. De pauzes worden komma's, behalve bij 'en'.",
            nogSimpeler: "Welke zin heeft een komma na 'jas' maar géén komma vlak voor 'en'?",
          },
        },
      },
      {
        q: "Welke zin met aanspreken is goed?",
        options: [
          "Wil je meedoen, Lisa?",
          "Wil je meedoen Lisa?",
          "Wil, je meedoen Lisa?",
          "Wil je, meedoen Lisa?",
        ],
        answer: 0,
        wrongHints: [null, "Als je iemand aanspreekt, komt er een komma vóór de naam.", "Daar pauzeer je niet.", "Daar pauzeer je niet."],
        uitlegPad: {
          stappen: [{ titel: "Komma vóór de aangesproken naam", tekst: "Je spreekt Lisa aan. Vóór zo'n naam aan het eind komt een komma: *Wil je meedoen, Lisa?*" }],
          niveaus: {
            basis: "Spreek je iemand bij naam aan? Zet er een komma vóór.",
            simpeler: "Tussen de vraag en de naam 'Lisa' hoor je een korte pauze. Daar komt de komma.",
            nogSimpeler: "Waar staat de komma vlak vóór de naam Lisa?",
          },
        },
      },
      {
        q: "Waar hoort de komma? *Toen de bel ging renden we naar buiten.*",
        options: [
          "Toen de bel ging, renden we naar buiten.",
          "Toen, de bel ging renden we naar buiten.",
          "Toen de bel, ging renden we naar buiten.",
          "Toen de bel ging renden we, naar buiten.",
        ],
        answer: 0,
        wrongHints: [null, "Daar begint de zin pas — geen pauze.", "Tussen onderwerp en werkwoord pauzeer je niet.", "Dat is te laat in de zin."],
        uitlegPad: {
          stappen: [{ titel: "Pauze tussen de twee zinsdelen", tekst: "Na het eerste stuk ('Toen de bel ging') pauzeer je even voordat het tweede stuk komt. Daar staat de komma." }],
          niveaus: {
            basis: "Bestaat de zin uit twee stukken? Tussen die stukken komt een komma.",
            simpeler: "Lees hardop: na 'ging' haal je even adem. Daar komt de komma.",
            nogSimpeler: "Waar zit de pauze: na 'ging' of ergens anders?",
          },
        },
      },
      {
        q: "In welke zin staat een komma die er **niet** hoort?",
        options: [
          "Mijn broer, speelt graag buiten.",
          "Nou, dat is een goed idee.",
          "Wacht even, ik kom eraan.",
          "Hallo, mag ik er even langs?",
        ],
        answer: 0,
        wrongHints: [null, "Na een tussenwerpsel ('Nou') hoort juist een komma.", "Tussen twee zinsdelen hoort een komma.", "Na een groet ('Hallo') hoort een komma."],
        uitlegPad: {
          stappen: [{ titel: "Niet tussen onderwerp en werkwoord", tekst: "Tussen 'Mijn broer' (onderwerp) en 'speelt' (werkwoord) pauzeer je niet — daar hoort geen komma." }],
          niveaus: {
            basis: "Zet nooit een komma tussen het onderwerp en zijn werkwoord.",
            simpeler: "Lees hardop: pauzeer je echt tussen 'broer' en 'speelt'? Nee. Dus geen komma.",
            nogSimpeler: "Welke zin zet een komma midden tussen wie het doet en wat hij doet?",
          },
        },
      },
    ],
  },

  // ─── D. Directe rede & dubbele punt ───────────────────────
  {
    title: "Directe rede — opschrijven wat iemand zegt",
    explanation:
      "Als je **letterlijk opschrijft wat iemand zegt**, gebruik je de **directe rede**. Dat gaat zo:\n\n" +
      "• Eerst wie het zegt, dan een **dubbele punt (:)**, dan **aanhalingstekens** om de woorden:\n" +
      "  *Tom zei: \"Ik kom zo.\"*\n" +
      "• Het leesteken (. ? !) staat **binnen** de aanhalingstekens, want het hoort bij wat gezegd wordt:\n" +
      "  *Ze vroeg: \"Ga je mee?\"*\n\n" +
      "**De dubbele punt (:)** gebruik je ook vóór een **opsomming of uitleg**:\n" +
      "  *Je hebt drie dingen nodig: een pen, papier en een liniaal.*\n\n" +
      "**Let op:** het eerste woord binnen de aanhalingstekens krijgt een hoofdletter, want daar begint de uitgesproken zin.",
    checks: [
      {
        q: "Welke zin met directe rede is goed geschreven?",
        options: [
          "De juf zei: \"Pak je schrift.\"",
          "De juf zei \"pak je schrift.\"",
          "De juf zei: pak je schrift.",
          "De juf zei: \"pak je schrift\".",
        ],
        answer: 0,
        wrongHints: [null, "De dubbele punt vóór de woorden mist.", "De aanhalingstekens om de woorden missen.", "Het eerste woord binnen de aanhalingstekens hoort een hoofdletter."],
        uitlegPad: {
          stappen: [{ titel: "Dubbele punt + aanhalingstekens + hoofdletter", tekst: "Na 'De juf zei' komt een dubbele punt, dan aanhalingstekens om de woorden, met een hoofdletter aan het begin: *De juf zei: \"Pak je schrift.\"*" }],
          niveaus: {
            basis: "Wie het zegt → dubbele punt → aanhalingstekens om de woorden, met een hoofdletter erin.",
            simpeler: "Drie dingen moeten kloppen: de dubbele punt, de aanhalingstekens én de hoofdletter binnenin.",
            nogSimpeler: "Welke zin heeft : én \" \" én een hoofdletter bij 'Pak'?",
          },
        },
      },
      {
        q: "Waar hoort het vraagteken? *Hij vroeg: \"Kom je vanavond___\"*",
        options: [
          "binnen de aanhalingstekens: \"Kom je vanavond?\"",
          "na de aanhalingstekens: \"Kom je vanavond\"?",
          "er hoort een punt, geen vraagteken",
          "er hoort helemaal geen leesteken",
        ],
        answer: 0,
        wrongHints: [null, "Het vraagteken hoort bij de gesproken vraag zelf.", "Het is een vraag, geen mededeling.", "Elke zin krijgt een eindteken."],
        uitlegPad: {
          stappen: [{ titel: "Leesteken hoort bij de gesproken woorden", tekst: "Wat hij vraagt ('Kom je vanavond?') is een vraag, dus het vraagteken staat binnen de aanhalingstekens." }],
          niveaus: {
            basis: "Het leesteken van de gesproken zin staat tussen de aanhalingstekens.",
            simpeler: "De vraag is wat híj zegt. Het vraagteken hoort dus bij zijn woorden, binnen de \" \".",
            nogSimpeler: "Waar staat het vraagteken: vóór of ná het tweede aanhalingsteken?",
          },
        },
      },
      {
        q: "Welke zin gebruikt de dubbele punt goed?",
        options: [
          "Ik neem mee: brood, kaas en fruit.",
          "Ik neem: mee brood, kaas en fruit.",
          "Ik: neem mee brood, kaas en fruit.",
          "Ik neem mee brood, kaas en fruit:",
        ],
        answer: 0,
        wrongHints: [null, "De dubbele punt knipt het werkwoord van zijn woordje af.", "Tussen onderwerp en werkwoord hoort geen dubbele punt.", "Een opsomming komt ná de dubbele punt, niet ervoor."],
        uitlegPad: {
          stappen: [{ titel: "Dubbele punt vóór de opsomming", tekst: "Eerst de aankondiging ('Ik neem mee'), dan een dubbele punt, dan de opsomming: *Ik neem mee: brood, kaas en fruit.*" }],
          niveaus: {
            basis: "De dubbele punt staat vlak vóór het rijtje dat je opsomt.",
            simpeler: "Eerst zeg je dát je iets opsomt, dan : , dan de dingen.",
            nogSimpeler: "Welke zin zet de : net vóór 'brood, kaas en fruit'?",
          },
        },
      },
      {
        q: "Welke zin klopt helemaal?",
        options: [
          "Mama riep: \"Het eten is klaar!\"",
          "Mama riep: \"het eten is klaar!\"",
          "Mama riep \"Het eten is klaar!\"",
          "Mama riep: Het eten is klaar!",
        ],
        answer: 0,
        wrongHints: [null, "Het eerste woord binnen de aanhalingstekens hoort groot.", "De aanhalingstekens om de woorden missen.", "De aanhalingstekens missen."],
        uitlegPad: {
          stappen: [{ titel: "Alles samen goed", tekst: "Dubbele punt na 'riep', aanhalingstekens om de woorden, hoofdletter bij 'Het', en het uitroepteken binnen de aanhalingstekens." }],
          niveaus: {
            basis: "Controleer: dubbele punt, aanhalingstekens, hoofdletter binnenin, en het leesteken binnen de \" \".",
            simpeler: "Welke zin heeft álles goed: : en \" \" en een hoofdletter bij 'Het'?",
            nogSimpeler: "Zoek de zin waar 'Het' een hoofdletter heeft en de \" \" eromheen staan.",
          },
        },
      },
    ],
  },
];

export default {
  id: "leestekens-hoofdletters-po",
  title: "Leestekens & hoofdletters",
  subject: "taal",
  level: "groep7-8",
  sloThema: "taal-interpunctie",
  chapters,
  steps,
  prerequisites: [],
};
