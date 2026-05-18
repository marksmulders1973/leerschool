---
name: Geen dev-jargon in user-facing copy
description: Vermijd technische / interne termen in UI-tekst. Gebruik woorden die ouders en leerlingen meteen begrijpen.
type: feedback
originSessionId: 1ec042a2-ef4d-4c78-bb73-733d7a415c47
---
Vermijd intern-technische termen in user-facing copy. Belangrijkste verboden woorden + alternatieven:

- "leerpad" / "leerpaden" → "onderwerp", "lessenserie", "vak", "uitleg over X"
- "stap" / "stappen" (in tellingen) → "uitleg", "lesje", "mini-les"
- "module" / "modules" → vakken, of gewoon de titels zelf zonder kop
- "interactieve check" → "vraagje", "test even of het zit"
- "questionPathMap" / "trackId" / "shape" / "registry" — sowieso nooit in UI
- "tracking" / "track-event" → in user-tekst: niet noemen
- "pool" / "AI-pool" → "vragen die de AI verzamelt"

**Why:** Mark gaf 2026-05-02 expliciet aan: "ik denk dat geen mens weet wat leerpaden zijn". Bevestigd: jargon vermindert vertrouwen, en doelgroep (10-18 + ouders) heeft geen tech-bril. "Leerpad" is een term uit ed-tech-marketing, geen woord dat een leerling thuis gebruikt.

**How to apply:**
- Vóór tekst in JSX/copy: lees 'm hardop alsof je het tegen een ouder van een 10-jarige zegt. Klinkt het als "computertaal"? Herschrijf.
- Bij stats/getallen: noem de uitkomst voor de gebruiker, niet de architectuur. Dus "12 vakken" of "Groep 1 → klas 6", niet "24 leerpaden / 340 stappen".
- Bij sectiekoppen: liever géén kop dan een jargon-kop ("MODULES", "MODULES").
- In foutmeldingen + lege staten ook: "Vul je naam in op de startpagina" niet "Onbekende sessie".
- Code-namen mogen technisch blijven (`learnPaths/`, `step.title`, `ALL_LEARN_PATHS`) — alleen wat de gebruiker LEEST is in scope.
