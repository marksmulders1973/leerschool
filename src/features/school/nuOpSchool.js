// 🏫 "Nu op school" (Mark 26 okt 2026: "ik wil graag kunnen aanbieden waar ze ook echt mee bezig zijn").
// Er is geen landelijke weekplanning en elke school kiest een eigen methode — maar het kind weet
// altijd waar de klas nu mee bezig is. Dus: per vak één tik ("ridders", "breuken"), overslaan mag,
// en de keuze verloopt na een schoolperiode (~6 weken), zodat er in maart niet nog "ridders" staat.
// De keuze werkt door in de hele app: vaktegel, Begin-kwartier (eerste blokje), Werk aan.
// Puur, behalve de twee localStorage-functies; de Vandaag-motor krijgt de keuzes als argument.

import pathManifest from "../../learnPaths/pathManifest.generated.json";

export const GELDIG_DAGEN = 42; // een schoolperiode tussen twee vakanties

const sleutel = (player) => `lk_nu_op_school:${String(player || "").trim() || "speler"}`;

export function leesNuOpSchool(player) {
  try { const o = JSON.parse(localStorage.getItem(sleutel(player)) || "{}"); return o && typeof o === "object" ? o : {}; } catch { return {}; }
}

/** keuze = { id, pathId, stapIndexen?, label, emoji } of null (= weghalen). */
export function zetNuOpSchool(player, vak, keuze) {
  const alles = leesNuOpSchool(player);
  if (keuze) alles[vak] = { ...keuze, sinds: Date.now() };
  else delete alles[vak];
  try { localStorage.setItem(sleutel(player), JSON.stringify(alles)); } catch { /* */ }
  return alles;
}

export function isVerlopen(keuze, nu = Date.now()) {
  return !keuze || !keuze.sinds || nu - keuze.sinds > GELDIG_DAGEN * 86400000;
}

/** Alleen de keuzes die nog gelden, als lijst [{ vak, ...keuze }]. */
export function actieveKeuzes(alles, nu = Date.now()) {
  return Object.entries(alles || {}).filter(([, k]) => k && k.pathId && !isVerlopen(k, nu)).map(([vak, k]) => ({ vak, ...k }));
}

// De 10 tijdvakken (kerndoel 52) → het pad (en waar nodig de stap) dat erbij hoort. Geschiedenis krijgt
// deze kaartjes i.p.v. losse paden: een kind van 10 zegt "ridders", niet "Tijdvakken Nederland stap 2".
export const TIJDVAKKEN = [
  { id: "tv1", label: "Jagers en boeren", emoji: "🪨", pathId: "tijdvakken-nederland-po", stapIndexen: [0] },
  { id: "tv2", label: "Grieken en Romeinen", emoji: "🏛️", pathId: "oudheid-egyptenaren-grieken-romeinen-po" },
  { id: "tv3", label: "Monniken en ridders", emoji: "🏰", pathId: "tijdvakken-nederland-po", stapIndexen: [1] },
  { id: "tv4", label: "Steden en staten", emoji: "🏙️", pathId: "tijdvakken-nederland-po", stapIndexen: [1] },
  { id: "tv5", label: "Ontdekkers en hervormers", emoji: "⛵", pathId: "ontdekkingsreizen-po" },
  { id: "tv6", label: "Regenten en vorsten (Gouden Eeuw)", emoji: "👑", pathId: "tijdvakken-nederland-po", stapIndexen: [2] },
  { id: "tv7", label: "Pruiken en revoluties", emoji: "🎩", pathId: "politiek-democratie-po" },
  { id: "tv8", label: "Burgers en stoommachines", emoji: "🚂", pathId: "industriele-revolutie-po" },
  // 27 okt 2026 (kliktest groep 8): stap 3 gaat over 1795 tot nu → maar 1 van 5 vragen ging over de oorlogen.
  // Nu: stap 3 + de tijdlijn-mix, alleen de vragen die echt over WO1/WO2 gaan (9 stuks).
  { id: "tv9", label: "Wereldoorlogen", emoji: "🕊️", pathId: "tijdvakken-nederland-po", stapIndexen: [3, 4], zoek: "oorlog|1914|1918|1939|1940|1945|bevrijd|bezet|hitler|jood|verzet|hongerwinter|anne frank" },
  { id: "tv10", label: "Moderne wereld (na 1945)", emoji: "📺", pathId: "koude-oorlog-modern-po" },
];

