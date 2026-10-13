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
        options: ["Door patronen in data te gebruiken", "Door regels te volgen die een programmeur typte", "Door het antwoord live op internet op te zoeken", "Door alle mogelijke antwoorden na te lopen"],
        answer: 0,
        wrongHints: [null, "Zo werkt klassiek programmeren. Waar haalt AI zijn 'regels' vandaan?", "Een AI-model werkt ook zonder internet. Waar komt zijn kennis dan vandaan?", "Er zijn veel te veel mogelijke antwoorden om allemaal na te lopen. Hoe kiest AI dan?"],
        uitlegPad: {
          stappen: [{ titel: "Rekenen met patronen", tekst: "AI **herkent en gebruikt patronen** uit grote hoeveelheden data om te voorspellen of te genereren. Het 'begrijpt' niet bewust zoals een mens. Daarom kan AI zelfverzekerd klinken en er tóch naast zitten ('hallucineren') — blijf kritisch." }],
          niveaus: { basis: "Patronen in data.", simpeler: "AI = patronen uit data", nogSimpeler: "Patronen in data." },
        },
      },
      {
        q: "Welke van deze is een voorbeeld van AI in het dagelijks leven?",
        options: ["Aanbevelingen op YouTube/Netflix", "De rekenmachine-app op je telefoon", "Een lamp die aangaat via een bewegingssensor", "Een thermostaat die op ingestelde tijden aanslaat"],
        answer: 0,
        wrongHints: [null, "Een rekenmachine volgt vaste rekenregels. Leert hij iets van hoe jij hem gebruikt?", "De sensor doet bij elke beweging precies hetzelfde. Leert die lamp iets bij?", "Hij volgt de tijden die jij hebt ingesteld. Leert hij iets uit data?"],
        uitlegPad: {
          stappen: [{ titel: "Aanbevelingssystemen", tekst: "**Aanbevelingen** (YouTube, Netflix, Spotify) gebruiken AI: ze leren uit jouw (en andermans) kijk-/luistergedrag welke patronen erin zitten en voorspellen wat je leuk vindt. Een rekenmachine of schakelaar volgt vaste regels en **leert** niet." }],
          niveaus: { basis: "Aanbevelingen.", simpeler: "YouTube-tips = AI", nogSimpeler: "Aanbevelingen." },
        },
      },
      {
        q: "**Algemene AI (AGI)** — die net als een mens álles zou kunnen leren —…",
        options: ["bestaat op dit moment nog niet", "zit in elke smartphone", "zit in chatbots zoals ChatGPT", "zit al in zelfrijdende auto's"],
        answer: 0,
        wrongHints: [null, "In je telefoon zit smalle AI, geen AGI.", "Een chatbot is heel goed in taal, maar kan hij ook leren fietsen of koken? Dan is het smalle AI.", "Een zelfrijdende auto kan goed rijden, maar kan hij ook leren koken of schaken? Dan is het smalle AI."],
        uitlegPad: {
          stappen: [{ titel: "Nog science fiction", tekst: "**Algemene AI (AGI)** zou, net als een mens, om het even welke taak kunnen leren. Die bestaat **nog niet** — alle AI van nu is **smal** (goed in één taak). AGI is voorlopig science fiction." }],
          niveaus: { basis: "Bestaat nog niet.", simpeler: "AGI = bestaat nog niet", nogSimpeler: "Bestaat nog niet." },
        },
      },
      {
        q: "Wat betekent het als een AI **'hallucineert'**?",
        options: ["Het verzint een fout antwoord", "Het dwaalt af naar een ander onderwerp", "Het neemt tekst letterlijk van internet over", "Het geeft steeds een ander antwoord op dezelfde vraag"],
        answer: 0,
        wrongHints: [null, "Afdwalen kan, maar dan kan het antwoord nog steeds kloppen. Wat is er bij hallucineren mis?", "Kopiëren uit een bron heet anders. Waar haalt een hallucinerende AI zijn 'feiten' vandaan?", "Wisselende antwoorden komen door toeval in het model. Maar is elk van die antwoorden daardoor fout?"],
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
        options: ["Bij ML leert de computer de regels uit data", "Bij ML leert de computer uit regels die de programmeur typt", "Bij ML leert de computer door zijn eigen code te herschrijven", "Bij ML onthoudt de computer elk antwoord dat hij ooit gaf"],
        answer: 0,
        wrongHints: [null, "Als de programmeur de regels typt, is dat klassiek programmeren. Waar haalt ML zijn regels vandaan?", "De code van het model blijft gewoon staan. Wat verandert er dan wél tijdens het leren?", "Onthouden helpt niet bij een vraag die hij nog nooit kreeg. Waaruit haalt ML zijn regels?"],
        uitlegPad: {
          stappen: [{ titel: "Regels schrijven vs leren", tekst: "Bij **klassiek programmeren** schrijft de **mens de regels**. Bij **machine learning** geef je veel **voorbeelden (data)** en **leert het systeem zelf de patronen/regels** eruit. Je programmeert het leerproces, niet de regels." }],
          niveaus: { basis: "ML leert uit data.", simpeler: "ML = leren uit voorbeelden", nogSimpeler: "ML leert uit data." },
        },
      },
      {
        q: "Wat gebeurt er in de **trainingsfase** van machine learning?",
        options: ["Het model zoekt patronen in een grote set voorbeelden", "Het model wordt op nieuwe data getest", "De programmeur typt de regels voor het model", "Het model geeft antwoorden aan gebruikers"],
        answer: 0,
        wrongHints: [null, "Dat gebeurt pas ná het trainen — in de testfase.", "Dat is klassiek programmeren; bij ML komen de regels ergens anders vandaan.", "Dat is het gebruik ná het trainen. Wat moet er eerst gebeuren?"],
        uitlegPad: {
          stappen: [{ titel: "Trainen → testen → gebruiken", tekst: "Tijdens het **trainen** leert het model **patronen uit trainingsdata** (bv. duizenden gelabelde foto's). Daarna **testen** op nieuwe data om te checken of het echt werkt, en dan **gebruiken** op echte gevallen." }],
          niveaus: { basis: "Leren uit trainingsdata.", simpeler: "Trainen = leren uit data", nogSimpeler: "Leren uit trainingsdata." },
        },
      },
      {
        q: "Wat betekent **'garbage in, garbage out'** bij machine learning?",
        options: ["Slechte/eenzijdige data → slechte voorspellingen", "Oude data weggooien → ruimte voor nieuwe data", "Fout in de code → het model crasht", "Veel data erin → een groot model eruit"],
        answer: 0,
        wrongHints: [null, "Het gaat niet om opruimen. Waar slaat 'garbage' (afval) in de uitdrukking dan op?", "Een crash is een programmeerfout. Gaat de uitdrukking over de code, of over wat het model te leren krijgt?", "Het gaat niet om de hoeveelheid. Wat als die data fout of eenzijdig is?"],
        uitlegPad: {
          stappen: [{ titel: "Data bepaalt de kwaliteit", tekst: "**'Garbage in, garbage out'**: leert een model van **slechte of eenzijdige** voorbeelden, dan worden de voorspellingen ook slecht of scheef. **Meer en betere data → beter model.** De data is dus minstens zo belangrijk als het algoritme." }],
          niveaus: { basis: "Slechte data = slecht model.", simpeler: "Slechte data → slecht", nogSimpeler: "Slechte data = slecht model." },
        },
      },
      {
        q: "Waarom test je een ML-model op **nieuwe** data die het tijdens het trainen niet zag?",
        options: ["Om te zien of het niet alleen voorbeelden onthield", "Om het model met extra voorbeelden bij te sturen", "Om te meten hoe snel het model antwoord geeft", "Om te vinden welke trainingsdata fouten bevat"],
        answer: 0,
        wrongHints: [null, "Tijdens het testen past het model zich niet aan. Wat leer jíj dan van de uitkomst?", "Snelheid kun je ook op oude data meten. Waarom moet het juist nieuwe data zijn?", "Ook met foutloze trainingsdata wil je testen. Wat vertelt nieuwe data jou wat oude data niet kan?"],
        uitlegPad: {
          stappen: [{ titel: "Werkt het ook 'in het echt'?", tekst: "Een model kan de **trainingsdata** uit z'n hoofd leren en tóch falen op nieuwe gevallen. Door te **testen op onbekende data** controleer je of het echt **generaliseert** — of het ook werkt op wat het nog nooit zag." }],
          niveaus: { basis: "Checken op onbekende data.", simpeler: "Testen = werkt het echt?", nogSimpeler: "Checken op onbekende data." },
        },
      },
      {
        q: "Een kat-herkenner is getraind op duizenden foto's. Wat kan hij daarna?",
        options: ["Katten herkennen op nieuwe foto's", "De foto's uit zijn training terugvinden", "Elk dier op een foto benoemen", "Nieuwe kattenfoto's maken"],
        answer: 0,
        wrongHints: [null, "Dat kan wel, maar daar train je hem niet voor. Waar is een herkenner voor bedoeld?", "Hij heeft alleen katten gezien. Weet hij dan wat een hond of een vogel is?", "Herkennen is iets anders dan nieuwe plaatjes maken; dat doet generatieve AI."],
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
        options: ["AI die nieuwe tekst of beelden maakt", "AI die van zichzelf steeds nieuwe versies maakt", "AI die voorspelt wat je straks gaat kopen", "AI die leert door beloning en straf"],
        answer: 0,
        wrongHints: [null, "Een model wordt door mensen verbeterd, niet door zichzelf. Waar slaat 'generatief' dan op?", "Voorspellen uit oud koopgedrag doet een aanbevelingssysteem. Wat doet generatieve AI anders?", "Dat heet reinforcement learning. Wat betekent 'genereren'?"],
        uitlegPad: {
          stappen: [{ titel: "Nieuwe content maken", tekst: "**Generatieve AI** **maakt nieuwe** content: tekst (chatbots/LLM's), beeld (uit een 'prompt'), muziek, code. Het is een krachtig **hulpmiddel**, maar geen orakel — het kan fouten en verzinsels bevatten." }],
          niveaus: { basis: "Maakt nieuwe content.", simpeler: "Generatief = maakt nieuw", nogSimpeler: "Maakt nieuwe content." },
        },
      },
      {
        q: "Bij **reinforcement learning** (versterkend leren) leert een AI door…",
        options: ["Beloning en straf te krijgen", "Data in groepen te verdelen", "Gelabelde foto's te bekijken", "Voorbeelden steeds te herhalen"],
        answer: 0,
        wrongHints: [null, "Groepen maken zonder hulp is unsupervised learning. Welke leervorm hoort bij een spel leren spelen?", "Gelabelde data → dat is supervised.", "Herhalen klinkt als 'versterken'. Maar hoe weet een AI die een spel steeds opnieuw speelt of hij goed bezig is?"],
        uitlegPad: {
          stappen: [{ titel: "Leren met beloning", tekst: "**Reinforcement learning** leert door **proberen** en **beloning/straf**: goede acties leveren punten op, foute niet. Zo leert een AI bijvoorbeeld zelf een game spelen — steeds een beetje beter. **Supervised** leert van labels, **unsupervised** zoekt zelf groepen." }],
          niveaus: { basis: "Belonen en straffen.", simpeler: "Reinforcement = belonen", nogSimpeler: "Belonen en straffen." },
        },
      },
      {
        q: "Wat is een **neuraal netwerk**?",
        options: ["Lagen van verbonden rekenknopen in een model", "Een chip met gekweekte hersencellen erin", "Een netwerk van computers die via internet praten", "Een lijst als-dan-regels die iemand heeft getypt"],
        answer: 0,
        wrongHints: [null, "Er zit geen biologie in: het is gewoon rekenen. Het brein is alleen de inspiratie.", "Dat is een computernetwerk; een neuraal netwerk zit ín het model.", "Die regels worden juist niet getypt — ze ontstaan door te leren uit data."],
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
        options: ["Doordat het leert van scheve/eenzijdige data", "Doordat de programmeur zijn mening in de code zet", "Doordat het model te weinig rekenkracht had", "Doordat gebruikers de AI verkeerde vragen stellen"],
        answer: 0,
        wrongHints: [null, "Bij ML typt niemand de regels. Waar haalt het model zijn regels dan vandaan?", "Met minder rekenkracht wordt een model trager of minder precies, maar niet oneerlijk tegenover een groep.", "Ook bij nette vragen kan een model een groep benadelen. Wat zat er al in het model vóór de eerste vraag?"],
        uitlegPad: {
          stappen: [{ titel: "Scheve data → scheef model", tekst: "**Bias** ontstaat doordat een model **vooroordelen in de data overneemt**. Train je een sollicitatie-AI vooral op mannen, dan benadeelt het vrouwen. Niet omdat de AI 'gemeen' is, maar omdat de **data scheef** was. Daarom is eerlijke, representatieve data essentieel." }],
          niveaus: { basis: "Scheve data.", simpeler: "Bias = scheve data", nogSimpeler: "Scheve data." },
        },
      },
      {
        q: "Wat is een **deepfake**?",
        options: ["Echt lijkende nepbeelden, gemaakt door AI", "Een nepbericht dat iemand zelf heeft getypt", "Een video die met de hand is bewerkt", "Een nepaccount dat een bot beheert"],
        answer: 0,
        wrongHints: [null, "Nepnieuws kan, maar een deepfake gaat over beeld en geluid. Wie maakt dat?", "Met de hand bewerken kan al heel lang. Wat is er nieuw aan een deepfake?", "Een nepaccount is een vals profiel. Een deepfake laat een échte persoon iets doen of zeggen wat nooit gebeurde."],
        uitlegPad: {
          stappen: [{ titel: "AI-vervalsing", tekst: "Een **deepfake** is een met AI gemaakte **nepvideo of nep-stem** die echt lijkt. Dat kan worden misbruikt voor **desinformatie** of oplichting. Daarom: wees kritisch op wat je online ziet/hoort — niet alles is echt." }],
          niveaus: { basis: "AI-nepvideo.", simpeler: "Deepfake = AI-nep", nogSimpeler: "AI-nepvideo." },
        },
      },
      {
        q: "Wat is de juiste houding bij het gebruik van (generatieve) AI?",
        options: ["Als hulpmiddel gebruiken en de uitkomst controleren", "Vooral gebruiken om feiten op te zoeken, daar is AI sterk", "Vertrouwen als twee chatbots hetzelfde antwoord geven", "Liever niet gebruiken, want het klopt bijna nooit"],
        answer: 0,
        wrongHints: [null, "Juist bij feiten kan AI zelfverzekerd iets verzinnen. Is het dan een betrouwbare bron?", "Twee AI's kunnen dezelfde fout maken. Waarmee check je een antwoord beter?", "AI kan juist veel goed. Is helemaal niet gebruiken dan nodig?"],
        uitlegPad: {
          stappen: [{ titel: "Hulpmiddel, geen orakel", tekst: "Gebruik AI als **hulpmiddel**, maar blijf **kritisch**: het kan zelfverzekerd klinken en er tóch naast zitten. **Controleer** belangrijke feiten zelf, en let op **privacy** (deel niet zomaar persoonsgegevens) en **eerlijkheid** (bias)." }],
          niveaus: { basis: "Hulpmiddel + kritisch controleren.", simpeler: "AI = hulpmiddel, blijf kritisch", nogSimpeler: "Hulpmiddel + kritisch controleren." },
        },
      },
      {
        q: "Wat betekent het dat een complex AI-model een **'black box'** is?",
        options: ["Je ziet niet waarom het iets beslist", "Het logt alles, zoals een vliegtuig-blackbox", "Het draait afgesloten van het internet", "Het beslist steeds willekeurig"],
        answer: 0,
        wrongHints: [null, "De zwarte doos in een vliegtuig is een recorder. Waar slaat het woord bij AI dan op?", "Ook modellen die online draaien heten zo. Het gaat dus niet om internet.", "De beslissingen volgen uit geleerde patronen; met dezelfde invoer krijg je meestal hetzelfde."],
        uitlegPad: {
          stappen: [{ titel: "Uitkomst zonder uitleg", tekst: "Bij een **black box** zie je wel de **uitkomst**, maar is onduidelijk **waaróm** het model die koos. Dat is een probleem bij belangrijke beslissingen — bv. een afgewezen lening of sollicitatie: je kunt de reden niet goed controleren of aanvechten." }],
          niveaus: { basis: "Onduidelijk waarom.", simpeler: "Black box = geen uitleg", nogSimpeler: "Onduidelijk waarom." },
        },
      },
      {
        q: "Waarom botst machine learning vaak met **privacy** (AVG)?",
        options: ["ML heeft veel data nodig, vaak persoonsgegevens", "ML-modellen delen hun trainingsdata met elke gebruiker", "De AVG staat AI alleen toe bij de overheid", "ML-modellen maken fouten in je naam en adres"],
        answer: 0,
        wrongHints: [null, "Een model geeft antwoorden, geen kopie van zijn trainingsdata. Waar zit het privacyprobleem dan?", "Ook bedrijven mogen AI gebruiken. Waar stelt de AVG wél regels aan?", "Een foutje in een adres is vervelend, maar dat is niet waarom ML en de AVG vaak botsen."],
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
