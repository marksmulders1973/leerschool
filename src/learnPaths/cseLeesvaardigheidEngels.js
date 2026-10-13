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
      "**Signaalwoorden (linking words)** zijn woorden die laten zien **wat de schrijver bedoelt** of **hoe stukken samenhangen**.\n\n**Belangrijkste groepen** *(uit het hoofd!)*:\n\n**1. Toevoegen (+)** — *'er komt nog iets bij'*:\n• and, also, moreover, furthermore, in addition.\n• **NL**: en, ook, bovendien, daarnaast.\n\n**2. Tegenstelling (↔)** — *'maar het tegenovergestelde'*:\n• but, however, although, yet, on the other hand, despite.\n• **NL**: maar, echter, hoewel, ondanks.\n\n**3. Gevolg (→)** — *'daarom dus'*:\n• so, therefore, as a result, consequently, thus.\n• **NL**: dus, daarom, daardoor, bijgevolg.\n\n**4. Reden (∵)** — *'omdat'*:\n• because, since, as, due to, owing to.\n• **NL**: omdat, want, vanwege.\n\n**5. Voorbeeld (📋)** — *'bijvoorbeeld'*:\n• for example, for instance, such as, like.\n• **NL**: bijvoorbeeld, zoals.\n\n**6. Tijd (⏱)** — *'wanneer'*:\n• then, after, before, finally, meanwhile, eventually.\n• **NL**: dan, na, daarna, ten slotte, ondertussen.\n\n**7. Conclusie (✓)**:\n• in conclusion, to sum up, in short, all in all.\n• **NL**: tot slot, samenvattend, kortom.\n\n**Toets-truc — signaalwoord vertelt verwachting**:\n• Zie je **'but'** of **'however'**? → wat volgt is **tegenovergesteld** of **verrassend**.\n• Zie je **'so'** of **'therefore'**? → wat volgt is een **conclusie**.\n• Zie je **'because'**? → wat volgt is een **reden**.\n\n**Voorbeeld**:\n*'Tom worked hard. However, he failed the exam.'*\n→ '**However**' = verrassing. Verwacht: tegenovergestelde van wat eerder stond *(hard werken = slagen, maar hier juist niet)*.\n\n*'It was raining, so we stayed home.'*\n→ '**So**' = gevolg. Eerste zin is reden, tweede is gevolg.\n\n**Examen-strategie**:\nBij **examenvragen** kun je vaak het antwoord vinden door alleen de **signaalwoorden** te checken. Lees niet de hele tekst — zoek 'but', 'however', 'because' etc.\n\n**Beroemde Toets-strikvraag**:\n*'Welke zin past in het gat?'*\n→ Kijk welk signaalwoord *(en, maar, dus)* past bij de logica van de zinnen eromheen.",
    svg: signalwordsSvg(),
    checks: [
      {
        q: "Welk signaalwoord betekent **'maar/tegenstelling'**?",
        options: ["however", "moreover", "therefore", "for example"],
        answer: 0,
        wrongHints: [null, "Moreover betekent 'bovendien': je voegt nog iets toe. Is dat een tegenstelling?", "Therefore betekent 'daarom': er volgt een gevolg. Is dat een tegenstelling?", "For example kondigt een voorbeeld aan. Zegt dat 'maar'?"],
      },
      {
        q: "Welk woord geeft **'gevolg'** aan?",
        options: ["therefore", "but", "moreover", "for example"],
        answer: 0,
        wrongHints: [null, "But betekent 'maar'. Geeft dat een gevolg, of een tegenstelling?", "Moreover betekent 'bovendien': je voegt iets toe. Is dat een gevolg?", "For example kondigt een voorbeeld aan. Is dat een gevolg?"],
      },
      {
        q: "*'Tom studied hard. ___, he failed the exam.'* Welk woord?",
        options: ["However", "Therefore", "Because", "Moreover"],
        answer: 0,
        wrongHints: [null, "Niet gevolg — hard werken zou tot slagen leiden, niet zakken.", "Because geeft een reden en staat meestal midden in een zin. Is 'hij zakte' de reden voor hard leren?", "Moreover voegt iets toe in dezelfde richting. Past zakken bij hard leren?"],
        uitlegPad: {
          stappen: [
            { titel: "Tegengestelde verwachting", tekst: "Eerste zin: 'Tom studied hard' — verwachting: hij slaagt. Tweede zin: 'he failed' — tegenovergesteld. Dus signaalwoord van tegenstelling." },
            { titel: "Welke past?", tekst: "'However' = echter/maar. 'Therefore' = dus (zou betekenen: hard werken → zakken? Onlogisch). 'Because' = omdat (geen reden hier). 'Moreover' = bovendien (extra info, geen tegenstelling)." },
          ],
          woorden: [{ woord: "however", uitleg: "Engels signaalwoord voor 'echter, maar, toch'. Geeft een tegenstelling aan." }],
          theorie: "Signaalwoorden tonen logica: tegenstelling / gevolg / reden / voorbeeld / toevoeging.",
          voorbeelden: [{ type: "stap", tekst: "Hij werkte hard. Echter (however) zakte hij. Tegenovergesteld van verwachting." }],
          basiskennis: [{ onderwerp: "Logica eerst, dan woord", uitleg: "Vraag jezelf: wat is de relatie tussen 2 zinnen? Kies dan het signaalwoord dat past." }],
          niveaus: {
            basis: "However.",
            simpeler: "Tom werkte hard maar zakte. Dat is tegenstelling. 'However' = echter/maar.",
            nogSimpeler: "However",
          },
        },
      },
      {
        q: "*'I was tired ___ I worked late.'* Welk woord (reden)?",
        options: ["because", "however", "therefore", "moreover"],
        answer: 0,
        wrongHints: [null, "However geeft een tegenstelling. Is moe zijn het tegendeel van laat werken?", "Therefore wijst naar een gevolg. Is laat werken het gevolg van moe zijn, of andersom?", "Moreover voegt iets extra's toe. Legt laat werken uit waarom je moe was?"],
      },
      {
        q: "*'First... then... finally...'* — welk soort signaalwoorden?",
        options: ["Volgorde (sequence)", "Tegenstelling (contrast)", "Reden-gevolg (cause-effect)", "Voorbeeld (example)"],
        answer: 0,
        wrongHints: [null, "Bij een tegenstelling horen woorden als but en however. Staan die hier?", "Bij reden en gevolg horen woorden als because en therefore. Staan die hier?", "Een voorbeeld begint met for example of for instance. Staat dat hier?"],
      },
      {
        q: "*'For example, ...'* leidt in?",
        options: ["Voorbeeld", "Conclusie", "Tegenstelling", "Reden"],
        answer: 0,
        wrongHints: [null, "Daarvoor 'in conclusion'.", "Daarvoor 'however'.", "Daarvoor 'because'."],
      },
    ],
  },

  // STAP 2: Tekstsoorten
  {
    title: "Tekstsoorten herkennen",
    explanation:
      "Bij CSE Engels krijg je verschillende **soorten teksten**. Elke soort heeft een **doel** + **stijl** + **toon**.\n\n**De hoofdsoorten** *(uit het hoofd!)*:\n\n**1. News article (nieuws-artikel)**\n• Doel: **informeren** over gebeurtenis.\n• Stijl: zakelijk, feiten, datum/plek.\n• Vaak met **kop** + **leadalinea** *(wat/wie/waar/wanneer)*.\n• Voorbeeld: BBC, The Guardian.\n\n**2. Opinion piece / editorial (mening)**\n• Doel: schrijver wil **lezer overtuigen** van zijn mening.\n• Stijl: argumenten + voorbeelden.\n• Vaak in 'I think/I believe' of 'one might argue'.\n• Voorbeeld: column, opiniestuk.\n\n**3. Advertorial / advertisement**\n• Doel: iets **verkopen** of promoten.\n• Stijl: enthousiast, persoonlijk, oproep.\n• Vaak met *'You should try this!'* of *'Buy now!'*.\n• Voorbeeld: reclame, productpagina.\n\n**4. Story / narrative (verhaal)**\n• Doel: **vermaken** of verhaal vertellen.\n• Stijl: personages, plot, beschrijving.\n• Vaak met dialoog ('he said', 'she shouted').\n• Voorbeeld: roman-uittreksel, kort verhaal.\n\n**5. Review (recensie)**\n• Doel: iets **beoordelen** (film, boek, restaurant).\n• Stijl: mening + argumenten + sterren/cijfer.\n• Voorbeeld: filmreview, boekrecensie.\n\n**6. Letter / email**\n• Persoonlijk *(aan vriend)* of formeel *(zakelijk)*.\n• Met aanhef ('Dear...') + afsluiting ('Yours...').\n\n**7. Scientific / informational text**\n• Doel: **uitleggen / leren**.\n• Stijl: feitelijk, vaktermen, vaak met getallen.\n• Voorbeeld: schoolboek, Wikipedia.\n\n**toetsvraag-typen**:\n*'What is the purpose of this text?'*\n→ Inform / Persuade / Entertain / Sell / Describe.\n\n*'What kind of text is this?'*\n→ News, opinion, review, etc.\n\n**Toets-truc — kijk naar**:\n• **Titel/kop**: nieuws of mening?\n• **Stijl**: zakelijk of persoonlijk?\n• **Bron**: krant, blog, schoolboek?\n• **Doel**: leren, mening, kopen?\n\n**Voorbeeld**:\n*'Best Pizza in Town: Mario's exceeds expectations. The crust is crispy, the sauce is perfectly seasoned, and the staff is friendly. ⭐⭐⭐⭐⭐.'*\n→ **Review** *(beoordeling met sterren)*.\n\n*'A new study by Cambridge University shows that...'*\n→ **News / informational** *(feit, bron)*.",
    checks: [
      {
        q: "Wat is het doel van een **review**?",
        options: ["Iets beoordelen", "Iets verkopen", "Nieuws neutraal melden", "Uitleggen hoe iets werkt"],
        answer: 0,
        wrongHints: [null, "Iets verkopen doet een advertentie. Wat doet een review met een film of product?", "Neutraal nieuws melden doet een nieuwsbericht. Geeft een review een neutraal verslag, of een oordeel?", "Uitleggen hoe iets werkt doet een handleiding. Wat geeft een recensent over een film?"],
      },
      {
        q: "Wat is het doel van een **opinion piece**?",
        options: ["Lezer overtuigen van een standpunt", "Lezer iets laten kopen", "Lezer meerdere meningen laten zien", "Lezer neutraal feiten geven"],
        answer: 0,
        wrongHints: [null, "Een tekst die iets wil verkopen is reclame. Wil een opinion piece je een product aansmeren?", "Zet de schrijver van een opinion piece eerlijk alle kanten naast elkaar, of kiest hij partij?", "Neutraal feiten geven doet een nieuwsbericht. Is een opinion piece neutraal?"],
      },
      {
        q: "*'Buy now! 50% off!'* Welk soort tekst?",
        options: ["Advertentie", "Nieuws", "Review", "Verhaal"],
        answer: 0,
        wrongHints: [null, "Nieuws meldt wat er gebeurd is. Meldt 'Buy now!' een gebeurtenis?", "Een review geeft een oordeel over een product. Geeft 'Buy now!' een oordeel, of een oproep?", "Een verhaal heeft personages en gebeurtenissen. Zie je die hier?"],
      },
      {
        q: "*'A new study by Oxford shows...'* Welk soort?",
        options: ["News / informatief", "Opinion / mening", "Review / beoordeling", "Advert / reclame"],
        answer: 0,
        wrongHints: [null, "Staat er 'I think' of 'in my opinion'? Of meldt de zin een onderzoek?", "Een review beoordeelt een film of product. Wordt hier iets beoordeeld?", "Probeert de zin je iets te laten kopen?"],
      },
      {
        q: "*'In my opinion, this movie was disappointing.'* Welk soort?",
        options: ["Opinion / mening", "News / nieuws", "Recipe / recept", "Manual / handleiding"],
        answer: 0,
        wrongHints: [null, "Nieuws brengt feiten neutraal. Lees je hier een feit of iemands gevoel?", "Een recept heeft ingrediënten en stappen. Zie je die?", "Een handleiding legt uit hoe iets werkt. Staat er een instructie?"],
      },
      {
        q: "*'Step 1: turn on the device. Step 2: press the button.'* Welk soort?",
        options: ["Manual / handleiding", "News / nieuwsbericht", "Opinion / mening", "Recipe / recept"],
        answer: 0,
        wrongHints: [null, "Een nieuwsbericht meldt wat er gebeurd is. Wat doet 'Step 1, Step 2'?", "Zie je iemands mening, zoals 'I think'?", "Een recept heeft ook stappen. Maar wordt hier iets gekookt, of iets bediend?"],
      },
    ],
  },

  // STAP 3: Woordbetekenis uit context
  {
    title: "Woordbetekenis uit context — niet alle woorden hoef je te kennen",
    explanation:
      "Bij CSE Engels kom je **veel onbekende woorden** tegen. **Je hoeft ze niet allemaal te kennen!**\n\n**Toets-strategie — context-clues**:\n\n**1. Synoniem in zelfde zin**\nVaak staat **dichtbij** een woord met **dezelfde betekenis**.\n*'The path was steep, so going up was difficult.'*\n→ 'steep' = moeilijk omhoog = hellend, steil.\n\n**2. Tegenstelling met signaalwoord**\nMet 'but', 'however', 'although' krijgt het onbekende woord **tegenovergestelde** betekenis van de andere zin.\n*'She was usually cheerful, but today she was morose.'*\n→ 'morose' = tegenovergesteld van cheerful = somber/chagrijnig.\n\n**3. Voorbeelden**\nWoorden 'such as', 'like', 'for example' geven hints.\n*'He bought legumes, such as beans and lentils.'*\n→ 'legumes' = peulvruchten (omdat bonen + linzen erbij genoemd worden).\n\n**4. Definitie in zin**\nSoms staat de **uitleg** er direct bij.\n*'A philanthropist, someone who gives money to good causes, donated millions.'*\n→ 'philanthropist' = iemand die geld geeft aan goede doelen.\n\n**5. Logische gevolgtrekking**\nUit de context kun je vaak afleiden wat een woord moet betekenen.\n*'She was so frugal that she didn't even buy a coffee at work.'*\n→ 'frugal' = zuinig (logisch — geen koffie kopen = zuinig).\n\n**6. Word parts (prefixen + suffixen)**\nHerken de delen:\n• **un-** = niet *(unhappy = niet blij)*.\n• **re-** = opnieuw *(retell = opnieuw vertellen)*.\n• **-less** = zonder *(careless = onvoorzichtig)*.\n• **-ful** = vol van *(useful = bruikbaar)*.\n• **-er/-or** = persoon die *(teacher = leerkracht)*.\n• **bi-** = twee *(bicycle = tweewieler)*.\n\n**7. Skip & continue**\nAls je een woord niet kunt opmaken: **sla het over** en lees verder. Soms wordt het later duidelijk.\n\n**Toets-strategie**:\n• Onderstreep onbekende woorden bij eerste lezing.\n• Probeer **context** te gebruiken voor betekenis.\n• Lees vraag → zoek terug in tekst.\n\n**Voorbeeld toetsvraag**:\n*'In line 4, the word ___ probably means ___.'*\n→ Lees zin in regel 4. Kijk hoe het woord wordt gebruikt. Welk synoniem zou passen?\n\n**Voorbeeld**:\n*'The traveler was exhausted after walking 30 miles.'*\n• Onbekend: 'exhausted'.\n• Context: 30 mijl gelopen → moe.\n• Antwoord: 'very tired'.",
    checks: [
      {
        q: "*'She was usually cheerful, but today she was morose.'* Wat betekent **morose**?",
        options: ["Somber / chagrijnig", "Vrolijk / opgewekt", "Boos / woedend", "Bang / angstig"],
        answer: 0,
        wrongHints: [null, "Het woord 'but' geeft een tegenstelling met cheerful. Kan het dan vrolijk zijn?", "Boos is ook negatief. Maar wijst de zin op woede, of op 'niet vrolijk'?", "Is er in de zin iets om bang voor te zijn?"],
      },
      {
        q: "*'unhappy'* — wat betekent **un-**?",
        options: ["niet", "veel", "zonder", "opnieuw"],
        answer: 0,
        wrongHints: [null, "Is unhappy 'erg blij'? Wat doet un- met happy?", "'Zonder' is de uitgang -less, achter een woord. Un- staat vooraan.", "'Opnieuw' is re-, zoals in redo. Is unhappy 'opnieuw blij'?"],
      },
      {
        q: "*'He bought legumes, such as beans and lentils.'* Wat zijn **legumes**?",
        options: ["Peulvruchten", "Fruit", "Vlees", "Brood"],
        answer: 0,
        wrongHints: [null, "Zijn bonen en linzen fruit? Kijk naar de voorbeelden na 'such as'.", "Bonen en linzen zijn plantaardig. Is dat vlees?", "Bonen en linzen bak je niet tot een brood. Welke groep voedsel zijn het?"],
      },
      {
        q: "*'-less'* aan eind van woord betekent ... ?",
        options: ["Zonder", "Met", "Twee", "Opnieuw"],
        answer: 0,
        wrongHints: [null, "'Met' is juist -ful, zoals in careful. Is careless hetzelfde als careful?", "'Twee' is bi-, vooraan, zoals in bicycle. Waar staat -less?", "'Opnieuw' is re-, vooraan, zoals in redo. Waar staat -less?"],
      },
      {
        q: "*'un-'* aan begin van woord betekent meestal?",
        options: ["Niet / tegenovergesteld", "Heel erg / extra sterk", "Vooraf / van tevoren", "Tussen / onderling"],
        answer: 0,
        wrongHints: [null, "Daarvoor gebruik je eerder 'super-'.", "Dat is 'pre-'.", "Dat is 'inter-'."],
      },
      {
        q: "*'I felt jubilant after passing the test.'* Wat betekent **jubilant** (uit context)?",
        options: ["Heel blij", "Verdrietig", "Boos", "Bang"],
        answer: 0,
        wrongHints: [null, "Hoe voel je je meestal net nadat je een toets hebt gehaald?", "Word je boos als je een toets haalt? Wat zegt 'after passing' over het gevoel?", "Is er na het halen van een toets iets om bang voor te zijn?"],
      },
    ],
  },

  // STAP 4: Hoofdgedachte + details
  {
    title: "Hoofdgedachte + details",
    explanation:
      "Bij CSE-vragen test de toets 2 niveaus van begrip:\n\n**1. Hoofdgedachte (main idea)** — *waar gaat de hele tekst over?*\n• Meestal in **eerste of laatste alinea**.\n• Soms in **kop** of **eerste zin** van elke alinea.\n• Engelse stijl: 'topic sentence' eerst, dan uitleg.\n\n**Voorbeeld**:\nTekst over klimaatverandering met:\n• Alinea 1: 'Climate change is happening rapidly.'\n• Alinea 2: details over temperatuur-stijging.\n• Alinea 3: details over zeespiegel.\n• Alinea 4: 'In conclusion, climate change is a major issue.'\n\n→ Hoofdgedachte: **klimaatverandering is groot probleem**.\n\n**2. Details** — *specifieke feiten in tekst*\n• 'In which year...?' → zoek exact jaar.\n• 'How many...?' → tel of zoek getal.\n• 'According to ___, ___?' → zoek de bron.\n\n**Toets-vraagtypen**:\n• *'What is the main idea?'* → hoofdgedachte.\n• *'What is the writer's opinion?'* → mening schrijver.\n• *'What does paragraph 3 say?'* → detail uit alinea 3.\n• *'According to the article, ___'* → letterlijk in tekst zoeken.\n\n**Trucs voor hoofdgedachte**:\n• Lees titel + eerste zin elke alinea.\n• Zoek herhaling van thema.\n• Wat staat in eerste en laatste alinea?\n\n**Voorbeeld**:\nTekst: *'Bees are vital pollinators. They pollinate 90% of crops. Without bees, many fruits and vegetables would disappear. We must protect bees.'*\n\n• **Hoofdgedachte**: 'We must protect bees.' *(of: 'Bees are important')*\n• **Detail**: '90% of crops' *(specifiek getal)*.\n\n**Pas op — geen eigen mening**:\n*'What does the writer think?'* — zoek wat de schrijver schrijft, **niet wat jij zou denken**.\n\n**Toets-strikvraag**:\nVraag: 'What is true according to the text?'\n→ Antwoord moet **letterlijk in tekst staan**. Niet logisch afleiden, niet je eigen mening.\n\n**Toets-strategie voor hoofdgedachte**:\n• Streep door wat alleen voorbeeld of detail is.\n• Wat blijft over = hoofdpunt.\n• Welke antwoordoptie omvat het hele tekst-thema?\n\n**Veel voorkomende fout**:\n• Te specifiek antwoord *(detail i.p.v. hoofdgedachte)*.\n• Te algemeen antwoord *(thema buiten tekst)*.\n• 'Logisch' antwoord dat niet expliciet in tekst staat.",
    checks: [
      {
        q: "Waar staat de **hoofdgedachte** meestal?",
        options: ["Eerste of laatste alinea", "In de middelste alinea", "In de voorbeelden", "In het bijschrift bij een foto"],
        answer: 0,
        wrongHints: [null, "In het midden staan meestal uitwerkingen en voorbeelden. Waar kondigt een schrijver zijn punt aan?", "Voorbeelden ondersteunen het hoofdpunt. Waar wordt dat punt zelf genoemd?", "Een bijschrift legt alleen de foto uit. Waar noemt de schrijver het punt van de hele tekst?"],
      },
      {
        q: "Wat is een **detail-vraag**?",
        options: ["Vraag naar een specifiek feit", "Vraag naar de mening van de schrijver", "Vraag naar het hoofdpunt van de tekst", "Vraag naar het doel van de schrijver"],
        answer: 0,
        wrongHints: [null, "Dat is een meningsvraag. Gaat een detail over wat iemand vindt?", "Het hoofdpunt is juist het grote geheel. Hoe groot is een detail?", "Dat is een vraag naar de bedoeling van de tekst. Hoe klein is een detail?"],
      },
      {
        q: "*'What is true according to the text?'* Welke aanpak?",
        options: ["Wat de tekst zegt, ook in andere woorden", "De optie met dezelfde woorden als de tekst", "Wat er in de inleiding van de tekst staat", "De optie die het meest volledig klinkt"],
        answer: 0,
        wrongHints: [null, "Examenmakers zetten vaak woorden uit de tekst in een fout antwoord. Klopt de betekenis ook?", "De inleiding is maar een deel van de tekst. Kan het antwoord ook verderop staan?", "Examenmakers maken foute opties soms lang en volledig. Zegt de lengte iets over wat de tekst beweert?"],
      },
      {
        q: "Tekst: *'Bees are vital. They pollinate 90% of crops. Without bees, food would disappear.'* Wat is **hoofdgedachte**?",
        options: ["Bijen zijn belangrijk voor voedsel", "Bijen bestuiven 90% van de gewassen", "Ons voedsel verdwijnt binnenkort", "Bijen leven samen in grote nesten"],
        answer: 0,
        wrongHints: [null, "Dat getal is een detail dat iets ondersteunt. Wat ondersteunt het?", "Staat er dat het voedsel echt verdwijnt? Lees 'Without bees … would' nog eens.", "Staat dit in de tekst?"],
      },
      {
        q: "Bij **examen-vraag 'What is the main point?'** zoek je naar?",
        options: ["De hoofdgedachte van de hele tekst", "De kernzin van de eerste alinea", "Het belangrijkste voorbeeld in de tekst", "Het doel dat de schrijver wil bereiken"],
        answer: 0,
        wrongHints: [null, "Een kernzin vat één alinea samen. Waar slaat 'main point' op?", "Een voorbeeld maakt iets duidelijk. Is het voorbeeld zelf het punt dat de schrijver wil maken?", "Het doel is wat de schrijver wil bereiken (overtuigen, informeren). Vraagt 'main point' daarnaar?"],
      },
      {
        q: "*'Skimming'* is een leestechniek waarbij je...?",
        options: ["Snel leest voor de hoofdlijnen", "Elk woord langzaam leest", "Zoekt naar één bepaald woord", "Moeilijke woorden opzoekt"],
        answer: 0,
        wrongHints: [null, "Dat is grondig lezen. Gaat skimmen snel of langzaam?", "Zoeken naar één woord of jaartal heet scanning. Wat doe je bij skimming?", "Woorden opzoeken doe je bij grondig lezen. Gaat skimmen snel of langzaam?"],
      },
    ],
  },

  // STAP 5: Verwijzingen
  {
    title: "Verwijzingen — wie/wat is 'he' / 'this' / 'it'?",
    explanation:
      "In tekst worden **personen, dingen of ideeën** vaak vervangen door **verwijswoorden**:\n• **He / She / They** — voor personen.\n• **It** — voor dingen of ideeën.\n• **This / That / These / Those** — voor specifieke dingen.\n• **Such** — voor zo'n soort.\n\n**toetsvraag-type**:\n*'In line 6, what does 'it' refer to?'*\n→ Zoek wat 'it' vervangt. Meestal in **vorige zin**.\n\n**Voorbeeld**:\n*'The teacher gave Sarah a book. **It** was very thick.'*\n→ 'It' = the book *(niet Sarah, niet the teacher)*.\n\n**Truc — vraag jezelf**:\nWelke **logische antecedent** *(woord eerder in zin/tekst)* past?\n\n**Voorbeeld**:\n*'Tom ate his sandwich while Mary watched TV. **He** seemed hungry.'*\n→ 'He' = Tom *(niet Mary — die is 'she')*.\n\n**Voorbeeld — 'this' / 'that'**:\n*'The exam was hard. The questions were tricky and the time was short. **This** is why many students failed.'*\n→ 'This' = de hele situatie *(moeilijk examen + tricky vragen + tijd kort)*.\n\n**Pas op — niet altijd dichtstbijzijnd**:\nSoms verwijst 'it' naar iets verder terug in tekst.\n\n*'The car was parked in front of the library. Inside, there were many books. **It** had a broken window.'*\n→ 'It' = the car *(niet the library — library heeft geen 'broken window'-context)*. Logica eerst.\n\n**Verwijzingen-soorten**:\n\n**1. Persoonlijke voornaamwoorden**:\n• I, you, he, she, it, we, they.\n• Bezittelijk: my, your, his, her, its, our, their.\n\n**2. Aanwijzende voornaamwoorden**:\n• this *(dichtbij, enkelvoud)*.\n• that *(verder, enkelvoud)*.\n• these *(dichtbij, meervoud)*.\n• those *(verder, meervoud)*.\n\n**3. Relatief**:\n• who, which, that, whose.\n• *'The man **who** lives next door is friendly.'*\n• *'The book **which** I bought is interesting.'*\n\n**toetsvraag**:\n*'What does 'this' refer to?'*\n→ Lees vorige zin(en). Wat is het onderwerp dat 'this' samenvat?\n\n*'Who is 'they'?'*\n→ Welke groep mensen wordt eerder genoemd?\n\n**Belangrijke Toets-truc**:\nLees **eerst de vraag**, zoek dan **terug in de tekst**:\n• Wat staat er **vlak vóór** het verwijswoord?\n• Is dat een persoon (he/she), ding (it), groep (they), idee (this)?",
    checks: [
      {
        q: "*'Tom ate his sandwich. **He** was hungry.'* Wie is **he**?",
        options: ["Tom", "Iemand anders", "Het broodje", "Mary"],
        answer: 0,
        wrongHints: [null, "Wordt er in de zinnen nog een andere man of jongen genoemd?", "Voor een ding zoals een broodje gebruik je 'it'. Kan 'he' een broodje zijn?", "Wordt Mary ergens in de zinnen genoemd? Een verwijswoord slaat terug op iets wat er al staat."],
      },
      {
        q: "*'The book was thick. ___ had 500 pages.'* Welk woord?",
        options: ["It", "He", "She", "They"],
        answer: 0,
        wrongHints: [null, "He gebruik je voor een man of jongen. Is een boek dat?", "She gebruik je voor een vrouw of meisje. Is een boek dat?", "They is meervoud. Gaat het hier over één boek of meer?"],
      },
      {
        q: "*'Sarah loves cats. **They** are her favorite animals.'* Wat is **they**?",
        options: ["Cats", "Sarah", "Animals", "Personen"],
        answer: 0,
        wrongHints: [null, "Sarah is 'she'.", "'Animals' staat in dezelfde zin als 'they'. Waar zoek je meestal naar waar een verwijswoord op slaat?", "Worden er meerdere personen genoemd in de tekst?"],
      },
      {
        q: "*'The exam was hard. The time was short. **This** is why students failed.'* Wat is **this**?",
        options: ["Het moeilijke examen en de korte tijd", "Het zakken van de leerlingen zelf", "De zin vlak vóór 'this' (korte tijd)", "De eerste zin (het moeilijke examen)"],
        answer: 0,
        wrongHints: [null, "'This is why students failed' — kan 'this' dan het zakken zelf zijn?", "Verwijst 'this' altijd naar de zin die er vlak voor staat? Lees ook verder terug.", "Staat er na de eerste zin nog iets dat het zakken verklaart?"],
        uitlegPad: {
          stappen: [
            { titel: "'This' kijkt terug", tekst: "Het verwijswoord 'this' verwijst naar wat erVOOR is gezegd. Hier 2 dingen: hard exam + short time. 'This' = beide samen." },
          ],
          woorden: [{ woord: "antecedent", uitleg: "Het woord/idee waar een verwijswoord naar verwijst." }],
          theorie: "'This' vat vaak een hele situatie of meerdere ideeën samen, niet 1 specifiek woord.",
          voorbeelden: [{ type: "stap", tekst: "'It rained. The roads were wet. This caused accidents.' → 'this' = de hele situatie (regen + natte wegen)." }],
          basiskennis: [{ onderwerp: "Logica volgen", uitleg: "Vraag: 'is why' duidt op oorzaak. Wat is de oorzaak? Hele situatie samen." }],
          niveaus: {
            basis: "De hele situatie.",
            simpeler: "'This' verwijst naar wat eerder staat. In dit geval: examen was moeilijk én tijd was kort. Beide samen veroorzaakten zakken.",
            nogSimpeler: "Hele situatie",
          },
        },
      },
      {
        q: "*'Sarah likes Tom. **She** told **him** a joke.'* Waar verwijst **'she'** naar?",
        options: ["Sarah", "Tom", "Joke", "Iemand anders"],
        answer: 0,
        wrongHints: [null, "Tom is een jongen. Welk woord gebruikt de zin al voor hem: 'she' of 'him'?", "Een grap is een ding en geen persoon. Gebruik je daar 'she' voor?", "Wordt er in de zin nog een andere vrouw of meisje genoemd?"],
      },
      {
        q: "*'I bought a phone. **It** has a great camera.'* Waar verwijst **'it'** naar?",
        options: ["De telefoon", "De camera", "De winkel", "Ik"],
        answer: 0,
        wrongHints: [null, "Wat staat er vóór 'it'? De camera wordt pas erna genoemd.", "Wordt er in de zinnen een winkel genoemd?", "Voor jezelf gebruik je 'I'. Kan 'it' naar de spreker verwijzen?"],
      },
      {
        q: "*'The students who studied passed. **They** worked hard.'* Waar verwijst **'they'** naar?",
        options: ["De studenten die slaagden", "Alle studenten van de klas", "De studenten die zakten", "De docenten die lesgaven"],
        answer: 0,
        wrongHints: [null, "'The students who studied' — gaat het over alle studenten, of over een bepaalde groep?", "Worden zakkers in de tekst genoemd? Kijk welke groep er wél staat.", "Worden er docenten genoemd in de tekst?"],
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
        wrongHints: [null, "Therefore betekent 'daarom' en geeft een gevolg. Is dat een tegenstelling?", "For example kondigt een voorbeeld aan. Is dat een tegenstelling?", "Moreover betekent 'bovendien' en voegt iets toe. Is dat een tegenstelling?"],
      },
      {
        q: "Welk soort tekst probeert **iets te verkopen**?",
        options: ["Advertentie", "News", "Review", "Story"],
        answer: 0,
        wrongHints: [null, "Een nieuwsbericht meldt wat er gebeurd is. Wil het je iets laten kopen?", "Een review beoordeelt een product, ook als je het niet koopt. Welke tekst roept op tot kopen?", "Een verhaal wil je vermaken. Welke tekst wil dat je iets koopt?"],
      },
      {
        q: "*'The vast majority of people support the law.'* Wat betekent **vast** in deze context?",
        options: ["Heel groot", "Snel", "Hard / stevig", "Vast / blijvend"],
        answer: 0,
        wrongHints: [null, "Je denkt misschien aan 'fast'. Past 'de snelle meerderheid' in de zin?", "Past 'de harde meerderheid van de mensen' in de zin? Wat zegt 'majority' over aantallen?", "Engels vast is een valse vriend. Past 'de vaste meerderheid' bij 'majority of people'?"],
      },
      {
        q: "Hoofdgedachte van: *'Climate change threatens the polar bears. Their ice habitat is melting.'*",
        options: ["Klimaatverandering bedreigt ijsberen", "IJsberen leven op het poolijs", "Het klimaat op aarde verandert", "Het ijs op de Noordpool smelt"],
        answer: 0,
        wrongHints: [null, "Dat klopt, maar het is een detail. Waarom wordt dat ijs genoemd?", "Dat klopt, maar het is te algemeen. Over wie gaat de tekst vooral?", "Dat is de oorzaak in zin 2. Wat is het gevolg, en voor wie?"],
      },
      {
        q: "*'Anna and Tim went to the park. **They** played football.'* Wie is **they**?",
        options: ["Anna and Tim", "Sport-team", "Toeschouwers", "Anna alleen"],
        answer: 0,
        wrongHints: [null, "Wordt er een sportteam genoemd? Kijk wie er naar het park gingen.", "Worden er toeschouwers genoemd? Op wie slaat 'they' terug?", "They is meervoud. Hoeveel personen gingen er naar het park?"],
      },
      {
        q: "*'Books are great. ___, they are also expensive.'* Welk signaalwoord (tegenstelling)?",
        options: ["However", "Therefore", "Because", "For example"],
        answer: 0,
        wrongHints: [null, "Therefore geeft een gevolg. Is 'duur' een gevolg van 'geweldig'?", "Because geeft een reden en past niet aan het begin met een komma. Is 'duur' de reden dat boeken geweldig zijn?", "For example kondigt een voorbeeld aan. Is 'duur' een voorbeeld van 'geweldig'?"],
      },
      {
        q: "*'**Open question**: what does 'although' signal in English?'*",
        kind: "open",
        acceptedAnswers: ["contrast", "tegenstelling", "tegenstelling/contrast"],
        explanation: "'Although' is een tegenstelling-signaalwoord, vergelijkbaar met 'though' / 'even though'.",
      },
      {
        q: "*'**Open question**: which 1-word **synonym** of 'happy' starts with 'j'?'*",
        kind: "open",
        acceptedAnswers: ["joyful", "jolly", "jubilant", "joyous"],
        explanation: "Joyful, joyous, jolly of jubilant (zie stap 3). Ze betekenen allemaal (heel) blij.",
      },
      {
        q: "*'**Open question**: complete the sentence — 'I __ to school every day.'* (typ het werkwoord)",
        kind: "open",
        acceptedAnswers: ["go", "walk", "cycle", "ride", "bike", "run", "come", "drive"],
        explanation: "'I go/walk/cycle to school every day' — present simple voor routine.",
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
