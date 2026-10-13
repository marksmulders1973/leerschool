// Leerpad: AI & machine learning — Informatica HAVO/VWO
// Wat is AI, machine learning (leren uit data), soorten + generatieve AI,
// data/bias/ethiek. 4 stappen × ~3 checks.

const stepEmojis = ["🤖", "📊", "🧠", "⚖️"];

const chapters = [
  { letter: "A", title: "Wat is AI?", emoji: "🤖", from: 0, to: 0 },
  { letter: "B", title: "Machine learning = leren uit data", emoji: "📊", from: 1, to: 1 },
  { letter: "C", title: "Soorten & generatieve AI", emoji: "🧠", from: 2, to: 2 },
  { letter: "D", title: "Data, bias & ethiek", emoji: "⚖️", from: 3, to: 3 },
];

const steps = [
  // ─── A. Wat is AI? ────────────────────────────────────────
  {
    title: "Wat is kunstmatige intelligentie (AI)?",
    explanation:
      "**Kunstmatige intelligentie** (AI, Artificial Intelligence) is het vermogen van computers om taken te doen waar normaal **menselijke intelligentie** voor nodig lijkt: patronen herkennen, taal begrijpen, beslissingen nemen, leren.\n\n**Smal vs algemeen:**\n• **Smalle AI** (narrow AI) — goed in **één** taak: een schaakcomputer, een spamfilter, gezichtsherkenning, een chatbot, route-navigatie. **Alle AI die nu bestaat is smal.**\n• **Algemene AI** (AGI) — zou net als een mens *alles* kunnen leren. Bestaat (nog) **niet** — science fiction.\n\n**Belangrijk om te onthouden:**\n• AI is **niet bewust** en 'begrijpt' niet zoals een mens. Het **rekent met patronen** uit data.\n• AI kan zelfverzekerd klinken én er tóch naast zitten ('hallucineren').\n\n**Waar kom je AI tegen?** Aanbevelingen (YouTube/Netflix/Spotify), spraakassistenten, vertaal-apps, foto-filters, zelfrijdende auto's, medische beeldanalyse, en chatbots.\n\nKort: AI = software die **slim lijkt** door patronen in data te gebruiken — krachtig, maar geen tovenarij en geen bewustzijn.",
    checks: [
      {
        q: "Wat geldt voor **alle AI die nu bestaat**?",
        options: ["Het is 'smalle' AI", "Het is 'algemene' AI", "Het kan alles wat een mens kan", "Het volgt vaste als-dan-regels"],
        answer: 0,
        wrongHints: [null, "Algemene AI (AGI) zou álles kunnen leren wat een mens kan. Bestaat dat al?", "Dat zou algemene AI (AGI) zijn — bestaat nog niet.", "Veel AI leert juist uit data in plaats van uit getypte regels. Geldt dit dan voor álle AI?"],
        uitlegPad: {
          stappen: [{ titel: "Smal = één taak", tekst: "Alle huidige AI is **smalle AI** (narrow): heel goed in **één** taak (schaken, spamfilter, chatten, gezichtsherkenning). **Algemene AI** (AGI), die net als een mens álles kan leren, bestaat (nog) niet. AI is bovendien **niet bewust**." }],
          niveaus: { basis: "Smalle AI.", simpeler: "Nu = smalle AI", nogSimpeler: "Smalle AI." },
        },
      },
      {
        q: "Hoe komt AI tot een antwoord?",
        options: ["Door patronen in data te gebruiken", "Door echt te 'begrijpen' zoals een mens", "Door antwoorden op te zoeken in een vaste lijst", "Door voorbeelden letterlijk uit het hoofd te leren"],
        answer: 0,
        wrongHints: [null, "AI begrijpt niet zoals een mens — het rekent.", "Een vaste lijst kan alleen vragen aan die er al in staan. Hoe kan AI dan iets nieuws herkennen?", "Letterlijk onthouden helpt niet bij een voorbeeld dat AI nog nooit zag. Wat haalt AI uit al die voorbeelden?"],
        uitlegPad: {
          stappen: [{ titel: "Rekenen met patronen", tekst: "AI **herkent en gebruikt patronen** uit grote hoeveelheden data om te voorspellen of te genereren. Het 'begrijpt' niet bewust zoals een mens. Daarom kan AI zelfverzekerd klinken en er tóch naast zitten ('hallucineren') — blijf kritisch." }],
          niveaus: { basis: "Patronen in data.", simpeler: "AI = patronen uit data", nogSimpeler: "Patronen in data." },
        },
      },
      {
        q: "Welke van deze is een voorbeeld van AI in het dagelijks leven?",
        options: ["Aanbevelingen op YouTube/Netflix", "Een gewone rekenmachine-app", "Een digitale wekker met alarm", "Een spellingscontrole met een vaste woordenlijst"],
        answer: 0,
        wrongHints: [null, "Een rekenmachine volgt vaste regels, leert niets.", "Een wekker volgt de vaste tijd die jij instelt — hij leert niets.", "Die vergelijkt alleen met een vaste lijst. Leert hij iets uit jouw gedrag of uit data?"],
        uitlegPad: {
          stappen: [{ titel: "Aanbevelingssystemen", tekst: "**Aanbevelingen** (YouTube, Netflix, Spotify) gebruiken AI: ze leren uit jouw (en andermans) kijk-/luistergedrag welke patronen erin zitten en voorspellen wat je leuk vindt. Een rekenmachine of schakelaar volgt vaste regels en **leert** niet." }],
          niveaus: { basis: "Aanbevelingen.", simpeler: "YouTube-tips = AI", nogSimpeler: "Aanbevelingen." },
        },
      },
      {
        q: "**Algemene AI (AGI)** — die net als een mens álles zou kunnen leren —…",
        options: ["bestaat op dit moment nog niet", "zit in elke smartphone", "zit in chatbots zoals ChatGPT", "is bij wet verboden"],
        answer: 0,
        wrongHints: [null, "In je telefoon zit smalle AI, geen AGI.", "Een chatbot is heel goed in taal, maar kan hij ook leren fietsen of koken? Dan is het smalle AI.", "Het gaat niet om een verbod, maar of het al bestaat."],
        uitlegPad: {
          stappen: [{ titel: "Nog science fiction", tekst: "**Algemene AI (AGI)** zou, net als een mens, om het even welke taak kunnen leren. Die bestaat **nog niet** — alle AI van nu is **smal** (goed in één taak). AGI is voorlopig science fiction." }],
          niveaus: { basis: "Bestaat nog niet.", simpeler: "AGI = bestaat nog niet", nogSimpeler: "Bestaat nog niet." },
        },
      },
      {
        q: "Wat betekent het als een AI **'hallucineert'**?",
        options: ["Het verzint een fout antwoord", "Het weigert een vraag te beantwoorden", "Het neemt tekst letterlijk van internet over", "Het reageert veel trager dan normaal"],
        answer: 0,
        wrongHints: [null, "Bij hallucineren krijg je wél een antwoord. Wat is er dan mis mee?", "Kopiëren uit een bron heet anders. Waar haalt een hallucinerende AI zijn 'feiten' vandaan?", "Het gaat niet om de snelheid, maar om de inhoud van het antwoord."],
        uitlegPad: {
          stappen: [{ titel: "Zeker klinken, toch fout", tekst: "**Hallucineren** betekent dat AI een antwoord **verzint** dat vloeiend en zeker klinkt, maar feitelijk **niet klopt**. Omdat het model woord-voor-woord het waarschijnlijkste vervolg kiest, kan het overtuigend naast de waarheid zitten. Controleer belangrijke feiten dus zelf." }],
          niveaus: { basis: "Zelfverzekerd fout.", simpeler: "Hallucineren = verzinnen", nogSimpeler: "Zelfverzekerd fout." },
        },
      },
    ],
  },

  // ─── B. Machine learning ──────────────────────────────────
  {
    title: "Machine learning — leren uit data",
    explanation:
      "**Machine learning** (ML) is de belangrijkste tak van AI. Het verschil met 'gewoon programmeren':\n\n• **Klassiek programmeren:** de mens schrijft de **regels**. (`ALS bedrag > saldo DAN weiger`.)\n• **Machine learning:** je geeft het systeem heel veel **voorbeelden (data)**, en het **leert zelf de regels/patronen** eruit. Je programmeert niet de regels, maar het *leerproces*.\n\n**Voorbeeld — herken een kat:**\nJe kunt niet makkelijk in regels vatten 'wat een kat is'. Maar geef een ML-systeem **duizenden foto's** met het label 'kat' of 'geen kat', en het leert zelf de kenmerken. Daarna herkent het katten op **nieuwe** foto's die het nog nooit zag.\n\n**De fasen:**\n1. **Trainen** — het model leert patronen uit (een grote hoeveelheid) **trainingsdata**.\n2. **Testen** — controleren op nieuwe data of het echt goed werkt.\n3. **Gebruiken** — het getrainde model toepassen op echte gevallen.\n\n**Cruciaal: de data bepaalt de kwaliteit.**\n'Garbage in, garbage out': leert een model van slechte of eenzijdige voorbeelden, dan worden de voorspellingen ook slecht of scheef. **Meer en betere data → beter model.**",
    checks: [
      {
        q: "Wat is het verschil tussen **machine learning** en klassiek programmeren?",
        options: ["Bij ML leert de computer de regels uit data", "Bij ML schrijft de programmeur alle regels zelf", "ML is klassiek programmeren, maar dan sneller", "Klassiek programmeren leert uit data"],
        answer: 0,
        wrongHints: [null, "Wie bepaalt bij ML de regels — de programmeur of iets anders?", "Het verschil zit niet in snelheid, maar in wie of wat de regels bepaalt.", "Kijk wie bij klassiek programmeren de regels bedenkt."],
        uitlegPad: {
          stappen: [{ titel: "Regels schrijven vs leren", tekst: "Bij **klassiek programmeren** schrijft de **mens de regels**. Bij **machine learning** geef je veel **voorbeelden (data)** en **leert het systeem zelf de patronen/regels** eruit. Je programmeert het leerproces, niet de regels." }],
          niveaus: { basis: "ML leert uit data.", simpeler: "ML = leren uit voorbeelden", nogSimpeler: "ML leert uit data." },
        },
      },
      {
        q: "Wat gebeurt er in de **trainingsfase** van machine learning?",
        options: ["Het model leert patronen uit trainingsdata", "Het model wordt op nieuwe data getest", "De programmeur schrijft alle regels uit", "Het model geeft antwoorden aan gebruikers"],
        answer: 0,
        wrongHints: [null, "Dat gebeurt pas ná het trainen — in de testfase.", "Dat is klassiek programmeren; bij ML komen de regels ergens anders vandaan.", "Dat is het gebruik ná het trainen. Wat moet er eerst gebeuren?"],
        uitlegPad: {
          stappen: [{ titel: "Trainen → testen → gebruiken", tekst: "Tijdens het **trainen** leert het model **patronen uit trainingsdata** (bv. duizenden gelabelde foto's). Daarna **testen** op nieuwe data om te checken of het echt werkt, en dan **gebruiken** op echte gevallen." }],
          niveaus: { basis: "Leren uit trainingsdata.", simpeler: "Trainen = leren uit data", nogSimpeler: "Leren uit trainingsdata." },
        },
      },
      {
        q: "Wat betekent **'garbage in, garbage out'** bij machine learning?",
        options: ["Slechte/eenzijdige data → slechte voorspellingen", "Slim algoritme → maakt slechte data vanzelf goed", "Volle harde schijf → het model rekent trager", "Heel veel data → altijd perfecte voorspellingen"],
        answer: 0,
        wrongHints: [null, "Kan een model iets goeds leren uit voorbeelden die fout of scheef zijn? Het leert alleen wat erin zit.", "Gaat de uitdrukking over opslagruimte, of over de kwaliteit van wat je het model laat leren?", "Helpt heel veel data ook als die data fout of eenzijdig is?"],
        uitlegPad: {
          stappen: [{ titel: "Data bepaalt de kwaliteit", tekst: "**'Garbage in, garbage out'**: leert een model van **slechte of eenzijdige** voorbeelden, dan worden de voorspellingen ook slecht of scheef. **Meer en betere data → beter model.** De data is dus minstens zo belangrijk als het algoritme." }],
          niveaus: { basis: "Slechte data = slecht model.", simpeler: "Slechte data → slecht", nogSimpeler: "Slechte data = slecht model." },
        },
      },
      {
        q: "Waarom test je een ML-model op **nieuwe** data die het tijdens het trainen niet zag?",
        options: ["Om te checken of het echt goed werkt", "Om het model nog meer te laten leren", "Om het model sneller te laten rekenen", "Omdat oude data vaak fouten bevat"],
        answer: 0,
        wrongHints: [null, "Tijdens het testen leert het model niets bij — je kijkt alleen hoe goed het is.", "Testen gaat niet over snelheid — wat wil je wél weten?", "Ook met foutloze trainingsdata wil je testen — wat vertelt nieuwe data jou wat oude data niet kan?"],
        uitlegPad: {
          stappen: [{ titel: "Werkt het ook 'in het echt'?", tekst: "Een model kan de **trainingsdata** uit z'n hoofd leren en tóch falen op nieuwe gevallen. Door te **testen op onbekende data** controleer je of het echt **generaliseert** — of het ook werkt op wat het nog nooit zag." }],
          niveaus: { basis: "Checken op onbekende data.", simpeler: "Testen = werkt het echt?", nogSimpeler: "Checken op onbekende data." },
        },
      },
      {
        q: "Een kat-herkenner is getraind op duizenden foto's. Wat kan hij daarna?",
        options: ["Katten herkennen op nieuwe foto's", "Alleen exact dezelfde foto's herkennen", "Ook honden en vogels benoemen", "Katten tekenen die nooit bestonden"],
        answer: 0,
        wrongHints: [null, "Dan zou hij niets geleerd hebben — het gaat om nieuwe foto's.", "Hij heeft alleen geleerd hoe een kat eruitziet. Weet hij dan ook wat een hond is?", "Herkennen is iets anders dan nieuwe plaatjes maken; dat doet generatieve AI."],
        uitlegPad: {
          stappen: [{ titel: "Generaliseren", tekst: "Een goed getraind model leert de **kenmerken** van een kat, niet de exacte foto's. Daardoor herkent het katten op **nieuwe** beelden die het nog nooit zag. Dat 'toepassen op onbekende gevallen' heet **generaliseren** — precies waar het om draait." }],
          niveaus: { basis: "Nieuwe foto's herkennen.", simpeler: "Model = generaliseert", nogSimpeler: "Nieuwe foto's herkennen." },
        },
      },
    ],
  },

  // ─── C. Soorten & generatieve AI ──────────────────────────
  {
    title: "Soorten ML & generatieve AI",
    explanation:
      "**Soorten machine learning:**\n• **Supervised** (begeleid) — leren van **gelabelde** voorbeelden (foto + label 'kat'). Voor herkennen/voorspellen.\n• **Unsupervised** (onbegeleid) — zelf **groepen/patronen** vinden in data zonder labels (bv. klanten in groepen indelen).\n• **Reinforcement** (versterkend) — leren door **belonen/straffen** (zoals een AI die een game leert door te oefenen).\n\n**Neurale netwerken & deep learning:**\nVeel moderne AI gebruikt **neurale netwerken**: lagen van rekenknopen, losjes geïnspireerd op hersencellen. Met heel veel lagen heet het **deep learning** — sterk in beeld, spraak en taal.\n\n**Generatieve AI (de bekendste vorm nu):**\nAI die **nieuwe** content **maakt**: tekst, beeld, muziek, code.\n• **Taalmodellen (LLM's)** zoals chatbots zijn getraind op enorme hoeveelheden tekst en voorspellen **woord voor woord** wat waarschijnlijk volgt. Daarom klinken ze vloeiend — maar ze kunnen **feiten verzinnen** ('hallucineren').\n• **Beeldgeneratoren** maken plaatjes uit een tekstbeschrijving (een 'prompt').\n\n**Belangrijk:** generatieve AI is een **hulpmiddel**, geen orakel. Controleer feiten altijd zelf.",
    checks: [
      {
        q: "Bij **supervised learning** leert het model van…",
        options: ["Gelabelde voorbeelden", "Data zonder enige labels", "Regels van een programmeur", "Belonen en straffen"],
        answer: 0,
        wrongHints: [null, "Dat is juist unsupervised (zonder labels).", "Regels die iemand typt is klassiek programmeren, geen machine learning.", "Belonen/straffen is reinforcement learning."],
        uitlegPad: {
          stappen: [{ titel: "Met labels = supervised", tekst: "**Supervised** (begeleid) leert van **gelabelde** voorbeelden: data mét het juiste antwoord (foto + 'kat'). **Unsupervised** zoekt zelf groepen zonder labels; **reinforcement** leert via belonen/straffen." }],
          niveaus: { basis: "Gelabelde voorbeelden.", simpeler: "Supervised = met labels", nogSimpeler: "Gelabelde voorbeelden." },
        },
      },
      {
        q: "Hoe maakt een **taalmodel (chatbot/LLM)** een zin?",
        options: ["Door telkens het volgende woord te voorspellen", "Door hele zinnen uit een database te kopiëren", "Door net als een mens te begrijpen wat het zegt", "Door willekeurige woorden achter elkaar te zetten"],
        answer: 0,
        wrongHints: [null, "Het plakt geen vaste zinnen — elke zin wordt nieuw opgebouwd.", "Het 'begrijpt' niet bewust — het voorspelt.", "Niet willekeurig — op basis van geleerde patronen."],
        uitlegPad: {
          stappen: [{ titel: "Woord-voor-woord voorspellen", tekst: "Een **taalmodel (LLM)** is getraind op enorme hoeveelheden tekst en voorspelt **woord voor woord** wat waarschijnlijk volgt. Daardoor klinkt het vloeiend — maar het kan ook **feiten verzinnen** ('hallucineren'). Controleer belangrijke feiten dus altijd zelf." }],
          niveaus: { basis: "Woord voor woord voorspellen.", simpeler: "LLM = volgende woord voorspellen", nogSimpeler: "Woord voor woord voorspellen." },
        },
      },
      {
        q: "Wat is **generatieve AI**?",
        options: ["AI die nieuwe content maakt", "AI die spam uit je mailbox filtert", "AI die gegevens in groepen indeelt", "AI die leert door beloning en straf"],
        answer: 0,
        wrongHints: [null, "Een spamfilter kiest alleen tussen 'spam' en 'geen spam'. Maakt hij daarbij iets?", "Indelen in groepen ordent wat er al is. Waar verwijst het woord 'generatief' naar?", "Dat heet reinforcement learning. Wat betekent 'genereren'?"],
        uitlegPad: {
          stappen: [{ titel: "Nieuwe content maken", tekst: "**Generatieve AI** **maakt nieuwe** content: tekst (chatbots/LLM's), beeld (uit een 'prompt'), muziek, code. Het is een krachtig **hulpmiddel**, maar geen orakel — het kan fouten en verzinsels bevatten." }],
          niveaus: { basis: "Maakt nieuwe content.", simpeler: "Generatief = maakt nieuw", nogSimpeler: "Maakt nieuwe content." },
        },
      },
      {
        q: "Bij **reinforcement learning** (versterkend leren) leert een AI door…",
        options: ["Beloning en straf te krijgen", "Data in groepen te verdelen", "Gelabelde foto's te bekijken", "Vaste regels te volgen"],
        answer: 0,
        wrongHints: [null, "Dat is unsupervised learning: daar krijgt de AI geen feedback op wat hij doet.", "Gelabelde data → dat is supervised.", "Getypte regels volgen is klassiek programmeren. Hoe leert een AI die een spel steeds opnieuw speelt?"],
        uitlegPad: {
          stappen: [{ titel: "Leren met beloning", tekst: "**Reinforcement learning** leert door **proberen** en **beloning/straf**: goede acties leveren punten op, foute niet. Zo leert een AI bijvoorbeeld zelf een game spelen — steeds een beetje beter. **Supervised** leert van labels, **unsupervised** zoekt zelf groepen." }],
          niveaus: { basis: "Belonen en straffen.", simpeler: "Reinforcement = belonen", nogSimpeler: "Belonen en straffen." },
        },
      },
      {
        q: "Wat is een **neuraal netwerk**?",
        options: ["Lagen van rekenknopen, geïnspireerd op het brein", "Een nagebouwd menselijk brein dat zelf denkt", "Een netwerk van computers die via internet praten", "Een lijst als-dan-regels die iemand heeft getypt"],
        answer: 0,
        wrongHints: [null, "Het is geïnspireerd op het brein, maar het ís er geen.", "Dat is een computernetwerk; een neuraal netwerk zit ín het model.", "Die regels worden juist niet getypt — ze ontstaan door te leren uit data."],
        uitlegPad: {
          stappen: [{ titel: "Lagen rekenknopen", tekst: "Een **neuraal netwerk** bestaat uit **lagen rekenknopen** die signalen doorgeven, losjes geïnspireerd op hersencellen. Met veel lagen heet het **deep learning** — sterk in beeld, spraak en taal. Het is wiskunde, geen echt brein." }],
          niveaus: { basis: "Lagen rekenknopen.", simpeler: "Neuraal net = rekenlagen", nogSimpeler: "Lagen rekenknopen." },
        },
      },
    ],
  },

  // ─── D. Data, bias & ethiek ───────────────────────────────
  {
    title: "Data, bias & ethiek",
    explanation:
      "AI is krachtig, maar brengt **risico's** mee. Wie ermee werkt, moet kritisch en verantwoord zijn.\n\n**Bias (vooringenomenheid):**\nEen model leert uit data — en **neemt de vooroordelen in die data over**. Voorbeelden:\n• Een sollicitatie-AI getraind op vooral mannelijke aangenomen kandidaten gaat vrouwen benadelen.\n• Gezichtsherkenning die vooral op lichte gezichten is getraind, werkt slechter bij donkere gezichten.\nBias ontstaat dus niet omdat de AI 'gemeen' is, maar omdat de **data scheef** is. Eerlijke, representatieve data is essentieel.\n\n**Privacy (AVG):**\nML heeft veel data nodig — vaak **persoonsgegevens**. Dat botst met privacy: alleen verzamelen wat nodig is, toestemming, veilig bewaren (zie de AVG).\n\n**Andere zorgen:**\n• **Deepfakes** — nepvideo's/-stemmen die echt lijken → desinformatie.\n• **Transparantie / 'black box'** — bij complexe modellen is soms onduidelijk *waaróm* ze iets beslissen. Lastig bij bv. een afgewezen lening.\n• **Verantwoordelijkheid** — wie is aansprakelijk als een zelfrijdende auto een fout maakt?\n• **Banen & afhankelijkheid** — AI verandert werk en we leunen er steeds meer op.\n\n**Kernhouding:** gebruik AI als **hulpmiddel**, blijf **kritisch**, **controleer** de uitkomst, en let op **eerlijkheid en privacy**.",
    checks: [
      {
        q: "Hoe ontstaat **bias** (vooringenomenheid) in een AI-model?",
        options: ["Doordat het leert van scheve/eenzijdige data", "Doordat de AI zelf een mening vormt", "Doordat de computer te traag rekent", "Doordat het model te vaak getest wordt"],
        answer: 0,
        wrongHints: [null, "AI heeft geen eigen mening of bedoelingen.", "Snelheid veroorzaakt geen bias.", "Testen maakt een model niet scheef — testen helpt juist fouten vinden."],
        uitlegPad: {
          stappen: [{ titel: "Scheve data → scheef model", tekst: "**Bias** ontstaat doordat een model **vooroordelen in de data overneemt**. Train je een sollicitatie-AI vooral op mannen, dan benadeelt het vrouwen. Niet omdat de AI 'gemeen' is, maar omdat de **data scheef** was. Daarom is eerlijke, representatieve data essentieel." }],
          niveaus: { basis: "Scheve data.", simpeler: "Bias = scheve data", nogSimpeler: "Scheve data." },
        },
      },
      {
        q: "Wat is een **deepfake**?",
        options: ["Een met AI gemaakte nepvideo", "Een virus verstopt in een video", "Een filmpje met studio-effecten", "Een nepaccount op sociale media"],
        answer: 0,
        wrongHints: [null, "Dat is malware. Een deepfake gaat over wat je ziet en hoort.", "Filmeffecten maakt een team met de hand. Wie of wat maakt een deepfake?", "Een nepaccount is een vals profiel. Een deepfake laat een échte persoon iets doen of zeggen wat nooit gebeurde."],
        uitlegPad: {
          stappen: [{ titel: "AI-vervalsing", tekst: "Een **deepfake** is een met AI gemaakte **nepvideo of nep-stem** die echt lijkt. Dat kan worden misbruikt voor **desinformatie** of oplichting. Daarom: wees kritisch op wat je online ziet/hoort — niet alles is echt." }],
          niveaus: { basis: "AI-nepvideo.", simpeler: "Deepfake = AI-nep", nogSimpeler: "AI-nepvideo." },
        },
      },
      {
        q: "Wat is de juiste houding bij het gebruik van (generatieve) AI?",
        options: ["Als hulpmiddel gebruiken en de uitkomst controleren", "Vooral gebruiken om feiten op te zoeken, daar is AI sterk", "Overnemen als het antwoord zelfverzekerd klinkt", "Gebruiken met echte namen erin, dan wordt het persoonlijker"],
        answer: 0,
        wrongHints: [null, "Juist bij feiten kan AI zelfverzekerd iets verzinnen. Is het dan een betrouwbare bron?", "Zelfverzekerd klinken zegt niets over kloppen. Weet je nog wat hallucineren is?", "Denk aan privacy (AVG): wat gebeurt er met gegevens die je in een AI-dienst stopt?"],
        uitlegPad: {
          stappen: [{ titel: "Hulpmiddel, geen orakel", tekst: "Gebruik AI als **hulpmiddel**, maar blijf **kritisch**: het kan zelfverzekerd klinken en er tóch naast zitten. **Controleer** belangrijke feiten zelf, en let op **privacy** (deel niet zomaar persoonsgegevens) en **eerlijkheid** (bias)." }],
          niveaus: { basis: "Hulpmiddel + kritisch controleren.", simpeler: "AI = hulpmiddel, blijf kritisch", nogSimpeler: "Hulpmiddel + kritisch controleren." },
        },
      },
      {
        q: "Wat betekent het dat een complex AI-model een **'black box'** is?",
        options: ["Je ziet niet waarom het iets beslist", "Het slaat stiekem je gegevens op", "Het werkt zonder trainingsdata", "Het beslist steeds willekeurig"],
        answer: 0,
        wrongHints: [null, "Dat is een privacyzorg. Waar gaat 'black box' (een doos waar je niet in kunt kijken) over?", "Ook complexe modellen leren uit data. Waar slaat 'black box' dan op?", "De beslissingen volgen uit geleerde patronen. Maar kun je die patronen zelf aflezen?"],
        uitlegPad: {
          stappen: [{ titel: "Uitkomst zonder uitleg", tekst: "Bij een **black box** zie je wel de **uitkomst**, maar is onduidelijk **waaróm** het model die koos. Dat is een probleem bij belangrijke beslissingen — bv. een afgewezen lening of sollicitatie: je kunt de reden niet goed controleren of aanvechten." }],
          niveaus: { basis: "Onduidelijk waarom.", simpeler: "Black box = geen uitleg", nogSimpeler: "Onduidelijk waarom." },
        },
      },
      {
        q: "Waarom botst machine learning vaak met **privacy** (AVG)?",
        options: ["ML heeft veel data nodig, vaak persoonsgegevens", "ML-modellen zijn altijd openbaar voor iedereen", "De AVG verbiedt het gebruik van computers", "ML-modellen maken vaak rekenfouten in cijfers"],
        answer: 0,
        wrongHints: [null, "Niet elk model is openbaar — waar draait ML op, en van wie komt die data?", "De AVG verbiedt geen computers — het gaat over gegevens van personen.", "Rekenfouten zijn geen privacyprobleem — waar gaat de AVG over?"],
        uitlegPad: {
          stappen: [{ titel: "Honger naar data", tekst: "ML wordt beter met **meer data** — en die data zijn vaak **persoonsgegevens**. Dat botst met de **AVG**: verzamel alleen wat nodig is (dataminimalisatie), met toestemming en een duidelijk doel, en bewaar het veilig. Meer data is niet zomaar toegestaan." }],
          niveaus: { basis: "Veel data = privacyrisico.", simpeler: "ML wil data, AVG remt", nogSimpeler: "Veel data = privacyrisico." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const aiMachineLearningInformatica = {
  id: "ai-machine-learning-informatica",
  title: "AI & machine learning (Informatica)",
  emoji: "🤖",
  level: "havo4-5-vwo",
  subject: "informatica",
  referentieNiveau: "havo-vwo-informatica-domein-ai",
  sloThema: "Informatica HAVO/VWO — kunstmatige intelligentie: wat is AI, machine learning, generatieve AI en de ethiek",
  prerequisites: [
    { id: "databases-sql-informatica", title: "Databases & SQL", niveau: "havo4-5-vwo" },
  ],
  intro:
    "Wat is AI nou écht? Je leert het verschil tussen smalle en algemene AI, hoe machine learning uit data leert (i.p.v. geprogrammeerde regels), de soorten ML + generatieve AI (hoe een chatbot/LLM woord-voor-woord werkt), en de ethiek: bias, privacy/AVG, deepfakes en waarom je AI kritisch moet gebruiken. ~15 min.",
  triggerKeywords: [
    "AI", "kunstmatige intelligentie", "artificial intelligence",
    "smalle AI", "narrow AI", "AGI", "algemene AI",
    "machine learning", "ML", "leren uit data",
    "trainen", "trainingsdata", "model",
    "supervised", "unsupervised", "reinforcement learning",
    "neuraal netwerk", "deep learning",
    "generatieve AI", "taalmodel", "LLM", "chatbot", "hallucineren",
    "bias", "vooringenomenheid", "deepfake", "black box",
    "AI ethiek", "garbage in garbage out",
  ],
  chapters,
  steps,
};

export default aiMachineLearningInformatica;
