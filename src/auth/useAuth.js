import { useEffect, useState } from "react";
import supabase from "../supabase.js";
import { ensureSession } from "../auth.js";
import { signInWithGoogleIdToken } from "./googleSignIn.js";
import { initDailyGoalSync, stopDailyGoalSync } from "../shared/dailyGoal.js";

// Auth-state + bootstrap. Élke bezoeker krijgt een sessie (anonymous sign-in
// als nog geen Google-login), zodat RLS strikt op user_id kan en geen RLS-fails
// optreden. Bij Google-login wordt het profiel-record uit Supabase geladen,
// of (als het profiel nog leeg is) localStorage als fallback.
//
// Returns alle state + setters (App.jsx gebruikt sommige setters direct vanuit
// onboarding/role-flow) plus handleGoogleLogin en logout.
export function useAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [role, setRole] = useState(null);
  const [userName, setUserName] = useState("");
  const [userLevel, setUserLevel] = useState("");
  const [userSchoolType, setUserSchoolType] = useState("");
  const [streak, setStreak] = useState(0);
  const [subscription, setSubscription] = useState({ tier: "free" });
  const [schoolLogoUrl, setSchoolLogoUrl] = useState("");

  useEffect(() => {
    let cancelled = false;
    ensureSession()
      .then((session) => {
        if (cancelled) return;
        if (session?.user) setAuthUser(session.user);
      })
      .catch(() => {});
    supabase.auth
      ?.getSession?.()
      .then(({ data: { session } = {} } = {}) => {
        if (session?.user) setAuthUser(session.user);
      })
      .catch(() => {});
    const sub = supabase.auth?.onAuthStateChange?.((_event, session) => {
      const u = session?.user ?? null;
      setAuthUser(u);
      if (!u) {
        // SIGNED_OUT / verlopen token / account-wissel in ander tabblad: zonder
        // deze reset bleef naam/level/streak/subscription van de vórige
        // gebruiker staan — zichtbaar op gedeelde huishoud-apparaten (kind B
        // zag data van kind A). Ook de cloud-sync stoppen zodat de heartbeat
        // niet naar het oude profiel blijft schrijven. (bug-jacht 2026-07-31)
        setUserName("");
        setUserLevel("");
        setUserSchoolType("");
        setRole(null);
        setStreak(0);
        setSubscription({ tier: "free" });
        setSchoolLogoUrl("");
        stopDailyGoalSync();
        return;
      }
      if (u) {
        supabase
          .from("subscriptions")
          .select("*")
          .eq("user_id", u.id)
          .maybeSingle()
          .then(({ data }) => {
            if (data) setSubscription(data);
          })
          .catch(() => {});
        supabase
          .from("profiles")
          .select("*")
          .eq("id", u.id)
          .maybeSingle()
          .then(({ data }) => {
            // A8.3: kwartier-streak + dagdoel cross-device mergen (het
            // profiel is hier tóch al opgehaald — geen extra roundtrip).
            initDailyGoalSync(u.id, data);
            if (data?.display_name) setUserName(data.display_name);
            // Huishoud-apparaat zelf markeren (29 jul): het dagrapport telt via
            // de view events_echt — zonder deze markering vervuilen eigen
            // gezins-sessies de Noord-ster-metric. Markeert alléén de eigen uid.
            try {
              const naam = (data?.display_name || "").trim().toLowerCase();
              if (/^(mark|brian|deianera|olivia)$|^test|tester$/.test(naam)) {
                const uid = localStorage.getItem("lk_uid");
                if (uid) supabase.rpc("mark_household_uid", { p_uid: uid, p_label: naam }).then(() => {}).catch(() => {});
              }
            } catch { /* markering is een extraatje */ }
            if (data?.level) setUserLevel(data.level);
            if (data?.school_type) setUserSchoolType(data.school_type);
            if (data?.streak_days) setStreak(data.streak_days);
            if (data?.school_logo_url) setSchoolLogoUrl(data.school_logo_url);
            if (data?.role) {
              setRole(data.role);
            } else {
              const googleName = u.user_metadata?.full_name || u.user_metadata?.name || "";
              if (googleName) setUserName(googleName);
              try {
                const saved = JSON.parse(localStorage.getItem("ls_user") || "{}");
                if (saved.role && saved.name) {
                  setRole(saved.role);
                  if (saved.level) setUserLevel(saved.level);
                  if (saved.schoolType) setUserSchoolType(saved.schoolType);
                  supabase
                    .from("profiles")
                    .upsert({
                      id: u.id,
                      display_name: saved.name,
                      level: saved.level || "",
                      role: saved.role,
                    })
                    .then(() => {})
                    .catch(() => {});
                }
              } catch {}
            }
          })
          .catch(() => {});
      }
    });
    return () => {
      cancelled = true;
      sub?.data?.subscription?.unsubscribe?.();
    };
  }, []);

  const handleGoogleLogin = async () => {
    // Probeer eerst de GIS-popup-flow (geen 'Doorgaan naar supabase.co'-URL).
    // Faalt 'ie (third-party cookies geblokt, prompt te vaak gedismissed,
    // FedCM uitgeschakeld, etc.) → val terug op de oude OAuth-redirect-flow,
    // dan werkt inloggen in elk geval — wel weer met de Supabase-URL.
    try {
      await signInWithGoogleIdToken();
      return;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("[google-signin] popup-flow gefaald, val terug op redirect:", e?.message || e);
    }
    // Onthoud vóór de redirect waar de gebruiker was (28 aug 2026): Supabase
    // stuurt na de Google-login altijd terug naar de Site URL ("/"), waardoor
    // een ouder die op /ouder inlogde op de kale homepage strandde en opnieuw
    // moest zoeken. App.jsx leest deze sleutel bij de koude start en zet de
    // gebruiker direct terug op de pagina waar hij inlogde.
    try {
      localStorage.setItem("lk_login_terug", JSON.stringify({ p: window.location.pathname, t: Date.now() }));
    } catch { /* niet fataal */ }
    supabase.auth?.signInWithOAuth?.({
      provider: "google",
      options: { redirectTo: window.location.origin },
    });
  };

  const logout = () => {
    supabase.auth?.signOut?.();
    setAuthUser(null);
    setUserName("");
    setUserLevel("");
    setUserSchoolType("");
    setRole(null);
    // Volledige reset (streak/subscription/schoolLogo misten eerder → bleven
    // van de vorige gebruiker hangen) + cloud-sync stoppen. (bug-jacht 2026-07-31)
    setStreak(0);
    setSubscription({ tier: "free" });
    setSchoolLogoUrl("");
    stopDailyGoalSync();
  };

  return {
    authUser,
    setAuthUser,
    role,
    setRole,
    userName,
    setUserName,
    userLevel,
    setUserLevel,
    userSchoolType,
    setUserSchoolType,
    streak,
    setStreak,
    subscription,
    setSubscription,
    schoolLogoUrl,
    setSchoolLogoUrl,
    handleGoogleLogin,
    logout,
  };
}
