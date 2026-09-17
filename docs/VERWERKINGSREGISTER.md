# Verwerkingsregister — Leerkwartier

> AVG art. 30. Concept 16 september 2026 (Claude), vast te stellen door Mark Smulders vóór de KvK-inschrijving van 28 september 2026. Bron: de werkelijke datastromen in de code en de DPIA (vastgesteld 1 september 2026). Eén A4: alleen wat we écht verwerken.

**Verwerkingsverantwoordelijke:** Mark Smulders, handelend als Leerkwartier (particulier initiatief; vanaf 28 september 2026 eenmanszaak Leerkwartier, KvK-nummer volgt). Contact: hallo@leerkwartier.app · privacyvragen en verzoeken: leerkwartier.app/privacy.html. Geen functionaris gegevensbescherming (niet verplicht: geen grootschalige verwerking, geen overheidsorgaan).

## 1. Verwerkingen

| # | Verwerking | Betrokkenen | Gegevens | Doel | Grondslag | Bewaartermijn |
|---|---|---|---|---|---|---|
| 1 | Oefenen en voortgang bijhouden | leerlingen (8-16 jaar), ouders/verzorgers | zelfgekozen roepnaam, leervoortgang, quiz-/toets-/spelscores, per-vraag-antwoorden bij toetsen | leren en de voortgang tonen aan het kind en een gekoppelde ouder/verzorger of leerkracht | uitvoering gebruiksovereenkomst (art. 6.1b) | zolang het account bestaat; zelf wisbaar ("Verwijder al mijn data") |
| 2 | Accounts en koppelingen | ouders/verzorgers, leerkrachten, leerlingen | e-mailadres en naam (alleen bij optionele login), anonieme account-id, koppelcode ouder↔kind of leerkracht↔leerling | inloggen, kind aan ouder koppelen, klaargezette oefenstof | uitvoering gebruiksovereenkomst (art. 6.1b); Google-login op basis van toestemming (art. 6.1a) | zolang het account bestaat |
| 3 | Nieuwsbrief, weekrapport en oefenpakket per mail | ouders/verzorgers | e-mailadres, opgegeven groep en vakken, opt-in-moment | welkomst-, week- en oefenmails; afmelden per link | toestemming (art. 6.1a) | tot afmelding, daarna direct verwijderd uit de verzendlijst |
| 4 | Browser-herinneringen (push) | gebruikers die dit aanzetten | push-token van de browser | herinnering aan het dagelijkse kwartier | toestemming (art. 6.1a) | tot uitzetten of verlopen van het token |
| 5 | AI-uitleg (Charley/maatje, "leg het uit") | leerlingen | per verzoek: vak, onderwerp, de vraag, eventueel het foute antwoord, de getypte hulpvraag; bij het park-maatje ook zelf-vertelde weetjes | uitleg op maat bij een vraag | uitvoering gebruiksovereenkomst (art. 6.1b) | niet opgeslagen aan onze kant; verwerker bewaart niet voor training |
| 6 | Partnercodes (Ooievaarspas, voedselbanken, fondsen) | gezinnen die een code gebruiken | code, anoniem apparaat-kenmerk, optioneel een adres (alleen als het gezin dat zelf invult) | gratis Familie-niveau toekennen en de partner zacht informeren over gebruik (aantallen, nooit personen) | uitvoering gebruiksovereenkomst (art. 6.1b) | code geldig t/m 31-12-2027 (Ooievaarspas blijvend); adres tot de partner is geïnformeerd |
| 7 | Gebruiksstatistieken | n.v.t. (anoniem) | gebeurtenissen zonder naam, e-mail of IP; tijdelijk sessiekenmerk; anoniem apparaat-kenmerk | verbeteren van de app, dagrapport | gerechtvaardigd belang (art. 6.1f) | events automatisch opgeschoond na de bewaartermijn (pg_cron) |
| 8 | Wensenbord en feedback | gebruikers | opgegeven naam en tekst | wensen en fouten verzamelen en beantwoorden | gerechtvaardigd belang (art. 6.1f) | tot afgehandeld en gepubliceerd; op verzoek verwijderd |
| 9 | Contact met partners en scholen (outreach) | medewerkers van organisaties | zakelijk e-mailadres, naam, organisatie, correspondentie | samenwerking aanbieden en onderhouden | gerechtvaardigd belang (art. 6.1f) | zolang het contact loopt; opvolgbronnen maximaal 2 jaar na laatste contact |
| 10 | Betalingen (vanaf 2027, nog niet actief) | ouders/verzorgers | e-mail, betaalstatus, factuur; kaartgegevens alleen bij Stripe | Familie-abonnement en Seizoenspas | uitvoering overeenkomst (art. 6.1b); wettelijke plicht (art. 6.1c) voor facturen | facturen 7 jaar (fiscale bewaarplicht) |

