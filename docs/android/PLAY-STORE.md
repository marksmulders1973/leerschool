# Leerkwartier — Google Play winkelteksten en formulieren

Alles hieronder is klaar om te plakken in de Play Console (Nederlands, B1, "je").
Afbeeldingen staan in `docs/android/store/`.

---

## 1. Hoofdgegevens

| Veld | Tekst | Tekens |
|---|---|---|
| App-naam (max. 30) | **`Leerkwartier: leren in 15 min`** (of kort: `Leerkwartier`) | 29 |
| Korte omschrijving (max. 80) | **`Gratis elke dag 15 minuten oefenen. Groep 3 t/m 8 en brugklas. Met uitleg.`** | 74 |

- **Categorie:** Onderwijs (Education)
- **Tags (kies max. 5 in de Console):** Onderwijs, Rekenen, Lezen, Taal leren, Huiswerk/studie
- **Contact-e-mail:** hallo@leerkwartier.app
- **Website:** https://leerkwartier.app
- **Privacybeleid (URL):** https://leerkwartier.app/privacy.html  (bestand: `public/privacy.html`, bijgewerkt 1 okt 2026)

---

## 2. Volledige omschrijving (max. 4000 tekens — deze tekst is ± 2.450 tekens)

```
Leerkwartier helpt je kind elke dag een stukje verder. Een kwartier per dag leren, een leven lang slimmer.

Leerkwartier is een gratis oefen-app voor de basisschool (groep 3 tot en met 8) en de brugklas. Je oefent rekenen, taal, begrijpend lezen en wereldoriëntatie in korte stukjes van ongeveer 15 minuten. Zo past oefenen makkelijk in een gewone dag.

GRATIS, ZONDER ACCOUNT, ZONDER RECLAME
• Je kunt meteen beginnen. Een account is niet nodig.
• Er staat geen reclame in de app.
• We verkopen geen gegevens.

UITLEG IN DRIE STAPPEN
Een fout antwoord is geen probleem. Je krijgt dan niet alleen het goede antwoord, maar uitleg die je stap voor stap helpt:
1. Een korte uitleg van de vraag.
2. Is dat nog lastig? Dan volgt een simpelere uitleg.
3. Nog steeds lastig? Dan leggen we het nog eenvoudiger uit.
Daarna oefen je verder tot je het echt snapt.

OEFENEN VOOR DE DOORSTROOMTOETS
In groep 7 en 8 kun je gericht oefenen voor de Doorstroomtoets (vroeger de Cito-eindtoets): rekenen, taal, lezen en studievaardigheden. De vragen zijn zelf gemaakt in de stijl van de toets, met uitleg bij elke vraag.

ELKE DAG EEN NIEUWE VRAAG
Bij "Vandaag" staat elke dag een nieuwe oefenvraag klaar. Handig om er een gewoonte van te maken.

VOOR NIEUWKOMERS
Is Nederlands nog nieuw voor je kind? Op de nieuwkomers-pagina staan korte zinnen en uitleg bij elke som. Je kind kan een zin aantikken en ziet dan de vertaling in de eigen taal, bijvoorbeeld Engels, Arabisch, Oekraïens, Turks, Roemeens of Bulgaars. Alles blijft in het Nederlands, zodat je kind de taal leert.

VOORLEZEN
Kan je kind nog niet goed lezen? Zet voorlezen aan. Dan leest de app de vraag en de antwoorden hardop voor.

HULP VAN CHARLEY
Kom je er niet uit? Dan kun je hulp vragen aan Charley, het hulpje in de app. Charley geeft uitleg met hulp van kunstmatige intelligentie (AI). Je vraag gaat daarvoor naar een AI-dienst. Vul geen achternaam, adres of school in. Lees hierover meer in ons privacybeleid.

VOOR THUIS EN VOOR DE KLAS
• Iedereen in het gezin kan een eigen plek kiezen op "Mijn pagina".
• Ouders of verzorgers kunnen meekijken wat hun kind oefent.
• Leerkrachten kunnen oefeningen klaarzetten voor de klas.

RUSTIG EN OVERZICHTELIJK
Leerkwartier is gemaakt om rustig te oefenen: duidelijke knoppen, korte vragen en geen afleiding. 15 minuten per dag is genoeg.

Vragen of tips? Mail ons op hallo@leerkwartier.app. We lezen alles.
```

> Controleer vóór plaatsen: noemt de tekst niets wat (nog) niet live staat? (Familie-pakket/betalen bewust NIET genoemd — de betaalmuur staat uit tot 2027; zie § 7.)

---

## 3. Afbeeldingen (`docs/android/store/`)

