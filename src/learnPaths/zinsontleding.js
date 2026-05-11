// Leerpad: Zinsontleding — Nederlands onderbouw (klas 1-2 vmbo/havo/vwo)
// 14 stappen in 5 hoofdstukken (A t/m E).
// Doel: leerling kan persoonsvorm + onderwerp + gezegde + lijdend voorwerp +
// meewerkend voorwerp + bepalingen aanwijzen in een willekeurige zin.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  goodSoft: "#69f0ae",
  warm: "#ffd54f",
  warmSoft: "#fff59d",
  alt: "#ff7043",
  altSoft: "#ffab91",
  blue: "#5b86b8",
  paars: "#a060ff",
  rood: "#e53935",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = [
  "🔍", "🙋", "🤝",                    // A. PV + onderwerp
  "💪", "🎬", "🎭",                    // B. Gezegde
  "📦", "🎁", "↔️",                     // C. Voorwerpen
  "🗺️", "🎨",                          // D. Bepalingen
  "🎯", "📝", "🏆",                    // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Persoonsvorm + onderwerp", emoji: "🙋", from: 0, to: 2 },
  { letter: "B", title: "Het gezegde", emoji: "💪", from: 3, to: 5 },
  { letter: "C", title: "Lijdend en meewerkend voorwerp", emoji: "📦", from: 6, to: 8 },
  { letter: "D", title: "Bepalingen", emoji: "🗺️", from: 9, to: 10 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 11, to: 13 },
];

