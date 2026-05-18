---
name: Geen keuze-menu bij vage "ga verder"-instructies
description: Mark expliciet 2026-05-11 — bij "ga verder"/"door"/"vervolg" direct bovenste backlog-taak uitvoeren, geen 4-opties-menu maken. Tijdverspilling.
type: feedback
originSessionId: 35c70f04-c959-464d-81e1-52fb1e57c84c
---
Mark werkt in autonome modus (CLAUDE.md, t/m 2026-05-24) en heeft `docs/AUTONOOM-BACKLOG.md` opgesteld als prioriteits-bron. Bij vage instructies als **"ga verder"**, **"verder"**, **"door"**, **"ga door"** of **"vervolg"**:

**Direct doen**:
1. Lees bovenste niet-afgevinkte taak uit `docs/AUTONOOM-BACKLOG.md`.
2. Begin uitvoeren — build, commit, push per chunk.
3. Werk tot tokens op of natuurlijke stop.

**Niet doen**:
- Geen menu met "Optie 1 / 2 / 3 / 4" wat Mark kan kiezen.
- Geen "wat wil je vandaag aanpakken?"-vraag.
- Geen voorstellen voor side-quests (testchecklist, audit, etc.) tenzij Mark dat expliciet vraagt.
- Geen "alles autonoom"-bevestiging vragen — autonome modus = al actief.
- **NIET WACHTEN TUSSEN PADEN** (Mark 2026-05-11 expliciet: "ik wil niet steeds 'ga verder' drukken"). Na commit + push van pad X → direct pad X+1 uit backlog. Geen pauze-bericht, geen uitgebreide samenvatting met emoji-tabel.
- Geen lange "🎉 Klaar voor gebruik" + tabel + volgende-stappen-overzicht na elk pad. Max 1-2 zinnen, dan door.

**Why**: Mark heeft gezegd "kost onnodig tijd, ga door tot tokens op zijn" (2026-05-11). Hij heeft de prioriteit al éénmaal vastgelegd in de backlog; iedere extra vraag = herhaling. Token-budget gaat naar werk, niet menu's.

**How to apply**:
- Bij iedere chat-opening of vage tussen-instructie: skip de meeting-fase, ga direct naar `docs/AUTONOOM-BACKLOG.md` → pak bovenste taak.
- Uitzondering: hard-stops uit CLAUDE.md (architectuur, verzonnen examenvragen, productie-secrets, STOPLIST-grijs) — daar wél vragen.
- Bij testchecklist-werk dat Mark zelf initieert: gewoon uitvoeren, geen pre-vraag of hij het écht wil.
- Vervangt eerder gedrag waarbij ik defaultte naar "Welke wordt het? 1/2/3/4".
