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
        options: ["Het is 'smalle' AI — goed in één taak", "Het is bewust zoals een mens", "Het kan alles wat een mens kan", "Het werkt zonder data"],
        answer: 0,
        wrongHints: [null, "AI is niet bewust — het rekent met patronen.", "Dat zou algemene AI (AGI) zijn — bestaat nog niet.", "AI leunt juist zwaar op data."],
        uitlegPad: {
          stappen: [{ titel: "Smal = één taak", tekst: "Alle huidige AI is **smalle AI** (narrow): heel goed in **één** taak (schaken, spamfilter, chatten, gezichtsherkenning). **Algemene AI** (AGI), die net als een mens álles kan leren, bestaat (nog) niet. AI is bovendien **niet bewust**." }],
          niveaus: { basis: "Smalle AI.", simpeler: "Nu = smalle AI", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoe komt AI tot een antwoord?",
        options: ["Door patronen in data te gebruiken", "Door echt te 'begrijpen' zoals een mens", "Door magie", "Door willekeurig te gokken"],
        answer: 0,
        wrongHints: [null, "AI begrijpt niet zoals een mens — het rekent.", "Geen magie — wiskunde en data.", "Niet willekeurig — gebaseerd op geleerde patronen."],
        uitlegPad: {
          stappen: [{ titel: "Rekenen met patronen", tekst: "AI **herkent en gebruikt patronen** uit grote hoeveelheden data om te voorspellen of te genereren. Het 'begrijpt' niet bewust zoals een mens. Daarom kan AI zelfverzekerd klinken en er tóch naast zitten ('hallucineren') — blijf kritisch." }],
          niveaus: { basis: "Patronen in data.", simpeler: "AI = patronen uit data", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke van deze is een voorbeeld van AI in het dagelijks leven?",
        options: ["Aanbevelingen op YouTube/Netflix", "Een gewone rekenmachine", "Een lichtschakelaar", "Een papieren agenda"],
        answer: 0,
        wrongHints: [null, "Een rekenmachine volgt vaste regels, leert niets.", "Een schakelaar is gewone elektronica.", "Een agenda is geen software."],
        uitlegPad: {
          stappen: [{ titel: "Aanbevelingssystemen", tekst: "**Aanbevelingen** (YouTube, Netflix, Spotify) gebruiken AI: ze leren uit jouw (en andermans) kijk-/luistergedrag welke patronen erin zitten en voorspellen wat je leuk vindt. Een rekenmachine of schakelaar volgt vaste regels en **leert** niet." }],
          niveaus: { basis: "Aanbevelingen.", simpeler: "YouTube-tips = AI", nogSimpeler: "A." },
        },
      },
      {
        q: "**Algemene AI (AGI)** — die net als een mens álles zou kunnen leren —…",
        options: ["bestaat op dit moment nog niet", "zit in elke smartphone", "is hetzelfde als een rekenmachine", "is bij wet verboden"],
        answer: 0,
        wrongHints: [null, "In je telefoon zit smalle AI, geen AGI.", "Een rekenmachine leert helemaal niets.", "Het gaat niet om een verbod, maar of het al bestaat."],
        uitlegPad: {
          stappen: [{ titel: "Nog science fiction", tekst: "**Algemene AI (AGI)** zou, net als een mens, om het even welke taak kunnen leren. Die bestaat **nog niet** — alle AI van nu is **smal** (goed in één taak). AGI is voorlopig science fiction." }],
          niveaus: { basis: "Bestaat nog niet.", simpeler: "AGI = bestaat nog niet", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat betekent het als een AI **'hallucineert'**?",
        options: ["Het geeft zelfverzekerd een antwoord dat feitelijk onjuist is", "De computer wordt te warm", "Het beeldscherm flikkert", "De AI valt in slaap"],
        answer: 0,
        wrongHints: [null, "Het gaat over foute antwoorden, niet over warmte.", "Niet het scherm — het antwoord klopt niet.", "AI 'slaapt' niet."],
        uitlegPad: {
          stappen: [{ titel: "Zeker klinken, toch fout", tekst: "**Hallucineren** betekent dat AI een antwoord **verzint** dat vloeiend en zeker klinkt, maar feitelijk **niet klopt**. Omdat het model woord-voor-woord het waarschijnlijkste vervolg kiest, kan het overtuigend naast de waarheid zitten. Controleer belangrijke feiten dus zelf." }],
          niveaus: { basis: "Zelfverzekerd fout.", simpeler: "Hallucineren = verzinnen", nogSimpeler: "A." },
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
        options: ["Bij ML leert de computer regels uit data; bij klassiek schrijft de mens de regels", "Er is geen verschil", "ML gebruikt geen computer", "Klassiek programmeren leert uit data"],
        answer: 0,
        wrongHints: [null, "Er is een wezenlijk verschil.", "ML draait juist op computers.", "Andersom: ML leert uit data, klassiek niet."],
        uitlegPad: {
          stappen: [{ titel: "Regels schrijven vs leren", tekst: "Bij **klassiek programmeren** schrijft de **mens de regels**. Bij **machine learning** geef je veel **voorbeelden (data)** en **leert het systeem zelf de patronen/regels** eruit. Je programmeert het leerproces, niet de regels." }],
          niveaus: { basis: "ML leert uit data.", simpeler: "ML = leren uit voorbeelden", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat gebeurt er in de **trainingsfase** van machine learning?",
        options: ["Het model leert patronen uit trainingsdata", "De gebruiker betaalt voor de app", "De computer wordt gereset", "Er wordt niets opgeslagen"],
        answer: 0,
        wrongHints: [null, "Betalen heeft er niets mee te maken.", "Resetten is iets anders.", "Het geleerde model wordt juist bewaard."],
        uitlegPad: {
          stappen: [{ titel: "Trainen → testen → gebruiken", tekst: "Tijdens het **trainen** leert het model **patronen uit trainingsdata** (bv. duizenden gelabelde foto's). Daarna **testen** op nieuwe data om te checken of het echt werkt, en dan **gebruiken** op echte gevallen." }],
          niveaus: { basis: "Leren uit trainingsdata.", simpeler: "Trainen = leren uit data", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat betekent **'garbage in, garbage out'** bij machine learning?",
        options: ["Slechte/eenzijdige data → slechte voorspellingen", "Computers maken vuilnis", "Je moet je bestanden weggooien", "AI werkt altijd perfect"],
        answer: 0,
        wrongHints: [null, "Het is een uitdrukking over data-kwaliteit, niet letterlijk afval.", "Het gaat niet over bestanden wissen.", "Juist niet — slechte data geeft slechte resultaten."],
        uitlegPad: {
          stappen: [{ titel: "Data bepaalt de kwaliteit", tekst: "**'Garbage in, garbage out'**: leert een model van **slechte of eenzijdige** voorbeelden, dan worden de voorspellingen ook slecht of scheef. **Meer en betere data → beter model.** De data is dus minstens zo belangrijk als het algoritme." }],
          niveaus: { basis: "Slechte data = slecht model.", simpeler: "Slechte data → slecht", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarom test je een ML-model op **nieuwe** data die het tijdens het trainen niet zag?",
        options: ["Om te checken of het ook op onbekende gevallen goed werkt", "Om de computer sneller te maken", "Om stroom te besparen", "Dat hoeft eigenlijk nooit"],
        answer: 0,
        wrongHints: [null, "Testen gaat niet over snelheid.", "Het doel is betrouwbaarheid, niet stroom.", "Testen is juist essentieel."],
        uitlegPad: {
          stappen: [{ titel: "Werkt het ook 'in het echt'?", tekst: "Een model kan de **trainingsdata** uit z'n hoofd leren en tóch falen op nieuwe gevallen. Door te **testen op onbekende data** controleer je of het echt **generaliseert** — of het ook werkt op wat het nog nooit zag." }],
          niveaus: { basis: "Checken op onbekende data.", simpeler: "Testen = werkt het echt?", nogSimpeler: "A." },
        },
      },
      {
        q: "Een kat-herkenner is getraind op duizenden foto's. Wat kan hij daarna?",
        options: ["Katten herkennen op nieuwe foto's die hij nog nooit zag", "Alleen exact dezelfde foto's herkennen", "Zelf een echte kat verzorgen", "Niets nieuws"],
        answer: 0,
        wrongHints: [null, "Dan zou hij niets geleerd hebben — het gaat om nieuwe foto's.", "Een model doet geen fysieke taken.", "Juist wél iets nieuws: generaliseren."],
        uitlegPad: {
          stappen: [{ titel: "Generaliseren", tekst: "Een goed getraind model leert de **kenmerken** van een kat, niet de exacte foto's. Daardoor herkent het katten op **nieuwe** beelden die het nog nooit zag. Dat 'toepassen op onbekende gevallen' heet **generaliseren** — precies waar het om draait." }],
          niveaus: { basis: "Nieuwe foto's herkennen.", simpeler: "Model = generaliseert", nogSimpeler: "A." },
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
        options: ["Gelabelde voorbeelden (data mét het juiste antwoord)", "Data zonder enige labels", "Helemaal geen data", "Alleen straf"],
        answer: 0,
        wrongHints: [null, "Dat is juist unsupervised (zonder labels).", "ML heeft data nodig.", "Belonen/straffen is reinforcement learning."],
        uitlegPad: {
          stappen: [{ titel: "Met labels = supervised", tekst: "**Supervised** (begeleid) leert van **gelabelde** voorbeelden: data mét het juiste antwoord (foto + 'kat'). **Unsupervised** zoekt zelf groepen zonder labels; **reinforcement** leert via belonen/straffen." }],
          niveaus: { basis: "Gelabelde voorbeelden.", simpeler: "Supervised = met labels", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoe maakt een **taalmodel (chatbot/LLM)** een zin?",
        options: ["Door woord voor woord te voorspellen wat waarschijnlijk volgt", "Door de zin op te zoeken in een boek", "Door echt te begrijpen wat het zegt", "Door willekeurige letters te plaatsen"],
        answer: 0,
        wrongHints: [null, "Het kopieert niet uit één boek.", "Het 'begrijpt' niet bewust — het voorspelt.", "Niet willekeurig — op basis van geleerde patronen."],
        uitlegPad: {
          stappen: [{ titel: "Woord-voor-woord voorspellen", tekst: "Een **taalmodel (LLM)** is getraind op enorme hoeveelheden tekst en voorspelt **woord voor woord** wat waarschijnlijk volgt. Daardoor klinkt het vloeiend — maar het kan ook **feiten verzinnen** ('hallucineren'). Controleer belangrijke feiten dus altijd zelf." }],
          niveaus: { basis: "Woord voor woord voorspellen.", simpeler: "LLM = volgende woord voorspellen", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is **generatieve AI**?",
        options: ["AI die nieuwe content maakt (tekst, beeld, muziek, code)", "AI die alleen bestaande bestanden sorteert", "Een soort virus", "Een back-upsysteem"],
        answer: 0,
        wrongHints: [null, "Het maakt juist nieuwe dingen, niet alleen sorteren.", "Het heeft niets met malware te maken.", "Een back-up is iets anders."],
        uitlegPad: {
          stappen: [{ titel: "Nieuwe content maken", tekst: "**Generatieve AI** **maakt nieuwe** content: tekst (chatbots/LLM's), beeld (uit een 'prompt'), muziek, code. Het is een krachtig **hulpmiddel**, maar geen orakel — het kan fouten en verzinsels bevatten." }],
          niveaus: { basis: "Maakt nieuwe content.", simpeler: "Generatief = maakt nieuw", nogSimpeler: "A." },
        },
      },
      {
        q: "Bij **reinforcement learning** (versterkend leren) leert een AI door…",
        options: ["Belonen en straffen: proberen, feedback krijgen, en beter worden", "Een boek uit het hoofd te leren", "Gelabelde foto's te bekijken", "Helemaal niets te doen"],
        answer: 0,
        wrongHints: [null, "Uit het hoofd leren is het niet.", "Gelabelde data → dat is supervised.", "Het leert juist actief door te proberen."],
        uitlegPad: {
          stappen: [{ titel: "Leren met beloning", tekst: "**Reinforcement learning** leert door **proberen** en **beloning/straf**: goede acties leveren punten op, foute niet. Zo leert een AI bijvoorbeeld zelf een game spelen — steeds een beetje beter. **Supervised** leert van labels, **unsupervised** zoekt zelf groepen." }],
          niveaus: { basis: "Belonen en straffen.", simpeler: "Reinforcement = belonen", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **neuraal netwerk**?",
        options: ["Lagen van rekenknopen, losjes geïnspireerd op hersencellen", "Een echt menselijk brein in de computer", "Een sociaal netwerk zoals Instagram", "Een soort internetkabel"],
        answer: 0,
        wrongHints: [null, "Het is geïnspireerd op het brein, maar het ís er geen.", "Het is geen sociaal medium.", "Geen kabel — een rekenmodel."],
        uitlegPad: {
          stappen: [{ titel: "Lagen rekenknopen", tekst: "Een **neuraal netwerk** bestaat uit **lagen rekenknopen** die signalen doorgeven, losjes geïnspireerd op hersencellen. Met veel lagen heet het **deep learning** — sterk in beeld, spraak en taal. Het is wiskunde, geen echt brein." }],
          niveaus: { basis: "Lagen rekenknopen.", simpeler: "Neuraal net = rekenlagen", nogSimpeler: "A." },
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
        options: ["Doordat het leert van scheve/eenzijdige data", "Doordat de AI gemeen is", "Door een te snelle computer", "Door te weinig stroom"],
        answer: 0,
        wrongHints: [null, "AI heeft geen bedoelingen — het ligt aan de data.", "Snelheid veroorzaakt geen bias.", "Stroom heeft er niets mee te maken."],
        uitlegPad: {
          stappen: [{ titel: "Scheve data → scheef model", tekst: "**Bias** ontstaat doordat een model **vooroordelen in de data overneemt**. Train je een sollicitatie-AI vooral op mannen, dan benadeelt het vrouwen. Niet omdat de AI 'gemeen' is, maar omdat de **data scheef** was. Daarom is eerlijke, representatieve data essentieel." }],
          niveaus: { basis: "Scheve data.", simpeler: "Bias = scheve data", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **deepfake**?",
        options: ["Een nepvideo/-stem die echt lijkt, gemaakt met AI", "Een heel diep bestand", "Een sterk wachtwoord", "Een snelle internetverbinding"],
        answer: 0,
        wrongHints: [null, "Het gaat om nep-media, niet om 'diepte' van een bestand.", "Het heeft niets met wachtwoorden te maken.", "Niet met snelheid."],
        uitlegPad: {
          stappen: [{ titel: "AI-vervalsing", tekst: "Een **deepfake** is een met AI gemaakte **nepvideo of nep-stem** die echt lijkt. Dat kan worden misbruikt voor **desinformatie** of oplichting. Daarom: wees kritisch op wat je online ziet/hoort — niet alles is echt." }],
          niveaus: { basis: "AI-nepvideo.", simpeler: "Deepfake = AI-nep", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is de juiste houding bij het gebruik van (generatieve) AI?",
        options: ["Gebruik het als hulpmiddel en controleer de uitkomst kritisch", "Geloof altijd alles wat het zegt", "Gebruik het nooit", "Deel er gerust al je persoonsgegevens mee"],
        answer: 0,
        wrongHints: [null, "AI kan fouten/verzinsels bevatten — niet blind vertrouwen.", "Het is juist een nuttig hulpmiddel, mits kritisch gebruikt.", "Wees voorzichtig met persoonsgegevens (privacy/AVG)."],
        uitlegPad: {
          stappen: [{ titel: "Hulpmiddel, geen orakel", tekst: "Gebruik AI als **hulpmiddel**, maar blijf **kritisch**: het kan zelfverzekerd klinken en er tóch naast zitten. **Controleer** belangrijke feiten zelf, en let op **privacy** (deel niet zomaar persoonsgegevens) en **eerlijkheid** (bias)." }],
          niveaus: { basis: "Hulpmiddel + kritisch controleren.", simpeler: "AI = hulpmiddel, blijf kritisch", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat betekent het dat een complex AI-model een **'black box'** is?",
        options: ["Het is soms onduidelijk wáárom het model een bepaalde beslissing neemt", "Het staat letterlijk in een zwarte doos", "Het werkt alleen 's nachts", "Het is een soort computervirus"],
        answer: 0,
        wrongHints: [null, "Het gaat om onduidelijkheid, niet om een echte doos.", "Tijd van de dag speelt geen rol.", "Het heeft niets met malware te maken."],
        uitlegPad: {
          stappen: [{ titel: "Uitkomst zonder uitleg", tekst: "Bij een **black box** zie je wel de **uitkomst**, maar is onduidelijk **waaróm** het model die koos. Dat is een probleem bij belangrijke beslissingen — bv. een afgewezen lening of sollicitatie: je kunt de reden niet goed controleren of aanvechten." }],
          niveaus: { basis: "Onduidelijk waarom.", simpeler: "Black box = geen uitleg", nogSimpeler: "A." },
        },
      },
      {
        q: "Waarom botst machine learning vaak met **privacy** (AVG)?",
        options: ["ML heeft veel data nodig, vaak persoonsgegevens", "ML gebruikt nooit data", "Privacy heeft niets met data te maken", "ML werkt alleen op papier"],
        answer: 0,
        wrongHints: [null, "ML draait juist op grote hoeveelheden data.", "Privacy gaat nu net over persoonsgegevens.", "ML draait op data, niet op papier."],
        uitlegPad: {
          stappen: [{ titel: "Honger naar data", tekst: "ML wordt beter met **meer data** — en die data zijn vaak **persoonsgegevens**. Dat botst met de **AVG**: verzamel alleen wat nodig is (dataminimalisatie), met toestemming en een duidelijk doel, en bewaar het veilig. Meer data is niet zomaar toegestaan." }],
          niveaus: { basis: "Veel data = privacyrisico.", simpeler: "ML wil data, AVG remt", nogSimpeler: "A." },
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
