// Leerpad: CSE wiskunde-strategie VMBO — klas 3-4.
// Hoe pak je een wiskunde-examen aan? Geen verzonnen vragen — wel
// algemene aanpak, slim rekenen, en hoofd-onderwerpen die op CSE komen.
// Referentieniveau 2F-3F.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  step: "#80cbc4",
  warm: "#ffd54f",
  hot: "#ff7043",
  cool: "#42a5f5",
  highlight: "#9575cd",
};

const stepEmojis = ["🧠", "✏️", "🔢", "📋", "⏱️", "🏆"];

const chapters = [
  { letter: "A", title: "Vraag goed lezen", emoji: "🧠", from: 0, to: 0 },
  { letter: "B", title: "Schema + werkvolgorde", emoji: "✏️", from: 1, to: 1 },
  { letter: "C", title: "Rekenmachine slim", emoji: "🔢", from: 2, to: 2 },
  { letter: "D", title: "Top-onderwerpen CSE", emoji: "📋", from: 3, to: 3 },
  { letter: "E", title: "Tijd-management", emoji: "⏱️", from: 4, to: 4 },
  { letter: "F", title: "Eind-checklist", emoji: "🏆", from: 5, to: 5 },
];

function stappenSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">5 stappen per wiskunde-vraag</text>

${[
  { y: 45, label: "1. Lees", text: "vraag rustig 2× door" },
  { y: 75, label: "2. Streep", text: "gegeven onder, gevraagd cirkel" },
  { y: 105, label: "3. Schat", text: "wat is een redelijk antwoord?" },
  { y: 135, label: "4. Reken", text: "formule, stap voor stap" },
  { y: 165, label: "5. Check", text: "klopt eenheid + grootte?" },
].map((s, i) => `
<rect x="20" y="${s.y - 12}" width="280" height="22" rx="6" fill="${i % 2 ? "rgba(128,203,196,0.10)" : "rgba(255,213,79,0.10)"}" stroke="${i % 2 ? COLORS.step : COLORS.warm}" stroke-width="1"/>
<text x="35" y="${s.y + 3}" fill="${i % 2 ? COLORS.step : COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">${s.label}</text>
<text x="115" y="${s.y + 3}" fill="${COLORS.text}" font-size="11" font-family="Arial">${s.text}</text>
`).join("")}

