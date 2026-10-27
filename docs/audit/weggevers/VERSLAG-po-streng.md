# Strenge ronde basisschool — eindverslag + eindmeting (27 okt 2026)

## Uitkomst in het kort
- **Alle 26 batches zijn gedaan** (132 paden, ~6.500 vragen; batch 1-25 op main sinds v942/v972, batch wereld-4 op branch `audit3/wereld-4`, 27 okt). Verslagen per batch: `docs/audit/weggevers/po/verslag-*.md`.
- **Eindmeting basisschool (27 okt, 200 willekeurige vragen uit alle 149 basisschoolpaden, seed 20261027, vier onafhankelijke nakijkers à 50): 31 fout + 2 dubbelzinnig = 16,5 %** (twijfel 31, goed 136). Doel was ≤ 2 %. **Niet gehaald.**
- De maatstaf van deze meting is strenger dan die van 13 okt (9,5 % op 116 basisschoolvragen): "hint rekent het antwoord voor", "telegramzin" en "antwoord in de vraag" tellen nu consequent als fout. Met die maatstaf zijn de batches 1-25 nog niet nagekeken; batch wereld-4 wel (zie hieronder) en daar zat 1 van de 33 fouten (werelddelen stap 1 vraag 1).

## Waar de 33 fouten zitten
| oorzaak | aantal |
|---|---|
| hint noemt, verraadt of rekent het antwoord voor (incl. hints die samen per uitsluiting het antwoord geven) | 14 |
| telegramzin / lidwoord mist / taalfout in de vraag | 7 |
| feitfout (beweegrichtlijn 60 min; Groningen heeft wél eilanden; "kennen elkaar niet goed") | 3 |
| antwoord staat (bijna) letterlijk in de vraag | 3 |
| raadbaar door de vorm (absurde afleiders, gematigd midden) | 2 |
| tweede goed antwoord | 1 |
| overig (dubbelzinnig eindteken; nieuwkomer-vraag herhaalt opdracht) | 3 |

Per pad: doorstroomtoets-studievaardigheden-g8 **6** (batch rekenen-9: "20 hersteld van 320" — te licht), conclusies-trekken-po 2, de rest 1 per pad (25 paden). Nieuwkomer-paden (3 fouten) vielen buiten de ronde.

Volledige lijst: `docs/audit/eindmeting-po/oordeel-A..D.json` (nr, waar, eigenKeuze, oordeel, reden); de getrokken vragen in `deel-A..D.json` / `steekproef.json`.

## Wat batch wereld-4 leerde (27 okt)
- Een herstelronde + steekproef van 30 is niet genoeg: acht blinde steekproeven gaven 3 → 7 → 2 → 1 → 1 → 1 → 2 → 1 fout.
- Wat wél werkte: **dekkende blinde controle** — een frisse nakijker ziet van ÁLLE vragen eerst alleen vraag + opties, oordeelt, en krijgt dan pas antwoord/hints; levert per fout een kant-en-klaar voorstel; een tweede agent past die mechanisch toe. Dat vond in één keer 12 fout + 32 twijfel op 276 vragen.
- Hints zijn het grootste lek: ze "helpen" door voor te rekenen of de sleutelzin te citeren. Regel: een hint benoemt de fout in de denkstap, nooit het getal, de zin of het woord waar het om gaat.

## Voorstel voor de volgende stap (nog niet gedaan, kost ~3-4 M tokens in agents)
1. **Automatische vangnetten eerst** (goedkoop, vangt de 14 + 7 + 3): (a) hint bevat het goede getal/woord of een som die op het antwoord uitkomt; (b) vraag zonder werkwoord/lidwoord, eindigend op ":" of "?" na ≤ 4 woorden, of met "+"-opties; (c) antwoordtekst (of ≥ 2/3 van de woorden) in de vraag. Als meldingen in `check-vragen.mjs`.
2. **Dekkende blinde controle per batch** met de maatstaf van deze eindmeting, te beginnen bij doorstroomtoets-studievaardigheden-g8, begrijpend lezen (strategie, teksten, conclusies, brief) en de nieuwkomer-paden.
3. Eindmeting opnieuw (nieuwe seed) pas daarna.

## Controles (stand branch audit3/wereld-4, 27 okt 22:30)
- `node scripts/audit/vergelijk-met-main.mjs origin/main --q-mag`: 8 bestanden · 269 checks gewijzigd · 177 vraagteksten · **0 afwijkingen**
- `npm run audit:vragen`: 355 paden · 18758 vragen · 633 kale sommen nagerekend · 0 meldingen
- `npx vite build`: groen · `npx vitest run`: 2058 tests groen
- Nieuw script: `scripts/audit/steekproef-po.mjs` (basisschool-steekproef, reproduceerbaar).
