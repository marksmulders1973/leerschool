// Leerpad: Doorstroomtoets — taal groep 8 (pilot).
// 4 stappen van ~15 min met eigen vragen "in stijl van" Cito/IEP. Géén
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
  // STAP 1: Woordenschat (~15 min)
  {
    title: "Woordenschat — ~15 min",
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
        wrongHints: [null, "Tegenovergesteld.", "Snelheid is iets anders dan grootte.", "Geluid is iets anders dan grootte."],
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
        wrongHints: [null, "Boos is het tegenovergestelde.", "Verbaasd ≠ tevreden.", "Bang ≠ tevreden."],
      },
      {
        q: "*'De docent gaf een **toelichting** bij de som.'* Wat is een toelichting?",
        options: ["Een uitleg", "Een straf", "Een spel", "Een boek"],
        answer: 0,
        wrongHints: [null, "Een toelichting is niet negatief.", "Een toelichting is geen activiteit.", "Een boek is geen toelichting (kan er wel één bevatten)."],
      },
      {
        q: "*'Zij was **onverstoorbaar** tijdens de toets.'* Wat betekent onverstoorbaar?",
        options: ["Rustig en niet snel uit balans", "Boos", "Verdwaald", "Onhandig"],
        answer: 0,
        wrongHints: [null, "Klopt — 'on' + 'verstoren' = niet gestoord worden.", "Niet de juiste richting.", "Geen verband.", "Ander gevoel."],
      },
      {
        q: "Welk woord is een **tegenstelling** van **'genereus'**?",
        options: ["Gierig", "Vriendelijk", "Groot", "Snel"],
        answer: 0,
        wrongHints: [null, "Klopt — genereus = gul, gierig = juist niet.", "Lijkt op genereus.", "Niet over geven/karakter.", "Andere dimensie."],
      },
      {
        q: "*'De situatie was uiterst **precair**.'* Wat betekent precair?",
        options: ["Onzeker / gevaarlijk", "Saai", "Vrolijk", "Druk"],
        answer: 0,
        wrongHints: [null, "Klopt — formeel woord voor wankel/riskant.", "Tegenovergesteld.", "Tegenovergesteld.", "Andere richting."],
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
        wrongHints: [null, "Klopt — 'in' + 'menging' = ergens in mengen.", "Wel kan, maar 'inmenging' is meer negatief.", "Geen verband.", "Geen verband."],
      },
      {
        q: "Welk woord betekent **hetzelfde als** **'gehaast'**?",
        options: ["Snel + gestrest", "Rustig", "Verveeld", "Voldoening"],
        answer: 0,
        wrongHints: [null, "Klopt — onder tijdsdruk.", "Tegenovergesteld.", "Tegenovergesteld.", "Geen verband."],
      },
      {
        q: "*'De **moedige** soldaat redde 3 mensen.'* Wat betekent moedig?",
        options: ["Dapper, niet bang", "Bang", "Snel", "Sterk"],
        answer: 0,
        wrongHints: [null, "Klopt — gerelateerd aan 'moed' (durven).", "Tegenovergesteld.", "Andere eigenschap.", "Wel een kwaliteit maar niet primair 'moedig'."],
      },
    ],
  },

  // STAP 2: Begrijpend lezen (~15 min)
  {
    title: "Begrijpend lezen — ~15 min",
    explanation:
      "**Wat verwacht je op de Doorstroomtoets?**\n\nBegrijpend lezen is de **grootste taal-onderdeel**: 20-30 vragen na een paar teksten.\n\n**De Cito-vraagsoorten** *(uit je hoofd!)*:\n• **Hoofdgedachte**: 'Waar gaat de hele tekst over?' → meestal in de eerste of laatste alinea.\n• **Detail**: 'Wat staat er in alinea 2?' → zoek in alinea 2.\n• **Verband**: 'Waarom?' / 'Wat is het gevolg?' → zoek signaalwoorden zoals 'omdat', 'daardoor'.\n• **Bedoeling**: 'Waarom schreef de schrijver?' → informeren / overtuigen / amuseren.\n\n**Stappenplan**:\n1. **Skim** de tekst — lees titel + eerste/laatste zin van elke alinea.\n2. **Lees de vraag** voordat je de hele tekst leest.\n3. **Zoek terug** in de tekst — leg je vinger bij de juiste alinea.\n4. **Check** dat het antwoord echt in de tekst staat, niet je eigen mening.\n\n**Cito-strikvraag** — let op deze 3:\n• *'Welke zin klopt **niet**?'* — het juiste antwoord is degene die fout is.\n• Antwoorden die 'lijken te kloppen' maar net niet zo in de tekst staan.\n• 'Altijd' / 'nooit' in antwoorden — vaak fout (te absoluut).\n\n**Voorbeeld-tekst**:\n*'In Nederland slapen vleermuizen meestal overdag. Ze hangen onderste-boven aan een tak. 's Avonds vliegen ze uit om insecten te vangen.'*\n\n**Vraag**: Wanneer vliegen vleermuizen?\n• Antwoord: 's avonds *(staat letterlijk in de tekst)*.\n\n**Bron**: voor officiële voorbeelden zie " + examenLink + ".\n\n**Klaar voor 5 oefenvragen?**",
    checks: [
      {
        q: "*Tekst: 'De zon schijnt vandaag fel. Veel mensen gaan naar het strand.'* **Waarom** gaan veel mensen naar het strand?",
        options: ["Omdat de zon fel schijnt", "Omdat ze honger hebben", "Omdat het regent", "Omdat het avond is"],
        answer: 0,
        wrongHints: [null, "Niet in de tekst genoemd.", "De zon schijnt — niet regen.", "Niet genoemd in de tekst."],
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
      },
      {
        q: "*Tekst: 'In de Sahara valt **bijna nooit** regen. Toch leven er kamelen.'* Welke **signaalwoord** geeft een **tegenstelling**?",
        options: ["Toch", "In", "Er", "Leven"],
        answer: 0,
        wrongHints: [null, "Klopt — 'toch' wijst op 'maar/echter'.", "Plaats, niet tegenstelling.", "Verwijst naar Sahara.", "Werkwoord."],
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
        wrongHints: [null, "Klopt — gevolg-signaalwoord.", "Geen tegenstelling.", "Niet opsommend.", "Niet plaats."],
      },
      {
        q: "*'De auteur wil je **vooral overtuigen**'* — wat is dan de **bedoeling** van de tekst?",
        options: ["Overhalen om iets te doen of denken", "Informeren met feiten", "Amuseren met grappen", "Beschrijven hoe iets is"],
        answer: 0,
        wrongHints: [null, "Klopt — overtuigen = mening laten delen.", "Informeren is doel #2 maar niet 'overtuigen'.", "Amuseren is anders.", "Beschrijven = neutraal vermelden."],
      },
      {
        q: "*Tekst: 'Eerst moet je de fles open. **Vervolgens** schenk je het water.'* Wat geeft **'vervolgens'** aan?",
        options: ["Volgorde / opeenvolging", "Tegenstelling", "Reden", "Doel"],
        answer: 0,
        wrongHints: [null, "Klopt — 'vervolgens' = daarna.", "Geen tegenstelling.", "Geen reden.", "Geen doel."],
      },
      {
        q: "*'Het boek is **niet** alleen spannend.'* Welke vraagtype: dit antwoord testen — welke is **fout**?",
        options: ["Het boek is alleen spannend (NIET klopt)", "Het boek is ook leerzaam (zou kunnen)", "Het boek is een roman (mogelijk)", "Niet te zeggen"],
        answer: 0,
        wrongHints: [null, "Klopt — tekst zegt 'niet alleen' = ook ander iets.", "Mogelijk waar.", "Mogelijk waar.", "Wel te zeggen — let op 'niet alleen'."],
      },
      {
        q: "*Hoofdgedachte* van tekst — meestal te vinden in:",
        options: ["Eerste of laatste alinea", "Middelste alinea", "Plaatje", "Voetnoot"],
        answer: 0,
        wrongHints: [null, "Klopt — Cito-tip.", "Soms maar niet primair.", "Niet tekst-onderdeel.", "Te detail."],
      },
    ],
  },

  // STAP 3: Spelling (~15 min)
  {
    title: "Spelling — ~15 min",
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
        wrongHints: [null, "Klopt — moet aan elkaar: paardenstaart (1 woord).", "Dat is juist — paardenstaart is 1 samenstelling.", "Dit is goed gespeld (1 woord).", "Dit is goed gespeld (1 woord)."],
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
        wrongHints: [null, "Klopt — trein schrijf je met ei.", "Vlijtig schrijf je met ij.", "Lijden schrijf je met ij.", "Blijven schrijf je met ij."],
      },
      {
        q: "*'Ik **... gisteren** een mooi boek.'* Welk werkwoord?",
        options: ["las", "lees", "laste", "lazen"],
        answer: 0,
        wrongHints: [null, "Klopt — verleden tijd 'lezen' (onregelmatig: las).", "Tegenwoordige tijd.", "Geen werkwoord.", "Meervoud — vraag is 'ik' (enkelvoud)."],
      },
      {
        q: "Welk woord is **goed** geschreven?",
        options: ["dinsdag", "Dinsdag", "DInsdag", "din sdag"],
        answer: 0,
        wrongHints: [null, "Klopt — weekdagen krijgen in NL geen hoofdletter.", "Hoofdletter is fout midden in zin.", "Tweede letter mag niet groot.", "Aan elkaar."],
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
        wrongHints: [null, "Klopt — voltooid deelwoord van 'eten' = 'gegeten'.", "Verkeerde vorm.", "Mist 'ge-'.", "Engels woord."],
      },
    ],
  },

  // STAP 4: Taalverzorging — mix (~15 min)
  {
    title: "Taalverzorging — interpunctie & zinnen — ~15 min",
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
        wrongHints: [null, "Klopt — komma tussen opsommingen, geen komma vóór 'en'.", "Geen komma's vóór elk woord — alleen tussen items.", "Geen komma vóór de allerlaatste — daar staat 'en'.", "Geen komma ná het werkwoord."],
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
        wrongHints: [null, "Klopt — er staat geen werkwoord in, alleen een omschrijving.", "Heeft werkwoord 'rent'.", "Heeft werkwoord 'rent'.", "Heeft werkwoord 'rent'."],
      },
      {
        q: "*'Ik ga naar buiten ___ het regent.'* Welk woord past?",
        options: ["maar", "omdat", "en", "als"],
        answer: 0,
        wrongHints: [null, "Klopt — 'maar' geeft tegenstelling: regent toch ga ik.", "'Omdat' = reden. Dan ga je juist NIET naar buiten vanwege regen — vreemd zonder context.", "'En' is opsommend, mist het tegenstelling-gevoel.", "'Als' geeft voorwaarde, maar de zin is meer een tegenstelling."],
      },
      {
        q: "*Mama zei tegen Lisa* ___ 'Ga je tanden poetsen.' Welk leesteken past?",
        options: ["dubbele punt :", "punt .", "komma ,", "uitroepteken !"],
        answer: 0,
        wrongHints: [null, "Klopt — directe rede begint met dubbele punt, daarna aanhalingstekens.", "Een punt sluit een zin af, niet introduceert.", "Komma kan ook maar dubbele punt is correcter bij directe rede.", "Geen sterke emotie hier."],
      },
      {
        q: "Welk zin heeft een **fout** met komma's?",
        options: ["Ik wandel, en ik fiets.", "Ik wandel en ik fiets.", "Ik wandel, omdat het mooi weer is.", "Ik wandel, maar ik fiets niet."],
        answer: 0,
        wrongHints: [null, "Klopt — geen komma vóór 'en' tussen 2 hoofdzinnen zonder andere reden.", "Goed — geen komma nodig.", "Goed — komma vóór 'omdat' (samengestelde zin).", "Goed — komma vóór 'maar' (tegenstelling)."],
      },
      {
        q: "Welk zin is **goed**?",
        options: ["Jan, Piet en Klaas spelen.", "Jan Piet en Klaas spelen.", "Jan, Piet, en Klaas spelen.", "Jan, Piet en, Klaas spelen."],
        answer: 0,
        wrongHints: [null, "Klopt — komma's tussen items, geen komma vóór 'en'.", "Geen komma's — moeilijk te lezen.", "Komma vóór 'en' = fout in NL-opsomming.", "Komma op verkeerde plek."],
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
    "Doorstroomtoets-pilot voor taal — woordenschat, begrijpend lezen, spelling, taalverzorging. Eigen oefenvragen in stijl van Cito/IEP, geen letterlijke kopieën. Met externe link naar Cito's gratis voorbeeldopgavenboekje. ~60 min (4× ~15 min).",
  triggerKeywords: [
    "doorstroomtoets", "cito", "groep 8", "taal",
    "woordenschat", "begrijpend lezen", "spelling", "taalverzorging",
    "interpunctie", "komma", "kofschip",
  ],
  chapters,
  steps,
};

export default doorstroomtoetsTaalG8;
