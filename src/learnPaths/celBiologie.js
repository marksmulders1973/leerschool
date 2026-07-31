// Leerpad: De cel — bouwsteen van het leven (Biologie onderbouw VO)
// 11 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: klas 1-3 mavo/havo/vwo. Eerste biologie-leerpad.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  goodSoft: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  altSoft: "#ffab91",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  // celdelen
  membrane: "#80deea",
  cyto: "rgba(255,213,79,0.18)",
  nucleus: "#ce93d8",
  mito: "#ff7043",
  chloro: "#69f0ae",
  wall: "#a1887f",
  vacuole: "#90caf9",
};

const stepEmojis = [
  "🔬", "🧬",                        // A. Intro
  "🎯", "🟡", "🔋", "🌿",            // B. Organellen
  "🪴", "🐾",                        // C. Plant vs dier
  "🦠",                              // C. Bacterie
  "✂️",                              // D. Celdeling
  "🏆",                              // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat is een cel?", emoji: "🔬", from: 0, to: 1 },
  { letter: "B", title: "De delen van een cel", emoji: "🎯", from: 2, to: 5 },
  { letter: "C", title: "Plantcel, dierlijke cel & bacterie", emoji: "🪴", from: 6, to: 8 },
  { letter: "D", title: "Hoe groeit een organisme?", emoji: "✂️", from: 9, to: 9 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 10, to: 10 },
];

