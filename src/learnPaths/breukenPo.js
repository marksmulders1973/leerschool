// Leerpad: Breuken — voor groep 5-8 (PO-versie)
// 7 stappen in 5 hoofdstukken. Cito-stijl praktijksommen.
// Sprint-5+ S4 (2026-05-08).

const COLORS = {
  curve: "#00c853",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  pizza1: "#ffaa30",
  pizza2: "#ff7043",
};

const stepEmojis = ["🍕","➗","🟰","➕","✖️","🛒","🏆"];

const chapters = [
  { letter: "A", title: "Wat is een breuk?", emoji: "🍕", from: 0, to: 1 },
  { letter: "B", title: "Vereenvoudigen + gelijke breuken", emoji: "🟰", from: 2, to: 2 },
  { letter: "C", title: "Optellen en aftrekken", emoji: "➕", from: 3, to: 4 },
  { letter: "D", title: "Vermenigvuldigen + praktijk", emoji: "🛒", from: 5, to: 5 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 6, to: 6 },
];

function pizzaSvg(teller, noemer, kleur, label) {
  const cx = 100, cy = 100, r = 70;
  const stukken = [];
  for (let i = 0; i < noemer; i++) {
    const a1 = (i / noemer) * Math.PI * 2 - Math.PI / 2;
    const a2 = ((i + 1) / noemer) * Math.PI * 2 - Math.PI / 2;
    const x1 = cx + Math.cos(a1) * r;
    const y1 = cy + Math.sin(a1) * r;
    const x2 = cx + Math.cos(a2) * r;
    const y2 = cy + Math.sin(a2) * r;
    const fill = i < teller ? kleur : "rgba(255,255,255,0.05)";
    stukken.push(`<path d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z" fill="${fill}" stroke="${COLORS.curve}" stroke-width="1.5"/>`);
  }
  return `<svg viewBox="0 0 200 220">
<rect x="0" y="0" width="200" height="220" fill="${COLORS.paper}"/>
${stukken.join("")}
<text x="100" y="195" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">${teller}/${noemer}</text>
<text x="100" y="212" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">${label}</text>
</svg>`;
}

