// Leerpad: Schrijven van teksten — groep 6-8 PO.
// Cito-Doorstroomtoets onderdeel "Schrijven van teksten" (30 van 100 taal-vragen,
// 23% van het taal-deel). Voorheen was dit een gap in Leerkwartier — alleen
// een pilot-pad doorstroomtoetsTaalG8 bevatte enkele losse vragen.
//
// 5 stappen × ~5 checks = ~25 Doorstroomtoets-stijl oefenvragen.
// Referentieniveau 1F/1S.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  highlight: "#ffd54f",
  accent: "#ff6b35",
};

const stepEmojis = ["🎯", "✉️", "📝", "🗣️", "🏆"];

const chapters = [
  { letter: "A", title: "Tekstdoelen", emoji: "🎯", from: 0, to: 0 },
  { letter: "B", title: "Brief & e-mail", emoji: "✉️", from: 1, to: 1 },
  { letter: "C", title: "Samenvatten", emoji: "📝", from: 2, to: 2 },
  { letter: "D", title: "Opinie & argumentatie", emoji: "🗣️", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Tekstdoelen ────────────────────────────────────────
  {
    title: "Wat wil de schrijver? — Tekstdoelen",
    explanation:
      "Een goede schrijver weet **waarom** hij schrijft. Bij de Doorstroomtoets moet je vaak het **tekstdoel** herkennen.\n\n**4 tekstdoelen — onthoud OBIA**:\n• **O — Overtuigen** *(de schrijver wil dat je iets denkt of doet)*. Voorbeeld: reclame, opiniestuk, ingezonden brief.\n• **B — Beschrijven / informeren** *(de schrijver geeft feiten)*. Voorbeeld: krantenbericht, encyclopedie, schoolboek.\n• **I — Instrueren** *(de schrijver legt uit hoe iets moet)*. Voorbeeld: recept, handleiding, stappenplan.\n• **A — Amuseren** *(de schrijver wil dat je lacht of geniet)*. Voorbeeld: gedicht, mop, verhaal.\n\n**Toets-truc**: lees de **eerste én laatste zin**. Daar zit het tekstdoel meestal in. Reclame eindigt met \"koop nu\" → Overtuigen. Recept begint met \"je hebt nodig\" → Instrueren.\n\n**Veel-voorkomende valkuilen**:\n• Reclame ziet eruit als informeren, maar wil **kopen** → Overtuigen.\n• Een grappig verhaal kan ook iets leren — kijk welk doel **hoofdzaak** is.",
    checks: [
      {
        q: "Wat is het **tekstdoel** van een **handleiding** bij een nieuwe fiets?",
        options: ["Instrueren","Amuseren","Overtuigen","Informeren"],
        answer: 0,
        wrongHints: [null, "Een handleiding wil niet vermaken — kijk naar het doel.", "Een handleiding probeert niet iets te verkopen.", "Bijna — maar 'informeren' geeft feiten zonder stappen. Handleiding geeft een volgorde."],
        uitlegPad: {
          stappen: [{ titel: "Handleiding = stappenplan", tekst: "Een handleiding zegt: 'Stap 1 — open de doos. Stap 2 — schroef het stuur vast'. Dat is geen feiten of grap — het zegt HOE iets moet. Doel = **Instrueren** (de I in OBIA)." }],
          woorden: [{ woord: "tekstdoel", uitleg: "Waarom de schrijver de tekst schreef." }, { woord: "OBIA", uitleg: "Overtuigen / Beschrijven / Instrueren / Amuseren — de 4 tekstdoelen." }],
          theorie: "Hulpvraag: wil de schrijver dat ik (1) iets DOE → Instrueren, (2) iets WEET → Beschrijven, (3) iets DENK → Overtuigen, (4) iets LEUK vind → Amuseren.",
          voorbeelden: [{ type: "controle", tekst: "Recept: 'meng het meel met water'. Doel = Instrueren ✓." }],
          basiskennis: [{ onderwerp: "Handleiding-signalen", uitleg: "Woorden als 'stap', 'eerst', 'daarna', 'tot slot' → bijna altijd Instrueren." }],
          niveaus: { basis: "Handleiding = HOE iets moet = Instrueren.", simpeler: "Handleiding zegt 'doe dit, dan dit' = stappen = I van OBIA.", nogSimpeler: "Handleiding = stappen = Instrueren." },
        },
      },
      {
        q: "Een reclame zegt: *'Koop nu, alleen vandaag 50% korting!'* Welk tekstdoel?",
        options: ["Overtuigen","Informeren","Instrueren","Amuseren"],
        answer: 0,
        wrongHints: [null, "De reclame geeft geen feiten zonder bedoeling — kijk naar 'koop nu'.", "Reclame leert je niet HOE iets moet.", "Niet — reclame wil verkopen, niet lachen."],
        uitlegPad: {
          stappen: [{ titel: "Reclame wil dat je IETS DOET", tekst: "'Koop nu' is een **oproep**. De schrijver wil dat je een actie doet (kopen). Doel = **Overtuigen** (de O in OBIA)." }],
          woorden: [{ woord: "overtuigen", uitleg: "De schrijver wil je laten denken/doen wat hij wil." }],
          theorie: "Reclame is altijd Overtuigen — ook als 't grappig is. De grap is een truc om je over te halen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "'Met dit toetje voel je je top!' → niet feiten, maar overtuigen om te kopen." }],
          basiskennis: [{ onderwerp: "Overtuig-signalen", uitleg: "Woorden als 'koop', 'kies', 'doe mee', 'beste', '50% korting' → Overtuigen." }],
          niveaus: { basis: "Reclame = Overtuigen.", simpeler: "'Koop nu' = oproep = je moet iets DOEN = Overtuigen.", nogSimpeler: "Reclame = O." },
        },
      },
      {
        q: "Een **nieuwsbericht** over een storm in Nederland. Wat is het doel?",
        options: ["Informeren","Overtuigen","Amuseren","Instrueren"],
        answer: 0,
        wrongHints: [null, "Een nieuwsbericht probeert je geen mening te geven — gewoon feiten.", "Niet — een storm is geen grap.", "Een nieuwsbericht leert geen stappen aan."],
        uitlegPad: {
          stappen: [{ titel: "Nieuws = feiten geven", tekst: "Nieuwsbericht: 'Gisteren stond er een storm. De wind was 110 km/u.' Dat zijn FEITEN. Doel = **Informeren** (B = Beschrijven in OBIA, ook informeren genoemd)." }],
          woorden: [{ woord: "informeren", uitleg: "Feiten geven zonder mening." }, { woord: "feit", uitleg: "Iets dat is gebeurd of bewezen kan worden." }],
          theorie: "Krantenbericht / journaal / school-tekstboek → bijna altijd Informeren. Geen mening, geen oproep.",
          voorbeelden: [{ type: "voorbeeld", tekst: "'Nederland heeft ongeveer 18 miljoen inwoners' → feit → Informeren." }],
          basiskennis: [{ onderwerp: "Niet verwarren", uitleg: "Een opiniestuk in de krant is WEL Overtuigen (mening). Nieuws is Informeren." }],
          niveaus: { basis: "Nieuws = feiten = Informeren.", simpeler: "Bericht geeft feiten. Geen mening. = Informeren.", nogSimpeler: "Nieuws = Informeren (B van OBIA)." },
        },
      },
      {
        q: "Een **gedicht** over de herfst. Welk tekstdoel hoort hierbij?",
        options: ["Amuseren","Instrueren","Informeren","Overtuigen"],
        answer: 0,
        wrongHints: [null, "Een gedicht leert geen stappen.", "Gedicht is niet bedoeld voor feiten — kijk naar genieten.", "Een gedicht wil niets verkopen."],
        uitlegPad: {
          stappen: [{ titel: "Gedicht = genieten", tekst: "Een gedicht is gemaakt om mooi te zijn — om van te genieten. Doel = **Amuseren** (de A in OBIA — kan ook 'plezier' betekenen)." }],
          woorden: [{ woord: "amuseren", uitleg: "Plezier geven. De lezer iets leuks/moois laten ervaren." }],
          theorie: "Gedicht / roman / mop / kinderverhaal → Amuseren. Soms ook iets leren erbij, maar plezier is hoofdzaak.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Annie M.G. Schmidt-gedichtje → Amuseren." }],
          basiskennis: [{ onderwerp: "Verschil", uitleg: "Een leerboek over gedichten = Informeren. Het gedicht zelf = Amuseren." }],
          niveaus: { basis: "Gedicht = mooi = Amuseren.", simpeler: "Gedicht is om van te genieten = A van OBIA.", nogSimpeler: "Gedicht = A." },
        },
      },
      {
        q: "De zin *'Ik vind dat alle scholen de pauze moeten verlengen.'* — welk tekstdoel start hier?",
        options: ["Overtuigen","Informeren","Amuseren","Instrueren"],
        answer: 0,
        wrongHints: [null, "'Ik vind' is geen feit — kijk naar de mening.", "Niet — de zin is serieus.", "Niet — er staat geen stappenplan."],
        uitlegPad: {
          stappen: [{ titel: "'Ik vind' = mening = Overtuigen", tekst: "Zodra je 'ik vind', 'volgens mij', 'mijn mening is' leest, weet je: de schrijver wil je MENING beïnvloeden. Doel = **Overtuigen**." }],
          woorden: [{ woord: "mening", uitleg: "Wat iemand persoonlijk denkt. Niet bewijsbaar zoals een feit." }],
          theorie: "Toets-truc: zoek 'ik vind', 'volgens mij', 'het is belangrijk dat'. → Overtuigen.",
          voorbeelden: [{ type: "controle", tekst: "'Ik vind voetbal de mooiste sport.' = mening = Overtuigen." }],
          basiskennis: [{ onderwerp: "Mening vs feit", uitleg: "FEIT: 'Een voetbalwedstrijd duurt 90 minuten'. MENING: 'Sporten is geweldig'." }],
          niveaus: { basis: "Ik vind = mening = Overtuigen.", simpeler: "'Ik vind' is geen feit maar mening. Schrijver wil je overtuigen.", nogSimpeler: "Mening = Overtuigen" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is het **tekstdoel** van een **recept** voor pannenkoeken?",
        options: ["Instrueren", "Informeren", "Overtuigen", "Amuseren"],
        answer: 0,
        wrongHints: [
          null,
          "Een recept vertelt je ook dingen. Maar wat moet jij er daarna mee doen?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Recept = hoe moet het",
              tekst: "Een recept zegt: 'Doe het meel in een kom. Klop de eieren erdoor.' Het legt uit HOE je iets maakt. Doel = Instrueren.",
            },
          ],
          woorden: [
            {
              woord: "instrueren",
              uitleg: "Uitleggen hoe iets moet.",
            },
            {
              woord: "OBIA",
              uitleg: "Overtuigen / Beschrijven (informeren) / Instrueren / Amuseren — de 4 tekstdoelen.",
            },
          ],
          theorie: "Hulpvraag: wil de schrijver dat ik iets DOE (Instrueren), iets WEET (Informeren), iets DENK (Overtuigen) of iets LEUK vind (Amuseren)?",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Een recept begint vaak met 'Je hebt nodig:'. Dat is een signaal voor Instrueren.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Recept-signalen",
              uitleg: "Lijstje 'je hebt nodig' + stappen in volgorde = Instrueren.",
            },
          ],
          niveaus: {
            basis: "Recept = Instrueren.",
            simpeler: "Een recept vertelt welke stappen je moet doen. Dat is de I van OBIA.",
            nogSimpeler: "Stappen = I",
          },
        },
      },
      {
        q: "Wat is het **tekstdoel** van een **mop** in een moppenboek?",
        options: ["Amuseren", "Instrueren", "Informeren", "Overtuigen"],
        answer: 0,
        wrongHints: [null, null, "Leer je van een mop vooral nieuwe feiten?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Mop = lachen",
              tekst: "Een mop is bedoeld om je te laten lachen. Doel = Amuseren.",
            },
          ],
          woorden: [
            {
              woord: "amuseren",
              uitleg: "Zorgen dat je lacht of ergens van geniet.",
            },
            {
              woord: "OBIA",
              uitleg: "Overtuigen / Beschrijven (informeren) / Instrueren / Amuseren — de 4 tekstdoelen.",
            },
          ],
          theorie: "Hulpvraag: wil de schrijver dat ik iets DOE (Instrueren), iets WEET (Informeren), iets DENK (Overtuigen) of iets LEUK vind (Amuseren)?",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Gedichten, verhalen en moppen horen vaak bij Amuseren.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Amuseren",
              uitleg: "De schrijver wil dat jij plezier hebt.",
            },
          ],
          niveaus: {
            basis: "Mop = Amuseren.",
            simpeler: "Waarom lees je een mop? Om te lachen. Dat is Amuseren.",
            nogSimpeler: "Lachen = A",
          },
        },
      },
      {
        q: "Iemand schrijft een **ingezonden brief** in de krant: *'De speeltuin moet open blijven!'* Wat is het tekstdoel?",
        options: ["Overtuigen", "Instrueren", "Amuseren", "Informeren"],
        answer: 0,
        wrongHints: [
          null,
          null,
          null,
          "Geeft de schrijver alleen feiten, of wil hij dat jij het met hem eens bent?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Ingezonden brief = mening",
              tekst: "De schrijver vindt iets en wil dat de lezers het met hem eens zijn. Doel = Overtuigen.",
            },
          ],
          woorden: [
            {
              woord: "ingezonden brief",
              uitleg: "Brief van een lezer die in de krant wordt afgedrukt.",
            },
            {
              woord: "OBIA",
              uitleg: "Overtuigen / Beschrijven (informeren) / Instrueren / Amuseren — de 4 tekstdoelen.",
            },
          ],
          theorie: "Hulpvraag: wil de schrijver dat ik iets DOE (Instrueren), iets WEET (Informeren), iets DENK (Overtuigen) of iets LEUK vind (Amuseren)?",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'De speeltuin moet open blijven!' is een mening, geen feit.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Overtuigen",
              uitleg: "Reclame, opiniestuk en ingezonden brief willen dat je iets denkt of doet.",
            },
          ],
          niveaus: {
            basis: "Ingezonden brief = Overtuigen.",
            simpeler: "De schrijver wil dat jij ook vindt dat de speeltuin open moet blijven. Dat is Overtuigen.",
            nogSimpeler: "Mening = O",
          },
        },
      },
      {
        q: "Volgens de toets-truc: waar vind je het **tekstdoel** meestal?",
        options: [
          "In de eerste en de laatste zin",
          "In de langste zin",
          "Midden in de tekst",
          "In de kleinste letters",
        ],
        answer: 0,
        wrongHints: [null, "Hoe lang een zin is, zegt dat iets over het doel?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Begin en eind",
              tekst: "Lees de eerste én de laatste zin. Reclame eindigt bijvoorbeeld met 'koop nu' en een recept begint met 'je hebt nodig'.",
            },
          ],
          woorden: [
            {
              woord: "tekstdoel",
              uitleg: "Waarom de schrijver de tekst schreef.",
            },
          ],
          theorie: "Toets-truc: eerste + laatste zin verraden meestal het doel.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Laatste zin 'Bestel vandaag nog!' → Overtuigen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Snel werken",
              uitleg: "Met deze truc hoef je niet alles twee keer te lezen.",
            },
          ],
          niveaus: {
            basis: "Eerste en laatste zin.",
            simpeler: "Het doel staat meestal aan het begin of aan het eind. Lees die zinnen goed.",
            nogSimpeler: "Begin + eind",
          },
        },
      },
    ],
  },

  // ─── B. Brief & e-mail ─────────────────────────────────────
  {
    title: "Brief & e-mail — formeel of informeel?",
    explanation:
      "Een **brief** of **e-mail** schrijven is een toetsvraag-favoriet. Belangrijk: kies de **juiste toon** (register).\n\n**Formeel** = beleefd, voor mensen die je NIET goed kent (bv. juf, gemeente, bedrijf).\n• Aanhef: *Geachte heer / mevrouw* of *Beste meneer/mevrouw [achternaam]*.\n• U-vorm: *u*, *uw*.\n• Afsluiting: *Met vriendelijke groet, [voornaam achternaam]*.\n\n**Informeel** = vrij, voor familie/vrienden.\n• Aanhef: *Hoi / Hallo [voornaam]*.\n• Je-vorm: *je*, *jouw*.\n• Afsluiting: *Groetjes, [voornaam]* of *Doei, [voornaam]*.\n\n**Toets-valkuilen**:\n• 'Beste' kan formeel of informeel zijn — kijk naar wat erna komt (achternaam = formeel, voornaam = informeel).\n• Een e-mail aan de docent gebruikt **u-vorm** ook al ben je een kind.\n• Geen smileys of afkortingen in formele post.",
    checks: [
      {
        q: "Je schrijft de **gemeente** voor een vraag. Welke aanhef past?",
        options: ["Geachte heer/mevrouw","Hoi","Beste vrienden","Hé daar"],
        answer: 0,
        wrongHints: [null, "Niet — gemeente is een formele instantie.", "Niet — je kent ze niet persoonlijk.", "Niet — niet beleefd genoeg voor instantie."],
        uitlegPad: {
          stappen: [{ titel: "Gemeente = formeel", tekst: "De gemeente is een **instantie** — geen vriend, geen familie. Bij instanties: altijd **formeel**. Aanhef: **'Geachte heer/mevrouw'** (zonder naam als je 'm niet weet) of 'Geachte mevrouw De Vries' (als je de naam weet)." }],
          woorden: [{ woord: "formeel", uitleg: "Beleefd, voor mensen die je niet goed kent." }, { woord: "instantie", uitleg: "Officiële organisatie (gemeente, school, bedrijf)." }],
          theorie: "Test: ken ik deze persoon? Nee → formeel. Twijfel? → formeel (kan geen kwaad).",
          voorbeelden: [{ type: "controle", tekst: "Brief aan de schooldirecteur → 'Geachte mevrouw [naam]'. Brief aan beste vriend → 'Hoi Tim'." }],
          basiskennis: [{ onderwerp: "Veilig kiezen", uitleg: "Bij twijfel altijd 'Geachte heer/mevrouw' — fout maken kan amper." }],
          niveaus: { basis: "Gemeente = formeel = Geachte.", simpeler: "Gemeente is geen vriend — schrijf beleefd: 'Geachte heer/mevrouw'.", nogSimpeler: "Formeel = Geachte." },
        },
      },
      {
        q: "In een formele brief: welk woord gebruik je voor **'jij'**?",
        options: ["u","jij","jouw","je"],
        answer: 0,
        wrongHints: [null, "Niet — 'jij' is informeel.", "Bezittelijk + niet de juiste vorm.", "Niet — 'je' is informeel."],
        uitlegPad: {
          stappen: [{ titel: "Formeel = U-vorm", tekst: "In formele brieven: 'u' (onderwerp) en 'uw' (bezit). Bv. 'Ik schrijf u over uw besluit'. Niet 'jij' of 'je'." }],
          woorden: [{ woord: "U-vorm", uitleg: "Beleefde aanspreekvorm in NL: u (jij) en uw (jouw)." }],
          theorie: "Toets-regel: formele brief → altijd u/uw. Informele brief → je/jouw of jij.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Formeel: 'Hoe gaat het met u?' Informeel: 'Hoe gaat het met jou?'" }],
          basiskennis: [{ onderwerp: "Kleine letter u", uitleg: "In brieven schrijf je 'u' altijd met een kleine letter. Alleen in religieuze teksten (voor God) zie je een hoofdletter U." }],
          niveaus: { basis: "Formeel = u.", simpeler: "Beleefd → u en uw (niet jij/je).", nogSimpeler: "U-vorm = formeel." },
        },
      },
      {
        q: "Welke afsluiting hoort bij een **informele** e-mail aan je oma?",
        options: ["Groetjes, Sam","Met vriendelijke groet, S. de Boer","Hoogachtend","Beste"],
        answer: 0,
        wrongHints: [null, "Te formeel — oma is familie.", "Veel te formeel — alleen voor zakelijke brief.", "Dat is een aanhef, geen afsluiting."],
        uitlegPad: {
          stappen: [{ titel: "Oma = informeel", tekst: "Oma is familie → informele toon → 'Groetjes' is perfect. 'Met vriendelijke groet' klinkt te afstandelijk voor oma." }],
          woorden: [{ woord: "afsluiting", uitleg: "Hoe je de brief eindigt vóór je naam." }],
          theorie: "Informeel: Groetjes / Doei / Veel liefs. Formeel: Met vriendelijke groet / Hoogachtend.",
          voorbeelden: [{ type: "controle", tekst: "Aan oma: 'Groetjes, Sam'. Aan school: 'Met vriendelijke groet, Sam de Boer'." }],
          basiskennis: [{ onderwerp: "Hoogachtend", uitleg: "Hoogachtend = zeer formeel, voor zakelijke klacht-brieven. Te zwaar voor schoolbrief." }],
          niveaus: { basis: "Oma = informeel = Groetjes.", simpeler: "Familie = vriendelijke toon = 'Groetjes'.", nogSimpeler: "Oma = Groetjes." },
        },
      },
      {
        q: "Welke zin past in een **formele** brief aan de schooldirecteur?",
        options: ["Hierbij wil ik u graag verzoeken om een afspraak.","Hey, kan ik even langskomen?","Ik kom morgen even sjaggelen.","Doei, tot snel!"],
        answer: 0,
        wrongHints: [null, "Veel te informeel — 'hey' is geen formele aanhef.", "'Sjaggelen' is informeel + niet duidelijk.", "Dat is een afsluiting, geen verzoek."],
        uitlegPad: {
          stappen: [{ titel: "Formeel verzoek", tekst: "'Hierbij wil ik u graag verzoeken' is **beleefd**, gebruikt **u-vorm** en heeft een **duidelijk doel** (afspraak). Past bij formele brief aan directeur." }],
          woorden: [{ woord: "verzoeken", uitleg: "Beleefd vragen om iets." }, { woord: "register", uitleg: "Toon van een tekst — formeel of informeel." }],
          theorie: "Formele zinnen: langer, hoffelijker, geen straattaal. 'Hierbij', 'verzoek', 'graag' zijn formele signalen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Formeel: 'Ik zou u graag willen spreken.' Informeel: 'Kan ik je even spreken?'" }],
          basiskennis: [{ onderwerp: "Toets-val", uitleg: "Een te losse zin in formele context → punten aftrek. 'Hey' / 'doei' / afkortingen → mijden." }],
          niveaus: { basis: "Eerste = formeel + beleefd.", simpeler: "'Hierbij...verzoeken...u' = beleefde brief-taal.", nogSimpeler: "Beleefd" },
        },
      },
      {
        q: "*'Beste meneer Janssen, ik schrijf u namens onze klas.'* — wat voor brief is dit?",
        options: ["Formeel","Informeel","Reclame","Gedicht"],
        answer: 0,
        wrongHints: [null, "Niet — 'meneer Janssen' + 'u' = formeel signaal.", "Niet — geen verkoop-tekst.", "Niet — geen kunstig taalgebruik."],
        uitlegPad: {
          stappen: [{ titel: "Signalen herkennen", tekst: "**'Meneer Janssen'** (achternaam) + **'u'** (beleefd) + **'namens onze klas'** (groep, niet persoon) = drie formele signalen. Dus formele brief." }],
          woorden: [{ woord: "namens", uitleg: "In de naam van iemand anders / een groep." }],
          theorie: "Toets-truc: tel formele signalen. Achternaam, u-vorm, beleefde woorden = 3-uit-3 → formeel.",
          voorbeelden: [{ type: "controle", tekst: "Informeel: 'Hoi Piet, ik schrijf je namens m'n klas' (voornaam + 'je')." }],
          basiskennis: [{ onderwerp: "'Beste' is dubbel", uitleg: "'Beste meneer Janssen' = formeel (achternaam). 'Beste Piet' = informeel (voornaam). Het verschil zit in WIE." }],
          niveaus: { basis: "Meneer + u = formeel.", simpeler: "Achternaam + u-vorm + 'namens' = formele brief.", nogSimpeler: "Formeel" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je mailt je **beste vriendin** Lisa. Welke aanhef past?",
        options: ["Hoi Lisa,", "Geachte mevrouw,", "Geachte heer,", "Met vriendelijke groet,"],
        answer: 0,
        wrongHints: [
          null,
          "Schrijf je zo aan iemand die je goed kent?",
          null,
          "Staat dit aan het begin of aan het eind van een brief?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vriendin = informeel",
              tekst: "Lisa ken je goed, dus je schrijft informeel. Informele aanhef: Hoi of Hallo + voornaam.",
            },
          ],
          woorden: [
            {
              woord: "informeel",
              uitleg: "Vrij en gewoon, voor familie en vrienden.",
            },
            {
              woord: "aanhef",
              uitleg: "De eerste regel waarmee je iemand aanspreekt.",
            },
          ],
          theorie: "Formeel = mensen die je niet goed kent. Informeel = familie en vrienden.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'Hoi opa,' of 'Hallo Sam,' zijn informele aanheffen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Afsluiting",
              uitleg: "'Met vriendelijke groet' komt aan het eind, niet aan het begin.",
            },
          ],
          niveaus: {
            basis: "Vriendin = Hoi Lisa.",
            simpeler: "Lisa is je vriendin. Dan begin je gewoon met 'Hoi Lisa,'.",
            nogSimpeler: "Hoi",
          },
        },
      },
      {
        q: "Welke afsluiting past bij een **formele** brief aan een bedrijf?",
        options: [
          "Met vriendelijke groet, Noor Bakker",
          "Groetjes en tot snel, Noor",
          "Liefs en een knuffel, Noor",
          "Doei doei, je Noor",
        ],
        answer: 0,
        wrongHints: [null, "Schrijf je 'groetjes' aan iemand die je niet kent?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Formele afsluiting",
              tekst: "Een bedrijf ken je niet persoonlijk. Je sluit af met 'Met vriendelijke groet' en je voor- en achternaam.",
            },
          ],
          woorden: [
            {
              woord: "formeel",
              uitleg: "Beleefd, voor mensen die je niet goed kent.",
            },
            {
              woord: "afsluiting",
              uitleg: "De groet aan het eind van een brief.",
            },
          ],
          theorie: "Formeel: Met vriendelijke groet + voor- en achternaam. Informeel: Groetjes of Doei + voornaam.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Met vriendelijke groet, Sam de Vries.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Achternaam",
              uitleg: "Bij formele post zet je je hele naam eronder.",
            },
          ],
          niveaus: {
            basis: "Bedrijf = Met vriendelijke groet.",
            simpeler: "Een bedrijf ken je niet. Dan schrijf je beleefd: Met vriendelijke groet + je hele naam.",
            nogSimpeler: "Netjes",
          },
        },
      },
      {
        q: "*'Beste Sanne, kom je zaterdag op mijn feestje?'* Wat voor bericht is dit?",
        options: ["Informeel", "Formeel", "Reclame", "Handleiding"],
        answer: 0,
        wrongHints: [null, "Kijk wat er na 'Beste' komt: een voornaam of een achternaam?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Beste + voornaam",
              tekst: "'Beste' kan formeel of informeel zijn. Hier staat een voornaam (Sanne) en 'je'. Dus informeel.",
            },
          ],
          woorden: [
            {
              woord: "informeel",
              uitleg: "Vrij, voor familie en vrienden.",
            },
            {
              woord: "register",
              uitleg: "De toon van je tekst: formeel of informeel.",
            },
          ],
          theorie: "'Beste' + achternaam = formeel. 'Beste' + voornaam = informeel.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'Beste meneer Jansen' = formeel. 'Beste Sanne' = informeel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Je-vorm",
              uitleg: "'Kom je' is de je-vorm. Ook dat past bij informeel.",
            },
          ],
          niveaus: {
            basis: "Voornaam = informeel.",
            simpeler: "Er staat 'Sanne', een voornaam, en 'je'. Dan is het informeel.",
            nogSimpeler: "Sanne = informeel",
          },
        },
      },
      {
        q: "Je schrijft een **formele** e-mail aan de juf. Welke zin past daarin?",
        options: [
          "Kunt u mij het huiswerk sturen?",
          "Kun jij me het huiswerk even sturen?",
          "Stuur je me ff het huiswerk? 😊",
          "Hé, huiswerk sturen, oké?",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Welke vorm gebruik je in een formele e-mail: jij of u?",
          "Horen afkortingen en smileys in formele post?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "U-vorm",
              tekst: "In een formele e-mail gebruik je de u-vorm, ook al ben je een kind. Geen smileys of afkortingen.",
            },
          ],
          woorden: [
            {
              woord: "u-vorm",
              uitleg: "Beleefd aanspreken met u en uw.",
            },
          ],
          theorie: "Formeel: u, uw, beleefde zinnen. Informeel: je, jij, jouw.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'Wilt u mij helpen?' is formeel. 'Wil je me helpen?' is informeel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geen smileys",
              uitleg: "Smileys en afkortingen zoals 'ff' horen niet in formele post.",
            },
          ],
          niveaus: {
            basis: "Formeel = u.",
            simpeler: "In een formele e-mail schrijf je 'u', zonder smileys of afkortingen.",
            nogSimpeler: "u",
          },
        },
      },
      {
        q: "Wat hoort **niet** in een formele brief?",
        options: ["Smileys en afkortingen", "De u-vorm", "Een beleefde aanhef", "Je voor- en achternaam"],
        answer: 0,
        wrongHints: [null, "Gebruik je in een formele brief 'u' of niet?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Formeel = netjes",
              tekst: "In formele post schrijf je beleefd en netjes: u-vorm, beleefde aanhef, hele naam. Smileys en afkortingen horen er niet in.",
            },
          ],
          woorden: [
            {
              woord: "formeel",
              uitleg: "Beleefd, voor mensen die je niet goed kent.",
            },
          ],
          theorie: "Formele brief: Geachte heer/mevrouw … u/uw … Met vriendelijke groet + hele naam.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Fout in een formele brief: 'Ik kom ff langs 😊'.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Afkortingen",
              uitleg: "'ff' (even) of 'mvg' schrijf je in formele post voluit.",
            },
          ],
          niveaus: {
            basis: "Geen smileys of afkortingen.",
            simpeler: "Formeel is netjes. Smileys en afkortingen zijn juist niet netjes.",
            nogSimpeler: "Geen 😊",
          },
        },
      },
    ],
  },

  // ─── C. Samenvatten ────────────────────────────────────────
  {
    title: "Samenvatten — hoofdgedachte vinden",
    explanation:
      "**Samenvatten** = de tekst korter maken zonder belangrijke info te verliezen. Vaak getoetst.\n\n**Stappenplan samenvatten (Toets-truc)**:\n1. Lees de hele tekst.\n2. Vind de **hoofdgedachte** — wat is de **belangrijkste boodschap**? (vaak in eerste/laatste alinea)\n3. Per alinea: wat is de **kern-zin**? (vaak de eerste zin)\n4. Schrijf de hoofdgedachte + kern-zinnen in eigen woorden.\n5. Lengte = **20-30%** van de oorspronkelijke tekst.\n\n**Wat WEGLATEN**:\n• Voorbeelden ('zoals bijvoorbeeld...').\n• Details (datums, getallen tenzij heel belangrijk).\n• Herhalingen.\n• Mening van de schrijver (tenzij hoofdpunt).\n\n**Toets-signaalwoorden voor hoofdgedachte**:\n• 'Dit betekent dat...', 'Kort gezegd...', 'Conclusie:', 'Het komt erop neer dat...'.\n• Vaak in **laatste alinea** of vlak voor 'kortom'.\n\n**Veel-voorkomende fout**: de eerste zin van de tekst klakkeloos overnemen. Niet altijd is de eerste zin de hoofdgedachte.",
    checks: [
      {
        q: "Wat is de **eerste stap** bij samenvatten van een tekst?",
        options: ["De hele tekst lezen","Direct sleutelwoorden onderstrepen","Beginnen met schrijven","De titel kopiëren"],
        answer: 0,
        wrongHints: [null, "Te vroeg — eerst weten waar de tekst over gaat.", "Niet — eerst kijken, dan schrijven.", "Niet — titel is geen samenvatting."],
        uitlegPad: {
          stappen: [{ titel: "Eerst lezen, dan begrijpen", tekst: "Toets-regel #1: **lees de hele tekst** voor je samenvat. Anders mis je context. Pas DAARNA onderstreep je kern-zinnen." }],
          woorden: [{ woord: "samenvatten", uitleg: "Tekst korter maken, alleen kern-info bewaren." }],
          theorie: "Vijf-stappen-plan: 1) lezen, 2) hoofdgedachte vinden, 3) kern-zinnen markeren, 4) eigen woorden, 5) check op lengte 20-30%.",
          voorbeelden: [{ type: "controle", tekst: "Tekst van 500 woorden → samenvatting 100-150 woorden." }],
          basiskennis: [{ onderwerp: "Niet-skippen", uitleg: "Veel leerlingen slaan stap 1 over — kost punten op de Doorstroomtoets." }],
          niveaus: { basis: "Eerst lezen.", simpeler: "Stap 1 van samenvatten = hele tekst lezen.", nogSimpeler: "Eerst lezen." },
        },
      },
      {
        q: "Welk woord wijst vaak op de **hoofdgedachte** in de laatste alinea?",
        options: ["Kortom","Verder","Bijvoorbeeld","Misschien"],
        answer: 0,
        wrongHints: [null, "Niet — 'verder' voegt iets toe, geen samenvatting.", "Niet — voorbeelden zijn juist details.", "Twijfel-woord — geen conclusie."],
        uitlegPad: {
          stappen: [{ titel: "Signaalwoorden van conclusie", tekst: "**'Kortom', 'concluderend', 'dit betekent dat', 'samenvattend', 'al met al'** → altijd: de schrijver geeft de **hoofdgedachte**. Pak meteen die zin." }],
          woorden: [{ woord: "signaalwoord", uitleg: "Woord dat aankondigt wat er komt (conclusie, voorbeeld, tegenstelling)." }],
          theorie: "Toets-leesstrategie: scan op signaalwoorden VOOR je grondig leest. Levert hoofdgedachte snel.",
          voorbeelden: [{ type: "controle", tekst: "'Kortom, sporten is goed voor je gezondheid.' = hoofdgedachte." }],
          basiskennis: [{ onderwerp: "Niet alle signaalwoorden zijn conclusie", uitleg: "'Bijvoorbeeld' = voorbeeld-signaal. 'Maar' = tegenstelling-signaal. 'Want' = reden-signaal." }],
          niveaus: { basis: "Kortom = conclusie.", simpeler: "'Kortom' kondigt hoofdgedachte aan.", nogSimpeler: "Kortom" },
        },
      },
      {
        q: "Wat hoort NIET in een samenvatting?",
        options: ["Voorbeelden uit de tekst","De hoofdgedachte","Kern-zinnen per alinea","Conclusie"],
        answer: 0,
        wrongHints: [null, "Hoort wel — dat IS de essentie.", "Hoort wel — kern-zinnen vormen de samenvatting.", "Hoort wel — conclusie is vaak hoofdgedachte."],
        uitlegPad: {
          stappen: [{ titel: "Voorbeelden = details, niet kern", tekst: "Voorbeelden zoals 'zoals bijvoorbeeld katten en honden' zijn **illustratie** — leuk om de tekst-lezer te helpen, maar niet de **kern**. In samenvatting laat je ze WEG." }],
          woorden: [{ woord: "voorbeeld", uitleg: "Concreet geval ter illustratie van een algemene regel." }],
          theorie: "Wel: hoofdgedachte, kern-zinnen, conclusie. Niet: voorbeelden, details, herhaling, mening (tenzij belangrijk).",
          voorbeelden: [{ type: "controle", tekst: "Tekst: 'Honden zijn lief, zoals bv. labradors en herders.' Samenvatting: 'Honden zijn lief.' (zonder de voorbeelden)." }],
          basiskennis: [{ onderwerp: "Lengte-check", uitleg: "Goede samenvatting = ~25% van origineel. Te lang? Voorbeelden weghalen helpt." }],
          niveaus: { basis: "Voorbeelden weglaten.", simpeler: "Samenvatting = kern, niet details. Voorbeelden = details = weg.", nogSimpeler: "Voorbeelden weg." },
        },
      },
      {
        q: "Hoe lang moet een goede samenvatting zijn ten opzichte van de tekst?",
        options: ["20-30% van de tekst","Even lang","Maar 1 zin","Twee keer zo lang"],
        answer: 0,
        wrongHints: [null, "Niet — dan vat je niet samen.", "Vaak te kort — kern + sleutelpunten zijn meer dan 1 zin.", "Niet — een samenvatting is altijd korter dan het origineel."],
        uitlegPad: {
          stappen: [{ titel: "Vuistregel 25%", tekst: "Een Toets-samenvatting = ongeveer **20-30%** van de oorspronkelijke tekst. Bv. 500 woorden tekst → 100-150 woorden samenvatting. Korter? Te weinig info. Langer? Geen samenvatting meer." }],
          woorden: [{ woord: "vuistregel", uitleg: "Algemene richtlijn die meestal klopt." }],
          theorie: "Toets-tip: tel woorden. Past je samenvatting niet in 20-30%? Schrap voorbeelden en details.",
          voorbeelden: [{ type: "controle", tekst: "300-woord tekst → ~75 woord samenvatting." }],
          basiskennis: [{ onderwerp: "Niet te kort", uitleg: "1 zin = geen samenvatting, maar slogan. Verlies van nuance." }],
          niveaus: { basis: "20-30%.", simpeler: "Vuistregel: een kwart van origineel.", nogSimpeler: "Korter, maar niet té." },
        },
      },
      {
        q: "Tekst over gezond eten eindigt: *'Kortom, groente en fruit zijn de basis van een gezonde voeding.'* Wat is de hoofdgedachte?",
        options: ["Groente en fruit zijn de basis van gezonde voeding","Iedereen moet ananas eten","Eten kost veel geld","Sport is belangrijk"],
        answer: 0,
        wrongHints: [null, "Niet — dat is een specifiek voorbeeld, niet de hoofdgedachte.", "Niet — de tekst gaat niet over geld.", "Niet — niet het onderwerp van deze tekst."],
        uitlegPad: {
          stappen: [{ titel: "Conclusie-zin = hoofdgedachte", tekst: "De zin **direct na 'Kortom'** is de hoofdgedachte. 'Groente en fruit zijn de basis van een gezonde voeding' = exact dat. Geen interpretatie nodig — gewoon kopiëren." }],
          woorden: [{ woord: "hoofdgedachte", uitleg: "De belangrijkste boodschap van de tekst — alles draait hierom." }],
          theorie: "Toets-strategie: zoek 'kortom' / 'concluderend' / 'het komt erop neer dat' → de zin erna is je hoofdgedachte.",
          voorbeelden: [{ type: "controle", tekst: "'Concluderend: lezen vergroot je woordenschat.' → hoofdgedachte = 'Lezen vergroot je woordenschat'." }],
          basiskennis: [{ onderwerp: "Geen interpretatie", uitleg: "Bij conclusie-zinnen niet zelf woorden veranderen. Letterlijk overnemen." }],
          niveaus: { basis: "De conclusie-zin.", simpeler: "Na 'kortom' staat de hoofdgedachte.", nogSimpeler: "Kortom-zin = hoofdgedachte" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "*'Honden zijn fijne huisdieren. Ze zijn trouw en spelen graag. Mijn hond Bobby haalt bijvoorbeeld de krant. Ook passen ze goed op het huis.'* Welke zin laat je **weg** in een samenvatting?",
        options: [
          "Mijn hond Bobby haalt bijvoorbeeld de krant.",
          "Honden zijn fijne huisdieren.",
          "Ze zijn trouw en spelen graag.",
          "Ook passen ze goed op het huis.",
        ],
        answer: 0,
        wrongHints: [null, "Dit is waar de hele tekst over gaat. Laat je dat weg?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Voorbeelden weglaten",
              tekst: "In een samenvatting laat je voorbeelden weg. Het woord 'bijvoorbeeld' verraadt de voorbeeld-zin.",
            },
          ],
          woorden: [
            {
              woord: "samenvatting",
              uitleg: "Korte versie van een tekst met alleen het belangrijkste.",
            },
          ],
          theorie: "Weglaten: voorbeelden, details, herhalingen.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Samenvatting: Honden zijn fijne huisdieren: ze zijn trouw, spelen graag en passen op het huis.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Signaalwoord",
              uitleg: "'Bijvoorbeeld' of 'zoals' = er komt een voorbeeld.",
            },
          ],
          niveaus: {
            basis: "Weg: de zin met 'bijvoorbeeld'.",
            simpeler: "Zoek het woord 'bijvoorbeeld'. Die zin is een voorbeeld, en voorbeelden laat je weg.",
            nogSimpeler: "Bobby weg",
          },
        },
      },
      {
        q: "Welke fout maken veel leerlingen bij samenvatten?",
        options: [
          "De eerste zin zomaar overnemen",
          "De hoofdgedachte opschrijven",
          "Eerst de hele tekst lezen",
          "Voorbeelden weglaten",
        ],
        answer: 0,
        wrongHints: [null, "Hoort de hoofdgedachte juist wél in een samenvatting?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerste zin is niet altijd de kern",
              tekst: "Veel kinderen nemen de eerste zin over. Maar de hoofdgedachte staat niet altijd vooraan; vaak staat hij in de laatste alinea.",
            },
          ],
          woorden: [
            {
              woord: "hoofdgedachte",
              uitleg: "De belangrijkste boodschap van de tekst.",
            },
          ],
          theorie: "Schrijf de hoofdgedachte en kern-zinnen in eigen woorden op.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Een tekst begint met 'Gisteren zag ik een egel.' Dat is niet de hoofdgedachte.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Goed gedaan",
              uitleg: "Hele tekst lezen, hoofdgedachte opschrijven en voorbeelden weglaten zijn juist goede stappen.",
            },
          ],
          niveaus: {
            basis: "Fout: eerste zin zomaar overnemen.",
            simpeler: "De eerste zin is niet altijd het belangrijkste. Zoek de hoofdgedachte in de hele tekst.",
            nogSimpeler: "Niet kopiëren",
          },
        },
      },
    ],
  },

  // ─── D. Opinie & argumentatie ──────────────────────────────
  {
    title: "Opinie geven — argumenten onderbouwen",
    explanation:
      "Een **mening** geven kan iedereen. Een **opinie met argumenten onderbouwen** is moeilijker — en precies wat de toets test.\n\n**Verschil**:\n• **Mening** = wat je vindt. 'Ik vind aardrijkskunde leuk.'\n• **Argument** = REDEN waarom je dat vindt. 'Aardrijkskunde is leuk **omdat** je over verre landen leert.'\n• **Voorbeeld** = concreet geval dat argument ondersteunt. '...Bijvoorbeeld: ik wist niet dat IJsland 30 actieve vulkanen heeft.'\n\n**Argument-soorten (Doorstroomtoets groep 7-8)**:\n• **Feit-argument**: '...want uit onderzoek blijkt dat 80% van de kinderen het leuk vindt.'\n• **Voorbeeld-argument**: '...want toen ik laatst over Japan leerde, was iedereen geïnteresseerd.'\n• **Gevoel-argument**: '...want ik voel me trots als ik veel hoofdsteden weet.' (zwakste — alleen jij voelt zo).\n• **Autoriteit-argument**: '...want de meester zegt dat AK belangrijk is.' (matig — iemand zégt het alleen).\n\n**Toets-truc opbouw opiniestuk**:\n1. Onderwerp + mening (1 zin)\n2. 2-3 argumenten met voorbeeld\n3. Tegenargument noemen + weerleggen ('Sommigen denken dat... maar...')\n4. Slot-zin = je mening herhalen\n\n**Drogredenen** (= foute argumenten, valstrik in de Doorstroomtoets):\n• Persoonlijke aanval ('Jij hebt ongelijk omdat je dom bent').\n• Generaliseren ('Iedereen vindt het leuk').\n• Vals dilemma ('Of jij stemt voor, of je bent tegen kinderen').",
    checks: [
      {
        q: "*'Ik vind voetbal de mooiste sport, want het houdt je gezond.'* Welk argument-soort?",
        options: ["Feit","Voorbeeld","Gevoel","Autoriteit"],
        answer: 0,
        wrongHints: [null, "Geen concreet geval — algemeen 'gezond houden'.", "'Gezond' is bewijsbaar in onderzoek, geen alleen-gevoel.", "Geen expert wordt aangehaald."],
        uitlegPad: {
          stappen: [{ titel: "Bewijsbaar = feit", tekst: "'Voetbal houdt je gezond' is **bewijsbaar** via onderzoek/cijfers. Dus feit-argument — sterk type. Beter dan 'omdat ik het leuk vind' (gevoel)." }],
          woorden: [{ woord: "argument", uitleg: "Reden achter een mening." }],
          theorie: "Sterkste argumenten: feit > voorbeeld > autoriteit > gevoel. De toets waardeert feit/voorbeeld het meest.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Feit: 'De WHO raadt kinderen 60 minuten beweging per dag aan' → te controleren." }],
          basiskennis: [{ onderwerp: "Bewijsbaarheid", uitleg: "Feit = kan worden gecheckt. Gevoel = alleen jouw beleving." }],
          niveaus: { basis: "Gezond = bewijsbaar = feit.", simpeler: "'Gezond' kun je meten → feit-argument.", nogSimpeler: "Bewijsbaar = feit" },
        },
      },
      {
        q: "*'Iedereen weet dat broccoli vies is.'* — welke drogreden?",
        options: ["Generaliseren","Persoonlijke aanval","Vals dilemma","Goed argument"],
        answer: 0,
        wrongHints: [null, "Geen aanval op een persoon.", "Geen of-of-keuze.", "Niet — dit is juist een fout argument."],
        uitlegPad: {
          stappen: [{ titel: "'Iedereen weet' = generaliseren", tekst: "'Iedereen' = **iedereen ter wereld**? Nee. Dit is een **generalisatie** — een uitspraak alsof alles voor iedereen geldt. Drogreden — Toets-val." }],
          woorden: [{ woord: "drogreden", uitleg: "Foute reden — lijkt logisch maar is het niet." }, { woord: "generaliseren", uitleg: "Iets over 'iedereen' zeggen zonder bewijs." }],
          theorie: "Let op: 'iedereen', 'alle mensen', 'niemand', 'altijd', 'nooit' → drogreden-signalen.",
          voorbeelden: [{ type: "voorbeeld", tekst: "'Alle kinderen houden van pizza' → niet waar — er zijn kinderen die geen pizza lusten." }],
          basiskennis: [{ onderwerp: "Test", uitleg: "Vraag: ken ik 1 voorbeeld dat tégen deze uitspraak ingaat? Zo ja → generalisatie." }],
          niveaus: { basis: "'Iedereen' = generaliseren.", simpeler: "'Iedereen weet' is geen bewijs — drogreden.", nogSimpeler: "Iedereen" },
        },
      },
      {
        q: "Welke zin is een **voorbeeld-argument** voor 'lezen is belangrijk'?",
        options: ["Ik las laatst een boek over de oceaan en weet nu wat plankton is.","Ik vind lezen het allerleukste wat er is om te doen.","Mijn juf zegt altijd dat lezen heel belangrijk is voor later.","Iedereen in de hele wereld leest elke dag een boek."],
        answer: 0,
        wrongHints: [null, "Dat is een mening, geen voorbeeld.", "Dat is autoriteit-argument (juf zegt).", "Dat is generaliseren — drogreden."],
        uitlegPad: {
          stappen: [{ titel: "Voorbeeld = concreet geval", tekst: "Een voorbeeld-argument geeft een **specifieke ervaring**: 'Ik las... over... en leerde...'. Dat is sterker dan 'lezen is leuk' (mening) of 'iedereen leest' (drogreden)." }],
          woorden: [{ woord: "voorbeeld-argument", uitleg: "Bewijs uit een concrete situatie." }],
          theorie: "Toets-tip: een voorbeeld-argument begint vaak met 'Ik las...', 'Laatst zag ik...', 'Bij ons in de klas...'.",
          voorbeelden: [{ type: "controle", tekst: "Goed voorbeeld: 'Door mijn dyslexie vond ik lezen lastig, maar met de juiste hulp lukt het nu wel.'" }],
          basiskennis: [{ onderwerp: "Persoonlijk maar concreet", uitleg: "Voorbeeld-argument = jouw ervaring met FEITEN. Niet alleen je gevoel." }],
          niveaus: { basis: "Concrete ervaring = voorbeeld.", simpeler: "Boek + plankton geleerd = voorbeeld.", nogSimpeler: "Eigen ervaring" },
        },
      },
      {
        q: "Bij een goed opiniestuk: wat doe je met een **tegenargument**?",
        options: ["Noemen + weerleggen","Negeren","Voor jezelf houden","Bevestigen en stoppen"],
        answer: 0,
        wrongHints: [null, "Niet — je stuk wordt juist sterker als je het noemt.", "Niet — dan ziet de lezer niet dat je 'm hebt overwogen.", "Niet — dan verlies je je eigen punt."],
        uitlegPad: {
          stappen: [{ titel: "Tegenargument toelaten = sterker", tekst: "Toets-truc: noem de **tegenargumenten** ('Sommigen denken dat...'), **weerleg** ze ('...maar dat klopt niet omdat...'), en kom terug naar jouw mening. Dat toont dat je doordenkt." }],
          woorden: [{ woord: "weerleggen", uitleg: "Tegenargument onderuit halen met bewijs." }],
          theorie: "Opbouw opiniestuk: mening → 2-3 argumenten → tegenargument + weerlegging → herhaalde mening (slot).",
          voorbeelden: [{ type: "voorbeeld", tekst: "'Sommigen vinden een schooluniform saai, maar het voorkomt dat kinderen om hun kleren gepest worden.'" }],
          basiskennis: [{ onderwerp: "Niet drogreden-weerlegging", uitleg: "Weerleg met FEIT/voorbeeld, niet met 'jij hebt ongelijk' (= persoonlijke aanval-drogreden)." }],
          niveaus: { basis: "Noemen + weerleggen.", simpeler: "'Sommigen denken... MAAR...' = sterke opbouw.", nogSimpeler: "Weerleggen" },
        },
      },
      {
        q: "*'Of je bent VOOR een uniform op school, of je bent tegen vrijheid.'* — drogreden?",
        options: ["Vals dilemma","Generaliseren","Persoonlijke aanval","Goed argument"],
        answer: 0,
        wrongHints: [null, "Geen 'iedereen-uitspraak' — wel een nep-keuze.", "Geen aanval op een persoon.", "Niet — wel degelijk een drogreden."],
        uitlegPad: {
          stappen: [{ titel: "Vals dilemma = nep-keuze", tekst: "Deze zin zegt: óf A, óf B. Er is geen middenweg. Maar in werkelijkheid kun je tégen uniformen zijn ÉN voor vrijheid (= optie 3). Dat is een **vals dilemma**." }],
          woorden: [{ woord: "vals dilemma", uitleg: "Drogreden: doen alsof er maar 2 keuzes zijn terwijl er meer mogelijk zijn." }],
          theorie: "Signaal: 'óf...óf...', 'wie niet voor is, is tegen', 'er is geen andere optie'. Vaak drogreden.",
          voorbeelden: [{ type: "voorbeeld", tekst: "'Of je bent vegan, of je bent dieronvriendelijk.' → 3e optie: minder vlees eten." }],
          basiskennis: [{ onderwerp: "Test", uitleg: "Kun je een 3e of 4e optie verzinnen? Ja → vals dilemma." }],
          niveaus: { basis: "Of...of zonder middenweg = vals dilemma.", simpeler: "Nep-keuze tussen 2 dingen = vals dilemma.", nogSimpeler: "Vals dilemma" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Mening: *'Ik vind dat we vaker buiten moeten gymmen.'* Welke zin is een **argument** bij deze mening?",
        options: [
          "Want frisse lucht is gezond.",
          "Onze gymzaal heeft blauwe muren.",
          "Gisteren hadden we gym.",
          "Wij gymmen op dinsdag.",
        ],
        answer: 0,
        wrongHints: [null, "Geeft deze zin een reden waarom buiten gymmen beter is?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Argument = reden",
              tekst: "Een argument is de REDEN waarom je iets vindt. Je kunt er 'want' of 'omdat' voor zetten.",
            },
          ],
          woorden: [
            {
              woord: "argument",
              uitleg: "Reden die je mening onderbouwt.",
            },
            {
              woord: "mening",
              uitleg: "Wat je vindt.",
            },
          ],
          theorie: "Mening = wat je vindt. Argument = waarom. Voorbeeld = concreet geval.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'Aardrijkskunde is leuk, omdat je over verre landen leert.'",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Test",
              uitleg: "Past de zin na 'Ik vind dat ..., want ...'? En geeft hij echt een reden?",
            },
          ],
          niveaus: {
            basis: "Argument = reden.",
            simpeler: "Welke zin zegt WAAROM buiten gymmen beter is? Want frisse lucht is gezond.",
            nogSimpeler: "Want ...",
          },
        },
      },
      {
        q: "*'Snoep is slecht voor je tanden, want de tandarts zegt het.'* Welk soort argument is dit?",
        options: ["Autoriteit", "Gevoel", "Voorbeeld", "Vals dilemma"],
        answer: 0,
        wrongHints: [null, "Zegt de schrijver hoe hij zich voelt?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Iemand zegt het",
              tekst: "Het argument is: 'de tandarts zegt het'. Je beroept je op iemand die er veel van weet. Dat heet een autoriteit-argument.",
            },
          ],
          woorden: [
            {
              woord: "autoriteit",
              uitleg: "Iemand die veel van iets weet of de baas is, zoals een dokter of de meester.",
            },
          ],
          theorie: "Argument-soorten: feit, voorbeeld, gevoel, autoriteit. Autoriteit = 'want X zegt het'.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'...want de meester zegt dat het belangrijk is.' → autoriteit.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Matig",
              uitleg: "Een autoriteit-argument is matig: iemand zégt het alleen.",
            },
          ],
          niveaus: {
            basis: "Tandarts zegt het = autoriteit.",
            simpeler: "Wie wordt er genoemd? De tandarts. 'Want iemand zegt het' = autoriteit.",
            nogSimpeler: "Zegt het",
          },
        },
      },
      {
        q: "*'Ik wil een hond, want ik word er heel blij van.'* Welk soort argument is dit?",
        options: ["Gevoel", "Autoriteit", "Feit", "Voorbeeld"],
        answer: 0,
        wrongHints: [null, "Wordt er een deskundige genoemd?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Blij worden = gevoel",
              tekst: "'Ik word er heel blij van' gaat over wat de schrijver voelt. Dat is een gevoel-argument.",
            },
          ],
          woorden: [
            {
              woord: "gevoel-argument",
              uitleg: "Een reden die gaat over hoe jij je voelt.",
            },
          ],
          theorie: "Gevoel-argument is het zwakst: alleen jij voelt zo.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'...want ik voel me trots als ik veel hoofdsteden weet.' → gevoel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Zwak",
              uitleg: "Een ander voelt het misschien niet zo.",
            },
          ],
          niveaus: {
            basis: "Blij = gevoel.",
            simpeler: "'Ik word blij' gaat over een gevoel. Dus is het een gevoel-argument.",
            nogSimpeler: "Voelen",
          },
        },
      },
      {
        q: "*'Luister niet naar Tim, die snapt er toch niks van.'* Welke drogreden is dit?",
        options: ["Persoonlijke aanval", "Vals dilemma", "Generaliseren", "Het is een goed argument"],
        answer: 0,
        wrongHints: [null, "Moet je hier kiezen tussen twee dingen?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Aanval op de persoon",
              tekst: "Er wordt niets gezegd over Tims mening zelf. Er wordt alleen iets naars over Tim gezegd. Dat is een persoonlijke aanval.",
            },
          ],
          woorden: [
            {
              woord: "drogreden",
              uitleg: "Een fout argument dat eerlijk lijkt maar het niet is.",
            },
            {
              woord: "persoonlijke aanval",
              uitleg: "Iemand afkraken in plaats van zijn mening te bespreken.",
            },
          ],
          theorie: "Drogredenen: persoonlijke aanval, generaliseren, vals dilemma.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'Jij hebt ongelijk omdat je dom bent.' → persoonlijke aanval.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Let op",
              uitleg: "Een goed argument gaat over het onderwerp, niet over de persoon.",
            },
          ],
          niveaus: {
            basis: "Tim afkraken = persoonlijke aanval.",
            simpeler: "Gaat het over wat Tim zegt, of over Tim zelf? Over Tim zelf. Dat is een persoonlijke aanval.",
            nogSimpeler: "Aanval",
          },
        },
      },
      {
        q: "Mening: *'Huiswerk is nuttig.'* Welke zin noemt een **tegenargument** én weerlegt het?",
        options: [
          "Sommigen vinden huiswerk saai, maar je leert er veel van.",
          "Huiswerk is altijd saai en daarom is het slecht voor je.",
          "Ik maak mijn huiswerk meestal op maandag na het eten.",
          "Iedereen in mijn klas vindt huiswerk echt heel saai.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Deze zin noemt alleen een tegenargument. Wordt het ook weerlegd?",
          null,
          "Dit is een iedereen-uitspraak. Wordt er iets weerlegd?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Sommigen denken... maar...",
              tekst: "Een tegenargument weerleggen doe je zo: noem wat anderen denken ('Sommigen vinden...') en zeg waarom dat niet klopt ('maar...').",
            },
          ],
          woorden: [
            {
              woord: "tegenargument",
              uitleg: "Een reden die tegen jouw mening ingaat.",
            },
            {
              woord: "weerleggen",
              uitleg: "Laten zien dat iets niet klopt of minder belangrijk is.",
            },
          ],
          theorie: "Opbouw opiniestuk: mening, 2-3 argumenten, tegenargument noemen + weerleggen, slot.",
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "'Sommigen denken dat lezen saai is, maar je leert er nieuwe woorden van.'",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Signaal",
              uitleg: "'Sommigen denken dat ... maar ...' = tegenargument + weerlegging.",
            },
          ],
          niveaus: {
            basis: "Sommigen ... maar ...",
            simpeler: "Je noemt eerst wat anderen vinden, en zegt dan met 'maar' waarom je het er niet mee eens bent.",
            nogSimpeler: "maar",
          },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Eindopdracht — alles samen",
    explanation:
      "Mix van tekstdoelen + brief + samenvatten + opinie. Doorstroomtoets-stijl vragen door elkaar — zoals op de Doorstroomtoets.\n\n**Strategie eindopdracht**:\n• Lees vraag eerst, daarna pas tekstje.\n• Tijdsbudget: ~1 min per meerkeuze-vraag.\n• Twijfel? Sluit eerst de duidelijk foute opties uit.\n• Open vraag? Beantwoord in volledige zinnen.\n\nVeel succes!",
    checks: [
      {
        q: "Welke opbouw past bij een goed **opiniestuk**?",
        options: ["Mening → argumenten → tegenargument-weerleggen → slot","Inleiding → midden → einde zonder mening","Alleen feiten zonder mening","Stappen 1-2-3 zoals een handleiding"],
        answer: 0,
        wrongHints: [null, "Niet — opiniestuk MOET een mening hebben.", "Niet — opiniestuk gaat juist over jouw mening.", "Niet — dat is een handleiding-structuur."],
        uitlegPad: {
          stappen: [{ titel: "Opiniestuk-structuur", tekst: "Goede opbouw: 1) Mening (1 zin); 2) 2-3 argumenten met voorbeeld; 3) Tegenargument noemen + weerleggen; 4) Slot-zin (mening herhalen). De toets kijkt naar deze 4 elementen." }],
          niveaus: { basis: "4 stappen: mening, argumenten, tegen weerleggen, slot.", simpeler: "Opiniestuk = jouw mening + redenen + tegenargument-weerleggen.", nogSimpeler: "Opbouw 1" },
        },
      },
      {
        q: "Hoe begin je een formele e-mail aan iemand wiens **achternaam je niet weet**?",
        options: ["Geachte heer/mevrouw","Hoi","Lieve","Hey"],
        answer: 0,
        wrongHints: [null, "Niet — informeel.", "Niet — 'Lieve' gebruik je voor familie en vrienden.", "Niet — veel te informeel."],
        uitlegPad: {
          stappen: [{ titel: "Algemene formele aanhef", tekst: "Zonder naam → 'Geachte heer/mevrouw' is het veiligste. 'Beste' werkt ook maar minder formeel-genoeg voor instanties." }],
          niveaus: { basis: "Geachte heer/mevrouw.", simpeler: "Naam onbekend + formeel = 'Geachte heer/mevrouw'.", nogSimpeler: "Geachte." },
        },
      },
      {
        q: "Tekst: *'Sport is belangrijk. Het houdt je gezond. Bovendien leer je samenwerken. Tot slot maakt het je vrolijk.'* Wat is de **hoofdgedachte**?",
        options: ["Sport is belangrijk","Sport maakt je vrolijk","Sport is moeilijk","Sporters zijn beter"],
        answer: 0,
        wrongHints: [null, "Dat is 1 argument, niet de hoofdgedachte.", "Niet in de tekst genoemd.", "Niet in de tekst genoemd."],
        uitlegPad: {
          stappen: [{ titel: "Eerste zin = vaak hoofdgedachte", tekst: "'Sport is belangrijk' = de stelling. De zinnen erna geven argumenten (gezond, samenwerken, vrolijk). Hoofdgedachte = de stelling." }],
          niveaus: { basis: "Sport is belangrijk.", simpeler: "Eerste zin = stelling = hoofdgedachte.", nogSimpeler: "Eerste zin." },
        },
      },
      {
        q: "Welk tekstdoel hoort bij een **schoolboek-paragraaf** over de Tweede Wereldoorlog?",
        options: ["Informeren","Overtuigen","Amuseren","Instrueren"],
        answer: 0,
        wrongHints: [null, "Schoolboek geeft geen mening — feiten.", "Niet — niet bedoeld als grap.", "Niet — geen stappen."],
        uitlegPad: {
          stappen: [{ titel: "Schoolboek = feiten", tekst: "Schoolboek-paragraaf geeft feiten (data, mensen, gebeurtenissen). Geen mening, geen reclame, geen stappen. → Informeren." }],
          niveaus: { basis: "Schoolboek = informeren.", simpeler: "Feiten zonder mening = Informeren.", nogSimpeler: "B van OBIA (beschrijven/informeren)." },
        },
      },
      {
        q: "*'Iedereen wil meer huiswerk, dus de school moet het verplichten.'* — wat klopt niet?",
        options: ["Er wordt gegeneraliseerd","De zin is grammaticaal fout","De school heeft geen recht","De zin is te lang"],
        answer: 0,
        wrongHints: [null, "Niet — grammaticaal klopt het.", "Niet de kwestie hier — kijk naar 'iedereen'.", "Niet — lengte is geen probleem."],
        uitlegPad: {
          stappen: [{ titel: "'Iedereen' = drogreden", tekst: "'Iedereen wil meer huiswerk' is een **generalisatie** — niet bewijsbaar (er zijn vast leerlingen die GEEN extra huiswerk willen). Drogreden, Toets-val." }],
          niveaus: { basis: "Iedereen = generaliseren.", simpeler: "'Iedereen' is geen bewijs = drogreden.", nogSimpeler: "Generaliseren" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je schrijft een brief aan **meneer Smit** van de bibliotheek, die je niet kent. Welke aanhef past?",
        options: ["Beste meneer Smit,", "Hoi Smit,", "Hé meneer,", "Lieve Smit,"],
        answer: 0,
        wrongHints: [null, "Begin je zo een brief aan iemand die je niet kent?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Formele aanhef",
              tekst: "Meneer Smit ken je niet, dus je schrijft formeel. 'Beste' + meneer + achternaam is formeel.",
            },
          ],
          niveaus: {
            basis: "Beste meneer Smit.",
            simpeler: "Iemand die je niet kent spreek je beleefd aan: Beste meneer + achternaam.",
            nogSimpeler: "Beleefd",
          },
        },
      },
      {
        q: "Welke zin is een **mening**?",
        options: [
          "Ik vind tekenen het leukste vak.",
          "Amsterdam is de hoofdstad van Nederland.",
          "Een week heeft zeven dagen.",
          "Een jaar heeft twaalf maanden.",
        ],
        answer: 0,
        wrongHints: [null, "Kun je dit nakijken in een boek?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Mening of feit",
              tekst: "Een mening is wat iemand vindt ('ik vind'). Een feit kun je controleren. Een week heeft altijd zeven dagen: dat is een feit.",
            },
          ],
          niveaus: {
            basis: "Ik vind = mening.",
            simpeler: "Zoek de zin met 'ik vind'. Die gaat over wat iemand vindt, niet over iets wat je kunt controleren.",
            nogSimpeler: "Ik vind",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const schrijvenTekstenPo = {
  id: "schrijven-teksten-po",
  title: "Schrijven van teksten (Doorstroomtoets groep 6-8)",
  emoji: "📝",
  level: "groep6-8",
  subject: "taal",
  referentieNiveau: "1F",
  sloThema: "Taal — schrijven van teksten / Doorstroomtoets-onderdeel",
  prerequisites: [
    { id: "woordsoorten-po", title: "Woordsoorten", niveau: "po-1F" },
    { id: "interpunctie-po", title: "Interpunctie & hoofdletters", niveau: "po-1F" },
    { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen-strategie", niveau: "po-1F" },
  ],
  intro:
    "Schrijven voor de Doorstroomtoets — tekstdoelen, brief/e-mail, samenvatten, opinie + drogredenen. 5 stappen × ~5 vragen. ~15 min.",
  triggerKeywords: [
    "schrijven", "tekstdoel", "brief", "email", "e-mail",
    "samenvatten", "hoofdgedachte", "opinie", "argument",
    "drogreden", "formeel", "informeel", "register",
    "OBIA", "overtuigen", "informeren", "instrueren", "amuseren",
    "taalverzorging schrijven",
  ],
  chapters,
  steps,
};

export default schrijvenTekstenPo;
