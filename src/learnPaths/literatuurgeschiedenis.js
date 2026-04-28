// Leerpad: Literatuurgeschiedenis Nederlands — havo 4
// 14 stappen in 5 hoofdstukken (A t/m E).
// Niveau: havo 4-5, examenstof literatuur Nederlands (canon-overzicht).
// Tone: feitelijk en herkenbaar — geen lange citaten, wel genoeg context per
// periode om herkennings-vragen te kunnen beantwoorden.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  goodSoft: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  blue: "#5b86b8",
  paars: "#a060ff",
  rood: "#e53935",
  oker: "#bf8f30",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = [
  "📜", "📅",                          // A. Inleiding
  "⚔️", "🎭", "🕯️",                   // B. Vroege periodes
  "🌹", "🔬", "🌀",                    // C. 19e + vroege 20e eeuw
  "🌈", "🪞", "📱",                    // D. Naoorlogs
  "👁️", "✨", "🏆",                    // E. Begrippen + eindopdracht
];

const chapters = [
  { letter: "A", title: "Inleiding", emoji: "📜", from: 0, to: 1 },
  { letter: "B", title: "Vroege periodes (500-1800)", emoji: "🕯️", from: 2, to: 4 },
  { letter: "C", title: "19e + vroege 20e eeuw", emoji: "🌹", from: 5, to: 7 },
  { letter: "D", title: "Naoorlogs (1945-nu)", emoji: "📱", from: 8, to: 10 },
  { letter: "E", title: "Begrippen + eindopdracht", emoji: "🏆", from: 11, to: 13 },
];

