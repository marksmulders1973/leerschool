// Leerpad: Doorstroomtoets — rekenen groep 8 (pilot)
// 4 stappen van ~15 min, 20 eigen vragen "in stijl van" Cito/IEP Doorstroomtoets.
// Géén letterlijk overgenomen vragen — auteursrechtelijke schoonheid.
// Externe link naar Cito's gratis voorbeeldopgavenboekje voor "echte" oefenstof.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  vraag: "#42a5f5",
  geld: "#69f0ae",
};

const stepEmojis = ["🍕", "📊", "📏", "🏆"];

const chapters = [
  { letter: "A", title: "Breuken & decimalen", emoji: "🍕", from: 0, to: 0 },
  { letter: "B", title: "Procenten & verhoudingen", emoji: "📊", from: 1, to: 1 },
  { letter: "C", title: "Meten & schaal", emoji: "📏", from: 2, to: 2 },
  { letter: "D", title: "Redactiesommen — gemixt", emoji: "🏆", from: 3, to: 3 },
];

function overzichtSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">DOORSTROOMTOETS — REKENEN</text>
<text x="160" y="40" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">~50 vragen in 60 min — groep 8 begin februari</text>

<rect x="20" y="55" width="135" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="87" y="75" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">🍕 BREUKEN</text>
<text x="87" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">optellen · vergelijken</text>
<text x="87" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">decimalen omzetten</text>

<rect x="165" y="55" width="135" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="232" y="75" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">📊 PROCENTEN</text>
<text x="232" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">% van bedrag</text>
<text x="232" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">verhoudingen</text>

<rect x="20" y="120" width="135" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="87" y="140" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">📏 METEN</text>
<text x="87" y="157" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">km/m/cm/mm omzetten</text>
<text x="87" y="169" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">schaal lezen</text>

<rect x="165" y="120" width="135" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="232" y="140" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">🏆 REDACTIE</text>
<text x="232" y="157" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">verhaaltjes-sommen</text>
<text x="232" y="169" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">echte context</text>

