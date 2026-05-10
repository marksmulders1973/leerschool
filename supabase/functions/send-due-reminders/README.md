# A12 — Web Push setup

Dit is wat **jij (Mark) eenmalig handmatig moet doen** om de web push live te krijgen. Code is al gebouwd, maar de cryptografie + cron-trigger vereisen jouw input.

## 1. VAPID keys genereren (5 min)

```bash
npx web-push generate-vapid-keys
```

Geeft 2 keys: een public (~88 chars, base64) en een private (~44 chars, base64).
**Bewaar private key veilig** — die mag NOOIT in de repo of frontend.

## 2. Public key in Vercel env vars

In Vercel-dashboard → project settings → Environment Variables:

```
VITE_VAPID_PUBLIC_KEY = <de public key van stap 1>
```

(LET OP: prefix `VITE_` is verplicht zodat Vite hem in de browser-bundle includes.)

Deploy de site opnieuw zodat de nieuwe env var meegebakken wordt.

## 3. Private + public key in Supabase secrets

In Supabase dashboard → Project → Edge Functions → Manage secrets:

```
VAPID_PUBLIC_KEY  = <public key>
VAPID_PRIVATE_KEY = <private key>
VAPID_SUBJECT     = mailto:mark-smulders@hotmail.com
```

## 4. Migration toepassen

```bash
supabase db push   # of via Studio: paste content van 20260510_push_subscriptions.sql
```

## 5. Edge function deployen

```bash
supabase functions deploy send-due-reminders --no-verify-jwt
```

(`--no-verify-jwt` zodat cron + manuele invoke werken zonder user-token.)

## 6. Handmatig testen (eenmalig)

```bash
supabase functions invoke send-due-reminders --no-verify-jwt
```

Verwacht JSON: `{ ok: true, total: 1, sent: 1, removed: 0 }`.
Op je telefoon zou nu een notificatie moeten verschijnen — als je in de app op
"🔔 Herinneringen aanzetten" hebt geklikt en toestemming hebt gegeven.

## 7. Cron-trigger aanzetten (Supabase pg_cron)

In SQL Editor van Supabase:

```sql
-- Activeer pg_cron + http extensions (1x per project)
create extension if not exists pg_cron;
create extension if not exists http;

-- Dagelijks om 17:00 NL-tijd (= 16:00 UTC in de winter, 15:00 UTC in de zomer)
-- Voor een vast moment NL-tijd is het simpelst: gebruik 15:00 UTC en accepteer
-- dat het in de winter een uur eerder valt (16:00 NL).
select cron.schedule(
  'leerkwartier-daily-push',
  '0 15 * * *',
  $$
  select net.http_post(
    url := 'https://<project-ref>.supabase.co/functions/v1/send-due-reminders',
    headers := jsonb_build_object('Authorization', 'Bearer <service-role-key>')
  );
  $$
);
```

Vervang `<project-ref>` en `<service-role-key>` (haal uit Project Settings → API).

## 8. Privacy

Voeg aan privacyverklaring toe:

> Met jouw toestemming kunnen we web-push notificaties sturen om je te herinneren
> aan je leertijd. We slaan alleen een browser-token op (geen telefoonnummer of
> e-mailadres). Je kunt dit altijd uitzetten via de "🔔 herinneringen aan" knop
> op je startscherm of via je browser-instellingen.

## Troubleshooting

- **"VAPID keys missing"** → check Supabase secrets (stap 3)
- **Notification verschijnt niet** → check browser DevTools → Application → Service Workers; zorg dat SW actief is
- **iOS werkt niet** → web push op iOS vereist 16.4+ EN dat de app als PWA is geïnstalleerd (Add to Home Screen)
- **Subscription "expired" (410)** → wordt automatisch uit `push_subscriptions` verwijderd door de edge function
