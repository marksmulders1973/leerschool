// Audit-1 (2026-05-13): subscription-hook. Tot PAYWALL_ACTIVE = true
// returnt iedereen `parent_pro` (alles gratis open).
//
// Bij PAYWALL_ACTIVE = true: leest `subscriptions`-tabel via Supabase
// (RLS: user reads own subscription) en cached in localStorage 10 min.

import { useEffect, useState } from "react";
import supabase from "../supabase.js";
import { PAYWALL_ACTIVE, TIERS, FEATURE_GATES } from "./config.js";

const CACHE_KEY = "lk_subscription_v1";
const CACHE_TTL_MS = 10 * 60 * 1000;

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts > CACHE_TTL_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {}
}

// Hoofdhook. Returnt:
//   { tier, isPremium, isPaid, paywallActive, expiresAt, loading }
export function useSubscription(authUser = null) {
  const [state, setState] = useState(() => {
    if (!PAYWALL_ACTIVE) {
      // Tijdens free-launch: iedereen gratis premium.
      return {
        tier: TIERS.PARENT_PRO,
        isPremium: true,
        isPaid: false,
        paywallActive: false,
        expiresAt: null,
        loading: false,
      };
    }
    // Probeer cache eerst.
    const cached = readCache();
    if (cached) return { ...cached, loading: false, paywallActive: true };
    return {
      tier: TIERS.FREE,
      isPremium: false,
      isPaid: false,
      paywallActive: true,
      expiresAt: null,
      loading: true,
    };
  });

  useEffect(() => {
    if (!PAYWALL_ACTIVE) return;
    if (!authUser?.id) {
      // Geen login → free-tier.
      setState({
        tier: TIERS.FREE,
        isPremium: false,
        isPaid: false,
        paywallActive: true,
        expiresAt: null,
        loading: false,
      });
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase
          .from("subscriptions")
          .select("tier, valid_until")
          .eq("user_id", authUser.id)
          .maybeSingle();
        if (cancelled) return;
        if (error || !data) {
          const fallback = {
            tier: TIERS.FREE,
            isPremium: false,
            isPaid: false,
            paywallActive: true,
            expiresAt: null,
          };
          writeCache(fallback);
          setState({ ...fallback, loading: false });
          return;
        }
        // Check geldig (niet verlopen).
        const valid = !data.valid_until || new Date(data.valid_until) > new Date();
        const tier = valid ? data.tier : TIERS.FREE;
        const isPremium = tier === TIERS.PARENT_PRO || tier === TIERS.TEACHER_PRO;
        const out = {
          tier,
          isPremium,
          isPaid: isPremium,
          paywallActive: true,
          expiresAt: data.valid_until || null,
        };
        writeCache(out);
        setState({ ...out, loading: false });
      } catch (err) {
        if (!cancelled) {
          setState({
            tier: TIERS.FREE,
            isPremium: false,
            isPaid: false,
            paywallActive: true,
            expiresAt: null,
            loading: false,
          });
        }
      }
    })();
    return () => { cancelled = true; };
  }, [authUser?.id]);

  return state;
}

// Helper voor gating-checks buiten een component-render (utility, niet hook).
// Returnt true als feature is toegestaan voor de current sub-state.
export function canUseFeature(featureName, subscription) {
  if (!PAYWALL_ACTIVE) return true;
  if (!subscription) return false;
  const gates = FEATURE_GATES[featureName];
  if (!gates) return true; // niet-gegate features = vrij
  return gates.includes(subscription.tier);
}

// Convenience-hook voor 1 feature.
export function useCanUseFeature(featureName, authUser = null) {
  const sub = useSubscription(authUser);
  return {
    allowed: canUseFeature(featureName, sub),
    paywallActive: sub.paywallActive,
    tier: sub.tier,
    loading: sub.loading,
  };
}
