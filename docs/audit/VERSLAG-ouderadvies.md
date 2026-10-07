# Verslag — ouderadvies en koppelcode (audit 7 okt 2026)

Branch `audit3/ouderadvies` (vanaf `main` @ b8ea17a). Niets staat live. Geen databasewijziging toegepast.

## Uitkomst in het kort

**Wat er is.** Een werkend prototype op `/ouderadvies?proto=1` (daarna onthoudt het apparaat de vlag; `?proto=0` zet hem uit). Zonder vlag stuurt de route terug naar home. Niets staat in de navigatie. Geen chat: de app doet korte voorstellen ("Ik adviseer je om Sam te laten beginnen met een korte basistest, een nulmeting…", "Op basis van de nulmeting stel ik deze drie dingen voor. Goed zo, of wil je iets wisselen?"). Eén tik op een voorstel toont twee alternatieven. Daarna volgt elke week "dit ging goed, dit nog niet, volgende week stel ik dit voor. Goed zo?".

**De drie gezinssituaties in het prototype**
- **(a) Zelfde apparaat:** kinderprofielen ("Wie gaat er oefenen?"), wisselen zonder inloggen. Het ouderdeel zit achter een som van twee getallen van twee cijfers (bv. 23 × 14). De ouder of verzorger kan er een pincode van 4 cijfers van maken. Na de drempel blijft het ouderdeel 15 minuten open in dat tabblad. Er is geen account nodig. Keuzes worden op het apparaat bewaard.
- **(b) Koppelcode:** het kind tikt op de eigen telefoon de code in (spaties, streepjes en kleine letters mogen). De naam van de koppeling wint, dus "testkind" en "Testkind" worden niet twee kinderen. Op haar eigen telefoon ziet de moeder het voorstel zonder drempel. "Goed zo" zet de les klaar via de bestaande tabel `ouder_klaargezet`.
- **(c) School:** dezelfde eenmalige koppelcode kan dit **niet**: hij werkt sinds 16 jul 2026 maar één keer, zodat een klasgenoot die de code ziet zich niet aan het gezin kan koppelen. Mijn voorstel is een vaste **kind-sleutel** van 8 tekens per kind, die de ouder of verzorger met één tik kan vervangen. Het kind tikt de sleutel in hetzelfde veld in en vinkt "computer van school" aan. Dan gaat het verder bij het blok dat openstaat. Met "vergeet mij" haal je het kind weer van die computer. De sleutel geeft geen toegang tot oudergegevens. Hij geeft alleen wat een gekoppeld kind-apparaat nu al heeft: oefenwerk aan de koppeling hangen, klaargezette lessen en de nulmeting-stand. Er komen geen e-mailadres, ouder-id of andere kinderen mee terug.

**Nulmeting in drie blokken.** Blok 1 is rekenen. Blok 2 is lezen (groep 3: technisch lezen, vanaf groep 4: begrijpend lezen). Blok 3 is in groep 7, 8 en de brugklas studievaardigheden, in groep 3 t/m 6 taal. Per blok zijn er hoogstens 3 onderdelen uit de bestaande Kwartiercheck-sets: eerst een niveau-1-vraag, en is die goed, dan een niveau-2-vraag. Na 5 minuten stopt het blok. Elk blok wordt bewaard zodra het af is, ook als het kind daarna stopt. Standaard is het één blok per dag; daarna vraagt de app het **kind** "Wil je nog een blokje doen? Het hoeft niet". Na blok 1 krijgt de ouder of verzorger een voorlopig voorstel voor dat vak, na blok 3 het drietal. De uitslag is alleen *gaat goed / wankel / nog niet*. Er komt geen cijfer en geen niveau, en dat staat er ook bij.

**Wat nog ontbreekt voor (b) en (c).** Verder gaan op een ander apparaat en de uitslag op de telefoon van de ouder hebben server-opslag nodig. Die staat als **voorstel** in `docs/audit/ouderadvies/VOORSTEL-migratie-ouderadvies.sql`: een tabel `nulmeting_blok`, 4 RPC's en de kind-sleutel. Deze is **niet toegepast**. Zonder die migratie valt het prototype netjes terug op "Bewaard op dit apparaat" (getest).

**Koppelcode-fouten die ik heb hersteld** (op de live app nu nog aanwezig, op de branch hersteld):

