// Start-kwartier (Mark 7 sep 2026) — logica los van de UI.
//
// Aanleiding: activatie-nulmeting sep 2026 (docs/ACTIVATIE-NULMETING-SEP2026.md):
// van 80 Google-bezoekers die "leerling" kozen, zagen er 65 nooit één vraag —
// ze belandden op /mijn (lege etalage) of in het park. Wie wél een vraag zag,
// beantwoordde hem. Dus: direct ná naam + groep eerst 5 vragen op niveau,
// afgewisseld met kaartjes die laten zien wat Leerkwartier kan.
//
// Vragen komen uit bestaande leerpaden (buildTopicQuiz → uitlegPad blijft),
// dus geen nieuwe content en géén AI-call.
import { buildTopicQuiz } from "../practice/buildTopicQuiz.js";

export const STARTKWARTIER_KEY = "lk_startkwartier_gedaan";
export const AANTAL_VRAGEN = 5;

// Opwarmvraag (Mark 28 sep 2026, "ja, doe het zo"): de helft van de starters beantwoordde vraag 1
// niet (vraag gezien, weg). Vraag 1 is nu altijd een vaste, korte vraag per groep zonder
// schoolwoorden ("stam", "persoonsvorm"), die bijna iedereen goed heeft — eerst een succesje.
// Zelf geschreven, niet uit een toets overgenomen. Vragen 2-5 blijven uit de leerpaden komen.
// Meten: question_answered { pad: "opwarm-g<n>" } + startkwartier-trechter in gedrag.sql.
const OPWARM = {
  1: { onderwerp: "Rekenen", q: "Welk getal komt na 4?", options: ["3", "5", "6", "8"], answer: 1, hint: "Tel maar hardop: 1, 2, 3, 4, …", uitleg: "Na 4 komt 5." },
  2: { onderwerp: "Rekenen", q: "Welk getal komt na 4?", options: ["3", "5", "6", "8"], answer: 1, hint: "Tel maar hardop: 1, 2, 3, 4, …", uitleg: "Na 4 komt 5." },
  3: { onderwerp: "Rekenen", q: "Hoeveel is 3 + 4?", options: ["6", "7", "8", "5"], answer: 1, hint: "Begin bij 3 en tel er 4 bij: 4, 5, 6, …", uitleg: "3 + 4 = 7." },
  4: { onderwerp: "Rekenen", q: "Hoeveel is 3 + 4?", options: ["6", "7", "8", "5"], answer: 1, hint: "Begin bij 3 en tel er 4 bij: 4, 5, 6, …", uitleg: "3 + 4 = 7." },
  5: { onderwerp: "Taal", q: "Welk woord hoort er niet bij?", options: ["appel", "peer", "stoel", "banaan"], answer: 2, hint: "Drie woorden kun je eten. Welke niet?", uitleg: "Appel, peer en banaan zijn fruit. Een stoel niet." },
  6: { onderwerp: "Taal", q: "Hij ___ elke dag naar school.", options: ["fiets", "fietst", "fietsd", "fietsen"], answer: 1, hint: "Zeg het hardop: hij … Wat hoor je aan het eind?", uitleg: "Hij fietst: bij 'hij' komt er een t achter." },
  7: { onderwerp: "Rekenen", q: "Welk getal is het grootst?", options: ["0,45", "0,5", "0,09", "0,4"], answer: 1, hint: "Maak ze even lang: 0,45 · 0,50 · 0,09 · 0,40.", uitleg: "0,5 is hetzelfde als 0,50, en dat is het meest." },
  8: { onderwerp: "Taal", q: "Wat betekent 'gehaast'?", options: ["heel rustig", "met veel haast", "verveeld", "trots"], answer: 1, hint: "Welk kleiner woord zit erin?", uitleg: "Gehaast = je hebt haast, je doet alles snel." },
};
export function opwarmVraag(groep) {
  const o = OPWARM[groep] || OPWARM[6];
  return {
    q: o.q, options: o.options, answer: o.answer,
    wrongHints: o.options.map((_, i) => (i === o.answer ? null : o.hint)),
    uitleg: o.uitleg, onderwerp: o.onderwerp, pathId: "opwarm-g" + (OPWARM[groep] ? groep : 6), opwarm: true,
  };
}

// Label boven een vraag: één gewoon woord i.p.v. de padtitel ("Werkwoordsspelling — d/t en
// 't kofschip", "(pilot)"). Op pad-id, want die zeggen genoeg.
export function onderwerpVan(v) {
  if (v?.onderwerp) return v.onderwerp;
  const id = String(v?.pathId || "");
  if (/lezen|tekst|samenvat|hoofdgedachte|strategie/.test(id)) return "Lezen";
  if (/reken|breuk|procent|tafel|getal|delen|klok|meten|geld|kommagetal|wiskunde/.test(id)) return "Rekenen";
  if (/topo|kaart|dieren|natuur|seizoen|geschied|aardrijk|wereld/.test(id)) return "Wereld";
  if (/taal|spelling|werkwoord|woord|zin|leesteken|rijm|letter/.test(id)) return "Taal";
  return null;
}