const steps = [
  // ─── A. PV + onderwerp ────────────────────────────────
  {
    title: "Persoonsvorm vinden — drie trucs",
    explanation: "De **persoonsvorm** (pv) is het werkwoord dat **vervoegd** is naar persoon en tijd. Élke zin heeft een persoonsvorm — vinden ze gaat met drie trucs:\n\n**Truc 1 — Maak van de zin een vraag**\nHet werkwoord dat vooraan komt, is de persoonsvorm.\n• Sara **leest** een boek. → *\"Leest Sara een boek?\"* → **leest** = pv.\n• De hond **slaapt** lekker. → *\"Slaapt de hond lekker?\"* → **slaapt** = pv.\n\n**Truc 2 — Verander de tijd**\nHet werkwoord dat van vorm verandert is de persoonsvorm.\n• Hij **werkt** hard → Hij **werkte** hard. → **werkt/werkte** = pv.\n• De fiets **rijdt** snel → De fiets **reed** snel. → **rijdt/reed** = pv.\n\n**Truc 3 — Verander het getal** (1 → meer of andersom)\nHet werkwoord dat verandert is de persoonsvorm.\n• De jongen **rent**. → De jongens **rennen**. → **rent** = pv.\n• Wij **lezen**. → Ik **lees**. → **lezen/lees** = pv.\n\n**Belangrijk**: in een zin kan **meer dan één werkwoord** staan, maar **slechts één is de pv**. De andere werkwoorden zijn **werkwoordelijke restdelen**.\n• Hij **heeft** zijn boek **gelezen**. → heeft = pv (vervoegd naar 'hij'). gelezen = werkwoordelijk restdeel.\n• Wij **moeten** snel **leren**. → moeten = pv. leren = restdeel (geen vervoeging).\n\n**Geheugensteun**: pv = de **eerste** vervoegde werkwoordsvorm. De rest van het gezegde komt verderop in de zin.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">persoonsvorm = vervoegd werkwoord</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">3 trucs:</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">1. zin → vraag (pv naar voren)</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">2. tijd veranderen (pv verandert)</text>
<text x="35" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">3. getal veranderen (pv verandert)</text>
<line x1="30" y1="142" x2="270" y2="142" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="162" fill="${COLORS.text}" font-size="11" font-family="Arial">"Hij <tspan fill="${COLORS.good}" font-weight="bold">heeft</tspan> het boek <tspan fill="${COLORS.muted}">gelezen</tspan>."</text>
<text x="35" y="180" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">heeft = pv · gelezen = werkwoordelijk restdeel</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de persoonsvorm in: \"De koffie smaakt heerlijk vandaag.\"?*",
        options: ["smaakt", "koffie", "heerlijk", "vandaag"],
        answer: 0,
        wrongHints: [
          null,
          "Koffie is een ding, geen werkwoord.",
          "Heerlijk is een bijvoeglijk naamwoord (omschrijft iets), geen werkwoord.",
          "Vandaag is een tijdsaanduiding, geen werkwoord.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Pv = vervoegd werkwoord", tekst: "Smaakt is vervoegd naar 'koffie' (3e persoon enkv)." }],
          woorden: [{ woord: "persoonsvorm", uitleg: "vervoegd werkwoord, één per zin" }],
          theorie: "Test: maak vraag, verander tijd of getal.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Smaakt de koffie? → smaakt = pv" }],
          basiskennis: [{ onderwerp: "vraag-truc", uitleg: "ww vooraan in vraag = pv" }],
          niveaus: { basis: "smaakt.", simpeler: "Werkwoord = smaakt.", nogSimpeler: "smaakt." },
        },
      },
      {
        q: "*Welk woord is de persoonsvorm in: \"Wij hebben gisteren een film gekeken.\"?*",
        options: ["hebben", "gekeken", "wij", "film"],
        answer: 0,
        wrongHints: [
          null,
          "Gekeken is een werkwoord, maar niet vervoegd naar 'wij' — dat is een werkwoordelijk restdeel. Welk werkwoord is wel vervoegd?",
          "Wij is een persoonlijk voornaamwoord, geen werkwoord.",
          "Film is een zelfstandig naamwoord. Geen werkwoord.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Hebben = pv, gekeken = restdeel", tekst: "Hebben is vervoegd naar 'wij'. Gekeken is voltooid deelwoord." }],
          woorden: [{ woord: "werkwoordelijk restdeel", uitleg: "ww in zin dat geen pv is" }],
          theorie: "Eén pv per zin; rest = werkwoordelijke restdelen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Wij hebben gekeken: hebben = pv, gekeken = restdeel" }],
          basiskennis: [{ onderwerp: "verander getal", uitleg: "wij hebben → ik heb (hebben verandert = pv)" }],
          niveaus: { basis: "hebben.", simpeler: "Eerste vervoegde ww.", nogSimpeler: "hebben." },
        },
      },
    ],
  },
  {
    title: "Het onderwerp vinden",
    explanation: "Het **onderwerp** is degene (of datgene) dat de actie van de persoonsvorm uitvoert, of waar de pv iets over zegt.\n\n**Truc — vraag bij de persoonsvorm**:\n*\"Wie of wat + persoonsvorm?\"*\nHet antwoord is het onderwerp.\n\n**Voorbeelden**:\n• Sara **leest** een boek.\n  → Vraag: *\"Wie leest?\"* → Antwoord: **Sara** (= onderwerp).\n• De hond **rent** door de tuin.\n  → *\"Wie/wat rent?\"* → **De hond**.\n• Vandaag **regent** het.\n  → *\"Wat regent?\"* → **het** (= het 'lege' onderwerp, vaak bij weer).\n• Mijn broertje en ik **gaan** naar school.\n  → *\"Wie gaan?\"* → **Mijn broertje en ik**.\n\n**Belangrijk**: het onderwerp **hoort qua getal** bij de pv. Als het onderwerp meervoud is, is de pv ook meervoud.\n• De jongen rent (1 jongen + enkelv. pv) ✓\n• De jongens rennen (meervoud + meervoud) ✓\n• ❌ \"De jongens rent\" — fout!\n\nDit is meteen een **controle** of je de pv goed hebt: als het onderwerp 'wij' is, hoort er een meervoudsvorm te staan.\n\n**Onderwerp herkennen — bijzondere gevallen**:\n• Een hele zin kan onderwerp zijn: *\"Dat hij zo laat is, **verbaast** mij.\"* → onderwerp = \"Dat hij zo laat is\".\n• 'Het' als loos onderwerp: *\"Het regent.\"* — geen echt onderwerp, maar grammaticaal verplicht.\n• 'Er' kan ook: *\"Er **wonen** vier mensen in dat huis.\"* — onderwerp = \"vier mensen\".",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">onderwerp = wie/wat + pv</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.text}" font-size="12" font-family="Arial">"<tspan fill="${COLORS.blue}" font-weight="bold">Sara</tspan> <tspan fill="${COLORS.good}" font-weight="bold">leest</tspan> een boek."</text>
<text x="35" y="94" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ wie leest? Sara = onderwerp</text>
<line x1="30" y1="108" x2="270" y2="108" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="128" fill="${COLORS.text}" font-size="12" font-family="Arial">"<tspan fill="${COLORS.blue}" font-weight="bold">De hond</tspan> <tspan fill="${COLORS.good}" font-weight="bold">rent</tspan>."</text>
<text x="35" y="146" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ wie rent? De hond = onderwerp</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">controle: pv en onderwerp passen qua getal</text>
</svg>`,
    checks: [
      {
        q: "*Wat is het onderwerp in: \"Mijn broertje speelt op zijn telefoon.\"?*",
        options: ["Mijn broertje", "speelt", "telefoon", "op zijn telefoon"],
        answer: 0,
        wrongHints: [
          null,
          "'Speelt' is de persoonsvorm, niet het onderwerp.",
          "Telefoon is wat hij gebruikt, niet wie de actie uitvoert.",
          "'Op zijn telefoon' is een bepaling (waarop?). Niet wie de actie uitvoert.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Wie speelt?", tekst: "Vraag bij pv 'speelt' → wie speelt? → mijn broertje." }],
          woorden: [{ woord: "onderwerp", uitleg: "wie/wat doet de actie" }],
          theorie: "Vraag: wie/wat + pv? Antwoord = onderwerp.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Mijn broertje speelt = onderwerp + pv" }],
          basiskennis: [{ onderwerp: "getal", uitleg: "onderwerp en pv hebben zelfde getal" }],
          niveaus: { basis: "mijn broertje.", simpeler: "Wie speelt? mijn broertje.", nogSimpeler: "mijn broertje." },
        },
      },
      {
        q: "*Wat is het onderwerp in: \"Vandaag regent het de hele dag.\"?*",
        options: ["het", "vandaag", "regent", "de hele dag"],
        answer: 0,
        wrongHints: [
          null,
          "Vandaag is een tijdsaanduiding (bepaling), geen onderwerp.",
          "Regent is de persoonsvorm. Vraag: 'wat regent?' — antwoord = onderwerp.",
          "'De hele dag' is een tijdsbepaling, geen onderwerp.",
        ],
        uitlegPad: {
          stappen: [{ titel: "'Het' = loos onderwerp", tekst: "Bij weer: 'het regent' — 'het' is grammaticaal verplicht onderwerp." }],
          woorden: [{ woord: "loos onderwerp", uitleg: "verplicht maar betekenisloos 'het'" }],
          theorie: "Bij weer/tijd: 'het' = onderwerp.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Het regent. Het sneeuwt. Het wordt laat." }],
          basiskennis: [{ onderwerp: "wat regent?", uitleg: "antwoord = 'het'" }],
          niveaus: { basis: "het.", simpeler: "Wat regent? het.", nogSimpeler: "het." },
        },
      },
    ],
  },
  {
    title: "Pv + onderwerp koppelen — getal-controle",
    explanation: "Als je de **persoonsvorm** en het **onderwerp** allebei hebt gevonden, kun je controleren of ze **bij elkaar passen** qua getal (enkelvoud / meervoud).\n\n**Regel**: persoonsvorm en onderwerp moeten **hetzelfde getal** hebben.\n\n**Correct**:\n• De jongen **rent**. (1 + enkelv.) ✓\n• De jongens **rennen**. (meer + meervoud) ✓\n• Wij **lopen**. (meer + meervoud) ✓\n• Ik **loop**. (1 + enkelv.) ✓\n\n**Fout**:\n• ❌ De jongen rennen (verkeerd getal)\n• ❌ De jongens rent (verkeerd getal)\n• ❌ Wij loopt (verkeerd getal)\n\n**Wanneer is het ingewikkeld?**\n\n**1. Hoeveelheidsaanduidingen**\n• \"Een groep leerlingen **gaat** op excursie.\" — Onderwerp = 'een groep' (enkelvoud, ondanks meerdere leerlingen). Pv = enkelvoud.\n• \"Een aantal mensen **vinden** dat...\" — meestal meervoud (vinden), want \"aantal\" verwijst naar meerderen.\n\n**2. Twee enkelvoud-onderwerpen samen**\n• \"Mijn vader **en** mijn moeder **werken**.\" → meervoud (vader + moeder = 2).\n• Onderwerp = 'mijn vader en mijn moeder' (samen).\n\n**3. 'Of' in plaats van 'en'**\n• \"Mijn vader **of** mijn moeder **werkt**.\" → enkelvoud (slechts één van beide).\n\n**4. Hele zinnen als onderwerp**\n• \"Dat hij zo laat is, **verbaast** mij.\" → de zin telt als enkelvoud → pv enkelvoud.\n\n**Dit hoofdstuk is belangrijk omdat veel d/t-fouten ontstaan door verkeerde koppeling pv-onderwerp**. Eerst onderwerp goed bepalen, dan pas pv vervoegen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">pv + onderwerp = zelfde getal</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.good}" font-size="11" font-family="Arial">✓ De jongen <tspan font-weight="bold">rent</tspan>. (1 + enkelv.)</text>
<text x="35" y="94" fill="${COLORS.good}" font-size="11" font-family="Arial">✓ De jongens <tspan font-weight="bold">rennen</tspan>. (meer)</text>
<text x="35" y="112" fill="${COLORS.alt}" font-size="11" font-family="Arial">✗ De jongens rent. (mismatch)</text>
<line x1="30" y1="124" x2="270" y2="124" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="144" fill="${COLORS.text}" font-size="11" font-family="Arial">"Een groep leerlingen <tspan fill="${COLORS.good}" font-weight="bold">gaat</tspan>..."</text>
<text x="35" y="162" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ groep is enkelvoud (al staat er 'leerlingen')</text>
<text x="150" y="182" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">veel d/t-fouten ontstaan hier: verkeerde koppeling</text>
</svg>`,
    checks: [
      {
        q: "*Welke zin is grammaticaal correct?*",
        options: [
          "De groep kinderen wacht bij de bushalte.",
          "De groep kinderen wachten bij de bushalte.",
          "De groep kinderen wachtte zal bij de bushalte.",
          "De groep van de kinderen wachten bij de bushalte.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "'Groep' is enkelvoud (één groep), dus pv ook enkelvoud: 'wacht'.",
          "'Wachtte zal' is geen correcte werkwoordsvolgorde.",
          "Onderwerp blijft 'de groep' = enkelvoud, dus pv ook enkelvoud (wacht).",
        ],
        uitlegPad: {
          stappen: [{ titel: "'Groep' = enkelvoud", tekst: "Eén groep, dus pv enkelvoud: wacht (niet wachten)." }],
          woorden: [{ woord: "hoeveelheidsaanduiding", uitleg: "groep, aantal, deel, hoop" }],
          theorie: "Hoofdwoord (groep) bepaalt getal, niet 'kinderen'.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Een groep wacht. Een aantal kinderen wachten." }],
          basiskennis: [{ onderwerp: "d/t-bron", uitleg: "veel d/t-fouten ontstaan hier" }],
          niveaus: { basis: "wacht.", simpeler: "Groep = enkelvoud.", nogSimpeler: "wacht." },
        },
      },
    ],
  },

  // ─── B. Het gezegde ───────────────────────────────────
  {
    title: "Werkwoordelijk gezegde — alle werkwoorden samen",
    explanation: "Het **werkwoordelijk gezegde** is **alle werkwoorden** in de zin samen — de pv én alle andere werkwoorden.\n\n**Voorbeelden**:\n• Hij **leest** een boek. → werkwoordelijk gezegde = leest (alleen de pv)\n• Hij **heeft** een boek **gelezen**. → werkwoordelijk gezegde = heeft gelezen (pv + voltooid deelwoord)\n• Wij **zullen** morgen **gaan winkelen**. → werkwoordelijk gezegde = zullen gaan winkelen (pv + 2 hele werkwoorden)\n• Sara **had** dat boek nog niet **kunnen lezen**. → werkwoordelijk gezegde = had kunnen lezen\n\n**Truc**: streep alle werkwoorden in de zin aan. Samen vormen ze het werkwoordelijk gezegde.\n\n**Hulpwerkwoorden** die vaak in het werkwoordelijk gezegde zitten:\n• **Hebben/zijn** — voor voltooide tijden: \"heeft gelezen\", \"is gevallen\"\n• **Zullen** — voor toekomende tijd: \"zal komen\"\n• **Worden** — voor lijdende vorm: \"wordt gemaakt\"\n• **Kunnen, mogen, moeten, willen** — modale hulpwerkwoorden: \"kan zwemmen\", \"moet werken\"\n\n**Voorbeeld-zin met lang werkwoordelijk gezegde**:\n*\"Hij **zou** dat boek graag **hebben willen lezen**.\"* → werkwoordelijk gezegde = zou hebben willen lezen.\n\nVier werkwoorden samen — allemaal samen vormen ze één gezegde. Knap als je dat herkent.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">werkwoordelijk gezegde = alle ww samen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.text}" font-size="12" font-family="Arial">"Hij <tspan fill="${COLORS.good}" font-weight="bold">heeft</tspan> het boek <tspan fill="${COLORS.good}" font-weight="bold">gelezen</tspan>."</text>
