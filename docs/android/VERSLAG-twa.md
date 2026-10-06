# Verslag — Leerkwartier als Android-app (TWA), 6 okt 2026

Branch: `android/twa` (vanaf main `9492c7a`). Niets naar main gepusht.

## Kort

| Onderdeel | Status |
|---|---|
| Android-project (Bubblewrap 1.25.0) in `android/` | ✅ gegenereerd, zonder sleutels |
| `android/twa-manifest.json` met alle gevraagde instellingen | ✅ |
| `assetlinks.json` (android/ + public/.well-known/) | ✅ (de oude `[]`-placeholder in public/ is vervangen) |
| Ongesigneerd `.aab` in `android/uit/` | ❌ **niet gelukt in deze sessie** — zie Problemen |
| `bundletool validate` | ❌ niet uitgevoerd (geen bundle) |
| Winkelmateriaal (icoon, feature graphic, 6 schermafbeeldingen) | ✅ |
| `PLAY-STORE.md` (teksten, Data safety, rating, doelgroep, stappen) | ✅ |

## Problemen (eerlijk)

1. **Geen bundle gebouwd.** Het netwerkbeleid van deze cloud-sessie blokkeert `dl.google.com` (en daarmee ook `maven.google.com`, dat daarheen doorstuurt). Van die server komen de Android SDK (command-line tools, build-tools, platform), de Android Gradle Plugin en aapt2. Zonder die drie kan Gradle geen `.aab` maken, en ook `bundletool` staat alleen op Google's Maven. Ik heb dit niet omzeild via onofficiële spiegels (veiligheid: je wilt geen bouwgereedschap van onbekende bron in je app).
   → Oplossing: de bundle lokaal bouwen (zie hieronder, ±15 min eenmalig), óf in de omgevings-instellingen van de cloud-sessie `dl.google.com` en `maven.google.com` toestaan en deze taak opnieuw laten draaien.
2. **Live site niet bereikbaar** vanuit de sessie (`leerkwartier.app` ook geblokkeerd). De schermafbeeldingen zijn daarom gemaakt van een **lokale build van main (6 okt, versie "6 okt")** — dezelfde code als live. Gevolg: de database (Supabase) was ook niet bereikbaar, maar de getoonde schermen (start, oefenvraag, uitleg na fout antwoord, nieuwkomers, vraag van vandaag, Mijn pagina) hebben daar geen data voor nodig. Het versie-stempel rechtsboven is weggehaald op de plaatjes.
3. **Icoon-generatie:** Bubblewrap haalt iconen normaal van de live URL's. Die zijn nu van `public/icons/` via een lokale server gehaald (zelfde bestanden); in `twa-manifest.json` en `app/build.gradle` staan wél de echte `https://leerkwartier.app/...`-adressen.
4. **compileSdk/targetSdk = 36**, niet 34: dat is wat Bubblewrap 1.25 genereert en wat Google Play nu eist voor nieuwe apps (target ≥ 35). API 34 zou door Play geweigerd worden.
5. **`signingKey`** in het manifest wijst naar een dummy-pad (`./GEEN-SLEUTEL-HIER-signeer-lokaal.keystore`, alias `leerkwartier`). Er is géén keystore gemaakt of gecommit; `.gitignore` blokkeert `*.jks/*.keystore/*.p12`.
6. **Versie-stempel (`src/versie.js`) niet opgehoogd:** deze branch wordt niet uitgerold; ophogen hier zou alleen een merge-conflict met main geven. Ophogen bij het mergen.

## Wat de maker (Mark) nog lokaal doet

**A. Bundle bouwen (eenmalig gereedschap installeren)**
```bash
npm i -g @bubblewrap/cli
cd android
bubblewrap build --skipSigning
#   eerste keer: Bubblewrap vraagt of het zelf JDK 17 + Android SDK mag downloaden → ja
#   uitkomst (ongesigneerd): app/build/outputs/bundle/release/app-release.aab
mkdir -p uit && cp app/build/outputs/bundle/release/app-release.aab uit/app-release-bundle.aab
```
(`manifest-checksum.txt` staat klaar, dus Bubblewrap vraagt níét om het project opnieuw te genereren.)

Controle (optioneel): `java -jar bundletool.jar validate --bundle=uit/app-release-bundle.aab` → moet tonen: package `app.leerkwartier.twa`, versionCode `1`, versionName `1.0.0`.

**B. Signeren met je upload-sleutel**
```bash
jarsigner -keystore <jks> -storepass <pw> uit/app-release-bundle.aab leerkwartier
jarsigner -verify uit/app-release-bundle.aab
```
(Of: zet in `twa-manifest.json` bij `signingKey.path` het pad naar je .jks en draai `bubblewrap build` zónder `--skipSigning` — dan signeert Bubblewrap zelf en krijg je `app-release-bundle.aab`. Commit dat pad niet.)

**C. assetlinks uitrollen**
Merge `public/.well-known/assetlinks.json` naar main en deploy. Controle: https://leerkwartier.app/.well-known/assetlinks.json moet de JSON tonen (geen HTML). Na de eerste upload óók de SHA-256 van de **Play-app-ondertekeningssleutel** erbij zetten (Play Console → App-integriteit), anders verschijnt bij gebruikers een adresbalk.

**D. Uploaden** — stappenlijst in `docs/android/PLAY-STORE.md` § 8 (gesloten test, 12 testers × 14 dagen, dan productie).

## Belangrijk voor later
- **Betalen:** zodra het Familie-pakket (Stripe) in 2027 live gaat, mag dat in de Play-app niet via Stripe → Play Billing inbouwen of de koopknop in de app verbergen (PLAY-STORE.md § 7).
- **Nieuwe versie:** `appVersionCode` +1 (en `appVersionName`) in `twa-manifest.json`, dan `bubblewrap update` + build. De web-app zelf updaten kan gewoon zoals altijd — de Android-app laadt altijd de live site.

## Bestanden

| Bestand | Grootte |
|---|---|
| `android/twa-manifest.json` | 1.8KB |
| `android/assetlinks.json` | 264B |
| `android/.gitignore` | 242B |
| `android/manifest-checksum.txt` | 40B |
| `android/app/build.gradle` | 9.8KB |
| `android/app/src/main/AndroidManifest.xml` | 6.9KB |
| `android/store_icon.png` | 78KB |
| `public/.well-known/assetlinks.json` | 264B |
| `docs/android/PLAY-STORE.md` | 13KB |
| `docs/android/store/feature-1024x500.png` | 125KB |
| `docs/android/store/icon-512.png` | 30KB |
| `docs/android/store/scherm-1-start.png` | 950KB |
| `docs/android/store/scherm-2-oefenvraag.png` | 387KB |
| `docs/android/store/scherm-3-uitleg.png` | 413KB |
| `docs/android/store/scherm-4-nieuwkomers.png` | 489KB |
| `docs/android/store/scherm-5-vandaag.png` | 378KB |
| `docs/android/store/scherm-6-mijn-pagina.png` | 410KB |
| `android/app/src/main/res/**` (iconen, splash, snelkoppelingen, strings) | ± 880 KB samen |
| `android/gradle/wrapper/*`, `gradlew`, `gradlew.bat`, `settings.gradle`, `build.gradle`, `gradle.properties` | ± 70 KB samen |
| `android/app/src/main/java/app/leerkwartier/twa/*.java` (3 bestanden) | ± 3 KB |

Snelkoppelingen (lang drukken op het icoon): Mijn pagina → `/mijn`, Vandaag → `/vandaag`, Nieuwkomers → `/nieuwkomers`.
