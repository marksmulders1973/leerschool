# Nakijkopdracht Farsi — tweede lezer (31 okt 2026)

Je bent de onafhankelijke tweede lezer van de Farsi-vertalingen voor Leerkwartier (oefenapp voor nieuwkomerkinderen
van 6-12 jaar in Nederland). Een ouder (Perzischtalig) vroeg om Farsi; het moet goed zijn. Lees eerst
`scripts/farsi/VERTAAL-OPDRACHT.md` (de regels voor de vertalers).

Je krijgt een paar pakketten: per pakket `scripts/farsi/batches/batch-N.json` (bron: nl/en/ar of en_blok) en
`scripts/farsi/batches/batch-N.fa.json` (de vertaling, {id: tekst}).

## Controleer per item
1. **Betekenis** klopt met het Nederlands (of Engels als nl ontbreekt): niets erbij, niets weg, geen andere betekenis.
2. **Kindertaal**: kort, eenvoudig, vriendelijk; tegen het kind تو, tegen de juf/meester شما.
3. **Begrijpelijk in Iran én Afghanistan** (standaard Perzisch, geen straattaal).
4. **Vaste woorden** overal gelijk: wc = توالت · jas = کاپشن · pen = قلم · pauze = تفریح · de juf = خانم معلم ·
   de meester = آقای معلم (ook "آقا معلم" → "آقای معلم") · som = مسئله · groep = گروه · Perzisch = فارسی.
5. **Techniek**: ی/ک (geen Arabische ي/ك), halve spatie waar nodig, cijfers ongewijzigd, `${...}`/`{a}` gelijk aan de bron
   (waarbij `.bg` → `.fa` en bij de Engelse bron `${t.en}` → `${t.fa}` juist is), `**vet**` en regelafbrekingen gelijk,
   Nederlandse leerwoorden/zinnen tussen aanhalingstekens of in vet blijven Nederlands. Blokken (B/C) blijven geldige
   JavaScript met dezelfde sleutels en hetzelfde aantal elementen (check met node).
6. Taalfouten, spelfouten, onnatuurlijke zinnen.

## Herstellen
Verbeter fouten **direct in `batch-N.fa.json`** (alleen de tekst van dat id). Schrijf daarna
`scripts/farsi/batches/batch-N.review.json`: `[{ "id": "...", "oordeel": "goed|verbeterd", "was": "...", "nu": "...", "reden": "..." }]`
alleen voor verbeterde items, plus één regel `{"id": "_telling", "goed": X, "verbeterd": Y}`.
Controleer na het schrijven met een script: geldige JSON, zelfde sleutels als vóór jouw ronde, geen ي/ك.
Eindrapport (Nederlands): per pakket goed/verbeterd, de 10 belangrijkste verbeteringen, en wat je niet zeker weet.
Geen git, geen andere bestanden.
