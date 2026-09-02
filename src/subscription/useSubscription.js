// Audit-1 (2026-05-13): subscription-hook. Tot PAYWALL_ACTIVE = true
// returnt iedereen `parent_pro` (alles gratis open).
//
// Bij PAYWALL_ACTIVE = true: leest `subscriptions`-tabel via Supabase
// (RLS: user reads own subscription) en cached in localStorage 10 min.

import { useEffect, useState } from "react";
import supabase from "../supabase.js";
import { PAYWALL_ACTIVE, TIERS, FEATURE_GATES } from "./config.js";
import { haalPartnerRecht, partnerRechtCache } from "../features/referral/partnerCode.js";

// Partner-code-honorering (prijsplan Mark 25 jul 2026): een geclaimde
// partner-plek geeft het Familie-niveau (parent_pro) gratis — tot
// partner_codes.familie_tot (31-12-2027 voor gewone codes), BLIJVEND (null)
// voor OOIEVAAR*-codes: dat is op 26 jul 2026 schriftelijk toegezegd aan de
// gemeente Den Haag in het getekende "vriend van de Ooievaarspas"-formulier.
// F2 (Fable-review 2 sep 2026): het recht komt van de SERVER
// (RPC mijn_partner_recht, gebonden aan het (anonieme) Supabase-account +
// oude apparaat-claims), niet meer uit twee localStorage-sleutels — die
// waren in DevTools te zetten. Werkt ook zonder Google-login: elke bezoeker
// heeft een anonieme sessie. Pro voor leerkrachten (teacher_pro) valt hier
// bewust buiten: alleen het Familie-niveau is gratis.
function grantVanRecht(recht) {
  if (!recht || !recht.recht) return null;
  const tot = recht.blijvend ? null : (recht.familie_tot || null);
  if (tot && new Date(tot) < new Date(new Date().toDateString())) return null;
  return {
    tier: TIERS.PARENT_PRO,
    isPremium: true,
    isPaid: false,
    paywallActive: true,
    expiresAt: tot,
  };
}
// Synchroon (initial state / offline): laatste server-bevestigde stand.
function partnerGrant() {
  try { return grantVanRecht(partnerRechtCache()); } catch { return null; }
}
// Asynchroon: server vragen (10-min-cache in partnerCode.js).
async function partnerGrantServer() {
  try { return grantVanRecht(await haalPartnerRecht()); } catch { return partnerGrant(); }
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
    let cancelled = false;
    if (!authUser?.id) {
      // Geen login → free-tier, tenzij de server een partner-plek voor dit
      // apparaat/account kent (F2: server-bevestigd, niet localStorage).
      partnerGrantServer().then((grant) => {
        if (cancelled) return;
        setState(grant ? { ...grant, loading: false } : {
          tier: TIERS.FREE,
          isPremium: false,
          isPaid: false,
          paywallActive: true,
          expiresAt: null,
          loading: false,
        });
      });
      return () => { cancelled = true; };
    }

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
          const fallback = (await partnerGrantServer()) || {
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
        const grant = valid ? null : await partnerGrantServer();
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
