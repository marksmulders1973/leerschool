// Leerpad: Doorstroomtoets — rekenen groep 8 (pilot)
// 4 stappen van ~20 min, 20 eigen vragen "in stijl van" Cito/IEP Doorstroomtoets.
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
    title: "Breuken & decimalen — ~20 min",
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
        wrongHints: [null, "Kleiner dan 2/3.", "Niet — verschillende waarden.", "Wel — maak gelijknamig of decimaal."],
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
        wrongHints: [null, "Niet — 1/4 is een kwart.", "Niet — dat is 4/10.", "Dat is 3/4."],
        uitlegPad: {
          stappen: [
            { titel: "Breuk = deling", tekst: "Een breuk is eigenlijk een deling. 1/4 betekent: '1 gedeeld door 4'." },
            { titel: "Reken het uit", tekst: "1 ÷ 4 = 0,25. Dus 1/4 als decimaal is **0,25**." },
            { titel: "Onthoud de 4 vaste breuken", tekst: "1/2 = 0,5. 1/4 = 0,25. 3/4 = 0,75. 1/5 = 0,20. Deze hebben we altijd nodig — uit hoofd kennen!" },
          ],
          woorden: [
            { woord: "breuk", uitleg: "Een deel van een geheel (teller / noemer)." },
            { woord: "decimaal", uitleg: "Getal met komma (0,25; 0,5; 1,75)." },
          ],
          theorie: "Een breuk omzetten naar decimaal: deel de teller door de noemer. 1/4 = 1 ÷ 4 = 0,25. 3/8 = 3 ÷ 8 = 0,375.",
          voorbeelden: [
            { type: "stap", tekst: "1/2 = 1 ÷ 2 = 0,5." },
            { type: "stap", tekst: "3/4 = 3 ÷ 4 = 0,75." },
            { type: "stap", tekst: "1/10 = 1 ÷ 10 = 0,1." },
          ],
          basiskennis: [{ onderwerp: "Geheugen", uitleg: "1/4 (kwart) = 0,25 — denk aan een kwartje (25 cent)." }],
          niveaus: {
            basis: "Breuk → decimaal = teller ÷ noemer.",
            simpeler: "1/4 = 1 ÷ 4 = 0,25.",
            nogSimpeler: "Kwart = 0,25.",
          },
        },
      },
      {
        q: "Wat is **0,5 + 1/4**?",
        options: ["0,75", "0,55", "1,5", "1/8"],
        answer: 0,
        wrongHints: [null, "Verkeerd opgeteld.", "Te groot.", "Niet — 1/8 is helft van 1/4."],
      },
      {
        q: "Wat is **2/3 − 1/6**?",
        options: ["1/2", "1/3", "1/6", "2/6"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Niet vereenvoudigd."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: gelijke noemers maken", tekst: "Je kunt alleen breuken aftrekken met DEZELFDE noemer. 2/3 en 1/6 hebben niet dezelfde — eerst gelijknamig maken." },
            { titel: "Stap 2: kleinste gemene noemer", tekst: "De noemers zijn 3 en 6. De kleinste gemeenschappelijke is **6** (6 is een veelvoud van 3). Reken 2/3 om: 2/3 = 4/6 (×2 boven en onder)." },
            { titel: "Stap 3: nu aftrekken", tekst: "4/6 − 1/6 = **3/6**. Vereenvoudig: 3/6 = 1/2 (delen door 3 boven en onder)." },
          ],
          woorden: [
            { woord: "gelijknamig maken", uitleg: "Beide breuken dezelfde noemer geven." },
            { woord: "vereenvoudigen", uitleg: "Teller én noemer delen door hetzelfde getal." },
          ],
          theorie: "Breuken optellen of aftrekken: ALTIJD eerst gelijke noemer maken. Dan tellers samenvoegen, noemer blijft hetzelfde. Eindigen met vereenvoudigen indien mogelijk.",
          voorbeelden: [
            { type: "stap", tekst: "1/2 − 1/4 → 2/4 − 1/4 = 1/4." },
            { type: "stap", tekst: "1/3 + 1/6 → 2/6 + 1/6 = 3/6 = 1/2." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Maak van de kleinste noemer de doelnoemer als de andere er een veelvoud van is." }],
          niveaus: {
            basis: "Gelijknamig maken, dan tellers aftrekken, vereenvoudigen.",
            simpeler: "2/3 = 4/6. Nu 4/6 − 1/6 = 3/6 = 1/2.",
            nogSimpeler: "Gelijke noemer eerst, dan tellers aftrekken.",
          },
        },
      },
      {
        q: "Schrijf **0,8 als breuk** in eenvoudigste vorm.",
        options: ["4/5", "8/10", "0,8", "5/4"],
        answer: 0,
        wrongHints: [null, "Klopt qua waarde maar niet vereenvoudigd.", "Dat is decimaal, niet breuk.", "Groter dan 1 — verkeerd."],
      },
      {
        q: "Welk getal is **groter**: **0,7** of **3/4**?",
        options: ["3/4", "0,7", "Even groot", "Niet te bepalen"],
        answer: 0,
        wrongHints: [null, "0,7 = 0,70. Kleiner dan 0,75.", "Niet — verschillende waarden.", "Wel — decimaliseer."],
      },
      {
        q: "Wat is **2/5 + 1/10**?",
        options: ["1/2", "3/15", "3/10", "1/7"],
        answer: 0,
        wrongHints: [null, "Tellers + noemers samen — fout.", "Niet vereenvoudigd.", "Niet."],
      },
      {
        q: "**1,25 als breuk** (eenvoudigst)?",
        options: ["5/4", "1 1/4", "125/100", "12,5/10"],
        answer: 0,
        wrongHints: [null, "Klopt ook (gemengd), maar 5/4 is breuk.", "Niet vereenvoudigd.", "Niet eens een breuk."],
      },
      {
        q: "**Helft van 0,8**?",
        options: ["0,4", "1,6", "0,08", "0,5"],
        answer: 0,
        wrongHints: [null, "Dat is 2× zo veel.", "10x te weinig.", "Helft van 1."],
      },
      {
        q: "Welk getal is **kleiner**: 0,25 of 1/3?",
        options: ["0,25", "1/3", "Even groot", "Niet te bepalen"],
        answer: 0,
        wrongHints: [null, "Niet — kleiner zoeken.", "Niet.", "Wel."],
      },
      {
        q: "**Vereenvoudig 12/16**.",
        options: ["3/4", "6/8", "1/2", "12/16"],
        answer: 0,
        wrongHints: [null, "Klopt waarde maar niet helemaal vereenvoudigd.", "Niet — die is kleiner.", "Niet vereenvoudigd."],
      },
      {
        q: "Hoeveel is **3/4 van 20**?",
        options: ["15", "5", "12", "60"],
        answer: 0,
        wrongHints: [null, "Dat is 1/4.", "Verkeerd berekend.", "Veel te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: eerst 1/4 van 20", tekst: "Om 3/4 te krijgen, weet je eerst 1/4. 1/4 betekent 'gedeeld door 4'. 20 ÷ 4 = **5**." },
            { titel: "Stap 2: keer 3", tekst: "Nu je weet dat 1/4 van 20 = 5, is 3/4 = 3 × 5 = **15**." },
            { titel: "Snelle route", tekst: "Truc: deel eerst door de noemer, vermenigvuldig dan met de teller. 20 ÷ 4 × 3 = 5 × 3 = 15." },
          ],
          woorden: [
            { woord: "breuk van een getal", uitleg: "Deel het getal door de noemer, maal met de teller." },
            { woord: "teller / noemer", uitleg: "Boven streep = teller (3), onder streep = noemer (4)." },
          ],
          theorie: "Formule: breuk van getal = (getal ÷ noemer) × teller. Voor 3/4 van 20: (20 ÷ 4) × 3 = 5 × 3 = 15.",
          voorbeelden: [
            { type: "stap", tekst: "1/2 van 30: 30 ÷ 2 × 1 = 15." },
            { type: "stap", tekst: "2/5 van 50: 50 ÷ 5 × 2 = 10 × 2 = 20." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eerst delen (door noemer), dan vermenigvuldigen (met teller). Soms makkelijker andersom." }],
          niveaus: {
            basis: "Getal ÷ noemer × teller.",
            simpeler: "1/4 van 20 = 5. 3/4 = 3 × 5 = 15.",
            nogSimpeler: "1/4 = 5, dus 3/4 = 15.",
          },
        },
      },
      {
        q: "Wat is **5/6 − 1/2**?",
        options: ["1/3", "4/4", "1/6", "2/3"],
        answer: 0,
        wrongHints: [null, "Niet zo.", "Te klein.", "Te groot."],
      },
      {
        q: "Schrijf **2 1/2 als onechte breuk** (teller groter).",
        options: ["5/2", "21/2", "2/2", "3/2"],
        answer: 0,
        wrongHints: [null, "Niet — getal aan elkaar = fout.", "Dat is 1.", "Dat is 1 1/2."],
      },
      {
        q: "**4 × 0,25** is?",
        options: ["1", "0,1", "10", "4,25"],
        answer: 0,
        wrongHints: [null, "10x te weinig.", "10x te veel.", "Optellen, niet."],
      },
      {
        q: "Wat is **3/4 + 1/4**?",
        options: ["1", "4/8", "3/8", "1/2"],
        answer: 0,
        wrongHints: [null, "Zelfde noemer optellen — tellers samen.", "Te klein.", "Helft is te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Zelfde noemer", tekst: "Bij optellen met dezelfde noemer (hier 4): tel de tellers op, noemer blijft hetzelfde." },
            { titel: "Stap", tekst: "3/4 + 1/4 = (3+1)/4 = 4/4 = 1 heel." },
          ],
          woorden: [{ woord: "teller / noemer", uitleg: "Teller staat boven, noemer onder. Bij optellen met zelfde noemer: tellers samen, noemer blijft." }],
          theorie: "Cito-truc: kijk eerst of noemers gelijk zijn. Zo ja: tellers optellen. Anders: eerst gelijknamig maken.",
          voorbeelden: [
            { type: "stap", tekst: "2/5 + 1/5 = 3/5." },
            { type: "stap", tekst: "5/8 + 3/8 = 8/8 = 1." },
          ],
          basiskennis: [{ onderwerp: "Heel maken", uitleg: "Als de teller gelijk is aan de noemer (4/4, 8/8, 3/3): dat is 1 heel." }],
          niveaus: {
            basis: "3/4 + 1/4 = 4/4 = 1. A.",
            simpeler: "Zelfde noemer → tellers samen: 3+1 = 4. → 4/4 = 1. = A.",
            nogSimpeler: "Allebei 'kwart' → samen = heel. A.",
          },
        },
      },
      {
        q: "**0,5 + 0,5** is?",
        options: ["1", "0,10", "0,1", "10"],
        answer: 0,
        wrongHints: [null, "Niet zo — 'plakken' is geen optellen.", "0,5 + 0,5 is groter dan 0,1.", "Veel te groot."],
      },
      {
        q: "Wat is **1/2 van 60**?",
        options: ["30", "60", "120", "6"],
        answer: 0,
        wrongHints: [null, "Geheel — niet de helft.", "Verdubbeld in plaats van gehalveerd.", "10× te klein."],
        uitlegPad: {
          stappen: [
            { titel: "'Van' = keer", tekst: "In rekentaal betekent 'van' meestal *keer*. 1/2 van 60 = 1/2 × 60." },
            { titel: "Rekenen", tekst: "1/2 × 60 = 60 ÷ 2 = 30." },
          ],
          woorden: [{ woord: "van", uitleg: "In sommen: 'breuk van getal' = breuk × getal." }],
          theorie: "Cito-truc: 'breuk van X' = X delen door de noemer, daarna keer de teller. Bij 1/2: gewoon delen door 2.",
          voorbeelden: [
            { type: "stap", tekst: "1/4 van 80 = 80 ÷ 4 = 20." },
            { type: "stap", tekst: "3/4 van 80 = 20 × 3 = 60." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eerst delen door noemer, dan keer teller. Of: keer breuk, dan delen — beide werkt." }],
          niveaus: {
            basis: "60 ÷ 2 = 30. A.",
            simpeler: "Helft van 60 = 60/2 = 30. = A.",
            nogSimpeler: "60 : 2 = 30 = A.",
          },
        },
      },
      {
        q: "Wat is **2/3** geschreven als **decimaal getal** (afgerond op 2)?",
        options: ["0,67", "0,23", "0,32", "1,5"],
        answer: 0,
        wrongHints: [null, "Niet zomaar de cijfers herschrijven.", "Niet de cijfers omdraaien.", "Te groot — een breuk kleiner dan 1 is geen 1,5."],
      },
      {
        q: "Wat is **0,7 − 0,3**?",
        options: ["0,4", "0,10", "0,04", "4"],
        answer: 0,
        wrongHints: [null, "Niet zo — komma op verkeerde plek.", "Komma-fout.", "100× te groot."],
      },
      {
        q: "**1/2 + 1/3** is?",
        options: ["5/6", "2/5", "1/5", "2/3"],
        answer: 0,
        wrongHints: [null, "Niet — tellers + noemers zomaar optellen werkt niet.", "Te klein.", "Te klein."],
        uitlegPad: {
          stappen: [
            { titel: "Gelijke noemers eerst", tekst: "Bij verschillende noemers eerst gelijknamig maken. Kleinste gemene veelvoud van 2 en 3 = 6." },
            { titel: "Omrekenen", tekst: "1/2 = 3/6. 1/3 = 2/6. Dan: 3/6 + 2/6 = 5/6." },
          ],
          woorden: [{ woord: "gelijknamig", uitleg: "Zelfde noemer hebben." }],
          theorie: "Cito-truc bij optellen breuken met verschillende noemers: vermenigvuldig kruislings of zoek het kleinste gemene veelvoud.",
          voorbeelden: [{ type: "stap", tekst: "1/4 + 1/2 = 1/4 + 2/4 = 3/4." }],
          basiskennis: [{ onderwerp: "KGV", uitleg: "Kleinste gemene veelvoud = kleinste getal waar beide noemers in passen. Voor 2 en 3 = 6. Voor 4 en 6 = 12." }],
          niveaus: {
            basis: "5/6. A.",
            simpeler: "Gelijknamig maken: 3/6 + 2/6 = 5/6. = A.",
            nogSimpeler: "3/6 + 2/6 = 5/6 = A.",
          },
        },
      },
      {
        q: "Welke breuk is **groter**: **2/3** of **3/5**?",
        options: ["2/3", "3/5", "Gelijk", "Niet te bepalen"],
        answer: 0,
        wrongHints: [null, "Reken: 2/3 ≈ 0,67. 3/5 = 0,6. Niet groter.", "Niet gelijk.", "Wel te bepalen."],
      },
      {
        q: "Wat is **0,25 × 4**?",
        options: ["1", "100", "0,1", "0,01"],
        answer: 0,
        wrongHints: [null, "Komma vergeten.", "Te klein.", "Te klein."],
      },
      {
        q: "**1/4 + 1/2 + 1/4** is?",
        options: ["1", "1/8", "3/4", "1/2"],
        answer: 0,
        wrongHints: [null, "Veel te klein.", "1/2 vergeten op te tellen.", "Plus nog 1/4 missend."],
      },
      {
        q: "Wat is **3 × 1/4**?",
        options: ["3/4", "1/12", "1/4", "1"],
        answer: 0,
        wrongHints: [null, "Te klein — vermenigvuldigen is geen delen.", "Eén kwart drie keer is meer.", "Niet helemaal heel."],
        uitlegPad: {
          stappen: [
            { titel: "Heel × breuk", tekst: "Vermenigvuldig met breuk: keer de teller, noemer blijft. 3 × 1/4 = 3/4." },
          ],
          woorden: [{ woord: "vermenigvuldigen breuk", uitleg: "Keer teller × heel getal. Noemer blijft." }],
          theorie: "Cito-truc: 3 × 1/4 betekent '3 keer een kwartje' = 3/4. Visueel: 3 punten van een kwart pizza.",
          voorbeelden: [{ type: "stap", tekst: "4 × 1/2 = 4/2 = 2 hele." }],
          basiskennis: [{ onderwerp: "Check", uitleg: "Als teller > noemer wordt: kun je het omzetten naar heel getal + breuk." }],
          niveaus: {
            basis: "3/4. A.",
            simpeler: "Drie kwartjes = 3/4. = A.",
            nogSimpeler: "3 × 1/4 = 3/4 = A.",
          },
        },
      },
      {
        q: "**3/8 vereenvoudig** je tot ___?",
        options: ["Niet te vereenvoudigen", "1/2", "3/4", "1/8"],
        answer: 0,
        wrongHints: [null, "Niet — geen gemene deler.", "Niet — andere breuk.", "Niet — niet zomaar 'gelijke noemer'."],
        uitlegPad: {
          stappen: [
            { titel: "Vereenvoudigen = delen", tekst: "Een breuk vereenvoudig je door teller én noemer te delen door dezelfde deler. 3 en 8 hebben geen gemene deler > 1." },
          ],
          woorden: [{ woord: "vereenvoudigen", uitleg: "Breuk omzetten naar kleinere getallen (zelfde waarde)." }],
          theorie: "Cito-truc: zoek de grootste gemene deler. 6/9 = 2/3 (beide door 3). 4/8 = 1/2 (beide door 4).",
          voorbeelden: [{ type: "stap", tekst: "8/12: beide door 4 = 2/3." }],
          basiskennis: [{ onderwerp: "Onvereenvoudigbaar", uitleg: "Breuken zoals 3/8, 5/7, 2/9: geen gemene deler — al simpelst." }],
          niveaus: {
            basis: "Niet te vereenvoudigen. A.",
            simpeler: "3 en 8 hebben geen gemene deler. = A.",
            nogSimpeler: "Niet kleiner = A.",
          },
        },
      },
      {
        q: "**0,1 × 0,1** is?",
        options: ["0,01", "0,1", "1", "0,2"],
        answer: 0,
        wrongHints: [null, "Niet — komma 2 plekken naar links bij vermenigvuldiging 2 decimalen.", "Te groot.", "Niet vermenigvuldigen ≠ optellen."],
      },
      {
        q: "Wat is **1/3 als procent** (afgerond)?",
        options: ["33%", "13%", "30%", "3%"],
        answer: 0,
        wrongHints: [null, "Niet zomaar de cijfers herschrijven.", "Niet — 1/3 ≈ 0,33.", "Veel te weinig."],
      },
      {
        q: "**1,25 + 0,75** is?",
        options: ["2", "1,1", "0,5", "2,25"],
        answer: 0,
        wrongHints: [null, "Veel te weinig.", "Niet — aftrekken werkt niet hier.", "Verkeerd opgeteld."],
      },
      {
        q: "Welke breuk is **gelijk aan 0,5**?",
        options: ["1/2", "1/3", "1/4", "1/5"],
        answer: 0,
        wrongHints: [null, "Dat is 0,33...", "Dat is 0,25.", "Dat is 0,2."],
      },
      {
        q: "**1/2 × 1/2** is?",
        options: ["1/4", "1", "2/2", "1/2"],
        answer: 0,
        wrongHints: [null, "Veel te groot.", "Niet vermenigvuldigen, dat is een dubbelvorm van 1.", "Tussenstap."],
        uitlegPad: {
          stappen: [
            { titel: "Breuk × breuk", tekst: "Tellers vermenigvuldigen, noemers vermenigvuldigen. 1/2 × 1/2 = (1×1)/(2×2) = 1/4." },
          ],
          woorden: [{ woord: "vermenigvuldigen breuken", uitleg: "Teller × teller / noemer × noemer." }],
          theorie: "Cito-truc: bij breuk×breuk wordt het altijd KLEINER (omdat je een deel pakt van een deel).",
          voorbeelden: [{ type: "stap", tekst: "1/3 × 1/2 = 1/6. 'helft van een derde'." }],
          basiskennis: [{ onderwerp: "Visueel", uitleg: "Een halve pizza, daarvan de helft = een kwart pizza." }],
          niveaus: {
            basis: "1/4. A.",
            simpeler: "1×1/2×2 = 1/4. = A.",
            nogSimpeler: "1/4 = A.",
          },
        },
      },
      {
        q: "Wat is **5/6 − 1/3**?",
        options: ["1/2", "4/3", "5/9", "1/3"],
        answer: 0,
        wrongHints: [null, "Niet — eerst gelijknamig.", "Onmogelijk groter dan beide.", "Komt niet uit."],
      },
      {
        q: "**0,2 × 100** is?",
        options: ["20", "200", "0,02", "2"],
        answer: 0,
        wrongHints: [null, "10× te groot.", "Komma verkeerd.", "10× te klein."],
      },
    ],
  },

  // ─── Stap 2: Procenten & verhoudingen ──────────────────
  {
    title: "Procenten & verhoudingen — ~20 min",
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
        wrongHints: [null, "Verkeerde aftrek.", "Dat is het kortingsbedrag, niet de eindprijs.", "Korting verlaagt prijs."],
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
        wrongHints: [null, "Te weinig.", "Dat is 50%.", "Niet — wel onder 200."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: 10% eerst", tekst: "Begin altijd met 10%. 10% van 200 = 200 ÷ 10 = **20**." },
            { titel: "Stap 2: keer 4 voor 40%", tekst: "40% = 4 × 10%. Dus: 4 × 20 = **80**." },
            { titel: "Of: % delen door 100", tekst: "Formule: (% ÷ 100) × getal. (40 ÷ 100) × 200 = 0,4 × 200 = 80." },
          ],
          woorden: [
            { woord: "procent (%)", uitleg: "Per honderd. 40% = 40 van 100." },
            { woord: "10%-truc", uitleg: "10% bereken je door te delen door 10. Dat is makkelijk." },
          ],
          theorie: "Twee manieren voor X% van Y: (1) bereken 10% van Y (Y ÷ 10), vermenigvuldig dan met (X ÷ 10). (2) Formule (X ÷ 100) × Y.",
          voorbeelden: [
            { type: "stap", tekst: "20% van 50: 10% = 5. Dus 20% = 10." },
            { type: "stap", tekst: "60% van 80: 10% = 8. Dus 60% = 6 × 8 = 48." },
          ],
          basiskennis: [{ onderwerp: "10%-truc", uitleg: "Verdeel het percentage in stukjes van 10%. Veel makkelijker dan met komma's." }],
          niveaus: {
            basis: "% van getal = (% ÷ 100) × getal. Of: 10% × aantal-tientjes.",
            simpeler: "10% van 200 = 20. 40% = 4 × 20 = 80.",
            nogSimpeler: "10% = 20, dus 40% = 80.",
          },
        },
      },
      {
        q: "In een klas van 30: **20% is ziek**. Hoeveel kinderen?",
        options: ["6", "5", "10", "15"],
        answer: 0,
        wrongHints: [null, "Net te weinig.", "Dat zou 33% zijn.", "Dat is 50%."],
      },
      {
        q: "Een schoen van **€60 wordt verhoogd met 10%**. Nieuwe prijs?",
        options: ["€66", "€70", "€54", "€600"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Dat zou korting zijn.", "Veel te veel — komma vergeten?"],
        uitlegPad: {
          stappen: [
            { titel: "Bereken verhoging", tekst: "10% van €60 = (10/100) × 60 = €6 verhoging." },
            { titel: "Tel op", tekst: "Nieuwe prijs = €60 + €6 = €66." },
          ],
          woorden: [{ woord: "verhoging", uitleg: "Toename in prijs — optellen bij basisprijs." }],
          theorie: "Truc 10% snel: deel door 10. €60 ÷ 10 = €6. Toepassen op verhoging of korting.",
          voorbeelden: [{ type: "stap", tekst: "10% van €80 = €8. Verhoogd: €80+€8=€88. Korting: €80−€8=€72." }],
          basiskennis: [{ onderwerp: "Verhoging vs korting", uitleg: "Verhoging = + (groter). Korting = − (kleiner). Beide gebruiken hetzelfde % maar tegenovergesteld." }],
          niveaus: {
            basis: "€66 (€60 + 10%). A.",
            simpeler: "10% van €60 = €6. €60 + €6 = €66. = A.",
            nogSimpeler: "€66 = A.",
          },
        },
      },
      {
        q: "Verhouding **rood : blauw = 2:3**. 15 blauwe knikkers — hoeveel rode?",
        options: ["10", "5", "15", "6"],
        answer: 0,
        wrongHints: [null, "Dat is 1 deel.", "Dezelfde aantal als blauw — niet.", "Verkeerd berekend."],
      },
      {
        q: "**Wat is 50% van 1/2**?",
        options: ["1/4", "1/2", "1", "0"],
        answer: 0,
        wrongHints: [null, "Niet halveert.", "Dat is dubbel.", "Niet nul."],
        uitlegPad: {
          stappen: [
            { titel: "50% = de helft", tekst: "50% betekent half. Dus 50% van 1/2 = de helft van 1/2." },
            { titel: "Halveer breuk", tekst: "Helft van 1/2 = 1/4 (verdubbel de noemer: 2 → 4)." },
          ],
          woorden: [{ woord: "halveren breuk", uitleg: "Teller × 1 en noemer × 2 (of teller ÷ 2 als even)." }],
          theorie: "Cito-truc: % en breuken samen — schrijf % als breuk. 50% = 1/2. Dan × of × elkaar.",
          voorbeelden: [{ type: "stap", tekst: "50% van 1/2 = 1/2 × 1/2 = 1/4. 25% van 1/2 = 1/4 × 1/2 = 1/8." }],
          basiskennis: [{ onderwerp: "Visualiseer", uitleg: "Pizza in 2 = halve. Half daarvan = kwart. Klopt." }],
          niveaus: {
            basis: "1/4 (helft van helft). A.",
            simpeler: "50% = 1/2. 1/2 × 1/2 = 1/4. = A.",
            nogSimpeler: "1/4 = A.",
          },
        },
      },
      {
        q: "Een artikel van **€120 is in de uitverkoop voor €90**. **% korting**?",
        options: ["25%", "30%", "75%", "33%"],
        answer: 0,
        wrongHints: [null, "Verkeerde berekening.", "Niet — dat is wat je betaalt.", "Iets te veel."],
      },
      {
        q: "Verhouding **2:5** opnieuw uitdrukken als breuk **van de kleinste in totaal**?",
        options: ["2/7", "2/5", "5/7", "1/3"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 2 op 5, niet totaal 7.", "Andere deel.", "Verkeerd."],
      },
      {
        q: "**80% van 50** is?",
        options: ["40", "30", "20", "100"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Te veel."],
      },
      {
        q: "**150% van 20** is?",
        options: ["30", "20", "15", "150"],
        answer: 0,
        wrongHints: [null, "Dat is 100%.", "Te weinig.", "Niet."],
      },
      {
        q: "Verhouding **jongens:meisjes = 3:2**. Totaal 25 leerlingen. Aantal jongens?",
        options: ["15", "10", "12", "5"],
        answer: 0,
        wrongHints: [null, "Dat is meisjes.", "Verkeerd.", "1 deel."],
        uitlegPad: {
          stappen: [
            { titel: "Tel delen op", tekst: "3 + 2 = 5 delen totaal." },
            { titel: "Bepaal grootte per deel", tekst: "25 leerlingen ÷ 5 delen = 5 leerlingen per deel." },
            { titel: "Bereken jongens", tekst: "Jongens = 3 delen × 5 = 15." },
          ],
          woorden: [{ woord: "verhouding 3:2", uitleg: "Voor elke 3 jongens zijn er 2 meisjes. Totale delen = 3+2 = 5." }],
          theorie: "Verhouding-formule: (totaal ÷ som-delen) × deel-jij-wilt = antwoord. Werkt voor alle verhouding-vragen.",
          voorbeelden: [{ type: "stap", tekst: "Verhouding 1:4 totaal 20 → 20÷5 = 4 per deel. 1 deel = 4, 4 delen = 16." }],
          basiskennis: [{ onderwerp: "Check", uitleg: "15 jongens + 10 meisjes = 25 ✓. Verhouding 15:10 = 3:2 ✓." }],
          niveaus: {
            basis: "15 (3×5). A.",
            simpeler: "3+2=5 delen, 25÷5=5 per deel, jongens 3×5=15. = A.",
            nogSimpeler: "15 = A.",
          },
        },
      },
      {
        q: "Een product was **€50, nu €30**. **% korting**?",
        options: ["40%", "20%", "60%", "30%"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Dat is wat je betaalt %."],
      },
      {
        q: "**10% van 350** is?",
        options: ["35", "30", "40", "350"],
        answer: 0,
        wrongHints: [null, "Niet zo.", "Niet zo.", "100%."],
      },
      {
        q: "Verhouding **1:3** in **percentages**?",
        options: ["25% : 75%", "33% : 67%", "10% : 90%", "50% : 50%"],
        answer: 0,
        wrongHints: [null, "Niet juist.", "Niet — 1:3.", "Niet."],
      },
      {
        q: "BTW **21% op €100** prijs zonder BTW. Eindprijs?",
        options: ["€121", "€79", "€100", "€21"],
        answer: 0,
        wrongHints: [null, "Dat is min BTW.", "Zonder BTW.", "Alleen BTW-bedrag."],
        uitlegPad: {
          stappen: [
            { titel: "BTW berekenen", tekst: "21% van €100 = 21/100 × 100 = €21." },
            { titel: "Optellen bij prijs", tekst: "Eindprijs = €100 (basis) + €21 (BTW) = €121." },
          ],
          woorden: [
            { woord: "BTW", uitleg: "Belasting Toegevoegde Waarde. Overheidsheffing op verkoop (21% standaard in NL, 9% laag tarief)." },
            { woord: "eindprijs", uitleg: "Wat de klant betaalt: basisprijs + BTW." },
          ],
          theorie: "BTW-formule: eindprijs = basisprijs × (1 + BTW%/100). Voor 21%: × 1,21.",
          voorbeelden: [{ type: "stap", tekst: "Voor €50: 50 × 1,21 = €60,50." }],
          basiskennis: [{ onderwerp: "Soorten BTW", uitleg: "21% = meeste goederen. 9% = voedsel, boeken, kapper. 0% = export." }],
          niveaus: {
            basis: "€121. A.",
            simpeler: "21% van €100 = €21. €100 + €21 = €121. = A.",
            nogSimpeler: "€121 = A.",
          },
        },
      },
      {
        q: "**50% van 80** is?",
        options: ["40", "50", "80", "30"],
        answer: 0,
        wrongHints: [null, "Niet — 50% is de helft van het andere getal.", "Geheel.", "Niet de helft."],
      },
      {
        q: "Een jas kost **€80** en gaat **25% in de uitverkoop**. Wat is de **korting in euro's**?",
        options: ["€20", "€25", "€60", "€100"],
        answer: 0,
        wrongHints: [null, "Niet — 25% van €80, niet €25.", "Dat is de prijs na korting, geen korting.", "Verhoogd."],
        uitlegPad: {
          stappen: [
            { titel: "25% = 1/4", tekst: "25% betekent 25 van 100. Dat is hetzelfde als 1/4 of de helft van de helft." },
            { titel: "Stap 1", tekst: "25% van €80 = €80 ÷ 4 = €20." },
            { titel: "Stap 2 (nieuwe prijs)", tekst: "Nieuwe prijs = €80 − €20 = €60. Maar de vraag is alleen de KORTING: €20." },
          ],
          woorden: [{ woord: "uitverkoop", uitleg: "Goedkoper verkocht dan oorspronkelijk." }],
          theorie: "Cito-truc: 25% = 1/4. 50% = 1/2. 10% = 1/10. Deze breuken maken procent-rekenen sneller.",
          voorbeelden: [
            { type: "stap", tekst: "10% van €60 = €6 (gewoon door 10)." },
            { type: "stap", tekst: "75% van €80 = 3 × €20 = €60." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Eerst 10% berekenen, dan vermenigvuldigen of optellen." }],
          niveaus: {
            basis: "€20 korting. A.",
            simpeler: "25% = 1/4. €80 ÷ 4 = €20. = A.",
            nogSimpeler: "Kwart van €80 = €20 = A.",
          },
        },
      },
      {
        q: "**Verhouding** appels : peren = **3 : 2**. Bij **12 appels**: hoeveel **peren**?",
        options: ["8", "6", "4", "10"],
        answer: 0,
        wrongHints: [null, "12 ÷ 2 — let op verhouding 3:2.", "12 ÷ 3 = 4 = aantal sets, daarna × 2.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Verhouding-stappen", tekst: "Verhouding 3:2 betekent: voor elke 3 appels horen 2 peren. Zoek hoeveel sets van 3 er in 12 zitten." },
            { titel: "Reken", tekst: "12 ÷ 3 = 4 sets. Elke set heeft 2 peren → 4 × 2 = 8 peren." },
          ],
          woorden: [{ woord: "verhouding", uitleg: "Hoe groot iets is in vergelijking met iets anders, in 'X : Y' notatie." }],
          theorie: "Cito-truc: 'X delen door eerste getal, keer tweede getal' werkt altijd bij dit type vraag.",
          voorbeelden: [
            { type: "stap", tekst: "Verhouding 1:4 — bij 5 → 5 × 4 = 20." },
            { type: "stap", tekst: "Verhouding 5:2 — bij 10 → 10 ÷ 5 × 2 = 4." },
          ],
          basiskennis: [{ onderwerp: "Volgorde", uitleg: "Eerst delen door het getal aan jouw kant, dan keer het andere." }],
          niveaus: {
            basis: "8 peren. A.",
            simpeler: "12 ÷ 3 = 4 sets. 4 × 2 = 8 peren. = A.",
            nogSimpeler: "4 sets × 2 = 8 = A.",
          },
        },
      },
      {
        q: "In een klas zitten **24 kinderen**. **3/8 is jongen**. Hoeveel **jongens**?",
        options: ["9", "8", "15", "12"],
        answer: 0,
        wrongHints: [null, "Niet — 3/8, niet 1/3.", "Te veel — meer dan helft.", "Helft, dat klopt niet."],
      },
      {
        q: "Een fiets van **€200** wordt **15% duurder**. Wat is de **nieuwe prijs**?",
        options: ["€230", "€215", "€185", "€300"],
        answer: 0,
        wrongHints: [null, "€15, niet 15%.", "Goedkoper, niet duurder.", "Te veel."],
      },
      {
        q: "**Verhouding** suiker : meel = **1 : 4**. Bij **500 g meel**: hoeveel **suiker**?",
        options: ["125 g", "100 g", "250 g", "500 g"],
        answer: 0,
        wrongHints: [null, "Te weinig — niet 100, maar 500÷4.", "Te veel — meer dan helft.", "Te veel."],
      },
      {
        q: "**10% van 250** is?",
        options: ["25", "10", "100", "2,5"],
        answer: 0,
        wrongHints: [null, "Dat is alleen de %.", "Te veel — 250 ÷ 10 = 25.", "Komma verkeerd geplaatst."],
        uitlegPad: {
          stappen: [
            { titel: "10% = / 10", tekst: "10% is altijd 'gedeeld door 10'. 250 ÷ 10 = 25." },
            { titel: "Cito-truc", tekst: "Begin altijd met 10% berekenen. Dan vermenigvuldig of optellen voor andere percentages: 20% = 2×10%, 30% = 3×10%, 5% = 10%/2." },
          ],
          woorden: [{ woord: "%", uitleg: "Per honderd. 10% = 10 per 100 = 1/10." }],
          theorie: "10% van iets vinden: schuif de komma 1 plek naar links. 250 → 25,0. Bij 1% komma 2 plekken.",
          voorbeelden: [
            { type: "stap", tekst: "10% van 80 = 8." },
            { type: "stap", tekst: "20% van 80 = 8 × 2 = 16." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "1% = / 100. 10% = / 10. 50% = / 2. 25% = / 4. 75% = 3/4." }],
          niveaus: {
            basis: "25. A.",
            simpeler: "250 / 10 = 25. = A.",
            nogSimpeler: "Komma 1 links: 25 = A.",
          },
        },
      },
      {
        q: "**Verhouding melk : water = 2 : 5**. Bij **15 L water**: hoeveel **melk**?",
        options: ["6 L", "3 L", "10 L", "30 L"],
        answer: 0,
        wrongHints: [null, "Te weinig — reken: 15 ÷ 5 × 2.", "Te veel — meer dan water.", "Veel te veel."],
      },
      {
        q: "Een **boek** kost €15, in de zomer **5% goedkoper**. Wat is de **korting**?",
        options: ["€0,75", "€5", "€10", "€1"],
        answer: 0,
        wrongHints: [null, "Dat is alleen het %.", "Te veel — dat is zonder %.", "Bijna goed — 5% van €15 = €0,75."],
      },
      {
        q: "Wat is **80% van 50**?",
        options: ["40", "50", "10", "30"],
        answer: 0,
        wrongHints: [null, "Geheel.", "Te weinig.", "Niet — reken 50 × 0,8."],
        uitlegPad: {
          stappen: [
            { titel: "80% = 0,8", tekst: "Procent naar decimaal: schuif komma 2 plekken links. 80% = 0,80 = 0,8." },
            { titel: "Reken", tekst: "0,8 × 50 = 40. OF: 10% van 50 = 5. 8 × 5 = 40." },
          ],
          woorden: [{ woord: "%", uitleg: "10% = 0,1 (komma 2 plekken links). 80% = 0,8." }],
          theorie: "Cito-truc: 80% = 8/10. Dus 8/10 van 50 = (50/10) × 8 = 5 × 8 = 40.",
          voorbeelden: [{ type: "stap", tekst: "25% van 80 = 0,25 × 80 = 20." }],
          basiskennis: [{ onderwerp: "Snel uit het hoofd", uitleg: "50% = helft. 10% = /10. Bouw andere % daaruit op." }],
          niveaus: {
            basis: "40. A.",
            simpeler: "10% van 50 = 5. 8 × 5 = 40. = A.",
            nogSimpeler: "0,8 × 50 = 40 = A.",
          },
        },
      },
      {
        q: "**Wat is 1% van €500**?",
        options: ["€5", "€50", "€10", "€0,50"],
        answer: 0,
        wrongHints: [null, "Dat is 10%.", "Niet zomaar deel 100.", "Te weinig."],
      },
      {
        q: "Een **broek** van **€40** is **15% afgeprijsd**. Wat is de **nieuwe prijs**?",
        options: ["€34", "€36", "€25", "€46"],
        answer: 0,
        wrongHints: [null, "Bijna — 15% van €40 = €6, dus €40-€6=€34, niet €36.", "Te veel korting.", "Verhoogd, niet afgeprijsd."],
        uitlegPad: {
          stappen: [
            { titel: "2-stappen", tekst: "Stap 1: 15% van €40 = €6. Stap 2: €40 − €6 = €34." },
            { titel: "Cito-shortcut", tekst: "85% × €40 = €34 (omdat 100% − 15% = 85%)." },
          ],
          woorden: [{ woord: "afgeprijsd", uitleg: "Goedkoper gemaakt — korting eraf." }],
          theorie: "Cito-truc bij korting: óf bedrag berekenen + aftrekken, óf direct nieuwe prijs (100−%) × oud.",
          voorbeelden: [{ type: "stap", tekst: "20% korting op €50 = €50 × 0,80 = €40." }],
          basiskennis: [{ onderwerp: "Verhoging", uitleg: "Verhoging 15%: (100+15)% = 115% × oud bedrag." }],
          niveaus: {
            basis: "€34. A.",
            simpeler: "15% van €40 = €6. €40 − €6 = €34. = A.",
            nogSimpeler: "€34 = A.",
          },
        },
      },
      {
        q: "**Verhouding 5:3** appels:peren. Bij **40 stuks totaal**: hoeveel **appels**?",
        options: ["25", "15", "20", "10"],
        answer: 0,
        wrongHints: [null, "Dat is het aantal peren.", "Helft — verhouding is niet gelijk.", "Te weinig."],
      },
      {
        q: "**3% rente op €1000** per jaar. Hoeveel **rente**?",
        options: ["€30", "€3", "€300", "€100"],
        answer: 0,
        wrongHints: [null, "Te weinig — 3%, niet 0,3%.", "Te veel — dat is 30%.", "Niet."],
      },
      {
        q: "**Recept** voor 4 personen: 200 g pasta. Voor **6 personen**?",
        options: ["300 g", "250 g", "400 g", "150 g"],
        answer: 0,
        wrongHints: [null, "Te weinig — bereken 200/4 × 6.", "Veel te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Per persoon eerst", tekst: "200 g / 4 personen = 50 g per persoon." },
            { titel: "Voor 6 personen", tekst: "50 g × 6 = 300 g pasta." },
          ],
          woorden: [{ woord: "evenredig", uitleg: "Meer personen = meer voedsel, in dezelfde verhouding." }],
          theorie: "Cito-truc bij recept-opschalen: bereken eerst per persoon (basis), dan vermenigvuldig.",
          voorbeelden: [{ type: "stap", tekst: "Recept 4 pers = 8 eieren. Per pers = 2. Voor 6 pers = 12 eieren." }],
          basiskennis: [{ onderwerp: "Direct evenredig", uitleg: "Bij dit type vraag: ratio blijft gelijk. 2× zoveel personen = 2× zoveel materiaal." }],
          niveaus: {
            basis: "300 g. A.",
            simpeler: "Per pers 50 g. 6 × 50 = 300. = A.",
            nogSimpeler: "50 × 6 = 300 = A.",
          },
        },
      },
      {
        q: "**150% van 40** is?",
        options: ["60", "40", "20", "150"],
        answer: 0,
        wrongHints: [null, "Dat is 100%.", "Dat is 50%.", "Niet — % maal getal."],
        uitlegPad: {
          stappen: [
            { titel: "150% = 1,5", tekst: "150% betekent 1,5× het oorspronkelijke. 1,5 × 40 = 60." },
            { titel: "Cito-truc", tekst: "100% van 40 = 40. 50% extra = 20. Samen 60." },
          ],
          woorden: [{ woord: "150%", uitleg: "Anderhalf keer iets." }],
          theorie: "% > 100% betekent meer dan het origineel. 200% = dubbel. 150% = 1,5×.",
          voorbeelden: [{ type: "stap", tekst: "200% van 50 = 100. 175% van 20 = 35." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij verhogingen > 100%: pak hele + extra deel apart." }],
          niveaus: {
            basis: "60. A.",
            simpeler: "40 + helft (20) = 60. = A.",
            nogSimpeler: "1,5 × 40 = 60 = A.",
          },
        },
      },
      {
        q: "**Hoeveel is 75% van 200**?",
        options: ["150", "125", "75", "100"],
        answer: 0,
        wrongHints: [null, "Te weinig — bereken 200 × 0,75.", "Niet.", "Helft, dat is 50%."],
      },
      {
        q: "**Een prijs ging van €40 naar €50**. Hoeveel **procent stijging**?",
        options: ["25%", "10%", "20%", "50%"],
        answer: 0,
        wrongHints: [null, "Niet — dat is €10 verschil.", "Bereken (10/40)×100=25.", "Te veel."],
      },
      {
        q: "**Verhouding 2:7** = ___ totaal-delen?",
        options: ["9", "5", "14", "2"],
        answer: 0,
        wrongHints: [null, "Niet — som van delen.", "Niet — vermenigvuldigen geen som.", "Slechts eerste."],
      },
    ],
  },

  // ─── Stap 3: Meten & schaal ──────────────────
  {
    title: "Meten & schaal — ~20 min",
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
        wrongHints: [null, "Te weinig — 12 cm is een gum.", "Veel te veel.", "Te veel — komma 1 plek te ver."],
      },
      {
        q: "Een doos is **10 cm × 10 cm × 10 cm**. **Inhoud** (volume)?",
        options: ["1000 cm³", "100 cm³", "30 cm³", "300 cm³"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is oppervlakte 1 zijde.", "Dat is omtrek-achtig (10+10+10).", "Niet."],
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
        wrongHints: [null, "Dat is oppervlakte, niet omtrek.", "Halve omtrek.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Hek = omtrek (rondom)", tekst: "Een hek loopt RONDOM de tuin. Je telt alle 4 de zijdes op. Dat heet de **omtrek**." },
            { titel: "Stap 1: tel zijdes", tekst: "De tuin heeft 2 zijdes van 5 m (boven + onder) en 2 zijdes van 8 m (links + rechts). Dus: 5 + 5 + 8 + 8." },
            { titel: "Stap 2: tel op", tekst: "5 + 5 = 10. 8 + 8 = 16. 10 + 16 = **26 m**. Of korter: 2 × (5 + 8) = 2 × 13 = 26 m." },
          ],
          woorden: [
            { woord: "omtrek", uitleg: "Lengte rondom een vorm. Voor rechthoek: 2 × (lengte + breedte)." },
            { woord: "oppervlakte", uitleg: "Iets ANDERS: lengte × breedte. Hier: 5 × 8 = 40 m². Meet je in m²." },
          ],
          theorie: "Cito-truc: lees goed of er om OMTREK of OPPERVLAKTE wordt gevraagd. Hek = rondom = omtrek. Tegels op vloer = bedekking = oppervlakte.",
          voorbeelden: [
            { type: "stap", tekst: "Rechthoek 3 × 4: omtrek = 2 × (3+4) = 14. Oppervlakte = 3 × 4 = 12." },
            { type: "stap", tekst: "Vierkant zijde 6: omtrek = 4 × 6 = 24. Oppervlakte = 6 × 6 = 36." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Omtrek = m (rondrennen-lengte). Oppervlakte = m² (vakje-tellen)." }],
          niveaus: {
            basis: "Omtrek rechthoek = 2 × (lengte + breedte).",
            simpeler: "5+5+8+8 = 26 m hek nodig.",
            nogSimpeler: "Rondom = optellen alles.",
          },
        },
      },
      {
        q: "**3,5 kg** in **gram**?",
        options: ["3500 g", "350 g", "35 g", "35.000 g"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te weinig.", "Te veel."],
      },
      {
        q: "Schaal **1:1.000.000** (atlas). **3 cm** op kaart = ?",
        options: ["30 km", "3 km", "300 m", "300 km"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Veel te weinig.", "Te veel."],
      },
      {
        q: "Een driehoek heeft **basis 6 cm** en **hoogte 4 cm**. Oppervlakte?",
        options: ["12 cm²", "24 cm²", "10 cm²", "6 cm²"],
        answer: 0,
        wrongHints: [null, "Vergeten ½ — dat is rechthoek-opp.", "Optellen werkt niet.", "Halve hoogte."],
      },
      {
        q: "Hoeveel **mL** in een **halve liter**?",
        options: ["500 mL", "50 mL", "5 mL", "5000 mL"],
        answer: 0,
        wrongHints: [null, "Veel te weinig.", "Veel te weinig.", "Te veel."],
      },
      {
        q: "Een vierkant heeft **omtrek 24 cm**. Wat is **zijde**?",
        options: ["6 cm", "12 cm", "24 cm", "4 cm"],
        answer: 0,
        wrongHints: [null, "Niet — dat is halve omtrek.", "Hele omtrek.", "Te weinig."],
      },
      {
        q: "**0,5 ton** in **kg**?",
        options: ["500 kg", "50 kg", "5000 kg", "5 kg"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Veel te weinig."],
      },
      {
        q: "**1500 mm** in **m**?",
        options: ["1,5 m", "15 m", "0,15 m", "150 m"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te weinig.", "Te veel."],
      },
      {
        q: "Een **kubus** met zijde **5 cm** — volume?",
        options: ["125 cm³", "25 cm³", "15 cm³", "75 cm³"],
        answer: 0,
        wrongHints: [null, "Dat is opp 1 zijde.", "Optelsom — niet.", "Verkeerd berekend."],
      },
      {
        q: "**Omtrek cirkel** met diameter 10 cm? *(π ≈ 3,14)*",
        options: ["31,4 cm", "78,5 cm", "10 cm", "100 cm"],
        answer: 0,
        wrongHints: [null, "Dat is opp niet omtrek.", "Diameter zelf.", "Te veel."],
      },
      {
        q: "**2,5 kg** in **gram**?",
        options: ["2500 g", "250 g", "25 g", "25.000 g"],
        answer: 0,
        wrongHints: [null, "10× te weinig — kg → g is × 1000.", "100× te weinig.", "10× te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Kg → g = × 1000", tekst: "1 kg = 1000 g. Voor 2,5 kg: 2,5 × 1000." },
            { titel: "Komma 3 plekken", tekst: "× 1000 = komma 3 plekken naar rechts: 2,5 → 25 → 250 → 2500." },
          ],
          woorden: [{ woord: "milli / kilo", uitleg: "Milli = duizendste. Kilo = duizend. Tussen kg en g zit dus factor 1000." }],
          theorie: "Cito-truc: tussen kg en g zit 3 stappen op het trapje. Komma 3 plekken verschuiven.",
          voorbeelden: [
            { type: "stap", tekst: "0,5 kg = 500 g (komma 3 rechts: 0,500)." },
            { type: "stap", tekst: "1500 g = 1,5 kg (komma 3 links)." },
          ],
          basiskennis: [{ onderwerp: "Trapje", uitleg: "kg → hg → dag → g → dg → cg → mg. Tussen kg en g: ×1000." }],
          niveaus: {
            basis: "2500 g. A.",
            simpeler: "2,5 × 1000 = 2500. = A.",
            nogSimpeler: "2500 = A.",
          },
        },
      },
      {
        q: "Op een **kaart 1:50.000** is iets **2 cm**. Werkelijk?",
        options: ["1 km", "100 m", "5 km", "20 km"],
        answer: 0,
        wrongHints: [null, "Bijna goed — let op cm naar m of km.", "Te veel.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Schaal-vergelijking", tekst: "Schaal 1:50.000 betekent: 1 cm op kaart = 50.000 cm werkelijk." },
            { titel: "Stap 1", tekst: "2 cm op kaart = 2 × 50.000 = 100.000 cm werkelijk." },
            { titel: "Stap 2 — naar km", tekst: "100.000 cm = 1000 m = 1 km. (cm → m: ÷100, m → km: ÷1000)" },
          ],
          woorden: [{ woord: "schaal", uitleg: "Verhouding tussen kaartmaat en werkelijke maat." }],
          theorie: "Cito-truc: lees schaal als 'op kaart : in werkelijkheid'. Eerst × schaal, dan omrekenen naar gevraagde eenheid (m of km).",
          voorbeelden: [{ type: "stap", tekst: "Schaal 1:1000, 5 cm op kaart = 5 × 1000 = 5000 cm = 50 m werkelijk." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vermenigvuldig kaartmaat × schaal → cm werkelijk → omrekenen naar m of km." }],
          niveaus: {
            basis: "1 km. A.",
            simpeler: "2 cm × 50.000 = 100.000 cm = 1 km. = A.",
            nogSimpeler: "100.000 cm = 1 km = A.",
          },
        },
      },
      {
        q: "Een **rechthoek** is **8 cm lang** en **5 cm breed**. **Oppervlakte**?",
        options: ["40 cm²", "13 cm²", "26 cm²", "45 cm²"],
        answer: 0,
        wrongHints: [null, "Optellen, dat is geen oppervlakte.", "Omtrek, geen oppervlakte.", "Niet."],
      },
      {
        q: "**3 liter** in **milliliter**?",
        options: ["3000 mL", "300 mL", "30 mL", "30.000 mL"],
        answer: 0,
        wrongHints: [null, "10× te weinig.", "100× te weinig.", "10× te veel."],
      },
      {
        q: "Een **vierkant** heeft een **omtrek van 24 cm**. Hoe lang is **één zijde**?",
        options: ["6 cm", "12 cm", "4 cm", "8 cm"],
        answer: 0,
        wrongHints: [null, "Helft — maar vierkant heeft 4 zijden, geen 2.", "Niet — vierkant heeft 4 zijden.", "Niet — controleer: 4 × 8 = 32, niet 24."],
      },
      {
        q: "**75 cL** is hoeveel **liter**?",
        options: ["0,75 L", "7,5 L", "0,075 L", "75 L"],
        answer: 0,
        wrongHints: [null, "10× te veel.", "10× te weinig.", "Niet — cL is honderdste liter."],
        uitlegPad: {
          stappen: [
            { titel: "cL = centiliter", tekst: "Centi = honderdste. 100 cL = 1 L." },
            { titel: "Reken", tekst: "75 cL ÷ 100 = 0,75 L. Komma 2 plekken naar links." },
          ],
          woorden: [{ woord: "cL / dL / mL", uitleg: "1 L = 10 dL = 100 cL = 1000 mL." }],
          theorie: "Cito-truc bij inhoud: leer 'wijnfles'-getal: 75 cL = 0,75 L = inhoud van een normale wijnfles.",
          voorbeelden: [{ type: "stap", tekst: "1500 mL = 1,5 L. 250 mL = 0,25 L." }],
          basiskennis: [{ onderwerp: "Trap", uitleg: "L → dL → cL → mL met telkens × 10. Komma per stap." }],
          niveaus: {
            basis: "0,75 L. A.",
            simpeler: "75 / 100 = 0,75. = A.",
            nogSimpeler: "0,75 L = A.",
          },
        },
      },
      {
        q: "Hoeveel **mm** is **3,5 cm**?",
        options: ["35 mm", "350 mm", "3,5 mm", "0,35 mm"],
        answer: 0,
        wrongHints: [null, "10× te veel.", "Niet — cm zijn al groter dan mm.", "100× te weinig."],
      },
      {
        q: "Een **kamer** is **5 m × 4 m**. Wat is de **oppervlakte**?",
        options: ["20 m²", "9 m²", "18 m²", "45 m²"],
        answer: 0,
        wrongHints: [null, "Optelling, niet vermenigvuldiging.", "Omtrek halveerd.", "Niet."],
      },
      {
        q: "**45 minuten** is hoeveel **uur** (in decimaal)?",
        options: ["0,75 uur", "0,45 uur", "1,45 uur", "4,5 uur"],
        answer: 0,
        wrongHints: [null, "Niet — direct delen door 100 werkt niet bij tijd (60 min/uur).", "Veel te veel — minder dan 1 uur.", "Veel te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Tijd ≠ getal", tekst: "Anders dan bij meters of euros: 60 minuten = 1 uur, niet 100. Dus 45 min ≠ 0,45 uur." },
            { titel: "Reken", tekst: "45 / 60 = 0,75. Of: 15 min = 1/4 uur = 0,25. 45 min = 3 × 0,25 = 0,75 uur." },
          ],
          woorden: [{ woord: "kwartier", uitleg: "15 minuten = 1/4 uur = 0,25 uur." }],
          theorie: "Cito-truc tijd-decimaal: 15 min = 0,25 uur. 30 min = 0,5 uur. 45 min = 0,75 uur.",
          voorbeelden: [
            { type: "stap", tekst: "1 uur en 30 min = 1,5 uur." },
            { type: "stap", tekst: "2 uur en 15 min = 2,25 uur." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Schrijf in kwartieren: 1, 2, 3 of 4. 1 kwartier = 0,25 uur." }],
          niveaus: {
            basis: "0,75 uur. A.",
            simpeler: "45 / 60 = 0,75. Of 3 kwartier = 0,75. = A.",
            nogSimpeler: "3 × 0,25 = 0,75 = A.",
          },
        },
      },
      {
        q: "**Omtrek** van een rechthoek (8 m × 3 m)?",
        options: ["22 m", "11 m", "24 m", "16 m"],
        answer: 0,
        wrongHints: [null, "Niet — 2 × (8+3) = 22.", "Dat is de oppervlakte.", "Dat is 2 × 8."],
      },
      {
        q: "**Volume** van een doos **3 cm × 4 cm × 5 cm**?",
        options: ["60 cm³", "12 cm³", "15 cm³", "47 cm³"],
        answer: 0,
        wrongHints: [null, "Maar 2 zijden vermenigvuldigd.", "Maar 2 zijden vermenigvuldigd.", "Optellen, geen vermenigvuldigen."],
        uitlegPad: {
          stappen: [
            { titel: "Volume = l × b × h", tekst: "Bij een doos vermenigvuldig je lengte × breedte × hoogte. Eenheid: cm³ (kubieke centimeter)." },
            { titel: "Reken", tekst: "3 × 4 × 5 = 60 cm³." },
          ],
          woorden: [{ woord: "cm³", uitleg: "Kubieke centimeter — 1 cm × 1 cm × 1 cm doosje." }],
          theorie: "Cito-truc volume: doe het in stappen — eerst 2 zijden (12), dan keer 3e (12×5=60).",
          voorbeelden: [{ type: "stap", tekst: "Kubus 2×2×2 = 8 cm³. Kubus 4×4×4 = 64 cm³." }],
          basiskennis: [{ onderwerp: "Inhoud", uitleg: "1 cm³ = 1 mL. 1 dm³ = 1 L. 1000 cm³ = 1 L." }],
          niveaus: {
            basis: "60 cm³. A.",
            simpeler: "3 × 4 × 5 = 60. = A.",
            nogSimpeler: "60 = A.",
          },
        },
      },
      {
        q: "Hoeveel **graden** zit in een **rechte hoek**?",
        options: ["90°", "180°", "45°", "360°"],
        answer: 0,
        wrongHints: [null, "Dat is een gestrekte hoek.", "Halve rechte.", "Hele cirkel."],
      },
      {
        q: "**1 minuut** is hoeveel **seconden**?",
        options: ["60", "100", "10", "1"],
        answer: 0,
        wrongHints: [null, "Tijd ≠ decimaal.", "Niet.", "Niet."],
      },
      {
        q: "Een **driehoek** heeft hoeken die samen **___** graden zijn.",
        options: ["180°", "90°", "360°", "270°"],
        answer: 0,
        wrongHints: [null, "Dat is één rechte hoek.", "Vierhoek.", "Niet."],
      },
      {
        q: "**0,5 km** is hoeveel **m**?",
        options: ["500 m", "50 m", "5 m", "5000 m"],
        answer: 0,
        wrongHints: [null, "10× te weinig.", "100× te weinig.", "10× te veel."],
      },
      {
        q: "**Vierkant** met oppervlakte **64 cm²**. **Zijde**?",
        options: ["8 cm", "16 cm", "4 cm", "64 cm"],
        answer: 0,
        wrongHints: [null, "Niet — wortel van 64 = 8.", "Niet — controleer 4×4=16.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Vierkant opp = z × z", tekst: "Bij vierkant: oppervlakte = zijde × zijde. Dus zijde = wortel van opp." },
            { titel: "Reken", tekst: "√64 = 8 (want 8 × 8 = 64)." },
          ],
          woorden: [{ woord: "wortel (√)", uitleg: "Inverse van vermenigvuldigen met zichzelf." }],
          theorie: "Cito-truc: leer kwadraten uit hoofd: 4²=16, 5²=25, 6²=36, 7²=49, 8²=64, 9²=81, 10²=100.",
          voorbeelden: [{ type: "stap", tekst: "Vierkant opp 100 cm² → zijde 10 cm." }],
          basiskennis: [{ onderwerp: "Anders", uitleg: "Bij rechthoek heb je 2 maten nodig om zijde te vinden. Bij vierkant 1 maat." }],
          niveaus: {
            basis: "8 cm. A.",
            simpeler: "√64 = 8. = A.",
            nogSimpeler: "8 × 8 = 64 = A.",
          },
        },
      },
      {
        q: "**1 hectare** = ___ m²?",
        options: ["10.000 m²", "1.000 m²", "100 m²", "100.000 m²"],
        answer: 0,
        wrongHints: [null, "10× te weinig.", "100× te weinig.", "10× te veel."],
      },
      {
        q: "**Klok wijst 14:30**. Hoeveel **uur na 12:00**?",
        options: ["2,5 uur", "2 uur", "30 min", "14,5 uur"],
        answer: 0,
        wrongHints: [null, "Vergeten halve uur.", "Niet — alleen minuten gaven.", "Niet — vanaf 12:00, niet 0:00."],
      },
      {
        q: "**Cilinder** is een ___?",
        options: ["3D-figuur als een blik soep", "Vlak figuur", "Cirkel", "Driehoek"],
        answer: 0,
        wrongHints: [null, "3D heeft volume.", "Cirkel is 2D, cilinder 3D.", "Verkeerd."],
      },
    ],
  },

  // ─── Stap 4: Redactie-eindopdracht ──────────────────
  {
    title: "Redactiesommen — eindopdracht ~20 min",
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
        wrongHints: [null, "Dat is 4 × €1,80.", "Te veel — komma vergeten?", "Dat is 1 glas."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldig", tekst: "5 × €1,80 = €9,00." },
            { titel: "Slim rekenen", tekst: "5 × €1 = €5, 5 × €0,80 = €4, samen €9." },
          ],
          woorden: [{ woord: "totale prijs", uitleg: "Aantal × prijs per stuk." }],
          theorie: "Truc 'splits-en-tel-op': bij komma-getallen splits in geheel en kommadeel. Reken apart, tel op.",
          voorbeelden: [{ type: "stap", tekst: "5 × €1,80 = 5×1 + 5×0,8 = 5 + 4 = 9. 3 × €2,50 = 3×2 + 3×0,5 = 6 + 1,5 = €7,50." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "5 glazen voor €9 = bijna €2 per glas. Past." }],
          niveaus: {
            basis: "€9,00 (5 × €1,80). A.",
            simpeler: "5 × €1,80 = 5 + 4 = €9. = A.",
            nogSimpeler: "€9 = A.",
          },
        },
      },
      {
        q: "Tom legt om de **15 minuten** een nieuwe pot bloemen. Hoeveel **per uur**?",
        options: ["4 potten", "15 potten", "60 potten", "1 pot"],
        answer: 0,
        wrongHints: [null, "Niet — 15 was tijdsinterval.", "Veel te veel.", "Te weinig — minder dan 15 min/pot."],
      },
      {
        q: "Een fietstas weegt **leeg 800 g**. Met **2 kg** boodschappen erin — totaal?",
        options: ["2,8 kg", "2,2 kg", "10 kg", "2,08 kg"],
        answer: 0,
        wrongHints: [null, "Verkeerd opgeteld.", "Veel te veel.", "Te weinig — 800 g ≠ 0,08 kg."],
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
        wrongHints: [null, "Verkeerd gedeeld.", "Te kort.", "Veel te lang."],
        uitlegPad: {
          stappen: [
            { titel: "Spaardoel", tekst: "Doel = €60. Per week = €5. Aantal weken = €60 ÷ €5." },
            { titel: "Deel", tekst: "60 ÷ 5 = 12 weken." },
          ],
          woorden: [{ woord: "spaardoel", uitleg: "Bedrag dat je wilt bereiken." }],
          theorie: "Spaarsom-truc: doel ÷ wekelijks-bedrag = aantal-weken. Werkt voor elke regelmatige inleg.",
          voorbeelden: [{ type: "stap", tekst: "Tablet €120, spaar €10/wk = 12 wkn. Game €80, spaar €8/wk = 10 wkn." }],
          basiskennis: [{ onderwerp: "Check", uitleg: "12 × €5 = €60 ✓. Realiteit-check: 12 weken is bijna 3 maanden — realistisch sparen." }],
          niveaus: {
            basis: "12 weken (€60 ÷ €5). A.",
            simpeler: "Hoeveel keer €5 in €60? €60 ÷ €5 = 12. = A.",
            nogSimpeler: "12 = A.",
          },
        },
      },
      {
        q: "Een trein vertrekt **08:45** en rijdt **2u15**. Aankomst?",
        options: ["11:00", "10:45", "11:30", "10:00"],
        answer: 0,
        wrongHints: [null, "Slechts 2 uur opgeteld.", "Te lang.", "Te kort."],
      },
      {
        q: "**240 km** met snelheid **80 km/u** — reistijd?",
        options: ["3 uur", "2 uur", "4 uur", "240 uur"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Te lang.", "Absurd."],
      },
      {
        q: "Een klas van 24 doet **mee aan toets**. **18 halen voldoende**. % voldoendes?",
        options: ["75%", "60%", "80%", "70%"],
        answer: 0,
        wrongHints: [null, "Verkeerd.", "Iets te veel.", "Iets te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: deel het deel door het geheel", tekst: "Je vraagt: welk DEEL van het GEHEEL haalt voldoende? 18 (deel) ÷ 24 (geheel) = 0,75." },
            { titel: "Stap 2: keer 100 voor procent", tekst: "0,75 × 100 = **75%**." },
            { titel: "Cito-controle", tekst: "Even checken: 18 is meer dan helft van 24 (=12), dus moet boven 50% zijn. 75% klopt." },
          ],
          woorden: [
            { woord: "deel-van-het-geheel", uitleg: "Deel ÷ geheel × 100 = %." },
            { woord: "vermenigvuldigen met 100", uitleg: "Komma 2 plaatsen naar rechts. 0,75 → 75." },
          ],
          theorie: "Formule % bereken: (deel ÷ geheel) × 100. Bijvoorbeeld 18 van 24: (18/24) × 100 = 75%. Werkt voor alle 'hoeveel-procent-van'-vragen.",
          voorbeelden: [
            { type: "stap", tekst: "5 van 20 = 25%. (5÷20)×100." },
            { type: "stap", tekst: "12 van 30 = 40%. (12÷30)×100." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Kortere breuk maken eerst: 18/24 = 3/4 (delen door 6). 3/4 = 75%. Sneller!" }],
          niveaus: {
            basis: "% = (deel ÷ geheel) × 100.",
            simpeler: "18 ÷ 24 = 0,75 = 75%.",
            nogSimpeler: "18 van 24 = 3/4 = 75%.",
          },
        },
      },
      {
        q: "Een fles **1,5 L**. Glas houdt **250 mL**. Hoeveel glazen?",
        options: ["6", "4", "5", "10"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Iets te weinig.", "Te veel."],
      },
      {
        q: "Tom werkt **3 uur** voor **€18**. **Uurloon**?",
        options: ["€6", "€21", "€54", "€9"],
        answer: 0,
        wrongHints: [null, "Optellen werkt niet.", "Vermenigvuldigen werkt niet.", "Verkeerd berekend."],
      },
      {
        q: "**3 boeken** kosten **€36 samen**. Per boek?",
        options: ["€12", "€18", "€9", "€11"],
        answer: 0,
        wrongHints: [null, "Dat is helft.", "Niet juist.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Deelsom", tekst: "Per stuk = totaal ÷ aantal. €36 ÷ 3 = €12 per boek." },
          ],
          woorden: [{ woord: "per stuk", uitleg: "Wat 1 ding kost — total delen door aantal." }],
          theorie: "Redactiesom-truc: 'kost ... samen' + 'per X' = deelsom. Totaal ÷ aantal = prijs per item.",
          voorbeelden: [{ type: "stap", tekst: "5 ijsjes voor €10 → per ijsje €2. 4 boeken €24 → per boek €6." }],
          basiskennis: [{ onderwerp: "Check", uitleg: "€12 × 3 = €36 ✓. Realiteit-check helpt fouten vinden." }],
          niveaus: {
            basis: "€12 (€36÷3). A.",
            simpeler: "Drie boeken samen €36 → één boek = €36÷3 = €12. = A.",
            nogSimpeler: "€12 = A.",
          },
        },
      },
      {
        q: "Een receptenboek kost **€25**. Met **20% korting**?",
        options: ["€20", "€5", "€30", "€22"],
        answer: 0,
        wrongHints: [null, "Dat is korting-bedrag.", "Dat is verhoging.", "Verkeerd."],
      },
      {
        q: "**Reis 60 km** met **45 km/u**. Tijd?",
        options: ["1u20 (1,33 u)", "1 uur", "2 uur", "45 min"],
        answer: 0,
        wrongHints: [null, "Te kort — zou 45 km zijn.", "Te lang.", "Te kort."],
      },
      {
        q: "**3 vrienden delen €27** eerlijk. Hoeveel **per persoon**?",
        options: ["€9", "€3", "€10", "€24"],
        answer: 0,
        wrongHints: [null, "Te weinig — drie vrienden, niet negen.", "Niet — 3 × €10 = €30, niet €27.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Eerlijk delen = ÷", tekst: "'Eerlijk verdelen onder N personen' = totaal ÷ N." },
            { titel: "Reken", tekst: "€27 ÷ 3 = €9 per persoon." },
          ],
          woorden: [{ woord: "verdelen", uitleg: "Iets in gelijke stukken splitsen." }],
          theorie: "Cito-truc bij redactiesommen: zoek signaalwoord 'eerlijk' / 'gelijk verdeeld'. Dat wijst altijd naar delen.",
          voorbeelden: [{ type: "stap", tekst: "€60 over 4 vrienden = €60 ÷ 4 = €15 per persoon." }],
          basiskennis: [{ onderwerp: "Check", uitleg: "Controleer met vermenigvuldigen: €9 × 3 = €27 ✓." }],
          niveaus: {
            basis: "€9 per persoon. A.",
            simpeler: "€27 ÷ 3 = €9. = A.",
            nogSimpeler: "Delen = €9 = A.",
          },
        },
      },
      {
        q: "Een **klas heeft 24 leerlingen**. **6 leerlingen zijn ziek**. Welk **percentage is ziek**?",
        options: ["25%", "6%", "20%", "30%"],
        answer: 0,
        wrongHints: [null, "Niet — 6 is het aantal, niet het percentage.", "Niet — reken 6/24 × 100.", "Te hoog."],
      },
      {
        q: "Cijferslijst: **7, 8, 6, 9**. Wat is het **gemiddelde**?",
        options: ["7,5", "30", "8", "6,5"],
        answer: 0,
        wrongHints: [null, "Dat is de som, niet het gemiddelde.", "Niet — controleer: (7+8+6+9)/4.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Gemiddelde = som ÷ aantal", tekst: "Tel alle waarden op en deel door het aantal waarden." },
            { titel: "Reken", tekst: "7 + 8 + 6 + 9 = 30. Aantal = 4. Gemiddelde = 30 ÷ 4 = 7,5." },
          ],
          woorden: [{ woord: "gemiddelde", uitleg: "Som van getallen gedeeld door het aantal getallen." }],
          theorie: "Cito-truc: tel + deel. Check of het tussen het kleinste en grootste getal in ligt — anders heb je een rekenfout.",
          voorbeelden: [{ type: "stap", tekst: "Cijfers 4, 6 en 8 — gemiddelde = (4+6+8)/3 = 18/3 = 6." }],
          basiskennis: [{ onderwerp: "Check", uitleg: "Antwoord moet altijd liggen tussen kleinste en grootste waarde." }],
          niveaus: {
            basis: "Gemiddelde = 7,5. A.",
            simpeler: "(7+8+6+9)/4 = 30/4 = 7,5. = A.",
            nogSimpeler: "30 ÷ 4 = 7,5 = A.",
          },
        },
      },
      {
        q: "Een fles bevat **1,5 L** sap. **Glazen** van **250 mL**. Hoeveel **glazen** vol?",
        options: ["6", "5", "4", "7"],
        answer: 0,
        wrongHints: [null, "Niet — 1,5 L = 1500 mL. 1500 ÷ 250 = 6.", "Te weinig.", "Te veel."],
      },
      {
        q: "Een **fietsenwinkel** verkocht in **maart 80 fietsen**, in **april 100**. Stijging in **procenten**?",
        options: ["25%", "20%", "80%", "100%"],
        answer: 0,
        wrongHints: [null, "Bijna — let op: (nieuw − oud) / OUD × 100.", "Geen relevant getal.", "Geen relevant getal."],
        uitlegPad: {
          stappen: [
            { titel: "Procentuele stijging", tekst: "Formule: ((nieuw − oud) ÷ oud) × 100%." },
            { titel: "Reken", tekst: "Verschil = 100 − 80 = 20. Stijging = 20/80 × 100 = 25%." },
          ],
          woorden: [{ woord: "procentuele stijging", uitleg: "Hoeveel procent iets toeneemt t.o.v. het oude getal." }],
          theorie: "Cito-truc: deel ALTIJD door het OUDE getal (de uitgangswaarde), niet door het nieuwe. Veel leerlingen rekenen dit fout.",
          voorbeelden: [
            { type: "stap", tekst: "Van 200 naar 250: 50/200 × 100 = 25% stijging." },
            { type: "stap", tekst: "Van 100 naar 80: −20/100 × 100 = 20% daling." },
          ],
          basiskennis: [{ onderwerp: "Daling", uitleg: "Bij daling: zelfde formule, je krijgt een negatief getal of noemt het percentage daling." }],
          niveaus: {
            basis: "25% stijging. A.",
            simpeler: "Verschil 20. Oud was 80. 20/80 = 0,25 = 25%. = A.",
            nogSimpeler: "20/80 = 25% = A.",
          },
        },
      },
      {
        q: "**Sanne** spaart **€5 per week** voor een fiets van **€120**. Hoeveel **weken**?",
        options: ["24 weken", "30 weken", "12 weken", "20 weken"],
        answer: 0,
        wrongHints: [null, "Te veel — 30 × 5 = 150.", "Te weinig — 12 × 5 = 60.", "Te weinig — 20 × 5 = 100."],
        uitlegPad: {
          stappen: [
            { titel: "Hoe vaak past €5 in €120?", tekst: "Bij sparen-vragen: totaal ÷ bedrag per keer." },
            { titel: "Reken", tekst: "120 ÷ 5 = 24 weken." },
          ],
          woorden: [{ woord: "sparen", uitleg: "Geld opzijleggen voor later." }],
          theorie: "Cito-truc bij sparen: totaal ÷ per keer = aantal keer. Check: 24 × 5 = €120 ✓.",
          voorbeelden: [{ type: "stap", tekst: "€60 sparen, €4/week → 60 ÷ 4 = 15 weken." }],
          basiskennis: [{ onderwerp: "Check", uitleg: "Vermenigvuldig terug: aantal × bedrag/keer = totaal." }],
          niveaus: {
            basis: "24 weken. A.",
            simpeler: "120 ÷ 5 = 24. = A.",
            nogSimpeler: "120 / 5 = 24 = A.",
          },
        },
      },
      {
        q: "**De auto verbruikt 6 L op 100 km.** Hoeveel **liter op 250 km**?",
        options: ["15 L", "12 L", "20 L", "10 L"],
        answer: 0,
        wrongHints: [null, "Te weinig — 250 ÷ 100 × 6.", "Te veel.", "Te weinig."],
      },
      {
        q: "**Klas** heeft **30 leerlingen**. **2/3 doet gym mee**. Hoeveel **leerlingen**?",
        options: ["20", "10", "15", "25"],
        answer: 0,
        wrongHints: [null, "Niet — 30 × 2/3 = 20.", "Helft.", "Te veel."],
      },
      {
        q: "Een **rechthoek** heeft **oppervlakte 24 m²** en **breedte 4 m**. Wat is de **lengte**?",
        options: ["6 m", "20 m", "12 m", "8 m"],
        answer: 0,
        wrongHints: [null, "Aftrekken werkt hier niet — opp / breedte.", "24 ÷ 4 = 6, niet 12.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Opp = lengte × breedte", tekst: "Formule rechthoek: oppervlakte = lengte × breedte. Dus: lengte = oppervlakte / breedte." },
            { titel: "Reken", tekst: "24 ÷ 4 = 6 m." },
          ],
          woorden: [{ woord: "oppervlakte", uitleg: "Hoe groot een vlak is, in m² of cm²." }],
          theorie: "Cito-truc: bij opp-vraag, schrijf altijd de formule eerst op (l × b = opp). Vul dan in en los op.",
          voorbeelden: [{ type: "stap", tekst: "Opp 50 m², lengte 10 m → breedte = 50 / 10 = 5 m." }],
          basiskennis: [{ onderwerp: "Check", uitleg: "Vermenigvuldig terug: 6 × 4 = 24 ✓." }],
          niveaus: {
            basis: "6 m. A.",
            simpeler: "24 / 4 = 6 m. = A.",
            nogSimpeler: "Opp / breedte = lengte = 6 = A.",
          },
        },
      },
      {
        q: "Een **trein vertrekt om 8:15** en **rijdt 1u30**. Wanneer **aankomst**?",
        options: ["9:45", "9:15", "9:30", "10:15"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet 30 min niet.", "Niet — 1u30 is anderhalf uur.", "Te laat."],
      },
      {
        q: "**Tom heeft 240 stuiters**. Hij **geeft 1/4** weg. Hoeveel **houdt hij over**?",
        options: ["180", "60", "120", "240"],
        answer: 0,
        wrongHints: [null, "Dat is wat hij wegGAF, niet wat overblijft.", "Helft, niet kwart.", "Niets weggegeven."],
        uitlegPad: {
          stappen: [
            { titel: "Weggeven of houden?", tekst: "Hij geeft 1/4 weg → houdt 3/4 over. Of: bereken kwart en trek af." },
            { titel: "Reken", tekst: "1/4 van 240 = 60. 240 − 60 = 180. Check: 3/4 van 240 = 180 ✓." },
          ],
          woorden: [{ woord: "wegGEVEN vs HOUDEN", uitleg: "Let op welk deel gevraagd wordt: weggegeven of overgebleven." }],
          theorie: "Cito-truc: lees vraag goed. 'Houdt over' = totaal − weggegeven. 'Geeft weg' = direct het deel.",
          voorbeelden: [{ type: "stap", tekst: "100 koeken, 1/5 verkocht: verkocht=20, over=80." }],
          basiskennis: [{ onderwerp: "Check", uitleg: "Tel weggegeven + over: moet totaal zijn. 60 + 180 = 240 ✓." }],
          niveaus: {
            basis: "180. A.",
            simpeler: "240 − 60 = 180. = A.",
            nogSimpeler: "3/4 = 180 = A.",
          },
        },
      },
      {
        q: "**Auto rijdt 5 minuten**. Verbruikt **0,5 L per minuut**. Hoeveel **brandstof totaal**?",
        options: ["2,5 L", "5 L", "0,5 L", "10 L"],
        answer: 0,
        wrongHints: [null, "Niet — 5 × 0,5 = 2,5, niet 5.", "Per 1 minuut.", "Te veel."],
      },
      {
        q: "**Boekjes** kosten **€3 per stuk**. Tom koopt **8 stuks**. **Korting bij 5+ stuks**: **€5 korting** totaal. Wat **betaalt** hij?",
        options: ["€19", "€24", "€15", "€20"],
        answer: 0,
        wrongHints: [null, "Niet — vergat korting eraf.", "Te veel korting.", "Niet."],
      },
      {
        q: "**Stel**: 3 vrienden willen **€18 eerlijk delen** — Tom doet niet mee. Hoeveel **per overgebleven persoon**?",
        options: ["€6", "€9", "€18", "€3"],
        answer: 0,
        wrongHints: [null, "Niet — 18/3 = 6.", "Dat is wat 2 delen.", "Wat 6 delen."],
      },
      {
        q: "**Bordje** met **€12,50** + **fooi 10%**. Hoeveel **fooi**?",
        options: ["€1,25", "€1,50", "€2,50", "€12,50"],
        answer: 0,
        wrongHints: [null, "Niet — 10% van €12,50 is €1,25.", "Te veel.", "Heel bedrag, geen fooi."],
        uitlegPad: {
          stappen: [
            { titel: "10% = / 10", tekst: "Schuif komma 1 plek naar links: €12,50 → €1,25." },
          ],
          woorden: [{ woord: "fooi", uitleg: "Extra geld voor goede service, vaak 5-10% van rekening." }],
          theorie: "Cito-truc 10%: gewoon komma 1 plek naar links.",
          voorbeelden: [{ type: "stap", tekst: "10% van €25,50 = €2,55." }],
          basiskennis: [{ onderwerp: "5%", uitleg: "5% = helft van 10%. Dus 5% van €12,50 = €1,25 / 2 = €0,625." }],
          niveaus: {
            basis: "€1,25. A.",
            simpeler: "10% van €12,50 = €1,25. = A.",
            nogSimpeler: "€1,25 = A.",
          },
        },
      },
      {
        q: "**Klas** loting: 12 jongens, 18 meisjes. **Kans op meisje** in procent?",
        options: ["60%", "40%", "30%", "50%"],
        answer: 0,
        wrongHints: [null, "Dat is jongens.", "Onjuist.", "Niet — niet gelijk verdeeld."],
        uitlegPad: {
          stappen: [
            { titel: "Kans = deel / totaal", tekst: "Totaal = 12+18 = 30. Kans op meisje = 18/30 = 0,6 = 60%." },
          ],
          woorden: [{ woord: "kans", uitleg: "Hoe waarschijnlijk iets is, in procent of breuk." }],
          theorie: "Cito-truc kans: aantal gewenst / aantal totaal × 100%.",
          voorbeelden: [{ type: "stap", tekst: "Dobbelsteen — kans op 6 = 1/6 ≈ 17%." }],
          basiskennis: [{ onderwerp: "Som = 100%", uitleg: "Kans op meisje + jongen = 100%. 60% + 40% = 100% ✓." }],
          niveaus: {
            basis: "60%. A.",
            simpeler: "18/30 × 100 = 60. = A.",
            nogSimpeler: "60% = A.",
          },
        },
      },
      {
        q: "**Bij €25 betaal je €30 terug** (met €5 rente). **Rente in procent**?",
        options: ["20%", "5%", "30%", "25%"],
        answer: 0,
        wrongHints: [null, "Niet — bedrag, niet %.", "Niet.", "Niet."],
      },
      {
        q: "**Drie boeken** kosten samen **€45**. Wat kost **één** (gemiddeld)?",
        options: ["€15", "€10", "€20", "€45"],
        answer: 0,
        wrongHints: [null, "Niet — controleer 3 × 10 = 30.", "Niet — 3 × 20 = 60.", "Geheel, geen gemiddelde."],
      },
      {
        q: "Een **rondje** om het schoolplein is **150 m**. Wandel je **8 rondjes**, hoeveel **meter**?",
        options: ["1200 m", "1500 m", "800 m", "150 m"],
        answer: 0,
        wrongHints: [null, "Niet — 8 × 150 = 1200.", "Niet.", "Eén rondje."],
      },
      {
        q: "**Open vraag**: hoeveel is **12 × 8**? Typ alleen het getal.",
        kind: "open",
        acceptedAnswers: ["96"],
        numericTolerance: 0,
        explanation: "12 × 8 = 96. Truc: 10 × 8 = 80, dan + 2 × 8 = 16 → 96.",
      },
      {
        q: "**Open vraag**: wat is **25% van 80**? Typ alleen het getal.",
        kind: "open",
        acceptedAnswers: ["20"],
        numericTolerance: 0,
        explanation: "25% is 1/4. 80 ÷ 4 = 20.",
      },
      {
        q: "**Open vraag**: hoeveel is **3/4 + 1/4** (heel getal of breuk)?",
        kind: "open",
        acceptedAnswers: ["1", "4/4", "1.0", "1,0"],
        explanation: "3/4 + 1/4 = 4/4 = 1 heel.",
      },
      {
        q: "**Open vraag**: hoeveel is **0,5 × 0,5**? (decimaal antwoord)",
        kind: "open",
        acceptedAnswers: ["0,25", "0.25", "1/4"],
        explanation: "0,5 × 0,5 = 0,25. Of: helft van een half = een kwart.",
      },
      {
        q: "**Open vraag**: een trein vertrekt om **9:30** en rijdt **2 uur**. Wanneer komt hij aan? (typ als 11:30)",
        kind: "open",
        acceptedAnswers: ["11:30", "11.30", "11u30"],
        explanation: "9:30 + 2 uur = 11:30.",
      },
      {
        q: "**Open vraag**: hoe schrijf je **'half twee 's middags'** in 24-uurs notatie?",
        kind: "open",
        acceptedAnswers: ["13:30", "13.30", "13:30 uur"],
        explanation: "'s Middags = +12 uur. Half twee = 1:30 → 13:30.",
      },
      {
        q: "**Open vraag**: hoeveel **minuten** zit in **1,5 uur**?",
        kind: "open",
        acceptedAnswers: ["90"],
        numericTolerance: 0,
        explanation: "1 uur = 60 min. Half uur = 30 min. 60 + 30 = 90 min.",
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
    "~75 Cito-stijl oefenvragen rekenen — breuken, procenten, meten, redactiesommen. Géén kopieën, eigen vragen © Leerkwartier. Voor echte Cito-voorbeelden: gratis voorbeeldopgavenboekje op cito.nl. ~80 min totaal (4× ~20 min) — splits gerust in 4 dagelijkse kwartier-sessies.",
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