| Bestand | Gebruik in Play Console | Formaat |
|---|---|---|
| `icon-512.png` | App-pictogram | 512×512, 32-bit PNG, volledig dekkend (geen transparantie) |
| `feature-1024x500.png` | Feature graphic | 1024×500, PNG zonder alfa |
| `scherm-1-start.png` | Telefoon-screenshot 1 — "Elke dag een kwartier oefenen" | 1080×1920 |
| `scherm-2-oefenvraag.png` | 2 — "Korte vragen voor groep 3 tot en met 8" | 1080×1920 |
| `scherm-3-uitleg.png` | 3 — "Fout? Dan krijg je uitleg" | 1080×1920 |
| `scherm-4-nieuwkomers.png` | 4 — "Hulp in je eigen taal en voorlezen" | 1080×1920 |
| `scherm-5-vandaag.png` | 5 — "Elke dag een nieuwe vraag" | 1080×1920 |
| `scherm-6-mijn-pagina.png` | 6 — "Een eigen plek voor elk kind" | 1080×1920 |

---

## 4. Data safety (Gegevensveiligheid) — ingevuld voorstel

Gecontroleerd in de code: `src/utils.js` → `track()` (eigen events-tabel in Supabase), `src/main.jsx` (Vercel Web Analytics), `api/` (AI-routes, e-mail via Resend, rate-limit) en `public/privacy.html`.

**Algemene vragen**
- *Verzamelt of deelt je app gebruikersgegevens van de vereiste typen?* → **Ja**
- *Worden alle gegevens versleuteld tijdens verzending?* → **Ja** (alles via HTTPS)
- *Kunnen gebruikers verzoeken hun gegevens te verwijderen?* → **Ja** (knop "Verwijder mijn data" in het ouder-dashboard + mail naar hallo@leerkwartier.app)
- *Heeft de app een onafhankelijke beveiligingsreview gehad (MASA)?* → Nee

