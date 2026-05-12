// Leerpad: Het lichaam + gezondheid — groep 6-8 PO.
// Cito-onderdeel wereldoriëntatie (natuur+gezondheid). Referentieniveau 1F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  bone: "#f5f5f5",
  blood: "#ef5350",
  lung: "#80cbc4",
  heart: "#e57373",
  liver: "#a1887f",
  highlight: "#ffd54f",
};

const stepEmojis = ["🦴", "❤️", "🫁", "🥦", "💪", "🏆"];

const chapters = [
  { letter: "A", title: "Skelet en botten", emoji: "🦴", from: 0, to: 0 },
  { letter: "B", title: "Spieren + bloed", emoji: "❤️", from: 1, to: 1 },
  { letter: "C", title: "Organen", emoji: "🫁", from: 2, to: 2 },
  { letter: "D", title: "Voeding (Schijf van Vijf)", emoji: "🥦", from: 3, to: 3 },
  { letter: "E", title: "Hygiëne + slaap + sport", emoji: "💪", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function skeletSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Belangrijkste botten</text>
<!-- Schedel -->
<circle cx="160" cy="50" r="22" fill="${COLORS.bone}" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="200" y="48" fill="${COLORS.text}" font-size="11" font-family="Arial">schedel (hoofd)</text>
<!-- Wervelkolom -->
<rect x="156" y="72" width="8" height="60" fill="${COLORS.bone}" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="200" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial">wervelkolom (rug)</text>
<!-- Ribben -->
<path d="M 130 90 Q 160 110 190 90 Q 195 105 190 120 Q 160 135 130 120 Q 125 105 130 90" fill="${COLORS.bone}" opacity="0.5" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="220" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">ribben</text>
<!-- Bovenbeen -->
<rect x="148" y="135" width="6" height="55" fill="${COLORS.bone}" stroke="${COLORS.curve}" stroke-width="1"/>
<rect x="166" y="135" width="6" height="55" fill="${COLORS.bone}" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="200" y="170" fill="${COLORS.text}" font-size="11" font-family="Arial">bovenbeen-bot</text>
<text x="200" y="184" fill="${COLORS.muted}" font-size="10" font-family="Arial">(grootste bot)</text>
</svg>`;
}

function organenSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Belangrijkste organen</text>
<!-- Hersenen -->
<ellipse cx="80" cy="55" rx="22" ry="14" fill="${COLORS.heart}" opacity="0.7"/>
<text x="80" y="60" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">hersenen</text>
<text x="80" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">denken</text>
<!-- Longen -->
<ellipse cx="180" cy="60" rx="28" ry="20" fill="${COLORS.lung}" opacity="0.7"/>
<text x="180" y="64" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">longen</text>
<text x="180" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">ademen</text>
<!-- Hart -->
<path d="M 270 50 Q 260 40 250 50 Q 250 60 270 80 Q 290 60 290 50 Q 280 40 270 50" fill="${COLORS.heart}" opacity="0.8"/>
<text x="270" y="60" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">hart</text>
<text x="270" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">pompt bloed</text>
<!-- Lever -->
<rect x="50" y="115" width="60" height="35" rx="5" fill="${COLORS.liver}" opacity="0.7"/>
<text x="80" y="135" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">lever</text>
<text x="80" y="158" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">filtert bloed</text>
<!-- Maag -->
<ellipse cx="180" cy="130" rx="30" ry="18" fill="${COLORS.curve}" opacity="0.6"/>
<text x="180" y="135" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">maag</text>
<text x="180" y="158" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">verteert eten</text>
<!-- Nieren -->
<ellipse cx="270" cy="125" rx="12" ry="18" fill="${COLORS.blood}" opacity="0.7"/>
<text x="270" y="130" text-anchor="middle" fill="#0e1014" font-size="9" font-family="Arial" font-weight="bold">nier</text>
<text x="270" y="158" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">filtert urine</text>
<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Allemaal in de torso (romp)</text>
</svg>`;
}

const steps = [
  // STAP 1: Skelet
  {
    title: "Het skelet — botten van je lichaam",
    explanation:
      "Het **skelet** is alle **botten** in je lichaam — samen meer dan **200 botten** *(206 bij volwassenen, baby's hebben er nog meer omdat sommige later samengroeien)*.\n\n**Wat doet je skelet?**\n1. **Vorm geven** aan je lichaam.\n2. **Bescherming** van organen *(schedel beschermt hersenen, ribben beschermen hart+longen)*.\n3. **Beweging** mogelijk maken *(spieren trekken aan botten)*.\n4. **Bloed maken** *(in het beenmerg, midden in je grote botten)*.\n\n**Belangrijkste botten** *(uit je hoofd!)*:\n• **Schedel** — beschermt je hersenen.\n• **Wervelkolom** *(rug)* — een ketting van 33 wervels van nek tot stuit.\n• **Ribben** — 12 paar, beschermen hart + longen.\n• **Sleutelbeen** — boven je schouder.\n• **Opperarmbot** — bovenarm.\n• **Spaakbeen + ellepijp** — onderarm.\n• **Bekken** *(heup)* — verbindt benen met rug.\n• **Bovenbeen-bot (dijbeen)** — grootste bot van je lijf.\n• **Scheenbeen + kuitbeen** — onderbeen.\n• **Hand**: 27 botjes per hand. **Voet**: 26 botjes.\n\n**Cito-feitjes**:\n• Het **grootste bot** is het **dijbeen**.\n• Het **kleinste bot** zit in je **oor** *(stijgbeugel — 3 mm)*.\n• Botten zijn levend! Ze groeien én herstellen na een breuk.\n• **Gewricht** = plek waar 2 botten elkaar ontmoeten *(knie, elleboog)*.\n\n**Gewrichten** = plekken waar botten kunnen bewegen:\n• **Scharniergewricht**: knie, elleboog *(één richting)*.\n• **Kogelgewricht**: schouder, heup *(alle richtingen)*.",
    svg: skeletSvg(),
    checks: [
      {
        q: "Hoeveel botten heeft een **volwassen mens** ongeveer?",
        options: ["Meer dan 200", "Ongeveer 50", "Ongeveer 1000", "Precies 100"],
        answer: 0,
        wrongHints: [null, "Klopt — 206 om precies te zijn.", "Veel te weinig.", "Veel te veel.", "Niet precies dat aantal."],
      },
      {
        q: "Wat is het **grootste bot**?",
        options: ["Dijbeen", "Schedel", "Wervelkolom", "Sleutelbeen"],
        answer: 0,
        wrongHints: [null, "Klopt — het bovenbeen-bot.", "Schedel is geen 1 bot maar een set.", "Wervelkolom is een ketting van vele kleinere botten.", "Niet het grootste."],
      },
      {
        q: "Wat **beschermt** de **schedel**?",
        options: ["Hersenen", "Hart", "Longen", "Maag"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Hart zit in borst (achter ribben).", "Longen zitten in borst.", "Maag zit in buik."],
      },
      {
        q: "Wat is een **gewricht**?",
        options: ["Plek waar 2 botten elkaar ontmoeten", "Een spier", "Een bot zelf", "Een orgaan"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Spier is iets anders.", "Bot is niet gewricht.", "Geen orgaan."],
      },
    ],
  },

  // STAP 2: Spieren + bloed
  {
    title: "Spieren en bloed",
    explanation:
      "**Spieren** zorgen dat je kunt **bewegen**. Ze zitten vast aan botten en kunnen samentrekken *(korter worden)* of ontspannen.\n\n**Hoeveel spieren?**\nMeer dan **600** in je lichaam!\n\n**3 soorten spieren**:\n1. **Skeletspieren** — om te bewegen *(armen, benen, gezicht)*. Je kunt ze bewust besturen.\n2. **Hartspier** — alleen in het hart. Werkt automatisch.\n3. **Gladde spieren** — in maag, darmen, bloedvaten. Werken automatisch.\n\n**Voorbeelden van bekende spieren**:\n• **Biceps** — bovenarm, voorkant.\n• **Triceps** — bovenarm, achterkant.\n• **Buikspieren** *(rechte buikspier = 'sixpack')*.\n• **Bilspieren** — grootste spier van je lichaam.\n• **Kuitspier** — achterkant onderbeen.\n• **Tong** — sterkste spier per gewicht.\n\n**Bloed — wat zit erin?**\n• **Rode bloedcellen** — vervoeren zuurstof.\n• **Witte bloedcellen** — vechten tegen ziektes.\n• **Plaatjes** — zorgen voor stolling *(korst bij wondjes)*.\n• **Plasma** — vloeistof, vervoert voedingsstoffen.\n\n**Bloedsomloop**:\n1. Hart pompt bloed door je lichaam via **slagaders**.\n2. Bloed brengt zuurstof + voeding naar alle cellen.\n3. Op terugweg pakt bloed afval (zoals CO₂) op.\n4. Bloed gaat terug naar hart via **aders**.\n5. Bloed gaat naar longen om CO₂ uit te ademen + nieuwe zuurstof op te halen.\n\n**Hart-feitjes**:\n• Klopt ongeveer **70 keer per minuut** *(in rust)*.\n• Pompt **5 liter bloed per minuut**.\n• Heeft 4 kamers: 2 boezems + 2 kamers.\n\n**Cito-vraag**: 'Wat doet je hart?' → Bloed pompen door je lichaam.",
    checks: [
      {
        q: "Hoeveel spieren heeft een mens ongeveer?",
        options: ["Meer dan 600", "Ongeveer 100", "Precies 200", "Ongeveer 50"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Te weinig.", "Veel te weinig."],
      },
      {
        q: "Wat doet je **hart**?",
        options: ["Bloed pompen door je lichaam", "Eten verteren", "Zuurstof maken", "Hersenen koelen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Maag doet dat.", "Longen halen zuurstof binnen, niet maken.", "Niet de taak van het hart."],
      },
      {
        q: "**Rode bloedcellen** vervoeren ... ?",
        options: ["Zuurstof", "Afval", "Voedsel", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet de hoofdtaak.", "Plasma doet dat.", "Wel iets — zuurstof."],
      },
      {
        q: "Welke spier is **sterkste per gewicht**?",
        options: ["Tong", "Biceps", "Hartspier", "Kuitspier"],
        answer: 0,
        wrongHints: [null, "Klopt — verrassend!", "Sterk maar niet per gewicht sterkste.", "Sterk, maar tong wint per gewicht.", "Sterk maar niet sterkste."],
      },
    ],
  },

  // STAP 3: Organen
  {
    title: "De organen — wat doet elk?",
    explanation:
      "Organen zijn **delen van je lichaam** met een speciale taak.\n\n**De belangrijkste organen** *(uit je hoofd!)*:\n\n• **Hersenen** — denken, voelen, besturen. In je hoofd.\n• **Hart** — pompt bloed. In je borst, iets links.\n• **Longen** — ademen *(zuurstof in, CO₂ uit)*. In je borst.\n• **Maag** — verteert eten *(eerste stap)*. Boven in de buik.\n• **Darmen** — neemt voedingsstoffen op + maakt poep. In de buik.\n• **Lever** — filtert bloed, maakt gal. Rechtsboven in buik.\n• **Nieren** — filteren urine uit bloed *(je hebt er 2)*. In de rug.\n• **Blaas** — slaat urine op. Onder in buik.\n• **Huid** — beschermt je hele lichaam. Grootste 'orgaan'.\n• **Ogen** — zien.\n• **Oren** — horen + evenwicht.\n• **Neus** — ruiken + ademen.\n• **Tong** — proeven + praten + slikken.\n\n**Cito-vragen — kerntaak per orgaan**:\n*'Welk orgaan filtert bloed?'* → Lever (of nieren bij urine).\n*'Welk orgaan vermalst eten?'* → Maag.\n*'Welk orgaan pompt bloed?'* → Hart.\n*'Welk orgaan vat zuurstof op uit lucht?'* → Longen.\n\n**Zintuigen** *(5 stuks)*:\n• Zien — ogen.\n• Horen — oren.\n• Ruiken — neus.\n• Proeven — tong.\n• Voelen — huid.\n\n**Hoeveel organen?**\nNiet precies te zeggen — afhankelijk hoe je telt. Maar de **bovenstaande lijst** is wat je moet kennen voor Cito.",
    svg: organenSvg(),
    checks: [
      {
        q: "Welk orgaan **pompt bloed**?",
        options: ["Hart", "Longen", "Lever", "Maag"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Longen ademen.", "Lever filtert.", "Maag verteert."],
      },
      {
        q: "Welk orgaan **vermalst eten**?",
        options: ["Maag", "Hart", "Longen", "Hersenen"],
        answer: 0,
        wrongHints: [null, "Klopt — eerste stap vertering.", "Hart pompt bloed.", "Longen ademen.", "Hersenen denken."],
      },
      {
        q: "Hoeveel **nieren** heb je?",
        options: ["2", "1", "4", "0"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Wel nodig om te leven."],
      },
      {
        q: "Welk **zintuig** hoort bij je **huid**?",
        options: ["Voelen", "Zien", "Horen", "Ruiken"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Zien is met ogen.", "Horen met oren.", "Ruiken met neus."],
      },
    ],
  },

  // STAP 4: Voeding
  {
    title: "Schijf van Vijf — gezond eten",
    explanation:
      "De **Schijf van Vijf** is een Nederlandse manier om te leren wat **gezond** eten is. Elke dag moet je iets uit **alle 5 vakken** eten.\n\n**De 5 vakken**:\n1. **Groente + fruit** — vitamines + vezels (250g groente + 2 stuks fruit per dag).\n2. **Brood + graan + aardappel + pasta + rijst** — energie (koolhydraten).\n3. **Vis + peulvruchten + vlees + ei + noten** — eiwitten (bouwstof).\n4. **Zuivel + kaas** — calcium voor botten.\n5. **Smeer- + bereidingsvet** — onverzadigd vet (zoals olie + boter).\n\n**+ niet vergeten**: **water drinken** (~1,5 liter per dag).\n\n**Wat hoort NIET in de Schijf van Vijf?**\n• **Snoep + koek + frisdrank + chips** — heten 'extra's', mogen soms maar zijn niet voor elke dag.\n• **Veel zout, suiker, verzadigd vet** — niet gezond in grote hoeveelheden.\n\n**Cito-stikvraag** — *'Welke is groente?'*\n• Tomaat = groente *(Cito-realiteit, ook al is het biologisch een vrucht)*.\n• Aardappel = NIET in groente-vak, maar in koolhydraten-vak.\n• Banaan = fruit.\n• Pinda = peulvrucht (vak 3, bouwstof).\n\n**Andere belangrijke regels**:\n• **Eet langzaam** — geeft maag tijd om te zeggen 'genoeg!'.\n• **Niet te veel suiker** — slecht voor tanden + gewicht.\n• **Niet te veel zout** — slecht voor hart en nieren.\n• **Niet teveel verzadigd vet** *(boter, vet vlees)* — verstopt slagaders.\n• **Wel onverzadigd vet** *(olijfolie, noten, vis)* — gezond.\n\n**Wat is een 'koolhydraat'?**\nEnergie uit brood, pasta, rijst, aardappel. Je lichaam zet het om in suiker → energie om te bewegen + denken.",
    checks: [
      {
        q: "Hoeveel vakken heeft de **Schijf van Vijf**?",
        options: ["5", "3", "7", "10"],
        answer: 0,
        wrongHints: [null, "Klopt — vandaar de naam.", "Te weinig.", "Te veel.", "Veel te veel."],
      },
      {
        q: "Hoeveel **stuks fruit** per dag?",
        options: ["2 stuks", "5 stuks", "1 stuk", "10 stuks"],
        answer: 0,
        wrongHints: [null, "Klopt — 2 stuks fruit + 250g groente = de richtlijn.", "Te veel.", "Te weinig.", "Veel te veel."],
      },
      {
        q: "Wat is NIET in de Schijf van Vijf?",
        options: ["Snoep", "Brood", "Melk", "Sla"],
        answer: 0,
        wrongHints: [null, "Klopt — snoep is een 'extra', niet voor elke dag.", "Brood is koolhydraat (vak 2).", "Melk is zuivel (vak 4).", "Sla is groente (vak 1)."],
      },
      {
        q: "Hoeveel **water** moet je drinken per dag?",
        options: ["~1,5 liter", "~3 liter", "~0,5 liter", "~5 liter"],
        answer: 0,
        wrongHints: [null, "Klopt — ongeveer.", "Te veel.", "Te weinig.", "Veel te veel."],
      },
    ],
  },

  // STAP 5: Hygiëne + slaap + sport
  {
    title: "Hygiëne, slaap en bewegen",
    explanation:
      "Naast eten zijn er andere dingen die belangrijk zijn voor **gezond blijven**.\n\n**Hygiëne — schoonhouden**:\n• **Handen wassen** vóór eten + na toilet + na buiten zijn. Met **zeep**, **20 seconden**. Hierdoor minder ziektes.\n• **Tanden poetsen** 2× per dag, 2 minuten lang. Voorkomt gaatjes.\n• **Douchen** of in bad — minimaal een paar keer per week.\n• **Schone kleren** — bacteriën gaan in vuile kleren groeien.\n• **Niezen in elleboog** — om druppeltjes niet rond te slingeren.\n\n**Slaap**:\n• Kinderen *(6-12 jr)*: **9-11 uur** per nacht.\n• Tieners: 8-10 uur.\n• Volwassenen: 7-9 uur.\n• Tijdens slaap **herstelt** het lichaam + verwerken hersenen wat je geleerd hebt.\n• **Te weinig slaap** = moe, niet goed kunnen leren, vaker ziek.\n\n**Sporten + bewegen**:\n• **Elke dag** minimaal 1 uur bewegen voor kinderen.\n• Voorbeelden: fietsen naar school, voetbal, dansen, zwemmen, springen.\n• Voordelen:\n  - Sterkere spieren + botten.\n  - Betere conditie.\n  - Beter slapen.\n  - Vrolijker gevoel *(geluksstofjes in de hersenen)*.\n• **Te lang stilzitten** = niet gezond.\n\n**Beeldscherm-tijd**:\n• Niet te veel TV / tablet / telefoon.\n• Vooral niet vlak voor slapengaan *(blauw licht houdt je wakker)*.\n• Ouders geven vaak een limiet — bv. 1-2 uur op een schooldag.\n\n**Cito-vraag**: 'Waarom handen wassen?' → om bacteriën weg te krijgen en ziekte te voorkomen.",
    checks: [
      {
        q: "Hoe **lang** moet je handen wassen?",
        options: ["~20 seconden", "5 seconden", "1 minuut", "Zo kort mogelijk"],
        answer: 0,
        wrongHints: [null, "Klopt — met zeep.", "Te kort.", "Te lang.", "Niet zo kort — minstens 20 sec."],
      },
      {
        q: "Hoeveel **uur slaap** heeft een kind van **10** ongeveer nodig?",
        options: ["9-11 uur", "5-6 uur", "12-15 uur", "3-4 uur"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Veel te weinig."],
      },
      {
        q: "Hoe vaak **tanden poetsen**?",
        options: ["2× per dag", "1× per week", "5× per dag", "Alleen als ze pijn doen"],
        answer: 0,
        wrongHints: [null, "Klopt — ochtend + avond, 2 minuten.", "Veel te weinig.", "Te vaak (geen kwaad maar overdreven).", "Te laat — voorkomen is beter."],
      },
      {
        q: "Hoe lang moet een kind **bewegen** per dag (minimaal)?",
        options: ["~1 uur", "10 minuten", "3 uur", "Heel de dag"],
        answer: 0,
        wrongHints: [null, "Klopt — minimaal.", "Te weinig.", "Te veel als verplichting.", "Niet realistisch."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — lichaam-mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: skelet, organen, voeding, gezondheid.\n\nVeel succes!",
    checks: [
      {
        q: "Wat **beschermt** je **hart en longen**?",
        options: ["Ribben", "Schedel", "Wervelkolom", "Bekken"],
        answer: 0,
        wrongHints: [null, "Klopt — 12 paar ribben.", "Schedel beschermt hersenen.", "Wervelkolom beschermt ruggenmerg.", "Bekken zit lager."],
      },
      {
        q: "Welk orgaan **ademt**?",
        options: ["Longen", "Hart", "Lever", "Maag"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Hart pompt.", "Lever filtert.", "Maag verteert."],
      },
      {
        q: "Welke is NIET in de Schijf van Vijf?",
        options: ["Chips", "Volkorenbrood", "Appel", "Kaas"],
        answer: 0,
        wrongHints: [null, "Klopt — chips is een extra.", "Brood = vak 2.", "Appel = vak 1.", "Kaas = vak 4."],
      },
      {
        q: "Hoeveel **bloedcellen-soorten** zijn er belangrijke?",
        options: ["3 (rood, wit, plaatjes)", "1 (alleen rood)", "5", "10"],
        answer: 0,
        wrongHints: [null, "Klopt — rood (zuurstof), wit (afweer), plaatjes (stolling).", "Te weinig.", "Te veel — 3 hoofdsoorten.", "Veel te veel."],
        uitlegPad: {
          stappen: [
            { titel: "3 hoofdsoorten", tekst: "Rood: zuurstof vervoeren. Wit: bacteriën doden (afweer). Plaatjes: stolling bij wondjes (korst maken)." },
          ],
          woorden: [{ woord: "bloedcel", uitleg: "Klein bolletje in je bloed dat een taak heeft." }],
          theorie: "3 belangrijke bloedcel-types.",
          voorbeelden: [{ type: "stap", tekst: "Wondje → plaatjes maken korst." }],
          basiskennis: [{ onderwerp: "Niet alleen rood", uitleg: "Bloed lijkt rood maar bevat ook witte cellen + plaatjes." }],
          niveaus: {
            basis: "3. A.",
            simpeler: "Drie hoofdsoorten: rode (zuurstof), witte (afweer), plaatjes (stolling). = A.",
            nogSimpeler: "3 = A.",
          },
        },
      },
      {
        q: "**Tanden poetsen** doe je hoe vaak?",
        options: ["2× per dag", "1× per dag", "1× per week", "Na elke maaltijd"],
        answer: 0,
        wrongHints: [null, "Klopt — ochtend + avond.", "Te weinig.", "Veel te weinig.", "Overdreven."],
      },
      {
        q: "Wat is de **grootste 'orgaan'** van je lichaam?",
        options: ["Huid", "Hart", "Lever", "Maag"],
        answer: 0,
        wrongHints: [null, "Klopt — huid bedekt je hele lichaam.", "Klein vergeleken met huid.", "Klein vergeleken met huid.", "Klein vergeleken met huid."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const lichaamGezondheidPo = {
  id: "lichaam-gezondheid-po",
  title: "Het lichaam + gezondheid (groep 6-8)",
  emoji: "🦴",
  level: "groep6-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Natuur — mens en gezondheid",
  prerequisites: [
    { id: "dieren-seizoenen-natuur", title: "Natuur (basis)", niveau: "po-1F" },
  ],
  intro:
    "Het lichaam voor groep 6-8 — skelet, spieren, bloed, organen, Schijf van Vijf, gezonde gewoontes. Cito-onderdeel wereldoriëntatie. ~15 min.",
  triggerKeywords: [
    "lichaam", "gezondheid", "skelet", "botten", "spieren", "hart",
    "longen", "maag", "lever", "nieren", "hersenen",
    "schijf van vijf", "voeding", "bloed", "ademen",
  ],
  chapters,
  steps,
};

export default lichaamGezondheidPo;
