# D-U-N-S-nummer voor een Play-organisatieaccount — voorbereiding (3 nov 2026)

> Vangnet voor het Play Store-traject. Alleen nodig als de route met 12 testers (tot ~13 nov) opnieuw wordt afgewezen.
> Een persoonlijk Play-account is niet om te zetten; een organisatieaccount is een nieuw account ($25) mét D-U-N-S.
> Bron Google: support.google.com/googleplay/android-developer/answer/13628312 (D-U-N-S verplicht voor organisaties, tot 30 dagen, naam + adres moeten exact gelijk zijn aan het Google Payments-profiel).

## 1. Eerst opzoeken (gratis, 5 min) — waarschijnlijk bestaat het nummer al
Altares (Nederlandse partner van Dun & Bradstreet) schrijft: bij inschrijving bij de KvK wordt automatisch een D-U-N-S-nummer aangemaakt.
Leerkwartier staat sinds 28 sep 2026 ingeschreven, dus het nummer bestaat vermoedelijk al. Drie plekken om te kijken:
1. **Play Console** → nieuw organisatieaccount starten → stap "D-U-N-S-nummer" → "Zoek je organisatie" → zoek op **Leerkwartier**, Nederland. (Niets betalen tot het nummer gevonden is.)
2. **my.dnb.com/lookup** → land Nederland → bedrijfsnaam Leerkwartier (of KvK 42176244).
3. **order.altares.nl** → zoek "Leerkwartier", Nederland → het D-U-N-S-nummer staat bij het bedrijfsprofiel (rapport zelf niet nodig).

Gevonden? → noteer het nummer hieronder en ga naar stap 3.

## 2. Niet gevonden: aanvragen
- **Gratis (wereldwijd formulier):** dnb.com/duns/get-a-duns.html → "International-based business" → gegevens hieronder invullen. Doorlooptijd tot 30 werkdagen; betaalde spoedoptie ~8 werkdagen.
- **Altares (NL, betaald):** order.altares.nl, prijs pas zichtbaar in de bestelstap. Alleen als het gratis formulier niet lukt.

## 3. Gegevens (exact zo invullen, ook in het Google Payments-profiel)
| Veld | Waarde |
|---|---|
| Juridische naam | **Leerkwartier** (eenmanszaak van M.A. Smulders) |
| Rechtsvorm | Eenmanszaak (sole proprietorship) |
| KvK-nummer | 42176244 |
| Btw-identificatienummer | NL005559830B23 |
| Startdatum | 1 oktober 2026 (inschrijving 28 sep 2026) |
| Vestigingsadres | Lijsterbeslaan 7, 4171 AS Herwijnen (zo staat het bij Dun & Bradstreet; controleer tegen het KvK-uittreksel) |
| Website | https://leerkwartier.app |
| E-mail (zakelijk, op eigen domein) | hallo@leerkwartier.app |
| Telefoon | 06-84581000 |
| Contactpersoon | Mark Smulders, eigenaar |
| Aantal medewerkers | 1 |
| Activiteit (SBI) | ontwikkelen van educatieve software / online leerplatform |

## 3b. Eerst een tweede Google-account (gecontroleerd 3 nov 17:25)
- Play Console: "Er bestaat al een ontwikkelaarsaccount voor marksmulders1973@gmail.com" → **één ontwikkelaarsaccount per Google-account**; het organisatieaccount moet onder een ander Google-account.
- hallo@leerkwartier.app heeft nog géén Google-account ("Kan dit account niet vinden") → dat is de logische eigenaar: zakelijk adres op het eigen domein, precies wat Google voor organisaties wil.
- **Mark maakt het account zelf** (Claude vult nooit wachtwoorden in): accounts.google.com → Account maken → Voor mezelf → naam → "Gebruik je huidige e-mailadres" → hallo@leerkwartier.app → verificatiecode (komt op hallo@, doorgestuurd naar Gmail; Claude kan hem voorlezen) → wachtwoord kiezen → op het Wachtwoordblad (Desktop\AI-Overdracht) zetten → telefoon 06 → 2-staps aan.
- Daarna in Chrome-voor-Claude ingelogd blijven met dat account; Claude doet dan de Play Console-registratie tot de betaalstap.

## 4. Daarna: organisatieaccount in Play Console
1. play.google.com/console → nieuw ontwikkelaarsaccount → **Organisatie**.
2. Organisatiegegevens + D-U-N-S invullen; zakelijk e-mailadres hallo@leerkwartier.app bevestigen; website leerkwartier.app.
3. Google Payments-profiel: naam en adres **letterlijk** gelijk aan D&B-profiel.
4. Registratie $25 betalen; verificatie duurt meestal enkele dagen (KvK-uittreksel bij de hand houden).
5. App (TWA, pakket + ondertekeningssleutel staan lokaal) opnieuw aanmaken onder het nieuwe account; de 12-testers-eis geldt daar niet.

