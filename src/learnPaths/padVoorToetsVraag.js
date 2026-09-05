// 🎯 Welk leerpad hoort bij deze toetsvraag?
//
// Mark 5 sep 2026: "oefen dit deel" (ouder/leerkracht) en de tip na
// "Ik weet het niet" (kind) moeten bij élke basisschool-vraag een leerpad
// opleveren — niet alleen als toevallig een trefwoord matcht.
//
// Volgorde (eerste treffer wint):
//   1. `leerpadLink` op de vraag zelf (examen-/leerpad-vragen hebben die).
//   2. De bestaande match: QUESTION_PATH_MAP (exact) + triggerKeywords
//      (manifest) via findLearnPathForQuestion — precies waar mogelijk.
//   3. Onderwerp-regels op de vraagtekst ("%" → procenten, "km/u" → snelheid,
//      "schrijfwijze" → spelling, "hoofdstad" → topografie, …).
//   4. Een standaardpad per vak × groep ("Doorstroomtoets — rekenen oefenen").
//
// Alleen voor basisschool-niveaus (groep…) én de categorie "cito"; bij
// middelbare-schoolvragen zonder match blijft het antwoord null — liever geen
// link dan een verkeerde.
//
// Licht: alleen het manifest + de generated map, géén pad-data (dus veilig
// te importeren vanuit App.jsx en PlayQuiz.jsx).

import pathManifest from "./pathManifest.generated.json";
import { findLearnPathForQuestion } from "./utils.js";
import { categoryToLearnSubjects } from "./subjectMapping.js";

const BY_ID = Object.fromEntries(pathManifest.map((p) => [p.id, p]));

function groepVan(level) {
  const m = /groep\s*(\d)/i.exec(String(level || ""));
  return m ? Number(m[1]) : null;
}

// ── Discipline bepalen ──────────────────────────────────────────────────
const REKEN_SIGNAAL = /\d\s*[+\-−×x÷:*/]\s*\d|hoeveel|bereken|%|√|²|³|€|\bkm\b|\bcm\b|\bkg\b|liter|breuk|procent|gemiddeld|oppervlakte|omtrek|verhouding|dozijn/i;
const LEES_SIGNAAL = /lees (de|het)|tekstfragment|verhaalfragment|dagboek|in de tekst|volgens de tekst|hoofdgedachte|alinea/i;
const WO_SIGNAAL = /hoofdstad|provincie|rivier|delta|golfstroom|klimaat|vulka|erosie|continent|werelddeel|\bstaten\b|\bland(en)?\b|zee\b|berg|dier|plant|fotosynthese|ecosysteem|fossiel|poten|lichaam|orgaan|energie|weer\b|democratie|koning|oorlog|eeuw|jaartal|romein|griek|egypt|ontdekkingsreis|planeet|zonnestelsel/i;

const DISCIPLINE_PER_CATEGORIE = {
  rekenen: "rekenen", redactiesommen: "rekenen", wiskunde: "rekenen",
  taal: "taal", nederlands: "taal", spelling: "taal", woordenschat: "taal",
  "begrijpend-lezen": "lezen",
  studievaardigheden: "studie",
  aardrijkskunde: "aardrijkskunde", "aardrijkskunde-po": "aardrijkskunde", topografie: "aardrijkskunde",
  natuur: "natuur", biologie: "natuur",
  geschiedenis: "geschiedenis", "geschiedenis-po": "geschiedenis",
  verkeer: "wereldorientatie",
};

function disciplineVan(categoryId, tekst) {
  const vast = DISCIPLINE_PER_CATEGORIE[categoryId];
  if (vast) return vast;
  if (categoryId !== "cito") return null;
  // De gemengde Doorstroomtoets: afleiden uit de vraag zelf.
  if (REKEN_SIGNAAL.test(tekst)) return "rekenen";
  if (LEES_SIGNAAL.test(tekst)) return "lezen";
  if (WO_SIGNAAL.test(tekst)) return "wereldorientatie";
  return "taal";
}