| # | Vóór | Na | Bewijs |
|---|---|---|---|
| 1 | Een **nieuwe ouder** die in de Gezinsstart "Nee, op een ander apparaat" kiest, ziet de wizard verdwijnen. De code-stap met WhatsApp-knop en stap 4 komen nooit in beeld. Oorzaak: de wizard opent alleen bij 0 kinderen, en stap 3 maakt zelf het eerste kind aan. | De wizard blijft open tot "Later" of "Naar mijn overzicht". | `huidig/huidig-08.png` vs `hersteld/hersteld-08.png` |
| 2 | Een code met spatie ("4QG 2CD", zo overgetypt uit WhatsApp) geeft "Die code klopt niet helemaal — kijk de spelling even na." | Wordt herkend als koppelcode (codevak op de startpagina én kind-banner). | `huidig-11.png` vs `hersteld-11.png` + unit-test |
| 3 | Zes plekken en de app-gids zeggen "voer de code in bij **Koppel met ouder**" (ook "Instellingen → Koppel met ouder"). Die knop bestaat nergens. | "**Code gekregen?**" (zo heet het vak op de startpagina). | grep + kliktocht |
| 4 | Dezelfde code nog eens invoeren op een apparaat dat al gekoppeld is, geeft "Deze code werkt niet meer". | "Deze code is al gebruikt, maar je bent op dit apparaat al gekoppeld. Je hoeft niets meer te doen." | prototype-kliktocht `b-04.png` |
| 5 | Een ouder van een gekoppeld kind dat nog niets deed, leest "Laat je kind inloggen met hetzelfde account". Dat klopt niet: koppelen werkt zonder inloggen. | Uitleg: nog niet geoefend → verschijnt vanzelf; wel al geoefend → verse code op dát apparaat. | `huidig-17` vs `hersteld-17` |

**Getest, met uitkomst**
- `npm ci && npm run build` → **exit 0** ("✓ built in 31.65s").
- `npm run audit:vragen` → letterlijk: **"353 paden · 17258 vragen · 609 kale sommen nagerekend · 0 meldingen"**. De 24 losse "antwoord mogelijk weggegeven"-tips zijn identiek aan `main`; ik heb er geen veroorzaakt.
- `npx vitest run` → **34 bestanden, 337 tests geslaagd**, waarvan 37 nieuwe in `ouderadvies.test.js` (blokken per groep, oordeel, vijf-minutengrens, voorstellen met echte pad-ids voor alle 7 groepen, wisselen, weekvervolg, teksten, drempel, codes).
- Kliktocht prototype (Playwright, telefoon 390×844, drie browsers = gedeelde tablet, moeder, kind, schoolcomputer): **31 van 31 controles geslaagd**, met 40 schermafbeeldingen. Daarbij zat ook: blok 1 thuis doen en stoppen, dan op de schoolcomputer verder met blok 2, en weer op de telefoon zien dat blok 3 openstaat.
- Kliktocht huidige reis vóór en na de herstellingen: 17 stappen elk, met 34 schermafbeeldingen.

**Eerlijke grenzen van de tests.** Het netwerkbeleid van deze cloud-omgeving blokkeert `leerkwartier.app` én het Supabase-project (HTTP 403). De gevraagde test tegen de **live site kon dus niet**. Ik heb de huidige reis daarom getest op een lokale build van `main` (dezelfde code als live, stempel "7 okt b"). Alle Supabase-verzoeken gingen naar een **nagebootste server** in Playwright (`scripts/audit/ouderadvies/stubServer.mjs`). Die volgt de live `claim_link_code`, die ik met `pg_get_functiondef` heb opgehaald, en het SQL-voorstel. Inloggen met e-mail of Google is niet getest: het ingelogd-zijn van de moeder is nagebootst. Wat een echte database anders zou doen (RLS, triggers), heb ik alleen via code-lezing beoordeeld. De seconden per stap zijn robotsnelheid, geen mensentijd.

