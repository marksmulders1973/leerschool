// Leerpad: De Nederlandse staat — Maatschappijleer onderbouw VO
// 11 stappen in 5 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  red: "#e53935", white: "#ffffff", blue: "#1e88e5",
  good: "#00c853",
  parlement: "#26a69a", regering: "#ec407a", koning: "#ffb300", recht: "#7e57c2",
};

const stepEmojis = ["🏛️", "🗳️", "📜", "🏠", "🏛️", "👑", "📖", "⚖️", "🎫", "🌍", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een democratie?", emoji: "🗳️", from: 0, to: 1 },
  { letter: "B", title: "Wie regeert? — staatsmachten", emoji: "🏛️", from: 2, to: 5 },
  { letter: "C", title: "Wet, recht en burger", emoji: "⚖️", from: 6, to: 8 },
  { letter: "D", title: "NL in de wereld", emoji: "🌍", from: 9, to: 9 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 10, to: 10 },
];

const steps = [
  {
    title: "Wat is een democratie?",
    explanation: "**Democratie** komt uit het Grieks: *demos* (volk) + *kratos* (macht) — de macht is van het volk.\n\nIn een democratie:\n• **Burgers kiezen** wie hen regeert (verkiezingen).\n• **Iedereen mag stemmen** (vanaf 18 jaar in NL).\n• **Vrije media** mogen kritiek geven op de regering.\n• **Mensenrechten** zijn beschermd in de grondwet.\n• **Meerderheid beslist** — maar minderheden worden ook beschermd.\n\nNederland is een **parlementaire democratie**: het volk kiest het parlement (Tweede Kamer), die controleert de regering.\n\n**Tegenpolen** van democratie:\n• **Dictatuur**: één persoon heeft alle macht.\n• **Absolute monarchie**: koning heerst zonder grondwet.\n• **Theocratie**: priesters/religie regeren.\n\n**Belangrijk**: Nederland is óók een **monarchie** (koningshuis), maar de koning heeft géén echte politieke macht. De grondwet bepaalt wat hij wel/niet mag. We noemen dit **constitutionele monarchie**.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">democratie</text>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">demos (volk) + kratos (macht)</text>
<rect x="40" y="70" width="220" height="60" rx="10" fill="${COLORS.parlement}" opacity="0.20" stroke="${COLORS.parlement}" stroke-width="2"/>
<text x="150" y="92" text-anchor="middle" fill="${COLORS.parlement}" font-size="12" font-family="Arial" font-weight="bold">het volk kiest</text>
<text x="150" y="110" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">→ parlement → regering</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">NL = parlementaire democratie</text>
</svg>`,
    checks: [
      {
        q: "Wat betekent **democratie**?",
        options: [
          "Macht van het volk",
          "Macht van de koning",
          "Macht van priesters",
          "Macht van het leger",
        ],
        answer: 0,
        wrongHints: [null, "Dat is monarchie.", "Dat is theocratie.", "Dat is militaire dictatuur."],
      },
      {
        q: "Wat is een **constitutionele monarchie**?",
        options: [
          "Koning heeft beperkte macht door grondwet",
          "Koning heeft alle macht",
          "Geen koning, alleen president",
          "Geen wet",
        ],
        answer: 0,
        wrongHints: [null, "Dat is absolute monarchie.", "Dat is een republiek.", "Dat is anarchie."],
      },
    ],
  },
  {
    title: "Stemrecht en verkiezingen",
    explanation: "Wie mag stemmen in Nederland?\n\n**Voorwaarden**:\n• **18 jaar** of ouder.\n• **Nederlandse nationaliteit** (voor landelijke verkiezingen).\n• Niet uitgesloten van kiesrecht (zeer zeldzaam).\n\nEr zijn meerdere soorten verkiezingen:\n\n**1. Tweede Kamer** (om de 4 jaar) — voor het landelijke parlement (150 zetels).\n**2. Provinciale Staten** (om de 4 jaar) — kiest tegelijk indirect de Eerste Kamer.\n**3. Gemeenteraad** (om de 4 jaar) — voor de gemeente waar je woont.\n**4. Europees Parlement** (om de 5 jaar) — voor Europa.\n**5. Waterschap** (om de 4 jaar) — over dijken en water.\n\n**Hoe stem je?**\n• Je krijgt een **stempas** thuis.\n• Je gaat naar een **stembureau** met je legitimatie.\n• Je kiest één **kandidaat** van één partij. Dat is een persoonlijke stem voor díe persoon.\n• Geheim! Niemand mag zien op wie je stemt.\n\n**Geschiedenis**: vrouwen mogen in NL stemmen sinds **1919** (algemeen kiesrecht).",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">verkiezingen</text>
<rect x="20" y="40" width="260" height="50" rx="6" fill="${COLORS.parlement}" opacity="0.15"/>
<text x="40" y="62" fill="${COLORS.text}" font-size="11" font-family="Arial">18+ Nederlandse nationaliteit</text>
<text x="40" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">→ stempas + legitimatie → stembureau</text>
<text x="20" y="112" fill="${COLORS.text}" font-size="11" font-family="Arial">5 soorten: Tweede Kamer, Provincie,</text>
<text x="20" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">Gemeente, Europa, Waterschap</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">vrouwenkiesrecht: sinds 1919</text>
</svg>`,
    checks: [
      {
        q: "Vanaf welke leeftijd mag je stemmen in Nederland?",
        options: ["18 jaar", "16 jaar", "21 jaar", "25 jaar"],
        answer: 0,
        wrongHints: [null, "16 mag bij sommige jongerenraden, niet officieel.", "21 was vroeger.", "Nooit zo hoog geweest."],
      },
      {
        q: "Sinds welk jaar mogen vrouwen in Nederland stemmen?",
        options: ["1919", "1848", "1945", "1980"],
        answer: 0,
        wrongHints: [null, "1848 = grondwet Thorbecke (alleen rijke mannen).", "1945 = einde WO2.", "Te laat."],
      },
    ],
  },

  // B
  {
    title: "Trias Politica — drie machten gescheiden",
    explanation: "Een goede democratie heeft **drie gescheiden machten** (Trias Politica, bedacht door **Montesquieu**, 1748):\n\n**1. Wetgevende macht** — maakt wetten.\n• In NL: **Tweede Kamer + Eerste Kamer + regering**.\n\n**2. Uitvoerende macht** — voert wetten uit.\n• In NL: **regering** (kabinet) + ministeries + politie.\n\n**3. Rechtsprekende macht** — oordeelt of wetten zijn overtreden.\n• In NL: **rechters** (onafhankelijk!).\n\n**Waarom scheiden?**\nAls dezelfde persoon wetten maakt, uitvoert én rechtspreekt → kan hij die misbruiken. Door drie aparte machten **controleren ze elkaar**. Dat heet **checks and balances**.\n\n**Voorbeeld**:\n• Tweede Kamer maakt een wet → regering voert hem uit → een rechter beoordeelt of iemand de wet heeft overtreden.\n• Geen van de drie kan in zijn eentje doen wat hij wil.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">Trias Politica</text>
<rect x="20" y="40" width="80" height="120" rx="8" fill="${COLORS.parlement}" opacity="0.20" stroke="${COLORS.parlement}" stroke-width="2"/>
<text x="60" y="62" text-anchor="middle" fill="${COLORS.parlement}" font-size="11" font-family="Arial" font-weight="bold">WETGEVEND</text>
<text x="60" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Kamer +</text>
<text x="60" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">regering</text>
<text x="60" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">maakt wetten</text>
<rect x="110" y="40" width="80" height="120" rx="8" fill="${COLORS.regering}" opacity="0.20" stroke="${COLORS.regering}" stroke-width="2"/>
<text x="150" y="62" text-anchor="middle" fill="${COLORS.regering}" font-size="11" font-family="Arial" font-weight="bold">UITVOEREND</text>
<text x="150" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">regering</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">+ politie</text>
<text x="150" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">voert uit</text>
<rect x="200" y="40" width="80" height="120" rx="8" fill="${COLORS.recht}" opacity="0.20" stroke="${COLORS.recht}" stroke-width="2"/>
<text x="240" y="62" text-anchor="middle" fill="${COLORS.recht}" font-size="11" font-family="Arial" font-weight="bold">RECHT-</text>
<text x="240" y="76" text-anchor="middle" fill="${COLORS.recht}" font-size="11" font-family="Arial" font-weight="bold">SPREKEND</text>
<text x="240" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">rechters</text>
<text x="240" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">oordeelt</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">de drie controleren elkaar</text>
</svg>`,
    checks: [
      {
        q: "Wie bedacht de **Trias Politica**?",
        options: ["Montesquieu", "Thorbecke", "Willem van Oranje", "Plato"],
        answer: 0,
        wrongHints: [null, "Thorbecke schreef de NL grondwet 1848.", "Willem van Oranje = Tachtigjarige Oorlog.", "Plato dacht ook over staat, maar Trias Politica = Montesquieu."],
      },
      {
        q: "Welke macht **maakt** wetten?",
        options: ["Wetgevende macht", "Uitvoerende macht", "Rechtsprekende macht", "Koninklijke macht"],
        answer: 0,
        wrongHints: [null, "Uitvoerend voert uit.", "Rechtsprekend oordeelt.", "Koning heeft geen wetgevende macht in NL."],
      },
    ],
  },
  {
    title: "Tweede Kamer — het parlement",
    explanation: "De **Tweede Kamer** is het belangrijkste orgaan van de Nederlandse democratie. Hier worden wetten gemaakt en de regering gecontroleerd.\n\n**Feiten**:\n• **150 zetels** (kamerleden).\n• Gekozen door het volk, **om de 4 jaar**.\n• Vergadert in Den Haag, **Binnenhof**.\n• Voorzitter: de **Kamervoorzitter**.\n\n**Wat doet de Tweede Kamer?**\n• **Wetten maken**: voorstel → debat → stemmen.\n• **Regering controleren**: vragen stellen aan ministers.\n• **Begroting goedkeuren**: hoe geeft Nederland geld uit?\n\n**Politieke partijen** in 2025-2026 (~15 partijen): VVD, D66, PVV, GL-PvdA, CDA, SP, ChristenUnie, SGP, FvD, BBB, NSC, Volt, etc.\n\n**Coalitie**: meestal vormen meerdere partijen samen een meerderheid (>75 zetels) en regeren samen. Dat wordt vastgelegd in een **regeerakkoord**.\n\n**Oppositie**: partijen die niet meeregeren — zij controleren extra streng.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.parlement}" font-size="13" font-family="Arial" font-weight="bold">Tweede Kamer — 150 zetels</text>
<g>
${Array.from({ length: 30 }, (_, i) => {
  const row = Math.floor(i / 10);
  const col = i % 10;
  return `<rect x="${30 + col * 24}" y="${50 + row * 22}" width="20" height="18" rx="3" fill="${COLORS.parlement}" opacity="${0.4 + (col * 0.05)}"/>`;
}).join("")}
</g>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Binnenhof, Den Haag</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">verkiezingen elke 4 jaar</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">maakt wetten + controleert regering</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel zetels heeft de Tweede Kamer?",
        options: ["150", "75", "100", "200"],
        answer: 0,
        wrongHints: [null, "Eerste Kamer = 75.", "Te weinig.", "Te veel."],
      },
      {
        q: "Wat is een **coalitie**?",
        options: [
          "Meerdere partijen die samen regeren",
          "Een politieke partij",
          "Een verkiezingscampagne",
          "Een internationaal verdrag",
        ],
        answer: 0,
        wrongHints: [null, "Coalitie = samenwerking.", "Coalitie = samenwerkende partijen, geen losse partij.", "Niet hetzelfde als campagne.", "Kan ook bestaan, maar in NL = regerings-coalitie."],
      },
    ],
  },
  {
    title: "Eerste Kamer + regering",
    explanation: "**Eerste Kamer** (Senaat):\n• **75 zetels**.\n• Indirect gekozen door **Provinciale Staten** (provinciale parlementen).\n• Controleert wetten van de Tweede Kamer: zijn ze grondwetelijk en uitvoerbaar?\n• Kan een wet alleen aannemen of verwerpen — niet veranderen.\n\n**Regering** (= **kabinet**):\n• Bestaat uit:\n  - **Minister-president (premier)** — leider van het kabinet.\n  - **Ministers** — elk verantwoordelijk voor een gebied (Onderwijs, Financiën, Defensie, etc.).\n  - **Staatssecretarissen** — hulp-ministers voor specifieke onderwerpen.\n• Plus de **Koning** — staatshoofd (zie volgende stap).\n\n**Wat doet de regering?**\n• Voert wetten uit (uitvoerende macht).\n• Maakt wetsvoorstellen die ze naar de Tweede Kamer stuurt.\n• Regeert het land elke dag.\n\n**Hoe komt een regering tot stand?**\n1. Verkiezingen Tweede Kamer.\n2. **Formatie** (kan maanden duren): partijen onderhandelen om een meerderheid te vormen.\n3. **Regeerakkoord** wordt geschreven.\n4. Het nieuwe kabinet wordt beëdigd door de Koning.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="120" height="60" rx="6" fill="${COLORS.parlement}" opacity="0.15" stroke="${COLORS.parlement}" stroke-width="2"/>
<text x="80" y="62" text-anchor="middle" fill="${COLORS.parlement}" font-size="11" font-family="Arial" font-weight="bold">EERSTE KAMER</text>
<text x="80" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">75 zetels</text>
<text x="80" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">indirect gekozen</text>
<rect x="160" y="40" width="120" height="60" rx="6" fill="${COLORS.regering}" opacity="0.15" stroke="${COLORS.regering}" stroke-width="2"/>
<text x="220" y="62" text-anchor="middle" fill="${COLORS.regering}" font-size="11" font-family="Arial" font-weight="bold">REGERING</text>
<text x="220" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">premier + ministers</text>
<text x="220" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">+ koning</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">samen vormen ze de uitvoerende macht</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">formatie → regeerakkoord → kabinet</text>
</svg>`,
    checks: [
      {
        q: "Hoe wordt de **Eerste Kamer** gekozen?",
        options: [
          "Indirect, door Provinciale Staten",
          "Direct, door het volk",
          "Door de Koning",
          "Door de premier",
        ],
        answer: 0,
        wrongHints: [null, "Direct = Tweede Kamer.", "Koning kiest niemand zelf.", "Premier kiest geen Kamerleden."],
      },
      {
        q: "Wie is het hoofd van de **regering**?",
        options: ["Minister-president", "De Koning", "De Tweede Kamervoorzitter", "De President"],
        answer: 0,
        wrongHints: [null, "Koning is staatshoofd, niet hoofd regering.", "Voorzitter Tweede Kamer is een ander.", "Nederland heeft geen president."],
      },
    ],
  },
  {
    title: "De Koning — wat doet hij?",
    explanation: "Nederland is een **constitutionele monarchie**. De Koning is **staatshoofd**, maar heeft **geen echte politieke macht**. Wat hij doet, doet hij volgens de grondwet.\n\n**Huidige Koning**: Willem-Alexander (sinds 2013).\n**Koningin (echtgenote)**: Máxima.\n**Troonopvolgster**: prinses Amalia.\n\n**Wat doet de Koning?**\n• **Tekent wetten** — formele handeling, hij kan ze niet weigeren.\n• **Houdt Troonrede** — opent het parlementaire jaar (3e dinsdag van september = Prinsjesdag).\n• Vertegenwoordigt Nederland bij **buitenlandse bezoeken**.\n• Beëdigt nieuwe ministers.\n• Adviseert de minister-president (vertrouwelijk overleg, wekelijks).\n\n**Wat doet hij NIET?**\n• Wetten maken.\n• Politieke uitspraken in het openbaar.\n• Stemmen voor partijen.\n• Beslissingen nemen tegen de regering in.\n\n**Belangrijk principe**: \"De koning is onschendbaar, de ministers zijn verantwoordelijk\" (artikel 42 Grondwet). Dat betekent dat ministers — niet de Koning — zich verantwoorden in de Tweede Kamer.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.koning}" font-size="14" font-family="Arial" font-weight="bold">de Koning 👑</text>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Willem-Alexander (sinds 2013)</text>
<text x="20" y="80" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">Wat wel:</text>
<text x="40" y="98" fill="${COLORS.text}" font-size="11" font-family="Arial">tekent wetten · troonrede</text>
<text x="40" y="114" fill="${COLORS.text}" font-size="11" font-family="Arial">representeert NL · adviseert</text>
<text x="20" y="140" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">Wat niet:</text>
<text x="40" y="158" fill="${COLORS.text}" font-size="11" font-family="Arial">wetten maken · stemmen · politiek mengen</text>
</svg>`,
    checks: [
      {
        q: "Wie is de **huidige Koning** van Nederland?",
        options: ["Willem-Alexander", "Beatrix", "Juliana", "Amalia"],
        answer: 0,
        wrongHints: [null, "Beatrix was Koningin tot 2013.", "Juliana was tot 1980.", "Amalia is troonopvolgster."],
      },
      {
        q: "Mag de Koning wetten tegenhouden?",
        options: [
          "Nee, hij ondertekent wetten formeel",
          "Ja, hij heeft veto",
          "Alleen als hij vindt dat ze fout zijn",
          "Bij oorlog wel",
        ],
        answer: 0,
        wrongHints: [null, "In NL constitutionele monarchie: geen veto.", "Geen mening, geen weigering.", "Geen uitzondering."],
      },
    ],
  },

  // C
  {
    title: "Grondwet en grondrechten",
    explanation: "De **Grondwet** is de **belangrijkste wet** van Nederland. Alle andere wetten moeten ermee in overeenstemming zijn.\n\n**Geschiedenis**:\n• 1848: **Thorbecke** schreef de moderne grondwet — basis voor parlementaire democratie.\n• 1983: laatste grote herziening.\n\n**Grondrechten** zijn rechten die iedereen heeft. Ze staan in de eerste hoofdstukken van de Grondwet:\n\n**Klassieke grondrechten** (vrijheidsrechten):\n• Vrijheid van **godsdienst** (art. 6)\n• Vrijheid van **meningsuiting** (art. 7)\n• Vrijheid van **onderwijs** (art. 23)\n• Recht op **vereniging en vergadering** (art. 8-9)\n• **Onaantastbaarheid lichaam** (art. 11)\n• **Bescherming privacy** (art. 10, 12)\n• **Gelijkheidsbeginsel** (art. 1) — niemand mag discrimineren\n\n**Sociale grondrechten** (zorgrechten):\n• Recht op **werk** (art. 19)\n• Recht op **gezondheidszorg** (art. 22)\n• Recht op **onderwijs** (art. 23)\n• Recht op **woning** (art. 22)\n\n**Verschil**: klassieke = wat de overheid niet mag doen. Sociale = wat de overheid moet zorgen.\n\n**Beroemd is artikel 1**: *\"Allen die zich in Nederland bevinden, worden in gelijke gevallen gelijk behandeld.\"*",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">Grondwet</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">Klassiek (vrijheidsrechten):</text>
<text x="20" y="73" fill="${COLORS.muted}" font-size="10" font-family="Arial">  godsdienst, meningsuiting, onderwijs</text>
<text x="20" y="89" fill="${COLORS.muted}" font-size="10" font-family="Arial">  privacy, gelijkheid (art. 1)</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">Sociaal (zorgrechten):</text>
<text x="20" y="133" fill="${COLORS.muted}" font-size="10" font-family="Arial">  werk, gezondheidszorg, woning</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">Thorbecke 1848 → herziening 1983</text>
</svg>`,
    checks: [
      {
        q: "Wie schreef de moderne Nederlandse grondwet?",
        options: ["Thorbecke (1848)", "Willem van Oranje", "Napoleon", "Wilhelmina"],
        answer: 0,
        wrongHints: [null, "Willem van Oranje = 1500s.", "Napoleon = ~1800.", "Wilhelmina = koningin in 20e eeuw."],
      },
      {
        q: "Wat zegt **artikel 1** van de Grondwet?",
        options: [
          "Iedereen wordt in gelijke gevallen gelijk behandeld",
          "De Koning is staatshoofd",
          "Stemmen vanaf 18 jaar",
          "Vrijheid van godsdienst",
        ],
        answer: 0,
        wrongHints: [null, "Artikel 24 over staatshoofd.", "Niet artikel 1.", "Vrijheid van godsdienst is artikel 6."],
      },
    ],
  },
  {
    title: "Rechtsstaat en rechters",
    explanation: "Een **rechtsstaat** is een land waar:\n• Iedereen zich aan **dezelfde wetten** moet houden, ook de overheid.\n• **Onafhankelijke rechters** beoordelen geschillen.\n• Niemand wordt willekeurig gestraft of gevangen gezet.\n\nDit is anders dan een **politiestaat** (overheid heeft alle macht) of **wetteloze staat** (geen regels).\n\n**Soorten rechtspraak in NL**:\n\n**Strafrecht**: misdrijven (diefstal, geweld, moord).\n• Officier van Justitie klaagt aan.\n• Rechter beoordeelt schuld + straft.\n• Mogelijke straffen: boete, taakstraf, gevangenis, tbs.\n\n**Civielrecht**: geschillen tussen burgers/bedrijven.\n• Echtscheiding, schade vergoeden, contract verbroken.\n\n**Bestuursrecht**: tussen burger en overheid.\n• Bv. boete bij parkeren — je kunt naar de rechter.\n\n**Hoeveel rechtbanken?**\n1. **Rechtbank** (eerste niveau).\n2. **Gerechtshof** (hoger beroep).\n3. **Hoge Raad** (cassatie — alleen of de wet juist toegepast is).\n\n**Onafhankelijkheid**: rechters worden voor het leven benoemd door de Koning. Ze kunnen niet ontslagen worden door politici. Dat beschermt onpartijdigheid.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.recht}" font-size="13" font-family="Arial" font-weight="bold">rechtsstaat ⚖️</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">strafrecht: diefstal, geweld</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">civielrecht: tussen burgers</text>
<text x="20" y="91" fill="${COLORS.text}" font-size="11" font-family="Arial">bestuursrecht: burger vs overheid</text>
<text x="20" y="120" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">3 niveaus:</text>
<text x="40" y="138" fill="${COLORS.text}" font-size="10" font-family="Arial">rechtbank → gerechtshof → Hoge Raad</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">rechters onafhankelijk</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **rechtsstaat**?",
        options: [
          "Land waar iedereen zich aan dezelfde wetten moet houden",
          "Land geleid door rechters",
          "Land zonder politie",
          "Land met religieuze regering",
        ],
        answer: 0,
        wrongHints: [null, "Rechters oordelen, regeren niet.", "Politie hoort bij rechtsstaat.", "Dat is theocratie."],
      },
      {
        q: "Wat is de hoogste rechterlijke instantie in NL?",
        options: ["Hoge Raad", "Gerechtshof", "Rechtbank", "Tweede Kamer"],
        answer: 0,
        wrongHints: [null, "Gerechtshof = midden.", "Rechtbank = eerste niveau.", "Tweede Kamer is wetgevend, niet rechtsprekend."],
      },
    ],
  },
  {
    title: "Burger zijn — rechten en plichten",
    explanation: "Als Nederlandse burger heb je **rechten** én **plichten**.\n\n**Belangrijkste rechten**:\n• Stemrecht (vanaf 18).\n• Vrijheid van mening, godsdienst, onderwijs.\n• Recht op een eerlijk proces.\n• Recht op gezondheidszorg, onderwijs.\n• Privacy.\n\n**Belangrijkste plichten**:\n• **Belasting betalen** (voor onderwijs, zorg, infrastructuur).\n• **Leerplicht** tot 18 jaar (of tot startkwalificatie).\n• **Wetten naleven** (geen diefstal, geweld, etc.).\n• **Identificatieplicht** vanaf 14 jaar.\n• **Getuigeplicht** als rechter dat vraagt.\n\n**Geen plicht meer (sinds 1997)**: militaire dienst (dienstplicht). Ze bestaat nog op papier maar wordt niet uitgevoerd — vrijwillig leger.\n\n**Verkiezingen**: stemmen is een **recht**, geen plicht in NL. Maar door te stemmen invloed je beleid. Niet stemmen = laten anderen voor jou kiezen.\n\n**Burgerschap**: betekenis van 'goed burger zijn' in NL:\n• Verantwoordelijkheid nemen voor je gedrag.\n• Anderen respecteren ook al ben je 't niet eens.\n• Bijdragen aan de maatschappij.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">burger zijn</text>
<rect x="20" y="40" width="120" height="120" rx="8" fill="${COLORS.good}" opacity="0.12"/>
<text x="80" y="60" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">rechten</text>
<text x="80" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">stemrecht</text>
<text x="80" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">meningsuiting</text>
<text x="80" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">eerlijk proces</text>
<text x="80" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">gezondheidszorg</text>
<rect x="160" y="40" width="120" height="120" rx="8" fill="${COLORS.alt}" opacity="0.12"/>
<text x="220" y="60" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">plichten</text>
<text x="220" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">belasting betalen</text>
<text x="220" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">leerplicht</text>
<text x="220" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">wet naleven</text>
<text x="220" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">ID-plicht (14+)</text>
</svg>`,
    checks: [
      {
        q: "Wat is **geen** plicht voor Nederlandse burgers?",
        options: ["Stemmen", "Belasting betalen", "Leerplicht", "Identificatieplicht"],
        answer: 0,
        wrongHints: [null, "Stemmen is recht, niet plicht.", "Belasting wel plicht.", "Leerplicht wel.", "ID-plicht wel."],
      },
      {
        q: "Vanaf welke leeftijd ID-plicht in NL?",
        options: ["14 jaar", "12 jaar", "16 jaar", "18 jaar"],
        answer: 0,
        wrongHints: [null, "Te jong.", "Niet 16 — 14.", "ID-plicht begint eerder dan stemrecht."],
      },
    ],
  },

  // D
  {
    title: "Nederland in de wereld",
    explanation: "Nederland is geen eiland — we werken samen met andere landen.\n\n**Europese Unie (EU)**:\n• 27 landen, sinds 1957 (begon met 6).\n• NL is **medeoprichter**.\n• **Vrij verkeer** van personen, goederen, diensten en kapitaal binnen EU.\n• Gemeenschappelijke regels (bv. AVG-privacywet).\n• **Euro** is de munt sinds 2002 (in 20 EU-landen).\n• **Europees Parlement** kiest NL elke 5 jaar (29 NL-zetels van 720).\n\n**Verenigde Naties (VN)**:\n• 193 landen (bijna alle).\n• Opgericht 1945, na WO2.\n• Doel: vrede, mensenrechten, ontwikkeling.\n• **Veiligheidsraad** mag sancties opleggen.\n• Bekende organisaties: WHO (gezondheid), UNICEF (kinderen), UNESCO (cultuur).\n\n**NAVO**:\n• Militaire bondgenootschap, 32 landen.\n• \"Aanval op één = aanval op allen\" (artikel 5).\n• NL hoort bij sinds oprichting (1949).\n\n**Andere belangrijke organisaties**:\n• **WTO** (handel)\n• **IMF** (financiën)\n• **Internationaal Strafhof** (Den Haag!) — berecht oorlogsmisdaden.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">NL in de wereld</text>
<rect x="20" y="40" width="80" height="60" rx="6" fill="#003399" opacity="0.30" stroke="#003399" stroke-width="2"/>
<text x="60" y="62" text-anchor="middle" fill="#FFCC00" font-size="11" font-family="Arial" font-weight="bold">EU</text>
<text x="60" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">27 landen</text>
<text x="60" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">€ euro</text>
<rect x="110" y="40" width="80" height="60" rx="6" fill="${COLORS.parlement}" opacity="0.20"/>
<text x="150" y="62" text-anchor="middle" fill="${COLORS.parlement}" font-size="11" font-family="Arial" font-weight="bold">VN</text>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">193 landen</text>
<text x="150" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vrede</text>
<rect x="200" y="40" width="80" height="60" rx="6" fill="${COLORS.alt}" opacity="0.20"/>
<text x="240" y="62" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">NAVO</text>
<text x="240" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">32 landen</text>
<text x="240" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">defensie</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">Den Haag = ICC + ICJ + OPCW</text>
</svg>`,
    checks: [
      {
        q: "Wanneer werd de **Verenigde Naties** opgericht?",
        options: ["1945", "1919", "1957", "2002"],
        answer: 0,
        wrongHints: [null, "1919 = Volkenbond (voorganger).", "1957 = EEG.", "2002 = euro-invoering."],
      },
      {
        q: "Wat betekent **artikel 5 van de NAVO**?",
        options: [
          "Aanval op één lid = aanval op allen",
          "Iedereen krijgt euro's",
          "Vrij verkeer van personen",
          "Geen oorlog tussen leden",
        ],
        answer: 0,
        wrongHints: [null, "Niet euro — euro is EU.", "Vrij verkeer = EU.", "Klopt impliciet, maar niet artikel 5."],
      },
    ],
  },

  // E
  {
    title: "Eindopdracht — de Nederlandse staat",
    explanation: "Tijd om alles toe te passen!\n\n**Snelle samenvatting**:\n\n| Onderdeel | Wat |\n|---|---|\n| Tweede Kamer | 150 zetels, gekozen, maakt wetten |\n| Eerste Kamer | 75 zetels, indirect, controleert wetten |\n| Regering | Premier + ministers, voert uit |\n| Koning | Staatshoofd, geen politieke macht |\n| Trias Politica | Wetgevend / Uitvoerend / Rechtsprekend |\n| Grondwet | Hoogste wet, sinds Thorbecke 1848 |\n| Artikel 1 | Iedereen gelijke behandeling |\n| Stemmen | 18+, om de 4 jaar (TK) |\n| ID-plicht | Vanaf 14 jaar |\n| EU | 27 landen, euro, vrij verkeer |\n| VN | 193 landen, vrede + mensenrechten |\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="24" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">eindtoets</text>
<text x="150" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">parlement · regering · koning</text>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">Trias Politica · Grondwet</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">verkiezingen · burgerschap · EU/VN</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "Welke macht hoort bij de **rechter**?",
        options: ["Rechtsprekend", "Wetgevend", "Uitvoerend", "Koninklijk"],
        answer: 0,
        wrongHints: [null, "Wetgevend = Kamer + regering.", "Uitvoerend = regering + politie.", "Niet bestaand binnen Trias."],
      },
      {
        q: "Welke uitspraak is **juist**?",
        options: [
          "De Koning ondertekent wetten formeel",
          "De Koning maakt zelf wetten",
          "De Koning kan ministers ontslaan",
          "De Koning leidt de Tweede Kamer",
        ],
        answer: 0,
        wrongHints: [null, "Wetten maakt de Tweede Kamer.", "Koning kan ministers niet ontslaan.", "Tweede Kamer heeft eigen voorzitter."],
      },
      {
        q: "In welk gebouw vergadert de Tweede Kamer?",
        options: ["Binnenhof, Den Haag", "Paleis op de Dam", "Vredespaleis", "Catshuis"],
        answer: 0,
        wrongHints: [null, "Paleis op de Dam = koninklijk paleis Amsterdam.", "Vredespaleis = Internationaal Gerechtshof.", "Catshuis = ambtswoning premier."],
      },
      {
        q: "Wat is de **euro**?",
        options: [
          "De munt van 20 EU-landen",
          "Een Nederlandse munt",
          "Een Europese stad",
          "Een politieke partij",
        ],
        answer: 0,
        wrongHints: [null, "Niet alleen NL.", "Geen plaats.", "Geen partij."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const nederlandseStaatMaatschappijleer = {
  id: "nederlandse-staat-maatschappijleer",
  title: "De Nederlandse staat",
  emoji: "🏛️",
  level: "klas3-4",
  subject: "maatschappijleer",
  intro:
    "Hoe werkt onze democratie? Tweede Kamer, Eerste Kamer, regering, Koning, Trias Politica, Grondwet en grondrechten, rechtsstaat, stemrecht, plus NL in EU/VN/NAVO. Eerste pad maatschappijleer.",
  triggerKeywords: [
    "democratie", "kiesrecht", "stemmen",
    "tweede kamer", "eerste kamer", "parlement",
    "regering", "kabinet", "minister", "premier", "minister-president",
    "koning", "willem alexander", "monarchie", "constitutionele monarchie",
    "trias politica", "montesquieu", "machtenscheiding",
    "grondwet", "thorbecke", "artikel 1", "grondrechten",
    "rechtsstaat", "rechter", "rechtbank", "hoge raad",
    "burgerrechten", "burgerplichten", "leerplicht", "id-plicht",
    "europese unie", "EU", "euro", "schengen",
    "verenigde naties", "VN", "navo",
    "binnenhof", "prinsjesdag", "troonrede",
    "verkiezingen", "coalitie", "oppositie",
    "maatschappijleer",
  ],
  chapters,
  steps,
};

export default nederlandseStaatMaatschappijleer;
