// Leerpad: Doorstroomtoets — taal groep 8 (pilot).
// 4 stappen van ~20 min met eigen vragen "in stijl van" Cito/IEP. Géén
// letterlijk overgenomen vragen — auteursrechtelijke schoonheid.
// Externe link naar Cito's gratis voorbeeldopgavenboekje voor "echte"
// oefenstof.
// Parallel met doorstroomtoetsRekenenG8.js (zelfde DNA).

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  vraag: "#42a5f5",
  taal: "#ba68c8",
};

const stepEmojis = ["📖", "🧠", "✏️", "🏆"];

const chapters = [
  { letter: "A", title: "Woordenschat", emoji: "📖", from: 0, to: 0 },
  { letter: "B", title: "Begrijpend lezen", emoji: "🧠", from: 1, to: 1 },
  { letter: "C", title: "Spelling", emoji: "✏️", from: 2, to: 2 },
  { letter: "D", title: "Taalverzorging — gemixt", emoji: "🏆", from: 3, to: 3 },
];

function overzichtSvg() {
  return `<svg viewBox="0 0 320 220">
<rect x="0" y="0" width="320" height="220" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">DOORSTROOMTOETS — TAAL</text>
<text x="160" y="40" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">~70 vragen in 90 min — groep 8 begin februari</text>

<rect x="20" y="55" width="135" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="87" y="75" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">📖 WOORDENSCHAT</text>
<text x="87" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">moeilijke woorden</text>
<text x="87" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">synoniemen · context</text>

<rect x="165" y="55" width="135" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="232" y="75" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">🧠 BEGRIJPEND</text>
<text x="232" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">tekst lezen</text>
<text x="232" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">hoofdgedachte</text>

<rect x="20" y="120" width="135" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="87" y="140" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">✏️ SPELLING</text>
<text x="87" y="157" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">d/t · ei/ij · au/ou</text>
<text x="87" y="169" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">samengestelde woorden</text>

<rect x="165" y="120" width="135" height="55" rx="8" fill="${COLORS.paper}" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="232" y="140" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">🏆 TAALVERZ.</text>
<text x="232" y="157" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">interpunctie</text>
<text x="232" y="169" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">leestekens · zinnen</text>

<text x="160" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Voor échte Cito-voorbeelden: zie externe PDF onder elke stap</text>
</svg>`;
}

const examenLink = "[Cito's gratis voorbeeldopgavenboekje](https://cito.nl/media/41vbqo2t/lib_doorstroomtoets_voorbeeldopgavenboekje.pdf)";

