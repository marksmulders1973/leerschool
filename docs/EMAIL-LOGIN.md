# Inloggen met e-mail (magic link) — wat Mark in Supabase moet nakijken

Sinds 30 sep 2026 staat naast "Inloggen met Google" een form **"Of log in met je
e-mailadres"** (`src/auth/EmailLogin.jsx`): adres invullen → "Stuur mij een
inloglink" → link in de mail → ingelogd, zonder wachtwoord. Wordt getoond op
`/ouder` (OuderInzicht) en in de naamstap op de homepage voor leerkrachten.

Technisch: `supabase.auth.signInWithOtp({ email, options: { emailRedirectTo:
"https://leerkwartier.app/ouder", shouldCreateUser: true } })`. De anonieme
sessie die iedere bezoeker al heeft wordt bij het tikken op de link vervangen
door het e-mailaccount (bestaand of nieuw) — zelfde gedrag als de Google-login.
Waarom niet `updateUser({ email })` staat uitgelegd bovenin `EmailLogin.jsx`.

Zolang onderstaande punten niet kloppen, geeft de knop een nette foutmelding
("Inloggen met e-mail staat op dit moment uit …") maar komt er geen mail.

## 1. Provider aan — Authentication → Providers → Email

- **Enable Email provider**: AAN (standaard aan).
- **Confirm email**: mag aan of uit; voor magic link maakt het niet uit.
- Authentication → Sign In / Up → **Allow new users to sign up**: AAN. Staat 'ie
  uit, dan krijgt een nieuwe ouder `signup_disabled` en komt er geen mail.
- **Allow anonymous sign-ins** blijft AAN (dat gebruikt de app al).
- **Manual linking** hoeft NIET aan — we koppelen niet aan de anonieme user.

## 2. Redirect-URL's — Authentication → URL Configuration

Supabase stuurt na het verifiëren van de link alléén door naar URL's op de
allowlist; anders land je op de Site URL (`/`). Zet erbij:

- `https://leerkwartier.app/ouder`
- `https://leerkwartier.app/leerkracht`
- `https://leerkwartier.app/*` (vangt toekomstige `terug`-paden)
- voor lokaal testen: `http://localhost:5173/*`

Site URL blijft `https://leerkwartier.app`. Landt iemand tóch op `/`, dan zet
`lk_login_terug` (zelfde vangnet als Google) hem alsnog op `/ouder`.

## 3. E-mailtemplate "Magic Link" — Authentication → Emails → Templates

Standaard is de mail Engels ("Your Magic Link"). Voorstel in het Nederlands:

**Onderwerp:** `Je inloglink voor Leerkwartier`

```html
<h2>Inloggen bij Leerkwartier</h2>
<p>Tik op de knop hieronder en je bent meteen ingelogd. Geen wachtwoord nodig.</p>
<p><a href="{{ .ConfirmationURL }}" style="display:inline-block;padding:12px 20px;background:#00C853;color:#fff;border-radius:12px;text-decoration:none;font-weight:700">Inloggen bij Leerkwartier</a></p>
<p>Werkt de knop niet? Kopieer dan deze link in je browser:<br>{{ .ConfirmationURL }}</p>
<p style="color:#666;font-size:13px">De link werkt één keer en is een uur geldig. Heb je dit niet zelf aangevraagd? Dan kun je deze mail gewoon negeren.</p>
<p style="color:#666;font-size:13px">Een kwartier per dag leren, een leven lang slimmer.<br>Leerkwartier · hallo@leerkwartier.app</p>
```

Beschikbare variabelen: `{{ .ConfirmationURL }}`, `{{ .Email }}`, `{{ .SiteURL }}`,
`{{ .Token }}` (6-cijferige code — nu niet gebruikt; de app heeft geen codeveld).

**Let op mailscanners** (bekend probleem, zie ook onze bulkmail-ervaring):
sommige zakelijke mailservers openen links vooraf. Een magic link is éénmalig,
dus dan is 'ie al "gebruikt" als de ouder tikt. De app toont dan "Die inloglink
is verlopen of al gebruikt, vraag een nieuwe aan". Wordt dit een echte klacht,
dan is de volgende stap een codeveld (`{{ .Token }}` + `verifyOtp`) of een
tussenpagina met een knop. Nu niet bouwen.

## 4. Limieten — Authentication → Rate Limits

- **Per adres**: standaard 1 magic link per 60 s (`over_email_send_rate_limit`).
  De app wacht zelf 30 s vóór "Stuur opnieuw" en vertaalt de fout naar "Even te
  vaak geprobeerd, probeer het over een minuut."
- **Rate limit for sending emails**: bij de ingebouwde Supabase-verzender staat
  dit hard op **2 mails per uur voor het hele project** en kun je het niet
  verhogen. Dat is alleen bruikbaar om te testen — met drie ouders op een avond
  loopt het vast. Daarom punt 5.
- Link-geldigheid: standaard 1 uur (`Email OTP expiration`), prima zo laten.

## 5. Afzender: eigen SMTP via Resend (aanbevolen)

Ingebouwde verzender = `noreply@mail.app.supabase.io`, 2 mails/uur, vaak in
spam. We hebben al een geverifieerd domein bij Resend (hallo@leerkwartier.app
voor outreach) — dus die ook hier gebruiken:

1. Resend → **API Keys** → nieuwe key aanmaken, alleen "Sending access",
   naam bv. `supabase-auth`. (Niet de key van de outreach-scripts hergebruiken.)
2. Supabase → Project Settings → **Authentication** → **SMTP Settings** →
   "Enable Custom SMTP" aan:
   - Sender email: `hallo@leerkwartier.app`
   - Sender name: `Leerkwartier`
   - Host: `smtp.resend.com`
   - Port: `465` (SSL) — lukt dat niet, dan `587`
   - Username: `resend`
   - Password: de API-key uit stap 1
3. Opslaan. Daarna is de e-maillimiet instelbaar onder Authentication → Rate
   Limits → "Rate limit for sending emails"; zet 'm op bv. **60 per uur**.
4. Test: op `leerkwartier.app/ouder` je eigen adres invullen → mail moet binnen
   een minuut binnenkomen van hallo@leerkwartier.app, link → ingelogd op /ouder.
5. Resend-dashboard → Emails: zie je de verzonden mail met status "Delivered".

Kosten: Resend gratis tot 3.000 mails/maand (nu ruim voldoende).

## 6. Snelle checklijst

- [ ] Email-provider aan + "Allow new users to sign up" aan
- [ ] Redirect-URL's `…/ouder`, `…/leerkracht`, `…/*` toegevoegd
- [ ] Magic Link-template in het Nederlands
- [ ] Custom SMTP via Resend actief, e-maillimiet omhoog
- [ ] Zelf getest: mail ontvangen → link → ingelogd op /ouder, rol = ouder
- [ ] Testadres achteraf verwijderen (Authentication → Users) of laten staan
      met naam die met "Test" begint
