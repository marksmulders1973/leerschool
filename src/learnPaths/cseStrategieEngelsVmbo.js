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
      "Het **VMBO-GT-eindexamen Engels** = uitsluitend **leesvaardigheid**. ~50 vragen over ~10 teksten in 90 min. Tijdmanagement is alles.\n\n**3 lees-snelheden** (verschillende doelen):\n\n**1. Scan-lezen** (snelste):\n• Zoek 1 specifiek woord/getal/naam.\n• Voorbeeld: 'In which year did X happen?' → scan voor jaar-getallen.\n• Gebruik je oog als spotlight — kijk niet naar alle woorden.\n\n**2. Skim-lezen** (snel):\n• Krijg overzicht: waar gaat de tekst over?\n• Lees: titel + eerste zin elke alinea + laatste zin.\n• Doel: weten welke alinea relevant is voor welke vraag.\n\n**3. Detail-lezen** (langzamer):\n• Lees zin voor zin, begrijp ieder woord.\n• Gebruik alleen voor relevante alinea — niet hele tekst!\n\n**Cito-CSE-Engels-strategie**:\n1. **Lees eerst de vragen** (sneak peek).\n2. **Skim de tekst** (1 minuut overzicht).\n3. Per vraag: **scan** naar trefwoord uit vraag → vind relevante alinea → **detail-lees** alleen die alinea.\n4. Niet vastlopen — moeilijke vraag overslaan + later terug.\n\n**Tijdsbudget VMBO-CSE Engels** (90 min, ~50 vragen):\n• ~1,5 min per vraag gemiddeld.\n• Eerste tekst-overzicht: ~3 min.\n• Reserveer 10 min op het eind voor terugcheck + open vragen.\n\n**Cito-feit**: meeste leerlingen verliezen punten door **tijdsdruk + onbekende woorden + valstrikken**. Strategie scheelt ~10-15% in score.",
    checks: [
      {
        q: "Welke lees-strategie gebruik je om **1 jaartal** te vinden in een lange tekst?",
        options: ["Scannen","Skim","Detail-lezen","Mediteren"],
        answer: 0,
        wrongHints: [null, "Skim = overzicht, niet specifiek zoeken.", "Te langzaam — alleen voor relevante alinea.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Scan = specifiek zoeken", tekst: "**Scannen** = oogspotlight zoekt **1 specifiek element**: getal, naam, jaar, datum. Je leest NIET alle woorden — alleen typografisch opvallende elementen. Voor jaartal: zoek 4-cijferige getallen (1900-2030)." }],
          woorden: [{ woord: "scannen", uitleg: "Snel doorzoeken van tekst naar specifieke informatie." }, { woord: "skim", uitleg: "Globaal lezen voor algemene indruk." }],
          theorie: "Cito-tip: bij vraag met getal/jaar in vraagstelling → altijd scan-strategie eerst.",
          niveaus: { basis: "Scannen — A.", simpeler: "Jaartal zoeken = scannen = A.", nogSimpeler: "Scan = A." },
        },
      },
      {
        q: "Hoe begin je een **leesvaardigheid-CSE-vraag**?",
        options: ["Lees eerst de vragen, dan skim de tekst","Lees hele tekst zorgvuldig vooraf","Vermijd de tekst","Schrijf direct antwoord op"],
        answer: 0,
        wrongHints: [null, "Te langzaam — kost teveel tijd.", "Niet — je hebt de tekst wel nodig.", "Niet — niet te raden."],
        uitlegPad: {
          stappen: [{ titel: "Vraag eerst = focused lezen", tekst: "Door **eerst de vragen** te lezen weet je wélke informatie te zoeken in de tekst. Skim daarna voor overzicht (1 min). Dan per vraag terug. Bespaart 30-50% tijd vs hele tekst eerst doorlezen." }],
          theorie: "Werkt vooral bij **mc-vragen** (Cito-stijl). Bij open vragen ook OK, maar dan minder evident.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Vraag: 'Why was the boy scared?' → scan voor 'scared / afraid / frightened / terrified' in tekst." }],
          niveaus: { basis: "Vragen eerst — A.", simpeler: "Vragen lezen → tekst skimmen = A.", nogSimpeler: "Vraag eerst = A." },
        },
      },
      {
        q: "Wat is het beste **tijdsbudget** per VMBO-CSE-vraag (90 min / ~50 vragen)?",
        options: ["~1,5 minuut","30 seconden","5 minuten","Geen tijd budgetteren"],
        answer: 0,
        wrongHints: [null, "Te snel — leesvaardigheid heeft tijd nodig.", "Te langzaam — kom je niet door.", "Niet — tijdsdruk is hoog."],
        uitlegPad: {
          stappen: [{ titel: "90 / 50 ≈ 1,5 min", tekst: "**90 min ÷ 50 vragen = 1,8 min**. Trek af: 3 min tekst-overzicht-tijd + 5 min eind-check = 90-8=82 min / 50 = **1,5-1,6 min per vraag**. Gebruik als richtlijn — sommige vragen sneller, andere langzamer." }],
          theorie: "Cito-strategie-tip: stel **timer per pagina** (~10 min) zodat je weet of je achterloopt.",
          niveaus: { basis: "1,5 min — A.", simpeler: "VMBO-Engels = 1,5 min/vraag = A.", nogSimpeler: "1,5 min = A." },
        },
      },
      {
        q: "Wat is het verschil tussen **scannen** en **skim**?",
        options: ["Scannen zoekt specifiek; skim geeft overzicht","Scannen langzamer dan skim","Geen verschil","Skim alleen voor poëzie"],
        answer: 0,
        wrongHints: [null, "Niet — scannen is sneller dan skim.", "Verschil bestaat — andere doelen.", "Niet — skim werkt voor elke tekst."],
        uitlegPad: {
          stappen: [{ titel: "Doel verschilt", tekst: "**Scan**: 1 specifiek element vinden (jaar, naam, getal). **Skim**: globaal idee wat tekst zegt. Beide zijn snel maar verschillende vragen — scan = 'wie won?' (1 antwoord); skim = 'waar gaat 't over?' (overzicht)." }],
          niveaus: { basis: "Specifiek vs overzicht — A.", simpeler: "Scan = 1 ding, skim = overzicht = A.", nogSimpeler: "Specifiek vs algemeen = A." },
        },
      },
      {
        q: "Wat doe je met een **moeilijke vraag** waar je vastloopt?",
        options: ["Overslaan + later terug","Lang nadenken tot je 'm hebt","Willekeurig invullen","Stoppen met examen"],
        answer: 0,
        wrongHints: [null, "Niet — tijd is kostbaar.", "Doe op het einde als laatste optie.", "Zeker niet."],
        uitlegPad: {
          stappen: [{ titel: "Tijd-budget bewaken", tekst: "Per moeilijke vraag **maximaal 2,5 min** investeren. Daarna **overslaan + door**. Aan het einde terug met **frisse blik** — vaak los je hem dan op. Anders: op het laatst gokken (~25% kans bij 4 opties)." }],
          theorie: "Cito-tip: zet een markering (sterretje) bij overgeslagen vragen op je antwoord-blad.",
          niveaus: { basis: "Overslaan + later — A.", simpeler: "Moeilijk = skip + door = A.", nogSimpeler: "Skip = A." },
        },
      },
    ],
  },

  // ─── B. Vraagsoorten herkennen ────────────────────────────
  {
    title: "Vraagsoorten + signaalwoorden CSE Engels",
    explanation:
      "CSE-Engels-vragen vallen in **vraag-soorten**. Herken het soort → weet welke strategie.\n\n**1. Factuele vraag** ('Wat / Wie / Waar / Wanneer?'):\n• What did X do? When did it happen?\n• Strategie: **scannen** voor trefwoord uit vraag.\n• Antwoord staat letterlijk in tekst.\n\n**2. Inhouds-vraag** ('Waar gaat alinea X over?'):\n• What is paragraph 2 mainly about?\n• Strategie: **skim** die alinea. Eerste/laatste zin = vaak hoofdgedachte.\n\n**3. Bedoel-/intentie-vraag** ('Wat wil de schrijver?'):\n• What is the writer's purpose / message / opinion?\n• Strategie: kijk naar **toon-woorden** (positief/negatief, emotie), conclusie-alinea.\n\n**4. Verwijs-vraag** ('Waarnaar verwijst X?'):\n• What does 'they / it / this' refer to?\n• Strategie: kijk in **vorige zin** of 1-2 zinnen ervoor.\n\n**5. Woord-betekenis-vraag** ('Wat betekent X in context?'):\n• What is meant by [marked word]?\n• Strategie: **context** lezen — voor- en achter het woord. Soms hint in synoniem of voorbeeld.\n\n**6. Conclusie-vraag** ('Wat kun je concluderen?'):\n• What can be concluded from this article?\n• Strategie: lees **laatste alinea**. Conclusie meestal daar.\n\n**7. Mening/gevoel-vraag** ('Hoe voelt X over Y?'):\n• How does the writer feel about climate change?\n• Strategie: **emotie-woorden** zoeken (love/hate/concerned/excited/worried).\n\n**8. Multiple-choice-completion** ('Vul aan: 'Probably he…'):\n• Fill in: 'In the future the company will...'\n• Strategie: lees zin in tekst voor + na het gat. Wat past logisch?\n\n**Cito-signaalwoorden om te kennen**:\n• **Cause/result**: because, therefore, as a result, thus\n• **Contrast**: however, but, although, on the contrary, despite\n• **Time**: before, after, while, when, until, since\n• **Example**: for instance, for example, such as, like\n• **Opinion**: in my view, I believe, surely, no doubt\n• **Emphasis**: indeed, especially, in particular, above all",
    checks: [
      {
        q: "Welke strategie voor: *'What does 'this' refer to in line 12?'*",
        options: ["Kijk in vorige zin/zinnen","Lees hele tekst","Zoek synoniem in tekst","Negeer de vraag"],
        answer: 0,
        wrongHints: [null, "Te langzaam — verwijswoord is altijd lokaal.", "Niet relevant voor verwijswoord.", "Niet — moet wel beantwoorden."],
        uitlegPad: {
          stappen: [{ titel: "Verwijswoord = lokale context", tekst: "Verwijswoorden ('this / that / they / it / he / she') verwijzen naar iets in **vorige 1-3 zinnen**. Lees terug. Bv. 'The boys came home. **They** were tired.' → They = the boys." }],
          woorden: [{ woord: "verwijswoord", uitleg: "Woord dat terugwijst naar eerder genoemd iets (this/that/it/they/he/she)." }],
          theorie: "Cito-CSE-favoriet: verwijs-vragen komen elk examen voor. Easy points als je strategie toepast.",
          niveaus: { basis: "Vorige zin — A.", simpeler: "Verwijswoord = kijk vorige zin = A.", nogSimpeler: "Vorig = A." },
        },
      },
      {
        q: "Welk Engels woord betekent **'echter / maar'** (contrast)?",
        options: ["However","Therefore","Because","Indeed"],
        answer: 0,
        wrongHints: [null, "Therefore = daarom (gevolg).", "Because = omdat (reden).", "Indeed = inderdaad (nadruk)."],
        uitlegPad: {
          stappen: [{ titel: "Contrast-signaalwoorden", tekst: "**However / But / Although / Despite / On the contrary / Nevertheless** → allemaal CONTRAST. Tekst gaat een ANDERE richting in. Vooral 'however' is CSE-favoriet om mening-shift te markeren." }],
          theorie: "Cito-tip: bij conclusie-vraag — let op zin NA 'however'. Daar staat vaak hoofd-mening van schrijver.",
          niveaus: { basis: "However — A.", simpeler: "Contrast = however = A.", nogSimpeler: "However = A." },
        },
      },
      {
        q: "*'What is the writer's purpose?'* — welk vraagtype is dit?",
        options: ["Bedoel-/intentie-vraag","Feitelijke vraag","Conclusie-vraag","Woord-betekenis-vraag"],
        answer: 0,
        wrongHints: [null, "Niet feitelijk — gaat over bedoeling.", "Bijna — conclusie zit dichtbij maar 'purpose' = bedoeling.", "Niet — geen specifiek woord."],
        uitlegPad: {
          stappen: [{ titel: "Purpose = doel = intentie", tekst: "**Purpose** vraagt naar **bedoeling** van schrijver. Mogelijke antwoorden: to inform (informeren), to entertain (vermaken), to warn (waarschuwen), to persuade (overtuigen). Vergelijk OBIA in NL." }],
          woorden: [{ woord: "purpose", uitleg: "Bedoeling, doel — waarom schreef de schrijver dit?" }],
          theorie: "Strategie: kijk naar **toon** + **laatste alinea**. To inform-tekst is zakelijk, to entertain heeft humor, to warn is bezorgd, to persuade gebruikt 'I think' / 'we should'.",
          niveaus: { basis: "Intentie-vraag — A.", simpeler: "Purpose = bedoeling = intentie-vraag = A.", nogSimpeler: "Bedoeling = A." },
        },
      },
      {
        q: "Wat betekent het signaalwoord **'therefore'**?",
        options: ["Daarom / dus (gevolg)","Echter (contrast)","Omdat (reden)","Bijvoorbeeld"],
        answer: 0,
        wrongHints: [null, "Echter = however.", "Omdat = because.", "Bijvoorbeeld = for example."],
        uitlegPad: {
          stappen: [{ titel: "Therefore = conclusie/gevolg", tekst: "**Therefore / Thus / As a result / Consequently** → signaal voor **GEVOLG / conclusie**. Eerder zin = oorzaak, na 'therefore' = gevolg/conclusie." }],
          voorbeelden: [{ type: "voorbeeld", tekst: "'It rained all night. Therefore, the football match was cancelled.' → cause (rain) + effect (cancellation)." }],
          niveaus: { basis: "Gevolg — A.", simpeler: "Therefore = daarom = A.", nogSimpeler: "Daarom = A." },
        },
      },
      {
        q: "Voor een **woord-betekenis-vraag** wat kun je het beste doen?",
        options: ["Context + voor/achter woord lezen","Direct het woordenboek pakken","Het woord overslaan","Raden willekeurig"],
        answer: 0,
        wrongHints: [null, "Niet — geen woordenboek op CSE.", "Niet — punten misgelopen.", "Niet — kans 25% is te laag."],
        uitlegPad: {
          stappen: [{ titel: "Context-strategie", tekst: "Lees zin met onbekend woord. Kijk **1-2 zinnen ervoor + erna**. Wat past logisch? Soms staat **synoniem** in andere zin, of **voorbeeld** ('such as...') dat woord verheldert." }],
          theorie: "Tip: kijk naar **woord-onderdelen** — prefix (un-/re-/dis-) + root + suffix (-tion/-able/-ly). 'Unbelievable' = un + believe + able = 'niet te geloven'.",
          niveaus: { basis: "Context — A.", simpeler: "Onbekend woord = context lezen = A.", nogSimpeler: "Context = A." },
        },
      },
    ],
  },

  // ─── C. Onbekende woorden raden ───────────────────────────
  {
    title: "Onbekende woorden — raad-strategie",
    explanation:
      "Je hoeft op het CSE GEEN woordenboek bij je. Dus hoe ga je om met onbekende woorden?\n\n**5 raad-strategieën**:\n\n**1. Context** (sterkste):\n• Lees de zin én 1-2 zinnen ervoor en erna.\n• Wat past logisch? Welk woord zou daar kunnen staan?\n• Vaak: synoniem of voorbeeld in nabije zinnen.\n\n**2. Woord-onderdelen herkennen** (prefix + root + suffix):\n• **Prefix** (voorvoegsel): **un-** (niet), **re-** (opnieuw), **dis-** (tegenover), **pre-** (vooraf), **anti-** (tegen), **mis-** (verkeerd).\n• **Root** (stam): vaak een woord dat je wél kent.\n• **Suffix** (achtervoegsel): **-tion** (zelfstandig naamwoord), **-able** (kunnen), **-ful** (vol), **-less** (zonder), **-ly** (bijwoord).\n• Voorbeeld: *unbelievable* = un + believe + able = 'niet te geloven'.\n• *Hopeless* = hope + less = 'zonder hoop'.\n\n**3. Stam herkennen van Latijn/Frans/Duits** (vooral voor moeilijke woorden):\n• Veel Engelse woorden komen uit **Latijn** via Frans of direct.\n• **'-tion / -sion'** komt uit Latijn ('action / decision'). Vaak vergelijkbaar met NL '-tie / -sie'.\n• Voorbeeld: *examination* (Engels) = *examinatie* (NL-equivalent).\n\n**4. Word family** (familie van woord):\n• Als je *educate* kent, herken je *education / educator / educational / educated*.\n• Als je *happy* kent, herken je *happiness / unhappy / happily*.\n\n**5. Sla over + verder lezen**:\n• Niet elk woord is essentieel voor vraag.\n• Soms snap je vraag ook zonder dat ene woord.\n• Lees verder, kom later terug.\n\n**Cito-truc Trans-talen-vertaling**:\n• *Important* ≈ NL 'importeren / import' (heeft te maken met) maar betekent BELANGRIJK.\n• *Final* ≈ NL 'finale' = laatste/einde.\n• *Constant* ≈ NL 'constant' = doorlopend.\n• *Difficult* — een echte 'false friend' weinig — maar let op **'eventueel'** (NL ≈ 'misschien') vs **'eventually'** (Engels ≈ 'uiteindelijk'). False friends bestaan.\n\n**Veel-voorkomende prefixes/suffixes (Cito-niveau)**:\n• un- / non- / dis- / im- / il- / ir- = NIET (unfair, dishonest, impossible)\n• re- = OPNIEUW (rewrite = herschrijven)\n• -tion = handeling (creation, education)\n• -able = kunnen worden (drinkable = drinkbaar)\n• -less = zonder (homeless = zonder huis)\n• -ful = vol (hopeful = hoopvol)\n• -er / -or = persoon (teacher, doctor)\n• -ist = aanhanger (artist, dentist)\n• -ly = bijwoord (quickly = snel)",
    checks: [
      {
        q: "Wat betekent **'unbelievable'** waarschijnlijk?",
        options: ["Niet te geloven","Erg lief","Heel snel","Vol vertrouwen"],
        answer: 0,
        wrongHints: [null, "Niet — geen verband.", "Niet — andere context.", "Niet — verkeerde prefix."],
        uitlegPad: {
          stappen: [{ titel: "un + believe + able", tekst: "**un-** (niet) + **believe** (geloven) + **-able** (kunnen) = 'niet kunnen worden geloofd' = **'niet te geloven'**. Drie woord-onderdelen + ezelsbruggetje 'un' = NIET." }],
          theorie: "Cito-CSE-pattern: 'un-X-able' = vaak 'kan niet X worden'. Unstoppable, unreachable, unbeatable.",
          niveaus: { basis: "Niet te geloven — A.", simpeler: "Un + believe + able = A.", nogSimpeler: "Niet geloven = A." },
        },
      },
      {
        q: "Welk prefix betekent **'opnieuw'**?",
        options: ["Re-","Un-","Dis-","Mis-"],
        answer: 0,
        wrongHints: [null, "Niet — un = NIET.", "Niet — dis = tegenovergesteld.", "Niet — mis = verkeerd."],
        uitlegPad: {
          stappen: [{ titel: "Re = again", tekst: "**Re-** = again (opnieuw). Rewrite (herschrijven), rebuild (herbouwen), reload (herladen), renew (vernieuwen)." }],
          theorie: "Cito-CSE-favoriet: re-write / re-think / re-action vragen. Snap re- = je hebt 5+ woorden in 1 keer.",
          niveaus: { basis: "Re- — A.", simpeler: "Opnieuw = re- = A.", nogSimpeler: "Re = A." },
        },
      },
      {
        q: "Wat is een **'false friend'** in talen?",
        options: ["Woord dat lijkt op NL-woord maar iets anders betekent","Slechte vriend","Verzonnen woord","Onbestaand woord"],
        answer: 0,
        wrongHints: [null, "Letterlijk wel, maar in taal-context anders.", "Niet — wel echte woorden.", "Niet — wel bestaand."],
        uitlegPad: {
          stappen: [{ titel: "False friend = valstrik", tekst: "**False friend** = Engels woord dat LIJKT op NL maar iets ANDERS betekent. Voorbeelden:\n• 'Eventually' (Engels) = 'uiteindelijk', NIET 'eventueel'\n• 'Sympathetic' (Engels) = 'meelevend', NIET 'sympathiek' (= nice)\n• 'Actually' (Engels) = 'eigenlijk', NIET 'actueel' (= current)" }],
          woorden: [{ woord: "false friend", uitleg: "Tweetalig vergelijkbaar woord met andere betekenis." }],
          theorie: "Cito-CSE-val: kies niet snel op 'klinkt-als-NL'. Test in context.",
          niveaus: { basis: "Bedrieglijk woord — A.", simpeler: "False friend = bedrieglijk woord = A.", nogSimpeler: "Bedrieglijk = A." },
        },
      },
      {
        q: "Wat betekent **'hopeless'**?",
        options: ["Zonder hoop","Vol hoop","Hopelijk","Snel"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — dat is 'hopeful'.", "Niet — dat is 'hopefully'.", "Niet — andere root."],
        uitlegPad: {
          stappen: [{ titel: "hope + less", tekst: "**hope** (hoop) + **-less** (zonder/geen) = 'zonder hoop' / hopeloos. **-less** = altijd 'zonder X'. Homeless = zonder huis. Penniless = zonder geld. Useless = zonder nut." }],
          theorie: "Cito-CSE-truc: -less = NEGATIEF. -ful = POSITIEF. Hopeful (vol hoop) vs Hopeless (zonder hoop).",
          niveaus: { basis: "Zonder hoop — A.", simpeler: "hope + less = zonder hoop = A.", nogSimpeler: "Geen hoop = A." },
        },
      },
      {
        q: "Wat is **synoniem** voor 'huge'?",
        options: ["enormous","tiny","slow","old"],
        answer: 0,
        wrongHints: [null, "Tegenstelling — klein.", "Niet — snelheid.", "Niet — leeftijd."],
        uitlegPad: {
          stappen: [{ titel: "Huge = enormous = big", tekst: "**Synoniemen** voor groot: huge / enormous / big / large / giant / massive / vast / tremendous. Tegenstelling: tiny / small / little / minute." }],
          woorden: [{ woord: "synoniem", uitleg: "Woord met (bijna) dezelfde betekenis." }, { woord: "antoniem", uitleg: "Woord met tegengestelde betekenis." }],
          theorie: "Cito-CSE-pattern: synoniem-vragen vragen om groep ('big-family'). Tegenstelling-vragen geven 1 antoniem.",
          niveaus: { basis: "enormous — A.", simpeler: "huge = enormous = synoniem = A.", nogSimpeler: "Enormous = A." },
        },
      },
    ],
  },

  // ─── D. Valstrikken + tips ────────────────────────────────
  {
    title: "Valstrikken + examen-tips",
    explanation:
      "Cito-makers maken bewust **valstrikken** om te zien of leerlingen écht goed lezen.\n\n**5 veel-voorkomende valstrikken**:\n\n**1. Distractors met identieke woorden**:\n• Een fout antwoord gebruikt **exact dezelfde woorden** als de tekst, maar **uit een andere context**.\n• Voorbeeld: tekst zegt 'in summer the kids play outside'. Vraag 'where do kids play?'. Fout antwoord: 'in summer' (klopt — maar vraagt naar plek, niet tijd).\n• **Strategie**: lees vraag zorgvuldig. Antwoord moet het juiste TYPE info geven.\n\n**2. Half-juiste antwoorden**:\n• Antwoord klopt 50% maar ander deel niet.\n• 'The boy was happy and tired' — vraag 'How did the boy feel?'. Optie 'happy' alleen → onvolledig.\n\n**3. Logische valstrikken** (waar zonder bewijs):\n• Antwoord klinkt redelijk maar staat NIET in de tekst.\n• 'Dolphins are smart, like dogs' → vraag over dolfijnen, niet honden. Hondenklimaal niet beantwoorden.\n\n**4. Tijd-valstrik**:\n• Tekst zegt 'in 2010 X started, in 2020 Y'. Vraag 'When did X start?' → 2010.\n• Niet verwarren met Y-jaar.\n\n**5. Negatief geformuleerde vraag**:\n• 'Which is **NOT** true?'\n• Welke optie staat **niet** in de tekst? Drie kloppen wél, 1 niet.\n• **Strategie**: onderstreep 'NOT' voor je antwoordt.\n\n**Algemene examen-tips**:\n\n**A. Tijd**: kijk regelmatig op klok. Loopt niet achter? Sneller. Loopt voor? Diepere check.\n\n**B. Markeer in tekst** (mag op klad-versie): onderstreep trefwoorden uit vraag, omkring antwoord.\n\n**C. Open vragen (als die er zijn)**: schrijf in **Nederlands** (tenzij anders gevraagd). Volledige zin. Geef de **2-3 bewijspunten** uit tekst.\n\n**D. Multiple choice gokken**: als je écht moet gokken — kies **niet de extreme optie** (always / never / all / none zijn vaak fout). Genuanceerde opties (sometimes / usually) winnen vaker.\n\n**E. Antwoord-blad**: vul gelijk in tijdens vraag (niet eind opslaan — risico op vergeten).\n\n**F. Eind-check 10 min**: ga terug door overgeslagen + onzekere vragen.\n\n**Cito-feit**: gemiddeld VMBO-GT-Engels-cijfer = 6,3. Met strategie + woordenschat = 7+.",
    checks: [
      {
        q: "Wat is een **'distractor'** in CSE-meerkeuze?",
        options: ["Fout antwoord dat plausibel lijkt","Lange tekst","Tijdsdruk","Onbekend woord"],
        answer: 0,
        wrongHints: [null, "Niet — distractor is specifieker.", "Niet relevant.", "Niet — woordenschat-issue."],
        uitlegPad: {
          stappen: [{ titel: "Distractor = misleider", tekst: "**Distractor** (afleider) = fout antwoord-optie die EXPRES plausibel klinkt. Doel: testen of leerling écht goed leest. Vaak gebruikt: woorden uit tekst maar uit verkeerde context." }],
          woorden: [{ woord: "distractor", uitleg: "Misleidende antwoord-optie in een multiple-choice vraag." }],
          theorie: "Strategie: bij 4 opties zijn meestal 2 duidelijk fout (snel uit te sluiten) en 2 lijken op elkaar. Vergelijk die twee zorgvuldig.",
          niveaus: { basis: "Misleidend fout antwoord — A.", simpeler: "Distractor = misleider = A.", nogSimpeler: "Misleider = A." },
        },
      },
      {
        q: "Bij vraag *'Which is **NOT** correct?'* wat doe je?",
        options: ["Onderstreep 'NOT' + zoek welke optie niet klopt","Negeer 'NOT'","Geef altijd eerste optie","Skip vraag"],
        answer: 0,
        wrongHints: [null, "Niet — verandert betekenis volledig.", "Niet — willekeurig.", "Niet — eerst proberen."],
        uitlegPad: {
          stappen: [{ titel: "NOT = omgekeerd zoeken", tekst: "Bij 'NOT'/'EXCEPT'-vragen MOET je het **omgekeerde** doen: zoek welke optie **NIET** in tekst staat. 3 zullen kloppen, 1 niet. **Onderstreep 'NOT'** of zet eromheen — voorkom missen." }],
          theorie: "Cito-CSE-valstrik: ~5% van vragen heeft 'NOT'. Veel leerlingen missen 't en geven juiste optie ipv onjuiste.",
          niveaus: { basis: "NOT onderstrepen — A.", simpeler: "NOT-vraag = omgekeerd = A.", nogSimpeler: "Onderstrepen = A." },
        },
      },
      {
        q: "Als je **moet gokken** tussen 'always' en 'sometimes' — wat is veiliger?",
        options: ["Sometimes","Always","Beide even waarschijnlijk","Skip"],
        answer: 0,
        wrongHints: [null, "Niet — extreme woorden vaak fout.", "Statistisch wel verschil.", "Niet — gok als je moet."],
        uitlegPad: {
          stappen: [{ titel: "Extreme woorden = vaak fout", tekst: "Tekst-schrijvers gebruiken zelden absolute taal ('altijd', 'iedereen', 'nooit', 'allemaal'). Daarom zijn opties met **'always / never / all / none'** statistisch VAAK fout in CSE. Genuanceerde 'sometimes / usually / often / many' winnen vaker." }],
          theorie: "Strategie alleen voor noodgevallen (echte gok). Bij twijfel + context: nuance > absoluut.",
          niveaus: { basis: "Sometimes — A.", simpeler: "Bij gok: nuance > absoluut = A.", nogSimpeler: "Sometimes = A." },
        },
      },
      {
        q: "Wat doe je in de **laatste 10 minuten** van het examen?",
        options: ["Terug naar overgeslagen + onzekere vragen","Stoppen + naar buiten","Hele tekst opnieuw lezen","Naar antwoorden-blad kopiëren"],
        answer: 0,
        wrongHints: [null, "Niet — tijd benutten.", "Te langzaam — al klaar.", "Doe direct tijdens vraag."],
        uitlegPad: {
          stappen: [{ titel: "Eind-check = goud", tekst: "10 min eind-check kan **3-5 punten** schelen. **Eerst**: ingevuld de overgeslagen vragen. **Daarna**: check 2-3 onzekere antwoorden — kun je nu beter? Antwoord pas wijzigen als je redelijk zeker bent — vaak is je eerste keuze de juiste." }],
          niveaus: { basis: "Eind-check — A.", simpeler: "Laatste 10 min = check + skip-vragen = A.", nogSimpeler: "Check = A." },
        },
      },
      {
        q: "Bij een **open vraag** (niet multiple choice) hoe schrijf je antwoord?",
        options: ["Korte volledige zin in Nederlands, met bewijs uit tekst","Engels antwoord, woord-voor-woord","Trefwoord alleen","Lange uitleg in Engels"],
        answer: 0,
        wrongHints: [null, "Niet — open vragen meestal in NL.", "Te kort — geen volledige antwoord.", "Te lang + verkeerde taal."],
        uitlegPad: {
          stappen: [{ titel: "Open antwoord = NL + bewijs", tekst: "Open vragen meestal **in Nederlands** beantwoord (tenzij anders aangegeven). **Volledige zin** met **2-3 bewijspunten** uit tekst. Voorbeeld: 'De schrijver vindt sport belangrijk omdat (1) het je gezond houdt en (2) je leert samenwerken.'" }],
          theorie: "Cito-correctie: open vragen scoren punten per bewijspunt. 1 bewijs = 1 punt, 2 bewijs = 2 punten.",
          niveaus: { basis: "NL volledige zin met bewijs — A.", simpeler: "Open vraag = NL + tekstbewijs = A.", nogSimpeler: "NL + bewijs = A." },
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
        options: ["Skim — eerste/laatste zin alinea","Scan — zoek 1 woord","Detail-lezen — woord-voor-woord","Negeer tekst"],
        answer: 0,
        wrongHints: [null, "Scan = specifiek, niet overzicht.", "Te langzaam.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Skim = globaal", tekst: "**Skim**: lees titel + eerste/laatste zin elke alinea + grafiek-onderschriften. Geeft 80% overzicht in 20% tijd." }],
          niveaus: { basis: "Skim — A.", simpeler: "Overzicht = skim = A.", nogSimpeler: "Skim = A." },
        },
      },
      {
        q: "Wat betekent **'eventually'** in het Engels?",
        options: ["Uiteindelijk","Eventueel / misschien","Snel","Vroeger"],
        answer: 0,
        wrongHints: [null, "False friend — lijkt op NL maar betekent anders.", "Niet relevant.", "Niet — 'eventually' = laat."],
        uitlegPad: {
          stappen: [{ titel: "False friend — let op!", tekst: "**Eventually** (Engels) = 'uiteindelijk / na verloop van tijd'. **NIET** 'eventueel' (NL). 'Eventueel' = perhaps / possibly. Cito-favoriete valstrik." }],
          theorie: "Memo: 'eventueel' (NL) ≠ 'eventually' (Engels). Twee aparte concepten.",
          niveaus: { basis: "Uiteindelijk — A.", simpeler: "Eventually = uiteindelijk = A.", nogSimpeler: "Uiteindelijk = A." },
        },
      },
      {
        q: "Wat is **synoniem** voor 'difficult'?",
        options: ["Hard","Easy","Big","Slow"],
        answer: 0,
        wrongHints: [null, "Tegenstelling.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Difficult = hard = tough", tekst: "Synoniemen voor moeilijk: **difficult / hard / tough / challenging / complicated / tricky**." }],
          niveaus: { basis: "Hard — A.", simpeler: "Difficult = hard = A.", nogSimpeler: "Hard = A." },
        },
      },
      {
        q: "**'However'** signaleert:",
        options: ["Tegenstelling / contrast","Reden","Tijd","Voorbeeld"],
        answer: 0,
        wrongHints: [null, "Reden = because.", "Tijd = when / before.", "Voorbeeld = for instance."],
        uitlegPad: {
          stappen: [{ titel: "However = HOE-WEL-VER = maar", tekst: "**However** = contrast-signaalwoord. Tekst gaat ANDERS richting in. Vooral belangrijk voor conclusie-vragen — zin na 'however' = vaak hoofd-standpunt." }],
          niveaus: { basis: "Tegenstelling — A.", simpeler: "However = maar = contrast = A.", nogSimpeler: "Contrast = A." },
        },
      },
      {
        q: "Bij **'What does 'it' refer to in line 5?'** kijk je:",
        options: ["In 1-2 zinnen vóór regel 5","Aan einde tekst","In titel","In voetnoten"],
        answer: 0,
        wrongHints: [null, "Te ver weg — verwijswoord is lokaal.", "Niet — niet daar.", "Niet — voetnoten zeldzaam in CSE."],
        uitlegPad: {
          stappen: [{ titel: "Verwijswoord = lokale referentie", tekst: "**'It / they / this / that'** verwijst altijd naar iets dat **kort daarvoor** is genoemd. Lees 1-2 zinnen voor regel 5 en zoek het zelfstandig naamwoord." }],
          niveaus: { basis: "Vorige zinnen — A.", simpeler: "It verwijst kort terug = vorige zin = A.", nogSimpeler: "Vorige = A." },
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
