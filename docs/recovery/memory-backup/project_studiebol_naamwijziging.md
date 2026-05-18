---
name: Naam-wijziging — Studiebol wordt LEERKWARTIER
description: Mark heeft 2026-05-03 gekozen voor "Leerkwartier" als nieuwe naam. Sluit aan op "speelkwartier"-parallel + 15-min-belofte. Deze memo bevat naam-keuze, juridische check, domeinen en migratie-plan.
type: project
originSessionId: 1ec042a2-ef4d-4c78-bb73-733d7a415c47
---
**Per 2026-05-02**: Mark heeft ontdekt dat "Studiebol" al door een ander bedrijf wordt gebruikt. De app moet **een nieuwe naam** krijgen. De bestaande hero-video met dubbele "studiebol" wordmark vervalt sowieso als asset omdat de naam verandert.

## NIEUWE NAAM (gekozen 2026-05-03): **Leerkwartier**

**Waarom deze naam:**
- "Speelkwartier"-parallel: élke NL-basisschoolleerling kent dit als pauze. Leerkwartier = het spiegelbeeld voor leertijd. Geen uitleg nodig voor kind/ouder/leerkracht.
- Bevat de propositie: "elke dag een leerkwartier is genoeg" (~15 min dagelijkse leer-routine, sterke ouder-belofte tegen schermtijd-zorg).
- Concept-fit met app-architectuur: kwartier = tijd-belofte + basis/HQ-betekenis; leer = onderwijs-context.
- Conflict-check uitgevoerd 2026-05-03: schoon in onderwijs-NL. Geen Malmberg/Noordhoff/Zwijsen/Heutink-methode met deze naam.

