# 🔗 Koppeling — bekende grenzen

Bijgewerkt: 4 september 2026.

Een rij in `learn_progress`, `leaderboard` en `topic_mastery` draagt **één**
`link_id`. Dat is de identiteit van het kind (zie `src/shared/koppeling.js`).
Daaruit volgen een paar grenzen die je moet kennen voordat je hier iets aan
verandert.

## 1. Ouder gaat vóór leerkracht

`metLinkId()` pakt eerst de ouder-koppeling en valt alleen terug op de
leerkracht-koppeling als die er niet is.

**Gevolg:** is een kind zowel thuis als op school gekoppeld, dan dragen zijn
rijen het *ouder*-link_id. De leerkracht ziet dat werk dan niet in zijn
overzicht, ook al staat de les door hem klaargezet.

Waarom zo gelaten: de ouder-koppeling hoort bij één kind in één gezin en is
daarmee de persoonlijkste. Twee link_ids per rij zou een schemawijziging
vragen (koppeltabel), en dat is niet nodig zolang de school-doelgroep vooral
uit leerlingen zónder ouder-koppeling bestaat.

**Waaraan je het herkent:** een leerkracht meldt dat een leerling wél werkt maar
op 0 blijft staan, en die leerling blijkt thuis ook gekoppeld.

**Als het gefixt moet worden:** een aparte tabel `progress_links`
(progress_id → link_id, meerdere per rij), of `link_ids uuid[]` op de rij met
een GIN-index. Beide raken elke schrijfweg, dus niet terloops doen.

## 2. Alleen rijen mét link_id zijn zichtbaar voor de volwassene

Stand 4 sep 2026: van de 1147 rijen in `learn_progress` dragen er 5 een
`link_id` — allemaal van na de koppeling-stap-2 van 2 september.

Oudere rijen worden opgevangen door de legacy-tak in
`haalLeerpadVoortgangVoorKind()` (link_id is null + naam, en user_id als de
koppeling die kent). Die tak leunt op naam en kan dus naamgenoten meenemen
wanneer de koppeling geen `child_user_id` heeft. Dat was al zo bij de scores
en is bewust niet strenger gemaakt: strenger betekent geschiedenis kwijt.

`koppel_mijn_data` hangt bij het claimen de eigen sessie-geschiedenis alsnog
aan de koppeling — maar alleen voor de ouder-kant, niet voor de leerkracht.

## 3. Het handmatige vinkje blijft bestaan naast de gemeten voortgang

`ouder_klaargezet.gedaan` en `leraar_klaargezet.gedaan` zijn vinkjes die het
kind zelf aantikt. Kinderen doen dat vrijwel nooit, dus sinds 4 sep 2026 wordt
de voortgang gemeten uit `learn_progress` (zie `src/shared/ui/LesVoortgang.jsx`).

Het vinkje telt nog steeds als "af" wanneer het aanstaat — een kind dat het wél
aantikt, moet niet ineens weer "bezig" te zien krijgen.

## 4. Klassengrootte: geen cap, wel getest tot 2 — schaalt op papier tot 30+

Voor leerkrachten zit er géén maximum op het aantal gekoppelde leerlingen (de
ouder-kant heeft `MAX_KINDEREN = 3`). `haalLeerlingOverzicht()` doet twee
`.in(link_id, [...])`-queries en het scherm rendert één rij per leerling —
dat is bij 28-32 leerlingen (Nederlandse praktijk: gemiddeld 23, geen wettelijk
maximum, veel scholen hanteren 28) geen probleem. Wél nog nooit met een echte
klas getest; het zwaarste punt zal `LesDetail` zijn dat per opengeklapte les
het leerpad lazy laadt (~50 kB) — acceptabel, want je klapt er één tegelijk open.

## 5. `topic_mastery` heeft dezelfde RLS-regel als `learn_progress` had — en dat is oké

