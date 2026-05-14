// Leerpad: Dierenklassen — groep 5-8 PO.
// Cito-onderdeel wereldoriëntatie (natuur/biologie). Referentieniveau 1F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  zoogdier: "#a1887f",
  vogel: "#42a5f5",
  vis: "#26a69a",
  reptiel: "#69f0ae",
  amfibie: "#9575cd",
  insect: "#ffd54f",
  highlight: "#ff7043",
};

const stepEmojis = ["🦁", "🐦", "🐟", "🦎", "🐝", "🏆"];

const chapters = [
  { letter: "A", title: "6 dierenklassen", emoji: "🦁", from: 0, to: 0 },
  { letter: "B", title: "Zoogdieren + vogels", emoji: "🐦", from: 1, to: 1 },
  { letter: "C", title: "Vissen + amfibieën", emoji: "🐟", from: 2, to: 2 },
  { letter: "D", title: "Reptielen + insecten", emoji: "🦎", from: 3, to: 3 },
  { letter: "E", title: "Voedselketens + biotopen", emoji: "🐝", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function dierenklassenSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">6 belangrijkste dierenklassen</text>

<rect x="15" y="45" width="90" height="48" rx="6" fill="rgba(161,136,127,0.18)" stroke="${COLORS.zoogdier}" stroke-width="1.5"/>
<text x="60" y="63" text-anchor="middle" fill="${COLORS.zoogdier}" font-size="11" font-family="Arial" font-weight="bold">🦁 zoogdier</text>
<text x="60" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">haren · melk</text>

<rect x="115" y="45" width="90" height="48" rx="6" fill="rgba(66,165,245,0.18)" stroke="${COLORS.vogel}" stroke-width="1.5"/>
<text x="160" y="63" text-anchor="middle" fill="${COLORS.vogel}" font-size="11" font-family="Arial" font-weight="bold">🐦 vogel</text>
<text x="160" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">veren · eieren</text>

<rect x="215" y="45" width="90" height="48" rx="6" fill="rgba(38,166,154,0.18)" stroke="${COLORS.vis}" stroke-width="1.5"/>
<text x="260" y="63" text-anchor="middle" fill="${COLORS.vis}" font-size="11" font-family="Arial" font-weight="bold">🐟 vis</text>
<text x="260" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">schubben · kieuwen</text>

<rect x="15" y="103" width="90" height="48" rx="6" fill="rgba(105,240,174,0.18)" stroke="${COLORS.reptiel}" stroke-width="1.5"/>
<text x="60" y="121" text-anchor="middle" fill="${COLORS.reptiel}" font-size="11" font-family="Arial" font-weight="bold">🦎 reptiel</text>
<text x="60" y="138" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">schubben · koudbloedig</text>

<rect x="115" y="103" width="90" height="48" rx="6" fill="rgba(149,117,205,0.18)" stroke="${COLORS.amfibie}" stroke-width="1.5"/>
<text x="160" y="121" text-anchor="middle" fill="${COLORS.amfibie}" font-size="11" font-family="Arial" font-weight="bold">🐸 amfibie</text>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vochtige huid</text>

<rect x="215" y="103" width="90" height="48" rx="6" fill="rgba(255,213,79,0.18)" stroke="${COLORS.insect}" stroke-width="1.5"/>
<text x="260" y="121" text-anchor="middle" fill="${COLORS.insect}" font-size="11" font-family="Arial" font-weight="bold">🐝 insect</text>
<text x="260" y="138" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">6 poten · 3-delig</text>

<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Elke klas heeft unieke kenmerken</text>
</svg>`;
}

const steps = [
  // STAP 1: 6 dierenklassen
  {
    title: "De 6 dierenklassen",
    explanation:
      "Dieren worden in **groepen** ingedeeld op basis van hun **lichaam + gedrag**.\n\n**De 6 belangrijkste klassen** *(uit je hoofd!)*:\n\n1. **Zoogdieren** *(zogen jongen met melk, haren/vacht)*\n   • Hond, kat, koe, paard, mens, walvis, dolfijn, leeuw, olifant.\n\n2. **Vogels** *(veren, eieren, snavel, meestal vliegen)*\n   • Mus, kip, eend, adelaar, pinguïn, struisvogel.\n\n3. **Vissen** *(schubben, kieuwen, zwemmen in water)*\n   • Goudvis, haai, zalm, makreel, paling.\n\n4. **Reptielen** *(droge schubben, koudbloedig, eieren)*\n   • Slang, hagedis, krokodil, schildpad.\n\n5. **Amfibieën** *(vochtige huid, jongen in water, volwassen op land)*\n   • Kikker, pad, salamander.\n\n6. **Insecten** *(6 poten, 3 lichaamsdelen, vaak vleugels)*\n   • Bij, vlieg, mier, kever, vlinder.\n\n**Belangrijke verschillen**:\n• **Warmbloedig** *(zoogdieren + vogels)* → houden eigen lichaamstemperatuur.\n• **Koudbloedig** *(vissen, reptielen, amfibieën, insecten)* → lichaamstemperatuur = omgevingstemperatuur.\n\n**Cito-strikvraag**:\n*'Een vleermuis vliegt — is het een vogel?'*\n→ **Nee!** Vleermuizen zijn **zoogdieren** *(haren, baart levende jongen, zoogt met melk)*. Vliegen maakt het niet automatisch een vogel.\n\n*'Een walvis leeft in zee — is het een vis?'*\n→ **Nee!** Walvissen zijn **zoogdieren** *(ademen lucht, baren levende jongen, zoogt met melk)*.\n\n*'Een pinguïn zwemt — is het een vis?'*\n→ **Nee!** Pinguïns zijn **vogels** *(veren, eieren)* die niet kunnen vliegen.",
    svg: dierenklassenSvg(),
    checks: [
      {
        q: "Een **vleermuis** is een ... ?",
        options: ["Zoogdier", "Vogel", "Reptiel", "Insect"],
        answer: 0,
        wrongHints: [null, "Klopt — heeft haren, zoogt jongen.", "Vliegt, maar geen vogel — geen veren.", "Heeft geen schubben.", "Te groot."],
        uitlegPad: {
          stappen: [
            { titel: "Vliegt ≠ vogel", tekst: "Veel mensen denken: 'het vliegt, dus het is een vogel'. **Niet waar!** De groep waarbij een dier hoort, hangt niet af van wat het kan (vliegen/zwemmen), maar van **lichaams-eigenschappen**." },
            { titel: "Kenmerken van een vleermuis", tekst: "Een vleermuis heeft:\n• **Haren / vacht** (geen veren!)\n• **Baart levende jongen** (geen eieren!)\n• **Zoogt jongen met melk** (typische zoogdier-eigenschap!)\n→ Dat zijn allemaal zoogdier-kenmerken." },
            { titel: "Het 'wapen' van een vleermuis", tekst: "Vleermuizen hebben **gewrichten in hun vinger** waaraan een dunne huid zit — een vleugel-huid. Geen veren. De vleugel is dus een soort uitgestrekte hand. Echte vogels hebben veren-vleugels." },
          ],
          woorden: [
            { woord: "zoogdier", uitleg: "Dier dat jongen met melk zoogt + haren heeft." },
            { woord: "vleermuis", uitleg: "Enig zoogdier dat ECHT kan vliegen (eekhoorns zweven alleen)." },
          ],
          theorie: "Cito-strikvraag: 'Vliegt het + heeft het veren?' = vogel. 'Vliegt het + heeft het haar + melk?' = zoogdier (vleermuis). 'Vliegt het + heeft het 6 poten?' = insect.",
          voorbeelden: [
            { type: "stap", tekst: "Andere dieren die misleiden: walvis (zee, lijkt vis) = zoogdier. Pinguïn (zwemt) = vogel. Hagedis (lijkt slang) = reptiel maar mét poten." },
            { type: "stap", tekst: "Vleermuizen zien in donker met echo's (sonar) — uniek voor zoogdieren." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vier zoogdier-kenmerken: haren, warm bloed, levende jongen, melk-zogen. Heeft dier minstens deze? → zoogdier, hoe vreemd het ook lijkt." }],
          niveaus: {
            basis: "Vleermuis = zoogdier. = A.",
            simpeler: "Vleermuis heeft HAREN + zoogt jongen met MELK = zoogdier. Vliegen maakt geen verschil. = A.",
            nogSimpeler: "Zoogdier = A.",
          },
        },
      },
      {
        q: "Een **walvis** is een ... ?",
        options: ["Zoogdier", "Vis", "Reptiel", "Amfibie"],
        answer: 0,
        wrongHints: [null, "Klopt — ademt lucht, zoogt jongen met melk.", "Geen schubben, geen kieuwen.", "Geen reptiel.", "Geen amfibie."],
        uitlegPad: {
          stappen: [
            { titel: "Niet alle waterdieren zijn vissen", tekst: "Walvissen leven in zee maar zijn zoogdieren: ze ademen lucht via een blaasgat, hebben warm bloed, en zoogen jongen met melk." },
          ],
          woorden: [{ woord: "zoogdier", uitleg: "Dier dat jongen zoogt (melk geeft) en haren/vacht heeft." }],
          theorie: "Een dier zit in zoogdieren-klas als het jongen zoogt — niet op basis van waar het woont.",
          voorbeelden: [{ type: "stap", tekst: "Walvis (zee), vleermuis (lucht), mol (grond) zijn allemaal zoogdieren." }],
          basiskennis: [{ onderwerp: "Niet plek-gebonden", uitleg: "Klasse hangt niet af van waar het dier woont, maar van eigenschappen." }],
          niveaus: {
            basis: "Zoogdier. A.",
            simpeler: "Een walvis ziet eruit als een vis maar is een zoogdier: ademt lucht en zoogt jongen met melk. Plek waar dier leeft (zee) bepaalt niet de klasse. = A.",
            nogSimpeler: "Zoogdier = A.",
          },
        },
      },
      {
        q: "Welk dier is **koudbloedig**?",
        options: ["Slang", "Hond", "Mus", "Walvis"],
        answer: 0,
        wrongHints: [null, "Klopt — reptielen zijn koudbloedig.", "Zoogdier = warmbloedig.", "Vogel = warmbloedig.", "Zoogdier = warmbloedig."],
      },
      {
        q: "Hoeveel poten heeft een **insect**?",
        options: ["6", "8", "4", "2"],
        answer: 0,
        wrongHints: [null, "Klopt — 6 poten, niet 8.", "Dat is een spin (geen insect!).", "Te weinig.", "Vogels en mensen — geen insect."],
      },
    ],
  },

  // STAP 2: Zoogdieren + vogels
  {
    title: "Zoogdieren + vogels — wat zijn de kenmerken?",
    explanation:
      "**Zoogdieren** — kenmerken *(uit je hoofd!)*:\n• **Haren of vacht** *(zelfs walvissen hebben kleine snorharen)*.\n• **Warmbloedig** *(houden eigen temperatuur)*.\n• **Zoogen jongen met melk**.\n• Meeste **baren** levende jongen *(behalve: vogelbekdier legt eieren!)*.\n• Ademen **lucht** *(longen)*.\n• Hebben een **gewervelde rug** *(net als wij)*.\n\n**Voorbeelden**:\n• Land: hond, kat, koe, leeuw, beer, mens, muis, paard.\n• Lucht: vleermuis.\n• Zee: walvis, dolfijn, robben, zeeleeuw.\n• Speciaal: vogelbekdier *(legt eieren maar zoogt jongen)*.\n\n**Vogels** — kenmerken *(uit je hoofd!)*:\n• **Veren** *(alleen vogels hebben veren)*.\n• **Snavel** *(geen tanden)*.\n• **Vleugels** *(meeste kunnen vliegen, niet alle)*.\n• **Eieren leggen** *(met harde schaal)*.\n• **Warmbloedig**.\n• Meeste bouwen een **nest**.\n• Ademen lucht.\n\n**Voorbeelden van vogels**:\n• Vliegen: mus, kraai, duif, valk, adelaar, zwaluw, kolibrie.\n• Niet vliegen: pinguïn, struisvogel, kiwi, kip *(beetje)*.\n• Water: eend, zwaan, gans, meeuw.\n\n**Cito-stikvragen**:\n*'Wat is het verschil tussen een vleermuis en een vogel?'*\n→ Vleermuis = zoogdier (haren, zoogt jongen). Vogel = veren, eieren.\n\n*'Welk dier legt eieren maar is geen vogel?'*\n→ Slang, hagedis, kikker, vis, insect. **Of**: vogelbekdier (zoogdier-uitzondering).\n\n*'Welk dier kan niet vliegen maar is wel een vogel?'*\n→ Pinguïn, struisvogel, kiwi.",
    checks: [
      {
        q: "Welk **kenmerk** hebben alle vogels?",
        options: ["Veren", "Schubben", "Vacht", "Vier poten"],
        answer: 0,
        wrongHints: [null, "Klopt — alleen vogels hebben veren.", "Dat zijn reptielen/vissen.", "Dat zijn zoogdieren.", "Vogels hebben 2 poten."],
      },
      {
        q: "Welke is een **zoogdier**?",
        options: ["Olifant", "Slang", "Mus", "Vis"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Reptiel.", "Vogel.", "Vis."],
      },
      {
        q: "Welk **kenmerk** hebben zoogdieren?",
        options: ["Zoogen jongen met melk", "Leggen eieren", "Schubben", "Kieuwen"],
        answer: 0,
        wrongHints: [null, "Klopt — vandaar 'zoog-dier'.", "Geen typisch zoogdier-kenmerk (uitzondering vogelbekdier).", "Vissen/reptielen.", "Vissen."],
      },
      {
        q: "Welke vogel **kan niet vliegen**?",
        options: ["Pinguïn", "Mus", "Adelaar", "Kolibrie"],
        answer: 0,
        wrongHints: [null, "Klopt — pinguïn zwemt heel goed maar vliegt niet.", "Mus vliegt.", "Adelaar vliegt.", "Kolibrie vliegt (hovert zelfs)."],
        uitlegPad: {
          stappen: [
            { titel: "Niet alle vogels vliegen", tekst: "We denken vaak dat **alle vogels vliegen**, maar dat is niet zo. Sommige vogels zijn vogels zónder vlieg-vermogen. Hun vleugels zijn aangepast voor iets anders, of veel te klein." },
            { titel: "Pinguïn = zwem-vogel", tekst: "De **pinguïn** is een vogel: hij heeft VEREN, legt EIEREN, heeft een SNAVEL. Maar zijn vleugels zijn **flippers** geworden — perfect voor onder-water-zwemmen, niet voor vliegen." },
            { titel: "Andere niet-vliegende vogels", tekst: "• **Struisvogel** — te groot/zwaar om te vliegen, maar rent ~70 km/u.\n• **Kiwi** — kleine NZ-vogel, vleugels piepklein.\n• **Emoe** + **kasuaris** (Australië/NG)." },
          ],
          woorden: [
            { woord: "pinguïn", uitleg: "Vogel die zwemt i.p.v. vliegt." },
            { woord: "flipper", uitleg: "Aangepaste vleugel om mee te zwemmen." },
          ],
          theorie: "Cito-truc — herken een vogel aan **VEREN + SNAVEL + EIEREN**. Dat een dier vliegt is NIET nodig om vogel te zijn. Pinguïn voldoet aan alle drie de kenmerken → vogel.",
          voorbeelden: [
            { type: "stap", tekst: "Kolibrie kan ZWEEFVLIEGEN (op één plek hangen in de lucht) — uniek in vogel-wereld." },
            { type: "stap", tekst: "Mus + adelaar = klassieke vlieg-vogels. Kolibrie = vlieg-meester. Pinguïn = zwem-meester. Allemaal vogels." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Sla de vraag andersom op: van de 4 opties is er ÉÉN die niet vliegt. Welke ken je als zwem-dier of grond-dier? Pinguïn → zwemt." }],
          niveaus: {
            basis: "Pinguïn = niet-vliegende vogel. = A.",
            simpeler: "Pinguïns leven op Antarctica en duiken in zee om vis te vangen. Vleugels = flippers, niet vlieg-vleugels. = A.",
            nogSimpeler: "Pinguïn = A.",
          },
        },
      },
    ],
  },

  // STAP 3: Vissen + amfibieën
  {
    title: "Vissen + amfibieën",
    explanation:
      "**Vissen** — kenmerken:\n• Leven in **water** *(zoet of zout)*.\n• **Schubben** op het lichaam.\n• **Kieuwen** *(adem-orgaan, halen zuurstof uit water)*.\n• **Koudbloedig**.\n• **Eieren leggen** *(meeste in het water)*.\n• Zwemmen met **vinnen**.\n\n**Voorbeelden**:\n• Zoetwater: goudvis, snoek, baars, paling.\n• Zoutwater: haai, makreel, kabeljauw, tonijn, zalm.\n• Bijzonder: zalm zwemt van zee naar rivier om eieren te leggen.\n\n**Amfibieën** — kenmerken:\n• **Vochtige, kale huid** *(geen schubben/haren)*.\n• **Jongen in water** *(kikkervisjes ademen met kieuwen)*.\n• **Volwassen op land** *(longen + huidademhaling)*.\n• **Koudbloedig**.\n• Leggen eieren in **water**.\n\n**Bekendste voorbeelden**:\n• **Kikker** — eieren → kikkervisjes → kikker.\n• **Pad** — lijkt op kikker maar 'droger'.\n• **Salamander** — lijkt op hagedis maar amfibie.\n\n**Belangrijk verschil — amfibie vs reptiel**:\n• Amfibie: vochtige huid, eieren in water, jongen ademen met kieuwen.\n• Reptiel: droge schubben, eieren op land, ademen altijd met longen.\n\n**De kikker-cyclus** *(klassiek Cito!)*:\n1. **Eieren** in water *(kikkerdril — gelei-achtige bal)*.\n2. **Kikkervisjes** *(ademen met kieuwen, leven in water)*.\n3. **Pootjes groeien** *(eerst achterpoten, dan voorpoten)*.\n4. **Staart verdwijnt** + longen ontwikkelen.\n5. **Volwassen kikker** *(leeft op land + in water)*.\n\nDuurt ongeveer **3 maanden** in totaal.",
    checks: [
      {
        q: "Hoe ademen **vissen**?",
        options: ["Met kieuwen", "Met longen", "Door de huid", "Via vinnen"],
        answer: 0,
        wrongHints: [null, "Klopt — halen zuurstof uit water.", "Vissen hebben geen longen.", "Sommige doen huidademhaling maar primair: kieuwen.", "Vinnen zijn voor zwemmen."],
      },
      {
        q: "Een **kikkervisje** wordt later ... ?",
        options: ["Kikker", "Vis", "Pad", "Salamander"],
        answer: 0,
        wrongHints: [null, "Klopt — kikker-cyclus.", "Niet — kikkervis is een fase van kikker.", "Pad is een ander dier.", "Salamander is ander dier."],
      },
      {
        q: "Welk dier is een **amfibie**?",
        options: ["Salamander", "Hagedis", "Goudvis", "Vlieg"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Reptiel.", "Vis.", "Insect."],
      },
      {
        q: "**Vissen** zijn ... ?",
        options: ["Koudbloedig", "Warmbloedig", "Halfwarm", "Geen bloed"],
        answer: 0,
        wrongHints: [null, "Klopt — temperatuur = water-temperatuur.", "Niet — alleen zoogdieren+vogels.", "Bestaat niet.", "Wel bloed."],
      },
    ],
  },

  // STAP 4: Reptielen + insecten
  {
    title: "Reptielen + insecten",
    explanation:
      "**Reptielen** — kenmerken:\n• **Droge schubben** *(of huidplaten zoals krokodil)*.\n• **Koudbloedig** *(zonnen om op te warmen)*.\n• Leggen meestal **eieren op land** *(met harde of leerachtige schaal)*.\n• Ademen **altijd met longen** *(ook degene die in water leven)*.\n• Geen externe oren.\n\n**Voorbeelden**:\n• **Slang** *(geen poten)*.\n• **Hagedis** *(4 poten, staart)*.\n• **Krokodil + alligator** *(groot, water+land)*.\n• **Schildpad** *(met schild)*.\n\n**Insecten** — kenmerken:\n• **6 poten** *(altijd!)*.\n• **3 lichaamsdelen**: kop, borststuk, achterlijf.\n• Vaak **vleugels** *(2 paar, bij sommige insecten)*.\n• **Sprieten / antennes** op het hoofd.\n• Geen ruggegraat *(ongewervelden)*.\n• Klein.\n• Leven door **vermenigvuldigen via eieren** + bij sommige een verandering: **gedaanteverwisseling**.\n\n**Voorbeelden van insecten**:\n• Vliegen: bij, vlieg, mug, vlinder, libel.\n• Lopen: mier, kever, oorworm.\n• Springen: sprinkhaan.\n\n**Pas op — wat is GEEN insect?**\n• **Spinnen** = 8 poten, geen insect *(behoren tot 'spinachtigen')*.\n• **Wormen** = geen poten, geen insect.\n• **Slakken** = weekdier.\n• **Pissebed** = kreeftje, geen insect.\n\n**Cito-strikvraag**:\n*'Is een spin een insect?'* → **Nee!** 8 poten = geen insect. Spin is een spinachtige.\n\n**Vlindergroei — gedaanteverwisseling**:\n1. Vlinder legt **eitje** op blad.\n2. Eitje wordt **rups** *(eet veel)*.\n3. Rups wordt **pop** *(in cocon)*.\n4. Uit pop komt een **vlinder**.\n\nKlassiek Cito-voorbeeld!",
    checks: [
      {
        q: "Hoeveel **poten** heeft een spin?",
        options: ["8", "6", "4", "2"],
        answer: 0,
        wrongHints: [null, "Klopt — daarom is spin geen insect.", "Insecten hebben 6.", "Zoogdieren hebben 4.", "Vogels/mensen hebben 2."],
        uitlegPad: {
          stappen: [
            { titel: "Tel de poten van een spin", tekst: "Een spin heeft **8 poten** — altijd. Tel ze de volgende keer dat je een spin ziet: 4 links + 4 rechts = 8. Dit is HET kenmerk dat spinnen onderscheidt." },
            { titel: "Spin = GEEN insect!", tekst: "Veel mensen noemen spinnen 'insecten', maar dat klopt niet. **Insecten = 6 poten + 3 lichaamsdelen**. Spinnen hebben **8 poten + 2 lichaamsdelen**. Daarom horen spinnen bij de **spinachtigen** (ander dier-groep)." },
            { titel: "Andere spinachtigen", tekst: "Niet alleen spinnen: ook **schorpioenen** (8 poten), **hooiwagens** (8 poten + lange poten), **mijten + teken** (klein, 8 poten). Alle spinachtigen = 8 poten." },
          ],
          woorden: [
            { woord: "spinachtige", uitleg: "Dier-groep met 8 poten — spin, schorpioen, mijt, teek." },
            { woord: "insect", uitleg: "Dier-groep met 6 poten + 3 lichaamsdelen." },
          ],
          theorie: "Cito-truc voor 'insect of niet' — tel poten. 6 = insect. 8 = spinachtige (geen insect). 0 of veel meer = iets anders (worm, slak, duizendpoot).",
          voorbeelden: [
            { type: "stap", tekst: "Bij, vlieg, mier, kever, vlinder = 6 poten = insect. Spin, schorpioen = 8 poten = spinachtige." },
            { type: "stap", tekst: "Duizendpoot? Lijkt 1000 poten maar heeft er meestal 30-300. Hoort bij 'veelpotigen', ook geen insect." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Insect of spin? Tel poten. 6 = insect (bij/vlinder/mier). 8 = spin (spinachtige). Onthoud: 6 = insect." }],
          niveaus: {
            basis: "8 poten. = A.",
            simpeler: "Spinnen hebben 8 poten (4 links + 4 rechts). Daarom zijn ze geen insect (insecten = 6). = A.",
            nogSimpeler: "8 = A.",
          },
        },
      },
      {
        q: "Welke is een **reptiel**?",
        options: ["Krokodil", "Kikker", "Spin", "Walvis"],
        answer: 0,
        wrongHints: [null, "Klopt — droge schubben + huidplaten.", "Amfibie.", "Spinachtige.", "Zoogdier."],
      },
      {
        q: "Een **rups** wordt later ... ?",
        options: ["Vlinder", "Vlieg", "Mier", "Kever"],
        answer: 0,
        wrongHints: [null, "Klopt — via pop-fase.", "Niet — vliegen leggen eitjes.", "Niet — mieren komen uit eitjes.", "Kever heeft andere cyclus."],
      },
      {
        q: "Hoeveel **lichaamsdelen** heeft een insect?",
        options: ["3 (kop, borst, achterlijf)", "2", "4", "5"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Spinnen hebben 2 lichaamsdelen.", "Te veel."],
      },
    ],
  },

  // STAP 5: Voedselketens + biotopen
  {
    title: "Voedselketens en biotopen",
    explanation:
      "Dieren eten elkaar of planten — dit heet een **voedselketen**.\n\n**Voorbeeld voedselketen** *(gras → muis → uil)*:\n• **Gras** *(plant)* groeit met zonlicht + water.\n• **Muis** eet gras.\n• **Uil** eet muis.\n\nDe **pijl** in een voedselketen wijst **naar wie het eet** *(de eter)*. Dus: gras → muis betekent muis eet gras.\n\n**Termen om te kennen**:\n• **Producent** = plant *(maakt zijn eigen voedsel met zonlicht)*.\n• **Consument** = dier dat planten of andere dieren eet.\n• **Herbivoor** = eet alleen planten *(koe, paard, konijn)*.\n• **Carnivoor** = eet alleen vlees *(leeuw, haai, valk)*.\n• **Omnivoor** = eet beide *(mens, beer, varken)*.\n\n**Cito-truc — wat zit waar in de keten?**\n• **Onderaan**: planten.\n• **Daarboven**: planten-eters *(herbivoren)*.\n• **Daarboven**: vleeseters *(carnivoren)*.\n• **Toproofdier**: niemand eet die zelf *(bv. leeuw, orka, haai)*.\n\n**Biotopen — waar dieren leven**:\n• **Bos**: vos, hert, eekhoorn, vlinder.\n• **Wei + akker**: koe, schaap, muis, kraai.\n• **Sloot + meer**: kikker, vis, eend, libel.\n• **Zee**: vis, walvis, dolfijn, krab.\n• **Woestijn**: kameel, slang, hagedis.\n• **Bergen**: berggeit, adelaar, sneeuwluipaard.\n• **Pool**: ijsbeer, pinguïn, robben.\n\n**Voedselweb**:\nIn werkelijkheid eet niet alles 1-op-1. Een **voedselweb** laat zien dat meerdere ketens met elkaar verbonden zijn. Bv. een vos eet konijnen + muizen + vogels + bessen.\n\n**Cito-vraag**:\n*'Wat gebeurt als de muizen allemaal sterven in deze keten?'*\n→ Uilen krijgen minder eten *(hongerig)*. Grasplant kan harder groeien *(meer plant)*. Verstoring in keten.",
    checks: [
      {
        q: "In de keten *'gras → muis → uil'*: wat eet de **uil**?",
        options: ["Muis", "Gras", "Andere uilen", "Alles"],
        answer: 0,
        wrongHints: [null, "Klopt — uil eet muis.", "Uilen eten geen gras.", "Niet typisch.", "Uil eet vooral muis."],
      },
      {
        q: "Een **koe** is een ... ?",
        options: ["Herbivoor (plant-eter)", "Carnivoor (vlees-eter)", "Omnivoor", "Producent"],
        answer: 0,
        wrongHints: [null, "Klopt — eet gras.", "Eet geen vlees.", "Eet geen vlees.", "Producent is een plant."],
      },
      {
        q: "Wat doet een **producent** in een voedselketen?",
        options: ["Maakt eigen voedsel met zonlicht", "Eet andere dieren", "Verteert dood materiaal", "Doet niets"],
        answer: 0,
        wrongHints: [null, "Klopt — dat zijn de planten.", "Dat zijn consumenten.", "Dat zijn afbrekers.", "Wel iets — planten produceren."],
      },
      {
        q: "Welk dier leeft op de **Noordpool**?",
        options: ["IJsbeer", "Pinguïn", "Leeuw", "Krokodil"],
        answer: 0,
        wrongHints: [null, "Klopt — Noordpool.", "Pinguïns wonen op Zuidpool / Zuidelijk halfrond.", "Afrika.", "Tropen."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — dieren-mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: dierenklassen, kenmerken, voedselketen.\n\nVeel succes!",
    checks: [
      {
        q: "Een **dolfijn** is een ... ?",
        options: ["Zoogdier", "Vis", "Vogel", "Reptiel"],
        answer: 0,
        wrongHints: [null, "Klopt — ademt lucht, zoogt jongen.", "Niet — geen schubben/kieuwen.", "Geen veren.", "Geen schubben."],
      },
      {
        q: "Welke heeft **veren**?",
        options: ["Pinguïn", "Hagedis", "Walvis", "Mier"],
        answer: 0,
        wrongHints: [null, "Klopt — pinguïn is vogel.", "Schubben.", "Geen veren — zoogdier.", "Insect, geen veren."],
      },
      {
        q: "Een **kikker** is een ... ?",
        options: ["Amfibie", "Reptiel", "Vis", "Insect"],
        answer: 0,
        wrongHints: [null, "Klopt — vochtige huid, jongen in water.", "Geen schubben.", "Leeft niet alleen in water.", "4 poten, niet 6."],
      },
      {
        q: "**Hoeveel poten** heeft een mier?",
        options: ["6", "4", "8", "2"],
        answer: 0,
        wrongHints: [null, "Klopt — insect.", "Zoogdier.", "Spinachtige.", "Vogel."],
      },
      {
        q: "In welke voedselketen klopt **alleen** *gras → konijn → vos*?",
        options: ["Gras → konijn → vos", "Vos → konijn → gras", "Gras → vos → konijn", "Konijn → vos → gras"],
        answer: 0,
        wrongHints: [null, "Klopt — konijn eet gras, vos eet konijn.", "Verkeerde richting — vos eet konijn, niet andersom.", "Vos eet geen gras direct.", "Konijn eet geen vos."],
      },
      {
        q: "**Welke is GEEN zoogdier**?",
        options: ["Krokodil", "Hond", "Kat", "Koe"],
        answer: 0,
        wrongHints: [null, "Klopt — reptiel.", "Wel zoogdier.", "Wel zoogdier.", "Wel zoogdier."],
      },
      { q: "Hoeveel **diergroepen** zijn er (gewervelden)?", options: ["5 (zoogdier/vogel/reptiel/amfibie/vis)","2","10","3"], answer: 0, wrongHints: [null,"Klopt — hoofdgroepen.","Te weinig.","Te veel.","Te weinig."] },
      { q: "Een **walvis** is een?", options: ["Zoogdier","Vis","Reptiel","Insect"], answer: 0, wrongHints: [null,"Klopt — zoogt jongen, ademt lucht.","Niet — leeft in water, maar geen vis.","Niet.","Niet."] },
      { q: "Een **slang** is een?", options: ["Reptiel","Amfibie","Vis","Zoogdier"], answer: 0, wrongHints: [null,"Klopt — schubben, koudbloedig.","Vochtige huid is amfibie.","Niet.","Niet."] },
      { q: "Een **vlinder** is een?", options: ["Insect","Vogel","Reptiel","Zoogdier"], answer: 0, wrongHints: [null,"Klopt — 6 poten, 3 lichaamsdelen.","Niet.","Niet.","Niet."] },
      { q: "Een **kip** is een?", options: ["Vogel","Zoogdier","Reptiel","Vis"], answer: 0, wrongHints: [null,"Klopt — veren, legt eieren.","Niet.","Niet.","Niet."] },
      { q: "Wat is een **koudbloedig** dier?", options: ["Lichaamstemp gelijk aan omgeving","Bloed is koud","Altijd warm","Niet relevant"], answer: 0, wrongHints: [null,"Klopt — reptielen, vissen, amfibieën.","Niet betekenis.","Tegengestelde.","Wel."] },
      { q: "Welke diergroep heeft **schubben**?", options: ["Vissen + reptielen","Vogels","Zoogdieren","Insecten"], answer: 0, wrongHints: [null,"Klopt.","Veren.","Haar.","Geleed exoskelet."] },
      { q: "Hoeveel **lichaamsdelen** heeft een insect?", options: ["3","2","4","6"], answer: 0, wrongHints: [null,"Klopt — kop/borst/achterlijf.","Niet.","Niet.","Aantal poten."] },
      { q: "Een **spin** is een?", options: ["Spinachtige (8 poten)","Insect (6)","Reptiel","Zoogdier"], answer: 0, wrongHints: [null,"Klopt — geen insect.","Niet — 8 poten.","Niet.","Niet."] },
      { q: "Wat is een **planteneter**?", options: ["Herbivoor","Carnivoor","Omnivoor","Roofdier"], answer: 0, wrongHints: [null,"Klopt.","Vleeseter.","Alleseter.","Vleeseter."] },
      { q: "Wat is een **alleseter**?", options: ["Omnivoor","Herbivoor","Carnivoor","Predator"], answer: 0, wrongHints: [null,"Klopt — bv. mens, beer.","Plant.","Vlees.","Vlees."] },
      { q: "Hoe planten zoogdieren zich voort?", options: ["Levende jongen baren","Eieren","Wisselend","Niet"], answer: 0, wrongHints: [null,"Klopt — bijna alle.","Vogel/reptiel/vis.","Niet.","Wel."] },
      { q: "Welke diergroep **ademt door longen ÉN huid**?", options: ["Amfibieën","Vogels","Vissen","Insecten"], answer: 0, wrongHints: [null,"Klopt — kikker.","Alleen longen.","Kieuwen.","Tracheeën."] },
      { q: "Wat is een **roofdier** (predator)?", options: ["Dier dat andere dieren jaagt/eet","Planten-eter","Aaseter","Allesvreter"], answer: 0, wrongHints: [null,"Klopt.","Tegengestelde.","Andere niche.","Te breed."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const dierenklassenPo = {
  id: "dierenklassen-po",
  title: "Dierenklassen + voedselketen (groep 5-8)",
  emoji: "🦁",
  level: "groep5-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Natuur — dierenklassen + ecologie basis",
  prerequisites: [
    { id: "dieren-seizoenen-natuur", title: "Natuur (basis)", niveau: "po-1F" },
  ],
  intro:
    "Dierenklassen voor groep 5-8 — 6 hoofdklassen (zoogdieren/vogels/vissen/reptielen/amfibieën/insecten), kenmerken, voedselketens, biotopen. Cito-onderdeel wereldoriëntatie. ~15 min.",
  triggerKeywords: [
    "dier", "dieren", "zoogdier", "vogel", "vis", "reptiel",
    "amfibie", "insect", "voedselketen", "biotoop",
    "warmbloedig", "koudbloedig", "herbivoor", "carnivoor",
  ],
  chapters,
  steps,
};

export default dierenklassenPo;
