# 📱 Play Store-vermelding Leerkwartier (concept 4 okt 2026)

> Status: ✅ teksten akkoord Mark 4 okt 2026 ("ja"). Wordt ingevuld in Play Console → Winkelvermelding zodra de identiteitscontrole is goedgekeurd.
> Huisregels: slogan erin · geen concurrenten bij naam · gratis-claim afgebakend (oefenen t/m 2031) · geen "Premium" · eerlijk over wat er is.

## App-naam (max 30 tekens)
**Leerkwartier: groep 1-8 & vo**

## Korte beschrijving (max 80 tekens)
**Een kwartier per dag leren, een leven lang slimmer. Oefenen voor groep 1-8 & vo.**

## Volledige beschrijving (max 4000 tekens)

Een kwartier per dag leren, een leven lang slimmer.

Leerkwartier is de oefenapp voor kinderen van groep 1 tot en met 8 en het voortgezet onderwijs. Elke dag één rustig kwartier: rekenen, taal, spelling, lezen en meer — precies op het niveau van je kind.

WAT JE KIND DOET
• Oefenen per groep en per vak, met vragen die aansluiten bij wat er op school geleerd wordt
• Bij elke vraag uitleg in drie niveaus: een hint, een stapje verder of de hele uitleg
• De Kwartiercheck: "waar sta ik nu?" — een korte check per groep die laat zien wat al goed gaat
• Oefenen voor de Doorstroomtoets in groep 8, met eigen vragen in de stijl van de toets
• Dictee, werkwoordspelling en een leesladder voor beginnende lezers
• Een speelpark om in te bouwen en te ontdekken als beloning na het oefenen

VOOR NIEUWKOMERS
Kinderen die net Nederlands leren kunnen vragen laten voorlezen, woordkaarten gebruiken en luisteren voordat ze lezen. Zo kan ook een kind dat nog niet goed leest meteen meedoen.

VOOR OUDERS
• Zet als ouder oefeningen klaar voor je kind
• Zie wat je kind gedaan heeft en waar het nog lastig gaat
• Eén account voor het hele gezin

VOOR DE KLAS
Leerkrachten kunnen leerpaden klaarzetten en Leerkwartier op het digibord gebruiken, zonder dat leerlingen eerst een rol hoeven te kiezen.

EERLIJK OVER DE PRIJS
Het oefenen is gratis, gegarandeerd tot en met 2031, en die belofte verlengen we telkens. Geen reclame, geen betaalgegevens nodig om te beginnen. Wie meer wil, kan later kiezen voor Familie: extra's voor het hele gezin voor één vast bedrag per jaar, dat vanzelf stopt — nooit een stille verlenging.

GEMAAKT IN NEDERLAND
Leerkwartier wordt gebouwd in Herwijnen, samen met ouders, leerkrachten en organisaties die gezinnen helpen. Vragen of ideeën? Mail naar hallo@leerkwartier.app.

## Overige velden
| Veld | Invulling |
|---|---|
| Categorie | Onderwijs |
| Tags | Onderwijs, Kinderen, Rekenen, Taal |
| E-mail ontwikkelaar | hallo@leerkwartier.app |
| Website | https://leerkwartier.app |
| Privacybeleid-URL | https://leerkwartier.app/privacy.html ✅ bestaat |
| Naam ontwikkelaar | **Leerkwartier** (nu nog "Studiebol" — omzetten ná goedkeuring identiteit) |
| Doelgroep (Gezinnen-programma) | 5-8, 9-12, 13+ jaar · app is "ontworpen voor kinderen" → strenge Families-regels (geen advertenties, geen tracking van kinderen, privacybeleid verplicht) |
| Advertenties | Nee |
| In-app-aankopen | ✅ **Besluit Mark 4 okt: Familie óók in de Android-app via Google Play Billing** ("liever meer verkopen voor iets minder"; Google 15% ≈ €5,85 per €39). Bouwen als **eenmalig in-app-product (geen Play-abonnement)** met 365 dagen geldigheid op onze server — zelfde regel als Stripe: nooit stille verlenging. Techniek: Digital Goods API + Payment Request in de TWA; aankoop server-side verifiëren via Google Play Developer API → zelfde `subscriptions`-rij als Stripe. |

## Beeldmateriaal (nog maken)
- App-icoon 512×512 (bestaat: `public/icons/icon-512-v3.png`, nakijken of 32-bit PNG zonder transparante rand)
- Feature graphic 1024×500 (banner met logo + slogan)
- Minimaal 2, liefst 4-8 telefoon-screenshots (oefenscherm, uitleg, Mijn-pagina, park, Kwartiercheck)
- Optioneel: 7"- en 10"-tablet-screenshots

## Nog te doen (na token-reset di 6 okt)
1. App-pakket (TWA) bouwen + ondertekeningssleutel + `public/.well-known/assetlinks.json` vullen
2. Vragenlijsten: contentclassificatie, gegevensveiligheid, doelgroep & content
3. Screenshots + feature graphic
4. Na goedkeuring: telefoonnummer verifiëren, naam ontwikkelaar → Leerkwartier, accounttype → organisatie proberen
