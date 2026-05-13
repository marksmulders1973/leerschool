// Leerpad: Dieren en seizoenen — PO Wereld & Natuur (groep 4-7)
// 11 stappen in 5 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  zoog: "#ff7043", vogel: "#42a5f5", vis: "#26a69a",
  reptiel: "#66bb6a", insect: "#ffb300",
  lente: "#a5d6a7", zomer: "#ffd54f", herfst: "#ff8a65", winter: "#90caf9",
  good: "#00c853",
};

const stepEmojis = ["🌿", "🐶", "🐦", "🐠", "🦗", "🥚", "🌷", "❄️", "🌲", "🦊", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is leven?", emoji: "🌿", from: 0, to: 0 },
  { letter: "B", title: "Diergroepen", emoji: "🐶", from: 1, to: 4 },
  { letter: "C", title: "Levensstadia", emoji: "🥚", from: 5, to: 5 },
  { letter: "D", title: "Seizoenen + planten", emoji: "🌷", from: 6, to: 9 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 10, to: 10 },
];

const steps = [
  {
    title: "Wat is leven?",
    explanation: "Sommige dingen **leven**, andere niet. Levende dingen zijn anders dan stenen of water.\n\n**Wat alle levende wezens doen** (zes kenmerken):\n1. **Eten** — voedsel opnemen.\n2. **Ademen** — zuurstof gebruiken.\n3. **Groeien** — groter worden.\n4. **Bewegen** — al is het maar inwendig (planten ook!).\n5. **Reageren** — op licht, warmte, gevaar.\n6. **Voortplanten** — nieuwe wezens maken.\n\n**Vier groepen levende wezens**:\n• **Mensen** — wij!\n• **Dieren** — hond, vogel, vis, mier.\n• **Planten** — bomen, gras, bloemen.\n• **Schimmels en bacteriën** — paddenstoelen, gist, bacteriën.\n\n**Niet levend**: stenen, water, wolken, plastic, metalen. Die ademen niet, eten niet, groeien niet zelf.\n\n**Leuk weetje**: een ei is wel levend — de baby-vogel groeit erin.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">leven = 6 kenmerken</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">1. eten 🍴</text>
<text x="160" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">2. ademen 💨</text>
<text x="20" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">3. groeien 📈</text>
<text x="160" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">4. bewegen 🏃</text>
<text x="20" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">5. reageren 👀</text>
<text x="160" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">6. voortplanten 👶</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial">mensen · dieren · planten · schimmels</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">niet levend: steen, water, plastic</text>
</svg>`,
    checks: [
      {
        q: "Welke is **niet** een levend wezen?",
        options: ["een steen", "een mier", "een boom", "een paddenstoel"],
        answer: 0,
        wrongHints: [null, "Mier = dier = levend.", "Boom = plant = levend.", "Paddenstoel = schimmel = levend."],
        uitlegPad: {
          stappen: [{ titel: "Steen = niet levend", tekst: "Steen ademt niet, eet niet, groeit niet. Niet levend." }],
          woorden: [{ woord: "levend", uitleg: "Voldoet aan 6 kenmerken: eten, ademen, groeien, bewegen, reageren, voortplanten." }],
          theorie: "Levend = dier/plant/schimmel/bacterie. Niet levend = steen/water/lucht/plastic.",
          voorbeelden: [{ type: "tabel", tekst: "Levend: mier, boom, paddenstoel. Niet: steen, wolk, plastic." }],
          basiskennis: [{ onderwerp: "Schimmel = levend", uitleg: "Paddenstoel is schimmel — wel levend (groeit, voortplant via sporen)." }],
          niveaus: { basis: "Steen. A.", simpeler: "Steen leeft niet (geen ademen/groeien). Mier/boom/paddenstoel zijn wel levend. = A.", nogSimpeler: "Steen = A." },
        },
      },
      {
        q: "Wat doen alle levende wezens?",
        options: ["Ze ademen", "Ze praten", "Ze lopen", "Ze zingen"],
        answer: 0,
        wrongHints: [null, "Niet alle dieren praten.", "Vissen lopen niet, planten ook niet.", "Niet alle dieren zingen."],
        uitlegPad: {
          stappen: [{ titel: "Ademen = universeel", tekst: "Alles wat leeft heeft zuurstof nodig — ook planten en bacteriën." }],
          woorden: [{ woord: "ademen", uitleg: "Zuurstof opnemen, kooldioxide afgeven." }],
          theorie: "6 levenskenmerken die ALLE wezens delen: eten, ademen, groeien, bewegen, reageren, voortplanten.",
          voorbeelden: [{ type: "lijst", tekst: "Mens ademt met longen. Vis met kieuwen. Plant via blaadjes." }],
          basiskennis: [{ onderwerp: "Niet praten/lopen/zingen", uitleg: "Praten/lopen/zingen geldt niet voor planten of vissen." }],
          niveaus: { basis: "Ademen. A.", simpeler: "ALLE levende wezens ademen (zuurstof). Praten/lopen/zingen niet voor planten/vissen. = A.", nogSimpeler: "Ademen = A." },
        },
      },
    ],
  },

  // B
  {
    title: "Zoogdieren — wat zijn dat?",
    explanation: "**Zoogdieren** (of: zogenden) zijn de groep waar **wij ook bij horen**. Kenmerken:\n\n• **Vacht of haren** op het lichaam.\n• **Warm bloed** — lichaamstemperatuur is altijd ~37 °C.\n• **Levend baren** — geen eieren leggen.\n• **Zogen**: moeder geeft melk aan haar baby.\n• **Ademen met longen** (ook bij walvissen!).\n• **Zorgen voor jongen** — vaak lang.\n\n**Voorbeelden**:\n• Op land: hond, kat, koe, paard, leeuw, mens, olifant, beer, muis.\n• In water: walvis, dolfijn, zeehond, zeekoe.\n• In de lucht: vleermuis (enige zoogdier dat kan vliegen!).\n\n**Niet alle zoogdieren zien er hetzelfde uit**, maar deze 6 kenmerken delen ze allemaal.\n\n**Leuk weetje**: het kleinste zoogdier is de hommelvleermuis (~2 g). Het grootste is de blauwe vinvis (~150.000 kg).",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="260" height="50" rx="8" fill="${COLORS.zoog}" opacity="0.18" stroke="${COLORS.zoog}" stroke-width="2"/>
<text x="150" y="68" text-anchor="middle" fill="${COLORS.zoog}" font-size="14" font-family="Arial" font-weight="bold">ZOOGDIEREN 🐶</text>
<text x="150" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">vacht · warm · zoogt · longen</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">land: hond, kat, koe, mens</text>
<text x="20" y="133" fill="${COLORS.text}" font-size="11" font-family="Arial">water: walvis, dolfijn</text>
<text x="20" y="151" fill="${COLORS.text}" font-size="11" font-family="Arial">lucht: vleermuis (enige!)</text>
</svg>`,
    checks: [
      {
        q: "Welke is een zoogdier?",
        options: ["walvis", "haai", "krokodil", "kikker"],
        answer: 0,
        wrongHints: [null, "Haai is een vis.", "Krokodil is een reptiel.", "Kikker is een amfibie."],
        uitlegPad: {
          stappen: [{ titel: "Walvis = zoogt", tekst: "Walvis lijkt op vis maar zoogt zijn jongen + ademt met longen → zoogdier." }],
          woorden: [{ woord: "walvis", uitleg: "Grootste zoogdier ooit (blauwe vinvis ~150.000 kg). Leeft in zee, zoogt." }],
          theorie: "Zoogdier-test: vacht/haren + warmbloedig + zoogt + longen.",
          voorbeelden: [{ type: "feit", tekst: "Walvis komt boven om te ademen — heeft longen, geen kieuwen." }],
          basiskennis: [{ onderwerp: "Strikvraag", uitleg: "Niet 'leeft in water' = vis. Walvis = zee + zoogdier." }],
          niveaus: { basis: "walvis. A.", simpeler: "Walvis lijkt vis maar zoogt + ademt met longen → zoogdier. Haai=vis, krokodil=reptiel, kikker=amfibie. = A.", nogSimpeler: "Walvis = A." },
        },
      },
      {
        q: "Wat is **uniek** aan zoogdieren?",
        options: [
          "Moeder geeft melk aan baby",
          "Ze leggen eieren",
          "Ze hebben koud bloed",
          "Ze leven alleen in zee",
        ],
        answer: 0,
        wrongHints: [null, "Eieren = vogels, vissen, reptielen.", "Koud bloed = vissen, reptielen.", "Zoogdieren leven overal."],
        uitlegPad: {
          stappen: [{ titel: "Zogen = melk geven", tekst: "Alleen zoogdieren geven melk aan jongen. Andere dieren niet." }],
          woorden: [{ woord: "zogen", uitleg: "Moeder geeft melk uit tepels aan baby. Daarom 'zoogdier'." }],
          theorie: "Zoogdier-uniek = melk geven. Andere kenmerken (warm bloed, longen) delen ze met vogels.",
          voorbeelden: [{ type: "feit", tekst: "Mens, koe, hond, walvis — allemaal melkgevende moeders." }],
          basiskennis: [{ onderwerp: "Eieren", uitleg: "Vogels/vissen/reptielen leggen eieren — zoogdieren bijna nooit." }],
          niveaus: { basis: "Melk geven. A.", simpeler: "Zoogdieren = enige groep die melk geeft aan baby. Daarom ZOOG-dier. = A.", nogSimpeler: "Melk = A." },
        },
      },
    ],
  },
  {
    title: "Vogels",
    explanation: "**Vogels** kun je makkelijk herkennen:\n\n• **Veren** — alleen vogels hebben veren!\n• **Twee vleugels** (wel of niet kunnen vliegen).\n• **Snavel** in plaats van bek met tanden.\n• **Twee poten** met klauwen.\n• **Eieren leggen**.\n• **Warm bloed** (zoals zoogdieren).\n• **Ademen met longen**.\n\n**Voorbeelden**:\n• Klein: mus, mees, roodborstje, koolmees.\n• Groot: roofvogel (havik, buizerd), uil, kraai.\n• Watervogel: eend, gans, zwaan, reiger.\n• Vliegen niet: pinguïn, struisvogel, kip.\n\n**Wat eten vogels?**\nVerschilt per soort:\n• Zaadeters (mus): zaden uit planten.\n• Insecteters (mees): kleine insecten.\n• Vleeseters (havik): kleine dieren.\n• Aaseters (kraai): dode dieren.\n\n**Trekvogels**: vliegen 's winters naar warme landen (zwaluw, ooievaar). **Standvogels** blijven (mus, kraai).",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="260" height="50" rx="8" fill="${COLORS.vogel}" opacity="0.18" stroke="${COLORS.vogel}" stroke-width="2"/>
<text x="150" y="68" text-anchor="middle" fill="${COLORS.vogel}" font-size="14" font-family="Arial" font-weight="bold">VOGELS 🐦</text>
<text x="150" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">veren · 2 vleugels · snavel · eieren</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">klein: mus, mees</text>
<text x="20" y="133" fill="${COLORS.text}" font-size="11" font-family="Arial">groot: havik, uil</text>
<text x="20" y="151" fill="${COLORS.text}" font-size="11" font-family="Arial">vliegt niet: pinguïn, kip</text>
</svg>`,
    checks: [
      {
        q: "Wat hebben **alleen vogels**?",
        options: ["Veren", "Vleugels", "Eieren", "Snavel"],
        answer: 0,
        wrongHints: [null, "Vleermuizen + insecten hebben ook vleugels.", "Reptielen + vissen leggen ook eieren.", "Sommige inktvissen hebben ook een snavel-achtig iets."],
        uitlegPad: {
          stappen: [{ titel: "Veren = uniek", tekst: "ALLEEN vogels hebben veren. Andere dieren hebben haar/schubben/huid." }],
          woorden: [{ woord: "veren", uitleg: "Lichte structuren voor isolatie + vliegen. Alleen vogels." }],
          theorie: "Vogel-test: heeft het veren? → vogel. Geen andere groep heeft veren.",
          voorbeelden: [{ type: "feit", tekst: "Vleermuis (zoogdier) heeft vacht, geen veren. Insect heeft pantser." }],
          basiskennis: [{ onderwerp: "Andere kenmerken niet uniek", uitleg: "Vleugels: ook insecten/vleermuis. Eieren: ook vissen/reptielen. Snavel: ook inktvis." }],
          niveaus: { basis: "Veren. A.", simpeler: "Alleen vogels hebben veren (uniek!). Vleugels/eieren/snavel komen ook bij andere dieren voor. = A.", nogSimpeler: "Veren = A." },
        },
      },
      {
        q: "Welke vogel kan **niet** vliegen?",
        options: ["pinguïn", "havik", "mus", "ooievaar"],
        answer: 0,
        wrongHints: [null, "Havik vliegt zeker.", "Mus vliegt.", "Ooievaar trekt — vliegt ver."],
        uitlegPad: {
          stappen: [{ titel: "Pinguïn = zwemt", tekst: "Pinguïn heeft vleugels die als 'flippers' werken — zwemmen, niet vliegen." }],
          woorden: [{ woord: "pinguïn", uitleg: "Vogel die niet vliegt. Leeft op zuidpool, zwemt heel goed." }],
          theorie: "Niet alle vogels vliegen: pinguïn, struisvogel, kip, kiwi.",
          voorbeelden: [{ type: "feit", tekst: "Pinguïn-vleugels evolueerden tot flippers voor zwemmen." }],
          basiskennis: [{ onderwerp: "Wel vogel", uitleg: "Pinguïn heeft veren + snavel + legt eieren → echt vogel, ondanks niet-vliegen." }],
          niveaus: { basis: "pinguïn. A.", simpeler: "Pinguïn is vogel maar kan niet vliegen — gebruikt vleugels om te zwemmen. = A.", nogSimpeler: "Pinguïn = A." },
        },
      },
    ],
  },
  {
    title: "Vissen, reptielen en amfibieën",
    explanation: "**Vissen** 🐠:\n• Leven in water.\n• **Kieuwen** — om zuurstof uit water te halen.\n• **Schubben** op het lichaam.\n• **Vinnen** om te zwemmen.\n• **Koud bloed** — temperatuur volgt water.\n• Eieren leggen.\n• Voorbeelden: forel, baars, zalm, haring.\n\n**Reptielen** 🦎:\n• **Schubben** of harde huid.\n• **Koud bloed** — opwarmen in zon.\n• **Eieren leggen** (op land, in zand).\n• Ademen met longen.\n• Voorbeelden: hagedis, slang, krokodil, schildpad.\n\n**Amfibieën** 🐸:\n• **Twee levens**: jong in water (kieuwen), volwassen op land (longen).\n• **Glibberige huid** — geen schubben.\n• **Koud bloed**.\n• **Eieren in water**.\n• Voorbeelden: kikker, salamander, pad.\n\n**Insecten** 🐞:\n• **6 poten** (precies — dat is dé manier om ze te herkennen).\n• Vaak vleugels (4 of 2).\n• Hard pantser (geen botten binnenin).\n• Voorbeelden: mier, vlinder, bij, kever.\n\n**Spinnen** zijn GEEN insecten — ze hebben **8 poten**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="120" height="50" rx="6" fill="${COLORS.vis}" opacity="0.18"/>
<text x="80" y="62" text-anchor="middle" fill="${COLORS.vis}" font-size="11" font-family="Arial" font-weight="bold">VISSEN</text>
<text x="80" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">kieuwen · schubben</text>
<rect x="160" y="40" width="120" height="50" rx="6" fill="${COLORS.reptiel}" opacity="0.18"/>
<text x="220" y="62" text-anchor="middle" fill="${COLORS.reptiel}" font-size="11" font-family="Arial" font-weight="bold">REPTIELEN</text>
<text x="220" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">slang · hagedis</text>
<rect x="20" y="100" width="120" height="50" rx="6" fill="${COLORS.zoog}" opacity="0.18"/>
<text x="80" y="122" text-anchor="middle" fill="${COLORS.zoog}" font-size="11" font-family="Arial" font-weight="bold">AMFIBIEËN</text>
<text x="80" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">kikker · salamander</text>
<rect x="160" y="100" width="120" height="50" rx="6" fill="${COLORS.insect}" opacity="0.18"/>
<text x="220" y="122" text-anchor="middle" fill="${COLORS.insect}" font-size="11" font-family="Arial" font-weight="bold">INSECTEN</text>
<text x="220" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">6 poten · mier</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">spin = 8 poten = geen insect!</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel poten heeft een **insect**?",
        options: ["6", "4", "8", "10"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "8 = spin, geen insect!", "Geen dier heeft 10."],
        uitlegPad: {
          stappen: [{ titel: "Insect = 6 poten", tekst: "Alle insecten hebben PRECIES 6 poten. Andere telling = geen insect." }],
          woorden: [{ woord: "insect", uitleg: "Dier met 6 poten + (vaak) vleugels + hard pantser." }],
          theorie: "6-poten-test: 6 = insect. 8 = spin. 10 = kreeftachtige.",
          voorbeelden: [{ type: "tabel", tekst: "Mier 6, vlinder 6, bij 6, kever 6. Spin 8 (geen insect). Krab 10." }],
          basiskennis: [{ onderwerp: "Snel-onderscheid", uitleg: "Tel poten — beste manier om insect te herkennen." }],
          niveaus: { basis: "6. A.", simpeler: "Insecten hebben ALTIJD 6 poten (mier, vlinder, bij). Spin=8 (geen insect). = A.", nogSimpeler: "6 = A." },
        },
      },
      {
        q: "Tot welke groep behoort een **kikker**?",
        options: ["amfibieën", "reptielen", "vissen", "zoogdieren"],
        answer: 0,
        wrongHints: [null, "Reptielen hebben schubben.", "Kikker leeft niet alleen in water (volwassen op land).", "Geen vacht of melk."],
        uitlegPad: {
          stappen: [{ titel: "Kikker = amfibie", tekst: "Kikker leeft eerst in water (kikkervisje), later op land. Glibberige huid. Amfibie!" }],
          woorden: [{ woord: "amfibie", uitleg: "'Twee levens' — water-fase + landfase. Glibberige huid." }],
          theorie: "Amfibie-kenmerken: 2 levens (water→land), glibberig, koud bloed, eieren in water.",
          voorbeelden: [{ type: "lijst", tekst: "Amfibieën: kikker, salamander, pad." }],
          basiskennis: [{ onderwerp: "Niet reptiel", uitleg: "Reptiel heeft schubben + droge huid. Amfibie glibberig." }],
          niveaus: { basis: "amfibieën. A.", simpeler: "Kikker leeft in water (jong) + op land (volwassen). Glibberige huid = amfibie. = A.", nogSimpeler: "Amfibie = A." },
        },
      },
      {
        q: "Wat is een **spin**?",
        options: ["Geen insect — 8 poten", "Een insect", "Een reptiel", "Een vogel"],
        answer: 0,
        wrongHints: [null, "Spinnen zijn aparte groep (spinachtigen).", "Spinnen hebben geen schubben.", "Spinnen hebben geen veren."],
        uitlegPad: {
          stappen: [{ titel: "Spin = 8 poten", tekst: "Spinnen hebben 8 poten — insecten 6. Spin = aparte groep (spinachtigen)." }],
          woorden: [{ woord: "spinachtigen", uitleg: "Aparte groep: spinnen, schorpioenen, mijten. 8 poten." }],
          theorie: "Veel mensen denken spin = insect. Fout! Spinnen vormen eigen groep.",
          voorbeelden: [{ type: "tel-test", tekst: "Tel poten: spin 8, mier 6 → andere groep." }],
          basiskennis: [{ onderwerp: "Geen vleugels", uitleg: "Spinnen kunnen niet vliegen — geen vleugels." }],
          niveaus: { basis: "Geen insect (8 poten). A.", simpeler: "Spin heeft 8 poten = NIET insect (=6 poten). Spin = aparte groep (spinachtigen). = A.", nogSimpeler: "8 poten = A." },
        },
      },
    ],
  },
  {
    title: "Andere diergroepen",
    explanation: "Naast die 5 hoofdgroepen zijn er nog kleinere:\n\n**Weekdieren** 🐌:\n• Zacht lichaam, vaak in een schelp.\n• Voorbeelden: slak, mossel, octopus, inktvis.\n\n**Schaaldieren** 🦀:\n• Pantser om lichaam.\n• Veel poten.\n• Vaak in water.\n• Voorbeelden: krab, kreeft, garnaal.\n\n**Wormen** 🪱:\n• Lang, geen poten.\n• Voorbeelden: regenworm, lintworm.\n\n**Stekelhuidigen** ⭐:\n• In zee, sterachtig.\n• Voorbeelden: zeester, zee-egel.\n\nDeze groepen zien er anders uit, maar zijn ook 'dieren'.\n\n**Even bedenken**: alle dieren zijn:\n• Levend (eten, ademen, groeien...).\n• Niet planten (kunnen geen fotosynthese).\n• Niet schimmels.\n\nDe diversiteit is enorm. Op aarde leven naar schatting **8 miljoen** verschillende diersoorten — de meeste zijn insecten.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">andere diergroepen</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">🐌 weekdieren — slak, mossel</text>
<text x="20" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">🦀 schaaldieren — krab, kreeft</text>
<text x="20" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">🪱 wormen — regenworm</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">⭐ zeesterren — stekelhuidigen</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">~8 miljoen diersoorten op aarde</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **slak**?",
        options: ["Weekdier", "Schaaldier", "Insect", "Reptiel"],
        answer: 0,
        wrongHints: [null, "Geen pantser.", "Geen 6 poten.", "Geen schubben."],
        uitlegPad: {
          stappen: [{ titel: "Zacht + schelp", tekst: "Slak heeft zacht lichaam + schelp = weekdier." }],
          woorden: [{ woord: "weekdier", uitleg: "Zacht lichaam, vaak met schelp. Slak, mossel, octopus, inktvis." }],
          theorie: "Weekdieren: zacht lichaam (geen pantser/skelet). Vaak schelp eromheen.",
          voorbeelden: [{ type: "lijst", tekst: "Weekdieren: slak, mossel, oester, octopus, inktvis." }],
          basiskennis: [{ onderwerp: "Niet schaaldier", uitleg: "Schaaldieren (krab) hebben pantser, geen schelp." }],
          niveaus: { basis: "Weekdier. A.", simpeler: "Slak = zacht lichaam + schelp = weekdier. (Krab=pantser=schaaldier.) = A.", nogSimpeler: "Weekdier = A." },
        },
      },
      {
        q: "Tot welke groep hoort een **krab**?",
        options: ["Schaaldieren", "Weekdieren", "Vissen", "Zoogdieren"],
        answer: 0,
        wrongHints: [null, "Krab heeft pantser.", "Geen schelp zoals slak.", "Geen kieuwen+schubben.", "Geen vacht."],
        uitlegPad: {
          stappen: [{ titel: "Pantser = schaaldier", tekst: "Krab heeft hard pantser + veel poten = schaaldier." }],
          woorden: [{ woord: "schaaldier", uitleg: "Pantser, veel poten, vaak in water. Krab, kreeft, garnaal." }],
          theorie: "Schaaldieren: hard pantser om lichaam, veel poten, meestal water-bewoners.",
          voorbeelden: [{ type: "lijst", tekst: "Schaaldieren: krab, kreeft, garnaal, langoest." }],
          basiskennis: [{ onderwerp: "Schelp vs pantser", uitleg: "Schelp (los, om wegtrekken): slak. Pantser (vast aan lichaam): krab." }],
          niveaus: { basis: "Schaaldier. A.", simpeler: "Krab heeft pantser + veel poten = schaaldier. (Slak=schelp=weekdier.) = A.", nogSimpeler: "Schaaldier = A." },
        },
      },
    ],
  },

  // C
  {
    title: "Levensstadia — van baby tot volwassen",
    explanation: "Dieren beginnen hun leven anders. Een paar belangrijke voorbeelden:\n\n**Mensen + zoogdieren** (levend baren):\n• baby → peuter → kind → tiener → volwassen.\n\n**Vogels**:\n• ei → kuiken → jonge vogel → volwassen.\n• Een **moedervogel broedt** op het ei (warm houden) tot het uitkomt.\n\n**Vissen**:\n• ei → larve → volwassen vis.\n\n**Amfibieën** (kikker als voorbeeld):\n• ei → **kikkervisje** (in water, met staart) → kikker met poten → volwassen kikker.\n• Dit heet **gedaanteverwisseling** (metamorfose): het dier verandert van vorm.\n\n**Insecten** (vlinder als voorbeeld):\n• ei → **rups** → **pop** (cocon) → volwassen vlinder.\n• Ook gedaanteverwisseling — heel beroemd.\n\n**Veel dieren bij geboorte**:\n• **Nestblijvers** (vogel-kuiken, mens-baby): kunnen niets, ouders zorgen.\n• **Nestvlieders** (kuiken van eend): kunnen meteen lopen.\n\n**Paartijd**: dieren willen zich voortplanten. Vogels zingen, herten vechten, kikkers kwaken — allemaal om een partner te vinden.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">levensstadia</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">vogel: ei → kuiken → volwassen</text>
<text x="20" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">kikker: ei → kikkervisje → kikker</text>
<text x="20" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">vlinder: ei → rups → pop → vlinder</text>
<text x="20" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">mens: baby → kind → tiener → volwassen</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">metamorfose: van vorm veranderen</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">kikker + vlinder doen dat</text>
</svg>`,
    checks: [
      {
        q: "Wat zit er **tussen** rups en vlinder?",
        options: ["pop", "ei", "kuiken", "kikkervisje"],
        answer: 0,
        wrongHints: [null, "Ei is daarvoor.", "Kuiken is voor vogels.", "Kikkervisje is voor kikker."],
        uitlegPad: {
          stappen: [{ titel: "Ei → rups → pop → vlinder", tekst: "Vlinder-cyclus heeft 4 fases. Tussen rups en vlinder = pop (cocon)." }],
          woorden: [{ woord: "pop", uitleg: "Tussenfase in cocon. Rups verandert binnen tot vlinder." }],
          theorie: "Vlinder-cyclus: ei → rups → pop → vlinder. Pop is wonderbaarlijke verandering.",
          voorbeelden: [{ type: "stap", tekst: "Vlinder legt ei → komt rups uit → eet veel → maakt cocon (pop) → vlinder uit." }],
          basiskennis: [{ onderwerp: "Cocon", uitleg: "Pop hangt vaak aan blaadje of takje, beschermd in cocon." }],
          niveaus: { basis: "pop. A.", simpeler: "Volgorde: ei → rups → POP → vlinder. Pop is tussenfase in cocon. = A.", nogSimpeler: "Pop = A." },
        },
      },
      {
        q: "Wat heet **gedaanteverwisseling**?",
        options: [
          "Een dier dat tijdens zijn leven van vorm verandert",
          "Een dier dat oud wordt",
          "Een dier dat van kleur verandert",
          "Een dier dat verhuist",
        ],
        answer: 0,
        wrongHints: [null, "Oud worden hoort er niet bij.", "Kleur is iets anders.", "Verhuizen is geen gedaanteverwisseling."],
        uitlegPad: {
          stappen: [{ titel: "Vorm-verandering", tekst: "Gedaante = vorm. Verwisseling = veranderen. Dier verandert volledig van vorm." }],
          woorden: [{ woord: "metamorfose", uitleg: "Wetenschappelijke naam voor gedaanteverwisseling." }],
          theorie: "Bekende voorbeelden: rups → vlinder. Kikkervisje → kikker. Volledig andere vorm.",
          voorbeelden: [{ type: "tabel", tekst: "Vlinder en kikker zijn beroemd voor metamorfose." }],
          basiskennis: [{ onderwerp: "Niet kleur", uitleg: "Kleurverandering = camouflage, niet gedaanteverwisseling." }],
          niveaus: { basis: "Van vorm veranderen. A.", simpeler: "Gedaanteverwisseling = dier verandert tijdens leven van vorm (rups→vlinder, kikkervisje→kikker). = A.", nogSimpeler: "Vorm = A." },
        },
      },
    ],
  },

  // D
  {
    title: "Lente en zomer",
    explanation: "Nederland heeft **vier seizoenen** door de stand van de aarde rond de zon.\n\n**LENTE 🌷** (maart, april, mei):\n• Het wordt warmer.\n• **Bomen** krijgen blaadjes.\n• Bloemen bloeien (tulpen, narcissen, paardenbloemen).\n• Vogels maken **nesten** en leggen **eieren**.\n• Veel **jonge dieren** worden geboren (lammetjes, kuikens, hazen).\n• Trekvogels keren **terug** uit warme landen.\n\n**ZOMER ☀️** (juni, juli, augustus):\n• Heet, lange dagen, korte nachten.\n• Bomen vol bladeren, alles groeit.\n• Veel **insecten** (vlinders, bijen, libellen).\n• Vogels leren hun jongen vliegen.\n• Boeren maken **hooi** voor de winter.\n• Mensen op vakantie.\n\n**Waarom verschillen seizoenen?**\nDe aarde staat **schuin** op zijn as. Wanneer onze kant naar de zon gewend is → zomer (= meer zonkracht, langere dagen). Wanneer afgewend → winter.\n\nOp de **evenaar** zijn er nauwelijks seizoenen. Bij de **polen** is het 6 maanden licht, dan 6 maanden donker.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="120" height="120" rx="10" fill="${COLORS.lente}" opacity="0.30" stroke="${COLORS.lente}" stroke-width="2"/>
<text x="80" y="62" text-anchor="middle" fill="#1b5e20" font-size="13" font-family="Arial" font-weight="bold">LENTE 🌷</text>
<text x="80" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">bloemen</text>
<text x="80" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">jonge dieren</text>
<text x="80" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">trekvogels terug</text>
<text x="80" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">mrt-apr-mei</text>
<rect x="160" y="40" width="120" height="120" rx="10" fill="${COLORS.zomer}" opacity="0.30" stroke="${COLORS.zomer}" stroke-width="2"/>
<text x="220" y="62" text-anchor="middle" fill="#bf360c" font-size="13" font-family="Arial" font-weight="bold">ZOMER ☀️</text>
<text x="220" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">heet, lang licht</text>
<text x="220" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">veel insecten</text>
<text x="220" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">groen overal</text>
<text x="220" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">jun-jul-aug</text>
</svg>`,
    checks: [
      {
        q: "Wat gebeurt vooral in de **lente**?",
        options: ["Veel jonge dieren geboren", "Bladeren vallen", "Sneeuw", "Lange koude nachten"],
        answer: 0,
        wrongHints: [null, "Bladeren vallen = herfst.", "Sneeuw = winter.", "Lange koude nachten = winter."],
        uitlegPad: {
          stappen: [{ titel: "Lente = nieuw leven", tekst: "Lente: warmer + bloemen + jonge dieren (lammetjes, kuikens, hazen)." }],
          woorden: [{ woord: "lente", uitleg: "Maart-april-mei. Periode van ontwaken na winter." }],
          theorie: "Seizoen-toewijzing: lente=geboorte, zomer=groei, herfst=oogst/voorraad, winter=rust.",
          voorbeelden: [{ type: "tabel", tekst: "Lente: lammetjes, kuikens, paardenbloemen, trekvogels terug." }],
          basiskennis: [{ onderwerp: "Niet andere seizoenen", uitleg: "Bladval=herfst, sneeuw/koude nachten=winter." }],
          niveaus: { basis: "Jonge dieren. A.", simpeler: "Lente = jonge dieren geboren (lammetjes, kuikens) + bloemen bloeien. = A.", nogSimpeler: "Jong = A." },
        },
      },
      {
        q: "Waarom is het in de zomer warmer?",
        options: [
          "Onze kant van de aarde staat naar de zon",
          "De zon is dichterbij",
          "Er zijn meer wolken",
          "We staan stil",
        ],
        answer: 0,
        wrongHints: [null, "Afstand tot zon wisselt nauwelijks.", "Wolken maken het juist koeler.", "Aarde draait altijd."],
        uitlegPad: {
          stappen: [{ titel: "Schuine as", tekst: "Aarde staat schuin op zijn as. Zomer = onze kant naar zon = meer zonkracht." }],
          woorden: [{ woord: "as-helling", uitleg: "Aarde-as staat 23,5° schuin. Daarom seizoenen op gematigde breedtes." }],
          theorie: "Seizoenen NIET door afstand zon, MAAR door schuinte. Onze halfrond meer/minder naar zon gericht.",
          voorbeelden: [{ type: "feit", tekst: "Wanneer NL zomer heeft, heeft Australië winter (andere kant)." }],
          basiskennis: [{ onderwerp: "Niet afstand", uitleg: "Aarde is in juli juist verst van zon — toch zomer NL." }],
          niveaus: { basis: "Onze kant naar zon. A.", simpeler: "Zomer = onze kant van aarde naar zon gedraaid → meer zonkracht → warmer. = A.", nogSimpeler: "Naar zon = A." },
        },
      },
    ],
  },
  {
    title: "Herfst en winter",
    explanation: "**HERFST 🍂** (september, oktober, november):\n• Wordt **kouder**, dagen worden korter.\n• Bladeren van bomen worden geel/oranje en **vallen af**.\n• **Trekvogels** vliegen naar warme landen.\n• Sommige dieren leggen voorraad aan: eekhoorn verstopt nootjes.\n• Anderen worden vetter voor de winter (egel, dassen).\n• Veel paddenstoelen.\n\n**WINTER ❄️** (december, januari, februari):\n• Koud, soms vorst en sneeuw.\n• **Bomen kaal** (alleen naaldbomen blijven groen).\n• Veel dieren slapen in **winterslaap** (egel, vleermuis, beer in koudere streken).\n• Andere dieren passen vacht aan: dikker, soms wit (sneeuwhaas).\n• Vogels die blijven (mus, mees) hebben moeite om voedsel te vinden.\n• Mensen kunnen helpen: vogelvoer in de tuin.\n\n**Wat is winterslaap?**\nDieren laten hun **lichaamstemperatuur dalen** en bewegen bijna niet. Hun hart klopt langzaam. Zo gebruiken ze weinig energie. In de lente worden ze wakker.\n\n**Waarom vallen bladeren?**\nBomen sparen energie. In winter is er weinig zonlicht voor fotosynthese. Bladeren zouden alleen energie kosten. Naaldbomen behouden hun naalden omdat die met minder energie kunnen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="120" height="120" rx="10" fill="${COLORS.herfst}" opacity="0.30" stroke="${COLORS.herfst}" stroke-width="2"/>
<text x="80" y="62" text-anchor="middle" fill="#bf360c" font-size="13" font-family="Arial" font-weight="bold">HERFST 🍂</text>
<text x="80" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">bladeren vallen</text>
<text x="80" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">trekvogels weg</text>
<text x="80" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">paddenstoelen</text>
<text x="80" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">sep-okt-nov</text>
<rect x="160" y="40" width="120" height="120" rx="10" fill="${COLORS.winter}" opacity="0.30" stroke="${COLORS.winter}" stroke-width="2"/>
<text x="220" y="62" text-anchor="middle" fill="#0d47a1" font-size="13" font-family="Arial" font-weight="bold">WINTER ❄️</text>
<text x="220" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">kou, vorst</text>
<text x="220" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">bomen kaal</text>
<text x="220" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">winterslaap</text>
<text x="220" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">dec-jan-feb</text>
</svg>`,
    checks: [
      {
        q: "Welk dier slaapt **winterslaap**?",
        options: ["egel", "kraai", "ree", "vleermuis (deels)"],
        answer: 0,
        wrongHints: [null, "Kraai blijft actief.", "Ree blijft actief, zoekt eten in bos.", "Klopt ook eigenlijk — vleermuis hangt in winterslaap. Maar egel is klassieker."],
        uitlegPad: {
          stappen: [{ titel: "Egel = winterslaap", tekst: "Egel is klassiek winterslaap-dier. Slaapt nov-april in nest van bladeren." }],
          woorden: [{ woord: "winterslaap", uitleg: "Lichaamstemperatuur daalt, bewegingen bijna nul. Bespaart energie." }],
          theorie: "Winterslaap-dieren: egel, vleermuis, hamster. Niet: ree, vos, kraai (blijven actief).",
          voorbeelden: [{ type: "feit", tekst: "Egel weegt vóór winter ~1 kg, in winterslaap zakt hartslag van 190 → 20." }],
          basiskennis: [{ onderwerp: "Vleermuis ook", uitleg: "Vleermuis houdt ook winterslaap (in grotten, kerken)." }],
          niveaus: { basis: "egel. A.", simpeler: "Egel = klassiek winterslaap-dier. Slaapt hele winter in nest. = A.", nogSimpeler: "Egel = A." },
        },
      },
      {
        q: "Waarom **vallen bladeren** in de herfst?",
        options: [
          "Boom spaart energie in winter",
          "Bladeren worden vies",
          "Sneeuw drukt ze eraf",
          "Vogels eten ze op",
        ],
        answer: 0,
        wrongHints: [null, "Niet over vies.", "Bladeren vallen vóór de sneeuw.", "Vogels eten geen bladeren."],
        uitlegPad: {
          stappen: [{ titel: "Geen zonlicht = geen werk", tekst: "Bladeren maken voedsel met zonlicht. Winter = weinig licht. Bladeren kosten dan energie. Dus: vallen af." }],
          woorden: [{ woord: "fotosynthese", uitleg: "Voedsel maken uit zonlicht. Stopt bij gebrek aan licht." }],
          theorie: "Loofbomen sparen energie door bladeren af te werpen. Naaldbomen behouden naalden (efficiënter).",
          voorbeelden: [{ type: "feit", tekst: "Eik laat in oktober blad vallen → spaart sap voor wortels → groeit weer in lente." }],
          basiskennis: [{ onderwerp: "Naaldbomen anders", uitleg: "Spar/den behouden naalden — naalden hebben minder verlies." }],
          niveaus: { basis: "Energie sparen. A.", simpeler: "Winter = weinig licht. Bladeren werken niet → kosten energie. Boom werpt ze af om te overleven. = A.", nogSimpeler: "Sparen = A." },
        },
      },
    ],
  },
  {
    title: "Planten en bomen",
    explanation: "**Planten** zijn levende wezens die anders zijn dan dieren:\n• **Maken eigen voedsel** uit zonlicht (fotosynthese).\n• Geen organen zoals dieren.\n• Bewegen niet weg, blijven op één plek.\n• Hebben bladeren, stengels, wortels, bloemen.\n\n**Onderdelen van een plant**:\n• **Wortel**: in de grond — pakt water + voedingsstoffen op.\n• **Stengel/stam**: draagt de plant.\n• **Blad**: vangt zonlicht — fotosynthese.\n• **Bloem**: voor voortplanting.\n• **Vrucht/zaad**: nieuwe plant.\n\n**Twee soorten bomen**:\n• **Loofbomen** — bladeren in zomer, kaal in winter. Eik, beuk, esdoorn, berk.\n• **Naaldbomen** — naalden, blijven groen ('s winters ook). Den, spar, lariks.\n\n**Fotosynthese** (foto = licht, synthese = maken):\n• water + koolstofdioxide + zonlicht → suiker + zuurstof.\n• Daarom geven planten ons zuurstof om te ademen!\n\n**Bestuiving**: bijen, hommels en vlinders brengen stuifmeel van bloem naar bloem. Zonder hen geen vruchten en zaden — geen nieuwe planten.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">plant 🌱</text>
<line x1="150" y1="50" x2="150" y2="160" stroke="#5d4037" stroke-width="3"/>
<ellipse cx="150" cy="50" rx="40" ry="20" fill="#43a047" opacity="0.5"/>
<ellipse cx="150" cy="170" rx="50" ry="10" fill="#5d4037" opacity="0.4"/>
<text x="195" y="40" fill="#1b5e20" font-size="10" font-family="Arial">blad: fotosynthese</text>
<text x="195" y="100" fill="#5d4037" font-size="10" font-family="Arial">stengel: dragen</text>
<text x="195" y="170" fill="#5d4037" font-size="10" font-family="Arial">wortel: water</text>
<line x1="150" y1="120" x2="150" y2="120" stroke="#ec407a" stroke-width="3"/>
<circle cx="120" cy="100" r="6" fill="#ec407a"/>
<text x="60" y="105" text-anchor="middle" fill="#ec407a" font-size="10" font-family="Arial">bloem: zaden</text>
</svg>`,
    checks: [
      {
        q: "Wat is **fotosynthese**?",
        options: [
          "Plant maakt suiker uit zonlicht",
          "Plant fotografeert de zon",
          "Plant verbrandt suiker",
          "Plant ademt water in",
        ],
        answer: 0,
        wrongHints: [null, "Niets met fotograferen.", "Verbranden = mitochondriën in dieren.", "Niet zo eenvoudig."],
        uitlegPad: {
          stappen: [{ titel: "Foto + synthese", tekst: "Foto=licht. Synthese=maken. Plant maakt suiker uit zonlicht (+ water + CO2)." }],
          woorden: [{ woord: "fotosynthese", uitleg: "Plant maakt voedsel via zonlicht. Geeft zuurstof af." }],
          theorie: "Formule: water + CO2 + zonlicht → suiker + zuurstof.",
          voorbeelden: [{ type: "feit", tekst: "Daarom geven planten ons zuurstof om te ademen!" }],
          basiskennis: [{ onderwerp: "Niet fotograferen", uitleg: "'Foto' Grieks voor licht (zoals bij fotosynthese, fotograaf)." }],
          niveaus: { basis: "Suiker uit zonlicht. A.", simpeler: "Foto (licht) + synthese (maken) = plant maakt suiker uit zonlicht. Geeft zuurstof af. = A.", nogSimpeler: "Suiker = A." },
        },
      },
      {
        q: "Welk onderdeel van de plant is voor **voortplanting**?",
        options: ["bloem", "wortel", "stam", "blad"],
        answer: 0,
        wrongHints: [null, "Wortel haalt water.", "Stam draagt.", "Blad doet fotosynthese."],
        uitlegPad: {
          stappen: [{ titel: "Bloem = voortplanting", tekst: "Bloem heeft stuifmeel + stamper → bestoven → vrucht/zaad → nieuwe plant." }],
          woorden: [{ woord: "bloem", uitleg: "Voortplantingsorgaan plant. Maakt zaden/vruchten." }],
          theorie: "Plant-onderdelen + functie: wortel=water, stam=dragen, blad=fotosynthese, bloem=voortplanting.",
          voorbeelden: [{ type: "stap", tekst: "Bij verstuift bloem → vrucht → zaad valt → nieuwe plant groeit." }],
          basiskennis: [{ onderwerp: "Bestuiving", uitleg: "Bijen/hommels brengen stuifmeel van bloem naar bloem. Cruciale rol." }],
          niveaus: { basis: "bloem. A.", simpeler: "Bloem maakt zaden voor nieuwe planten = voortplantingsorgaan. = A.", nogSimpeler: "Bloem = A." },
        },
      },
      {
        q: "Welke is een **naaldboom**?",
        options: ["spar", "eik", "beuk", "esdoorn"],
        answer: 0,
        wrongHints: [null, "Eik = loofboom.", "Beuk = loofboom.", "Esdoorn = loofboom."],
        uitlegPad: {
          stappen: [{ titel: "Spar = naalden", tekst: "Spar heeft naalden (geen bladeren). Blijft 's winters groen → naaldboom." }],
          woorden: [{ woord: "naaldboom", uitleg: "Boom met naalden (geen bladeren). Den, spar, lariks." }],
          theorie: "2 boom-soorten: naaldbomen (groen 's winters) + loofbomen (kaal 's winters).",
          voorbeelden: [{ type: "tabel", tekst: "Naald: spar, den, dennen, lariks. Loof: eik, beuk, esdoorn, berk." }],
          basiskennis: [{ onderwerp: "Kerstboom", uitleg: "Kerstboom is meestal spar of den — naaldbomen blijven groen." }],
          niveaus: { basis: "spar. A.", simpeler: "Spar heeft naalden + blijft 's winters groen = naaldboom. (Eik/beuk/esdoorn = loofboom). = A.", nogSimpeler: "Spar = A." },
        },
      },
    ],
  },
  {
    title: "Voedselketen — wie eet wat?",
    explanation: "Een **voedselketen** laat zien wie wat eet. Energie stroomt van zon naar dier naar dier.\n\n**Voorbeeld voedselketen** (sloot):\n• zon → gras → konijn → vos\n• De zon geeft energie aan **gras** (planten).\n• Het **konijn** eet gras.\n• De **vos** eet konijnen.\n\n**Begrippen**:\n• **Producent**: maakt zelf voedsel = plant.\n• **Planteneter** (herbivoor): koe, konijn, schaap, hert, rups, ree.\n• **Vleeseter** (carnivoor): vos, leeuw, havik, krokodil.\n• **Alleseter** (omnivoor): mens, beer, varken, kraai.\n• **Aaseter**: eet dode dieren (kraai, gier).\n• **Afbreker**: schimmels, bacteriën, regenwormen — maken dode resten weer tot grond.\n\n**Voedselweb**: meerdere ketens die elkaar kruisen. In de natuur eet niet alleen één dier één ander — het is een netwerk.\n\n**Belangrijk**: als één schakel verdwijnt, raakt het hele netwerk uit balans. Daarom zijn ALLE dieren belangrijk, ook insecten en wormen.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">voedselketen</text>
<text x="40" y="65" fill="${COLORS.warm}" font-size="20" font-family="Arial">☀️</text>
<text x="65" y="70" fill="${COLORS.text}" font-size="14" font-family="Arial">→</text>
<text x="80" y="65" fill="${COLORS.lente}" font-size="20" font-family="Arial">🌱</text>
<text x="105" y="70" fill="${COLORS.text}" font-size="14" font-family="Arial">→</text>
<text x="125" y="65" fill="${COLORS.text}" font-size="20" font-family="Arial">🐰</text>
<text x="150" y="70" fill="${COLORS.text}" font-size="14" font-family="Arial">→</text>
<text x="170" y="65" fill="${COLORS.text}" font-size="20" font-family="Arial">🦊</text>
<text x="20" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial">producent: plant</text>
<text x="20" y="118" fill="${COLORS.text}" font-size="11" font-family="Arial">planteneter (herbivoor): koe, konijn</text>
<text x="20" y="136" fill="${COLORS.text}" font-size="11" font-family="Arial">vleeseter (carnivoor): vos, leeuw</text>
<text x="20" y="154" fill="${COLORS.text}" font-size="11" font-family="Arial">alleseter (omnivoor): mens, beer</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **planteneter**?",
        options: ["herbivoor", "carnivoor", "omnivoor", "producent"],
        answer: 0,
        wrongHints: [null, "Carnivoor = vleeseter.", "Omnivoor = alles.", "Producent = plant."],
        uitlegPad: {
          stappen: [{ titel: "Herbi = plant", tekst: "Herbivoor = planteneter. Herba = Latijn voor plant." }],
          woorden: [{ woord: "herbivoor", uitleg: "Eet alleen planten. Voorbeelden: koe, konijn, schaap." }],
          theorie: "3 soorten eters: herbivoor (planten), carnivoor (vlees), omnivoor (allebei).",
          voorbeelden: [{ type: "tabel", tekst: "Herbi: koe, konijn, ree. Carni: vos, leeuw. Omni: mens, beer, varken." }],
          basiskennis: [{ onderwerp: "Latijnse stammen", uitleg: "Herba=plant, carne=vlees, omni=alles." }],
          niveaus: { basis: "herbivoor. A.", simpeler: "Planteneter = herbivoor. Carnivoor=vlees, omnivoor=alles. = A.", nogSimpeler: "Herbivoor = A." },
        },
      },
      {
        q: "Wie staat **bovenaan** in de keten *gras → konijn → vos*?",
        options: ["vos", "gras", "konijn", "zon"],
        answer: 0,
        wrongHints: [null, "Gras is producent (begin).", "Konijn eet gras maar wordt zelf gegeten.", "Zon geeft energie maar leeft niet."],
        uitlegPad: {
          stappen: [{ titel: "Vos = top", tekst: "Vos eet konijn, niemand eet vos. → vos staat bovenaan." }],
          woorden: [{ woord: "toppredator", uitleg: "Dier dat geen natuurlijke vijand heeft." }],
          theorie: "Voedselketen-volgorde: producent → consument → toppredator. Pijl wijst van prooi naar eter.",
          voorbeelden: [{ type: "stap", tekst: "Gras→konijn→vos. Gras=begin. Konijn=midden. Vos=top." }],
          basiskennis: [{ onderwerp: "Energie stroomt op", uitleg: "Energie van zon → gras → konijn → vos. Vos krijgt minste deel." }],
          niveaus: { basis: "vos. A.", simpeler: "Vos eet konijn, niemand eet vos → vos bovenaan keten. = A.", nogSimpeler: "Vos = A." },
        },
      },
      {
        q: "Wat doet een **afbreker**?",
        options: [
          "Eet dode resten en maakt grond",
          "Jaagt op andere dieren",
          "Eet alleen planten",
          "Slaapt de hele dag",
        ],
        answer: 0,
        wrongHints: [null, "Jagen = vleeseter.", "Planteneter eet planten.", "Niet slapen — actief afbreken."],
        uitlegPad: {
          stappen: [{ titel: "Afbreken = recyclen", tekst: "Afbrekers (regenworm/schimmel/bacterie) eten dode resten en maken er weer grond van." }],
          woorden: [{ woord: "afbreker", uitleg: "Maakt dode planten/dieren weer tot voedingsstoffen voor nieuwe planten." }],
          theorie: "Cyclus: dode bladeren → afbreker → grond → nieuwe planten. Natuur recyclet alles.",
          voorbeelden: [{ type: "lijst", tekst: "Afbrekers: regenworm, schimmels (paddenstoel), bacteriën." }],
          basiskennis: [{ onderwerp: "Belangrijke rol", uitleg: "Zonder afbrekers: dode resten zouden zich opstapelen, geen voeding voor nieuwe planten." }],
          niveaus: { basis: "Eet dode resten. A.", simpeler: "Afbreker (regenworm/schimmel) eet dood materiaal en maakt er grond van. Natuur recyclet. = A.", nogSimpeler: "Recyclen = A." },
        },
      },
    ],
  },

  // E
  {
    title: "Eindopdracht — natuur door elkaar",
    explanation: "Tijd om alles door elkaar te toetsen!\n\n**Wat je hebt geleerd**:\n• 6 kenmerken van leven.\n• 5 hoofd-diergroepen: zoogdieren, vogels, vissen, reptielen+amfibieën, insecten.\n• Plus weekdieren, schaaldieren, wormen.\n• Levensstadia + metamorfose (kikker, vlinder).\n• 4 seizoenen — wat gebeurt waar.\n• Plant-onderdelen + fotosynthese.\n• Voedselketen + producent/herbivoor/carnivoor.\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="24" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">eindtoets</text>
<text x="150" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">leven · groepen · seizoenen</text>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">planten · voedselketen</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "Tot welke groep behoort een **vleermuis**?",
        options: ["zoogdier", "vogel", "insect", "reptiel"],
        answer: 0,
        wrongHints: [null, "Vleermuis heeft vacht + zoogt → zoogdier.", "Geen veren — geen vogel.", "6 poten? Nee.", "Geen schubben."],
        uitlegPad: {
          stappen: [{ titel: "Vleermuis = enige vliegende zoogdier", tekst: "Vleermuis lijkt op vogel maar heeft vacht + zoogt → zoogdier (enige zoogdier dat kan vliegen)." }],
          woorden: [{ woord: "vleermuis", uitleg: "Enige zoogdier dat kan vliegen. Vacht, geen veren." }],
          theorie: "Niet door uiterlijk laten misleiden: vacht+zoogt+longen=zoogdier, ook al vliegt het.",
          voorbeelden: [{ type: "feit", tekst: "Vleermuis-jong drinkt melk bij moeder (zoogt). Heeft pels, geen veren." }],
          basiskennis: [{ onderwerp: "Niet vogel", uitleg: "Vogel = veren. Vleermuis = vacht. Cruciaal verschil." }],
          niveaus: { basis: "zoogdier. A.", simpeler: "Vleermuis vliegt maar heeft vacht + zoogt → zoogdier (enige vliegende). = A.", nogSimpeler: "Zoogdier = A." },
        },
      },
      {
        q: "Wat doen **bijen** voor planten?",
        options: ["Bestuiven (stuifmeel verplaatsen)", "Eten ze op", "Beschermen ze", "Maken zaden"],
        answer: 0,
        wrongHints: [null, "Bestuiving is sleutelrol.", "Eten honing, niet planten.", "Beschermen niet zo direct.", "Bijen maken honing, geen zaden."],
        uitlegPad: {
          stappen: [{ titel: "Bestuiving = sleutel", tekst: "Bij vliegt van bloem naar bloem en brengt stuifmeel mee → bevruchting → vrucht/zaad." }],
          woorden: [{ woord: "bestuiving", uitleg: "Stuifmeel van ene bloem naar andere → bloem kan vrucht/zaad maken." }],
          theorie: "Zonder bestuivers (bij/hommel/vlinder): geen vruchten en zaden = geen nieuwe planten.",
          voorbeelden: [{ type: "feit", tekst: "Veel ons voedsel (appel, aardbei, tomaat) bestaat dankzij bijen." }],
          basiskennis: [{ onderwerp: "Bijen sterven", uitleg: "Wereldwijd dalen bijen-aantallen → groot probleem voor voedselproductie." }],
          niveaus: { basis: "Bestuiven. A.", simpeler: "Bijen brengen stuifmeel van bloem naar bloem → bevruchting → vrucht/zaad → nieuwe planten. = A.", nogSimpeler: "Bestuiven = A." },
        },
      },
      {
        q: "Welke vorm heeft een **kikker** als baby?",
        options: ["kikkervisje (in water)", "kuiken", "rups", "ei direct kikker"],
        answer: 0,
        wrongHints: [null, "Klopt — eerst kikkervisje met staart.", "Kuiken = vogel.", "Rups = vlinder.", "Eerst kikkervisje fase."],
        uitlegPad: {
          stappen: [{ titel: "Kikkervisje = baby kikker", tekst: "Kikker-cyclus: ei → kikkervisje (in water, met staart) → kikker met poten → volwassen." }],
          woorden: [{ woord: "kikkervisje", uitleg: "Baby-kikker met staart, leeft in water, ademt met kieuwen." }],
          theorie: "Kikker doet metamorfose: water-baby met kieuwen → land-volwassen met longen.",
          voorbeelden: [{ type: "stap", tekst: "Eerst kikkervisje (vis-achtig met staart), dan poten, dan staart weg, dan klaar." }],
          basiskennis: [{ onderwerp: "Niet kuiken/rups", uitleg: "Kuiken = vogel-baby. Rups = vlinder-baby. Kikkervisje = kikker-baby." }],
          niveaus: { basis: "kikkervisje. A.", simpeler: "Kikker-baby = kikkervisje (met staart, in water). Verandert later in kikker. = A.", nogSimpeler: "Kikkervisje = A." },
        },
      },
      {
        q: "In welk seizoen krijgen bomen weer **blaadjes**?",
        options: ["lente", "zomer", "herfst", "winter"],
        answer: 0,
        wrongHints: [null, "Lente = ontwaken.", "In zomer zijn ze vol — kregen ze in lente.", "Herfst = vallen.", "Winter = kaal."],
        uitlegPad: {
          stappen: [{ titel: "Lente = nieuwe blaadjes", tekst: "Lente: warmer + meer licht → bomen maken nieuwe blaadjes uit knoppen." }],
          woorden: [{ woord: "uitlopen", uitleg: "Knoppen openen → nieuwe blaadjes verschijnen." }],
          theorie: "Boom-cyclus: lente=blad uit, zomer=vol, herfst=val, winter=kaal.",
          voorbeelden: [{ type: "tabel", tekst: "Maart: knoppen zwellen. April: blaadjes uit. Mei: vol blad." }],
          basiskennis: [{ onderwerp: "Knoppen winter", uitleg: "Knoppen vormen al in herfst, wachten dichtgebonden de winter af." }],
          niveaus: { basis: "lente. A.", simpeler: "Lente = bomen krijgen nieuwe blaadjes uit knoppen (na kale winter). = A.", nogSimpeler: "Lente = A." },
        },
      },
      {
        q: "Wat doet een **plant met zonlicht**?",
        options: ["Maakt zelf voedsel (fotosynthese)", "Wordt warmer", "Krijgt kleur", "Slaapt"],
        answer: 0,
        wrongHints: [null, "Fotosynthese = sleutel.", "Wordt wel warmer maar dat is bijproduct.", "Kleur is wel maar niet hoofddoel.", "Planten slapen niet."],
        uitlegPad: {
          stappen: [{ titel: "Fotosynthese", tekst: "Plant gebruikt zonlicht om voedsel te maken (suiker) uit water + CO2." }],
          woorden: [{ woord: "fotosynthese", uitleg: "Plant maakt suiker uit zonlicht. Geeft zuurstof af." }],
          theorie: "Gevolg: plant heeft eigen voedsel (groei) + wij krijgen zuurstof om te ademen.",
          voorbeelden: [{ type: "feit", tekst: "Zonder zonlicht (in donkere kamer) gaat plant dood — geen voedsel mogelijk." }],
          basiskennis: [{ onderwerp: "Bij-effecten", uitleg: "Warmer + kleur zijn bijeffecten, niet hoofddoel." }],
          niveaus: { basis: "Fotosynthese. A.", simpeler: "Plant gebruikt zonlicht om voedsel (suiker) te maken = fotosynthese. = A.", nogSimpeler: "Voedsel = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const dierenSeizoenenNatuur = {
  id: "dieren-seizoenen-natuur",
  title: "Dieren en seizoenen",
  emoji: "🌿",
  level: "groep4-7",
  subject: "natuur",
  // SLO-kerndoelen (sprint-4 G4a): 39-42 (oriëntatie op jezelf en de wereld
  // — natuur en techniek, milieu, levenscyclus). Geen referentieniveau-
  // schaal voor natuur (1F/1S geldt alleen voor taal+rekenen).
  sloKerndoelen: [39, 40, 41, 42],
  sloThema: "Wereldoriëntatie — natuur, dieren & seizoenen",
  referentieNiveau: "PO-kerndoel",
  prerequisites: [
    { id: "dierenklassen-po", title: "Dierenklassen", niveau: "po-1F" },
  ],
  intro:
    "Wereld & Natuur voor de basisschool: wat is leven, de diergroepen (zoogdieren, vogels, vissen, reptielen+amfibieën, insecten), levensstadia + metamorfose, de vier seizoenen, planten met fotosynthese, en voedselketens.",
  triggerKeywords: [
    "dieren", "diergroepen",
    "zoogdier", "zoogdieren",
    "vogel", "vogels",
    "vis", "vissen",
    "reptiel", "amfibie", "kikker",
    "insect", "insecten", "bij", "vlinder", "spin",
    "metamorfose", "gedaanteverwisseling",
    "rups pop vlinder", "kikkervisje",
    "lente", "zomer", "herfst", "winter", "seizoen",
    "winterslaap", "trekvogels",
    "plant", "planten", "boom", "bomen", "bloem",
    "fotosynthese", "loofboom", "naaldboom",
    "voedselketen", "voedselweb",
    "herbivoor", "carnivoor", "omnivoor",
    "natuur", "biologie po",
  ],
  chapters,
  steps,
};

export default dierenSeizoenenNatuur;
