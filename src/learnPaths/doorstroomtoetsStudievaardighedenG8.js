// Leerpad: Doorstroomtoets — studievaardigheden groep 8 (pilot).
// 5 stappen van ~20 min met eigen oefenvragen "in stijl van" Cito/IEP.
// Géén letterlijk overgenomen vragen — auteursrechtelijke schoonheid.
// Externe link naar Cito's gratis voorbeeldopgavenboekje.
// Parallel met doorstroomtoetsRekenenG8.js + doorstroomtoetsTaalG8.js.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  vraag: "#42a5f5",
  studie: "#e040fb",
};

const stepEmojis = ["🗺️", "📊", "📖", "🔀", "🏆"];

const chapters = [
  { letter: "A", title: "Kaart + schaal", emoji: "🗺️", from: 0, to: 0 },
  { letter: "B", title: "Tabel + grafiek", emoji: "📊", from: 1, to: 1 },
  { letter: "C", title: "Woordenboek + atlas + index", emoji: "📖", from: 2, to: 2 },
  { letter: "D", title: "Schema's + stappenplan", emoji: "🔀", from: 3, to: 3 },
  { letter: "E", title: "Eind-mix", emoji: "🏆", from: 4, to: 4 },
];

function overzichtSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">DOORSTROOMTOETS — STUDIEVAARDIGHEDEN</text>
<text x="160" y="40" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">~50 vragen — informatie ordenen + opzoeken</text>

<rect x="20" y="55" width="135" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="87" y="75" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">🗺️ KAART</text>
<text x="87" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">schaal · routes</text>
<text x="87" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">legenda · windrichting</text>

<rect x="165" y="55" width="135" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="232" y="75" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">📊 TABEL/GRAFIEK</text>
<text x="232" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">staaf · lijn · taart</text>
<text x="232" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">verschil · totaal</text>

<rect x="20" y="120" width="135" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="87" y="140" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">📖 OPZOEKEN</text>
<text x="87" y="157" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">woordenboek · atlas</text>
<text x="87" y="169" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">inhoudsopgave · index</text>

<rect x="165" y="120" width="135" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="232" y="140" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">🔀 SCHEMA'S</text>
<text x="232" y="157" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">stappenplan</text>
<text x="232" y="169" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">stroomdiagram</text>

