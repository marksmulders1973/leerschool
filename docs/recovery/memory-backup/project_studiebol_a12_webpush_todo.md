---
name: A12 Web Push — Mark's eenmalige to-do na deploy
description: Web Push code is gebouwd (sw.js, pushSubscription.js, edge function, migration). Mark moet 6 stappen handmatig: VAPID-keys, env vars, migration, deploy, cron, privacy-tekst. Pas dán werkt het live.
type: project
originSessionId: 117df0ef-b194-40f2-8e60-f054bcb3b40a
---
# A12 Web Push — wat Mark nog moet doen (2026-05-10)

Code volledig gebouwd en gepushd in commit d20ab74. Werkt nog NIET live —
zonder VAPID keys + edge function deploy gebeurt er niets.

## Mark's 6 stappen (~30 min)

1. **Genereer VAPID keys** lokaal:
   ```bash
   npx web-push generate-vapid-keys
   ```

2. **Vercel env var** (frontend):
   - Settings → Environment Variables → Production
   - `VITE_VAPID_PUBLIC_KEY` = <public key>
   - Re-deploy site (anders zit hij niet in de bundle)

3. **Supabase Secrets** (edge function):
   - Project → Edge Functions → Manage secrets
   - `VAPID_PUBLIC_KEY` = <public>
   - `VAPID_PRIVATE_KEY` = <private>
   - `VAPID_SUBJECT` = `mailto:mark-smulders@hotmail.com`

4. **Migration toepassen**:
   ```bash
   supabase db push
   ```
   Of via Studio → SQL Editor: paste `supabase/migrations/20260510_push_subscriptions.sql`

5. **Edge function deploy**:
   ```bash
   supabase functions deploy send-due-reminders --no-verify-jwt
   ```

6. **Cron-trigger** in Supabase SQL Editor:
   ```sql
   create extension if not exists pg_cron;
   create extension if not exists http;

   select cron.schedule(
     'leerkwartier-daily-push',
     '0 15 * * *',  -- 17:00 NL-tijd in winter, 16:00 in zomer
     $$
     select net.http_post(
       url := 'https://<project-ref>.supabase.co/functions/v1/send-due-reminders',
       headers := jsonb_build_object('Authorization', 'Bearer <service-role-key>')
     );
     $$
   );
   ```

7. **Privacyverklaring** uitbreiden:
   > Met jouw toestemming kunnen we web-push notificaties sturen om je te
   > herinneren aan je leertijd. We slaan alleen een browser-token op (geen
   > telefoonnummer of e-mailadres). Je kunt dit altijd uitzetten via de
   > "🔔 herinneringen aan" knop op je startscherm of via je browser-instellingen.

## Files

- `public/sw.js` — push + notificationclick handlers
- `src/shared/pushSubscription.js` — client opt-in helpers
- `src/components/StudentHome.jsx` — opt-in UI (knop + status pill)
- `supabase/migrations/20260510_push_subscriptions.sql` — tabel + RLS
- `supabase/functions/send-due-reminders/index.ts` — edge function
- `supabase/functions/send-due-reminders/README.md` — uitgebreide setup-guide

## Werkt nog niet live wanneer Mark stappen 1-6 niet heeft gedaan

- Zonder `VITE_VAPID_PUBLIC_KEY` in Vercel: knop "Herinneringen aanzetten?"
  toont een alert "nog niet ingesteld door beheerder" als gebruiker klikt.
- Zonder migration: subscribe-flow faalt op Supabase insert.
- Zonder cron: opt-in werkt wel, maar notificatie wordt nooit verstuurd.

## iOS-noot

Web push op iOS vereist iOS 16.4+ EN dat de app als PWA op het home-screen
staat ("Add to Home Screen"). Anders verschijnt de toestemming-dialog niet.

## Toekomst (na MVP)

- Per-user push: query spaced-rep `countDue` per user_id, body "X vragen wachten"
- Wekelijks ouder-mail (Resend free tier) "Cito-aftelling — voortgang van Lina"
- Streak-warning push: "je streak van 7 dagen verloopt vandaag"
