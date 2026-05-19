// Leerpad: Zenuwstelsel + hormonen — HAVO/VWO Biologie
// Eindexamen-CSE-stof. Regulatie-systemen.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  zenuw: "#ef6c00",
  hormoon: "#ab47bc",
  bloed: "#c62828",
  rust: "#1565c0",
  actie: "#f57f17",
};

const stepEmojis = ["🧠", "⚡", "💊", "🔄", "🏆"];

const chapters = [
  { letter: "A", title: "Zenuwstelsel — bouw", emoji: "🧠", from: 0, to: 0 },
  { letter: "B", title: "Prikkel + reflex", emoji: "⚡", from: 1, to: 1 },
  { letter: "C", title: "Hormonen", emoji: "💊", from: 2, to: 2 },
  { letter: "D", title: "Homeostase", emoji: "🔄", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Zenuwstelsel — bouw ───────────────────────────────
  {
    title: "Zenuwstelsel — bouw + indeling",
    explanation:
      "Het **zenuwstelsel** stuurt het lichaam aan via snelle elektrische signalen. Centrale regulatie-systeem.\n\n**Twee hoofddelen**:\n\n**1. Centrale zenuwstelsel (CZS)**:\n• **Hersenen**: grote/kleine hersenen, hersenstam, tussenhersenen.\n• **Ruggenmerg**: door wervelkolom, ~45 cm, 31 zenuw-paren erin/uit.\n\n**2. Perifere zenuwstelsel (PZS)**:\n• Alle zenuwen buiten CZS.\n• **Spinale zenuwen**: 31 paren (uit ruggenmerg).\n• **Hersenzenuwen**: 12 paren (direct uit hersenstam, bv. nervus opticus → oog).\n\n**Hersengebieden**:\n• **Grote hersenen (cerebrum)**: bewust handelen, denken, geheugen, taal, zintuigen, motoriek. Verdeeld in linker + rechter halft. Schors heeft area's per functie (motorisch, sensorisch, visueel, auditief, frontaal).\n• **Kleine hersenen (cerebellum)**: coördinatie + evenwicht + fijne motoriek.\n• **Hersenstam**: ademhaling, hartslag, bloeddruk, reflexen (slikken, niezen, hoesten). Levensbelangrijk.\n• **Tussenhersenen** (thalamus + hypothalamus): doorgeven prikkels + hormonen via hypofyse.\n\n**Twee taakgebieden**:\n• **Animale (somatische) zenuwstelsel**: bewust, gestuurd. Skeletspieren bewegen. Voorbeeld: arm optillen.\n• **Autonome (vegetatieve) zenuwstelsel**: onbewust. Stuurt organen.\n  - **Sympathisch**: 'vechten/vluchten' — hartslag↑, ademhaling↑, pupillen wijd, vertering↓. Stress-reactie.\n  - **Parasympathisch**: 'rust + herstel' — hartslag↓, ademhaling rustig, vertering↑. Bij ontspannen / slapen.\n\n**Zenuwcel (neuron)** opbouw:\n• **Cellichaam** met celkern.\n• **Dendrieten**: vele uitlopers die prikkels ontvangen.\n• **Axon**: lange uitloper die prikkel verstuurt (kan 1m+ — bv. tot grote teen).\n• **Myelineschede** (vethulsje rond axon): isolatie + snelheid.\n• **Knopen van Ranvier**: onderbrekingen myeline — sprong-geleiding versnelt signaal.\n• **Synapsen**: contactpunten tussen neuronen of neuron-spier (eindknopjes).\n\n**Soorten neuronen**:\n• **Sensorisch (gevoels-)neuron**: zintuig → CZS.\n• **Motorisch (beweger-)neuron**: CZS → spier of klier.\n• **Schakelneuron** (interneuron): in CZS, verbindt twee neuronen.\n\n**Witte vs grijze stof**:\n• **Grijze stof**: cellichamen + dendrieten. In hersenschors + binnenste ruggenmerg.\n• **Witte stof**: axonen met myeline (wit door vet). Binnenste hersenen + buitenste ruggenmerg.",
    checks: [
      {
        q: "Welke twee delen vormen het **centrale zenuwstelsel**?",
        options: ["Hersenen + ruggenmerg","Hersenen + zintuigen","Ruggenmerg + spieren","Zenuwen + spieren"],
        answer: 0,
        wrongHints: [null, "Zintuigen zijn perifeer.", "Spieren niet — die zijn doel.", "Niet — zijn perifeer + effector."],
        uitlegPad: {
          stappen: [{ titel: "CZS = brein + ruggenmerg", tekst: "**Centrale zenuwstelsel** = hersenen + ruggenmerg. Beschermd door schedel + wervelkolom + hersenvliezen + hersenvocht. Alle andere zenuwen heten perifeer." }],
          niveaus: { basis: "Hersenen + ruggenmerg. A.", simpeler: "CZS = brein + ruggenmerg = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk hersendeel regelt **coördinatie + evenwicht**?",
        options: ["Kleine hersenen (cerebellum)","Grote hersenen","Hersenstam","Tussenhersenen"],
        answer: 0,
        wrongHints: [null, "Niet — bewuste handelingen.", "Niet — vitale functies.", "Niet — schakeling + hormonen."],
        uitlegPad: {
          stappen: [{ titel: "Cerebellum = balans", tekst: "**Kleine hersenen (cerebellum)**: coördinatie + evenwicht + fijne motoriek. Beschadiging → wankel lopen + tremor. Bv: alcohol-effect zit hier deels." }],
          theorie: "Cito-favoriet: 'iemand kan niet meer rechtuit lopen' → kleine hersenen.",
          niveaus: { basis: "Kleine hersenen. A.", simpeler: "Coördinatie = cerebellum = A.", nogSimpeler: "Klein = A." },
        },
      },
      {
        q: "Welke zenuwcel-uitloper **verstuurt** prikkel?",
        options: ["Axon","Dendriet","Myeline","Synaps"],
        answer: 0,
        wrongHints: [null, "Niet — dendrieten ontvangen.", "Niet — dat is isolatie.", "Niet — dat is contactpunt."],
        uitlegPad: {
          stappen: [{ titel: "Axon = uitgaande", tekst: "**Axon** = lange uitloper waarmee prikkel weg-gaat. Per neuron 1 axon (kan vertakken). **Dendrieten** ontvangen (er zijn er vele)." }],
          theorie: "Memo: 'A' van Axon = Afgeven. 'D' van Dendriet = Doorkrijgen.",
          niveaus: { basis: "Axon. A.", simpeler: "Verstuurt = axon = A.", nogSimpeler: "Axon = A." },
        },
      },
      {
        q: "Welke autonome tak triggert bij **stress / vechten-vluchten**?",
        options: ["Sympathisch","Parasympathisch","Animaal","Sensorisch"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — rust.", "Niet — bewuste motoriek.", "Niet — gevoels-input."],
        uitlegPad: {
          stappen: [{ titel: "Sympathisch = actie", tekst: "**Sympathisch zenuwstelsel** activeert bij stress: hartslag↑, ademhaling↑, pupillen wijd, bloed naar spieren, vertering↓. Bereidt voor op vechten of vluchten. Adrenaline ondersteunt." }],
          theorie: "Memo: 'sym' van Sympathisch = Snel + Stress. 'Para' = Pauze (rust).",
          niveaus: { basis: "Sympathisch. A.", simpeler: "Vecht/vlucht = sympathisch = A.", nogSimpeler: "Sympathisch = A." },
        },
      },
      {
        q: "Welk neuron stuurt prikkel **van CZS naar spier**?",
        options: ["Motorisch (motorneuron)","Sensorisch","Schakelneuron","Bipolair"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld richting.", "Niet — binnen CZS.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Motor = beweging", tekst: "**Motorisch neuron** = van CZS naar effector (spier of klier). Veroorzaakt beweging of secretie. Tegenover: **sensorisch** (zintuig → CZS). Daartussen vaak: **schakelneuron** binnen CZS." }],
          niveaus: { basis: "Motorisch. A.", simpeler: "Naar spier = motor = A.", nogSimpeler: "Motor = A." },
        },
      },
    ],
  },

  // ─── B. Prikkel + reflex ──────────────────────────────────
  {
    title: "Prikkel + actiepotentiaal + reflex",
    explanation:
      "Hoe gaat een **prikkel** door een zenuw? Via een elektrochemisch proces.\n\n**Rust-toestand**:\n• Binnen-axon = negatief geladen (~−70 mV).\n• Buiten-axon = positief geladen.\n• Verschil = **rustpotentiaal** (−70 mV).\n• Verschil onderhouden door Na⁺/K⁺-pomp (energie kost ATP).\n\n**Actiepotentiaal** (prikkel-puls):\n• Drempelwaarde overschreden → membraan opent **Na⁺-kanalen**.\n• Na⁺ stroomt naar binnen → spanning klimt naar +40 mV (**depolarisatie**).\n• Na⁺-kanalen sluiten, K⁺-kanalen open → K⁺ stroomt naar buiten → spanning daalt (**repolarisatie**).\n• Spanning daalt even onder −70 mV (**hyperpolarisatie**) → kort onbruikbaar (refractair).\n• Na⁺/K⁺-pomp herstelt evenwicht.\n• Hele puls duurt ~2 ms.\n\n**Voortplanting prikkel**:\n• Actiepotentiaal triggert volgende stuk axon.\n• Bij myeline-omhulde axonen: **sprong-geleiding** tussen knopen van Ranvier (veel sneller, tot 120 m/s vs 1 m/s zonder myeline).\n\n**Synaps** (kloof tussen axon en volgende cel):\n• Actiepotentiaal komt aan eind axon → **neurotransmitter** vrijgegeven (acetylcholine, dopamine, serotonine, noradrenaline, GABA, glutamaat).\n• Diffundeert door synaptische spleet → bindt receptor op volgende cel.\n• Activatie kan **exciterend** (volgende cel ook prikkel) of **inhiberend** (remming) zijn.\n• Neurotransmitter wordt weer afgebroken / opgenomen.\n\n**Drempelwaarde + alles-of-niets**:\n• Prikkel sterk genoeg → volledige actiepotentiaal. Zwakker → niks.\n• Sterkte prikkel = **frequentie** (hoeveel pulsen/sec), niet amplitude.\n• 'Alles-of-niets-wet'.\n\n**Reflexen**:\n• **Aangeboren** reflex: zonder leren. Bv: pupil samentrekken bij licht, kniepees-reflex, terugtrekken hand bij pijn.\n• **Aangeleerde** (geconditioneerde) reflex: na ervaring. Bv: water in mond bij geur lekkere maaltijd (Pavlov-honden).\n\n**Reflexboog** (snelle route, geen bewuste hersen-tussenkomst):\n1. **Receptor** (huid, oog, etc.) vangt prikkel op.\n2. **Sensorisch neuron** → ruggenmerg.\n3. **Schakelneuron** in ruggenmerg.\n4. **Motorneuron** → spier (effector).\n5. Spier trekt samen → terugtrekken.\n6. Pas DAARNA bewustzijn ('au!') — hersenen krijgen kopie via opwaartse banen.\n\n**Voorbeeld kniepees-reflex**:\n• Tikje op kniepees → onderbeen schiet vooruit.\n• Mono-synaps-reflex: alleen sensor + motor neuron, geen schakelneuron. Snelste mogelijke reflex.\n\n**Ziektes zenuwstelsel**:\n• **MS** (Multiple Sclerose): myeline wordt afgebroken → geleidingsfouten.\n• **ALS**: motorneuronen sterven af → verlamming.\n• **Parkinson**: dopamine-producerende cellen in middenhersenen sterven af → tremor + stijfheid.\n• **Alzheimer**: hersencellen sterven af, met name in hippocampus → geheugenverlies.",
    checks: [
      {
        q: "Wat is de **rustpotentiaal** van een axon?",
        options: ["~−70 mV","+40 mV","0 mV","100 mV"],
        answer: 0,
        wrongHints: [null, "Niet — dat is piek actiepotentiaal.", "Niet — wel verschil.", "Niet realistisch."],
        uitlegPad: {
          stappen: [{ titel: "−70 mV in rust", tekst: "**Rustpotentiaal** ≈ **−70 mV**. Binnen-cel meer negatief geladen dan buiten (door K⁺ binnen + Na⁺ buiten + grote negatieve eiwitten binnen). Na⁺/K⁺-pomp onderhoudt dit met ATP." }],
          niveaus: { basis: "−70 mV. A.", simpeler: "Rust = −70 mV = A.", nogSimpeler: "−70 = A." },
        },
      },
      {
        q: "Wat gebeurt tijdens **depolarisatie**?",
        options: ["Na⁺ stroomt cel in, spanning naar +","K⁺ stroomt eruit","Cel rust","Cel deelt"],
        answer: 0,
        wrongHints: [null, "Niet — dat is repolarisatie.", "Niet — wel actief.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Na⁺ binnenstromen", tekst: "**Depolarisatie**: drempel overschreden → Na⁺-kanalen openen → Na⁺ stroomt naar binnen (sterke gradient). Spanning klimt van −70 naar +40 mV. Begint actiepotentiaal." }],
          theorie: "Cyclus: rust (−70) → depolarisatie (+40) → repolarisatie (−70) → hyperpolarisatie (−80) → rust.",
          niveaus: { basis: "Na⁺ in, + spanning. A.", simpeler: "Depolarisatie = Na⁺ in = A.", nogSimpeler: "Na⁺ = A." },
        },
      },
      {
        q: "Welke stof draagt prikkel **van neuron naar neuron** via synaps?",
        options: ["Neurotransmitter","Hormoon","Bloed","Elektriciteit direct"],
        answer: 0,
        wrongHints: [null, "Niet — werkt via bloed, niet synaps.", "Niet — andere route.", "Niet — gap-spleet, chemisch."],
        uitlegPad: {
          stappen: [{ titel: "Chemische brug", tekst: "**Neurotransmitter** = chemische stof in synaptische blaasjes. Bij actiepotentiaal vrijgegeven, diffundeert door synapsspleet, bindt receptor op volgende cel. Voorbeelden: acetylcholine, dopamine, serotonine, GABA, glutamaat." }],
          theorie: "Drugs werken vaak via neurotransmitters: SSRI blokkeert serotonine-heropname (anti-depressivum), nicotine bindt acetylcholine-receptor.",
          niveaus: { basis: "Neurotransmitter. A.", simpeler: "Synaps = neurotransmitter = A.", nogSimpeler: "NT = A." },
        },
      },
      {
        q: "**Reflexboog** loopt via:",
        options: ["Sensor → ruggenmerg → motorneuron → spier","Sensor → grote hersenen → spier","Direct sensor → spier","Hormoon → spier"],
        answer: 0,
        wrongHints: [null, "Niet — te traag, reflex omzeilt hersenen.", "Niet — wel via ruggenmerg.", "Niet — verkeerd systeem."],
        uitlegPad: {
          stappen: [{ titel: "Snel = via ruggenmerg", tekst: "**Reflexboog**: receptor → sensorisch neuron → ruggenmerg (eventueel schakelneuron) → motorneuron → spier. **Omzeilt** grote hersenen. Bewustzijn ('au!') komt later via opwaartse banen." }],
          theorie: "Cito-favoriet: 'waarom is reflex zo snel?' Antwoord: omzeilt grote hersenen.",
          niveaus: { basis: "Via ruggenmerg. A.", simpeler: "Reflex = ruggenmerg = A.", nogSimpeler: "Ruggenmerg = A." },
        },
      },
      {
        q: "Bij **MS** is welk deel beschadigd?",
        options: ["Myelineschede","Cellichaam","Synaps","Dendriet"],
        answer: 0,
        wrongHints: [null, "Niet primair — myeline eerst.", "Niet primair.", "Niet primair."],
        uitlegPad: {
          stappen: [{ titel: "MS = myeline aangetast", tekst: "**Multiple Sclerose**: auto-immuun-aandoening waarbij eigen afweersysteem myeline rond axonen afbreekt. Gevolgen: tragere geleiding, fouten, klachten als spierzwakte, vermoeidheid, visusproblemen. Cito-eindexamen-classic." }],
          theorie: "Onderscheid: MS = myeline. ALS = motorneuron-cellichaam. Parkinson = dopamine-neuronen. Alzheimer = hippocampus-cellen.",
          niveaus: { basis: "Myelineschede. A.", simpeler: "MS = myeline = A.", nogSimpeler: "Myeline = A." },
        },
      },
    ],
  },

  // ─── C. Hormonen ──────────────────────────────────────────
  {
    title: "Hormonen — chemische berichten",
    explanation:
      "**Hormonen** = chemische boodschappers van klieren, via bloed naar doelweefsels. Langzamer dan zenuwstelsel maar werking duurt langer.\n\n**Vergelijking**:\n| Eigenschap | Zenuwstelsel | Hormoonstelsel |\n|---|---|---|\n| Snelheid | ms | sec tot dagen |\n| Werking | kort | lang |\n| Transport | axon | bloed |\n| Doel | specifieke cellen | weefsels met receptor |\n| Voorbeeld | spier samentrekken | groei stimuleren |\n\n**Belangrijkste klieren** (endocrien stelsel):\n\n**1. Hypofyse** ('meester-klier'):\n• Aan onderkant hersenen.\n• Stuurt vele andere klieren aan via 'opdracht-hormonen'.\n• Hormonen: groeihormoon (GH), TSH (→ schildklier), ACTH (→ bijnier), FSH/LH (→ geslachtsklieren), prolactine, ADH (vasopressine, waterhuishouding), oxytocine.\n\n**2. Hypothalamus**:\n• Boven hypofyse.\n• Stuurt hypofyse aan.\n• Voelt temperatuur, dorst, honger, vermoeidheid.\n\n**3. Schildklier**:\n• In hals.\n• Hormoon: **thyroxine (T4) + T3** → stofwisselings-snelheid (energieverbruik, hartslag, temperatuur).\n• Te weinig (hypothyreoïdie): traag, koud, gewichtstoename.\n• Te veel (hyperthyreoïdie): rusteloos, warm, gewichtsverlies, hartkloppingen.\n\n**4. Bijnier (boven nier)**:\n• **Bijnierschors**: **cortisol** (stress-hormoon, lange duur, verhoogt bloedsuiker, demping ontsteking) + aldosteron (zout-water-balans).\n• **Bijniermerg**: **adrenaline + noradrenaline** (acute stress, hartslag↑, bloedsuiker↑).\n\n**5. Alvleesklier (pancreas)**:\n• Eilandjes van Langerhans.\n• **β-cellen**: **insuline** → bloedsuiker omlaag (bij hoge suiker, na maaltijd).\n• **α-cellen**: **glucagon** → bloedsuiker omhoog (bij lage suiker, tussen maaltijden).\n• Diabetes type 1: β-cellen vernietigd, geen insuline. Type 2: cellen reageren slechter (insulineresistentie).\n\n**6. Geslachtsklieren**:\n• **Testes** (mannelijk): **testosteron** → secundaire geslachtskenmerken + spiermassa + sperma.\n• **Eierstokken** (vrouwelijk): **oestrogeen + progesteron** → menstruatiecyclus + zwangerschap.\n\n**7. Pijnappelklier (epifyse)**:\n• Diep in hersenen.\n• **Melatonine** → slaap/waak-ritme (circadiaan). Hoog 's nachts, laag overdag.\n\n**Receptoren**:\n• Hormoon werkt alleen op cellen met de juiste receptor.\n• Sommige hormonen (steroïden) gaan cel binnen → receptor binnen.\n• Andere (eiwit-hormonen) blijven buiten → receptor op membraan, signaal via second messengers.\n\n**Werking**:\n• Klier produceert hormoon → bloed → doelcel → receptor → effect.\n• Vaak in **golven** of cyclus (menstruatie, dag/nacht).\n• Vaak via **negatieve terugkoppeling** gereguleerd (zie homeostase-stap).",
    checks: [
      {
        q: "Welke klier is de **'meester-klier'**?",
        options: ["Hypofyse","Schildklier","Alvleesklier","Bijnier"],
        answer: 0,
        wrongHints: [null, "Niet — stuurt energie.", "Niet — bloedsuiker.", "Niet — stress."],
        uitlegPad: {
          stappen: [{ titel: "Hypofyse stuurt rest", tekst: "**Hypofyse** ('meester-klier') stuurt andere klieren aan via opdracht-hormonen: TSH → schildklier, ACTH → bijnier, FSH/LH → geslachtsklieren. Wordt zelf gestuurd door hypothalamus." }],
          niveaus: { basis: "Hypofyse. A.", simpeler: "Meester = hypofyse = A.", nogSimpeler: "Hypofyse = A." },
        },
      },
      {
        q: "Welk hormoon **verlaagt bloedsuiker**?",
        options: ["Insuline","Glucagon","Adrenaline","Cortisol"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — verhoogt.", "Niet — verhoogt acuut.", "Niet — verhoogt langzaam."],
        uitlegPad: {
          stappen: [{ titel: "Insuline = naar omlaag", tekst: "**Insuline** (alvleesklier β-cellen) wordt vrijgegeven bij hoge bloedsuiker (na eten). Zorgt dat cellen glucose opnemen + lever opslaat als glycogeen. Bloedsuiker daalt. Tegenovergesteld: glucagon (α-cellen, bij lage suiker)." }],
          theorie: "Memo: 'In-suline' brengt glucose IN de cel. 'Gluc-Agon' geeft glucose Af aan bloed.",
          niveaus: { basis: "Insuline. A.", simpeler: "Suiker omlaag = insuline = A.", nogSimpeler: "Insuline = A." },
        },
      },
      {
        q: "Welk hormoon stuurt **stofwisseling**?",
        options: ["Thyroxine (T4) van schildklier","Insuline","Oestrogeen","Adrenaline"],
        answer: 0,
        wrongHints: [null, "Niet — alleen bloedsuiker.", "Niet — geslachtskenmerken.", "Niet — acute stress."],
        uitlegPad: {
          stappen: [{ titel: "Schildklier = energiethermostaat", tekst: "**Thyroxine (T4)** + actieve vorm T3 van schildklier. Stuurt **stofwisseling-snelheid** (basaal metabolisme). Te weinig → traag, koud, dik. Te veel → rusteloos, warm, mager." }],
          theorie: "Schildklier gebruikt jodium om T4 te maken. Daarom zout met jodium (vanaf 1940s NL).",
          niveaus: { basis: "Thyroxine. A.", simpeler: "Stofwisseling = thyroxine = A.", nogSimpeler: "Thyroxine = A." },
        },
      },
      {
        q: "Welke klier produceert **adrenaline** bij acute stress?",
        options: ["Bijniermerg","Bijnierschors","Schildklier","Hypofyse"],
        answer: 0,
        wrongHints: [null, "Niet — cortisol (langzamer).", "Niet — thyroxine.", "Niet — stuurt aan, niet eindproduct."],
        uitlegPad: {
          stappen: [{ titel: "Adrenaline = uit merg", tekst: "**Bijniermerg** (binnenste deel bijnier): adrenaline + noradrenaline bij acute stress (vechten/vluchten). Werkt seconden. **Bijnierschors** (buitenste): cortisol langzamer + langer." }],
          niveaus: { basis: "Bijniermerg. A.", simpeler: "Adrenaline = merg = A.", nogSimpeler: "Merg = A." },
        },
      },
      {
        q: "Bij **diabetes type 1** is welk hormoon-tekort?",
        options: ["Insuline","Glucagon","Cortisol","Thyroxine"],
        answer: 0,
        wrongHints: [null, "Niet — werkt andersom.", "Niet relevant.", "Niet — andere aandoening."],
        uitlegPad: {
          stappen: [{ titel: "Type 1 = β-cellen kapot", tekst: "**Diabetes type 1**: eigen afweersysteem vernietigt β-cellen alvleesklier → geen insuline-productie meer. Patiënt moet dagelijks insuline spuiten. Vaak vanaf jonge leeftijd. **Type 2**: cellen reageren slechter op insuline (resistentie) — vaak ouder + leefstijl-gerelateerd." }],
          niveaus: { basis: "Insuline. A.", simpeler: "DM1 = insuline-tekort = A.", nogSimpeler: "Insuline = A." },
        },
      },
    ],
  },

  // ─── D. Homeostase ────────────────────────────────────────
  {
    title: "Homeostase — interne balans",
    explanation:
      "**Homeostase** = handhaven van stabiele interne omstandigheden in het lichaam (temperatuur, bloedsuiker, pH, water, zuurstof, etc.) ondanks externe veranderingen.\n\nWordt geregeld via samenwerking zenuwstelsel + hormonen.\n\n**Negatieve terugkoppeling** (meest gebruikt):\n• Afwijking van setpoint wordt waargenomen.\n• Reactie corrigeert in tegenovergestelde richting.\n• Net als thermostaat thuis: te koud → kachel aan → temperatuur stijgt → kachel uit.\n• Stabiliseert.\n\n**Positieve terugkoppeling** (zeldzamer):\n• Afwijking versterkt zichzelf tot eind-doel.\n• Voorbeelden: weeën bij bevalling (oxytocine), bloedstolling (cascade).\n• Doorgaans korte processen.\n\n**Voorbeelden homeostase**:\n\n**1. Lichaamstemperatuur (~37°C)**:\n• Sensor: hypothalamus + huid.\n• Te hoog (koorts, hitte):\n  - Bloedvaten huid wijder (afkoeling).\n  - Zweten (verdamping).\n  - Minder spier-activiteit.\n• Te laag (kou):\n  - Bloedvaten huid nauwer (warmte vasthouden).\n  - Rillen (spier-warmte).\n  - Kippenvel + haren rechtop (klein effect bij mensen).\n  - Schildklier omhoog (langzaam: meer stofwisseling).\n\n**2. Bloedsuikerspiegel (~5 mmol/L)**:\n• Hoog (na eten):\n  - Insuline (β-cellen) → cellen nemen glucose op → lever maakt glycogeen.\n• Laag (tussen maaltijden, hongerig):\n  - Glucagon (α-cellen) → lever breekt glycogeen af → glucose vrijkomt.\n  - Bij langere honger: adrenaline + cortisol helpen ook.\n\n**3. Waterhuishouding (osmoregulatie)**:\n• Sensor: hypothalamus + nieren.\n• Tekort water: ADH (anti-diuretisch hormoon, vasopressine) van hypofyse → nieren reabsorberen meer water → minder/geconcentreerder plassen.\n• Teveel water: minder ADH → meer plassen.\n\n**4. Bloeddruk**:\n• Sensors in slagaderen (baroreceptoren).\n• Te hoog → parasympathisch dempt hartslag, bloedvaten wijder.\n• Te laag → sympathisch verhoogt hartslag, bloedvaten nauwer + ADH + aldosteron.\n\n**5. Zuur-base-balans (pH bloed ~7,4)**:\n• Sensors in hersenstam.\n• Te zuur (veel CO₂ in bloed): ademhaling sneller → CO₂ uitademen.\n• Te basisch: ademhaling langzamer.\n\n**6. Calcium-spiegel**:\n• Bijschildklier: parathyroïdhormoon (PTH) → calcium uit bot mobiliseren.\n• Schildklier: calcitonine → calcium opslaan in bot.\n\n**Stress-respons**:\n• Acuut: sympathisch + adrenaline (seconden-minuten).\n• Aanhoudend: hypofyse → ACTH → bijnierschors → cortisol (uren-dagen).\n• Cortisol: bloedsuiker omhoog, ontstekingen onderdrukt, immuniteit gedempt. Bij chronische stress schadelijk.\n\n**Circadiaan ritme (24-uurs)**:\n• Pijnappelklier produceert melatonine 's nachts → slaperigheid.\n• Cortisol piekt 's ochtends → wakker worden.\n• Verstoord door licht-pollutie (blauw licht 's avonds, schermtijd).",
    checks: [
      {
        q: "Wat is **homeostase**?",
        options: ["Stabiele interne omstandigheden handhaven","Hormonen produceren","Hersenactiviteit","Snel groeien"],
        answer: 0,
        wrongHints: [null, "Onderdeel ervan, niet definitie.", "Niet — alleen onderdeel.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Inwendige balans", tekst: "**Homeostase** = stabiele interne omstandigheden (T, glucose, pH, water, etc.) ondanks externe verandering. Continu actief proces via sensors → CZS/hormonen → effectoren." }],
          niveaus: { basis: "Stabiel intern. A.", simpeler: "Homeostase = balans = A.", nogSimpeler: "Balans = A." },
        },
      },
      {
        q: "Hoe heet het mechanisme **te warm → zweten → afkoeling**?",
        options: ["Negatieve terugkoppeling","Positieve terugkoppeling","Reflex","Pavlov-conditie"],
        answer: 0,
        wrongHints: [null, "Niet — versterkt juist niet, corrigeert.", "Reflex is iets anders.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Negatief = tegen-bewegend", tekst: "**Negatieve terugkoppeling**: afwijking → tegenmaatregel → terug naar setpoint. Te warm → zweten → koeler. Te koud → rillen → warmer. Werkt zoals thermostaat: stabiliseert systeem." }],
          theorie: "Cito-favoriet: 'beschrijf negatieve terugkoppeling bij lichaamstemperatuur' — bovenstaande regel.",
          niveaus: { basis: "Negatieve terugkoppeling. A.", simpeler: "Negatief = corrigeert = A.", nogSimpeler: "Negatief = A." },
        },
      },
      {
        q: "Welk hormoon **bewaart water** in nieren?",
        options: ["ADH (vasopressine)","Insuline","Adrenaline","Oestrogeen"],
        answer: 0,
        wrongHints: [null, "Niet — bloedsuiker.", "Niet — acute stress.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "ADH = anti-diuretisch", tekst: "**ADH** (anti-diuretisch hormoon = vasopressine, hypofyse). 'Anti-diuretisch' = tegen plassen. Zorgt dat nieren water terugresorberen → minder + geconcentreerder urine. Bij dorst hoge ADH. Alcohol blokkeert ADH → meer plassen + uitdroging." }],
          niveaus: { basis: "ADH. A.", simpeler: "Water vasthouden = ADH = A.", nogSimpeler: "ADH = A." },
        },
      },
      {
        q: "Hoe reageert lichaam bij **lage bloedsuiker**?",
        options: ["Glucagon → lever breekt glycogeen af","Insuline","Geen actie","Slapen"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — verlaagt suiker.", "Wel actie.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Glucagon mobiliseert", tekst: "**Lage bloedsuiker** → α-cellen alvleesklier geven **glucagon** → lever breekt **glycogeen** (opslag-glucose) af → glucose vrij in bloed → suiker normaal. Bij langere honger ook: adrenaline + cortisol." }],
          niveaus: { basis: "Glucagon. A.", simpeler: "Laag suiker = glucagon = A.", nogSimpeler: "Glucagon = A." },
        },
      },
      {
        q: "Welk hormoon piekt **'s ochtends** in circadiaan ritme?",
        options: ["Cortisol","Melatonine","Insuline","Thyroxine"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — 's nachts.", "Niet circadiaan-gestuurd.", "Niet circadiaan-piek."],
        uitlegPad: {
          stappen: [{ titel: "Cortisol = ochtend-wekker", tekst: "**Cortisol** piekt rond 6-8 uur 's ochtends → helpt wakker worden + bloedsuiker omhoog voor energie. **Melatonine** doet tegenovergestelde: piekt 's nachts → slaperig. Beide aangestuurd door hypothalamus + pijnappelklier." }],
          theorie: "Verstoord ritme bij schermtijd 's avonds (blauw licht remt melatonine) → slecht slapen.",
          niveaus: { basis: "Cortisol. A.", simpeler: "'s Ochtends = cortisol = A.", nogSimpeler: "Cortisol = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — regulatie-systemen mix",
    explanation:
      "Mix van zenuwstelsel + hormonen + reflex + homeostase.\n\nVeel succes!",
    checks: [
      {
        q: "Iemand schrikt — hartslag schiet omhoog binnen seconde. Welk **systeem + stof**?",
        options: ["Sympathisch zenuwstelsel + adrenaline","Parasympathisch + insuline","Hypofyse + groeihormoon","Schildklier + thyroxine"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — rust + suiker.", "Niet — werkt veel trager.", "Niet — stofwisseling."],
        uitlegPad: {
          stappen: [{ titel: "Acute schrik = vecht-vlucht", tekst: "Schrik → sympathisch zenuwstelsel direct actief (seconden) + bijniermerg geeft adrenaline (versterkt sympathisch effect). Hartslag↑, ademhaling↑, bloedsuiker↑." }],
          niveaus: { basis: "Sympathisch + adrenaline. A.", simpeler: "Schrik = sympathisch+adrenaline = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Een prikkel gaat **30 m/s** door een zenuw. Heeft die zenuw waarschijnlijk **myeline**?",
        options: ["Ja — zonder myeline veel trager","Nee — myeline vertraagt","Geen verband","Onmogelijk te zeggen"],
        answer: 0,
        wrongHints: [null, "Niet — versnelt juist.", "Wel verband.", "Wel mogelijk in te schatten."],
        uitlegPad: {
          stappen: [{ titel: "Myeline = sprong-geleiding", tekst: "Zonder myeline: 1-5 m/s. Met myeline: tot 120 m/s via sprong-geleiding tussen knopen van Ranvier. **30 m/s** is duidelijk gemyeliniseerd." }],
          niveaus: { basis: "Ja. A.", simpeler: "30 m/s = met myeline = A.", nogSimpeler: "Ja = A." },
        },
      },
      {
        q: "Iemand heeft constant koud + voelt traag + komt aan. Welke klier?",
        options: ["Schildklier (te weinig thyroxine)","Bijnier","Hypofyse","Pancreas"],
        answer: 0,
        wrongHints: [null, "Niet — andere symptomen.", "Wel indirect, maar bron is schildklier.", "Niet — bloedsuiker-symptomen."],
        uitlegPad: {
          stappen: [{ titel: "Hypothyreoïdie", tekst: "Symptomen passen bij **hypothyreoïdie** (te weinig schildklier-thyroxine): trage stofwisseling → koud, vermoeid, gewichtstoename, droge huid, depressief. Behandeling: synthetische T4 (levothyroxine) dagelijks." }],
          theorie: "Tegengesteld: hyperthyreoïdie = te veel = warm, rusteloos, mager, hartkloppingen.",
          niveaus: { basis: "Schildklier (te laag). A.", simpeler: "Koud+traag+aankomen = schildklier laag = A.", nogSimpeler: "Schildklier = A." },
        },
      },
      {
        q: "Welk type **terugkoppeling** is bevalling (weeën versterken zichzelf)?",
        options: ["Positief","Negatief","Reflex","Hormoonloos"],
        answer: 0,
        wrongHints: [null, "Niet — versterkt juist.", "Niet relevant.", "Wel hormonen (oxytocine)."],
        uitlegPad: {
          stappen: [{ titel: "Positief = versterking", tekst: "**Bevalling**: weeën rekken baarmoederhals → hypofyse geeft oxytocine → meer weeën → meer rek → meer oxytocine. **Positieve terugkoppeling**: versterkt zichzelf tot geboorte plaatsvindt. Daarna stopt cyclus." }],
          theorie: "Andere voorbeelden positieve terugkoppeling: bloedstolling (cascade), borstvoeding (prolactine), eisprong (LH-piek).",
          niveaus: { basis: "Positief. A.", simpeler: "Weeën versterken zelf = positief = A.", nogSimpeler: "Positief = A." },
        },
      },
      {
        q: "Verschil zenuw vs hormoon-werking:",
        options: ["Zenuw: snel + kort, hormoon: traag + lang","Zenuw: traag, hormoon: snel","Beide gelijk","Zenuwen niet betrokken bij regulatie"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — significant verschillend.", "Wel — animale + autonoom."],
        uitlegPad: {
          stappen: [{ titel: "Snel vs aanhoudend", tekst: "**Zenuwstelsel** = elektrische signalen, ms-snel, specifiek doelcel, korte werking. **Hormoonstelsel** = chemische stoffen in bloed, sec tot dagen, alle cellen met receptor, langere werking. Samenwerken voor regulatie." }],
          niveaus: { basis: "Zenuw snel+kort, hormoon traag+lang. A.", simpeler: "Zenuw: snel kort, hormoon: traag lang = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const zenuwstelselHormonenHavoVwo = {
  id: "zenuwstelsel-hormonen-havo-vwo",
  title: "Zenuwstelsel + hormonen (HAVO/VWO biologie)",
  emoji: "🧠",
  level: "havo4-5-vwo",
  subject: "biologie",
  referentieNiveau: "havo-vwo-CSE-biologie",
  sloThema: "Biologie HAVO/VWO — regulatie-systemen eindexamen-stof",
  prerequisites: [
    { id: "cel-biologie", title: "Cel-biologie", niveau: "klas3-4" },
    { id: "voortplanting-hormonen-biologie", title: "Voortplanting + hormonen", niveau: "klas3-4" },
    { id: "mens-biologie-vmbo", title: "Mens-biologie", niveau: "vmbo-gt" },
  ],
  intro:
    "Regulatie-systemen HAVO/VWO biologie eindexamen. Zenuwstelsel (CZS/PZS, autonoom/animaal, neuron-bouw), actiepotentiaal + synapsen + reflex, hormonen (hypofyse/schildklier/bijnier/alvleesklier), homeostase (temperatuur/glucose/water) + negatieve terugkoppeling. ~15-20 min.",
  triggerKeywords: [
    "zenuwstelsel", "centrale zenuwstelsel", "perifere zenuwstelsel",
    "neuron", "axon", "dendriet", "myeline", "Ranvier",
    "synaps", "neurotransmitter",
    "actiepotentiaal", "rustpotentiaal",
    "depolarisatie", "repolarisatie",
    "hersenen", "ruggenmerg",
    "grote hersenen", "kleine hersenen", "hersenstam",
    "sympathisch", "parasympathisch", "autonoom",
    "reflex", "reflexboog", "kniepees",
    "MS", "multiple sclerose", "ALS", "Parkinson", "Alzheimer",
    "hormoon", "hormonen", "endocrien",
    "hypofyse", "hypothalamus",
    "schildklier", "thyroxine",
    "bijnier", "adrenaline", "cortisol",
    "alvleesklier", "pancreas",
    "insuline", "glucagon",
    "diabetes",
    "testosteron", "oestrogeen",
    "melatonine", "circadiaan",
    "homeostase",
    "negatieve terugkoppeling", "positieve terugkoppeling",
    "ADH", "vasopressine",
    "lichaamstemperatuur",
    "bloedsuiker", "glucose-spiegel",
  ],
  chapters,
  steps,
};

export default zenuwstelselHormonenHavoVwo;