const steps = [
  // STAP 1: Woordenschat (~20 min)
  {
    title: "Woordenschat — ~20 min",
    explanation:
      "**Wat verwacht je op de Doorstroomtoets?**\n\nBij taal krijg je vaak 10-15 woordenschatvragen. De toets test:\n\n• **Wat betekent een moeilijk woord**? *(bv. 'verlamd' — kan zich niet bewegen)*\n• **Welke uitspraak hoort bij een woord** in een tekst? *(context-vraag)*\n• **Welk woord past in een zin** (synoniem-vraag)? *(bv. 'opvallend' = 'in het oog springend')*\n\n**Cito-truc 1 — context geeft de hint**:\nLees het hele zinnetje, niet alleen het woord. Vaak staat de betekenis vlak vóór of na het woord.\n\nVoorbeeld: *'Iedereen was **stomverbaasd** toen de poes het deurtje opende.'*\n→ Stomverbaasd = heel erg verbaasd, want het was iets bijzonders.\n\n**Cito-truc 2 — eliminatie**:\nBij 4 keuzes: streep 2 antwoorden door die zeker fout zijn. Dan heb je 50% kans, dat is veel beter dan gokken.\n\n**Cito-truc 3 — woordfamilies**:\n• 'verlamd' lijkt op 'lam' = niet kunnen bewegen.\n• 'onbarmhartig' = 'on' + 'barmhartig' (vriendelijk-meelevend) = niet meelevend, hard.\n\n**Bron**: dit pad bevat eigen oefenvragen in stijl van Cito/IEP. Voor officiële voorbeelden zie " + examenLink + ".\n\n**Klaar voor 5 oefenvragen?**",
    svg: overzichtSvg(),
    checks: [
      {
        q: "*'De jongen rende **buiten adem** naar huis.'* Wat betekent **buiten adem**?",
        options: ["Zo hard gerend dat je nauwelijks kunt ademen", "Buiten lopen om adem te halen", "Stil staan", "Zonder adem te halen"],
        answer: 0,
        wrongHints: [null, "Letterlijk lijkt het zo, maar het is een uitdrukking — hij rent juist hard.", "Hij rent. Stil staan past niet.", "Niet ademen is sterven. Hier rent hij hard."],
      },
      {
        q: "Welk woord is een **synoniem** van **'enorm'**?",
        options: ["Heel groot", "Beetje klein", "Snel", "Stil"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Andere dimensie.", "Andere dimensie."],
        uitlegPad: {
          stappen: [
            { titel: "Synoniem = zelfde betekenis", tekst: "Een synoniem is een ander woord met (bijna) dezelfde betekenis. 'Enorm' = heel groot." },
          ],
          woorden: [{ woord: "synoniem", uitleg: "Woord dat (bijna) hetzelfde betekent als een ander woord." }],
          theorie: "Synoniemen zijn handig voor afwisseling in tekst. Cito vraagt vaak: 'welk woord is hetzelfde als X?'",
          voorbeelden: [{ type: "stap", tekst: "blij = vrolijk. snel = vlug. mooi = prachtig. boos = woedend." }],
          basiskennis: [{ onderwerp: "Tegenovergesteld", uitleg: "Het tegenovergestelde van een synoniem is een 'antoniem' — woord met juist andere betekenis." }],
          niveaus: {
            basis: "Heel groot. A.",
            simpeler: "Enorm betekent zelfde als 'heel groot'. = A.",
            nogSimpeler: "Heel groot = A.",
          },
        },
      },
      {
        q: "*'Het **verlamde** dier kon niet meer lopen.'* Wat betekent verlamd?",
        options: ["Niet kunnen bewegen", "Heel snel", "Erg blij", "Heel klein"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — verlamd = juist niet bewegen.", "Niet bewegen heeft niets met blij te maken.", "Niet bewegen heeft niets met klein te maken."],
        uitlegPad: {
          stappen: [
            { titel: "Context geeft betekenis", tekst: "De zin zegt: 'kon niet meer lopen'. Dus 'verlamd' moet 'niet kunnen bewegen' betekenen." },
          ],
          woorden: [{ woord: "verlamd", uitleg: "Niet meer kunnen bewegen — door ziekte of ongeluk." }],
          theorie: "Bij woordenschatvragen geeft de zin vaak een hint over wat een woord betekent.",
          voorbeelden: [{ type: "stap", tekst: "'Verlamd' lijkt op 'lam' = niet kunnen bewegen." }],
          basiskennis: [{ onderwerp: "Lees de hele zin", uitleg: "Niet alleen het woord — de zin om het woord heen geeft hints." }],
          niveaus: {
            basis: "Niet kunnen bewegen. A.",
            simpeler: "De zin zegt dat het dier niet meer kan lopen. Verlamd = niet bewegen. = A.",
            nogSimpeler: "Niet bewegen = A.",
          },
        },
      },
      {
        q: "Welk woord betekent **hetzelfde als** **'tevreden'**?",
        options: ["Blij met de situatie", "Boos", "Verbaasd", "Bang"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Ander gevoel.", "Ander gevoel."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent 'tevreden'?", tekst: "Tevreden = blij met hoe iets gegaan is. Geen klacht. Voorbeeld: tevreden met je rapport." },
          ],
          woorden: [{ woord: "tevreden", uitleg: "Blij met situatie, geen klacht, akkoord." }],
          theorie: "Bij synoniem-vraag: kijk welke optie hetzelfde gevoel/idee uitdrukt. Tevreden is positief = uitsluit negatieve woorden zoals boos/bang.",
          voorbeelden: [{ type: "stap", tekst: "tevreden ↔ ontevreden. blij ↔ verdrietig. rustig ↔ druk." }],
          basiskennis: [{ onderwerp: "Positief vs negatief", uitleg: "Sorteer eerst opties: welke zijn positief? Tevreden is positief, dus zoek positief synoniem." }],
          niveaus: {
            basis: "Blij met situatie. A.",
            simpeler: "Tevreden = blij + akkoord. Optie A 'Blij met situatie' = juist. = A.",
            nogSimpeler: "Blij = A.",
          },
        },
      },
      {
        q: "*'De docent gaf een **toelichting** bij de som.'* Wat is een toelichting?",
        options: ["Een uitleg", "Een straf", "Een spel", "Een boek"],
        answer: 0,
        wrongHints: [null, "Niet — toelichting is positief/neutraal.", "Geen activiteit.", "Geen boek."],
        uitlegPad: {
          stappen: [
            { titel: "Woordfamilie", tekst: "Toelichting komt van 'toelichten' = licht werpen op iets, helderder maken." },
            { titel: "Context-hint", tekst: "'De docent gaf een toelichting bij de som' = de docent legde de som uit. Klopt met 'uitleg'." },
          ],
          woorden: [{ woord: "toelichting", uitleg: "Een uitleg of verduidelijking — extra info om iets beter te begrijpen." }],
          theorie: "Cito-truc bij moeilijke woorden: kijk naar stam ('licht' van 'verlichten') en context (wat past in de zin?).",
          voorbeelden: [{ type: "stap", tekst: "'Hij gaf een toelichting bij zijn keuze' = hij legde uit waarom hij koos." }],
          basiskennis: [{ onderwerp: "Stam: licht", uitleg: "'Licht' kan ook 'helder/duidelijk' betekenen. Toelichten = duidelijk maken." }],
          niveaus: {
            basis: "Een uitleg. A.",
            simpeler: "Toelichting = uitleg. De docent gaf uitleg bij de som. = A.",
            nogSimpeler: "Uitleg = A.",
          },
        },
      },
      {
        q: "*'Zij was **onverstoorbaar** tijdens de toets.'* Wat betekent onverstoorbaar?",
        options: ["Rustig en niet snel uit balans", "Boos", "Verdwaald", "Onhandig"],
        answer: 0,
        wrongHints: [null, "Niet de juiste richting.", "Geen verband.", "Ander gevoel."],
        uitlegPad: {
          stappen: [
            { titel: "Voorvoegsel 'on-'", tekst: "'On-' voor een woord betekent meestal 'niet'. Onverstoorbaar = NIET verstoorbaar = niet uit balans te brengen." },
            { titel: "Stam 'verstoren'", tekst: "Verstoren = onderbreken/uit-orde-brengen. Onverstoorbaar = kan niet onderbroken worden." },
          ],
          woorden: [{ woord: "onverstoorbaar", uitleg: "Rustig en stabiel, niet uit balans door geluid of stress." }],
          theorie: "Cito-truc 'on-' voorvoegsel: ontkenning. Bekwaam → onbekwaam. Mogelijk → onmogelijk. Verstoorbaar → onverstoorbaar.",
          voorbeelden: [{ type: "stap", tekst: "'De kapitein bleef onverstoorbaar tijdens de storm' = hij bleef kalm onder zware omstandigheden." }],
          basiskennis: [{ onderwerp: "Toets-context", uitleg: "'Tijdens de toets' = stresssituatie. Onverstoorbaar past = rustig blijven." }],
          niveaus: {
            basis: "Rustig en niet uit balans. A.",
            simpeler: "On- = niet. Niet-verstoorbaar = niet uit balans. = A.",
            nogSimpeler: "Rustig = A.",
          },
        },
      },
      {
        q: "Welk woord is een **tegenstelling** van **'genereus'**?",
        options: ["Gierig", "Vriendelijk", "Groot", "Snel"],
        answer: 0,
        wrongHints: [null, "Lijkt op genereus.", "Niet over geven/karakter.", "Andere dimensie."],
      },
      {
        q: "*'De situatie was uiterst **precair**.'* Wat betekent precair?",
        options: ["Onzeker / gevaarlijk", "Saai", "Vrolijk", "Druk"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Andere richting."],
        uitlegPad: {
          stappen: [
            { titel: "Moeilijk woord", tekst: "'Precair' is een formeel woord. Komt uit het Latijn (precarius = afhankelijk van gunst). In NL: onzeker, riskant, gevaarlijk." },
          ],
          woorden: [{ woord: "precair", uitleg: "Onzeker, riskant, kwetsbaar — situatie die snel kan misgaan." }],
          theorie: "Cito-tip: bij onbekend woord, kijk naar de context. 'Uiterst' geeft aan dat het sterk is — pakt geen 'saai' of 'vrolijk'.",
          voorbeelden: [{ type: "stap", tekst: "'De zieke baby's gezondheid was precair' = ernstige zorg. Daarom 'onzeker/gevaarlijk' = A." }],
          basiskennis: [{ onderwerp: "Context-hint", uitleg: "'Uiterst precair' = heel onzeker. 'Uiterst' versterkt = niet positief." }],
          niveaus: {
            basis: "Onzeker / gevaarlijk. A.",
            simpeler: "Precair = riskant. Een precaire situatie = situatie waar snel iets mis kan gaan. = A.",
            nogSimpeler: "Onzeker = A.",
          },
        },
      },
      {
        q: "*'De vergadering werd door zijn **inmenging** verstoord.'* Wat is inmenging?",
        options: ["Bemoeien met iets dat je niet aangaat", "Hulp bieden", "Op tijd komen", "Vrolijk zijn"],
        answer: 0,
        wrongHints: [null, "Wel kan, maar 'inmenging' is meer negatief.", "Geen verband.", "Geen verband."],
        uitlegPad: {
          stappen: [
            { titel: "Stam analyse", tekst: "Inmenging = 'in' + 'mengen' = ergens in mengen waar je niet bij hoort. Negatieve connotatie." },
            { titel: "Context-hint", tekst: "'Verstoord' versterkt het negatieve = bemoeien dat hindert." },
          ],
          woorden: [
            { woord: "inmenging", uitleg: "Zich bemoeien met iets dat je niet aangaat — meestal ongewenst." },
            { woord: "connotatie", uitleg: "Bijbetekenis of gevoelswaarde van een woord (positief/negatief/neutraal)." },
          ],
          theorie: "Cito-truc: woord-context geeft gevoel. 'Verstoord' is negatief → kies negatieve betekenis voor inmenging.",
          voorbeelden: [{ type: "stap", tekst: "'Inmenging in buitenlandse politiek' = ander land mengt zich (negatief). 'Inmenging van leerkracht' = leerkracht bemoeit zich ongewenst." }],
          basiskennis: [{ onderwerp: "Tegenstelling", uitleg: "Inmenging ↔ afzijdig blijven / je niet ermee bemoeien." }],
          niveaus: {
            basis: "Bemoeien met wat je niet aangaat. A.",
            simpeler: "In + mengen = ergens in mengen waar het niet hoort. = A.",
            nogSimpeler: "Bemoeien = A.",
          },
        },
      },
      {
        q: "Welk woord betekent **hetzelfde als** **'gehaast'**?",
        options: ["Snel + gestrest", "Rustig", "Verveeld", "Voldoening"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Geen verband."],
        uitlegPad: {
          stappen: [
            { titel: "Stam herkennen", tekst: "Gehaast komt van 'haast' = grote spoed/snel-doen-druk." },
          ],
          woorden: [{ woord: "gehaast", uitleg: "Onder tijdsdruk, snel-snel, gestrest." }],
          theorie: "Tijdsdruk-woorden in NL: gehaast / overhaast / haastig / met spoed. Alle = niet rustig.",
          voorbeelden: [{ type: "stap", tekst: "'Hij liep gehaast naar de tram' = hij rende bijna omdat hij laat was." }],
          basiskennis: [{ onderwerp: "Tegenstellingen", uitleg: "Gehaast ↔ rustig / kalm / op je gemak." }],
          niveaus: {
            basis: "Snel + gestrest. A.",
            simpeler: "Gehaast = haast hebben = snel + gestrest. = A.",
            nogSimpeler: "Snel = A.",
          },
        },
      },
      {
        q: "*'De **moedige** soldaat redde 3 mensen.'* Wat betekent moedig?",
        options: ["Dapper, niet bang", "Bang", "Snel", "Sterk"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Andere eigenschap.", "Wel een kwaliteit maar niet primair 'moedig'."],
        uitlegPad: {
          stappen: [
            { titel: "Stam 'moed'", tekst: "Moedig komt van 'moed' = durven, niet bang zijn. Iemand met moed durft iets gevaarlijks." },
            { titel: "Context", tekst: "Soldaat redde 3 mensen → dat vraagt moed (gevaar trotseren)." },
          ],
          woorden: [{ woord: "moedig", uitleg: "Dapper, durft iets gevaarlijks, niet bang." }],
          theorie: "Cito-strategie bij woord met '-ig' achtervoegsel: kijk naar de stam vóór '-ig'. Moed-ig = met moed. Speel-s = met speel.",
          voorbeelden: [{ type: "stap", tekst: "Soortgelijke woorden: dapper, heldhaftig, onverschrokken — alle met-moed-doen." }],
          basiskennis: [{ onderwerp: "Tegenstelling", uitleg: "Moedig ↔ bang/laf/vreesachtig." }],
          niveaus: {
            basis: "Dapper, niet bang. A.",
            simpeler: "Moedig = met moed = durft = niet bang. = A.",
            nogSimpeler: "Dapper = A.",
          },
        },
      },
      {
        q: "*'De koningin sprak **plechtig**.'* Wat betekent plechtig?",
        options: ["Met respect / serieus", "Snel", "Boos", "Gefluisterd"],
        answer: 0,
        wrongHints: [null, "Niet.", "Tegenovergesteld.", "Niet — plechtig = duidelijk hoorbaar."],
        uitlegPad: {
          stappen: [
            { titel: "Plechtig = ceremonieel", tekst: "Plechtig betekent: formeel, met respect, in stijl. Gebruikt bij belangrijke gebeurtenissen." },
            { titel: "Context-hint", tekst: "Koningin = formele persoon → sprak plechtig = formeel/met waardigheid." },
          ],
          woorden: [{ woord: "plechtig", uitleg: "Formeel, ernstig, met respect — bij speciale gelegenheden." }],
          theorie: "Cito-truc bij moeilijk bijwoord: kijk wie/wat doet de actie. Koningin/troonrede/herdenking → formele context = plechtig.",
          voorbeelden: [{ type: "stap", tekst: "'Hij beloofde plechtig' = beloofde serieus + formeel. 'Plechtige opening' = officiële opening." }],
          basiskennis: [{ onderwerp: "Verwant", uitleg: "Plechtigheid = de gebeurtenis zelf (bv huwelijksplechtigheid). Plechtig = de manier." }],
          niveaus: {
            basis: "Met respect / serieus. A.",
            simpeler: "Plechtig = formeel, niet luchtig. = A.",
            nogSimpeler: "Serieus = A.",
          },
        },
      },
      {
        q: "Welk woord is een **tegenstelling** van **'verlies'**?",
        options: ["Winst", "Resultaat", "Spel", "Cijfer"],
        answer: 0,
        wrongHints: [null, "Te algemeen.", "Niet primair tegenstelling.", "Niet."],
      },
      {
        q: "*'De jongen liep **kreupel**.'* Wat betekent kreupel?",
        options: ["Met moeite / mankend", "Snel", "Boos", "Vrolijk"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Onbekend woord? Kijk context", tekst: "Bij Cito krijg je soms onbekende woorden. Geen paniek — lees de zin eromheen voor hints." },
            { titel: "Wat past bij 'liep'?", tekst: "De zin is over LOPEN. 'Vrolijk lopen' en 'boos lopen' zijn vaag gevoelens, geen manier van lopen. 'Snel' en 'met moeite' beschrijven HOE iemand loopt." },
            { titel: "Kreupel = mank", tekst: "'Kreupel' betekent: niet goed kunnen lopen, vaak door pijn of een wond aan voet/been. Synoniem: mankend." },
          ],
          woorden: [
            { woord: "kreupel", uitleg: "Niet goed lopend, vaak door blessure." },
            { woord: "mank", uitleg: "Synoniem van kreupel. Iemand met een mank been loopt scheef." },
          ],
          theorie: "Cito-strategie bij onbekend woord: kijk wat ervoor en erna staat. Welk soort actie of beschrijving past bij die zin? Schrap antwoorden die niet bij de context passen.",
          voorbeelden: [
            { type: "stap", tekst: "'De hond hinkte naar de bak.' → hinken = kreupel lopen, alleen op 3 poten." },
            { type: "stap", tekst: "'Na de val liep hij mank de trap op.' → mank = met moeite." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij Cito woordenschat: schrap eerst antwoorden die NIET in de context passen. Dan blijven 1-2 over." }],
          niveaus: {
            basis: "Kreupel = niet goed kunnen lopen (door wond).",
            simpeler: "Kreupel = mank = met moeite lopen.",
            nogSimpeler: "Kreupel = pijnlijk lopen.",
          },
        },
      },
      {
        q: "Welk woord is een **synoniem** voor **'beginnen'**?",
        options: ["Starten", "Eindigen", "Stoppen", "Wachten"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Niet primair."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een synoniem?", tekst: "Een synoniem is een woord met (bijna) dezelfde betekenis. 'Beginnen' en 'starten' betekenen hetzelfde." },
            { titel: "Test: vervang het woord", tekst: "Kun je het ene woord vervangen door het andere zonder dat de zin een andere betekenis krijgt? Dan zijn het synoniemen." },
            { titel: "Tegenstellingen elimineren", tekst: "Eindigen en stoppen zijn TEGENSTELLINGEN van beginnen — die kun je dus uitsluiten." },
          ],
          woorden: [
            { woord: "synoniem", uitleg: "Hetzelfde betekenend. (groot = enorm)." },
            { woord: "tegenstelling / antoniem", uitleg: "Tegenovergestelde betekenis. (groot ↔ klein)." },
          ],
          theorie: "Cito-tip: bij synoniem-vragen altijd ook de tegenstellingen schrappen. Die staan vaak verlokkend tussen de antwoorden. Lees: betekent het echt hetzelfde?",
          voorbeelden: [
            { type: "stap", tekst: "blij = vrolijk. moe = vermoeid. snel = vlug. groot = enorm." },
            { type: "stap", tekst: "Maar: blij ≠ verdrietig (tegenstelling), groot ≠ klein (tegenstelling)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Tegenstellingen herken je omdat ze het OMGEKEERDE betekenen. Schrap die eerst." }],
          niveaus: {
            basis: "Synoniem = woord met dezelfde betekenis. Beginnen = starten.",
            simpeler: "Vraag: 'kun je dit woord vervangen?' Ja, met starten. Eindigen is tegenovergesteld.",
            nogSimpeler: "Hetzelfde = synoniem.",
          },
        },
      },
      {
        q: "*'Het was een **uitzonderlijke** prestatie.'* Wat betekent uitzonderlijk?",
        options: ["Bijzonder / zeldzaam", "Slecht", "Snel", "Saai"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Splits het woord", tekst: "Uitzonderlijk = uit + zonderlijk. 'Uitzondering' is iets wat NIET de gewone regel volgt. Dus uitzonderlijk = niet gewoon." },
            { titel: "Past bij 'prestatie'?", tekst: "Een uitzonderlijke prestatie = een prestatie die zelden gebeurt, heel knap. Positief woord." },
            { titel: "Synoniemen", tekst: "Uitzonderlijk = bijzonder, zeldzaam, opmerkelijk, indrukwekkend." },
          ],
          woorden: [
            { woord: "uitzonderlijk", uitleg: "Niet gewoon, zeldzaam, bijzonder." },
            { woord: "uitzondering", uitleg: "Iets wat niet de gewone regel volgt." },
          ],
          theorie: "Cito-truc: woord opdelen. Vaak zit de betekenis in een deel ('uit-zonder-lijk' = 'niet zoals anders').",
          voorbeelden: [
            { type: "stap", tekst: "Een uitzonderlijke leerling = bijzonder slimme leerling." },
            { type: "stap", tekst: "Uitzonderlijk warm weer = ongewoon warm." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Uitzonderlijk is POSITIEF in context (knap, mooi, zeldzaam). Niet 'slecht'." }],
          niveaus: {
            basis: "Uitzonderlijk = bijzonder/zeldzaam.",
            simpeler: "Niet gewoon, knap, indrukwekkend.",
            nogSimpeler: "Bijzonder!",
          },
        },
      },
      {
        q: "Welk woord betekent **hetzelfde als** **'mooi'**?",
        options: ["Prachtig", "Lelijk", "Snel", "Klein"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Niet primair."],
        uitlegPad: {
          stappen: [
            { titel: "Hetzelfde betekenen = synoniem", tekst: "'Hetzelfde als mooi' = een woord dat ook MOOI betekent. Niet iets anders, niet het omgekeerde." },
            { titel: "Vergelijk de opties", tekst: "Prachtig = heel mooi → ja, synoniem. Lelijk = niet mooi → tegenstelling. Snel/klein → andere onderwerpen." },
            { titel: "Synoniemen van mooi (rijtje)", tekst: "prachtig, schitterend, fantastisch, fraai, geweldig — allemaal positieve waardering, vergelijkbaar met mooi." },
          ],
          woorden: [
            { woord: "synoniem", uitleg: "Woord met dezelfde betekenis." },
            { woord: "prachtig", uitleg: "Heel mooi — sterker dan 'mooi'." },
          ],
          theorie: "Cito-tip: zoek het meest dichtbij-staande synoniem. Soms zijn er meerdere passende, maar één staat het dichtst bij de oorspronkelijke betekenis.",
          voorbeelden: [
            { type: "stap", tekst: "mooi = prachtig = schitterend = fraai." },
            { type: "stap", tekst: "groot = enorm = reusachtig. Klein = piepklein = mini." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Schrap eerst de tegenstellingen (lelijk) en woorden uit andere categorieën (snel = snelheid)." }],
          niveaus: {
            basis: "Mooi = prachtig (synoniem).",
            simpeler: "Beide betekenen ongeveer hetzelfde positiefs.",
            nogSimpeler: "Mooi = prachtig.",
          },
        },
      },
      {
        q: "*'De jongen was **uitgeput** na de race.'* Wat betekent uitgeput?",
        options: ["Heel moe", "Hongerig", "Boos", "Verbaasd"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Letterlijk: leeg", tekst: "Uitgeput = energie 'uit' + 'put' = leeg van energie. Lijkt op een leeggepompte waterput." },
            { titel: "Context-hint", tekst: "'Na de race' = na lichamelijke inspanning → moe past." },
          ],
          woorden: [{ woord: "uitgeput", uitleg: "Helemaal op, geen energie meer." }],
          theorie: "Cito-truc: bij moeilijk woord, kijk naar context-zin. 'Na de race' = na sport → vermoeidheid past.",
          voorbeelden: [{ type: "stap", tekst: "Uitgeput ↔ uitgerust. Beide met 'uit-' maar tegengesteld." }],
          basiskennis: [{ onderwerp: "Letterlijke/figuurlijke betekenis", uitleg: "Een put kan ook 'uitgeput' zijn = leeg = geen water meer. Zelfde idee voor mensen: geen energie." }],
          niveaus: {
            basis: "Heel moe. A.",
            simpeler: "Uitgeput = leeg van energie = heel moe. = A.",
            nogSimpeler: "Moe = A.",
          },
        },
      },
      {
        q: "**Tegenstelling** van **'voorzichtig'**?",
        options: ["Roekeloos", "Snel", "Klein", "Stom"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet primair.", "Te algemeen."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een tegenstelling?", tekst: "Een tegenstelling (antoniem) heeft de OMGEKEERDE betekenis. Voorzichtig en roekeloos = elkaars tegendeel." },
            { titel: "Wat betekent 'voorzichtig'?", tekst: "Voorzichtig = met aandacht, langzaam, om geen ongelukken te krijgen. (Bv. voorzichtig oversteken.)" },
            { titel: "Wat is het omgekeerde?", tekst: "Het OMGEKEERDE is: zonder nadenken, zonder oppassen. Dat heet **roekeloos**." },
          ],
          woorden: [
            { woord: "voorzichtig", uitleg: "Met aandacht, om risico te vermijden." },
            { woord: "roekeloos", uitleg: "Zonder nadenken, zonder oppassen." },
          ],
          theorie: "Cito-tip bij tegenstellingen: zoek het MEEST tegengesteld. 'Snel' is wel tegenovergesteld aan 'langzaam' maar voorzichtig betekent meer dan alleen langzaam.",
          voorbeelden: [
            { type: "stap", tekst: "Voorzichtig auto rijden vs roekeloos auto rijden." },
            { type: "stap", tekst: "Andere tegenstellingen: vrolijk ↔ verdrietig, snel ↔ langzaam, vroeg ↔ laat." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag: 'het OMGEKEERDE van X is...?' Niet 'iets anders dan X'." }],
          niveaus: {
            basis: "Voorzichtig ↔ roekeloos.",
            simpeler: "Voorzichtig = oppassen. Roekeloos = niet oppassen.",
            nogSimpeler: "Tegenstelling = omgekeerd.",
          },
        },
      },
      {
        q: "*'Ze verzon een **leugen**.'* Wat betekent leugen?",
        options: ["Niet-waar verhaal", "Geheim", "Grap", "Verhaal"],
        answer: 0,
        wrongHints: [null, "Geheim = wel waar maar niet verteld.", "Grap = niet bedoeld te misleiden.", "Verhaal kan waar of niet waar zijn."],
        uitlegPad: {
          stappen: [
            { titel: "Context-hint", tekst: "'Verzon' = bedenken zonder dat het waar is. Dus 'leugen' = iets bedacht/niet waar." },
          ],
          woorden: [
            { woord: "leugen", uitleg: "Iets vertellen dat niet waar is — bewust misleiden." },
            { woord: "geheim", uitleg: "Iets WAAR dat je niet vertelt — verschilt van leugen." },
          ],
          theorie: "Cito-truc: lees context-werkwoord ('verzon') → wijst naar 'niet echt' = leugen.",
          voorbeelden: [{ type: "stap", tekst: "'Hij vertelde een leugen over zijn rapport' = hij gaf een verkeerd cijfer door bewust." }],
          basiskennis: [{ onderwerp: "Onderscheid", uitleg: "Leugen = bewust niet-waar. Vergissing = niet-waar maar niet bewust. Geheim = waar maar achtergehouden." }],
          niveaus: {
            basis: "Niet-waar verhaal. A.",
            simpeler: "Verzon = bedacht. Leugen = niet waar. = A.",
            nogSimpeler: "Niet-waar = A.",
          },
        },
      },
      {
        q: "*'Hij had een **briljant** idee voor het werkstuk.'* Wat betekent **briljant**?",
        options: ["Heel slim / schitterend", "Heel saai", "Vaag", "Verkeerd"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — briljant is iets positiefs.", "Briljant is juist heel duidelijk goed.", "Briljant betekent niet 'fout'."],
        uitlegPad: {
          stappen: [
            { titel: "Briljant = schitterend slim", tekst: "Een briljant denkbeeld is een idee dat heel goed in elkaar zit. Letterlijk komt 'briljant' van een geslepen diamant — die fonkelt." },
          ],
          woorden: [{ woord: "briljant", uitleg: "Heel intelligent of schitterend; ook: een geslepen diamant." }],
          theorie: "Cito vraagt soms naar woorden met dubbele betekenis. Kijk altijd of de zin over een ding of over een eigenschap gaat.",
          voorbeelden: [{ type: "stap", tekst: "'Wat een briljant plan!' = wat een geweldig plan." }],
          basiskennis: [{ onderwerp: "Synoniemen", uitleg: "Briljant ≈ schitterend, geniaal, geweldig (in betekenis 'heel goed')." }],
          niveaus: {
            basis: "Heel slim / schitterend. A.",
            simpeler: "Briljant = top-slim. = A.",
            nogSimpeler: "Schitterend = A.",
          },
        },
      },
      {
        q: "Welk woord is een **tegenstelling** van **'dapper'**?",
        options: ["Bang / laf", "Sterk", "Slim", "Snel"],
        answer: 0,
        wrongHints: [null, "Niet de tegenstelling — dapper zijn heeft niet met spieren te maken.", "Dapper gaat over moed, niet over slim.", "Snel rennen kan ook dapper zijn."],
      },
      {
        q: "*'De spreker had **doorslaggevende** argumenten.'* Wat betekent **doorslaggevend**?",
        options: ["Bepalend / de meeste invloed", "Zwak", "Saai", "Onduidelijk"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — doorslaggevend is sterk.", "Niet relevant in deze context.", "Doorslaggevend is juist duidelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Doorslag = beslissing", tekst: "'De doorslag geven' = de beslissende stem hebben. Iets dat doorslaggevend is, bepaalt de uitkomst." },
          ],
          woorden: [{ woord: "doorslaggevend", uitleg: "Beslissend; geeft de doorslag in een besluit." }],
          theorie: "Bij Cito zie je vaak abstracte woorden uit krant/tv-taal. Kijk naar woorden binnen het woord (door + slag + gevend) — dat helpt vaak.",
          voorbeelden: [{ type: "stap", tekst: "'Het doelpunt was doorslaggevend voor de wedstrijd' = dat doelpunt bepaalde de uitslag." }],
          basiskennis: [{ onderwerp: "Familie", uitleg: "'Beslissend' is een goed synoniem. Tegenover: 'onbelangrijk' of 'bijzaak'." }],
          niveaus: {
            basis: "Bepalend / beslissend. A.",
            simpeler: "Doorslaggevend = wat de keuze maakt. = A.",
            nogSimpeler: "Bepalend = A.",
          },
        },
      },
      {
        q: "Welk woord is een **synoniem** van **'vermoeid'**?",
        options: ["Moe", "Wakker", "Boos", "Hongerig"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Andere stemming, geen synoniem.", "Andere lichaamssensatie."],
      },
      {
        q: "*'Het was een **hachelijke** situatie.'* Wat betekent **hachelijk**?",
        options: ["Gevaarlijk / riskant", "Grappig", "Saai", "Eenvoudig"],
        answer: 0,
        wrongHints: [null, "Hachelijk klinkt niet leuk — het is juist serieus.", "Hachelijk is geen rustig woord.", "Tegenovergesteld — hachelijk is juist lastig."],
        uitlegPad: {
          stappen: [
            { titel: "Hachelijk = gevaarlijk", tekst: "Een hachelijke situatie is een situatie waarin het mis kan gaan. Komt van 'hachje' (oud woord voor leven/huid riskeren)." },
          ],
          woorden: [{ woord: "hachelijk", uitleg: "Gevaarlijk, riskant, netelig — iets kan slecht aflopen." }],
          theorie: "Cito gebruikt soms ouderwetse woorden. Bij twijfel: kijk of het woord positief of negatief klinkt in de zin. 'Hachelijk' klinkt niet plezierig — dus negatief.",
          voorbeelden: [{ type: "stap", tekst: "'In een hachelijke positie' = in een lastige/gevaarlijke positie." }],
          basiskennis: [{ onderwerp: "Synoniemen", uitleg: "Hachelijk ≈ riskant, gevaarlijk, netelig, kritiek." }],
          niveaus: {
            basis: "Gevaarlijk / riskant. A.",
            simpeler: "Hachelijk = kan misgaan. = A.",
            nogSimpeler: "Gevaarlijk = A.",
          },
        },
      },
      {
        q: "Wat betekent het **spreekwoord** *'De kat uit de boom kijken'*?",
        options: ["Eerst rustig kijken hoe iets gaat", "Een kat opjagen", "Naar boven kijken", "Niet bewegen"],
        answer: 0,
        wrongHints: [null, "Letterlijk lijkt het zo, maar het is figuurlijk.", "Het gaat niet écht over een kat.", "Te letterlijk."],
        uitlegPad: {
          stappen: [
            { titel: "Spreekwoord = figuurlijk", tekst: "Spreekwoorden hebben een betekenis die je niet aan de woorden zelf kunt aflezen. 'De kat uit de boom kijken' = afwachten hoe iets afloopt." },
            { titel: "Wanneer gebruikt?", tekst: "Iemand die voorzichtig is in een nieuwe situatie 'kijkt eerst de kat uit de boom' — kijkt rustig hoe het gaat." },
          ],
          woorden: [{ woord: "spreekwoord", uitleg: "Vaste uitdrukking met figuurlijke betekenis." }],
          theorie: "Cito test soms bekende spreekwoorden. Truc: vraag jezelf 'wat doet iemand in een gewone situatie als dit gezegd wordt?' — niet letterlijk de dieren of dingen voorstellen.",
          voorbeelden: [
            { type: "stap", tekst: "'Pas op de kleintjes' = let op de details / op kleine uitgaven." },
            { type: "stap", tekst: "'Op hete kolen zitten' = ongeduldig zijn." },
          ],
          basiskennis: [{ onderwerp: "Verschil", uitleg: "Spreekwoord = vaste zin. Uitdrukking = vaak vaste woordcombi (bv 'in de wolken zijn' = blij)." }],
          niveaus: {
            basis: "Eerst rustig kijken. A.",
            simpeler: "Afwachten = kat uit de boom. = A.",
            nogSimpeler: "Afwachten = A.",
          },
        },
      },
      {
        q: "Welk woord is **een synoniem** voor **'eerlijk'**?",
        options: ["Oprecht", "Vals", "Snel", "Hongerig"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Andere dimensie.", "Andere dimensie."],
      },
      {
        q: "*'Hij keek **schuw** om zich heen.'* Wat betekent **schuw**?",
        options: ["Verlegen / bang voor contact", "Boos", "Trots", "Hongerig"],
        answer: 0,
        wrongHints: [null, "Andere emotie.", "Tegenovergesteld — schuwe mensen tonen zich juist niet graag.", "Niet."],
      },
      {
        q: "Wat is een **tegenstelling** van **'optimistisch'**?",
        options: ["Pessimistisch", "Vrolijk", "Snel", "Eerlijk"],
        answer: 0,
        wrongHints: [null, "Synoniem, geen tegenstelling.", "Geen verband.", "Geen verband."],
        uitlegPad: {
          stappen: [
            { titel: "Optimist vs pessimist", tekst: "Optimistisch = hoopvol, denkt aan goede afloop. Pessimistisch = somber, denkt aan slechte afloop." },
          ],
          woorden: [
            { woord: "optimistisch", uitleg: "Verwacht dat het goed gaat." },
            { woord: "pessimistisch", uitleg: "Verwacht dat het slecht gaat." },
          ],
          theorie: "Cito test soms paren tegenstellingen. Truc: zoek het woord met 'on-', 'pessi-', 'a-' of 'anti-' ervoor.",
          voorbeelden: [{ type: "stap", tekst: "gelovig ↔ ongelovig. Sociaal ↔ asociaal." }],
          basiskennis: [{ onderwerp: "Familie", uitleg: "Synoniem optimist ≈ positief, hoopvol. Synoniem pessimist ≈ negatief, somber." }],
          niveaus: {
            basis: "Pessimistisch. A.",
            simpeler: "Tegenover hoopvol staat somber = pessimistisch. = A.",
            nogSimpeler: "Pessimistisch = A.",
          },
        },
      },
      {
        q: "*'Het was een **geniaal** plan.'* Wat betekent **geniaal**?",
        options: ["Heel slim / briljant", "Heel saai", "Verkeerd", "Klein"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Geen verband."],
      },
    ],
  },

  // STAP 2: Begrijpend lezen (~20 min)
  {
    title: "Begrijpend lezen — ~20 min",
    explanation:
      "**Wat verwacht je op de Doorstroomtoets?**\n\nBegrijpend lezen is de **grootste taal-onderdeel**: 20-30 vragen na een paar teksten.\n\n**De Cito-vraagsoorten** *(uit je hoofd!)*:\n• **Hoofdgedachte**: 'Waar gaat de hele tekst over?' → meestal in de eerste of laatste alinea.\n• **Detail**: 'Wat staat er in alinea 2?' → zoek in alinea 2.\n• **Verband**: 'Waarom?' / 'Wat is het gevolg?' → zoek signaalwoorden zoals 'omdat', 'daardoor'.\n• **Bedoeling**: 'Waarom schreef de schrijver?' → informeren / overtuigen / amuseren.\n\n**Stappenplan**:\n1. **Skim** de tekst — lees titel + eerste/laatste zin van elke alinea.\n2. **Lees de vraag** voordat je de hele tekst leest.\n3. **Zoek terug** in de tekst — leg je vinger bij de juiste alinea.\n4. **Check** dat het antwoord echt in de tekst staat, niet je eigen mening.\n\n**Cito-strikvraag** — let op deze 3:\n• *'Welke zin klopt **niet**?'* — het juiste antwoord is degene die fout is.\n• Antwoorden die 'lijken te kloppen' maar net niet zo in de tekst staan.\n• 'Altijd' / 'nooit' in antwoorden — vaak fout (te absoluut).\n\n**Voorbeeld-tekst**:\n*'In Nederland slapen vleermuizen meestal overdag. Ze hangen onderste-boven aan een tak. 's Avonds vliegen ze uit om insecten te vangen.'*\n\n**Vraag**: Wanneer vliegen vleermuizen?\n• Antwoord: 's avonds *(staat letterlijk in de tekst)*.\n\n**Bron**: voor officiële voorbeelden zie " + examenLink + ".\n\n**Klaar voor 5 oefenvragen?**",
    checks: [
      {
        q: "*Tekst: 'De zon schijnt vandaag fel. Veel mensen gaan naar het strand.'* **Waarom** gaan veel mensen naar het strand?",
        options: ["Omdat de zon fel schijnt", "Omdat ze honger hebben", "Omdat het regent", "Omdat het avond is"],
        answer: 0,
        wrongHints: [null, "Niet in de tekst genoemd.", "De zon schijnt — niet regen.", "Niet genoemd in de tekst."],
        uitlegPad: {
          stappen: [
            { titel: "Wat staat er ECHT in de tekst?", tekst: "De tekst zegt: 1) zon schijnt fel, 2) mensen gaan naar strand. De reden moet komen uit wat erin staat." },
            { titel: "Verband zoeken", tekst: "Twee zinnen achter elkaar over hetzelfde onderwerp = er is meestal een verband. Mensen gaan naar het strand BECAUSE zon = mooie strand-dag." },
            { titel: "Cito-truc: blijf in de tekst", tekst: "Antwoorden die NIET in de tekst staan (honger, regen, avond) zijn fout. Alleen wat genoemd is telt." },
          ],
          woorden: [
            { woord: "tekst-vraag", uitleg: "Antwoord moet uit de tekst komen, niet uit je eigen mening." },
            { woord: "verband", uitleg: "Waarom-vragen zoeken een oorzaak-gevolg-koppeling in de tekst." },
          ],
          theorie: "Cito-strategie: bij 'waarom'-vragen, zoek wat de tekst zegt als reden. Schrap antwoorden die niet in de tekst staan. Twee gerelateerde zinnen geven vaak de oorzaak.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst: 'Het regende. De wedstrijd ging niet door.' → Waarom ging wedstrijd niet door? → Omdat het regende." },
            { type: "stap", tekst: "Tekst: 'Anna oefende veel. Ze won.' → Waarom won Anna? → Omdat ze veel oefende." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Blijf binnen wat in de tekst staat. Eigen kennis ('mensen hebben honger') is NIET het antwoord — alleen wat genoemd is." }],
          niveaus: {
            basis: "Zoek de reden in de tekst zelf, niet in je eigen kennis.",
            simpeler: "Tekst zegt: zon → mensen → strand. Reden = zon.",
            nogSimpeler: "Alleen wat erin staat telt.",
          },
        },
      },
      {
        q: "Wat zoek je in de **eerste of laatste alinea** van een tekst?",
        options: ["De hoofdgedachte", "Een grapje", "Een grafiek", "Een opdracht"],
        answer: 0,
        wrongHints: [null, "Grapjes komen overal in de tekst voor.", "Grafieken zijn aparte plaatjes.", "Opdrachten staan onder de tekst."],
      },
      {
        q: "Cito-truc: voordat je de tekst leest, **lees je eerst** ... ?",
        options: ["De vragen", "Het einde", "Niets, gewoon beginnen", "Alle alinea's heel langzaam"],
        answer: 0,
        wrongHints: [null, "Niet alleen het einde — je weet dan niet wat te zoeken.", "Zonder vragen lezen kost meer tijd.", "Te langzaam — je moet snel kunnen scannen."],
        uitlegPad: {
          stappen: [
            { titel: "Vragen eerst", tekst: "Door eerst de vragen te lezen weet je waar je naar moet zoeken in de tekst. Spaart tijd." },
          ],
          woorden: [{ woord: "skimmen", uitleg: "Snel door een tekst kijken om het belangrijkste te pakken." }],
          theorie: "Cito-strategie: scan vragen → skim tekst → zoek per vraag terug.",
          voorbeelden: [{ type: "stap", tekst: "Vraag noemt 'vleermuis-tijd' → zoek 'avond' of 'nacht' in de tekst." }],
          basiskennis: [{ onderwerp: "Slim lezen", uitleg: "Niet alles even diep lezen — focus waar je het antwoord verwacht." }],
          niveaus: {
            basis: "Lees eerst de vragen. A.",
            simpeler: "Cito-tip: kijk eerst even welke vragen er gesteld worden. Dan weet je waar je naar moet zoeken. = A.",
            nogSimpeler: "De vragen = A.",
          },
        },
      },
      {
        q: "Welke antwoorden zijn op een **Cito** vaak **fout**?",
        options: ["Met 'altijd' of 'nooit'", "Met cijfers", "Met namen", "Korte antwoorden"],
        answer: 0,
        wrongHints: [null, "Cijfers zijn vaak juiste feiten.", "Namen kunnen kloppen.", "Lengte zegt niets over juistheid."],
      },
      {
        q: "Een tekst gaat over hoe **honden helpen** bij brand. **Hoofdgedachte**?",
        options: ["Honden zijn nuttig bij brand", "Honden eten brood", "Brand is gevaarlijk", "Iedereen wil een hond"],
        answer: 0,
        wrongHints: [null, "Te specifiek — niet de hoofdgedachte.", "Klopt maar niet de hoofdgedachte over honden.", "Te algemeen — niet specifiek over honden."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een hoofdgedachte?", tekst: "De hoofdgedachte is in ÉÉN zin: waar gaat de hele tekst over? Niet één klein detail, maar de centrale boodschap." },
            { titel: "Cito-truc: combineer onderwerp + boodschap", tekst: "Onderwerp = honden. Boodschap = zij helpen bij brand. Hoofdgedachte = 'Honden zijn nuttig bij brand'. Past beide samen." },
            { titel: "Schrap te smal/breed", tekst: "'Honden eten brood' = staat niet in tekst. 'Brand is gevaarlijk' = te breed (niet over honden). 'Iedereen wil hond' = niet de boodschap." },
          ],
          woorden: [
            { woord: "hoofdgedachte", uitleg: "Centrale boodschap van de hele tekst, in 1 zin." },
            { woord: "detail", uitleg: "Klein stukje informatie — niet de hoofdgedachte." },
          ],
          theorie: "Cito-strategie hoofdgedachte: 1) Wat is het onderwerp? 2) Wat is de boodschap erover? 3) Voeg samen tot 1 zin. Vaak staat de hoofdgedachte in de eerste of laatste alinea.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst over plastic in zee → hoofdgedachte: 'plastic is een groot probleem in de zee'." },
            { type: "stap", tekst: "Tekst over voetbal-WK → hoofdgedachte: 'het WK is een groot voetbaltoernooi'." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Hoofdgedachte = wat zou je in 1 zin tegen een vriend zeggen als hij vraagt 'waar gaat die tekst over?'" }],
          niveaus: {
            basis: "Hoofdgedachte = centrale boodschap in 1 zin.",
            simpeler: "Combineer: onderwerp (honden) + boodschap (helpen bij brand) = hoofdgedachte.",
            nogSimpeler: "Onderwerp + waarom = hoofdgedachte.",
          },
        },
      },
      {
        q: "*Tekst: 'In de Sahara valt **bijna nooit** regen. Toch leven er kamelen.'* Welke **signaalwoord** geeft een **tegenstelling**?",
        options: ["Toch", "In", "Er", "Leven"],
        answer: 0,
        wrongHints: [null, "Plaats, niet tegenstelling.", "Verwijst naar Sahara.", "Werkwoord."],
        uitlegPad: {
          stappen: [
            { titel: "Signaalwoorden", tekst: "Tegenstelling-woorden geven aan dat er iets verrassends komt: **maar / toch / hoewel / echter / desondanks**." },
          ],
          woorden: [{ woord: "signaalwoord", uitleg: "Woord dat een verband aangeeft in een tekst (oorzaak, gevolg, tegenstelling, opsomming)." }],
          theorie: "Cito-vraag-type: signaalwoorden herkennen helpt verbanden te zien in de tekst. 'Toch' = tegenstelling.",
          voorbeelden: [{ type: "stap", tekst: "Soorten: oorzaak/gevolg (omdat, daardoor), tegenstelling (maar, toch), opsomming (en, ook)." }],
          basiskennis: [{ onderwerp: "Verbanden", uitleg: "Snel signaalwoorden vinden = snel verbanden begrijpen = sneller Cito-tekst-vragen oplossen." }],
          niveaus: {
            basis: "Toch. A.",
            simpeler: "'Toch' betekent 'maar' — geeft een tegenstelling aan. In de Sahara valt geen regen, MAAR (toch) leven er kamelen. = A.",
            nogSimpeler: "Toch = tegenstelling = A.",
          },
        },
      },
      {
        q: "*Tekst: 'Tom oefende elke dag 1 uur. **Daarom** won hij de wedstrijd.'* Wat geeft **'daarom'** aan?",
        options: ["Gevolg / reden", "Tegenstelling", "Opsomming", "Plek"],
        answer: 0,
        wrongHints: [null, "Geen tegenstelling.", "Niet opsommend.", "Niet plaats."],
      },
      {
        q: "*'De auteur wil je **vooral overtuigen**'* — wat is dan de **bedoeling** van de tekst?",
        options: ["Overhalen om iets te doen of denken", "Informeren met feiten", "Amuseren met grappen", "Beschrijven hoe iets is"],
        answer: 0,
        wrongHints: [null, "Informeren is doel #2 maar niet 'overtuigen'.", "Amuseren is anders.", "Beschrijven = neutraal vermelden."],
      },
      {
        q: "*Tekst: 'Eerst moet je de fles open. **Vervolgens** schenk je het water.'* Wat geeft **'vervolgens'** aan?",
        options: ["Volgorde / opeenvolging", "Tegenstelling", "Reden", "Doel"],
        answer: 0,
        wrongHints: [null, "Geen tegenstelling.", "Geen reden.", "Geen doel."],
      },
      {
        q: "*'Het boek is **niet** alleen spannend.'* Welke vraagtype: dit antwoord testen — welke is **fout**?",
        options: ["Het boek is alleen spannend (NIET klopt)", "Het boek is ook leerzaam (zou kunnen)", "Het boek is een roman (mogelijk)", "Niet te zeggen"],
        answer: 0,
        wrongHints: [null, "Mogelijk waar.", "Mogelijk waar.", "Wel te zeggen — let op 'niet alleen'."],
      },
      {
        q: "*Hoofdgedachte* van tekst — meestal te vinden in:",
        options: ["Eerste of laatste alinea", "Middelste alinea", "Plaatje", "Voetnoot"],
        answer: 0,
        wrongHints: [null, "Soms maar niet primair.", "Niet tekst-onderdeel.", "Te detail."],
      },
      {
        q: "Wat is **alinea**?",
        options: ["Groep zinnen over één onderwerp", "Eén zin", "Hele tekst", "Plaatje"],
        answer: 0,
        wrongHints: [null, "Alinea heeft meer.", "Tekst heeft meerdere.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een alinea?", tekst: "Een alinea is een groep zinnen die SAMEN over één onderwerp gaan. Daarna volgt vaak een witregel of een inspring." },
            { titel: "Hoe herken je een alinea?", tekst: "Kijk naar de tekst: zie je een witregel of een nieuwe regel die iets inspringt? Daar begint een nieuwe alinea." },
            { titel: "Waarom alinea's?", tekst: "Door alinea's wordt een tekst overzichtelijk. Elke alinea heeft een kerngedachte. Bij Cito heel handig om naar te verwijzen: 'alinea 3 zegt...'." },
          ],
          woorden: [
            { woord: "alinea", uitleg: "Groep zinnen over één onderwerp, gescheiden door witregel." },
            { woord: "paragraaf", uitleg: "Engels woord voor alinea." },
          ],
          theorie: "Cito-tip: bij lange teksten, eerst tellen hoeveel alinea's er zijn. Bij een 'detail-vraag over alinea 2' weet je dan precies waar te zoeken.",
          voorbeelden: [
            { type: "stap", tekst: "Een schoolboek heeft per hoofdstuk vaak 10-20 alinea's." },
            { type: "stap", tekst: "Een nieuwsartikel: elke alinea = 2-4 zinnen over één deelonderwerp." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Tel met je vinger: hoe vaak springt de tekst in / staat er een witregel? Zoveel alinea's zijn er." }],
          niveaus: {
            basis: "Alinea = groep zinnen over één onderwerp.",
            simpeler: "Tekst-stukje met witregel ervoor en erna.",
            nogSimpeler: "Stukje tekst over 1 ding.",
          },
        },
      },
      {
        q: "Signaalwoord **'bijvoorbeeld'** introduceert?",
        options: ["Een voorbeeld", "Tegenstelling", "Gevolg", "Conclusie"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet primair."],
      },
      {
        q: "Cito-strik: een vraag heeft **'NIET'** in. Wat doe je?",
        options: ["Zoek de fout / uitzondering", "Negeer dat woord", "Onmogelijk te beantwoorden", "Kies eerste optie"],
        answer: 0,
        wrongHints: [null, "Niet — heel belangrijk.", "Wel — gewoon goed lezen.", "Random kiezen werkt niet."],
      },
      {
        q: "Signaalwoord **'omdat'** introduceert?",
        options: ["Reden / oorzaak", "Gevolg", "Tegenstelling", "Voorbeeld"],
        answer: 0,
        wrongHints: [null, "Gevolg = 'daardoor'.", "Tegenstelling = 'maar'.", "Voorbeeld = 'bijvoorbeeld'."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is 'omdat'?", tekst: "'Omdat' geeft de REDEN waarom iets gebeurt. Het verbindt 2 zinnen: het gevolg + de reden." },
            { titel: "Voorbeeld", tekst: "'Ik blijf thuis OMDAT ik ziek ben.' → thuis blijven = gevolg, ziek = reden." },
            { titel: "Verschil met 'daardoor'", tekst: "'Omdat' staat vóór de reden. 'Daardoor' staat vóór het gevolg. Verschillende kant!" },
          ],
          woorden: [
            { woord: "omdat", uitleg: "Geeft REDEN aan (wat ervoor zorgt)." },
            { woord: "daardoor", uitleg: "Geeft GEVOLG aan (wat erna komt)." },
          ],
          theorie: "Cito-vraag: lees de zin goed. Wat komt er NA 'omdat'? Dat is de reden. Bij 'daardoor' komt het gevolg.",
          voorbeelden: [
            { type: "stap", tekst: "'Tom won de wedstrijd OMDAT hij goed oefende.' → reden = goed oefenen." },
            { type: "stap", tekst: "'Tom oefende goed. DAARDOOR won hij.' → gevolg = winnen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Omdat = waarom? Daardoor = wat gebeurt er dan?" }],
          niveaus: {
            basis: "'Omdat' = de REDEN. 'Daardoor' = het GEVOLG.",
            simpeler: "Omdat hij ziek IS → reden. Daardoor blijft hij THUIS → gevolg.",
            nogSimpeler: "Omdat = waarom. Daardoor = dus.",
          },
        },
      },
      {
        q: "Signaalwoord **'daardoor'** introduceert?",
        options: ["Gevolg", "Reden", "Voorbeeld", "Tegenstelling"],
        answer: 0,
        wrongHints: [null, "Reden = 'omdat'.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Daardoor = gevolg", tekst: "'Daardoor' wijst op het GEVOLG: wat er gebeurt VANWEGE iets dat eerder genoemd is." },
            { titel: "Voorbeeld", tekst: "'Tom oefende veel. DAARDOOR won hij de wedstrijd.' → oefenen = reden, winnen = gevolg." },
            { titel: "Verschil met 'omdat'", tekst: "'Omdat' staat vóór de REDEN. 'Daardoor' staat vóór het GEVOLG. Beide woorden verbinden reden+gevolg, alleen verschillende kant!" },
          ],
          woorden: [
            { woord: "daardoor", uitleg: "Wijst op het gevolg (wat komt eruit)." },
            { woord: "omdat", uitleg: "Wijst op de reden (wat ervoor zorgt)." },
          ],
          theorie: "Cito-truc: bij 'daardoor' staat ervoor de reden, erna het gevolg. Vraag jezelf 'WAT gebeurde er DOOR die reden?' Antwoord = gevolg.",
          voorbeelden: [
            { type: "stap", tekst: "'Het regende hard. Daardoor werd het wegdek glad.' → glad = gevolg." },
            { type: "stap", tekst: "Vergelijk: 'Het wegdek werd glad OMDAT het regende.' → zelfde idee, andere woordvolgorde." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Daardoor = dus = vandaar. Allemaal gevolg-woorden." }],
          niveaus: {
            basis: "Daardoor = gevolg-signaal.",
            simpeler: "Wat gebeurde DOOR die actie? = daardoor.",
            nogSimpeler: "Daardoor = dus.",
          },
        },
      },
      {
        q: "*Cito-tip*: een **lange tekst** lees je **eerst** ...?",
        options: ["Globaal (titel + alinea-koppen)", "Heel langzaam", "Achteruit", "Niet"],
        answer: 0,
        wrongHints: [null, "Te traag.", "Niet zinvol.", "Wel — globaal."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst overzicht, dan details", tekst: "Bij een lange Cito-tekst NIET meteen woord-voor-woord lezen. Eerst snel een overzicht maken." },
            { titel: "Skim-techniek", tekst: "Lees alleen: TITEL + EERSTE ALINEA + LAATSTE ALINEA + de KOPJES van alinea's. Zo weet je waar de tekst over gaat." },
            { titel: "Dan: vraag → tekst", tekst: "Pas DAARNA lees je de vraag. Bij elke vraag zoek je het stukje tekst dat erbij hoort. Dat heet 'gericht lezen'." },
          ],
          woorden: [
            { woord: "globaal lezen", uitleg: "Snel scannen voor het grote plaatje." },
            { woord: "gericht lezen", uitleg: "Per vraag het juiste stukje tekst zoeken." },
          ],
          theorie: "Cito-leesstrategie: 1) globaal skimmen voor overzicht. 2) Lees de eerste vraag. 3) Zoek gericht het antwoord in de tekst. 4) Volgende vraag. Tijd besparen!",
          voorbeelden: [{ type: "stap", tekst: "Tekst van 4 alinea's: lees titel + alinea 1 + alinea 4 voor overzicht. Vraag 2 gaat over alinea 3? → lees alleen die alinea grondig." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij Cito-leestoetsen zit veel info IN de tekst maar je hoeft niet alles te onthouden. Zoek per vraag." }],
          niveaus: {
            basis: "Eerst globaal (titel + koppen). Dan per vraag gericht lezen.",
            simpeler: "Snel overzicht eerst, dan per vraag het stukje zoeken.",
            nogSimpeler: "Snel kijken, dan zoeken.",
          },
        },
      },
      {
        q: "*Tekst: 'Veel kinderen sporten weinig. **Toch** is sporten heel gezond.'* Wat is de **conclusie** van de schrijver?",
        options: ["Kinderen moeten meer sporten", "Sport is gezond, dus stop kinderen", "Kinderen mogen niet sporten", "Onbekend"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet.", "Wel te bepalen."],
      },
      {
        q: "Wat is een **detail-vraag** bij Cito?",
        options: ["'Wat staat er in alinea 2?'", "'Wat vind jij?'", "'Wat is de mening?'", "'Welk plaatje?'"],
        answer: 0,
        wrongHints: [null, "Niet — eigen mening.", "Niet primair.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Detail-vraag = specifiek", tekst: "Een detail-vraag vraagt naar één concreet stukje informatie. Bijvoorbeeld: 'Hoe oud is Tom?' of 'Welk land wordt genoemd?'" },
            { titel: "Antwoord staat in de tekst", tekst: "Het antwoord op een detail-vraag staat LETTERLIJK ergens in de tekst. Je hoeft niet te raden — gewoon zoeken." },
            { titel: "Cito-strategie: zoek terug", tekst: "Stappen: 1) lees de vraag goed. 2) Zoek de juiste alinea. 3) Lees die alinea grondig. 4) Antwoord komt eruit." },
          ],
          woorden: [
            { woord: "detail-vraag", uitleg: "Vraag over specifieke informatie in de tekst." },
            { woord: "hoofdgedachte-vraag", uitleg: "Iets ANDERS: vraagt naar de boodschap van hele tekst." },
          ],
          theorie: "Cito-vraagsoorten: detail (specifieke info), hoofdgedachte (centrale boodschap), bedoeling (waarom schreef de auteur), verband (oorzaak-gevolg). Bij detail: ZOEK in de tekst, niet je eigen mening.",
          voorbeelden: [
            { type: "stap", tekst: "Tekst zegt: 'De Sahara is in Afrika.' Detail-vraag: 'In welk werelddeel ligt de Sahara?' → Afrika." },
            { type: "stap", tekst: "Tekst zegt: 'In 1969 ging Apollo 11 naar de maan.' Detail: 'In welk jaar?' → 1969." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Detail-vraag = vraag naar feit dat ergens precies in de tekst staat. Vinger erbij." }],
          niveaus: {
            basis: "Detail-vraag = vraag naar specifieke info uit de tekst.",
            simpeler: "Zoek in tekst, niet raden of eigen mening.",
            nogSimpeler: "Feit in tekst opzoeken.",
          },
        },
      },
      {
        q: "Hoeveel **leestips** voordat je vraag beantwoordt? Cito-strategie?",
        options: ["Lees vraag → zoek terug in tekst", "Lees vraag → gok", "Lees alleen tekst", "Niets"],
        answer: 0,
        wrongHints: [null, "Niet — slim zoeken.", "Onefficiënt.", "Wel — strategie."],
      },
      {
        q: "*'De plant ging dood **doordat** Tom hem te weinig water gaf.'* Wat is hier de **reden**?",
        options: ["Te weinig water geven", "De plant ging dood", "Het was zomer", "Tom is weg"],
        answer: 0,
        wrongHints: [null, "Dat is het gevolg, niet de reden.", "Niet genoemd in de zin.", "Niet genoemd in de zin."],
        uitlegPad: {
          stappen: [
            { titel: "Doordat = reden-signaal", tekst: "'Doordat' wijst op de REDEN: wat zorgde ervoor dat iets gebeurde. Het stukje NA 'doordat' is altijd de reden." },
            { titel: "Reden vs gevolg", tekst: "In deze zin: gevolg = 'plant ging dood'. Reden = 'te weinig water'. Verbindingswoord = 'doordat'." },
          ],
          woorden: [{ woord: "doordat", uitleg: "Verbindingswoord dat de reden aanwijst." }],
          theorie: "Cito vraagt vaak naar reden + gevolg. Hulpwoorden: 'omdat', 'doordat', 'vanwege' wijzen naar de REDEN. 'Daardoor', 'dus', 'vandaar' wijzen naar het GEVOLG.",
          voorbeelden: [{ type: "stap", tekst: "'Ik ben moe doordat ik laat naar bed ging.' → reden = laat naar bed." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag: 'WAAROM gebeurde het?' Antwoord = reden." }],
          niveaus: {
            basis: "Te weinig water. A.",
            simpeler: "Doordat = reden. Wat staat erna? Te weinig water. = A.",
            nogSimpeler: "Reden = wat erna staat = water. A.",
          },
        },
      },
      {
        q: "Een schrijver gebruikt het woord **'echter'** om aan te geven dat...",
        options: ["Er komt een tegenstelling", "Er komt een gevolg", "Hij iets gaat herhalen", "Hij ophoudt"],
        answer: 0,
        wrongHints: [null, "Gevolg-signaal is 'daardoor'/'dus'.", "Echter is geen herhaal-signaal.", "Echter staat midden in een tekst, geen einde-signaal."],
      },
      {
        q: "*'De hoofdgedachte van een tekst is...'*",
        options: ["De belangrijkste boodschap", "De eerste zin", "Het langste stuk", "De namen van personen"],
        answer: 0,
        wrongHints: [null, "Vaak begint een tekst met inleiding, niet altijd met de hoofdgedachte.", "Het langste stuk hoeft niet het belangrijkste te zijn.", "Namen zijn details, geen hoofdgedachte."],
        uitlegPad: {
          stappen: [
            { titel: "Hoofdgedachte = boodschap", tekst: "De hoofdgedachte is wat de schrijver in één zin wil zeggen — de kernboodschap. Alles in de tekst dient daarvoor." },
            { titel: "Hoe vind je hem?", tekst: "Vraag jezelf: 'als ik deze tekst in één zin zou samenvatten, wat staat er dan?' Vaak vind je iets in inleiding of slot terug." },
          ],
          woorden: [{ woord: "hoofdgedachte", uitleg: "De kernboodschap van een tekst." }],
          theorie: "Bij Cito staat de hoofdgedachte vaak NIET letterlijk in de tekst. Je moet 'm afleiden. Pas op voor antwoorden die alleen een detail noemen.",
          voorbeelden: [{ type: "stap", tekst: "Tekst over hond uitlaten met regen: hoofdgedachte = 'ook bij slecht weer is uitlaten nodig'. NIET: 'het regende veel'." }],
          basiskennis: [{ onderwerp: "Anders dan", uitleg: "Onderwerp ≠ hoofdgedachte. Onderwerp = WAAR de tekst over gaat. Hoofdgedachte = WAT de schrijver erover zegt." }],
          niveaus: {
            basis: "Belangrijkste boodschap. A.",
            simpeler: "Wat zegt de tekst écht? = hoofdgedachte = A.",
            nogSimpeler: "Belangrijkste = A.",
          },
        },
      },
      {
        q: "Een **alinea** is...",
        options: ["Een blok tekst over één onderwerp", "Een hoofdletter", "Een leesteken", "Een titel"],
        answer: 0,
        wrongHints: [null, "Hoofdletter is iets anders.", "Leesteken is een punt/komma — geen alinea.", "Titel staat boven de tekst, alinea is in de tekst."],
      },
      {
        q: "*Wat is het verschil tussen* **'feit'** *en* **'mening'**?",
        options: ["Feit kun je controleren, mening is wat iemand vindt", "Feit is positief, mening is negatief", "Geen verschil", "Feit staat in inleiding, mening in slot"],
        answer: 0,
        wrongHints: [null, "Geen verband met positief/negatief.", "Wel een verschil — belangrijk bij Cito!", "Staat geen vaste plek voor."],
        uitlegPad: {
          stappen: [
            { titel: "Feit = controleerbaar", tekst: "Een feit is iets waar iedereen het over eens kan zijn omdat het te controleren is. *'De aarde draait om de zon.'* = feit (bewezen)." },
            { titel: "Mening = persoonlijk", tekst: "Een mening is wat iemand denkt of vindt. *'Aardrijkskunde is het leukste vak.'* = mening (niet iedereen vindt dat)." },
            { titel: "Cito-truc", tekst: "Bij 'feit of mening?'-vragen: kun je het opzoeken in een boek of meten? Feit. Begint met 'ik vind' of 'volgens mij'? Mening." },
          ],
          woorden: [
            { woord: "feit", uitleg: "Iets dat te bewijzen of te controleren is." },
            { woord: "mening", uitleg: "Wat iemand persoonlijk denkt." },
          ],
          theorie: "Bij Cito krijg je vaak een lijst zinnen en moet je per zin zeggen: feit of mening? Let op signaalwoorden zoals 'mijns inziens', 'ik denk', 'volgens mij' = mening.",
          voorbeelden: [
            { type: "stap", tekst: "'Nederland heeft 17 miljoen inwoners.' = feit." },
            { type: "stap", tekst: "'Nederlandse zomers zijn te kort.' = mening." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Feit = waar voor iedereen. Mening = waar voor één persoon." }],
          niveaus: {
            basis: "Feit kun je controleren, mening niet. A.",
            simpeler: "Feit = bewijsbaar. Mening = persoonlijk. = A.",
            nogSimpeler: "Controleerbaar = A.",
          },
        },
      },
      {
        q: "Welk woord wijst op een **voorbeeld**?",
        options: ["Bijvoorbeeld", "Omdat", "Maar", "Dus"],
        answer: 0,
        wrongHints: [null, "Reden-signaal.", "Tegenstelling.", "Gevolg-signaal."],
      },
      {
        q: "Een **kernzin** van een alinea is...",
        options: ["De zin die de hoofdgedachte van de alinea bevat", "De eerste zin altijd", "De langste zin", "De korte zin"],
        answer: 0,
        wrongHints: [null, "Soms wel, niet altijd.", "Lengte zegt niets.", "Lengte zegt niets."],
        uitlegPad: {
          stappen: [
            { titel: "Kernzin = mini-hoofdgedachte", tekst: "Elke alinea heeft één kernzin: dat is de zin die het belangrijkste zegt over wat de alinea bespreekt." },
            { titel: "Hoe vinden?", tekst: "Vraag: 'als ik de hele alinea wegstreep behalve één zin, welke moet blijven?' Dat is de kernzin." },
          ],
          woorden: [{ woord: "alinea", uitleg: "Blok tekst over één onderwerp." }],
          theorie: "Cito-truc: kernzin staat vaak voorin of achteraan in een alinea. Niet altijd! Bij argumentatie soms achteraan ('Dus...').",
          voorbeelden: [{ type: "stap", tekst: "Alinea over honden — kernzin: 'Honden zijn loyale dieren.' De rest geeft voorbeelden." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Hoofdgedachte = boodschap van HELE tekst. Kernzin = boodschap van ÉÉN alinea." }],
          niveaus: {
            basis: "Kernzin = de zin met de hoofdgedachte van de alinea. A.",
            simpeler: "Belangrijkste zin in alinea = kernzin. = A.",
            nogSimpeler: "Belangrijkste zin = A.",
          },
        },
      },
      {
        q: "Een tekst die je **wil overtuigen** van iets is een...",
        options: ["Betoog", "Verslag", "Verhaal", "Recept"],
        answer: 0,
        wrongHints: [null, "Verslag geeft feiten, geen mening.", "Verhaal is fictie.", "Geen tekst-soort die overtuigt."],
      },
      {
        q: "*'Bovendien is er nog een **belangrijk argument**...'* — welk signaalwoord?",
        options: ["Toevoeging (extra argument)", "Tegenstelling", "Gevolg", "Reden"],
        answer: 0,
        wrongHints: [null, "Daarvoor heb je 'maar', 'echter'.", "Daarvoor 'dus', 'daarom'.", "Daarvoor 'omdat', 'doordat'."],
      },
      {
        q: "Bij **kritisch lezen** vraag je je vooral af...",
        options: ["Klopt dit en hoe weet de schrijver dat?", "Hoe oud is de tekst?", "Wat is het lettertype?", "Hoe lang is de tekst?"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet relevant voor kritisch lezen.", "Niet relevant."],
        uitlegPad: {
          stappen: [
            { titel: "Kritisch ≠ negatief", tekst: "Kritisch lezen betekent NIET dat je alles afkeurt. Het betekent: je gelooft niet zomaar wat er staat, je vraagt naar bewijs." },
            { titel: "3 vragen", tekst: "Vraag bij elk artikel: 1) Wat beweert de schrijver? 2) Welk bewijs geeft hij? 3) Is dat bewijs betrouwbaar?" },
          ],
          woorden: [{ woord: "kritisch", uitleg: "Beoordelen of iets klopt, niet zomaar accepteren." }],
          theorie: "Cito-truc: vraag je af 'wie schreef dit?' en 'waar haalt hij zijn informatie vandaan?'. Een mening van één persoon is geen bewijs.",
          voorbeelden: [{ type: "stap", tekst: "Reclame: 'Onze pasta is het lekkerst!' → mening van fabrikant. Niet betrouwbaar als feit." }],
          basiskennis: [{ onderwerp: "Bronnen", uitleg: "Wetenschappers, officiële instanties (CBS, RIVM) zijn betrouwbaarder dan reclame of social-media-posts." }],
          niveaus: {
            basis: "Klopt dit en waarom denkt de schrijver dat? A.",
            simpeler: "Kritisch = vragen naar bewijs. = A.",
            nogSimpeler: "Bewijs zoeken = A.",
          },
        },
      },
    ],
  },

  // STAP 3: Spelling (~20 min)
  {
    title: "Spelling — ~20 min",
    explanation:
      "**Wat verwacht je op de Doorstroomtoets?**\n\n5-10 spelling-vragen — vaak meerkeuze: 'welk woord is **goed gespeld**?'\n\n**De top-5 valkuilen**:\n• **d/t/dt** — *'wordt'* (hij wordt = stam + t) vs *'word'* (ik word = alleen stam).\n• **ei vs ij** — hier helpt geen regel, je moet ze **uit je hoofd kennen** (zie [spelling-ei-ij-au-ou pad]).\n• **au vs ou** — zelfde verhaal, uit je hoofd.\n• **Samengestelde woorden**: 'paardenstaart' is één woord, 'paard staart' niet.\n• **Hoofdletters**: alleen aan begin van zin, of bij namen.\n\n**'t kofschip-truc voor werkwoord-spelling** *(verleden tijd!)*:\n• Stam eindigt op **'t kofschip-letter** (t, k, f, s, ch, p) → **+ te** of **+ ten**.\n• Anders → **+ de** of **+ den**.\n\nVoorbeelden:\n• 'praten' → 'praat' (stam) → eindigt op 't' → 't kofschip → 'praatte' (verleden tijd).\n• 'wandelen' → 'wandel' → eindigt op 'l' (niet 't kofschip) → 'wandelde'.\n\n**Cito-truc — 'wordt' of 'word'?**\n• 'Ik **word** ziek' *(ik + stam, geen t)*.\n• 'Hij **wordt** ziek' *(hij + stam + t)*.\n• Vervang door 'lopen': loop / loopt. Hetzelfde patroon.\n\n**Bron**: voor officiële voorbeelden zie " + examenLink + ".\n\n**Klaar voor 5 oefenvragen?**",
    checks: [
      {
        q: "Welke zin is **goed gespeld**?",
        options: ["Hij wordt boos.", "Hij word boos.", "Hij wort boos.", "Hij worden boos."],
        answer: 0,
        wrongHints: [null, "Bij 'hij/zij/het' altijd stam + t.", "Stam 'word' eindigt op d, geen t aan einde.", "Plural werkwoord, hier is 't enkelvoud (hij)."],
      },
      {
        q: "*'Gisteren **... ik naar school.'* Welk werkwoord?",
        options: ["fietste", "fietsde", "fietsten", "fiets"],
        answer: 0,
        wrongHints: [null, "'fietsen' → stam 'fiets' → eindigt op s → 't kofschip → +te = fietste.", "Plural — vraag is 'ik' (enkelvoud).", "Geen werkwoord-tijd."],
        uitlegPad: {
          stappen: [
            { titel: "'t kofschip", tekst: "Stam 'fiets' eindigt op 's'. 's' zit in 't kofschip → krijg '-te' voor verleden tijd. Dus 'ik fietste'." },
          ],
          woorden: [{ woord: "'t kofschip", uitleg: "Letters t-k-f-s-ch-p. Werkwoorden waarvan de stam hierop eindigt, krijgen -te in verleden tijd." }],
          theorie: "Verleden tijd Nederlands: 't kofschip → -te, anders → -de.",
          voorbeelden: [{ type: "stap", tekst: "fiets (op s) → fietste / wandel (op l) → wandelde." }],
          basiskennis: [{ onderwerp: "Persoonsvorm", uitleg: "'Ik' = enkelvoud, dus enkelvoudig werkwoord (-te, niet -ten)." }],
          niveaus: {
            basis: "fietste (stam 'fiets' op s → -te). A.",
            simpeler: "Werkwoord: fietsen. Stam: fiets. Eindigt op s (zit in 't kofschip). Voor verleden tijd + -te. Dus: ik fietste. = A.",
            nogSimpeler: "fietste = A.",
          },
        },
      },
      {
        q: "Welke schrijfwijze is **fout**?",
        options: ["paarden staart", "paardenstaart", "fietsenstalling", "computerscherm"],
        answer: 0,
        wrongHints: [null, "Dat is juist — paardenstaart is 1 samenstelling.", "Dit is goed gespeld (1 woord).", "Dit is goed gespeld (1 woord)."],
      },
      {
        q: "Wanneer schrijf je een **hoofdletter**?",
        options: ["Aan begin van zin of bij namen", "Altijd in werkwoorden", "Bij alle korte woorden", "Bij vragen"],
        answer: 0,
        wrongHints: [null, "Niet in werkwoorden zonder reden.", "Korte woorden krijgen normaal geen hoofdletter.", "Vragen krijgen alleen hoofdletter aan begin."],
      },
      {
        q: "Welk woord schrijf je **met 'ei'**?",
        options: ["trein", "vlijtig", "lijden", "blijven"],
        answer: 0,
        wrongHints: [null, "Andere spellingvariant.", "Andere spellingvariant.", "Andere spellingvariant."],
        uitlegPad: {
          stappen: [
            { titel: "Geen regel, uit hoofd", tekst: "Voor ei/ij bestaat geen makkelijke regel — woorden moet je uit hoofd kennen." },
            { titel: "Truc: rijmwoorden", tekst: "'Trein' rijmt met 'pijn' (ij) — maar trein is ei. Onthoud de uitzonderingen!" },
          ],
          woorden: [
            { woord: "ei (korte ei)", uitleg: "Klassieke ei: trein, mei, klein, klein, etc." },
            { woord: "ij (lange ij)", uitleg: "Klassieke ij: vlijtig, lijden, blijven, pijn." },
          ],
          theorie: "Cito-spelling 'ei/ij': leer de meest-voorkomende woorden uit hoofd. Bij twijfel: spreek hardop en raden — vaak voel je 't.",
          voorbeelden: [{ type: "stap", tekst: "Met ei: trein/reis/mei/zei/klein. Met ij: blij/wijn/lijden/pijn/krijgen." }],
          basiskennis: [{ onderwerp: "Tip", uitleg: "Veel met ij: werkwoorden (krijgen, blijven, lijken). Veel met ei: korte concrete dingen (trein, mei, zei, klein)." }],
          niveaus: {
            basis: "trein. A.",
            simpeler: "Trein = ei. Vlijtig/lijden/blijven = ij. = A.",
            nogSimpeler: "trein = A.",
          },
        },
      },
      {
        q: "*'Ik **... gisteren** een mooi boek.'* Welk werkwoord?",
        options: ["las", "lees", "laste", "lazen"],
        answer: 0,
        wrongHints: [null, "Tegenwoordige tijd.", "Geen werkwoord.", "Meervoud — vraag is 'ik' (enkelvoud)."],
      },
      {
        q: "Welk woord is **goed** geschreven?",
        options: ["dinsdag", "Dinsdag", "DInsdag", "din sdag"],
        answer: 0,
        wrongHints: [null, "Hoofdletter is fout midden in zin.", "Tweede letter mag niet groot.", "Aan elkaar."],
        uitlegPad: {
          stappen: [
            { titel: "Weekdagen klein", tekst: "In Nederlands schrijven we weekdagen + maanden + jaargetijden met **kleine letter**. Anders dan in Engels!" },
          ],
          woorden: [{ woord: "hoofdletter-regel NL", uitleg: "Hoofdletter alleen bij: begin zin, namen (mensen/plaatsen/landen), eigennaam (Cito, Coca-Cola)." }],
          theorie: "Hoofdletter-regel NL: weekdagen + maanden + jaargetijden krijgen GEEN hoofdletter (anders dan Engels).",
          voorbeelden: [{ type: "stap", tekst: "EN: 'Monday in March' (beide hoofdletters). NL: 'maandag in maart' (beide klein)." }],
          basiskennis: [{ onderwerp: "Verschil EN-NL", uitleg: "Engels gebruikt veel meer hoofdletters dan Nederlands. Daarom letten op." }],
          niveaus: {
            basis: "dinsdag (klein). A.",
            simpeler: "Weekdagen in NL krijgen GEEN hoofdletter. Dus 'dinsdag', niet 'Dinsdag'. = A.",
            nogSimpeler: "dinsdag = A.",
          },
        },
      },
      {
        q: "Wat is **goed**?",
        options: ["Hij heeft gegeten.", "Hij heeft geet.", "Hij heeft eet.", "Hij heeft eaten."],
        answer: 0,
        wrongHints: [null, "Verkeerde vorm.", "Mist 'ge-'.", "Engels woord."],
      },
      {
        q: "Welk woord schrijf je **met 'au'** (niet ou)?",
        options: ["pauw", "boud", "houd", "stout"],
        answer: 0,
        wrongHints: [null, "Andere spellingvariant.", "Andere spellingvariant.", "Andere spellingvariant."],
        uitlegPad: {
          stappen: [
            { titel: "au/ou: geen vaste regel", tekst: "Voor 'au' en 'ou' bestaat geen automatische regel. Je moet de woorden uit je hoofd leren — net als bij ei/ij." },
            { titel: "Klassieke 'au'-woorden", tekst: "pauw, kabouter, paus, blauw, dauw, klauw, gauw, auto — leer ze als groep." },
            { titel: "Klassieke 'ou'-woorden", tekst: "hout, houd, koud, stout, oud, boud, vouw, gouden, schouder — leer ze als groep." },
          ],
          woorden: [
            { woord: "au", uitleg: "pauw, blauw, klauw, kabouter, paus, auto." },
            { woord: "ou", uitleg: "hout, koud, oud, stout, vouw, schouder." },
          ],
          theorie: "Cito-tip: ezelsbruggetjes helpen. 'Pauw' heeft 'au' — denk aan de vogel. 'Stout' heeft 'ou' — denk aan stout zijn. Bij twijfel: opzoeken en oefenen.",
          voorbeelden: [
            { type: "stap", tekst: "Met au: pauw, blauw, klauw, paus, gauw, kabouter, auto." },
            { type: "stap", tekst: "Met ou: hout, oud, koud, stout, schouder, vouw, gouden." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lees veel — zo onthoud je vanzelf welk woord welke vorm heeft." }],
          niveaus: {
            basis: "Au/ou: geen regel, alleen uit hoofd. pauw = au. stout = ou.",
            simpeler: "'Pauw' = de blauwe vogel met grote staart. 'Stout' = niet braaf.",
            nogSimpeler: "Au/ou: leer per woord.",
          },
        },
      },
      {
        q: "**'Hij ___ snel'** — welk werkwoord?",
        options: ["loopt", "loop", "lopen", "gelopen"],
        answer: 0,
        wrongHints: [null, "Voor 'ik' (1e pers).", "Meervoud.", "Voltooid deelwoord."],
      },
      {
        q: "Welk woord is een **samenstelling** (1 woord)?",
        options: ["zonnebloem", "zonne bloem", "zon en bloem", "zonn-bloem"],
        answer: 0,
        wrongHints: [null, "Spatie = fout — moet aan elkaar.", "Met 'en' = geen samenstelling.", "Streepje hier niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een samenstelling?", tekst: "Een samenstelling is een nieuw woord dat je maakt door 2 woorden AAN ELKAAR te schrijven." },
            { titel: "Aan elkaar, geen spatie", tekst: "'zonnebloem' = zon + bloem aan elkaar. NIET met spatie. NIET met streepje. NIET met 'en'." },
            { titel: "Voorbeelden", tekst: "tandenborstel, schooltas, fietsstuur, brandweerwagen — allemaal 2+ woorden vastgeplakt." },
          ],
          woorden: [
            { woord: "samenstelling", uitleg: "Twee woorden samen één nieuw woord." },
            { woord: "tussen-n", uitleg: "Vaak een -n tussen: zonNebloem, pannenkoek, boekenkast." },
          ],
          theorie: "Cito-regel: bij samenstellingen NOOIT spatie. 'pannen koek' = fout. 'pannenkoek' = goed. Engels gebruikt vaak spaties (ice cream), Nederlands plakt vast.",
          voorbeelden: [
            { type: "stap", tekst: "huis + deur → huisdeur (1 woord)." },
            { type: "stap", tekst: "school + tas → schooltas (1 woord)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag jezelf: kan ik het ook als 1 begrip lezen? Ja → aan elkaar." }],
          niveaus: {
            basis: "Samenstelling = 2 woorden vast aan elkaar, geen spatie.",
            simpeler: "zon + bloem = zonnebloem. Geen spatie. Geen streepje.",
            nogSimpeler: "Plak ze vast: 1 woord!",
          },
        },
      },
      {
        q: "Welke zin is **goed**?",
        options: ["Ik antwoordde 'ja'.", "Ik antwoorde 'ja'.", "Ik anwoordde 'ja'.", "Ik antwoorden 'ja'."],
        answer: 0,
        wrongHints: [null, "Spelfout: dubbele d nodig.", "Spelfout in stam.", "Plural — vraag is ik (enkelvoud)."],
      },
      {
        q: "**'gisteren ___ ik thuis'** — werkwoord?",
        options: ["was", "is", "ben", "zijn"],
        answer: 0,
        wrongHints: [null, "Tegenwoordige tijd 3e pers.", "Tegenwoordige tijd 1e pers.", "Infinitief / meervoud."],
      },
      {
        q: "Welk woord schrijf je met **'ij'** (niet ei)?",
        options: ["wijn", "trein", "klein", "stein"],
        answer: 0,
        wrongHints: [null, "Andere spellingvariant.", "Andere spellingvariant.", "Niet uit Nederlands."],
      },
      {
        q: "**Tegenwoordige tijd** van 'lopen' bij 'wij'?",
        options: ["wij lopen", "wij loopt", "wij looptn", "wij loop"],
        answer: 0,
        wrongHints: [null, "Enkelvoud-vorm.", "Geen NL.", "Stam zonder uitgang."],
      },
      {
        q: "Welk woord is **goed gespeld**?",
        options: ["beschuit", "beschuid", "beshuit", "beschwit"],
        answer: 0,
        wrongHints: [null, "Eindigt op t, niet d.", "Mist c.", "Geen NL."],
      },
      {
        q: "**'Het kind ___ blij'** — welk werkwoord (tegenwoordige tijd)?",
        options: ["is", "zijn", "was", "ben"],
        answer: 0,
        wrongHints: [null, "Meervoud.", "Verleden tijd.", "1e persoon."],
      },
      {
        q: "*'Gisteren **... we naar opa.'* Welk werkwoord?",
        options: ["wandelden", "wandelde", "wandelten", "wandelt"],
        answer: 0,
        wrongHints: [null, "Enkelvoud — 'we' is meervoud.", "Stam 'wandel' eindigt niet op kofschip-letter → +den, niet +ten.", "Tegenwoordige tijd, hier verleden."],
        uitlegPad: {
          stappen: [
            { titel: "Meervoud + verleden", tekst: "'We' is meervoud (wij/we). In verleden tijd: stam + de/te → meervoud krijgt +n: 'den' of 'ten'." },
            { titel: "Kofschip-check", tekst: "'wandelen' → stam 'wandel' → eindigt op 'l' → NIET 't kofschip → +de (+den voor meervoud) → 'wandelden'." },
          ],
          woorden: [{ woord: "'t kofschip", uitleg: "Geheugensteuntje: t, k, f, s, ch, p — bij deze letters +te(n), anders +de(n)." }],
          theorie: "Cito test vaak werkwoordspelling verleden tijd meervoud. Stappenplan: 1) stam zoeken, 2) laatste letter checken, 3) +de(n) of +te(n) plakken.",
          voorbeelden: [
            { type: "stap", tekst: "'praten' → 'praat' → eindigt op 't' → +te(n) → 'praatten'." },
            { type: "stap", tekst: "'spelen' → 'speel' → 'l' niet in kofschip → +de(n) → 'speelden'." },
          ],
          basiskennis: [{ onderwerp: "Single vs meervoud", uitleg: "Enkelvoud: wandelde. Meervoud: wandelden." }],
          niveaus: {
            basis: "wandelden. A.",
            simpeler: "We = meervoud + verleden. 'l' geen kofschip → +den. = A.",
            nogSimpeler: "Meervoud verleden = +den. A.",
          },
        },
      },
      {
        q: "Welk woord is **goed gespeld**?",
        options: ["computer", "compjuter", "konputer", "computter"],
        answer: 0,
        wrongHints: [null, "Niet — 'pj' bestaat niet zo.", "Met c, niet k.", "Eén t."],
      },
      {
        q: "*'Het kind **... drie ijsjes gegeten.'* Welk werkwoord?",
        options: ["heeft", "hebben", "hebt", "had"],
        answer: 0,
        wrongHints: [null, "Meervoud.", "2e persoon.", "Verleden tijd — gevraagd is tegenwoordige perfectum."],
      },
      {
        q: "Welk woord is **goed gespeld**?",
        options: ["fietspad", "fiets pad", "fietzpad", "fietsbat"],
        answer: 0,
        wrongHints: [null, "Samengesteld woord — aan elkaar.", "Eindigt op s, niet z.", "Geen NL."],
        uitlegPad: {
          stappen: [
            { titel: "Samenstelling = aan elkaar", tekst: "Twee woorden die samen iets nieuws betekenen schrijf je aan elkaar: fiets + pad = fietspad." },
            { titel: "Cito-valkuil", tekst: "Nederlands schrijft samenstellingen vaak aan elkaar; Engels juist los. Niet door elkaar halen!" },
          ],
          woorden: [{ woord: "samenstelling", uitleg: "Eén woord gemaakt van twee of meer woorden." }],
          theorie: "Cito test vaak: 'paardenstaart' / 'paard en staart'? Vraag jezelf: betekent het iets nieuws of zijn het 2 dingen? Nieuw = aan elkaar.",
          voorbeelden: [
            { type: "stap", tekst: "tafel + kleed = tafelkleed (één ding)." },
            { type: "stap", tekst: "school + plein = schoolplein (één plek)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Twee woorden → één betekenis → aan elkaar." }],
          niveaus: {
            basis: "fietspad — samenstelling. A.",
            simpeler: "Fiets + pad = 1 ding = aan elkaar. = A.",
            nogSimpeler: "Aan elkaar = A.",
          },
        },
      },
      {
        q: "Welke zin is **goed gespeld**?",
        options: ["Wij vinden het leuk.", "Wij vind het leuk.", "Wij vindt het leuk.", "Wij vinden t leuk."],
        answer: 0,
        wrongHints: [null, "Enkelvoud.", "Enkelvoud-vorm.", "'t' is geen NL — gebruik 'het'."],
      },
      {
        q: "Welk woord is **goed gespeld**: '**eiland**' of '**ijland**'?",
        options: ["eiland", "ijland", "Beide", "Geen"],
        answer: 0,
        wrongHints: [null, "Onjuist — moet uit je hoofd geleerd.", "Geen — slechts één is goed.", "Wel — 'eiland' bestaat."],
        uitlegPad: {
          stappen: [
            { titel: "ei of ij?", tekst: "Voor ei/ij bestaat geen regel. Je moet woorden gewoon UIT JE HOOFD kennen. 'Eiland' schrijf je met ei." },
            { titel: "Cito-truc", tekst: "Bij twijfel: kun je het woord met 'ij' nog ergens in zien? Komt 'ij-land' veel voor? Nee. 'Eiland' wel. Vertrouw op wat bekend voelt." },
          ],
          woorden: [{ woord: "ei vs ij", uitleg: "Beide klinken hetzelfde, maar verschillende spelling. Geen regel." }],
          theorie: "Cito-tip: er staan ~50 woorden vaak in toetsen. Trein, fiets, ei, ijs, mei, hij, zij, blij, wij — leer ze één voor één.",
          voorbeelden: [
            { type: "stap", tekst: "Met ei: ei, eiland, klein, plein, gein." },
            { type: "stap", tekst: "Met ij: ijs, hij, zij, blij, mij, wij, vrij." },
          ],
          basiskennis: [{ onderwerp: "Geheugentruc", uitleg: "Soms helpt het: 'lijn' (recht) heeft ij. 'plein' (waar mensen samen komen) heeft ei. Maar er zijn veel uitzonderingen." }],
          niveaus: {
            basis: "eiland. A.",
            simpeler: "'Eiland' kennen we, 'ijland' niet. = A.",
            nogSimpeler: "eiland = A.",
          },
        },
      },
      {
        q: "*'Tom **wandelt** door het park'* — Welke **persoonsvorm** is dat?",
        options: ["wandelt", "Tom", "door", "park"],
        answer: 0,
        wrongHints: [null, "Dat is onderwerp.", "Voorzetsel.", "Zelfstandig naamwoord."],
      },
      {
        q: "Welk woord is **goed**: 'gebeurde' of 'gebeurden'?",
        options: ["Hangt af van enkel/meervoud", "Altijd 'gebeurde'", "Altijd 'gebeurden'", "Beide fout"],
        answer: 0,
        wrongHints: [null, "Niet — bij meervoud: gebeurden.", "Niet — bij enkelvoud: gebeurde.", "Beide bestaan."],
      },
      {
        q: "Welk woord is **goed gespeld**?",
        options: ["pannenkoek", "pannekoek", "pann koek", "panekoek"],
        answer: 0,
        wrongHints: [null, "Mist tussen-n bij samenstelling.", "Geen NL.", "Mist tussen-n."],
        uitlegPad: {
          stappen: [
            { titel: "Tussen-n regel", tekst: "Bij sommige samenstellingen komt 'en' tussen de delen: pan + koek = pannenkoek (n erbij)." },
            { titel: "Wanneer?", tekst: "Sinds 1995 schrijven we 'tussen-n' als het eerste woord een meervouds-'en' heeft." },
          ],
          woorden: [{ woord: "tussen-n", uitleg: "Extra letter 'en' tussen 2 woorden bij samenstelling." }],
          theorie: "Cito-truc: woorden zoals 'pannenkoek', 'rozenstruik', 'boekenkast' — altijd met tussen-n. Bij twijfel: kan eerste woord ook 'enen' krijgen (pannen, rozen, boeken)? Ja → tussen-n.",
          voorbeelden: [
            { type: "stap", tekst: "boek + kast = boekenkast (boekens? boeken? → boeken → tussen-n)." },
            { type: "stap", tekst: "zon + brand = zonnebrand (zonnen? Ja → tussen-n)." },
          ],
          basiskennis: [{ onderwerp: "Uitzondering", uitleg: "Geen tussen-n bij: paardebloem (geen 'paarden' meervoud nodig), zonneschijn (geen 'zonnen' nodig)." }],
          niveaus: {
            basis: "pannenkoek met tussen-n. A.",
            simpeler: "Pannen + koek = pannenkoek. = A.",
            nogSimpeler: "Tussen-n = A.",
          },
        },
      },
      {
        q: "*'Het kind **was** ziek.'* Welke **tijd**?",
        options: ["Verleden tijd", "Tegenwoordige tijd", "Toekomstige tijd", "Voltooide tijd"],
        answer: 0,
        wrongHints: [null, "'was' = al gebeurd.", "Niet — 'was' wijst niet op toekomst.", "Voltooide = 'is geweest'."],
      },
    ],
  },

  // STAP 4: Taalverzorging — mix (~20 min)
  {
    title: "Taalverzorging — interpunctie & zinnen — ~20 min",
    explanation:
      "**Wat verwacht je op de Doorstroomtoets?**\n\nTaalverzorging = **leestekens + zinsbouw**. 5-10 vragen.\n\n**Top-4 onderwerpen**:\n• **Punt of vraagteken?** Een vraag eindigt op **'?'**. Een zin op **'.'**\n• **Komma's** — bij opsommingen (appel, peer, druif **en** banaan) en tussen 2 zinnen met *omdat / maar / als*.\n• **Aanhalingstekens** *''*\\* — bij wat iemand zegt.\n• **Hoofdletter aan begin** — altijd.\n\n**Cito-truc 1 — opsomming**:\n• 'Ik kocht appels, peren, druiven **en** bananen.'\n• Tussen de laatste 2 staat **'en'** (geen komma).\n\n**Cito-truc 2 — zinnen verbinden**:\n• 'Ik ben moe, **omdat** ik laat opbleef.' *(één zin met 2 delen)*\n• Geen punt midden in — de komma scheidt de delen.\n\n**Cito-truc 3 — directe rede**:\n• Mama zei: '**Ga je tanden poetsen.**'\n• Aanhalingstekens om wat ze zegt + dubbele punt ervoor.\n\n**Cito-truc 4 — zin vs deelzin**:\nEen volledige zin heeft een **onderwerp** (wie?) + **werkwoord** (doet wat?). Anders is het geen complete zin.\n• ✓ 'De hond rent.' *(hond = onderwerp, rent = werkwoord)*\n• ✗ 'De rennende hond.' *(geen werkwoord — geen zin)*\n\n**Bron**: voor officiële voorbeelden zie " + examenLink + ".\n\n**Klaar voor 5 oefenvragen?**",
    checks: [
      {
        q: "Hoe **eindigt een vraag**?",
        options: ["Met een vraagteken (?)", "Met een punt (.)", "Met een komma (,)", "Met een uitroepteken (!)"],
        answer: 0,
        wrongHints: [null, "Een punt is voor een gewone zin.", "Een komma zit binnen een zin.", "Uitroepteken is voor verbazing of bevel."],
      },
      {
        q: "Welke zin heeft **komma's op de goede plek**?",
        options: ["Ik kocht appels, peren en druiven.", "Ik kocht appels peren, en druiven.", "Ik kocht appels, peren, druiven.", "Ik kocht, appels peren en druiven."],
        answer: 0,
        wrongHints: [null, "Geen komma's vóór elk woord — alleen tussen items.", "Geen komma vóór de allerlaatste — daar staat 'en'.", "Geen komma ná het werkwoord."],
        uitlegPad: {
          stappen: [
            { titel: "Komma + en", tekst: "Bij een opsomming staat tussen de eerste items een komma, en vóór het laatste item gebruik je 'en' (zonder komma)." },
          ],
          woorden: [{ woord: "opsomming", uitleg: "Een rijtje dingen achter elkaar." }],
          theorie: "Komma's zijn voor leesgemak. Bij 'en' tussen 2 woorden geen komma.",
          voorbeelden: [{ type: "stap", tekst: "appels, peren, druiven en bananen — komma's tussen items, niet vóór 'en'." }],
          basiskennis: [{ onderwerp: "Logica", uitleg: "Een komma zegt: 'er komt nog meer'. Bij 'en' is dat al duidelijk." }],
          niveaus: {
            basis: "Komma tussen items, geen komma vóór 'en'. A.",
            simpeler: "Bij een opsomming: appels, peren en druiven. Tussen losse items komma, vóór 'en' geen komma. = A.",
            nogSimpeler: "Optie a = A.",
          },
        },
      },
      {
        q: "Wat zijn **aanhalingstekens** voor?",
        options: ["Om aan te geven wat iemand zegt", "Om sommen te tellen", "Om hoofdletters te maken", "Om alinea's te scheiden"],
        answer: 0,
        wrongHints: [null, "Sommen tellen doe je met cijfers.", "Hoofdletters zijn iets anders.", "Alinea's scheid je met een nieuwe regel."],
      },
      {
        q: "Welke zin is **geen complete zin**?",
        options: ["Het rennende paard.", "Het paard rent.", "Het paard rent snel.", "Het paard rent door de wei."],
        answer: 0,
        wrongHints: [null, "Heeft werkwoord 'rent'.", "Heeft werkwoord 'rent'.", "Heeft werkwoord 'rent'."],
      },
      {
        q: "*'Ik ga naar buiten ___ het regent.'* Welk woord past?",
        options: ["maar", "omdat", "en", "als"],
        answer: 0,
        wrongHints: [null, "'Omdat' = reden. Dan ga je juist NIET naar buiten vanwege regen — vreemd zonder context.", "'En' is opsommend, mist het tegenstelling-gevoel.", "'Als' geeft voorwaarde, maar de zin is meer een tegenstelling."],
      },
      {
        q: "*Mama zei tegen Lisa* ___ 'Ga je tanden poetsen.' Welk leesteken past?",
        options: ["dubbele punt :", "punt .", "komma ,", "uitroepteken !"],
        answer: 0,
        wrongHints: [null, "Een punt sluit een zin af, niet introduceert.", "Komma kan ook maar dubbele punt is correcter bij directe rede.", "Geen sterke emotie hier."],
      },
      {
        q: "Welk zin heeft een **fout** met komma's?",
        options: ["Ik wandel, en ik fiets.", "Ik wandel en ik fiets.", "Ik wandel, omdat het mooi weer is.", "Ik wandel, maar ik fiets niet."],
        answer: 0,
        wrongHints: [null, "Goed — geen komma nodig.", "Goed — komma vóór 'omdat' (samengestelde zin).", "Goed — komma vóór 'maar' (tegenstelling)."],
      },
      {
        q: "Welk zin is **goed**?",
        options: ["Jan, Piet en Klaas spelen.", "Jan Piet en Klaas spelen.", "Jan, Piet, en Klaas spelen.", "Jan, Piet en, Klaas spelen."],
        answer: 0,
        wrongHints: [null, "Geen komma's — moeilijk te lezen.", "Komma vóór 'en' = fout in NL-opsomming.", "Komma op verkeerde plek."],
      },
      {
        q: "Welke zin heeft een **vraagteken** nodig?",
        options: ["Waar is mijn jas", "De jas is rood", "Een jas in de kast", "Mijn jas is hier"],
        answer: 0,
        wrongHints: [null, "Mededelende zin → punt.", "Geen werkwoord — niet eens hele zin.", "Mededelend."],
      },
      {
        q: "Welke is een **complete zin**?",
        options: ["De kat slaapt.", "Slapende kat.", "Op de bank.", "De rode kat."],
        answer: 0,
        wrongHints: [null, "Geen werkwoord.", "Geen onderwerp + werkwoord.", "Geen werkwoord."],
      },
      {
        q: "Welk woord krijgt **een hoofdletter**?",
        options: ["Amsterdam (plaatsnaam)", "maandag (weekdag)", "boek (zelfstandig naamwoord)", "rennen (werkwoord)"],
        answer: 0,
        wrongHints: [null, "Krijgt in NL geen hoofdletter.", "Krijgt in NL geen hoofdletter.", "Krijgt in NL geen hoofdletter."],
      },
      {
        q: "Welke zin heeft **goede aanhalingstekens**?",
        options: ["Hij zei: 'Hallo.'", "Hij zei Hallo.", "Hij zei: Hallo", "'Hij zei Hallo'"],
        answer: 0,
        wrongHints: [null, "Geen aanhalingstekens.", "Mist aanhalingstekens.", "Hele zin tussen aanhalingstekens = fout."],
      },
      {
        q: "Wat is het **onderwerp** in 'De kat slaapt'?",
        options: ["De kat", "Slaapt", "De", "Slaapt de kat"],
        answer: 0,
        wrongHints: [null, "Dat is het werkwoord.", "Lidwoord alleen.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is het onderwerp?", tekst: "Het onderwerp is **wie of wat de actie doet**. Vraag: 'Wie/wat slaapt?' → de kat." },
            { titel: "Truc: zet het werkwoord vóór", tekst: "Pak het werkwoord (slaapt) en vraag: 'Slaapt WIE?' Het antwoord is het onderwerp." },
            { titel: "Inclusief lidwoord", tekst: "'De kat' is samen het onderwerp — niet alleen 'kat'. Lidwoord (de/het/een) hoort erbij." },
          ],
          woorden: [
            { woord: "onderwerp", uitleg: "Wie/wat doet de actie." },
            { woord: "werkwoord", uitleg: "De actie zelf (slaapt, rent, eet)." },
            { woord: "lidwoord", uitleg: "de, het, een — hoort bij het onderwerp." },
          ],
          theorie: "Cito-tip: 'Wie of wat + werkwoord?' is de onderwerps-vraag. Antwoord = onderwerp. 'De kat slaapt' → 'Wie slaapt?' → de kat.",
          voorbeelden: [
            { type: "stap", tekst: "'Lisa rent.' → Wie rent? → Lisa." },
            { type: "stap", tekst: "'De auto rijdt.' → Wat rijdt? → de auto." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onderwerp staat meestal vooraan de zin. Werkwoord komt erna." }],
          niveaus: {
            basis: "Onderwerp = wie/wat de actie doet.",
            simpeler: "'De kat slaapt' → Wie slaapt? De kat. Dát is het onderwerp.",
            nogSimpeler: "Wie? = onderwerp.",
          },
        },
      },
      {
        q: "Wat is het **werkwoord** in 'Lisa rent hard'?",
        options: ["rent", "Lisa", "hard", "Geen"],
        answer: 0,
        wrongHints: [null, "Dat is onderwerp.", "Dat is bijvoeglijk naamwoord.", "Wel — rent."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een werkwoord?", tekst: "Een werkwoord is het **actie-woord** in de zin: wat gebeurt er? (rent, slaapt, eet, leest)." },
            { titel: "Truc: 'wat doet hij/zij?'", tekst: "Stel de vraag: 'wat doet Lisa?' → rent. Dat is het werkwoord." },
            { titel: "Niet bijwoord", tekst: "'hard' beschrijft HOE Lisa rent — geen werkwoord, maar een bijwoord." },
          ],
          woorden: [
            { woord: "werkwoord", uitleg: "Actie (rent, slaapt). Eindigt vaak op -t (bij hij/zij/het)." },
            { woord: "bijwoord", uitleg: "Beschrijft HOE iets gebeurt (hard, snel, langzaam)." },
          ],
          theorie: "Cito-tip: 'Wat doet [onderwerp]?' is de werkwoord-vraag. Antwoord = werkwoord. 'Lisa rent hard' → Wat doet Lisa? → rent.",
          voorbeelden: [
            { type: "stap", tekst: "'Tom leest.' → wat doet Tom? → leest." },
            { type: "stap", tekst: "'De kat eet snel.' → wat doet de kat? → eet. ('snel' = hoe = bijwoord)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Werkwoord = ding dat je kunt DOEN. Rennen kun je doen. 'Hard' kun je niet doen." }],
          niveaus: {
            basis: "Werkwoord = actie-woord (rent, slaapt, eet).",
            simpeler: "Vraag 'wat doet hij?'. Antwoord = werkwoord.",
            nogSimpeler: "Werkwoord = doen!",
          },
        },
      },
      {
        q: "Wat is het **lijdend voorwerp** in 'Ik eet een appel'?",
        options: ["een appel", "Ik", "eet", "Geen"],
        answer: 0,
        wrongHints: [null, "Onderwerp.", "Werkwoord.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een lijdend voorwerp?", tekst: "Het lijdend voorwerp is het ding WAAROP de actie van het werkwoord gericht is. Met andere woorden: WAT wordt er gegeten/gezien/gepakt?" },
            { titel: "Truc: 'Wat + werkwoord + onderwerp?'", tekst: "Vraag: 'WAT eet ik?' → een appel. Dát is het lijdend voorwerp." },
            { titel: "Verschil met onderwerp", tekst: "Onderwerp = wie/wat DOET. Lijdend voorwerp = WAT ondergaat de actie. In 'Ik eet een appel': ik = doe, appel = ondergaat." },
          ],
          woorden: [
            { woord: "lijdend voorwerp", uitleg: "WAT ondergaat de actie. Antwoord op 'wat + werkwoord + onderwerp'." },
            { woord: "onderwerp", uitleg: "WIE/WAT doet de actie." },
          ],
          theorie: "Cito-truc: zoek werkwoord (eet) + onderwerp (ik). Vraag dan: 'wat eet ik?' Antwoord = lijdend voorwerp. Niet alle zinnen hebben er één — 'Ik slaap' heeft geen lijdend voorwerp.",
          voorbeelden: [
            { type: "stap", tekst: "'Tom leest een boek.' → wat leest Tom? → een boek." },
            { type: "stap", tekst: "'Lisa schrijft een brief.' → wat schrijft Lisa? → een brief." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Wat + werkwoord + onderwerp? Antwoord = lijdend voorwerp." }],
          niveaus: {
            basis: "Lijdend voorwerp = WAT ondergaat de actie. Vraag 'wat + werkwoord + onderwerp?'",
            simpeler: "'Ik eet een appel.' → wat eet ik? Een appel.",
            nogSimpeler: "WAT? → lijdend voorwerp.",
          },
        },
      },
      {
        q: "Welke zin heeft een **bijvoeglijk naamwoord**?",
        options: ["De rode auto.", "De auto rijdt.", "Auto staat.", "Auto auto."],
        answer: 0,
        wrongHints: [null, "Geen beschrijving.", "Geen beschrijving.", "Geen NL."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een bijvoeglijk naamwoord?", tekst: "Een bijvoeglijk naamwoord beschrijft HOE iets is. Het staat meestal vóór een ander woord en geeft een kenmerk." },
            { titel: "Voorbeelden", tekst: "rode auto, grote tas, klein kind, mooi huis. 'rode/grote/klein/mooi' zijn bijvoeglijke naamwoorden." },
            { titel: "Truc: 'Hoe is het?'", tekst: "Vraag: 'hoe is de auto?' → rood. Dat is het bijvoeglijk naamwoord. Vraag: 'wat doet de auto?' → rijdt. Dat is geen bijvoeglijk naamwoord." },
          ],
          woorden: [
            { woord: "bijvoeglijk naamwoord", uitleg: "Beschrijft een kenmerk (kleur, grootte, vorm, gevoel)." },
            { woord: "zelfstandig naamwoord", uitleg: "Het DING dat beschreven wordt (auto, kind, huis)." },
          ],
          theorie: "Cito-tip: bijvoeglijk naamwoord eindigt vaak op -e in NL (rode, grote). Of staat op zichzelf (rood, groot). Test: kun je 'mooi' / 'lelijk' / een kleur ervan maken? Dan is het een bijvoeglijk naamwoord.",
          voorbeelden: [
            { type: "stap", tekst: "'De blauwe lucht.' → blauwe = beschrijft de lucht." },
            { type: "stap", tekst: "'Het zware boek.' → zware = beschrijft het boek." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Voor een 'ding'-woord (auto, kind, boek) staat vaak een bijvoeglijk naamwoord." }],
          niveaus: {
            basis: "Bijvoeglijk naamwoord = beschrijft hoe iets is (rood, groot, klein).",
            simpeler: "'De rode auto' → 'rode' = welke kleur de auto is.",
            nogSimpeler: "Hoe is het? = bijvoeglijk!",
          },
        },
      },
      {
        q: "Welke is een **persoonlijk voornaamwoord**?",
        options: ["ik", "auto", "snel", "boos"],
        answer: 0,
        wrongHints: [null, "Andere woordsoort.", "Andere woordsoort.", "Andere woordsoort."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een persoonlijk voornaamwoord?", tekst: "Een persoonlijk voornaamwoord vervangt een persoon (of ding) zodat je niet steeds de naam hoeft te zeggen." },
            { titel: "Lijstje", tekst: "ik / jij / hij / zij / het / wij / jullie / zij — en als 'object': mij, jou, hem, haar, ons, jullie, hen." },
            { titel: "Voorbeeld", tekst: "In plaats van 'Tom rent en Tom is moe' zeggen we: 'Tom rent en HIJ is moe.' 'Hij' is een persoonlijk voornaamwoord." },
          ],
          woorden: [
            { woord: "persoonlijk voornaamwoord", uitleg: "Vervangt een persoon/ding (ik, jij, hij, zij, wij, jullie)." },
            { woord: "bezittelijk voornaamwoord", uitleg: "Iets anders: mijn, jouw, zijn, haar — geeft bezit aan." },
          ],
          theorie: "Cito-tip: persoonlijk voornaamwoorden zijn de KORTE woorden die naar mensen verwijzen: ik/jij/hij/zij/wij/jullie. Niet te verwarren met namen (Tom = naam, hij = persoonlijk vnw).",
          voorbeelden: [
            { type: "stap", tekst: "'Lisa is jarig. ZIJ krijgt cadeautjes.' → 'zij' verwijst naar Lisa." },
            { type: "stap", tekst: "'Tom en ik gaan zwemmen. WIJ vertrekken.' → 'wij' verwijst naar Tom en mij." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vervangt het een naam of persoon? Dan is het een persoonlijk voornaamwoord." }],
          niveaus: {
            basis: "Persoonlijk voornaamwoord = ik, jij, hij, zij, wij, jullie. Vervangt naam.",
            simpeler: "In plaats van 'Tom' kun je 'hij' zeggen. 'Hij' is een persoonlijk voornaamwoord.",
            nogSimpeler: "ik/jij/hij/zij = persoonlijk vnw.",
          },
        },
      },
      {
        q: "Welke zin staat **goed** met komma's?",
        options: ["Ik kocht appels, peren en druiven.", "Ik kocht appels peren, en druiven.", "Ik, kocht appels en peren.", "Ik kocht appels, peren, en, druiven."],
        answer: 0,
        wrongHints: [null, "Komma's tussen alle opsomming-delen, behalve voor 'en'.", "Geen komma na onderwerp.", "Niet voor of na 'en' bij opsomming."],
        uitlegPad: {
          stappen: [
            { titel: "Opsomming-komma's", tekst: "Bij opsomming: komma tussen alle delen, behalve VOOR 'en' (of 'of'). Het laatste deel wordt door 'en' aan de rij geknoopt." },
            { titel: "Voorbeeld", tekst: "'Ik wil pizza, friet, ijs en cola.' → komma's tussen alle behalve voor 'en'." },
          ],
          woorden: [{ woord: "opsomming", uitleg: "Lijstje van dingen achter elkaar." }],
          theorie: "Cito-truc: tel de items in de opsomming. Bij N items zet je N-2 komma's + 1 'en' (geen komma ervoor).",
          voorbeelden: [{ type: "stap", tekst: "Drie items: 'A, B en C'. Vier items: 'A, B, C en D'." }],
          basiskennis: [{ onderwerp: "Uitzondering", uitleg: "Geen komma bij 2 items: 'rood en blauw' — geen komma." }],
          niveaus: {
            basis: "appels, peren en druiven — komma + komma + en. A.",
            simpeler: "Komma's tussen, geen komma voor 'en'. = A.",
            nogSimpeler: "Geen komma voor 'en' = A.",
          },
        },
      },
      {
        q: "Welke zin is een **volledige zin**?",
        options: ["De hond rent in het park.", "De rennende hond in het park.", "Rennen in het park.", "Park, hond."],
        answer: 0,
        wrongHints: [null, "Geen werkwoord — alleen 'rennende' (bijvoeglijk). Geen complete zin.", "Geen onderwerp.", "Geen onderwerp en geen werkwoord."],
      },
      {
        q: "*Welk leesteken hoort op de plek? '* **Wat doe je daar___'** *'*",
        options: ["?", ".", "!", ","],
        answer: 0,
        wrongHints: [null, "Een vraag eindigt op vraagteken.", "Past niet voor een vraag.", "Komma sluit geen zin af."],
      },
      {
        q: "Welke zin staat **goed** geschreven (directe rede)?",
        options: ["Mama zei: 'Kom eten.'", "Mama zei kom eten.", "Mama: zei 'kom eten'.", "'Mama zei kom eten.'"],
        answer: 0,
        wrongHints: [null, "Geen aanhalingstekens om wat ze zegt.", "Dubbele punt verkeerd geplaatst.", "Hele zin tussen aanhalingstekens, dat klopt niet."],
        uitlegPad: {
          stappen: [
            { titel: "Directe rede = letterlijk", tekst: "Als je opschrijft wat iemand letterlijk zegt: zet aanhalingstekens om dat stukje + dubbele punt ervoor." },
            { titel: "Vorm", tekst: "[Wie] zei: '[wat hij/zij zei.]' → Mama zei: 'Kom eten.'" },
          ],
          woorden: [{ woord: "directe rede", uitleg: "Letterlijk opschrijven wat iemand zegt." }],
          theorie: "Cito test vaak: vorm van directe rede. Onthoud: dubbele punt + aanhalingstekens + hoofdletter binnen. Punt mag binnen of buiten aanhalingstekens — meestal binnen.",
          voorbeelden: [{ type: "stap", tekst: "Indirect: 'Mama zei dat ik moest komen eten.' (geen aanhalingstekens nodig)." }],
          basiskennis: [{ onderwerp: "Verschil", uitleg: "Indirecte rede = navertellen. Geen aanhalingstekens. Directe rede = letterlijk citeren. Wel aanhalingstekens." }],
          niveaus: {
            basis: "Mama zei: 'Kom eten.' A.",
            simpeler: "Zei + dubbele punt + 'Kom eten.' = A.",
            nogSimpeler: "Aanhalingstekens om citaat = A.",
          },
        },
      },
      {
        q: "*'Tom is moe ___ hij heeft hard gewerkt.'* Welk **voegwoord** past?",
        options: ["omdat", "maar", "of", "dus"],
        answer: 0,
        wrongHints: [null, "Geen tegenstelling — moe + hard gewerkt past samen.", "Geen keuze.", "Letterlijk past 'dus' ook, maar dan staat de reden vooraan, niet erna."],
      },
      {
        q: "Welke zin gebruikt een **hoofdletter goed**?",
        options: ["Op zaterdag ga ik naar Amsterdam.", "op zaterdag ga ik naar amsterdam.", "Op Zaterdag ga ik naar Amsterdam.", "Op zaterdag ga ik naar amsterdam."],
        answer: 0,
        wrongHints: [null, "Begin zin én plaatsnaam = hoofdletter.", "Dagen krijgen géén hoofdletter.", "Amsterdam = plaatsnaam = hoofdletter."],
        uitlegPad: {
          stappen: [
            { titel: "Hoofdletter-regels", tekst: "Hoofdletter aan: 1) begin van zin, 2) eigennamen (personen + plaatsen + landen). NIET bij: dagen, maanden, vakken." },
            { titel: "Voorbeelden", tekst: "Amsterdam, Nederland, Tom = hoofdletter. Maandag, juni, wiskunde = klein." },
          ],
          woorden: [{ woord: "eigennaam", uitleg: "Naam van een persoon, plaats, land, organisatie." }],
          theorie: "Cito-vraagtype: 'welke zin staat goed?' Antwoorden verschillen vaak in hoofdletters bij dagen of plaatsen.",
          voorbeelden: [
            { type: "stap", tekst: "'Ik ga naar Spanje.' (land = hoofdletter)" },
            { type: "stap", tekst: "'Ik leer Engels.' (taal = hoofdletter — uitzondering!)" },
          ],
          basiskennis: [{ onderwerp: "Uitzondering", uitleg: "Talen krijgen WEL hoofdletter (Engels, Nederlands, Frans). Dagen niet (maandag, dinsdag)." }],
          niveaus: {
            basis: "Op zaterdag ga ik naar Amsterdam. A.",
            simpeler: "Begin + plaats = hoofdletter. Dag = klein. = A.",
            nogSimpeler: "Amsterdam met A, zaterdag met z = A.",
          },
        },
      },
      {
        q: "*'De jongen ___ in het park.'* Welk werkwoord (verleden tijd, enkelvoud)?",
        options: ["speelde", "speelden", "speelt", "spelen"],
        answer: 0,
        wrongHints: [null, "Meervoud-vorm.", "Tegenwoordige tijd.", "Infinitief."],
      },
      {
        q: "Welke zin heeft een **fout** in werkwoordspelling?",
        options: ["Hij vind het leuk.", "Hij vindt het leuk.", "Wij vinden het leuk.", "Vinden jullie het leuk?"],
        answer: 0,
        wrongHints: [null, "Deze is goed — t hoort erbij.", "Goed.", "Goed."],
      },
      {
        q: "Hoe spreek je **'leerlinge'** uit (meervoud)?",
        options: ["leerlingen", "leerlinges", "leerling", "leerlingens"],
        answer: 0,
        wrongHints: [null, "Engels meervoud, niet NL.", "Enkelvoud.", "Dubbel meervoud."],
      },
      {
        q: "*'Ik vind ___ ijs lekker.'* Welk **lidwoord**?",
        options: ["het", "de", "een", "die"],
        answer: 0,
        wrongHints: [null, "Niet — 'ijs' is een 'het'-woord.", "Met een specifieke ijs in de context: 'het' is logischer.", "Aanwijzend, geen lidwoord."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const doorstroomtoetsTaalG8 = {
  id: "doorstroomtoets-taal-g8",
  title: "Doorstroomtoets — taal groep 8 (pilot)",
  emoji: "📚",
  level: "groep8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Doorstroomtoets-voorbereiding (taal-onderdeel)",
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F" },
    { id: "werkwoordsspelling-dt", title: "Werkwoordsspelling d/t", niveau: "po-1F" },
  ],
  intro:
    "Doorstroomtoets-pilot voor taal — woordenschat, begrijpend lezen, spelling, taalverzorging. Eigen oefenvragen in stijl van Cito/IEP, geen letterlijke kopieën. Met externe link naar Cito's gratis voorbeeldopgavenboekje. ~80 min totaal (4× ~20 min) — splits gerust in 4 dagelijkse kwartier-sessies.",
  triggerKeywords: [
    "doorstroomtoets", "cito", "groep 8", "taal",
    "woordenschat", "begrijpend lezen", "spelling", "taalverzorging",
    "interpunctie", "komma", "kofschip",
  ],
  chapters,
  steps,
};

export default doorstroomtoetsTaalG8;
