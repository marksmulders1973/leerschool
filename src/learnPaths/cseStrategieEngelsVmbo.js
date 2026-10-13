// Leerpad: CSE Engels VMBO — strategie + tips
// VMBO-GT eindexamen Engels = uitsluitend leesvaardigheid (CSE schriftelijk).
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  blauw: "#1565c0",
  oranje: "#ef6c00",
  groen: "#00897b",
  rood: "#c62828",
};

const stepEmojis = ["🔍", "❓", "🔑", "⚠️", "🏆"];

const chapters = [
  { letter: "A", title: "Scannen + skim", emoji: "🔍", from: 0, to: 0 },
  { letter: "B", title: "Vraagsoorten herkennen", emoji: "❓", from: 1, to: 1 },
  { letter: "C", title: "Onbekende woorden raden", emoji: "🔑", from: 2, to: 2 },
  { letter: "D", title: "Valstrikken + tips", emoji: "⚠️", from: 3, to: 3 },
  { letter: "E", title: "Examen-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Scannen + skim ────────────────────────────────────
  {
    title: "Scannen + skim — sneller lezen",
    explanation:
      "Het **VMBO-GT-eindexamen Engels** = uitsluitend **leesvaardigheid**. ~40 vragen over ~10-12 teksten in 120 min. Tijdmanagement is alles.\n\n**3 lees-snelheden** (verschillende doelen):\n\n**1. Scan-lezen** (snelste):\n• Zoek 1 specifiek woord/getal/naam.\n• Voorbeeld: 'In which year did X happen?' → scan voor jaar-getallen.\n• Gebruik je oog als spotlight — kijk niet naar alle woorden.\n\n**2. Skim-lezen** (snel):\n• Krijg overzicht: waar gaat de tekst over?\n• Lees: titel + eerste zin elke alinea + laatste zin.\n• Doel: weten welke alinea relevant is voor welke vraag.\n\n**3. Detail-lezen** (langzamer):\n• Lees zin voor zin, begrijp ieder woord.\n• Gebruik alleen voor relevante alinea — niet hele tekst!\n\n**CSE-Engels-strategie**:\n1. **Lees eerst de vragen** (sneak peek).\n2. **Skim de tekst** (1 minuut overzicht).\n3. Per vraag: **scan** naar trefwoord uit vraag → vind relevante alinea → **detail-lees** alleen die alinea.\n4. Niet vastlopen — moeilijke vraag overslaan + later terug.\n\n**Tijdsbudget VMBO-CSE Engels** (120 min, ~40 vragen):\n• ~3 min per vraag gemiddeld (inclusief lezen van de tekst).\n• Eerste tekst-overzicht: ~3 min.\n• Reserveer 10 min op het eind voor terugcheck + open vragen.\n\n**Toets-feit**: meeste leerlingen verliezen punten door **tijdsdruk + onbekende woorden + valstrikken**. Strategie scheelt ~10-15% in score.",
    checks: [
      {
        q: "Welke lees-strategie gebruik je om **1 jaartal** te vinden in een lange tekst?",
        options: ["Scannen", "Skimmen", "Detail-lezen", "Vertalen"],
        answer: 0,
        wrongHints: [null, "Skimmen geeft je snel een overzicht van de hele tekst. Zoek je hier een overzicht, of één los gegeven?", "Detail-lezen doe je pas in de alinea die je nodig hebt. Hoe vind je die alinea met het jaartal snel?", "Vertalen kost veel tijd. Hoe vind je snel één jaartal in een lange tekst?"],
        uitlegPad: {
          stappen: [{ titel: "Scan = specifiek zoeken", tekst: "**Scannen** = oogspotlight zoekt **1 specifiek element**: getal, naam, jaar, datum. Je leest NIET alle woorden — alleen typografisch opvallende elementen. Voor jaartal: zoek 4-cijferige getallen (1900-2030)." }],
          woorden: [{ woord: "scannen", uitleg: "Snel doorzoeken van tekst naar specifieke informatie." }, { woord: "skim", uitleg: "Globaal lezen voor algemene indruk." }],
          theorie: "Toets-tip: bij vraag met getal/jaar in vraagstelling → altijd scan-strategie eerst.",
          niveaus: { basis: "Scannen.", simpeler: "Jaartal zoeken = scannen", nogSimpeler: "Scan" },
        },
      },
      {
        q: "Hoe begin je een **leesvaardigheid-CSE-vraag**?",
        options: ["Lees eerst de vragen, dan skim de tekst", "Lees de hele tekst zorgvuldig vooraf", "Vertaal de tekst eerst woord voor woord", "Zoek eerst alle moeilijke woorden op"],
        answer: 0,
        wrongHints: [null, "Dat kost veel tijd. Weet je dan al waar je op moet letten?", "Vertalen kost heel veel tijd. Heb je elk woord echt nodig?", "Opzoeken kost veel tijd, en veel woorden heb je niet nodig. Wat moet je eerst weten?"],
        uitlegPad: {
          stappen: [{ titel: "Vraag eerst = focused lezen", tekst: "Door **eerst de vragen** te lezen weet je wélke informatie te zoeken in de tekst. Skim daarna voor overzicht (1 min). Dan per vraag terug. Bespaart 30-50% tijd vs hele tekst eerst doorlezen." }],
          theorie: "Werkt vooral bij **mc-vragen** (examenstijl). Bij open vragen ook OK, maar dan minder evident.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Vraag: 'Why was the boy scared?' → scan voor 'scared / afraid / frightened / terrified' in tekst." }],
          niveaus: { basis: "Vragen eerst.", simpeler: "Vragen lezen → tekst skimmen", nogSimpeler: "Vraag eerst" },
        },
      },
      {
        q: "Wat is het beste **tijdsbudget** per VMBO-CSE-vraag (120 min / ~40 vragen)?",
        options: ["~3 minuten","30 seconden","8 minuten","~5 minuten"],
        answer: 0,
        wrongHints: [null, "30 seconden × 40 is maar 20 minuten. Lees je een tekst en een vraag in een halve minuut?", "8 × 40 = 320 minuten. Hoeveel tijd heb je in totaal?", "5 × 40 = 200 minuten. Past dat in 120 minuten?"],
        uitlegPad: {
          stappen: [{ titel: "120 / 40 = 3 min", tekst: "**120 min ÷ 40 vragen = 3 min**. Trek af: ~3 min tekst-overzicht + ~10 min eind-check = 120 − 13 = 107 min / 40 ≈ **2,7 min per vraag**. Dus reken op **ongeveer 3 minuten**, inclusief het lezen van de tekst. Gebruik als richtlijn — sommige vragen sneller, andere langzamer." }],
          theorie: "Toets-strategie-tip: stel **timer per pagina** (~10 min) zodat je weet of je achterloopt.",
          niveaus: { basis: "~3 min.", simpeler: "VMBO-Engels = ongeveer 3 min/vraag", nogSimpeler: "3 min" },
        },
      },
      {
        q: "Wat is het verschil tussen **scannen** en **skim**?",
        options: ["Scannen zoekt specifiek; skim geeft overzicht", "Scannen geeft overzicht; skim zoekt specifiek", "Scannen is voor Engels; skim voor Nederlands", "Scannen is langzamer; skim is grondiger"],
        answer: 0,
        wrongHints: [null, "Welke van de twee gebruik je om één jaartal te vinden? Klopt dat met deze optie?", "Beide technieken werken in elke taal. Waar zit het verschil dan wel in?", "Allebei zijn snelle leestechnieken. Waar gebruik je ze voor?"],
        uitlegPad: {
          stappen: [{ titel: "Doel verschilt", tekst: "**Scan**: 1 specifiek element vinden (jaar, naam, getal). **Skim**: globaal idee wat tekst zegt. Beide zijn snel maar verschillende vragen — scan = 'wie won?' (1 antwoord); skim = 'waar gaat 't over?' (overzicht)." }],
          niveaus: { basis: "Specifiek vs overzicht.", simpeler: "Scan = 1 ding, skim = overzicht", nogSimpeler: "Specifiek vs algemeen" },
        },
      },
      {
        q: "Wat doe je met een **moeilijke vraag** waar je vastloopt?",
        options: ["Overslaan en er later naar terugkeren","Rustig doorwerken tot je het antwoord hebt","Elk onbekend woord opzoeken in het woordenboek","De hele tekst opnieuw grondig doorlezen"],
        answer: 0,
        wrongHints: [null, "Zo raak je tijd kwijt die je voor andere vragen nodig hebt. Wat levert meer punten op?", "Een woordenboek mag, maar elk woord opzoeken kost veel tijd. Wat levert in dezelfde tijd meer punten op?", "Een hele tekst opnieuw lezen kost veel tijd. Hoe zorg je dat je eerst de makkelijke punten binnenhaalt?"],
        uitlegPad: {
          stappen: [{ titel: "Tijd-budget bewaken", tekst: "Per moeilijke vraag **maximaal 2,5 min** investeren. Daarna **overslaan + door**. Aan het einde terug met **frisse blik** — vaak los je hem dan op. Anders: op het laatst gokken (~25% kans bij 4 opties)." }],
          theorie: "Toets-tip: zet een markering (sterretje) bij overgeslagen vragen op je antwoord-blad.",
          niveaus: { basis: "Overslaan + later.", simpeler: "Moeilijk = skip + door", nogSimpeler: "Skip" },
        },
      },
    ],
  },

  // ─── B. Vraagsoorten herkennen ────────────────────────────
  {
    title: "Vraagsoorten + signaalwoorden CSE Engels",
    explanation:
      "CSE-Engels-vragen vallen in **vraag-soorten**. Herken het soort → weet welke strategie.\n\n**1. Factuele vraag** ('Wat / Wie / Waar / Wanneer?'):\n• What did X do? When did it happen?\n• Strategie: **scannen** voor trefwoord uit vraag.\n• Antwoord staat letterlijk in tekst.\n\n**2. Inhouds-vraag** ('Waar gaat alinea X over?'):\n• What is paragraph 2 mainly about?\n• Strategie: **skim** die alinea. Eerste/laatste zin = vaak hoofdgedachte.\n\n**3. Bedoel-/intentie-vraag** ('Wat wil de schrijver?'):\n• What is the writer's purpose / message / opinion?\n• Strategie: kijk naar **toon-woorden** (positief/negatief, emotie), conclusie-alinea.\n\n**4. Verwijs-vraag** ('Waarnaar verwijst X?'):\n• What does 'they / it / this' refer to?\n• Strategie: kijk in **vorige zin** of 1-2 zinnen ervoor.\n\n**5. Woord-betekenis-vraag** ('Wat betekent X in context?'):\n• What is meant by [marked word]?\n• Strategie: **context** lezen — voor- en achter het woord. Soms hint in synoniem of voorbeeld.\n\n**6. Conclusie-vraag** ('Wat kun je concluderen?'):\n• What can be concluded from this article?\n• Strategie: lees **laatste alinea**. Conclusie meestal daar.\n\n**7. Mening/gevoel-vraag** ('Hoe voelt X over Y?'):\n• How does the writer feel about climate change?\n• Strategie: **emotie-woorden** zoeken (love/hate/concerned/excited/worried).\n\n**8. Multiple-choice-completion** ('Vul aan: 'Probably he…'):\n• Fill in: 'In the future the company will...'\n• Strategie: lees zin in tekst voor + na het gat. Wat past logisch?\n\n**Toets-signaalwoorden om te kennen**:\n• **Cause/result**: because, therefore, as a result, thus\n• **Contrast**: however, but, although, on the contrary, despite\n• **Time**: before, after, while, when, until, since\n• **Example**: for instance, for example, such as, like\n• **Opinion**: in my view, I believe, surely, no doubt\n• **Emphasis**: indeed, especially, in particular, above all",
    checks: [
      {
        q: "Welke strategie voor: *'What does 'this' refer to in line 12?'*",
        options: ["Kijk in de zinnen ervoor","Lees de hele tekst opnieuw","Zoek een synoniem in de tekst","Kijk naar de titel van de tekst"],
        answer: 0,
        wrongHints: [null, "Een verwijswoord wijst bijna altijd naar iets dichtbij. Moet je daarvoor de hele tekst lezen?", "Een synoniem helpt bij een vraag naar de betekenis van een woord. Wat vraagt 'refer to'?", "Een verwijswoord wijst naar iets wat net genoemd is. Staat de titel dichtbij regel 12?"],
        uitlegPad: {
          stappen: [{ titel: "Verwijswoord = lokale context", tekst: "Verwijswoorden ('this / that / they / it / he / she') verwijzen naar iets in **vorige 1-3 zinnen**. Lees terug. Bv. 'The boys came home. **They** were tired.' → They = the boys." }],
          woorden: [{ woord: "verwijswoord", uitleg: "Woord dat terugwijst naar eerder genoemd iets (this/that/it/they/he/she)." }],
          theorie: "CSE-favoriet: verwijs-vragen komen elk examen voor. Easy points als je strategie toepast.",
          niveaus: { basis: "Vorige zin.", simpeler: "Verwijswoord = kijk vorige zin", nogSimpeler: "Vorig" },
        },
      },
      {
        q: "Welk Engels woord betekent **'echter / maar'** (contrast)?",
        options: ["However","Therefore","Because","Indeed"],
        answer: 0,
        wrongHints: [null, "Therefore = daarom (gevolg).", "Because = omdat (reden).", "Indeed = inderdaad (nadruk)."],
        uitlegPad: {
          stappen: [{ titel: "Contrast-signaalwoorden", tekst: "**However / But / Although / Despite / On the contrary / Nevertheless** → allemaal CONTRAST. Tekst gaat een ANDERE richting in. Vooral 'however' is CSE-favoriet om mening-shift te markeren." }],
          theorie: "Toets-tip: bij conclusie-vraag — let op zin NA 'however'. Daar staat vaak hoofd-mening van schrijver.",
          niveaus: { basis: "However.", simpeler: "Contrast = however", nogSimpeler: "However" },
        },
      },
      {
        q: "*'What is the writer's purpose?'* — welk vraagtype is dit?",
        options: ["Bedoel-/intentie-vraag","Feitelijke vraag","Conclusie-vraag","Woord-betekenis-vraag"],
        answer: 0,
        wrongHints: [null, "Een feitelijke vraag vraagt naar iets wat letterlijk in de tekst staat. Wat betekent het woord 'purpose'?", "Een conclusie-vraag vraagt wat je uit de tekst afleidt. Wat betekent het woord 'purpose'?", "Bij een woord-betekenis-vraag staat er een woord tussen aanhalingstekens. Zie je dat hier?"],
        uitlegPad: {
          stappen: [{ titel: "Purpose = doel = intentie", tekst: "**Purpose** vraagt naar **bedoeling** van schrijver. Mogelijke antwoorden: to inform (informeren), to entertain (vermaken), to warn (waarschuwen), to persuade (overtuigen). Vergelijk OBIA in NL." }],
          woorden: [{ woord: "purpose", uitleg: "Bedoeling, doel — waarom schreef de schrijver dit?" }],
          theorie: "Strategie: kijk naar **toon** + **laatste alinea**. To inform-tekst is zakelijk, to entertain heeft humor, to warn is bezorgd, to persuade gebruikt 'I think' / 'we should'.",
          niveaus: { basis: "Intentie-vraag.", simpeler: "Purpose = bedoeling = intentie-vraag", nogSimpeler: "Bedoeling" },
        },
      },
      {
        q: "Wat betekent het signaalwoord **'therefore'**?",
        options: ["Daarom / dus (gevolg)","Echter (contrast)","Omdat (reden)","Bijvoorbeeld (voorbeeld)"],
        answer: 0,
        wrongHints: [null, "Echter = however.", "Omdat = because.", "Bijvoorbeeld = for example."],
        uitlegPad: {
          stappen: [{ titel: "Therefore = conclusie/gevolg", tekst: "**Therefore / Thus / As a result / Consequently** → signaal voor **GEVOLG / conclusie**. Zin ervoor = oorzaak, na 'therefore' = gevolg/conclusie." }],
          voorbeelden: [{ type: "voorbeeld", tekst: "'It rained all night. Therefore, the football match was cancelled.' → cause (rain) + effect (cancellation)." }],
          niveaus: { basis: "Gevolg.", simpeler: "Therefore = daarom", nogSimpeler: "Daarom" },
        },
      },
      {
        q: "Voor een **woord-betekenis-vraag** wat kun je het beste doen?",
        options: ["De zinnen ervoor en erna goed lezen", "Het woord opzoeken in het woordenboek", "Het woord vertalen naar wat erop lijkt", "De zin met het woord letterlijk vertalen"],
        answer: 0,
        wrongHints: [null, "Een woordenboek mag op het CSE, maar opzoeken kost veel tijd. Kun je de betekenis ook uit de tekst zelf halen?", "Een woord dat op een Nederlands woord lijkt, kan een false friend zijn. Hoe controleer je de betekenis?", "Eén zin geeft soms te weinig houvast. Waar staat vaak extra uitleg?"],
        uitlegPad: {
          stappen: [{ titel: "Context-strategie", tekst: "Lees zin met onbekend woord. Kijk **1-2 zinnen ervoor + erna**. Wat past logisch? Soms staat **synoniem** in andere zin, of **voorbeeld** ('such as...') dat woord verheldert." }],
          theorie: "Tip: kijk naar **woord-onderdelen** — prefix (un-/re-/dis-) + root + suffix (-tion/-able/-ly). 'Unbelievable' = un + believe + able = 'niet te geloven'.",
          niveaus: { basis: "Context.", simpeler: "Onbekend woord = context lezen", nogSimpeler: "Context" },
        },
      },
    ],
  },

  // ─── C. Onbekende woorden raden ───────────────────────────
  {
    title: "Onbekende woorden — raad-strategie",
    explanation:
      "Een vertaalwoordenboek mag op het CSE, maar elk woord opzoeken kost veel te veel tijd. Dus hoe ga je slim om met onbekende woorden?\n\n**5 raad-strategieën**:\n\n**1. Context** (sterkste):\n• Lees de zin én 1-2 zinnen ervoor en erna.\n• Wat past logisch? Welk woord zou daar kunnen staan?\n• Vaak: synoniem of voorbeeld in nabije zinnen.\n\n**2. Woord-onderdelen herkennen** (prefix + root + suffix):\n• **Prefix** (voorvoegsel): **un-** (niet), **re-** (opnieuw), **dis-** (tegenover), **pre-** (vooraf), **anti-** (tegen), **mis-** (verkeerd).\n• **Root** (stam): vaak een woord dat je wél kent.\n• **Suffix** (achtervoegsel): **-tion** (zelfstandig naamwoord), **-able** (kunnen), **-ful** (vol), **-less** (zonder), **-ly** (bijwoord).\n• Voorbeeld: *unbelievable* = un + believe + able = 'niet te geloven'.\n• *Hopeless* = hope + less = 'zonder hoop'.\n\n**3. Stam herkennen van Latijn/Frans/Duits** (vooral voor moeilijke woorden):\n• Veel Engelse woorden komen uit **Latijn** via Frans of direct.\n• **'-tion / -sion'** komt uit Latijn ('action / decision'). Vaak vergelijkbaar met NL '-tie / -sie'.\n• Voorbeeld: *examination* (Engels) = *examinatie* (NL-equivalent).\n\n**4. Word family** (familie van woord):\n• Als je *educate* kent, herken je *education / educator / educational / educated*.\n• Als je *happy* kent, herken je *happiness / unhappy / happily*.\n\n**5. Sla over + verder lezen**:\n• Niet elk woord is essentieel voor vraag.\n• Soms snap je vraag ook zonder dat ene woord.\n• Lees verder, kom later terug.\n\n**Toets-truc Trans-talen-vertaling**:\n• *Important* ≈ NL 'importeren / import' (heeft te maken met) maar betekent BELANGRIJK.\n• *Final* ≈ NL 'finale' = laatste/einde.\n• *Constant* ≈ NL 'constant' = doorlopend.\n• *Difficult* is geen false friend — maar let op **'eventueel'** (NL ≈ 'misschien') vs **'eventually'** (Engels ≈ 'uiteindelijk'). False friends bestaan.\n\n**Veel-voorkomende prefixes/suffixes (Toets-niveau)**:\n• un- / non- / dis- / im- / il- / ir- = NIET (unfair, dishonest, impossible)\n• re- = OPNIEUW (rewrite = herschrijven)\n• -tion = handeling (creation, education)\n• -able = kunnen worden (drinkable = drinkbaar)\n• -less = zonder (homeless = zonder huis)\n• -ful = vol (hopeful = hoopvol)\n• -er / -or = persoon (teacher, doctor)\n• -ist = persoon met een beroep of overtuiging (artist, dentist)\n• -ly = bijwoord (quickly = snel)",
    checks: [
      {
        q: "Wat betekent **'unbelievable'** waarschijnlijk?",
        options: ["Niet te geloven","Goed te geloven","Niet meer gelovig","Vol vertrouwen"],
        answer: 0,
        wrongHints: [null, "Kijk naar het begin van het woord: un-. Wat doet un- met believable?", "Believe betekent hier 'geloven dat iets waar is', niet geloven in een god. Wat betekent -able?", "Vol vertrouwen is 'confident'. Welke delen zie je in un-believ-able?"],
        uitlegPad: {
          stappen: [{ titel: "un + believe + able", tekst: "**un-** (niet) + **believe** (geloven) + **-able** (kunnen) = 'niet kunnen worden geloofd' = **'niet te geloven'**. Drie woord-onderdelen + ezelsbruggetje 'un' = NIET." }],
          theorie: "CSE-pattern: 'un-X-able' = vaak 'kan niet X worden'. Unstoppable, unreachable, unbeatable.",
          niveaus: { basis: "Niet te geloven.", simpeler: "Un + believe + able", nogSimpeler: "Niet geloven" },
        },
      },
      {
        q: "Welk prefix betekent **'opnieuw'**?",
        options: ["Re-","Un-","Dis-","Mis-"],
        answer: 0,
        wrongHints: [null, "Un- betekent 'niet', zoals in unhappy. Is dat 'opnieuw'?", "Dis- maakt het tegenovergestelde, zoals in dislike. Is dat 'opnieuw'?", "Mis- betekent 'verkeerd', zoals in misunderstand. Is dat 'opnieuw'?"],
        uitlegPad: {
          stappen: [{ titel: "Re = again", tekst: "**Re-** = again (opnieuw). Rewrite (herschrijven), rebuild (herbouwen), reload (herladen), renew (vernieuwen)." }],
          theorie: "CSE-favoriet: re-write / re-think / re-action vragen. Snap re- = je hebt 5+ woorden in 1 keer.",
          niveaus: { basis: "Re-.", simpeler: "Opnieuw = re-", nogSimpeler: "Re" },
        },
      },
      {
        q: "Wat is een **'false friend'** in talen?",
        options: ["Woord dat Nederlands lijkt, maar anders betekent", "Woord dat je makkelijk verkeerd uitspreekt", "Woord dat uit het Nederlands is geleend", "Woord dat in beide talen hetzelfde betekent"],
        answer: 0,
        wrongHints: [null, "Uitspraak is een ander probleem. Gaat het bij een false friend om klank of om betekenis?", "Een leenwoord betekent in beide talen meestal hetzelfde. Is dat een valstrik?", "Dan is het juist geen valstrik."],
        uitlegPad: {
          stappen: [{ titel: "False friend = valstrik", tekst: "**False friend** = Engels woord dat LIJKT op NL maar iets ANDERS betekent. Voorbeelden:\n• 'Eventually' (Engels) = 'uiteindelijk', NIET 'eventueel'\n• 'Sympathetic' (Engels) = 'meelevend', NIET 'sympathiek' (= nice)\n• 'Actually' (Engels) = 'eigenlijk', NIET 'actueel' (= current)" }],
          woorden: [{ woord: "false friend", uitleg: "Tweetalig vergelijkbaar woord met andere betekenis." }],
          theorie: "CSE-val: kies niet snel op 'klinkt-als-NL'. Test in context.",
          niveaus: { basis: "Bedrieglijk woord.", simpeler: "False friend = bedrieglijk woord", nogSimpeler: "Bedrieglijk" },
        },
      },
      {
        q: "Wat betekent **'hopeless'**?",
        options: ["Zonder hoop","Vol hoop","Hopelijk","Een beetje hoop"],
        answer: 0,
        wrongHints: [null, "Vol hoop is 'hopeful', met -ful. Welke uitgang heeft hopeless?", "Hopelijk is 'hopefully'. Welke uitgang heeft hopeless?", "-less lijkt op 'less' (minder), maar als uitgang betekent het iets sterkers. Wat betekent careless?"],
        uitlegPad: {
          stappen: [{ titel: "hope + less", tekst: "**hope** (hoop) + **-less** (zonder/geen) = 'zonder hoop' / hopeloos. **-less** = altijd 'zonder X'. Homeless = zonder huis. Penniless = zonder geld. Useless = zonder nut." }],
          theorie: "CSE-truc: -less = zonder, -ful = vol (van). Hopeful (vol hoop) vs Hopeless (zonder hoop).",
          niveaus: { basis: "Zonder hoop.", simpeler: "hope + less = zonder hoop", nogSimpeler: "Geen hoop" },
        },
      },
      {
        q: "Wat is **synoniem** voor 'huge'?",
        options: ["enormous","tiny","slow","old"],
        answer: 0,
        wrongHints: [null, "Tiny betekent 'piepklein'. Is dat hetzelfde als huge?", "Slow gaat over snelheid. Gaat huge over snelheid?", "Old gaat over leeftijd. Gaat huge over leeftijd?"],
        uitlegPad: {
          stappen: [{ titel: "Huge = enormous = big", tekst: "**Synoniemen** voor groot: huge / enormous / big / large / giant / massive / vast / tremendous. Tegenstelling: tiny / small / little / minute." }],
          woorden: [{ woord: "synoniem", uitleg: "Woord met (bijna) dezelfde betekenis." }, { woord: "antoniem", uitleg: "Woord met tegengestelde betekenis." }],
          theorie: "CSE-pattern: synoniem-vragen vragen om groep ('big-family'). Tegenstelling-vragen geven 1 antoniem.",
          niveaus: { basis: "enormous.", simpeler: "huge = enormous = synoniem", nogSimpeler: "Enormous" },
        },
      },
    ],
  },

  // ─── D. Valstrikken + tips ────────────────────────────────
  {
    title: "Valstrikken + examen-tips",
    explanation:
      "Toets-makers maken bewust **valstrikken** om te zien of leerlingen écht goed lezen.\n\n**5 veel-voorkomende valstrikken**:\n\n**1. Distractors met identieke woorden**:\n• Een fout antwoord gebruikt **exact dezelfde woorden** als de tekst, maar **uit een andere context**.\n• Voorbeeld: tekst zegt 'in summer the kids play outside'. Vraag 'where do kids play?'. Fout antwoord: 'in summer' (klopt — maar vraagt naar plek, niet tijd).\n• **Strategie**: lees vraag zorgvuldig. Antwoord moet het juiste TYPE info geven.\n\n**2. Half-juiste antwoorden**:\n• Antwoord klopt 50% maar ander deel niet.\n• 'The boy was happy and tired' — vraag 'How did the boy feel?'. Optie 'happy' alleen → onvolledig.\n\n**3. Logische valstrikken** (waar zonder bewijs):\n• Antwoord klinkt redelijk maar staat NIET in de tekst.\n• 'Dolphins are smart, like dogs' → vraag over dolfijnen, niet honden. Een antwoord over honden is hier dus fout.\n\n**4. Tijd-valstrik**:\n• Tekst zegt 'in 2010 X started, in 2020 Y'. Vraag 'When did X start?' → 2010.\n• Niet verwarren met Y-jaar.\n\n**5. Negatief geformuleerde vraag**:\n• 'Which is **NOT** true?'\n• Welke optie staat **niet** in de tekst? Drie kloppen wél, 1 niet.\n• **Strategie**: onderstreep 'NOT' voor je antwoordt.\n\n**Algemene examen-tips**:\n\n**A. Tijd**: kijk regelmatig op klok. Loop je achter? Sneller. Loop je voor? Diepere check.\n\n**B. Markeer in tekst** (mag op klad-versie): onderstreep trefwoorden uit vraag, omkring antwoord.\n\n**C. Open vragen (als die er zijn)**: schrijf in **Nederlands** (tenzij anders gevraagd). Volledige zin. Geef de **2-3 bewijspunten** uit tekst.\n\n**D. Multiple choice gokken**: als je écht moet gokken — kies **niet de extreme optie** (always / never / all / none zijn vaak fout). Genuanceerde opties (sometimes / usually) winnen vaker.\n\n**E. Antwoord-blad**: vul meteen in tijdens vraag (niet eind opslaan — risico op vergeten).\n\n**F. Eind-check 10 min**: ga terug door overgeslagen + onzekere vragen.\n\n**Toets-feit**: gemiddeld VMBO-GT-Engels-cijfer = 6,3. Met strategie + woordenschat = 7+.",
    checks: [
      {
        q: "Wat is een **'distractor'** in CSE-meerkeuze?",
        options: ["Fout antwoord dat goed lijkt", "Lange inleiding boven de vraag", "Moeilijk woord in de vraag", "Vraag met twee goede antwoorden"],
        answer: 0,
        wrongHints: [null, "Een inleiding hoort bij de tekst, niet bij de antwoorden. Wat betekent 'distract'?", "Een moeilijk woord is een woordenschatprobleem. Waar in een meerkeuzevraag zit de distractor?", "Op het CSE heeft een meerkeuzevraag één goed antwoord. Wat betekent 'distract' (afleiden)?"],
        uitlegPad: {
          stappen: [{ titel: "Distractor = misleider", tekst: "**Distractor** (afleider) = fout antwoord-optie die EXPRES plausibel klinkt. Doel: testen of leerling écht goed leest. Vaak gebruikt: woorden uit tekst maar uit verkeerde context." }],
          woorden: [{ woord: "distractor", uitleg: "Misleidende antwoord-optie in een multiple-choice vraag." }],
          theorie: "Strategie: bij 4 opties zijn meestal 2 duidelijk fout (snel uit te sluiten) en 2 lijken op elkaar. Vergelijk die twee zorgvuldig.",
          niveaus: { basis: "Misleidend fout antwoord.", simpeler: "Distractor = misleider", nogSimpeler: "Misleider" },
        },
      },
      {
        q: "Bij vraag *'Which is **NOT** correct?'* wat doe je?",
        options: ["Onderstreep 'NOT' en zoek de foute optie", "Zoek de optie die wél klopt met de tekst", "Zoek de optie waarin ook 'not' staat", "Zoek de optie die het best samenvat"],
        answer: 0,
        wrongHints: [null, "Lees de vraag nog eens: wat verandert het woordje NOT?", "Of er 'not' in een optie staat, zegt niets over goed of fout. Wat vraagt de vraag?", "Een samenvatting past bij 'main point'. Wat vraagt 'Which is NOT correct'?"],
        uitlegPad: {
          stappen: [{ titel: "NOT = omgekeerd zoeken", tekst: "Bij 'NOT'/'EXCEPT'-vragen MOET je het **omgekeerde** doen: zoek welke optie **NIET** in tekst staat. 3 zullen kloppen, 1 niet. **Onderstreep 'NOT'** of zet eromheen — voorkom missen." }],
          theorie: "CSE-valstrik: ~5% van vragen heeft 'NOT'. Veel leerlingen missen 't en geven juiste optie ipv onjuiste.",
          niveaus: { basis: "NOT onderstrepen.", simpeler: "NOT-vraag = omgekeerd", nogSimpeler: "Onderstrepen" },
        },
      },
      {
        q: "Als je **moet gokken** tussen 'always' en 'sometimes' — wat is veiliger?",
        options: ["Sometimes","Always","Beide even waarschijnlijk","De optie die het langst is"],
        answer: 0,
        wrongHints: [null, "Always laat geen enkele uitzondering toe. Hoe vaak klopt zo'n stellige uitspraak?", "Kijk naar de twee woorden: welke laat ruimte voor uitzonderingen, en welke niet?", "De lengte van een optie zegt weinig. Welk woord laat ruimte voor uitzonderingen?"],
        uitlegPad: {
          stappen: [{ titel: "Extreme woorden = vaak fout", tekst: "Tekst-schrijvers gebruiken zelden absolute taal ('altijd', 'iedereen', 'nooit', 'allemaal'). Daarom zijn opties met **'always / never / all / none'** statistisch VAAK fout in CSE. Genuanceerde 'sometimes / usually / often / many' winnen vaker." }],
          theorie: "Strategie alleen voor noodgevallen (echte gok). Bij twijfel + context: nuance > absoluut.",
          niveaus: { basis: "Sometimes.", simpeler: "Bij gok: nuance > absoluut", nogSimpeler: "Sometimes" },
        },
      },
      {
        q: "Wat doe je in de **laatste 10 minuten** van het examen?",
        options: ["Terug naar overgeslagen en twijfelvragen", "De eerste tekst helemaal opnieuw lezen", "Vragen nalezen die je zeker goed hebt", "Een samenvatting van elke tekst maken"],
        answer: 0,
        wrongHints: [null, "Een hele tekst opnieuw lezen kost meer dan 10 minuten. Waar valt nog het meest te winnen?", "Wat je zeker weet, levert geen extra punten op. Welke vragen wel?", "Een samenvatting levert geen punten op. Waar kun je in 10 minuten nog punten halen?"],
        uitlegPad: {
          stappen: [{ titel: "Eind-check = goud", tekst: "10 min eind-check kan **3-5 punten** schelen. **Eerst**: vul de overgeslagen vragen in. **Daarna**: check 2-3 onzekere antwoorden — kun je nu beter? Antwoord pas wijzigen als je redelijk zeker bent — vaak is je eerste keuze de juiste." }],
          niveaus: { basis: "Eind-check.", simpeler: "Laatste 10 min = check + skip-vragen", nogSimpeler: "Check" },
        },
      },
      {
        q: "Bij een **open vraag** (niet multiple choice) hoe schrijf je antwoord?",
        options: ["Kort in het Nederlands, met tekstbewijs", "Een Engels citaat uit de tekst overnemen", "Eén Nederlands trefwoord als antwoord", "Lang in het Engels, met eigen mening"],
        answer: 0,
        wrongHints: [null, "Bij open vragen vraagt het examen meestal een antwoord in het Nederlands. Is een los citaat dan genoeg?", "Eén woord is vaak te weinig voor de punten. Hoe onderbouw je je antwoord?", "Een eigen mening wordt niet gevraagd. In welke taal en hoe lang antwoord je?"],
        uitlegPad: {
          stappen: [{ titel: "Open antwoord = NL + bewijs", tekst: "Open vragen meestal **in Nederlands** beantwoord (tenzij anders aangegeven). **Volledige zin** met **2-3 bewijspunten** uit tekst. Voorbeeld: 'De schrijver vindt sport belangrijk omdat (1) het je gezond houdt en (2) je leert samenwerken.'" }],
          theorie: "Toets-correctie: open vragen scoren punten per bewijspunt. 1 bewijs = 1 punt, 2 bewijs = 2 punten.",
          niveaus: { basis: "NL volledige zin met bewijs.", simpeler: "Open vraag = NL + tekstbewijs", nogSimpeler: "NL + bewijs" },
        },
      },
    ],
  },

  // ─── E. Examen-eindopdracht ───────────────────────────────
  {
    title: "Examen-eindopdracht — CSE Engels strategie",
    explanation:
      "Mix van strategie + vraagsoort + woordenschat. Echte CSE-stijl.\n\nVeel succes!",
    checks: [
      {
        q: "Welke lees-strategie gebruik je om **overzicht van een tekst** te krijgen?",
        options: ["Skim — eerste/laatste zin alinea", "Scan — zoek één bepaald woord", "Detail-lezen — woord-voor-woord", "Vertalen — zin voor zin omzetten"],
        answer: 0,
        wrongHints: [null, "Scannen doe je om één woord of getal snel te vinden. Krijg je daarmee overzicht van de hele tekst?", "Woord voor woord lezen kost veel tijd. Krijg je zo snel een overzicht?", "Vertalen kost veel tijd en geeft vooral losse zinnen. Hoe krijg je snel overzicht?"],
        uitlegPad: {
          stappen: [{ titel: "Skim = globaal", tekst: "**Skim**: lees titel + eerste/laatste zin elke alinea + grafiek-onderschriften. Geeft 80% overzicht in 20% tijd." }],
          niveaus: { basis: "Skim.", simpeler: "Overzicht = skim", nogSimpeler: "Skim" },
        },
      },
      {
        q: "Wat betekent **'eventually'** in het Engels?",
        options: ["Uiteindelijk","Eventueel / misschien","Snel","Vroeger"],
        answer: 0,
        wrongHints: [null, "Eventually lijkt op 'eventueel'. Maar betekent het ook hetzelfde? Denk aan false friends.", "Eventually zegt iets over wánneer iets gebeurt, niet hoe snel. Na korte of na lange tijd?", "Niet — 'eventually' gaat over later, niet over vroeger."],
        uitlegPad: {
          stappen: [{ titel: "False friend — let op!", tekst: "**Eventually** (Engels) = 'uiteindelijk / na verloop van tijd'. **NIET** 'eventueel' (NL). 'Eventueel' = perhaps / possibly. Toets-favoriete valstrik." }],
          theorie: "Memo: 'eventueel' (NL) ≠ 'eventually' (Engels). Twee aparte concepten.",
          niveaus: { basis: "Uiteindelijk.", simpeler: "Eventually = uiteindelijk", nogSimpeler: "Uiteindelijk" },
        },
      },
      {
        q: "Wat is **synoniem** voor 'difficult'?",
        options: ["Hard","Easy","Big","Slow"],
        answer: 0,
        wrongHints: [null, "Easy betekent 'makkelijk'. Is dat hetzelfde als difficult?", "Big gaat over grootte. Gaat 'difficult' over grootte?", "Slow gaat over snelheid. Waar gaat 'difficult' over?"],
        uitlegPad: {
          stappen: [{ titel: "Difficult = hard = tough", tekst: "Synoniemen voor moeilijk: **difficult / hard / tough / challenging / complicated / tricky**." }],
          niveaus: { basis: "Hard.", simpeler: "Difficult = hard", nogSimpeler: "Hard" },
        },
      },
      {
        q: "**'However'** signaleert:",
        options: ["Tegenstelling / contrast", "Reden / verklaring", "Tijd / tijdsvolgorde", "Voorbeeld / illustratie"],
        answer: 0,
        wrongHints: [null, "Reden = because.", "Tijd = when / before.", "Voorbeeld = for instance."],
        uitlegPad: {
          stappen: [{ titel: "However = echter / maar", tekst: "**However** = contrast-signaalwoord. Tekst gaat een ANDERE richting in. Vooral belangrijk voor conclusie-vragen — zin na 'however' = vaak hoofd-standpunt." }],
          niveaus: { basis: "Tegenstelling.", simpeler: "However = maar = contrast", nogSimpeler: "Contrast" },
        },
      },
      {
        q: "Bij **'What does 'it' refer to in line 5?'** kijk je:",
        options: ["In de zinnen vóór regel 5", "In de zinnen aan het eind", "In de titel van de tekst", "In de voetnoten onderaan"],
        answer: 0,
        wrongHints: [null, "De zinnen aan het eind staan ver weg van regel 5. Waar wijst een verwijswoord meestal naar?", "Een verwijswoord wijst meestal naar iets dichtbij. Is de titel dichtbij regel 5?", "Een verwijswoord wijst naar iets wat net genoemd is. Staat dat onderaan in een voetnoot?"],
        uitlegPad: {
          stappen: [{ titel: "Verwijswoord = lokale referentie", tekst: "**'It / they / this / that'** verwijst altijd naar iets dat **kort daarvoor** is genoemd. Lees 1-2 zinnen voor regel 5 en zoek het zelfstandig naamwoord." }],
          niveaus: { basis: "Vorige zinnen.", simpeler: "It verwijst kort terug = vorige zin", nogSimpeler: "Vorige" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const cseStrategieEngelsVmbo = {
  id: "cse-strategie-engels-vmbo",
  title: "CSE-strategie Engels (VMBO-GT)",
  emoji: "📕",
  level: "vmbo-gt-4",
  subject: "engels",
  referentieNiveau: "vmbo-gt-CSE",
  sloThema: "Engels VMBO — leesvaardigheid CSE strategie + tips",
  prerequisites: [
    { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "vmbo-gt-CSE" },
    { id: "woordenschat-engels-po", title: "Woordenschat Engels (basis)", niveau: "po-1F" },
    { id: "basis-grammatica-engels-po", title: "Basis grammatica Engels", niveau: "po-1F" },
  ],
  intro:
    "Hoe haal je een hoger cijfer op het VMBO-GT-eindexamen Engels? Strategieën voor scan + skim, vraagsoorten herkennen, onbekende woorden raden, valstrikken vermijden. 5 stappen × ~5 vragen. ~15 min.",
  triggerKeywords: [
    "CSE Engels", "leesvaardigheid", "VMBO Engels examen",
    "scan", "skim", "lees-strategie",
    "vraagsoort", "signaalwoord", "however", "therefore", "because",
    "verwijswoord", "prefix", "suffix",
    "false friend", "synoniem", "antoniem",
    "distractor", "valstrik",
  ],
  chapters,
  steps,
};

export default cseStrategieEngelsVmbo;
