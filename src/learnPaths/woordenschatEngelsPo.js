// Leerpad: Woordenschat Engels — basis groep 6-8.
// Mark 2026-05-14: Engels-tegel was leeg op StudentHome; Cito-eindtoets heeft
// geen Engels-onderdeel, maar veel groep 7-8-scholen geven wel Engels-les
// (Early-English). Pad dekt de meest voorkomende woordcategorieën — voldoende
// voor brugklas-overgang.

const COLORS = {
  curve: "#69b2ff",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const stepEmojis = ["👋", "🔢", "🎨", "📅", "👨‍👩‍👧", "🍎", "🦴", "🏆"];

const chapters = [
  { letter: "A", title: "Hello & getallen", emoji: "👋", from: 0, to: 1 },
  { letter: "B", title: "Kleuren, dagen, familie", emoji: "🎨", from: 2, to: 4 },
  { letter: "C", title: "Eten + lichaam", emoji: "🍎", from: 5, to: 6 },
  { letter: "D", title: "Eindopdracht — alle woorden samen", emoji: "🏆", from: 7, to: 7 },
];

const steps = [
  {
    title: "Hello & basics — begroeten",
    explanation: "Engelse begroetingen ken je vast: **Hello** / **Hi**.\n\n**Basis-zinnen**:\n• Hello! = Hallo!\n• Good morning = Goedemorgen\n• Good afternoon = Goedemiddag\n• Good evening = Goedenavond\n• Good night = Welterusten\n• Goodbye / Bye = Tot ziens\n• How are you? = Hoe gaat het?\n• I'm fine, thanks = Goed, dank je\n\n**Voorstellen**:\n• My name is Anna = Mijn naam is Anna\n• Nice to meet you = Aangenaam kennis te maken\n• Where are you from? = Waar kom je vandaan?\n• I'm from the Netherlands = Ik kom uit Nederland",
    checks: [
      {
        q: "Wat betekent **Good morning**?",
        options: ["Goedemorgen", "Welterusten", "Tot ziens", "Hallo"],
        answer: 0,
        wrongHints: [null, "Dat is 'Good night'.", "Dat is 'Goodbye'.", "Te algemeen — 'morning' = ochtend."],
        uitlegPad: {
          stappen: [{ titel: "Morning = ochtend", tekst: "'Good morning' gebruik je tot ~12:00 uur. Daarna 'Good afternoon' (tot ~18:00), 's avonds 'Good evening', en bij het naar bed gaan 'Good night'." }],
          woorden: [{ woord: "morning", uitleg: "ochtend (vanaf opstaan tot middag)" }, { woord: "afternoon", uitleg: "middag (12:00-18:00)" }, { woord: "evening", uitleg: "avond" }, { woord: "night", uitleg: "nacht / vlak voor slapen" }],
          theorie: "Tijd-van-de-dag-begroetingen zijn standaard in Engels: ochtend/middag/avond/nacht. 'Hello' / 'Hi' is altijd OK.",
          voorbeelden: [{ type: "stap", tekst: "Op school 8:30: 'Good morning, teacher!'" }, { type: "stap", tekst: "Na schooltijd 16:00: 'Good afternoon!'" }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "'Good night' is voor naar bed gaan, niet om iemand te groeten in de avond." }],
          niveaus: { basis: "Goedemorgen.", simpeler: "Morning = ochtend → goedemorgen.", nogSimpeler: "Ochtend = goedemorgen." },
        },
      },
      { q: "Wat betekent **Goodbye**?", options: ["Tot ziens", "Hallo", "Hoe gaat het?", "Dank je"], answer: 0, wrongHints: [null, "Niet — dat is 'Hello'.", "Niet — vraag-zin.", "Dat is 'Thanks'."] },
      { q: "Hoe zeg je *'Hoe gaat het?'* in Engels?", options: ["How are you?", "Where are you?", "What is your name?", "How old are you?"], answer: 0, wrongHints: [null, "Waar ben je?", "Wat is je naam?", "Hoe oud ben je?"] },
      { q: "Wat antwoord je op 'How are you?'", options: ["I'm fine, thanks", "Hello", "Goodbye", "Yes"], answer: 0, wrongHints: [null, "Niet — antwoord op een vraag.", "Tegengestelde.", "Te kort."] },
      { q: "Wat is *'My name is Tom'*?", options: ["Mijn naam is Tom", "Ik ben Tom", "Hallo Tom", "Tot ziens Tom"], answer: 0, wrongHints: [null, "Klopt qua betekenis maar letterlijk 'My name is'.", "Geen begroeting.", "Niet."] },
    ],
  },
  {
    title: "Numbers — getallen 0-20",
    explanation: "**Getallen 0-12** (kern — leer uit hoofd):\n• 0 zero / nought\n• 1 one · 2 two · 3 three · 4 four · 5 five\n• 6 six · 7 seven · 8 eight · 9 nine · 10 ten\n• 11 eleven · 12 twelve\n\n**13-19** (eindigt op -teen):\n• 13 thirteen · 14 fourteen · 15 fifteen\n• 16 sixteen · 17 seventeen · 18 eighteen · 19 nineteen\n\n**20-100** (eindigt op -ty):\n• 20 twenty · 30 thirty · 40 forty · 50 fifty\n• 60 sixty · 70 seventy · 80 eighty · 90 ninety\n• 100 one hundred\n\n**Truc**: 'thirteen' = 30+3? Nee! 13 = three+teen. 30 = thir+ty. Spreek 13 met klemtoon **achter** uit ('thirTEEN'), 30 met klemtoon **voor** ('THIRty').",
    checks: [
      { q: "Wat is **5** in Engels?", options: ["five", "four", "six", "fifteen"], answer: 0, wrongHints: [null, "4 = four (klinkt op 'or').", "6 = six (klinkt op 'iks').", "15 = fifteen (-teen achteraan)."] },
      { q: "Wat is **12** in Engels?", options: ["twelve", "ten", "two", "twenty"], answer: 0, wrongHints: [null, "10 = ten.", "2 = two.", "20 = twenty (eindigt op -ty)."],
        uitlegPad: {
          stappen: [
            { titel: "11 + 12 zijn speciaal", tekst: "Bij Engelse getallen volgen 11 en 12 het **-teen**-patroon NIET. Het zijn losse woorden: **eleven** (11) en **twelve** (12). Vanaf 13 wordt het -teen-patroon gebruikt (thirteen, fourteen, ...)." },
            { titel: "Hoe spreek je het uit?", tekst: "**twelve** = klinkt als 'twelf' met zachte v. Net Nederlands 'twaalf' maar met 'we'-klank." },
            { titel: "Truc om te onthouden", tekst: "Engels heeft 12 maanden, 12 uren op een klok-helft. 'Twelve' kom je dagelijks tegen — bv. 'It's twelve o'clock' = 'Het is 12 uur'." },
          ],
          woorden: [{ woord: "twelve", uitleg: "Engels voor 12." }, { woord: "eleven", uitleg: "Engels voor 11. Ook geen -teen." }],
          theorie: "Cito-truc Engels getallen: 0-12 zijn losse woorden, 13-19 = -teen-patroon, 20-90 = -ty-patroon.",
          voorbeelden: [{ type: "stap", tekst: "Op een klok: '12 o'clock' = twelve o'clock. Maand december = twelve month." }],
          basiskennis: [{ onderwerp: "Verschil", uitleg: "Twelve (12) vs twenty (20) — let op de uitspraak: TWELVE vs TWENty (klemtoon vooraan)." }],
          niveaus: {
            basis: "12 = twelve. = A.",
            simpeler: "Engels voor 12 = twelve (niet -teen). = A.",
            nogSimpeler: "twelve = A.",
          },
        },
      },
      { q: "Wat is **17** in Engels?", options: ["seventeen", "seven", "seventy", "sixteen"], answer: 0, wrongHints: [null, "7 = seven (de basis-vorm).", "70 = seventy (klemtoon op SEVEN, eindigt op -ty).", "16 = sixteen (één kleiner, six- begin)."],
        uitlegPad: {
          stappen: [
            { titel: "13-19 = -teen-patroon", tekst: "Alle getallen 13 t/m 19 eindigen op **-teen**. 13 = thirteen, 14 = fourteen, 15 = fifteen, 16 = sixteen, **17 = seventeen**, 18 = eighteen, 19 = nineteen." },
            { titel: "Uitspraak-truc", tekst: "Bij -teen-woorden ligt de klemtoon **achteraan**: 'sevenTEEN' (klink-tikje op TEEN). Bij -ty-woorden ligt de klemtoon vooraan: 'SEVenty'. Dit verschil scheidt 17 van 70." },
            { titel: "Bouwblok herkennen", tekst: "Eerste deel = het cijfer: seven (7) + teen = seventeen (17). Net zo: thir (3) + teen, fif (5) + teen, eigh (8) + teen." },
          ],
          woorden: [{ woord: "seventeen", uitleg: "Engels voor 17. Klemtoon op '-teen'." }, { woord: "seventy", uitleg: "Engels voor 70. Klemtoon op 'SE-venty'." }],
          theorie: "Cito-truc: -teen vs -ty horen totaal anders. Op luister-vragen: lange klemtoon achter = teens. Vooraan = tens.",
          voorbeelden: [{ type: "stap", tekst: "Een kind van 17 = 'seventeen years old'. Een opa van 70 = 'seventy years old'." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Cito-strikvraag: zorg dat je 17 (seventeen) en 70 (seventy) niet verwart in geschrift én uitspraak." }],
          niveaus: {
            basis: "17 = seventeen. = A.",
            simpeler: "seven + teen = seventeen. = A.",
            nogSimpeler: "seventeen = A.",
          },
        },
      },
      { q: "Wat is **40** in Engels?", options: ["forty", "fourteen", "four", "fourty"], answer: 0, wrongHints: [null, "14 = fourteen (-teen-achtervoegsel, 1-cijferig getal).", "4 = four (de basisvorm zonder achtervoegsel).", "Veel mensen schrijven dit fout — Engels schrijft 'forty' ZONDER de u. Uitzondering!"],
        uitlegPad: {
          stappen: [
            { titel: "20-90 = -ty-patroon", tekst: "Veelvouden van 10 eindigen op **-ty**: twenty (20), thirty (30), **forty (40)**, fifty (50), sixty (60), seventy (70), eighty (80), ninety (90)." },
            { titel: "Forty is een spelling-uitzondering!", tekst: "**Belangrijk**: 4 = **four** (met u), maar 40 = **forty** (ZONDER u). Dit is de meest-vergeten spelling-uitzondering in Engels. Onthoud: 'FORTY heeft geen u'." },
            { titel: "Geen 'fourty' bestaat", tekst: "'Fourty' is ALTIJD fout in Engels. Geen native speaker schrijft het zo. Alleen 'forty' = correct." },
          ],
          woorden: [{ woord: "forty", uitleg: "Engels voor 40 — zonder u." }],
          theorie: "Cito-strikvraag: forty wordt vaak fout geschreven door Nederlandse leerlingen omdat het verband met four (4) verwarrend lijkt. Onthoud: 40 = forty, niet fourty.",
          voorbeelden: [{ type: "stap", tekst: "Forty winks = een dutje. Forty days and forty nights = veertig dagen en nachten (Bijbel-uitdrukking)." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Veel native speakers maken zelfs deze fout — jij doet het beter als je 'forty zonder u' onthoudt." }],
          niveaus: {
            basis: "40 = forty (zonder u!). = A.",
            simpeler: "40 in Engels = forty. Pas op: NIET fourty. = A.",
            nogSimpeler: "forty = A.",
          },
        },
      },
      { q: "Welk getal is **eighty**?", options: ["80", "8", "18", "800"], answer: 0, wrongHints: [null, "8 = eight (kale basis-vorm).", "18 = eighteen (-teen-achtervoegsel).", "Te veel — 800 = eight hundred."] },
    ],
  },
  {
    title: "Colors — kleuren",
    explanation: "**Basiskleuren**:\n• red = rood\n• blue = blauw\n• yellow = geel\n• green = groen\n• black = zwart\n• white = wit\n• orange = oranje\n• purple = paars\n• pink = roze\n• brown = bruin\n• grey / gray = grijs (UK / VS)\n\n**Toepassing**: kleur staat **voor** zelfst. naamwoord:\n• a red car (een rode auto)\n• the blue sky (de blauwe lucht)\n• green grass (groen gras)",
    checks: [
      { q: "Wat betekent **red**?", options: ["rood", "groen", "blauw", "geel"], answer: 0, wrongHints: [null, "green = groen.", "blue = blauw.", "yellow = geel."] },
      { q: "Wat betekent **black**?", options: ["zwart", "wit", "bruin", "blauw"], answer: 0, wrongHints: [null, "white = wit.", "brown = bruin.", "blue = blauw."] },
      { q: "Wat is **pink**?", options: ["roze", "rood", "paars", "geel"], answer: 0, wrongHints: [null, "red = rood.", "purple = paars.", "yellow = geel."] },
      { q: "Hoe zeg je *'een groene appel'* in Engels?", options: ["a green apple", "a apple green", "an green apple", "green a apple"], answer: 0, wrongHints: [null, "Andere woordvolgorde — kleur eerst.", "Klinker-regel — niet 'an' voor 'green'.", "Lidwoord eerst."] },
      { q: "Welke kleur is **brown**?", options: ["bruin", "zwart", "grijs", "blauw"], answer: 0, wrongHints: [null, "black = zwart.", "grey = grijs.", "blue = blauw."] },
    ],
  },
  {
    title: "Days & months — dagen en maanden",
    explanation: "**Dagen van de week** (English, hoofdletter!):\n• Monday — maandag\n• Tuesday — dinsdag\n• Wednesday — woensdag\n• Thursday — donderdag\n• Friday — vrijdag\n• Saturday — zaterdag\n• Sunday — zondag\n\n**Maanden** (ook hoofdletter):\n• January, February, March, April\n• May, June, July, August\n• September, October, November, December\n\n**Let op spelling**:\n• Wednesday (NIET 'Wensday' — moeilijk woord!)\n• February (NIET 'Feb-u-ary')\n\n**Datum**: in Engels eerst de maand, dan de dag (US-stijl). 'May 14' = 14 mei.",
    checks: [
      { q: "Wat is **Friday** in NL?", options: ["vrijdag", "zaterdag", "donderdag", "maandag"], answer: 0, wrongHints: [null, "Saturday = zaterdag.", "Thursday = donderdag.", "Monday = maandag."] },
      { q: "Wat is **Wednesday** in NL?", options: ["woensdag", "dinsdag", "donderdag", "maandag"], answer: 0, wrongHints: [null, "Tuesday = dinsdag.", "Thursday = donderdag.", "Monday = maandag."] },
      { q: "Welke maand is **August**?", options: ["augustus", "april", "oktober", "juni"], answer: 0, wrongHints: [null, "April = april.", "October = oktober.", "June = juni."] },
      { q: "Hoe schrijf je **maandag** correct?", options: ["Monday", "monday", "MONDAY", "Munday"], answer: 0, wrongHints: [null, "Engelse dagen krijgen een hoofdletter.", "Niet helemaal hoofdletter.", "Spelfout."] },
      { q: "Welke maand is **December**?", options: ["december", "november", "oktober", "februari"], answer: 0, wrongHints: [null, "November = november.", "October = oktober.", "February = februari."] },
    ],
  },
  {
    title: "Family — familie",
    explanation: "**Familieleden**:\n• mother / mum = moeder / mama\n• father / dad = vader / papa\n• sister = zus\n• brother = broer\n• grandma / grandmother = oma\n• grandpa / grandfather = opa\n• aunt = tante\n• uncle = oom\n• cousin = neef / nicht\n• son = zoon\n• daughter = dochter\n• husband = echtgenoot\n• wife = echtgenote\n\n**Bezit aanduiden** met 's:\n• Tom's sister = Toms zus\n• My mother's car = de auto van mijn moeder\n\n**Family** zelf = familie / gezin.",
    checks: [
      { q: "Wat betekent **brother**?", options: ["broer", "zus", "neef", "oom"], answer: 0, wrongHints: [null, "sister = zus.", "cousin = neef/nicht.", "uncle = oom."] },
      { q: "Wat is **grandma**?", options: ["oma", "tante", "moeder", "zus"], answer: 0, wrongHints: [null, "aunt = tante.", "mother = moeder.", "sister = zus."] },
      { q: "Wat betekent **daughter**?", options: ["dochter", "zoon", "moeder", "vrouw"], answer: 0, wrongHints: [null, "son = zoon.", "mother = moeder.", "wife = vrouw/echtgenote."] },
      { q: "Hoe zeg je *'mijn vader'*?", options: ["my father", "me father", "I father", "my mother"], answer: 0, wrongHints: [null, "Niet 'me' — 'my' is bezittelijk.", "Niet — 'I' is onderwerp.", "Mother = moeder."] },
      { q: "Wat is **cousin**?", options: ["neef of nicht", "broer", "zus", "oom"], answer: 0, wrongHints: [null, "brother = broer.", "sister = zus.", "uncle = oom."] },
    ],
  },
  {
    title: "Food & drinks — eten en drinken",
    explanation: "**Eten**:\n• bread = brood\n• cheese = kaas\n• meat = vlees\n• fish = vis\n• egg = ei\n• apple = appel\n• banana = banaan\n• potato = aardappel\n• rice = rijst\n• pasta = pasta\n• soup = soep\n• salad = salade\n\n**Drinken**:\n• water = water\n• milk = melk\n• juice = sap\n• tea = thee\n• coffee = koffie\n• cola = cola\n\n**Maaltijden**:\n• breakfast = ontbijt\n• lunch = lunch\n• dinner = avondmaal\n\n**Vraag**: *'Are you hungry?'* = heb je honger? · *'Are you thirsty?'* = heb je dorst?",
    checks: [
      { q: "Wat betekent **bread**?", options: ["brood", "kaas", "ei", "vlees"], answer: 0, wrongHints: [null, "cheese = kaas.", "egg = ei.", "meat = vlees."] },
      { q: "Wat is **milk**?", options: ["melk", "water", "sap", "koffie"], answer: 0, wrongHints: [null, "water = water.", "juice = sap.", "coffee = koffie."] },
      { q: "Wat betekent **breakfast**?", options: ["ontbijt", "lunch", "avondeten", "tussendoortje"], answer: 0, wrongHints: [null, "lunch = lunch.", "dinner = avondeten.", "Niet specifiek."] },
      { q: "Wat is **apple**?", options: ["appel", "banaan", "aardappel", "ei"], answer: 0, wrongHints: [null, "banana = banaan.", "potato = aardappel.", "egg = ei."] },
      { q: "Hoe vraag je *'heb je dorst?'* in Engels?", options: ["Are you thirsty?", "Are you hungry?", "Do you eat?", "Is it cold?"], answer: 0, wrongHints: [null, "hungry = honger.", "Eet je? — niet dorst.", "Is het koud? — niet dorst."] },
    ],
  },
  {
    title: "Body parts — lichaamsdelen",
    explanation: "**Hoofd en gezicht**:\n• head = hoofd\n• hair = haar\n• face = gezicht\n• eye(s) = oog (ogen)\n• ear(s) = oor (oren)\n• nose = neus\n• mouth = mond\n• teeth = tanden (1 tand = tooth)\n• tongue = tong\n\n**Lijf**:\n• neck = nek\n• shoulder(s) = schouder(s)\n• arm(s) = arm(en)\n• hand(s) = hand(en)\n• finger(s) = vinger(s)\n• leg(s) = been (benen)\n• foot / feet = voet (voeten)\n• toe(s) = teen (tenen)\n• back = rug\n• stomach / belly = buik\n• heart = hart\n\n**Onregelmatig meervoud**:\n• 1 tooth → 2 teeth\n• 1 foot → 2 feet\n• 1 man → 2 men\n• 1 woman → 2 women",
    checks: [
      { q: "Wat is **eye**?", options: ["oog", "oor", "neus", "mond"], answer: 0, wrongHints: [null, "ear = oor.", "nose = neus.", "mouth = mond."] },
      { q: "Wat betekent **hand**?", options: ["hand", "vinger", "arm", "voet"], answer: 0, wrongHints: [null, "finger = vinger.", "arm = arm.", "foot = voet."] },
      { q: "Wat is het meervoud van **tooth** (tand)?", options: ["teeth", "tooths", "toothes", "tothes"], answer: 0, wrongHints: [null, "Niet — onregelmatig: tooth → teeth.", "Niet bestaand.", "Niet."] },
      { q: "Wat is **leg** in NL?", options: ["been", "arm", "voet", "hoofd"], answer: 0, wrongHints: [null, "arm = arm.", "foot = voet.", "head = hoofd."] },
      { q: "Wat is **heart**?", options: ["hart", "hoofd", "hand", "haar"], answer: 0, wrongHints: [null, "head = hoofd.", "hand = hand.", "hair = haar."] },
    ],
  },
  {
    title: "Eindopdracht — alle woorden samen",
    explanation: "Mix-toets door alle hoofdstukken heen.\n\n**Tip**: lees de Engelse zin/woord 2× door. Denk eraan: a/an = een, the = de/het, 's = bezit, hoofdletter bij dagen + maanden + plaats.",
    checks: [
      { q: "Vertaal: *'My sister has blue eyes.'*", options: ["Mijn zus heeft blauwe ogen.", "Mijn broer heeft blauwe ogen.", "Mijn moeder heeft blauwe ogen.", "Mijn zus heeft groene ogen."], answer: 0, wrongHints: [null, "sister = zus (niet broer).", "sister = zus (niet moeder).", "blue = blauw (niet groen)."] },
      { q: "Vertaal: *'On Monday I eat bread.'*", options: ["Op maandag eet ik brood.", "Op dinsdag eet ik brood.", "Op zaterdag eet ik kaas.", "Op vrijdag eet ik rijst."], answer: 0, wrongHints: [null, "Monday = maandag.", "Monday ≠ dinsdag.", "Monday ≠ zaterdag, bread ≠ kaas."] },
      { q: "Vertaal: *'Three red apples'*", options: ["Drie rode appels", "Drie groene appels", "Drie peren", "Twee rode appels"], answer: 0, wrongHints: [null, "red = rood, niet groen.", "apples = appels, niet peren.", "three = drie."] },
      { q: "Vertaal naar Engels: *'mijn vader'*", options: ["my father", "my mother", "my brother", "your father"], answer: 0, wrongHints: [null, "mother = moeder.", "brother = broer.", "your = jouw, niet mijn."] },
      { q: "Wat hoort bij **maaltijd**?", options: ["breakfast", "Monday", "August", "blue"], answer: 0, wrongHints: [null, "Monday = dag.", "August = maand.", "blue = kleur."] },
      { q: "Welk **getal** komt overeen met **fifteen**?", options: ["15", "5", "50", "14"], answer: 0, wrongHints: [null, "5 = five.", "50 = fifty.", "14 = fourteen."] },
      { q: "Welk **familielid** is **uncle**?", options: ["oom", "tante", "neef", "opa"], answer: 0, wrongHints: [null, "aunt = tante.", "cousin = neef.", "grandpa = opa."] },
      { q: "Welke kleur is **white**?", options: ["wit", "zwart", "grijs", "blauw"], answer: 0, wrongHints: [null, "black = zwart.", "grey = grijs.", "blue = blauw."] },
      { q: "Welke maand komt **na** July?", options: ["August", "June", "September", "May"], answer: 0, wrongHints: [null, "June komt VOOR July.", "September komt 2 maanden later.", "May komt eerder."] },
      { q: "Wat is **goodbye**?", options: ["tot ziens", "hallo", "dank je", "alsjeblieft"], answer: 0, wrongHints: [null, "hello = hallo.", "thanks = dank je.", "please = alsjeblieft."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const woordenschatEngelsPo = {
  id: "woordenschat-engels-po",
  title: "Woordenschat Engels — basis (groep 6-8)",
  emoji: "🇬🇧",
  level: "groep6-8",
  subject: "engels",
  referentieNiveau: "A1",
  sloThema: "Engels — woordenschat basis (Early-English)",
  prerequisites: [],
  intro:
    "Engelse basiswoordenschat voor groep 6-8 — begroetingen, getallen 0-20, kleuren, dagen + maanden, familie, eten + drinken, lichaamsdelen. Voorbereiding op brugklas-Engels (CEFR-niveau A1).",
  triggerKeywords: [
    "woordenschat engels", "engels basis",
    "begroeting engels", "hello goodbye",
    "getallen engels", "numbers english",
    "kleuren engels", "colors colours",
    "dagen engels", "maanden engels", "days months",
    "familie engels", "family",
    "eten engels", "food drinks",
    "lichaamsdelen engels", "body parts",
  ],
  chapters,
  steps,
};

export default woordenschatEngelsPo;
