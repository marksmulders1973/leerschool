// 🧭 Ouderadvies — voorstellen van de app (prototype, 7 okt 2026).
//
// De app doet korte voorstellen in plaats van de ouder of verzorger zelf uit
// 300+ leerpaden te laten kiezen:
//   • na blok 1 van de nulmeting: één voorlopig voorstel (voor dat vak);
//   • na blok 3: het volledige drietal (één per vak);
//   • elke week: "dit ging goed, dit nog niet, volgende week stel ik dit voor".
// Wisselen = één tik op een voorstel; de app toont dan twee alternatieven.
//
// Alles hier is puur (geen React/Supabase) en werkt met échte pad-ids uit
// pathManifest.generated.json. Een id die daar niet in staat, wordt nooit
// voorgesteld — anders opent de ouder een lege les.

import pathManifest from "../../../learnPaths/pathManifest.generated.json";
import { blokkenVoorGroep, UITSLAG } from "./nulmeting.js";
import { ALLE_CONCEPTEN } from "../../kwartiercheck/conceptMapping.js";

const PADEN = Object.fromEntries(pathManifest.map((p) => [p.id, p]));

export function padBestaat(id) { return !!PADEN[id]; }
export function padInfo(id) {
  const p = PADEN[id];
  return p ? { id: p.id, titel: p.title, emoji: p.emoji || "📘", minuten: p.estimatedMinutes || null, stappen: p.stepCount || 0 } : null;
}

// Welke vakken in het manifest horen bij een nulmeting-vak.
const VAK_SUBJECTS = {
  rekenen: ["rekenen"],
  lezen: ["taal", "begrijpend-lezen"],
  "begrijpend-lezen": ["begrijpend-lezen"],
  taal: ["taal", "spelling"],
  studievaardigheden: ["studievaardigheden"],
};
// Terugval als een vak in een lage groep te weinig paden heeft.
const VERWANT = { lezen: ["spelling"], "begrijpend-lezen": ["taal"], taal: ["begrijpend-lezen"], studievaardigheden: ["aardrijkskunde"] };
// Paden voor nieuwkomers hebben een andere doelgroep; die stelt de app hier niet voor.
const UITGESLOTEN = /nieuwkomers|doorstroomtoets-studievaardigheden-g8/;

/** Past dit pad-niveau ("groep6-8", "groep8", "klas1-2") bij de groep van het kind? */
export function niveauPast(level, groep) {
  const lv = String(level || "").toLowerCase();
  const g = String(groep || "").toLowerCase();
  if (g === "brugklas") return /^klas1/.test(lv) || lv === "groep8" || /^groep\d-8$/.test(lv);
  const n = parseInt(g, 10);
  const m = lv.match(/^groep(\d)(?:-(\d))?$/);
  if (!m || !Number.isFinite(n)) return false;
  const van = +m[1];
  const tot = m[2] ? +m[2] : van;
  return n >= van && n <= tot;
}

// Kern eerst: paden die de Kwartiercheck zelf ergens gebruikt (de Doorstroomtoets-
// basis), daarna de rest; binnen elke groep de kortste les eerst.
const KERN = new Set(ALLE_CONCEPTEN.map((c) => c.leerpadId));
const kernEerst = (a, b) => (KERN.has(b.id) - KERN.has(a.id)) || ((a.estimatedMinutes || 99) - (b.estimatedMinutes || 99));

const RANG = { [UITSLAG.nogniet]: 0, [UITSLAG.wankel]: 1, [UITSLAG.onbekend]: 2, [UITSLAG.goed]: 3 };

/** Kandidaat-paden voor één blok-uitslag, beste eerst, zonder dubbele. */
export function kandidatenVoorBlok(groep, blokUitslag) {
  const blok = blokkenVoorGroep(groep).find((b) => b.nr === blokUitslag?.blok);
  if (!blok) return [];
  const oordelen = Object.fromEntries((blokUitslag.concepten || []).map((c) => [c.id, c.oordeel]));
  const uit = [];
  // eigen = het leerpad dat de Kwartiercheck zelf aan dit onderdeel koppelt;
  // dat mag altijd, ook als het een nieuwkomers-pad is (groep 4: tot 100).
  const voeg = (id, reden, extra = {}, eigen = false) => {
    if (!id || !padBestaat(id) || (!eigen && UITGESLOTEN.test(id)) || uit.some((x) => x.padId === id)) return;
    uit.push({ padId: id, reden, ...extra });
  };
  // 1) Gemeten onderdelen, zwakste eerst. "Gaat goed" komt pas achteraan.
  [...blok.concepten]
    .sort((a, b) => (RANG[oordelen[a.id]] ?? 2) - (RANG[oordelen[b.id]] ?? 2))
    .forEach((c) => {
      const o = oordelen[c.id] || UITSLAG.onbekend;
      if (o === UITSLAG.goed) return; // geen herhaling van wat goed ging
      voeg(c.leerpadId, o, { conceptLabel: c.label }, true);
    });
  // 2) Onderdelen van dit vak die niet in de vijf minuten pasten.
  blok.reserve.forEach((c) => voeg(c.leerpadId, "niet-gemeten", { conceptLabel: c.label }, true));
  // 3) Een stapje verder: andere paden van dit vak op het niveau van de groep.
  const subjects = VAK_SUBJECTS[blok.vak] || [];
  pathManifest
    .filter((p) => subjects.includes(p.subject) && niveauPast(p.level, groep))
    .sort(kernEerst)
    .forEach((p) => voeg(p.id, "verder"));
  // 4) Te weinig (groep 3-4 heeft maar een paar leespaden)? Kijk één groep
  //    ernaast en bij verwante vakken, en als laatste: herhalen wat goed ging.
  if (uit.length < 3) {
    const n = parseInt(groep, 10);
    const buren = Number.isFinite(n) ? [String(n - 1), String(n + 1)] : ["8"];
    const verwant = [...subjects, ...(VERWANT[blok.vak] || [])];
    pathManifest
      .filter((p) => verwant.includes(p.subject) && (niveauPast(p.level, groep) || buren.some((b) => niveauPast(p.level, b))))
      .sort(kernEerst)
      .forEach((p) => voeg(p.id, !niveauPast(p.level, groep) && niveauPast(p.level, buren[0]) ? "makkelijker" : "verder"));
  }
  if (uit.length < 3) blok.concepten.forEach((c) => voeg(c.leerpadId, "herhalen", { conceptLabel: c.label }));
  return uit;
}

