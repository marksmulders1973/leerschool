// Leerpad: Maten en eenheden — Cito groep 7-8
// 8 stappen in 7 hoofdstukken (A t/m G).
// Doelgroep: groep 6-8 basisschool, met focus op Cito-eindtoets-stijl.
// Sprint-5+ S4 audit-3 (2026-05-08): nieuw Cito-content-pad voor ICP.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  meter: "#5d9cec",
  gewicht: "#ef6c00",
  inhoud: "#69f0ae",
  tijd: "#ffd54f",
};

const stepEmojis = ["📏","📐","⚖️","🥤","⏱️","🔄","🛒","🏆"];

const chapters = [
  { letter: "A", title: "Wat zijn maten?", emoji: "📏", from: 0, to: 0 },
  { letter: "B", title: "Lengte: km, m, cm, mm", emoji: "📐", from: 1, to: 1 },
  { letter: "C", title: "Gewicht: kg, g, ton", emoji: "⚖️", from: 2, to: 2 },
  { letter: "D", title: "Inhoud: L, dL, cL, mL", emoji: "🥤", from: 3, to: 3 },
  { letter: "E", title: "Tijd: uur, minuut, seconde", emoji: "⏱️", from: 4, to: 4 },
  { letter: "F", title: "Omrekenen — de truc", emoji: "🔄", from: 5, to: 5 },
  { letter: "G", title: "Cito-redactiesommen + eindtoets", emoji: "🏆", from: 6, to: 7 },
];

// SVG: maten-trapje voor lengte (km↔mm), gewicht (ton↔mg) of inhoud (L↔mL).
function trapjeSvg(eenheden, kleur, titel) {
  const stappen = eenheden.length;
  const breedte = 60;
  const totaalBreedte = stappen * breedte + 60;
  const totaalHoogte = 180;
  const startY = 40;
  const stapHoogte = 22;

  let svg = `<svg viewBox="0 0 ${totaalBreedte} ${totaalHoogte}">
<rect x="0" y="0" width="${totaalBreedte}" height="${totaalHoogte}" fill="${COLORS.paper}"/>
<text x="${totaalBreedte / 2}" y="20" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">${titel}</text>`;

  // Tekent een trapje van groot naar klein
  for (let i = 0; i < stappen; i++) {
    const x = 30 + i * breedte;
    const y = startY + i * stapHoogte;
    svg += `<rect x="${x}" y="${y}" width="${breedte - 8}" height="${stapHoogte}" fill="${kleur}" opacity="0.55" stroke="${kleur}" stroke-width="1"/>`;
    svg += `<text x="${x + (breedte - 8) / 2}" y="${y + 14}" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">${eenheden[i]}</text>`;
    if (i < stappen - 1) {
      svg += `<text x="${x + breedte}" y="${y + stapHoogte + 14}" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">×10</text>`;
    }
  }
  svg += `<text x="${totaalBreedte / 2}" y="${totaalHoogte - 8}" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Per stapje × 10 (of ÷ 10 omhoog)</text>`;
  svg += `</svg>`;
  return svg;
}

