// 📅 Weekplanner (idee 66, Mark 9 nov 2026: "leuk, bouw maar").
// Ouder of verzorger zet per dag (ma t/m zo) één kwartier klaar voor een gekoppeld kind: een gekozen les
// of "Charley kiest" (wat het lastigst ging). Het kind ziet alleen wat er vandaag klaarstaat.
//
// Opslag: tabel ouder_weekplan (uniek per link_id + dag). Ouder schrijft via RLS op eigen koppelingen;
// het kind leest en vinkt af via RPC's weekplan_voor_kind / weekplan_gedaan (kind_hoort_bij).
// "Gedaan": een gekozen les zodra het kind die les afmaakt (LearnPath allDone) of zelf afvinkt;
// "Charley kiest" zodra het kwartier van die dag vol is (dailyGoal → kwartier_reached).
// Meten: planner_open, planner_dag_gekozen {soort, vak}, planner_week_kopie, planner_kind_toon,
// planner_kind_start, planner_gedaan {soort, via}.

import supabase from "../supabase.js";
import { track } from "../utils.js";
import { linkIdVoor } from "./koppeling.js";
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

/** Lessen voor een vak en groep, nieuwkomers-paden niet. Zonder groep: groep 6. */
export function lessenVoor(vakKey, groep, max = 12) {
  const vak = PLANNER_VAKKEN.find((v) => v.key === vakKey) || PLANNER_VAKKEN[0];
  const g = groepNr(groep) ?? 6;
  return pathManifest
    .filter((p) => vak.subjects.includes(p.subject) && levelPast(p.level, g) && !/nieuwkomer|kleuter/.test(p.id))
    .sort((a, b) => (b.checkCount || 0) - (a.checkCount || 0))
    .slice(0, max)
    .map((p) => ({ id: p.id, titel: p.title, emoji: p.emoji || "📘", minuten: p.estimatedMinutes || 15, subject: p.subject }));
}

export function lesVak(pathId) {
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

/** Kopieer deze week naar de volgende (zelfde weekdagen, niets gedaan). Overschrijft volgende week. */
export async function kopieerNaarVolgendeWeek(linkId, rijen) {
  if (!linkId || !rijen?.length) return { ok: false };
  const nieuw = rijen.map((r) => {
    const d = new Date(r.dag + "T12:00:00");
    d.setDate(d.getDate() + 7);
    return { link_id: linkId, dag: isoDag(d), soort: r.soort, path_id: r.path_id, titel: r.titel, emoji: r.emoji, gedaan: false, gedaan_at: null };
  });
  const { error } = await supabase.from("ouder_weekplan").upsert(nieuw, { onConflict: "link_id,dag" });
  if (error) return { ok: false, error };
  try { track("planner_week_kopie", { dagen: nieuw.length }); } catch { /* */ }
  ping();
  return { ok: true };
}

// ── Kind-kant (op toestel, via RPC) ─────────────────────────────────────

export async function haalWeekplanVoorKind(naam) {
  const linkId = linkIdVoor(String(naam || "").trim());
  if (!linkId) return [];
  const { data, error } = await supabase.rpc("weekplan_voor_kind", { p_link_id: linkId });
  if (error) return [];
  return Array.isArray(data) ? data : [];
}

/** Het item van vandaag (of null). */
export function vandaagUitPlan(rijen, nu = new Date()) {
  const v = vandaagIso(nu);
  return (rijen || []).find((r) => r.dag === v) || null;
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
    const item = vandaagUitPlan(await haalWeekplanVoorKind(naam));
    if (item && !item.gedaan && item.soort === "les" && item.path_id === pathId) await markeerPlanGedaan(item.id, "les_af", "les");
  } catch { /* comfort, geen vereiste */ }
}

/** Kwartier van vandaag vol: "Charley kiest" voor vandaag op gedaan. Naam uit het actieve profiel. */
export async function kwartierVolVoorPlan() {
  try {
    const naam = JSON.parse(localStorage.getItem("ls_user") || "{}")?.name;
    if (!naam) return;
    const item = vandaagUitPlan(await haalWeekplanVoorKind(naam));
    if (item && !item.gedaan && item.soort === "charley") await markeerPlanGedaan(item.id, "kwartier", "charley");
  } catch { /* */ }
}
