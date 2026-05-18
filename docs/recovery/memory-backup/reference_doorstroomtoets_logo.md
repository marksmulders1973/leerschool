---
name: Doorstroomtoets-logo — Mark's eigen ontwerp
description: Logo (waterring + pijl) voor Doorstroomtoets-context in de Leerkwartier-app. Bron, opslaglocatie, component-naam.
type: reference
originSessionId: 35c70f04-c959-464d-81e1-52fb1e57c84c
---
Mark heeft op 2026-05-11 een eigen logo ontworpen voor "Doorstroomtoets" — een stilistische waterring (blauw/groen, met pijl door midden naar boven-rechts).

**Bron**: `C:\Users\mark-\Desktop\promostudiebol\logo doorstroomtoets.jpg` (originele JPG van Mark).
**Conversie-script**: `scripts/convertLogoTransparent.py` — crop + luminantie-drempel om donkere achtergrond transparant te maken, output 512×512 PNG.
**Eind-bestand in app**: `public/logo-doorstroomtoets.png`.
**React-component**: `src/components/DoorstroomtoetsLogo.jsx` — `<DoorstroomtoetsLogo size={N} />`.

Wordt op 4 user-facing plekken gebruikt (vervangt 🎯-emoji):
- `HomePage.jsx` — CTA-knop "Doorstroomtoets oefenen" op rolkeuze
- `StudentHome.jsx` — tegel "Doorstroomtoets oefenen"
- `HomeV2.jsx` + `HomeV3.jsx` — Doorstroomtoets-tegel in design-proof homepages

**Voortaan**: overal waar "Doorstroomtoets" in user-facing copy verschijnt (knoppen, tegels, headers) dit logo gebruiken — niet 🎯-emoji. Ook van toepassing als leerkrachten zelf een Doorstroomtoets-feature maken in toekomstige updates.
