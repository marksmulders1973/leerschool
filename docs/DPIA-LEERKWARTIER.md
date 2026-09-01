# DPIA — Leerkwartier (VASTGESTELD 1 september 2026)

**Data Protection Impact Assessment (gegevensbeschermingseffectbeoordeling, AVG art. 35)**
Versie: 1.0 — vastgesteld 1 september 2026 (concept 27 juli 2026) · Opsteller: Claude (concept), gereviewd en vastgesteld door Mark Smulders (verwerkingsverantwoordelijke)
Herzien: jaarlijks, of eerder bij nieuwe verwerkingen (bv. betaalfuncties in 2027).

> **Waarom deze DPIA:** Leerkwartier verwerkt op beperkte schaal gegevens van kinderen (8-16 jaar) voor onderwijsdoeleinden. Grootschalige verwerking van gegevens van kwetsbare groepen (kinderen) staat op de AP-lijst van DPIA-plichtige verwerkingen; hoewel de schaal nu klein is (<200 accounts), leggen we dit proactief vast — o.a. voor partners zoals gemeenten (Ooievaarspas) en scholen.

## 1. Beschrijving van de verwerking

**Doel:** gratis oefenen voor de Doorstroomtoets en schoolvakken, met voortgang bijhouden en optionele AI-uitleg. Geen advertenties, geen verkoop van data, geen profilering voor commerciële doelen.

**Betrokkenen:** leerlingen (8-16 jaar, primair groep 6-8), ouders, leerkrachten.

**Welke gegevens (dataminimalisatie is uitgangspunt):**
| Gegeven | Van wie | Waar | Waarom |
|---|---|---|---|
| Voornaam/roepnaam (zelfgekozen) | leerling | Supabase (EU) | scorebord, voortgang |
| Leervoortgang, quiz-scores, spel-scores (sinds 1 sep 2026 incl. per-vraag-antwoorden bij toetsen, voor het vraag-voor-vraag-inzicht van de gekoppelde ouder/verzorger) | leerling | Supabase (EU) | leren bijhouden; ouder helpt gericht |
| E-mail + naam (alleen bij optionele login/ouder-account) | ouder/leerkracht | Supabase (EU) / Google OAuth | account, ouder-rapport |
| E-mail (nieuwsbrief/wachtlijst, opt-in) | ouder | Supabase (EU) → Resend | welkomst-/weekmail |
| Browser-push-token (opt-in) | gebruiker | Supabase (EU) | herinneringen |
| "Maatje-weetjes" (bv. lievelingseten) | leerling | alléén localStorage op eigen apparaat | persoonlijk park-maatje; wisbaar via ☰ |
| Gebruiksstatistieken (events) | n.v.t. | Supabase (EU) | verbetering; zonder naam/e-mail/IP, tijdelijk sessie-kenmerk |
| Feedback/wensen (naam + tekst) | gebruiker | Supabase (EU) | wensenbord |

**Wat we bewust NIET verwerken:** achternaam verplicht, adres, telefoonnummer, school, geboortedatum, foto's, locatie, tracking-cookies, advertentie-ID's.

**AI-verwerking (Claude/Anthropic, terugval Gemini/Google):** per verzoek gaan alleen vak/onderwerp, de vraag, eventueel een fout antwoord en (alleen bij het park-maatje) de zelf-vertelde weetjes mee; bij de app-hulpfunctie ("Vraag Charley", sinds 1 sep 2026) alleen de getypte hulpvraag. Geen accountgegevens, geen e-mail. Anthropic gebruikt API-data standaard niet voor modeltraining; DPA is beschikbaar en ZDR (zero data retention) is aangevraagd (zie §3).

## 2. Grondslag, noodzaak en proportionaliteit

- **Grondslag:** uitvoering van de (gratis) gebruiksovereenkomst (art. 6.1b) voor kernfuncties; toestemming (art. 6.1a) voor optionele onderdelen (nieuwsbrief, push, Google-login); gerechtvaardigd belang (art. 6.1f) voor anonieme gebruiksstatistieken.
- **Kinderen:** AgeGate bij accountgebruik (v1 = zelfverklaring met ouder-bevestiging als audit-trail; v2 gepland = magic-link-verificatie per ouder-e-mail, zie §5). Oefenen kan volledig **zonder account** — dan wordt vrijwel niets bewaard.
- **Proportionaliteit:** het doel (leren) kan niet zonder voortgang; alles daarbuiten is opt-in. Bewaartermijn: account + data self-service wisbaar ("Verwijder al mijn data"-knop in OuderDashboard).

