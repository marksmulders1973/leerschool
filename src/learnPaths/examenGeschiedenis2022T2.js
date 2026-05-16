// Leerpad: Examen-oefenpad Geschiedenis VMBO-GL/TL 2022 tijdvak 2.
// 2026-05-16: completeert geschiedenis-cluster naar 8/8.
// 6 echte MC-vragen geselecteerd uit 12 MC's. Bron: examenblad.nl, 0125 GT 2022-2.
// Geskipt: visueel-afhankelijke (V11/V12/V18/V28/V35/V36).

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Geschiedenis 2022 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2022/vmbo-gl/documenten/cse-2/gt-0125-a-22-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc geschiedenis: zoek jaartal-anker + match periode-kenmerk. Bij begrippen-vraag → match definitie: liberalisme=vrijheid+vrije markt, socialisme=arbeiders+sociaal, populisme=sterke leider+'wij vs zij', democratie=vrije verkiezingen.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "19e eeuw — Thorbecke + kiesrecht", emoji: "🗳️", from: 0, to: 1 },
  { letter: "B", title: "Interbellum 1918-1939", emoji: "📉", from: 2, to: 3 },
  { letter: "C", title: "Koude Oorlog + nu", emoji: "🧱", from: 4, to: 5 },
];

const steps = [
  {
    title: "Vraag 1 — Thorbecke + welke begrippen?",
    explanation: "Echte examenvraag uit Geschiedenis 2022-T2, vraag 1. Onderwerp: 19e-eeuwse stromingen.",
    emoji: "🎓",
    checks: [{
      q: "Thorbecke was vóór 1848 lid van de Tweede Kamer. Hij wilde de grondwet wijzigen waardoor rijke burgers meer macht zouden krijgen. Hij steunde ook de groei van fabrieken en stoommachines in Nederland. Welke begrippen passen bij deze ideeën van Thorbecke?",
      options: [
        "liberalisme + industrialisatie",
        "liberalisme + pacificatie",
        "socialisme + industrialisatie",
        "socialisme + pacificatie",
      ],
      answer: 0,
      wrongHints: [null, "Pacificatie (1917) = compromis tussen liberalen+confessionelen+socialisten. Past niet bij Thorbecke 1848.", "Socialisme zou ARBEIDERS macht geven, niet 'rijke burgers'. Verkeerd.", "Geen pacificatie + geen socialisme."],
      explanation: "**Liberalisme** = ideologie van Thorbecke: vrijheid + parlementair stelsel + rijke burgers (census) macht geven. **Industrialisatie** = fabrieken + stoommachines (start NL rond 1850-1870 echt vol). Beide passen bij Thorbecke. Pacificatie = 1917 schoolstrijd-akkoord (veel later). Socialisme = arbeidersbeweging (veel later). Antwoord A.",
      examenBron: BRON_LABEL(1),
      bronLink: BRON_LINK,
      leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'liberalisme', 'socialisme', 'industrialisatie', 'pacificatie'" },
        { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "tijdvak 8 (burgers + stoommachines) — Thorbecke + ideologieën" },
      ],
      uitlegPad: compact(
        "Ideologieën onthouden: LIBERALISME (vrijheid, vrije markt, rijke burgers — Thorbecke 1848), SOCIALISME (arbeider, sociale wetten — SDAP 1894), CONFESSIONALISME (religie centraal — KSP/ARP). Industrialisatie = tijdvak 8 (1800-1900 stoommachines). Pacificatie = 1917 schoolstrijd-akkoord.",
        { basis: "Thorbecke + fabrieken = liberalisme + industrialisatie. = A.", simpeler: "Liberaal = Thorbecke (1848 Grondwet). Stoommachines = industrialisatie. = A.", nogSimpeler: "Liberalisme + industrialisatie = A." },
        [{ woord: "liberalisme", uitleg: "Vrijheid + parlementair stelsel + vrije markt." }, { woord: "industrialisatie", uitleg: "Overgang naar fabrieken + stoommachines." }],
      ),
    }],
  },
  {
    title: "Vraag 2 — Welk Kamer-recht in 1896?",
    explanation: "Echte examenvraag uit Geschiedenis 2022-T2, vraag 2. Onderwerp: parlementair stelsel.",
    emoji: "🎓",
    checks: [{
      q: "In 1896 diende de regering een wetsvoorstel in om meer mensen kiesrecht te geven. Kamerleden vonden dit niet ver genoeg gaan en wilden de wettekst veranderen. Welk Kamer-recht gebruikten zij?",
      options: [
        "het recht van amendement",
        "het recht van budget",
        "het recht van initiatief",
        "het recht van interpellatie",
      ],
      answer: 0,
      wrongHints: [null, "Budgetrecht = jaarlijks Rijksbegroting goedkeuren (geld). Niet veranderen van wet-tekst.", "Initiatiefrecht = ZELF nieuwe wet voorstellen (vanaf nul). Hier veranderen ze een BESTAAND voorstel.", "Interpellatie = minister VRAGEN naar uitleg. Niet wet veranderen."],
      explanation: "**4 Kamer-rechten**: AMENDEMENT (wet-tekst van regering wijzigen), BUDGET (begroting goedkeuren), INITIATIEF (zelf wet voorstellen), INTERPELLATIE (minister ondervragen). Wettekst aanpassen = amendement. Antwoord A.",
      examenBron: BRON_LABEL(2),
      bronLink: BRON_LINK,
      leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'amendement', 'budget', 'initiatief', 'interpellatie'" },
        { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "Tweede Kamer rechten + parlement — kern" },
      ],
      uitlegPad: compact(
        "Kamer-rechten onthouden: AMENDEMENT = wijzigen van een wet (regering's tekst veranderen). INITIATIEF = nieuwe wet maken (vanaf nul). BUDGET = begroting goedkeuren. INTERPELLATIE = minister grillen + verantwoording vragen. Hier: tekst aanpassen = amendement.",
        { basis: "Tekst veranderen = amendement. = A.", simpeler: "Amendement = wijziging op bestaande tekst. = A.", nogSimpeler: "Amendement = A." },
        [{ woord: "amendement", uitleg: "Wijziging op bestaande wettekst." }, { woord: "interpellatie", uitleg: "Minister verantwoording vragen." }],
      ),
    }],
  },
  {
    title: "Vraag 15 — Wat brak Duitsland's herstelprogramma 1929?",
    explanation: "Echte examenvraag uit Geschiedenis 2022-T2, vraag 15. Onderwerp: interbellum.",
    emoji: "🎓",
    checks: [{
      q: "Het Duitse herstelprogramma (na hyperinflatie 1923) werkte goed tot eind 1929. Welke historische gebeurtenis zorgde ervoor dat het daarna niet meer werkte?",
      options: [
        "de Beurskrach in de Verenigde Staten",
        "de bezetting van het Ruhrgebied",
        "de inflatiepolitiek van de Duitse overheid",
        "de invoering van het Verdrag van Versailles",
      ],
      answer: 0,
      wrongHints: [null, "Ruhrbezetting was juist 1923 (vóór herstel begon). Niet 1929.", "Inflatie was 1923 hyperinflatie. In 1929 was DM juist stabiel.", "Versailles = 1919, vóór herstel. Niet de breukmoment in 1929."],
      explanation: "**Beurskrach 24 oktober 1929** in New York = Great Depression begint. VS-banken eisten leningen aan Duitsland terug → Duitse banken vielen om → werkloosheid explodeert → Hitler kon stemmen winnen (NSDAP 1932 grootste partij). Antwoord A.",
      examenBron: BRON_LABEL(15),
      bronLink: BRON_LINK,
      leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'beurskrach', 'inflatie', 'hyperinflatie', 'herstelprogramma'" },
        { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2", niveau: "VMBO-GT eindexamen", why: "interbellum 1918-1939 + Duitse crisis — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Interbellum Duitsland: 1919 Versailles (zware sancties), 1923 hyperinflatie + Ruhrbezetting, 1924-1929 Dawes-plan = herstelprogramma met VS-leningen → werkte. Okt 1929 Beurskrach NY → VS-banken eisten geld terug → DE-banken fail → werkloosheid → Hitler 1933 aan macht.",
        { basis: "Beurskrach 1929 brak herstel. = A.", simpeler: "Okt 1929 New York-beurs crashed → VS-leningen aan DE terug-geëist → Duitse economie kapot. = A.", nogSimpeler: "Beurskrach = A." },
        [{ woord: "Beurskrach", uitleg: "Plotseling instorten van aandelenmarkt." }, { woord: "Versailles 1919", uitleg: "Vredesverdrag na WO1 — Duitsland zware sancties." }],
      ),
    }],
  },
  {
    title: "Vraag 19 — Welk Sovjet/Nazi-begrip past bij geheime arrestaties?",
    explanation: "Echte examenvraag uit Geschiedenis 2022-T2, vraag 19. Onderwerp: totalitaire staat.",
    emoji: "🎓",
    checks: [{
      q: "In de bron worden mensen geheim en zonder rechtszaak afgevoerd en verdwijnen. Welk begrip past bij deze methode in de Sovjet-Unie/Nazi-Duitsland?",
      options: [
        "censuur",
        "geheime politie",
        "showproces",
        "strafkamp",
        "zuiveringen",
      ],
      answer: 1,
      wrongHints: ["Censuur = pers-controle. Niet het arresteren zelf — daar gaat dit over.", null, "Showproces = openbare nep-rechtszaak. Hier is JUIST GEEN proces — gewoon verdwijnen.", "Strafkamp = waar ze terechtkomen. De METHODE om ze daarheen te brengen = geheime politie.", "Zuivering = breed begrip (Stalin's gang). Geheime arrestatie zelf = werk van geheime politie."],
      explanation: "**Geheime politie** = staatsorganisatie die zonder proces oppakt + afvoert (Gestapo in Nazi-Duitsland, NKVD/KGB in Sovjet-Unie, Stasi in DDR). Methode = stilletjes ophalen, geen verklaring, familie weet niets. Antwoord B.",
      examenBron: BRON_LABEL(19),
      bronLink: BRON_LINK,
      leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'geheime politie', 'showproces', 'zuivering', 'strafkamp'" },
        { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2", niveau: "VMBO-GT eindexamen", why: "totalitaire staat-instrumenten — kern" },
      ],
      uitlegPad: compact(
        "5 onderdrukkings-instrumenten: GEHEIME POLITIE (Gestapo/NKVD/Stasi — arresteren stil), STRAFKAMP (Dachau/Goelag — bestemming), SHOWPROCES (Stalin 1936-38 — openbaar nep-proces), CENSUUR (pers-controle), ZUIVERING (breed: massa-arrestaties + executies). Stil ophalen = geheime politie.",
        { basis: "Geheim oppakken = geheime politie. = B.", simpeler: "Gestapo (Nazi) / NKVD (Sovjet) komen 's nachts, mensen verdwijnen. = B.", nogSimpeler: "Geheime politie = B." },
        [{ woord: "Gestapo", uitleg: "Nazi-Duitsland geheime politie." }, { woord: "NKVD", uitleg: "Sovjet-Unie geheime politie (later KGB)." }],
      ),
    }],
  },
  {
    title: "Vraag 44 — Wat gebeurde in DDR na val Berlijnse Muur?",
    explanation: "Echte examenvraag uit Geschiedenis 2022-T2, vraag 44. Onderwerp: einde Koude Oorlog.",
    emoji: "🎓",
    checks: [{
      q: "Welke historische gebeurtenis vindt plaats in de DDR (Oost-Duitsland), niet lang na de val van de Berlijnse Muur (november 1989)?",
      options: [
        "De DDR sluit zich aan bij het Warschaupact.",
        "De politiek leider van de DDR sluit de grens met de BRD.",
        "Er vinden vrije verkiezingen plaats in de DDR.",
        "In de DDR wordt geprotesteerd tegen het lidmaatschap van de EU.",
      ],
      answer: 2,
      wrongHints: ["DDR was AL lid van Warschaupact sinds 1955. In 1989 viel het uit elkaar.", "Tegenovergesteld — grens werd JUIST geopend in nov 1989. Niet gesloten.", null, "DDR was geen EU-lid (EU bestond nog niet zoals nu). BRD wel — DDR pas vanaf hereniging 1990."],
      explanation: "**18 maart 1990**: eerste **vrije verkiezingen** in DDR. CDU-Oost won (Lothar de Maizière). Dit baande de weg naar Duitse hereniging (3 oktober 1990, Tag der Deutschen Einheit). Antwoord C.",
      examenBron: BRON_LABEL(44),
      bronLink: BRON_LINK,
      leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'DDR/BRD', 'Berlijnse Muur', 'vrije verkiezingen'" },
        { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "tijdvak 10 (TV + computer 1950-nu) + einde Koude Oorlog" },
      ],
      uitlegPad: compact(
        "Tijdlijn 1989-1990: nov 1989 val Berlijnse Muur. Mrt 1990 eerste vrije verkiezingen DDR. Okt 1990 hereniging Duitsland (DDR + BRD = Bundesrepublik). 1991 val Sovjet-Unie. Berlijn weer hoofdstad.",
        { basis: "Na muur viel → vrije verkiezingen. = C.", simpeler: "Muur viel nov 1989 → DDR-burgers konden eindelijk vrij stemmen mrt 1990. = C.", nogSimpeler: "Verkiezingen = C." },
        [{ woord: "DDR", uitleg: "Deutsche Demokratische Republik — Oost-Duitsland 1949-1990." }, { woord: "BRD", uitleg: "Bundesrepublik Deutschland — West-Duitsland." }],
      ),
    }],
  },
  {
    title: "Vraag 46 — Sterke leider + 'wij vs zij': welke beweging?",
    explanation: "Echte examenvraag uit Geschiedenis 2022-T2, vraag 46. Onderwerp: politieke stromingen NU.",
    emoji: "🎓",
    checks: [{
      q: "Iemand beschrijft een politieke beweging met deze kenmerken: 1) een sterke leider waar mensen graag naar luisteren, 2) gewone mensen worden tegenover de elite gezet, 3) een sterke nadruk op nationale identiteit. Over welke politieke stroming gaat het?",
      options: [
        "over het feminisme",
        "over het liberalisme",
        "over het populisme",
        "over het socialisme",
      ],
      answer: 2,
      wrongHints: ["Feminisme = vrouwenrechten, geen sterke-leider-cultus.", "Liberalisme = vrijheid + individu + rule of law. Geen 'wij vs elite' centraal.", null, "Socialisme = arbeiderklasse + sociale wetten. Wel 'wij vs zij', maar arbeiders vs kapitaal — niet 'volk vs elite' direct."],
      explanation: "**Populisme** (Latijn populus = volk): sterke leider + 'gewone volk' tegenover 'elite' + vaak nationalistisch. Voorbeelden: Trump (VS), Wilders/Baudet (NL), Orbán (HU), Le Pen (FR). Volkstribuun-stijl, eenvoudige taal, anti-establishment. Antwoord C.",
      examenBron: BRON_LABEL(46),
      bronLink: BRON_LINK,
      leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'populisme', 'elite', 'nationale identiteit'" },
        { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "moderne politieke stromingen — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Populisme = 3 kenmerken: STERKE LEIDER (charisma, 'redder'), GEWONE VOLK vs ELITE (anti-establishment), NATIONALE IDENTITEIT (eigen land voorop). Pop-ulus = volk. Leider zegt direct te spreken voor 'het echte volk'. Tegenovergesteld aan technocratische politiek.",
        { basis: "Sterke leider + volk vs elite = populisme. = C.", simpeler: "Pop-ulisme = populus = volk. Trump/Wilders/Le Pen = populisten. = C.", nogSimpeler: "Populisme = C." },
        [{ woord: "populisme", uitleg: "Politiek met sterke leider die 'echte volk' tegenover 'elite' stelt." }, { woord: "elite", uitleg: "Kleine groep aan de top — geld/macht/onderwijs." }],
      ),
    }],
  },
];

const examenGeschiedenis2022T2 = {
  id: "examen-geschiedenis-2022-t2",
  title: "Examen oefenen — Geschiedenis 2022 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "geschiedenis",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Geschiedenis - eindexamen oefenen 2022-T2",
  intro: "6 echte examenvragen uit VMBO-GL/TL Geschiedenis 2022 tijdvak 2. Onderwerpen: Thorbecke + liberalisme, recht van amendement, Beurskrach 1929 Duitsland-crisis, geheime politie totalitair, DDR vrije verkiezingen 1990, populisme.",
  triggerKeywords: ["examen geschiedenis 2022 tijdvak 2", "thorbecke liberalisme", "recht van amendement", "beurskrach 1929 duitsland", "geheime politie totalitair", "ddr vrije verkiezingen", "populisme"],
  chapters,
  steps,
};

export default examenGeschiedenis2022T2;
