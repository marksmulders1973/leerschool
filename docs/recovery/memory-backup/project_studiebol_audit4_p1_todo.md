---
name: Leerkwartier — P1-todo na 4-agent-audit 2026-05-18
description: Volgende sessie (2026-05-19) — P1-items na P0-completie. Concrete files + effort + audit-bron per item zodat Claude direct kan starten.
type: project
originSessionId: 37638b7e-fef5-47c3-ba00-7ae3f9b856bb
---
# Stand 2026-05-18 einde-sessie

P0 van 4-agent-audit compleet (~15 commits). Mark wil **morgen P1 oppakken**.

## P1-items in prioriteit-volgorde

### 1. **VMBO Geschiedenis-SI** ~15u (Agent B-bevinding)
Officiële VMBO-GT 2026 syllabus eist 3 onderwerpen die ontbreken:
- **Staatsinrichting Nederland 1848** (Thorbecke, grondwet, regering, parlement)
- **Koloniale relatie Indonesië 1900-1949**
- **Sociale zekerheid + welvaartsstaat NL**

Bouw 3 paden zoals schrijvenTekstenPo.js-template:
- File: `src/learnPaths/staatsinrichting1848.js` (level: vmbo-gt-4, subject: geschiedenis)
- File: `src/learnPaths/kolonieIndonesie.js` (level: vmbo-gt-4, subject: geschiedenis)
- File: `src/learnPaths/socialeZekerheidNL.js` (level: vmbo-gt-4, subject: geschiedenis)
- Registreren in `src/learnPaths/index.js`
- `node scripts/buildPathManifest.mjs` na elk pad

### 2. **AK VMBO Nederland-water** ~6u
- File: `src/learnPaths/nederlandWaterVo.js` (level: vmbo-gt-4, subject: aardrijkskunde)
- Deltawerken / Maeslantkering / klimaatadaptatie / IJsselmeer / dijken / Watersnood 1953
- 5 stappen × ~5 checks

### 3. **Engels CSE woordenschat + leesvaardigheid uitbouw** ~8u
- Bestaand: cse-leesvaardigheid-engels + woordenschat-paden
- Uitbreiden met 5-10 extra check-vragen per stap (CSE-stijl)
- Of: nieuw pad `cseStrategieEngelsVmbo.js` met scan-vraagsoorten + valstrikken

### 4. **CitoPage groep-prompt** ~3u (Mark-feedback nodig)
- Bij `/cito`-deeplink zonder userLevel: modal "Welke groep?" voor groep wordt gezet
- QW-C was default-detectie via useMemo; niveau-wizard P0-4 vangt veel op
- Eventueel overslaan als niveau-wizard al genoeg fixt

## Belangrijke contexten voor morgen

**Open Mark-actie uit 2026-05-18:**
- SQL-migration `supabase/migrations/20260518_claim_link_code.sql` apply via Supabase MCP. Tot dan werkt KoppelcodeBanner niet (toont "Geen verbinding met de koppel-server").

**Volledige todo-overzicht** uit 4-agent-audit:
- P0 ✅ klaar
- P1 (deze memory) ⏳ morgen
- P2: VVN Verkeersexamen (14u) + HAVO/VWO eindexamens (100u) + Groep 3-5 lees+rekenen (25u)
- P3: Mediawijsheid PO (25u) + Frans/Duits onderbouw (12u) + Daily-streak push (8u)

**Tijdsinschatting tot "af":**
- MVP Cito-piek-ready (P0+P1): ~80u = 4 weken
- Brede dekking (+P2): ~250u = 3-4 maanden
- Echt af (+P3): ~400u = 6-9 maanden

## Werkwijze morgen

1. Check memory + AUTONOOM-BACKLOG sessie-log (`2026-05-18`-regel) voor context
2. Pak top P1-item (Geschiedenis-SI Staatsinrichting 1848 eerst — bouwt op bekende NL-geschiedenis-paden)
3. Schrijf pad volgens patroon `schrijvenTekstenPo.js` (5 stappen × ~5 checks, uitlegPad 3-niveau, didactische wrongHints)
4. Registreer in index.js + rebuild pathManifest + build + commit + push per pad
5. Geen vragen aan Mark — directe iteratie (zoals 2026-05-18 succesvol was)

**How to apply:** start morgen-sessie met "Lees `project_studiebol_audit4_p1_todo`-memory + pak top-item" prompt.
