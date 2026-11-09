// 📅 Weekplanner (idee 66, Mark 9 nov 2026: "leuk, bouw maar").
// Ouder of verzorger zet per dag (ma t/m zo) één kwartier klaar voor een gekoppeld kind: een gekozen les
// of "Charley kiest" (wat het lastigst ging). Het kind ziet alleen wat er vandaag klaarstaat.
//
// Opslag: tabel ouder_weekplan (uniek per link_id + dag). Ouder schrijft via RLS op eigen koppelingen;
// het kind leest en vinkt af via RPC's weekplan_voor_kind / weekplan_gedaan (kind_hoort_bij).
// "Gedaan" (herzien 9 nov avond): de dag telt zodra het kind die dag een kwartier oefende (per kind
// geteld, dailyGoal.kwartierVolVoor), de gekozen les afmaakt (LearnPath allDone), het klaargezette
// rondje "eerste 20 vragen" afrondt, of zelf afvinkt. Eerst telde een les alleen als het hele leerpad
// af was; 83 van de 193 aangeboden lessen duren langer dan een kwartier, dus het vinkje kwam zelden.
// Een les met path_id "startset:<groep>|<vak>" is de startset van dat vak (de eerste 20 vragen, 10 per
// keer): zo heeft ook groep 3-4, met weinig leerpaden, per vak iets te kiezen.
// Twee ouders: het kind ziet de plannen van alle ouder-koppelingen op het toestel.
// Meten: planner_open, planner_dag_gekozen {soort, vak}, planner_week_kopie, planner_kind_toon,
// planner_kind_start, planner_gedaan {soort, via}.

import supabase from "../supabase.js";
import { track } from "../utils.js";
import { linkIdVoor, oudersVoor } from "./koppeling.js";
import { kwartierVolVoor } from "./dailyGoal.js";
import { startsetSleutel, startsetVan } from "../features/learn/startsetsData.js";
import pathManifest from "../learnPaths/pathManifest.generated.json";

export const WEEKPLAN_EVENT = "lk-weekplan-changed";
const ping = () => { try { window.dispatchEvent(new CustomEvent(WEEKPLAN_EVENT)); } catch { /* */ } };

// ── Datums (lokale tijd, ISO "jjjj-mm-dd") ─────────────────────────────

