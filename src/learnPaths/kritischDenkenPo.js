// Leerpad: Kritisch denken + denkfouten - groep 6-8.
// Sluit op digitale-geletterdheid + media-wijsheid. Cito-burgerschap. 1F. 4 stappen.

const stepEmojis = ["🤔", "⚠️", "🎯", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is kritisch denken?", emoji: "🤔", from: 0, to: 0 },
  { letter: "B", title: "Veelvoorkomende denkfouten", emoji: "⚠️", from: 1, to: 1 },
  { letter: "C", title: "Argumenten herkennen", emoji: "🎯", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Wat is kritisch denken?",
    explanation:
      "**Kritisch denken** = **goed nadenken** voordat je iets gelooft of beslist.\nNiet alles direct geloven. **Vragen stellen**.\n\n**Waarom belangrijk?**\n• Internet vol **valse informatie**.\n• Reclame wil je iets verkopen.\n• Politici willen je stem.\n• Vrienden + familie hebben soms verkeerde info.\n• Niet bedrog → maar wel een vaardigheid om te leren.\n\n**Kenmerken van kritische denker**:\n1. **Open** *(luistert naar andere meningen)*.\n2. **Twijfelt** *(zelfs aan eigen ideeën)*.\n3. **Bewijs** *(vraagt: 'hoe weet je dat?')*.\n4. **Bron** *(checkt waar info vandaan komt)*.\n5. **Logisch** *(zoekt verbanden)*.\n6. **Eerlijk** *(geeft toe als hij/zij fout zat)*.\n7. **Niet emotioneel** *(beslist met hoofd, niet alleen hart)*.\n\n**Niet-kritisch denken**:\n• 'Mijn vriend zei het, dus klopt.'\n• 'Ik zag het op TikTok, dus waar.'\n• 'Iedereen doet het, dus normaal.'\n• 'Mijn ouder zei het, dus echt.'\n\n**Kritisch denken**:\n• 'Interessant — heb je een bron?'\n• 'Klinkt te-goed-om-waar — laat me checken.'\n• 'Wie heeft hier voordeel van?'\n• 'Wat zegt de tegenstander?'\n\n**Vraag-techniek** *(5 W's)*:\n• **Wie** zegt dit?\n• **Wat** zegt hij precies?\n• **Wanneer** geschreven? *(recent of oud?)*\n• **Waarom** zegt hij dit? *(belang?)*\n• **Waar** kwam info vandaan?\n\n**Voorbeelden**:\n\n**Voorbeeld 1**: 'Eet 1 banaan + wordt 20 cm groter in 1 week!'\n• **Kritisch**: 'Banaan is gezond maar... 20 cm? Onmogelijk. Wie zegt dit? Een groente-winkel? Te-goed-om-waar. **Nee, niet geloven**.'\n\n**Voorbeeld 2**: 'Wetenschappers ontdekken nieuwe planeet.'\n• **Kritisch**: 'Welke wetenschappers? Welke bron? NASA of een blog? Recent of oud? Misschien echt — verifieer bij NOS of NASA.'\n\n**Voorbeeld 3**: 'Sokken zijn slecht voor je voeten — laat ze de hele dag uit!'\n• **Kritisch**: 'Wie heeft belang? Een blote-voet-club? Een sokken-criticus? Vraag huisarts of zoek wetenschap-bron.'\n\n**Kritisch ≠ negatief**:\n• Niet alles **wantrouwen**.\n• Niet **alles afwijzen**.\n• Wel **vragen + checken** voordat je conclusie trekt.\n\n**Wetenschappelijk denken** = vorm van kritisch denken:\n• **Hypothese** *(idee)*.\n• **Experiment** *(test)*.\n• **Resultaten** *(meten)*.\n• **Conclusie** *(klopt hypothese?)*.\n• **Herhaling** *(andere doen zelfde test)*.\n• Pas dan: nieuwe kennis.\n\n**Cito-feitje**:\nIn 2024 zijn **~67% van NL-jongeren** *(12-25 jr)* moeite om **echte info te onderscheiden** van nep-nieuws *(SCP onderzoek)*. Daarom: kritisch denken is **belangrijke 21e-eeuws-vaardigheid**.",
    checks: [
      {
        q: "Wat is **kritisch denken**?",
        options: ["Goed nadenken voor je iets gelooft", "Negatief zijn", "Alles afwijzen", "Alles geloven"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet hetzelfde.", "Niet.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is kritisch denken?", tekst: "Kritisch denken = **goed NADENKEN voordat je iets gelooft**. Niet alles meteen aannemen, maar vragen stellen: 'klopt dit?', 'wie zegt dit?', 'wat is bewijs?'." },
            { titel: "Niet hetzelfde als negatief", tekst: "Kritisch betekent NIET 'altijd negatief' of 'alles afwijzen'. Het betekent: gezond wantrouwen, vragen stellen, controleren. Daarna kun je iets WEL geloven — maar pas na controle." },
            { titel: "Belangrijk in tijd van social media", tekst: "Op internet staat veel info, niet alle juist. Nepnieuws, deepfakes, manipulatieve filmpjes. Kritisch denken = nuttig wapen ertegen." },
          ],
          woorden: [
            { woord: "kritisch denken", uitleg: "Goed nadenken + controleren voor je iets gelooft." },
            { woord: "bronnenkritiek", uitleg: "Onderzoeken WIE iets zegt en of dat betrouwbaar is." },
          ],
          theorie: "Cito-feit: kritisch denken hoort bij **mediawijsheid** + **digitale geletterdheid**. Belangrijk voor school + later leven. Niet alles op TikTok klopt!",
          voorbeelden: [
            { type: "stap", tekst: "Tip: 'Drink azijn elke ochtend voor afvallen'. Kritisch: wie zegt dit? Wetenschapper of influencer? Welke bron?" },
            { type: "stap", tekst: "Kop: 'Schokkende ontdekking!' = vaak click-bait. Wees kritisch — vaak overdreven." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "5 W's: Wie zegt dit? Wat zegt hij? Waar staat het? Wanneer? Waarom?" }],
          niveaus: {
            basis: "Kritisch denken = goed nadenken voor je iets gelooft.",
            simpeler: "Vragen stellen voor je iets aanneemt.",
            nogSimpeler: "Eerst denken, dan geloven.",
          },
        },
      },
      {
        q: "Wat doe je bij **info van internet**?",
        options: ["Checken bron + andere bron + waarom", "Direct geloven", "Direct delen", "Niet lezen"],
        answer: 0,
        wrongHints: [null, "Klopt — 5 W's.", "Niet.", "Niet.", "Wel lezen + checken."],
      },
      {
        q: "Wat is **wetenschappelijk denken**?",
        options: ["Hypothese → experiment → conclusie", "Toeval", "Niets", "Religie"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Wel iets.", "Apart."],
      },
      {
        q: "Hoeveel **% NL-jongeren** moeite met nepnieuws (2024)?",
        options: ["~67%", "10%", "100%", "0%"],
        answer: 0,
        wrongHints: [null, "Klopt — veel.", "Te weinig.", "Niet allemaal.", "Wel."],
      },
    ],
  },
  {
    title: "Veelvoorkomende denkfouten",
    explanation:
      "**Denkfouten** = manieren waarop ons brein **fout** kan zitten.\nIedereen heeft ze — bewustzijn helpt.\n\n**1. Bevestigingsbias** *(confirmation bias)* 🔁:\nWe zoeken info die **bevestigt** wat we al denken. Negeren wat tegenspreekt.\n\n*Voorbeeld*: Iemand denkt 'roken is niet zo erg'. Leest alleen artikelen die dit bevestigen. Negeert ziekte-onderzoek.\n\n**Oplossing**: lees ook **tegen-informatie**. Vraag jezelf: 'Wat zegt de andere kant?'\n\n**2. Anker-effect** ⚓:\nEerste cijfer dat we horen **beïnvloedt** onze schatting — zelfs als willekeurig.\n\n*Voorbeeld*: Verkoper noemt €1000 als prijs. Daarna €600 = lijkt 'koopje'. Maar in werkelijkheid was €400 al genoeg.\n\n**Oplossing**: Vergelijk met andere bronnen — niet alleen anker-getal.\n\n**3. Groepsdruk / Bandwagon** 🚂:\n'Iedereen doet het, dus moet ik ook.'\n\n*Voorbeeld*: Iedereen koopt een bepaalde sneaker. Jij ook — zonder echt te willen.\n\n**Oplossing**: Vraag jezelf: 'Wil ik dit echt? Of doe ik mee?'\n\n**4. Autoriteitsbias** 👨‍🏫:\nWe geloven mensen met **status** automatisch.\n\n*Voorbeeld*: Influencer met 10 miljoen volgers zegt 'product werkt' → wij geloven, ook al heeft hij geen kennis.\n\n**Oplossing**: Check **expertise**. Een arts over medisch? Eerder geloven. Een influencer over medisch? Wantrouwen.\n\n**5. Beschikbaarheids-vooroordeel** 🧠:\nWe overschatten dingen die **vers in geheugen** zijn.\n\n*Voorbeeld*: Na vliegtuig-crash op TV ben je bang om te vliegen. Maar vliegen is **veel veiliger** dan auto.\n\n**Oplossing**: Kijk naar **cijfers**, niet alleen verhalen.\n\n**6. Sunk cost fallacy** 💸:\nWe maken slechte keuzes omdat we al iets investeerden.\n\n*Voorbeeld*: Je begon een boek dat je niet leuk vindt. Maar leest 'door' want 'al 50 bladzijdes gedaan'. Beter: stop, lees iets anders.\n\n**Oplossing**: Vraag: 'Wat zou ik nu kiezen als ik opnieuw kon beginnen?'\n\n**7. Halo-effect** 😇:\nIemand is in 1 ding goed → we denken dat hij/zij **alles** goed kan.\n\n*Voorbeeld*: Een mooie filmster reclame voor energie-drank → 'als zij dit drinkt, zal het wel gezond zijn'.\n\n**Oplossing**: Beoordeel **per onderwerp**, niet 'overall'.\n\n**8. Survivorship bias** 🏆:\nWe horen alleen over **succes**, niet over **falen**.\n\n*Voorbeeld*: 'Bill Gates stopte met universiteit en werd rijk → niet studeren is OK.'\nMaar — duizenden anderen stopten + werden niet rijk.\n\n**Oplossing**: Vraag: 'Hoeveel mensen probeerden dit + faalden?'\n\n**9. Stereotypering** 👥:\nWe oordelen over groep mensen ipv individu.\n\n*Voorbeeld*: 'Alle ouderen zijn langzaam' → onjuist + oneerlijk.\n\n**Oplossing**: Behandel **elk persoon individueel**.\n\n**10. Emotionele beslissing** ❤️:\nWe besluiten op gevoel ipv feit.\n\n*Voorbeeld*: Beste vriend wil dat je iets koopt → je doet het, ook al heb je geen geld.\n\n**Oplossing**: **Wacht 24 uur** voor grote beslissingen. Slaap erover.\n\n**Cito-feitje**:\n**Daniel Kahneman** *(1934-2024)* won **Nobelprijs Economie 2002** voor onderzoek naar denkfouten. Boek 'Thinking, Fast and Slow' beschrijft 2 denkstijlen: snel + emotioneel *(systeem 1)* en langzaam + logisch *(systeem 2)*. Belangrijk voor begrip menselijk gedrag.",
    checks: [
      {
        q: "Wat is **bevestigingsbias**?",
        options: ["Zoeken naar info die je idee bevestigt", "Twijfelen", "Niets", "Logica"],
        answer: 0,
        wrongHints: [null, "Klopt — open zijn helpt.", "Tegenovergesteld.", "Wel.", "Niet primair."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is bevestigingsbias?", tekst: "**Bevestigingsbias** (Engels: confirmation bias) is een denkfout: we ZOEKEN naar info die ons IDEE BEVESTIGT, en negeren info die het tegenspreekt." },
            { titel: "Voorbeeld", tekst: "Iemand denkt: 'roken is niet zo erg'. Leest alleen artikelen die dit BEVESTIGEN ('mijn opa rookte 90 jaar oud!'). Negeert alle wetenschap die anders zegt." },
            { titel: "Iedereen heeft het", tekst: "Niet alleen 'domme' mensen — IEDEREEN heeft last van deze bias. Ons brein wil graag bevestiging. Bewustzijn helpt om eraan te ontsnappen." },
          ],
          woorden: [
            { woord: "bevestigingsbias", uitleg: "Voorkeur voor info die je idee bevestigt." },
            { woord: "denkfout / bias", uitleg: "Systematische manier waarop ons brein fout zit." },
          ],
          theorie: "Cito-tip kritisch denken: weet dat je BIAS hebt. Vraag bewust: 'wat is de andere kant? Wie spreekt mij tegen?' Lees ook bronnen die NIET met je eens zijn — dan denk je breder.",
          voorbeelden: [
            { type: "stap", tekst: "Voetbal-fan denkt: 'mijn team is beste!' → leest alleen positief nieuws over team." },
            { type: "stap", tekst: "Iemand gelooft in homeopathie → leest succes-verhalen, negeert wetenschap die zegt 'placebo-effect'." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lees BEWUST de tegenovergestelde mening soms. Je leert er meer van dan van bevestiging." }],
          niveaus: {
            basis: "Bevestigingsbias = zoeken naar info die je idee bevestigt.",
            simpeler: "Alleen lezen wat met je idee EENS is = bias.",
            nogSimpeler: "Lees ook andere kant.",
          },
        },
      },
      {
        q: "Wat is **sunk cost fallacy**?",
        options: ["Doorgaan omdat je al investeerde", "Nieuw beginnen", "Slim kiezen", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel goed.", "Niet primair.", "Wel."],
      },
      {
        q: "Waarom is **stereotypering** fout?",
        options: ["Oordeel over groep ipv individu", "Geen tijd voor", "Mag wel", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt — oneerlijk.", "Geen excuus.", "Niet.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is stereotypering?", tekst: "**Stereotypering** = een oordeel maken over een HELE GROEP mensen, op basis van een vooroordeel. Bv: 'alle oude mensen zijn langzaam', 'alle voetballers zijn dom'." },
            { titel: "Waarom fout?", tekst: "Het is oneerlijk: je behandelt een persoon niet als individu maar als 'lid van groep X'. Elk mens is uniek. Veel ouderen zijn snel; veel voetballers zijn slim. Generalisatie klopt nooit voor iedereen." },
            { titel: "Vooroordelen leiden tot discriminatie", tekst: "Stereotypes kunnen leiden tot discriminatie: mensen krijgen geen baan, kans of vriendschap omdat ze tot 'verkeerde groep' worden gerekend. Wettelijk verboden in NL." },
          ],
          woorden: [
            { woord: "stereotype", uitleg: "Vast beeld over groep mensen (vaak negatief)." },
            { woord: "discriminatie", uitleg: "Ongelijk behandelen op basis van groep, niet individu." },
          ],
          theorie: "Cito-tip: stereotypering is altijd PROBLEMATISCH. Behandel mensen individueel, niet als lid van groep. Cito en grondwet beschermen tegen discriminatie.",
          voorbeelden: [
            { type: "stap", tekst: "'Meisjes kunnen niet goed wiskundigen worden' = stereotype = fout (veel meiden TOP in wiskunde)." },
            { type: "stap", tekst: "'Mensen uit X-land zijn lui' = stereotype = fout + racistisch." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vraag: 'Is dit echt voor IEDEREEN waar?' Bijna altijd: nee, want elk mens is uniek." }],
          niveaus: {
            basis: "Stereotypering = oordeel over hele groep = oneerlijk (niet elk individu hetzelfde).",
            simpeler: "Behandel mensen los van groep — elk is uniek.",
            nogSimpeler: "Individueel beoordelen.",
          },
        },
      },
      {
        q: "Wie won **Nobelprijs voor denkfouten-onderzoek**?",
        options: ["Daniel Kahneman (2002)", "Einstein", "Darwin", "Newton"],
        answer: 0,
        wrongHints: [null, "Klopt — psycholoog.", "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Argumenten herkennen + drogredenen",
    explanation:
      "**Argument** = reden om iets te geloven of doen.\nGoede argumenten zijn **logisch** + **bewijs**.\n\n**Onderdelen van argument**:\n• **Stelling** *(wat je beweert)*.\n• **Reden** *(waarom)*.\n• **Bewijs** *(feiten, voorbeelden)*.\n\n**Voorbeeld goed argument**:\n*'Roken is slecht voor je gezondheid.'* *(stelling)*\n*'Omdat het longkanker veroorzaakt.'* *(reden)*\n*'Studies tonen 90% van longkanker bij rokers.'* *(bewijs)*\n\n**Voorbeeld slecht argument**:\n*'Roken is slecht.'*\n*'Omdat mijn moeder zegt.'*\n*'Geen verdere reden.'*\n\n**Drogredenen** = **slechte argumenten** die er **goed** uitzien.\nHerkennen helpt je niet bedrogen te worden.\n\n**1. Persoonsaanval (ad hominem)** 👤:\nAanval op **persoon** ipv argument.\n\n*Voorbeeld*: 'Je hoeft niet naar Marieke te luisteren — ze is dom.'\n\n**Fout**: Argument zegt niets over of Marieke's idee klopt.\n\n**2. Stroman** 🥒:\nVervalst tegenstander's argument om gemakkelijker aan te vallen.\n\n*Voorbeeld*: 'Jij wilt minder zout in eten? Je wilt dus dat we **smaakloos** eten? Nee!'\n\n**Fout**: Niet wat ander zei. Minder zout ≠ geen zout.\n\n**3. Vals dilemma** *('óf-óf')*:\nMaakt alsof er **maar 2 opties** zijn.\n\n*Voorbeeld*: 'Je bent voor ons OF je bent tegen ons.'\n\n**Fout**: Vaak meer dan 2 opties *(neutraal, beide soms, eigen mening)*.\n\n**4. Beroep op meerderheid** 👥:\n'Iedereen doet het, dus klopt het.'\n\n*Voorbeeld*: '80% gelooft dit, dus waar.'\n\n**Fout**: Meerderheid kan **fout** zijn. Vroeger geloofde meerderheid dat aarde plat was.\n\n**5. Hellende-vlak (slippery slope)** 🛝:\n'Als A, dan B, dan C, dan rampscenario.'\n\n*Voorbeeld*: 'Als we gokken legaliseren, gaan kinderen gokken, dan worden zij verslaafd, dan stort de samenleving in.'\n\n**Fout**: Stappen niet bewezen — meestal niet zo extreem.\n\n**6. Beroep op autoriteit** 👨‍🏫:\n'X zegt het, dus waar.'\n\n*Voorbeeld*: 'Beroemde acteur zegt dat dieet werkt, dus werkt het.'\n\n**Fout**: Acteur = geen voedingsexpert. Check echte expert.\n\n**7. Beroep op traditie** 🏛️:\n'We doen het altijd zo, dus is goed.'\n\n*Voorbeeld*: 'Vrouwen blijven thuis — zo deden onze voorouders ook.'\n\n**Fout**: 'Altijd zo' = niet automatisch goed. Slavernij was 'altijd zo' — toch fout.\n\n**8. Beroep op emotie** 😢:\nManipuleert met angst, schaamte, medelijden.\n\n*Voorbeeld*: 'Koop dit nu, anders denk je later: 'wat als ik het had gedaan?'' *(spijt-angst)*.\n\n**Fout**: Speelt op gevoel, niet op feit.\n\n**9. Post hoc ergo propter hoc** *('na, dus door')*:\n'A gebeurde voor B, dus A veroorzaakte B.'\n\n*Voorbeeld*: 'Na vaccinatie kreeg mijn kind autisme — vaccin veroorzaakt autisme.'\n\n**Fout**: Correlatie ≠ causaliteit. Andere oorzaak mogelijk. Wetenschap heeft dit weerlegd.\n\n**10. Cherry picking** 🍒:\nKies **gunstige** feiten, negeer res.\n\n*Voorbeeld*: '1 wetenschapper twijfelt klimaatverandering, dus is niet bewezen.'\n\n**Fout**: 97% van wetenschappers gelooft wel — 1 uitzondering ≠ doorslag.\n\n**Hoe omgaan met drogredenen?**\n• **Herken** ze — dat helpt al veel.\n• **Vraag voor bewijs**: 'Wat is de bron?'\n• **Wijs vriendelijk op**: 'Klopt je argument logisch?'\n• Bij online discussie: **stap weg** — niet alle ruzies winnen.\n\n**Cito-feitje**:\nDrogredenen zijn al bekend sinds **Oude Grieken** *(Aristoteles, 4e eeuw v.Chr.)*. Hij maakte lijst van **denkfouten in argumenten**. Daarom heten ze 'klassieke drogredenen' — bestaan **al 2400 jaar**.",
    checks: [
      {
        q: "Wat is **persoonsaanval (ad hominem)**?",
        options: ["Aanval op persoon ipv argument", "Goed argument", "Vraag", "Niets"],
        answer: 0,
        wrongHints: [null, "Klopt — drogreden.", "Niet.", "Niet primair.", "Wel."],
      },
      {
        q: "Wat is **stroman**?",
        options: ["Vervalst tegenstander's argument", "Echte man", "Goed", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt — drogreden.", "Letterlijk niet.", "Tegenovergesteld.", "Wel."],
      },
      {
        q: "Waarom is **'iedereen doet het'** een drogreden?",
        options: ["Meerderheid kan fout zijn", "Klopt altijd", "Niet bestaand", "Wel goed"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet altijd.", "Wel.", "Niet."],
      },
      {
        q: "Wie maakte **eerste lijst drogredenen**?",
        options: ["Aristoteles (Oude Grieken)", "Newton", "Einstein", "Niemand"],
        answer: 0,
        wrongHints: [null, "Klopt — 4e eeuw v.Chr.", "Niet.", "Niet.", "Wel."],
      },
    ],
  },
  {
    title: "Eind-toets — kritisch mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wat is **kritisch denken**?", options: ["Goed nadenken voor je gelooft", "Negatief", "Alles afwijzen", "Alles geloven"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Tegenovergesteld."] },
      { q: "Wat is **bevestigingsbias**?", options: ["Zoeken naar info die idee bevestigt", "Twijfel", "Logica", "Niet bestaand"], answer: 0, wrongHints: [null, "Klopt.", "Tegenovergesteld.", "Niet primair.", "Wel."] },
      { q: "Wat zijn **drogredenen**?", options: ["Slechte argumenten die goed lijken", "Goede argumenten", "Niets", "Wiskunde"], answer: 0, wrongHints: [null, "Klopt.", "Tegenovergesteld.", "Wel.", "Niet."] },
      { q: "Wat is **stereotypering** fout?", options: ["Oordeel over groep ipv individu", "Slim", "Mag wel", "Niet"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Geen excuus.", "Wel fout."] },
      { q: "Wie won **Nobelprijs voor denkfouten**?", options: ["Daniel Kahneman (2002)", "Einstein", "Darwin", "Aristoteles"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Vroeger maar geen Nobel."] },
      { q: "Wat is **cherry picking**?", options: ["Kies gunstige feiten, negeer res", "Fruit plukken", "Goed", "Niet bestaand"], answer: 0, wrongHints: [null, "Klopt — drogreden.", "Letterlijk niet.", "Tegenovergesteld.", "Wel."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kritischDenkenPo = {
  id: "kritisch-denken-po",
  title: "Kritisch denken + denkfouten (Cito groep 6-8)",
  emoji: "🤔",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / 21e-eeuwse vaardigheden",
  prerequisites: [
    { id: "digitale-geletterdheid-po", title: "Digitale geletterdheid", niveau: "1F" },
  ],
  intro:
    "Kritisch denken voor Cito groep 6-8 — wat is kritisch denken (5 W's + niet alles geloven) + 10 denkfouten (bevestigingsbias/anker/groepsdruk/halo/sunk cost - Daniel Kahneman) + 10 drogredenen (ad hominem/stroman/vals dilemma/cherry picking - Aristoteles). Sluit op digitale-geletterdheid. ~15 min.",
  triggerKeywords: [
    "kritisch denken",
    "denkfout", "bias",
    "bevestigingsbias", "halo-effect",
    "Daniel Kahneman",
    "drogreden", "ad hominem", "stroman",
    "Aristoteles",
    "nepnieuws", "fake news",
  ],
  chapters,
  steps,
};

export default kritischDenkenPo;
