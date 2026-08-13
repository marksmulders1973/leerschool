// 💛→🐾 "De maker heeft geantwoord op jouw tip!" (idee #36, Mark-go 13 aug).
// Sluit de lus van het wensenbord: een kind stuurt een wens in (zelf op /tips
// of via Charley, v277), Mark antwoordt met de 💛 Dank-van-de-maker-knop —
// en het maatje vertelt het bij het volgende gesprek, zodat het kind het
// antwoord niet hoeft te "toevallig vinden". Gezien = één keer melden
// (localStorage-stempel per speler), daarna stil.

import supabase from "../supabase.js";
import { track } from "../utils.js";

const sleutel = (s) => `lk_makerreply_gezien_${String(s || "").trim().toLowerCase() || "gast"}`;

function laatstGezien(speler) {
  try { return localStorage.getItem(sleutel(speler)) || ""; } catch { return ""; }
}

export function markeerGezien(speler, ts) {
  try { localStorage.setItem(sleutel(speler), String(ts || "")); } catch { /* */ }
}

// Veilig in een Supabase-or()-filter: komma's en haakjes breken de syntax,
// en % en _ zijn ilike-wildcards (review 13 aug: naam "%a%" zou anders op
// álle namen matchen) — die strippen we er ook uit.
const filterVeilig = (s) => String(s || "").replace(/[,()"%_*]/g, "").trim();

/**
 * Is er een (nieuw) maker-antwoord op een tip van deze speler?
 * Matcht op ingelogd account én op de naam die het kind op het bord gebruikte.
 * Geeft { tekst, ts } terug voor het maatje, of null.
 */
export async function checkNieuwMakerAntwoord(speler) {
  // speler mag een string of lijstje namen zijn (profielnaam + roepnaam —
  // een kind gebruikt op het bord niet altijd dezelfde naam).
  const namen = (Array.isArray(speler) ? speler : [speler]).map(filterVeilig).filter(Boolean);
  // De actieve profielnaam altijd meenemen (App.jsx houdt lk_namen bij) —
  // het kind kan op het bord een andere naam gebruiken dan bij het maatje.
  try {
    const ln = JSON.parse(localStorage.getItem("lk_namen") || "[]");
    const eerste = filterVeilig(ln?.[0]);
    if (eerste && !namen.some((n) => n.toLowerCase() === eerste.toLowerCase())) namen.push(eerste);
  } catch { /* */ }
  if (!namen.length) return null;
  const naam = namen[0];
  try {
    const { data: sess } = await supabase.auth.getSession();
    const uid = sess?.session?.user?.id || null;
    const of = namen.map((n) => `display_name.ilike.${n}`);
    // Na goedkeuring wordt de bord-naam "gebruiker X." (privacy 13 aug) — de
    // naam-match hierboven vindt die niet meer. Voor niet-ingelogde kinderen
    // matchen we daarom óók op de voorletter-vorm; kleine kans op een
    // naamgenoot-match, maar het alternatief is dat het maatje het antwoord
    // nooit meldt. Ingelogde kinderen matchen exact via user_id.
    if (!uid && naam) of.push(`display_name.ilike.gebruiker ${naam[0].toUpperCase()}.`);
    if (uid) of.push(`user_id.eq.${uid}`);
    const { data: eigen } = await supabase
      .from("wishes")
      .select("id")
      .is("parent_id", null)
      .or(of.join(","))
      .limit(20);
    const ids = (eigen || []).map((w) => w.id);
    if (!ids.length) return null;

    const { data: replies } = await supabase
      .from("wishes")
      .select("message, parent_id, created_at")
      .in("parent_id", ids)
      .eq("is_maker", true)
      .eq("status", "approved")
      .order("created_at", { ascending: false })
      .limit(1);
    const r = replies?.[0];
    if (!r) return null;
    // Als tijd vergelijken, niet als string (review 13 aug: formaat-verschil
    // tussen Supabase en localStorage maakte de string-vergelijking onbetrouwbaar).
    const gezien = Date.parse(laatstGezien(speler)) || 0;
    if ((Date.parse(r.created_at) || 0) <= gezien) return null;

    const kort = String(r.message || "").replace(/\s+/g, " ").slice(0, 110);
    return {
      ts: r.created_at,
      tekst: `Psst… de maker heeft geantwoord op jouw tip! 🐾 Hij schreef: "${kort}${(r.message || "").length > 110 ? "…" : ""}" — kijk maar op het Tips-bord!`,
    };
  } catch {
    return null; // stil falen — de chat mag hier nooit op wachten of breken
  }
}

/** Melden + meteen als gezien stempelen + meten. Voor gebruik in de chats. */
export async function makerAntwoordMelding(speler, bron) {
  const r = await checkNieuwMakerAntwoord(speler);
  if (!r) return null;
  markeerGezien(speler, r.ts);
  try { track("maker_antwoord_gemeld", { bron }); } catch { /* */ }
  return r.tekst;
}