// ── Onderwerp-regels: [regex, pad-id] — eerste treffer wint ────────────
const REGELS = {
  rekenen: [
    [/km\/u|snelheid|km per uur/i, "tijd-snelheid-afstand-po"],
    [/%|procent|korting/i, "procenten-po"],
    [/\d\s*\/\s*\d|breuk|[½⅓¼⅕⅖⅗⅘⅔¾]/, "breuken-po"],
    [/oppervlakte|omtrek|inhoud|m²|m³/i, "maten-omtrek-oppervlakte-po"],
    [/gemiddeld|mediaan|modus/i, "gemiddelden-statistiek-po"],
    [/schaal/i, "schaal-kaart-rekenen-po"],
    [/verhouding|\bper\b.*\bper\b|ratio|in verhouding/i, "verhoudingen-po"],
    [/(^|\s)[−-]\d|onder nul|negatie/i, "negatieve-getallen-po"],
    [/√|²|³|kwadraat|wortel/i, "volgorde-bewerkingen"],
    [/\bggd\b|\bkgv\b|deler|veelvoud|rest\b/i, "delen-po"],
    [/€|euro|prijs|kost|betaal|wisselgeld/i, "geld-rekenen"],
    [/\bcm\b|\bmm\b|\bkm\b|\bm\b|liter|\bcl\b|\bdl\b|\bml\b|\bkg\b|gram|\bton\b|hectare|\bare\b/i, "maten-eenheden"],
    [/\buur\b|minuten|minuut|kwartier|seconde|hoe laat|klok/i, "tijdsduur-rekenen-po"],
    [/kalender|datum|leeftijd|jaar oud|dagen\b|weken\b|maand/i, "kalender-rekenen-po"],
    [/grafiek|diagram|tabel/i, "grafieken-lezen-po"],
    [/\d,\d|komma|decima/i, "kommagetallen-po"],
    [/afrond|schat/i, "schatten-afronden"],
    [/tafel|×|\bx\b|keer|maal/i, "tafels-po"],
    [/romeins/i, "romeinse-cijfers-po"],
  ],
  taal: [
    [/schrijfwijze|gespeld|spelling|schrijf je|juist geschreven/i, "spelling-overige-po"],
    [/\bd\/t\b|\bdt\b|kofschip|stam \+/i, "werkwoordsspelling-dt"],
    [/werkwoord|verleden tijd|voltooid|vervoeg|tegenwoordige tijd|persoonsvorm/i, "werkwoord-tijden-po"],
    [/comparatief|superlatief|trappen van vergelijking|vergrotende|overtreffende|langer ___|groter ___/i, "trappen-van-vergelijking-po"],
    [/spreekwoord|uitdrukking|gezegde\b/i, "spreekwoorden-uitdrukkingen-po"],
    [/leesteken|hoofdletter|komma|puntkomma|aanhalingsteken|dubbele punt/i, "leestekens-hoofdletters-po"],
    [/lettergre|klemtoon/i, "lettergrepen-klemtoon-po"],
    [/samenstelling|tussenletter|tussen-s|tussen-n/i, "samenstellingen-tussenletters-po"],
    [/stijlfiguur|metoniem|prolepsis|metafoor|beeldspraak|rijm|gedicht|strofe/i, "dichten-poezie-rijmen-po"],
    [/\bfeit\b|\bmening\b/i, "feit-mening-po"],
    [/signaalwoord|verband\b|omdat|daarom|tekstverband/i, "signaalwoorden-verbanden-po"],
    [/soort tekst|tekstsoort|welke tekst/i, "soorten-teksten-po"],
    [/synoniem|tegenstelling|antoniem|hetzelfde betekent|tegenovergestelde/i, "synoniemen-tegenstellingen-po"],
    [/betekent|betekenis|prefix|voorvoegsel|achtervoegsel/i, "woordenschat-po"],
    [/lijdend voorwerp|onderwerp|zinsdeel|meewerkend|bijzin|hoofdzin|gezegde|bepaling|samengesteld|enkelvoudige zin|passief|actieve vorm|gebiedende wijs|ontkenning|zelfstandig naamwoord|bijvoeglijk|lidwoord|voornaamwoord|woordsoort/i, "woordsoorten-po"],
    [/\bdie\b|\bdat\b|\bhun\b|\bhen\b|\bhaar\b|\bals\b|\bdan\b|correct|grammatica/i, "woordsoorten-po"],
  ],
  lezen: [
    [/dagboek|verhaal|gedicht|fragment/i, "verhaal-diepte-lezen-po"],
    [/\bfeit\b|\bmening\b|uitspra/i, "feit-mening-po"],
    [/hoofdgedachte|samenvat/i, "samenvatten-hoofdgedachte-po"],
    [/verwijs|waar verwijst|naar wie/i, "verwijswoorden-begrijpend-lezen-po"],
    [/tekstdoel|waarom schreef|bedoeling van de schrijver/i, "tekstdoel-schrijversdoel-po"],
    [/oorzaak|gevolg|waardoor/i, "tekstverbanden-oorzaak-gevolg-po"],
    [/betekent|betekenis/i, "woordbetekenis-context-po"],
    [/conclusie|tussen de regels/i, "conclusies-trekken-po"],
    [/tussenkopje|alinea|kopje/i, "alinea-functies-tussenkopjes-po"],
    [/brief|e-mail|mail\b/i, "brief-email-lezen-po"],
    [/nieuwsbericht|krant/i, "nieuwsbericht-lezen-po"],
    [/tabel|schema/i, "schema-tekst-combi-po"],
  ],
  studie: [
    [/dienstregeling|rooster|vertrek|aankomst/i, "dienstregeling-roosters-po"],
    [/plattegrond|legenda|kaart/i, "plattegrond-legenda-po"],
    [/inhoudsopgave|register|bladzijde|hoofdstuk/i, "inhoudsopgave-register-po"],
    [/woordenboek|alfabet/i, "alfabet-woordenboek-po"],
    [/folder|\bbon\b|advertentie|kassabon/i, "folder-bon-advertentie-po"],
    [/betrouwbaar|bron\b|bronnen/i, "betrouwbaarheid-bronnen-po"],
    [/tabel|grafiek|diagram|staafdiagram|lijngrafiek/i, "tabellen-grafieken"],
    [/tijdlijn|jaartal/i, "tijdvakken-nederland-po"],
  ],
  aardrijkskunde: [
    [/provincie|nederland/i, "topografie-nederland-provincies-po"],
    [/europa|europese/i, "topografie-europa-landen-po"],
    [/water|rivier|delta|dijk|polder|golfstroom/i, "water-erfgoed-nederland-po"],
    [/kaart|legenda|schaal|windroos/i, "kaartlezen-po"],
    [/hoofdstad|\bland\b|landen|werelddeel|continent|\bstaten\b/i, "werelddelen-landen-po"],
  ],
  natuur: [
    [/planeet|zon\b|maan\b|ster\b|sterren|zonnestelsel|heelal/i, "sterren-planeten"],
    [/ruimtevaart|raket|astronaut/i, "ruimtevaart-po"],
    [/lichaam|hart|long|bloed|spier|bot\b|orgaan|skelet/i, "lichaam-gezondheid-po"],
    [/voeding|eten|vitamine|gezond/i, "gezonde-voeding-po"],
    [/energie|stroom|zonnepaneel|windmolen/i, "energiebronnen-po"],
    [/water(kring)?loop|verdamp|neerslag|wolk/i, "waterkringloop-po"],
    [/weer\b|temperatuur|wind|storm|klimaat|broeikas|opwarm/i, "weersvoorspelling-po"],
    [/vast|vloeibaar|gas\b|smelt|stollen|kook/i, "toestand-stoffen-po"],
    [/afval|recycl|duurzaam|plastic/i, "recyclen-afval-po"],
    [/evolutie|fossiel|voorouder|dinosaur/i, "evolutie-mens-po"],
    [/dier|zoogdier|vogel|vis\b|insect|spin|reptiel|amfibie|voedselketen|plant|fotosynthese|ecosysteem/i, "dierenklassen-po"],
  ],
  geschiedenis: [
    [/democratie|politiek|tweede kamer|verkiez|regering|grondwet/i, "politiek-democratie-po"],
    [/romein|griek|egypt|farao|oudheid/i, "oudheid-egyptenaren-grieken-romeinen-po"],
    [/ontdekkingsreis|columbus|voc\b|zeevaarder/i, "ontdekkingsreizen-po"],
    [/koude oorlog|tweede wereldoorlog|eerste wereldoorlog|hitler|berlijnse muur/i, "koude-oorlog-modern-po"],
    [/industri|stoommachine|fabriek/i, "industriele-revolutie-po"],
    [/beroemd|bekende nederlander|schilder|rembrandt|van gogh/i, "bekende-nederlanders-po"],
  ],
  wereldorientatie: [
    [/verkeer|verkeersbord|fiets|oversteek/i, "verkeersregels-veiligheid-po"],
    [/europese unie|\beu\b/i, "europese-unie-po"],
    [/religie|godsdienst|islam|christen|jodendom|hindoe|boeddh/i, "wereldreligies-po"],
    [/hoofdstad|provincie|rivier|delta|golfstroom|vulka|erosie|continent|werelddeel|\bstaten\b|\bland(en)?\b/i, "werelddelen-landen-po"],
    [/dier|plant|fotosynthese|ecosysteem|fossiel|poten|lichaam|orgaan/i, "dierenklassen-po"],
    [/democratie|koning|oorlog|eeuw|jaartal|romein|griek|egypt/i, "tijdvakken-nederland-po"],
    [/planeet|zonnestelsel|ster\b/i, "sterren-planeten"],
    [/energie|weer\b|klimaat|broeikas/i, "weersvoorspelling-po"],
  ],
};

