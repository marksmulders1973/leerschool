# Grok beeld-upgrade plan — "heel de app moet er perfect uitzien"

> Mark-opdracht 2026-06-18. 10-agent-audit van alle beelden in de app → wat kunnen we met **Grok** (AI-beeldgeneratie via Mark's browser) opwaarderen tot een strak, professioneel uiterlijk. Voortgang staat in elk **dagrapport** (zie CLAUDE.md). Single source of truth voor dit traject.

## 🚫 Harde regel (STOPLIST)
**GEEN AI-sfeer-art op Cito-/Doorstroomtoets-leercontent.** Sober = echte foto/kaart/tabel/diagram; nooit een illustratie die het antwoord verklapt. De 10 agents bevestigden eensgezind: **niet aanraken** met Grok →
- Alle `doorstroomtoets*.js` + Cito-kern-leerpaden (rekenen/taal/studievaardigheden).
- Verkeer (verkeersborden, voorrang, VVN) — wettelijk-exacte beelden.
- Topografie/kaarten — moet geodata-accuraat zijn.
- Geschiedenis WO1/WO2 — archief of niets.
- **Examenvragen** (`examenQuizzes/*.json`) — beelden zijn ONDERDEEL van het antwoord (bio P/Q/R/S-diagram, economie-grafiek a/b/c/d). Grok = authenticiteit kapot + juridisch risico.
- `sampleQuestions.js` `imageSearch` — Wikipedia-thumbnails zijn authentiek (en bij Hitler/Apartheid/Stalin: Grok-art ongepast).

## ✅ Wél Grok-OK (de upgrade-doelen) — geprioriteerd

### Fase 1 — Merk-fundament (eerst: overal zichtbaar + lost rebrand-bug op)
- **P1. PWA-icoonset** (`public/icons/icon.svg` + icon-192/512.png). ⚠️ `icon.svg` bevat nog letterlijk **"studiebol"** (oude naam!) → thuisscherm-icoon klopt niet. Nieuw Leerkwartier-icoon (kwartcirkel-motief, navy + lime, maskable safe-zone, géén tekst). **Hoog.**
- **P2. OG-/social-card** (`public/logo.jpg`, 1280×720, generiek; gebruikt op 22 landingspagina's + élke gedeelde link). Aparte cleane OG-card 1200×630 (Leerkwartier-naam + slogan, navy/lime, sober). Plus crisp loading-logo (PNG/SVG transparant i.p.v. .jpg). **Hoog.**
- **P3. Eén consistente mascotte + mini-stijlgids.** Nu lopen 3 AI-mensen door elkaar (blauw haar / roze haar / leraar) → niemand herkenbaar. Kies 1 persona (neutraal haar, Leerkwartier-shirt, lichte achtergrond). Stijl: navy achtergrond, lime accent, helder/optimistisch. Regenereer: `leeraar2.png` (artefacten op schoolbord), `chk_grok.png` (→ volwaardige 9:16-ad), QR-tile-avatar (consistent). **Med.**

### Fase 2 — De wow-interacties (loopt al — interactieve platen)
- **P4. Interactieve biologie-platen** (`src/data/bioPlaten.jsx`). v1 cel + oog = self-authored SVG **LIVE**. Grok-skin: rijkere achtergrond-illustratie per plaat met de bestaande klikbare hotspots eroverheen (architectuur is er al: `el`-prop per onderdeel). Volgende platen: **fotosynthese, hart, zenuw/actiepotentiaal**. **Hoog (Mark's huidige spoor).**
- **P5. Wereldbol-textuur** (`Wereldbol.jsx`). Nu programmatische canvas-textuur (vlakke kleurblokken). Vervang door Grok 4096×2048 equirectangulaire kaart-PNG (rijker oceaan/continenten) — klik-detectie (UV→polygoon) verandert geen regel. **Hoog (visitekaartje).**

### Fase 3 — Conversie-oppervlak
- **P6. Home hero-fotoset** (`model-leerling.png` / `model-student.jpg` / `model-leerkracht.jpg`) — nu inconsistente stijl/zwaar. Eén samenhangende brand-fotoset (zelfde belichting/achtergrond). **Med-hoog.**
- **P7. Conversie-lege-staten:** OuderDashboard niet-ingelogd (`OuderDashboard.jsx:240`, emoji → warme ouder-kind-illustratie), Oefenpakket-CTA (`HomePage.jsx:704`, 📄), **Oefenpakket-PDF-voorblad** (`OefenpakketPage.jsx:444`, 📘 → printvriendelijk merk-voorblad — het enige fysieke product dat ouders in handen hebben). **Med.**

### Fase 4 — E-mail + social-serie
- **P8. Mail-headers:** weekmail/welkomst (`send-weekly-lesmateriaal.js`) + **6 countdown-seizoens-iconen** (`send-doorstroom-countdown.js`) — kleine inline header-illustraties, oefen-inhoud blijft tekst. **Med.**
- **P9. Social-creatives:** vraag-van-de-dag-template (alleen niet-Cito-vragen sfeer toevoegen) + ad-hero's in de vaste stijl. **Med.**

### Fase 5 — Game (apart, op Mark's sein)
- **P10. OBLITERATOR sprites** (`ObliteratorGame.jsx`): speler-sprites (~6 karakters), biome-parallax-achtergronden, boss-sprites. Game = geen Cito-regel, Grok vrij. Hoge visuele winst maar groot. **Op Mark's sein.**

## 🐞 Bugs/opruim (los van Grok, kan meteen)
- **B1.** `public/covers/all-right-new.jpg` = 35-byte server-fout i.p.v. afbeelding → leerlingen met methode "All Right" zien een kapot plaatje. Opnieuw ophalen of fallback-SVG.
- **B2.** Wees-afbeeldingen opruimen: `model-student-oud.jpg, student.jpg, leerkracht.jpg, leerling.jpg, bol.jpg, bol1.jpg, youtubeuitleg.jpg, promostudiebol/o1.JPG`.
- **B3.** `logo-doorstroomtoets.png` = 401 KB voor een inline-icoon → comprimeren/vectoriseren (SOBER — merklogo, stijl behouden).

## 🎨 Grok-stijlgids (vast)
Navy achtergrond (#1a2744-achtig) · lime-groen accent (kwartcirkel-logo) · wit voor tekst · helder/optimistisch (geen donkere gaming-vibe) · 1 vaste mascotte-persona · sober & vertrouwenwekkend (ICP = bezorgde Doorstroomtoets-ouder 30-50j).

## 📌 Werkwijze
Grok draait via Mark's browser (rate-limited). Per item: Claude prept de slot/component → Grok genereert (Mark/Claude in browser) → Claude wiret het asset + commit. Veel componenten/slots kunnen nú al voorbereid worden.

## 📊 Status
| Item | Status |
|---|---|
| P4 bio-platen: cel · oog · fotosynthese · hart · zenuwcel · actiepotentiaal | ✅ LIVE (`?bioplaat=<id>`) — biologie-kern compleet |
| P4 scheikunde/wiskunde-visuals (bob's andere tips) | ⏳ te bouwen |
| P1-P3, P5-P10 | ⏳ wacht op Grok-sessie (browser) |
| B1 kapotte all-right-cover + B2 wees-afbeeldingen | ✅ opgeruimd (18 jun) |
| B3 logo-doorstroomtoets.png comprimeren | ⏳ open |
