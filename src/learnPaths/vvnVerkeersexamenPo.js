// Leerpad: VVN Verkeersexamen groep 7-8
// Theorie-examen Veilig Verkeer Nederland — voor de meeste basisscholen
// in april van groep 7 (sommige groep 8).
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  rood: "#c62828",
  blauw: "#1565c0",
  groen: "#00897b",
  geel: "#ffd54f",
  oranje: "#ef6c00",
};

const stepEmojis = ["🚦", "🛑", "🚲", "⚠️", "🏆"];

const chapters = [
  { letter: "A", title: "Verkeersborden — vorm + kleur", emoji: "🚦", from: 0, to: 0 },
  { letter: "B", title: "Voorrang", emoji: "🛑", from: 1, to: 1 },
  { letter: "C", title: "Veilig fietsen", emoji: "🚲", from: 2, to: 2 },
  { letter: "D", title: "Gevaar herkennen", emoji: "⚠️", from: 3, to: 3 },
  { letter: "E", title: "Examen-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Verkeersborden ────────────────────────────────────
  {
    title: "Verkeersborden — herken aan vorm en kleur",
    explanation:
      "Op het **VVN-verkeersexamen** komen veel vragen over **verkeersborden**. Geluk: aan de vorm + kleur kun je vaak al de betekenis raden.\n\n**Vorm + kleur = betekenis-categorie**:\n\n**Rond + rode rand = VERBOD**:\n• Mag NIET. Bv. 🚫 inrijden verboden, geen fietsen toegestaan, snelheid-limiet.\n• Rode rand = stop / niet doen / verboden.\n• Snelheid-bord: cijfer in rondje met rode rand = maximumsnelheid.\n\n**Rond + blauw = GEBOD**:\n• Je MOET. Bv. ✓ verplicht fietspad, voorgeschreven rijrichting.\n• Blauwe achtergrond met witte pijl = je MOET die richting.\n\n**Driehoekig + rode rand = WAARSCHUWING**:\n• Pas op! Bv. ⚠️ gevaarlijke bocht, schoolzone, drempel.\n• Wit binnen, rode rand, driehoekig staand op punt.\n\n**Vierkant of rechthoekig + blauw = INFORMATIE**:\n• Vertelt je iets. Bv. ℹ️ ziekenhuis, parkeerplaats, einde fietspad.\n• Geen verplichting, alleen info.\n\n**Achthoekig + rood = STOP**:\n• Eén specifiek bord: **STOP-bord** (8-hoekig, rood). Altijd stoppen + voorrang verlenen.\n\n**Belangrijke borden voor fietsers**:\n• **B6** (haaientanden + rode driehoek): voorrangsweg — JIJ moet voorrang verlenen.\n• **F1**: einde fietspad.\n• **G11**: verplicht fietspad — je MOET hier rijden als fietser.\n• **G13**: onverplicht fietspad (alternatief).\n\n**Cito-VVN-truc**: bij twijfel — wat is de **vorm**? Wat is de **kleur**? Daar zit de halve betekenis.",
    checks: [
      {
        q: "Welke vorm + kleur betekent **'verboden'**?",
        options: ["Rond + rode rand","Driehoek + rode rand","Vierkant + blauw","Rond + blauw"],
        answer: 0,
        wrongHints: [null, "Niet — dat is waarschuwing.", "Niet — dat is informatie.", "Niet — dat is gebod (verplicht)."],
        uitlegPad: {
          stappen: [{ titel: "Rond rood = verbod", tekst: "**Rond + rode rand** = altijd 'mag niet'. Voorbeeld: bord '50' rond met rode rand = max 50 km/u. Bord met fiets en streep erdoor = fietsen verboden." }],
          woorden: [{ woord: "verbod", uitleg: "Iets mag NIET." }, { woord: "gebod", uitleg: "Iets MOET." }],
          theorie: "Cito-VVN-pattern: cijfer in rondje met rode rand = snelheid. Geen rondje = ander soort bord.",
          niveaus: { basis: "Rond + rode rand — A.", simpeler: "Verbod = rond + rood = A.", nogSimpeler: "Rond rood = A." },
        },
      },
      {
        q: "Een driehoekig bord met rode rand betekent:",
        options: ["Waarschuwing — pas op","Verboden","Verplicht","Informatie"],
        answer: 0,
        wrongHints: [null, "Niet — dat is rond + rood.", "Niet — dat is rond + blauw.", "Niet — dat is rechthoekig + blauw."],
        uitlegPad: {
          stappen: [{ titel: "Driehoek = waarschuwing", tekst: "**Driehoek met rode rand** (puntige top boven of beneden) waarschuwt voor gevaar. In het bord: wat ER kan gebeuren. Bv. driehoek met fiets = fietspad-kruising, driehoek met kinderen = schoolzone." }],
          theorie: "Cito-VVN: ALTIJD oppassen bij driehoek + rood. Snelheid verminderen + oplettend rijden.",
          niveaus: { basis: "Waarschuwing — A.", simpeler: "Driehoek + rood = pas op = A.", nogSimpeler: "Driehoek rood = A." },
        },
      },
      {
        q: "Welk verkeersbord is **achthoekig** (8 hoeken)?",
        options: ["STOP-bord","Voorrangsweg","Verboden inrijden","Fietspad"],
        answer: 0,
        wrongHints: [null, "Niet — dat is ruitvormig.", "Rond + rode rand.", "Rond + blauw."],
        uitlegPad: {
          stappen: [{ titel: "Stop = uniek bord", tekst: "**STOP-bord** = enige achthoekige verkeersbord. Internationaal — altijd hetzelfde, ook in VS, EU, Japan. **Altijd stoppen** (zelfs als geen ander verkeer) + voorrang verlenen aan iedereen op gekruiste weg." }],
          theorie: "VVN-examen-feit: bij STOP-bord moet je **echt** stilstaan (wielen niet bewegen). Anders boete.",
          niveaus: { basis: "STOP-bord — A.", simpeler: "Achthoekig = STOP = A.", nogSimpeler: "Stop = A." },
        },
      },
      {
        q: "Een blauw vierkant bord toont informatie of:",
        options: ["Gebod (verplichting)","Verbod","Waarschuwing","Niets"],
        answer: 0,
        wrongHints: [null, "Niet — verbod = rond + rood.", "Niet — waarschuwing = driehoek + rood.", "Niet — wel betekenis."],
        uitlegPad: {
          stappen: [{ titel: "Blauw = positieve actie", tekst: "**Blauw** = positief: óf je MOET iets (gebod), óf je krijgt info. Rond + blauw = MOET (bv. verplicht fietspad). Vierkant + blauw = info (bv. parkeerplaats hier)." }],
          theorie: "Onthoud: kleur-betekenissen blauw = OK/doen. Rood = STOP/niet. Geel = niet officieel, vaak werk/wegwerkzaamheden tijdelijk.",
          niveaus: { basis: "Gebod — A.", simpeler: "Blauw rond = moet = A.", nogSimpeler: "Blauw = doen = A." },
        },
      },
      {
        q: "Op een **fietspad-bord** (rond + blauw + witte fiets): wat moet je?",
        options: ["Verplicht hier fietsen","Verboden hier fietsen","Mag kiezen","Stoppen"],
        answer: 0,
        wrongHints: [null, "Niet — blauw = MOET.", "Niet — wel verplicht.", "Niet — geen stop-bord."],
        uitlegPad: {
          stappen: [{ titel: "Rond + blauw = verplichting", tekst: "Bord **G11** (rond, blauw, witte fiets) = **verplicht fietspad**. Hier MOET een fietser rijden. Auto's mogen er niet, voetgangers niet (tenzij ander bord aangeeft). Strakke regel — anders boete." }],
          theorie: "Verschil G11 (verplicht) vs G13 (onverplicht, alternatief): G11 = MUST, G13 = MAY.",
          niveaus: { basis: "Verplicht fietsen — A.", simpeler: "Rond blauw met fiets = moet fietsen = A.", nogSimpeler: "Fietsen verplicht = A." },
        },
      },
    ],
  },

  // ─── B. Voorrang ──────────────────────────────────────────
  {
    title: "Voorrang — wie eerst?",
    explanation:
      "**Voorrang** = welk voertuig **eerst** mag, andere moet wachten. Op het examen ~6-8 vragen hierover.\n\n**Hoofdregels VVN**:\n\n**1. Voorrangsweg ('haaientanden')**:\n• Witte driehoekjes op de weg (haaientanden) of bord **B6** = JIJ moet voorrang verlenen.\n• De **andere** weg is voorrangsweg.\n\n**2. Gelijkwaardige kruising** (geen borden):\n• **Rechts heeft voorrang** — altijd onthouden.\n• Standaard regel als er geen ander signaal is.\n\n**3. Verkeerslichten**:\n• **Rood**: stoppen voor stopstreep.\n• **Geel**: stoppen als veilig kan.\n• **Groen**: doorrijden — maar alleen als de kruising vrij is.\n• Voor fietsers: aparte fietslichten — kijk goed!\n\n**4. Stop-bord (8-hoek)**:\n• Altijd **stilstaan** + voorrang verlenen aan iedereen.\n\n**5. Voetgangers op zebrapad**:\n• Voetganger heeft altijd voorrang — auto + fiets STOPPEN.\n• Op **zebrapad zonder zebra-strepen**: dan oversteker heeft GEEN voorrang.\n\n**Speciale gevallen**:\n• **Voorrangsvoertuigen** (politie + ambulance + brandweer met zwaailicht + sirene): altijd voorrang. Aan kant gaan staan.\n• **Trein op overweg**: ALTIJD wachten, ook als bel niet rinkelt.\n• **Tram**: bijzondere voorrang — vaak voorrang op andere weg-deelnemers.\n• **Rondom obstakel** (geparkeerde auto): wie wel/niet uitwijkt heeft voorrang. Wie obstakel heeft, moet wachten.\n\n**Voorbeeld-rij**:\n• Stoplichten gaan vóór borden.\n• Borden gaan vóór algemene regels (rechts voorrang).\n• Verkeersregelaar gaat vóór ALLES.",
    checks: [
      {
        q: "Op een **gelijkwaardige kruising** zonder borden: wie heeft voorrang?",
        options: ["Voertuig van rechts","Voertuig van links","Wie het hardst rijdt","Niemand"],
        answer: 0,
        wrongHints: [null, "Niet — links moet WACHTEN.", "Niet — snelheid heeft niets met voorrang.", "Niet — er IS altijd een regel."],
        uitlegPad: {
          stappen: [{ titel: "Rechts heeft voorrang", tekst: "Op een **gelijkwaardige kruising** (geen bord, geen stoplicht, geen haaientanden) heeft **rechts** voorrang. Onthoud: 'rechts gaat eerst'. Internationaal de regel in NL/Europa." }],
          theorie: "Wel anders in VS! Daar hebben STOP-borden vaker voorrang, geen 'rechts-regel'. NL/EU = rechts voorrang.",
          voorbeelden: [{ type: "voorbeeld", tekst: "Stel je bent op fiets, kruising zonder borden. Auto komt van rechts → auto heeft voorrang, jij wacht." }],
          niveaus: { basis: "Rechts — A.", simpeler: "Zonder borden = rechts voor = A.", nogSimpeler: "Rechts = A." },
        },
      },
      {
        q: "Wat betekenen **haaientanden** op de weg (witte driehoekjes)?",
        options: ["JIJ moet voorrang verlenen","JIJ hebt voorrang","Wegversmalling","Stop direct"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — de ANDERE heeft voorrang.", "Niet relevant.", "Niet — wel een teken, geen volledige stop."],
        uitlegPad: {
          stappen: [{ titel: "Haaientanden = waarschuwing", tekst: "**Haaientanden** (witte driehoekjes wijzend naar JOU op de weg) zijn de **voorganger** van bord B6 (voorrangsweg). De andere weg is voorrangsweg → jij moet wachten + voorrang verlenen." }],
          woorden: [{ woord: "haaientanden", uitleg: "Witte driehoekjes op het wegdek die voorrang aangeven." }],
          theorie: "Wegmarkering 'haaientanden' wijst altijd naar de weggebruiker die voorrang moet verlenen.",
          niveaus: { basis: "Jij wacht — A.", simpeler: "Haaientanden = jij verleent voorrang = A.", nogSimpeler: "Jij wachten = A." },
        },
      },
      {
        q: "Bij een **zebrapad** met overstekende voetganger:",
        options: ["Stop direct + laat oversteken","Toeteren","Sneller rijden","Negeren"],
        answer: 0,
        wrongHints: [null, "Niet — voetganger heeft voorrang.", "Niet — gevaarlijk + onbeleefd.", "Niet — wel verplicht stoppen."],
        uitlegPad: {
          stappen: [{ titel: "Zebra = voetganger eerst", tekst: "Op **zebrapad** (witte strepen) heeft de **voetganger altijd voorrang**. Auto + fiets STOPPEN — ook als voetganger nog niet helemaal oversteekt. Boete bij overtreding (~€280)." }],
          theorie: "Cito-VVN: leerlingen moeten dit pad-niveau testen. ~3-4 vragen over zebra/voetganger gemiddeld in examen.",
          niveaus: { basis: "Stop — A.", simpeler: "Zebra + voetganger = stop = A.", nogSimpeler: "Stop = A." },
        },
      },
      {
        q: "Een **ambulance** met zwaailicht + sirene nadert. Wat doe je als fietser?",
        options: ["Naar kant gaan + stoppen","Verder fietsen","Sneller fietsen","Stoppen midden op weg"],
        answer: 0,
        wrongHints: [null, "Niet — moet plaats maken.", "Niet — moet juist stoppen.", "Niet — ambulance heeft route vrij nodig."],
        uitlegPad: {
          stappen: [{ titel: "Voorrangsvoertuig = altijd voorrang", tekst: "**Ambulance + politie + brandweer** met **zwaailicht + sirene** = voorrangsvoertuigen. ALTIJD voorrang. Andere weggebruikers: **opzij + stoppen**. Fietser: snel naar berm. Auto: aan rechterkant van weg, stoppen." }],
          theorie: "Zwaailicht zonder sirene = geen voorrang (alleen zichtbaarheid). Sirene + zwaailicht = wél voorrang.",
          niveaus: { basis: "Naar kant + stoppen — A.", simpeler: "Ambulance = opzij + stoppen = A.", nogSimpeler: "Stop + opzij = A." },
        },
      },
      {
        q: "Bij **rood verkeerslicht** voor fietsers: wat doe je?",
        options: ["Stoppen voor stopstreep","Doorrijden als geen verkeer","Naast wachtend voetganger oversteken","Eraf fietsen"],
        answer: 0,
        wrongHints: [null, "Niet — rood = ALTIJD stop.", "Niet — niet veiliger.", "Niet — ook eraf moet je wachten."],
        uitlegPad: {
          stappen: [{ titel: "Rood = altijd stop", tekst: "**Rood verkeerslicht** = altijd stoppen voor stopstreep, ongeacht ander verkeer. Wachten tot **groen**. Boete bij door rood: fietser €110, auto €280. Bij ongeluk: jouw schuld." }],
          theorie: "Cito-VVN: bij rood ALTIJD stop. Geen uitzonderingen voor fietsers (in tegenstelling tot sommige andere landen — in België mogen fietsers soms rechtsaf bij rood).",
          niveaus: { basis: "Stoppen — A.", simpeler: "Rood = stop = A.", nogSimpeler: "Stop = A." },
        },
      },
    ],
  },

  // ─── C. Veilig fietsen ────────────────────────────────────
  {
    title: "Veilig fietsen — zichtbaarheid + gedrag",
    explanation:
      "Veilig fietsen = **gezien worden + correct gedrag**. ~5-6 vragen hierover op VVN-examen.\n\n**Zichtbaarheid**:\n\n**Verlichting** (verplicht in donker en bij regen):\n• **Voorkant**: wit of geel licht.\n• **Achterkant**: rood licht.\n• **Reflectoren**: op pedalen (geel/oranje), in wielen (geel of wit), achterkant zadel (rood).\n• Verlichting moet **vast** zitten — geen losse zaklamp.\n\n**Reflecterende kleding** (aanbevolen):\n• Hesje, sleutelhanger, broek/jas met reflecterende strepen.\n• Verhoogt zichtbaarheid van 30m naar 150m in donker.\n\n**Helm**:\n• Niet verplicht in NL maar **sterk aanbevolen**.\n• Beschermt hoofd bij val — 50% minder hersenletsel.\n\n**Fiets-onderhoud**:\n• **Bel**: verplicht (om waarschuwing te geven).\n• **Remmen**: voor + achter werkend.\n• **Banden**: voldoende profiel, niet leeg.\n\n**Gedrag op weg**:\n\n**Hand uitsteken** (voor afslaan):\n• Linksaf → linkerhand uitsteken.\n• Rechtsaf → rechterhand uitsteken.\n• Verplicht — anders weet ander verkeer niet wat je doet.\n• Doe dit **op tijd** (~5m vóór afslag).\n\n**Op fietspad**:\n• Verplicht rond + blauw bord (G11) = MOET op fietspad.\n• Niet midden op weg (auto's).\n• Op tweerichting-fietspad: **rechts houden**.\n• Niet meer dan **2 fietsers naast elkaar** (tenzij anders).\n\n**Niet op fiets** (verboden):\n• Bellen / appen op telefoon (sinds 2019).\n• Koptelefoon op beide oren (alleen 1 oor toegestaan).\n• Alcohol drinken.\n• Met meer dan 1 persoon op bagagedrager (rugbel).\n\n**Voertuigsoorten**:\n• Fiets / e-bike: max 25 km/u (geen helm-plicht in NL).\n• **Speed-pedelec** (s-pedelec, tot 45 km/u): WEL helm-plicht + kenteken + rijbewijs.\n• Snorfiets (25 km/u, blauwe plaat): op fietspad, geen helm-plicht.\n• Bromfiets (45 km/u, gele plaat): op rijbaan, helm-plicht.",
    checks: [
      {
        q: "Welke kleur licht moet je **voorop** je fiets hebben in donker?",
        options: ["Wit of geel","Rood","Blauw","Groen"],
        answer: 0,
        wrongHints: [null, "Niet — rood is achterkant.", "Niet — politie/ambulance.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Voorlicht wit/geel", tekst: "Voor: wit of geel. Achter: rood. Onthoud: 'wit licht waar je heen kijkt; rood waar je vandaan komt'. Bij geen licht in donker: boete €60." }],
          theorie: "VVN-examen-feit: bij regen of slecht zicht ook overdag licht aan (sinds 2022 sterk aanbevolen).",
          niveaus: { basis: "Wit/geel voor — A.", simpeler: "Voorlicht = wit of geel = A.", nogSimpeler: "Wit = A." },
        },
      },
      {
        q: "Hoe geef je aan dat je **linksaf** wilt?",
        options: ["Linker arm uitsteken","Rechter arm uitsteken","Knipperen met fietslampen","Niets"],
        answer: 0,
        wrongHints: [null, "Niet — dat is rechtsaf.", "Niet — fietsen hebben geen knipperlichten.", "Niet — verplicht."],
        uitlegPad: {
          stappen: [{ titel: "Linker hand = linksaf", tekst: "Bij **linksaf**: linker hand uitsteken **op tijd** (~5m voor kruising). Bij **rechtsaf**: rechter hand uitsteken. Boete als je niet aangeeft: ~€110 + risico ongeluk." }],
          theorie: "Cito-VVN: ~2 vragen per examen over hand-aangeven. Ezelsbruggetje: 'links-link' (linkerhand voor linksaf, allebei met L).",
          niveaus: { basis: "Linker hand — A.", simpeler: "Linksaf = linker hand uit = A.", nogSimpeler: "Links = links = A." },
        },
      },
      {
        q: "Is een **helm** verplicht voor fietsers in NL?",
        options: ["Nee, wel aanbevolen","Ja, altijd","Ja, alleen kinderen","Nee, ook niet aanbevolen"],
        answer: 0,
        wrongHints: [null, "Niet — geen wet in NL.", "Niet — geen plicht voor groep.", "Niet — wél sterk aanbevolen."],
        uitlegPad: {
          stappen: [{ titel: "Geen helm-plicht in NL", tekst: "Helm is **niet verplicht** voor gewone fietsen in NL (uniek in Europa — Engeland/Duitsland ook geen plicht maar wel meer cultuur). Wel **sterk aanbevolen**: helm vermindert hersenletsel bij val met ~50%. **WEL VERPLICHT**: voor speed-pedelec (45km/u) en bromfiets." }],
          theorie: "Cito-actueel: discussie over helm-plicht voor kinderen (jaarlijks gespreks-onderwerp). Vooralsnog niet ingevoerd.",
          niveaus: { basis: "Nee, wel aanbevolen — A.", simpeler: "Helm = niet verplicht = A.", nogSimpeler: "Niet verplicht = A." },
        },
      },
      {
        q: "Welke handelingen op de fiets zijn **verboden** sinds 2019?",
        options: ["Telefoon vasthouden (bellen/appen)","Met een hand sturen","Helm dragen","Zonder licht overdag"],
        answer: 0,
        wrongHints: [null, "Niet verboden — wel met 2 handen veiliger.", "Niet — helm is juist aanbevolen.", "Overdag geen licht-plicht."],
        uitlegPad: {
          stappen: [{ titel: "Telefoon-verbod 1 juli 2019", tekst: "**Sinds 1 juli 2019**: telefoon vasthouden tijdens fietsen verboden. **Boete €100**. Hands-free (oortje, telefoon in tas) is wel toegestaan. Doel: voorkomen ongelukken door afleiding." }],
          theorie: "Cito-actueel: 2019-wet = vaak in examens. Ezelsbruggetje: 'fiets + telefoon = 2 handen aan stuur OF helemaal geen telefoon'.",
          niveaus: { basis: "Telefoon vasthouden — A.", simpeler: "2019 = telefoon-verbod fiets = A.", nogSimpeler: "Telefoon verboden = A." },
        },
      },
      {
        q: "Maximale snelheid van een **e-bike** zonder kenteken in NL?",
        options: ["25 km/u","30 km/u","45 km/u","50 km/u"],
        answer: 0,
        wrongHints: [null, "Nergens in NL 30 km/u-zone-limiet voor e-bike.", "Speed-pedelec, met kenteken + helm.", "Auto-snelheid binnen bebouwde kom."],
        uitlegPad: {
          stappen: [{ titel: "E-bike vs speed-pedelec", tekst: "Een gewone **e-bike** (electrische fiets met trapondersteuning) heeft max **25 km/u**. Boven die snelheid stopt motor — je moet zelf harder trappen. Tot 25 km/u = fiets (geen kenteken, geen helm-plicht). Boven 25 km/u = **speed-pedelec** = bromfiets-categorie (helm + kenteken + rijbewijs)." }],
          theorie: "Cito-actueel: e-bike-populariteit + speed-pedelec-ongelukken. Veel discussie.",
          niveaus: { basis: "25 km/u — A.", simpeler: "E-bike-limiet = 25 = A.", nogSimpeler: "25 = A." },
        },
      },
    ],
  },

  // ─── D. Gevaar herkennen ──────────────────────────────────
  {
    title: "Gevaarlijke situaties — leer de signalen",
    explanation:
      "Een groot deel van VVN-examen-vragen draait om **gevaar herkennen**. Op deze leeftijd is verkeer-bewustzijn cruciaal.\n\n**Belangrijkste gevaren voor fietsers**:\n\n**1. Vrachtauto-dode-hoek**:\n• Vrachtauto-chauffeur **ziet jou NIET** aan rechterkant + voorkant + achterkant.\n• Gevaar: bij rechtsafslaan op kruising — vrachtauto draait, fietser onder wielen.\n• **Vuistregel**: chauffeur in spiegel kunnen zien = chauffeur kan jou zien. Niet → JIJ in dode hoek.\n• **Strategie**: nooit naast een vrachtauto staan bij kruising. Stoppen + wachten tot vrachtauto weg is.\n\n**2. Auto-deur ('dooring')**:\n• Geparkeerde auto langs fietspad. Bestuurder opent plotseling deur.\n• Fietser kan tegen deur botsen → val of letsel.\n• **Strategie**: houd ~1m afstand van geparkeerde auto's.\n\n**3. Voetgangers stappen onverwacht over**:\n• Vooral bij geparkeerde auto's, drukke straat, schoolzone.\n• **Strategie**: rij langzamer in straten met veel obstakels.\n\n**4. Slechte wegdek + glad**:\n• **Regen**: minder grip, langere remafstand.\n• **Bladeren herfst**: glad als regen.\n• **Sneeuw + ijs winter**: extreem glad — fietsen mijden of sterk vertragen.\n• **Tramrails**: wielen kunnen vastlopen — kruis tramrails in HOEK van 90° (haaks).\n\n**5. Tegemoetkomend verkeer + linksaf**:\n• Wanneer JIJ linksaf wil: tegemoetkomend verkeer heeft VOORRANG.\n• Wachten + duidelijk hand uitsteken.\n\n**6. Drukke kruisingen**:\n• Te veel signalen tegelijk verwerken.\n• **Strategie**: bij twijfel — STOPPEN. Niet schatten.\n\n**Algemene vuistregels**:\n• **Defensief rijden**: ga uit van fouten van anderen. Verwacht het slechtste.\n• **Voorspelbaar**: blijf in je baan, geen wilde manoeuvres.\n• **Oogcontact**: zoek oogcontact met auto-chauffeurs op kruising. Knik = ze hebben je gezien.\n• **Geen koptelefoon op beide oren**: je hoort waarschuwingen niet.\n\n**Cito-VVN-truc**: bij examen-vraag 'wat is gevaarlijkste situatie?' — kies optie met **vrachtauto + rechtsaf-kruising** als die aanwezig is. Of de optie waarbij JIJ in dode hoek bent.",
    checks: [
      {
        q: "Wat is **dode hoek** bij een vrachtauto?",
        options: ["Plek waar chauffeur jou niet kan zien","Achterste deel van trailer","Spiegel-positie","Cabine zelf"],
        answer: 0,
        wrongHints: [null, "Bijna — wel dichtbij maar de hele dode hoek is groter.", "Bijna — verschillende plekken.", "Niet — chauffeur zit IN cabine, geen dode hoek."],
        uitlegPad: {
          stappen: [{ titel: "Dode hoek = onzichtbaar voor chauffeur", tekst: "**Dode hoek** = gebieden waar de **vrachtauto-chauffeur jou NIET kan zien** in spiegels. Vooral: **rechtsvoor**, **rechts naast cabine**, **achterkant**. Op kruising bij rechtsafslaan = meest dodelijk. Cito-VVN: jaarlijks ~10 fietser-doden in NL door dode-hoek-ongelukken." }],
          woorden: [{ woord: "dode hoek", uitleg: "Plek bij voertuig waar bestuurder met spiegels niet kan zien." }],
          theorie: "Vuistregel: zie ik chauffeur in z'n spiegel? Zo ja, kan hij/zij mij ook zien. Niet? → dode hoek → gevaar.",
          voorbeelden: [{ type: "feit", tekst: "Vrachtauto-chauffeur zit ~2,5m hoog. Naast cabine is ~3 meter blinde zone." }],
          niveaus: { basis: "Chauffeur ziet je niet — A.", simpeler: "Dode hoek = onzichtbaar voor chauffeur = A.", nogSimpeler: "Onzichtbaar = A." },
        },
      },
      {
        q: "Hoe kruis je **tramrails** veilig?",
        options: ["Haaks (90°) erover","Schuin","Met snelheid eroverheen","Niet — omrijden"],
        answer: 0,
        wrongHints: [null, "Niet — schuin = wielen vastlopen.", "Niet — gevaarlijk maakt 't erger.", "Niet altijd nodig."],
        uitlegPad: {
          stappen: [{ titel: "Haaks = 90°", tekst: "Kruis tramrails **haaks** (= recht eroverheen, in hoek van 90°). Schuin kruisen = fiets-wiel kan in rail blijven steken → val. Haaks oversteken = wielen rollen er soepel overheen." }],
          woorden: [{ woord: "haaks", uitleg: "In hoek van 90 graden, loodrecht." }],
          theorie: "Cito-VVN: in steden met tram (Amsterdam, Den Haag, Utrecht, Rotterdam) komt deze vraag vaker voor.",
          niveaus: { basis: "Haaks — A.", simpeler: "Tramrails kruisen = recht (90°) = A.", nogSimpeler: "Recht = A." },
        },
      },
      {
        q: "Bij **regen** op fietspad — wat verandert?",
        options: ["Remafstand wordt langer + minder grip","Niets","Sneller","Helderder zicht"],
        answer: 0,
        wrongHints: [null, "Niet — wel veel verandert.", "Niet — juist voorzichtiger.", "Niet — zicht juist minder."],
        uitlegPad: {
          stappen: [{ titel: "Nat = langere stoptijd", tekst: "Nat wegdek = **minder grip** voor band → kan slippen. **Remafstand wordt ~50% langer** dan droog. Strategie: **langzamer fietsen** + meer afstand houden tot voorganger. Voor groot risico-gebied (bladeren + sneeuw + ijs) ook." }],
          theorie: "Cito-VVN: examen-vraag-favoriet. Onthoud: regen = meer afstand + langzamer.",
          niveaus: { basis: "Langere remafstand — A.", simpeler: "Regen = minder grip + meer afstand = A.", nogSimpeler: "Minder grip = A." },
        },
      },
      {
        q: "Een **geparkeerde auto** langs fietspad — wat is risico?",
        options: ["Deur kan plotseling opengaan","Auto kan rijden","Auto valt om","Auto explodeert"],
        answer: 0,
        wrongHints: [null, "Niet — geparkeerd = stilstaand.", "Niet — geparkeerd = stil.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "'Dooring' = auto-deur-ongeluk", tekst: "**'Dooring'** = fietser botst tegen plotseling geopende auto-deur. Auto-bestuurder vergeet vaak om kant op te kijken. **Strategie**: houd ~1 meter afstand van geparkeerde auto's, ook al lijkt het verleidelijk om dichterbij te rijden." }],
          woorden: [{ woord: "dooring", uitleg: "Engelse term voor fiets-tegen-autodeur-ongeluk." }],
          theorie: "Cito-actueel: ~1.500 dooring-ongelukken in NL per jaar. 30% leidt tot ziekenhuis-opname.",
          niveaus: { basis: "Deur kan open — A.", simpeler: "Geparkeerde auto = deur-risico = A.", nogSimpeler: "Deur = A." },
        },
      },
      {
        q: "Wat is **defensief rijden**?",
        options: ["Uitgaan van fouten van anderen","Snel rijden","Hard remmen","Alleen op fietspad rijden"],
        answer: 0,
        wrongHints: [null, "Niet — defensief = voorzichtig.", "Niet — geen-actie maar denkwijze.", "Niet — defensief is denkpatroon, geen route-keuze."],
        uitlegPad: {
          stappen: [{ titel: "Verwacht het slechtste", tekst: "**Defensief rijden** = je gaat ervan uit dat anderen FOUTEN gaan maken. Niet automatisch erop vertrouwen dat de auto je ziet. Niet vertrouwen dat de voetganger op zebra wacht. **Verwacht het slechtste → wees voorbereid**." }],
          theorie: "Vooral belangrijk in stad + drukke kruisingen. Defensief = veilig. Offensief (vertrouwen op anderen) = risico.",
          niveaus: { basis: "Verwacht fouten — A.", simpeler: "Defensief = voorzichtig + bewust = A.", nogSimpeler: "Voorzichtig = A." },
        },
      },
    ],
  },

  // ─── E. Examen-eindopdracht ───────────────────────────────
  {
    title: "VVN-examen-eindopdracht",
    explanation:
      "Mix van borden + voorrang + veilig fietsen + gevaren. Cito-VVN-stijl.\n\nVeel succes!",
    checks: [
      {
        q: "Verkeersbord **rond + rode rand + cijfer 30**:",
        options: ["Max 30 km/u","Min 30 km/u","Stop bij 30","Niet relevant"],
        answer: 0,
        wrongHints: [null, "Niet — geen 'minimum'-bord in NL.", "Niet — geen STOP-bord.", "Niet — wel relevant."],
        uitlegPad: {
          stappen: [{ titel: "Rond rood + getal = max-snelheid", tekst: "Cijfer in rondje met rode rand = **maximumsnelheid**. 30 km/u-borden vooral in **woonwijken, schoolzones**. Boete bij overtreding: ~€100-300 afhankelijk van overschrijding." }],
          niveaus: { basis: "Max 30 — A.", simpeler: "30 in rondje rood = max 30 = A.", nogSimpeler: "Max 30 = A." },
        },
      },
      {
        q: "Bij **STOP-bord** mag je dóórgaan als:",
        options: ["Eerst gestopt + voorrang verleend, dan vrij is","Geen verkeer zichtbaar","Achter de auto rijden","Doortrappen om vaart te houden"],
        answer: 0,
        wrongHints: [null, "Bijna — moet eerst stoppen.", "Niet — STOP-bord vereist altijd stoppen.", "Niet — gevaarlijk."],
        uitlegPad: {
          stappen: [{ titel: "STOP = altijd eerst stilstand", tekst: "**STOP-bord**: **ALTIJD volledig stilstaan** (wielen niet bewegen) + voorrang verlenen aan iedereen + dan pas doorgaan ALS het veilig + vrij is. Boete bij niet-stoppen: ~€280." }],
          niveaus: { basis: "Eerst stop dan voorrang dan vrij — A.", simpeler: "STOP = volledige stop + check = A.", nogSimpeler: "Stop = A." },
        },
      },
      {
        q: "Welke fiets-handeling is **verboden** in NL?",
        options: ["Telefoon vasthouden tijdens fietsen","Met een hand sturen","Helm dragen","Lichten aan"],
        answer: 0,
        wrongHints: [null, "Niet — wel onhandig maar niet verboden.", "Niet — wel aanbevolen.", "Niet — wel aanbevolen."],
        uitlegPad: {
          stappen: [{ titel: "Telefoon-verbod sinds 2019", tekst: "**Sinds 1 juli 2019**: telefoon vasthouden tijdens fietsen verboden. Hands-free via oortje/houder mag wel. **Boete €100**." }],
          niveaus: { basis: "Telefoon vasthouden — A.", simpeler: "2019: telefoon-verbod fiets = A.", nogSimpeler: "Telefoon = A." },
        },
      },
      {
        q: "Gelijkwaardige kruising zonder borden — wie heeft voorrang?",
        options: ["Verkeer van rechts","Verkeer van links","Hardrijders","Niemand"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet relevant.", "Niet — er IS regel."],
        uitlegPad: {
          stappen: [{ titel: "Rechts gaat voor", tekst: "Zonder borden, zonder stoplicht, zonder haaientanden: **rechts heeft voorrang**. Internationaal in NL/EU." }],
          niveaus: { basis: "Rechts — A.", simpeler: "Zonder borden = rechts voor = A.", nogSimpeler: "Rechts = A." },
        },
      },
      {
        q: "Een **vrachtauto draait rechtsaf** op kruising en jij staat naast hem op fiets — wat doe je?",
        options: ["Wachten tot vrachtauto klaar is","Snel doorrijden","Roepen","Eerder afslaan dan vrachtauto"],
        answer: 0,
        wrongHints: [null, "Niet — extreem gevaarlijk (dode hoek).", "Niet — geluid niet altijd gehoord.", "Niet — kan ongeluk veroorzaken."],
        uitlegPad: {
          stappen: [{ titel: "NOOIT naast rechtsafslaande vrachtauto", tekst: "Bij vrachtauto die rechtsafslaat sta JE in **dode hoek**. Chauffeur ziet je NIET. Bij draaibeweging kun je onder wielen komen. **ALTIJD wachten** tot vrachtauto helemaal weg is. Jaarlijks 5-10 doden in NL door dit." }],
          theorie: "Cito-VVN-favoriet: dode-hoek-vraag komt elk examen voor.",
          niveaus: { basis: "Wachten — A.", simpeler: "Vrachtauto rechtsaf = JIJ wachten = A.", nogSimpeler: "Wachten = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const vvnVerkeersexamenPo = {
  id: "vvn-verkeersexamen-po",
  title: "VVN Verkeersexamen (groep 7-8)",
  emoji: "🚦",
  level: "groep7-8",
  subject: "wereldorientatie",
  referentieNiveau: "po-1F",
  sloThema: "Verkeer + verkeersveiligheid — VVN Praktisch Verkeersexamen",
  prerequisites: [
    { id: "tabellen-grafieken", title: "Tabellen + grafieken", niveau: "po-1F" },
  ],
  intro:
    "Slagen voor het VVN-verkeersexamen groep 7-8. Verkeersborden + voorrangsregels + veilig fietsen + gevaar herkennen. Past bij officieel Veilig Verkeer Nederland-examen (april). 5 stappen × ~5 vragen. ~15 min.",
  triggerKeywords: [
    "verkeersexamen", "VVN", "Veilig Verkeer", "verkeer",
    "verkeersbord", "verkeersborden", "voorrang",
    "fietsen", "fiets", "fietspad", "fietshelm",
    "dode hoek", "vrachtauto", "stoplicht",
    "zebrapad", "voetganger", "haaientanden",
    "stop-bord", "verboden",
    "e-bike", "speed-pedelec",
  ],
  chapters,
  steps,
};

export default vvnVerkeersexamenPo;
