// 🏠 Gezinsstart-voorkeur op het kind-toestel (30 sep 2026).
//
// De ouder of verzorger kiest in de Gezinsstart waar de eerste twee maanden de
// nadruk op ligt: {"vakken": ["rekenen", ...], "vrij": "klokkijken",
// "tot": "2026-11-25", "app_kiest": false}. Dat staat op de koppeling
// (parent_child_links.voorkeur) en wordt hier per kindnaam op het toestel
// bewaard, zodat de Vandaag-motor 'm zonder wachten kan lezen. Bestaat er een
// ouder-koppeling (link_id), dan verversen we 'm via voor_jou_voorkeur.
//
// Opslag: localStorage "lk_voorkeur" = { "<naam lower>": { groep, voorkeur, at } }

import supabase from "../../supabase.js";
import { linkIdVoor } from "../../shared/koppeling.js";

const KEY = "lk_voorkeur";
export const VOORKEUR_EVENT = "lk-voorkeur-changed";
export const VOORKEUR_VAKKEN = [
  { id: "doorstroomtoets", label: "Doorstroomtoets-voorbereiding", alleenGroep: [7, 8] },
  { id: "rekenen", label: "Rekenen" },
  { id: "taal", label: "Taal en spelling" },
  { id: "werkwoorden", label: "Werkwoorden" },
  { id: "lezen", label: "Begrijpend lezen" },
];

const sleutel = (naam) => String(naam || "").trim().toLowerCase();
function lees() {
  try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch { return {}; }
}

/** { groep, voorkeur } voor deze naam op dit toestel, of null. */
export function leesVoorkeur(naam) {
  const k = sleutel(naam);
  if (!k) return null;
  const v = lees()[k];
  return v && (v.voorkeur || v.groep) ? v : null;
}

export function bewaarVoorkeur(naam, { groep = null, voorkeur = null } = {}) {
  const k = sleutel(naam);
  if (!k) return;
  const alles = lees();
  alles[k] = { groep: groep || alles[k]?.groep || null, voorkeur: voorkeur ?? alles[k]?.voorkeur ?? null, at: Date.now() };
  try { localStorage.setItem(KEY, JSON.stringify(alles)); } catch { /* */ }
  try { window.dispatchEvent(new CustomEvent(VOORKEUR_EVENT)); } catch { /* */ }
}

/** Verse voorkeur van de server (alleen als deze naam een ouder-koppeling heeft). */
export async function ververseVoorkeur(naam) {
  const linkId = linkIdVoor(naam);
  if (!linkId) return leesVoorkeur(naam);
  try {
    const { data, error } = await supabase.rpc("voor_jou_voorkeur", { p_link_id: linkId });
    if (error || !data) return leesVoorkeur(naam);
    bewaarVoorkeur(naam, { groep: data.groep || null, voorkeur: data.voorkeur || null });
    return leesVoorkeur(naam);
  } catch { return leesVoorkeur(naam); }
}

/** Datum "tot" van de voorkeur: standaard twee maanden vanaf vandaag. */
export function standaardTot(vanaf = new Date()) {
  const d = new Date(vanaf.getFullYear(), vanaf.getMonth() + 2, vanaf.getDate());
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`; // lokale datum, geen UTC-verschuiving
}

/** Korte tekst voor de ouder-kaart: "Nadruk tot 25 nov: rekenen, werkwoorden". */
export function voorkeurSamenvatting(voorkeur) {
  if (!voorkeur) return "";
  if (voorkeur.app_kiest) return "De app kiest wat er aan de beurt is.";
  const labels = (voorkeur.vakken || []).map((id) => (VOORKEUR_VAKKEN.find((v) => v.id === id)?.label || id).toLowerCase());
  if (voorkeur.vrij) labels.push(String(voorkeur.vrij).trim());
  if (!labels.length) return "De app kiest wat er aan de beurt is.";
  const tot = voorkeur.tot ? new Date(voorkeur.tot) : null;
  const totTekst = tot && !isNaN(tot.getTime()) ? ` tot ${tot.toLocaleDateString("nl-NL", { day: "numeric", month: "short" })}` : "";
  return `Nadruk${totTekst}: ${labels.join(", ")}`;
}
