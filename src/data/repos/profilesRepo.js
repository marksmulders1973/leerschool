// Profiles-repo: alle aanroepen op de `profiles`-tabel (gebruikers-metadata,
// streak-administratie, leerkracht-profielfoto/logo).
// Geëxtraheerd uit App.jsx op 2026-05-06 (P3b deel 3).

import supabase from "../../supabase.js";
import { getBron } from "../../features/tracking/bron.js";

/**
 * Lees streak + last-played-date van het profiel zodat de juiste
 * vervolg-streak kan worden berekend. Returnt null als profiel niet
 * bestaat of bij fout.
 */
export async function getStreakInfo(userId) {
  if (!userId) return null;
  try {
    // maybeSingle i.p.v. single (kindertest 12 jul): bij een nog-niet-bestaand
    // of door RLS-onzichtbaar profiel gaf .single() een 406 Not Acceptable in
    // de console. maybeSingle geeft netjes null terug zonder foutmelding.
    const { data } = await supabase
      .from("profiles")
      .select("streak_days, last_played_date")
      .eq("id", userId)
      .maybeSingle();
    return data || null;
  } catch {
    return null;
  }
}

/**
 * Schrijf de nieuwe streak + last_played_date weg.
 */
export async function updateStreak({ userId, streak, date }) {
  if (!userId) return;
  try {
    await supabase
      .from("profiles")
      .update({ streak_days: streak, last_played_date: date })
      .eq("id", userId);
  } catch {}
}

/**
 * Sla naam + niveau + rol + schooltype op het profiel op (upsert: bij
 * eerste keer maakt 'm aan, anders update). Aangeroepen vanaf de naam-
 * input op de homepage zodra de gebruiker zijn keuze bevestigt.
 */
export async function upsertProfile({ userId, displayName, level, role, schoolType }) {
  if (!userId) return;
  try {
    const row = {
      id: userId,
      display_name: displayName,
      level,
      role,
      school_type: schoolType || "",
    };
    // Bron-stempel (4 aug 2026): waar kwam dit account vandaan? Eenmalig —
    // alleen zetten als het profiel nog geen bron heeft, zodat een later
    // herhaalbezoek de oorspronkelijke bron nooit overschrijft.
    try {
      const bron = getBron();
      if (bron?.bron) {
        const { data } = await supabase
          .from("profiles")
          .select("signup_bron")
          .eq("id", userId)
          .maybeSingle();
        if (!data?.signup_bron) {
          row.signup_bron = bron.bron;
          row.signup_bron_meta = { landing: bron.landing, referrer: bron.referrer, ts: bron.ts };
        }
      }
    } catch { /* bron-stempel mag het profiel-opslaan nooit blokkeren */ }
    await supabase.from("profiles").upsert(row);
  } catch {}
}

/**
 * Update alléén de rol (28 aug 2026): wie op het ouder-dashboard inlogt
 * zonder rol wordt "ouder" — zónder display_name/level/school_type aan te
 * raken (een volledige upsert zou die velden leegtrekken).
 */
export async function updateProfileRole(userId, role) {
  if (!userId || !role) return;
  try {
    // Upsert, geen update: bij een állereerste login bestaat de profielrij
    // nog niet (geen DB-trigger op auth.users — de app maakt profielen aan)
    // en zou een kale update stilletjes niets doen.
    await supabase.from("profiles").upsert({ id: userId, role });
  } catch { /* niet fataal */ }
}

/**
 * Hernoem de speler in servervoortgang (28 aug 2026, Mark-wens: "onder profiel
 * mijn naam kunnen veranderen"). Best-effort en strikt op eigen user_id — een
 * anonieme naamgenoot elders wordt dus nooit meegetrokken. Een botsing met de
 * unique-index (nieuwe naam had al rijen) laat die tabel stil ongemoeid.
 */
export async function renamePlayerData(userId, oudeNaam, nieuweNaam) {
  if (!userId || !oudeNaam || !nieuweNaam || oudeNaam === nieuweNaam) return;
  for (const tabel of ["topic_mastery", "learn_progress", "leaderboard"]) {
    try {
      await supabase.from(tabel).update({ player_name: nieuweNaam }).eq("user_id", userId).eq("player_name", oudeNaam);
    } catch { /* best-effort */ }
  }
  try {
    // Ouder-koppeling volgt mee, anders ziet thuis opeens geen voortgang meer.
    await supabase.from("parent_child_links").update({ child_name: nieuweNaam }).eq("child_user_id", userId).eq("child_name", oudeNaam);
  } catch { /* best-effort */ }
}

/**
 * Update alleen de school_logo_url voor een leerkracht-profiel.
 */
export async function updateSchoolLogo({ userId, logoUrl }) {
  if (!userId) return;
  try {
    await supabase
      .from("profiles")
      .update({ school_logo_url: logoUrl })
      .eq("id", userId);
  } catch {}
}
