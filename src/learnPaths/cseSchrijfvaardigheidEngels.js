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
      "Bij CSE Engels moet je vaak een **formele e-mail of brief** schrijven aan een bedrijf, school of onbekende persoon.\n\n**Structuur** *(uit het hoofd!)*:\n\n**1. Salutation (aanhef)**:\n• **Naam bekend**: 'Dear Mr Smith,' / 'Dear Mrs Smith,'\n• **Naam onbekend**: 'Dear Sir or Madam,'\n• Met **komma** na de naam *(niet uitroepteken)*.\n\n**2. Opening — wat je wilt**:\n• 'I am writing to **complain about** the broken product I bought ...'\n• 'I am writing to **apply for** the job advertised in ...'\n• 'I am writing **with regard to** your advertisement ...'\n• 'I would like to **enquire about** ...'\n\n**3. Body — 2-3 alinea's**:\n• Hoofdpunt + details + reden.\n• Gebruik **signaalwoorden**: firstly / secondly / moreover / however / therefore.\n• Concrete + beleefd.\n\n**4. Closing — wat je verwacht**:\n• 'I look **forward to hearing** from you.'\n• 'I would appreciate a **prompt reply**.'\n• 'Please **let me know** if you need further information.'\n\n**5. Sign-off**:\n• **Naam bekend** in aanhef → '**Yours sincerely**,' + naam.\n• **Naam onbekend** in aanhef *(Dear Sir or Madam)* → '**Yours faithfully**,' + naam.\n\n**Formele toon — wel + niet doen**:\n\n**Wel**:\n• Volledige zinnen.\n• Beleefde woorden: 'I would', 'could you', 'please'.\n• Geen samentrekkingen *(don't → do not, I'm → I am)*.\n• Geen smileys, emojis, of slang.\n• Spelling correct.\n\n**Niet**:\n• 'Hey!' / 'Hi!' als aanhef.\n• 'Sorry I'm being a pain, but ...'.\n• 'Cheers, Tom' als sign-off.\n• 'Gonna' / 'wanna' / 'kinda'.\n\n**Voorbeeld korte formele e-mail**:\n```\nDear Mr Brown,\n\nI am writing to complain about the bicycle I ordered\nfrom your website on 5 May. The bike arrived with a\nbroken pedal, which makes it impossible to use.\n\nI would like a full refund or a replacement bicycle.\nPlease let me know how to proceed.\n\nI look forward to hearing from you soon.\n\nYours sincerely,\nAnna van Dijk\n```\n\n**Cito-vraag**:\n*'Welk afsluit-formule bij 'Dear Mr Smith'?'* → Yours sincerely.\n*'Welk afsluit-formule bij 'Dear Sir or Madam'?'* → Yours faithfully.\n*'Hoe schrijf je 'I am' formeel?'* → I am (niet I'm).",
    svg: structuurSvg(),
    checks: [
      {
        q: "Welke **aanhef** is formeel? *(naam onbekend)*",
        options: ["Dear Sir or Madam,", "Hey!", "Hi Tom,", "Yo!"],
        answer: 0,
        wrongHints: [null, "Informeel.", "Informeel + naam bekend.", "Slang."],
      },
      {
        q: "Welke **sign-off** bij 'Dear Mr Smith'?",
        options: ["Yours sincerely,", "Yours faithfully,", "Cheers,", "Bye!"],
        answer: 0,
        wrongHints: [null, "Bij naam onbekend.", "Informeel.", "Informeel."],
      },
      {
        q: "**Formeel** woord voor 'I'm':",
        options: ["I am", "I'm (geen verschil)", "Im", "Me"],
        answer: 0,
        wrongHints: [null, "Wel verschil — formeel niet.", "Spelling fout.", "Verkeerde vorm."],
      },
      {
        q: "*'I would like to **___** about your job advert.'* Welk woord?",
        options: ["enquire", "ask", "look", "say"],
        answer: 0,
        wrongHints: [null, "Te informeel.", "Niet juist.", "Niet juist."],
      },
    ],
  },

  // STAP 2: Informele e-mail
  {
    title: "Informele e-mail / berichtje aan vriend",
    explanation:
      "Aan **vriend / familie / leerling-uitwisseling** schrijf je **informeel**.\n\n**Structuur informele e-mail**:\n\n**1. Aanhef**:\n• 'Hi Tom,' / 'Hey John,' / 'Dear Anna,'\n\n**2. Opening — friendly**:\n• 'How are you?'\n• 'Hope you're well.'\n• 'It's been a while!'\n• 'Thanks for your last email!'\n\n**3. Body**:\n• Vrije volgorde — meer flexibel dan formeel.\n• Persoonlijke verhalen.\n• Vragen aan ontvanger.\n\n**4. Closing**:\n• 'Write back soon!'\n• 'Looking forward to hearing from you.'\n• 'Hope to see you soon.'\n\n**5. Sign-off**:\n• 'Take care,'\n• 'Cheers,'\n• 'See you,' / 'Bye,'\n• 'Love,' *(naaste familie/partners)*.\n• 'Best,' *(redelijk vriendelijk)*.\n\n**Informele kenmerken**:\n\n**Mag wel**:\n• Samentrekkingen: I'm / don't / can't / won't / it's.\n• Slang in gepaste mate: cool / awesome / great.\n• Emoji 😊 *(als context past)*.\n• Persoonlijke verhalen.\n• Vragen stellen.\n• Uitroepen: 'That's amazing!'\n\n**Niet**:\n• 'Dear Sir or Madam' aan vriend — te formeel, raar.\n• 'Yours faithfully' aan vriend.\n• Te lange/formele zinnen.\n\n**Voorbeeld informele e-mail**:\n```\nHi Sarah,\n\nHow are you? Hope you're enjoying your holidays!\nI'm having a great time in the Netherlands.\nThe weather is nice and the food is amazing.\n\nLast weekend I went to Amsterdam with my parents.\nWe visited the Anne Frank House — really moving.\nWe also tried stroopwafels — you should try them!\n\nHow's your summer going? Any plans for next month?\nWrite back soon!\n\nCheers,\nAnna\n```\n\n**Vergelijking formeel vs informeel**:\n\n| Formeel | Informeel |\n|---|---|\n| Dear Mr Smith, | Hi Tom, |\n| I am writing to | I'm writing to |\n| I would like to | I'd like to |\n| Yours sincerely, | Cheers, |\n| Please reply | Write back soon |\n| I look forward to | Can't wait to |\n\n**Cito-tip — let op de prompt**:\n• 'Write a formal letter to ...' → formeel.\n• 'Email your friend ...' → informeel.\n• 'Write a complaint to the manager ...' → formeel.\n• 'Reply to Sarah's email ...' → informeel.\n\nVerkeerde toon = **punten-aftrek**.",
    checks: [
      {
        q: "Welke **aanhef** voor vriend?",
        options: ["Hi Tom,", "Dear Sir or Madam,", "Yours sincerely", "Best regards,"],
        answer: 0,
        wrongHints: [null, "Formeel.", "Sign-off, geen aanhef.", "Formeel."],
      },
      {
        q: "Welke **sign-off** voor vriend?",
        options: ["Cheers,", "Yours sincerely,", "Yours faithfully,", "Best regards,"],
        answer: 0,
        wrongHints: [null, "Formeel.", "Formeel.", "Halfformeel."],
      },
      {
        q: "Mag je **samentrekkingen** (I'm, don't) in informele e-mail?",
        options: ["Ja", "Nee", "Soms", "Alleen in formele"],
        answer: 0,
        wrongHints: [null, "Wel.", "Vrijwel altijd.", "Tegenovergesteld."],
      },
      {
        q: "Prompt: *'Reply to your friend's email.'* Welke toon?",
        options: ["Informeel", "Formeel", "Officieel", "Neutraal"],
        answer: 0,
        wrongHints: [null, "Niet voor vriend.", "Niet voor vriend.", "Vriend = wat warmer."],
      },
    ],
  },

  // STAP 3: Samenvatting
  {
    title: "Samenvatting + opsomming",
    explanation:
      "Op CSE Engels krijg je vaak een **tekst** en moet je iets **kort samenvatten** of een **opsomming** geven.\n\n**Soorten samenvattings-opdracht**:\n\n**1. Summarise the text (50-100 words)**\n• Korter dan origineel.\n• Hoofdgedachte + 2-3 hoofdpunten.\n• Eigen woorden gebruiken — niet kopiëren.\n• Geen voorbeelden of details.\n\n**2. List the main points (bullet points)**\n• 3-5 hoofdpunten.\n• Korte zinnen of fragmenten.\n• Geen volledige alinea's.\n\n**3. Answer in your own words**\n• Niet woord-voor-woord uit tekst.\n• Toon dat je begrepen hebt.\n\n**Stappen voor samenvatting**:\n\n**Stap 1 — Lees de tekst**:\nGehele tekst, focus op hoofdgedachte.\n\n**Stap 2 — Markeer hoofdpunten**:\n• Eerste/laatste alinea = vaak hoofdgedachte.\n• Topic-zin van elke alinea.\n• Wat **niet** weglaten: kern-claims.\n• Wat **wel** weglaten: voorbeelden, anekdotes, herhalingen.\n\n**Stap 3 — Schrijf in eigen woorden**:\n• Synoniem-rijk vocabulaire gebruiken.\n• Eigen zinsbouw.\n• Niet kopiëren — Cito test of je BEGREPEN hebt.\n\n**Stap 4 — Check woord-aantal**:\nVraag zegt vaak: '*Summarise in 80-100 words*'. Tel ongeveer.\n\n**Voorbeeld**:\n*Originele tekst (200 woorden)*: 'Climate change is one of the biggest challenges of our time. Temperatures are rising, ice is melting at the poles, and sea levels are rising. Many species are at risk. According to the IPCC, the planet has warmed by 1.1°C since 1880. Human activities, especially burning fossil fuels, are the main cause. We need to switch to renewable energy ...' *(verder details)*.\n\n*Samenvatting (50 words)*:\n'Climate change is a major global issue. The Earth has warmed 1.1°C since 1880, mainly due to fossil fuels. This causes melting ice, rising seas, and threatens species. Renewable energy is needed to slow it down.'\n\n**Tips**:\n\n**Synonyms** om te gebruiken bij parafraseren:\n• 'big' → significant / major / large.\n• 'important' → crucial / essential / vital.\n• 'show' → demonstrate / indicate / reveal.\n• 'says' → states / claims / argues / mentions.\n• 'because' → due to / as a result of / owing to.\n• 'many' → numerous / various / a wide range of.\n\n**Phrase-omzetting**:\n• Active → passive: 'People burn fuels' → 'Fuels are burned by people'.\n• Verb → noun: 'rising' → 'a rise'.\n• Word changes: 'big problem' → 'major issue'.\n\n**Cito-fout — vermijd**:\n• **Te lange samenvatting** *(dichtbij origineel)*.\n• **Letterlijk kopiëren** *(plagiat-stijl)*.\n• **Eigen mening toevoegen** *(samenvatting = neutraal)*.\n• **Voorbeelden meenemen** *(detail, niet hoofdpunt)*.",
    checks: [
      {
        q: "Welke is een **goede samenvatting**?",
        options: ["Hoofdpunten in eigen woorden", "Letterlijk kopiëren", "Alle voorbeelden meenemen", "Eigen mening toevoegen"],
        answer: 0,
        wrongHints: [null, "Plagiat-stijl.", "Te lang.", "Samenvatting = neutraal."],
      },
      {
        q: "Welk **synoniem** voor 'big'?",
        options: ["significant", "good", "fast", "old"],
        answer: 0,
        wrongHints: [null, "Andere betekenis.", "Andere betekenis.", "Andere betekenis."],
      },
      {
        q: "Wat **WEL meenemen** in samenvatting?",
        options: ["Hoofdgedachte + 2-3 kernpunten", "Alle details", "Voorbeelden", "Anekdotes"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Geen kernpunt.", "Geen kernpunt."],
      },
      {
        q: "**Plagiat** vermijden hoe?",
        options: ["Eigen woorden + zinsbouw", "Letterlijk overnemen", "Wijzig 1 woord", "Latere alinea's pakken"],
        answer: 0,
        wrongHints: [null, "Plagiat.", "Nog steeds plagiat.", "Niet de regel."],
      },
    ],
  },

  // STAP 4: Essay / opinie
  {
    title: "Short essay / opinion piece",
    explanation:
      "Soms moet je een **opinie-stuk** of **mini-essay** schrijven (~150-200 woorden).\n\n**Structuur essay** *(uit het hoofd!)*:\n\n**1. Introduction**:\n• Onderwerp introduceren.\n• Je standpunt aangeven *(thesis statement)*.\n• 1-2 zinnen.\n\nVoorbeeld: *'Should schools have a longer summer break? In my opinion, yes — students need rest after a hard school year.'*\n\n**2. Body paragraph 1 — argument**:\n• Eerste reden / argument.\n• Met bewijs / voorbeeld.\n• Signaalwoord: 'Firstly,' / 'To begin with,'.\n\nVoorbeeld: *'Firstly, long breaks give students time to recover. Studies show that students return more focused after summer holidays.'*\n\n**3. Body paragraph 2 — tweede argument**:\n• Tweede reden.\n• Signaalwoord: 'Secondly,' / 'In addition,' / 'Moreover,'.\n\n**4. Body paragraph 3 — tegenwerping + weerlegging (optioneel)**:\n• Wat anderen zeggen.\n• Waarom jij anders denkt.\n• Signaalwoord: 'However, some argue that ...'\n\n**5. Conclusion**:\n• Samenvatting van je punt.\n• Krachtig sluiten.\n• Signaalwoord: 'In conclusion,' / 'To sum up,' / 'All things considered,'.\n\nVoorbeeld: *'In conclusion, longer summer breaks benefit students by giving them needed rest and helping them perform better in the new school year.'*\n\n**Mening-uitdrukken — beleefd**:\n\n**Mening geven**:\n• 'I think (that) ...'\n• 'In my opinion, ...'\n• 'I believe (that) ...'\n• 'From my point of view, ...'\n• 'It seems to me that ...'\n\n**Eens / oneens met andermans mening**:\n• 'I agree with X because ...'\n• 'I disagree with X on this point.'\n• 'X has a point, but ...'\n• 'While some say X, I think Y.'\n\n**Argument-signaalwoorden**:\n• **Toevoegen**: also, furthermore, moreover, in addition.\n• **Voorbeeld**: for example, for instance, such as.\n• **Gevolg**: therefore, as a result, consequently.\n• **Tegenstelling**: however, on the other hand, but.\n• **Conclusie**: in conclusion, to sum up, overall.\n\n**Voorbeeld kort essay (100 words)**:\n```\nShould schools start later in the morning?\n\nIn my opinion, schools should start at 9 AM instead of 8 AM.\nFirstly, teenagers need more sleep to function well. Studies\nshow that 8-9 hours of sleep is essential for brain development.\nSecondly, more rest improves grades and concentration.\nHowever, some argue that starting later means ending later.\nThis is a fair point, but the benefits outweigh the costs.\nIn conclusion, a later start time would help students learn\nbetter and feel happier.\n```\n\n**Cito-tips**:\n• Houd je aan **woord-aantal** *(meestal 150-200 woorden voor essay)*.\n• **5 alinea's** = veiligste structuur.\n• **Argumenten met bewijs** > losse meningen.\n• **Niet 'In my country ...'** zonder context.\n• **Beleefd** blijven, ook bij sterke mening.",
    checks: [
      {
        q: "Wat is in een essay de **conclusion**?",
        options: ["Slot-alinea + samenvatting", "Eerste alinea", "Een voorbeeld", "Lijstje"],
        answer: 0,
        wrongHints: [null, "Dat is introduction.", "Geen alinea-type.", "Niet de structuur."],
      },
      {
        q: "Welk woord = **mijn mening geven**?",
        options: ["In my opinion", "Generally speaking", "Indeed", "Furthermore"],
        answer: 0,
        wrongHints: [null, "Algemeen, niet persoonlijke mening.", "Toevoeging, geen mening.", "Toevoeging."],
      },
      {
        q: "Welk signaalwoord = **conclusie**?",
        options: ["In conclusion", "Firstly", "For example", "However"],
        answer: 0,
        wrongHints: [null, "Eerste argument.", "Voorbeeld.", "Tegenstelling."],
      },
      {
        q: "Wat doe je met een **tegenwerping** in essay?",
        options: ["Noem en weerleg", "Negeer", "Eens mee zijn", "Ontwijken"],
        answer: 0,
        wrongHints: [null, "Niet — toont gebrek aan diepte.", "Tegenstrijdig met je standpunt.", "Niet — sterk essay heeft het."],
      },
    ],
  },

  // STAP 5: Veelgemaakte fouten
  {
    title: "Veelgemaakte fouten — vermijden",
    explanation:
      "**Top-10 schrijf-fouten** die punten kosten op CSE Engels:\n\n**1. False friends** *(woorden die lijken maar anders zijn)*:\n• **eventual** ≠ 'eventueel' → betekent 'uiteindelijk'.\n• **actually** ≠ 'actueel' → betekent 'eigenlijk'.\n• **sympathetic** ≠ 'sympathiek' → betekent 'meelevend'.\n• **brave** = dapper *(niet braaf)*.\n• **angel** = engel *(niet hoek — dat is angle)*.\n• **library** = bibliotheek *(niet boekenwinkel)*.\n• **smoking** = roken *(niet rokerig)*.\n\n**2. Verkeerde tijd**:\n• 'Gisteren ben ik gegaan' → 'Yesterday I **went**' *(niet I have gone)*.\n• 'I have been there since 2020' (Present Perfect — duurt nog) ≠ 'I was there in 2020' (Past Simple — klaar).\n\n**3. Word order**:\nNederlands: 'Ik heb het boek gelezen.'\nEngels: 'I have **read** the book.' *(read is voltooid deelwoord — past)*.\n\n• Niet 'I have the book read' (Nederlands word order).\n\n**4. Articles** (a / an / the):\n• **a** voor medeklinker: a car, a book.\n• **an** voor klinkergeluid: an apple, an hour *(stomme h)*.\n• **the** voor specifieke dingen: the book I bought.\n• **Geen artikel** voor algemene meervouden: 'I like dogs' (niet 'I like the dogs').\n\n**5. He / She / It**:\n• Personen krijgen he/she.\n• Dingen + dieren *(meestal)* krijgen 'it'.\n• Schepen + landen worden soms vrouwelijk *('she') in poëzie* — niet doen op CSE.\n\n**6. Verkeerd voorzetsel**:\n• 'in 2024' *(jaar)* niet 'on 2024'.\n• 'on Monday' *(dag)* niet 'in Monday'.\n• 'at 5 o'clock' *(tijd)* niet 'on 5 o'clock'.\n• 'depend **on**' niet 'depend of'.\n• 'good **at**' iets niet 'good in'.\n• 'married **to**' niet 'married with'.\n\n**7. Apostrof**:\n• **It's** = it is *(samentrekking)*.\n• **Its** = van het *(bezittelijk)*.\n• 'The cat licks its paw' *(its = van de kat)*.\n• 'It's cold today' *(it is)*.\n\n**8. There / Their / They're**:\n• **There** = daar / er.\n• **Their** = hun.\n• **They're** = they are.\n\n**9. Your / You're**:\n• **Your** = jouw.\n• **You're** = you are.\n\n**10. Dutch-isms** *(woorden niet vertalen)*:\n• 'Funny' kan ook 'raar' betekenen. Engels: 'strange'.\n• 'Sympathetic' betekent 'meelevend', NIET 'sympathiek' (= likeable).\n• 'I become' bestaat als 'become' *(worden)* maar bedoel je 'krijgen' = 'get'.\n• 'My English is not so bad' lijkt 'mijn Engels is niet zo slecht', kan klinken alsof het slecht ís. Gewoon: 'My English is okay'.\n\n**Cito-strategie — vermijd**:\n• Te complexe zinnen waar je niet zeker bent.\n• Liever **simpel + correct** dan complex + fout.\n\n**Tip — controleer aan eind**:\n• Tijden klopt overal?\n• Werkwoord-onderwerp-overeenkomst? *(she go**es** niet she go)*.\n• Spelling — vooral hun/jouw/their/your.\n• Punctuation *(punt + hoofdletter aan begin van zin)*.",
    checks: [
      {
        q: "Wat is **'eventual'** in Engels?",
        options: ["Uiteindelijk", "Eventueel (Nederlandse betekenis)", "Snel", "Soms"],
        answer: 0,
        wrongHints: [null, "Dat is 'possible'.", "Niet.", "Niet."],
      },
      {
        q: "**It's** vs **Its** — verschil?",
        options: ["It's = it is, Its = van het", "Geen verschil", "Beide samentrekking", "Beide bezittelijk"],
        answer: 0,
        wrongHints: [null, "Wel verschil.", "Niet beide.", "Niet beide."],
      },
      {
        q: "Welk voorzetsel? *'I am good ___ swimming.'*",
        options: ["at", "in", "on", "with"],
        answer: 0,
        wrongHints: [null, "Niet correct.", "Niet correct.", "Niet correct."],
      },
      {
        q: "*'Yesterday I ___ to the cinema.'* Welke tijd?",
        options: ["went (past simple)", "have gone (present perfect)", "go (present)", "going"],
        answer: 0,
        wrongHints: [null, "Voor onbepaalde tijd.", "Niet verleden.", "Geen volledige zin."],
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
        options: ["Dear Sir or Madam,", "Hi!", "Dear friend,", "Hello!"],
        answer: 0,
        wrongHints: [null, "Informeel.", "Informeel.", "Informeel."],
      },
      {
        q: "Sign-off bij **'Dear Mrs Brown'**?",
        options: ["Yours sincerely,", "Yours faithfully,", "Bye,", "Cheers,"],
        answer: 0,
        wrongHints: [null, "Naam onbekend.", "Informeel.", "Informeel."],
      },
      {
        q: "Welke is **samentrekking**?",
        options: ["I'm", "I am", "Im", "Iam"],
        answer: 0,
        wrongHints: [null, "Geen samentrekking.", "Spelling fout.", "Spelling fout."],
      },
      {
        q: "Welk woord = **conclusie-signaal**?",
        options: ["In conclusion", "Firstly", "For example", "However"],
        answer: 0,
        wrongHints: [null, "Eerste argument.", "Voorbeeld.", "Tegenstelling."],
      },
      {
        q: "**Their** vs **There** — welke is van bezit?",
        options: ["Their", "There", "Beide", "Geen"],
        answer: 0,
        wrongHints: [null, "Plek (daar).", "Verschillende functies.", "Wel — their."],
      },
      {
        q: "Een **samenvatting** is ... ?",
        options: ["Korte versie in eigen woorden", "Letterlijke kopie", "Mening over de tekst", "Lijst voorbeelden"],
        answer: 0,
        wrongHints: [null, "Plagiat.", "Niet samenvatting.", "Niet samenvatting."],
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
