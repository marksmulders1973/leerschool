// Leerpad: Geld rekenen — voor groep 5-8
// 5 stappen. Cito-stijl praktijksommen.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#00c853",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  euro: "#ffaa30",
};

const stepEmojis = ["💶","➕","🛒","📊","🏆"];

const chapters = [
  { letter: "A", title: "Euro's en centen", emoji: "💶", from: 0, to: 0 },
  { letter: "B", title: "Optellen en aftrekken", emoji: "➕", from: 1, to: 1 },
  { letter: "C", title: "Wisselgeld + slim kopen", emoji: "🛒", from: 2, to: 2 },
  { letter: "D", title: "Vergelijken — wat is voordeligst?", emoji: "📊", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Euro's en centen",
    explanation: "**1 euro = 100 cent**. Net zoals 1 meter = 100 cm.\n\nGeld schrijf je met een **komma** tussen euro's en centen:\n• € 1,50 = 1 euro 50 cent\n• € 0,75 = 75 cent\n• € 12,05 = 12 euro 5 cent *(let op: nul-cent niet vergeten!)*\n• € 100,00 = honderd euro precies\n\n**Belangrijk**: na de komma altijd **2 cijfers** voor de centen.\n• € 3,5 schrijven we als € 3,50.\n• € 0,5 = € 0,50.\n• € 10 = € 10,00.\n\n**Munten en biljetten in Nederland**:\n• Munten: 1, 2, 5, 10, 20, 50 cent + 1 en 2 euro.\n• Biljetten: 5, 10, 20, 50, 100, 200, 500 euro.\n\n**Cent → euro** *(omrekenen)*:\n• 250 cent = € 2,50.\n• 1000 cent = € 10,00.\n• 75 cent = € 0,75.\n\n**Euro → cent**:\n• € 3,40 = 340 cent.\n• € 0,80 = 80 cent.\n• € 1,05 = 105 cent.",
    checks: [
      {
        q: "**€ 2,75** — hoeveel **cent**?",
        options: ["275","2750","27,5","27"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je per ongeluk × 1000 ipv × 100 gedaan?","Past niet — cent zijn hele getallen, geen kommagetallen.","Te weinig — komma vergeten?"],
      },
      {
        q: "Welk bedrag is **correct geschreven** voor 'drie euro vijftig cent'?",
        options: ["€ 3,50","€ 3,5","€ 350","€ 3,05"],
        answer: 0,
        wrongHints: [null,"Bijna — maar geld schrijf je altijd met 2 cijfers achter de komma.","Veel te veel — dat is € 350 (drie­honderd­vijftig euro).","Dat is 5 cent, niet 50 cent."],
      },
      {
        q: "**450 cent** = ?",
        options: ["€ 4,50","€ 0,45","€ 45,00","€ 4,05"],
        answer: 0,
        wrongHints: [null,"Komma fout — heb je per ongeluk × 100 ipv ÷ 100 gedaan?","Veel te veel — dat is 4500 cent.","5 vergeten meegerekend?"],
      },
    ],
  },

  {
    title: "Optellen en aftrekken met geld",
    explanation: "Geldsommen werken net als gewone sommen, maar pas op met de **komma**.\n\n**Voorbeelden — optellen**:\n• € 2,50 + € 1,75 = ?\n  - 2,50 + 1,75 — schrijf onder elkaar, zorg dat komma's recht staan.\n  - Eindbedrag: **€ 4,25**.\n\n• € 0,80 + € 0,30 = ?\n  - Cents: 80 + 30 = 110 cent = € 1,10.\n  - Of: 0,80 + 0,30 = **1,10**.\n\n**Voorbeelden — aftrekken**:\n• € 5,00 − € 2,35 = ?\n  - Schrijf onder elkaar: 5,00 − 2,35.\n  - Eindbedrag: **€ 2,65**.\n\n• € 10,00 − € 3,75 = ?\n  - Truc: gebruik 9,99 − 3,75 = 6,24, dan +0,01 = **€ 6,25**.\n\n**Cito-tip**:\n• Schrijf altijd **netjes onder elkaar** met komma's recht.\n• Cento's tellen los kan ook: € 2,75 + € 1,80 → 275 + 180 = 455 cent → **€ 4,55**.",
    checks: [
      {
        q: "**€ 3,40 + € 1,75** = ?",
        options: ["€ 5,15","€ 5,05","€ 4,95","€ 5,25"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer cent-deel: 40+75=115 = 1 euro 15.","Veel te weinig — heb je het euro-deel correct?","Te veel."],
      },
      {
        q: "**€ 10,00 − € 3,45** = ?",
        options: ["€ 6,55","€ 6,45","€ 7,55","€ 6,65"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer cent-deel.","Veel te veel — heb je 3,45 wel afgetrokken?","Te veel — bijna goed maar niet helemaal."],
      },
      {
        q: "Mam koopt **brood € 2,15**, **kaas € 4,80**, **fruit € 3,55**. Totaal?",
        options: ["€ 10,50","€ 9,50","€ 11,50","€ 10,40"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je een product overgeslagen?","Te veel — controleer met schatting (2+5+4=11).","Te weinig — controleer cent-totaal."],
      },
    ],
  },

  {
    title: "Wisselgeld berekenen",
    explanation: "Bij **wisselgeld** krijg je terug = (wat je betaalt) − (wat het kost).\n\n**Voorbeeld**: een ijsje kost € 1,80. Je betaalt met € 5. Wisselgeld?\n• 5,00 − 1,80 = **€ 3,20**.\n\n**Cito-truc — terug-tellen**:\nJe kunt ook **vooruit tellen** vanaf de prijs.\n• € 1,80 → 0,20 erbij → € 2,00 *(20 cent)*\n• € 2,00 → 3 erbij → € 5,00 *(€ 3)*\n• Totaal terug: **€ 3 + 20 cent = € 3,20**.\n\n**Voorbeeld 2**: 3 spullen van € 2,75 betaalt met biljet van € 10:\n• 3 × 2,75 = 8,25.\n• 10 − 8,25 = **€ 1,75 wisselgeld**.\n\n**Cito-tip**:\nReken altijd met de **gevolgde cijfers** *(maak biljet ipv 5,00 lees als € 5)*. Schrijf netjes op.",
    checks: [
      {
        q: "Een tas kost **€ 24,50**. Je betaalt met **€ 50**. Wisselgeld?",
        options: ["€ 25,50","€ 24,50","€ 26,50","€ 35,50"],
        answer: 0,
        wrongHints: [null,"Dat is de prijs — je hebt aftrekking nodig.","Te veel — heb je 50 wel meegenomen?","Veel te veel — controleer met schatting."],
      },
      {
        q: "**3 koeken van € 1,25** met een **€ 5-biljet**. Wisselgeld?",
        options: ["€ 1,25","€ 0,75","€ 2,25","€ 3,75"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer: 3 × 1,25 = 3,75. 5 − 3,75 = ?","Te veel — kontroleer som van koeken.","Dat is wat de koeken kosten, niet wisselgeld."],
      },
      {
        q: "Een speelgoed van **€ 17,40** met **2 × € 10-biljetten**. Wisselgeld?",
        options: ["€ 2,60","€ 2,40","€ 3,60","€ 7,60"],
        answer: 0,
        wrongHints: [null,"Te weinig — vooruit-tellen: van 17,40 naar 18 = 0,60. Van 18 naar 20 = 2,00. Totaal 2,60.","Te veel — fout met cent-deel.","Te veel — heb je 1 biljet ipv 2 gerekend?"],
      },
    ],
  },

  {
    title: "Wat is voordeligst? — vergelijken",
    explanation: "Cito-vragen vragen vaak: **welke aanbieding is goedkoper per stuk**?\n\n**Voorbeeld**: chips!\n• A: een zak van **200 g** voor **€ 1,80**.\n• B: een zak van **500 g** voor **€ 4,00**.\n\nWelke is **voordeliger per gram**?\n\n**Aanpak — prijs per eenheid berekenen**:\n• A: 1,80 ÷ 200 = € 0,009 per gram = **0,9 cent per g**.\n• B: 4,00 ÷ 500 = € 0,008 per gram = **0,8 cent per g**.\n\n**Antwoord**: B is goedkoper per gram.\n\n**Cito-truc — vergelijk per 100 g**:\nMakkelijker zonder kommagetallen:\n• A: 200 g voor € 1,80 → 100 g = € 0,90.\n• B: 500 g voor € 4,00 → 100 g = € 0,80.\n• Per 100 g: B is goedkoper.\n\n**Voorbeeld 2 — limonade**:\n• A: 1 L = € 2,40.\n• B: 1,5 L = € 3,30.\n\nPer L:\n• A: € 2,40.\n• B: 3,30 ÷ 1,5 = € 2,20.\n• B is voordeliger.\n\n**Cito-tip**:\nReken altijd **per zelfde eenheid** *(per 100 g, per liter, per stuk)*. Anders vergelijk je appels met peren.",
    checks: [
      {
        q: "Pak A: **6 koekjes voor € 1,20**. Pak B: **10 koekjes voor € 2,40**. Welke is **goedkoper per koekje**?",
        options: ["A","B","Hetzelfde","Niet te zeggen"],
        answer: 0,
        wrongHints: [null,"Reken: A is € 0,20/koekje. B is € 0,24/koekje.","Niet hetzelfde — reken per koekje.","Wel te zeggen — deel prijs door aantal."],
      },
      {
        q: "Pak A: **500 g rijst € 1,50**. Pak B: **1 kg rijst € 2,80**. **Voordeligst**?",
        options: ["B","A","Hetzelfde","Niet vergelijkbaar"],
        answer: 0,
        wrongHints: [null,"A: 1,50 / 500 = € 0,30/100g. B: 2,80/1000 = € 0,28/100g. B is iets goedkoper.","Niet hetzelfde — reken per 100 g.","Wel — beide is rijst."],
      },
      {
        q: "Pak A: **4 yoghurts € 2,00**. Pak B: **6 yoghurts € 2,40**. **Voordeligst per stuk**?",
        options: ["B","A","Hetzelfde","B duurder"],
        answer: 0,
        wrongHints: [null,"A: € 0,50/stuk. B: € 0,40/stuk. B is goedkoper.","Niet hetzelfde — reken per stuk.","Andersom — B is goedkoper."],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — geldsommen mix",
    explanation: "Mix-toets met geldsommen in Cito-stijl. Verschillende vragen — winkel, wisselgeld, vergelijken.\n\nVeel succes!",
    checks: [
      {
        q: "**€ 4,75 + € 2,80** = ?",
        options: ["€ 7,55","€ 7,45","€ 6,55","€ 7,65"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer cent-deel.","Te weinig — euro-deel correct?","Te veel."],
      },
      {
        q: "Een tas van **€ 35**, **15% korting**. Wat **betaal** je?",
        options: ["€ 29,75","€ 30","€ 5,25","€ 31,75"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer korting (15% van 35 = 5,25).","Klopt niet — dat is wat je BESPAART, niet betaalt.","Te veel."],
      },
      {
        q: "Pak A: **3 sokken € 6**. Pak B: **5 sokken € 8**. Per **paar** voordeligst?",
        options: ["B","A","Hetzelfde","Geen verschil"],
        answer: 0,
        wrongHints: [null,"A: € 2/paar. B: € 1,60/paar. B is goedkoper.","Niet hetzelfde.","Wel — reken per stuk."],
      },
      {
        q: "Tom heeft **€ 25**. Hij koopt boeken van **€ 8,50** + **€ 12,75**. Hoeveel **over**?",
        options: ["€ 3,75","€ 4,75","€ 2,75","€ 21,25"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je beide boeken meegerekend?","Te weinig — controleer som van boeken.","Veel te veel — controleer aftrekking."],
      },
      {
        q: "**12 stickers van € 0,15** — totaal?",
        options: ["€ 1,80","€ 1,50","€ 1,20","€ 2,00"],
        answer: 0,
        wrongHints: [null,"Te weinig — 12 × 15 cent = 180 cent.","Veel te weinig.","Te veel."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const geldRekenen = {
  id: "geld-rekenen",
  title: "Geld rekenen — Cito groep 5-8",
  emoji: "💶",
  level: "groep5-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen — geld",
  intro:
    "Geld rekenen voor groep 5-8: euro's en centen, optellen + aftrekken, wisselgeld berekenen, vergelijken (wat is voordeligst). Cito-stijl praktijksommen. ~12 min.",
  triggerKeywords: [
    "geld","euro","cent","wisselgeld","prijs","kosten","betalen","goedkoper",
    "voordeliger","vergelijken","kassabon",
  ],
  chapters,
  steps,
};

export default geldRekenen;
