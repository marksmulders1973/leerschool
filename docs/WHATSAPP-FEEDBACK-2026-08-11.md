# WhatsApp-feedback 11 aug 2026 — middag/avond-testronde (Mark + Deianera)

Bron: groep "Leerkwartier tips", 14:36–18:30. Status: **TE REVIEWEN door Fable** — elk punt tegen de code leggen, daarna afvinken. (De ochtend-batch van 10 aug staat in `WHATSAPP-FEEDBACK-2026-08-10.md` en is grotendeels gefixt in v240-246.)

## Bugs — ✅ alle 4 gefixt in v250 (11 aug avond)

- [x] **B1 — Klokkijken-vraag zonder klok** ✅ v250: LearnPath rendert nu `check.svg` (deed dat nooit); 5 nieuwe "Hoe laat is het?"-aflees-vragen mét klok (hele uren/halve/kwartieren/minuten/eindopdracht) + klok bij de wijzer-beschrijf-vraag. Visueel getest.
- [x] **B2 — Groep 3 → rekenen-tegel doet niets** ✅ v250: oorzaak = de vak-káárt op StudentHome had geen onClick, alleen de kleine actieknopjes. Kaart-kop (emoji + naam + ›) is nu klikbaar → opent Leren voor dat vak.
- [x] **B3 — "Uit het nieuws"-claim** ✅ v250: label verzacht naar "uit het Jeugdjournaal" (bron + datum stonden er al bij) én de API filtert nu RSS-items ouder dan 48 uur weg (het RSS hield oude berichten vast).
- [x] **B4 — Beheersing gokbaar (Kwartiercheck)** ✅ v250 Zeker-weten-meter: "Beheerst" pas na N1 + N2 + bevestigingsvraag (3 goede antwoorden — 2× gokken is geluk, 3× bijna nooit); gok-detectie: alles binnen 3 sec beantwoord → eerlijk "Bijna daar"; intro + resultaat zeggen nu expliciet "eerste indruk, geen toets".

## Flow & prijzenpagina

- [ ] **F1 — "Alle groepen" verwart jonge kinderen** (14:51): alles tonen mag, maar label duidelijk wat bij welke groep hoort; álles beschikbaar houden (kind wil soms een klas hoger/lager). Goede flow ontwerpen.
- [ ] **F2 — "Ik heb een code"** ontbreekt in het Familie/Pro-blok (15:23).
- [ ] **F3 — Prijsblok oogt karig** (15:24): voordelen per laag erbij.
- [ ] **F4 — Pro vermeldt niets over "per school"** (16:05), terwijl Pro school-first is (PRIJSPLAN).

## Persoonlijke pagina (groot idee) — v1 LIVE in v250 op `/mijn`

- [x] **P1 — "Verder waar je was"** ✅ v250: `/mijn` toont het openstaande onderwerp met "▶ Ga verder waar je was" (exacte stap via de kwartier-pauze-opslag) + "Hier werk je aan" (spaced-repetition-aanbevelingen). Home-knop altijd in de header.
- [x] **P2 — Doel + tijdpad** ✅ v250: groep 7/8 ziet "Nog X weken tot de doorstroomtoets" (begin feb 2027) + knop naar doorstroomtoets-oefenen; jongere groepen zien het kwartier-per-dag-doel + reeks. Cijfer-doelen per vak ("je staat een 5") = latere stap, hangt op echte cijfer-invoer.
- [x] **P3 — Invulling** ✅ v250: op naam + avatar, voortgang per vak met eerlijke Zeker-weten-labels ("Beheerst" alleen bij veel bewijs), abonnement-blok (Gratis/Familie/Pro + geldig-tot), koppelcode-uitleg, privacy-blok ("alleen voornaam + poppetje, geen foto"). Bewust géén vraag-van-de-dag hier.
- [ ] **P4 — Familie/Pro-varianten** (17:03): de ouder/juf-weergave uit het voorbeeld (weekgrafiek, foutanalyse, thuis-tip) als aparte weergave — voorbeeld staat in `docs/voorbeeld-leerlingpagina-2026-08-11.html`. **Open.**
- [ ] **P5 — Avatars met schuifjes** (17:34): v250 heeft een opgebouwd poppetje met wissel-knop (6 kleurcombinaties, geen foto); losse schuifjes voor huid/haar/postuur = **open** (avatar-maker).
- [ ] **P6 — Leesscores / rapport-upload** (16:10): **open** — AVG-gevoelig (kinddata), klein beginnen achter Familie-vlag, DPIA-vraag meenemen.

## Fable's advies (11 aug avond)

Volgorde: **B4 eerst** (eerlijke beheersingsmeter, anders toont de persoonlijke pagina onbetrouwbare cijfers) → bugs B1-B3 → persoonlijke pagina P1-P3 (met F1-F4 als losse quick wins ertussen) → P4/P5 uitwerken → P6 als laatste, achter Familie-flag. Zie dagrapport 11 aug, ideeën 26 (Zeker-weten-meter) en 27 (Doorstroomtoets-countdown).
