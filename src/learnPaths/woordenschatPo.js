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
      },
      {
        q: "Welke is **GEEN deel** van woordenschat-vragen?",
        options: ["Spelling-regels","Synoniemen","Antoniemen","Betekenis in zin"],
        answer: 0,
        wrongHints: [null,"Wel — synoniem zoeken hoort erbij.","Wel — tegenstellingen ook.","Wel — context begrijpen ook."],
      },
      {
        q: "Wat is een **synoniem**?",
        options: ["Een woord met dezelfde betekenis","Een woord met tegenovergestelde betekenis","Een woord uit een vreemde taal","Een lange zin"],
        answer: 0,
        wrongHints: [null,"Dat is antoniem.","Klopt niet.","Dat is een zin."],
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
      },
      {
        q: "Synoniem voor **'snel'**?",
        options: ["vlug","langzaam","hoog","lekker"],
        answer: 0,
        wrongHints: [null,"Antoniem (tegenstelling).","Geen verband.","Geen verband."],
      },
      {
        q: "Welke is een synoniem voor **'eng'**?",
        options: ["griezelig","leuk","slim","helder"],
        answer: 0,
        wrongHints: [null,"Andersom — eng is niet leuk.","Geen verband.","Geen verband."],
      },
      {
        q: "**'Hij was bezorgd over de toets'** — synoniem voor 'bezorgd':",
        options: ["ongerust","blij","slim","moe"],
        answer: 0,
        wrongHints: [null,"Andersom.","Geen verband.","Geen verband."],
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
      },
      {
        q: "Antoniem van **'beginnen'**?",
        options: ["eindigen","starten","openen","stoppen"],
        answer: 0,
        wrongHints: [null,"Synoniem!","Synoniem.","Klopt qua betekenis maar 'eindigen' is preciezer."],
      },
      {
        q: "Tegenstelling van **'verlengen'**?",
        options: ["verkorten","vergroten","openen","stoppen"],
        answer: 0,
        wrongHints: [null,"Synoniem-achtig (groter maken).","Geen verband.","Verkorten past beter."],
      },
      {
        q: "Welk paar zijn **antoniemen**?",
        options: ["jong - oud","blij - vrolijk","snel - vlug","mooi - prachtig"],
        answer: 0,
        wrongHints: [null,"Synoniemen.","Synoniemen.","Synoniemen."],
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
      },
      {
        q: "*'De fles was leeg na drie slokken — een belachelijk klein bekertje.'* — 'belachelijk' betekent hier:",
        options: ["heel erg","grappig","gek","niet waar"],
        answer: 0,
        wrongHints: [null,"Niet de letterlijke betekenis — context zegt 'erg klein'.","Niet 'gek' maar 'extreem'.","Niet de letterlijke."],
      },
      {
        q: "*'Hij was uitgeput na de marathon.'* — 'uitgeput' betekent:",
        options: ["heel moe","blij","sterk","zwak"],
        answer: 0,
        wrongHints: [null,"Niet — context (marathon) zegt vermoeid.","Andersom.","Niet de exacte betekenis."],
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
      },
      {
        q: "Antoniem van **'eerlijk'**?",
        options: ["oneerlijk","aardig","verdrietig","slim"],
        answer: 0,
        wrongHints: [null,"Geen verband.","Geen verband.","Geen verband."],
      },
      {
        q: "*'Mike was in zijn schik met het cadeau.'* — 'in zijn schik' betekent:",
        options: ["blij","verdrietig","boos","verbaasd"],
        answer: 0,
        wrongHints: [null,"Andersom.","Andersom.","Niet de exacte betekenis."],
      },
      {
        q: "Welke is een **synoniem voor 'snel'**?",
        options: ["vlug","loom","langzaam","stil"],
        answer: 0,
        wrongHints: [null,"Antoniem.","Antoniem.","Geen verband."],
      },
      {
        q: "*'De juf gaf een uiterst nuttige tip.'* — 'uiterst' betekent:",
        options: ["heel","een beetje","slechts","niet"],
        answer: 0,
        wrongHints: [null,"Andersom.","Andersom.","Andersom — uiterst is positief en sterk."],
      },
      {
        q: "Welke is **GEEN synoniem** voor 'mooi'?",
        options: ["lelijk","prachtig","schitterend","fraai"],
        answer: 0,
        wrongHints: [null,"Wel synoniem — past bij groep.","Wel synoniem.","Wel synoniem."],
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
