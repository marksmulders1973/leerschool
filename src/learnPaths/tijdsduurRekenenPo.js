// Leerpad: Tijdsduur uitrekenen — groep 6-8 PO.
// Toets-onderdeel meten: tijd. Referentieniveau 1F.
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
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
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
<text x="280" y="80" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">SOM:</text>
<text x="280" y="100" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">1u 35min</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is tijdsduur?
  {
    title: "Wat is tijdsduur?",
    explanation:
      "**Tijdsduur** is **hoe lang iets duurt** — van begin tot eind.\n\n**Voorbeelden**:\n• Een schooldag duurt 6 uur en 30 minuten.\n• Een voetbalwedstrijd duurt 90 minuten.\n• Een aflevering van een tekenfilm duurt 25 minuten.\n• Slapen 's nachts: 9 uur.\n\n**Eenheden voor tijd**:\n• **seconden** (s) — voor heel korte dingen *(een knipoog ~0,3 s)*.\n• **minuten** (min) — voor korte stukken *(les van 45 min)*.\n• **uren** (u) — voor langere periodes *(school 6 uur)*.\n• **dagen** — voor heel lange dingen *(vakantie 14 dagen)*.\n\n**Belangrijke afspraken** *(uit je hoofd!)*:\n• 1 minuut = **60 seconden**.\n• 1 uur = **60 minuten** = **3600 seconden**.\n• 1 dag = **24 uur**.\n• 1 week = 7 dagen.\n• 1 jaar = ongeveer 365 dagen.\n\n**Toets-truc — niet 100, maar 60!**\nBij tijd gaat het in stappen van **60** *(niet 100 zoals bij geld)*. Dus 1 uur en 70 minuten ≠ 1u 70m, maar 2u 10m (want 70 min = 1u 10 min).\n\n**Wat is het verschil tussen 'tijdstip' en 'tijdsduur'?**\n• **Tijdstip** = wanneer? (bv. om 14:30 uur).\n• **Tijdsduur** = hoe lang? (bv. 45 minuten).",
    checks: [
      {
        q: "**1 uur** is hoeveel **minuten**?",
        options: ["60 minuten", "100 minuten", "30 minuten", "24 minuten"],
        answer: 0,
        wrongHints: [null, "Tijd werkt niet met 100 — kijk op de klok: hoeveel streepjes heeft een uur?", "Dat is een half uur — de vraag gaat over een heel uur.", "24 = uren in een dag, niet minuten in een uur."],
        uitlegPad: {
          stappen: [
            { titel: "60-stap bij tijd", tekst: "Bij tijd-meten gaat alles in stappen van 60: 60 seconden = 1 minuut, 60 minuten = 1 uur. Niet 100 zoals bij geld of getallen." },
            { titel: "Op de klok zichtbaar", tekst: "Een analoge klok heeft 60 streepjes voor de minuten. Eén volle rondje van de grote wijzer = 60 minuten = 1 uur." },
            { titel: "Andere tijd-omrekeningen", tekst: "1 minuut = 60 seconden. 1 dag = 24 uur. 1 week = 7 dagen. 1 jaar = ~365 dagen." },
          ],
          woorden: [{ woord: "60-stappen", uitleg: "Tijd gaat met 60, niet 100. Sinds de oude Babyloniërs." }],
          theorie: "Toets-truc: bij tijd-vraag — altijd 60 omrekenen, niet 100. Veelgemaakte fout: '1 uur 70 min' (niet bestaand) ipv '2 uur 10 min'.",
          voorbeelden: [
            { type: "stap", tekst: "2 uur = 2 × 60 = 120 min. 30 min = 1/2 uur. 90 min = 1u 30min." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "60 min = 1 uur. Klassiek getal, onthoud dit en alle tijd-vragen worden makkelijker." }],
          niveaus: {
            basis: "1 uur = 60 minuten.",
            simpeler: "Klok gaat in 60-stappen. 1 uur = 60 minuten.",
            nogSimpeler: "60",
          },
        },
      },
      {
        q: "**3 minuten** = ... **seconden**?",
        options: ["180 sec", "30 sec", "60 sec", "300 sec"],
        answer: 0,
        wrongHints: [null, "Te weinig — hoeveel seconden zitten er in 1 minuut, en bereken dat dan voor 3 minuten.", "Dat is maar 1 minuut, niet 3.", "Te veel — tijd rekent niet met 100. Hoeveel seconden heeft 1 minuut?"],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: hoeveel sec in 1 min?", tekst: "**1 minuut = 60 seconden**. Vast feit." },
            { titel: "Stap 2: × aantal min", tekst: "3 min = 3 × 60 = **180 seconden**." },
            { titel: "Check: snel uitrekenen", tekst: "3 × 6 = 18. Plus 0 erachter (vermenigvuldigen met 10 voor de extra 0). = 180." },
          ],
          woorden: [{ woord: "seconde", uitleg: "Korte tijd-eenheid. 60 zitten er in een minuut." }],
          theorie: "Toets-truc: ÷ 60 of × 60. Minuten naar seconden = × 60. Seconden naar minuten = ÷ 60.",
          voorbeelden: [
            { type: "stap", tekst: "5 min = 300 sec. 10 min = 600 sec. Een halve minuut = 30 sec." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Werk met tafel-6 (3 × 6 = 18) + 0 eraan plakken. Snelle truc voor 'min naar sec'." }],
          niveaus: {
            basis: "3 min × 60 = 180 sec.",
            simpeler: "3 × 60 = 180.",
            nogSimpeler: "180",
          },
        },
      },
      {
        q: "Wat is **tijdsduur**?",
        options: ["Hoe lang iets duurt", "Wanneer iets begint", "De huidige tijd", "Het dagdeel"],
        answer: 0,
        wrongHints: [null, "Dat is een tijdstip (wanneer = punt in tijd), niet tijdsduur (hoe lang).", "Dat is ook een tijdstip — de klok-aanwijzing op dit moment.", "Een dagdeel is een tijd-categorie (ochtend, middag), geen duur."],
        uitlegPad: {
          stappen: [
            { titel: "Tijdsduur = hoe lang", tekst: "**Tijdsduur** vertelt hoe lang iets duurt — van begin tot eind. Bv. een schooldag duurt 6,5 uur. Een film 1 uur 30 min." },
            { titel: "Verschil met tijdstip", tekst: "**Tijdstip** = wanneer? (om 14:00). **Tijdsduur** = hoe lang? (30 minuten). De toets test of je deze 2 begrippen niet door elkaar haalt." },
            { titel: "Toets-truc bij vraag-tekst", tekst: "Kijk naar woorden: 'hoe lang' / 'duurt' / 'totale tijd' → tijdsduur. 'Wanneer' / 'om welk uur' / 'hoe laat' → tijdstip." },
          ],
          woorden: [
            { woord: "tijdsduur", uitleg: "Hoe lang iets duurt (een aantal minuten/uren)." },
            { woord: "tijdstip", uitleg: "Wanneer iets gebeurt (een klok-tijd zoals 14:30)." },
          ],
          theorie: "Tijd-vragen op de toets gaan vaak over tijdsduur berekenen tussen 2 tijdstippen. Bv. 'van 9:15 tot 10:45 — hoe lang?' = duur-vraag.",
          voorbeelden: [
            { type: "stap", tekst: "Tijdstip: het is nu 13:45 (klok-aanwijzing). Tijdsduur: het duurde 45 minuten (van 13:00 tot 13:45)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Tijdstip = klok-foto (1 moment). Tijdsduur = 2 momenten + verschil." }],
          niveaus: {
            basis: "Tijdsduur = hoe lang iets duurt.",
            simpeler: "Duur = lengte in tijd, niet wanneer.",
            nogSimpeler: "Hoe lang",
          },
        },
      },
      {
        q: "**1 uur 70 minuten** — wat is dat in netjes geschreven tijd?",
        options: ["2 uur 10 minuten", "1 uur 70 minuten", "70 uur 1 minuut", "1 uur en een halve"],
        answer: 0,
        wrongHints: [null, "Zo schrijven we geen tijd — als minuten boven 60 komen, wat doe je dan?", "Te veel — uren en minuten verwisseld.", "Dat zou een halve plus één uur zijn — hoeveel minuten is 70 min precies in uren en minuten?"],
        uitlegPad: {
          stappen: [
            { titel: "Splits 60 minuten", tekst: "70 min = 60 min + 10 min = 1 uur + 10 min. Plus de bestaande 1 uur = 2 uur 10 min." },
          ],
          woorden: [{ woord: "60-stap", uitleg: "Bij tijd: elke 60 minuten = 1 uur. Niet 100." }],
          theorie: "Als minuten ≥ 60: trek 60 af, voeg 1 uur toe.",
          voorbeelden: [{ type: "stap", tekst: "1u 70 min → 1u + (60+10) min → (1+1)u + 10 min = 2u 10 min." }],
          basiskennis: [{ onderwerp: "Geen 100", uitleg: "Tijd gaat met 60, niet 100!" }],
          niveaus: {
            basis: "2u 10 min.",
            simpeler: "70 minuten is meer dan 1 uur. 70 min = 60 min + 10 min = 1 uur + 10 min. Plus de 1 uur die er al was = 2 uur 10 min.",
            nogSimpeler: "2u 10min",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke zin gaat over een **tijdstip**?",
        options: [
          "De les begint om 10:15 uur.",
          "De les duurt 45 minuten.",
          "De film duurt 2 uur.",
          "Ik slaap 9 uur per nacht.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Gaat deze zin over 'wanneer' of over 'hoe lang'?",
          "Gaat deze zin over 'wanneer' of over 'hoe lang'?",
          "Gaat deze zin over 'wanneer' of over 'hoe lang'?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tijdstip = wanneer",
              tekst: "Een tijdstip zegt wanneer iets gebeurt, zoals 'om 10:15 uur'.",
            },
            {
              titel: "Tijdsduur = hoe lang",
              tekst: "Woorden als 'duurt' en '9 uur per nacht' gaan over hoe lang iets is.",
            },
            {
              titel: "Kijk naar de woorden",
              tekst: "'Om' + kloktijd → tijdstip. 'Duurt' → tijdsduur.",
            },
          ],
          woorden: [
            {
              woord: "tijdstip",
              uitleg: "Wanneer iets gebeurt (een kloktijd).",
            },
          ],
          theorie: "Tijdstip = wanneer? Tijdsduur = hoe lang?",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Om 10:15 uur' = tijdstip. '45 minuten' = tijdsduur.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Kun je 'hoe laat?' vragen? Dan is het een tijdstip.",
            },
          ],
          niveaus: {
            basis: "De les begint om 10:15 uur.",
            simpeler: "'Om 10:15 uur' zegt wanneer. Dat is een tijdstip.",
            nogSimpeler: "Om 10:15",
          },
        },
      },
      {
        q: "Welke eenheid gebruik je om te zeggen hoe lang **een knipoog** duurt?",
        options: ["seconden", "minuten", "uren", "dagen"],
        answer: 0,
        wrongHints: [
          null,
          "Duurt een knipoog lang of heel kort?",
          "Duurt een knipoog lang of heel kort?",
          "Duurt een knipoog lang of heel kort?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Heel kort",
              tekst: "Een knipoog duurt minder dan 1 seconde (ongeveer 0,3 s).",
            },
            {
              titel: "Kleinste eenheid",
              tekst: "Voor heel korte dingen gebruik je seconden.",
            },
            {
              titel: "Rijtje",
              tekst: "seconden < minuten < uren < dagen.",
            },
          ],
          woorden: [
            {
              woord: "seconde",
              uitleg: "Een heel korte tijd. 60 seconden = 1 minuut.",
            },
          ],
          theorie: "Kies de eenheid die past bij hoe lang iets duurt: kort → seconden, lang → uren of dagen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Knipoog: seconden. Les: minuten. Schooldag: uren. Vakantie: dagen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Past het?",
              uitleg: "Een knipoog van 1 minuut zou heel raar zijn.",
            },
          ],
          niveaus: {
            basis: "Seconden.",
            simpeler: "Een knipoog is heel kort. Dus seconden.",
            nogSimpeler: "seconden",
          },
        },
      },
      {
        q: "Hoeveel **seconden** zitten er in **1 uur**?",
        options: ["3600", "60", "600", "6000"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het aantal minuten in een uur — en elke minuut heeft ook nog seconden.",
          "Hoeveel minuten heeft een uur? En hoeveel seconden heeft elke minuut?",
          "Rekende je ergens met 100 in plaats van 60?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1",
              tekst: "1 uur = 60 minuten.",
            },
            {
              titel: "Stap 2",
              tekst: "1 minuut = 60 seconden.",
            },
            {
              titel: "Stap 3",
              tekst: "60 × 60 = 3600 seconden.",
            },
          ],
          woorden: [
            {
              woord: "seconde",
              uitleg: "60 seconden = 1 minuut.",
            },
          ],
          theorie: "Uur → minuten: × 60. Minuten → seconden: nog eens × 60.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 uur = 60 min = 60 × 60 = 3600 seconden.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "6 × 6 = 36, met twee nullen erachter: 3600.",
            },
          ],
          niveaus: {
            basis: "3600 seconden.",
            simpeler: "60 minuten, elk 60 seconden: 60 × 60 = 3600.",
            nogSimpeler: "3600",
          },
        },
      },
      {
        q: "Hoeveel **uur** zitten er in **2 dagen**?",
        options: ["48", "24", "120", "200"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is maar 1 dag.",
          "Rekende je met 60? Hoeveel uur heeft 1 dag?",
          "Een dag heeft geen 100 uur.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1",
              tekst: "1 dag = 24 uur.",
            },
            {
              titel: "Stap 2",
              tekst: "2 dagen = 2 × 24 = 48 uur.",
            },
          ],
          woorden: [
            {
              woord: "dag",
              uitleg: "Een dag duurt 24 uur.",
            },
          ],
          theorie: "Dagen → uren: × 24 (niet × 60 en niet × 100).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 dagen = 24 + 24 = 48 uur.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Onthouden",
              uitleg: "1 dag = 24 uur. 1 week = 7 dagen.",
            },
          ],
          niveaus: {
            basis: "48 uur.",
            simpeler: "24 + 24 = 48.",
            nogSimpeler: "48",
          },
        },
      },
      {
        q: "Hoeveel minuten is **3 uur en 20 minuten** samen?",
        options: ["200", "320", "180", "80"],
        answer: 0,
        wrongHints: [
          null,
          "Je schreef de getallen achter elkaar — maar 1 uur is 60 minuten.",
          "Je bent de 20 minuten vergeten.",
          "Hoeveel minuten zijn 3 uur, niet 1 uur?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: uren",
              tekst: "3 uur = 3 × 60 = 180 min.",
            },
            {
              titel: "Stap 2: minuten erbij",
              tekst: "180 + 20 = 200 min.",
            },
          ],
          woorden: [
            {
              woord: "omrekenen",
              uitleg: "Uren naar minuten: keer 60.",
            },
          ],
          theorie: "Uren × 60, en dan de losse minuten erbij optellen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3 uur 20 min = 180 + 20 = 200 min.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet 320",
              uitleg: "3 uur is geen 300 minuten. 1 uur = 60 min.",
            },
          ],
          niveaus: {
            basis: "200 minuten.",
            simpeler: "3 × 60 = 180. 180 + 20 = 200.",
            nogSimpeler: "200",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een liedje duurt **170 seconden**. Hoeveel is dat in minuten en seconden?",
        options: [
          "2 minuten en 50 seconden",
          "2 minuten en 10 seconden",
          "3 minuten en 10 seconden",
          "1 minuut en 50 seconden",
        ],
        answer: 0,
        wrongHints: [null, null, "Hoeveel seconden zijn 3 minuten? Is dat meer of minder dan 170?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: hoeveel hele minuten?",
              tekst: "1 minuut = 60 seconden. 2 minuten = 120 seconden. 3 minuten = 180 seconden, dat is meer dan 170. Er passen dus 2 hele minuten in.",
            },
            {
              titel: "Stap 2: wat blijft er over?",
              tekst: "170 − 120 = 50 seconden.",
            },
            {
              titel: "Stap 3: samen",
              tekst: "2 minuten en 50 seconden.",
            },
          ],
          woorden: [
            {
              woord: "seconde",
              uitleg: "Een heel korte tijd. 60 seconden = 1 minuut.",
            },
          ],
          theorie: "Seconden naar minuten: kijk hoeveel keer 60 erin past. Wat overblijft, zijn de losse seconden.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "130 seconden = 120 + 10 = 2 minuten en 10 seconden.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet 100",
              uitleg: "Een minuut heeft 60 seconden, niet 100.",
            },
          ],
          niveaus: {
            basis: "2 minuten en 50 seconden.",
            simpeler: "2 × 60 = 120. 170 − 120 = 50. Dus 2 minuten en 50 seconden.",
            nogSimpeler: "2 min 50 s",
          },
        },
      },
    ],
  },

  // STAP 2: Tijdsduur tussen 2 klokken
  {
    title: "Tijdsduur tussen 2 klokken",
    explanation:
      "Vaak vraagt de toets: *'Hoe lang duurt het van 10:45 tot 12:20?'*\n\n**Toets-stappenplan — opklimmen**:\n1. Reken van **start-tijd naar volgende heel uur**.\n2. Tel **hele uren** erbij tot je vóór de eind-tijd zit.\n3. Tel de **resterende minuten** erbij.\n4. Tel alles op = tijdsduur.\n\n**Voorbeeld — 10:45 tot 12:20**:\n• Stap 1: 10:45 → 11:00 = **15 minuten**.\n• Stap 2: 11:00 → 12:00 = **1 uur**.\n• Stap 3: 12:00 → 12:20 = **20 minuten**.\n• Stap 4: 15 min + 1 uur + 20 min = **1 uur 35 minuten**.\n\n**Voorbeeld — 8:30 tot 11:15**:\n• 8:30 → 9:00 = 30 min.\n• 9:00 → 11:00 = 2 uur.\n• 11:00 → 11:15 = 15 min.\n• Totaal: 30 + 2u + 15 = **2 uur 45 minuten**.\n\n**Voorbeeld — 14:50 tot 15:20** *(over een heel uur heen)*:\n• 14:50 → 15:00 = 10 min.\n• 15:00 → 15:20 = 20 min.\n• Totaal: **30 minuten**.\n\n**Toets-truc — aftrekken kan ook**:\n• 15:20 − 14:50: 20 − 50 gaat niet → leen 60 min van het uur: 14:80 − 14:50 = **30 min**. Opklimmen is meestal makkelijker.\n\n**Veel-voorkomende fout**:\n• Rekenen alsof een uur 100 minuten heeft. *'Van 10:50 tot 11:30'* is niet 80 min, maar 10 min + 30 min = **40 min**.",
    svg: tijdsverschilSvg(),
    checks: [
      {
        q: "Van **9:30** tot **10:00** is hoe lang?",
        options: ["30 min", "1 uur", "10 min", "60 min"],
        answer: 0,
        wrongHints: [null, "Te veel — hoeveel minuten zitten er van 9:30 tot 10:00?", "Te weinig — een half uur is 30, niet 10.", "Te veel — dat zou van 9:30 naar 10:30 zijn."],
      },
      {
        q: "Van **8:45** tot **10:15** is hoe lang?",
        options: ["1 uur 30 min", "2 uur 30 min", "1 uur 15 min", "1 uur 45 min"],
        answer: 0,
        wrongHints: [null, "Te veel — controleer per stap.", "Te weinig — tel ook de 15 minuten na 10:00 mee.", "Te veel — controleer."],
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
            basis: "1 uur 30 min.",
            simpeler: "Opklimmen: 8:45 → 9:00 (15 min), 9:00 → 10:00 (1 uur), 10:00 → 10:15 (15 min). Totaal: 15+60+15 = 90 min = 1u 30 min.",
            nogSimpeler: "1u 30m",
          },
        },
      },
      {
        q: "Van **13:20** tot **15:50** is hoe lang?",
        options: ["2 uur 30 min", "2 uur 70 min", "3 uur 30 min", "1 uur 30 min"],
        answer: 0,
        wrongHints: [null, "Minuten boven de 60 bestaan niet in een tijdsduur — reken stap voor stap van 13:20 naar 15:50.", "Te veel — reken stap voor stap van 13:20 naar 15:50.", "Te weinig — hoeveel uur zit er minimaal al tussen 13 uur en 15 uur?"],
      },
      {
        q: "Van **11:50** tot **12:10** is hoe lang?",
        options: ["20 min", "1 uur 40 min", "40 min", "10 min"],
        answer: 0,
        wrongHints: [null, "Niet 1u40 — het is kort over de 12 heen.", "Te veel — het is minder dan een uur.", "Te weinig — reken vóór 12 + ná 12 samen op."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "De zwemles begint om **15:35** en is om **16:15** afgelopen. Hoe lang duurt de zwemles?",
        options: ["40 min", "1 uur 20 min", "35 min", "50 min"],
        answer: 0,
        wrongHints: [
          null,
          "Heb je de tijden van elkaar afgetrokken alsof een uur 100 minuten heeft?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: naar het hele uur",
              tekst: "15:35 → 16:00 = 25 minuten.",
            },
            {
              titel: "Stap 2: de rest",
              tekst: "16:00 → 16:15 = 15 minuten.",
            },
            {
              titel: "Stap 3: optellen",
              tekst: "25 + 15 = 40 minuten.",
            },
          ],
          woorden: [
            {
              woord: "opklimmen",
              uitleg: "Stap voor stap van de begintijd via hele uren naar de eindtijd tellen.",
            },
          ],
          theorie: "Tel eerst door tot het volgende hele uur, dan de minuten die daarna nog komen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "15:35 → 16:00 → 16:15 = 25 + 15 = 40 minuten.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geen 100",
              uitleg: "Een uur heeft 60 minuten. Daarom kun je 1615 − 1535 niet zomaar uitrekenen.",
            },
          ],
          niveaus: {
            basis: "40 minuten.",
            simpeler: "Van 15:35 tot 16:00 is 25 minuten. Van 16:00 tot 16:15 is 15 minuten. Samen 40 minuten.",
            nogSimpeler: "40 min",
          },
        },
      },
      {
        q: "Een trein vertrekt om **6:40** en komt om **9:05** aan. Hoe lang duurt de reis?",
        options: ["2 uur 25 min", "3 uur 25 min", "2 uur 35 min", "1 uur 25 min"],
        answer: 0,
        wrongHints: [null, "Tel de hele uren nog eens: van 7:00 tot 9:00 is hoeveel uur?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: naar het hele uur",
              tekst: "6:40 → 7:00 = 20 minuten.",
            },
            {
              titel: "Stap 2: hele uren",
              tekst: "7:00 → 9:00 = 2 uur.",
            },
            {
              titel: "Stap 3: de rest",
              tekst: "9:00 → 9:05 = 5 minuten.",
            },
            {
              titel: "Stap 4: optellen",
              tekst: "20 min + 2 uur + 5 min = 2 uur 25 min.",
            },
          ],
          woorden: [
            {
              woord: "opklimmen",
              uitleg: "Stap voor stap van de begintijd via hele uren naar de eindtijd tellen.",
            },
          ],
          theorie: "Splits in drie stukken: tot het hele uur, de hele uren, en de minuten die overblijven.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "6:40 → 7:00 (20 min) → 9:00 (2 uur) → 9:05 (5 min) = 2 uur 25 min.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kladpapier",
              uitleg: "Schrijf de tussenstappen op, dan vergeet je geen stukje.",
            },
          ],
          niveaus: {
            basis: "2 uur 25 min.",
            simpeler: "20 minuten tot 7:00, dan 2 hele uren tot 9:00, dan nog 5 minuten. Samen 2 uur 25 min.",
            nogSimpeler: "2u 25m",
          },
        },
      },
      {
        q: "Welke busrit duurt **precies 50 minuten**?",
        options: ["van 9:40 tot 10:30", "van 9:40 tot 10:50", "van 9:50 tot 10:30", "van 9:40 tot 10:10"],
        answer: 0,
        wrongHints: [
          null,
          null,
          null,
          "Van 9:40 tot 10:00 is 20 minuten. Hoeveel minuten komen er na 10:00 nog bij?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: reken elke rit uit",
              tekst: "Gebruik opklimmen: eerst tot 10:00, dan de minuten na 10:00.",
            },
            {
              titel: "Stap 2: de goede rit",
              tekst: "9:40 → 10:00 = 20 min. 10:00 → 10:30 = 30 min. 20 + 30 = 50 minuten.",
            },
            {
              titel: "Stap 3: de andere ritten",
              tekst: "9:40 tot 10:50 = 70 min. 9:50 tot 10:30 = 40 min. 9:40 tot 10:10 = 30 min.",
            },
          ],
          woorden: [
            {
              woord: "opklimmen",
              uitleg: "Stap voor stap van de begintijd via hele uren naar de eindtijd tellen.",
            },
          ],
          theorie: "Bij een keuzevraag reken je elke mogelijkheid uit en vergelijk je met wat er gevraagd wordt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "9:40 → 10:00 → 10:30 = 20 + 30 = 50 minuten.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Via het hele uur",
              uitleg: "Tel altijd eerst door tot het hele uur, dat is het makkelijkst.",
            },
          ],
          niveaus: {
            basis: "Van 9:40 tot 10:30.",
            simpeler: "Van 9:40 tot 10:00 is 20 minuten, van 10:00 tot 10:30 is 30 minuten. Samen 50.",
            nogSimpeler: "9:40 – 10:30",
          },
        },
      },
      {
        q: "Welke wandeling duurt **precies 1 uur en 10 minuten**?",
        options: ["van 10:55 tot 12:05", "van 10:55 tot 12:10", "van 11:05 tot 12:05", "van 10:50 tot 12:10"],
        answer: 0,
        wrongHints: [null, null, "Van 11:05 tot 12:05 is een heel uur. Komen daar nog minuten bij?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: naar het hele uur",
              tekst: "10:55 → 11:00 = 5 minuten.",
            },
            {
              titel: "Stap 2: heel uur",
              tekst: "11:00 → 12:00 = 1 uur.",
            },
            {
              titel: "Stap 3: de rest",
              tekst: "12:00 → 12:05 = 5 minuten.",
            },
            {
              titel: "Stap 4: optellen",
              tekst: "5 min + 1 uur + 5 min = 1 uur 10 min.",
            },
          ],
          woorden: [
            {
              woord: "opklimmen",
              uitleg: "Stap voor stap van de begintijd via hele uren naar de eindtijd tellen.",
            },
          ],
          theorie: "Reken elke wandeling uit met opklimmen en kijk welke precies 1 uur 10 minuten is.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "10:55 tot 12:10 = 5 + 60 + 10 = 1 uur 15 min. Dat is 5 minuten te lang voor deze vraag.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kleine stukjes",
              uitleg: "Kleine stukjes van 5 minuten aan het begin en eind vergeet je snel. Tel ze altijd mee.",
            },
          ],
          niveaus: {
            basis: "Van 10:55 tot 12:05.",
            simpeler: "5 minuten tot 11:00, 1 uur tot 12:00, nog 5 minuten tot 12:05. Samen 1 uur 10 min.",
            nogSimpeler: "10:55 – 12:05",
          },
        },
      },
      {
        q: "Het is nu **11:35**. Om **13:00** begint de gymles. Hoe lang moet je nog wachten?",
        options: ["1 uur 25 min", "1 uur 35 min", "2 uur 25 min", "25 min"],
        answer: 0,
        wrongHints: [null, "Van 11:35 tot 12:00 — hoeveel minuten zijn dat precies?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: naar het hele uur",
              tekst: "11:35 → 12:00 = 25 minuten.",
            },
            {
              titel: "Stap 2: heel uur",
              tekst: "12:00 → 13:00 = 1 uur.",
            },
            {
              titel: "Stap 3: optellen",
              tekst: "25 min + 1 uur = 1 uur 25 min.",
            },
          ],
          woorden: [
            {
              woord: "opklimmen",
              uitleg: "Stap voor stap van de begintijd via hele uren naar de eindtijd tellen.",
            },
          ],
          theorie: "Van een tijd naar het volgende hele uur: 60 minuten − de minuten die er al zijn. 60 − 35 = 25.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "11:35 → 12:00 (25 min) → 13:00 (1 uur) = 1 uur 25 min.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "60 − minuten",
              uitleg: "Tot het hele uur reken je 60 minuten − het aantal minuten. Bij :35 is dat 25.",
            },
          ],
          niveaus: {
            basis: "1 uur 25 min.",
            simpeler: "Tot 12:00 is 25 minuten. Van 12:00 tot 13:00 is 1 uur. Samen 1 uur 25 min.",
            nogSimpeler: "1u 25m",
          },
        },
      },
      {
        q: "Een appeltaart staat van **16:40** tot **18:15** in de oven. Hoe lang is dat?",
        options: ["1 uur 35 min", "2 uur 35 min", "1 uur 25 min", "1 uur 45 min"],
        answer: 0,
        wrongHints: [null, "Hoeveel hele uren passen er tussen 17:00 en 18:00?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: naar het hele uur",
              tekst: "16:40 → 17:00 = 20 minuten.",
            },
            {
              titel: "Stap 2: heel uur",
              tekst: "17:00 → 18:00 = 1 uur.",
            },
            {
              titel: "Stap 3: de rest",
              tekst: "18:00 → 18:15 = 15 minuten.",
            },
            {
              titel: "Stap 4: optellen",
              tekst: "20 min + 1 uur + 15 min = 1 uur 35 min.",
            },
          ],
          woorden: [
            {
              woord: "opklimmen",
              uitleg: "Stap voor stap van de begintijd via hele uren naar de eindtijd tellen.",
            },
          ],
          theorie: "Tot het hele uur, dan de hele uren, dan de minuten die overblijven. Tel alles op.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "16:40 → 17:00 (20 min) → 18:00 (1 uur) → 18:15 (15 min) = 1 uur 35 min.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Minuten optellen",
              uitleg: "20 + 15 = 35 minuten. Dat is minder dan 60, dus het blijft 35 minuten.",
            },
          ],
          niveaus: {
            basis: "1 uur 35 min.",
            simpeler: "20 minuten tot 17:00, 1 uur tot 18:00, 15 minuten tot 18:15. Samen 1 uur 35 min.",
            nogSimpeler: "1u 35m",
          },
        },
      },
    ],
  },

  // STAP 3: Tijden optellen + aftrekken
  {
    title: "Tijden optellen en aftrekken",
    explanation:
      "Bij **tijden optellen** moet je opletten: als minuten ≥ 60, draag je een uur over.\n\n**Voorbeeld — optellen**:\n*'Een film duurt 1 uur 45 minuten. Hij begint om 15:30. Wanneer is hij afgelopen?'*\n• 15:30 + 1 uur = 16:30.\n• 16:30 + 45 min = 17:15 *(want 30 + 45 = 75 min = 1 uur 15 min)*.\n• Antwoord: **17:15**.\n\n**Voorbeeld — uren+minuten optellen**:\n*'2 uur 40 min + 1 uur 35 min = ?'*\n• Uren: 2 + 1 = 3 uur.\n• Minuten: 40 + 35 = 75 min = **1 uur 15 min**.\n• Totaal: 3 uur + 1 uur 15 min = **4 uur 15 min**.\n\n**Voorbeeld — aftrekken**:\n*'Een treinrit duurde 2 uur 20 min. Ik kwam aan om 14:05. Wanneer ben ik vertrokken?'*\n• 14:05 − 2 uur = 12:05.\n• 12:05 − 20 min = 11:45.\n• Antwoord: vertrokken om **11:45**.\n\n**Toets-truc — lenen bij aftrekken**:\nAls je minuten af moet trekken en het gaat niet *(bv. 5 min − 20 min)*: leen 60 min van het uur.\n• 14:05 − 20 min = 13:65 − 20 = **13:45**.\n• Of: 14:05 − 5 min = 14:00, dan nog 15 min eraf = 13:45.\n\n**Veel-voorkomende fout**:\nVergeten te lenen of over te dragen. Tijd gaat met 60, niet 100!",
    checks: [
      {
        q: "**1 uur 40 min + 50 min** = ?",
        options: ["2 uur 30 min", "1 uur 90 min", "2 uur 20 min", "1 uur 50 min"],
        answer: 0,
        wrongHints: [null, "Minuten boven 60 schrijven we niet zo — hoeveel uur en minuten zijn er in 90 min?", "Te weinig — bereken hoeveel minuten 40 + 50 samen zijn, en draag dan over.", "Te weinig — je hebt de 40 minuten die er al waren nog niet meegeteld."],
      },
      {
        q: "Film begint **19:30** en duurt **1 uur 50 min**. **Eindtijd**?",
        options: ["21:20", "20:80", "21:50", "20:20"],
        answer: 0,
        wrongHints: [null, "Niet :80 — tijd loopt max tot :59. Splits eerst de uren, dan de minuten.", "Te veel — eindtijd is vóór 21:50.", "Te weinig — vergeet het hele uur niet."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst uur erbij", tekst: "19:30 + 1 uur = 20:30." },
            { titel: "Dan minuten erbij", tekst: "20:30 + 50 min: 30 + 50 = 80 min = 1 uur 20 min. Dus 20:30 + 50 min = 21:20." },
          ],
          woorden: [{ woord: "dragen", uitleg: "Als minuten ≥ 60: trek 60 af, voeg 1 uur toe." }],
          theorie: "Optellen tijd: eerst uren, dan minuten. Bij ≥60 min: dragen.",
          voorbeelden: [{ type: "stap", tekst: "19:30 + 1u 50min = 21:20." }],
          basiskennis: [{ onderwerp: "60 niet 100", uitleg: "Tijd is niet tientallig." }],
          niveaus: {
            basis: "19:30 + 1u 50min = 21:20.",
            simpeler: "Voeg eerst 1 uur toe: 19:30 → 20:30. Voeg dan 50 min toe: 20:30 + 50 min = 21:20 (30 + 50 = 80 = 1u 20).",
            nogSimpeler: "21:20",
          },
        },
      },
      {
        q: "Aankomst **15:10**, trein duurde **2 uur 25 min**. **Wanneer vertrokken**?",
        options: ["12:45", "13:45", "13:35", "17:35"],
        answer: 0,
        wrongHints: [null, "Te veel — trek 2 uur terug van de aankomsttijd, dan 25 min.", "Te veel — controleer elke stap apart.", "Optellen gaat de verkeerde kant op — je zoekt het vertrekpunt, dus je trekt af."],
      },
      {
        q: "**3 uur 15 min − 1 uur 40 min** = ?",
        options: ["1 uur 35 min", "2 uur 25 min", "1 uur 25 min", "2 uur 35 min"],
        answer: 0,
        wrongHints: [null, "Te veel — je kunt de minuten niet zomaar aftrekken, je moet eerst een uur 'lenen' om voldoende minuten te hebben.", "Te weinig — vergeet het lenen niet.", "Te veel — controleer."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je begint om **13:50** aan een puzzel. Na **1 uur en 25 minuten** is hij af. Hoe laat is het dan?",
        options: ["15:15", "14:15", "15:25", "16:15"],
        answer: 0,
        wrongHints: [null, "Heb je het hele uur ook opgeteld?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: eerst het uur",
              tekst: "13:50 + 1 uur = 14:50.",
            },
            {
              titel: "Stap 2: dan de minuten",
              tekst: "14:50 + 10 minuten = 15:00. Er blijven nog 15 minuten over: 15:00 + 15 minuten = 15:15.",
            },
          ],
          woorden: [
            {
              woord: "overdragen",
              uitleg: "Komen de minuten boven de 60, dan wordt dat een uur erbij.",
            },
          ],
          theorie: "Tijd optellen: eerst de uren, dan de minuten. Kom je over het hele uur, dan tel je door in het volgende uur.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "13:50 + 1 uur 25 min → 14:50 → 15:15.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "60, niet 100",
              uitleg: "50 + 25 = 75 minuten = 1 uur en 15 minuten.",
            },
          ],
          niveaus: {
            basis: "15:15.",
            simpeler: "13:50 plus 1 uur is 14:50. Plus 25 minuten: 10 minuten tot 15:00 en nog 15 minuten. Dat is 15:15.",
            nogSimpeler: "15:15",
          },
        },
      },
      {
        q: "Lisa oefent op maandag **45 minuten** piano en op dinsdag **50 minuten**. Hoe lang oefent ze samen?",
        options: ["1 uur 35 min", "1 uur 45 min", "1 uur 5 min", "2 uur 35 min"],
        answer: 0,
        wrongHints: [null, null, "Hoeveel minuten is 45 + 50? En hoeveel minuten zitten er in 1 uur?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: minuten optellen",
              tekst: "45 + 50 = 95 minuten.",
            },
            {
              titel: "Stap 2: omzetten",
              tekst: "95 minuten = 60 minuten + 35 minuten = 1 uur 35 min.",
            },
          ],
          woorden: [
            {
              woord: "overdragen",
              uitleg: "Komen de minuten boven de 60, dan haal je 60 minuten eraf en tel je 1 uur erbij.",
            },
          ],
          theorie: "Tel eerst de minuten op. Is het 60 of meer? Maak er dan uren en minuten van.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "45 + 50 = 95 min = 1 uur 35 min.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "60, niet 100",
              uitleg: "95 minuten is geen '0 uur 95', want een uur heeft 60 minuten.",
            },
          ],
          niveaus: {
            basis: "1 uur 35 min.",
            simpeler: "45 + 50 = 95 minuten. 95 − 60 = 35. Dus 1 uur en 35 minuten.",
            nogSimpeler: "1u 35m",
          },
        },
      },
      {
        q: "De voorstelling begint om **19:15**. Je wilt **40 minuten** eerder in het theater zijn. Hoe laat moet je er zijn?",
        options: ["18:35", "18:25", "19:55", "18:45"],
        answer: 0,
        wrongHints: [null, null, "Moet je er eerder of later zijn dan 19:15?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: eerst naar het hele uur terug",
              tekst: "19:15 − 15 minuten = 19:00.",
            },
            {
              titel: "Stap 2: de rest eraf",
              tekst: "Je moest 40 minuten terug. 40 − 15 = 25 minuten. 19:00 − 25 minuten = 18:35.",
            },
          ],
          woorden: [
            {
              woord: "lenen",
              uitleg: "Gaan de minuten niet, dan leen je 60 minuten van het uur ervoor.",
            },
          ],
          theorie: "Eerder = terugrekenen (aftrekken). Ga eerst terug naar het hele uur, dan de rest.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "19:15 → 19:00 (15 min terug) → 18:35 (nog 25 min terug).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eerder = aftrekken",
              uitleg: "Wil je eerder ergens zijn, dan wordt de tijd kleiner.",
            },
          ],
          niveaus: {
            basis: "18:35.",
            simpeler: "19:15 − 15 minuten is 19:00. Nog 25 minuten terug: 18:35.",
            nogSimpeler: "18:35",
          },
        },
      },
      {
        q: "Een busreis duurt **2 uur en 15 minuten**. Na **1 uur en 30 minuten** stopt de bus bij een tankstation. Hoe lang moet de bus daarna nog rijden?",
        options: ["45 min", "1 uur 45 min", "1 uur 15 min", "35 min"],
        answer: 0,
        wrongHints: [null, null, "Heb je ook de 30 minuten afgetrokken?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: eerst het uur eraf",
              tekst: "2 uur 15 min − 1 uur = 1 uur 15 min.",
            },
            {
              titel: "Stap 2: dan de minuten eraf",
              tekst: "1 uur 15 min − 30 minuten. 15 − 30 gaat niet, dus leen een uur: 75 minuten − 30 minuten = 45 minuten.",
            },
          ],
          woorden: [
            {
              woord: "lenen",
              uitleg: "Gaan de minuten niet, dan maak je van 1 uur 60 minuten.",
            },
          ],
          theorie: "Tijdsduur aftrekken: eerst de uren, dan de minuten. Gaat het niet, leen dan 60 minuten.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 uur 15 min = 135 minuten. 1 uur 30 min = 90 minuten. 135 − 90 = 45 minuten.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alles in minuten",
              uitleg: "Je kunt ook alles in minuten omzetten en dan aftrekken.",
            },
          ],
          niveaus: {
            basis: "45 minuten.",
            simpeler: "2 uur 15 min is 135 minuten. 1 uur 30 min is 90 minuten. 135 − 90 = 45 minuten.",
            nogSimpeler: "45 min",
          },
        },
      },
      {
        q: "Het eten moet om **18:00** op tafel staan. De ovenschotel moet **1 uur en 25 minuten** in de oven. Hoe laat moet hij er op zijn laatst in?",
        options: ["16:35", "16:45", "17:35", "16:25"],
        answer: 0,
        wrongHints: [null, null, "Heb je het hele uur ook teruggerekend?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: eerst het uur terug",
              tekst: "18:00 − 1 uur = 17:00.",
            },
            {
              titel: "Stap 2: dan de minuten terug",
              tekst: "17:00 − 25 minuten = 16:35.",
            },
          ],
          woorden: [
            {
              woord: "terugrekenen",
              uitleg: "Vanaf de eindtijd de tijdsduur aftrekken om de begintijd te vinden.",
            },
          ],
          theorie: "Weet je wanneer iets klaar moet zijn? Trek de tijdsduur af van die eindtijd.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "18:00 → 17:00 (1 uur terug) → 16:35 (25 min terug).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vanaf een heel uur",
              uitleg: "25 minuten vóór een heel uur is :35, want 60 − 25 = 35.",
            },
          ],
          niveaus: {
            basis: "16:35.",
            simpeler: "18:00 terug 1 uur is 17:00. Nog 25 minuten terug is 16:35.",
            nogSimpeler: "16:35",
          },
        },
      },
      {
        q: "Een fietstocht heeft twee stukken: het eerste stuk duurt **1 uur 35 min** en het tweede **1 uur 45 min**. Hoe lang duurt de hele tocht?",
        options: ["3 uur 20 min", "2 uur 20 min", "3 uur 10 min", "4 uur 20 min"],
        answer: 0,
        wrongHints: [
          null,
          "35 + 45 minuten is meer dan een uur. Heb je dat extra uur bij de uren opgeteld?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: uren optellen",
              tekst: "1 uur + 1 uur = 2 uur.",
            },
            {
              titel: "Stap 2: minuten optellen",
              tekst: "35 + 45 = 80 minuten = 1 uur 20 min.",
            },
            {
              titel: "Stap 3: samen",
              tekst: "2 uur + 1 uur 20 min = 3 uur 20 min.",
            },
          ],
          woorden: [
            {
              woord: "overdragen",
              uitleg: "Komen de minuten boven de 60, dan wordt dat een uur erbij.",
            },
          ],
          theorie: "Tel uren bij uren en minuten bij minuten. Zijn de minuten 60 of meer: maak er een uur van.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 uur 35 + 1 uur 45 → 2 uur + 80 min → 3 uur 20 min.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "60, niet 100",
              uitleg: "80 minuten = 60 + 20 = 1 uur en 20 minuten.",
            },
          ],
          niveaus: {
            basis: "3 uur 20 min.",
            simpeler: "Uren: 1 + 1 = 2. Minuten: 35 + 45 = 80 = 1 uur 20 min. Samen 3 uur 20 min.",
            nogSimpeler: "3u 20m",
          },
        },
      },
    ],
  },

  // STAP 4: 24-uurs format
  {
    title: "24-uurs format — treinen, vluchten, programma's",
    explanation:
      "Bij **roosters en vertrektijden** gebruiken we het **24-uurs format**: geen ochtend/middag, maar gewoon 00:00 tot 23:59.\n\n**Hoe lees je 24-uurs tijden?**\n• **00:00** tot **11:59** = nacht en ochtend.\n• **12:00** = middag.\n• **13:00** = 1 uur 's middags.\n• **18:00** = 6 uur 's avonds.\n• **22:00** = 10 uur 's avonds.\n• **23:59** = bijna middernacht.\n\n**Omrekenen 12-uurs → 24-uurs**:\n• 's morgens 8 uur → **08:00**.\n• 's middags 1 uur → **13:00** (12 + 1).\n• 's avonds 7 uur → **19:00** (12 + 7).\n• 's avonds 11 uur → **23:00** (12 + 11).\n\n**Voorbeeld — vluchten**:\n*'Vlucht vertrekt 09:25, duurt 7 uur 40 min. Aankomst?'*\n• 09:25 + 7 uur = 16:25.\n• 16:25 + 40 min = **17:05**.\n\n**Voorbeeld — over middernacht**:\n*'Nachtvlucht vertrekt 22:30, duurt 3 uur 15 min. Aankomst?'*\n• 22:30 + 3 uur = 25:30 = 01:30 *(volgende dag)*.\n• 01:30 + 15 min = **01:45** *(volgende dag)*.\n\n**Toets-truc — TV-gids**:\n*'Programma start 20:15, eindigt 21:50. Hoe lang?'*\n• 20:15 → 21:00 = 45 min.\n• 21:00 → 21:50 = 50 min.\n• Totaal: 45 + 50 = **95 min** = **1 uur 35 min**.\n\n**Veel-voorkomende fout**:\nVergeten dat na 23:59 weer 00:00 komt (de volgende dag).",
    checks: [
      {
        q: "**4 uur 's middags** in 24-uurs format?",
        options: ["16:00", "4:00", "12:00", "04:00"],
        answer: 0,
        wrongHints: [null, "Niet 4 — dat is 's nachts of 's ochtends.", "Dat is 12 uur 's middags, niet 4 uur.", "Dat is heel vroeg 's ochtends."],
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
        wrongHints: [null, "Te veel — dat zou de duur zijn als het programma al om 20:00 begon.", "Te weinig — controleer.", "Te veel — controleer: is het verschil meer dan 2 uur?"],
      },
      {
        q: "Nachtbus vertrekt **23:45**, duurt **40 min**. **Aankomst**?",
        options: ["00:25", "23:85", "01:25", "24:25"],
        answer: 0,
        wrongHints: [null, "Geen :85 — tijd loopt tot :59. Splits over middernacht heen.", "Te laat — controleer 23:45 + 40 min.", "Geen 24:25 — na 23:59 komt 00:00."],
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
            basis: "00:25.",
            simpeler: "23:45 + 15 min = 00:00 (middernacht). Nog 25 min: 00:00 + 25 min = 00:25.",
            nogSimpeler: "00:25",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoe schrijf je **half negen 's avonds** in 24-uurs tijd?",
        options: ["20:30", "21:30", "08:30", "19:30"],
        answer: 0,
        wrongHints: [
          null,
          "'Half negen' is een half uur vóór negen uur. Welk uur hoort daarbij?",
          "Is dit 's ochtends of 's avonds?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: wat is half negen?",
              tekst: "Half negen = een half uur vóór negen = 8:30.",
            },
            {
              titel: "Stap 2: 's avonds",
              tekst: "Na 12 uur 's middags tel je 12 erbij: 8 + 12 = 20.",
            },
            {
              titel: "Stap 3: samen",
              tekst: "Half negen 's avonds = 20:30.",
            },
          ],
          woorden: [
            {
              woord: "24-uurs tijd",
              uitleg: "Tijd van 00:00 tot 23:59, zonder 'ochtend' of 'avond' erbij.",
            },
          ],
          theorie: "Middag- en avonduren in 24-uurs tijd: tel 12 op bij het gewone uur.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'s avonds 7 uur = 19:00. Half acht 's avonds = 19:30.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Half",
              uitleg: "Half negen is 8:30, niet 9:30. 'Half' betekent een half uur vóór het hele uur.",
            },
          ],
          niveaus: {
            basis: "20:30.",
            simpeler: "Half negen is 8:30. 's Avonds: 8 + 12 = 20. Dus 20:30.",
            nogSimpeler: "20:30",
          },
        },
      },
      {
        q: "De laatste bus vertrekt om **21:15**. Hoe zeg je die tijd in gewone woorden?",
        options: [
          "kwart over negen 's avonds",
          "kwart over elf 's avonds",
          "kwart over negen 's ochtends",
          "kwart voor tien 's avonds",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Welk getal haal je van 21 af om het gewone uur te vinden?",
          null,
          "Staat er :15 of :45 achter de 21?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: het uur",
              tekst: "21 − 12 = 9. Het is dus 9 uur 's avonds.",
            },
            {
              titel: "Stap 2: de minuten",
              tekst: ":15 = kwart over.",
            },
            {
              titel: "Stap 3: samen",
              tekst: "21:15 = kwart over negen 's avonds.",
            },
          ],
          woorden: [
            {
              woord: "24-uurs tijd",
              uitleg: "Tijd van 00:00 tot 23:59. Na 12:00 gaan de uren door: 13, 14, ... 23.",
            },
          ],
          theorie: "24-uurs tijd terug naar gewone tijd: is het uur groter dan 12, haal er dan 12 af.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "19:00 = 7 uur 's avonds. 22:00 = 10 uur 's avonds.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kwart",
              uitleg: "':15' = kwart over. ':45' = kwart voor het volgende uur.",
            },
          ],
          niveaus: {
            basis: "Kwart over negen 's avonds.",
            simpeler: "21 − 12 = 9, dus negen uur 's avonds. :15 is kwart over. Kwart over negen 's avonds.",
            nogSimpeler: "kwart over 9",
          },
        },
      },
      {
        q: "Een nachttrein vertrekt om **21:40** en rijdt **4 uur en 35 minuten**. Hoe laat komt de trein aan?",
        options: ["02:15", "01:15", "02:35", "03:15"],
        answer: 0,
        wrongHints: [null, "Tel de uren één voor één: hoeveel uur zit er tussen 21:40 en 01:40?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: de uren erbij",
              tekst: "21:40 + 4 uur = 25:40. Na 23:59 begint een nieuwe dag, dus 25:40 = 01:40 (de volgende dag).",
            },
            {
              titel: "Stap 2: de minuten erbij",
              tekst: "01:40 + 20 minuten = 02:00. Nog 15 minuten: 02:15.",
            },
          ],
          woorden: [
            {
              woord: "middernacht",
              uitleg: "00:00 — het begin van een nieuwe dag. Na 23:59 komt 00:00.",
            },
          ],
          theorie: "Kom je boven de 24 uur uit? Haal er 24 af, dan heb je de tijd op de volgende dag.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "22:30 + 3 uur 15 min = 01:45 (volgende dag).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Volgende dag",
              uitleg: "Een tijd als 25:40 bestaat niet. Dat is 01:40 de volgende dag.",
            },
          ],
          niveaus: {
            basis: "02:15.",
            simpeler: "21:40 + 4 uur = 01:40 (na middernacht). Plus 35 minuten = 02:15.",
            nogSimpeler: "02:15",
          },
        },
      },
      {
        q: "Een concert duurt van **20:30** tot **00:15**. Hoe lang duurt het concert?",
        options: ["3 uur 45 min", "4 uur 15 min", "3 uur 15 min", "2 uur 45 min"],
        answer: 0,
        wrongHints: [null, null, null, "Van 21:00 tot 00:00 — hoeveel hele uren zijn dat?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: naar het hele uur",
              tekst: "20:30 → 21:00 = 30 minuten.",
            },
            {
              titel: "Stap 2: hele uren tot middernacht",
              tekst: "21:00 → 00:00 = 3 uur (22, 23, 24).",
            },
            {
              titel: "Stap 3: na middernacht",
              tekst: "00:00 → 00:15 = 15 minuten.",
            },
            {
              titel: "Stap 4: optellen",
              tekst: "30 min + 3 uur + 15 min = 3 uur 45 min.",
            },
          ],
          woorden: [
            {
              woord: "middernacht",
              uitleg: "00:00 — het begin van een nieuwe dag. Dat is hetzelfde moment als 24:00.",
            },
          ],
          theorie: "Over middernacht: reken eerst tot 00:00, en tel daarna de tijd op de nieuwe dag erbij.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "22:45 → 00:00 (1 uur 15 min) → 00:30 (30 min) = 1 uur 45 min.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geen gewone aftreksom",
              uitleg: "00:15 − 20:30 kun je niet zomaar uitrekenen. Opklimmen via middernacht werkt wel.",
            },
          ],
          niveaus: {
            basis: "3 uur 45 min.",
            simpeler: "30 minuten tot 21:00, 3 uur tot middernacht, nog 15 minuten. Samen 3 uur 45 min.",
            nogSimpeler: "3u 45m",
          },
        },
      },
      {
        q: "Welke tijd is **later op de dag** dan **kwart over vier 's middags**?",
        options: ["16:30", "16:00", "04:30", "14:15"],
        answer: 0,
        wrongHints: [null, null, "Is 04:30 's ochtends of 's middags?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: omzetten",
              tekst: "Kwart over vier 's middags = 4:15 + 12 uur = 16:15.",
            },
            {
              titel: "Stap 2: vergelijken",
              tekst: "16:30 komt na 16:15. 16:00 en 14:15 komen ervoor. 04:30 is heel vroeg in de ochtend.",
            },
          ],
          woorden: [
            {
              woord: "24-uurs tijd",
              uitleg: "Tijd van 00:00 tot 23:59. Hoe hoger het getal, hoe later op de dag.",
            },
          ],
          theorie: "Zet eerst alles in 24-uurs tijd. Dan kun je de getallen gewoon vergelijken.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'s middags 1 uur = 13:00. 's middags 4 uur = 16:00.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vergelijken",
              uitleg: "In 24-uurs tijd is 16:30 later dan 16:15, en 04:30 veel eerder.",
            },
          ],
          niveaus: {
            basis: "16:30.",
            simpeler: "Kwart over vier 's middags is 16:15. 16:30 is een kwartier later.",
            nogSimpeler: "16:30",
          },
        },
      },
      {
        q: "Een schoolbus naar een pretpark in Duitsland vertrekt om **07:50** en komt om **13:20** aan. Hoe lang duurt de busreis?",
        options: ["5 uur 30 min", "6 uur 30 min", "5 uur 20 min", "4 uur 30 min"],
        answer: 0,
        wrongHints: [null, "Tel de hele uren van 08:00 tot 13:00 nog eens na.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: naar het hele uur",
              tekst: "07:50 → 08:00 = 10 minuten.",
            },
            {
              titel: "Stap 2: hele uren",
              tekst: "08:00 → 13:00 = 5 uur.",
            },
            {
              titel: "Stap 3: de rest",
              tekst: "13:00 → 13:20 = 20 minuten.",
            },
            {
              titel: "Stap 4: optellen",
              tekst: "10 min + 5 uur + 20 min = 5 uur 30 min.",
            },
          ],
          woorden: [
            {
              woord: "opklimmen",
              uitleg: "Stap voor stap van de begintijd via hele uren naar de eindtijd tellen.",
            },
          ],
          theorie: "Ook met 24-uurs tijden werkt opklimmen: tot het hele uur, de hele uren, de rest.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "07:50 → 08:00 (10 min) → 13:00 (5 uur) → 13:20 (20 min) = 5 uur 30 min.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Hele uren tellen",
              uitleg: "Van 8 tot 13 tel je: 9, 10, 11, 12, 13 = 5 uur.",
            },
          ],
          niveaus: {
            basis: "5 uur 30 min.",
            simpeler: "10 minuten tot 08:00, 5 uur tot 13:00, nog 20 minuten. Samen 5 uur 30 min.",
            nogSimpeler: "5u 30m",
          },
        },
      },
    ],
  },

  // STAP 5: Praktijk
  {
    title: "Praktijk — school, reizen, sport",
    explanation:
      "Toets-praktijksommen met tijd komen vaak voor — school, reizen, sport.\n\n**Voorbeeld — schooldag**:\n*'School begint 8:30, eindigt 14:45. Hoe lang ben je op school?'*\n• 8:30 → 9:00 = 30 min.\n• 9:00 → 14:00 = 5 uur.\n• 14:00 → 14:45 = 45 min.\n• Totaal: 30 + 5u + 45 = **6 uur 15 min**.\n\n**Voorbeeld — reizen**:\n*'Trein vertrekt 7:45, aankomst 10:30. Reistijd?'*\n• 7:45 → 8:00 = 15 min.\n• 8:00 → 10:00 = 2 uur.\n• 10:00 → 10:30 = 30 min.\n• Totaal: **2 uur 45 min**.\n\n**Voorbeeld — sportwedstrijd**:\n*'Een wedstrijd begint 14:00, duurt 2 keer 35 min met 10 min pauze. Eindtijd?'*\n• 14:00 + 35 min = 14:35.\n• 14:35 + 10 min pauze = 14:45.\n• 14:45 + 35 min = **15:20**.\n\n**Voorbeeld — openingstijden**:\n*'Bibliotheek open 9:00-17:30. Hoeveel uur per dag?'*\n• 9:00 → 12:00 = 3 uur.\n• 12:00 → 17:00 = 5 uur.\n• 17:00 → 17:30 = 30 min.\n• Totaal: **8 uur 30 min**.\n\n**Toets-tip**:\nBij meerdere stappen *(film + pauze + film, of trein + bus)*: reken **elk deel apart**, tel dan alles op.",
    checks: [
      {
        q: "School **8:15** tot **14:30**. Hoeveel **uur** op school?",
        options: ["6 uur 15 min", "5 uur 45 min", "6 uur 45 min", "5 uur 15 min"],
        answer: 0,
        wrongHints: [null, "Te weinig — controleer per stap.", "Te veel — controleer per stap.", "Te weinig — 14:30 is na 14:15."],
      },
      {
        q: "Trein **9:50 → 12:35**. Reistijd?",
        options: ["2 uur 45 min", "3 uur 45 min", "2 uur 15 min", "3 uur 15 min"],
        answer: 0,
        wrongHints: [null, "Te veel — geen 3 uur.", "Te weinig — controleer.", "Te veel — controleer."],
      },
      {
        q: "Wedstrijd: **2× 30 min** met **15 min pauze**. Begint **15:00**. Eindigt?",
        options: ["16:15", "15:45", "16:00", "16:30"],
        answer: 0,
        wrongHints: [null, "Te weinig — heb je ook de pauze én de tweede helft meegeteld?", "Te weinig — heb je de pauze meegeteld?", "Te veel — tel de drie delen samen op en kijk hoeveel minuten dat is."],
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
            basis: "16:15.",
            simpeler: "15:00 + 30 = 15:30 (helft 1). 15:30 + 15 = 15:45 (na pauze). 15:45 + 30 = 16:15 (eind).",
            nogSimpeler: "16:15",
          },
        },
      },
      {
        q: "Bibliotheek **9:30 - 17:00**. Hoeveel **uur per dag**?",
        options: ["7 uur 30 min", "8 uur 30 min", "7 uur", "6 uur 30 min"],
        answer: 0,
        wrongHints: [null, "Te veel — reken stap voor stap van 9:30 naar 17:00.", "Te weinig — vergeet het halve uur niet mee te tellen.", "Te weinig — controleer."],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "De juf leest elke schooldag **20 minuten** voor. Hoeveel tijd is dat in een week met **5 schooldagen**?",
        options: ["1 uur 40 min", "1 uur", "2 uur 40 min", "1 uur 20 min"],
        answer: 0,
        wrongHints: [null, "Heeft een uur 100 minuten?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: keer 5",
              tekst: "5 × 20 minuten = 100 minuten.",
            },
            {
              titel: "Stap 2: omzetten",
              tekst: "100 minuten = 60 minuten + 40 minuten = 1 uur 40 min.",
            },
          ],
          woorden: [
            {
              woord: "omrekenen",
              uitleg: "Minuten naar uren en minuten: haal er steeds 60 vanaf voor elk uur.",
            },
          ],
          theorie: "Reken eerst alles in minuten uit. Maak er daarna uren en minuten van.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 × 25 minuten = 100 minuten = 1 uur 40 min.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "60, niet 100",
              uitleg: "100 minuten is méér dan 1 uur, want een uur heeft maar 60 minuten.",
            },
          ],
          niveaus: {
            basis: "1 uur 40 min.",
            simpeler: "5 × 20 = 100 minuten. 100 − 60 = 40. Dus 1 uur en 40 minuten.",
            nogSimpeler: "1u 40m",
          },
        },
      },
      {
        q: "De speeltuin is open van **9:30** tot **12:30** en van **13:30** tot **17:00**. Hoe lang is de speeltuin per dag open?",
        options: ["6 uur 30 min", "7 uur 30 min", "6 uur", "5 uur 30 min"],
        answer: 0,
        wrongHints: [null, "Was de speeltuin tussen 12:30 en 13:30 ook open?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: ochtend",
              tekst: "9:30 → 12:30 = 3 uur.",
            },
            {
              titel: "Stap 2: middag",
              tekst: "13:30 → 17:00 = 30 min + 3 uur = 3 uur 30 min.",
            },
            {
              titel: "Stap 3: optellen",
              tekst: "3 uur + 3 uur 30 min = 6 uur 30 min.",
            },
          ],
          woorden: [
            {
              woord: "openingstijd",
              uitleg: "De tijd dat iets open is, van openen tot sluiten.",
            },
          ],
          theorie: "Bij twee blokken met een pauze ertussen: reken elk blok apart uit en tel ze op. De pauze telt niet mee.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "9:00 → 12:00 (3 uur) + 13:00 → 15:00 (2 uur) = 5 uur.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Pauze eruit",
              uitleg: "Tussen 12:30 en 13:30 is de speeltuin dicht. Dat uur tel je niet mee.",
            },
          ],
          niveaus: {
            basis: "6 uur 30 min.",
            simpeler: "Ochtend: 3 uur. Middag: 3 uur 30 min. Samen 6 uur 30 min.",
            nogSimpeler: "6u 30m",
          },
        },
      },
      {
        q: "Je gaat om **20:15** naar bed en je staat om **7:00** op. Hoe lang lig je in bed?",
        options: ["10 uur 45 min", "11 uur 15 min", "9 uur 45 min", "13 uur 15 min"],
        answer: 0,
        wrongHints: [
          null,
          null,
          null,
          "Heb je de twee tijden gewoon van elkaar afgetrokken? Denk aan middernacht.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: naar het hele uur",
              tekst: "20:15 → 21:00 = 45 minuten.",
            },
            {
              titel: "Stap 2: tot middernacht",
              tekst: "21:00 → 00:00 = 3 uur.",
            },
            {
              titel: "Stap 3: na middernacht",
              tekst: "00:00 → 7:00 = 7 uur.",
            },
            {
              titel: "Stap 4: optellen",
              tekst: "45 min + 3 uur + 7 uur = 10 uur 45 min.",
            },
          ],
          woorden: [
            {
              woord: "middernacht",
              uitleg: "00:00 — het begin van een nieuwe dag.",
            },
          ],
          theorie: "Gaat een tijdsduur over de nacht heen? Reken eerst tot middernacht en tel daarna de uren van de nieuwe dag erbij.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "21:00 → 00:00 (3 uur) → 6:00 (6 uur) = 9 uur.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Over de nacht",
              uitleg: "De nacht gaat over 00:00 heen. Splits daarom op middernacht.",
            },
          ],
          niveaus: {
            basis: "10 uur 45 min.",
            simpeler: "45 minuten tot 21:00, 3 uur tot middernacht, 7 uur tot 7:00. Samen 10 uur 45 min.",
            nogSimpeler: "10u 45m",
          },
        },
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — tijd-mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: omzetten van eenheden, tijdsduur, optellen, aftrekken, 24-uurs.\n\n**Tip**: tekenen op kladpapier helpt. Zet de begin-tijd, eind-tijd, en stappen ertussen.\n\nVeel succes!",
    checks: [
      {
        q: "**90 minuten** = ... ?",
        options: ["1 uur 30 min", "1 uur 90 min", "9 uur", "0 uur 90 min"],
        answer: 0,
        wrongHints: [null, "Niet netjes — meer dan 60 min wordt een uur erbij.", "Veel te veel — 90 min is geen 9 uur.", "Niet netjes — schrijf 90 min als 1 uur 30 min."],
      },
      {
        q: "Film start **20:15**, duurt **2u 35min**. **Eindtijd**?",
        options: ["22:50", "22:35", "23:15", "21:50"],
        answer: 0,
        wrongHints: [null, "Te weinig — tel beide minuten-delen mee.", "Te veel — controleer.", "Te weinig — 1 uur vergeten?"],
      },
      {
        q: "Van **6:50** tot **9:25** is hoe lang?",
        options: ["2 uur 35 min", "3 uur 25 min", "2 uur 25 min", "3 uur 35 min"],
        answer: 0,
        wrongHints: [null, "Te veel — geen 3 uur.", "Te weinig — controleer.", "Te veel — controleer."],
      },
      {
        q: "**2 uur 50 min + 1 uur 20 min** = ?",
        options: ["4 uur 10 min", "3 uur 70 min", "3 uur 30 min", "4 uur 30 min"],
        answer: 0,
        wrongHints: [null, "Minuten boven 60 schrijven we niet zo — draag de 60 minuten over naar uren.", "Te weinig — vergeet de overdracht bij de minuten niet.", "Te veel — bereken hoeveel 50 + 20 minuten samen zijn en draag dan over."],
      },
      {
        q: "Nachtbus vertrekt **23:25**, reistijd **55 min**. **Aankomsttijd**?",
        options: ["00:20", "23:80", "00:80", "24:20"],
        answer: 0,
        wrongHints: [null, "Geen :80 — over de 60 minuten komt een uur erbij.", "Geen 00:80 — minuten lopen tot :59.", "Geen 24:20 — na 23:59 komt 00:00."],
      },
      {
        q: "TV-programma **20:30 → 21:45**. Tijdsduur?",
        options: ["1 uur 15 min", "1 uur 45 min", "45 min", "1 uur 25 min"],
        answer: 0,
        wrongHints: [null, "Te veel — tel stap voor stap (eerst hele uren).", "Te weinig — vergeet het hele uur niet.", "Te veel — controleer."],
      },
      { q: "**8:00 → 12:00**. Duur?", options: ["4 uur","3 uur","5 uur","2 uur"], answer: 0, wrongHints: [null, "Te weinig — tel de hele uren van 8:00 tot 12:00 nog eens na.", "Te veel — niet 5.", "Te weinig — meer dan 2."] },
      { q: "Hardlopen van 17:50 → 18:25. Hoe lang?", options: ["35 min","45 min","25 min","1 uur"], answer: 0, wrongHints: [null, "Te veel.", "Te weinig.", "Te veel."] },
      { q: "Vlucht 6 uur 45 min. Vertrek 9:00. Aankomst?", options: ["15:45","16:00","14:45","15:00"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Te weinig — 1 uur vergeten?"] },
      { q: "**70 minuten** = ?", options: ["1 uur 10 min","1 uur 7 min","70 sec","2 uur"], answer: 0, wrongHints: [null, "Niet.", "Niet — minuten.", "Te veel."] },
      { q: "Hoeveel **seconden** in 5 minuten?", options: ["300","60","100","500"], answer: 0, wrongHints: [null, "1 min.", "Niet.", "Niet."] },
      { q: "School 8:30 → 12:00, daarna 13:00 → 15:00. Totale lestijd?", options: ["5 uur 30 min","6 uur","4 uur","5 uur"], answer: 0, wrongHints: [null, "Te veel — de pauze telt niet mee.", "Niet.", "Bijna."] },
      { q: "Reis duurt 2 uur 50 min. Begint 14:25. Eindigt?", options: ["17:15","17:25","16:25","17:00"], answer: 0, wrongHints: [null, "Niet — 50 min ipv 60.", "Maar 2 uur.", "Niet."] },
      { q: "Hoeveel uur is **240 minuten**?", options: ["4 uur","3 uur","5 uur","2 uur"], answer: 0, wrongHints: [null, "Te weinig — hoeveel minuten zijn er in 1 uur, en deel dan 240 daardoor.", "Te veel — hoeveel minuten is 5 uur, en is dat meer of minder dan 240?", "Te weinig — hoeveel minuten is 2 uur, en is dat meer of minder dan 240?"] },
      { q: "Wedstrijd 90 min + verlenging 30 min. Totaal?", options: ["2 uur","1 uur 30 min","1 uur","2 uur 30 min"], answer: 0, wrongHints: [null, "Te weinig — verlenging vergeten.", "Te weinig — tel de wedstrijd én de verlenging bij elkaar.", "Te veel."] },
      { q: "Tussen **13:15** en **15:50**. Duur?", options: ["2 uur 35 min","2 uur 45 min","2 uur 25 min","3 uur"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Te veel."] },
      { q: "Bus elke 20 min. Eerste 7:00. Vierde?", options: ["8:00","7:40","7:20","8:20"], answer: 0, wrongHints: [null, "Derde.", "Tweede.", "Vijfde."] },
      { q: "Film duurt 2 uur 15 min. Begint 19:30. Klaar om?", options: ["21:45","21:30","21:15","22:00"], answer: 0, wrongHints: [null, "Maar 2 uur.", "Maar 1u45.", "Te lang."] },
      { q: "Hoeveel **uur** in 1 dag?", options: ["24","12","48","60"], answer: 0, wrongHints: [null, "Halve dag.", "2 dagen.", "Niet."] },
      { q: "Tussen **23:30** en **01:00** (volgende dag). Duur?", options: ["1 uur 30 min","30 min","1 uur","22 uur 30 min"], answer: 0, wrongHints: [null, "Te kort.", "Vergeet halfuur.", "Te lang."] },
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
