// Leerpad: Mensenrechten + democratie — klas 2-3 maatschappijleer.
// Onderdeel maatschappijleer. Referentieniveau 2F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  blauw: "#1976d2",
  oranje: "#ff7043",
  goud: "#ffd54f",
  groen: "#66bb6a",
  paars: "#9575cd",
  highlight: "#42a5f5",
};

const stepEmojis = ["⚖️", "📜", "🕊️", "⚠️", "🌍", "🏆"];

const chapters = [
  { letter: "A", title: "Wat zijn mensenrechten?", emoji: "⚖️", from: 0, to: 0 },
  { letter: "B", title: "Universele Verklaring 1948", emoji: "📜", from: 1, to: 1 },
  { letter: "C", title: "Soorten rechten", emoji: "🕊️", from: 2, to: 2 },
  { letter: "D", title: "Schendingen + actualiteit", emoji: "⚠️", from: 3, to: 3 },
  { letter: "E", title: "VN + organisaties", emoji: "🌍", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function rechtenSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">3 generaties mensenrechten</text>

<rect x="15" y="45" width="95" height="115" rx="8" fill="rgba(25,118,210,0.18)" stroke="${COLORS.blauw}" stroke-width="1.5"/>
<text x="62" y="65" text-anchor="middle" fill="${COLORS.blauw}" font-size="11" font-family="Arial" font-weight="bold">1e GEN.</text>
<text x="62" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial" font-weight="bold">VRIJHEID</text>
<text x="62" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vrijheid van</text>
<text x="62" y="113" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">meningsuiting</text>
<text x="62" y="126" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">religie · stemmen</text>
<text x="62" y="149" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">18-19e eeuw</text>

<rect x="115" y="45" width="95" height="115" rx="8" fill="rgba(255,213,79,0.18)" stroke="${COLORS.goud}" stroke-width="1.5"/>
<text x="162" y="65" text-anchor="middle" fill="${COLORS.goud}" font-size="11" font-family="Arial" font-weight="bold">2e GEN.</text>
<text x="162" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial" font-weight="bold">SOCIAAL</text>
<text x="162" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">recht op werk</text>
<text x="162" y="113" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">onderwijs · zorg</text>
<text x="162" y="126" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">huisvesting</text>
<text x="162" y="149" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">na WO2 (1948)</text>

<rect x="215" y="45" width="95" height="115" rx="8" fill="rgba(102,187,106,0.18)" stroke="${COLORS.groen}" stroke-width="1.5"/>
<text x="262" y="65" text-anchor="middle" fill="${COLORS.groen}" font-size="11" font-family="Arial" font-weight="bold">3e GEN.</text>
<text x="262" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial" font-weight="bold">COLLECTIEF</text>
<text x="262" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vrede · milieu</text>
<text x="262" y="113" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">ontwikkeling</text>
<text x="262" y="126" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">cultureel erfgoed</text>
<text x="262" y="149" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">eind 20e eeuw</text>

<text x="160" y="185" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Mensenrechten breidden zich uit met de tijd</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat zijn mensenrechten?
  {
    title: "Wat zijn mensenrechten?",
    explanation:
      "**Mensenrechten** zijn rechten die **iedereen** heeft, gewoon **omdat hij of zij een mens is**.\n\n**Kernidee** *(uit het hoofd!)*:\n• **Universeel** — gelden voor **alle mensen**, waar dan ook.\n• **Onvervreemdbaar** — niemand kan ze van je afnemen.\n• **Gelijk** — iedereen krijgt evenveel rechten.\n• **Onschendbaar** — overheid mag ze niet zomaar inperken.\n\n**Voorbeelden uit alledaagse leven**:\n• Recht om naar **school te gaan** *(onderwijs)*.\n• Recht om **vrij te zijn van geweld**.\n• Recht om **je eigen geloof te kiezen** *(godsdienstvrijheid)*.\n• Recht om **te zeggen wat je denkt** *(meningsuiting)*.\n• Recht op **een eerlijk proces** als je beschuldigd wordt van iets.\n• Recht om **te trouwen met wie je wilt**.\n• Recht om **te stemmen** als je 18+ bent.\n\n**Verschil tussen rechten en plichten**:\n• **Recht** = wat je mag *(naar school gaan, mening uiten)*.\n• **Plicht** = wat je moet *(belasting betalen, wetten volgen)*.\n• Beide tegelijk — je hebt rechten **én** plichten.\n\n**Hoe ontstonden mensenrechten?**\n• **Verlichting (18e eeuw)**: filosofen zoals Locke, Rousseau pleitten voor 'natural rights'.\n• **Amerikaanse Onafhankelijkheidsverklaring** (1776): 'All men are created equal'.\n• **Franse Revolutie** (1789): 'Verklaring van de Rechten van Mens en Burger'.\n• **WO2** (1939-1945): Holocaust + andere wreedheden → wereld zegt: **'Nooit meer'**.\n• **1948**: **Universele Verklaring van de Rechten van de Mens (UVRM)** door VN.\n\n**Waarom is dit belangrijk?**\nMensenrechten **beschermen kwetsbare mensen** tegen:\n• Machtsmisbruik door overheid.\n• Discriminatie.\n• Onderdrukking.\n• Geweld.\n\n**Cito-vraag**:\n*'Wat is een mensenrecht?'* → recht dat iedereen heeft, simpelweg omdat hij/zij mens is.\n\n**Belangrijke termen**:\n• **Universeel** = voor alle mensen geldt.\n• **Onvervreemdbaar** = kan niet worden afgenomen.\n• **Discriminatie** = mensen ongelijk behandelen op basis van bv. ras, geslacht, religie.\n• **Vrijheid** = recht om eigen keuzes te maken.\n• **Gelijkwaardig** = even waardevol als mens.",
    checks: [
      {
        q: "Wat is een **mensenrecht**?",
        options: ["Recht dat iedereen heeft als mens", "Recht van Nederlanders alleen", "Een wet uit 2000", "Iets dat alleen volwassenen hebben"],
        answer: 0,
        wrongHints: [null, "Klopt — universeel.", "Te beperkt — geldt voor iedereen.", "Veel ouder.", "Kinderen hebben ook rechten."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een mensenrecht?", tekst: "Een **mensenrecht** is een recht dat iedereen heeft, simpelweg omdat hij of zij een MENS is. Geen onderscheid op land, leeftijd, geslacht, religie of huidskleur." },
            { titel: "Universeel = voor iedereen", tekst: "Mensenrechten zijn **universeel**: ze gelden voor ELKE persoon op aarde. Een baby in NL heeft dezelfde basisrechten als een grootmoeder in India of een man in Brazilië." },
            { titel: "Voorbeelden mensenrechten", tekst: "Recht op LEVEN, recht op VRIJHEID, recht op ONDERWIJS, recht op MENING uiten, recht op een EERLIJK proces, geen MARTELING, gelijkheid voor de wet. 30 in totaal in UVRM (1948)." },
          ],
          woorden: [
            { woord: "mensenrecht", uitleg: "Recht dat iedereen heeft als mens." },
            { woord: "universeel", uitleg: "Voor IEDEREEN, overal." },
          ],
          theorie: "Cito-feit: mensenrechten staan in het **UVRM** (Universele Verklaring van de Rechten van de Mens, VN, 1948). Een reactie op de gruwelen van WO2 + Holocaust. Voor iedereen, niet alleen Westerse landen.",
          voorbeelden: [
            { type: "stap", tekst: "Recht op onderwijs: ELK kind mag naar school. Geldt in NL én in Afghanistan, ook al wordt het daar niet altijd geëerbiedigd." },
            { type: "stap", tekst: "Recht op vrije meningsuiting: je mag zeggen wat je denkt — binnen grenzen van bv. discriminatie-verboden." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Mensen-rechten = voor ALLE mensen. Niet 'NL-rechten' of 'Europese-rechten'. Universeel." }],
          niveaus: {
            basis: "Mensenrecht = recht dat iedereen heeft als mens (universeel).",
            simpeler: "Geldt voor ELK mens, overal ter wereld.",
            nogSimpeler: "Voor iedereen.",
          },
        },
      },
      {
        q: "**Universeel** betekent ... ?",
        options: ["Voor alle mensen geldt", "Alleen voor Europeanen", "Alleen voor mannen", "Onbekend"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenovergesteld.", "Tegenovergesteld.", "Wel bekend."],
      },
      {
        q: "Wat is het verschil tussen **recht** en **plicht**?",
        options: ["Recht = wat je mag, plicht = wat je moet", "Beide hetzelfde", "Recht = voor kinderen, plicht = volwassenen", "Geen verschil"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel verschil.", "Niet leeftijdsgebonden.", "Wel verschil."],
      },
      {
        q: "Welke historische gebeurtenis was **direct aanleiding** voor moderne mensenrechten?",
        options: ["WO2 (1939-1945) + Holocaust", "Romeinse Rijk", "Industriële Revolutie", "WO1"],
        answer: 0,
        wrongHints: [null, "Klopt — UVRM 1948.", "Veel eerder.", "Geen direct verband.", "Te vroeg."],
      },
    ],
  },

  // STAP 2: UVRM 1948
  {
    title: "Universele Verklaring (UVRM) 1948",
    explanation:
      "Op **10 december 1948** nam de **Verenigde Naties (VN)** de **Universele Verklaring van de Rechten van de Mens (UVRM)** aan.\n\n**Belangrijke details**:\n• Geschreven na **WO2** — wereld wilde 'nooit meer Holocaust'.\n• **Eleanor Roosevelt** *(weduwe van VS-president Roosevelt)* leidde de commissie.\n• **30 artikelen** met mensenrechten.\n• Aangenomen door **48 landen** *(geen tegenstem; wel 8 onthoudingen — o.a. Sovjet-Unie, Saoedi-Arabië)*.\n• **10 december** = nu **Internationale Dag van de Mensenrechten**.\n\n**Belangrijkste artikelen** *(uit het hoofd kennen)*:\n\n**Artikel 1**: *'Alle mensen worden vrij en gelijk in waardigheid en rechten geboren.'*\n→ De basis. Iedereen gelijk.\n\n**Artikel 3**: Recht op **leven, vrijheid en veiligheid**.\n\n**Artikel 5**: Geen marteling. Geen wrede behandeling.\n\n**Artikel 13**: Recht om vrij te **bewegen** (binnen je land + verlaten).\n\n**Artikel 14**: Recht op **asiel** *(bij vervolging)*.\n\n**Artikel 18**: Vrijheid van **gedachte, geweten, godsdienst**.\n\n**Artikel 19**: Vrijheid van **mening en uiting**.\n\n**Artikel 23**: Recht op **werk + eerlijk loon**.\n\n**Artikel 25**: Recht op **gezondheidszorg + voldoende voedsel + huisvesting**.\n\n**Artikel 26**: Recht op **onderwijs** *(basisonderwijs gratis + verplicht)*.\n\n**Belangrijke kanttekening**:\n• UVRM is een **verklaring**, geen wet.\n• Maar het inspireerde **verdragen** die wél bindend zijn:\n  - **EVRM** (1950) — Europees Verdrag voor de Rechten van de Mens.\n  - **BUPO** (1966) — Burgerlijke + Politieke Rechten.\n  - **ECOSOC** (1966) — Economische, Sociale + Culturele Rechten.\n  - **Kinderrechtenverdrag** (1989) — speciale rechten voor kinderen.\n\n**Nederland en mensenrechten**:\n• NL heeft UVRM ondertekend.\n• NL grondwet (artikel 1): *'Allen die zich in Nederland bevinden, worden in gelijke gevallen gelijk behandeld. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht of op welke grond dan ook, is niet toegestaan.'*\n• Mensenrechten kun je laten beschermen via **rechter** *(in NL of bij EVRM-hof in Straatsburg)*.\n\n**Cito-feitje**:\nDe UVRM is vertaald in **meer dan 500 talen** — het meest vertaalde document ter wereld.\n\n**Cito-vraag**:\n*'In welk jaar werd UVRM aangenomen?'* → 1948.\n*'Welke organisatie nam UVRM aan?'* → Verenigde Naties (VN).\n*'Wat is het verschil tussen UVRM en EVRM?'* → UVRM is een verklaring (niet bindend), EVRM is een verdrag (wel bindend, kunt naar rechter).",
    svg: rechtenSvg(),
    checks: [
      {
        q: "In welk jaar werd **UVRM** aangenomen?",
        options: ["1948", "1789", "1900", "2000"],
        answer: 0,
        wrongHints: [null, "Klopt — 10 december.", "Franse Revolutie (Verklaring Mens en Burger).", "Te vroeg.", "Te laat."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is UVRM?", tekst: "**UVRM** = **Universele Verklaring van de Rechten van de Mens**. Een document met 30 artikelen die mensenrechten wereldwijd vastleggen." },
            { titel: "Datum: 10 december 1948", tekst: "Aangenomen door de **Verenigde Naties (VN)** op **10 december 1948** in Parijs. Reactie op de gruwelen van **WO2** + Holocaust — 'nooit meer'." },
            { titel: "Belangrijke datum onthouden", tekst: "10 december is sindsdien **Internationale Dag van de Rechten van de Mens**. Veel landen ondertekenden — maar niet allemaal houden zich eraan." },
          ],
          woorden: [
            { woord: "UVRM", uitleg: "Universele Verklaring van de Rechten van de Mens (1948)." },
            { woord: "VN", uitleg: "Verenigde Naties — internationale samenwerking sinds 1945." },
          ],
          theorie: "Cito-tip jaartallen: UVRM = 1948 (3 jaar na WO2). VN-oprichting = 1945. Kinderrechten-verdrag = 1989. EVRM = 1950 (Europees, voortbouwend op UVRM).",
          voorbeelden: [
            { type: "stap", tekst: "Eleanor Roosevelt (weduwe Amerikaans president) leidde de UVRM-commissie." },
            { type: "stap", tekst: "30 artikelen totaal. Artikel 1: 'Alle mensen worden vrij en gelijk in waardigheid geboren'." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "UVRM 1948 = direct na WO2. Belangrijk: Cito-feit." }],
          niveaus: {
            basis: "UVRM = 1948 (VN, na WO2).",
            simpeler: "10 december 1948 ondertekend door VN.",
            nogSimpeler: "1948.",
          },
        },
      },
      {
        q: "Welke organisatie nam UVRM aan?",
        options: ["Verenigde Naties (VN)", "EU", "NAVO", "VS"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Begon later.", "Militair pact.", "Wel meegedaan, niet alleen."],
      },
      {
        q: "Wat zegt **Artikel 1** UVRM?",
        options: ["Iedereen gelijk + vrij geboren", "Niemand mag stelen", "Iedereen moet werken", "Kinderen niet werken"],
        answer: 0,
        wrongHints: [null, "Klopt — basis.", "Geen artikel 1.", "Geen artikel 1.", "Artikel ergens anders."],
        uitlegPad: {
          stappen: [
            { titel: "De beroemdste regel ter wereld", tekst: "Artikel 1 van UVRM is misschien wel de beroemdste regel uit het hele document. Het zegt: 'Alle mensen worden vrij en gelijk in waardigheid en rechten geboren.'" },
            { titel: "Wat betekent dit?", tekst: "**Vrij geboren** = niemand komt als slaaf ter wereld. **Gelijk in waardigheid** = elk mens telt evenveel mee, ongeacht ras, geslacht, religie, rijkdom. **Gelijk in rechten** = iedereen heeft dezelfde basis-rechten." },
            { titel: "Basis voor alle andere artikelen", tekst: "Alle 29 andere artikelen bouwen voort op deze gelijkheids-gedachte. Recht op onderwijs, vrijheid, leven — komt allemaal uit dit fundament." },
          ],
          woorden: [
            { woord: "Artikel 1 UVRM", uitleg: "Iedereen vrij + gelijk geboren." },
            { woord: "waardigheid", uitleg: "Iedereen verdient respect als mens." },
          ],
          theorie: "Cito-feit: Artikel 1 = symbool van de mensenrechten-beweging. Geprint op vlaggen, gebouwen, schoolboeken. Inspireerde grondwetten van vele landen, incl. NL.",
          voorbeelden: [
            { type: "stap", tekst: "Slaverij is verboden (komt uit Art 1 + later artikelen)." },
            { type: "stap", tekst: "Discriminatie is verboden (komt uit gelijkheid-principe Art 1)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Art 1 = 'vrij + gelijk geboren'. Fundamenteel principe — onthoud de tekst." }],
          niveaus: {
            basis: "Artikel 1 UVRM: alle mensen vrij + gelijk geboren in waardigheid en rechten.",
            simpeler: "Iedereen evenveel waard, niemand slaaf van geboorte.",
            nogSimpeler: "Vrij + gelijk.",
          },
        },
      },
      {
        q: "Wat is **EVRM**?",
        options: ["Europees Verdrag voor Rechten van de Mens (1950)", "VS-verklaring", "Nederlandse wet", "VN-document 2000"],
        answer: 0,
        wrongHints: [null, "Klopt — wél bindend, anders dan UVRM.", "Niet Europees.", "Niet EVRM.", "Niet 2000."],
      },
    ],
  },

  // STAP 3: Soorten rechten
  {
    title: "Soorten mensenrechten — 3 generaties",
    explanation:
      "Mensenrechten zijn in de loop van de tijd uitgebreid. Historici verdelen ze in **3 generaties**.\n\n**1e Generatie — Burgerlijke + Politieke Rechten** *(klassiek)* 🇪🇺\n*Ontwikkeld 18e-19e eeuw — gericht op **vrijheid van overheid**.*\n\n• **Vrijheid van meningsuiting** *(zeggen wat je denkt)*.\n• **Godsdienstvrijheid** *(geloof kiezen)*.\n• **Bewegingsvrijheid** *(reizen, verhuizen)*.\n• **Privacy** *(niemand spioneert je)*.\n• **Eerlijk proces** *(als beschuldigd)*.\n• **Stemmen** *(politiek meedoen)*.\n• **Eigendom** *(je bezittingen veilig)*.\n\nKern: overheid **moet niet** te veel ingrijpen.\n\n**2e Generatie — Sociaal-Economische Rechten** 💼\n*Na WO2 — gericht op **bestaanszekerheid**.*\n\n• **Recht op werk** + eerlijk loon.\n• **Onderwijs** *(basisonderwijs gratis + verplicht)*.\n• **Gezondheidszorg**.\n• **Voldoende voedsel**.\n• **Huisvesting**.\n• **Sociale zekerheid** *(WW, AOW)*.\n• **Vakbond** lid zijn.\n• **Rust + vrije tijd**.\n\nKern: overheid **moet** ondersteuning bieden.\n\n**3e Generatie — Collectieve / Solidariteitsrechten** 🌍\n*Eind 20e eeuw — gericht op **internationale + groep-rechten**.*\n\n• **Vrede** *(geen oorlog)*.\n• **Schoon milieu**.\n• **Duurzame ontwikkeling**.\n• **Cultureel erfgoed**.\n• **Communicatie** *(bv. internet)*.\n• **Zelfbeschikking volken** *(eigen overheid kiezen)*.\n\nKern: overheid + internationale gemeenschap **samen** beschermen.\n\n**Kinderrechten** *(apart verdrag 1989)* 👶\nKinderen *(< 18 jaar)* hebben **extra rechten** wegens kwetsbaarheid:\n• **Geen kinderarbeid** *(in NL: vanaf 13/14 jaar lichte taken, niet schadelijk)*.\n• **Bescherming tegen geweld + misbruik**.\n• **Onderwijs** *(verplicht 5-16 jaar in NL)*.\n• **Spel + vrije tijd**.\n• **Gehoord worden** *(eigen mening)*.\n• **Verzorgers** *(bv. ouders, of pleeggezin)*.\n• **Bescherming voor vluchtelingen-kinderen**.\n\n**Niet-discriminatie** is dwars door alle generaties:\nGeen mens mag worden benadeeld op basis van:\n• Ras / etnisch.\n• Geslacht / geslachtsidentiteit.\n• Seksuele oriëntatie.\n• Religie / overtuiging.\n• Beperking.\n• Leeftijd.\n• Politieke kleur.\n\n**Cito-vraag**:\n*'Vrijheid van meningsuiting = welke generatie?'* → 1e generatie (klassiek).\n*'Recht op onderwijs = welke generatie?'* → 2e generatie (sociaal).\n*'Recht op schoon milieu = welke generatie?'* → 3e generatie (collectief).",
    checks: [
      {
        q: "**Vrijheid van meningsuiting** — welke generatie?",
        options: ["1e (burgerlijk + politiek)", "2e (sociaal)", "3e (collectief)", "Geen"],
        answer: 0,
        wrongHints: [null, "Klopt — klassiek vrijheidsrecht.", "Niet sociaal.", "Niet collectief.", "Wel een mensenrecht."],
      },
      {
        q: "**Recht op onderwijs** — welke generatie?",
        options: ["2e (sociaal-economisch)", "1e", "3e", "Geen"],
        answer: 0,
        wrongHints: [null, "Klopt — overheid moet zorgen.", "Klassiek = vrijheid, niet voorzieningen.", "Collectief is anders.", "Wel een recht."],
      },
      {
        q: "**Recht op schoon milieu** — welke generatie?",
        options: ["3e (collectief)", "1e", "2e", "Bestaat niet"],
        answer: 0,
        wrongHints: [null, "Klopt — recent + internationaal.", "Niet klassiek.", "Niet alleen sociaal.", "Wel — recent."],
      },
      {
        q: "Hoeveel jaar moet je in NL **verplicht naar school**?",
        options: ["5-16 jaar", "0-18 jaar", "3-12 jaar", "Geen verplichting"],
        answer: 0,
        wrongHints: [null, "Klopt — leerplicht.", "Niet vanaf 0.", "Niet die periode.", "Wel — leerplicht."],
      },
    ],
  },

  // STAP 4: Schendingen + actualiteit
  {
    title: "Schendingen van mensenrechten — actualiteit",
    explanation:
      "Helaas worden mensenrechten **veel geschonden** — overal ter wereld, ook in NL.\n\n**Voorbeelden wereldwijd**:\n\n**1. Politieke gevangenen**\n• Mensen vastgezet vanwege hun mening of activisme.\n• Voorbeelden: dissidenten in Iran, China, Rusland.\n• Amnesty International strijdt hiervoor.\n\n**2. Oorlogsmisdaden**\n• Burgers gericht aangevallen.\n• Voorbeelden: Syrië, Oekraïne, Gaza, Soedan, Myanmar.\n• **Internationaal Strafhof (ICC)** in Den Haag berecht oorlogsmisdadigers.\n\n**3. Vrouwenrechten**\n• Veel landen: vrouwen minder rechten dan mannen.\n• Bv. Afghanistan onder Taliban — geen onderwijs voor meisjes na 12 jaar.\n• Saoedi-Arabië, Iran — strenge kleding-regels, beperkte vrijheid.\n• Eer-gerelateerd geweld.\n\n**4. LGBTI+-rechten**\n• Homoseksualiteit strafbaar in ~70 landen.\n• Doodstraf in enkele landen *(Iran, Saoedi-Arabië, etc.)*.\n• Veel landen: geen recht op trouwen of gezin.\n\n**5. Kinderarbeid**\n• ~160 miljoen kinderen werken wereldwijd *(2020, ILO)*.\n• Vooral in landbouw, kledingindustrie, mijnen.\n• Speelgoed + telefoons soms gemaakt met kinderarbeid.\n\n**6. Slavernij + mensenhandel**\n• ~50 miljoen mensen in moderne slavernij.\n• Inclusief: huishoudslavernij, dwang-prostitutie, dwangarbeid.\n• Ook in NL — vooral arbeidsuitbuiting in landbouw, schoonmaak.\n\n**7. Marteling**\n• Verboden door artikel 5 UVRM.\n• Maar gebeurt nog steeds — Guantánamo Bay (VS), gevangenissen in autoritaire regimes.\n\n**8. Vluchtelingen-rechten**\n• Recht op asiel (UVRM art. 14).\n• Maar veel landen weigeren te helpen.\n• Mensen op vlucht verdrinken in Middellandse Zee.\n\n**Schendingen in Nederland** *(actueel)*:\n• **Discriminatie** op arbeidsmarkt + huurmarkt *(achternaam Mohammed)*.\n• **Toeslagenaffaire** (2014-2019) — duizenden ouders onterecht beschuldigd van fraude, etnisch profileren.\n• **Politiegeweld** — soms onevenredig optreden.\n• **Asielzoekerscentrum Ter Apel** — slechte opvang in 2022-2023.\n• **Discriminatie LHBTI+** — in sommige scholen + buurten.\n\n**Wat kun je doen?**\n• Mensenrechten kennen + delen *(opvoeding)*.\n• Verkiezingen — stem op partij die mensenrechten beschermt.\n• Donaties aan organisaties *(Amnesty, Mensenrechten Watch)*.\n• Aktivisme — handtekeningen, vreedzame demonstraties.\n• Klacht indienen bij rechter / nationale ombudsman / EVRM-hof.\n\n**Cito-feitje**:\nNederland is **zetel van Internationale Strafhof (ICC)** in Den Haag — 'capital of international justice'. Ook hier: Internationaal Gerechtshof (VN), Joegoslavië-tribunaal, etc.\n\n**Cito-vraag**:\n*'Wat is de Toeslagenaffaire?'*\n→ NL belastingdienst beschuldigde duizenden ouders onterecht van fraude — vaak op etnische profilering. Mensenrechten-schending door eigen overheid.\n\n*'Wat doet Amnesty International?'*\n→ NGO die zich inzet voor mensenrechten wereldwijd — vooral politieke gevangenen + vrouwenrechten + LGBT+.",
    checks: [
      {
        q: "Wat berecht **het Internationaal Strafhof** (Den Haag)?",
        options: ["Oorlogsmisdadigers", "Belastingontduikers", "Verkeersovertreders", "Sportzaken"],
        answer: 0,
        wrongHints: [null, "Klopt — ICC.", "Niet hun taak.", "Niet hun taak.", "Niet hun taak."],
      },
      {
        q: "Wat is de **Toeslagenaffaire**?",
        options: ["Onterecht beschuldigen duizenden ouders van fraude", "Een belastingverlaging", "Een nieuw toeslagsysteem", "Geen relevant"],
        answer: 0,
        wrongHints: [null, "Klopt — mensenrechten-schending.", "Niet.", "Wel toeslagen-context maar fout.", "Wel relevant."],
      },
      {
        q: "Hoeveel kinderen werken wereldwijd ongeveer?",
        options: ["~160 miljoen", "~10.000", "~1 miljard", "~1.000"],
        answer: 0,
        wrongHints: [null, "Klopt — ILO 2020.", "Veel te weinig.", "Te veel.", "Veel te weinig."],
      },
      {
        q: "**Amnesty International** is een ... ?",
        options: ["NGO voor mensenrechten", "Politieke partij", "Bedrijf", "VN-orgaan"],
        answer: 0,
        wrongHints: [null, "Klopt — non-gouvernementele organisatie.", "Geen partij.", "Non-profit.", "Niet onderdeel VN."],
      },
    ],
  },

  // STAP 5: VN + organisaties
  {
    title: "VN + organisaties voor mensenrechten",
    explanation:
      "**Verschillende organisaties** zetten zich in voor mensenrechten — internationaal én nationaal.\n\n**VN (Verenigde Naties)** 🌍\n• Opgericht **1945** na WO2.\n• **193 landen** lid (alle landen behalve enkele uitzonderingen).\n• Hoofdzetel: **New York**.\n• Belangrijke onderdelen:\n  - **Algemene Vergadering** — alle landen samen.\n  - **Veiligheidsraad** — 5 vaste + 10 wisselende leden.\n  - **Mensenrechtenraad** — in Genève, monitort schendingen.\n  - **UNICEF** — kinderen.\n  - **UNHCR** — vluchtelingen.\n  - **WHO** — gezondheid.\n  - **ILO** — arbeidsorganisatie *(kinderarbeid)*.\n\n**Wet van de Veiligheidsraad**:\n5 vaste leden hebben **veto-recht**: VS, China, Rusland, Frankrijk, UK.\n• Eén vetoland → resolutie geblokkeerd.\n• Daarom soms machteloos *(Rusland blokkeert resoluties over Oekraïne)*.\n\n**Internationaal Strafhof (ICC)** ⚖️\n• In **Den Haag** sinds 2002.\n• Berecht **oorlogsmisdadigers** + **genocide** + **misdaden tegen menselijkheid**.\n• ~125 landen erkennen ICC.\n• Maar: VS, China, Rusland, India erkennen het **niet**.\n• Voorbeeld: arrestatiebevel tegen **Poetin** (2023) voor deportatie Oekraïense kinderen.\n\n**Andere internationale**:\n• **Raad van Europa** — 46 landen, beheert **EVRM** + Mensenrechten-hof Straatsburg.\n• **EU** — heeft eigen Handvest van de Grondrechten.\n• **OVSE** — Organisatie voor Veiligheid + Samenwerking in Europa.\n\n**Belangrijke NGO's** *(non-gouvernementele organisaties)*:\n\n**1. Amnesty International** 🕯️\n• Opgericht **1961** in Londen.\n• Strijdt voor: politieke gevangenen, vrouwen, LGBT+, doodstraf-afschaffing.\n• **Schrijfacties** — brieven schrijven naar regeringen.\n\n**2. Human Rights Watch** 📰\n• Rapporten over mensenrechten-schendingen.\n• Persvoorlichting.\n\n**3. Save the Children** 👶\n• Kinderrechten + ontwikkelingshulp.\n\n**4. Médecins Sans Frontières (Artsen zonder Grenzen)** 🏥\n• Medische hulp in oorlog + ramp.\n\n**5. Refugees International / Vluchtelingenwerk Nederland**\n• Steun voor vluchtelingen + asielzoekers.\n\n**6. Oxfam Novib**\n• Armoede-bestrijding.\n\n**Nederlandse organisaties**:\n• **College voor de Rechten van de Mens** *(NL Instituut, sinds 2012)* — onafhankelijk, monitort + adviseert.\n• **Nationale Ombudsman** — burgers kunnen hier klagen over overheid.\n• **Stichting tegen Discriminatie** — lokale anti-discriminatie-bureaus.\n• **COC** — LHBTI+-rechten in NL.\n\n**Hoe werkt het in NL bij schending?**\n1. Eerst **klacht indienen** bij instantie *(overheid, bedrijf, school)*.\n2. Geen oplossing? **Nationale Ombudsman**.\n3. Nog steeds niet? **Nederlandse rechter**.\n4. Verloren? **Europees Hof voor de Rechten van de Mens** *(Straatsburg)*.\n5. Internationaal? **VN-Mensenrechtenraad**.\n\n**Cito-feitje**:\nNederland is **founding member** van VN — een van de oprichters in 1945. Ook **EU-lid** sinds 1957 *(EEG)*. Mensenrechten zijn in NL stevig verankerd.\n\n**Cito-vraag**:\n*'Wat is het Internationaal Strafhof?'* → Berecht oorlogsmisdadigers in Den Haag.\n*'Wie kan klagen bij de Ombudsman?'* → Burgers (over overheid).\n*'Wat doet Amnesty International?'* → Vecht voor mensenrechten wereldwijd.",
    checks: [
      {
        q: "In welk jaar werd **VN opgericht**?",
        options: ["1945", "1989", "1900", "2000"],
        answer: 0,
        wrongHints: [null, "Klopt — na WO2.", "Te laat — val Berlijnse Muur.", "Te vroeg.", "Te laat."],
      },
      {
        q: "Welke 5 landen hebben **veto-recht** in VN-Veiligheidsraad?",
        options: ["VS, China, Rusland, Frankrijk, UK", "G7-landen", "EU-leden", "VN-Algemene Vergadering"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet specifiek.", "Niet specifiek.", "Geen veto."],
      },
      {
        q: "Wat doet **Amnesty International**?",
        options: ["Vecht voor mensenrechten wereldwijd", "Maakt wetten", "Heeft militair leger", "Verkoopt verzekeringen"],
        answer: 0,
        wrongHints: [null, "Klopt — sinds 1961.", "NGO, geen overheid.", "Vredelievend.", "Geen bedrijf."],
      },
      {
        q: "Waar kun je in NL **klagen over de overheid**?",
        options: ["Nationale Ombudsman", "Burgemeester", "School", "Bibliotheek"],
        answer: 0,
        wrongHints: [null, "Klopt — onafhankelijk.", "Wel maar specifiek de Ombudsman.", "Niet voor overheid-klachten.", "Geen klachten-instituut."],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — mensenrechten mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: UVRM, generaties, schendingen, organisaties.\n\nVeel succes!",
    checks: [
      {
        q: "Wat is een **mensenrecht**?",
        options: ["Recht dat iedereen heeft als mens", "Recht van rijke mensen", "Een wet uit 2000", "Iets dat niemand heeft"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Iedereen, ongeacht inkomen.", "Veel ouder.", "Wel iets — iedereen heeft het."],
      },
      {
        q: "Wat is **UVRM**?",
        options: ["Universele Verklaring Rechten van de Mens (1948)", "Een wet", "Een rechtbank", "Een ster"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Verklaring, geen wet.", "Geen rechtbank.", "Geen ster."],
      },
      {
        q: "**Vrijheid van meningsuiting** — welke generatie?",
        options: ["1e (burgerlijk + politiek)", "2e", "3e", "Geen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Sociaal-economisch.", "Collectief.", "Wel mensenrecht."],
      },
      {
        q: "Wat is **ICC**?",
        options: ["Internationaal Strafhof (Den Haag)", "Internationale Cao Coalitie", "Inkomstenbelasting Code", "VS-presidentskandidaat"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Bestaat niet.", "Bestaat niet.", "Bestaat niet."],
      },
      {
        q: "Op welke **datum** is Internationale Dag van de Mensenrechten?",
        options: ["10 december", "1 januari", "27 april", "4 mei"],
        answer: 0,
        wrongHints: [null, "Klopt — herdenking UVRM 1948.", "Nieuwjaar.", "Koningsdag.", "Dodenherdenking."],
      },
      {
        q: "Welke NGO begon met **'schrijfacties' voor politieke gevangenen**?",
        options: ["Amnesty International", "Greenpeace", "Rode Kruis", "WWF"],
        answer: 0,
        wrongHints: [null, "Klopt — sinds 1961.", "Milieu.", "Medisch + ramp.", "Natuur."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const mensenrechtenMaatschappijleer = {
  id: "mensenrechten-maatschappijleer",
  title: "Mensenrechten + organisaties (klas 2-3)",
  emoji: "⚖️",
  level: "klas2-3",
  subject: "maatschappijleer",
  referentieNiveau: "2F",
  sloThema: "Maatschappijleer — mensenrechten + democratie",
  prerequisites: [
    { id: "nederlandse-staat-maatschappijleer", title: "Nederlandse staat", niveau: "2F" },
  ],
  intro:
    "Mensenrechten voor klas 2-3 — wat zijn mensenrechten, UVRM 1948 + Eleanor Roosevelt, 3 generaties (vrijheid → sociaal → collectief), schendingen wereldwijd + Toeslagenaffaire, VN + Amnesty + ICC Den Haag. ~15 min.",
  triggerKeywords: [
    "mensenrechten", "UVRM", "EVRM", "Universele Verklaring",
    "Amnesty", "ICC", "Internationaal Strafhof",
    "Eleanor Roosevelt", "VN", "Verenigde Naties",
    "Toeslagenaffaire", "discriminatie",
    "vrijheid van meningsuiting", "kinderarbeid", "asiel",
  ],
  chapters,
  steps,
};

export default mensenrechtenMaatschappijleer;