<text x="160" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Volg deze 5 bij elke vraag</text>
</svg>`;
}

const steps = [
  // STAP 1: Vraag lezen
  {
    title: "Vraag goed lezen — niet meteen rekenen",
    explanation:
      "Bij CSE Wiskunde maken **veel leerlingen fouten** doordat ze **niet goed lezen**. Een lange tekst-vraag met getallen erin kan verwarrend zijn.\n\n**Stappenplan per vraag** *(5 stappen — uit het hoofd!)*:\n\n**Stap 1 — Lees rustig**:\n• Lees de vraag **2× volledig**.\n• Eerst snel skim om context te krijgen.\n• Tweede keer langzaam met aandacht voor details.\n\n**Stap 2 — Streep aan**:\n• **Onderstreep gegevens** *(getallen, eenheden, namen)*.\n• **Cirkel of streep om het gevraagde** *(wat moet uitkomst zijn?)*.\n• **Markeer eenheden** *(km of m? € of cent? minuten of uren?)*.\n\n**Stap 3 — Schat**:\nVoor je gaat rekenen, **schat een redelijk antwoord**.\n• Voorbeeld: '12% van €85?' → ~10, dus rond €10. Antwoord moet dichtbij €10 zijn.\n• Voorbeeld: 'volume van 50×30×20 cm doos?' → ~30.000 cm³ = 30 L. Niet 300L (te veel) of 3L (te weinig).\n\n**Stap 4 — Reken**:\nGebruik **formule** of methode. Stap voor stap. Op papier of in hoofd, afhankelijk van moeilijkheid.\n\n**Stap 5 — Check**:\n• **Eenheid correct**? *(cm, kg, %, €)*\n• **Grootte redelijk**? *(klopt met je schatting?)*\n• **Antwoord op gevraagde**? *(staat er 'totaal' of 'per stuk' of 'verschil'?)*\n\n**Veelvoorkomende fouten — vermijden**:\n\n**Fout 1: Verkeerd lezen** wat gevraagd is.\n• Vraag: 'hoeveel meer kost A dan B?' → **verschil**, niet totaal.\n• Vraag: 'wat betaalt hij na 30% korting?' → **70%** van prijs, niet 30%.\n\n**Fout 2: Eenheid vergeten**.\n• Vraag: 'hoeveel minuten?' → niet uren noteren.\n• Vraag: 'wat is het oppervlak in cm²?' → niet in m² of mm² geven.\n\n**Fout 3: Niet alle gegevens gebruiken**.\nMeestal staan er extra getallen in CSE-vragen die je **niet nodig hebt**. Of je mist juist een belangrijk getal.\n\n**Fout 4: Aanname maken**.\nNiet aanname dat 'getal 100' = 100% of 100 cm. Lees wat er staat!\n\n**Cito-feitje**:\nBij meerkeuze-vragen kunnen de **wrong-options** verleidelijk zijn — ze laten zien wat je krijgt als je een fout maakt *(verkeerde eenheid, opgeteld i.p.v. afgetrokken)*. Dus check 2× voor je een antwoord kiest.\n\n**Tip — lange tekst, kort vraag**:\nVeel CSE-vragen hebben **lange aanloop** (verhaal) en **korte vraag** aan eind. Lees laatste deel eerst om te weten waar je naar zoekt — dan zoek terug in tekst.",
    svg: stappenSvg(),
    checks: [
      {
        q: "Wat doe je **eerst** bij een wiskunde-vraag?",
        options: ["Rustig lezen + onderstrepen", "Direct rekenen", "Rekenmachine pakken", "Antwoord gokken"],
        answer: 0,
        wrongHints: [null, "Zonder lezen = fouten.", "Eerst snappen wat vraag is.", "Geen strategie."],
      },
      {
        q: "Vraag: *'Wat betaalt hij na **30% korting** op €50?'* Wat reken je?",
        options: ["70% van €50 = €35", "30% van €50 = €15", "€50 + 30%", "€50 + €15"],
        answer: 0,
        wrongHints: [null, "Dat is wat je BESPAART, niet wat je betaalt.", "Verkeerde richting.", "Optellen van fout bedrag."],
      },
      {
        q: "Waarom **schat** je voor je rekent?",
        options: ["Om te checken of je antwoord redelijk is", "Om sneller te zijn", "Om vragen over te slaan", "Niet nodig"],
        answer: 0,
        wrongHints: [null, "Niet primair doel.", "Niet.", "Wel nuttig."],
      },
      {
        q: "Vraag vraagt **oppervlak in cm²** — wat schrijf je?",
        options: ["Cijfer + cm²", "Cijfer alleen", "Cijfer + m²", "In mm²"],
        answer: 0,
        wrongHints: [null, "Mist eenheid.", "Verkeerde eenheid.", "Verkeerde eenheid."],
      },
      {
        q: "Wat onderstreep je in een examenvraag **als eerste**?",
        options: ["De gegeven getallen + wat gevraagd wordt", "Alle woorden", "Niets", "Alleen de vraagteken"],
        answer: 0,
        wrongHints: [null, "Te veel — focus.", "Belangrijk om markeren.", "Te beperkt."],
      },
      {
        q: "*'Geef je antwoord in 1 decimaal'* — wat betekent **1 decimaal**?",
        options: ["1 cijfer na de komma (bv 4,7)", "1 cijfer voor de komma", "Alleen 1 getal", "Geen komma"],
        answer: 0,
        wrongHints: [null, "Niet — die staan voor de komma.", "Onvolledig.", "Wel met komma."],
      },
    ],
  },

  // STAP 2: Schema
  {
    title: "Schema + werkvolgorde",
    explanation:
      "Voor **moeilijke vragen** met veel gegevens — **maak een schema**.\n\n**Soorten schema's**:\n\n**1. Lijst-schema**:\n• Schrijf alle gegevens op een rij.\n• Schrijf wat je zoekt.\n• Voorbeeld:\n```\nGegeven: 4 broden × €2,80\nGegeven: betaalt met €20\nGevraagd: wisselgeld?\n```\n\n**2. Schema-tabel**:\nVoor verhoudingen of vergelijkingen.\nVoorbeeld: *'3 boeken kosten €15. Hoeveel kost 7 boeken?'*\n```\nboeken | prijs\n  3    |  €15\n  7    |   ?\n```\nVerhouding: ×7/3 → €35.\n\n**3. Tekening**:\nVoor meetkunde — teken altijd.\n• Driehoek met zijden a, b, c.\n• Bal met straal r.\n• Plattegrond met afmetingen.\n\n**4. Stappen-plan**:\nVoor 2-stap-sommen — schrijf elke stap.\nVoorbeeld: *'Korting 25% op €80, daarna nog 10% extra.'*\n```\nStap 1: 25% van €80 = €20 → nieuwe prijs €60\nStap 2: 10% van €60 = €6 → eindprijs €54\n```\n\n**Werkvolgorde — bij sommen**:\n\n**HMVDOA-regel** *(volgorde bewerkingen)*:\n1. **H**aakjes eerst\n2. **M**achten + worteltrekken\n3. **V**ermenigvuldigen + **D**elen *(van links naar rechts)*\n4. **O**ptellen + **A**ftrekken *(van links naar rechts)*\n\n**Voorbeeld**:\n• 3 + 4 × 5 = ?\n• Eerst ×: 4 × 5 = 20.\n• Dan +: 3 + 20 = **23**.\n• Niet (3+4) × 5 = 35 — daarvoor haakjes nodig.\n\n• (3 + 4) × 5 = ?\n• Haakjes eerst: 3+4 = 7.\n• Dan ×: 7 × 5 = **35**.\n\n**Negatieve getallen — pas op**:\n• 5 − (−3) = 5 + 3 = **8**.\n• −2 × 3 = **−6**.\n• −2 × −3 = **6** *(min × min = plus)*.\n• 4 + (−2) = 4 − 2 = **2**.\n\n**Cito-tip — schrijf alles op**:\nNiet uit hoofd doen voor lastige vragen. Op kladpapier:\n• Stap 1: ... = X.\n• Stap 2: X × ... = Y.\n• Antwoord: Y.\n\nDan kun je terugkijken bij controle + corrigeren.\n\n**Niet-essentiële informatie**:\nCito-vragen bevatten soms **extra-info** die niet nodig is.\nBv. 'Mark gaat fietsen om 9:00. Het is 15°C. Hij rijdt 20 km/u. Hoe ver in 30 min?'\n→ 15°C is **niet nodig**. Tijd + snelheid → afstand = 10 km.\n\nLeer extra info **negeren** als die niet bijdraagt.",
    checks: [
      {
        q: "**3 + 4 × 5** = ?",
        options: ["23", "35", "27", "20"],
        answer: 0,
        wrongHints: [null, "Met haakjes (3+4)×5.", "Niet.", "Alleen 4×5."],
      },
      {
        q: "**(3 + 4) × 5** = ?",
        options: ["35", "23", "27", "20"],
        answer: 0,
        wrongHints: [null, "Zonder haakjes.", "Niet.", "Alleen 4×5."],
      },
      {
        q: "**5 − (−3)** = ?",
        options: ["8", "2", "−8", "−2"],
        answer: 0,
        wrongHints: [null, "Verkeerde teken.", "Verkeerd.", "Verkeerd."],
      },
      {
        q: "**−2 × −3** = ?",
        options: ["6", "−6", "5", "−5"],
        answer: 0,
        wrongHints: [null, "Verkeerd teken.", "Optelling.", "Optelling met -."],
      },
      {
        q: "Bij **rekensom met haakjes**: wat doe je **eerst**?",
        options: ["Wat tussen de haakjes staat", "Vermenigvuldigen", "Delen", "Optellen"],
        answer: 0,
        wrongHints: [null, "Pas later.", "Pas later.", "Pas later."],
      },
      {
        q: "**Open vraag**: hoeveel is **(3 + 4) × 2**? Typ alleen het getal.",
        kind: "open",
        acceptedAnswers: ["14"],
        numericTolerance: 0,
        explanation: "Eerst haakjes: 3+4 = 7. Dan 7 × 2 = 14.",
      },
    ],
  },

  // STAP 3: Rekenmachine
  {
    title: "Rekenmachine slim inzetten",
    explanation:
      "Op CSE Wiskunde mag je **rekenmachine** gebruiken. **Slim** gebruiken bespaart tijd + voorkomt fouten.\n\n**Wanneer rekenmachine?**\n• Lange getallen *(>3 cijfers)*.\n• Decimalen / breuken.\n• Wortels, machten *(2²⁵ etc.)*.\n• Goniometrie *(sin/cos/tan)*.\n\n**Wanneer NIET rekenmachine?**\n• Eenvoudige tafels *(7 × 8)*. Sneller in hoofd.\n• Schatten *(check of antwoord klopt)*.\n• Optellen / aftrekken van ronde getallen.\n\n**Volgorde-bewerking op rekenmachine**:\n• **Wetenschappelijke rekenmachine** *(Casio, Texas)* doet automatisch volgorde-bewerkingen.\n• Voer in: `3 + 4 × 5` → krijgt `23` (niet 35).\n• Bij **simpele rekenmachine** *(huis-tuin-keuken)* moet je zelf volgorde regelen.\n\n**Haakjes gebruiken** op rekenmachine:\n• Bij breuken: `(3 + 4) / (5 + 6)`. Anders gaat het fout.\n• Bij delingen met meerdere termen.\n\n**Veelvoorkomende rekenmachine-fouten**:\n\n**Fout 1: Komma vs punt**.\nNederlandse rekenmachine accepteert beide of een. Check welk je apparaat doet.\n\n**Fout 2: Procent-knop**.\nDe **%-knop** werkt anders op verschillende rekenmachines:\n• Sommige: `30 × 25%` = 7,5 *(direct)*.\n• Andere: `30 × 25 %` = vraagt nog operator.\nVeiliger: gebruik **× 0,25** voor 25%.\n\n**Fout 3: Min-teken vs aftrekken**.\n• `5 - 3` = 2 (aftrekken).\n• `5 (-3)` of `5 × (-3)` = -15.\nLet op de **(-)**-knop *(negatief)* vs **−**-knop *(aftrekken)*.\n\n**Fout 4: Vergeten gewijzigde modus**.\n• **Goniometrie**: degree (graden) vs radian (radialen). CSE: meestal **degree**. Stel je rekenmachine vooraf in!\n• **Display**: float vs exact (breuk). Voor CSE: **float** (decimaal) is meestal goed.\n\n**Bekende toets-kortinkstrucs**:\n• **EXP** of **× 10ˣ** — voor wetenschappelijke notatie.\n• **^** of **xʸ** — voor machten.\n• **√** — wortels.\n• **Ans** — vorige antwoord (bv. `Ans + 5`).\n• **M+** / **M-** / **MR** — geheugen.\n\n**Cito-tip — bewaar tussen-stappen**:\nVoor lange berekeningen: schrijf tussen-resultaten op papier op. Niet alleen in rekenmachine. Dan kun je later checken.\n\n**Bv. som van 4 dingen**:\n• Stap 1: 3 × €4,75 = €14,25 *(schrijf op)*.\n• Stap 2: €14,25 + €8,40 = €22,65 *(schrijf op)*.\n• Etc.\n\n**Foute knoppen vermijden**:\nKlein scherm + dunne knoppen. Druk **rustig**. **Check** scherm voor je verder gaat.\n\n**Op CSE wiskunde-A vs B**:\n• **Wiskunde A** *(HAVO/VWO)*: rekenmachine voor statistiek + functies.\n• **Wiskunde B**: ook voor goniometrie + meetkunde.\n• **Wiskunde C/D**: anders. \n\n**Cito-test**:\n*'Wat is √324?'*\n→ Rekenmachine: 18 *(meteen)*.\n→ In hoofd: 18² = 324 *(als je 't toevallig kent)*. Anders rekenmachine.\n\n*'Wat is 12% van €350?'*\n→ Rekenmachine: 0,12 × 350 = €42.",
    checks: [
      {
        q: "Wanneer is **rekenmachine NIET nodig**?",
        options: ["Eenvoudige tafel zoals 7×8", "Lange getallen", "Wortels", "Goniometrie"],
        answer: 0,
        wrongHints: [null, "Wel nodig.", "Wel nodig.", "Wel nodig."],
      },
      {
        q: "Veiligste manier om **25% van X** te rekenen?",
        options: ["× 0,25", "× 25%", "÷ 4", "Alles werkt"],
        answer: 0,
        wrongHints: [null, "%-knop niet uniform.", "Klopt qua antwoord, maar omslachtiger.", "%-knop kan fout gaan."],
      },
      {
        q: "Bij goniometrie op rekenmachine — welke modus?",
        options: ["Degree (graden) — standaard CSE", "Radian", "Float", "Modus maakt niet uit"],
        answer: 0,
        wrongHints: [null, "Voor hogere wiskunde.", "Display-mode, niet relevant.", "Wel uit — geeft fouten."],
      },
      {
        q: "Wat doe je met **tussenstappen** in lange berekening?",
        options: ["Op papier opschrijven", "Alleen in rekenmachine", "Vergeten", "Niet doen"],
        answer: 0,
        wrongHints: [null, "Niet zichtbaar later.", "Slecht idee.", "Wel doen."],
      },
      {
        q: "Een **fout-knop** op rekenmachine herstelt ___?",
        options: ["Laatst ingevoerde teken", "Hele som", "Geheugen", "Niets"],
        answer: 0,
        wrongHints: [null, "Daarvoor 'AC'/'C'.", "Daarvoor 'M-clear'.", "Wel iets."],
      },
      {
        q: "Bij **wortel-berekening** op de calculator: druk je eerst √ of getal?",
        options: ["√, dan getal (of typ getal-eerst en daarna √ — afhankelijk van model)", "Doet er niet toe", "Alleen getal", "Alleen √"],
        answer: 0,
        wrongHints: [null, "Doet er WEL toe.", "Mist de wortel-handeling.", "Mist het getal."],
      },
    ],
  },

  // STAP 4: Top-onderwerpen
  {
    title: "Top-onderwerpen CSE wiskunde VMBO",
    explanation:
      "Op het **CSE Wiskunde VMBO-GT** komen vrijwel altijd deze onderwerpen — kennen!\n\n**Top-10 onderwerpen** *(globaal)*:\n\n**1. Procenten** 📊\n• Korting, btw, rente.\n• % van X = X × 0,Y.\n• Stijging / daling in % berekenen.\n→ Zie pad **procenten** + **procenten-po**.\n\n**2. Verhoudingen + schaal** 📏\n• Verhouding 3 : 5.\n• Schaal 1 : 50.000 op kaart.\n• Recept-verhoudingen.\n→ Zie **verhoudingen** + **kaartlezen-po**.\n\n**3. Vlakke figuren** ⬜🔺⭕\n• Omtrek + oppervlakte van rechthoek, driehoek, cirkel.\n• Omtrek rechthoek = 2(l+b). Opp = l×b.\n• Opp driehoek = ½ × basis × hoogte.\n• Cirkel: omtrek = π × d. Opp = π × r².\n→ Zie **vlakke-figuren** + **vlakke-figuren-po**.\n\n**4. Ruimtelijke figuren / volume** 📦\n• Kubus: V = z³.\n• Balk: V = l × b × h.\n• Cilinder: V = π × r² × h.\n• Inhoudsmaten omrekenen *(cm³ ↔ L ↔ m³)*.\n→ Zie **ruimtemeetkunde** + **meetkunde-bouwsels**.\n\n**5. Pythagoras** ⏹️\n• a² + b² = c² *(in rechthoekige driehoek)*.\n• c = √(a² + b²).\n→ Zie **pythagoras**.\n\n**6. Functies + grafieken** 📈\n• Lineaire functie: y = ax + b.\n• Parabool: y = ax² + bx + c.\n• Aflezen + tekenen.\n→ Zie **lineaire-formules** + **parabolen**.\n\n**7. Vergelijkingen oplossen** 🟰\n• Een onbekende: 2x + 5 = 13 → x = 4.\n• Twee onbekenden (stelsels).\n• Kwadratische vergelijkingen.\n→ Zie **vergelijkingen-oplossen** + **stelsels** + **kwadratische-vergelijkingen**.\n\n**8. Tabellen + grafieken lezen** 📊\n• Aflezen, verschil, totaal, gemiddelde.\n• Cirkeldiagram, staaf, lijngrafiek.\n→ Zie **tabellen-grafieken** + **grafieken-lezen-po**.\n\n**9. Goniometrie (alleen wiskunde-B)** 📐\n• sin, cos, tan in rechthoekige driehoek.\n• SOS-CAS-TOA-ezelsbrug.\n→ Zie **goniometrie**.\n\n**10. Statistiek + kans** 🎲\n• Gemiddelde, modus, mediaan.\n• Kans = gunstig / mogelijk.\n• Boxplot lezen.\n→ Zie **statistiek** + **gemiddelden-statistiek-po** + **kansrekening**.\n\n**Op welk niveau?**\n\n**VMBO-BB**: vooral 1-5 (procenten, verhouding, vorm).\n**VMBO-KB**: voegt toe 6 + 7 (eenvoudige functies + vergelijkingen).\n**VMBO-GT (T)**: voegt toe 8 + 10 (grafieken + statistiek).\n**HAVO**: + 9 (basis goniometrie) + meer functies.\n**VWO**: + meer goniometrie + algebra + analyse.\n\n**Hoe oefen je dit?**\n• Doe **oude examens** *(via examenblad.nl — gratis)*.\n• Voor elk onderwerp: **5-10 vragen** doen.\n• Markeer waar je fout maakt → herhaal die.\n\n**Tip — CSE-onderwerp herkennen**:\nIn de vraag staan **trigger-woorden** voor het onderwerp:\n• 'Korting / rente' → procenten.\n• 'Schaal' → verhouding.\n• 'Oppervlakte / omtrek' → vlakke figuren.\n• 'Volume / inhoud' → ruimtemeetkunde.\n• 'Driehoek + 90°' → Pythagoras of goniometrie.\n• 'Grafiek toont ...' → functies / aflezen.\n• 'Welke ...?' → vergelijking oplossen.\n• 'Gemiddelde / verdeling' → statistiek.\n\n**Cito-strategie**:\n• **Easy first**: doe makkelijke onderwerpen *(procenten, schaal, vorm)* eerst om punten te scoren.\n• **Niet vastlopen** op 1 lastige.\n• **Punten tellen**: niet alle vragen zijn evenveel waard. Doe de hoogwaardige eerst.",
    checks: [
      {
        q: "**Pythagoras** geldt voor welke driehoek?",
        options: ["Rechthoekige (met 90°)", "Gelijkzijdige", "Stompe", "Elke driehoek"],
        answer: 0,
        wrongHints: [null, "Voor gelijkzijdige andere regels.", "Niet hier.", "Niet — alleen rechthoekige."],
      },
      {
        q: "Formule oppervlakte **driehoek**?",
        options: ["½ × basis × hoogte", "basis × hoogte", "π × r²", "2(l + b)"],
        answer: 0,
        wrongHints: [null, "Dat is rechthoek.", "Dat is cirkel.", "Dat is omtrek rechthoek."],
      },
      {
        q: "Formule volume **kubus** met zijde z?",
        options: ["z³ (z × z × z)", "z²", "6 × z²", "z"],
        answer: 0,
        wrongHints: [null, "Dat is oppervlak 1 vlak.", "Totaal oppervlak alle vlakken.", "Eenheid zijde."],
      },
      {
        q: "Welk **trigger-woord** wijst op procenten-vraag?",
        options: ["korting", "schaal", "volume", "gemiddelde"],
        answer: 0,
        wrongHints: [null, "Verhouding.", "Ruimte.", "Statistiek."],
      },
      {
        q: "Formule **oppervlakte rechthoek** (lengte × breedte)?",
        options: ["l × b", "l + b", "2 × (l + b)", "l²"],
        answer: 0,
        wrongHints: [null, "Optelling, geen oppervlak.", "Omtrek.", "Vierkant."],
      },
      {
        q: "**Schaal 1:1000**, 5 cm op kaart = werkelijk in **meter**?",
        options: ["50 m", "5 m", "500 m", "5 km"],
        answer: 0,
        wrongHints: [null, "10× te weinig.", "10× te veel.", "100× te veel."],
      },
      {
        q: "**Open vraag**: stelling van Pythagoras toepassen op rechthoekige driehoek met benen 3 en 4 — hoe lang is de schuine zijde?",
        kind: "open",
        acceptedAnswers: ["5"],
        numericTolerance: 0,
        explanation: "a² + b² = c². 3² + 4² = 9 + 16 = 25. √25 = 5.",
      },
    ],
  },

  // STAP 5: Tijd-management
  {
    title: "Tijd-management op het examen",
    explanation:
      "CSE Wiskunde VMBO duurt meestal **120 minuten** *(2 uur)* met **30-40 vragen**. Dat is ongeveer **3 min per vraag**.\n\n**Tijd-plan** *(uit het hoofd!)*:\n\n**0-5 min: Overzicht**\n• Blader rustig door alle vragen.\n• Welke zijn makkelijk *(jou bekend onderwerp)*?\n• Welke zijn lastiger?\n• Schat globaal: hoe veel tijd per vraag?\n\n**5-100 min: Werken**\n• **Makkelijkste eerst** — punten scoren.\n• Per vraag: **lees → reken → controleer**.\n• **Vastloper na 5 min?** → markeer + verder. Kom later terug.\n• **Niet alle vragen** halen is OK — beter 80% goed dan 100% jaar haastig.\n\n**100-115 min: Lastige + controle**\n• Terug naar gemarkeerde vragen.\n• Probeer wat je kunt.\n• **Vul iets in** bij meerkeuze *(beter gokken dan leeg)*.\n\n**115-120 min: Eindcheck**\n• Loop alle antwoorden door.\n• Eenheid? Grootte? Plausibel?\n• Heb je alle vragen?\n\n**Per vraag — tijd-strategie**:\n\n**Vraag is binnen 30 sec klaar?** ✓ Doe meteen.\n**Vraag duurt 2-3 min?** → Normaal doen.\n**Vraag duurt >5 min**? → Markeer + verder.\n\n**Tips bij vastlopen**:\n\n**1. Verkeerd onderwerp gekozen?**\nMisschien is het géén Pythagoras maar verhouding. Heroverweeg.\n\n**2. Gemist gegeven?**\nLees de hele vraag opnieuw. Is er een getal dat je niet hebt gebruikt?\n\n**3. Niet zeker formule?**\nGebruik wat je wel kent + schat in.\n\n**4. Probeer terugwerken**:\nKijk naar antwoord-opties *(als meerkeuze)*. Welk antwoord past?\n\n**5. Volgende!**\nNiet 10 min op 1 vraag. Doe verder. Kom later terug.\n\n**Niet doen op examen**:\n\n**❌ Lang twijfelen** zonder reden.\n**❌ Helemaal niet invullen** bij meerkeuze *(altijd iets gokken)*.\n**❌ Geen tijd voor controle** *(reserveer minimaal 5 min)*.\n**❌ Eten/drinken** in zaal (niet toegestaan, behalve water).\n**❌ Spieken** bij anderen (uitsluiting + bezet).\n\n**Wel doen**:\n\n**✅ Tussendoor diep ademhalen** als je gestrest raakt.\n**✅ Klok in de gaten** houden *(niet alleen aan einde)*.\n**✅ Schrijf met potlood** voor wijzigingen *(niet alle examens — check)*.\n**✅ Vraag toezicht** als iets onduidelijk is *(bv. een typo in vraag)*.\n\n**Slaap goed dag ervoor**:\n• 8 uur slaap belangrijker dan laatste-minuut-leren.\n• Geen energy drinks 's avonds.\n• Niet panikeren — je weet meer dan je denkt.\n\n**Verlichting bij stress**:\n• Diep ademhalen *(4-7-8: in 4 sec, vast 7, uit 8)*.\n• Sla vraag over + kom later terug — eerst makkelijk werk.\n• Drink water.\n• Realiseer: dit is **1 examen**, niet je hele leven.\n\n**Cito-feitje**:\nNa een lastige vraag is **schakelen naar makkelijke** vraag bewezen effectief voor het brein. Verkort frustratie en geeft weer **gevoel van succes**.",
    checks: [
      {
        q: "CSE Wiskunde VMBO duurt **hoe lang**?",
        options: ["120 min (2 uur)", "60 min", "180 min", "30 min"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Te lang.", "Te kort."],
      },
      {
        q: "Wat doe je bij **5+ min op 1 vraag vastlopen**?",
        options: ["Markeer + verder, later terug", "Blijf zitten tot opgelost", "Sla helemaal over", "Gok meteen"],
        answer: 0,
        wrongHints: [null, "Verspilt te veel tijd.", "Wel later terugkomen.", "Eerst even nadenken."],
      },
      {
        q: "Bij **meerkeuze** en niet zeker — wat doe je?",
        options: ["Iets invullen (gokken)", "Leeglaten", "Vraag overslaan", "Buurman kopiëren"],
        answer: 0,
        wrongHints: [null, "Levert 0 op.", "Wel terug, maar uiteindelijk vullen.", "Spieken = uitsluiting."],
      },
      {
        q: "Wat doe je in de laatste **5 minuten**?",
        options: ["Antwoorden controleren", "Nieuwe vraag starten", "Stoppen", "Speed-typen"],
        answer: 0,
        wrongHints: [null, "Te krap.", "Niet als er tijd is.", "Niet typen — schrijven."],
      },
      {
        q: "Een vraag is van **3 punten** en je hebt **120 min voor 60 punten** — gem **per punt**?",
        options: ["2 min", "1 min", "5 min", "30 sec"],
        answer: 0,
        wrongHints: [null, "Te krap.", "Te ruim.", "Veel te krap."],
      },
      {
        q: "**Halverwege examen** moet je ongeveer ___ van vragen klaar hebben?",
        options: ["Helft", "Kwart", "Driekwart", "Alles"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te ruim.", "Onmogelijk."],
      },
    ],
  },

  // STAP 6: Eindchecklist
  {
    title: "Eindchecklist + Cito-mix",
    explanation:
      "**Voor + na examen** — checklist.\n\n**Dag ervoor** *(uit het hoofd!)*:\n• ✅ Slaap 8 uur.\n• ✅ Gezond eten, geen energy-drinks.\n• ✅ Spullen klaar: identiteit, pen, potlood, gum, rekenmachine *(check batterij)*, formules-blad (als toegestaan), water.\n• ✅ Geen all-nighter leren — verlies van slaap = verlies van scherpte.\n\n**Op de dag**:\n• ✅ Tijd genoeg om er te zijn (geen stress-haast).\n• ✅ Ontbijt — energie nodig.\n• ✅ Toilet bezoek vooraf.\n• ✅ Rust momentje 5 min voor je begint.\n\n**Tijdens examen**:\n• ✅ Eerst alle vragen scannen.\n• ✅ Makkelijke eerst.\n• ✅ Tijd in de gaten.\n• ✅ Lastige vraag markeren, niet vastzitten.\n• ✅ Antwoord met eenheid.\n• ✅ Eindcheck — eenheid? Grootte? Alle vragen ingevuld?\n\n**Na examen**:\n• ✅ Niet vergelijken met klasgenoten — onnodig stress.\n• ✅ Niet meteen 'rechtbank' over fouten — neem afstand.\n• ✅ Volgend examen voorbereiden.\n\n**Mentaal**:\n• ✅ Geloof in jezelf — je hebt veel geleerd.\n• ✅ Foutje? OK, ga door.\n• ✅ Diep ademhalen bij stress.\n\n**Mix-vragen — algemene CSE-strategie**:\nDeze mix test of je weet **wat je moet doen** bij verschillende soorten vragen.",
    checks: [
      {
        q: "**Dag voor examen** — wat is belangrijkst?",
        options: ["Goede slaap (8 uur)", "All-nighter leren", "Geen ontbijt", "Examen-paniek"],
        answer: 0,
        wrongHints: [null, "Verlies van scherpte.", "Energie nodig.", "Niet helpend."],
      },
      {
        q: "Tijd-strategie tijdens examen?",
        options: ["Makkelijke eerst + lastige markeren", "Volgorde van vragen volgen", "Lastige eerst", "Random"],
        answer: 0,
        wrongHints: [null, "Kost tijd op vastlopers.", "Loopt vast.", "Geen strategie."],
      },
      {
        q: "Welk **trigger-woord** = vlakke figuren?",
        options: ["Oppervlakte / omtrek", "Korting", "Volume", "Gemiddelde"],
        answer: 0,
        wrongHints: [null, "Procenten.", "Ruimtemeetkunde.", "Statistiek."],
      },
      {
        q: "**Pythagoras**-vraag heeft welk woord?",
        options: ["Rechthoekige driehoek", "Cirkel", "Procent", "Gemiddelde"],
        answer: 0,
        wrongHints: [null, "Niet Pythagoras.", "Niet.", "Niet."],
      },
      {
        q: "Wat reserveer je voor **eindcheck**?",
        options: ["Laatste ~5 min", "Hele uur", "1 min", "Geen tijd"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te krap.", "Wel tijd reserveren."],
      },
      {
        q: "Bij **vastlopen** op 1 vraag — wat doe je?",
        options: ["Markeer + ga verder, kom terug", "Blijf zitten", "Sla helemaal over", "Stop met examen"],
        answer: 0,
        wrongHints: [null, "Tijd-verspilling.", "Wel later terug.", "Nooit stoppen."],
      },
      {
        q: "**Wat neem je mee** naar het CSE wiskunde-examen (VMBO)?",
        options: ["Gewone rekenmachine + passer + geodriehoek + potlood/pen", "Telefoon", "Computer", "Niets"],
        answer: 0,
        wrongHints: [null, "Verboden!", "Niet toegestaan.", "Wel materiaal."],
      },
      {
        q: "Op het examen mag je **geen grafische rekenmachine** voor VMBO. Wat dan wel?",
        options: ["Gewone (wetenschappelijke) rekenmachine", "Helemaal niets", "Telefoon-calculator", "Slim horloge"],
        answer: 0,
        wrongHints: [null, "Wel iets.", "Verboden.", "Verboden."],
      },
      {
        q: "**Open vraag**: hoeveel minuten heeft het CSE wiskunde VMBO meestal?",
        kind: "open",
        acceptedAnswers: ["120", "120 min", "2 uur"],
        explanation: "VMBO-eindexamen wiskunde duurt 120 minuten (2 uur).",
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const cseWiskundeStrategieVmbo = {
  id: "cse-wiskunde-strategie-vmbo",
  title: "CSE Wiskunde-strategie VMBO (klas 3-4)",
  emoji: "🧠",
  level: "klas3-4",
  subject: "wiskunde",
  referentieNiveau: "3F",
  sloThema: "Wiskunde — examenstrategie CSE VMBO",
  prerequisites: [
    { id: "procenten", title: "Procenten", niveau: "2F" },
    { id: "vlakke-figuren", title: "Vlakke figuren", niveau: "2F" },
    { id: "pythagoras", title: "Pythagoras", niveau: "2F" },
  ],
  intro:
    "Examenstrategie wiskunde voor klas 3-4 VMBO — 5-stappen-aanpak per vraag, schema/HMVDOA-regel, rekenmachine slim, top-10 CSE-onderwerpen (procent/verhouding/oppervlak/volume/Pythagoras/functies/vergelijking/grafiek/goniometrie/statistiek), tijd-management 120 min, eindchecklist. ~15 min.",
  triggerKeywords: [
    "examen wiskunde", "CSE wiskunde", "VMBO eindexamen wiskunde",
    "examenstrategie", "HMVDOA",
    "tijd management examen", "rekenmachine",
  ],
  chapters,
  steps,
};

export default cseWiskundeStrategieVmbo;