const steps = [
  // ─── A. Wat is een cel? ───────────────
  {
    title: "Wat is een cel?",
    explanation: "Een **cel** is de **kleinste levende bouwsteen** van een organisme. Alles wat leeft — bacteriën, planten, dieren, mensen — bestaat uit cellen.\n\n**Belangrijke feiten**:\n• Cellen zijn meestal te klein om met het blote oog te zien — je hebt een **microscoop** nodig.\n• Een cel kan zélf leven: voeden, groeien, afval afgeven, zich delen.\n• Eén volwassen mens bestaat uit ongeveer **30 biljoen cellen** (30.000.000.000.000).\n\nDe naam 'cel' werd in 1665 bedacht door **Robert Hooke**, die door een microscoop naar kurk keek en dacht aan kleine kamers (in het Latijn: *cellulae*).\n\nKortom: cel = bouwsteen + functioneel zelfstandig + leeft.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">cel = bouwsteen van het leven</text>
<ellipse cx="80" cy="110" rx="40" ry="32" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="2"/>
<circle cx="80" cy="110" r="12" fill="${COLORS.nucleus}" opacity="0.6"/>
<text x="80" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">één cel</text>
<text x="180" y="60" fill="${COLORS.text}" font-size="11" font-family="Arial">→ veel cellen samen</text>
<g>
${[0, 1, 2].map(r => [0, 1, 2].map(c => `<ellipse cx="${175 + c * 22}" cy="${85 + r * 18}" rx="9" ry="7" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1"/>`).join("")).join("")}
</g>
<text x="200" y="180" fill="${COLORS.text}" font-size="11" font-family="Arial">= weefsel / orgaan</text>
</svg>`,
    checks: [
      {
        q: "Wat is een cel?",
        options: [
          "De kleinste levende bouwsteen van een organisme",
          "Een soort virus",
          "Een orgaan van het lichaam",
          "Een molecuul met DNA",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een virus is veel kleiner én wordt niet als 'levend' gezien (heeft een gastcel nodig). Cellen leven zélf.",
          "Een orgaan bestaat uit veel cellen samen. Eén cel is veel kleiner.",
          "Een cel bevat DNA (in de kern), maar is meer dan alleen DNA.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Cel = bouwsteen", tekst: "Een cel is de kleinste eenheid die *zelf* leeft (eet, groeit, deelt). Alle levende wezens bestaan uit cellen." }],
          woorden: [{ woord: "organisme", uitleg: "levend wezen" }],
          theorie: "Bouw: alle organismen zijn opgebouwd uit cellen — een of veel.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Mens ~30 biljoen cellen, bacterie 1 cel" }],
          basiskennis: [{ onderwerp: "leven", uitleg: "kan eten + groeien + reageren" }],
          niveaus: { basis: "Kleinste levende bouwsteen.", simpeler: "Mini-bouwsteen.", nogSimpeler: "Klein levend stukje." },
        },
      },
      {
        q: "Wat heb je nodig om de meeste cellen te zien?",
        options: ["Een microscoop", "Een vergrootglas", "Niets, je ziet ze gewoon", "Een telescoop"],
        answer: 0,
        wrongHints: [
          null,
          "Een vergrootglas vergroot ~5×. Te weinig voor de meeste cellen.",
          "Cellen zijn meestal microscopisch klein — je ziet ze niet zomaar.",
          "Een telescoop is voor verre dingen (sterren), niet voor kleine.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Microscoop = kijken naar kleine dingen", tekst: "Cellen zijn meestal 0,01 mm — te klein voor het oog. Een microscoop vergroot ~100× tot 1000× zodat ze zichtbaar worden." }],
          woorden: [{ woord: "microscoop", uitleg: "instrument om miniscule dingen te zien" }],
          theorie: "Vergroting nodig: vergrootglas (5×) is te zwak voor cellen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Op school: lichtmicroscoop. In onderzoek: elektronenmicroscoop tot 1.000.000×" }],
          basiskennis: [{ onderwerp: "10× vergrootglas vs 400× microscoop", uitleg: "groot verschil" }],
          niveaus: { basis: "Microscoop.", simpeler: "Apparaat dat sterk vergroot.", nogSimpeler: "Niet je oog." },
        },
      },
    ],
  },
  {
    title: "Eencellig of meercellig?",
    explanation: "Niet elk organisme is groot. Sommige bestaan uit **één cel** (eencellig), andere uit **veel cellen** (meercellig).\n\n**Eencellig** *(unicellulair)*:\n• Bacteriën\n• Pantoffeldiertjes (Paramecium)\n• Algen (zoals Chlamydomonas)\n• Gisten *(de paddenstoel-soort die brood doet rijzen)*\n\nDeze organismen zijn complete wezens in één cel — ze eten, bewegen en planten zich voort.\n\n**Meercellig** *(multicellulair)*:\n• Planten (van mos tot eikenboom)\n• Dieren (van slak tot olifant)\n• Schimmels (paddenstoelen)\n• Mensen — ~30 biljoen cellen\n\nIn meercellige organismen specialiseren cellen zich: spiercellen kunnen samentrekken, zenuwcellen geleiden signalen, huidcellen beschermen. Samen vormen ze **weefsels**, die op hun beurt **organen** vormen.",
    svg: `<svg viewBox="0 0 300 180">
<text x="80" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">eencellig</text>
<ellipse cx="80" cy="80" rx="38" ry="28" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="2"/>
<circle cx="80" cy="80" r="10" fill="${COLORS.nucleus}" opacity="0.6"/>
<text x="80" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">bacterie • alg</text>
<text x="80" y="146" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">gist</text>
<text x="220" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">meercellig</text>
<g>
${Array.from({ length: 5 }, (_, i) => Array.from({ length: 4 }, (_, j) => `<ellipse cx="${178 + j * 18}" cy="${52 + i * 14}" rx="7" ry="5" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1"/>`).join("")).join("")}
</g>
<text x="220" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">plant • dier</text>
<text x="220" y="146" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">mens • paddenstoel</text>
</svg>`,
    checks: [
      {
        q: "Welke is **eencellig**?",
        options: ["Bacterie", "Mier", "Mos", "Eikenboom"],
        answer: 0,
        wrongHints: [
          null,
          "Een mier is klein, maar bestaat uit miljarden cellen.",
          "Mos is meercellig — je ziet zelfs de blaadjes.",
          "Een boom heeft veel meer dan één cel.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Eencellig = 1 cel = compleet leven", tekst: "Bacteriën bestaan uit één cel — alle taken (eten, bewegen, voortplanten) gebeuren in die ene cel." }],
          woorden: [{ woord: "unicellulair", uitleg: "eencellig" }],
          theorie: "Eencellig: bacteriën, gisten, algen, pantoffeldiertjes.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Yoghurt-bacterie, gist in brood, algen in vijver" }],
          basiskennis: [{ onderwerp: "klein", uitleg: "alleen onder microscoop te zien" }],
          niveaus: { basis: "Bacterie.", simpeler: "Eén cel = compleet wezen.", nogSimpeler: "Microscopisch." },
        },
      },
      {
        q: "Wat klopt over een meercellig organisme?",
        options: [
          "Cellen specialiseren zich in verschillende functies",
          "Elke cel doet alles zelf, net als bij eencelligen",
          "Het bestaat uit precies twee cellen",
          "Het kan niet groeien",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij meercelligen is dat juist niet zo — daar verdelen cellen het werk.",
          "'Meercellig' = veel cellen, niet precies twee.",
          "Meercelligen groeien juist door celdeling.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Specialisatie = taakverdeling", tekst: "Bij veel cellen samen: cellen krijgen elk hun rol. Spiercellen trekken samen, zenuwcellen geleiden signalen, huidcellen beschermen." }],
          woorden: [{ woord: "specialiseren", uitleg: "een specifieke rol krijgen" }],
          theorie: "Cellen samen → weefsels → organen → organisme.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Spiercel trekt samen. Huidcel beschermt. Zenuwcel stuurt." }],
          basiskennis: [{ onderwerp: "taakverdeling", uitleg: "samenwerken is efficiënter" }],
          niveaus: { basis: "Specialisatie.", simpeler: "Elke cel z'n taak.", nogSimpeler: "Samenwerken." },
        },
      },
    ],
  },

  // ─── B. De delen van een cel ───────────────
  {
    title: "Celkern — het hoofdkantoor",
    explanation: "Bijna elke cel heeft een **celkern** *(nucleus)*. Daarin zit het **DNA** — het erfelijk materiaal dat alle informatie bevat over hoe de cel moet werken.\n\n**Functies van de kern**:\n• Bewaart het DNA veilig\n• Geeft instructies door (welke eiwitten moet de cel maken?)\n• Controleert celdeling\n\nDe kern is meestal een ronde of ovale 'bal' middenin de cel, omgeven door een eigen membraan (de **kernmembraan**).\n\nUitzondering: **bacteriecellen** hebben géén kern. Hun DNA zweeft los in de cel. Dit verschil is groot: cellen *met* kern noemen we **eukaryoot**, cellen *zonder* kern **prokaryoot**.",
    svg: `<svg viewBox="0 0 300 200">
<ellipse cx="150" cy="102" rx="120" ry="76" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="3"/>
<!-- celkern met kernmembraan (dubbele rand) + kernlichaampje -->
<circle cx="150" cy="102" r="38" fill="${COLORS.nucleus}" opacity="0.28" stroke="${COLORS.nucleus}" stroke-width="3"/>
<circle cx="150" cy="102" r="32" fill="none" stroke="${COLORS.nucleus}" stroke-width="1.2" opacity="0.8"/>
<circle cx="162" cy="94" r="8" fill="${COLORS.nucleus}" opacity="0.85"/>
<!-- wat DNA-draadjes in de kern -->
<path d="M 132 110 q 8 -10 16 0 q 8 10 16 -2" stroke="${COLORS.nucleus}" stroke-width="1.4" fill="none" opacity="0.7"/>
<path d="M 130 118 q 10 -6 20 2" stroke="${COLORS.nucleus}" stroke-width="1.4" fill="none" opacity="0.7"/>
<!-- labels met aanwijslijntjes -->
<line x1="150" y1="64" x2="150" y2="34" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="150" y="26" text-anchor="middle" fill="${COLORS.nucleus}" font-size="12" font-family="Arial" font-weight="bold" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">celkern (DNA)</text>
<line x1="170" y1="88" x2="238" y2="56" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="296" y="52" text-anchor="end" fill="${COLORS.text}" font-size="10" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">kernlichaampje</text>
<line x1="118" y1="84" x2="70" y2="60" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="6" y="56" text-anchor="start" fill="${COLORS.nucleus}" font-size="9.5" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">kernmembraan</text>
<line x1="52" y1="140" x2="34" y2="176" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="30" y="188" text-anchor="start" fill="${COLORS.membrane}" font-size="10" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">celmembraan</text>
<text x="230" y="150" text-anchor="middle" fill="${COLORS.warm}" font-size="10" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">cytoplasma</text>
</svg>`,
    checks: [
      {
        q: "Wat zit er in de celkern?",
        options: ["DNA", "Bloed", "Suiker", "Lucht"],
        answer: 0,
        wrongHints: [
          null,
          "Bloed is een vloeistof in dieren, niet in een cel.",
          "Suiker (glucose) zit eerder in cytoplasma als brandstof — niet in de kern.",
          "Lucht heeft niets te maken met de kern.",
        ],
        uitlegPad: {
          stappen: [{ titel: "DNA in de kern", tekst: "De celkern is een afgesloten ruimte middenin de cel waarin het DNA (erfelijk materiaal) bewaard wordt." }],
          woorden: [{ woord: "DNA", uitleg: "code-boek van de cel — alle instructies" }],
          theorie: "Kern = bibliotheek van het DNA. Beschermt het tegen schade.",
          voorbeelden: [{ type: "voorbeeld", tekst: "DNA bepaalt of een cel een spiercel of huidcel wordt" }],
          basiskennis: [{ onderwerp: "erfelijk", uitleg: "wordt doorgegeven bij celdeling" }],
          niveaus: {
            basis: "In de celkern zit DNA — het erfelijk materiaal van de cel.",
            simpeler: "DNA = het 'recept' van de cel. De kern bewaart het veilig.",
            nogSimpeler: "Truc: kern = de bibliotheek. DNA = het boek. Beide woorden zeggen 'instructie-opslag'.",
          },
        },
      },
      {
        q: "Welke cel heeft géén kern?",
        options: ["Bacteriecel", "Plantcel", "Spiercel", "Bloedplaatje (uitzondering)"],
        answer: 0,
        wrongHints: [
          null,
          "Plantcellen hebben wél een kern.",
          "Spiercellen zijn dierlijke cellen — die hebben een kern.",
          "Klopt dat bloedplaatjes geen kern hebben — maar dat is een speciale uitzondering bij dieren. Welke hele groep cellen heeft systematisch geen kern?",
        ],
        uitlegPad: {
          stappen: [{ titel: "Bacterie = geen kern", tekst: "Bacteriën horen bij de prokaryoten: hun DNA zweeft los, niet in een afgesloten kern. Plant en dier (eukaryoten) hebben wel een kern." }],
          woorden: [{ woord: "prokaryoot", uitleg: "voor-kern: geen afgesloten kern" }],
          theorie: "Twee hoofdgroepen: prokaryoot (bacterie) vs eukaryoot (plant/dier/schimmel).",
          voorbeelden: [{ type: "voorbeeld", tekst: "E. coli, Salmonella: bacteriën, geen kern" }],
          basiskennis: [{ onderwerp: "kern of niet", uitleg: "groot verschil tussen celtypen" }],
          niveaus: { basis: "Bacterie.", simpeler: "Bacteriën = prokaryoot.", nogSimpeler: "Geen kern-zak." },
        },
      },
    ],
  },
  {
    title: "Cytoplasma & celmembraan",
    explanation: "**Cytoplasma** is de **gel-achtige vloeistof** binnenin de cel. Hierin zweven alle celdelen (organellen). Het cytoplasma vervoert stoffen en is de plek waar veel reacties gebeuren.\n\n**Celmembraan** *(plasmamembraan)* is het **buitenste vliesje** dat de cel bij elkaar houdt. Het is heel **selectief**: het laat sommige stoffen doorlaten (zuurstof, water, glucose) en houdt andere tegen (afval, vergif).\n\nEen handig beeld: \n• Cytoplasma = de soep binnenin\n• Celmembraan = de huid eromheen\n• Organellen = de stukjes groente in de soep\n\n**Plantcel-bonus**: planten hebben naast het celmembraan ook nog een stevige **celwand** (van cellulose) eromheen. Dat geeft de plant zijn vorm en stevigheid.",
    svg: `<svg viewBox="0 0 300 200">
<ellipse cx="150" cy="104" rx="116" ry="74" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="4"/>
<!-- celkern -->
<circle cx="108" cy="96" r="20" fill="${COLORS.nucleus}" opacity="0.30" stroke="${COLORS.nucleus}" stroke-width="2"/>
<circle cx="115" cy="90" r="5" fill="${COLORS.nucleus}" opacity="0.8"/>
<!-- mitochondrion als boon met cristae -->
<path d="M 168 74 C 160 66 184 60 200 66 C 214 71 214 86 200 90 C 188 93 178 86 172 88 C 164 90 162 80 168 74 Z" fill="${COLORS.mito}" opacity="0.30" stroke="${COLORS.mito}" stroke-width="2"/>
<path d="M 180 66 q -4 10 -2 20" stroke="${COLORS.mito}" stroke-width="1.2" fill="none" opacity="0.85"/>
<path d="M 192 65 q -3 11 0 22" stroke="${COLORS.mito}" stroke-width="1.2" fill="none" opacity="0.85"/>
<!-- ribosomen als kleine stippen-clusters -->
<g fill="${COLORS.goodSoft}" opacity="0.9">
<circle cx="178" cy="126" r="2.4"/><circle cx="185" cy="123" r="2.4"/><circle cx="183" cy="131" r="2.4"/><circle cx="191" cy="129" r="2.4"/><circle cx="176" cy="133" r="2.4"/>
</g>
<!-- labels + aanwijslijntjes -->
<line x1="150" y1="30" x2="150" y2="42" stroke="${COLORS.membrane}" stroke-width="1"/>
<text x="150" y="24" text-anchor="middle" fill="${COLORS.membrane}" font-size="12" font-family="Arial" font-weight="bold" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">celmembraan</text>
<line x1="108" y1="116" x2="70" y2="150" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="66" y="162" text-anchor="middle" fill="${COLORS.nucleus}" font-size="10" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">celkern</text>
<line x1="196" y1="80" x2="238" y2="58" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="296" y="54" text-anchor="end" fill="${COLORS.mito}" font-size="10" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">mitochondrium</text>
<line x1="184" y1="128" x2="230" y2="146" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="234" y="150" text-anchor="start" fill="${COLORS.goodSoft}" font-size="10" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">ribosomen</text>
<text x="150" y="192" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">cytoplasma = vloeistof binnenin</text>
</svg>`,
    checks: [
      {
        q: "Wat doet het celmembraan?",
        options: [
          "Bepaalt welke stoffen de cel in en uit gaan",
          "Maakt energie",
          "Bevat het DNA",
          "Verteert voedsel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Energie maken doen mitochondriën, niet het membraan.",
          "Het DNA zit in de kern.",
          "Verteren doen lysosomen / het maagdarmstelsel — niet het membraan zelf.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Celmembraan = poortwachter", tekst: "Het dunne vlies om de cel is selectief: zuurstof + glucose + water mogen erin, afval gaat eruit, gif blijft buiten." }],
          woorden: [{ woord: "selectief", uitleg: "kiest welke stoffen mogen passeren" }],
          theorie: "Membraan bestaat uit twee laagjes vet (fosfolipiden) met eiwit-poortjes.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Glucose komt binnen via een specifieke transporter" }],
          basiskennis: [{ onderwerp: "vlies om cel", uitleg: "buitenkant" }],
          niveaus: { basis: "Bepaalt verkeer in en uit.", simpeler: "Selectieve grenswachter.", nogSimpeler: "Vlies eromheen." },
        },
      },
      {
        q: "Wat is cytoplasma?",
        options: [
          "De vloeistof binnenin de cel waarin organellen zweven",
          "Het vlies om de cel",
          "Het DNA",
          "Een soort cel",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het celmembraan. Cytoplasma zit *binnenin*.",
          "DNA zit in de kern, niet in cytoplasma als geheel.",
          "Een soort cel? Cytoplasma is een onderdeel van een cel.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Cytoplasma = gel binnenin", tekst: "De gel-achtige vloeistof tussen de celkern en het celmembraan. Hierin zweven alle organellen (mitochondriën, kern enz.)." }],
          woorden: [{ woord: "cytoplasma", uitleg: "cyto = cel, plasma = vloeistof" }],
          theorie: "Het is de 'soep' waarin alle celonderdelen drijven.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Veel chemische reacties gebeuren in het cytoplasma" }],
          basiskennis: [{ onderwerp: "vloeistof, niet vast", uitleg: "stoffen kunnen erdoor bewegen" }],
          niveaus: { basis: "Vloeistof + organellen.", simpeler: "De binnenkant.", nogSimpeler: "De soep." },
        },
      },
    ],
  },
  {
    title: "Mitochondriën — energiefabriekjes",
    explanation: "**Mitochondriën** *(mitos = draad, chondros = korrel — \"draadkorrels\")* zijn de **energiefabriekjes** van de cel. Ze verbranden glucose (suiker) met behulp van zuurstof, en daar komt **energie** uit waarmee de cel werkt.\n\n**Reactie**: glucose + zuurstof → energie + koolstofdioxide + water.\n\n**Hoe meer energie een cel nodig heeft, hoe meer mitochondriën hij heeft**:\n• Spiercellen → veel mitochondriën\n• Hartspiercellen → héél veel mitochondriën\n• Botcellen → minder\n\nMitochondriën hebben hun eigen kleine ringvormige DNA — een van de bewijzen dat ze ooit zelfstandige bacteriën waren die in andere cellen zijn gaan samenleven (de **endosymbiose-theorie**).\n\nVorm: ovale structuren met dubbele wand en plooien binnenin (zodat er meer oppervlak is voor de energiereacties).",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="20" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">mitochondrium = energiefabriek</text>
<!-- grote boon-vorm: buitenmembraan -->
<path d="M 70 118 C 55 92 78 62 118 60 C 168 57 205 74 218 100 C 228 120 214 142 182 146 C 150 150 128 138 112 140 C 90 143 80 138 70 118 Z" fill="${COLORS.mito}" opacity="0.30" stroke="${COLORS.mito}" stroke-width="2.5"/>
<!-- binnenmembraan (dubbele wand) -->
<path d="M 80 116 C 68 96 88 74 120 72 C 164 69 196 84 207 105 C 215 121 203 133 178 136 C 150 139 130 128 114 130 C 96 132 88 130 80 116 Z" fill="none" stroke="${COLORS.mito}" stroke-width="1.4" opacity="0.9"/>
<!-- cristae (binnenplooien) -->
<path d="M 104 74 C 96 86 100 100 92 112" stroke="${COLORS.mito}" stroke-width="1.6" fill="none" opacity="0.85"/>
<path d="M 128 71 C 120 85 124 104 116 122" stroke="${COLORS.mito}" stroke-width="1.6" fill="none" opacity="0.85"/>
<path d="M 152 72 C 146 88 150 106 144 124" stroke="${COLORS.mito}" stroke-width="1.6" fill="none" opacity="0.85"/>
<path d="M 176 76 C 172 90 176 104 172 118" stroke="${COLORS.mito}" stroke-width="1.6" fill="none" opacity="0.85"/>
<path d="M 197 88 C 195 98 197 108 194 116" stroke="${COLORS.mito}" stroke-width="1.6" fill="none" opacity="0.85"/>
<!-- aanwijslijntjes + labels -->
<line x1="104" y1="112" x2="70" y2="176" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="66" y="190" text-anchor="middle" fill="${COLORS.text}" font-size="10.5" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">cristae (plooien)</text>
<line x1="216" y1="102" x2="252" y2="70" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="255" y="66" text-anchor="end" fill="${COLORS.mito}" font-size="10.5" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">dubbele wand</text>
</svg>`,
    checks: [
      {
        q: "Wat doen mitochondriën?",
        options: [
          "Energie maken (verbranding van glucose)",
          "DNA bewaren",
          "Voedsel verteren",
          "Foto-synthese (zonlicht omzetten)",
        ],
        answer: 0,
        wrongHints: [
          null,
          "DNA zit in de kern, niet in mitochondriën (al hebben mitochondriën ook eigen kleinere DNA).",
          "Verteren doen lysosomen.",
          "Fotosynthese doen chloroplasten — alleen in plantcellen.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Mitochondriën = energiefabriek", tekst: "Verbranden glucose (suiker) met zuurstof → energie + CO₂ + water. Die energie gebruikt de cel om te werken." }],
          woorden: [{ woord: "verbranding", uitleg: "chemische reactie die energie vrijmaakt" }],
          theorie: "Glucose + O₂ → energie + CO₂ + H₂O.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Bij sport: spiercellen gebruiken hun mitochondriën intensief" }],
          basiskennis: [{ onderwerp: "ATP", uitleg: "energiemunt van de cel" }],
          niveaus: { basis: "Energie maken.", simpeler: "Verbranden voor energie.", nogSimpeler: "Batterij van de cel." },
        },
      },
      {
        q: "Welke cel heeft de **meeste** mitochondriën?",
        options: ["Hartspiercel", "Huidcel", "Vetcel", "Bacterie"],
        answer: 0,
        wrongHints: [
          null,
          "Een huidcel heeft niet veel energie nodig — beschermt vooral.",
          "Vetcellen slaan energie op, maar verbruiken weinig.",
          "Bacteriën hebben helemaal geen mitochondriën.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Veel energie nodig → veel mitochondriën", tekst: "De hartspier werkt 24/7 zonder pauze. Daarom heeft een hartspiercel duizenden mitochondriën — meer dan elke andere cel." }],
          woorden: [{ woord: "hartspier", uitleg: "spier die nooit stopt" }],
          theorie: "Hoeveelheid mitochondriën hangt af van energievraag.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Spierhel sporter > leerlingencel sedentair" }],
          basiskennis: [{ onderwerp: "harder werken = meer", uitleg: "vraag bepaalt aantal" }],
          niveaus: { basis: "Hartspiercel.", simpeler: "Cellen die hard werken.", nogSimpeler: "Hart klopt altijd." },
        },
      },
    ],
  },
  {
    title: "Chloroplasten — alleen in plantcellen",
    explanation: "**Chloroplasten** zijn de **groene fabriekjes** van plantcellen. Hierin gebeurt **fotosynthese**: zonlicht wordt gebruikt om water + koolstofdioxide om te zetten in **glucose** (suiker) en **zuurstof**.\n\n**Reactie fotosynthese**:\n• water + CO₂ + zonlicht → glucose + O₂\n\nChloroplasten bevatten **bladgroen** *(chlorofyl)* — dat is de stof die zonlicht opvangt en planten hun groene kleur geeft.\n\n**Belangrijk**:\n• Alleen **plantcellen** en algen hebben chloroplasten.\n• Dieren (en mensen) krijgen hun energie uit voedsel — wij hebben geen chloroplasten.\n• De zuurstof die wij inademen, is grotendeels door chloroplasten gemaakt.\n\nNet als mitochondriën hebben chloroplasten eigen DNA en zijn ze waarschijnlijk ooit zelfstandige bacteriën geweest.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="17" text-anchor="middle" fill="${COLORS.chloro}" font-size="13" font-family="Arial" font-weight="bold">plantcel — chloroplasten doen fotosynthese</text>
<!-- dikke, hoekige CELWAND -->
<rect x="30" y="26" width="240" height="150" rx="8" fill="#2e7d32" opacity="0.22" stroke="#00c853" stroke-width="5"/>
<!-- celmembraan net binnen de wand -->
<rect x="38" y="34" width="224" height="134" rx="5" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1.6"/>
<!-- grote VACUOLE (neemt veel ruimte) -->
<rect x="96" y="52" width="140" height="98" rx="22" fill="${COLORS.vacuole}" opacity="0.28" stroke="${COLORS.vacuole}" stroke-width="1.6"/>
<text x="166" y="105" text-anchor="middle" fill="${COLORS.vacuole}" font-size="11" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">vacuole</text>
<!-- celkern met kernlichaampje -->
<circle cx="66" cy="72" r="16" fill="${COLORS.nucleus}" opacity="0.32" stroke="${COLORS.nucleus}" stroke-width="2"/>
<circle cx="71" cy="68" r="4" fill="${COLORS.nucleus}" opacity="0.85"/>
<!-- chloroplasten: groene korrels met grana-stipjes -->
<g>
<ellipse cx="70" cy="130" rx="20" ry="10" fill="${COLORS.chloro}" opacity="0.55" stroke="#2e7d32" stroke-width="1.5"/>
<circle cx="62" cy="130" r="2.4" fill="#1b5e20"/><circle cx="70" cy="128" r="2.4" fill="#1b5e20"/><circle cx="78" cy="131" r="2.4" fill="#1b5e20"/>
<ellipse cx="200" cy="152" rx="20" ry="10" fill="${COLORS.chloro}" opacity="0.55" stroke="#2e7d32" stroke-width="1.5"/>
<circle cx="192" cy="152" r="2.4" fill="#1b5e20"/><circle cx="200" cy="150" r="2.4" fill="#1b5e20"/><circle cx="208" cy="153" r="2.4" fill="#1b5e20"/>
</g>
<!-- mitochondrion (boontje) -->
<path d="M 232 62 C 226 56 244 54 252 60 C 258 65 252 74 244 72 C 238 71 236 66 232 62 Z" fill="${COLORS.mito}" opacity="0.4" stroke="${COLORS.mito}" stroke-width="1.4"/>
<!-- labels + aanwijslijntjes -->
<line x1="30" y1="40" x2="14" y2="26" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="12" y="22" text-anchor="start" fill="#00c853" font-size="9.5" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">celwand</text>
<line x1="66" y1="88" x2="40" y2="182" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="34" y="194" text-anchor="start" fill="${COLORS.nucleus}" font-size="9.5" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">celkern</text>
<line x1="90" y1="130" x2="130" y2="182" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="134" y="194" text-anchor="middle" fill="${COLORS.chloro}" font-size="9.5" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">chloroplasten</text>
<line x1="248" y1="66" x2="272" y2="182" stroke="${COLORS.muted}" stroke-width="1"/>
<text x="266" y="194" text-anchor="end" fill="${COLORS.mito}" font-size="9.5" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">mitochondrium</text>
</svg>`,
    checks: [
      {
        q: "Wat gebeurt er in chloroplasten?",
        options: [
          "Fotosynthese — zonlicht omzetten in suiker",
          "Energie verbranden",
          "DNA verdubbelen",
          "Voedsel verteren",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verbranden doen mitochondriën. Chloroplasten *maken* juist suiker.",
          "DNA verdubbelen gebeurt in de kern, vlak voor celdeling.",
          "Verteren doen lysosomen.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Fotosynthese", tekst: "Chloroplasten gebruiken zonlicht om water + CO₂ om te zetten in suiker (glucose) en zuurstof." }],
          woorden: [{ woord: "chlorofyl", uitleg: "groene kleurstof die zonlicht opvangt" }],
          theorie: "H₂O + CO₂ + zonlicht → glucose + O₂.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Bladeren zijn groen door chlorofyl in chloroplasten" }],
          basiskennis: [{ onderwerp: "alleen plant + alg", uitleg: "dieren hebben geen chloroplasten" }],
          niveaus: { basis: "Fotosynthese.", simpeler: "Zonlicht → suiker.", nogSimpeler: "Plant maakt eten." },
        },
      },
      {
        q: "Welke cel heeft chloroplasten?",
        options: ["Plantcel", "Huidcel", "Spiercel", "Zenuwcel"],
        answer: 0,
        wrongHints: [
          null,
          "Een huidcel zit op een dier — geen chloroplasten.",
          "Spiercellen zijn dierlijk.",
          "Zenuwcellen zijn dierlijk.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Alleen plantcellen", tekst: "Chloroplasten = fotosynthese-fabriekjes. Alleen planten + algen maken hun eigen voedsel. Dieren eten andere organismen." }],
          woorden: [{ woord: "autotroof", uitleg: "maakt eigen voedsel" }],
          theorie: "Plant = autotroof (chloroplast). Dier = heterotroof (eet anderen).",
          voorbeelden: [{ type: "voorbeeld", tekst: "Bladcel = veel chloroplasten. Huidcel = nul" }],
          basiskennis: [{ onderwerp: "groen = chloroplasten", uitleg: "alle groene delen van een plant" }],
          niveaus: { basis: "Plantcel.", simpeler: "Plant maakt eigen voedsel.", nogSimpeler: "Plant is groen." },
        },
      },
    ],
  },

  // ─── C. Plantcel, dierlijke cel & bacterie ───────────────
  {
    title: "Plantcel vs dierlijke cel — drie verschillen",
    explanation: "Plant- en dierlijke cellen lijken erg op elkaar (beide hebben kern, mitochondriën, cytoplasma, celmembraan), maar er zijn **drie grote verschillen**:\n\n| | Plantcel | Dierlijke cel |\n|---|---|---|\n| Celwand (cellulose) | ✅ | ❌ |\n| Chloroplasten | ✅ | ❌ |\n| Grote vacuole | ✅ (één grote) | ❌ (kleine of geen) |\n\n**Celwand** = stevige buitenwand van cellulose. Geeft de plant zijn vorm — daarom kan een boomstam staan. Dieren bewegen, dus zij hebben een flexibel celmembraan zonder stevige wand.\n\n**Chloroplasten** = plantcellen maken hun eigen voedsel via fotosynthese. Dieren eten andere organismen, dus hebben dat niet nodig.\n\n**Vacuole** = grote vloeistofzak in de plantcel die het cytoplasma 'opspant' tegen de celwand (zodat de plant rechtop staat). Wanneer een plant verlept, is de vacuole leeg.\n\n**Geheugentruc**: \"PCV is plant\" — Plantcel = Celwand + Chloroplasten + Vacuole.",
    svg: `<svg viewBox="0 0 320 200">
<!-- ===== PLANTCEL: hoekig, dikke celwand ===== -->
<text x="78" y="18" text-anchor="middle" fill="${COLORS.chloro}" font-size="12" font-family="Arial" font-weight="bold">plantcel</text>
<rect x="16" y="28" width="126" height="150" rx="7" fill="#2e7d32" opacity="0.20" stroke="#00c853" stroke-width="5"/>
<rect x="24" y="36" width="110" height="134" rx="4" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1.4"/>
<!-- grote vacuole -->
<rect x="40" y="70" width="86" height="86" rx="16" fill="${COLORS.vacuole}" opacity="0.28" stroke="${COLORS.vacuole}" stroke-width="1.4"/>
<text x="83" y="116" text-anchor="middle" fill="${COLORS.vacuole}" font-size="9" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">grote vacuole</text>
<!-- kern -->
<circle cx="50" cy="56" r="11" fill="${COLORS.nucleus}" opacity="0.35" stroke="${COLORS.nucleus}" stroke-width="1.6"/>
<circle cx="54" cy="53" r="3" fill="${COLORS.nucleus}" opacity="0.85"/>
<!-- chloroplasten met stipjes -->
<ellipse cx="104" cy="56" rx="14" ry="7" fill="${COLORS.chloro}" opacity="0.55" stroke="#2e7d32" stroke-width="1.2"/>
<circle cx="98" cy="56" r="1.8" fill="#1b5e20"/><circle cx="104" cy="55" r="1.8" fill="#1b5e20"/><circle cx="110" cy="57" r="1.8" fill="#1b5e20"/>
<ellipse cx="56" cy="160" rx="14" ry="7" fill="${COLORS.chloro}" opacity="0.55" stroke="#2e7d32" stroke-width="1.2"/>
<circle cx="50" cy="160" r="1.8" fill="#1b5e20"/><circle cx="56" cy="159" r="1.8" fill="#1b5e20"/><circle cx="62" cy="161" r="1.8" fill="#1b5e20"/>
<!-- verschil-markers plantcel -->
<line x1="16" y1="42" x2="6" y2="30" stroke="${COLORS.good}" stroke-width="1"/>
<text x="4" y="26" text-anchor="start" fill="#00c853" font-size="8.5" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">celwand</text>
<text x="83" y="192" text-anchor="middle" fill="${COLORS.chloro}" font-size="8.5" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">wand + chloroplast + vacuole</text>

<!-- ===== DIERLIJKE CEL: rond, geen wand ===== -->
<text x="240" y="18" text-anchor="middle" fill="${COLORS.altSoft}" font-size="12" font-family="Arial" font-weight="bold">dierlijke cel</text>
<ellipse cx="240" cy="102" rx="62" ry="66" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="2.4"/>
<!-- kern -->
<circle cx="228" cy="86" r="15" fill="${COLORS.nucleus}" opacity="0.35" stroke="${COLORS.nucleus}" stroke-width="1.6"/>
<circle cx="233" cy="82" r="4" fill="${COLORS.nucleus}" opacity="0.85"/>
<!-- mitochondriën (boontjes) -->
<path d="M 258 118 C 252 112 270 110 277 116 C 283 121 277 129 269 127 C 263 126 261 122 258 118 Z" fill="${COLORS.mito}" opacity="0.4" stroke="${COLORS.mito}" stroke-width="1.3"/>
<path d="M 216 130 C 210 125 226 123 232 128 C 237 132 232 139 225 138 C 220 137 218 133 216 130 Z" fill="${COLORS.mito}" opacity="0.4" stroke="${COLORS.mito}" stroke-width="1.3"/>
<!-- verschil-marker dierlijke cel -->
<text x="240" y="192" text-anchor="middle" fill="${COLORS.altSoft}" font-size="8.5" font-family="Arial" paint-order="stroke" stroke="#0d1b2e" stroke-width="2.6">geen wand, geen chloroplast</text>
</svg>`,
    checks: [
      {
        q: "Welk celdeel heeft een **plantcel** wél maar een **dierlijke cel** niet?",
        options: ["Celwand", "Celkern", "Mitochondriën", "Celmembraan"],
        answer: 0,
        wrongHints: [
          null,
          "Beide hebben een celkern.",
          "Beide hebben mitochondriën.",
          "Beide hebben een celmembraan.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Celwand = alleen plant", tekst: "Plantcellen hebben extra stevige buitenwand van cellulose. Dierlijke cellen niet — die zijn flexibel zodat dieren kunnen bewegen." }],
          woorden: [{ woord: "cellulose", uitleg: "stevige stof in plantenwanden" }],
          theorie: "PCV: Plant heeft Celwand + Chloroplasten + Vacuole. Dier niet.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Boomstam staat door celwanden. Dieren rennen zonder wanden" }],
          basiskennis: [{ onderwerp: "stevigheid vs beweging", uitleg: "trade-off" }],
          niveaus: { basis: "Celwand.", simpeler: "Plant heeft extra wand.", nogSimpeler: "Stevig." },
        },
      },
      {
        q: "Een plant verwelkt. Wat is er gebeurd?",
        options: [
          "De vacuole is leeg, de cellen zijn niet meer opgespannen",
          "De celkern is verdwenen",
          "Er zijn geen mitochondriën meer",
          "De celwand is afgebroken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De cel zou dan dood zijn. Verlepte planten herstellen vaak nog met water.",
          "Dan zou de cel dood zijn — verwelken is omkeerbaar.",
          "Dan zou de plant uit elkaar vallen.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Vacuole leeg = verwelken", tekst: "De grote vacuole drukt het cytoplasma tegen de celwand → plant staat stevig. Bij watergebrek loopt de vacuole leeg → plant verwelkt. Water geven → herstelt." }],
          woorden: [{ woord: "vacuole", uitleg: "vloeistofzak in plantcel" }],
          theorie: "Volle vacuole = turgor (spanning). Lege vacuole = slap.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Sla in koelkast: stevig. Sla uit koelkast op aanrecht: slap" }],
          basiskennis: [{ onderwerp: "water = stevigheid", uitleg: "geen water = geen druk" }],
          niveaus: { basis: "Vacuole is leeg.", simpeler: "Geen water in cel.", nogSimpeler: "Plant heeft dorst." },
        },
      },
    ],
  },
  {
    title: "Twee cellen vergelijken — overzicht",
    explanation: "Tijd om alle celdelen op een rij te zetten. Dit zijn de **organellen** die je tot nu toe geleerd hebt:\n\n| Onderdeel | Plantcel | Dierlijke cel | Functie |\n|---|---|---|---|\n| Celkern | ✅ | ✅ | Bevat DNA |\n| Cytoplasma | ✅ | ✅ | Vloeistof binnenin |\n| Celmembraan | ✅ | ✅ | Selectief vlies |\n| Mitochondriën | ✅ | ✅ | Energie maken |\n| Celwand | ✅ | ❌ | Stevigheid (cellulose) |\n| Chloroplasten | ✅ | ❌ | Fotosynthese (suiker) |\n| Grote vacuole | ✅ | ❌ | Plant overeind houden |\n\n**Manier om het te onthouden**: alles wat boven 'celwand' staat = bij beide. De drie onderaan = alleen plant.\n\n**Bonus-organellen** (kort, voor verdieping):\n• **Ribosomen** — maken eiwitten (in beide cellen).\n• **Endoplasmatisch reticulum** — netwerk waar eiwitten worden vervoerd.\n• **Lysosomen** — verteren afval (vooral in dierlijke cellen).\n• **Vacuole klein** — opslag (in dierlijke cellen).",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">overzicht: PCV = alleen plant</text>
<text x="20" y="50" fill="${COLORS.text}" font-size="12" font-family="Arial" font-weight="bold">Plant + Dier:</text>
<text x="20" y="70" fill="${COLORS.text}" font-size="11" font-family="Arial">• kern, cytoplasma, celmembraan</text>
<text x="20" y="86" fill="${COLORS.text}" font-size="11" font-family="Arial">• mitochondriën, ribosomen</text>
<line x1="20" y1="100" x2="280" y2="100" stroke="${COLORS.muted}" stroke-width="0.5" stroke-dasharray="3"/>
<text x="20" y="124" fill="${COLORS.chloro}" font-size="12" font-family="Arial" font-weight="bold">Alleen plant (PCV):</text>
<text x="20" y="144" fill="${COLORS.chloro}" font-size="11" font-family="Arial">• Celwand</text>
<text x="20" y="160" fill="${COLORS.chloro}" font-size="11" font-family="Arial">• Chloroplasten</text>
<text x="20" y="176" fill="${COLORS.chloro}" font-size="11" font-family="Arial">• grote Vacuole</text>
</svg>`,
    checks: [
      {
        q: "Welke combinatie hoort *alléén* bij plantcellen?",
        options: [
          "Celwand, chloroplasten, grote vacuole",
          "Celkern, mitochondriën, celmembraan",
          "Cytoplasma, celkern, ribosomen",
          "Lysosomen, mitochondriën, kern",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Die hebben dierlijke cellen óók.",
          "Die hebben dierlijke cellen óók.",
          "Lysosomen zitten juist vooral in dierlijke cellen.",
        ],
        uitlegPad: {
          stappen: [{ titel: "PCV = Plant", tekst: "Plant heeft drie unieke onderdelen: P (Celwand), C (Chloroplasten), V (grote Vacuole). Dier heeft die niet." }],
          woorden: [{ woord: "PCV-truc", uitleg: "ezelsbruggetje" }],
          theorie: "Onthoud: Plant = Celwand + Chloroplasten + Vacuole.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Een blad: groene chloroplasten + stevige celwand + dikke vacuole" }],
          basiskennis: [{ onderwerp: "ezelsbrug", uitleg: "PCV onthouden" }],
          niveaus: { basis: "PCV-combinatie.", simpeler: "Celwand + chloroplasten + vacuole.", nogSimpeler: "Plant-special." },
        },
      },
      {
        q: "Welke functie hoort bij **mitochondriën**?",
        options: [
          "Energie maken (verbranding)",
          "Stevigheid (cellulose)",
          "Fotosynthese (zonlicht)",
          "DNA bewaren",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Stevigheid = celwand.",
          "Fotosynthese = chloroplasten.",
          "DNA = celkern.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Mitochondrium = energie", tekst: "Mitochondriën verbranden suiker met zuurstof voor energie. Andere organellen hebben andere taken (kern=DNA, chloroplast=fotosynthese)." }],
          woorden: [{ woord: "functie", uitleg: "wat een organel doet" }],
          theorie: "Onthoud: mitochondrium = energie, kern = DNA, chloroplast = fotosynthese, celwand = stevigheid.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Hoe meer beweging → meer mitochondriën nodig" }],
          basiskennis: [{ onderwerp: "1 organel = 1 functie", uitleg: "elk z'n eigen taak" }],
          niveaus: { basis: "Energie maken.", simpeler: "Verbranden = energie.", nogSimpeler: "Batterij." },
        },
      },
    ],
  },
  {
    title: "Bacteriecel — de kernloze",
    explanation: "**Bacteriën** zijn een aparte groep. Ze zijn **eencellig** en hun cel is anders dan plant/dier:\n\n**Verschillen**:\n• **Geen celkern** — DNA zweeft los in een gebied dat *nucleoïde* heet.\n• **Geen mitochondriën** — energie wordt in het celmembraan gemaakt.\n• **Geen chloroplasten** (uitgezonderd cyanobacteriën, die kunnen wel fotosynthese).\n• **Geen 'echte' organellen met membraan**.\n• Wel: een **celwand** (van peptidoglycaan, niet cellulose), **celmembraan**, **cytoplasma**, **ribosomen** (kleiner dan in plant/dier).\n\nWegens dat ontbreken van een kern noemen we bacteriën **prokaryoot** *(\"voor-kern\")*. Plant en dier zijn **eukaryoot** *(\"echte kern\")*.\n\n**Goede bacteriën**: in je darmen, in yoghurt, in compostbakken.\n**Slechte bacteriën**: salmonella, bacteriën die infecties veroorzaken.\n\nGrootte: een bacterie is ~10× kleiner dan een dierlijke cel.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="60" y="50" width="180" height="80" rx="40" fill="${COLORS.cyto}" stroke="${COLORS.wall}" stroke-width="3"/>
<rect x="65" y="55" width="170" height="70" rx="35" fill="none" stroke="${COLORS.membrane}" stroke-width="1.5"/>
<path d="M 110 80 Q 130 70 150 88 Q 170 100 190 82" stroke="${COLORS.nucleus}" stroke-width="2" fill="none" stroke-dasharray="2"/>
<text x="150" y="105" text-anchor="middle" fill="${COLORS.nucleus}" font-size="10" font-family="Arial" font-style="italic">DNA (geen kern)</text>
<line x1="60" y1="90" x2="40" y2="90" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="40" y1="90" x2="40" y2="100" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="40" y1="100" x2="20" y2="100" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="20" y1="100" x2="20" y2="110" stroke="${COLORS.text}" stroke-width="1"/>
<text x="150" y="158" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">bacterie = prokaryoot</text>
<text x="150" y="174" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">geen kern, geen mitochondriën</text>
</svg>`,
    checks: [
      {
        q: "Wat heeft een bacteriecel **niet**?",
        options: ["Een celkern", "Een celmembraan", "Cytoplasma", "DNA"],
        answer: 0,
        wrongHints: [
          null,
          "Bacteriën hebben wél een celmembraan.",
          "Cytoplasma is de vloeistof binnenin — die heeft elke cel.",
          "DNA hebben bacteriën wel — alleen niet in een afgesloten kern.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Bacterie = geen celkern", tekst: "Bacteriën hebben wel DNA (zweeft los), wel celmembraan, wel cytoplasma — maar GEEN afgesloten celkern. Daarom prokaryoot." }],
          woorden: [{ woord: "nucleoïde", uitleg: "gebied met los DNA (geen kern-zak)" }],
          theorie: "Bacterie mist: kern, mitochondriën, chloroplasten, andere membraan-organellen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "DNA bacterie: ronde lus, los in cytoplasma" }],
          basiskennis: [{ onderwerp: "minimaal", uitleg: "bacteriën zijn simpel opgebouwd" }],
          niveaus: { basis: "Celkern.", simpeler: "Geen kern-zak.", nogSimpeler: "DNA los." },
        },
      },
      {
        q: "Welke groep is **prokaryoot**?",
        options: ["Bacteriën", "Planten", "Dieren", "Schimmels"],
        answer: 0,
        wrongHints: [
          null,
          "Planten zijn eukaryoot — ze hebben een celkern.",
          "Dieren zijn eukaryoot.",
          "Schimmels zijn eukaryoot.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Prokaryoot = bacterie", tekst: "Pro = voor, karyoot = kern. Prokaryoot betekent letterlijk 'voor de kern' — een levensvorm zonder echte celkern. Alleen bacteriën zijn prokaryoot." }],
          woorden: [{ woord: "eukaryoot", uitleg: "wel kern — plant, dier, schimmel" }],
          theorie: "Twee groepen: prokaryoot (bacterie) vs eukaryoot (al het andere).",
          voorbeelden: [{ type: "voorbeeld", tekst: "Mens, eikenboom, paddenstoel: eukaryoot. E. coli: prokaryoot" }],
          basiskennis: [{ onderwerp: "indeling alle leven", uitleg: "fundamentele scheiding" }],
          niveaus: { basis: "Bacteriën.", simpeler: "Geen-kern-groep.", nogSimpeler: "Simpelste cellen." },
        },
      },
    ],
  },

  // ─── D. Hoe groeit een organisme? ───────────────
  {
    title: "Celdeling — zo groeit een organisme",
    explanation: "Een baby is bij geboorte ongeveer 50 cm. Een volwassene is ~1,70 m. Hoe wordt iemand groter? Door **celdeling**: één cel splitst in twee, die twee delen weer in vier, enzovoort.\n\n**Stappen van een eenvoudige celdeling (mitose)**:\n1. **DNA verdubbelt** — er komen twee identieke kopieën in de kern.\n2. **DNA wordt verdeeld** — elke helft gaat naar een andere kant van de cel.\n3. **Cel knijpt zich af** — middenin ontstaat een scheidingswand.\n4. **Twee dochtercellen** — beide hebben dezelfde DNA als de moedercel.\n\n**Wanneer gebeurt het?**\n• Groei: kind wordt groter\n• Herstel: na een wond worden nieuwe huidcellen gemaakt\n• Vervanging: huidcellen, bloedcellen worden voortdurend vernieuwd\n\n**Belangrijk**: bij mitose krijg je **twee identieke** cellen. Bij voortplanting (mens) gaat het anders — daar krijg je geslachtscellen via *meiose*. Maar dat is voor later.",
    svg: `<svg viewBox="0 0 320 180">
<ellipse cx="50" cy="90" rx="30" ry="32" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1.5"/>
<circle cx="50" cy="90" r="10" fill="${COLORS.nucleus}" opacity="0.7"/>
<text x="50" y="150" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">moedercel</text>
<text x="100" y="92" fill="${COLORS.alt}" font-size="14" font-family="Arial">→</text>
<ellipse cx="155" cy="90" rx="38" ry="32" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1.5"/>
<circle cx="140" cy="90" r="10" fill="${COLORS.nucleus}" opacity="0.7"/>
<circle cx="170" cy="90" r="10" fill="${COLORS.nucleus}" opacity="0.7"/>
<text x="155" y="150" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">DNA verdeeld</text>
<text x="210" y="92" fill="${COLORS.alt}" font-size="14" font-family="Arial">→</text>
<ellipse cx="245" cy="90" rx="20" ry="28" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1.5"/>
<circle cx="245" cy="90" r="9" fill="${COLORS.nucleus}" opacity="0.7"/>
<ellipse cx="285" cy="90" rx="20" ry="28" fill="${COLORS.cyto}" stroke="${COLORS.membrane}" stroke-width="1.5"/>
<circle cx="285" cy="90" r="9" fill="${COLORS.nucleus}" opacity="0.7"/>
<text x="265" y="150" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">2 dochtercellen</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel cellen krijg je na één celdeling, als je begint met één cel?",
        options: ["2", "1", "4", "8"],
        answer: 0,
        wrongHints: [
          null,
          "Één cel splitst in twee. Eindigen op één betekent dat er niets gebeurd is.",
          "Vier krijg je pas na twee delingen achter elkaar.",
          "Acht krijg je pas na drie delingen.",
        ],
        uitlegPad: {
          stappen: [{ titel: "1 → 2", tekst: "Eén celdeling: één moedercel splitst in twee identieke dochtercellen. Na 2 delingen: 4. Na 3: 8. Verdubbeling per stap." }],
          woorden: [{ woord: "celdeling", uitleg: "splitsen in tweeën" }],
          theorie: "Aantal cellen na n delingen = 2^n.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Na 10 delingen: 1024 cellen. Na 20: ~1 miljoen" }],
          basiskennis: [{ onderwerp: "verdubbeling", uitleg: "×2 per stap" }],
          niveaus: { basis: "2.", simpeler: "Eén → twee.", nogSimpeler: "Splits." },
        },
      },
      {
        q: "Wat moet er **vóór** celdeling gebeuren?",
        options: [
          "Het DNA wordt verdubbeld",
          "De cel groeit tot 2× zo groot",
          "Het DNA wordt afgebroken",
          "Het celmembraan verdwijnt",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De cel groeit ook, maar dat is niet het belangrijkste — de twee dochtercellen moeten allebei volledig DNA krijgen.",
          "Dan krijgen de dochtercellen geen DNA. Dat is fataal voor de cel.",
          "Het celmembraan blijft juist bestaan.",
        ],
        uitlegPad: {
          stappen: [{ titel: "DNA verdubbeling eerst", tekst: "Voor de cel mag splitsen, moet het DNA eerst gekopieerd worden. Anders krijgt één dochtercel geen DNA en sterft." }],
          woorden: [{ woord: "DNA-replicatie", uitleg: "verdubbeling van DNA" }],
          theorie: "Stappen: 1) DNA verdubbelt 2) celkern splitst 3) cel snoert af 4) 2 dochters.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Elke dochtercel krijgt exacte kopie DNA — identiek aan moeder" }],
          basiskennis: [{ onderwerp: "voorbereiding", uitleg: "kopiëren vóór splitsen" }],
          niveaus: { basis: "DNA verdubbelen.", simpeler: "Twee kopieën DNA maken.", nogSimpeler: "Kopiëren eerst." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ───────────────
  {
    title: "Eindopdracht — alles op een rij",
    explanation: "Tijd om alles te combineren! Bij elke vraag: bedenk welk type cel het is en welk celdeel het hoort.\n\n**Snelle checklist**:\n• Heeft het een celwand? → plant of bacterie.\n• Heeft het chloroplasten? → plant.\n• Heeft het géén kern? → bacterie.\n• Maakt het zelf voedsel met zonlicht? → plant (chloroplast).\n• Verbrandt het glucose voor energie? → mitochondriën.\n• Slaat DNA op? → kern.\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="24" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">eindopdracht — combineer alles</text>
<text x="20" y="58" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Welk type cel?</text>
<text x="20" y="78" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Welk organel hoort bij welke functie?</text>
<text x="20" y="98" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Plant of dier?</text>
<text x="20" y="118" fill="${COLORS.text}" font-size="11" font-family="Arial">4. Eencellig of meercellig?</text>
<text x="150" y="178" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "Een cel zonder kern, met een celwand van peptidoglycaan. Wat is het?",
        options: ["Bacterie", "Plantcel", "Dierlijke cel", "Schimmel"],
        answer: 0,
        wrongHints: [
          null,
          "Plantcellen hebben wél een kern, en hun celwand is van cellulose, niet peptidoglycaan.",
          "Dierlijke cellen hebben helemaal geen celwand.",
          "Schimmels zijn eukaryoot — ze hebben een kern.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Peptidoglycaan = bacterie", tekst: "Bacteriën hebben een celwand van peptidoglycaan (bouwblok uit suikers + aminozuren). Plantcellen: cellulose. Dier: geen celwand. Schimmel: chitine." }],
          woorden: [{ woord: "peptidoglycaan", uitleg: "specifiek voor bacterie-celwand" }],
          theorie: "Geen kern + peptidoglycaan-wand = bacterie.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Penicilline werkt op de peptidoglycaan-wand → bacterie sterft" }],
          basiskennis: [{ onderwerp: "celwand-types", uitleg: "elk type cel heeft eigen wandstof" }],
          niveaus: { basis: "Bacterie.", simpeler: "Geen kern + speciale wand.", nogSimpeler: "Bacterie." },
        },
      },
      {
        q: "Welk organel maakt suiker uit zonlicht?",
        options: ["Chloroplast", "Mitochondrium", "Kern", "Lysosoom"],
        answer: 0,
        wrongHints: [
          null,
          "Mitochondriën *verbranden* suiker, ze *maken* die niet.",
          "De kern slaat DNA op — geen voedsel.",
          "Een lysosoom verteert afval — niet maakt voedsel.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Chloroplast = zonlicht → suiker", tekst: "Chloroplast neemt zonlicht op via chlorofyl en zet water + CO₂ om in glucose. Mitochondrium doet het omgekeerde: verbrandt glucose voor energie." }],
          woorden: [{ woord: "fotosynthese", uitleg: "synthese met licht" }],
          theorie: "Chloroplast maakt suiker. Mitochondrium verbrandt suiker.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Bladeren maken suiker overdag in chloroplasten" }],
          basiskennis: [{ onderwerp: "licht → energie", uitleg: "energie-opslag in suiker" }],
          niveaus: { basis: "Chloroplast.", simpeler: "Groene organel.", nogSimpeler: "Plant-only." },
        },
      },
      {
        q: "Een cel heeft géén celwand maar wél een celkern en mitochondriën. Wat is het?",
        options: ["Dierlijke cel", "Plantcel", "Bacterie", "Virus"],
        answer: 0,
        wrongHints: [
          null,
          "Plantcellen hebben juist wél een celwand.",
          "Bacteriën hebben wél een celwand én geen kern.",
          "Een virus is geen cel.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Geen celwand + wel kern = dier", tekst: "Plant: celwand + kern + mito. Bacterie: celwand + GEEN kern. Dier: GEEN celwand + WEL kern + mito. Virus is geen cel." }],
          woorden: [{ woord: "deductie", uitleg: "logisch afleiden uit kenmerken" }],
          theorie: "Check 3 dingen: kern? celwand? mitochondriën?",
          voorbeelden: [{ type: "voorbeeld", tekst: "Spiercel, huidcel, zenuwcel: allemaal dierlijke cellen" }],
          basiskennis: [{ onderwerp: "checklist", uitleg: "kenmerken vergelijken" }],
          niveaus: {
            basis: "Geen celwand + wel kern = dierlijke cel.",
            simpeler: "Plant heeft wand. Bacterie heeft wand + geen kern. Wel kern + geen wand → dierlijk.",
            nogSimpeler: "Check-volgorde: kern? mito? geen wand? → ja, ja, ja → dier. (Plant heeft wand.)",
          },
        },
      },
      {
        q: "Welke beweringen klopt over **mitochondriën**?",
        options: [
          "Ze zitten in zowel plant- als dierlijke cellen en maken energie",
          "Ze zitten alleen in plantcellen",
          "Ze maken zuurstof",
          "Ze zijn hetzelfde als de celkern",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Mitochondriën zitten in beide. Chloroplasten zijn alleen in planten.",
          "Mitochondriën *gebruiken* juist zuurstof. Chloroplasten *maken* zuurstof.",
          "Kern en mitochondrium zijn verschillende organellen.",
        ],
        uitlegPad: {
          stappen: [{ titel: "Mitochondrium = energie in plant + dier", tekst: "Mitochondriën zitten in BEIDE plantcellen en dierlijke cellen — alle eukaryote cellen hebben ze. Functie altijd: energie maken." }],
          woorden: [{ woord: "universeel", uitleg: "voor alle eukaryote cellen" }],
          theorie: "Bacterie: GEEN mitochondrium. Plant + dier + schimmel: WEL.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Eikenhouder + slak hebben allebei mitochondriën" }],
          basiskennis: [{ onderwerp: "geldt voor beide", uitleg: "niet plant-only" }],
          niveaus: { basis: "Plant + dier + energie.", simpeler: "Beide hebben mito.", nogSimpeler: "Energie-maker." },
        },
      },
      { q: "Wat is het verschil tussen een **prokaryoot** en een **eukaryoot**?", options: ["Prokaryoot heeft GEEN kern, eukaryoot WEL","Prokaryoot is een plant, eukaryoot een dier","Eukaryoot is kleiner","Geen verschil"], answer: 0, wrongHints: [null,"Niet over plant vs dier.","Andersom — eukaryoot is groter.","Wel — kern of niet."] },
      { q: "Welk organel zit **alleen in plantcellen**?", options: ["Chloroplast","Mitochondrium","Celkern","Ribosoom"], answer: 0, wrongHints: [null,"Mitochondriën leveren energie in bijna álle cellen — zitten die alleen in planten of ook in dieren?","De celkern met het DNA vind je in zowel plant- als dierlijke cellen — is dat dan typisch voor alleen planten?","Ribosomen maken eiwitten in elke cel, plant én dier — past 'alleen in plantcellen' daarbij?"] },
      { q: "**Celwand** (stevig + niet flexibel) vind je in?", options: ["Planten","Dieren","Niet — bestaat niet","Alleen bacteriën"], answer: 0, wrongHints: [null,"Dier heeft alleen celmembraan.","Wel — onderdeel plantcel.","Onvolledig."] },
      { q: "Welke is de **kleinste eenheid van leven**?", options: ["Cel","Atoom","Molecuul","Weefsel"], answer: 0, wrongHints: [null,"Geen leven.","Geen leven.","Te groot — bestaat uit cellen."] },
      { q: "**Fotosynthese** vindt plaats in?", options: ["Chloroplast","Mitochondrium","Celkern","Ribosoom"], answer: 0, wrongHints: [null,"Daar verbranding.","Daar DNA.","Daar eiwit-synthese."] },
      { q: "**DNA** zit in?", options: ["Celkern","Cytoplasma","Celmembraan","Buiten cel"], answer: 0, wrongHints: [null,"Vloeistof rondom organel.","Buitenkant.","Niet."] },
      { q: "Bacteriën zijn?", options: ["Prokaryoten (geen kern)","Eukaryoten","Geen levende wezens","Planten"], answer: 0, wrongHints: [null,"Andersom.","Wel levend.","Geen plant."] },
      { q: "Een **virus** is...?", options: ["Geen levende cel — pakketje DNA/RNA","Een soort bacterie","Een plantcel","Een dier"], answer: 0, wrongHints: [null,"Een bacterie is een echte, levende cel die zichzelf kan delen — kan een virus dat zelfstandig, zonder gastheer?","Een plantcel heeft een celwand en kan fotosynthese doen — heeft een virus zulke celonderdelen?","Een dier is opgebouwd uit miljarden cellen — is een virus zo'n groot organisme?"] },
      { q: "**Open vraag**: hoeveel chromosomen heeft een normale menselijke cel? (typ getal)", kind: "open", acceptedAnswers: ["46"], numericTolerance: 0, explanation: "Mensen hebben 46 chromosomen (23 paren) in elke lichaamscel." },
      { q: "**Open vraag**: hoe heet het proces waarbij planten suiker maken uit CO₂ + water + licht?", kind: "open", acceptedAnswers: ["fotosynthese"], explanation: "Fotosynthese: CO₂ + H₂O + lichtenergie → glucose + O₂." },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const celBiologie = {
  id: "cel-biologie",
  title: "De cel — bouwsteen van het leven",
  emoji: "🔬",
  level: "klas1-3",
  subject: "biologie",
  // SLO-kerndoelen biologie (G4 batch 3): onderbouw VO — celbiologie 26-31.
  referentieNiveau: "2F",
  sloKerndoelen: [26, 27, 28],
  sloThema: "Biologie — celbiologie",
  prerequisites: [
    { id: "ecosystemen-biologie", title: "Ecosystemen", niveau: "vmbo-2F" },
    { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid", niveau: "po-1F" },
  ],
  intro:
    "Wat is een cel, en waar bestaat hij uit? Van eencelligen tot mensen, van celkern tot mitochondriën, plus de drie verschillen tussen plant- en dierlijke cellen. Eerste leerpad biologie onderbouw.",
  triggerKeywords: [
    "cel", "cellen", "organel", "organellen",
    "celkern", "kern", "nucleus", "dna in de cel",
    "cytoplasma", "celmembraan", "celwand",
    "mitochondrium", "mitochondrien", "mitochondriën",
    "chloroplast", "chloroplasten", "fotosynthese",
    "vacuole", "ribosoom",
    "plantcel", "dierlijke cel", "bacteriecel",
    "eukaryoot", "prokaryoot",
    "celdeling", "mitose",
    "biologie cel", "bouwsteen leven",
  ],
  chapters,
  steps,
};

export default celBiologie;
