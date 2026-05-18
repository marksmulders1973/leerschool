---
name: Maand 2 plan — 1 geniale leerflow voor Cito (begrijpend lezen)
description: Mark akkoord 2026-05-10. Maand 1 snoei klaar (5 chunks). Maand 2 = 1 vak Cito compleet met uitlegPad-laag. Advies: begrijpend lezen. Plan in docs/MAAND-2-PLAN.md.
type: project
originSessionId: 117df0ef-b194-40f2-8e60-f054bcb3b40a
---
# Maand 2 plan — 1 geniale leerflow

Volledig plan in `docs/MAAND-2-PLAN.md` in repo. Hier de samenvatting voor toekomstige sessies.

## Doel

1 Cito-vak volledig met uitlegPad-laag (3 niveaus + 6 elementen, zoals economie V36 blauwdruk). Geen ander vak aanraken.

## Vakkeuze (mijn advies)

**Begrijpend lezen** omdat:
- Cito's grootste pijler (~50% eindtoets-score)
- 2 paden bestaan al (`begrijpendLezenStrategie`, `begrijpendLezenTekstenPo`)
- Universeel groep 5-8 (rekenen heeft per-groep verschillen)
- Past bij identiteit "rustige bijlesdocent die uitlegt waarom je het niet snapt"
- Cito-ouder-herkenbaar ("begrijpend lezen is moeilijk")

## Inventaris Cito-content

**Bestaande paden (~3000 regels totaal, GEEN met uitlegPad):**
- begrijpendLezen: Strategie (280r), TekstenPo (521r)
- spelling: spelling (638r), EiIjAuOu (317r), OverigePo (206r), werkwoordsspellingDT
- rekenen: cijferendRekenen (266r), geldRekenen, rekenenMetLetters
- woordenschat: woordenschatPo, woordenschatEngels
- citoStrategieenGroep8 (283r) — meta-strategie

uitlegPad-structuur bestaat alleen in 6 economie-examen-paden.

## 4-weken plan

- **Week 1**: blauwdruk uitlegPad voor 1 begrijpend-lezen-vraag, test 1-2u met 1 kind
- **Week 2**: 5-10 vragen schalen
- **Week 3**: alle ~30-50 vragen in begrijpendLezenTekstenPo voorzien — 15-30u werk
- **Week 4**: 5 testfamilies (Mark's netwerk) intensief 2 weken; meet voor/na

## Mark-beslissingen vóór start

1. Vakkeuze: begrijpend lezen of toch spelling/rekenen?
2. Pilot-vraag: welke specifieke vraag uit begrijpendLezenTekstenPo als blauwdruk?
3. Testfamilies bekend?
4. Tempo: schrijft Claude content (15-30u werk) of is Mark content-pen + Claude review?

## Volgende sessie startpunt

Bij Mark "ja begrijpend lezen": week 1 — pilot uitlegPad voor 1 vraag uit begrijpendLezenTekstenPo, dan iteratief schalen.

## STATUS-update 2026-05-10 (sessie-einde)

✅ **Cito-prep VOLLEDIG voorzien (92 vragen totaal)**:
- begrijpendLezenTekstenPo.js — 22 vragen (commits 1457eb5 + ecfaea2)
- begrijpendLezenStrategie.js — 22 vragen (commit f5e61f9)
- citoStrategieenGroep8.js — 21 vragen (commit 533d691)
- spelling.js — 27 vragen (commits 7b3e15a, 348b7eb, 56467a3, b697212)
- spellingOverigePo.js — 21 vragen (commit 8a12e65)

Plus UI-fixes:
- Welkomstvideo terug bij allereerste bezoek
- StudentHome: 🎯 Cito + 🎓 Examen balken altijd zichtbaar (commit ab86bc5)
- HomePage student-tegel: 🎓 Examen oefenen CTA (commit 3f978b3, symmetrie met leerling-Cito)

⏳ **Nog open Cito-paden** (na spelling.js + spellingOverigePo klaar):
- spellingEiIjAuOu.js (30 vragen)
- werkwoordsspellingDT.js (23 vragen)
- cijferendRekenen.js (25 vragen)
- geldRekenen.js
- rekenenMetLetters.js
- woordenschatPo.js
- woordenschatEngels.js

✅ **Welkomstvideo TERUG** bij allereerste bezoek (Mark wens 2026-05-10)
- localStorage `lk_zag_intro_video` check, daarna nooit meer

## Volgende sessie keuze

1. **Test Cito-prep-trio in praktijk** (Mark's dochter / netwerk) + verfijn op didactiek
2. **Bij bewijs dat het werkt**: begin tweede vak: cijferendRekenen (klein, 25 vragen) of spelling (groter, 1161 regels)
3. **Of**: pak A12 Web Push live (VAPID setup door Mark zelf, ~30 min)

Stoplist: niet 2e Cito-vak voordat trio is bewezen. Strakke lijn = test eerst.

## Wat NIET in maand 2 (stoplist!)

- Tweede Cito-vak uitwerken (eerst dit perfect)
- Examen-systemen mergen (kan na maand 2)
- Stripe / paywall
- Web push prompts (A12 wacht nog op Mark setup)
- Nieuwe gamification
