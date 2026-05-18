---
name: Examen-modus vs Oefen-modus splitsen (+ premium-overweging)
description: Mark beslissing 2026-05-09: examenpaden splitsen in 'examen-modus' (authentiek, tijdsdruk, geen hulp) en 'oefen-modus' (didactisch, hints, leerpad-link per vraag). Examen-modus mogelijk premium-feature.
type: feedback
originSessionId: 117df0ef-b194-40f2-8e60-f054bcb3b40a
---
# Examen-modus vs Oefen-modus splitsen

Mark beslissing 2026-05-09 (na didactiek-agent dilemma): SPLITSEN.

## Examen-modus (authentiek)

- **Originele examen-volgorde** (vraag 1, 2, 3, ... zoals in echte examen)
- **Tijdsdruk**: countdown gelijk aan officiele examenduur (vmbo-gt economie = ~90 min)
- **Geen hints tijdens beantwoorden** (geen wrongHints)
- **Geen "Ik begrijp niet"-knop** zichtbaar
- **Geen "Leg uit"-knop** tijdens beantwoorden
- **Feedback pas aan het eind**: eindscore + per-vraag fout/goed + uitleg
- **Bron-tekst wel zichtbaar** (mag in echt examen ook)
- **Doel**: simulatie. Voor laatste week voor examen.

## Oefen-modus (didactisch)

- **Didactische volgorde** (clusters per onderwerp, evt. makkelijk → moeilijk)
- **Geen tijdsdruk**
- **WrongHints actief** (denkprikkels per fout antwoord)
- **"Ik begrijp niet"-knop zichtbaar** met leerpad-link
- **"Leg uit"-knop na antwoord**
- **Direct feedback per vraag**
- **Doel**: leren van vragen + concepten begrijpen

## Implementatie-opties

**Optie A: 1 pad met mode-toggle**
- 1 leerpad-bestand bevat alle vragen
- Pad-niveau-veld `modes: ["exam", "practice"]`
- LearnPath-component checkt mode + verbergt/toont hints/timer
- Voordeel: 1 bron van waarheid voor data
- Nadeel: complexere UI, beide modi delen 1 progress-tracker

**Optie B: 2 paden in hub**
- Pad A: `examen-economie-2025-t1-examen` (mode-veld: "exam")
- Pad B: `examen-economie-2025-t1-oefen` (mode-veld: "practice")
- Hub toont 2 entries
- Voordeel: helder voor leerling, separate progress
- Nadeel: data deels gedupliceerd

**Voorkeur**: Optie A met toggle — minder duplicatie, modus-keuze BIJ start van pad. Pad heeft `data` (vragen + bronnen) en `mode` (visueel + interactie).

## Premium / monetisatie-overweging

Mark idee: **examen-modus achter paywall** als de app succesvol wordt.

Logisch want:
- Oefen-modus = brede waarde (leren), past bij gratis-tier
- Examen-modus = specifiek voor examenkandidaten = high-intent gebruikers = bereid te betalen
- Eindexamen-stress is sterke driver

Toekomst-architectuur:
- Pad-veld `premium: true | false`
- Hub toont premium-paden met slot-icoon + "Upgrade om examen-modus te ontgrendelen"
- Stripe/Mollie integratie pas als app meer gebruikers heeft

**Niet voor nu** — alleen architectuur toekomstvast houden door pad-modus-veld in te bouwen.

## How to apply (toekomst)

Bij elke uitrol van nieuw examen-pad:
1. Maak 1 leerpad-bestand met alle vragen
2. Pad heeft `availableModes: ["exam", "practice"]` veld
3. Default-modus bij eerste open: "practice"
4. Toggle in pad-overzicht boven aan: "Examen-modus" / "Oefen-modus"
5. UI past zich aan op basis van geselecteerde mode

Voor MVP: pilot economie 2025-T1 = oefen-modus only. Splits-feature komt
later als architectuur dat ondersteunt.
