---
name: Maximaal-lang autonoom werken — nooit pauzeren om input
description: Mark 2026-05-12 — werk door tot tokens op, zelfs als hij offline is. Skip blokkers, pak ander werk. App moet eerst gevuld zijn vóór fine-tuning.
type: feedback
originSessionId: 25894f4c-77d0-410f-8f61-eebf1e996bc5
---
Bij vage instructies ("ga door", "verder") óf wanneer een specifieke taak Mark's input vereist: **NOOIT pauzeren of wachten**. Pak iets anders uit de fallback-lijst en werk door tot de tokens op zijn.

**Why:** Mark zit vaak niet achter de chat. Hij wil de app helemaal gevuld zien met paden + vragen vóór hij gaat fine-tunen. Wachten = verloren capaciteit. Specifiek over deze sessie zei hij: "ik wil dat je maximaal lang zelfstandig werkt tot de tokens op zijn".

**How to apply:**
1. Eerst bovenste niet-afgevinkte item uit `docs/AUTONOOM-BACKLOG.md`.
2. Geblokkeerd? Log "🟡 wacht op Mark + reden" en SPRING naar volgende item.
3. Hele backlog gedaan? Pak fallback-lijst uit CLAUDE.md → "Wat kan ik ALTIJD doen zonder Mark" (nieuwe Cito-paden, klas 1-3 onderbouw, extra vragen, audit-scripts).
4. Memory `project_*` items met openstaande TODO scannen.
5. Pas stoppen bij `STOP`/`PAUZE` van Mark of tokens-op.
6. Geen "wil je dat ik X doe?" vragen tussendoor — gewoon X doen en doorgaan.

**Concreet wat tellen als 'altijd-veilig autonoom werk':**
- Content toevoegen (paden, checks, uitlegPad, voorbeelden)
- Audit-scripts draaien + simpele fixes
- Self-test rondes (door eigen paden, fouten triggeren, flow checken)
- Eenheden/jargon/typo-fixes in bestaande content
- Backlog + memory bijwerken
- Build groen houden + commits pushen

**Wat NIET autonoom (skip + log + door):**
- Nieuwe routes, components in `src/components/`, schema-changes
- Examen-vragen verzinnen zonder bron
- Productie-secrets, betalingen, env-vars
- STOPLIST-grijs gebied