// ── Standaardpad per discipline × groep (als geen regel raakt) ──────────
const STANDAARD = {
  rekenen: (g) => (g <= 2 ? "tellen-kleuters-po" : g <= 4 ? "getallen-tot-20-po" : g <= 6 ? "cijferend-rekenen" : "doorstroomtoets-rekenen-g8"),
  taal: (g) => (g <= 3 ? "taal-leren-lezen-g3" : g <= 5 ? "taal-woorden-zinnen-g4" : "woordenschat-po"),
  lezen: (g) => (g <= 4 ? "korte-teksten-snappen-g4" : "begrijpend-lezen-strategie"),
  studie: () => "doorstroomtoets-studievaardigheden-g8",
  aardrijkskunde: () => "werelddelen-landen-po",
  natuur: (g) => (g <= 5 ? "dieren-seizoenen-natuur" : "dierenklassen-po"),
  geschiedenis: (g) => (g <= 6 ? "geschiedenis-vroeger-en-nu-g5" : "tijdvakken-nederland-po"),
  wereldorientatie: () => "wereldorientatie-mix-po",
};

function maak(id, stepIdx = 0, via = "standaard") {
  const p = BY_ID[id];
  return p ? { id, title: p.title, stepIdx, via } : null;
}

/**
 * @param {object} question   quiz-vraag ({ q, options, answer, leerpadLink?, … })
 * @param {string} categoryId quiz.subject ("rekenen", "taal", "cito", …)
 * @param {string} quizLevel  quiz.level ("groep8", "klas2", …)
 * @returns {{ id: string, title: string, stepIdx: number, via: string } | null}
 *   via = "vraag" | "match" | "regel" | "standaard" — handig voor tests/logging.
 */
