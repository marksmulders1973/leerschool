// Leerpad: Beroepen + werk - groep 6-8 wereldoriëntatie/burgerschap.
// toets-relevant. 1F. 5 stappen.

const stepEmojis = ["👷", "🏥", "💻", "📊", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een beroep?", emoji: "👷", from: 0, to: 0 },
  { letter: "B", title: "Sectoren in NL", emoji: "🏥", from: 1, to: 1 },
  { letter: "C", title: "Beroepen + opleiding", emoji: "💻", from: 2, to: 2 },
  { letter: "D", title: "Salaris + werkrechten", emoji: "📊", from: 3, to: 3 },
  { letter: "E", title: "Eind-toets", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is een beroep?",
    explanation:
      "**Beroep** = het werk dat je geleerd hebt om te doen *(je vak)*.\nOok wel **vak** of **professie**.\n\n**Verschil**:\n• **Werk / baan** = wat je nu doet voor geld.\n• **Beroep** = wat je geleerd hebt om te doen *(bv. opgeleid als loodgieter)*.\n• **Carrière** = de loop van je werkleven, alle banen samen.\n\n**Waarom werken mensen?**\n• **Geld verdienen** *(voor eten, huis, kleding, leuke dingen)*.\n• **Plezier** / **zinvolheid** *(iets bijdragen)*.\n• **Sociale contacten** *(collega's)*.\n• **Persoonlijke ontwikkeling** *(leren)*.\n• **Status** in maatschappij.\n\n**Soorten werk**:\n\n**1. Werknemer (in loondienst)**:\n• Werkt voor bedrijf of organisatie.\n• Krijgt **salaris** maandelijks.\n• Vaste werktijden + vakantie.\n• Bedrijf betaalt belasting + premies.\n\n**2. Zelfstandige / ondernemer (ZZP'er)**:\n• Werkt voor zichzelf.\n• Zoekt eigen klanten.\n• Stuurt factuur.\n• Regelt zelf belasting + verzekeringen.\n• Risico maar ook vrijheid.\n\n**3. Eigenaar van bedrijf**:\n• Heeft personeel in dienst.\n• Verantwoordelijk voor bedrijf.\n\n**4. Vrijwilliger**:\n• Werkt **zonder betaling**.\n• Vaak bij goede doelen, sport, verzorgingshuizen.\n• Voor plezier of overtuiging.\n\n**5. Stagiair / leerling**:\n• Leert + werkt tegelijk.\n• Krijgt soms vergoeding *(stagevergoeding)*.\n\n**Werkende mensen in NL**:\n• ~9 miljoen mensen werken *(2024)*.\n• Daarvan: ~1,2 miljoen ZZP'ers *(zelfstandigen)*.\n• Werkende-leeftijd: 15-67 jaar.\n• **Pensioenleeftijd**: 67 jaar *(vanaf 2028 iets hoger: 67 jaar en 3 maanden)*.\n• **AOW** = staatspensioen voor 67-plussers.\n\n**Toets-feitje**:\nIn NL werken **vrouwen vaak parttime** *(deeltijd)* — gemiddeld 28 uur/week. Mannen vaker fulltime *(40 uur)*. NL heeft van alle EU-landen de meeste parttime-werkers.",
    checks: [
      {
        q: "Wat is een **beroep**?",
        options: ["Wat je geleerd hebt om als werk te doen", "Wat je op dit moment voor geld doet", "Alle banen die je in je leven samen hebt", "Werk dat je doet zonder dat je betaald wordt"],
        answer: 0,
        wrongHints: [null, "Dat noemt de les werk of baan. Wat is het verschil met een beroep?", "Dat noemt de les je carrière. Waar gaat het woord beroep over?", "Dat is vrijwilligerswerk. Waar gaat het woord beroep over?"],
      },
      {
        q: "Wat doet een **ZZP'er**?",
        options: ["Werkt voor zichzelf en heeft niemand in dienst", "Werkt voor een baas en krijgt elke maand loon", "Leert een vak en werkt een paar dagen mee", "Heeft een eigen bedrijf met mensen in dienst"],
        answer: 0,
        wrongHints: [null, "Dat is een werknemer in loondienst. Heeft een ZZP'er een baas?", "Dat is een stagiair. Is een ZZP'er nog een vak aan het leren?", "Dat is een bedrijfseigenaar (soort 3 in de les). Hoe zit het bij een ZZP'er met personeel?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent ZZP?", tekst: "**ZZP** is een afkorting voor **Zelfstandige Zonder Personeel**. Het is iemand die voor zichzelf werkt — niet in dienst bij een baas." },
            { titel: "Verschil met werknemer", tekst: "Een werknemer heeft een **baas + vast loon + vakantiedagen + pensioenregeling**. Een ZZP'er regelt alles zelf: eigen klanten zoeken, eigen verzekering, zelf sparen voor pensioen." },
            { titel: "Voorbeelden", tekst: "Veel kappers, fotografen, schilders, klusbedrijfjes, sommige journalisten, sommige IT'ers werken als ZZP. In NL zijn er ~1,2 miljoen ZZP'ers (2024)." },
          ],
          woorden: [
            { woord: "ZZP'er", uitleg: "Zelfstandige Zonder Personeel — eigen baas, geen werknemers." },
            { woord: "werknemer", uitleg: "Iemand in loondienst bij een werkgever." },
          ],
          theorie: "Toets-tip economie: ZZP'er heeft VRIJHEID (eigen tijd kiezen, eigen klanten) maar ook RISICO (geen werk = geen loon, geen vakantiegeld). Daarom rekenen ZZP'ers een hoger uurtarief.",
          voorbeelden: [
            { type: "stap", tekst: "Kapper Annemarie heeft eigen kapsalon = ZZP. Werkt zelf, regelt eigen klanten." },
            { type: "stap", tekst: "Tegenover: Werknemer bij grote kapperketen = vast loon van baas." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "ZZP = ZONDER PERSONEEL. Werkt voor zichzelf, niemand in dienst." }],
          niveaus: {
            basis: "ZZP'er = Zelfstandige Zonder Personeel (eigen baas).",
            simpeler: "ZZP'er werkt voor zichzelf, niet in loondienst.",
            nogSimpeler: "Eigen baas zonder werknemers.",
          },
        },
      },
      {
        q: "Wat is een **vrijwilliger**?",
        options: ["Werkt zonder dat hij betaald wordt", "Werkt voor zichzelf met eigen klanten", "Leert en werkt tegelijk op een stage", "Werkt voor een baas met vast salaris"],
        answer: 0,
        wrongHints: [null, "Dat is een zelfstandige of ZZP'er. Wat is er anders bij iemand die helpt bij een goed doel?", "Dat is een stagiair, die krijgt soms een stagevergoeding. Wat is er bijzonder aan een vrijwilliger?", "Dat is een werknemer in loondienst. Wat is er anders bij een vrijwilliger?"],
      },
      {
        q: "Wat is **AOW**?",
        options: ["Geld van de staat vanaf je 67ste", "Geld van de staat als je werkloos bent", "Geld van de baas als je ziek bent", "Geld van de baas voor je vakantie"],
        answer: 0,
        wrongHints: [null, "Dat is de WW (werkloosheidsuitkering). AOW is een andere regeling: voor wie is die?", "Dat heet loondoorbetaling bij ziekte. Wat staat er in de les bij AOW?", "Dat is vakantiegeld. Wat staat er in de les bij AOW?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is AOW?", tekst: "**AOW** is een afkorting voor **Algemene Ouderdomswet**. Het is een **staatspensioen** dat de overheid uitkeert aan iedereen die in NL gewoond/gewerkt heeft, vanaf hun pensioenleeftijd." },
            { titel: "Pensioenleeftijd", tekst: "In 2026 en 2027 is de AOW-leeftijd **67 jaar**. In 2028 wordt die **67 jaar en 3 maanden**. De leeftijd stijgt langzaam mee, omdat mensen gemiddeld ouder worden." },
            { titel: "Naast werkpensioen", tekst: "AOW = staats-deel (iedereen krijgt hetzelfde basisbedrag). Daarnaast hebben veel mensen een **werknemers-pensioen** dat ze zelf hebben gespaard via hun werkgever. Samen vormen ze 'het pensioen'." },
          ],
          woorden: [
            { woord: "AOW", uitleg: "Algemene Ouderdomswet — staatspensioen." },
            { woord: "pensioen", uitleg: "Geld na pensionering (stoppen met werken)." },
            { woord: "AOW-leeftijd", uitleg: "Vanaf welke leeftijd je AOW krijgt (nu 67)." },
          ],
          theorie: "Toets-tip afkortingen: AOW = Algemene Ouderdoms Wet. Andere belangrijke: WW = Werkloosheidswet. WIA = arbeidsongeschiktheid. Bijstand = laagste uitkering.",
          voorbeelden: [
            { type: "stap", tekst: "Opa van 70 ontvangt elke maand AOW van overheid + werkpensioen van zijn vroegere werkgever." },
            { type: "stap", tekst: "AOW wordt betaald uit belastingen die wij nu betalen. Solidariteits-systeem: jongeren betalen voor ouderen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "AOW = OUDERDOMS-uitkering van staat. Niet hetzelfde als werkgevers-pensioen." }],
          niveaus: {
            basis: "AOW = staatspensioen vanaf 67 jaar.",
            simpeler: "Algemene Ouderdomswet — overheid betaalt ouderen.",
            nogSimpeler: "AOW = staats-pensioen.",
          },
        },
      },
    ],
  },
  {
    title: "Sectoren in Nederland",
    explanation:
      "**Sectoren** = grote groepen banen.\nEconomen verdelen werk in **drie sectoren** — of in **vier**, als ze zorg, onderwijs en overheid apart nemen (dat doen wij hier).\n\n**Primaire sector** *(natuur)*:\n• Werk in **natuur**.\n• **Landbouw** *(boer)*: koeien, melk, granen.\n• **Tuinbouw** *(tuinder)*: groenten, bloemen, planten.\n• **Visserij** *(visser)*: vis vangen.\n• **Mijnbouw** *(mijnwerker)*: olie, gas, grondstoffen.\n• Bosbouw, jacht.\n\n**In NL**: ~2% van werkenden. Vroeger veel meer *(50% in 1900)*.\nMaar NL is **wereld-#2 landbouw-exporteur** *(na VS)* dankzij efficiëntie + technologie.\n\n**Secundaire sector** *(industrie/maken)*:\n• Werk waar je iets **maakt** of **bewerkt**.\n• **Industrie** *(fabrieksarbeider)*: auto's, elektronica, voedsel.\n• **Bouw** *(timmerman, metselaar, loodgieter)*.\n• **Energie** *(centrale-medewerker)*.\n\n**In NL**: ~15%. Grootste industrie: voedingsmiddelen *(Unilever, Heineken)*, chemie *(Shell)*, elektrotechniek *(Philips, ASML)*.\n\n**Tertiaire sector** *(diensten)*:\n• Werk waar je iets **doet voor mensen**.\n• Geen tastbaar product.\n• **Winkel** *(verkoper, kassamedewerker)*.\n• **Horeca** *(kok, ober, kelner)*.\n• **Vervoer** *(buschauffeur, piloot, machinist)*.\n• **Bank/verzekering** *(bankmedewerker)*.\n• **Kapper, fitness-instructeur, taxi**.\n• **Toerisme** *(reisleider, hotel)*.\n\n**In NL**: ~50%. Grootste sector.\n\n**Quartaire sector** *(zorg, onderwijs, overheid)*:\n• **Onderwijs** *(leerkracht, docent)*.\n• **Zorg** *(verpleegkundige, arts, tandarts)*.\n• **Overheid** *(ambtenaar, politie, brandweer, leger)*.\n• **Cultuur** *(museummedewerker, kunstenaar)*.\n• **Onderzoek** *(wetenschapper)*.\n\n**In NL**: ~33%. Groeiende sector *(vergrijzing → meer zorg)*.\n\n**Top-5 grootste beroepen NL** *(2024)*:\n1. Verkoopmedewerker winkel.\n2. Verpleegkundige.\n3. Boekhouder/administratief medewerker.\n4. Leerkracht basis-onderwijs.\n5. Vrachtwagenchauffeur.\n\n**Beroepen-groei** *(toekomst)*:\n• IT *(software, data, cyber-security)*.\n• Zorg *(door vergrijzing)*.\n• Duurzaamheid / klimaat *(zonnepaneel-installateur, etc.)*.\n• AI-specialist.\n\n**Beroepen-krimp**:\n• Kassiers *(zelfscan)*.\n• Postbezorgers *(minder post)*.\n• Sommige fabrieks-banen *(robots)*.\n\n**Toets-feitje**:\nNL heeft een **tekort aan**: leraren *(basis- en middelbaar onderwijs)*, verpleegkundigen, technici, ICT'ers, bouwers. Voor deze beroepen is er **veel werk** + vaak hogere salarissen.",
    checks: [
      {
        q: "Wat voor werk hoort bij de **primaire sector**?",
        options: ["Werk in de natuur, zoals landbouw", "Werk in een fabriek, zoals auto's maken", "Werk voor klanten, zoals in een winkel", "Werk voor iedereen, zoals in de zorg"],
        answer: 0,
        wrongHints: [null, "Iets maken in een fabriek hoort bij de secundaire sector. Wat staat er in de les bij primair?", "Klanten helpen in een winkel hoort bij de tertiaire sector. Wat staat er in de les bij primair?", "Zorg, onderwijs en overheid horen bij de quartaire sector. Wat staat er in de les bij primair?"],
      },
      {
        q: "Welk beroep hoort bij de **secundaire sector**?",
        options: ["Timmerman", "Winkelverkoper", "Leerkracht", "Boer"],
        answer: 0,
        wrongHints: [null, "Een verkoper helpt klanten in een winkel: dat is de tertiaire sector. Wat doe je in de secundaire sector volgens de les?", "Een leerkracht hoort bij onderwijs: dat is de quartaire sector. Wat doe je in de secundaire sector volgens de les?", "Een boer haalt iets uit de natuur: dat is de primaire sector. Wat doe je in de secundaire sector volgens de les?"],
      },
      {
        q: "Welke sector is de **grootste** in Nederland?",
        options: ["Tertiair", "Primair", "Secundair", "Quartair"],
        answer: 0,
        wrongHints: [null, "In de natuur werken maar ongeveer 2 van de 100 werkenden. Waar werken de meeste mensen?", "Fabrieken en bouw: ongeveer 15 van de 100 werkenden. Is dat de grootste groep?", "Zorg, onderwijs en overheid groeien hard, maar zijn ze al de grootste? Kijk naar de getallen in de les."],
        uitlegPad: {
          stappen: [
            { titel: "Wat zijn sectoren?", tekst: "Economen verdelen banen in **3 (of 4) sectoren**: primair (natuur), secundair (maken), tertiair (diensten) en quartair (zorg+onderwijs+overheid)." },
            { titel: "Verdeling in NL (2024)", tekst: "PRIMAIR (natuur): ~2%. SECUNDAIR (industrie/bouw): ~15%. **TERTIAIR (diensten): ~50% = GROOTSTE**. QUARTAIR (zorg/onderwijs/overheid): ~33%." },
            { titel: "Waarom tertiair grootste?", tekst: "NL is een DIENSTEN-economie geworden. Veel mensen werken in winkels, banken, kappers, transport, horeca, IT. Industrie is meer naar Azië verplaatst." },
          ],
          woorden: [
            { woord: "primaire sector", uitleg: "Natuur: landbouw, visserij, mijnbouw." },
            { woord: "secundaire sector", uitleg: "Maken: industrie, bouw." },
            { woord: "tertiaire sector", uitleg: "Diensten: winkel, horeca, vervoer, bank." },
            { woord: "quartaire sector", uitleg: "Zorg, onderwijs, overheid." },
          ],
          theorie: "Toets-tip sectoren: PRIMAIR = direct uit natuur. SECUNDAIR = iets maken. TERTIAIR = iemand helpen (dienst). QUARTAIR = publieke sector (zorg/onderwijs/overheid).",
          voorbeelden: [
            { type: "stap", tekst: "Boer = primair. Loodgieter = secundair. Kapper = tertiair. Leerkracht = quartair." },
            { type: "stap", tekst: "Een hamburger eten? Boer (primair) → fabriek (secundair) → restaurant (tertiair) → arts bij maagpijn (quartair)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Tertiair = grootste in NL. Vroeger (~1900) was PRIMAIR de grootste (50% boeren!), nu maar 2%." }],
          niveaus: {
            basis: "Tertiaire sector = ~50% = grootste in NL (diensten).",
            simpeler: "Helft van NL werkt in diensten (winkel, horeca, IT, etc).",
            nogSimpeler: "Tertiair = grootste.",
          },
        },
      },
      {
        q: "Voor welk beroep zijn de komende jaren **veel meer** mensen nodig?",
        options: ["Verpleegkundige in een verpleeghuis", "Kassamedewerker in de supermarkt", "Bezorger van kranten en brieven", "Drukker in een krantendrukkerij"],
        answer: 0,
        wrongHints: [null, "Steeds meer winkels hebben zelfscankassa's. Zijn daar straks meer of minder mensen voor nodig?", "Steeds minder mensen lezen een papieren krant of sturen brieven. Groeit dat werk dan?", "Bijna alles gaat nu online. Worden er dan meer of minder dingen gedrukt?"],
      },
    ],
  },
  {
    title: "Beroepen + opleiding",
    explanation:
      "**Voor de meeste beroepen heb je opleiding nodig.**\n\n**Onderwijssysteem NL**:\n\n**1. Basisschool** *(groep 1-8, 4-12 jaar)*.\n**2. Middelbare school** *(klas 1-6, 12-18 jaar)*:\n• **vmbo** *(Voorbereidend Middelbaar Beroepsonderwijs, 4 jaar)*: leidt naar mbo.\n• **HAVO** *(Hoger Algemeen Voortgezet Onderwijs, 5 jaar)*: leidt naar hbo.\n• **VWO** *(Voorbereidend Wetenschappelijk Onderwijs, 6 jaar)*: leidt naar universiteit.\n\n**3. Vervolgonderwijs**:\n• **mbo** *(Middelbaar Beroepsonderwijs, 1-4 jaar)*: vakopleiding *(elektricien, kapper, monteur, ICT'er)*.\n• **hbo** *(Hoger Beroepsonderwijs, 4 jaar)*: leraar, verpleegkundige, ingenieur, journalist.\n• **wo** *(Wetenschappelijk Onderwijs, 3 jaar bachelor + 1-2 jaar master)*: dokter, advocaat, architect, wetenschapper.\n\n**Niveaus mbo**:\n• Niveau 1: hulparbeider *(1 jr)*.\n• Niveau 2: vakman *(2 jr)*.\n• Niveau 3: vakman met meer verantwoordelijkheid *(2-3 jr)*.\n• Niveau 4: middenkaderfunctionaris *(3-4 jr)* — kan doorstromen naar hbo.\n\n**Voorbeelden van beroepen + opleiding**:\n\n**mbo-beroepen**:\n• Kapper *(mbo-2/3)*.\n• Auto-monteur *(mbo-3)*.\n• Loodgieter *(mbo-2/3)*.\n• Kok *(mbo-2/3)*.\n• Politieagent *(mbo-3/4)*.\n• Verzorgende *(mbo-3)*.\n• Elektricien *(mbo-2/3)*.\n• Hovenier *(mbo-2/3)*.\n\n**hbo-beroepen**:\n• Leerkracht basisschool *(pabo)*.\n• Docent VO *(hbo lerarenopleiding)*.\n• Verpleegkundige *(hbo-V)*.\n• Verloskundige *(hbo)*.\n• Maatschappelijk werker.\n• Ingenieur *(constructie, elektrotechniek)*.\n• Journalist.\n• Marketeer.\n• ICT-developer.\n\n**wo-beroepen**:\n• Arts *(geneeskunde, 6 jaar)*.\n• Tandarts *(tandheelkunde, 6 jaar)*.\n• Advocaat *(rechten, 4-5 jaar)*.\n• Architect *(bouwkunde + master)*.\n• Wetenschapper *(promotie + onderzoek)*.\n• Psychiater *(arts + specialisatie psychiatrie)*.\n• Notaris *(rechten + master)*.\n\n**Beroepen zonder vaste opleiding**:\n• Ondernemer *(zelfstandige)*.\n• Verkoper *(meeste functies, mbo helpt)*.\n• Influencer *(YouTube, TikTok)*.\n• Schrijver *(talent)*.\n• Sporter *(talent + training)*.\n\n**Kiezen wat bij jou past**:\n• **Wat vind je leuk?** *(creatief, denkwerk, met mensen)*\n• **Wat kun je goed?** *(handig, sportief, taal)*\n• **Wat verdien je?** *(salaris-verschillen kunnen groot zijn)*\n• **Werktijden?** *(kantoor, ploegen, weekend)*\n• **Werkdruk?** *(stress vs rustig)*\n\n**Profielkeuze klas 3**:\n• **vmbo**: techniek / economie / zorg+welzijn / groen.\n• **HAVO/VWO**: N&T / N&G / E&M / C&M.\n\nProfielkeuze bepaalt richtingen vervolgopleiding.\n\n**Toets-feitje**:\n**Hoger opgeleid = hoger salaris** *(gemiddeld)*. Maar niet altijd! Een goede loodgieter verdient meer dan veel hbo'ers.",
    checks: [
      {
        q: "Wat voor opleiding is het **mbo**?",
        options: ["Een vakopleiding voor kapper, kok of monteur", "Een universiteit voor arts of advocaat", "Een hogeschool voor leraar of ingenieur", "Een middelbare school, net na groep 8"],
        answer: 0,
        wrongHints: [null, "Dat is het wo. Welke beroepen staan in de les bij het mbo?", "Dat is het hbo. Welke beroepen staan in de les bij het mbo?", "Dat is het vmbo, en dat komt vóór het mbo. Wat leer je daarna?"],
      },
      {
        q: "Welke opleiding doe je om **arts** te worden?",
        options: ["wo", "mbo", "hbo", "vmbo"],
        answer: 0,
        wrongHints: [null, "Op het mbo leer je praktijkberoepen — leer je daar dokter worden?", "Verpleegkundige wel — maar dokter?", "Het vmbo is middelbare school, nog geen beroepsopleiding voor dokter."],
      },
      {
        q: "Welke opleiding doe je om **loodgieter** te worden?",
        options: ["mbo", "wo", "vmbo", "hbo"],
        answer: 0,
        wrongHints: [null, "Op de universiteit leer je vooral theorie en onderzoek. Is loodgieter zo'n beroep?", "Het vmbo is nog middelbare school; daar word je nog geen loodgieter. Bij welke opleiding staat loodgieter in de les?", "Op het hbo (hogeschool) leer je voor beroepen als leraar of ingenieur. Bij welke opleiding staat loodgieter in de les?"],
      },
      {
        q: "Op welk niveau is de **pabo**?",
        options: ["hbo", "wo", "mbo", "vmbo"],
        answer: 0,
        wrongHints: [null, "wo is de universiteit. Bij welk niveau staat de pabo in de les?", "mbo leidt op tot veel praktijkberoepen. Bij welk niveau staat de pabo in de les?", "vmbo is zelf middelbare school — de pabo volg je pas daarná."],
      },
    ],
  },
  {
    title: "Salaris + werkrechten",
    explanation:
      "**Salaris** = geld dat je krijgt voor werk.\nOok wel **loon** of **inkomen**.\n\n**Hoe wordt salaris berekend?**\n• Per uur *(uurloon)*.\n• Per maand *(bruto-salaris)*.\n• Per jaar *(jaarsalaris)*.\n• Soms met **bonus** of **commissie**.\n\n**Bruto vs netto**:\n• **Bruto** = wat de baas betaalt voor jou.\n• **Belasting + premies** gaan eraf:\n  - Loonbelasting *(staat)*.\n  - Sociale premies *(WW, AOW, ZW)*.\n  - Pensioen.\n• **Netto** = wat overblijft op bankrekening.\n• Bij €3000 bruto blijft ~€2200 netto.\n\n**Minimumloon** *(vanaf 1 januari 2026)*:\n• Volwassene *(21+)*: **€14,71 per uur** bruto.\n• Bij een volle werkweek is dat ongeveer €2.400 tot €2.550 bruto per maand.\n• Jongeren: lager *(15 jaar: 30% van volwassen, 21 jaar: 100%)*.\n• **CAO** *(Collectieve ArbeidsOvereenkomst)*: vaak afspraken hoger dan minimum.\n\n**Gemiddeld bruto-salaris NL** *(2024)*:\n• Fulltime: ~€3000-3500/maand.\n• Verschillen enorm per beroep + opleiding.\n\n**Top-3 best betalende beroepen** *(2024)*:\n1. Specialist-arts *(€150.000+ /jaar)*.\n2. Piloot KLM *(€100.000+)*.\n3. Topmanager *(€100.000+)*.\n\n**Beroepen met lager salaris**:\n• Verkoopmedewerker.\n• Verpleegkundige *(stijgt, want tekort)*.\n• Schoonmaker.\n• Stagiair.\n\n**Wetten over werk**:\n\n**1. Arbeidstijden**:\n• Maximaal **12 uur per dag**.\n• Maximaal **60 uur per week** *(gemiddeld max. 48 uur)*.\n• Een gewone volle werkweek is 36-40 uur.\n• Onder 18 jr: korter *(school-dagen)*.\n\n**2. Pauzes**:\n• 30 min pauze na 5,5 uur werk.\n\n**3. Vakantiedagen**:\n• Minimaal **4× wekelijkse werkuren** *(20 dagen fulltime)*.\n• Bovenop: feestdagen.\n• Vakantiegeld: 8% van bruto-jaarloon.\n\n**4. Ontslag**:\n• Baas mag je niet zomaar ontslaan.\n• Reden nodig + procedure *(UWV of rechter)*.\n• **Opzegtermijn**: 1-4 maanden.\n• Soms **transitievergoeding** *(geld bij ontslag)*.\n\n**5. Bij ziekte**:\n• Maximaal 2 jaar **loondoorbetaling**.\n• Daarna eventueel WW of WIA *(uitkering)*.\n\n**6. Vakbond**:\n• Vereniging werknemers.\n• Onderhandelt CAO met werkgever.\n• Bekend: FNV, CNV.\n• Stakingen mogelijk bij conflict.\n\n**Pesten / discriminatie op werk**:\n• Verboden.\n• Klacht indienen bij baas → vertrouwenspersoon → UWV → rechter.\n• In zware gevallen: ontslag baas mogelijk.\n\n**Belasting**:\nNL heeft **progressieve belasting** — hoe meer je verdient, hoe hoger % belasting.\nLage inkomens: ~37%.\nHoge inkomens: tot ~49%.\n\nBelastinggeld gaat naar: zorg, onderwijs, wegen, defensie, AOW, uitkeringen, etc.\n\n**Toets-feitje**:\nIn NL mag je **wettelijk vanaf 13 jaar** wat licht werk doen *(bv. hond uitlaten, helpen in de tuin; kranten bezorgen mag pas vanaf 15)*. Vanaf 16 mag je echt werken. Veel jongeren bouwen ervaring op met **vakantiebaantjes** *(supermarkt, restaurant)*.",
    checks: [
      {
        q: "Wat betekent **bruto** salaris?",
        options: ["Je loon vóór de belasting eraf gaat", "Je loon nadat de belasting eraf is", "Je loon plus het vakantiegeld erbij", "Je loon voor één uur werken"],
        answer: 0,
        wrongHints: [null, "Wat overblijft op je bankrekening heet netto. Is bruto dan meer of minder?", "Vakantiegeld is een extraatje van 8%. Bruto en netto horen bij elkaar: wat is het verschil?", "Loon per uur heet uurloon. Bruto en netto horen bij elkaar: wat is het verschil?"],
      },
      {
        q: "Hoeveel is het **minimumloon per uur** voor volwassenen in Nederland in 2026 ongeveer?",
        options: ["Ongeveer €15 per uur", "Ongeveer €5 per uur", "Ongeveer €30 per uur", "Ongeveer €8 per uur"],
        answer: 0,
        wrongHints: [null, "Zoveel krijgt een jongere van 16 ongeveer. Wat krijgt een volwassene van 21 of ouder?", "Dat is ongeveer het dubbele. Het minimumloon is het láágste loon dat mag.", "Zoveel krijgt een jongere van 18 of 19 ongeveer. Vanaf 21 krijg je het volle minimumloon."],
      },
      {
        q: "Wat is een **CAO**?",
        options: ["Afspraken tussen werkgevers en werknemers", "Belasting die werkgevers aan de staat geven", "Extra geld dat werknemers in de zomer krijgen", "Diploma dat werknemers halen voor hun vak"],
        answer: 0,
        wrongHints: [null, "Belasting gaat naar de overheid. Wie maken samen een CAO?", "Dat is vakantiegeld. Wie maken samen een CAO, en waarover?", "Een diploma haal je op school, niet bij je baas."],
      },
      {
        q: "Vanaf welke leeftijd mag je in Nederland **licht werk** doen, zoals een hond uitlaten?",
        options: ["13 jaar", "15 jaar", "16 jaar", "10 jaar"],
        answer: 0,
        wrongHints: [null, "Op je 15e mag je al kranten bezorgen. Mag licht werk nog eerder?", "Vanaf 16 mag je echt een bijbaan. Mag licht werk al eerder?", "Op je 10e help je thuis wel mee, maar werken voor geld mag nog niet."],
      },
    ],
  },
  {
    title: "Eind-toets — beroepen mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Bij welke sector hoort de **landbouw**?", options: ["Primair", "Secundair", "Tertiair", "Quartair"], answer: 0, wrongHints: [null, "Secundair is werk waarbij je iets maakt, zoals in een fabriek. Doet een boer dat?", "Tertiair is werk waarbij je klanten helpt, zoals in een winkel. Doet een boer dat?", "Quartair gaat over zorg, onderwijs en overheid. Hoort een boer daarbij?"] },
      { q: "Voor welk beroep doe je meestal een **hbo**-opleiding?", options: ["Leerkracht basisschool", "Loodgieter", "Arts", "Kapper"], answer: 0, wrongHints: [null, "Loodgieter leer je op het mbo. Welk beroep leer je op een hogeschool?", "Arts word je op de universiteit (wo). Welk beroep leer je op een hogeschool?", "Kapper leer je op het mbo. Welk beroep leer je op een hogeschool?"] },
      { q: "Welke van deze mensen is een **ZZP'er**?", options: ["Een fotograaf die alleen voor eigen klanten werkt", "Een kok die in vaste dienst is bij een restaurant", "Een bakker die zelf vijf mensen in dienst heeft", "Een leerling die stage loopt bij een autogarage"], answer: 0, wrongHints: [null, "Een kok in vaste dienst heeft een baas. Heeft een ZZP'er een baas?", "Wie mensen in dienst heeft, is een werkgever. Hoe zit dat bij een ZZP'er?", "Een stagiair leert nog een vak. Denk aan de soorten werk uit de eerste les: wat doet een ZZP'er?"] },
      { q: "Opa is 70 en werkt niet meer. Hij krijgt elke maand **AOW**. Wat is dat voor geld?", options: ["Pensioen van de staat", "Pensioen van zijn baas", "Spaargeld van de bank", "Toeslag van de gemeente"], answer: 0, wrongHints: [null, "Pensioen via je oude baas heet werkpensioen; dat spaar je via je werk. AOW is iets anders: wie betaalt dat?", "Spaargeld heb je zelf bij elkaar gespaard. Wie betaalt AOW?", "Een toeslag is een andere regeling. Wie betaalt AOW?"] },
      { q: "Welk beroep staat in de les bovenaan als **best betaald** in Nederland?", options: ["Specialist-arts", "Verpleegkundige", "Leerkracht basisschool", "Buschauffeur"], answer: 0, wrongHints: [null, "Verpleegkundigen gaan meer verdienen door het tekort, maar staan ze in de top-3?", "Leerkrachten zijn hard nodig, maar staan ze in de top-3 van de les?", "Kijk in de les bij de top-3 best betalende beroepen. Staat buschauffeur daar?"] },
      { q: "Op de loonstrook van Sara staat: **bruto** €2.000. Wat is dat voor bedrag?", options: ["Loon vóór aftrek van belasting", "Loon dat op haar rekening komt", "Loon voor een heel jaar samen", "Loon met haar vakantiegeld erbij"], answer: 0, wrongHints: [null, "Wat op je rekening komt, heet netto. Is bruto dan meer of minder?", "Loon voor een heel jaar heet jaarsalaris. Bruto en netto horen bij elkaar: wat is het verschil?", "Vakantiegeld krijg je één keer per jaar extra. Bruto en netto horen bij elkaar: wat is het verschil?"] },
      {
        q: "Wat zijn **mbo, hbo en wo**?",
        options: ["Drie niveaus van vervolgonderwijs", "Drie soorten middelbare school", "Drie profielen die je kiest in klas 3", "Drie soorten toetsen in groep 8"],
        answer: 0,
        wrongHints: [null, "De middelbare school heeft vmbo, havo en vwo. Zijn mbo, hbo en wo dezelfde scholen?", "Profielen heten bijvoorbeeld techniek of zorg en welzijn. Wanneer ga je naar het mbo?", "In groep 8 maak je de Doorstroomtoets. Gaat mbo/hbo/wo over een toets of over een school?"],
        uitlegPad: {
          stappen: [
            { titel: "3 niveaus vervolgonderwijs in NL", tekst: "Na de middelbare school kun je in NL kiezen uit drie hoofdniveaus:\n\n• **mbo** (**Middelbaar Beroeps­onderwijs**) — praktijkgericht. Niveau 1-4. Duur: 1-4 jaar. Bv. kapper, verpleegkunde, ICT-helpdesk.\n• **hbo** (**Hoger Beroeps­onderwijs**) — toegepaste theorie + praktijk. Duur: 4 jaar (bachelor). Bv. leraar basisschool, verpleegkundige niveau 6, marketing.\n• **wo** (**Wetenschappelijk Onderwijs**) — universiteit, theoretisch + onderzoek. Duur: 3 jaar bachelor + 1-2 jaar master. Bv. arts, advocaat, psycholoog." },
            { titel: "Welke middelbare-school-keuze leidt waarheen?", tekst: "• **vmbo** → meestal mbo\n• **HAVO** → meestal hbo\n• **VWO** → meestal wo\n\nMaar **stapelen kan altijd**: mbo niveau 4 → hbo. hbo → wo. Niemand zit vast — je kunt altijd nog doorgroeien. Tegenwoordig switchen veel mensen zelfs ná hun studie." },
            { titel: "Toets-feit: Doorstroomtoets-link", tekst: "**De Doorstroomtoets** (groep 8) helpt bepalen welk middelbare-school-niveau bij je past — vmbo, HAVO of VWO. Dit beïnvloedt welk vervolgonderwijs makkelijk bereikbaar is. Maar het is **geen einde van keuzes** — stapelen kan altijd later.\n\nNederland heeft ~1,4 miljoen studenten in mbo/hbo/wo samen (2024)." },
          ],
          woorden: [
            { woord: "mbo", uitleg: "Middelbaar Beroepsonderwijs. Praktijkgericht. ROC's, scholen voor specifieke beroepen." },
            { woord: "hbo", uitleg: "Hoger Beroepsonderwijs. Hogescholen. 4 jaar bachelor, toepassings­gericht." },
            { woord: "wo", uitleg: "Wetenschappelijk Onderwijs. Universiteiten. 3 jaar bachelor + 1-2 jaar master, onderzoeksgericht." },
            { woord: "stapelen", uitleg: "Doorgaan naar hoger niveau na een opleiding. vmbo→mbo→hbo bv." },
          ],
          theorie: "NL-onderwijsniveaus van laag naar hoog (samenvatting):\n• Basisschool (groep 1-8)\n• **vmbo** (4 jr) → mbo\n• **HAVO** (5 jr) → hbo\n• **VWO** (6 jr) → wo\n• **mbo** (1-4 jr) → werk of hbo\n• **hbo** (4 jr bachelor) → werk of master/wo\n• **wo** (3 jr bachelor + 1-2 jr master) → werk of PhD\n\nDoor stapelen kan iedereen elk niveau bereiken — niet alleen via 1 route.",
          voorbeelden: [
            { type: "feit", tekst: "Oud-premier Mark Rutte studeerde geschiedenis aan de universiteit van Leiden (wo)." },
            { type: "feit", tekst: "Veel Nederlanders deden eerst vmbo/mbo en stapelden later door naar hbo of zelfs wo." },
          ],
          basiskennis: [{ onderwerp: "Niet 'lager = slechter'", uitleg: "mbo is NIET minder dan wo — verschillende beroepen + interesses. Stratenmaker (mbo) en arts (wo) zijn beide nodig." }],
          niveaus: { basis: "mbo, hbo en wo zijn drie niveaus van vervolgonderwijs.", simpeler: "mbo = praktijk-beroep, hbo = hogeschool 4 jaar, wo = universiteit. Drie niveaus vervolgonderwijs in NL.", nogSimpeler: "3 niveaus" },
        },
      },
      {
        q: "Tussen wie worden de afspraken in een **CAO** gemaakt?",
        options: ["Afspraken tussen werkgevers en vakbonden", "Afspraken tussen werknemers en de staat", "Afspraken tussen een ZZP'er en zijn klanten", "Afspraken tussen de baas en één werknemer"],
        answer: 0,
        wrongHints: [null, "De staat maakt wetten, zoals het minimumloon. Een CAO is iets anders: wie praten er dan samen?", "Een ZZP'er valt niet onder een CAO. Voor wie geldt een CAO wel?", "Dat is een arbeidscontract voor één persoon. Een CAO geldt voor een hele groep: wie praten daarover?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een CAO?", tekst: "**CAO** = **Collectieve Arbeids­overeenkomst** — een **schriftelijke afspraak** tussen werkgevers (vaak via een werkgevers-organisatie) en werknemers (via een **vakbond**, bv. FNV of CNV).\n\nGeldt voor **alle werknemers** in een sector (zorg, bouw, onderwijs, supermarkten). Je hoeft niet apart te onderhandelen — CAO regelt het al." },
            { titel: "Wat staat erin?", tekst: "Een CAO regelt minimaal:\n• **Salaris-tabel** per functie en ervaringsjaren\n• **Werktijden** (max uur/week, overwerk-regels)\n• **Vakantie-dagen** (meestal 25+ per jaar)\n• **Ziekteverzuim** (loon doorbetalen)\n• **Pensioen** (deel salaris naar pensioen)\n• **Ontslag-regels** (opzegtermijn)\n• **13e maand** of bonus (soms)" },
            { titel: "Toets-feit: vakbonden NL", tekst: "Nederland heeft **~1,5 miljoen vakbonds­leden** (2024). Grootste vakbonden:\n• **FNV** (Federatie Nederlandse Vakbeweging) — ~900.000 leden\n• **CNV** (Christelijk Nationaal Vakverbond) — ~250.000 leden\n• **VCP** (kleinere)\n\nLidmaatschap kost ~€15/maand. Vakbond helpt bij conflicten met werkgever, onderhandelt CAO's, geeft juridisch advies." },
          ],
          woorden: [
            { woord: "CAO", uitleg: "Collectieve Arbeidsovereenkomst. Afspraken over werk-voorwaarden voor hele branche." },
            { woord: "vakbond", uitleg: "Organisatie van werknemers die opkomt voor hun belangen. Onderhandelt CAO." },
            { woord: "werkgever", uitleg: "Bedrijf/persoon die jou in dienst neemt en salaris betaalt." },
            { woord: "werknemer", uitleg: "Persoon die in dienst is en salaris ontvangt." },
          ],
          theorie: "Hoe werkt een CAO?\n1. Vakbond stelt eisen op (bv. 5% loonsverhoging)\n2. Werkgevers-organisatie stelt aanbod (bv. 2% loonsverhoging)\n3. Onderhandelen tot akkoord\n4. CAO ondertekenen voor **2-3 jaar**\n5. Nieuwe ronde na afloop\n\nBij conflict: **staking** mogelijk (werknemers leggen werk neer om druk te zetten).",
          voorbeelden: [
            { type: "feit", tekst: "Top-3 CAO's in NL qua aantal werknemers: zorg, supermarkten (AH/Jumbo), bouw." },
            { type: "feit", tekst: "Een ZZP'er valt NIET onder een CAO — moet eigen afspraken maken met klanten." },
          ],
          basiskennis: [{ onderwerp: "Niet altijd alle bedrijven", uitleg: "CAO geldt voor sectoren waar werkgevers + vakbond afspraken hebben. Niet elk bedrijf — sommige cao-loze sectoren bestaan." }],
          niveaus: { basis: "Afspraken werk-voorwaarden.", simpeler: "CAO = Collectieve Arbeidsovereenkomst. Afspraken tussen werkgevers + vakbond over salaris, vakantie, werktijden voor hele branche.", nogSimpeler: "Werk-afspraken" },
        },
      },
      {
        q: "Hoe oud moet je minstens zijn om geld te verdienen met **helpen in de tuin** van de buren?",
        options: ["Vanaf 13 jaar", "Vanaf 15 jaar", "Vanaf 16 jaar", "Vanaf 12 jaar"],
        answer: 0,
        wrongHints: [null, "Op je 15e mag je meer, zoals kranten bezorgen. Is helpen in de tuin zulk werk, of een licht klusje dat eerder mag?", "Vanaf 16 mag je een echte bijbaan. Is helpen in de tuin al een bijbaan?", "Op je 12e ben je volgens de wet nog te jong voor betaald werk. Hoeveel ouder moet je zijn?"],
        uitlegPad: {
          stappen: [
            { titel: "NL-leeftijdsgrenzen werken", tekst: "Nederland heeft duidelijke regels per leeftijd:\n• **<13 jaar**: alleen huishoudelijke klusjes voor zakgeld\n• **13-14**: **licht werk** rondom huis (auto wassen voor buurman, hondenuitlater, folders rondbrengen)\n• **15**: ook kranten bezorgen, vakantie-werk\n• **16-17**: bijbaan met **beperkingen** (max 45 u/week, niet 's nachts)\n• **18+**: volwaardig werken zonder beperkingen" },
            { titel: "Regels voor 16-17 jarigen", tekst: "**Werktijd**:\n• Max **9 uur** per dienst\n• Max **45 uur** per week (gemiddeld 40)\n• Schooltijd telt mee als werktijd\n\n**Rust**:\n• **30 min pauze** bij meer dan 4,5 uur werk\n• Niet werken tussen **23:00 en 06:00**\n\nNiet toegestaan voor minderjarigen: alcohol-werk, gevaarlijke machines." },
            { titel: "Toets-feit: salaris jongeren", tekst: "**Minimumloon jongeren** (januari 2026):\n• 15 jaar: **€4,41/uur** bruto\n• 16: €5,07\n• 17: €5,81\n• 18: €7,36\n• 19: €8,83\n• 20: €11,77\n• 21+: **€14,71** (volwassen minimumloon)\n\nOnder de 15 jaar geldt **geen wettelijk minimumloon**: een 13-jarige hondenuitlater spreekt zelf een bedrag af. Dat jongeren een lager minimumloon krijgen dan volwassenen voor hetzelfde werk (het **jeugdloon**), is in NL wettelijk toegestaan." },
          ],
          woorden: [
            { woord: "bijbaan", uitleg: "Werk naast school of studie. Niet hoofdinkomen." },
            { woord: "minimumloon", uitleg: "Laagste salaris dat werkgever mag betalen. Verschillend per leeftijd in NL." },
            { woord: "Arbeidsinspectie", uitleg: "Overheidsinstantie die controleert of werkgevers zich aan werk-regels houden." },
          ],
          theorie: "Belangrijke regels jonge werknemers (Arbeidstijdenwet):\n• Werkgever MAG NIET vragen je school over te slaan\n• Werkgever MOET pauzes geven\n• Loonstrook MAG je vragen (bewijs salaris)\n• Bij ziekte: doorbetaling regelen via CAO\n\nVeel jongeren weten hun rechten niet. Vakbond CNV Jongeren of FNV Jong geven info.",
          voorbeelden: [
            { type: "feit", tekst: "~750.000 Nederlandse jongeren (15-24) hebben een bijbaan (2024). Populairst: supermarkt, horeca, krantenwijk." },
            { type: "feit", tekst: "Je krijgt ook **vakantiegeld** (8% van salaris extra in mei) — telt op bij salaris." },
          ],
          basiskennis: [{ onderwerp: "Niet stiekem", uitleg: "Werken vóór 13 of zonder regels = werkgever in overtreding. Dan ligt de schuld bij de werkgever, niet bij jou." }],
          niveaus: { basis: "13 jaar.", simpeler: "Vanaf 13 mag licht werk (klusjes, folders), vanaf 15 ook kranten, vanaf 16 bijbaan met regels (max uur, geen nacht).", nogSimpeler: "13+ licht werk" },
        },
      },
      { q: "Wat is een **CV** (curriculum vitae)?", options: ["Overzicht van je opleidingen en werk", "Diploma van je laatste opleiding", "Contract met je loon en werktijden", "Strookje met wat je die maand verdient"], answer: 0, wrongHints: [null, "Een diploma krijg je voor één opleiding — is dat een overzicht?", "Een contract teken je pas als je aangenomen bent.", "Een loonstrook laat zien wat je verdient."] },
      { q: "Welk beroep leer je meestal op het **mbo**?", options: ["Elektricien", "Tandarts", "Notaris", "Verloskundige"], answer: 0, wrongHints: [null, "Tandarts word je na een lange studie op de universiteit (wo). Welk beroep is een praktisch vak?", "Een notaris studeert rechten op de universiteit (wo). Welk beroep is een praktisch vak?", "Verloskundige leer je op een hogeschool (hbo). Welk beroep is een praktisch vak?"] },
      { q: "Wat leer je op het **hbo**?", options: ["Een vak als fysiotherapeut, leraar basisschool of journalist", "Een vak als tandarts, notaris of wetenschapper", "Een vak als kok, elektricien of hovenier", "Algemene vakken zoals wiskunde en aardrijkskunde voor je eindexamen"], answer: 0, wrongHints: [null, "Die beroepen leer je op de universiteit (wo). Welke beroepen leer je op een hogeschool?", "Die beroepen leer je op het mbo. Welke beroepen staan in de les bij het hbo?", "Dat doe je op de middelbare school (havo of vwo). Het hbo leert je een beroep. Welke beroepen staan in de les bij het hbo?"] },
      { q: "Welk **beroep** hoort bij de **quartaire** sector?", options: ["Verpleegkundige","Kassamedewerker","Timmerman","Visser"], answer: 0, wrongHints: [null, "Een kassamedewerker helpt klanten in een winkel. Bij welke sector hoort dat?", "Een timmerman maakt of bouwt iets. Bij welke sector hoort dat?", "Een visser haalt iets uit de natuur. Bij welke sector hoort dat?"] },
      { q: "Welk **beroep** werkt met dieren?", options: ["Veearts","Tandarts","Huisarts","Kinderarts"], answer: 0, wrongHints: [null, "Een tandarts kijkt naar de tanden van mensen.", "Een huisarts helpt mensen die ziek zijn.", "Een kinderarts helpt zieke kinderen."] },
      { q: "Wat doet een **architect**?", options: ["Gebouwen ontwerpen","Gebouwen bouwen","Gebouwen schoonmaken","Gebouwen verkopen"], answer: 0, wrongHints: [null, "Dat doen bouwvakkers en de aannemer. Wat moet er gebeuren vóórdat zij beginnen?", "Dat doet een schoonmaker. Een architect heeft een lange opleiding gedaan — waarvoor?", "Dat doet een makelaar. Wat moet er gebeuren vóórdat er gebouwd wordt?"] },
      { q: "Wat is **vakantiegeld**?", options: ["Extra loon dat de baas elk jaar moet betalen", "Extra loon dat de baas geeft voor goed werk", "Geld dat je bij de bank wisselt voor op reis", "Extra loon voor werken in de zomervakantie"], answer: 0, wrongHints: [null, "Dat is een bonus — die is niet verplicht. Welk extraatje krijgt iedere werknemer?", "Dat is vreemd geld (valuta). Vakantiegeld komt van je baas.", "Dat is gewoon loon voor een vakantiebaantje. Vakantiegeld is iets anders: wie krijgt het?"] },
      { q: "Lisa staat elke zaterdag achter de bar van haar voetbalclub. Ze is daar **vrijwilliger**. Wat betekent dat?", options: ["Iemand die onbetaald werkt", "Iemand die per uur loon krijgt", "Iemand die er zakgeld voor krijgt", "Iemand die een vak leert en meewerkt"], answer: 0, wrongHints: [null, "Loon per uur krijgt een werknemer. Wat zegt de les over betaling bij vrijwilligers?", "Zakgeld krijg je van thuis, niet van de club. Wat zegt de les over betaling bij vrijwilligers?", "Dat is een stagiair. Wat is er bijzonder aan een vrijwilliger?"] },
      { q: "Welk beroep hoort volgens de les bij de **overheid**?", options: ["Brandweervrouw", "Kapper", "Reisleider", "Bankmedewerker"], answer: 0, wrongHints: [null, "Een kapper werkt in een salon: een dienst voor klanten. Welk beroep werkt voor de overheid?", "Een reisleider werkt voor een reisbureau. Welk beroep werkt voor de overheid?", "Een bankmedewerker werkt voor een bank. Welk beroep werkt voor de overheid?"] },
      { q: "Welk **beroep** zaait en oogst gewassen?", options: ["Boer","Bakker","Slager","Visser"], answer: 0, wrongHints: [null, "Een bakker gebruikt meel, maar zaait het graan niet zelf.", "Een slager verkoopt vlees, maar plant geen gewassen.", "Een visser vangt vis op zee — daar wordt niets geplant."] },
      { q: "Wat is een **werkgever**?", options: ["Een baas of bedrijf dat mensen loon betaalt", "Iemand die voor een baas werkt en loon krijgt", "Een klant die iets bij een bedrijf koopt", "Een club die opkomt voor mensen met werk"], answer: 0, wrongHints: [null, "Dat is de werknemer, de andere kant van het werk.", "Een klant koopt iets bij een bedrijf. Is dat hetzelfde als iemand werk geven?", "Dat is een vakbond, zoals de FNV. Betaalt een vakbond jouw loon?"] },
      { q: "Sanne werkt in een supermarkt. Elke maand krijgt ze loon van haar baas. Wat is Sanne?", options: ["Een werknemer", "Een werkgever", "Een ZZP'er", "Een vrijwilliger"], answer: 0, wrongHints: [null, "De werkgever is de baas. Is Sanne de baas?", "Een ZZP'er heeft geen baas. Heeft Sanne een baas?", "Een vrijwilliger krijgt geen loon. Krijgt Sanne loon?"] },
      { q: "Wat is **loon**?", options: ["Geld dat je krijgt voor je werk", "Geld dat je extra krijgt voor goed werk", "Geld dat je aan de staat moet betalen", "Geld dat je krijgt als je geen werk hebt"], answer: 0, wrongHints: [null, "Dat is een bonus: die krijg je soms, maar niet altijd. Wat staat er in de les bij salaris?", "Dat is belasting: die betaal je juist.", "Dat is een uitkering, zoals de WW."] },
      { q: "Voor welk beroep ga je naar de **pabo**?", options: ["Leraar op de basisschool", "Verpleegkundige", "Advocaat", "Politieagent"], answer: 0, wrongHints: [null, "Verpleegkundige leer je op een zorgopleiding (mbo of hbo-V). Waar is de pabo voor?", "Advocaat word je na een studie rechten op de universiteit. Waar is de pabo voor?", "Politieagent leer je op de politieschool. Waar is de pabo voor?"] },
      { q: "Wat is een **stage**?", options: ["Werkervaring opdoen tijdens je opleiding", "De vrije weken tussen twee schooljaren", "Een toets aan het eind van je opleiding", "Een schoolreis van een week met je klas"], answer: 0, wrongHints: [null, "Dat is vakantie — dan werk je niet.", "Dat is een examen. Bij een stage ben je niet op school — waar dan wel?", "Een schoolreis is een uitje met de klas. Waar ben je tijdens een stage: op school of ergens anders?"] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const beroepenWerkPo = {
  id: "beroepen-werk-po",
  title: "Beroepen + werk (groep 6-8, Doorstroomtoets-stof)",
  emoji: "👷",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — economie / burgerschap",
  prerequisites: [
    { id: "financiele-vorming-po", title: "Financiële vorming", niveau: "1F" },
  ],
  intro:
    "Beroepen + werk voor groep 6-8, Doorstroomtoets-stof — wat is beroep (werknemer/ZZP/vrijwilliger) + 4 sectoren (primair/secundair/tertiair/quartair) + mbo/hbo/wo + voorbeelden beroepen + salaris (bruto/netto/minimum/CAO) + werkrechten + werken vanaf 13. Sluit aan op financiele-vorming. ~15 min.",
  triggerKeywords: [
    "beroep", "beroepen", "werk", "baan",
    "ZZP", "freelance", "ondernemer",
    "salaris", "loon", "bruto", "netto", "minimumloon",
    "mbo", "hbo", "wo", "universiteit",
    "primaire sector", "secundaire", "tertiaire", "quartaire",
    "CAO", "vakbond", "FNV",
    "AOW", "pensioen",
  ],
  chapters,
  steps,
};

export default beroepenWerkPo;