/**
 * Voorstel voor één vak: de eerste kandidaat + de twee volgende als wissel.
 * `uitgesloten` = pad-ids die de ouder al wegwisselde of die al gekozen zijn.
 * → { vak, blok, uitslag, padId, titel, emoji, reden, alternatieven: [{padId,titel,emoji,reden}] } | null
 */
export function voorstelVoorBlok(groep, blokUitslag, { uitgesloten = [] } = {}) {
  const kand = kandidatenVoorBlok(groep, blokUitslag).filter((k) => !uitgesloten.includes(k.padId));
  if (!kand.length) return null;
  const metInfo = (k) => ({ ...k, ...padInfo(k.padId) });
  const [eerste, ...rest] = kand.map(metInfo);
  return { vak: blokUitslag.vak, blok: blokUitslag.blok, uitslag: blokUitslag.uitslag, ...eerste, alternatieven: rest.slice(0, 2) };
}

/** Het drietal (of minder als nog niet alle blokken af zijn). */
export function drietal(groep, blokken, { uitgesloten = [] } = {}) {
  const gekozen = [...uitgesloten];
  const uit = [];
  for (const nr of [1, 2, 3]) {
    const b = blokken?.[nr];
    if (!b) continue;
    const v = voorstelVoorBlok(groep, b, { uitgesloten: gekozen });
    if (v) { uit.push(v); gekozen.push(v.padId); }
  }
  return uit;
}

/** Ouder tikt op "wissel": kies alternatief `padId` voor het voorstel van dit blok.
 *  Geeft het nieuwe voorstel terug, met twee verse alternatieven (het oude
 *  pad staat daar weer tussen, zodat terugwisselen kan). */
export function wissel(groep, blokUitslag, huidig, nieuwPadId, { anderen = [] } = {}) {
  const kand = kandidatenVoorBlok(groep, blokUitslag).filter((k) => !anderen.includes(k.padId));
  const nieuw = kand.find((k) => k.padId === nieuwPadId);
  if (!nieuw) return huidig;
  const rest = kand.filter((k) => k.padId !== nieuwPadId);
  // Het oude voorstel vooraan bij de alternatieven, zodat "toch die eerste" één tik is.
  rest.sort((a, b) => (a.padId === huidig?.padId ? -1 : b.padId === huidig?.padId ? 1 : 0));
  return {
    vak: blokUitslag.vak, blok: blokUitslag.blok, uitslag: blokUitslag.uitslag,
    ...nieuw, ...padInfo(nieuw.padId),
    alternatieven: rest.slice(0, 2).map((k) => ({ ...k, ...padInfo(k.padId) })),
  };
}

// ── Wekelijks vervolg ──────────────────────────────────────────────────────

/**
 * Week-oordeel per gekozen pad.
 * voortgang = { [padId]: { stappenGedaan, goed, fout } } (uit learn_progress / leaderboard)
 * → { goed: [...], nogNiet: [...], nietBegonnen: [...], volgende: [...] }
 *
 * Regels (bewust simpel en eerlijk):
 *  - alle stappen af én ≥ 70% goed            → "ging goed", volgende week iets nieuws van dat vak
 *  - begonnen maar < 70% goed of niet af      → "nog niet", volgende week hetzelfde pad nog een keer
 *  - niet begonnen                            → "niet aan toegekomen", blijft staan (geen schuldgevoel)
 */
export function weekVervolg(groep, keuzes, voortgang = {}, blokken = {}) {
  const goed = [];
  const nogNiet = [];
  const nietBegonnen = [];
  const volgende = [];
  const gebruikt = keuzes.map((k) => k.padId);
  for (const k of keuzes) {
    const info = padInfo(k.padId) || { titel: k.titel || k.padId, stappen: 0 };
    const v = voortgang[k.padId] || {};
    const gedaan = v.stappenGedaan || 0;
    const pogingen = (v.goed || 0) + (v.fout || 0);
    const pct = pogingen ? Math.round((100 * (v.goed || 0)) / pogingen) : null;
    const rij = { ...k, titel: info.titel, stappen: info.stappen, stappenGedaan: gedaan, pct };
    if (!gedaan && !pogingen) {
      nietBegonnen.push(rij);
      volgende.push({ ...k, ...padInfo(k.padId), waarom: "nog-niet-begonnen" });
    } else if (info.stappen && gedaan >= info.stappen && (pct === null || pct >= 70)) {
      goed.push(rij);
      const blok = blokken[k.blok];
      const nieuw = blok ? voorstelVoorBlok(groep, blok, { uitgesloten: gebruikt }) : null;
      if (nieuw) { volgende.push({ ...nieuw, alternatieven: nieuw.alternatieven, waarom: "stap-verder" }); gebruikt.push(nieuw.padId); }
    } else {
      nogNiet.push(rij);
      volgende.push({ ...k, ...padInfo(k.padId), waarom: "nog-een-keer" });
    }
  }
  return { goed, nogNiet, nietBegonnen, volgende };
}
