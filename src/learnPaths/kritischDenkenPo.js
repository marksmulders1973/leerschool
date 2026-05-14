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
        uitlegPad: {
          stappen: [
            { titel: "Internet = niet alles waar", tekst: "**Op internet kan IEDEREEN iets plaatsen** — een wetenschapper, een influencer, een 12-jarige, een oplichter. Daarom is **CHECKEN voor delen** essentieel." },
            { titel: "De 3 controle-vragen", tekst: "Bij elk artikel/filmpje/post:\n1. **Wie zegt dit?** (bron + auteur)\n2. **Wat is bewijs?** (links naar onderzoek?)\n3. **Wat zeggen andere bronnen?** (vergelijk minstens 2 plekken)" },
            { titel: "5 W-vragen volledig", tekst: "Voor diepere check:\n• **Wie** schreef het?\n• **Wat** zegt hij precies?\n• **Wanneer** geschreven? (recent? oud?)\n• **Waarom** dit? (voordeel? belang?)\n• **Waar** kwam de info vandaan?" },
          ],
          woorden: [
            { woord: "bronnenkritiek", uitleg: "Onderzoeken WIE iets zegt + of dat klopt." },
            { woord: "fact-check", uitleg: "Feitencheck — controleren of beweringen waar zijn." },
          ],
          theorie: "Cito-tip betrouwbare bron-niveaus:\n• **Top**: officiële instanties (.gov, .nl van overheid), wetenschappers, grote kranten (NOS, NRC).\n• **Midden**: bekende sites met redactie (Wikipedia voor algemene info).\n• **Laag**: blogs, sociale media zonder controle.\n• **Nul**: anonieme posts, AI-generatie zonder controle.",
          voorbeelden: [
            { type: "stap", tekst: "TikTok-video over 'natuurlijke kanker-genezing'? CHECK: wie zegt het (arts of influencer?), bron (onderzoek of mening?), andere bronnen (klopt dit elders?)." },
            { type: "stap", tekst: "NOS-bericht over verkiezingen? Veiliger want NOS heeft redactie + fact-check, maar nog steeds: vergelijk met andere bronnen voor compleet beeld." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "STOP-truc: STOP voor delen. Check bron + bewijs + andere bron. Dan pas delen of geloven." }],
          niveaus: {
            basis: "Checken bron + andere bronnen + waarom. = A.",
            simpeler: "Bij info: vraag WIE, WAT, WANNEER, WAAROM, WAAR. Dan pas geloven. = A.",
            nogSimpeler: "Checken! = A.",
          },
        },
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
        uitlegPad: {
          stappen: [
            { titel: "Wat is 'sunk cost'?", tekst: "**Sunk cost** = 'verzonken kosten' = geld of tijd dat al **uitgegeven** is en NIET meer terug te krijgen. **Sunk cost fallacy** = de denkfout om door te gaan met iets ALLEEN omdat je er al in geïnvesteerd hebt." },
            { titel: "Klassiek voorbeeld", tekst: "Je begon een boek dat je SAAI vindt. Maar denkt: 'ik heb al 100 bladzijden gelezen, ik moet het uitlezen.' Resultaat: nog 200 saaie bladzijden te gaan.\n**Logischer**: stop nu. Die 100 bladzijden zijn weg, ongeacht wat je nu doet. Lees iets leuks." },
            { titel: "Hoe ontsnap je?", tekst: "Stel jezelf de vraag: **'Wat zou ik kiezen als ik vandaag opnieuw kon beginnen?'** Niet 'ik heb er al in geïnvesteerd' — alleen 'wat is het beste voor de toekomst?'" },
          ],
          woorden: [
            { woord: "sunk cost", uitleg: "Al uitgegeven kosten — niet meer terug te halen." },
            { woord: "fallacy", uitleg: "Denkfout, redeneerfout." },
          ],
          theorie: "Cito-tip: sunk cost fallacy = niet alleen geld, ook TIJD + EMOTIE. Een relatie waar je 5 jaar in stak voelt 'te zonde om weg te gooien'. Maar dat is een denkfout — beoordeel op TOEKOMST, niet op verleden.",
          voorbeelden: [
            { type: "stap", tekst: "Bioscoop: film is saai na 30 min. Doorgaan want '€12 betaald'? Nee — die €12 is sowieso weg. Loop weg + doe iets leuks." },
            { type: "stap", tekst: "Voor bedrijven: een project dat €1 mln kostte + nu €5 mln meer kost vs €0,5 mln voor nieuw plan. Slim = nieuw plan, niet voortbouwen op verlies." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Verleden is verleden. Beslis op basis van TOEKOMST. 'Wat zou ik nu kiezen als ik vandaag begon?'" }],
          niveaus: {
            basis: "Sunk cost fallacy = doorgaan omdat je al investeerde (denkfout). = A.",
            simpeler: "Saai boek uitlezen alleen omdat je al 100 bladzijden las = sunk cost fallacy. = A.",
            nogSimpeler: "Doorgaan om verleden = A.",
          },
        },
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
        uitlegPad: {
          stappen: [
            { titel: "Wat is ad hominem?", tekst: "**Ad hominem** is Latijns voor 'op de man'. Het is een **drogreden** waar je niet het ARGUMENT aanvalt maar de PERSOON die het zegt. Onhoudbaar in een goede discussie." },
            { titel: "Voorbeeld", tekst: "Marieke zegt: 'Roken is slecht voor je gezondheid.'\n**Ad hominem-reactie**: 'Wat weet jij ervan, je hebt zelfs geen rij-bewijs!'\n**Probleem**: Marieke's rij-bewijs heeft NIETS te maken met of haar argument over roken klopt. Aanval op persoon = ontwijken van argument." },
            { titel: "Hoe reageer je goed?", tekst: "Een **eerlijk argument**:\n• Reageer op WAT iemand zegt, niet WIE.\n• Vraag bewijs: 'Hoe weet je dat?'\n• Eens of oneens: gebruik feiten + redenen, geen scheldwoorden.\n• Als iemand jou ad hominem aanvalt: blijf rustig + verwijs naar je argument." },
          ],
          woorden: [
            { woord: "ad hominem", uitleg: "Latijn 'op de man' = persoonsaanval ipv argument-aanval." },
            { woord: "drogreden", uitleg: "Slecht argument dat goed lijkt." },
          ],
          theorie: "Cito-feit ad hominem: vaak gezien in politieke debatten + sociale media-ruzies. Mensen vallen elkaar persoonlijk aan ipv inhoudelijk te discussiëren. Aristoteles beschreef dit al in 4e eeuw v.Chr. als drogreden.",
          voorbeelden: [
            { type: "stap", tekst: "Slecht: 'Je hebt geen recht van spreken — je hebt geen kinderen!' (aanval persoon)" },
            { type: "stap", tekst: "Goed: 'Ik begrijp je punt, maar wat is je bewijs?' (aanval argument)" },
            { type: "stap", tekst: "Politiek voorbeeld: 'Onze tegenstander is een leugenaar' = ad hominem. 'De plannen van tegenstander berusten op verkeerde cijfers omdat...' = inhoudelijk." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Goede discussie = bal spelen, niet man spelen. Aanval ARGUMENT, niet PERSOON." }],
          niveaus: {
            basis: "Ad hominem = aanval op persoon ipv argument. = A.",
            simpeler: "In plaats van te reageren op WAT iemand zegt, ga je tegen WIE hij is. Drogreden. = A.",
            nogSimpeler: "Persoon aanvallen = A.",
          },
        },
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
      {
        q: "Wat is **fake news**?",
        options: ["Nepnieuws — info die niet klopt maar verspreid wordt als waar", "Grappig nieuws", "Reclame", "Nieuws uit ander land"],
        answer: 0,
        wrongHints: [null, "Klopt — bewust of onbewust onjuiste info, vooral op social media.", "Niet — humor-nieuws (bv. De Speld) is duidelijk fictief.", "Reclame is wel commercieel maar niet 'fake news' (heeft eigen regels).", "Buitenlands nieuws is gewoon nieuws — niet fake."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is fake news?", tekst: "**Fake news** = **nep-nieuws**. Informatie die niet klopt, maar gepresenteerd wordt als waar. Verspreid vooral via **social media** (TikTok, Instagram, X/Twitter, Whatsapp).\n\nTwee soorten:\n• **Misinformation** — onjuist maar zonder kwade bedoeling (per ongeluk gedeeld)\n• **Disinformation** — onjuist + bewust verspreid om mensen te misleiden" },
            { titel: "Hoe herken je fake news?", tekst: "**6 vragen om te stellen**:\n1. **Wie schreef het?** Onbekende auteur? Verdacht.\n2. **Welke bron?** Niet-bekende website? Check een andere bron.\n3. **Wanneer geschreven?** Oude foto's worden vaak misbruikt voor nieuwe verhalen.\n4. **Klopt het met andere bronnen?** Check NOS, NRC, een echte krant.\n5. **Past het bij de URL?** 'nu.nl-tracking.com' = nep, alleen 'nu.nl' echt.\n6. **Wekt het sterke emoties op?** Fake news is vaak boos/bang-makend → klik-bait." },
            { titel: "Cito-feit: fake news in NL + AI", tekst: "**2024 trends**:\n• **AI-deepfakes** — video waarin iemand iets zegt wat hij/zij nooit zei (gemaakt met AI)\n• **AI-stem-fraude** — oplichter belt 'mama, ik heb geld nodig' met AI-stem familie\n• **Whatsapp-kettingberichten** — vaak fake (delen niet)\n• Onderzoek: 60% NL'ers (2024) heeft moeite met onderscheiden echt/fake\n\nNL **Mediawijsheid-week** elk najaar → leert kinderen kritisch lezen." },
          ],
          woorden: [
            { woord: "fake news", uitleg: "Engelse term voor nepnieuws. Onjuiste info verspreid als waar." },
            { woord: "deepfake", uitleg: "AI-gemaakte video/audio waarin iemand iets zegt wat hij/zij niet zei." },
            { woord: "factchecker", uitleg: "Persoon of website die onwaarheden controleert. NL: NU.nl-factcheck, ANP-factcheck." },
            { woord: "broncheck", uitleg: "Controleren wie iets schreef + waar het vandaan komt." },
          ],
          theorie: "Betrouwbare bronnen voor kinderen:\n• **NOS Jeugdjournaal** — speciaal voor 9-12 jaar\n• **Junior Bibliotheek** — kindvriendelijke info\n• **Kennisnet** — onderwijs-platform\n• **Wikipedia** — vaak goed maar altijd bron-vermelding checken\n\nMijden: random TikTok-claims, kettingberichten, websites zonder 'over ons'-pagina.",
          voorbeelden: [
            { type: "feit", tekst: "Tijdens Corona (2020-2022) gingen veel fake nieuwsverhalen rond: 'vaccins veroorzaken X'. Onderzoeken bewezen telkens onjuist." },
            { type: "feit", tekst: "AI kan in 2024 in 30 seconden een foto-perfect deepfake video maken — onmogelijk visueel te onderscheiden zonder tools." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen ouderen", uitleg: "Studies tonen: kinderen + tieners zijn ZOMS MEER vatbaar voor fake news omdat ze meer op TikTok/Insta vertrouwen." }],
          niveaus: { basis: "Nepnieuws. = A.", simpeler: "Fake news = nieuws/info dat NIET klopt maar wel gedeeld wordt alsof het waar is. Komt vooral van social media. Check altijd 2 bronnen. = A.", nogSimpeler: "Nepnieuws = A." },
        },
      },
      {
        q: "Wat doe je als iemand zegt: **'Mijn opa rookt en is 90 — dus roken is gezond'**?",
        options: ["Anekdote ≠ bewijs — onderzoek toont roken is ongezond", "Geloof het — opa is bewijs", "Ga zelf roken proberen", "Stop met opa praten"],
        answer: 0,
        wrongHints: [null, "Klopt — 1 persoon = anekdote, niet wetenschappelijk bewijs.", "Anekdote-fout — 1 voorbeeld bewijst niets over miljoenen mensen.", "Niet — gebruik kritisch denken, niet impuls.", "Niet nodig — leg uit wat anekdote-bewijs is."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een anekdote?", tekst: "Een **anekdote** is een **persoonlijk verhaal** of **1 voorbeeld**. Op zich niet erg, maar als **bewijs** is het zwak.\n\nVoorbeeld: 'Mijn opa rookt 60 jaar en is 90.' Klinkt overtuigend, maar:\n• Hij is een **uitzondering**\n• We weten niet hoe gezond hij echt is\n• Er zijn duizenden rokers die WEL kanker krijgen\n• 1 persoon zegt niets over miljarden mensen" },
            { titel: "Anekdote vs wetenschappelijk bewijs", tekst: "**Wetenschappelijk bewijs** kijkt naar:\n• **Veel mensen** (niet 1)\n• **Lange tijd** gemeten\n• **Vergelijking** met groep die NIET rookt\n• **Statistiek** + analyse\n\nResultaat van duizenden zulke onderzoeken: roken verkort levensverwachting met **gemiddeld 10 jaar** en verhoogt risico op longkanker **15-30×**. Opa was geluk-hebber, geen regel." },
            { titel: "Cito-tip: drogreden 'beroep op anekdote'", tekst: "Veelvoorkomende redeneer-fout op TikTok + in gesprekken:\n• 'Vaccins zijn slecht — mijn neef werd ziek na vaccin'\n• 'Diëet X werkt — mijn buurvrouw verloor 10 kg'\n• 'School in Amerika is beter — mijn neef gaat er heen'\n\n**Antwoord**: vraag naar **systematisch onderzoek**. Wat zeggen 1.000+ mensen? Wat zegt wetenschap? **N=1 is geen bewijs**." },
          ],
          woorden: [
            { woord: "anekdote", uitleg: "Persoonlijk verhaal of 1 voorbeeld. Klein, niet representatief." },
            { woord: "drogreden", uitleg: "Argument dat klinkt goed maar logisch fout is." },
            { woord: "N=1", uitleg: "Wiskundige notatie: groep van 1 persoon. Geen statistiek mogelijk." },
            { woord: "uitzondering", uitleg: "Iemand die niet bij de regel hoort. 1 uitzondering breekt de regel niet." },
          ],
          theorie: "Hoe weet je iets echt? **Wetenschappelijke methode**:\n1. **Hypothese** maken (idee)\n2. **Experiment** opzetten met groot aantal mensen\n3. **Controlegroep** (vergelijking)\n4. **Meten** wat er gebeurt\n5. **Statistiek** analyseren\n6. Andere wetenschappers **herhaald** dezelfde resultaten?\n\nAls JA → **bewijs**. Als NEE of slechts 1 onderzoek → **voorlopige aanwijzing**, geen bewijs.",
          voorbeelden: [
            { type: "feit", tekst: "Roken-onderzoek begon in jaren 1950 toen Doll + Hill 40.000 Britse artsen 50 jaar lang volgden. Pas TOEN was bewijs hard." },
            { type: "feit", tekst: "Eén persoon-verhaal werkt sterker op brein dan 1.000 statistieken — daarom zijn anekdotes overtuigend, ook al kloppen ze niet. Brein-bias." },
          ],
          basiskennis: [{ onderwerp: "Niet onbeleefd", uitleg: "Anekdote-fout aanwijzen ≠ persoonlijke aanval. Mensen geloven het zelf vaak ook." }],
          niveaus: { basis: "1 verhaal is geen bewijs. = A.", simpeler: "1 persoon (zoals opa) is een anekdote, geen wetenschappelijk bewijs. Echte conclusies komen uit onderzoek met veel mensen + statistiek. = A.", nogSimpeler: "Anekdote ≠ bewijs = A." },
        },
      },
      {
        q: "Wat is een **logische fout** in: 'Alle vogels kunnen vliegen. Pinguïns zijn vogels. Dus pinguïns kunnen vliegen'?",
        options: ["Eerste regel is FOUT — niet alle vogels kunnen vliegen", "Conclusie klopt — pinguïns vliegen", "Pinguïns zijn geen vogels", "Vogels bestaan niet"],
        answer: 0,
        wrongHints: [null, "Klopt — pinguïns + struisvogels + emoes vliegen niet, dus regel is onjuist.", "Niet — pinguïns kunnen ECHT niet vliegen. Logica klopt, premisse niet.", "Pinguïns zijn WEL vogels (warmbloedig, eieren, veren).", "Vogels bestaan zeker wel."],
        uitlegPad: {
          stappen: [
            { titel: "Hoe werkt logica?", tekst: "Een redenering werkt met **premissen** (uitspraken) + **conclusie**:\n\n• Premisse 1: 'Alle vogels kunnen vliegen'\n• Premisse 2: 'Pinguïns zijn vogels'\n• Conclusie: 'Pinguïns kunnen vliegen'\n\n**Logisch klopt het redeneren!** Maar... een premisse is FOUT. Conclusie wordt dan ook fout, ondanks goede logica." },
            { titel: "Het foute begint bij premisse 1", tekst: "'**Alle** vogels kunnen vliegen' = **GEEN waar feit**.\n\nVogels die NIET vliegen:\n• **Pinguïn** (zwemt in plaats daarvan)\n• **Struisvogel** (rent — kan 70 km/u)\n• **Emoe**\n• **Kiwi** (uit Nieuw-Zeeland, snuffelt)\n• **Casuaris**\n• Kippen + kalkoenen vliegen ook nauwelijks\n\nDe regel moet zijn: '**De meeste** vogels kunnen vliegen' of 'Vogels met grote vleugels kunnen vliegen'." },
            { titel: "Cito-tip: check eerst premisses", tekst: "Bij elke redenering: **check de uitspraken** voordat je naar de conclusie kijkt.\n\nDit type redenering heet een **syllogisme**. Bekend voorbeeld:\n• 'Alle mensen zijn sterfelijk' (klopt)\n• 'Socrates is een mens' (klopt)\n• 'Socrates is sterfelijk' (klopt) ✓\n\nMaar:\n• 'Alle Russen drinken wodka' (KLOPT NIET — generalisatie)\n• 'Ivan is Russisch'\n• 'Ivan drinkt wodka' ← conclusie fout door foute premisse\n\nMooi voorbeeld van **kritisch denken**: niet alleen kijken of logica klopt, ook of de premisses kloppen." },
          ],
          woorden: [
            { woord: "premisse", uitleg: "Uitspraak die je als basis gebruikt voor een redenering." },
            { woord: "conclusie", uitleg: "Wat je uit de premisses afleidt." },
            { woord: "syllogisme", uitleg: "Logische redenering met 2 premisses en 1 conclusie." },
            { woord: "generalisatie", uitleg: "Algemene uitspraak over hele groep ('Alle X zijn Y'). Vaak te breed." },
          ],
          theorie: "**Twee fouten kunnen optreden:**\n1. **Geldigheid-fout** — logica klopt niet (zelfs met goede premisses kom je tot fout)\n2. **Premisse-fout** — een uitspraak klopt niet (logica wel goed, maar fout aan binnen)\n\nKritisch denken: check beide.",
          voorbeelden: [
            { type: "feit", tekst: "Pinguïns zijn echte vogels — hebben veren, leggen eieren, zijn warmbloedig. Maar vliegen ze NIET. Wel zwemmen ze geweldig — vleugels als peddels." },
            { type: "feit", tekst: "Aristoteles (Grieks filosoof, 384-322 v.Chr.) bedacht het systeem van syllogismen die we nog steeds gebruiken." },
          ],
          basiskennis: [{ onderwerp: "Niet logica-fout", uitleg: "De LOGICA klopt: ALS alle vogels vliegen ÉN pinguïns vogels zijn DAN vliegen pinguïns. Maar premisse 1 is fout, dus conclusie onbruikbaar." }],
          niveaus: { basis: "Premisse 1 klopt niet. = A.", simpeler: "De eerste zin ('alle vogels vliegen') is FOUT — pinguïns/struisvogels vliegen niet. Daarom klopt de conclusie ook niet, ondanks goede logica. = A.", nogSimpeler: "Premisse fout = A." },
        },
      },
      { q: "Wat is **bevestigingsbias**?", options: ["Alleen info zoeken die jouw mening bevestigt","Alle info opnemen","Je mening direct veranderen","Twijfelen over alles"], answer: 0, wrongHints: [null,"Klopt — veelvoorkomende denkfout.","Tegenovergesteld.","Niet — vasthouden, niet veranderen.","Niet relevant."] },
      { q: "Welke vraag is een **kritische** vraag bij een bewering?", options: ["Klopt de bron?","Hoe lang is de zin?","Wie schreef het mooist?","Wat is de kleur?"], answer: 0, wrongHints: [null,"Klopt — bronkritiek.","Niet inhoudelijk.","Stijl, geen inhoud.","Niet relevant."] },
      { q: "*'Hij heeft ongelijk want hij is dom.'* — Welke drogreden?", options: ["Ad hominem","Stroman","Vals dilemma","Cirkelredenering"], answer: 0, wrongHints: [null,"Klopt — aanval op persoon.","Niet — geen verdraaiing.","Niet — geen 2 opties.","Niet — geen herhaling."] },
      { q: "Wat is **nepnieuws**?", options: ["Bewust verzonnen 'nieuws' om mensen te misleiden","Oud nieuws","Slecht-geschreven nieuws","Buitenlands nieuws"], answer: 0, wrongHints: [null,"Klopt — fake news.","Niet — kan wel waar zijn.","Stijl, niet feit.","Niet relevant."] },
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
