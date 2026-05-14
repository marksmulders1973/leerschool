// Leerpad: Tijdsduur uitrekenen — groep 6-8 PO.
// Cito-onderdeel meten: tijd. Referentieniveau 1F.
// 6 stappen met uitlegPad. Eenheden expliciet (uur, minuten, seconden).
// Bouwt voort op klokkijken (groep 3-5).

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  klok: "#ffd54f",
  hand: "#ff7043",
  highlight: "#ffd54f",
};

const stepEmojis = ["⏰", "⏱️", "➕", "🚂", "🏫", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is tijdsduur?", emoji: "⏰", from: 0, to: 0 },
  { letter: "B", title: "Tussen 2 klokken", emoji: "⏱️", from: 1, to: 1 },
  { letter: "C", title: "Tijden optellen & aftrekken", emoji: "➕", from: 2, to: 2 },
  { letter: "D", title: "24-uurs format", emoji: "🚂", from: 3, to: 3 },
  { letter: "E", title: "Praktijk — school + reizen", emoji: "🏫", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function klokSvg(uur, min, label) {
  const cx = 80, cy = 95, r = 50;
  // Wijzers
  const uurHoek = ((uur % 12) + min / 60) * 30 - 90; // graden
  const minHoek = min * 6 - 90;
  const uurRad = (uurHoek * Math.PI) / 180;
  const minRad = (minHoek * Math.PI) / 180;
  const uurLen = r * 0.5;
  const minLen = r * 0.78;
  const uurX = cx + uurLen * Math.cos(uurRad);
  const uurY = cy + uurLen * Math.sin(uurRad);
  const minX = cx + minLen * Math.cos(minRad);
  const minY = cy + minLen * Math.sin(minRad);
  // Cijfers 1-12
  let cijfers = "";
  for (let i = 1; i <= 12; i++) {
    const h = (i * 30 - 90) * (Math.PI / 180);
    const x = cx + (r - 10) * Math.cos(h);
    const y = cy + (r - 10) * Math.sin(h) + 4;
    cijfers += `<text x="${x}" y="${y}" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">${i}</text>`;
  }
  return `<svg viewBox="0 0 280 200">
<rect x="0" y="0" width="280" height="200" fill="${COLORS.paper}"/>
<text x="140" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">${label}</text>
<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgba(255,213,79,0.08)" stroke="${COLORS.klok}" stroke-width="1.5"/>
${cijfers}
<line x1="${cx}" y1="${cy}" x2="${uurX}" y2="${uurY}" stroke="${COLORS.text}" stroke-width="3" stroke-linecap="round"/>
<line x1="${cx}" y1="${cy}" x2="${minX}" y2="${minY}" stroke="${COLORS.hand}" stroke-width="2" stroke-linecap="round"/>
<circle cx="${cx}" cy="${cy}" r="3" fill="${COLORS.hand}"/>
<text x="180" y="80" fill="${COLORS.curve2}" font-size="22" font-family="Courier New, monospace" font-weight="bold">${String(uur).padStart(2, "0")}:${String(min).padStart(2, "0")}</text>
<text x="180" y="105" fill="${COLORS.muted}" font-size="11" font-family="Arial">${uur < 12 ? "ochtend / 's morgens" : "middag / avond"}</text>
<text x="180" y="125" fill="${COLORS.muted}" font-size="11" font-family="Arial">24-uurs: ${String(uur).padStart(2, "0")}:${String(min).padStart(2, "0")}</text>
</svg>`;
}

function tijdsverschilSvg() {
  return `<svg viewBox="0 0 320 130">
<rect x="0" y="0" width="320" height="130" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Tijdsduur — stap voor stap optellen</text>
<text x="30" y="55" fill="${COLORS.text}" font-size="14" font-family="Courier New, monospace">10:45</text>
<text x="80" y="55" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ tot 11:00 = </text>
<text x="180" y="55" fill="${COLORS.highlight}" font-size="14" font-family="Courier New, monospace" font-weight="bold">15 min</text>
<text x="30" y="80" fill="${COLORS.text}" font-size="14" font-family="Courier New, monospace">11:00</text>
<text x="80" y="80" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ tot 12:00 = </text>
<text x="180" y="80" fill="${COLORS.highlight}" font-size="14" font-family="Courier New, monospace" font-weight="bold">1 uur</text>
<text x="30" y="105" fill="${COLORS.text}" font-size="14" font-family="Courier New, monospace">12:00</text>
<text x="80" y="105" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ tot 12:20 = </text>
<text x="180" y="105" fill="${COLORS.highlight}" font-size="14" font-family="Courier New, monospace" font-weight="bold">20 min</text>
<text x="240" y="80" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">SOM:</text>
<text x="240" y="100" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">1u 35min</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is tijdsduur?
  {
    title: "Wat is tijdsduur?",
    explanation:
      "**Tijdsduur** is **hoe lang iets duurt** — van begin tot eind.\n\n**Voorbeelden**:\n• Een schooldag duurt 6 uur en 30 minuten.\n• Een voetbalwedstrijd duurt 90 minuten.\n• Een aflevering van een tekenfilm duurt 25 minuten.\n• Slapen 's nachts: 9 uur.\n\n**Eenheden voor tijd**:\n• **seconden** (s) — voor heel korte dingen *(een knipoog ~0,3 s)*.\n• **minuten** (min) — voor korte stukken *(les van 45 min)*.\n• **uren** (u) — voor langere periodes *(school 6 uur)*.\n• **dagen** — voor heel lange dingen *(vakantie 14 dagen)*.\n\n**Belangrijke afspraken** *(uit je hoofd!)*:\n• 1 minuut = **60 seconden**.\n• 1 uur = **60 minuten** = **3600 seconden**.\n• 1 dag = **24 uur**.\n• 1 week = 7 dagen.\n• 1 jaar = ongeveer 365 dagen.\n\n**Cito-truc — niet 100, maar 60!**\nBij tijd gaat het in stappen van **60** *(niet 100 zoals bij geld)*. Dus 1 uur en 70 minuten ≠ 1u 70m, maar 2u 10m (omdat 70 min = 60 min + 10 min = 1u 10 min).\n\n**Wat is verschil tussen 'tijdstip' en 'tijdsduur'?**\n• **Tijdstip** = wanneer? (bv. om 14:30 uur).\n• **Tijdsduur** = hoe lang? (bv. 45 minuten).",
    checks: [
      {
        q: "**1 uur** is hoeveel **minuten**?",
        options: ["60 minuten", "100 minuten", "30 minuten", "24 minuten"],
        answer: 0,
        wrongHints: [null, "Niet 100 — tijd is geen 100-base, maar 60.", "Dat is een half uur.", "24 = uren in een dag, niet minuten in een uur."],
      },
      {
        q: "**3 minuten** = ... **seconden**?",
        options: ["180 sec", "30 sec", "60 sec", "300 sec"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1 min = 60 sec. Dus 3 × 60 = 180.", "Dat is 1 minuut.", "Te veel — controleer 3 × 60."],
      },
      {
        q: "Wat is **tijdsduur**?",
        options: ["Hoe lang iets duurt", "Wanneer iets begint", "De huidige tijd", "Het dagdeel"],
        answer: 0,
        wrongHints: [null, "Dat is een tijdstip, niet tijdsduur.", "Dat is een tijdstip.", "Een dagdeel is iets als 'ochtend' — niet de tijdsduur zelf."],
      },
      {
        q: "**1 uur 70 minuten** — wat is dat in netjes geschreven tijd?",
        options: ["2 uur 10 minuten", "1 uur 70 minuten", "70 uur 1 minuut", "1 uur en een halve"],
        answer: 0,
        wrongHints: [null, "Dat is niet de standaard — meer dan 60 minuten = uur erbij.", "Te veel — uren en minuten verwisseld.", "Dat zou 1,5 uur zijn = 1u 30m, niet 70 min."],
        uitlegPad: {
          stappen: [
            { titel: "Splits 60 minuten", tekst: "70 min = 60 min + 10 min = 1 uur + 10 min. Plus de bestaande 1 uur = 2 uur 10 min." },
          ],
          woorden: [{ woord: "60-stap", uitleg: "Bij tijd: elke 60 minuten = 1 uur. Niet 100." }],
          theorie: "Als minuten ≥ 60: trek 60 af, voeg 1 uur toe.",
          voorbeelden: [{ type: "stap", tekst: "1u 70 min → 1u + (60+10) min → (1+1)u + 10 min = 2u 10 min." }],
          basiskennis: [{ onderwerp: "Geen 100", uitleg: "Tijd gaat met 60, niet 100!" }],
          niveaus: {
            basis: "2u 10 min. A.",
            simpeler: "70 minuten is meer dan 1 uur. 70 min = 60 min + 10 min = 1 uur + 10 min. Plus de 1 uur die er al was = 2 uur 10 min. = A.",
            nogSimpeler: "2u 10min = A.",
          },
        },
      },
    ],
  },

  // STAP 2: Tijdsduur tussen 2 klokken
  {
    title: "Tijdsduur tussen 2 klokken",
    explanation:
      "Vaak vraagt Cito: *'Hoe lang duurt het van 10:45 tot 12:20?'*\n\n**Cito-stappenplan — opklimmen**:\n1. Reken van **start-tijd naar volgende heel uur**.\n2. Tel **hele uren** erbij tot je vóór de eind-tijd zit.\n3. Tel de **resterende minuten** erbij.\n4. Tel alles op = tijdsduur.\n\n**Voorbeeld — 10:45 tot 12:20**:\n• Stap 1: 10:45 → 11:00 = **15 minuten**.\n• Stap 2: 11:00 → 12:00 = **1 uur**.\n• Stap 3: 12:00 → 12:20 = **20 minuten**.\n• Stap 4: 15 min + 1 uur + 20 min = **1 uur 35 minuten**.\n\n**Voorbeeld — 8:30 tot 11:15**:\n• 8:30 → 9:00 = 30 min.\n• 9:00 → 11:00 = 2 uur.\n• 11:00 → 11:15 = 15 min.\n• Totaal: 30 + 2u + 15 = **2 uur 45 minuten**.\n\n**Voorbeeld — 14:50 tot 15:20** *(over een heel uur heen)*:\n• 14:50 → 15:00 = 10 min.\n• 15:00 → 15:20 = 20 min.\n• Totaal: **30 minuten**.\n\n**Cito-truc — kleine duur (binnen 1 uur)**:\nGewoon minuten aftrekken werkt soms ook:\n• 15:20 − 14:50: 20 − 50 gaat niet → leen 60 min van het uur: (15:80) − (14:50) — wait, beter eerst de opklim-methode gebruiken.\n\n**Veel-voorkomende fout**:\n• Vergeten over het heel uur heen te springen. *'Van 10:50 tot 11:10 — niet 20 min, maar 20 min ✓'*. Wacht — wel correct. Maar: *'Van 10:50 tot 11:30 — niet 80 min, maar 40 min'* — splits hier: 10 min + 30 min = 40 min.",
    svg: tijdsverschilSvg(),
    checks: [
      {
        q: "Van **9:30** tot **10:00** is hoe lang?",
        options: ["30 min", "1 uur", "10 min", "60 min"],
        answer: 0,
        wrongHints: [null, "Te veel — 9:30 → 10:00 is een halve, niet een hele.", "Te weinig — een half uur is 30, niet 10.", "Te veel — dat zou 9:30 → 10:30 zijn."],
      },
      {
        q: "Van **8:45** tot **10:15** is hoe lang?",
        options: ["1 uur 30 min", "2 uur 30 min", "1 uur 15 min", "1 uur 45 min"],
        answer: 0,
        wrongHints: [null, "Te veel — controleer per stap.", "Te weinig — vergeet niet het halve uur boven.", "Te veel — controleer."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: naar 9:00", tekst: "8:45 → 9:00 = 15 min." },
            { titel: "Stap 2: heel uur", tekst: "9:00 → 10:00 = 1 uur." },
            { titel: "Stap 3: rest", tekst: "10:00 → 10:15 = 15 min." },
            { titel: "Stap 4: optellen", tekst: "15 min + 1u + 15 min = 1 uur 30 min." },
          ],
          woorden: [{ woord: "opklimmen", uitleg: "Stapsgewijs van begin-tijd via hele uren naar eind-tijd." }],
          theorie: "Splits in: tot heel uur / hele uren / rest minuten.",
          voorbeelden: [{ type: "stap", tekst: "8:45 → 10:15 in 3 stappen: 15+60+15 = 90 min = 1u 30 min." }],
          basiskennis: [{ onderwerp: "Niet zomaar aftrekken", uitleg: "15 − 45 gaat niet — leen via het uur." }],
          niveaus: {
            basis: "1 uur 30 min. A.",
            simpeler: "Opklimmen: 8:45 → 9:00 (15 min), 9:00 → 10:00 (1 uur), 10:00 → 10:15 (15 min). Totaal: 15+60+15 = 90 min = 1u 30 min. = A.",
            nogSimpeler: "1u 30m = A.",
          },
        },
      },
      {
        q: "Van **13:20** tot **15:50** is hoe lang?",
        options: ["2 uur 30 min", "2 uur 70 min", "3 uur 30 min", "1 uur 30 min"],
        answer: 0,
        wrongHints: [null, "Niet 70 min — netjes 'minder dan 60'.", "Te veel — controleer 13:20 → 15:50.", "Te weinig — zit 13 → 15, dat is 2 uur basis."],
      },
      {
        q: "Van **11:50** tot **12:10** is hoe lang?",
        options: ["20 min", "1 uur 40 min", "40 min", "10 min"],
        answer: 0,
        wrongHints: [null, "Niet 1u40 — kort over de 12 heen.", "Te veel — minder dan een uur.", "Niet 10 — denk: 10 min vóór 12, plus 10 min ná 12 = 20 min."],
      },
    ],
  },

  // STAP 3: Tijden optellen + aftrekken
  {
    title: "Tijden optellen en aftrekken",
    explanation:
      "Bij **tijden optellen** moet je opletten: als minuten ≥ 60, draag je een uur op.\n\n**Voorbeeld — optellen**:\n*'Een film duurt 1 uur 45 minuten. Ze begint om 15:30. Wanneer is hij afgelopen?'*\n• 15:30 + 1 uur = 16:30.\n• 16:30 + 45 min = 17:15 *(want 30 + 45 = 75 min = 1 uur 15 min)*.\n• Antwoord: **17:15**.\n\n**Voorbeeld — uren+minuten optellen**:\n*'2 uur 40 min + 1 uur 35 min = ?'*\n• Uren: 2 + 1 = 3 uur.\n• Minuten: 40 + 35 = 75 min = **1 uur 15 min**.\n• Totaal: 3 uur + 1 uur 15 min = **4 uur 15 min**.\n\n**Voorbeeld — aftrekken**:\n*'Een treinrit duurde 2 uur 20 min. Ik kwam aan om 14:05. Wanneer ben ik vertrokken?'*\n• 14:05 − 2 uur = 12:05.\n• 12:05 − 20 min = 11:45.\n• Antwoord: vertrokken om **11:45**.\n\n**Cito-truc — lenen bij aftrekken**:\nAls je minuten af moet trekken en het gaat niet *(bv. 5 min − 20 min)*: leen 60 min van het uur.\n• 14:05 − 20 min = 13:65 − 20 = **13:45**.\n• Of: 14:05 − 5 min = 14:00, dan nog 15 min eraf = 13:45.\n\n**Veel-voorkomende fout**:\nVergeten te lenen of vergeten te dragen. Tijd gaat met 60, niet 100!",
    checks: [
      {
        q: "**1 uur 40 min + 50 min** = ?",
        options: ["2 uur 30 min", "1 uur 90 min", "2 uur 20 min", "1 uur 50 min"],
        answer: 0,
        wrongHints: [null, "Bij tijd schrijven we minuten ≥ 60 niet zo — denk: 90 min is hoeveel uur + hoeveel minuten?", "Te weinig — controleer hoeveel 40 + 50 minuten zijn.", "Te weinig — niet alleen 50 erbij, ook de 40 meetellen."],
      },
      {
        q: "Film begint **19:30** en duurt **1 uur 50 min**. **Eindtijd**?",
        options: ["21:20", "20:80", "21:50", "20:20"],
        answer: 0,
        wrongHints: [null, "Niet 80 min — netjes: 19:30 + 1u = 20:30, + 50 min = 21:20.", "Te veel — eindtijd is vóór 21:50.", "Te weinig — 50 min eraf maar je telt op."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst uur erbij", tekst: "19:30 + 1 uur = 20:30." },
            { titel: "Dan minuten erbij", tekst: "20:30 + 50 min: 30 + 50 = 80 min = 1 uur 20 min. Dus 20:30 + 50 min = 21:20." },
          ],
          woorden: [{ woord: "dragen", uitleg: "Als minuten ≥ 60: trek 60 af, voeg 1 uur toe." }],
          theorie: "Optellen tijd: eerst uren, dan minuten. Bij ≥60 min: dragen.",
          voorbeelden: [{ type: "stap", tekst: "19:30 + 1u 50min = 21:20." }],
          basiskennis: [{ onderwerp: "60 niet 100", uitleg: "Tijd is geen decimaal." }],
          niveaus: {
            basis: "19:30 + 1u 50min = 21:20. A.",
            simpeler: "Voeg eerst 1 uur toe: 19:30 → 20:30. Voeg dan 50 min toe: 20:30 + 50 min = 21:20 (30 + 50 = 80 = 1u 20). = A.",
            nogSimpeler: "21:20 = A.",
          },
        },
      },
      {
        q: "Aankomst **15:10**, trein duurde **2 uur 25 min**. **Wanneer vertrokken**?",
        options: ["12:45", "13:45", "13:35", "17:35"],
        answer: 0,
        wrongHints: [null, "Net niet — 15:10 − 2u = 13:10. 13:10 − 25 min = 12:45.", "Te veel — heb je goed afgetrokken?", "Te veel — controleer.", "Optellen — je moet aftrekken."],
      },
      {
        q: "**3 uur 15 min − 1 uur 40 min** = ?",
        options: ["1 uur 35 min", "2 uur 25 min", "1 uur 25 min", "2 uur 35 min"],
        answer: 0,
        wrongHints: [null, "Net niet — leen: 3u15 = 2u75, 2u75 − 1u40 = 1u35.", "Te veel — controleer.", "Te weinig.", "Te veel."],
      },
    ],
  },

  // STAP 4: 24-uurs format
  {
    title: "24-uurs format — treinen, vluchten, programma's",
    explanation:
      "Bij **roosters en vertrektijden** gebruiken we het **24-uurs format**: geen ochtend/middag, maar gewoon 00:00 tot 23:59.\n\n**Hoe lees je 24-uurs tijden?**\n• **00:00** tot **11:59** = ochtend.\n• **12:00** = middag.\n• **13:00** = 1 uur 's middags.\n• **18:00** = 6 uur 's avonds.\n• **22:00** = 10 uur 's avonds.\n• **23:59** = bijna middernacht.\n\n**Omrekenen 12-uurs → 24-uurs**:\n• 's morgens 8 uur → **08:00**.\n• 's middags 1 uur → **13:00** (12 + 1).\n• 's avonds 7 uur → **19:00** (12 + 7).\n• 's avonds 11 uur → **23:00** (12 + 11).\n\n**Voorbeeld — vluchten**:\n*'Vlucht vertrekt 09:25, duurt 7 uur 40 min. Aankomst?'*\n• 09:25 + 7 uur = 16:25.\n• 16:25 + 40 min = **17:05**.\n\n**Voorbeeld — over middernacht**:\n*'Nachtvlucht vertrekt 22:30, duurt 3 uur 15 min. Aankomst?'*\n• 22:30 + 3 uur = 25:30 = 01:30 *(volgende dag)*.\n• 01:30 + 15 min = **01:45** *(volgende dag)*.\n\n**Cito-truc — TV-gids**:\n*'Programma start 20:15, eindigt 21:50. Hoe lang?'*\n• Verschil 20:15 → 21:50.\n• 20:15 → 21:00 = 45 min.\n• 21:00 → 21:50 = 50 min.\n• Totaal: 45 + 50 = **95 min** = **1 uur 35 min**.\n\n**Veel-voorkomende fout**:\nVergeten dat na 23:59 komt 00:00 (de volgende dag).",
    checks: [
      {
        q: "**4 uur 's middags** in 24-uurs format?",
        options: ["16:00", "4:00", "12:00", "04:00"],
        answer: 0,
        wrongHints: [null, "Niet 4 — dat is 's nachts of 's ochtends.", "Dat is middag, niet 's middags.", "Dat is heel vroeg 's ochtends."],
      },
      {
        q: "Vlucht vertrekt **10:40**, duurt **3 uur 25 min**. **Aankomst**?",
        options: ["14:05", "13:65", "13:05", "14:25"],
        answer: 0,
        wrongHints: [null, "Bij tijd bestaat geen :65 — over de 60 = uur erbij. Reken opnieuw vanaf 13:40.", "Te weinig — heb je het laatste stukje minuten vergeten?", "Te veel — controleer."],
      },
      {
        q: "Programma **20:30 → 22:15**. Tijdsduur?",
        options: ["1 uur 45 min", "2 uur 15 min", "1 uur 30 min", "2 uur 45 min"],
        answer: 0,
        wrongHints: [null, "Niet 2u15 — dat zou 20:00 → 22:15 zijn.", "Te weinig — controleer.", "Te veel — 22:15 - 20:30 < 2 uur."],
      },
      {
        q: "Nachtbus vertrekt **23:45**, duurt **40 min**. **Aankomst**?",
        options: ["00:25", "23:85", "01:25", "24:25"],
        answer: 0,
        wrongHints: [null, "Geen 23:85 — over middernacht heen: 23:45 + 15 min = 00:00, + 25 min = 00:25.", "Te laat — controleer 23:45 + 40 min.", "Geen 24:25 — na 23:59 komt 00:00."],
        uitlegPad: {
          stappen: [
            { titel: "Tot middernacht", tekst: "23:45 → 24:00 (oftewel 00:00) = 15 min." },
            { titel: "Rest erbij", tekst: "Nog 40 - 15 = 25 min over. 00:00 + 25 min = 00:25." },
          ],
          woorden: [{ woord: "middernacht", uitleg: "24:00 = 00:00 van de volgende dag." }],
          theorie: "Over middernacht: tot 24:00 + rest na 00:00.",
          voorbeelden: [{ type: "stap", tekst: "23:45 + 40 min = 00:25." }],
          basiskennis: [{ onderwerp: "Volgende dag", uitleg: "Na 23:59 komt 00:00, geen 24:00 of 25:00." }],
          niveaus: {
            basis: "00:25. A.",
            simpeler: "23:45 + 15 min = 00:00 (middernacht). Nog 25 min: 00:00 + 25 min = 00:25. = A.",
            nogSimpeler: "00:25 = A.",
          },
        },
      },
    ],
  },

  // STAP 5: Praktijk
  {
    title: "Praktijk — school, reizen, sport",
    explanation:
      "Cito-praktijksommen met tijd komen vaak voor — school, reizen, sport.\n\n**Voorbeeld — schooldag**:\n*'School begint 8:30, eindigt 14:45. Hoe lang ben je op school?'*\n• 8:30 → 9:00 = 30 min.\n• 9:00 → 14:00 = 5 uur.\n• 14:00 → 14:45 = 45 min.\n• Totaal: 30 + 5u + 45 = **6 uur 15 min**.\n\n**Voorbeeld — reizen**:\n*'Trein vertrekt 7:45, aankomst 10:30. Reistijd?'*\n• 7:45 → 8:00 = 15 min.\n• 8:00 → 10:00 = 2 uur.\n• 10:00 → 10:30 = 30 min.\n• Totaal: **2 uur 45 min**.\n\n**Voorbeeld — sportwedstrijd**:\n*'Een wedstrijd begint 14:00, duurt 2 keer 35 min met 10 min pauze. Eindtijd?'*\n• 14:00 + 35 min = 14:35.\n• 14:35 + 10 min pauze = 14:45.\n• 14:45 + 35 min = **15:20**.\n\n**Voorbeeld — bedrijfsuren**:\n*'Bibliotheek open 9:00-17:30. Hoeveel uur per dag?'*\n• 9:00 → 12:00 = 3 uur.\n• 12:00 → 17:00 = 5 uur.\n• 17:00 → 17:30 = 30 min.\n• Totaal: **8 uur 30 min**.\n\n**Cito-tip**:\nBij meerdere stappen *(film + pauze + film, of trein + bus)*: reken **elk deel apart**, tel daarna alles op.",
    checks: [
      {
        q: "School **8:15** tot **14:30**. Hoeveel **uur** op school?",
        options: ["6 uur 15 min", "5 uur 45 min", "6 uur 45 min", "5 uur 15 min"],
        answer: 0,
        wrongHints: [null, "Net niet — controleer per stap.", "Te weinig.", "Te veel.", "Te weinig — 14:30 is na 14:15."],
      },
      {
        q: "Trein **9:50 → 12:35**. Reistijd?",
        options: ["2 uur 45 min", "3 uur 45 min", "2 uur 15 min", "3 uur 15 min"],
        answer: 0,
        wrongHints: [null, "Net niet — controleer.", "Te veel — geen 3 uur.", "Te weinig.", "Te veel."],
      },
      {
        q: "Wedstrijd: **2× 30 min** met **15 min pauze**. Begint **15:00**. Eindigt?",
        options: ["16:15", "15:45", "16:00", "16:30"],
        answer: 0,
        wrongHints: [null, "Te weinig — vergeten pauze + tweede helft?", "Te weinig — alleen eerste helft + pauze?", "Te weinig.", "Te veel — controleer 30+15+30 = 75 min."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1", tekst: "15:00 + 30 min eerste helft = 15:30." },
            { titel: "Stap 2", tekst: "15:30 + 15 min pauze = 15:45." },
            { titel: "Stap 3", tekst: "15:45 + 30 min tweede helft = 16:15." },
          ],
          woorden: [{ woord: "deelduur", uitleg: "De tijd van één onderdeel (eerste helft, pauze, tweede helft)." }],
          theorie: "Bij meerdere fases: tel ze één voor één op vanaf de begin-tijd.",
          voorbeelden: [{ type: "stap", tekst: "30 + 15 + 30 = 75 min = 1u 15 min. 15:00 + 1u 15min = 16:15." }],
          basiskennis: [{ onderwerp: "Niet vergeten pauze", uitleg: "Pauze telt mee in tijdsduur, niet in speelduur." }],
          niveaus: {
            basis: "16:15. A.",
            simpeler: "15:00 + 30 = 15:30 (helft 1). 15:30 + 15 = 15:45 (na pauze). 15:45 + 30 = 16:15 (eind). = A.",
            nogSimpeler: "16:15 = A.",
          },
        },
      },
      {
        q: "Bibliotheek **9:30 - 17:00**. Hoeveel **uur per dag**?",
        options: ["7 uur 30 min", "8 uur 30 min", "7 uur", "6 uur 30 min"],
        answer: 0,
        wrongHints: [null, "Net niet — 9:30 → 17:00 = 7,5 uur.", "Te veel — controleer.", "Te weinig — vergeten halve.", "Te weinig."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — tijd-mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: omzetten van eenheden, tijdsduur, optellen, aftrekken, 24-uurs.\n\n**Tip**: tekenen op kladpapier helpt. Zet de begin-tijd, eind-tijd, en stappen ertussen.\n\nVeel succes!",
    checks: [
      {
        q: "**90 minuten** = ... ?",
        options: ["1 uur 30 min", "1 uur 90 min", "9 uur", "0 uur 90 min"],
        answer: 0,
        wrongHints: [null, "Net niet — minuten over 60 = uur toevoegen.", "Te veel — 0 uur is geen geldige uitkomst.", "Te veel — komma verkeerd.", "Geen 90 minuten meer netjes."],
      },
      {
        q: "Film start **20:15**, duurt **2u 35min**. **Eindtijd**?",
        options: ["22:50", "22:35", "23:15", "21:50"],
        answer: 0,
        wrongHints: [null, "Net niet — controleer 20:15 + 2u + 35 min.", "Te weinig.", "Te veel.", "Te weinig — 1 uur vergeten?"],
      },
      {
        q: "Van **6:50** tot **9:25** is hoe lang?",
        options: ["2 uur 35 min", "3 uur 25 min", "2 uur 25 min", "3 uur 35 min"],
        answer: 0,
        wrongHints: [null, "Net niet — controleer.", "Te veel — geen 3 uur.", "Te weinig.", "Te veel."],
      },
      {
        q: "**2 uur 50 min + 1 uur 20 min** = ?",
        options: ["4 uur 10 min", "3 uur 70 min", "3 uur 30 min", "4 uur 30 min"],
        answer: 0,
        wrongHints: [null, "Niet 3u70 — minuten ≥ 60 dragen.", "Te weinig — vergeet niet 60 over te dragen.", "Te veel — controleer 50 + 20 = 70 = 1u10.", "Te veel — controleer."],
      },
      {
        q: "Nachtbus vertrekt **23:25**, reistijd **55 min**. **Aankomsttijd**?",
        options: ["00:20", "23:80", "00:80", "24:20"],
        answer: 0,
        wrongHints: [null, "Niet :80 — netjes: 23:25 + 35 = 00:00. + 20 = 00:20.", "Te veel — controleer.", "Geen 00:80.", "Geen 24:20 — na 23:59 komt 00:00."],
      },
      {
        q: "TV-programma **20:30 → 21:45**. Tijdsduur?",
        options: ["1 uur 15 min", "1 uur 45 min", "45 min", "1 uur 25 min"],
        answer: 0,
        wrongHints: [null, "Net niet — 20:30 → 21:30 = 1u, daarna 21:30 → 21:45 = 15 min. Totaal 1u 15min.", "Te veel.", "Te weinig.", "Te veel."],
      },
      { q: "**8:00 → 12:00**. Duur?", options: ["4 uur","3 uur","5 uur","2 uur"], answer: 0, wrongHints: [null,"Klopt.","Niet.","Niet.","Niet."] },
      { q: "Hardlopen van 17:50 → 18:25. Hoe lang?", options: ["35 min","45 min","25 min","1 uur"], answer: 0, wrongHints: [null,"Klopt — 10 + 25.","Te veel.","Te weinig.","Te veel."] },
      { q: "Vlucht 6 uur 45 min. Vertrek 9:00. Aankomst?", options: ["15:45","16:00","14:45","15:00"], answer: 0, wrongHints: [null,"Klopt.","Niet.","Niet.","Niet — 30 vergeten."] },
      { q: "**70 minuten** = ?", options: ["1 uur 10 min","1 uur 7 min","70 sec","2 uur"], answer: 0, wrongHints: [null,"Klopt — 60+10.","Niet.","Niet — minuten.","Te veel."] },
      { q: "Hoeveel **seconden** in 5 minuten?", options: ["300","60","100","500"], answer: 0, wrongHints: [null,"Klopt — 5×60.","1 min.","Niet.","Niet."] },
      { q: "School 8:30 → 12:00, daarna 13:00 → 15:00. Totale lestijd?", options: ["5 uur 30 min","6 uur","4 uur","5 uur"], answer: 0, wrongHints: [null,"Klopt — 3u30 + 2u.","Niet — pauze niet meegerekend.","Niet.","Bijna."] },
      { q: "Reis duurt 2 uur 50 min. Begint 14:25. Eindigt?", options: ["17:15","17:25","16:25","17:00"], answer: 0, wrongHints: [null,"Klopt — 14:25 + 2u + 50min.","Niet — 50 min ipv 60.","Maar 2 uur.","Niet."] },
      { q: "Hoeveel uur is **240 minuten**?", options: ["4 uur","3 uur","5 uur","2 uur"], answer: 0, wrongHints: [null,"Klopt — 240÷60.","Niet.","Niet.","Niet."] },
      { q: "Wedstrijd 90 min + verlenging 30 min. Totaal?", options: ["2 uur","1 uur 30 min","1 uur","2 uur 30 min"], answer: 0, wrongHints: [null,"Klopt — 120 min.","Niet — niet verlenging.","Niet — alleen verlenging.","Te veel."] },
      { q: "Tussen **13:15** en **15:50**. Duur?", options: ["2 uur 35 min","2 uur 45 min","2 uur 25 min","3 uur"], answer: 0, wrongHints: [null,"Klopt.","Niet.","Niet.","Te veel."] },
      { q: "Bus elke 20 min. Eerste 7:00. Vierde?", options: ["8:00","7:40","7:20","8:20"], answer: 0, wrongHints: [null,"Klopt — 3×20 min later.","Tweede.","Eerste.","Vijfde."] },
      { q: "Film 02:15 lang. Begint 19:30. Klaar om?", options: ["21:45","21:30","21:15","22:00"], answer: 0, wrongHints: [null,"Klopt — 19:30 + 2u15.","Maar 2 uur.","Maar 1u45.","Te lang."] },
      { q: "Hoeveel **uur** in 1 dag?", options: ["24","12","48","60"], answer: 0, wrongHints: [null,"Klopt.","Halve dag.","2 dagen.","Niet."] },
      { q: "Tussen **23:30** en **01:00** (volgende dag). Duur?", options: ["1 uur 30 min","30 min","1 uur","22 uur 30 min"], answer: 0, wrongHints: [null,"Klopt — 30 min + 1 uur.","Te kort.","Vergeet halfuur.","Te lang."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tijdsduurRekenenPo = {
  id: "tijdsduur-rekenen-po",
  title: "Tijdsduur uitrekenen (groep 6-8)",
  emoji: "⏰",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Meten — tijd",
  prerequisites: [
    { id: "klokkijken", title: "Klokkijken", niveau: "po-1F" },
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
  intro:
    "Tijdsduur voor groep 6-8 — hoe lang duurt iets, tussen 2 klokken, optellen+aftrekken met 60-stap, 24-uurs format, praktijksommen school/reizen/sport. ~15 min.",
  triggerKeywords: [
    "tijdsduur", "tijd", "klok", "uur", "minuten", "seconden",
    "vertrek", "aankomst", "reistijd", "speelduur", "24-uurs",
    "rooster", "vluchten", "trein", "bus",
  ],
  chapters,
  steps,
};

export default tijdsduurRekenenPo;
