// Leerpad: Schatten en afronden — voor groep 5-8
// 5 stappen. Cito-stijl praktijksommen.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#00c853",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["🤔","🔄","➕","🛒","🏆"];

const chapters = [
  { letter: "A", title: "Wat is schatten?", emoji: "🤔", from: 0, to: 0 },
  { letter: "B", title: "Afronden op 10/100/1000", emoji: "🔄", from: 1, to: 1 },
  { letter: "C", title: "Schatten van sommen", emoji: "➕", from: 2, to: 2 },
  { letter: "D", title: "Praktijk — kassabon + tijden", emoji: "🛒", from: 3, to: 3 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is schatten?",
    explanation: "**Schatten** is een getal **bijna goed** opgeven, niet helemaal precies. Vaak handig om snel te checken of een antwoord klopt.\n\n**Voorbeeld**:\n*'Hoeveel is 23 × 19?'*\n• Schatten: 20 × 20 = **400**.\n• Echte uitkomst: 23 × 19 = 437.\n• Klopt — beide bij 400.\n\n**Wanneer schatten**:\n• Snel checken bij Cito: 'Klinkt mijn antwoord redelijk?'\n• In de winkel: 'Past dit binnen mijn budget?'\n• Bij grote getallen waar exact weten niet hoeft.\n\n**Cito-truc — schatten als check**:\nNa een berekening, schat altijd om te zien of je antwoord 'klopt qua grootte'. Als je 437 antwoord en jouw schatting was 400, dan zit je goed. Als jouw antwoord 4370 was, klopt iets niet.\n\n**Verschil schatten vs. afronden**:\n• **Afronden**: een precies getal bijna-precies maken *(123 → 120)*.\n• **Schatten**: een ruwe inschatting *(soms zonder precies getal)*.",
    checks: [
      {
        q: "**Schat 28 × 41**. Welk antwoord komt het dichtst bij?",
        options: ["1200","1500","800","2000"],
        answer: 0,
        wrongHints: [null,"Te veel — schat: 30 × 40 = 1200, niet 1500.","Te weinig — controleer met 30 × 40.","Veel te veel."],
      },
      {
        q: "**Wanneer is schatten handig**?",
        options: ["Snel checken of een antwoord klopt","Alleen bij Cito","Nooit — altijd precies","Alleen bij grote getallen"],
        answer: 0,
        wrongHints: [null,"Niet alleen bij Cito — overal in echte rekensommen.","Wel handig — een snelle check is waardevol.","Ook bij kleine getallen kun je schatten."],
      },
      {
        q: "**Schat het totaal**: € 4,80 + € 7,20 + € 12,30",
        options: ["€ 24","€ 22","€ 26","€ 30"],
        answer: 0,
        wrongHints: [null,"Te weinig — schat: 5 + 7 + 12 = 24.","Te veel — controleer schatting.","Veel te veel."],
      },
    ],
  },

  {
    title: "Afronden op 10, 100 of 1000",
    explanation: "**Afronden** = een getal **vereenvoudigen** naar een 'rond' getal.\n\n**Regel — kijken naar de cijfer ERNA**:\n• **0, 1, 2, 3, 4** → **naar beneden** afronden.\n• **5, 6, 7, 8, 9** → **naar boven** afronden.\n\n**Afronden op 10**:\n• 23 → 20 *(3 = naar beneden)*\n• 27 → 30 *(7 = naar boven)*\n• 25 → 30 *(5 = naar boven, regel)*\n• 144 → 140 *(4 = naar beneden)*\n\n**Afronden op 100**:\n• 247 → 200 *(4 = naar beneden, kijk naar TIENTAL)*\n• 270 → 300 *(7 in tienen = naar boven)*\n• 850 → 900 *(5 in tienen = naar boven)*\n\n**Afronden op 1000**:\n• 2300 → 2000 *(3 in honderden = naar beneden)*\n• 2700 → 3000 *(7 in honderden = naar boven)*\n• 1500 → 2000.\n\n**Cito-truc — kijk naar het juiste cijfer**:\n• Op 10 → kijk naar **eenheden**.\n• Op 100 → kijk naar **tientallen**.\n• Op 1000 → kijk naar **honderdtallen**.\n\n**Veel-voorkomende fout**:\nNiet de juiste cijfer bekijken. Voor 'op 100': kijk naar de tien, niet de eenheden.",
    checks: [
      {
        q: "**Rond af op 10: 47**",
        options: ["50","40","45","47"],
        answer: 0,
        wrongHints: [null,"7 is meer dan 5 — naar boven afronden.","Geen tussen-getal — kies 40 of 50.","Niet afgerond."],
      },
      {
        q: "**Rond af op 100: 358**",
        options: ["400","300","350","360"],
        answer: 0,
        wrongHints: [null,"5 in tientallen → naar boven.","Niet op 100 afgerond — dat is op 10.","Niet op 100 afgerond — dat is op 10."],
      },
      {
        q: "**Rond af op 1000: 4500**",
        options: ["5000","4000","4500","5500"],
        answer: 0,
        wrongHints: [null,"5 in honderden → naar boven (regel).","Niet afgerond.","Te veel — afgerond op 1000 is 5000, niet 5500."],
      },
    ],
  },

  {
    title: "Schatten van sommen — eerst afronden, dan rekenen",
    explanation: "Bij Cito-vragen staat soms: *'Schat ongeveer'*. Dan ronden we eerst af en rekenen daarna.\n\n**Voorbeeld 1**:\n*'Schat 287 + 419'*\n• Afronden op 100: 300 + 400 = **700**.\n• Echte som: 287 + 419 = 706. Klopt!\n\n**Voorbeeld 2**:\n*'Schat 78 × 23'*\n• Afronden op 10: 80 × 20 = **1600**.\n• Echte som: 78 × 23 = 1794. Klopt qua grootte.\n\n**Voorbeeld 3 — verschil**:\n*'Schat 612 − 387'*\n• Afronden op 100: 600 − 400 = **200**.\n• Echte som: 612 − 387 = 225. Klopt.\n\n**Cito-tip**:\n• Schatten geeft **niet de exacte uitkomst**. Bij Cito is meestal een schatting goed als 't dicht bij de echte uitkomst zit.\n• Gebruik schatten als **check**: 'klopt mijn echte antwoord met mijn schatting?'\n\n**Hoe accurate?**:\n• Op 10 afronden = ruim 90% accuraat.\n• Op 100 afronden = ruim 80% accuraat.\n• Op 1000 afronden = ruim 70% accuraat.\n\n**Praktijk**:\n*'Drie boodschappen kosten € 12,80 + € 8,40 + € 6,75. Klopt het dat ik € 30 nodig heb?'*\n• Schatten: €13 + €8 + €7 = **€28**.\n• Antwoord: ja, €30 is genoeg.",
    checks: [
      {
        q: "**Schat 198 + 412** (afgerond op 100):",
        options: ["600","500","700","400"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer: 200 + 400 = 600.","Te veel — controleer afronding.","Veel te weinig."],
      },
      {
        q: "**Schat 39 × 21** (afgerond op 10):",
        options: ["800","600","1000","900"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer: 40 × 20 = 800.","Te veel — niet 50 × 20.","Te veel — heb je 30 ipv 20 gerekend?"],
      },
      {
        q: "**Schat 732 − 289** (afgerond op 100):",
        options: ["400","500","300","450"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: 700 − 300 = 400.","Te weinig — heb je 700 - 400 gedaan?","Niet afgerond — dat is exact."],
      },
    ],
  },

  {
    title: "Praktijk — kassabon + tijdsbesteding",
    explanation: "Schatten is overal handig in praktijk:\n\n**Voorbeeld 1 — winkel-budget**:\n*'Heb ik genoeg geld? Met € 25 kunnen we kopen: brood € 2,15 + kaas € 4,30 + appels € 3,80 + chips € 1,50 + koek € 2,90.'*\n\nSchatten:\n• 2 + 4 + 4 + 2 + 3 = 15. Genoeg!\n\n**Voorbeeld 2 — reistijd**:\n*'Trein vertrekt 14:18, aankomst 16:47. Hoe lang duurt de reis ongeveer?'*\n• Afronden: 14:20 → 16:50 = **2,5 uur**.\n• Echte tijd: 2 uur 29 min ≈ 2,5 uur. Klopt.\n\n**Voorbeeld 3 — afstand schatten**:\n*'Sven loopt naar school. Hij doet er 28 minuten over. Hoe ver is dat ongeveer?'*\n• Mensen lopen ~5 km/uur, dus ~80 m/min.\n• 28 min × 80 m/min ≈ 2200 m = **~2 km**.\n\n**Cito-tip — controle achter elke som**:\nNa elke berekening — schat het antwoord. Klopt het qua grootte? Zo nee → fout gemaakt, opnieuw kijken.",
    checks: [
      {
        q: "Een kassabon: **€ 4,85 + € 7,15 + € 12,40 + € 3,60**. Schat:",
        options: ["€ 28","€ 25","€ 30","€ 22"],
        answer: 0,
        wrongHints: [null,"Te weinig — schat: 5 + 7 + 12 + 4 = 28.","Te veel — controleer schatting.","Veel te weinig."],
      },
      {
        q: "Een rit duurt **2 uur 47 min**. Afgerond op kwartiers — hoeveel?",
        options: ["2 uur 45 min","3 uur","2 uur 30 min","3 uur 15 min"],
        answer: 0,
        wrongHints: [null,"Te veel — afronden op kwartiers betekent: 47 min wordt 45.","Te weinig — 47 wordt 45, niet 30.","Te veel."],
      },
      {
        q: "**€ 49,80 + € 24,30** — schat:",
        options: ["€ 74","€ 70","€ 80","€ 75"],
        answer: 0,
        wrongHints: [null,"Te weinig — schat: 50 + 24 = 74.","Te veel — controleer schatting.","Te veel — bijna goed maar 50+24 = 74."],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — schatten + afronden mix",
    explanation: "Mix-toets met afrond- en schat-vragen in Cito-stijl.\n\nVeel succes!",
    checks: [
      {
        q: "**Rond 4567 af op 1000**:",
        options: ["5000","4000","4500","4600"],
        answer: 0,
        wrongHints: [null,"5 in honderden → naar boven.","Niet op 1000 afgerond.","Niet op 1000."],
      },
      {
        q: "**Schat 248 + 391 + 152** (op 100):",
        options: ["800","700","900","600"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer: 200+400+200 = 800.","Te veel — schatting controleren.","Veel te weinig."],
      },
      {
        q: "Een biljet van **€ 50** voor boodschappen van **€ 12,40 + € 8,30 + € 25,80**. **Past 't?**",
        options: ["Net niet — schat 47","Ja, ruim genoeg","Nee, te veel","Onmogelijk te zeggen"],
        answer: 0,
        wrongHints: [null,"12+8+26 = 46. Plus extras. Bijna 50 maar net.","Niet ruim — kort op 50.","Past wel — net.","Wel — schat de som."],
      },
      {
        q: "**Schat 612 ÷ 7**:",
        options: ["~87","~100","~70","~120"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: 600 ÷ 7 ≈ 86.","Te weinig — controleer: 600 ÷ 7 ≈ 86.","Te veel."],
      },
      {
        q: "**Rond 2849 af op 100**:",
        options: ["2800","2900","2850","3000"],
        answer: 0,
        wrongHints: [null,"4 in tientallen → naar beneden.","Niet op 100 afgerond.","Niet op 100 — dat is op 1000."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const schattenAfronden = {
  id: "schatten-afronden",
  title: "Schatten en afronden — Cito groep 5-8",
  emoji: "🤔",
  level: "groep5-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen — schatten en afronden",
  intro:
    "Schatten en afronden voor groep 5-8: wanneer schatten, afronden op 10/100/1000, schatten van sommen, praktijk met kassabon en tijden. ~12 min.",
  triggerKeywords: [
    "schatten","afronden","ongeveer","ronde getallen","tiental",
    "honderdtal","duizendtal","kassabon",
  ],
  chapters,
  steps,
};

export default schattenAfronden;