`tm_select_own_or_legacy` laat een ingelogde gebruiker alleen eigen rijen zien.
Alleen `api/send-ouder-rapport.js` leest die tabel voor een ander kind, en die
draait met de service-role-key (omzeilt RLS). Ouder- en leerkracht-schermen
lezen mastery niet. Gaat dat ooit veranderen, dan is hier dezelfde
koppeling-policy nodig als in `20260904_ouder_leest_learn_progress.sql`.

## 6. `leaderboard.detail` is publiek leesbaar

Het scorebord heeft een SELECT-policy `true` — het is een publiek bord. Sinds
v527 staat daar per toets ook `detail` in (vraagtekst, gekozen en juist
antwoord, goed/fout). Geen persoonsgegevens buiten de al zichtbare
speler-naam, maar wel meer dan een score. Bij een privacy-ronde: `detail`
uit de publieke select halen (aparte tabel met koppeling-policy, of een
view zonder die kolom voor het bord).

## Doorlichting 9 nov 2026 (Mark: "kun je de koppelcode helemaal doorlichten en evt verbeteren?")

Werkwijze: eerst de echte data (27 koppelingen, 54 codes), dan de LIVE functies uit de database (niet de
migratiebestanden), dan de app-code. Server-wijzigingen getest met gesimuleerde sessies in een
teruggedraaide transactie (`docs/sql/koppel_harding_test.sql`) en daarna live met een echt kind-toestel.

**Hersteld (migratie `20261109_koppel_harding.sql`, live sinds 9 nov ~22:20):**
1. Raden had geen rem: `claim_link_code` en `koppel_diagnose` waren onbeperkt aan te roepen, ook zonder
   sessie. Nu 30 mislukte pogingen per uur per sessie, of zonder sessie per adres (`cf-connecting-ip`; een
   meegestuurde `X-Forwarded-For` wordt genegeerd, nagekeken). Antwoord `te_veel_pogingen`.
2. Eén code kon door twee toestellen tegelijk gebruikt worden (lezen en daarna pas afboeken). Nu boekt één
   UPDATE de code af; wie te laat is krijgt een nette weigering, hetzelfde toestel krijgt "gelukt".
3. `gezin_koppelingen_overnemen` keek niet of het oude uid een anonieme toestel-sessie was: wie het uid
   van een echt ouder-account kende kon diens koppelingen overnemen. Nu alleen van anonieme sessies.
4. `koppel_mijn_data` hing eigen werk aan élke koppeling waarvan je het id kende. Nu eerst `kind_hoort_bij`.
5. App: code met een naam erop ("Brian") ingevoerd via de balk op de eigen pagina door een profiel met een
   andere naam ("Bri") → koppeling stond onder "Brian", het profiel oefende zonder koppeling. De balk
   bewaart de koppeling nu ook onder de eigen profielnaam.

**Bekende grenzen die blijven (bewust, of nog te beslissen):**
- **De koppeling woont in het toestel** (`lk_koppelingen` in localStorage). Een tweede toestel met hetzelfde
  ouder-account en een kindprofiel met dezelfde naam schrijft zónder link_id (gezien: 1 gezin, 3 rijen in
  een maand). De ouder ziet die rijen via de naam-terugval, maar alleen bij exact dezelfde schrijfwijze.
  Oplossing zou een trigger zijn die bij `user_id = ouder` + naam van een eigen kind het link_id invult.
- **Toestel-slot zonder sleutel-herstel.** Krijgt een kind-toestel een nieuwe anonieme sessie (browser
  gewist, of het kind logt later in met een account), dan houdt het toestel de koppeling lokaal, maar
  `kind_hoort_bij` zegt nee: klaargezet, weekplan en berichten van thuis blijven stil leeg, terwijl het
  oefenwerk wél bij de ouder aankomt. Geen geval gevonden bij echte gezinnen (2 testgevallen). Als het
  gaat spelen: het toestel laten merken dat de server "nee" zegt en dan om een nieuwe code vragen.
- **Eerste toestel wint** bij een koppeling zonder toestel (10 oude koppelingen). Geen van die tien staat
  in het scorebord, dus het link_id is niet bekend bij buitenstaanders. Strenger maken sluit een
  terugkerend kind stil buiten; daarom gelaten.
