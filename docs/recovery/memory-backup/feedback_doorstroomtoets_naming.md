---
name: Cito → Doorstroomtoets — schoolrealiteit naming
description: Mark wens 2026-05-11 — overal in user-facing copy "Cito-eindtoets" vervangen door "Doorstroomtoets". Schoolrealiteit sinds 2024. Filenames + zoek-keywords behouden voor SEO.
type: feedback
originSessionId: 35c70f04-c959-464d-81e1-52fb1e57c84c
---
Sinds **schooljaar 2023/2024** bestaat de Cito-eindtoets officieel niet meer. Vervangen door **Doorstroomtoets** met meerdere aanbieders (Cito Doorstroomtoets, IEP, Route 8, Dia, AMN). Cito (bedrijf) is nog steeds ÉÉN van de aanbieders — maar "Cito-eindtoets" als algemene term is achterhaald.

Mark wens 2026-05-11: overal vervangen waar het over de toets gaat. Maar pragmatisch:

**WEL vervangen** (schoolrealiteit-context, user-facing):
- "Cito-eindtoets" → "Doorstroomtoets"
- "Cito eindtoets" → "Doorstroomtoets"
- "Cito-toets" → "Doorstroomtoets"
- UI-copy, leerpad-titles, leerpad-intro's
- Public HTML (SEO-pagina's) — al dubbel: "Doorstroomtoets (voorheen Cito-eindtoets)"
- ICP-tekst: "Cito-ouder" → "Doorstroomtoets-ouder" of "Cito/Doorstroomtoets-ouder"
- CLAUDE.md, memory files, docs/

**NIET vervangen** (technisch + SEO):
- **Component-/bestandsnamen** (`CitoPage.jsx`, `citoMixVragen.js`, `citoStrategieenGroep8.js`) — refactor breekt imports + git-blame. Laten staan.
- **Trigger-keywords** (`"cito"` als zoekterm in leerpaden) — ouders googlen nog jaren "cito". TOEVOEGEN: "doorstroomtoets" als extra keyword.
- **Oude SQL-dump** (`scripts/questions-insert.sql`) — niet kritisch, blijft staan.
- **"Cito-stof"** generiek (de inhoud rekenen/taal/wereld) mag blijven óf dubbel ("Cito-/Doorstroomtoets-stof").

**Why**: Schoolrealiteit anno 2025 = Doorstroomtoets. Mark wil niet dat ouders denken "deze app is verouderd". Maar SEO + bestaande naam-herkenning vereist dat "Cito" blijft als zoekterm. Beste van twee werelden: nieuwe naam in copy, oude naam als alias.

**How to apply**:
- Bij elke nieuwe leerpad-titel/intro: gebruik "Doorstroomtoets" als hoofdterm.
- Bij elke nieuwe UI-tekst: idem.
- Bij update van bestaande content: vervang "Cito-eindtoets" → "Doorstroomtoets" (1-op-1).
- In trigger-keywords: laat "cito" staan + voeg "doorstroomtoets" toe.
