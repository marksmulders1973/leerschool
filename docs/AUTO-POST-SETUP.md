# Automatisch dagelijks posten op Instagram — setup

> Gebouwd 2026-06-04. Het systeem post elke dag (16:00 NL) automatisch de
> oudste vraag uit de wachtrij naar Instagram, via de **officiële Meta Graph
> Content Publishing API**. Geen browser, geen plakken. Eenmalige setup nodig.

## Hoe het werkt
- **`api/post-daily-question.js`** — Vercel-functie. Pakt de oudste rij uit
  Supabase-tabel `social_post_queue` (status='wachtrij'), maakt een IG media-
  container met de JPEG + bijschrift, publiceert, en (optioneel) cross-post naar
  de FB-pagina. Markeert de rij 'gepost'.
- **Cron** in `vercel.json`: `0 14 * * *` (= 16:00 NL) triggert het 1×/dag.
- **Wachtrij** (`social_post_queue`): `vraag_id, image_url, caption, status`.
  Afbeeldingen staan in `public/social/<id>.jpg` → publiek op
  `https://leerkwartier.app/social/<id>.jpg`.

## EENMALIGE SETUP (Mark, ~20-30 min) — daarna nooit meer
**Belangrijk:** Meta vereist dat de accounteigenaar zelf een token autoriseert —
dat kan Claude niet voor je doen. Voor posten op je **eigen** account is **geen
App Review** nodig (de app mag in Development-modus blijven).

### 1. Check: Instagram = Professional + gekoppeld aan FB-pagina
IG-app → Instellingen → Accounttype → moet **Bedrijf** of **Maker** zijn, en
gekoppeld aan de Leerkwartier-FB-pagina. (Waarschijnlijk al zo via Business Suite.)

### 2. Maak een Meta-app
developers.facebook.com → My Apps → **Create App** → type **Business** →
naam bijv. "Leerkwartier Auto-post". Noteer **App ID** + **App Secret**
(Settings → Basic).

### 3. Token + scopes (kies A of B)
**A — Snel (Graph API Explorer, token 60 dagen):**
- developers.facebook.com/tools/explorer → kies je app.
- Permissions toevoegen: `instagram_basic`, `instagram_content_publish`,
  `pages_show_list`, `pages_read_engagement`, `business_management`.
- Generate Access Token → autoriseer → kopieer.
- Verleng naar 60 dagen:
  `GET /oauth/access_token?grant_type=fb_exchange_token&client_id=APP_ID&client_secret=APP_SECRET&fb_exchange_token=KORTE_TOKEN`

**B — Beste (System-User token, verloopt NOOIT):**
- business.facebook.com → Bedrijfsinstellingen → Gebruikers → **Systeemgebruikers**
  → toevoegen → wijs de FB-pagina + IG-account toe → **Generate token** met dezelfde
  scopes. Dit token hoef je nooit te vernieuwen. (Aanrader voor een cron.)

### 4. Haal de ID's op (in Graph API Explorer of via URL met je token)
- `GET /me/accounts` → je **FB-pagina-ID** (= FB_PAGE_ID).
- `GET /<FB_PAGE_ID>?fields=instagram_business_account` → die `id` = **IG_USER_ID**.

### 5. Zet de env-vars in Vercel
Vercel → project **leerschoolnew** → Settings → Environment Variables (Production):
- `META_ACCESS_TOKEN` = je token
- `IG_USER_ID` = Instagram-business-account-ID
- `FB_PAGE_ID` = FB-pagina-ID (optioneel, voor cross-post)
- `CRON_SECRET` = een willekeurige string (bijv. 24 tekens)
- (`SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` staan er waarschijnlijk al)
- **Redeploy** (Deployments → ⋯ → Redeploy) zodat de env-vars actief worden.

### 6. Test
Open: `https://leerkwartier.app/api/post-daily-question?key=<CRON_SECRET>`
→ moet `{"ok":true,"posted":true,...}` geven en de vraag staat op Instagram.

## Nieuwe vraag aan de wachtrij toevoegen (Claude doet dit)
1. Maak de vraag-JPEG (1080×1350) → `public/social/<id>.jpg` (commit/push).
2. Voeg in `src/socialVragen.js` de bijbehorende interactieve vraag toe (zelfde
   `<id>` voor de deep-link `/v/<id>`).
3. Insert in `social_post_queue`: `vraag_id, image_url, caption`.
De cron pakt 'm vanzelf op de eerstvolgende dag. → recurring "vraag van de dag".

## Limieten
IG: max 50 posts/24u (ruim zat). 1 post/dag = perfect.
