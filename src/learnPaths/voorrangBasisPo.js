// Leerpad: Voorrang in plaatjes — groep 5-8.
// Bouwt op het bestaande VVN-Verkeersexamen-pad. Focus: meest voorkomende
// alledaagse voorrang-situaties — geen randgevallen.
// Elke stap = 1 plaatje (SVG) + 1 vraag. Visueel-eerst-didactiek.
//
// Mark wens 2026-05-19: simpele + meest voorkomende, met plaatje.
// USP: Squla stopt bij groep 5, Junior Einstein is betaald — Leerkwartier
// biedt dit gratis met uitlegPad-3-niveau in dezelfde app als Cito-stof.

// ── SVG-helpers ─────────────────────────────────────────────
// Compacte top-down kruispunt-tekeningen, mobiel-vriendelijk.
// Kleur-palet matcht design-system (sobere paper-look).

const KLEUR = {
  weg: "#3a3f47",
  wegLijn: "#fff",
  trottoir: "#5a6068",
  fietser: "#42a5f5",
  auto: "#ef5350",
  voetganger: "#ffd54f",
  stop: "#c62828",
  bordRand: "#fff",
  haai: "#ffffff",
  pijl: "#69f0ae",
  bg: "#1a1d22",
};

// Top-down gelijkwaardig kruispunt. Twee deelnemers met pijl-richting.
function kruispuntSvg({ vanLinks, vanRechts, vanBoven, vanOnder, label }) {
  const W = 280, H = 200;
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label || "kruispunt"}">
    <rect width="${W}" height="${H}" fill="${KLEUR.bg}"/>
    <!-- horizontale weg -->
    <rect x="0" y="80" width="${W}" height="40" fill="${KLEUR.weg}"/>
    <!-- verticale weg -->
    <rect x="120" y="0" width="40" height="${H}" fill="${KLEUR.weg}"/>
    <!-- stippellijn horizontaal -->
    <line x1="0" y1="100" x2="120" y2="100" stroke="${KLEUR.wegLijn}" stroke-width="2" stroke-dasharray="8,6"/>
    <line x1="160" y1="100" x2="${W}" y2="100" stroke="${KLEUR.wegLijn}" stroke-width="2" stroke-dasharray="8,6"/>
    <!-- stippellijn verticaal -->
    <line x1="140" y1="0" x2="140" y2="80" stroke="${KLEUR.wegLijn}" stroke-width="2" stroke-dasharray="8,6"/>
    <line x1="140" y1="120" x2="140" y2="${H}" stroke="${KLEUR.wegLijn}" stroke-width="2" stroke-dasharray="8,6"/>
    ${vanLinks ? `
      <rect x="10" y="92" width="22" height="16" fill="${vanLinks.kleur}" rx="2"/>
      <polygon points="40,100 50,95 50,105" fill="${KLEUR.pijl}"/>
      <text x="22" y="78" fill="#fff" font-size="10" text-anchor="middle" font-family="sans-serif">${vanLinks.label}</text>
    ` : ""}
    ${vanRechts ? `
      <rect x="${W - 32}" y="92" width="22" height="16" fill="${vanRechts.kleur}" rx="2"/>
      <polygon points="${W - 40},100 ${W - 50},95 ${W - 50},105" fill="${KLEUR.pijl}"/>
      <text x="${W - 22}" y="78" fill="#fff" font-size="10" text-anchor="middle" font-family="sans-serif">${vanRechts.label}</text>
    ` : ""}
    ${vanBoven ? `
      <rect x="132" y="10" width="16" height="22" fill="${vanBoven.kleur}" rx="2"/>
      <polygon points="140,40 135,50 145,50" fill="${KLEUR.pijl}"/>
      <text x="165" y="22" fill="#fff" font-size="10" font-family="sans-serif">${vanBoven.label}</text>
    ` : ""}
    ${vanOnder ? `
      <rect x="132" y="${H - 32}" width="16" height="22" fill="${vanOnder.kleur}" rx="2"/>
      <polygon points="140,${H - 40} 135,${H - 50} 145,${H - 50}" fill="${KLEUR.pijl}"/>
      <text x="165" y="${H - 18}" fill="#fff" font-size="10" font-family="sans-serif">${vanOnder.label}</text>
    ` : ""}
  </svg>`;
}

// Kruispunt met haaientanden voor jou (rij witte driehoekjes).
function haaientandenSvg() {
  const W = 280, H = 200;
  // jij komt van onder, andere weg = voorrangsweg horizontaal
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="kruispunt met haaientanden">
    <rect width="${W}" height="${H}" fill="${KLEUR.bg}"/>
    <rect x="0" y="80" width="${W}" height="40" fill="${KLEUR.weg}"/>
    <rect x="120" y="0" width="40" height="${H}" fill="${KLEUR.weg}"/>
    <line x1="0" y1="100" x2="120" y2="100" stroke="${KLEUR.wegLijn}" stroke-width="2" stroke-dasharray="8,6"/>
    <line x1="160" y1="100" x2="${W}" y2="100" stroke="${KLEUR.wegLijn}" stroke-width="2" stroke-dasharray="8,6"/>
    <!-- haaientanden voor jou (komend van onder) -->
    <polygon points="125,130 132,118 139,130" fill="${KLEUR.haai}"/>
    <polygon points="141,130 148,118 155,130" fill="${KLEUR.haai}"/>
    <!-- jij = fiets (blauw) komt van onder -->
    <rect x="132" y="155" width="16" height="22" fill="${KLEUR.fietser}" rx="2"/>
    <polygon points="140,140 135,150 145,150" fill="${KLEUR.pijl}"/>
    <text x="165" y="170" fill="#fff" font-size="10" font-family="sans-serif">JIJ (fiets)</text>
    <!-- auto van links -->
    <rect x="20" y="92" width="22" height="16" fill="${KLEUR.auto}" rx="2"/>
    <polygon points="50,100 60,95 60,105" fill="${KLEUR.pijl}"/>
    <text x="30" y="78" fill="#fff" font-size="10" text-anchor="middle" font-family="sans-serif">auto</text>
    <!-- label haaientanden -->
    <text x="200" y="125" fill="${KLEUR.haai}" font-size="9" font-family="sans-serif">← haaientanden</text>
  </svg>`;
}

