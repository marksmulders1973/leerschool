// Auth-helpers voor Studiebol.
//
// Strategie (P1.3): élke bezoeker krijgt een Supabase auth-sessie, ook als
// ze nog geen Google-login hebben gedaan. Hierdoor kunnen we RLS-policies
// strikt op `auth.uid() = user_id` zetten en kan een 12-jarige met DevTools
// niet meer een ander z'n mastery saboteren.
//
// `signInAnonymously` is een Supabase-feature die in het dashboard
// (Authentication → Sign In / Up → Allow anonymous sign-ins) aan moet
// staan. Staat hij uit, dan faalt de call stilletjes en blijft de app
// werken zoals voorheen — maar dan zonder strikte RLS-bescherming.

import supabase from "./supabase.js";

/**
 * Garandeert een actieve Supabase-sessie.
 * - Heeft de gebruiker al een sessie (Google/anon)? → die wordt teruggegeven.
 * - Anders: probeer anonymous sign-in.
 *
 * Returnt de sessie of null bij falen. Crasht nooit.
 */
export async function ensureSession() {
  try {
    const { data: { session } = {} } = (await supabase.auth?.getSession?.()) || {};
    if (session) return session;
  } catch {
    // ignore
  }

  try {
    const { data, error } = (await supabase.auth?.signInAnonymously?.()) || {};
    if (error) {
      // Meest voorkomende oorzaak: feature niet ingeschakeld in Supabase dashboard.
      // Dit is geen blocker — de app blijft draaien zonder uid, maar dan
      // worden de strikte RLS-policies op writes geblokkeerd voor anon.
      console.warn(
        "[auth] Anonymous sign-in niet beschikbaar — schakel 'Allow anonymous sign-ins' in Supabase dashboard in voor strikte RLS:",
        error.message
      );
      return null;
    }
    return data?.session || null;
  } catch (e) {
    console.warn("[auth] Anonymous sign-in faalde:", e?.message || e);
    return null;
  }
}

/**
 * Returnt de huidige user-id (uuid string) of null.
 * Veilig om vaak aan te roepen — caching gebeurt door Supabase zelf.
 */
export async function getCurrentUserId() {
  try {
    const { data: { user } = {} } = (await supabase.auth?.getUser?.()) || {};
    return user?.id || null;
  } catch {
    return null;
  }
}

/**
 * Synchroon variant: leest user-id uit huidige sessie zonder netwerk.
 * Returnt null als getSession nog niet voltooid is bij eerste mount.
 * Voor zekerheid bij hot path: gebruik getCurrentUserId().
 */
export function getCurrentUserIdSync() {
  try {
    // Supabase v2 cachet de sessie in localStorage onder een key.
    // We lezen die niet direct — getSession() is async en cached.
    return null;
  } catch {
    return null;
  }
}

/**
 * Was deze sessie een anonymous sign-in?
 * Handig om straks de upgrade-flow te tonen ("klik om je voortgang te bewaren").
 */
export async function isAnonymousSession() {
  try {
    const { data: { user } = {} } = (await supabase.auth?.getUser?.()) || {};
    return user?.is_anonymous === true;
  } catch {
    return false;
  }
}
