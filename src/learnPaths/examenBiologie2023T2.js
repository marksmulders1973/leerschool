// Leerpad: Examen-oefenpad Biologie VMBO-GL/TL 2023 tijdvak 2.
// 2026-05-16: completeert biologie-cluster naar 8/8.
// 6 echte MC-vragen geselecteerd uit 18 MC's. Bron: examenblad.nl, 0191 GT 2023-2.

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Biologie 2023 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2023/vmbo-gl/documenten/cse-2/gt-0191-a-23-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc biologie: zoek SLEUTELWOORD + match definitie. Voortplanting plant? → zowel stuifmeel (geslachtelijk) als wortelstokken (ongeslachtelijk). Bouwstof/brandstof onderscheid: eiwit=bouw, suiker=brandstof.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Zintuigen", emoji: "👁️", from: 0, to: 0 },
  { letter: "B", title: "Voeding & voortplanting plant", emoji: "🌱", from: 1, to: 2 },
  { letter: "C", title: "Erfelijkheid & cellen", emoji: "🧬", from: 3, to: 5 },
];

const steps = [
  {
    title: "Vraag 8 — Achtbaan in donker: staafjes of kegeltjes?",
    explanation: "Echte examenvraag uit Biologie 2023-T2, vraag 8. Onderwerp: oog + zintuigcellen.",
    emoji: "🎓",
    checks: [{
      q: "Een deel van de achtbaan gaat door een hal die bijna donker is. In de hal ziet Demi alleen nog vaag de omtrek van de mensen in het wagentje. Welke zintuigcellen maken op dat moment de meeste impulsen?",
      options: [
        "De kegeltjes maken de meeste impulsen.",
        "De staafjes maken de meeste impulsen.",
        "De kegeltjes en de staafjes maken evenveel impulsen.",
      ],
      answer: 1,
      wrongHints: ["Kegeltjes = kleur + scherp zien, werken in LICHT. In donker leveren ze weinig impulsen.", null, "Niet evenveel — duidelijk verschil. Welk type werkt 's nachts/in donker?"],
      explanation: "**2 typen zintuigcellen in netvlies**: KEGELTJES (kleur + scherp, alleen bij genoeg licht) + STAAFJES (geen kleur, wel licht-gevoelig, werken óók in schemer/donker). Donkere achtbaan-hal = weinig licht = STAAFJES nemen het over. Antwoord B.",
      examenBron: BRON_LABEL(8),
      bronLink: BRON_LINK,
      leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'zintuigcel', 'netvlies', 'staafje', 'kegeltje'" },
        { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting", niveau: "VMBO-GT eindexamen", why: "zintuigen + oog-bouw — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Onthoud truc: STAAFJES = STAAN (oprecht in donker) = nachtzien. KEGELTJES = KLEUR + KIES (scherp dag-zien). Donkere hal = staafjes-modus. 's Nachts buiten ook = staafjes.",
        { basis: "Donker → staafjes. = B.", simpeler: "Staafjes werken in donker, kegeltjes alleen in licht. = B.", nogSimpeler: "Staafjes = B." },
        [{ woord: "staafje", uitleg: "Zintuigcel netvlies — licht/donker (geen kleur)." }, { woord: "kegeltje", uitleg: "Zintuigcel netvlies — kleur + scherp (alleen genoeg licht)." }],
      ),
    }],
  },
  {
    title: "Vraag 20 — Brandnetel: hoe plant deze zich voort?",
    explanation: "Echte examenvraag uit Biologie 2023-T2, vraag 20. Onderwerp: plant-voortplanting.",
    emoji: "🎓",
    checks: [{
      q: "Op welke manier(en) plant de brandnetel zich voort?",
      options: [
        "alleen geslachtelijk",
        "alleen ongeslachtelijk",
        "zowel geslachtelijk als ongeslachtelijk",
      ],
      answer: 2,
      wrongHints: ["Brandnetels HEBBEN wel bloemen+stuifmeel (geslachtelijk) — maar dat is niet alles. Wat doen ze ook ondergronds?", "Ze hebben WEL bloemen → ook geslachtelijk. Niet alleen ondergronds.", null],
      explanation: "**Brandnetel** plant zich op 2 manieren voort: GESLACHTELIJK (bloemen + stuifmeel → zaden) + ONGESLACHTELIJK (wortelstokken die kruipen onder de grond + nieuwe planten uitsteken). Daarom verspreidt de brandnetel zich zo snel in tuinen. Antwoord C.",
      examenBron: BRON_LABEL(20),
      bronLink: BRON_LINK,
      leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'voortplanting', 'geslachtelijk/ongeslachtelijk', 'wortelstok'" },
        { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting", niveau: "VMBO-GT eindexamen", why: "plant-voortplanting — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Geslachtelijk = ZAADJES via bloem+stuifmeel (mannelijk-vrouwelijk gecombineerd → DNA gemengd). Ongeslachtelijk = STEKJES/WORTELSTOK/UITLOPER (gewoon kopie via plant zelf). Brandnetel + aardbei + bamboe doen BEIDE — dat maakt ze hardnekkig.",
        { basis: "Brandnetel doet beide. = C.", simpeler: "Brandnetel = bloemen (geslachtelijk) + wortels die kruipen (ongeslachtelijk). = C.", nogSimpeler: "Beide = C." },
        [{ woord: "wortelstok", uitleg: "Ondergrondse stengel waarmee plant uitloopt." }, { woord: "ongeslachtelijk", uitleg: "Voortplanting zonder paring — kopie van moederplant." }],
      ),
    }],
  },
  {
    title: "Vraag 24 — Rupsen voor koolmees-jongen: welke voedingsstof?",
    explanation: "Echte examenvraag uit Biologie 2023-T2, vraag 24. Onderwerp: voedingsstoffen.",
    emoji: "🎓",
    checks: [{
      q: "De gevangen rupsen worden gevoerd aan de jongen van de koolmees. Rupsen bevatten vooral bouwstoffen die nodig zijn voor de groei en ontwikkeling van de jongen. Om welke bouwstoffen gaat het vooral?",
      options: [
        "eiwitten",
        "koolhydraten",
        "mineralen",
        "vetten",
      ],
      answer: 0,
      wrongHints: [null, "Koolhydraten = SUIKER = BRANDSTOF (energie). Niet primair bouwstof.", "Mineralen = klein deel, kleine bouwstoffen (Ca/ijzer). Niet 'vooral'.", "Vetten = ENERGIE-OPSLAG (brandstof + reserve). Niet primair groei-bouwstof."],
      explanation: "**Eiwit** = bouwstof bij uitstek (spieren, organen, veren bouwen). Rups = veel eiwit = perfect voor jonge koolmees. Koolhydraten en vetten = brandstof. Mineralen = klein aandeel. Antwoord A.",
      examenBron: BRON_LABEL(24),
      bronLink: BRON_LINK,
      leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'bouwstof', 'eiwit', 'koolhydraat', 'mineraal', 'vet'" },
        { id: "voortplanting-hormonen-biologie", title: "Hormonen & voortplanting", niveau: "VMBO-GT eindexamen", why: "voedingsstoffen + functie — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Voedingsstoffen + functie: EIWITTEN = bouwen (spieren/organen/veren). KOOLHYDRATEN = brandstof snel (suiker/zetmeel). VETTEN = brandstof + reserve. MINERALEN = klein (Ca botten, Fe bloed). VITAMINEN = regelaars. Voor GROEI = eiwit nodig.",
        { basis: "Groei = eiwit. = A.", simpeler: "Bouwen van lichaam (spieren/veren) = eiwit nodig. Rupsen = vol eiwit. = A.", nogSimpeler: "Eiwit = A." },
        [{ woord: "eiwit", uitleg: "Bouwstof — spieren, organen, veren maken." }, { woord: "koolhydraat", uitleg: "Brandstof — energie geven." }],
      ),
    }],
  },
  {
    title: "Vraag 26 — Vlinder-metamorfose: verandert het genotype?",
    explanation: "Echte examenvraag uit Biologie 2023-T2, vraag 26. Onderwerp: genotype vs fenotype.",
    emoji: "🎓",
    checks: [{
      q: "Het fenotype van de kleine vos verandert gedurende zijn leven (ei → rups → pop → vlinder). Verandert dan ook het genotype?",
      options: [
        "Ja, het genotype verandert als uit het ei een rups ontstaat.",
        "Ja, het genotype verandert als uit de rups een pop ontstaat.",
        "Ja, het genotype verandert als uit de pop een vlinder ontstaat.",
        "Nee, het genotype van het ei, de rups, de pop en de vlinder blijft gelijk.",
      ],
      answer: 3,
      wrongHints: ["Het DNA blijft hetzelfde — alleen welke GENEN AAN of UIT staan verandert. DNA-volgorde wijzigt niet.", "DNA-volgorde blijft hetzelfde door metamorfose. Wat verandert wel? (fenotype = uiterlijk).", "Idem — DNA blijft hetzelfde van ei tot vlinder.", null],
      explanation: "**Genotype** = je DNA-code = onveranderlijk (zelfde van bevruchting tot dood). **Fenotype** = hoe je eruit ziet/functioneert = WEL veranderlijk (groei, ziekte, metamorfose). Metamorfose verandert FENOTYPE drastisch (rups → vlinder), maar GENOTYPE blijft identiek. Antwoord D.",
      examenBron: BRON_LABEL(26),
      bronLink: BRON_LINK,
      leerpadLink: { id: "genetica-erfelijkheid-biologie", title: "Genetica en erfelijkheid" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'fenotype', 'genotype', 'DNA', 'metamorfose'" },
        { id: "genetica-erfelijkheid-biologie", title: "Genetica en erfelijkheid", niveau: "VMBO-GT eindexamen", why: "fenotype vs genotype — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Onthoud: GEN-otype = GEN-en in DNA = nooit veranderen. FEN-otype = wat je ZIET = wel veranderen. Eeneiige tweelingen = zelfde GENotype maar door omgeving verschillende FENotype. Rups = zelfde DNA als vlinder, andere genen aan/uit.",
        { basis: "Genotype blijft gelijk. = D.", simpeler: "DNA verandert niet — wel hoe het lichaam eruitziet (fenotype). = D.", nogSimpeler: "Genotype gelijk = D." },
        [{ woord: "genotype", uitleg: "Je DNA-code — onveranderlijk." }, { woord: "fenotype", uitleg: "Je uiterlijk + eigenschappen — wel veranderlijk." }],
      ),
    }],
  },
  {
    title: "Vraag 28 — Stamcellen voor bloed: waar zitten ze?",
    explanation: "Echte examenvraag uit Biologie 2023-T2, vraag 28. Onderwerp: bloedvorming.",
    emoji: "🎓",
    checks: [{
      q: "De bloeddeeltjes (rode + witte bloedcellen + bloedplaatjes) worden gevormd door stamcellen. Waar zitten de stamcellen die de bloeddeeltjes vormen?",
      options: [
        "in de botten",
        "in de klieren",
        "in de lymfe",
        "in de spieren",
      ],
      answer: 0,
      wrongHints: [null, "Klieren maken hormonen (alvleesklier insuline, bijnieren adrenaline) — geen bloedcellen.", "Lymfe = afvoer-systeem voor weefselvocht. Niet productie-plek.", "Spieren bewegen — maken geen bloedcellen."],
      explanation: "**Beenmerg** = zacht weefsel BINNENIN BOTTEN (rug, borstbeen, ribben, heup). Stamcellen daar produceren alle bloeddeeltjes: rode + witte cellen + bloedplaatjes. Daarom doen artsen 'beenmergpunctie' uit het bekken om dit te testen. Antwoord A.",
      examenBron: BRON_LABEL(28),
      bronLink: BRON_LINK,
      leerpadLink: { id: "cel-biologie", title: "Cellen + weefsels" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'stamcel', 'beenmerg', 'bloeddeeltje', 'klier'" },
        { id: "cel-biologie", title: "Cellen + weefsels", niveau: "VMBO-GT eindexamen", why: "stamcellen + beenmerg — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Bloed wordt gemaakt in BEENMERG = zacht weefsel binnenin grote botten (heup, borstbeen, ruggenwervels). Daar zitten stamcellen die zich delen + verschillende soorten bloedcellen maken. Bij leukemie = stamcellen worden gestoord → kanker van witte bloedcellen.",
        { basis: "Stamcellen voor bloed = in botten (beenmerg). = A.", simpeler: "Beenmerg = zacht spul binnenin bot → maakt bloed. = A.", nogSimpeler: "Botten = A." },
        [{ woord: "stamcel", uitleg: "Cel die zich kan delen + nieuwe cel-types vormen." }, { woord: "beenmerg", uitleg: "Zacht weefsel binnenin botten — maakt bloedcellen." }],
      ),
    }],
  },
  {
    title: "Vraag 40 — Bacterie vs alg: verschil in cel-onderdeel?",
    explanation: "Echte examenvraag uit Biologie 2023-T2, vraag 40. Onderwerp: cel-structuur.",
    emoji: "🎓",
    checks: [{
      q: "Een onderzoeker bekijkt eencellige groene algen en bacteriën onder de microscoop. Welk cel-onderdeel zit WEL in de alg maar NIET in de bacterie?",
      options: [
        "celkern",
        "celmembraan",
        "celwand",
        "cytoplasma",
      ],
      answer: 0,
      wrongHints: [null, "Celmembraan zit IN ALLE cellen (ook bacteriën). Niet onderscheidend.", "Bacteriën HEBBEN ook celwand (zelfs een dikkere). Niet onderscheidend.", "Cytoplasma zit IN ALLE cellen. Niet onderscheidend."],
      explanation: "**Bacteriën = prokaryoot** (geen celkern, DNA los in cytoplasma). **Algen = eukaryoot** (mét celkern, DNA daarin). Alle andere onderdelen (membraan, wand, cytoplasma) komen bij beide voor. Verschil = de **celkern**. Antwoord A.",
      examenBron: BRON_LABEL(40),
      bronLink: BRON_LINK,
      leerpadLink: { id: "cel-biologie", title: "Cellen + weefsels" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'eencellig', 'celkern', 'celmembraan', 'celwand', 'cytoplasma'" },
        { id: "cel-biologie", title: "Cellen + weefsels", niveau: "VMBO-GT eindexamen", why: "prokaryoot vs eukaryoot — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "2 cel-types onthouden: PROKARYOOT (bacteriën) = GEEN celkern, DNA los in cytoplasma. EUKARYOOT (plant/dier/schimmel/protisten) = WEL celkern. Alg = eukaryoot. Onderscheid: CELKERN.",
        { basis: "Alg heeft celkern, bacterie niet. = A.", simpeler: "Alg = 'echte' cel (celkern). Bacterie = oerprimitief (geen celkern). = A.", nogSimpeler: "Celkern = A." },
        [{ woord: "celkern", uitleg: "Bol in cel met DNA — alleen bij eukaryoten." }, { woord: "prokaryoot", uitleg: "Cel zonder celkern (bacterie)." }],
      ),
    }],
  },
];

const examenBiologie2023T2 = {
  id: "examen-biologie-2023-t2",
  title: "Examen oefenen — Biologie 2023 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "biologie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Biologie - eindexamen oefenen 2023-T2",
  intro: "6 echte examenvragen uit VMBO-GL/TL Biologie 2023 tijdvak 2. Onderwerpen: staafjes in donker, brandnetel-voortplanting, eiwitten als bouwstof, genotype vs fenotype, beenmerg-stamcellen, alg vs bacterie celkern.",
  triggerKeywords: ["examen biologie 2023 tijdvak 2", "staafjes kegeltjes oog", "brandnetel voortplanting", "eiwitten bouwstof", "genotype fenotype metamorfose", "beenmerg stamcellen", "prokaryoot eukaryoot celkern"],
  chapters,
  steps,
};

export default examenBiologie2023T2;
