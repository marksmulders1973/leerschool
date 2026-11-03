# Nakijkopdracht bank "Doorstroomtoets — rekenen (groep 8)" — 3 nov 2026

Aanleiding: bij de eindmetingen van 3 nov gaf dit pad 4 van de 21 gevonden fouten (hints die de som voorrekenen, "tien keer te veel"). Daarom wordt de hele bank integraal nagekeken: 252 nog niet goedgekeurde vragen in 5 pakketten (`docs/audit/bank-rg8/pakket-NN.json`).

Doelgroep: groep 8 (11-12 jaar), voorbereiding op de Doorstroomtoets; onderdeel rekenen = getallen, bewerkingen, breuken/procenten/kommagetallen, meten en meetkunde, verhoudingen, verbanden (tabellen/grafieken). Let extra op: hints die de som voorrekenen of de factor noemen, antwoorden die in de vraag staan, eenheden.

## Jij bewerkt het bronbestand NIET
Meerdere nakijkers werken tegelijk in hetzelfde bestand (`src/learnPaths/doorstroomtoetsRekenenG8.js`). Jij leest het bestand wel (om de exacte brontekst te zien), maar je schrijft je herstellingen als **herstellijst**, die daarna door één script wordt toegepast:

`docs/audit/fixes-rg8-NN.json` = array van `{ "waar": "...", "oud": "<exacte brontekst>", "nieuw": "<vervangende tekst>", "reden": "kort" }`
- `oud` moet **letterlijk en precies één keer** in het bronbestand voorkomen (kopieer uit het bestand, inclusief aanhalingstekens/komma's; neem genoeg context mee om uniek te zijn, bv. de hele `wrongHints: [...]`-regel of de hele `q: "..."`-regel). Komt een stuk vaker voor, dan wordt die regel overgeslagen.
- `nieuw` is geldige JavaScript op dezelfde plek (zelfde aanhalingstekens, escapes, komma's).
- Nooit opties herschikken of het aantal veranderen (`answer`-index moet blijven kloppen). Wil je een optietekst wijzigen: vervang alleen die string.

## Werkwijze per vraag (pakket-NN.json: nr, waar, q, options, answer, wrongHints, niveaus, explanation, heeftEigenSvg, stapHeeftSvg)
1. Lees alleen `q` en `options`, los de vraag zelf op, noteer je keuze (optietekst) vóórdat je naar `answer` kijkt.
2. Vergelijk met `answer`. Beoordeel dan: (a) fout/dubbelzinnig antwoord of twee goede; (b) antwoord staat (bijna) letterlijk in de vraag, of de vraag doet het werk al (rijtje al op alfabet, nummer al genoemd); (c) raadbaar door de vorm (één optie langer/specifieker/anders opgemaakt, absurde afleiders); (d) `wrongHints` die het goede antwoord noemen, omschrijven of voorrekenen (ook per uitsluiting); (e) telegramzin, taalfout, u i.p.v. je; (f) te makkelijk/te moeilijk voor groep 8; (g) de vraag verwijst naar een tabel/grafiek/kaart/tekst die niet in de vraag staat en `heeftEigenSvg` én `stapHeeftSvg` zijn false → fout (het kind ziet niets); staat alleen `stapHeeftSvg` op true, controleer in het bronbestand of het stap-plaatje bij deze vraag past; (h) feitelijk onjuist.
3. Oordeel: `fout` (kind krijgt vóór een poging iets verkeerds) · `twijfel` (verdedigbaar maar niet mooi; `niveaus.basis` die alleen het antwoord geeft = twijfel, herschrijf tot echte hulpstap) · `goed`.
4. Herstel fouten én twijfels via de herstellijst. Wat je niet kunt oplossen zonder de vraag te verwijderen: `disabled: true` toevoegen (zeldzaam; via herstellijst, bv. `oud: 'q: "…",'` → `nieuw: 'disabled: true, q: "…",'`).

## Uitvoer
- `docs/audit/bank-rg8/oordeel-NN.json`: array met voor ALLE vragen van je pakket `{ "nr", "waar", "eigenKeuze", "oordeel": "goed"|"fout"|"twijfel", "reden": "", "hersteld": true|false, "wijziging": "" }`.
- `docs/audit/fixes-rg8-NN.json`: de herstellijst (mag leeg zijn: `[]`).
- Hulpscripts alleen in de scratchpad met voorvoegsel rg8pNN-.
- Geen git, geen vitest, geen build, geen bewerking van src/.

Eindrapport kort in het Nederlands: telling goed/fout/twijfel/hersteld, aantal regels in de herstellijst, lijst fouten (nr + waar + wat je verandert), en wat je bewust niet oploste.
