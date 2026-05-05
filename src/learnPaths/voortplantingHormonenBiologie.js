// Leerpad: Voortplanting + hormoonstelsel
// 11 stappen in 6 hoofdstukken (A t/m F).
// Doelgroep: klas 2-3 onderbouw VO. Examenstof biologie CSE.
//
// Toon: feitelijk en wetenschappelijk, zoals een biologieboek. Lichaamsdelen
// en processen worden gewoon genoemd met hun officiële namen — geen
// versluierende taal, maar ook geen sensatie.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  // hormoon-tinten
  ovaria: "#ec407a",     // roze
  testes: "#5c6bc0",     // paars-blauw
  hypofyse: "#26a69a",   // teal
  schildklier: "#66bb6a",// groen
  alvleesklier: "#ffa726",// oranje
  bijnier: "#ef5350",    // rood
  uterus: "#ec407a",     // roze
  cyclus_a: "#5d9cec",   // donker blauw
  cyclus_b: "#69f0ae",   // licht groen
};

const stepEmojis = [
  "🧪",   // A1. wat zijn hormonen
  "📡",   // A2. hormoonstelsel
  "♀️",   // B1. vrouwelijke organen
  "♂️",   // B2. mannelijke organen
  "📅",   // C1. menstruatiecyclus
  "👶",   // C2. bevruchting + zwangerschap
  "🌱",   // D1. puberteit
  "🍬",   // E1. insuline + diabetes
  "💪",   // E2. adrenaline + schildklier
  "🩺",   // F1. hormoonziektes
  "🏆",   // F2. eindopdracht
];

const chapters = [
  { letter: "A", title: "Hormonen — wat en hoe?", emoji: "🧪", from: 0, to: 1 },
  { letter: "B", title: "Voortplantingsorganen", emoji: "♀️", from: 2, to: 3 },
  { letter: "C", title: "Cyclus + zwangerschap", emoji: "📅", from: 4, to: 5 },
  { letter: "D", title: "Puberteit", emoji: "🌱", from: 6, to: 6 },
  { letter: "E", title: "Andere belangrijke hormonen", emoji: "💪", from: 7, to: 8 },
  { letter: "F", title: "Hormoonziektes + eindopdracht", emoji: "🏆", from: 9, to: 10 },
];

// Hormoonstelsel — schematische silhouet met klieren als gekleurde dots.
function hormoonstelselSvg(highlight = null) {
  const isHL = (k) => highlight === k;
  const opa = (k) => highlight && !isHL(k) ? 0.3 : 1;
  return `<svg viewBox="0 0 200 280">
<rect x="0" y="0" width="200" height="280" fill="${COLORS.paper}"/>
<text x="100" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">De belangrijkste hormoonklieren</text>

<!-- Lichaam-silhouet (stilistisch) -->
<ellipse cx="100" cy="42" rx="20" ry="22" fill="rgba(255,255,255,0.04)" stroke="${COLORS.muted}" stroke-width="1"/>
<rect x="80" y="62" width="40" height="8" rx="3" fill="rgba(255,255,255,0.04)" stroke="${COLORS.muted}" stroke-width="1"/>
<polygon points="70,72 130,72 138,180 62,180" fill="rgba(255,255,255,0.04)" stroke="${COLORS.muted}" stroke-width="1"/>
<rect x="74" y="180" width="22" height="80" rx="6" fill="rgba(255,255,255,0.04)" stroke="${COLORS.muted}" stroke-width="1"/>
<rect x="104" y="180" width="22" height="80" rx="6" fill="rgba(255,255,255,0.04)" stroke="${COLORS.muted}" stroke-width="1"/>

<!-- Hypofyse (in hoofd, klein) -->
<circle cx="100" cy="40" r="5" fill="${COLORS.hypofyse}" opacity="${opa("hypofyse")}" stroke="${isHL("hypofyse") ? "#fff" : "transparent"}" stroke-width="2"/>
<line x1="105" y1="40" x2="160" y2="40" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="162" y="43" fill="${COLORS.text}" font-size="9" font-family="Arial">hypofyse</text>

<!-- Schildklier (in hals) -->
<ellipse cx="100" cy="68" rx="6" ry="3" fill="${COLORS.schildklier}" opacity="${opa("schildklier")}" stroke="${isHL("schildklier") ? "#fff" : "transparent"}" stroke-width="2"/>
<line x1="106" y1="68" x2="160" y2="68" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="162" y="71" fill="${COLORS.text}" font-size="9" font-family="Arial">schildklier</text>

<!-- Bijnieren (boven nieren, in romp) -->
<circle cx="83" cy="125" r="4" fill="${COLORS.bijnier}" opacity="${opa("bijnier")}" stroke="${isHL("bijnier") ? "#fff" : "transparent"}" stroke-width="2"/>
<circle cx="117" cy="125" r="4" fill="${COLORS.bijnier}" opacity="${opa("bijnier")}" stroke="${isHL("bijnier") ? "#fff" : "transparent"}" stroke-width="2"/>
<line x1="121" y1="125" x2="160" y2="125" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="162" y="128" fill="${COLORS.text}" font-size="9" font-family="Arial">bijnieren</text>

<!-- Alvleesklier (in romp midden) -->
<ellipse cx="100" cy="148" rx="14" ry="3" fill="${COLORS.alvleesklier}" opacity="${opa("alvleesklier")}" stroke="${isHL("alvleesklier") ? "#fff" : "transparent"}" stroke-width="2"/>
<line x1="114" y1="148" x2="160" y2="148" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="162" y="151" fill="${COLORS.text}" font-size="9" font-family="Arial">alvleesklier</text>

<!-- Eierstokken (vrouw) -->
<circle cx="86" cy="172" r="4" fill="${COLORS.ovaria}" opacity="${opa("ovaria")}" stroke="${isHL("ovaria") ? "#fff" : "transparent"}" stroke-width="2"/>
<circle cx="114" cy="172" r="4" fill="${COLORS.ovaria}" opacity="${opa("ovaria")}" stroke="${isHL("ovaria") ? "#fff" : "transparent"}" stroke-width="2"/>
<line x1="118" y1="172" x2="160" y2="172" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="162" y="175" fill="${COLORS.text}" font-size="9" font-family="Arial">eierstokken (♀)</text>

<!-- Teelballen (man) -->
<circle cx="92" cy="245" r="4" fill="${COLORS.testes}" opacity="${opa("testes")}" stroke="${isHL("testes") ? "#fff" : "transparent"}" stroke-width="2"/>
<circle cx="108" cy="245" r="4" fill="${COLORS.testes}" opacity="${opa("testes")}" stroke="${isHL("testes") ? "#fff" : "transparent"}" stroke-width="2"/>
<line x1="112" y1="245" x2="160" y2="245" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="162" y="248" fill="${COLORS.text}" font-size="9" font-family="Arial">teelballen (♂)</text>
</svg>`;
}

