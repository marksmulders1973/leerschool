// Leerpad: Wat is vmbo, havo en vwo? — schoolniveaus uitgelegd voor groep 8.
// Aanleiding: tip van Sahasra op het wensenbord (2026-06-06): "Kan je bij leren
// ook uitleggen wat vmbo / havo / vwo is en wat je ermee kunt?"
// Doelgroep: groep 6-8 die nadenkt over de keuze na de Doorstroomtoets.
// Referentieniveau 1F/1S. 5 stappen, ~15 min.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  vmbo: "#80cbc4",
  havo: "#ffd54f",
  vwo: "#ff8a65",
  line: "#00c853",
};

const stepEmojis = ["🏫", "🔧", "🎓", "🚀", "🪜"];

const chapters = [
  { letter: "A", title: "De drie niveaus in het kort", emoji: "🏫", from: 0, to: 0 },
  { letter: "B", title: "Vmbo van dichtbij", emoji: "🔧", from: 1, to: 1 },
  { letter: "C", title: "Havo & vwo van dichtbij", emoji: "🎓", from: 2, to: 2 },
  { letter: "D", title: "Wat kun je ermee? (mbo/hbo/universiteit)", emoji: "🚀", from: 3, to: 3 },
  { letter: "E", title: "Stapelen & switchen — niets ligt vast", emoji: "🪜", from: 4, to: 4 },
];

function niveausSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.line}" font-size="12" font-family="Arial" font-weight="bold">De drie niveaus op de middelbare school</text>
<rect x="14" y="38" width="90" height="125" rx="8" fill="rgba(128,203,196,0.15)" stroke="${COLORS.vmbo}" stroke-width="1.5"/>
<text x="59" y="58" text-anchor="middle" fill="${COLORS.vmbo}" font-size="12" font-family="Arial" font-weight="bold">vmbo</text>
<text x="59" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">4 jaar</text>
<text x="59" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">praktisch +</text>
<text x="59" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">leren</text>
<text x="59" y="128" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">daarna meestal</text>
<text x="59" y="142" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial" font-weight="bold">mbo</text>
<rect x="115" y="38" width="90" height="125" rx="8" fill="rgba(255,213,79,0.15)" stroke="${COLORS.havo}" stroke-width="1.5"/>
<text x="160" y="58" text-anchor="middle" fill="${COLORS.havo}" font-size="12" font-family="Arial" font-weight="bold">havo</text>
<text x="160" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">5 jaar</text>
<text x="160" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">meer theorie</text>
<text x="160" y="128" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">daarna meestal</text>
<text x="160" y="142" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial" font-weight="bold">hbo</text>
<rect x="216" y="38" width="90" height="125" rx="8" fill="rgba(255,138,101,0.15)" stroke="${COLORS.vwo}" stroke-width="1.5"/>
<text x="261" y="58" text-anchor="middle" fill="${COLORS.vwo}" font-size="12" font-family="Arial" font-weight="bold">vwo</text>
<text x="261" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">6 jaar</text>
<text x="261" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">veel theorie</text>
<text x="261" y="128" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">daarna meestal</text>
<text x="261" y="142" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial" font-weight="bold">universiteit</text>
</svg>`;
}

function stapelSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.line}" font-size="12" font-family="Arial" font-weight="bold">Stapelen: je kunt altijd hoger klimmen</text>
<rect x="30" y="128" width="120" height="26" rx="5" fill="rgba(128,203,196,0.15)" stroke="${COLORS.vmbo}" stroke-width="1.5"/>
<text x="90" y="145" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vmbo-tl (mavo)</text>
<rect x="70" y="92" width="120" height="26" rx="5" fill="rgba(255,213,79,0.15)" stroke="${COLORS.havo}" stroke-width="1.5"/>
<text x="130" y="109" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">havo</text>
<rect x="110" y="56" width="120" height="26" rx="5" fill="rgba(255,138,101,0.15)" stroke="${COLORS.vwo}" stroke-width="1.5"/>
<text x="170" y="73" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vwo</text>
<path d="M150 134 L130 118" stroke="${COLORS.line}" stroke-width="2" marker-end="url(#a)"/>
<path d="M190 98 L170 82" stroke="${COLORS.line}" stroke-width="2" marker-end="url(#a)"/>
<defs><marker id="a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="${COLORS.line}"/></marker></defs>
<text x="248" y="48" fill="${COLORS.muted}" font-size="9" font-family="Arial">→ universiteit</text>
</svg>`;
}

