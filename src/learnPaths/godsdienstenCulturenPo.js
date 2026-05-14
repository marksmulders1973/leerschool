// Leerpad: Godsdiensten + culturen - groep 6-8 wereldoriëntatie/burgerschap.
// Cito-relevant. 1F. 5 stappen.

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
      "**Godsdienst / religie** = systeem van **geloof**, **rituelen** en **regels** voor hoe te leven.\n\n**Wat hebben alle godsdiensten gemeen?**\n• Geloven in iets **groters** *(God, goden, geestelijke wereld)*.\n• Hebben **heilige boeken** of teksten.\n• **Rituelen** *(gebed, vasten, viering)*.\n• Gemeenschap *(kerk, moskee, tempel, synagoge)*.\n• **Regels** voor leven *(wat goed/slecht is)*.\n• Vaak verhalen over **schepping** + **leven na de dood**.\n\n**Vijf grootste wereldgodsdiensten** *(naar aantal aanhangers)*:\n\n1. **Christendom** — ~2,4 miljard *(31% wereldbevolking)*.\n2. **Islam** — ~1,9 miljard *(25%)*.\n3. **Hindoeïsme** — ~1,2 miljard *(15%)*.\n4. **Boeddhisme** — ~500 miljoen *(7%)*.\n5. **Jodendom** — ~15 miljoen *(0,2%, klein maar invloedrijk)*.\n\n**Naast wereldgodsdiensten**:\n• **Sikhisme** *(India, 25 mln)*.\n• **Jaïnisme** *(India)*.\n• **Confucianisme** *(China, levensfilosofie)*.\n• **Taoïsme** *(China)*.\n• **Natuurgodsdiensten** *(Afrika, Amerika oorspronkelijk)*.\n\n**Niet religieus / atheïst / agnost**:\n• **Atheïst**: gelooft NIET in God.\n• **Agnost**: weet niet zeker of God bestaat.\n• **Geen religie**: ~15% wereldwijd, in NL is dit **55%** *(meeste niet-religieus)*.\n\n**NL bevolking 2024** *(CBS)*:\n• Geen religie: ~55%.\n• Christendom: ~30% *(katholiek 18% + protestant 12%)*.\n• Islam: ~5%.\n• Andere *(hindoeïsme, boeddhisme, jodendom, etc.)*: ~10%.\n\n**Vroeger** *(1900)*:\n• Geen religie: ~3%.\n• Christendom: ~97%.\nNL is in 120 jaar veel **seculier** geworden *(minder religieus)*.\n\n**Vrijheid van godsdienst** *(Artikel 6 Grondwet)*:\n• In NL: **iedereen mag** gelovig of niet zijn.\n• Bidden, kerken bouwen, religieus onderwijs — allemaal toegestaan.\n• Met grenzen: niet ten koste van anderen.\n\n**Belangrijke begrippen**:\n• **Monotheïsme** = 1 God *(christen, jood, moslim)*.\n• **Polytheïsme** = meerdere goden *(hindoe, Grieken oud)*.\n• **Heilige plaats** = belangrijk voor godsdienst.\n• **Heilig boek** = boek met religieuze tekst.\n\n**Cito-feitje**:\nIn Nederland staan ongeveer **5500 kerken**. Veel staan leeg of zijn herbestemd tot bibliotheek, woonhuis of café. Symbool van seculariseren.",
    checks: [
      {
        q: "Wat is een **godsdienst**?",
        options: ["Geloof + rituelen + regels", "Sport", "Soort eten", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Wel."],
      },
      {
        q: "**Grootste** wereldgodsdienst?",
        options: ["Christendom (~2,4 mld)", "Islam", "Boeddhisme", "Hindoeisme"],
        answer: 0,
        wrongHints: [null, "2e plek.", "4e plek.", "3e plek."],
      },
      {
        q: "Wat is **atheïst**?",
        options: ["Gelooft niet in God", "Christen", "Boeddhist", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Niet.", "Wel religie.", "Wel."],
      },
      {
        q: "Percentage NL **zonder religie**?",
        options: ["~55%", "1%", "100%", "20%"],
        answer: 0,
        wrongHints: [null, "Veel meer.", "Niet.", "Veel meer."],
      },
    ],
  },
  {
    title: "Christendom",
    explanation:
      "**Christendom** = de **grootste** godsdienst wereldwijd.\n\n**Basis**:\n• Volgers heten **christenen**.\n• Geloven in **één God** *(monotheïsme)*.\n• Heilige boek = **Bijbel** *(Oud + Nieuw Testament)*.\n• **Jezus Christus** *(circa 4 v.Chr. - 30 n.Chr.)* = volgens christenen 'Zoon van God' en 'Messias'.\n• Begon in **Israël/Palestina**.\n\n**Belangrijkste leerstuk**:\n• God = Schepper.\n• Jezus = Zoon van God, **gestorven aan kruis** voor zonden van mensen.\n• Na 3 dagen **opgestaan** uit de dood *(Pasen)*.\n• Heilige Geest = Gods werking in wereld.\n• Drie-eenheid: God-Vader + Zoon + Heilige Geest.\n\n**Heilige plaatsen**:\n• **Jeruzalem** *(Israël)* — Heilige Graf, gekruisigd.\n• **Bethlehem** — Jezus geboren.\n• **Nazareth** — Jezus opgegroeid.\n• **Rome** *(Vaticaan)* — paus woont, hoofd katholieken.\n\n**Hoofdrichtingen**:\n\n**1. Katholicisme** *(~1,3 mld wereldwijd)*:\n• **Paus** in Vaticaanstad = hoofd.\n• Huidige paus: **Leo XIV** *(sinds 2025, opvolger Franciscus)*.\n• Belangrijke landen: Italië, Spanje, Polen, Latijns-Amerika.\n• Kerken vaak rijk versierd, beelden, kaarsen.\n\n**2. Protestantisme** *(~900 mln)*:\n• Ontstaan uit **Reformatie** *(1517, Maarten Luther)*.\n• Geen paus, eenvoudiger kerken.\n• Vele stromingen: lutheraan, calvinist, methodist, pinksterkerk, baptist.\n• Belangrijke landen: NL, Duitsland, VS, Engeland.\n\n**3. Oosters-orthodox** *(~250 mln)*:\n• Sinds 1054 afgesplitst.\n• Pastoor met baarden, iconen.\n• Belangrijke landen: Rusland, Griekenland, Servië.\n\n**Heilige dagen**:\n• **Kerstmis** *(25 dec)* — geboorte Jezus.\n• **Pasen** *(maart-april)* — opstanding Jezus.\n• **Pinksteren** *(50 dagen na Pasen)* — Heilige Geest.\n• **Hemelvaartsdag** *(40 dagen na Pasen)* — Jezus naar hemel.\n• **Goede Vrijdag** — Jezus gekruisigd.\n\n**Rituelen**:\n• **Doop** *(baby of volwassene in water)*.\n• **Communie / heilig avondmaal** *(brood + wijn ter herinnering)*.\n• **Bidden** *(persoonlijk of in kerk)*.\n• **Bijbel lezen**.\n\n**Christendom in NL**:\n• Vroeger 97% christen *(1900)*, nu ~30%.\n• Veel verlaten kerken.\n• Religieus onderwijs is op **bijzondere scholen** *(katholiek/protestant)*.\n• **Schoolvakanties** zijn vaak op christelijke feestdagen *(Kerst, Pasen, Hemelvaart)*.\n\n**Cito-feitje**:\nDe **Bijbel** is het **meest gedrukte boek** ooit *(~5 miljard exemplaren)*. Vertaald in 700+ talen.",
    checks: [
      {
        q: "Wie is **stichter** van christendom?",
        options: ["Jezus Christus", "Mohammed", "Boeddha", "Mozes"],
        answer: 0,
        wrongHints: [null, "Islam.", "Boeddhisme.", "Jodendom."],
      },
      {
        q: "Wat is **Pasen**?",
        options: ["Opstanding Jezus uit dood", "Geboorte Jezus", "Sterft", "Doop"],
        answer: 0,
        wrongHints: [null, "Kerst.", "Goede Vrijdag.", "Niet primair feest."],
      },
      {
        q: "Hoofd van **katholieke kerk**?",
        options: ["Paus (Rome/Vaticaan)", "Koning", "Imam", "Rabbijn"],
        answer: 0,
        wrongHints: [null, "Niet kerk.", "Islam.", "Joods."],
      },
      {
        q: "Wat begon **Luther** in 1517?",
        options: ["Reformatie (protestantisme)", "Katholieke kerk", "Islam", "Niets"],
        answer: 0,
        wrongHints: [null, "Bestond al.", "Niet.", "Wel iets."],
      },
    ],
  },
  {
    title: "Islam + jodendom",
    explanation:
      "**Islam** en **jodendom** zijn samen met christendom de **drie Abrahamitische godsdiensten** *(alle drie geloven in 1 God en eren Abraham)*.\n\n**ISLAM** ☪️\n\n• Volgers heten **moslims**.\n• Begon rond **610 n.Chr.** in **Mekka** *(Saoedi-Arabië)*.\n• **Profeet Mohammed** *(570-632)* kreeg openbaringen van **Allah** *(God)*.\n• Heilige boek = **Koran** *(in Arabisch)*.\n• ~1,9 miljard moslims wereldwijd.\n\n**Vijf zuilen van de islam**:\n1. **Sjahada** — geloofsbelijdenis *('Er is geen God dan Allah, en Mohammed is Zijn profeet')*.\n2. **Salaat** — 5x per dag bidden *(richting Mekka)*.\n3. **Zakaat** — geven aan armen *(2,5% van rijkdom)*.\n4. **Ramadan** — vasten van zonsopgang tot zonsondergang in heilige maand.\n5. **Hadj** — pelgrimsreis naar **Mekka** (Saoedi-Arabië) minstens 1x in leven.\n\n**Heilige plaatsen**:\n• **Mekka** *(belangrijkste — Kaaba in Grote Moskee)*.\n• **Medina** *(2e — graf van Mohammed)*.\n• **Jeruzalem** *(3e — Rotskoepel)*.\n\n**Hoofdrichtingen**:\n• **Soennieten** *(~85%)*.\n• **Sjiieten** *(~15%)*.\n• Verschillen sinds 632 over wie opvolger Mohammed mocht worden.\n\n**Heilige dagen**:\n• **Ramadan** — vasten + Koran lezen.\n• **Suikerfeest (Eid al-Fitr)** — einde Ramadan, feest.\n• **Offerfeest (Eid al-Adha)** — herinnert Abraham's offer.\n• **Vrijdag** — gemeenschappelijk gebed in moskee.\n\n**Regels**:\n• **Halal** = toegestaan *(zoals halal vlees)*.\n• **Haram** = verboden *(varkensvlees, alcohol)*.\n• Vrouwen + mannen vaak gescheiden in moskee.\n• Sommige vrouwen dragen **hoofddoek (hijab)** of **gezichtssluier (niqab)**.\n\n**Islam in NL**:\n~1 miljoen moslims (~5% bevolking). Vooral van Turkse + Marokkaanse afkomst.\nMeer dan 500 moskeeën in NL.\n\n**JODENDOM** ✡️\n\n• Volgers heten **joden**.\n• Oudste van de 3 godsdiensten *(>3000 jaar)*.\n• **Abraham, Isaak, Jakob** = aartsvaders.\n• **Mozes** = profeet die volk uit Egypte leidde.\n• Heilige boek = **Tenach** *(deel van christen-Bijbel, Oud Testament)*.\n• Daarbij **Talmoed** *(commentaren)*.\n\n**Belangrijkste leerstuk**:\n• **Eén God** *(JHWH)*.\n• Joden zijn 'uitverkoren volk' met **verbond** met God.\n• Wachten op **Messias** *(verlosser)* — Jezus is voor joden NIET de Messias.\n\n**Heilige plaatsen**:\n• **Jeruzalem** — vooral **Klaagmuur** *(rest van Tempel)*.\n• **Israël** = beloofde land.\n\n**Heilige dagen**:\n• **Sabbat** *(vrijdagavond - zaterdagavond)* — rustdag, geen werk.\n• **Rosj Hasjana** — Joods Nieuwjaar.\n• **Jom Kipoer** — Grote Verzoendag, vasten.\n• **Pesach** — herinnert uittocht uit Egypte.\n• **Chanoeka** — lichtfeest *(8 dagen, kaarsen)*.\n\n**Regels**:\n• **Kosjer** = toegestaan eten *(geen varken, geen schaaldieren, vlees + zuivel niet samen)*.\n• Synagoge = gebedshuis.\n• Mannen dragen vaak **keppeltje**.\n\n**Jodendom in NL**:\n~50.000 joden (~0,3%).\n2/3 van NL-joden werd in WO2 vermoord *(Holocaust)*.\nBekende joodse persoon: **Anne Frank**.\n\n**Verschil joden, christenen, moslims**:\nAlle drie geloven in **één God van Abraham**, maar:\n• **Joden**: wachten op Messias.\n• **Christenen**: Jezus IS de Messias.\n• **Moslims**: Mohammed = laatste profeet, geen Messias.\n\n**Cito-feitje**:\n**Jeruzalem** is heilig voor alle drie de godsdiensten. Tempelberg / Rotskoepel staan op dezelfde plek — vandaar veel conflict door geschiedenis.",
    checks: [
      {
        q: "Hoeveel **zuilen** heeft islam?",
        options: ["5", "10", "3", "1"],
        answer: 0,
        wrongHints: [null, "Te veel.", "Te weinig.", "Te weinig."],
      },
      {
        q: "Welke is de **oudste** Abrahamitische godsdienst?",
        options: ["Jodendom", "Christendom", "Islam", "Hindoeisme"],
        answer: 0,
        wrongHints: [null, "2000 jr.", "1400 jr.", "Niet Abrahamitisch."],
      },
      {
        q: "**Vasten-maand** in islam?",
        options: ["Ramadan", "Pesach", "Pinksteren", "Kerst"],
        answer: 0,
        wrongHints: [null, "Joods.", "Christelijk.", "Christelijk."],
      },
      {
        q: "Wat is **kosjer**?",
        options: ["Joods toegestaan eten", "Niet toegestaan", "Niet bekend", "Christelijk"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel.", "Niet."],
      },
    ],
  },
  {
    title: "Boeddhisme + hindoeïsme",
    explanation:
      "Twee grote **Aziatische** godsdiensten — anders dan Abrahamitische.\n\n**HINDOEÏSME** 🕉️\n\n• Oudste **levende** religie *(meer dan 4000 jaar)*.\n• Ontstaan in **India**.\n• ~1,2 miljard volgers *(meeste in India + Nepal)*.\n• **Geen stichter** *(verschillende boeken + tradities)*.\n• **Polytheïsme** *(meerdere goden)* — maar één **Brahman** als hoogste werkelijkheid.\n\n**Belangrijke goden**:\n• **Brahma** — schepper.\n• **Vishnu** — bewaarder.\n• **Shiva** — vernieuwer.\n• **Krishna, Ganesha (olifant), Hanuman (aap)** — andere.\n\n**Belangrijke begrippen**:\n• **Karma** — wat je doet, komt op je terug *(in dit leven of volgend)*.\n• **Dharma** — plicht volgens je positie in leven.\n• **Reïncarnatie / samsara** — ziel wordt herboren in ander lichaam.\n• **Moksha** — bevrijding uit cyclus *(eindbestemming)*.\n\n**Kastenstelsel**:\nVroeger werden hindoes verdeeld in **vier kasten** *(klassen)*:\n1. Brahmanen *(priesters)*.\n2. Kshatriya *(krijgers/heersers)*.\n3. Vaishya *(handelaren)*.\n4. Sudra *(arbeiders)*.\n+ **Onaanraakbaren / dalits** *(buiten kasten)*.\n\nOfficieel verboden in moderne India maar bestaat informeel nog.\n\n**Heilige boeken**:\n• **Veda's** *(oudste, mantras)*.\n• **Mahabharata** *(epos met Krishna)*.\n• **Ramayana** *(epos met Rama)*.\n• **Bhagavad Gita** *(filosofie)*.\n\n**Heilige plaatsen**:\n• **Ganges-rivier** — heilig, baden zuivert.\n• **Varanasi** — heiligste stad.\n• **Ayodhya, Vrindavan, Kashi** — andere.\n\n**Heilige dagen**:\n• **Diwali** *(lichtfeest, oktober/november)* — overwinning licht op donker.\n• **Holi** *(kleurenfeest, maart)* — voorjaar, mensen gooien kleur op elkaar.\n• **Navaratri** *(9-nachts-feest)*.\n\n**Regels**:\n• **Vegetarisme** vaak *(vegetarische meerderheid in hindoeisme)*.\n• **Koe heilig** — geen rundvlees.\n• Veel meditatie + gebed thuis.\n\n**BOEDDHISME** ☸️\n\n• Ontstaan rond **500 v.Chr.** in **India**.\n• Stichter: **Siddhartha Gautama**, ook **Boeddha** *('de verlichte')*.\n• ~500 miljoen volgers, vooral in China, Japan, Thailand, Vietnam, Sri Lanka.\n• **Geen God** in westerse zin — meer **levensfilosofie**.\n\n**Verhaal van Boeddha**:\nPrins die alles had, maar zag lijden in wereld *(oude man, zieke, dode)*.\nVerliet paleis op zoek naar antwoord.\nMediteerde onder boom 49 dagen → werd **verlicht**.\nDaarna 45 jaar zijn leer onderwezen.\n\n**Vier Edele Waarheden** *(kern van leer)*:\n1. Leven = lijden *(dukkha)*.\n2. Lijden komt door **verlangen**.\n3. Lijden stopt als verlangen stopt.\n4. **Achtvoudig Pad** leidt daarheen.\n\n**Achtvoudig Pad**:\nJuiste begrip, denken, spreken, handelen, bestaan, ijver, aandacht, concentratie *(meditatie)*.\n\n**Doel**:\n• **Nirvana** = bevrijding uit cyclus van reïncarnatie + lijden.\n• Vergelijkbaar met hindoe-moksha.\n\n**Heilige plaatsen**:\n• **Bodhgaya** *(India)* — Boeddha verlicht onder boom.\n• **Lumbini** *(Nepal)* — geboren.\n• **Sarnath** *(India)* — eerste leerstoel.\n\n**Soorten**:\n• **Theravada** — Sri Lanka, Thailand.\n• **Mahayana** — China, Japan.\n• **Vajrayana** — Tibet *(Dalai Lama)*.\n\n**Regels**:\n• **Geen geweld** *(ahimsa)* — vegetarisme vaak.\n• **Mededogen** voor alle wezens.\n• **Meditatie** dagelijks.\n• 5 voorschriften: geen doden, stelen, liegen, verkeerde seks, intoxicatie.\n\n**Cito-feitje**:\n**Dalai Lama** *(geboren 1935)* is leider van Tibetaans boeddhisme. Won **Nobelprijs voor de Vrede** *(1989)*. Bekend symbool van vredelievende religie.",
    checks: [
      {
        q: "Wie is **Boeddha**?",
        options: ["Siddhartha Gautama, stichter boeddhisme", "God", "Profeet", "Heerser"],
        answer: 0,
        wrongHints: [null, "Niet — geen God.", "Niet.", "Niet."],
      },
      {
        q: "Wat is **karma**?",
        options: ["Wat je doet komt terug", "Toeval", "Lijden", "Geld"],
        answer: 0,
        wrongHints: [null, "Niet.", "Wel related maar specifiek dit.", "Niet."],
      },
      {
        q: "**Diwali** is welk feest?",
        options: ["Hindoe lichtfeest", "Boeddhistisch", "Islam", "Joods"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wat is **nirvana** in boeddhisme?",
        options: ["Bevrijding uit lijden + reincarnatie", "Hemel", "Hel", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Geen hemel-concept.", "Geen hel.", "Wel."],
      },
    ],
  },
  {
    title: "Eind-toets — godsdiensten mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Grootste** godsdienst wereldwijd?", options: ["Christendom (~2,4 mld)", "Islam", "Boeddhisme", "Hindoeisme"], answer: 0, wrongHints: [null, "2e.", "4e.", "3e."] },
      { q: "Heilig boek **islam**?", options: ["Koran", "Bijbel", "Torah", "Vedas"], answer: 0, wrongHints: [null, "Christen.", "Joods.", "Hindoe."] },
      { q: "Profeet **islam**?", options: ["Mohammed", "Jezus", "Boeddha", "Mozes"], answer: 0, wrongHints: [null, "Christen.", "Boeddhist.", "Jood."] },
      { q: "**Heilige rivier** hindoes?", options: ["Ganges (India)", "Nijl", "Donau", "Jordaan"], answer: 0, wrongHints: [null, "Egyptisch.", "Europees.", "Christen."] },
      { q: "**Vasten** in islam = ?", options: ["Ramadan", "Pesach", "Pasen", "Sabbat"], answer: 0, wrongHints: [null, "Joods.", "Christen.", "Joods."] },
      { q: "Wat is **atheïst**?", options: ["Gelooft niet in God", "Christen", "Hindoe", "Niet bekend"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Wel."] },
      { q: "Welke godsdienst gelooft in **reïncarnatie** (wedergeboorte)?", options: ["Hindoeisme + Boeddhisme", "Christendom", "Jodendom", "Islam"], answer: 0, wrongHints: [null, "Hemel/hel ipv wedergeboorte.", "Geen reïncarnatie-leer.", "Geen reïncarnatie-leer."] },
      { q: "**Kerk** is gebouw voor christenen. Wat is voor **moslims**?", options: ["Moskee", "Synagoge", "Tempel", "Kapel"], answer: 0, wrongHints: [null, "Joods.", "Hindoe/Boeddhist.", "Klein christen-gebouw."] },
      { q: "**Anne Frank** was een ___ kind in WO2?", options: ["Joods", "Christen", "Moslim", "Atheist"], answer: 0, wrongHints: [null, "Niet — Duitsers vervolgden joden.", "Niet aanleiding tot dagboek.", "Niet relevant."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const godsdienstenCulturenPo = {
  id: "godsdiensten-culturen-po",
  title: "Godsdiensten + culturen (Cito groep 6-8)",
  emoji: "⛪",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / culturen",
  prerequisites: [],
  intro:
    "Godsdiensten + culturen voor Cito groep 6-8 — wat is religie (5 wereldgodsdiensten, atheist, NL-statistieken) + christendom (Jezus, paus, Reformatie) + islam (5 zuilen, Ramadan) + jodendom (Abraham, Mozes, Sabbat) + boeddhisme (Boeddha, vier waarheden) + hindoeisme (karma, Diwali). Cito-burgerschap. ~15 min.",
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
