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
  6: ["breuken-po", "werkwoordsspelling-dt", "begrijpend-lezen-teksten-po", "topografie-nederland"],
  7: ["procenten-po", "werkwoordsspelling-dt", "samenvatten-hoofdgedachte-po", "kaartlezen-po"],
  8: ["doorstroomtoets-rekenen-g8", "doorstroomtoets-taal-g8", "cito-strategieen-groep8", "lange-toets-teksten-g8-po"],
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

export async function bouwStartVragen(level, aantal = AANTAL_VRAGEN) {
  const paden = kiesStartPaden(level);
  const perPad = await Promise.all(
    paden.map(async (pathId) => {
      try {
        const { quiz, questions } = await buildTopicQuiz({ pathId, aantal: 2 });
        return questions.map((q) => ({ ...q, pathId, padTitel: quiz.title }));
      } catch {
        return [];
      }
    })
  );
  return verweefVragen(perPad, aantal);
}

export function isStartKwartierGedaan() {
  try { return !!localStorage.getItem(STARTKWARTIER_KEY); } catch { return false; }
}

export function markeerStartKwartierGedaan(hoe) {
  try { localStorage.setItem(STARTKWARTIER_KEY, JSON.stringify({ at: Date.now(), hoe: hoe || "klaar" })); } catch { /* */ }
}
