---
name: Bij vage bugmelding eerst reproductie vragen, niet blind fixen
description: Mark meldt bugs vaak kort en informeel — niet meteen 3 fixes pushen, eerst concreet vragen wanneer/waar het gebeurt
type: feedback
originSessionId: d6f078ee-1f39-4585-8a79-5bbc13715895
---
Als Mark een bug meldt zonder reproductie-stappen ("soms als je springt teleporteer je"), niet meteen theorieën verzinnen en commits pushen — eerst 1 of 2 gerichte vragen stellen om het moment vast te pinnen.

**Why:** 2026-05-07 OBLITERATOR-sessie. Mark meldde een vage jump-teleport-bug. Ik gokte 3x een fix (game-over flow, cache-buster, debug-hook) zonder reproductie-info. Geen ervan raakte de bug. Mark werd duidelijk gefrustreerd ("het werkt nog niet" → "ik kan niks zien" → "ach ja laat maar"). Bovendien brak mijn cache-buster met `?v=` querystring de game in file:// modus — Mark zag een leeg scherm. Tijd verspild en hij gaf op.

**How to apply:** Bij bug-meldingen zonder context, vraag eerst 1-2 specifieke dingen: "wanneer precies — bij welke score / overgang / actie?" en "wat zie je — geen sprong, of wel sprong en plots op grond?". Pas commits maken als je weet wat je raakt. Eén verkeerde fix is OK; 3 op rij ondergraaft vertrouwen.
