# Content-doelen — eindstand per categorie

> **Vastgepind 2026-05-14**. Doel: weten wat "vol" betekent per onderdeel,
> zodat we per sessie kunnen meten hoeveel % er nog te doen is.
> Wordt periodiek hergeteld via `scripts/inventarisatieContent.mjs` (TODO).

## Prioriteit-volgorde

Volgt CLAUDE.md: **Doorstroomtoets-ouder groep 6-8 = primaire ICP**, VMBO-examens secundair, klas 1-3 onderbouw VO uitgesteld.

| Prio | Categorie | Reden |
|---:|---|---|
| 🔴 1 | Doorstroomtoets G8 | Primaire ICP — diepte boven breedte |
| 🟠 2 | VMBO-examens authentiek + examen-leerpaden | USP-anker (echte uitleg + voorkennis-keten) |
| 🟢 3 | PO-leerpaden onderwerpen-gap | Cito-kern dekking |
| ⚪ 4 | Boeken / methode-mapping | Onderhoud, snoei oude edities |

## Doelen per categorie

### 🔴 Doorstroomtoets G8 (3 onderdelen)

| Onderdeel | Doel | Onderbouwing |
|---|---:|---|
| Taal | 210q | 150 oefen-vragen + 2× 30-vragen proef-toets |
| Rekenen | 210q | idem |
| Studievaardigheden | 210q | idem |
| **Totaal** | **630q** | |

**Regel**: eigen vragen "in stijl van" Cito-PDF — NOOIT kopiëren (alle 5 aanbieders zijn privaat, copyright-bescherming). Externe link naar officiële PDF bij elk thema.

### 🟠 VMBO-examens authentiek (8 vakken)

Doel: **70 echte vragen per vak** = ~2 complete examens (jouw voorstel 2026-05-14). Plus 2 examen-leerpaden per vak (didactische uitleg-laag met `voorkennisKeten` + `leerpadLink`).

| Vak | Doel auth. | Examen-paden didactisch |
|---|---:|---:|
| Aardrijkskunde | 70 | 2 |
| Biologie | 70 | 2 |
| Economie | 70 | 2 |
| Engels | 70 | 2 |
| Geschiedenis | 70 | 2 |
| Maatschappijkunde | 70 | 2 |
| Nederlands | 70 | 2 |
| Wiskunde | 70 | 2 |
| **Totaal** | **560q** | **16 paden** |

**Regel**: alleen authentieke vragen, geen paraphrase (VMBO-examens via examenblad.nl zijn wettelijk openbaar). Audit-script `scripts/auditKennisgraaf.mjs` checkt broken `leerpadLink`.

### 🟢 PO-leerpaden (groep 6-8)

| Type onderwerp | Min (speelbaar) | Streefdoel | Max |
|---|---:|---:|---:|
| Klein (bv. interpunctie) | 20 | 40 | 60 |
| Middel (bv. procenten) | 40 | 75 | 100 |
| Groot (bv. breuken, kommagetallen) | 60 | 120 | 150 |

**Huidige standaard**: 40q/pad over alle 62 PO-paden — voldoet aan "streefdoel-klein". Geen verbreding qua aantal; wel: ontbrekende onderwerpen toevoegen (zie `project_studiebol_content_roadmap`).

### ⚪ Boeken / methode-mapping

- **Edities-regel**: laatste 2 edities per methode + 1 nog-veel-gebruikte oudere editie (scholen lopen achter).
- **Mapping-laag** in `src/data/bookChapterToLearnPath.js`: één leerpad ↔ meerdere boek-hoofdstukken.
- **Audit-doel**: `textbooks.js` opruimen — geen edities > 5 jaar achterstand tenzij actief in gebruik.

## Huidige status (2026-05-14)

### Doorstroomtoets G8 — 36% gevuld

| Onderdeel | Doel | Nu | Gevuld | Tekort |
|---|---:|---:|---:|---:|
| Taal G8 | 210 | 74 | 35% | **136q** |
| Rekenen G8 | 210 | 74 | 35% | **136q** |
| Studievaardigheden G8 | 210 | 79 | 38% | **131q** |
| **Subtotaal** | **630** | **227** | **36%** | **403q** |

