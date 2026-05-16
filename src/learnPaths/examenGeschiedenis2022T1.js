// Leerpad: Examen-oefenpad Geschiedenis VMBO-GL/TL 2022 tijdvak 1.
// 2026-05-16: 6e geschiedenis-pilot — vult de 2022-T1 slot (oudste jaar).
// 4 echte MC-vragen geselecteerd uit 5 MC's (V23 kaart-vraag overgeslagen).
// Bron: examenblad.nl, examen 0125 GT 2022-1.

const bron8 = {
  titel: "Bron 8 — Een vrouw vertelt over haar jeugd in Duitsland (Hitlerjugend)",
  body:
    "Ik leerde dat ons uniform 'erekleding' was. Veel meisjes vonden het heel moeilijk dat ze geen sieraden mochten dragen bij het uniform. Maar het uniform wás het sieraad. Je moest het bij alle nationale feestdagen dragen, maar ook bij verjaardagen bijvoorbeeld. Ik heb mijn uniform altijd met trots gedragen en ik ging graag naar de bijeenkomsten. Ik leerde dat de leider altijd gelijk heeft en daarna pas de ouders.",
};

const bron10 = {
  titel: "Bron 10 — Ingezonden brief Nederlandse vrouw (1938) over Kristallnacht",
  body:
    "Ik was na de Kristallnacht zo ongerust over mijn vader en zus dat ik naar Duitsland ben gegaan om hen op te zoeken. Ze vertelden me wat er drie dagen daarvoor was gebeurd.\n\nDonderdagochtend werden ze opgepakt en samen met de andere Joden uit het dorp opgesloten. De vrouwen werden verhoord en daarna naar huis gestuurd. De mannen werden met een veewagen naar het slachthuis gebracht. Daarna werd mijn vader weggestuurd, samen met de andere mannen die ouder waren dan 70 jaar.",
};

const bron15 = {
  titel: "Bron 15 — Jeugdboeken over Nederlanders tijdens WO2",
  body:
    "boek 1 — Bommen op ons huis: Fien is wakker geworden van de Duitse vliegtuigen. De oorlog is nu begonnen!\n\nboek 2 — Dromen van vrijheid: Marja wakker wordt, weet meteen dat er iets mis is...\n\n(Beschrijvingen verwijzen naar gebeurtenissen tussen 1940-1945 — bombardement Rotterdam, onderduiken Joden, Hongerwinter, bevrijding.)",
};

