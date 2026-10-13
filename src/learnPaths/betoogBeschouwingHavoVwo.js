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
      "Voor CSE Nederlands HAVO/VWO moet je 3 **persuasieve/informatieve tekstsoorten** kunnen onderscheiden. Elk heeft een eigen **tekstdoel** + **opbouw**.\n\n**1. Uiteenzetting (informeren)**:\n• **Doel**: lezer informeren over een onderwerp.\n• **Houding schrijver**: **neutraal**, geen mening.\n• **Structuur**: definitie → uitleg → voorbeelden → samenvatting.\n• **Voorbeelden**: Wikipedia-artikel, schoolboek-paragraaf, instructie.\n• **Signaalwoorden**: ten eerste, vervolgens, samengevat, kortom.\n\n**2. Beschouwing (afwegen)**:\n• **Doel**: lezer verschillende kanten van een kwestie laten zien.\n• **Houding schrijver**: **afgewogen**, geen definitieve mening, soms een lichte voorkeur.\n• **Structuur**: stelling/vraag → voor-argumenten → tegen-argumenten → conclusie (open of nuance).\n• **Voorbeelden**: opiniestuk in NRC over euthanasie, column met afweging.\n• **Signaalwoorden**: aan de ene kant, aan de andere kant, hoewel, daar staat tegenover.\n\n**3. Betoog (overtuigen)**:\n• **Doel**: lezer overtuigen van eigen standpunt.\n• **Houding schrijver**: **stellig**, duidelijke mening.\n• **Structuur**: stelling → argumenten **voor** → eventuele weerlegging tegen → conclusie (bekrachtiging stelling).\n• **Voorbeelden**: ingezonden brief 'demonstratie moet door', politieke speech.\n• **Signaalwoorden**: ik vind, het is duidelijk dat, zonder twijfel, daarom moet.\n\n**Vergelijking-tabel**:\n| | Uiteenzetting | Beschouwing | Betoog |\n|---|---|---|---|\n| Doel | Informeren | Afwegen | Overtuigen |\n| Mening | Geen | Nuance | Duidelijk |\n| Structuur | Lineair-uitleg | Voor + tegen | Stelling + argumenten |\n| Toets-onderwerp | Wetenschap | Maatschappelijk dilemma | Politiek/ethiek |\n\n**Toets-truc bij vraag 'wat is tekstsoort?'**:\n1. Lees inleiding + slot.\n2. Vraag: heeft schrijver een **duidelijke mening**? → betoog.\n3. Vraag: **verschillende kanten** belicht zonder eindstandpunt? → beschouwing.\n4. Alleen **feiten/uitleg**, geen mening? → uiteenzetting.\n\n**Gemengde teksten**:\nVeel teksten zijn mengvormen. Vraag dan: **dominant** doel? Daarop classificeer je.",
    checks: [
      {
        q: "Welke tekstsoort heeft als doel **lezer overtuigen** van eigen standpunt?",
        options: ["Betoog","Beschouwing","Uiteenzetting","Verhaal"],
        answer: 0,
        wrongHints: [null, "Een beschouwing zet verschillende kanten naast elkaar en weegt ze af. Probeert die de lezer van één standpunt te overtuigen?", "Een uiteenzetting legt neutraal uit hoe iets zit. Kiest die schrijver een kant?", "Een verhaal wil vooral boeien of vermaken. Welke tekstsoort draait om een eigen standpunt?"],
        uitlegPad: {
          stappen: [{ titel: "Betoog = overtuigen", tekst: "**Betoog** = persuasieve tekst met **duidelijke mening** van schrijver + argumenten om lezer over te halen. 'Ik vind dat...' is signaal." }],
          theorie: "Tekst-doelen-cluster: betoog/beschouwing/uiteenzetting + soms beschrijving (literatuur) + activering (reclame).",
          niveaus: { basis: "Betoog.", simpeler: "Overtuigen = betoog", nogSimpeler: "Betoog" },
        },
      },
      {
        q: "Een **beschouwing** kenmerkt zich door:",
        options: ["Voor- en tegenargumenten afwegen","Eén duidelijke mening verdedigen","Feiten neutraal op een rij zetten","Een spanningsboog met ontknoping"],
        answer: 0,
        wrongHints: [null, "Eén mening verdedigen doe je in een betoog. Wat doet een beschouwing met de verschillende standpunten?", "Feiten neutraal uitleggen doe je in een uiteenzetting. Wat komt er in een beschouwing bij?", "Een spanningsboog met ontknoping hoort bij een verhaal. Waar draait een beschouwing om?"],
        uitlegPad: {
          stappen: [{ titel: "Beschouwing = nuance", tekst: "**Beschouwing** belicht **verschillende kanten** van kwestie. Schrijver kan **lichte voorkeur** uitspreken maar geen definitieve conclusie. Voorbeeld: NRC-opinie over migratie met meerdere perspectieven." }],
          theorie: "Toets-patroon: signaalwoorden 'aan de ene kant... aan de andere kant' wijzen bijna altijd op beschouwing.",
          niveaus: { basis: "Voor + tegen afwegen.", simpeler: "Beschouwing = afwegen", nogSimpeler: "Afwegen" },
        },
      },
      {
        q: "Welke tekst is een **uiteenzetting**?",
        options: ["Wikipedia-artikel over fotosynthese","Opinie-stuk over euthanasie","Toespraak van een partijleider","Romanfragment over een zomer"],
        answer: 0,
        wrongHints: [null, "Een opiniestuk geeft een mening of een afweging. Welke tekst legt uit hoe iets werkt, zonder mening?", "Een partijleider wil kiezers overtuigen. Welke tekst geeft neutrale informatie?", "Een romanfragment vertelt een verhaal. Welke tekst legt iets uit zonder mening?"],
        uitlegPad: {
          stappen: [{ titel: "Wikipedia = informeren", tekst: "**Uiteenzetting** = informatieve tekst zonder mening. Wikipedia-artikelen, schoolboek-paragrafen, instructies horen hier. Doel: **kennis overdragen**." }],
          theorie: "Toets-truc: titel 'Wat is X?' of 'Hoe werkt Y?' → uiteenzetting.",
          niveaus: { basis: "Wikipedia.", simpeler: "Uiteenzetting = info", nogSimpeler: "Wikipedia" },
        },
      },
      {
        q: "Welk **signaalwoord** wijst typisch op een betoog?",
        options: ["Ik vind dat","Aan de ene kant","Ten eerste","Bovendien"],
        answer: 0,
        wrongHints: [null, "'Aan de ene kant' gebruik je als je verschillende kanten afweegt, zoals in een beschouwing. Welk signaal laat een eigen mening zien?", "Met 'ten eerste' som je op; dat doe je in elke tekstsoort. Welk signaal is typisch voor een betoog?", "'Bovendien' voegt iets toe; dat kan in elke tekstsoort. Welk signaal laat zien dat de schrijver een standpunt inneemt?"],
        uitlegPad: {
          stappen: [{ titel: "'Ik vind' = mening = betoog", tekst: "**'Ik vind dat'**, 'het is duidelijk dat', 'zonder twijfel', 'daarom moet' = signalen dat schrijver een **stellige mening** heeft. Betoog-kenmerk." }],
          theorie: "Vergelijk met 'aan de ene kant' (beschouwing) of 'ten eerste/vervolgens' (uiteenzetting).",
          niveaus: { basis: "Ik vind.", simpeler: "Ik vind = mening = betoog", nogSimpeler: "Ik vind" },
        },
      },
      {
        q: "In welk soort tekst is schrijver **het meest neutraal**?",
        options: ["Uiteenzetting","Beschouwing","Betoog","Reclame"],
        answer: 0,
        wrongHints: [null, "In een beschouwing weegt de schrijver af en mag hij een lichte voorkeur laten merken. Welke tekstsoort legt alleen uit?", "In een betoog verdedigt de schrijver een duidelijke mening. Is dat neutraal?", "Reclame wil dat je iets koopt of doet. Is de maker dan neutraal?"],
        uitlegPad: {
          stappen: [{ titel: "Uiteenzetting = neutraal", tekst: "**Uiteenzetting** = puur informatief. Geen mening. Vergelijk: encyclopedie, wetenschappelijk rapport (objectiviteit-norm). Schrijver presenteert feiten, lezer beslist zelf." }],
          niveaus: { basis: "Uiteenzetting.", simpeler: "Neutraal = uiteenzetting", nogSimpeler: "Neutraal" },
        },
      },
    ],
  },

  // ─── B. Betoog opbouwen ───────────────────────────────────
  {
    title: "Betoog opbouwen — stelling, argumenten, weerlegging",
    explanation:
      "Een goed **betoog** heeft een herkenbare structuur. Voor CSE moet je opbouw kunnen analyseren én zelf schrijven.\n\n**Klassieke betoog-structuur**:\n\n**1. Inleiding** (~10-15%):\n• **Aanleiding**: actueel voorbeeld dat onderwerp introduceert.\n• **Stellingname**: helder + concreet 'Ik vind dat X moet/mag/moet niet'.\n• Soms preview van argumenten.\n\n**2. Middenstuk** (~70-80%):\n• **2-4 hoofdargumenten** vóór stelling.\n• Elk argument: claim + onderbouwing + voorbeeld.\n• **Tegenargument(en)** noemen + **weerleggen** ('Sommigen zeggen X, maar...').\n• Volgorde: meestal sterkste argument eerst OF laatst (recency-effect).\n\n**3. Slot** (~10-15%):\n• **Conclusie**: stelling herhalen, nu krachtiger geformuleerd.\n• **Oproep tot actie** (optioneel): wat moet lezer doen?\n• Geen NIEUWE argumenten in slot.\n\n**Stelling formuleren**:\n• **Concreet** + **duidelijk** + **discussieerbaar**.\n• ❌ 'School is belangrijk.' (niet discussieerbaar, iedereen is het ermee eens).\n• ✓ 'Vanaf groep 7 moeten leerlingen 2 vakken zelf kiezen.' (specifiek + discussieerbaar).\n\n**Argument-types** (van sterk naar zwak):\n• **Feit-argument**: 'Onderzoek toont aan dat...'\n• **Voorbeeld-argument**: 'In Finland blijkt dat...'\n• **Autoriteits-argument**: 'Volgens prof. X...'\n• **Logisch-argument**: 'Als A, dan B, dus C...'\n• **Emotie-argument**: 'Denk aan de kinderen!' (zwakste, vaak drogreden-risico)\n\n**Tegenargument weerleggen**:\n• Noem het sterk: '**Critici stellen** dat...'\n• Weerleg met feit/voorbeeld/logica.\n• Toon dat jouw standpunt ook na dit tegenargument blijft staan.\n\n**Toets-truc — sterk betoog herkennen**:\n• Heldere + concrete stelling.\n• Minstens 2 onderbouwde argumenten.\n• Tegenargument benoemd + weerlegd.\n• Conclusie sluit aan op stelling.\n• Geen drogredenen.",
    checks: [
      {
        q: "Wat hoort in de **inleiding** van een betoog?",
        options: ["Aanleiding + stelling","Conclusie + actie","Voorbeelden","Tegenargumenten"],
        answer: 0,
        wrongHints: [null, "Een conclusie en een oproep tot actie horen aan het eind, in het slot. Wat vertel je de lezer eerst?", "Voorbeelden ondersteunen je argumenten in het middenstuk. Wat moet de lezer weten vóórdat de argumenten komen?", "Tegenargumenten bespreek en weerleg je in het middenstuk. Waarmee open je een betoog?"],
        uitlegPad: {
          stappen: [{ titel: "Inleiding = openen", tekst: "**Inleiding**: trekt aandacht (aanleiding) + plaatst stelling. Lezer moet na de **eerste alinea** weten waar het over gaat én wat schrijver vindt." }],
          theorie: "Toets-tip: kijk altijd naar EERSTE ALINEA om stelling te vinden. Vaak letterlijk geformuleerd.",
          niveaus: { basis: "Aanleiding + stelling.", simpeler: "Inleiding = aanleiding + stelling", nogSimpeler: "Stelling" },
        },
      },
      {
        q: "Welke is de **sterkste stelling** voor een betoog?",
        options: ["'Leerlingen moeten hun schooladvies zelf bepalen'","'School is voor iedereen heel erg belangrijk'","'Het is vandaag in het klaslokaal erg warm'","'Misschien moeten kinderen op school meer dingen leren'"],
        answer: 0,
        wrongHints: [null, "Bijna iedereen is het hiermee eens. Valt er over deze stelling echt te discussiëren?", "Dit is een waarneming over het weer in de klas. Is dat een standpunt dat je met argumenten verdedigt?", "'Misschien' en 'meer dingen' zijn vaag. Is duidelijk wat de schrijver precies vindt?"],
        uitlegPad: {
          stappen: [{ titel: "Concreet + discussieerbaar", tekst: "Goede stelling = specifiek (welke groep, welke actie) + discussieerbaar (mensen kunnen oneens zijn) + niet vanzelfsprekend. De stelling over het schooladvies scoort op alle 3." }],
          theorie: "Toets-patroon: vermijd 'is belangrijk' (te vaag), 'wel/niet doen' zonder context, of vanzelfsprekendheden.",
          niveaus: { basis: "De stelling over het schooladvies.", simpeler: "Concreet + discussieerbaar", nogSimpeler: "Schooladvies" },
        },
      },
      {
        q: "Een **goed betoog** noemt het **tegenargument** en:",
        options: ["Weerlegt het","Negeert het","Bevestigt het","Maakt het belangrijker"],
        answer: 0,
        wrongHints: [null, "Niet — wie het negeert, lijkt de tegenargumenten niet te kennen.", "Als je het tegenargument gelijk geeft, wat gebeurt er dan met je eigen standpunt?", "Een tegenargument belangrijker maken helpt vooral de tegenpartij. Wat doe je er beter mee?"],
        uitlegPad: {
          stappen: [{ titel: "Tegenargument noemen + weerleggen", tekst: "Een sterk betoog **onderkent tegenargumenten** ('Critici stellen X') maar **weerlegt** ze ('Dat klopt niet omdat...'). Toont dat schrijver het hele veld kent → meer geloofwaardig." }],
          theorie: "CSE-favoriet: tegenargument-weerlegging is herkennings-vraag. Zoek 'Sommigen', 'Tegenstanders', 'Critici stellen' + zin erna.",
          niveaus: { basis: "Weerlegt het.", simpeler: "Tegenargument = noemen + weerleggen", nogSimpeler: "Weerleggen" },
        },
      },
      {
        q: "Welk argument-type is **sterk**?",
        options: ["Feit-argument met onderzoek","Voorbeeld uit de praktijk","Uitspraak van een deskundige","Beroep op het gevoel"],
        answer: 0,
        wrongHints: [null, "Een concreet voorbeeld maakt een argument levendig, maar bewijst het iets voor alle gevallen? Wat staat hoger in de rij?", "Een deskundige noemen helpt, maar je vertrouwt dan op iemands woord. Wat is nog harder bewijs?", "Een beroep op het gevoel kan raken, maar bewijst niets. Welk soort argument kun je controleren?"],
        uitlegPad: {
          stappen: [{ titel: "Hiërarchie argumenten", tekst: "Sterkste → zwakste: **feit** (onderzoek, statistiek) > **voorbeeld** (concrete case) > **autoriteit** (expert noemt) > **logica** (als-dan) > **emotie** (gevoel). De toets waardeert feit/voorbeeld het hoogst." }],
          niveaus: { basis: "Feit.", simpeler: "Feit-argument = sterkste", nogSimpeler: "Feit" },
        },
      },
      {
        q: "Wat hoort NIET in het **slot** van een betoog?",
        options: ["Nieuwe argumenten","Stelling herhalen","Oproep tot actie","Conclusie"],
        answer: 0,
        wrongHints: [null, "Het slot herhaalt de stelling vaak, krachtiger dan eerst. Wat hoort er juist níét in?", "Een oproep tot actie past goed in een slot. Waar zou de lezer in het slot niet meer op kunnen reageren?", "Het slot is de plek voor de conclusie. Wat hoort al eerder in de tekst te staan?"],
        uitlegPad: {
          stappen: [{ titel: "Slot = afsluiten, niet openen", tekst: "Slot **sluit af**. Geen nieuwe argumenten — die horen in middenstuk. Slot herhaalt stelling (krachtiger) + eventueel oproep. Nieuw materiaal in slot = zwak betoog (lezer kan niet meer reageren)." }],
          theorie: "Toets-tip: in slot 'Concluderend...' / 'Daarom blijft...' / 'Het moet duidelijk zijn dat...' zijn signaalwoorden.",
          niveaus: { basis: "Nieuwe argumenten.", simpeler: "Slot = geen nieuwe argumenten", nogSimpeler: "Nieuwe" },
        },
      },
    ],
  },

  // ─── C. Argumenten + drogredenen ──────────────────────────
  {
    title: "Argumentatie + drogredenen herkennen",
    explanation:
      "**Argumentatie** = onderbouwing van een stelling met redenen. Voor CSE moet je **goede argumenten** kunnen onderscheiden van **drogredenen** (foute argumenten).\n\n**Argument-soorten (uitgebreid)**:\n\n**1. Inhoudelijke argumenten** (sterk):\n• **Feit/onderzoek**: 'Volgens CBS daalt analfabetisme.'\n• **Voorbeeld**: 'In Zweden werkt 4-daagse week goed.'\n• **Gevolg-argument**: 'Als X, dan Y. Y is goed/slecht, dus X is goed/slecht.'\n• **Vergelijking**: 'NL kan leren van Finland-model.'\n• **Autoriteit**: 'Onderzoekers zeggen...'\n\n**2. Pragmatische argumenten** (middelsterk):\n• **Kosten-baten**: 'Levert X op tegen Y kosten.'\n• **Haalbaarheid**: 'Plan kan binnen 2 jaar.'\n\n**3. Drogredenen** (foute argumenten — Toets-favoriet om te herkennen):\n\n**A. Persoonlijke aanval (ad hominem)**:\n• 'Jij bent dom, dus je argument klopt niet.'\n• Aanval op persoon, niet op argument.\n\n**B. Vals dilemma**:\n• 'Of voor onze partij, of voor de chaos.'\n• Doen alsof er maar 2 keuzes zijn.\n\n**C. Generalisatie**:\n• 'Alle politici liegen.'\n• Te brede uitspraak zonder bewijs.\n\n**D. Cirkelredenering**:\n• 'X is goed omdat het beter is dan slecht.'\n• Conclusie bewijst zichzelf.\n\n**E. Autoriteits-misbruik**:\n• 'Mijn vader zegt het, dus klopt.'\n• Autoriteit zonder relevantie.\n\n**F. Hellend vlak (slippery slope)**:\n• 'Als we X toestaan, eindigen we bij Y, dus geen X.'\n• Onbewezen oorzaak-keten.\n\n**G. Stroman**:\n• Tegenargument verdraaien tot makkelijk te verslaan versie.\n• 'Mijn tegenstander wil ALLE auto's verbieden!' (hij wilde alleen binnenstad-vrij).\n\n**H. Beroep op onwetendheid** *(ad ignorantiam)*:\n• 'Niemand heeft bewezen dat het niet zo is, dus is het zo.'\n• Onbewijsbaar als bewijs gebruikt.\n\n**I. Foute oorzaak (post hoc)**:\n• 'A gebeurde voor B, dus A veroorzaakte B.'\n• Voorbeeld: 'Vaccinatie kwam voor autisme-diagnose, dus vaccinatie veroorzaakt autisme.' (Wakefield-fraude, weerlegd.)\n\n**J. Emotionele manipulatie**:\n• 'Denk aan de kinderen!'\n• Appèl op emotie zonder feitelijke onderbouwing.\n\n**Toets-truc**: herken signaal-zinnetjes:\n• 'Iedereen weet...' → generalisatie\n• 'Wie niet X is, is Y' → vals dilemma\n• 'Mijn opa zei...' → autoriteits-misbruik (tenzij relevant)\n• 'Als we dit toestaan, dan...' → hellend vlak.",
    checks: [
      {
        q: "*'Iedereen vindt onze school de beste.'* — welke drogreden?",
        options: ["Generalisatie","Vals dilemma","Persoonlijke aanval","Cirkelredenering"],
        answer: 0,
        wrongHints: [null, "Bij een vals dilemma krijg je maar twee keuzes. Zie je hier een of-of-keuze?", "Bij een persoonlijke aanval wordt iemand zelf aangevallen. Wordt hier iemand aangevallen?", "Bij een cirkelredenering komt de conclusie terug als argument. Wordt hier eigenlijk wel een reden gegeven?"],
        uitlegPad: {
          stappen: [{ titel: "'Iedereen' = ongelimiteerd", tekst: "**Generalisatie**: uitspraak over **alle leden** van een groep zonder bewijs. 'Iedereen', 'altijd', 'niemand', 'nooit', 'alle' = signaal. Probleem: 1 tegenvoorbeeld weerlegt." }],
          niveaus: { basis: "Generalisatie.", simpeler: "Iedereen-uitspraak = generalisatie", nogSimpeler: "Generalisatie" },
        },
      },
      {
        q: "*'Óf je stemt voor de nieuwe sporthal, óf sport voor kinderen kan je niets schelen.'* — welke drogreden?",
        options: ["Vals dilemma","Generalisatie","Stroman","Hellend vlak"],
        answer: 0,
        wrongHints: [null, "Bij een generalisatie doe je een uitspraak over een hele groep. Hoeveel keuzes worden hier voorgesteld?", "Bij een stroman wordt het standpunt van de ander verdraaid. Wordt hier iemands standpunt verdraaid?", "Bij een hellend vlak leidt één stap tot een keten van gevolgen. Zie je hier zo'n keten, of iets anders?"],
        uitlegPad: {
          stappen: [{ titel: "Of-of zonder middenweg", tekst: "**Vals dilemma**: doen alsof er maar 2 opties zijn (voor of tegen). In realiteit kun je tegen déze sporthal zijn en sport voor kinderen tóch belangrijk vinden. Onterecht binair maken." }],
          theorie: "Toets-favoriet: vals dilemma + 'wie niet voor is, is tegen' / 'óf X óf Y' / 'er is geen andere optie'.",
          niveaus: { basis: "Vals dilemma.", simpeler: "Of-of zonder middenweg = vals dilemma", nogSimpeler: "Vals dilemma" },
        },
      },
      {
        q: "*'Mijn tegenstander wil het leger volledig afschaffen!'* (terwijl hij alleen bezuinigen voorstelde) — drogreden:",
        options: ["Stroman","Hellend vlak","Generalisatie","Cirkelredenering"],
        answer: 0,
        wrongHints: [null, "Bij een hellend vlak voorspel je een keten van gevolgen. Wat gebeurt hier met wat de tegenstander voorstelde?", "Bij een generalisatie doe je een uitspraak over een hele groep. Gaat deze zin over een groep?", "Bij een cirkelredenering bewijst de conclusie zichzelf. Vergelijk wat de tegenstander zei met wat hier staat."],
        uitlegPad: {
          stappen: [{ titel: "Stroman = verdraaid tegenstandpunt", tekst: "**Stroman-drogreden**: argument tegenstander **verdraaien tot extreme versie** die makkelijker te verslaan is. Bezuinigen ≠ afschaffen. Vechten tegen iets dat tegenstander niet zei." }],
          theorie: "Strawman (Engels) — je schiet een stropop neer in plaats van het echte argument.",
          niveaus: { basis: "Stroman.", simpeler: "Tegenstander verdraaien = stroman", nogSimpeler: "Stroman" },
        },
      },
      {
        q: "*'Als we cannabis legaliseren, zullen jongeren heroïne gaan gebruiken.'* — drogreden:",
        options: ["Hellend vlak","Stroman","Vals dilemma","Cirkelredenering"],
        answer: 0,
        wrongHints: [null, "Bij een stroman verdraai je wat de ander zegt. Wordt hier iemands standpunt verdraaid?", "Bij een vals dilemma krijg je maar twee keuzes. Wat doet deze zin in plaats daarvan?", "Bij een cirkelredenering komt de conclusie terug als argument. Is dat hier zo, of gebeurt er iets anders?"],
        uitlegPad: {
          stappen: [{ titel: "Hellend vlak = ongegronde oorzaak-keten", tekst: "**Hellend vlak (slippery slope)**: claim dat A onvermijdelijk leidt tot Z via B, C, D... zonder dat de keten bewezen is. Elke schakel (cannabis → heroïne) zou je met **onderzoek** moeten aantonen — en dat bewijs ontbreekt hier." }],
          theorie: "Toets-truc: 'Als we X toestaan, dan komt Y, dan Z' = hellend vlak. Bewijs voor elke schakel is nodig.",
          niveaus: { basis: "Hellend vlak.", simpeler: "Onbewezen keten = hellend vlak", nogSimpeler: "Hellend vlak" },
        },
      },
      {
        q: "Welk argument is het **sterkst** voor 'sport is goed'?",
        options: ["WHO-onderzoek toont 30% minder hart- en vaatziekten bij actieve mensen","Een enquête onder 25 leden van onze sportclub laat zien dat sporten gezond is","Mijn vader sport al dertig jaar elke dag en is nog nooit ziek geweest","Een bekende voetballer zegt in een interview dat sport goed is voor je hart"],
        answer: 0,
        wrongHints: [null, "25 leden van één sportclub zijn een kleine en eenzijdige groep. Mag je daaruit iets concluderen over iedereen?", "Eén persoonlijk geval bewijst weinig over alle mensen. Welke optie is breder onderbouwd?", "Een voetballer is bekend, maar is hij ook deskundig op het gebied van gezondheid? Welke bron is dat wel?"],
        uitlegPad: {
          stappen: [{ titel: "Feit-argument > rest", tekst: "**WHO-onderzoek + getallen** = feit-argument. Concreet, controleerbaar, bewezen. De andere opties zijn zwak of drogredenen (te kleine groep / één persoonlijk geval / autoriteit zonder deskundigheid)." }],
          theorie: "Toets-patroon: bij meerkeuze-vraag 'sterkste argument' → kies optie met BRON + CIJFERS / onderzoek.",
          niveaus: { basis: "Het WHO-onderzoek.", simpeler: "Onderzoek + cijfers = sterk", nogSimpeler: "Onderzoek" },
        },
      },
    ],
  },

  // ─── D. Stijl + retoriek ──────────────────────────────────
  {
    title: "Stijl + retoriek — taalmiddelen herkennen",
    explanation:
      "Goede schrijvers gebruiken **stijl-** en **retorische middelen** om hun tekst krachtiger te maken. Voor CSE moet je deze herkennen.\n\n**1. Retorische vraag**:\n• Vraag waarvan antwoord duidelijk is — niet om info te krijgen, maar om effect.\n• 'Wie wil er nou niet gezond leven?'\n• Doel: lezer mee laten denken + impliciet doen instemmen.\n\n**2. Contrast/tegenstelling**:\n• Tegenovergestelden naast elkaar.\n• 'Niet vroeger maar nu. Niet morgen maar vandaag.'\n• Versterkt boodschap door tegenstelling te benadrukken.\n\n**3. Herhaling (repetitio, anafoor)**:\n• Zelfde woord/zin meerdere keren.\n• 'Ik heb een droom dat... Ik heb een droom dat... Ik heb een droom dat...' (Martin Luther King).\n• Doel: nadruk, ritme, onthouden.\n\n**4. Drieslag (tricolon)**:\n• Drie elementen op rij.\n• 'Vrijheid, gelijkheid, broederschap.' (Franse Revolutie)\n• 'Veni, vidi, vici.' (Caesar)\n• Klinkt poëtisch + compleet.\n\n**5. Metafoor**:\n• Beeldspraak — vergelijking zonder 'als'.\n• 'Het leven is een rivier.'\n• Doel: complexe ideeën concreet maken.\n\n**6. Vergelijking (simile)**:\n• Vergelijking MET 'als' of 'zoals'.\n• 'Hij vocht als een leeuw.'\n\n**7. Personificatie**:\n• Dingen krijgen menselijke eigenschappen.\n• 'De wind fluisterde.'\n\n**8. Hyperbool (overdrijving)**:\n• Bewust overdrijven.\n• 'Ik heb dit duizend keer gezegd.'\n• Doel: nadruk, soms humor.\n\n**9. Understatement**:\n• Bewust afzwakken.\n• 'Niet onaardig' (= heel aardig).\n• Doel: ironie, bescheidenheid.\n\n**10. Ironie**:\n• Bedoelt tegenovergestelde van wat gezegd wordt.\n• 'Fantastisch weer!' (bij regenstorm).\n• Toets-favoriet: leerlingen moeten **bedoeling** herkennen.\n\n**11. Climax (anti-climax)**:\n• Climax: stijgend in intensiteit (klein → groter → grootst).\n• Anti-climax: opbouw die plotseling daalt (om humor of teleurstelling).\n\n**12. Eufemisme** (verzachting):\n• 'Hij is heengegaan' (gestorven).\n• 'Politionele actie' (oorlog).\n\n**Toon-soorten** (toetsvraag-favoriet):\n• **Zakelijk**: feitelijk, neutraal.\n• **Belerend**: docent-toon, betweterig.\n• **Provocatief**: uitdagend, controversieel.\n• **Sarcastisch / ironisch**: dubbelzinnig.\n• **Empathisch / meelevend**: warm, begripvol.\n• **Cynisch**: bitter, gedesillusioneerd.\n\n**Toets-truc**: bij vraag 'welk stijlmiddel?' — kijk naar **structuur** van zin/passage.",
    checks: [
      {
        q: "*'Wie wil er nou niet gezond leven?'* — welk stijlmiddel?",
        options: ["Retorische vraag","Contrast","Metafoor","Hyperbool"],
        answer: 0,
        wrongHints: [null, "Bij contrast zet je twee tegengestelde dingen naast elkaar. Zie je hier een tegenstelling?", "Een metafoor noemt iets met een beeld. Welk beeld zie je hier?", "Een hyperbool overdrijft. Wordt hier iets overdreven? Kijk ook naar het leesteken aan het eind."],
        uitlegPad: {
          stappen: [{ titel: "Vraag waarvan antwoord duidelijk", tekst: "**Retorische vraag**: vraag NIET om info maar om effect. Antwoord ligt vast ('niemand wil ongezond leven'). Doel: lezer impliciet doen instemmen." }],
          theorie: "Toets-patroon: retorische vragen vaak in opiniestukken + speeches.",
          niveaus: { basis: "Retorische vraag.", simpeler: "Vraag-zonder-antwoord-nodig = retorisch", nogSimpeler: "Retorisch" },
        },
      },
      {
        q: "*'Het leven is een rivier.'* — welk stijlmiddel?",
        options: ["Metafoor","Vergelijking","Hyperbool","Ironie"],
        answer: 0,
        wrongHints: [null, "Niet — bij vergelijking zou 'als' of 'zoals' staan.", "Een hyperbool overdrijft iets. Wordt het leven hier groter gemaakt dan het is?", "Bij ironie bedoel je het tegenovergestelde van wat je zegt. Bedoelt de schrijver hier het omgekeerde?"],
        uitlegPad: {
          stappen: [{ titel: "Metafoor = zonder 'als'", tekst: "**Metafoor**: beeldspraak die A = B claimt (zonder 'als'). 'Leven IS rivier'. Vergelijking gebruikt WEL 'als': 'Het leven is ALS een rivier'." }],
          theorie: "Toets-tip: ezelsbrug 'Metafoor zonder als'. Vergelijking met 'als' of 'zoals'.",
          niveaus: { basis: "Metafoor.", simpeler: "A = B zonder 'als' = metafoor", nogSimpeler: "Metafoor" },
        },
      },
      {
        q: "Wat is een **understatement**?",
        options: ["Bewust afzwakken","Bewust overdrijven","Vraag stellen","Beeldspraak"],
        answer: 0,
        wrongHints: [null, "Bewust overdrijven heet een hyperbool. Wat betekent 'under' in understatement?", "Een vraag waarop je geen antwoord verwacht, heet een retorische vraag. Waar gaat een understatement over?", "Beeldspraak is een metafoor of vergelijking. Wat betekent 'under' in understatement?"],
        uitlegPad: {
          stappen: [{ titel: "Understatement = onderbenadrukking", tekst: "**Understatement** = bewust afzwakken. 'Niet onaardig' = heel aardig. 'Het regent een beetje' (terwijl 't plenst). Engels: 'It's a bit chilly' (bij −20°C). Vaak ironisch effect." }],
          theorie: "Britse humor-favoriet. Tegenovergesteld van hyperbool.",
          niveaus: { basis: "Afzwakken.", simpeler: "Understatement = verzachten", nogSimpeler: "Afzwakken" },
        },
      },
      {
        q: "Tijdens een regenstorm zegt iemand: *'Wat een geweldig weer!'* Welk stijlmiddel?",
        options: ["Ironie","Hyperbool","Metafoor","Vergelijking"],
        answer: 0,
        wrongHints: [null, "Een hyperbool overdrijft. Past 'geweldig' bij een regenstorm, of bedoelt de spreker iets anders?", "Een metafoor gebruikt een beeld. Welk beeld zie je in 'geweldig weer'?", "Een vergelijking gebruikt 'als' of 'zoals'. Staat dat woord hier?"],
        uitlegPad: {
          stappen: [{ titel: "Ironie = tegenovergestelde bedoeling", tekst: "**Ironie**: spreker zegt A, bedoelt **tegenovergestelde**. 'Geweldig weer' bij regenstorm betekent juist 'verschrikkelijk weer'. Lezer/luisteraar herkent contradictie." }],
          theorie: "Toets-favoriet: ironie herkennen in tekst — kijk naar context. Past gezegde bij situatie? Zo nee → mogelijk ironisch.",
          niveaus: { basis: "Ironie.", simpeler: "Tegenovergestelde bedoelen = ironie", nogSimpeler: "Ironie" },
        },
      },
      {
        q: "*'Vrijheid, gelijkheid, broederschap.'* — welk stijlmiddel?",
        options: ["Drieslag","Anafoor","Climax","Antithese"],
        answer: 0,
        wrongHints: [null, "Bijna — anafoor is herhaling, hier 3 verschillende woorden.", "Bijna — climax stijgt in intensiteit.", "Niet — antithese is tegenstelling."],
        uitlegPad: {
          stappen: [{ titel: "3 elementen = tricolon", tekst: "**Drieslag (tricolon)**: 3 elementen op rij — klinkt compleet + memorabel. Klassiek: 'Veni, vidi, vici' (Caesar), 'Vrijheid, gelijkheid, broederschap' (Franse Revolutie), 'Voor God, voor koning, voor vaderland'." }],
          theorie: "Onze hersenen onthouden patroon van 3 het best (drie-regel in retoriek + reclame).",
          niveaus: { basis: "Drieslag.", simpeler: "3 elementen = tricolon", nogSimpeler: "Drieslag" },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — betoog + analyse",
    explanation:
      "Mix van tekstsoorten + opbouw + drogredenen + stijl. CSE-stijl.\n\nVeel succes!",
    checks: [
      {
        q: "*'Alle moderne muziek is vreselijk, want dat zegt mijn opa.'* — drogreden:",
        options: ["Autoriteits-misbruik + generalisatie","Vals dilemma + persoonlijke aanval","Hellend vlak + cirkelredenering","Geldig autoriteitsargument"],
        answer: 0,
        wrongHints: [null, "Er wordt geen of-of-keuze gegeven en niemand wordt persoonlijk aangevallen. Wie wordt hier als bron opgevoerd?", "Er volgt geen kettingreactie en de conclusie herhaalt zichzelf niet. Kijk naar het woord 'alle' en naar de bron.", "Is een opa deskundig op het gebied van moderne muziek? Wanneer is een beroep op iemand terecht?"],
        uitlegPad: {
          stappen: [{ titel: "Dubbel: opa + alle", tekst: "**Twee drogredenen**: (1) opa is geen muziek-expert → autoriteits-misbruik. (2) 'Alle moderne muziek' → generalisatie. Combinatie maakt argument extra zwak." }],
          niveaus: { basis: "Autoriteit + generalisatie.", simpeler: "Opa + alle = twee drogredenen", nogSimpeler: "Drogreden" },
        },
      },
      {
        q: "Welke tekstsoort: *artikel waarin schrijver verschillende kanten van AI-gebruik in scholen belicht zonder eindstandpunt*?",
        options: ["Beschouwing","Betoog","Uiteenzetting","Verhaal"],
        answer: 0,
        wrongHints: [null, "In een betoog kiest de schrijver één standpunt. Doet deze schrijver dat?", "Een uiteenzetting legt uit hoe iets zit. Wat doet deze schrijver met de verschillende kanten?", "Een verhaal is fictie. Is dit artikel verzonnen?"],
        uitlegPad: {
          stappen: [{ titel: "Verschillende kanten = beschouwing", tekst: "**Beschouwing** = belicht meerdere perspectieven zonder definitieve conclusie. Schrijver weegt af, soms met lichte voorkeur, vaak open einde." }],
          niveaus: { basis: "Beschouwing.", simpeler: "Verschillende kanten = beschouwing", nogSimpeler: "Beschouwing" },
        },
      },
      {
        q: "Wat is een **anafoor**?",
        options: ["Herhaling aan begin van zinnen","Vraag waarop geen antwoord komt","Tegenstelling tussen twee zinnen","Beeldspraak zonder het woord 'als'"],
        answer: 0,
        wrongHints: [null, "Een vraag waarop geen antwoord komt, heet een retorische vraag. Bij een anafoor wordt iets herhaald — wat en waar?", "Een tegenstelling tussen twee zinnen heet een antithese. Wat gebeurt er bij een anafoor?", "Beeldspraak zonder 'als' is een metafoor. Wat gebeurt er bij een anafoor?"],
        uitlegPad: {
          stappen: [{ titel: "Anafoor = begin-herhaling", tekst: "**Anafoor** = herhalen van **woord(en) aan begin** van opeenvolgende zinnen. 'Ik heb een droom dat... Ik heb een droom dat...' (Martin Luther King). Versterkt boodschap door ritme + nadruk." }],
          niveaus: { basis: "Begin-herhaling.", simpeler: "Anafoor = herhaling begin", nogSimpeler: "Begin" },
        },
      },
      {
        q: "In een **betoog** hoort het tegenargument:",
        options: ["Genoemd + weerlegd","Genoemd + bevestigd","Vooraan in tekst","Pas in slot"],
        answer: 0,
        wrongHints: [null, "Als je het tegenargument gelijk geeft, verzwak je je eigen standpunt. Wat doe je er dan wel mee?", "Vooraan in de tekst staan de aanleiding en de stelling. Waar komt het tegenargument meestal?", "In het slot trek je je conclusie. Kan de lezer daar nog op een nieuw argument reageren?"],
        uitlegPad: {
          stappen: [{ titel: "Tegenargument behandelen", tekst: "Goed betoog **erkent** tegenargumenten en weerlegt ze. Plaats: in midden, ergens tussen hoofd-argumenten. Toont kennis van veld + versterkt eigen positie." }],
          niveaus: { basis: "Genoemd + weerlegd.", simpeler: "Tegenargument = noemen + weerleggen", nogSimpeler: "Weerleggen" },
        },
      },
      {
        q: "*'Hij is een leeuw op het strijdveld.'* (over voetballer) — welk stijlmiddel?",
        options: ["Metafoor","Vergelijking","Hyperbool","Ironie"],
        answer: 0,
        wrongHints: [null, "Een vergelijking gebruikt 'als' of 'zoals', bijvoorbeeld 'hij vecht als een leeuw'. Staat dat hier?", "Een hyperbool overdrijft iets, zoals 'ik heb het duizend keer gezegd'. Gebeurt dat hier?", "Bij ironie bedoel je het tegenovergestelde. Bedoelt de schrijver dat de voetballer slap speelt?"],
        uitlegPad: {
          stappen: [{ titel: "Metafoor: 'is' = direct", tekst: "Hij IS een leeuw → metafoor (direct gelijkstellen). Hij is ALS een leeuw → vergelijking (met 'als'). Verschil: woord 'als' bepaalt." }],
          niveaus: { basis: "Metafoor.", simpeler: "IS leeuw = metafoor", nogSimpeler: "Metafoor" },
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
    { id: "schrijven-teksten-po", title: "Schrijven van teksten (basis)", niveau: "po-1F" },
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
