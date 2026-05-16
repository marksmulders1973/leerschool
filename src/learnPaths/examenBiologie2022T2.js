// Leerpad: Examen-oefenpad Biologie VMBO-GL/TL 2022 tijdvak 2.
// 2026-05-16: completeert biologie-cluster naar 7/8.
// 6 echte MC-vragen geselecteerd uit 20 MC's.
// Bron: examenblad.nl, 0191 GT 2022-2.

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Biologie 2022 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2022/vmbo-gl/documenten/cse-2/gt-0191-a-22-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc biologie: zoek SLEUTELWOORD in vraag + match definitie. Hormonen → klier (alvleesklier/bijnier/hypofyse/schildklier). Zenuwen → soort cel (gevoel/beweging/schakel). Leergedrag → 3 vormen (gewenning/inprenting/conditionering).",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Hormonen", emoji: "💊", from: 0, to: 1 },
  { letter: "B", title: "Zenuwstelsel & leergedrag", emoji: "🧠", from: 2, to: 3 },
  { letter: "C", title: "Hormonen + immuniteit", emoji: "🛡️", from: 4, to: 5 },
];

const steps = [
  {
    title: "Vraag 2 — Bètablokker blokkeert welk hormoon?",
    explanation: "Echte examenvraag uit Biologie 2022-T2, vraag 2. Onderwerp: hormonen + hartwerking.",
    emoji: "🎓",
    checks: [{
      q: "Bètablokkers blokkeren de inwendige prikkel van een bepaald hormoon. Dit hormoon heeft invloed op de werking van de hartspier; daardoor wordt de hartslag lager. Welk hormoon wordt geblokkeerd?",
      options: [
        "van adrenaline",
        "van glucagon",
        "van insuline",
      ],
      answer: 0,
      wrongHints: [null, "Glucagon werkt op bloedsuiker (verhoogt) — niet op hartslag.", "Insuline werkt op bloedsuiker (verlaagt) — niet op hartslag."],
      explanation: "**Adrenaline** = stress/vecht-of-vlucht-hormoon. Versnelt hart, verhoogt bloeddruk, vergroot pupillen. Bètablokkers blokkeren adrenaline-receptoren in hartspier → hartslag daalt. Glucagon en insuline werken op bloedsuiker, niet op hart. Antwoord A.",
      examenBron: BRON_LABEL(2),
      bronLink: BRON_LINK,
      leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'hormoon', 'adrenaline', 'bètablokker', 'hartslag'" },
        { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting", niveau: "VMBO-GT eindexamen", why: "hormoon-werking + klieren — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "3 hormonen + functie: ADRENALINE (bijnieren, stress, versnelt hart), GLUCAGON (alvleesklier, verhoogt bloedsuiker), INSULINE (alvleesklier, verlaagt bloedsuiker). Hart-effect = adrenaline. Bètablokker werkt door 'beta-receptoren' voor adrenaline te blokkeren.",
        { basis: "Adrenaline op hart → bètablokker blokkeert adrenaline. = A.", simpeler: "Bèta-blokker → adrenaline geblokkeerd → hart langzamer. = A.", nogSimpeler: "Adrenaline = A." },
        [{ woord: "adrenaline", uitleg: "Stress-hormoon uit bijnieren — versnelt hart." }, { woord: "bètablokker", uitleg: "Medicijn dat adrenaline-receptoren blokkeert." }],
      ),
    }],
  },
  {
    title: "Vraag 6 — Pijn-waarneming: welk hersendeel?",
    explanation: "Echte examenvraag uit Biologie 2022-T2, vraag 6. Onderwerp: hersenstructuur.",
    emoji: "🎓",
    checks: [{
      q: "De stof CBD beïnvloedt de waarneming van pijn. In welk deel van de hersenen vindt de waarneming van pijn plaats?",
      options: [
        "in de grote hersenen",
        "in de kleine hersenen",
        "in de hersenstam",
      ],
      answer: 0,
      wrongHints: [null, "Kleine hersenen = coördinatie + evenwicht (lopen, fietsen). Geen waarneming.", "Hersenstam = automatische functies (ademen, hartslag). Geen bewuste waarneming."],
      explanation: "**Grote hersenen** = bewuste waarneming + denken + bewegen. Verdeeld in 4 kwabben (achterhoofd zien, slaap horen, voorhoofd plannen, kruin voelen). Pijn-waarneming = bewust → grote hersenen. Kleine hersenen = motoriek. Hersenstam = autonoom (ademen, hartritme). Antwoord A.",
      examenBron: BRON_LABEL(6),
      bronLink: BRON_LINK,
      leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'waarneming', 'grote/kleine hersenen', 'hersenstam'" },
        { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting", niveau: "VMBO-GT eindexamen", why: "hersenstructuur + zenuwstelsel — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "3 hersendelen + functie: GROTE HERSENEN (bewust — denken/voelen/zien/horen/pijn), KLEINE HERSENEN (motoriek + evenwicht), HERSENSTAM (autonoom — ademen, hart, bloeddruk). Pijn voelen = bewust = grote hersenen.",
        { basis: "Pijn-waarneming = bewust = grote hersenen. = A.", simpeler: "Voelen/denken/zien = grote hersenen. = A.", nogSimpeler: "Grote = A." },
        [{ woord: "grote hersenen", uitleg: "Bewuste waarneming, denken, bewegen." }, { woord: "hersenstam", uitleg: "Autonoom — ademen, hartslag." }],
      ),
    }],
  },
  {
    title: "Vraag 12 — Huid → ruggenmerg: welke zenuwcel?",
    explanation: "Echte examenvraag uit Biologie 2022-T2, vraag 12. Onderwerp: zenuwstelsel.",
    emoji: "🎓",
    checks: [{
      q: "Door welk type zenuwcel worden impulsen vanuit de huid naar het ruggenmerg geleid?",
      options: [
        "door bewegingszenuwcellen",
        "door gevoelszenuwcellen",
        "door schakelcellen",
      ],
      answer: 1,
      wrongHints: ["Bewegingszenuw = stuurt IMPULS NAAR SPIER. Hier is impuls vanuit huid → terug — andere richting.", null, "Schakelcellen zitten IN ruggenmerg/hersenen — verbinden, niet leiden naar."],
      explanation: "**Reflexboog 3 zenuwcellen**: GEVOELSZENUW (zintuig → ruggenmerg) → SCHAKELCEL (binnen ruggenmerg) → BEWEGINGSZENUW (ruggenmerg → spier). Vanuit huid (= zintuig) = gevoelszenuwcel. Antwoord B.",
      examenBron: BRON_LABEL(12),
      bronLink: BRON_LINK,
      leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'impuls', 'zenuwcel', 'gevoel/beweging', 'ruggenmerg'" },
        { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting", niveau: "VMBO-GT eindexamen", why: "zenuwstelsel + reflexboog — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Reflexboog: prik in vinger → GEVOELSZENUW (huid naar ruggenmerg) → SCHAKELCEL (in ruggenmerg) → BEWEGINGSZENUW (van ruggenmerg naar spier) → spier trekt hand terug. Richting onthouden: 'gevoel komt binnen, beweging gaat uit'.",
        { basis: "Huid → ruggenmerg = gevoelszenuw. = B.", simpeler: "Voelen = inkomend signaal naar ruggenmerg = gevoelszenuw. = B.", nogSimpeler: "Gevoel = B." },
        [{ woord: "gevoelszenuw", uitleg: "Brengt impuls van zintuig naar ruggenmerg/hersenen." }, { woord: "schakelcel", uitleg: "Verbindt binnen ruggenmerg/hersenen." }],
      ),
    }],
  },
  {
    title: "Vraag 19 — Heliconiusvlinders: welke vorm van leergedrag?",
    explanation: "Echte examenvraag uit Biologie 2022-T2, vraag 19. Onderwerp: gedrag.",
    emoji: "🎓",
    checks: [{
      q: "Bij dit onderzoek leerden heliconiusvlinders bepaalde bloemen-kleuren te associëren met nectar-beloning. Welke vorm van leergedrag heeft hier plaatsgevonden?",
      options: [
        "conditionering",
        "inprenting",
        "gewenning",
      ],
      answer: 0,
      wrongHints: [null, "Inprenting = vroeg in leven, eenmalig (kuiken volgt eerste bewegende ding). Past niet bij vlinder + kleur leren.", "Gewenning = stopt reageren op iets onschuldigs (vogel went aan vogelverschrikker). Hier is juist NIEUW gedrag geleerd — niet stoppen."],
      explanation: "**3 vormen leergedrag**: GEWENNING (stopt reageren op onschuldig signaal), INPRENTING (eenmalig in kritieke periode jong), CONDITIONERING (leert SIGNAAL koppelen aan BELONING — Pavlov-hond, kleur-nectar-koppeling). Vlinder leert kleur → nectar = conditionering. Antwoord A.",
      examenBron: BRON_LABEL(19),
      bronLink: BRON_LINK,
      leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'conditionering', 'inprenting', 'gewenning'" },
        { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting", niveau: "VMBO-GT eindexamen", why: "gedrag + 3 vormen leergedrag — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "3 leertypes onthouden: GEWENNING = niet meer reageren (vogel op vogelverschrikker). INPRENTING = eenmalig vroeg in leven (Lorenz' kuikens). CONDITIONERING = signaal-beloning-koppeling (Pavlov-hond bel + voer; vlinder kleur + nectar).",
        { basis: "Signaal + beloning = conditionering. = A.", simpeler: "Kleur → nectar geleerd door herhaling = Pavlov-truc = conditionering. = A.", nogSimpeler: "Conditionering = A." },
        [{ woord: "conditionering", uitleg: "Leren door signaal aan beloning te koppelen." }, { woord: "inprenting", uitleg: "Eenmalig leren in kritieke periode jong." }, { woord: "gewenning", uitleg: "Stoppen met reageren op onschuldig signaal." }],
      ),
    }],
  },
  {
    title: "Vraag 25 — Adrenaline wordt geproduceerd in...",
    explanation: "Echte examenvraag uit Biologie 2022-T2, vraag 25. Onderwerp: endocriene klieren.",
    emoji: "🎓",
    checks: [{
      q: "In de loop van de tijd waren bij de nakomelingen minder cellen die het hormoon adrenaline produceren. Waar wordt dit hormoon geproduceerd?",
      options: [
        "in de alvleesklier",
        "in de bijnieren",
        "in de hypofyse",
        "in de schildklier",
      ],
      answer: 1,
      wrongHints: ["Alvleesklier maakt insuline + glucagon (bloedsuiker), niet adrenaline.", null, "Hypofyse = 'chef-klier' onder hersenen — stuurt andere klieren aan. Maakt geen adrenaline zelf.", "Schildklier maakt thyroxine (stofwisseling). Geen adrenaline."],
      explanation: "**Bijnieren** = klieren op nieren (BIJ-NIER = naast nier). Maken adrenaline + cortisol = stress-hormonen. Alvleesklier = insuline/glucagon. Hypofyse = chef. Schildklier = thyroxine. Antwoord B.",
      examenBron: BRON_LABEL(25),
      bronLink: BRON_LINK,
      leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'klier', 'bijnier', 'hypofyse', 'schildklier', 'alvleesklier'" },
        { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting", niveau: "VMBO-GT eindexamen", why: "endocriene klieren — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Hormoon-klier-koppels onthouden: BIJNIEREN → adrenaline + cortisol (stress). ALVLEESKLIER → insuline + glucagon (suiker). SCHILDKLIER → thyroxine (energie/stofwisseling). HYPOFYSE → 'chef-klier' onder hersenen, stuurt andere klieren. EIERSTOK/TESTIS → geslachtshormonen.",
        { basis: "Adrenaline = bijnieren. = B.", simpeler: "BIJ-NIER (op nier) maakt adrenaline. Naam zegt 't bijna — bij-nier = klier bij de nier. = B.", nogSimpeler: "Bijnieren = B." },
        [{ woord: "bijnier", uitleg: "Klier op de nier — maakt adrenaline + cortisol." }, { woord: "hypofyse", uitleg: "Chef-klier onder hersenen — stuurt andere klieren aan." }],
      ),
    }],
  },
  {
    title: "Vraag 42 — Antistoffen via moedermelk: welke immunisatie?",
    explanation: "Echte examenvraag uit Biologie 2022-T2, vraag 42. Onderwerp: immuniteit.",
    emoji: "🎓",
    checks: [{
      q: "Door de antistoffen uit de moedermelk is de baby na de geboorte immuun voor ziekteverwekkers. Hoe heet deze vorm van immunisatie van de baby?",
      options: [
        "kunstmatige en actieve immunisatie",
        "kunstmatige en passieve immunisatie",
        "natuurlijke en actieve immunisatie",
        "natuurlijke en passieve immunisatie",
      ],
      answer: 3,
      wrongHints: ["Kunstmatig = via prik/medicijn. Moedermelk is NIET kunstmatig.", "Kunstmatig = injectie/serum. Moedermelk is natuurlijk.", "Actief = lichaam MAAKT zelf antistoffen. Hier worden ze GEKREGEN via melk = passief.", null],
      explanation: "**4 typen immunisatie** (2×2-tabel): NATUURLIJK-ACTIEF (zelf ziek geweest), NATUURLIJK-PASSIEF (antistoffen van moeder via placenta/melk), KUNSTMATIG-ACTIEF (vaccinatie — lichaam maakt zelf), KUNSTMATIG-PASSIEF (serum-injectie met kant-en-klare antistoffen). Moedermelk = natuurlijk + passief (krijgt het, maakt niet zelf). Antwoord D.",
      examenBron: BRON_LABEL(42),
      bronLink: BRON_LINK,
      leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'antistof', 'immunisatie', 'natuurlijk/kunstmatig', 'actief/passief'" },
        { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting", niveau: "VMBO-GT eindexamen", why: "immuunsysteem + 4 typen immunisatie — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Immunisatie 2×2 onthouden: NATUURLIJK vs KUNSTMATIG = HOE krijg je het (van moeder/ziekte vs injectie)? ACTIEF vs PASSIEF = WIE maakt antistof (lichaam zelf vs gekregen kant-en-klaar)? Moedermelk = natuurlijke route + baby krijgt antistoffen kant-en-klaar = passief.",
        { basis: "Moedermelk = natuurlijk + passief. = D.", simpeler: "Geen prik (natuurlijk) + baby maakt niet zelf (passief). = D.", nogSimpeler: "Natuurlijk passief = D." },
        [{ woord: "actief immuun", uitleg: "Lichaam maakt zelf antistoffen (na ziekte of vaccin)." }, { woord: "passief immuun", uitleg: "Kant-en-klare antistoffen gekregen (moedermelk, serum)." }],
      ),
    }],
  },
];

const examenBiologie2022T2 = {
  id: "examen-biologie-2022-t2",
  title: "Examen oefenen — Biologie 2022 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "biologie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Biologie - eindexamen oefenen 2022-T2",
  intro: "6 echte examenvragen uit VMBO-GL/TL Biologie 2022 tijdvak 2. Onderwerpen: bètablokker + adrenaline, pijn in grote hersenen, gevoelszenuwcel, conditionering, bijnieren produceren adrenaline, natuurlijke passieve immunisatie via moedermelk.",
  triggerKeywords: ["examen biologie 2022 tijdvak 2", "bètablokker adrenaline", "pijn grote hersenen", "gevoelszenuwcel", "conditionering vlinders", "bijnieren adrenaline", "moedermelk immunisatie"],
  chapters,
  steps,
};

export default examenBiologie2022T2;
