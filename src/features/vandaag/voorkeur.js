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
// 14 okt 2026 (Deianera via Mark: "maar 5 keuzes en 3 aanvinken is weinig"): álle vakken die de app
// heeft, passend bij groep of klas, met twee lagen: gekozen (tot MAX_VAKKEN) en favoriet (tot
// MAX_FAVORIET, ster). Oude id's (rekenen/taal/werkwoorden/lezen/doorstroomtoets) blijven bestaan
// zodat bewaarde voorkeuren blijven werken. `po`/`vo` = voor welke schoolsoort de knop verschijnt;
// `alleenGroep` beperkt binnen de basisschool; `top` = staat in de ingeklapte lijst.
export const MAX_FAVORIET = 3;
export const MAX_VAKKEN = 10;
export const VOORKEUR_VAKKEN = [
  { id: "doorstroomtoets", label: "Doorstroomtoets-voorbereiding", alleenGroep: [7, 8], po: true, top: true },
  { id: "rekenen", label: "Rekenen", po: true, top: true },
  { id: "taal", label: "Taal en spelling", po: true, top: true },
  { id: "werkwoorden", label: "Werkwoorden", po: true, top: true },
  { id: "lezen", label: "Begrijpend lezen", po: true, top: true },
  { id: "dictee", label: "Dictee", po: true },
  { id: "tafels", label: "Tafels", po: true, alleenGroep: [3, 4, 5, 6] },
  { id: "engels", label: "Engels", po: true, vo: true, top: true },
  { id: "studievaardigheden", label: "Studievaardigheden", po: true, alleenGroep: [6, 7, 8] },
  { id: "natuur", label: "Natuur en techniek", po: true },
  { id: "aardrijkskunde", label: "Aardrijkskunde", po: true, vo: true },
  { id: "geschiedenis", label: "Geschiedenis", po: true, vo: true },
  { id: "wiskunde", label: "Wiskunde", vo: true, top: true },
  { id: "nederlands", label: "Nederlands", vo: true, top: true },
  { id: "frans", label: "Frans", vo: true },
  { id: "duits", label: "Duits", vo: true },
  { id: "biologie", label: "Biologie", vo: true, top: true },
  { id: "natuurkunde", label: "Natuurkunde", vo: true },
  { id: "scheikunde", label: "Scheikunde", vo: true },
  { id: "economie", label: "Economie", vo: true },
  { id: "maatschappijleer", label: "Maatschappijleer", vo: true },
  { id: "examens", label: "Examens oefenen", vo: true, alleenKlas: [3, 4, 5, 6] },
];

/** Knoppen voor dit niveau. `level` = "groep8", "groep12", "klas3|havo", "4" (VO) of "" (onbekend → basisschool). */
export function vakOptiesVoor(level = "", schoolType = "") {
  const s = String(level || "");
  const vo = /^klas/.test(s) || !!schoolType || /^[1-6]$/.test(s);
  const g = s === "groep12" ? 2 : (s.match(/^groep(\d)$/) || [])[1];
  const groep = g ? Number(g) : null;
  const k = (s.match(/^klas(\d)/) || s.match(/^(\d)$/) || [])[1];
  const klas = k ? Number(k) : null;
  return VOORKEUR_VAKKEN.filter((v) => {
    if (vo ? !v.vo : !v.po) return false;
    if (!vo && v.alleenGroep && groep && !v.alleenGroep.includes(groep)) return false;
    if (vo && v.alleenKlas && klas && !v.alleenKlas.includes(klas)) return false;
    return true;
  });
}

/**
 * Eén tik = gekozen, nog een tik = favoriet (ster), derde tik = weg.
 * Geeft { vakken, favoriet } terug; vakken bevat ook de favorieten (oude lezers blijven werken).
 */
export function wisselVakKeuze({ vakken = [], favoriet = [] }, id) {
  const inV = vakken.includes(id), inF = favoriet.includes(id);
  if (inF) return { vakken: vakken.filter((x) => x !== id), favoriet: favoriet.filter((x) => x !== id) };
  if (inV) {
    if (favoriet.length >= MAX_FAVORIET) return { vakken: vakken.filter((x) => x !== id), favoriet };
    return { vakken, favoriet: [...favoriet, id] };
  }
  if (vakken.length >= MAX_VAKKEN) return { vakken, favoriet };
  return { vakken: [...vakken, id], favoriet };
}

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