**Keuzes die alleen de maker kan maken**
1. **Kind-sleutel voor school (en tweede apparaat): ja of nee?** Vóór: een kind koppelt overal met dezelfde sleutel; geen nieuwe code per apparaat. Tegen: wie de sleutel ziet, kan oefenwerk aan het kind hangen en de titels van klaargezette lessen zien (geen oudergegevens). Daarom staat er "vervang"-knop + "vergeet mij". Alternatief zonder schemawijziging: elke keer een verse eenmalige code (werkt vandaag al, maar is omslachtig op school).
2. **Migratie toepassen?** Zonder de SQL werkt alleen situatie (a) volledig; (b) en (c) werken dan alleen op één apparaat per kind. Voor de sleutel is nog een rate-limit nodig (staat als TODO in de SQL).
3. **Drempel: som of pincode als standaard?** Nu som, pincode optioneel. Een som van 2×2 cijfers is voor groep 8 met een rekenmachine te doen; het is een drempel, geen slot.
4. **Mag het ouderdeel zonder account?** (a) werkt nu zonder inloggen; de inlogmuur op `/ouder` was de grootste afhaakplek (26 → 13 → 2). Nadeel: zonder account is er geen weekmail en geen tweede apparaat.
5. **Weekmail.** Voorstel: `api/send-ouder-rapport.js` wordt de mailversie van het weekvervolg. Hij leest dan de klaargezette lessen (`ouder_klaargezet`) en de `learn_progress` sinds `created_at`, en roept `weekVervolg()` aan uit `src/features/ouder/ouderadvies/advies.js`. Let op: die functie leest het manifest via een JSON-import, dus in de mail moet `padInfo` via `createRequire` meegegeven worden, net als nu. Daaronder komt een knop "Goed zo / iets wisselen" naar `/ouderadvies`. Nog niet gebouwd.
6. **"Oefenen kan altijd gratis"** staat op de inlogmuur van `/ouder` (`OuderInzicht.jsx:642`) en op nog 11 plekken in de app. Dat botst met de regel "nooit 'altijd gratis'". Ik heb het niet aangepast, want het valt buiten de koppelcode-fouten.
7. **Brugklas** gebruikt nu de Kwartiercheck-set van groep 8 (in de tekst benoemd). Een eigen brugklas-set ontbreekt.
8. **Versienummer** (`src/versie.js`) is bewust niet opgehoogd: dit is een branch, niets gaat live. Ophogen bij het samenvoegen.

---

## Bijlage A — Huidige reis met afhaakplekken

Lokale build van `main`, telefoon 390×844. Moeder en kind elk in een eigen browser. Bestanden: `docs/audit/ouderadvies/huidig/` (`kliktocht.txt`, `testlog.json`, `huidig-01…17.png`). Ter vergelijking dezelfde tocht op de branch: `docs/audit/ouderadvies/hersteld/`.

| Stap | Wat | Robot-sec | Afhaakplek? |
|---|---|---|---|
| 1-2 | Moeder: startpagina → "ouder of verzorger" (1 tik) | 1,6 | — |
| 2-3 | **Inlogmuur**: "Log in met Google…" of e-mail-inloglink. Niets te zien zonder account. | — | **Ja, de grootste.** Cijfers: 26 → 13 bekeken. Inloggen met een e-maillink betekent de app verlaten. |
| 4-7 | Gezinsstart: voornaam, groep, nadruk (5 keuzes + vrij veld + "laat de app kiezen"), apparaat. 6 tikken + typen. | 4,1 | Middel: in stap 2 moet je kiezen uit 5 vakken zonder te weten waar het kind staat. Dit lost het advies op. |
| 8 | "Nee, op een ander apparaat" → **wizard verdwijnt** (fout 1); de code staat lager op de pagina, op de kind-kaart. | 1,3 | **Ja**: de WhatsApp-knop en stap 4 komen niet in beeld. |
| 8-9 | Uitleg noemt knop "Koppel met ouder" die niet bestaat (fout 3). | — | Ja, bij het kind. |
| 10-11 | Kind typt de code mét spatie → "Die code klopt niet helemaal" (fout 2). | 1,7 | **Ja.** |
| 12 | Kind typt zonder spatie; nog geen naam op het apparaat → "Tik bovenaan op 'Ik ben leerling' en kies je naam". | 1,3 | Middel: een extra omweg. |
| 13-14 | "leerling" → naam → kind landt in een **start-kwartier van 5 vragen**. De koppeling is dan nog **niet** gemaakt. | 3,2 | **Ja**: de moeder wacht. De koppeling volgt pas als het kind de vragen afmaakt of op Stop tikt (stap 15). |
| 15-16 | Kind tikt Stop → banner koppelt automatisch → "Gelukt! Je bent gekoppeld met thuis." | 2,1 | — |
| 17 | Moeder ziet Testkind; kind deed nog niets → tekst "laat je kind inloggen met hetzelfde account" (fout 5). | 5,1 | Verwarrend. |

Tikken tot het kind gekoppeld is: moeder ±8 tikken + 2× typen + inloggen buiten de app; kind ±5 tikken + 2× typen + een kwartier-onderbreking. In het prototype, situatie (b), doet het kind 2 tikken en tikt het naam en code in. Situatie (a) heeft geen inlog, geen code en geen typwerk, behalve de voornaam.

## Bijlage B — Teksten per groep

