// Leerpad: CSE Engels — schrijfvaardigheid — klas 3-4.
// Onderdeel productieve vaardigheid Engels. Referentieniveau 2F-3F.
// 6 stappen met uitlegPad. Parallel met cseLeesvaardigheidEngels.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  formal: "#42a5f5",
  informal: "#ffd54f",
  structure: "#ff8a65",
  highlight: "#9575cd",
};

const stepEmojis = ["✉️", "🤝", "📋", "📝", "✅", "🏆"];

const chapters = [
  { letter: "A", title: "Formele e-mail / brief", emoji: "✉️", from: 0, to: 0 },
  { letter: "B", title: "Informele e-mail / berichtje", emoji: "🤝", from: 1, to: 1 },
  { letter: "C", title: "Samenvatting + opsomming", emoji: "📋", from: 2, to: 2 },
  { letter: "D", title: "Short essay / opinie", emoji: "📝", from: 3, to: 3 },
  { letter: "E", title: "Veelgemaakte fouten", emoji: "✅", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

function structuurSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Formele brief — opbouw</text>

<rect x="20" y="40" width="280" height="22" rx="4" fill="rgba(66,165,245,0.18)" stroke="${COLORS.formal}" stroke-width="1"/>
<text x="30" y="55" fill="${COLORS.formal}" font-size="10" font-family="Arial" font-weight="bold">1. Salutation</text>
<text x="160" y="55" fill="${COLORS.text}" font-size="10" font-family="Arial">Dear Mr/Ms ... ,</text>

<rect x="20" y="68" width="280" height="22" rx="4" fill="rgba(255,213,79,0.18)" stroke="${COLORS.informal}" stroke-width="1"/>
<text x="30" y="83" fill="${COLORS.informal}" font-size="10" font-family="Arial" font-weight="bold">2. Opening</text>
<text x="160" y="83" fill="${COLORS.text}" font-size="10" font-family="Arial">I am writing to ...</text>

<rect x="20" y="96" width="280" height="22" rx="4" fill="rgba(255,138,101,0.18)" stroke="${COLORS.structure}" stroke-width="1"/>
<text x="30" y="111" fill="${COLORS.structure}" font-size="10" font-family="Arial" font-weight="bold">3. Body</text>
<text x="160" y="111" fill="${COLORS.text}" font-size="10" font-family="Arial">main content (2-3 paragraphs)</text>

<rect x="20" y="124" width="280" height="22" rx="4" fill="rgba(149,117,205,0.18)" stroke="${COLORS.highlight}" stroke-width="1"/>
<text x="30" y="139" fill="${COLORS.highlight}" font-size="10" font-family="Arial" font-weight="bold">4. Closing</text>
<text x="160" y="139" fill="${COLORS.text}" font-size="10" font-family="Arial">I look forward to ...</text>

<rect x="20" y="152" width="280" height="22" rx="4" fill="rgba(105,240,174,0.18)" stroke="${COLORS.curve2}" stroke-width="1"/>
<text x="30" y="167" fill="${COLORS.curve2}" font-size="10" font-family="Arial" font-weight="bold">5. Sign-off</text>
<text x="160" y="167" fill="${COLORS.text}" font-size="10" font-family="Arial">Yours sincerely, [Name]</text>
</svg>`;
}

const steps = [
  // STAP 1: Formele brief
  {
    title: "Formele e-mail / brief",
    explanation:
      "Bij CSE Engels moet je vaak een **formele e-mail of brief** schrijven aan een bedrijf, school of onbekende persoon.\n\n**Structuur** *(uit het hoofd!)*:\n\n**1. Salutation (aanhef)**:\n• **Naam bekend**: 'Dear Mr Smith,' / 'Dear Mrs Smith,'\n• **Naam onbekend**: 'Dear Sir or Madam,'\n• Met **komma** na de naam *(niet uitroepteken)*.\n\n**2. Opening — wat je wilt**:\n• 'I am writing to **complain about** the broken product I bought ...'\n• 'I am writing to **apply for** the job advertised in ...'\n• 'I am writing **with regard to** your advertisement ...'\n• 'I would like to **enquire about** ...'\n\n**3. Body — 2-3 alinea's**:\n• Hoofdpunt + details + reden.\n• Gebruik **signaalwoorden**: firstly / secondly / moreover / however / therefore.\n• Concreet + beleefd.\n\n**4. Closing — wat je verwacht**:\n• 'I look **forward to hearing** from you.'\n• 'I would appreciate a **prompt reply**.'\n• 'Please **let me know** if you need further information.'\n\n**5. Sign-off**:\n• **Naam bekend** in aanhef → '**Yours sincerely**,' + naam.\n• **Naam onbekend** in aanhef *(Dear Sir or Madam)* → '**Yours faithfully**,' + naam.\n\n**Formele toon — wel + niet doen**:\n\n**Wel**:\n• Volledige zinnen.\n• Beleefde woorden: 'I would', 'could you', 'please'.\n• Geen samentrekkingen *(don't → do not, I'm → I am)*.\n• Geen smileys, emojis, of slang.\n• Spelling correct.\n\n**Niet**:\n• 'Hey!' / 'Hi!' als aanhef.\n• 'Sorry I'm being a pain, but ...'.\n• 'Cheers, Tom' als sign-off.\n• 'Gonna' / 'wanna' / 'kinda'.\n\n**Voorbeeld korte formele e-mail**:\n```\nDear Mr Brown,\n\nI am writing to complain about the bicycle I ordered\nfrom your website on 5 May. The bike arrived with a\nbroken pedal, which makes it impossible to use.\n\nI would like a full refund or a replacement bicycle.\nPlease let me know how to proceed.\n\nI look forward to hearing from you soon.\n\nYours sincerely,\nAnna van Dijk\n```\n\n**toetsvraag**:\n*'Welke afsluitformule bij 'Dear Mr Smith'?'* → Yours sincerely.\n*'Welke afsluitformule bij 'Dear Sir or Madam'?'* → Yours faithfully.\n*'Hoe schrijf je 'I am' formeel?'* → I am (niet I'm).",
    svg: structuurSvg(),
    checks: [
      {
        q: "Welke **aanhef** is formeel? *(naam onbekend)*",
        options: ["Dear Sir or Madam,", "Dear Mr or Mrs,", "Dear Ladies and Sirs,", "Respected Sir or Madam,"],
        answer: 0,
        wrongHints: [null, "'Mr' en 'Mrs' zijn titels die vóór een achternaam horen. Welke woorden gebruik je als je geen naam hebt?", "Dit is 'Geachte dames en heren' letterlijk vertaald. Wat is de vaste Engelse formule?", "'Respected' is geen vaste aanhef in een Britse brief. Met welk woord begint elke formele aanhef?"],
      },
      {
        q: "Welke **sign-off** bij 'Dear Mr Smith'?",
        options: ["Yours sincerely,", "Yours faithfully,", "Cheers,", "Bye!"],
        answer: 0,
        wrongHints: [null, "'Yours faithfully' gebruik je als je de naam níet kent. Staat er in de aanhef een naam?", "'Cheers' schrijf je aan een vriend. Past dat na een aanhef met 'Mr Smith'?", "'Bye!' zeg je in een gesprek; het is geen vaste afsluiting van een brief. Welke formule hoort bij een formele brief?"],
      },
      {
        q: "**Formeel** woord voor 'I'm':",
        options: ["I am", "I was", "I have", "I would"],
        answer: 0,
        wrongHints: [null, "'I was' is verleden tijd. Staat 'I'm' in de verleden tijd?", "'I have' trek je samen tot 'I've'. Welke letter valt weg in 'I'm'?", "'I would' trek je samen tot 'I'd'. Waar staat de m in 'I'm' voor?"],
      },
      {
        q: "*'I would like to **___** about your job advert.'* Welk woord?",
        options: ["enquire", "request", "inform", "discuss"],
        answer: 0,
        wrongHints: [null, "Na 'request' komt geen 'about' — je request iets direct.", "Na 'inform' komt eerst een persoon: 'inform you about'. Wie informeert hier wie?", "'Discuss' heeft geen 'about' nodig: je discusses iets direct. Welk formeel werkwoord past wél bij 'about'?"],
      },
      {
        q: "*'Yours sincerely'* gebruik je in een formele brief als je ___?",
        options: ["De naam van de ontvanger kent", "De naam van de ontvanger niet kent", "Een klacht wilt indienen", "Aan een goede vriend schrijft"],
        answer: 0,
        wrongHints: [null, "Dan: 'Yours faithfully'.", "Ook een klacht kun je met 'Yours faithfully' afsluiten. Waar hangt de keuze dan van af?", "Aan een vriend schrijf je geen formele brief. Waar hangt de keuze tussen de formele afsluitingen van af?"],
      },
      {
        q: "Welke aanhef is **formeel**?",
        options: ["Dear Sir or Madam,", "Dear Mrs Sarah,", "Dear Sir or Madam Smith,", "Dear Teacher Brown,"],
        answer: 0,
        wrongHints: [null, "Na 'Mrs' komt een achternaam, geen voornaam. Hoe schrijf je het dan wel?", "'Sir or Madam' gebruik je juist als je géén naam weet. Past daar dan een achternaam achter?", "In het Engels gebruik je een beroep niet als titel in de aanhef. Welke titels ken je wel?"],
      },
    ],
  },

  // STAP 2: Informele e-mail
  {
    title: "Informele e-mail / berichtje aan vriend",
    explanation:
      "Aan **vriend / familie / leerling-uitwisseling** schrijf je **informeel**.\n\n**Structuur informele e-mail**:\n\n**1. Aanhef**:\n• 'Hi Tom,' / 'Hey John,' / 'Dear Anna,'\n\n**2. Opening — friendly**:\n• 'How are you?'\n• 'Hope you're well.'\n• 'It's been a while!'\n• 'Thanks for your last email!'\n\n**3. Body**:\n• Vrije volgorde — meer flexibel dan formeel.\n• Persoonlijke verhalen.\n• Vragen aan ontvanger.\n\n**4. Closing**:\n• 'Write back soon!'\n• 'Looking forward to hearing from you.'\n• 'Hope to see you soon.'\n\n**5. Sign-off**:\n• 'Take care,'\n• 'Cheers,'\n• 'See you,' / 'Bye,'\n• 'Love,' *(naaste familie/partners)*.\n• 'Best,' *(redelijk vriendelijk)*.\n\n**Informele kenmerken**:\n\n**Mag wel**:\n• Samentrekkingen: I'm / don't / can't / won't / it's.\n• Slang in gepaste mate: cool / awesome / great.\n• Emoji 😊 *(als context past)*.\n• Persoonlijke verhalen.\n• Vragen stellen.\n• Uitroepen: 'That's amazing!'\n\n**Niet**:\n• 'Dear Sir or Madam' aan vriend — te formeel, raar.\n• 'Yours faithfully' aan vriend.\n• Te lange/formele zinnen.\n\n**Voorbeeld informele e-mail**:\n```\nHi Sarah,\n\nHow are you? Hope you're enjoying your holidays!\nI'm having a great time in the Netherlands.\nThe weather is nice and the food is amazing.\n\nLast weekend I went to Amsterdam with my parents.\nWe visited the Anne Frank House — really moving.\nWe also tried stroopwafels — you should try them!\n\nHow's your summer going? Any plans for next month?\nWrite back soon!\n\nCheers,\nAnna\n```\n\n**Vergelijking formeel vs informeel**:\n\n| Formeel | Informeel |\n|---|---|\n| Dear Mr Smith, | Hi Tom, |\n| I am writing to | I'm writing to |\n| I would like to | I'd like to |\n| Yours sincerely, | Cheers, |\n| Please reply | Write back soon |\n| I look forward to | Can't wait to |\n\n**Toets-tip — let op de prompt**:\n• 'Write a formal letter to ...' → formeel.\n• 'Email your friend ...' → informeel.\n• 'Write a complaint to the manager ...' → formeel.\n• 'Reply to Sarah's email ...' → informeel.\n\nVerkeerde toon = **punten-aftrek**.",
    checks: [
      {
        q: "Welke **aanhef** voor vriend?",
        options: ["Hi Tom,", "Cheers, Tom", "Hi Mr Tom,", "Love, Tom"],
        answer: 0,
        wrongHints: [null, "'Cheers' is informeel, maar waar in de mail staat het: bovenaan of onderaan?", "'Hi' is informeel, maar 'Mr' maakt het afstandelijk (en hoort vóór een achternaam). Hoe spreek je een vriend aan?", "'Love' is informeel, maar is het een begroeting of een groet waarmee je afsluit?"],
      },
      {
        q: "Welke **sign-off** voor vriend?",
        options: ["Cheers,", "Hi there,", "Dear Tom,", "Best regards,"],
        answer: 0,
        wrongHints: [null, "'Hi there' is informeel, maar staat het bovenaan of onderaan je mail?", "'Dear Tom' kan in een informele mail, maar waar? Is het een aanhef of een afsluiting?", "'Best regards' is netjes en een beetje zakelijk. Wat schrijf je onder een losse mail aan een vriend?"],
      },
      {
        q: "Mag je **samentrekkingen** (I'm, don't) in informele e-mail?",
        options: ["Ja, dat past bij de toon", "Nee, alleen in spreektaal", "Alleen in de afsluiting", "Alleen 'I'm', niet 'don't'"],
        answer: 0,
        wrongHints: [null, "Een informele mail lijkt op hoe je praat. Schrijf je aan een vriend 'I am not' of 'I'm not'?", "Kijk naar de voorbeeldmail aan Sarah: staan er alleen samentrekkingen in de afsluiting?", "Waarom zou 'I'm' wel mogen en 'don't' niet? Zijn het niet allebei samentrekkingen?"],
      },
      {
        q: "Prompt: *'Reply to your friend's email.'* Welke toon?",
        options: ["Informeel: Hi + Cheers", "Informeel: Dear + Yours sincerely", "Formeel: Hi + Best regards", "Half-formeel: Dear + Take care"],
        answer: 0,
        wrongHints: [null, "Klopt de toon wel, maar past 'Yours sincerely' bij een informele mail?", "Schrijf je formeel aan een vriend? En is 'Hi' een formele aanhef?", "Half-formeel schrijf je aan bijvoorbeeld een docent. Is dat de ontvanger hier?"],
      },
      {
        q: "Welke afsluiting past bij een **informeel berichtje aan een vriend**?",
        options: ["Take care", "Hi there", "Yours faithfully", "Dear Sam"],
        answer: 0,
        wrongHints: [null, "'Hi there' is informeel, maar is het een begroeting of een afsluiting?", "'Yours faithfully' gebruik je als je de naam van de ontvanger niet kent. Ken je je vriend?", "'Dear Sam' kan in een informele mail, maar staat het bovenaan of onderaan?"],
      },
      {
        q: "*'Hi mate, how's it going?'* — welk **register**?",
        options: ["Informeel, door 'mate' en 'how's'", "Informeel, door de vraag aan het eind", "Half-formeel, door 'Hi' zonder naam", "Formeel, door de volledige zin"],
        answer: 0,
        wrongHints: [null, "Ook in een formele brief kun je een vraag stellen. Welke woorden maken deze zin echt informeel?", "Half-formeel is beleefd, zoals tegen een docent. Spreek je je docent aan met 'mate'?", "Een volledige zin maakt iets nog niet formeel. Zie je een samentrekking of spreektaal staan?"],
      },
    ],
  },

  // STAP 3: Samenvatting
  {
    title: "Samenvatting + opsomming",
    explanation:
      "Op CSE Engels krijg je vaak een **tekst** en moet je iets **kort samenvatten** of een **opsomming** geven.\n\n**Soorten samenvattings-opdracht**:\n\n**1. Summarise the text (50-100 words)**\n• Korter dan origineel.\n• Hoofdgedachte + 2-3 hoofdpunten.\n• Eigen woorden gebruiken — niet kopiëren.\n• Geen voorbeelden of details.\n\n**2. List the main points (bullet points)**\n• 3-5 hoofdpunten.\n• Korte zinnen of fragmenten.\n• Geen volledige alinea's.\n\n**3. Answer in your own words**\n• Niet woord-voor-woord uit tekst.\n• Toon dat je begrepen hebt.\n\n**Stappen voor samenvatting**:\n\n**Stap 1 — Lees de tekst**:\nGehele tekst, focus op hoofdgedachte.\n\n**Stap 2 — Markeer hoofdpunten**:\n• Eerste/laatste alinea = vaak hoofdgedachte.\n• Topic-zin van elke alinea.\n• Wat **niet** weglaten: kern-claims.\n• Wat **wel** weglaten: voorbeelden, anekdotes, herhalingen.\n\n**Stap 3 — Schrijf in eigen woorden**:\n• Synoniem-rijk vocabulaire gebruiken.\n• Eigen zinsbouw.\n• Niet kopiëren — de toets test of je het BEGREPEN hebt.\n\n**Stap 4 — Check woord-aantal**:\nVraag zegt vaak: '*Summarise in 80-100 words*'. Tel ongeveer.\n\n**Voorbeeld**:\n*Originele tekst (200 woorden)*: 'Climate change is one of the biggest challenges of our time. Temperatures are rising, ice is melting at the poles, and sea levels are rising. Many species are at risk. According to the IPCC, the planet has warmed by 1.1°C since 1880. Human activities, especially burning fossil fuels, are the main cause. We need to switch to renewable energy ...' *(verder details)*.\n\n*Samenvatting (50 words)*:\n'Climate change is a major global issue. The Earth has warmed 1.1°C since 1880, mainly due to fossil fuels. This causes melting ice, rising seas, and threatens species. Renewable energy is needed to slow it down.'\n\n**Tips**:\n\n**Synonyms** om te gebruiken bij parafraseren:\n• 'big' → significant / major / large.\n• 'important' → crucial / essential / vital.\n• 'show' → demonstrate / indicate / reveal.\n• 'says' → states / claims / argues / mentions.\n• 'because' → due to / as a result of / owing to.\n• 'many' → numerous / various / a wide range of.\n\n**Phrase-omzetting**:\n• Active → passive: 'People burn fuels' → 'Fuels are burned by people'.\n• Verb → noun: 'rising' → 'a rise'.\n• Word changes: 'big problem' → 'major issue'.\n\n**Toets-fout — vermijd**:\n• **Te lange samenvatting** *(dichtbij origineel)*.\n• **Letterlijk kopiëren** *(plagiat-stijl)*.\n• **Eigen mening toevoegen** *(samenvatting = neutraal)*.\n• **Voorbeelden meenemen** *(detail, niet hoofdpunt)*.",
    checks: [
      {
        q: "Welke is een **goede samenvatting**?",
        options: ["Hoofdpunten in eigen woorden", "Hoofdpunten in de zinnen van de tekst", "Alle details in eigen woorden", "Hoofdpunten plus je eigen oordeel"],
        answer: 0,
        wrongHints: [null, "Als je de zinnen van de tekst overneemt, kopieer je. Wat test de opdracht dan niet meer?", "Details en voorbeelden laat je bij een samenvatting weg. Hoeveel neem je dan mee?", "Een samenvatting geeft weer wat de schrijver zegt. Hoort jouw oordeel daarbij?"],
      },
      {
        q: "Welk **synoniem** voor 'big'?",
        options: ["significant", "slight", "brief", "minor"],
        answer: 0,
        wrongHints: [null, "'Slight' betekent 'gering'. Is dat groot of juist klein?", "'Brief' betekent 'kort'. Gaat 'big' over tijd?", "'Minor' betekent 'klein, onbelangrijk'. Is dat hetzelfde als 'big'?"],
      },
      {
        q: "Wat **WEL meenemen** in samenvatting?",
        options: ["Hoofdgedachte + 2-3 kernpunten", "Hoofdgedachte + 2-3 voorbeelden", "Kernpunten + 2-3 citaten", "Hoofdgedachte + jouw reactie"],
        answer: 0,
        wrongHints: [null, "Voorbeelden lichten een punt toe. Horen ze in een samenvatting?", "Citaten zijn letterlijke zinnen uit de tekst. Schrijf je een samenvatting in die woorden?", "Met je reactie voeg je iets toe aan de tekst. Doet een samenvatting dat?"],
      },
      {
        q: "Hoe vermijd je **plagiaat**?",
        options: ["Eigen woorden + eigen zinsbouw", "Synoniemen + dezelfde zinsbouw", "Zelfde zinnen + andere volgorde", "Zelfde woorden + kortere zinnen"],
        answer: 0,
        wrongHints: [null, "Als de zinsbouw hetzelfde blijft, is de zin nog steeds van een ander. Is dat genoeg?", "De zinnen zelf zijn nog steeds van een ander. Wat verandert er echt?", "Als je de woorden van de schrijver houdt, wiens tekst is het dan?"],
      },
      {
        q: "Een **samenvatting** is meestal hoeveel **korter** dan het origineel?",
        options: ["1/3 tot 1/4 van origineel", "3/4 tot 9/10 van origineel", "1/10 tot 1/20 van origineel", "2/3 tot 3/4 van origineel"],
        answer: 0,
        wrongHints: [null, "Dan haal je bijna niets weg. Wat laat je in een samenvatting juist weg?", "Zo kort kun je de kernpunten vaak niet meer noemen. Hoeveel kernpunten wil je kwijt?", "Dan is je samenvatting nog bijna zo lang als de tekst. Wat laat je weg?"],
      },
      {
        q: "In een Engelse opsomming gebruik je **bullet points** met...?",
        options: ["Een • of - vóór elk kort item", "Een • vóór elke lange alinea", "Een • vóór elk item en 'and' bij het laatste", "Een cijfer vóór elk item (1, 2, 3)"],
        answer: 0,
        wrongHints: [null, "Bullet points zijn juist kort. Hoeveel tekst hoort er bij één punt?", "'And' voor het laatste item hoort bij een opsomming in een lopende zin. Heb je dat nodig als de punten onder elkaar staan?", "Cijfers gebruik je bij een genummerde lijst. Waarmee begint een punt in een lijst met bullets?"],
      },
    ],
  },

  // STAP 4: Essay / opinie
  {
    title: "Short essay / opinion piece",
    explanation:
      "Soms moet je een **opinie-stuk** of **mini-essay** schrijven (~150-200 woorden).\n\n**Structuur essay** *(uit het hoofd!)*:\n\n**1. Introduction**:\n• Onderwerp introduceren.\n• Je standpunt aangeven *(thesis statement)*.\n• 1-2 zinnen.\n\nVoorbeeld: *'Should schools have a longer summer break? In my opinion, yes — students need rest after a hard school year.'*\n\n**2. Body paragraph 1 — argument**:\n• Eerste reden / argument.\n• Met bewijs / voorbeeld.\n• Signaalwoord: 'Firstly,' / 'To begin with,'.\n\nVoorbeeld: *'Firstly, long breaks give students time to recover. Studies show that students return more focused after summer holidays.'*\n\n**3. Body paragraph 2 — tweede argument**:\n• Tweede reden.\n• Signaalwoord: 'Secondly,' / 'In addition,' / 'Moreover,'.\n\n**4. Body paragraph 3 — tegenwerping + weerlegging (optioneel)**:\n• Wat anderen zeggen.\n• Waarom jij anders denkt.\n• Signaalwoord: 'However, some argue that ...'\n\n**5. Conclusion**:\n• Samenvatting van je punt.\n• Krachtig sluiten.\n• Signaalwoord: 'In conclusion,' / 'To sum up,' / 'All things considered,'.\n\nVoorbeeld: *'In conclusion, longer summer breaks benefit students by giving them needed rest and helping them perform better in the new school year.'*\n\n**Mening-uitdrukken — beleefd**:\n\n**Mening geven**:\n• 'I think (that) ...'\n• 'In my opinion, ...'\n• 'I believe (that) ...'\n• 'From my point of view, ...'\n• 'It seems to me that ...'\n\n**Eens / oneens met andermans mening**:\n• 'I agree with X because ...'\n• 'I disagree with X on this point.'\n• 'X has a point, but ...'\n• 'While some say X, I think Y.'\n\n**Argument-signaalwoorden**:\n• **Toevoegen**: also, furthermore, moreover, in addition.\n• **Voorbeeld**: for example, for instance, such as.\n• **Gevolg**: therefore, as a result, consequently.\n• **Tegenstelling**: however, on the other hand, but.\n• **Conclusie**: in conclusion, to sum up, overall.\n\n**Voorbeeld kort essay (100 words)**:\n```\nShould schools start later in the morning?\n\nIn my opinion, schools should start at 9 AM instead of 8 AM.\nFirstly, teenagers need more sleep to function well. Studies\nshow that 8-9 hours of sleep is essential for brain development.\nSecondly, more rest improves grades and concentration.\nHowever, some argue that starting later means ending later.\nThis is a fair point, but the benefits outweigh the costs.\nIn conclusion, a later start time would help students learn\nbetter and feel happier.\n```\n\n**Toets-tips**:\n• Houd je aan **woord-aantal** *(meestal 150-200 woorden voor essay)*.\n• **5 alinea's** = veiligste structuur.\n• **Argumenten met bewijs** > losse meningen.\n• **Niet 'In my country ...'** zonder context.\n• **Beleefd** blijven, ook bij sterke mening.",
    checks: [
      {
        q: "Wat is in een essay de **conclusion**?",
        options: ["Slot-alinea: samenvatten + afronden", "Slot-alinea: nieuw argument + afronden", "Eerste alinea: stelling + aanleiding", "Laatste middenalinea: sterkste argument"],
        answer: 0,
        wrongHints: [null, "Een nieuw argument heeft uitleg nodig. Is daar in het slot nog ruimte voor?", "Dat is de introduction. Waar in het essay staat de conclusion?", "Een middenalinea werkt een argument uit. Rondt die het essay af?"],
      },
      {
        q: "Welk woord = **mijn mening geven**?",
        options: ["As far as I'm concerned", "As far as I know", "Generally speaking", "On the other hand"],
        answer: 0,
        wrongHints: [null, "'As far as I know' betekent 'voor zover ik weet'. Geef je daarmee een mening of een feit waar je niet zeker van bent?", "'Generally speaking' betekent 'over het algemeen'. Gaat dat over wat jij vindt of over wat meestal geldt?", "'On the other hand' zet een andere kant naast wat je net zei. Kondig je daarmee je eigen mening aan?"],
      },
      {
        q: "Welk signaalwoord = **conclusie**?",
        options: ["To sum up", "Consequently", "Moreover", "For instance"],
        answer: 0,
        wrongHints: [null, "'Consequently' betekent 'daardoor' en geeft een gevolg aan. Rond je daarmee je hele tekst af?", "'Moreover' betekent 'bovendien' en voegt een punt toe. Hoort dat aan het eind?", "'For instance' leidt een voorbeeld in. Rond je daarmee je tekst af?"],
      },
      {
        q: "Wat doe je met een **tegenwerping** in essay?",
        options: ["Noemen en dan weerleggen", "Noemen en dan samenvatten", "Noemen in je slot-alinea", "Noemen als eerste argument"],
        answer: 0,
        wrongHints: [null, "Als je de tegenwerping alleen samenvat, blijft hij overeind staan. Wat maakt jouw standpunt sterker?", "In het slot vat je samen; daar is geen ruimte meer om iets te bespreken. Waar komt de tegenwerping dan?", "Een tegenwerping is een argument van de andere kant. Is dat jouw eerste argument?"],
      },
      {
        q: "Welke structuur past bij **5-paragraaf essay**?",
        options: ["Intro + 3 argumenten + conclusie", "Intro + 4 korte argument-alinea's", "Intro + stelling + 2 argumenten + slot", "Hook + intro + 2 argumenten + slot"],
        answer: 0,
        wrongHints: [null, "Tel de onderdelen: vijf alinea's. Maar hoe sluit je het essay dan af?", "De stelling staat aan het eind van de intro, niet in een eigen alinea. Hoeveel argumenten passen er dan?", "De hook is de openingszin van de intro, geen eigen alinea. Hoeveel argumenten passen er dan?"],
      },
      {
        q: "In je **conclusie** doe je wat?",
        options: ["Hoofdpunten samenvatten + slot-zin", "Nieuw argument noemen + slot-zin", "Een nieuw voorbeeld + slot-zin", "Tegenargument weerleggen + slot-zin"],
        answer: 0,
        wrongHints: [null, "Een nieuw argument heeft uitleg nodig. Is daar aan het eind nog ruimte voor?", "Een voorbeeld hoort bij een argument in het middendeel. Wat doe je aan het eind?", "Een tegenwerping weerleg je in een middenalinea. Wat moet de lezer aan het eind onthouden?"],
      },
    ],
  },

  // STAP 5: Veelgemaakte fouten
  {
    title: "Veelgemaakte fouten — vermijden",
    explanation:
      "**Top-10 schrijf-fouten** die punten kosten op CSE Engels:\n\n**1. False friends** *(woorden die lijken maar anders zijn)*:\n• **eventual** ≠ 'eventueel' → betekent 'uiteindelijk'.\n• **actually** ≠ 'actueel' → betekent 'eigenlijk'.\n• **sympathetic** ≠ 'sympathiek' → betekent 'meelevend'.\n• **brave** = dapper *(niet braaf)*.\n• **angel** = engel *(niet hoek — dat is angle)*.\n• **library** = bibliotheek *(niet boekenwinkel)*.\n• **smoking** = roken *(een smoking-pak heet in het Engels 'tuxedo' of 'dinner jacket')*.\n\n**2. Verkeerde tijd**:\n• 'Gisteren ben ik gegaan' → 'Yesterday I **went**' *(niet I have gone)*.\n• 'I have been there since 2020' (Present Perfect — duurt nog) ≠ 'I was there in 2020' (Past Simple — klaar).\n\n**3. Word order**:\nNederlands: 'Ik heb het boek gelezen.'\nEngels: 'I have **read** the book.' *(read is voltooid deelwoord — past)*.\n\n• Niet 'I have the book read' (Nederlands word order).\n\n**4. Articles** (a / an / the):\n• **a** voor medeklinker: a car, a book.\n• **an** voor klinkergeluid: an apple, an hour *(stomme h)*.\n• **the** voor specifieke dingen: the book I bought.\n• **Geen artikel** voor algemene meervouden: 'I like dogs' (niet 'I like the dogs').\n\n**5. He / She / It**:\n• Personen krijgen he/she.\n• Dingen + dieren *(meestal)* krijgen 'it'.\n• Schepen + landen worden soms vrouwelijk *('she') in poëzie* — niet doen op CSE.\n\n**6. Verkeerd voorzetsel**:\n• 'in 2024' *(jaar)* niet 'on 2024'.\n• 'on Monday' *(dag)* niet 'in Monday'.\n• 'at 5 o'clock' *(tijd)* niet 'on 5 o'clock'.\n• 'depend **on**' niet 'depend of'.\n• 'good **at**' iets niet 'good in'.\n• 'married **to**' niet 'married with'.\n\n**7. Apostrof**:\n• **It's** = it is *(samentrekking)*.\n• **Its** = van het *(bezittelijk)*.\n• 'The cat licks its paw' *(its = van de kat)*.\n• 'It's cold today' *(it is)*.\n\n**8. There / Their / They're**:\n• **There** = daar / er.\n• **Their** = hun.\n• **They're** = they are.\n\n**9. Your / You're**:\n• **Your** = jouw.\n• **You're** = you are.\n\n**10. Dutch-isms** *(woorden niet vertalen)*:\n• 'Funny' kan ook 'raar' betekenen. Engels: 'strange'.\n• 'Sympathetic' betekent 'meelevend', NIET 'sympathiek' (= likeable).\n• 'I become' bestaat als 'become' *(worden)* maar bedoel je 'krijgen' = 'get'.\n• 'My English is not so bad' lijkt 'mijn Engels is niet zo slecht', kan klinken alsof het slecht ís. Gewoon: 'My English is okay'.\n\n**Toets-strategie — vermijd**:\n• Te complexe zinnen waar je niet zeker bent.\n• Liever **simpel + correct** dan complex + fout.\n\n**Tip — controleer aan eind**:\n• Kloppen de tijden overal?\n• Werkwoord-onderwerp-overeenkomst? *(she go**es** niet she go)*.\n• Spelling — vooral hun/jouw/their/your.\n• Punctuation *(punt + hoofdletter aan begin van zin)*.",
    checks: [
      {
        q: "Wat is **'eventual'** in Engels?",
        options: ["Uiteindelijk", "Eventueel (Nederlandse betekenis)", "Gebeurtenis", "Soms"],
        answer: 0,
        wrongHints: [null, "Pas op: 'eventual' is een valse vriend. 'Eventueel' is in het Engels 'possible'.", "'Gebeurtenis' is in het Engels 'event'. 'Eventual' is een bijvoeglijk naamwoord — wat betekent het?", "Soms is in het Engels 'sometimes'. Lijkt 'eventual' daarop?"],
      },
      {
        q: "**It's** vs **Its** — verschil?",
        options: ["It's = it is, Its = van het", "It's = van het, Its = it is", "Beide = it is, alleen spelling", "Beide = van het, alleen spelling"],
        answer: 0,
        wrongHints: [null, "Waar staat de apostrof in 'it's' voor: een weggelaten letter of bezit?", "Kun je 'its' altijd vervangen door 'it is'? Probeer: 'The dog wags it is tail.'", "Kun je 'it's raining' lezen als 'van het raining'?"],
      },
      {
        q: "Welk voorzetsel? *'I am good ___ swimming.'*",
        options: ["at", "in", "on", "with"],
        answer: 0,
        wrongHints: [null, "'Good in' is de letterlijke NL-vertaling ('goed in') — Engels gebruikt een ander voorzetsel.", "'Good on' bestaat niet in deze betekenis — denk aan 'She's brilliant ___ maths.'", "'Good with' gebruik je bij mensen of dingen ('good with kids') — niet bij een vaardigheid."],
      },
      {
        q: "*'Yesterday I ___ to the cinema.'* Welke tijd?",
        options: ["went (past simple)", "have gone (present perfect)", "go (present)", "going (-ing-vorm)"],
        answer: 0,
        wrongHints: [null, "De present perfect gebruik je zonder vast tijdstip. Staat er hier een tijdstip?", "'Go' is present. Wanneer ging je naar de bioscoop?", "'I going' mist een hulpwerkwoord. En gaat het over nu of over gisteren?"],
      },
    ],
  },

  // STAP 6: Eind-toets
  {
    title: "Eind-opdracht — schrijfvaardigheid mix",
    explanation:
      "Mix-toets in CSE-stijl. Door elkaar: formeel, informeel, structuur, fouten.\n\nVeel succes!",
    checks: [
      {
        q: "Aanhef voor **formele brief** (naam onbekend)?",
        options: ["Dear Sir or Madam,", "Dear Sir or Mrs,", "Dear Mister or Madam,", "Honoured Sir or Madam,"],
        answer: 0,
        wrongHints: [null, "'Mrs' is een titel die vóór een achternaam hoort. Welk woord hoort naast 'Sir'?", "'Mister' schrijf je niet voluit en niet zonder naam. Welk woord hoort bij 'Madam'?", "'Honoured' is geen vaste aanhef. Met welk woord begint elke formele aanhef?"],
      },
      {
        q: "Sign-off bij **'Dear Mrs Brown'**?",
        options: ["Yours sincerely,", "Yours faithfully,", "Bye,", "Cheers,"],
        answer: 0,
        wrongHints: [null, "'Yours faithfully' hoort bij een brief zonder naam. Ken je hier de naam van de ontvanger?", "'Bye' zeg je in een gesprek; het is geen vaste afsluiting van een brief. Welke formule hoort bij een formele brief?", "'Cheers' schrijf je aan een vriend. Past dat na 'Dear Mrs Brown'?"],
      },
      {
        q: "Welke is **samentrekking**?",
        options: ["I'm (late)", "I am (late)", "its (paw)", "Tom's (book)"],
        answer: 0,
        wrongHints: [null, "'I am' is de volledige vorm. Wat gebeurt er met de letters bij een samentrekking?", "'Its' betekent 'van het' (bezit). Zijn hier twee woorden samengevoegd?", "Hier betekent de 's 'van Tom' (bezit). Is er een letter weggelaten?"],
      },
      {
        q: "Welk woord = **conclusie-signaal**?",
        options: ["All in all", "After all", "Above all", "First of all"],
        answer: 0,
        wrongHints: [null, "'After all' betekent 'tenslotte, want' en geeft een reden. Kondig je daarmee je slot aan?", "'Above all' betekent 'vooral'. Gebruik je dat om af te ronden of om iets te benadrukken?", "'First of all' opent je eerste argument. Staat dat aan het begin of aan het eind?"],
      },
      {
        q: "**Their** vs **There** — welke is van bezit?",
        options: ["Their", "There", "Beide", "Geen"],
        answer: 0,
        wrongHints: [null, "'There' betekent 'daar', zoals in 'over there'. Zegt dat van wie iets is?", "Ze klinken hetzelfde, maar elk heeft een eigen betekenis. Welke van de twee zegt van wie iets is?", "Eén van de twee is wél bezittelijk."],
      },
      {
        q: "Een **samenvatting** is ... ?",
        options: ["Korte versie in eigen woorden", "Korte versie in de woorden van de schrijver", "Korte versie met jouw oordeel", "Even lange versie in eigen woorden"],
        answer: 0,
        wrongHints: [null, "Letterlijk overnemen is kopiëren, ook als het kort is. Wiens woorden gebruik je dan?", "Een oordeel hoort in een recensie. Voegt een samenvatting iets toe aan de tekst?", "Wat doet een samenvatting met de lengte van de tekst?"],
      },
      {
        q: "Welke is **goed gespeld**: 'definately' of 'definitely'?",
        options: ["definitely", "definately", "definitly", "Beide"],
        answer: 0,
        wrongHints: [null, "Dit is een veelgemaakte fout. Denk aan het stamwoord 'finite': welke klinker staat er na de n?", "Hier mist een letter. Denk aan het stamwoord 'finite': wat staat er na de t?", "In het Engels is er maar één goede spelling. Welke past bij het stamwoord 'finite'?"],
      },
      {
        q: "*'**Open question**: write a polite opening to a formal email (name unknown).'* Typ de aanhef.",
        kind: "open",
        acceptedAnswers: ["dear sir madam", "dear sir/madam", "dear sir or madam", "to whom it may concern"],
        explanation: "Formal opening: 'Dear Sir or Madam' (when name unknown) or 'To whom it may concern'.",
      },
      {
        q: "*'**Open question**: how do you end a formal email when you don't know the name?'*",
        kind: "open",
        acceptedAnswers: ["yours faithfully"],
        explanation: "'Yours faithfully' bij onbekende naam, 'Yours sincerely' bij bekende.",
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const cseSchrijfvaardigheidEngels = {
  id: "cse-schrijfvaardigheid-engels",
  title: "CSE Engels — schrijfvaardigheid (klas 3-4)",
  emoji: "✉️",
  level: "klas3-4",
  subject: "engels",
  referentieNiveau: "3F",
  sloThema: "Engels — schrijfvaardigheid CSE",
  prerequisites: [
    { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "3F" },
  ],
  intro:
    "CSE Engels schrijfvaardigheid voor klas 3-4 — formele brief (Dear Sir/Mr/Mrs, Yours sincerely/faithfully), informele e-mail (Hi/Cheers), samenvatting (eigen woorden, 50-100 wrd), essay (5 alinea-structuur), top-10 false friends + samentrekkingen + voorzetsels. ~15 min.",
  triggerKeywords: [
    "engels schrijfvaardigheid", "CSE engels schrijven",
    "formal letter", "informal email",
    "Yours sincerely", "Yours faithfully",
    "summary", "essay",
    "false friend", "samentrekkingen engels",
  ],
  chapters,
  steps,
};

export default cseSchrijfvaardigheidEngels;
