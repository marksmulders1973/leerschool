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
      "De stap van **groep 8** (basisschool) naar **klas 1** (middelbare school) is groot. Wat verandert?\n\n**1. Meer docenten**\n• Basisschool: 1 vaste juf/meester + 1-2 vakdocenten.\n• Middelbare school: **10-15 verschillende docenten** — 1 per vak.\n• Elke docent eigen regels + manier.\n\n**2. Verplaatsen tussen lokalen**\n• Basisschool: meestal 1 lokaal hele dag.\n• Middelbare school: elk uur ander lokaal — **rooster volgen**.\n\n**3. Veel meer huiswerk**\n• Basisschool: ~30 min/dag of niet eens.\n• Middelbare school klas 1: ~1-2 uur/dag.\n• Klas 4+: tot 2-3 uur.\n\n**4. Meer vakken**\n• Basisschool: rekenen, taal, wereldoriëntatie.\n• Middelbare school: 13-15 vakken — bv. wiskunde, Nederlands, Engels, Frans, Duits, biologie, aardrijkskunde, geschiedenis, gym, tekenen, muziek, godsdienst, levensbeschouwing.\n\n**5. Toetsen + cijfers**\n• Basisschool: paar toetsen, woordrapport.\n• Middelbare school: regelmatige toetsen, **cijfers van 1-10** *(5,5 of hoger = voldoende, lager = onvoldoende)*.\n• Rapport elk **kwartaal** of **trimester** *(3-4 per jaar)*.\n\n**6. Niveau-groep**\n• Vmbo (basis, kader, gemengd/theoretisch), havo, vwo *(gymnasium = vwo + Latijn/Grieks)*.\n• In klas 1-2 vaak nog **brug-niveau** *(mengeling)*.\n• Vanaf klas 3 echte niveau-keuze.\n\n**7. Profiel-keuze**\n• Eind klas 2 vmbo: **profiel** kiezen *(bv. techniek, economie, zorg en welzijn)*.\n• Klas 3 havo/vwo: **profiel** *(Natuur en Techniek, Natuur en Gezondheid, Economie en Maatschappij, Cultuur en Maatschappij)*.\n\n**Eerste paar weken — overlevingstips**:\n• Loop de school door — waar zijn alle lokalen?\n• Schrijf rooster duidelijk op.\n• Vraag aan oudere leerlingen.\n• Eerste cijfer slecht? Geen paniek — wennen kost tijd.\n• Vriendjes maken — eet samen, doe samen sport.\n\n**Toets-feitje**:\nVeel scholen hebben een **'meet & greet'** of **brugklaskamp** in eerste week — om vrienden te maken + school te leren kennen.",
    svg: vergelijkSvg(),
    checks: [
      {
        q: "Hoeveel **docenten** heb je ongeveer in klas 1 van de middelbare school?",
        options: ["10-15", "1-2", "4-6", "25-30"],
        answer: 0,
        wrongHints: [null, "Zo is het op de basisschool. Krijg je op de middelbare school één docent voor alles?", "Tel de vakken op een rooster. Krijgt elk vak een eigen docent?", "Dat zijn er meer dan je vakken hebt. Heeft één vak zoveel docenten?"],
      },
      {
        q: "Vanaf welk cijfer heb je op de middelbare school een **voldoende**?",
        options: ["5,5 of hoger", "5,0 of hoger", "4,0 of hoger", "6,0 of hoger"],
        answer: 0,
        wrongHints: [null, "5,0 is nog onvoldoende.", "Een 4 of een 5 is nog onvoldoende. Waar begint voldoende?", "Een 5,8 is ook al een voldoende. Waar ligt de grens dan precies?"],
      },
      {
        q: "Hoeveel **rapporten** krijg je per jaar op de middelbare school?",
        options: ["3-4", "1", "8-10", "2"],
        answer: 0,
        wrongHints: [null, "Hoor je dan maar één keer per jaar hoe je ervoor staat?", "Dan kreeg je bijna elke maand een rapport. Is dat zo?", "Na elke periode van het jaar komt er een rapport. Hoeveel periodes zijn er?"],
      },
      {
        q: "Wat is een **profiel** in havo/vwo?",
        options: ["Een keuze voor een groep vakken in klas 3", "Je schooladvies aan het eind van groep 8", "De keuze tussen havo en vwo in klas 1", "De keuze voor één extra vak in de brugklas"],
        answer: 0,
        wrongHints: [null, "Het schooladvies gaat over je niveau. Wat kies je halverwege havo/vwo?", "Havo of vwo is je niveau, geen profiel. Wat kies je halverwege havo/vwo?", "Het gaat niet om één los vak. Wat kies je halverwege havo/vwo?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoe gaat het meestal met **lokalen** op de middelbare school?",
        options: [
          "Je gaat vaak naar een ander lokaal",
          "Je zit de hele dag in één lokaal",
          "Je krijgt alle lessen in de aula",
          "Je kiest elke dag zelf een lokaal",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Zo gaat het vaak op de basisschool. Wat volg je op de middelbare school?",
          null,
          "Wie bepaalt waar je les hebt? Kijk naar je rooster.",
        ],
      },
      {
        q: "Hoeveel tijd ben je in **klas 1** per dag ongeveer met huiswerk bezig?",
        options: ["1-2 uur", "5-10 minuten", "4-5 uur", "15-20 minuten"],
        answer: 0,
        wrongHints: [
          null,
          "Op de middelbare school krijg je juist méér huiswerk dan op de basisschool.",
          "Dan blijft er geen tijd over om te eten, te sporten en te slapen. Is het zoveel?",
          "Zo is het vaak in groep 8. Krijg je op de middelbare school meer of minder huiswerk?",
        ],
      },
      {
        q: "Hoeveel **vakken** heb je ongeveer op de middelbare school?",
        options: ["13-15", "2-3", "25-30", "5-6"],
        answer: 0,
        wrongHints: [
          null,
          "Dat lijkt meer op de basisschool: rekenen en taal.",
          "Zoveel vakken passen niet op één rooster. Tel de vakken die je kent.",
          "Denk aan wiskunde, Engels, Frans, biologie, gym… Zijn het er maar zo weinig?",
        ],
      },
      {
        q: "Wat is een **brugklaskamp**?",
        options: [
          "Een uitje om je klas te leren kennen",
          "Een toets aan het eind van het jaar",
          "Een sportdag aan het eind van het jaar",
          "Een zomerkamp voor wie bijles nodig heeft",
        ],
        answer: 0,
        wrongHints: [null, "Bij een kamp hoort geen cijfer. Waarvoor is het in de eerste week?", "Een kamp in de brugklas is juist aan het begin. Waarvoor is het?", "Het is voor de hele klas, niet alleen voor wie hulp nodig heeft."],
      },
      {
        q: "Wat is het **gymnasium**?",
        options: [
          "Vwo met Latijn en Grieks",
          "Havo met extra gymlessen",
          "Vmbo met veel sport",
          "Vwo met Spaans en Chinees",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Het woord lijkt op 'gym', maar het gaat om een niveau. Welke talen krijg je erbij?",
          "Het gymnasium is het hoogste niveau. Hoort vmbo daarbij?",
          "Je krijgt er wel extra talen, maar heel oude. Welke?",
        ],
      },
      {
        q: "Je haalt je **eerste cijfer** en het valt tegen. Wat is een goede houding?",
        options: [
          "Rustig blijven, wennen kost tijd",
          "Meteen een lager niveau vragen",
          "Voortaan elke avond tot laat leren",
          "Er niet over praten, dan went het vanzelf",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Eén cijfer zegt nog niet alles. Wat heb je in het begin nodig?",
          "Te veel leren en te weinig slapen helpt niet. Wat heb je in het begin vooral nodig?",
          "Erover praten helpt juist vaak.",
        ],
      },
    ],
  },
  {
    title: "Agenda + plannen",
    explanation:
      "**Agenda bijhouden** is de #1 vaardigheid op de middelbare school.\n\n**Soorten agenda**:\n• **Papier-agenda** *(traditioneel, scholen geven vaak gratis)*.\n• **Digitaal** *(Google Calendar, Magister, Zermelo)*.\n• **Combinatie** — beide gebruiken.\n\n**Wat opschrijven**:\n• **Huiswerk per vak**: 'Wiskunde §2.3 t/m 2.5 voor donderdag'.\n• **Toetsen**: 'Engels toets 20 sep, hfst 1-3'.\n• **Werkstukken** + deadlines.\n• **Praktische dingen**: bril mee, gymspullen.\n• **Activiteiten** *(school, sport, vrienden)*.\n\n**Plannen** *(voor langere taken)*:\n\n**Stap 1 — Achterwaarts plannen**:\n• Deadline noteren.\n• Tel terug: hoeveel dagen heb je?\n• Verdeel werk over die dagen.\n\nVoorbeeld werkstuk over Spanje, deadline 30 sep:\n• 30 sep: inleveren.\n• 29 sep: laatste check.\n• 27-28: schrijven.\n• 24-26: zoeken + uitwerken.\n• 23: onderwerp bedacht.\n\n**Stap 2 — Niet alles tegelijk**:\n• Wiskunde maandag, niet alle vakken zelfde dag.\n• Spreid huiswerk.\n\n**Stap 3 — Concentratieblokken**:\n• 25-30 min werken + 5 min pauze *(Pomodoro)*.\n• Niet 3 uur achter elkaar.\n\n**Magister / SOMtoday**:\nDe meeste scholen gebruiken **Magister** of **SOMtoday** voor:\n• Rooster.\n• Huiswerk *(zet docent erin)*.\n• Cijfers.\n• Berichten.\n\nLeer dit als eerste!\n\n**Toets-tips**:\n• Schrijf huiswerk op **in de les zelf** — niet 's avonds proberen te herinneren.\n• Check je agenda **'s ochtends + 's middags + 's avonds**.\n• Maak op zondag een **week-overzicht** voor jezelf.",
    checks: [
      {
        q: "Wat is **achterwaarts plannen**?",
        options: ["Vanaf de inleverdag terugtellen", "Vanaf vandaag vooruit plannen", "Eerst de makkelijke taken doen", "Je planning achter in je agenda zetten"],
        answer: 0,
        wrongHints: [null, "Dat is gewoon vooruit plannen. Waar begin je bij 'achterwaarts'?", "Dat gaat over welke taak eerst komt. Vanaf welk moment reken je?", "Het gaat niet over de plek in je agenda. Vanaf welk moment reken je?"],
      },
      {
        q: "Welke apps gebruiken veel scholen in Nederland voor **schoolinformatie**?",
        options: ["Magister of SOMtoday", "Duolingo of Quizlet", "WhatsApp of Snapchat", "Kahoot of Wrts"],
        answer: 0,
        wrongHints: [null, "Daarmee oefen je woordjes. Is dat de app van school zelf?", "Handig om te appen met klasgenoten, maar welke app is van school zelf?", "Daarmee doe je quizjes en oefen je. Welke app gebruikt school voor jouw gegevens?"],
      },
      {
        q: "Hoe verdeel je je tijd bij de **Pomodoro**-techniek?",
        options: ["25 min werk + 5 min pauze", "45 min werk + 15 min pauze", "10 min werk + 10 min pauze", "60 min werk + 5 min pauze"],
        answer: 0,
        wrongHints: [null, "Dat zijn lange blokken. Hoe lang duurt één blokje bij Pomodoro?", "Dan is de pauze net zo lang als het werk. Klopt dat?", "Een uur achter elkaar is lang. Hoe lang duurt één blokje?"],
      },
      {
        q: "Wanneer schrijf je je huiswerk het best **op**?",
        options: ["Meteen in de les", "'s Avonds uit je hoofd", "Bij thuiskomst", "De volgende dag"],
        answer: 0,
        wrongHints: [null, "Weet je 's avonds nog precies wat elke docent zei?", "Onthoud je onderweg naar huis alles van zes lessen?", "Misschien moet het huiswerk dan al af zijn. Wanneer weet je het het zekerst?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Waarom is het slim om je huiswerk te **spreiden** over de week?",
        options: [
          "Dan wordt geen dag te zwaar",
          "Dan krijg je minder huiswerk",
          "Dan ben je in totaal sneller klaar",
          "Dan heb je geen agenda nodig",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Het huiswerk blijft even veel. Wat verandert er wél?",
          "Het werk duurt even lang. Hoe voelt elke dag dan?",
          "Juist bij spreiden helpt een agenda.",
        ],
      },
      {
        q: "Je moet je werkstuk op **vrijdag** inleveren. Wanneer doe je de laatste check?",
        options: ["Donderdag", "Vrijdag na het inleveren", "Maandag van die week", "Op de dag dat je begint"],
        answer: 0,
        wrongHints: [null, "Kun je dan nog iets verbeteren?", "Dan heb je daarna nog dagen om aan te werken. Is dat dan de láátste check?", "Dan moet je het werk nog maken. Wat valt er dan te checken?"],
      },
    ],
  },
  {
    title: "Leren-leren — technieken",
    explanation:
      "**Leren = werk** maar je kunt slim leren.\n\n**5 leertechnieken** *(uit het hoofd!)*:\n\n**1. Samenvatten** 📝\n• Kort opschrijven wat belangrijk is.\n• In **eigen woorden** *(niet kopiëren)*.\n• Met **steekwoorden** + schema's.\n\n**2. Herhalen — spaced repetition** ⏰\n• Niet alles in 1 keer leren *(stampen)*.\n• Verdeel over **meerdere dagen**:\n  - Dag 1: leren.\n  - Dag 3: herhalen.\n  - Dag 7: herhalen.\n  - Dag 14: herhalen.\n• **Veel effectiever** dan 3 uur achter elkaar.\n\n**3. Actief leren** 💡\n• Lezen + vragen stellen aan jezelf.\n• Probeer te **vertellen wat je geleerd hebt** *(Feynman-techniek)*.\n• Als je het kunt uitleggen aan een 8-jarige, ken je het echt.\n\n**4. Visueel leren** 🎨\n• **Mindmap** maken.\n• **Schema's** + plaatjes.\n• Verbinden met dingen die je al kent.\n\n**5. Oefenen + toetsen** 📊\n• **Oude toetsen** maken.\n• Online quizjes.\n• Vrienden testen elkaar.\n• Fouten zijn **goed** — leer ervan.\n\n**Mythes — niet doen**:\n\n**'Multitasking'** ❌\n• Tegelijk huiswerk + telefoon + muziek?\n• Hersenen kunnen niet echt multitasken — je switcht steeds, kost energie.\n• **Concentreer op 1 ding**.\n\n**'Alles in 1 avond leren'** ❌\n• Stampen = veel onthouden voor toets, maar binnen 1 week vergeten.\n• Beter: **verspreid over dagen**.\n\n**'Passief overlezen'** ❌\n• Tekst 5 keer lezen werkt slecht.\n• Beter: lezen + jezelf vragen stellen + opschrijven.\n\n**Tip — Slaap goed voor een toets**:\n• Goede slaap *(8 uur)* helpt je **geheugen**.\n• Niet hele nacht doorleren — werkt averechts.\n\n**Toets-feitje**:\nOnderzoek laat steeds weer zien: leerlingen die **plannen + spreiden** onthouden de stof veel beter dan leerlingen die last-minute leren.",
    checks: [
      {
        q: "Wat is **spaced repetition**?",
        options: ["Leerstof spreiden over meerdere dagen", "Alles in één keer leren, de avond ervoor", "Dezelfde bladzijde steeds opnieuw lezen", "Hardop stampen tot je het kunt opzeggen"],
        answer: 0,
        wrongHints: [null, "Spaced betekent 'met ruimte ertussen'. Zit die ruimte er hier in?", "Lees je dan verspreid, of alles achter elkaar?", "Stampen gebeurt vaak in één keer. Waar zit de ruimte?"],
      },
      {
        q: "Wat is de **Feynman-techniek**?",
        options: ["Uitleggen aan iemand anders", "Hardop herhalen tot je het kent", "Goed slapen na het leren", "Een samenvatting overschrijven"],
        answer: 0,
        wrongHints: [null, "Herhalen kan iedereen. Feynman wilde testen of je het écht snapt. Hoe test je dat?", "Slaap helpt wel, maar is niet de Feynman-techniek.", "Overschrijven gaat vaak zonder nadenken. Hoe merk je of je het écht snapt?"],
      },
      {
        q: "Welke manier van leren werkt **niet** goed?",
        options: ["Huiswerk met telefoon en muziek aan", "Een mindmap maken van de stof", "Jezelf vragen stellen over de stof", "Herhalen verspreid over dagen"],
        answer: 0,
        wrongHints: [null, "Een mindmap laat verbanden zien. Is dat goed of slecht voor leren?", "Jezelf overhoren werkt juist bewezen goed. Zoek de optie die níét helpt.", "Gespreid herhalen is juist een toptechniek. Zoek de optie die níét helpt."],
      },
      {
        q: "Hoeveel **slaap** is het best in de nacht voor een toets?",
        options: ["8 uur", "6 uur", "4 uur", "12 uur"],
        answer: 0,
        wrongHints: [null, "Met 6 uur ben je de volgende dag vaak nog moe. Hoeveel heeft je brein nodig?", "Veel te kort: je geheugen slaat de stof juist op terwijl je slaapt.", "Zo lang slapen lukt niet op een schooldag, en je wordt er suf van."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat hoort bij goed **samenvatten**?",
        options: [
          "In eigen woorden opschrijven",
          "De hele tekst overschrijven",
          "Alle zinnen geel markeren",
          "Alleen de titels overschrijven",
        ],
        answer: 0,
        wrongHints: [null, "Dan wordt het niet korter. Wat maakt een samenvatting kort?", "Als alles geel is, wat valt er dan nog op?", "Titels alleen zeggen weinig. Wat moet er nog meer in een samenvatting?"],
      },
      {
        q: "Bij welke leertechniek hoort een **mindmap**?",
        options: ["Visueel leren", "Stampen", "Multitasking", "Passief overlezen"],
        answer: 0,
        wrongHints: [null, "Een mindmap maak je met schema's en lijnen. Wat zie je dan?", null, null],
      },
      {
        q: "Waarom werkt alles op één avond **stampen** slecht?",
        options: [
          "Je vergeet de stof snel weer",
          "Het mag niet van school",
          "Je onthoudt alleen het begin van de stof",
          "Je slaapt dan juist te lang",
        ],
        answer: 0,
        wrongHints: [null, "Het mag wel, maar wat gebeurt er na een week?", "Ook het begin zakt snel weg. Wat gebeurt er na een week?", "Na stampen slaap je eerder te kort. Wat gebeurt er met de stof na een week?"],
      },
      {
        q: "Wat werkt beter dan een tekst vijf keer **overlezen**?",
        options: [
          "Lezen en jezelf vragen stellen",
          "De tekst nog vaker lezen",
          "Belangrijke zinnen geel markeren",
          "De tekst hardop voorlezen",
        ],
        answer: 0,
        wrongHints: [null, "Meer van hetzelfde helpt niet. Hoe word je zelf actief?", "Markeren voelt nuttig, maar lees je de tekst dan anders dan eerst?", "Hardop lezen is nog steeds lezen. Hoe word je zelf actief?"],
      },
      {
        q: "Je maakt een fout bij het **oefenen**. Hoe kijk je daar het best naar?",
        options: [
          "Je kunt ervan leren",
          "Hij telt niet, want het is maar oefenen",
          "Je moet de stof dan nog eens stampen",
          "De oefening was gewoon te moeilijk",
        ],
        answer: 0,
        wrongHints: [null, "Telt hij niet mee voor je cijfer, of kun je er toch iets mee?", "Stampen laat je niet zien wat er misging. Wat kun je met die fout?", "Misschien, maar wat kun je zelf met die fout doen?"],
      },
      {
        q: "Wat helpt om nieuwe stof beter te **onthouden**?",
        options: [
          "Koppelen aan iets wat je al kent",
          "De stof steeds opnieuw overlezen",
          "Belangrijke woorden onderstrepen",
          "Leren met muziek op de achtergrond",
        ],
        answer: 0,
        wrongHints: [null, "Overlezen blijft vaak niet hangen. Wat kun je in je hoofd met de nieuwe stof doen?", "Onderstrepen helpt om iets terug te vinden, maar hoe blijft het in je hoofd?", "Muziek met tekst leidt je juist af."],
      },
    ],
  },
  {
    title: "Omgaan met veel docenten + vakken",
    explanation:
      "Op de middelbare school heb je **10-15 docenten** — elk met eigen stijl.\n\n**Hoe ga je daarmee om?**\n\n**1. Respecteer verschillen**:\n• Docent A is strikt, docent B is grappig — beide oké.\n• Pas je houding aan per les *(niet brutaal bij strikte docent)*.\n\n**2. Onthoud namen + vakken**:\n• Eerste 2 weken — lijst aanleggen:\n```\n• meneer Jansen — wiskunde\n• mevrouw De Vries — Nederlands\n• meneer Smit — gym\n• ...\n```\n\n**3. Vraag stellen**:\n• Goede vraag = **specifiek**. Bv. 'Ik snap blz 23 niet, kunt u stap 3 uitleggen?'.\n• Slechte vraag = vaag. 'Ik snap niets'.\n• Bang om dom over te komen? **Anderen hebben dezelfde vraag**.\n\n**4. Bij conflict — geen paniek**:\n• Praat met docent rustig.\n• Als nodig: **mentor** *(je vaste contactpersoon)*.\n• Daarna eventueel team-leider of leerlingbegeleider.\n• Pas in noodgeval: ouders erbij.\n\n**5. Mentor**:\n• Eén docent is jouw **mentor** voor klas-1.\n• Komt vaak persoonlijk bij je terug *(mentor-uur, 1× per week)*.\n• Help-loket voor: roosterprobleem, ruzie, stress, alles.\n\n**Tips per vak-type**:\n\n**Taal-vakken** *(NL, Engels, Frans, Duits)*:\n• **Veel woordjes** — kleine pakjes per dag *(15 min/dag)*.\n• Lezen ook in vrije tijd helpt.\n\n**Exact** *(wiskunde, natuurkunde, scheikunde, biologie)*:\n• **Oefenen** — niet alleen lezen.\n• Werkboek + opgaven maken.\n• Achterstand niet ophalen op laatste moment.\n\n**Wereldoriëntatie** *(geschiedenis, aardrijkskunde)*:\n• **Begrippen** in eigen woorden.\n• Tijdlijnen maken voor geschiedenis.\n\n**Creatief** *(tekenen, muziek, drama)*:\n• Probeer dingen — niet alleen 'goed/fout'.\n• Eigen stijl ontwikkelen.\n\n**Gym + sport**:\n• Niet bang zijn — niet iedereen is goed.\n• Spullen mee! Vergeten = vaak straf.\n\n**Toets-feitje**:\nVolgens onderzoek voelt **1 op 3 brugklassers** zich overweldigd in eerste maanden. **Normaal**. Praten met mentor of ouders helpt.",
    checks: [
      {
        q: "Wie is je **mentor**?",
        options: ["Jouw vaste begeleidende docent", "De baas van de hele school", "De conciërge bij de ingang", "Een klasgenoot naast je in de les"],
        answer: 0,
        wrongHints: [null, "De schoolleider is er voor de hele school. Wie is er speciaal voor jouw klas?", "De conciërge geeft geen les. Wie begeleidt jou?", "Een klasgenoot kan helpen, maar wie is er officieel voor jou?"],
      },
      {
        q: "Je hebt een **probleem** met een docent. Wat doe je **eerst**?",
        options: ["Rustig praten met de docent zelf", "Meteen je ouders laten bellen", "Meteen naar de directeur gaan", "Het negeren en niks zeggen"],
        answer: 0,
        wrongHints: [null, "Dat kan later nog. Met wie praat je als eerste?", "Dat kan later nog. Met wie praat je als eerste?", "Gaat het probleem zo weg?"],
      },
      {
        q: "Hoe leer je **woordjes** van een vreemde taal het best?",
        options: ["Elke dag 15 minuten", "Eén keer per week een uur", "De avond voor de toets alles", "Alleen in de les oefenen"],
        answer: 0,
        wrongHints: [null, "In een week vergeet je veel. Hoe vaak moet je herhalen?", "Wat je in één avond stampt, blijft niet lang hangen.", "In de les is te weinig tijd. Wat doe je thuis?"],
      },
      {
        q: "Is het normaal als de brugklas in het begin **druk en spannend** voelt?",
        options: ["Ja, dat hebben veel brugklassers", "Nee, dan zit je op het verkeerde niveau", "Alleen als je geen vrienden in je klas hebt", "Ja, en dan moet je van school wisselen"],
        answer: 0,
        wrongHints: [null, "Het heeft niets met je niveau te maken — alles is nieuw.", "Ook met vrienden in de klas is alles eerst nieuw.", "Na een paar weken went het meestal; praat erover met je mentor."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke vraag aan je docent is het **duidelijkst**?",
        options: [
          "Kunt u stap 2 op blz. 15 uitleggen?",
          "Ik snap helemaal niets van dit vak.",
          "Kunt u alles nog een keer doen?",
          "Wat moest ik ook alweer doen?",
        ],
        answer: 0,
        wrongHints: [null, "Weet de docent dan wát je niet snapt?", null, "Welk stukje precies?"],
      },
      {
        q: "Hoe leer je het best voor **wiskunde**?",
        options: [
          "Veel opgaven maken",
          "Alleen de uitleg lezen",
          "Alleen de voorbeelden overschrijven",
          "De antwoorden achterin bekijken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Lezen alleen is niet genoeg bij een exact vak. Wat moet je doen?",
          "Overschrijven gaat zonder nadenken. Wat moet je zelf doen?",
          "Dan zie je het antwoord, maar kun je het ook zelf?",
        ],
      },
      {
        q: "Wat helpt je goed bij **geschiedenis**?",
        options: [
          "Een tijdlijn maken",
          "De jaartallen los stampen",
          "Alleen de plaatjes bekijken",
          "De samenvatting overschrijven",
        ],
        answer: 0,
        wrongHints: [null, "Losse jaartallen zeggen weinig. Hoe zie je wat er vóór en ná gebeurde?", "Plaatjes helpen, maar weet je dan wat er wanneer gebeurde?", "Overschrijven gaat zonder nadenken. Hoe zie je wat er wanneer gebeurde?"],
      },
      {
        q: "De ene docent is **streng**, de andere is grappig. Wat doe je?",
        options: [
          "Je houding per les aanpassen",
          "Bij iedere docent precies hetzelfde doen",
          "Alleen bij de strenge docent opletten",
          "De strenge docent vragen grappiger te zijn",
        ],
        answer: 0,
        wrongHints: [null, "Elke docent heeft eigen regels. Werkt overal hetzelfde doen dan?", "Bij de grappige docent leer je ook. Moet je daar niet opletten?", "Elke docent mag zijn eigen manier hebben. Wat kun jíj doen?"],
      },
      {
        q: "Hoe onthoud je in de eerste weken al je **docenten**?",
        options: [
          "Een lijst maken met naam en vak",
          "Iedereen 'meneer' of 'mevrouw' noemen",
          "Alleen de naam van je mentor onthouden",
          "Wachten tot het vanzelf lukt",
        ],
        answer: 0,
        wrongHints: [null, "Dat is beleefd, maar zo leer je de namen niet.", null, null],
      },
      {
        q: "Je hebt rustig met een docent gepraat, maar het **conflict** is niet opgelost. Naar wie ga je dan?",
        options: ["Je mentor", "Een klasgenoot", "Je oude juf van groep 8", "De conciërge"],
        answer: 0,
        wrongHints: [
          null,
          "Een klasgenoot kan luisteren, maar wie is je vaste contactpersoon op school?",
          "Die kent je goed, maar werkt niet op je nieuwe school.",
          null,
        ],
      },
    ],
  },
  {
    title: "Stress + tijd-management",
    explanation:
      "**Stress** in brugklas is **normaal** maar wel onhandig.\n\n**Tekenen van stress**:\n• Slecht slapen.\n• Hoofdpijn.\n• Snel boos / verdrietig.\n• Geen zin in school.\n• Te veel uitstellen.\n\n**Wat helpt**:\n\n**1. Plannen** *(zie stap 2)*:\n• Overzicht = minder stress.\n• Doelen verdelen in stapjes.\n\n**2. Slaap** 💤\n• **8-10 uur** voor brugklas-leeftijd.\n• Geen scherm 1 uur voor bed *(blauw licht houdt wakker)*.\n• Vaste tijd naar bed.\n\n**3. Beweging** 🚴\n• **30-60 min/dag** helpt brein + stemming.\n• Niet alleen sporten — fietsen naar school telt.\n\n**4. Pauzes** ☕\n• Werk **niet 3 uur door**.\n• 25-30 min werk + 5 min pauze *(Pomodoro)*.\n• In pauze: rek-en-strek, drink water, kijk uit raam.\n\n**5. Praten** 💬\n• Met ouders, vrienden, mentor.\n• Niet alles oppotten.\n• Helpt enorm.\n\n**6. Eten + drinken** 🍎\n• Ontbijt is belangrijk *(focus + energie)*.\n• Vaste maaltijden — geen lange perioden zonder.\n• Water — minimaal 1,5 L per dag.\n• Niet te veel suiker / energie-drank.\n\n**7. Vrije tijd** 🎮\n• Werk én ontspanning.\n• Hobby, sport, vrienden, gewoon niets doen — allemaal nodig.\n\n**Stress vermijden — 'nee' zeggen**:\n• Te veel buitenschoolse activiteiten? **Schrap iets**.\n• Vrienden willen ook jou na school zien? **Plan in agenda**.\n• Niet alles tegelijk kunnen — kies.\n\n**Bij extreme stress**:\n• Praat met mentor.\n• Schoolpsycholoog *(beschikbaar op meeste scholen)*.\n• Huisarts → kan doorverwijzen.\n• Bel **De Kindertelefoon** *(0800-0432, gratis, anoniem)*.\n\n**Tijd-management — gouden regels**:\n\n**1. Eisenhower-matrix**:\nVerdeel taken:\n• **Urgent + belangrijk**: doe nu *(toets morgen)*.\n• **Niet urgent + belangrijk**: plan in *(werkstuk over 2 wkn)*.\n• **Urgent + niet belangrijk**: delegeer of doe snel *(boodschap voor ma)*.\n• **Niet urgent + niet belangrijk**: doe later of niet *(YouTube-filmpje)*.\n\n**2. Eet de kikker eerst** 🐸:\nMoeilijke taak **eerst** doen *('s ochtends het best)*. Niet uitstellen.\n\n**3. Geen perfectionisme**:\n• 8/10 is prima — 10/10 kost veel meer tijd voor weinig extra winst.\n• Volg de '80/20-regel': 20% van je werk levert 80% van resultaat.\n\n**Toets-feitje**:\n**1 op 5 jongeren** *(15-25 jr)* heeft mentale problemen *(angst, depressie)*. **Praten** is eerste stap. Niet alleen — er is altijd hulp.",
    checks: [
      {
        q: "Hoeveel **slaap** heb je nodig op de leeftijd van de brugklas?",
        options: ["8-10 uur", "5-6 uur", "6-7 uur", "12-14 uur"],
        answer: 0,
        wrongHints: [null, "Dat is veel te weinig voor een groeiend brein.", "Zo slapen veel volwassenen, maar kinderen hebben meer nodig.", "Zoveel slaapt een kleuter. Heb jij dat nog nodig?"],
      },
      {
        q: "Wat is de **Eisenhower-matrix**?",
        options: ["Verdelen op urgent + belangrijk", "Een Amerikaanse generaal", "Formule om je cijfer te berekenen", "Spelletje met vakjes op papier"],
        answer: 0,
        wrongHints: [null, "Eisenhower was wel een generaal, maar de matrix is een hulpmiddel. Waarvoor?", "Het is geen rekenregel. Waar helpt het je mee?", "Het is geen spel. Waar helpt het je mee?"],
      },
      {
        q: "Wat betekent **'eet de kikker eerst'**?",
        options: ["Moeilijke taak meteen 's ochtends", "Echt een kikker eten als ontbijt", "Eerst goed ontbijten voor je begint", "De moeilijkste taak tot het laatst"],
        answer: 0,
        wrongHints: [null, "Het is een uitdrukking. Wat zou de 'kikker' zijn?", "Het is een uitdrukking. Wat zou de 'kikker' zijn?", "Lees nog eens: 'eerst'. Past 'het laatst' daarbij?"],
      },
      {
        q: "Wat is het nummer van de **Kindertelefoon**?",
        options: ["0800-0432", "112", "0900-9292", "0900-8844"],
        answer: 0,
        wrongHints: [null, "Dat bel je bij spoed: brand, een ongeluk of gevaar.", "Dat is reisinformatie voor bus en trein.", "Dat is de politie als het geen spoed is."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat kan een **teken van stress** zijn?",
        options: ["Slecht slapen", "Groeipijn in je benen", "Een droge huid in de winter", "Spierpijn na het sporten"],
        answer: 0,
        wrongHints: [null, "Dat komt door groeien, niet door spanning.", "Dat komt door het weer. Wat merk je als je je zorgen maakt?", "Dat komt door bewegen. Wat merk je als je je zorgen maakt?"],
      },
      {
        q: "Hoeveel **beweging** per dag helpt je brein en je stemming?",
        options: ["30-60 minuten", "5-10 minuten", "3-4 uur", "10-15 minuten"],
        answer: 0,
        wrongHints: [null, "Dat is maar een paar minuten. Is dat genoeg voor je brein?", "Dan blijft er geen tijd over voor school en huiswerk.", "Dat is een begin. Fietsen naar school telt ook mee — hoeveel wordt het dan?"],
      },
      {
        q: "Je werkstuk moet **morgen** af zijn en is nog niet klaar. Wat zegt de Eisenhower-matrix?",
        options: [
          "Doe het nu",
          "Plan het in voor later",
          "Laat iemand anders het doen",
          "Schrap het van je lijst",
        ],
        answer: 0,
        wrongHints: [null, "Inplannen is voor iets belangrijks dat níét haast heeft. Moet dit snel?", "Het is jouw werkstuk. Kan iemand anders het voor je maken?", "Is een werkstuk dat je moet inleveren niet belangrijk?"],
      },
      {
        q: "Waarom is **ontbijten** belangrijk?",
        options: [
          "Het geeft focus en energie",
          "Dan hoef je niet te lunchen",
          "Dan groei je sneller in lengte",
          "Dan val je 's avonds sneller in slaap",
        ],
        answer: 0,
        wrongHints: [null, "Vaste maaltijden horen er allemaal bij.", "Daar zorgt ontbijt niet voor. Wat merk je er 's ochtends in de les van?", "Ontbijt helpt je 's ochtends. Waarmee?"],
      },
      {
        q: "Je hebt te veel clubs na school en voelt **stress**. Wat is een goede tip?",
        options: [
          "Een club schrappen",
          "Alles houden en sneller werken",
          "Een uurtje minder slapen",
          "Huiswerk in de pauzes doen",
        ],
        answer: 0,
        wrongHints: [null, "Wordt je week daar rustiger van?", "Slaap heb je juist nodig bij stress.", "Dan heb je geen pauze meer. Wordt het rustiger?"],
      },
    ],
  },
  {
    title: "Eind-tips brugklas + Doorstroomtoets-mix",
    explanation:
      "**Top-10 tips voor brugklas-overlevings-kit**:\n\n**1.** Schrijf altijd huiswerk **direct op** *(in les, niet later)*.\n**2.** Magister/SOMtoday checken **dagelijks**.\n**3.** Plan op **zondag** week-overzicht.\n**4.** Studeer **gespreid** — niet 1 dag voor toets.\n**5.** **Slaap 8+ uur**, geen scherm voor bed.\n**6.** **Beweeg** dagelijks — fiets naar school telt.\n**7.** **Praat** als iets stress geeft — ouders, mentor, vriend.\n**8.** Eerst **moeilijke vak** doen, dan makkelijke.\n**9.** **Eet ontbijt** — focus + energie.\n**10.** **8-cijfer is prima** — geen perfectionisme.\n\n**Boodschap voor leerlingen**:\nDe brugklas voelt eerst overweldigend, maar **iedereen went**. Na 6 maanden is het normaal. Niet bang zijn — het komt goed.\n\nVraag hulp als je iets niet snapt. Niet uit schaamte stil blijven zitten. Docenten + mentor zijn er om je te helpen.\n\n**Voor de Eindopdracht**: alle eerdere onderwerpen door elkaar.",
    checks: [
      {
        q: "Hoe vaak kijk je het best in **Magister**?",
        options: ["Elke dag", "Eens per week", "Eens per maand", "Alleen vlak voor een toets"],
        answer: 0,
        wrongHints: [null, "Dan mis je dingen die tussendoor veranderen.", "Een maand is lang. Wat kan er in die tijd allemaal veranderen?", "Ook tussen toetsen door verandert er van alles. Hoe vaak kijk je dan?"],
      },
      {
        q: "Wanneer maak je het handigst een **weekoverzicht**?",
        options: ["Voordat de week begint", "Pas op de dag van de toets", "Halverwege de week", "Aan het eind van de week"],
        answer: 0,
        wrongHints: [null, "Dan is het te laat om nog te plannen.", "Dan ben je al een paar dagen kwijt.", "Dan is de week al voorbij. Wat had je vooraf willen weten?"],
      },
      {
        q: "Moet je altijd een **10** halen?",
        options: ["Nee, een voldoende is ook prima", "Ja, anders ga je niet over", "Nee, maar wel minstens een 8", "Nee, cijfers doen er niet toe"],
        answer: 0,
        wrongHints: [null, "Overgaan gaat over je hele rapport, en daar heb je geen tienen voor nodig.", "Een 8 is mooi, maar moet het? Vanaf welk cijfer heb je een voldoende?", "Cijfers doen er wel toe — maar perfect hoeft niet."],
      },
      {
        q: "Wat is de **belangrijkste tip** bij stress?",
        options: ["Praten met iemand", "Harder gaan werken", "Afleiding zoeken op je telefoon", "Een dag thuisblijven van school"],
        answer: 0,
        wrongHints: [null, "Wordt de druk dan minder of meer?", "Even afleiding kan, maar is het probleem dan weg?", "Dan schuif je het op. Wat helpt je echt verder?"],
      },
      {
        q: "Hoeveel **docenten** heb je in klas 1 ongeveer?",
        options: ["10-15", "1-2", "3-5", "25-30"],
        answer: 0,
        wrongHints: [null, "Zo is het op de basisschool. Hoe gaat het op de middelbare school?", "Heb je maar zo weinig vakken? Elk vak heeft een eigen docent.", "Dat zijn meer docenten dan je vakken hebt."],
      },
      {
        q: "Wat is de **Pomodoro-techniek**?",
        options: ["25 min werk + 5 min pauze", "50 min werk + 10 min pauze", "2 uur werk + 30 min pauze", "5 min werk + 25 min pauze"],
        answer: 0,
        wrongHints: [null, "Dat zijn lange blokken. Hoe lang duurt één pomodoro?", "Werk je dan in korte blokjes, of lang aan één stuk?", "Dan is de pauze langer dan het werk. Klopt dat?"],
      },
      { q: "Hoeveel **docenten** zie je op de middelbare school meestal op één dag?", options: ["5-7","1","2-3","15-20"], answer: 0, wrongHints: [null, "Op de middelbare school heeft elk vak een eigen docent. Hoeveel lessen heb je op een dag?", "Hoeveel lesuren heb je op een dag? Heb je steeds dezelfde docent?", "Zoveel lesuren heb je niet op één dag."] },
      { q: "Wat is **Magister**?", options: ["Online systeem voor cijfers en rooster", "Een vak op de middelbare school", "De leraar Latijn op het gymnasium", "Een schoolboek voor de brugklas"], answer: 0, wrongHints: [null, "Magister zit op je telefoon of laptop. Wat zie je erin?", "Magister zit op je telefoon of laptop. Wat zie je erin?", "Magister zit op je telefoon of laptop. Wat zie je erin?"] },
      { q: "Welke **cijfers** krijg je meestal op de middelbare school?", options: ["1 tot 10","A tot F","Goed/voldoende/onvoldoende","1 tot 100"], answer: 0, wrongHints: [null, "Dat is het Amerikaanse systeem.", "Zo staat het vaak op het rapport van de basisschool.", "Procenten goed zie je soms bij een toets. Maar welk cijfer krijg je?"] },
      { q: "Welk cijfer is een **voldoende**?", options: ["5,5 of hoger","6,5 of hoger","4,5 of hoger","5,0 of hoger"], answer: 0, wrongHints: [null, "Een 6 is ook al een voldoende. Ligt de grens dan zo hoog?", "Een 4,5 of een 5 is nog onvoldoende. Waar begint voldoende?", "Nét te laag — waar ligt de grens?"] },
      { q: "Wat is **huiswerk plannen** met een agenda?", options: ["Opschrijven wanneer je wat doet", "Antwoorden opzoeken in je boek", "Je docent om hulp vragen", "Alles op één middag maken"], answer: 0, wrongHints: [null, "Plannen gaat over tijd. Wat schrijf je in een agenda?", "Plannen gaat over tijd. Wat schrijf je in een agenda?", "Dan plan je niet, dan prop je alles op één dag. Wat schrijf je in een agenda?"] },
      { q: "Bij **spaced repetition** doe je?", options: ["Kort herhalen, verspreid over dagen", "Alles op één avond lang stampen", "Eén keer goed lezen, dat is genoeg", "Alleen leren in de les op school"], answer: 0, wrongHints: [null, "Spaced betekent 'met ruimte ertussen'. Past dat hierbij?", "Spaced betekent 'met ruimte ertussen'. Past dat hierbij?", "Spaced betekent 'met ruimte ertussen'. Past dat hierbij?"] },
      { q: "Wat is **interleaving**?", options: ["Onderwerpen door elkaar oefenen", "Eén vak per dag, niets anders", "Eerst slapen, daarna leren", "Alleen het makkelijkste oefenen"], answer: 0, wrongHints: [null, "Denk aan vlechten: daarin wisselen de strengen steeds. Past dat hierbij?", "Denk aan vlechten: daarin wisselen de strengen steeds. Past dat hierbij?", "Denk aan vlechten: daarin wisselen de strengen steeds. Past dat hierbij?"] },
      { q: "Wat doe je bij de **Feynman-techniek**?", options: ["Het simpel uitleggen aan een ander", "Het rustig nalezen in je boek", "Het stampen tot je het kent", "Het laten uitleggen door je docent"], answer: 0, wrongHints: [null, "Bij Feynman moet jij zelf iets doen. Wat?", "Bij Feynman moet jij zelf iets doen. Wat?", "Wie legt er dan uit: jij of de docent?"] },
      { q: "Wat is een **profielkeuze**?", options: ["Een groep vakken voor de bovenbouw kiezen", "Je niveau voor de bovenbouw kiezen", "Eén extra vak in de brugklas kiezen", "Een vervolgopleiding na school kiezen"], answer: 0, wrongHints: [null, "Je niveau, zoals havo of vwo, is geen profiel. Waar gaat een profiel over?", "Het gaat om meer dan één vak. Voor welke klassen kies je?", "Dat kies je pas na je examen. Wat kies je halverwege de middelbare school?"] },
      { q: "Het **N&T-profiel** (Natuur en Techniek) heeft veel?", options: ["Natuurkunde + wiskunde", "Talen zoals Frans en Duits", "Geschiedenis + aardrijkskunde", "Tekenen + handvaardigheid"], answer: 0, wrongHints: [null, "Talen horen vooral bij Cultuur en Maatschappij.", "Geschiedenis hoort vooral bij de maatschappij-profielen.", "Tekenen en handvaardigheid passen bij kunst. Wat past bij techniek?"] },
      { q: "Welke afkorting staat voor 'middelbare school'?", options: ["VO","PO","HO","MBO"], answer: 0, wrongHints: [null, "Basisschool.", "Hoger onderwijs: hbo en universiteit.", "Mbo komt erna."] },
      { q: "Wat is een **mentor**?", options: ["Vaste leraar die je begeleidt", "Je beste vriend in de klas", "Een vak in de eerste klas", "De klassenvertegenwoordiger"], answer: 0, wrongHints: [null, "Een vriend is fijn, maar wie begeleidt jou namens school?", "Een mentor is een persoon. Welke?", "Dat is een leerling. Wie begeleidt jou namens school?"] },
      { q: "Wat is een **rapportvergadering**?", options: ["Docenten bespreken cijfers van leerling", "Feest met de klas na het rapport", "Toets over alle stof van het jaar", "Vrije dag als het rapport klaar is"], answer: 0, wrongHints: [null, "Geen feest — het woord 'rapport' zit erin. Wat gebeurt daarmee?", "Je maakt er zelf niets — het gaat óver jouw resultaten. Wie zitten er aan tafel?", "Helaas geen vrije dag — docenten zijn juist aan het werk. Waarmee?"] },
      { q: "Wat is de belangrijkste tip bij **'leren leren'**?", options: ["Eerst begrijpen, dan onthouden","Eerst alles uit je hoofd leren","Alleen samenvattingen lezen","Alles drie keer overlezen"], answer: 0, wrongHints: [null, "Onthoud je iets wat je niet snapt lang?", "Een samenvatting helpt, maar wat moet je eerst doen?", "Overlezen voelt goed, maar snap je het daarna?"] },
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
    { id: "cito-strategieen-groep8", title: "Toets-strategieen groep 8", niveau: "po-1F" },
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
