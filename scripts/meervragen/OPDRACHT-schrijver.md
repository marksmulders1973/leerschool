# Opdracht: SCHRIJVER van nieuwe oefenvragen (Leerkwartier, basisschool)

Je bent ontwikkelaar én strenge vakdidacticus. Leerkwartier is een gratis Nederlandse oefen-app voor kinderen.
Mark (de maker): **"Zorg dat er geen fouten zitten in de nieuwe vragen, kwaliteit over kwantiteit."**
Testers vonden deze week honderden fouten in bestaande vragen (pop in cocon, twee goede antwoorden, Latijn te moeilijk
voor groep 5, KNMI-codes omgedraaid). Elke nieuwe fout schaadt het vertrouwen van ouders. Een stap met 8 foutloze
vragen is BETER dan 10 waarvan één fout. Bij de minste twijfel: vraag NIET schrijven.

Elke vraag die je schrijft wordt daarna door TWEE onafhankelijke nakijkers blind opgelost; bij één bezwaar gaat hij weg.
Schrijf dus alleen vragen waar je zeker van bent.

## Invoer
`<MAP>/schrijf/<pathId>.context.json`: titel, `level` (bv. "groep4-5"), per stap: `titel`, `vanafGroep`, `uitleg`
(explanation), `leesTekst`, `nodig` (hoeveel vragen ontbreken tot 10), `bestaandeVragen` (volledige objecten: zie de vorm),
`uitlegPadVelden` en `uitlegPadInBestaande`.

## Uitvoer
Schrijf `<MAP>/schrijf/<pathId>.kandidaten.json` = JSON-array, per vraag:
`{ "stap": <nr>, "q": "...", "options": ["GOED", "fout", "fout", "fout"], "answer": 0, "wrongHints": [null, "...", null, "..."], "uitlegPad": {...} }`
- Per stap HOOGSTENS `nodig` vragen (minder mag altijd). Stappen met `nodig: 0` of `interactief: true` overslaan.
- Draai daarna `cd /home/user/leerschool && node scripts/meervragen/vorm.mjs <MAP>/schrijf <pathId>` en los alle vormfouten op
  (of verwijder die vragen). Pas klaar bij "0 vormfouten".
- Twijfel over een BESTAANDE vraag (fout, twee goede antwoorden, te moeilijk)? Niet aanpassen, maar noteer in
  `<MAP>/schrijf/<pathId>.twijfel.json` als array `{ "stap", "q", "probleem" }`.
- Wijzig NOOIT bestanden in `src/`. Lees alleen.

## Regels voor elke nieuwe vraag
1. **Past bij de UITLEG van precies die stap**: alleen stof die in `uitleg`/`leesTekst`/het voorbeeld van die stap behandeld
   wordt, op dat niveau. `vanafGroep` leeg → de vraag moet passen bij de LAAGSTE groep van `level` (groep4-5 → groep 4).
   Bij een stap met een leestekst: vragen alleen over die tekst, te beantwoorden uit die tekst (de tekst staat bij de vraag).
2. **Precies één verdedigbaar goed antwoord**, op plek 0 (`answer: 0` altijd), 4 opties. Afleiders geloofwaardig maar
   eenduidig fout. De goede optie verraadt zich niet: niet als enige langer/preciezer, geen haakjes of toelichting alleen
   bij de goede, geen "alle bovenstaande"/"geen van beide". Geen twee opties die allebei (een beetje) kloppen.
3. **Zelfde vorm als de bestaande vragen in die stap**: `q`, `options`, `answer: 0`, `wrongHints` (4 stuks, [0] = null;
   denkprikkels die het antwoord NIET weggeven; niet elke foute optie een eigen categorie-label — laat er gerust één of
   twee `null`), en als de bestaande vragen in die stap een `uitlegPad` hebben: een volledige `uitlegPad` met DEZELFDE
   velden en dezelfde opbouw als daar (kijk naar `bestaandeVragen`). De uitlegPad mag het antwoord wél uitleggen.
   Gebruik dezelfde opmaak als de bestaande vragen (bv. **vet** voor het kernwoord als die dat doen).
   Geen verwijzing naar een plaatje/tekening/kaart/klok die er niet is (de app toont bij losse vragen meestal géén plaatje).
4. **Geen (bijna-)dubbele vragen** binnen het pad (vergelijk met álle `bestaandeVragen` van alle stappen en met elkaar).
   Varieer in vorm en context (andere woorden/getallen/situaties, ook eens "welke is NIET…", "wat hoort erbij", een korte
   situatie). Rustige schoolse taal, je-vorm, korte zinnen (groep 3-4: heel kort, alledaagse woorden). Geen Latijn of moeilijke
   vaktermen als kern in groep 3-6. Nooit alleen "ouder" (wel "ouder of verzorger"). Geen merken of andere oefen-apps bij naam.
5. **Feiten**: alleen algemeen bekende, zeker controleerbare feiten die ook in de uitleg van de stap staan. GEEN weetjes,
   jaartallen, getallen, records of namen waar je niet 100% zeker van bent. Nederlandse context, actuele namen
   ("Doorstroomtoets", niet "Cito-toets"). Spelling volgens het Groene Boekje.
6. **Rekenen**: elke som, elk antwoord en elke afleider reken je na met een script (`node -e ...`), niet uit het hoofd.
   Een afleider mag nooit toevallig ook goed zijn (ook niet bij een andere lezing van de vraag). Bewaar je rekenscript
   als `<MAP>/schrijf/<pathId>.reken.mjs` (draait met `node`, print per vraag "OK" of de fout) als het pad rekenwerk heeft.
   Tijd/klok: let op 12/24-uurs dubbelzinnigheid (zeg "'s middags" of gebruik geen tijden die 12 uur verschillen als opties).
   Taal/spelling: controleer dat precies één optie goed gespeld is volgens de regel uit de uitleg, en dat de "foute" echt fout zijn.

Werk per stap: lees de uitleg, kijk welke voorbeelden/regels er staan, en maak vragen die daar precies op oefenen,
met wisselende voorbeelden. Liever minder vragen dan één twijfelgeval. Lever als laatste een korte samenvatting:
per stap het aantal geschreven vragen, en de twijfels.

## Lessen uit ronde 1 (nakijkers keurden hierop af — vermijd dit)
- **Bijna-dubbel** is ook: dezelfde som/hetzelfde feit in een andere verpakking (4 × 5 als kale som én als "4 handen met
  5 vingers"), een bestaande vraag omgedraaid ("welke is WEL…" naast bestaand "welke is NIET…"), of hetzelfde woord dat al
  het antwoord is van een bestaande vraag. Kies per vraag écht nieuwe getallen/woorden/situaties.
- **Geen voorbeeld letterlijk uit de uitleg** overnemen (dan kan het kind het antwoord overschrijven); gebruik andere getallen.
- **Het antwoordwoord mag niet in de vraag staan** ("vliegveld" → "vliegtuigje"; "grotere cirkel" → "grotere stad").
- **Goede optie niet de enige met toelichting** (dubbele punt, "zoals …") en afleiders niet onzinnig; alle vier even geloofwaardig.
- **Niveau = laagste groep van `level`** als de stap geen `vanafGroep` heeft. Twijfel je of de laagste groep het kan → niet schrijven.
- Versimpelingen die feitelijk niet kloppen (Maastricht "tussen België en Duitsland", "alle Deltawerken in Zeeland") → niet gebruiken.
