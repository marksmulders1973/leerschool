# 🚶 Kliktocht — vaste flow-check door agents (Mark, 13 aug 2026)

> Mark: "zulke fouten wil ik uitsluiten met agent-checks, ik kan niet alles
> doorlopen." Aanleiding: de profiel-wissel op /mijn stuurde je naar home
> (v292-fix) — technisch werkte alles, maar de ROUTE klopte niet. Dit
> document is de vaste checklijst; CLAUDE.md bepaalt wanneer hij draait.

## Wanneer

Na élke sessie waarin UI of navigatie is aangepast, vóór het
"klaar voor gebruik"-signaal: 1-2 kliktocht-agents (parallel) die de
routes hieronder NALOPEN IN DE CODE (handler → bestemming) en bij twijfel
live checken. Niet elke commit — elke sessie-afsluiting met UI-werk.

## De vraag die de agent per stap stelt

Niet "werkt de knop?" maar: **"kom ik uit waar een gebruiker verwácht uit
te komen — zonder omweg, zonder verlies van context, en kan ik terug?"**

## Route 1 — Nieuw kind (het allereerste kwartier)
1. Homepage → rol kiezen → naam + groep → landt op **Mijn pagina** (niet elders).
2. Op /mijn: groep-label tikbaar → kiezer → keuze past vakken direct aan.
3. "Alle vakken en oefeningen" → StudentHome → vak → oefening → **terug-knoppen
   komen terug waar je vandaan kwam** (niet op home).
4. Ster bij een les → verschijnt in "Mijn lijstje" → Start vanaf lijstje werkt.
5. Oefentoets afronden → resultaat → verschijnt in diploma-kast (of "op weg naar").

## Route 2 — Gezins-apparaat
1. /mijn → 🔁 wissel zichtbaar (óók met 1 profiel) → nieuwe naam ter plekke
   ("Ga!") → profiel wisselt ZONDER omweg via home.
2. Wissel terug → lijstje/thema/avatar van het eerste kind staan er nog.
3. Elke rol (leerling/student/leerkracht/ouder) ziet een passende /mijn
   (student = klas-kiezer; leerkracht = geen schoolstart-kaart; ouder = ouder-weergave).

## Route 3 — Charley-lus
1. /mijn → Charley-kaart → praat-knop → maatje-chat opent → terug naar /mijn.
2. Wens vertellen → belandt in Mark's /tips-wachtrij (pending).
3. Na 💛-goedkeuring: bord toont "gebruiker X." + maatje meldt het antwoord
   éénmalig bij de volgende chat.

## Route 4 — Ouder/partner-instroom (sept-golf!)
1. Flyer-QR → landing → partner-code invoeren → welkom-banner → app in.
2. Ouder-weergave /mijn → koppelcode → ouder-dashboard → weekmail-schakelaar.
3. Diploma "👀 Openen" → oorkonde mét "eerlijk verdiend"-regel → print/PDF-knoppen.

## Route 5 — Dode-props-scan (de stille moordenaar)
Voor elk scherm met nieuwe features: worden de benodigde props op ÁLLE
render-plekken doorgegeven (App.jsx e.a.)? Een vergeten prop = knop die
stilletjes niets doet of een feature die onzichtbaar blijft.

## Uitvoer-format van de agent
Max 10 bevindingen: [P0 route kapot / P1 omweg of context-verlies / P2 schoonheidsfout]
bestand:regel — wat de gebruiker ervaart → kleinste fix. Eindig met: "gelopen
routes: X van 5" zodat overslagen delen zichtbaar zijn.
