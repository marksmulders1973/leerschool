---
name: Leerkwartier — privacy-todo-lijst voor Mark
description: Wat Mark zelf moet doen voor privacy-fundament (acties die ik niet voor hem kan uitvoeren) + status per item. Bijhouden cross-sessie.
type: project
originSessionId: 5e009e69-407d-49fd-b589-58f027ca2824
---
**Acties die Mark zelf moet uitvoeren** (vereist Anthropic-console toegang, e-mail-verkeer, of beleidsbeslissingen). Ik kan ondersteunend code-werk doen, maar de actie ligt bij Mark.

## ⏳ Open

### 1. Anthropic DPA + ZDR-addendum aanvragen
- **Wat**: stuur `team@anthropic.com` met aanvraag DPA (Data Processing Addendum) + Zero-Data-Retention-addendum.
- **Tekst-template**:
  > "Hi Anthropic team — I'm building an EU-based Dutch education app for children (Leerkwartier, leerkwartier.app). I'm using Claude API for AI-tutoring. Please send me your standard DPA and ZDR-addendum so I can sign them as data processor relationship under GDPR."
- **Tijd**: 15 min versturen, ~1-2 weken wachten op respons.
- **Prio**: middel — niet acuut nodig (nog geen PII naar Anthropic per code-audit), wel voor schoolse-deals.

### 2. AP-checklist DPIA opstellen
- **Wat**: Data Protection Impact Assessment voor onderwijs-app voor minderjarigen.
- **Template beschikbaar**: AP-website biedt template voor onderwijs.
- **Tijd**: ~3-4 uur eenmalig.
- **Prio**: laag voor nu, hoger zodra >500 actieve gebruikers.

### 3. Sub-processor-lijst publiek maken op `/privacy.html`
- **Wat**: lijst van alle verwerkers (Supabase, Vercel, Anthropic, Google) met DPA-status. Al deels in `privacy.html` per sprint-2 G2b. Update zodra DPA's getekend zijn.
- **Tijd**: 10 min per update.
- **Prio**: laag — gebeurt automatisch met andere updates.

### 4. Magic-link e-mail-verificatie van ouder (G1 v2)
- **Wat**: AgeGate v1 is self-attest. v2 = ouder krijgt mail "Bevestig dat [kind] gebruik mag maken", pas na klik = verified.
- **Code-werk**: Supabase Edge Function + e-mail template + UI-update AgeGate.
- **Tijd**: ~3-4 uur code-werk (kan ik doen, Mark moet env-vars instellen).
- **Prio**: middel — neemt 'self-attest'-zwakte weg.

### 5. Anonieme spelers-data deletable maken
- **Wat**: huidige K6 self-service delete werkt alleen voor ingelogde gebruikers. Anonieme `player_name`-data kan niet veilig worden gewist (geen eigenaars-bewijs).
- **Oplossingen**: ofwel auth verplichten voor data-opslag, ofwel admin-delete-flow op aanvraag.
- **Tijd**: 1-2 uur code-werk.
- **Prio**: laag.

## ✅ Gedaan

- ✅ Privacy-tekst herschreven (`public/privacy.html`) — sprint-2 G2b
- ✅ Bucket `feedback-screenshots` privatify + signed URLs + admin-only RLS — sprint-2 G2a
- ✅ AgeGate v1 (self-attest met audit-trail in localStorage) — sprint-2 G1
- ✅ Self-service "Verwijder al mijn data"-knop in OuderDashboard — sprint-2 K6
- ✅ OuderDashboard koppel-validatie (`verified=true`-check) — sprint-2 M7
- ✅ AdSense + GA4 verwijderd uit index.html (audit-2 P1a)

## How to apply

- Bij elke nieuwe sessie: check deze memory voordat je privacy-werk doet, om te voorkomen dat je dingen herstelt die Mark nog niet heeft uitgevoerd.
- Bij vraag "wat moet ik nog doen voor privacy?": refereer aan deze lijst.
- Sancties-realiteit volgens `feedback_avg_sancties_realiteit.md` toepassen — niet alarmeren.
