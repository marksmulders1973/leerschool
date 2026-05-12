// Leerpad: Brugklas-oriëntatie — overgang groep 8 naar VO klas 1.
// Studievaardigheden + organisatie voor net-naar-VO-gegane leerlingen.
// Referentieniveau 1F-2F. 6 stappen.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  po: "#80cbc4",
  vo: "#ffd54f",
  highlight: "#ff8a65",
};

const stepEmojis = ["🎒", "📅", "🧠", "👨‍🏫", "😌", "🏆"];

const chapters = [
  { letter: "A", title: "Verschil basisschool ↔ middelbare school", emoji: "🎒", from: 0, to: 0 },
  { letter: "B", title: "Agenda + plannen", emoji: "📅", from: 1, to: 1 },
  { letter: "C", title: "Leren-leren", emoji: "🧠", from: 2, to: 2 },
  { letter: "D", title: "Veel docenten + vakken", emoji: "👨‍🏫", from: 3, to: 3 },
  { letter: "E", title: "Stress + tijd", emoji: "😌", from: 4, to: 4 },
  { letter: "F", title: "Eind-tips", emoji: "🏆", from: 5, to: 5 },
];

function vergelijkSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="12" font-family="Arial" font-weight="bold">Basisschool (gr 1-8) vs middelbare school (klas 1+)</text>
<rect x="15" y="40" width="140" height="115" rx="8" fill="rgba(128,203,196,0.15)" stroke="${COLORS.po}" stroke-width="1.5"/>
<text x="85" y="60" text-anchor="middle" fill="${COLORS.po}" font-size="11" font-family="Arial" font-weight="bold">Basisschool</text>
<text x="22" y="82" fill="${COLORS.text}" font-size="10" font-family="Arial">• 1 juf/meester</text>
<text x="22" y="98" fill="${COLORS.text}" font-size="10" font-family="Arial">• 1 lokaal</text>
<text x="22" y="114" fill="${COLORS.text}" font-size="10" font-family="Arial">• weinig huiswerk</text>
<text x="22" y="130" fill="${COLORS.text}" font-size="10" font-family="Arial">• ~25-30 leerlingen</text>
<text x="22" y="146" fill="${COLORS.text}" font-size="10" font-family="Arial">• 1 jaar = 1 klas</text>
<rect x="165" y="40" width="140" height="115" rx="8" fill="rgba(255,213,79,0.15)" stroke="${COLORS.vo}" stroke-width="1.5"/>
<text x="235" y="60" text-anchor="middle" fill="${COLORS.vo}" font-size="11" font-family="Arial" font-weight="bold">Middelbare school</text>
<text x="172" y="82" fill="${COLORS.text}" font-size="10" font-family="Arial">• 10-15 docenten</text>
<text x="172" y="98" fill="${COLORS.text}" font-size="10" font-family="Arial">• elk vak ander lokaal</text>
<text x="172" y="114" fill="${COLORS.text}" font-size="10" font-family="Arial">• veel huiswerk</text>
<text x="172" y="130" fill="${COLORS.text}" font-size="10" font-family="Arial">• klas + niveau-groep</text>
<text x="172" y="146" fill="${COLORS.text}" font-size="10" font-family="Arial">• 4-6 jaar opleiding</text>
</svg>`;
}

const steps = [
  {
    title: "Verschil basisschool ↔ middelbare school — wat verandert?",
    explanation:
      "Van **groep 8** (basisschool) naar **klas 1** (middelbare school) is groot. Wat verandert?\n\n**1. Meer docenten**\n• Basisschool: 1 vaste juf/meester + 1-2 vakdocenten.\n• Middelbare school: **10-15 verschillende docenten** — 1 per vak.\n• Elke docent eigen regels + manier.\n\n**2. Verplaatsen tussen lokalen**\n• Basisschool: meestal 1 lokaal hele dag.\n• Middelbare school: elk uur ander lokaal — **rooster volgen**.\n\n**3. Veel meer huiswerk**\n• Basisschool: ~30 min/dag of niet eens.\n• Middelbare school klas 1: ~1-2 uur/dag.\n• Klas 4+: tot 2-3 uur.\n\n**4. Meer vakken**\n• Basisschool: rekenen, taal, wereldoriëntatie.\n• Middelbare school: 13-15 vakken — bv. wiskunde, Nederlands, Engels, Frans, Duits, biologie, aardrijkskunde, geschiedenis, gym, tekenen, muziek, godsdienst, levensbeschouwing.\n\n**5. Toetsen + cijfers**\n• PO: paar toetsen, woordrapport.\n• VO: regelmatige toetsen, **cijfers van 1-10** *(6,0 = voldoende, 5,5 = onvoldoende)*.\n• Rapport elk **kwartaal** of **trimester** *(3-4 per jaar)*.\n\n**6. Niveau-groep**\n• Vmbo (bb/kb/gt), havo, vwo *(gymnasium = vwo + Latijn/Grieks)*.\n• In klas 1-2 vaak nog **brug-niveau** *(mengeling)*.\n• Vanaf klas 3 echte niveau-keuze.\n\n**7. Profiel-keuze**\n• Klas 3 vmbo: **richting** kiezen *(techniek, economie, zorg+welzijn, etc.)*.\n• Klas 3 havo/vwo: **profiel** *(N&T, N&G, E&M, C&M)*.\n\n**Eerste paar weken — overlevingstips**:\n• Loop de school door — waar zijn alle lokalen?\n• Schrijf rooster duidelijk op.\n• Vraag aan oudere leerlingen.\n• Eerste cijfer slecht? Niet panikeren — wennen kost tijd.\n• Vriendjes maken — eet samen, doe samen sport.\n\n**Cito-feitje**:\nVeel scholen hebben een **'meet & greet'** of **brugklaskamp** in eerste week — om vrienden te maken + school te leren kennen.",
    svg: vergelijkSvg(),
    checks: [
      {
        q: "Hoeveel **docenten** op middelbare school klas 1 ongeveer?",
        options: ["10-15", "1-2", "5", "30"],
        answer: 0,
        wrongHints: [null, "Klopt — per vak een ander.", "PO.", "Te weinig.", "Te veel."],
      },
      {
        q: "**Voldoende cijfer** op middelbare school?",
        options: ["6,0 of hoger", "5,0 of hoger", "4,0 of hoger", "10"],
        answer: 0,
        wrongHints: [null, "Klopt.", "5,5 is onvoldoende.", "Te laag.", "Maximum, niet ondergrens."],
      },
      {
        q: "Hoeveel **rapporten** per jaar op middelbare school?",
        options: ["3-4", "1", "10", "0"],
        answer: 0,
        wrongHints: [null, "Klopt — per trimester.", "Te weinig.", "Te veel.", "Wel rapporten."],
      },
      {
        q: "Wat is een **profiel** in havo/vwo?",
        options: ["Vakkenpakket-keuze in klas 3", "Foto op pasje", "Brugklaskamp", "Schoolwebsite"],
        answer: 0,
        wrongHints: [null, "Klopt — N&T, N&G, E&M, C&M.", "Niet onderwijs.", "Activiteit.", "Niet."],
      },
    ],
  },
  {
    title: "Agenda + plannen",
    explanation:
      "**Agenda bijhouden** is de #1 vaardigheid op de middelbare school.\n\n**Soorten agenda**:\n• **Papier-agenda** *(traditioneel, scholen geven vaak gratis)*.\n• **Digitaal** *(Google Calendar, Magister, Zermelo)*.\n• **Combinatie** — beide gebruiken.\n\n**Wat opschrijven**:\n• **Huiswerk per vak**: 'Wiskunde §2.3 t/m 2.5 voor donderdag'.\n• **Toetsen**: 'Engels toets 20 sep, hfst 1-3'.\n• **Werkstukken** + deadlines.\n• **Praktische dingen**: bril mee, gym-spullen, gym-vrije.\n• **Activiteiten** *(school, sport, vrienden)*.\n\n**Plannen** *(voor langere taken)*:\n\n**Stap 1 — Achterwaarts plannen**:\n• Deadline noteren.\n• Tel terug: hoeveel dagen heb je?\n• Verdeel werk over die dagen.\n\nVoorbeeld werkstuk over Spanje, deadline 30 sep:\n• 30 sep: inleveren.\n• 29 sep: laatste check.\n• 27-28: schrijven.\n• 24-26: zoeken + uitwerken.\n• 23: onderwerp bedacht.\n\n**Stap 2 — Niet alles tegelijk**:\n• Wiskunde maandag, niet alle vakken zelfde dag.\n• Spreid huiswerk.\n\n**Stap 3 — Concentratieblokken**:\n• 25-30 min werken + 5 min pauze *(Pomodoro)*.\n• Niet 3 uur achter elkaar.\n\n**Magister / SOMtoday**:\nDe meeste scholen gebruiken **Magister** of **SOMtoday** voor:\n• Rooster.\n• Huiswerk *(zet docent erin)*.\n• Cijfers.\n• Berichten.\n\nLeer dit als eerste!\n\n**Cito-tips**:\n• Schrijf huiswerk op **bij het noteren** — niet 's avonds proberen herinneren.\n• Check je agenda **'s ochtends + 's middags + 's avonds**.\n• Maak op zondag een **week-overzicht** voor jezelf.",
    checks: [
      {
        q: "Wat is **achterwaarts plannen**?",
        options: ["Vanaf deadline terugtellen", "Voorwaarts vanaf vandaag", "Geen planning", "Last-minute"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Werkt minder goed.", "Vermijd.", "Vermijd."],
      },
      {
        q: "Welke app voor schoolinfo in NL?",
        options: ["Magister of SOMtoday", "TikTok", "WhatsApp", "Spotify"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet voor school.", "Niet voor school.", "Niet voor school."],
      },
      {
        q: "**Pomodoro**-techniek = ?",
        options: ["25 min werk + 5 min pauze", "1 uur werk", "Doorwerken zonder pauze", "Geen techniek"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te lang aaneengesloten.", "Concentratie zakt.", "Wel techniek."],
      },
      {
        q: "Wanneer huiswerk **opschrijven**?",
        options: ["Direct in les", "'s Avonds uit hoofd", "Bij thuiskomst", "Volgende dag"],
        answer: 0,
        wrongHints: [null, "Klopt — vergeet je dan niet.", "Vergeet je vaak.", "Soms te laat.", "Te laat."],
      },
    ],
  },
  {
    title: "Leren-leren — technieken",
    explanation:
      "**Leren = werk** maar je kunt slim leren.\n\n**5 leertechnieken** *(uit het hoofd!)*:\n\n**1. Samenvatten** 📝\n• Kort opschrijven wat belangrijk is.\n• In **eigen woorden** *(niet kopiëren)*.\n• Met **steekwoorden** + schema's.\n\n**2. Herhalen — spaced repetition** ⏰\n• Niet alles in 1 keer leren *(cramping)*.\n• Verdeel over **meerdere dagen**:\n  - Dag 1: leren.\n  - Dag 3: herhalen.\n  - Dag 7: herhalen.\n  - Dag 14: herhalen.\n• **Veel effectiever** dan 3 uur achter elkaar.\n\n**3. Actief leren** 💡\n• Lezen + vragen stellen aan jezelf.\n• Probeer te **vertellen wat je geleerd hebt** *(Feynman-techniek)*.\n• Als je het kunt uitleggen aan een 8-jarige, ken je het echt.\n\n**4. Visueel leren** 🎨\n• **Mindmap** maken.\n• **Schema's** + plaatjes.\n• Verbinden met dingen die je al kent.\n\n**5. Oefenen + toetsen** 📊\n• **Oude toetsen** maken.\n• Online quizjes.\n• Vrienden testen elkaar.\n• Fouten zijn **goed** — leer ervan.\n\n**Mythes — niet doen**:\n\n**'Multitasking'** ❌\n• Tegelijk huiswerk + telefoon + muziek?\n• Hersenen kunnen niet echt multitasken — je switcht steeds, kost energie.\n• **Concentreer op 1 ding**.\n\n**'Alles in 1 avond leren'** ❌\n• Cramping = veel onthouden voor toets, maar binnen 1 week vergeten.\n• Beter: **verspreid over dagen**.\n\n**'Passief overlezen'** ❌\n• Tekst 5 keer lezen werkt slecht.\n• Beter: lezen + jezelf vragen stellen + opschrijven.\n\n**Tip — Slaapt voor toets**:\n• Goede slaap *(8 uur)* helpt **memorie**.\n• Niet hele nacht doorleren — werkt averechts.\n\n**Cito-feitje**:\nStudies *(o.a. door Pomerantz, 2017)* tonen aan: leerlingen die **plannen + spreiden** krijgen gemiddeld **1 punt hogere cijfers** dan leerlingen die last-minute leren.",
    checks: [
      {
        q: "Wat is **spaced repetition**?",
        options: ["Leerstof spreiden over meerdere dagen", "1x leren is genoeg", "Steeds opnieuw lezen", "Cramping"],
        answer: 0,
        wrongHints: [null, "Klopt — effectiever.", "Te weinig.", "Werkt slecht.", "Tegenovergesteld."],
      },
      {
        q: "Wat is **Feynman-techniek**?",
        options: ["Uitleggen aan iemand anders", "Hard leren", "Veel slapen", "Gokken"],
        answer: 0,
        wrongHints: [null, "Klopt — als je het kunt uitleggen, ken je het.", "Niet specifiek.", "Slaap wel helpt, maar geen Feynman.", "Niet."],
      },
      {
        q: "Welke is **niet** effectief?",
        options: ["Multitasking met tel + muziek + huiswerk", "Mindmap maken", "Vragen aan jezelf", "Spaced repetition"],
        answer: 0,
        wrongHints: [null, "Klopt — hersenen kunnen niet echt multitasken.", "Wel effectief.", "Wel effectief.", "Wel effectief."],
      },
      {
        q: "Beste **slaap voor toets**?",
        options: ["8 uur", "All-nighter", "3 uur", "0 uur"],
        answer: 0,
        wrongHints: [null, "Klopt — helpt geheugen.", "Slecht idee.", "Te weinig.", "Onmogelijk."],
      },
    ],
  },
  {
    title: "Omgaan met veel docenten + vakken",
    explanation:
      "Op de middelbare school heb je **10-15 docenten** — elk met eigen stijl.\n\n**Hoe ga je daarmee om?**\n\n**1. Respecteer verschillen**:\n• Docent A is strikt, docent B is grappig — beide oké.\n• Pas je houding aan per les *(niet brutaal bij strikte docent)*.\n\n**2. Onthoud namen + vakken**:\n• Eerste 2 weken — lijst aanleggen:\n```\n• meneer Jansen — wiskunde\n• mevrouw De Vries — Nederlands\n• meneer Smit — gym\n• ...\n```\n\n**3. Vraag stellen**:\n• Goede vraag = **specifiek**. Bv. 'Ik snap blz 23 niet, kunt u stap 3 uitleggen?'.\n• Slechte vraag = vaag. 'Ik snap niets'.\n• Bang om dom over te komen? **Anderen hebben dezelfde vraag**.\n\n**4. Bij conflict — niet panieken**:\n• Praat met docent rustig.\n• Als nodig: **mentor** *(je vaste contactpersoon)*.\n• Daarna eventueel team-leider of leerlingbegeleider.\n• Pas in noodgeval: ouders erbij.\n\n**5. Mentor**:\n• Eén docent is jouw **mentor** voor klas-1.\n• Komt vaak persoonlijk bij je terug *(mentor-uur, 1× per week)*.\n• Help-loket voor: roosterprobleem, ruzie, stress, alles.\n\n**Tips per vak-type**:\n\n**Taal-vakken** *(NL, Engels, Frans, Duits)*:\n• **Veel woordjes** — kleine pakjes per dag *(15 min/dag)*.\n• Lezen ook in vrije tijd helpt.\n\n**Exact** *(wiskunde, natuurkunde, scheikunde, biologie)*:\n• **Oefenen** — niet alleen lezen.\n• Werkboek + opgaven maken.\n• Achterstand niet ophalen op laatste moment.\n\n**Wereldoriëntatie** *(geschiedenis, aardrijkskunde)*:\n• **Begrippen** in eigen woorden.\n• Tijdlijnen maken voor geschiedenis.\n\n**Creatief** *(tekenen, muziek, drama)*:\n• Probeer dingen — niet alleen 'goed/fout'.\n• Eigen stijl ontwikkelen.\n\n**Gym + sport**:\n• Niet bang zijn — niet iedereen is goed.\n• Spullen mee! Vergeten = vaak straf.\n\n**Cito-feitje**:\nVolgens onderzoek voelt **1 op 3 brugklassers** zich overweldigd in eerste maanden. **Normaal**. Praten met mentor of ouders helpt.",
    checks: [
      {
        q: "Wie is je **mentor**?",
        options: ["Vaste docent-contact, mentor-uur 1×/week", "Schoolleider", "Conciërge", "Klasgenoot"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet primair voor jou.", "Niet docent.", "Niet officieel."],
      },
      {
        q: "Bij **conflict met docent**, eerst:",
        options: ["Rustig praten met docent zelf", "Direct ouders", "Direct schooldirecteur", "Negeren"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Later eventueel.", "Veel later eventueel.", "Maakt het erger."],
      },
      {
        q: "Hoe leer je **woordjes** vreemde talen het best?",
        options: ["Klein per dag (15 min)", "1 uur per week", "All-nighter", "Niet doen"],
        answer: 0,
        wrongHints: [null, "Klopt — spaced repetition.", "Eens per week vergeet je.", "Werkt averechts.", "Wel nodig."],
      },
      {
        q: "Hoeveel **brugklassers** voelen zich overweldigd?",
        options: ["~1 op 3", "1 op 100", "Niemand", "Iedereen"],
        answer: 0,
        wrongHints: [null, "Klopt — normaal, niet alleen jij.", "Veel meer.", "Niet zo.", "Niet iedereen."],
      },
    ],
  },
  {
    title: "Stress + tijd-management",
    explanation:
      "**Stress** in brugklas is **normaal** maar wel onhandig.\n\n**Tekens van stress**:\n• Slecht slapen.\n• Hoofdpijn.\n• Snel boos / verdrietig.\n• Geen zin in school.\n• Te veel uitstellen.\n\n**Wat helpt**:\n\n**1. Plannen** *(zie stap 2)*:\n• Overzicht = minder stress.\n• Doelen verdelen in stapjes.\n\n**2. Slaap** 💤\n• **8-10 uur** voor brugklas-leeftijd.\n• Geen scherm 1 uur voor bed *(blauw licht houdt wakker)*.\n• Vaste tijd naar bed.\n\n**3. Beweging** 🚴\n• **30-60 min/dag** helpt brein + stemming.\n• Niet alleen sporten — fietsen naar school telt.\n\n**4. Pauzes** ☕\n• Werk **niet 3 uur door**.\n• 25-30 min werk + 5 min pauze *(Pomodoro)*.\n• In pauze: rek-en-strek, drink water, kijk uit raam.\n\n**5. Praten** 💬\n• Met ouders, vrienden, mentor.\n• Niet alles oppotten.\n• Helpt enorm.\n\n**6. Eten + drinken** 🍎\n• Ontbijt is belangrijk *(focus + energie)*.\n• Vaste maaltijden — geen lange perioden zonder.\n• Water — minimaal 1,5 L per dag.\n• Niet te veel suiker / energie-drank.\n\n**7. Vrije tijd** 🎮\n• Werk én ontspanning.\n• Hobby, sport, vrienden, gewoon niets doen — allemaal nodig.\n\n**Stress vermijden — 'No' zeggen**:\n• Te veel buitenschoolse activiteiten? **Schrap iets**.\n• Vrienden willen ook jou na school zien? **Plan in agenda**.\n• Niet alles tegelijk kunnen — kies.\n\n**Bij extreme stress**:\n• Praat met mentor.\n• Schoolpsycholoog *(beschikbaar op meeste scholen)*.\n• Huisarts → kan doorverwijzen.\n• Bel **De Kindertelefoon** *(0800-0432, gratis, anoniem)*.\n\n**Tijd-management — gouden regels**:\n\n**1. Eisenhower-matrix**:\nVerdeel taken:\n• **Urgent + belangrijk**: doe nu *(toets morgen)*.\n• **Niet urgent + belangrijk**: plan in *(werkstuk over 2 wkn)*.\n• **Urgent + niet belangrijk**: delegeer of doe snel *(boodschap voor ma)*.\n• **Niet urgent + niet belangrijk**: doe later of niet *(YouTube-filmpje)*.\n\n**2. Eet de kikker eerst** 🐸:\nMoeilijke taak **eerst** doen *(beste op ochtend)*. Niet uitstellen.\n\n**3. Geen perfectionisme**:\n• 8/10 is prima — 10/10 kost veel meer tijd voor weinig extra winst.\n• Volg de '80/20-regel': 20% van je werk levert 80% van resultaat.\n\n**Cito-feitje**:\n**1 op 5 jongeren** *(15-25 jr)* heeft mentale problemen *(angst, depressie)*. **Praten** is eerste stap. Niet alleen — er is altijd hulp.",
    checks: [
      {
        q: "Hoeveel **slaap** voor brugklas-leeftijd?",
        options: ["8-10 uur", "4-5 uur", "12+ uur", "Geen vast aantal"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Te veel.", "Wel een aanbeveling."],
      },
      {
        q: "Wat is **Eisenhower-matrix**?",
        options: ["Verdelen op urgent + belangrijk", "Een Duitse generaal", "Wiskunde-formule", "Spel"],
        answer: 0,
        wrongHints: [null, "Klopt — tijd-management tool.", "Wel naamgever maar tool is bedoeld.", "Niet wiskunde.", "Niet spel."],
      },
      {
        q: "**'Eet de kikker eerst'** betekent?",
        options: ["Moeilijke taak meteen 's ochtends", "Letterlijk kikker", "Eet ontbijt", "Wachten"],
        answer: 0,
        wrongHints: [null, "Klopt — Mark Twain.", "Niet letterlijk.", "Ontbijten apart.", "Tegenovergesteld."],
      },
      {
        q: "Wat is **Kindertelefoon**-nummer?",
        options: ["0800-0432 (gratis)", "112", "0900-9292", "Onbekend"],
        answer: 0,
        wrongHints: [null, "Klopt — anoniem ook.", "Spoed.", "ANWB.", "Wel bekend."],
      },
    ],
  },
  {
    title: "Eind-tips brugklas + Cito-mix",
    explanation:
      "**Top-10 tips voor brugklas-overlevings-kit**:\n\n**1.** Schrijf altijd huiswerk **direct op** *(in les, niet later)*.\n**2.** Magister/SOMtoday checken **dagelijks**.\n**3.** Plan op **zondag** week-overzicht.\n**4.** Studeer **gespreid** — niet 1 dag voor toets.\n**5.** **Slaap 8+ uur**, geen scherm voor bed.\n**6.** **Beweeg** dagelijks — fiets naar school telt.\n**7.** **Praat** als iets stress geeft — ouders, mentor, vriend.\n**8.** Eerst **moeilijke vak** doen, dan makkelijke.\n**9.** **Eet ontbijt** — focus + energie.\n**10.** **8-cijfer is prima** — geen perfectionisme.\n\n**Boodschap voor leerlingen**:\nDe brugklas voelt eerst overweldigend, maar **iedereen went**. Na 6 maanden is het normaal. Niet bang zijn — het komt goed.\n\nVraag hulp als je iets niet snapt. Niet uit schaamte stil blijven zitten. Docenten + mentor zijn er om je te helpen.\n\n**Voor de Cito-eindopdracht**: alle eerdere onderwerpen door elkaar.",
    checks: [
      {
        q: "Wanneer Magister checken?",
        options: ["Dagelijks", "Eens per week", "Aan eind maand", "Nooit"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Veel te weinig.", "Wel."],
      },
      {
        q: "Wanneer **week-overzicht** maken?",
        options: ["Zondag", "Vrijdag", "Maandag-ochtend", "Niet nodig"],
        answer: 0,
        wrongHints: [null, "Klopt — rustige dag voor week.", "Te laat.", "Op moment dat week begint.", "Wel nuttig."],
      },
      {
        q: "Welk **cijfer** is acceptabel?",
        options: ["~8, geen perfectionisme", "Altijd 10", "Onvoldoende ook ok", "Geen mening"],
        answer: 0,
        wrongHints: [null, "Klopt — 80/20-regel.", "Onnodig stress.", "Wel hoger streven.", "Wel mening."],
      },
      {
        q: "Belangrijkste tip bij stress?",
        options: ["Praten met iemand", "Alles binnen", "Negeren", "Veel slapen tot beter"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Maakt erger.", "Maakt erger.", "Niet alleen oplossing."],
      },
      {
        q: "Hoeveel docenten ongeveer in klas 1 middelbare school?",
        options: ["10-15", "1", "5", "30"],
        answer: 0,
        wrongHints: [null, "Klopt.", "PO.", "Te weinig.", "Te veel."],
      },
      {
        q: "Wat is **Pomodoro**?",
        options: ["25 min werk + 5 min pauze", "Italiaanse tomaat", "Snel doorwerken", "Pizza"],
        answer: 0,
        wrongHints: [null, "Klopt — naam komt van tomaat-timer.", "Letterlijk wel, maar techniek bedoeld.", "Tegenovergesteld.", "Niet."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const brugklasOrientatie = {
  id: "brugklas-orientatie",
  title: "Brugklas-tips — overgang naar middelbare school (groep 8 → klas 1)",
  emoji: "🎒",
  level: "groep8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Studievaardigheden — overgang basisschool naar middelbare school",
  prerequisites: [
    { id: "cito-strategieen-groep8", title: "Cito-strategieen groep 8", niveau: "po-1F" },
  ],
  intro:
    "Brugklas-overgang voor groep 8 → klas 1 — verschil basisschool/middelbare school (10-15 docenten, cijfers 1-10, profiel-keuze), agenda + Magister, leren-leren (spaced repetition, Feynman, Pomodoro), stress + tijd-management (Eisenhower, eet de kikker), top-10 tips. ~15 min.",
  triggerKeywords: [
    "brugklas", "VO", "voortgezet onderwijs", "middelbare school", "overgang groep 8",
    "Magister", "SOMtoday", "agenda",
    "leren leren", "Pomodoro", "spaced repetition",
    "stress school", "tijd management",
  ],
  chapters,
  steps,
};

export default brugklasOrientatie;
