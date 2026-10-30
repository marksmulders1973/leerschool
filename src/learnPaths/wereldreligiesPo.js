// Leerpad: Wereldreligies (groep 7-8 basisschool)
// 6 stappen × 3 checks = 18 vragen. Toets-cultuur-stof.
// Stijl: feitelijk + neutraal (geen geloofsoordeel). Sluit aan op
// godsdiensten-culturen-po (al bestaand) maar gestructureerder per religie.

const chapters = [
  { letter: "A", title: "Wat is een wereldreligie?", emoji: "🌍", from: 0, to: 0 },
  { letter: "B", title: "Christendom + islam", emoji: "✝️", from: 1, to: 2 },
  { letter: "C", title: "Hindoeïsme + boeddhisme", emoji: "🕉️", from: 3, to: 4 },
  { letter: "D", title: "Jodendom + vergelijking", emoji: "✡️", from: 5, to: 5 },
];

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Toets-truc religies: koppel naam → heilig boek + gebouw + symbool. Monotheïsme (1 god) = christendom/islam/jodendom. Polytheïsme (meerdere goden) = hindoeïsme. Niet-theïstisch = boeddhisme (filosofie).",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const steps = [
  {
    title: "Stap 1 — Wat is een wereldreligie?",
    explanation: "Een **religie** = een geloof of levensbeschouwing met:\n- regels voor leven + dood\n- een heilig boek of leer\n- gebouwen voor samenkomst\n- rituelen + feestdagen\n- symbolen + kleren soms\n\n**5 grote wereldreligies** (op aantal aanhangers):\n\n| Religie | Aanhangers | Land van oorsprong |\n|---|---|---|\n| **Christendom** | ~2,4 miljard | huidig Israël/Palestina (1e eeuw n.Chr.) |\n| **Islam** | ~2 miljard | Arabisch schiereiland, nu Saudi-Arabië (7e eeuw n.Chr.) |\n| **Hindoeïsme** | ~1,2 miljard | India (oudste, >3000 jr) |\n| **Boeddhisme** | ~300-500 miljoen (schattingen verschillen) | India / Nepal (rond 500 v.Chr.) |\n| **Jodendom** | ~15 miljoen | huidig Israël (oudste monotheïsme) |\n\nDaarnaast: traditionele Chinese religies (taoïsme + confucianisme), Sikh-religie (~25-30 miljoen, India), en mensen zonder religie (~1,9 miljard).\n\nIn **Nederland**: ~43% gelovig (christendom + islam grootst), ~57% niet-gelovig. Steeds meer mensen zijn niet-gelovig.",
    emoji: "🌍",
    checks: [
      {
        q: "Welke religie heeft wereldwijd de **meeste aanhangers**?",
        options: ["Hindoeïsme", "Islam", "Christendom", "Boeddhisme"],
        answer: 2,
        wrongHints: ["Het hindoeïsme is groot, vooral in India. Kijk in de tabel: heeft een andere religie nog meer aanhangers?", "De islam is heel groot. Vergelijk de aantallen in de tabel: is er een religie met nog meer aanhangers?", null, "Het boeddhisme heeft enkele honderden miljoenen aanhangers. Kijk in de tabel: welke religies hebben er veel meer?"],
        explanation: "**Christendom** is wereldwijd de grootste religie met ~2,4 miljard aanhangers. Islam is 2e (~2 mld), hindoeïsme 3e (~1,2 mld), boeddhisme 4e (~300-500 mln).",
        uitlegPad: compact(
          "Top 5 wereldreligies: 1) christendom 2,4 mld, 2) islam 2 mld, 3) hindoeïsme 1,2 mld, 4) boeddhisme 0,3-0,5 mld, 5) jodendom 0,015 mld. Plus ~1,9 mld zonder religie.",
          { basis: "Christendom.", simpeler: "Grootste religie = christendom (2,4 mld).", nogSimpeler: "Christendom" },
          [{ woord: "wereldreligie", uitleg: "Religie met wereldwijde aanhangers." }],
        ),
      },
      {
        q: "Wat noem je een religie met **één god** (zoals christendom)?",
        options: ["Polytheïstisch", "Monotheïstisch", "Atheïstisch", "Agnostisch"],
        answer: 1,
        wrongHints: ["Poly betekent 'veel'. Past dat bij een religie met één god?", null, "Een atheïst gelooft helemaal niet in een god. Hoe heet een geloof met precies één god?", "Een agnost weet niet zeker of er een god is. Hoe heet een geloof met precies één god?"],
        explanation: "**Monotheïstisch** = mono (= één) + theos (= god). Drie grote monotheïsmen: christendom, islam, jodendom — alle drie geloven in dezelfde stamvader Abraham. **Polytheïstisch** = polys (= veel) = meerdere goden (hindoeïsme klassiek, oude Grieken/Romeinen).",
        uitlegPad: compact(
          "Mono = 1 (monotheïsme = 1 god). Poly = veel (polytheïsme = meerdere goden). Atheïsme = geen god. Agnosticisme = niet zeker.",
          { basis: "Monotheïstisch.", simpeler: "1 god = mono.", nogSimpeler: "Mono" },
          [{ woord: "monotheïsme", uitleg: "Geloof in één god (christendom/islam/jodendom)." }, { woord: "polytheïsme", uitleg: "Geloof in meerdere goden." }, { woord: "atheïsme", uitleg: "Niet geloven in god." }],
        ),
      },
      {
        q: "Welke van deze vier religies is het **oudst**?",
        options: ["Christendom", "Islam", "Hindoeïsme", "Boeddhisme"],
        answer: 2,
        wrongHints: ["Christendom is relatief jong — het ontstond in de eerste eeuw na Christus.", "Islam is juist de jongste van de grote wereldreligies — bekijk wanneer het is ontstaan.", null, "Boeddhisme is oud, maar is het ouder dan alle andere genoemde religies?"],
        explanation: "**Hindoeïsme** is de oudste — wortels van ruim 3500 jaar terug. Geen één 'stichter'. Boeddhisme volgt (6e eeuw v.Chr.), dan christendom (1e eeuw), islam (7e eeuw). Jodendom is ook heel oud (traditie: Abraham ~1800 v.Chr.).",
        uitlegPad: compact(
          "Tijdlijn: HINDOEÏSME >3500 jr (oudst, wortels vóór 2000 vChr). JODENDOM ~1800 vChr (Abraham, traditie). BOEDDHISME 6e eeuw vChr. CHRISTENDOM 1e eeuw nChr. ISLAM 7e eeuw nChr (jongst).",
          { basis: "Hindoeïsme oudste.", simpeler: "Hindoeïsme is +3000 jaar oud — oudste wereldreligie.", nogSimpeler: "Hindoeïsme" },
          [{ woord: "hindoeïsme", uitleg: "Oudste wereldreligie, ontstaan in India >3000 jaar geleden." }],
        ),
      },
    ],
  },
  {
    title: "Stap 2 — Christendom",
    explanation: "**Christendom** = grootste religie wereldwijd, ontstaan in het huidige Israël/Palestina rond jaar 0.\n\n**Belangrijkste feiten**:\n- **Centrale figuur**: Jezus Christus (geboren rond 4 v.Chr., gestorven rond 30 n.Chr.). 'Christus' = 'gezalfde' (= verlosser). Na zijn dood verspreidden zijn volgelingen het geloof.\n- **Heilig boek**: De **Bijbel** — 2 delen:\n  - Oude Testament (gedeeld met jodendom)\n  - Nieuwe Testament (over Jezus + apostelen)\n- **Gebouw**: **kerk** (rooms-katholiek + protestant) of basiliek/kathedraal (groot)\n- **Symbool**: **kruis** (Jezus stierf aan kruis)\n- **Heilige dag**: zondag\n- **Belangrijke feesten**: Kerstmis (geboorte Jezus, 25 dec), Pasen (opstanding Jezus), Pinksteren (Heilige Geest), Hemelvaartsdag\n\n**Hoofdstromingen**:\n- **Rooms-katholiek** (~1,3 mld) — paus is hoofd, Vaticaan. Beelden + heiligen.\n- **Protestants** (~900 mln) — afsplitsing 1517 door Maarten Luther. Bijbel centraal, minder ceremonie.\n- **Orthodox** (~220 mln) — vooral in Rusland, Griekenland. Eigen patriarch per land.\n\nIn **Nederland**: ~1 op 3 christen (was ~85%).",
    emoji: "✝️",
    checks: [
      {
        q: "Wat is het heilige boek van het christendom?",
        options: ["Koran", "Bijbel", "Tora", "Veda"],
        answer: 1,
        wrongHints: ["De Koran hoort bij een religie die pas in de 7e eeuw ontstond. Welk boek heeft een Oude en een Nieuwe Testament?", null, "De Tora hoort bij het jodendom. Christenen lezen die verhalen ook, maar hun heilige boek is groter. Hoe heet dat?", "De Veda is een heel oud boek uit India. Is het christendom in India ontstaan?"],
        explanation: "**Bijbel** = het heilige boek van het christendom. Bestaat uit Oude Testament (gedeeld met jodendom, ~39 boeken) + Nieuwe Testament (specifiek christelijk, ~27 boeken over Jezus + zijn leerlingen).",
        uitlegPad: compact(
          "Boeken-tabel: BIJBEL = christendom. KORAN = islam. TORA/TENACH = jodendom. VEDA = hindoeïsme. TRIPITAKA = boeddhisme.",
          { basis: "Bijbel.", simpeler: "Christendom = Bijbel.", nogSimpeler: "Bijbel" },
          [{ woord: "Bijbel", uitleg: "Heilig boek christendom — Oude + Nieuwe Testament." }, { woord: "Oude Testament", uitleg: "Eerste deel Bijbel, gedeeld met jodendom." }],
        ),
      },
      {
        q: "In welk gebouw komen christenen samen om te bidden?",
        options: ["Moskee", "Kerk", "Tempel", "Synagoge"],
        answer: 1,
        wrongHints: ["In een moskee bidden moslims. Waar gaan christenen op zondag heen?", null, "In een tempel bidden vooral hindoes en boeddhisten. Waar gaan christenen op zondag heen?", "In een synagoge komen joden samen. Waar gaan christenen op zondag heen?"],
        explanation: "**Kerk** = christelijk gebedshuis. Grote kerken heten **kathedraal** of **basiliek**. De bekendste kerk van de rooms-katholieken is de Sint-Pietersbasiliek in Vaticaanstad, een klein land binnen de stad Rome.",
        uitlegPad: compact(
          "Gebouwen-tabel: KERK/KATHEDRAAL = christendom. MOSKEE = islam. TEMPEL = hindoeïsme. PAGODE/TEMPEL = boeddhisme. SYNAGOGE = jodendom.",
          { basis: "Kerk.", simpeler: "Christenen = kerk.", nogSimpeler: "Kerk" },
          [{ woord: "kerk", uitleg: "Christelijk gebedshuis." }, { woord: "kathedraal", uitleg: "Grote bisschopskerk." }],
        ),
      },
      {
        q: "Wie zette in 1517 de **Reformatie** in gang, waaruit de **protestantse kerken** ontstonden?",
        options: ["Willem van Oranje", "Paus Leo X", "Maarten Luther", "Keizer Karel V"],
        answer: 2,
        wrongHints: ["Willem van Oranje leidde later de opstand in Nederland. Wie begon al eerder, in 1517, met de Reformatie?", "Paus Leo X was in 1517 juist het hoofd van de rooms-katholieke kerk. Zou hij zich van zijn eigen kerk afsplitsen?", null, "Karel V werd in 1519 keizer van een groot rijk en bleef zijn hele leven katholiek. Wie kwam in opstand tegen de kerk?"],
        explanation: "**Maarten Luther** (1483-1546) = Duitse theoloog. In 1517 spijkerde hij 95 stellingen op een kerkdeur in Wittenberg om misbruik in de rooms-katholieke kerk aan te klagen. Dit was het begin van de **Reformatie** → ontstaan van protestantse kerken.",
        uitlegPad: compact(
          "Maarten Luther 1517 = begin van Reformatie. Splitsing rooms-katholiek vs protestants. Belangrijk in Nederland: 80-jarige Oorlog ging deels om religievrijheid.",
          { basis: "Maarten Luther.", simpeler: "Protestants = Luther 1517.", nogSimpeler: "Luther" },
          [{ woord: "Reformatie", uitleg: "Religieuze hervormingsbeweging 16e eeuw — afsplitsing van rooms-katholieke kerk." }, { woord: "Maarten Luther", uitleg: "Duitse theoloog, startte Reformatie 1517." }],
        ),
      },
    ],
  },
  {
    title: "Stap 3 — Islam",
    explanation: "**Islam** = 2e grootste religie, ontstaan op het Arabisch schiereiland (nu Saudi-Arabië) in de 7e eeuw n.Chr.\n\n**Belangrijkste feiten**:\n- **Stichter / profeet**: **Mohammed** (570-632 n.Chr.). Volgens islam ontving hij openbaringen van God (Allah) via aartsengel Gabriël.\n- **Heilig boek**: **Koran** — bevat de openbaringen aan Mohammed (114 hoofdstukken = soera's).\n- **Gebouw**: **moskee**. Heeft een toren = **minaret** (vanaf waar oproep tot gebed klinkt).\n- **Symbool**: **wassende maan + ster** (op vlaggen van veel moslimlanden).\n- **Heilige dag**: vrijdag (vrijdagmiddaggebed in moskee).\n- **Heilige stad**: **Mekka** (Saudi-Arabië) — geboorteplek Mohammed + Kaäba.\n\n**5 zuilen van de islam** (basisplichten):\n1. Geloofsbelijdenis (Shahada — 'er is geen god dan Allah, Mohammed is zijn profeet')\n2. 5× per dag bidden (salat)\n3. Vasten in **Ramadan** (1 maand, geen eten/drinken overdag)\n4. Liefdadigheid (zakat — % van inkomen geven)\n5. Bedevaart naar **Mekka** (hadj — minstens 1× in leven indien mogelijk)\n\n**Hoofdstromingen**: soennieten (~85%) + sjiieten (~15%).\nIn **Nederland**: ~5% moslim.",
    emoji: "☪️",
    checks: [
      {
        q: "Wie is de **belangrijkste profeet** van de islam?",
        options: ["Jezus", "Mohammed", "Abraham", "Boeddha"],
        answer: 1,
        wrongHints: ["Jezus wordt in de islam ook als profeet gezien, maar hij is niet de belangrijkste. Wie ontving volgens moslims de Koran?", null, "Abraham is een oude stamvader van drie religies. Wie ontving volgens moslims de Koran?", "Boeddha hoort bij een religie uit India zonder schepper-god. Wie ontving volgens moslims de Koran?"],
        explanation: "**Mohammed** (570-632 n.Chr.) = de profeet van de islam volgens de moslims. Geboren in Mekka. Ontving openbaringen van Allah die werden opgeschreven in de Koran.",
        uitlegPad: compact(
          "Mohammed = profeet islam (570-632). Geboren Mekka. Stierf in Medina. Koran = zijn openbaringen.",
          { basis: "Mohammed.", simpeler: "Islam-profeet = Mohammed.", nogSimpeler: "Mohammed" },
          [{ woord: "profeet", uitleg: "Iemand die boodschappen van god doorgeeft aan mensen." }, { woord: "Allah", uitleg: "Arabische naam voor god in de islam." }],
        ),
      },
      {
        q: "Wat is het heilige boek van de islam?",
        options: ["Bijbel", "Tora", "Koran", "Veda"],
        answer: 2,
        wrongHints: ["De Bijbel is het boek van de christenen. Welk boek bevat de openbaringen aan Mohammed?", "De Tora is het boek van de joden. Welk boek is in het Arabisch geschreven?", null, "De Veda komt uit India en hoort bij het hindoeïsme. Welk boek lezen moslims in de moskee?"],
        explanation: "**Koran** = heilig boek van de islam. Bevat de openbaringen die Mohammed kreeg van Allah via aartsengel Gabriël. 114 hoofdstukken (soera's). Geschreven in Arabisch.",
        uitlegPad: compact(
          "Koran = islam (114 soera's in Arabisch). Bijbel = christendom. Tora = jodendom. Veda = hindoeïsme. Tripitaka = boeddhisme.",
          { basis: "Koran.", simpeler: "Islam = Koran.", nogSimpeler: "Koran" },
          [{ woord: "Koran", uitleg: "Heilig boek islam — 114 soera's in Arabisch." }, { woord: "soera", uitleg: "Hoofdstuk in de Koran." }],
        ),
      },
      {
        q: "Hoe vasten moslims tijdens de **Ramadan**?",
        options: ["Een maand lang overdag niet eten en drinken", "Een maand lang elke dag maar één maaltijd", "Een week lang dag en nacht niet eten", "Elke vrijdag de hele dag niet eten"],
        answer: 0,
        wrongHints: [null, "Het gaat niet om het aantal maaltijden. Wanneer op de dag eten en drinken moslims in de Ramadan niet?", "De Ramadan is een maand van de islamitische kalender. Hoe lang duurt het vasten dan?", "Op vrijdag is het grote gebed in de moskee. Het vasten van de Ramadan hoort bij iets anders. Wat?"],
        explanation: "**Ramadan** = 9e maand van islamitische kalender. Volwassen moslims vasten **van zonsopgang tot zonsondergang** (geen eten/drinken/roken). 's Avonds is **Iftar** (eten-bij-zonsondergang). Eind van Ramadan = **Suikerfeest (Eid al-Fitr)**.",
        uitlegPad: compact(
          "Ramadan = vasten van zonsopgang tot zonsondergang, hele maand lang. Eind = Suikerfeest. Een van 5 zuilen islam.",
          { basis: "Dag-vasten 1 maand.", simpeler: "Ramadan = overdag niet eten, hele maand.", nogSimpeler: "Dag-vasten" },
          [{ woord: "Ramadan", uitleg: "Maand van vasten (overdag) in islam." }, { woord: "Suikerfeest", uitleg: "Eid al-Fitr — feest na Ramadan." }],
        ),
      },
    ],
  },
  {
    title: "Stap 4 — Hindoeïsme + boeddhisme",
    explanation: "**🕉️ Hindoeïsme**\n- **Oorsprong**: India, >3000 jaar oud (oudste religie). Geen één stichter.\n- **Heilige boeken**: **Veda** + Bhagavad Gita\n- **Gebouw**: **tempel** (kleurrijk + veel beelden)\n- **Symbool**: **Om** (heilig geluid 'aum')\n- **Veel goden**: Brahma (schepper), Vishnoe (behouder), Shiva (vernieuwer) + duizenden anderen. Eigenlijk: één goddelijk principe (Brahman) in vele vormen.\n- **Reïncarnatie**: na dood word je opnieuw geboren in andere vorm (mens, dier, etc.) gebaseerd op karma (goede/slechte daden).\n- **Heilige rivier**: **Ganges** in India.\n- **Geen vlees**: veel hindoes eten vegetarisch (vooral geen rund — koe = heilig).\n\n**☸️ Boeddhisme**\n- **Stichter**: **Boeddha** ('de Ontwaakte') = Siddhartha Gautama (~563-483 v.Chr., India/Nepal).\n- **Heilig boek**: **Tripitaka** (3 manden van leer)\n- **Gebouw**: **tempel** of **pagode** (gelaagde toren)\n- **Symbool**: **wiel van dharma** (8 spaken = 8-voudig pad)\n- **Geen god** in westerse zin — boeddhisme is filosofie/levensweg.\n- **4 edele waarheden**: 1) lijden bestaat 2) door verlangen 3) stop verlangen = stop lijden 4) volg achtvoudig pad.\n- **Reïncarnatie + karma** ook (gedeeld met hindoeïsme).\n- **Doel**: verlichting + bevrijding uit cyclus geboorte-dood.",
    emoji: "🕉️",
    checks: [
      {
        q: "In welk land ontstond het **hindoeïsme**?",
        options: ["China", "India", "Iran", "Egypte"],
        answer: 1,
        wrongHints: ["In China ontstonden het taoïsme en het confucianisme. In welk land stroomt de heilige rivier van de hindoes?", null, "In Iran is nu vooral de islam groot; vroeger had het een eigen oude godsdienst. In welk land stroomt de heilige rivier van de hindoes?", "Egypte had in de oudheid eigen goden, zoals Ra. In welk land stroomt de Ganges?"],
        explanation: "**India** is bakermat van hindoeïsme. Ook van boeddhisme (dat zich later verspreidde). ~80% van India is hindoe. Hindoeïsme is oudste wereldreligie, >3000 jaar oud.",
        uitlegPad: compact(
          "Hindoeïsme = India (oudste wereldreligie). Boeddhisme ook India/Nepal. China = taoïsme/confucianisme. Iran (vroeger) = zoroastrisme.",
          { basis: "India.", simpeler: "Hindoeïsme = India.", nogSimpeler: "India" },
          [{ woord: "hindoeïsme", uitleg: "Oudste wereldreligie, ontstaan in India." }],
        ),
      },
      {
        q: "Wie was **Siddhartha Gautama**?",
        options: ["Prins die het boeddhisme stichtte", "Farao die een piramide liet bouwen", "Keizer die het christendom toestond", "Denker die het taoïsme begon"],
        answer: 0,
        wrongHints: [null, "Een farao heerste in Egypte. Siddhartha leefde ergens anders. Welke leer begon hij?", "Siddhartha leefde zo'n 500 jaar vóór de eerste Romeinse keizer. Kan hij dan keizer van Rome zijn geweest?", "Het taoïsme begon met Lao Tzu in China. Siddhartha hoorde bij een andere leer."],
        explanation: "**Siddhartha Gautama** (rond 500 v.Chr.; volgens de overlevering ~563-483 v.Chr.) = prins, geboren in Lumbini (nu Nepal), vlak bij de grens met India. Verliet zijn paleis om antwoord te zoeken op het lijden. Mediteerde onder bodhi-boom en bereikte 'verlichting' (=Boeddha). Onderwees het 8-voudige pad.",
        uitlegPad: compact(
          "Siddhartha Gautama = Boeddha. Prins uit het grensgebied van India en Nepal, rond 500 vChr. Verlichting onder bodhi-boom. Stichter boeddhisme. 4 edele waarheden + 8-voudig pad.",
          { basis: "Prins die het boeddhisme stichtte.", simpeler: "Boeddha = prins Siddhartha, geboren in het huidige Nepal.", nogSimpeler: "Prins" },
          [{ woord: "Boeddha", uitleg: "De 'Ontwaakte' — Siddhartha Gautama na zijn verlichting." }, { woord: "verlichting", uitleg: "In boeddhisme: ontwaken uit illusie + bevrijding uit lijden." }],
        ),
      },
      {
        q: "Wat geloven hindoes en boeddhisten allebei over wat er gebeurt **na de dood**?",
        options: ["Je gaat naar de hemel of de hel", "Je wordt opnieuw geboren", "Er is niets meer na de dood", "Je blijft als geest bij je familie"],
        answer: 1,
        wrongHints: ["Hemel en hel horen vooral bij het christendom en de islam. Wat zegt de uitleg over karma?", null, "Volgens hindoes en boeddhisten houdt het niet zomaar op. Wat bepaalt karma volgens de uitleg?", "Over geesten die blijven gaat de uitleg niet. Wat bepaalt karma volgens de uitleg?"],
        explanation: "**Reïncarnatie** = herboren worden in nieuwe vorm. Welke vorm hangt af van **karma** (je goede/slechte daden in vorig leven). Zowel hindoeïsme als boeddhisme delen dit concept. Doel: uit deze cyclus losbreken (moksha/nirwana).",
        uitlegPad: compact(
          "Reïncarnatie = herboren worden in nieuwe vorm na dood. Karma bepaalt nieuwe vorm. Hindoeïsme + boeddhisme delen dit. Christendom/islam = hemel/hel-concept.",
          { basis: "Reïncarnatie.", simpeler: "Hindoe + boeddhist = herboren worden.", nogSimpeler: "Reïncarnatie" },
          [{ woord: "reïncarnatie", uitleg: "Wedergeboorte in nieuwe vorm na dood." }, { woord: "karma", uitleg: "Optelsom van goede/slechte daden — bepaalt vorm volgende leven." }, { woord: "nirwana", uitleg: "Boeddhistisch doel: bevrijding uit cyclus." }],
        ),
      },
    ],
  },
  {
    title: "Stap 5 — Jodendom",
    explanation: "**Jodendom** = oudste van de **3 monotheïstische** wereldreligies (christendom + islam zijn jonger maar groeiden veel groter).\n\n**Belangrijkste feiten**:\n- **Oorsprong**: ~1800 v.Chr. (stamvader Abraham), in huidig Israël/Palestina.\n- **Stichters/aartsvaders**: **Abraham, Isaak, Jakob**. Plus **Mozes** die de 10 Geboden ontving.\n- **Heilig boek**: **Tora** (eerste 5 boeken van Bijbel — 'Wet') + **Tenach** (hele Hebreeuwse Bijbel).\n- **Gebouw**: **synagoge** (Hebreeuws: bet knesset = 'huis van samenkomst').\n- **Symbool**: **davidster** (zespuntige ster) + 7-armige kandelaar (menora).\n- **Heilige dag**: **sabbat** (zaterdag — vrijdag-avond tot zaterdag-avond). Geen werk.\n- **Heilige stad**: **Jeruzalem** — met Klaagmuur (laatste rest van oude tempel).\n- **Aanhangers**: ~15 miljoen wereldwijd. Grootste gemeenschappen: Israël (7 mln) + VS (6 mln). NL: ~30.000.\n\n**Belangrijke feesten**:\n- **Pesach** (Pasen — herinnert vlucht uit Egypte onder Mozes)\n- **Rosj Hasjana** (joods Nieuwjaar — sep/okt)\n- **Jom Kippoer** (Grote Verzoendag — vasten, vergeving)\n- **Chanoeka** (Lichtfeest — dec, 8 avonden een kaarsje erbij op de chanoekia, een kandelaar met 9 armen)\n\n**Tragiek**: in de **Holocaust**, tijdens de Tweede Wereldoorlog (1939-1945), werden ~6 miljoen Joden vermoord door Nazi-Duitsland. In 1948 werd de staat **Israël** gesticht.",
    emoji: "✡️",
    checks: [
      {
        q: "Wat is het symbool van het jodendom?",
        options: ["Kruis", "Halve maan", "Davidster", "Om-teken"],
        answer: 2,
        wrongHints: ["Het kruis hoort bij het christendom. Welk teken staat op de vlag van Israël?", "De halve maan zie je op vlaggen van veel moslimlanden. Welk teken hoort bij de synagoge?", null, "Het Om-teken hoort bij het hindoeïsme uit India. Welk teken staat op de vlag van Israël?"],
        explanation: "**Davidster** = zespuntige ster. Genoemd naar koning David. Op de vlag van Israël. Plus **menora** = 7-armige kandelaar (oud joods symbool).",
        uitlegPad: compact(
          "Symbolen-tabel: KRUIS=christendom. HALVE MAAN+STER=islam. DAVIDSTER=jodendom. OM=hindoeïsme. WIEL VAN DHARMA=boeddhisme.",
          { basis: "Davidster.", simpeler: "Jodendom = Davidster (zespuntige ster).", nogSimpeler: "Davidster" },
          [{ woord: "Davidster", uitleg: "Zespuntige ster — symbool jodendom + Israël." }, { woord: "menora", uitleg: "7-armige kandelaar — oudste joodse symbool." }],
        ),
      },
      {
        q: "In welke stad ligt de **Klaagmuur**, de belangrijkste gebedsplaats van het jodendom?",
        options: ["Mekka", "Vaticaanstad", "Jeruzalem", "Bethlehem"],
        answer: 2,
        wrongHints: ["Mekka is de heilige stad van de islam. Welke stad is heilig voor joden?", "Vaticaanstad hoort bij de rooms-katholieke kerk. Welke stad is heilig voor joden?", null, "In Bethlehem is volgens de Bijbel Jezus geboren. In welke stad stond de oude joodse tempel?"],
        explanation: "**Jeruzalem** (Israël) = oude heilige stad voor 3 monotheïstische religies. **Klaagmuur** = laatste overblijfsel van de oude Tempel van Jeruzalem (verwoest 70 n.Chr. door Romeinen). Joden bidden + steken briefjes in de muur.",
        uitlegPad: compact(
          "Jeruzalem = heilig voor 3 religies: Klaagmuur (joden), Heilig Graf (christenen), Rotskoepel (moslims). Plus tempelberg.",
          { basis: "Jeruzalem.", simpeler: "Klaagmuur = Jeruzalem.", nogSimpeler: "Jeruzalem" },
          [{ woord: "Klaagmuur", uitleg: "Heilige muur in Jeruzalem — rest van oude Tempel." }],
        ),
      },
      {
        q: "Op welke **dag van de week** vieren joden hun heilige dag (sabbat)?",
        options: ["Vrijdag", "Zaterdag", "Zondag", "Woensdag"],
        answer: 1,
        wrongHints: ["Vrijdag is de heilige dag van de islam. Welke dag hoort bij de joden?", null, "Zondag is de heilige dag van de christenen. Welke dag hoort bij de joden?", "Geen van de grote religies rust op woensdag. Welke dag hoort bij de joden?"],
        explanation: "**Sabbat** = zaterdag (van vrijdagavond tot zaterdagavond). Volgens Tora rustte God op de 7e dag van de schepping. Strikt orthodoxe joden werken dan helemaal niet (geen lichten aan, geen auto).",
        uitlegPad: compact(
          "Heilige dagen: vrijdag=islam. zaterdag=jodendom (sabbat). zondag=christendom. Sabbat = vanaf zonsondergang vrijdag tot zonsondergang zaterdag.",
          { basis: "Zaterdag.", simpeler: "Joden = sabbat zaterdag.", nogSimpeler: "Zaterdag" },
          [{ woord: "sabbat", uitleg: "Joodse rustdag — zaterdag." }],
        ),
      },
    ],
  },
  {
    title: "Stap 6 — Vergelijking: religies in 1 overzicht",
    explanation: "**📊 Overzicht 5 wereldreligies**:\n\n| | Christendom | Islam | Jodendom | Hindoeïsme | Boeddhisme |\n|---|---|---|---|---|---|\n| **Boek** | Bijbel | Koran | Tora | Veda | Tripitaka |\n| **Gebouw** | Kerk | Moskee | Synagoge | Tempel | Tempel/Pagode |\n| **Symbool** | Kruis | Halve maan | Davidster | Om | Dharma-wiel |\n| **Heilige dag** | Zondag | Vrijdag | Zaterdag | (geen vaste) | (geen vaste) |\n| **Belangrijkste figuur** | Jezus | Mohammed | Abraham/Mozes | (geen stichter) | Boeddha |\n| **Aantal goden** | 1 | 1 | 1 | veel | (geen god) |\n| **Heilige stad** | Jeruzalem/Rome | Mekka | Jeruzalem | Varanasi | Bodh Gaya |\n\n**3 grote groepen**:\n- **Monotheïstisch** (1 god): christendom, islam, jodendom — alle drie 'Abrahamitische' religies (delen stamvader Abraham).\n- **Polytheïstisch** (meerdere goden): hindoeïsme (en oude Grieken/Romeinen/Vikingen).\n- **Niet-theïstisch** (geen god): boeddhisme (meer filosofie dan religie).\n\n**Religies + landen** (waar meerderheid heeft):\n- 🇳🇱 Nederland: ~35% christen + ~5% moslim + ~57% geen\n- 🇮🇱 Israël: vooral jodendom\n- 🇸🇦 Saudi-Arabië: vrijwel 100% islam\n- 🇮🇳 India: ~80% hindoe + ~15% moslim\n- 🇹🇭 Thailand: ~95% boeddhist",
    emoji: "🌐",
    checks: [
      {
        q: "Welke drie wereldreligies geloven in **één god** en hebben dezelfde stamvader **Abraham**?",
        options: [
          "Christendom, islam en hindoeïsme",
          "Christendom, islam en jodendom",
          "Christendom, jodendom en boeddhisme",
          "Islam, hindoeïsme en boeddhisme",
        ],
        answer: 1,
        wrongHints: ["Het hindoeïsme kent veel goden. Past dat bij één god?", null, "Het boeddhisme kent geen schepper-god. Past dat bij één god?", "Hindoeïsme en boeddhisme komen uit India en hebben geen stamvader Abraham. Welke religies wel?"],
        explanation: "**Abrahamitische religies** = christendom + islam + jodendom — alle 3 monotheïstisch + delen Abraham als stamvader + Oude Testament-figuren. Hindoeïsme = polytheïstisch. Boeddhisme = niet-theïstisch.",
        uitlegPad: compact(
          "Monotheïsmen: christendom, islam, jodendom. Polytheïsme: hindoeïsme. Niet-theïstisch: boeddhisme. Alle 3 monotheïsmen = delen Abraham als stamvader.",
          { basis: "Christendom + islam + jodendom.", simpeler: "3 boekreligies met Abraham.", nogSimpeler: "Christendom, islam, jodendom: één god" },
          [{ woord: "Abrahamitische religies", uitleg: "Christendom + islam + jodendom — delen Abraham als stamvader." }],
        ),
      },
      {
        q: "Welk land heeft het hindoeïsme als grootste religie?",
        options: ["Saudi-Arabië", "Israël", "India", "Thailand"],
        answer: 2,
        wrongHints: ["In Saudi-Arabië is bijna iedereen moslim. In welk land stroomt de heilige rivier van de hindoes?", "In Israël wonen vooral joden. In welk land ontstond het hindoeïsme?", null, "In Thailand zijn de meeste mensen boeddhist. In welk land stroomt de heilige rivier van de hindoes?"],
        explanation: "**India** = ~80% hindoe (~1 miljard mensen). Daarnaast ~15% moslim (~200 mln). Vandaar dat India veruit grootste hindoe-bevolking heeft.",
        uitlegPad: compact(
          "Hindoeïsme = India (bakermat + grootste bevolking). Boeddhisme = Thailand/Sri Lanka/Tibet. Islam = Saudi-Arabië/Iran. Jodendom = Israël/VS.",
          { basis: "India.", simpeler: "Hindoeïsme = India (80% hindoe).", nogSimpeler: "India" },
          [{ woord: "India", uitleg: "Land met ~1 mld hindoes (80% bevolking)." }],
        ),
      },
      {
        q: "Welke religie kent **geen** schepper-god?",
        options: ["Christendom", "Islam", "Hindoeïsme", "Boeddhisme"],
        answer: 3,
        wrongHints: ["Christenen geloven in één god die de wereld schiep. Welke religie is meer een levensweg?", "Moslims geloven in één god: Allah. Welke religie is meer een levensweg?", "Hindoes vereren veel goden, zoals Brahma de schepper. Welke religie is meer een levensweg?", null],
        explanation: "**Boeddhisme** = niet-theïstische religie. Geen schepper-god, geen aanbidding van god. Wel: mediteren, ethisch leven, streven naar verlichting (nirwana). Meer een filosofie/levensweg dan een religie in westerse zin.",
        uitlegPad: compact(
          "Boeddhisme = niet-theïstisch = geen schepper-god. Wel: meditatie + 8-voudig pad + verlichting. Soms gerekend als filosofie i.p.v. religie.",
          { basis: "Boeddhisme.", simpeler: "Boeddha = geen god, wel filosofie.", nogSimpeler: "Boeddhisme" },
          [{ woord: "niet-theïstisch", uitleg: "Zonder geloof in een god — wel andere spirituele praktijken." }],
        ),
      },
    ],
  },
];

const wereldreligiesPo = {
  id: "wereldreligies-po",
  title: "Wereldreligies — 5 grote religies van de wereld",
  emoji: "🌐",
  level: "po",
  subject: "wereldorientatie",
  referentieNiveau: "po-1F",
  sloThema: "Wereldoriëntatie - religies + culturen",
  intro: "18 vragen toetsstof groep 7-8 over de 5 wereldreligies: christendom, islam, hindoeïsme, boeddhisme, jodendom. Heilige boeken, gebouwen, symbolen, feesten. Neutraal + feitelijk.",
  triggerKeywords: ["wereldreligies", "christendom", "islam", "jodendom", "hindoeisme", "boeddhisme", "heilige boeken", "monotheisme polytheisme"],
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
  ],
  chapters,
  steps,
};

export default wereldreligiesPo;
