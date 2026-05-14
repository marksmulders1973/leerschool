// Leerpad: Duitse lidwoorden en naamvallen — onderbouw VO
// 10 stappen in 4 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  mas: "#42a5f5", fem: "#ec407a", neu: "#26a69a", plu: "#ffb300",
  good: "#00c853",
};

const stepEmojis = ["🇩🇪", "♂️", "♀️", "⚪", "📋", "🎯", "🎁", "📜", "🧩", "🏆"];

const chapters = [
  { letter: "A", title: "De drie geslachten", emoji: "♂️", from: 0, to: 3 },
  { letter: "B", title: "De vier naamvallen", emoji: "📋", from: 4, to: 7 },
  { letter: "C", title: "Toepassen", emoji: "🧩", from: 8, to: 8 },
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 9, to: 9 },
];

const steps = [
  {
    title: "Duits — drie geslachten",
    explanation: "In het Duits heeft elk zelfstandig naamwoord een **geslacht**: mannelijk, vrouwelijk of onzijdig. Dit bepaalt welk **lidwoord** je gebruikt:\n\n• **der** = mannelijk *(de Mann, de jongen)*\n• **die** = vrouwelijk *(de Frau, de moeder)*\n• **das** = onzijdig *(het Kind, het huis)*\n• **die** = meervoud *(de Männer, de Frauen, de Kinder)*\n\n**In het Nederlands** hebben we 'de' en 'het' — geen drie geslachten zoals Duits.\n\n**Probleem**: het geslacht is in Duits niet altijd logisch.\n• das Mädchen *(meisje, onzijdig!)* \n• die Sonne *(zon, vrouwelijk)* \n• der Mond *(maan, mannelijk)*\n\nJe moet daarom het **lidwoord erbij leren** wanneer je een woord leert.\n\n**Truc**: leer woorden ALTIJD met lidwoord:\n❌ Tisch *(tafel)* \n✓ **der** Tisch",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="80" height="80" rx="10" fill="${COLORS.mas}" opacity="0.30" stroke="${COLORS.mas}" stroke-width="2"/>
<text x="60" y="70" text-anchor="middle" fill="${COLORS.mas}" font-size="14" font-family="Arial" font-weight="bold">der</text>
<text x="60" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">mannelijk</text>
<text x="60" y="108" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">der Mann</text>
<rect x="110" y="40" width="80" height="80" rx="10" fill="${COLORS.fem}" opacity="0.30" stroke="${COLORS.fem}" stroke-width="2"/>
<text x="150" y="70" text-anchor="middle" fill="${COLORS.fem}" font-size="14" font-family="Arial" font-weight="bold">die</text>
<text x="150" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vrouwelijk</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">die Frau</text>
<rect x="200" y="40" width="80" height="80" rx="10" fill="${COLORS.neu}" opacity="0.30" stroke="${COLORS.neu}" stroke-width="2"/>
<text x="240" y="70" text-anchor="middle" fill="${COLORS.neu}" font-size="14" font-family="Arial" font-weight="bold">das</text>
<text x="240" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">onzijdig</text>
<text x="240" y="108" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">das Kind</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">leer woorden mét lidwoord!</text>
</svg>`,
    checks: [
      {
        q: "Welk lidwoord hoort bij **Mann** (man)?",
        options: ["der", "die", "das", "des"],
        answer: 0,
        wrongHints: [null, "Vrouwelijk — niet voor 'man'.", "Onzijdig — niet voor 'man'.", "Dat is geen basis-lidwoord."],
        uitlegPad: {
          stappen: [{ titel: "der Mann", tekst: "Mann (man) is mannelijk → der." }],
          woorden: [{ woord: "der", uitleg: "mannelijk lidwoord, nominatief" }],
          theorie: "Mannen + mannelijke beroepen → der.",
          voorbeelden: [{ type: "voorbeeld", tekst: "der Vater, der Lehrer, der Mann" }],
          basiskennis: [{ onderwerp: "altijd erbij leren", uitleg: "lidwoord onthouden" }],
          niveaus: { basis: "der.", simpeler: "Mannelijk = der.", nogSimpeler: "der Mann." },
        },
      },
      {
        q: "Welk lidwoord hoort bij **Mädchen** (meisje)?",
        options: ["das", "die", "der", "den"],
        answer: 0,
        wrongHints: [null, "Klinkt logisch (meisje = vrouwelijk?), maar in Duits is 'Mädchen' onzijdig — door de uitgang -chen.", "Mannelijk — past niet.", "Naamval, geen basis-lidwoord."],
        uitlegPad: {
          stappen: [{ titel: "-chen = das", tekst: "Mädchen eindigt op -chen → onzijdig → das." }],
          woorden: [{ woord: "-chen / -lein", uitleg: "verkleinwoorden → altijd das" }],
          theorie: "Verkleinwoorden -chen en -lein zijn altijd onzijdig.",
          voorbeelden: [{ type: "voorbeeld", tekst: "das Mädchen, das Häuschen, das Fräulein" }],
          basiskennis: [{ onderwerp: "logisch?", uitleg: "Duits volgt soms uitgang ipv betekenis" }],
          niveaus: { basis: "das.", simpeler: "Verkleinwoord = das.", nogSimpeler: "das Mädchen." },
        },
      },
    ],
  },
  {
    title: "Trucs voor het geslacht",
    explanation: "Je kunt vaak het geslacht **voorspellen** uit de uitgang of betekenis. Dit helpt enorm.\n\n**Mannelijk (der)**:\n• Mannen, mannelijke beroepen: der Vater, der Lehrer.\n• Dagen, maanden, seizoenen: der Montag, der Januar, der Sommer.\n• Eindigend op -er, -ig, -ling, -ismus: der Computer, der König, der Frühling.\n\n**Vrouwelijk (die)**:\n• Vrouwen, vrouwelijke beroepen: die Mutter, die Lehrerin.\n• Eindigend op -ung, -heit, -keit, -schaft, -ei: die Zeitung, die Freiheit, die Bäckerei.\n• Bloemen, getallen: die Rose, die Eins.\n\n**Onzijdig (das)**:\n• Verkleinwoorden op -chen, -lein: das Mädchen, das Häuslein.\n• Werkwoorden als zelfstandig naamwoord: das Lesen, das Schwimmen.\n• Metalen: das Gold, das Silber.\n\n**Maar er zijn altijd uitzonderingen** — dus blijf erbij leren met lidwoord.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">trucs voor het geslacht</text>
<text x="20" y="52" fill="${COLORS.mas}" font-size="11" font-family="Arial" font-weight="bold">der: -er, -ig, dagen/maanden</text>
<text x="20" y="68" fill="${COLORS.muted}" font-size="10" font-family="Arial">  der Lehrer, der Montag</text>
<text x="20" y="92" fill="${COLORS.fem}" font-size="11" font-family="Arial" font-weight="bold">die: -ung, -heit, -keit</text>
<text x="20" y="108" fill="${COLORS.muted}" font-size="10" font-family="Arial">  die Zeitung, die Freiheit</text>
<text x="20" y="132" fill="${COLORS.neu}" font-size="11" font-family="Arial" font-weight="bold">das: -chen, -lein</text>
<text x="20" y="148" fill="${COLORS.muted}" font-size="10" font-family="Arial">  das Mädchen, das Häuslein</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">+ uitzonderingen — leer met lidwoord</text>
</svg>`,
    checks: [
      {
        q: "Welk geslacht heeft **die Zeitung** (krant)?",
        options: ["Vrouwelijk", "Mannelijk", "Onzijdig", "Meervoud"],
        answer: 0,
        wrongHints: [null, "Niet — eindigt op -ung = vrouwelijk.", "Niet — -ung is vrouwelijk.", "Het is enkelvoud."],
        uitlegPad: {
          stappen: [{ titel: "-ung = die", tekst: "Zeitung eindigt op -ung → vrouwelijk → die." }],
          woorden: [{ woord: "-ung -heit -keit", uitleg: "vrouwelijke uitgangen" }],
          theorie: "Eindigingen -ung/-heit/-keit/-schaft/-ei → die.",
          voorbeelden: [{ type: "voorbeeld", tekst: "die Zeitung, die Freiheit, die Schönheit" }],
          basiskennis: [{ onderwerp: "trucs", uitleg: "uitgang voorspelt geslacht" }],
          niveaus: { basis: "Vrouwelijk.", simpeler: "-ung → die.", nogSimpeler: "die Zeitung." },
        },
      },
      {
        q: "Wat is het geslacht van **Häuschen** (huisje)?",
        options: ["Onzijdig (das)", "Mannelijk (der)", "Vrouwelijk (die)", "Meervoud"],
        answer: 0,
        wrongHints: [null, "Niet — verkleinwoord op -chen is altijd onzijdig.", "Niet — -chen is altijd das.", "Enkelvoud."],
        uitlegPad: {
          stappen: [{ titel: "-chen = das", tekst: "Häuschen eindigt op -chen → onzijdig." }],
          woorden: [{ woord: "verkleinwoord", uitleg: "kleinere versie van iets" }],
          theorie: "-chen / -lein = ALTIJD onzijdig.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Haus → Häuschen, Frau → Fräulein" }],
          basiskennis: [{ onderwerp: "regel = harde regel", uitleg: "geen uitzonderingen" }],
          niveaus: { basis: "Onzijdig (das).", simpeler: "-chen → das.", nogSimpeler: "das Häuschen." },
        },
      },
    ],
  },
  {
    title: "Onbepaald lidwoord — ein, eine, ein",
    explanation: "Naast 'der/die/das' heeft Duits ook **onbepaalde lidwoorden** — vergelijkbaar met 'een' in Nederlands.\n\n**Vormen**:\n• **ein** — bij mannelijk en onzijdig. *(ein Mann, ein Kind)*\n• **eine** — bij vrouwelijk. *(eine Frau)*\n\n**Geen meervoud** voor 'ein' — bij meervoud gebruik je geen lidwoord:\n• die Bücher → Bücher *(boeken)*\n\n**Truc**: 'eine' = vrouwelijk → die ↔ eine (beide e's). Verder gewoon 'ein'.\n\n**Voorbeelden**:\n• der Mann → ein Mann\n• die Frau → eine Frau\n• das Kind → ein Kind\n• die Bücher → Bücher (geen onbepaald lidwoord in meervoud)\n\n**Negatie**: 'kein' (geen) volgt dezelfde patronen — kein Mann, keine Frau, kein Kind.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">onbepaald lidwoord</text>
<rect x="20" y="50" width="80" height="60" rx="6" fill="${COLORS.mas}" opacity="0.20"/>
<text x="60" y="80" text-anchor="middle" fill="${COLORS.mas}" font-size="14" font-family="Arial" font-weight="bold">ein</text>
<text x="60" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">m + o</text>
<rect x="110" y="50" width="80" height="60" rx="6" fill="${COLORS.fem}" opacity="0.20"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.fem}" font-size="14" font-family="Arial" font-weight="bold">eine</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vrouwelijk</text>
<rect x="200" y="50" width="80" height="60" rx="6" fill="${COLORS.plu}" opacity="0.15"/>
<text x="240" y="80" text-anchor="middle" fill="${COLORS.plu}" font-size="13" font-family="Arial">−</text>
<text x="240" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">meervoud</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">kein/keine = geen, zelfde patroon</text>
</svg>`,
    checks: [
      {
        q: "Hoe zeg je \"een vrouw\" in Duits?",
        options: ["eine Frau", "ein Frau", "einer Frau", "eines Frau"],
        answer: 0,
        wrongHints: [null, "'ein' is voor mannelijk/onzijdig.", "Dat is een naamvalsvorm, niet basis.", "Ook een naamvalsvorm."],
        uitlegPad: {
          stappen: [{ titel: "eine Frau", tekst: "Frau (vrouw) is vrouwelijk → eine." }],
          woorden: [{ woord: "eine", uitleg: "onbepaald lidwoord vrouwelijk" }],
          theorie: "ein (m+o) / eine (v) / geen mv.",
          voorbeelden: [{ type: "voorbeeld", tekst: "ein Mann, eine Frau, ein Kind" }],
          basiskennis: [{ onderwerp: "trucje", uitleg: "die ↔ eine (beide e)" }],
          niveaus: { basis: "eine Frau.", simpeler: "Vrouw + eine.", nogSimpeler: "eine." },
        },
      },
      {
        q: "Hoe zeg je \"geen kind\"?",
        options: ["kein Kind", "keine Kind", "keins Kind", "keiner Kind"],
        answer: 0,
        wrongHints: [null, "'keine' = vrouwelijk; 'Kind' is onzijdig.", "Bestaat niet zo.", "Naamvalsvorm."],
        uitlegPad: {
          stappen: [{ titel: "kein Kind", tekst: "Kind = onzijdig (das) → kein, niet keine." }],
          woorden: [{ woord: "kein", uitleg: "geen, volgt ein-patroon" }],
          theorie: "kein (m+o) / keine (v+mv).",
          voorbeelden: [{ type: "voorbeeld", tekst: "kein Mann, keine Frau, kein Kind, keine Kinder" }],
          basiskennis: [{ onderwerp: "= ein + k", uitleg: "ein → kein, eine → keine" }],
          niveaus: { basis: "kein Kind.", simpeler: "Onzijdig + kein.", nogSimpeler: "kein." },
        },
      },
    ],
  },
  {
    title: "Bezittelijke voornaamwoorden",
    explanation: "Bezittelijk: 'mijn / jouw / onze' enz. — komt vaak voor.\n\n**Basisvormen** (mannelijk + onzijdig + meervoud):\n• mein = mijn\n• dein = jouw\n• sein = zijn (van hem)\n• ihr = haar (van haar)\n• unser = ons\n• euer = jullie\n• ihr = hun / Ihr = uw (beleefd)\n\n**Bij vrouwelijke woorden** krijgt het een **-e** erachter:\n• meine, deine, seine, unsere, euere, ihre.\n\n**Voorbeeld**:\n• mein Vater (mannelijk → mein)\n• meine Mutter (vrouwelijk → meine)\n• mein Kind (onzijdig → mein)\n• meine Eltern (meervoud → meine)\n\n**Truc**: bezittelijk volgt het patroon van **kein/eine** — vrouwelijk + meervoud krijgen -e.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">bezittelijk: mein / meine</text>
<rect x="20" y="40" width="120" height="60" rx="6" fill="${COLORS.mas}" opacity="0.20"/>
<text x="80" y="65" text-anchor="middle" fill="${COLORS.mas}" font-size="13" font-family="Arial" font-weight="bold">mein</text>
<text x="80" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">m + o + meervoud-min...</text>
<rect x="160" y="40" width="120" height="60" rx="6" fill="${COLORS.fem}" opacity="0.20"/>
<text x="220" y="65" text-anchor="middle" fill="${COLORS.fem}" font-size="13" font-family="Arial" font-weight="bold">meine</text>
<text x="220" y="88" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vrouwelijk + meervoud</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">mein Vater · meine Mutter</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">mein Kind · meine Eltern</text>
</svg>`,
    checks: [
      {
        q: "Hoe zeg je \"mijn moeder\" (Mutter is vrouwelijk)?",
        options: ["meine Mutter", "mein Mutter", "meines Mutter", "meinen Mutter"],
        answer: 0,
        wrongHints: [null, "'mein' is voor mannelijk/onzijdig.", "Bestaat als naamvalsvorm, niet basis.", "Naamvalsvorm."],
        uitlegPad: {
          stappen: [{ titel: "meine Mutter", tekst: "Mutter = vrouwelijk → meine (+e)." }],
          woorden: [{ woord: "bezittelijk", uitleg: "mijn / mein / meine" }],
          theorie: "Vrouwelijk + meervoud → +e.",
          voorbeelden: [{ type: "voorbeeld", tekst: "mein Vater, meine Mutter, mein Kind" }],
          basiskennis: [{ onderwerp: "patroon = ein", uitleg: "mein volgt ein/kein-regel" }],
          niveaus: { basis: "meine Mutter.", simpeler: "Vrouw + meine.", nogSimpeler: "meine." },
        },
      },
      {
        q: "Hoe zeg je \"mijn kind\"?",
        options: ["mein Kind", "meine Kind", "meinen Kind", "meines Kind"],
        answer: 0,
        wrongHints: [null, "Kind = onzijdig (das) → mein, niet meine.", "Naamvalsvorm.", "Naamvalsvorm."],
        uitlegPad: {
          stappen: [{ titel: "mein Kind", tekst: "Kind = onzijdig (das) → mein (geen e)." }],
          woorden: [{ woord: "onzijdig", uitleg: "das-woorden → mein" }],
          theorie: "Mannelijk + onzijdig → mein (zonder e).",
          voorbeelden: [{ type: "voorbeeld", tekst: "mein Kind, mein Vater" }],
          basiskennis: [{ onderwerp: "geen -e", uitleg: "alleen vrouw + mv krijgen -e" }],
          niveaus: { basis: "mein Kind.", simpeler: "Onzijdig + mein.", nogSimpeler: "mein." },
        },
      },
    ],
  },

  // B
  {
    title: "Wat zijn naamvallen?",
    explanation: "In Duits verandert het lidwoord (en soms het zelfstandig naamwoord zelf) naargelang de **rol in de zin**. Die rol heet de **naamval**:\n\n**1. Nominatief** (1e nv) — onderwerp van de zin.\n*Wer/was?* — Wie/wat doet het?\n\n**2. Genitief** (2e nv) — bezit (in NL: 'van').\n*Wessen?*\n\n**3. Datief** (3e nv) — meewerkend voorwerp (aan/voor wie?).\n*Wem?*\n\n**4. Accusatief** (4e nv) — lijdend voorwerp (wat wordt gedaan/geraakt?).\n*Wen/was?*\n\n**Voorbeeld** in zinnen:\n• Der Mann gibt der Frau das Buch.\n• Der Mann (NOM, onderwerp) — wie geeft?\n• der Frau (DAT, aan wie geeft hij?) — meewerkend.\n• das Buch (ACC, wat wordt gegeven?) — lijdend.\n\nElke naamval heeft eigen vormen voor der/die/das.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">4 naamvallen</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">1. Nominatief</text>
<text x="20" y="72" fill="${COLORS.muted}" font-size="10" font-family="Arial">  onderwerp (wie/wat doet?)</text>
<text x="20" y="98" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">2. Genitief</text>
<text x="20" y="115" fill="${COLORS.muted}" font-size="10" font-family="Arial">  bezit (van wie?)</text>
<text x="20" y="138" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">3. Datief</text>
<text x="20" y="155" fill="${COLORS.muted}" font-size="10" font-family="Arial">  meewerkend (aan/voor wie?)</text>
<text x="20" y="178" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">4. Accusatief</text>
<text x="20" y="195" fill="${COLORS.muted}" font-size="10" font-family="Arial">  lijdend voorwerp (wat?)</text>
</svg>`,
    checks: [
      {
        q: "Welke naamval gebruik je voor het **onderwerp** van de zin?",
        options: ["Nominatief (1e)", "Genitief (2e)", "Datief (3e)", "Accusatief (4e)"],
        answer: 0,
        wrongHints: [null, "Genitief = bezit.", "Datief = meewerkend voorwerp.", "Accusatief = lijdend voorwerp."],
        uitlegPad: {
          stappen: [{ titel: "Onderwerp = nominatief", tekst: "Nominatief = 1e nv = wie/wat doet de actie." }],
          woorden: [{ woord: "nominatief", uitleg: "1e naamval, onderwerp" }],
          theorie: "Vier naamvallen: NOM/GEN/DAT/ACC.",
          voorbeelden: [{ type: "voorbeeld", tekst: "DER Mann gibt das Buch (der Mann = onderwerp)" }],
          basiskennis: [{ onderwerp: "vraagwoord", uitleg: "Wer? Was? → nominatief" }],
          niveaus: { basis: "Nominatief.", simpeler: "1e naamval.", nogSimpeler: "Onderwerp = NOM." },
        },
      },
      {
        q: "\"Ich gebe **dem Mann** das Buch.\" Welke naamval is 'dem Mann'?",
        options: ["Datief (meewerkend)", "Nominatief", "Accusatief", "Genitief"],
        answer: 0,
        wrongHints: [null, "Onderwerp is 'ich'.", "Lijdend = das Buch.", "Geen bezitsverhouding."],
        uitlegPad: {
          stappen: [{ titel: "Aan wie? = datief", tekst: "Aan WIE geef ik? → dem Mann (datief)." }],
          woorden: [{ woord: "datief", uitleg: "3e nv, meewerkend voorwerp" }],
          theorie: "Vraag 'aan/voor wie' → datief.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Ich gebe dem Mann das Buch" }],
          basiskennis: [{ onderwerp: "drie rollen", uitleg: "ich (NOM) + dem Mann (DAT) + das Buch (ACC)" }],
          niveaus: { basis: "Datief.", simpeler: "Meewerkend voorwerp.", nogSimpeler: "Aan wie?" },
        },
      },
    ],
  },
  {
    title: "Tabel — der/die/das in 4 naamvallen",
    explanation: "Dit is dé tabel die elke leerling Duits uit zijn hoofd moet kennen:\n\n| | mannelijk | vrouwelijk | onzijdig | meervoud |\n|---|---|---|---|---|\n| **Nom** | der | die | das | die |\n| **Gen** | des | der | des | der |\n| **Dat** | dem | der | dem | den |\n| **Acc** | den | die | das | die |\n\n**Patronen om te onthouden**:\n• Nom = der / die / das / die.\n• Acc verandert alleen bij mannelijk: der → **den**.\n• Datief: dem / der / dem / den (meervoud + n).\n• Genitief: des / der / des / der.\n\n**Geheugentruc voor accusatief**:\n*\"Mannelijk verandert, rest blijft hetzelfde.\"*\n• Ich sehe **den** Mann. (Acc, mannelijk verandert)\n• Ich sehe **die** Frau. (Acc, vrouwelijk = Nom)\n• Ich sehe **das** Kind. (Acc, onzijdig = Nom)",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="260" height="130" rx="6" fill="${COLORS.paper}" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="60" y1="50" x2="280" y2="50" stroke="${COLORS.text}" stroke-width="0.5"/>
<line x1="60" y1="30" x2="60" y2="160" stroke="${COLORS.text}" stroke-width="0.5"/>
<text x="80" y="45" text-anchor="middle" fill="${COLORS.mas}" font-size="11" font-family="Arial" font-weight="bold">m</text>
<text x="135" y="45" text-anchor="middle" fill="${COLORS.fem}" font-size="11" font-family="Arial" font-weight="bold">v</text>
<text x="190" y="45" text-anchor="middle" fill="${COLORS.neu}" font-size="11" font-family="Arial" font-weight="bold">o</text>
<text x="245" y="45" text-anchor="middle" fill="${COLORS.plu}" font-size="11" font-family="Arial" font-weight="bold">mv</text>
${["Nom", "Gen", "Dat", "Acc"].map((nv, i) => {
  const y = 70 + i * 22;
  const cells = [["der", "die", "das", "die"], ["des", "der", "des", "der"], ["dem", "der", "dem", "den"], ["den", "die", "das", "die"]][i];
  return `<text x="40" y="${y}" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">${nv}</text>` +
    cells.map((c, j) => `<text x="${80 + j * 55}" y="${y}" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">${c}</text>`).join("");
}).join("")}
</svg>`,
    checks: [
      {
        q: "Wat is **acc. mannelijk** van der Mann?",
        options: ["den Mann", "der Mann", "dem Mann", "des Mann"],
        answer: 0,
        wrongHints: [null, "Dat is nom.", "Datief.", "Genitief — Mannes met -es."],
        uitlegPad: {
          stappen: [{ titel: "Acc m: der → den", tekst: "Mannelijk verandert in acc: der wordt den." }],
          woorden: [{ woord: "accusatief", uitleg: "4e nv, lijdend voorwerp" }],
          theorie: "Alleen mannelijk verandert in acc. Vrouw/onzijdig/mv blijven.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Ich sehe den Mann (acc m)" }],
          basiskennis: [{ onderwerp: "patroon", uitleg: "der → den is enige verschil acc/nom" }],
          niveaus: { basis: "den Mann.", simpeler: "Mannelijk acc = den.", nogSimpeler: "Mannelijk acc = den. → den." },
        },
      },
      {
        q: "Wat is **dat. vrouwelijk** van die Frau?",
        options: ["der Frau", "die Frau", "dem Frau", "den Frau"],
        answer: 0,
        wrongHints: [null, "Nom + Acc.", "Mannelijk/onzijdig datief.", "Mannelijk acc. of meervoud datief."],
        uitlegPad: {
          stappen: [{ titel: "Dat v = der", tekst: "Vrouwelijk datief: die → der." }],
          woorden: [{ woord: "datief v", uitleg: "die wordt der" }],
          theorie: "Vrouwelijk verandert in datief: die → der.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Ich helfe der Frau (dat v)" }],
          basiskennis: [{ onderwerp: "let op", uitleg: "der lijkt op nominatief mannelijk" }],
          niveaus: { basis: "der Frau.", simpeler: "Vrouwelijk dat = der.", nogSimpeler: "Vrouwelijk dat = der. → der." },
        },
      },
    ],
  },
  {
    title: "Wanneer welke naamval?",
    explanation: "Niet alleen de zinsrol bepaalt, ook **voorzetsels** en **werkwoorden** vereisen een specifieke naamval.\n\n**Voorzetsels + accusatief** (denk aan: durch, für, gegen, ohne, um — dfgou):\n• für **den** Vater — voor de vader.\n• ohne **die** Mutter — zonder de moeder.\n\n**Voorzetsels + datief** (denk aan: aus, bei, mit, nach, seit, von, zu — abmnsvz):\n• mit **dem** Auto — met de auto.\n• zu **der** (= zur) Schule — naar school.\n\n**Wisselvoorzetsels** (acc óf dat afhankelijk van betekenis): an, auf, hinter, in, neben, über, unter, vor, zwischen.\n• Beweging naartoe → accusatief: Ich gehe in **den** Park.\n• Plaats / waar → datief: Ich bin in **dem** (= im) Park.\n\n**Datief-werkwoorden**: helfen, danken, gefallen, gehören.\n• Ich helfe **dem** Mann.\n\nDit zijn rijtjes om uit je hoofd te leren — de eerste paar weken Duits draait alles om deze patronen.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">naamval volgt voorzetsel</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">+ acc:</text>
<text x="20" y="72" fill="${COLORS.muted}" font-size="10" font-family="Arial">  durch, für, gegen, ohne, um</text>
<text x="20" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">+ dat:</text>
<text x="20" y="117" fill="${COLORS.muted}" font-size="10" font-family="Arial">  aus, bei, mit, nach, seit, von, zu</text>
<text x="20" y="145" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">wissel (acc/dat):</text>
<text x="20" y="162" fill="${COLORS.muted}" font-size="10" font-family="Arial">  an, auf, in, vor, neben, über...</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial">beweging → acc, plaats → dat</text>
</svg>`,
    checks: [
      {
        q: "\"Mit ___ Auto\" — welke naamval?",
        options: ["mit dem Auto (datief)", "mit das Auto", "mit den Auto", "mit der Auto"],
        answer: 0,
        wrongHints: [null, "Mit eist datief.", "Mit eist datief — Auto is onzijdig → dem.", "Vrouwelijk vorm."],
        uitlegPad: {
          stappen: [{ titel: "Mit + datief", tekst: "Mit dem Auto. Mit eist altijd datief; Auto onzijdig → dem." }],
          woorden: [{ woord: "mit", uitleg: "voorzetsel + datief" }],
          theorie: "Datief-voorzetsels: aus, bei, mit, nach, seit, von, zu.",
          voorbeelden: [{ type: "voorbeeld", tekst: "mit dem Auto, mit der Frau" }],
          basiskennis: [{ onderwerp: "datief m+o", uitleg: "dem voor m én o" }],
          niveaus: { basis: "mit dem Auto.", simpeler: "Mit = dat.", nogSimpeler: "Mit = dat. → dem." },
        },
      },
      {
        q: "\"Ich gehe in ___ Park\" (beweging naartoe). Welke vorm?",
        options: ["in den Park (acc)", "in dem Park (dat)", "in der Park", "in das Park"],
        answer: 0,
        wrongHints: [null, "Beweging naartoe = accusatief, niet datief.", "Vrouwelijk — Park is mannelijk.", "Onzijdig — Park is mannelijk."],
        uitlegPad: {
          stappen: [{ titel: "In + acc (beweging)", tekst: "Ik ga IN den Park (beweging) → den (acc m)." }],
          woorden: [{ woord: "wisselvoorzetsel", uitleg: "in: acc bij beweging, dat bij plaats" }],
          theorie: "Beweging naartoe → acc. Plaats waar → dat.",
          voorbeelden: [{ type: "voorbeeld", tekst: "in den Park (gaan) vs im Park (zijn)" }],
          basiskennis: [{ onderwerp: "Park = m", uitleg: "der Park" }],
          niveaus: { basis: "in den Park.", simpeler: "Gaan → acc.", nogSimpeler: "Gaan → acc. → den." },
        },
      },
    ],
  },

  // C
  {
    title: "Toepassen — zinnen bouwen",
    explanation: "Tijd om alles toe te passen. Bij elke zin: bepaal wie/wat doet (Nom), wat het lijdend voorwerp is (Acc), en aan/voor wie (Dat).\n\n**Voorbeeld 1**: \"De vader geeft de moeder een cadeau.\"\n• De vader = onderwerp → Nom → **der Vater**\n• een cadeau = lijdend → Acc → **ein Geschenk** (onzijdig, ein blijft)\n• de moeder = meewerkend → Dat → **der Mutter** (vrouwelijk dat = der)\n\n→ *Der Vater gibt **der** Mutter **ein** Geschenk.*\n\n**Voorbeeld 2**: \"Ik help de man.\"\n• Ich = nom\n• helfen + dat → **dem** Mann\n\n→ *Ich helfe **dem** Mann.*\n\n**Voorbeeld 3**: \"Ze loopt door het park.\"\n• durch + acc, Park is mannelijk → **den** Park\n\n→ *Sie geht durch **den** Park.*",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">checklist per zin</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Wie doet? → Nom</text>
<text x="20" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Aan/voor wie? → Dat</text>
<text x="20" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Wat wordt geraakt? → Acc</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">4. Voorzetsel? → check rijtje</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">m: der/des/dem/den</text>
</svg>`,
    checks: [
      {
        q: "\"Er gibt ___ Vater (m) ___ Brief (m).\" Welke naamvallen?",
        options: [
          "dem Vater + den Brief",
          "den Vater + dem Brief",
          "der Vater + der Brief",
          "des Vaters + dem Brief",
        ],
        answer: 0,
        wrongHints: [null, "Vader = aan wie (datief), brief = wat (acc).", "Brief is lijdend, vader is meewerkend.", "Genitief past hier niet."],
        uitlegPad: {
          stappen: [{ titel: "Dat + Acc samen", tekst: "Er gibt dem Vater (aan wie) den Brief (wat)." }],
          woorden: [{ woord: "geven", uitleg: "geven = dat + acc tegelijk" }],
          theorie: "Aan wie? = dat. Wat? = acc. Beide mannelijk hier.",
          voorbeelden: [{ type: "voorbeeld", tekst: "geven, sturen, kopen: dat + acc" }],
          basiskennis: [{ onderwerp: "rol bepalen", uitleg: "wie ontvangt = dat" }],
          niveaus: { basis: "dem Vater + den Brief.", simpeler: "Aan wie + wat.", nogSimpeler: "dem + den." },
        },
      },
      {
        q: "Welke vorm bij 'ohne' (zonder) + Mutter?",
        options: ["ohne die Mutter", "ohne der Mutter", "ohne dem Mutter", "ohne den Mutter"],
        answer: 0,
        wrongHints: [null, "ohne = acc; vrouwelijk acc = die.", "ohne = acc, niet dat.", "ohne = acc, niet mannelijk."],
        uitlegPad: {
          stappen: [{ titel: "Ohne + acc", tekst: "Ohne eist acc; vrouwelijk acc = die." }],
          woorden: [{ woord: "DFGOU", uitleg: "durch, für, gegen, ohne, um → acc" }],
          theorie: "Acc-voorzetsels: durch/für/gegen/ohne/um.",
          voorbeelden: [{ type: "voorbeeld", tekst: "ohne die Mutter, für den Vater" }],
          basiskennis: [{ onderwerp: "vrouw acc = die", uitleg: "geen verandering vs nom" }],
          niveaus: { basis: "ohne die Mutter.", simpeler: "ohne + acc.", nogSimpeler: "ohne + acc. → die." },
        },
      },
    ],
  },

  {
    title: "Eindopdracht — naamvallen door elkaar",
    explanation: "Tijd om alles te combineren!\n\n**Snelle samenvatting**:\n\n| | m | v | o | mv |\n|---|---|---|---|---|\n| Nom | der | die | das | die |\n| Acc | **den** | die | das | die |\n| Dat | dem | der | dem | **den** |\n| Gen | des | der | des | der |\n\n**Ezelsbruggetjes**:\n• Acc verandert ALLEEN bij mannelijk (der → den).\n• Datief vrouwelijk = der.\n• Datief meervoud = den (+ noun krijgt -n).\n\n**Voorzetsels**:\n• Acc: **d**urch, **f**ür, **g**egen, **o**hne, **u**m → \"DFGOU\"\n• Dat: **a**us, **b**ei, **m**it, **n**ach, **s**eit, **v**on, **z**u\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="24" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">checklist</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Geslacht weten? (der/die/das)</text>
<text x="20" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Welke rol in zin? (NOM/ACC/DAT)</text>
<text x="20" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Voorzetsel ervoor?</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">4. Tabel toepassen</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — viel Erfolg!</text>
</svg>`,
    checks: [
      {
        q: "\"Ich sehe ___ Hund (m).\" (Ik zie de hond.)",
        options: ["den Hund", "der Hund", "dem Hund", "des Hundes"],
        answer: 0,
        wrongHints: [null, "Dat is nom — maar 'de hond' is hier lijdend → acc.", "Datief — niet juist hier.", "Genitief — niet juist hier."],
        uitlegPad: {
          stappen: [{ titel: "Lijdend = acc", tekst: "Ich sehe den Hund. Wat zie ik? den Hund → acc m." }],
          woorden: [{ woord: "lijdend voorwerp", uitleg: "wat wordt geraakt door actie" }],
          theorie: "Sehen + acc. Hund is mannelijk → den.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Ich sehe den Hund / die Frau / das Kind" }],
          basiskennis: [{ onderwerp: "vraag", uitleg: "Wen sehe ich?" }],
          niveaus: { basis: "den Hund.", simpeler: "Acc + den.", nogSimpeler: "Acc + den. → den." },
        },
      },
      {
        q: "\"Mit ___ Lehrerin (v) gehe ich nach Hause.\"",
        options: ["der Lehrerin", "die Lehrerin", "den Lehrerin", "dem Lehrerin"],
        answer: 0,
        wrongHints: [null, "Mit eist dat — vrouwelijk dat = der.", "Mit = dat, niet acc.", "Mit = dat; mannelijk dat = dem; maar Lehrerin is vrouwelijk."],
        uitlegPad: {
          stappen: [{ titel: "Mit + dat vrouw", tekst: "Mit der Lehrerin. Mit=dat; vrouw dat=der." }],
          woorden: [{ woord: "Lehrerin", uitleg: "vrouwelijke leraar" }],
          theorie: "Vrouwelijke datief: die → der.",
          voorbeelden: [{ type: "voorbeeld", tekst: "mit der Frau, mit der Lehrerin" }],
          basiskennis: [{ onderwerp: "-in = vrouw", uitleg: "Lehrer (m) → Lehrerin (v)" }],
          niveaus: { basis: "der Lehrerin.", simpeler: "Mit + der (vrouw dat).", nogSimpeler: "Mit + der (vrouw dat). → der." },
        },
      },
      {
        q: "\"Ich helfe ___ Kind (o).\"",
        options: ["dem Kind", "das Kind", "den Kind", "der Kind"],
        answer: 0,
        wrongHints: [null, "Helfen eist dat — onzijdig dat = dem, niet das.", "Mannelijk acc — niet juist.", "Vrouwelijk — Kind is onzijdig."],
        uitlegPad: {
          stappen: [{ titel: "Helfen + dat", tekst: "Ich helfe dem Kind. Helfen eist altijd dat." }],
          woorden: [{ woord: "datief-werkwoord", uitleg: "helfen, danken, gefallen, gehören" }],
          theorie: "Sommige werkwoorden eisen datief ook al lijkt het lijdend.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Ich helfe dem Mann/der Frau/dem Kind" }],
          basiskennis: [{ onderwerp: "uit hoofd", uitleg: "helfen-danken-gefallen-gehören" }],
          niveaus: { basis: "dem Kind.", simpeler: "Helfen + dat (dem).", nogSimpeler: "Helfen + dat (dem). → dem." },
        },
      },
      {
        q: "Hoe zeg je \"voor de moeder\" (für + Mutter)?",
        options: ["für die Mutter", "für der Mutter", "für dem Mutter", "für den Mutter"],
        answer: 0,
        wrongHints: [null, "Für = acc; vrouwelijk acc = die.", "Für = acc, niet dat.", "Vrouwelijk acc, niet mannelijk."],
        uitlegPad: {
          stappen: [{ titel: "Für + acc vrouw", tekst: "Für die Mutter. Für=acc; vrouw acc=die." }],
          woorden: [{ woord: "für", uitleg: "voor, eist acc" }],
          theorie: "Für = DFGOU acc-voorzetsel.",
          voorbeelden: [{ type: "voorbeeld", tekst: "für die Mutter, für den Vater, für das Kind" }],
          basiskennis: [{ onderwerp: "vrouw acc = die", uitleg: "geen verandering vs nom" }],
          niveaus: { basis: "für die Mutter.", simpeler: "Für + die (vrouw).", nogSimpeler: "Für + die (vrouw). → die." },
        },
      },
      { q: "Welk lidwoord (mannelijk) verandert van NOM naar ACC?", options: ["der → den","die → die","das → das","der → die"], answer: 0, wrongHints: [null,"Klopt — alleen mannelijk wisselt zichtbaar.","Vrouw blijft die in acc.","Onzijdig blijft das in acc.","Geen wissel naar vrouwelijk."] },
      { q: "Welk voorzetsel vraagt **altijd** datief?", options: ["mit","für","ohne","durch"], answer: 0, wrongHints: [null,"Klopt — mit + datief (mit dem/der/dem).","Für = accusatief.","Ohne = accusatief.","Durch = accusatief."] },
      { q: "_____ Buch ist interessant. (NOM, onzijdig)", options: ["Das","Der","Die","Den"], answer: 0, wrongHints: [null,"Niet — Buch is onzijdig.","Vrouwelijk.","Mannelijk acc.","Niet."] },
      { q: "Ich gebe _____ Mann ein Buch. (DAT, mannelijk)", options: ["dem","den","der","das"], answer: 0, wrongHints: [null,"Niet — den = ACC mannelijk.","Niet — der = NOM mannelijk.","Niet — onzijdig."] },
      { q: "Mein Vater fährt mit _____ Auto. (mit + DAT onzijdig)", options: ["dem","das","der","den"], answer: 0, wrongHints: [null,"Niet — das = NOM/ACC onzijdig.","Niet.","Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const naamvallenDuits = {
  id: "naamvallen-duits",
  title: "Lidwoorden en naamvallen",
  emoji: "🇩🇪",
  level: "klas1-3",
  subject: "duits",
  referentieNiveau: "A1/A2",
  sloThema: "Duits — geslachten & vier naamvallen",
  prerequisites: [
    { id: "werkwoordsvervoeging-duits", title: "Werkwoorden Duits", niveau: "duits-A1" },
  ],
  intro:
    "De drie geslachten (der/die/das), onbepaald lidwoord ein/eine, bezittelijke voornaamwoorden, en de vier naamvallen (NOM/ACC/DAT/GEN) — met voorzetselregels (für+acc, mit+dat) en wissels (in+acc bij beweging, in+dat bij plaats). Eerste pad Duits onderbouw.",
  triggerKeywords: [
    "der die das", "lidwoord duits",
    "naamval", "naamvallen", "kasus",
    "nominatief", "accusatief", "datief", "genitief",
    "ein eine ein", "kein keine",
    "mein dein sein", "bezittelijk duits",
    "voorzetsels duits", "für mit ohne durch nach",
    "duits", "deutsch grammatik",
  ],
  chapters,
  steps,
};

export default naamvallenDuits;
