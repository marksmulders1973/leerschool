// Leerpad: Kritisch denken + denkfouten - groep 6-8.
// Sluit op digitale-geletterdheid + media-wijsheid. Toets-burgerschap. 1F. 4 stappen.

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
      "**Kritisch denken** = **goed nadenken** voordat je iets gelooft of beslist.\nNiet alles direct geloven. **Vragen stellen**.\n\n**Waarom belangrijk?**\n• Internet vol **valse informatie**.\n• Reclame wil je iets verkopen.\n• Politici willen je stem.\n• Vrienden + familie hebben soms verkeerde info.\n• Kritisch denken is geen wantrouwen, maar een vaardigheid die je kunt leren.\n\n**Kenmerken van een kritische denker**:\n1. **Open** *(luistert naar andere meningen)*.\n2. **Twijfelt** *(zelfs aan eigen ideeën)*.\n3. **Bewijs** *(vraagt: 'hoe weet je dat?')*.\n4. **Bron** *(checkt waar info vandaan komt)*.\n5. **Logisch** *(zoekt verbanden)*.\n6. **Eerlijk** *(geeft toe als hij/zij fout zat)*.\n7. **Niet emotioneel** *(beslist met hoofd, niet alleen hart)*.\n\n**Niet-kritisch denken**:\n• 'Mijn vriend zei het, dus klopt.'\n• 'Ik zag het op TikTok, dus waar.'\n• 'Iedereen doet het, dus normaal.'\n• 'Mijn ouder zei het, dus echt.'\n\n**Kritisch denken**:\n• 'Interessant — heb je een bron?'\n• 'Klinkt te mooi om waar te zijn — laat me checken.'\n• 'Wie heeft hier voordeel van?'\n• 'Wat zegt de tegenstander?'\n\n**Vraag-techniek** *(5 W's)*:\n• **Wie** zegt dit?\n• **Wat** zegt hij precies?\n• **Wanneer** geschreven? *(recent of oud?)*\n• **Waarom** zegt hij dit? *(belang?)*\n• **Waar** kwam info vandaan?\n\n**Voorbeelden**:\n\n**Voorbeeld 1**: 'Eet 1 banaan en word 20 cm groter in 1 week!'\n• **Kritisch**: 'Banaan is gezond maar... 20 cm? Onmogelijk. Wie zegt dit? Een groente-winkel? Te mooi om waar te zijn. **Nee, niet geloven**.'\n\n**Voorbeeld 2**: 'Wetenschappers ontdekken nieuwe planeet.'\n• **Kritisch**: 'Welke wetenschappers? Welke bron? NASA of een blog? Recent of oud? Misschien echt — verifieer bij NOS of NASA.'\n\n**Voorbeeld 3**: 'Sokken zijn slecht voor je voeten — laat ze de hele dag uit!'\n• **Kritisch**: 'Wie heeft belang? Een blote-voet-club? Een sokken-criticus? Vraag huisarts of zoek wetenschap-bron.'\n\n**Kritisch ≠ negatief**:\n• Niet alles **wantrouwen**.\n• Niet **alles afwijzen**.\n• Wel **vragen + checken** voordat je conclusie trekt.\n\n**Wetenschappelijk denken** = vorm van kritisch denken:\n• **Hypothese** *(idee)*.\n• **Experiment** *(test)*.\n• **Resultaten** *(meten)*.\n• **Conclusie** *(klopt hypothese?)*.\n• **Herhaling** *(andere doen zelfde test)*.\n• Pas dan: nieuwe kennis.\n\n**Toets-feitje**:\nVeel **NL-jongeren** *(12-25 jr)* vinden het lastig om **echte info te onderscheiden** van nepnieuws. Daarom: kritisch denken is een **belangrijke 21e-eeuwse vaardigheid**.",
    checks: [
      {
        q: "Wat is **kritisch denken**?",
        options: ["Goed nadenken voor je iets gelooft","Kritiek geven op wat anderen doen","Snel kiezen op je eerste gevoel","Geloven wat de meeste mensen zeggen"],
        answer: 0,
        wrongHints: [null,"Kritiek geven op anderen is iets anders. Gaat kritisch denken over anderen afkraken, of over zelf goed nadenken?","Je eerste gevoel kan je misleiden. Wat doe je bij kritisch denken voordat je iets aanneemt?","Ook veel mensen samen kunnen zich vergissen. Wat doe je zelf voordat je iets gelooft?"],
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
          theorie: "Toets-feit: kritisch denken hoort bij **mediawijsheid** + **digitale geletterdheid**. Belangrijk voor school + later leven. Niet alles op TikTok klopt!",
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
        q: "Wat doe je met **informatie van internet**?",
        options: ["De bron checken en een andere bron zoeken","Het geloven als de site er netjes uitziet","Het geloven als veel mensen het delen","Het geloven als er een foto bij staat"],
        answer: 0,
        wrongHints: [null,"Kan iedereen een nette website maken?","Wordt iets waar omdat veel mensen het delen?","Kan een foto ook nep zijn, of uit een ander verhaal komen?"],
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
          theorie: "Toets-tip betrouwbare bron-niveaus:\n• **Top**: officiële instanties (.gov, .nl van overheid), wetenschappers, grote kranten (NOS, NRC).\n• **Midden**: bekende sites met redactie (Wikipedia voor algemene info).\n• **Laag**: blogs, sociale media zonder controle.\n• **Nul**: anonieme posts, AI-generatie zonder controle.",
          voorbeelden: [
            { type: "stap", tekst: "TikTok-video over 'natuurlijke kanker-genezing'? CHECK: wie zegt het (arts of influencer?), bron (onderzoek of mening?), andere bronnen (klopt dit elders?)." },
            { type: "stap", tekst: "NOS-bericht over verkiezingen? Veiliger want NOS heeft redactie + fact-check, maar nog steeds: vergelijk met andere bronnen voor compleet beeld." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "STOP-truc: STOP voor delen. Check bron + bewijs + andere bron. Dan pas delen of geloven." }],
          niveaus: {
            basis: "Checken bron + andere bronnen + waarom.",
            simpeler: "Bij info: vraag WIE, WAT, WANNEER, WAAROM, WAAR. Dan pas geloven.",
            nogSimpeler: "Checken!",
          },
        },
      },
      {
        q: "Wat is **wetenschappelijk denken**?",
        options: ["Een idee bedenken en dat testen","Iets geloven omdat het al lang zo is","Veel uit boeken overschrijven","Een expert vragen en hem geloven"],
        answer: 0,
        wrongHints: [null,"Test je dan of het echt klopt?","Overschrijven is nog geen testen.","Test je dan zelf of het klopt?"],
      },
    ],
  },
  {
    title: "Veelvoorkomende denkfouten",
    explanation:
      "**Denkfouten** = manieren waarop ons brein **fout** kan zitten.\nIedereen heeft ze — bewustzijn helpt.\n\n**1. Bevestigingsbias** *(confirmation bias)* 🔁:\nWe zoeken info die **bevestigt** wat we al denken. Negeren wat tegenspreekt.\n\n*Voorbeeld*: Iemand denkt 'roken is niet zo erg'. Leest alleen artikelen die dit bevestigen. Negeert ziekte-onderzoek.\n\n**Oplossing**: lees ook **tegen-informatie**. Vraag jezelf: 'Wat zegt de andere kant?'\n\n**2. Anker-effect** ⚓:\nEerste cijfer dat we horen **beïnvloedt** onze schatting — zelfs als willekeurig.\n\n*Voorbeeld*: Verkoper noemt €1000 als prijs. Daarna €600 = lijkt 'koopje'. Maar in werkelijkheid was €400 al genoeg.\n\n**Oplossing**: Vergelijk met andere bronnen — niet alleen anker-getal.\n\n**3. Groepsdruk / Bandwagon** 🚂:\n'Iedereen doet het, dus moet ik ook.'\n\n*Voorbeeld*: Iedereen koopt een bepaalde sneaker. Jij ook — zonder echt te willen.\n\n**Oplossing**: Vraag jezelf: 'Wil ik dit echt? Of doe ik mee?'\n\n**4. Autoriteitsbias** 👨‍🏫:\nWe geloven mensen met **status** automatisch.\n\n*Voorbeeld*: Influencer met 10 miljoen volgers zegt 'product werkt' → wij geloven, ook al heeft hij geen kennis.\n\n**Oplossing**: Check **expertise**. Een arts over medisch? Eerder geloven. Een influencer over medisch? Wantrouwen.\n\n**5. Beschikbaarheids-vooroordeel** 🧠:\nWe overschatten dingen die **vers in geheugen** zijn.\n\n*Voorbeeld*: Na vliegtuig-crash op TV ben je bang om te vliegen. Maar vliegen is **veel veiliger** dan auto.\n\n**Oplossing**: Kijk naar **cijfers**, niet alleen verhalen.\n\n**6. Sunk cost fallacy** 💸:\nWe maken slechte keuzes omdat we al iets investeerden.\n\n*Voorbeeld*: Je begon een boek dat je niet leuk vindt. Maar leest 'door' want 'al 50 bladzijdes gedaan'. Beter: stop, lees iets anders.\n\n**Oplossing**: Vraag: 'Wat zou ik nu kiezen als ik opnieuw kon beginnen?'\n\n**7. Halo-effect** 😇:\nIemand is in 1 ding goed → we denken dat hij/zij **alles** goed kan.\n\n*Voorbeeld*: Een mooie filmster maakt reclame voor een energiedrank → 'als zij dit drinkt, zal het wel gezond zijn'.\n\n**Oplossing**: Beoordeel **per onderwerp**, niet 'overall'.\n\n**8. Survivorship bias** 🏆:\nWe horen alleen over **succes**, niet over **falen**.\n\n*Voorbeeld*: 'Bill Gates stopte met universiteit en werd rijk → niet studeren is OK.'\nMaar — duizenden anderen stopten + werden niet rijk.\n\n**Oplossing**: Vraag: 'Hoeveel mensen probeerden dit + faalden?'\n\n**9. Stereotypering** 👥:\nWe oordelen over groep mensen ipv individu.\n\n*Voorbeeld*: 'Alle ouderen zijn langzaam' → onjuist + oneerlijk.\n\n**Oplossing**: Behandel **elke persoon individueel**.\n\n**10. Emotionele beslissing** ❤️:\nWe besluiten op gevoel ipv feit.\n\n*Voorbeeld*: Beste vriend wil dat je iets koopt → je doet het, ook al heb je geen geld.\n\n**Oplossing**: **Wacht 24 uur** voor grote beslissingen. Slaap erover.\n\n**Toets-feitje**:\n**Daniel Kahneman** *(1934-2024)* won **Nobelprijs Economie 2002** voor onderzoek naar denkfouten. Boek 'Thinking, Fast and Slow' beschrijft 2 denkstijlen: snel + emotioneel *(systeem 1)* en langzaam + logisch *(systeem 2)*. Belangrijk voor begrip menselijk gedrag.",
    checks: [
      {
        q: "Wat is **bevestigingsbias**?",
        options: ["Vooral info zoeken die jou gelijk geeft","Steeds twijfelen aan je eigen idee","Iets geloven omdat een bekend iemand het zegt","Iets doen omdat iedereen het doet"],
        answer: 0,
        wrongHints: [null,"Bij deze denkfout twijfel je juist weinig aan jezelf.","Dat is een andere denkfout: daar gaat het om wie iets zegt.","Dat is een andere denkfout: daar gaat het om wat de groep doet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is bevestigingsbias?", tekst: "**Bevestigingsbias** (Engels: confirmation bias) is een denkfout: we ZOEKEN naar info die ons IDEE BEVESTIGT, en negeren info die het tegenspreekt." },
            { titel: "Voorbeeld", tekst: "Iemand denkt: 'roken is niet zo erg'. Leest alleen artikelen die dit BEVESTIGEN ('mijn opa rookte en werd 90!'). Negeert alle wetenschap die anders zegt." },
            { titel: "Iedereen heeft het", tekst: "Niet alleen 'domme' mensen — IEDEREEN heeft last van deze bias. Ons brein wil graag bevestiging. Bewustzijn helpt om eraan te ontsnappen." },
          ],
          woorden: [
            { woord: "bevestigingsbias", uitleg: "Voorkeur voor info die je idee bevestigt." },
            { woord: "denkfout / bias", uitleg: "Systematische manier waarop ons brein fout zit." },
          ],
          theorie: "Toets-tip kritisch denken: weet dat je BIAS hebt. Vraag bewust: 'wat is de andere kant? Wie spreekt mij tegen?' Lees ook bronnen die NIET met je eens zijn — dan denk je breder.",
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
        q: "Wat is de **sunk cost fallacy**?",
        options: ["Doorgaan omdat je er al veel in stak","Stoppen omdat het niet meer lukt","Iets kiezen omdat het goedkoop is","Kopen omdat iedereen het koopt"],
        answer: 0,
        wrongHints: [null,"Is stoppen als iets niet lukt een denkfout?","Gaat deze denkfout over de prijs nu, of over wat je eerder al uitgaf?","Dat gaat over wat anderen doen."],
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
          theorie: "Toets-tip: sunk cost fallacy = niet alleen geld, ook TIJD + EMOTIE. Een relatie waar je 5 jaar in stak voelt 'te zonde om weg te gooien'. Maar dat is een denkfout — beoordeel op TOEKOMST, niet op verleden.",
          voorbeelden: [
            { type: "stap", tekst: "Bioscoop: film is saai na 30 min. Doorgaan want '€12 betaald'? Nee — die €12 is sowieso weg. Loop weg + doe iets leuks." },
            { type: "stap", tekst: "Voor bedrijven: een project dat €1 mln kostte + nu €5 mln meer kost vs €0,5 mln voor nieuw plan. Slim = nieuw plan, niet voortbouwen op verlies." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Verleden is verleden. Beslis op basis van TOEKOMST. 'Wat zou ik nu kiezen als ik vandaag begon?'" }],
          niveaus: {
            basis: "Sunk cost fallacy = doorgaan omdat je al investeerde (denkfout).",
            simpeler: "Saai boek uitlezen alleen omdat je al 100 bladzijden las = sunk cost fallacy.",
            nogSimpeler: "Doorgaan om verleden",
          },
        },
      },
      {
        q: "Waarom is **stereotypering** fout?",
        options: ["Je beoordeelt een groep, niet de persoon","Omdat het altijd een belediging is","Omdat je het niet hardop mag zeggen","Omdat groepen niet echt bestaan"],
        answer: 0,
        wrongHints: [null,"Ook iets aardigs over een hele groep kan een stereotype zijn.","Gaat het om hardop zeggen, of om hoe je over iemand oordeelt?","Groepen bestaan wel — het gaat om hoe je oordeelt."],
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
          theorie: "Toets-tip: stereotypering is altijd PROBLEMATISCH. Behandel mensen individueel, niet als lid van groep. De wet en de Grondwet beschermen tegen discriminatie.",
          voorbeelden: [
            { type: "stap", tekst: "'Meisjes kunnen geen goede wiskundigen worden' = stereotype = fout (veel meiden TOP in wiskunde)." },
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
        q: "Wie won de **Nobelprijs voor onderzoek naar denkfouten**?",
        options: ["Daniel Kahneman", "Albert Einstein", "Charles Darwin", "Isaac Newton"],
        answer: 0,
        wrongHints: [null, "Einstein kreeg zijn Nobelprijs voor natuurkunde (over licht), niet voor onderzoek naar hoe mensen denkfouten maken — past hij?", "Darwin is beroemd om de evolutietheorie en kreeg trouwens nooit een Nobelprijs — kan hij het zijn?", "Newton onderzocht zwaartekracht en beweging, ver vóór er Nobelprijzen bestonden — hoort hij hier?"],
      },
    ],
  },
  {
    title: "Argumenten herkennen + drogredenen",
    explanation:
      "**Argument** = reden om iets te geloven of doen.\nGoede argumenten zijn **logisch** + hebben **bewijs**.\n\n**Onderdelen van argument**:\n• **Stelling** *(wat je beweert)*.\n• **Reden** *(waarom)*.\n• **Bewijs** *(feiten, voorbeelden)*.\n\n**Voorbeeld goed argument**:\n*'Roken is slecht voor je gezondheid.'* *(stelling)*\n*'Omdat het longkanker veroorzaakt.'* *(reden)*\n*'Studies tonen: ~90% van de longkanker komt voor bij rokers.'* *(bewijs)*\n\n**Voorbeeld slecht argument**:\n*'Roken is slecht.'*\n*'Omdat mijn moeder het zegt.'*\n*'Geen verdere reden.'*\n\n**Drogredenen** = **slechte argumenten** die er **goed** uitzien.\nHerkennen helpt je niet bedrogen te worden.\n\n**1. Persoonsaanval (ad hominem)** 👤:\nAanval op **persoon** ipv argument.\n\n*Voorbeeld*: 'Je hoeft niet naar Marieke te luisteren — ze is dom.'\n\n**Fout**: Dat zegt niets over of Mariekes idee klopt.\n\n**2. Stroman** 🥒:\nVervalst het argument van de tegenstander om het gemakkelijker aan te vallen.\n\n*Voorbeeld*: 'Jij wilt minder zout in eten? Je wilt dus dat we **smaakloos** eten? Nee!'\n\n**Fout**: Niet wat ander zei. Minder zout ≠ geen zout.\n\n**3. Vals dilemma** *('óf-óf')*:\nMaakt alsof er **maar 2 opties** zijn.\n\n*Voorbeeld*: 'Je bent voor ons OF je bent tegen ons.'\n\n**Fout**: Vaak meer dan 2 opties *(neutraal, beide soms, eigen mening)*.\n\n**4. Beroep op meerderheid** 👥:\n'Iedereen doet het, dus klopt het.'\n\n*Voorbeeld*: '80% gelooft dit, dus waar.'\n\n**Fout**: Meerderheid kan **fout** zijn. Vroeger geloofde de meerderheid dat de zon om de aarde draaide.\n\n**5. Hellende-vlak (slippery slope)** 🛝:\n'Als A, dan B, dan C, dan rampscenario.'\n\n*Voorbeeld*: 'Als we gokken legaliseren, gaan kinderen gokken, dan worden zij verslaafd, dan stort de samenleving in.'\n\n**Fout**: Stappen niet bewezen — meestal niet zo extreem.\n\n**6. Beroep op autoriteit** 👨‍🏫:\n'X zegt het, dus waar.'\n\n*Voorbeeld*: 'Beroemde acteur zegt dat dieet werkt, dus werkt het.'\n\n**Fout**: Acteur = geen voedingsexpert. Check echte expert.\n\n**7. Beroep op traditie** 🏛️:\n'We doen het altijd zo, dus het is goed.'\n\n*Voorbeeld*: 'Vrouwen blijven thuis — zo deden onze voorouders ook.'\n\n**Fout**: 'Altijd zo' = niet automatisch goed. Slavernij was 'altijd zo' — toch fout.\n\n**8. Beroep op emotie** 😢:\nManipuleert met angst, schaamte, medelijden.\n\n*Voorbeeld*: 'Koop dit nu, anders denk je later: 'wat als ik het had gedaan?'' *(spijt-angst)*.\n\n**Fout**: Speelt op gevoel, niet op feit.\n\n**9. Post hoc ergo propter hoc** *('na, dus door')*:\n'A gebeurde voor B, dus A veroorzaakte B.'\n\n*Voorbeeld*: 'Na vaccinatie kreeg mijn kind autisme — vaccin veroorzaakt autisme.'\n\n**Fout**: Correlatie ≠ causaliteit. Andere oorzaak mogelijk. Wetenschap heeft dit weerlegd.\n\n**10. Cherry picking** 🍒:\nKies **gunstige** feiten, negeer de rest.\n\n*Voorbeeld*: '1 wetenschapper twijfelt aan klimaatverandering, dus het is niet bewezen.'\n\n**Fout**: 97% van de klimaatwetenschappers is het er wel over eens — 1 uitzondering ≠ doorslag.\n\n**Hoe omgaan met drogredenen?**\n• **Herken** ze — dat helpt al veel.\n• **Vraag om bewijs**: 'Wat is de bron?'\n• **Wijs vriendelijk op**: 'Klopt je argument logisch?'\n• Bij online discussie: **stap weg** — je hoeft niet elke ruzie te winnen.\n\n**Toets-feitje**:\nDrogredenen zijn al bekend sinds **Oude Grieken** *(Aristoteles, 4e eeuw v.Chr.)*. Hij maakte een lijst van **denkfouten in argumenten**. Daarom heten ze 'klassieke drogredenen' — bestaan **al 2400 jaar**.",
    checks: [
      {
        q: "Wat is een **ad hominem**?",
        options: ["De persoon aanvallen, niet het argument","Doen alsof er maar twee keuzes zijn","Kritische vragen stellen over het argument","Zeggen dat de meeste mensen het vinden"],
        answer: 0,
        wrongHints: [null,"Dat is een andere drogreden: het vals dilemma.","Is een vraag stellen een drogreden?","Dat is 'iedereen doet het'."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is ad hominem?", tekst: "**Ad hominem** is Latijns voor 'op de man'. Het is een **drogreden** waarbij je niet het ARGUMENT aanvalt maar de PERSOON die het zegt. Onhoudbaar in een goede discussie." },
            { titel: "Voorbeeld", tekst: "Marieke zegt: 'Roken is slecht voor je gezondheid.'\n**Ad hominem-reactie**: 'Wat weet jij ervan, je hebt zelfs geen rijbewijs!'\n**Probleem**: Mariekes rijbewijs heeft NIETS te maken met of haar argument over roken klopt. Aanval op persoon = ontwijken van argument." },
            { titel: "Hoe reageer je goed?", tekst: "Een **eerlijk argument**:\n• Reageer op WAT iemand zegt, niet WIE.\n• Vraag bewijs: 'Hoe weet je dat?'\n• Eens of oneens: gebruik feiten + redenen, geen scheldwoorden.\n• Als iemand jou ad hominem aanvalt: blijf rustig + verwijs naar je argument." },
          ],
          woorden: [
            { woord: "ad hominem", uitleg: "Latijn 'op de man' = persoonsaanval ipv argument-aanval." },
            { woord: "drogreden", uitleg: "Slecht argument dat goed lijkt." },
          ],
          theorie: "Toets-feit ad hominem: vaak gezien in politieke debatten + sociale media-ruzies. Mensen vallen elkaar persoonlijk aan ipv inhoudelijk te discussiëren. Aristoteles beschreef dit al in 4e eeuw v.Chr. als drogreden.",
          voorbeelden: [
            { type: "stap", tekst: "Slecht: 'Je hebt geen recht van spreken — je hebt geen kinderen!' (aanval persoon)" },
            { type: "stap", tekst: "Goed: 'Ik begrijp je punt, maar wat is je bewijs?' (aanval argument)" },
            { type: "stap", tekst: "Politiek voorbeeld: 'Onze tegenstander is een leugenaar' = ad hominem. 'De plannen van tegenstander berusten op verkeerde cijfers omdat...' = inhoudelijk." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Goede discussie = bal spelen, niet man spelen. Aanval ARGUMENT, niet PERSOON." }],
          niveaus: {
            basis: "Ad hominem = aanval op persoon ipv argument.",
            simpeler: "In plaats van te reageren op WAT iemand zegt, ga je tegen WIE hij is. Drogreden.",
            nogSimpeler: "Persoon aanvallen",
          },
        },
      },
      {
        q: "Wat is een **stroman**-drogreden?",
        options: ["Het argument van de ander verdraaien","Een nep-account dat berichten plaatst","Een voorbeeld van één persoon geven","De persoon aanvallen, niet het argument"],
        answer: 0,
        wrongHints: [null,"Het gaat hier om een drogreden: wat gebeurt er met een argument?","Dat is een andere fout: één voorbeeld is nog geen bewijs.","Bij deze drogreden val je niet de persoon aan."],
      },
      {
        q: "Waarom is **'iedereen doet het'** een drogreden?",
        options: ["Omdat een grote groep ook fout kan zijn", "Omdat het altijd een leugen is", "Omdat de groep te klein is", "Omdat je zelf iets anders wilt"],
        answer: 0,
        wrongHints: [null, "Wat veel mensen doen, kan best kloppen — waarom is de reden dan zwak?", "Is de grootte van de groep het probleem?", "Gaat het om wat jij wilt, of om of de reden klopt?"],
      },
      {
        q: "Wie maakte de **eerste lijst met drogredenen**?",
        options: ["Aristoteles", "Newton", "Einstein", "Galileï"],
        answer: 0,
        wrongHints: [null, "Newton onderzocht zwaartekracht.", "Einstein leefde pas in de 20e eeuw — de lijst is veel ouder.", "Galileï keek vooral naar de sterren."],
      },
    ],
  },
  {
    title: "Eind-toets — kritisch mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wat is **kritisch denken**?", options: ["Goed nadenken voor je iets gelooft","Kritiek geven op wat anderen doen","Snel kiezen op je eerste gevoel","Geloven wat de meeste mensen zeggen"], answer: 0, wrongHints: [null,"Kritiek geven op anderen is iets anders. Gaat kritisch denken over anderen afkraken, of over zelf goed nadenken?","Je eerste gevoel kan je misleiden. Wat doe je bij kritisch denken voordat je iets aanneemt?","Ook veel mensen samen kunnen zich vergissen. Wat doe je zelf voordat je iets gelooft?"] },
      { q: "Wat is **bevestigingsbias**?", options: ["Vooral info zoeken die jou gelijk geeft","Steeds twijfelen aan je eigen idee","Iets geloven omdat een bekend iemand het zegt","Iets doen omdat iedereen het doet"], answer: 0, wrongHints: [null,"Bij deze denkfout twijfel je juist weinig aan jezelf.","Dat is een andere denkfout: daar gaat het om wie iets zegt.","Dat is een andere denkfout: daar gaat het om wat de groep doet."] },
      { q: "Wat zijn **drogredenen**?", options: ["Slechte argumenten die goed lijken","Sterke argumenten die goed kloppen","Feiten die door onderzoek bewezen zijn","Ruzies over wie er gelijk heeft"], answer: 0, wrongHints: [null,"Kloppen drogredenen echt?","Een feit is geen argument dat slecht kan zijn.","Een drogreden is geen ruzie, maar een soort argument."] },
      { q: "Waarom is **stereotypering** fout?", options: ["Je beoordeelt een groep, niet de persoon","Omdat het altijd een belediging is","Omdat je het niet hardop mag zeggen","Omdat groepen niet echt bestaan"], answer: 0, wrongHints: [null,"Ook iets aardigs over een hele groep kan een stereotype zijn.","Gaat het om hardop zeggen, of om hoe je over iemand oordeelt?","Groepen bestaan wel — het gaat om hoe je oordeelt."] },
      { q: "Wie won een **Nobelprijs voor onderzoek naar denkfouten**?", options: ["Daniel Kahneman", "Albert Einstein", "Charles Darwin", "Aristoteles"], answer: 0, wrongHints: [null, "Einstein kreeg een Nobelprijs voor natuurkunde.", "Darwin kreeg nooit een Nobelprijs.", "Aristoteles leefde lang vóór er Nobelprijzen bestonden."] },
      { q: "Wat is **cherry picking**?", options: ["Alleen de feiten noemen die jou goed uitkomen","Steeds van mening veranderen","Napraten wat een bekend persoon zegt","Twee kanten eerlijk bekijken"], answer: 0, wrongHints: [null,"Bij deze denkfout verander je niet van mening — wat doe je met de feiten?","Dat is een andere denkfout: daar gaat het om wie iets zegt.","Dat is juist het tegenovergestelde."] },
      {
        q: "Wat is **fake news**?",
        options: ["Verzonnen berichten die doen alsof ze waar zijn","Grappig nieuws dat duidelijk een grap is","Reclame voor een nieuw product","Nieuws dat uit een ander land komt"],
        answer: 0,
        wrongHints: [null, "Grappig nieuws, zoals De Speld, laat duidelijk zien dat het een grap is.", "Reclame wil je iets laten kopen — is dat hetzelfde als verzonnen nieuws?", "Buitenlands nieuws is gewoon nieuws — niet fake."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is fake news?", tekst: "**Fake news** = **nep-nieuws**. Informatie die niet klopt, maar gepresenteerd wordt als waar. Verspreid vooral via **social media** (TikTok, Instagram, X/Twitter, Whatsapp).\n\nTwee soorten:\n• **Misinformatie** — onjuist maar zonder kwade bedoeling (per ongeluk gedeeld)\n• **Desinformatie** — onjuist + bewust verspreid om mensen te misleiden" },
            { titel: "Hoe herken je fake news?", tekst: "**6 vragen om te stellen**:\n1. **Wie schreef het?** Onbekende auteur? Verdacht.\n2. **Welke bron?** Niet-bekende website? Check een andere bron.\n3. **Wanneer geschreven?** Oude foto's worden vaak misbruikt voor nieuwe verhalen.\n4. **Klopt het met andere bronnen?** Check NOS, NRC, een echte krant.\n5. **Past het bij de URL?** 'nu.nl-tracking.com' = nep, alleen 'nu.nl' echt.\n6. **Wekt het sterke emoties op?** Fake news is vaak boos/bang-makend → klik-bait." },
            { titel: "Toets-feit: fake news in NL + AI", tekst: "**2024 trends**:\n• **AI-deepfakes** — video waarin iemand iets zegt wat hij/zij nooit zei (gemaakt met AI)\n• **AI-stem-fraude** — oplichter belt 'mama, ik heb geld nodig' met AI-stem familie\n• **Whatsapp-kettingberichten** — vaak fake (delen niet)\n• Veel Nederlanders hebben moeite met het onderscheiden van echt en fake\n\nNL **Mediawijsheid-week** elk najaar → leert kinderen kritisch lezen." },
          ],
          woorden: [
            { woord: "fake news", uitleg: "Engelse term voor nepnieuws. Onjuiste info verspreid als waar." },
            { woord: "deepfake", uitleg: "AI-gemaakte video/audio waarin iemand iets zegt wat hij/zij niet zei." },
            { woord: "factchecker", uitleg: "Persoon of website die beweringen controleert. NL: NU.nl-factcheck, ANP-factcheck." },
            { woord: "broncheck", uitleg: "Controleren wie iets schreef + waar het vandaan komt." },
          ],
          theorie: "Betrouwbare bronnen voor kinderen:\n• **NOS Jeugdjournaal** — speciaal voor 9-12 jaar\n• **Junior Bibliotheek** — kindvriendelijke info\n• **Kennisnet** — onderwijs-platform\n• **Wikipedia** — vaak goed maar altijd bron-vermelding checken\n\nMijden: random TikTok-claims, kettingberichten, websites zonder 'over ons'-pagina.",
          voorbeelden: [
            { type: "feit", tekst: "Tijdens Corona (2020-2022) gingen veel fake nieuwsverhalen rond: 'vaccins veroorzaken X'. Onderzoek liet telkens zien dat dit niet klopte." },
            { type: "feit", tekst: "AI kan in 2024 in 30 seconden een fotoperfecte deepfake-video maken — onmogelijk visueel te onderscheiden zonder tools." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen ouderen", uitleg: "Studies tonen: kinderen + tieners zijn SOMS MEER vatbaar voor fake news omdat ze meer op TikTok/Insta vertrouwen." }],
          niveaus: { basis: "Nepnieuws.", simpeler: "Fake news = nieuws/info dat NIET klopt maar wel gedeeld wordt alsof het waar is. Komt vooral van social media. Check altijd 2 bronnen.", nogSimpeler: "Nepnieuws" },
        },
      },
      {
        q: "Wat doe je als iemand zegt: **'Mijn opa rookt en is 90 — dus roken is gezond'**?",
        options: ["Eén voorbeeld is nog geen bewijs","Geloven, want opa is het bewijs","Klopt, oude mensen weten het best","Zeggen dat opa liegt over zijn leeftijd"],
        answer: 0,
        wrongHints: [null,"Zegt één opa iets over miljoenen andere rokers?","Weet iemand iets zeker alleen omdat hij oud is?","Opa kan echt 90 zijn — maar zegt dat iets over alle rokers?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een anekdote?", tekst: "Een **anekdote** is een **persoonlijk verhaal** of **1 voorbeeld**. Op zich niet erg, maar als **bewijs** is het zwak.\n\nVoorbeeld: 'Mijn opa rookt 60 jaar en is 90.' Klinkt overtuigend, maar:\n• Hij is een **uitzondering**\n• We weten niet hoe gezond hij echt is\n• Er zijn duizenden rokers die WEL kanker krijgen\n• 1 persoon zegt niets over miljarden mensen" },
            { titel: "Anekdote vs wetenschappelijk bewijs", tekst: "**Wetenschappelijk bewijs** kijkt naar:\n• **Veel mensen** (niet 1)\n• **Lange tijd** gemeten\n• **Vergelijking** met groep die NIET rookt\n• **Statistiek** + analyse\n\nResultaat van duizenden zulke onderzoeken: roken verkort levensverwachting met **gemiddeld 10 jaar** en verhoogt risico op longkanker **15-30×**. Opa was een geluksvogel, geen regel." },
            { titel: "Toets-tip: drogreden 'beroep op anekdote'", tekst: "Veelvoorkomende redeneer-fout op TikTok + in gesprekken:\n• 'Vaccins zijn slecht — mijn neef werd ziek na vaccin'\n• 'Dieet X werkt — mijn buurvrouw verloor 10 kg'\n• 'School in Amerika is beter — mijn neef gaat erheen'\n\n**Antwoord**: vraag naar **systematisch onderzoek**. Wat zeggen 1.000+ mensen? Wat zegt wetenschap? **N=1 is geen bewijs**." },
          ],
          woorden: [
            { woord: "anekdote", uitleg: "Persoonlijk verhaal of 1 voorbeeld. Klein, niet representatief." },
            { woord: "drogreden", uitleg: "Argument dat goed klinkt maar logisch fout is." },
            { woord: "N=1", uitleg: "Wiskundige notatie: groep van 1 persoon. Geen statistiek mogelijk." },
            { woord: "uitzondering", uitleg: "Iemand die niet bij de regel hoort. 1 uitzondering breekt de regel niet." },
          ],
          theorie: "Hoe weet je iets echt? **Wetenschappelijke methode**:\n1. **Hypothese** maken (idee)\n2. **Experiment** opzetten met groot aantal mensen\n3. **Controlegroep** (vergelijking)\n4. **Meten** wat er gebeurt\n5. **Statistiek** analyseren\n6. Vinden andere wetenschappers bij **herhaling** dezelfde resultaten?\n\nAls JA → **bewijs**. Als NEE of slechts 1 onderzoek → **voorlopige aanwijzing**, geen bewijs.",
          voorbeelden: [
            { type: "feit", tekst: "Roken-onderzoek begon in jaren 1950 toen Doll + Hill 40.000 Britse artsen 50 jaar lang volgden. Pas TOEN was bewijs hard." },
            { type: "feit", tekst: "Eén persoon-verhaal werkt sterker op brein dan 1.000 statistieken — daarom zijn anekdotes overtuigend, ook al kloppen ze niet. Brein-bias." },
          ],
          basiskennis: [{ onderwerp: "Niet onbeleefd", uitleg: "Anekdote-fout aanwijzen ≠ persoonlijke aanval. Mensen geloven het zelf vaak ook." }],
          niveaus: { basis: "1 verhaal is geen bewijs.", simpeler: "1 persoon (zoals opa) is een anekdote, geen wetenschappelijk bewijs. Echte conclusies komen uit onderzoek met veel mensen + statistiek.", nogSimpeler: "Anekdote ≠ bewijs" },
        },
      },
      {
        q: "Wat is een **logische fout** in: 'Alle vogels kunnen vliegen. Pinguïns zijn vogels. Dus pinguïns kunnen vliegen'?",
        options: ["De eerste zin klopt niet","De conclusie is gewoon waar","De tweede zin klopt niet","Geen enkele zin klopt"],
        answer: 0,
        wrongHints: [null,"Kunnen pinguïns echt vliegen?","Zijn pinguïns vogels? Denk aan veren en eieren.","Klopt de zin 'Pinguïns zijn vogels' dan ook niet?"],
        uitlegPad: {
          stappen: [
            { titel: "Hoe werkt logica?", tekst: "Een redenering werkt met **premissen** (uitspraken) + **conclusie**:\n\n• Premisse 1: 'Alle vogels kunnen vliegen'\n• Premisse 2: 'Pinguïns zijn vogels'\n• Conclusie: 'Pinguïns kunnen vliegen'\n\n**Logisch klopt het redeneren!** Maar... een premisse is FOUT. Conclusie wordt dan ook fout, ondanks goede logica." },
            { titel: "Het foute begint bij premisse 1", tekst: "'**Alle** vogels kunnen vliegen' = **GEEN waar feit**.\n\nVogels die NIET vliegen:\n• **Pinguïn** (zwemt in plaats daarvan)\n• **Struisvogel** (rent — kan 70 km/u)\n• **Emoe**\n• **Kiwi** (uit Nieuw-Zeeland, snuffelt)\n• **Casuaris**\n• Kippen + kalkoenen vliegen ook nauwelijks\n\nDe regel moet zijn: '**De meeste** vogels kunnen vliegen'." },
            { titel: "Toets-tip: check eerst premisses", tekst: "Bij elke redenering: **check de uitspraken** voordat je naar de conclusie kijkt.\n\nDit type redenering heet een **syllogisme**. Bekend voorbeeld:\n• 'Alle mensen zijn sterfelijk' (klopt)\n• 'Socrates is een mens' (klopt)\n• 'Socrates is sterfelijk' (klopt) ✓\n\nMaar:\n• 'Alle Russen drinken wodka' (KLOPT NIET — generalisatie)\n• 'Ivan is Russisch'\n• 'Ivan drinkt wodka' ← conclusie fout door foute premisse\n\nMooi voorbeeld van **kritisch denken**: niet alleen kijken of logica klopt, ook of de premisses kloppen." },
          ],
          woorden: [
            { woord: "premisse", uitleg: "Uitspraak die je als basis gebruikt voor een redenering." },
            { woord: "conclusie", uitleg: "Wat je uit de premisses afleidt." },
            { woord: "syllogisme", uitleg: "Logische redenering met 2 premisses en 1 conclusie." },
            { woord: "generalisatie", uitleg: "Algemene uitspraak over hele groep ('Alle X zijn Y'). Vaak te breed." },
          ],
          theorie: "**Twee fouten kunnen optreden:**\n1. **Geldigheid-fout** — logica klopt niet (zelfs met goede premisses kom je tot fout)\n2. **Premisse-fout** — een uitspraak klopt niet (logica wel goed, maar de inhoud klopt niet)\n\nKritisch denken: check beide.",
          voorbeelden: [
            { type: "feit", tekst: "Pinguïns zijn echte vogels — hebben veren, leggen eieren, zijn warmbloedig. Maar ze vliegen NIET. Wel zwemmen ze geweldig — vleugels als peddels." },
            { type: "feit", tekst: "Aristoteles (Grieks filosoof, 384-322 v.Chr.) bedacht het systeem van syllogismen die we nog steeds gebruiken." },
          ],
          basiskennis: [{ onderwerp: "Niet logica-fout", uitleg: "De LOGICA klopt: ALS alle vogels vliegen ÉN pinguïns vogels zijn DAN vliegen pinguïns. Maar premisse 1 is fout, dus conclusie onbruikbaar." }],
          niveaus: { basis: "Premisse 1 klopt niet.", simpeler: "De eerste zin ('alle vogels vliegen') is FOUT — pinguïns/struisvogels vliegen niet. Daarom klopt de conclusie ook niet, ondanks goede logica.", nogSimpeler: "Premisse fout" },
        },
      },
      { q: "Wat is **bevestigingsbias**?", options: ["Alleen zoeken naar wat jou gelijk geeft","Geloven wat een bekend persoon zegt","Je mening meteen veranderen bij twijfel","Overal aan twijfelen, ook aan feiten"], answer: 0, wrongHints: [null,"Dat is een andere denkfout: daar gaat het om wie iets zegt.","Verander je bij deze denkfout makkelijk van mening?","Twijfel je bij deze denkfout veel, of juist weinig?"] },
      { q: "Welke vraag is een **kritische** vraag bij een bewering?", options: ["Klopt de bron?","Vind ik het leuk?","Hoeveel likes heeft het?","Is het lekker kort?"], answer: 0, wrongHints: [null, "Of iets leuk is, zegt niets over of het klopt.", "Veel likes maakt iets nog niet waar.", "De lengte zegt niets over of het klopt."] },
      { q: "Welke drogreden zit in: *'Hij heeft ongelijk want hij is dom.'*?", options: ["Ad hominem","Stroman","Vals dilemma","Cirkelredenering"], answer: 0, wrongHints: [null, "Wordt hier een argument verdraaid?", "Worden er twee keuzes gegeven?", "Wordt hier iets herhaald als bewijs?"] },
      { q: "Wat is **nepnieuws**?", options: ["Verzonnen nieuws om mensen te misleiden","Nieuws dat al een paar jaar oud is","Nieuws met veel spelfouten erin","Nieuws dat uit het buitenland komt"], answer: 0, wrongHints: [null,"Oud nieuws kan nog steeds waar zijn.","Is nieuws met fouten meteen niet waar?","Is nieuws uit een ander land daarom nep?"] },
      { q: "Wat is **groepsdruk**?", options: ["Iets doen omdat je vrienden het willen","Zelf kiezen wat jij wilt doen","Je eenzaam voelen zonder vrienden","Ruzie hebben met je vriendengroep"], answer: 0, wrongHints: [null,"Waar komt bij groepsdruk de druk vandaan?","Gaat het om alleen zijn, of om meedoen?","Ruzie is iets anders dan druk om mee te doen."] },
      { q: "Wat is **logisch redeneren**?", options: ["Stap voor stap naar een conclusie denken","Doen wat je gevoel je zegt","Veel feiten uit je hoofd leren","De mening van een expert volgen"], answer: 0, wrongHints: [null, "Kan je gevoel je ook misleiden?", "Feiten kennen is nog geen redeneren.", "Denk je dan zelf na?"] },
      { q: "Welke denkfout zit in: *'Iedereen vindt dit, dus het klopt.'*?", options: ["Argument van populariteit","Cherry picking","Ad hominem","Bevestigingsbias"], answer: 0, wrongHints: [null,"Worden hier alleen gunstige feiten gekozen?","Wordt er iemand persoonlijk aangevallen?","Zoekt iemand hier zelf naar informatie?"] },
      { q: "Welke denkfout zit in: *'Vroeger was alles beter.'*?", options: ["Nostalgie-bias","Vals dilemma","Stroman","Ad hominem"], answer: 0, wrongHints: [null, "Worden hier twee keuzes gegeven?", "Wordt hier iemands argument verdraaid?", "Wordt er iemand persoonlijk aangevallen?"] },
      { q: "Welke denkfout zit in: *'Hij maakte een fout, dus alles wat hij zegt klopt niet.'*?", options: ["Persoonsaanval","Vals dilemma","Stroman-drogreden","Bevestigingsbias"], answer: 0, wrongHints: [null,"Worden hier maar twee keuzes gegeven?","Wordt iemands argument verdraaid?","Zoekt iemand hier zelf naar informatie die hem gelijk geeft?"] },
      { q: "Wat is **correlatie ≠ causatie**?", options: ["Samen voorkomen betekent niet dat het een het ander veroorzaakt","Samen voorkomen bewijst dat het een het ander veroorzaakt","Wat eerst gebeurt, is de oorzaak van wat erna komt","Twee dingen die samen voorkomen, zijn toeval"], answer: 0, wrongHints: [null, "Dat is precies de denkfout waarvoor gewaarschuwd wordt.", "Is iets dat eerder gebeurt vanzelf de oorzaak?", "Soms is het wél oorzaak en gevolg — wat zegt de regel precies?"] },
      { q: "Wat is **objectief** versus **subjectief**?", options: ["Objectief = feiten; subjectief = mening","Objectief = waar; subjectief = gelogen","Objectief = mening; subjectief = feiten","Objectief = nieuws; subjectief = reclame"], answer: 0, wrongHints: [null, "Een mening is geen leugen — wat is het dan?", "Kijk goed welke kant het op is.", "Ook nieuws kan een mening bevatten — waar gaat het verschil echt om?"] },
      { q: "Wat doe je bij een **claim** zonder bewijs?", options: ["Vragen naar bewijs of een bron","Geloven als het logisch klinkt","Kijken of veel mensen het geloven","Geloven als het in een filmpje staat"], answer: 0, wrongHints: [null, "Klinkt logisch is nog geen bewijs.", "Maakt het aantal mensen iets waar?", "Een filmpje kan ook nep zijn."] },
      { q: "Wat is een **drogreden**?", options: ["Argument dat klopt lijkt, maar fout is","Een feit dat door onderzoek bewezen is","Een vraag die je aan iemand stelt","Reclame die je iets wil laten kopen"], answer: 0, wrongHints: [null,"Een bewezen feit is juist sterk.","Is een vraag een argument?","Reclame kán drogredenen gebruiken, maar is er zelf geen."] },
      { q: "Is *'Je bent voor of tegen ons.'* een **drogreden**?", options: ["Ja — er zijn meer keuzes","Nee — er zijn maar twee keuzes","Nee — het is een eerlijke vraag","Ja — het is een persoonsaanval"], answer: 0, wrongHints: [null, "Zijn er echt maar twee keuzes?", "Word je hier echt iets gevraagd, of in een hokje gezet?", "Wordt er iemand persoonlijk aangevallen?"] },
      { q: "Is *'A omdat A, en A omdat A.'* een **drogreden**?", options: ["Ja — het 'bewijst' zichzelf","Nee — het is geen drogreden","Nee — twee keer gezegd, dus het klopt","Ja — het is een stroman"], answer: 0, wrongHints: [null, "Bewijst 'A omdat A' echt iets?", "Wordt iets waarder als je het herhaalt?", "Wordt iemands argument verdraaid?"] },
      { q: "Wat is een **goed argument**?", options: ["Een standpunt met bewijs of een goede reden","Een mening die je heel stellig zegt","De mening van een bekend persoon","Eén voorbeeld van één persoon"], answer: 0, wrongHints: [null, "Hard roepen maakt een mening nog niet sterk.", "Wie het zegt, is nog geen bewijs.", "Eén voorbeeld is nog geen bewijs."] },
      { q: "Wat doe je bij **twijfelachtig nieuws**?", options: ["Het checken bij een andere bron","Direct delen met je vrienden","Vragen wat je vrienden ervan vinden","Geloven, want het is nieuws"], answer: 0, wrongHints: [null,"Wat als het niet klopt en jij het al gedeeld hebt?","Weten je vrienden of het klopt?","Is alles wat als nieuws wordt gebracht ook waar?"] },
      { q: "Wat is een **autoriteits-drogreden**?", options: ["Iets waar noemen omdat een baas of ster het zegt","Iets waar noemen omdat heel veel mensen het zeggen","Een bron noemen waar echt bewijs in staat","Iemand persoonlijk aanvallen"], answer: 0, wrongHints: [null, "Daar gaat het om hoeveel mensen iets vinden.", "Een bron mét bewijs is juist goed.", "Dat is ad hominem."] },
      { q: "Hoe leer je **kritisch denken**?", options: ["Vragen stellen en bronnen checken","Veel feiten uit je hoofd leren","Overal tegenin gaan","Alleen naar je beste vriend luisteren"], answer: 0, wrongHints: [null, "Feiten kennen is fijn, maar check je dan ook iets?", "Overal tegen zijn is ook niet goed nadenken.", "Ook een vriend kan het mis hebben."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kritischDenkenPo = {
  id: "kritisch-denken-po",
  title: "Kritisch denken + denkfouten (groep 6-8, Doorstroomtoets-stof)",
  emoji: "🤔",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / 21e-eeuwse vaardigheden",
  prerequisites: [
    { id: "digitale-geletterdheid-po", title: "Digitale geletterdheid", niveau: "1F" },
  ],
  intro:
    "Kritisch denken voor groep 6-8, Doorstroomtoets-stof — wat is kritisch denken (5 W's + niet alles geloven) + 10 denkfouten (bevestigingsbias/anker/groepsdruk/halo/sunk cost - Daniel Kahneman) + 10 drogredenen (ad hominem/stroman/vals dilemma/cherry picking - Aristoteles). Sluit op digitale-geletterdheid. ~15 min.",
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