const steps = [
  {
    title: "Wat is een breuk?",
    explanation: "Een **breuk** is een **deel van iets**. Stel je hebt een pizza die je in 4 gelijke stukken snijdt. Eet je 1 stuk? Dan eet je **1/4** van de pizza. Eet je 3 stukken? Dan eet je **3/4**.\n\n**Notatie**: een breuk heeft 2 getallen:\n• **Bovenkant** = **teller** *(hoeveel stukken neem je?)*\n• **Onderkant** = **noemer** *(in hoeveel gelijke stukken is het verdeeld?)*\n\nDus **3/4**: noemer = 4 stukken totaal, teller = 3 stukken die je hebt.\n\n**Sleutel-breuken om te kennen** (basis voor alle Cito-vragen):\n• 1/2 = de helft\n• 1/3 = een derde\n• 1/4 = een kwart (een vierde)\n• 1/5 = een vijfde\n• 1/10 = een tiende\n\n**Breuk versus heel getal**:\n• 4/4 = 4 van 4 stukken = **alles** = 1.\n• 6/3 = 6 van 3 stukken = **2 hele dingen**.\n• 5/2 = 5 van 2 = **2½** (twee-en-een-half).\n\n**Echte breuken**: teller < noemer (kleiner dan 1 geheel).\n**Onechte breuken**: teller ≥ noemer (1 geheel of meer).\n\n**Praktijk**:\n• ½ uur = 30 minuten\n• ¼ pak meel = 250 g uit 1 kg pak\n• ⅔ van de klas = 20 leerlingen uit 30",
    svg: pizzaSvg(3, 4, COLORS.pizza1, "drie kwart pizza"),
    checks: [
      {
        q: "**3/8** van een pizza — welke pizza is **niet opgegeten**?",
        options: ["5/8","3/8","8/8","1/8"],
        answer: 0,
        wrongHints: [null,"Dat is wat opgegeten is — vraag is 't tegenovergestelde.","8/8 = alles. Hoe kan dat als al 3/8 op is?","Te weinig — als 3/8 op is, blijft er meer over."],
      },
      {
        q: "Welke breuk is **groter dan 1**?",
        options: ["7/4","3/4","1/2","4/4"],
        answer: 0,
        wrongHints: [null,"Kleiner dan 1 — teller < noemer.","Veel kleiner dan 1.","Precies 1 — niet groter."],
      },
      {
        q: "Bij een pizza in **6 stukken** eet je **4**. Welke **breuk** is dat?",
        options: ["4/6","6/4","4/10","2/3"],
        answer: 0,
        wrongHints: [null,"Andersom — teller is wat je eet (4), noemer is totaal (6).","Niet optellen — de noemer is alleen het totaal stukken (6).","Klopt vereenvoudigd, maar de eerste optie is letterlijk wat de vraag zegt."],
      },
    ],
  },

  {
    title: "Soorten breuken — woorden",
    explanation: "Voor Cito moet je breuken in woorden kunnen lezen.\n\n**Standaard-namen**:\n• 1/2 = **half**\n• 1/3 = **derde**\n• 1/4 = **kwart** *(of 'vierde')*\n• 1/5 = **vijfde**\n• 1/10 = **tiende**\n• 1/100 = **honderdste**\n\n**Combinaties**:\n• 2/3 = **twee-derde**\n• 3/4 = **drie-kwart**\n• 5/8 = **vijf-achtste**\n\n**Hele getallen + breuk** *(gemengde breuk)*:\n• 1½ = **één-en-een-half**\n• 2¼ = **twee-en-een-kwart**\n• 3⅓ = **drie-en-een-derde**\n\n**Cito-truc — woorden vertalen naar getallen**:\n*'Drie kwart van de leerlingen'* = **3/4 van het totaal**.\n*'Twee derde van de pizza'* = **2/3 van de pizza**.\n*'Een halve liter'* = **0,5 L** = **1/2 L**.\n\n**Praktijk-equivalenten**:\n• 1/2 uur = 30 minuten\n• 1/4 uur = 15 minuten\n• 3/4 uur = 45 minuten\n• 1/2 kg = 500 g\n• 1/4 kg = 250 g\n• 1/2 L = 500 mL\n• 1/4 L = 250 mL",
    checks: [
      {
        q: "**Een halve liter** = ?",
        options: ["500 mL","100 mL","250 mL","1000 mL"],
        answer: 0,
        wrongHints: [null,"Te weinig — half betekent de helft van 1 L.","Te weinig — dat is een kwart liter.","Dat is een hele liter."],
      },
      {
        q: "**Twee-derde uur** = ? minuten?",
        options: ["40","30","45","20"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is een halve uur.","Te veel — dat is drie-kwart uur.","Te weinig — dat is een derde uur."],
      },
      {
        q: "**Drie-kwart van de klas** in een klas van **24** — hoeveel?",
        options: ["18","6","12","20"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is een kwart.","Te weinig — dat is de helft.","Te veel."],
      },
    ],
  },

  {
    title: "Vereenvoudigen + gelijke breuken",
    explanation: "Veel breuken zien er **anders uit** maar zijn **gelijk**. Net als verhoudingen kun je breuken **vereenvoudigen**.\n\n**Voorbeelden van gelijke breuken**:\n• 1/2 = 2/4 = 3/6 = 4/8 = 50/100\n• 1/3 = 2/6 = 3/9 = 4/12\n• 2/4 = 1/2 *(door 2 vereenvoudigd)*\n• 6/8 = 3/4 *(door 2 vereenvoudigd)*\n• 4/12 = 1/3 *(door 4 vereenvoudigd)*\n\n**Truc**: deel teller én noemer door hetzelfde getal.\n\n• **6/9** → ÷ 3 → **2/3**\n• **8/12** → ÷ 4 → **2/3**\n• **15/20** → ÷ 5 → **3/4**\n• **10/100** → ÷ 10 → **1/10**\n\n**Cito-tip**:\nKijk altijd naar de **grootste gemeenschappelijke deler**. Dat scheelt stappen.\n\n**Voorbeeld**: 12/18.\n• Beide deelbaar door 2 → 6/9.\n• Beide deelbaar door 3 → 2/3. *(eindresultaat)*\n\nOf in één stap: beide deelbaar door 6 → 2/3.\n\n**Veel-voorkomende fout**:\nAlleen teller of alleen noemer delen. Dan klopt de breuk niet meer. Doe altijd **beide**.\n\n**Pittige Cito-vraag**: *'Welke breuk is gelijk aan 4/6?'* Antwoorden zoals 2/3, 8/12, 6/9 zijn allemaal correct — maar Cito vraagt meestal de **vereenvoudigde** vorm.",
    checks: [
      {
        q: "**12/16** vereenvoudigd?",
        options: ["3/4","6/8","12/16","2/3"],
        answer: 0,
        wrongHints: [null,"Niet de meest vereenvoudigde — kun je nog door 2 delen.","Niet vereenvoudigd — beide getallen kun je nog door 4 delen.","Andere breuk — past niet."],
      },
      {
        q: "Welke breuk is **gelijk aan 1/2**?",
        options: ["50/100","2/3","3/4","100/50"],
        answer: 0,
        wrongHints: [null,"Andere waarde — 2/3 is groter dan de helft.","Veel groter dan de helft.","Andersom — meer dan 1."],
      },
      {
        q: "**9/12** vereenvoudigd?",
        options: ["3/4","9/12","6/8","1/2"],
        answer: 0,
        wrongHints: [null,"Niet vereenvoudigd — beide door 3.","Niet vereenvoudigd — kun je nog kleiner.","Andere waarde — 9/12 is groter dan de helft."],
      },
    ],
  },

  {
    title: "Optellen en aftrekken — gelijke noemer",
    explanation: "Bij optellen en aftrekken van breuken moet de **noemer hetzelfde** zijn.\n\n**Met gelijke noemer — eenvoudig**:\n• Alleen **tellers** optellen of aftrekken.\n• Noemer **blijft hetzelfde**.\n\nVoorbeelden:\n• **1/4 + 2/4 = 3/4**\n• **3/8 + 2/8 = 5/8**\n• **5/6 − 2/6 = 3/6 = 1/2**\n• **7/10 − 3/10 = 4/10 = 2/5** *(vereenvoudigd)*\n\n**Met ongelijke noemer — eerst gelijk maken**:\n*'1/2 + 1/4'*\n• Maak gelijke noemer: 1/2 = 2/4.\n• Nu: 2/4 + 1/4 = **3/4**.\n\n*'1/3 + 1/2'*\n• Gemeenschappelijke noemer 6: 1/3 = 2/6, 1/2 = 3/6.\n• 2/6 + 3/6 = **5/6**.\n\n**Cito-truc — gemeenschappelijke noemer**:\n• 1/2 + 1/4 → noemer 4 *(want 4 past op zowel 2 als 4)*.\n• 1/3 + 1/4 → noemer 12 *(3 × 4)*.\n• 1/2 + 1/5 → noemer 10 *(2 × 5)*.\n\n**Stappenplan**:\n1. Zijn de noemers gelijk? Zo ja → tellers optellen.\n2. Zo nee → eerst gelijknamig maken.\n3. Tellers samenvoegen.\n4. Vereenvoudig waar mogelijk.\n\n**Veel-voorkomende fout**:\nDe noemers ook optellen. **Dat mag NIET** — alleen tellers veranderen.",
    checks: [
      {
        q: "**1/4 + 2/4** = ?",
        options: ["3/4","3/8","2/8","1/2"],
        answer: 0,
        wrongHints: [null,"Niet de noemers ook optellen — alleen tellers.","Niet beide tellers EN noemers optellen.","Andere waarde — vereenvoudig na optellen pas."],
      },
      {
        q: "**1/2 + 1/4** = ?",
        options: ["3/4","2/6","1/6","2/4"],
        answer: 0,
        wrongHints: [null,"Niet beide tellers en noemers optellen — eerst gelijke noemer maken.","Niet correct — eerst 1/2 omschrijven naar /4.","Niet vereenvoudigd én ongelijk."],
      },
      {
        q: "**5/6 − 2/6** = ?",
        options: ["1/2","3/12","3/6","2/6"],
        answer: 0,
        wrongHints: [null,"Niet vereenvoudigd — kun je 3/6 nog kleiner maken?","Niet beide aftrekken — alleen tellers.","Niet vereenvoudigd.","Verkeerde aftrekking — 5−2=?"],
      },
    ],
  },

  {
    title: "Vermenigvuldigen — een breuk × een heel getal",
    explanation: "Een breuk vermenigvuldigen met een heel getal is **simpeler dan optellen**: je vermenigvuldigt alleen de **teller**.\n\n**Voorbeeld**:\n• 3 × 1/4 = **3/4**.\n• 5 × 1/2 = 5/2 = **2½**.\n• 4 × 2/3 = 8/3 = **2⅔**.\n\n**Visueel**: 3 × 1/4 betekent: 3 kwartjes pizza = drie-kwart pizza.\n\n**'Wat is X/Y van iets'** — de Cito-favoriet:\n*'Wat is 3/4 van 20?'*\n\n**Aanpak 1 — eerst delen, dan keer**:\n• 20 ÷ 4 = 5 *(één-kwart)*\n• 5 × 3 = **15**\n\n**Aanpak 2 — eerst keer, dan delen**:\n• 20 × 3 = 60\n• 60 ÷ 4 = **15**\n\nBeide kloppen — de eerste is meestal handiger want je werkt met kleinere getallen.\n\n**Cito-voorbeelden**:\n*'2/3 van 30 leerlingen werkt mee'* → 30 ÷ 3 × 2 = **20 leerlingen**.\n*'3/8 van een pak van 800 g'* → 800 ÷ 8 × 3 = **300 g**.\n*'1/5 van € 25'* → 25 ÷ 5 = **€ 5**.\n\n**Cito-truc — 'breuk van iets' met grote getallen**:\nGa altijd via de **eenheids-breuk** (1/4, 1/3, 1/5, etc.). Dan tel je gewoon op.\n\nVoorbeeld: *'3/7 van 84'*\n• 1/7 van 84 = 84 ÷ 7 = 12.\n• 3/7 = 3 × 12 = **36**.",
    checks: [
      {
        q: "**3/4 van 20** = ?",
        options: ["15","12","16","5"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is 3/5.","Te veel.","Veel te weinig — dat is 1/4."],
      },
      {
        q: "**1/3 van 60 minuten** = ?",
        options: ["20","30","15","45"],
        answer: 0,
        wrongHints: [null,"Te veel — dat is half uur.","Te weinig — dat is een kwart.","Veel te veel — dat is drie-kwart."],
      },
      {
        q: "**4 × 3/5** = ?",
        options: ["12/5","12/20","7/5","4/5"],
        answer: 0,
        wrongHints: [null,"Niet beide tellen — alleen teller.","Niet optellen.","Niet vermenigvuldigd."],
      },
    ],
  },

  {
    title: "Praktijk — winkel + recept + tijd",
    explanation: "Tijd voor mix-sommen in Cito-stijl. Breuken kom je overal tegen — winkel, recept, tijd, klas-statistiek.\n\n**Stappenplan voor breuk-sommen**:\n1. **Wat ken ik?** Het totaal of een deel?\n2. **Wat is de breuk?** *(let op woorden: 'half', 'kwart', 'drie-kwart')*\n3. **Welke aanpak?** Via 1 deel of via vermenigvuldigen?\n4. Reken in stapjes en schrijf op.\n\n**Voorbeeld — winkel**:\n*'Een pak meel van 1 kg. Je gebruikt 1/4 voor pannenkoeken. Hoeveel g blijft over?'*\n• 1 kg = 1000 g.\n• 1/4 = 1000 ÷ 4 = 250 g gebruikt.\n• Rest = 1000 − 250 = **750 g**.\n\n**Voorbeeld — tijd**:\n*'De film duurt 2 uur. Je hebt 1/3 gezien. Hoeveel minuten resteren?'*\n• 2 uur = 120 min.\n• 1/3 gezien = 120 ÷ 3 = 40 min gezien.\n• Rest = 120 − 40 = **80 min**.\n\n**Voorbeeld — klas**:\n*'In een klas van 28 zitten 3/4 jongens. Hoeveel meisjes?'*\n• Jongens: 28 × 3/4 = 21.\n• Meisjes = 28 − 21 = **7**. *(of: 1/4 = 7)*",
    checks: [
      {
        q: "Een pizza in **8 stukken** — Tom eet **3/8**. Hoeveel **stukken** zijn over?",
        options: ["5","3","2","6"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is wat Tom heeft gegeten.","Veel te weinig.","Te veel — heb je meer dan 8 stukken?"],
      },
      {
        q: "Een fles van **1,5 L**, je drinkt **1/3**. Hoeveel **mL** is dat?",
        options: ["500","300","450","250"],
        answer: 0,
        wrongHints: [null,"Te weinig — 1/3 van 1500 mL is meer dan 300.","Te weinig.","Veel te weinig — dat is 1/6."],
      },
      {
        q: "Een schooldag duurt **6 uur**. Je hebt **2/3 gehad**. Hoeveel **uur resteert**?",
        options: ["2","4","3","1"],
        answer: 0,
        wrongHints: [null,"Verkeerd om — dat is wat je gehad hebt, niet wat over is.","Te veel — dat is de helft.","Te weinig — dat is 1/6 over."],
      },
      {
        q: "Lisa heeft **3/4 van € 60** gespaard. Hoeveel?",
        options: ["€ 45","€ 15","€ 30","€ 50"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is 1/4.","Te weinig — dat is 1/2.","Te veel — vergelijk met de hele 60."],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — breuken mix",
    explanation: "Mix-toets in Cito-stijl. Breuken in alle vormen — visueel, in woorden, met of zonder context.\n\nVeel succes!",
    checks: [
      {
        q: "Welke breuk is **het kleinst**?",
        options: ["1/8","1/2","3/4","1/4"],
        answer: 0,
        wrongHints: [null,"Te groot — dat is de helft.","Veel te groot.","Te groot — een kwart is groter dan een achtste."],
      },
      {
        q: "Op een toets van **40 vragen** maakt Sven **3/5 goed**. Hoeveel?",
        options: ["24","20","16","30"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is precies de helft.","Te weinig.","Te veel — heb je meer dan 3/4 gerekend?"],
      },
      {
        q: "**1/2 + 1/3** = ?",
        options: ["5/6","2/5","2/6","1/5"],
        answer: 0,
        wrongHints: [null,"Niet noemers ook optellen — eerst gelijknamig: 1/2 = 3/6 en 1/3 = 2/6.","Niet vereenvoudigd of ongelijk gemaakt.","Niet optellen — alleen tellers samen, na gelijk maken."],
      },
      {
        q: "Een glas van **300 mL** vul je voor **2/3**. Hoeveel **mL** zit erin?",
        options: ["200","100","150","250"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is 1/3.","Te weinig — dat is de helft.","Te veel — dat is meer dan 2/3."],
      },
      {
        q: "**4/12** vereenvoudigd?",
        options: ["1/3","2/6","4/12","2/3"],
        answer: 0,
        wrongHints: [null,"Niet vereenvoudigd — kun je nog door 2 delen.","Niet vereenvoudigd.","Andere waarde — andersom."],
      },
      {
        q: "Een chocoladereep van **8 vakjes**. Je eet **5 vakjes**. Welke **breuk** is opgegeten?",
        options: ["5/8","3/8","8/5","5/13"],
        answer: 0,
        wrongHints: [null,"Andersom — wat over is, niet wat je at.","Andersom — teller is wat je at.","Niet optellen — totaal is 8, niet 13."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const breukenPo = {
  id: "breuken-po",
  title: "Breuken — Cito groep 5-8",
  emoji: "🍕",
  level: "groep5-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen — breuken",
  intro:
    "Breuken voor groep 5-8: wat is een breuk, vereenvoudigen, optellen/aftrekken met gelijke en ongelijke noemers, breuk-van-een-getal. Met Cito-stijl praktijksommen. ~15 min.",
  triggerKeywords: [
    "breuk","breuken","teller","noemer","half","kwart",
    "derde","vijfde","tiende","gelijknamig","vereenvoudigen",
    "½","⅓","¼","¾",
  ],
  chapters,
  steps,
};

export default breukenPo;