- **Scorebord is openbaar inclusief `user_id` en `link_id`.** Daardoor is een link_id geen geheim, en is
  "het oude uid kennen" (overnemen) een zwak bewijs zodra een ouder zonder account op dezelfde sessie laat
  oefenen. Nu 0 zulke rijen. Netter: `user_id`/`link_id` niet meer aan anon tonen (view of kolomrechten).
- **Oefenwerk schrijven met een link_id wordt niet gecontroleerd** (insert-policy `true` op leaderboard):
  wie een link_id kent kan rijen in andermans ouder-overzicht zetten. Controleren kan, maar een kind met
  een nieuwe sessie zou dan helemaal niets meer kunnen opslaan; hangt samen met het toestel-slot hierboven.
- **Ouder kan zelf een verified koppeling aanmaken** (policy ALL op eigen rijen). Levert geen inzage op in
  andermans werk via link_id; wel via de naam-terugval op het openbare scorebord (naamgenoten), bekend.

**Cijfers 9 nov (nulmeting voor de volgende keer):** 25 verified koppelingen (20 echte ouders); bij 12 van
die 20 is na het koppelen geen enkele rij met link_id binnengekomen. 54 codes: 24 gebruikt, 22 open, 8
verlopen; 18 van de 20 gebruikte codes sinds 12 okt binnen een uur gebruikt, wat na een uur nog open staat
wordt vrijwel nooit meer gebruikt (17 van de 22 open codes zijn ouder dan een week).

## Scorebord dichtzetten voor interne id's — uitgezocht 9 nov 2026 (nog niet gebouwd)

**Nu:** `leaderboard` is voor iedereen leesbaar (policy `true`), inclusief de kolommen `user_id` en `link_id`.
246 rijen, 227 met user_id, 17 met link_id. Geen views op de tabel, geen realtime.

**Wat het raakt.** Kolomrechten intrekken (`revoke select (user_id, link_id)`) breekt elke leesactie die op
die kolommen filtert of `select *` doet; Postgres staat filteren zonder leesrecht niet toe:
- `src/data/repos/leaderboardRepo.js:31` — eigen scores ophalen op `user_id` (sync tussen toestellen);
- `src/features/ouder/kindData.js:31-33` — ouder/leerkracht leest op `link_id`, plus oude rijen op `user_id`;
- `src/features/account/KoppelKaarten.jsx:181` — Kindkaart leest op `link_id`;
- `src/components/EchteCijfers.jsx:49` — telt met `select("*")`.
Niet geraakt: het openbare scorebord, diploma-kast, leerkracht-overzichten (lezen op naam of toets-id en
vragen de twee kolommen niet op), en alles aan de serverkant (functies, api met service-sleutel).

**Aanpak in twee stappen** (anders valt het ouder-overzicht leeg bij wie nog een oude app-versie open heeft):
1. Drie leesfuncties in de database: `mijn_scores()` (rijen van de eigen sessie), `scores_voor_koppeling(link)`
   (alleen de ouder/leerkracht van die koppeling of een toestel dat erbij hoort; ook de oude rijen zonder
   link_id), en de teller in EchteCijfers op `select("id")`. App leest via die functies. Uitrollen.
2. Een week later, als vrijwel niemand meer op de oude versie zit (te zien aan `app_v` in events):
   kolomrechten intrekken. Vooraf en achteraf dezelfde kliktocht: ouder-overzicht, Kindkaart, sync.

**Wat het oplevert:** een link_id is dan geen openbaar gegeven meer. Daarmee vervallen in de praktijk drie
grenzen hierboven (eerste toestel wint, werk in andermans overzicht schrijven, zwak bewijs bij overnemen).
Kanttekening: id's die tot nu toe openbaar stonden, kunnen al zijn gelezen; voor de 17 rijen met link_id
gaat het om een handvol koppelingen, grotendeels van het eigen huishouden.
