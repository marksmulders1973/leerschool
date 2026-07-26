// Audit-1 (2026-05-13): subscription-hook. Tot PAYWALL_ACTIVE = true
// returnt iedereen `parent_pro` (alles gratis open).
//
// Bij PAYWALL_ACTIVE = true: leest `subscriptions`-tabel via Supabase
// (RLS: user reads own subscription) en cached in localStorage 10 min.

import { useEffect, useState } from "react";
import supabase from "../supabase.js";
import { PAYWALL_ACTIVE, TIERS, FEATURE_GATES } from "./config.js";
import { partnerProStatus, partnerFamilieTot } from "../features/referral/partnerCode.js";

// Partner-code-honorering (prijsplan Mark 25 jul 2026): een geclaimde
// partner-plek ('pro2027' in localStorage) geeft het Familie-niveau
// (parent_pro) gratis — tot PARTNER_PRO_TOT voor gewone partner-codes,
// BLIJVEND (geen einddatum) voor OOIEVAAR*-codes: dat is op 26 jul 2026
// schriftelijk toegezegd aan de gemeente Den Haag in het getekende
// "vriend van de Ooievaarspas"-formulier. Geldt ook zonder login (de
// garantie is apparaat-gebonden zolang er geen account-koppeling is).
// Pro voor leerkrachten (teacher_pro) valt hier bewust buiten: alleen
// het Familie-niveau is gratis, leerkracht-features blijven betaald.
function partnerGrant() {
  try {
    if (partnerProStatus() !== "pro2027") return null;
    const tot = partnerFamilieTot();
    if (tot && new Date(tot) <= new Date()) return null;
    return {
      tier: TIERS.PARENT_PRO,
      isPremium: true,
      isPaid: false,
      paywallActive: true,
      expiresAt: tot,
    };
  } catch {
    return null;
  }
}

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
      // Geen login → free-tier, tenzij dit apparaat een partner-plek heeft.
      const grant = partnerGrant();
      setState(grant ? { ...grant, loading: false } : {
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
          // Geen (geldig) abonnement → partner-plek honoreren, anders free.
          const fallback = partnerGrant() || {
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
        // Check geldig (niet verlopen). Verlopen abonnement valt terug op een
        // eventuele partner-plek (blijvend voor Ooievaarspas) vóór free.
        const valid = !data.valid_until || new Date(data.valid_until) > new Date();
        const grant = valid ? null : partnerGrant();
        const tier = valid ? data.tier : (grant ? grant.tier : TIERS.FREE);
        const isPremium = tier === TIERS.PARENT_PRO || tier === TIERS.TEACHER_PRO;
        const out = {
          tier,
          isPremium,
          isPaid: valid && isPremium,
          paywallActive: true,
          expiresAt: valid ? (data.valid_until || null) : (grant ? grant.expiresAt : null),
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
