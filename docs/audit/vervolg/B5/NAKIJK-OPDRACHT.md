# Nakijkopdracht vervolgsets B5 (vraag 181-220 na de startset) — 30 okt 2026

Je bent een blinde nakijker én hersteller voor Leerkwartier, een Nederlandse oefenapp voor de basisschool
(groep 3 = 6-7 jaar … groep 8 = 11-12 jaar). Kinderen krijgen na hun startset van 20 vragen deze vragen.
Doel: ≥ 98 % van de vragen klopt aantoonbaar. Een eerdere eindmeting vond 16,5 % fout; de hoofdoorzaken
waren hints die het antwoord verraden, telegramzinnen en antwoorden die in de vraag staan.

In deel A staan de opties in willekeurige volgorde; in deel B in bestandsvolgorde: vergelijk je blinde keuze op inhoud, niet op letter. Startset-vragen (eerste 20 per set) zitten niet in B5; raak ze niet aan.

Je krijgt één pakket: `docs/audit/vervolg/B5/pakketten/pakket-NN-A.md` (blind) en `pakket-NN-B.md` (met antwoord).
Elke vraag heeft een `waar` = `<pad-id> stap X vraag Y`; het bronbestand staat erbij. Y telt ÁLLE elementen
van `steps[X-1].checks` (1-based, ook uitgeschakelde). Zoek de vraag in het bestand op de vraagtekst.
Achter elke vraag staat `sets: 6|rekenen, 7|rekenen` = voor welke groep(en) het kind deze vraag krijgt.

## Werkwijze, in deze volgorde

**Fase 1 — blind (alleen deel A lezen, deel B nog NIET openen).** Los elke vraag zelf op en noteer je keuze
(letter). Noteer meteen wat je opvalt:
1. geen goed antwoord, of twee (bijna) goede antwoorden;
2. het antwoord staat (bijna) letterlijk in de vraag of in de leestekst-regel die erbij staat;
3. raadbaar door de vorm: absurde afleiders, één optie veel langer/specifieker, "gematigd midden";
4. taalfout, telegramzin (zonder werkwoord/lidwoord), vreemde zin, verkeerde interpunctie;
5. niveau past niet bij de groep(en) in `sets` (te moeilijk/vakjargon of te kinderachtig);
6. de vraag heeft een plaatje, kaart, tabel of tekst nodig die er niet is;
7. feitelijk onjuist of te stellig ("altijd", "nooit", "in heel Nederland") waar dat niet klopt.
Schrijf fase 1 weg naar `docs/audit/vervolg/B5/pakketten/pakket-NN-blind.json`:
`[{ "waar": "...", "eigenKeuze": "B", "opmerking": "" }]` — vóór je deel B opent.

**Fase 2 — vergelijken (deel B).** Per vraag: klopt ✅ met jouw keuze? Zo niet: wie heeft gelijk (reken na,
zoek zeker)? Controleer dan de hints:
- `wrongHints` (één per optie, `null` bij het goede antwoord) mogen NOOIT het goede antwoord noemen,
  citeren, omschrijven of voorrekenen (ook niet "samen per uitsluiting"). Een goede hint benoemt de
  denkfout van die foute keuze ("Dat is het aantal groepjes, niet het aantal per groep."), geen getal
  of woord waar het om gaat. Hints die elkaar tegenspreken of feitelijk fout zijn: fout.
- `niveaus` (basis / simpeler / nogSimpeler) zijn hulpstappen die het kind zelf kan openen: hele zinnen,
  feitelijk juist, passend bij de groep. `nogSimpeler` mág het antwoord zijn.
- Stap-uitleg en hints moeten met het antwoord overeenstemmen (zelfde getallen, zelfde feit).

**Fase 3 — herstellen in het bronbestand** (Edit-tool, alleen de vragen uit jouw pakket):
- Fout antwoord → `answer` of de optietekst aanpassen én de hints meeverhuizen/kloppend maken.
- Antwoord in de vraag / twee goede antwoorden / raadbaar → vraag of afleiders herschrijven (afleiders
  even lang en even specifiek als het goede antwoord, plausibele fouten die een kind echt maakt).
- Verradende hint → herschrijven zodat hij de denkfout benoemt zonder het antwoord.
- Telegramzin / taalfout → nette, volledige Nederlandse zin; `**vet**` in de vraag mag blijven.
- Niveau te hoog voor de groep(en) → eenvoudiger formuleren; als de stof zelf niet bij de groep hoort en
  er geen `vanafGroep` staat: `vanafGroep: <groep>` op de check zetten (dan valt hij weg voor jongere
  groepen), noteer dat als wijziging.
- Niet te redden → `disabled: true` op de check (zeldzaam; noteer waarom). Nooit vragen verwijderen,
  nooit opties herschikken (de `answer`-index moet blijven kloppen), aantal opties niet veranderen.
- Raak GEEN andere vragen aan (de eerste 20 van elke set zijn apart nagekeken en staan niet in je pakket).
- Geen concurrentnamen (Squla e.d.), "Doorstroomtoets" is groep 8, u → je, geen Engels in NL-vragen
  behalve bij Engels-paden. Spelling volgens het Groene Boekje.
- Na elke bestandsbewerking: `node --check <bestand>` (niet bij .jsx). Geen git, geen vitest, geen build.

**Fase 4 — oordeel wegschrijven** naar `docs/audit/vervolg/B5/pakketten/pakket-NN-oordeel.json`, één
regel per vraag uit je pakket (allemaal, ook de goede):
```json
[{ "waar": "tafels-po stap 2 vraag 3", "oordeel": "goed" | "fout" | "twijfel", "eigenKeuze": "B",
   "reden": "kort, concreet", "hersteld": true, "wijziging": "wat je veranderde (leeg als niets)" }]
```
- `fout` = het kind kreeg iets verkeerds (fout antwoord, verradende hint, antwoord in de vraag, twee goede,
  feitfout, onbegrijpelijke zin). `twijfel` = verdedigbaar maar niet mooi (niveau, stijl). `goed` = klopt.
- Hersteld je iets bij een `twijfel`, zet `hersteld: true` met de wijziging.

**Eindrapport (kort, Nederlands):** aantallen goed/fout/twijfel, lijst van alle fouten met `waar` + wat je
deed, welke bestanden je bewerkte, en wat je bewust NIET hebt opgelost (met reden). Geen "alles is goed"
zonder de telling.

## Afspraak voor de telling (na B4)
Een `niveaus.basis` die alleen het antwoord geeft (of een telegramzin met het antwoord) telt als **twijfel**, niet als fout: herschrijf hem tot een echte hulpstap; `nogSimpeler` mag het antwoord blijven. Alleen wat het kind vóór een poging ziet en het antwoord verraadt (vraag, opties, wrongHints) telt als fout.