// Zebrapad met voetganger
function zebrapadSvg() {
  const W = 280, H = 200;
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="zebrapad met overstekende voetganger">
    <rect width="${W}" height="${H}" fill="${KLEUR.bg}"/>
    <rect x="0" y="60" width="${W}" height="80" fill="${KLEUR.weg}"/>
    <!-- zebra-strepen -->
    ${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${110 + i * 12}" y="60" width="8" height="80" fill="${KLEUR.wegLijn}"/>`).join("")}
    <!-- voetganger (geel rondje) midden op zebra -->
    <circle cx="140" cy="100" r="10" fill="${KLEUR.voetganger}"/>
    <text x="140" y="103" fill="#000" font-size="11" text-anchor="middle" font-weight="700" font-family="sans-serif">🚶</text>
    <text x="140" y="40" fill="${KLEUR.voetganger}" font-size="11" text-anchor="middle" font-family="sans-serif">voetganger steekt over</text>
    <!-- jij = fiets komt van links -->
    <rect x="20" y="92" width="22" height="16" fill="${KLEUR.fietser}" rx="2"/>
    <polygon points="50,100 60,95 60,105" fill="${KLEUR.pijl}"/>
    <text x="30" y="78" fill="#fff" font-size="10" font-family="sans-serif">JIJ (fiets)</text>
  </svg>`;
}

// Stopbord 8-hoek
function stopBordSvg() {
  const W = 280, H = 200;
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="stopbord op kruispunt">
    <rect width="${W}" height="${H}" fill="${KLEUR.bg}"/>
    <rect x="0" y="80" width="${W}" height="40" fill="${KLEUR.weg}"/>
    <rect x="120" y="0" width="40" height="${H}" fill="${KLEUR.weg}"/>
    <!-- stopbord aan rechtskant kruispunt (jij komt van onder) -->
    <polygon points="190,135 220,135 232,150 232,170 220,185 190,185 178,170 178,150"
             fill="${KLEUR.stop}" stroke="${KLEUR.bordRand}" stroke-width="3"/>
    <text x="205" y="166" fill="#fff" font-size="14" font-weight="700" text-anchor="middle" font-family="sans-serif">STOP</text>
    <!-- jij komt van onder -->
    <rect x="132" y="155" width="16" height="22" fill="${KLEUR.fietser}" rx="2"/>
    <polygon points="140,140 135,150 145,150" fill="${KLEUR.pijl}"/>
    <text x="100" y="170" fill="#fff" font-size="10" font-family="sans-serif" text-anchor="end">JIJ</text>
  </svg>`;
}

// Verkeerslicht (3 lichten, rood actief)
function verkeerslichtSvg() {
  const W = 280, H = 200;
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="rood verkeerslicht">
    <rect width="${W}" height="${H}" fill="${KLEUR.bg}"/>
    <!-- paal -->
    <rect x="135" y="40" width="10" height="120" fill="#666"/>
    <!-- behuizing -->
    <rect x="115" y="50" width="50" height="110" fill="#222" stroke="#444" stroke-width="2" rx="4"/>
    <!-- rood (actief) -->
    <circle cx="140" cy="70" r="14" fill="#ff3030" />
    <!-- geel -->
    <circle cx="140" cy="105" r="14" fill="#555"/>
    <!-- groen -->
    <circle cx="140" cy="140" r="14" fill="#555"/>
    <!-- stopstreep -->
    <rect x="80" y="170" width="120" height="6" fill="${KLEUR.wegLijn}"/>
    <text x="140" y="195" fill="#fff" font-size="11" text-anchor="middle" font-family="sans-serif">stopstreep</text>
    <!-- jij = fiets staat ervoor -->
    <rect x="60" y="175" width="16" height="14" fill="${KLEUR.fietser}" rx="2"/>
    <text x="50" y="170" fill="#fff" font-size="10" font-family="sans-serif" text-anchor="end">JIJ</text>
  </svg>`;
}

// Sirene/zwaailicht-voertuig
function ambulanceSvg() {
  const W = 280, H = 200;
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ambulance met zwaailicht">
    <rect width="${W}" height="${H}" fill="${KLEUR.bg}"/>
    <rect x="0" y="80" width="${W}" height="60" fill="${KLEUR.weg}"/>
    <line x1="0" y1="110" x2="${W}" y2="110" stroke="${KLEUR.wegLijn}" stroke-width="2" stroke-dasharray="8,6"/>
    <!-- ambulance (groot wit voertuig met zwaailicht) -->
    <rect x="80" y="92" width="60" height="32" fill="#fff" rx="2"/>
    <rect x="84" y="98" width="14" height="10" fill="#42a5f5"/>
    <!-- kruis -->
    <rect x="113" y="100" width="14" height="3" fill="#ef5350"/>
    <rect x="118" y="95" width="3" height="13" fill="#ef5350"/>
    <!-- zwaailicht boven -->
    <rect x="100" y="84" width="20" height="8" fill="#ff9800"/>
    <circle cx="110" cy="80" r="6" fill="#ffeb3b" stroke="#ff9800" stroke-width="2"/>
    <text x="155" y="98" fill="${KLEUR.voetganger}" font-size="10" font-family="sans-serif">🚨 sirene + zwaailicht</text>
    <polygon points="155,110 165,105 165,115" fill="${KLEUR.pijl}"/>
    <!-- jij = fiets aan kant -->
    <rect x="20" y="155" width="16" height="14" fill="${KLEUR.fietser}" rx="2"/>
    <text x="44" y="167" fill="#fff" font-size="10" font-family="sans-serif">JIJ (op fiets)</text>
  </svg>`;
}

// ── Pad-content ─────────────────────────────────────────────

const chapters = [
  { letter: "A", title: "Rechts heeft voorrang", emoji: "↗️", from: 0, to: 0 },
  { letter: "B", title: "Haaientanden", emoji: "🦈", from: 1, to: 1 },
  { letter: "C", title: "Zebrapad", emoji: "🚶", from: 2, to: 2 },
  { letter: "D", title: "Stop + rood licht", emoji: "🛑", from: 3, to: 3 },
  { letter: "E", title: "Sirene + zwaailicht", emoji: "🚨", from: 4, to: 4 },
];

const steps = [
  // ── A. Rechts voorrang ─────────────────────────────────────
  {
    title: "Op een gelijkwaardig kruispunt",
    emoji: "↗️",
    svg: kruispuntSvg({
      vanLinks: { kleur: KLEUR.fietser, label: "JIJ (fiets)" },
      vanRechts: { kleur: KLEUR.auto, label: "auto" },
      label: "gelijkwaardig kruispunt zonder borden",
    }),
    explanation:
      "Een **gelijkwaardig kruispunt** heeft **geen borden + geen stoplichten + geen haaientanden**.\n\n**Regel: rechts heeft voorrang**.\n\nIn het plaatje kom **jij van links** op de fiets. **De auto komt van rechts**. De auto mag eerst — **jij wacht**.\n\nDit is de meest voorkomende voorrang-vraag op het VVN-examen. Onthoud: 'rechts gaat eerst'.",
    checks: [
      {
        q: "Op het kruispunt in het plaatje: wie heeft voorrang?",
        options: ["De auto van rechts","Jij op de fiets","Wie het hardst gaat","Niemand"],
        answer: 0,
        wrongHints: [null, "Jij komt van LINKS — links moet wachten.", "Snelheid heeft niets met voorrang te maken.", "Er is altijd een regel."],
        uitlegPad: {
          stappen: [{ titel: "Rechts = eerst", tekst: "Op gelijkwaardige kruispunten (geen bord, geen stoplicht): **rechts heeft voorrang**. Auto komt van rechts → auto eerst → jij wacht." }],
          niveaus: { basis: "Auto van rechts. A.", simpeler: "Rechts = eerst = A.", nogSimpeler: "Rechts = A." },
        },
      },
    ],
  },

  // ── B. Haaientanden ────────────────────────────────────────
  {
    title: "Witte driehoekjes (haaientanden)",
    emoji: "🦈",
    svg: haaientandenSvg(),
    explanation:
      "Zie je **witte driehoekjes op de weg** die naar jou wijzen? Dat zijn **haaientanden**.\n\n**Betekenis**: jij **moet voorrang verlenen**. De andere weg is voorrangsweg.\n\nIn het plaatje: jij komt op de fiets van onder. Haaientanden wijzen naar jou. De auto komt van links over de **voorrangsweg**. **Jij wacht**, de auto rijdt door.",
    checks: [
      {
        q: "Je ziet haaientanden voor je wiel. Wat doe je?",
        options: ["Voorrang verlenen (wachten)","Doorrijden — jij hebt voorrang","Stoppen + uitstappen","Toeteren"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — de andere weg heeft voorrang.", "Niet — wel wachten, geen uitstappen.", "Toeteren is geen voorrangsregel."],
        uitlegPad: {
          stappen: [{ titel: "Haaientanden = jij wacht", tekst: "**Haaientanden** = driehoekjes die naar jou wijzen op de weg. Betekenen: **jij moet voorrang geven**. De andere weg is voorrangsweg. Hetzelfde als bord B6." }],
          theorie: "Cito-VVN-favoriet. Ezelsbruggetje: haai 'eet jou op' = jij moet wachten.",
          niveaus: { basis: "Wachten. A.", simpeler: "Haaientanden = jij wacht = A.", nogSimpeler: "Wachten = A." },
        },
      },
    ],
  },

  // ── C. Zebrapad ────────────────────────────────────────────
  {
    title: "Voetganger op zebrapad",
    emoji: "🚶",
    svg: zebrapadSvg(),
    explanation:
      "Een **zebrapad** is een oversteekplaats met **witte strepen**.\n\n**Regel**: een voetganger die **al oversteekt** (of duidelijk gaat oversteken) heeft **altijd voorrang**.\n\nJij komt op de fiets aan, voetganger staat op het zebrapad. **Jij stopt** en laat de voetganger oversteken. Pas daarna rij je door.\n\nGeldt voor fietsers, auto's, scooters — iedereen.",
    checks: [
      {
        q: "Voetganger staat midden op het zebrapad. Wat doe je op de fiets?",
        options: ["Stoppen + laten oversteken","Snel langs rijden","Toeteren","Achteruit"],
        answer: 0,
        wrongHints: [null, "Niet — voetganger heeft voorrang, je MOET stoppen.", "Toeteren mag niet als voetganger oversteekt.", "Niet logisch."],
        uitlegPad: {
          stappen: [{ titel: "Zebra = voetganger eerst", tekst: "Op zebrapad heeft de **voetganger altijd voorrang** zodra hij oversteekt. Fietsers + auto's stoppen. Pas doorrijden als voetganger veilig op trottoir is." }],
          theorie: "Boete bij overtreding: ~€280 voor auto, ~€110 voor fiets. Geldt ook voor scooter + e-step.",
          niveaus: { basis: "Stoppen. A.", simpeler: "Zebra + voetganger = stop = A.", nogSimpeler: "Stop = A." },
        },
      },
    ],
  },

  // ── D. Stop + rood licht ───────────────────────────────────
  {
    title: "Stopbord + rood verkeerslicht",
    emoji: "🛑",
    svg: stopBordSvg(),
    explanation:
      "**Stopbord** (rode 8-hoek): **altijd stilstaan** — ook als er geen verkeer is. Pas doorrijden als het veilig is.\n\n**Rood verkeerslicht**: stoppen voor de **stopstreep** (witte dikke streep). Wachten tot **groen**. Ook als er niemand komt — rood = stop.\n\n**Verschil**:\n• Stopbord = jij beslist wanneer je weer rijdt (na controle).\n• Rood licht = je wacht tot licht zelf op groen springt.",
    checks: [
      {
        q: "Je ziet een STOP-bord (rood 8-hoek). Wat doe je?",
        options: ["Stilstaan + dan pas verder","Langzamer rijden","Doorrijden als geen verkeer","Toeteren"],
        answer: 0,
        wrongHints: [null, "Niet — stoppen, niet alleen vertragen.", "Niet — stopbord = altijd stilstaan.", "Niet — toeteren mag niet."],
        uitlegPad: {
          stappen: [{ titel: "STOP = stilstaan", tekst: "Bij een STOP-bord moet je **stilstaan** (volledig stop, voeten op grond bij fiets). Daarna pas verder als kruising vrij is. Verschil met voorrangsverlenen (haaientanden): daar mag je langzaam rijden als alles vrij is. STOP = altijd echt stilstaan." }],
          niveaus: { basis: "Stilstaan. A.", simpeler: "STOP = stilstaan = A.", nogSimpeler: "Stop = A." },
        },
      },
      {
        q: "Bij een rood verkeerslicht voor jou: wat doe je?",
        svg: verkeerslichtSvg(),
        options: ["Stoppen voor de stopstreep, wachten op groen","Doorrijden als niemand komt","Naast wachten oversteken","Vragen aan voorbijganger"],
        answer: 0,
        wrongHints: [null, "Niet — rood is altijd stop, ook zonder verkeer.", "Niet — gevaarlijk + boete.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Rood = stop", tekst: "**Rood licht = altijd stoppen** voor de stopstreep. Wachten tot het licht zelf op groen springt. Geldt voor alle weggebruikers — ook fietsers (anders dan in België waar fietsers soms wel mogen)." }],
          theorie: "Boete door rood fietsen: ~€110. Bij ongeluk dat door jou-door-rood ontstaat: jouw schuld.",
          niveaus: { basis: "Stoppen + wachten. A.", simpeler: "Rood = stop = A.", nogSimpeler: "Stop = A." },
        },
      },
    ],
  },

  // ── E. Sirene + zwaailicht ─────────────────────────────────
  {
    title: "Politie / ambulance / brandweer",
    emoji: "🚨",
    svg: ambulanceSvg(),
    explanation:
      "**Voorrangsvoertuigen** zijn **politie, ambulance, brandweer** met **zwaailicht ÉN sirene tegelijk**.\n\n**Regel**: zij hebben **altijd voorrang**. Iedereen maakt plaats.\n\n**Wat doe jij op de fiets**?\n1. Naar de **kant van de weg** (rechts).\n2. **Stoppen** als het kan — niet middenop weg.\n3. Wachten tot het voertuig voorbij is.\n4. Pas daarna doorrijden.\n\n**Belangrijk**: zwaailicht zónder sirene = geen voorrang (alleen 'kijk uit'). Pas met sirene erbij heeft het voertuig écht voorrang.",
    checks: [
      {
        q: "Ambulance komt aan met zwaailicht + sirene. Wat doe je op de fiets?",
        options: ["Naar de kant + stoppen","Sneller fietsen","Doorgaan zoals je was","Toeteren naar de ambulance"],
        answer: 0,
        wrongHints: [null, "Niet — je moet juist stoppen.", "Niet — ambulance moet voor jou kunnen passeren.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Opzij + stoppen", tekst: "Bij sirene + zwaailicht: **fietser gaat naar de rechterkant van de weg en stopt**. Auto's doen hetzelfde. Doe het rustig — geen paniek-stuur — zodat de ambulance een vrije baan heeft." }],
          theorie: "Zwaailicht zonder sirene = alleen 'kijk uit, ik werk' — geen voorrang. Sirene mag pas aan bij echt spoedgeval.",
          niveaus: { basis: "Naar kant + stop. A.", simpeler: "Sirene = opzij + stop = A.", nogSimpeler: "Opzij = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { if (!s.emoji) s.emoji = ["↗️", "🦈", "🚶", "🛑", "🚨"][i]; });

const voorrangBasisPo = {
  id: "voorrang-basis-po",
  title: "Voorrang in plaatjes (groep 5-8)",
  emoji: "🚦",
  level: "groep5-8",
  subject: "verkeer",
  referentieNiveau: "po-vvn-basis",
  sloThema: "Verkeer PO — voorrang basis met visuele uitleg",
  prerequisites: [
    { id: "vvn-verkeersexamen-po", title: "VVN Verkeersexamen", niveau: "groep7-8" },
    { id: "verkeersregels-veiligheid-po", title: "Verkeersregels + veiligheid", niveau: "groep5-7" },
  ],
  intro:
    "Voorrang in 5 plaatjes. De meest voorkomende alledaagse situaties — geen randgevallen. Elke stap: één tekening + één vraag. Visueel-eerst.",
  triggerKeywords: [
    "voorrang", "voorrangsregel", "voorrangsregels",
    "rechts voorrang", "rechts heeft voorrang",
    "gelijkwaardig kruispunt",
    "haaientanden", "haaitanden",
    "zebrapad", "voetganger oversteken",
    "stopbord", "STOP-bord",
    "rood verkeerslicht", "rood licht",
    "ambulance sirene", "voorrangsvoertuig",
    "politie zwaailicht",
    "brandweer",
    "VVN verkeer",
    "fiets voorrang",
  ],
  chapters,
  steps,
};

export default voorrangBasisPo;
