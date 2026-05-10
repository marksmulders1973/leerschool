// A12 (10-agent circulariteit-review 2026-05-10) — Web Push opt-in / subscribe / unsubscribe.
//
// Flow:
// 1. isPushSupported() — check browser-support
// 2. getPermissionState() — "granted" / "denied" / "default" / "unsupported"
// 3. enablePush(playerName, userId) — vraagt toestemming + maakt subscription + saveert in Supabase
// 4. disablePush(playerName) — unsubscribe + verwijder uit Supabase
//
// VAPID public key komt uit Vite env: VITE_VAPID_PUBLIC_KEY
// (Mark genereert eenmalig via: npx web-push generate-vapid-keys)

import supabase from "../supabase";

export function isPushSupported() {
  return typeof window !== "undefined"
    && "serviceWorker" in navigator
    && "PushManager" in window
    && "Notification" in window;
}

export function getPermissionState() {
  if (!isPushSupported()) return "unsupported";
  return Notification.permission; // granted | denied | default
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
  return outputArray;
}

async function getActiveRegistration() {
  const reg = await navigator.serviceWorker.ready;
  return reg;
}

/** Vraagt toestemming + maakt subscription + saveert in Supabase.
 *  Returnt: { ok: true } of { ok: false, reason: string } */
export async function enablePush({ playerName, userId } = {}) {
  if (!isPushSupported()) return { ok: false, reason: "unsupported" };

  const vapidKey = import.meta.env.VITE_VAPID_PUBLIC_KEY;
  if (!vapidKey) return { ok: false, reason: "no-vapid-key" };

  const perm = await Notification.requestPermission();
  if (perm !== "granted") return { ok: false, reason: perm };

  try {
    const reg = await getActiveRegistration();
    let sub = await reg.pushManager.getSubscription();
    if (!sub) {
      sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidKey),
      });
    }
    const json = sub.toJSON();
    const row = {
      user_id: userId || null,
      player_name: playerName || null,
      endpoint: json.endpoint,
      p256dh: json.keys?.p256dh || "",
      auth: json.keys?.auth || "",
      user_agent: navigator.userAgent.slice(0, 240),
      last_used_at: new Date().toISOString(),
    };
    // Upsert op endpoint (uniek). Bij anonieme gebruikers zonder user_id
    // wordt de rij door RLS-policy "anon insert" toegelaten.
    const { error } = await supabase
      .from("push_subscriptions")
      .upsert(row, { onConflict: "endpoint" });
    if (error) {
      console.warn("[push] upsert error", error);
      return { ok: false, reason: "supabase-error" };
    }
    return { ok: true };
  } catch (e) {
    console.warn("[push] subscribe error", e);
    return { ok: false, reason: "subscribe-error" };
  }
}

/** Unsubscribe in browser + verwijder rij in Supabase. */
export async function disablePush({ playerName } = {}) {
  if (!isPushSupported()) return { ok: false, reason: "unsupported" };
  try {
    const reg = await getActiveRegistration();
    const sub = await reg.pushManager.getSubscription();
    if (sub) {
      const endpoint = sub.endpoint;
      await sub.unsubscribe();
      // Verwijder uit Supabase op endpoint.
      await supabase.from("push_subscriptions").delete().eq("endpoint", endpoint);
    } else if (playerName) {
      await supabase.from("push_subscriptions").delete().eq("player_name", playerName);
    }
    return { ok: true };
  } catch (e) {
    console.warn("[push] unsubscribe error", e);
    return { ok: false, reason: "unsubscribe-error" };
  }
}

/** Geeft true als deze browser/gebruiker een actieve subscription heeft. */
export async function hasActiveSubscription() {
  if (!isPushSupported() || Notification.permission !== "granted") return false;
  try {
    const reg = await getActiveRegistration();
    const sub = await reg.pushManager.getSubscription();
    return !!sub;
  } catch {
    return false;
  }
}