// "5" | "groep5" | "groep 5" → 5. VO ("klas2", "havo3") → null.
export function parseGroep(level) {
  if (level == null) return null;
  const s = String(level).toLowerCase().trim();
  if (!s || s.startsWith("klas") || /havo|vwo|vmbo|gym|mavo/.test(s)) return null;
  const m = s.match(/(\d+)/);
  if (!m) return null;
  const g = parseInt(m[1], 10);
  return g >= 1 && g <= 8 ? g : null;
}

// Per groep: paden op volgorde rekenen → taal → lezen → wereld. Alle id's
// bestaan in pathManifest.generated.json (gecheckt 7 sep 2026).
const PADEN_PER_GROEP = {
  1: ["tellen-kleuters-po", "rijmen-letters-kleuters-po"],
  2: ["tellen-kleuters-po", "rijmen-letters-kleuters-po"],
  3: ["getallen-tot-20-po", "taal-leren-lezen-g3", "spelling-eerste-woorden-g3", "klokkijken"],
  4: ["tafels-po", "taal-woorden-zinnen-g4", "korte-teksten-snappen-g4", "klokkijken"],
  5: ["tafels-po", "spelling-ei-ij-au-ou", "korte-teksten-snappen-g4", "delen-po", "dieren-seizoenen-natuur"],
  // 26 sep 2026 (idee BF): groep 6-8 openen met taal i.p.v. rekenen. Meting 30 dgn, vraag 1 goed:
  // procenten 14%, breuken 52% — tegen werkwoordspelling 73% en Doorstroomtoets-taal 82%. En de helft
  // van de starters vertrok binnen ~10 s zonder één antwoord. Eerst een succesje, dan het rekenwerk.
  6: ["werkwoordsspelling-dt", "breuken-po", "begrijpend-lezen-teksten-po", "topografie-nederland"],
  7: ["werkwoordsspelling-dt", "procenten-po", "samenvatten-hoofdgedachte-po", "kaartlezen-po"],
  8: ["doorstroomtoets-taal-g8", "doorstroomtoets-rekenen-g8", "cito-strategieen-groep8", "lange-toets-teksten-g8-po"],
};

export function kiesStartPaden(level) {
  const g = parseGroep(level) ?? 6;
  return PADEN_PER_GROEP[g].slice();
}

// Om-en-om één vraag per pad (rekenen, taal, lezen, …) tot `aantal`.
// Een pad dat niet laadt wordt stil overgeslagen — liever 4 vragen dan een crash.
export function verweefVragen(perPad, aantal = AANTAL_VRAGEN) {
  const out = [];
  let ronde = 0;
  for (;;) {
    let toegevoegd = false;
    for (const lijst of perPad) {
      const v = lijst[ronde];
      if (!v) continue;
      out.push(v);
      toegevoegd = true;
      if (out.length >= aantal) return out;
    }
    if (!toegevoegd) return out;
    ronde++;
  }
}

// Idee 4 (dagrapport 10 sep 2026): 6 van de 10 starters zagen géén vraag —
// de vragen van alle 4-5 paden werden eerst allemaal geladen (20-70 s op een
// telefoon). Nu: het eerste pad apart laden en meteen via `onEerste` teruggeven,
// zodat vraag 1 er binnen een paar seconden staat; de rest komt erachteraan.
// Vraag 1 blijft dezelfde (verweefVragen begint altijd met perPad[0][0]).
export async function bouwStartVragen(level, aantal = AANTAL_VRAGEN, { onEerste } = {}) {
  const paden = kiesStartPaden(level);
  // Het eerste pad levert vraag 1: alleen uit de eerste 2 stappen (de makkelijkste), zodat een nieuwe
  // leerling met een succesje begint (idee BF, 26 sep 2026). De andere paden blijven willekeurig.
  const laad = async (pathId, eerstePad = false) => {
    try {
      const { quiz, questions } = await buildTopicQuiz({ pathId, aantal: 2, alleenEersteStappen: eerstePad ? 2 : null, stapPlaatje: "bij-verwijzing", groep: /klas/i.test(String(level)) ? null : parseGroep(level) });
      return questions.map((q) => ({ ...q, pathId, padTitel: quiz.title }));
    } catch {
      return [];
    }
  };
  // Vraag 1 = de vaste opwarmvraag (staat er meteen, zonder laden); daarna aantal-1 uit de paden.
  const opwarm = opwarmVraag(parseGroep(level) ?? 6);
  const eerste = laad(paden[0], true);
  if (onEerste) {
    onEerste([opwarm]);
    eerste.then((lijst) => { if (lijst.length) onEerste([opwarm, ...verweefVragen([lijst], aantal - 1)]); }).catch(() => {});
  }
  const perPad = await Promise.all([eerste, ...paden.slice(1).map((p) => laad(p))]);
  return [opwarm, ...verweefVragen(perPad, aantal - 1)];
}

export function isStartKwartierGedaan() {
  try { return !!localStorage.getItem(STARTKWARTIER_KEY); } catch { return false; }
}

export function markeerStartKwartierGedaan(hoe) {
  try { localStorage.setItem(STARTKWARTIER_KEY, JSON.stringify({ at: Date.now(), hoe: hoe || "klaar" })); } catch { /* */ }
}
