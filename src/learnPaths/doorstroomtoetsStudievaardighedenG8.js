// Leerpad: Doorstroomtoets — studievaardigheden groep 8 (pilot).
// 5 stappen van ~15 min met eigen oefenvragen "in stijl van" Cito/IEP.
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
    title: "Kaart + schaal lezen — ~15 min",
    explanation:
      "**Studievaardigheden bij Cito** test of je informatie kunt **opzoeken en gebruiken**. Dat kan op een kaart, in een tabel, in een atlas, of via een schema.\n\n**Kaarten lezen — wat moet je kennen?**\n\n**1. Schaal**\n• **1 : 100.000** = 1 cm op kaart = 100.000 cm in het echt = 1 km.\n• **1 : 50.000** = 1 cm = 500 m = 0,5 km.\n• **1 : 25.000** = 1 cm = 250 m = 0,25 km.\n\n**Truc**: schaal omrekenen → deel door 100 *(cm → m)*. Dan door 1000 *(m → km)*.\n\n**Voorbeeld**:\n*'Schaal 1:50.000. Op de kaart is een weg 4 cm. Hoeveel km in werkelijkheid?'*\n• 4 × 50.000 = 200.000 cm = 2000 m = **2 km**.\n\n**2. Windrichting**\n• Op de **kompasroos** zie je N(oord), O(ost), Z(uid), W(est).\n• **NO** = noord-oost (tussen N en O).\n• Veel kaarten: noord boven, oost rechts, zuid onder, west links.\n\n**3. Legenda**\nElke kaart heeft een **legenda** *(tekst-box met symbolen-uitleg)*:\n• Blauwe lijn = rivier of weg met water.\n• Bruine vlek = berg of heuvel.\n• Groene vlek = bos of park.\n• Stippellijn = wandelpad of grens.\n• Driehoek met getal = hoogtepunt *(bv. 312 m boven NAP)*.\n\n**4. Coördinaten**\nKaarten in atlas hebben vakken zoals **A4** of **C2**:\n• Letter = horizontale kolom *(boven)*.\n• Cijfer = verticale rij *(opzij)*.\n\n**Voorbeeld Cito-vraag**:\n*'In welk vak ligt de stad Groningen?'* → kijk in legend + tel kolommen/rijen.\n\n**Bron**: voor officiële voorbeelden zie " + examenLink + ".",
    svg: overzichtSvg(),
    checks: [
      {
        q: "Schaal **1:100.000**. **3 cm** op kaart = ... in werkelijkheid?",
        options: ["3 km", "300 m", "30 m", "30 km"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1 cm = 1 km bij deze schaal.", "Te weinig.", "Te veel — controleer 3 × 1 km."],
      },
      {
        q: "Wat staat in de **legenda** van een kaart?",
        options: ["Uitleg van de symbolen + kleuren", "De schaal", "Hoeveelheid plaatsen", "De maker"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Schaal staat meestal apart.", "Niet legenda.", "Soms in colofon, niet legenda."],
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
      },
    ],
  },

  // STAP 2: Tabel + grafiek
  {
    title: "Tabel + grafiek lezen — ~15 min",
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
      },
    ],
  },

  // STAP 3: Woordenboek + atlas + index
  {
    title: "Woordenboek, atlas + index — ~15 min",
    explanation:
      "Cito test of je weet hoe je **dingen opzoekt** in een boek of atlas.\n\n**Woordenboek**:\nAlle woorden staan **op alfabet** *(A → Z)*.\n• Eerst kijken naar **eerste letter**.\n• Bij gelijke eerste letter → **tweede letter** vergelijken.\n• Etc.\n\n**Voorbeeld — welk woord staat eerder?**\n• **'beest'** staat vóór **'beker'** *(b-e-e- staat vóór b-e-k-)*.\n• **'kat'** staat vóór **'kater'** *(kortere komt eerst als begin gelijk)*.\n• **'tafel'** staat na **'paard'** *(p staat voor t)*.\n\n**Truc** — gebruik **hoofdwoord** boven aan de pagina:\nLinker pagina-hoofdwoord = **eerste** woord op die pagina.\nRechter pagina-hoofdwoord = **laatste** woord op die pagina.\nZit je gezochte woord daartussen? → op deze 2 pagina's.\n\n**Atlas**:\nEen atlas heeft:\n• **Inhoudsopgave** voorin — waar staat welke kaart?\n• **Index** achterin — waar staat welke stad/rivier?\n\n**Voorbeeld — index gebruiken**:\n*'Waar staat Rotterdam?'*\nIndex: \"Rotterdam ... 14 B3\"\n→ Ga naar **bladzijde 14**, vak **B3**.\n\n**Bibliotheek-systeem**:\n• Boeken op alfabet op auteur achternaam.\n• Of op onderwerp-nummer (Dewey, bv. 500 = natuurwetenschappen).\n\n**Inhoudsopgave gebruiken**:\nVoorin een boek/atlas staat een lijst van **hoofdstukken + bladzijde-nummers**:\n• Hoofdstuk 1 — Klimaat — blz 5\n• Hoofdstuk 2 — Bevolking — blz 12\n• etc.\n\n**Index gebruiken**:\nAchterin een boek staat een lijst van **onderwerpen op alfabet** met paginanummers:\n• atoom ... 23, 45\n• bacterie ... 67\n• cel ... 12, 34, 89\n\nZo zoek je snel een onderwerp.\n\n**Cito-vragen**:\n*'Wat doet de index van een atlas?'*\n→ Geeft je het bladzijde-nummer + kaart-vak voor een plaatsnaam.\n\n*'Wat staat in de inhoudsopgave?'*\n→ Een lijst van hoofdstukken met bladzijde-nummers.\n\n**Bron**: voor officiële voorbeelden zie " + examenLink + ".",
    checks: [
      {
        q: "Welk woord staat **eerder** in het woordenboek?",
        options: ["'appel' (vóór 'auto')", "'auto' (vóór 'appel')", "Beide gelijk", "Niet uit te leggen"],
        answer: 0,
        wrongHints: [null, "Klopt — 'a-p-p' staat vóór 'a-u-t'.", "Andersom.", "Niet — appel eerst.", "Wel uit te leggen — alfabetisch."],
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
        wrongHints: [null, "Klopt — eerst paginanummer, dan vak (kolom-letter + rij-cijfer).", "Niet — paginanummer eerst.", "Vakcode = letter+cijfer.", "Vak heet niet zo."],
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
    ],
  },

  // STAP 4: Schema's + stappenplan
  {
    title: "Schema's + stappenplan — ~15 min",
    explanation:
      "Een **schema** geeft veel informatie kort weer met **kaders, pijlen en woorden**.\n\n**Typen schema's**:\n\n**1. Stroomdiagram / stappenplan**\nLaat een **volgorde van stappen** zien.\n• Met **pijlen** tussen kaders.\n• Vaak met **ja/nee-keuzes** *(ruitvorm)*.\n\nVoorbeeld koffie-zetten:\n```\nstart → water koken → koffie in filter → giet water erop → koffie klaar\n```\n\n**2. Boomdiagram**\nLaat een **verdeling van groepen** zien:\n```\nDieren\n├── Zoogdieren\n│   ├── Hond\n│   └── Kat\n└── Vogels\n    ├── Mus\n    └── Adelaar\n```\n\n**3. Vergelijkings-tabel**\nLaat zien wat **overeenkomt en verschilt** tussen 2+ dingen.\n• Bv. fiets vs auto: snelheid, kosten, milieu.\n\n**Cito-truc — schema lezen**:\n• **Volg de pijlen** in de richting waar ze wijzen.\n• Bij **ja/nee**: lees de vraag in de ruit, kies de pijl.\n• **Tel de stappen**.\n\n**Voorbeeld Cito-vraag**:\nSchema toont: 'Stap 1 (water koken) → Stap 2 (filter inzetten) → Stap 3 (koffie scheppen) → Stap 4 (water gieten) → klaar'.\n*'Welke stap komt na 'filter inzetten'?'*\n→ Koffie scheppen *(stap 3)*.\n\n**Stappenplan zelf maken**:\nVoor een doel — bv. 'taart bakken':\n1. Lees recept.\n2. Verzamel ingrediënten.\n3. Meng + kneed.\n4. Bak in oven.\n5. Laat afkoelen.\n\n**Voorbeeld Cito-vraag**:\n*'Welke stap moet eerst?'* → recept lezen. Anders weet je niet wat je nodig hebt.\n\n**Bron**: voor officiële voorbeelden zie " + examenLink + ".",
    checks: [
      {
        q: "Wat is een **stroomdiagram**?",
        options: ["Stappen met pijlen", "Een tabel", "Een kaart", "Een grafiek"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geen stappen-volgorde.", "Geen kaart.", "Niet schema."],
      },
      {
        q: "Bij **'taart bakken'** — wat doe je **eerst**?",
        options: ["Recept lezen", "Bakken", "Mengen", "Eten"],
        answer: 0,
        wrongHints: [null, "Klopt — zonder recept weet je niets.", "Pas later.", "Pas na ingrediënten.", "Helemaal aan het einde."],
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
        wrongHints: [null, "Klopt — 8 × 25.000 = 200.000 cm = 2 km.", "Te weinig.", "Veel te weinig.", "Te veel."],
      },
      {
        q: "Welk woord staat **eerder** in het woordenboek?",
        options: ["bal", "balk", "balkon", "ballon"],
        answer: 0,
        wrongHints: [null, "Klopt — kortst bij gelijke prefix.", "Te lang.", "Te lang.", "Te lang."],
      },
      {
        q: "Cirkeldiagram: rood 40%, blauw 30%, geel 20%. **Rest** = ?",
        options: ["10%", "5%", "15%", "25%"],
        answer: 0,
        wrongHints: [null, "Klopt — 100−90.", "Te weinig.", "Te veel.", "Te veel."],
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
    "Doorstroomtoets-pilot voor studievaardigheden — kaart + schaal, tabel + grafiek, woordenboek + atlas + index, schema's + stappenplannen. Eigen oefenvragen in stijl van Cito/IEP. ~75 min (5× ~15 min).",
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