**Wat we bewust niet verwerken:** verplichte achternaam, adres (behalve vrijwillig bij een partnercode), telefoonnummer, school, geboortedatum, foto's, locatie, tracking-cookies, advertentie-id's. Geen bijzondere persoonsgegevens, geen profilering voor commerciële doelen, geen verkoop of delen voor marketing.

## 2. Ontvangers en verwerkers

| Verwerker | Rol | Locatie / garantie | Overeenkomst |
|---|---|---|---|
| Supabase | database, login, opslag, back-ups | EU (Frankfurt) | standaard-verwerkersovereenkomst in de voorwaarden |
| Vercel | hosting en cookieloze bezoekstatistiek | VS, EU-standaardbepalingen | standaard-verwerkersovereenkomst |
| Anthropic | AI-uitleg | VS, EU-standaardbepalingen; geen training op API-data | publieke DPA; zero-data-retention-addendum aangevraagd 27 juli 2026 |
| Google | optionele login; Gemini als AI-reserve (niet actief) | VS, EU-standaardbepalingen | Cloud-DPA |
| Resend | verzenden van mails vanaf hallo@leerkwartier.app | VS, EU-standaardbepalingen | standaard-verwerkersovereenkomst |
| Cloudflare | doorgeefstation voor het gedeelde park (alleen posities, geen persoonsgegevens) | EU/wereldwijd | standaard-voorwaarden |
| Stripe (vanaf 2027) | betalingen en facturen | EU-entiteit | standaard-verwerkersovereenkomst |

Doorgifte buiten de EU alleen naar bovenstaande verwerkers, op basis van EU-standaardbepalingen en met minimale payloads.

## 3. Beveiliging (samenvatting)

HTTPS overal · versleuteling in rust bij Supabase · rijniveau-beveiliging (RLS) op elke tabel met persoonsgegevens · privé-opslag met tijdelijke links · dataminimalisatie als uitgangspunt · dagelijkse back-ups (Supabase Pro) plus wekelijkse export per mail · beschermde hoofdtak in GitHub · wachtwoorden, passkeys en herstelcodes op papier bewaard · noodplan en overdrachtspakket voor continuïteit · AI-verzoeken zonder accountgegevens en met een daglimiet per apparaat.

## 4. Rechten van betrokkenen

Inzage, correctie en verwijdering: zelf via de knop "Verwijder al mijn data" in het ouder-overzicht, of per mail aan hallo@leerkwartier.app (binnen een maand afgehandeld). Anonieme spelscores zonder account: verwijdering op verzoek door de beheerder. Kinderen: oefenen kan volledig zonder account; bij accountgebruik een leeftijdscheck met bevestiging door de ouder/verzorger.

## 5. Vaststelling en beheer

Dit register wordt bijgewerkt bij elke nieuwe verwerking (in elk geval bij: betaalfuncties, schoolkoppelingen met leerlinglijsten, nieuwe AI-functies) en jaarlijks tegen de DPIA gelegd.

Vastgesteld door: Mark Smulders, verwerkingsverantwoordelijke · Datum: ____________ · Handtekening: ____________
