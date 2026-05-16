// Leerpad: Europese Unie (groep 7-8 basisschool)
// 6 stappen × 3 checks = 18 vragen. Sluit aan bij maatschappij-examenstof
// (Commissie/Raad/Parlement) en wereldoriëntatie Doorstroomtoets.
// Stijl: kort, Cito-achtig, NL-context (buurlanden + euro).

const chapters = [
  { letter: "A", title: "Wat is de EU?", emoji: "🇪🇺", from: 0, to: 1 },
  { letter: "B", title: "EU-instellingen", emoji: "🏛️", from: 2, to: 3 },
  { letter: "C", title: "Euro & landen", emoji: "💶", from: 4, to: 5 },
];

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc EU: onthouden 27 lidstaten, 20 euro-landen, 12 sterren op vlag. Instellingen: Commissie initieert, Parlement controleert, Raad besluit.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const steps = [
  {
    title: "Stap 1 — Wat is de Europese Unie?",
    explanation: "De **Europese Unie (EU)** is een samenwerkingsverband van **27 Europese landen** (sinds Brexit in 2020). Doelen: vrede + handel + welvaart bevorderen.\n\n**Korte geschiedenis**:\n- 1951: oprichting voorganger (EGKS — kolen + staal) door 6 landen.\n- 1992: Verdrag van **Maastricht** → 'Europese Unie' geboren.\n- 2002: invoering **euro** als gemeenschappelijke munt.\n- 2004: grote uitbreiding met Oost-Europa (Polen, Tsjechië e.a.).\n- 2020: **Verenigd Koninkrijk vertrekt** (Brexit) — sindsdien 27 lidstaten.\n\nNederland zit erbij sinds dag 1 (1951). Hoofdstad EU = **Brussel** (België) — daar werken de meeste EU-organisaties.",
    emoji: "🇪🇺",
    checks: [
      {
        q: "Hoeveel landen zitten er in de Europese Unie (in 2025)?",
        options: ["25 landen", "27 landen", "28 landen", "30 landen"],
        answer: 1,
        wrongHints: ["Tussen 2007 en 2013 was het 27, daarna 28. Maar sinds Brexit?", null, "Tot 2020 was het 28 — toen vertrok het Verenigd Koninkrijk. Hoeveel nu?", "Hoger dan dit — geen 30. Lager."],
        explanation: "**27 lidstaten** sinds 2020 (Brexit = vertrek VK). Daarvoor was het 28. Geen ander land vertrok daarna; geen nieuw land kwam erbij (Turkije/Oekraïne staan op wachtlijst). Antwoord B.",
        uitlegPad: compact(
          "27 EU-lidstaten sinds 2020 (Brexit). Was 28 met VK erbij. Geen recente toetreding sindsdien.",
          { basis: "27. = B.", simpeler: "VK eruit (2020) = 28 → 27. = B.", nogSimpeler: "27 = B." },
          [{ woord: "lidstaat", uitleg: "Land dat lid is van de EU." }, { woord: "Brexit", uitleg: "Vertrek VK uit EU (officieel 31 januari 2020)." }],
        ),
      },
      {
        q: "In welk jaar werd het Verdrag van Maastricht getekend — het ontstaan van de Europese Unie?",
        options: ["1957", "1973", "1992", "2002"],
        answer: 2,
        wrongHints: ["Te vroeg — toen heette het nog EEG, niet EU.", null, null, "Te laat — toen kwam de euro pas in omloop. EU bestond al."],
        explanation: "**1992 Verdrag van Maastricht** = oprichting Europese Unie. Was eerder EEG (Europese Economische Gemeenschap, 1957). Maastricht maakte de samenwerking breder: niet alleen economie, ook politiek + gemeenschappelijke munt (euro plan). Antwoord C.",
        uitlegPad: compact(
          "Verdrag van Maastricht 1992 = officieel begin van de Europese Unie. NL-stad, ondertekend door 12 landen.",
          { basis: "1992. = C.", simpeler: "Maastricht 1992 = EU-geboorte. = C.", nogSimpeler: "1992 = C." },
          [{ woord: "Verdrag", uitleg: "Officiële afspraak tussen landen." }, { woord: "EEG", uitleg: "Europese Economische Gemeenschap — voorloper van EU (1957)." }],
        ),
      },
      {
        q: "Wat is de hoofdstad van de Europese Unie (waar de meeste organisaties zitten)?",
        options: ["Brussel (België)", "Den Haag (Nederland)", "Parijs (Frankrijk)", "Straatsburg (Frankrijk)"],
        answer: 0,
        wrongHints: [null, "Den Haag heeft VN-organen (Internationaal Strafhof) — niet EU.", "Parijs heeft geen grote EU-instelling.", "Straatsburg heeft 1 maand per jaar het Europees Parlement — niet 'hoofdstad'."],
        explanation: "**Brussel** = de facto EU-hoofdstad. Europese Commissie, Raad van de EU, deel van het Parlement + NAVO zitten er. Straatsburg (FR) host het Parlement 1 week per maand (politiek compromis). Antwoord A.",
        uitlegPad: compact(
          "Brussel = hart van de EU. Commissie + Raad + groot deel Parlement zitten hier.",
          { basis: "Brussel. = A.", simpeler: "België-Brussel = EU-stad. = A.", nogSimpeler: "Brussel = A." },
          [{ woord: "Brussel", uitleg: "Hoofdstad België én feitelijke EU-hoofdstad." }],
        ),
      },
    ],
  },
  {
    title: "Stap 2 — De 4 vrijheden",
    explanation: "De EU heeft 4 basisrechten — de **vier vrijheden**:\n\n1. **Vrij verkeer van personen** — elke EU-burger mag wonen + werken in elk ander EU-land. Geen werkvergunning nodig.\n2. **Vrij verkeer van goederen** — geen invoerheffingen tussen lidstaten. Een Spaanse sinaasappel kost in NL dus geen extra belasting.\n3. **Vrij verkeer van diensten** — een Nederlandse loodgieter mag in Duitsland werken.\n4. **Vrij verkeer van kapitaal** — geld + investeringen kunnen vrij stromen.\n\nDit is de **interne markt** — een groot economisch gebied zonder grenzen voor handel. Voordeel: meer welvaart + concurrentie. Nadeel: lokale baby's verdwijnen soms (bv. NL-staal kon niet concurreren met goedkope import).",
    emoji: "🛂",
    checks: [
      {
        q: "Hoeveel vrijheden heeft de Europese interne markt?",
        options: ["2 vrijheden", "3 vrijheden", "4 vrijheden", "5 vrijheden"],
        answer: 2,
        wrongHints: ["Te weinig — er zijn er meer.", "Bijna, maar er is nog één meer.", null, "Te veel — er zijn er minder."],
        explanation: "**4 vrijheden**: personen + goederen + diensten + kapitaal. Onthoud met 'PGDK' of '4 P+G+D+K'. Antwoord C.",
        uitlegPad: compact(
          "4 vrijheden van de interne EU-markt: personen, goederen, diensten, kapitaal. Vorm sinds oprichting EEG 1957.",
          { basis: "4 vrijheden. = C.", simpeler: "PGDK = 4. = C.", nogSimpeler: "4 = C." },
          [{ woord: "interne markt", uitleg: "Gemeenschappelijk economisch gebied EU." }],
        ),
      },
      {
        q: "Mag een Nederlander zonder werkvergunning in Frankrijk gaan werken?",
        options: ["Ja — door het vrij verkeer van personen", "Nee — alleen met speciale vergunning", "Alleen voor maximaal 3 maanden", "Alleen als hij Frans spreekt"],
        answer: 0,
        wrongHints: [null, "EU-burgers hebben juist GEEN vergunning nodig. Wel registratie soms.", "Geen 3-maanden-limiet voor werken. Wel voor toerisme buiten EU.", "Taal is leuk maar niet wettelijk verplicht."],
        explanation: "**Vrij verkeer van personen** = elke EU-burger mag in elk EU-land wonen, werken, studeren, pensioenkrijgen. Geen werkvergunning vereist. Wel: meestal eerste 3 maanden registreren bij gemeente. Antwoord A.",
        uitlegPad: compact(
          "EU-burger = mag overal in EU werken + wonen zonder vergunning. Geldt niet voor niet-EU (bv. Britten sinds Brexit moeten weer vergunning).",
          { basis: "Ja, vrij verkeer. = A.", simpeler: "NL'er in FR werken = mag, geen papier nodig. = A.", nogSimpeler: "Ja = A." },
          [{ woord: "vrij verkeer personen", uitleg: "EU-burgers mogen vrij wonen/werken in EU-landen." }],
        ),
      },
      {
        q: "Mag de Nederlandse overheid invoerheffing leggen op auto's uit Duitsland?",
        options: ["Ja — vrij om te kiezen", "Ja — alleen op luxe-auto's", "Nee — vrij verkeer van goederen verbiedt dit", "Nee — alleen voor brandstof-auto's"],
        answer: 2,
        wrongHints: ["Tegenovergesteld — invoerheffingen binnen EU zijn juist VERBODEN.", "Geen onderscheid lux/standaard binnen EU.", null, "Geen onderscheid brandstof/elektrisch binnen EU."],
        explanation: "**Vrij verkeer van goederen** = geen invoerheffingen tussen EU-lidstaten. NL mag geen extra belasting op Duitse auto's heffen. WEL toegestaan: BPM (Belasting van Personenauto's) op ALLE auto's (Nederlandse + Duitse) — dat is geen invoerheffing, maar gebruiks-belasting. Antwoord C.",
        uitlegPad: compact(
          "Geen invoerheffingen tussen EU-lidstaten = douanevrije markt. Wel BTW + gebruiks-belastingen (BPM) — die gelden voor alle auto's gelijk.",
          { basis: "Nee, verboden. = C.", simpeler: "Invoerheffing binnen EU = mag niet. = C.", nogSimpeler: "Nee = C." },
          [{ woord: "invoerheffing", uitleg: "Belasting op buitenlands product bij invoer." }, { woord: "BPM", uitleg: "Belasting van Personenauto's — geldt voor ALLE NL-geregistreerde auto's." }],
        ),
      },
    ],
  },
  {
    title: "Stap 3 — Europese Commissie + Parlement",
    explanation: "Twee belangrijke EU-instellingen:\n\n**🏛️ Europese Commissie** (in Brussel)\n- Heeft 27 commissarissen (1 per lidstaat).\n- **Initiatiefrecht**: ALLEEN de Commissie mag nieuwe wetsvoorstellen indienen.\n- Voorzitter: **Ursula von der Leyen** (sinds 2019, Duits CDU-politica).\n- Ambtenaren-apparaat dat beleid voorbereidt + uitvoert.\n\n**📋 Europees Parlement** (in Brussel + Straatsburg)\n- **705 leden** (MEPs — Members of European Parliament) — direct gekozen door EU-burgers (elke 5 jaar).\n- NL heeft 31 MEPs (op basis van bevolking).\n- Bevoegdheid: wetsvoorstellen van Commissie goedkeuren of afwijzen + EU-begroting stemmen + Commissie controleren.\n- Voorzitter: Roberta Metsola (Malta, sinds 2022).\n\n**Onthoud:** Commissie maakt het voorstel → Parlement + Raad stemmen. Net als regering + Tweede Kamer in NL.",
    emoji: "🏛️",
    checks: [
      {
        q: "Welke EU-instelling is de ENIGE die nieuwe wetsvoorstellen mag indienen?",
        options: ["Europees Parlement", "Europese Raad", "Europese Commissie", "Raad van de Europese Unie"],
        answer: 2,
        wrongHints: ["Parlement stemt over voorstellen + controleert. Maar het mag GEEN voorstellen zelf indienen.", "Europese Raad = regeringsleiders. Geeft strategische richting, geen wetsvoorstellen.", null, "Raad van EU = vakministers. Stemt mee over voorstellen, doet zelf niet de start."],
        explanation: "**Commissie heeft monopolie op initiatief**: alleen zij stelt nieuwe wetten voor. Andere EU-organen stemmen + controleren. Vergelijking NL: zoals regering vaak wetsvoorstellen indient in Tweede Kamer. Antwoord C.",
        uitlegPad: compact(
          "Commissie = motor van EU-wetgeving. Mag initiëren wat Parlement + Raad daarna goedkeuren.",
          { basis: "Commissie. = C.", simpeler: "Alleen Commissie kan nieuwe wet voorstellen. = C.", nogSimpeler: "Commissie = C." },
          [{ woord: "initiatiefrecht", uitleg: "Recht om als eerste een wetsvoorstel in te dienen." }],
        ),
      },
      {
        q: "Hoe worden de leden van het Europees Parlement (MEPs) gekozen?",
        options: ["Door de regeringsleiders aangewezen", "Door de Tweede Kamer benoemd", "Direct door EU-burgers (verkiezingen)", "Door de Europese Commissie benoemd"],
        answer: 2,
        wrongHints: ["Regeringsleiders kiezen de Commissie-voorzitter en commissarissen, NIET de MEPs.", "Nationale parlementen kiezen geen MEPs — dat doen de burgers zelf.", null, "Commissie kiest niet — wordt zelf door Parlement goedgekeurd."],
        explanation: "**MEPs worden direct door EU-burgers gekozen** in EU-parlementsverkiezingen — elke 5 jaar. Laatste verkiezingen: juni 2024. NL koos 31 MEPs uit verschillende partijen. Antwoord C.",
        uitlegPad: compact(
          "MEPs (Europees Parlement) = direct gekozen door burgers. Net als Tweede Kamerleden in NL — gekozen volk vertegenwoordigen.",
          { basis: "Direct gekozen. = C.", simpeler: "Burgers stemmen elke 5 jaar op MEPs. = C.", nogSimpeler: "Burgers kiezen = C." },
          [{ woord: "MEP", uitleg: "Member of European Parliament — Europarlementariër." }, { woord: "Europese verkiezingen", uitleg: "Eens per 5 jaar — alle EU-burgers stemmen." }],
        ),
      },
      {
        q: "Wie is voorzitter van de Europese Commissie (sinds 2019)?",
        options: ["Charles Michel", "Mark Rutte", "Roberta Metsola", "Ursula von der Leyen"],
        answer: 3,
        wrongHints: ["Charles Michel was tot 2024 voorzitter van de Europese Raad (regeringsleiders) — niet Commissie.", "Mark Rutte werd in 2024 NAVO-secretaris-generaal — niet EU.", "Roberta Metsola is voorzitter van het Europees Parlement, niet de Commissie.", null],
        explanation: "**Ursula von der Leyen** (Duitsland, CDU) is voorzitter van de Europese Commissie sinds december 2019. Herkozen 2024 voor 2e termijn. Antwoord D.",
        uitlegPad: compact(
          "Voorzitters EU-instellingen (2024): Commissie = Von der Leyen. Parlement = Metsola. Europese Raad = António Costa (sinds dec 2024). NAVO = Rutte.",
          { basis: "Von der Leyen. = D.", simpeler: "Duitse vrouw, sinds 2019, Commissie-voorzitter. = D.", nogSimpeler: "Von der Leyen = D." },
          [{ woord: "Von der Leyen", uitleg: "Voorzitter Europese Commissie sinds 2019. Duits CDU-lid." }],
        ),
      },
    ],
  },
  {
    title: "Stap 4 — Europese Raad + Raad van de EU",
    explanation: "Twee 'Raden' die makkelijk verward worden:\n\n**👑 Europese Raad** (regeringsleiders)\n- Bijeenkomst van **regeringsleiders** (president of premier) van alle 27 lidstaten.\n- Komt ~4× per jaar bijeen in Brussel.\n- Bepaalt **strategische richting** van de EU.\n- Voorzitter: **António Costa** (sinds december 2024, Portugees).\n- Voor NL: minister-president Dick Schoof (2024-).\n\n**🤝 Raad van de Europese Unie** (vakministers)\n- Ministers per onderwerp (bv. milieu, financiën, landbouw).\n- Wisselend voorzitter — elk land 6 maanden 'roulerend voorzitterschap'.\n- Stemt mee over Commissie-voorstellen (samen met Parlement).\n\n**Onthoud:**\n- Europese **Raad** = regeringsleiders (Costa)\n- **Raad** van EU = ministers (rouleert)\n- Commissie = ambtenaren (Von der Leyen)\n- Parlement = gekozen volk (Metsola)",
    emoji: "👑",
    checks: [
      {
        q: "Wie zitten in de **Europese Raad**?",
        options: ["Gekozen Europarlementariërs (MEPs)", "De regeringsleiders van alle 27 lidstaten", "Commissarissen van de Europese Commissie", "Ministers van Buitenlandse Zaken"],
        answer: 1,
        wrongHints: ["MEPs zitten in het Parlement.", null, "Commissarissen zitten in de Commissie.", "BuZa-ministers zitten in de Raad van de EU, niet Europese Raad."],
        explanation: "**Europese Raad** = bijeenkomst regeringsleiders (premiers + presidenten). Voor NL: minister-president. Antwoord B.",
        uitlegPad: compact(
          "Europese Raad = top-vergadering regeringsleiders. NIET hetzelfde als 'Raad van de EU' (ministers) of 'Europees Parlement' (MEPs).",
          { basis: "Regeringsleiders. = B.", simpeler: "De baas van elk EU-land. = B.", nogSimpeler: "Regeringsleiders = B." },
          [{ woord: "regeringsleider", uitleg: "Premier of president van een land." }],
        ),
      },
      {
        q: "De Nederlandse minister van Klimaat & Energie gaat naar Brussel om met andere EU-ministers Klimaat over een wet te stemmen. In welke instelling zit hij dan?",
        options: ["de Europese Commissie", "het Europees Parlement", "de Europese Raad", "de Raad van de Europese Unie"],
        answer: 3,
        wrongHints: ["Commissie = ambtenaren, geen nationale ministers.", "Parlement = gekozen MEPs, niet ministers.", "Europese Raad = REGERINGSLEIDERS (premier), niet vak-ministers.", null],
        explanation: "**Raad van de Europese Unie** = vakministers per onderwerp. Klimaat-onderwerp = milieu-ministers. Wisselt onderwerp per vergadering (Landbouw-Raad, Financiën-Raad, etc.). Antwoord D.",
        uitlegPad: compact(
          "Raad van de EU = ministers per vak (gewone ministers, niet premier). Verschilt per onderwerp.",
          { basis: "Raad van de EU. = D.", simpeler: "Vak-ministers samen = Raad van EU. = D.", nogSimpeler: "Raad van EU = D." },
          [{ woord: "Raad van de EU", uitleg: "Bijeenkomst vakministers EU-lidstaten." }],
        ),
      },
      {
        q: "De Europese Raad heeft een vaste voorzitter. Wie is dat sinds december 2024?",
        options: ["Charles Michel", "António Costa", "Ursula von der Leyen", "Mark Rutte"],
        answer: 1,
        wrongHints: ["Charles Michel was voorzitter tot december 2024, daarna afgelost.", null, "Von der Leyen is Commissie-voorzitter, niet Europese Raad.", "Mark Rutte werd NAVO-secretaris-generaal, niet EU."],
        explanation: "**António Costa** (Portugal) is voorzitter van de Europese Raad sinds december 2024 — voor 2,5 jaar. Volgde Charles Michel (België) op. Antwoord B.",
        uitlegPad: compact(
          "António Costa = voorzitter Europese Raad sinds dec 2024. Portugese sociaal-democraat, oud-premier Portugal.",
          { basis: "António Costa. = B.", simpeler: "Costa (PT) = Europese Raad-voorzitter sinds eind 2024. = B.", nogSimpeler: "Costa = B." },
          [{ woord: "Antóní­o Costa", uitleg: "Voorzitter Europese Raad sinds 1 december 2024." }],
        ),
      },
    ],
  },
  {
    title: "Stap 5 — De euro + euro-landen",
    explanation: "**€uro** is de gemeenschappelijke munt van de EU — maar **niet alle 27 EU-landen** gebruiken de euro!\n\n**Welke landen gebruiken de euro?** (20 sinds 2023)\nNederland, België, Duitsland, Frankrijk, Italië, Spanje, Portugal, Ierland, Oostenrijk, Finland, Griekenland, Luxemburg, Slovenië, Cyprus, Malta, Slowakije, Estland, Letland, Litouwen, **Kroatië** (jongste, sinds 2023).\n\n**Welke EU-landen hebben hun eigen munt?** (7)\n- Zweden (kroon), Denemarken (kroon), Polen (zloty), Tsjechië (kroon), Hongarije (forint), Roemenië (leu), Bulgarije (lev).\n\n**Belangrijke feiten over de euro**:\n- Ingevoerd als rekenmunt: **1 januari 1999**.\n- Als briefjes + munten: **1 januari 2002**.\n- Bewaakt door **Europese Centrale Bank** (ECB) in Frankfurt (Duitsland). President: Christine Lagarde (Frans).\n- 1 euro = 100 cent.\n\n**Niet-EU-landen die wel euro gebruiken**: Andorra, Monaco, San Marino, Vaticaanstad (mini-staten — afspraak met EU). Plus Kosovo + Montenegro (gebruiken het zonder officiële afspraak).",
    emoji: "💶",
    checks: [
      {
        q: "Hoeveel EU-landen gebruiken de **euro** als munt (in 2025)?",
        options: ["15 landen", "20 landen", "25 landen", "27 landen"],
        answer: 1,
        wrongHints: ["Hoger — meer landen zijn euro-land.", null, "Te hoog. Niet alle EU-landen hebben euro.", "Tegenovergesteld — niet alle EU-landen hebben euro. Sommigen weigeren bewust."],
        explanation: "**20 landen** in de **eurozone** (sinds Kroatië in 2023). 7 EU-landen hebben eigen munt: Polen, Zweden, Denemarken, Tsjechië, Hongarije, Roemenië, Bulgarije. Antwoord B.",
        uitlegPad: compact(
          "Eurozone = 20 landen (sinds 1 jan 2023). Kroatië als jongste lid.",
          { basis: "20 euro-landen. = B.", simpeler: "Niet alle EU = euro. 20 wel, 7 niet. = B.", nogSimpeler: "20 = B." },
          [{ woord: "eurozone", uitleg: "Landen die de euro gebruiken (20 van de 27 EU-lidstaten)." }],
        ),
      },
      {
        q: "Welk EU-land heeft **GEEN** euro maar zijn eigen munt?",
        options: ["België", "Duitsland", "Polen", "Spanje"],
        answer: 2,
        wrongHints: ["België is euro-land vanaf dag 1 (1999).", "Duitsland is euro-land vanaf 1999.", null, "Spanje is euro-land sinds 1999."],
        explanation: "**Polen** heeft de **zloty** (PLN). Polen besloot bewust euro NIET in te voeren. Andere EU-landen zonder euro: Zweden, Denemarken, Tsjechië, Hongarije, Roemenië, Bulgarije. Antwoord C.",
        uitlegPad: compact(
          "Polen = zloty. Andere EU-landen met eigen munt: Zweden + Denemarken (krona/krone), Tsjechië + Hongarije (forint), Roemenië + Bulgarije.",
          { basis: "Polen heeft zloty. = C.", simpeler: "Polen = niet-euro = zloty. = C.", nogSimpeler: "Polen = C." },
          [{ woord: "zloty", uitleg: "Munt van Polen (PLN)." }],
        ),
      },
      {
        q: "Waar zit de Europese Centrale Bank (ECB) die de euro bewaakt?",
        options: ["Brussel (België)", "Frankfurt (Duitsland)", "Parijs (Frankrijk)", "Amsterdam (Nederland)"],
        answer: 1,
        wrongHints: ["Brussel = Commissie + Raad — geen ECB.", null, "Frankrijk levert wel de huidige ECB-president (Lagarde) maar de bank zit niet in Parijs.", "Amsterdam heeft De Nederlandsche Bank (DNB) — NL nationale bank, niet ECB."],
        explanation: "**ECB zit in Frankfurt am Main** (Duitsland) — sinds oprichting 1998. Bepaalt rentestand voor eurozone + drukt eurogeld. President: **Christine Lagarde** (Frans, sinds 2019). Antwoord B.",
        uitlegPad: compact(
          "ECB = Europese Centrale Bank in Frankfurt. Christine Lagarde voorzitter. Bepaalt rente voor euro.",
          { basis: "Frankfurt. = B.", simpeler: "ECB = Frankfurt Duitsland. = B.", nogSimpeler: "Frankfurt = B." },
          [{ woord: "ECB", uitleg: "Europese Centrale Bank — bewaakt de euro." }, { woord: "Christine Lagarde", uitleg: "Voorzitter ECB sinds 2019, Frans." }],
        ),
      },
    ],
  },
  {
    title: "Stap 6 — EU-symbolen + buurlanden Nederland",
    explanation: "**EU-symbolen** (zelfde voor alle 27 lidstaten):\n- **Vlag**: blauwe achtergrond + **12 gele sterren** in cirkel. 12 = symbool van perfectie/eenheid (NIET 12 landen — bestond al toen er minder dan 12 waren).\n- **Volkslied**: 'Ode an die Freude' (Ode aan de Vreugde) van **Beethoven** — uit zijn 9e symfonie.\n- **Dag van Europa**: **9 mei** (datum Schuman-verklaring 1950).\n- **Motto**: 'In Varietate Concordia' = 'In verscheidenheid verenigd'.\n\n**Buurlanden van Nederland** (ook EU-lidstaten):\n\n- **België** — hoofdstad **Brussel** (= ook EU-hoofdstad!). Talen: Nederlands (Vlaams) + Frans (Waals) + Duits. Premier: Bart De Wever (sinds 2025).\n- **Duitsland** — hoofdstad **Berlijn**. Grootste EU-land qua bevolking (~84 miljoen). Bondskanselier: Friedrich Merz (sinds mei 2025). Belangrijkste handelspartner van NL.\n\nIn de EU werken NL, België, Duitsland nauw samen.",
    emoji: "🚩",
    checks: [
      {
        q: "Hoeveel sterren staan er op de EU-vlag?",
        options: ["10 sterren", "12 sterren", "15 sterren", "27 sterren (één per lidstaat)"],
        answer: 1,
        wrongHints: ["Te weinig.", null, "Te veel — het is een vast aantal.", "Veel mensen denken dit — maar nee, het aantal sterren verandert NIET met het aantal landen. Vaste 12."],
        explanation: "**12 sterren** op de EU-vlag — vast aantal sinds 1955 (toen er nog maar 6 landen waren). 12 staat voor perfectie/voltooidheid (12 maanden, 12 apostelen, 12 uren). VERANDERT NIET met aantal lidstaten. Antwoord B.",
        uitlegPad: compact(
          "EU-vlag = 12 gele sterren op blauw. Vast getal — niet aantal landen. Symbool van eenheid + perfectie.",
          { basis: "12 sterren. = B.", simpeler: "Vlag heeft altijd 12 sterren, los van aantal landen. = B.", nogSimpeler: "12 = B." },
          [{ woord: "EU-vlag", uitleg: "Blauw + 12 gele sterren in cirkel. Sinds 1985 ook EU-symbool." }],
        ),
      },
      {
        q: "Welk land is de **grootste handelspartner** van Nederland binnen de EU?",
        options: ["België", "Duitsland", "Frankrijk", "Italië"],
        answer: 1,
        wrongHints: ["België staat op #2 — net na #1.", null, "Frankrijk is wel groot maar niet de grootste partner van NL.", "Italië staat verder weg in handel."],
        explanation: "**Duitsland** = grootste handelspartner NL (zowel import als export). Logisch: buurland, ~84 miljoen mensen, sterke industrie. ~25% van Nederlandse export gaat naar Duitsland. Antwoord B.",
        uitlegPad: compact(
          "Duitsland = NL's grootste handelspartner. Buurland, sterke economie, ~84 mln inwoners.",
          { basis: "Duitsland. = B.", simpeler: "DE = grootste klant van NL. = B.", nogSimpeler: "Duitsland = B." },
          [{ woord: "handelspartner", uitleg: "Land waar veel mee gehandeld wordt (im/export)." }],
        ),
      },
      {
        q: "Op welke datum vieren we elk jaar **Dag van Europa**?",
        options: ["1 mei (Dag van de Arbeid)", "9 mei (Schuman-verklaring 1950)", "1 januari (oprichting euro)", "31 januari (Brexit)"],
        answer: 1,
        wrongHints: ["1 mei is Dag van de Arbeid (vakbonden-dag), niet EU.", null, "1 jan 2002 = invoering euro, maar geen Europa-dag.", "31 jan 2020 = Brexit — geen viering!"],
        explanation: "**9 mei** = Schuman-dag, naar Robert Schuman (Frans buitenlandse-minister) die op 9 mei 1950 het plan voor de Europese samenwerking presenteerde (kolen + staal). Dat is officieel het begin van de EU-samenwerking. Antwoord B.",
        uitlegPad: compact(
          "9 mei = Dag van Europa. Verwijst naar Schuman-verklaring 1950 — startpunt EU-samenwerking.",
          { basis: "9 mei. = B.", simpeler: "9 mei = Europa-dag. Schuman 1950. = B.", nogSimpeler: "9 mei = B." },
          [{ woord: "Schuman-verklaring", uitleg: "Speech 9 mei 1950 — Robert Schuman roept op tot Europese samenwerking." }],
        ),
      },
    ],
  },
];

const europeseUniePo = {
  id: "europese-unie-po",
  title: "Europese Unie — wat is het en hoe werkt het?",
  emoji: "🇪🇺",
  level: "po",
  subject: "wereldorientatie",
  referentieNiveau: "po-1F",
  sloThema: "Wereldoriëntatie - Europa + EU",
  intro: "18 vragen over de EU voor groep 7-8: 27 lidstaten, 4 vrijheden, instellingen (Commissie/Parlement/Raden), euro + ECB, EU-symbolen + Nederlandse buurlanden. Sluit aan op maatschappij-eindexamenstof.",
  triggerKeywords: ["europese unie po", "eu lidstaten 27", "europese commissie", "europees parlement", "europese raad", "euro eurozone", "eu vlag 12 sterren"],
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "topografie-nederland", title: "Topografie Nederland", niveau: "po-1F" },
  ],
  chapters,
  steps,
};

export default europeseUniePo;
