import { useEffect, useState } from "react";
import supabase from "../supabase.js";
import { ensureSession } from "../auth.js";

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
      if (u) {
        supabase
          .from("subscriptions")
          .select("*")
          .eq("user_id", u.id)
          .single()
          .then(({ data }) => {
            if (data) setSubscription(data);
          })
          .catch(() => {});
        supabase
          .from("profiles")
          .select("*")
          .eq("id", u.id)
          .single()
          .then(({ data }) => {
            if (data?.display_name) setUserName(data.display_name);
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

  const handleGoogleLogin = () => {
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