## 3. Verwerkers en doorgifte

| Verwerker | Rol | Locatie/garantie | DPA-status |
|---|---|---|---|
| Supabase | database/auth/storage | EU (eu-central-1) | standaard-DPA in voorwaarden ✅ |
| Vercel | hosting + cookieloze analytics | VS, EU-SCC's | standaard-DPA ✅ |
| Anthropic | AI-uitleg | VS, EU-SCC's | publieke DPA ✅ · ZDR-addendum **aangevraagd 27 jul 2026** ⏳ |
| Google | optionele OAuth-login; Gemini als AI-reserve | VS, EU-SCC's | Cloud-DPA ✅ |
| Resend | verzenden welkomst-/weekmails | VS, EU-SCC's | standaard-DPA in voorwaarden ✅ |

Geen andere ontvangers; geen verkoop of delen voor marketing.

## 4. Risico's en maatregelen

| # | Risico voor betrokkene | Kans | Impact | Maatregelen |
|---|---|---|---|---|
| 1 | Datalek met kindgegevens (naam + voortgang) | laag | midden | dataminimalisatie (geen adres/school/achternaam); RLS in Supabase; HTTPS; versleuteling in rust; privé-buckets met signed URLs |
| 2 | Kind deelt zelf persoonlijke info met AI-maatje | midden | laag-midden | weetjes blijven op eigen apparaat (localStorage), wisbaar; systeemprompt vraagt géén persoonsgegevens uit; geen opslag serverzijde |
| 3 | Account door kind zonder ouder-medeweten | midden | laag | AgeGate v1; oefenen kan zonder account; **v2 magic-link-ouderverificatie gepland** |
| 4 | Anonieme spel-scores niet wisbaar (geen eigenaarsbewijs) | laag | laag | admin-delete op aanvraag via contact; gepland: nette flow (zie §5) |
| 5 | Doorgifte VS (Anthropic/Vercel/Google/Resend) | laag | laag | SCC's + DPA's; minimale payloads; ZDR aangevraagd bij Anthropic |
| 6 | Function creep (data later anders gebruiken) | laag | midden | dit document + privacyverklaring leggen doelen vast; wijziging = nieuwe beoordeling |

**Inschatting restrisico: laag.** Er is geen sprake van grootschalige monitoring, profilering of gevoelige categorieën; de meest privacy-gevoelige route (AI-maatje) is client-side gehouden.

## 5. Geplande verbeteringen (met streefmoment)

1. **Magic-link ouder-verificatie (AgeGate v2)** — e-mail naar ouder "bevestig dat [kind] mag oefenen" → pas dan verified. *Streefmoment: vóór de paywall-start 2027, of zodra >500 actieve accounts.*
2. **Anthropic ZDR-addendum** afronden (aangevraagd 27 jul 2026).
3. **Nette wis-flow voor anonieme scores** (admin-delete gedocumenteerd op /privacy.html).
4. Jaarlijkse her-beoordeling van deze DPIA; eerder bij: betaalfuncties, schoolkoppelingen met leerling-lijsten, of nieuwe AI-functies met meer context.

## 6. Vaststelling

Opgesteld als concept door Claude op basis van de werkelijke datastromen in de codebase (27 juli 2026). Vastgesteld door de verwerkingsverantwoordelijke:

**Naam:** Mark Smulders (Leerkwartier, particulier initiatief; na KvK-inschrijving 28 sep 2026: eenmanszaak Leerkwartier — rechtsvorm dan bijwerken)
**Datum:** 1 september 2026
**Handtekening:** w.g. Mark Smulders (vastgesteld per expliciet akkoord, 1 september 2026)

*Contact voor privacy-vragen en verzoeken (inzage/wissing): zie leerkwartier.app/privacy.html.*