export function padVoorToetsVraag(question, categoryId, quizLevel) {
  try {
    const tekst = String(question?.q ?? question?.question ?? question?.text ?? question?.vraag ?? "");
    // 1. De vraag weet het zelf.
    if (question?.leerpadLink?.id) {
      const r = maak(question.leerpadLink.id, 0, "vraag");
      if (r) return { ...r, title: question.leerpadLink.title || r.title };
    }
    // 2. Bestaande precisie-match (exact map + trefwoorden).
    const allowed = categoryToLearnSubjects(categoryId);
    const m = findLearnPathForQuestion(tekst, allowed.length ? allowed : null, quizLevel);
    if (m?.pathId && BY_ID[m.pathId]) return maak(m.pathId, m.stepIdx || 0, "match");
    // 3+4. Alleen basisschool: regels en standaardpad.
    const g = groepVan(quizLevel);
    if (g == null && categoryId !== "cito") return null;
    const disc = disciplineVan(categoryId, tekst);
    if (!disc) return null;
    for (const [re, id] of REGELS[disc] || []) {
      if (re.test(tekst)) { const r = maak(id, 0, "regel"); if (r) return r; }
    }
    const std = categoryId === "redactiesommen" ? "redactiesommen-pad" : STANDAARD[disc]?.(g ?? 8);
    return std ? maak(std) : null;
  } catch {
    return null;
  }
}

/** Alle pad-id's die deze module kan teruggeven — voor een bestaan-check in tests. */
export const _ALLE_REGEL_IDS = [
  ...Object.values(REGELS).flatMap((rs) => rs.map(([, id]) => id)),
  ...Object.values(STANDAARD).flatMap((f) => [1, 2, 3, 4, 5, 6, 7, 8].map((g) => f(g))),
];