Alle schermteksten per groep 3 t/m 8 en brugklas: **`docs/audit/OUDERADVIES-TEKSTEN.md`**. Dat bestand komt uit de echte code (`node scripts/audit/ouderadvies/teksten.mjs`) en bevat ook de vóór/na-tabel van de aangepaste bestaande teksten. Welke lessen de app per groep voorstelt, staat in `docs/audit/ouderadvies/drietal-per-groep.txt`; die lijst komt ook uit de echte advies-code.

## Bijlage C — Logica-bevindingen

| # | Bestand, regel | Wat | Hoe vastgesteld | Status |
|---|---|---|---|---|
| 1 | `src/features/ouder/OuderInzicht.jsx` (toonGezinsstart, ±r.663 op main) | Wizard verdwijnt in stap 3 "ander apparaat". Stap 4 is voor een nieuw gezin ook nooit te zien: `onKlaar` herlaadt en dan is er ≥1 kind. | Kliktocht (ander apparaat). Voor "op dit apparaat" alleen code-lezing. | Hersteld (r.613-619, vóór de vroege return) |
| 2 | `src/components/CodeBalk.jsx:309` (main) | Regex `/^[A-Z0-9]{4,8}$/` op de ruwe invoer: een spatie of streepje laat de code naar de partnercode-check gaan. | Kliktocht `huidig-11` | Hersteld via `src/shared/koppelcode.js` |
| 3 | `src/components/KoppelcodeBanner.jsx` (main r.56) | Alleen `trim()`, dus een spatie in de code geeft "werkt niet meer". | Code-lezing + unit-test | Hersteld |
| 4 | KoppelcodeBanner | De RPC kent alleen `code_invalid_or_expired`, ook voor "al gebruikt door jezelf". | Live functiedefinitie + kliktocht `b-04` | Hersteld aan de client-kant (als het apparaat al gekoppeld is, een geruststellende melding) |
| 5 | OuderInzicht (6×), Gezinsstart, `src/data/appGids.js` | Verwijzing naar de knop "Koppel met ouder", die niet bestaat. | `grep` + kliktocht | Hersteld |
| 6 | OuderInzicht CharleyTip "geen resultaten" | Misleidend advies om in te loggen. | Kliktocht stap 17 | Hersteld |
| 7 | `claim_link_code` (live) | Code is eenmalig, dus een tweede apparaat of schoolcomputer heeft een nieuwe code nodig. | `pg_get_functiondef` | Ontwerpkeuze 16 jul; voorstel kind-sleutel |
| 8 | Live FK's | Alleen `ouder_klaargezet.link_id` verwijst naar `parent_child_links` (cascade). Wordt een kind verwijderd, dan schrijft het kind-apparaat verder met een link_id dat nergens meer bij hoort. Het werk is dan onzichtbaar en de banner blijft "Gekoppeld met thuis" zeggen. | `pg_constraint`-query | Niet hersteld. Voorstel: kind-kant vergeet de koppeling als `voor_jou_voorkeur` zonder fout `null` geeft. |
| 9 | `koppel_mijn_data` (live) | Hangt alleen rijen aan met `user_id = auth.uid()`. Oefenwerk zonder (anonieme) sessie, of van een ander apparaat, komt niet mee. | Functiedefinitie | Bekend (KOPPELING-GRENZEN §2), niet hersteld |
| 10 | `claim_link_code` (live) | Geen limiet van 3 kinderen bij het claimen. Een code met een andere naam maakt een extra kind aan. | Functiedefinitie | Laag risico, niet hersteld |
| 11 | Ouder uitgelogd | De code blijft server-side geldig, het claimen werkt, en de ouder ziet het kind na inloggen. | Code-lezing (`link_codes` + RPC) | In orde |
| 12 | Kind op meerdere apparaten | Elk apparaat bewaart hetzelfde link_id. Rijen van beide apparaten zijn zichtbaar voor de ouder. | Code-lezing + kliktocht (b/c, nagebootst) | In orde (met kind-sleutel zonder nieuwe codes) |
| 13 | Naam met spatie of hoofdletter | Lokaal is de sleutel `trim().toLowerCase()`, in de RPC `lower()`. De koppelnaam van de ouder wint. | Kliktocht `b-02/03` | In orde |
| 14 | Kind-flow na code zonder naam | Het kind moet eerst een start-kwartier van 5 vragen doen. Pas als het daarna de leerlingpagina opent, wordt het gekoppeld. | Kliktocht `huidig-14/15` | Niet aangepast (buiten dit spoor). Voorstel: na de naamkeuze direct koppelen. |
| 15 | Advies-motor | Gat gevonden door de eigen test: groep 3 en 4 hebben te weinig leespaden voor 2 alternatieven. Groep 4 sloeg het eigen pad "rekenen tot 100" over, omdat het een nieuwkomers-pad is. | Vitest + `drietal-per-groep.txt` | Hersteld (terugval naar een aangrenzende groep of verwant vak, eigen pad mag altijd) |
| 16 | Advies-motor | Na een "goed zo" bij blok 1 sprong de ouderweergave na blok 3 meteen naar het weekvervolg. | Schermafbeelding tijdens de kliktocht | Hersteld (weekvervolg pas na goedkeuren van het drietal) |
| 17 | Advies, groep 3 blok 3 | Als "klanken" nog niet lukt, is het eigen pad al door blok 2 gekozen. Het voorstel wordt dan "spelling eerste woorden" met de reden "stapje verder", terwijl dat onderdeel juist goed ging. | `drietal-per-groep.txt` | Klein, niet hersteld |

