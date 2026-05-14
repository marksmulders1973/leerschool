// Leerpad: Woordenschat + synoniemen + antoniemen — voor groep 5-8
// 5 stappen. Cito-stijl woordenschap-vragen.
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
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is woordenschat?",
    explanation: "**Woordenschat** = alle woorden die je **kent en begrijpt**. Hoe meer woorden, hoe beter je teksten begrijpt.\n\n**Soorten 'woord-vragen' bij Cito**:\n• **Synoniemen**: woorden met dezelfde betekenis. *snel = vlug = rap*.\n• **Antoniemen** *(tegenstellingen)*: woorden met tegenovergestelde betekenis. *groot ↔ klein*.\n• **Betekenis in zin**: 'wat betekent dit moeilijke woord in deze zin?'\n• **Verbindingswoorden**: 'maar', 'omdat', 'echter' — wat doen ze?\n\n**Cito-strategieën om woordenschat te vergroten**:\n1. **Veel lezen** *(boeken, krant)*. Elk nieuw woord = 1 stap dichter bij Cito-niveau.\n2. **Context gebruiken**: kijk naar de zin rondom een onbekend woord.\n3. **Verband leggen** met woorden die je al kent. *snel ↔ vlug — beide betekenen het 'rapper gaan'*.\n4. **Ezelsbruggetjes**: gekke verbanden helpen onthouden.\n\n**Cito-vraag-vorm — meerkeuze**:\n*'Welk woord betekent ongeveer hetzelfde als ENORM?'*\n• A: heel groot (✓)\n• B: heel klein\n• C: snel\n• D: kleurig\n\n**Cito-tip**:\nLees ELKE optie. Soms zien meerdere er bij eerste blik logisch uit.",
    checks: [
      {
        q: "Wat is **woordenschat**?",
        options: ["Alle woorden die je kent","Een lijst Engelse woorden","Een soort sport","Een lange zin"],
        answer: 0,
        wrongHints: [null,"Niet alleen Engels — alle talen, vooral Nederlands.","Geen sport.","Geen lange zin."],
        uitlegPad: {
          stappen: [{ titel: "Definitie", tekst: "Woordenschat = alle woorden die je KENT en KUNT GEBRUIKEN. Hoe meer woorden, hoe beter je leest." }],
          woorden: [{ woord: "woordenschat", uitleg: "Voorraad woorden die je kent — in het Nederlands of een andere taal." }],
          theorie: "Woordenschat groeit door lezen + context-truc bij onbekende woorden.",
          voorbeelden: [{ type: "groei", tekst: "Veel lezen = grote woordenschat = makkelijker begrijpend lezen." }],
          basiskennis: [{ onderwerp: "Cito test dit", uitleg: "Cito heeft veel vragen over synoniemen, antoniemen, betekenis." }],
          niveaus: { basis: "Woorden die je kent. A.", simpeler: "Woordenschat = alle woorden die je begrijpt en kunt gebruiken. Niet alleen Engels — alle talen. = A.", nogSimpeler: "Woorden = A." },
        },
      },
      {
        q: "Welke is **GEEN deel** van woordenschat-vragen?",
        options: ["Spelling-regels","Synoniemen","Antoniemen","Betekenis in zin"],
        answer: 0,
        wrongHints: [null,"Wel — synoniem zoeken hoort erbij.","Wel — tegenstellingen ook.","Wel — context begrijpen ook."],
        uitlegPad: {
          stappen: [{ titel: "Welke is GEEN", tekst: "Spelling-regels = ander onderdeel. Woordenschat = synoniemen, antoniemen, betekenis." }],
          woorden: [{ woord: "spelling", uitleg: "Hoe je woorden SCHRIJFT — apart onderdeel, geen woordenschat." }],
          theorie: "Woordenschat = woord-betekenis. Spelling = woord-schrijfwijze. Twee aparte vakgebieden.",
          voorbeelden: [{ type: "verschil", tekst: "Woordenschat: 'wat betekent enorm?'. Spelling: 'hoe schrijf je enorm?'." }],
          basiskennis: [{ onderwerp: "FOUT-vraag", uitleg: "Lees vraag goed: zoek wat NIET hoort." }],
          niveaus: { basis: "Spelling = niet woordenschat. A.", simpeler: "Synoniem (=B), antoniem (=C), betekenis in zin (=D) zijn ALLEMAAL woordenschat. Spelling-regels (A) is iets anders. = A.", nogSimpeler: "Spelling = niet = A." },
        },
      },
      {
        q: "Wat is een **synoniem**?",
        options: ["Een woord met dezelfde betekenis","Een woord met tegenovergestelde betekenis","Een woord uit een vreemde taal","Een lange zin"],
        answer: 0,
        wrongHints: [null,"Dat is antoniem.","Klopt niet.","Dat is een zin."],
        uitlegPad: {
          stappen: [{ titel: "Synoniem", tekst: "Twee woorden, zelfde betekenis. snel = vlug = rap." }],
          woorden: [{ woord: "synoniem", uitleg: "Woord met dezelfde betekenis als ander woord." }],
          theorie: "Syn-oniem (Grieks: 'gelijk-naam'). Twee woorden voor hetzelfde idee.",
          voorbeelden: [{ type: "syn", tekst: "groot=enorm, snel=vlug, mooi=prachtig, blij=vrolijk." }],
          basiskennis: [{ onderwerp: "Synoniem ≠ antoniem", uitleg: "Synoniem = ZELFDE. Antoniem = TEGENGESTELD." }],
          niveaus: { basis: "Synoniem = zelfde betekenis. A.", simpeler: "Twee woorden die hetzelfde betekenen heten synoniemen. Bv. snel en vlug. = A.", nogSimpeler: "Zelfde = syn = A." },
        },
      },
    ],
  },

  {
    title: "Synoniemen — dezelfde betekenis, andere woorden",
    explanation: "**Synoniemen** zijn woorden met **dezelfde of bijna dezelfde betekenis**. Twee woorden die je kunt uitwisselen in een zin.\n\n**Voorbeelden**:\n• **groot** = enorm = reusachtig = gigantisch = mega\n• **snel** = vlug = rap = gauw = kwiek\n• **klein** = mini = piepklein = nietig\n• **mooi** = prachtig = schitterend = fraai\n• **bang** = angstig = bezorgd = bezorgd\n• **blij** = vrolijk = opgewekt = gelukkig\n\n**Waarom synoniemen?**\n• Maakt teksten **rijker** — niet steeds hetzelfde woord.\n• Helpt bij begrijpend lezen — als je 'enorm' niet kent, weet je via synoniem dat 't 'heel groot' betekent.\n\n**Cito-tip — hoe vind je het beste synoniem**:\n1. Lees de zin met het origineel woord.\n2. Vervang het met elk antwoord.\n3. Klinkt de zin nog steeds **logisch en hetzelfde**? Dan klopt het synoniem.\n\n**Voorbeeld**: *'Het was een prachtige dag.'*\n• 'Het was een mooie dag' — klinkt logisch + zelfde betekenis ✓\n• 'Het was een grote dag' — klinkt gek (dag is niet 'groot').\n\n**Veel-voorkomende fout**:\nWoorden die op elkaar **lijken** maar niet hetzelfde zijn. Bijvoorbeeld 'grappig' en 'leuk' lijken op elkaar, maar:\n• 'Grappig' = doet je lachen.\n• 'Leuk' = aangenaam.\n\nNiet hetzelfde, hoewel ze elkaar overlappen.",
    checks: [
      {
        q: "Wat is een **synoniem voor 'enorm'**?",
        options: ["heel groot","heel klein","snel","kleurig"],
        answer: 0,
        wrongHints: [null,"Andersom — enorm is niet klein.","Verband zit niet daarin.","Geen verband."],
        uitlegPad: {
          stappen: [{ titel: "Enorm = heel groot", tekst: "Enorm = synoniem van 'gigantisch', 'reusachtig'. Allemaal: 'heel groot'." }],
          woorden: [{ woord: "enorm", uitleg: "Heel groot, gigantisch — vaak voor afmeting of hoeveelheid." }],
          theorie: "Familie van 'groot'-woorden: groot, enorm, gigantisch, reusachtig, mega.",
          voorbeelden: [{ type: "enorm", tekst: "Een enorm huis = een heel groot huis." }],
          basiskennis: [{ onderwerp: "Niet klein", uitleg: "Klein = antoniem (tegenstelling), niet synoniem." }],
          niveaus: { basis: "Enorm = heel groot. A.", simpeler: "Enorm betekent 'heel groot'. Niet klein, niet snel — alleen groot. = A.", nogSimpeler: "Enorm=groot = A." },
        },
      },
      {
        q: "Synoniem voor **'snel'**?",
        options: ["vlug","langzaam","hoog","lekker"],
        answer: 0,
        wrongHints: [null,"Antoniem (tegenstelling).","Geen verband.","Geen verband."],
        uitlegPad: {
          stappen: [{ titel: "Snel = vlug", tekst: "Vlug, rap, gauw — allemaal synoniem van snel." }],
          woorden: [{ woord: "snel", uitleg: "In korte tijd. Familie: vlug, rap, gauw, kwiek." }],
          theorie: "Snelheid-synoniemen: snel, vlug, rap, gauw, kwiek. Allemaal 'in korte tijd'.",
          voorbeelden: [{ type: "snel", tekst: "Hij liep snel = hij liep vlug = hij liep rap." }],
          basiskennis: [{ onderwerp: "Langzaam = antoniem", uitleg: "Langzaam = tegenstelling van snel, niet synoniem." }],
          niveaus: { basis: "Snel = vlug. A.", simpeler: "Welk woord betekent ook 'snel'? Vlug. (Langzaam = tegengesteld). = A.", nogSimpeler: "Vlug = A." },
        },
      },
      {
        q: "Welke is een synoniem voor **'eng'**?",
        options: ["griezelig","leuk","slim","helder"],
        answer: 0,
        wrongHints: [null,"Andersom — eng is niet leuk.","Geen verband.","Geen verband."],
        uitlegPad: {
          stappen: [{ titel: "Eng = griezelig", tekst: "Eng, griezelig, eng, akelig — woorden voor angstig-makend." }],
          woorden: [{ woord: "eng", uitleg: "Iets dat je bang maakt. Synoniemen: griezelig, akelig, beangstigend." }],
          theorie: "Angst-makend-familie: eng, griezelig, akelig, beangstigend, scary (Engels).",
          voorbeelden: [{ type: "eng", tekst: "Een eng spook = een griezelig spook." }],
          basiskennis: [{ onderwerp: "Niet leuk", uitleg: "Eng is meestal niet leuk — kan tegenstellig of niet-verband zijn." }],
          niveaus: { basis: "Eng = griezelig. A.", simpeler: "Iets dat je bang maakt = eng = griezelig. Niet leuk, niet slim, niet helder. = A.", nogSimpeler: "Griezelig = A." },
        },
      },
      {
        q: "**'Hij was bezorgd over de toets'** — synoniem voor 'bezorgd':",
        options: ["ongerust","blij","slim","moe"],
        answer: 0,
        wrongHints: [null,"Andersom.","Geen verband.","Geen verband."],
        uitlegPad: {
          stappen: [{ titel: "Bezorgd = ongerust", tekst: "Bezorgd, ongerust, bang, gespannen — emotie van zorgen-maken." }],
          woorden: [{ woord: "bezorgd", uitleg: "Zorg-emotie. Vrees voor wat kan gebeuren." }],
          theorie: "Synoniemen voor zorg: bezorgd, ongerust, bang, angstig, gespannen.",
          voorbeelden: [{ type: "bezorgd", tekst: "Hij was bezorgd voor de toets = hij was ongerust over de toets." }],
          basiskennis: [{ onderwerp: "Vervang-test", uitleg: "Past 'ongerust' in plaats van 'bezorgd' in zin? Ja → synoniem." }],
          niveaus: { basis: "Bezorgd = ongerust. A.", simpeler: "Bezorgd over toets = ongerust over toets. Hetzelfde gevoel, ander woord. = A.", nogSimpeler: "Ongerust = A." },
        },
      },
    ],
  },

  {
    title: "Antoniemen — tegenstellingen",
    explanation: "**Antoniemen** zijn woorden met **tegenovergestelde betekenis**.\n\n**Standaard-tegenstellingen**:\n• groot ↔ klein\n• hoog ↔ laag\n• snel ↔ langzaam\n• warm ↔ koud\n• vol ↔ leeg\n• licht ↔ zwaar\n• zacht ↔ hard\n• jong ↔ oud\n• boven ↔ onder\n• voor ↔ achter\n• binnen ↔ buiten\n• begin ↔ einde\n• meer ↔ minder\n• plus ↔ min\n\n**Soms zijn er meerdere tegenstellingen**:\n• 'licht' kan tegenstelling zijn van 'zwaar' (gewicht) **of** 'donker' (helderheid).\n• Welke past hangt af van de **context**.\n\n**Cito-vraagstijl**:\n*'Welke is de tegenstelling van INTERESSANT?'*\n• A: saai (✓)\n• B: leuk\n• C: kort\n• D: rood\n\n**Tip**: 'leuk' lijkt synoniem, niet antoniem. Pas op!\n\n**Cito-truc — context**:\n*'De zaal was tot op de laatste plek gevuld. Het was ___.'*\n• Tegenstelling van 'vol' = **leeg**.\n• Maar context zegt: zaal was vol → zoek antoniem die past in zo'n zin.\n\n**Tegenstellingen van werkwoorden**:\n• komen ↔ gaan\n• kopen ↔ verkopen\n• stijgen ↔ dalen\n• beginnen ↔ eindigen",
    checks: [
      {
        q: "Tegenstelling van **'zwaar'**?",
        options: ["licht","groot","klein","donker"],
        answer: 0,
        wrongHints: [null,"Niet altijd — kan ook (groot ↔ klein), maar zwaar-licht is gewicht.","Past bij groot-klein, niet bij zwaar.","Past bij licht-donker (helderheid)."],
        uitlegPad: {
          stappen: [{ titel: "Zwaar ↔ licht", tekst: "Zwaar = veel gewicht. Tegenovergesteld = licht (weinig gewicht)." }],
          woorden: [{ woord: "licht", uitleg: "Twee betekenissen: weinig gewicht (↔ zwaar) of veel helderheid (↔ donker)." }],
          theorie: "Gewicht-paar: zwaar ↔ licht. Zelfde woord 'licht' kan ook ↔ donker zijn — context bepaalt.",
          voorbeelden: [{ type: "anti", tekst: "Een zware tas ↔ een lichte tas (gewicht). Het werd licht ↔ donker (helderheid)." }],
          basiskennis: [{ onderwerp: "Twee-betekenissen-woord", uitleg: "Licht heeft 2 betekenissen — kies de juiste tegenstelling per context." }],
          niveaus: { basis: "Zwaar ↔ licht. A.", simpeler: "Wat is het tegenovergestelde van zwaar? Licht. Niet groot/klein (afmeting), niet donker (helderheid). = A.", nogSimpeler: "Licht = A." },
        },
      },
      {
        q: "Antoniem van **'beginnen'**?",
        options: ["eindigen","starten","openen","stoppen"],
        answer: 0,
        wrongHints: [null,"Synoniem!","Synoniem.","Klopt qua betekenis maar 'eindigen' is preciezer."],
        uitlegPad: {
          stappen: [{ titel: "Beginnen ↔ eindigen", tekst: "Beginnen = start. Tegenovergesteld = eindigen, klaarmaken, afronden." }],
          woorden: [{ woord: "eindigen", uitleg: "Tot een einde komen — antoniem van beginnen." }],
          theorie: "Tijd-paar: beginnen ↔ eindigen. Stoppen lijkt erop maar is breder. Starten/openen = synoniem.",
          voorbeelden: [{ type: "anti", tekst: "De film begint om 8 ↔ de film eindigt om 10." }],
          basiskennis: [{ onderwerp: "Best passende antoniem", uitleg: "Bij twee-keuze (eindigen/stoppen): kies degene die EXACT tegenovergesteld is." }],
          niveaus: { basis: "Beginnen ↔ eindigen. A.", simpeler: "Begin ↔ eind. Starten en openen zijn synoniemen — kun je niet kiezen. Stoppen kan ook, maar 'eindigen' is preciezer. = A.", nogSimpeler: "Eindigen = A." },
        },
      },
      {
        q: "Tegenstelling van **'verlengen'**?",
        options: ["verkorten","vergroten","openen","stoppen"],
        answer: 0,
        wrongHints: [null,"Synoniem-achtig (groter maken).","Geen verband.","Verkorten past beter."],
        uitlegPad: {
          stappen: [{ titel: "Verlengen ↔ verkorten", tekst: "Verlengen = langer maken. Tegenovergesteld = verkorten (korter maken)." }],
          woorden: [{ woord: "verlengen", uitleg: "Langer maken in tijd of afstand." }],
          theorie: "Lengte-paar: verlengen ↔ verkorten. Vergroten = synoniem (groter maken).",
          voorbeelden: [{ type: "anti", tekst: "Vergadering verlengen ↔ vergadering verkorten. Touw verlengen ↔ touw verkorten." }],
          basiskennis: [{ onderwerp: "Voorvoegsel ver-", uitleg: "ver- + lang/kort verandert 'lang' en 'kort' in werkwoorden — tegenovergesteld blijft hetzelfde." }],
          niveaus: { basis: "Verlengen ↔ verkorten. A.", simpeler: "Langer maken ↔ korter maken = verlengen ↔ verkorten. (Vergroten=synoniem, openen/stoppen=geen verband). = A.", nogSimpeler: "Verkorten = A." },
        },
      },
      {
        q: "Welk paar zijn **antoniemen**?",
        options: ["jong - oud","blij - vrolijk","snel - vlug","mooi - prachtig"],
        answer: 0,
        wrongHints: [null,"Synoniemen.","Synoniemen.","Synoniemen."],
        uitlegPad: {
          stappen: [{ titel: "Zoek tegenstelling", tekst: "Jong ↔ oud = leeftijd-tegenstelling. Andere paren zijn synoniem (zelfde betekenis)." }],
          woorden: [{ woord: "antoniem-paar", uitleg: "Twee woorden met tegenovergestelde betekenis." }],
          theorie: "Test elk paar: jong ↔ oud (tegenstelling ✓). Blij/vrolijk, snel/vlug, mooi/prachtig = synoniemen.",
          voorbeelden: [{ type: "test", tekst: "Past 'NIET' tussen woorden? Jong is NIET oud ✓. Blij is NIET vrolijk ✗ (klinkt gek)." }],
          basiskennis: [{ onderwerp: "Strikvraag", uitleg: "3 van 4 paren zijn synoniem — alleen jong/oud is antoniem." }],
          niveaus: { basis: "Jong ↔ oud. A.", simpeler: "Antoniem = tegenstelling. Jong/oud = leeftijd-tegenstelling ✓. Andere drie paren = synoniem-paren. = A.", nogSimpeler: "Jong-oud = A." },
        },
      },
    ],
  },

  {
    title: "Woorden in zinnen begrijpen",
    explanation: "Vaak kom je een **onbekend woord** tegen. **Context** *(de woorden eromheen)* helpt je raden wat het betekent.\n\n**Voorbeeld**:\n*'De auto reed met een **enorme** snelheid voorbij — bijna 200 km per uur.'*\n\nWat betekent **enorm** hier?\n• De zin geeft de hint: '200 km/h' = heel snel.\n• Dus 'enorm' = **heel groot/veel**.\n\n**Cito-strategieën — context-clues**:\n1. **Synoniem in zin**: 'De man was bezorgd, ofwel ongerust over zijn kind.'\n   - 'ofwel' geeft een synoniem. Bezorgd = ongerust.\n2. **Voorbeeld**: 'Tropische dieren — bv. olifanten en apen — leven in warme landen.'\n   - 'tropisch' = van warme landen.\n3. **Tegenstelling**: 'Hij was niet boos, hij was kalm.'\n   - 'kalm' = tegenstelling van boos = rustig.\n4. **Algemene context**: lees de hele alinea — wat is het hoofdonderwerp?\n\n**Cito-vraag-typen**:\n• 'Wat betekent X in zin Y?'\n• 'Welke optie kun je niet vervangen door X in deze zin?'\n• 'Welk woord is hier het meest passend?'\n\n**Veel-voorkomende fout**:\nLetterlijke betekenis nemen zonder context. *'De man was geel van angst'* — geel betekent hier 'heel bang', niet de kleur.",
    checks: [
      {
        q: "*'Het ging goed met Tom: hij vorderde gestaag op school.'* — 'vorderde' betekent:",
        options: ["maakte vooruitgang","had problemen","sloeg over","bleef hetzelfde"],
        answer: 0,
        wrongHints: [null,"Andersom — context zegt 'goed'.","Niet — 'gestaag' = constant doorgaan.","Klopt niet bij 'goed'."],
        uitlegPad: {
          stappen: [{ titel: "Context: 'ging goed'", tekst: "Zin start met 'ging goed'. Vorderde moet positief zijn. → vooruitgang." }],
          woorden: [{ woord: "vorderen", uitleg: "Vooruitgang maken, beter worden." }, { woord: "gestaag", uitleg: "Constant doorgaan, niet stoppen." }],
          theorie: "Context-truc: zinsgevoel (positief/negatief) bepaalt welke optie past.",
          voorbeelden: [{ type: "context", tekst: "'Ging goed' = positief → 'vorderde' = positief → vooruitgang." }],
          basiskennis: [{ onderwerp: "Schrap optie's", uitleg: "Problemen, sloeg over, bleef hetzelfde = niet positief → wegstrepen." }],
          niveaus: { basis: "Vorderde = vooruitgang. A.", simpeler: "Tom ging het GOED = positief. Dus 'vorderde' moet positief betekenen = maakte vooruitgang. = A.", nogSimpeler: "Vooruit = A." },
        },
      },
      {
        q: "*'De fles was leeg na drie slokken — een belachelijk klein bekertje.'* — 'belachelijk' betekent hier:",
        options: ["heel erg","grappig","gek","niet waar"],
        answer: 0,
        wrongHints: [null,"Niet de letterlijke betekenis — context zegt 'erg klein'.","Niet 'gek' maar 'extreem'.","Niet de letterlijke."],
        uitlegPad: {
          stappen: [{ titel: "Context: 'klein bekertje'", tekst: "Belachelijk versterkt 'klein' = HEEL ERG klein. Niet de letterlijke betekenis 'om te lachen'." }],
          woorden: [{ woord: "belachelijk", uitleg: "Letterlijk: om te lachen. In context: extreem, overdreven." }],
          theorie: "Sommige woorden hebben 2 betekenissen: letterlijk + versterkend. Context bepaalt.",
          voorbeelden: [{ type: "versterking", tekst: "Belachelijk duur = heel erg duur. Belachelijk klein = heel erg klein." }],
          basiskennis: [{ onderwerp: "Versterkers", uitleg: "Woorden zoals 'belachelijk', 'absurd', 'idioot' kunnen 'extreem' betekenen." }],
          niveaus: { basis: "Belachelijk = heel erg. A.", simpeler: "'Belachelijk klein' = HEEL ERG klein. Belachelijk versterkt het bijvoeglijk woord. = A.", nogSimpeler: "Heel erg = A." },
        },
      },
      {
        q: "*'Hij was uitgeput na de marathon.'* — 'uitgeput' betekent:",
        options: ["heel moe","blij","sterk","zwak"],
        answer: 0,
        wrongHints: [null,"Niet — context (marathon) zegt vermoeid.","Andersom.","Niet de exacte betekenis."],
        uitlegPad: {
          stappen: [{ titel: "Context: 'na marathon'", tekst: "Marathon = lange race. Daarna ben je heel moe. → uitgeput = heel moe." }],
          woorden: [{ woord: "uitgeput", uitleg: "Helemaal leeg-getrokken, geen energie meer. Familie: doodop, kapot, op." }],
          theorie: "Uit-geput = uit + putten (water uit put halen tot leeg). Beeld voor 'helemaal leeg'.",
          voorbeelden: [{ type: "uitgeput", tekst: "Na 4 uur sporten ben je uitgeput = totaal moe." }],
          basiskennis: [{ onderwerp: "Marathon = vermoeiend", uitleg: "Marathon (42 km lopen) maakt iedereen moe — context geeft betekenis." }],
          niveaus: { basis: "Uitgeput = heel moe. A.", simpeler: "Na marathon = vermoeid. 'Uitgeput' = HELEMAAL leeg, geen energie. = heel moe = A.", nogSimpeler: "Moe = A." },
        },
      },
    ],
  },

  {
    title: "Cito-eindopdracht — woordenschat mix",
    explanation: "Mix-toets: synoniemen, antoniemen, betekenis in zin.\n\nVeel succes!",
    checks: [
      {
        q: "Synoniem voor **'gigantisch'**?",
        options: ["enorm","klein","snel","kleurig"],
        answer: 0,
        wrongHints: [null,"Antoniem.","Geen verband.","Geen verband."],
        uitlegPad: {
          stappen: [{ titel: "Gigantisch = enorm", tekst: "Familie 'heel groot': groot, enorm, gigantisch, reusachtig, mega." }],
          woorden: [{ woord: "gigantisch", uitleg: "Heel groot. Komt van 'gigant' (reus uit oude verhalen)." }],
          theorie: "Synoniemen voor groot: enorm, gigantisch, reusachtig, mega — allemaal zelfde idee.",
          voorbeelden: [{ type: "syn", tekst: "Een gigantisch huis = een enorm huis = een reusachtig huis." }],
          basiskennis: [{ onderwerp: "Klein = antoniem", uitleg: "Klein = tegenstelling, niet synoniem." }],
          niveaus: { basis: "Gigantisch = enorm. A.", simpeler: "Welk woord betekent ook 'heel groot'? Enorm. (Klein=tegengesteld). = A.", nogSimpeler: "Enorm = A." },
        },
      },
      {
        q: "Antoniem van **'eerlijk'**?",
        options: ["oneerlijk","aardig","verdrietig","slim"],
        answer: 0,
        wrongHints: [null,"Geen verband.","Geen verband.","Geen verband."],
        uitlegPad: {
          stappen: [{ titel: "Eerlijk ↔ oneerlijk", tekst: "Voorvoegsel 'on-' maakt tegenstelling: eerlijk → oneerlijk." }],
          woorden: [{ woord: "on-", uitleg: "Voorvoegsel dat tegenstelling maakt: on-eerlijk, on-aardig, on-mogelijk." }],
          theorie: "Veel antoniemen via 'on-' voorvoegsel: prettig↔onprettig, geduldig↔ongeduldig.",
          voorbeelden: [{ type: "on-", tekst: "Eerlijk ↔ oneerlijk. Verstandig ↔ onverstandig. Beleefd ↔ onbeleefd." }],
          basiskennis: [{ onderwerp: "Direct herkennen", uitleg: "Optie A heeft 'on-' voor 'eerlijk' = directe tegenstelling." }],
          niveaus: { basis: "Eerlijk ↔ oneerlijk. A.", simpeler: "Voor 'eerlijk' het voorvoegsel 'on-' zetten = oneerlijk = tegenstelling. = A.", nogSimpeler: "On+eerlijk = A." },
        },
      },
      {
        q: "*'Mike was in zijn schik met het cadeau.'* — 'in zijn schik' betekent:",
        options: ["blij","verdrietig","boos","verbaasd"],
        answer: 0,
        wrongHints: [null,"Andersom.","Andersom.","Niet de exacte betekenis."],
        uitlegPad: {
          stappen: [{ titel: "Uitdrukking", tekst: "'In zijn schik' = vaste uitdrukking voor: blij, tevreden, gelukkig." }],
          woorden: [{ woord: "in zijn schik", uitleg: "Uitdrukking voor 'blij'. Schik = oude woord voor plezier." }],
          theorie: "Uitdrukkingen ('zegswijzen') = vaste woordcombinaties met aparte betekenis. Niet letterlijk vertalen.",
          voorbeelden: [{ type: "uitdr", tekst: "In zijn schik = blij. In zijn nopjes = blij. Door dolle heen = uitgelaten blij." }],
          basiskennis: [{ onderwerp: "Cadeau = positief", uitleg: "Context (cadeau krijgen) geeft hint dat het iets positiefs moet zijn." }],
          niveaus: { basis: "In zijn schik = blij. A.", simpeler: "'In zijn schik' is een uitdrukking voor blij/tevreden. Cadeau krijgen = blij worden. = A.", nogSimpeler: "Blij = A." },
        },
      },
      {
        q: "Welke is een **synoniem voor 'snel'**?",
        options: ["vlug","loom","langzaam","stil"],
        answer: 0,
        wrongHints: [null,"Antoniem.","Antoniem.","Geen verband."],
        uitlegPad: {
          stappen: [{ titel: "Snel = vlug", tekst: "Familie: snel, vlug, rap, gauw — allemaal 'in korte tijd'." }],
          woorden: [{ woord: "loom", uitleg: "Traag, sloom, langzaam — antoniem van snel." }],
          theorie: "Snelheid-synoniemen: snel = vlug = rap. Antoniemen: langzaam = loom = sloom = traag.",
          voorbeelden: [{ type: "syn", tekst: "Hij rende snel = hij rende vlug." }],
          basiskennis: [{ onderwerp: "Twee antoniemen-strikvraag", uitleg: "Loom EN langzaam zijn beide antoniem — alleen vlug is synoniem." }],
          niveaus: { basis: "Snel = vlug. A.", simpeler: "Vlug, rap = synoniem voor snel. Loom en langzaam = tegenstellingen. Stil = geen verband. = A.", nogSimpeler: "Vlug = A." },
        },
      },
      {
        q: "*'De juf gaf een uiterst nuttige tip.'* — 'uiterst' betekent:",
        options: ["heel","een beetje","slechts","niet"],
        answer: 0,
        wrongHints: [null,"Andersom.","Andersom.","Andersom — uiterst is positief en sterk."],
        uitlegPad: {
          stappen: [{ titel: "Uiterst = versterker", tekst: "Uiterst = sterke versterker, betekent 'heel/zeer/extreem'." }],
          woorden: [{ woord: "uiterst", uitleg: "Versterkend bijwoord: heel, zeer, extreem. Voor bijvoeglijke woorden." }],
          theorie: "Versterkers: heel, zeer, uiterst, bijzonder, ongelooflijk — allemaal sterker dan zonder.",
          voorbeelden: [{ type: "uiterst", tekst: "Uiterst nuttig = heel nuttig. Uiterst belangrijk = heel belangrijk." }],
          basiskennis: [{ onderwerp: "Niet 'uiterst' = uiterlijk", uitleg: "Uiterst en uiterlijk lijken op elkaar — ander betekenis. Uiterlijk = aan de buitenkant." }],
          niveaus: { basis: "Uiterst = heel. A.", simpeler: "'Uiterst nuttig' = heel nuttig. Uiterst maakt het bijvoeglijk woord sterker. = A.", nogSimpeler: "Heel = A." },
        },
      },
      {
        q: "Welke is **GEEN synoniem** voor 'mooi'?",
        options: ["lelijk","prachtig","schitterend","fraai"],
        answer: 0,
        wrongHints: [null,"Wel synoniem — past bij groep.","Wel synoniem.","Wel synoniem."],
        uitlegPad: {
          stappen: [{ titel: "Welke is GEEN", tekst: "Lelijk = TEGENSTELLING van mooi (antoniem). De rest = synoniemen." }],
          woorden: [{ woord: "fraai", uitleg: "Synoniem van mooi — ouder/formeel woord." }],
          theorie: "Mooi-familie: mooi, prachtig, schitterend, fraai, knap. Antoniem: lelijk.",
          voorbeelden: [{ type: "test", tekst: "Vervangtest: 'een mooie dag' → 'een prachtige dag' ✓ → 'een lelijke dag' = ander betekenis." }],
          basiskennis: [{ onderwerp: "FOUT-vraag", uitleg: "Vraag zoekt het ENE woord dat NIET past. Lees opties scherp." }],
          niveaus: { basis: "Lelijk = niet synoniem. A.", simpeler: "Prachtig, schitterend, fraai = allemaal synoniem voor mooi. Lelijk = TEGENSTELLING. = A.", nogSimpeler: "Lelijk = A." },
        },
      },
      {
        q: "Wat betekent het **spreekwoord** 'De kat uit de boom kijken'?",
        options: ["Eerst afwachten + observeren voor je iets doet","Letterlijk naar een kat in boom kijken","Boos worden","Slapen"],
        answer: 0,
        wrongHints: [null,"Klopt — figuurlijke betekenis: voorzichtig zijn, niet meteen handelen.","Niet letterlijk — spreekwoorden zijn figuurlijk.","Niet — geen woedend gedrag.","Niet — geen slaap-betekenis."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een spreekwoord?", tekst: "Een **spreekwoord** is een **vaste uitdrukking** met een **figuurlijke** (= overdrachtelijke) betekenis. Je begrijpt het niet door de woorden letterlijk te nemen.\n\nVoorbeeld: 'de kat uit de boom kijken' = NIET letterlijk naar een kat staren. Wel: **'voorzichtig afwachten + kijken hoe een situatie zich ontwikkelt voordat je actie onderneemt'**." },
            { titel: "Cito-truc: letterlijk vs figuurlijk", tekst: "Bij elke spreekwoord-vraag: vraag jezelf 'wat is de **figuurlijke** betekenis?'\n\nMeer voorbeelden:\n• **'Boter bij de vis'** = direct betalen (niet letterlijk over eten)\n• **'Gras over laten groeien'** = vergeten, voorbij laten gaan\n• **'Iemand om de tuin leiden'** = bedriegen, misleiden\n• **'Door de zure appel heen bijten'** = iets vervelends doen wat moet\n• **'Met de deur in huis vallen'** = direct ter zake komen" },
            { titel: "Cito-feit: in NL veel 'dieren-spreekwoorden'", tekst: "Veel Nederlandse spreekwoorden gebruiken dieren:\n• 'Een kat in de zak kopen' (slecht koopje)\n• 'Een paard kijken in de bek' (kritiek op cadeau)\n• 'De koe bij de horens vatten' (probleem aanpakken)\n• 'Vissen achter het net' (te laat zijn)\n• 'Een wolf in schaapskleren' (boos persoon doet aardig)\n\nVoor Cito hoef je niet alles te kennen — wel: weten dat spreekwoord = figuurlijk + kunnen achterhalen uit context." },
          ],
          woorden: [
            { woord: "spreekwoord", uitleg: "Vaste uitdrukking met figuurlijke betekenis. Vaak generaties oud." },
            { woord: "figuurlijk", uitleg: "Niet letterlijk — overdrachtelijk. Betekenis verschilt van de woorden zelf." },
            { woord: "letterlijk", uitleg: "Precies wat de woorden zeggen. 'Letterlijk een kat in boom' = echte kat zien." },
          ],
          theorie: "Spreekwoord-aanpak Cito:\n1. Lees zin in context (verhaal/dialoog)\n2. Letterlijke woorden niet voldoende — denk: 'wat betekent dit FIGUURLIJK?'\n3. Twijfel? Welke optie past bij wat in het verhaal gebeurt?\n\nNiet meteen kiezen letterlijke optie — bijna altijd verkeerd bij spreekwoord-vragen.",
          voorbeelden: [
            { type: "stap", tekst: "'Tom kreeg een appeltje voor de dorst' = Tom kreeg iets voor later/zekerheid, niet letterlijk fruit." },
            { type: "stap", tekst: "'De spijker op de kop' = exact het juiste raken." },
          ],
          basiskennis: [{ onderwerp: "Niet letterlijk", uitleg: "Bij spreekwoord-vraag: kies NOOIT letterlijke optie. Altijd figuurlijke uitleg." }],
          niveaus: { basis: "Afwachten + observeren. = A.", simpeler: "Spreekwoord 'de kat uit de boom kijken' = voorzichtig zijn, eerst kijken hoe iets verloopt voor je iets doet. NIET letterlijk. = A.", nogSimpeler: "Afwachten = A." },
        },
      },
      {
        q: "Wat betekent **'een open boek'** in 'Floor is een open boek voor mij'?",
        options: ["Ik begrijp haar makkelijk / ze verbergt niets","Ze leest veel","Ze heeft een boek open","Ze schrijft een boek"],
        answer: 0,
        wrongHints: [null,"Klopt — figuurlijke uitdrukking: voorspelbaar, doorzichtig, eerlijk.","Niet — geen leesgewoonten.","Niet letterlijk.","Niet — geen schrijven."],
        uitlegPad: {
          stappen: [
            { titel: "Figuurlijke uitdrukking", tekst: "**'Een open boek'** betekent figuurlijk: **iemand of iets dat doorzichtig + makkelijk te begrijpen is**. Geen verborgen agenda. Eerlijk + voorspelbaar.\n\nIemand die 'een gesloten boek' is = ondoorgrondelijk, mysterieus." },
            { titel: "Cito-context: persoonsbeschrijving", tekst: "In de zin 'Floor is een open boek voor mij':\n• 'Ik kan haar gemakkelijk doorzien'\n• 'Ze verbergt niets'\n• 'Ik weet altijd wat ze denkt + voelt'\n\nLet op CONTEXT: 'voor mij' = vanuit perspectief van spreker. Iemand anders kan haar moeilijker doorzien." },
            { titel: "Cito-tip: stijlfiguren herkennen", tekst: "**'Een open boek'** is een **metafoor** — beeldspraak waarbij iets met iets anders vergeleken wordt zonder 'als' of 'zoals'.\n\nAndere metaforen:\n• 'Hij is een leeuw in een gevecht' (= sterk, dapper)\n• 'Mijn baas is een dictator' (= autoritair)\n• 'Het regent pijpenstelen' (= het regent hard)\n\n**Vergelijking** ('zoals'): 'Hij is sterk ALS een leeuw' — met woord 'als' = vergelijking. Zonder = metafoor." },
          ],
          woorden: [
            { woord: "metafoor", uitleg: "Beeldspraak: iets WORDT iets anders genoemd zonder 'als'. 'Hij is een ster' = sterren-vergelijking." },
            { woord: "doorzichtig", uitleg: "Letterlijk: licht doorlaat (glas). Figuurlijk: makkelijk te begrijpen." },
          ],
          theorie: "**Stijlfiguren** in Cito-stof:\n• **Metafoor**: 'mijn hart is een woestijn' (zonder 'als')\n• **Vergelijking**: 'mijn hart is als een woestijn' (mét 'als')\n• **Personificatie**: 'de wind huilt' (dingen krijgen menselijk gedrag)\n• **Hyperbool**: 'ik heb 1000 keer gezegd' (overdrijving)\n• **Litotes**: 'niet onaardig' (= aardig, dubbele ontkenning)",
          voorbeelden: [
            { type: "stap", tekst: "'Mijn moeder is een rots' = sterke steun, niet letterlijk steen." },
            { type: "stap", tekst: "'De zon lacht' = personificatie, zon kan niet echt lachen." },
          ],
          basiskennis: [{ onderwerp: "Context belangrijk", uitleg: "Spreekwoord-vragen vereisen altijd de hele zin lezen. Soms helpt vorige zin ook." }],
          niveaus: { basis: "Makkelijk te begrijpen. = A.", simpeler: "'Open boek' = figuurlijk: makkelijk te doorzien, niets verbergen, voorspelbaar. = A.", nogSimpeler: "Doorzichtig = A." },
        },
      },
      {
        q: "Wat is het **antoniem** van **'overvloed'**?",
        options: ["Tekort / schaarste","Veel","Eten","Bos"],
        answer: 0,
        wrongHints: [null,"Klopt — overvloed = veel, antoniem = weinig/tekort.","Niet — 'veel' is synoniem van overvloed.","Niet — eten heeft niets met de tegenstelling.","Niet — bos is een plek."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een antoniem?", tekst: "Een **antoniem** is een woord met **tegengestelde betekenis**. Het is het tegenovergestelde van een **synoniem** (zelfde betekenis).\n\nVoorbeeld:\n• 'Mooi' ↔ antoniem 'lelijk'\n• 'Snel' ↔ antoniem 'langzaam'\n• 'Veel' ↔ antoniem 'weinig'" },
            { titel: "Overvloed = ?", tekst: "**Overvloed** betekent: heel veel ergens van. Bijvoorbeeld 'overvloed aan voedsel' = veel meer dan genoeg.\n\nTegenstelling: **tekort** of **schaarste** — wanneer er TE WEINIG is van iets. Bijvoorbeeld 'tekort aan water' = te weinig water.\n\nIn Cito-vragen wordt vaak gevraagd: 'Welk woord is het ANTONIEM van X?'" },
            { titel: "Cito-tip: synoniem vs antoniem", tekst: "Cito test allebei:\n• **Synoniem** = zelfde betekenis. (Bv. 'huis' ↔ 'woning')\n• **Antoniem** = tegenovergestelde. (Bv. 'huis' geen direct antoniem, maar 'mooi' ↔ 'lelijk')\n\nLet ALTIJD op vraag: zoekt Cito synoniem of antoniem? Veel kinderen lezen te snel + wisselen ze om → verkeerd antwoord ondanks goede kennis." },
          ],
          woorden: [
            { woord: "antoniem", uitleg: "Woord met tegengestelde betekenis. Ook wel 'tegenstelling' genoemd." },
            { woord: "synoniem", uitleg: "Woord met dezelfde of bijna dezelfde betekenis." },
            { woord: "overvloed", uitleg: "Heel veel ergens van. Meer dan genoeg." },
            { woord: "tekort", uitleg: "Te weinig ergens van. Schaarste." },
          ],
          theorie: "Veel antoniem-paren voor Cito-PO:\n• groot ↔ klein\n• rijk ↔ arm\n• jong ↔ oud\n• warm ↔ koud\n• binnen ↔ buiten\n• boven ↔ onder\n• stil ↔ luid\n• schoon ↔ vies\n• begin ↔ einde\n• verleden ↔ toekomst\n• overvloed ↔ tekort/schaarste\n• groei ↔ krimp",
          voorbeelden: [
            { type: "stap", tekst: "Antoniem van 'optimistisch' = pessimistisch." },
            { type: "stap", tekst: "Antoniem van 'transparant' = ondoorzichtig." },
          ],
          basiskennis: [{ onderwerp: "Niet vertroubelen", uitleg: "Antoniem is TEGENOVERGESTELDE — niet 'iets anders'. 'Mooi' antoniem is 'lelijk', niet 'rood' (rood is ander concept, geen tegenstelling)." }],
          niveaus: { basis: "Tekort. = A.", simpeler: "Overvloed = veel → antoniem = tekort/schaarste. = A.", nogSimpeler: "Tekort = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const woordenschatPo = {
  id: "woordenschat-po",
  title: "Woordenschat — Cito groep 5-8",
  emoji: "📚",
  level: "groep5-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Lezen — woordenschat",
  prerequisites: [
    { id: "spelling-overige-po", title: "Spelling — basisregels", niveau: "po-1F" },
  ],
  intro:
    "Woordenschat voor groep 5-8: synoniemen (zelfde betekenis), antoniemen (tegenstelling), betekenis in zin via context. Cito-stijl. ~12 min.",
  triggerKeywords: [
    "woordenschat","synoniem","antoniem","betekenis","tegenstelling",
    "context","woord","leeswoord",
  ],
  chapters,
  steps,
};

export default woordenschatPo;
