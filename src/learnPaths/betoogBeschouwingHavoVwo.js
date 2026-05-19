// Leerpad: Betoog + beschouwing + uiteenzetting (HAVO/VWO Nederlands).
// CSE-stof leesvaardigheid + tekstanalyse + tekst-soorten.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  blauw: "#1565c0",
  oranje: "#ef6c00",
  groen: "#00897b",
  rood: "#c62828",
  goud: "#ffd54f",
};

const stepEmojis = ["📝", "🎯", "⚖️", "🎭", "🏆"];

const chapters = [
  { letter: "A", title: "Drie tekstsoorten", emoji: "📝", from: 0, to: 0 },
  { letter: "B", title: "Betoog opbouwen", emoji: "🎯", from: 1, to: 1 },
  { letter: "C", title: "Argumenten + drogredenen", emoji: "⚖️", from: 2, to: 2 },
  { letter: "D", title: "Stijl + retoriek", emoji: "🎭", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Drie tekstsoorten ─────────────────────────────────
  {
    title: "Betoog, beschouwing, uiteenzetting — verschil herkennen",
    explanation:
      "Voor CSE Nederlands HAVO/VWO moet je 3 **persuasieve/informatieve tekstsoorten** kunnen onderscheiden. Elk heeft een eigen **tekstdoel** + **opbouw**.\n\n**1. Uiteenzetting (informeren)**:\n• **Doel**: lezer informeren over een onderwerp.\n• **Houding schrijver**: **neutraal**, geen mening.\n• **Structuur**: definitie → uitleg → voorbeelden → samenvatting.\n• **Voorbeelden**: Wikipedia-artikel, schoolboek-paragraaf, instructie.\n• **Signaalwoorden**: ten eerste, vervolgens, samengevat, kortom.\n\n**2. Beschouwing (afwegen)**:\n• **Doel**: lezer verschillende kanten van een kwestie laten zien.\n• **Houding schrijver**: **afgewogen**, geen definitieve mening, soms zwak voorkeur.\n• **Structuur**: stelling/vraag → voor-argumenten → tegen-argumenten → conclusie (open of nuance).\n• **Voorbeelden**: opiniestuk in NRC over euthanasie, column met afweging.\n• **Signaalwoorden**: aan de ene kant, aan de andere kant, hoewel, daar staat tegenover.\n\n**3. Betoog (overtuigen)**:\n• **Doel**: lezer overtuigen van eigen standpunt.\n• **Houding schrijver**: **stellig**, duidelijke mening.\n• **Structuur**: stelling → argumenten **voor** → eventuele weerlegging tegen → conclusie (bekrachtiging stelling).\n• **Voorbeelden**: ingezonden brief 'demonstratie moet door', politieke speech.\n• **Signaalwoorden**: ik vind, het is duidelijk dat, zonder twijfel, daarom moet.\n\n**Vergelijking-tabel**:\n| | Uiteenzetting | Beschouwing | Betoog |\n|---|---|---|---|\n| Doel | Informeren | Afwegen | Overtuigen |\n| Mening | Geen | Nuance | Duidelijk |\n| Structuur | Lineair-uitleg | Voor + tegen | Stelling + argumenten |\n| Cito-onderwerp | Wetenschap | Maatschappelijk dilemma | Politiek/ethiek |\n\n**Cito-truc bij vraag 'wat is tekstsoort?'**:\n1. Lees inleiding + slot.\n2. Vraag: heeft schrijver een **duidelijke mening**? → betoog.\n3. Vraag: **verschillende kanten** belicht zonder eindstandpunt? → beschouwing.\n4. Alleen **feiten/uitleg**, geen mening? → uiteenzetting.\n\n**Gemengde teksten**:\nVeel teksten zijn mengvormen. Vraag dan: **dominant** doel? Daarop classificeer je.",
    checks: [
      {
        q: "Welke tekstsoort heeft als doel **lezer overtuigen** van eigen standpunt?",
        options: ["Betoog","Beschouwing","Uiteenzetting","Verhaal"],
        answer: 0,
        wrongHints: [null, "Niet — die weegt af.", "Niet — die informeert.", "Niet — die vermaakt."],
        uitlegPad: {
          stappen: [{ titel: "Betoog = overtuigen", tekst: "**Betoog** = persuasieve tekst met **duidelijke mening** van schrijver + argumenten om lezer over te halen. 'Ik vind dat...' is signaal." }],
          theorie: "Tekst-doelen-cluster: betoog/beschouwing/uiteenzetting + soms beschrijving (literatuur) + activering (reclame).",
          niveaus: { basis: "Betoog. A.", simpeler: "Overtuigen = betoog = A.", nogSimpeler: "Betoog = A." },
        },
      },
      {
        q: "Een **beschouwing** kenmerkt zich door:",
        options: ["Voor- en tegenargumenten afwegen","Eén duidelijke mening","Alleen feiten","Spanning/spanningsboog"],
        answer: 0,
        wrongHints: [null, "Niet — dat is betoog.", "Niet — dat is uiteenzetting.", "Niet — dat is verhaal."],
        uitlegPad: {
          stappen: [{ titel: "Beschouwing = nuance", tekst: "**Beschouwing** belicht **verschillende kanten** van kwestie. Schrijver kan **lichte voorkeur** uitspreken maar geen definitieve conclusie. Voorbeeld: NRC-opinie over migratie met meerdere perspectieven." }],
          theorie: "Cito-pattern: signaalwoorden 'aan de ene kant... aan de andere kant' wijzen bijna altijd op beschouwing.",
          niveaus: { basis: "Voor + tegen afwegen. A.", simpeler: "Beschouwing = afwegen = A.", nogSimpeler: "Afwegen = A." },
        },
      },
      {
        q: "Welke tekst is een **uiteenzetting**?",
        options: ["Wikipedia-artikel over fotosynthese","Opinie-stuk over euthanasie","Verkiezings-toespraak","Roman-fragment"],
        answer: 0,
        wrongHints: [null, "Niet — dat is beschouwing.", "Niet — dat is betoog.", "Niet — dat is verhaal/literatuur."],
        uitlegPad: {
          stappen: [{ titel: "Wikipedia = informeren", tekst: "**Uiteenzetting** = informatieve tekst zonder mening. Wikipedia-artikelen, schoolboek-paragrafen, instructies horen hier. Doel: **kennis overdragen**." }],
          theorie: "Cito-truc: titel 'Wat is X?' of 'Hoe werkt Y?' → uiteenzetting.",
          niveaus: { basis: "Wikipedia. A.", simpeler: "Uiteenzetting = info = A.", nogSimpeler: "Wikipedia = A." },
        },
      },
      {
        q: "Welk **signaalwoord** wijst typisch op een betoog?",
        options: ["Ik vind dat","Aan de ene kant","Ten eerste","Bovendien"],
        answer: 0,
        wrongHints: [null, "Niet — dat is beschouwing.", "Niet — dat is uiteenzetting.", "Niet — kan alle drie."],
        uitlegPad: {
          stappen: [{ titel: "'Ik vind' = mening = betoog", tekst: "**'Ik vind dat'**, 'het is duidelijk dat', 'zonder twijfel', 'daarom moet' = signalen dat schrijver een **stellige mening** heeft. Betoog-kenmerk." }],
          theorie: "Vergelijk met 'aan de ene kant' (beschouwing) of 'ten eerste/vervolgens' (uiteenzetting).",
          niveaus: { basis: "Ik vind. A.", simpeler: "Ik vind = mening = betoog = A.", nogSimpeler: "Ik vind = A." },
        },
      },
      {
        q: "In welk soort tekst is schrijver **het meest neutraal**?",
        options: ["Uiteenzetting","Beschouwing","Betoog","Reclame"],
        answer: 0,
        wrongHints: [null, "Niet — heeft nuance.", "Niet — duidelijke mening.", "Niet — wil overtuigen."],
        uitlegPad: {
          stappen: [{ titel: "Uiteenzetting = neutraal", tekst: "**Uiteenzetting** = puur informatief. Geen mening. Vergelijk: encyclopedie, wetenschappelijk rapport (objectiviteit-norm). Schrijver presenteert feiten, lezer beslist zelf." }],
          niveaus: { basis: "Uiteenzetting. A.", simpeler: "Neutraal = uiteenzetting = A.", nogSimpeler: "Neutraal = A." },
        },
      },
    ],
  },

  // ─── B. Betoog opbouwen ───────────────────────────────────
  {
    title: "Betoog opbouwen — stelling, argumenten, weerlegging",
    explanation:
      "Een goed **betoog** heeft een herkenbare structuur. Voor CSE moet je opbouw kunnen analyseren én zelf schrijven.\n\n**Klassieke betoog-structuur**:\n\n**1. Inleiding** (~10-15%):\n• **Aanleiding**: actueel voorbeeld dat onderwerp introduceert.\n• **Stellingname**: helder + concreet 'Ik vind dat X moet/mag/moet niet'.\n• Soms preview van argumenten.\n\n**2. Middenstuk** (~70-80%):\n• **2-4 hoofdargumenten** vóór stelling.\n• Elk argument: claim + onderbouwing + voorbeeld.\n• **Tegenargument(en)** noemen + **weerleggen** ('Sommigen zeggen X, maar...').\n• Volgorde: meestal sterkste argument eerst OF laatst (recency-effect).\n\n**3. Slot** (~10-15%):\n• **Conclusie**: stelling herhalen, nu krachtiger geformuleerd.\n• **Oproep tot actie** (optioneel): wat moet lezer doen?\n• Geen NIEUWE argumenten in slot.\n\n**Stelling formuleren**:\n• **Concreet** + **duidelijk** + **discussieerbaar**.\n• ❌ 'School is belangrijk.' (niet discussieerbaar, iedereen vindt).\n• ✓ 'Vanaf groep 7 moeten leerlingen 2 vakken zelf kiezen.' (specifiek + discussieerbaar).\n\n**Argument-types** (van sterk naar zwak):\n• **Feit-argument**: 'Onderzoek toont aan dat...'\n• **Voorbeeld-argument**: 'In Finland blijkt dat...'\n• **Autoriteits-argument**: 'Volgens prof. X...'\n• **Logisch-argument**: 'Als A, dan B, dus C...'\n• **Emotie-argument**: 'Denk aan de kinderen!' (zwakste, vaak drogreden-risico)\n\n**Tegenargument weerleggen**:\n• Noem het sterk: '**Critici stellen** dat...'\n• Weerleg met feit/voorbeeld/logica.\n• Toon dat jouw standpunt ook na dit tegenargument blijft staan.\n\n**Cito-truc — sterk betoog herkennen**:\n• Helder + concrete stelling.\n• Minstens 2 onderbouwde argumenten.\n• Tegenargument benoemd + weerlegd.\n• Conclusie sluit aan op stelling.\n• Geen drogredenen.",
    checks: [
      {
        q: "Wat hoort in de **inleiding** van een betoog?",
        options: ["Aanleiding + stelling","Conclusie + actie","Voorbeelden","Tegenargumenten"],
        answer: 0,
        wrongHints: [null, "Niet — dat is slot.", "Niet — die komen in midden.", "Niet — die horen in midden + weerlegging."],
        uitlegPad: {
          stappen: [{ titel: "Inleiding = openen", tekst: "**Inleiding**: trekt aandacht (aanleiding) + plaatst stelling. Lezer moet **eerste alinea** weten waar het over gaat én wat schrijver vindt." }],
          theorie: "Cito-tip: kijk altijd naar EERSTE ALINEA om stelling te vinden. Vaak letterlijk geformuleerd.",
          niveaus: { basis: "Aanleiding + stelling. A.", simpeler: "Inleiding = aanleiding + stelling = A.", nogSimpeler: "Stelling = A." },
        },
      },
      {
        q: "Welke is de **sterkste stelling** voor een betoog?",
        options: ["'Vanaf groep 8 moet schooladvies door de leerling zelf gegeven worden'","'School is belangrijk'","'Het is hier warm'","'Misschien moeten kinderen leren'"],
        answer: 0,
        wrongHints: [null, "Niet — niet discussieerbaar.", "Niet — geen meningsstelling.", "Niet — te vaag."],
        uitlegPad: {
          stappen: [{ titel: "Concreet + discussieerbaar", tekst: "Goede stelling = specifiek (welke groep, welke actie) + discussieerbaar (mensen kunnen oneens zijn) + niet vanzelfsprekend. Eerste optie scoort op alle 3." }],
          theorie: "Cito-pattern: vermijd 'is belangrijk' (te vaag), 'wel/niet doen' zonder context, of vanzelfsprekendheden.",
          niveaus: { basis: "Eerste optie. A.", simpeler: "Concreet + discussieerbaar = A.", nogSimpeler: "Eerste = A." },
        },
      },
      {
        q: "Een **goed betoog** noemt het **tegenargument** en:",
        options: ["Weerlegt het","Negeert het","Bevestigt het","Maakt het belangrijker"],
        answer: 0,
        wrongHints: [null, "Niet — laat zien dat schrijver argumenten kent + ze overwon.", "Niet — verzwakt eigen positie.", "Niet — verzwakt overtuiging."],
        uitlegPad: {
          stappen: [{ titel: "Tegenargument noemen + weerleggen", tekst: "Een sterk betoog **onderkent tegenargumenten** ('Critici stellen X') maar **weerlegt** ze ('Dat klopt niet omdat...'). Toont dat schrijver het hele veld kent → meer geloofwaardig." }],
          theorie: "Cito-CSE-favoriet: tegenargument-weerlegging is herkennings-vraag. Zoek 'Sommigen', 'Tegenstanders', 'Critici stellen' + zin erna.",
          niveaus: { basis: "Weerlegt het. A.", simpeler: "Tegenargument = noemen + weerleggen = A.", nogSimpeler: "Weerleggen = A." },
        },
      },
      {
        q: "Welk argument-type is **sterk**?",
        options: ["Feit-argument met onderzoek","Emotie-appel zonder bewijs","Persoonlijke ervaring zonder context","Algemene uitspraak"],
        answer: 0,
        wrongHints: [null, "Zwak — geen bewijs.", "Wel context maar zwakker dan feit.", "Te vaag."],
        uitlegPad: {
          stappen: [{ titel: "Hiërarchie argumenten", tekst: "Sterkste → zwakste: **feit** (onderzoek, statistiek) > **voorbeeld** (concrete case) > **autoriteit** (expert noemt) > **logica** (als-dan) > **emotie** (gevoel). Cito waardeert feit/voorbeeld het hoogst." }],
          niveaus: { basis: "Feit. A.", simpeler: "Feit-argument = sterkste = A.", nogSimpeler: "Feit = A." },
        },
      },
      {
        q: "Wat hoort NIET in het **slot** van een betoog?",
        options: ["Nieuwe argumenten","Stelling herhalen","Oproep tot actie","Conclusie"],
        answer: 0,
        wrongHints: [null, "Wel — in slot stelling herhalen.", "Wel — optioneel.", "Wel — slot is conclusie."],
        uitlegPad: {
          stappen: [{ titel: "Slot = afsluiten, niet openen", tekst: "Slot **sluit af**. Geen nieuwe argumenten — die horen in middenstuk. Slot herhaalt stelling (krachtiger) + eventueel oproep. Nieuw materiaal in slot = zwak betoog (lezer kan niet meer reageren)." }],
          theorie: "Cito-tip: in slot 'Concluderend...' / 'Daarom blijft...' / 'Het moet duidelijk zijn dat...' zijn signaalwoorden.",
          niveaus: { basis: "Nieuwe argumenten. A.", simpeler: "Slot = geen nieuwe argumenten = A.", nogSimpeler: "Nieuwe = A." },
        },
      },
    ],
  },

  // ─── C. Argumenten + drogredenen ──────────────────────────
  {
    title: "Argumentatie + drogredenen herkennen",
    explanation:
      "**Argumentatie** = onderbouwing van een stelling met redenen. Voor CSE moet je **goede argumenten** kunnen onderscheiden van **drogredenen** (foute argumenten).\n\n**Argument-soorten (uitgebreid)**:\n\n**1. Inhoudelijke argumenten** (sterk):\n• **Feit/onderzoek**: 'Volgens CBS daalt analfabetisme.'\n• **Voorbeeld**: 'In Zweden werkt 4-daagse week goed.'\n• **Gevolg-argument**: 'Als X, dan Y. Y is goed/slecht, dus X is goed/slecht.'\n• **Vergelijking**: 'NL kan leren van Finland-model.'\n• **Autoriteit**: 'Onderzoekers zeggen...'\n\n**2. Pragmatische argumenten** (middelsterk):\n• **Kosten-baten**: 'Levert X op tegen Y kosten.'\n• **Haalbaarheid**: 'Plan kan binnen 2 jaar.'\n\n**3. Drogredenen** (foute argumenten — Cito-favoriet om te herkennen):\n\n**A. Persoonlijke aanval (ad hominem)**:\n• 'Jij bent dom, dus je argument klopt niet.'\n• Aanval op persoon, niet op argument.\n\n**B. Vals dilemma**:\n• 'Of voor onze partij, of voor de chaos.'\n• Doen alsof er maar 2 keuzes zijn.\n\n**C. Generalisatie**:\n• 'Alle politici liegen.'\n• Te brede uitspraak zonder bewijs.\n\n**D. Cirkelredenering**:\n• 'X is goed omdat het beter is dan slecht.'\n• Conclusie bewijst zichzelf.\n\n**E. Autoriteits-misbruik**:\n• 'Mijn vader zegt het, dus klopt.'\n• Autoriteit zonder relevantie.\n\n**F. Hellend vlak (slippery slope)**:\n• 'Als we X toestaan, eindigen we bij Y, dus geen X.'\n• Onbewezen oorzaak-keten.\n\n**G. Stroman**:\n• Tegenargument verdraaien tot makkelijk te verslaan versie.\n• 'Mijn tegenstander wil ALLE auto's verbieden!' (hij wilde alleen binnenstad-vrij).\n\n**H. Appeal to ignorance**:\n• 'Niemand heeft bewezen dat het niet zo is, dus is het zo.'\n• Onbewijsbaar als bewijs gebruikt.\n\n**I. Foute oorzaak (post hoc)**:\n• 'A gebeurde voor B, dus A veroorzaakte B.'\n• Voorbeeld: 'Vaccinatie kwam voor autisme-diagnose, dus vaccinatie veroorzaakt autisme.' (Wakefield-fraude, weerlegd.)\n\n**J. Emotionele manipulatie**:\n• 'Denk aan de kinderen!'\n• Appèl op emotie zonder feitelijke onderbouwing.\n\n**Cito-truc**: herken signaal-zinnetjes:\n• 'Iedereen weet...' → generalisatie\n• 'Wie niet X is, is Y' → vals dilemma\n• 'Mijn opa zei...' → autoriteits-misbruik (tenzij relevant)\n• 'Als we dit toestaan, dan...' → hellend vlak.",
    checks: [
      {
        q: "*'Iedereen vindt onze school de beste.'* — welke drogreden?",
        options: ["Generalisatie","Vals dilemma","Persoonlijke aanval","Cirkelredenering"],
        answer: 0,
        wrongHints: [null, "Niet — geen of-of-keuze.", "Niet — geen aanval op persoon.", "Niet — geen zelf-bewijs."],
        uitlegPad: {
          stappen: [{ titel: "'Iedereen' = ongelimiteerd", tekst: "**Generalisatie**: uitspraak over **alle leden** van een groep zonder bewijs. 'Iedereen', 'altijd', 'niemand', 'nooit', 'alle' = signaal. Probleem: 1 tegenvoorbeeld weerlegt." }],
          niveaus: { basis: "Generalisatie. A.", simpeler: "Iedereen-uitspraak = generalisatie = A.", nogSimpeler: "Generalisatie = A." },
        },
      },
      {
        q: "*'Wie tegen migratie is, is racistisch.'* — welke drogreden?",
        options: ["Vals dilemma","Generalisatie","Stroman","Feit-argument"],
        answer: 0,
        wrongHints: [null, "Niet — geen 'iedereen'-uitspraak.", "Niet — argument wordt niet verdraaid.", "Niet — geen feit."],
        uitlegPad: {
          stappen: [{ titel: "Of-of zonder middenweg", tekst: "**Vals dilemma**: doen alsof er maar 2 opties zijn (voor of tegen). In realiteit kun je migratie willen beperken ZONDER racistisch te zijn. Onterecht binair maken." }],
          theorie: "Cito-favoriet: vals dilemma + 'wie niet voor is, is tegen' / 'óf X óf Y' / 'er is geen andere optie'.",
          niveaus: { basis: "Vals dilemma. A.", simpeler: "Of-of zonder middenweg = vals dilemma = A.", nogSimpeler: "Vals dilemma = A." },
        },
      },
      {
        q: "*'Mijn tegenstander wil het leger volledig afschaffen!'* (terwijl hij alleen bezuinigen voorstelde) — drogreden:",
        options: ["Stroman","Hellend vlak","Generalisatie","Cirkelredenering"],
        answer: 0,
        wrongHints: [null, "Niet — geen oorzaak-keten.", "Niet — geen 'iedereen'.", "Niet — geen zelf-bewijs."],
        uitlegPad: {
          stappen: [{ titel: "Stroman = verdraaid tegenstandpunt", tekst: "**Stroman-drogreden**: argument tegenstander **verdraaien tot extreme versie** die makkelijker te verslaan is. Bezuinigen ≠ afschaffen. Vechten tegen iets dat tegenstander niet zei." }],
          theorie: "Strawman (Engels) — schiet je een stropop neer ipv echte argument.",
          niveaus: { basis: "Stroman. A.", simpeler: "Tegenstander verdraaien = stroman = A.", nogSimpeler: "Stroman = A." },
        },
      },
      {
        q: "*'Als we cannabis legaliseren, zullen jongeren heroïne gaan gebruiken.'* — drogreden:",
        options: ["Hellend vlak","Stroman","Vals dilemma","Goed argument"],
        answer: 0,
        wrongHints: [null, "Niet — geen verdraaiing.", "Niet — geen of-of.", "Niet — wel drogreden."],
        uitlegPad: {
          stappen: [{ titel: "Hellend vlak = ongegronde oorzaak-keten", tekst: "**Hellend vlak (slippery slope)**: claim dat A onvermijdelijk leidt tot Z via B, C, D... zonder dat keten bewezen is. **Empirisch onderzoek (Portugal-experiment)** weerlegt dat decriminaliseren cannabis tot heroïne-stijging leidt." }],
          theorie: "Cito-truc: 'Als we X toestaan, dan komt Y, dan Z' = hellend vlak. Bewijs voor elke schakel is nodig.",
          niveaus: { basis: "Hellend vlak. A.", simpeler: "Onbewezen keten = hellend vlak = A.", nogSimpeler: "Hellend vlak = A." },
        },
      },
      {
        q: "Welk argument is het **sterkst** voor 'sport is goed'?",
        options: ["WHO-onderzoek toont 30% minder hart- en vaatziekten bij actieve mensen","Iedereen weet dat sporten goed is","Mijn vader zegt het","Sport is leuk"],
        answer: 0,
        wrongHints: [null, "Niet — generalisatie zonder bewijs.", "Niet — autoriteit zonder relevantie.", "Te vaag + alleen emotie."],
        uitlegPad: {
          stappen: [{ titel: "Feit-argument > rest", tekst: "**WHO-onderzoek + getallen** = feit-argument. Concreet, controleerbaar, bewezen. Andere opties zijn drogredenen (generalisatie / autoriteit / emotie)." }],
          theorie: "Cito-pattern: bij meerkeuze-vraag 'sterkste argument' → kies optie met BRON + CIJFERS / onderzoek.",
          niveaus: { basis: "Eerste optie. A.", simpeler: "Onderzoek + cijfers = sterk = A.", nogSimpeler: "Eerste = A." },
        },
      },
    ],
  },

  // ─── D. Stijl + retoriek ──────────────────────────────────
  {
    title: "Stijl + retoriek — taalmiddelen herkennen",
    explanation:
      "Goede schrijvers gebruiken **stijl-** en **retorische middelen** om hun tekst krachtiger te maken. Voor CSE moet je deze herkennen.\n\n**1. Retorische vraag**:\n• Vraag waarvan antwoord duidelijk is — niet om info te krijgen, maar om effect.\n• 'Wie wil er nou niet gezond leven?'\n• Doel: lezer mee laten denken + impliciet doen instemmen.\n\n**2. Contrast/tegenstelling**:\n• Tegenovergestelden naast elkaar.\n• 'Niet vroeger maar nu. Niet morgen maar vandaag.'\n• Versterkt boodschap door tegenstelling te benadrukken.\n\n**3. Herhaling (repetitio, anafoor)**:\n• Zelfde woord/zin meerdere keren.\n• 'Ik heb een droom dat... Ik heb een droom dat... Ik heb een droom dat...' (Martin Luther King).\n• Doel: nadruk, ritme, onthouden.\n\n**4. Drieslag (tricolon)**:\n• Drie elementen op rij.\n• 'Vrijheid, gelijkheid, broederschap.' (Franse Revolutie)\n• 'Veni, vidi, vici.' (Caesar)\n• Klinkt poëtisch + compleet.\n\n**5. Metafoor**:\n• Iets beeldspraak — vergelijking zonder 'als'.\n• 'Het leven is een rivier.'\n• Doel: complexe ideeën concreet maken.\n\n**6. Vergelijking (simile)**:\n• Vergelijking MET 'als' of 'zoals'.\n• 'Hij vocht als een leeuw.'\n\n**7. Personificatie**:\n• Dingen krijgen menselijke eigenschappen.\n• 'De wind fluisterde.'\n\n**8. Hyperbool (overdrijving)**:\n• Bewust overdrijven.\n• 'Ik heb dit duizend keer gezegd.'\n• Doel: nadruk, soms humor.\n\n**9. Understatement**:\n• Bewust afzwakken.\n• 'Niet onaardig' (= heel aardig).\n• Doel: ironie, bescheidenheid.\n\n**10. Ironie**:\n• Bedoelt tegenovergestelde van wat gezegd wordt.\n• 'Fantastisch weer!' (bij regenstorm).\n• Cito-favoriet: leerlingen moeten **bedoeling** herkennen.\n\n**11. Climax (anti-climax)**:\n• Climax: stijgend in intensiteit (klein → groter → grootst).\n• Anti-climax: opbouw die plotseling daalt (om humor of teleurstelling).\n\n**12. Eufemisme** (verzachting):\n• 'Hij is heengegaan' (gestorven).\n• 'Politionele actie' (oorlog).\n\n**Toon-soorten** (Cito-vraag-favoriet):\n• **Zakelijk**: feitelijk, neutraal.\n• **Belerend**: docent-toon, betweterig.\n• **Provocatief**: uitdagend, controversieel.\n• **Sarcastisch / ironisch**: dubbelzinnig.\n• **Empathisch / meelevend**: warm, begripvol.\n• **Cynisch**: bitter, gedesillusioneerd.\n\n**Cito-truc**: bij vraag 'welk stijlmiddel?' — kijk naar **structuur** van zin/passage.",
    checks: [
      {
        q: "*'Wie wil er nou niet gezond leven?'* — welk stijlmiddel?",
        options: ["Retorische vraag","Contrast","Metafoor","Hyperbool"],
        answer: 0,
        wrongHints: [null, "Niet — geen tegenstelling.", "Niet — geen beeldspraak.", "Niet — geen overdrijving."],
        uitlegPad: {
          stappen: [{ titel: "Vraag waarvan antwoord duidelijk", tekst: "**Retorische vraag**: vraag NIET om info maar om effect. Antwoord ligt vast ('niemand wil ongezond leven'). Doel: lezer impliciet doen instemmen." }],
          theorie: "Cito-pattern: retorische vragen vaak in opiniestukken + speeches.",
          niveaus: { basis: "Retorische vraag. A.", simpeler: "Vraag-zonder-antwoord-nodig = retorisch = A.", nogSimpeler: "Retorisch = A." },
        },
      },
      {
        q: "*'Het leven is een rivier.'* — welk stijlmiddel?",
        options: ["Metafoor","Vergelijking","Hyperbool","Ironie"],
        answer: 0,
        wrongHints: [null, "Niet — bij vergelijking zou 'als' of 'zoals' staan.", "Niet — geen overdrijving.", "Niet — geen tegenovergestelde bedoeling."],
        uitlegPad: {
          stappen: [{ titel: "Metafoor = zonder 'als'", tekst: "**Metafoor**: beeldspraak die A = B claimt (zonder 'als'). 'Leven IS rivier'. Vergelijking gebruikt WEL 'als': 'Het leven is ALS een rivier'." }],
          theorie: "Cito-tip: ezelsbrug 'Metafoor zonder als'. Vergelijking met 'als' of 'zoals'.",
          niveaus: { basis: "Metafoor. A.", simpeler: "A = B zonder 'als' = metafoor = A.", nogSimpeler: "Metafoor = A." },
        },
      },
      {
        q: "Wat is een **understatement**?",
        options: ["Bewust afzwakken (verzachten)","Bewust overdrijven","Vraag stellen","Beeldspraak"],
        answer: 0,
        wrongHints: [null, "Niet — dat is hyperbool.", "Niet — dat is retorische vraag.", "Niet — dat is metafoor."],
        uitlegPad: {
          stappen: [{ titel: "Understatement = onderbenadrukking", tekst: "**Understatement** = bewust afzwakken. 'Niet onaardig' = heel aardig. 'Het regent een beetje' (terwijl 't plenst). Engels: 'It's a bit chilly' (bij −20°C). Vaak ironisch effect." }],
          theorie: "Britse humor-favoriet. Tegenovergesteld van hyperbool.",
          niveaus: { basis: "Afzwakken. A.", simpeler: "Understatement = verzachten = A.", nogSimpeler: "Afzwakken = A." },
        },
      },
      {
        q: "Tijdens een regenstorm zegt iemand: *'Wat een geweldig weer!'* Welk stijlmiddel?",
        options: ["Ironie","Hyperbool","Metafoor","Vergelijking"],
        answer: 0,
        wrongHints: [null, "Niet — geen overdrijving (eerder onderschatting).", "Niet — geen beeldspraak.", "Niet — geen 'als'."],
        uitlegPad: {
          stappen: [{ titel: "Ironie = tegenovergestelde bedoeling", tekst: "**Ironie**: spreker zegt A, bedoelt **tegenovergestelde**. 'Geweldig weer' bij regenstorm betekent juist 'verschrikkelijk weer'. Lezer/luisteraar herkent contradictie." }],
          theorie: "Cito-favoriet: ironie herkennen in tekst — kijk naar context. Past gezegde bij situatie? Zo nee → mogelijk ironisch.",
          niveaus: { basis: "Ironie. A.", simpeler: "Tegenovergestelde bedoelen = ironie = A.", nogSimpeler: "Ironie = A." },
        },
      },
      {
        q: "*'Vrijheid, gelijkheid, broederschap.'* — welk stijlmiddel?",
        options: ["Drieslag (tricolon)","Anafoor","Climax","Antithese"],
        answer: 0,
        wrongHints: [null, "Bijna — anafoor is herhaling, hier 3 verschillende woorden.", "Bijna — climax stijgt in intensiteit.", "Niet — antithese is tegenstelling."],
        uitlegPad: {
          stappen: [{ titel: "3 elementen = tricolon", tekst: "**Drieslag (tricolon)**: 3 elementen op rij — klinkt compleet + memorabel. Klassiek: 'Veni, vidi, vici' (Caesar), 'Vrijheid, gelijkheid, broederschap' (Franse Revolutie), 'Voor God, voor koning, voor vaderland'." }],
          theorie: "Onze hersenen onthouden patroon van 3 het best (drie-regel in retorica + reclame).",
          niveaus: { basis: "Drieslag. A.", simpeler: "3 elementen = tricolon = A.", nogSimpeler: "Drieslag = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — betoog + analyse",
    explanation:
      "Mix van tekstsoorten + opbouw + drogredenen + stijl. Cito-CSE-stijl.\n\nVeel succes!",
    checks: [
      {
        q: "*'Mijn opa zegt dat alle moderne muziek vreselijk is.'* — drogreden:",
        options: ["Autoriteits-misbruik + generalisatie","Vals dilemma","Stroman","Goed argument"],
        answer: 0,
        wrongHints: [null, "Niet — geen of-of-keuze.", "Niet — geen verdraaiing.", "Niet — twee drogredenen tegelijk."],
        uitlegPad: {
          stappen: [{ titel: "Dubbel: opa + alle", tekst: "**Twee drogredenen**: (1) opa is geen muziek-expert → autoriteits-misbruik. (2) 'Alle moderne muziek' → generalisatie. Combinatie maakt argument extra zwak." }],
          niveaus: { basis: "Autoriteit + generalisatie. A.", simpeler: "Opa + alle = twee drogredenen = A.", nogSimpeler: "Drogreden = A." },
        },
      },
      {
        q: "Welke tekstsoort: *artikel waarin schrijver verschillende kanten van AI-gebruik in scholen belicht zonder eindstandpunt*?",
        options: ["Beschouwing","Betoog","Uiteenzetting","Verhaal"],
        answer: 0,
        wrongHints: [null, "Niet — geen duidelijke mening.", "Niet — meer dan alleen feiten.", "Niet — geen fictie."],
        uitlegPad: {
          stappen: [{ titel: "Verschillende kanten = beschouwing", tekst: "**Beschouwing** = belicht meerdere perspectieven zonder definitieve conclusie. Schrijver weegt af, soms met licht voorkeur, vaak open einde." }],
          niveaus: { basis: "Beschouwing. A.", simpeler: "Verschillende kanten = beschouwing = A.", nogSimpeler: "Beschouwing = A." },
        },
      },
      {
        q: "Wat is een **anafoor**?",
        options: ["Herhaling aan begin van zinnen","Vraag-zonder-antwoord","Tegenstelling","Beeldspraak"],
        answer: 0,
        wrongHints: [null, "Niet — dat is retorische vraag.", "Niet — dat is antithese/contrast.", "Niet — dat is metafoor."],
        uitlegPad: {
          stappen: [{ titel: "Anafoor = begin-herhaling", tekst: "**Anafoor** = herhalen van **woord(en) aan begin** van opeenvolgende zinnen. 'Ik heb een droom dat... Ik heb een droom dat...' (Martin Luther King). Versterkt boodschap door ritme + nadruk." }],
          niveaus: { basis: "Begin-herhaling. A.", simpeler: "Anafoor = herhaling begin = A.", nogSimpeler: "Begin = A." },
        },
      },
      {
        q: "In een **betoog**, hoort het tegenargument:",
        options: ["Genoemd + weerlegd","Volledig genegeerd","Vooraan in tekst","Pas in slot"],
        answer: 0,
        wrongHints: [null, "Niet — geeft zwak signaal.", "Niet — komt meestal in midden.", "Niet — slot is conclusie."],
        uitlegPad: {
          stappen: [{ titel: "Tegenargument behandelen", tekst: "Goed betoog **erkent** tegenargumenten en weerlegt ze. Plaats: in midden, ergens tussen hoofd-argumenten. Toont kennis van veld + sterkt eigen positie." }],
          niveaus: { basis: "Genoemd + weerlegd. A.", simpeler: "Tegenargument = noemen + weerleggen = A.", nogSimpeler: "Weerleggen = A." },
        },
      },
      {
        q: "*'Hij is een leeuw op het strijdveld.'* (over voetballer)— welk stijlmiddel?",
        options: ["Metafoor","Vergelijking","Hyperbool","Ironie"],
        answer: 0,
        wrongHints: [null, "Niet — bij vergelijking zou 'als een' staan.", "Niet — geen overdrijving.", "Niet — geen tegenovergestelde."],
        uitlegPad: {
          stappen: [{ titel: "Metafoor: 'is' = direct", tekst: "Hij IS een leeuw → metafoor (direct gelijkstellen). Hij is ALS een leeuw → vergelijking (met 'als'). Verschil: woord 'als' bepaalt." }],
          niveaus: { basis: "Metafoor. A.", simpeler: "IS leeuw = metafoor = A.", nogSimpeler: "Metafoor = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const betoogBeschouwingHavoVwo = {
  id: "betoog-beschouwing-havo-vwo",
  title: "Betoog + beschouwing + uiteenzetting (HAVO/VWO)",
  emoji: "📝",
  level: "havo4-5-vwo",
  subject: "taal",
  referentieNiveau: "havo-vwo-CSE",
  sloThema: "Nederlands CSE — tekstsoorten herkennen + analyseren + schrijven",
  prerequisites: [
    { id: "argumentatieleer", title: "Argumentatieleer (havo 4)", niveau: "havo4-5" },
    { id: "tekstanalyse", title: "Tekstanalyse", niveau: "havo4-5" },
    { id: "schrijvenTeksten-po", title: "Schrijven van teksten (Cito basis)", niveau: "po-1F" },
  ],
  intro:
    "Drie tekstsoorten (uiteenzetting/beschouwing/betoog) herkennen + analyseren + zelf schrijven. Plus argumentatie-typen, 10 drogredenen + stijlmiddelen voor HAVO/VWO Nederlands CSE. ~15 min.",
  triggerKeywords: [
    "betoog", "beschouwing", "uiteenzetting",
    "tekstsoort", "tekstdoel",
    "argumentatie", "argument-soorten",
    "drogreden", "vals dilemma", "stroman", "generalisatie",
    "hellend vlak", "cirkelredenering", "autoriteits-misbruik",
    "stijlmiddel", "retorisch", "retorische vraag",
    "metafoor", "vergelijking", "anafoor", "drieslag",
    "ironie", "hyperbool", "understatement",
    "toon", "stelling", "weerlegging",
  ],
  chapters,
  steps,
};

export default betoogBeschouwingHavoVwo;
