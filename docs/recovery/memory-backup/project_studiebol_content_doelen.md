---
name: Studiebol — content-doelen vastgepind 2026-05-14
description: Doel-aantallen per categorie (Doorstroomtoets G8, VMBO-examens, PO-paden) + huidige status in % gevuld
type: project
originSessionId: 45508d70-ab05-4d44-8cf2-e68ec34e2d18
---
Doelen vastgepind 2026-05-14 in `docs/CONTENT-DOELEN.md`. Sporen op `docs/AUTONOOM-BACKLOG.md` sectie "📊 Sprint Content-doelen".

**Why**: Mark wilde weten wat "vol" betekent per onderdeel en hoeveel % er nog te doen is, voor we doorgaan met content-werk. Voorkomt eindeloos vullen zonder eindpunt.

**How to apply**: bij content-werk → check welk spoor + welk % gevuld. Bij rapportage altijd in % uitdrukken vs vastgepinde doelen.

## Doelen-tabel (2026-05-14)

| Categorie | Doel | Reden |
|---|---:|---|
| Doorstroomtoets G8 (3 onderdelen) | 210q per onderdeel = 630q totaal | 150 oefen + 2×30 proef. Primaire ICP. |
| VMBO-examens authentiek (8 vakken) | 70q per vak (≈2 examens) = 560q totaal | Mark's voorstel; USP-anker. |
| Examen-leerpaden didactisch | 2 per vak = 16 paden | Loop examen → begrip → leerpad. |
| PO-leerpaden (groep 6-8) | 40q standaard, 100q max bij grote onderwerpen | Bestaande bouw-standaard. |
| Boeken | Laatste 2 edities + 1 nog-veel-gebruikte | Scholen lopen achter, snoei oud. |

## Stand op 2026-05-14

- Doorstroomtoets G8: **36% gevuld** (227 / 630q) → 403q te maken
- VMBO-examens: 85% maar scheef (Wiskunde + Aardrijkskunde leeg, NL + Engels overcompleet)
- PO-leerpaden: 100% van standaard (62 paden × 40q)
- Skipped vragen onderzocht: 797 zijn bewust (open vragen) + 17 echte parser-bugs

## Sporen (volgorde uitvoering)

1. 🔴 Doorstroomtoets G8 verdiepen — 403q werk, primaire ICP
2. 🟠 Parser-fix 17 bugs in `scripts/parse_examen.py` — klein, snel
3. 🟡 Open-vraag-modus overwegen — groot, apart project; ZONDER dit blijven aardrijkskunde + wiskunde structureel onvolledig
4. ⚪ Methodes/edities-audit in `src/data/textbooks.js` — lage prio