const chapters = [
  { letter: "A", title: "Politiek + kiesrecht", emoji: "🗳️", from: 0, to: 0 },
  { letter: "B", title: "Nazi-regime", emoji: "⚔️", from: 1, to: 2 },
  { letter: "C", title: "Hongerwinter NL", emoji: "🍞", from: 3, to: 3 },
];

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Geschiedenis 2022 tijdvak 1, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2022/vmbo-gl/documenten/cse-1/gt-0125-a-22-1-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc geschiedenis: zoek jaartal-anker + match met bekende gebeurtenis. Datum-truc werkt vaak bij multiple choice.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const steps = [
  {
    title: "Vraag 3 — Caoutchoucartikel 1887: rekbaar kiesrecht",
    explanation: "Echte examenvraag uit Geschiedenis 2022-T1, vraag 3. Onderwerp: uitbreiding kiesrecht Nederland 1880-1890.",
    emoji: "🎓",
    checks: [{
      q: "In de grafiek is de ontwikkeling te zien van de uitbreiding van het kiesrecht. Welke verandering van het kiesrecht is te zien tussen 1880 en 1890?",
      options: [
        "de invoering van directe verkiezingen",
        "de invoering van het caoutchoucartikel",
        "de invoering van het censuskiesrecht",
        "de invoering van indirecte verkiezingen",
      ],
      answer: 1,
      wrongHints: ["Directe verkiezingen bestonden al sinds 1848 (Thorbecke) — niet in 1880-1890.", null, "Censuskiesrecht bestond al sinds 1848 — niet in 1880-1890 ingevoerd. Tussen 1880-1890 werd dit juist verBREDED (caoutchouc).", "Indirecte verkiezingen golden voor de Eerste Kamer — geen wijziging in deze periode."],
      explanation: "Het **caoutchoucartikel** (Grondwet 1887) was een 'rekbaar' artikel — caoutchouc = rubber. Het verving het strikte census met een ruimer criterium: kiesrecht voor mannen met 'kenmerken van geschiktheid + maatschappelijke welstand'. Tussen 1888 en 1894 verdubbelde het aantal kiezers. Allerlei kiezerswetten (van Houten 1896, Cort van der Linden 1917 algemeen mannen) volgden.",
      examenBron: BRON_LABEL(3),
      bronLink: BRON_LINK,
      leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'kiesrecht', 'caoutchouc (rubber, rekbaar)', 'census', 'directe vs indirecte verkiezingen'" },
        { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "tijdvak 8 (burgers + stoommachines 1800-1900) — uitbreiding kiesrecht NL" },
      ],
      uitlegPad: compact(
        "Caoutchouc = Frans voor rubber = rekbaar. Het caoutchoucartikel (1887) was de eerste uitbreiding van het censuskiesrecht uit 1848. Niet absolute mannen-stemming (kwam pas 1917), wel veel meer mannen mochten stemmen.",
        { basis: "Caoutchoucartikel 1887. = B.", simpeler: "1887 = rekbaar artikel verbreed kiesrecht (niet meer alleen rijken). = B.", nogSimpeler: "Caoutchouc = B." },
        [{ woord: "caoutchoucartikel", uitleg: "Grondwet 1887, 'rekbaar' kiesrecht-artikel." }, { woord: "censuskiesrecht", uitleg: "Stemmen op basis van vermogen — 1848-1917." }],
      ),
    }],
  },
  {
    title: "Vraag 17 — Nazi-regime: terreur + strafkampen",
    explanation: "Echte examenvraag uit Geschiedenis 2022-T1, vraag 17. Onderwerp: kenmerken Nazi-Duitsland.",
    emoji: "🎓",
    checks: [{
      q: "Welke begrippen passen bij de Hitlerjugend-herinnering uit bron 8?",
      options: [
        "indoctrinatie + showprocessen",
        "indoctrinatie + strafkampen",
        "terreur + showprocessen",
        "terreur + strafkampen",
      ],
      answer: 3,
      wrongHints: ["Showprocessen = USSR-Stalin (1936-1938 grote zuiveringen), niet Nazi-Duitsland.", "Strafkampen klopt, maar Hitlerjugend-uniform-trots is GEEN indoctrinatie? Eigenlijk wel — maar de COMBINATIE met showprocessen klopt niet.", "Showprocessen = Stalin, niet Hitler.", null],
      explanation: "Nazi-regime-kenmerken: **terreur** (Gestapo arresteerde willekeurig, Kristallnacht-pogroms), **strafkampen** (Dachau 1933, Auschwitz 1940 — concentratie- + vernietigingskampen). Showprocessen zijn juist Sovjet-Unie onder Stalin (geënsceneerde rechtszaken). Antwoord D.",
      examenBron: BRON_LABEL(17),
      bronLink: BRON_LINK,
      bronTekst: bron8,
      leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'indoctrinatie', 'terreur', 'showprocessen', 'strafkampen'" },
        { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2", niveau: "VMBO-GT eindexamen", why: "kenmerken Nazi-Duitsland: terreur Gestapo + concentratiekampen — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Nazi-Duitsland (1933-1945) = terreur (Gestapo, willekeurige arrestaties) + strafkampen (Dachau 1933, Auschwitz 1940). USSR-Stalin (1924-1953) = showprocessen + zuiveringen. Cito test of je beide regimes uit elkaar houdt.",
        { basis: "Terreur + strafkampen. = D.", simpeler: "Nazi = terreur (Gestapo) + concentratiekampen. Showprocessen = Stalin USSR. = D.", nogSimpeler: "Terreur + strafkampen = D." },
        [{ woord: "Gestapo", uitleg: "Geheime staatspolitie Nazi-Duitsland." }, { woord: "showproces", uitleg: "Geënsceneerd proces met vooraf bepaalde uitspraak — kenmerk Stalin." }],
      ),
    }],
  },
  {
    title: "Vraag 20 — Censuur in Nazi-Duitse pers",
    explanation: "Echte examenvraag uit Geschiedenis 2022-T1, vraag 20. Onderwerp: persvrijheid in dictatuur.",
    emoji: "🎓",
    checks: [{
      q: "Deze brief over Kristallnacht stond in 1938 in een Nederlandse krant. Waarom zou dezelfde brief toen niet in een Duitse krant hebben kunnen staan?",
      options: [
        "vanwege de censuur",
        "vanwege de massamoorden",
        "vanwege de persoonsverheerlijking",
        "vanwege de showprocessen",
      ],
      answer: 0,
      wrongHints: [null, "Massamoorden waren in 1938 nog niet systematisch (begint 1941). En zelfs als ze gebeurden — dat is niet de reden dat een KRANT iets niet plaatste.", "Persoonsverheerlijking = Hitler-cultus (juist WEL in kranten). Niet de reden voor weglaten van kritische brief.", "Showprocessen = Stalin USSR — niet Nazi-Duitsland."],
      explanation: "Nazi-Duitsland had strikte **persvrijheid-onderdrukking** = censuur. Alle kranten waren geleidschakeld (Gleichschaltung 1933+). Kritische berichten over Kristallnacht of Jodenvervolging mochten niet — alleen pro-regime nieuws. Een brief die de Duitse misdrijven blootlegt zou nooit door de censuur komen.",
      examenBron: BRON_LABEL(20),
      bronLink: BRON_LINK,
      bronTekst: bron10,
      leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'censuur', 'massamoord', 'persoonsverheerlijking', 'Kristallnacht'" },
        { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2", niveau: "VMBO-GT eindexamen", why: "Nazi-Duitsland-kenmerken: gecontroleerde pers + censuur — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Censuur = staat controleert wat in kranten/media verschijnt. Nazi-Duitsland geleidschakeld alle media in 1933 (Goebbels = minister van Propaganda). Kritische berichten over Jodenvervolging niet toegestaan. NL was nog vrij in 1938 — daarom kon brief daar wel verschijnen.",
        { basis: "Censuur. = A.", simpeler: "Nazi-pers werd gecensureerd. Kritische brief over Jodenvervolging mocht niet. = A.", nogSimpeler: "Censuur = A." },
        [{ woord: "censuur", uitleg: "Staats-controle op pers/media." }, { woord: "Gleichschaltung", uitleg: "Gelijkschakeling — Nazi-controle over alle instituties (1933+)." }],
      ),
    }],
  },
  {
    title: "Vraag 30 — Hongerwinter 1944-1945: Spoorwegstaking",
    explanation: "Echte examenvraag uit Geschiedenis 2022-T1, vraag 30. Onderwerp: laatste fase WO2 Nederland.",
    emoji: "🎓",
    checks: [{
      q: "De winter van 1944-1945 in Nederland staat bekend als de Hongerwinter. Wat heeft bijgedragen aan het uitbreken van de Hongerwinter?",
      options: [
        "de invoering van een distributiesysteem",
        "de invoering van het persoonsbewijs",
        "de oproep tot de Februaristaking",
        "de oproep tot de Spoorwegstaking",
      ],
      answer: 3,
      wrongHints: ["Distributiesysteem (bonnenstelsel) bestond al sinds begin van de oorlog — verklaarde de honger niet alleen.", "Persoonsbewijs (1941) was voor identificatie — geen voedsel-impact.", "Februaristaking = 1941, niet 1944-1945. Geen verband met Hongerwinter.", null],
      explanation: "**Spoorwegstaking** (sept 1944) = NL-spoormannen staakten op verzoek van regering-in-Londen om Duitse troepenverplaatsingen te dwarsbomen rondom operatie Market Garden. Als represaille blokkeerden de Duitsers de voedseltransporten naar west-NL → **Hongerwinter** met 20.000+ doden van honger en kou. Antwoord D.",
      examenBron: BRON_LABEL(30),
      bronLink: BRON_LINK,
      bronTekst: bron15,
      leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'Hongerwinter', 'Spoorwegstaking', 'Februaristaking', 'distributiesysteem'" },
        { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2", niveau: "VMBO-GT eindexamen", why: "laatste fase WO2 NL: Market Garden + Spoorwegstaking + Hongerwinter — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "Sept 1944: regering-in-Londen vraagt spoormannen te staken om Duitse troepen te hinderen tijdens operatie Market Garden (Arnhem). Spoormannen staken — Duitsers reageren door voedseltransport naar west-NL stop te zetten. Winter '44-'45: honger + tulpenbollen eten + 20.000+ doden = Hongerwinter.",
        { basis: "Spoorwegstaking. = D.", simpeler: "Sept 1944 Spoorwegstaking → Duitsers blokkeerden voedsel → Hongerwinter. = D.", nogSimpeler: "Spoorwegstaking = D." },
        [{ woord: "Hongerwinter", uitleg: "Winter 1944-1945, west-NL, 20.000+ doden door honger." }, { woord: "Spoorwegstaking", uitleg: "Sept 1944, NL-spoormannen op bevel regering-Londen." }, { woord: "Februaristaking", uitleg: "1941 — anti-Jodenvervolging-staking in Amsterdam." }],
      ),
    }],
  },
];

const examenGeschiedenis2022T1 = {
  id: "examen-geschiedenis-2022-t1",
  title: "Examen oefenen — Geschiedenis 2022 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "geschiedenis",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Geschiedenis - eindexamen oefenen 2022-T1",
  intro: "4 echte examenvragen uit VMBO-GL/TL Geschiedenis 2022 tijdvak 1. Onderwerpen: caoutchoucartikel 1887, Nazi-regime kenmerken, censuur Duitse pers, Hongerwinter Spoorwegstaking.",
  triggerKeywords: ["examen geschiedenis 2022 tijdvak 1", "caoutchoucartikel kiesrecht", "nazi terreur strafkampen", "censuur duitse pers", "hongerwinter 1944", "spoorwegstaking"],
  chapters,
  steps,
};

export default examenGeschiedenis2022T1;