// Vrouwelijke voortplantingsorganen (schematisch).
function vrouwOrganenSvg() {
  return `<svg viewBox="0 0 280 200">
<rect x="0" y="0" width="280" height="200" fill="${COLORS.paper}"/>
<text x="140" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Vrouwelijke voortplantingsorganen — vooraanzicht</text>

<!-- Baarmoeder (peer-vorm, in midden) -->
<path d="M 120 60 Q 110 90 115 130 Q 130 145 150 145 Q 170 145 165 130 Q 170 90 160 60 Z" fill="${COLORS.uterus}" opacity="0.7" stroke="${COLORS.uterus}" stroke-width="1.5"/>
<text x="140" y="105" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial" font-weight="bold">baarmoeder</text>

<!-- Eileiders (links + rechts, kromme buisjes vanaf baarmoeder) -->
<path d="M 120 65 Q 100 50 75 60 Q 60 70 60 80" stroke="${COLORS.ovaria}" stroke-width="3" fill="none"/>
<path d="M 160 65 Q 180 50 205 60 Q 220 70 220 80" stroke="${COLORS.ovaria}" stroke-width="3" fill="none"/>
<line x1="125" y1="80" x2="80" y2="65" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="60" y="48" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">eileider</text>

<!-- Eierstokken (links + rechts) -->
<ellipse cx="55" cy="80" rx="12" ry="6" fill="${COLORS.ovaria}" opacity="0.85"/>
<ellipse cx="225" cy="80" rx="12" ry="6" fill="${COLORS.ovaria}" opacity="0.85"/>
<line x1="55" y1="86" x2="40" y2="120" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="35" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">eierstok</text>

<!-- Vagina (onder baarmoeder) -->
<rect x="130" y="145" width="20" height="40" fill="${COLORS.uterus}" opacity="0.6"/>
<line x1="153" y1="170" x2="195" y2="170" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="225" y="173" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vagina</text>
</svg>`;
}

// Mannelijke voortplantingsorganen (schematisch zijaanzicht).
function manOrganenSvg() {
  return `<svg viewBox="0 0 280 200">
<rect x="0" y="0" width="280" height="200" fill="${COLORS.paper}"/>
<text x="140" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Mannelijke voortplantingsorganen — zijaanzicht</text>

<!-- Bekken-rand schematisch -->
<path d="M 60 70 L 60 130 L 220 130 L 220 70" fill="none" stroke="${COLORS.muted}" stroke-width="1" stroke-dasharray="3,3"/>

<!-- Blaas (boven, schematisch) -->
<ellipse cx="140" cy="65" rx="35" ry="18" fill="rgba(255,213,79,0.18)" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="140" y="68" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">blaas</text>

<!-- Prostaat onder blaas -->
<ellipse cx="140" cy="100" rx="14" ry="9" fill="${COLORS.testes}" opacity="0.6"/>
<line x1="155" y1="100" x2="195" y2="100" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="225" y="103" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">prostaat</text>

<!-- Zaadleider (van teelbal omhoog) -->
<path d="M 140 145 Q 145 130 138 110" stroke="${COLORS.testes}" stroke-width="2" fill="none"/>
<line x1="142" y1="120" x2="195" y2="125" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="225" y="128" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">zaadleider</text>

<!-- Teelballen + balzak -->
<ellipse cx="135" cy="160" rx="22" ry="20" fill="rgba(92,107,192,0.15)" stroke="${COLORS.testes}" stroke-width="1"/>
<ellipse cx="128" cy="158" rx="9" ry="7" fill="${COLORS.testes}" opacity="0.85"/>
<ellipse cx="142" cy="162" rx="9" ry="7" fill="${COLORS.testes}" opacity="0.85"/>
<line x1="155" y1="158" x2="195" y2="158" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="225" y="161" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">teelbal in balzak</text>

<!-- Penis schematisch -->
<rect x="160" y="135" width="48" height="14" rx="6" fill="rgba(92,107,192,0.20)" stroke="${COLORS.testes}" stroke-width="1"/>
<line x1="195" y1="135" x2="220" y2="125" stroke="${COLORS.muted}" stroke-width="0.5"/>
</svg>`;
}

// Menstruatiecyclus — 28-daagse tijdlijn met vier fasen.
function cyclusSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="14" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">De menstruatiecyclus — 28 dagen, 4 fasen</text>

<!-- As-lijn -->
<line x1="20" y1="120" x2="300" y2="120" stroke="${COLORS.muted}" stroke-width="1"/>

<!-- Dag-markers -->
${[1, 7, 14, 21, 28].map((d) => {
  const x = 20 + ((d - 1) / 27) * 280;
  return `<line x1="${x}" y1="118" x2="${x}" y2="124" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="${x}" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">dag ${d}</text>`;
}).join("")}

<!-- Fase 1: Menstruatie (dag 1-5) -->
<rect x="20" y="40" width="40" height="75" fill="${COLORS.bijnier}" opacity="0.5" rx="2"/>
<text x="40" y="32" text-anchor="middle" fill="${COLORS.bijnier}" font-size="9" font-family="Arial" font-weight="bold">menstruatie</text>
<text x="40" y="158" text-anchor="middle" fill="${COLORS.text}" font-size="8" font-family="Arial">slijmvlies</text>
<text x="40" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="8" font-family="Arial">verlaten</text>

<!-- Fase 2: Folliculaire fase (dag 6-13) -->
<rect x="60" y="60" width="80" height="55" fill="${COLORS.cyclus_a}" opacity="0.4" rx="2"/>
<text x="100" y="50" text-anchor="middle" fill="${COLORS.cyclus_a}" font-size="9" font-family="Arial" font-weight="bold">opbouwfase</text>
<text x="100" y="158" text-anchor="middle" fill="${COLORS.text}" font-size="8" font-family="Arial">eicel rijpt</text>
<text x="100" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="8" font-family="Arial">slijmvlies groeit</text>

<!-- Fase 3: Ovulatie (dag 14) -->
<circle cx="155" cy="80" r="8" fill="${COLORS.warm}" opacity="0.85"/>
<text x="155" y="50" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold">ovulatie</text>
<text x="155" y="158" text-anchor="middle" fill="${COLORS.text}" font-size="8" font-family="Arial">eicel</text>
<text x="155" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="8" font-family="Arial">vrijgegeven</text>

<!-- Fase 4: Luteale fase (dag 15-28) -->
<rect x="170" y="55" width="130" height="60" fill="${COLORS.cyclus_b}" opacity="0.4" rx="2"/>
<text x="235" y="48" text-anchor="middle" fill="${COLORS.good}" font-size="9" font-family="Arial" font-weight="bold">wachtfase</text>
<text x="235" y="158" text-anchor="middle" fill="${COLORS.text}" font-size="8" font-family="Arial">slijmvlies klaar</text>
<text x="235" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="8" font-family="Arial">voor evt. innesteling</text>