const steps = [
  // ─── A. Inleiding ─────────────────────────────────────
  {
    title: "Wat moet je weten op havo 4?",
    explanation: "Literatuurgeschiedenis is een vast onderdeel van het Nederlandse schoolexamen op havo. Je moet:\n\n**1. Stromingen herkennen** in de tijd (van Middeleeuwen tot nu).\n**2. Kenmerken per stroming** kunnen noemen.\n**3. Belangrijkste schrijvers en titels** koppelen aan hun stroming.\n**4. Een gelezen werk plaatsen** in een stroming, met argumenten.\n**5. Literaire begrippen** kunnen toepassen (vertelperspectief, stijlfiguren).\n\n**Wat je NIET hoeft te weten op havo**:\n• Geen letterlijke jaartallen — globale tijdvakken volstaan.\n• Geen volledige canon van honderden namen — focus op de **belangrijkste** per stroming.\n• Geen literatuurtheorie op universitair niveau.\n\n**Tip voor de boekenlijst**:\nJe leerkracht laat je waarschijnlijk een **leesdossier** vullen met enkele werken (vaak 8 voor havo). Kies werken uit verschillende periodes — dan kun je per werk een ander tijdvak bespreken bij het mondeling.\n\n**Hoe dit leerpad werkt**:\n• 9 stromingen — 1 stap per stroming, in chronologische volgorde.\n• Per stroming: tijdperk, kenmerken, hoofdgenres, top-3 schrijvers met hun bekendste werk.\n• Daarna: 2 stappen literaire begrippen.\n• Eindopdracht: gemixte herkennings-vragen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">examenstof literatuur havo 4</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">✓ stromingen + tijdvakken</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">✓ kenmerken per stroming</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">✓ top-schrijvers + bekendste werk</text>
<text x="35" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">✓ leesdossier-werk plaatsen in stroming</text>
<text x="35" y="146" fill="${COLORS.text}" font-size="11" font-family="Arial">✓ literaire begrippen toepassen</text>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">geen letterlijke jaartallen — globale tijdvakken</text>
</svg>`,
    checks: [
      {
        q: "*Wat is op havo 4 NIET vereist bij literatuurgeschiedenis?*",
        options: [
          "Letterlijke jaartallen van geboorte/sterfte van elke schrijver kennen",
          "Een gelezen werk in een stroming kunnen plaatsen",
          "Kenmerken van stromingen kunnen noemen",
          "Top-schrijvers per stroming herkennen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een werk in een stroming plaatsen is wel kernstof — daar gaat een leesdossier-mondeling over.",
          "Kenmerken per stroming zijn juist examenstof. Dit hoort er wel bij.",
          "Top-schrijvers + bekendste werk per stroming hoor je op het examen wél te kennen.",
        ],
      },
    ],
  },
  {
    title: "Tijdvakken-overzicht",
    explanation: "De Nederlandse literatuurgeschiedenis kent **9 hoofdstromingen** die je voor havo 4 moet kunnen plaatsen:\n\n| # | Stroming | Tijdvak | Kern-kenmerk |\n|---|---|---|---|\n| 1 | **Middeleeuwen** | ~500-1500 | religie + ridderverhalen, mondeling |\n| 2 | **Renaissance / Gouden Eeuw** | ~1500-1700 | klassieke vorm, drama, herontdekt |\n| 3 | **Verlichting** | ~1700-1800 | rede, wetenschap, satire |\n| 4 | **Romantiek** | ~1800-1880 | gevoel, natuur, individu |\n| 5 | **Realisme / Naturalisme** | ~1880-1900 | waarheid, sociale wantoestanden |\n| 6 | **Modernisme** | ~1900-1945 | vorm-experiment, vervreemding |\n| 7 | **Vijftigers** | ~1945-1965 | poëzie-experiment, vrije vorm |\n| 8 | **Postmodernisme** | ~1965-2000 | ironie, intertekstualiteit, dood-thema |\n| 9 | **Eigentijds** | ~2000-nu | autobiografisch, multicultureel |\n\n**Geheugensteun voor de volgorde**:\n*\"Middeleeuwers Reden Verlicht: Romantiek Realiseert Modern, Vijftig Postmodern Eigen.\"*\n\n(Onthoud: de M-R-V-R-R-M-V-P-E volgorde.)\n\n**Belangrijk — overgangen zijn vloeiend**:\nStromingen overlappen; sommige schrijvers zijn lastig in één hokje te plaatsen. Couperus bijvoorbeeld bevindt zich op het grensgebied van realisme en symbolisme. Bij examen vragen ze meestal naar een **kern-stroming**, niet naar randgevallen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">9 stromingen op tijdlijn</text>
<line x1="30" y1="55" x2="270" y2="55" stroke="${COLORS.axis}" stroke-width="0.5"/>
<line x1="35" y1="135" x2="265" y2="135" stroke="${COLORS.muted}" stroke-width="2"/>
<text x="38" y="155" fill="${COLORS.muted}" font-size="9" font-family="Arial">500</text>
<text x="100" y="155" fill="${COLORS.muted}" font-size="9" font-family="Arial">1500</text>
<text x="155" y="155" fill="${COLORS.muted}" font-size="9" font-family="Arial">1800</text>
<text x="200" y="155" fill="${COLORS.muted}" font-size="9" font-family="Arial">1900</text>
<text x="240" y="155" fill="${COLORS.muted}" font-size="9" font-family="Arial">nu</text>
<circle cx="65" cy="135" r="4" fill="${COLORS.oker}"/>
<text x="65" y="125" text-anchor="middle" fill="${COLORS.oker}" font-size="9" font-family="Arial" font-weight="bold">M.eeuwen</text>
<circle cx="115" cy="135" r="4" fill="${COLORS.alt}"/>
<text x="115" y="125" text-anchor="middle" fill="${COLORS.alt}" font-size="9" font-family="Arial" font-weight="bold">Renaiss.</text>
<circle cx="145" cy="135" r="4" fill="${COLORS.warm}"/>
<text x="145" y="115" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold">Verl.</text>
<circle cx="175" cy="135" r="4" fill="${COLORS.rood}"/>
<text x="175" y="125" text-anchor="middle" fill="${COLORS.rood}" font-size="9" font-family="Arial" font-weight="bold">Rom.</text>
<circle cx="205" cy="135" r="4" fill="${COLORS.good}"/>
<text x="205" y="115" text-anchor="middle" fill="${COLORS.good}" font-size="9" font-family="Arial" font-weight="bold">Real.</text>
<circle cx="225" cy="135" r="4" fill="${COLORS.blue}"/>
<text x="225" y="125" text-anchor="middle" fill="${COLORS.blue}" font-size="9" font-family="Arial" font-weight="bold">Mod.</text>
<circle cx="248" cy="135" r="4" fill="${COLORS.paars}"/>
<text x="248" y="115" text-anchor="middle" fill="${COLORS.paars}" font-size="9" font-family="Arial" font-weight="bold">Postm.</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">geheugensteun: M-R-V-R-R-M-V-P-E</text>
</svg>`,
    checks: [
      {
        q: "*Welke stroming komt het eerst in de tijd?*",
        options: [
          "Middeleeuwen",
          "Renaissance",
          "Romantiek",
          "Modernisme",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Renaissance kwam ná de Middeleeuwen, vanaf ~1500.",
          "Romantiek is veel later (~1800).",
          "Modernisme is 20e-eeuw — bijna het einde van het overzicht.",
        ],
      },
    ],
  },

  // ─── B. Vroege periodes ───────────────────────────────
  {
    title: "Middeleeuwen (~500-1500)",
    explanation: "**Tijdperk**: vroege middeleeuwen tot ~1500. Geen drukpers (komt pas rond 1450), dus literatuur was lang **mondeling overgeleverd**.\n\n**Kern-kenmerken**:\n• **Religieus** — kerk bepaalt grotendeels wat geschreven wordt\n• **Anoniem** — schrijvers vaak onbekend (\"de schrijver van Karel ende Elegast\")\n• **Mondelinge traditie** — verzen, rijm, herhaling om te onthouden\n• **Standen-maatschappij** — adel + geestelijkheid + boeren in vaste rollen\n• **Ridder-ideaal** — moed, trouw, eer, dienstbaarheid aan vorst en kerk\n\n**Hoofdgenres**:\n1. **Ridderepiek** — ridderverhalen vol heldendaden\n2. **Hagiografie** — heiligenlevens (vroom voorbeeld)\n3. **Mystiek** — religieuze liefdesgedichten van mystici\n4. **Drama** — abel spelen, sotternieën (kluchten), mirakelspelen\n5. **Volksboeken** (laat-middeleeuws) — verhalenbundels in proza\n\n**Belangrijkste werken / namen**:\n• ***Karel ende Elegast*** — ridderverhaal over Karel de Grote en de mysterieuze Elegast\n• ***Beatrijs*** — over een non die het klooster ontvlucht voor een geliefde, Maria zorgt voor haar\n• ***Reinaert de Vos*** (Reinaerde de Vos) — satirisch dierenverhaal van Willem die Madoc maakte\n• ***Mariken van Nieumeghen*** — meisje verkoopt ziel aan duivel, redt zich via Maria\n• ***Lanseloet van Denemerken*** — abel spel (wereldlijk drama)\n• **Hadewijch** — mystieke poëzie, Brabantse begijn\n\n**Examen-tip**: bij twijfel of een tekst middeleeuws is, kijk naar: religieuze ondertoon, anoniem, in verzen, ridder/non/heilige als hoofdpersoon → wijst op Middeleeuwen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.oker}" font-size="13" font-family="Arial" font-weight="bold">Middeleeuwen ~500-1500</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">📜 anoniem · mondeling · religieus</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">⚔️ ridder-ideaal: moed + trouw + eer</text>
<line x1="30" y1="105" x2="270" y2="105" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="124" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">top-werken:</text>
<text x="35" y="140" fill="${COLORS.text}" font-size="10" font-family="Arial">• Karel ende Elegast (ridderepiek)</text>
<text x="35" y="155" fill="${COLORS.text}" font-size="10" font-family="Arial">• Beatrijs (Maria-mirakel)</text>
<text x="35" y="170" fill="${COLORS.text}" font-size="10" font-family="Arial">• Reinaert de Vos (satire)</text>
</svg>`,
    checks: [
      {
        q: "*Welk werk hoort bij de Middeleeuwen?*",
        options: [
          "Karel ende Elegast",
          "Max Havelaar",
          "De avonden",
          "Eline Vere",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Max Havelaar is van Multatuli (Romantiek/Realisme, ~1860).",
          "De avonden is van Reve (postmodern, 1947).",
          "Eline Vere is van Couperus (Realisme/Naturalisme, ~1889).",
        ],
      },
      {
        q: "*Welk kenmerk past het BEST bij middeleeuwse literatuur?*",
        options: [
          "Anoniem en religieus, vaak in verzen",
          "Subjectief en gevoelig, focus op natuur",
          "Vorm-experimenteel en vervreemdend",
          "Ironisch en intertekstueel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Subjectief + gevoel + natuur = Romantiek (~1800-1880).",
          "Vorm-experiment + vervreemding = Modernisme (~1900-1945).",
          "Ironie + intertekstualiteit = Postmodernisme (~1965-2000).",
        ],
      },
    ],
  },
  {
    title: "Renaissance & Gouden Eeuw (~1500-1700)",
    explanation: "**Tijdperk**: 1500-1700. Renaissance = \"wedergeboorte\" — herontdekking van de **klassieke oudheid** (Grieken, Romeinen). Nederland beleeft de **Gouden Eeuw** in de 17e eeuw: economische bloei, kunst en literatuur op hoog niveau.\n\n**Kern-kenmerken**:\n• **Klassieke vorm** — strikte versmaten, alexandrijnen, regels uit antieke poëtica\n• **Wereldlijk thema** naast religieus — liefde, eer, politiek\n• **Schrijvers met naam** — geen anonimiteit meer (drukpers!)\n• **Drama bloeit** — toneel als hoogste kunstvorm\n• **Geletterde elite** — schrijvers vaak welgesteld of geleerd\n• **Latijn** als tweede taal van de geletterden — werken vol klassieke verwijzingen\n\n**Hoofdgenres**:\n1. **Treurspel / tragedie** — naar Grieks-Romeins voorbeeld (Sofokles, Seneca)\n2. **Lyriek** — sonnet, ode\n3. **Klucht / blijspel** — komisch toneel\n4. **Emblematiek** — embleem-gedichten (plaatje + spreuk + uitleg)\n\n**Belangrijkste schrijvers (\"Muiderkring\")**:\n• **Joost van den Vondel** — *Gysbreght van Aemstel*, *Lucifer*, *Jephta* (treurspelen). Grootste toneelschrijver van NL.\n• **P.C. Hooft** — *Granida* (herdersspel), historische werken (*Nederlandsche Historiën*), sonnetten.\n• **Bredero** — *De Spaanschen Brabander* (klucht-komedie over een opschepperige Brabander)\n• **Constantijn Huygens** — diplomaat-dichter, vader van Christiaan\n• **Jacob Cats** — \"Vader Cats\", populaire moraliserende verzen\n\n**Examen-tip**: Vondel = treurspel. Bredero = klucht. Hooft = sonnet/historie. Niet door elkaar halen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">Renaissance / Gouden Eeuw ~1500-1700</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">🎭 klassieke vorm · drama bloeit</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">📚 wereldlijk + religieus · met naam</text>
<line x1="30" y1="105" x2="270" y2="105" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="124" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">top-3:</text>
<text x="35" y="140" fill="${COLORS.text}" font-size="10" font-family="Arial">• Vondel — Gysbreght (treurspel)</text>
<text x="35" y="155" fill="${COLORS.text}" font-size="10" font-family="Arial">• Hooft — sonnetten, historie</text>
<text x="35" y="170" fill="${COLORS.text}" font-size="10" font-family="Arial">• Bredero — Spaanschen Brabander (klucht)</text>
</svg>`,
    checks: [
      {
        q: "*Wie is de auteur van het treurspel \"Gysbreght van Aemstel\"?*",
        options: [
          "Joost van den Vondel",
          "P.C. Hooft",
          "Bredero",
          "Multatuli",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Hooft schreef Granida en historische werken — niet Gysbreght.",
          "Bredero is bekend van zijn klucht De Spaanschen Brabander.",
          "Multatuli leefde 200 jaar later (Romantiek/Realisme).",
        ],
      },
    ],
  },
  {
    title: "Verlichting (~1700-1800)",
    explanation: "**Tijdperk**: 18e eeuw. Eeuw van de **rede** — vertrouwen in wetenschap, logica, vooruitgang. Religie neemt een stap terug, mens centraal.\n\n**Kern-kenmerken**:\n• **Verstand boven gevoel** — rationeel denken hoog gewaardeerd\n• **Optimisme** — geloof in vooruitgang, betere wereld door kennis\n• **Kritiek op kerk en macht** — autoriteit moet zich verantwoorden\n• **Burgerlijke moraal** — opvoeding, fatsoen, deugd\n• **Internationaal** — veel ideeën uit Frankrijk (Voltaire, Diderot, Rousseau) en Duitsland (Kant)\n\n**Hoofdgenres**:\n1. **Briefroman** — verhaal in vorm van briefwisseling (intimiteit + meerdere stemmen)\n2. **Satirische tijdschriften** — kritische, ironische artikelen over de samenleving\n3. **Filosofische essays**\n4. **Educatieve romans** — verhalen met opvoedend doel\n\n**Belangrijkste schrijvers**:\n• **Wolff & Deken** — Betje Wolff & Aagje Deken, samen ***Sara Burgerhart*** (1782): briefroman, eerste echte Nederlandse roman, opvoedend portret van een jonge vrouw die zich tussen verleidingen door moet vechten\n• **Justus van Effen** — *De Hollandsche Spectator* (satirisch tijdschrift, 1731)\n• **Hieronymus van Alphen** — kindergedichten (\"Jantje zag eens pruimen hangen\") — opvoedend\n• **Willem Bilderdijk** — overgang naar Romantiek\n\n**Examen-tip**: typische zin uit een Verlichting-werk klinkt zakelijk en moraliserend (\"Een welopgevoede jongeling beheerst zijn driften\"). Geen overweldigend gevoel — verstand voert de boventoon.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">Verlichting ~1700-1800</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">🕯️ rede · wetenschap · vooruitgang</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">📜 satire · briefroman · opvoeding</text>
<line x1="30" y1="105" x2="270" y2="105" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="124" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">top-werk:</text>
<text x="35" y="142" fill="${COLORS.text}" font-size="10" font-family="Arial">• Wolff & Deken — Sara Burgerhart</text>
<text x="35" y="158" fill="${COLORS.text}" font-size="10" font-family="Arial">  (1782, eerste NL briefroman)</text>
<text x="35" y "176" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">verstand boven gevoel</text>
</svg>`,
    checks: [
      {
        q: "*Welke roman is een product van de Verlichting?*",
        options: [
          "Sara Burgerhart (Wolff & Deken, 1782)",
          "Max Havelaar (Multatuli, 1860)",
          "Eline Vere (Couperus, 1889)",
          "De avonden (Reve, 1947)",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Max Havelaar is van 1860 — dat is Romantiek/realisme, niet meer Verlichting.",
          "Eline Vere is uit 1889 — Realisme/Naturalisme.",
          "De avonden is naoorlogs (1947) — postmodern.",
        ],
      },
    ],
  },

  // ─── C. 19e + vroege 20e eeuw ─────────────────────────
  {
    title: "Romantiek (~1800-1880)",
    explanation: "**Tijdperk**: ~1800-1880. Reactie op de koele rede van de Verlichting. Nu staat het **gevoel** centraal.\n\n**Kern-kenmerken**:\n• **Gevoel boven verstand** — emotie, hartstocht, melancholie\n• **Het individu** — uniek, gevoelig, vaak miskend\n• **Natuur als spiegel** — woeste landschappen, stormen, ongerept\n• **Verlangen naar het verre** — naar het verleden (Middeleeuwen worden geromantiseerd), naar verre landen, naar het bovennatuurlijke\n• **Kunstenaar als genie** — boven de massa, lijdt onder de werkelijkheid\n• **Maatschappijkritiek** — de wereld klopt niet, het lot van armen wordt aangeklaagd\n\n**Hoofdgenres**:\n1. **Lyriek** — gevoelige poëzie, vaak in ik-vorm\n2. **Historische roman** — verleden romantisch geschilderd\n3. **Aanklacht-literatuur** — sociale misstanden zichtbaar maken\n\n**Belangrijkste schrijvers**:\n• **Multatuli** (= Eduard Douwes Dekker) — ***Max Havelaar*** (1860): aanklacht tegen het koloniale beleid in Nederlands-Indië, mengt fictie en non-fictie\n• **Hildebrand** (= Nicolaas Beets) — ***Camera Obscura*** (1839): humoristische schetsen van Nederlandse types\n• **Willem Bilderdijk** — religieus-hartstochtelijk dichter\n• **Isaäc da Costa** — christelijk-romantisch, *Vijf en Twintig Jaren* (1840)\n\n**Examen-tip**: bij een romantisch werk val je vaak op aan **\"ik\"** als verteller, **emotionele uitroepen**, **natuurbeschrijvingen** als spiegel van gemoedstoestand, en/of een **idealistische** of zelfs naïef-gevoelige toon.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.rood}" font-size="13" font-family="Arial" font-weight="bold">Romantiek ~1800-1880</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">🌹 gevoel boven verstand</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">🌲 natuur als spiegel · ik-vorm</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">⚖️ aanklacht tegen onrecht</text>
<line x1="30" y1="123" x2="270" y2="123" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="143" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">top-werken:</text>
<text x="35" y "159" fill="${COLORS.text}" font-size="10" font-family="Arial">• Multatuli — Max Havelaar (1860)</text>
<text x="35" y "175" fill="${COLORS.text}" font-size="10" font-family="Arial">• Hildebrand — Camera Obscura (1839)</text>
</svg>`,
    checks: [
      {
        q: "*Wat is het hoofdthema van Max Havelaar (Multatuli, 1860)?*",
        options: [
          "Aanklacht tegen koloniaal onrecht in Nederlands-Indië",
          "Liefdesgeschiedenis in Amsterdam tijdens de Gouden Eeuw",
          "Een non die het klooster verlaat",
          "Ridderverhaal over Karel de Grote",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat past niet bij Max Havelaar. De roman speelt deels in Indië en is een kritiek op het koloniale systeem.",
          "Een non die haar klooster verlaat is het verhaal van Beatrijs (Middeleeuwen).",
          "Ridderverhaal over Karel de Grote = Karel ende Elegast (Middeleeuwen).",
        ],
      },
    ],
  },
  {
    title: "Realisme & Naturalisme (~1880-1900)",
    explanation: "**Tijdperk**: ~1880-1900. Reactie op de Romantiek's geïdealiseerde wereld. Schrijvers willen de werkelijkheid **zoals zij is** weergeven, inclusief de minder mooie kanten.\n\n**Kern-kenmerken**:\n• **Werkelijkheidsgetrouw** — gedetailleerde beschrijvingen, alledaagse dialogen\n• **Sociale wantoestanden** — armoede, prostitutie, alcoholisme, klassenstrijd\n• **Wetenschappelijke benadering** — invloed van Zola: schrijver als 'wetenschapper' van de samenleving\n• **Determinisme** (Naturalisme) — mens is product van erfelijkheid + milieu, geen vrije wil\n• **Pessimistisch** — geen happy endings, hoofdpersoon gaat vaak ten onder\n\n**De Tachtigers** (poëzie-stroming binnen deze periode, ~1880-1894):\nGroep jonge dichters rond *De Nieuwe Gids*: **Willem Kloos**, **Jacques Perk**, **Albert Verwey**, **Frederik van Eeden**, **Herman Gorter**.\n• Slogan: *\"Vorm en inhoud zijn één\"* — schoonheid van de taal centraal.\n• Veel sonnetten, hoog gestileerd.\n• Beroemdste werk: ***Mei*** van **Herman Gorter** (1889) — lange lyrische gedicht over de lente.\n\n**Belangrijkste prozaschrijvers**:\n• **Louis Couperus** — ***Eline Vere*** (1889, Naturalistisch portret van een Haagse vrouw die ten onder gaat aan haar gevoeligheid), ***De stille kracht*** (1900, koloniale wereld)\n• **Marcellus Emants** — ***Een nagelaten bekentenis*** (1894, ik-roman over een gefaalde man)\n• **Herman Heijermans** — toneelschrijver, ***Op hoop van zegen*** (1900, sociale aanklacht over vissers)\n\n**Examen-tip**: Naturalisme = mens als slachtoffer van erfelijkheid + omgeving (geen ontsnapping). Eline Vere is hét schoolvoorbeeld.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">Realisme / Naturalisme ~1880-1900</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">🔬 werkelijkheidsgetrouw · gedetailleerd</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">⚖️ sociale wantoestanden · armoede</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">🧬 determinisme: erfelijkheid + milieu</text>
<line x1="30" y1="123" x2="270" y2="123" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="142" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Tachtigers (poëzie):</text>
<text x="35" y="158" fill="${COLORS.text}" font-size="10" font-family="Arial">• Gorter — Mei · Kloos · Perk · Verwey</text>
<text x="35" y "174" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">proza: Couperus — Eline Vere</text>
</svg>`,
    checks: [
      {
        q: "*Wat is een centraal idee van het Naturalisme?*",
        options: [
          "De mens is product van erfelijkheid en milieu — geen vrije wil",
          "Het gevoel staat boven het verstand",
          "De rede leidt tot een betere wereld",
          "Vorm-experiment is belangrijker dan inhoud",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Gevoel boven verstand = Romantiek (~1800-1880), de stroming dáárvoor.",
          "Vertrouwen in rede + vooruitgang = Verlichting (~1700-1800).",
          "Vorm-experiment dat losser staat van inhoud = Modernisme (~1900-1945), de stroming dáárna.",
        ],
      },
      {
        q: "*\"Mei\" (1889) is een beroemd lang gedicht van welke dichter?*",
        options: [
          "Herman Gorter",
          "Joost van den Vondel",
          "Multatuli",
          "Lucebert",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vondel is van de Gouden Eeuw (~1600), niet de Tachtigers.",
          "Multatuli was prozaschrijver (Romantiek), niet dichter van Mei.",
          "Lucebert is een Vijftiger (~1950), eeuwen na de Tachtigers.",
        ],
      },
    ],
  },
  {
    title: "Modernisme (~1900-1945)",
    explanation: "**Tijdperk**: ~1900-1945, met als hoogtepunt jaren 20-30. Reactie op het 19e-eeuwse vertrouwen in vooruitgang — die wordt door WO I aan diggelen geslagen. Vervreemding, fragmentatie, vorm-experiment.\n\n**Kern-kenmerken**:\n• **Vorm-experiment** — niet meer gebonden aan klassieke versmaten of romanvormen\n• **Vervreemding** — modern stadsleven is anoniem en koud\n• **Subjectivering** — innerlijke beleving van het personage centraal (stream of consciousness)\n• **Fragmentatie** — het verhaal wordt niet chronologisch verteld\n• **Twijfel aan grote verhalen** — religie, vooruitgang, betekenis worden bevraagd\n• **Nieuwe stedelijke wereld** — auto, vliegtuig, telefoon, jazz\n\n**Hoofdgenres**:\n1. **Vrije poëzie** — los van vaste vorm\n2. **Psychologische roman** — innerlijk vooral\n3. **Essay** — kritisch, intellectueel\n\n**Belangrijkste schrijvers**:\n• **Martinus Nijhoff** — *De wandelaar* (1916), ***Awater*** (1934, beroemd lang gedicht over een zoektocht door Utrecht)\n• **Hendrik Marsman** — *Tempel en kruis* (1939) — religieuze + persoonlijke poëzie\n• **J. Slauerhoff** — wereldreiziger-poëzie, romans als *Het verboden rijk* (1932) over Camões\n• **Gerrit Achterberg** — gedichten gericht aan een gestorven geliefde\n• **Simon Vestdijk** — psychologische romans, ***Terug tot Ina Damman*** (1934)\n• **E. du Perron** — *Het land van herkomst* (1935), autobiografische roman\n• **Menno ter Braak** — essayist, kritisch denker\n\n**Tijdschrift**: ***Forum*** (1932-1935) van Du Perron + Ter Braak — \"de vent voor de vorm\" (= persoonlijkheid van de schrijver belangrijker dan stijl).\n\n**Examen-tip**: kort + raar vormpje + vervreemd-stedelijk → Modernisme.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.blue}" font-size="13" font-family="Arial" font-weight="bold">Modernisme ~1900-1945</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">🌀 vorm-experiment · fragmentatie</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">🏙️ vervreemd stadsleven · twijfel</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">🧠 innerlijke beleving (stream of cons.)</text>
<line x1="30" y1="123" x2="270" y2="123" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="143" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">top-werken:</text>
<text x="35" y "159" fill="${COLORS.text}" font-size="10" font-family="Arial">• Nijhoff — Awater (1934, gedicht)</text>
<text x="35" y "175" fill="${COLORS.text}" font-size="10" font-family="Arial">• Vestdijk — Terug tot Ina Damman</text>
</svg>`,
    checks: [
      {
        q: "*Welk kenmerk past bij modernistische literatuur?*",
        options: [
          "Vorm-experiment + fragmentatie + vervreemding",
          "Anoniem + religieus + ridderverhalen",
          "Klassieke versmaten + treurspelen + Latijnse verwijzingen",
          "Werkelijkheidsgetrouw + sociale wantoestanden + determinisme",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Anoniem + religieus + ridderverhalen = Middeleeuwen.",
          "Klassieke versmaten + treurspelen = Renaissance / Gouden Eeuw (~1500-1700).",
          "Werkelijkheidsgetrouw + sociale wantoestanden + determinisme = Realisme/Naturalisme (~1880-1900).",
        ],
      },
    ],
  },

  // ─── D. Naoorlogs ─────────────────────────────────────
  {
    title: "Vijftigers — poëzie-experiment (~1945-1965)",
    explanation: "**Tijdperk**: ~1945-1965, oftewel direct na WO II. Een groep dichters wil **radicaal breken** met de poëzie van vóór de oorlog. Het is een **poëzie-stroming** specifiek (proza ontwikkelt zich anders, zie volgende stappen).\n\n**Kern-kenmerken**:\n• **Beeldend, associatief** — geen logische opbouw, maar beelden naast elkaar\n• **Vrije vorm** — geen rijm, geen vast metrum, geen interpunctie soms\n• **Directe taal** — uit de straat, onverwacht, zonder verfijning\n• **Schock-effect** — taboes doorbreken, lezer wakker schudden\n• **Anti-elitair** — poëzie hoort niet alleen voor geleerden te zijn\n\n**De Vijftigers (groep)**:\n• **Lucebert** (= Lubertus Swaanswijk) — \"Keizer der Vijftigers\". *\"Alles van waarde is weerloos\"*\n• **Gerrit Kouwenaar** — ascetische verzen, wegcijfering van de ik\n• **Hans Andreus** — kleurrijke, romantischer\n• **Simon Vinkenoog** — performance-dichter, jaren 60-icoon\n• **Bert Schierbeek** — proza-experimenteel\n• **Remco Campert** — toegankelijker, columnist en romanschrijver\n\n**Tijdschrift / beweging**: groep rond ***Cobra*** (kunstbeweging) en tijdschriften zoals *Reflex* en *Braak*.\n\n**Voorbeeld-strofe** (Lucebert):\n*\"alles van waarde is weerloos\nwordt van aanraakbaarheid rijk\nen aan alles gelijk\"*\n\n**Examen-tip**: poëzie zonder hoofdletters, zonder leestekens, met associatieve sprongen → kans groot dat het Vijftigers is.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">Vijftigers ~1945-1965</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">🌈 vrije vorm · associatief · beeldend</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">⚡ taboe-doorbrekend · directe taal</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">🎨 verbonden met Cobra-kunst</text>
<line x1="30" y1="123" x2="270" y2="123" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="143" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">kerngroep:</text>
<text x="35" y "159" fill="${COLORS.text}" font-size="10" font-family="Arial">Lucebert · Kouwenaar · Andreus</text>
<text x="35" y "175" fill="${COLORS.text}" font-size="10" font-family="Arial">Vinkenoog · Schierbeek · Campert</text>
</svg>`,
    checks: [
      {
        q: "*Welke dichter wordt de \"Keizer der Vijftigers\" genoemd?*",
        options: [
          "Lucebert",
          "Joost van den Vondel",
          "Herman Gorter",
          "Martinus Nijhoff",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vondel is uit de Gouden Eeuw (~1600) — eeuwen vóór de Vijftigers.",
          "Gorter is een Tachtiger (~1880), de generatie vóór de Modernisten — niet Vijftigers.",
          "Nijhoff is Modernist (~1920-1934). De Vijftigers kwamen ná hem.",
        ],
      },
    ],
  },
  {
    title: "Postmodernisme (~1965-2000)",
    explanation: "**Tijdperk**: ~1965-2000. Dominante proza-stroming na de oorlog. **Postmodern** = na het Modernisme, met andere strategieën om met betekenis-twijfel om te gaan.\n\n**Kern-kenmerken**:\n• **Ironie + zelfreflectie** — schrijver knipoogt naar de lezer, het verhaal weet dat het een verhaal is\n• **Intertekstualiteit** — verwijzingen naar andere boeken, films, mythen\n• **Geen grote waarheid meer** — er bestaat geen overkoepelend verhaal of moraal\n• **Spel met genres** — combinatie van thriller + filosofie + roman + essay\n• **Dood-thema** — vergankelijkheid, oorlog (WO II nawerking), morbiditeit\n• **Onbetrouwbare verteller** — komt vaak voor, lezer kan de ik niet vertrouwen\n\n**De \"Grote Drie\" van naoorlogs proza**:\n• **W.F. Hermans** — ***De donkere kamer van Damokles*** (1958, oorlogsverwarring), *Nooit meer slapen* (1966, expeditie in Lapland)\n• **Harry Mulisch** — ***De aanslag*** (1982, oorlog en schuld), ***De ontdekking van de hemel*** (1992, magnum opus)\n• **Gerard Reve** — ***De avonden*** (1947, vervelende winter van een jonge man), *De taal der liefde*\n\n**Andere belangrijke schrijvers**:\n• **Jan Wolkers** — ***Turks fruit*** (1969), zinnelijk, taboe-doorbrekend\n• **Hugo Claus** (Vlaams) — ***Het verdriet van België*** (1983), autobiografisch over WO II Vlaanderen\n• **Louis Paul Boon** (Vlaams) — *De Kapellekensbaan* (1953), experimenteel\n• **Margriet de Moor** — *Eerst grijs dan wit dan blauw* (1991)\n• **Hella Haasse** — historische romans, *Oeroeg* (1948)\n\n**Examen-tip**: De avonden, De donkere kamer van Damokles, De aanslag — zijn alledrie populaire keuze-werken op leesdossiers van havo. Goed om er één over te kunnen vertellen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.paars}" font-size="13" font-family="Arial" font-weight="bold">Postmodernisme ~1965-2000</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">🪞 ironie · intertekstualiteit · spel</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">⚰️ dood/oorlog-thema · pessimisme</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">🎭 onbetrouwbare verteller · twijfel</text>
<line x1="30" y1="123" x2="270" y2="123" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "143" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Grote Drie:</text>
<text x="35" y "159" fill="${COLORS.text}" font-size="10" font-family="Arial">• Hermans · Mulisch · Reve</text>
<text x="35" y "175" fill="${COLORS.text}" font-size="10" font-family="Arial">  + Wolkers · Claus · Haasse</text>
</svg>`,
    checks: [
      {
        q: "*Welke roman is van Harry Mulisch?*",
        options: [
          "De aanslag",
          "De avonden",
          "Eline Vere",
          "Max Havelaar",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De avonden is van Gerard Reve (1947).",
          "Eline Vere is van Couperus (Naturalisme, 1889).",
          "Max Havelaar is van Multatuli (Romantiek, 1860).",
        ],
      },
      {
        q: "*Wat is een typisch kenmerk van postmoderne literatuur?*",
        options: [
          "Ironie en intertekstualiteit (verwijzingen naar andere werken)",
          "Vaste klassieke versmaten",
          "Mondelinge overlevering",
          "Religieuze mystiek",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vaste klassieke versmaten = Renaissance / Gouden Eeuw.",
          "Mondelinge overlevering = Middeleeuwen.",
          "Religieuze mystiek = Middeleeuwen (Hadewijch).",
        ],
      },
    ],
  },
  {
    title: "Eigentijdse literatuur (~2000-nu)",
    explanation: "**Tijdperk**: ~2000-nu. Geen scherp gedefinieerde stroming meer — de literatuur is **gediversifieerd**, met veel verschillende stemmen naast elkaar.\n\n**Belangrijke trends**:\n\n**1. Autobiografisch / autofictie**\nVeel schrijvers vertellen verhalen die expliciet uit hun eigen leven komen, soms moeilijk te scheiden van fictie.\n• **Connie Palmen** — *Logboek van een onbarmhartig jaar*\n• **Dimitri Verhulst** (Vlaams) — *De helaasheid der dingen* (2006)\n• **Tommy Wieringa** — *Joe Speedboot* (2005)\n\n**2. Multiculturele en migrantenliteratuur**\nNL/Vlaamse schrijvers met andere achtergronden brengen nieuwe perspectieven.\n• **Abdelkader Benali** — *Bruiloft aan zee* (1996)\n• **Hafid Bouazza** — *De voeten van Abdullah*\n• **Yasmine Allas**\n\n**3. Maatschappelijke roman**\nReflectie op actuele thema's: klimaat, migratie, polarisatie.\n• **Arnon Grunberg** — *Tirza* (2006), prolifiek essayist + romanschrijver\n• **Joost de Vries** — *De republiek* (2013)\n\n**4. Historische roman bijna-actueel**\n• **Ilja Leonard Pfeijffer** — *La Superba* (2013, Genua), *Grand Hotel Europa* (2018)\n\n**5. Literaire thriller / genre-vermenging**\n• **Tessa de Loo**, **Saskia Noort**, **Renate Dorrestein**\n\n**6. Toegankelijke poëzie**\n• **Ramsey Nasr**, **Antjie Krog**, **Anne Vegter**\n\n**Eigentijds = lastig op het examen**: omdat we er midden in zitten, vraagt de docent vaak om een **eigen werk uit deze periode** in het leesdossier te bespreken — geen vaste namen verplicht.\n\n**Examen-tip**: bij het mondelinge / leesdossier-gesprek hoort het werk dat je leest deze decade meestal in deze categorie. Wees voorbereid om uit te leggen waarom (eigen-tijds onderwerp + recente publicatie + actuele taal).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">Eigentijds ~2000-nu</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.text}" font-size="11" font-family="Arial">📱 autofictie · maatschappelijk thema</text>
<text x="35" y "92" fill="${COLORS.text}" font-size="11" font-family="Arial">🌍 multicultureel · migratie</text>
<text x="35" y "110" fill="${COLORS.text}" font-size="11" font-family="Arial">📚 genre-vermenging · diversiteit</text>
<line x1="30" y1="123" x2="270" y2="123" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "143" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">vaak op leesdossier:</text>
<text x="35" y "159" fill="${COLORS.text}" font-size="10" font-family="Arial">Grunberg · Verhulst · Pfeijffer</text>
<text x="35" y "175" fill="${COLORS.text}" font-size="10" font-family="Arial">Wieringa · Benali · Palmen</text>
</svg>`,
    checks: [
      {
        q: "*Welke schrijver hoort bij de eigentijdse literatuur (~2000-nu)?*",
        options: [
          "Arnon Grunberg",
          "Joost van den Vondel",
          "Multatuli",
          "Lucebert",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vondel is van de Gouden Eeuw (~1600).",
          "Multatuli is Romantiek (~1860).",
          "Lucebert is een Vijftiger (~1950).",
        ],
      },
    ],
  },

  // ─── E. Begrippen + eindopdracht ──────────────────────
  {
    title: "Vertelperspectief — wie kijkt en vertelt?",
    explanation: "Een **vertelperspectief** bepaalt door wiens ogen het verhaal wordt verteld. Op het examen wordt vaak gevraagd: *\"Welk vertelperspectief wordt gebruikt? Geef bewijs uit de tekst.\"*\n\n**Vier hoofdtypen**:\n\n**1. Ik-perspectief (eerstepersoon)**\nDe verteller is een personage in het verhaal, vertelt vanuit \"ik\".\n• Vorm: *\"Ik liep over straat en zag...\"*\n• Effect: lezer voelt zich dichtbij, kent alleen de gedachten van de ik.\n• Variant: **onbetrouwbare ik** — de lezer mag niet zomaar aannemen dat de ik klopt (postmodern truc).\n\n**2. Personaal perspectief (hij/zij, beperkt)**\nVerteller staat buiten het verhaal maar **kruipt in één personage**: lezer ziet alles door de ogen van dat personage.\n• Vorm: *\"Hij liep over straat en zag... Hij dacht: dit klopt niet.\"*\n• Effect: dichtbij maar minder claustrofobisch dan ik-vorm.\n\n**3. Auctorieel perspectief (hij/zij, alwetend)**\nVerteller is een soort 'god' — weet alles van alle personages, kan vooruitkijken in tijd.\n• Vorm: *\"Hij liep over straat. Wat hij niet wist, was dat zijn vrouw thuis bezig was met...\"*\n• Effect: overzichtelijk, wat afstandelijker. Klassiek 19e-eeuws.\n\n**4. Wisselend perspectief**\nVerteller wisselt tussen personages — vaak per hoofdstuk of alinea.\n• Vorm: hoofdstuk 1 vanuit Karin, hoofdstuk 2 vanuit Mark.\n• Effect: meerdere kanten van een verhaal, modern.\n\n**Examen-truc**:\n• Tellen van \"ik\" / \"hij\" → ik-vorm of derde persoon\n• Vraag: kent de verteller meer dan één personage's gedachten? Ja → auctorieel of wisselend; Nee → personaal.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">vier vertelperspectieven</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">1. ik-perspectief</text>
<text x="155" y="74" fill="${COLORS.muted}" font-size="11" font-family="Arial">"ik liep, ik zag"</text>
<text x="35" y "92" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">2. personaal</text>
<text x="125" y="92" fill="${COLORS.muted}" font-size="11" font-family="Arial">hij + alleen zijn gedachten</text>
<text x="35" y "110" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">3. auctorieel</text>
<text x="125" y="110" fill="${COLORS.muted}" font-size="11" font-family="Arial">alwetende verteller</text>
<text x="35" y "128" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">4. wisselend</text>
<text x="125" y="128" fill="${COLORS.muted}" font-size="11" font-family="Arial">per hoofdstuk ander pers.</text>
<text x="150" y "162" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">truc: in wiens hoofd zit de verteller?</text>
</svg>`,
    checks: [
      {
        q: "*\"Hij liep over straat. Wat hij niet wist, was dat zijn vrouw thuis al haar koffers aan het pakken was.\"* — Welk perspectief?",
        options: [
          "Auctorieel (alwetende verteller)",
          "Ik-perspectief",
          "Personaal (één personage)",
          "Wisselend",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Er staat geen \"ik\" in de zin. Het gaat over \"hij\".",
          "Personaal beperkt zich tot wat één personage weet. Hier weet de verteller iets dat het personage juist NIET weet.",
          "Wisselend perspectief vereist twee verschillende focus-personages. Hier is één scène met overstijgende kennis.",
        ],
      },
    ],
  },
  {
    title: "Stijlfiguren — taal die opvalt",
    explanation: "**Stijlfiguren** zijn taalvormen die opvallen door bewust gebruik. Ze maken een tekst literair. Belangrijkste voor havo 4:\n\n**1. Metafoor** — een ding wordt gelijkgesteld aan een ander ding zonder \"als\"/\"zoals\".\n• *\"Zijn hart was een steen.\"* (= hard, koud, ongevoelig)\n\n**2. Vergelijking** — wel met \"als\" of \"zoals\".\n• *\"Zijn hart was zo hard als een steen.\"*\n\n**3. Personificatie** — een levenloos ding krijgt menselijke eigenschappen.\n• *\"De wind huilde.\"*\n\n**4. Symbool** — concreet ding staat voor een abstract idee.\n• Een witte duif → vrede.\n\n**5. Ironie** — schrijver bedoelt het tegenovergestelde van wat hij zegt.\n• *\"Een geweldig idee om in de stortbui te gaan picknicken.\"*\n\n**6. Hyperbool** — overdrijving voor effect.\n• *\"Ik heb dit duizend keer gezegd.\"*\n\n**7. Litotes** — onderdrijving / ontkenning.\n• *\"Niet onaardig\"* (= aardig)\n\n**8. Eufemisme** — verzachtende omschrijving van iets onaangenaams.\n• *\"Heengegaan\"* (= overleden)\n\n**9. Pleonasme** — onnodig woord dat hetzelfde benadrukt.\n• *\"Witte sneeuw\"*, *\"ronde bal\"*\n\n**10. Tautologie** — twee woorden met dezelfde betekenis naast elkaar.\n• *\"Nooit en te nimmer\"*, *\"weer en wind\"*\n\n**11. Antithese** — tegenstelling binnen één zin.\n• *\"Klein van lichaam, groot van geest.\"*\n\n**12. Climax** — opbouw van zwak naar sterk.\n• *\"Het was raar, vreemd, ronduit bizar.\"*\n\n**Examen-tip**: bij een poëzie-vraag wordt vaak gevraagd \"welke stijlfiguur staat in regel X?\" — ken de namen, en let op signaalwoorden (\"als\" → vergelijking; overdrijving → hyperbool; tegenstelling → antithese).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">stijlfiguren — top 12</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "72" fill="${COLORS.text}" font-size="10" font-family="Arial">metafoor · vergelijking · personificatie</text>
<text x="35" y "88" fill="${COLORS.text}" font-size="10" font-family="Arial">symbool · ironie · hyperbool</text>
<text x="35" y "104" fill="${COLORS.text}" font-size="10" font-family="Arial">litotes · eufemisme · pleonasme</text>
<text x="35" y "120" fill="${COLORS.text}" font-size="10" font-family="Arial">tautologie · antithese · climax</text>
<line x1="30" y1="132" x2="270" y2="132" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "150" fill="${COLORS.muted}" font-size="10" font-family="Arial">"als/zoals" → vergelijking</text>
<text x="35" y "166" fill="${COLORS.muted}" font-size="10" font-family="Arial">overdrijving → hyperbool</text>
<text x="35" y "182" fill="${COLORS.muted}" font-size="10" font-family="Arial">tegenstelling in zin → antithese</text>
</svg>`,
    checks: [
      {
        q: "*\"Mijn hart is een gevangenis.\"* — Welke stijlfiguur?",
        options: [
          "Metafoor",
          "Vergelijking",
          "Personificatie",
          "Hyperbool",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een vergelijking gebruikt \"als\" of \"zoals\". Hier staat een directe gelijkstelling zonder die woorden.",
          "Personificatie geeft een levenloos ding menselijke eigenschappen. Hier wordt iets aan iets anders gelijkgesteld.",
          "Hyperbool is overdrijving. Hier wordt een beeld gebruikt, geen overdrijving.",
        ],
      },
      {
        q: "*\"De wind fluisterde door de bomen.\"* — Welke stijlfiguur?",
        options: [
          "Personificatie",
          "Metafoor",
          "Hyperbool",
          "Litotes",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een metafoor stelt iets gelijk aan iets anders. Hier krijgt de wind menselijk gedrag (fluisteren) toegekend.",
          "Hyperbool = overdrijving. Hier wordt iets niet overdreven, maar bezield.",
          "Litotes = onderdrijving (\"niet onaardig\"). Hier is geen ontkenning.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht — gemixte vragen",
    explanation: "Vier vragen op examenniveau havo 4 literatuur. Alle stromingen + literaire begrippen door elkaar.\n\n**Tip voor het examen / leesdossier-mondeling**:\n1. **Per gelezen werk**: weet stroming + jaar + auteur + drie kenmerken die het werk in die stroming plaatsen.\n2. **Bij twijfel tussen twee stromingen**: kies de meest dominante kenmerken. Couperus tussen Realisme en Symbolisme? → Naturalisme als hoofdstroming.\n3. **Citeer een passage** uit het werk om je punt te onderbouwen — laat zien dat je het echt gelezen hebt.\n4. **Verbind met grotere thema's** van de stroming (bv. Naturalisme + determinisme + Eline Vere die ten onder gaat aan haar gevoeligheid).\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">litera-</text>
<text x="150" y="110" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial" font-weight="bold">tuur</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">examenstof havo 4 🏆</text>
</svg>`,
    checks: [
      {
        q: "*\"Eline Vere\" van Couperus (1889) hoort bij welke stroming?*",
        options: [
          "Realisme / Naturalisme",
          "Romantiek",
          "Modernisme",
          "Postmodernisme",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Romantiek eindigde rond 1880. Couperus schreef Eline Vere in 1889 — dat is de generatie erná, met andere kenmerken (determinisme, gedetailleerde realiteit).",
          "Modernisme begint pas rond 1900 met Nijhoff e.a. Couperus is iets eerder.",
          "Postmodernisme is naoorlogs (~1965+). Eline Vere is uit 1889.",
        ],
      },
      {
        q: "*Welke schrijver hoort bij de Vijftigers?*",
        options: [
          "Lucebert",
          "Joost van den Vondel",
          "Couperus",
          "Marsman",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vondel is uit de Gouden Eeuw (~1600).",
          "Couperus is van het Realisme/Naturalisme (~1889).",
          "Marsman is een Modernist (~1930), de generatie vóór de Vijftigers.",
        ],
      },
      {
        q: "*\"Hij liep over straat. Hij dacht: vandaag wordt geen goede dag.\"* — Welk vertelperspectief?",
        options: [
          "Personaal (= we zien het door één personage)",
          "Auctorieel (alwetend)",
          "Ik-perspectief",
          "Wisselend",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Auctorieel zou ook andere personage's gedachten of toekomstige gebeurtenissen kennen. Hier blijven we bij één man, één moment.",
          "Er staat geen \"ik\" in de zin. Hij = derde persoon.",
          "Wisselend vereist meerdere focus-personages. Hier is er één.",
        ],
      },
      {
        q: "*\"Het was niet onaardig wat ze zei.\"* — Welke stijlfiguur?",
        options: [
          "Litotes (onderdrijving)",
          "Hyperbool (overdrijving)",
          "Metafoor",
          "Personificatie",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Hyperbool = juist overdrijving. Hier wordt bewust onderdrukt (\"niet onaardig\" = aardig zonder enthousiast over te komen).",
          "Een metafoor zou iets gelijkstellen aan iets anders. Hier wordt een eigenschap onderdrukt uitgedrukt.",
          "Personificatie geeft mensvariabelen aan iets levensloos. Hier is geen levenloos object aan het werk.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const literatuurgeschiedenis = {
  id: "literatuurgeschiedenis",
  title: "Literatuurgeschiedenis",
  emoji: "📚",
  level: "havo4-5",
  subject: "taal",
  intro:
    "Examenstof havo 4-5 literatuur Nederlands: 9 stromingen op de tijdlijn (Middeleeuwen tot nu) met kenmerken, top-schrijvers en bekendste werken. Plus literaire begrippen (vertelperspectief, stijlfiguren) voor leesdossier-bespreking.",
  triggerKeywords: [
    "literatuurgeschiedenis", "literatuur", "leesdossier", "stroming",
    "middeleeuwen", "renaissance", "gouden eeuw", "verlichting",
    "romantiek", "realisme", "naturalisme", "tachtigers",
    "modernisme", "vijftigers", "postmodernisme",
    "vondel", "multatuli", "couperus", "nijhoff", "lucebert",
    "hermans", "mulisch", "reve", "wolkers",
    "vertelperspectief", "stijlfiguur", "metafoor", "personificatie",
  ],
  chapters,
  steps,
};

export default literatuurgeschiedenis;