### VMBO-examens — 85% maar scheef

| Vak | Doel | Geparseerd | Skipped⚠️ | Tekort vs doel |
|---|---:|---:|---:|---:|
| Aardrijkskunde | 70 | 4 | 43 | **94%** |
| Biologie | 70 | 52 | 157 | 26% |
| Economie | 70 | 62 | 199 | 11% |
| Engels | 70 | 142 | 64 | overcompleet (203%) |
| Geschiedenis | 70 | 37 | 149 | 47% |
| Maatschappijkunde | 70 | 48 | 76 | 31% |
| Nederlands | 70 | 131 | 105 | overcompleet (187%) |
| Wiskunde | 70 | **0** | 21 | **100%** |
| **Subtotaal** | **560** | **476** | **814** | 15% — maar scheef |

### De 814 skipped vragen — onderzocht 2026-05-14

| Reden | Aantal | Karakter |
|---|---:|---|
| `open/complex` | **797** | **Bewust** — open vragen (geen MC). Parser ondersteunt alleen MC. |
| `geen MC-antwoord in correctie` | **17** | **Echte bug** — parser herkent vraag als MC maar vindt antwoord niet in correctievoorschrift. |

**Bijgestelde conclusie**: er is GEEN grote parser-goudmijn van 814. Wel:

- **17 bugs te fixen** in `scripts/parse_examen.py` — regex `vraag_marker_re` matcht niet bij sommige correctie-formats. Concrete files met bugs:
  - `biologie-2024-T1` v22, `biologie-2024-T2` v13
  - `economie-2023-T1` v17, `economie-2025-T2` v7/11/32/34
  - `engels-2023-T1` v30, `engels-2024-T2` v18/19/26
  - `geschiedenis-2023-T1` v40
  - `maatschappijkunde-2023-T1` v5/6/7/8 (4 op rij — waarschijnlijk format-variant)
  - `nederlands-2025-T2` v11
- **Open-vraag-modus** = aparte feature, géén parser-fix. Vereist nieuwe spel-modus in de quiz-engine (typ-antwoord of begeleide invoer).
- **Wiskunde-examens zijn inherent open** — alle 21 vragen in 2025-T1 zijn open. Zonder open-vraag-modus blijft wiskunde op 0 MC-vragen. Optie: numerieke-invoer-modus voor reken-antwoorden.

### Implicaties voor doelen

| Vak | Originele "tekort" | Realistisch tekort (zonder open-modus) |
|---|---:|---:|
| Aardrijkskunde | 94% | **94%** — open-modus nodig, MC is schaars in dit vak |
| Wiskunde | 100% | **100%** — open-modus of numerieke-invoer nodig |
| Geschiedenis | 47% | **47%** — +1 vraag uit bug-fix |
| Maatschappijkunde | 31% | ~25% — +4 uit bug-fix |
| Overige | klein | -1 à 5 vragen per vak via bug-fix |

**Eindstand**: parser-fix levert ~17 extra vragen op (klein). De échte hefboom voor aardrijkskunde + wiskunde + geschiedenis-volledigheid is **open-vraag-modus** bouwen — apart project, géén quick win.

### PO-leerpaden — 100% van eigen-standaard

62 paden, allemaal op 40q. Vraag-aantal niet de bottleneck — onderwerpen-gap wel (apart tracken).

## Volgende acties (afgeleid)

1. 🔴 Doorstroomtoets-onderdelen verdiepen tot 210q elk (403 vragen werk).
2. 🟠 Parser-fix in `scripts/parse_examen.py` (`vraag_marker_re`-regex) → 17 vragen redden, 1 sessie werk. Lijst staat hierboven.
3. 🟠 **Open-vraag-modus** evalueren — apart project. Vereist:
   - Nieuwe `kind: 'open'`-questiontype in quiz-engine
   - Antwoord-vergelijking met fuzzy match (synoniemen, accenten)
   - Of: AI-grading via Claude API voor open antwoorden
   - Maakt aardrijkskunde + wiskunde + geschiedenis-completheid haalbaar
4. 🟢 Methode-mapping check: welke edities zijn weg in `textbooks.js`?