const steps = [
  {
    title: "De drie niveaus — vmbo, havo en vwo in het kort",
    explanation:
      "Na groep 8 ga je naar de **middelbare school** (ook wel 'voortgezet onderwijs' genoemd). Daar zijn **drie niveaus**. Ze verschillen vooral in **hoe snel** en **hoe theoretisch** de stof gaat — niet in 'slim' of 'dom'. Voor elk niveau is er een mooie route.\n\n**1. vmbo** 🔧 *(spreek uit: vee-em-bee-oo)*\n• Staat voor **voorbereidend middelbaar beroepsonderwijs**.\n• Duurt **4 jaar**.\n• Mix van **leren én praktijk** — je doet ook met je handen.\n• Daarna ga je meestal naar het **mbo** *(beroepsopleiding)*.\n\n**2. havo** 🎓 *(spreek uit: haa-voo)*\n• Staat voor **hoger algemeen voortgezet onderwijs**.\n• Duurt **5 jaar**.\n• Meer **theorie** dan vmbo, uit boeken.\n• Daarna ga je meestal naar het **hbo** *(hogeschool)*.\n\n**3. vwo** 🚀 *(spreek uit: vee-wee-oo)*\n• Staat voor **voorbereidend wetenschappelijk onderwijs**.\n• Duurt **6 jaar**.\n• De **meeste theorie**, in het hoogste tempo.\n• Daarna kun je naar de **universiteit**.\n\n**Belangrijk om te onthouden**:\n• Geen niveau is 'beter' — ze passen bij **verschillende mensen**.\n• Houd je van **doen en maken**? Dan past vmbo vaak goed.\n• Leer je graag uit **boeken** en wil je veel uitzoeken? Dan past havo of vwo.\n• En: je kunt later nog **switchen** *(daarover gaat stap E)*.\n\n**Hoe word je ingedeeld?**\nJe krijgt in groep 8 een **schooladvies** van je juf of meester. De **Doorstroomtoets** *(vroeger Doorstroomtoets)* helpt daarbij: scoor je hoger dan je advies, dan kan het advies omhoog.",
    svg: niveausSvg(),
    checks: [
      {
        q: "Hoe lang duurt **vwo** ongeveer?",
        options: ["6 jaar", "4 jaar", "2 jaar", "8 jaar"],
        answer: 0,
        wrongHints: [null, "Dat is vmbo.", "Te kort.", "Te lang."],
      },
      {
        q: "Bij welk niveau hoort **veel praktijk + leren met je handen**?",
        options: ["vmbo", "vwo", "universiteit", "havo"],
        answer: 0,
        wrongHints: [null, "Juist veel theorie.", "Dat komt later.", "Meer theorie dan vmbo."],
      },
      {
        q: "Welk niveau is **'beter'**?",
        options: ["Geen — ze passen bij verschillende mensen", "vwo altijd", "havo altijd", "vmbo altijd"],
        answer: 0,
        wrongHints: [null, "Is een timmerman minder dan een dokter? Denk aan wat 'passen bij iemand' betekent.", "Waarom zou uitgerekend het middelste niveau 'het beste' zijn — beste voor wíé?", "Vmbo past bij veel mensen supergoed — maar geldt dat voor íédereen?"],
      },
      {
        q: "Wat helpt naast het schooladvies bij je indeling?",
        options: ["De Doorstroomtoets", "Je schoenmaat", "Je lievelingskleur", "Het weer"],
        answer: 0,
        wrongHints: [null, "Wat zegt je schoenmaat over hoe je leert? Zoek iets dat je kénnis meet.", "Een kleur zegt niets over rekenen of lezen — welke tóéts doe je in groep 8?", null],
      },
      {
        q: "Hoeveel jaar duurt **havo**?",
        options: ["5 jaar", "4 jaar", "6 jaar", "3 jaar"],
        answer: 0,
        wrongHints: [null, "Dat is vmbo.", "Dat is vwo.", "Te kort."],
      },
      {
        q: "Naar welke vervolgopleiding gaan vmbo-leerlingen **meestal**?",
        options: ["Het mbo", "De universiteit", "Het hbo", "Havo"],
        answer: 0,
        wrongHints: [null, "Dat is de route via vwo.", "Dat gaat via havo.", "Dat is zijdelings mogelijk via vmbo-tl, maar niet de meest gekozen route na het vmbo als geheel."],
      },
    ],
  },
  {
    title: "Vmbo van dichtbij — vier leerwegen",
    explanation:
      "Het **vmbo** is het grootst: ruim de helft van alle leerlingen in Nederland zit erop. Het is geen 'laag' niveau — het is **praktisch ingesteld** en leidt naar heel veel beroepen.\n\nHet vmbo heeft **vier leerwegen** *(routes)*, van veel praktijk naar veel theorie:\n\n**1. Basisberoepsgerichte leerweg (bb)** 🔧\n• De meeste **praktijk**, minder uit boeken.\n• Veel doen, maken en oefenen.\n\n**2. Kaderberoepsgerichte leerweg (kb)** 🛠️\n• Ook veel praktijk, iets meer theorie dan bb.\n\n**3. Gemengde leerweg (gl)** 📘\n• Mix van theorie en één praktijkvak.\n\n**4. Theoretische leerweg (tl, ook 'mavo' genoemd)** 📗\n• Vooral **theorie**, weinig praktijkvakken.\n• Lijkt al een beetje op havo.\n• Vanaf hier kun je makkelijk **doorstromen naar de havo**.\n\n**Wat doe je op het vmbo?**\n• Gewone vakken: Nederlands, Engels, wiskunde, biologie...\n• **Plus een richting** die je in klas 3 kiest, bijvoorbeeld: techniek, zorg & welzijn, economie & ondernemen, of groen *(natuur)*.\n\n**Wat komt erna?**\n• Met je vmbo-diploma ga je naar het **mbo** *(middelbaar beroepsonderwijs)* om een vak te leren — bijvoorbeeld monteur, verpleegkundige, kapper, kok, ICT'er of ondernemer.\n• Vanuit de **tl** kun je ook naar de **havo**.\n\n**Fijn om te weten**:\nHeel veel **belangrijke beroepen** beginnen op het vmbo: zonder monteurs, verzorgenden en bouwvakkers staat het land stil. 💪",
    checks: [
      {
        q: "Hoeveel **leerwegen** heeft het vmbo?",
        options: ["Vier", "Eén", "Twee", "Tien"],
        answer: 0,
        wrongHints: [null, "Het zijn er meer.", "Het zijn er meer.", "Het zijn er minder."],
      },
      {
        q: "Welke leerweg heeft **het meeste theorie** en lijkt op havo?",
        options: ["Theoretische leerweg (tl/mavo)", "Basisberoepsgericht (bb)", "Kaderberoepsgericht (kb)", "Gemengd (gl)"],
        answer: 0,
        wrongHints: [null, "Juist veel praktijk.", "Veel praktijk.", "Mix, maar niet de meeste theorie."],
      },
      {
        q: "Waar ga je meestal heen **na het vmbo**?",
        options: ["Naar het mbo", "Naar de universiteit", "Direct werken zonder opleiding", "Naar groep 8"],
        answer: 0,
        wrongHints: [null, "Dat gaat via vwo.", "Meestal eerst nog leren.", "Dat heb je net gehad."],
      },
      {
        q: "Klopt het dat vmbo een **'laag' niveau** is?",
        options: ["Nee — het is praktisch en leidt naar veel beroepen", "Ja, het is voor wie niets kan", "Ja, je leert er niets", "Ja, er komt niets na"],
        answer: 0,
        wrongHints: [null, "Niet waar.", "Niet waar.", "Niet waar — mbo komt erna."],
      },
      {
        q: "Welke vmbo-leerweg heeft **het meest praktijk** van de vier?",
        options: ["Basisberoepsgerichte leerweg (bb)", "Theoretische leerweg (tl)", "Gemengde leerweg (gl)", "Kaderberoepsgerichte leerweg (kb)"],
        answer: 0,
        wrongHints: [null, "Juist de meeste theorie.", "Mix — maar niet de meeste praktijk van alle vier.", "Ook veel praktijk, maar net iets minder dan bb."],
      },
      {
        q: "Welke vmbo-afdeling noem je ook wel **mavo**?",
        options: ["Theoretische leerweg (tl)", "Basisberoepsgerichte leerweg (bb)", "Gemengde leerweg (gl)", "Kaderberoepsgerichte leerweg (kb)"],
        answer: 0,
        wrongHints: [null, "De bijnaam 'mavo' hoort bij de leerweg met de meeste theorie.", "Niet de gemengde variant.", "Niet de kader-variant."],
      },
    ],
  },
  {
    title: "Havo & vwo van dichtbij — meer theorie, langere route",
    explanation:
      "**Havo** en **vwo** worden vaak samen genoemd, omdat ze allebei vooral **theoretisch** zijn: je leert veel uit boeken en je krijgt meer vakken in een hoger tempo. Het verschil zit in **tempo en diepte**.\n\n**Havo** 🎓 *(5 jaar)*\n• Hoger algemeen voortgezet onderwijs.\n• Veel theorie, maar wat **praktischer** dan vwo.\n• Goede voorbereiding op het **hbo** *(hogeschool)* — denk aan leraar, verpleegkundige-hbo, ICT, marketing, ingenieur.\n\n**Vwo** 🚀 *(6 jaar)*\n• Voorbereidend wetenschappelijk onderwijs — het hoogste tempo.\n• Bereidt voor op de **universiteit**, waar je dingen heel diep uitzoekt en onderzoekt.\n• Het vwo heeft **twee smaken**:\n  - **Atheneum** — gewoon vwo.\n  - **Gymnasium** — vwo **plus** de klassieke talen **Latijn** en **Grieks** *(de talen van de oude Romeinen en Grieken)*.\n\n**Bovenbouw: profielen kiezen**\nOp havo en vwo kies je rond klas 3 een **profiel** — een vast pakket vakken dat bij je past:\n• **N&T** — Natuur & Techniek *(veel wis-, natuur- en scheikunde)*.\n• **N&G** — Natuur & Gezondheid *(biologie, scheikunde)*.\n• **E&M** — Economie & Maatschappij *(economie, geschiedenis)*.\n• **C&M** — Cultuur & Maatschappij *(talen, kunst, geschiedenis)*.\n\n**Kort verschil havo vs vwo**:\n• Havo = 5 jaar, iets praktischer, → hbo.\n• Vwo = 6 jaar, het diepst en snelst, → universiteit.\n• Beide geven toegang tot een **mooie vervolgopleiding** — kies wat bij jouw tempo past.",
    checks: [
      {
        q: "Wat is het verschil tussen **atheneum en gymnasium**?",
        options: ["Gymnasium heeft er Latijn en Grieks bij", "Gymnasium is gym/sport", "Atheneum duurt 3 jaar", "Er is geen verschil"],
        answer: 0,
        wrongHints: [null, "Niet de sportles.", "Vwo duurt 6 jaar.", "Er is wél een verschil."],
      },
      {
        q: "Naar welke vervolgopleiding leidt de **havo** meestal?",
        options: ["Het hbo (hogeschool)", "De universiteit", "Het vmbo", "De basisschool"],
        answer: 0,
        wrongHints: [null, "Dat is meer de vwo-route.", "Dat is een lager niveau.", "Die heb je gehad."],
      },
      {
        q: "Wat is een **profiel** op havo/vwo?",
        options: ["Een vast pakket vakken dat bij je past", "Een foto op je pasje", "Een soort gym", "Een schoolreisje"],
        answer: 0,
        wrongHints: [null, "Niet die soort profiel.", "Niet onderwijs.", "Niet onderwijs."],
      },
      {
        q: "Hoeveel jaar duurt **vwo**?",
        options: ["6 jaar", "5 jaar", "4 jaar", "3 jaar"],
        answer: 0,
        wrongHints: [null, "Dat is havo.", "Dat is vmbo.", "Te kort."],
      },
      {
        q: "Welk profiel kies je als je later **arts of bioloog** wil worden?",
        options: ["Natuur & Gezondheid (N&G)", "Cultuur & Maatschappij (C&M)", "Economie & Maatschappij (E&M)", "Natuur & Techniek (N&T)"],
        answer: 0,
        wrongHints: [null, "C&M gaat over talen en kunst — minder wis- en scheikunde.", "E&M gaat over economie en maatschappij — niet over biologie of geneeskunde.", "N&T is meer gericht op techniek en wiskunde; N&G heeft als extra de nadruk op biologie en gezondheid."],
      },
      {
        q: "Hoe noem je de twee smaken **vwo**?",
        options: ["Atheneum en gymnasium", "Havo en mavo", "Bb en tl", "N&T en C&M"],
        answer: 0,
        wrongHints: [null, "Havo is een apart niveau; mavo is de bijnaam voor vmbo-tl.", "Dat zijn vmbo-leerwegen.", "Dat zijn profielen, geen smaken van vwo."],
      },
    ],
  },
  {
    title: "Wat kun je ermee? — de route na de middelbare school",
    explanation:
      "Het leuke: je middelbare school is **niet het eindstation**. Elk niveau opent een deur naar een vervolgopleiding, en daarna naar een beroep. Zo ziet de route eruit:\n\n**Na het vmbo → mbo** 🔧\n• **Mbo** = middelbaar beroepsonderwijs.\n• Je leert er een echt **vak**, met veel **stage** *(werken om te leren)*.\n• Het mbo heeft **niveaus 1 t/m 4** — hoe hoger, hoe meer je kunt.\n• Beroepen: monteur, kapper, kok, verzorgende, ICT-beheerder, ondernemer, en honderden meer.\n\n**Na de havo → hbo** 🎓\n• **Hbo** = hoger beroepsonderwijs *(hogeschool)*.\n• Praktisch én theoretisch; vaak een **stage** of project.\n• Beroepen: leraar, verpleegkundige, ingenieur, marketeer, ontwerper, accountant.\n\n**Na het vwo → universiteit** 🚀\n• De **universiteit** *(wo = wetenschappelijk onderwijs)*.\n• Je leert dingen heel **diep** te onderzoeken en uit te zoeken.\n• Beroepen: arts, advocaat, onderzoeker, psycholoog, rechter, wetenschapper.\n\n**Belangrijk inzicht**:\n• Je kunt **op elk niveau** een goed beroep en een fijn leven krijgen.\n• Een vmbo'er kan **rijker en gelukkiger** worden dan een vwo'er — het gaat erom dat je iets doet wat **bij jou past**.\n• En: je kunt ook **doorklimmen** — mbo → hbo → universiteit kan allemaal *(daarover gaat de laatste stap)*.\n\n**Tip**:\nVraag eens aan volwassenen die je kent: *'Welk niveau heb jij gedaan, en welk werk doe je nu?'* Je zult merken dat er **heel veel verschillende routes** naar een mooi beroep leiden.",
    checks: [
      {
        q: "Waar staat **mbo** voor?",
        options: ["Middelbaar beroepsonderwijs", "Meer boeken oefenen", "Mijn beste opleiding", "Middelbare basis-opleiding"],
        answer: 0,
        wrongHints: [null, "De b in mbo gaat over een vak leren voor je werk — hoe heet dat soort onderwijs?", "Het is geen mening over jezelf — het is een sóórt onderwijs.", "Bijna — maar de b staat niet voor 'basis'. Wat leer je op het mbo voor je latere werk?"],
      },
      {
        q: "Na de **havo** ga je meestal naar...",
        options: ["Het hbo (hogeschool)", "Het mbo", "De basisschool", "Direct met pensioen"],
        answer: 0,
        wrongHints: [null, "Dat is meer de vmbo-route.", "Die heb je gehad.", "Nog veel te vroeg!"],
      },
      {
        q: "Op de **universiteit** leer je vooral...",
        options: ["Dingen heel diep onderzoeken en uitzoeken", "Alleen met je handen werken", "Niets nieuws", "Hetzelfde als groep 8"],
        answer: 0,
        wrongHints: [null, "Dat past meer bij mbo.", "Juist veel nieuws.", "Veel moeilijker dan groep 8."],
      },
      {
        q: "Kun je met **elk niveau** een fijn beroep krijgen?",
        options: ["Ja — als het bij jou past", "Nee, alleen met vwo", "Nee, alleen met havo", "Nee, alleen met de universiteit"],
        answer: 0,
        wrongHints: [null, "Ken je een fijne kapper, kok of monteur? Welke opleiding hadden die nodig?", "Ook zonder havo zijn er duizenden mooie beroepen — waar hangt 'fijn' écht van af?", "De meeste mensen in Nederland hebben géén universiteit gedaan — zijn al hun banen dan niet fijn?"],
      },
    ],
  },
  {
    title: "Stapelen & switchen — niets ligt vast",
    explanation:
      "Misschien wel het belangrijkste om te onthouden: het niveau dat je in de brugklas krijgt, ligt **niet voor altijd vast**. In Nederland kun je **stapelen** en **switchen**. Je kunt dus altijd hoger klimmen als je dat wilt en aankunt.\n\n**1. Opstromen tijdens de middelbare school**\n• Haal je goede cijfers op het vmbo-tl? Dan kun je vaak door naar de **havo**.\n• Gaat havo heel makkelijk? Dan kun je soms naar het **vwo**.\n• Veel scholen hebben in klas 1-2 een **'brugklas'** waarin je niveau nog kan veranderen.\n\n**2. Stapelen na je diploma**\nJe kunt diploma's **op elkaar stapelen**:\n• **vmbo-tl → havo → vwo** *(steeds een stapje hoger)*.\n• Of via het beroepsonderwijs: **mbo → hbo → universiteit**.\n• Zo kun je dus, beginnend op het vmbo, **uiteindelijk zelfs op de universiteit** komen. Het duurt wat langer, maar het kan!\n\n**3. Afstromen mag ook — en is niet erg**\n• Past het tempo van vwo of havo toch niet zo lekker? Dan kun je naar een niveau waar je je **prettiger** voelt en betere cijfers haalt.\n• Dat is **geen mislukking** — het is slim kiezen wat bij je past. Met een fijn gevoel leren werkt veel beter.\n\n**4. Op tijd kiezen hoeft niet perfect**\n• Je hoeft in groep 8 nog **niet te weten** wat je later wilt worden.\n• Je leert jezelf steeds beter kennen. Wat je leuk vindt en goed kunt, ontdek je **onderweg**.\n\n**Onthoud**:\n> Welk niveau je ook begint — er is altijd een weg omhoog en een route die bij jou past. Je keuze na de Doorstroomtoets is een **start**, geen eindpunt. 🌱",
    svg: stapelSvg(),
    checks: [
      {
        q: "Kun je van **vmbo-tl** doorstromen naar de havo?",
        options: ["Ja, vaak met goede cijfers", "Nee, dat mag nooit", "Alleen als je verhuist", "Alleen op je 18e"],
        answer: 0,
        wrongHints: [null, "Het kan juist wel.", "Heeft er niks mee te maken.", "Heeft er niks mee te maken."],
      },
      {
        q: "Wat betekent **stapelen** van opleidingen?",
        options: ["Diploma's na elkaar halen om hoger te komen", "Boeken op elkaar leggen", "Stoppen met school", "Twee niveaus tegelijk doen"],
        answer: 0,
        wrongHints: [null, "Niet letterlijk boeken.", "Het tegenovergestelde.", "Niet tegelijk — na elkaar."],
      },
      {
        q: "Je begint op het **vmbo**. Kun je later op de universiteit komen?",
        options: ["Ja, via stapelen (mbo → hbo → universiteit)", "Nee, dat is onmogelijk", "Alleen met vwo vanaf het begin", "Alleen in het buitenland"],
        answer: 0,
        wrongHints: [null, "Het kan juist wel.", "Niet de enige weg.", "Gewoon in Nederland."],
      },
      {
        q: "Naar een lager niveau gaan dat beter past, is...",
        options: ["Slim kiezen wat bij je past, geen mislukking", "Altijd een mislukking", "Verboden", "Alleen voor luie kinderen"],
        answer: 0,
        wrongHints: [null, "Is een schoen die knelt houden slimmer dan een maat wisselen die wél past?", "Wisselen mag gewoon — scholen helpen er zelfs bij. Wat zegt dat over deze keuze?", "Iemand die kiest voor een plek waar hij beter leert — klinkt dat lui of juist slim?"],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const onderwijsNiveausVmboHavoVwo = {
  id: "onderwijs-niveaus-vmbo-havo-vwo",
  title: "Wat is vmbo, havo en vwo? (en wat kun je ermee)",
  emoji: "🏫",
  level: "groep8",
  subject: "studievaardigheden",
  referentieNiveau: "1F/1S",
  sloThema: "Studievaardigheden — schoolniveaus en vervolgopleidingen",
  prerequisites: [],
  intro:
    "Wat zijn vmbo, havo en vwo precies — en wat kun je er later mee? Uitleg voor groep 6-8 die nadenkt over de keuze na de Doorstroomtoets: de drie niveaus, de vier vmbo-leerwegen, profielen op havo/vwo, de route naar mbo/hbo/universiteit, en hoe je kunt stapelen en switchen. ~15 min.",
  triggerKeywords: [
    "vmbo", "havo", "vwo", "mavo", "gymnasium", "atheneum",
    "schoolniveaus", "middelbare school niveau", "wat is vmbo", "wat is havo", "wat is vwo",
    "mbo", "hbo", "universiteit", "schooladvies", "stapelen", "doorstromen",
  ],
  chapters,
  steps,
};

export default onderwijsNiveausVmboHavoVwo;
