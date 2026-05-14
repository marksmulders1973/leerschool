// Leerpad: CSE Engels — leesvaardigheid — klas 3-4 VMBO/HAVO/VWO eindexamen.
// Onderdeel Engelse leesvaardigheid. Referentieniveau 2F-3F.
// 6 stappen met uitlegPad. CSE = Centraal Schriftelijk Examen.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  signaal: "#80cbc4",
  tekst: "#ffd54f",
  contra: "#ff7043",
  highlight: "#42a5f5",
};

const stepEmojis = ["🔗", "📰", "🔍", "🎯", "👈", "🏆"];

const chapters = [
  { letter: "A", title: "Signaalwoorden (linking words)", emoji: "🔗", from: 0, to: 0 },
  { letter: "B", title: "Tekstsoorten herkennen", emoji: "📰", from: 1, to: 1 },
  { letter: "C", title: "Woord-betekenis uit context", emoji: "🔍", from: 2, to: 2 },
  { letter: "D", title: "Hoofdgedachte + details", emoji: "🎯", from: 3, to: 3 },
  { letter: "E", title: "Verwijzingen (he, this, ...)", emoji: "👈", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function signalwordsSvg() {
  return `<svg viewBox="0 0 320 200">
<rect x="0" y="0" width="320" height="200" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Belangrijkste signaalwoord-groepen (CSE Engels)</text>

<rect x="15" y="40" width="140" height="35" rx="6" fill="rgba(128,203,196,0.15)" stroke="${COLORS.signaal}" stroke-width="1"/>
<text x="85" y="58" text-anchor="middle" fill="${COLORS.signaal}" font-size="10" font-family="Arial" font-weight="bold">+ TOEVOEGING</text>
<text x="85" y="70" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">and, also, moreover</text>

<rect x="165" y="40" width="140" height="35" rx="6" fill="rgba(255,138,101,0.15)" stroke="${COLORS.contra}" stroke-width="1"/>
<text x="235" y="58" text-anchor="middle" fill="${COLORS.contra}" font-size="10" font-family="Arial" font-weight="bold">↔ TEGENSTELLING</text>
<text x="235" y="70" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">but, however, although</text>

<rect x="15" y="85" width="140" height="35" rx="6" fill="rgba(255,213,79,0.15)" stroke="${COLORS.tekst}" stroke-width="1"/>
<text x="85" y="103" text-anchor="middle" fill="${COLORS.tekst}" font-size="10" font-family="Arial" font-weight="bold">→ GEVOLG</text>
<text x="85" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">so, therefore, as a result</text>

<rect x="165" y="85" width="140" height="35" rx="6" fill="rgba(66,165,245,0.15)" stroke="${COLORS.highlight}" stroke-width="1"/>
<text x="235" y="103" text-anchor="middle" fill="${COLORS.highlight}" font-size="10" font-family="Arial" font-weight="bold">∵ REDEN</text>
<text x="235" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">because, since, due to</text>

<rect x="15" y="130" width="140" height="35" rx="6" fill="rgba(105,240,174,0.15)" stroke="${COLORS.curve2}" stroke-width="1"/>
<text x="85" y="148" text-anchor="middle" fill="${COLORS.curve2}" font-size="10" font-family="Arial" font-weight="bold">📋 VOORBEELD</text>
<text x="85" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">for example, such as</text>

<rect x="165" y="130" width="140" height="35" rx="6" fill="rgba(149,117,205,0.15)" stroke="#9575cd" stroke-width="1"/>
<text x="235" y="148" text-anchor="middle" fill="#9575cd" font-size="10" font-family="Arial" font-weight="bold">⏱ TIJD</text>
<text x="235" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">then, after, finally</text>

<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Signaalwoorden onthullen de structuur van een tekst</text>
</svg>`;
}

const steps = [
  // STAP 1: Signaalwoorden
  {
    title: "Signaalwoorden — herken de structuur",
    explanation:
      "**Signaalwoorden (linking words)** zijn woorden die laten zien **wat de schrijver bedoelt** of **hoe stukken samenhangen**.\n\n**Belangrijkste groepen** *(uit het hoofd!)*:\n\n**1. Toevoegen (+)** — *'er komt nog iets bij'*:\n• and, also, moreover, furthermore, in addition.\n• **NL**: en, ook, bovendien, daarnaast.\n\n**2. Tegenstelling (↔)** — *'maar het tegenovergestelde'*:\n• but, however, although, yet, on the other hand, despite.\n• **NL**: maar, echter, hoewel, ondanks.\n\n**3. Gevolg (→)** — *'daarom dus'*:\n• so, therefore, as a result, consequently, thus.\n• **NL**: dus, daarom, daardoor, bijgevolg.\n\n**4. Reden (∵)** — *'omdat'*:\n• because, since, as, due to, owing to.\n• **NL**: omdat, want, vanwege.\n\n**5. Voorbeeld (📋)** — *'bijvoorbeeld'*:\n• for example, for instance, such as, like.\n• **NL**: bijvoorbeeld, zoals.\n\n**6. Tijd (⏱)** — *'wanneer'*:\n• then, after, before, finally, meanwhile, eventually.\n• **NL**: dan, na, daarna, tenslotte, ondertussen.\n\n**7. Conclusie (✓)**:\n• in conclusion, to sum up, in short, all in all.\n• **NL**: tot slot, samenvattend, kortom.\n\n**Cito-truc — signaalwoord vertelt verwachting**:\n• Zie je **'but'** of **'however'**? → wat volgt is **tegenovergesteld** of **verrassend**.\n• Zie je **'so'** of **'therefore'**? → wat volgt is een **conclusie**.\n• Zie je **'because'**? → wat volgt is een **reden**.\n\n**Voorbeeld**:\n*'Tom worked hard. However, he failed the exam.'*\n→ '**However**' = verrassing. Verwacht: tegenovergestelde van wat eerder stond *(hard werken = slagen, maar hier juist niet)*.\n\n*'It was raining, so we stayed home.'*\n→ '**So**' = gevolg. Eerste zin is reden, tweede is gevolg.\n\n**Examen-strategie**:\nBij **examenvragen** kun je vaak het antwoord vinden door alleen de **signaalwoorden** te checken. Lees niet de hele tekst — zoek 'but', 'however', 'because' etc.\n\n**Beroemde Cito-strikvraag**:\n*'Welke zin past in het gat?'*\n→ Kijk welk signaalwoord *(en, maar, dus)* past bij de logica van zinnen erom heen.",
    svg: signalwordsSvg(),
    checks: [
      {
        q: "Welk signaalwoord betekent **'maar/tegenstelling'**?",
        options: ["however", "moreover", "therefore", "for example"],
        answer: 0,
        wrongHints: [null, "Dat is toevoegen.", "Dat is gevolg.", "Dat is voorbeeld."],
      },
      {
        q: "Welk woord geeft **'gevolg'** aan?",
        options: ["therefore", "but", "although", "for example"],
        answer: 0,
        wrongHints: [null, "Tegenstelling.", "Tegenstelling.", "Voorbeeld."],
      },
      {
        q: "*'Tom studied hard. ___, he failed the exam.'* Welk woord?",
        options: ["However", "Therefore", "Because", "Moreover"],
        answer: 0,
        wrongHints: [null, "Niet gevolg — hard werken zou tot slagen leiden, niet zakken.", "Geen reden.", "Geen toevoeging."],
        uitlegPad: {
          stappen: [
            { titel: "Tegengestelde verwachting", tekst: "Eerste zin: 'Tom studied hard' — verwachting: hij slaagt. Tweede zin: 'he failed' — tegenovergesteld. Dus signaalwoord van tegenstelling." },
            { titel: "Welke past?", tekst: "'However' = however/maar/echter. 'Therefore' = dus (zou betekenen: hard werken → zakken? Onlogisch). 'Because' = omdat (geen reden hier). 'Moreover' = bovendien (extra info, geen tegenstelling)." },
          ],
          woorden: [{ woord: "however", uitleg: "Engels signaalwoord voor 'echter, maar, toch'. Geeft een tegenstelling aan." }],
          theorie: "Signaalwoorden tonen logica: tegenstelling / gevolg / reden / voorbeeld / toevoeging.",
          voorbeelden: [{ type: "stap", tekst: "Hij werkte hard. Echter (however) zakte hij. Tegenovergesteld van verwachting." }],
          basiskennis: [{ onderwerp: "Logica eerst, dan woord", uitleg: "Vraag jezelf: wat is de relatie tussen 2 zinnen? Dan kies het signaalwoord dat past." }],
          niveaus: {
            basis: "However. A.",
            simpeler: "Tom werkte hard maar zakte. Dat is tegenstelling. 'However' = echter/maar. = A.",
            nogSimpeler: "However = A.",
          },
        },
      },
      {
        q: "*'I was tired ___ I worked late.'* Welk woord (reden)?",
        options: ["because", "however", "therefore", "moreover"],
        answer: 0,
        wrongHints: [null, "Geen tegenstelling.", "Dat zou andersom zijn.", "Geen toevoeging."],
      },
    ],
  },

  // STAP 2: Tekstsoorten
  {
    title: "Tekstsoorten herkennen",
    explanation:
      "Bij CSE Engels krijg je verschillende **soorten teksten**. Elke soort heeft een **doel** + **stijl** + **toon**.\n\n**De hoofdsoorten** *(uit het hoofd!)*:\n\n**1. News article (nieuws-artikel)**\n• Doel: **informeren** over gebeurtenis.\n• Stijl: zakelijk, feiten, datum/plek.\n• Vaak met **kop** + **leadalinea** *(wat/wie/waar/wanneer)*.\n• Voorbeeld: BBC, The Guardian.\n\n**2. Opinion piece / editorial (mening)**\n• Doel: schrijver wil **lezer overtuigen** van zijn mening.\n• Stijl: argumenten + voorbeelden.\n• Vaak in 'I think/I believe' of 'one might argue'.\n• Voorbeeld: column, opiniestuk.\n\n**3. Advertorial / advertisement**\n• Doel: iets **verkopen** of promoten.\n• Stijl: enthousiast, persoonlijk, oproep.\n• Vaak met *'You should try this!'* of *'Buy now!'*.\n• Voorbeeld: reclame, productpagina.\n\n**4. Story / narrative (verhaal)**\n• Doel: **vermaken** of verhaal vertellen.\n• Stijl: personages, plot, beschrijving.\n• Vaak met dialoog ('he said', 'she shouted').\n• Voorbeeld: roman-uittreksel, kort verhaal.\n\n**5. Review (recensie)**\n• Doel: iets **beoordelen** (film, boek, restaurant).\n• Stijl: mening + argumenten + sterren/cijfer.\n• Voorbeeld: filmreview, boekrecensie.\n\n**6. Letter / email**\n• Persoonlijk *(aan vriend)* of formeel *(zakelijk)*.\n• Met aanhef ('Dear...') + afsluiting ('Yours...').\n\n**7. Scientific / informational text**\n• Doel: **uitleggen / leren**.\n• Stijl: feitelijk, vaktermen, vaak met getallen.\n• Voorbeeld: schoolboek, Wikipedia.\n\n**Cito-vraag-typen**:\n*'What is the purpose of this text?'*\n→ Inform / Persuade / Entertain / Sell / Describe.\n\n*'What kind of text is this?'*\n→ News, opinion, review, etc.\n\n**Cito-truc — kijk naar**:\n• **Titel/kop**: nieuws of mening?\n• **Stijl**: zakelijk of persoonlijk?\n• **Bron**: krant, blog, schoolboek?\n• **Doel**: leren, mening, kopen?\n\n**Voorbeeld**:\n*'Best Pizza in Town: Mario's exceeds expectations. The crust is crispy, the sauce is perfectly seasoned, and the staff is friendly. ⭐⭐⭐⭐⭐.'*\n→ **Review** *(beoordeling met sterren)*.\n\n*'A new study by Cambridge University shows that...'*\n→ **News / informational** *(feit, bron)*.",
    checks: [
      {
        q: "Wat is doel van een **review**?",
        options: ["Iets beoordelen", "Iets verkopen", "Iets verbergen", "Iemand groeten"],
        answer: 0,
        wrongHints: [null, "Dat is advertentie.", "Geen doel.", "Brief."],
      },
      {
        q: "Wat is doel van een **opinion piece**?",
        options: ["Lezer overtuigen van mening", "Verkopen", "Vermaken", "Wetenschappelijk uitleggen"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Geen verhaal.", "Geen feiten."],
      },
      {
        q: "*'Buy now! 50% off!'* Welk soort tekst?",
        options: ["Advertentie", "Nieuws", "Wetenschap", "Verhaal"],
        answer: 0,
        wrongHints: [null, "Geen feit-rapport.", "Niet wetenschappelijk.", "Geen verhaal."],
      },
      {
        q: "*'A new study by Oxford shows...'* Welk soort?",
        options: ["News / informational", "Opinion", "Review", "Advertentie"],
        answer: 0,
        wrongHints: [null, "Geen mening.", "Geen beoordeling.", "Geen verkoop."],
      },
    ],
  },

  // STAP 3: Woordbetekenis uit context
  {
    title: "Woordbetekenis uit context — niet alle woorden hoef je te kennen",
    explanation:
      "Bij CSE Engels kom je **veel onbekende woorden** tegen. **Je hoeft ze niet allemaal te kennen!**\n\n**Cito-strategie — context-clues**:\n\n**1. Synoniem in zelfde zin**\nVaak staat **dichtbij** een woord met **dezelfde betekenis**.\n*'The path was steep, so going up was difficult.'*\n→ 'steep' = moeilijk omhoog = hellend, stijl.\n\n**2. Tegenstelling met signaalwoord**\nMet 'but', 'however', 'although' krijgt het onbekende woord **tegenovergestelde** betekenis van de andere zin.\n*'She was usually cheerful, but today she was morose.'*\n→ 'morose' = tegenovergesteld van cheerful = somber/chagrijnig.\n\n**3. Voorbeelden**\nWoorden 'such as', 'like', 'for example' geven hints.\n*'He bought legumes, such as beans and lentils.'*\n→ 'legumes' = peulvruchten (omdat bonen + linzen erbij genoemd worden).\n\n**4. Definitie in zin**\nSoms staat de **uitleg** er direct bij.\n*'A philanthropist, someone who gives money to good causes, donated millions.'*\n→ 'philanthropist' = iemand die geld geeft aan goede doelen.\n\n**5. Logische gevolgtrekking**\nUit de context kun je vaak afleiden wat een woord moet betekenen.\n*'She was so frugal that she didn't even buy a coffee at work.'*\n→ 'frugal' = zuinig (logisch — geen koffie kopen = zuinig).\n\n**6. Word parts (prefixen + suffixen)**\nHerken de delen:\n• **un-** = niet *(unhappy = niet blij)*.\n• **re-** = opnieuw *(retell = opnieuw vertellen)*.\n• **-less** = zonder *(careless = onvoorzichtig)*.\n• **-ful** = vol van *(useful = bruikbaar)*.\n• **-er/-or** = persoon die *(teacher = leerkracht)*.\n• **bi-** = twee *(bicycle = tweewieler)*.\n\n**7. Skip & continue**\nAls je een woord niet kunt opmaken: **sla het over** en lees verder. Soms wordt het later duidelijk.\n\n**Cito-strategie**:\n• Onderstreep onbekende woorden bij eerste lezing.\n• Probeer **context** te gebruiken voor betekenis.\n• Lees vraag → zoek terug in tekst.\n\n**Voorbeeld Cito-vraag**:\n*'In line 4, the word ___ probably means ___.'*\n→ Lees zin in regel 4. Kijk hoe het woord wordt gebruikt. Welk synoniem zou passen?\n\n**Voorbeeld**:\n*'The traveler was exhausted after walking 30 miles.'*\n• Onbekend: 'exhausted'.\n• Context: 30 mijl gelopen → moe.\n• Antwoord: 'very tired'.",
    checks: [
      {
        q: "*'She was usually cheerful, but today she was morose.'* Wat betekent **morose**?",
        options: ["Somber / chagrijnig", "Vrolijk", "Boos", "Bang"],
        answer: 0,
        wrongHints: [null, "Zelfde — geen tegenstelling.", "Kan ook negatief maar 'morose' = stiller, niet boos.", "Anders type negatief gevoel."],
      },
      {
        q: "*'unhappy'** — wat betekent **un-**?",
        options: ["niet", "veel", "zonder", "opnieuw"],
        answer: 0,
        wrongHints: [null, "Geen 'veel'.", "Dat is -less.", "Dat is re-."],
      },
      {
        q: "*'He bought legumes, such as beans and lentils.'* Wat zijn **legumes**?",
        options: ["Peulvruchten (bonen-familie)", "Fruit", "Vlees", "Brood"],
        answer: 0,
        wrongHints: [null, "Geen fruit.", "Niet plantaardig + vlees.", "Niet brood."],
      },
      {
        q: "*'-less'* aan eind van woord betekent ... ?",
        options: ["Zonder", "Met", "Twee", "Opnieuw"],
        answer: 0,
        wrongHints: [null, "Tegengesteld.", "Dat is bi-.", "Dat is re-."],
      },
    ],
  },

  // STAP 4: Hoofdgedachte + details
  {
    title: "Hoofdgedachte + details",
    explanation:
      "Bij CSE-vragen test Cito 2 niveaus van begrip:\n\n**1. Hoofdgedachte (main idea)** — *waar gaat de hele tekst over?*\n• Meestal in **eerste of laatste alinea**.\n• Soms in **kop** of **eerste zin** van elke alinea.\n• Engelse stijl: 'topic sentence' eerst, dan uitleg.\n\n**Voorbeeld**:\nTekst over klimaatverandering met:\n• Alinea 1: 'Climate change is happening rapidly.'\n• Alinea 2: details over temperatuur-stijging.\n• Alinea 3: details over zeespiegel.\n• Alinea 4: 'In conclusion, climate change is a major issue.'\n\n→ Hoofdgedachte: **klimaatverandering is groot probleem**.\n\n**2. Details** — *specifieke feiten in tekst*\n• 'In which year...?' → zoek exact jaar.\n• 'How many...?' → tel of zoek getal.\n• 'According to ___, ___?' → zoek de bron.\n\n**Cito-vraagtypen**:\n• *'What is the main idea?'* → hoofdgedachte.\n• *'What is the writer's opinion?'* → mening schrijver.\n• *'What does paragraph 3 say?'* → detail uit alinea 3.\n• *'According to the article, ___'* → letterlijk in tekst zoeken.\n\n**Trucs voor hoofdgedachte**:\n• Lees titel + eerste zin elke alinea.\n• Zoek herhaling van thema.\n• Wat staat in eerste en laatste alinea?\n\n**Voorbeeld**:\nTekst: *'Bees are vital pollinators. They pollinate 90% of crops. Without bees, many fruits and vegetables would disappear. We must protect bees.'*\n\n• **Hoofdgedachte**: 'We must protect bees.' *(of: 'Bees are important')*\n• **Detail**: '90% of crops' *(specifiek getal)*.\n\n**Pas op — geen eigen mening**:\n*'What does the writer think?'* — zoek wat de schrijver schrijft, **niet wat jij zou denken**.\n\n**Cito-stikvraag**:\nVraag: 'What is true according to the text?'\n→ Antwoord moet **letterlijk in tekst staan**. Niet logisch afleiden, niet je eigen mening.\n\n**Cito-strategie voor hoofdgedachte**:\n• Streep door wat alleen voorbeeld of detail is.\n• Wat blijft over = hoofdpunt.\n• Welk antwoord-optie omvat het hele tekst-thema?\n\n**Veel voorkomende fout**:\n• Te specifiek antwoord *(detail i.p.v. hoofdgedachte)*.\n• Te algemeen antwoord *(thema buiten tekst)*.\n• 'Logisch' antwoord dat niet expliciet in tekst staat.",
    checks: [
      {
        q: "Waar staat de **hoofdgedachte** meestal?",
        options: ["Eerste of laatste alinea", "In het midden", "Verspreid", "Onder een plaatje"],
        answer: 0,
        wrongHints: [null, "Niet typisch.", "Wel maar niet primair.", "Niet typisch."],
      },
      {
        q: "Wat is een **detail-vraag**?",
        options: ["Vraag naar specifiek feit (jaar, aantal)", "Vraag naar mening", "Hoofdpunt vragen", "Niet relevant"],
        answer: 0,
        wrongHints: [null, "Andere vraagtype.", "Andere vraagtype.", "Wel relevant."],
      },
      {
        q: "*'What is true according to the text?'* Welke aanpak?",
        options: ["Antwoord moet letterlijk in tekst staan", "Wat ik denk", "Wat het beste klinkt", "Eigen kennis gebruiken"],
        answer: 0,
        wrongHints: [null, "Niet — alleen wat in tekst.", "Niet — alleen wat in tekst.", "Niet — alleen tekst."],
      },
      {
        q: "Tekst: *'Bees are vital. They pollinate 90% of crops. Without bees, food would disappear.'* Wat is **hoofdgedachte**?",
        options: ["Bijen zijn belangrijk voor voedsel", "Bijen bestuiven 90%", "Voedsel verdwijnt", "Bijen leven in netten"],
        answer: 0,
        wrongHints: [null, "Detail (specifiek getal).", "Gevolg/detail, geen hoofdpunt.", "Niet in tekst."],
      },
    ],
  },

  // STAP 5: Verwijzingen
  {
    title: "Verwijzingen — wie/wat is 'he' / 'this' / 'it'?",
    explanation:
      "In tekst worden **personen, dingen of ideeën** vaak vervangen door **verwijswoorden**:\n• **He / She / They** — voor personen.\n• **It** — voor dingen of ideeën.\n• **This / That / These / Those** — voor specifieke dingen.\n• **Such** — voor zo'n soort.\n\n**Cito-vraag-type**:\n*'In line 6, what does 'it' refer to?'*\n→ Zoek wat 'it' vervangt. Meestal in **vorige zin**.\n\n**Voorbeeld**:\n*'The teacher gave Sarah a book. **It** was very thick.'*\n→ 'It' = the book *(niet Sarah, niet the teacher)*.\n\n**Truc — vraag jezelf**:\nWelke **logische antecedent** *(woord eerder in zin/tekst)* past?\n\n**Voorbeeld**:\n*'Tom ate his sandwich while Mary watched TV. **He** seemed hungry.'*\n→ 'He' = Tom *(niet Mary — die is 'she')*.\n\n**Voorbeeld — 'this' / 'that'**:\n*'The exam was hard. The questions were tricky and the time was short. **This** is why many students failed.'*\n→ 'This' = de hele situatie *(moeilijke examen + tricky vragen + tijd kort)*.\n\n**Pas op — niet altijd dichtstbijzijnd**:\nSoms verwijst 'it' naar iets verder terug in tekst.\n\n*'The car was parked in front of the library. Inside, there were many books. **It** had a broken window.'*\n→ 'It' = the car *(niet the library — library heeft geen 'broken window'-context)*. Logica eerst.\n\n**Verwijzingen-soorten**:\n\n**1. Persoonlijke voornaamwoorden**:\n• I, you, he, she, it, we, they.\n• Bezittelijk: my, your, his, her, its, our, their.\n\n**2. Aanwijzende voornaamwoorden**:\n• this *(dichtbij, enkelvoud)*.\n• that *(verder, enkelvoud)*.\n• these *(dichtbij, meervoud)*.\n• those *(verder, meervoud)*.\n\n**3. Relatief**:\n• who, which, that, whose.\n• *'The man **who** lives next door is friendly.'*\n• *'The book **which** I bought is interesting.'*\n\n**Cito-vraag**:\n*'What does 'this' refer to?'*\n→ Lees vorige zin(en). Wat is het onderwerp dat 'this' samenvat?\n\n*'Who is 'they'?'*\n→ Welke groep mensen wordt genoemd eerder?\n\n**Belangrijke Cito-truc**:\nLees **vraag eerst**, dan zoek **terug in tekst**:\n• Wat staat er **vlak vóór** het verwijswoord?\n• Is dat een persoon (he/she), ding (it), groep (they), idee (this)?",
    checks: [
      {
        q: "*'Tom ate his sandwich. **He** was hungry.'* Wie is **he**?",
        options: ["Tom", "Iemand anders", "Het broodje", "Mary"],
        answer: 0,
        wrongHints: [null, "Niet — Tom expliciet.", "Een broodje is 'it'.", "Mary niet genoemd."],
      },
      {
        q: "*'The book was thick. ___ had 500 pages.'* Welk woord?",
        options: ["It", "He", "She", "They"],
        answer: 0,
        wrongHints: [null, "Persoon, geen ding.", "Persoon (vrouw).", "Meervoud."],
      },
      {
        q: "*'Sarah loves cats. **They** are her favorite animals.'* Wat is **they**?",
        options: ["Cats", "Sarah", "Animals", "Personen"],
        answer: 0,
        wrongHints: [null, "Sarah is 'she'.", "Wel synoniem maar context = cats.", "Geen specifieke personen."],
      },
      {
        q: "*'The exam was hard. The time was short. **This** is why students failed.'* Wat is **this**?",
        options: ["De hele situatie (moeilijk + kort)", "De examenuitslag", "Alleen het tijd-element", "Alleen het moeilijk-element"],
        answer: 0,
        wrongHints: [null, "Niet expliciet genoemd.", "Te beperkt.", "Te beperkt."],
        uitlegPad: {
          stappen: [
            { titel: "'This' kijkt terug", tekst: "Het verwijswoord 'this' verwijst naar wat erVOOR is gezegd. Hier 2 dingen: hard exam + short time. 'This' = beide samen." },
          ],
          woorden: [{ woord: "antecedent", uitleg: "Het woord/idee waar een verwijswoord naar verwijst." }],
          theorie: "'This' vat vaak een hele situatie of meerdere ideeën samen, niet 1 specifiek woord.",
          voorbeelden: [{ type: "stap", tekst: "'It rained. The roads were wet. This caused accidents.' → 'this' = de hele situatie (regen + natte wegen)." }],
          basiskennis: [{ onderwerp: "Logica volgen", uitleg: "Vraag: 'is why' duidt op oorzaak. Wat is de oorzaak? Hele situatie samen." }],
          niveaus: {
            basis: "De hele situatie. A.",
            simpeler: "'This' verwijst naar wat eerder staat. In dit geval: examen was moeilijk én tijd was kort. Beide samen veroorzaakten zakken. = A.",
            nogSimpeler: "Hele situatie = A.",
          },
        },
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — CSE-leesvaardigheid mix",
    explanation:
      "Mix-toets in CSE-stijl. Door elkaar: signaalwoorden, tekstsoorten, context-betekenis, hoofdgedachte, verwijzingen.\n\nVeel succes!",
    checks: [
      {
        q: "Welk signaalwoord voor **tegenstelling**?",
        options: ["however", "therefore", "for example", "moreover"],
        answer: 0,
        wrongHints: [null, "Gevolg.", "Voorbeeld.", "Toevoegen."],
      },
      {
        q: "Welk soort tekst probeert **iets te verkopen**?",
        options: ["Advertentie", "News", "Review", "Story"],
        answer: 0,
        wrongHints: [null, "Informeert.", "Beoordeelt.", "Vermaakt."],
      },
      {
        q: "*'The vast majority of people support the law.'* Wat betekent **vast** in deze context?",
        options: ["Heel groot (large)", "Snel", "Hard", "Vast (NL betekenis)"],
        answer: 0,
        wrongHints: [null, "Niet vast = snel.", "Niet hard.", "Engels vast ≠ Nederlands vast."],
      },
      {
        q: "Hoofdgedachte van: *'Climate change threatens the polar bears. Their ice habitat is melting.'*",
        options: ["Klimaatverandering bedreigt ijsberen", "IJsberen wonen op ijs", "Klimaat verandert", "IJs smelt"],
        answer: 0,
        wrongHints: [null, "Detail.", "Te algemeen.", "Detail."],
      },
      {
        q: "*'Anna and Tim went to the park. **They** played football.'* Wie is **they**?",
        options: ["Anna and Tim", "Sport-team", "Toeschouwers", "Anna alleen"],
        answer: 0,
        wrongHints: [null, "Niet — Anna+Tim genoemd.", "Niet genoemd.", "Te beperkt."],
      },
      {
        q: "*'Books are great. ___, they are also expensive.'* Welk signaalwoord (tegenstelling)?",
        options: ["However", "Therefore", "Because", "For example"],
        answer: 0,
        wrongHints: [null, "Geen gevolg.", "Geen reden.", "Geen voorbeeld."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const cseLeesvaardigheidEngels = {
  id: "cse-leesvaardigheid-engels",
  title: "CSE Engels — leesvaardigheid (klas 3-4)",
  emoji: "📖",
  level: "klas3-4",
  subject: "engels",
  referentieNiveau: "3F",
  sloThema: "Engels — leesvaardigheid CSE (centraal examen)",
  prerequisites: [
    { id: "present-tenses-engels", title: "Present tenses Engels", niveau: "2F" },
    { id: "past-tenses-engels", title: "Past tenses Engels", niveau: "2F" },
    { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "2F" },
  ],
  intro:
    "CSE Engels leesvaardigheid voor klas 3-4 — signaalwoorden (however, therefore), tekstsoorten (news, opinion, review, ad), woordbetekenis uit context, hoofdgedachte + details, verwijzingen (he/it/this). Direct examenrelevant. ~15 min.",
  triggerKeywords: [
    "engels leesvaardigheid", "CSE engels", "examen engels",
    "signaalwoorden engels", "linking words",
    "however", "therefore", "because",
    "tekstsoort engels", "main idea",
  ],
  chapters,
  steps,
};

export default cseLeesvaardigheidEngels;