function padBijGroep(level, groep) {
  const m = String(level || "").toLowerCase().match(/groep\s*(\d)(?:\s*-\s*(\d))?/);
  if (!m) return false;
  const lo = Number(m[1]), hi = Number(m[2] || m[1]);
  return groep >= lo && groep <= hi;
}

export function korteTitel(t) {
  return String(t || "").split(/ — | – /)[0].replace(/\s*\([^)]*(groep|klas|doorstroomtoets|po\b)[^)]*\)\s*$/i, "").replace(/\s*\+\s*/g, " en ").trim();
}

/**
 * De kaartjes voor "waar zijn jullie nu mee bezig bij <vak>?": bij geschiedenis de tijdvakken,
 * anders de leerpaden van dat vak voor deze groep. Elk kaartje: { id, label, emoji, pathId, stapIndexen? }.
 */
export function onderwerpenVoorVak(vak, groep, manifest = pathManifest) {
  const g = Number(groep);
  if (vak === "geschiedenis" && g >= 5) return TIJDVAKKEN;
  return padenVoorVak(vak, g, manifest);
}

/** Alleen de leerpaden van dit vak voor deze groep (ook voor het vakscherm, 27 okt 2026). */
export function padenVoorVak(vak, groep, manifest = pathManifest) {
  const g = Number(groep);
  const subj = vak === "wiskunde" ? "rekenen" : vak;
  return manifest
    .filter((p) => p.subject === subj && padBijGroep(p.level, g) && !/-nieuwkomers$/.test(p.id))
    .sort((a, b) => String(a.title).localeCompare(String(b.title), "nl"))
    .map((p) => ({ id: p.id, label: onderwerpLabel(p.title, subj), emoji: p.emoji || "📘", pathId: p.id }));
}

// Hoe een pad-titel het vak zelf kan noemen vóór het streepje ("Engels — eerste woorden …").
const VAK_NAMEN = {
  rekenen: /^(rekenen|wiskunde)$/i, taal: /^(taal|taal & lezen|nederlands)$/i, spelling: /^spelling$/i,
  "begrijpend-lezen": /^(begrijpend lezen|lezen)$/i, engels: /^(engels|english)$/i, natuur: /^(natuur|natuur & techniek|natuur en techniek)$/i,
  aardrijkskunde: /^(aardrijkskunde|topografie)$/i, geschiedenis: /^geschiedenis$/i, studievaardigheden: /^studievaardigheden$/i,
};

/** "Engels — eerste woorden en zinnetjes (groep 5)" → "Eerste woorden en zinnetjes" (alleen als het stuk vóór
 *  het streepje het vák is; "Klokkijken — analoog + digitaal" blijft "Klokkijken"). */
export function onderwerpLabel(title, vak = null) {
  const delen = String(title || "").split(/ — | – /);
  const isVak = vak && VAK_NAMEN[vak] ? VAK_NAMEN[vak].test(delen[0].trim()) : false;
  if (delen.length >= 2 && isVak) {
    const rest = delen.slice(1).join(" — ").replace(/\s*\([^)]*(groep|klas|doorstroomtoets|po\b)[^)]*\)\s*$/i, "").replace(/,?\s*Doorstroomtoets-stof$/i, "").trim();
    if (rest && !/^groep\s*\d/i.test(rest)) return rest.charAt(0).toUpperCase() + rest.slice(1);
  }
  return korteTitel(title);
}

/** Het kwartier-blokje: 5 vragen over wat de klas nu doet. */
export function schoolBlok(keuze, n = 5, groep = null) {
  if (!keuze || !keuze.pathId) return null;
  return {
    soort: "vragen", pathId: keuze.pathId, n, school: true, titel: `🏫 Nu op school: ${keuze.label}`,
    ...(keuze.stapIndexen ? { stapIndexen: keuze.stapIndexen } : {}),
    ...(keuze.zoek ? { zoek: keuze.zoek } : {}),
    ...(groep ? { groep } : {}),
  };
}
