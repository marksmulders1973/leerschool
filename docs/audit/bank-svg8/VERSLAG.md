# Bank "Doorstroomtoets — studievaardigheden (groep 8)" integraal nagekeken — 3 nov 2026

Aanleiding: 8 van de 21 fouten uit de eindmetingen van 3 nov zaten in dit pad. Werkwijze: `scripts/audit/bank-dump.mjs doorstroomtoets-studievaardigheden-g8 docs/audit/bank-svg8` (330 vragen · 68 al in het register · 10 uitgeschakeld · **252 open** in 5 pakketten) → 5 Opus-nakijkers (blind oplossen, beoordelen, herstellijst schrijven, bronbestand niet aanraken) → `pas-fixes-toe.mjs svg8-NN` (nieuwe DOEL-sleutel `svg8-`).

**Telling:** 252 nagekeken · 153 goed · **17 fout (6,7 %)** · 82 twijfel · 99 hersteld · **0 foute antwoordsleutels** (alle 252 blinde keuzes = antwoord). Herstellijsten: 50 + 33 + 37 + 33 + 31 = **184 regels toegepast, 0 overgeslagen**. Register 4.094 → 4.329.

## Soorten fouten
- **Vraag doet het werk al / antwoord in de vraag:** volgorde al genummerd (118, 122), rijtje al op alfabet (238, 249), legenda-betekenis in de vraag (139), windrichting genoemd (102, 143, 149), Ctrl+F uitgelegd (43), bedragen al uitgerekend in de opties (178).
- **Hint noemt/omschrijft het antwoord:** 54, 87, 88, 90, 225; "hoofdwoorden" i.p.v. gidswoorden (28, foute term).
- **Verwijzing naar lijst/tabel die het kind niet ziet:** 241.

## Twijfel, hersteld
- ~30 hulpstappen (`niveaus.basis`) die alleen het antwoord gaven → echte hulpstappen.
- Absurde afleiders vervangen door echte valkuilen (o.a. 181, 183, 189, 199, 205, 209, 211, 216, 218, 224, 228, 240, 243, 246-248, 252); te makkelijke rijtjes/letters steviger (7, 29, 121, 235, 242); telegramzinnen → volzinnen; stap-uitleg die een vraag voorrekende kreeg andere voorbeeldgetallen (stap 1, 2, 3); 220 omgebouwd tot echte tabel-vraag.

## Bewust gelaten
- Opties staan in de bron op alfabet of met het antwoord vooraan: de app schudt (`shuffleOptions`), dus geen probleem.
- Dubbele begrippen (ruit, vergelijkingstabel, index, atlas) en makkelijke opwarmvragen kloppen inhoudelijk.

## Controles
`node --check` · `npm run audit:vragen`: 0 meldingen · vitest 2063/2063 · startset groep 8 studievaardigheden: 2 vragen kregen volzinnen i.p.v. telegramzinnen (zelfde vragen, zelfde antwoorden).

Volgende: zelfde integrale ronde voor doorstroomtoets-rekenen-g8 (4 van de 21 fouten) en doorstroomtoets-taal-g8, daarna nameting 3.
