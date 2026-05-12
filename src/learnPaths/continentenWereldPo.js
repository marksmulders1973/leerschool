// Leerpad: Continenten en wereldkennis — groep 6-8 PO.
// Cito-onderdeel wereldoriëntatie (aardrijkskunde). Referentieniveau 1F.
// 6 stappen met uitlegPad. Bouwt voort op topografieNederland.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  europa: "#42a5f5",
  azie: "#ffd54f",
  afrika: "#ff7043",
  amerika: "#9575cd",
  oceanie: "#26a69a",
  antarctica: "#80cbc4",
  oceaan: "#1565c0",
  highlight: "#ffd54f",
};

const stepEmojis = ["🌍", "🌊", "🏛️", "🕐", "🗽", "🏆"];

const chapters = [
  { letter: "A", title: "De 7 continenten", emoji: "🌍", from: 0, to: 0 },
  { letter: "B", title: "De oceanen", emoji: "🌊", from: 1, to: 1 },
  { letter: "C", title: "Landen op continent", emoji: "🏛️", from: 2, to: 2 },
  { letter: "D", title: "Tijdzones", emoji: "🕐", from: 3, to: 3 },
  { letter: "E", title: "Beroemde steden + wonderen", emoji: "🗽", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function wereldSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Wereldkaart — 7 continenten</text>
<rect x="20" y="40" width="280" height="130" fill="rgba(21,101,192,0.10)" stroke="${COLORS.oceaan}" stroke-width="1"/>
<!-- Noord-Amerika -->
<ellipse cx="80" cy="75" rx="35" ry="20" fill="${COLORS.amerika}" opacity="0.6"/>
<text x="80" y="78" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">N-Amerika</text>
<!-- Zuid-Amerika -->
<ellipse cx="100" cy="135" rx="22" ry="22" fill="${COLORS.amerika}" opacity="0.6"/>
<text x="100" y="138" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">Z-Amerika</text>
<!-- Europa -->
<ellipse cx="180" cy="65" rx="20" ry="12" fill="${COLORS.europa}" opacity="0.8"/>
<text x="180" y="69" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">Europa</text>
<!-- Afrika -->
<ellipse cx="190" cy="120" rx="22" ry="25" fill="${COLORS.afrika}" opacity="0.7"/>
<text x="190" y="124" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">Afrika</text>
<!-- Azië -->
<ellipse cx="240" cy="80" rx="40" ry="20" fill="${COLORS.azie}" opacity="0.7"/>
<text x="240" y="84" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">Azië</text>
<!-- Oceanië -->
<ellipse cx="265" cy="140" rx="20" ry="10" fill="${COLORS.oceanie}" opacity="0.7"/>
<text x="265" y="144" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">Oceanië</text>
<!-- Antarctica -->
<rect x="40" y="175" width="240" height="10" fill="${COLORS.antarctica}" opacity="0.6"/>
<text x="160" y="194" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">Antarctica (Zuidpool)</text>
</svg>`;
}

const steps = [
  // STAP 1: 7 continenten
  {
    title: "De 7 continenten",
    explanation:
      "De wereld is verdeeld in **7 continenten** *(grote stukken land)*.\n\n**De 7 continenten** *(uit je hoofd!)*:\n1. **Noord-Amerika** — Canada, VS, Mexico.\n2. **Zuid-Amerika** — Brazilië, Argentinië, Peru.\n3. **Europa** — Nederland, Frankrijk, Duitsland.\n4. **Afrika** — Egypte, Zuid-Afrika, Marokko.\n5. **Azië** — China, India, Japan.\n6. **Oceanië** — Australië, Nieuw-Zeeland.\n7. **Antarctica** — geen land, alleen ijs en pinguïns.\n\n**Grootste en kleinste**:\n• **Grootste continent**: Azië (44 miljoen km²).\n• **Kleinste continent**: Oceanië *(of Australië — geldt als één)*.\n• **Koudste**: Antarctica.\n• **Heetste**: Afrika (Sahara-woestijn).\n• **Meeste mensen**: Azië (~4,7 miljard mensen).\n\n**Wonderfeitje — Antarctica**:\n• Niemand woont er permanent.\n• Het is een echte ijswoestijn — temperatuur -50 °C tot -80 °C.\n• Enige 'inwoners': pinguïns, zeehonden, onderzoekers in stations.\n\n**Truc om de continenten te onthouden**:\n**N**ederland-noord, **N**ederland-zuid?\n• **N**oord-Amerika — **Z**uid-Amerika.\n• **E**uropa, **A**zië, **A**frika.\n• **O**ceanië, **A**ntarctica.\nKun je ook onthouden als: 'N, Z, E, A, A, O, A' van groot naar klein.",
    svg: wereldSvg(),
    checks: [
      {
        q: "Hoeveel **continenten** zijn er?",
        options: ["7", "5", "6", "8"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Soms wordt 5 gezegd, maar standaard is 7.", "Soms 6, maar Cito-standaard = 7.", "Niet 8."],
      },
      {
        q: "Op welk continent ligt **Nederland**?",
        options: ["Europa", "Azië", "Afrika", "Noord-Amerika"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Ten oosten van ons.", "Ten zuiden.", "Ten westen."],
      },
      {
        q: "Welk continent is **grootst**?",
        options: ["Azië", "Afrika", "Noord-Amerika", "Europa"],
        answer: 0,
        wrongHints: [null, "Klopt — Azië is grootst.", "Afrika is 2e.", "Noord-Amerika is 3e.", "Europa is een van de kleinste."],
      },
      {
        q: "Wat is er **wel** op Antarctica?",
        options: ["Pinguïns en onderzoekers", "Steden met inwoners", "Tropisch regenwoud", "Grote dorpen"],
        answer: 0,
        wrongHints: [null, "Klopt — geen permanente bewoners, alleen onderzoekers.", "Geen steden — te koud.", "Het is een ijswoestijn, geen regenwoud.", "Geen dorpen."],
      },
    ],
  },

  // STAP 2: Oceanen
  {
    title: "De 5 oceanen",
    explanation:
      "Naast 7 continenten heeft de wereld **5 oceanen** *(grote zeeën)*.\n\n**De 5 oceanen** *(uit je hoofd!)*:\n1. **Stille Oceaan** *(Pacific)* — grootst.\n2. **Atlantische Oceaan** — tussen Europa/Afrika en Amerika.\n3. **Indische Oceaan** — onder India.\n4. **Noordelijke IJszee** *(Arctische)* — bij de Noordpool.\n5. **Zuidelijke IJszee** *(Antarctische)* — bij de Zuidpool.\n\n**Grootste — Stille Oceaan**:\n• Beslaat ongeveer **een derde van de aarde**.\n• Tussen Azië/Oceanië en Amerika.\n• 'Stille' = leek rustig bij ontdekkers, niet altijd zo!\n\n**Atlantische Oceaan**:\n• Tussen Europa/Afrika (rechts) en Amerika (links).\n• Hier ligt Nederland aan *(via de Noordzee, die deel uitmaakt van de Atlantische Oceaan)*.\n\n**Indische Oceaan**:\n• Onder Azië, tussen Afrika en Australië.\n• Veel tropische eilanden zoals Madagaskar.\n\n**De 2 IJszeeën**:\n• **Noordelijke** — bij de Noordpool, ijs het hele jaar.\n• **Zuidelijke** — om Antarctica heen.\n\n**Cito-truc**:\nOnthoud op alfabet: **A**tlantisch, **I**ndisch, **N**oordelijke IJszee, **S**tille, **Z**uidelijke IJszee → AINSZ.\n\nOf onthoud: '5 oceanen, 2 bij de polen, 3 in het 'midden': Atlantisch, Indisch, Stille'.",
    checks: [
      {
        q: "Hoeveel **oceanen** zijn er?",
        options: ["5", "4", "6", "3"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig — vergeet niet de 2 polen.", "Te veel.", "Te weinig."],
      },
      {
        q: "Welke oceaan is **grootst**?",
        options: ["Stille Oceaan", "Atlantische Oceaan", "Indische Oceaan", "Noordelijke IJszee"],
        answer: 0,
        wrongHints: [null, "Klopt — ongeveer 1/3 van de aarde.", "Stille is groter.", "Indische is 3e.", "Veel kleiner."],
      },
      {
        q: "Welke oceaan ligt **tussen Nederland en Amerika**?",
        options: ["Atlantische Oceaan", "Stille Oceaan", "Indische Oceaan", "Zuidelijke IJszee"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Andere kant van de wereld.", "Onder Azië.", "Bij Antarctica."],
      },
      {
        q: "Welke 2 oceanen zijn bij de **polen**?",
        options: ["Noordelijke en Zuidelijke IJszee", "Stille en Atlantische", "Indische en Stille", "Atlantische en Indische"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geen polen — middenliggend.", "Geen polen.", "Geen polen."],
      },
    ],
  },

  // STAP 3: Landen op continent
  {
    title: "Beroemde landen op elk continent",
    explanation:
      "**Per continent een paar landen** om te kennen *(Cito stelt vaak: 'in welk continent ligt X?')*.\n\n**Europa**:\n• Nederland, België, Frankrijk, Duitsland, Spanje, Italië, Engeland (UK), Portugal, Polen, Griekenland, Zweden, Noorwegen, Denemarken, Finland.\n\n**Azië**:\n• China, India, Japan, Indonesië, Thailand, Vietnam, Turkije, Iran, Saoedi-Arabië, Israël, Filipijnen, Pakistan.\n\n**Afrika**:\n• Egypte, Marokko, Zuid-Afrika, Nigeria, Kenia, Ethiopië, Tanzania, Algerije.\n\n**Noord-Amerika**:\n• Verenigde Staten (VS), Canada, Mexico, Cuba.\n\n**Zuid-Amerika**:\n• Brazilië, Argentinië, Chili, Peru, Colombia, Venezuela.\n\n**Oceanië**:\n• Australië, Nieuw-Zeeland, Fiji, Papoea-Nieuw-Guinea.\n\n**Cito-vragen**:\n*'In welk continent ligt Brazilië?'* → Zuid-Amerika.\n*'In welk continent ligt China?'* → Azië.\n*'In welk continent ligt Egypte?'* → Afrika.\n\n**Trucs voor onthouden**:\n• **Europa** klein maar veel landen — Nederland, Frankrijk, Duitsland zijn buren.\n• **Azië** groot — China en India zijn de 2 grootste landen *(qua mensen)*.\n• **Afrika** — Egypte (piramiden) is bovenaan, Zuid-Afrika onderaan.\n• **Amerika's** — Noord/Zuid via Mexico.\n\n**Veel-voorkomende fout**:\nDenken dat **Turkije** en **Rusland** in Europa liggen. Beide liggen voor het grootste deel in Azië *(maar hebben een klein stuk in Europa)*. Voor Cito: meestal Azië.",
    checks: [
      {
        q: "In welk continent ligt **Brazilië**?",
        options: ["Zuid-Amerika", "Noord-Amerika", "Afrika", "Azië"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Onder Mexico.", "Andere kant van de wereld.", "Andere kant van de wereld."],
      },
      {
        q: "In welk continent ligt **Egypte**?",
        options: ["Afrika", "Azië", "Europa", "Oceanië"],
        answer: 0,
        wrongHints: [null, "Klopt — Egypte ligt boven Afrika, bij Sahara.", "Ten oosten van Afrika.", "Ten noorden.", "Veel verder."],
      },
      {
        q: "In welk continent ligt **Australië**?",
        options: ["Oceanië", "Azië", "Afrika", "Amerika"],
        answer: 0,
        wrongHints: [null, "Klopt — Australië IS Oceanië (of een continent op zich, beide goed).", "Ligt onder Azië maar is eigen continent.", "Andere kant.", "Andere kant."],
      },
      {
        q: "In welk continent ligt **China**?",
        options: ["Azië", "Europa", "Afrika", "Amerika"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te ver westelijk.", "Andere kant.", "Andere kant."],
        uitlegPad: {
          stappen: [
            { titel: "China = Azië", tekst: "China is een land in Oost-Azië. Het is het grootste land qua aantal mensen (samen met India)." },
          ],
          woorden: [{ woord: "Oost-Azië", uitleg: "Oost-deel van het continent Azië — China, Japan, Korea." }],
          theorie: "Belangrijke Aziatische landen: China, India, Japan, Indonesië, Thailand.",
          voorbeelden: [{ type: "stap", tekst: "China grenst aan Rusland (noord), India (zuid), Vietnam." }],
          basiskennis: [{ onderwerp: "Azië is groot", uitleg: "Azië bevat veel grote landen — China, India, Indonesië, Japan." }],
          niveaus: {
            basis: "Azië. A.",
            simpeler: "China is een land in Oost-Azië. Dus continent = Azië. = A.",
            nogSimpeler: "Azië = A.",
          },
        },
      },
    ],
  },

  // STAP 4: Tijdzones (basic intro)
  {
    title: "Tijdzones — waarom is het ergens nacht?",
    explanation:
      "De aarde **draait om z'n eigen as** *(in 24 uur)*. Daardoor is het ergens **dag** terwijl het ergens anders **nacht** is.\n\n**Daarom werken we met tijdzones**:\nElke zone is **1 uur verschoven** van de buur-zone.\n\n**Voorbeelden — als het 12:00 's middags is in Nederland** *(wintertijd, UTC+1)*:\n• **Engeland (Londen)**: 11:00 (1 uur eerder).\n• **Spanje (Madrid)**: 12:00 (zelfde tijdzone).\n• **Duitsland (Berlijn)**: 12:00.\n• **Griekenland (Athene)**: 13:00 (1 uur later).\n• **Turkije (Istanbul)**: 14:00.\n• **India (Mumbai)**: 16:30.\n• **China (Beijing)**: 19:00.\n• **Japan (Tokio)**: 20:00.\n• **VS-Oostkust (New York)**: 06:00 *('s ochtends)*.\n• **VS-Westkust (LA)**: 03:00 *(midden in de nacht)*.\n• **Australië (Sydney)**: 21:00 *('s avonds)*.\n\n**Eenvoudige regel**:\n• Ten **oosten** van Nederland → **uur later** *(uurwerk vooruit)*.\n• Ten **westen** van Nederland → **uur eerder** *(uurwerk achteruit)*.\n\n**Cito-vragen** over tijdzones:\n*'Het is 14:00 in Nederland. Hoe laat is het in Beijing *(7 uur later)*?'*\n• 14:00 + 7 uur = **21:00**.\n\n*'Het is 12:00 in Nederland. Hoe laat is het in New York *(6 uur eerder)*?'*\n• 12:00 − 6 uur = **06:00**.\n\n**Waarom tijdzones?**\nOm te zorgen dat 12:00 's middags overal ongeveer **midden op de dag** is *(zon hoogste punt)*.\n\n**Datumlijn**:\nIn de Stille Oceaan loopt de **datumlijn**. Aan de ene kant is het al de volgende dag, aan de andere kant nog de vorige. Vliegers van Tokio naar LA 'reizen terug in tijd'.",
    checks: [
      {
        q: "Hoeveel uur draait de aarde om z'n eigen as?",
        options: ["24 uur (een dag)", "12 uur", "60 uur", "365 uur"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig — dat zou een halve dag zijn.", "Veel te lang.", "Dat zou een jaar zijn."],
      },
      {
        q: "Het is **12:00** in Nederland. Wanneer is het 's nachts in **Tokio (8 uur later)**? *(Tokio-tijd)*",
        options: ["20:00", "04:00", "24:00", "00:00"],
        answer: 0,
        wrongHints: [null, "Klopt — 12 + 8 = 20:00.", "Te vroeg — verkeerde richting.", "24:00 ≠ 20:00.", "Te ver."],
      },
      {
        q: "Het is **12:00** in Nederland. Hoe laat in **New York (6 uur eerder)**?",
        options: ["06:00", "18:00", "12:00", "20:00"],
        answer: 0,
        wrongHints: [null, "Klopt — 12 − 6 = 06:00.", "Verkeerde richting.", "Niet hetzelfde — andere tijdzone.", "Verkeerde berekening."],
      },
      {
        q: "Ten **oosten** van Nederland is het uurwerk ... ?",
        options: ["Later (vooruit)", "Eerder (achteruit)", "Hetzelfde", "Onbekend"],
        answer: 0,
        wrongHints: [null, "Klopt — oost = vooruit in tijd.", "Andersom.", "Niet hetzelfde — buurland al 1 uur anders.", "Wel bekend."],
      },
    ],
  },

  // STAP 5: Beroemde steden + wonderen
  {
    title: "Beroemde steden en wonderen",
    explanation:
      "Cito vraagt vaak naar **beroemde plaatsen**.\n\n**Europa**:\n• **Parijs** — hoofdstad Frankrijk, Eiffeltoren.\n• **Londen** — hoofdstad Engeland, Big Ben, Buckingham Palace.\n• **Rome** — hoofdstad Italië, Colosseum, Vaticaan.\n• **Madrid** — hoofdstad Spanje.\n• **Berlijn** — hoofdstad Duitsland.\n• **Amsterdam** — hoofdstad Nederland.\n• **Brussel** — hoofdstad België, EU-hoofdkwartier.\n\n**Buiten Europa**:\n• **New York** — Vrijheidsbeeld, Empire State.\n• **Washington D.C.** — hoofdstad VS.\n• **Tokio** — hoofdstad Japan.\n• **Beijing** — hoofdstad China, Verboden Stad.\n• **Mumbai** + **New Delhi** — India.\n• **Sydney** — Australië, Opera House.\n• **Rio de Janeiro** — Brazilië, Christusbeeld.\n• **Caïro** — Egypte, dichtbij piramiden van Gizeh.\n\n**De 7 Wereldwonderen (oudheid)**:\n1. Piramiden van Gizeh *(Egypte, enige nog bestaand)*.\n2. Hangende tuinen van Babylon *(verdwenen)*.\n3. Beeld van Zeus in Olympia *(Griekenland, verdwenen)*.\n4. Tempel van Artemis te Efeze *(Turkije, verdwenen)*.\n5. Mausoleum van Halicarnassus *(Turkije, verdwenen)*.\n6. Kolossus van Rhodos *(Griekenland, verdwenen)*.\n7. Vuurtoren van Alexandrië *(Egypte, verdwenen)*.\n\n**Moderne wereldwonderen** *(nieuw, 2007)*:\n• Chinese Muur *(China)*.\n• Petra *(Jordanië)*.\n• Christusbeeld *(Brazilië)*.\n• Machu Picchu *(Peru)*.\n• Chichén Itzá *(Mexico)*.\n• Colosseum *(Italië)*.\n• Taj Mahal *(India)*.\n\n**Cito-truc — koppelingen**:\n• Eiffeltoren → Parijs → Frankrijk → Europa.\n• Big Ben → Londen → Engeland → Europa.\n• Piramiden → Gizeh → Egypte → Afrika.\n• Christusbeeld → Rio → Brazilië → Zuid-Amerika.",
    checks: [
      {
        q: "In welke stad staat de **Eiffeltoren**?",
        options: ["Parijs", "Londen", "Rome", "Amsterdam"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Big Ben staat daar.", "Colosseum staat daar.", "Geen Eiffeltoren."],
      },
      {
        q: "In welk land staan de **piramiden van Gizeh**?",
        options: ["Egypte", "Marokko", "Mexico", "Italië"],
        answer: 0,
        wrongHints: [null, "Klopt — bij Caïro in Egypte.", "Niet Marokko.", "Daar zijn Maya-piramiden, maar niet die van Gizeh.", "Niet Italië."],
      },
      {
        q: "Wat is de **hoofdstad van Duitsland**?",
        options: ["Berlijn", "München", "Hamburg", "Wenen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Grote stad maar geen hoofdstad.", "Grote stad maar geen hoofdstad.", "Wenen is hoofdstad van Oostenrijk."],
      },
      {
        q: "Bij welke stad staat het **Christusbeeld**?",
        options: ["Rio de Janeiro", "São Paulo", "Buenos Aires", "Lima"],
        answer: 0,
        wrongHints: [null, "Klopt — op de Corcovado-berg.", "Andere Braziliaanse stad.", "Hoofdstad Argentinië.", "Hoofdstad Peru."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — wereld-mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: continenten, oceanen, landen, tijdzones, steden.\n\nVeel succes!",
    checks: [
      {
        q: "Op welk continent ligt **Italië**?",
        options: ["Europa", "Azië", "Afrika", "Noord-Amerika"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te oostelijk.", "Italië ligt boven Afrika.", "Andere kant van de wereld."],
      },
      {
        q: "Welk continent heeft de **meeste mensen**?",
        options: ["Azië", "Afrika", "Europa", "Noord-Amerika"],
        answer: 0,
        wrongHints: [null, "Klopt — ~4,7 miljard mensen.", "Tweede, niet eerste.", "Veel minder mensen.", "Veel minder."],
      },
      {
        q: "Welke oceaan is **kleiner**: Atlantisch of Stille?",
        options: ["Atlantisch", "Stille", "Even groot", "Niet uit te leggen"],
        answer: 0,
        wrongHints: [null, "Klopt — Stille is grootst.", "Stille is groter.", "Niet hetzelfde.", "Wel uit te leggen — vergelijk grootte."],
      },
      {
        q: "Het is **15:00** in Nederland. Beijing is **7 uur later**. Hoe laat?",
        options: ["22:00", "08:00", "10:00", "07:00"],
        answer: 0,
        wrongHints: [null, "Klopt — 15+7 = 22:00.", "Verkeerde richting.", "Verkeerd.", "Verkeerd."],
      },
      {
        q: "**Australië** is een continent én een ... ?",
        options: ["Land", "Stad", "Eiland", "Berg"],
        answer: 0,
        wrongHints: [null, "Klopt — Australië is zowel continent als land.", "Niet alleen stad.", "Wel een groot eiland, maar 'land' is preciezer.", "Geen berg."],
      },
      {
        q: "**Antarctica** is bekend om ... ?",
        options: ["Ijs en pinguïns", "Tropisch regenwoud", "Grote steden", "Lange rivieren"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te koud voor regenwoud.", "Geen steden — onbewoond.", "Geen lange rivieren — ijs."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const continentenWereldPo = {
  id: "continenten-wereld-po",
  title: "Continenten en wereldkennis (groep 6-8)",
  emoji: "🌍",
  level: "groep6-8",
  subject: "aardrijkskunde",
  referentieNiveau: "1F",
  sloThema: "Aardrijkskunde — wereldoriëntatie",
  prerequisites: [
    { id: "topografie-nederland", title: "Topografie Nederland", niveau: "po-1F" },
    { id: "kaartlezen-po", title: "Kaartlezen", niveau: "po-1F" },
  ],
  intro:
    "De wereld voor groep 6-8 — 7 continenten, 5 oceanen, beroemde landen + steden, tijdzones, wereldwonderen. ~15 min.",
  triggerKeywords: [
    "continent", "continenten", "oceaan", "oceanen",
    "wereldkaart", "tijdzone", "wereldwonder",
    "Europa", "Azië", "Afrika", "Amerika", "Oceanië", "Antarctica",
  ],
  chapters,
  steps,
};

export default continentenWereldPo;
