// Leerpad: Godsdiensten + culturen - groep 6-8 wereldoriëntatie/burgerschap.
// toets-relevant. 1F. 5 stappen.

const stepEmojis = ["⛪", "☪️", "✡️", "🕉️", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is godsdienst?", emoji: "⛪", from: 0, to: 0 },
  { letter: "B", title: "Christendom", emoji: "✝️", from: 1, to: 1 },
  { letter: "C", title: "Islam + jodendom", emoji: "☪️", from: 2, to: 2 },
  { letter: "D", title: "Boeddhisme + hindoeïsme", emoji: "🕉️", from: 3, to: 3 },
  { letter: "E", title: "Eind-toets", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is godsdienst?",
    explanation:
      "**Godsdienst / religie** = systeem van **geloof**, **rituelen** en **regels** voor hoe te leven.\n\n**Wat hebben alle godsdiensten gemeen?**\n• Geloven in iets **groters** *(God, goden, geestelijke wereld)*.\n• Hebben **heilige boeken** of teksten.\n• **Rituelen** *(gebed, vasten, viering)*.\n• Gemeenschap *(kerk, moskee, tempel, synagoge)*.\n• **Regels** voor leven *(wat goed/slecht is)*.\n• Vaak verhalen over **schepping** + **leven na de dood**.\n\n**Vijf grootste wereldgodsdiensten** *(naar aantal aanhangers)*:\n\n1. **Christendom** — ~2,4 miljard *(31% wereldbevolking)*.\n2. **Islam** — ~1,9 miljard *(25%)*.\n3. **Hindoeïsme** — ~1,2 miljard *(15%)*.\n4. **Boeddhisme** — ~500 miljoen *(7%)*.\n5. **Jodendom** — ~15 miljoen *(0,2%, klein maar invloedrijk)*.\n\n**Naast wereldgodsdiensten**:\n• **Sikhisme** *(India, 25 mln)*.\n• **Jaïnisme** *(India)*.\n• **Confucianisme** *(China, levensfilosofie van de wijze Confucius)*.\n• **Taoïsme** *(China)*.\n• **Natuurgodsdiensten** *(Afrika, Amerika oorspronkelijk)*.\n\n**Niet religieus / atheïst / agnost**:\n• **Atheïst**: gelooft NIET in God.\n• **Agnost**: weet niet zeker of God bestaat.\n• **Geen religie**: ~24% wereldwijd *(ongeveer een op de vier)*, in NL is dit **ruim 55%** *(meeste niet-religieus)*.\n\n**NL bevolking 2023** *(CBS, afgerond)*:\n• Geen religie: ruim 55%.\n• Christendom: ~30% *(katholiek ~17% + protestant ~13%)*.\n• Islam: ~5%.\n• Andere *(hindoeïsme, boeddhisme, jodendom, etc.)*: ~5%.\n\n**Vroeger** *(1900)*:\n• Geen religie: ~3%.\n• Christendom: ~97%.\nNL is in 120 jaar veel **seculier** geworden *(minder religieus)*.\n\n**Vrijheid van godsdienst** *(Artikel 6 Grondwet)*:\n• In NL: **iedereen mag** gelovig of niet zijn.\n• Bidden, kerken bouwen, religieus onderwijs — allemaal toegestaan.\n• Met grenzen: niet ten koste van anderen.\n\n**Belangrijke begrippen**:\n• **Monotheïsme** = 1 God *(christen, jood, moslim)*.\n• **Polytheïsme** = meerdere goden *(hindoe, Grieken oud)*.\n• **Heilige plaats** = belangrijk voor godsdienst.\n• **Heilig boek** = boek met religieuze tekst.\n\n**Toets-feitje**:\nIn Nederland staan **ruim 6000 kerkgebouwen**. Veel staan leeg of zijn herbestemd tot bibliotheek, woonhuis of café. Symbool van seculariseren.",
    checks: [
      {
        q: "Volgens de uitleg is een **godsdienst** een systeem van drie dingen. Welke drie?",
        options: ["Geloof, rituelen en regels", "Geloof, gebed en feesten", "Geloof, gebouwen en boeken", "Geloof, verhalen en leiders"],
        answer: 0,
        wrongHints: [null, "Gebed en feesten zijn voorbeelden van één van de drie dingen. Lees de eerste zin van de uitleg nog eens.", "Gebouwen en boeken horen bij een godsdienst, maar staan ze in de eerste zin van de uitleg? Welke drie woorden staan daar?", "Verhalen en leiders horen erbij, maar staan ze in de eerste zin van de uitleg? Welke drie woorden staan daar?"],
      },
      {
        q: "Welke wereldgodsdienst heeft de **meeste aanhangers**?",
        options: ["Christendom", "Islam", "Boeddhisme", "Hindoeïsme"],
        answer: 0,
        wrongHints: [null, "De islam is ook heel groot. Vergelijk de aantallen aanhangers in de uitleg.", "Vergelijk het aantal boeddhisten met de andere aantallen in de uitleg.", "Vergelijk het aantal hindoes met de andere aantallen in de uitleg."],
      },
      {
        q: "Wat is een **atheïst**?",
        options: ["Iemand die niet in een god gelooft", "Iemand die niet zeker weet of er een god is", "Iemand die in meerdere goden gelooft", "Iemand die in één god gelooft"],
        answer: 0,
        wrongHints: [null, "Iemand die het niet zeker weet, heet in de uitleg anders. Zoek het woord atheïst op.", "Geloven in meerdere goden heet polytheïsme, zoals in het hindoeïsme.", "Geloven in één God heet monotheïsme, zoals bij joden, christenen en moslims."],
      },
      {
        q: "Hoeveel procent van de Nederlanders heeft **geen religie**?",
        options: ["Ongeveer 55%", "Ongeveer 30%", "Ongeveer 25%", "Ongeveer 3%"],
        answer: 0,
        wrongHints: [null, "Zoveel Nederlanders zijn christen. Hoeveel hebben er géén religie?", "Zoveel mensen zijn er op de hele wereld zonder religie. Hoe zit het in Nederland?", "Zo was het rond 1900. Nederland is sindsdien veel minder religieus geworden."],
      },
    ],
  },
  {
    title: "Christendom",
    explanation:
      "**Christendom** = de **grootste** godsdienst wereldwijd.\n\n**Basis**:\n• Volgers heten **christenen**.\n• Geloven in **één God** *(monotheïsme)*.\n• Heilige boek = **Bijbel** *(Oud + Nieuw Testament)*.\n• **Jezus Christus** *(circa 4 v.Chr. - 30 n.Chr.)* = volgens christenen 'Zoon van God' en 'Messias'.\n• Begon in **Israël/Palestina**.\n\n**Belangrijkste leerstuk**:\n• God = Schepper.\n• Jezus = Zoon van God, **gestorven aan kruis** voor zonden van mensen.\n• Na 3 dagen **opgestaan** uit de dood *(Pasen)*.\n• Heilige Geest = Gods werking in wereld.\n• Drie-eenheid: God-Vader + Zoon + Heilige Geest.\n\n**Heilige plaatsen**:\n• **Jeruzalem** *(Israël)* — Heilige Graf, gekruisigd.\n• **Bethlehem** — Jezus geboren.\n• **Nazareth** — Jezus opgegroeid.\n• **Rome** *(Vaticaan)* — paus woont, hoofd katholieken.\n\n**Hoofdrichtingen**:\n\n**1. Katholicisme** *(~1,3 mld wereldwijd)*:\n• **Paus** in Vaticaanstad = hoofd.\n• Huidige paus: **Leo XIV** *(sinds 2025, opvolger Franciscus)*.\n• Onder de paus staan **kardinalen** en **bisschoppen** *(een bisschop leidt de kerk in één gebied)*.\n• Belangrijke landen: Italië, Spanje, Polen, Latijns-Amerika.\n• Kerken vaak rijk versierd, beelden, kaarsen.\n\n**2. Protestantisme** *(~900 mln)*:\n• Ontstaan uit **Reformatie** *(1517, Maarten Luther)*.\n• Geen paus, eenvoudiger kerken. De voorganger heet vaak **dominee**.\n• Vele stromingen: lutheraan, calvinist, methodist, pinksterkerk, baptist.\n• Belangrijke landen: NL, Duitsland, VS, Engeland.\n\n**3. Oosters-orthodox** *(~250 mln)*:\n• Sinds 1054 afgesplitst.\n• Priesters met baarden, iconen.\n• Belangrijke landen: Rusland, Griekenland, Servië.\n\n**Heilige dagen**:\n• **Kerstmis** *(25 dec)* — geboorte Jezus.\n• **Pasen** *(maart-april)* — opstanding Jezus.\n• **Pinksteren** *(50 dagen na Pasen)* — Heilige Geest.\n• **Hemelvaartsdag** *(40 dagen na Pasen)* — Jezus naar hemel.\n• **Goede Vrijdag** — Jezus gekruisigd.\n• **Veertigdagentijd** — 40 dagen vóór Pasen; sommige christenen vasten dan.\n\n**Rituelen**:\n• **Doop** *(baby of volwassene in water)*.\n• **Communie / heilig avondmaal** *(brood + wijn ter herinnering)*.\n• **Bidden** *(persoonlijk of in kerk)*.\n• **Bijbel lezen**.\n\n**Christendom in NL**:\n• Vroeger 97% christen *(1900)*, nu ~30%.\n• Veel verlaten kerken.\n• Religieus onderwijs is op **bijzondere scholen** *(katholiek/protestant)*.\n• **Schoolvakanties** zijn vaak op christelijke feestdagen *(Kerst, Pasen, Hemelvaart)*.\n\n**Toets-feitje**:\nDe **Bijbel** is het **meest gedrukte boek** ooit *(~5 miljard exemplaren)*. Vertaald in 700+ talen.",
    checks: [
      {
        q: "Om wie draait het **christendom**?",
        options: ["Jezus", "Mohammed", "Boeddha", "Mozes"],
        answer: 0,
        wrongHints: [null, "Mohammed is de profeet van de islam, die rond 610 begon.", "Boeddha begon in India een eigen leer: het boeddhisme.", "Mozes is een profeet uit het jodendom. Hij leefde lang vóór het christendom begon."],
      },
      {
        q: "Wat vieren christenen met **Pasen**?",
        options: ["De opstanding van Jezus uit de dood", "De geboorte van Jezus in de stal", "Het sterven van Jezus aan het kruis", "De hemelvaart van Jezus"],
        answer: 0,
        wrongHints: [null, "De geboorte van Jezus vieren christenen met Kerstmis.", "Het sterven van Jezus herdenken christenen op Goede Vrijdag.", "Dat vieren christenen met Hemelvaartsdag, 40 dagen na Pasen."],
      },
      {
        q: "Wie is het hoofd van de **katholieke kerk**?",
        options: ["Paus", "Bisschop", "Kardinaal", "Dominee"],
        answer: 0,
        wrongHints: [null, "Een bisschop leidt de kerk in één gebied. Wie staat boven alle bisschoppen?", "Een kardinaal is een hoge leider in de katholieke kerk, maar er zijn er veel. Wie staat boven hen?", "Een dominee is een voorganger in een protestantse kerk. Wie is het hoofd van alle katholieken?"],
      },
      {
        q: "Wat begon **Maarten Luther** in 1517?",
        options: ["Reformatie", "Katholieke kerk", "Orthodoxe kerk", "Kruistochten"],
        answer: 0,
        wrongHints: [null, "De katholieke kerk bestond toen al eeuwen. Wat wilde Luther aan die kerk veranderen?", "De orthodoxe kerk splitste zich al in 1054 af, lang vóór Luther.", "De kruistochten waren in de middeleeuwen, honderden jaren vóór 1517."],
      },
    ],
  },
  {
    title: "Islam + jodendom",
    explanation:
      "**Islam** en **jodendom** zijn samen met christendom de **drie Abrahamitische godsdiensten** *(alle drie geloven in 1 God en eren Abraham)*.\n\n**ISLAM** ☪️\n\n• Volgers heten **moslims**.\n• Begon rond **610 n.Chr.** in **Mekka** *(Saoedi-Arabië)*.\n• **Profeet Mohammed** *(570-632)* kreeg openbaringen van **Allah** *(God)*.\n• Heilige boek = **Koran** *(in Arabisch)*.\n• ~1,9 miljard moslims wereldwijd.\n\n**Vijf zuilen van de islam**:\n1. **Sjahada** — geloofsbelijdenis *('Er is geen God dan Allah, en Mohammed is Zijn profeet')*.\n2. **Salaat** — 5x per dag bidden *(richting Mekka)*.\n3. **Zakaat** — geven aan armen *(2,5% van rijkdom)*.\n4. **Ramadan** — vasten van zonsopgang tot zonsondergang in heilige maand.\n5. **Hadj** — pelgrimsreis naar **Mekka** (Saoedi-Arabië) minstens 1x in leven.\n\n**Heilige plaatsen**:\n• **Mekka** *(belangrijkste — Kaaba in Grote Moskee)*.\n• **Medina** *(2e — graf van Mohammed)*.\n• **Jeruzalem** *(3e — Rotskoepel)*.\n\n**Hoofdrichtingen**:\n• **Soennieten** *(~85%)*.\n• **Sjiieten** *(~15%)*.\n• Verschillen sinds 632 over wie opvolger Mohammed mocht worden.\n\n**Heilige dagen**:\n• **Ramadan** — vasten + Koran lezen.\n• **Suikerfeest (Eid al-Fitr)** — einde Ramadan, feest.\n• **Offerfeest (Eid al-Adha)** — herinnert Abraham's offer.\n• **Vrijdag** — gemeenschappelijk gebed in moskee.\n\n**Regels**:\n• **Halal** = toegestaan *(zoals halal vlees)*.\n• **Haram** = verboden *(varkensvlees, alcohol)*.\n• Vrouwen + mannen vaak gescheiden in moskee.\n• Sommige vrouwen dragen **hoofddoek (hijab)** of **gezichtssluier (niqab)**.\n\n**Islam in NL**:\n~1 miljoen moslims (~5% bevolking). Vooral van Turkse + Marokkaanse afkomst.\nMeer dan 500 moskeeën in NL.\n\n**JODENDOM** ✡️\n\n• Volgers heten **joden**.\n• Oudste van de 3 godsdiensten *(>3000 jaar)*.\n• **Abraham, Isaak, Jakob** = aartsvaders.\n• **Mozes** = profeet die volk uit Egypte leidde.\n• Heilige boek = **Tenach** *(deel van christen-Bijbel, Oud Testament)*.\n• Daarbij **Talmoed** *(commentaren)*.\n\n**Belangrijkste leerstuk**:\n• **Eén God** *(JHWH)*.\n• Joden zijn 'uitverkoren volk' met **verbond** met God.\n• Wachten op **Messias** *(verlosser)* — Jezus is voor joden NIET de Messias.\n\n**Heilige plaatsen**:\n• **Jeruzalem** — vooral **Klaagmuur** *(rest van Tempel)*.\n• **Israël** = beloofde land.\n\n**Heilige dagen**:\n• **Sabbat** *(vrijdagavond - zaterdagavond)* — rustdag, geen werk.\n• **Rosj Hasjana** — Joods Nieuwjaar.\n• **Jom Kippoer** — Grote Verzoendag, vasten.\n• **Pesach** — herinnert uittocht uit Egypte.\n• **Chanoeka** — lichtfeest *(8 dagen, kaarsen)*.\n• **Poerim** — verkleedfeest.\n\n**Regels**:\n• **Kosjer** = toegestaan eten *(geen varken, geen schaaldieren, vlees + zuivel niet samen)*.\n• Synagoge = gebedshuis.\n• Mannen dragen vaak **keppeltje**.\n\n**Jodendom in NL**:\n~50.000 joden (~0,3%).\nOngeveer 3/4 van de NL-joden werd in WO2 vermoord *(Holocaust)*.\nBekende joodse persoon: **Anne Frank**.\n\n**Verschil joden, christenen, moslims**:\nAlle drie geloven in **één God van Abraham**, maar:\n• **Joden**: wachten op Messias.\n• **Christenen**: Jezus IS de Messias.\n• **Moslims**: Mohammed = laatste profeet; Abraham, Mozes en Jezus zijn voor moslims eerdere profeten.\n\n**Toets-feitje**:\n**Jeruzalem** is heilig voor alle drie de godsdiensten. Tempelberg / Rotskoepel staan op dezelfde plek — vandaar veel conflict door geschiedenis.",
    checks: [
      {
        q: "Hoeveel **zuilen** heeft de islam?",
        options: ["5", "10", "3", "7"],
        answer: 0,
        wrongHints: [null, "Tel de zuilen in de uitleg nog eens na.", "Drie is het aantal Abrahamitische godsdiensten. Tel de zuilen in de uitleg na.", "Tel de zuilen in de uitleg een voor een na."],
      },
      {
        q: "Welke van deze godsdiensten is het **oudst**?",
        options: ["Jodendom", "Christendom", "Islam", "Boeddhisme"],
        answer: 0,
        wrongHints: [null, "Het christendom begon met Jezus, ongeveer 2000 jaar geleden. Welke godsdienst in de uitleg is nog ouder?", "De islam begon rond 610 n.Chr. Is dat het oudst?", "Het boeddhisme begon rond 500 v.Chr., zo'n 2500 jaar geleden. Welke godsdienst in de uitleg is meer dan 3000 jaar oud?"],
      },
      {
        q: "In welke periode **vasten** moslims overdag?",
        options: ["Ramadan", "Suikerfeest", "Offerfeest", "Hadj"],
        answer: 0,
        wrongHints: [null, "Het Suikerfeest komt ná het vasten. Hoe heet de tijd daarvoor?", "Het Offerfeest herinnert aan het offer van Abraham. Is het een tijd van vasten?", "De hadj is de pelgrimsreis naar Mekka. Welke zuil van de islam gaat over vasten?"],
      },
      {
        q: "Wat betekent **kosjer**?",
        options: ["Eten dat volgens joodse regels mag", "Eten dat volgens islamitische regels mag", "Eten dat volgens islamitische regels verboden is", "Eten dat volgens joodse regels verboden is"],
        answer: 0,
        wrongHints: [null, "Eten dat volgens islamitische regels mag, heet halal. Bij welke godsdienst hoort het woord kosjer?", "Eten dat volgens islamitische regels verboden is, heet haram. Bij welke godsdienst hoort het woord kosjer?", "Kijk in de uitleg bij 'Regels' van het jodendom: betekent kosjer dat iets mag of dat het verboden is?"],
      },
    ],
  },
  {
    title: "Boeddhisme + hindoeïsme",
    explanation:
      "Twee grote **Aziatische** godsdiensten — anders dan Abrahamitische.\n\n**HINDOEÏSME** 🕉️\n\n• Oudste **levende** religie *(meer dan 4000 jaar)*.\n• Ontstaan in **India**.\n• ~1,2 miljard volgers *(meeste in India + Nepal)*.\n• **Geen stichter** *(verschillende boeken + tradities)*.\n• **Polytheïsme** *(meerdere goden)* — maar één **Brahman** als hoogste werkelijkheid.\n\n**Belangrijke goden**:\n• **Brahma** — schepper.\n• **Vishnu** — bewaarder.\n• **Shiva** — vernieuwer.\n• **Krishna, Ganesha (olifant), Hanuman (aap)** — andere.\n\n**Belangrijke begrippen**:\n• **Karma** — wat je doet, komt op je terug *(in dit leven of volgend)*.\n• **Dharma** — plicht volgens je positie in leven.\n• **Reïncarnatie / samsara** — ziel wordt herboren in ander lichaam.\n• **Moksha** — bevrijding uit cyclus *(eindbestemming)*.\n\n**Kastenstelsel**:\nVroeger werden hindoes verdeeld in **vier kasten** *(klassen)*:\n1. Brahmanen *(priesters)*.\n2. Kshatriya *(krijgers/heersers)*.\n3. Vaishya *(handelaren)*.\n4. Sudra *(arbeiders)*.\n+ **Onaanraakbaren / dalits** *(buiten kasten)*.\n\nOfficieel verboden in moderne India maar bestaat informeel nog.\n\n**Heilige boeken**:\n• **Veda's** *(oudste, mantras)*.\n• **Mahabharata** *(epos met Krishna)*.\n• **Ramayana** *(epos met Rama)*.\n• **Bhagavad Gita** *(filosofie)*.\n\n**Heilige plaatsen**:\n• **Ganges-rivier** — heilig, baden zuivert.\n• **Varanasi** — heiligste stad.\n• **Ayodhya, Vrindavan, Kashi** — andere.\n\n**Heilige dagen**:\n• **Diwali** *(lichtfeest, oktober/november)* — overwinning licht op donker.\n• **Holi** *(kleurenfeest, maart)* — voorjaar, mensen gooien kleur op elkaar.\n• **Navaratri** *(9-nachts-feest; veel hindoes vasten dan een paar dagen)*.\n\n**Regels**:\n• **Vegetarisme** vaak *(veel hindoes eten vegetarisch)*.\n• **Koe heilig** — geen rundvlees.\n• Veel meditatie + gebed thuis.\n\n**BOEDDHISME** ☸️\n\n• Ontstaan rond **500 v.Chr.** in **India**.\n• Stichter: **Siddhartha Gautama**, ook **Boeddha** *('de verlichte')*.\n• ~500 miljoen volgers, vooral in China, Japan, Thailand, Vietnam, Sri Lanka.\n• **Geen God** in westerse zin — meer **levensfilosofie**.\n\n**Verhaal van Boeddha**:\nPrins die alles had, maar zag lijden in wereld *(oude man, zieke, dode)*.\nVerliet paleis op zoek naar antwoord.\nMediteerde onder boom 49 dagen → werd **verlicht**.\nDaarna 45 jaar zijn leer onderwezen.\n\n**Vier Edele Waarheden** *(kern van leer)*:\n1. Leven = lijden *(dukkha)*.\n2. Lijden komt door **verlangen**.\n3. Lijden stopt als verlangen stopt.\n4. **Achtvoudig Pad** leidt daarheen.\n\n**Achtvoudig Pad**:\nJuiste begrip, denken, spreken, handelen, bestaan, ijver, aandacht, concentratie *(meditatie)*.\n\n**Doel**:\n• **Nirvana** = bevrijding uit cyclus van reïncarnatie + lijden.\n• Vergelijkbaar met hindoe-moksha.\n\n**Heilige plaatsen**:\n• **Bodhgaya** *(India)* — Boeddha verlicht onder boom.\n• **Lumbini** *(Nepal)* — geboren.\n• **Sarnath** *(India)* — eerste leerstoel.\n\n**Soorten**:\n• **Theravada** — Sri Lanka, Thailand.\n• **Mahayana** — China, Japan.\n• **Vajrayana** — Tibet *(Dalai Lama)*.\n\n**Regels**:\n• **Geen geweld** *(ahimsa)* — vegetarisme vaak.\n• **Mededogen** voor alle wezens.\n• **Meditatie** dagelijks.\n• Boeddhisten bidden en mediteren in een **tempel**; in Oost-Azië heeft die vaak de vorm van een **pagode** *(toren-tempel)*.\n• 5 voorschriften: geen doden, stelen, liegen, verkeerde seks, intoxicatie.\n\n**Toets-feitje**:\n**Dalai Lama** *(geboren 1935)* is leider van Tibetaans boeddhisme. Won **Nobelprijs voor de Vrede** *(1989)*. Bekend symbool van vredelievende religie.",
    checks: [
      {
        q: "Wie was **Boeddha**?",
        options: ["Een prins die in India een nieuwe leer begon", "Een monnik die nu de Tibetaanse boeddhisten leidt", "Een hindoegod die de wereld schiep", "Een Chinese wijze die leefregels gaf"],
        answer: 0,
        wrongHints: [null, "De leider van het Tibetaanse boeddhisme is nu de Dalai Lama. Boeddha leefde veel eerder.", "De hindoegod die schept, heet Brahma. Wat lees je in de uitleg bij 'Verhaal van Boeddha'?", "Die Chinese wijze heette Confucius. Wat lees je in de uitleg bij 'Verhaal van Boeddha'?"],
      },
      {
        q: "Wat is **karma**?",
        options: ["Wat je doet, komt op je terug", "Je plicht op jouw plek in het leven", "Opnieuw geboren worden", "Bevrijding uit de kringloop van leven"],
        answer: 0,
        wrongHints: [null, "Je plicht volgens je plek in het leven heet in het hindoeïsme dharma.", "Opnieuw geboren worden heet reïncarnatie. Karma hangt daarmee samen, maar betekent iets anders.", "Die bevrijding heet moksha: het einddoel. Karma betekent iets anders."],
      },
      {
        q: "Wat voor feest is **Diwali**?",
        options: ["Hindoeïstisch lichtfeest", "Hindoeïstisch kleurenfeest", "Joods lichtfeest", "Joods verkleedfeest"],
        answer: 0,
        wrongHints: [null, "Het kleurenfeest van de hindoes in maart heet Holi.", "Het joodse lichtfeest met acht dagen kaarsen heet Chanoeka.", "Het joodse verkleedfeest heet Poerim. Bij welke godsdienst hoort Diwali?"],
      },
      {
        q: "Wat is **nirvana** in het boeddhisme?",
        options: ["Bevrijding uit lijden en wedergeboorte", "Een hemel waar goede mensen heen gaan", "Steeds opnieuw geboren worden", "Een houding waarin je mediteert"],
        answer: 0,
        wrongHints: [null, "Nirvana is geen plek waar je na de dood heen gaat. Kijk in de uitleg bij 'Doel'.", "Steeds opnieuw geboren worden heet reïncarnatie. Wat wil een boeddhist met die kringloop?", "Meditatie is een weg — nirvana is het doel."],
      },
    ],
  },
  {
    title: "Eind-toets — godsdiensten mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Ongeveer **een op de drie** mensen op aarde hangt deze godsdienst aan. Welke is het?", options: ["Christendom", "Islam", "Jodendom", "Sikhisme"], answer: 0, wrongHints: [null, "De islam is heel groot: ongeveer een op de vier mensen. Is dat ook een op de drie?", "Het jodendom is klein: ongeveer 15 miljoen mensen. Hoeveel mensen is een op de drie mensen op aarde?", "Het sikhisme heeft ongeveer 25 miljoen aanhangers. Is dat een op de drie mensen op aarde?"] },
      { q: "Wat is het **heilige boek** van de islam?", options: ["Koran", "Bijbel", "Tora", "Veda's"], answer: 0, wrongHints: [null, "De Bijbel is het heilige boek van de christenen.", "De Tora hoort bij het jodendom.", "De Veda's zijn heilige boeken van het hindoeïsme."] },
      { q: "Wie is volgens moslims de **laatste profeet**?", options: ["Mohammed", "Jezus", "Abraham", "Mozes"], answer: 0, wrongHints: [null, "Moslims zien Jezus als een eerdere profeet. Wie kwam na hem?", "Moslims zien Abraham als een heel vroege profeet. Wie kwam als laatste?", "Moslims zien Mozes als een eerdere profeet. Wie kwam als laatste?"] },
      { q: "Welke **rivier** is heilig voor hindoes?", options: ["Ganges", "Nijl", "Jangtse", "Jordaan"], answer: 0, wrongHints: [null, "De Nijl stroomt door Egypte, in Afrika. Waar wonen de meeste hindoes?", "De Jangtse stroomt door China. Waar wonen de meeste hindoes?", "De Jordaan is belangrijk in de Bijbel. Welke rivier stroomt door India?"] },
      { q: "Na welke **vastentijd** vieren moslims het **Suikerfeest**?", options: ["Ramadan", "Jom Kippoer", "Veertigdagentijd", "Navaratri"], answer: 0, wrongHints: [null, "Op Jom Kippoer vasten joden één dag lang.", "In de veertigdagentijd vóór Pasen vasten sommige christenen.", "Tijdens Navaratri vasten veel hindoes een paar dagen."] },
      { q: "Lotte zegt: 'Ik ben **atheïst**.' Wat bedoelt ze daarmee?", options: ["Gelooft niet in een god", "Gelooft in God, maar gaat niet naar de kerk", "Gelooft in geesten en goden van de natuur", "Gelooft in één god en in Jezus"], answer: 0, wrongHints: [null, "Ook wie niet naar de kerk gaat, kan gelovig zijn. Zoek het woord atheïst op in het deel 'Wat is godsdienst?'.", "Geloven in goden en geesten van de natuur hoort bij natuurgodsdiensten. Zoek het woord atheïst op in het deel 'Wat is godsdienst?'.", "Geloven in één God en in Jezus hoort bij het christendom. Zoek het woord atheïst op in het deel 'Wat is godsdienst?'."] },
      { q: "Welke godsdiensten geloven in **reïncarnatie** (wedergeboorte)?", options: ["Hindoeïsme en boeddhisme", "Christendom en hindoeïsme", "Boeddhisme en islam", "Jodendom en christendom"], answer: 0, wrongHints: [null, "Klopt het voor allebei? Denk na over wat christenen geloven over het leven na de dood.", "Klopt het voor allebei? Denk na over wat moslims geloven over het leven na de dood.", "Geloven joden en christenen dat je ziel opnieuw geboren wordt in een ander lichaam?"] },
      { q: "Christenen komen samen in een **kerk**. Waar komen **moslims** samen om te bidden?", options: ["Moskee", "Synagoge", "Tempel", "Pagode"], answer: 0, wrongHints: [null, "In een synagoge komen joden samen.", "In een tempel komen bijvoorbeeld hindoes of boeddhisten samen.", "Een pagode is een tempel in de vorm van een toren, vooral bij boeddhisten in Oost-Azië."] },
      { q: "Welk geloof had de familie van **Anne Frank**?", options: ["Joods", "Christelijk", "Islamitisch", "Hindoeïstisch"], answer: 0, wrongHints: [null, "Waarom moest Anne zich met haar familie verstoppen?", "Welke groep mensen werd in de oorlog in Nederland vervolgd?", "De familie Frank kwam uit Duitsland. Waarom moesten ze in de oorlog onderduiken?"] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const godsdienstenCulturenPo = {
  id: "godsdiensten-culturen-po",
  title: "Godsdiensten + culturen (groep 6-8, Doorstroomtoets-stof)",
  emoji: "⛪",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / culturen",
  prerequisites: [],
  intro:
    "Godsdiensten + culturen voor groep 6-8, Doorstroomtoets-stof — wat is religie (5 wereldgodsdiensten, atheist, NL-statistieken) + christendom (Jezus, paus, Reformatie) + islam (5 zuilen, Ramadan) + jodendom (Abraham, Mozes, Sabbat) + boeddhisme (Boeddha, vier waarheden) + hindoeisme (karma, Diwali). Toets-burgerschap. ~15 min.",
  triggerKeywords: [
    "godsdienst", "religie",
    "christendom", "christenen", "Jezus", "Bijbel", "paus",
    "islam", "moslim", "Koran", "Mohammed", "Ramadan",
    "jodendom", "joden", "Torah", "Anne Frank",
    "boeddhisme", "Boeddha", "nirvana", "Dalai Lama",
    "hindoeisme", "hindoe", "karma", "Diwali", "Ganges",
    "atheist", "agnost", "secularisatie",
  ],
  chapters,
  steps,
};

export default godsdienstenCulturenPo;
