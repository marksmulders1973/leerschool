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
      "Bij CSE Wiskunde maken **veel leerlingen fouten** doordat ze **niet goed lezen**. Een lange tekst-vraag met getallen erin kan verwarrend zijn.\n\n**Stappenplan per vraag** *(5 stappen — uit het hoofd!)*:\n\n**Stap 1 — Lees rustig**:\n• Lees de vraag **2× volledig**.\n• Eerst snel skim om context te krijgen.\n• Tweede keer langzaam met aandacht voor details.\n\n**Stap 2 — Streep aan**:\n• **Onderstreep gegevens** *(getallen, eenheden, namen)*.\n• **Cirkel of streep om het gevraagde** *(wat moet uitkomst zijn?)*.\n• **Markeer eenheden** *(km of m? € of cent? minuten of uren?)*.\n\n**Stap 3 — Schat**:\nVoor je gaat rekenen, **schat een redelijk antwoord**.\n• Voorbeeld: '12% van €85?' → ~10, dus rond €10. Antwoord moet dichtbij €10 zijn.\n• Voorbeeld: 'volume van 50×30×20 cm doos?' → ~30.000 cm³ = 30 L. Niet 300L (te veel) of 3L (te weinig).\n\n**Stap 4 — Reken**:\nGebruik **formule** of methode. Stap voor stap. Op papier of in hoofd, afhankelijk van moeilijkheid.\n\n**Stap 5 — Check**:\n• **Eenheid correct**? *(cm, kg, %, €)*\n• **Grootte redelijk**? *(klopt met je schatting?)*\n• **Antwoord op gevraagde**? *(staat er 'totaal' of 'per stuk' of 'verschil'?)*\n\n**Veelvoorkomende fouten — vermijden**:\n\n**Fout 1: Verkeerd lezen** wat gevraagd is.\n• Vraag: 'hoeveel meer kost A dan B?' → **verschil**, niet totaal.\n• Vraag: 'wat betaalt hij na 30% korting?' → **70%** van prijs, niet 30%.\n\n**Fout 2: Eenheid vergeten**.\n• Vraag: 'hoeveel minuten?' → niet uren noteren.\n• Vraag: 'wat is het oppervlak in cm²?' → niet in m² of mm² geven.\n\n**Fout 3: Niet alle gegevens gebruiken**.\nMeestal staan er extra getallen in CSE-vragen die je **niet nodig hebt**. Of je mist juist een belangrijk getal.\n\n**Fout 4: Aanname maken**.\nNeem niet aan dat 'getal 100' = 100% of 100 cm. Lees wat er staat!\n\n**Toets-feitje**:\nBij meerkeuze-vragen kunnen de **foute opties** verleidelijk zijn — ze laten zien wat je krijgt als je een fout maakt *(verkeerde eenheid, opgeteld i.p.v. afgetrokken)*. Dus check 2× voor je een antwoord kiest.\n\n**Tip — lange tekst, korte vraag**:\nVeel CSE-vragen hebben **lange aanloop** (verhaal) en **korte vraag** aan eind. Lees laatste deel eerst om te weten waar je naar zoekt — zoek dan terug in de tekst.",
    svg: stappenSvg(),
    checks: [
      {
        q: "Wat doe je **eerst** bij een wiskunde-vraag?",
        options: ["De vraag twee keer rustig lezen", "Een schatting van het antwoord maken", "De formule op het formuleblad opzoeken", "Een schets van de situatie maken"],
        answer: 0,
        wrongHints: [null, "Schatten is slim, maar wat moet je weten voordat je iets kunt schatten?", "Hoe weet je welke formule je nodig hebt als je de vraag nog niet goed kent?", "Een schets helpt zeker. Maar hoe weet je wat je moet tekenen als je de vraag nog niet goed kent?"],
      },
      {
        q: "Vraag: *'Wat betaalt hij na **30% korting** op €50?'* Wat reken je?",
        options: ["70% van €50 = €35", "30% van €50 = €15", "€50 − €30 = €20", "€50 + €15 = €65"],
        answer: 0,
        wrongHints: [null, "€15 is de korting zelf. Is dat wat hij betaalt, of wat hij bespaart?", "Is 30% korting hetzelfde als €30 korting? Hoeveel is 30% van €50?", "Wordt de prijs door korting hoger of lager?"],
      },
      {
        q: "Waarom **schat** je voor je rekent?",
        options: ["Om je uitkomst er straks mee te vergelijken", "Om sneller klaar te zijn met rekenen", "Om een antwoord klaar te hebben bij tijdnood", "Om te weten welke formule je moet kiezen"],
        answer: 0,
        wrongHints: [null, "Schatten is juist een extra stap. Wat win je ermee, als het geen tijd is?", "Na het schatten reken je de som toch nog precies uit. Waar gebruik je die schatting daarna voor?", "De formule kies je door de vraag goed te lezen. Waar helpt een schatting dan wél bij?"],
      },
      {
        q: "Vraag vraagt **oppervlak in cm²** — wat schrijf je?",
        options: ["Getal + cm²", "Alleen het getal", "Getal + cm", "Getal + m²"],
        answer: 0,
        wrongHints: [null, "Zonder eenheid weet de nakijker niet of je cm², m² of iets anders bedoelt. Wat vraagt de opgave?", "cm is een lengtemaat. Welke eenheid hoort bij een oppervlakte?", "In welke eenheid vraagt de opgave het antwoord? Lees de vraag nog eens."],
      },
      {
        q: "Wat onderstreep je in een examenvraag **als eerste**?",
        options: ["De gegevens en wat er gevraagd wordt", "De moeilijke woorden die je niet kent", "Alle getallen die in de tekst staan", "De zin met het vraagteken erin"],
        answer: 0,
        wrongHints: [null, "Moeilijke woorden zijn lastig, maar heb je die nodig om te kunnen rekenen?", "Examenvragen bevatten vaak getallen die je niet nodig hebt. En waar zie je wat je moet uitrekenen?", "Daar staat wat je moet uitrekenen. Maar met welke informatie ga je dat uitrekenen?"],
      },
      {
        q: "*'Geef je antwoord in 1 decimaal'* — wat betekent **1 decimaal**?",
        options: ["1 cijfer na de komma", "1 cijfer voor de komma", "Afronden op een heel getal", "Afronden op tientallen"],
        answer: 0,
        wrongHints: [null, "Decimalen staan juist ná de komma.", "Bij een heel getal staat er niets achter de komma. Hoeveel cijfers vraagt de opgave daar?", "Tientallen staan vóór de komma. Waar staan decimalen?"],
      },
    ],
  },

  // STAP 2: Schema
  {
    title: "Schema + werkvolgorde",
    explanation:
      "Voor **moeilijke vragen** met veel gegevens — **maak een schema**.\n\n**Soorten schema's**:\n\n**1. Lijst-schema**:\n• Schrijf alle gegevens op een rij.\n• Schrijf wat je zoekt.\n• Voorbeeld:\n```\nGegeven: 4 broden × €2,80\nGegeven: betaalt met €20\nGevraagd: wisselgeld?\n```\n\n**2. Schema-tabel**:\nVoor verhoudingen of vergelijkingen.\nVoorbeeld: *'3 boeken kosten €15. Hoeveel kosten 7 boeken?'*\n```\nboeken | prijs\n  3    |  €15\n  7    |   ?\n```\nVerhouding: ×7/3 → €35.\n\n**3. Tekening**:\nVoor meetkunde — teken altijd.\n• Driehoek met zijden a, b, c.\n• Bal met straal r.\n• Plattegrond met afmetingen.\n\n**4. Stappen-plan**:\nVoor 2-stap-sommen — schrijf elke stap.\nVoorbeeld: *'Korting 25% op €80, daarna nog 10% extra.'*\n```\nStap 1: 25% van €80 = €20 → nieuwe prijs €60\nStap 2: 10% van €60 = €6 → eindprijs €54\n```\n\n**Werkvolgorde — bij sommen**:\n\n**HMVDOA-regel** *(volgorde bewerkingen)*:\n1. **H**aakjes eerst\n2. **M**achten + worteltrekken\n3. **V**ermenigvuldigen + **D**elen *(van links naar rechts)*\n4. **O**ptellen + **A**ftrekken *(van links naar rechts)*\n\n**Voorbeeld**:\n• 3 + 4 × 5 = ?\n• Eerst ×: 4 × 5 = 20.\n• Dan +: 3 + 20 = **23**.\n• Niet (3+4) × 5 = 35 — daarvoor haakjes nodig.\n\n• (3 + 4) × 5 = ?\n• Haakjes eerst: 3+4 = 7.\n• Dan ×: 7 × 5 = **35**.\n\n**Negatieve getallen — pas op**:\n• 5 − (−3) = 5 + 3 = **8**.\n• −2 × 3 = **−6**.\n• −2 × −3 = **6** *(min × min = plus)*.\n• 4 + (−2) = 4 − 2 = **2**.\n\n**Toets-tip — schrijf alles op**:\nNiet uit hoofd doen voor lastige vragen. Op kladpapier:\n• Stap 1: ... = X.\n• Stap 2: X × ... = Y.\n• Antwoord: Y.\n\nDan kun je terugkijken bij controle + corrigeren.\n\n**Niet-essentiële informatie**:\nExamenvragen bevatten soms **extra-info** die niet nodig is.\nBv. 'Mark gaat fietsen om 9:00. Het is 15°C. Hij rijdt 20 km/u. Hoe ver in 30 min?'\n→ 15°C is **niet nodig**. Tijd + snelheid → afstand = 10 km.\n\nLeer extra info **negeren** als die niet bijdraagt.",
    checks: [
      {
        q: "**3 + 4 × 5** = ?",
        options: ["23", "35", "27", "20"],
        answer: 0,
        wrongHints: [null, "Je rekende eerst 3 + 4. Wat gaat in de rekenvolgorde vóór optellen?", "Reken stap voor stap: welk deel van de som doe je als eerste?", "4 × 5 = 20 klopt. Ben je de 3 niet vergeten?"],
      },
      {
        q: "**(3 + 4) × 5** = ?",
        options: ["35", "23", "27", "20"],
        answer: 0,
        wrongHints: [null, "Je rekende eerst 4 × 5. Wat zeggen de haakjes over de volgorde?", "Wat staat er tussen de haakjes, en wat doe je daarna met de 5?", "4 × 5 = 20, maar de 3 hoort ook bij de haakjes. Wat doe je daarmee?"],
      },
      {
        q: "**5 − (−3)** = ?",
        options: ["8", "2", "−8", "−2"],
        answer: 0,
        wrongHints: [null, "Je deed 5 − 3. Wat gebeurt er als je een negatief getal aftrekt?", "Begin bij 5 op de getallenlijn. Ga je bij − (−3) naar links of naar rechts?", "Je begon bij −5 of bij 3. Met welk getal begint de som?"],
      },
      {
        q: "**−2 × −3** = ?",
        options: ["6", "−6", "5", "−5"],
        answer: 0,
        wrongHints: [null, "Tel de mintekens. Wat is de regel voor min keer min?", "Je hebt 2 en 3 opgeteld. Staat er plus of keer?", "Je hebt −2 en −3 opgeteld. Staat er plus of keer?"],
      },
      {
        q: "Bij **rekensom met haakjes**: wat doe je **eerst**?",
        options: ["Wat tussen de haakjes staat", "Eerst alle vermenigvuldigingen", "Eerst alle delingen", "Gewoon van links naar rechts"],
        answer: 0,
        wrongHints: [null, "Vermenigvuldigen gaat vóór optellen — maar krijgt iets anders in de som niet áltijd de allerhoogste voorrang?", "Delen doe je tegelijk met vermenigvuldigen — maar er is iets dat nog eerder aan de beurt is. Wat springt eruit?", "Van links naar rechts werk je bij bewerkingen die even sterk zijn. Is er iets in de som dat voorrang krijgt?"],
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
      "Op CSE Wiskunde mag je **rekenmachine** gebruiken. **Slim** gebruiken bespaart tijd + voorkomt fouten.\n\n**Wanneer rekenmachine?**\n• Lange getallen *(>3 cijfers)*.\n• Decimalen / breuken.\n• Wortels, machten *(2²⁵ etc.)*.\n• Goniometrie *(sin/cos/tan)*.\n\n**Wanneer NIET rekenmachine?**\n• Eenvoudige tafels *(7 × 8)*. Sneller in hoofd.\n• Schatten *(check of antwoord klopt)*.\n• Optellen / aftrekken van ronde getallen.\n\n**Volgorde-bewerking op rekenmachine**:\n• **Wetenschappelijke rekenmachine** *(Casio, Texas)* doet automatisch volgorde-bewerkingen.\n• Voer in: `3 + 4 × 5` → krijgt `23` (niet 35).\n• Bij **simpele rekenmachine** *(huis-tuin-keuken)* moet je zelf volgorde regelen.\n\n**Haakjes gebruiken** op rekenmachine:\n• Bij breuken: `(3 + 4) / (5 + 6)`. Anders gaat het fout.\n• Bij delingen met meerdere termen.\n\n**Veelvoorkomende rekenmachine-fouten**:\n\n**Fout 1: Komma vs punt**.\nEen rekenmachine gebruikt óf een komma óf een punt als decimaalteken. Check wat jouw apparaat doet.\n\n**Fout 2: Procent-knop**.\nDe **%-knop** werkt anders op verschillende rekenmachines:\n• Sommige: `30 × 25%` = 7,5 *(direct)*.\n• Andere: `30 × 25 %` = vraagt nog operator.\nVeiliger: gebruik **× 0,25** voor 25%.\n\n**Fout 3: Min-teken vs aftrekken**.\n• `5 - 3` = 2 (aftrekken).\n• `5 (-3)` of `5 × (-3)` = -15.\nLet op de **(-)**-knop *(negatief)* vs **−**-knop *(aftrekken)*.\n\n**Fout 4: Vergeten gewijzigde modus**.\n• **Goniometrie**: degree (graden) vs radian (radialen). CSE: meestal **degree**. Stel je rekenmachine vooraf in!\n• **Display**: float vs exact (breuk). Voor CSE: **float** (decimaal) is meestal goed.\n\n**Handige knoppen**:\n• **EXP** of **× 10ˣ** — voor wetenschappelijke notatie.\n• **^** of **xʸ** — voor machten.\n• **√** — wortels.\n• **Ans** — vorig antwoord (bv. `Ans + 5`).\n• **M+** / **M-** / **MR** — geheugen.\n\n**Toets-tip — bewaar tussen-stappen**:\nVoor lange berekeningen: schrijf tussen-resultaten op papier op. Niet alleen in rekenmachine. Dan kun je later checken.\n\n**Bv. som van 4 dingen**:\n• Stap 1: 3 × €4,75 = €14,25 *(schrijf op)*.\n• Stap 2: €14,25 + €8,40 = €22,65 *(schrijf op)*.\n• Etc.\n\n**Foute knoppen vermijden**:\nKlein scherm + dunne knoppen. Druk **rustig**. **Check** scherm voor je verder gaat.\n\n**Op CSE wiskunde-A vs B**:\n• **Wiskunde A** *(HAVO/VWO)*: rekenmachine voor statistiek + functies.\n• **Wiskunde B**: ook voor goniometrie + meetkunde.\n• **Wiskunde C/D**: anders. \n\n**Toets-test**:\n*'Wat is √324?'*\n→ Rekenmachine: 18 *(meteen)*.\n→ In hoofd: 18² = 324 *(als je 't toevallig kent)*. Anders rekenmachine.\n\n*'Hoeveel is 12% van €350?'*\n→ Rekenmachine: 0,12 × 350 = €42.",
    checks: [
      {
        q: "Wanneer is **rekenmachine NIET nodig**?",
        options: ["Een tafelsom zoals 7 × 8", "Een procent zoals 12% van €350", "Een wortel zoals √324", "Een sinus zoals sin(35°)"],
        answer: 0,
        wrongHints: [null, "Kun je 0,12 × 350 zeker foutloos uit je hoofd, ook onder examendruk? Wat is dan het veiligst?", "Weet je zeker welk getal keer zichzelf 324 is? Waarmee controleer je dat snel?", "Ken jij sin(35°) uit je hoofd? Waarmee reken je een sinus uit?"],
      },
      {
        q: "Veiligste manier om **25% van X** te rekenen?",
        options: ["× 0,25", "× 25%", "× 25", "÷ 0,25"],
        answer: 0,
        wrongHints: [null, "De %-knop werkt niet op elke rekenmachine hetzelfde. Welke manier geeft altijd hetzelfde antwoord?", "Dat maakt het getal 25 keer zo groot — procent betekent 'per honderd'.", "Delen door 0,25 maakt het getal 4 keer zo groot. Kan 25% van X groter zijn dan X?"],
      },
      {
        q: "Bij goniometrie op rekenmachine — welke modus?",
        options: ["Degree (graden)", "Radian (radialen)", "Float", "Modus maakt niet uit"],
        answer: 0,
        wrongHints: [null, "Radialen gebruik je pas bij hogere wiskunde. In welke eenheid staan de hoeken in een vmbo-opgave?", "Float bepaalt alleen hoeveel cijfers je op het scherm ziet. Welke instelling gaat over hoeken?", "Probeer sin(30) in twee verschillende standen. Krijg je hetzelfde antwoord?"],
      },
      {
        q: "Wat doe je met **tussenstappen** in lange berekening?",
        options: ["Elk tussenresultaat op papier zetten", "Opslaan in het geheugen met M+", "Met de Ans-knop direct doorrekenen", "Aan het eind alles netjes noteren"],
        answer: 0,
        wrongHints: [null, "Het geheugen is handig, maar kan de nakijker zien wat erin stond? En als je één keer verkeerd drukt?", "Ans onthoudt alleen het laatste antwoord. Hoe controleer je later je tussenstappen?", "Weet je aan het eind nog precies welke getallen je onderweg had?"],
      },
      {
        q: "De **DEL**-knop (wissen) op een rekenmachine wist ___?",
        options: ["Het laatst ingevoerde teken", "De hele som op het scherm", "Het opgeslagen geheugen", "Het laatste antwoord (Ans)"],
        answer: 0,
        wrongHints: [null, "Daarvoor gebruik je de knop AC of C. DEL werkt kleiner.", "Daarvoor is een aparte geheugenknop, zoals M-clear.", "Het vorige antwoord blijft bewaard onder Ans. Wat verdwijnt er bij DEL van je scherm?"],
      },
      {
        q: "Bij **wortel-berekening** op de calculator: druk je eerst √ of getal?",
        options: ["Verschilt per model: vooraf uitproberen", "Maakt niet uit, het antwoord is gelijk", "Eerst het getal, daarna de wortelknop", "Eerst de wortelknop, daarna het getal"],
        answer: 0,
        wrongHints: [null, "Een verkeerde volgorde geeft een foutmelding of een ander getal. Hoe voorkom je dat?", "Werkt elke rekenmachine op dezelfde manier? Hoe weet je wat jouw model wil?", "Werkt elke rekenmachine op dezelfde manier? Hoe weet je wat jouw model wil?"],
      },
    ],
  },

  // STAP 4: Top-onderwerpen
  {
    title: "Top-onderwerpen CSE wiskunde VMBO",
    explanation:
      "Op het **CSE Wiskunde VMBO-GT** komen vrijwel altijd deze onderwerpen — kennen!\n\n**Top-10 onderwerpen** *(globaal)*:\n\n**1. Procenten** 📊\n• Korting, btw, rente.\n• % van X = X × 0,Y.\n• Stijging / daling in % berekenen.\n→ Zie pad **procenten** + **procenten-po**.\n\n**2. Verhoudingen + schaal** 📏\n• Verhouding 3 : 5.\n• Schaal 1 : 50.000 op kaart.\n• Recept-verhoudingen.\n→ Zie **verhoudingen** + **kaartlezen-po**.\n\n**3. Vlakke figuren** ⬜🔺⭕\n• Omtrek + oppervlakte van rechthoek, driehoek, cirkel.\n• Omtrek rechthoek = 2(l+b). Opp = l×b.\n• Opp driehoek = ½ × basis × hoogte.\n• Cirkel: omtrek = π × d. Opp = π × r².\n→ Zie **vlakke-figuren** + **vlakke-figuren-po**.\n\n**4. Ruimtelijke figuren / volume** 📦\n• Kubus: V = z³.\n• Balk: V = l × b × h.\n• Cilinder: V = π × r² × h.\n• Inhoudsmaten omrekenen *(cm³ ↔ L ↔ m³)*.\n→ Zie **ruimtemeetkunde** + **meetkunde-bouwsels**.\n\n**5. Pythagoras** ⏹️\n• a² + b² = c² *(in rechthoekige driehoek)*.\n• c = √(a² + b²).\n→ Zie **pythagoras**.\n\n**6. Functies + grafieken** 📈\n• Lineaire functie: y = ax + b.\n• Parabool: y = ax² + bx + c.\n• Aflezen + tekenen.\n→ Zie **lineaire-formules** + **parabolen**.\n\n**7. Vergelijkingen oplossen** 🟰\n• Een onbekende: 2x + 5 = 13 → x = 4.\n• Twee onbekenden (stelsels).\n• Kwadratische vergelijkingen.\n→ Zie **vergelijkingen-oplossen** + **stelsels** + **kwadratische-vergelijkingen**.\n\n**8. Tabellen + grafieken lezen** 📊\n• Aflezen, verschil, totaal, gemiddelde.\n• Cirkeldiagram, staaf, lijngrafiek.\n→ Zie **tabellen-grafieken** + **grafieken-lezen-po**.\n\n**9. Goniometrie (VMBO-GT; bij havo/vwo vooral wiskunde B)** 📐\n• sin, cos, tan in rechthoekige driehoek.\n• SOS-CAS-TOA-ezelsbrug.\n→ Zie **goniometrie**.\n\n**10. Statistiek + kans** 🎲\n• Gemiddelde, modus, mediaan.\n• Kans = gunstig / mogelijk.\n• Boxplot lezen.\n→ Zie **statistiek** + **gemiddelden-statistiek-po** + **kansrekening**.\n\n**Op welk niveau?**\n\n**VMBO-BB**: vooral 1-5 (procenten, verhouding, vorm).\n**VMBO-KB**: voegt toe 6 + 7 (eenvoudige functies + vergelijkingen).\n**VMBO-GT (T)**: voegt toe 8, 9 + 10 (grafieken, goniometrie + statistiek).\n**HAVO**: + meer goniometrie + meer functies.\n**VWO**: + meer goniometrie + algebra + analyse.\n\n**Hoe oefen je dit?**\n• Doe **oude examens** *(via examenblad.nl — gratis)*.\n• Voor elk onderwerp: **5-10 vragen** doen.\n• Markeer waar je fout maakt → herhaal die.\n\n**Tip — CSE-onderwerp herkennen**:\nIn de vraag staan **trigger-woorden** voor het onderwerp:\n• 'Korting / rente' → procenten.\n• 'Schaal' → verhouding.\n• 'Oppervlakte / omtrek' → vlakke figuren.\n• 'Volume / inhoud' → ruimtemeetkunde.\n• 'Driehoek + 90°' → Pythagoras of goniometrie.\n• 'Grafiek toont ...' → functies / aflezen.\n• 'Welke ...?' → vergelijking oplossen.\n• 'Gemiddelde / verdeling' → statistiek.\n\n**Toets-strategie**:\n• **Easy first**: doe makkelijke onderwerpen *(procenten, schaal, vorm)* eerst om punten te scoren.\n• **Niet vastlopen** op 1 lastige.\n• **Punten tellen**: niet alle vragen zijn evenveel waard. Doe de hoogwaardige eerst.",
    checks: [
      {
        q: "**Pythagoras** geldt voor welke driehoek?",
        options: ["Rechthoekige", "Gelijkzijdige", "Stompe", "Elke driehoek"],
        answer: 0,
        wrongHints: [null, "Bij een gelijkzijdige driehoek zijn alle zijden even lang. Klopt a² + b² = c² dan?", "Bij een stompe hoek is de langste zijde te lang voor a² + b² = c². Welke hoek moet er in de driehoek zitten?", "Probeer een gelijkzijdige driehoek met zijden 1: is 1² + 1² gelijk aan 1²?"],
      },
      {
        q: "Formule oppervlakte **driehoek**?",
        options: ["½ × basis × hoogte", "basis × hoogte", "π × r²", "2(l + b)"],
        answer: 0,
        wrongHints: [null, "basis × hoogte is de oppervlakte van een rechthoek. Welk deel van die rechthoek is de driehoek?", "π × r² hoort bij een figuur met een straal. Heeft een driehoek een straal?", "2(l + b) is de omtrek van een rechthoek. Vraagt de opgave om een omtrek of een oppervlakte?"],
      },
      {
        q: "Formule volume **kubus** met zijde z?",
        options: ["z³", "z²", "6 × z²", "z"],
        answer: 0,
        wrongHints: [null, "z² is de oppervlakte van één zijvlak. Is inhoud een plat vlak of een ruimte?", "6 × z² is de oppervlakte van alle zes vlakken samen. Vraagt de opgave om de buitenkant of om wat erin past?", "z is alleen de lengte van één ribbe. In hoeveel richtingen heeft een kubus een maat?"],
      },
      {
        q: "Welk **trigger-woord** wijst op procenten-vraag?",
        options: ["rente", "wisselgeld", "schaal", "gemiddelde"],
        answer: 0,
        wrongHints: [null, "Bij wisselgeld trek je de prijs af van wat je betaalt. Reken je daarbij met procenten?", "Schaal is een verhouding, zoals 1 : 100 op een kaart. Bij welk woord reken je met een deel van honderd?", "Een gemiddelde reken je met optellen en delen door het aantal. Welk woord gaat over een deel van honderd?"],
      },
      {
        q: "Formule **oppervlakte rechthoek** (l = lengte, b = breedte)?",
        options: ["l × b", "l + b", "2 × (l + b)", "l²"],
        answer: 0,
        wrongHints: [null, "l + b is lengte plus breedte. Hoeveel vakjes van 1 bij 1 passen er in een rechthoek van 3 bij 2?", "2 × (l + b) is de lengte van de rand: de omtrek. Vraagt de opgave om de rand of om de vlakte?", "l² werkt alleen als lengte en breedte gelijk zijn. Is elke rechthoek een vierkant?"],
      },
      {
        q: "**Schaal 1:1000**, 5 cm op kaart = werkelijk in **meter**?",
        options: ["50 m", "5 m", "500 m", "5 km"],
        answer: 0,
        wrongHints: [null, "5 cm × 1000 = 5000 cm. Hoeveel centimeter zitten er in 1 meter?", "Je deelde 5000 cm door 10. Hoeveel centimeter zitten er in 1 meter?", "5 km is 5000 m. Heb je 5000 cm per ongeluk als meter gelezen?"],
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
      "CSE Wiskunde VMBO duurt meestal **120 minuten** *(2 uur)* met **30-40 vragen**. Dat is ongeveer **3 min per vraag**.\n\n**Tijd-plan** *(uit het hoofd!)*:\n\n**0-5 min: Overzicht**\n• Blader rustig door alle vragen.\n• Welke zijn makkelijk *(jou bekend onderwerp)*?\n• Welke zijn lastiger?\n• Schat globaal: hoeveel tijd per vraag?\n\n**5-100 min: Werken**\n• **Makkelijkste eerst** — punten scoren.\n• Per vraag: **lees → reken → controleer**.\n• **Vastloper na 5 min?** → markeer + verder. Kom later terug.\n• **Niet alle vragen** halen is OK — beter 80% goed dan 100% haastig.\n\n**100-115 min: Lastige + controle**\n• Terug naar gemarkeerde vragen.\n• Probeer wat je kunt.\n• **Vul iets in** bij meerkeuze *(beter gokken dan leeg)*.\n\n**115-120 min: Eindcheck**\n• Loop alle antwoorden door.\n• Eenheid? Grootte? Plausibel?\n• Heb je alle vragen?\n\n**Per vraag — tijd-strategie**:\n\n**Vraag is binnen 30 sec klaar?** ✓ Doe meteen.\n**Vraag duurt 2-3 min?** → Normaal doen.\n**Vraag duurt >5 min**? → Markeer + verder.\n\n**Tips bij vastlopen**:\n\n**1. Verkeerd onderwerp gekozen?**\nMisschien is het géén Pythagoras maar verhouding. Heroverweeg.\n\n**2. Gemist gegeven?**\nLees de hele vraag opnieuw. Is er een getal dat je niet hebt gebruikt?\n\n**3. Formule niet zeker?**\nGebruik wat je wel kent + schat in.\n\n**4. Probeer terugwerken**:\nKijk naar antwoord-opties *(als meerkeuze)*. Welk antwoord past?\n\n**5. Volgende!**\nNiet 10 min op 1 vraag. Ga verder. Kom later terug.\n\n**Niet doen op examen**:\n\n**❌ Lang twijfelen** zonder reden.\n**❌ Helemaal niet invullen** bij meerkeuze *(altijd iets gokken)*.\n**❌ Geen tijd voor controle** *(reserveer minimaal 5 min)*.\n**❌ Eten/drinken** in zaal (niet toegestaan, behalve water).\n**❌ Spieken** bij anderen (uitsluiting van het examen).\n\n**Wel doen**:\n\n**✅ Tussendoor diep ademhalen** als je gestrest raakt.\n**✅ Klok in de gaten** houden *(niet alleen aan einde)*.\n**✅ Schrijf met potlood** voor wijzigingen *(niet alle examens — check)*.\n**✅ Vraag toezicht** als iets onduidelijk is *(bv. een typo in vraag)*.\n\n**Slaap goed dag ervoor**:\n• 8 uur slaap belangrijker dan laatste-minuut-leren.\n• Geen energy drinks 's avonds.\n• Niet panikeren — je weet meer dan je denkt.\n\n**Verlichting bij stress**:\n• Diep ademhalen *(4-7-8: in 4 sec, vasthouden 7, uit 8)*.\n• Sla vraag over + kom later terug — eerst makkelijk werk.\n• Drink water.\n• Realiseer: dit is **1 examen**, niet je hele leven.\n\n**Toets-feitje**:\nNa een lastige vraag is **schakelen naar makkelijke** vraag bewezen effectief voor het brein. Verkort frustratie en geeft weer **gevoel van succes**.",
    checks: [
      {
        q: "CSE Wiskunde VMBO duurt **hoe lang**?",
        options: ["120 min", "60 min", "180 min", "30 min"],
        answer: 0,
        wrongHints: [null, "Reken met ongeveer 3 minuten per vraag en 30 à 40 vragen. Hoe lang duurt het examen dan ongeveer?", "Drie uur is lang voor een examen van 30 à 40 vragen. Reken met ongeveer 3 minuten per vraag.", "Een half uur voor 30 à 40 vragen? Hoeveel tijd per vraag zou dat zijn?"],
      },
      {
        q: "Wat doe je bij **5+ min op 1 vraag vastlopen**?",
        options: ["Markeren, doorgaan en later terugkomen", "Nog even doorzetten, je bent al ver", "Een gok invullen en verder gaan", "Rustig ademhalen en opnieuw proberen"],
        answer: 0,
        wrongHints: [null, "Er wachten nog veel andere vragen. Wat kun je in die minuten ook doen?", "Een gok kan altijd nog aan het eind. Weet je zeker dat je hem later niet alsnog kunt oplossen?", "Ademhalen helpt tegen stress. Maar wat gebeurt er met je tijd als je dezelfde vraag blijft proberen?"],
      },
      {
        q: "Bij **meerkeuze** en niet zeker — wat doe je?",
        options: ["Foute opties wegstrepen en dan kiezen", "Je allereerste ingeving aankruisen", "Leeg laten, want fout kost punten", "Kiezen wat vaak goed is, zoals C"],
        answer: 0,
        wrongHints: [null, "Foute opties zijn vaak expres verleidelijk gemaakt. Hoe vergroot je je kans voordat je kiest?", "Krijg je bij meerkeuze strafpunten voor een fout antwoord? Wat levert een lege vraag op?", "Examenmakers verdelen de goede antwoorden over A, B, C en D. Heb je dan iets aan een vaste letter?"],
      },
      {
        q: "Wat doe je in de laatste **5 minuten**?",
        options: ["Al je antwoorden nog eens nalopen", "Een gemarkeerde lastige vraag afmaken", "Je kladwerk netjes overschrijven", "Nog een nieuwe opgave beginnen"],
        answer: 0,
        wrongHints: [null, "Een lastige vraag kost vaak meer dan 5 minuten. Wat levert in die laatste minuten zeker iets op?", "Netjes schrijven levert geen extra punten op. Waarmee voorkom je nog puntenverlies?", "Lukt een hele nieuwe opgave in 5 minuten? Wat levert in die tijd meer op?"],
      },
      {
        q: "Een vraag is van **3 punten** en je hebt **120 min voor 60 punten** — gem **per punt**?",
        options: ["2 min", "1 min", "5 min", "30 sec"],
        answer: 0,
        wrongHints: [null, "Reken het uit: 120 minuten gedeeld door 60 punten. Komt daar 1 uit?", "5 minuten per punt keer 60 punten is 300 minuten. Past dat in 120 minuten?", "30 seconden per punt keer 60 punten is 30 minuten. Wat doe je dan met de rest van de tijd?"],
      },
      {
        q: "**Halverwege examen** moet je ongeveer ___ van vragen klaar hebben?",
        options: ["Helft", "Kwart", "Driekwart", "Een derde"],
        answer: 0,
        wrongHints: [null, "Met een kwart halverwege heb je straks te weinig tijd over. Hoe verdeel je de tijd eerlijk?", "Driekwart halverwege is erg snel. Werk je dan nog zorgvuldig?", "Met een derde halverwege loop je achter. Hoeveel blijft er dan over voor de tweede helft?"],
      },
    ],
  },

  // STAP 6: Eindchecklist
  {
    title: "Eindchecklist + CSE-mix",
    explanation:
      "**Voor + na examen** — checklist.\n\n**Dag ervoor** *(uit het hoofd!)*:\n• ✅ Slaap 8 uur.\n• ✅ Gezond eten, geen energy-drinks.\n• ✅ Spullen klaar: identiteitsbewijs, pen, potlood, gum, rekenmachine *(check batterij)*, formules-blad (als toegestaan), water.\n• ✅ Geen all-nighter leren — verlies van slaap = verlies van scherpte.\n\n**Op de dag**:\n• ✅ Tijd genoeg om er te zijn (geen stress-haast).\n• ✅ Ontbijt — energie nodig.\n• ✅ Toiletbezoek vooraf.\n• ✅ Rustmomentje 5 min voor je begint.\n\n**Tijdens examen**:\n• ✅ Eerst alle vragen scannen.\n• ✅ Makkelijke eerst.\n• ✅ Tijd in de gaten.\n• ✅ Lastige vraag markeren, niet vastzitten.\n• ✅ Antwoord met eenheid.\n• ✅ Eindcheck — eenheid? Grootte? Alle vragen ingevuld?\n\n**Na examen**:\n• ✅ Niet vergelijken met klasgenoten — onnodige stress.\n• ✅ Niet meteen 'rechtbank' over fouten — neem afstand.\n• ✅ Volgend examen voorbereiden.\n\n**Mentaal**:\n• ✅ Geloof in jezelf — je hebt veel geleerd.\n• ✅ Foutje? OK, ga door.\n• ✅ Diep ademhalen bij stress.\n\n**Mix-vragen — algemene CSE-strategie**:\nDeze mix test of je weet **wat je moet doen** bij verschillende soorten vragen.",
    checks: [
      {
        q: "**Dag voor examen** — wat is belangrijkst?",
        options: ["Op tijd naar bed en goed slapen", "Alle stof nog een keer doornemen", "Nog een oud examen helemaal maken", "De formules nog eens uit je hoofd leren"],
        answer: 0,
        wrongHints: [null, "Herhalen helpt, maar wat als het daardoor laat wordt? Wat zegt de les over laatste-minuut-leren?", "Een heel examen kost twee uur en veel energie. Hoe fit ben je daarna nog voor de echte dag?", "Veel formules krijg je op het formuleblad. Wat heb je de volgende dag harder nodig dan nog één formule?"],
      },
      {
        q: "Tijd-strategie tijdens examen?",
        options: ["Makkelijke eerst, lastige later", "De volgorde van het examen aanhouden", "Lastige eerst, nu je nog fris bent", "Per vraag een vaste 3 minuten nemen"],
        answer: 0,
        wrongHints: [null, "Wat gebeurt er met je tijd als je vroeg in het examen op een vastloper stuit?", "Wat gebeurt er met je tijd en je zelfvertrouwen als je meteen vastloopt op een lastige vraag?", "Sommige vragen zijn in 30 seconden klaar, andere duren langer. Is een vaste tijd per vraag dan handig?"],
      },
      {
        q: "Welk **trigger-woord** = vlakke figuren?",
        options: ["Oppervlakte / omtrek", "Procent / korting", "Volume / inhoud", "Gemiddelde / mediaan"],
        answer: 0,
        wrongHints: [null, "Korting en procent horen bij geldsommen. Waar gaat een vlakke figuur over?", "Volume en inhoud horen bij ruimtefiguren, zoals een doos. Wat meet je bij een plat figuur?", "Dat zijn woorden uit de statistiek. Wat meet je bij een plat figuur?"],
      },
      {
        q: "**Pythagoras**-vraag heeft welk woord?",
        options: ["Rechthoekige driehoek", "Straal van een cirkel", "Gelijkzijdige driehoek", "Inhoud van een balk"],
        answer: 0,
        wrongHints: [null, "Bij een cirkel reken je met π, niet met a² + b² = c².", "Bij een gelijkzijdige driehoek zijn alle zijden gelijk. Klopt a² + b² = c² dan?", "De inhoud van een balk is lengte × breedte × hoogte. Waar gebruik je a² + b² = c² voor?"],
      },
      {
        q: "Wat reserveer je voor **eindcheck**?",
        options: ["Laatste ~5 min", "Laatste ~30 min", "Laatste ~1 min", "De eerste ~5 min"],
        answer: 0,
        wrongHints: [null, "Een half uur controleren? Dan heb je te weinig tijd om de vragen te maken.", "Lukt het om in 1 minuut al je antwoorden na te lopen?", "De eerste minuten gebruik je voor een overzicht. Kun je dan al antwoorden controleren?"],
      },
      {
        q: "Bij **vastlopen** op 1 vraag — wat doe je?",
        options: ["Markeren, verder en later terugkomen", "Blijven proberen, je bent al ver", "Meteen een gok invullen en verder", "Overslaan en hem leeg laten"],
        answer: 0,
        wrongHints: [null, "Hoeveel andere vragen had je in die tijd kunnen maken?", "Gokken kan altijd nog aan het eind. Weet je zeker dat je hem straks niet alsnog snapt?", "Een lege vraag levert zeker geen punten op. Wat kun je aan het eind nog met deze vraag doen?"],
      },
      {
        q: "**Wat neem je mee** naar het CSE wiskunde-examen (VMBO)?",
        options: ["Rekenmachine, geodriehoek en pen", "Grafische rekenmachine, geodriehoek en pen", "Rekenmachine, eigen formulekaart en pen", "Rekenmachine, geodriehoek en smartwatch"],
        answer: 0,
        wrongHints: [null, "Is elke soort rekenmachine toegestaan bij het vmbo-examen?", "Mag je eigen aantekeningen meenemen? Waar komen de formules op het examen vandaan?", "Een smartwatch kan berichten ontvangen. Mag dat mee de examenzaal in?"],
      },
      {
        q: "Op het examen mag je **geen grafische rekenmachine** voor VMBO. Wat dan wel?",
        options: ["Een losse wetenschappelijke rekenmachine", "Rekenapp op je telefoon in vliegtuigmodus", "Rekenmachine op een laptop zonder internet", "Een rekenmachine met eigen notities erin"],
        answer: 0,
        wrongHints: [null, "Ook in vliegtuigmodus blijft het een telefoon. Mag een telefoon mee de examenzaal in?", "Een laptop mag niet mee bij een examen op papier, ook niet zonder internet. Welk apparaat mag wel?", "Eigen aantekeningen meenemen is spieken, ook als ze in een apparaat staan. Mag dat?"],
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
