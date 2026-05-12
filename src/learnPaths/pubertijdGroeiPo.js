// Leerpad: Pubertijd + groei - groep 7-8 wereldoriëntatie/gezondheid.
// Cito-relevant lichaam. 1F. 4 stappen.

const stepEmojis = ["🌱", "🧬", "🧠", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is puberteit?", emoji: "🌱", from: 0, to: 0 },
  { letter: "B", title: "Lichamelijke veranderingen", emoji: "🧬", from: 1, to: 1 },
  { letter: "C", title: "Emoties + brein", emoji: "🧠", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Wat is puberteit?",
    explanation:
      "**Puberteit** = periode waarin je **van kind naar volwassene** verandert.\nLichaam + brein + emoties veranderen.\n\n**Wanneer?**\n• **Meisjes**: meestal **8-13 jaar** *(gemiddeld 11)*.\n• **Jongens**: meestal **9-14 jaar** *(gemiddeld 12)*.\n• Duurt **~4-5 jaar**.\n• Eindigt rond **17-19 jaar** *(je bent dan biologisch volwassen)*.\n\n**Vroeger of later? Allebei normaal**:\n• Sommige beginnen op 8, andere pas op 14.\n• **Niet vergelijken** met klasgenoten.\n• Genetisch bepaald *(zoals lengte)*.\n• Voeding + gezondheid spelen rol.\n• **Tegenwoordig vroeger** dan vroeger *(in 1900 begon puberteit gemiddeld op 14, nu op 11)* — onbekend precies waarom.\n\n**Hoe begint het?**\n\n**Hormonen** 🧪:\n• Speciale stoffen die je lichaam maakt.\n• Geven signalen.\n• Belangrijkste in puberteit:\n  - **Testosteron** *(vooral jongens)*.\n  - **Oestrogeen** *(vooral meisjes)*.\n  - **Beide hebben we allebei** — alleen verschillende hoeveelheden.\n• Hormonen worden in **klieren** gemaakt *(testikels, eierstokken)* + reageren op signalen uit hersenen *(hypofyse)*.\n\n**Eerste tekenen**:\n\n**Meisjes**:\n• **Borsten** beginnen te groeien *(eerst kleine knobbeltjes)*.\n• Haar onder oksels + onderbuik.\n• Heupen worden breder.\n• Eerste **menstruatie (menarche)** ~ na 2-3 jaar puberteit.\n• Groei in lengte gaat snel.\n\n**Jongens**:\n• **Testikels** worden groter.\n• Haar bij geslachtsdelen + later oksels + gezicht.\n• **Stem wordt lager** *(de baard in de keel)*.\n• Lengte groei spurt.\n• Eerste **zaadlozing** *(soms in slaap — natte droom)*.\n• Spieren groeien.\n\n**Allebei**:\n• **Acne** *(puistjes)* — door olieklieren actief.\n• Meer **zweten** + meer geur.\n• Behoefte aan deodorant + douchen.\n• Lengte-groei *(soms 10+ cm per jaar in piek)*.\n• Schaamhaar.\n\n**Belangrijk**:\n• **Iedereen heeft eigen tempo** — niet vergelijken.\n• **Lichaam verandert** = NORMAAL + GEZOND.\n• Praat met ouders / vertrouwde volwassene als je vragen hebt.\n• Schaam je niet — iedereen gaat dit door.\n\n**Cito-feitje**:\nIn de puberteit kun je **per jaar 10-12 cm groeien** *(jongens gemiddeld iets meer)*. Dat is bijna één centimeter per maand op piek-moment. Daarom voel je je vaak slungelig *(armen + benen groeien sneller dan romp)*.",
    checks: [
      {
        q: "Wanneer begint **puberteit** bij meisjes (gemiddeld)?",
        options: ["~11 jaar", "5 jaar", "16 jaar", "Niet bij meisjes"],
        answer: 0,
        wrongHints: [null, "Klopt — variatie 8-13.", "Te jong.", "Te oud.", "Wel."],
      },
      {
        q: "Wat zijn **hormonen**?",
        options: ["Stoffen die signalen geven in lichaam", "Vitaminen", "Bot", "Spier"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Anders.", "Niet.", "Niet."],
      },
      {
        q: "Wat is **testosteron**?",
        options: ["Hormoon vooral bij jongens", "Voedsel", "Ziekte", "Bot"],
        answer: 0,
        wrongHints: [null, "Klopt — meisjes ook iets.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Hoeveel kun je **per jaar groeien** in piek?",
        options: ["10-12 cm", "1 mm", "1 meter", "Niet"],
        answer: 0,
        wrongHints: [null, "Klopt — soms 1 cm/maand.", "Te weinig.", "Onmogelijk.", "Wel."],
      },
    ],
  },
  {
    title: "Lichamelijke veranderingen",
    explanation:
      "Tijdens puberteit verandert het hele lichaam.\n\n**Bij meisjes** 👧:\n\n**Borsten**:\n• Beginnen met knobbeltje achter tepel.\n• Groeien jaar na jaar.\n• Eindgrootte wisselt per persoon *(genetisch + gewicht)*.\n• Ene borst kan eerder groeien dan andere — normaal.\n\n**Menstruatie** *(ongesteld worden)*:\n• ~Maand-cyclus *(ongeveer elke 28 dagen)*.\n• Bloeding 3-7 dagen.\n• Komt uit baarmoeder *(omdat geen bevruchting was)*.\n• Eerste keer: vaak rond **12 jaar** *(maar variatie 9-16 normaal)*.\n• Gebruik: maandverband, tampons, **menstruatiecups**, **periode-broekjes** *(modern)*.\n• Kan **pijnlijk** zijn *(buikkramp)* — paracetamol helpt.\n• Cyclus eerst onregelmatig — wordt vast na ~jaar.\n\n**Eierstokken + eieren**:\n• Meisjes worden geboren met ~1 miljoen eitjes.\n• In puberteit komt 1 eitje per maand vrij *(ovulatie)*.\n• Zonder bevruchting: weg via menstruatie.\n\n**Heupen + vorm**:\n• Heupen worden breder.\n• Vetverdeling verandert.\n• Lichaam wordt 'meer vrouwelijke' vorm.\n\n**Bij jongens** 👦:\n\n**Testikels + penis**:\n• Testikels worden groter.\n• Penis groeit langer + dikker.\n• Pubishaar ontstaat.\n\n**Stem**:\n• **Stembanden groeien**.\n• Stem wordt **lager + dieper**.\n• Soms 'krakerig' tijdens overgang *('de baard in de keel')*.\n• Adamsappel komt naar voren.\n\n**Spieren + lengte**:\n• Schouders worden breder.\n• Spieren groeien — vooral met sport.\n• Jongens groeien 1-2 jaar langer dan meisjes door.\n\n**Zaadlozing**:\n• **Sperma** in testikels.\n• Komt vrij bij **erectie + orgasme**.\n• Vaak eerste keer in slaap *(natte droom)*.\n• Normaal + gezond.\n\n**Allebei**:\n\n**Acne / puistjes** 🤕:\n• Hormonen activeren olieklieren in huid.\n• Olie + huidcellen verstoppen poriën.\n• → Puistjes, mee-eters.\n• Normaal — 80% van tieners heeft het.\n• Voorkomen: gezicht wassen *(2x per dag)*, niet **uitknijpen** *(geeft littekens)*.\n• Bij erg: huisarts heeft creme.\n\n**Zweten + geur** 👃:\n• Klieren onder oksels actief.\n• Lichaamsgeur ontstaat.\n• Gebruik **deodorant** + dagelijks **douchen** *(of om de dag)*.\n• Schone kleren!\n\n**Haar groeien**:\n• Onder oksels.\n• Bij geslachtsdelen *(pubishaar)*.\n• Jongens: gezicht *(baard, snor)*, borst.\n• Meer haar op benen + armen.\n• Sommige meisjes **scheren** benen *(persoonlijke keuze)*.\n• Iedereen heeft recht op eigen keuze.\n\n**Gewicht**:\n• Vetverdeling kan veranderen.\n• Soms 'puberbuik' = normaal *(verdwijnt later)*.\n• Niet snel met afvalplannen — lichaam heeft groei nodig.\n• Bij echt overgewicht: praat met huisarts.\n\n**Lichaam wisselt — wat blijft hetzelfde?**\n• Je **karakter** + **interesses** *(misschien aangevuld)*.\n• Je **vrienden**.\n• Je **identiteit**.\n\n**Cito-feitje**:\nIn 1 jaar puberteit kan je voet **2 maten groeien**. Daarom passen schoenen vaak niet meer — frustrerend maar normaal. Ook reden om geen dure schoenen voor langer dan 6 maanden te kopen.",
    checks: [
      {
        q: "Wat is **menstruatie**?",
        options: ["Maandelijkse bloeding uit baarmoeder", "Pijn", "Hormoon", "Geen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel kan pijn.", "Hormoon stuurt.", "Wel."],
      },
      {
        q: "Hoe vaak **menstruatie** cyclus?",
        options: ["~Elke 28 dagen", "Elke week", "Elke 6 maanden", "Geen vaste tijd"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te vaak.", "Te zelden.", "Wel cyclisch."],
      },
      {
        q: "Wat **veroorzaakt puistjes**?",
        options: ["Hormonen activeren olieklieren", "Vies eten", "Geen wassen", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geen verband bewezen.", "Helpt maar oorzaak hormoon.", "Wel."],
      },
      {
        q: "Waarom **stem lager** bij jongens?",
        options: ["Stembanden groeien", "Niet wetenschappelijk", "Buurt", "Geen reden"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel.", "Niet.", "Wel."],
      },
    ],
  },
  {
    title: "Emoties + brein + sociale veranderingen",
    explanation:
      "**Brein verandert ook**! Niet alleen lichaam.\n\n**Tienerbrein**:\n• Hersenen ontwikkelen tot **~25 jaar**.\n• In puberteit: vooral **emotie-deel** actief.\n• **Rationeel-deel** *(prefrontale cortex)* groeit later.\n• Daarom: emoties + impulsen vaak sterker dan controle.\n\n**Gevolg**:\n• **Risico's nemen** *(harder fietsen, gevaarlijke dingen proberen)*.\n• **Sterke emoties** *(diep blij, diep verdrietig — 'altijd alles')*.\n• **Stemmingswisselingen** *(blij → kwaad → verdrietig in uur)*.\n• Moeite met **lange termijn denken**.\n\n**Allemaal normaal**. Gaat over met tijd.\n\n**Emoties in puberteit**:\n\n**1. Verliefdheid** 💖:\n• Eerste verliefdheden gebeuren.\n• Op klasgenoot, leraar, sterren.\n• Hartkloppingen + zenuwen + denken aan persoon.\n• Genderspecifiek: jongen op meisje, meisje op jongen, OF jongen op jongen, OF meisje op meisje, OF beide. Allemaal normaal.\n• **LHBTQ+** = mensen die niet 'standaard hetero' zijn. Bestaat al altijd. Toleratie in NL groeit.\n\n**2. Onzekerheid** 😟:\n• 'Vind ik mezelf leuk?'\n• 'Vinden anderen mij leuk?'\n• 'Pas ik ergens bij?'\n• Vergelijken met klasgenoten.\n• Sociale media maakt het erger *(Instagram = mensen tonen alleen mooiste)*.\n\n**3. Boos op ouders** 😤:\n• Conflict over: kamer, bedtijd, kleding, telefoon, vrienden.\n• Ouders zien jou nog als kind, jij voelt zelfstandig.\n• Normale fase — **gaat over**.\n• Tip: praten in rustige momenten, niet midden in ruzie.\n\n**4. Onafhankelijkheid** 🚀:\n• Wilt eigen mening + keuzes.\n• Wilt alleen zijn, in eigen kamer.\n• Wilt eigen geld + kleding kiezen.\n• Vrienden worden belangrijker dan familie.\n\n**5. Identiteit zoeken** 🌈:\n• Wie ben ik?\n• Wat vind ik leuk?\n• Welke muziek? Welke vrienden? Welk uiterlijk?\n• **Experimenteren** = normaal *(kleding, haar, hobby's wisselen)*.\n\n**Stress + mentale gezondheid**:\n\n**Veel druk in puberteit**:\n• School + Cito + brugklas.\n• Vrienden.\n• Sociale media + 'perfectie'.\n• Onzekerheid lichaam.\n\n**1 op 5 jongeren** heeft last van **angst** of **depressie**.\nMEER dan ooit eerder gemeten.\n\n**Signalen**:\n• Veel huilen / verdrietig.\n• Slecht slapen of veel slapen.\n• Niet uit bed kunnen.\n• Geen interesse meer in dingen.\n• Eetproblemen.\n• Zelfdoding-gedachten.\n\n**Wat helpt**:\n• **Praten** met ouder, vriend, mentor.\n• Goede **slaap** *(9-10 uur in puberteit)*.\n• **Bewegen** *(verlaagt stress)*.\n• Minder **sociale media**.\n• **Hobby's** + leuke dingen doen.\n\n**Hulp**:\n• **Kindertelefoon**: 0800-0432 *(gratis, anoniem)*.\n• **Huisarts** → kan doorverwijzen naar psycholoog.\n• **JeugdGGZ** *(jeugd-geestelijke gezondheidszorg)*.\n• **MIND Korrelatie**: jongeren-hulplijn voor angst/depressie.\n\n**Sociale veranderingen**:\n\n**Vrienden**:\n• Vriendschappen worden hechter.\n• Maar ook **breken** soms — normaal.\n• Echte vrienden: steun, plezier, geheim houden, eerlijk.\n\n**Pesten**:\n• Veel meer in tienerjaren.\n• **Online + offline**.\n• Praat met volwassene als slachtoffer.\n• **Pesten = nooit OK**.\n\n**Eerste relaties + verkering** ❤️:\n• Sommigen vroeg, anderen later — beide OK.\n• Goede partner = respect + steun + plezier.\n• Slechte signalen: jaloezie, dwang, controle.\n• Praten over **grenzen** + **toestemming** belangrijk.\n\n**Cito-feitje**:\nWetenschappers ontdekten dat tienerbrein **dopamine** *(beloning-stof)* sterker afgeeft dan kinder- of volwassen-brein. Daarom **vinden tieners spannende dingen leuker** + nemen meer risico. Niet 'fout' — biologisch normaal — maar maak verstandige keuzes.",
    checks: [
      {
        q: "Tot welke leeftijd **ontwikkelt brein**?",
        options: ["~25 jaar", "12 jaar", "60 jaar", "Niet"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te vroeg.", "Te laat.", "Wel."],
      },
      {
        q: "Waarom **stemmingswisselingen**?",
        options: ["Brein-emotie ontwikkelt eerst, rationeel later", "Voedsel", "Niets", "Wisselend"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet primair.", "Wel.", "Niet specifiek."],
      },
      {
        q: "Welk **nummer Kindertelefoon**?",
        options: ["0800-0432", "112", "0900", "06"],
        answer: 0,
        wrongHints: [null, "Klopt — gratis + anoniem.", "Spoednummer.", "Niet.", "Niet."],
      },
      {
        q: "Wat is **LHBTQ+**?",
        options: ["Mensen niet 'standaard hetero'", "Ziekte", "Sport", "Tehuis"],
        answer: 0,
        wrongHints: [null, "Klopt — inclusieve term.", "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — puberteit mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Puberteit** begint bij meisjes gem.?", options: ["~11 jaar", "5", "18", "Niet bij meisjes"], answer: 0, wrongHints: [null, "Klopt.", "Te vroeg.", "Te laat.", "Wel."] },
      { q: "Wat is een **hormoon**?", options: ["Stof die signaal geeft in lichaam", "Spier", "Voedsel", "Bot"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."] },
      { q: "Hoeveel **slaap** in puberteit?", options: ["9-10 uur", "4 uur", "12+ uur", "Geen"], answer: 0, wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Wel."] },
      { q: "Hoe vaak **menstruatie**?", options: ["~Elke 28 dagen", "Elke dag", "1 keer per jaar", "Niet"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Te zelden.", "Wel."] },
      { q: "Welk nummer **Kindertelefoon**?", options: ["0800-0432", "112", "0900", "06"], answer: 0, wrongHints: [null, "Klopt.", "Spoed.", "Niet.", "Niet."] },
      { q: "Tot welke leeftijd **brein ontwikkelt**?", options: ["~25 jr", "12 jr", "8 jr", "60 jr"], answer: 0, wrongHints: [null, "Klopt.", "Te jong.", "Te jong.", "Te oud."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pubertijdGroeiPo = {
  id: "pubertijd-groei-po",
  title: "Puberteit + groei (groep 7-8)",
  emoji: "🌱",
  level: "groep7-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / gezondheid + burgerschap",
  prerequisites: [
    { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid", niveau: "1F" },
  ],
  intro:
    "Puberteit voor groep 7-8 — wat is puberteit (8-14 jaar start, hormonen) + lichamelijke veranderingen (menstruatie/zaadlozing/borsten/stem) + acne/zweten + tienerbrein (rationeel-deel ontwikkelt tot 25) + emoties (verliefdheid/stress/identiteit/LHBTQ+) + Kindertelefoon. Sluit op lichaam-gezondheid. ~15 min.",
  triggerKeywords: [
    "puberteit", "puber", "groei",
    "hormonen", "testosteron", "oestrogeen",
    "menstruatie", "ongesteld",
    "zaadlozing", "stem laag",
    "acne", "puistjes",
    "verliefdheid", "LHBTQ",
    "tienerbrein",
    "Kindertelefoon",
  ],
  chapters,
  steps,
};

export default pubertijdGroeiPo;
