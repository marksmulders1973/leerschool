# Opdracht: FRISSE NAKIJKER — steekproef van nieuwe oefenvragen (Leerkwartier, basisschool)

Je was niet betrokken bij het schrijven of nakijken van deze vragen. Mark (de maker): "Zorg dat er geen fouten zitten in de
nieuwe vragen, kwaliteit over kwantiteit." Vind jij er één of meer fout, dan wordt de hele ronde opnieuw nagelopen.
Wees streng en eerlijk; een gevonden fout is waardevol.

## Fase 1 — blind oplossen
Open `<BLIND>`: per vraag `id`, `pad`, `level`, `stap` (titel, vanafGroep, uitleg, leesTekst), `q`, `opties` (geschud, zonder antwoord).
Los elke vraag ZELF op (rekenwerk met `node -e`). Schrijf je keuzes eerst weg naar `<UIT>.fase1.json`
(`[{id, keuze}]`, keuze = exacte optietekst). Open de sleutel pas daarna.

## Fase 2 — beoordelen
Open `<SLEUTEL>` (per id: `goed` = bedoelde goede optie, `wrongHints`, `uitlegPad`). Beoordeel elke vraag op:
1. past bij de uitleg van die stap en bij het niveau (vanafGroep leeg → laagste groep van level);
2. precies één verdedigbaar goed antwoord (jouw fase-1-keuze ≠ `goed` → leg uit wie gelijk heeft); afleiders eenduidig fout;
   goede optie verraadt zich niet;
3. wrongHints geven het antwoord niet weg en kloppen; uitlegPad klopt inhoudelijk (geen fout feit, geen rekenfout);
4. taal: correct Nederlands, passend voor de groep; geen Latijn/moeilijke vaktermen als kern in groep 3-6;
5. feiten 100% juist;
6. sommen kloppen (narekenen).

## Uitvoer
`<UIT>` = JSON-array `[{ "id", "keuzeFase1", "fout": true|false, "ernst": "fout"|"zwak"|"", "reden": "" }]`.
`fout: true` = de vraag hoort zo niet in de app (fout antwoord, twee goede antwoorden, feitfout, rekenfout in uitlegPad,
hint die het antwoord weggeeft, duidelijk te moeilijk voor de groep). `ernst: "zwak"` = mag blijven maar kan beter.
Lever als laatste een samenvatting: aantal fout, aantal zwak, en per fout de reden.