<!-- As-uitleg onderaan -->
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">→ als geen bevruchting plaatsvindt, begint cyclus opnieuw</text>
</svg>`;
}

const steps = [
  // ─── A. Hormonen ───────────────
  {
    title: "Wat zijn hormonen?",
    explanation: "**Hormonen** zijn **chemische boodschappers** in je lichaam. Ze worden gemaakt in **hormoonklieren** en reizen via je **bloed** naar plaatsen in je lichaam waar ze hun werk doen.\n\n**Vergelijking met communicatie**:\n• **Zenuwstelsel** = telefoon-systeem (snel, direct, één-op-één)\n• **Hormoonstelsel** = brief in de post (langzaam, veel ontvangers tegelijk)\n\n**Wat doen hormonen?**\nElk hormoon heeft één of meerdere taken. Voorbeelden:\n• **Insuline** regelt je suikerspiegel (bloedsuiker).\n• **Adrenaline** maakt je hart sneller bij schrik of opwinding.\n• **Oestrogeen** + **testosteron** sturen de puberteit.\n• **Schildklierhormoon** regelt hoe snel je lichaam energie verbrandt.\n• **Melatonine** regelt je slaap-waakritme.\n\n**Drie kenmerken van hormonen**:\n1. Worden gemaakt in **klieren** (geen gangen — gewoon een orgaantje dat afgeeft).\n2. Reizen via **bloed** door het hele lichaam.\n3. Werken alleen op specifieke **doelorganen** met de juiste 'sleutel-receptor'.\n\n**Klein beetje hormonaal verschil = groot effect**\nHormonen werken in **mini-hoeveelheden**. Een paar moleculen kunnen het verschil maken tussen rust en paniek, tussen kind en volwassene, tussen gezond en ziek.\n\n**Het hormoonstelsel is langzaam maar lang werkend**: hormonen werken in seconden tot minuten — en hun effect houdt vaak uren tot dagen aan. Dat is anders dan zenuwprikkels (milliseconden).",
    svg: hormoonstelselSvg(),
    checks: [
      {
        q: "Wat zijn hormonen?",
        options: [
          "Chemische boodschappers in het bloed",
          "Een soort spier",
          "Een soort vitamine",
          "Een onderdeel van het zenuwstelsel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Spieren bewegen je lichaam — hormonen geven boodschappen.",
          "Vitamines komen uit voedsel — hormonen maakt je lichaam zelf.",
          "Het hormoonstelsel is een ander systeem dan het zenuwstelsel.",
        ],
      },
      {
        q: "Hoe verspreiden hormonen zich door het lichaam?",
        options: ["Via het bloed", "Via de spieren", "Via de huid", "Via de luchtwegen"],
        answer: 0,
        wrongHints: [
          null,
          "Spieren bewegen, ze vervoeren niets door het lichaam.",
          "De huid is een buitenkant — geen vervoer-systeem.",
          "Luchtwegen vervoeren lucht (zuurstof), geen hormonen.",
        ],
      },
    ],
  },
  {
    title: "Het hormoonstelsel — de belangrijkste klieren",
    explanation: "Je lichaam heeft een aantal **hormoonklieren**, elk met eigen taken. De zes belangrijkste:\n\n**1. Hypofyse** — *de baas van het hormoonstelsel*\n• Klein orgaantje (ter grootte van een erwt) onderin de hersenen.\n• Stuurt andere klieren aan via stuurhormonen ('hé schildklier, maak meer hormoon!').\n• Maakt zelf ook hormonen voor groei + voortplanting.\n\n**2. Schildklier** — *bij je hals (onder je adamsappel)*\n• Maakt **schildklierhormoon** (T3 en T4).\n• Regelt **stofwisseling** — hoe snel je lichaam energie verbrandt.\n• Te weinig → moe, koud, gewichtstoename.\n• Te veel → onrustig, transpireren, gewichtsverlies.\n\n**3. Bijnieren** — *bovenop je nieren*\n• Maken **adrenaline** (vlucht-of-vecht-hormoon).\n• Maken **cortisol** (stress-hormoon, langere termijn).\n• In actie bij stress, sport of gevaar.\n\n**4. Alvleesklier** — *tussen je maag en darm*\n• Maakt **insuline** (verlaagt bloedsuiker) en **glucagon** (verhoogt bloedsuiker).\n• Houdt je suikerspiegel constant.\n• Bij diabetes type 1 werkt deze klier niet meer goed.\n\n**5. Eierstokken** *(♀)* — *in onderbuik*\n• Maken **oestrogeen** en **progesteron**.\n• Sturen de menstruatiecyclus.\n• Geven ook eicellen (~1 per maand vanaf de puberteit).\n\n**6. Teelballen** *(♂)* — *in balzak*\n• Maken **testosteron**.\n• Geeft mannelijke kenmerken (baardgroei, lage stem, spiermassa).\n• Maken zaadcellen (vanaf puberteit miljoenen per dag).\n\n**Hoe alles samenwerkt**\nDe **hypofyse** stuurt alles aan via 'stuurhormonen'. Die geven andere klieren het signaal: 'maak nu meer hormoon!' De klier reageert, geeft hormoon af, en als er genoeg is geeft het hersenen weer feedback om te stoppen. Dit heet **negatieve feedback** — slim systeem dat alles in balans houdt.",
    svg: hormoonstelselSvg(),
    checks: [
      {
        q: "Welke klier wordt vaak de 'baas' van het hormoonstelsel genoemd?",
        options: ["Hypofyse", "Schildklier", "Bijnieren", "Alvleesklier"],
        answer: 0,
        wrongHints: [
          null,
          "Wordt door de hypofyse aangestuurd, niet andersom.",
          "Maken adrenaline maar sturen anderen niet aan.",
          "Maakt insuline, geen stuurhormonen.",
        ],
      },
      {
        q: "Wat doet de **schildklier**?",
        options: [
          "Regelt de stofwisseling (hoe snel je energie verbrandt)",
          "Maakt insuline",
          "Maakt zaadcellen",
          "Filtert je bloed",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Insuline komt uit de alvleesklier.",
          "Zaadcellen komen uit de teelballen.",
          "Bloed filteren is de taak van de nieren, geen klier.",
        ],
      },
    ],
  },

  // ─── B. Voortplantingsorganen ───────────────
  {
    title: "Vrouwelijke voortplantingsorganen",
    explanation: "Het vrouwelijk voortplantingssysteem heeft als hoofdtaak: een eicel laten rijpen, ruimte bieden voor bevruchting, en als die plaatsvindt — het ongeboren kind 9 maanden lang dragen.\n\n**De belangrijkste onderdelen**:\n\n**1. Eierstokken** *(2 stuks, links en rechts in de onderbuik)*\n• Bevatten alle **eicellen** waarmee een vrouw geboren wordt — ~1-2 miljoen bij geboorte, daarvan komen er ~400 ooit tot rijping in haar leven.\n• Maken **oestrogeen** en **progesteron** (vrouwelijke hormonen).\n• Vanaf de puberteit (gemiddeld 11-13 jaar) komt elke ~28 dagen één eicel los — dat heet **eisprong** of **ovulatie**.\n\n**2. Eileiders** *(2 stuks)*\n• Buisjes die de eierstokken verbinden met de baarmoeder.\n• Vangen de vrijkomende eicel op.\n• **In de eileider vindt vaak de bevruchting plaats** als er zaadcellen aanwezig zijn.\n\n**3. Baarmoeder** *(uterus, in het midden)*\n• Spierorgaan ter grootte van een (omgekeerde) peer.\n• Het binnenoppervlak heeft een **slijmvlies** dat elke maand opbouwt en weer afbreekt.\n• Als een bevruchte eicel innestelt → de baarmoeder rekt 9 maanden lang mee tot ~30× zijn normale grootte.\n\n**4. Vagina** *(geboortekanaal)*\n• Verbindt de baarmoeder met de buitenkant.\n• Tijdens geslachtsgemeenschap komt sperma hier binnen.\n• Tijdens een geboorte gaat het kind hier doorheen.\n\n**5. Schaamlippen + clitoris** *(buitenkant)*\n• Beschermen de inwendige organen.\n• De clitoris is een **gevoelig orgaan** met veel zenuwuiteinden.\n\n**Belangrijk**: vrouwen worden geboren met al hun eicellen. Mannen maken zaadcellen continu na de puberteit, vrouwen maken geen nieuwe eicellen aan.\n\n**Menopauze** *(rond 45-55 jaar)*\n• De eierstokken stoppen geleidelijk met werken.\n• Geen menstruatie meer, geen kinderen meer mogelijk.\n• Hormonale verschuiving geeft soms opvliegers + andere klachten.",
    svg: vrouwOrganenSvg(),
    checks: [
      {
        q: "Waar vindt **bevruchting** meestal plaats?",
        options: ["In de eileider", "In de baarmoeder", "In de eierstok", "In de vagina"],
        answer: 0,
        wrongHints: [
          null,
          "In de baarmoeder vindt de innesteling plaats — bevruchting is eerder.",
          "In de eierstok rijpt de eicel; die komt eerst los voordat bevruchting kan.",
          "Daar komt sperma binnen, maar het zwemt door tot in de eileider.",
        ],
      },
      {
        q: "Hoeveel eicellen heeft een meisje **bij geboorte** ongeveer?",
        options: [
          "1-2 miljoen (alle die ze ooit zal hebben)",
          "0 — die maakt ze later aan",
          "100",
          "Een handjevol",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — vrouwen maken geen nieuwe eicellen aan, in tegenstelling tot mannen met zaadcellen.",
          "Veel meer — 1-2 miljoen.",
          "Veel meer — miljoenen.",
        ],
      },
      {
        q: "Wat gebeurt er bij de **menopauze**?",
        options: [
          "De eierstokken stoppen geleidelijk met werken",
          "De baarmoeder verdwijnt",
          "Vrouwen krijgen extra eicellen",
          "Niks bijzonders",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De baarmoeder blijft, maar functioneert niet meer voor zwangerschap.",
          "Andersom — eicellen raken juist op.",
          "Wel degelijk een grote verandering met hormonale gevolgen.",
        ],
      },
    ],
  },
  {
    title: "Mannelijke voortplantingsorganen",
    explanation: "Het mannelijk voortplantingssysteem heeft als hoofdtaak: zaadcellen maken en die afgeven om een eicel te bevruchten.\n\n**De belangrijkste onderdelen**:\n\n**1. Teelballen (testikels)** *(2 stuks, in balzak)*\n• Hier worden **zaadcellen** gemaakt — vanaf de puberteit elke dag tientallen miljoenen.\n• Maken ook het hormoon **testosteron**.\n• Hangen buiten het lichaam in de **balzak (scrotum)** omdat zaadcellen iets koeler willen dan lichaamstemperatuur (~35 °C ipv 37 °C).\n\n**2. Bijbal** *(epididymis)*\n• Klein orgaan op elke teelbal.\n• Hier rijpen de zaadcellen verder en worden opgeslagen.\n• Een zaadcel rijpt ~2-3 weken voor 'ie klaar is.\n\n**3. Zaadleider** *(2 stuks, één per teelbal)*\n• Buisjes die zaadcellen vervoeren van bijbal naar de prostaat.\n\n**4. Prostaat + zaadblaasjes**\n• Voegen vocht toe aan de zaadcellen — samen vormt dit **sperma**.\n• Het vocht voedt en beschermt de zaadcellen.\n\n**5. Penis**\n• Brengt sperma in de vagina van de vrouw bij geslachtsgemeenschap.\n• Bevat de **plasbuis (urethra)** waar zowel urine als sperma doorheen kunnen — maar nooit tegelijk (er zit een spier die schakelt).\n\n**Cijfers en feiten**\n• **Hoeveelheid sperma per uitstoot**: ~2-5 ml.\n• **Aantal zaadcellen daarin**: ~200-400 miljoen.\n• Slechts **één zaadcel** kan een eicel bevruchten — de rest sterft af.\n• **Lengte zaadcel**: ~50 micrometer — onzichtbaar voor het oog.\n• **Zwemsnelheid**: ~1-3 mm/min in de vrouwelijke organen — duurt ~30-60 min om de eileider te bereiken.\n\n**Verschil met vrouw**: mannen maken vanaf de puberteit **continu** nieuwe zaadcellen — een gezonde man stopt daar pas mee op zeer hoge leeftijd. Vrouwen worden met al hun eicellen geboren.",
    svg: manOrganenSvg(),
    checks: [
      {
        q: "Waarom hangen de teelballen **buiten** het lichaam in de balzak?",
        options: [
          "Zaadcellen hebben een iets lagere temperatuur nodig dan 37 °C",
          "Het is gewoon zo gegroeid, geen reden",
          "Anders kan de man niet plassen",
          "Voor de zwaartekracht",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Er is wel degelijk een reden — temperatuur.",
          "Plassen heeft niets met de teelballen te maken.",
          "Niets met zwaartekracht.",
        ],
      },
      {
        q: "Hoeveel zaadcellen zitten er ongeveer in één uitstoot van sperma?",
        options: ["~200-400 miljoen", "~10", "~1.000", "~10 miljard"],
        answer: 0,
        wrongHints: [
          null,
          "Veel te weinig — voor één bevruchting hoeft maar één zaadcel, maar er zijn er miljoenen die zwemmen.",
          "Te weinig.",
          "Te veel — niet zo'n groot aantal.",
        ],
      },
    ],
  },

  // ─── C. Cyclus + zwangerschap ───────────────
  {
    title: "De menstruatiecyclus — 28 dagen, 4 fasen",
    explanation: "Vanaf de puberteit doorloopt het vrouwelijk lichaam elke ~28 dagen een **menstruatiecyclus** — een terugkerend proces dat het lichaam voorbereidt op een mogelijke zwangerschap.\n\n**Vier fasen**:\n\n**Fase 1 — Menstruatie (dag 1-5)**\n• Begint met menstruatie: het oude **slijmvlies** van de baarmoeder (opgebouwd vorige cyclus) komt los → **bloedverlies** via de vagina.\n• Duurt typisch 3-7 dagen.\n• Hormonen (oestrogeen + progesteron) zijn laag.\n\n**Fase 2 — Opbouwfase (folliculaire fase, dag 6-13)**\n• Een nieuw eicel rijpt in een eierstok in een soort 'blaasje' (**follikel**).\n• **Oestrogeen** stijgt → het slijmvlies in de baarmoeder bouwt opnieuw op.\n\n**Fase 3 — Eisprong (ovulatie, dag 14)**\n• De rijpe eicel komt los uit de eierstok en wordt opgevangen door de eileider.\n• Hormoon-piek (LH-piek) zorgt voor de eisprong.\n• De eicel kan **~24 uur** bevrucht worden.\n• Sperma kan **~3-5 dagen** in vrouwelijk lichaam overleven, dus de **vruchtbare periode** beslaat ~5-6 dagen rond de eisprong.\n\n**Fase 4 — Wachtfase (luteale fase, dag 15-28)**\n• De lege follikel produceert **progesteron** → houdt slijmvlies dik.\n• Lichaam wacht: is er een bevruchte eicel?\n• **Geen bevruchting** → progesteron daalt → slijmvlies wordt afgebroken → cyclus begint opnieuw met menstruatie.\n• **Wel bevruchting** → eicel innestelt zich, slijmvlies blijft, geen menstruatie → eerste teken van zwangerschap.\n\n**Onregelmatigheden zijn normaal**\n• **28 dagen** is gemiddeld — sommige vrouwen hebben 23 dagen, andere 35.\n• De eerste cyclus na de menarche (eerste menstruatie, ~12-13 jaar) zijn vaak onregelmatig.\n• Stress, gewichtsschommelingen of ziekte kunnen de cyclus verstoren.\n• Bij twijfel of zorgen → huisarts.",
    svg: cyclusSvg(),
    checks: [
      {
        q: "Op welke dag van de cyclus vindt de **eisprong** ongeveer plaats?",
        options: ["Dag 14 (midden van cyclus)", "Dag 1", "Dag 28", "Elke dag"],
        answer: 0,
        wrongHints: [
          null,
          "Dag 1 is begin van menstruatie, nog ver voor eisprong.",
          "Dag 28 is einde — als geen bevruchting begint cyclus opnieuw.",
          "Eisprong is een eenmalige gebeurtenis per cyclus.",
        ],
      },
      {
        q: "Hoe lang kan een eicel **bevrucht** worden na de eisprong?",
        options: ["~24 uur", "~1 maand", "~1 week", "Onbeperkt"],
        answer: 0,
        wrongHints: [
          null,
          "Veel te lang — een eicel sterft snel af zonder bevruchting.",
          "Te lang — alleen ~24 uur.",
          "Niet onbeperkt — eicel sterft af.",
        ],
      },
      {
        q: "Wat gebeurt er als er **geen** bevruchting plaatsvindt?",
        options: [
          "Progesteron daalt, slijmvlies komt los → menstruatie",
          "Niets, de cyclus stopt",
          "De eicel wordt opnieuw gebruikt",
          "Het lichaam slaat de eicel op",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De cyclus begint juist opnieuw.",
          "Eicellen worden niet hergebruikt — ze sterven af.",
          "Eicellen worden niet opgeslagen — komen elke cyclus opnieuw uit eierstok.",
        ],
      },
    ],
  },
  {
    title: "Bevruchting + zwangerschap",
    explanation: "**Bevruchting** is het moment waarop één zaadcel zich versmelt met een eicel. Dat is het allereerste begin van een nieuw mens.\n\n**Stap voor stap**:\n\n**1. Sperma in de vagina**\nBij geslachtsgemeenschap komt sperma (~2-5 ml met ~200-400 miljoen zaadcellen) in de vagina.\n\n**2. Reis door het vrouwelijk lichaam**\nDe zaadcellen zwemmen door de baarmoeder naar de eileider. **De meeste sterven onderweg af** — alleen de sterkste/snelste komen aan. Tijd: ~30-60 minuten.\n\n**3. Eicel + zaadcel ontmoeten elkaar**\nIn de eileider kunnen ze elkaar ontmoeten als er net een eisprong is geweest. Honderden zaadcellen 'duwen' tegen de buitenkant van de eicel — maar slechts **één** kan binnenkomen. Daarna sluit de eicel zich af.\n\n**4. Versmelting**\nDe DNA van zaadcel en eicel komen samen. De bevruchte eicel heet **zygote**.\n\n**5. Innesteling (~6-10 dagen later)**\nDe zygote deelt zich tijdens de reis door de eileider naar de baarmoeder. Daar nestelt de bal van cellen zich in het slijmvlies van de baarmoederwand. Eerste teken van zwangerschap is dat de menstruatie uitblijft.\n\n**Zwangerschap — 9 maanden in fasen**:\n\n**Eerste 3 maanden (1e trimester)**\n• Embryo (later foetus) ontstaat.\n• Hart, hersenen, ledematen, organen worden aangelegd.\n• Belangrijkste fase voor invloed van leefstijl (alcohol, roken, medicijnen) → kan grote schade geven.\n• Veel ochtendmisselijkheid, vermoeidheid bij de zwangere vrouw.\n\n**Maand 4-6 (2e trimester)**\n• Foetus groeit en beweegt — moeder voelt schoppen.\n• Geslacht is via echografie te zien.\n\n**Maand 7-9 (3e trimester)**\n• Foetus groeit van ~30 cm naar ~50 cm.\n• Organen rijpen verder, vooral longen.\n• Wegen ~3-4 kg bij geboorte.\n\n**Bevalling**\n• Hormoon **oxytocine** zorgt voor weeën (samentrekkingen baarmoeder).\n• Baarmoederhals opent → kind komt via vagina naar buiten.\n• Daarna komt de **placenta** (moederkoek) eruit.\n\n**Eeneiige vs twee-eiige tweeling**\n• **Eeneiig**: één bevruchte eicel splitst → identieke tweeling, zelfde DNA, zelfde geslacht.\n• **Twee-eiig**: twee verschillende eicellen, twee verschillende zaadcellen → niet identiek, kunnen verschillend geslacht hebben.",
    svg: vrouwOrganenSvg(),
    checks: [
      {
        q: "Hoeveel zaadcellen kunnen een eicel **bevruchten**?",
        options: [
          "Slechts 1 — daarna sluit de eicel zich af",
          "Allemaal die binnen weten te komen",
          "Minimaal 100 voor een succesvolle bevruchting",
          "Geen — het gebeurt vanzelf zonder zaadcel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet allemaal — eicel sluit na de eerste die binnenkomt.",
          "Slechts één — DNA versmelt 1-op-1.",
          "Wel degelijk een zaadcel nodig.",
        ],
      },
      {
        q: "Hoe lang duurt een gemiddelde zwangerschap?",
        options: ["~9 maanden (40 weken)", "~3 maanden", "~1 jaar", "~6 maanden"],
        answer: 0,
        wrongHints: [
          null,
          "Te kort — dat is het einde van het 1e trimester.",
          "Te lang — 9 maanden is gemiddeld.",
          "Te kort — 9 maanden is gemiddeld.",
        ],
      },
      {
        q: "Wat is het verschil tussen een **eeneiige** en **twee-eiige** tweeling?",
        options: [
          "Eeneiig = 1 bevruchte eicel splitst, twee-eiig = 2 verschillende eicellen",
          "Eeneiig is altijd een meisje, twee-eiig altijd een jongen",
          "Eeneiig wordt geboren in 1 maand, twee-eiig duurt langer",
          "Geen verschil — gewoon twee namen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geslacht heeft hier niets mee te maken.",
          "Beide tweelingen worden tegelijk geboren.",
          "Wel degelijk verschil in oorsprong.",
        ],
      },
    ],
  },

  // ─── D. Puberteit ───────────────
  {
    title: "Puberteit — hormonen schakelen je lichaam over",
    explanation: "**De puberteit** is de periode waarin je lichaam van kind naar volwassene verandert — meestal tussen de **10 en 16 jaar**. Wat je voelt en ziet, komt allemaal door **hormonen** die actief worden.\n\n**Wat triggert de puberteit?**\nDe **hypofyse** in je hersenen geeft op een gegeven moment het signaal: 'maak voortplantingshormonen'. Vanaf dan:\n\n**Bij meisjes** (start ~10-13 jaar)\nEierstokken maken **oestrogeen** + **progesteron**:\n• Borsten groeien.\n• Heupen worden breder.\n• Schaamhaar + okselhaar groeit.\n• **Eerste menstruatie** (menarche) — gemiddeld ~12-13 jaar.\n• Lichaam krijgt vrouwelijke vormen door vetverdeling.\n\n**Bij jongens** (start ~11-14 jaar)\nTeelballen maken **testosteron**:\n• Spiermassa neemt toe.\n• Schouders worden breder.\n• Schaamhaar + okselhaar + baardgroei.\n• Stem verlaagt (door groei stemban).\n• Adamsappel wordt zichtbaar.\n• Eerste **zaadlozing** (vaak 's nachts — 'natte droom').\n\n**Voor iedereen**\n• **Sterke groeispurt** — soms 8-12 cm per jaar.\n• Acne (puistjes) — talgklieren in huid worden actief.\n• Sterk transpireren.\n• Stemmingswisselingen — hormonen beïnvloeden hersenen.\n• Belangstelling voor seksualiteit en relaties.\n\n**Tijdslijn is verschillend**\n• Sommigen beginnen vroeg (8-9 jaar), anderen laat (15+).\n• Normaal — geen reden voor zorg, tenzij heel extreem.\n• Vaak vergelijken jongeren zich met elkaar — onnodig.\n\n**Hersenen ontwikkelen zich ook**\n• Het 'volwassen' deel van de hersenen (frontale cortex) is pas rond je **25e** volledig ontwikkeld.\n• Verklaart waarom tieners soms impulsief zijn — ze missen nog wat van die rationele controle.\n\n**Niet alle veranderingen zijn fysiek**\n• Identiteit en seksuele oriëntatie ontwikkelen zich.\n• Vrienden worden belangrijker, ouders soms minder centraal.\n• Allemaal gezond — onderdeel van volwassen worden.",
    svg: hormoonstelselSvg("ovaria"),
    checks: [
      {
        q: "Welk hormoon stuurt mannelijke pubertijdsveranderingen?",
        options: ["Testosteron", "Oestrogeen", "Insuline", "Adrenaline"],
        answer: 0,
        wrongHints: [
          null,
          "Oestrogeen is vooral het vrouwelijke voortplantings-hormoon.",
          "Insuline regelt bloedsuiker, niet puberteit.",
          "Adrenaline is voor stress/gevaar, niet puberteit.",
        ],
      },
      {
        q: "Wat is **menarche**?",
        options: [
          "De eerste menstruatie van een meisje",
          "Een aandoening van de eierstokken",
          "Het einde van de menstruatiecyclus (menopauze)",
          "Een soort hormoon",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Menarche is een normaal begin, geen ziekte.",
          "Dat heet menopauze — en is veel later (45-55 jaar).",
          "Het is een gebeurtenis, geen hormoon.",
        ],
      },
      {
        q: "Tot welke leeftijd ontwikkelen je hersenen ongeveer nog door?",
        options: ["~25 jaar", "~16 jaar", "~12 jaar", "~40 jaar"],
        answer: 0,
        wrongHints: [
          null,
          "De hersenen blijven nog 9 jaar daarna ontwikkelen.",
          "Veel langer.",
          "Tegen die tijd is het meeste klaar.",
        ],
      },
    ],
  },

  // ─── E. Andere belangrijke hormonen ───────────────
  {
    title: "Insuline + glucagon — de bloedsuikerregeling",
    explanation: "Je lichaam moet je **bloedsuiker** in een nauw bereik houden — niet te hoog, niet te laag. Twee hormonen uit de **alvleesklier** (pancreas) regelen dit:\n\n**1. Insuline** — *verlaagt bloedsuiker*\nWanneer? Vlak ná het eten, als suiker (glucose) uit de darm in het bloed komt.\n\nWat doet het?\n• Cellen in spieren, lever en vetweefsel openen hun deuren voor glucose.\n• Glucose gaat het bloed uit en de cellen in.\n• Bloedsuiker daalt naar normaal.\n• Lever slaat overschot op als **glycogeen** (suiker-voorraad).\n\n**2. Glucagon** — *verhoogt bloedsuiker*\nWanneer? Tussen maaltijden of 's nachts, als bloedsuiker daalt.\n\nWat doet het?\n• Stuurt signaal naar de lever: 'breek glycogeen af → laat glucose vrij'.\n• Bloedsuiker stijgt naar normaal.\n\n**Samen** houden insuline en glucagon je bloedsuiker rond ~5 mmol/l, dag en nacht.\n\n**Diabetes mellitus** *(suikerziekte)*\nAls deze regeling kapot gaat, krijg je **diabetes**. Twee types:\n\n**Type 1** *(meestal vanaf jonge leeftijd)*\n• Het immuunsysteem heeft per ongeluk de **insulineproducerende cellen** in de alvleesklier vernietigd.\n• Geen insuline meer.\n• Patiënten moeten **dagelijks insuline injecteren** (of via pomp).\n• Niet te genezen, maar goed te managen.\n\n**Type 2** *(meestal vanaf ~40 jaar)*\n• Lichaam maakt nog wel insuline, maar cellen reageren er minder goed op (**insuline-resistentie**).\n• Vaak gerelateerd aan overgewicht, weinig beweging, ongezond eten.\n• Begint vaak met dieet + beweging, soms pillen, soms uiteindelijk insuline.\n• In vroegere jaren 'ouderdomsdiabetes' genoemd, maar nu krijgen ook jongeren het door slechte leefstijl.\n\n**Symptomen van diabetes (te hoge bloedsuiker)**:\n• Veel plassen + veel dorst.\n• Vermoeidheid.\n• Wazig zien.\n• Onbedoelde gewichtsverlies (type 1).\n\n**Risico bij diabetes**: te lang te hoge bloedsuiker beschadigt **bloedvaten** → schade aan ogen, nieren, voeten. Vandaar het belang van goede regulatie.",
    svg: hormoonstelselSvg("alvleesklier"),
    checks: [
      {
        q: "Wat doet **insuline**?",
        options: [
          "Verlaagt bloedsuiker (laat glucose in cellen)",
          "Verhoogt bloedsuiker",
          "Bestrijdt infecties",
          "Maakt zaadcellen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — dat doet glucagon.",
          "Niets met afweer — wel met suiker.",
          "Niet de taak van insuline.",
        ],
      },
      {
        q: "Wat is het verschil tussen **diabetes type 1** en **type 2**?",
        options: [
          "Type 1: geen insuline meer; type 2: cellen reageren slecht op insuline",
          "Type 1 is licht, type 2 is zwaar",
          "Type 2 is besmettelijk, type 1 niet",
          "Geen verschil",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Beide kunnen ernstig zijn — verschil zit in oorzaak.",
          "Diabetes is NIET besmettelijk.",
          "Wel degelijk verschil in oorzaak en behandeling.",
        ],
      },
    ],
  },
  {
    title: "Adrenaline + schildklierhormoon",
    explanation: "Naast voortplanting en bloedsuiker hebben hormonen nog veel meer belangrijke functies. Twee belangrijke groepen:\n\n**A. Adrenaline + cortisol — de stress-hormonen** *(uit de bijnieren)*\n\n**Adrenaline** wordt afgegeven bij **acuut gevaar of opwinding**:\n• Hartslag versnelt.\n• Bloeddruk stijgt.\n• Pupillen verwijden (beter zicht).\n• Spieren krijgen meer bloed.\n• Spijsvertering stopt tijdelijk.\n• Lichaam maakt extra glucose vrij voor energie.\n\nDit heet de **'fight-or-flight'-response** — je lichaam zet zich klaar om te vluchten of te vechten. Werkt binnen seconden, weg na ~minuten.\n\n**Cortisol** is het **lange-termijn stress-hormoon**:\n• Werkt langzamer maar veel langer.\n• Onderdrukt immuunsysteem.\n• Houdt bloedsuiker hoog (voor langdurige actie).\n\n**Probleem**: chronische stress → **te veel cortisol** te lang → kan ziektes veroorzaken (slapeloosheid, gewichtstoename, depressie, hartproblemen). Daarom zijn ontspanning + slaap echt belangrijk.\n\n**B. Schildklierhormonen** *(uit de schildklier)*\n\nDe schildklier maakt **T3 en T4** — die regelen je **stofwisselingssnelheid**:\n• Hoe snel je lichaam energie verbrandt.\n• Lichaamstemperatuur.\n• Hartslag in rust.\n\n**Te weinig schildklierhormoon** = **hypothyreoïdie** *(zelden bij jongeren, vaker bij vrouwen 40+)*\n• Symptomen: moe, koud, gewichtstoename, traag, verstopping.\n• Behandeling: dagelijks pilletje schildklierhormoon — meestal lukt het goed.\n\n**Te veel schildklierhormoon** = **hyperthyreoïdie**\n• Symptomen: onrustig, transpireren, gewichtsverlies, snelle hartslag, slecht slapen.\n• Vaak ziekte van Graves of een overactieve knobbel.\n• Behandeling: medicijnen, jodium-therapie, of operatie.\n\n**Iodium en de schildklier**\nDe schildklier heeft **jodium** nodig om hormonen te maken. Te weinig jodium → vergroting van de schildklier (**struma** of **krop**), zichtbaar in de hals. Daarom heeft Nederlands brood verplicht een beetje jodium toegevoegd via bakkerszout — voorkomt jodiumtekort.",
    svg: hormoonstelselSvg("bijnier"),
    checks: [
      {
        q: "Wat is de **fight-or-flight**-response?",
        options: [
          "Lichaam maakt zich klaar voor actie via adrenaline",
          "Slapen na een drukke dag",
          "Insuline na het eten",
          "Spijsvertering",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — fight-or-flight is juist actie, geen rust.",
          "Niet over suiker — over gevaar/stress.",
          "Spijsvertering wordt juist tijdens fight-or-flight onderdrukt.",
        ],
      },
      {
        q: "Wat doet schildklierhormoon vooral?",
        options: [
          "Regelt stofwisselingssnelheid (energie verbranden)",
          "Maakt zaadcellen",
          "Bestrijdt bacteriën",
          "Reguleert slaap",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Zaadcellen komen uit de teelballen.",
          "Niet de taak van schildklier.",
          "Slaap wordt vooral door melatonine geregeld.",
        ],
      },
    ],
  },

  // ─── F. Hormoonziektes + eindopdracht ───────────────
  {
    title: "Veelvoorkomende hormoonziektes",
    explanation: "Als hormoonklieren te veel of te weinig hormoon maken, krijg je een **hormoonziekte** (endocriene aandoening). Een paar voorbeelden zonder al te veel detail:\n\n**Ziekten van de schildklier**\n• **Hypothyreoïdie** (te traag): moe, koud, gewichtstoename → behandeling met dagelijks pilletje schildklierhormoon.\n• **Hyperthyreoïdie** (te actief): onrustig, transpireren, gewichtsverlies → medicijnen of jodium-therapie.\n• **Struma**: vergrote schildklier door jodium-tekort.\n\n**Diabetes** (besproken eerder)\n• Type 1: geen insuline meer (auto-immuun).\n• Type 2: insuline-resistentie (vaak leefstijl-gerelateerd).\n\n**Ziekten van de hypofyse**\n• **Acromegalie**: te veel groeihormoon bij volwassenen → handen, voeten, kaak groeien door.\n• **Reuzengroei** (gigantisme): te veel groeihormoon bij kinderen → extreem lang.\n• **Dwerggroei**: te weinig groeihormoon bij kinderen → klein blijven.\n\n**Ziekten van de bijnieren**\n• **Ziekte van Cushing**: te veel cortisol → 'maangezicht', vetaccumulatie buik, dunne huid.\n• **Ziekte van Addison**: te weinig cortisol → vermoeid, lage bloeddruk, donkere huid.\n\n**Geslachts-hormoonproblemen**\n• **PCOS** *(polycysteus ovarium syndroom)*: bij vrouwen, hormonaal onbalans, onregelmatige cyclus, soms vruchtbaarheidsproblemen — komt voor bij ~5-10% vrouwen.\n• **Lage testosteron** bij mannen: energieverlies, libido-daling, soms behandelbaar.\n\n**Wat hebben alle hormoonziektes gemeen?**\n• Diagnose vaak via **bloedonderzoek** (hormoonwaarden meten).\n• Behandeling vaak met **hormonen-pillen** of **operatie** (bv. schildklier weghalen).\n• Veel hormoonziekten zijn levenslang maar **goed te managen**.\n\n**Anticonceptie + hormonen**\n• De **anticonceptiepil** bevat synthetische versies van oestrogeen + progesteron.\n• Onderdrukt de eisprong → geen bevruchting mogelijk.\n• ~99% effectief bij correct gebruik.\n• Andere hormonale opties: pleister, implantaat, hormoonspiraal, prikpil.\n\n**Wanneer naar de huisarts?**\n• Onverklaarde gewichtsverandering.\n• Plotselinge stemmings-veranderingen.\n• Onregelmatige cyclus die jou dwarszit.\n• Veel dorst + plassen.\n• Extreme moeheid die niet over gaat.\n\nDe huisarts kan met simpel bloedonderzoek veel uitsluiten of bevestigen.",
    svg: hormoonstelselSvg(),
    checks: [
      {
        q: "Hoe wordt **diabetes type 1** behandeld?",
        options: [
          "Dagelijks insuline injecteren of via pomp",
          "Alleen dieet",
          "Operatie aan de alvleesklier",
          "Antibiotica",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij type 1 is dieet alleen onvoldoende — er komt geen insuline meer.",
          "Operatie wordt zelden bij type 1 gedaan.",
          "Antibiotica zijn voor bacteriën, niet voor diabetes.",
        ],
      },
      {
        q: "Wat is **PCOS**?",
        options: [
          "Een hormonaal onbalans-syndroom bij vrouwen",
          "Een soort virus",
          "Een type huidziekte",
          "Een vitaminetekort",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet besmettelijk — geen virus.",
          "Niet vooral de huid — een hormoon-syndroom.",
          "Niet vitamine, hormonaal.",
        ],
      },
    ],
  },

  // ─── F2. Eindopdracht ───────────────
  {
    title: "Eindopdracht — koppel hormoon aan klier en functie",
    explanation: "Tijd om alles toe te passen! Bij elk hormoon: in welke **klier** wordt het gemaakt, en wat is de **functie**?\n\n**Snelle samenvatting**:\n\n| Hormoon | Klier | Functie |\n|---|---|---|\n| Insuline | Alvleesklier | Verlaagt bloedsuiker |\n| Glucagon | Alvleesklier | Verhoogt bloedsuiker |\n| Adrenaline | Bijnieren | Vlucht-of-vechtreactie |\n| Cortisol | Bijnieren | Lange-termijn stress |\n| Testosteron | Teelballen | Mannelijke kenmerken + zaadcellen |\n| Oestrogeen | Eierstokken | Vrouwelijke kenmerken + cyclus |\n| Progesteron | Eierstokken | Slijmvlies in stand houden |\n| Schildklierhormoon | Schildklier | Stofwisselingssnelheid |\n| Groeihormoon | Hypofyse | Lichaamslengte/groei |\n| Melatonine | Pijnappelklier | Slaap-waakritme |\n\n**Veel succes!**",
    svg: hormoonstelselSvg(),
    checks: [
      {
        q: "Welk hormoon wordt gemaakt in de **eierstokken**?",
        options: ["Oestrogeen", "Insuline", "Adrenaline", "Schildklierhormoon"],
        answer: 0,
        wrongHints: [
          null,
          "Insuline komt uit de alvleesklier.",
          "Adrenaline komt uit de bijnieren.",
          "Schildklierhormoon komt uit de schildklier.",
        ],
      },
      {
        q: "Welk hormoon zorgt voor de **vlucht-of-vechtreactie**?",
        options: ["Adrenaline", "Insuline", "Oestrogeen", "Melatonine"],
        answer: 0,
        wrongHints: [
          null,
          "Insuline gaat over bloedsuiker, niet stress.",
          "Oestrogeen is voortplantings-hormoon.",
          "Melatonine gaat over slaap.",
        ],
      },
      {
        q: "Wat doet **progesteron**?",
        options: [
          "Houdt het slijmvlies in de baarmoeder in stand",
          "Verlaagt bloedsuiker",
          "Maakt zaadcellen",
          "Reguleert slaap",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is insuline.",
          "Zaadcellen worden gemaakt onder invloed van testosteron.",
          "Dat is melatonine.",
        ],
      },
      {
        q: "Op welke dag van de cyclus is de **eisprong** ongeveer?",
        options: ["~Dag 14", "~Dag 1", "~Dag 28", "~Dag 7"],
        answer: 0,
        wrongHints: [
          null,
          "Dag 1 is begin van menstruatie.",
          "Dag 28 is einde van cyclus.",
          "Te vroeg.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const voortplantingHormonenBiologie = {
  id: "voortplanting-hormonen-biologie",
  title: "Voortplanting en hormonen",
  emoji: "🧬",
  level: "klas2-3",
  subject: "biologie",
  intro:
    "Hoe het hormoonstelsel werkt en hoe het voortplantingssysteem in elkaar zit. Van wat hormonen zijn tot de menstruatiecyclus, bevruchting, zwangerschap en puberteit. Plus belangrijke andere hormonen zoals insuline, adrenaline en schildklierhormoon, en wat er gebeurt als ze fout gaan. Examenstof biologie CSE.",
  triggerKeywords: [
    "hormonen", "hormoon", "hormoonstelsel", "endocrien",
    "hypofyse", "schildklier", "bijnieren", "alvleesklier", "pancreas",
    "eierstok", "eierstokken", "ovaria",
    "teelbal", "teelballen", "testes",
    "voortplanting", "voortplantingsorganen",
    "menstruatie", "menstruatiecyclus", "cyclus",
    "ovulatie", "eisprong",
    "oestrogeen", "progesteron", "testosteron",
    "puberteit", "menarche", "menopauze",
    "bevruchting", "zwangerschap", "embryo", "foetus",
    "tweeling", "eeneiig", "twee-eiig",
    "anticonceptie", "anticonceptiepil",
    "insuline", "glucagon", "diabetes", "suikerziekte",
    "diabetes type 1", "diabetes type 2",
    "adrenaline", "cortisol", "stress hormoon",
    "schildklierhormoon", "hyperthyreoidie", "hypothyreoidie",
    "groeihormoon", "melatonine",
    "pcos", "cushing", "addison",
  ],
  chapters,
  steps,
};

export default voortplantingHormonenBiologie;
