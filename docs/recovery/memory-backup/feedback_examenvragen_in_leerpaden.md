---
name: Examenvragen IN gewone leerpaden, met duidelijke bron-markering
description: Mark wil echte eindexamenvragen meteen zichtbaar in de leerpaden zelf — niet in een apart pad — voorzien van een duidelijk label dat onthult: niveau + jaar + tijdvak + vraagnummer.
type: feedback
originSessionId: 117df0ef-b194-40f2-8e60-f054bcb3b40a
---
# Echte examenvragen MOETEN in de gewone leerpaden

Mark zag op 2026-05-09 een gewone leerpad-vraag ("Wat is M1 geldhoeveelheid?")
en miste de markering dat dit een echte examenvraag was. Hij vroeg expliciet:
"waar zitten hier de echte examen vragen?".

**Why**: leerling moet zien dat het ECHT examenmateriaal is (motiveert,
serieus signaal). En de bron-info (niveau/jaar/vraagnr) maakt het
verifieerbaar — leerling kan zelf het examen erbij pakken.

## Hoe markeren

Markdown-prefix bovenaan de vraag, dan witregel, dan de echte vraag:

```
🎓 _Echt examen VMBO-GL en TL 2025 tijdvak 1, vraag 6_

<originele vraagtekst>
```

- `🎓` icoon voor visuele badge
- Italic voor 'echtheid'-signaal
- Volledige bron: niveau + jaar + tijdvak + vraagnr
- Witregel zodat de vraag visueel los blijft

## Hoe NIET

- ❌ Vragen in apart "examen-oefenpad" zetten — dat zoekt leerling niet, en mist de natuurlijke flow van uitleg → vragen → examen
- ❌ Alleen "Examen 2024-T1 V41:" zonder niveau-info — onduidelijk welke schooltype/niveau
- ❌ Examenvragen identiek aan reguliere vragen tonen — dan ziet leerling niet dat het ECHT is

## How to apply

- Bij iedere examenvraag-injectie (alle vakken, niet alleen economie)
- Pipeline: scripts/add_examenvragen_*.py — render_check moet dit label-format gebruiken
- Examen-pad als apart concept is **vervallen** — alles in gewone leerpaden
- Filter blijft via `level: vmbo-gt-4` op de leerpaden zelf (lagere klas ziet die paden niet)