export function isoDag(d) {
  const x = new Date(d);
  return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`;
}

export function vandaagIso(nu = new Date()) { return isoDag(nu); }

/** Maandag van de week waarin `datum` valt (lokale tijd). */
export function maandagVan(datum = new Date()) {
  const d = new Date(datum.getFullYear(), datum.getMonth(), datum.getDate());
  const wd = (d.getDay() + 6) % 7; // ma=0 … zo=6
  d.setDate(d.getDate() - wd);
  return d;
}

/** Zeven dagen vanaf maandag: [{ iso, kort: "ma", nr: 9, lang: "maandag 9 november" }]. */
export function weekDagen(maandag) {
  const KORT = ["ma", "di", "wo", "do", "vr", "za", "zo"];
  return KORT.map((kort, i) => {
    const d = new Date(maandag.getFullYear(), maandag.getMonth(), maandag.getDate() + i);
    return { iso: isoDag(d), kort, nr: d.getDate(), lang: d.toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long" }) };
  });
}

// ── Lesvoorstellen per vak en groep (uit het manifest) ──────────────────

export const PLANNER_VAKKEN = [
  { key: "rekenen", label: "Rekenen", subjects: ["rekenen"] },
  { key: "taal", label: "Taal", subjects: ["taal"] },
  { key: "spelling", label: "Spelling", subjects: ["spelling"] },
  { key: "lezen", label: "Lezen", subjects: ["begrijpend-lezen"] },
  { key: "meer", label: "Meer", subjects: ["studievaardigheden", "engels", "aardrijkskunde", "geschiedenis", "natuur", "cito"] },
];

/** "7" | "groep7" | 7 → 7; anders null. */
export function groepNr(g) {
  const m = String(g ?? "").match(/(\d)/);
  const n = m ? Number(m[1]) : null;
  return n && n >= 1 && n <= 8 ? n : null;
}

function levelPast(level, groep) {
  const m = String(level || "").match(/^groep(\d)(?:-(\d))?$/);
  if (!m) return false;
  const van = Number(m[1]), tot = Number(m[2] || m[1]);
  return groep >= van && groep <= tot;
}

const STARTSET_PREFIX = "startset:";
/** "startset:5|rekenen" → "5|rekenen"; een gewoon leerpad → null. */
export function startsetUit(pathId) {
  const s = String(pathId || "");
  return s.startsWith(STARTSET_PREFIX) && startsetVan(s.slice(STARTSET_PREFIX.length)) ? s.slice(STARTSET_PREFIX.length) : null;
}

/**
 * Keuzes voor een vak en groep, nieuwkomers-paden niet. Zonder groep: groep 6.
 * Bovenaan de startset(s) van dat vak (de eerste 20 vragen, 10 per keer), daarna de leerpaden met de
 * kortste eerst: de dag is een kwartier, dus wat in een kwartier past hoort bovenaan.
 */
export function lessenVoor(vakKey, groep, max = 12) {
  const vak = PLANNER_VAKKEN.find((v) => v.key === vakKey) || PLANNER_VAKKEN[0];
  const g = groepNr(groep) ?? 6;
  const sets = vak.subjects.map((subject) => {
    const sleutel = startsetSleutel(g, subject);
    const s = startsetVan(sleutel);
    return s ? { id: STARTSET_PREFIX + sleutel, titel: `De eerste 20 vragen: ${s.titel}`, emoji: s.emoji || "🎯", minuten: 10, regel: "10 vragen per keer", subject, startset: sleutel } : null;
  }).filter(Boolean);
  const paden = pathManifest
    .filter((p) => vak.subjects.includes(p.subject) && levelPast(p.level, g) && !/nieuwkomer|kleuter/.test(p.id))
    .sort((a, b) => (a.estimatedMinutes || 15) - (b.estimatedMinutes || 15) || (b.checkCount || 0) - (a.checkCount || 0))
    .slice(0, max)
    .map((p) => ({ id: p.id, titel: p.title, emoji: p.emoji || "📘", minuten: p.estimatedMinutes || 15, regel: `${p.estimatedMinutes || 15} min`, subject: p.subject }));
  return [...sets, ...paden];
}

export function lesVak(pathId) {
  const set = startsetUit(pathId);
  if (set) return set.split("|")[1] || null;
  return pathManifest.find((x) => x.id === pathId)?.subject || null;
}

export function lesTitel(pathId) {
  const p = pathManifest.find((x) => x.id === pathId);
  return p ? p.title : pathId;
}

// ── Ouder-kant (geauthenticeerd, RLS) ───────────────────────────────────

export async function haalWeekplan(linkId, vanIso, totIso) {
  if (!linkId) return [];
  const { data, error } = await supabase.from("ouder_weekplan")
    .select("id, dag, soort, path_id, titel, emoji, gedaan")
    .eq("link_id", linkId).gte("dag", vanIso).lte("dag", totIso).order("dag");
  if (error) return [];
  return Array.isArray(data) ? data : [];
}

/** keuze = { soort: "charley" } of { soort: "les", id, titel, emoji }. */
export async function zetDag(linkId, dagIso, keuze, vak = null) {
  if (!linkId || !dagIso || !keuze) return { ok: false };
  const rij = keuze.soort === "charley"
    ? { link_id: linkId, dag: dagIso, soort: "charley", path_id: null, titel: "Charley kiest", emoji: "✨", gedaan: false, gedaan_at: null }
    : { link_id: linkId, dag: dagIso, soort: "les", path_id: keuze.id, titel: keuze.titel || lesTitel(keuze.id), emoji: keuze.emoji || "📘", gedaan: false, gedaan_at: null };
  const { error } = await supabase.from("ouder_weekplan").upsert(rij, { onConflict: "link_id,dag" });
  if (error) return { ok: false, error };
  try { track("planner_dag_gekozen", { soort: rij.soort, vak: vak || null }); } catch { /* */ }
  ping();
  return { ok: true };
}

export async function wisDag(linkId, dagIso) {
  if (!linkId || !dagIso) return { ok: false };
  const { error } = await supabase.from("ouder_weekplan").delete().eq("link_id", linkId).eq("dag", dagIso);
  if (error) return { ok: false, error };
  try { track("planner_dag_gekozen", { soort: "vrij" }); } catch { /* */ }
  ping();
  return { ok: true };
}

/** Kopieer deze week naar de volgende (zelfde weekdagen, niets gedaan). Volgende week wordt precies
 *  gelijk: dagen die daar al stonden maar deze week vrij zijn, gaan weg (eerst schrijven, dan opruimen). */
export async function kopieerNaarVolgendeWeek(linkId, rijen) {
  if (!linkId || !rijen?.length) return { ok: false };
  const nieuw = rijen.map((r) => {
    const d = new Date(r.dag + "T12:00:00");
    d.setDate(d.getDate() + 7);
    return { link_id: linkId, dag: isoDag(d), soort: r.soort, path_id: r.path_id, titel: r.titel, emoji: r.emoji, gedaan: false, gedaan_at: null };
  });
  const { error } = await supabase.from("ouder_weekplan").upsert(nieuw, { onConflict: "link_id,dag" });
  if (error) return { ok: false, error };
  try {
    const week = weekDagen(maandagVan(new Date(nieuw[0].dag + "T12:00:00")));
    await supabase.from("ouder_weekplan").delete().eq("link_id", linkId)
      .gte("dag", week[0].iso).lte("dag", week[6].iso).not("dag", "in", `(${nieuw.map((r) => r.dag).join(",")})`);
  } catch { /* de kopie staat er; een oude dag te veel is geen ramp */ }
  try { track("planner_week_kopie", { dagen: nieuw.length }); } catch { /* */ }
  ping();
  return { ok: true };
}

// ── Kind-kant (op toestel, via RPC) ─────────────────────────────────────

/** Plannen van alle ouder-koppelingen van dit kind op dit toestel (bij twee ouders dus beide). */
export async function haalWeekplanVoorKind(naam) {
  const n = String(naam || "").trim();
  const ids = [...new Set([linkIdVoor(n), ...oudersVoor(n).map((o) => o.link_id)].filter(Boolean))];
  if (!ids.length) return [];
  const delen = await Promise.all(ids.map(async (id) => {
    try {
      const { data, error } = await supabase.rpc("weekplan_voor_kind", { p_link_id: id });
      return !error && Array.isArray(data) ? data : [];
    } catch { return []; }
  }));
  return delen.flat().sort((a, b) => String(a.dag).localeCompare(String(b.dag)));
}

/** Alles wat er vandaag staat (bij twee ouders kunnen dat er twee zijn). */
export function vandaagItems(rijen, nu = new Date()) {
  const v = vandaagIso(nu);
  return (rijen || []).filter((r) => r.dag === v);
}

/** Het item van vandaag (of null): eerst wat nog niet gedaan is. */
export function vandaagUitPlan(rijen, nu = new Date()) {
  const items = vandaagItems(rijen, nu);
  return items.find((r) => !r.gedaan) || items[0] || null;
}

/** Eén rij per dag voor het weekstrookje: een dag is pas groen als alles van die dag gedaan is. */
export function perDagUitPlan(rijen) {
  const uit = {};
  for (const r of rijen || []) {
    const al = uit[r.dag];
    if (!al || (al.gedaan && !r.gedaan)) uit[r.dag] = r;
  }
  return uit;
}

export async function markeerPlanGedaan(id, via = "kind", soort = null) {
  if (!id) return { ok: false };
  const { data, error } = await supabase.rpc("weekplan_gedaan", { p_id: id, p_gedaan: true });
  if (error || data?.ok === false) return { ok: false };
  try { track("planner_gedaan", { via, soort }); } catch { /* */ }
  ping();
  return { ok: true };
}

/** Na een afgemaakte les: staat die vandaag gepland, dan op gedaan. Stil falen. */
export async function lesAfVoorPlan(naam, pathId) {
  try {
    const items = vandaagItems(await haalWeekplanVoorKind(naam)).filter((r) => !r.gedaan && r.soort === "les" && r.path_id === pathId);
    for (const it of items) await markeerPlanGedaan(it.id, "les_af", "les");
  } catch { /* comfort, geen vereiste */ }
}

/**
 * Wat er vandaag nog open staat op gedaan zetten als het kind het verdiend heeft: een vol kwartier
 * vandaag (per kind geteld), of het klaargezette rondje "eerste 20 vragen" afgerond (`startsetKlaar` =
 * de sleutel van de startset waarvan het kwartier vandaag klaar is). Geeft terug of er iets veranderde.
 */
export async function werkPlanBij(naam, rijen, { startsetKlaar = null } = {}) {
  const open = vandaagItems(rijen).filter((r) => !r.gedaan);
  if (!open.length) return false;
  const vol = kwartierVolVoor(naam);
  let iets = false;
  for (const it of open) {
    const viaSet = !!startsetKlaar && startsetUit(it.path_id) === startsetKlaar;
    if (!vol && !viaSet) continue;
    const r = await markeerPlanGedaan(it.id, vol ? "kwartier" : "startset", it.soort);
    if (r.ok) iets = true;
  }
  return iets;
}

/** Het klaargezette rondje "eerste 20 vragen" is af (aangeroepen vanuit het kwartier). Stil falen. */
export async function startsetRondjeKlaar(naam, sleutel) {
  try {
    if (!naam || !sleutel) return;
    await werkPlanBij(naam, await haalWeekplanVoorKind(naam), { startsetKlaar: sleutel });
  } catch { /* de kaart op /mijn haalt het in */ }
}

/** Kwartier van vandaag vol voor het actieve profiel: wat er vandaag klaarstaat telt als gedaan. */
export async function kwartierVolVoorPlan() {
  try {
    const naam = JSON.parse(localStorage.getItem("ls_user") || "{}")?.name;
    if (!naam) return;
    await werkPlanBij(naam, await haalWeekplanVoorKind(naam));
  } catch { /* */ }
}