**Gegevenstypen** (V = verzameld · D = gedeeld met derde partij in de zin van Google: *niet* een verwerker die namens jou werkt — verwerkers zoals Supabase/Vercel/Resend/Anthropic tellen volgens Google's definitie als "service provider" en hoeven niet als "gedeeld" te worden opgegeven)

| Categorie → type | V | D | Verplicht/optioneel | Doel | Toelichting |
|---|---|---|---|---|---|
| App-activiteit → App-interacties | ✔ | ✘ | Verplicht (automatisch) | Analyse, App-functionaliteit | Eigen anonieme events (welke knop/vraag), zonder naam/e-mail/IP; PII-sleutels worden eruit gefilterd (`_cleanProps`). |
| App-activiteit → Overige door gebruiker gemaakte content | ✔ | ✘ | Optioneel | App-functionaliteit | Chatberichten aan Charley (AI-hulp) en het park-maatje; "Fout melden"/feedback/tips met vrije tekst en eventueel een schermafbeelding. Chatberichten worden door ons niet opgeslagen, wel doorgestuurd naar de AI-dienst (verwerker). |
| Apparaat- of andere ID's | ✔ | ✘ | Verplicht (automatisch) | Analyse, Fraudepreventie/beveiliging | Willekeurig apparaat-kenmerk `lk_uid` (geen Android-ID, geen advertentie-ID) en een tijdelijk sessie-kenmerk; ook gebruikt voor de dagelijkse AI-limiet. |
| Persoonlijke info → Naam | ✔ | ✘ | Optioneel | App-functionaliteit, Accountbeheer | Voornaam/bijnaam voor profiel en scorebord; volledige naam alleen bij optioneel inloggen met Google. |
| Persoonlijke info → E-mailadres | ✔ | ✘ | Optioneel | Accountbeheer, Communicatie van de ontwikkelaar | Alleen bij inloggen met Google of aanmelden voor weekmail/nieuwsbrief/ouder-rapport (verzonden via Resend). |
| App-info en prestaties → Crashlogs/diagnostiek | ✔ | ✘ | Verplicht | App-functionaliteit | Tijdelijke server-foutlogs (< 30 dagen). Vercel Web Analytics telt geaggregeerde paginaweergaven en apparaattype (cookieloos). |
| Financiële info → Aankoopgeschiedenis | ✘ (nu) | — | — | — | Betalen (Stripe) staat uit tot 2027. Bij aanzetten: opnieuw invullen (zie § 7). |

**Niet verzameld:** locatie, telefoonnummer, adres, contacten, foto's/video's (behalve een vrijwillige schermafbeelding bij "Fout melden"), audio, agenda, gezondheid, browsegeschiedenis, advertentie-ID.

**Wordt er data verkocht?** Nee. **Advertenties?** Nee, geen advertentie-SDK's.

> Eerlijkheidsnoot: de lijst klopt met de code van 6 okt 2026. Komt er later iets bij (bijv. betalen, push-meldingen in de Android-app), dan moet dit formulier mee veranderen.

---

## 5. Content rating (IARC-vragenlijst)

- Categorie: **Referentie, nieuws of educatief** ("Reference, News, or Educational").
- Geweld, angst, seks, grof taalgebruik, drugs, gokken: **Nee** op alle vragen.
- *Kunnen gebruikers met elkaar communiceren of content delen?* → **Nee** voor chat tussen gebruikers. Let op: er is een **wensenbord/tips-pagina** waar ingestuurde tips zichtbaar kunnen worden, maar alleen ná moderatie door de maker → antwoord "Nee" is verdedigbaar; twijfel je, kies dan "Ja, met moderatie".
- *Deelt de app de locatie van de gebruiker?* → Nee.
- *Digitale aankopen?* → Nee (zolang de betaalmuur uit staat).
- *Bevat de app door AI gegenereerde content?* → **Ja** (AI-hulp Charley en sommige AI-gemaakte oefenvragen) — met filters, educatief.
- Verwachte uitkomst: PEGI 3 / IARC 3+ / "Iedereen".

---

## 6. Doelgroep en gezinsbeleid (Target audience & Families)

- **Doelgroep-leeftijden:** kies **6-8, 9-12 en 13-15** (kinderen) **én 18+** (ouders/verzorgers en leerkrachten gebruiken de app ook). Daarmee valt de app onder het **Gezinsbeleid (Families policy)**.
- **Advertenties:** geen. Bij "Bevat je app advertenties?" → **Nee**.
- **Privacybeleid:** aanwezig (URL hierboven), noemt kinderen, AI-verwerkers en verwijderrecht.
- **AI-chat vermelden:** in de omschrijving staat dat Charley AI gebruikt en dat de vraag naar een AI-dienst gaat. Google vraagt voor AI-apps voor kinderen dat ongepaste output wordt tegengegaan en dat gebruikers dit kunnen melden: in de app is er "🚩 Klopt er iets niet?" en de AI-routes hebben filters en een daglimiet (`api/_guard.js`).
- **Inloggen met Google:** optioneel; de app werkt volledig zonder account. Controleer bij het invullen of de Families-regels voor inloggen bij kinder-apps je nog iets extra's vragen (de Console laat dit zien).
- **"Is je app per ongeluk aantrekkelijk voor kinderen?"** → niet van toepassing: hij is bewust voor kinderen.
- **Teacher Approved / Designed for Families** is optioneel; kan later.

---

## 7. Let op voor later (spijt-later-punten)

1. **Betalen in de Android-app = Google Play Billing.** Als het Familie-pakket (Stripe) in 2027 live gaat, mag je in een Play-app digitale inhoud **niet via Stripe** verkopen. Kies dan: (a) Play Billing via de Digital Goods API in de TWA (Bubblewrap-feature `playBilling`), of (b) in de Android-app de koop-knop verbergen. Plan dit vóór de lancering in januari 2027.
2. **Nieuwe persoonlijke ontwikkelaarsaccounts** moeten eerst een gesloten test draaien met **minimaal 12 testers, 14 dagen aaneen**, vóórdat productie mag. Begin daar dus ruim op tijd mee (vóór de Doorstroomtoets-piek in februari).
3. **assetlinks.json moet live staan** vóór de eerste test, anders toont de app een adresbalk bovenin (dan lijkt het een browser in plaats van een app).
4. **Play App Signing:** Google hergesigneert je app met een eigen sleutel. Zet na de eerste upload **óók de SHA-256 van de Play-app-ondertekeningssleutel** (Play Console → Testen en releasen → App-integriteit) in `assetlinks.json`, naast je upload-sleutel. Anders werkt de volledig-scherm-weergave niet voor mensen die de app uit de Play Store halen.

---

## 8. Stappenlijst voor de maker (Mark)

1. **Play Console** → https://play.google.com/console → *App maken*: naam "Leerkwartier", taal Nederlands, **App** (geen game), **Gratis**, verklaringen aanvinken.
2. **App-inhoud invullen** (menu *Beleid → App-inhoud*): privacybeleid-URL, advertenties (Nee), app-toegang (alles zonder login bereikbaar), content rating (§ 5), doelgroep (§ 6), Data safety (§ 4), overheids-app (Nee), financiële functies (Geen), gezondheid (Nee).
3. **Winkelvermelding** (*Groeien → Winkelvermelding*): teksten uit § 1-2, afbeeldingen uit § 3.
4. **Bundle bouwen + signeren** (lokaal, zie `docs/android/VERSLAG-twa.md`).
5. **assetlinks.json uitrollen**: `public/.well-known/assetlinks.json` staat klaar → mergen naar main en deployen → controleer https://leerkwartier.app/.well-known/assetlinks.json.
6. **Gesloten test** (*Testen → Gesloten testen*): nieuw track, testers toevoegen via e-maillijst of Google Groep (**minimaal 12 mensen**), `app-release-bundle.aab` uploaden, release-notities ("Eerste versie"), uitrollen. Deel de opt-in-link met de testers; zij moeten hem accepteren en de app installeren.
7. **Na upload:** SHA-256 van de Play-ondertekeningssleutel toevoegen aan assetlinks (§ 7.4) en opnieuw deployen.
8. **14 dagen** laten lopen met ≥ 12 testers die de app echt geïnstalleerd houden en gebruiken.
9. **Productietoegang aanvragen** (*Dashboard → Productie aanvragen*): een paar vragen over de test beantwoorden.
10. **Productie-release**: dezelfde bundle (of een nieuwe met hoger `appVersionCode`) promoveren naar Productie. Review duurt meestal 1-7 dagen.