## Bijlage D — Testlog

- `docs/audit/ouderadvies/prototype/kliktocht.txt`: 31 controles, allemaal ✅. `uitkomst.json` bevat dezelfde lijst als data. `a-testlog.json` (situatie a, 21 stappen) en `bc-testlog.json` (b + c, 16 stappen) geven seconden per stap. `a-*.png`, `b-*.png` en `x-*.png` zijn de schermafbeeldingen in telefoonformaat.
- `docs/audit/ouderadvies/huidig/kliktocht.txt` en `hersteld/kliktocht.txt`: dezelfde tocht vóór en na de herstellingen.
- Opnieuw draaien: build met `VITE_SUPABASE_URL=https://protostub.supabase.co` en een willekeurige anon-JWT, `npx vite preview --port 4173`, en dan `node scripts/audit/ouderadvies/prototypeTest.mjs 4173`. Voor de huidige reis: build van `main` op poort 4174, en dan `node scripts/audit/ouderadvies/huidigeReis.mjs 4174 huidig`.
- Een niet-geslaagde eerste ronde (eerlijk vermeld): 28/29. De pincode-controle keek te vroeg (asynchroon), en een controle die niets bewees is geschrapt. Daarna 31/31 na herstel van bevinding 16.

## Bijlage E — Bestandslijst

Nieuw:
- `src/features/ouder/OuderAdvies.jsx`: schil, met "Wie oefent er?", drempel, ouderweergave, kind-sleutel en weekvoorbeeld (`?demo=week`).
- `src/features/ouder/ouderadvies/nulmeting.js`: blokken per groep, vragen, oordeel en vijf-minutensessie.
- `src/features/ouder/ouderadvies/advies.js`: voorstellen, alternatieven, wisselen en weekvervolg.
- `src/features/ouder/ouderadvies/opslag.js`: opslag per blok (lokaal + voorgestelde RPC) en keuzes.
- `src/features/ouder/ouderadvies/kindsleutel.js`: kind-sleutel en "vergeet mij".
- `src/features/ouder/ouderadvies/drempel.js`: som en pincode.
- `src/features/ouder/ouderadvies/teksten.js`: alle schermteksten.
- `src/features/ouder/ouderadvies/NulmetingFlow.jsx`, `OuderVoorstellen.jsx`, `ui.jsx`, `vlag.js`.
- `src/features/ouder/ouderadvies/ouderadvies.test.js`: 37 tests.
- `src/shared/koppelcode.js`: code opschonen, claimen en foutsoorten.
- `scripts/audit/ouderadvies/stubServer.mjs`, `huidigeReis.mjs`, `prototypeTest.mjs`, `teksten.mjs`.
- `docs/audit/ouderadvies/VOORSTEL-migratie-ouderadvies.sql` (niet toegepast), `drietal-per-groep.txt`, schermafbeeldingen en testlogs.
- `docs/audit/OUDERADVIES-TEKSTEN.md` en dit verslag.

Gewijzigd (klein en gericht):
- `src/App.jsx`: lazy route `ouderadvies` achter de vlag; zonder vlag terug naar home.
- `src/app/routes.js`: `/ouderadvies`.
- `src/components/KoppelcodeBanner.jsx`, `src/components/CodeBalk.jsx`: codes opschonen en melding "al gekoppeld".
- `src/features/ouder/OuderInzicht.jsx`: wizard blijft open, knopnaam "Code gekregen?", tekst bij een kind zonder resultaten.
- `src/features/ouder/Gezinsstart.jsx`, `src/data/appGids.js`: knopnaam "Code gekregen?".
