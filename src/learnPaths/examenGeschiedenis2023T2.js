// Leerpad: Examen-oefenpad Geschiedenis VMBO-GL/TL 2023 tijdvak 2.
// 2026-05-16: completeert geschiedenis-cluster naar 7/8.
// 4 echte MC-vragen geselecteerd uit 7 MC's. Bron: examenblad.nl, 0125 GT 2023-2.
// Geskipt: V14/V36/V42 (visueel-afhankelijk).

const bron12 = {
  titel: "Bron 12 — Politieke tekening 'Niet dezelfde leeuw als vroeger' (1938)",
  body:
    "Britse spotprent uit 1938. Te zien: een 'Tsjechische kapperszaak' van Hitler, waarin een nogal kleine en gemoedelijke Britse leeuw zit. Hitler heeft een groot scheermes en pakt op kalme manier de leeuw bij de kop. Daar omheen staan kleinere figuren: Italië en gewapende Duitse soldaten.\n\nDe Britse leeuw staat symbool voor Groot-Brittannië. Het beeld toont hoe Groot-Brittannië in 1938 toegaf aan Hitler bij de Conferentie van München — Tsjecho-Slowakije moest delen van het land afstaan aan Duitsland, om 'oorlog te voorkomen'. De symbolen rond de tekening (geweren, Duitse soldaten, Italiaanse vlag) tonen het idee van militaire dreiging en politieke indoctrinatie.",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Geschiedenis 2023 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2023/vmbo-gl/documenten/cse-2/gt-0125-a-23-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc geschiedenis: zoek jaartal-anker + match periode-kenmerk. Spotprent? Lees TOELICHTING + symboliek (figuren = landen of partijen).",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "19e eeuw — democratisering", emoji: "🗳️", from: 0, to: 1 },
  { letter: "B", title: "WO2-opmaat — Nazi-Duitsland", emoji: "⚔️", from: 2, to: 3 },
];

