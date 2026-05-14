// Leerpad: Emoties + sociaal omgaan - groep 6-8.
// Sluit op puberteit-groei. Cito-burgerschap. 1F. 4 stappen.

const stepEmojis = ["😊", "🤝", "🛡️", "🏆"];

const chapters = [
  { letter: "A", title: "Emoties herkennen", emoji: "😊", from: 0, to: 0 },
  { letter: "B", title: "Vrienden + conflict", emoji: "🤝", from: 1, to: 1 },
  { letter: "C", title: "Pesten + grenzen", emoji: "🛡️", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Emoties herkennen + omgaan",
    explanation:
      "**Emoties** = gevoelens die je hebt over situaties.\nAllemaal **normaal** + **belangrijk**.\n\n**Zes basis-emoties** *(volgens psychologe Paul Ekman)*:\n\n**1. Blijdschap** 😊\n• Bij leuke dingen.\n• Lichaam: glimlachen, energie, lekker gevoel.\n\n**2. Verdriet** 😢\n• Bij verlies, teleurstelling.\n• Lichaam: huilen, vermoeid, geen zin.\n\n**3. Boosheid** 😠\n• Bij oneerlijkheid, gefrustreerd.\n• Lichaam: gespannen, hart sneller, gebald hand.\n\n**4. Angst** 😨\n• Bij gevaar of onzekerheid.\n• Lichaam: hart bonken, zweet, bevroren.\n\n**5. Walging** 🤢\n• Bij iets vies of slecht.\n• Lichaam: misselijk, weg-trekken.\n\n**6. Verbazing** 😲\n• Bij iets onverwachts.\n• Lichaam: ogen open, mond open.\n\n**Combinaties**:\n• Schaamte = boos op zichzelf + verdriet.\n• Trots = blij + zelfvertrouwen.\n• Jaloezie = angst + boos.\n• Heimwee = verdriet + verlangen.\n• Verliefdheid = blij + angst + verbazing.\n\n**Hoe omgaan met sterke emoties?**\n\n**Bij boosheid** 😠:\n1. **STOP** — niet meteen reageren.\n2. **Tel tot 10** *(of langer bij heel boos)*.\n3. **Diep ademhalen** *(4 sec in, 4 sec uit, ~5 keer)*.\n4. **Loop weg** als nodig.\n5. **Praat erover** later met iemand.\n\n**Bij verdriet** 😢:\n1. **Voel** het — niet wegduwen.\n2. **Huil** als je wilt — het lucht op.\n3. **Praat** met vertrouwd persoon.\n4. **Doe iets fijns** om je beter te voelen *(wandelen, muziek, knuffelen kat)*.\n\n**Bij angst** 😨:\n1. **Erken**: 'Ik ben bang.'\n2. **Vraag jezelf**: 'Wat is het ergste dat kan gebeuren?'\n3. **Bereid voor** *(als spannende toets: studeer)*.\n4. **Adem rustig** = zenuwstelsel kalmer.\n\n**Bij stress** 🥺:\n• Te veel tegelijk = stress.\n• **Slaap** *(8-10 uur)*.\n• **Beweging** verlaagt stress.\n• **Eet gezond** + drink water.\n• **Praat** = voorkomt ophopen.\n\n**Emoties + brein** 🧠:\n• **Amygdala** = emotie-deel *(snel + intuïtief)*.\n• **Prefrontale cortex** = rationeel-deel *(rust + denken)*.\n• In puberteit ontwikkelt rationeel-deel nog → soms emoties sterker dan controle.\n• **Allemaal normaal**.\n\n**Emoties uitspreken** *(in woorden)*:\nWoordenschat voor gevoel maakt het **makkelijker**:\n• 'Ik ben **gefrustreerd** want ...'\n• 'Ik voel mij **alleen** als ...'\n• 'Ik ben **trots** op ...'\n• Hoe meer woorden je hebt, hoe beter je je kunt uiten.\n\n**Emoties bij anderen lezen** *(empathie)*:\n• Kijk naar **gezicht** *(glimlach, frons, traan)*.\n• Kijk naar **houding** *(open of dicht)*.\n• Luister naar **stem** *(luid of stil, snel of langzaam)*.\n• **Vraag**: 'Hoe gaat het echt?'\n\n**Verschil 'Ik-boodschap' vs 'Jij-boodschap'**:\n\nSlecht: 'JIJ bent altijd zo gemeen!' *(verwijt)*.\nGoed: 'IK voel mij gekwetst als ...' *(eigen gevoel)*.\n\nMet ik-boodschap = minder ruzie, beter gesprek.\n\n**Cito-feitje**:\nMensen kunnen **~40 emoties** onderscheiden *(meeste talen)*. Maar er zijn **mensen die geen of weinig emoties voelen** *(alexitymie — ~10% bevolking)*. Niet wegens gebrek, maar moeite om eigen gevoelens te herkennen + te benoemen.",
    checks: [
      {
        q: "Hoeveel **basis-emoties** (Ekman)?",
        options: ["6 (blij/verdrietig/boos/bang/walg/verbaasd)", "2", "100", "Geen"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Wel."],
      },
      {
        q: "Wat te doen bij **boosheid**?",
        options: ["Stop, tel tot 10, diep ademen", "Direct schreeuwen", "Slaan", "Niets"],
        answer: 0,
        wrongHints: [null, "Maakt erger.", "Niet OK.", "Wel iets."],
      },
      {
        q: "Wat is een **ik-boodschap**?",
        options: ["Eigen gevoel uiten ('Ik voel...')", "Verwijt aan ander", "Geen mening", "Schreeuwen"],
        answer: 0,
        wrongHints: [null, "Jij-boodschap.", "Wel mening.", "Niet."],
      },
      {
        q: "Hoeveel **slaap** bij puberteit?",
        options: ["9-10 uur", "3 uur", "12+ uur", "Geen"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Te veel.", "Wel."],
      },
    ],
  },
  {
    title: "Vrienden + conflicten",
    explanation:
      "**Vrienden** = belangrijk voor geluk + welzijn.\n\n**Wat maakt een goede vriend?**\n• **Eerlijk** + betrouwbaar.\n• **Steunend** in moeilijke tijden.\n• **Plezier** samen.\n• **Respect** voor jouw grenzen.\n• **Niet roddelen** achter rug.\n• **Geheim houden** als gevraagd.\n• **Accepteren** dat je anders bent.\n\n**Slechte 'vriend'-signalen** 🚩:\n• Maakt jou belachelijk.\n• Wil dat je dingen doet die je niet wilt.\n• Praat slecht over jou met anderen.\n• Alleen contact als hij/zij iets nodig heeft.\n• Mag niet met andere vrienden zijn.\n• Maakt jou onzeker.\n• Pest jou *(zelfs als 'als grapje')*.\n\nDeze 'vrienden' zijn niet echt — beter andere vinden.\n\n**Vrienden maken** 🤝:\n\n**Nieuw op school?**\n• **Lach** + zeg hallo.\n• **Vraag mee** *(naar pauze, samen lunchen)*.\n• **Sluit aan** bij groep *(sport, hobby, club)*.\n• **Wees jezelf** — niet doen alsof.\n• **Geduld** — vriendschap groeit langzaam.\n\n**Vriendjes via**:\n• School.\n• Sport-club.\n• Muziek-vereniging.\n• Familie *(neefjes/nichtjes)*.\n• Buurt + buurkinderen.\n• Internet *(maar wees voorzichtig met onbekenden)*.\n\n**Conflicten** ⚔️:\n\nBijna alle vriendschappen hebben **wel eens ruzie**. Normaal!\n\n**Hoe oplossen?**\n\n**Stap 1: Kalmeren** 😮‍💨\n• Niet midden in ruzie praten.\n• Wacht tot je rustig bent.\n• Adem diep.\n\n**Stap 2: Luister echt** 👂\n• Hoor wat ander zegt zonder direct te antwoorden.\n• Stel **vragen** om te begrijpen.\n• Knik om te tonen dat je luistert.\n\n**Stap 3: Eigen gevoel** 💬\n• **Ik-boodschap**: 'Ik voelde me ... toen je ...'\n• Niet aanvallen.\n• Eerlijk over wat jij voelde.\n\n**Stap 4: Compromis** ⚖️\n• Zoek oplossing voor **beide**.\n• Misschien geven jullie **allebei iets toe**.\n• Soms is er geen perfecte oplossing — dat is OK.\n\n**Stap 5: Excuses** 🙏\n• 'Het spijt me' is **krachtig**.\n• Niet alleen wanneer schuldig — ook wanneer je iemand pijn deed *(zelfs onbewust)*.\n• Echt menen + niet meteen 'maar...' erachter.\n\n**Niet doen**:\n• **Wraak**.\n• **Anderen tegen elkaar opzetten** *(roddelen)*.\n• **Lang zwijgen** *(beter erover praten)*.\n• **Vergeten + doorgaan** zonder uitpraten *(probleem komt terug)*.\n\n**Als vriendschap eindigt**:\n• **Soms** groei je uit elkaar — normaal.\n• Mensen veranderen.\n• Niet jouw schuld + niet hun schuld altijd.\n• **Verdriet** is OK.\n• Nieuwe vrienden komen.\n\n**Verliefdheid** 💖:\n\n**Eerste verliefdheid** = vaak in puberteit.\n\n**Signalen** *(als je verliefd bent)*:\n• Vlinders in buik.\n• Hart sneller bij persoon.\n• Denken-aan-persoon de hele dag.\n• Willen samen tijd brengen.\n• Hoop dat persoon je leuk vindt.\n\n**Wat als 'gefiest'?**\n• Heel pijnlijk — heet **'liefdesverdriet'**.\n• Praten met vriend/ouder helpt.\n• Tijd geneest.\n• Niet alleen — iedereen gaat hier door.\n\n**Diverse vormen** 🌈:\n• Sommige mensen vallen op **andere sekse** *(hetero)*.\n• Sommige op **zelfde sekse** *(homo/lesbisch)*.\n• Sommige op **beide** *(bi)*.\n• Sommige niet op iemand *(aseksueel)*.\n• Allemaal **OK** — kies wat bij jou past.\n• Niet onder druk laten zetten.\n\n**Toestemming + respect**:\n• Wil je iemand aanraken? **Vraag eerst**.\n• Iemand zegt 'nee'? **Respecteer**.\n• Privacy van ander = belangrijk.\n• Foto's of berichten van ander **niet delen** zonder toestemming.\n\n**Cito-feitje**:\nMensen die **goede vrienden hebben** leven gemiddeld **15 jaar langer** dan eenzame mensen *(meta-analyse 2020, 148 studies)*. Vriendschap = **net zo belangrijk** als stoppen met roken voor gezondheid.",
    checks: [
      {
        q: "Wat is een **goede vriend**?",
        options: ["Eerlijk, steunend, respect, plezier", "Doet wat jij zegt", "Praat slecht over anderen", "Maakt grappen ten koste"],
        answer: 0,
        wrongHints: [null, "Niet goede vriend.", "Slecht teken.", "Slecht teken."],
      },
      {
        q: "Wat is **eerste stap bij ruzie**?",
        options: ["Kalmeren, daarna praten", "Direct schreeuwen", "Andere vrienden bij betrekken", "Wraak"],
        answer: 0,
        wrongHints: [null, "Maakt erger.", "Niet goed.", "Niet goed."],
      },
      {
        q: "Wat is **liefdesverdriet**?",
        options: ["Pijn van afgewezen liefde", "Spel", "Ziekte", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet specifiek.", "Wel."],
      },
      {
        q: "**Vriendschap + leven**?",
        options: ["Goede vrienden = +15 jaar leven", "Geen verband", "Slecht", "Niet bekend"],
        answer: 0,
        wrongHints: [null, "Wel verband.", "Tegenovergesteld.", "Wel."],
      },
    ],
  },
  {
    title: "Pesten + grenzen + hulp zoeken",
    explanation:
      "**Pesten** = iemand herhaald + gericht pijn doen.\n\n**Soorten pesten**:\n\n**1. Fysiek pesten** 👊:\n• Slaan, schoppen, duwen.\n• Spullen kapot maken.\n\n**2. Verbaal pesten** 💬:\n• Schelden, uitlachen.\n• Bijnamen.\n• Roddelen.\n\n**3. Sociaal pesten** 👥:\n• Buitensluiten.\n• Geruchten verspreiden.\n• 'Iedereen-haat-jou'-spel.\n\n**4. Cyberpesten** 📱:\n• Online gemeen zijn.\n• Foto's misbruiken.\n• Anoniem schelden.\n• Steeds erger — 24/7.\n\n**Verschil pesten + plagen + ruzie**:\n• **Plagen** = soms, beide kanten, leuk bedoeld.\n• **Ruzie** = eenmalig, gelijke kansen.\n• **Pesten** = herhaald, één persoon doelwit, niet leuk.\n\n**Cijfers NL** *(2024)*:\n• 1 op 10 kinderen pest.\n• 1 op 5 kinderen wordt gepest.\n• Vooral klas 6-8 en brugklas.\n\n**Schade pesten**:\n• Onzekerheid + depressie.\n• Schoolprestaties dalen.\n• Soms zelfmoord-gedachten.\n• Effecten **jaren later** nog merkbaar.\n• Geen 'doorzettings-iets-leerzaam' — gewoon schadelijk.\n\n**Wat te doen ALS GEPEST?**\n\n**Stap 1: Erken** dat het pesten is.\nNiet 'mijn schuld'. Pesten is **nooit OK**.\n\n**Stap 2: Praat erover**.\n• Met **ouder** of vertrouwd persoon.\n• Met **mentor** of leerkracht.\n• Met **schoolarts** of vertrouwenspersoon.\n• Niet alleen blijven dragen.\n\n**Stap 3: Bewijs verzamelen** *(cyberpesten)*:\n• Screenshots maken.\n• Datum + tijd noteren.\n• Voor eventueel politie-aangifte.\n\n**Stap 4: Blokkeren + melden** *(online)*:\n• Blokkeer pestkop op sociale media.\n• Meld bij platform *(Insta, TikTok)*.\n\n**Stap 5: School informeren**.\n• School **verplicht** te helpen *(sinds wet 2015)*.\n• Anti-pest-beleid moet er zijn.\n• Mediator inschakelen tussen pester + gepeste.\n\n**Stap 6: Politie of Kindertelefoon**.\n• Bij bedreiging of zwaar pesten.\n• **0800-0432** Kindertelefoon *(gratis + anoniem)*.\n• Anoniem aangifte: meldhetbij.nl.\n\n**Niet doen**:\n• **Terug-pesten** = maakt erger.\n• **Negeren** = soms helpt maar vaak niet.\n• **Alleen houden** = pesten gaat door.\n• **Wraak nemen** = jij hebt problemen.\n\n**Wat te doen ALS PESTER?**\n\n• **Stop**. Realiseer dat je iemand pijn doet.\n• **Vraag jezelf**: waarom pest ik? *(onzeker? stress thuis? groepsdruk?)*\n• **Excuses aanbieden** — moeilijk maar krachtig.\n• **Praat** met volwassene over jouw gevoelens.\n• **Compenseer** — wees aardig voor wie je pestte.\n\n**Wat te doen ALS GETUIGE?**\n\n• **Spreek je uit**: 'Stop, dit is niet OK'.\n• **Help slachtoffer**: ga ernaast staan.\n• **Vertel volwassene** *(ouder, leraar)*.\n• **NIET** meedoen of lachen — moedig pesten aan.\n• Het kost moed maar maakt verschil.\n\n**Grenzen** 🛑:\n\n**Eigen grenzen** kennen:\n• Wat **wil** je wel?\n• Wat **wil** je niet?\n• 'Nee' is **OK** om te zeggen.\n\n**Anderen' grenzen respecteren**:\n• Vraag voor aanraken.\n• Respecteer 'nee'.\n• Druk niemand om iets te doen.\n\n**Soorten grenzen**:\n• **Fysiek**: aanrakingen.\n• **Emotioneel**: hoe je behandeld wordt.\n• **Tijd**: hoeveel tijd voor anderen.\n• **Materieel**: spullen lenen / delen.\n• **Online**: persoonlijke foto's + info.\n\n**Hulplijnen voor jongeren**:\n• **Kindertelefoon**: 0800-0432 *(gratis + anoniem)*.\n• **MIND Korrelatie**: voor angst + depressie.\n• **Stop Pesten Nu**: stoppestennu.nl.\n• **Veilig Thuis**: bij geweld/misbruik thuis. 0800-2000.\n• **De Kinder en Jongeren Rechtswinkel**.\n\n**Geheim houden of vertellen?**\n\n**'Geheim' aan ander = OK**:\n• Verjaardagscadeau.\n• Privé-gedachten.\n• Leuk klein nieuws.\n\n**'Geheim' over gevaar = NIET OK**:\n• Iemand pijn doet.\n• Misbruik.\n• Bedreiging.\n• **VERTEL** aan vertrouwde volwassene.\n• Ook al heeft pester gezegd 'vertel niet'.\n\n**Cito-feitje**:\nDe **'KiVa'**-anti-pest-aanpak *(Fins, op NL-scholen)* heeft pesten met **30%** verminderd op scholen die het invoeren. Werkt met **getuigen** activeren — niet alleen pester aanpakken.",
    checks: [
      {
        q: "Wat is **pesten**?",
        options: ["Herhaald + gericht iemand pijn doen", "Eenmalige ruzie", "Plagen", "Sport"],
        answer: 0,
        wrongHints: [null, "Niet pesten.", "Niet pesten.", "Niet."],
      },
      {
        q: "Wat doe je bij **cyberpesten**?",
        options: ["Screenshot + blokkeer + volwassene", "Negeer", "Terug-pesten", "Niet vertellen"],
        answer: 0,
        wrongHints: [null, "Werkt vaak niet.", "Maakt erger.", "Wel praten."],
      },
      {
        q: "Welk nummer **Kindertelefoon**?",
        options: ["0800-0432", "112", "0900", "0800-2000"],
        answer: 0,
        wrongHints: [null, "Spoed.", "Niet.", "Veilig Thuis."],
      },
      {
        q: "Mag je **'nee'** zeggen?",
        options: ["Ja, jouw grenzen tellen", "Nee, altijd toegeven", "Soms", "Niet aan vrienden"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel altijd.", "Wel — vrienden ook."],
      },
    ],
  },
  {
    title: "Eind-toets — emoties mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Hoeveel **basis-emoties** (Ekman)?", options: ["6", "1", "100", "0"], answer: 0, wrongHints: [null, "Te weinig.", "Te veel.", "Wel."] },
      { q: "Wat is **ik-boodschap**?", options: ["Eigen gevoel uiten", "Verwijt aan ander", "Geen mening", "Schreeuwen"], answer: 0, wrongHints: [null, "Jij-boodschap.", "Wel mening.", "Niet."] },
      { q: "Wat is **pesten** vs plagen?", options: ["Pesten = herhaald + gericht", "Geen verschil", "Plagen erger", "Niet bekend"], answer: 0, wrongHints: [null, "Wel verschil.", "Tegenovergesteld.", "Wel."] },
      { q: "Welk nummer **Kindertelefoon**?", options: ["0800-0432", "112", "0900", "0800-2000"], answer: 0, wrongHints: [null, "Spoed.", "Niet.", "Veilig Thuis."] },
      { q: "Wat doe je bij **boosheid**?", options: ["Tel 10 + diep ademen", "Direct schreeuwen", "Slaan", "Niets"], answer: 0, wrongHints: [null, "Maakt erger.", "Niet OK.", "Wel reageren."] },
      { q: "Wat doe je als **getuige van pesten**?", options: ["Spreek uit + help + vertel volwassene", "Negeer", "Lach mee", "Pest mee"], answer: 0, wrongHints: [null, "Wegkijken werkt niet.", "Slecht.", "Slecht."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const emotiesSocialePo = {
  id: "emoties-sociaal-po",
  title: "Emoties + sociaal omgaan (Cito groep 6-8)",
  emoji: "😊",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / sociaal-emotioneel",
  prerequisites: [
    { id: "pubertijd-groei-po", title: "Puberteit + groei", niveau: "1F" },
  ],
  intro:
    "Emoties + sociaal omgaan voor Cito groep 6-8 — 6 basis-emoties (Ekman) + omgaan met boosheid/verdriet/angst + vrienden maken + conflict oplossen (ik-boodschap) + pesten (4 soorten + KiVa + Kindertelefoon 0800-0432) + grenzen + getuige-rol. Sluit op puberteit. ~15 min.",
  triggerKeywords: [
    "emoties", "gevoelens",
    "blij", "verdrietig", "boos", "bang",
    "vrienden", "vriendschap",
    "conflict", "ruzie", "ik-boodschap",
    "pesten", "cyberpesten",
    "Kindertelefoon",
    "grenzen", "nee zeggen",
  ],
  chapters,
  steps,
};

export default emotiesSocialePo;