## Voortgang 3 nov 18:50 (Mark "zet alles klaar, ik doe de betaling")
- ✅ Google-account **hallo@leerkwartier.app** aangemaakt (naam Leerkwartier Smulders, 11-5-1973, telefoon 06-84581000, personalisatie alles uit, Marks eigen wachtwoord). ✅ Tweestapsverificatie AAN (sms naar 06). Nog te doen door Mark: back-upcodes opvragen (myaccount.google.com → Beveiliging → Tweestapsverificatie → Back-upcodes) en op het Wachtwoordblad zetten.
- ✅ Play Console-registratie gestart onder dat account (play.google.com/console/u/2/signup): accounttype Organisatie → "Een bedrijf of onderneming" → ontwikkelaarsnaam "Leerkwartier" → stap Betalingsprofiel → dialoog "Nieuw betalingsprofiel maken" → **vraagt het 9-cijferige D-U-N-S-nummer (beperkt aantal pogingen, geen zoekfunctie)**. Daar staat het nu stil: de cijfers hebben we nog niet.
- ✅ 19:05-19:20: D-U-N-S 474075789 ingevuld en door Google bevestigd → **betalingsprofiel gemaakt** (Leerkwartier, Lijsterbeslaan 7, 4171 AS Herwijnen). Stappen "Je organisatie" (1-10 medewerkers, +31684581000, https://leerkwartier.app), "Openbaar profiel" (telefoon + hallo@, bevestiging aangevinkt), "Over jou" (ervaringstekst; ander account marksmulders1973@gmail.com opgegeven en met code geverifieerd), "Apps" (1 app, geld verdienen: ja via in-app aankopen, categorie kinderen/gezinnen) ✅. Stap "Hoe Google contact met je opneemt": naam Mark Smulders, taal Nederlands, +31684581000 ingevuld; **contact-e-mail moet ≠ hallo@ en op leerkwartier.app** → contact@leerkwartier.app. Proefmail 19:10 kaatste terug (forwardemail.net: "does not exist"; alleen alias hallo@). **19:17 TXT-record bij TransIP uitgebreid** (Mark ingelogd, Claude bewerkt): `forward-email=hallo:marksmulders1973@gmail.com,contact:marksmulders1973@gmail.com`, bevestigd bij ns0.transip.net; TTL 3600 → tweede proefmail 19:18 nog teruggekaatst (cache). Hertest ~19:40; daarna code naar contact@ laten sturen en de wizard afmaken (Voorwaarden → $25 door Mark).
- Les: het Chrome-voor-Claude-venster stond verborgen (document.hidden) → klikken in Google-dialogen kwam niet aan; herstellen met ShowWindow/SetForegroundWindow via PowerShell loste het op.

## ✅ 4 nov 2026 19:55 — IDENTITEIT GOEDGEKEURD + TELEFOONNUMMERS GEVERIFIEERD → ACCOUNT COMPLEET
- 16:53 mail Play Console "Je identiteit is geverifieerd" (48 minuten na indienen; "enkele dagen" was dus ruim).
- 19:50 Accountgegevens → tab Contactgegevens → "Telefoonnummer verifiëren" → sms naar 06 → code van Mark ingevuld → **beide nummers (contact + ontwikkelaar, zelfde 06) "Telefoonnummer geverifieerd"**. Eén code dekte beide.
- Volgende stap: "App maken" onder dit organisatieaccount (pakket app.leerkwartier.twa, upload-sleutel lokaal, winkelmateriaal docs/android/, teksten PLAY-STORE.md); daarna handelaarsstatus per app bevestigen onder App-content (+ URL voorwaarden) en de app uit het persoonlijke account laten staan tot de nieuwe live is.

## ✅ 4 nov 2026 16:50 — HANDELAARSSTATUS + WEBSITE AFGEROND
- Handelaarsstatus: "Dit is een handelaarsaccount" → beide vinkjes (toestemming openbaar profiel + alleen producten die aan lokale wetgeving voldoen) → Opslaan → "Handelaarsstatus opgeslagen". Accountgegevens tonen nu **Handelaar**. Google: later per app bevestigen onder App-content (+ URL Servicevoorwaarden, bv. https://leerkwartier.app/voorwaarden.html).
- Website: stond op de homepage nog op "Actie vereist" hoewel Search Console de koppeling al toonde (Partnerschappen → Play-ontwikkelaarsaccount). Nogmaals "Verificatieverzoek sturen" geklikt → veld sprong direct naar **check_circle Website geverifieerd**; taak van de homepage verdwenen.
- Open bij Google: identiteit (documenten "worden beoordeeld", enkele dagen, mail naar hallo@) → daarna telefoonnummers verifiëren (sms) → dan "App maken".

## ✅ 4 nov 2026 16:05 — IDENTITEITSVERIFICATIE INGEDIEND
- Organisatie: foto van het KvK "Bericht van registratie" (KVK-nummer 42176244, Mark Antonius Smulders, Lijsterbeslaan 7) geüpload → "Ingediend / Wordt beoordeeld". Bestand: `Leerkwartier-dossiers\KvK\KvK-bericht-van-registratie-42176244.jpeg` (van Desktop\kvk.jpeg, foto Mark 4 nov).
- Gemachtigde vertegenwoordiger: Nederland → Geldig Europees paspoort → `Downloads\paspoort_google.jpg` (dezelfde scan als de verificatie van het persoonlijke account, april 2026) → gegevens Mark Antonius Smulders, 11-05-1973, Lijsterbeslaan 7, 4171 AS Herwijnen → "Wordt beoordeeld".
- Google: "We voeren een aantal controles uit en nemen snel contact met u op" (meestal enkele dagen; mail naar hallo@). Daarna: telefoonnummers verifiëren (Accountgegevens → Verifiëren, sms), dan app aanmaken onder dit account.
- Lessen: upload in het payments-iframe gaat via de knop "Bladeren door bestanden" → Playwright filechooser (`browser_file_upload`); `setInputFiles` op het verborgen veld werkte niet. Het KvK-uittreksel (€9,60) was niet nodig; de bestelling is niet afgerond.

## ✅ 3 nov 2026 ~19:55 — ORGANISATIEACCOUNT GEMAAKT
- Play Console toont "Ontwikkelaarsaccount gemaakt"; betalingsbewijs $25 naar hallo@. Eigenaar: Google-account hallo@leerkwartier.app (Play Console `/console/u/2/`), ontwikkelaarsnaam "Leerkwartier", contact contact@leerkwartier.app (geverifieerd), telefoon +31684581000.
- ✅ 20:00 Website geverifieerd: Play Console → Accountgegevens → "Verificatieverzoek sturen" → Search Console (eigenaar marksmulders1973@gmail.com, property https://leerkwartier.app/) → Instellingen → Partnerschappen → "VERZOEK AFHANDELEN" → GOEDKEUREN → "Koppeling Leerkwartier is gemaakt". (Les: de knop reageert alleen op JS-mouse-events op `div[role=button][data-request-id]`; de dialoog is `[role=dialog]` met tekst "Property koppelen".)
- Nog te doen (Google): identiteits-/organisatieverificatie (mail "U moet uw identiteit verifiëren" van Google Payments, 19:55) → documenten uploaden die overeenkomen met D&B-gegevens: KvK-uittreksel Leerkwartier (Lijsterbeslaan 7, 4171 AS Herwijnen) + evt. ID van Mark; telefoonnummer verifiëren in de Console.
- Daarna: app opnieuw opzetten onder dit account (pakket app.leerkwartier.twa, upload-sleutel lokaal, winkelmateriaal docs/android/, teksten PLAY-STORE.md) — geen 12-testers-eis.
- Het oude persoonlijke account (marksmulders1973@gmail.com, app 4973180433502331886) laten bestaan tot de nieuwe app live is; daarna besluiten (overdracht van de app tussen accounts is ook mogelijk via Play Console → "App overdragen").

## Stand
- 3 nov 2026 17:00: **Leerkwartier staat al in de Dun & Bradstreet Data Cloud** (gevonden via order.altares.nl, land Nederland): "Leerkwartier · ACTIVE · Lijsterbeslaan 7, 4171 AS Herwijnen, Gelderland · Type: Proprietorship · Activiteit: Custom computer programming". Er bestaat dus al een D-U-N-S-nummer; aanvragen is niet nodig.
- Het nummer zelf toont Altares alleen tegen betaling: **€15,00 "Dun & Bradstreet Basisinformatie" (inclusief het D-U-N-S-nummer)**; niets besteld. De Amerikaanse opzoekpagina (my.dnb.com/lookup) werkt alleen met een US-ZIP.
- **Gratis route voor het nummer:** in Play Console de organisatie-flow starten → stap D-U-N-S → "Zoek je organisatie" (Leerkwartier, Nederland) toont het nummer zonder kosten; pas betalen bij de registratie van het account zelf ($25). Alternatief: €15 bij Altares (Mark beslist).
- Vestigingsadres = **Lijsterbeslaan 7, 4171 AS Herwijnen** (zo invullen in Google Payments; moet gelijk zijn aan D&B).
- **D-U-N-S-nummer Leerkwartier: 474075789** (Altares-factuur NLWEB26-4978, 3 nov 2026 19:00, €18,15 via iDEAL, PDF in de mail op hallo@; factuur-PDF nog in Leerkwartier-dossiers zetten).
