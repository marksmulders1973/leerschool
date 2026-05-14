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
        uitlegPad: {
          stappen: [
            { titel: "Wat is puberteit?", tekst: "**Puberteit** is de fase waarin je lichaam van KIND naar VOLWASSENE verandert. Hormonen sturen lichamelijke groei + ontwikkeling van geslachtsorganen." },
            { titel: "Wanneer begint het?", tekst: "Bij **meisjes** gemiddeld rond **11 jaar** (variatie 8-13). Bij **jongens** wat later: ~12-13 jaar (variatie 9-15). Iedereen heeft eigen tempo — geen reden voor stress." },
            { titel: "Lange fase", tekst: "Puberteit duurt 3-5 jaar. Eindigt rond 16-18 jaar wanneer lichaam volwassen is. Niet iedereen begint of eindigt op zelfde leeftijd!" },
          ],
          woorden: [
            { woord: "puberteit", uitleg: "Periode waarin kind volwassen wordt." },
            { woord: "hormoon", uitleg: "Stof die signalen door lichaam stuurt (groei, ontwikkeling)." },
          ],
          theorie: "Cito-feit: puberteit komt tegenwoordig **eerder** dan vroeger (1900: rond 14-15, nu: 11). Oorzaak: betere voeding + meer lichaamsgewicht. Genetisch + omgeving samen.",
          voorbeelden: [
            { type: "stap", tekst: "Meisje van 9 met eerste lichamelijke veranderingen = NORMAAL (vroege start)." },
            { type: "stap", tekst: "Jongen van 14 nog geen veranderingen = NORMAAL (latere start)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Meisjes ~11, jongens ~12-13. Geen vast moment — iedereen eigen tempo." }],
          niveaus: {
            basis: "Puberteit begint bij meisjes gemiddeld rond 11 jaar.",
            simpeler: "Meisjes 8-13 jaar, jongens 9-15 jaar.",
            nogSimpeler: "Meisjes ~11, jongens iets later.",
          },
        },
      },
      {
        q: "Wat zijn **hormonen**?",
        options: ["Stoffen die signalen geven in lichaam", "Vitaminen", "Bot", "Spier"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Anders.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat zijn hormonen?", tekst: "**Hormonen** zijn chemische stoffen die jouw lichaam zelf maakt. Ze werken als **signaal-stoffen**: ze sturen instructies van het ene orgaan naar het andere via het bloed." },
            { titel: "Wat doen ze?", tekst: "Hormonen regelen heel veel: GROEI, honger, slaap, stemming, puberteit, voortplanting. Tijdens puberteit komen GROEI- en GESLACHTSHORMONEN extra hard aan het werk." },
            { titel: "Bekende hormonen", tekst: "**Testosteron** (vooral jongens — gespierd, lage stem). **Oestrogeen** (vooral meisjes — borstontwikkeling, menstruatie). **Groeihormoon** (langer worden). **Adrenaline** (stress/spanning)." },
          ],
          woorden: [
            { woord: "hormoon", uitleg: "Chemische signaal-stof in lichaam." },
            { woord: "klier", uitleg: "Orgaan dat hormonen maakt (schildklier, bijnier, geslachtsklieren)." },
          ],
          theorie: "Cito-tip: hormonen ≠ vitamines. Vitamines = stoffen die je via voeding binnen krijgt. Hormonen = stoffen die je lichaam zelf maakt om signalen te geven.",
          voorbeelden: [
            { type: "stap", tekst: "Stresssituatie → adrenaline-hormoon → hart klopt sneller, je bent alert." },
            { type: "stap", tekst: "Avond → melatonine-hormoon → slaperig gevoel." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Hormoon = HORMOnaal = inwendig signaal. Maakt het lichaam zelf." }],
          niveaus: {
            basis: "Hormonen = signaal-stoffen in het lichaam.",
            simpeler: "Ze zeggen organen wat ze moeten doen.",
            nogSimpeler: "Lichaams-signalen.",
          },
        },
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
        uitlegPad: {
          stappen: [
            { titel: "Wat is een puistje?", tekst: "Een puistje (acne) ontstaat in je huid. Je huid heeft **olieklieren** die normaal een laagje olie maken. Soms raakt zo'n klier **verstopt** met olie + dode huidcellen + bacteriën = puistje." },
            { titel: "Hormonen schuldig", tekst: "Tijdens puberteit gaan de **HORMONEN** (vooral testosteron, ook bij meisjes) je olieklieren **VEEL HARDER** laten werken. Meer olie → meer kans op verstopping → meer puistjes." },
            { titel: "Niet door slechte hygiëne", tekst: "Mythe: 'puistjes komen door vies zijn'. Dat klopt NIET. Vies zijn helpt niet, maar **HOOFDOORZAAK = hormonen**. Veel + te hard wassen kan zelfs averechts werken (huid maakt nog meer olie als reactie)." },
          ],
          woorden: [
            { woord: "acne", uitleg: "Medische naam voor puistjes." },
            { woord: "olieklier", uitleg: "Klein klierje in huid dat olie maakt (talg)." },
          ],
          theorie: "Cito-feit: 85% van pubers heeft puistjes. Heel normaal, gaat meestal vanzelf weg rond ~20 jaar. Bij erge acne: huisarts → soms medicijn (Roaccutane bv).",
          voorbeelden: [
            { type: "stap", tekst: "Voorhoofd + neus + kin = T-zone = veel olieklieren = meeste puistjes." },
            { type: "stap", tekst: "Chocolade veroorzaakt geen puistjes (mythe). Wel: stress + slecht slapen kan iets verergeren." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Hormonen = hoofdoorzaak. Hygiëne helpt iets, maar is niet de echte reden." }],
          niveaus: {
            basis: "Puistjes komen door hormonen die olieklieren activeren.",
            simpeler: "Hormoon zegt 'maak veel olie' → klieren verstopt → puistje.",
            nogSimpeler: "Hormonen!",
          },
        },
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
      {
        q: "Wat is een **groeispurt**?",
        options: ["Periode waarin je snel langer wordt (soms 10+ cm/jaar)", "Pijn in benen", "Trainen om te groeien", "Eten voor groei"],
        answer: 0,
        wrongHints: [null, "Klopt — typisch in 2 fases: rond 1 jr + in puberteit.", "Groeipijnen bestaan WEL maar dat is iets anders.", "Niet — groei is genetisch + hormonaal.", "Eten helpt maar IS niet de groeispurt zelf."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een groeispurt?", tekst: "Een **groeispurt** is een **periode waarin je lichaam plotseling veel sneller groeit** dan normaal. In **één jaar** kun je 8-12 cm langer worden — bijna een centimeter per maand.\n\nMensen hebben **twee grote groeispurten** in hun leven:\n1. **Babyjaar** (0-1 jr): groei van ~50 cm naar 75 cm (50% in lengte!)\n2. **Puberteit**: meisjes ~11-13, jongens ~13-15" },
            { titel: "Hoe voel je een groeispurt?", tekst: "• **Schoenen passen niet meer** — voeten groeien soms eerst\n• **Broeken te kort** — je benen groeien snel\n• **Honger** als nooit tevoren — lichaam heeft brandstof nodig\n• **Vermoeidheid** — groeien kost energie\n• Soms **groeipijnen** in benen 's nachts (onschadelijk)\n• **Slungelig gevoel** — armen/benen langer voor je brein eraan went" },
            { titel: "Cito-feit: lengte-eindstand", tekst: "Je **uiteindelijke lengte** wordt voor **80% door genen** bepaald (van je ouders). Voeding + slaap helpen om je 'genetisch potentieel' te bereiken.\n\n**Vuistregel**: tel lengte vader + moeder, deel door 2.\n• Voor jongens: + ~7 cm\n• Voor meisjes: − ~7 cm\nDit geeft een schatting (kan 5-10 cm afwijken)." },
          ],
          woorden: [
            { woord: "groeispurt", uitleg: "Periode van snelle groei. Bij baby (0-1 jr) en in puberteit." },
            { woord: "groeipijnen", uitleg: "Lichte pijn in benen tijdens groei — meestal 's nachts, onschadelijk." },
            { woord: "genetisch potentieel", uitleg: "Maximale lengte die je genen toestaan. Voeding/slaap bepalen of je het haalt." },
          ],
          theorie: "Tips voor goede groei tijdens puberteit:\n• **Voldoende eten** (vooral eiwit + groenten)\n• **9-10 uur slaap** (groeihormoon werkt vooral in slaap)\n• **Bewegen** (botten + spieren ontwikkelen)\n• **Genoeg calcium** (melk, kaas, broccoli — botten sterk maken)\n• **Vitamine D** (zonlicht — helpt calcium-opname)\n\nNiet doen: roken (remt groei), te streng diëten (lichaam mist bouwstoffen), te weinig slaap.",
          voorbeelden: [
            { type: "feit", tekst: "Wereldwijd worden mensen gemiddeld langer over de eeuwen — Nederlanders waren in 1850 gemiddeld 165 cm, nu 181 cm voor mannen." },
            { type: "feit", tekst: "Voeten groeien vaak vóór benen — daarom kun je in 1 jaar 2-3 schoenmaten verschillen." },
          ],
          basiskennis: [{ onderwerp: "Niet bezorgd", uitleg: "Alle kinderen groeien in eigen tempo. Klasgenoten ver voor of achter lopen = normaal." }],
          niveaus: { basis: "Snelle groeiperiode. = A.", simpeler: "Groeispurt = periode (bv. in puberteit) waarin je heel snel langer wordt — soms 10+ cm/jaar. Door hormonen. = A.", nogSimpeler: "Snelle groei = A." },
        },
      },
      {
        q: "Wat helpt **botten sterk** maken tijdens groei?",
        options: ["Calcium (melk/kaas/broccoli) + vitamine D + bewegen", "Veel zoetigheid", "Lang stilzitten", "Niet eten"],
        answer: 0,
        wrongHints: [null, "Klopt — combinatie van calcium-rijk eten, vitamine D én bewegen.", "Tegenovergesteld — suiker kan calcium uit botten halen.", "Niet — bewegen is juist nodig voor sterke botten.", "Tegenovergesteld — voeding is essentieel."],
        uitlegPad: {
          stappen: [
            { titel: "Botten in puberteit", tekst: "In puberteit groeien je botten enorm — in lengte ÉN sterkte. Dit is het **belangrijkste moment in je leven** om sterke botten op te bouwen. Wat je nu in je botten 'opslaat' bepaalt risico op botbreuken/osteoporose op latere leeftijd." },
            { titel: "De 3 bouwstenen", tekst: "Voor sterke botten heb je nodig:\n1. **Calcium** — de hoofdbouwstof van botten. Zit in: melk, yoghurt, kaas, broccoli, amandelen, sardientjes.\n2. **Vitamine D** — helpt lichaam calcium opnemen. Maakt huid zelf in zonlicht (15-30 min/dag). Ook in vis, eieren.\n3. **Bewegen** — vooral '**impact-bewegingen**' zoals rennen, springen, basketbal. Dit stimuleert botgroei." },
            { titel: "Cito-feit: 90% van botten gevormd vóór 18", tekst: "Je piek-botmassa wordt bereikt rond **18-25 jaar**. Daarna kun je nog wel onderhouden maar nieuwe bot-mass opbouwen wordt steeds moeilijker. **NU goed eten + bewegen = sterke botten levenslang**.\n\nNL-aanbeveling voor kinderen 9-13 jr: **1100 mg calcium per dag** = ~3 zuivelporties (melk, yoghurt, kaas)." },
          ],
          woorden: [
            { woord: "calcium", uitleg: "Mineraal. Hoofdbouwstof botten + tanden. 99% van calcium in lichaam zit in botten." },
            { woord: "vitamine D", uitleg: "Vitamine die helpt bij calcium-opname. Komt deels van zonlicht." },
            { woord: "osteoporose", uitleg: "Botverlies-ziekte (vooral ouderen). Wordt voorkomen door sterke botten in jeugd." },
          ],
          theorie: "Calcium-rijke voeding:\n• **Zuivel**: melk (250 ml = 300 mg), kaas, yoghurt\n• **Groenten**: broccoli, spinazie, boerenkool\n• **Noten**: amandelen, sesam-zaad (tahin)\n• **Vis met graten**: sardientjes, ansjovis\n• **Vegan opties**: verrijkte plantaardige melk (soja, haver)\n\nLactose-intolerant? Vele alternatieven beschikbaar — vraag (huis)arts.",
          voorbeelden: [
            { type: "feit", tekst: "1 glas melk (250 ml) = ~300 mg calcium = 27% van dagelijkse behoefte." },
            { type: "feit", tekst: "Cola + frisdrank bevatten fosforzuur dat calcium-opname kan blokkeren bij grote hoeveelheden." },
          ],
          basiskennis: [{ onderwerp: "Botten bouwen = nu", uitleg: "Cito-feit: je hebt 1 kans in je leven om sterke botten op te bouwen — tussen 10-20 jaar. Daarna alleen onderhoud mogelijk." }],
          niveaus: { basis: "Calcium + vit D + bewegen. = A.", simpeler: "Sterke botten in groei: melk/kaas (calcium) + zonlicht (vit D) + bewegen (impact-sporten). = A.", nogSimpeler: "Calcium + zon + bewegen = A." },
        },
      },
      {
        q: "Het **brein in puberteit** — wat is uniek?",
        options: ["Beslissings-deel ontwikkelt zich laatst — daardoor soms impulsief", "Brein krimpt", "Brein groeit niet meer", "Brein verandert niet"],
        answer: 0,
        wrongHints: [null, "Klopt — prefrontale cortex (planning/impuls-controle) pas klaar rond 25.", "Tegenovergesteld — brein verandert juist sterk.", "Tegenovergesteld — veel groei in puberteit.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Twee verschillende brein-delen", tekst: "Je brein heeft (heel grof gezegd) twee delen die anders ontwikkelen:\n• **Emotie-deel (limbisch systeem)** — vroeg klaar, ~13 jaar. Dit is waarom je in puberteit intens kunt voelen.\n• **Beslissings-deel (prefrontale cortex)** — pas klaar rond **25 jaar**. Dit deel doet: lange-termijn-plannen, impuls-controle, gevolgen overzien." },
            { titel: "Waarom dit verklaart", tekst: "**Emotie sterk + beslissings-controle nog niet klaar = soms impulsieve keuzes** in puberteit:\n• Risico-gedrag (te hard fietsen, dingen proberen zonder na te denken)\n• Sterke emoties (snel boos, snel verliefd, snel verdrietig)\n• Drukke groep aantrekkelijk (peer pressure werkt sterker)\n• Moeite met opletten in les (focus-deel groeit nog)\n\n**Dit is normaal + tijdelijk**." },
            { titel: "Cito-feit: brein-onderzoek + tips", tekst: "**Eveline Crone** (NL-hoogleraar) deed beroemd onderzoek naar tiener-brein. Conclusie: tieners zijn niet 'moeilijk' — ze zijn **biologisch ontworpen** om te experimenteren + risico's nemen.\n\nTips voor tieners zelf:\n• **8-10 uur slaap** = brein heeft tijd nodig om te ontwikkelen\n• **Geen alcohol/drugs** vóór 18 = remt brein-ontwikkeling permanent\n• **Sport + sociale contacten** = brein wordt slimmer\n• **Stress-managen** = lange-stress is slecht voor brein" },
          ],
          woorden: [
            { woord: "prefrontale cortex", uitleg: "Voorste deel van het brein. Doet: plannen, beslissen, impuls-controle. Pas volwassen rond 25." },
            { woord: "limbisch systeem", uitleg: "Diep brein-deel. Doet: emoties, beloning, motivatie. Vroeg klaar in puberteit." },
            { woord: "neuroplasticiteit", uitleg: "Vermogen van brein om te veranderen + leren. Heel hoog in puberteit." },
          ],
          theorie: "Brein in cijfers:\n• Gewicht: ~1,4 kg (~2% van lichaam)\n• Energie-verbruik: 20% van totaal (denken kost veel!)\n• Neuronen: ~86 miljard\n• Verbindingen: 100+ biljoen\n• Volledig volwassen: rond 25 jaar\n\nWat helpt brein groeien: leren, sport, vrienden, slaap, gezonde voeding, omega-3 (vis), nieuwe ervaringen.",
          voorbeelden: [
            { type: "feit", tekst: "Tieners scoren BETER op risico-inschatting in tests waar geen tijdsdruk is. Onder druk + emotie wordt impulsief deel sterker." },
            { type: "feit", tekst: "Alcohol vóór 25 kan permanent brein-ontwikkeling schaden — daarom 18+-grens in NL." },
          ],
          basiskennis: [{ onderwerp: "Niet 'verkeerd'", uitleg: "Tiener-brein is niet 'mis' ontworpen — het werkt zoals het hoort. Volwassenen zijn niet 'beter' maar gewoon ANDERE fase." }],
          niveaus: { basis: "Beslissings-deel laatst klaar. = A.", simpeler: "Brein in puberteit: emotie-deel werkt al sterk, maar beslissings-deel (plannen + impuls-controle) pas klaar rond 25. = A.", nogSimpeler: "Beslissings-deel laat klaar = A." },
        },
      },
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