// SVG: voorbeeld-objecten met maten (potlood, fles, pak meel)
function voorbeeldSvg() {
  return `<svg viewBox="0 0 400 200">
<rect x="0" y="0" width="400" height="200" fill="${COLORS.paper}"/>
<text x="200" y="20" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">Wat hoort bij wat?</text>

<text x="60" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="32">✏️</text>
<text x="60" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">potlood</text>
<text x="60" y="118" text-anchor="middle" fill="${COLORS.meter}" font-size="11" font-family="Arial" font-weight="bold">15 cm</text>

<text x="160" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="32">🥛</text>
<text x="160" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">glas water</text>
<text x="160" y="118" text-anchor="middle" fill="${COLORS.inhoud}" font-size="11" font-family="Arial" font-weight="bold">200 mL</text>

<text x="260" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="32">🥖</text>
<text x="260" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">brood</text>
<text x="260" y="118" text-anchor="middle" fill="${COLORS.gewicht}" font-size="11" font-family="Arial" font-weight="bold">800 g</text>

<text x="350" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="32">🚗</text>
<text x="350" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">auto</text>
<text x="350" y="118" text-anchor="middle" fill="${COLORS.meter}" font-size="11" font-family="Arial" font-weight="bold">4 m</text>

<text x="200" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">Elk object heeft een passende eenheid</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat zijn maten?
  {
    title: "Wat zijn maten en eenheden?",
    explanation: "Bij rekenen heb je vaak getallen mét een **eenheid**: 5 **meter**, 200 **gram**, 1,5 **liter**, 30 **minuten**.\n\nEen eenheid vertelt **wat je meet**:\n• **Lengte** — hoe lang of hoe ver iets is. Eenheden: km, m, cm, mm.\n• **Gewicht** — hoe zwaar iets is. Eenheden: ton, kg, g, mg.\n• **Inhoud** — hoeveel ergens in zit (vloeistof). Eenheden: L, dL, cL, mL.\n• **Tijd** — hoe lang iets duurt. Eenheden: uur, minuut, seconde.\n\n**Waarom verschillende eenheden?**\nOmdat objecten verschillen in grootte. Je meet de afstand naar Den Haag in **km** (kilometer), maar de lengte van een potlood in **cm** (centimeter). Het zou raar zijn om te zeggen: 'mijn potlood is 0,00015 km lang' — dat is hetzelfde maar lastig te lezen.\n\n**De truc bij Cito**:\nVeel sommen vragen je om om te rekenen *(bijvoorbeeld km naar m, of g naar kg)*. Dan moet je weten **hoeveel keer 10** elke stap is. Dat leer je in dit pad.\n\n**Voorbeeld**:\n• 1 km = 1000 m\n• 1 m = 100 cm\n• 1 cm = 10 mm\n\nKlinkt veel? Geen zorg — er is een handig **trapje** waarmee je het altijd kunt opzoeken.",
    svg: voorbeeldSvg(),
    checks: [
      {
        q: "Welke eenheid past het beste bij de **lengte van een vinger**?",
        options: ["cm","km","kg","L"],
        answer: 0,
        wrongHints: [null,"Te groot — km gebruik je voor afstanden tussen steden.","Dat is een gewicht, geen lengte.","Dat is een inhoud (voor vloeistof)."],
        uitlegPad: {
          stappen: [{ titel: "cm = handlange dingen", tekst: "Vinger ~ 8 cm. cm = de juiste lengte-maat voor kleine objecten." }],
          woorden: [{ woord: "cm", uitleg: "Centimeter. 1/100 van een meter. Past op liniaal." }],
          theorie: "Eenheid-keuze: km=verre afstand, m=meubels/mensen, cm=hand-objecten, mm=heel klein.",
          voorbeelden: [{ type: "tabel", tekst: "Vinger ~8 cm. Potlood ~15 cm. Tafel ~80 cm." }],
          basiskennis: [{ onderwerp: "Niet kg/L", uitleg: "Kg=gewicht, L=vloeistof — niet voor lengte." }],
          niveaus: { basis: "cm. A.", simpeler: "Een vinger meet je in cm (~8 cm). Km voor steden, kg voor gewicht. = A.", nogSimpeler: "cm = A." },
        },
      },
      {
        q: "Welke eenheid past bij **het gewicht van een appel**?",
        options: ["g","mm","mL","ton"],
        answer: 0,
        wrongHints: [null,"Dat is lengte, geen gewicht.","Dat is inhoud (voor vloeistof).","Te groot — een ton is 1000 kg, een appel ligt rond 200 g."],
        uitlegPad: {
          stappen: [{ titel: "Appel ~ 200 g", tekst: "Een appel weegt ongeveer 200 g. Kies eenheid passend bij afmeting." }],
          woorden: [{ woord: "gram", uitleg: "Eenheid van gewicht. 1000 g = 1 kg." }],
          theorie: "Gewicht-keuze: mg=medicijn, g=etenswaar/appel, kg=mens/boodschappen, ton=vrachtwagen.",
          voorbeelden: [{ type: "tabel", tekst: "Appel 200 g. Brood 800 g. Mens 70 kg. Auto 1500 kg = 1,5 ton." }],
          basiskennis: [{ onderwerp: "Eenheid match", uitleg: "Niet alle opties zijn gewichten — schrap mm/mL meteen." }],
          niveaus: { basis: "g. A.", simpeler: "Appel ~200 g. Gewicht-eenheid g past het best. (mm=lengte, mL=inhoud, ton=te groot). = A.", nogSimpeler: "g = A." },
        },
      },
      {
        q: "**1 km is hoeveel meter?**",
        options: ["1000","100","10","10.000"],
        answer: 0,
        wrongHints: [null,"Dat is 1 m in cm — andere eenheid.","Te weinig. Denk: 1 km is veel groter dan 10 m.","Te veel. 1 km zit tussen 100 m (een sportveld) en oneindig."],
        uitlegPad: {
          stappen: [{ titel: "1 km = 1000 m", tekst: "Vaste regel: 1 km = 1000 m. Onthoud als kerngetal." }],
          woorden: [{ woord: "km", uitleg: "Kilometer. Kilo = 1000. Dus 1000 m." }],
          theorie: "Kilo-prefix: kilo = 1000. Geldt voor km/kg/kL.",
          voorbeelden: [{ type: "tabel", tekst: "1 km = 1000 m. 1 kg = 1000 g. 1 kL = 1000 L." }],
          basiskennis: [{ onderwerp: "100 niet 1000", uitleg: "1 m = 100 cm (anders). 1 km = 1000 m." }],
          niveaus: { basis: "1000. A.", simpeler: "Kilo = 1000. Dus 1 km = 1000 m. (1 m = 100 cm — andere eenheid). = A.", nogSimpeler: "1000 = A." },
        },
      },
    ],
  },

  // STAP 2: Lengte
  {
    title: "Lengte — km, m, dm, cm, mm",
    explanation: "Lengte gaat over **afstand**. Hier is het maten-trapje van groot naar klein:\n\n**km → hm → dam → m → dm → cm → mm**\n\nIeder stapje is **× 10** (omlaag) of **÷ 10** (omhoog).\n\n**Vaak gebruikte stappen**:\n• 1 km = **1000** m  *(afstanden tussen steden)*\n• 1 m = **100** cm  *(meubels, mensen)*\n• 1 m = **1000** mm  *(schroeven, papier-dikte)*\n• 1 cm = **10** mm  *(potlood-dikte)*\n\n**Voorbeelden om te onthouden**:\n• Een dubbeltje is ongeveer **15 mm** breed.\n• Een potlood is **15-20 cm** lang.\n• Een Nederlandse voordeur is **2 m** hoog.\n• De marathon is **42 km** lang.\n\n**Cito-truc**:\nAls je twijfelt, vraag jezelf af: *'Kan ik dit met een liniaal meten?'* Zo ja → cm of mm. *'Past het in mijn kamer?'* → m. *'Loop ik er meer dan een minuut over?'* → km.\n\n**Veel-voorkomende fout**:\nLeerlingen vergeten dat 1 m **niet** 10 cm is — het is **100** cm. Tussen m en cm zitten 2 stapjes (m → dm → cm), dus × 100, niet × 10.",
    svg: trapjeSvg(["km","hm","dam","m","dm","cm","mm"], COLORS.meter, "Lengte-trapje (× 10 per stap)"),
    checks: [
      {
        q: "**3 m is hoeveel cm?**",
        options: ["300","30","3000","30.000"],
        answer: 0,
        wrongHints: [null,"Te weinig — denk: 1 m is 100 cm, dus 3 m is...","Te veel — dat is mm, niet cm.","Veel te veel."],
        uitlegPad: {
          stappen: [{ titel: "× 100", tekst: "1 m = 100 cm. 3 m = 3 × 100 = 300 cm." }],
          woorden: [{ woord: "m → cm", uitleg: "2 stappen op trapje (m → dm → cm) = × 100." }],
          theorie: "m naar cm = × 100. m naar mm = × 1000. m naar dm = × 10.",
          voorbeelden: [{ type: "stap", tekst: "1 m = 100 cm. 3 m = 300 cm. 5 m = 500 cm." }],
          basiskennis: [{ onderwerp: "Niet × 10", uitleg: "Tussen m en cm zitten 2 stappen → × 100, niet × 10." }],
          niveaus: { basis: "300. A.", simpeler: "1 m = 100 cm. 3 m = 3 × 100 = 300 cm. = A.", nogSimpeler: "300 = A." },
        },
      },
      {
        q: "Een afstand van **2,5 km** is hoeveel **m**?",
        options: ["2500","250","25","25000"],
        answer: 0,
        wrongHints: [null,"Te weinig — 1 km = 1000 m, dus 2,5 km is meer.","Veel te weinig.","Te veel — heb je per ongeluk × 10.000 gedaan?"],
        uitlegPad: {
          stappen: [{ titel: "× 1000", tekst: "1 km = 1000 m. 2,5 × 1000 = 2500 m." }],
          woorden: [{ woord: "komma verschuiven", uitleg: "Bij × 1000: komma 3 plekken naar rechts. 2,5 → 2500." }],
          theorie: "km → m = × 1000 (3 plekken naar rechts).",
          voorbeelden: [{ type: "stap", tekst: "2,5 km × 1000 = 2500 m. (Komma 3 naar rechts: 2,500 → 2500)." }],
          basiskennis: [{ onderwerp: "Decimaal × 1000", uitleg: "0,5 wordt 500 (3 plekken). 2,5 wordt 2500." }],
          niveaus: { basis: "2500. A.", simpeler: "1 km = 1000 m. 2,5 × 1000 = 2500 m. = A.", nogSimpeler: "2500 = A." },
        },
      },
      {
        q: "Een potlood is **18 cm**. Hoeveel **mm** is dat?",
        options: ["180","1,8","18","1800"],
        answer: 0,
        wrongHints: [null,"Andersom — kleiner getal als je in mm zegt is raar (mm is kleinere eenheid, dus meer er van).","Dat is alleen het getal in dezelfde eenheid.","Te veel — heb je × 100 gedaan?"],
        uitlegPad: {
          stappen: [{ titel: "× 10", tekst: "1 cm = 10 mm. 18 cm × 10 = 180 mm." }],
          woorden: [{ woord: "cm → mm", uitleg: "1 stap op trapje = × 10." }],
          theorie: "Kleinere eenheid → groter getal. Cm naar mm = ×10.",
          voorbeelden: [{ type: "stap", tekst: "18 × 10 = 180 mm. Of: komma 1 plek rechts: 18 → 180." }],
          basiskennis: [{ onderwerp: "Logica-check", uitleg: "Mm is kleiner dan cm → er passen méér mm in dezelfde lengte." }],
          niveaus: { basis: "180. A.", simpeler: "1 cm = 10 mm. 18 cm × 10 = 180 mm. = A.", nogSimpeler: "180 = A." },
        },
      },
    ],
  },

  // STAP 3: Gewicht
  {
    title: "Gewicht — ton, kg, g, mg",
    explanation: "Gewicht gaat over **hoe zwaar** iets is. Hier zijn de **belangrijkste 3 stappen**:\n\n**ton → kg → g → mg**\n\nLet op: tussen ton en kg, en tussen kg en g, en tussen g en mg zit telkens **× 1000** (drie stapjes ineens, niet × 10).\n\n**Vaak gebruikte stappen**:\n• 1 ton = **1000** kg  *(zware vrachtwagens)*\n• 1 kg = **1000** g  *(boodschappen)*\n• 1 g = **1000** mg  *(medicijnen)*\n\n**Voorbeelden om te onthouden**:\n• Een appel ≈ **200 g**.\n• Een pak melk = **1 kg** (= 1 L water-equivalent).\n• Een mens-volwassene = **60-90 kg**.\n• Een auto = **1-2 ton** *(1000-2000 kg)*.\n\n**Cito-truc**:\n• 'Ik kan het optillen met 1 vinger' → mg of g.\n• 'Ik kan het tillen, maar niet lang' → kg.\n• 'Ik heb een hijskraan nodig' → ton.\n\n**Veel-voorkomende fout**:\nLeerlingen denken dat kg → g is × 100 (zoals lengte). Bij gewicht is het **× 1000**! Dat is de belangrijkste verwarring.\n\n**Handige weet**:\n• 1 L water = **1 kg** *(precies, bij kamertemperatuur)*\n• 500 g = ½ kg = **'pondje'** *(spreektaal)*\n• 250 g = ¼ kg = **'kwart pondje'** *(in slagerij)*",
    svg: trapjeSvg(["ton","100kg","10kg","kg","100g","10g","g","100mg","10mg","mg"], COLORS.gewicht, "Gewicht-trapje (× 10 per stap, ELK 1000-blok = 3 stappen)"),
    checks: [
      {
        q: "**5 kg = ? g**",
        options: ["5000","500","50","50.000"],
        answer: 0,
        wrongHints: [null,"Te weinig — 1 kg = 1000 g, dus 5 kg is...","Veel te weinig.","Te veel."],
        uitlegPad: {
          stappen: [{ titel: "× 1000", tekst: "1 kg = 1000 g. 5 × 1000 = 5000 g." }],
          woorden: [{ woord: "kg → g", uitleg: "Kilo-prefix = 1000. Dus kg naar g = × 1000." }],
          theorie: "Gewicht-stappen: ton→kg=×1000, kg→g=×1000, g→mg=×1000.",
          voorbeelden: [{ type: "tabel", tekst: "1 kg = 1000 g. 5 kg = 5000 g. 0,5 kg = 500 g." }],
          basiskennis: [{ onderwerp: "Niet × 100", uitleg: "Bij gewicht is kg→g een sprong van 3 (× 1000), niet × 100 zoals bij m→cm." }],
          niveaus: { basis: "5000. A.", simpeler: "1 kg = 1000 g. 5 × 1000 = 5000 g. = A.", nogSimpeler: "5000 = A." },
        },
      },
      {
        q: "Een vrachtwagen weegt **3 ton**. Hoeveel **kg** is dat?",
        options: ["3000","300","3.000.000","30.000"],
        answer: 0,
        wrongHints: [null,"Te weinig — 1 ton = 1000 kg, dus 3 ton is...","Veel te veel — dat zou g zijn.","Te veel — dat is meer dan een vrachtwagen."],
        uitlegPad: {
          stappen: [{ titel: "× 1000", tekst: "1 ton = 1000 kg. 3 × 1000 = 3000 kg." }],
          woorden: [{ woord: "ton", uitleg: "Grote gewichts-eenheid. 1 ton = 1000 kg." }],
          theorie: "Ton → kg = × 1000.",
          voorbeelden: [{ type: "tabel", tekst: "1 ton = 1000 kg. 3 ton = 3000 kg. 1,5 ton = 1500 kg." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "Vrachtwagen ~3 ton = 3000 kg. Klopt." }],
          niveaus: { basis: "3000 kg. A.", simpeler: "1 ton = 1000 kg. 3 ton = 3000 kg. = A.", nogSimpeler: "3000 = A." },
        },
      },
      {
        q: "Een paracetamol-tablet is **500 mg**. Hoeveel **g** is dat?",
        options: ["0,5","5","50","0,05"],
        answer: 0,
        wrongHints: [null,"Te veel — 1 g = 1000 mg, dus 500 mg is **minder** dan 1 g.","Veel te veel.","Te weinig — heb je per ongeluk ÷ 10.000 gedaan?"],
        uitlegPad: {
          stappen: [{ titel: "÷ 1000", tekst: "1000 mg = 1 g. 500 mg = 500/1000 = 0,5 g." }],
          woorden: [{ woord: "mg → g", uitleg: "Naar grotere eenheid = delen. ÷ 1000." }],
          theorie: "Naar grotere eenheid: getal wordt KLEINER. 500 mg < 1 g.",
          voorbeelden: [{ type: "stap", tekst: "500 mg ÷ 1000 = 0,5 g. Komma 3 naar links: 500 → 0,500." }],
          basiskennis: [{ onderwerp: "Logica-check", uitleg: "G is groter dan mg → minder van die grotere = kleiner getal." }],
          niveaus: { basis: "0,5 g. A.", simpeler: "1000 mg = 1 g. 500 mg = halve g = 0,5 g. = A.", nogSimpeler: "0,5 = A." },
        },
      },
    ],
  },

  // STAP 4: Inhoud
  {
    title: "Inhoud — L, dL, cL, mL",
    explanation: "Inhoud is **hoeveel vloeistof ergens in zit**. Het trapje:\n\n**L → dL → cL → mL**\n\nIeder stapje is × 10. Dus:\n• 1 L = **10** dL\n• 1 dL = **10** cL\n• 1 cL = **10** mL\n• 1 L = **1000** mL  *(dat is 3 stappen ineens)*\n\n**Vaak gebruikte stappen**:\n• 1 L = **1000** mL  *(pak melk)*\n• 1 L = **100** cL  *(grote fles fris)*\n• 1 L = **10** dL  *(grote drinkbeker)*\n\n**Voorbeelden om te onthouden**:\n• Een glas water ≈ **200 mL** *(= 2 dL)*\n• Een pak melk = **1 L**.\n• Een autotank ≈ **50-60 L**.\n• Een eetlepel ≈ **15 mL**.\n• Een theelepel ≈ **5 mL**.\n\n**Cito-truc**:\n• Past in een glas → mL of cL.\n• Past in een fles → L.\n• Past in een bad → vele L (ongeveer 150 L).\n\n**Slimme weet**:\n• **1 mL = 1 cm³** *(1 kubieke centimeter)*. Dus een doosje van 1 cm × 1 cm × 1 cm bevat precies 1 mL water.\n• **1 L = 1 dm³** *(1 kubieke decimeter)*. Een melkpak van 10 cm × 10 cm × 10 cm = 1 L.\n\n**Veel-voorkomende fout**:\nVerwarring tussen cL en mL. **1 cL = 10 mL** *(niet 100!)*. En **1 dL = 100 mL**.",
    svg: trapjeSvg(["L","dL","cL","mL"], COLORS.inhoud, "Inhoud-trapje (× 10 per stap)"),
    checks: [
      {
        q: "**Een fles cola van 1,5 L = ? mL**",
        options: ["1500","150","15","15.000"],
        answer: 0,
        wrongHints: [null,"Te weinig — 1 L = 1000 mL, dus 1,5 L is meer dan 1000.","Veel te weinig.","Te veel — dat zou 15 L zijn."],
        uitlegPad: {
          stappen: [{ titel: "× 1000", tekst: "1 L = 1000 mL. 1,5 × 1000 = 1500 mL." }],
          woorden: [{ woord: "L → mL", uitleg: "3 stappen op trapje (L→dL→cL→mL) = × 1000." }],
          theorie: "L naar mL = × 1000 (komma 3 plekken rechts).",
          voorbeelden: [{ type: "stap", tekst: "1 L = 1000 mL. 1,5 L = 1500 mL. 0,75 L = 750 mL." }],
          basiskennis: [{ onderwerp: "Standaardflesjes", uitleg: "330 mL blikje, 500 mL flesje, 1500 mL grote fles cola." }],
          niveaus: { basis: "1500 mL. A.", simpeler: "1 L = 1000 mL. 1,5 × 1000 = 1500 mL. = A.", nogSimpeler: "1500 = A." },
        },
      },
      {
        q: "Een glas water = **2 dL**. Hoeveel **mL**?",
        options: ["200","20","2","2000"],
        answer: 0,
        wrongHints: [null,"Te weinig — 1 dL = 100 mL, dus 2 dL is...","Veel te weinig.","Te veel — heb je × 1000 gedaan?"],
        uitlegPad: {
          stappen: [{ titel: "× 100", tekst: "1 dL = 100 mL. 2 × 100 = 200 mL." }],
          woorden: [{ woord: "dL", uitleg: "Deciliter. 1/10 van een liter = 100 mL." }],
          theorie: "dL → mL = 2 stappen (dL→cL→mL) = × 100.",
          voorbeelden: [{ type: "tabel", tekst: "1 dL = 100 mL. 2 dL = 200 mL = glas water." }],
          basiskennis: [{ onderwerp: "Niet × 1000", uitleg: "L→mL = ×1000. Maar dL→mL = ×100 (1 stap dichterbij)." }],
          niveaus: { basis: "200 mL. A.", simpeler: "1 dL = 100 mL. 2 dL = 2 × 100 = 200 mL. = A.", nogSimpeler: "200 = A." },
        },
      },
      {
        q: "Een theelepel siroop is **5 mL**. Hoeveel **cL**?",
        options: ["0,5","5","50","0,05"],
        answer: 0,
        wrongHints: [null,"Te veel — 1 cL = 10 mL, dus 5 mL is **minder** dan 1 cL.","Andere eenheid — dat is alleen het getal.","Veel te veel."],
        uitlegPad: {
          stappen: [{ titel: "÷ 10", tekst: "1 cL = 10 mL. 5 mL = 5/10 = 0,5 cL." }],
          woorden: [{ woord: "mL → cL", uitleg: "Naar grotere eenheid (cL) = ÷ 10." }],
          theorie: "Naar grotere eenheid: getal kleiner. 5 mL < 1 cL.",
          voorbeelden: [{ type: "stap", tekst: "5 mL ÷ 10 = 0,5 cL." }],
          basiskennis: [{ onderwerp: "Logica-check", uitleg: "Theelepel = klein, kleiner dan 1 cL. Antwoord moet < 1 cL zijn." }],
          niveaus: { basis: "0,5 cL. A.", simpeler: "1 cL = 10 mL. 5 mL = halve cL = 0,5 cL. = A.", nogSimpeler: "0,5 = A." },
        },
      },
    ],
  },

  // STAP 5: Tijd
  {
    title: "Tijd — uur, minuut, seconde",
    explanation: "Tijd is **anders dan andere maten**. Eenheden gaan **niet** in stappen van 10, maar van **60** (en bij dagen: 24).\n\n**De stappen**:\n• 1 uur = **60** minuten\n• 1 minuut = **60** seconden\n• 1 dag = **24** uur\n• 1 week = **7** dagen\n• 1 jaar ≈ **365** dagen\n\n**Voorbeelden om te onthouden**:\n• Een tandenpoetsing = **2 minuten** *(120 sec)*.\n• Een schooldag = **6-7 uur**.\n• Een voetbalwedstrijd = **90 minuten** *(1,5 uur)*.\n• Een werkdag = **8 uur**.\n\n**Cito-truc — tijdsom**:\n*'Een film begint om 14:30 en duurt 2 uur en 15 minuten. Hoe laat eindigt de film?'*\n• Eerst de uren: 14:30 + 2 uur = **16:30**.\n• Dan de minuten: 16:30 + 15 min = **16:45**.\n\n**Cito-truc — duur berekenen**:\n*'Mike begint zijn huiswerk om 16:45 en is klaar om 18:30. Hoe lang heeft hij gewerkt?'*\n• Stap 1: tot het hele uur: 16:45 → 17:00 = **15 min**.\n• Stap 2: hele uren: 17:00 → 18:00 = **1 uur**.\n• Stap 3: laatste deel: 18:00 → 18:30 = **30 min**.\n• Totaal: **1 uur 45 minuten**.\n\n**Veel-voorkomende fout**:\nDecimaal denken bij tijd: 2,5 uur = **2 uur 30 min** *(niet 2 uur 50 min!)*. Half uur = 30 minuten, niet 50 omdat het 60-stelsel is.\n\n**Tip**:\nTeken bij tijdsommen op een papiertje een 'tijd-balkje' van begin → eind. Geeft overzicht.",
    svg: `<svg viewBox="0 0 400 160">
<rect x="0" y="0" width="400" height="160" fill="${COLORS.paper}"/>
<text x="200" y="20" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">Tijd-stappen (NIET × 10!)</text>

<rect x="40" y="40" width="80" height="40" fill="${COLORS.tijd}" opacity="0.6" stroke="${COLORS.tijd}"/>
<text x="80" y="65" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">1 uur</text>

<text x="125" y="65" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">= 60 min</text>

<rect x="170" y="40" width="80" height="40" fill="${COLORS.tijd}" opacity="0.4" stroke="${COLORS.tijd}"/>
<text x="210" y="65" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">1 min</text>

<text x="255" y="65" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">= 60 sec</text>

<rect x="300" y="40" width="80" height="40" fill="${COLORS.tijd}" opacity="0.2" stroke="${COLORS.tijd}"/>
<text x="340" y="65" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">1 sec</text>

<text x="200" y="115" text-anchor="middle" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">⚠ Niet decimaal!</text>
<text x="200" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Half uur = 30 minuten (niet 50)</text>
<text x="200" y="150" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Kwartier = 15 minuten</text>
</svg>`,
    checks: [
      {
        q: "**Hoeveel minuten zijn 2,5 uur?**",
        options: ["150","250","120","2,5"],
        answer: 0,
        wrongHints: [null,"Decimaal denken werkt niet bij tijd. 1 uur = 60 min — hoeveel × 60 in 2,5?","Te weinig — dat is alleen 2 uur.","Dat is geen aantal minuten."],
        uitlegPad: {
          stappen: [{ titel: "2,5 × 60", tekst: "1 uur = 60 min. 2,5 × 60 = 150 min." }],
          woorden: [{ woord: "halve uur", uitleg: "0,5 uur = 30 minuten (NIET 50!)." }],
          theorie: "Tijd is 60-stelsel, niet 10-stelsel. 0,5 uur = 30 min. 0,25 uur = 15 min.",
          voorbeelden: [{ type: "stap", tekst: "2 uur = 120 min. 0,5 uur = 30 min. Samen: 150 min." }],
          basiskennis: [{ onderwerp: "Geen 250", uitleg: "2,5 × 100 = 250 (decimaal denken). Maar tijd = × 60." }],
          niveaus: { basis: "150 min. A.", simpeler: "2,5 uur = 2 uur + halfuur = 120 min + 30 min = 150 min. = A.", nogSimpeler: "150 = A." },
        },
      },
      {
        q: "Een film begint om **19:45** en duurt **1 uur 30 min**. Hoe laat eindigt 'ie?",
        options: ["21:15","20:75","20:15","21:75"],
        answer: 0,
        wrongHints: [null,"Past niet — 75 minuten bestaat niet, dat is meer dan 1 uur.","Te vroeg — heb je 1 uur 30 wel meegerekend?","Past niet — 75 minuten is geen geldige tijd."],
        uitlegPad: {
          stappen: [{ titel: "Stap apart", tekst: "Uren: 19:45 + 1 uur = 20:45. Minuten: 20:45 + 30 = 21:15 (45+30=75=1u15m)." }],
          woorden: [{ woord: "tijd-overflow", uitleg: "Boven 60 min = uur erbij. 45+30=75 → 1u15m → 21:15." }],
          theorie: "Tijd-optellen: uren apart, minuten apart. >60 min wordt extra uur.",
          voorbeelden: [{ type: "stap", tekst: "19:45 +1u = 20:45. +30m = 21:15 (want 45+30=75 = 60+15 → 1 uur erbij)." }],
          basiskennis: [{ onderwerp: "Geen 75 min", uitleg: "Tijd kan geen 75 of 80 hebben — boven 60 = uur erbij." }],
          niveaus: { basis: "21:15. A.", simpeler: "19:45 + 1u30m = 21:15. (45+30=75 → 1u15m → eindtijd 21:15). = A.", nogSimpeler: "21:15 = A." },
        },
      },
      {
        q: "Mike heeft van **16:45 tot 18:30** huiswerk gemaakt. Hoe lang?",
        options: ["1 uur 45 min","2 uur 15 min","1 uur 15 min","2 uur 45 min"],
        answer: 0,
        wrongHints: [null,"Te lang — heb je niet 1 uur teveel meegeteld?","Te kort — vergeet de eerste 15 min naar 17:00 niet.","Te lang — denk: van 16:45 naar 18:00 is hoeveel?"],
        uitlegPad: {
          stappen: [{ titel: "Splits: tot uur + uren + rest", tekst: "16:45→17:00 = 15m. 17:00→18:00 = 1u. 18:00→18:30 = 30m. Totaal: 1u + 45m." }],
          woorden: [{ woord: "tel-vooruit", uitleg: "In stappen: tot heel uur, hele uren, eind-minuten." }],
          theorie: "Duur-truc: splits in delen om over uur-grenzen heen te tellen.",
          voorbeelden: [{ type: "stap", tekst: "16:45 + 15m = 17:00. + 1u = 18:00. + 30m = 18:30. Som: 1u 45m." }],
          basiskennis: [{ onderwerp: "Niet 18-16=2", uitleg: "Niet de uren simpel aftrekken — minuten meetellen." }],
          niveaus: { basis: "1 uur 45 min. A.", simpeler: "16:45→17:00=15m, →18:00=1u, →18:30=30m. Som = 1u 45m. = A.", nogSimpeler: "1u45m = A." },
        },
      },
    ],
  },

  // STAP 6: Omrekenen — de truc
  {
    title: "Omrekenen — komma verschuiven",
    explanation: "Bij omrekenen tussen eenheden hoef je **niet altijd te rekenen**. Vaak verschuift de **komma** alleen.\n\n**De gouden regel**:\n• Eenheid **groter maken** *(bv. cm → m)* → komma **naar links**.\n• Eenheid **kleiner maken** *(bv. m → cm)* → komma **naar rechts**.\n• Per stapje op het trapje = 1 plek komma verschuiven.\n\n**Voorbeelden lengte**:\n• **350 cm** → m? Trapje cm → dm → m = **2 stappen** omhoog → komma 2 plaatsen naar links → **3,50 m**.\n• **2,5 km** → m? Trapje km → hm → dam → m = **3 stappen** omlaag → komma 3 plaatsen naar rechts → **2500 m**.\n\n**Voorbeelden gewicht**:\n• **1500 g** → kg? g → kg = 3 stappen omhoog → komma 3 naar links → **1,5 kg**.\n• **0,75 kg** → g? kg → g = 3 stappen omlaag → komma 3 naar rechts → **750 g**.\n\n**Voorbeelden inhoud**:\n• **750 mL** → L? mL → L = 3 stappen omhoog → **0,75 L**.\n• **1,2 L** → mL? L → mL = 3 stappen omlaag → **1200 mL**.\n\n**Cito-truc**:\nMaak voor jezelf een mini-tabel:\n```\nkm  hm  dam  m   dm  cm  mm\n```\nSchrijf het getal op de juiste plek en verschuif de komma.\n\n**Voorbeeld**:\n*'Hoeveel cm is 0,42 m?'*\n• Plaats 0,42 op de m-plek.\n• Schuif komma 2 plekken naar rechts (m → dm → cm).\n• Antwoord: **42 cm**.\n\n**Veel-voorkomende fout**:\nVergeten welke kant op te schuiven. Onthoud: groter eenheid → kleiner getal *(want minder van die grote)*. Kleinere eenheid → groter getal.",
    svg: `<svg viewBox="0 0 400 200">
<rect x="0" y="0" width="400" height="200" fill="${COLORS.paper}"/>
<text x="200" y="20" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">Komma verschuiven — voorbeeld</text>

<text x="200" y="55" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">350 cm = ? m</text>

<g transform="translate(60,80)">
<text x="0" y="0" fill="${COLORS.muted}" font-size="12" font-family="Arial">km</text>
<text x="40" y="0" fill="${COLORS.muted}" font-size="12" font-family="Arial">hm</text>
<text x="80" y="0" fill="${COLORS.muted}" font-size="12" font-family="Arial">dam</text>
<text x="130" y="0" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">m</text>
<text x="160" y="0" fill="${COLORS.muted}" font-size="12" font-family="Arial">dm</text>
<text x="200" y="0" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">cm</text>
<text x="240" y="0" fill="${COLORS.muted}" font-size="12" font-family="Arial">mm</text>

<text x="200" y="30" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">3 5 0</text>

<path d="M 200 40 Q 165 60 130 40" stroke="${COLORS.good}" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
<text x="165" y="75" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial">2 stappen ←</text>

<text x="130" y="105" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">3,50</text>
<text x="130" y="120" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">(= 3,5 m)</text>
</g>

<defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0 0, 8 5, 0 10" fill="${COLORS.good}"/></marker></defs>
</svg>`,
    checks: [
      {
        q: "**1750 g** in **kg**?",
        options: ["1,75","17,5","175","0,175"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je de komma maar 1 plek verschoven?","Veel te veel — heb je de komma helemaal niet verschoven?","Te weinig — heb je 4 plekken verschoven ipv 3?"],
        uitlegPad: {
          stappen: [{ titel: "÷ 1000 = komma 3 links", tekst: "1750 g → kg = ÷ 1000 = komma 3 plekken links → 1,750 = 1,75 kg." }],
          woorden: [{ woord: "komma verschuiven", uitleg: "Snelle omrekenmethode zonder rekenen." }],
          theorie: "g → kg = 3 stappen op trapje. Per stap = komma 1 plek. Totaal 3 plekken naar links.",
          voorbeelden: [{ type: "stap", tekst: "1750 → 175,0 → 17,50 → 1,750 = 1,75 kg." }],
          basiskennis: [{ onderwerp: "Logica-check", uitleg: "1750 g ≈ 1,75 kg = ongeveer 2 pakken meel. Klopt." }],
          niveaus: { basis: "1,75 kg. A.", simpeler: "1750 g = ÷ 1000 = 1,75 kg (komma 3 plekken naar links). = A.", nogSimpeler: "1,75 = A." },
        },
      },
      {
        q: "**0,8 L** in **mL**?",
        options: ["800","80","8000","8"],
        answer: 0,
        wrongHints: [null,"Te weinig — L → mL is 3 stappen omlaag, dus komma 3 naar rechts.","Veel te veel — heb je 4 plekken verschoven?","Te weinig — heb je überhaupt verschoven?"],
        uitlegPad: {
          stappen: [{ titel: "× 1000 = komma 3 rechts", tekst: "0,8 L × 1000 = 800 mL. Komma 3 plekken naar rechts: 0,800 → 800." }],
          woorden: [{ woord: "L → mL", uitleg: "Naar kleinere eenheid = × 1000." }],
          theorie: "Naar kleinere eenheid: getal groter. Komma naar rechts.",
          voorbeelden: [{ type: "stap", tekst: "0,8 → 8 → 80 → 800 mL." }],
          basiskennis: [{ onderwerp: "Realiteit", uitleg: "0,8 L = 800 mL = 4 grote glazen water." }],
          niveaus: { basis: "800 mL. A.", simpeler: "0,8 L × 1000 = 800 mL (komma 3 plekken naar rechts). = A.", nogSimpeler: "800 = A." },
        },
      },
      {
        q: "**4500 mm** in **m**?",
        options: ["4,5","45","450","0,45"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je maar 2 plekken verschoven? mm → m is 3 stappen.","Veel te veel — heb je überhaupt verschoven?","Te weinig — heb je 4 stappen verschoven?"],
        uitlegPad: {
          stappen: [{ titel: "÷ 1000 = komma 3 links", tekst: "4500 mm → m = ÷ 1000 = komma 3 plekken links → 4,500 = 4,5 m." }],
          woorden: [{ woord: "mm → m", uitleg: "3 stappen op trapje (mm→cm→dm→m) = ÷ 1000." }],
          theorie: "mm naar m = ÷ 1000. Komma 3 plekken links.",
          voorbeelden: [{ type: "stap", tekst: "4500 → 450 → 45 → 4,5 m." }],
          basiskennis: [{ onderwerp: "Realiteit", uitleg: "4,5 m = breedte van een kamer. 4500 mm klinkt veel maar is gewoon 4,5 m." }],
          niveaus: { basis: "4,5 m. A.", simpeler: "4500 mm ÷ 1000 = 4,5 m (komma 3 plekken naar links). = A.", nogSimpeler: "4,5 = A." },
        },
      },
    ],
  },

  // STAP 7: Cito-redactiesommen
  {
    title: "Cito-redactiesommen — eenheden mixen",
    explanation: "Op de Cito-toets krijg je vaak **verhalen** waar je eenheden moet **omrekenen** vóór je kunt rekenen. Dat is de truc.\n\n**Cito-strategie in 4 stappen**:\n1. **Lees het verhaal** rustig en onderstreep getallen + eenheden.\n2. **Maak alles dezelfde eenheid** *(meestal de kleinste)*.\n3. **Reken** zoals een normale som.\n4. **Antwoord in de gevraagde eenheid** *(let op!)*.\n\n**Voorbeeld 1 — gewicht**:\n*'Mama koopt 3 zakken aardappels van 2,5 kg en een zak van 750 g. Wat is het totaal in kg?'*\n• Stap 1: getallen = 3 × 2,5 kg + 750 g.\n• Stap 2: alles in g = 3 × 2500 + 750 = 7500 + 750 = **8250 g**.\n• Stap 3: gevraagd in kg → **8,25 kg**.\n\n**Voorbeeld 2 — inhoud + verdelen**:\n*'Een fles bevat 1,5 L limonade. Je wilt glazen van 250 mL vullen. Hoeveel volle glazen krijg je?'*\n• Stap 1: getallen = 1,5 L en 250 mL.\n• Stap 2: alles in mL → 1,5 L = 1500 mL.\n• Stap 3: 1500 ÷ 250 = **6 glazen**.\n\n**Voorbeeld 3 — lengte + tijd**:\n*'Tom fietst 12 km in een halfuur. Hoeveel m per minuut?'*\n• Stap 1: 12 km in 30 min.\n• Stap 2: alles in m + min → 12.000 m in 30 min.\n• Stap 3: 12.000 ÷ 30 = **400 m per minuut**.\n\n**Veel-voorkomende fouten**:\n• Vergeten om eerst om te rekenen → telt 2,5 kg + 750 als getallen ipv eenheden.\n• Antwoord in verkeerde eenheid geven *(in kg gevraagd, in g geantwoord)*.\n• Decimaal en gehele getallen door elkaar halen.\n\n**Tip bij Cito**:\nSchrijf altijd 2 dingen op vóór je rekent:\n1. Welke eenheid is de **kleinste**?\n2. In welke eenheid wordt het **antwoord** gevraagd?\n\nDat scheelt 90% van de fouten.",
    checks: [
      {
        q: "Mama koopt **2 pakken meel van 750 g** en **1 pak van 1,5 kg**. Hoeveel **kg** in totaal?",
        options: ["3","3,5","2250","4,25"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je 1,5 + 2 = 3,5 ipv 1,5 + 0,75 + 0,75 = 3?","Dat is in g, niet kg.","Veel te veel — heb je extra getallen meegerekend?"],
        uitlegPad: {
          stappen: [{ titel: "Eerst gelijke eenheid", tekst: "750 g = 0,75 kg. 2 × 0,75 + 1,5 = 1,5 + 1,5 = 3 kg." }],
          woorden: [{ woord: "redactiesom", uitleg: "Verhalende som met meerdere stappen + eenheid-omrekening." }],
          theorie: "Stap 1: alle eenheden gelijk maken (kg). Stap 2: rekenen.",
          voorbeelden: [{ type: "stap", tekst: "2 × 750 g = 1500 g = 1,5 kg. + 1,5 kg = 3 kg." }],
          basiskennis: [{ onderwerp: "Niet 1,5+2", uitleg: "Strikvraag: 'twee pakken' is 2 × hoeveelheid, niet getal 2 optellen." }],
          niveaus: { basis: "3 kg. A.", simpeler: "2 × 750 g = 1500 g = 1,5 kg. + 1,5 kg = 3 kg totaal. = A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "Een fles van **2 L** wordt verdeeld over **bekers van 200 mL**. Hoeveel **bekers**?",
        options: ["10","100","20","2"],
        answer: 0,
        wrongHints: [null,"Te veel — 2 L = 2000 mL. 2000 ÷ 200 = ?","Veel te veel — heb je vergeten om L→mL om te rekenen?","Te weinig — 1 L geeft al 5 bekers."],
        uitlegPad: {
          stappen: [{ titel: "L → mL → delen", tekst: "2 L = 2000 mL. 2000 ÷ 200 = 10 bekers." }],
          woorden: [{ woord: "verdelen", uitleg: "Totaal ÷ per-stuk = aantal stuks." }],
          theorie: "Eerst eenheid gelijk (mL). Dan delen.",
          voorbeelden: [{ type: "stap", tekst: "2 L = 2000 mL. ÷ 200 mL per beker = 10 bekers." }],
          basiskennis: [{ onderwerp: "Niet zonder omrekening", uitleg: "2 ÷ 200 = 0,01 — nutteloos. Eenheden moeten gelijk zijn." }],
          niveaus: { basis: "10 bekers. A.", simpeler: "2 L = 2000 mL. ÷ 200 = 10 bekers van 200 mL. = A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "Sven loopt **3 km** in **45 minuten**. Hoeveel **m per minuut**?",
        options: ["66,7","667","60","100"],
        answer: 0,
        wrongHints: [null,"Te veel met factor 10 — heb je km vergeten om te zetten naar m?","Te weinig — denk: 1 km in 15 min, dus per minuut?","Klopt niet — reken 3000 m ÷ 45 min."],
        uitlegPad: {
          stappen: [{ titel: "km → m → delen", tekst: "3 km = 3000 m. 3000 ÷ 45 = 66,7 m per min." }],
          woorden: [{ woord: "snelheid", uitleg: "Afstand ÷ tijd = snelheid per tijdseenheid." }],
          theorie: "Eenheid gelijk (m). Dan delen door minuten.",
          voorbeelden: [{ type: "stap", tekst: "3 km = 3000 m. ÷ 45 min = 66,67 m/min." }],
          basiskennis: [{ onderwerp: "Vergeet niet om te zetten", uitleg: "3 ÷ 45 zonder omrekening = 0,067 km/min — antwoord wil m/min." }],
          niveaus: { basis: "66,7 m/min. A.", simpeler: "3 km = 3000 m. ÷ 45 min = 66,7 m per minuut. = A.", nogSimpeler: "66,7 = A." },
        },
      },
      {
        q: "Een zwembad meet **25 m × 10 m × 1,5 m**. Hoeveel **L water** past erin? *(1 m³ = 1000 L)*",
        options: ["375.000","375","3750","37.500"],
        answer: 0,
        wrongHints: [null,"Te weinig — vergeet de × 1000 voor L niet.","Te weinig — dat is alleen 25 × 10 × 1,5.","Te weinig — 25 × 10 × 1,5 = 375 m³, en dan × 1000 voor L."],
        uitlegPad: {
          stappen: [{ titel: "Volume × 1000", tekst: "25×10×1,5 = 375 m³. × 1000 (L per m³) = 375.000 L." }],
          woorden: [{ woord: "m³", uitleg: "Kubieke meter. Volume-eenheid. 1 m³ = 1000 L." }],
          theorie: "Volume = L × B × H. Daarna omrekenen naar L (× 1000).",
          voorbeelden: [{ type: "stap", tekst: "25 × 10 × 1,5 = 375 m³. ×1000 L/m³ = 375.000 L." }],
          basiskennis: [{ onderwerp: "Realiteit", uitleg: "Zwembad heeft veel water — 375.000 L = 375 ton water." }],
          niveaus: { basis: "375.000 L. A.", simpeler: "Zwembad-volume = 25×10×1,5 = 375 m³. × 1000 L/m³ = 375.000 L. = A.", nogSimpeler: "375.000 = A." },
        },
      },
    ],
  },

  // STAP 8: Eindopdracht
  {
    title: "Eindopdracht — Cito-mix",
    explanation: "Tijd voor een **mix-toets** met alles wat je hebt geleerd. Deze vragen zijn in **echte Cito-stijl**:\n• Korte verhalen.\n• Eenheden door elkaar.\n• Soms een 'val'-antwoord dat heel logisch lijkt maar fout is.\n\n**Aanpak**:\n1. Lees rustig.\n2. Onderstreep getallen + eenheden.\n3. Reken alles om naar dezelfde eenheid.\n4. Reken.\n5. Check: is mijn antwoord in de juiste eenheid?\n\n**Tip**: bij twijfel — vul je antwoord even in 'omgekeerd'. Klopt het terug? Dan zit je goed.\n\nVeel succes!",
    checks: [
      {
        q: "Een marathon is **42 km en 195 m**. Hoeveel **m** in totaal?",
        options: ["42.195","42.000","42,195","422.000"],
        answer: 0,
        wrongHints: [null,"Te weinig — vergeet de 195 m niet.","Past niet als hele meters — getal-formaat klopt niet voor 'aantal meter'.","Veel te veel — heb je per ongeluk × 10 gedaan?"],
        uitlegPad: {
          stappen: [{ titel: "km → m + optellen", tekst: "42 km = 42.000 m. + 195 m = 42.195 m." }],
          woorden: [{ woord: "marathon", uitleg: "Officiële afstand: 42,195 km = 42.195 m." }],
          theorie: "Combinatie-getallen: zet alles in 1 eenheid, dan optellen.",
          voorbeelden: [{ type: "stap", tekst: "42 km × 1000 = 42000 m. + 195 m = 42.195 m." }],
          basiskennis: [{ onderwerp: "Niet 195 weglaten", uitleg: "42.000 = afronding. Vraag wil exact totaal." }],
          niveaus: { basis: "42.195 m. A.", simpeler: "42 km = 42.000 m + 195 m = 42.195 m. = A.", nogSimpeler: "42.195 = A." },
        },
      },
      {
        q: "Op de weegschaal: 3 appels **150 g** + 2 peren **180 g** = totaal hoeveel **g**?",
        options: ["810","330","450","630"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je rekening gehouden met 3 appels en 2 peren?","Te weinig — heb je alleen de eerste appel + peer geteld?","Te weinig — heb je de 3 appels niet meegerekend?"],
        uitlegPad: {
          stappen: [{ titel: "3 × 150 + 2 × 180", tekst: "Appels: 3 × 150 = 450. Peren: 2 × 180 = 360. Totaal: 450 + 360 = 810." }],
          woorden: [{ woord: "totaal-gewicht", uitleg: "Som van alle stuk-gewichten." }],
          theorie: "Stappen: 1) groep-gewicht (per soort × aantal). 2) optellen.",
          voorbeelden: [{ type: "stap", tekst: "3 appels × 150 g = 450 g. 2 peren × 180 g = 360 g. Som = 810 g." }],
          basiskennis: [{ onderwerp: "Niet 150+180", uitleg: "330 = alleen 1 appel + 1 peer. Mis 2 appels + 1 peer." }],
          niveaus: { basis: "810 g. A.", simpeler: "3 appels × 150 = 450 g. 2 peren × 180 = 360 g. Totaal = 810 g. = A.", nogSimpeler: "810 = A." },
        },
      },
      {
        q: "Een fles cola van **1,5 L** kost **€ 1,80**. Wat is de **prijs per mL**?",
        options: ["€ 0,0012","€ 1,20","€ 0,12","€ 0,012"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je vergeten om L naar mL om te rekenen? 1,5 L = 1500 mL.","Veel te veel — dat zou per L zijn.","Te veel — heb je 1 plek komma verkeerd?"],
        uitlegPad: {
          stappen: [{ titel: "L → mL → delen", tekst: "1,5 L = 1500 mL. €1,80 ÷ 1500 = €0,0012 per mL." }],
          woorden: [{ woord: "stuksprijs", uitleg: "Prijs per eenheid (hier mL)." }],
          theorie: "Stappen: 1) eenheid omzetten. 2) prijs ÷ aantal mL.",
          voorbeelden: [{ type: "stap", tekst: "1500 mL voor €1,80. Per mL: 1,80 ÷ 1500 = 0,0012." }],
          basiskennis: [{ onderwerp: "Klein getal", uitleg: "Per-mL-prijs is heel klein (kommaplaatsen ver naar rechts)." }],
          niveaus: { basis: "€0,0012. A.", simpeler: "1,5 L = 1500 mL. €1,80 ÷ 1500 = €0,0012 per mL. = A.", nogSimpeler: "0,0012 = A." },
        },
      },
      {
        q: "Een trein vertrekt om **08:47** en rijdt **2 uur 18 min**. Hoe laat komt 'ie aan?",
        options: ["11:05","10:65","11:15","10:55"],
        answer: 0,
        wrongHints: [null,"Past niet — 65 minuten bestaat niet, dat is 1 uur 5 min.","Te laat — heb je 18 min wel goed gerekend?","Te vroeg — vergeet je niet 18 minuten erbij op te tellen?"],
        uitlegPad: {
          stappen: [{ titel: "Stap apart + overflow", tekst: "08:47 + 2u = 10:47. 10:47 + 18m = 11:05 (47+18=65=1u5m)." }],
          woorden: [{ woord: "tijd-overflow", uitleg: ">60 min wordt extra uur." }],
          theorie: "Tijd-optellen met overflow: 47+18=65 min = 1 uur + 5 min → uur erbij, 5 min over.",
          voorbeelden: [{ type: "stap", tekst: "08:47 +2u = 10:47. +18m: 47+18=65 → 1u5m → 11:05." }],
          basiskennis: [{ onderwerp: "Geen 10:65", uitleg: "65 min bestaat niet — wordt 11:05." }],
          niveaus: { basis: "11:05. A.", simpeler: "08:47 + 2u18m = 11:05 (47+18=65 = 1u 5m, dus extra uur). = A.", nogSimpeler: "11:05 = A." },
        },
      },
      {
        q: "Welk verhaal past bij **'2,5 m'**?",
        options: [
          "De voordeur van het huis",
          "De lengte van een potlood",
          "De afstand tussen 2 steden",
          "Het gewicht van een kind",
        ],
        answer: 0,
        wrongHints: [null,"Een potlood is veel korter — denk in cm.","Tussen steden meet je in km, niet m.","Dat is een gewicht, niet een lengte."],
        uitlegPad: {
          stappen: [{ titel: "Schatten in m", tekst: "Voordeur ~2,5 m hoog. Potlood ~15 cm. Steden ~km. Kind ~30 kg." }],
          woorden: [{ woord: "schat-truc", uitleg: "Match getal+eenheid met realistisch object." }],
          theorie: "Schatten: m = mensen/meubels. Cm = potlood. Km = steden. Kg = gewicht.",
          voorbeelden: [{ type: "tabel", tekst: "Voordeur 2-2,5 m. Potlood 15-20 cm. Stad-stad 5-50 km." }],
          basiskennis: [{ onderwerp: "Realisme-test", uitleg: "Welk object heeft typisch deze maat?" }],
          niveaus: { basis: "Voordeur. A.", simpeler: "2,5 m = ongeveer hoogte van voordeur. Potlood is 15 cm. = A.", nogSimpeler: "Deur = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const matenEenheden = {
  id: "maten-eenheden",
  title: "Maten en eenheden — Cito groep 7-8",
  emoji: "📏",
  level: "groep6-8",
  subject: "rekenen",
  // SLO-niveau (G4 sprint-5+ S4): 1F einde-basisschool, kerndomein
  // 'Meten en meetkunde — maten en eenheden'. Cito-eindtoets-onderdeel.
  referentieNiveau: "1F",
  sloThema: "Meten en meetkunde — maten en eenheden",
  intro:
    "Maten en eenheden voor Cito-eindtoets groep 7-8: lengte (km/m/cm/mm), gewicht (kg/g/ton), inhoud (L/mL), tijd (uur/min/sec), de komma-verschuif-truc, en redactiesommen in Cito-stijl. ~15 min per deel.",
  triggerKeywords: [
    "maten","eenheden","kilometer","meter","centimeter","millimeter",
    "kilogram","gram","milligram","ton","liter","milliliter","deciliter",
    "centiliter","omrekenen","komma verschuiven","cito-redactie",
    "lengte","gewicht","inhoud","tijd berekenen","duur",
  ],
  chapters,
  steps,
};

export default matenEenheden;