<text x="35" y="94" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ gezegde: heeft gelezen</text>
<text x="35" y="118" fill="${COLORS.text}" font-size="12" font-family="Arial">"Wij <tspan fill="${COLORS.good}" font-weight="bold">zullen</tspan> morgen <tspan fill="${COLORS.good}" font-weight="bold">gaan winkelen</tspan>."</text>
<text x="35" y="136" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ gezegde: zullen gaan winkelen</text>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">streep alle werkwoorden — die vormen samen het gezegde</text>
</svg>`,
    checks: [
      {
        q: "*Wat is het werkwoordelijk gezegde in: \"Mijn zus zou eerder thuis kunnen komen.\"?*",
        options: [
          "zou kunnen komen",
          "zou",
          "kunnen komen",
          "thuis komen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "'Zou' is alleen de pv. Het werkwoordelijk gezegde bevat ALLE werkwoorden samen.",
          "Je mist 'zou' (de pv). Het hele werkwoordelijk gezegde = pv + alle andere werkwoorden.",
          "'Thuis' is een bepaling (waar?), geen werkwoord. Tel alleen de werkwoorden.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Alle werkwoorden samen", tekst: "Zou kunnen komen = 3 werkwoorden = werkwoordelijk gezegde." }],
          woorden: [{ woord: "werkwoordelijk gezegde", uitleg: "alle ww in zin" }],
          theorie: "Streep alle ww aan. Samen = werkwoordelijk gezegde.",
          voorbeelden: [{ type: "voorbeeld", tekst: "zou kunnen komen = pv + 2 restdelen" }],
          basiskennis: [{ onderwerp: "ook hulpww", uitleg: "zou, kunnen, hebben, moeten meetellen" }],
          niveaus: { basis: "zou kunnen komen.", simpeler: "Alle 3 werkwoorden.", nogSimpeler: "Alle ww." },
        },
      },
    ],
  },
  {
    title: "Naamwoordelijk gezegde — koppelwerkwoord + naamwoord",
    explanation: "Soms staat er **geen actie** in de zin, maar wordt het onderwerp **omschreven**. Dan is er sprake van een **naamwoordelijk gezegde**.\n\n**Vorm**: koppelwerkwoord (= zijn / worden / blijven / blijken / lijken / heten / schijnen) + een **naamwoordelijk deel** (= bijvoeglijk naamwoord, zelfstandig naamwoord, of voornaamwoord).\n\n**Voorbeelden**:\n• Hij **is** mijn beste vriend. → koppelww = is, naamw. deel = mijn beste vriend\n• De zon **wordt** rood. → koppelww = wordt, naamw. deel = rood\n• Het **blijft** koud vandaag. → koppelww = blijft, naamw. deel = koud\n• Mijn moeder **heet** Annemarie. → koppelww = heet, naamw. deel = Annemarie\n• Hij **lijkt** moe. → koppelww = lijkt, naamw. deel = moe\n\n**Kenmerk**: het naamwoordelijk deel zegt **iets over het onderwerp**. Het is geen object van actie, het is een **eigenschap** of **identiteit**.\n\n**Verschil met werkwoordelijk gezegde**:\n• Werkwoordelijk: er is een actie (rennen, werken, eten).\n  → \"De jongen **rent**.\" (actie)\n• Naamwoordelijk: er wordt iets over het onderwerp gezegd.\n  → \"De jongen **is** moe.\" (eigenschap)\n\n**Truc om koppelwerkwoord te herkennen** (= 'koppelt' onderwerp aan naamwoordelijk deel):\nDe lijst van koppelwerkwoorden = **zijn, worden, blijven, blijken, lijken, heten, schijnen, voorkomen** (memoriseren!).\n\n**Let op**: 'zijn' kan ook **hulpwerkwoord** zijn in een werkwoordelijk gezegde (= bij voltooide tijd):\n• \"Hij is gevallen.\" → werkwoordelijk (hulpww + voltooid deelwoord)\n• \"Hij is moe.\" → naamwoordelijk (koppelww + bijv. naamw.)\n\nVerschil: in werkwoordelijk gezegde staat er een tweede werkwoord, in naamwoordelijk een naamwoord/bijv.nw.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">naamwoordelijk gezegde</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">koppelwerkwoord + naamwoordelijk deel</text>
<text x="35" y="92" fill="${COLORS.muted}" font-size="10" font-family="Arial">koppelww: zijn, worden, blijven, blijken,</text>
<text x="35" y="108" fill="${COLORS.muted}" font-size="10" font-family="Arial">lijken, heten, schijnen, voorkomen</text>
<line x1="30" y1="120" x2="270" y2="120" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="140" fill="${COLORS.text}" font-size="11" font-family="Arial">"Hij <tspan fill="${COLORS.good}" font-weight="bold">is</tspan> <tspan fill="${COLORS.warm}" font-weight="bold">moe</tspan>." (naamwoordelijk)</text>
<text x="35" y="158" fill="${COLORS.text}" font-size="11" font-family="Arial">"Hij <tspan fill="${COLORS.good}" font-weight="bold">is</tspan> <tspan fill="${COLORS.muted}" font-weight="bold">gevallen</tspan>." (werkwoordelijk)</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">na koppelww: bijv. naamw. of zelfst. naamw. = naamw. gezegde</text>
</svg>`,
    checks: [
      {
        q: "*Welke zin heeft een NAAMWOORDELIJK gezegde?*",
        options: [
          "De zon wordt rood vandaag.",
          "De zon brandt fel.",
          "De zon schijnt door het raam.",
          "De zon zakt onder de horizon.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Brandt is een actie-werkwoord — werkwoordelijk gezegde.",
          "Schijnt = actie. Dat is werkwoordelijk gezegde.",
          "Zakt = actie. Werkwoordelijk gezegde.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Wordt + bnw = naamwoordelijk", tekst: "De zon wordt rood: wordt (koppelww) + rood (bnw) = naamwoordelijk." }],
          woorden: [{ woord: "koppelwerkwoord", uitleg: "zijn/worden/blijven/blijken/lijken/heten/schijnen" }],
          theorie: "Koppelww + naamwoordelijk deel = naamwoordelijk gezegde.",
          voorbeelden: [{ type: "voorbeeld", tekst: "wordt rood, is moe, blijft koud" }],
          basiskennis: [{ onderwerp: "geen actie", uitleg: "eigenschap, geen actie" }],
          niveaus: { basis: "Naamwoordelijk.", simpeler: "Wordt = koppelww.", nogSimpeler: "Naamwoordelijk." },
        },
      },
    ],
  },
  {
    title: "Werkwoordelijk vs naamwoordelijk — overzicht",
    explanation: "Een snelle samenvatting van de twee gezegde-soorten:\n\n| | Werkwoordelijk gezegde | Naamwoordelijk gezegde |\n|---|---|---|\n| **Wat?** | Alle werkwoorden samen | Koppelww + naamw. deel |\n| **Actie?** | Ja (rennen, werken, eten) | Nee (eigenschap of identiteit) |\n| **Voorbeeld** | \"Hij rent.\" | \"Hij is moe.\" |\n| **Pv-soort** | Hoofdwerkwoord of hulpww | Altijd koppelwerkwoord |\n\n**Examen-truc om te kiezen**:\n1. Vind de pv.\n2. Is de pv een **koppelwerkwoord** (zijn / worden / blijven / blijken / lijken / heten / schijnen)?\n   - **Ja** + er staat geen tweede werkwoord → naamwoordelijk gezegde.\n   - **Ja** + er staat wel een tweede werkwoord (zoals 'gevallen', 'gegaan') → werkwoordelijk gezegde (hulpww-functie van 'zijn').\n   - **Nee** → werkwoordelijk gezegde.\n\n**Voorbeelden voor elk type**:\n\n**Werkwoordelijk** (= actie):\n• \"De kat **vangt** een muis.\"\n• \"Wij **zijn** naar huis **gegaan**.\" (zijn als hulpww + voltooid deelwoord)\n• \"Hij **moest** snel **werken**.\"\n• \"Het kind **is** **gevallen**.\"\n\n**Naamwoordelijk** (= eigenschap):\n• \"Hij **is** mijn beste vriend.\"\n• \"De wind **wordt** sterker.\"\n• \"Het **blijft** een rare situatie.\"\n• \"Zij **lijkt** boos.\"\n\n**Tip**: het naamwoordelijk deel kun je vaak vervangen door een ander bijv. naamw. of zelfst. naamw. zonder dat de zinstructuur verandert: \"Hij is moe\" → \"Hij is groot\" → \"Hij is mijn vader\". Dat werkt niet bij actie-werkwoorden: \"Hij rent → Hij rent moe\" — gaat niet op dezelfde manier.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">werkwoordelijk vs naamwoordelijk</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<rect x="35" y="62" width="105" height="60" rx="8" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="87" y="82" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">werkwoordelijk</text>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">actie</text>
<text x="87" y="115" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">"Hij rent."</text>
<rect x="160" y="62" width="105" height="60" rx="8" fill="rgba(160,96,255,0.10)" stroke="${COLORS.paars}" stroke-width="2"/>
<text x="212" y="82" text-anchor="middle" fill="${COLORS.paars}" font-size="12" font-family="Arial" font-weight="bold">naamwoordelijk</text>
<text x="212" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">eigenschap</text>
<text x="212" y="115" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">"Hij is moe."</text>
<text x="35" y="148" fill="${COLORS.text}" font-size="11" font-family="Arial">truc: is pv koppelww (zijn/worden...)?</text>
<text x="35" y="166" fill="${COLORS.text}" font-size="11" font-family="Arial">+ naamwoord erna → naamwoordelijk</text>
<text x="35" y="184" fill="${COLORS.text}" font-size="11" font-family="Arial">+ tweede werkwoord erna → werkwoordelijk</text>
</svg>`,
    checks: [
      {
        q: "*Welke zin heeft een WERKWOORDELIJK gezegde (= actie of voltooide actie)?*",
        options: [
          "Wij zijn naar huis gegaan.",
          "Mijn vader is timmerman.",
          "De koffie wordt koud.",
          "Het lijkt te regenen.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Hier is 'is' een koppelwerkwoord en 'timmerman' het naamwoordelijke deel — naamwoordelijk gezegde.",
          "Wordt = koppelww, koud = bijv. naamw. → naamwoordelijk gezegde.",
          "Lijkt = koppelww, te regenen is hier het naamw. deel → naamwoordelijk.",
        ],
        uitlegPad: {
          stappen: [{ titel: "'Zijn' = hulpww in volt. tijd", tekst: "Wij zijn gegaan: zijn + gegaan (voltooid deelw) = werkwoordelijk gezegde." }],
          woorden: [{ woord: "hulpww-functie van zijn", uitleg: "bij voltooide actie" }],
          theorie: "Zijn = hulpww bij voltooid deelwoord → werkwoordelijk.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Hij is gevallen = werkwoordelijk (gevallen = volt.deelw)" }],
          basiskennis: [{ onderwerp: "vergelijk", uitleg: "Hij is moe (naamw.) ≠ Hij is gevallen (ww.)" }],
          niveaus: { basis: "Werkwoordelijk.", simpeler: "Voltooide actie.", nogSimpeler: "Werkwoordelijk." },
        },
      },
    ],
  },

  // ─── C. Lijdend en meewerkend voorwerp ────────────────
  {
    title: "Lijdend voorwerp — wie/wat ondergaat?",
    explanation: "Het **lijdend voorwerp** (lv) is degene of datgene op wie/wat de actie van de pv **gericht** is. Het 'ondergaat' de actie van het onderwerp.\n\n**Truc — vraag**:\n*\"Wie of wat + onderwerp + persoonsvorm?\"*\nHet antwoord is het lijdend voorwerp.\n\n**Voorbeelden**:\n• Sara leest **een boek**.\n  → Vraag: *\"Wat leest Sara?\"* → Antwoord: **een boek** = lv.\n• De hond bijt **de postbode**.\n  → *\"Wie bijt de hond?\"* → **de postbode** = lv.\n• Ik zie **mijn zus** lopen.\n  → *\"Wie zie ik?\"* → **mijn zus** = lv.\n\n**Let op**: niet elke zin heeft een lijdend voorwerp.\n• \"De hond **rent**.\" → geen lv (rennen kan niet 'iets ondergaan').\n• \"Hij **slaapt**.\" → geen lv.\n• Werkwoorden zonder lv heten **onovergankelijk**: rennen, slapen, vallen, lopen.\n• Werkwoorden mét lv heten **overgankelijk**: lezen (een boek), eten (een appel), zien (iemand), bijten (de postbode).\n\n**Hoe controleer je of het echt een lv is?**\n\n**Test**: maak van de zin een **lijdende vorm** (= passief).\n• Actief: \"Sara leest een boek.\" → Passief: \"Een boek wordt door Sara gelezen.\"\n• 'Een boek' is in de passieve zin onderwerp → bewijst dat het in de actieve zin het lv is.\n\n**Vergelijk**:\n• \"Hij wandelt elke ochtend door het park.\" → geen lv mogelijk (kun je niet zeggen 'het park wordt door hem gewandeld').\n• \"Hij ziet elke ochtend zijn buurman.\" → wel lv: 'zijn buurman' wordt door hem gezien.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">lijdend voorwerp = wat onderaat actie</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.text}" font-size="12" font-family="Arial">"<tspan fill="${COLORS.blue}" font-weight="bold">Sara</tspan> <tspan fill="${COLORS.good}" font-weight="bold">leest</tspan> <tspan fill="${COLORS.alt}" font-weight="bold">een boek</tspan>."</text>
<text x="35" y="94" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ wat leest Sara? een boek = lv</text>
<line x1="30" y1="108" x2="270" y2="108" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">truc: vraag "wie/wat + onderw + pv?"</text>
<text x="35" y="146" fill="${COLORS.text}" font-size="11" font-family="Arial">controle: zin in lijdende vorm zetten</text>
<text x="35" y="166" fill="${COLORS.muted}" font-size="10" font-family="Arial">→ "een boek wordt door Sara gelezen"</text>
<text x="150" y="184" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">niet elke zin heeft een lv (rennen/slapen niet)</text>
</svg>`,
    checks: [
      {
        q: "*Wat is het lijdend voorwerp in: \"Mijn vader bakt elke zondag pannenkoeken.\"?*",
        options: [
          "pannenkoeken",
          "mijn vader",
          "elke zondag",
          "bakt",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Mijn vader = onderwerp (wie bakt?), niet lv.",
          "Elke zondag = bepaling van tijd, geen lv.",
          "Bakt = persoonsvorm. Lv = wat wordt gebakken?",
        ],
        uitlegPad: {
          stappen: [{ titel: "Lv = wat ondergaat?", tekst: "Wat bakt mijn vader? pannenkoeken = lv." }],
          woorden: [{ woord: "lijdend voorwerp", uitleg: "object van de actie" }],
          theorie: "Vraag: wat + onderwerp + pv? = lv.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Sara leest een boek (lv = een boek)" }],
          basiskennis: [{ onderwerp: "test", uitleg: "passieve zin: 'pannenkoeken worden gebakken'" }],
          niveaus: { basis: "pannenkoeken.", simpeler: "Wat bakt hij? pannenkoeken.", nogSimpeler: "pannenkoeken." },
        },
      },
      {
        q: "*Welke zin heeft GEEN lijdend voorwerp?*",
        options: [
          "De jongen rent door het bos.",
          "Sara leest een boek.",
          "Mijn vader bakt pannenkoeken.",
          "De hond bijt de postbode.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Sara leest een boek → 'een boek' is het lv.",
          "Mijn vader bakt pannenkoeken → 'pannenkoeken' is het lv.",
          "De hond bijt de postbode → 'de postbode' is het lv.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Rennen = onovergankelijk", tekst: "Rennen heeft geen lv. 'De jongen rent door het bos' — geen wat-vraag." }],
          woorden: [{ woord: "onovergankelijk", uitleg: "werkwoord zonder lv" }],
          theorie: "Niet alle werkwoorden hebben lv: rennen/slapen/vallen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "rennen, slapen, vallen = geen lv" }],
          basiskennis: [{ onderwerp: "door het bos", uitleg: "= bep. van plaats, geen lv" }],
          niveaus: { basis: "Rent zin = geen lv.", simpeler: "Rennen = geen object.", nogSimpeler: "Geen lv." },
        },
      },
    ],
  },
  {
    title: "Meewerkend voorwerp — aan/voor wie?",
    explanation: "Het **meewerkend voorwerp** (mv) is degene **voor wie** of **aan wie** de actie wordt gedaan. Het 'werkt mee' op de achtergrond.\n\n**Truc — vraag**:\n*\"Aan wie / voor wie + onderwerp + pv + lv?\"*\n\n**Voorbeelden**:\n• Sara geeft **haar broertje** een cadeau.\n  → Vraag: *\"Aan wie geeft Sara een cadeau?\"* → **haar broertje** = mv.\n• Ik koop **mijn moeder** een bos bloemen.\n  → *\"Voor wie koop ik een bos bloemen?\"* → **mijn moeder** = mv.\n• De leerkracht legt **ons** de regels uit.\n  → *\"Aan wie legt zij de regels uit?\"* → **ons** = mv.\n\n**Kenmerken van het mv**:\n• Vaak een **persoon** (niet altijd, kan ook 'aan de regering' bv.).\n• Staat vaak vóór het lv in de zin (Nederlandse woordvolgorde).\n• Kan **vervangen worden** door 'aan / voor + persoon': \"Sara geeft een cadeau **aan haar broertje**\" — zelfde betekenis.\n\n**Niet elke zin heeft een mv**: alleen bij werkwoorden waar 'aan/voor iemand iets doen' bij past.\n• Werkwoorden met mv: geven, sturen, schenken, vertellen, uitleggen, kopen, schrijven, brengen, aanbieden\n• Werkwoorden zonder mv: rennen, slapen, vallen, eten, zien (zonder aan-construction)\n\n**Verschil met lijdend voorwerp**:\n• Lv = **wat wordt gegeven** / **wie wordt gezien** (object van de actie zelf)\n• Mv = **aan wie** wordt het gegeven (degene voor wie het is)\n\nIn de zin \"Ik geef **mijn zus** een cadeau\":\n• onderwerp = ik\n• pv = geef\n• lv = een cadeau (wat gegeven wordt)\n• mv = mijn zus (aan wie gegeven wordt)\n\n**Ezelsbruggetje**: het mv is **'aan wie / voor wie'**, het lv is **'wat / wie ondergaat'**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">meewerkend voorwerp = aan/voor wie</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="78" fill="${COLORS.text}" font-size="11" font-family="Arial">"Ik <tspan fill="${COLORS.good}" font-weight="bold">geef</tspan> <tspan fill="${COLORS.warm}" font-weight="bold">mijn zus</tspan> <tspan fill="${COLORS.alt}" font-weight="bold">een cadeau</tspan>."</text>
<text x="35" y="100" fill="${COLORS.muted}" font-size="10" font-family="Arial">→ aan wie geef ik een cadeau? mijn zus = mv</text>
<text x="35" y="118" fill="${COLORS.muted}" font-size="10" font-family="Arial">→ wat geef ik? een cadeau = lv</text>
<line x1="30" y1="132" x2="270" y2="132" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="152" fill="${COLORS.text}" font-size="11" font-family="Arial">truc: 'aan/voor + persoon' is mv-vorm</text>
<text x="35" y="170" fill="${COLORS.text}" font-size="11" font-family="Arial">"Ik geef een cadeau aan mijn zus."</text>
<text x="150" y="188" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">mv staat vaak vóór lv in NL</text>
</svg>`,
    checks: [
      {
        q: "*Wat is het meewerkend voorwerp in: \"Mijn opa schreef mij een brief.\"?*",
        options: [
          "mij",
          "een brief",
          "mijn opa",
          "schreef",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een brief = lv (wat werd er geschreven). Mv = aan wie werd het geschreven.",
          "Mijn opa = onderwerp (wie schreef?).",
          "Schreef = persoonsvorm.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Mv = aan/voor wie?", tekst: "Aan wie schreef opa? mij = mv." }],
          woorden: [{ woord: "meewerkend voorwerp", uitleg: "aan/voor wie de actie is" }],
          theorie: "Vraag: aan/voor wie + zin? Antwoord = mv.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Ik geef mijn zus een cadeau → mijn zus = mv" }],
          basiskennis: [{ onderwerp: "vorm", uitleg: "= 'aan/voor + persoon'" }],
          niveaus: { basis: "mij.", simpeler: "Aan wie? mij.", nogSimpeler: "mij." },
        },
      },
    ],
  },
  {
    title: "Lijdend vs meewerkend — verschil oefenen",
    explanation: "**Snelle herkennings-tabel**:\n\n| Voorwerp | Vraag | Voorbeeld |\n|---|---|---|\n| **Lijdend (lv)** | Wat / wie ondergaat? | Sara leest **een boek**. |\n| **Meewerkend (mv)** | Aan / voor wie? | Sara geeft haar zus **een cadeau**. |\n\n**Verschil van betekenis**:\n• **Lv** is het **object** van de handeling (= wat de handeling betreft).\n• **Mv** is **degene voor wie** de handeling wordt verricht.\n\n**Volgorde in een Nederlandse zin** (meestal):\n*Onderwerp — pv — mv — lv — bepalingen*\n\n• \"Mijn moeder (onderwerp) **bakt** (pv) ons (mv) elke week (bep) een taart (lv).\"\n• \"De juf (onderw) **vertelt** (pv) ons (mv) een verhaal (lv).\"\n• \"Mijn vader (onderw) **stuurde** (pv) mijn opa (mv) een ansichtkaart (lv).\"\n\n**Soms wisselt de volgorde** als het mv met 'aan' wordt geformuleerd:\n• \"Mijn moeder bakt een taart **voor ons**.\"\n• \"De juf vertelt een verhaal **aan ons**.\"\n→ De zinsdelen blijven dezelfde rol vervullen, maar de woordvolgorde verandert.\n\n**Examen-truc** (test of je het juiste voorwerp aanwijst):\n• Stel de vraag-truc op: 'wat?' = lv. 'aan/voor wie?' = mv.\n• Vervang het mv door 'aan/voor + de persoon' om te checken of het echt een mv is.\n• Je kunt geen lv hebben zonder pv. Geen mv zonder lv? Soms wel: \"Hij vertrouwt mij\" — mij = lv (wat ondergaat het vertrouwen).\n\n**Beruchte instinker**:\n• \"Mijn vader heeft mij geholpen.\" → 'mij' lijkt mv-achtig, maar is hier eigenlijk lv (het werkwoord 'helpen' werkt direct op een persoon).\n• Bij twijfel: doe de passieve test. \"Ik werd door mijn vader geholpen\" → 'ik' is onderwerp in passief = was lv in actief.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">lv ↔ mv — herken het verschil</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">lijdend voorwerp:</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="10" font-family="Arial">"wat?" of "wie ondergaat?"</text>
<text x="35" y="112" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">meewerkend voorwerp:</text>
<text x="35" y="128" fill="${COLORS.text}" font-size="10" font-family="Arial">"aan wie?" of "voor wie?"</text>
<line x1="30" y1="142" x2="270" y2="142" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="160" fill="${COLORS.text}" font-size="10" font-family="Arial">volgorde: onderw — pv — mv — lv — bep</text>
<text x="150" y="182" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">"De juf vertelt ons een verhaal."</text>
</svg>`,
    checks: [
      {
        q: "*In de zin \"Tom geeft zijn vriend een nieuw boek\" — wat is het lijdend voorwerp?*",
        options: [
          "een nieuw boek",
          "zijn vriend",
          "Tom",
          "geeft",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Zijn vriend = mv (aan wie). Lv = wat wordt gegeven.",
          "Tom = onderwerp (wie geeft?).",
          "Geeft = persoonsvorm.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Lv = wat?", tekst: "Wat geeft Tom? een nieuw boek = lv." }],
          woorden: [{ woord: "lv vs mv", uitleg: "lv = wat, mv = aan wie" }],
          theorie: "Lv = object van de actie. Mv = ontvanger.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Tom geeft zijn vriend (mv) een boek (lv)" }],
          basiskennis: [{ onderwerp: "volgorde NL", uitleg: "onderw — pv — mv — lv — bep" }],
          niveaus: { basis: "een nieuw boek.", simpeler: "Wat geeft hij? boek.", nogSimpeler: "boek." },
        },
      },
      {
        q: "*In dezelfde zin \"Tom geeft zijn vriend een nieuw boek\" — wat is het meewerkend voorwerp?*",
        options: [
          "zijn vriend",
          "een nieuw boek",
          "Tom",
          "geeft",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een nieuw boek = lv (wat). Mv = aan/voor wie.",
          "Tom = onderwerp.",
          "Geeft = pv.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Mv = aan wie?", tekst: "Aan wie geeft Tom? zijn vriend = mv." }],
          woorden: [{ woord: "mv", uitleg: "ontvanger van de actie" }],
          theorie: "Mv = aan/voor wie + onderwerp + pv + lv?",
          voorbeelden: [{ type: "voorbeeld", tekst: "Tom geeft zijn vriend een boek = mv + lv" }],
          basiskennis: [{ onderwerp: "= 'aan/voor X'", uitleg: "kan ook 'aan zijn vriend' worden" }],
          niveaus: { basis: "zijn vriend.", simpeler: "Aan wie? zijn vriend.", nogSimpeler: "zijn vriend." },
        },
      },
    ],
  },

  // ─── D. Bepalingen ────────────────────────────────────
  {
    title: "Bepalingen — waar, wanneer, hoe, waarom?",
    explanation: "**Bepalingen** zijn zinsdelen die extra informatie geven over **waar**, **wanneer**, **hoe**, of **waarom** iets gebeurt. Ze zijn niet noodzakelijk voor de zin maar maken 'm rijker.\n\n**Vier hoofdsoorten bepalingen**:\n\n**1. Bepaling van plaats** (waar?)\n• \"Hij zit **in de tuin**.\" → \"in de tuin\" = bep. van plaats\n• \"Wij wonen **in Amsterdam**.\"\n• \"De kat slaapt **op de bank**.\"\n\n**2. Bepaling van tijd** (wanneer?)\n• \"Ik kom **morgen**.\" → \"morgen\" = bep. van tijd\n• \"De vergadering begint **om half twee**.\"\n• \"In de zomer ga ik op vakantie.\"\n\n**3. Bepaling van wijze** (hoe?)\n• \"Hij rent **snel**.\" → \"snel\" = bep. van wijze\n• \"Ze zingt **prachtig**.\"\n• \"Ze schreef de brief **met een rode pen**.\"\n\n**4. Bepaling van reden** (waarom?)\n• \"Hij blijft thuis **omdat hij ziek is**.\" → \"omdat hij ziek is\" = bep. van reden\n• \"Ze gaat naar de winkel **vanwege een aanbieding**.\"\n• \"Ik leer Frans **om in Parijs te kunnen praten**.\"\n\n**Andere soorten** (komen minder op examen):\n• Bep. van mate (in welke mate? hoeveel?): \"Hij is **erg moe**.\"\n• Bep. van middel (waarmee?): \"Ze schrijft **met een potlood**.\"\n• Bep. van gezelschap (met wie?): \"Hij gaat **met zijn vader**.\"\n\n**Truc**: stel een **wat-vraag** om bepalingen te vinden:\n• Waar? → plaats\n• Wanneer? → tijd\n• Hoe? → wijze\n• Waarom? → reden\n\nElke bep. die je vindt is **iets extra's** boven op de basis: onderwerp + pv + lv + mv.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">bepalingen — extra informatie</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">plaats:</text>
<text x="105" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">waar? "in de tuin"</text>
<text x="35" y="92" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">tijd:</text>
<text x="105" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">wanneer? "morgen"</text>
<text x="35" y="110" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">wijze:</text>
<text x="105" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">hoe? "snel", "prachtig"</text>
<text x="35" y="128" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">reden:</text>
<text x="105" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">waarom? "omdat..."</text>
<line x1="30" y1="142" x2="270" y2="142" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="160" fill="${COLORS.text}" font-size="10" font-family="Arial">"Hij zit <tspan fill="${COLORS.good}" font-weight="bold">in de tuin</tspan>" → bep. plaats</text>
<text x="35" y="176" fill="${COLORS.text}" font-size="10" font-family="Arial">"Hij rent <tspan fill="${COLORS.good}" font-weight="bold">snel</tspan>" → bep. wijze</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de bepaling van TIJD in: \"Morgen ga ik met Tom naar het strand.\"?*",
        options: [
          "Morgen",
          "met Tom",
          "naar het strand",
          "ga",
        ],
        answer: 0,
        wrongHints: [
          null,
          "'Met Tom' = bepaling van gezelschap (met wie?).",
          "'Naar het strand' = bepaling van plaats (waarheen?).",
          "'Ga' = persoonsvorm. Vraag bij tijd: 'wanneer?' → antwoord = bep. van tijd.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Wanneer? = tijd", tekst: "Vraag 'wanneer?' → morgen = bep. van tijd." }],
          woorden: [{ woord: "bep. van tijd", uitleg: "wanneer? hoe lang?" }],
          theorie: "4 hoofd-bepalingen: plaats/tijd/wijze/reden.",
          voorbeelden: [{ type: "voorbeeld", tekst: "morgen, gisteren, om 14u = tijd" }],
          basiskennis: [{ onderwerp: "vraagwoord", uitleg: "tijd → wanneer?" }],
          niveaus: { basis: "morgen.", simpeler: "Wanneer? morgen.", nogSimpeler: "morgen." },
        },
      },
    ],
  },
  {
    title: "Bijwoord vs bijvoeglijk naamwoord",
    explanation: "Twee woordsoorten die op elkaar lijken maar verschillende functies hebben:\n\n**Bijvoeglijk naamwoord** (bnw)\n• Zegt iets over een **zelfstandig naamwoord**.\n• Staat meestal **vóór** het zelfst. naamw.\n• Voorbeelden: een **mooie** dag, een **snelle** auto, het **groene** gras.\n• Krijgt vaak een **-e** als het bij een zelfst. naamw. met een lidwoord (de/het) staat.\n\n**Bijwoord** (bw)\n• Zegt iets over een **werkwoord**, een **bijvoeglijk naamwoord**, of een ander **bijwoord**.\n• Geeft vaak antwoord op vragen als hoe?, wanneer?, waar?\n• Voorbeelden: hij rent **snel**, ze zingt **prachtig**, hij is **erg** boos, het ging **goed**.\n• Krijgt **geen -e**.\n\n**Verschil-voorbeelden**:\n• \"Hij rijdt een **snelle** auto.\" → snelle = bnw (bij 'auto')\n• \"Hij rijdt **snel**.\" → snel = bw (bij 'rijdt')\n\n• \"Het is een **mooie** dag.\" → mooie = bnw\n• \"Hij zingt **mooi**.\" → mooi = bw\n\n• \"Een **goed** boek.\" → goed = bnw (geen -e want 'een')\n• \"Hij doet **goed** zijn best.\" → goed = bw (bij 'doet')\n\n**Tip**: kijk naar het woord erna of ervoor:\n• Bij een zelfst. naamw. → meestal bnw\n• Bij een werkwoord of ander bnw → meestal bw\n\n**Examen-vraag**: \"Geef de woordsoort van het cursief gedrukte woord.\" — dan moet je dit verschil weten.\n\n**Beruchte instinker**: \n• \"Het was een echte feest.\" — fout (echt = bw, dus geen -e); moet zijn \"Het was een echt feest.\"\n• \"Echt waar?\" → echt = bw (versterkt 'waar').",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">bijvoeglijk naamw. ↔ bijwoord</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<rect x="35" y="62" width="105" height="56" rx="8" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="87" y="82" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">bnw</text>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">bij zelfst. naamw.</text>
<text x="87" y="114" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">een snelle auto</text>
<rect x="160" y="62" width="105" height="56" rx="8" fill="rgba(160,96,255,0.10)" stroke="${COLORS.paars}" stroke-width="2"/>
<text x="212" y="82" text-anchor="middle" fill="${COLORS.paars}" font-size="12" font-family="Arial" font-weight="bold">bw</text>
<text x="212" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">bij werkwoord</text>
<text x="212" y="114" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">hij rijdt snel</text>
<text x="35" y="144" fill="${COLORS.text}" font-size="11" font-family="Arial">truc: kijk naar wat erop volgt</text>
<text x="35" y="162" fill="${COLORS.text}" font-size="11" font-family="Arial">→ zelfst. naamw. = bnw (vaak -e)</text>
<text x="35" y="180" fill="${COLORS.text}" font-size="11" font-family="Arial">→ werkwoord/bnw = bw (geen -e)</text>
</svg>`,
    checks: [
      {
        q: "*In welke zin is 'snel' een BIJWOORD?*",
        options: [
          "Hij loopt snel naar huis.",
          "Hij heeft een snelle auto.",
          "Een snelle hardloper wint vaak.",
          "Wat een snelle reactie!",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Snelle staat bij 'auto' (zelfst. naamw.) — dat is een bnw.",
          "Snelle staat bij 'hardloper' (zelfst. naamw.) — bnw.",
          "Snelle staat bij 'reactie' (zelfst. naamw.) — bnw.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Bw bij werkwoord", tekst: "'Snel' bij 'loopt' (ww) = bijwoord." }],
          woorden: [{ woord: "bijwoord", uitleg: "zegt iets over ww/bnw/bw" }],
          theorie: "Bw bij werkwoord, bnw bij zelfst. naamw.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Hij rent snel (bw) vs een snelle auto (bnw)" }],
          basiskennis: [{ onderwerp: "-e of niet", uitleg: "bnw vaak -e, bw geen -e" }],
          niveaus: { basis: "Hij loopt snel.", simpeler: "Snel bij loopt = bw.", nogSimpeler: "Bijwoord." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Mixed — alle zinsdelen samen",
    explanation: "Vier vragen die alle hoofdstukken combineren.\n\n**Examen-tip**: ontleed een zin altijd in deze volgorde:\n1. **Pv** vinden (3 trucs: vraag maken, tijd veranderen, getal veranderen)\n2. **Onderwerp** vinden (wie/wat + pv?)\n3. **Gezegde** type (werkwoordelijk of naamwoordelijk?)\n4. **Lv** vinden (wat ondergaat?)\n5. **Mv** vinden (aan/voor wie?)\n6. **Bepalingen** vinden (waar/wanneer/hoe/waarom?)\n\nGa dan stap voor stap door de zin. Soms zijn niet alle elementen aanwezig (geen lv, geen mv, geen bep) — dat is OK.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">zinnen</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">ontleden</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">eindronde 🎯</text>
</svg>`,
    checks: [
      {
        q: "*Welk woord is het ONDERWERP in: \"Vandaag heeft mijn moeder voor ons een feest georganiseerd.\"?*",
        options: [
          "mijn moeder",
          "vandaag",
          "een feest",
          "ons",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vandaag = bepaling van tijd (wanneer?).",
          "Een feest = lv (wat werd er georganiseerd?).",
          "Ons = mv (voor wie werd het feest georganiseerd?).",
        ],
        uitlegPad: {
          stappen: [{ titel: "Wie georganiseerd?", tekst: "Wie heeft georganiseerd? mijn moeder = onderwerp." }],
          woorden: [{ woord: "onderwerp", uitleg: "wie/wat doet de actie" }],
          theorie: "Vraag bij pv → onderwerp.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Mijn moeder = onderwerp van 'heeft georganiseerd'" }],
          basiskennis: [{ onderwerp: "samengesteld pv", uitleg: "'heeft' = pv-deel, georganiseerd = restdeel" }],
          niveaus: { basis: "mijn moeder.", simpeler: "Wie? mijn moeder.", nogSimpeler: "mijn moeder." },
        },
      },
      {
        q: "*Welke zin heeft een NAAMWOORDELIJK gezegde?*",
        options: [
          "Mijn vader is timmerman.",
          "Mijn vader werkt als timmerman.",
          "Mijn vader heeft een nieuwe job.",
          "Mijn vader bouwt huizen.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Werkt = actie-werkwoord → werkwoordelijk gezegde.",
          "Heeft = werkwoord met betekenis (bezit), geen koppelww in deze context. Werkwoordelijk gezegde.",
          "Bouwt = actie → werkwoordelijk gezegde.",
        ],
        uitlegPad: {
          stappen: [{ titel: "'Is' + naamw. deel", tekst: "Mijn vader is timmerman: is (koppelww) + timmerman (zelfst.naamw.) = naamwoordelijk." }],
          woorden: [{ woord: "naamw. deel", uitleg: "wat over onderwerp wordt gezegd" }],
          theorie: "Koppelww + zelfst./bijv. naamw. = naamwoordelijk gezegde.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Hij is timmerman, zij is leraar" }],
          basiskennis: [{ onderwerp: "identiteit", uitleg: "zegt wat iemand IS" }],
          niveaus: { basis: "Naamwoordelijk.", simpeler: "Is + timmerman.", nogSimpeler: "Naamwoordelijk." },
        },
      },
      {
        q: "*Wat is de bepaling van WIJZE in: \"De jongen rende snel naar huis omdat hij honger had.\"?*",
        options: [
          "snel",
          "naar huis",
          "omdat hij honger had",
          "rende",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Naar huis = bepaling van plaats (waarheen?).",
          "Omdat hij honger had = bepaling van reden (waarom?).",
          "Rende = persoonsvorm. Wijze = HOE? — antwoord = bep. van wijze.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Hoe? = wijze", tekst: "Hoe rende hij? snel = bep. van wijze." }],
          woorden: [{ woord: "bep. van wijze", uitleg: "hoe? op welke manier?" }],
          theorie: "Vraag 'hoe?' → wijze.",
          voorbeelden: [{ type: "voorbeeld", tekst: "snel, prachtig, voorzichtig = wijze" }],
          basiskennis: [{ onderwerp: "vs reden", uitleg: "wijze ≠ reden (waarom)" }],
          niveaus: { basis: "snel.", simpeler: "Hoe? snel.", nogSimpeler: "snel." },
        },
      },
      {
        q: "*Wat is het lijdend voorwerp in: \"De juf gaf de leerlingen na de les hun eerste rapport.\"?*",
        options: [
          "hun eerste rapport",
          "de leerlingen",
          "de juf",
          "na de les",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De leerlingen = mv (aan wie werd iets gegeven?).",
          "De juf = onderwerp (wie gaf?).",
          "Na de les = bep. van tijd.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Wat werd gegeven?", tekst: "Wat gaf de juf? hun eerste rapport = lv." }],
          woorden: [{ woord: "lv bij geven", uitleg: "wat = lv, aan wie = mv" }],
          theorie: "Bij 'geven': altijd lv + vaak mv.",
          voorbeelden: [{ type: "voorbeeld", tekst: "De juf gaf hen (mv) een rapport (lv)" }],
          basiskennis: [{ onderwerp: "uit elkaar houden", uitleg: "wat ≠ aan wie" }],
          niveaus: { basis: "hun eerste rapport.", simpeler: "Wat? rapport.", nogSimpeler: "rapport." },
        },
      },
    ],
  },
  {
    title: "Examen-stijl — meervoudige zinnen",
    explanation: "Bij ingewikkelde zinnen kunnen er meerdere voorwerpen, bepalingen, of zelfs meerdere persoonsvormen voorkomen. Vooral bij **samengestelde zinnen** (twee of meer hoofdzinnen / hoofdzin + bijzin).\n\n**Voorbeeld samengestelde zin**:\n*\"Hij ging naar de winkel **omdat hij melk nodig had**.\"*\n• Hoofdzin: Hij ging naar de winkel\n• Bijzin: omdat hij melk nodig had\n• Twee persoonsvormen: \"ging\" (hoofdzin) + \"had\" (bijzin)\n• Twee onderwerpen: \"hij\" (hoofdzin) + \"hij\" (bijzin) — verwijst naar dezelfde persoon\n\n**Examen-tip bij ontleden**:\n• **Ontleed elke deelzin apart**.\n• Eerst hoofdzin, dan bijzin.\n• Per deelzin: pv → onderwerp → eventuele lv/mv/bep.\n\nLaten we wat oefenen met examen-style vragen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.good}" font-size="32" font-family="Arial" font-weight="bold">examen</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">stijl</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">laatste ronde 🚀</text>
</svg>`,
    checks: [
      {
        q: "*Hoeveel persoonsvormen staan er in: \"Toen ik thuiskwam, lag de hond al te slapen.\"?*",
        options: [
          "Twee (kwam + lag)",
          "Een (lag)",
          "Drie (kwam + lag + slapen)",
          "Vier",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij samengestelde zinnen heb je vaak meerdere persoonsvormen — één per deelzin. Tel beide deelzinnen.",
          "'Slapen' is geen persoonsvorm hier — het is een infinitief in een werkwoordelijk restdeel ('lag te slapen').",
          "Te veel. Tel alleen werkwoorden die echt vervoegd zijn naar persoon en tijd.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Twee deelzinnen, twee pv", tekst: "Toen ik thuiskwam (bijzin: kwam) + lag de hond (hoofdzin: lag) = 2 pv." }],
          woorden: [{ woord: "samengestelde zin", uitleg: "hoofdzin + bijzin" }],
          theorie: "Elke deelzin heeft eigen pv.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Bijzinnen met toen/omdat/als = eigen pv" }],
          basiskennis: [{ onderwerp: "te slapen", uitleg: "= infinitief, geen pv" }],
          niveaus: { basis: "Twee: kwam + lag.", simpeler: "Hoofd + bijzin.", nogSimpeler: "Twee pv." },
        },
      },
      {
        q: "*Wat is het werkwoordelijk gezegde in: \"De leraar moet morgen vroeg komen werken.\"?*",
        options: [
          "moet komen werken",
          "moet",
          "komen werken",
          "morgen vroeg komen werken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "'Moet' is alleen de pv — het werkwoordelijk gezegde bestaat uit ALLE werkwoorden samen.",
          "Je mist 'moet' (de pv).",
          "'Morgen vroeg' zijn bepalingen, geen werkwoorden. Tel alleen de werkwoorden.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Alle ww samen", tekst: "Moet komen werken = 3 werkwoorden = werkwoordelijk gezegde." }],
          woorden: [{ woord: "werkwoordelijk gezegde", uitleg: "alle ww samen" }],
          theorie: "Bepalingen (morgen, vroeg) zitten NIET in gezegde.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Pv (moet) + 2 restdelen = gezegde" }],
          basiskennis: [{ onderwerp: "tel ww", uitleg: "alleen werkwoorden" }],
          niveaus: { basis: "moet komen werken.", simpeler: "3 ww.", nogSimpeler: "Alle ww." },
        },
      },
      {
        q: "*Wat is de bepaling van REDEN in: \"We blijven binnen omdat het regent.\"?*",
        options: [
          "omdat het regent",
          "binnen",
          "we",
          "blijven",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Binnen = bep. van plaats (waar?), niet van reden.",
          "We = onderwerp.",
          "Blijven = persoonsvorm. Reden = WAAROM? → bijzin met 'omdat'.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Waarom? = reden", tekst: "Waarom blijven we binnen? omdat het regent = bep. van reden." }],
          woorden: [{ woord: "bep. van reden", uitleg: "waarom? bijzin met omdat" }],
          theorie: "Reden-vraag → bijzin met omdat/want/doordat.",
          voorbeelden: [{ type: "voorbeeld", tekst: "...omdat hij ziek is = reden" }],
          basiskennis: [{ onderwerp: "hele zin als bep", uitleg: "bijzin = één geheel" }],
          niveaus: { basis: "omdat het regent.", simpeler: "Waarom? omdat regent.", nogSimpeler: "omdat-zin." },
        },
      },
    ],
  },
  {
    title: "Eindopdracht — alle vaardigheden",
    explanation: "Laatste set van vier vragen. Combineert alles uit het hele leerpad: pv, onderwerp, gezegde-type, lv, mv, bepalingen, woordsoorten.\n\n**Klaar?** Dan kun je zinsontleding op onderbouw-niveau!\n\n**Volgende stap**: gebruik dit bij Nederlands-toetsen, schrijfopdrachten (helpt bij correcte zinnen), en bij grammatica-vragen op CITO-toetsen.\n\nVeel succes! 🏆",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(160,96,255,0.15)" stroke="${COLORS.paars}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.paars}" font-size="28" font-family="Arial" font-weight="bold">onder-</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.paars}" font-size="22" font-family="Arial" font-weight="bold">leden</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">je kunt het nu 🎓</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de PERSOONSVORM in: \"Mijn ouders zullen volgend jaar verhuizen naar Spanje.\"?*",
        options: [
          "zullen",
          "verhuizen",
          "ouders",
          "Spanje",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verhuizen is een werkwoord, maar niet vervoegd. 'Zullen' is wel vervoegd (van 'zullen' → 'zullen' meervoud).",
          "Ouders = onderwerp.",
          "Spanje = bep. van plaats.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Zullen = pv", tekst: "Verhuizen is niet vervoegd. Zullen wel: zullen (mv) past bij 'mijn ouders'." }],
          woorden: [{ woord: "hulpww zullen", uitleg: "voor toekomende tijd" }],
          theorie: "Pv is altijd het VERVOEGDE werkwoord (test: verander tijd).",
          voorbeelden: [{ type: "voorbeeld", tekst: "zullen → zouden (verandert = pv)" }],
          basiskennis: [{ onderwerp: "verhuizen", uitleg: "infinitief, niet vervoegd → restdeel" }],
          niveaus: { basis: "zullen.", simpeler: "Zullen = pv.", nogSimpeler: "zullen." },
        },
      },
      {
        q: "*Welke zin heeft GEEN lijdend voorwerp?*",
        options: [
          "De zon schijnt op het water.",
          "De jongen las een spannend boek.",
          "Wij eten elke dag pasta.",
          "Tom geeft Anna een cadeau.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "'Een spannend boek' is het lv. Welke zin heeft GEEN lv?",
          "'Pasta' is het lv. Welke zin heeft GEEN lv?",
          "'Een cadeau' is het lv. Welke zin heeft GEEN lv?",
        ],
        uitlegPad: {
          stappen: [{ titel: "Schijnen = geen lv", tekst: "De zon schijnt op het water — wat schijnt? niets. Op het water = bep. plaats." }],
          woorden: [{ woord: "onovergankelijk", uitleg: "schijnen heeft geen lv" }],
          theorie: "Werkwoorden zonder lv: schijnen, vallen, rennen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "De zon schijnt = geen lv" }],
          basiskennis: [{ onderwerp: "op het water", uitleg: "bepaling van plaats, geen lv" }],
          niveaus: { basis: "Zon schijnt = geen lv.", simpeler: "Geen object.", nogSimpeler: "Geen lv." },
        },
      },
      {
        q: "*In de zin \"Mijn moeder bakt morgen voor het feest een grote taart\" — wat is de bepaling van TIJD?*",
        options: [
          "morgen",
          "voor het feest",
          "een grote taart",
          "mijn moeder",
        ],
        answer: 0,
        wrongHints: [
          null,
          "'Voor het feest' kan een bep. van doel zijn, maar antwoord op 'wanneer?' is duidelijker.",
          "'Een grote taart' = lv (wat wordt gebakken?).",
          "'Mijn moeder' = onderwerp.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Wanneer bakt ze?", tekst: "Vraag 'wanneer?' → morgen = bep. van tijd." }],
          woorden: [{ woord: "tijd", uitleg: "wanneer? hoe lang?" }],
          theorie: "Morgen / gisteren / nu / altijd = tijd.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Morgen bakt ze... morgen = wanneer" }],
          basiskennis: [{ onderwerp: "vs doel", uitleg: "'voor het feest' = doel, niet tijd" }],
          niveaus: { basis: "morgen.", simpeler: "Wanneer? morgen.", nogSimpeler: "morgen." },
        },
      },
      {
        q: "*Welk woord is een BIJWOORD in: \"De atleet liep ongelooflijk snel naar de finish.\"?*",
        options: [
          "ongelooflijk",
          "atleet",
          "finish",
          "naar",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Atleet = zelfstandig naamwoord (zaak/persoon).",
          "Finish = zelfstandig naamwoord.",
          "Naar = voorzetsel. 'Ongelooflijk' versterkt 'snel' (een ander bijwoord) — typisch bijwoord-gedrag.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Bw versterkt ander bw", tekst: "'Ongelooflijk' bij 'snel' (ook bw) = bijwoord." }],
          woorden: [{ woord: "versterker", uitleg: "echt, erg, heel, ongelooflijk = bw" }],
          theorie: "Bw kan ander bw versterken.",
          voorbeelden: [{ type: "voorbeeld", tekst: "ongelooflijk snel, erg moe, heel mooi" }],
          basiskennis: [{ onderwerp: "geen -e", uitleg: "bw krijgt geen -e" }],
          niveaus: { basis: "ongelooflijk.", simpeler: "Bw bij bw.", nogSimpeler: "Bijwoord." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const zinsontleding = {
  id: "zinsontleding",
  title: "Zinsontleding",
  emoji: "🧩",
  level: "klas1-vmbo-vwo",
  subject: "taal",
  // SLO-niveau (G4c sprint-5): 2F basis. Onderwerp/lijdend voorwerp/persoonsvorm
  // = einde-vmbo basisterm taalbeschouwing.
  referentieNiveau: "2F",
  sloThema: "Taalbeschouwing — zinsontleding",
  intro:
    "Zinnen ontleden voor klas 1-2: persoonsvorm + onderwerp + gezegde (werkwoordelijk vs naamwoordelijk) + lijdend voorwerp + meewerkend voorwerp + bepalingen (plaats, tijd, wijze, reden) + verschil bijwoord/bijvoeglijk naamwoord. Met trucjes om elk zinsdeel snel te vinden.",
  triggerKeywords: [
    "zinsontleding", "ontleden", "zinsdeel",
    "persoonsvorm", "onderwerp", "gezegde",
    "werkwoordelijk gezegde", "naamwoordelijk gezegde",
    "koppelwerkwoord", "lijdend voorwerp", "meewerkend voorwerp",
    "bepaling", "bijwoord", "bijvoeglijk naamwoord",
  ],
  chapters,
  steps,
};

export default zinsontleding;
