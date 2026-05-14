// Leerpad: Goniometrie basis (sin/cos/tan)
// Klas 3+ stof. 11 stappen, 4 hoofdstukken.

const COLORS = {
  curve: "#00c853",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const stepEmojis = ["📐", "🏷️", "🔤", "📏", "📐", "📏", "🔄", "🎯", "🧮", "🏢", "🏆", "📝"];

const chapters = [
  { letter: "A", title: "Rechthoekige driehoek herhaling", emoji: "📐", from: 0, to: 1 },
  { letter: "B", title: "Sinus, cosinus, tangens", emoji: "🔤", from: 2, to: 5 },
  { letter: "C", title: "Hoek of zijde uitrekenen", emoji: "🎯", from: 6, to: 8 },
  { letter: "D", title: "Toepassingen + eindopdracht", emoji: "🏆", from: 9, to: 10 },
  { letter: "E", title: "Examenstijl — VMBO-GT CSE", emoji: "📝", from: 11, to: 11 },
];

const steps = [
  {
    title: "Rechthoekige driehoek — drie zijden",
    explanation: "Goniometrie bouwt voort op de **rechthoekige driehoek** uit het Pythagoras-leerpad. Snel ophalen:\n\n• De driehoek heeft één **rechte hoek** (90°).\n• De zijde **tegenover** de rechte hoek = **schuine zijde** (hypotenusa). Altijd de langste.\n• De andere twee zijden = **rechthoekszijden**.\n\nIn goniometrie geven we de twee rechthoekszijden specifiekere namen, afhankelijk van **welke hoek** we bekijken (niet de rechte hoek, maar één van de andere twee — meestal noem je 'm α, 'alfa').\n\nWat we straks gaan doen: **vanuit een hoek de verhoudingen tussen zijden bestuderen**. Dat geeft sin, cos en tan.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="60,160 220,160 60,40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2.5"/>
<rect x="60" y="142" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<text x="50" y="180" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">A</text>
<text x="225" y="180" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">B</text>
<text x="55" y="32" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">C</text>
<path d="M 200 160 A 25 25 0 0 0 188 145" fill="none" stroke="${COLORS.point}" stroke-width="1.5"/>
<text x="190" y="152" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">α</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">we kijken vanuit hoek α (niet de rechte hoek)</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel rechte hoeken heeft een rechthoekige driehoek?",
        options: ["1", "2", "3", "0"],
        answer: 0,
        wrongHints: [null, "Wat is de hoekensom in een driehoek? Past dat bij twee rechte hoeken?", "Past dat bij de hoekensom van een driehoek?", "Een 'rechthoekige driehoek' heeft per definitie hoeveel rechte hoeken in z'n naam zitten?"],
        uitlegPad: {
          stappen: [{ titel: "1 rechte hoek", tekst: "Een rechthoekige driehoek heeft 1 hoek van 90°." }],
          woorden: [{ woord: "rechte hoek", uitleg: "90° hoek" }],
          theorie: "Hoeken-som driehoek = 180°. Twee rechte hoeken zou 180° gebruiken, geen ruimte voor 3e.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Andere 2 hoeken samen 90°" }],
          basiskennis: [{ onderwerp: "som=180°", uitleg: "α + β + 90° = 180°" }],
          niveaus: { basis: "1 rechte hoek (90°). De andere 2 zijn samen 90°.", simpeler: "Naam zegt 't al: één rechte hoek.", nogSimpeler: "Slechts 1." },
        },
      },
    ],
  },
  {
    title: "Tegenoverstaand, aanliggend, schuin",
    explanation: "Vanuit een **gekozen hoek α** krijgen de drie zijden eigen namen:\n\n• **Schuine zijde** (hypotenusa) — tegenover de rechte hoek. Altijd dezelfde, ongeacht welke α je kiest.\n• **Tegenoverstaand** — de rechthoekszijde **tegenover** hoek α (niet aanrakend).\n• **Aanliggend** — de rechthoekszijde die **bij** hoek α ligt (raakt α aan, **niet** de schuine zijde).\n\n**Truc**: kijk vanuit α. Welke zijde 'kijkt α aan' (raakt 'm aan)? = aanliggend. Welke zit aan de overkant? = tegenoverstaand. De derde (langste) is schuine zijde.\n\nWissel je van hoek (van α naar de andere niet-rechte hoek), dan wisselen aanliggend en tegenoverstaand om!",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="60,160 220,160 60,40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2.5"/>
<rect x="60" y="142" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<path d="M 200 160 A 25 25 0 0 0 188 145" fill="none" stroke="${COLORS.point}" stroke-width="1.5"/>
<text x="190" y="152" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">α</text>
<text x="140" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">aanliggend</text>
<text x="35" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">tegen-</text>
<text x="35" y="115" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">overstaand</text>
<text x="155" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">schuine zijde</text>
</svg>`,
    checks: [
      {
        q: "Welke zijde is altijd hetzelfde, ongeacht welke hoek je bekijkt?",
        options: ["Schuine zijde", "Tegenoverstaand", "Aanliggend", "Maakt niet uit"],
        answer: 0,
        wrongHints: [null, "Tegenoverstaand wisselt als je van hoek wisselt.", "Aanliggend wisselt ook.", "De schuine zijde is uniek — altijd tegenover de 90°-hoek."],
        uitlegPad: {
          stappen: [{ titel: "Schuine = uniek", tekst: "Schuine zijde ligt tegenover de 90°-hoek en wisselt nooit." }],
          woorden: [{ woord: "schuine zijde", uitleg: "= hypotenusa, langste zijde" }],
          theorie: "Aanliggend/tegenover wisselen als je van α wisselt; schuine niet.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Als α naar β verschuift: aanl ↔ tegen, schuine blijft" }],
          basiskennis: [{ onderwerp: "altijd langste", uitleg: "schuin > beide rechthoekszijden" }],
          niveaus: { basis: "Schuine zijde — altijd tegenover 90°.", simpeler: "Langste blijft langste.", nogSimpeler: "Hypotenusa is constant." },
        },
      },
    ],
  },
  {
    title: "Sinus, cosinus, tangens — drie verhoudingen",
    explanation: "Goniometrie definieert drie **verhoudingen** vanuit hoek α:\n\n**sin α = tegenoverstaand / schuine zijde**\n**cos α = aanliggend / schuine zijde**\n**tan α = tegenoverstaand / aanliggend**\n\nDeze waardes zijn voor élke α tussen 0° en 90° **vast** — onafhankelijk van hoe groot de driehoek is. Een grote 30°-driehoek heeft dezelfde sin/cos/tan als een kleine 30°-driehoek.\n\n**Onthoudtruc**: **SOS-CAS-TOA**\n• **S**in = **O**verstaand / **S**chuin\n• **C**os = **A**anliggend / **S**chuin\n• **T**an = **O**verstaand / **A**anliggend\n\n(Of in het Engels: SOH-CAH-TOA met **H**ypotenuse).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="20" width="260" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<text x="150" y="45" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">SOS - CAS - TOA</text>
<line x1="20" y1="55" x2="280" y2="55" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="40" y="80" fill="${COLORS.text}" font-size="13" font-family="Arial">sin α =</text>
<text x="160" y="80" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">tegenover / schuin</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="13" font-family="Arial">cos α =</text>
<text x="160" y="110" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">aanliggend / schuin</text>
<text x="40" y="140" fill="${COLORS.text}" font-size="13" font-family="Arial">tan α =</text>
<text x="160" y="140" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">tegenover / aanliggend</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">onafhankelijk van grootte van de driehoek</text>
</svg>`,
    checks: [
      {
        q: "Wat is de formule voor sin α?",
        options: [
          "tegenoverstaand / schuine zijde",
          "aanliggend / schuine zijde",
          "tegenoverstaand / aanliggend",
          "schuine zijde / tegenoverstaand",
        ],
        answer: 0,
        wrongHints: [null, "Dat is cos α (CAS).", "Dat is tan α (TOA).", "Andersom — sin = tegenover / schuin."],
        uitlegPad: {
          stappen: [{ titel: "SOS", tekst: "Sin = Overstaand / Schuin." }],
          woorden: [{ woord: "sin", uitleg: "tegenover ÷ schuine zijde" }],
          theorie: "SOS-CAS-TOA: 3 verhoudingen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "sin 30° = 0,5 (tegenover = halve schuine)" }],
          basiskennis: [{ onderwerp: "TOA", uitleg: "tan = tegenover/aanliggend (geen schuin)" }],
          niveaus: { basis: "sin α = tegenoverstaand / schuine zijde.", simpeler: "S(in) = O(verstaand) / S(chuin).", nogSimpeler: "Sin = boven ÷ langste." },
        },
      },
    ],
  },
  {
    title: "Sin/cos/tan met de rekenmachine",
    explanation: "Op je rekenmachine staan **sin**, **cos**, **tan**-knoppen. Tik een hoek in (in graden!) en je krijgt het kommagetal.\n\n**Voorbeelden** (met rekenmachine):\n• sin 30° = **0,5**\n• cos 60° = **0,5**\n• tan 45° = **1**\n• sin 45° ≈ **0,707**\n• cos 30° ≈ **0,866**\n\n**Belangrijk**: zorg dat je rekenmachine in **DEG-modus** (graden) staat, niet RAD (radialen). Anders krijg je rare antwoorden.\n\n**Speciale waardes** (handig om uit het hoofd):\n\n| α | sin | cos | tan |\n|---|-----|-----|-----|\n| 0° | 0 | 1 | 0 |\n| 30° | 0,5 | 0,866 | 0,577 |\n| 45° | 0,707 | 0,707 | 1 |\n| 60° | 0,866 | 0,5 | 1,732 |\n| 90° | 1 | 0 | — |",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="40" y1="48" x2="260" y2="48" stroke="${COLORS.curve}" stroke-width="1"/>
<line x1="100" y1="20" x2="100" y2="190" stroke="${COLORS.curve}" stroke-width="0.7"/>
<line x1="160" y1="20" x2="160" y2="190" stroke="${COLORS.curve}" stroke-width="0.7"/>
<line x1="220" y1="20" x2="220" y2="190" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="70" y="40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="11" font-family="Arial">α</text>
<text x="130" y="40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="11" font-family="Arial">sin</text>
<text x="190" y="40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="11" font-family="Arial">cos</text>
<text x="240" y="40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="11" font-family="Arial">tan</text>
<text x="70" y="70" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">0°</text>
<text x="130" y="70" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">0</text>
<text x="190" y="70" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">1</text>
<text x="240" y="70" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">0</text>
<text x="70" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">30°</text>
<text x="130" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">0,5</text>
<text x="190" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">0,87</text>
<text x="240" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">0,58</text>
<text x="70" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">45°</text>
<text x="130" y="130" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">0,71</text>
<text x="190" y="130" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">0,71</text>
<text x="240" y="130" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">1</text>
<text x="70" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">60°</text>
<text x="130" y="160" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">0,87</text>
<text x="190" y="160" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">0,5</text>
<text x="240" y="160" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">1,73</text>
<text x="70" y="183" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">90°</text>
<text x="130" y="183" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">1</text>
<text x="190" y="183" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">0</text>
<text x="240" y="183" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">—</text>
</svg>`,
    checks: [
      {
        q: "Wat is sin 30°?",
        options: ["0,5", "0,87", "1", "30"],
        answer: 0,
        wrongHints: [null, "0,87 = sin 60° of cos 30°.", "1 = sin 90° of tan 45°.", "Niet de hoek zelf — gebruik de tabel of rekenmachine."],
        uitlegPad: {
          stappen: [{ titel: "sin 30° = 0,5", tekst: "Tabel/rekenmachine: sin 30° = exact 0,5." }],
          woorden: [{ woord: "DEG-modus", uitleg: "graden op rekenmachine" }],
          theorie: "Speciale waardes: sin 0°=0, sin 30°=0,5, sin 45°≈0,71, sin 60°≈0,87, sin 90°=1.",
          voorbeelden: [{ type: "voorbeeld", tekst: "sin 30° = 1/2" }],
          basiskennis: [{ onderwerp: "uit hoofd", uitleg: "30°/45°/60° handig om te onthouden" }],
          niveaus: { basis: "sin 30° = 0,5.", simpeler: "Bij 30° is sin de helft.", nogSimpeler: "0,5 = 1/2." },
        },
      },
    ],
  },
  {
    title: "Een zijde berekenen — sin",
    explanation: "Met **sin α** kun je een **zijde** uitrekenen als je de hoek én de schuine zijde kent.\n\n**Voorbeeld**: rechthoekige driehoek met α = 30° en schuine zijde = 10 cm. Hoe lang is de tegenoverstaande zijde?\n\nFormule: **sin α = tegenover / schuin**\n→ tegenover = sin α × schuin\n→ tegenover = sin 30° × 10 = 0,5 × 10 = **5 cm**\n\n**Stappenplan**:\n1. Kijk welke zijden je hebt en zoekt.\n2. Kies juiste verhouding (sin/cos/tan).\n3. Schrijf formule op, vul in.\n4. Reken uit.\n\n**Trucje voor zijde**: vermenigvuldig de verhouding met de bekende zijde.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="60,160 220,160 60,40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2"/>
<rect x="60" y="142" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<path d="M 200 160 A 25 25 0 0 0 188 145" fill="none" stroke="${COLORS.point}" stroke-width="1.5"/>
<text x="190" y="152" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">30°</text>
<text x="155" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">10</text>
<text x="40" y="100" text-anchor="middle" fill="${COLORS.curve}" font-size="12" font-family="Arial" font-weight="bold">?</text>
<text x="55" y="32" fill="${COLORS.muted}" font-size="10" font-family="Arial">tegenover</text>
<text x="240" y="70" fill="${COLORS.text}" font-size="11" font-family="Arial">sin 30° = ?/10</text>
<text x="240" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">0,5 = ?/10</text>
<rect x="220" y="108" width="60" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="250" y="128" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">5 cm</text>
</svg>`,
    checks: [
      {
        q: "α = 30°, schuine zijde 20. Hoe lang is de tegenoverstaande?",
        options: ["10", "5", "0,5", "20"],
        answer: 0,
        wrongHints: [null, "5 zou kloppen bij schuin = 10. Hier schuin = 20: 0,5 × 20 = 10.", "0,5 is sin 30°, niet de zijde. Vermenigvuldig met schuin: 0,5 × 20 = 10.", "Schuin is 20, maar je zoekt tegenover. sin 30° × 20 = 10."],
        uitlegPad: {
          stappen: [{ titel: "sin × schuin", tekst: "tegenover = sin 30° × 20 = 0,5 × 20 = 10." }],
          woorden: [{ woord: "formule", uitleg: "tegenover = sin α × schuin" }],
          theorie: "sin α = tegen/schuin → tegen = sin α · schuin.",
          voorbeelden: [{ type: "voorbeeld", tekst: "0,5 × 20 = 10" }],
          basiskennis: [{ onderwerp: "halveren", uitleg: "sin 30° = 0,5 → halveert schuine" }],
          niveaus: { basis: "0,5 × 20 = 10.", simpeler: "Halve van 20 = 10.", nogSimpeler: "20 ÷ 2 = 10." },
        },
      },
    ],
  },
  {
    title: "Wanneer welke verhouding kiezen",
    explanation: "Welke van sin / cos / tan kies je? Hangt af van **welke twee zijden** je hebt of zoekt:\n\n• Heb je tegenover + schuin? → **sin**\n• Heb je aanliggend + schuine zijde? → **cos**\n• Heb je tegenover + aanliggend (geen schuine)? → **tan**\n\n**Stap voor stap**:\n1. Identificeer welke twee zijden in het probleem voorkomen.\n2. Kies de verhouding die exact die twee zijden gebruikt.\n3. Vul in en los op.\n\n**Voorbeeld**: hoek α = 40°, **aanliggend** = 8 cm, schuine zijde **gezocht**.\n• Beide zijden: aanliggend + schuin → **cos**.\n• cos 40° = 8 / schuin\n• schuin = 8 / cos 40° = 8 / 0,766 ≈ **10,4**",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="55" y="50" fill="${COLORS.text}" font-size="13" font-family="Arial">tegenover + schuin</text>
<text x="220" y="50" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">→ sin</text>
<text x="55" y="85" fill="${COLORS.text}" font-size="13" font-family="Arial">aanliggend + schuin</text>
<text x="220" y="85" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">→ cos</text>
<text x="55" y="120" fill="${COLORS.text}" font-size="13" font-family="Arial">tegenover + aanliggend</text>
<text x="220" y="120" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">→ tan</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">welke twee zijden? = welke verhouding</text>
</svg>`,
    checks: [
      {
        q: "Je hebt α en de aanliggende zijde. Je zoekt de schuine zijde. Welke verhouding?",
        options: ["cos", "sin", "tan", "geen"],
        answer: 0,
        wrongHints: [null, "sin gebruikt tegenoverstaand + schuin. Hier heb je aanliggend.", "tan heeft geen schuine zijde erin.", "Cos werkt: cos α = aanliggend / schuin."],
        uitlegPad: {
          stappen: [{ titel: "Aanliggend + schuin → cos", tekst: "Aanl en schuin in formule = CAS = cos." }],
          woorden: [{ woord: "kiezen", uitleg: "welke 2 zijden bepalen sin/cos/tan" }],
          theorie: "tegen+schuin=sin, aanl+schuin=cos, tegen+aanl=tan.",
          voorbeelden: [{ type: "voorbeeld", tekst: "cos 40° = 8/schuin" }],
          basiskennis: [{ onderwerp: "SOS-CAS-TOA", uitleg: "kies op basis van zijden" }],
          niveaus: { basis: "Aanliggend + schuin → cos.", simpeler: "Geen tegen-zijde? Cos kiezen.", nogSimpeler: "Letter A in CAS = aanliggend." },
        },
      },
    ],
  },
  {
    title: "Hoek uitrekenen — sin⁻¹, cos⁻¹, tan⁻¹",
    explanation: "Andersom: heb je twee **zijden** en zoek je de **hoek**? Gebruik de **inverse** functies.\n\nOp je rekenmachine: **sin⁻¹** (of 'arcsin'), **cos⁻¹**, **tan⁻¹** (vaak met SHIFT-toets).\n\n**Voorbeeld**: rechthoekige driehoek met tegenover = 5, schuine = 10. Hoeveel graden is α?\n• sin α = 5 / 10 = 0,5\n• α = sin⁻¹(0,5) = **30°**\n\n**Stappenplan**:\n1. Bereken de verhouding: deel een zijde door een ander.\n2. Pas inverse toe op je rekenmachine.\n3. Lees de hoek af.\n\n**Voorbeeld 2**: aanliggend = 4, tegenover = 4 (gelijk). Welke α?\n• tan α = 4 / 4 = 1\n• α = tan⁻¹(1) = **45°**",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="60,160 220,160 60,40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2"/>
<rect x="60" y="142" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<path d="M 200 160 A 25 25 0 0 0 188 145" fill="none" stroke="${COLORS.point}" stroke-width="1.5"/>
<text x="190" y="152" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">α=?</text>
<text x="155" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">10</text>
<text x="42" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">5</text>
<text x="240" y="60" fill="${COLORS.text}" font-size="11" font-family="Arial">sin α = 5/10 = 0,5</text>
<text x="240" y="85" fill="${COLORS.text}" font-size="11" font-family="Arial">α = sin⁻¹(0,5)</text>
<rect x="220" y="100" width="70" height="34" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="255" y="121" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">α = 30°</text>
</svg>`,
    checks: [
      {
        q: "tegenover = 7, aanliggend = 7. Welke α (gebruik tan⁻¹)?",
        options: ["45°", "30°", "60°", "90°"],
        answer: 0,
        wrongHints: [null, "tan⁻¹(1) = 45°, niet 30°.", "tan⁻¹(1) = 45°.", "90° heeft tan = oneindig."],
        uitlegPad: {
          stappen: [{ titel: "tan⁻¹(1) = 45°", tekst: "tan α = 7/7 = 1. α = tan⁻¹(1) = 45°." }],
          woorden: [{ woord: "inverse", uitleg: "sin⁻¹/cos⁻¹/tan⁻¹ vinden hoek terug" }],
          theorie: "Twee gelijke rechthoekszijden → 45°-driehoek.",
          voorbeelden: [{ type: "voorbeeld", tekst: "tan 45° = 1, dus tan⁻¹(1) = 45°" }],
          basiskennis: [{ onderwerp: "rekenmachine", uitleg: "SHIFT + tan-knop" }],
          niveaus: { basis: "tan α = 1 → α = 45°.", simpeler: "Gelijke zijden → 45°.", nogSimpeler: "Halve rechte hoek = 45°." },
        },
      },
    ],
  },
  {
    title: "Stappenplan: hoek of zijde?",
    explanation: "**Hoek zoeken** vs **zijde zoeken** — verschillend recept:\n\n**Zijde zoeken**:\n1. Hoek + 1 zijde gegeven.\n2. Kies sin/cos/tan op basis van welke zijden.\n3. Formule: zijde_zoek = sin/cos/tan(α) × bekende_zijde, of bekende / sin/cos/tan(α).\n4. Reken met sin/cos/tan-knop.\n\n**Hoek zoeken**:\n1. 2 zijden gegeven (geen hoek).\n2. Kies sin/cos/tan op basis van welke zijden.\n3. Formule: verhouding = zijde1 / zijde2.\n4. α = sin⁻¹/cos⁻¹/tan⁻¹(verhouding) — gebruik inverse-knop.\n\n**Trucje**: kijk altijd naar wat je weet en zoekt — van daar kies je formule.\n\nVoor wiskundetoetsen: schrijf formule áltijd op vóór je rekent. Voorkomt fouten.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">stappenplan</text>
<line x1="40" y1="55" x2="260" y2="55" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="78" fill="${COLORS.curve}" font-size="12" font-family="Arial" font-weight="bold">zijde zoeken:</text>
<text x="55" y="98" fill="${COLORS.text}" font-size="11" font-family="Arial">hoek + 1 zijde gegeven</text>
<text x="55" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">→ gebruik sin/cos/tan</text>
<line x1="40" y1="130" x2="260" y2="130" stroke="${COLORS.curve}" stroke-width="0.5" opacity="0.5"/>
<text x="55" y="150" fill="${COLORS.curveAlt}" font-size="12" font-family="Arial" font-weight="bold">hoek zoeken:</text>
<text x="55" y="170" fill="${COLORS.text}" font-size="11" font-family="Arial">2 zijden gegeven</text>
<text x="55" y="187" fill="${COLORS.text}" font-size="11" font-family="Arial">→ gebruik sin⁻¹/cos⁻¹/tan⁻¹</text>
</svg>`,
    checks: [
      {
        q: "Je weet alleen 2 zijden, geen hoek. Wat moet je gebruiken?",
        options: ["Inverse (sin⁻¹/cos⁻¹/tan⁻¹)", "Pythagoras", "sin/cos/tan zelf", "Geen van deze"],
        answer: 0,
        wrongHints: [null, "Pythagoras is voor zijde-uit-2-zijden, niet hoek.", "Die gebruik je als je een hoek **hebt**. Hier zoek je 'm.", "Inverse functies werken — kies één daarvan."],
        uitlegPad: {
          stappen: [{ titel: "Hoek zoeken = inverse", tekst: "2 zijden → verhouding → inverse functie (sin⁻¹/cos⁻¹/tan⁻¹) → hoek." }],
          woorden: [{ woord: "inverse", uitleg: "rekenmachine SHIFT-knop" }],
          theorie: "Sin/cos/tan zelf: hoek → kommagetal. Inverse: kommagetal → hoek.",
          voorbeelden: [{ type: "voorbeeld", tekst: "tan⁻¹(8/6) ≈ 53°" }],
          basiskennis: [{ onderwerp: "kies via zijden", uitleg: "welke 2 zijden = welke verhouding" }],
          niveaus: { basis: "2 zijden geen hoek → inverse.", simpeler: "SHIFT + sin/cos/tan.", nogSimpeler: "Inverse-knop." },
        },
      },
    ],
  },
  {
    title: "Toepassing: hoogte van een gebouw",
    explanation: "**Praktisch**. Een persoon staat **20 meter** van een gebouw af. Vanaf zijn ogen kijkt hij omhoog onder een hoek van **35°** naar de top. Hoe hoog is het gebouw (boven ooghoogte)?\n\n**Tekening maken**: rechthoekige driehoek\n• Aanliggend = 20 m (afstand)\n• Tegenover = h (hoogte boven ooghoogte)\n• Hoek α = 35°\n\n**Welke verhouding?** aanliggend + tegenover (geen schuin) → **tan**.\n\n• tan 35° = h / 20\n• h = tan 35° × 20\n• h = 0,7 × 20 = **14 meter** (afgerond)\n\n**Plus ooghoogte** (~1,7 m) → totale gebouwhoogte ≈ 15,7 m.\n\nDit is een standaard goniometrie-toepassing: meet een afstand + meet een hoek met een hoekmeter, en je weet de hoogte zonder te klimmen.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="160" x2="260" y2="160" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="220" y1="160" x2="220" y2="50" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="232" y="100" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial">h = ?</text>
<line x1="60" y1="160" x2="220" y2="50" stroke="${COLORS.point}" stroke-width="2"/>
<rect x="208" y="148" width="12" height="12" fill="none" stroke="${COLORS.text}" stroke-width="1"/>
<path d="M 100 160 A 30 30 0 0 0 95 140" fill="none" stroke="${COLORS.point}" stroke-width="1.5"/>
<text x="105" y="150" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">35°</text>
<text x="140" y="175" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">20 m</text>
<text x="50" y="175" fill="${COLORS.muted}" font-size="11" font-family="Arial">👤</text>
<text x="225" y="45" fill="${COLORS.muted}" font-size="14" font-family="Arial">🏢</text>
<text x="150" y="192" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">tan 35° × 20 ≈ 14 m</text>
</svg>`,
    checks: [
      {
        q: "Hoek α en aanliggend gegeven, tegenover gezocht. Welke formule?",
        options: ["tegenover = tan α × aanliggend", "tegenover = sin α × aanliggend", "tegenover = cos α / aanliggend", "tegenover = aanliggend / tan α"],
        answer: 0,
        wrongHints: [null, "sin α gebruikt schuin, niet aanliggend.", "Niet delen — vermenigvuldig met tan α.", "Andersom — tegenover = tan α × aanliggend."],
        uitlegPad: {
          stappen: [{ titel: "TOA herschrijven", tekst: "tan α = tegen/aanl → tegen = tan α × aanl." }],
          woorden: [{ woord: "tan α", uitleg: "tegenover ÷ aanliggend" }],
          theorie: "Vermenigvuldig beide kanten met aanliggend om tegenover te isoleren.",
          voorbeelden: [{ type: "voorbeeld", tekst: "tan 35° × 20 ≈ 14 m" }],
          basiskennis: [{ onderwerp: "geen schuin", uitleg: "alleen rechthoekszijden → tan" }],
          niveaus: { basis: "tegen = tan α × aanl.", simpeler: "Tan keer aanliggend = tegenover.", nogSimpeler: "tan × aanl = tegen." },
        },
      },
    ],
  },
  {
    title: "Eindopdracht",
    explanation: "**Drie korte vragen**:\n\n**A**: rechthoekige driehoek, α = 60°, schuine zijde 12. Tegenover = ?\n• sin 60° = 0,87\n• tegenover = sin 60° × 12 = 0,87 × 12 ≈ **10,4**\n\n**B**: aanliggend = 6, tegenover = 8. Hoek α = ?\n• tan α = 8/6 ≈ 1,33\n• α = tan⁻¹(1,33) ≈ **53°**\n\n**C**: schuine zijde = 13, aanliggend = 12. cos α = ?\n• cos α = 12 / 13 ≈ 0,923\n• α ≈ **23°**\n\n**Recap**:\n- SOS-CAS-TOA → kies de juiste verhouding\n- Zijde zoeken: hoek + 1 zijde + sin/cos/tan\n- Hoek zoeken: 2 zijden + sin⁻¹/cos⁻¹/tan⁻¹\n- Reken in graden (DEG-modus)\n\nGoed gedaan — je hebt het goniometrie-leerpad doorlopen!",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="32" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">A. tegenover = sin 60° × 12 =</text>
<rect x="200" y="18" width="80" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="240" y="37" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">≈ 10,4</text>
<text x="55" y="82" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">B. α = tan⁻¹(8/6) =</text>
<rect x="200" y="68" width="80" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="240" y="87" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">≈ 53°</text>
<text x="55" y="132" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">C. α = cos⁻¹(12/13) =</text>
<rect x="200" y="118" width="80" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="240" y="137" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">≈ 23°</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">goniometrie onder de knie 🏆</text>
</svg>`,
    checks: [
      {
        q: "α = 45°, schuine zijde 8. Tegenover = ?",
        options: [
          "≈ 5,7",
          "8",
          "0,71",
          "≈ 4",
        ],
        answer: 0,
        wrongHints: [null, "Te veel — schuin × sin 45° = 8 × 0,71 ≈ 5,7.", "0,71 is sin 45°, niet de zijde. Vermenigvuldig met 8.", "Te weinig. Reken: 8 × 0,71 ≈ 5,7."],
        uitlegPad: {
          stappen: [{ titel: "sin × schuin", tekst: "tegen = sin 45° × 8 ≈ 0,71 × 8 ≈ 5,7." }],
          woorden: [{ woord: "sin 45°", uitleg: "≈ 0,707" }],
          theorie: "Hoek + schuin → sin × schuin = tegenover.",
          voorbeelden: [{ type: "voorbeeld", tekst: "0,71 × 8 = 5,66 ≈ 5,7" }],
          basiskennis: [{ onderwerp: "45°-driehoek", uitleg: "rechthoekszijden gelijk" }],
          niveaus: { basis: "≈ 5,7.", simpeler: "0,71 × 8 ≈ 5,7.", nogSimpeler: "Ongeveer 6." },
        },
      },
    ],
  },
  // ─── E. Examenstijl — VMBO-GT CSE ─────────────────────────
  {
    title: "CSE-vraag — schuin dak van een schuur",
    explanation: "Klassieke CSE-context: een **schuin dak** of **steile helling** waarvan je hoogte of afstand met sin/cos/tan moet uitrekenen.\n\n> **Een schuurdak heeft een schuine kant van 6,0 m lang.** Het dak maakt een hoek van 35° met de horizontale grond.\n\n**Aanpak in 3 stappen — onthoud SOS-CAS-TOA:**\n• **S**in = Overstaand / Schuin\n• **C**os = Aanliggend / Schuin\n• **T**an = Overstaand / Aanliggend\n\n1. **Hoogte van de dak-top** (overstaand bij 35°): sin 35° = h / 6,0 → h = 6,0 × sin 35° ≈ 6,0 × 0,5736 ≈ **3,4 m**.\n2. **Horizontale lengte** (aanliggend): cos 35° = b / 6,0 → b = 6,0 × cos 35° ≈ 6,0 × 0,8192 ≈ **4,9 m**.\n3. **Check met Pythagoras**: 3,4² + 4,9² = 11,56 + 24,01 = 35,57 → √35,57 ≈ 5,96 ≈ 6,0 ✓\n\n**Examen-tips**:\n• Teken de driehoek én markeer de hoek waarop je werkt.\n• Schrijf de juiste verhouding op (S/C/T) vóór je de rekenmachine gebruikt.\n• Rekenmachine in **DEG-stand** (graden), niet RAD.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="160" x2="280" y2="160" stroke="#8899aa" stroke-width="1.5"/>
<polygon points="60,160 240,160 240,90" fill="rgba(0,200,83,0.15)" stroke="#00c853" stroke-width="2"/>
<line x1="60" y1="160" x2="240" y2="90" stroke="#ffd54f" stroke-width="2.5"/>
<text x="115" y="120" fill="#ffd54f" font-size="11" font-family="Arial" font-weight="bold">6,0 m</text>
<text x="148" y="178" fill="#42a5f5" font-size="10" font-family="Arial" font-weight="bold">b = 4,9 m</text>
<text x="248" y="128" fill="#ef5350" font-size="10" font-family="Arial" font-weight="bold">h = 3,4 m</text>
<path d="M 80 160 A 22 22 0 0 0 81 153" fill="none" stroke="#ff7043" stroke-width="2"/>
<text x="92" y="155" fill="#ff7043" font-size="11" font-family="Arial" font-weight="bold">35°</text>
<rect x="225" y="145" width="15" height="15" fill="none" stroke="#00c853" stroke-width="1"/>
</svg>`,
    checks: [
      {
        q: "Welke verhouding gebruik je om de **hoogte h** uit te rekenen?",
        options: ["sin 35° = h / 6,0", "cos 35° = h / 6,0", "tan 35° = h / 6,0", "h = 6,0 / 35"],
        answer: 0,
        wrongHints: [
          null,
          "cos verbindt aanliggend met schuin. Hoogte is over-staand bij 35°.",
          "tan verbindt overstaand met aanliggend, niet met schuin.",
          "Niet zomaar delen door de hoek — gebruik sin/cos/tan.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Hoogte = overstaand bij 35°", tekst: "Overstaand + schuin → sin. sin 35° = h/6,0." }],
          woorden: [{ woord: "overstaand", uitleg: "tegenover de hoek 35°" }],
          theorie: "h ligt tegenover 35°, schuine zijde 6,0 m → sin.",
          voorbeelden: [{ type: "voorbeeld", tekst: "SOS: Sin = Overstaand/Schuin" }],
          basiskennis: [{ onderwerp: "kiezen", uitleg: "welke 2 zijden zijn betrokken?" }],
          niveaus: { basis: "sin 35° = h/6,0.", simpeler: "SOS: tegen/schuin = sin.", nogSimpeler: "Hoogte/schuin = sin." },
        },
      },
      {
        q: "Wat is de **hoogte h** afgerond op 1 decimaal? (sin 35° ≈ 0,5736)",
        options: ["3,4 m", "4,9 m", "5,7 m", "10,5 m"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de horizontale afstand b (cos 35° × 6,0).",
          "Je hebt de waarde van sin verward — sin 35° ≈ 0,5736, NIET 0,71.",
          "Je hebt 6,0 / sin 35° gedaan i.p.v. 6,0 × sin 35°.",
        ],
        uitlegPad: {
          stappen: [{ titel: "h = sin 35° × 6,0", tekst: "0,5736 × 6,0 ≈ 3,4 m." }],
          woorden: [{ woord: "vermenigvuldigen", uitleg: "niet delen — schuin × sin = tegen" }],
          theorie: "sin 35° = h/6,0 → h = sin 35° × 6,0.",
          voorbeelden: [{ type: "voorbeeld", tekst: "0,5736 × 6,0 = 3,44" }],
          basiskennis: [{ onderwerp: "afronden", uitleg: "1 decimaal → 3,4" }],
          niveaus: { basis: "3,4 m.", simpeler: "0,57 × 6 ≈ 3,4.", nogSimpeler: "≈ 3,4 m." },
        },
      },
      {
        q: "Wat is de **horizontale afstand b** afgerond? (cos 35° ≈ 0,8192)",
        options: ["4,9 m", "3,4 m", "10,5 m", "7,3 m"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de hoogte (sin × 6,0), niet de horizontale afstand.",
          "Je hebt 6,0 / cos 35° gedaan i.p.v. 6,0 × cos 35°.",
          "Niet — reken 6,0 × 0,8192 ≈ 4,9.",
        ],
        uitlegPad: {
          stappen: [{ titel: "b = cos 35° × 6,0", tekst: "0,8192 × 6,0 ≈ 4,9 m." }],
          woorden: [{ woord: "aanliggend", uitleg: "horizontale zijde, raakt 35°" }],
          theorie: "cos 35° = b/6,0 → b = cos 35° × 6,0.",
          voorbeelden: [{ type: "voorbeeld", tekst: "0,8192 × 6 = 4,9" }],
          basiskennis: [{ onderwerp: "check", uitleg: "3,4² + 4,9² ≈ 6,0² ✓ Pythagoras" }],
          niveaus: { basis: "4,9 m.", simpeler: "0,82 × 6 ≈ 4,9.", nogSimpeler: "≈ 4,9 m." },
        },
      },
      { q: "**SOSCASTOA** — wat staat SOH voor?", options: ["Sinus = Overstaand / Hypotenusa","Sinus = Schuin / Overstaand","Sinus = Onder / Hoog","Sinus = Som / Hoogte"], answer: 0, wrongHints: [null,"Klopt — Sinus = Overstaande zijde ÷ Hypotenusa.","Andersom — O staat boven H.","Niet — geen onder/hoog.","Niet — geen som."] },
      { q: "Driehoek met hoek 30°, hypotenusa 10. Overstaand?", options: ["5","8,66","10","3"], answer: 0, wrongHints: [null,"Klopt — sin 30° = 0,5. 0,5 × 10 = 5.","Dat is aanliggend (cos 30°).","Niet — moet kleiner zijn.","Niet."] },
      { q: "Wat is **tan 45°**?", options: ["1","0","√2","0,5"], answer: 0, wrongHints: [null,"Klopt — bij 45° zijn overstaand + aanliggend gelijk. Tan = 1.","Niet — alleen tan 0° = 0.","Niet — dat is sin 45° of cos 45°.","Niet — tan 30° = ongeveer 0,58."] },
      { q: "**Pythagoras**: a²+b²=? wanneer a=3, b=4", options: ["c=5","c=7","c=12","c=25"], answer: 0, wrongHints: [null,"Klopt — 9+16=25, √25=5.","Optellen ipv kwadraat.","Vermenigvuldigen ipv +.","Niet trek wortel."] },
      { q: "Hoek tussen schuin en grond is 60°. Welke zijde langste?", options: ["Hypotenusa","Aanliggend","Overstaand","Allemaal gelijk"], answer: 0, wrongHints: [null,"Klopt — hypotenusa is altijd langste in rechthoekige driehoek.","Niet — afhankelijk hoek.","Niet — overstaand kleiner dan hypotenusa.","Niet — driehoek meestal niet gelijkzijdig."] },
      { q: "Welke is correct? sin² 30° + cos² 30° = ?", options: ["1","0","2","½"], answer: 0, wrongHints: [null,"Klopt — beroemde identiteit sin²x + cos²x = 1.","Niet — minimum 0.","Niet — max 1.","Niet."] },
      { q: "Tan 0° = ?", options: ["0","1","∞","−1"], answer: 0, wrongHints: [null,"Klopt — bij 0° heeft driehoek geen overstaand, tan = 0.","Tan 45°.","Tan 90°.","Niet."] },
      { q: "Bij **rechthoekige driehoek** — wat is altijd 90°?", options: ["1 hoek (de rechte hoek)","2 hoeken","Alle 3 hoeken","Geen"], answer: 0, wrongHints: [null,"Klopt — daar komt naam vandaan.","Niet — andere 2 zijn samen 90° (niet elk).","Niet — som alle hoeken altijd 180°.","Wel — dat hoort bij rechthoekig."] },
      { q: "Som van 3 hoeken in elke driehoek = ?", options: ["180°","90°","270°","360°"], answer: 0, wrongHints: [null,"Klopt — fundamentele driehoek-eigenschap.","Dat is 1 rechte hoek.","Niet — alleen 180°.","Dat is volledige cirkel."] },
      { q: "Welke functie groeit eindeloos bij benadering 90°?", options: ["tan","sin","cos","Allebei"], answer: 0, wrongHints: [null,"Klopt — tan 90° = oneindig (gedefinieerd undefined).","Niet — sin 90° = 1.","Niet — cos 90° = 0.","Niet — 2 zijn begrensd."] },
      { q: "In een rechthoekige driehoek met hoek 60°: tan 60° ≈ ?", options: ["1,73 (√3)","0,5","1,41","2"], answer: 0, wrongHints: [null,"Klopt — √3 ≈ 1,732. Belangrijke waarde.","Sin 30° / cos 60°.","√2 — bij 45°.","Niet."] },
      { q: "Driehoek hoek 30°, aanliggend 6 cm. Overstaand = ?", options: ["3,46 cm (6×tan 30°)","12 cm","6 cm","2 cm"], answer: 0, wrongHints: [null,"Klopt — tan 30° ≈ 0,577. 6 × 0,577 ≈ 3,46.","Dubbel — verkeerd.","Geen verandering — geen vermenigvuldiging.","Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const goniometrie = {
  id: "goniometrie",
  title: "Goniometrie (sin/cos/tan)",
  emoji: "📐",
  level: "klas3-vwo",
  subject: "wiskunde",
  referentieNiveau: "3S",
  sloThema: "Meetkunde — goniometrie (sin/cos/tan)",
  topics: ["WI.meetkunde.gonio"],
  prerequisites: [
    { id: "pythagoras", title: "Pythagoras", niveau: "vmbo-2F" },
    { id: "verhoudingen", title: "Verhoudingen", niveau: "vmbo-2F" },
  ],
  intro: "Goniometrie gaat over de verhoudingen tussen zijden in een rechthoekige driehoek, vanuit een gekozen hoek. Met sin, cos en tan kun je elke onbekende zijde of hoek uitrekenen — handig om hoogtes te bepalen zonder te meten.",
  triggerKeywords: ["sinus", "cosinus", "tangens", "sin", "cos", "tan", "goniometrie", "SOS-CAS-TOA"],
  chapters,
  steps,
};

export default goniometrie;