const steps = [
  {
    title: "Vraag 1 — Thorbecke 1844: welke vorm kiesrecht?",
    explanation: "Echte examenvraag uit Geschiedenis 2023-T2, vraag 1. Onderwerp: 19e-eeuwse democratisering.",
    emoji: "🎓",
    checks: [{
      q: "Iemand beweert dat de wet die Thorbecke al in 1844 wilde invoeren, past bij de nieuwe Grondwet van 1848. Is deze bewering juist?",
      options: [
        "Ja, want Thorbecke geeft aan dat hij algemeen kiesrecht wil invoeren.",
        "Ja, want Thorbecke geeft aan dat hij censuskiesrecht wil invoeren.",
        "Nee, want Thorbecke geeft aan dat hij algemeen kiesrecht wil invoeren.",
        "Nee, want Thorbecke geeft aan dat hij censuskiesrecht wil invoeren.",
      ],
      answer: 1,
      wrongHints: ["Algemeen kiesrecht = pas 1917/1919 (Cort van der Linden mannen + 1919 vrouwen). In 1844 nog niet — die optie is verkeerd.", null, "Grondwet 1848 PAST WEL bij Thorbecke (hij schreef hem). Dus 'nee' is sowieso fout.", "'Nee' = fout. Thorbecke MAAKTE de Grondwet 1848 zelf."],
      explanation: "Thorbecke (1798-1872) was de auteur van de Grondwet van 1848 (na revolutiegolf Europa). Daarin kwam **censuskiesrecht** = stemmen op basis van vermogen (alleen rijke mannen). Algemeen kiesrecht volgt veel later (mannen 1917, vrouwen 1919). Beide kanten kloppen: 'ja' + 'censuskiesrecht'. Antwoord B.",
      examenBron: BRON_LABEL(1),
      bronLink: BRON_LINK,
      leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'kiesrecht', 'algemeen vs census', 'Grondwet'" },
        { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "tijdvak 8 (burgers + stoommachines) — Thorbecke + grondwet 1848" },
      ],
      uitlegPad: compact(
        "Thorbecke = de man die Grondwet 1848 schreef. Effect: vorst krijgt minder macht, parlement meer (constitutionele monarchie). Kiesrecht bleef CENSUS (alleen rijke mannen). Algemeen kiesrecht kwam veel later: 1917 mannen, 1919 vrouwen. Caoutchoucartikel 1887 verbreedde de census-norm.",
        { basis: "Thorbecke + 1848 = censuskiesrecht. = B.", simpeler: "1848 = nieuw Grondwet, maar nog GEEN algemeen kiesrecht — alleen rijke mannen mochten stemmen = census. = B.", nogSimpeler: "Census = B." },
        [{ woord: "censuskiesrecht", uitleg: "Stemrecht voor mannen met bepaald inkomen/belasting." }, { woord: "Grondwet 1848", uitleg: "Thorbecke's wet — basis NL parlementaire democratie." }],
      ),
    }],
  },
  {
    title: "Vraag 6 — Stakende arbeiders + sociale wetten = welke politieke stroming?",
    explanation: "Echte examenvraag uit Geschiedenis 2023-T2, vraag 6. Onderwerp: politieke stromingen rond 1900.",
    emoji: "🎓",
    checks: [{
      q: "Een Kamerlid wil dat stakende arbeiders gewoon hun loon uitbetaald krijgen, dat de regering daarvoor moet zorgen, én dat er meer sociale wetten komen. De eisen van dit Kamerlid passen bij...",
      options: [
        "feministen",
        "liberalen",
        "protestanten",
        "socialisten",
      ],
      answer: 3,
      wrongHints: ["Feministen streden voor vrouwenkiesrecht — niet primair voor arbeider-loon en sociale wetten.", "Liberalen wilden juist GEEN sterke staat in de economie ('vrije markt' + minimaal ingrijpen). Past niet bij 'regering zorgt voor loon'.", "Protestanten (ARP/CHU) richtten zich op religie/onderwijs-thema's. Sociale wetten waren niet hun kern-eis.", null],
      explanation: "**Socialisten** (SDAP, opgericht 1894) streden voor: hoger loon, arbeiderrechten, kortere werkdag, sociale wetten (ziektewet, AOW, etc.), staking-recht. Belangrijke namen: Troelstra, Domela Nieuwenhuis. Antwoord D.",
      examenBron: BRON_LABEL(6),
      bronLink: BRON_LINK,
      leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'socialist', 'liberaal', 'staking', 'sociale wet'" },
        { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "industriële revolutie + arbeidersbeweging — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "4 politieke stromingen rond 1900: LIBERAAL (vrije markt, weinig overheid), SOCIALIST (arbeiderrechten, sociale wetten, sterke overheid voor zwakken), CONFESSIONEEL (religie centraal — katholiek RKSP / protestant ARP+CHU), FEMINISTEN (vrouwenkiesrecht + emancipatie). Arbeider+loon+sociaal = socialist.",
        { basis: "Arbeiders + sociale wetten = socialist. = D.", simpeler: "SOCIAAL → SOCIALIST. Loon voor stakers + sociale wetten = SDAP. = D.", nogSimpeler: "Socialist = D." },
        [{ woord: "socialist", uitleg: "Politieke stroming voor arbeiderrechten + sociale wetten." }, { woord: "sociale wet", uitleg: "Wet die zwakke groep beschermt (ziekte, ouderdom, werkloosheid)." }],
      ),
    }],
  },
  {
    title: "Vraag 20 — Britse leeuw + Hitler 1938: welke begrippen?",
    explanation: "Echte examenvraag uit Geschiedenis 2023-T2, vraag 20. Onderwerp: Nazi-Duitsland propaganda + appeasement.",
    emoji: "🎓",
    checks: [{
      q: "Welke begrippen zijn te herkennen in de Britse spotprent uit 1938 (Hitler+Tsjechische kapperszaak + Britse leeuw)?",
      options: [
        "censuur en indoctrinatie",
        "indoctrinatie en militarisme",
        "militarisme en rassenleer",
        "rassenleer en censuur",
      ],
      answer: 1,
      wrongHints: ["Censuur = persvrijheid-onderdrukking. Niet zichtbaar in de tekening — geen kranten/boeken.", null, "Rassenleer (jodenvervolging) is niet WAT in de tekening centraal staat — wel geweren/soldaten = militair.", "Geen rassenleer + geen censuur — wel militaire dreiging (soldaten/geweren) + indoctrinatie (boodschap)."],
      explanation: "Tekening 1938 toont: Duitse SOLDATEN met geweren (= **militarisme** = leger-cultus, oorlog-paraatheid) + Hitler die 'kapperszaak' runt waar Britse leeuw vrijwillig komt zitten (= **indoctrinatie** = mensen overtuigen via beelden/symbolen). Geen rassenleer (Joden), geen censuur (pers). Antwoord B.",
      examenBron: BRON_LABEL(20),
      bronLink: BRON_LINK,
      bronTekst: bron12,
      leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'militarisme', 'indoctrinatie', 'rassenleer', 'censuur'" },
        { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2", niveau: "VMBO-GT eindexamen", why: "4 kenmerken Nazi-regime — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "4 Nazi-kenmerken: MILITARISME (leger-cultus + oorlog-paraatheid), INDOCTRINATIE (beelden/symbolen + Hitlerjugend), RASSENLEER (Joden + 'Untermenschen'), CENSUUR (Goebbels-propaganda + pers-controle). In de tekening zie je SOLDATEN/GEWEREN (militair) + Hitler die 'klant' van schrik kapt (indoctrinatie).",
        { basis: "Soldaten + Hitler-symboliek = militarisme + indoctrinatie. = B.", simpeler: "Geweren = militarisme. Hitler die Britse leeuw 'overtuigt' = indoctrinatie. = B.", nogSimpeler: "Militarisme + indoctrinatie = B." },
        [{ woord: "militarisme", uitleg: "Leger en oorlog-paraatheid centraal." }, { woord: "indoctrinatie", uitleg: "Mensen overtuigen via beelden/symbolen/propaganda." }],
      ),
    }],
  },
  {
    title: "Vraag 21 — Welke historische gebeurtenis is afgebeeld?",
    explanation: "Echte examenvraag uit Geschiedenis 2023-T2, vraag 21. Onderwerp: appeasement 1938.",
    emoji: "🎓",
    checks: [{
      q: "Naar aanleiding van welke historische gebeurtenis is de tekening 'Niet dezelfde leeuw als vroeger' (1938) gemaakt?",
      options: [
        "de conferentie van München",
        "de Kristallnacht",
        "de stichting van de Republiek van Weimar",
        "het Verdrag van Versailles",
      ],
      answer: 0,
      wrongHints: [null, "Kristallnacht = nov 1938, jodenvervolging-pogrom in Duitsland. Niet over Britse appeasement of Tsjechië.", "Weimar Republiek = 1919, gesticht na WO1. Te vroeg + niet over Hitler-Brittannië.", "Verdrag van Versailles = 1919 na WO1. Niet over Tsjechië 1938."],
      explanation: "**Conferentie van München** (sept 1938): Chamberlain (UK) + Daladier (FR) + Hitler + Mussolini. Britten en Fransen stonden Hitler toe Sudetenland (Tsjechië) te annexeren — appeasement = toegeven om oorlog te voorkomen. Achteraf desastreus (Hitler annexeerde rest Tsjechië 1939). De spotprent toont de Britse 'tamme leeuw' die toegeeft aan Hitler-de-kapper. Antwoord A.",
      examenBron: BRON_LABEL(21),
      bronLink: BRON_LINK,
      bronTekst: bron12,
      leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
      voorkennisKeten: [
        { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'appeasement', 'conferentie', 'annexatie'" },
        { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2", niveau: "VMBO-GT eindexamen", why: "voor-oorlog 1933-1939 + München 1938 — kern van deze vraag" },
      ],
      uitlegPad: compact(
        "1938 tijdlijn: maart Anschluss Oostenrijk, sept Conferentie München → Tsjechië (Sudetenland) afgestaan aan Hitler. Chamberlain: 'Peace for our time'. November 1938: Kristallnacht (apart event, jodenvervolging). 1939: Hitler annexeerde rest Tsjechië. Sept 1939: invasie Polen = WO2 begin.",
        { basis: "Tsjechië-toegeven 1938 = München. = A.", simpeler: "Spotprent = Britten geven Tsjechië aan Hitler. Dat gebeurde in München 1938. = A.", nogSimpeler: "München = A." },
        [{ woord: "Conferentie van München", uitleg: "Sept 1938, UK+FR+DE+IT akkoord — Sudetenland naar Duitsland." }, { woord: "appeasement", uitleg: "Toegeven aan dictator om oorlog te voorkomen." }],
      ),
    }],
  },
];

const examenGeschiedenis2023T2 = {
  id: "examen-geschiedenis-2023-t2",
  title: "Examen oefenen — Geschiedenis 2023 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "geschiedenis",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Geschiedenis - eindexamen oefenen 2023-T2",
  intro: "4 echte examenvragen uit VMBO-GL/TL Geschiedenis 2023 tijdvak 2. Onderwerpen: Thorbecke + censuskiesrecht 1848, socialisten + sociale wetten, Britse appeasement 1938 (Conferentie München), Nazi-militarisme + indoctrinatie.",
  triggerKeywords: ["examen geschiedenis 2023 tijdvak 2", "thorbecke 1848 censuskiesrecht", "socialisten arbeiders sociale wetten", "conferentie munchen 1938", "militarisme indoctrinatie nazi"],
  chapters,
  steps,
};

export default examenGeschiedenis2023T2;