**Domein-status (per 2026-05-03):**
- ✅ **`leerkwartier.app`** = **GEKOCHT door Mark op 2026-05-03**. Dit wordt het primaire domein voor de app.
- `leerkwartier.online` = waarschijnlijk nog vrij. Mark kan optioneel claimen voor extra bescherming (~€10/jr).
- `leerkwartier.com` + `leerkwartier.nl` = van **Het Leerkwartier B.V.** (Woerden, KvK 69336733), leer-/leather-industrie. Dit bedrijf is in maart 2023 doorgegaan onder de naam "Leatherbox" — ze gebruiken Leerkwartier niet meer als marketing-merk. Domeinen zijn nu redirect-vangers. Kans op overname via mailtje aan Leatherbox redelijk hoog (richtbod €500-3000). Niet kritiek — `.app` is een prima primair domein (Google's TLD, automatisch HTTPS).

**Merkenregister-check (uitgevoerd 2026-05-03):**
- BOIP merkenregister `register.boip.int` doorzocht op "leerkwartier" → **0 treffers in alle klassen**. Volledig vrij om te deponeren in klasse 9 (software), 16 (drukwerk), 41 (onderwijs), 42 (SaaS).

**Geadviseerde volgorde (resterend):**
1. ✅ ~~`.app` claimen~~ — gedaan 2026-05-03 (TransIP)
2. Optioneel: `leerkwartier.online` ook claimen (~€10/jr)
3. KvK handelsnaam "Leerkwartier" toevoegen aan Smulsoft B.V. (gratis, https://www.kvk.nl/wijzigen/handelsnaam-wijzigen-of-toevoegen/)
4. Mark heeft besloten geen mailtje naar Leatherbox te sturen — `.app` is voldoende
5. Logo + visuele identiteit ontwerpen — TODO
6. Logo deponeren als figuratief merk (woord+beeld) bij BOIP via merkenbureau (~€500-1000) — generiek-NL-woord vraagt om gestileerd logo voor hogere acceptatie
7. ✅ ~~Code-migratie: `src/brand.js` aanmaken~~ — gedaan 2026-05-03
8. ✅ ~~Domein-omzet: `leerkwartier.app` aan Vercel koppelen, 301-redirect van studiebol.online~~ — **gedaan 2026-05-03**

## Site-omzet uitgevoerd 2026-05-03 ~10:00 NL-tijd

**Vercel-project:** `leerschoolnew` (project-ID `prj_zRJ19MS8AbG1CEKH1nSSd4eyYoh5`, team-ID `team_LnlWCNGojgumcvWf0KF5GVkg`)

**Live status:**
- ✅ `https://leerkwartier.app` — primary, SSL live
- ✅ `https://www.leerkwartier.app` → 301 → `leerkwartier.app`
- ✅ `https://studiebol.online` → 301 → `leerkwartier.app`
- ✅ `https://www.studiebol.online` → 301 → `leerkwartier.app`

**TransIP DNS leerkwartier.app:**
- A `@` → `216.198.79.1`
- A `@` → `64.29.17.1`
- CNAME `www` → `cname.vercel-dns.com`
- (TransIP-default email-records (MX/SPF/DKIM/DMARC) bewust laten staan voor toekomstig email-gebruik)

**BRAND.domain in src/brand.js:** `"leerkwartier.app"`

**Cert provisioning:** Vercel deed www-cert vanzelf, apex-cert (leerkwartier.app) moest ge-force'd via API-call (`POST /v8/certs` met `cns: ["leerkwartier.app"]`). Cert ID `cert_Z7usIQEOMxrOnim8eRGP1WfB`, valid tot 2026-08-01. Auto-renew ingeschakeld.

**Vercel-token:** Mark gaf eenmalig token `vcp_1lqQI...` voor deze sessie. Hij moet 'm revoken na sessie via [vercel.com/account/tokens](https://vercel.com/account/tokens). MEMO: niet zomaar weer accepteren in toekomstige sessies — dashboard-klik is veiliger voor 95% van use-cases.

## Code-migratiestatus (per 2026-05-03)

**Slogan + payoff (gekozen):**
- Hoofdslogan: "Elk kwartier slimmer."
- Payoff: "15 minuten leren. Daarna klaar of spelen."
- Concept: leerpaden van max 15 min, daarna stoppen of OBLITERATOR spelen

**Inrichting:**
- `src/brand.js` met name/shortName/domain/email/publisher/slogan/payoff
- BRAND.domain blijft "studiebol.online" tot Mark de site fysiek omzet — alle URLs in code lopen via BRAND.domain en wisselen automatisch mee

**127 → 44 Studiebol-vermeldingen vervangen.** Alle user-facing strings zijn nu BRAND.name. De resterende 44 zijn:
- Comments en CSS-commentaren (kunnen blijven)
- Interne API-namen: CustomEvent `studiebol:update-available`, prop-naam `onNaarStudiebol`, variabele `studiebolLogos`, localStorage-prefix `studiebol_tutor_chat_` (laatste laten staan voor backwards-compat met bestaande chat-history)
- Geen daarvan is user-zichtbaar

**Bestanden met BRAND.import (allemaal commit 280b532 + 6bcb433):**
- src/brand.js, App.jsx, components/HomePage.jsx, HomeV2.jsx, HomeV3.jsx, LoadingOverlay.jsx, ObliteratorGame.jsx, ProPage.jsx, UpgradePage.jsx, OuderDashboard.jsx, features/practice/ResultsPage.jsx, features/teacher/StudentProgress.jsx, TeacherHome.jsx, TeacherComponents.jsx, features/learn/LearnPath.jsx
- public/manifest.json (PWA name + short_name + description hardcoded naar Leerkwartier)
- api/tutor-chat.js (AI-tutor system-prompt hardcoded)

**Niet aangepakt, kan in vervolg-sessie:**
- 3D-componenten (Question3DRenderer, Shape3D, Mini3DTeaser, RM-S6-Q1) — alleen comments, geen user-impact
- Interne CSS-classes / event-names — niet kritiek
- Scriptbestanden in `scripts/` en `/check-dupes.py` etc — geen user-impact

## Wat de naam-wijziging raakt

### Code (208 vermeldingen, 34 bestanden)
- `src/`: HomePage, HomeV2, HomeV3, App, AITutor, LearnPath, alle Teacher-* en Mastery-* componenten, PageLoader, UpdateBanner, ResultsPage, StudentProgress, ObliteratorGame, OuderDashboard, ProPage, UpgradePage, RM-S6-Q1, Shape3D, Mini3DTeaser, Question3DRenderer, LoadingOverlay, Button, tokens.css, auth.js
- `public/`: begrijpend-lezen-oefenen.html (en mogelijk andere SEO-pagina's), `logo.jpg`, `intro.mp4`, manifest.json
- `api/`: tutor-chat.js system-prompt, generate-questions.js

### Buiten code
- **Domein**: `studiebol.online` (bij TransIP) — nieuwe domein registreren + DNS verhuizen + Vercel custom-domain wisselen
- **Vercel project-naam**: kan blijven, alleen domein-koppeling wijzigen
- **Supabase project-naam**: heet "studiebol" (project-ID `uxqnzrymyjbcpuzqktdm` blijft, naam kan veranderd in dashboard)
- **GitHub repo**: `marksmulders1973/leerschool` — naam is al `leerschool`, niet "studiebol", dus geen rename nodig
- **PWA manifest**: name + short_name + theme_color
- **SEO assets**: sitemap.xml, robots.txt, JSON-LD structured data, OG-tags
- **Hardcoded share-text**: "Studiebol bedankt {name}", "Ken je studiebol al?", AI-tutor system prompt
- **Logo**: `public/logo.jpg` (glazen-bol met "studiebol"-wordmark) moet opnieuw — illustrator/AI-image
- **Intro-video**: `public/intro.mp4` vervalt of moet hergerenderd

## Aanpak (geadviseerd door Claude 2026-05-02)

**Stap 1 — Voorbereiding (kan NU, vóór nieuwe naam bekend)**
Centraliseer de brand-naam in één file (`src/brand.js`):
```js
export const BRAND = {
  name: "Studiebol",        // tijdelijk; wijzigt na rename
  domain: "studiebol.online",
  shortName: "studiebol",
};
```
Vervang in stappen alle hardcoded "Studiebol"/"studiebol"-strings door `BRAND.name` etc. Daarna is de migratie één regel wijzigen + nieuwe assets aanleveren. Wel werk: ~3-4 uur scopen.

**Stap 2 — Naam kiezen**
Criteria voor goede vervangingsnaam:
- Nederlands of NL/EN-friendly (publiek is NL-leerlingen)
- Domein beschikbaar (.nl + .com bij voorkeur, anders .online/.app/.school)
- Geen trademark-conflict (Google + Trademark-register check)
- Kort, zegbaar, geen accenten/special chars
- Past bij educational positionering (niet gamey)
- Kan AI als brainstorm-partner gebruiken

**Stap 3 — Migratie (na naam-keuze, ~1 sessie werk als stap 1 al gedaan is)**
- Eén regel in `src/brand.js` wijzigen
- Logo opnieuw (Claude.ai of illustrator)
- PWA manifest + favicon + apple-touch-icon
- Domein registreren + DNS naar Vercel
- Supabase project-naam wijzigen in dashboard
- Sitemap + JSON-LD bijwerken
- Een 301-redirect van studiebol.online → nieuwe domein (zolang oude domein draait, voor SEO-continuïteit)
- Communicatie naar bestaande gebruikers (Sahasra etc.) — al een vriendelijke melding op homepage gedurende migratie-week

## Database / data
**Geen rename nodig**. Tabel-namen bevatten geen "studiebol" (zijn `leaderboard`, `progress`, `quizzes` etc.). Profiel-data en mastery-records blijven van wie ze zijn.

## Why
Mark heeft ergens vandaag ontdekt dat de naam al in gebruik is. Latere conflicten/legal-risico verminderen door tijdig te wijzigen — voor het publiek echt groeit naar gezin-test.

## How to apply
- **Voordat de naam bekend is**: bied stap 1 (centralisatie) aan zodra Mark vraagt om voorbereiding. Niet zelf starten zonder akkoord — is werk.
- **Wanneer Mark een nieuwe naam noemt**: leg vast in dit memo + start migratie zoals stap 3.
- **In nieuwe sessies**: noem Studiebol nog wel bij naam (zo heet 't nu live), maar weet dat het tijdelijk is.