<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Voor échte Cito-voorbeelden: zie externe PDF onder elke stap</text>
</svg>`;
}

const steps = [
  // ─── Stap 1: Breuken & decimalen ──────────────────
  {
    title: "Breuken & decimalen — ~15 min",
    explanation: "**Wat verwacht je op de Doorstroomtoets?**\n\nBij rekenen krijg je vrijwel altijd 5-8 breuken-vragen + decimaal-vragen. De toets test:\n\n• **Optellen** met gelijke noemers (3/8 + 5/8) — makkelijk.\n• **Optellen** met ongelijke noemers (1/3 + 1/4) — eerst gelijknamig maken.\n• **Vergelijken**: welke is groter? 3/5 of 2/3?\n• **Decimaal omzetten**: 1/4 = 0,25 / 3/4 = 0,75 / 1/8 = 0,125.\n• **Vereenvoudigen**: 10/20 = 1/2 (kleinste vorm).\n\n**Truc voor optellen met ongelijke noemers**:\n1. Vind kleinste gemeenschappelijke noemer (KGN).\n2. Maak beide breuken gelijknamig.\n3. Tel tellers op, noemer blijft.\n\nVoorbeeld: 1/3 + 1/4 → KGN = 12 → 4/12 + 3/12 = 7/12.\n\n**Bron**: dit pad bevat eigen oefenvragen in stijl van Cito/IEP. Voor officiële voorbeelden zie [Cito's gratis voorbeeldopgavenboekje](https://cito.nl/media/41vbqo2t/lib_doorstroomtoets_voorbeeldopgavenboekje.pdf).\n\n**Klaar voor 5 oefenvragen?**",
    svg: overzichtSvg(),
    checks: [
      {
        q: "Wat is **3/8 + 4/8**?",
        options: ["7/8", "12/8", "7/16", "3/32"],
        answer: 0,
        wrongHints: [null, "Tellers + noemers samen? Of alleen tellers, noemer blijft?", "Wat doe je met de noemer als die hetzelfde is?", "Tellers vermenigvuldigen helpt niet bij optellen."],
        uitlegPad: {
          stappen: [{ titel: "Gelijke noemers: tellers optellen", tekst: "Bij gelijke noemers: tel alleen tellers op. Noemer blijft. 3/8 + 4/8 = (3+4)/8 = 7/8." }],
          woorden: [{ woord: "teller", uitleg: "Het getal BOVEN de breukstreep." }, { woord: "noemer", uitleg: "Het getal ONDER de breukstreep — zegt in hoeveel stukken iets is verdeeld." }],
          theorie: "Hoofdregel: optellen kan alleen met gelijke noemers. Tel dan alleen tellers. Noemer hetzelfde houden.",
          voorbeelden: [{ type: "tekening", tekst: "Pizza in 8 stukken. 3 stukken + 4 stukken = 7 stukken van de 8. = 7/8." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "7/8 < 1 helemaal. Dat klopt — minder dan een hele pizza." }],
          niveaus: { basis: "Tellers optellen, noemer blijft. A.", simpeler: "3 + 4 = 7. Noemer blijft 8. Antwoord = 7/8. = A.", nogSimpeler: "7/8 = A." },
        },
      },
      {
        q: "Wat is **1/3 + 1/4**?",
        options: ["7/12", "2/7", "1/12", "2/12"],
        answer: 0,
        wrongHints: [null, "Mag je echt tellers EN noemers gewoon optellen?", "Eerst gelijknamig maken. KGN van 3 en 4?", "Vereenvoudig pas aan einde — nu eerst KGN zoeken."],
        uitlegPad: {
          stappen: [
            { titel: "KGN zoeken", tekst: "1/3 en 1/4 hebben verschillende noemers (3 en 4). Eerst gelijknamig maken: kleinste gemene noemer (KGN) = 3 × 4 = 12." },
            { titel: "Omrekenen", tekst: "1/3 = 4/12 (teller × 4). 1/4 = 3/12 (teller × 3). Nu kunnen we optellen: 4/12 + 3/12 = 7/12." },
          ],
          woorden: [{ woord: "KGN", uitleg: "Kleinste Gemene Noemer. Kleinste getal waar beide noemers in passen." }, { woord: "gelijknamig", uitleg: "Beide breuken dezelfde noemer geven." }],
          theorie: "Truc: vermenigvuldig de noemers met elkaar voor KGN (mag groter zijn dan strikt nodig). Dan tellers aanpassen + optellen.",
          voorbeelden: [{ type: "stap-voor-stap", tekst: "1/3 = ?/12 → 12÷3=4 → 1×4=4 → 4/12. 1/4 = ?/12 → 12÷4=3 → 1×3=3 → 3/12. 4/12 + 3/12 = 7/12." }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Veel mensen rekenen 1/3 + 1/4 = 2/7. Fout! Tellers EN noemers samen optellen mag NIET." }],
          niveaus: { basis: "KGN=12, dan 4/12+3/12=7/12. A.", simpeler: "Stap 1: gelijke noemer. 3×4=12. Stap 2: 1/3=4/12 en 1/4=3/12. Stap 3: 4+3=7. Antwoord 7/12. = A.", nogSimpeler: "7/12 = A." },
        },
      },
      {
        q: "Welke is **groter**: 3/5 of 2/3?",
        options: ["2/3", "3/5", "Allebei gelijk", "Kan niet weten"],
        answer: 0,
        wrongHints: [null, "Vergelijk door gelijknamig te maken — KGN van 5 en 3?", "Twee verschillende breuken zijn zelden precies gelijk.", "Wel te bepalen — maak ze gelijknamig of decimaal."],
        uitlegPad: {
          stappen: [
            { titel: "Gelijknamig maken", tekst: "KGN van 5 en 3 = 15. 3/5 = 9/15. 2/3 = 10/15. Nu vergelijken: 10 > 9, dus 2/3 > 3/5." },
            { titel: "Decimaal-truc", tekst: "Of: deel teller door noemer. 3 ÷ 5 = 0,60. 2 ÷ 3 = 0,667. 0,667 > 0,60, dus 2/3 groter." },
          ],
          woorden: [{ woord: "vergelijken", uitleg: "Welke is groter, kleiner, of gelijk." }],
          theorie: "Twee methodes: (1) gelijknamig maken (handig op papier), (2) decimaal omzetten (handig met rekenmachine). Beide werken altijd.",
          voorbeelden: [{ type: "intuïtief", tekst: "3/5 = 60% van iets. 2/3 = ~67% van iets. 67% > 60%, dus 2/3 groter." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "2/3 = bijna 70%. 3/5 = precies 60%. Verschil ~7%-punt. 2/3 wint." }],
          niveaus: { basis: "2/3 (KGN=15: 10>9). A.", simpeler: "Maak gelijk: 3/5=9/15, 2/3=10/15. 10>9 dus 2/3 groter. = A.", nogSimpeler: "2/3 = A." },
        },
      },
      {
        q: "**3/4** als decimaal getal is:",
        options: ["0,75", "3,4", "0,34", "0,43"],
        answer: 0,
        wrongHints: [null, "3/4 is geen 'drie komma vier'. Deel 3 door 4.", "Cijfers staan in de verkeerde volgorde — denk: hoeveel is 3 van 4 stukken?", "Idem — wat is 3 gedeeld door 4?"],
        uitlegPad: {
          stappen: [{ titel: "Teller delen door noemer", tekst: "Decimaal = teller ÷ noemer. 3 ÷ 4 = 0,75. Of: 3/4 = 75% (75 honderdsten = 75/100 = 0,75)." }],
          woorden: [{ woord: "decimaal getal", uitleg: "Getal met komma. 0,75 = 75 honderdsten = 75/100." }],
          theorie: "Veel-voorkomende breuken om uit hoofd te kennen: 1/2=0,5 / 1/4=0,25 / 3/4=0,75 / 1/5=0,2 / 1/10=0,1 / 1/8=0,125.",
          voorbeelden: [{ type: "geld", tekst: "3/4 van €1 = €0,75. Want €1 = 4 kwartjes, 3 ervan = 75 cent." }],
          basiskennis: [{ onderwerp: "Geheugentruc", uitleg: "3/4 = 75% omdat 75 = 3×25 en 100 = 4×25. Net als kwartjes!" }],
          niveaus: { basis: "0,75. A.", simpeler: "3/4 = 3 gedeeld door 4 = 0,75. Of: 3 van 4 kwartjes = 75 cent. = A.", nogSimpeler: "0,75 = A." },
        },
      },
      {
        q: "**6/9 vereenvoudigen** — kleinste vorm?",
        options: ["2/3", "3/4", "6/9 al kleinst", "1/3"],
        answer: 0,
        wrongHints: [null, "GGD van 6 en 9? Het is niet 2.", "Beide getallen kunnen door 3 gedeeld. Probeer.", "1/3 zou betekenen we delen iets weg dat er niet is."],
        uitlegPad: {
          stappen: [{ titel: "Door GGD delen", tekst: "Vereenvoudigen = teller én noemer door zelfde getal delen. GGD (grootste gemene deler) van 6 en 9 is 3. Dus 6/9 = (6÷3)/(9÷3) = 2/3." }],
          woorden: [{ woord: "GGD", uitleg: "Grootste Gemene Deler. Grootste getal waar beide getallen door deelbaar zijn." }, { woord: "vereenvoudigen", uitleg: "Breuk in kleinste vorm zetten zonder waarde te veranderen." }],
          theorie: "6 = 2×3. 9 = 3×3. Gemene factor = 3. Door 3 delen: 6→2, 9→3. Antwoord 2/3. Verder kan niet (2 en 3 hebben geen gemene deler > 1).",
          voorbeelden: [{ type: "tekening", tekst: "Pizza in 9 stukken, 6 stukken gepakt. = 2/3 van de pizza (dezelfde hoeveelheid, andere uitdrukking)." }],
          basiskennis: [{ onderwerp: "Examen-tip", uitleg: "Vereenvoudig altijd zo ver mogelijk. Cito rekent 6/9 vaak fout als 'niet vereenvoudigd'." }],
          niveaus: { basis: "2/3 (door 3 delen). A.", simpeler: "6 en 9 delen beide door 3. 6/9 = 2/3. = A.", nogSimpeler: "2/3 = A." },
        },
      },
      {
        q: "Welke breuk is **groter**: 3/5 of 2/3?",
        options: ["2/3", "3/5", "Even groot", "Niet te bepalen"],
        answer: 0,
        wrongHints: [null, "Klopt — 2/3 ≈ 0,67 en 3/5 = 0,60.", "Kleiner dan 2/3.", "Niet — verschillende waarden.", "Wel — maak gelijknamig of decimaal."],
        uitlegPad: {
          stappen: [{ titel: "Gelijknamig maken", tekst: "Maak gelijke noemer. KGN van 5 en 3 = 15. 3/5 = 9/15. 2/3 = 10/15. Dus 2/3 > 3/5." }],
          woorden: [{ woord: "KGN", uitleg: "Kleinste Gemeenschappelijke Noemer — kleinste getal waar beide noemers in passen." }],
          theorie: "Truc: zet beide breuken in decimaal. 3/5 = 0,60. 2/3 = 0,666... Groter = 2/3.",
          voorbeelden: [{ type: "stap", tekst: "0,60 < 0,67 → 3/5 < 2/3 → groter is 2/3." }],
          basiskennis: [{ onderwerp: "Vergelijkingstruc", uitleg: "Bij twee breuken vergelijken: decimaal omzetten of gelijknamig maken." }],
          niveaus: { basis: "2/3 is groter. A.", simpeler: "3/5 = 0,60. 2/3 ≈ 0,67. 0,67 > 0,60. = A.", nogSimpeler: "2/3 = A." },
        },
      },
      {
        q: "Hoeveel is **1/4 in decimalen**?",
        options: ["0,25", "0,14", "0,4", "0,75"],
        answer: 0,
        wrongHints: [null, "Klopt — 1 ÷ 4 = 0,25.", "Niet — 1/4 is een kwart.", "Niet — dat is 4/10.", "Dat is 3/4."],
      },
      {
        q: "Wat is **0,5 + 1/4**?",
        options: ["0,75", "0,55", "1,5", "1/8"],
        answer: 0,
        wrongHints: [null, "Klopt — 0,5 + 0,25 = 0,75 (of 1/2 + 1/4 = 3/4).", "Verkeerd opgeteld.", "Te groot.", "Niet — 1/8 is helft van 1/4."],
      },
      {
        q: "Wat is **2/3 − 1/6**?",
        options: ["1/2", "1/3", "1/6", "2/6"],
        answer: 0,
        wrongHints: [null, "Klopt — 4/6 − 1/6 = 3/6 = 1/2.", "Te weinig.", "Te weinig.", "Niet vereenvoudigd."],
      },
      {
        q: "Schrijf **0,8 als breuk** in eenvoudigste vorm.",
        options: ["4/5", "8/10", "0,8", "5/4"],
        answer: 0,
        wrongHints: [null, "Klopt — 8/10 ÷ 2 = 4/5.", "Klopt qua waarde maar niet vereenvoudigd.", "Dat is decimaal, niet breuk.", "Groter dan 1 — verkeerd."],
      },
      {
        q: "Welk getal is **groter**: **0,7** of **3/4**?",
        options: ["3/4", "0,7", "Even groot", "Niet te bepalen"],
        answer: 0,
        wrongHints: [null, "Klopt — 3/4 = 0,75 > 0,7.", "0,7 = 0,70. Kleiner dan 0,75.", "Niet — verschillende waarden.", "Wel — decimaliseer."],
      },
      {
        q: "Wat is **2/5 + 1/10**?",
        options: ["1/2", "3/15", "3/10", "1/7"],
        answer: 0,
        wrongHints: [null, "Klopt — 4/10 + 1/10 = 5/10 = 1/2.", "Tellers + noemers samen — fout.", "Niet vereenvoudigd.", "Niet."],
      },
      {
        q: "**1,25 als breuk** (eenvoudigst)?",
        options: ["5/4", "1 1/4", "125/100", "12,5/10"],
        answer: 0,
        wrongHints: [null, "Klopt — 1,25 = 125/100 = 5/4.", "Klopt ook (gemengd), maar 5/4 is breuk.", "Niet vereenvoudigd.", "Niet eens een breuk."],
      },
      {
        q: "**Helft van 0,8**?",
        options: ["0,4", "1,6", "0,08", "0,5"],
        answer: 0,
        wrongHints: [null, "Klopt — 0,8 ÷ 2 = 0,4.", "Dat is 2× zo veel.", "10x te weinig.", "Helft van 1."],
      },
    ],
  },

  // ─── Stap 2: Procenten & verhoudingen ──────────────────
  {
    title: "Procenten & verhoudingen — ~15 min",
    explanation: "**Procenten zijn de meest gevraagde categorie op de Doorstroomtoets.**\n\nVerwacht:\n• **% van bedrag**: 15% van €80 = ?\n• **Korting**: €40 met 25% korting = ?\n• **Procent uitrekenen**: 12 van de 60 = ?%\n• **Verhouding**: 'op 8 leerlingen 3 meiden' — schaal.\n• **Snelheid + tijd + afstand**: km/u uitrekenen.\n\n**Truc voor procenten**: % is 'per honderd'. 25% = 25/100 = 1/4. 50% = 1/2. 10% = 1/10. 1% = 1/100.\n\n**Snelle rekenmethode**:\n• 10% = deel door 10\n• 1% = deel door 100\n• 50% = deel door 2\n• Voor 25%: deel door 4\n\nVoorbeeld: 30% van €40 → 10% = €4, dus 30% = 3 × €4 = €12.\n\n**Verhouding**: 'op 8 leerlingen zijn 3 meiden' = 3 op 8 = 3/8 = 37,5%.\n\n**Bron**: eigen oefenvragen in stijl van Cito/IEP. Officiële Cito-voorbeelden in de [gratis PDF](https://cito.nl/media/41vbqo2t/lib_doorstroomtoets_voorbeeldopgavenboekje.pdf).",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">PROCENT-TRUCS</text>
<rect x="20" y="40" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.good}" stroke-width="1.2"/>
<text x="87" y="60" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial">10% = ÷ 10</text>
<rect x="165" y="40" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="232" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial">50% = ÷ 2</text>
<rect x="20" y="85" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="87" y="105" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">25% = ÷ 4</text>
<rect x="165" y="85" width="135" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="232" y="105" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial">1% = ÷ 100</text>
<text x="160" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Andere %? Bouw op met 10% + 1%</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">23% = 2×10% + 3×1%</text>
</svg>`,
    checks: [
      {
        q: "**20% van €60** is:",
        options: ["€12", "€20", "€80", "€3"],
        answer: 0,
        wrongHints: [null, "20% is geen 20 euro — het is een fractie van het bedrag.", "20% is veel minder dan 100% — dus minder dan €60.", "Te weinig — 20% van 60 is meer dan €3."],
        uitlegPad: {
          stappen: [{ titel: "10%-truc", tekst: "10% van €60 = €60 ÷ 10 = €6. 20% = 2 × 10% = €12. Klaar." }],
          woorden: [{ woord: "procent", uitleg: "Per honderd. 20% betekent 20 van elke 100." }],
          theorie: "Algemeen: % × bedrag = (procent / 100) × bedrag. 20/100 × 60 = 1200/100 = 12.",
          voorbeelden: [{ type: "winkel", tekst: "Trui van €60 met 20% korting → je betaalt €60 - €12 = €48." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "20% is 1/5 deel. €60 ÷ 5 = €12. Klopt." }],
          niveaus: { basis: "€12 (10%=€6, ×2). A.", simpeler: "10% van €60 = €6. 20% = 2 keer dat = €12. = A.", nogSimpeler: "€12 = A." },
        },
      },
      {
        q: "Trui kost €40, **25% korting**. Wat betaal je?",
        options: ["€30", "€25", "€10", "€15"],
        answer: 0,
        wrongHints: [null, "€25 zou betekenen 37,5% korting — te veel.", "€10 is de KORTING, niet de prijs.", "€15 zou 62,5% korting zijn — veel te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Korting berekenen", tekst: "25% van €40 = €40 ÷ 4 = €10. Dat is de korting." },
            { titel: "Eindprijs", tekst: "Eindprijs = oude prijs - korting = €40 - €10 = €30." },
          ],
          woorden: [{ woord: "korting", uitleg: "Wat je MINDER betaalt dan de oude prijs." }, { woord: "eindprijs", uitleg: "Wat je daadwerkelijk betaalt na korting." }],
          theorie: "Twee stappen altijd: (1) korting in euro's uitrekenen, (2) van oude prijs aftrekken. Niet 'gewoon 25% nemen'.",
          voorbeelden: [{ type: "rekensom", tekst: "€40 × 25/100 = €10 korting. €40 - €10 = €30. Of sneller: 75% van €40 = €30." }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Veel mensen kiezen €10 — dat is de korting, niet de prijs. Lees vraag goed: 'wat betaal je?'" }],
          niveaus: { basis: "€30 (€40 - €10 korting). A.", simpeler: "Korting = 25% × €40 = €10. Te betalen = €40 - €10 = €30. = A.", nogSimpeler: "€30 = A." },
        },
      },
      {
        q: "Anouk haalt **12 van de 60 vragen** goed. Welk percentage?",
        options: ["20%", "12%", "60%", "5%"],
        answer: 0,
        wrongHints: [null, "12% zou betekenen 'op elke 100 vragen, 12 goed'. Klopt dat?", "60% is meer dan de helft — Anouk had veel minder.", "5% is veel te laag — Anouk had niet 3 vragen goed."],
        uitlegPad: {
          stappen: [{ titel: "Deel × 100", tekst: "Percentage = (deel / geheel) × 100. 12/60 = 0,20. 0,20 × 100 = 20%." }],
          woorden: [{ woord: "deel", uitleg: "Het stukje (12 goed)." }, { woord: "geheel", uitleg: "Totaal (60 vragen)." }],
          theorie: "Algemeen: percentage = (deel ÷ geheel) × 100. Geheugentruc: deel teller door noemer, vermenigvuldig met 100.",
          voorbeelden: [{ type: "rekensom", tekst: "12 ÷ 60 = 0,2. 0,2 × 100 = 20. Antwoord: 20%." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "12/60 = 1/5 (vereenvoudig). 1/5 = 20%. Past." }],
          niveaus: { basis: "20% (12÷60×100). A.", simpeler: "12 ÷ 60 = 0,2. × 100 = 20%. = A.", nogSimpeler: "20% = A." },
        },
      },
      {
        q: "Klas heeft **24 leerlingen, verhouding meiden:jongens = 3:5**. Hoeveel meiden?",
        options: ["9", "12", "15", "8"],
        answer: 0,
        wrongHints: [null, "12 = de helft. 3:5 betekent niet 50:50.", "15 is meer dan helft. Bij 3:5 zijn jongens in meerderheid.", "8 = 1/3 deel. 3:5 = 3/8 deel meiden. Reken opnieuw."],
        uitlegPad: {
          stappen: [
            { titel: "Delen tellen", tekst: "Verhouding 3:5 betekent 8 delen totaal (3+5)." },
            { titel: "Eén deel berekenen", tekst: "24 leerlingen ÷ 8 delen = 3 leerlingen per deel." },
            { titel: "Meiden uitrekenen", tekst: "Meiden = 3 delen × 3 leerlingen = 9 meiden." },
          ],
          woorden: [{ woord: "verhouding", uitleg: "Hoeveel van elke groep er is, in vergelijking." }, { woord: "delen", uitleg: "Stukjes waarin verhouding is verdeeld." }],
          theorie: "Algemene methode: (1) tel alle delen op, (2) bereken één deel, (3) vermenigvuldig met aantal delen per groep.",
          voorbeelden: [{ type: "check", tekst: "9 meiden + 15 jongens = 24 ✓. Verhouding 9:15 = 3:5 ✓ (beide ÷3)." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "9 meiden van 24 = 37,5% = bijna 4 op de 10. Past bij verhouding 3:5." }],
          niveaus: { basis: "9 meiden (24÷8×3). A.", simpeler: "3+5=8 delen. 24÷8=3 per deel. Meiden=3×3=9. = A.", nogSimpeler: "9 = A." },
        },
      },
      {
        q: "Tom fietst **15 km in 30 minuten**. Snelheid in km/uur?",
        options: ["30 km/u", "15 km/u", "45 km/u", "7,5 km/u"],
        answer: 0,
        wrongHints: [null, "15 = aantal km, niet snelheid per uur.", "45 zou betekenen 22,5 km in 30 min — meer.", "7,5 zou betekenen halve afstand in dezelfde tijd."],
        uitlegPad: {
          stappen: [
            { titel: "Verdubbelen", tekst: "30 minuten = halve uur. In half uur 15 km. In een heel uur: 15 × 2 = 30 km/u." },
            { titel: "Algemene formule", tekst: "Snelheid = afstand ÷ tijd. Hier: 15 km ÷ 0,5 uur = 30 km/u." },
          ],
          woorden: [{ woord: "km/u", uitleg: "Kilometer per uur. Standaard snelheidsmaat." }, { woord: "snelheid", uitleg: "Hoeveel afstand per tijd. Afstand ÷ tijd." }],
          theorie: "Formule: snelheid (v) = afstand (s) ÷ tijd (t). Onthouden via 'vst-driehoek': v = s/t / s = v×t / t = s/v.",
          voorbeelden: [{ type: "vergelijk", tekst: "Lopen: ~5 km/u. Fietsen: 15-30 km/u. Auto stad: 30-50 km/u. Auto snelweg: 100-130 km/u." }],
          basiskennis: [{ onderwerp: "Tijd in uren", uitleg: "30 min = 0,5 uur (niet 30!). 15 min = 0,25 uur. 45 min = 0,75 uur." }],
          niveaus: { basis: "30 km/u (×2 want 30 min). A.", simpeler: "30 min = half uur. 15 km in half uur = 30 km in een heel uur. = A.", nogSimpeler: "30 = A." },
        },
      },
      {
        q: "Een jas kost €80. Met **25% korting** — wat betaal je?",
        options: ["€60", "€55", "€20", "€105"],
        answer: 0,
        wrongHints: [null, "Klopt — 25% van €80 = €20 korting. €80 − €20 = €60.", "Verkeerde aftrek.", "Dat is het kortingsbedrag, niet de eindprijs.", "Korting verlaagt prijs."],
        uitlegPad: {
          stappen: [
            { titel: "Korting berekenen", tekst: "25% van €80 = (25/100) × 80 = €20. Korting = €20." },
            { titel: "Aftrekken", tekst: "Eindprijs = €80 − €20 = €60." },
          ],
          woorden: [{ woord: "korting", uitleg: "Bedrag dat van de prijs af gaat." }, { woord: "procent", uitleg: "Per honderd. 25% = 25 van de 100 = 1/4." }],
          theorie: "Eindprijs = oude prijs × (1 − percentage/100). 80 × (1 − 0,25) = 80 × 0,75 = €60.",
          voorbeelden: [{ type: "snelle-truc", tekst: "25% korting = ¾ overhouden. 80 × ¾ = 60." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "€60 < €80 (klopt: korting), en €60 > €40 (niet half af). ✓" }],
          niveaus: { basis: "€60 (€80 − 25%). A.", simpeler: "25% van €80 = €20. €80 − €20 = €60. = A.", nogSimpeler: "€60 = A." },
        },
      },
      {
        q: "**40% van 200** is?",
        options: ["80", "60", "100", "240"],
        answer: 0,
        wrongHints: [null, "Klopt — 40/100 × 200 = 80.", "Te weinig.", "Dat is 50%.", "Niet — wel onder 200."],
      },
      {
        q: "In een klas van 30: **20% is ziek**. Hoeveel kinderen?",
        options: ["6", "5", "10", "15"],
        answer: 0,
        wrongHints: [null, "Klopt — 20/100 × 30 = 6.", "Net te weinig.", "Dat zou 33% zijn.", "Dat is 50%."],
      },
      {
        q: "Een schoen van **€60 wordt verhoogd met 10%**. Nieuwe prijs?",
        options: ["€66", "€70", "€54", "€600"],
        answer: 0,
        wrongHints: [null, "Klopt — 10% van €60 = €6. €60 + €6 = €66.", "Te veel.", "Dat zou korting zijn.", "Veel te veel — komma vergeten?"],
      },
      {
        q: "Verhouding **rood : blauw = 2:3**. 15 blauwe knikkers — hoeveel rode?",
        options: ["10", "5", "15", "6"],
        answer: 0,
        wrongHints: [null, "Klopt — 15÷3 = 5 per deel, 2 delen rood = 10.", "Dat is 1 deel.", "Dezelfde aantal als blauw — niet.", "Verkeerd berekend."],
      },
      {
        q: "**Wat is 50% van 1/2**?",
        options: ["1/4", "1/2", "1", "0"],
        answer: 0,
        wrongHints: [null, "Klopt — helft van een helft = kwart.", "Niet halveert.", "Dat is dubbel.", "Niet nul."],
      },
      {
        q: "Een artikel van **€120 is in de uitverkoop voor €90**. **% korting**?",
        options: ["25%", "30%", "75%", "33%"],
        answer: 0,
        wrongHints: [null, "Klopt — €30 ÷ €120 = 25%.", "Verkeerde berekening.", "Niet — dat is wat je betaalt.", "Iets te veel."],
      },
      {
        q: "Verhouding **2:5** opnieuw uitdrukken als breuk **van de kleinste in totaal**?",
        options: ["2/7", "2/5", "5/7", "1/3"],
        answer: 0,
        wrongHints: [null, "Klopt — 2 delen op totaal 7 delen (2+5).", "Niet — dat is 2 op 5, niet totaal 7.", "Andere deel.", "Verkeerd."],
      },
      {
        q: "**80% van 50** is?",
        options: ["40", "30", "20", "100"],
        answer: 0,
        wrongHints: [null, "Klopt — 80/100 × 50 = 40.", "Te weinig.", "Te weinig.", "Te veel."],
      },
    ],
  },

  // ─── Stap 3: Meten & schaal ──────────────────
  {
    title: "Meten & schaal — ~15 min",
    explanation: "**Meten zit altijd in de Doorstroomtoets.** Eenheden omrekenen + schaal lezen.\n\n**Lengte-trapje** (×10 per stap):\nkm → hm → dam → **m** → dm → cm → mm\n\n• 1 km = 1000 m\n• 1 m = 100 cm\n• 1 m = 1000 mm\n• 1 cm = 10 mm\n\n**Gewicht** (idem ×10/×1000):\n• 1 kg = 1000 g\n• 1 g = 1000 mg\n• 1 ton = 1000 kg\n\n**Inhoud**:\n• 1 L = 10 dL = 100 cL = 1000 mL\n\n**Schaal**: getal op kaart × werkelijk.\nSchaal **1:200.000** betekent: 1 cm op kaart = 200.000 cm = 2 km in werkelijkheid.\n\n**Truc — komma verschuiven**:\nTussen mm en m zit 3 stappen → komma 3 plekken verschuiven.\n• mm → m: ÷ 1000 (komma 3 plekken links)\n• m → mm: × 1000 (komma 3 plekken rechts)\n\n**Bron**: eigen oefenvragen in stijl van Cito/IEP. Voor 'echte' voorbeelden: [Cito's gratis PDF](https://cito.nl/media/41vbqo2t/lib_doorstroomtoets_voorbeeldopgavenboekje.pdf).",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="20" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">LENGTE-TRAPJE</text>
<text x="160" y="38" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">× 10 per stap, ÷ 10 omhoog</text>

<g font-family="Arial" font-size="11" font-weight="bold" text-anchor="middle">
<rect x="10" y="55" width="40" height="22" rx="4" fill="${COLORS.alt}" opacity="0.7"/><text x="30" y="71" fill="#fff">km</text>
<rect x="55" y="70" width="40" height="22" rx="4" fill="${COLORS.warm}" opacity="0.7"/><text x="75" y="86" fill="#fff">hm</text>
<rect x="100" y="85" width="40" height="22" rx="4" fill="${COLORS.warm}" opacity="0.7"/><text x="120" y="101" fill="#fff">dam</text>
<rect x="145" y="100" width="40" height="22" rx="4" fill="${COLORS.good}" opacity="0.7"/><text x="165" y="116" fill="#fff">m</text>
<rect x="190" y="115" width="40" height="22" rx="4" fill="${COLORS.warm}" opacity="0.7"/><text x="210" y="131" fill="#fff">dm</text>
<rect x="235" y="130" width="40" height="22" rx="4" fill="${COLORS.warm}" opacity="0.7"/><text x="255" y="146" fill="#fff">cm</text>
<rect x="280" y="145" width="35" height="22" rx="4" fill="${COLORS.alt}" opacity="0.7"/><text x="297" y="161" fill="#fff">mm</text>
</g>

<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">mm → m = 3 stappen omhoog = ÷ 1000</text>
</svg>`,
    checks: [
      {
        q: "**2,5 km** in **meter**?",
        options: ["2500 m", "250 m", "25.000 m", "25 m"],
        answer: 0,
        wrongHints: [null, "Te weinig — 2,5 km is meer dan 0,25 km.", "Te veel — heb je 4 plekken verschoven?", "Veel te weinig — 25 m is een schoolplein, niet 2,5 km."],
        uitlegPad: {
          stappen: [{ titel: "× 1000", tekst: "km → m = 3 stappen op trapje = × 1000. 2,5 × 1000 = 2500 m. (Komma 3 plekken naar rechts: 2,500 → 2500)." }],
          woorden: [{ woord: "km → m", uitleg: "3 stappen op trapje = × 1000." }],
          theorie: "Formule: km × 1000 = m. Of: komma 3 plekken naar rechts schuiven.",
          voorbeelden: [{ type: "fiets", tekst: "Wandeling 2,5 km = 2500 m. Een gemiddelde school-naar-huis-loopje." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "1 km = 1000 m (dat is een vaste). 2,5 km = 2 × 1000 + 0,5 × 1000 = 2000 + 500 = 2500." }],
          niveaus: { basis: "2500 m. A.", simpeler: "km × 1000 = m. 2,5 × 1000 = 2500. = A.", nogSimpeler: "2500 = A." },
        },
      },
      {
        q: "**350 g** in **kg**?",
        options: ["0,35 kg", "3,5 kg", "35 kg", "0,035 kg"],
        answer: 0,
        wrongHints: [null, "Te veel — 3,5 kg is 3500 g.", "Veel te veel — 35 kg is bijna een hele tas mest.", "Te weinig — 0,035 kg = 35 g."],
        uitlegPad: {
          stappen: [{ titel: "÷ 1000", tekst: "g → kg = ÷ 1000. 350 ÷ 1000 = 0,35 kg. Komma 3 plekken naar links: 350 → 35,0 → 3,50 → 0,350." }],
          woorden: [{ woord: "g → kg", uitleg: "÷ 1000 omdat 1 kg = 1000 g." }],
          theorie: "Algemeen: kleinere eenheid naar grotere → delen. Grotere naar kleinere → vermenigvuldigen.",
          voorbeelden: [{ type: "vergelijken", tekst: "Pak suiker = 1000 g = 1 kg. 350 g = 0,35 kg = ongeveer 1/3 pak." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "0,35 kg = 350 g = een appel + sinaasappel. Klopt." }],
          niveaus: { basis: "0,35 kg. A.", simpeler: "350 g ÷ 1000 = 0,35 kg. = A.", nogSimpeler: "0,35 = A." },
        },
      },
      {
        q: "Op kaart met **schaal 1:50.000** is afstand **4 cm**. Werkelijk?",
        options: ["2 km", "20 km", "200 m", "200 km"],
        answer: 0,
        wrongHints: [null, "20 km zou 40 cm op kaart zijn.", "200 m is te weinig — heb je vergeten te delen?", "Veel te veel — 200 km is een lange reis."],
        uitlegPad: {
          stappen: [
            { titel: "Schaal toepassen", tekst: "Schaal 1:50.000 = 1 cm op kaart = 50.000 cm in werkelijkheid." },
            { titel: "Vermenigvuldigen", tekst: "4 cm × 50.000 = 200.000 cm in werkelijkheid." },
            { titel: "Omzetten naar km", tekst: "200.000 cm = 2000 m = 2 km. (cm → m = ÷100, m → km = ÷1000)" },
          ],
          woorden: [{ woord: "schaal", uitleg: "Verhouding tussen kaart en werkelijkheid. 1:50.000 = elke 1 cm op kaart staat voor 50.000 cm echt." }],
          theorie: "Twee stappen: (1) cm × schaalgetal = cm werkelijk. (2) cm werkelijk → m → km (delen door 100 dan door 1000).",
          voorbeelden: [{ type: "kaart", tekst: "Schaal 1:25.000 (wandelkaart): 1 cm = 250 m. Schaal 1:1.000.000 (atlas): 1 cm = 10 km." }],
          basiskennis: [{ onderwerp: "Examen-tip", uitleg: "Schaal staat altijd in legenda. Vragen Doorstroomtoets gebruiken meestal 1:25.000 of 1:50.000." }],
          niveaus: { basis: "2 km. A.", simpeler: "4 cm × 50.000 = 200.000 cm = 2 km. = A.", nogSimpeler: "2 km = A." },
        },
      },
      {
        q: "Hoeveel **mL** zit in **2,5 L**?",
        options: ["2500 mL", "250 mL", "25 mL", "25.000 mL"],
        answer: 0,
        wrongHints: [null, "Te weinig — 250 mL = 0,25 L.", "Veel te weinig — 25 mL is een eetlepel.", "Te veel — heb je 4 stappen verschoven?"],
        uitlegPad: {
          stappen: [{ titel: "× 1000", tekst: "L → mL = × 1000. 2,5 × 1000 = 2500 mL. Komma 3 plekken naar rechts: 2,500 → 2500." }],
          woorden: [{ woord: "L → mL", uitleg: "× 1000 omdat 1 L = 1000 mL." }],
          theorie: "Inhoud-trapje: L → dL → cL → mL. Elke stap = × 10. L naar mL = 3 stappen = × 1000.",
          voorbeelden: [{ type: "vergelijken", tekst: "Pak melk = 1 L = 1000 mL. 2,5 L = 2,5 pakken melk = 2500 mL." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "2,5 L past in fles cola, in mL is 2500." }],
          niveaus: { basis: "2500 mL. A.", simpeler: "2,5 L × 1000 = 2500 mL. = A.", nogSimpeler: "2500 = A." },
        },
      },
      {
        q: "Een rechthoekige tuin is **6 m × 4 m**. Oppervlakte?",
        options: ["24 m²", "10 m²", "20 m²", "12 m²"],
        answer: 0,
        wrongHints: [null, "10 = lengte + breedte. Voor opp moet je vermenigvuldigen.", "20 = omtrek (2× lengte + 2× breedte). Geen oppervlakte.", "12 = halve oppervlakte. Reken opnieuw."],
        uitlegPad: {
          stappen: [{ titel: "Opp = l × b", tekst: "Oppervlakte rechthoek = lengte × breedte = 6 × 4 = 24 m²." }],
          woorden: [{ woord: "m²", uitleg: "Vierkante meter. 1 m² = oppervlakte van 1 m × 1 m vakje." }, { woord: "oppervlakte", uitleg: "Hoeveel ruimte iets bedekt. Tegenover omtrek (= rand)." }],
          theorie: "Rechthoek-formule: A = l × b. Vierkant-formule: A = z² (zijde × zijde). Driehoek: A = ½ × basis × hoogte.",
          voorbeelden: [{ type: "verschil", tekst: "Oppervlakte = 24 m² (de hele tuin). Omtrek = 2×6 + 2×4 = 20 m (de RAND, hoeveel hek je nodig hebt)." }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Veel mensen verwarren oppervlakte (×) en omtrek (+). Oppervlakte = vermenigvuldigen, omtrek = optellen." }],
          niveaus: { basis: "24 m². A.", simpeler: "6 m × 4 m = 24 m². = A.", nogSimpeler: "24 = A." },
        },
      },
      {
        q: "Hoeveel **cm** is **1,2 m**?",
        options: ["120 cm", "12 cm", "12.000 cm", "1200 cm"],
        answer: 0,
        wrongHints: [null, "Klopt — m × 100 = cm. 1,2 × 100 = 120.", "Te weinig — 12 cm is een gum.", "Veel te veel.", "Te veel — komma 1 plek te ver."],
      },
      {
        q: "Een doos is **10 cm × 10 cm × 10 cm**. **Inhoud** (volume)?",
        options: ["1000 cm³", "100 cm³", "30 cm³", "300 cm³"],
        answer: 0,
        wrongHints: [null, "Klopt — kubus: zijde × zijde × zijde = 10×10×10 = 1000 cm³.", "Te weinig — dat is oppervlakte 1 zijde.", "Dat is omtrek-achtig (10+10+10).", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Volume formule", tekst: "Kubus: V = z × z × z = z³. Voor 10 cm: 10 × 10 × 10 = 1000." },
            { titel: "Eenheid", tekst: "Volume = cm³ (kubieke cm). 1000 cm³ = 1 liter." },
          ],
          woorden: [{ woord: "volume", uitleg: "Hoeveel ruimte iets inneemt (in 3D)." }, { woord: "cm³", uitleg: "Kubieke centimeter = 1 cm × 1 cm × 1 cm kubusje." }],
          theorie: "Kubus: V = z³. Rechthoekig blok: V = l × b × h. Inhoud altijd in 'kubieke' eenheden.",
          voorbeelden: [{ type: "alledaags", tekst: "1000 cm³ = 1 liter = pak melk." }],
          basiskennis: [{ onderwerp: "3 dimensies", uitleg: "Oppervlakte = 2D (m²), volume = 3D (m³ of cm³)." }],
          niveaus: { basis: "1000 cm³ (10³). A.", simpeler: "10 × 10 × 10 = 1000. Eenheid is cm³. = A.", nogSimpeler: "1000 = A." },
        },
      },
      {
        q: "Een tuin is **5 m × 8 m**. Hoeveel meter **hek** is nodig (omtrek)?",
        options: ["26 m", "40 m", "13 m", "20 m"],
        answer: 0,
        wrongHints: [null, "Klopt — omtrek = 2 × (5+8) = 26 m.", "Dat is oppervlakte, niet omtrek.", "Halve omtrek.", "Niet."],
      },
      {
        q: "**3,5 kg** in **gram**?",
        options: ["3500 g", "350 g", "35 g", "35.000 g"],
        answer: 0,
        wrongHints: [null, "Klopt — kg × 1000.", "Te weinig.", "Te weinig.", "Te veel."],
      },
      {
        q: "Schaal **1:1.000.000** (atlas). **3 cm** op kaart = ?",
        options: ["30 km", "3 km", "300 m", "300 km"],
        answer: 0,
        wrongHints: [null, "Klopt — 3 × 1.000.000 cm = 30.000 m = 30 km.", "Te weinig.", "Veel te weinig.", "Te veel."],
      },
      {
        q: "Een driehoek heeft **basis 6 cm** en **hoogte 4 cm**. Oppervlakte?",
        options: ["12 cm²", "24 cm²", "10 cm²", "6 cm²"],
        answer: 0,
        wrongHints: [null, "Klopt — opp = ½ × basis × hoogte = ½ × 6 × 4 = 12.", "Vergeten ½ — dat is rechthoek-opp.", "Optellen werkt niet.", "Halve hoogte."],
      },
      {
        q: "Hoeveel **mL** in een **halve liter**?",
        options: ["500 mL", "50 mL", "5 mL", "5000 mL"],
        answer: 0,
        wrongHints: [null, "Klopt — 1 L = 1000 mL, helft = 500.", "Veel te weinig.", "Veel te weinig.", "Te veel."],
      },
      {
        q: "Een vierkant heeft **omtrek 24 cm**. Wat is **zijde**?",
        options: ["6 cm", "12 cm", "24 cm", "4 cm"],
        answer: 0,
        wrongHints: [null, "Klopt — vierkant heeft 4 zijden, 24÷4 = 6.", "Niet — dat is halve omtrek.", "Hele omtrek.", "Te weinig."],
      },
      {
        q: "**0,5 ton** in **kg**?",
        options: ["500 kg", "50 kg", "5000 kg", "5 kg"],
        answer: 0,
        wrongHints: [null, "Klopt — 1 ton = 1000 kg, half = 500.", "Te weinig.", "Te veel.", "Veel te weinig."],
      },
    ],
  },

  // ─── Stap 4: Redactie-eindopdracht ──────────────────
  {
    title: "Redactiesommen — eindopdracht ~15 min",
    explanation: "**Redactiesommen** = vragen verstopt in een verhaaltje. Vaak de moeilijkste op de Doorstroomtoets — niet door de wiskunde, maar omdat je moet uitvogelen WELKE wiskunde je nodig hebt.\n\n**Aanpak in 4 stappen**:\n\n**1. Lees rustig** — minstens 2 keer.\n**2. Onderstreep getallen** + **kringel het vraagteken**.\n**3. Bedenk** welke som hier zit (+, -, ×, ÷, %, gemiddelde, oppervlakte, etc.).\n**4. Reken + check** of het antwoord redelijk is.\n\n**Veelvoorkomende types**:\n• **Inkoop + winst**: 'kocht voor X, verkocht voor Y, winst?'\n• **Tijd + tarief**: 'verdient €10/u, werkt 3,5 u, totaal?'\n• **Verdelen**: '4 vrienden delen €60, ieder krijgt?'\n• **Snelheid**: '60 km in 1,5 uur, km/u?'\n• **Gemiddelde**: 'cijfers 6, 7, 8, gemiddeld?'\n\n**Examen-tip**: schrijf TUSSENSTAPPEN op. Cito geeft alleen punten voor goed antwoord — maar tussenstappen helpen JOU om geen domme fout te maken.\n\n**Bron**: eigen oefenvragen in stijl van Cito/IEP. Officiële voorbeelden: [Cito's gratis PDF](https://cito.nl/media/41vbqo2t/lib_doorstroomtoets_voorbeeldopgavenboekje.pdf).\n\n**Klaar voor de eindopdracht?** 5 gemixte redactiesommen.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="20" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">REDACTIE-AANPAK</text>
<rect x="20" y="40" width="280" height="30" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="160" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">1. Lees 2× rustig</text>
<rect x="20" y="75" width="280" height="30" rx="6" fill="${COLORS.paper}" stroke="${COLORS.good}" stroke-width="1.2"/>
<text x="160" y="95" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">2. Onderstreep getallen + vraag</text>
<rect x="20" y="110" width="280" height="30" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="160" y="130" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">3. Welke som? + − × ÷ %</text>
<rect x="20" y="145" width="280" height="30" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.2"/>
<text x="160" y="165" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">4. Reken + check realistisch</text>
<text x="160" y="192" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">tussenstappen opschrijven helpt!</text>
</svg>`,
    checks: [
      {
        q: "Mike koopt **3 boeken** van €12,50 per stuk. Hij betaalt met **€50**. Hoeveel wisselgeld?",
        options: ["€12,50", "€37,50", "€25", "€50"],
        answer: 0,
        wrongHints: [null, "€37,50 = totaal kosten, niet wisselgeld.", "€25 = de helft. Reken opnieuw.", "€50 = wat je betaalde, niet wat je terugkrijgt."],
        uitlegPad: {
          stappen: [
            { titel: "Kosten", tekst: "3 boeken × €12,50 = €37,50 totaal." },
            { titel: "Wisselgeld", tekst: "Betaald €50, kosten €37,50. Wisselgeld = €50 - €37,50 = €12,50." },
          ],
          woorden: [{ woord: "wisselgeld", uitleg: "Wat je terugkrijgt als je meer betaalt dan iets kost." }],
          theorie: "Twee stappen: (1) eerst totale kosten uitrekenen (×), (2) dan aftrekken van betaald bedrag (-).",
          voorbeelden: [{ type: "check", tekst: "€37,50 + €12,50 = €50 ✓. Wisselgeld klopt." }],
          basiskennis: [{ onderwerp: "Lezen", uitleg: "Vraag is 'wisselgeld', niet 'totale kosten'. Onderscheid maken!" }],
          niveaus: { basis: "€12,50. A.", simpeler: "3×€12,50=€37,50. €50-€37,50=€12,50 wisselgeld. = A.", nogSimpeler: "€12,50 = A." },
        },
      },
      {
        q: "Lisa heeft toets-cijfers **6,5 / 7 / 7,5 / 8**. Wat is haar **gemiddelde**?",
        options: ["7,25", "7", "7,5", "29"],
        answer: 0,
        wrongHints: [null, "7 zou betekenen alle cijfers waren 7. Klopt niet.", "7,5 = mediaan ongeveer, niet gemiddelde.", "29 = som, niet gemiddelde."],
        uitlegPad: {
          stappen: [
            { titel: "Som", tekst: "6,5 + 7 + 7,5 + 8 = 29. Tel alle cijfers op." },
            { titel: "Delen door aantal", tekst: "Gemiddelde = som ÷ aantal cijfers = 29 ÷ 4 = 7,25." },
          ],
          woorden: [{ woord: "gemiddelde", uitleg: "Som van alle waarden gedeeld door aantal waarden." }],
          theorie: "Formule: gemiddelde = (a₁ + a₂ + ... + aₙ) ÷ n. Veel-gebruikt op rapport en in statistiek.",
          voorbeelden: [{ type: "check", tekst: "7,25 ligt tussen 6,5 en 8. Past in midden van de range. Klopt." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "Gemiddelde 7,25 = 'voldoende met ruim marge'. Een 7,4 of hoger op rapport is mooi." }],
          niveaus: { basis: "7,25. A.", simpeler: "Totaal=29. ÷ 4 cijfers = 7,25. = A.", nogSimpeler: "7,25 = A." },
        },
      },
      {
        q: "Een trui kost **€32**. Met **25% korting** in de uitverkoop. Wat betaal je?",
        options: ["€24", "€8", "€7", "€40"],
        answer: 0,
        wrongHints: [null, "€8 = de korting, niet de prijs.", "€7 ≈ wat 25% van 28 zou zijn — niet juist.", "€40 zou betekenen 25% MEER, niet korting."],
        uitlegPad: {
          stappen: [
            { titel: "Korting", tekst: "25% van €32 = €32 ÷ 4 = €8. (25% = 1/4)" },
            { titel: "Eindprijs", tekst: "€32 - €8 = €24. Dat betaal je." },
          ],
          woorden: [{ woord: "uitverkoop", uitleg: "Periode met flinke kortingen, vaak einde seizoen." }],
          theorie: "Snel: 25% korting = 75% betalen. 75% × €32 = €24. Sneller dan 'korting eraf trekken'.",
          voorbeelden: [{ type: "check", tekst: "€24 + €8 = €32 ✓. Korting klopt." }],
          basiskennis: [{ onderwerp: "Examen-val", uitleg: "Veel kiezen €8 (de korting, niet de eindprijs). Lees vraag: 'wat betaal je?'" }],
          niveaus: { basis: "€24. A.", simpeler: "Korting=€8 (25% van €32). Te betalen=€32-€8=€24. = A.", nogSimpeler: "€24 = A." },
        },
      },
      {
        q: "**Auto rijdt 90 km/u**. Hoe ver komt hij in **20 minuten**?",
        options: ["30 km", "45 km", "20 km", "60 km"],
        answer: 0,
        wrongHints: [null, "45 = halve uur. 20 min is minder dan half uur.", "20 = de minuten, niet km. Andere eenheid.", "60 = 40 min ongeveer. Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Tijd in uren", tekst: "20 minuten = 20/60 uur = 1/3 uur." },
            { titel: "Afstand", tekst: "Afstand = snelheid × tijd = 90 × 1/3 = 30 km." },
          ],
          woorden: [{ woord: "snelheid", uitleg: "Afstand per tijdseenheid. km/u = kilometer per uur." }],
          theorie: "Formule: s = v × t. Pas op: tijd in uren! 30 min = 0,5 u. 45 min = 0,75 u. 15 min = 0,25 u. 20 min = 1/3 u.",
          voorbeelden: [{ type: "check", tekst: "90 km in 1 uur. Dus 30 km in 1/3 uur. Past." }],
          basiskennis: [{ onderwerp: "Tijd-omzetting", uitleg: "Veel mensen vergeten minuten naar uur om te zetten. 20 min ≠ 20/100 u, wel 20/60 u." }],
          niveaus: { basis: "30 km (1/3 × 90). A.", simpeler: "20 min = 1/3 u. 1/3 × 90 km/u = 30 km. = A.", nogSimpeler: "30 = A." },
        },
      },
      {
        q: "Op een klas van **28 leerlingen** krijgen **75% een voldoende**. Hoeveel **onvoldoendes**?",
        options: ["7", "21", "75", "4"],
        answer: 0,
        wrongHints: [null, "21 = aantal VOLDOENDES (75% van 28).", "75 = het percentage, niet aantal.", "4 = ongeveer 14%. Reken opnieuw."],
        uitlegPad: {
          stappen: [
            { titel: "% onvoldoendes", tekst: "Als 75% voldoende heeft, dan 100% - 75% = 25% onvoldoende." },
            { titel: "Aantal", tekst: "25% van 28 = 28 ÷ 4 = 7 leerlingen met onvoldoende." },
          ],
          woorden: [{ woord: "onvoldoende", uitleg: "Cijfer onder 5,5 in NL-schoolsysteem." }],
          theorie: "Truc: 100% - bekend % = complement. Dan dat percentage uitrekenen. Alternatief: aantal voldoendes uitrekenen (21), dan aftrekken van totaal (28-21=7).",
          voorbeelden: [{ type: "check", tekst: "7 + 21 = 28 ✓. Klopt." }],
          basiskennis: [{ onderwerp: "Lezen", uitleg: "Vraag is ONVOLDOENDES. Veel mensen rekenen voldoendes uit (21) en vergeten af te trekken." }],
          niveaus: { basis: "7 onvoldoendes (25% × 28). A.", simpeler: "75% voldoende = 25% onvoldoende. 25% × 28 = 7. = A.", nogSimpeler: "7 = A." },
        },
      },
      {
        q: "Een glas frisdrank kost €1,80. Hoeveel betaal je voor **5 glazen**?",
        options: ["€9,00", "€7,20", "€10,00", "€1,80"],
        answer: 0,
        wrongHints: [null, "Klopt — 5 × €1,80 = €9,00.", "Dat is 4 × €1,80.", "Te veel — komma vergeten?", "Dat is 1 glas."],
      },
      {
        q: "Tom legt om de **15 minuten** een nieuwe pot bloemen. Hoeveel **per uur**?",
        options: ["4 potten", "15 potten", "60 potten", "1 pot"],
        answer: 0,
        wrongHints: [null, "Klopt — 60 min ÷ 15 = 4.", "Niet — 15 was tijdsinterval.", "Veel te veel.", "Te weinig — minder dan 15 min/pot."],
      },
      {
        q: "Een fietstas weegt **leeg 800 g**. Met **2 kg** boodschappen erin — totaal?",
        options: ["2,8 kg", "2,2 kg", "10 kg", "2,08 kg"],
        answer: 0,
        wrongHints: [null, "Klopt — 800 g = 0,8 kg. 0,8 + 2 = 2,8 kg.", "Verkeerd opgeteld.", "Veel te veel.", "Te weinig — 800 g ≠ 0,08 kg."],
        uitlegPad: {
          stappen: [
            { titel: "Eenheid gelijk", tekst: "Voor optellen: zet beide in zelfde eenheid. 800 g = 0,8 kg." },
            { titel: "Optellen", tekst: "0,8 kg + 2 kg = 2,8 kg." },
          ],
          woorden: [{ woord: "g ↔ kg", uitleg: "1 kg = 1000 g. 800 g = 0,8 kg." }],
          theorie: "Hoofdregel rekenen met gemengde eenheden: ALTIJD eerst gelijke eenheid maken. Dan pas optellen/aftrekken.",
          voorbeelden: [{ type: "alledaags", tekst: "Tas met boodschappen + kg-pak: alles in kg → optellen." }],
          basiskennis: [{ onderwerp: "Valkuil", uitleg: "Veel mensen doen 800 + 2 = 802. Fout — eenheden niet gelijk!" }],
          niveaus: { basis: "2,8 kg (0,8 + 2). A.", simpeler: "800 g = 0,8 kg. 0,8 + 2 = 2,8 kg. = A.", nogSimpeler: "2,8 = A." },
        },
      },
      {
        q: "Anne spaart **€5 per week** voor een fiets van **€60**. Hoeveel weken?",
        options: ["12 weken", "10 weken", "6 weken", "300 weken"],
        answer: 0,
        wrongHints: [null, "Klopt — €60 ÷ €5 = 12.", "Verkeerd gedeeld.", "Te kort.", "Veel te lang."],
      },
      {
        q: "Een trein vertrekt **08:45** en rijdt **2u15**. Aankomst?",
        options: ["11:00", "10:45", "11:30", "10:00"],
        answer: 0,
        wrongHints: [null, "Klopt — 08:45 + 2u = 10:45 + 15 min = 11:00.", "Slechts 2 uur opgeteld.", "Te lang.", "Te kort."],
      },
      {
        q: "**240 km** met snelheid **80 km/u** — reistijd?",
        options: ["3 uur", "2 uur", "4 uur", "240 uur"],
        answer: 0,
        wrongHints: [null, "Klopt — 240 ÷ 80 = 3.", "Te kort.", "Te lang.", "Absurd."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const doorstroomtoetsRekenenG8 = {
  id: "doorstroomtoets-rekenen-g8",
  title: "Doorstroomtoets — rekenen oefenen (groep 8)",
  emoji: "🎯",
  level: "groep8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Rekenen — Doorstroomtoets-voorbereiding",
  prerequisites: [
    { id: "breuken-po", title: "Breuken (groep 7-8)", niveau: "po-1F" },
    { id: "procenten-po", title: "Procenten (groep 7-8)", niveau: "po-1F" },
    { id: "verhoudingen-po", title: "Verhoudingen (groep 7-8)", niveau: "po-1F" },
    { id: "maten-eenheden", title: "Maten & eenheden (groep 7-8)", niveau: "po-1F" },
    { id: "redactiesommen-pad", title: "Redactiesommen", niveau: "po-1F" },
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
  intro:
    "20 oefenvragen rekenen in stijl van Cito/IEP Doorstroomtoets — breuken, procenten, meten, redactiesommen. Géén kopieën, eigen vragen © Leerkwartier. Voor echte Cito-voorbeelden: gratis voorbeeldopgavenboekje op cito.nl. Vier delen van ~15 min.",
  triggerKeywords: [
    "doorstroomtoets", "doorstroom", "doorstroomtoets rekenen",
    "cito", "cito-eindtoets", "cito eindtoets", "cito rekenen", "cito groep 8",
    "iep", "route 8", "amn", "dia",
    "eindtoets groep 8", "groep 8 oefenen", "eindtoets rekenen",
    "rekenen oefenen groep 8", "rekenen cito",
  ],
  chapters,
  steps,
};

export default doorstroomtoetsRekenenG8;
