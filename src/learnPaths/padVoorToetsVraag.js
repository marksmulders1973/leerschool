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
import { QUESTION_PATH_MAP } from "./questionPathMap.generated.js";
import { findLearnPathForQuestion, levelsCompatible } from "./utils.js";
import { categoryToLearnSubjects } from "./subjectMapping.js";

const BY_ID = Object.fromEntries(pathManifest.map((p) => [p.id, p]));

function groepVan(level) {
  const m = /groep\s*(\d)/i.exec(String(level || ""));
  return m ? Number(m[1]) : null;
}

// ── Discipline bepalen ──────────────────────────────────────────────────
const REKEN_SIGNAAL = /\d\s*[+\-−×x÷:*/]\s*\d|bereken|%|√|²|³|€|\bkm\b|\bcm\b|\bkg\b|liter|breuk|procent|gemiddeld|oppervlakte|omtrek|verhouding|dozijn|\bkorting|°|graden|temperatuur|verschil|\bgetal\b|stippeltjes|reeks|seconde|minuut|minuten|kwartier|\buur\b|\bweken\b|\bdagen\b|\bmaanden\b/i;
const LEES_SIGNAAL = /lees (de|het)|tekstfragment|verhaalfragment|dagboek|in de tekst|volgens de tekst|hoofdgedachte|alinea|de schrijver/i;
// Sterke wereldoriëntatie-woorden: winnen van reken-signalen (een jaartal is
// geen som). Zwakke (dier, energie, …) alleen als er geen reken-signaal is.
const WO_STERK = /hoofdstad|provincie|rivier|delta|golfstroom|vulka|erosie|tsunami|aardbeving|grondstof|continent|werelddeel|\bstaten\b|in welk jaar|welk jaar|periode van|eeuw\b|geschiedenis|oorlog|bezetting|bevrijd|koning|keizer|\bmuur\b|\bvoc\b|romein|griek|egypt|farao|ontdekkingsreis|hormoon|orgaan|fotosynthese|ecosysteem|fossiel|amfibie|zoogdier|reptiel|insect|planeet|zonnestelsel|democratie|regering|parlement|gebeurtenis|wereldnieuws|chromosoom|celkern|\bcel\b|\bdna\b|verdrag|wie was|organen|borstkas|nieren|\bhart\b|longen/i;
const WO_ZWAK = /klimaat|\bland(en)?\b|zee\b|berg|dier|plant|poten|lichaam|energie|weer\b|jaartal|natuur|milieu|water|europa|amerika|afrika|azië|australië|noorwegen|zweden|duitsland|frankrijk|belgi|spanje|itali|\bplaats\b|\bstad\b/i;

// Welke pad-vakken passen bij een discipline? Een map-/trefwoord-match buiten
// deze set wordt genegeerd (de generated map stuurde een leestekst met cijfers
// naar een rekenpad en "Wat was de VOC?" naar brugklas-oriëntatie).
const DISC_SUBJECTS = {
  rekenen: new Set(["rekenen", "wiskunde"]),
  taal: new Set(["taal", "spelling", "begrijpend-lezen"]),
  lezen: new Set(["begrijpend-lezen", "taal"]),
  studie: new Set(["studievaardigheden", "rekenen"]),
  aardrijkskunde: new Set(["aardrijkskunde", "wereldorientatie", "topografie"]),
  natuur: new Set(["natuur", "biologie", "wereldorientatie"]),
  geschiedenis: new Set(["geschiedenis", "wereldorientatie"]),
  wereldorientatie: new Set(["wereldorientatie", "aardrijkskunde", "natuur", "geschiedenis", "biologie", "topografie"]),
};

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
  // De gemengde Doorstroomtoets: afleiden uit de vraag zelf. Volgorde telt:
  // een leestekst met cijfers is lezen, een jaartal is geen som.
  if (LEES_SIGNAAL.test(tekst)) return "lezen";
  if (WO_STERK.test(tekst)) return "wereldorientatie";
  if (REKEN_SIGNAAL.test(tekst) || (/hoeveel/i.test(tekst) && /\d/.test(tekst))) return "rekenen";
  if (WO_ZWAK.test(tekst)) return "wereldorientatie";
  // Een cijfer in een vraag die geen leestekst of wereldoriëntatie is = bijna altijd rekenen.
  if (/\d/.test(tekst)) return "rekenen";
  return "taal";
}