<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Voor échte Cito-voorbeelden: zie externe PDF onder elke stap</text>
</svg>`;
}

const examenLink = "[Cito's gratis voorbeeldopgavenboekje](https://cito.nl/media/41vbqo2t/lib_doorstroomtoets_voorbeeldopgavenboekje.pdf)";

const steps = [
  // STAP 1: Kaart + schaal
  {
    title: "Kaart + schaal lezen — ~20 min",
    explanation:
      "**Studievaardigheden bij Cito** test of je informatie kunt **opzoeken en gebruiken**. Dat kan op een kaart, in een tabel, in een atlas, of via een schema.\n\n**Kaarten lezen — wat moet je kennen?**\n\n**1. Schaal**\n• **1 : 100.000** = 1 cm op kaart = 100.000 cm in het echt = 1 km.\n• **1 : 50.000** = 1 cm = 500 m = 0,5 km.\n• **1 : 25.000** = 1 cm = 250 m = 0,25 km.\n\n**Truc**: schaal omrekenen → deel door 100 *(cm → m)*. Dan door 1000 *(m → km)*.\n\n**Voorbeeld**:\n*'Schaal 1:50.000. Op de kaart is een weg 4 cm. Hoeveel km in werkelijkheid?'*\n• 4 × 50.000 = 200.000 cm = 2000 m = **2 km**.\n\n**2. Windrichting**\n• Op de **kompasroos** zie je N(oord), O(ost), Z(uid), W(est).\n• **NO** = noord-oost (tussen N en O).\n• Veel kaarten: noord boven, oost rechts, zuid onder, west links.\n\n**3. Legenda**\nElke kaart heeft een **legenda** *(tekst-box met symbolen-uitleg)*:\n• Blauwe lijn = rivier of weg met water.\n• Bruine vlek = berg of heuvel.\n• Groene vlek = bos of park.\n• Stippellijn = wandelpad of grens.\n• Driehoek met getal = hoogtepunt *(bv. 312 m boven NAP)*.\n\n**4. Coördinaten**\nKaarten in atlas hebben vakken zoals **A4** of **C2**:\n• Letter = horizontale kolom *(boven)*.\n• Cijfer = verticale rij *(opzij)*.\n\n**Voorbeeld Cito-vraag**:\n*'In welk vak ligt de stad Groningen?'* → kijk in legend + tel kolommen/rijen.\n\n**Bron**: voor officiële voorbeelden zie " + examenLink + ".",
    svg: overzichtSvg(),
    checks: [
      {
        q: "Schaal **1:100.000**. **3 cm** op kaart = ... in werkelijkheid?",
        options: ["3 km", "300 m", "30 m", "30 km"],
        answer: 0,
        wrongHints: [null, "Klopt — 1 cm = 1 km bij 1:100.000.", "Te weinig — controleer omrekening.", "Veel te weinig.", "Verkeerde berekening."],
        uitlegPad: {
          stappen: [
            { titel: "Onthoud truc 1:100.000", tekst: "Bij schaal 1:100.000 is 1 cm op kaart = 100.000 cm = 1.000 m = 1 km in het echt." },
            { titel: "Vermenigvuldig", tekst: "3 cm × 1 km/cm = 3 km." },
          ],
          woorden: [{ woord: "schaalgetal", uitleg: "Het getal achter '1:' geeft aan hoeveel cm in werkelijkheid 1 cm op kaart vertegenwoordigt." }],
          theorie: "Cito-truc: bij 1:100.000 hoef je niet te rekenen — 1 cm = 1 km direct.",
          voorbeelden: [{ type: "stap", tekst: "1:25.000 → 1 cm = 250 m. 1:50.000 → 1 cm = 500 m. 1:200.000 → 1 cm = 2 km." }],
          basiskennis: [{ onderwerp: "Omrekening", uitleg: "100.000 cm = 1.000 m = 1 km. Onthoud deze stap." }],
          niveaus: {
            basis: "3 km. A.",
            simpeler: "1:100.000 betekent 1 cm = 1 km. Dus 3 cm = 3 km. = A.",
            nogSimpeler: "3 = A.",
          },
        },
      },
      {
        q: "Wat staat in de **legenda** van een kaart?",
        options: ["Uitleg van de symbolen + kleuren", "De schaal", "Hoeveelheid plaatsen", "De maker"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Schaal staat meestal apart.", "Niet legenda.", "Soms in colofon, niet legenda."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een legenda?", tekst: "Een legenda is het 'verklaring-blok' op de kaart waarin staat wat elk symbool of kleur betekent." },
          ],
          woorden: [{ woord: "legenda", uitleg: "Verklaring van symbolen en kleuren op een kaart." }],
          theorie: "Elke kaart heeft een legenda om symbolen te begrijpen. Zonder legenda weet je niet of een groene vlek bos of weiland is.",
          voorbeelden: [{ type: "stap", tekst: "Bv: blauw = water, groen = bos, bruin = berg/heuvel." }],
          basiskennis: [{ onderwerp: "Plek op kaart", uitleg: "Vaak in een hoekje van de kaart of apart kader." }],
          niveaus: {
            basis: "Uitleg van symbolen + kleuren. A.",
            simpeler: "Legenda = wat-betekent-wat-tabel naast de kaart. = A.",
            nogSimpeler: "Symbolen-uitleg = A.",
          },
        },
      },
      {
        q: "Schaal **1:50.000**. Op kaart **4 cm**. In het echt?",
        options: ["2 km", "200 m", "200 km", "0,2 km"],
        answer: 0,
        wrongHints: [null, "Klopt — 4 × 0,5 km.", "Te weinig — controleer omrekening cm→km.", "Veel te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldig kaart met schaal", tekst: "4 cm × 50.000 = 200.000 cm." },
            { titel: "Reken om naar km", tekst: "200.000 cm = 2.000 m = 2 km." },
          ],
          woorden: [{ woord: "schaal 1:50.000", uitleg: "1 cm op kaart = 50.000 cm = 500 m = 0,5 km in het echt." }],
          theorie: "Bij Cito-schaalvragen altijd: vermenigvuldig de afstand op de kaart met het schaalgetal, dan omrekenen naar km.",
          voorbeelden: [{ type: "stap", tekst: "Bij 1:100.000 is 1 cm op kaart = 1 km. Handig om te onthouden." }],
          basiskennis: [{ onderwerp: "100 cm = 1 m, 1000 m = 1 km", uitleg: "Centimeter, meter, kilometer — stappen van 100 en 1000." }],
          niveaus: {
            basis: "4 × 50.000 = 200.000 cm = 2 km. A.",
            simpeler: "Schaal 1:50.000 → 1 cm op kaart = 500 m = 0,5 km. 4 cm × 0,5 km = 2 km. = A.",
            nogSimpeler: "2 km = A.",
          },
        },
      },
      {
        q: "Op een kompasroos staat boven meestal welke windrichting?",
        options: ["Noord (N)", "Oost (O)", "Zuid (Z)", "West (W)"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Rechts staat oost.", "Onder staat zuid.", "Links staat west."],
        uitlegPad: {
          stappen: [
            { titel: "Kompasroos = vier richtingen", tekst: "Op elke landkaart staat een kompasroos: een symbool met vier letters die de richtingen aanwijzen." },
            { titel: "Boven = Noord", tekst: "Bijna altijd staat Noord (N) BOVEN op de kaart. Zuid (Z) onder, Oost (O) rechts, West (W) links." },
            { titel: "Onthouden", tekst: "Klok-volgorde: Noord (12 uur) → Oost (3 uur) → Zuid (6 uur) → West (9 uur)." },
          ],
          woorden: [
            { woord: "Noord (N)", uitleg: "Boven op de kaart." },
            { woord: "Oost (O)", uitleg: "Rechts op de kaart." },
            { woord: "Zuid (Z)", uitleg: "Onder op de kaart." },
            { woord: "West (W)", uitleg: "Links op de kaart." },
          ],
          theorie: "Bij elke kaart eerst kompas zoeken. Soms staat alleen pijl met 'N' — die wijst naar Noord. Niet altijd staat N omhoog, maar bijna altijd.",
          voorbeelden: [{ type: "stap", tekst: "Nederland op kaart: Noord = Groningen, Zuid = Maastricht, Oost = Twente, West = Amsterdam/Den Haag." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "NOZW = met de klok mee, beginnend bij Noord (boven)." }],
          niveaus: {
            basis: "Boven kaart = Noord. Klok-volgorde: N → O → Z → W.",
            simpeler: "Noord = omhoog. Zuid = omlaag. Oost = rechts. West = links.",
            nogSimpeler: "Boven = N!",
          },
        },
      },
      {
        q: "In welk **kaartvak** ligt een stad? *'Vak C3'* betekent ...",
        options: ["Kolom C, rij 3", "Coördinaat 3 en C", "3 cm vanaf C", "3e plaats vanaf C"],
        answer: 0,
        wrongHints: [null, "Klopt — letter is kolom, cijfer is rij.", "Niet die zelfde betekenis.", "Niet over afstand.", "Niet over volgorde."],
      },
      {
        q: "Tussen **N en O** op kompas: welke windrichting?",
        options: ["NO (noord-oost)", "ZO", "NW", "ZW"],
        answer: 0,
        wrongHints: [null, "Klopt — tussen noord en oost.", "Tussen Z en O.", "Tussen N en W.", "Tussen Z en W."],
      },
      {
        q: "Schaal **1:25.000**. Op kaart **2 cm**. In het echt?",
        options: ["500 m", "5 km", "50 m", "2,5 km"],
        answer: 0,
        wrongHints: [null, "Klopt — 2 × 25.000 = 50.000 cm = 500 m.", "Veel te veel.", "Te weinig — controleer cm→m.", "Verkeerde berekening."],
      },
      {
        q: "Op een kaart staat een **bruine vlek**. Wat betekent dat meestal?",
        options: ["Berg of heuvel", "Rivier", "Bos", "Stad"],
        answer: 0,
        wrongHints: [null, "Klopt — bruin = hoog (berg/heuvel).", "Rivier = blauw.", "Bos = groen.", "Stad = grijs/rood-vakje."],
        uitlegPad: {
          stappen: [
            { titel: "Kaart-kleuren", tekst: "Bij topografische kaarten staat bruin meestal voor **hoogte** (berg/heuvel)." },
            { titel: "Hoe donkerder", tekst: "Donkerbruin = hoger. Lichtbruin = lager. Geel-groen = laagland." },
          ],
          woorden: [{ woord: "topografische kaart", uitleg: "Kaart die het landschap toont met hoogtelijnen, rivieren, bossen." }],
          theorie: "Standaard kaart-kleuren in NL/Europa: blauw=water, groen=bos/laagland, geel/oranje=heuvel, bruin=hooggebergte, wit=sneeuw.",
          voorbeelden: [{ type: "stap", tekst: "Schweiz-kaart: veel bruine en witte vlekken = Alpen. NL-kaart: vrijwel alleen groen + blauw (plat land)." }],
          basiskennis: [{ onderwerp: "Legenda checken", uitleg: "Elke kaart heeft eigen kleurcodes — controleer altijd de legenda!" }],
          niveaus: {
            basis: "Berg of heuvel. A.",
            simpeler: "Bruin op kaart = hoog land. = A.",
            nogSimpeler: "Berg = A.",
          },
        },
      },
      {
        q: "Schaal **1:200.000**. Op kaart **5 cm**. Werkelijkheid in **km**?",
        options: ["10 km", "1 km", "100 km", "5 km"],
        answer: 0,
        wrongHints: [null, "Klopt — 5 × 200.000 = 1.000.000 cm = 10 km.", "Veel te weinig.", "Veel te veel.", "Verkeerde berekening."],
      },
      {
        q: "Op kompas: **ZW** ligt tussen welke twee?",
        options: ["Z en W", "N en W", "N en O", "Z en O"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Dat is NW.", "Dat is NO.", "Dat is ZO."],
      },
      {
        q: "Tussen welke richtingen ligt **NO**?",
        options: ["N en O", "Z en O", "N en W", "Z en W"],
        answer: 0,
        wrongHints: [null, "Klopt — noord-oost.", "ZO.", "NW.", "ZW."],
      },
      {
        q: "Schaal **1:10.000** is **groter of kleiner** dan 1:100.000?",
        options: ["Groter (kleiner getal = meer detail)", "Kleiner", "Gelijk", "Niet te vergelijken"],
        answer: 0,
        wrongHints: [null, "Klopt — hoe kleiner schaalgetal, hoe meer detail.", "Niet — 1:10.000 = stadsplattegrond met meer detail.", "Niet gelijk.", "Wel vergelijkbaar."],
        uitlegPad: {
          stappen: [
            { titel: "Schaal verklaard", tekst: "1:10.000 betekent: 1 cm op kaart = 10.000 cm = 100 m in het echt. Veel detail!" },
            { titel: "Vergelijk", tekst: "1:100.000 = 1 cm = 1 km. Veel minder detail per cm — overzicht-kaart." },
          ],
          woorden: [
            { woord: "grote schaal", uitleg: "Kleiner schaalgetal (bv 1:10.000) = kleine gebied, veel detail." },
            { woord: "kleine schaal", uitleg: "Groter schaalgetal (bv 1:1.000.000) = groot gebied, weinig detail." },
          ],
          theorie: "Verwarrend: 'grote schaal' = grootste detail-niveau = klein schaalgetal. 1:10.000 > 1:100.000 (qua detail)!",
          voorbeelden: [{ type: "stap", tekst: "1:1.000 = bouwtekening (1 cm = 10 m). 1:25.000 = wandelkaart. 1:1.000.000 = wereldatlas." }],
          basiskennis: [{ onderwerp: "Onthoud", uitleg: "Hoe kleiner het getal achter ':' hoe meer je ziet per cm. Vice versa." }],
          niveaus: {
            basis: "Groter (kleiner schaalgetal = meer detail). A.",
            simpeler: "1:10.000 = stadsplattegrond. 1:100.000 = streekkaart met minder detail. Eerste is 'groter'. = A.",
            nogSimpeler: "Groter = A.",
          },
        },
      },
      {
        q: "Op kaart: **groene vlek** betekent meestal?",
        options: ["Bos / park", "Stad", "Water", "Berg"],
        answer: 0,
        wrongHints: [null, "Klopt — groen = vegetatie.", "Stad = grijs/oranje.", "Water = blauw.", "Berg = bruin."],
      },
      {
        q: "Welk kaart-element vertelt **hoe lang 1 cm in echt** is?",
        options: ["Schaal-balk", "Legenda", "Kompas", "Titel"],
        answer: 0,
        wrongHints: [null, "Klopt — schaalbalk geeft schaal visueel weer.", "Legenda voor kleuren-uitleg.", "Kompas voor richting.", "Niet schaal."],
      },
      {
        q: "Op kompas: **tussen N en W** ligt?",
        options: ["NW (noord-west)", "ZW", "NO", "ZO"],
        answer: 0,
        wrongHints: [null, "Klopt.", "ZW = tussen Z+W.", "NO = tussen N+O.", "ZO = tussen Z+O."],
      },
      {
        q: "Een **fietsroute** op kaart staat aangegeven met?",
        options: ["Stippellijn", "Doorgetrokken lijn", "Dikke lijn", "Vlek"],
        answer: 0,
        wrongHints: [null, "Klopt — fiets/wandel = stippel.", "Auto-weg = doorgetrokken.", "Snelweg = dikke lijn.", "Vlek = vlak."],
      },
      {
        q: "Schaal **1:2.500** stadsplattegrond. Op kaart **2 cm**. Werkelijk?",
        options: ["50 m", "500 m", "2,5 km", "50 cm"],
        answer: 0,
        wrongHints: [null, "Klopt — 2 × 2500 = 5000 cm = 50 m.", "Te veel.", "Veel te veel.", "Te weinig."],
      },
    ],
  },

  // STAP 2: Tabel + grafiek
  {
    title: "Tabel + grafiek lezen — ~20 min",
    explanation:
      "Bij studievaardigheden krijg je vaak een **tabel** of een **grafiek** en moet je daar informatie uit halen.\n\n**Cito-stappen**:\n1. **Lees titel + assen** — waar gaat het over?\n2. **Welke eenheid** — euro's, mensen, °C, mm?\n3. **Zoek de vraag-cel/balk** — onderaan staat meestal categorieën (dagen, klassen), zijkant staat hoeveelheid.\n4. **Lees af + schrijf met eenheid**.\n\n**Tabel-vraag-typen**:\n• **Aflezen**: 'Hoeveel kinderen op woensdag?'\n• **Verschil**: 'Hoeveel meer op vrijdag dan op maandag?'\n• **Totaal**: 'Totaal aantal kinderen in week?'\n• **Patroon**: 'Welke dag is een stijging te zien?'\n• **Gemiddelde**: 'Gemiddeld aantal per dag?'\n\n**Voorbeeld-tabel — Aantal ijsjes verkocht per dag**:\n\n| Dag | Aantal |\n|---|---|\n| ma | 12 |\n| di | 8 |\n| wo | 18 |\n| do | 22 |\n| vr | 30 |\n\n**Cito-vragen**:\n*'Op welke dag het minst verkocht?'* → dinsdag (8).\n*'Hoeveel verschil tussen vrijdag en maandag?'* → 30 − 12 = **18 ijsjes**.\n*'Totaal in deze 5 dagen?'* → 12+8+18+22+30 = **90 ijsjes**.\n*'Gemiddeld per dag?'* → 90 ÷ 5 = **18 ijsjes**.\n\n**Grafiek-typen**:\n• **Staafdiagram** = vergelijken van groepen.\n• **Lijngrafiek** = verandering door tijd.\n• **Cirkeldiagram (taart)** = verdeling van geheel (100%).\n\n**Cito-truc — cirkeldiagram**:\nGroepen tellen samen op tot **100%**. Als 3 groepen 25%, 35% en x zijn, dan x = 100 − 25 − 35 = **40%**.\n\n**Bron**: voor officiële voorbeelden zie " + examenLink + ".",
    checks: [
      {
        q: "Tabel: ma 10, di 12, wo 15, do 8, vr 20 kinderen. **Op welke dag minst**?",
        options: ["donderdag", "maandag", "vrijdag", "woensdag"],
        answer: 0,
        wrongHints: [null, "Klopt — 8 is laagst.", "10 is meer dan 8.", "20 is meest, niet minst.", "15 is niet laagst."],
      },
      {
        q: "Tabel: ma 12, di 8, wo 18, do 22, vr 30. **Totaal**?",
        options: ["90", "70", "100", "60"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig — controleer optelling.", "Te veel.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Optellen", tekst: "12 + 8 + 18 + 22 + 30 = 90." },
            { titel: "Per stap", tekst: "12+8=20, +18=38, +22=60, +30=90." },
          ],
          woorden: [{ woord: "totaal", uitleg: "Som van alle getallen — alles optellen." }],
          theorie: "Bij tabel-totaal: tel ALLE getallen in kolom of rij op. Schrijf tussenstap als getallen groot zijn.",
          voorbeelden: [{ type: "stap", tekst: "10+20+30 = (10+20)+30 = 30+30 = 60. Tussenstappen helpen fouten voorkomen." }],
          basiskennis: [{ onderwerp: "Schat", uitleg: "Schat eerst: ~10+10+20+20+30 = ~90. Past." }],
          niveaus: {
            basis: "90 (alles optellen). A.",
            simpeler: "12+8=20, +18=38, +22=60, +30=90. = A.",
            nogSimpeler: "90 = A.",
          },
        },
      },
      {
        q: "Cirkeldiagram: voetbal 50%, hockey 25%, zwemmen 15%, **rest** = ?",
        options: ["10%", "20%", "5%", "25%"],
        answer: 0,
        wrongHints: [null, "Klopt — 100 − 50 − 25 − 15 = 10.", "Te veel — controleer 100% min de 3.", "Te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Alles samen = 100%", tekst: "Voetbal 50% + hockey 25% + zwemmen 15% = 90%. Rest = 100 − 90 = 10%." },
          ],
          woorden: [{ woord: "cirkeldiagram", uitleg: "Een taart-grafiek waar alle stukken samen 100% vormen." }],
          theorie: "In een cirkeldiagram tellen alle stukken op tot 100% — gebruik dat om missende waarden te berekenen.",
          voorbeelden: [{ type: "stap", tekst: "Drie groepen 30% + 40% + ? = 100 → derde groep = 30%." }],
          basiskennis: [{ onderwerp: "100% = alles", uitleg: "Een hele cirkel staat altijd voor alles samen = 100%." }],
          niveaus: {
            basis: "100 − 50 − 25 − 15 = 10%. A.",
            simpeler: "Totaal = 100%. Trek af wat we al hebben: 100 − (50+25+15) = 100 − 90 = 10%. = A.",
            nogSimpeler: "10% = A.",
          },
        },
      },
      {
        q: "Lijngrafiek temperatuur: 18, 22, 25, 23, 19 °C *(over 5 dagen)*. Wat is het **patroon**?",
        uitlegPad: {
          stappen: [
            { titel: "Kijk per stap", tekst: "18 → 22 (stijgt), 22 → 25 (stijgt), 25 → 23 (daalt), 23 → 19 (daalt)." },
            { titel: "Patroon herkennen", tekst: "Eerst 2× stijgen tot 25 (top), daarna 2× dalen. Patroon: piek in midden." },
          ],
          woorden: [
            { woord: "lijngrafiek", uitleg: "Grafiek met punten verbonden door een lijn — toont verandering door tijd." },
            { woord: "patroon", uitleg: "Vorm of trend die je herkent." },
          ],
          theorie: "Lijngrafiek-patronen: 'steeds stijgend' / 'steeds dalend' / 'eerst stijgen dan dalen' (piek) / 'eerst dalen dan stijgen' (dal) / 'wisselend'.",
          voorbeelden: [{ type: "stap", tekst: "Temperatuur door dag: vroeg laag, midden hoog, avond weer laag → klassiek 'piek'-patroon." }],
          basiskennis: [{ onderwerp: "Top of dal", uitleg: "Top = hoogste punt midden in. Dal = laagste punt midden in." }],
          niveaus: {
            basis: "Eerst stijgen, dan dalen (piek in midden). A.",
            simpeler: "Tot dag 3 omhoog (25 = piek), daarna omlaag. = A.",
            nogSimpeler: "Op-neer = A.",
          },
        },
        options: ["Eerst stijgen, dan dalen", "Steeds stijgen", "Steeds dalen", "Geen patroon"],
        answer: 0,
        wrongHints: [null, "Klopt — top op dag 3, daarna omlaag.", "Niet — daalt na 25.", "Niet — stijgt eerst.", "Wel patroon zichtbaar."],
      },
      {
        q: "Tabel: ma 22, di 18, wo 26, do 30, vr 24. **Hoeveel meer op donderdag dan dinsdag**?",
        options: ["12", "8", "6", "48"],
        answer: 0,
        wrongHints: [null, "Klopt — 30 − 18.", "Verkeerde 2 dagen vergeleken.", "Verkeerde 2 dagen.", "Optelling, geen verschil."],
      },
      {
        q: "Tabel: ma 12, di 8, wo 18, do 22, vr 30. **Gemiddeld per dag**?",
        options: ["18", "20", "15", "90"],
        answer: 0,
        wrongHints: [null, "Klopt — 90 ÷ 5 = 18.", "Te veel.", "Te weinig.", "Dat is totaal."],
      },
      {
        q: "Staafdiagram laat zien dat **3e klas** 25 leerlingen heeft, **4e klas** 30. Welk type grafiek **vergelijkt het beste**?",
        options: ["Staafdiagram", "Lijngrafiek", "Cirkeldiagram", "Tijdlijn"],
        answer: 0,
        wrongHints: [null, "Klopt — staaf = vergelijken groepen.", "Lijngrafiek toont verandering door tijd.", "Cirkel = verdeling van geheel.", "Niet voor vergelijken aantallen."],
      },
      {
        q: "Lijngrafiek: aantal lezers daalde van 80 naar 50 in 5 jaar. Hoeveel **% afname**?",
        options: ["37,5%", "30%", "50%", "60%"],
        answer: 0,
        wrongHints: [null, "Klopt — 30/80 × 100 = 37,5%.", "Niet — dat is afname in aantal.", "Dat zou betekenen 40 lezers minder.", "Niet — dat is groter dan 100%."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: bereken het verschil", tekst: "Van 80 lezers naar 50 lezers. Verschil = 80 − 50 = **30** lezers afname." },
            { titel: "Stap 2: deel door beginwaarde", tekst: "% afname meet je tov het BEGIN (80, niet 50). Dus: 30 ÷ 80." },
            { titel: "Stap 3: maal 100 voor procent", tekst: "30 ÷ 80 = 0,375. Maal 100 = **37,5%**." },
          ],
          woorden: [
            { woord: "% afname", uitleg: "Hoeveel procent minder dan het begin." },
            { woord: "beginwaarde", uitleg: "Het aantal aan het begin (hier 80) — altijd hierdoor delen." },
          ],
          theorie: "Formule % afname: (verschil ÷ beginwaarde) × 100. Bij toename idem: (verschil ÷ beginwaarde) × 100. Altijd delen door BEGIN, niet door eindwaarde.",
          voorbeelden: [
            { type: "stap", tekst: "Van 100 → 80: verschil 20. 20/100 = 0,20 = 20% afname." },
            { type: "stap", tekst: "Van 50 → 60: verschil 10. 10/50 = 0,20 = 20% toename." },
          ],
          basiskennis: [{ onderwerp: "Cito-truc", uitleg: "Vraag altijd: 'gedeeld door welke waarde?' → de BEGIN-waarde. Niet de kleinste." }],
          niveaus: {
            basis: "% afname = (verschil ÷ beginwaarde) × 100.",
            simpeler: "30 lezers minder van 80. 30/80 = 0,375 = 37,5%.",
            nogSimpeler: "Verschil delen door start, dan × 100.",
          },
        },
      },
      {
        q: "Cirkeldiagram: blauw 35%, rood 25%, groen 25%. **Rest**?",
        options: ["15%", "20%", "10%", "25%"],
        answer: 0,
        wrongHints: [null, "Klopt — 100−35−25−25 = 15.", "Niet juist.", "Te weinig.", "Te veel."],
      },
      {
        q: "Tabel-rij ma=5 di=10 wo=8 do=15 vr=12. **Mediaan** (middelste)?",
        options: ["10", "8", "15", "12"],
        answer: 0,
        wrongHints: [null, "Klopt — gesorteerd 5,8,10,12,15 → midden = 10.", "Tweede laagst.", "Hoogst.", "Tweede hoogst."],
      },
      {
        q: "Welk type grafiek voor **verandering door tijd** (bv. temperatuur over week)?",
        options: ["Lijngrafiek", "Staafdiagram", "Cirkeldiagram", "Geen"],
        answer: 0,
        wrongHints: [null, "Klopt — lijn = trend over tijd.", "Staaf = vergelijken groepen.", "Cirkel = verdeling.", "Wel — lijngrafiek."],
        uitlegPad: {
          stappen: [
            { titel: "Grafiek-type kiezen", tekst: "Voor verandering over tijd → lijngrafiek (punten verbonden, trend zichtbaar)." },
            { titel: "Vergelijking", tekst: "Staafdiagram = vergelijk groepen. Cirkeldiagram = deel-van-geheel. Lijn = verloop." },
          ],
          woorden: [
            { woord: "lijngrafiek", uitleg: "Grafiek met punten op X-Y verbonden door lijnen — toont verloop/trend." },
            { woord: "trend", uitleg: "Patroon over tijd (stijgend, dalend, golvend, stabiel)." },
          ],
          theorie: "Vuistregels: TIJD op horizontale as → lijngrafiek. GROEPEN op horizontaal → staafdiagram. PERCENTAGE-verdeling → cirkeldiagram.",
          voorbeelden: [{ type: "stap", tekst: "Temperatuur over week = lijn. Aantal kinderen per klas = staaf. Hobby-verdeling % = cirkel." }],
          basiskennis: [{ onderwerp: "X-as = onafhankelijk", uitleg: "Tijd, leeftijd, dagen — daar zet je op X-as. Wat je meet komt op Y-as." }],
          niveaus: {
            basis: "Lijngrafiek. A.",
            simpeler: "Verandering over tijd = lijngrafiek. = A.",
            nogSimpeler: "Lijn = A.",
          },
        },
      },
      {
        q: "Tabel: 100/200/300/400/500. Gemiddelde?",
        options: ["300", "250", "350", "1500"],
        answer: 0,
        wrongHints: [null, "Klopt — 1500 ÷ 5.", "Verkeerd berekend.", "Niet juist.", "Dat is totaal."],
      },
      {
        q: "Cirkeldiagram: blauw 25%, geel 25%, **rest** = ?",
        options: ["50%", "25%", "100%", "75%"],
        answer: 0,
        wrongHints: [null, "Klopt — 100-50.", "Niet helft.", "Niet alles.", "Te veel."],
      },
      {
        q: "Staafdiagram: hoogste staaf = ?",
        options: ["Grootste waarde", "Kleinste waarde", "Niets", "Gemiddelde"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tegenovergesteld.", "Wel iets.", "Gemiddelde is lijn-tussenwaarde."],
      },
      {
        q: "**Mediaan** van 5,7,7,8,10?",
        options: ["7", "8", "5", "37"],
        answer: 0,
        wrongHints: [null, "Klopt — middelste na sorteren.", "Niet middelste.", "Laagste.", "Som."],
      },
      {
        q: "Tabel: bedrag €10/€20/€30/€40/€50. **Som**?",
        options: ["€150", "€100", "€50", "€30"],
        answer: 0,
        wrongHints: [null, "Klopt — alles optellen.", "Te weinig.", "Halve som.", "Gemiddelde."],
        uitlegPad: {
          stappen: [
            { titel: "Slim optellen", tekst: "Combineer paartjes: 10+50=60, 20+40=60, 30 over. Som = 60+60+30 = 150." },
            { titel: "Of rechtdoor", tekst: "10+20=30, +30=60, +40=100, +50=150." },
          ],
          woorden: [{ woord: "som", uitleg: "Resultaat van optellen — alles bij elkaar." }],
          theorie: "Cito-truc: paartjes-techniek werkt bij rijen met regelmatige toename (10/20/30...). Tel eindpunten: 10+50 = laatste+eerste.",
          voorbeelden: [{ type: "stap", tekst: "Som 1+2+3+4+5 = (1+5)+(2+4)+3 = 6+6+3 = 15." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "Som groter dan grootste term (50) — klopt." }],
          niveaus: {
            basis: "€150. A.",
            simpeler: "10+20+30+40+50 = 150. = A.",
            nogSimpeler: "150 = A.",
          },
        },
      },
      {
        q: "Cirkeldiagram heeft **3 secties van 33%**. Klopt dat?",
        options: ["Bijna (99%)", "Ja precies", "Nee onmogelijk", "100%"],
        answer: 0,
        wrongHints: [null, "Klopt — exact 33,33% nodig voor 100%.", "Niet exact.", "Wel mogelijk.", "Te weinig."],
      },
    ],
  },

  // STAP 3: Woordenboek + atlas + index
  {
    title: "Woordenboek, atlas + index — ~20 min",
    explanation:
      "Cito test of je weet hoe je **dingen opzoekt** in een boek of atlas.\n\n**Woordenboek**:\nAlle woorden staan **op alfabet** *(A → Z)*.\n• Eerst kijken naar **eerste letter**.\n• Bij gelijke eerste letter → **tweede letter** vergelijken.\n• Etc.\n\n**Voorbeeld — welk woord staat eerder?**\n• **'beest'** staat vóór **'beker'** *(b-e-e- staat vóór b-e-k-)*.\n• **'kat'** staat vóór **'kater'** *(kortere komt eerst als begin gelijk)*.\n• **'tafel'** staat na **'paard'** *(p staat voor t)*.\n\n**Truc** — gebruik **hoofdwoord** boven aan de pagina:\nLinker pagina-hoofdwoord = **eerste** woord op die pagina.\nRechter pagina-hoofdwoord = **laatste** woord op die pagina.\nZit je gezochte woord daartussen? → op deze 2 pagina's.\n\n**Atlas**:\nEen atlas heeft:\n• **Inhoudsopgave** voorin — waar staat welke kaart?\n• **Index** achterin — waar staat welke stad/rivier?\n\n**Voorbeeld — index gebruiken**:\n*'Waar staat Rotterdam?'*\nIndex: \"Rotterdam ... 14 B3\"\n→ Ga naar **bladzijde 14**, vak **B3**.\n\n**Bibliotheek-systeem**:\n• Boeken op alfabet op auteur achternaam.\n• Of op onderwerp-nummer (Dewey, bv. 500 = natuurwetenschappen).\n\n**Inhoudsopgave gebruiken**:\nVoorin een boek/atlas staat een lijst van **hoofdstukken + bladzijde-nummers**:\n• Hoofdstuk 1 — Klimaat — blz 5\n• Hoofdstuk 2 — Bevolking — blz 12\n• etc.\n\n**Index gebruiken**:\nAchterin een boek staat een lijst van **onderwerpen op alfabet** met paginanummers:\n• atoom ... 23, 45\n• bacterie ... 67\n• cel ... 12, 34, 89\n\nZo zoek je snel een onderwerp.\n\n**Cito-vragen**:\n*'Wat doet de index van een atlas?'*\n→ Geeft je het bladzijde-nummer + kaart-vak voor een plaatsnaam.\n\n*'Wat staat in de inhoudsopgave?'*\n→ Een lijst van hoofdstukken met bladzijde-nummers.\n\n**Bron**: voor officiële voorbeelden zie " + examenLink + ".",
    checks: [
      {
        q: "Welk woord staat **eerder** in het woordenboek?",
        options: ["'appel' (vóór 'auto')", "'auto' (vóór 'appel')", "Beide gelijk", "Niet uit te leggen"],
        answer: 0,
        wrongHints: [null, "Klopt — 'a-p-p' staat vóór 'a-u-t'.", "Andersom — kijk naar 2e letter.", "Verschillende woorden.", "Wel — alfabetisch."],
        uitlegPad: {
          stappen: [
            { titel: "Vergelijk letter voor letter", tekst: "Beide woorden beginnen met 'a'. Dan: 'appel' = a-p, 'auto' = a-u. In alfabet: p (16e letter) komt vóór u (21e letter)." },
            { titel: "Conclusie", tekst: "Dus 'appel' staat eerder in woordenboek dan 'auto'." },
          ],
          woorden: [{ woord: "alfabetisch sorteren", uitleg: "Woorden ordenen op letter-volgorde A→Z, eerst 1e letter, dan 2e, etc." }],
          theorie: "Standaard woordenboek-volgorde: vergelijk letter voor letter van links naar rechts. Bij gelijke prefix: kortere woord eerst.",
          voorbeelden: [{ type: "stap", tekst: "boek → bos → brood (b-o-e vs b-o-s vs b-r-o, eerst o-e, dan o-s, dan r)." }],
          basiskennis: [{ onderwerp: "Alfabet-volgorde", uitleg: "A-B-C-D-...-P-Q-R-S-T-U-V-W-X-Y-Z. P komt vóór U." }],
          niveaus: {
            basis: "appel. A.",
            simpeler: "a-p (appel) komt vóór a-u (auto) in alfabet. = A.",
            nogSimpeler: "appel = A.",
          },
        },
      },
      {
        q: "Waar zoek je een **plaatsnaam** in een atlas?",
        options: ["In de index (achterin)", "In hoofdstuk 1", "Op de eerste kaart", "Bij plaatjes"],
        answer: 0,
        wrongHints: [null, "Klopt — achterin staat alfabetische lijst.", "Niet zeker waar plaats staat.", "Eerste kaart hoeft niet je plaats.", "Niet bij plaatjes."],
      },
      {
        q: "Wat staat **voorin** een boek?",
        options: ["Inhoudsopgave (hoofdstukken + pagina's)", "Index", "Register van auteurs", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Index staat achterin.", "Soms maar niet standaard.", "Wel iets — inhoudsopgave."],
      },
      {
        q: "Welk woord staat **eerder** in het woordenboek: 'kat' of 'kater'?",
        options: ["kat", "kater", "Beide gelijk", "Geen van beide"],
        answer: 0,
        wrongHints: [null, "Klopt — kortere komt eerst als begin gelijk.", "Niet — kat staat eerst.", "Niet gelijk.", "Wel — een staat eerst."],
        uitlegPad: {
          stappen: [
            { titel: "Vergelijk letter voor letter", tekst: "k-a-t en k-a-t-e-r. Eerste 3 letters gelijk. Bij 'kat' stopt het woord, bij 'kater' komt nog 'er'." },
            { titel: "Regel: korter eerst", tekst: "Bij gelijk begin staat het kortere woord eerder. Dus 'kat' vóór 'kater'." },
          ],
          woorden: [{ woord: "alfabet", uitleg: "Volgorde A-B-C-D-...-Z gebruikt om dingen te ordenen." }],
          theorie: "In een woordenboek: vergelijk eerste letter, daarna tweede, etc. Bij gelijke prefix: kortere woord eerst.",
          voorbeelden: [{ type: "stap", tekst: "Boek vóór boeken. Tafel vóór tafels." }],
          basiskennis: [{ onderwerp: "Letter voor letter", uitleg: "Niet hele woord vergelijken — letter voor letter, links naar rechts." }],
          niveaus: {
            basis: "kat. A.",
            simpeler: "kat is k-a-t (3 letters), kater is k-a-t-e-r (5 letters). Eerste 3 letters gelijk; bij gelijke prefix staat het kortere woord eerder. = A.",
            nogSimpeler: "kat = A.",
          },
        },
      },
      {
        q: "Waarvoor gebruik je de **inhoudsopgave**?",
        options: ["Snel een hoofdstuk vinden", "Een specifiek woord", "Plaatjes ordenen", "Korter lezen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Daarvoor: index.", "Niet inhoudsopgave.", "Niet doel."],
      },
      {
        q: "In een **atlas** zoek je 'Amsterdam' in de **index**: 'Amsterdam ... 22 D5'. Waar kijk je?",
        options: ["Bladzijde 22, vak D5", "Bladzijde 5, vak D22", "Vak 22 op pagina D5", "Vak A22 op pagina D"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Andere volgorde.", "Andere volgorde.", "Andere combinatie."],
        uitlegPad: {
          stappen: [
            { titel: "Lees de index", tekst: "Atlas-index toont: '[plaatsnaam] [paginanummer] [vakcode]'. Vakcode = letter (kolom) + cijfer (rij)." },
            { titel: "Ga naar pagina", tekst: "'22 D5' = ga naar bladzijde 22, zoek dan kolom D, rij 5." },
          ],
          woorden: [
            { woord: "atlas-index", uitleg: "Alfabetische lijst achterin atlas met plaatsnaam + paginanummer + kaart-vak." },
            { woord: "vakcode", uitleg: "Letter+cijfer combinatie (bv D5) om snel een plek op een kaart te vinden." },
          ],
          theorie: "Volgorde in atlas-index: plaatsnaam, dan pagina, dan vakcode. Eerste cijfer = bladzijde.",
          voorbeelden: [{ type: "stap", tekst: "'Rotterdam ... 14 B3' = blz 14, vak B3 (kolom B, rij 3)." }],
          basiskennis: [{ onderwerp: "Letter vs cijfer", uitleg: "Letter is altijd kolom (horizontaal), cijfer is rij (verticaal)." }],
          niveaus: {
            basis: "Bladzijde 22, vak D5. A.",
            simpeler: "Eerste getal = bladzijde (22). Daarna staat de vakcode (D5). = A.",
            nogSimpeler: "blz 22, vak D5 = A.",
          },
        },
      },
      {
        q: "Welk woord staat **eerder** in woordenboek: 'piano' of 'plant'?",
        options: ["piano", "plant", "Beide gelijk", "Niet te zeggen"],
        answer: 0,
        wrongHints: [null, "Klopt — p-i komt vóór p-l (i komt voor l in alfabet).", "p-l komt later.", "Verschillende woorden.", "Wel te zeggen — alfabetisch."],
      },
      {
        q: "Waarvoor is een **register / index** achter in boek?",
        options: ["Onderwerpen op alfabet met paginanummers", "Inhoudsopgave", "Auteursnamen", "Plaatjes"],
        answer: 0,
        wrongHints: [null, "Klopt — alfabetisch zoekregister.", "Inhoud zit voorin.", "Auteurs op pakket of voorpagina.", "Niet primair."],
      },
      {
        q: "Welk woord staat **eerder** in woordenboek: 'school' of 'sport'?",
        options: ["school", "sport", "Beide gelijk", "Niet te zeggen"],
        answer: 0,
        wrongHints: [null, "Klopt — s-c komt vóór s-p (c voor p in alfabet).", "s-p komt later.", "Niet gelijk.", "Wel — alfabetisch."],
      },
      {
        q: "**Hoofdwoorden** op pagina-bovenkant van woordenboek — wat zijn ze?",
        options: ["Eerste + laatste woord op die pagina", "Alle woorden", "Alleen de titel", "Een lijst"],
        answer: 0,
        wrongHints: [null, "Klopt — handig bij snel zoeken.", "Niet alle.", "Geen titel.", "Niet primair."],
      },
      {
        q: "Welke is de **eerste letter** in alfabet?",
        options: ["A", "B", "Z", "Geen volgorde"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Tweede.", "Laatste.", "Wel volgorde."],
      },
      {
        q: "Welk staat **eerder**: 'rood' of 'paars'?",
        options: ["paars", "rood", "Beide gelijk", "Niet alfabetisch"],
        answer: 0,
        wrongHints: [null, "Klopt — p vóór r.", "Niet — r komt later.", "Niet gelijk.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Vergelijk eerste letter", tekst: "'paars' begint met p (16e letter). 'rood' begint met r (18e letter)." },
            { titel: "Alfabet-volgorde", tekst: "p komt voor r → 'paars' staat eerder." },
          ],
          woorden: [{ woord: "alfabet-positie", uitleg: "Volgorde A=1, B=2, ..., P=16, ..., R=18, ..., Z=26." }],
          theorie: "Bij verschillende eerste letters: kijk welke letter eerder in alfabet komt. Vergelijk: P=16 vs R=18.",
          voorbeelden: [{ type: "stap", tekst: "'appel' vs 'boom': a (1) vs b (2) → appel eerder. 'huis' vs 'kat': h (8) vs k (11) → huis eerder." }],
          basiskennis: [{ onderwerp: "Alfabet onthouden", uitleg: "Tip: leer rijtjes A-G, H-N, O-T, U-Z." }],
          niveaus: {
            basis: "paars (p < r). A.",
            simpeler: "p komt voor r in alfabet. Dus 'paars' eerst. = A.",
            nogSimpeler: "paars = A.",
          },
        },
      },
      {
        q: "Wat is een **woordenboek** voor?",
        options: ["Betekenis + spelling van woorden", "Geschiedenis", "Kaart", "Recept"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Atlas.", "Kookboek."],
      },
      {
        q: "Bij **Van Dale** vind je info over Nederlandse woorden. Dat is een?",
        options: ["Woordenboek", "Atlas", "Encyclopedie", "Roman"],
        answer: 0,
        wrongHints: [null, "Klopt — beroemd NL-woordenboek.", "Kaarten.", "Algemene kennis.", "Verhaal."],
      },
    ],
  },

  // STAP 4: Schema's + stappenplan
  {
    title: "Schema's + stappenplan — ~20 min",
    explanation:
      "Een **schema** geeft veel informatie kort weer met **kaders, pijlen en woorden**.\n\n**Typen schema's**:\n\n**1. Stroomdiagram / stappenplan**\nLaat een **volgorde van stappen** zien.\n• Met **pijlen** tussen kaders.\n• Vaak met **ja/nee-keuzes** *(ruitvorm)*.\n\nVoorbeeld koffie-zetten:\n```\nstart → water koken → koffie in filter → giet water erop → koffie klaar\n```\n\n**2. Boomdiagram**\nLaat een **verdeling van groepen** zien:\n```\nDieren\n├── Zoogdieren\n│   ├── Hond\n│   └── Kat\n└── Vogels\n    ├── Mus\n    └── Adelaar\n```\n\n**3. Vergelijkings-tabel**\nLaat zien wat **overeenkomt en verschilt** tussen 2+ dingen.\n• Bv. fiets vs auto: snelheid, kosten, milieu.\n\n**Cito-truc — schema lezen**:\n• **Volg de pijlen** in de richting waar ze wijzen.\n• Bij **ja/nee**: lees de vraag in de ruit, kies de pijl.\n• **Tel de stappen**.\n\n**Voorbeeld Cito-vraag**:\nSchema toont: 'Stap 1 (water koken) → Stap 2 (filter inzetten) → Stap 3 (koffie scheppen) → Stap 4 (water gieten) → klaar'.\n*'Welke stap komt na 'filter inzetten'?'*\n→ Koffie scheppen *(stap 3)*.\n\n**Stappenplan zelf maken**:\nVoor een doel — bv. 'taart bakken':\n1. Lees recept.\n2. Verzamel ingrediënten.\n3. Meng + kneed.\n4. Bak in oven.\n5. Laat afkoelen.\n\n**Voorbeeld Cito-vraag**:\n*'Welke stap moet eerst?'* → recept lezen. Anders weet je niet wat je nodig hebt.\n\n**Bron**: voor officiële voorbeelden zie " + examenLink + ".",
    checks: [
      {
        q: "Wat is een **stroomdiagram**?",
        options: ["Stappen met pijlen", "Een tabel", "Een kaart", "Een grafiek"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geen stappen-volgorde.", "Geen kaart.", "Niet schema."],
        uitlegPad: {
          stappen: [
            { titel: "Stroomdiagram visueel", tekst: "Een stroomdiagram (flowchart) toont een proces met blokken (stappen) en pijlen (volgorde). Bv. start → 'water koken' → 'thee zetten' → klaar." },
          ],
          woorden: [
            { woord: "stroomdiagram", uitleg: "Schema met stappen, pijlen en eventueel keuzes (ruiten)." },
            { woord: "pijl", uitleg: "Geeft de richting/volgorde aan tussen stappen." },
          ],
          theorie: "Stroomdiagram = visueel stappenplan. Verschilt van tabel (rij/kolom), kaart (geografisch), grafiek (data-vergelijking).",
          voorbeelden: [{ type: "stap", tekst: "Telefoonboom: 'Vraag X? ja → A / nee → B'. Met ruiten voor de vraag." }],
          basiskennis: [{ onderwerp: "Vormen", uitleg: "Rechthoek = stap, ruit = keuze, ovaal/cirkel = start/eind, pijl = verbinding." }],
          niveaus: {
            basis: "Stappen met pijlen. A.",
            simpeler: "Een schema dat 'wat-eerst, wat-daarna' aangeeft met pijlen. = A.",
            nogSimpeler: "Stappen + pijlen = A.",
          },
        },
      },
      {
        q: "Bij **'taart bakken'** — wat doe je **eerst**?",
        options: ["Recept lezen", "Bakken", "Mengen", "Eten"],
        answer: 0,
        wrongHints: [null, "Klopt — zonder recept weet je niets.", "Pas later.", "Pas na ingrediënten.", "Helemaal aan het einde."],
        uitlegPad: {
          stappen: [
            { titel: "Stappenplan-logica", tekst: "Voor elk stappenplan: vraag jezelf 'wat moet ik weten/hebben voor ik kan beginnen?'." },
            { titel: "Recept eerst", tekst: "Zonder recept weet je niet welke ingrediënten, hoeveelheden, of stappen nodig zijn." },
          ],
          woorden: [{ woord: "stappenplan", tekst: "Volgorde van handelingen om een doel te bereiken." }],
          theorie: "Cito-tip: bij volgorde-vragen, denk 'wat is logisch ZONDER het volgende stap?' — kan je bakken zonder recept? Nee.",
          voorbeelden: [{ type: "stap", tekst: "Volgorde taart: 1. Recept lezen → 2. Ingrediënten verzamelen → 3. Mengen → 4. Bakken → 5. Afkoelen → 6. Eten." }],
          basiskennis: [{ onderwerp: "Logica eerst", uitleg: "Stappen die NIETS weten over volgende = beginstappen." }],
          niveaus: {
            basis: "Recept lezen. A.",
            simpeler: "Eerste stap = wat moet ik weten? = Recept lezen. = A.",
            nogSimpeler: "Recept = A.",
          },
        },
      },
      {
        q: "Schema: 'A → B → C → D'. Welke stap komt **na B**?",
        options: ["C", "A", "D", "B"],
        answer: 0,
        wrongHints: [null, "Klopt — pijl wijst van B naar C.", "Komt vóór B.", "Komt later.", "Is zelf."],
      },
      {
        q: "Wat staat in een **vergelijkings-tabel**?",
        options: ["Overeenkomsten + verschillen tussen 2 dingen", "Alleen overeenkomsten", "Alleen verschillen", "Plaatjes"],
        answer: 0,
        wrongHints: [null, "Klopt — beide.", "Niet alleen overeenkomsten.", "Niet alleen verschillen.", "Niet plaatjes."],
      },
      {
        q: "In een **boomdiagram** met 'Dieren → Zoogdieren / Vogels' — wat is **Hond**?",
        options: ["Onder Zoogdieren", "Onder Vogels", "Geen plaats", "Bovenaan"],
        answer: 0,
        wrongHints: [null, "Klopt — Hond = zoogdier.", "Hond is geen vogel.", "Wel plaats.", "Bovenaan staat 'Dieren'."],
      },
      {
        q: "In een **ja/nee-schema** staat **ruit** — wat betekent dat?",
        options: ["Keuze-vraag", "Stap zonder keuze", "Eindpunt", "Pijl"],
        answer: 0,
        wrongHints: [null, "Klopt — ruit = vraag met ja/nee-uitkomsten.", "Stap zonder keuze = kader.", "Eindpunt = afgeronde vorm.", "Pijl = pijl, niet ruit."],
      },
      {
        q: "Stappenplan: 1. Ingrediënten 2. Recept 3. Mengen 4. Bakken. **Welke stap is fout**?",
        options: ["Volgorde 1+2 omgedraaid (recept eerst)", "Stap 4 fout", "Niets fout", "Stap 3"],
        answer: 0,
        wrongHints: [null, "Klopt — recept lezen vóór ingrediënten kopen.", "Bakken hoort als laatste.", "Wel fout.", "Mengen logisch tussen ingredienten en bakken."],
        uitlegPad: {
          stappen: [
            { titel: "Logische volgorde", tekst: "Een stappenplan moet in logische volgorde. Stap 1 moet kunnen WAT MOGELIJK is zonder de andere stappen." },
            { titel: "Recept eerst lezen", tekst: "Hoe weet je WELKE ingrediënten je nodig hebt? Pas als je het RECEPT hebt gelezen. Dus: recept → ingrediënten → mengen → bakken." },
            { titel: "Cito-truc: doe het in je hoofd", tekst: "Loop het stappenplan in je hoofd na alsof je het zelf gaat doen. Bij elke stap: 'kan ik dit nu? Of moet er iets eerder?' Dan zie je de fout." },
          ],
          woorden: [
            { woord: "stappenplan", uitleg: "Lijstje stappen om iets te doen, in volgorde." },
            { woord: "volgorde", uitleg: "Welke stap eerst, welke daarna." },
          ],
          theorie: "Cito-vraag: stappenplannen worden vaak gegeven met 1 fout in de volgorde. Lees ze één voor één en denk: 'kan dit pas NA stap X?' Dan moet stap X eerst.",
          voorbeelden: [
            { type: "stap", tekst: "Goed: Recept → Ingrediënten → Mengen → Bakken." },
            { type: "stap", tekst: "Fout: Ingrediënten → Recept → ... — want zonder recept weet je niet wat je moet kopen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag bij elke stap: 'wat heb ik HIERVOOR nodig?' Dat moet ervoor staan." },
          ],
          niveaus: {
            basis: "Stap met fout = stap die op de verkeerde plek staat in de volgorde.",
            simpeler: "Recept eerst lezen, anders weet je niet wat je nodig hebt.",
            nogSimpeler: "Bedenk volgorde: wat eerst?",
          },
        },
      },
      {
        q: "In boomdiagram 'Vervoer → Auto / Trein / Fiets' — wat **mist**?",
        options: ["Lopen + bus + boot", "Auto's-merken", "Wegen", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt — ook andere vervoermiddelen.", "Subcategorie van auto.", "Niet vervoersmiddel.", "Wel iets — onvolledig."],
      },
      {
        q: "Wat is het **doel** van een stappenplan?",
        options: ["Doel halen door volgorde te volgen", "Mooie tekening maken", "Tijd doden", "Geen doel"],
        answer: 0,
        wrongHints: [null, "Klopt — efficiënt werken.", "Niet primair.", "Tegenovergesteld.", "Wel doel."],
      },
      {
        q: "Schema 'Vraag → ja → X / nee → Y'. Welke vorm gebruik je voor **'Vraag'**?",
        options: ["Ruit", "Rechthoek", "Cirkel", "Pijl"],
        answer: 0,
        wrongHints: [null, "Klopt — ruit = keuze.", "Rechthoek = gewone stap.", "Cirkel = start/eind.", "Pijl = verbinding."],
      },
      {
        q: "In stroomdiagram: welke vorm voor **start of einde**?",
        options: ["Cirkel of ovaal", "Ruit", "Rechthoek", "Driehoek"],
        answer: 0,
        wrongHints: [null, "Klopt — afgerond = start/eind.", "Keuze.", "Stap.", "Niet."],
      },
      {
        q: "Wat is het **voordeel** van schema's?",
        options: ["Veel informatie kort + duidelijk", "Mooi om naar te kijken", "Saai", "Verplicht door school"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet primair.", "Tegenovergesteld.", "Niet."],
      },
      {
        q: "Bij **conflict-oplossen** is welke vorm handig?",
        options: ["Stappenplan (volgorde acties)", "Cirkeldiagram", "Atlas", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Voor verhoudingen.", "Voor plaatsen.", "Wel iets."],
      },
      {
        q: "Schema 'A → ja → B / A → nee → C'. Wat is **A**?",
        options: ["Keuze-vraag", "Eindpunt", "Gewone stap", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt — ruit met ja/nee.", "Niet.", "Geen keuze.", "Wel iets."],
      },
      {
        q: "Stappenplan voor **brand** in huis. Wat **eerst**?",
        options: ["Vluchten + 112 bellen", "Spullen pakken", "Foto's maken", "Niet bewegen"],
        answer: 0,
        wrongHints: [null, "Klopt — veiligheid eerst.", "Te risicovol.", "Verspil geen tijd.", "Onveilig."],
      },
      {
        q: "Boomdiagram: 'Sport → Voetbal / Tennis / Hockey'. Hoeveel **takken**?",
        options: ["3", "1", "4", "0"],
        answer: 0,
        wrongHints: [null, "Klopt — 3 sporten.", "Te weinig.", "Te veel.", "Niet."],
      },
    ],
  },

  // STAP 5: Eind-mix
  {
    title: "Eind-opdracht — studievaardigheden mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: kaart, tabel, woordenboek, schema.\n\nVeel succes!",
    checks: [
      {
        q: "Schaal **1:25.000**. Op kaart **8 cm**. Werkelijkheid?",
        options: ["2 km", "200 m", "20 m", "200 km"],
        answer: 0,
        wrongHints: [null, "Klopt — 8 × 25.000 = 200.000 cm = 2 km.", "Te weinig — controleer cm→km omzetting.", "Veel te weinig.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldigen", tekst: "8 cm × 25.000 (schaalgetal) = 200.000 cm in werkelijkheid." },
            { titel: "Omzetten naar km", tekst: "200.000 cm = 2.000 m = 2 km. (cm ÷ 100 = m, m ÷ 1000 = km)." },
          ],
          woorden: [{ woord: "1:25.000", uitleg: "Wandelkaart-schaal. 1 cm op kaart = 25.000 cm = 250 m in het echt." }],
          theorie: "Cito-schaal-2-stappen: (1) afstand × schaalgetal = cm werkelijk. (2) cm → m → km.",
          voorbeelden: [{ type: "stap", tekst: "1:25.000 = 1 cm = 250 m. 8 cm = 8 × 250 m = 2000 m = 2 km." }],
          basiskennis: [{ onderwerp: "Onthoud", uitleg: "1:25.000 = wandelkaart. 1:50.000 = ANWB-kaart. 1:1.000.000 = atlas." }],
          niveaus: {
            basis: "2 km. A.",
            simpeler: "8 cm × 25.000 = 200.000 cm. 200.000 cm = 2 km. = A.",
            nogSimpeler: "2 km = A.",
          },
        },
      },
      {
        q: "Welk woord staat **eerder** in het woordenboek?",
        options: ["bal", "balk", "balkon", "ballon"],
        answer: 0,
        wrongHints: [null, "Klopt — kortst bij gelijke prefix.", "Andere letter na 'bal'.", "Andere letter na 'bal'.", "Andere letter na 'bal'."],
        uitlegPad: {
          stappen: [
            { titel: "Alle 4 beginnen met 'bal'", tekst: "Vergelijk wat erna komt: bal (niets), balk (k), balkon (k-o-n), ballon (l-o-n)." },
            { titel: "Kortste eerst", tekst: "'bal' stopt direct, geen 4e letter. Bij gelijke prefix staat het kortere woord eerder." },
          ],
          woorden: [{ woord: "prefix", uitleg: "Het stuk waarmee meerdere woorden hetzelfde beginnen (hier: 'bal')." }],
          theorie: "Woordenboek-regel: bij gelijke beginletters wint het korte woord. 'bal' < 'balk' < 'balkon' < 'ballon'.",
          voorbeelden: [{ type: "stap", tekst: "Tussen 'balk' en 'ballon': 'balk' = b-a-l-k, 'ballon' = b-a-l-l. K (11e) vs L (12e). Dus 'balk' eerst." }],
          basiskennis: [{ onderwerp: "Volgorde compleet", uitleg: "bal → balk → balkon → ballon." }],
          niveaus: {
            basis: "bal. A.",
            simpeler: "Alle 4 beginnen met 'bal'. 'bal' is het kortst — staat dus eerst. = A.",
            nogSimpeler: "bal = A.",
          },
        },
      },
      {
        q: "Cirkeldiagram: rood 40%, blauw 30%, geel 20%. **Rest** = ?",
        options: ["10%", "5%", "15%", "25%"],
        answer: 0,
        wrongHints: [null, "Klopt — 100−90.", "Te weinig.", "Te veel.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Tel bekende stukken", tekst: "rood 40 + blauw 30 + geel 20 = 90%." },
            { titel: "Trek van 100% af", tekst: "100% − 90% = 10% rest." },
          ],
          woorden: [{ woord: "cirkeldiagram-100%", uitleg: "Alle stukken samen vormen altijd 100% — de hele cirkel." }],
          theorie: "Cito-truc: bij missende waarde in cirkeldiagram = (100% − som bekende waarden).",
          voorbeelden: [{ type: "stap", tekst: "20 + 35 + ? = 100 → ? = 45." }],
          basiskennis: [{ onderwerp: "Realiteit-check", uitleg: "Het kleinste stuk is meestal 'de rest'. Hier: 10% past." }],
          niveaus: {
            basis: "10% (100 − 90). A.",
            simpeler: "40+30+20=90. 100−90=10. = A.",
            nogSimpeler: "10% = A.",
          },
        },
      },
      {
        q: "Waar zoek je **uitleg over een onderwerp** in een non-fictie boek?",
        options: ["In de index (achterin)", "Op de kaft", "Bij plaatjes", "Op de titelpagina"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geen uitleg op kaft.", "Niet primair.", "Geen index."],
      },
      {
        q: "Tabel-totaal: 5+8+12+15+10 = ?",
        options: ["50", "45", "55", "40"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Te weinig."],
      },
      {
        q: "Schema: 'start → A → ja → B → klaar'. Wat is **B**?",
        options: ["Een vervolg-stap", "Het einde", "Een keuze", "Onbekend"],
        answer: 0,
        wrongHints: [null, "Klopt — komt vóór 'klaar'.", "'Klaar' is het einde.", "Niet noodzakelijk keuze.", "Wel duidelijk."],
      },
      {
        q: "Op een kompas: tussen **W en Z** ligt welke richting?",
        options: ["ZW (zuid-west)", "NW", "NO", "ZO"],
        answer: 0,
        wrongHints: [null, "Klopt — tussen west en zuid.", "Tussen N en W.", "Tussen N en O.", "Tussen Z en O."],
      },
      {
        q: "Lijngrafiek: bezoek dierentuin **stijgt** van 100 naar 250 in 3 jaar. Per jaar gemiddeld?",
        options: ["50", "150", "75", "350"],
        answer: 0,
        wrongHints: [null, "Klopt — (250-100)÷3 = 50 stijging per jaar.", "Dat is totale stijging.", "Niet juist berekend.", "Dat is som."],
      },
      {
        q: "Wat doe je **eerst** als je een onderwerp in een dik boek wilt vinden?",
        options: ["Index achterin checken op onderwerp", "Boek hele lezen", "Plaatjes bekijken", "Eerste hoofdstuk"],
        answer: 0,
        wrongHints: [null, "Klopt — directe sprong naar pagina.", "Veel te lang.", "Niet effectief.", "Niet als je specifiek zoekt."],
      },
      {
        q: "Tabel: bezoekers maandag-zondag: 20/25/22/30/45/60/40. Welke dag **piek**?",
        options: ["zaterdag", "vrijdag", "zondag", "donderdag"],
        answer: 0,
        wrongHints: [null, "Klopt — 60 hoogst.", "45, niet hoogst.", "40.", "30."],
      },
      {
        q: "**Atlas**-vraag: in welk **werelddeel** ligt Egypte?",
        options: ["Afrika", "Azië", "Europa", "Amerika"],
        answer: 0,
        wrongHints: [null, "Klopt — Noord-Afrika.", "Wel grens-buur via Sinaï maar Egypte = Afrika.", "Te ver.", "Te ver."],
        uitlegPad: {
          stappen: [
            { titel: "Egypte op kaart", tekst: "Egypte ligt in het **noordoosten van Afrika**, met de Nijl-rivier en de Middellandse Zee als noordgrens." },
            { titel: "Sinaï-misverstand", tekst: "Het kleine Sinaï-schiereiland van Egypte raakt geografisch aan Azië, maar Egypte als land wordt tot **Afrika** gerekend." },
          ],
          woorden: [
            { woord: "werelddeel", uitleg: "Een van de 7 grote continenten: Afrika/Azië/Europa/Noord-Amerika/Zuid-Amerika/Oceanië/Antarctica." },
            { woord: "Sinaï", uitleg: "Schiereiland van Egypte dat oostelijk van het Suezkanaal ligt — geografisch Azië." },
          ],
          theorie: "Cito-aardrijkskunde-truc: lees vraag goed. 'In welk werelddeel ligt land X?' = primair werelddeel.",
          voorbeelden: [{ type: "stap", tekst: "Turkije: deels Azië, deels Europa, primair Azië. Rusland: deels Europa, deels Azië, vaak beide genoemd." }],
          basiskennis: [{ onderwerp: "Buurlanden Egypte", uitleg: "Egypte grenst aan: Libië (W), Sudan (Z), Israël (NO). Plus Middellandse Zee + Rode Zee." }],
          niveaus: {
            basis: "Afrika. A.",
            simpeler: "Egypte ligt in Noord-Afrika met de Nijl. = A.",
            nogSimpeler: "Afrika = A.",
          },
        },
      },
      {
        q: "Schaal **1:75.000**. Op kaart **4 cm**. In het echt (in km)?",
        options: ["3 km", "300 m", "30 km", "0,3 km"],
        answer: 0,
        wrongHints: [null, "Klopt — 4 × 75.000 = 300.000 cm = 3 km.", "Te weinig — controleer cm→km.", "Te veel.", "Te weinig."],
      },
      {
        q: "Welk werelddeel: **Rusland**?",
        options: ["Europa + Azië (beide)", "Alleen Azië", "Alleen Europa", "Amerika"],
        answer: 0,
        wrongHints: [null, "Klopt — grootste deel Azië, westelijk Europa.", "Niet alleen.", "Niet alleen.", "Niet."],
      },
      {
        q: "Inhoudsopgave staat **voorin** of **achterin** boek?",
        options: ["Voorin", "Achterin", "Midden", "Beide"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Index = achterin.", "Niet.", "Twee aparte dingen."],
      },
      {
        q: "Schaal **1:500.000**. Op kaart **6 cm**. Werkelijk?",
        options: ["30 km", "300 m", "3 km", "30 m"],
        answer: 0,
        wrongHints: [null, "Klopt — 6 × 500.000 = 3 mln cm = 30 km.", "Veel te weinig.", "Te weinig.", "Veel te weinig."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const doorstroomtoetsStudievaardighedenG8 = {
  id: "doorstroomtoets-studievaardigheden-g8",
  title: "Doorstroomtoets — studievaardigheden groep 8 (pilot)",
  emoji: "🗺️",
  level: "groep8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Doorstroomtoets-voorbereiding (studievaardigheden)",
  prerequisites: [
    { id: "kaartlezen-po", title: "Kaartlezen", niveau: "po-1F" },
    { id: "tabellen-grafieken", title: "Tabellen + grafieken", niveau: "po-1F" },
    { id: "schemas-stappenplannen-po", title: "Schema's en stappenplannen", niveau: "po-1F" },
  ],
  intro:
    "Doorstroomtoets-pilot voor studievaardigheden — kaart + schaal, tabel + grafiek, woordenboek + atlas + index, schema's + stappenplannen. Eigen oefenvragen in stijl van Cito/IEP. ~100 min totaal (5× ~20 min) — splits gerust in 5 dagelijkse kwartier-sessies.",
  triggerKeywords: [
    "doorstroomtoets", "cito", "groep 8", "studievaardigheden",
    "schaal", "kaartlezen", "atlas", "index", "inhoudsopgave",
    "woordenboek", "alfabet", "schema", "stroomdiagram",
    "tabel", "grafiek",
  ],
  chapters,
  steps,
};

export default doorstroomtoetsStudievaardighedenG8;
