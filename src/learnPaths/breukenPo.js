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
        uitlegPad: {
          stappen: [{ titel: "Heel - opgegeten = rest", tekst: "8/8 (heel) - 3/8 (op) = 5/8 (over)." }],
          woorden: [{ woord: "rest-breuk", uitleg: "Wat over is = totaal - opgegeten. Noemer blijft hetzelfde." }],
          theorie: "Bij 'wat is over?': trek opgegeten af van geheel (noemer/noemer = 8/8 = 1).",
          voorbeelden: [{ type: "som", tekst: "8/8 - 3/8 = 5/8. Alleen tellers aftrekken, noemer blijft 8." }],
          basiskennis: [{ onderwerp: "Tegenovergesteld", uitleg: "Vraag draait om 'NIET opgegeten' = wat over is." }],
          niveaus: { basis: "5/8 is over. A.", simpeler: "Pizza heeft 8 stukken. Op = 3 stukken. Over = 8-3 = 5 stukken = 5/8. = A.", nogSimpeler: "5/8 = A." },
        },
      },
      {
        q: "Welke breuk is **groter dan 1**?",
        options: ["7/4","3/4","1/2","4/4"],
        answer: 0,
        wrongHints: [null,"Kleiner dan 1 — teller < noemer.","Veel kleiner dan 1.","Precies 1 — niet groter."],
        uitlegPad: {
          stappen: [{ titel: "Teller > noemer = >1", tekst: "Als teller GROTER is dan noemer, is breuk groter dan 1. 7/4: 7>4, dus >1." }],
          woorden: [{ woord: "onechte breuk", uitleg: "Breuk waarbij teller ≥ noemer. Bv. 7/4 = 1¾." }],
          theorie: "Vergelijk teller met noemer: teller<noemer = <1, teller=noemer = 1, teller>noemer = >1.",
          voorbeelden: [{ type: "groter", tekst: "7/4 = 7÷4 = 1,75 (groter dan 1). 4/4 = 1 (precies). 3/4 = 0,75 (kleiner)." }],
          basiskennis: [{ onderwerp: "Snelle test", uitleg: "Bij elke breuk: vergelijk twee getallen. Teller>noemer? Dan >1." }],
          niveaus: { basis: "7/4 > 1. A.", simpeler: "7/4: teller=7, noemer=4. 7 is groter dan 4 → breuk is groter dan 1. = A.", nogSimpeler: "7>4 = A." },
        },
      },
      {
        q: "Bij een pizza in **6 stukken** eet je **4**. Welke **breuk** is dat?",
        options: ["4/6","6/4","4/10","2/3"],
        answer: 0,
        wrongHints: [null,"Andersom — teller is wat je eet (4), noemer is totaal (6).","Niet optellen — de noemer is alleen het totaal stukken (6).","Klopt vereenvoudigd, maar de eerste optie is letterlijk wat de vraag zegt."],
        uitlegPad: {
          stappen: [{ titel: "Wat boven, wat onder", tekst: "TELLER (boven) = wat je hebt = 4. NOEMER (onder) = totaal = 6. → 4/6." }],
          woorden: [{ woord: "teller", uitleg: "Bovenste getal van breuk = aantal dat je hebt." }, { woord: "noemer", uitleg: "Onderste getal = totaal aantal stukken." }],
          theorie: "Breuk = aantal je hebt / totaal. Teller boven, noemer onder.",
          voorbeelden: [{ type: "test", tekst: "Pizza 6 stukken (=noemer 6). Eet 4 (=teller 4). Breuk = 4/6." }],
          basiskennis: [{ onderwerp: "2/3 ook waar", uitleg: "4/6 = 2/3 vereenvoudigd, maar Cito vraagt letterlijk 4 van 6." }],
          niveaus: { basis: "4/6. A.", simpeler: "Teller (boven) = wat je eet = 4. Noemer (onder) = totaal = 6. = 4/6 = A.", nogSimpeler: "4/6 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Helft van 1000", tekst: "1 L = 1000 mL. Halve = 1/2. 1000 ÷ 2 = 500 mL." }],
          woorden: [{ woord: "half", uitleg: "1/2 = de helft. Bv. half uur = 30 min, halve liter = 500 mL." }],
          theorie: "Practijkbreuken: half = ÷2. Kwart = ÷4. Tiende = ÷10.",
          voorbeelden: [{ type: "praktijk", tekst: "1/2 L = 500 mL. 1/4 L = 250 mL. 1/10 L = 100 mL." }],
          basiskennis: [{ onderwerp: "1 L = 1000 mL", uitleg: "Liter ÷ 1000 = milliliter. Onthoud deze omrekening." }],
          niveaus: { basis: "500 mL. A.", simpeler: "1 L = 1000 mL. De helft = 1000 ÷ 2 = 500 mL. = A.", nogSimpeler: "500 = A." },
        },
      },
      {
        q: "**Twee-derde uur** = ? minuten?",
        options: ["40","30","45","20"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is een halve uur.","Te veel — dat is drie-kwart uur.","Te weinig — dat is een derde uur."],
        uitlegPad: {
          stappen: [{ titel: "Stap 1+2", tekst: "1/3 uur = 60÷3 = 20 min. 2/3 = 2 × 20 = 40 min." }],
          woorden: [{ woord: "twee-derde", uitleg: "2/3 = 2 × 1/3. Eerst 1/3, dan keer 2." }],
          theorie: "X/Y van iets: deel door Y, keer X. Voor 2/3 van 60: 60÷3 dan ×2.",
          voorbeelden: [{ type: "stap", tekst: "1/3 van 60 = 20. 2/3 = 40. 3/3 = 60 (geheel)." }],
          basiskennis: [{ onderwerp: "Klok 60 min", uitleg: "1 uur = 60 minuten. Daarom is 1/3 uur = 20 min." }],
          niveaus: { basis: "40 min. A.", simpeler: "Uur = 60 min. 1/3 = 20 min. 2/3 = 40 min. = A.", nogSimpeler: "40 = A." },
        },
      },
      {
        q: "**Drie-kwart van de klas** in een klas van **24** — hoeveel?",
        options: ["18","6","12","20"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is een kwart.","Te weinig — dat is de helft.","Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Stap 1+2", tekst: "1/4 van 24 = 24÷4 = 6. 3/4 = 3 × 6 = 18." }],
          woorden: [{ woord: "drie-kwart", uitleg: "3/4 = 3 × 1/4. Eerst 1/4, dan keer 3." }],
          theorie: "X/Y van getal: deel ÷Y, keer ×X. Hier: 24÷4 ×3.",
          voorbeelden: [{ type: "stap", tekst: "1/4 van 24 = 6. 2/4 = 12. 3/4 = 18. 4/4 = 24." }],
          basiskennis: [{ onderwerp: "Tabel 4", uitleg: "24÷4 = 6 (uit tafel van 6: 4×6=24)." }],
          niveaus: { basis: "18 leerlingen. A.", simpeler: "1/4 van 24 = 24÷4 = 6. Drie-kwart = 3×6 = 18. = A.", nogSimpeler: "18 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Deel beide door 4", tekst: "12÷4 = 3. 16÷4 = 4. → 3/4." }],
          woorden: [{ woord: "vereenvoudigen", uitleg: "Teller en noemer beide delen door hetzelfde getal (de gemeenschappelijke deler)." }],
          theorie: "Maximale vereenvoudiging: zoek grootste getal waar beide door deelbaar zijn. 12 én 16 → ÷4.",
          voorbeelden: [{ type: "stap", tekst: "12/16 → ÷2 = 6/8 → ÷2 = 3/4. Of in 1 stap ÷4." }],
          basiskennis: [{ onderwerp: "Beide moet", uitleg: "Altijd teller ÉN noemer delen door hetzelfde getal." }],
          niveaus: { basis: "3/4. A.", simpeler: "12 en 16 zijn beide deelbaar door 4. 12÷4=3, 16÷4=4 → 3/4. = A.", nogSimpeler: "3/4 = A." },
        },
      },
      {
        q: "Welke breuk is **gelijk aan 1/2**?",
        options: ["50/100","2/3","3/4","100/50"],
        answer: 0,
        wrongHints: [null,"Andere waarde — 2/3 is groter dan de helft.","Veel groter dan de helft.","Andersom — meer dan 1."],
        uitlegPad: {
          stappen: [{ titel: "50 van 100 = helft", tekst: "100÷2 = 50. Dus 50 van 100 = de helft = 1/2." }],
          woorden: [{ woord: "gelijke breuk", uitleg: "Twee breuken die dezelfde waarde hebben. 1/2 = 2/4 = 50/100." }],
          theorie: "1/2-familie: 1/2 = 2/4 = 3/6 = 4/8 = 5/10 = 50/100. Allemaal de helft.",
          voorbeelden: [{ type: "lijst", tekst: "1/2 = 2/4 = 5/10 = 50/100 = 500/1000." }],
          basiskennis: [{ onderwerp: "Test", uitleg: "Deel teller door noemer = 0,5? Dan = 1/2." }],
          niveaus: { basis: "50/100 = 1/2. A.", simpeler: "50 is de helft van 100, dus 50/100 = 1/2. (2/3 is meer dan helft, 100/50 is meer dan 1). = A.", nogSimpeler: "50/100 = A." },
        },
      },
      {
        q: "**9/12** vereenvoudigd?",
        options: ["3/4","9/12","6/8","1/2"],
        answer: 0,
        wrongHints: [null,"Niet vereenvoudigd — beide door 3.","Niet vereenvoudigd — kun je nog kleiner.","Andere waarde — 9/12 is groter dan de helft."],
        uitlegPad: {
          stappen: [{ titel: "Deel beide door 3", tekst: "9÷3 = 3. 12÷3 = 4. → 3/4." }],
          woorden: [{ woord: "GGD", uitleg: "Grootste gemeenschappelijke deler. Bij 9 en 12 = 3." }],
          theorie: "Vereenvoudig: zoek grootste getal waar beide door deelbaar zijn. 9 en 12: tafel van 3.",
          voorbeelden: [{ type: "stap", tekst: "9÷3=3, 12÷3=4 → 3/4. Niet meer kleiner te maken." }],
          basiskennis: [{ onderwerp: "Tafel 3 truc", uitleg: "Som van cijfers deelbaar door 3 → getal deelbaar door 3. 9 (=9), 12 (1+2=3)." }],
          niveaus: { basis: "3/4. A.", simpeler: "9 en 12 beide ÷3: 9÷3=3, 12÷3=4 → 3/4. = A.", nogSimpeler: "3/4 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Tellers samen", tekst: "Gelijke noemer (4) → tellers optellen: 1+2=3. Noemer blijft 4. → 3/4." }],
          woorden: [{ woord: "gelijke noemer", uitleg: "Beide breuken met dezelfde noemer (= dezelfde 'taart-stukgrootte')." }],
          theorie: "Bij gelijke noemer: alleen tellers optellen, noemer blijft hetzelfde.",
          voorbeelden: [{ type: "som", tekst: "1/4 + 2/4: een kwart + twee kwart = drie kwart = 3/4." }],
          basiskennis: [{ onderwerp: "Geen noemer optellen", uitleg: "Foute aanpak: 1/4 + 2/4 = 3/8 ❌. Noemers NOOIT optellen!" }],
          niveaus: { basis: "3/4. A.", simpeler: "Beide breuken hebben /4. Tel tellers: 1+2=3. → 3/4. = A.", nogSimpeler: "3/4 = A." },
        },
      },
      {
        q: "**1/2 + 1/4** = ?",
        options: ["3/4","2/6","1/6","2/4"],
        answer: 0,
        wrongHints: [null,"Niet beide tellers en noemers optellen — eerst gelijke noemer maken.","Niet correct — eerst 1/2 omschrijven naar /4.","Niet vereenvoudigd én ongelijk."],
        uitlegPad: {
          stappen: [{ titel: "Maak noemers gelijk", tekst: "1/2 = 2/4. Nu 2/4 + 1/4 = 3/4." }],
          woorden: [{ woord: "gelijknamig maken", uitleg: "Breuken zelfde noemer geven door teller én noemer keer hetzelfde." }],
          theorie: "Ongelijke noemers: zoek gemeenschappelijke. Voor 2 en 4 → 4. 1/2 → 2/4.",
          voorbeelden: [{ type: "stap", tekst: "1/2 keer 2 boven en onder = 2/4. Dan 2/4 + 1/4 = 3/4." }],
          basiskennis: [{ onderwerp: "Vergeet niet", uitleg: "Veranderen van noemer = teller MOET ook keer hetzelfde." }],
          niveaus: { basis: "3/4. A.", simpeler: "1/2 wordt 2/4 (teller en noemer keer 2). Dan 2/4 + 1/4 = 3/4. = A.", nogSimpeler: "3/4 = A." },
        },
      },
      {
        q: "**5/6 − 2/6** = ?",
        options: ["1/2","3/12","3/6","2/6"],
        answer: 0,
        wrongHints: [null,"Niet vereenvoudigd — kun je 3/6 nog kleiner maken?","Niet beide aftrekken — alleen tellers.","Niet vereenvoudigd.","Verkeerde aftrekking — 5−2=?"],
        uitlegPad: {
          stappen: [{ titel: "Trek af + vereenvoudig", tekst: "5-2=3. Noemer blijft 6 → 3/6. Vereenvoudig: 3/6 → 1/2." }],
          woorden: [{ woord: "vereenvoudigen na", uitleg: "Antwoord altijd zo simpel mogelijk maken." }],
          theorie: "Aftrekken bij gelijke noemer: tellers aftrekken, dan vereenvoudigen.",
          voorbeelden: [{ type: "stap", tekst: "5/6 - 2/6 = 3/6 = 1/2 (beide ÷3)." }],
          basiskennis: [{ onderwerp: "Cito wil simpelste vorm", uitleg: "Antwoord 3/6 is goed, maar Cito vraagt vereenvoudigde: 1/2." }],
          niveaus: { basis: "1/2. A.", simpeler: "5/6 - 2/6 = 3/6. Vereenvoudig: 3 en 6 beide ÷3 → 1/2. = A.", nogSimpeler: "1/2 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Stap 1+2", tekst: "1/4 van 20 = 20÷4 = 5. 3/4 = 3 × 5 = 15." }],
          woorden: [{ woord: "X/Y van iets", uitleg: "Truc: deel door Y, keer X. Hier ÷4 dan ×3." }],
          theorie: "Voor breuk × geheel getal: pak eerst 1/Y deel, dan keer teller.",
          voorbeelden: [{ type: "stap", tekst: "20÷4=5 (1/4). 5×3=15 (3/4). Of: 20×3=60, 60÷4=15." }],
          basiskennis: [{ onderwerp: "Eenheids-breuk eerst", uitleg: "Eerst 1-deel uitrekenen, dan keer aantal. Werkt altijd." }],
          niveaus: { basis: "15. A.", simpeler: "1/4 van 20 = 5. 3/4 = 3×5 = 15. = A.", nogSimpeler: "15 = A." },
        },
      },
      {
        q: "**1/3 van 60 minuten** = ?",
        options: ["20","30","15","45"],
        answer: 0,
        wrongHints: [null,"Te veel — dat is half uur.","Te weinig — dat is een kwart.","Veel te veel — dat is drie-kwart."],
        uitlegPad: {
          stappen: [{ titel: "Deel door 3", tekst: "1/3 van 60 = 60÷3 = 20." }],
          woorden: [{ woord: "1/3", uitleg: "Een derde = 1 van 3 gelijke delen." }],
          theorie: "Eenheidsbreuk 1/Y: gewoon delen door Y.",
          voorbeelden: [{ type: "klok", tekst: "60 min ÷ 3 = 20 min. 1/3 uur = 20 minuten." }],
          basiskennis: [{ onderwerp: "Klok-breuken", uitleg: "1/2 uur=30, 1/3 uur=20, 1/4 uur=15, 1/6 uur=10 min." }],
          niveaus: { basis: "20 min. A.", simpeler: "60 min ÷ 3 = 20 min. 1/3 van uur. = A.", nogSimpeler: "20 = A." },
        },
      },
      {
        q: "**4 × 3/5** = ?",
        options: ["12/5","12/20","7/5","4/5"],
        answer: 0,
        wrongHints: [null,"Niet beide tellen — alleen teller.","Niet optellen.","Niet vermenigvuldigd."],
        uitlegPad: {
          stappen: [{ titel: "Alleen teller × 4", tekst: "4 × 3/5: 4 × 3 = 12 (teller). Noemer blijft 5. → 12/5." }],
          woorden: [{ woord: "geheel × breuk", uitleg: "Vermenigvuldig alleen TELLER met het hele getal. Noemer blijft." }],
          theorie: "Geheel × breuk: heel getal × teller, noemer blijft. 4 × 3/5 = 12/5.",
          voorbeelden: [{ type: "som", tekst: "2 × 1/4 = 2/4. 3 × 2/7 = 6/7. 4 × 3/5 = 12/5 = 2 2/5." }],
          basiskennis: [{ onderwerp: "Niet noemer ook", uitleg: "Foute aanpak: 4 × 3/5 = 12/20 ❌. Noemer blijft 5." }],
          niveaus: { basis: "12/5. A.", simpeler: "4 × 3 = 12 (teller). Noemer 5 blijft. → 12/5. = A.", nogSimpeler: "12/5 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Totaal - op", tekst: "Totaal stukken = 8. Op = 3. Over = 8-3 = 5." }],
          woorden: [{ woord: "rest", uitleg: "Wat over is = totaal min wat opgegeten/gebruikt is." }],
          theorie: "Restbreuk: noemer blijft hetzelfde, teller = totaal-op. 5/8 stukken over.",
          voorbeelden: [{ type: "som", tekst: "3/8 op → 5/8 over → 5 stukken (van 8 noemer)." }],
          basiskennis: [{ onderwerp: "Stukken niet breuk", uitleg: "Vraag wil aantal stukken (5), niet de breuk (5/8)." }],
          niveaus: { basis: "5 stukken. A.", simpeler: "Pizza heeft 8 stukken. Op = 3. Over = 8-3 = 5 stukken. = A.", nogSimpeler: "5 = A." },
        },
      },
      {
        q: "Een fles van **1,5 L**, je drinkt **1/3**. Hoeveel **mL** is dat?",
        options: ["500","300","450","250"],
        answer: 0,
        wrongHints: [null,"Te weinig — 1/3 van 1500 mL is meer dan 300.","Te weinig.","Veel te weinig — dat is 1/6."],
        uitlegPad: {
          stappen: [{ titel: "L → mL → ÷3", tekst: "1,5 L = 1500 mL. 1/3 = 1500÷3 = 500 mL." }],
          woorden: [{ woord: "1,5 L", uitleg: "Anderhalve liter = 1500 mL." }],
          theorie: "Eerst eenheid omrekenen (L→mL via ×1000), dan breuk toepassen.",
          voorbeelden: [{ type: "stap", tekst: "1,5 L × 1000 = 1500 mL. ÷3 = 500 mL." }],
          basiskennis: [{ onderwerp: "1 L = 1000 mL", uitleg: "Onthoud altijd: liter naar milliliter = ×1000." }],
          niveaus: { basis: "500 mL. A.", simpeler: "1,5 L = 1500 mL. 1/3 = 1500÷3 = 500 mL. = A.", nogSimpeler: "500 = A." },
        },
      },
      {
        q: "Een schooldag duurt **6 uur**. Je hebt **2/3 gehad**. Hoeveel **uur resteert**?",
        options: ["2","4","3","1"],
        answer: 0,
        wrongHints: [null,"Verkeerd om — dat is wat je gehad hebt, niet wat over is.","Te veel — dat is de helft.","Te weinig — dat is 1/6 over."],
        uitlegPad: {
          stappen: [{ titel: "Restbreuk truc", tekst: "Gehad = 2/3. Over = 1/3 = 6÷3 = 2 uur." }],
          woorden: [{ woord: "rest = 1-deel", uitleg: "Als 2/3 gehad, dan 1/3 over (samen = 3/3 = geheel)." }],
          theorie: "Truc: in plaats van rekenen 2/3 dan aftrekken — bereken direct 1/3 (rest).",
          voorbeelden: [{ type: "stap", tekst: "Geheel 6 uur = 3/3. Gehad 2/3, dus over = 1/3 = 6÷3 = 2 uur." }],
          basiskennis: [{ onderwerp: "Snelheid", uitleg: "Bij 'wat resteert?' direct het overgebleven deel uitrekenen." }],
          niveaus: { basis: "2 uur. A.", simpeler: "2/3 gehad → 1/3 over. 1/3 van 6 uur = 6÷3 = 2 uur. = A.", nogSimpeler: "2 = A." },
        },
      },
      {
        q: "Lisa heeft **3/4 van € 60** gespaard. Hoeveel?",
        options: ["€ 45","€ 15","€ 30","€ 50"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is 1/4.","Te weinig — dat is 1/2.","Te veel — vergelijk met de hele 60."],
        uitlegPad: {
          stappen: [{ titel: "Stap 1+2", tekst: "1/4 van 60 = 60÷4 = 15. 3/4 = 3 × 15 = 45." }],
          woorden: [{ woord: "3/4 van", uitleg: "Drie kwart = 3 × 1/4. Eerst 1/4, dan keer 3." }],
          theorie: "Geld-breuken: ÷ noemer, × teller. Hier 60÷4 = 15, ×3 = 45.",
          voorbeelden: [{ type: "stap", tekst: "1/4 = €15. 2/4 = €30. 3/4 = €45. 4/4 = €60." }],
          basiskennis: [{ onderwerp: "Tafel 4 truc", uitleg: "60÷4 = 15 (uit tafel: 4×15=60)." }],
          niveaus: { basis: "€45. A.", simpeler: "1/4 van €60 = €15. 3/4 = 3×€15 = €45. = A.", nogSimpeler: "€45 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Hoe groter de noemer, hoe kleiner", tekst: "Bij teller=1: hoe GROTER de noemer, hoe kleiner het stukje. 1/8 < 1/4 < 1/2." }],
          woorden: [{ woord: "noemer-regel", uitleg: "Pizza in meer stukken = elk stuk kleiner." }],
          theorie: "Bij gelijke teller: grootste noemer = kleinste breuk. 1/8 (8 stukken) is het kleinst.",
          voorbeelden: [{ type: "vergelijk", tekst: "Pizza in 8: stukje is klein. Pizza in 2: stukje is groot." }],
          basiskennis: [{ onderwerp: "3/4 niet 1", uitleg: "3/4 heeft teller 3 — niet 1. Vergelijk decimaal: 1/8=0,125; 3/4=0,75. 1/8 kleinst." }],
          niveaus: { basis: "1/8. A.", simpeler: "Hoe meer stukken (grotere noemer), hoe kleiner elk stuk. 1/8 = klein stukje. = A.", nogSimpeler: "1/8 = A." },
        },
      },
      {
        q: "Op een toets van **40 vragen** maakt Sven **3/5 goed**. Hoeveel?",
        options: ["24","20","16","30"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is precies de helft.","Te weinig.","Te veel — heb je meer dan 3/4 gerekend?"],
        uitlegPad: {
          stappen: [{ titel: "Stap 1+2", tekst: "1/5 van 40 = 40÷5 = 8. 3/5 = 3 × 8 = 24." }],
          woorden: [{ woord: "3/5", uitleg: "Drie vijfde = 3 × 1/5. Eerst 1/5, dan keer 3." }],
          theorie: "Praktijk: 40÷5=8 (1/5). ×3 = 24 (3/5).",
          voorbeelden: [{ type: "stap", tekst: "1/5 = 8. 2/5 = 16. 3/5 = 24. 5/5 = 40." }],
          basiskennis: [{ onderwerp: "Tafel 5", uitleg: "40÷5 = 8 (uit tafel: 5×8=40)." }],
          niveaus: { basis: "24 vragen. A.", simpeler: "1/5 van 40 = 8. 3/5 = 3×8 = 24 vragen goed. = A.", nogSimpeler: "24 = A." },
        },
      },
      {
        q: "**1/2 + 1/3** = ?",
        options: ["5/6","2/5","2/6","1/5"],
        answer: 0,
        wrongHints: [null,"Niet noemers ook optellen — eerst gelijknamig: 1/2 = 3/6 en 1/3 = 2/6.","Niet vereenvoudigd of ongelijk gemaakt.","Niet optellen — alleen tellers samen, na gelijk maken."],
        uitlegPad: {
          stappen: [{ titel: "Gelijke noemer 6", tekst: "1/2 = 3/6. 1/3 = 2/6. Optellen: 3/6 + 2/6 = 5/6." }],
          woorden: [{ woord: "gemeenschappelijke noemer", uitleg: "Kleinste getal waar beide noemers in passen. 2 en 3 → 6." }],
          theorie: "Voor 2 en 3 als noemers: pak 2×3=6. 1/2 = 3/6, 1/3 = 2/6.",
          voorbeelden: [{ type: "stap", tekst: "1/2 = 3/6 (×3 boven en onder). 1/3 = 2/6 (×2 boven en onder). Som = 5/6." }],
          basiskennis: [{ onderwerp: "Trek na", uitleg: "Bij verschillende noemers: maak gelijk via product. Hier 2×3=6." }],
          niveaus: { basis: "5/6. A.", simpeler: "Maak gelijke noemer: 1/2=3/6, 1/3=2/6. Som tellers: 3+2=5. → 5/6. = A.", nogSimpeler: "5/6 = A." },
        },
      },
      {
        q: "Een glas van **300 mL** vul je voor **2/3**. Hoeveel **mL** zit erin?",
        options: ["200","100","150","250"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is 1/3.","Te weinig — dat is de helft.","Te veel — dat is meer dan 2/3."],
        uitlegPad: {
          stappen: [{ titel: "Stap 1+2", tekst: "1/3 van 300 = 300÷3 = 100. 2/3 = 2 × 100 = 200 mL." }],
          woorden: [{ woord: "2/3", uitleg: "Twee derde = 2 × 1/3." }],
          theorie: "Voor 2/3 van X: ÷3 dan ×2.",
          voorbeelden: [{ type: "stap", tekst: "1/3 van 300 = 100. 2/3 = 200. 3/3 = 300 (heel)." }],
          basiskennis: [{ onderwerp: "Tafel 3", uitleg: "300÷3 = 100 (uit tafel: 3×100=300)." }],
          niveaus: { basis: "200 mL. A.", simpeler: "1/3 van 300 mL = 100 mL. 2/3 = 2×100 = 200 mL. = A.", nogSimpeler: "200 = A." },
        },
      },
      {
        q: "**4/12** vereenvoudigd?",
        options: ["1/3","2/6","4/12","2/3"],
        answer: 0,
        wrongHints: [null,"Niet vereenvoudigd — kun je nog door 2 delen.","Niet vereenvoudigd.","Andere waarde — andersom."],
        uitlegPad: {
          stappen: [{ titel: "Deel beide door 4", tekst: "4÷4 = 1. 12÷4 = 3. → 1/3." }],
          woorden: [{ woord: "GGD 4", uitleg: "Grootste gemene deler van 4 en 12 = 4." }],
          theorie: "Vereenvoudig zo ver mogelijk: 4 én 12 beide ÷4. Niet door 2 (dan blijft 2/6 nog te vereenvoudigen).",
          voorbeelden: [{ type: "stap", tekst: "4/12 ÷4 → 1/3. Of stap-voor-stap: ÷2 → 2/6, ÷2 → 1/3." }],
          basiskennis: [{ onderwerp: "Maximaal", uitleg: "1/3 kan niet meer kleiner — antwoord." }],
          niveaus: { basis: "1/3. A.", simpeler: "4 en 12 beide ÷4: 4÷4=1, 12÷4=3 → 1/3. = A.", nogSimpeler: "1/3 = A." },
        },
      },
      {
        q: "Een chocoladereep van **8 vakjes**. Je eet **5 vakjes**. Welke **breuk** is opgegeten?",
        options: ["5/8","3/8","8/5","5/13"],
        answer: 0,
        wrongHints: [null,"Andersom — wat over is, niet wat je at.","Andersom — teller is wat je at.","Niet optellen — totaal is 8, niet 13."],
        uitlegPad: {
          stappen: [{ titel: "Teller=op, noemer=totaal", tekst: "Op = 5 (teller). Totaal = 8 (noemer). → 5/8." }],
          woorden: [{ woord: "opgegeten-breuk", uitleg: "Aantal opgegeten / totaal aantal." }],
          theorie: "Klassieke breuk-vraag: teller (boven) = aantal je hebt/eet, noemer (onder) = totaal.",
          voorbeelden: [{ type: "stap", tekst: "5 op van 8 totaal = 5/8 op. 3/8 over." }],
          basiskennis: [{ onderwerp: "Niet optellen", uitleg: "5+8=13 ❌. Noemer is alleen totaal-aantal stukken (8)." }],
          niveaus: { basis: "5/8. A.", simpeler: "Op = 5 (boven). Totaal = 8 (onder). → 5/8 opgegeten. = A.", nogSimpeler: "5/8 = A." },
        },
      },
      { q: "½ + ¼ = ?", options: ["¾","⅙","⅔","¼"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "1 − ⅓ = ?", options: ["⅔","¼","½","⅓"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Dat is wat je weghaalt."] },
      { q: "Welke breuk is groter: ½ of ⅓?", options: ["½","⅓","Gelijk","Niet te zeggen"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Wel — te bepalen."] },
      { q: "Vereenvoudig: ⁴⁄₈ = ?", options: ["½","⅓","¼","⅔"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "½ van 20 = ?", options: ["10","5","15","2"], answer: 0, wrongHints: [null, "Dat is ¼.", "Niet.", "Niet."] },
      { q: "¾ van 12 = ?", options: ["9","3","6","8"], answer: 0, wrongHints: [null, "Dat is ¼.", "Dat is ½.", "Niet."] },
      { q: "⅓ + ⅓ = ?", options: ["⅔","⅙","⅓","1"], answer: 0, wrongHints: [null, "Niet — niet kruisen.", "Geen optellen?", "Niet — niet 3 derden."] },
      { q: "Vereenvoudig: ⁶⁄₉ = ?", options: ["⅔","½","¾","⅓"], answer: 0, wrongHints: [null, "Niet — geen gemeen.", "Niet.", "Niet."] },
      { q: "Welke is **kleinst**: ¼, ½, of ¾?", options: ["¼","½","¾","Gelijk"], answer: 0, wrongHints: [null, "Helft.", "Grootste.", "Niet."] },
      { q: "Hoeveel **kwarten** zijn in 1 geheel?", options: ["4","2","8","3"], answer: 0, wrongHints: [null, "Twee halven.", "Achtsten misschien?", "Derden."] },
      { q: "1/10 als decimaal?", options: ["0,1","0,01","1,0","0,10 (?)"], answer: 0, wrongHints: [null, "Dat is ¹⁄₁₀₀.", "Dat is heel.", "Niet zinvol vraagteken."] },
      { q: "¾ als decimaal?", options: ["0,75","0,34","0,43","0,8"], answer: 0, wrongHints: [null, "Cijfers gehusseld.", "Cijfers gehusseld.", "Niet."] },
      { q: "Welke breuk is **gelijk** aan 0,5?", options: ["½","⅕","¼","⅓"], answer: 0, wrongHints: [null, "Vijfde.", "Kwart = 0,25.", "Derde ≈ 0,33."] },
      { q: "2/5 + 1/5 = ?", options: ["3/5","3/10","2/25","⅕"], answer: 0, wrongHints: [null, "Niet — noemer blijft.", "Niet — noemer blijft.", "Niet."] },
      { q: "½ × 4 = ?", options: ["2","½","¼","4"], answer: 0, wrongHints: [null, "Niet — vermenigvuldigd.", "Niet.", "Niet veranderd."] },
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
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
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
