// Leerpad: Passé composé (voltooid verleden tijd) — Frans onderbouw VO
// 10 stappen in 4 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  avoir: "#42a5f5", etre: "#ec407a", good: "#00c853", red: "#e53935",
};

const stepEmojis = ["🇫🇷", "📖", "✅", "🤝", "👥", "❤️", "🔄", "🚪", "🧩", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is passé composé?", emoji: "📖", from: 0, to: 1 },
  { letter: "B", title: "Met avoir", emoji: "🤝", from: 2, to: 4 },
  { letter: "C", title: "Met être", emoji: "❤️", from: 5, to: 7 },
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 8, to: 9 },
];

const steps = [
  {
    title: "Wat is passé composé?",
    explanation: "**Passé composé** is de **voltooid verleden tijd** in het Frans — vergelijkbaar met de Nederlandse 'heb ge-' / 'ben ge-' constructie.\n\n**Vorm**: hulpwerkwoord (avoir of être) + voltooid deelwoord (participe passé).\n\n**Voorbeelden**:\n• *J'ai mangé.* — Ik heb gegeten.\n• *Tu as parlé.* — Jij hebt gesproken.\n• *Elle est partie.* — Zij is vertrokken.\n• *Nous sommes arrivés.* — Wij zijn aangekomen.\n\n**Wanneer gebruik je passé composé?**\n• Voor afgeronde gebeurtenissen in het verleden.\n• *Hier j'ai vu un film.* — Gisteren heb ik een film gezien.\n• *Nous avons mangé au restaurant.* — Wij hebben in een restaurant gegeten.\n\nDe grootste vraag bij passé composé is: gebruik je **avoir** of **être** als hulpwerkwoord? Daar gaan deze stappen over.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="260" height="50" rx="8" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="70" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">passé composé</text>
<text x="40" y="120" fill="${COLORS.avoir}" font-size="11" font-family="Arial" font-weight="bold">avoir + p.p.</text>
<text x="40" y="138" fill="${COLORS.text}" font-size="10" font-family="Arial">j'ai mangé</text>
<text x="170" y="120" fill="${COLORS.etre}" font-size="11" font-family="Arial" font-weight="bold">être + p.p.</text>
<text x="170" y="138" fill="${COLORS.text}" font-size="10" font-family="Arial">je suis allé(e)</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">= voltooid verleden tijd</text>
</svg>`,
    checks: [
      {
        q: "Wat is **passé composé**?",
        options: [
          "Voltooid verleden tijd: hulpwerkwoord + p.p.",
          "Tegenwoordige tijd",
          "Toekomende tijd",
          "Onvoltooid verleden tijd",
        ],
        answer: 0,
        wrongHints: [null, "Tegenwoordige tijd is présent.", "Toekomst = futur.", "Onvoltooid verleden = imparfait."],
      },
      {
        q: "Welke twee hulpwerkwoorden zijn er voor passé composé?",
        options: ["avoir + être", "avoir + faire", "être + aller", "manger + parler"],
        answer: 0,
        wrongHints: [null, "Faire is geen hulpwerkwoord voor passé composé.", "Aller is wel een werkwoord met être, maar niet zelf een hulpwerkwoord.", "Dat zijn gewone werkwoorden."],
      },
    ],
  },
  {
    title: "Voltooid deelwoord (participe passé)",
    explanation: "Het **participe passé** is het tweede deel van de passé composé. Hoe maak je hem?\n\n**Regelmatige werkwoorden** — drie groepen op basis van de uitgang van de infinitief:\n\n**Groep 1: -er** → -**é**\n• parler → parl**é** *(gesproken)*\n• manger → mang**é** *(gegeten)*\n• regarder → regard**é** *(gekeken)*\n\n**Groep 2: -ir** (regelmatig) → -**i**\n• finir → fin**i** *(geëindigd)*\n• choisir → chois**i** *(gekozen)*\n\n**Groep 3: -re** → -**u**\n• vendre → vend**u** *(verkocht)*\n• attendre → attend**u** *(gewacht)*\n\n**Onregelmatige p.p.** — uit je hoofd leren:\n• avoir → eu *(gehad)*\n• être → été *(geweest)*\n• faire → fait *(gedaan)*\n• voir → vu *(gezien)*\n• prendre → pris *(genomen)*\n• mettre → mis *(gezet)*\n• écrire → écrit *(geschreven)*\n• boire → bu *(gedronken)*",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">participe passé — vorming</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">-er → -é</text>
<text x="20" y="72" fill="${COLORS.muted}" font-size="10" font-family="Arial">  parler → parlé</text>
<text x="20" y="98" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">-ir → -i</text>
<text x="20" y="115" fill="${COLORS.muted}" font-size="10" font-family="Arial">  finir → fini</text>
<text x="20" y="140" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">-re → -u</text>
<text x="20" y="158" fill="${COLORS.muted}" font-size="10" font-family="Arial">  vendre → vendu</text>
<text x="180" y="55" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">onregelmatig:</text>
<text x="180" y="75" fill="${COLORS.muted}" font-size="10" font-family="Arial">avoir → eu</text>
<text x="180" y="90" fill="${COLORS.muted}" font-size="10" font-family="Arial">être → été</text>
<text x="180" y="105" fill="${COLORS.muted}" font-size="10" font-family="Arial">faire → fait</text>
<text x="180" y="120" fill="${COLORS.muted}" font-size="10" font-family="Arial">voir → vu</text>
<text x="180" y="135" fill="${COLORS.muted}" font-size="10" font-family="Arial">prendre → pris</text>
</svg>`,
    checks: [
      {
        q: "Wat is het participe passé van **manger**?",
        options: ["mangé", "manger", "mangi", "mangu"],
        answer: 0,
        wrongHints: [null, "Dat is de infinitief, niet p.p.", "Verkeerde uitgang. -er → -é.", "Verkeerde uitgang."],
      },
      {
        q: "Wat is p.p. van **finir**?",
        options: ["fini", "finu", "finé", "finis"],
        answer: 0,
        wrongHints: [null, "Verkeerde uitgang. -ir → -i.", "-é is voor -er.", "Tegenwoordige tijd-vorm."],
      },
    ],
  },

  // B
  {
    title: "Avoir vervoegen + voorbeelden",
    explanation: "**Avoir** (hebben) is voor de meeste werkwoorden het hulpwerkwoord. Eerst de vervoeging in het présent (heden):\n\n• **j'ai** *(ik heb)*\n• **tu as** *(jij hebt)*\n• **il / elle / on a** *(hij / zij / men heeft)*\n• **nous avons** *(wij hebben)*\n• **vous avez** *(jullie / u hebt)*\n• **ils / elles ont** *(zij hebben)*\n\n**Passé composé met avoir**:\n• J'ai mangé une pomme. *(Ik heb een appel gegeten.)*\n• Tu as vu le film? *(Heb jij de film gezien?)*\n• Elle a parlé avec son ami. *(Zij heeft met haar vriend gesproken.)*\n• Nous avons fini nos devoirs. *(Wij hebben ons huiswerk afgemaakt.)*\n• Ils ont attendu une heure. *(Ze hebben een uur gewacht.)*\n\n**Belangrijk**: bij avoir verandert het p.p. **niet** met onderwerp. Je schrijft altijd hetzelfde p.p., of het nu il, elle of nous is.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="30" width="260" height="160" rx="6" fill="${COLORS.avoir}" opacity="0.10" stroke="${COLORS.avoir}" stroke-width="2"/>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.avoir}" font-size="14" font-family="Arial" font-weight="bold">avoir (hebben)</text>
<text x="40" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">j'ai</text>
<text x="180" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">nous avons</text>
<text x="40" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial">tu as</text>
<text x="180" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial">vous avez</text>
<text x="40" y="120" fill="${COLORS.text}" font-size="11" font-family="Arial">il/elle a</text>
<text x="180" y="120" fill="${COLORS.text}" font-size="11" font-family="Arial">ils/elles ont</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">j'ai mangé · tu as vu</text>
</svg>`,
    checks: [
      {
        q: "Hoe vervoegt **avoir** in 'wij hebben'?",
        options: ["nous avons", "nous avez", "nous as", "nous a"],
        answer: 0,
        wrongHints: [null, "Avez = vous (jullie/u).", "As = tu (jij).", "A = il/elle (hij/zij)."],
      },
      {
        q: "Hoe zeg je \"Ik heb gegeten\" in het Frans?",
        options: ["J'ai mangé", "Je mange", "Je mangé", "J'avoir mangé"],
        answer: 0,
        wrongHints: [null, "Dat is présent (ik eet).", "Mist het hulpwerkwoord.", "Avoir moet vervoegd zijn (j'ai)."],
      },
    ],
  },
  {
    title: "Welke werkwoorden gaan met avoir?",
    explanation: "**De meeste werkwoorden** gaan met avoir — het is de standaard.\n\n**Met avoir**:\n• manger *(eten)* — j'ai mangé\n• parler *(spreken)* — j'ai parlé\n• regarder *(kijken)* — j'ai regardé\n• voir *(zien)* — j'ai vu\n• faire *(doen)* — j'ai fait\n• prendre *(nemen)* — j'ai pris\n• boire *(drinken)* — j'ai bu\n• acheter *(kopen)* — j'ai acheté\n• travailler *(werken)* — j'ai travaillé\n• écrire *(schrijven)* — j'ai écrit\n• lire *(lezen)* — j'ai lu\n• apprendre *(leren)* — j'ai appris\n• comprendre *(begrijpen)* — j'ai compris\n• rencontrer *(ontmoeten)* — j'ai rencontré\n• visiter *(bezoeken)* — j'ai visité\n\nDit zijn allemaal werkwoorden die een **lijdend voorwerp** kunnen hebben (eten WAT, zien WIE, lezen WAT, etc.).\n\n**Strategie**: ga ervan uit dat je avoir gebruikt — tenzij het een specifiek werkwoord uit de korte lijst voor être is (zie volgende stap).",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">avoir = standaard</text>
<rect x="20" y="40" width="260" height="120" rx="10" fill="${COLORS.avoir}" opacity="0.12"/>
<text x="40" y="65" fill="${COLORS.text}" font-size="11" font-family="Arial">manger, parler, regarder</text>
<text x="40" y="83" fill="${COLORS.text}" font-size="11" font-family="Arial">voir, faire, prendre</text>
<text x="40" y="101" fill="${COLORS.text}" font-size="11" font-family="Arial">boire, acheter, travailler</text>
<text x="40" y="119" fill="${COLORS.text}" font-size="11" font-family="Arial">écrire, lire, apprendre</text>
<text x="40" y="137" fill="${COLORS.text}" font-size="11" font-family="Arial">rencontrer, visiter, ...</text>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ allemaal met avoir</text>
</svg>`,
    checks: [
      {
        q: "\"Hij heeft de film gezien.\" Welk hulpwerkwoord?",
        options: ["avoir → il a vu", "être → il est vu", "faire → il a fait", "Geen hulpwerkwoord"],
        answer: 0,
        wrongHints: [null, "Voir gaat met avoir.", "Faire is geen hulpwerkwoord.", "Passé composé heeft altijd hulpwerkwoord."],
      },
      {
        q: "\"Wij hebben Parijs bezocht.\"",
        options: ["Nous avons visité Paris", "Nous sommes visité Paris", "Nous visitons Paris", "Nous a visité Paris"],
        answer: 0,
        wrongHints: [null, "Visiter gaat met avoir, niet être.", "Dat is présent.", "Vervoeging klopt niet (a is voor il/elle)."],
      },
    ],
  },
  {
    title: "Vragen en ontkenningen met avoir",
    explanation: "**Vraagvorm**: \n• Plaatsing van vraagteken: *Tu as mangé?* — eenvoudigst.\n• Of inversie: *As-tu mangé?* — formeler.\n• Of est-ce que: *Est-ce que tu as mangé?* — neutraal.\n\n**Ontkenning**: \nJe zet **ne ... pas** rond het *hulpwerkwoord*, niet rond het p.p.\n\n**Voorbeelden**:\n• Je n'ai pas mangé. *(Ik heb niet gegeten.)*\n• Tu n'as pas vu le film. *(Jij hebt de film niet gezien.)*\n• Il n'a pas fini ses devoirs. *(Hij heeft zijn huiswerk niet af.)*\n• Nous n'avons pas compris. *(Wij hebben het niet begrepen.)*\n\n**Andere ontkenningen** (zelfde plek):\n• ne ... jamais (nooit)\n• ne ... rien (niets)\n• ne ... plus (niet meer)\n\n*Je n'ai jamais vu ce film.* — Ik heb deze film nooit gezien.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">vraag + ontkenning</text>
<rect x="20" y="40" width="260" height="50" rx="6" fill="${COLORS.good}" opacity="0.15" stroke="${COLORS.good}" stroke-width="1"/>
<text x="150" y="60" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">vraag</text>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Tu as mangé? · As-tu mangé?</text>
<rect x="20" y="100" width="260" height="50" rx="6" fill="${COLORS.red}" opacity="0.15" stroke="${COLORS.red}" stroke-width="1"/>
<text x="150" y="120" text-anchor="middle" fill="${COLORS.red}" font-size="11" font-family="Arial" font-weight="bold">ontkenning</text>
<text x="150" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Je n'ai pas mangé.</text>
</svg>`,
    checks: [
      {
        q: "Hoe ontken je \"J'ai mangé\"?",
        options: [
          "Je n'ai pas mangé",
          "Je ai pas mangé",
          "Je n'ai mangé pas",
          "Je ne pas ai mangé",
        ],
        answer: 0,
        wrongHints: [null, "Ne... pas hoort om het hulpwerkwoord; 'ne' niet weglaten.", "'pas' staat tussen avoir en p.p., niet erna.", "Verkeerde volgorde."],
      },
      {
        q: "\"Heb jij de film gezien?\" (informeel)",
        options: ["Tu as vu le film?", "Tu vu le film?", "As tu vu le film?", "Tu es vu le film?"],
        answer: 0,
        wrongHints: [null, "Mist hulpwerkwoord.", "Inversie heeft een streepje: As-tu.", "Voir gaat met avoir, niet être."],
      },
    ],
  },

  // C
  {
    title: "Etre vervoegen + wanneer gebruiken",
    explanation: "**Être** (zijn) is het hulpwerkwoord voor een **kleine groep** specifieke werkwoorden.\n\n**Vervoeging in présent**:\n• **je suis** *(ik ben)*\n• **tu es** *(jij bent)*\n• **il / elle est** *(hij / zij is)*\n• **nous sommes** *(wij zijn)*\n• **vous êtes** *(jullie / u bent)*\n• **ils / elles sont** *(zij zijn)*\n\n**Wanneer être gebruiken?**\n\n**1. Beweging/verandering-werkwoorden** (vaak met deur/plek/richting):\nDe \"DR & MRS VANDERTRAMPP\" lijst.\n\n**2. Wederkerende werkwoorden** (se laver = zich wassen, etc.):\n• Je me suis lavé(e). *(Ik heb me gewassen.)*\n\n**Voorbeelden**:\n• Je suis allé(e) au cinéma. *(Ik ben naar de bioscoop gegaan.)*\n• Elle est partie. *(Zij is vertrokken.)*\n• Ils sont arrivés. *(Zij zijn aangekomen.)*",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="30" width="260" height="160" rx="6" fill="${COLORS.etre}" opacity="0.10" stroke="${COLORS.etre}" stroke-width="2"/>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.etre}" font-size="14" font-family="Arial" font-weight="bold">être (zijn)</text>
<text x="40" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">je suis</text>
<text x="180" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">nous sommes</text>
<text x="40" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial">tu es</text>
<text x="180" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial">vous êtes</text>
<text x="40" y="120" fill="${COLORS.text}" font-size="11" font-family="Arial">il/elle est</text>
<text x="180" y="120" fill="${COLORS.text}" font-size="11" font-family="Arial">ils/elles sont</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">je suis allé(e) · elle est partie</text>
</svg>`,
    checks: [
      {
        q: "Hoe vervoeg je **être** in 'jullie zijn'?",
        options: ["vous êtes", "vous est", "vous sommes", "vous sont"],
        answer: 0,
        wrongHints: [null, "Est = il/elle.", "Sommes = nous.", "Sont = ils/elles."],
      },
      {
        q: "\"Ik ben vertrokken\" — welk hulpwerkwoord?",
        options: ["être → je suis parti(e)", "avoir → j'ai parti", "être → je es parti", "avoir → je suis parti"],
        answer: 0,
        wrongHints: [null, "Partir gaat met être, niet avoir.", "Suis is voor 'je', niet 'es'.", "Suis komt met être, niet avoir."],
      },
    ],
  },
  {
    title: "De DR & MRS VANDERTRAMPP-lijst",
    explanation: "Onthoud welke werkwoorden être nemen met deze 16 paren (en wederkerende).\n\n**De lijst** (Engels acroniem):\n• **D**escendre *(afdalen)* — descendu\n• **R**evenir *(terugkomen)* — revenu\n• **M**onter *(opklimmen, instappen)* — monté\n• **R**ester *(blijven)* — resté\n• **S**ortir *(uitgaan)* — sorti\n\n• **V**enir *(komen)* — venu\n• **A**ller *(gaan)* — allé\n• **N**aître *(geboren worden)* — né\n• **D**evenir *(worden)* — devenu\n• **E**ntrer *(binnenkomen)* — entré\n• **R**entrer *(terugkomen / thuiskomen)* — rentré\n• **T**omber *(vallen)* — tombé\n• **R**etourner *(terugkeren)* — retourné\n• **A**rriver *(aankomen)* — arrivé\n• **M**ourir *(sterven)* — mort\n• **P**artir *(vertrekken)* — parti\n• **P**asser *(passeren)* — passé (kan ook met avoir, betekenis verschilt)\n\nKenmerk: bijna allemaal **beweging** of **verandering van staat** (geboren / sterven / worden).\n\n**Truc**: visualiseer een huis. Mensen komen erin (entrer), wonen er (rester), gaan eruit (sortir), klimmen op (monter), vallen (tomber).",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.etre}" font-size="13" font-family="Arial" font-weight="bold">être-werkwoorden</text>
<polygon points="150,40 100,90 200,90" fill="${COLORS.etre}" opacity="0.30"/>
<rect x="100" y="90" width="100" height="80" fill="${COLORS.etre}" opacity="0.20"/>
<rect x="135" y="120" width="30" height="50" fill="${COLORS.warm}" opacity="0.5"/>
<text x="150" y="155" text-anchor="middle" fill="#1a1a1a" font-size="9" font-family="Arial">deur</text>
<text x="40" y="115" fill="${COLORS.text}" font-size="10" font-family="Arial">entrer →</text>
<text x="245" y="115" fill="${COLORS.text}" font-size="10" font-family="Arial">← sortir</text>
<text x="40" y="60" fill="${COLORS.text}" font-size="10" font-family="Arial">↑ monter</text>
<text x="240" y="60" fill="${COLORS.text}" font-size="10" font-family="Arial">↓ tomber</text>
<text x="150" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">beweging / verandering</text>
</svg>`,
    checks: [
      {
        q: "\"Wij zijn vertrokken\" — partir met...?",
        options: ["être → nous sommes partis", "avoir → nous avons parti", "être → nous êtes partis", "avoir → nous sommes parti"],
        answer: 0,
        wrongHints: [null, "Partir = être-werkwoord.", "Êtes is voor 'vous', niet 'nous'.", "Suis is voor 'je', en avoir is verkeerd hier."],
      },
      {
        q: "\"Hij is gevallen\" — tomber met...?",
        options: ["être → il est tombé", "avoir → il a tombé", "être → il es tombé", "avoir → il est tombé"],
        answer: 0,
        wrongHints: [null, "Tomber = être-werkwoord.", "Es is voor 'tu', niet 'il'.", "Mengsel — moet être + est."],
      },
    ],
  },
  {
    title: "Etre + onderwerp = p.p. past zich aan",
    explanation: "Wanneer je **être** als hulpwerkwoord gebruikt, **past het p.p. zich aan** aan het onderwerp (in geslacht en getal). Dit gebeurt **niet** met avoir.\n\n**Regels voor être p.p.**:\n• Vrouwelijk enkelvoud: + **e**\n• Mannelijk meervoud: + **s**\n• Vrouwelijk meervoud: + **es**\n\n**Voorbeelden** met aller (gegaan):\n• Pierre est all**é**. *(Pierre is gegaan — mannelijk enkelvoud, geen extra)*\n• Marie est all**ée**. *(Marie is gegaan — vrouwelijk → +e)*\n• Pierre et Paul sont all**és**. *(mannelijk meervoud → +s)*\n• Marie et Sophie sont all**ées**. *(vrouwelijk meervoud → +es)*\n• Pierre et Marie sont all**és**. *(gemengd = mannelijk meervoud)*\n\n**Eerste persoon (je)**:\n• Een jongen schrijft: Je suis allé.\n• Een meisje schrijft: Je suis allée.\n\n**Met avoir**: het p.p. blijft altijd hetzelfde:\n• Marie a mangé. *(geen extra 'e' bij avoir)*\n• Marie et Sophie ont mangé. *(geen extra 's')*",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">être: p.p. past zich aan</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">m. enkv:</text>
<text x="180" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">il est allé</text>
<text x="20" y="78" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">v. enkv: +e</text>
<text x="180" y="78" fill="${COLORS.etre}" font-size="11" font-family="Arial" font-weight="bold">elle est allée</text>
<text x="20" y="101" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">m. mv: +s</text>
<text x="180" y="101" fill="${COLORS.etre}" font-size="11" font-family="Arial" font-weight="bold">ils sont allés</text>
<text x="20" y="124" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">v. mv: +es</text>
<text x="180" y="124" fill="${COLORS.etre}" font-size="11" font-family="Arial" font-weight="bold">elles sont allées</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">avoir: nooit aanpassen</text>
</svg>`,
    checks: [
      {
        q: "Hoe schrijft Marie \"Ik ben aangekomen\"?",
        options: ["Je suis arrivée", "Je suis arrivé", "J'ai arrivée", "J'ai arrivé"],
        answer: 0,
        wrongHints: [null, "Marie is vrouwelijk → +e bij p.p.", "Arriver gaat met être, niet avoir.", "Avoir én geen aanpassing — beide fout."],
      },
      {
        q: "\"De meisjes zijn gekomen\" — venir, vrouwelijk meervoud.",
        options: ["Les filles sont venues", "Les filles est venue", "Les filles ont venu", "Les filles sont venu"],
        answer: 0,
        wrongHints: [null, "Sont = ils/elles, niet est.", "Venir gaat met être.", "Vrouwelijk mv → +es."],
      },
    ],
  },

  // D
  {
    title: "Toepassen — verhalen vertellen",
    explanation: "Met passé composé kun je **verhalen vertellen** over wat er gebeurd is. Voorbeeld:\n\n*Hier, je suis allé(e) au parc avec mes amis. Nous avons joué au foot pendant deux heures. Après, nous avons mangé une glace. Marie est tombée de son vélo, mais elle n'est pas blessée. Le soir, j'ai regardé un film à la télé.*\n\nVertaling:\n*Gisteren ben ik met mijn vrienden naar het park gegaan. We hebben twee uur gevoetbald. Daarna hebben we ijs gegeten. Marie is van haar fiets gevallen, maar ze is niet gewond. 's Avonds heb ik een film op tv gekeken.*\n\n**Let op de mix**:\n• Bewegingen → être (suis allé, est tombée)\n• Activiteiten met object → avoir (avons joué, avons mangé, ai regardé)\n• Aanpassing bij être (Marie tombé**e**)\n\n**Strategie bij twijfel**:\n1. Is het een DR & MRS VANDERTRAMPP-werkwoord? → être.\n2. Wederkerend (se laver, se promener)? → être.\n3. Anders → avoir.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">verhaal in passé composé</text>
<text x="20" y="55" fill="${COLORS.etre}" font-size="11" font-family="Arial">je suis allé(e) au parc</text>
<text x="20" y="75" fill="${COLORS.avoir}" font-size="11" font-family="Arial">nous avons joué au foot</text>
<text x="20" y="95" fill="${COLORS.avoir}" font-size="11" font-family="Arial">nous avons mangé une glace</text>
<text x="20" y="115" fill="${COLORS.etre}" font-size="11" font-family="Arial">Marie est tombée</text>
<text x="20" y="135" fill="${COLORS.avoir}" font-size="11" font-family="Arial">j'ai regardé un film</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">être (beweging) + avoir (rest)</text>
</svg>`,
    checks: [
      {
        q: "Welk hulpwerkwoord bij **manger**?",
        options: ["avoir", "être", "Beide kan", "Geen"],
        answer: 0,
        wrongHints: [null, "Manger = activiteit met object → avoir.", "Manger gaat altijd met avoir.", "Passé composé heeft hulpwerkwoord."],
      },
      {
        q: "Welk hulpwerkwoord bij **arriver**?",
        options: ["être", "avoir", "Beide kan", "Geen"],
        answer: 0,
        wrongHints: [null, "Arriver = beweging → être.", "Arriver hoort bij DR & MRS VANDERTRAMPP.", "Passé composé heeft altijd een hulpwerkwoord."],
      },
    ],
  },
  {
    title: "Eindopdracht — alles toepassen",
    explanation: "Tijd om alles te combineren!\n\n**Snelle samenvatting**:\n\n| Stap | Vraag |\n|---|---|\n| 1 | Welk werkwoord? Infinitief? |\n| 2 | Avoir of être? Check de DR & MRS-lijst |\n| 3 | Hulpwerkwoord vervoegen bij onderwerp |\n| 4 | Participe passé maken (-é, -i, -u of onregelmatig) |\n| 5 | Met être? p.p. aanpassen aan onderwerp (m/v/mv) |\n\n**Vormingsregels p.p.**:\n• -er → -é\n• -ir → -i\n• -re → -u\n• Onregelmatig: leren!\n\n**Veelgebruikte être-werkwoorden** (DR & MRS VANDERTRAMPP):\nallé, venu, parti, sorti, entré, monté, descendu, tombé, resté, retourné, arrivé, né, mort, devenu, revenu, rentré.\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="24" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">checklist</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Welk werkwoord (infinitief)?</text>
<text x="20" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Avoir of être?</text>
<text x="20" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Hulpwerkwoord vervoegen</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">4. Participe passé maken</text>
<text x="20" y="135" fill="${COLORS.text}" font-size="11" font-family="Arial">5. Bij être: aanpassen?</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — bonne chance!</text>
</svg>`,
    checks: [
      {
        q: "\"Wij hebben een film gezien.\"",
        options: ["Nous avons vu un film", "Nous sommes vu un film", "Nous voyons un film", "Nous avez vu un film"],
        answer: 0,
        wrongHints: [null, "Voir gaat met avoir, niet être.", "Dat is présent.", "Avez = vous, niet nous."],
      },
      {
        q: "\"Sophie is geboren in 2010.\"",
        options: ["Sophie est née en 2010", "Sophie a né en 2010", "Sophie est né en 2010", "Sophie a née en 2010"],
        answer: 0,
        wrongHints: [null, "Naître gaat met être, niet avoir.", "Sophie is vrouwelijk → née (+e).", "Verkeerde combinatie."],
      },
      {
        q: "\"Ze (vrouwelijk meervoud) zijn aangekomen.\"",
        options: ["Elles sont arrivées", "Elles ont arrivé", "Elles sont arrivé", "Elles est arrivées"],
        answer: 0,
        wrongHints: [null, "Arriver = être.", "Vrouwelijk mv → +es bij p.p.", "Sont, niet est, voor elles."],
      },
      {
        q: "\"Ik heb niet begrepen.\"",
        options: ["Je n'ai pas compris", "Je n'ai compris pas", "Je ne pas ai compris", "Je suis pas compris"],
        answer: 0,
        wrongHints: [null, "Pas staat tussen avoir en p.p., niet erna.", "Verkeerde volgorde.", "Comprendre gaat met avoir, niet être."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const passeComposeFrans = {
  id: "passe-compose-frans",
  title: "Passé composé (voltooid verleden tijd)",
  emoji: "🇫🇷",
  level: "klas2-3",
  subject: "frans",
  intro:
    "De voltooid verleden tijd in Frans: hulpwerkwoord avoir of être + participe passé. Met de DR & MRS VANDERTRAMPP-lijst voor être-werkwoorden, vorming p.p. (-é/-i/-u + onregelmatig), aanpassing aan onderwerp bij être, vragen en ontkenningen. Eerste pad Frans onderbouw.",
  triggerKeywords: [
    "passé composé", "passe compose",
    "voltooid verleden", "voltooid deelwoord",
    "participe passé", "p.p.",
    "avoir", "être",
    "j'ai mangé", "je suis allé",
    "dr mrs vandertrampp", "vandertrampp",
    "frans", "francais", "french",
  ],
  chapters,
  steps,
};

export default passeComposeFrans;