// ── Onderwerp-regels: [regex, pad-id, zwak?] — eerste treffer wint ─────
// Sterke regels (specifiek signaal: %, m³, km/u, wijzer, …) gaan VÓÓR de
// generated map; zwakke regels (×, "correct", …) pas erna. Reden: de map is
// zelf ook trefwoord-gebaseerd en zette bv. een m³-vraag met "half gevuld"
// op Klokkijken (E2E 5 sep 2026). pad-id mag een functie (groep) => id zijn.
const REGELS = {
  rekenen: [
    [/km\/u|snelheid|km per uur|per uur/i, "tijd-snelheid-afstand-po"],
    [/%|procent|\bkorting/i, "procenten-po"],
    [/\d\s*\/\s*\d|breuk|[½⅓¼⅕⅖⅗⅘⅔¾]/, "breuken-po"],
    [/oppervlakte|omtrek|m²|m³|cm²|cm³|kubiek|volume|\d\s*m\s*bij\s*\d|meter hek|rondom/i, "maten-omtrek-oppervlakte-po"],
    [/hoe laat|wijzer|klok|analoog|digitale tijd/i, (g) => (g <= 5 ? "klokkijken" : "tijdsduur-rekenen-po")],
    [/gemiddeld|mediaan|modus/i, "gemiddelden-statistiek-po"],
    [/schaal|\d\s*:\s*\d{2,}|op een kaart|plattegrond/i, "schaal-kaart-rekenen-po"],
    [/romeins/i, "romeinse-cijfers-po"],
    [/verhouding|in verhouding|ratio\b/i, "verhoudingen-po"],
    [/(^|\s)[−-]\d|onder nul|negatie/i, "negatieve-getallen-po"],
    [/√|²|³|kwadraat|wortel/i, "volgorde-bewerkingen"],
    [/\bggd\b|\bkgv\b|deler|veelvoud|\brest\b/i, "delen-po"],
    [/€|\beuro\b|\bprijs\b|\bkost\b|betaal|wisselgeld/i, "geld-rekenen"],
    [/\bcm\b|\bmm\b|\bkm\b|\bm\b|liter|\bcl\b|\bdl\b|\bml\b|\bkg\b|gram|\bton\b|hectare|\bare\b/i, "maten-eenheden"],
    [/\buur\b|minuten|minuut|kwartier|seconde/i, "tijdsduur-rekenen-po"],
    [/kalender|datum|leeftijd|jaar oud|dagen\b|weken\b|maand/i, "kalender-rekenen-po"],
    [/grafiek|diagram|tabel/i, "grafieken-lezen-po"],
    [/\d,\d|komma|decima/i, "kommagetallen-po"],
    [/afrond|schat/i, "schatten-afronden", true],
    [/tafel|×|\bx\b|keer|maal/i, (g) => (g <= 5 ? "tafels-po" : "cijferend-rekenen"), true],
  ],
  taal: [
    [/\bij\b|\bei\b|'ij'|'ei'|\bau\b|\bou\b|'au'|'ou'/i, "spelling-ei-ij-au-ou"],
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
    [/meervoud|enkelvoud|verkleinwoord/i, "spelling-overige-po"],
    [/betekent|betekenis|prefix|voorvoegsel|achtervoegsel/i, "woordenschat-po"],
    [/lijdend voorwerp|onderwerp|zinsdeel|meewerkend|bijzin|hoofdzin|gezegde|bepaling|samengesteld|enkelvoudige zin|passie[fv]|actieve vorm|gebiedende wijs|ontkenning|zelfstandig naamwoord|bijvoeglijk|lidwoord|voornaamwoord|woordsoort/i, "woordsoorten-po"],
    [/\bdie\b|\bdat\b|\bhun\b|\bhen\b|\bhaar\b|\bals\b|\bdan\b|correct|grammatica/i, "woordsoorten-po", true],
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
    [/koude oorlog|\bmuur\b|tweede wereldoorlog|hitler|bezetting|bevrijd/i, "koude-oorlog-modern-po"],
    [/romein|griek|egypt|farao/i, "oudheid-egyptenaren-grieken-romeinen-po"],
    [/\bvoc\b|ontdekkingsreis|columbus|zeevaarder/i, "ontdekkingsreizen-po"],
    [/democratie|regering|parlement|verkiez/i, "politiek-democratie-po"],
    [/koning|oorlog|eeuw|jaartal|in welk jaar|welk jaar|periode|geschiedenis/i, "tijdvakken-nederland-po"],
    [/provincie|heuvelrug|nederland/i, "topografie-nederland-provincies-po"],
    [/hoofdstad|rivier|delta|golfstroom|vulka|erosie|continent|werelddeel|\bstaten\b|\bland(en)?\b|europa|amerika|afrika|azië|australië|noorwegen|zweden|duitsland|frankrijk|belgi|spanje|itali/i, "werelddelen-landen-po"],
    [/hormoon|orga(a)?n|bloed|lichaam|spier|skelet|hart\b|long|nieren|borstkas|chromosoom|celkern|\bcel\b|\bdna\b/i, "lichaam-gezondheid-po"],
    [/wie was|anne frank|verdrag|wereldnieuws|gebeurtenis/i, "tijdvakken-nederland-po"],
    [/dier|plant|fotosynthese|ecosysteem|fossiel|poten|amfibie|zoogdier|reptiel|insect/i, "dierenklassen-po"],
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
    const allowed = categoryToLearnSubjects(categoryId);
    const allowedSet = allowed.length ? new Set(allowed) : null;
    const g = groepVan(quizLevel);
    const po = g != null || categoryId === "cito";
    const disc = po ? disciplineVan(categoryId, tekst) : null;
    const regel = (zwak) => {
      for (const [re, id, isZwak] of REGELS[disc] || []) {
        if (!!isZwak !== zwak || !re.test(tekst)) continue;
        const r = maak(typeof id === "function" ? id(g ?? 8) : id, 0, "regel");
        if (r) return r;
      }
      return null;
    };
    // 2. Basisschool: STERKE onderwerp-regels (specifiek signaal in de vraag).
    if (disc) { const r = regel(false); if (r) return r; }
    const pastBijDisc = (id) => !disc || !DISC_SUBJECTS[disc] || DISC_SUBJECTS[disc].has(BY_ID[id]?.subject);
    // 3. Exacte match uit de generated map (vraag → pad + stap).
    const exact = QUESTION_PATH_MAP[tekst];
    if (exact?.pathId && BY_ID[exact.pathId] && pastBijDisc(exact.pathId)) {
      const p = BY_ID[exact.pathId];
      if ((!allowedSet || allowedSet.has(p.subject)) && levelsCompatible(quizLevel, p.level)) return maak(exact.pathId, exact.stepIdx || 0, "match");
    }
    // 4. Basisschool: ZWAKKE regels (×, "correct", …).
    if (disc) { const r = regel(true); if (r) return r; }
    // 5. Trefwoord-match op het manifest (alle niveaus).
    const m = findLearnPathForQuestion(tekst, allowed.length ? allowed : null, quizLevel);
    if (m?.pathId && BY_ID[m.pathId] && pastBijDisc(m.pathId)) return maak(m.pathId, m.stepIdx || 0, "match");
    // 6. Standaardpad per vak × groep (alleen basisschool).
    if (!disc) return null;
    const std = categoryId === "redactiesommen" ? "redactiesommen-pad" : STANDAARD[disc]?.(g ?? 8);
    return std ? maak(std) : null;
  } catch {
    return null;
  }
}

/** Alle pad-id's die deze module kan teruggeven — voor een bestaan-check in tests. */
export const _ALLE_REGEL_IDS = [
  ...Object.values(REGELS).flatMap((rs) => rs.flatMap(([, id]) => (typeof id === "function" ? [1, 4, 6, 8].map((g) => id(g)) : [id]))),
  ...Object.values(STANDAARD).flatMap((f) => [1, 2, 3, 4, 5, 6, 7, 8].map((g) => f(g))),
];
