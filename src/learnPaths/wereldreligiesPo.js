// Leerpad: Wereldreligies (groep 7-8 basisschool)
// 6 stappen × 3 checks = 18 vragen. Cito-cultuur-stof.
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
  theorie: "Cito-truc religies: koppel naam → heilig boek + gebouw + symbool. Monotheïsme (1 god) = christendom/islam/jodendom. Polytheïsme (meerdere goden) = hindoeïsme. Niet-theïstisch = boeddhisme (filosofie).",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const steps = [
  {
    title: "Stap 1 — Wat is een wereldreligie?",
    explanation: "Een **religie** = een geloof of levensbeschouwing met:\n- regels voor leven + dood\n- een heilig boek of leer\n- gebouwen voor samenkomst\n- rituelen + feestdagen\n- symbolen + kleren soms\n\n**5 grote wereldreligies** (op aantal aanhangers):\n\n| Religie | Aanhangers | Land van oorsprong |\n|---|---|---|\n| **Christendom** | ~2,4 miljard | Israël (1e eeuw n.Chr.) |\n| **Islam** | ~1,9 miljard | Saudi-Arabië (7e eeuw n.Chr.) |\n| **Hindoeïsme** | ~1,2 miljard | India (oudste, >3000 jr) |\n| **Boeddhisme** | ~500 miljoen | India / Nepal (6e eeuw v.Chr.) |\n| **Jodendom** | ~15 miljoen | Israël (oudste monotheïsme) |\n\nDaarnaast: traditionele Chinese religies (taoïsme + confucianisme), Sikh-religie (~30 miljoen, India), en mensen zonder religie (~1,2 miljard).\n\nIn **Nederland**: ~43% gelovig (christendom + islam grootst), ~57% niet-gelovig. Steeds meer mensen zonder religie (secularisatie).",
    emoji: "🌍",
    checks: [
      {
        q: "Welke religie heeft wereldwijd de **meeste aanhangers**?",
        options: ["Hindoeïsme", "Islam", "Christendom", "Boeddhisme"],
        answer: 2,
        wrongHints: ["Hindoeïsme is groot (3e plek met ~1.2 mld) maar niet de grootste.", "Islam is 2e met ~1.9 mld — bijna de grootste, maar niet helemaal.", null, "Boeddhisme staat op 4e plek met ~500 mln."],
        explanation: "**Christendom** is wereldwijd de grootste religie met ~2,4 miljard aanhangers. Islam is 2e (~1,9 mld), hindoeïsme 3e (~1,2 mld), boeddhisme 4e (~500 mln). Antwoord C.",
        uitlegPad: compact(
          "Top 5 wereldreligies: 1) christendom 2,4 mld, 2) islam 1,9 mld, 3) hindoeïsme 1,2 mld, 4) boeddhisme 0,5 mld, 5) jodendom 0,015 mld. Plus 1,2 mld zonder religie.",
          { basis: "Christendom. = C.", simpeler: "Grootste religie = christendom (2,4 mld). = C.", nogSimpeler: "Christendom = C." },
          [{ woord: "wereldreligie", uitleg: "Religie met wereldwijde aanhangers." }],
        ),
      },
      {
        q: "Wat noem je een religie met **één god** (zoals christendom)?",
        options: ["polytheïstisch", "monotheïstisch", "atheïstisch", "agnostisch"],
        answer: 1,
        wrongHints: ["Poly = meerdere goden (zoals hindoeïsme).", null, "Atheïst = iemand die niet in god gelooft.", "Agnost = iemand die zegt niet zeker te weten of er god is."],
        explanation: "**Monotheïstisch** = mono (= één) + theos (= god). Drie grote monotheïsmen: christendom, islam, jodendom — alle drie geloven in dezelfde stamvader Abraham. **Polytheïstisch** = polys (= veel) = meerdere goden (hindoeïsme klassiek, oude Grieken/Romeinen). Antwoord B.",
        uitlegPad: compact(
          "Mono = 1 (monotheïsme = 1 god). Poly = veel (polytheïsme = meerdere goden). Atheïsme = geen god. Agnosticisme = niet zeker.",
          { basis: "Monotheïstisch. = B.", simpeler: "1 god = mono. = B.", nogSimpeler: "Mono = B." },
          [{ woord: "monotheïsme", uitleg: "Geloof in één god (christendom/islam/jodendom)." }, { woord: "polytheïsme", uitleg: "Geloof in meerdere goden." }, { woord: "atheïsme", uitleg: "Niet geloven in god." }],
        ),
      },
      {
        q: "Welke religie is **de oudste van de 5 wereldreligies**?",
        options: ["Christendom", "Islam", "Hindoeïsme", "Boeddhisme"],
        answer: 2,
        wrongHints: ["Christendom = 1e eeuw n.Chr. (~2000 jaar oud).", "Islam = 7e eeuw n.Chr. (~1400 jaar oud) — jongste van de 4.", null, "Boeddhisme = 6e eeuw v.Chr. (~2500 jaar oud), maar nog steeds jonger dan hindoeïsme."],
        explanation: "**Hindoeïsme** is de oudste — >3000 jaar oud (~1500 v.Chr.). Geen één 'stichter'. Boeddhisme volgt (6e eeuw v.Chr.), dan christendom (1e eeuw), islam (7e eeuw). Jodendom is ook heel oud (~1800 v.Chr.) maar 'jonger' dan oudste hindoe-teksten. Antwoord C.",
        uitlegPad: compact(
          "Tijdlijn: HINDOEÏSME >3000 jr (oudst, ~1500 vChr). JODENDOM ~1800 vChr (Abraham). BOEDDHISME 6e eeuw vChr. CHRISTENDOM 1e eeuw nChr. ISLAM 7e eeuw nChr (jongst).",
          { basis: "Hindoeïsme oudste. = C.", simpeler: "Hindoeïsme is +3000 jaar oud — oudste wereldreligie. = C.", nogSimpeler: "Hindoeïsme = C." },
          [{ woord: "hindoeïsme", uitleg: "Oudste wereldreligie, ontstaan in India >3000 jaar geleden." }],
        ),
      },
    ],
  },
  {
    title: "Stap 2 — Christendom",
    explanation: "**Christendom** = grootste religie wereldwijd, ontstaan in Israël/Palestina rond jaar 0.\n\n**Belangrijkste feiten**:\n- **Stichter**: Jezus Christus (geboren ~4 v.Chr. — gestorven 33 n.Chr.). 'Christus' = 'gezalfde' (= verlosser).\n- **Heilig boek**: De **Bijbel** — 2 delen:\n  - Oude Testament (gedeeld met jodendom)\n  - Nieuwe Testament (over Jezus + apostelen)\n- **Gebouw**: **kerk** (rooms-katholiek + protestant) of basiliek/kathedraal (groot)\n- **Symbool**: **kruis** (Jezus stierf aan kruis)\n- **Heilige dag**: zondag\n- **Belangrijke feesten**: Kerstmis (geboorte Jezus, 25 dec), Pasen (opstanding Jezus), Pinksteren (Heilige Geest), Hemelvaartsdag\n\n**Hoofdstromingen**:\n- **Rooms-katholiek** (~1,3 mld) — paus is hoofd, Vaticaan. Beelden + heiligen.\n- **Protestants** (~900 mln) — afsplitsing 1517 door Maarten Luther. Bijbel centraal, minder ceremonie.\n- **Orthodox** (~220 mln) — vooral in Rusland, Griekenland. Eigen paus per land.\n\nIn **Nederland**: ~25% christen (was vroeger ~85%).",
    emoji: "✝️",
    checks: [
      {
        q: "Wat is het heilige boek van het christendom?",
        options: ["Koran", "Bijbel", "Tora", "Veda"],
        answer: 1,
        wrongHints: [null, "Tora is wel ÉÉN deel van de christelijke Bijbel (Oude Testament) — maar niet het hele boek.", null, null],
        explanation: "**Bijbel** = het heilige boek van het christendom. Bestaat uit Oude Testament (gedeeld met jodendom, ~39 boeken) + Nieuwe Testament (specifiek christelijk, ~27 boeken over Jezus + zijn leerlingen). Antwoord B.",
        uitlegPad: compact(
          "Boeken-tabel: BIJBEL = christendom. KORAN = islam. TORA/TENACH = jodendom. VEDA = hindoeïsme. TRIPITAKA = boeddhisme.",
          { basis: "Bijbel. = B.", simpeler: "Christendom = Bijbel. = B.", nogSimpeler: "Bijbel = B." },
          [{ woord: "Bijbel", uitleg: "Heilig boek christendom — Oude + Nieuwe Testament." }, { woord: "Oude Testament", uitleg: "Eerste deel Bijbel, gedeeld met jodendom." }],
        ),
      },
      {
        q: "In welk gebouw komen christenen samen om te bidden?",
        options: ["moskee", "kerk", "tempel", "synagoge"],
        answer: 1,
        wrongHints: ["Andere religie. Denk aan een toren (klokkentoren of kruis).", null, null, null],
        explanation: "**Kerk** = christelijk gebedshuis. Grote kerken heten **kathedraal** of **basiliek**. Hoofd-rooms-katholieke kerk = Sint-Pietersbasiliek in Vaticaan, Rome. Antwoord B.",
        uitlegPad: compact(
          "Gebouwen-tabel: KERK/KATHEDRAAL = christendom. MOSKEE = islam. TEMPEL = hindoeïsme. PAGODE/TEMPEL = boeddhisme. SYNAGOGE = jodendom.",
          { basis: "Kerk. = B.", simpeler: "Christenen = kerk. = B.", nogSimpeler: "Kerk = B." },
          [{ woord: "kerk", uitleg: "Christelijk gebedshuis." }, { woord: "kathedraal", uitleg: "Grote bisschopskerk." }],
        ),
      },
      {
        q: "Wie was de stichter van de **protestantse stroming** binnen het christendom?",
        options: ["Mohammed", "Paus Franciscus", "Maarten Luther", "Jezus"],
        answer: 2,
        wrongHints: ["Mohammed = profeet van de islam (geen christendom).", "Paus = hoofd van rooms-katholieke kerk, niet protestanten.", null, "Jezus = stichter van het hele christendom, niet specifiek protestantisme."],
        explanation: "**Maarten Luther** (1483-1546) = Duitse theoloog. In 1517 spijkerde hij 95 stellingen op een kerkdeur in Wittenberg om misbruik in de rooms-katholieke kerk aan te klagen. Dit begin de **Reformatie** → ontstaan van protestantse kerken. Antwoord C.",
        uitlegPad: compact(
          "Maarten Luther 1517 = begin van Reformatie. Splitsing rooms-katholiek vs protestants. Belangrijk in Nederland: 80-jarige Oorlog ging deels om religievrijheid.",
          { basis: "Maarten Luther. = C.", simpeler: "Protestants = Luther 1517. = C.", nogSimpeler: "Luther = C." },
          [{ woord: "Reformatie", uitleg: "Religieuze hervormingsbeweging 16e eeuw — afsplitsing van rooms-katholieke kerk." }, { woord: "Maarten Luther", uitleg: "Duitse theoloog, startte Reformatie 1517." }],
        ),
      },
    ],
  },
  {
    title: "Stap 3 — Islam",
    explanation: "**Islam** = 2e grootste religie, ontstaan in Saudi-Arabië in de 7e eeuw n.Chr.\n\n**Belangrijkste feiten**:\n- **Stichter / profeet**: **Mohammed** (570-632 n.Chr.). Volgens islam ontving hij openbaringen van God (Allah) via aartsengel Gabriël.\n- **Heilig boek**: **Koran** — bevat de openbaringen aan Mohammed (114 hoofdstukken = soera's).\n- **Gebouw**: **moskee**. Heeft een toren = **minaret** (vanaf waar oproep tot gebed klinkt).\n- **Symbool**: **wassende maan + ster** (op vlaggen van veel moslimlanden).\n- **Heilige dag**: vrijdag (vrijdagmiddagsgebed in moskee).\n- **Heilig stad**: **Mekka** (Saudi-Arabië) — geboorteplek Mohammed + Kaäba.\n\n**5 zuilen van de islam** (basisplichten):\n1. Geloofsbelijdenis (Shahada — 'er is geen god dan Allah, Mohammed is zijn profeet')\n2. 5× per dag bidden (salat)\n3. Vasten in **Ramadan** (1 maand, geen eten/drinken overdag)\n4. Liefdadigheid (zakat — % van inkomen geven)\n5. Bedevaart naar **Mekka** (hadj — minstens 1× in leven indien mogelijk)\n\n**Hoofdstromingen**: soennieten (~85%) + sjiieten (~15%).\nIn **Nederland**: ~5% moslim.",
    emoji: "☪️",
    checks: [
      {
        q: "Wie is de **profeet** van de islam?",
        options: ["Jezus", "Mohammed", "Abraham", "Boeddha"],
        answer: 1,
        wrongHints: ["Jezus is heilig in zowel christendom als islam (als profeet erkend) — maar niet DÉ stichter van de islam.", null, "Abraham = oude stamvader (gedeeld door islam, jodendom, christendom — niet stichter islam).", "Boeddha = stichter boeddhisme."],
        explanation: "**Mohammed** (570-632 n.Chr.) = de profeet van de islam volgens de moslims. Geboren in Mekka. Ontving openbaringen van Allah die werden opgeschreven in de Koran. Antwoord B.",
        uitlegPad: compact(
          "Mohammed = profeet islam (570-632). Geboren Mekka. Stierf in Medina. Koran = zijn openbaringen.",
          { basis: "Mohammed. = B.", simpeler: "Islam-profeet = Mohammed. = B.", nogSimpeler: "Mohammed = B." },
          [{ woord: "profeet", uitleg: "Iemand die boodschappen van god doorgeeft aan mensen." }, { woord: "Allah", uitleg: "Arabische naam voor god in de islam." }],
        ),
      },
      {
        q: "Wat is het heilige boek van de islam?",
        options: ["Bijbel", "Tora", "Koran", "Veda"],
        answer: 2,
        wrongHints: ["Denk aan de naam van de profeet die de openbaringen ontving.", null, null, null],
        explanation: "**Koran** = heilig boek van de islam. Bevat de openbaringen die Mohammed kreeg van Allah via aartsengel Gabriël. 114 hoofdstukken (soera's). Geschreven in Arabisch. Antwoord C.",
        uitlegPad: compact(
          "Koran = islam (114 soera's in Arabisch). Bijbel = christendom. Tora = jodendom. Veda = hindoeïsme. Tripitaka = boeddhisme.",
          { basis: "Koran. = C.", simpeler: "Islam = Koran. = C.", nogSimpeler: "Koran = C." },
          [{ woord: "Koran", uitleg: "Heilig boek islam — 114 soera's in Arabisch." }, { woord: "soera", uitleg: "Hoofdstuk in de Koran." }],
        ),
      },
      {
        q: "Welke maand vasten moslims tijdens de **Ramadan**?",
        options: ["van zonsopgang tot zonsondergang, 1 maand lang", "elke woensdag", "de hele dag, alleen tijdens religieuze feesten", "1 week per jaar"],
        answer: 0,
        wrongHints: [null, "Niet woensdag — Ramadan duurt een hele maand.", "Niet alleen tijdens feesten — een vaste maand per jaar.", "Niet 1 week — een hele maand."],
        explanation: "**Ramadan** = 9e maand van islamitische kalender. Volwassen moslims vasten **van zonsopgang tot zonsondergang** (geen eten/drinken/roken). 's Avonds is **Iftar** (eten-bij-zonsondergang). Eind van Ramadan = **Suikerfeest (Eid al-Fitr)**. Antwoord A.",
        uitlegPad: compact(
          "Ramadan = vasten van zonsopgang tot zonsondergang, hele maand lang. Eind = Suikerfeest. Een van 5 zuilen islam.",
          { basis: "Dag-vasten 1 maand. = A.", simpeler: "Ramadan = overdag niet eten, hele maand. = A.", nogSimpeler: "Dag-vasten = A." },
          [{ woord: "Ramadan", uitleg: "Maand van vasten (overdag) in islam." }, { woord: "Suikerfeest", uitleg: "Eid al-Fitr — feest na Ramadan." }],
        ),
      },
    ],
  },
  {
    title: "Stap 4 — Hindoeïsme + boeddhisme",
    explanation: "**🕉️ Hindoeïsme**\n- **Oorsprong**: India, >3000 jaar oud (oudste religie). Geen één stichter.\n- **Heilige boeken**: **Veda** + Bhagavad Gita\n- **Gebouw**: **tempel** (hindoetempel = kleurrijk + veel beelden)\n- **Symbool**: **Om** (heilig geluid 'aum')\n- **Veel goden**: Brahma (schepper), Vishnoe (behouder), Shiva (vernieuwer) + duizenden anderen. Eigenlijk: één goddelijk principe (Brahman) in vele vormen.\n- **Reïncarnatie**: na dood word je opnieuw geboren in andere vorm (mens, dier, etc.) gebaseerd op karma (goede/slechte daden).\n- **Heilige rivier**: **Ganges** in India.\n- **Geen vlees**: veel hindoes eten vegetarisch (vooral geen rund — koe = heilig).\n\n**☸️ Boeddhisme**\n- **Stichter**: **Boeddha** ('de Ontwaakte') = Siddhartha Gautama (~563-483 v.Chr., India/Nepal).\n- **Heilig boek**: **Tripitaka** (3 manden van leer)\n- **Gebouw**: **tempel** of **pagode** (gelaagde toren)\n- **Symbool**: **wiel van dharma** (8 spaken = 8-voudig pad)\n- **Geen god** in westerse zin — boeddhisme is filosofie/levensweg.\n- **4 edele waarheden**: 1) lijden bestaat 2) door verlangens 3) los verlangens 4) volg achtvoudig pad.\n- **Reïncarnatie + karma** ook (gedeeld met hindoeïsme).\n- **Doel**: verlichting + bevrijding uit cyclus geboorte-dood.",
    emoji: "🕉️",
    checks: [
      {
        q: "In welk land ontstond het **hindoeïsme**?",
        options: ["China", "India", "Iran", "Egypte"],
        answer: 1,
        wrongHints: ["China heeft taoïsme + confucianisme + boeddhisme — geen hindoeïsme als origineel.", null, "Iran = vooral islamitisch (in oudheid Zoroastrisme).", "Egypte had eigen oude religies (Ra, Osiris) — geen hindoeïsme."],
        explanation: "**India** is bakermat van hindoeïsme. Ook van boeddhisme (al verspreidde zich later). ~80% van India is hindoe. Hindoeïsme is oudste wereldreligie, >3000 jaar oud. Antwoord B.",
        uitlegPad: compact(
          "Hindoeïsme = India (oudste wereldreligie). Boeddhisme ook India/Nepal. China = taoïsme/confucianisme. Iran (vroeger) = zoroastrisme.",
          { basis: "India. = B.", simpeler: "Hindoeïsme = India. = B.", nogSimpeler: "India = B." },
          [{ woord: "hindoeïsme", uitleg: "Oudste wereldreligie, ontstaan in India." }],
        ),
      },
      {
        q: "Wie was Siddhartha Gautama (later bekend als Boeddha)?",
        options: ["Indiase prins die verlichting zocht en stichter van het boeddhisme werd", "Egyptische farao", "Romeinse keizer", "Chinese filosoof"],
        answer: 0,
        wrongHints: [null, "Boeddha was Indiaas, niet Egyptisch.", "Boeddha was geen Romein (~5 eeuwen vóór Romeinse keizerrijk).", "Lao Tzu was Chinese filosoof (taoïsme) — niet boeddhisme."],
        explanation: "**Siddhartha Gautama** (~563-483 v.Chr.) = Indiaas/Nepalese prins. Verliet zijn paleis om antwoord te zoeken op het lijden. Mediteerde onder bodhi-boom en bereikte 'verlichting' (=Boeddha). Onderwees het 8-voudige pad. Antwoord A.",
        uitlegPad: compact(
          "Siddhartha Gautama = Boeddha. Indiase prins ~500 vChr. Verlichting onder bodhi-boom. Stichter boeddhisme. 4 edele waarheden + 8-voudig pad.",
          { basis: "Indiase prins. = A.", simpeler: "Boeddha = prins Siddhartha uit India. = A.", nogSimpeler: "Prins = A." },
          [{ woord: "Boeddha", uitleg: "De 'Ontwaakte' — Siddhartha Gautama na zijn verlichting." }, { woord: "verlichting", uitleg: "In boeddhisme: ontwaken uit illusie + bevrijding uit lijden." }],
        ),
      },
      {
        q: "Wat geloven hindoes en boeddhisten allebei over wat er gebeurt **na de dood**?",
        options: ["Je gaat naar de hemel of hel", "Je wordt herboren (reïncarnatie)", "Niets — er is geen leven na de dood", "Je wordt onsterfelijk"],
        answer: 1,
        wrongHints: ["Hemel/hel = vooral christendom/islam-concept.", null, "Wel een leven na dood — in een nieuwe vorm.", "Niet onsterfelijk — wel cyclisch (steeds opnieuw)."],
        explanation: "**Reïncarnatie** = herboren worden in nieuwe vorm. Welke vorm hangt af van **karma** (je goede/slechte daden in vorig leven). Zowel hindoeïsme als boeddhisme delen dit concept. Doel: uit deze cyclus losbreken (moksha/nirwana). Antwoord B.",
        uitlegPad: compact(
          "Reïncarnatie = herboren worden in nieuwe vorm na dood. Karma bepaalt nieuwe vorm. Hindoeïsme + boeddhisme delen dit. Christendom/islam = hemel/hel-concept.",
          { basis: "Reïncarnatie. = B.", simpeler: "Hindoe + boeddhist = herboren worden. = B.", nogSimpeler: "Reïncarnatie = B." },
          [{ woord: "reïncarnatie", uitleg: "Wedergeboorte in nieuwe vorm na dood." }, { woord: "karma", uitleg: "Optelsom van goede/slechte daden — bepaalt vorm volgende leven." }, { woord: "nirwana", uitleg: "Boeddhistisch doel: bevrijding uit cyclus." }],
        ),
      },
    ],
  },
  {
    title: "Stap 5 — Jodendom",
    explanation: "**Jodendom** = oudste van de **3 monotheïstische** wereldreligies (christendom + islam zijn jonger maar groeiden veel groter).\n\n**Belangrijkste feiten**:\n- **Oorsprong**: ~1800 v.Chr. (stamvader Abraham), in huidig Israël/Palestina.\n- **Stichters/aartsvaders**: **Abraham, Isaak, Jakob**. Plus **Mozes** die de 10 Geboden ontving.\n- **Heilig boek**: **Tora** (eerste 5 boeken van Bijbel — 'Wet') + **Tenach** (hele Hebreeuwse Bijbel).\n- **Gebouw**: **synagoge** (Hebreeuws: bet knesset = 'huis van samenkomst').\n- **Symbool**: **davidster** (zespuntige ster) + 7-armige kandelaar (menora).\n- **Heilige dag**: **sabbat** (zaterdag — vrijdag-avond tot zaterdag-avond). Geen werk.\n- **Heilige stad**: **Jeruzalem** — met Klaagmuur (laatste rest van oude tempel).\n- **Aanhangers**: ~15 miljoen wereldwijd. Grootste gemeenschappen: Israël (7 mln) + VS (6 mln). NL: ~30.000.\n\n**Belangrijke feesten**:\n- **Pesach** (Pasen — herinnert vlucht uit Egypte onder Mozes)\n- **Rosj Hasjana** (joods Nieuwjaar — sep/okt)\n- **Jom Kippoer** (Grote Verzoendag — vasten, vergeving)\n- **Chanoeka** (Lichtfeest — dec, 8 kaarsen op menora)\n\n**Tragiek**: in de **Holocaust** (1939-1945) werden ~6 miljoen Joden vermoord door Nazi-Duitsland. Daarna stichten 1948 = staat **Israël**.",
    emoji: "✡️",
    checks: [
      {
        q: "Wat is het symbool van het jodendom?",
        options: ["Kruis", "Halve maan", "Davidster", "Om-teken"],
        answer: 2,
        wrongHints: [null, null, null, null],
        explanation: "**Davidster** = zespuntige ster. Genoemd naar koning David. Op de vlag van Israël. Plus **menora** = 7-armige kandelaar (oud joods symbool). Antwoord C.",
        uitlegPad: compact(
          "Symbolen-tabel: KRUIS=christendom. HALVE MAAN+STER=islam. DAVIDSTER=jodendom. OM=hindoeïsme. WIEL VAN DHARMA=boeddhisme.",
          { basis: "Davidster. = C.", simpeler: "Jodendom = Davidster (zespuntige ster). = C.", nogSimpeler: "Davidster = C." },
          [{ woord: "Davidster", uitleg: "Zespuntige ster — symbool jodendom + Israël." }, { woord: "menora", uitleg: "7-armige kandelaar — oudste joodse symbool." }],
        ),
      },
      {
        q: "In welke stad ligt de **Klaagmuur** — heiligste plek van het jodendom?",
        options: ["Mekka", "Vaticaanstad", "Jeruzalem", "Bethlehem"],
        answer: 2,
        wrongHints: ["Mekka = heiligste plek van de islam (Saudi-Arabië).", "Vaticaanstad = hoofdkwartier rooms-katholiek (Rome).", null, "Bethlehem = geboorteplek Jezus (christendom)."],
        explanation: "**Jeruzalem** (Israël) = oude heilige stad voor 3 monotheïstische religies. **Klaagmuur** = laatste overblijfsel van de oude Tempel van Jeruzalem (verwoest 70 n.Chr. door Romeinen). Joden bidden + steken briefjes in de muur. Antwoord C.",
        uitlegPad: compact(
          "Jeruzalem = heilig voor 3 religies: Klaagmuur (joden), Heilig Graf (christenen), Rotskoepel (moslims). Plus tempelberg.",
          { basis: "Jeruzalem. = C.", simpeler: "Klaagmuur = Jeruzalem. = C.", nogSimpeler: "Jeruzalem = C." },
          [{ woord: "Klaagmuur", uitleg: "Heilige muur in Jeruzalem — rest van oude Tempel." }],
        ),
      },
      {
        q: "Op welke **dag van de week** vieren joden hun heilige dag (sabbat)?",
        options: ["vrijdag", "zaterdag", "zondag", "woensdag"],
        answer: 1,
        wrongHints: [null, null, null, "Geen religie heeft woensdag als hoofd-rustdag."],
        explanation: "**Sabbat** = zaterdag (van vrijdagavond tot zaterdagavond). Volgens Tora rustte God op de 7e dag van de schepping. Strikt orthodoxe joden werken dan helemaal niet (geen lichten aan, geen auto). Antwoord B.",
        uitlegPad: compact(
          "Heilige dagen: vrijdag=islam. zaterdag=jodendom (sabbat). zondag=christendom. Sabbat = vanaf zonsondergang vrijdag tot zonsondergang zaterdag.",
          { basis: "Zaterdag. = B.", simpeler: "Joden = sabbat zaterdag. = B.", nogSimpeler: "Zaterdag = B." },
          [{ woord: "sabbat", uitleg: "Joodse rustdag — zaterdag." }],
        ),
      },
    ],
  },
  {
    title: "Stap 6 — Vergelijking: religies in 1 overzicht",
    explanation: "**📊 Overzicht 5 wereldreligies**:\n\n| | Christendom | Islam | Jodendom | Hindoeïsme | Boeddhisme |\n|---|---|---|---|---|---|\n| **Boek** | Bijbel | Koran | Tora | Veda | Tripitaka |\n| **Gebouw** | Kerk | Moskee | Synagoge | Tempel | Tempel/Pagode |\n| **Symbool** | Kruis | Halve maan | Davidster | Om | Dharma-wiel |\n| **Heilige dag** | Zondag | Vrijdag | Zaterdag | (geen vaste) | (geen vaste) |\n| **Stichter** | Jezus | Mohammed | Abraham/Mozes | (geen) | Boeddha |\n| **Aantal goden** | 1 | 1 | 1 | veel | (geen god) |\n| **Heilige stad** | Jeruzalem/Rome | Mekka | Jeruzalem | Varanasi | Bodh Gaya |\n\n**3 grote groepen**:\n- **Monotheïstisch** (1 god): christendom, islam, jodendom — alle drie 'Abrahamitische' religies (delen stamvader Abraham).\n- **Polytheïstisch** (meerdere goden): hindoeïsme (en oude Grieken/Romeinen/Vikingen).\n- **Niet-theïstisch** (geen god): boeddhisme (meer filosofie dan religie).\n\n**Religies + landen** (waar meerderheid heeft):\n- 🇳🇱 Nederland: ~25% christen + ~5% moslim + ~57% geen\n- 🇮🇱 Israël: vooral jodendom\n- 🇸🇦 Saudi-Arabië: 100% islam\n- 🇮🇳 India: ~80% hindoe + ~15% moslim\n- 🇹🇭 Thailand: ~95% boeddhist",
    emoji: "🌐",
    checks: [
      {
        q: "Welke 3 wereldreligies zijn **monotheïstisch** (geloven in 1 god + delen stamvader Abraham)?",
        options: [
          "christendom, islam, hindoeïsme",
          "christendom, islam, jodendom",
          "islam, jodendom, boeddhisme",
          "hindoeïsme, boeddhisme, jodendom",
        ],
        answer: 1,
        wrongHints: ["Hindoeïsme is POLYTHEÏSTISCH (meerdere goden), niet monotheïstisch.", null, "Boeddhisme heeft geen 'god' op westerse manier — geen monotheïsme.", "Hindoeïsme + boeddhisme zijn geen monotheïsme."],
        explanation: "**Abrahamitische religies** = christendom + islam + jodendom — alle 3 monotheïstisch + delen Abraham als stamvader + Oude Testament-figuren. Hindoeïsme = polytheïstisch. Boeddhisme = niet-theïstisch. Antwoord B.",
        uitlegPad: compact(
          "Monotheïsmen: christendom, islam, jodendom. Polytheïsme: hindoeïsme. Niet-theïstisch: boeddhisme. Alle 3 monotheïsmen = delen Abraham als stamvader.",
          { basis: "Christendom + islam + jodendom. = B.", simpeler: "3 boekreligies met Abraham. = B.", nogSimpeler: "3 mono = B." },
          [{ woord: "Abrahamitische religies", uitleg: "Christendom + islam + jodendom — delen Abraham als stamvader." }],
        ),
      },
      {
        q: "Welk land heeft het hindoeïsme als grootste religie?",
        options: ["Saudi-Arabië", "Israël", "India", "Thailand"],
        answer: 2,
        wrongHints: ["Saudi-Arabië = 100% islam.", "Israël = vooral jodendom.", null, "Thailand = ~95% boeddhist."],
        explanation: "**India** = ~80% hindoe (~1 miljard mensen). Daarnaast ~15% moslim (~200 mln). Vandaar dat India veruit grootste hindoe-bevolking heeft. Antwoord C.",
        uitlegPad: compact(
          "Hindoeïsme = India (bakermat + grootste bevolking). Boeddhisme = Thailand/Sri Lanka/Tibet. Islam = Saudi-Arabië/Iran. Jodendom = Israël/VS.",
          { basis: "India. = C.", simpeler: "Hindoeïsme = India (80% hindoe). = C.", nogSimpeler: "India = C." },
          [{ woord: "India", uitleg: "Land met ~1 mld hindoes (80% bevolking)." }],
        ),
      },
      {
        q: "Welke religie heeft GEEN god in de westerse zin (geen schepper-god)?",
        options: ["christendom", "islam", "hindoeïsme", "boeddhisme"],
        answer: 3,
        wrongHints: ["Christendom heeft 1 god (Drie-eenheid).", "Islam heeft 1 god (Allah).", "Hindoeïsme heeft veel goden (Brahma, Vishnoe, Shiva, etc.).", null],
        explanation: "**Boeddhisme** = niet-theïstische religie. Geen schepper-god, geen aanbidding van god. Wel: mediteren, ethisch leven, streven naar verlichting (nirwana). Meer een filosofie/levensweg dan een religie in westerse zin. Antwoord D.",
        uitlegPad: compact(
          "Boeddhisme = niet-theïstisch = geen schepper-god. Wel: meditatie + 8-voudig pad + verlichting. Soms gerekend als filosofie i.p.v. religie.",
          { basis: "Boeddhisme. = D.", simpeler: "Boeddha = geen god, wel filosofie. = D.", nogSimpeler: "Boeddhisme = D." },
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
  intro: "18 vragen Cito-stof groep 7-8 over de 5 wereldreligies: christendom, islam, hindoeïsme, boeddhisme, jodendom. Heilige boeken, gebouwen, symbolen, feesten. Neutraal + feitelijk.",
  triggerKeywords: ["wereldreligies", "christendom", "islam", "jodendom", "hindoeisme", "boeddhisme", "heilige boeken", "monotheisme polytheisme"],
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
  ],
  chapters,
  steps,
};

export default wereldreligiesPo;
