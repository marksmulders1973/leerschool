---
name: Klaar-voor-gebruik signaal aan einde
description: Bij langer werk (build + push + Vercel deploy) wil Mark de zin "klaar voor gebruik" aan het einde, zodat hij weet wanneer hij kan testen.
type: feedback
originSessionId: f615c9a5-255c-4b56-b88a-3122a91a8ec8
---
Bij grotere taken (meerdere edits + build + push + waarop Vercel nog moet redeployen): sluit het bericht expliciet af met **"klaar voor gebruik"** wanneer het echt deploybaar/testbaar is.

**Why:** Mark kan niet uit losse stappen afleiden wanneer iets klaar is om te testen op de telefoon. De Vercel-deploy + cache-refresh maakt het lastig timen; een expliciet eindsignaal voorkomt dat hij gokt.

**How to apply:** Altijd doen bij Studiebol-werk dat naar productie gaat. Niet nodig bij research, vragen-beantwoorden of korte één-edit-fixes. Het signaal komt PAS aan het einde als build + commit + push echt klaar zijn — niet halverwege.
