// A12 (10-agent circulariteit-review 2026-05-10) — Supabase Edge Function.
//
// Stuurt web push naar alle subscriptions met een seintje "Tijd om te oefenen".
//
// Vereiste env vars (Supabase Studio → Edge Functions → Secrets):
//   VAPID_PUBLIC_KEY     — public key (gen via: npx web-push generate-vapid-keys)
//   VAPID_PRIVATE_KEY    — private key (zelfde commando)
//   VAPID_SUBJECT        — bv. "mailto:mark-smulders@hotmail.com"
//   SUPABASE_URL         — auto, service-role-key gebruikt
//   SUPABASE_SERVICE_ROLE_KEY — auto in edge runtime
//
// Trigger:
//   - Handmatig: `supabase functions invoke send-due-reminders --no-verify-jwt`
//   - Cron: pg_cron job die de function aanroept (zie README op het einde)
//
// Tijdens 410-fout (subscription expired): rij verwijderen.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import webpush from "https://esm.sh/web-push@3.6.7";

interface PushSub {
  id: string;
  endpoint: string;
  p256dh: string;
  auth: string;
  player_name: string | null;
  user_id: string | null;
}

const VAPID_PUBLIC = Deno.env.get("VAPID_PUBLIC_KEY") || "";
const VAPID_PRIVATE = Deno.env.get("VAPID_PRIVATE_KEY") || "";
const VAPID_SUBJECT = Deno.env.get("VAPID_SUBJECT") || "mailto:noreply@leerkwartier.app";

webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC, VAPID_PRIVATE);

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

Deno.serve(async (req) => {
  // CORS preflight (handmatig invoke vanuit browser test)
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "authorization, content-type",
      },
    });
  }

  if (!VAPID_PUBLIC || !VAPID_PRIVATE) {
    return new Response(JSON.stringify({ error: "VAPID keys missing" }), { status: 500 });
  }

  const sb = createClient(SUPABASE_URL, SERVICE_KEY);
  const { data: subs, error } = await sb
    .from("push_subscriptions")
    .select("id, endpoint, p256dh, auth, player_name, user_id")
    .lt("failed_count", 5);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  const list = (subs || []) as PushSub[];
  const now = new Date().toISOString();

  // Body — voor MVP zelfde tekst voor iedereen.
  // Toekomstig: per-user query op spaced-rep dueCount + persoonlijke body.
  const payload = JSON.stringify({
    title: "Leerkwartier — kwartier voor je examen?",
    body: "Pak even 15 minuten — je herhalingen wachten op je.",
    url: "/",
    tag: "leerkwartier-daily",
  });

  let sent = 0;
  let removed = 0;
  for (const sub of list) {
    try {
      await webpush.sendNotification(
        { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
        payload
      );
      sent++;
      await sb.from("push_subscriptions")
        .update({ last_used_at: now, failed_count: 0 })
        .eq("id", sub.id);
    } catch (e: any) {
      const status = e?.statusCode;
      if (status === 404 || status === 410) {
        // Subscription expired — opruimen.
        await sb.from("push_subscriptions").delete().eq("id", sub.id);
        removed++;
      } else {
        await sb.from("push_subscriptions")
          .update({ failed_count: (sub as any).failed_count + 1 || 1 })
          .eq("id", sub.id);
      }
    }
  }

  return new Response(
    JSON.stringify({ ok: true, total: list.length, sent, removed }),
    { headers: { "Content-Type": "application/json" } },
  );
});
