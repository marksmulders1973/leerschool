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
- [x] **P4 — Ouder/juf-weergave** ✅ v251: weergave-schakelaar op /mijn ("Wat <naam> ziet" / "Wat je ouder of de juf ziet") met weekgrafiek oefenminuten+toetsen per dag (minuten worden nu 7 dagen bewaard), foutanalyse "waar het misgaat" (vanaf 3 pogingen, met Oefen-dit-samen), thuis-tip per zwakste vak, meekijk-uitleg (koppelcode + maandag-weekmail) en privacy/indicatie-disclaimer. Plus (Mark 11 aug avond): **"Welkom terug"-strook op de homepagina** → Mijn pagina, alleen voor terugkerende bezoekers met naam. Aparte betaalde Familie/Pro-verdieping (bv. printbaar rapport) = latere stap achter de paywall-vlag.
- [x] **P5 — Avatar personaliseren** ✅ v252: avatar-maker op /mijn (✏️ op het poppetje): huidskleur (6), haarkleur (6), shirt (6), postuur (smal/gewoon/stevig). Het poppetje verschijnt ook in de welkom-strook op home en op de Mijn pagina-chip.

## Avond-ronde 20:30–20:40 (Mark) — ✅ verwerkt in v252

- [x] **Handje → avatar** (20:30) ✅: welkom-strook op home toont nu het eigen poppetje.
- [x] **Oud logo bij opstart** (20:33) ✅: alle iconen waren al nieuw, maar Android bakt het icoon bij installatie in en ververst het niet bij gelijkblijvende bestandsnaam → iconen hernoemd naar `-v2` in manifest/index/sw. De geïnstalleerde app pakt het nieuwe logo binnen enkele dagen zelf op; sneller = app verwijderen en opnieuw op beginscherm zetten.
- [x] **"Waar ben ik"-pagina dubbelop** (20:34) ✅: de losse Voortgang-knop op het leerling-dashboard is vervangen door **Mijn pagina** (waar-je-staat zit daar, met doorklik naar het detail). De oude pagina's blijven via URL werken (ouder-meekijken intact).
- [x] **Home onoverzichtelijk + vraag-vd-dag weg** (20:36) ✅: vraag-van-de-dag-kaart van home verwijderd — hij leeft door op /vandaag voor de socials/bio-links.
- [x] **"500 bezoekers" dubbel** (20:38) ✅: uit de hero-trustregel gehaald; staat nog één keer in de bewijs-strip.
- [x] **Kwartier = middel, niet doel** (20:40) ✅: doel-kaart op /mijn zegt nu "Klaar zijn voor groep X — dát is je doel. Een kwartier per dag is hoe je er komt." (groep 7/8: de doorstroomtoets als doel).
- [ ] **P6 — Leesscores / rapport-upload** (16:10): **open** — AVG-gevoelig (kinddata), klein beginnen achter Familie-vlag, DPIA-vraag meenemen.

## Fable's advies (11 aug avond)

Volgorde: **B4 eerst** (eerlijke beheersingsmeter, anders toont de persoonlijke pagina onbetrouwbare cijfers) → bugs B1-B3 → persoonlijke pagina P1-P3 (met F1-F4 als losse quick wins ertussen) → P4/P5 uitwerken → P6 als laatste, achter Familie-flag. Zie dagrapport 11 aug, ideeën 26 (Zeker-weten-meter) en 27 (Doorstroomtoets-countdown).
