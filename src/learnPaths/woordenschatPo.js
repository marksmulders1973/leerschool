// Leerpad: Woordenschat + synoniemen + antoniemen — voor groep 5-8
// 5 stappen. Doorstroomtoets-stijl woordenschap-vragen.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#00c853",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["📚","🔄","↔️","🤔","🏆"];

const chapters = [
  { letter: "A", title: "Wat is woordenschat?", emoji: "📚", from: 0, to: 0 },
  { letter: "B", title: "Synoniemen — woorden met dezelfde betekenis", emoji: "🔄", from: 1, to: 1 },
  { letter: "C", title: "Antoniemen — tegenovergestelde", emoji: "↔️", from: 2, to: 2 },
  { letter: "D", title: "Woorden in zinnen begrijpen", emoji: "🤔", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is woordenschat?",
    explanation: "**Woordenschat** = alle woorden die je **kent en begrijpt**. Hoe meer woorden, hoe beter je teksten begrijpt.\n\n**Soorten 'woord-vragen' bij de Doorstroomtoets**:\n• **Synoniemen**: woorden met dezelfde betekenis. *snel = vlug = rap*.\n• **Antoniemen** *(tegenstellingen)*: woorden met tegenovergestelde betekenis. *groot ↔ klein*.\n• **Betekenis in zin**: 'wat betekent dit moeilijke woord in deze zin?'\n• **Verbindingswoorden**: 'maar', 'omdat', 'echter' — wat doen ze?\n\n**Toets-strategieën om woordenschat te vergroten**:\n1. **Veel lezen** *(boeken, krant)*. Elk nieuw woord = 1 stap dichter bij Toets-niveau.\n2. **Context gebruiken**: kijk naar de zin rondom een onbekend woord.\n3. **Verband leggen** met woorden die je al kent. *snel = vlug: ze betekenen hetzelfde*.\n4. **Ezelsbruggetjes**: gekke verbanden helpen onthouden.\n\n**toetsvraag-vorm — meerkeuze**:\n*'Welk woord betekent ongeveer hetzelfde als ENORM?'*\n• A: heel groot (✓)\n• B: heel klein\n• C: snel\n• D: kleurig\n\n**Toets-tip**:\nLees ELKE optie. Soms zien meerdere er bij eerste blik logisch uit.",
    checks: [
      {
        q: "Wat is **woordenschat**?",
        options: ["Alle woorden die je kent","Een lijst Engelse woorden","Hoe goed je woorden kunt spellen","Alle moeilijke woorden in een tekst"],
        answer: 0,
        wrongHints: [null,"Niet alleen Engels — alle talen, vooral Nederlands.","Spelling gaat over hoe je woorden schrijft. Woordenschat gaat over iets anders.","Niet alleen moeilijke woorden, en niet alleen uit één tekst."],
        uitlegPad: {
          stappen: [{ titel: "Definitie", tekst: "Woordenschat = alle woorden die je KENT en KUNT GEBRUIKEN. Hoe meer woorden, hoe beter je leest." }],
          woorden: [{ woord: "woordenschat", uitleg: "Voorraad woorden die je kent — in het Nederlands of een andere taal." }],
          theorie: "Woordenschat groeit door lezen + context-truc bij onbekende woorden.",
          voorbeelden: [{ type: "groei", tekst: "Veel lezen = grote woordenschat = makkelijker begrijpend lezen." }],
          basiskennis: [{ onderwerp: "De toets test dit", uitleg: "De toets heeft veel vragen over synoniemen, antoniemen, betekenis." }],
          niveaus: { basis: "Woorden die je kent.", simpeler: "Woordenschat = alle woorden die je begrijpt en kunt gebruiken. Niet alleen Engels — alle talen.", nogSimpeler: "Woorden" },
        },
      },
      {
        q: "Welk onderdeel hoort **niet** bij woordenschat-vragen?",
        options: ["Spelling-regels","Synoniemen","Antoniemen","Betekenis in zin"],
        answer: 0,
        wrongHints: [null,"Wel — synoniem zoeken hoort erbij.","Wel — tegenstellingen ook.","Wel — context begrijpen ook."],
        uitlegPad: {
          stappen: [{ titel: "Welke is GEEN", tekst: "Spelling-regels = ander onderdeel. Woordenschat = synoniemen, antoniemen, betekenis." }],
          woorden: [{ woord: "spelling", uitleg: "Hoe je woorden SCHRIJFT — apart onderdeel, geen woordenschat." }],
          theorie: "Woordenschat = woord-betekenis. Spelling = woord-schrijfwijze. Twee aparte vakgebieden.",
          voorbeelden: [{ type: "verschil", tekst: "Woordenschat: 'wat betekent enorm?'. Spelling: 'hoe schrijf je enorm?'." }],
          basiskennis: [{ onderwerp: "FOUT-vraag", uitleg: "Lees vraag goed: zoek wat NIET hoort." }],
          niveaus: { basis: "Spelling = niet woordenschat.", simpeler: "Synoniemen, antoniemen en betekenis in zin zijn ALLEMAAL woordenschat. Spelling-regels zijn iets anders.", nogSimpeler: "Spelling = niet" },
        },
      },
      {
        q: "Wat is een **synoniem**?",
        options: ["Een woord met dezelfde betekenis","Een woord met tegenovergestelde betekenis","Een woord uit een vreemde taal","Een woord dat hetzelfde klinkt"],
        answer: 0,
        wrongHints: [null,"Dat is een antoniem.","Een synoniem kan gewoon een Nederlands woord zijn. Waar gaat het om?","Het gaat niet om hoe een woord klinkt. Waar gaat het wel om?"],
        uitlegPad: {
          stappen: [{ titel: "Synoniem", tekst: "Twee woorden, zelfde betekenis. snel = vlug = rap." }],
          woorden: [{ woord: "synoniem", uitleg: "Woord met dezelfde betekenis als ander woord." }],
          theorie: "Syn-oniem (Grieks: 'gelijk-naam'). Twee woorden voor hetzelfde idee.",
          voorbeelden: [{ type: "syn", tekst: "groot=enorm, snel=vlug, mooi=prachtig, blij=vrolijk." }],
          basiskennis: [{ onderwerp: "Synoniem ≠ antoniem", uitleg: "Synoniem = ZELFDE. Antoniem = TEGENGESTELD." }],
          niveaus: { basis: "Synoniem = zelfde betekenis.", simpeler: "Twee woorden die hetzelfde betekenen heten synoniemen. Bv. snel en vlug.", nogSimpeler: "Zelfde = syn" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk woordpaar bestaat uit **synoniemen**?",
        options: ["snel - vlug", "groot - klein", "warm - koud", "vol - leeg"],
        answer: 0,
        wrongHints: [null, "Betekenen groot en klein hetzelfde, of juist het omgekeerde?", "Is warm hetzelfde als koud, of juist het omgekeerde?", "Zijn vol en leeg hetzelfde, of elkaars tegenstelling?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Synoniemen = zelfde betekenis",
              tekst: "Synoniemen zijn woorden die (bijna) hetzelfde betekenen. Snel en vlug betekenen allebei: niet langzaam. De andere paren zijn tegenstellingen.",
            },
          ],
          woorden: [
            {
              woord: "synoniem",
              uitleg: "Woord met dezelfde of bijna dezelfde betekenis.",
            },
            {
              woord: "antoniem",
              uitleg: "Woord met de tegenovergestelde betekenis.",
            },
          ],
          theorie: "Test: kun je het ene woord vervangen door het andere zonder dat de zin verandert? Dan zijn het synoniemen.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Hij fietst snel naar school = hij fietst vlug naar school.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tegenstellingen",
              uitleg: "Groot - klein, warm - koud en vol - leeg zijn antoniemen.",
            },
          ],
          niveaus: {
            basis: "Snel = vlug: synoniemen.",
            simpeler: "Zoek het paar waarbij beide woorden hetzelfde betekenen. Snel en vlug betekenen allebei: niet langzaam.",
            nogSimpeler: "snel = vlug",
          },
        },
      },
      {
        q: "Je leest een woord dat je niet kent. Welke tip helpt je om de betekenis te raden?",
        options: [
          "Kijk naar de zin rondom het woord",
          "Tel de letters van het woord",
          "Spel het woord hardop",
          "Sla het woord over en lees verder",
        ],
        answer: 0,
        wrongHints: [null, "Zegt het aantal letters iets over wat een woord betekent?", "Dan weet je hoe het klinkt, maar nog niet wat het betekent.", "Dan weet je nog steeds niet wat het betekent. Wat kun je wél doen?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Context gebruiken",
              tekst: "De woorden rondom een onbekend woord heten de context. Die geven vaak een hint over wat het woord betekent.",
            },
          ],
          woorden: [
            {
              woord: "context",
              uitleg: "De zin of tekst rondom een woord.",
            },
          ],
          theorie: "Context-truc: lees de zin ervoor en erna. Wat zou daar logisch passen?",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'De auto reed enorm snel, bijna 200 km per uur.' De rest van de zin laat zien dat enorm 'heel erg' betekent.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Strategie",
              uitleg: "Veel lezen + context gebruiken = je woordenschat groeit.",
            },
          ],
          niveaus: {
            basis: "Kijk naar de zin rondom het woord.",
            simpeler: "Ken je een woord niet? Lees de woorden eromheen. Die geven een hint.",
            nogSimpeler: "Lees eromheen",
          },
        },
      },
      {
        q: "Wat helpt je om je woordenschat groter te maken?",
        options: [
          "Veel lezen",
          "Moeilijke woorden overslaan",
          "Alleen woorden lezen die je al kent",
          "Heel snel door een tekst heen lezen",
        ],
        answer: 0,
        wrongHints: [null, "Leer je een nieuw woord als je er steeds overheen springt?", "Leer je nieuwe woorden als je alleen bekende woorden leest?", "Zie je nieuwe woorden goed als je heel snel leest?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Lezen = nieuwe woorden",
              tekst: "Elke keer dat je leest, kom je nieuwe woorden tegen. Zo groeit je woordenschat vanzelf.",
            },
          ],
          woorden: [
            {
              woord: "woordenschat",
              uitleg: "Alle woorden die je kent en begrijpt.",
            },
          ],
          theorie: "Hoe meer je leest, hoe meer woorden je kent, hoe beter je teksten begrijpt.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Een boek, een strip of de krant: in alles staan nieuwe woorden.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tip",
              uitleg: "Kom je een nieuw woord tegen? Gebruik de context of vraag wat het betekent.",
            },
          ],
          niveaus: {
            basis: "Veel lezen.",
            simpeler: "Woorden leer je door ze tegen te komen. Dat gebeurt het meest als je veel leest.",
            nogSimpeler: "Lezen",
          },
        },
      },
    ],
  },

  {
    title: "Synoniemen — dezelfde betekenis, andere woorden",
    explanation: "**Synoniemen** zijn woorden met **dezelfde of bijna dezelfde betekenis**. Twee woorden die je kunt uitwisselen in een zin.\n\n**Voorbeelden**:\n• **groot** = enorm = reusachtig = gigantisch = mega\n• **snel** = vlug = rap = gauw = kwiek\n• **klein** = mini = piepklein = nietig\n• **mooi** = prachtig = schitterend = fraai\n• **bang** = angstig = bevreesd\n• **blij** = vrolijk = opgewekt = gelukkig\n\n**Waarom synoniemen?**\n• Maakt teksten **rijker** — niet steeds hetzelfde woord.\n• Helpt bij begrijpend lezen — als je 'enorm' niet kent, weet je via synoniem dat 't 'heel groot' betekent.\n\n**Toets-tip — hoe vind je het beste synoniem**:\n1. Lees de zin met het oorspronkelijke woord.\n2. Vervang het door elk antwoord.\n3. Klinkt de zin nog steeds **logisch en hetzelfde**? Dan klopt het synoniem.\n\n**Voorbeeld**: *'Het was een prachtige dag.'*\n• 'Het was een mooie dag' — klinkt logisch + zelfde betekenis ✓\n• 'Het was een grote dag' — klinkt gek (dag is niet 'groot').\n\n**Veel-voorkomende fout**:\nWoorden die op elkaar **lijken** maar niet hetzelfde zijn. Bijvoorbeeld 'grappig' en 'leuk' lijken op elkaar, maar:\n• 'Grappig' = doet je lachen.\n• 'Leuk' = aangenaam.\n\nNiet hetzelfde, hoewel ze elkaar overlappen.",
    checks: [
      {
        q: "Wat is een **synoniem voor 'enorm'**?",
        options: ["heel groot","heel klein","snel","kleurig"],
        answer: 0,
        wrongHints: [null,"Andersom — enorm is niet klein.","Gaat 'enorm' over hoe snel iets is? Denk aan 'een enorm huis'.","Gaat 'enorm' over kleur? Denk aan 'een enorm huis'."],
        uitlegPad: {
          stappen: [{ titel: "Enorm = heel groot", tekst: "Enorm = synoniem van 'gigantisch', 'reusachtig'. Allemaal: 'heel groot'." }],
          woorden: [{ woord: "enorm", uitleg: "Heel groot, gigantisch — vaak voor afmeting of hoeveelheid." }],
          theorie: "Familie van 'groot'-woorden: groot, enorm, gigantisch, reusachtig, mega.",
          voorbeelden: [{ type: "enorm", tekst: "Een enorm huis = een heel groot huis." }],
          basiskennis: [{ onderwerp: "Niet klein", uitleg: "Klein = antoniem (tegenstelling), niet synoniem." }],
          niveaus: { basis: "Enorm = heel groot.", simpeler: "Enorm betekent 'heel groot'. Niet klein, niet snel — alleen groot.", nogSimpeler: "Enorm=groot" },
        },
      },
      {
        q: "Wat is een synoniem voor **'snel'**?",
        options: ["vlug","langzaam","hoog","lekker"],
        answer: 0,
        wrongHints: [null,"Dat is juist de tegenstelling van snel.","Gaat 'snel' over hoogte?","Gaat 'snel' over smaak?"],
        uitlegPad: {
          stappen: [{ titel: "Snel = vlug", tekst: "Vlug, rap, gauw — allemaal synoniem van snel." }],
          woorden: [{ woord: "snel", uitleg: "In korte tijd. Familie: vlug, rap, gauw, kwiek." }],
          theorie: "Snelheid-synoniemen: snel, vlug, rap, gauw, kwiek. Allemaal 'in korte tijd'.",
          voorbeelden: [{ type: "snel", tekst: "Hij liep snel = hij liep vlug = hij liep rap." }],
          basiskennis: [{ onderwerp: "Langzaam = antoniem", uitleg: "Langzaam = tegenstelling van snel, niet synoniem." }],
          niveaus: { basis: "Snel = vlug.", simpeler: "Welk woord betekent ook 'snel'? Vlug. (Langzaam = tegengesteld).", nogSimpeler: "Vlug" },
        },
      },
      {
        q: "Welke is een synoniem voor **'eng'**?",
        options: ["griezelig","leuk","slim","helder"],
        answer: 0,
        wrongHints: [null,"Andersom — eng is niet leuk.","Gaat 'eng' over hoe slim iemand is? Denk aan een eng spook.","Gaat 'eng' over licht of helder? Denk aan een eng spook."],
        uitlegPad: {
          stappen: [{ titel: "Eng = griezelig", tekst: "Eng, griezelig, akelig — woorden voor iets wat je bang maakt." }],
          woorden: [{ woord: "eng", uitleg: "Iets dat je bang maakt. Synoniemen: griezelig, akelig, beangstigend." }],
          theorie: "Angst-makend-familie: eng, griezelig, akelig, beangstigend, scary (Engels).",
          voorbeelden: [{ type: "eng", tekst: "Een eng spook = een griezelig spook." }],
          basiskennis: [{ onderwerp: "Niet leuk", uitleg: "Eng is meestal niet leuk — kan tegenstellig of niet-verband zijn." }],
          niveaus: { basis: "Eng = griezelig.", simpeler: "Iets dat je bang maakt = eng = griezelig. Niet leuk, niet slim, niet helder.", nogSimpeler: "Griezelig" },
        },
      },
      {
        q: "*'Hij was bezorgd over de toets.'* Wat is een synoniem voor 'bezorgd'?",
        options: ["ongerust","blij","slim","moe"],
        answer: 0,
        wrongHints: [null,"Voel je je blij als je je zorgen maakt over een toets?","Gaat 'bezorgd' over hoe slim je bent?","Bezorgd is een gevoel over de toets. Is dat hetzelfde als moe zijn?"],
        uitlegPad: {
          stappen: [{ titel: "Bezorgd = ongerust", tekst: "Bezorgd, ongerust, bang, gespannen — emotie van zorgen-maken." }],
          woorden: [{ woord: "bezorgd", uitleg: "Zorg-emotie. Vrees voor wat kan gebeuren." }],
          theorie: "Synoniemen voor zorg: bezorgd, ongerust, bang, angstig, gespannen.",
          voorbeelden: [{ type: "bezorgd", tekst: "Hij was bezorgd over de toets = hij was ongerust over de toets." }],
          basiskennis: [{ onderwerp: "Vervang-test", uitleg: "Past 'ongerust' in plaats van 'bezorgd' in zin? Ja → synoniem." }],
          niveaus: { basis: "Bezorgd = ongerust.", simpeler: "Bezorgd over toets = ongerust over toets. Hetzelfde gevoel, ander woord.", nogSimpeler: "Ongerust" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*'Ze was heel **blij** met haar nieuwe fiets.'* Welk woord kan in plaats van 'blij'?",
        options: ["gelukkig", "verdrietig", "moe", "stil"],
        answer: 0,
        wrongHints: [null, "Zet dit woord in de zin. Betekent die nog hetzelfde?", "'Ze was heel moe met haar nieuwe fiets' — klopt dat?", "'Ze was heel stil met haar nieuwe fiets' — zegt dat hetzelfde als blij?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Vervang-test",
              tekst: "Zet elk antwoord op de plek van 'blij'. 'Ze was heel gelukkig met haar nieuwe fiets' betekent hetzelfde.",
            },
          ],
          woorden: [
            {
              woord: "gelukkig",
              uitleg: "Blij, tevreden.",
            },
          ],
          theorie: "Toets-tip: vervang het woord door elk antwoord. Blijft de zin logisch en hetzelfde? Dan is het een synoniem.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Blij = vrolijk = opgewekt = gelukkig.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Andersom",
              uitleg: "Verdrietig is juist het tegenovergestelde van blij.",
            },
          ],
          niveaus: {
            basis: "Blij = gelukkig.",
            simpeler: "Probeer elk woord in de zin. Alleen 'gelukkig' zegt hetzelfde als 'blij'.",
            nogSimpeler: "blij = gelukkig",
          },
        },
      },
    ],
  },

  {
    title: "Antoniemen — tegenstellingen",
    explanation: "**Antoniemen** zijn woorden met **tegenovergestelde betekenis**.\n\n**Standaard-tegenstellingen**:\n• groot ↔ klein\n• hoog ↔ laag\n• snel ↔ langzaam\n• warm ↔ koud\n• vol ↔ leeg\n• licht ↔ zwaar\n• zacht ↔ hard\n• jong ↔ oud\n• boven ↔ onder\n• voor ↔ achter\n• binnen ↔ buiten\n• begin ↔ einde\n• meer ↔ minder\n• plus ↔ min\n\n**Soms zijn er meerdere tegenstellingen**:\n• 'licht' kan tegenstelling zijn van 'zwaar' (gewicht) **of** 'donker' (helderheid).\n• Welke past hangt af van de **context**.\n\n**Toets-vraagstijl**:\n*'Welke is de tegenstelling van INTERESSANT?'*\n• A: saai (✓)\n• B: leuk\n• C: kort\n• D: rood\n\n**Tip**: 'leuk' is eerder een synoniem dan een antoniem. Pas op!\n\n**Toets-truc — context**:\n*'Gisteren zat de zaal vol, maar vandaag was hij ___.'*\n• 'maar' kondigt een tegenstelling aan.\n• Tegenstelling van 'vol' = **leeg**.\n\n**Tegenstellingen van werkwoorden**:\n• komen ↔ gaan\n• kopen ↔ verkopen\n• stijgen ↔ dalen\n• beginnen ↔ eindigen",
    checks: [
      {
        q: "Wat is de tegenstelling van **'zwaar'**?",
        options: ["licht","groot","klein","donker"],
        answer: 0,
        wrongHints: [null,"Niet — past bij groot/klein (afmeting), zwaar gaat over gewicht.","Past bij groot/klein, niet bij zwaar.","Dat hoort bij helderheid (donker/...), niet bij gewicht."],
        uitlegPad: {
          stappen: [{ titel: "Zwaar ↔ licht", tekst: "Zwaar = veel gewicht. Tegenovergesteld = licht (weinig gewicht)." }],
          woorden: [{ woord: "licht", uitleg: "Twee betekenissen: weinig gewicht (↔ zwaar) of veel helderheid (↔ donker)." }],
          theorie: "Gewicht-paar: zwaar ↔ licht. Zelfde woord 'licht' kan ook ↔ donker zijn — context bepaalt.",
          voorbeelden: [{ type: "anti", tekst: "Een zware tas ↔ een lichte tas (gewicht). Het werd licht ↔ donker (helderheid)." }],
          basiskennis: [{ onderwerp: "Twee-betekenissen-woord", uitleg: "Licht heeft 2 betekenissen — kies de juiste tegenstelling per context." }],
          niveaus: { basis: "Zwaar ↔ licht.", simpeler: "Wat is het tegenovergestelde van zwaar? Licht. Niet groot/klein (afmeting), niet donker (helderheid).", nogSimpeler: "Licht" },
        },
      },
      {
        q: "Wat is het antoniem van **'beginnen'**?",
        options: ["eindigen","starten","openen","vergeten"],
        answer: 0,
        wrongHints: [null,"Synoniem van beginnen, geen tegenstelling.","Synoniem van beginnen.","Heeft niets met begin of einde te maken."],
        uitlegPad: {
          stappen: [{ titel: "Beginnen ↔ eindigen", tekst: "Beginnen = start. Tegenovergesteld = eindigen, afronden." }],
          woorden: [{ woord: "eindigen", uitleg: "Tot een einde komen — antoniem van beginnen." }],
          theorie: "Tijd-paar: beginnen ↔ eindigen (ook: stoppen, ophouden). Starten/openen = synoniem.",
          voorbeelden: [{ type: "anti", tekst: "De film begint om 8 ↔ de film eindigt om 10." }],
          basiskennis: [{ onderwerp: "Synoniem-val", uitleg: "Starten en openen lijken misschien op een antwoord, maar ze betekenen hetzelfde als beginnen — dus géén tegenstelling." }],
          niveaus: { basis: "Beginnen ↔ eindigen.", simpeler: "Begin ↔ eind. Starten en openen zijn synoniemen — kun je niet kiezen. Vergeten heeft er niets mee te maken.", nogSimpeler: "Eindigen" },
        },
      },
      {
        q: "Wat is de tegenstelling van **'verlengen'**?",
        options: ["verkorten","vergroten","openen","stoppen"],
        answer: 0,
        wrongHints: [null,"Synoniem-achtig (groter maken) — geen tegenstelling.","Geen verband met lengte/duur.","Stoppen is ophouden. Verlengen is langer maken — wat is daar het omgekeerde van?"],
        uitlegPad: {
          stappen: [{ titel: "Verlengen ↔ verkorten", tekst: "Verlengen = langer maken. Tegenovergesteld = verkorten (korter maken)." }],
          woorden: [{ woord: "verlengen", uitleg: "Langer maken in tijd of afstand." }],
          theorie: "Lengte-paar: verlengen ↔ verkorten. Vergroten = groter maken, geen tegenstelling.",
          voorbeelden: [{ type: "anti", tekst: "Vergadering verlengen ↔ vergadering verkorten. Touw verlengen ↔ touw verkorten." }],
          basiskennis: [{ onderwerp: "Voorvoegsel ver-", uitleg: "ver- + lang/kort verandert 'lang' en 'kort' in werkwoorden — tegenovergesteld blijft hetzelfde." }],
          niveaus: { basis: "Verlengen ↔ verkorten.", simpeler: "Langer maken ↔ korter maken = verlengen ↔ verkorten. (Vergroten=groter maken, openen/stoppen=geen verband).", nogSimpeler: "Verkorten" },
        },
      },
      {
        q: "Welk paar zijn **antoniemen**?",
        options: ["jong - oud","blij - vrolijk","snel - vlug","mooi - prachtig"],
        answer: 0,
        wrongHints: [null,"Blij/vrolijk = bijna hetzelfde, geen tegenstelling.","Snel/vlug = bijna hetzelfde, geen tegenstelling.","Mooi/prachtig = bijna hetzelfde, geen tegenstelling."],
        uitlegPad: {
          stappen: [{ titel: "Zoek tegenstelling", tekst: "Jong ↔ oud = leeftijd-tegenstelling. Andere paren zijn synoniem (zelfde betekenis)." }],
          woorden: [{ woord: "antoniem-paar", uitleg: "Twee woorden met tegenovergestelde betekenis." }],
          theorie: "Test elk paar: jong ↔ oud (tegenstelling ✓). Blij/vrolijk, snel/vlug, mooi/prachtig = synoniemen.",
          voorbeelden: [{ type: "test", tekst: "Past 'NIET' tussen woorden? Jong is NIET oud ✓. Blij is NIET vrolijk ✗ (klinkt gek)." }],
          basiskennis: [{ onderwerp: "Strikvraag", uitleg: "3 van 4 paren zijn synoniem — alleen jong/oud is antoniem." }],
          niveaus: { basis: "Jong ↔ oud.", simpeler: "Antoniem = tegenstelling. Jong/oud = leeftijd-tegenstelling ✓. Andere drie paren = synoniem-paren.", nogSimpeler: "Jong-oud" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*'Gisteren was het buiten warm, maar vandaag is het ___.'* Welk woord is de tegenstelling van 'warm'?",
        options: ["koud", "heet", "zonnig", "lekker"],
        answer: 0,
        wrongHints: [null, "Is heet het omgekeerde van warm, of juist nog warmer?", "Zegt 'zonnig' iets over het omgekeerde van warm?", "Is 'lekker' het omgekeerde van warm, of zegt het wat je ervan vindt?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Warm ↔ koud",
              tekst: "'Maar' kondigt een tegenstelling aan. Het tegenovergestelde van warm is koud.",
            },
          ],
          woorden: [
            {
              woord: "tegenstelling",
              uitleg: "Woord met de omgekeerde betekenis: een antoniem.",
            },
          ],
          theorie: "Signaalwoord 'maar' = er komt iets tegenovergestelds.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Warm ↔ koud, vol ↔ leeg, hoog ↔ laag.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Heet",
              uitleg: "Heet is niet het omgekeerde, maar juist heel warm.",
            },
          ],
          niveaus: {
            basis: "Warm ↔ koud.",
            simpeler: "Wat is het omgekeerde van warm? Koud.",
            nogSimpeler: "koud",
          },
        },
      },
      {
        q: "Wat is de **tegenstelling** van **'kopen'**?",
        options: ["verkopen", "betalen", "winkelen", "pakken"],
        answer: 0,
        wrongHints: [null, "Betalen doe je juist óók als je iets koopt.", "Winkelen doe je als je dingen gaat kopen. Is dat het omgekeerde?", "Pakken is iets in je hand nemen. Is dat het omgekeerde van kopen?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Kopen ↔ verkopen",
              tekst: "Jij koopt een boek, de winkelier verkoopt het boek. Dat is precies het omgekeerde.",
            },
          ],
          woorden: [
            {
              woord: "verkopen",
              uitleg: "Iets aan een ander geven en er geld voor krijgen.",
            },
          ],
          theorie: "Werkwoorden hebben ook tegenstellingen: komen ↔ gaan, kopen ↔ verkopen, stijgen ↔ dalen.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Ik koop een ijsje; de ijsman verkoopt een ijsje.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Werkwoorden",
              uitleg: "Ook doe-woorden kunnen antoniemen zijn.",
            },
          ],
          niveaus: {
            basis: "Kopen ↔ verkopen.",
            simpeler: "De klant koopt, de winkelier verkoopt. Dat is het omgekeerde.",
            nogSimpeler: "verkopen",
          },
        },
      },
      {
        q: "Wat is de **tegenstelling** van **'boven'**?",
        options: ["onder", "achter", "binnen", "voor"],
        answer: 0,
        wrongHints: [null, "'Achter' hoort bij een ander plaatswoord-paar.", "'Binnen' hoort bij 'buiten'. Welk woord hoort bij 'boven'?", "'Voor' hoort bij 'achter'. Welk woord hoort bij 'boven'?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Boven ↔ onder",
              tekst: "Boven en onder zijn elkaars tegenstelling. Achter, binnen en voor horen bij andere paren.",
            },
          ],
          woorden: [
            {
              woord: "boven",
              uitleg: "Hoger dan iets anders.",
            },
          ],
          theorie: "Plaats-paren: boven ↔ onder, voor ↔ achter, binnen ↔ buiten.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "De lamp hangt boven de tafel; de kat ligt onder de tafel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Juiste paar",
              uitleg: "Elk plaatswoord heeft zijn eigen tegenstelling.",
            },
          ],
          niveaus: {
            basis: "Boven ↔ onder.",
            simpeler: "Wat is het omgekeerde van boven? Onder.",
            nogSimpeler: "onder",
          },
        },
      },
      {
        q: "*'Het regent, dus we spelen **binnen**.'* Wat is de tegenstelling van 'binnen'?",
        options: ["buiten", "thuis", "samen", "vandaag"],
        answer: 0,
        wrongHints: [null, "Kun je thuis ook binnen zijn?", "Gaat 'samen' over een plek?", "Gaat 'vandaag' over een plek, of over tijd?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Binnen ↔ buiten",
              tekst: "Binnen = in een huis of gebouw. Het omgekeerde is buiten.",
            },
          ],
          woorden: [
            {
              woord: "binnen",
              uitleg: "In een gebouw of ruimte.",
            },
          ],
          theorie: "Plaats-paar: binnen ↔ buiten.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Bij mooi weer spelen we buiten, bij regen binnen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Thuis",
              uitleg: "Thuis kun je binnen én buiten (in de tuin) zijn: geen tegenstelling.",
            },
          ],
          niveaus: {
            basis: "Binnen ↔ buiten.",
            simpeler: "Wat is het omgekeerde van binnen? Buiten.",
            nogSimpeler: "buiten",
          },
        },
      },
    ],
  },

  {
    title: "Woorden in zinnen begrijpen",
    explanation: "Vaak kom je een **onbekend woord** tegen. **Context** *(de woorden eromheen)* helpt je raden wat het betekent.\n\n**Voorbeeld**:\n*'De auto reed met een **enorme** snelheid voorbij — bijna 200 km per uur.'*\n\nWat betekent **enorm** hier?\n• De zin geeft de hint: '200 km/h' = heel snel.\n• Dus 'enorm' = **heel groot/veel**.\n\n**Toets-strategieën — context-clues**:\n1. **Synoniem in zin**: 'De man was bezorgd, ofwel ongerust over zijn kind.'\n   - 'ofwel' geeft een synoniem. Bezorgd = ongerust.\n2. **Voorbeeld**: 'Tropische dieren — bv. olifanten en apen — leven in warme landen.'\n   - 'tropisch' = van warme landen.\n3. **Tegenstelling**: 'Hij was niet boos, hij was kalm.'\n   - 'kalm' = tegenstelling van boos = rustig.\n4. **Algemene context**: lees de hele alinea — wat is het hoofdonderwerp?\n\n**toetsvraag-typen**:\n• 'Wat betekent X in zin Y?'\n• 'Welke optie kun je niet vervangen door X in deze zin?'\n• 'Welk woord is hier het meest passend?'\n\n**Veel-voorkomende fout**:\nLetterlijke betekenis nemen zonder context. *'De man was wit van angst'* — wit betekent hier 'heel bang', niet de kleur.",
    checks: [
      {
        q: "*'Het ging goed met Tom: hij vorderde gestaag op school.'* Wat betekent 'vorderde'?",
        options: ["maakte vooruitgang","had problemen","sloeg over","bleef hetzelfde"],
        answer: 0,
        wrongHints: [null,"Andersom — de zin zegt dat het goed ging.","'Gestaag' betekent: rustig doorgaan. Past overslaan daarbij?","Als Tom hetzelfde bleef, ging het dan 'goed'? Lees de zin nog eens."],
        uitlegPad: {
          stappen: [{ titel: "Context: 'ging goed'", tekst: "Zin start met 'ging goed'. Vorderde moet positief zijn. → vooruitgang." }],
          woorden: [{ woord: "vorderen", uitleg: "Vooruitgang maken, beter worden." }, { woord: "gestaag", uitleg: "Constant doorgaan, niet stoppen." }],
          theorie: "Context-truc: zinsgevoel (positief/negatief) bepaalt welke optie past.",
          voorbeelden: [{ type: "context", tekst: "'Ging goed' = positief → 'vorderde' = positief → vooruitgang." }],
          basiskennis: [{ onderwerp: "Schrap opties", uitleg: "Problemen, sloeg over, bleef hetzelfde = niet positief → wegstrepen." }],
          niveaus: { basis: "Vorderde = vooruitgang.", simpeler: "Tom ging het GOED = positief. Dus 'vorderde' moet positief betekenen = maakte vooruitgang.", nogSimpeler: "Vooruit" },
        },
      },
      {
        q: "*'Mijn drinken was al op na drie slokken — wat een belachelijk klein bekertje!'* Wat betekent 'belachelijk' hier?",
        options: ["heel erg","grappig","een beetje","niet waar"],
        answer: 0,
        wrongHints: [null,"Niet de letterlijke betekenis — context zegt 'erg klein'.","Andersom — belachelijk maakt 'klein' juist sterker.","Kijk naar de zin: het bekertje was écht klein. Wat doet 'belachelijk' dan met 'klein'?"],
        uitlegPad: {
          stappen: [{ titel: "Context: 'klein bekertje'", tekst: "Belachelijk versterkt 'klein' = HEEL ERG klein. Niet de letterlijke betekenis 'om te lachen'." }],
          woorden: [{ woord: "belachelijk", uitleg: "Letterlijk: om te lachen. In context: extreem, overdreven." }],
          theorie: "Sommige woorden hebben 2 betekenissen: letterlijk + versterkend. Context bepaalt.",
          voorbeelden: [{ type: "versterking", tekst: "Belachelijk duur = heel erg duur. Belachelijk klein = heel erg klein." }],
          basiskennis: [{ onderwerp: "Versterkers", uitleg: "Woorden zoals 'belachelijk', 'absurd', 'idioot' kunnen 'extreem' betekenen." }],
          niveaus: { basis: "Belachelijk = heel erg.", simpeler: "'Belachelijk klein' = HEEL ERG klein. Belachelijk versterkt het bijvoeglijk woord.", nogSimpeler: "Heel erg" },
        },
      },
      {
        q: "*'Hij was uitgeput na de marathon.'* Wat betekent 'uitgeput'?",
        options: ["heel moe","blij","sterk","zwak"],
        answer: 0,
        wrongHints: [null,"Hoe voel je je na een marathon? Lees de zin nog eens.","Voel je je sterk na een marathon?","Je kunt sterk zijn en toch uitgeput. Waar gaat uitgeput over?"],
        uitlegPad: {
          stappen: [{ titel: "Context: 'na marathon'", tekst: "Marathon = lange race. Daarna ben je heel moe. → uitgeput = heel moe." }],
          woorden: [{ woord: "uitgeput", uitleg: "Helemaal leeg-getrokken, geen energie meer. Familie: doodop, kapot, op." }],
          theorie: "Uit-geput = uit + putten (water uit put halen tot leeg). Beeld voor 'helemaal leeg'.",
          voorbeelden: [{ type: "uitgeput", tekst: "Na 4 uur sporten ben je uitgeput = totaal moe." }],
          basiskennis: [{ onderwerp: "Marathon = vermoeiend", uitleg: "Marathon (42 km lopen) maakt iedereen moe — context geeft betekenis." }],
          niveaus: { basis: "Uitgeput = heel moe.", simpeler: "Na marathon = vermoeid. 'Uitgeput' = HELEMAAL leeg, geen energie. = heel moe", nogSimpeler: "Moe" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*'Het was een **hevige** storm, ofwel een heel harde storm.'* Wat betekent 'hevig'?",
        options: ["heel sterk", "heel zacht", "heel kort", "heel koud"],
        answer: 0,
        wrongHints: [null, "Wat staat er na 'ofwel'? Past 'zacht' daarbij?", "Wat staat er na 'ofwel'? Zegt dat iets over hoe lang de storm duurde?", "Wat staat er na 'ofwel'? Zegt dat iets over kou?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Ofwel = synoniem-hint",
              tekst: "Na 'ofwel' geeft de zin zelf de betekenis: een heel harde storm. Hevig = heel sterk.",
            },
          ],
          woorden: [
            {
              woord: "hevig",
              uitleg: "Heel sterk, heel erg.",
            },
            {
              woord: "ofwel",
              uitleg: "Met andere woorden.",
            },
          ],
          theorie: "Context-clue: 'ofwel' geeft vaak een synoniem.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Een hevige regenbui = een heel harde regenbui.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kijk naar de zin",
              uitleg: "Het antwoord staat soms al in de zin zelf.",
            },
          ],
          niveaus: {
            basis: "Hevig = heel sterk.",
            simpeler: "Na 'ofwel' staat: een heel harde storm. Dus hevig = heel sterk.",
            nogSimpeler: "Sterk",
          },
        },
      },
      {
        q: "*'Mijn kamer was niet rommelig, hij was juist heel **opgeruimd**.'* Wat betekent 'opgeruimd' hier?",
        options: ["netjes", "vies", "donker", "leeg"],
        answer: 0,
        wrongHints: [null, "Niet rommelig, maar juist ... — past 'vies' daar?", "Gaat de zin over licht of donker?", "Een opgeruimde kamer kan nog vol spullen staan. Waar gaat het om?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Tegenstelling-hint",
              tekst: "'Niet rommelig, juist opgeruimd' = opgeruimd is het omgekeerde van rommelig. Dat is netjes.",
            },
          ],
          woorden: [
            {
              woord: "opgeruimd",
              uitleg: "Netjes, alles staat op zijn plek.",
            },
          ],
          theorie: "Context-clue: 'niet ..., juist ...' laat een tegenstelling zien.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Niet boos, juist kalm → kalm = rustig.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tegenstelling",
              uitleg: "Ken je het ene woord (rommelig)? Dan weet je ook het andere.",
            },
          ],
          niveaus: {
            basis: "Opgeruimd = netjes.",
            simpeler: "De kamer was NIET rommelig. Het omgekeerde van rommelig is netjes.",
            nogSimpeler: "Netjes",
          },
        },
      },
      {
        q: "*'De bakker **verdubbelde** het recept: in plaats van één taart maakte hij er twee.'* Wat betekent 'verdubbelen'?",
        options: ["twee keer zo veel maken", "de helft ervan maken", "het nog een keer maken", "het recept weggooien"],
        answer: 0,
        wrongHints: [null, "Hoeveel taarten maakte hij eerst, en hoeveel daarna?", "Deed hij het opnieuw, of maakte hij méér?", "Gooide de bakker iets weg? Lees de zin nog eens."],
        uitlegPad: {
          stappen: [
            {
              titel: "Uitleg in de zin",
              tekst: "Na de dubbele punt legt de zin het uit: eerst één taart, nu twee. Verdubbelen = twee keer zo veel.",
            },
          ],
          woorden: [
            {
              woord: "verdubbelen",
              uitleg: "Twee keer zo veel of zo groot maken.",
            },
          ],
          theorie: "Context-clue: na een dubbele punt (:) staat vaak uitleg.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Je spaargeld verdubbelt van 5 naar 10 euro.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Dubbel",
              uitleg: "In 'verdubbelen' zit 'dubbel' = twee keer.",
            },
          ],
          niveaus: {
            basis: "Verdubbelen = twee keer zo veel.",
            simpeler: "Eerst 1 taart, daarna 2 taarten. Dat is twee keer zo veel.",
            nogSimpeler: "Dubbel",
          },
        },
      },
      {
        q: "*'Het was zo donker dat ik **nauwelijks** iets kon zien.'* Wat betekent 'nauwelijks'?",
        options: ["bijna niet", "heel goed", "meteen", "altijd"],
        answer: 0,
        wrongHints: [null, "Kun je in het donker heel goed zien?", "Gaat de zin over hoe snel je iets ziet?", "'Ik kon altijd iets zien' — past dat bij 'zo donker'?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Context: donker",
              tekst: "Als het heel donker is, zie je bijna niets. Nauwelijks = bijna niet.",
            },
          ],
          woorden: [
            {
              woord: "nauwelijks",
              uitleg: "Bijna niet.",
            },
          ],
          theorie: "Context-clue: 'zo donker dat...' vertelt wat het gevolg is.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Ik had nauwelijks geslapen = ik had bijna niet geslapen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Gevolg",
              uitleg: "'Zo ... dat ...' laat zien wat er daardoor gebeurt.",
            },
          ],
          niveaus: {
            basis: "Nauwelijks = bijna niet.",
            simpeler: "Het was heel donker. Dan zie je bijna niets. Nauwelijks = bijna niet.",
            nogSimpeler: "Bijna niet",
          },
        },
      },
    ],
  },

  {
    title: "Eindopdracht — woordenschat mix",
    explanation: "Mix-toets: synoniemen, antoniemen, betekenis in zin.\n\nVeel succes!",
    checks: [
      {
        q: "Wat is een synoniem voor **'gigantisch'**?",
        options: ["enorm","klein","snel","kleurig"],
        answer: 0,
        wrongHints: [null,"Klein is juist het tegenovergestelde.","Gaat 'gigantisch' over snelheid? Denk aan een gigantisch huis.","Gaat 'gigantisch' over kleur? Denk aan een gigantisch huis."],
        uitlegPad: {
          stappen: [{ titel: "Gigantisch = enorm", tekst: "Familie 'heel groot': groot, enorm, gigantisch, reusachtig, mega." }],
          woorden: [{ woord: "gigantisch", uitleg: "Heel groot. Komt van 'gigant' (reus uit oude verhalen)." }],
          theorie: "Synoniemen voor groot: enorm, gigantisch, reusachtig, mega — allemaal zelfde idee.",
          voorbeelden: [{ type: "syn", tekst: "Een gigantisch huis = een enorm huis = een reusachtig huis." }],
          basiskennis: [{ onderwerp: "Klein = antoniem", uitleg: "Klein = tegenstelling, niet synoniem." }],
          niveaus: { basis: "Gigantisch = enorm.", simpeler: "Welk woord betekent ook 'heel groot'? Enorm. (Klein=tegengesteld).", nogSimpeler: "Enorm" },
        },
      },
      {
        q: "Wat is het antoniem van **'eerlijk'**?",
        options: ["oneerlijk","aardig","verdrietig","slim"],
        answer: 0,
        wrongHints: [null,"Aardig = karakter, geen tegenstelling van eerlijk.","Verdrietig = gevoel, geen tegenstelling van eerlijk.","Slim = verstand, geen tegenstelling van eerlijk."],
        uitlegPad: {
          stappen: [{ titel: "Eerlijk ↔ oneerlijk", tekst: "Voorvoegsel 'on-' maakt tegenstelling: eerlijk → oneerlijk." }],
          woorden: [{ woord: "on-", uitleg: "Voorvoegsel dat tegenstelling maakt: on-eerlijk, on-aardig, on-mogelijk." }],
          theorie: "Veel antoniemen via 'on-' voorvoegsel: prettig↔onprettig, geduldig↔ongeduldig.",
          voorbeelden: [{ type: "on-", tekst: "Eerlijk ↔ oneerlijk. Verstandig ↔ onverstandig. Beleefd ↔ onbeleefd." }],
          basiskennis: [{ onderwerp: "Direct herkennen", uitleg: "'On-' voor 'eerlijk' zetten = directe tegenstelling." }],
          niveaus: { basis: "Eerlijk ↔ oneerlijk.", simpeler: "Voor 'eerlijk' het voorvoegsel 'on-' zetten = oneerlijk = tegenstelling.", nogSimpeler: "On+eerlijk" },
        },
      },
      {
        q: "*'Mike was in zijn schik met het cadeau.'* Wat betekent 'in zijn schik'?",
        options: ["blij","verdrietig","boos","verbaasd"],
        answer: 0,
        wrongHints: [null,"Krijg je een cadeau en ben je dan verdrietig? Lees de zin nog eens.","Past boos bij iemand die een cadeau krijgt?","Verbaasd kan, maar 'in zijn schik' zegt of je het fijn vindt."],
        uitlegPad: {
          stappen: [{ titel: "Uitdrukking", tekst: "'In zijn schik' = vaste uitdrukking voor: blij, tevreden, gelukkig." }],
          woorden: [{ woord: "in zijn schik", uitleg: "Uitdrukking voor 'blij'. Schik = oud woord voor plezier." }],
          theorie: "Uitdrukkingen ('zegswijzen') = vaste woordcombinaties met aparte betekenis. Niet letterlijk vertalen.",
          voorbeelden: [{ type: "uitdr", tekst: "In zijn schik = blij. In zijn nopjes = blij. Door het dolle heen = uitgelaten blij." }],
          basiskennis: [{ onderwerp: "Cadeau = positief", uitleg: "Context (cadeau krijgen) geeft hint dat het iets positiefs moet zijn." }],
          niveaus: { basis: "In zijn schik = blij.", simpeler: "'In zijn schik' is een uitdrukking voor blij/tevreden. Cadeau krijgen = blij worden.", nogSimpeler: "Blij" },
        },
      },
      {
        q: "Welke is een **synoniem voor 'snel'**?",
        options: ["vlug","loom","langzaam","stil"],
        answer: 0,
        wrongHints: [null,"Loom betekent traag en slap — het omgekeerde van snel.","Langzaam is juist het tegenovergestelde van snel.","Gaat 'stil' over snelheid?"],
        uitlegPad: {
          stappen: [{ titel: "Snel = vlug", tekst: "Familie: snel, vlug, rap, gauw — allemaal 'in korte tijd'." }],
          woorden: [{ woord: "loom", uitleg: "Traag, sloom, langzaam — antoniem van snel." }],
          theorie: "Snelheid-synoniemen: snel = vlug = rap. Antoniemen: langzaam = loom = sloom = traag.",
          voorbeelden: [{ type: "syn", tekst: "Hij rende snel = hij rende vlug." }],
          basiskennis: [{ onderwerp: "Twee antoniemen-strikvraag", uitleg: "Loom EN langzaam zijn beide antoniem — alleen vlug is synoniem." }],
          niveaus: { basis: "Snel = vlug.", simpeler: "Vlug, rap = synoniem voor snel. Loom en langzaam = tegenstellingen. Stil = geen verband.", nogSimpeler: "Vlug" },
        },
      },
      {
        q: "*'De juf gaf een uiterst nuttige tip.'* Wat betekent 'uiterst'?",
        options: ["heel","een beetje","slechts","niet"],
        answer: 0,
        wrongHints: [null,"Een uiterst nuttige tip — is die maar een beetje nuttig?","'Slechts' betekent 'maar'. Maakt 'uiterst' de tip kleiner of juist groter?","Andersom — uiterst maakt het woord erna sterker."],
        uitlegPad: {
          stappen: [{ titel: "Uiterst = versterker", tekst: "Uiterst = sterke versterker, betekent 'heel/zeer/extreem'." }],
          woorden: [{ woord: "uiterst", uitleg: "Versterkend bijwoord: heel, zeer, extreem. Voor bijvoeglijke woorden." }],
          theorie: "Versterkers: heel, zeer, uiterst, bijzonder, ongelooflijk — allemaal sterker dan zonder.",
          voorbeelden: [{ type: "uiterst", tekst: "Uiterst nuttig = heel nuttig. Uiterst belangrijk = heel belangrijk." }],
          basiskennis: [{ onderwerp: "Niet 'uiterst' = uiterlijk", uitleg: "Uiterst en uiterlijk lijken op elkaar — andere betekenis. Uiterlijk = aan de buitenkant." }],
          niveaus: { basis: "Uiterst = heel.", simpeler: "'Uiterst nuttig' = heel nuttig. Uiterst maakt het bijvoeglijk woord sterker.", nogSimpeler: "Heel" },
        },
      },
      {
        q: "Welke is **GEEN synoniem** voor 'mooi'?",
        options: ["lelijk","prachtig","schitterend","fraai"],
        answer: 0,
        wrongHints: [null,"Prachtig betekent heel mooi — dat is wél een synoniem.","Schitterend betekent heel mooi — dat is wél een synoniem.","Fraai is een ander woord voor mooi — dat is wél een synoniem."],
        uitlegPad: {
          stappen: [{ titel: "Welke is GEEN", tekst: "Lelijk = TEGENSTELLING van mooi (antoniem). De rest = synoniemen." }],
          woorden: [{ woord: "fraai", uitleg: "Synoniem van mooi — ouder/formeel woord." }],
          theorie: "Mooi-familie: mooi, prachtig, schitterend, fraai, knap. Antoniem: lelijk.",
          voorbeelden: [{ type: "test", tekst: "Vervangtest: 'een mooie dag' → 'een prachtige dag' ✓ → 'een lelijke dag' = andere betekenis." }],
          basiskennis: [{ onderwerp: "FOUT-vraag", uitleg: "Vraag zoekt het ENE woord dat NIET past. Lees opties scherp." }],
          niveaus: { basis: "Lelijk = niet synoniem.", simpeler: "Prachtig, schitterend, fraai = allemaal synoniem voor mooi. Lelijk = TEGENSTELLING.", nogSimpeler: "Lelijk" },
        },
      },
      {
        q: "Wat betekent de **uitdrukking** 'De kat uit de boom kijken'?",
        options: ["Eerst afwachten en kijken voor je iets doet","Letterlijk naar een kat in een boom kijken","Meteen en zonder nadenken iets doen","Iemand anders de schuld geven"],
        answer: 0,
        wrongHints: [null, "Gaat het hier echt over een kat? Een uitdrukking neem je niet letterlijk.", "Is 'kijken' iets wat je meteen en snel doet, of iets wat tijd kost?", "Staat er in de uitdrukking iets over een ander of over schuld? Kijk naar het woord 'kijken'."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een uitdrukking?", tekst: "Een **uitdrukking** (en ook een **spreekwoord**) is een **vaste woordgroep** met een **figuurlijke** (= overdrachtelijke) betekenis. Je begrijpt het niet door de woorden letterlijk te nemen.\n\nVoorbeeld: 'de kat uit de boom kijken' = NIET letterlijk naar een kat staren. Wel: **'voorzichtig afwachten + kijken hoe een situatie zich ontwikkelt voordat je actie onderneemt'**." },
            { titel: "Toets-truc: letterlijk vs figuurlijk", tekst: "Bij elke spreekwoord-vraag: vraag jezelf 'wat is de **figuurlijke** betekenis?'\n\nMeer voorbeelden:\n• **'Boter bij de vis'** = direct betalen (niet letterlijk over eten)\n• **'Gras over laten groeien'** = vergeten, voorbij laten gaan\n• **'Iemand om de tuin leiden'** = bedriegen, misleiden\n• **'Door de zure appel heen bijten'** = iets vervelends doen wat moet\n• **'Met de deur in huis vallen'** = direct ter zake komen" },
            { titel: "Toets-feit: in NL veel 'dieren-spreekwoorden'", tekst: "Veel Nederlandse spreekwoorden gebruiken dieren:\n• 'Een kat in de zak kopen' (slecht koopje)\n• 'Een gegeven paard niet in de bek kijken' (geen kritiek op een cadeau)\n• 'De koe bij de horens vatten' (probleem aanpakken)\n• 'Vissen achter het net' (te laat zijn)\n• 'Een wolf in schaapskleren' (slecht persoon die zich aardig voordoet)\n\nVoor de toets hoef je niet alles te kennen — wel: weten dat spreekwoord = figuurlijk + kunnen achterhalen uit context." },
          ],
          woorden: [
            { woord: "spreekwoord", uitleg: "Vaste uitdrukking met figuurlijke betekenis. Vaak generaties oud." },
            { woord: "figuurlijk", uitleg: "Niet letterlijk — overdrachtelijk. Betekenis verschilt van de woorden zelf." },
            { woord: "letterlijk", uitleg: "Precies wat de woorden zeggen. 'Letterlijk een kat in boom' = echte kat zien." },
          ],
          theorie: "Spreekwoord-aanpak voor de toets:\n1. Lees zin in context (verhaal/dialoog)\n2. Letterlijke woorden niet voldoende — denk: 'wat betekent dit FIGUURLIJK?'\n3. Twijfel? Welke optie past bij wat in het verhaal gebeurt?\n\nNiet meteen kiezen letterlijke optie — bijna altijd verkeerd bij spreekwoord-vragen.",
          voorbeelden: [
            { type: "stap", tekst: "'Tom kreeg een appeltje voor de dorst' = Tom kreeg iets voor later/zekerheid, niet letterlijk fruit." },
            { type: "stap", tekst: "'De spijker op de kop slaan' = precies het juiste zeggen." },
          ],
          basiskennis: [{ onderwerp: "Niet letterlijk", uitleg: "Bij spreekwoord-vraag: kies NOOIT letterlijke optie. Altijd figuurlijke uitleg." }],
          niveaus: { basis: "Afwachten + observeren.", simpeler: "Spreekwoord 'de kat uit de boom kijken' = voorzichtig zijn, eerst kijken hoe iets verloopt voor je iets doet. NIET letterlijk.", nogSimpeler: "Afwachten" },
        },
      },
      {
        q: "Wat betekent **'een open boek'** in 'Floor is een open boek voor mij'?",
        options: ["Ik begrijp haar makkelijk, ze verbergt niets", "Ik snap haar niet, ze houdt alles voor zichzelf", "Ze heeft een boek open liggen om te lezen", "Ze schrijft een boek over haar eigen leven"],
        answer: 0,
        wrongHints: [null, "Een open boek kun je zo lezen. Past 'ik snap haar niet' daarbij?", "Dat is de letterlijke betekenis. Kan Floor zelf een boek zijn? Wat bedoel je dan?", "Gaat het hier echt over een boek dat ze schrijft? Lees de zin nog eens."],
        uitlegPad: {
          stappen: [
            { titel: "Figuurlijke uitdrukking", tekst: "**'Een open boek'** betekent figuurlijk: **iemand of iets dat doorzichtig + makkelijk te begrijpen is**. Geen verborgen agenda. Eerlijk + voorspelbaar.\n\nIemand die 'een gesloten boek' is = ondoorgrondelijk, mysterieus." },
            { titel: "Toets-context: persoonsbeschrijving", tekst: "In de zin 'Floor is een open boek voor mij':\n• 'Ik kan haar gemakkelijk doorzien'\n• 'Ze verbergt niets'\n• 'Ik weet altijd wat ze denkt + voelt'\n\nLet op CONTEXT: 'voor mij' = vanuit perspectief van spreker. Iemand anders kan haar moeilijker doorzien." },
            { titel: "Toets-tip: stijlfiguren herkennen", tekst: "**'Een open boek'** is een **metafoor** — beeldspraak waarbij iets met iets anders vergeleken wordt zonder 'als' of 'zoals'.\n\nAndere metaforen:\n• 'Hij is een leeuw in een gevecht' (= sterk, dapper)\n• 'Mijn baas is een dictator' (= autoritair)\n• 'Zij is het zonnetje in huis' (= vrolijk)\n\n**Vergelijking** ('zoals'): 'Hij is sterk ALS een leeuw' — met woord 'als' = vergelijking. Zonder = metafoor." },
          ],
          woorden: [
            { woord: "metafoor", uitleg: "Beeldspraak: iets WORDT iets anders genoemd zonder 'als'. 'Hij is een ster' = sterren-vergelijking." },
            { woord: "doorzichtig", uitleg: "Letterlijk: laat licht door (glas). Figuurlijk: makkelijk te begrijpen." },
          ],
          theorie: "**Stijlfiguren** in toetsstof:\n• **Metafoor**: 'mijn hart is een woestijn' (zonder 'als')\n• **Vergelijking**: 'mijn hart is als een woestijn' (mét 'als')\n• **Personificatie**: 'de wind huilt' (dingen krijgen menselijk gedrag)\n• **Hyperbool**: 'ik heb het 1000 keer gezegd' (overdrijving)\n• **Litotes**: 'niet onaardig' (= aardig, dubbele ontkenning)",
          voorbeelden: [
            { type: "stap", tekst: "'Mijn moeder is een rots' = sterke steun, niet letterlijk steen." },
            { type: "stap", tekst: "'De zon lacht' = personificatie, zon kan niet echt lachen." },
          ],
          basiskennis: [{ onderwerp: "Context belangrijk", uitleg: "Spreekwoord-vragen vereisen altijd de hele zin lezen. Soms helpt vorige zin ook." }],
          niveaus: { basis: "Makkelijk te begrijpen.", simpeler: "'Open boek' = figuurlijk: makkelijk te doorzien, niets verbergen, voorspelbaar.", nogSimpeler: "Doorzichtig" },
        },
      },
      {
        q: "Wat is het **antoniem** van **'overvloed'**?",
        options: ["Tekort","Veel","Rijkdom","Overschot"],
        answer: 0,
        wrongHints: [null, "Niet — 'veel' is synoniem van overvloed.", "Niet — bij rijkdom is er juist veel.", "Niet — een overschot is juist méér dan nodig."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een antoniem?", tekst: "Een **antoniem** is een woord met **tegengestelde betekenis**. Het is het tegenovergestelde van een **synoniem** (zelfde betekenis).\n\nVoorbeeld:\n• 'Mooi' ↔ antoniem 'lelijk'\n• 'Snel' ↔ antoniem 'langzaam'\n• 'Veel' ↔ antoniem 'weinig'" },
            { titel: "Overvloed = ?", tekst: "**Overvloed** betekent: heel veel ergens van. Bijvoorbeeld 'overvloed aan voedsel' = veel meer dan genoeg.\n\nTegenstelling: **tekort** of **schaarste** — wanneer er TE WEINIG is van iets. Bijvoorbeeld 'tekort aan water' = te weinig water.\n\nIn toetsvragen wordt vaak gevraagd: 'Welk woord is het ANTONIEM van X?'" },
            { titel: "Toets-tip: synoniem vs antoniem", tekst: "De toets test allebei:\n• **Synoniem** = zelfde betekenis. (Bv. 'huis' ↔ 'woning')\n• **Antoniem** = tegenovergestelde. (Bv. 'huis' heeft geen direct antoniem, maar 'mooi' ↔ 'lelijk')\n\nLet ALTIJD op vraag: zoekt de toets synoniem of antoniem? Veel kinderen lezen te snel + wisselen ze om → verkeerd antwoord ondanks goede kennis." },
          ],
          woorden: [
            { woord: "antoniem", uitleg: "Woord met tegengestelde betekenis. Ook wel 'tegenstelling' genoemd." },
            { woord: "synoniem", uitleg: "Woord met dezelfde of bijna dezelfde betekenis." },
            { woord: "overvloed", uitleg: "Heel veel ergens van. Meer dan genoeg." },
            { woord: "tekort", uitleg: "Te weinig ergens van. Schaarste." },
          ],
          theorie: "Veel antoniem-paren voor de toets:\n• groot ↔ klein\n• rijk ↔ arm\n• jong ↔ oud\n• warm ↔ koud\n• binnen ↔ buiten\n• boven ↔ onder\n• stil ↔ luid\n• schoon ↔ vies\n• begin ↔ einde\n• verleden ↔ toekomst\n• overvloed ↔ tekort/schaarste\n• groei ↔ krimp",
          voorbeelden: [
            { type: "stap", tekst: "Antoniem van 'optimistisch' = pessimistisch." },
            { type: "stap", tekst: "Antoniem van 'transparant' = ondoorzichtig." },
          ],
          basiskennis: [{ onderwerp: "Niet verwarren", uitleg: "Antoniem is TEGENOVERGESTELDE — niet 'iets anders'. 'Mooi' antoniem is 'lelijk', niet 'rood' (rood is ander concept, geen tegenstelling)." }],
          niveaus: { basis: "Tekort.", simpeler: "Overvloed = veel → antoniem = tekort/schaarste.", nogSimpeler: "Tekort" },
        },
      },
      { q: "Wat is een synoniem van **boos**?", options: ["kwaad","blij","verdrietig","bang"], answer: 0, wrongHints: [null, "Blij is juist het tegenovergestelde van boos.", "Verdrietig is een ander gevoel: dan huil je eerder dan dat je stampvoet.", "Bang is een ander gevoel: dan ben je ergens benauwd voor."] },
      { q: "Wat betekent 'pessimistisch'?", options: ["Verwacht het slechtste","Verwacht het beste","Is altijd vrolijk","Praat heel veel"], answer: 0, wrongHints: [null, "Dat is juist optimistisch.", "Pessimistisch gaat over hoe je naar de toekomst kijkt, niet over vrolijk zijn.", "Zegt 'pessimistisch' iets over praten?"] },
      { q: "Wat is een **synoniem**?", options: ["Woord met dezelfde betekenis","Woord met tegengestelde betekenis","Woord dat hetzelfde klinkt","Woord uit een andere taal"], answer: 0, wrongHints: [null, "Dat is een antoniem.", "Het gaat niet om hoe een woord klinkt, maar om wat het betekent.", "Een synoniem kan gewoon een Nederlands woord zijn."] },
      { q: "Wat is een **antoniem**?", options: ["Tegengestelde betekenis","Zelfde betekenis","Woord dat hetzelfde klinkt","Spreekwoord"], answer: 0, wrongHints: [null, "Dat is juist een synoniem.", "Het gaat niet om hoe een woord klinkt, maar om wat het betekent.", "Een spreekwoord is een hele zin met een les. Een antoniem is één woord."] },
      { q: "Wat is een synoniem van **snel**?", options: ["vlug","traag","stil","langzaam"], answer: 0, wrongHints: [null, "Traag is juist het tegenovergestelde van snel.", "Gaat 'stil' over snelheid?", "Langzaam is juist het tegenovergestelde van snel."] },
      { q: "Wat is het antoniem van **licht** (gewicht)?", options: ["zwaar","donker","helder","klein"], answer: 0, wrongHints: [null, "Dat is het omgekeerde van licht als je het over helderheid hebt. De vraag gaat over gewicht.", "Helder hoort bij licht/donker. De vraag gaat over gewicht.", "Gaat 'klein' over gewicht?"] },
      { q: "Wat is het antoniem van **vol**?", options: ["leeg","gevuld","groot","klein"], answer: 0, wrongHints: [null, "Gevuld betekent juist hetzelfde als vol.", "Gaat 'groot' over hoeveel erin zit?", "Gaat 'klein' over hoeveel erin zit?"] },
      { q: "Wat betekent **enthousiast**?", options: ["Vol energie en blij","Boos en teleurgesteld","Verdrietig en stil","Verveeld en moe"], answer: 0, wrongHints: [null, "Denk aan iemand die roept: 'Ja, leuk!' Is die boos?", "Denk aan iemand die roept: 'Ja, leuk!' Is die verdrietig?", "Verveeld is juist het tegenovergestelde van enthousiast."] },
      { q: "*'De vissers haalden de buit binnen.'* Wat betekent 'buit'?", options: ["Vangst","Boot","Net","Water"], answer: 0, wrongHints: [null, "Een boot is vervoer, geen buit.", "Een net is gereedschap, geen buit.", "Water is omgeving, geen buit."] },
      { q: "Wat is een synoniem van **mooi**?", options: ["prachtig","lelijk","slim","groot"], answer: 0, wrongHints: [null, "Lelijk is juist het tegenovergestelde van mooi.", "Slim zegt iets over verstand, niet over hoe iets eruitziet.", "Groot zegt iets over de maat, niet over mooi of lelijk."] },
      { q: "*'Hij is een fanatiek voetballer.'* Wat betekent 'fanatiek'?", options: ["Heel toegewijd","Lui","Onverschillig","Bang"], answer: 0, wrongHints: [null, "Een fanatiek voetballer traint heel vaak. Is dat lui?", "Onverschillig betekent: het kan je niets schelen. Past dat bij fanatiek?", "Zegt 'fanatiek' iets over bang zijn?"] },
      { q: "Wat betekent **discreet**?", options: ["Onopvallend en voorzichtig", "Luid en heel opvallend", "Snel boos en driftig", "Onzeker en twijfelend"], answer: 0, wrongHints: [null, "Denk aan: 'Hij gaf haar het cadeautje discreet.' Deed hij dat luid, zodat iedereen het zag?", "Denk aan: 'Hij gaf haar het cadeautje discreet.' Past dit woord daarbij?", "Denk aan: 'Hij gaf haar het cadeautje discreet.' Past dit woord daarbij?"] },
      { q: "Wat is het antoniem van **vroeg**?", options: ["laat","snel","wakker","nu"], answer: 0, wrongHints: [null, "Snel gaat over tempo, niet over het moment.", "Wakker zegt niet of het vroeg of laat is.", "'Nu' is een moment, maar is het het omgekeerde van vroeg?"] },
      { q: "Welk woord lijkt het meest op **verbazing**?", options: ["verrassing","boosheid","verveling","angst"], answer: 0, wrongHints: [null, "Als je verbaasd bent, kijk je met grote ogen. Ben je dan boos?", "Verveling is als er niets gebeurt. Is dat verbazing?", "Angst is bang zijn. Is dat hetzelfde als verbazing?"] },
      { q: "*'Het was een schitterend feest.'* Wat betekent 'schitterend' hier?", options: ["geweldig","saai","kort","duur"], answer: 0, wrongHints: [null, "Saai is juist het tegenovergestelde.", "Zegt 'schitterend' iets over hoe lang het feest duurde?", "Zegt 'schitterend' iets over wat het feest kostte?"] },
      { q: "Wat betekent **respect** voor iemand hebben?", options: ["Waardering voor die persoon","Boosheid op die persoon","Geen interesse in die persoon","Angst voor die persoon"], answer: 0, wrongHints: [null, "Als je respect voor iemand hebt, ben je dan boos op hem?", "Respect hebben betekent juist dat iemand je wél iets kan schelen.", "Je kunt respect hebben zonder bang te zijn. Waar gaat respect over?"] },
      { q: "Wat betekent **nieuwsgierig**?", options: ["Veel willen weten","Nergens zin in hebben","Overal bang voor zijn","Snel boos worden"], answer: 0, wrongHints: [null, "Een nieuwsgierig kind vraagt steeds 'waarom?'. Heeft dat nergens zin in?", "Zegt 'nieuwsgierig' iets over bang zijn?", "Zegt 'nieuwsgierig' iets over boos zijn?"] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const woordenschatPo = {
  id: "woordenschat-po",
  title: "Woordenschat — groep 5-8, Doorstroomtoets-stof",
  emoji: "📚",
  level: "groep5-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Lezen — woordenschat",
  prerequisites: [
    { id: "spelling-overige-po", title: "Spelling — basisregels", niveau: "po-1F" },
  ],
  intro:
    "Woordenschat voor groep 5-8: synoniemen (zelfde betekenis), antoniemen (tegenstelling), betekenis in zin via context. Doorstroomtoets-stijl. ~12 min.",
  triggerKeywords: [
    "woordenschat","synoniem","antoniem","betekenis","tegenstelling",
    "context","woord","leeswoord",
  ],
  chapters,
  steps,
};

export default woordenschatPo;
