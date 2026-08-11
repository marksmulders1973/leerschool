# WhatsApp-feedback 11 aug 2026 — middag/avond-testronde (Mark + Deianera)

Bron: groep "Leerkwartier tips", 14:36–18:30. Status: **TE REVIEWEN door Fable** — elk punt tegen de code leggen, daarna afvinken. (De ochtend-batch van 10 aug staat in `WHATSAPP-FEEDBACK-2026-08-10.md` en is grotendeels gefixt in v240-246.)

## Bugs

- [ ] **B1 — Klokkijken-vraag zonder klok** (14:37): bij het voorbeeld staat de klok er netjes bij, bij de vraag zelf is geen klok te zien → vraag is onbeantwoordbaar. Screenshot in de chat.
- [ ] **B2 — Groep 3 → rekenen-tegel doet niets** (14:45): op de groep-3-pagina op "rekenen" klikken geeft geen reactie. Lijkt op de vak-tegel→0-paden-bug van 30-31 jul (toen gefixt) — check of die fix alle groepen/vakken dekt.
- [ ] **B3 — "Uit het nieuws"-claim klopt niet** (18:21): een vraag claimt actualiteit ("komt uit het nieuws") maar is niet actueel. Claim verwijderen of alleen tonen bij echt actuele bron.
- [ ] **B4 — Beheersing te makkelijk / gokbaar** (Mark 18:25, Deianera 18:30): "Alles gegokt, toch beheers ik dingen. Veel te kort door de bocht." + "Dit zijn te weinig vragen om een eerlijk beeld te hebben... zijn maar 12 vragen." → beheersingsmeting aanscherpen: bewijs op 2 momenten, gok-detectie, meer/adaptieve vragen. **Zwaarste punt van de ronde — voorwaarde voor de persoonlijke pagina.**

## Flow & prijzenpagina

- [ ] **F1 — "Alle groepen" verwart jonge kinderen** (14:51): alles tonen mag, maar label duidelijk wat bij welke groep hoort; álles beschikbaar houden (kind wil soms een klas hoger/lager). Goede flow ontwerpen.
- [ ] **F2 — "Ik heb een code"** ontbreekt in het Familie/Pro-blok (15:23).
- [ ] **F3 — Prijsblok oogt karig** (15:24): voordelen per laag erbij.
- [ ] **F4 — Pro vermeldt niets over "per school"** (16:05), terwijl Pro school-first is (PRIJSPLAN).

## Persoonlijke pagina (groot idee)

- [ ] **P1 — "Verder waar je was"** (16:08): zichtbaar wat je gedaan hebt + resultaat + waar je nu aan moet werken richting je doel. Altijd een home-knop.
- [ ] **P2 — Doel + tijdpad** (16:11): "je staat een 5 voor rekenen, doorstroomtoets over X weken — begin." Doel stellen mist nu het meest.
- [ ] **P3 — Invulling** (16:41): voortgang, wie toegang heeft, welk abonnement + looptijd, op naam/persoonlijk; géén vraag-van-de-dag-achtige fluff op deze pagina.
- [ ] **P4 — Voorbeeld-HTML** (17:01): `leerkwartier-leerlingpagina.html` (staat in Downloads) met kind- én ouder/juf-weergave, voortgangsdial, foutanalyse, privacy-blok. Ook varianten voor **Familie** en **Pro** maken (17:03).
- [ ] **P5 — Avatars aanpasbaar** (17:32-17:34): 6+ avatar-voorbeelden gedeeld; schuifjes voor huidskleur, haar, dikker/dunner.
- [ ] **P6 — Leesscores / rapport-upload** (16:10): uitzoeken hoe ouders aan leesniveaus (AVI e.d.) komen; evt. voortgangsrapport laten uploaden (Familie-laag) om verbeterpunten te zien. ⚠️ AVG-gevoelig (kinddata) — klein beginnen, DPIA-vraag meenemen.

## Fable's advies (11 aug avond)

Volgorde: **B4 eerst** (eerlijke beheersingsmeter, anders toont de persoonlijke pagina onbetrouwbare cijfers) → bugs B1-B3 → persoonlijke pagina P1-P3 (met F1-F4 als losse quick wins ertussen) → P4/P5 uitwerken → P6 als laatste, achter Familie-flag. Zie dagrapport 11 aug, ideeën 26 (Zeker-weten-meter) en 27 (Doorstroomtoets-countdown).
