// Profiles-repo: alle aanroepen op de `profiles`-tabel (gebruikers-metadata,
// streak-administratie, leerkracht-profielfoto/logo).
// Geëxtraheerd uit App.jsx op 2026-05-06 (P3b deel 3).

import supabase from "../../supabase.js";

/**
 * Lees streak + last-played-date van het profiel zodat de juiste
 * vervolg-streak kan worden berekend. Returnt null als profiel niet
 * bestaat of bij fout.
 */
export async function getStreakInfo(userId) {
  if (!userId) return null;
  try {
    const { data } = await supabase
      .from("profiles")
      .select("streak_days, last_played_date")
      .eq("id", userId)
      .single();
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
    await supabase.from("profiles").upsert({
      id: userId,
      display_name: displayName,
      level,
      role,
      school_type: schoolType || "",
    });
  } catch {}
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
