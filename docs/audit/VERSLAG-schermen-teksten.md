# Verslag audit deel 6 — Schermen & teksten (7 okt 2026)

Branch `audit3/schermen-teksten` (vanaf main v929, stempel "7 okt d"). Niet naar main gezet; versienummer niet opgehoogd (doet Mark bij samenvoegen/uitrollen).

## Uitkomst in het kort

| | |
|---|---|
| **Pagina's bekeken** | **77 app-routes** (alle routes uit `src/app/routes.js`, elk op een vers apparaat gefotografeerd) + **76 statische webpagina's** (`public/*.html`) + **43 drukwerkbestanden** (`public/drukwerk`) + **27 mail-/API-bestanden** + de sjablonen van **6 pagina-generatoren** (→ 278 examenpagina's, 38 leerpadpagina's) |
| **Zinnen/fragmenten gelezen** | **19.271**: 11.488 tekstfragmenten uit 287 codebestanden (script `scripts/audit/schermen/haal-teksten.mjs`, JSX-tekst, title/aria-label/placeholder/alt, meldingen, app-gids, mails) + 7.783 tekstregels uit webpagina's en drukwerk (H1 3.332 · H2 3.201 · drukwerk 1.250) — gelezen door 13 nakijkers, elk verdacht fragment in de bron nagekeken |
| **Fouten gevonden** | **518 herstelvoorstellen** (517 van de nakijkers + 1 eindredactie): ernst 3 = 98 · ernst 2 = 185 · ernst 1 = 235 (17 daarvan door mij teruggedraaid, zie onder) |
| **Hersteld** | **501** (ernst 3: 98 · ernst 2: 184 · ernst 1: 219) in 176 bestanden; plus dezelfde 3 sjabloonzinnen op 278 gegenereerde examenpagina's |
| **In twijfel** | **~301 punten** (284 van de nakijkers + 17 eindredactie) → `docs/audit/TWIJFEL-schermen.md` |
| **Controles** | `npm run build` ✅ geslaagd · `npm run audit:vragen` → **"353 paden · 17258 vragen · 609 kale sommen nagerekend · 0 meldingen"** (vóór en na gelijk) · `npx vitest run` → **34 testbestanden, 337 tests geslaagd** |

**Wat NIET getest kon worden (en waarom)**
- **Live site en echte database**: leerkwartier.app en Supabase geven in deze omgeving HTTP 403. Alles draaide op een lokale build met een nagebootste Supabase (`scripts/audit/ouderadvies/stubServer.mjs`): lege antwoorden. Schermen met echte data (ouderoverzicht mét kinderen, klas met leerlingen, admin-cijfers, park van een ander) zijn dus alleen in hun lege staat gezien en verder alleen in de code gelezen.
- **Inloggen** (Google/e-mail) en **mails echt versturen**: niet mogelijk; mailteksten alleen in de broncode gelezen.
- **Kliktocht-diepte**: per rol is de start gevolgd en op het eerste vraagscherm expres fout geantwoord (groep 4: "3 + 4 = 6" → "Niet helemaal. Begin bij 3 en tel er 4 bij…"; groep 8: "gehaast = heel rustig" → "Niet helemaal. Welk kleiner woord zit erin?"; oefen-Doorstroomtoets: "5/6 − 2/6 = 7/6" → "Je hebt opgeteld — maar het is een min-som."). Mijn script klikte daarna de knop "Verder" niet altijd goed aan, dus per rol is meestal maar 1 foutmelding gelezen, niet 5. Bij de brugklas en de nieuwkomer kwam het script niet op een vraagscherm (het klikte een profielkaart resp. "← Terug" als "antwoord"); daar is geen fout antwoord gelezen. Het leerpad-scenario (2× fout → uitleg op "simpeler") kwam niet verder dan het overzicht. **Eerlijk gezegd: de kliktocht bewijst vooral dat alle 77 routes renderen en levert de vóór/na-beelden; het leeswerk zelf zit in de 19.271 fragmenten.**
- **Plaatjes geblokkeerd**: 5 schermen (/, /nieuwkomers, /tafelbladen, /dierentuin, /mijn) zonder afbeeldingen gefotografeerd (`geenplaatjes-*.png`); de tekst bleef leesbaar en verwees nergens naar een ontbrekend plaatje. Het 3D-park (/dierentuin) is in een headless browser beperkt te beoordelen.
- **Vertalingen** (Arabisch, Oekraïens, Turks, Roemeens, Bulgaars): alleen op zekere fouten (jaartal 2028 → 2031 in de nieuwkomers-thuisbrief); verder niet beoordeeld.
- **Lesinhoud**: bewust niet (vragen, leerpaden, Leesladder, dictee-woorden, park-feitjes). Wél in TWIJFEL gezet wat opviel (o.a. dictee-zin "Weed is een drug." die Charley voorleest).
- **JS-fout in alle lokale schermen** ("Unexpected token '<'"): dat is het Vercel-tellerscript `/_vercel/insights/script.js`, dat lokaal niet bestaat. Geen fout van de app.

### De 10 ergste vondsten (vóór → na)

1. **Weekrapport-dag klopte nergens** (13 plekken: app-gids, Mijn pagina, ouderoverzicht, Familie-uitleg (NL+EN), dictee/werkwoorden, bevestigings- en uitnodigingsmails, gratis.html, dictee-oefenen.html): "elke **maandag** een weekrapport" → "elke **vrijdag**" (rapport gaat sinds 30 sep op vrijdag).
2. **Prijs als "per jaar"** (6 plekken: FamilieHub, Vonk, familieFeatures, 2 mails, voor-leerkrachten): "Daarna kost Familie € 39 per jaar" → "€ 39 voor 12 maanden, voor het hele gezin — één keer betalen, stopt vanzelf."
3. **"Altijd gratis" / verouderde gratis-belofte** (o.a. OuderInzicht, abonnement.html, leergeld-flyer, TeacherHome, ResultsPage, 14 hulpflyers): leerkracht-welkom "En in 2026 is alles gratis (basis blijft daarna ook gratis)." → "Voor scholen is alles gratis, gegarandeerd t/m 2031."; deeltekst "Alles gratis t/m eind 2026!" → "Oefenen gratis, gegarandeerd t/m 2031!"; ouder-login "oefenen kan altijd gratis" → "oefenen is gratis".
4. **Zoek-en-vervang-restant**: Doorstroomtoets-info en examenpagina: "De Doorstroomtoets (sinds 2024 — **vroeger Doorstroomtoets**)" → "(sinds 2024 — vroeger Cito-eindtoets)".
5. **Leesladder belooft iets anders dan er gebeurt**: "daarna verschijnen ze **direct onder elke vraag**" → "achterin op een eigen antwoordblad".
6. **Toetsdatum fout** (app-gids, index.html FAQ + crawlbare tekst, gids, Rondleiding): "in de eerste twee weken van februari (week 6/7)" → "25 januari t/m 12 februari 2027 (papieren toets 26 en 27 januari)" — nagekeken op rijksoverheid.nl.
7. **Ontwikkelaarstaal in foutmeldingen**: leerkracht kreeg "Controleer of de API key nog actief is in het Vercel dashboard." → "Probeer het zo nog eens."; daglimiet AI "Daglimit AI-tutor bereikt — probeer morgen opnieuw of upgrade naar premium." → "Daglimiet AI-hulp bereikt — probeer het morgen opnieuw."
8. **Ere-scherm van partnercodes sprak de ouder met "u" aan** (7×): "Is uw kind erbij?", "Stuur uzelf de link" → "Is je kind erbij?", "Stuur jezelf de link" (ook contact.html, doorgeven.html, klassikaal-digibord, leergeld-flyer, nieuwkomerspagina: 34 u→je in totaal).
9. **Nieuwkomers-thuisbrief**: Engelse, Turkse, Oekraïense en Arabische vertaling beloofden gratis "until 31 December **2028**", de Nederlandse tekst "t/m **2031**" → alle vier op 2031.
10. **Verwijzingen naar knoppen/feiten die niet kloppen**: examenvraag-pagina's "vraag 33 **van 6**" → "vraag 33" (278 pagina's); "Alle 6 vragen van dit examen" → "6 vragen uit dit examen" (een examen heeft er ~40); over.html "Kies op de homepage voor 'Cito oefenen'" → "Tik onderaan op 'Toets'"; doorstroomtoets-oefenen.html "tot **4** kinderen" → "tot 3" (MAX_KINDEREN = 3); kampioensplaatje "STUDIEBOL KAMPIOEN" → "LEERKWARTIER KAMPIOEN".

**Belangrijkste open punten voor Mark** (uit de twijfellijst): navigatie-iconen zijn nog emoticons (vraagt nieuwe iconen); proefperiode staat in tekst én logica op 30 dagen i.p.v. 7; /leerlijn en /upgrade zijn lege schermen (snelkoppeling "Leerlijn" leidt naar een leeg scherm); drukwerk in u- of je-vorm; concurrentiepagina's (squla-alternatief) en "Squla" in de FAQ van index.html; feitencheck op de aanbiederpagina's (AMN/Dia/IEP/Route 8); einddatum partnercodes (2027 vs 2028) en toetsdatum op /cito ("begin februari"); persoonsnaam "Mark kijkt ernaar" in meldknop.

### Werkwijze (kort)
1. **Inventaris**: 77 routes geteld uit `src/app/routes.js`; alle zichtbare tekst-literals met een Babel-script uit 287 bestanden gehaald (11.488 fragmenten; lesinhoud zoals leerpaden, vragenbanken, Leesladder-data, dictee-woordenlijsten uitgesloten); 76 + 43 HTML-bestanden en 6 generatoren apart.
2. **Lezen**: 13 nakijkers parallel, elk een deel (kern-schermen · Mijn pagina/ouder · codes/Familie · leren · oefenen/toetsen · printen/dictee · leerkracht/nieuwkomers · park · spellen · mails · webpagina's ×2 · drukwerk), met dezelfde instructie (huisregels, ernstschaal, "bij twijfel niet wijzigen"). Elk voorstel moest exact en uniek in het bronbestand staan (`scripts/audit/schermen/check-fixes.mjs`).
3. **Eindredactie** (Claude): alle 517 voorstellen nagelopen. 1 teruggedraaid omdat hij een nieuwe fout zou maken (souvenirnaam zonder "een"), 16 teruggedraaid omdat ze tegen de je-vorm-huisregel ingingen (drukwerk je → u), 4 aangepast (over.html-knop, flyerzin, vertaalsleutel dictee). 1 eigen herstel toegevoegd (vertaalsleutel). Daarna in één keer toegepast: 501 geldig, 0 probleem.
4. **Kliktocht** (Playwright, Chromium, 390×844, lokale build, nagebootste Supabase): vóór herstel 77 routes + 41 rolstappen (een eerste rollenrondje mislukte op de knop "Leerling" en is overgedaan); na herstel 36 gewijzigde routes + 41 rolstappen + 7 statische pagina's vóór/na. Schermafbeeldingen in `docs/audit/schermen/voor/` en `docs/audit/schermen/na/`, met de volledige schermtekst per stap in `tekst/`.

---

## Bijlagen

### A. Volledige fixlijst
Machineleesbaar: `docs/audit/fixes-schermen.json` (501 regels `{bestand, zoek, vervang, reden, ernst, voor, na, groep}`; elke `zoek` stond precies 1× in het bestand). Per groep ook in `docs/audit/schermen-fixes/fixes-<groep>.json` (dat zijn de oorspronkelijke voorstellen, vóór de eindredactie). Hieronder leesbaar:

| # | ernst | bestand | vóór | na | reden |
|---|---|---|---|---|---|
| 1 | 3 | api/_guard.js | Daglimit AI-tutor bereikt — probeer morgen opnieuw of upgrade naar premium. | Daglimiet AI-hulp bereikt — probeer het morgen opnieuw. | 'Premium' bestaat niet (huisregel prijs), er is geen upgrade; spelfout 'Daglimit' |
| 2 | 3 | api/_lib/bevestig.js | Vanaf nu krijg jij elke maandag óók het weekrapport van Sam: … | Vanaf nu krijg jij elke vrijdag óók het weekrapport van Sam: … | Weekrapport gaat sinds 30 sep 2026 op vrijdag (workflow ouder-weekrapport.yml), niet maandag |
| 3 | 3 | api/_lib/partner-uitnodiging.js | Elke maandag één mail: wat er geoefend is, … | Elke vrijdag één mail: wat er geoefend is, … | Weekrapport gaat sinds 30 sep 2026 op vrijdag, niet maandag |
| 4 | 3 | api/send-doorstroom-countdown.js | Leerkwartier blijft gewoon gratis te gebruiken. | Oefenen bij Leerkwartier blijft gratis, gegarandeerd t/m 2031. | Onbegrensde gratis-belofte botst met huisregel ('oefenen gratis, gegarandeerd t/m 2031') |
| 5 | 3 | api/send-doorstroom-countdown.js | Hoi Sam-ouder, | Hoi ouder of verzorger van Sam, | Lezer nooit alléén als 'ouder' aanspreken |
| 6 | 3 | api/send-ouder-rapport.js | Zet in het ouder-dashboard de weekmail per kind uit (📩-knopje bij je kind) | Zet in het ouder-dashboard de weekmail per kind uit (knopje 'weekrapport aan' bij je kind) | Er bestaat geen 📩-knopje; de knop in OuderInzicht heet 'weekrapport aan/uit' |
| 7 | 3 | api/send-weekly-lesmateriaal.js | Hoi Sam-ouder, | Hoi ouder of verzorger van Sam, | Lezer nooit alléén als 'ouder' aanspreken |
| 8 | 3 | api/send-weekly-lesmateriaal.js | Hoi Sam-ouder, | Hoi ouder of verzorger van Sam, | Idem, tekstversie van de mail |
| 9 | 3 | index.html | Gratis oefenen in 2026, met latere optionele extra's voor ouders, leerkrachten en scholen. | De basis is gratis, gegarandeerd t/m 2031; vanaf 2027 is er een optioneel Familie-pakket voor thuis. | Botst: scholen/leerkrachten betalen niets; 'gratis in 2026' suggereert dat het daarna betaald wordt |
| 10 | 3 | index.html | …in de eerste twee weken van februari 2027: week 6 (1-5 februari) en/of week 7 (8-12 februari). | …van 25 januari t/m 12 februari 2027 (de papieren toets is op 26 en 27 januari). | Verouderde afnameperiode (overige pagina's: 25 jan t/m 12 feb 2027) |
| 11 | 3 | index.html | Afname in eerste twee weken februari 2027 (week 6+7). | Afname van 25 januari t/m 12 februari 2027. | Verouderde afnameperiode |
| 12 | 3 | index.html | …in de eerste twee weken van februari 2027 — week 6 (1-5 februari) en/of week 7 (8-12 februari). | …van 25 januari t/m 12 februari 2027 (de papieren toets is op 26 en 27 januari). | Verouderde afnameperiode |
| 13 | 3 | index.html | …zijn in 2026 gratis te gebruiken. … Optionele extra's voor ouders en leerkrachten worden later betaald, maar het oefenen zelf is gratis. | …zijn gratis te gebruiken, gegarandeerd t/m 2031. … Een optioneel Familie-pakket voor thuis wordt vanaf 2027 betaald, maar het oefenen zelf is gratis. | Botst: leerkrachten betalen niets; 'in 2026 gratis' ondergraaft de t/m-2031-belofte |
| 14 | 3 | public/abonnement.html | Onbeperkte uitleg van Charley (oefenen zelf is altijd gratis) | Onbeperkte uitleg van Charley (oefenen zelf blijft gratis, gegarandeerd t/m 2031) | Huisregel: nooit 'altijd gratis' |
| 15 | 3 | public/abonnement.html | Bent u een school? | Ben je een school? | Huisregel: geen 'u'; rest van de pagina is je-vorm |
| 16 | 3 | public/begrijpend-lezen-oefenen.html | …en een groot onderdeel van de Cito eindtoets. | …en een groot onderdeel van de Doorstroomtoets. | Verouderde naam (sinds 2024 Doorstroomtoets) |
| 17 | 3 | public/cito-eindtoets-oefenen.html | …oefen je gratis alle vier de onderdelen die in de toets terugkomen, zonder account… | …oefen je gratis lezen, taal en rekenen — de onderdelen van de toets — plus wereldoriëntatie, zonder account… | Onwaar: wereldoriëntatie zit niet in de Doorstroomtoets (drie verplichte onderdelen: lezen, taalverzorging, rekenen) |
| 18 | 3 | public/cito-toets-oefenen.html | 🎯 Authentieke Cito-stijl-vragen | 🎯 Vragen in Doorstroomtoets-stijl | Onwaar: het zijn eigen vragen 'in stijl van', niet authentiek (copyright-beleid) + Cito-naam |
| 19 | 3 | public/contact.html | U mailt rechtstreeks met de maker van Leerkwartier. | Je mailt rechtstreeks met de maker van Leerkwartier. | Huisregel: geen 'u' |
| 20 | 3 | public/contact.html | Waarover kunt u mailen? | Waarover kun je mailen? | Huisregel: geen 'u' |
| 21 | 3 | public/contact.html | Wat u bij ons kunt verwachten, staat in de voorwaarden… | Wat je bij ons kunt verwachten, staat in de voorwaarden… | Huisregel: geen 'u' |
| 22 | 3 | public/dictee-oefenen.html | 📬 Elke maandag het dictee-resultaat van je kind in je mail? | 📬 Elke vrijdag het dictee-resultaat van je kind in je mail? | Onwaar: het weekrapport gaat op vrijdag (api/send-ouder-rapport.js, abonnement.html) |
| 23 | 3 | public/dictee-oefenen.html | ✓ Gelukt! Het eerste rapport komt maandag. | ✓ Gelukt! Het eerste rapport komt vrijdag. | Onwaar: het weekrapport gaat op vrijdag |
| 24 | 3 | public/doorstroomtoets-2027-gids.html | Papier of digitaal? Sinds 2024 alle vijf aanbieders volledig digitaal. | Papier of digitaal? Meestal digitaal; er is ook een papieren versie (26 en 27 januari 2027). | Botst met dezelfde gids (papieren toetsen op 26-27 januari) en de officiële planning |
| 25 | 3 | public/doorstroomtoets-oefenen.html | Bij Leerkwartier kun je tot 4 kinderen koppelen aan één ouder-account. | Bij Leerkwartier kun je tot 3 kinderen koppelen aan één account. | Onwaar: maximum is 3 kinderen (MAX_KINDEREN = 3; Familie 'tot 3 kinderen') + 'ouder' alleen |
| 26 | 3 | public/drukwerk/flyer-ALKMAAR2027.html | Gratis voor uw gezin, tot en met 31 december 2027. U betaalt nooit iets. | Gratis voor uw gezin, tot en met 31 december 2027. Daarna betaalt u alleen als u daar zelf voor kiest. | "U betaalt nooit iets" spreekt de datum ervoor tegen (gratis t/m 31-12-2027). [eindredactie: formulering nakijker aangepast] |
| 27 | 3 | public/drukwerk/flyer-BREDA2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 28 | 3 | public/drukwerk/flyer-DONGEN2027-drukwerk.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 29 | 3 | public/drukwerk/flyer-DONGEN2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 30 | 3 | public/drukwerk/flyer-HUMANITAS2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 31 | 3 | public/drukwerk/flyer-ICHTHUS2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 32 | 3 | public/drukwerk/flyer-IMC2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 33 | 3 | public/drukwerk/flyer-JEF2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 34 | 3 | public/drukwerk/flyer-JINC2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 35 | 3 | public/drukwerk/flyer-KINDERHULP2027.html | Gratis voor uw gezin, tot en met 31 december 2027. U betaalt nooit iets. | Gratis voor uw gezin, tot en met 31 december 2027. Daarna betaalt u alleen als u daar zelf voor kiest. | "U betaalt nooit iets" spreekt de datum ervoor tegen (gratis t/m 31-12-2027). [eindredactie: formulering nakijker aangepast] |
| 36 | 3 | public/drukwerk/flyer-KINDERZWERFBOEK2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 37 | 3 | public/drukwerk/flyer-LEUDAL2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 38 | 3 | public/drukwerk/flyer-OOIEVAAR2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 39 | 3 | public/drukwerk/flyer-ROTTERDAMPAS2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 40 | 3 | public/drukwerk/flyer-SAM2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 41 | 3 | public/drukwerk/flyer-VLUCHTELINGEN2027.html | 100% gratis in 2026 — geen proefperiode, geen abonnement, geen betaalgegevens | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement, geen betaalgegevens | Sjabloon hulporganisaties-flyer: "100% gratis in 2026" is verouderd voor een volgende druk (het is al okt 2026) en vervangen door de vaste belofte uit de huisre |
| 42 | 3 | public/drukwerk/folder-enschede.html | 100% gratis in 2026 — geen proefperiode, geen abonnement | Oefenen is gratis, gegarandeerd t/m 2031 — geen proefperiode, geen abonnement | Eenmalige folder Enschede: "100% gratis in 2026" is verouderd voor een volgende druk; vaste belofte uit de huisregels. |
| 43 | 3 | public/drukwerk/nieuwkomers-thuisbrief.html | Free, guaranteed until 31 December 2028. | Free, guaranteed through 2031. | Nieuwkomers-thuisbrief: Nederlandse tekst én NieuwkomersPage zeggen "gegarandeerd t/m 2031"; de vertaling zegt 2028. |
| 44 | 3 | public/drukwerk/nieuwkomers-thuisbrief.html | Ücretsiz, 31 Aralık 2028'e kadar garantili. | Ücretsiz, 31 Aralık 2031'e kadar garantili. | Nieuwkomers-thuisbrief: Turkse vertaling zegt 2028, Nederlandse tekst en app zeggen t/m 2031. |
| 45 | 3 | public/drukwerk/nieuwkomers-thuisbrief.html | Безкоштовно, гарантовано до 31 грудня 2028 року. | Безкоштовно, гарантовано до 31 грудня 2031 року. | Nieuwkomers-thuisbrief: Oekraïense vertaling zegt 2028, Nederlandse tekst en app zeggen t/m 2031. |
| 46 | 3 | public/drukwerk/nieuwkomers-thuisbrief.html | مجاني ومضمون حتى ٣١ ديسمبر ٢٠٢٨. | مجاني ومضمون حتى ٣١ ديسمبر ٢٠٣١. | Nieuwkomers-thuisbrief: Arabische vertaling zegt 2028, Nederlandse tekst en app zeggen t/m 2031. |
| 47 | 3 | public/gratis.html | Richtprijzen — definitief vóór de lancering in januari 2027. Bestaande gebruikers krijgen 30 dagen gratis proberen. | Vanaf januari 2027 kun je Familie een week gratis proberen, zonder betaalgegevens. | Botst met huisregel/abonnement.html: prijs staat vast (€39), proefweek is 7 dagen zonder betaalgegevens |
| 48 | 3 | public/gratis.html | Weekmail op maandag voor ouder of verzorger | Weekmail op vrijdag voor ouder of verzorger | Onwaar: het weekrapport gaat op vrijdag |
| 49 | 3 | public/gratis.html | Weekmail op maandag: wat je kind deed… | Weekmail op vrijdag: wat je kind deed… | Onwaar: het weekrapport gaat op vrijdag |
| 50 | 3 | public/leergeld-flyer.html | Oefenen zelf is altijd gratis, gegarandeerd tot en met 2031. | Oefenen zelf blijft gratis, gegarandeerd tot en met 2031. | Huisregel: nooit 'altijd gratis' |
| 51 | 3 | public/leren-15-minuten.html | Over die maanden = 60+ uur effectieve oefentijd… | Over die maanden = ruim 20 uur effectieve oefentijd… | Rekenfout: 3 maanden × 15 min/dag ≈ 22 uur (pagina zegt zelf elders ~22 uur) |
| 52 | 3 | public/nieuwkomers-nederlands-leren.html | Mist u een taal, bijvoorbeeld Tigrinya, Dari, Pools of Roemeens? | Mis je een taal, bijvoorbeeld Tigrinya, Dari of Pools? | Roemeens zit al in de app (staat elders op dezelfde pagina); bovendien 'u' i.p.v. 'je' |
| 53 | 3 | public/over.html | Kies op de homepage voor 'Cito oefenen'. | Kies op de homepage voor 'Doorstroomtoets oefenen'. | Knop 'Cito oefenen' bestaat niet op de startpagina; de ingang is de tab 'Toets' onderaan (BottomNav). [eindredactie: voorstel nakijker aangepast] |
| 54 | 3 | public/over.html | Kies op de homepage voor Cito oefenen. | Kies op de homepage voor Doorstroomtoets oefenen. | Knop 'Cito oefenen' bestaat niet op de startpagina; de ingang is de tab 'Toets' onderaan (BottomNav). [eindredactie: voorstel nakijker aangepast] |
| 55 | 3 | public/over.html | Kies 'Leerkracht' op de homepage, | Kies 'Voor leerkrachten' onderaan de homepage, | Er is geen knop 'Leerkracht' op de homepage; de tegel heet 'Voor leerkrachten' (HomePage.jsx) |
| 56 | 3 | public/over.html | Kies Leerkracht op de homepage, | Kies Voor leerkrachten onderaan de homepage, | Zelfde in JSON-LD |
| 57 | 3 | public/welkom.html | Welkom bij Leerkwartier — één kwartier per dag, een leven lang slimmer | Welkom bij Leerkwartier — een kwartier per dag leren, een leven lang slimmer | Slogan niet exact (mist 'leren') |
| 58 | 3 | public/welkom.html | Één kwartier per dag —een léven lang slimmer | Een kwartier per dag leren,een leven lang slimmer. | Slogan moet exact 'Een kwartier per dag leren, een leven lang slimmer.' |
| 59 | 3 | scripts/buildExamenVraagPaginas.mjs | Economie eindexamen VMBO-GL/TL 2024 tijdvak 1 — vraag 33 van 6 | Economie eindexamen VMBO-GL/TL 2024 tijdvak 1 — vraag 33 | Onwaar: vraagnummer is het examennummer, totaal is het aantal stappen → 'vraag 33 van 6' |
| 60 | 3 | src/components/CitoPage.jsx | De Doorstroomtoets (sinds 2024 — vroeger Doorstroomtoets) wordt gemaakt in groep 8 | De Doorstroomtoets (sinds 2024 — vroeger Cito-eindtoets) wordt gemaakt in groep 8 | Zegt dat de Doorstroomtoets vroeger 'Doorstroomtoets' heette; oude naam is Cito-eindtoets (zoek-vervang-ongeluk) |
| 61 | 3 | src/components/CodeBalk.jsx | Straks samen met uw kind? | Straks samen met je kind? | u-vorm botst met huisregel (ouderteksten in je-vorm) |
| 62 | 3 | src/components/CodeBalk.jsx | Stuur uzelf de link. … zodra uw kind gaat oefenen. | Stuur jezelf de link. … zodra je kind gaat oefenen. | u-vorm botst met huisregel |
| 63 | 3 | src/components/CodeBalk.jsx | Wat fijn dat u ons heeft gevonden via … | Wat fijn dat je ons hebt gevonden via … | u-vorm botst met huisregel |
| 64 | 3 | src/components/CodeBalk.jsx | Onze afspraak met de gemeente Den Haag: heeft uw gezin een Ooievaarspas? | Onze afspraak met de gemeente Den Haag: heeft jouw gezin een Ooievaarspas? | u-vorm botst met huisregel (zie twijfel: tekst lijkt op gemeente-landingspagina) |
| 65 | 3 | src/components/CodeBalk.jsx | Dankzij hen is het Familie-pakket voor uw gezin blijvend gratis. | Dankzij hen is het Familie-pakket voor jouw gezin blijvend gratis. | u-vorm botst met huisregel |
| 66 | 3 | src/components/CodeBalk.jsx | Dankzij hen is het Familie-pakket voor uw gezin gratis, heel 2027 (…). | Dankzij hen is het Familie-pakket voor jouw gezin gratis, heel 2027 (…). | u-vorm botst met huisregel; stand 2 van dezelfde balk zegt al 'jouw gezin' |
| 67 | 3 | src/components/CodeBalk.jsx | Is uw kind erbij? Probeer meteen één vraag: | Is je kind erbij? Probeer meteen één vraag: | u-vorm botst met huisregel |
| 68 | 3 | src/components/ExamensPage.jsx | Voor de basisschool is de Doorstroomtoets (vroeger Doorstroomtoets) belangrijker. | Voor de basisschool is de Doorstroomtoets (vroeger Cito-eindtoets) belangrijker. | Zelfde zoek-vervang-ongeluk: 'Doorstroomtoets (vroeger Doorstroomtoets)' |
| 69 | 3 | src/components/FamilieUitleg.jsx | Weekmail op maandag | Weekmail op vrijdag | Weekrapport gaat op vrijdag, niet maandag |
| 70 | 3 | src/components/FamilieUitleg.jsx | Monday e-mail | Friday e-mail | Engelse variant idem: weekrapport gaat op vrijdag |
| 71 | 3 | src/components/LeesladderPage.jsx | Voor de ouder — zo werkt de Leesladder | Voor thuis — zo werkt de Leesladder | Huisregel: niet alléén 'ouder' |
| 72 | 3 | src/components/LeesladderPage.jsx | …zodat jij het als ouder óók kunt voordoen. | …zodat jij het als ouder of verzorger óók kunt voordoen. | Huisregel: lezer niet alléén als 'ouder' aanspreken |
| 73 | 3 | src/components/LeesladderPage.jsx | Tip voor de ouder: laat je kind het woord zélf opzoeken | Tip voor thuis: laat je kind het woord zélf opzoeken | Huisregel: niet alléén 'ouder' |
| 74 | 3 | src/components/LeesladderPage.jsx | …daarna verschijnen ze direct onder elke vraag en printen ze gewoon mee. | …daarna verschijnen ze achterin op een eigen antwoordblad en printen ze gewoon mee. | Onwaar: de antwoorden komen op een apart antwoordblad achteraan (code + opt-in-tekst 'onderaan deze pagina'), niet onder elke vraag |
| 75 | 3 | src/components/OefenpakketPage.jsx | Voor de ouder — zo gebruik je dit werkboek | Voor thuis — zo gebruik je dit werkboek | Huisregel: niet alléén 'ouder'; Brugklas-bundel gebruikt al 'Voor thuis' |
| 76 | 3 | src/components/ParkGalerij.jsx | Wil je jouw park hier ook? Ga naar je eigen park → 📤 Deel → "Zet mijn park in de galerij". | Wil je jouw park hier ook? Ga naar je eigen park → ☰ → 📤 Delen & samen bouwen → "Zet mijn park in de galerij". | Knop '📤 Deel' bestaat niet; in het ☰-menu heet de tegel '📤 Delen & samen bouwen' |
| 77 | 3 | src/components/ProPage.jsx | ⭐ Exclusief voor Pro-gebruikers | ⭐ Alleen met Familie | 'Pro' bestaat niet meer; enige betaalde product heet Familie (blok staat achter PAYWALL_ACTIVE) |
| 78 | 3 | src/components/ProPage.jsx | Je hebt eerder al een gratis proefperiode gehad. Neem een abonnement om door te gaan. | Je hebt eerder al een gratis proefperiode gehad. Kies Familie om door te gaan: € 39 voor 12 maanden, één keer betalen. | Botst met huisregel: geen abonnement, Familie = eenmalig € 39 voor 12 maanden |
| 79 | 3 | src/components/RedactiebladenPage.jsx | Voor de ouder — het stappenplan | Voor thuis — het stappenplan | Huisregel: niet alléén 'ouder' |
| 80 | 3 | src/components/TafelbladenPage.jsx | Tip voor de ouder: één tafel per keer aftekenen | Tip voor thuis: één tafel per keer aftekenen | Huisregel: niet alléén 'ouder' |
| 81 | 3 | src/data/appGids.js | Ja — elke maandag krijg je per gekoppeld kind een weekrapport in je mail | Ja — elke vrijdagmiddag krijg je per gekoppeld kind een weekrapport in je mail | Weekrapport gaat sinds 30 sep op vrijdag 16:00 (send-ouder-rapport + proPlan zeggen vrijdag) |
| 82 | 3 | src/data/appGids.js | De Doorstroomtoets is in de eerste twee weken van februari (groep 8). | De Doorstroomtoets is voor groep 8, tussen eind januari en half februari (in 2027: 25 januari t/m 12 februari). | Verouderde afnameperiode; overige pagina's (aftelweken, cito-toets-oefenen, Rondleiding) noemen 25 jan t/m 12 feb 2027 |
| 83 | 3 | src/features/account/MijnPagina.jsx | Wil je dit ook op je eigen telefoon zien, met elke maandag een weekrapport? | Wil je dit ook op je eigen telefoon zien, met elke vrijdag een weekrapport? | Weekrapport gaat sinds 30 sep op vrijdag 16:00 (workflow ouder-weekrapport.yml), niet maandag |
| 84 | 3 | src/features/dictee/DicteePage.jsx | ✓ Gelukt! Het eerste weekrapport komt maandag. | ✓ Gelukt! Het eerste weekrapport komt vrijdag. | Botst met de kop erboven ('Elke vrijdag…'); weekrapport gaat sinds 30 sep op vrijdag |
| 85 | 3 | src/features/dictee/DicteePage.jsx | 🔑 Code gekregen van je ouder of juf? | 🔑 Code gekregen van thuis of van school? | Huisregel: niet alléén 'ouder'; 'juf' sluit meester uit. Zelfde formule als elders in de app ('Code gekregen van thuis?') |
| 86 | 3 | src/features/dictee/WerkwoordenPage.jsx | ✓ Gelukt! Het eerste weekrapport komt maandag. | ✓ Gelukt! Het eerste weekrapport komt vrijdag. | Botst met de kop erboven ('Elke vrijdag…'); weekrapport gaat sinds 30 sep op vrijdag |
| 87 | 3 | src/features/dictee/WerkwoordenPage.jsx | 🔑 Code gekregen van je ouder of juf? | 🔑 Code gekregen van thuis of van school? | Huisregel: niet alléén 'ouder'; 'juf' sluit meester uit |
| 88 | 3 | src/features/familie/familieFeatures.js | De AI-bijlesdocent altijd beschikbaar — €37/uur bijles vs €39/jaar. | De AI-bijlesdocent altijd beschikbaar — €37 per uur bijles tegenover €39 voor 12 maanden. | 'per jaar' botst met prijsregel (12 maanden, eenmalig); 'vs' is Engels |
| 89 | 3 | src/features/familie/FamilieHub.jsx | Daarna kost Familie € 39 per jaar voor het hele gezin. | Daarna kost Familie € 39 voor 12 maanden, voor het hele gezin — één keer betalen, stopt vanzelf. | 'per jaar' suggereert doorlopend abonnement; prijs = €39 per 12 maanden, eenmalig, niet stilzwijgend verlengd (zelfde formulering als PakketUitleg/ProPage) |
| 90 | 3 | src/features/familie/VonkPagina.jsx | … voor het héle gezin, voor ± €39 per jaar. | … voor het héle gezin, voor €39 per 12 maanden (één keer betalen). | Prijs is exact €39 per 12 maanden, eenmalig — '±' en 'per jaar' (doorlopend) botsen met prijsregel |
| 91 | 3 | src/features/kwartierplan/Startfoto.jsx | In de volgende update maakt Leerkwartier hier automatisch een dag-voor-dag kwartierplan van. | Hiervan maakt Leerkwartier in stap 3 van het kwartierplan een weekplan van vijf kwartiertjes. | Verouderd: het weekplan (stap 3 in KwartierplanSectie) bestaat al; 'volgende update' klopt niet meer |
| 92 | 3 | src/features/learn/LearnPathsHub.jsx | CITO: [Taal] [Rekenen] … | Doorstroomtoets: [Taal] [Rekenen] … | Huisregel: 'Doorstroomtoets' i.p.v. 'Cito' in zichtbare tekst (filter-label boven de toets-pijler-pillen) |
| 93 | 3 | src/features/ouder/OuderInzicht.jsx | ...en het maandag-weekrapport voor dit kind stopt. | ...en het weekrapport voor dit kind stopt. | Weekrapport komt op vrijdag, niet maandag (zelfde scherm zegt 'Elke vrijdag om 16:00') |
| 94 | 3 | src/features/ouder/OuderInzicht.jsx | Alleen dit thuis-overzicht vraagt een account — oefenen kan altijd gratis, zonder account. | Alleen dit thuis-overzicht vraagt een account — oefenen is gratis, zonder account. | Huisregel: nooit 'altijd gratis' |
| 95 | 3 | src/features/practice/ResultsPage.jsx | CITO-SIMULATIE · RUWE INDICATIE (1 OEFENING) | DOORSTROOMTOETS-SIMULATIE · RUWE INDICATIE (1 OEFENING) | Huisregel: 'Doorstroomtoets' i.p.v. 'Cito' in zichtbare tekst (zelfde banner in CitoLeerpadToets zegt al DOORSTROOMTOETS-SIMULATIE) |
| 96 | 3 | src/features/practice/ResultsPage.jsx | Gratis oefenen voor groep 3-8 en klas 1-6 (MAVO, HAVO, VWO, gymnasium). Alles gratis t/m eind 2026! | Gratis oefenen voor groep 3-8 en klas 1-6 (MAVO, HAVO, VWO, gymnasium). Oefenen gratis, gegarandeerd t/m 2031! | Verouderde gratis-belofte (eind 2026) botst met huisregel 'oefenen gratis, gegarandeerd t/m 2031'; ook 'Alles gratis' te breed (Familie is betaald) |
| 97 | 3 | src/features/teacher/StudentProgress.jsx | STUDIEBOL KAMPIOEN | LEERKWARTIER KAMPIOEN | Oude merknaam Studiebol op het deelbare kampioensplaatje (canvas 1080 px breed, past) |
| 98 | 3 | src/features/teacher/TeacherHome.jsx | En in 2026 is alles gratis (basis blijft daarna ook gratis). | Voor scholen is alles gratis, gegarandeerd t/m 2031. | Verouderd en botst met huisregel: scholen betalen niets, gegarandeerd t/m 2031 (staat ook verderop op hetzelfde scherm) |
| 99 | 2 | api/buddy-chat.js | praat er alsjeblieft over met je vader, moeder, juf of meester. | praat er alsjeblieft over met je vader, moeder, verzorger, juf of meester. | Niet elk kind woont bij vader/moeder (huisregel ouder of verzorger) |
| 100 | 2 | api/kwartiercheck-mail.js | Deel jouw persoonlijke link met een ouder uit de klas: … | Deel jouw persoonlijke link met een ander gezin uit de klas: … | Nooit alléén 'ouder'; sluit aan op kop 'Geef een ander gezin…' |
| 101 | 2 | api/kwartiercheck-mail.js | (straks ± € 39 per jaar) | (straks € 39 voor 12 maanden) | Prijs is exact € 39 voor 12 maanden, eenmalig; niet 'per jaar' of '±' |
| 102 | 2 | api/send-leesladder-pakket.js | Antwoordblad — voor de ouder (pas nakijken ná het maken) | Antwoordblad — voor de ouder of verzorger (pas nakijken ná het maken) | Nooit alléén 'ouder' |
| 103 | 2 | api/send-leesladder-pakket.js | --- ANTWOORDBLAD (voor de ouder) --- | --- ANTWOORDBLAD (voor de ouder of verzorger) --- | Idem, tekstversie |
| 104 | 2 | api/send-oefenblad.js | Antwoorden + uitleg — voor de ouder | Antwoorden + uitleg — voor de ouder of verzorger | Nooit alléén 'ouder' (weekpakket zegt al 'ouder of verzorger') |
| 105 | 2 | api/send-oefenblad.js | ANTWOORDEN + UITLEG (voor de ouder): | ANTWOORDEN + UITLEG (voor de ouder of verzorger): | Idem, tekstversie |
| 106 | 2 | api/send-ouder-rapport.js | Deel jouw persoonlijke link met een ouder uit de klas. | Deel jouw persoonlijke link met een ander gezin uit de klas. | Nooit alléén 'ouder'; sluit aan op kop 'Geef een ander gezin…' |
| 107 | 2 | api/send-ouder-rapport.js | (straks ± € 39 per jaar) | (straks € 39 voor 12 maanden) | Prijs is exact € 39 voor 12 maanden, eenmalig; 'per jaar' en '±' suggereren een doorlopend/onzeker abonnement |
| 108 | 2 | api/send-ouder-rapport.js | Ken je een ouder uit de klas die dit ook zou willen? Leerkwartier is gratis — stuur leerkwartier.app gerust door. | Ken je een ander gezin uit de klas dat dit ook zou willen? Oefenen bij Leerkwartier is gratis — stuur leerkwartier.app gerust door. | Nooit alléén 'ouder'; 'Leerkwartier is gratis' te breed (Familie kost € 39) → oefenen is gratis |
| 109 | 2 | api/send-ouder-rapport.js | Ken je een ouder uit de klas die dit ook zou willen? Leerkwartier is gratis: https://leerkwartier.app | Ken je een ander gezin uit de klas dat dit ook zou willen? Oefenen bij Leerkwartier is gratis: https://leerkwartier.app | Idem, tekstversie van de mail |
| 110 | 2 | api/unsubscribe.js | De ouder zelf blijft het gewoon ontvangen. | Wie je uitnodigde, blijft het gewoon ontvangen. | Nooit alléén 'ouder' (kan ook verzorger zijn) |
| 111 | 2 | api/unsubscribe.js | Wil je later toch weer meelezen? Dan kan de ouder je opnieuw uitnodigen. | Wil je later toch weer meelezen? Vraag dan om een nieuwe uitnodiging. | Nooit alléén 'ouder' |
| 112 | 2 | api/unsubscribe.js | …of mail ons via de site. | …of mail ons op hallo@leerkwartier.app. | Contactadres expliciet noemen i.p.v. vaag 'via de site' |
| 113 | 2 | index.html | …op het gebied van rekenen, taal en begrijpend lezen, in de stijl van de Cito Doorstroomtoets, gericht op rekenen, taal en begrijpend lezen. | …op het gebied van rekenen, taal en begrijpend lezen, in de stijl van de Cito Doorstroomtoets. | Dubbel: 'rekenen, taal en begrijpend lezen' staat twee keer in één zin |
| 114 | 2 | public/abonnement.html | Scholen: betalen nooit | Scholen: betalen niets | 'nooit' belooft meer dan de garantie t/m 2031; huisregel-formulering is 'betalen niets' |
| 115 | 2 | public/abonnement.html | Ouder — Familie (per gezin) | Ouder of verzorger — Familie (per gezin) | Huisregel: nooit alléén 'ouder' |
| 116 | 2 | public/abonnement.html | …leer-platform voor Cito Doorstroomtoets, VMBO/HAVO/VWO-examens… | …leer-platform voor de Doorstroomtoets, VMBO/HAVO/VWO-examens… | Zichtbare tekst: 'Doorstroomtoets' i.p.v. 'Cito' |
| 117 | 2 | public/abonnement.html | …gegarandeerd t/m 2031. Tot dan: helemaal gratis, geen advertenties. | …gegarandeerd t/m 2031. Tot 1 januari 2027: helemaal gratis, geen advertenties. | 'Tot dan' verwijst na 'gegarandeerd t/m 2031' naar het verkeerde moment |
| 118 | 2 | public/aftelweken.html | …daarna blijft oefenen voor de Doorstroomtoets gratis. | …daarna blijft oefenen voor de Doorstroomtoets gratis, gegarandeerd t/m 2031. | Onbegrensde gratis-belofte; huisregel: 'gegarandeerd t/m 2031' |
| 119 | 2 | public/begrijpend-lezen-doorstroomtoets.html | Cito's grootste pijler oefenen — in 15 min/dag, gratis. | De grootste pijler van de Doorstroomtoets oefenen — in 15 min/dag, gratis. | Zichtbare (deel)tekst: 'Doorstroomtoets' i.p.v. 'Cito' |
| 120 | 2 | public/begrijpend-lezen-doorstroomtoets.html | Oefen dagelijks 15 minuten met echte Cito-stijl teksten. | Oefen dagelijks 15 minuten met teksten in Doorstroomtoets-stijl. | 'echte Cito-stijl' suggereert echte Cito-teksten (copyright-beleid) + Cito-naam |
| 121 | 2 | public/begrijpend-lezen-doorstroomtoets.html | Investeer in lezen = verbeter je hele Cito-score. | Investeer in lezen = verbeter je hele Doorstroomtoets-score. | Zichtbare tekst: 'Doorstroomtoets' i.p.v. 'Cito' |
| 122 | 2 | public/begrijpend-lezen-oefenen.html | Goede voorbereiding op de Cito. | Goede voorbereiding op de Doorstroomtoets. | Zichtbare zoekresultaat-tekst: 'Doorstroomtoets' i.p.v. 'Cito' |
| 123 | 2 | public/begrijpend-lezen-oefenen.html | Groep 7 — voorbereiding op middelbaar onderwijs en Cito | Groep 7 — voorbereiding op middelbaar onderwijs en de Doorstroomtoets | Zichtbare tekst: 'Doorstroomtoets' i.p.v. 'Cito' |
| 124 | 2 | public/begrijpend-lezen-oefenen.html | Groep 8 — Cito-niveau teksten met afleiders en interpretatievragen | Groep 8 — teksten op Doorstroomtoets-niveau met afleiders en interpretatievragen | Zichtbare tekst: 'Doorstroomtoets' i.p.v. 'Cito' |
| 125 | 2 | public/begrijpend-lezen-oefenen.html | De 4 tekstsoorten op de Cito en in groep 8 | De 4 tekstsoorten op de Doorstroomtoets en in groep 8 | Zichtbare kop: 'Doorstroomtoets' i.p.v. 'Cito' |
| 126 | 2 | public/begrijpend-lezen-oefenen.html | Doe dat nooit op een Cito-vraag: … | Doe dat nooit op een toetsvraag: … | Zichtbare tekst: geen 'Cito' |
| 127 | 2 | public/begrijpend-lezen-oefenen.html | Drie typische valstrikken die Cito gebruikt: | Drie typische valstrikken in toetsvragen: | Zichtbare tekst: geen 'Cito' (geldt voor alle aanbieders) |
| 128 | 2 | public/cito-eindtoets-oefenen.html | Alle vragen zijn gemaakt op het niveau van de Cito eindtoets groep 8. | Alle vragen zijn gemaakt op het niveau van de Doorstroomtoets in groep 8. | Zichtbare tekst: 'Doorstroomtoets' i.p.v. 'Cito eindtoets' |
| 129 | 2 | public/cito-eindtoets-oefenen.html | 🚀 Start gratis Cito-oefening | 🚀 Start gratis met oefenen | Knop: 'Doorstroomtoets' i.p.v. 'Cito' (bestemming /?go=cito blijft) |
| 130 | 2 | public/cito-toets-oefenen.html | …vanaf 2027 is er een optioneel Familie-pakket voor thuis (vanaf 2027). | …vanaf 2027 is er een optioneel Familie-pakket voor thuis. | 'vanaf 2027' staat twee keer in één zin |
| 131 | 2 | public/cito-toets-oefenen.html | Dan komt de Doorstroomtoets in februari. | Dan komt de Doorstroomtoets, eind januari of begin februari. | Toets begint 25 januari (papier 26-27 jan); 'in februari' klopt niet |
| 132 | 2 | public/cito-toets-oefenen.html | Februari = afname. | Eind januari/februari = afname. | Afname start 25 januari |
| 133 | 2 | public/cito-toets-oefenen.html | …→ Doorstroomtoets in februari → … | …→ Doorstroomtoets eind januari/februari → … | Afname start 25 januari |
| 134 | 2 | public/cito-toets-oefenen.html | …vragen in exact format dat Cito gebruikt: meerkeuze met 4 opties… | …vragen in dezelfde vorm als de echte toets: meerkeuze met 4 opties… | Engels 'format', 'Cito' + loopt niet |
| 135 | 2 | public/cito-toets-oefenen.html | Bij een fout antwoord opent een uitlegPad: "basis", … | Bij een fout antwoord opent een uitleg: "basis", … | Dev-jargon (code-naam 'uitlegPad') in zichtbare tekst |
| 136 | 2 | public/cito-toets-oefenen.html | Op Leerkwartier doet de uitlegPad dit automatisch. | Op Leerkwartier doet de uitleg dit automatisch. | Dev-jargon (code-naam 'uitlegPad') in zichtbare tekst |
| 137 | 2 | public/cito-toets-oefenen.html | …de Doorstroomtoets-stof (eindniveau groep 8) zit dezelfde leerpaden… | …de Doorstroomtoets-stof (eindniveau groep 8) zit in dezelfde leerpaden… | Woord 'in' ontbreekt |
| 138 | 2 | public/cito-toets-oefenen.html | …maar een verkennen van waar je kind structureel staat. | …maar een verkenning van waar je kind structureel staat. | Zin loopt niet ('een verkennen') |
| 139 | 2 | public/cito-toets-oefenen.html | …daarna blijft het oefenen gratis en komt er een optioneel Familie-pakket… | …daarna blijft het oefenen gratis (gegarandeerd t/m 2031) en komt er een optioneel Familie-pakket… | Onbegrensde gratis-belofte; huisregel: 'gegarandeerd t/m 2031' |
| 140 | 2 | public/doorgeven.html | Heeft uw organisatie een partnercode? | Heeft je organisatie een partnercode? | Huisregel: geen 'u'; pagina begint in je-vorm ('Werk je bij…') |
| 141 | 2 | public/doorgeven.html | Werkt uw organisatie samen met Nationaal Fonds Kinderhulp? | Werkt je organisatie samen met Nationaal Fonds Kinderhulp? | Huisregel: geen 'u'; je/u door elkaar op deze pagina |
| 142 | 2 | public/doorgeven.html | Beeld en korte tekst voor uw eigen nieuwsbrief: | Beeld en korte tekst voor je eigen nieuwsbrief: | Huisregel: geen 'u' |
| 143 | 2 | public/doorgeven.html | Heeft uw organisatie een partnercode van Leerkwartier gekregen… | Heeft je organisatie een partnercode van Leerkwartier gekregen… | Huisregel: geen 'u' |
| 144 | 2 | public/doorgeven.html | Nog geen code voor uw organisatie? | Nog geen code voor je organisatie? | Huisregel: geen 'u' |
| 145 | 2 | public/doorgeven.html | U krijgt binnen een dag een code en een flyer op maat… | Je krijgt binnen een dag een code en een flyer op maat… | Huisregel: geen 'u' |
| 146 | 2 | public/doorgeven.html | 4. Werkt u bij een organisatie? Blijf op de hoogte | 4. Werk je bij een organisatie? Blijf op de hoogte | Huisregel: geen 'u' |
| 147 | 2 | public/doorgeven.html | Laat uw e-mailadres achter. U krijgt dan de flyer als PDF… | Laat je e-mailadres achter. Je krijgt dan de flyer als PDF… | Huisregel: geen 'u' |
| 148 | 2 | public/doorgeven.html | uw werk-e-mailadres | je werk-e-mailadres | Huisregel: geen 'u' |
| 149 | 2 | public/doorgeven.html | Dank u. De flyer en de updates komen naar … | Dank je. De flyer en de updates komen naar … | Huisregel: geen 'u' |
| 150 | 2 | public/doorstroomtoets-2027-gids.html | Februari 2027 is dichterbij dan je denkt. | Eind januari 2027 is dichterbij dan je denkt. | De toets begint op 25 januari 2027, niet in februari |
| 151 | 2 | public/doorstroomtoets-2027-gids.html | Spelen ze met decimalen? | Hebben ze moeite met decimalen? | 'Spelen ze met' zegt niet wat bedoeld wordt |
| 152 | 2 | public/doorstroomtoets-2027-gids.html | 📘 Naar de oefen-modules | 📘 Naar het oefenen | Dev-jargon 'modules' in knoptekst |
| 153 | 2 | public/doorstroomtoets-cito-leerling-in-beeld.html | Dagelijks 1 oefenvraag per soort gewenningseffect groot. | Dagelijks 1 oefenvraag per soort geeft al een groot gewenningseffect. | Werkwoord ontbreekt; zin loopt niet |
| 154 | 2 | public/doorstroomtoets-cito-leerling-in-beeld.html | …geïjkt op dezelfde referentieniveaus… maar het niveau is geijkt op gelijk. | …geijkt op dezelfde referentieniveaus… maar het niveau is gelijk. | Spelling 'geijkt' (zonder trema) + 'geijkt op gelijk' loopt niet |
| 155 | 2 | public/doorstroomtoets-dia.html | Dia laat niet vragen overslaan en terugkomen. | Bij Dia kun je geen vragen overslaan en later terugkomen. | Woordvolgorde loopt niet |
| 156 | 2 | public/doorstroomtoets-iep.html | …dezelfde referentieniveaus (1F, 1S, 2F) als Cito, IEP en de andere aanbieders. | …dezelfde referentieniveaus (1F, 1S, 2F) als Cito en de andere aanbieders. | Op de IEP-pagina wordt IEP met zichzelf vergeleken |
| 157 | 2 | public/doorstroomtoets-iep.html | Op specifieke school-website staat soms… — anders vraag de leerkracht. | Op de website van de school staat soms… — vraag het anders de leerkracht. | Lidwoord ontbreekt; zin loopt niet |
| 158 | 2 | public/doorstroomtoets-oefenen-groep-7.html | …bij elke fout opent een uitlegPad op 3 niveaus… | …bij elke fout opent een uitleg op 3 niveaus… | Dev-jargon (code-naam 'uitlegPad') in zichtbare tekst |
| 159 | 2 | public/doorstroomtoets-oefenen-groep-7.html | Bij elke fout opent een uitlegPad op 3 niveaus… | Bij elke fout opent een uitleg op 3 niveaus… | Dev-jargon (code-naam 'uitlegPad') in zichtbare tekst |
| 160 | 2 | public/doorstroomtoets-oefenen-groep-7.html | 👪 Zo leg je 't uit (voor ouders) | 👪 Zo leg je 't uit (voor thuis) | Huisregel: nooit alléén 'ouder' |
| 161 | 2 | public/doorstroomtoets-oefenen.html | …test referentieniveau 1F (fundamenteel) en 2F (streefniveau). | …test referentieniveau 1F (fundamenteel) en 1S/2F (streefniveau). | Onjuist: streefniveau is 1S (rekenen) / 2F (taal); gids noemt 1S als streefniveau |
| 162 | 2 | public/doorstroomtoets-oefenen.html | …een fiets van €240 met 25% korting kosten uitrekenen… | …de prijs van een fiets van €240 met 25% korting uitrekenen… | Zin loopt niet ('korting kosten uitrekenen') |
| 163 | 2 | public/doorstroomtoets-oefenen.html | Cito stelt deze vragen vaak in de vorm van redactiesommen… | De toets stelt deze vragen vaak in de vorm van redactiesommen… | Zichtbare tekst: geen 'Cito' (geldt voor alle aanbieders) |
| 164 | 2 | public/doorstroomtoets-oefenen.html | Een lagere score leidt niet automatisch tot een lager advies. Komt de uitslag tegen? | Een lagere score leidt nooit tot een lager advies. Valt de uitslag tegen? | 'niet automatisch' suggereert dat het kan (elders: 'nooit'); 'Komt de uitslag tegen' is geen Nederlands |
| 165 | 2 | public/doorstroomtoets-oefenen.html | De toets is verplicht en wordt in februari afgenomen. | De toets is verplicht en wordt eind januari/begin februari afgenomen. | Afname 2027: 25 januari t/m 12 februari |
| 166 | 2 | public/doorstroomtoets-oefenen.html | 👪 Voor ouders: zo leg je de lastigste onderwerpen uit aan je kind → | 👪 Voor thuis: zo leg je de lastigste onderwerpen uit aan je kind → | Huisregel: nooit alléén 'ouder' |
| 167 | 2 | public/doorstroomtoets-route-8.html | Hoe Route-8 ouder-impact verschilt | Wat Route 8 anders maakt voor jou als ouder of verzorger | Kop loopt niet (telegramstijl) + 'ouder' alleen |
| 168 | 2 | public/doorstroomtoets-route-8.html | …niet skippen en later terugkomen. Een vraag overslaan = wordt fout gerekend. | …niet overslaan en later terugkomen. Een overgeslagen vraag wordt fout gerekend. | Engels 'skippen' + zin loopt niet |
| 169 | 2 | public/doorstroomtoets-route-8.html | …mogelijk te grillig om hard te conclusie te trekken. | …mogelijk te grillig om een harde conclusie te trekken. | Zin loopt niet |
| 170 | 2 | public/drukwerk/juf-start-A4.html | Maakt een leerling een fout? Dan wordt de uitleg steeds simpeler, tot je het echt begrijpt. | Maakt een leerling een fout? Dan wordt de uitleg steeds simpeler, tot de leerling het echt begrijpt. | Juf-start A4 (sjabloon): zin begint over "een leerling" en de leerkracht wordt met "u" aangesproken; "je" verwijst nergens naar. |
| 171 | 2 | public/drukwerk/juf-start-A4.html | Wilt u daarna zien wie wat deed? Dan zet u een klascode (hieronder). | Wilt u daarna zien wie wat deed? Dan maakt u een klascode aan (hieronder). | Juf-start A4: "een klascode zetten" loopt niet; de code krijgt u bij het klaarzetten. |
| 172 | 2 | public/gratis-bijles.html | Bedoeld als informatie voor ouders. | Bedoeld als informatie voor ouders en verzorgers. | Huisregel: nooit alléén 'ouder' |
| 173 | 2 | public/gratis.html | De eerste is gratis… De andere twee zijn optioneel en voor wie meer wil. | Gratis en Voor scholen kosten niets, gegarandeerd t/m 2031. Familie is optioneel, voor wie thuis meer wil. | Onwaar: de laag 'Voor scholen' is ook gratis, niet 'optioneel voor wie meer wil' |
| 174 | 2 | public/klaar-voor-de-brugklas.html | …daarna blijft de basis gratis. | …daarna blijft de basis gratis, gegarandeerd t/m 2031. | Onbegrensde gratis-belofte; huisregel: 'gegarandeerd t/m 2031' |
| 175 | 2 | public/klassikaal-digibord.html | …kaartje omhoog, u ziet meteen hoeveel procent het goed had. | …kaartje omhoog, je ziet meteen hoeveel procent het goed had. | Huisregel: geen 'u' |
| 176 | 2 | public/klassikaal-digibord.html | …kaartje omhoog, u telt, en de app laat meteen zien… | …kaartje omhoog, jij telt, en de app laat meteen zien… | Huisregel: geen 'u' |
| 177 | 2 | public/klassikaal-digibord.html | Toon uitslag: u ziet het goede antwoord… | Toon uitslag: je ziet het goede antwoord… | Huisregel: geen 'u' |
| 178 | 2 | public/klassikaal-digibord.html | De uitslag kunt u printen. | De uitslag kun je printen. | Huisregel: geen 'u' |
| 179 | 2 | public/kwartiercheck.html | …wij sturen een scorekaart + 4-weekse oefenplan met directe leerpad-links. | …wij sturen een scorekaart + een oefenplan voor 4 weken met directe links. | Lidwoord ontbreekt / 'een … 4-weekse oefenplan' klopt niet + dev-jargon 'leerpad-links' |
| 180 | 2 | public/kwartiercheck.html | …een manier om ouders te laten zien wat hun kind echt nodig heeft… | …een manier om ouders en verzorgers te laten zien wat hun kind echt nodig heeft… | Huisregel: nooit alléén 'ouder' |
| 181 | 2 | public/leergeld-flyer.html | Scan de QR-code met de camera van uw telefoon | Scan de QR-code met de camera van je telefoon | Huisregel: geen 'u' |
| 182 | 2 | public/leergeld-flyer.html | Uw code … wordt automatisch geactiveerd | Je code … wordt automatisch geactiveerd | Huisregel: geen 'u' |
| 183 | 2 | public/leergeld-flyer.html | …daarmee krijgt uw gezin ook het Familie-pakket… | …daarmee krijgt je gezin ook het Familie-pakket… | Huisregel: geen 'u' |
| 184 | 2 | public/leergeld-flyer.html | Zo bereikt u onbeperkt gezinnen… | Zo bereik je onbeperkt gezinnen… | Huisregel: geen 'u' |
| 185 | 2 | public/leergeld-flyer.html | Vragen van uw stichting beantwoord ik persoonlijk. | Vragen van je stichting beantwoord ik persoonlijk. | Huisregel: geen 'u' |
| 186 | 2 | public/leermaatje.html | Zo weet je als ouder zeker dat een goed resultaat écht van je kind is. | Zo weet je als ouder of verzorger zeker dat een goed resultaat écht van je kind is. | Huisregel: nooit alléén 'ouder' |
| 187 | 2 | public/leesladder.html | Na elke fout krijgt je kind uitleg op 3 niveaus …, tot je het echt begrijpt. | Na elke fout krijgt je kind uitleg op 3 niveaus …, tot je kind het echt begrijpt. | Verwijzing klopt niet: zin gaat over 'je kind', niet over de lezer (zelfde soort fout als de tester vond) |
| 188 | 2 | public/leesladder.html | Zo kun je als ouder een fout écht nabespreken… | Zo kun je als ouder of verzorger een fout écht nabespreken… | Huisregel: nooit alléén 'ouder' |
| 189 | 2 | public/leren-15-minuten.html | Cito-ouders met kinderen in groep 6-8… | Ouders en verzorgers met kinderen in groep 6-8… | Zichtbare tekst: geen 'Cito'; nooit alléén 'ouder' |
| 190 | 2 | public/leren-15-minuten.html | Bij Cito-stof voor de Doorstroomtoets is het verschil dramatisch… | Bij de stof voor de Doorstroomtoets is het verschil dramatisch… | Zichtbare tekst: geen 'Cito' |
| 191 | 2 | public/leren-15-minuten.html | Vraag — een Cito-stijl oefenvraag of authentieke examenvraag. | Vraag — een oefenvraag in Doorstroomtoets-stijl of een echte examenvraag. | Zichtbare tekst: geen 'Cito' |
| 192 | 2 | public/leren-15-minuten.html | …bij een fout opent een uitlegPad: 'basis', … | …bij een fout opent een uitleg: 'basis', … | Dev-jargon (code-naam 'uitlegPad') in zichtbare tekst |
| 193 | 2 | public/leren-15-minuten.html | ~50% van Cito-score · 4 tekstsoorten… | ~50% van de toetsscore · 4 tekstsoorten… | Zichtbare tekst: geen 'Cito' |
| 194 | 2 | public/onderwijs-begrippen.html | Niet alle scholen verklaren dit op hetzelfde gesprek — vraag er gerust naar. | Niet elke school legt dit in het gesprek uit — vraag er gerust naar. | Zin loopt niet ('verklaren dit op hetzelfde gesprek') |
| 195 | 2 | public/onderwijs-begrippen.html | Na het VMBO doorstroming naar het MBO is de standaard-route; | Na het VMBO is doorstromen naar het MBO de standaardroute; | Zin mist werkwoord op de goede plek; loopt niet |
| 196 | 2 | public/onderwijs-begrippen.html | ruim van te voren om aanpassingen voor de Doorstroomtoets, anders haalt het kind die aanpassingen die dag niet automatisch. | ruim van tevoren om aanpassingen voor de Doorstroomtoets, anders krijgt het kind die aanpassingen op de toetsdag niet vanzelf. | Spelling 'van tevoren'; 'haalt ... niet automatisch' loopt niet |
| 197 | 2 | public/onderwijs-begrippen.html | lage opleidingsniveau-thuis | een laag opleidingsniveau thuis | Ontbrekend lidwoord, verkeerde verbuiging en koppelteken |
| 198 | 2 | public/privacy.html | "Verwijder mijn data"-knop | "Verwijder al mijn data"-knop | Knop heet in de app 'Verwijder al mijn data' (OuderInzicht.jsx) |
| 199 | 2 | public/privacy.html | Bij ingrijpende veranderingen wordt actief geïnformeerd in de app. | Bij ingrijpende veranderingen laten we het je ook in de app weten. | Lijdende vorm zonder onderwerp; loopt niet |
| 200 | 2 | public/rekenen-doorstroomtoets.html | uitlegPad op 3 niveaus | uitleg op 3 niveaus | Dev-jargon 'uitlegPad' (code-naam) in zichtbare tekst |
| 201 | 2 | public/rekenen-doorstroomtoets.html | Onze uitlegPad helpt juist | Onze uitleg op 3 niveaus helpt juist | Dev-jargon 'uitlegPad' |
| 202 | 2 | public/rekenen-doorstroomtoets.html | didactische uitlegPad-feedback die juist | uitleg op 3 niveaus die juist | Dev-jargon 'uitlegPad' |
| 203 | 2 | public/spelling-doorstroomtoets.html | uitlegPad op 3 niveaus | uitleg op 3 niveaus | Dev-jargon 'uitlegPad' |
| 204 | 2 | public/spelling-doorstroomtoets.html | een uitlegPad op 3 niveaus dat de regel uitlegt | uitleg op 3 niveaus die de regel uitlegt | Dev-jargon 'uitlegPad' |
| 205 | 2 | public/studievaardigheden-doorstroomtoets.html | uitlegPad op 3 niveaus | uitleg op 3 niveaus | Dev-jargon 'uitlegPad' |
| 206 | 2 | public/vmbo-examens-downloaden.html | Het ministerie van Onderwijs (DUO) publiceert ze via examenblad.nl. | Het College voor Toetsen en Examens (CvTE) publiceert ze via examenblad.nl. | Onjuist: examenblad.nl is van het CvTE, niet van DUO |
| 207 | 2 | public/vmbo-examens-downloaden.html | Het ministerie van Onderwijs publiceert ze via examenblad.nl. Mag je downloaden | Het College voor Toetsen en Examens publiceert ze via examenblad.nl. Je mag ze downloaden | Onjuiste afzender + zin zonder onderwerp ('Mag je downloaden...') |
| 208 | 2 | public/vmbo-examens-oefenen.html | een oude examenvraag moet zo authentiek mogelijk gevoeld worden | een oude examenvraag moet zo echt mogelijk aanvoelen | Zin loopt niet ('gevoeld worden') |
| 209 | 2 | public/vmbo-examens-oefenen.html | Een eindexamen-week kost 6-8 vakken | Een eindexamenperiode telt 6-8 vakken | 'kost 6-8 vakken' klopt niet als zin |
| 210 | 2 | public/vmbo-examens-oefenen.html | een eindexamen-week kost 6-8 vakken | een eindexamenperiode telt 6-8 vakken | 'kost 6-8 vakken' klopt niet als zin |
| 211 | 2 | public/voor-leerkrachten.html | Familie-pakket (€ 39 per jaar) | Familie-pakket (€ 39 voor 12 maanden, eenmalig) | Prijs-huisregel: geen 'per jaar' (klinkt als doorlopend abonnement) |
| 212 | 2 | public/voorwaarden.html | Wat we van jullie gegevens doen | Wat we met jullie gegevens doen | Taalfout in kopje ('van' → 'met') |
| 213 | 2 | public/woordenschat-doorstroomtoets.html | uitlegPad op 3 niveaus | uitleg op 3 niveaus | Dev-jargon 'uitlegPad' |
| 214 | 2 | public/woordenschat-doorstroomtoets.html | niet het eerste woord kiezen dat erop lijkt, maar dat past in de zin. | niet het eerste woord kiezen dat erop lijkt, maar het woord dat in de zin past. | Zin mist een woord ('maar dat past') |
| 215 | 2 | scripts/build-examen-set-indexes.mjs | Leerkwartier is een gratis examen-oefenplatform voor VMBO, HAVO, VWO en de Doorstroomtoets. | Leerkwartier is een gratis oefen-app voor de VMBO-examens en de Doorstroomtoets. | Onwaar: er zijn geen havo/vwo-examens |
| 216 | 2 | scripts/build-examen-set-indexes.mjs | Alle 6 vragen van dit examen | 6 vragen uit dit examen | Onwaar: een examen heeft ~40 vragen, hier staan er 6 |
| 217 | 2 | scripts/build-examen-set-indexes.mjs | De 6 examenvragen uit het eindexamen economie … | 6 examenvragen uit het eindexamen economie … | 'De 6 examenvragen' suggereert het hele examen |
| 218 | 2 | scripts/buildExamenVraagPaginas.mjs | Leerkwartier is een gratis examen-oefenplatform voor VMBO, HAVO, VWO en de Doorstroomtoets. | Leerkwartier is een gratis oefen-app voor de VMBO-examens en de Doorstroomtoets. | Onwaar: er zijn geen havo/vwo-examens |
| 219 | 2 | scripts/buildVoorlezen.mjs | 6 × 4 versies × treden — klimt mee | 6 versies van elk 4 treden — klimt mee | Onleesbaar: '6 × 4 versies × treden' (generator van public/voorlezen.html) |
| 220 | 2 | src/App.jsx | … Controleer of de API key nog actief is in het Vercel dashboard. | … Probeer het zo nog eens. | Leerkracht krijgt een beheerdersinstructie (API key/Vercel) die hij niet kan uitvoeren |
| 221 | 2 | src/App.jsx | … Controleer of de API key nog actief is in het Vercel dashboard. | … Probeer het zo nog eens. | Idem: dev-instructie in foutmelding voor de gebruiker |
| 222 | 2 | src/app/ErrorBoundary.jsx | …als het blijft, deel de boodschap hieronder met de maker. | …als het blijft, mail de boodschap hieronder naar hallo@leerkwartier.app. | Zegt niet hóé je de maker bereikt; huisregel contactadres hallo@ |
| 223 | 2 | src/components/AgeGate.jsx | Vul een geldig e-mailadres in (of laat leeg als ouder erbij is). | Vul een geldig e-mailadres in, of laat het veld leeg. | Loopt niet ('laat leeg als ouder erbij is'); veld is optioneel |
| 224 | 2 | src/components/BegrijpendLezenLadder.jsx | Hoe lang wil je beginnen? | Met hoeveel tekst wil je beginnen? | 'Hoe lang' leest als tijdsduur; het gaat om tekstlengte (intro zegt 'hoe kort je wilt beginnen') |
| 225 | 2 | src/components/BrugklasPage.jsx | Eigen oefenvragen in stijl van de brugklas. | Eigen oefenvragen op brugklasniveau. | 'In stijl van de brugklas' loopt niet (een klas heeft geen stijl) |
| 226 | 2 | src/components/CharleyHulp.jsx | … Kijk anders bij de vragen hierboven, of op leerkwartier.app/over. 🐾 | … Kijk anders bij de vragen hierboven, of op leerkwartier.app/over.html. 🐾 | leerkwartier.app/over bestaat niet als route (valt terug op het beginscherm); de pagina is /over.html |
| 227 | 2 | src/components/CharleyHulp.jsx | Hm, dat weet ik zo niet — kijk eens bij de vragen hierboven, of op leerkwartier.app/over. 🐾 | Hm, dat weet ik zo niet — kijk eens bij de vragen hierboven, of op leerkwartier.app/over.html. 🐾 | leerkwartier.app/over bestaat niet als route; de pagina is /over.html |
| 228 | 2 | src/components/CitoLeerpadToets.jsx | Per fout zie je de hint. Klik op "▼ Meer uitleg & leerpad" voor de volledige uitleg + naar het leerpad. | Per fout zie je de hint. Klik op "▼ Meer uitleg" voor de volledige uitleg + naar het leerpad. | Verwijst naar knop '▼ Meer uitleg & leerpad', maar de knop heet '▼ Meer uitleg' |
| 229 | 2 | src/components/CodeBalk.jsx | … óf de koppelcode van je vader, moeder, juf of meester: | … óf de koppelcode van thuis of van je juf of meester: | 'vader, moeder' sluit verzorgers/voogden uit (huisregel ouder of verzorger); rest van de balk zegt al 'thuis of school' |
| 230 | 2 | src/components/CodeBalk.jsx | Tik bovenaan op "Ik ben leerling" en kies je naam | Tik bovenaan op "Leerling" en kies je naam | Knop 'Ik ben leerling' bestaat niet; op home heet de tegel 'Leerling' (de regel 'Ik ben: leerling' verschijnt alleen als de rol onbekend is) |
| 231 | 2 | src/components/DeepVraag.jsx | 💭 Bijna! Kijk nog eens goed naar de vraag. | 💭 Bijna! Kijk hieronder hoe het zit. | Na een fout antwoord zijn de knoppen vergrendeld; 'kijk nog eens goed naar de vraag' geeft geen richting. Uitleg staat eronder (zelfde tekst als VraagVanDeDag) |
| 232 | 2 | src/components/ExamensPage.jsx | Tip: oefen eerst met de groene 🎯-knop — bij een fout antwoord opent een uitleg … | Tip: oefen eerst met de blauwe 🎯-knop — bij een fout antwoord opent een uitleg … | De 🎯-knop 'Maak dit examen' is blauw (C.oefen = #00b0ff), niet groen |
| 233 | 2 | src/components/HomePage.jsx | Oefenen voor de eindtoets (groep 6-8) | Oefenen voor de Doorstroomtoets (groep 6-8) | Huisregel: 'Doorstroomtoets' i.p.v. eindtoets (staat ook naast het Doorstroomtoets-logo) |
| 234 | 2 | src/components/HomePage.jsx | …ook offline. Browser detected: Chrome op Android. | …ook offline. Gevonden browser: Chrome op Android. | Engelse tekst in Nederlandse uitleg |
| 235 | 2 | src/components/HomeV2.jsx | leerkwartier · gratis tot 2027 · 15 min per dag · slim leren | leerkwartier · basis gratis t/m 2031 · 15 min per dag · slim leren | Onwaar/verouderd: basis is gratis gegarandeerd t/m 2031 (design-preview-route) |
| 236 | 2 | src/components/HomeV3.jsx | leerkwartier · gratis tot 2027 · 15 min per dag · slim leren | leerkwartier · basis gratis t/m 2031 · 15 min per dag · slim leren | Idem (route home-v3) |
| 237 | 2 | src/components/KindAcceptBanner.jsx | ✓ Bevestigd. Je ouder kan nu je scores zien. | ✓ Bevestigd. Je ouder of verzorger kan nu je scores zien. | Nooit alleen 'ouder' (huisregel); de banner zelf zegt al 'ouder of verzorger' |
| 238 | 2 | src/components/KindAcceptBanner.jsx | … wilt weigeren? De ouder kan opnieuw vragen. | … wilt weigeren? De ouder of verzorger kan het opnieuw vragen. | Nooit alleen 'ouder'; zin mist 'het' |
| 239 | 2 | src/components/KoppelcodeBanner.jsx | Vul de hele code in (6 letters). | Vul de hele code in (6 tekens). | Code bestaat uit letters én cijfers (stap 1 zegt '6 tekens (letters en cijfers)', voorbeeld ABC123) |
| 240 | 2 | src/components/KoppelcodeBanner.jsx | Vraag thuis (of je juf/meester) om een nieuwe — die maak je zo weer aan. | Vraag thuis (of je juf/meester) om een nieuwe — die is zo weer aangemaakt. | Verkeerde verwijzing: het kind leest dit, maar de ouder/leerkracht maakt de code aan |
| 241 | 2 | src/components/MetDankAan.jsx | Deel je Leerkwartier met anderen? | Deel jij Leerkwartier met anderen? | 'Deel je Leerkwartier' leest als 'jouw Leerkwartier' |
| 242 | 2 | src/components/ObliteratorGame.jsx | GEFELICITEERD SAM MET JE HIGH SCORE 2E PLAATS! | GEFELICITEERD SAM MET JE 2E PLAATS IN DE HIGHSCORES! | Zin loopt niet: 'met je high score 2e plaats' |
| 243 | 2 | src/components/ObliteratorGame.jsx | Geen straf — je leert door 💪 | Geen straf — hier leer je van 💪 | 'je leert door' is dubbelzinnig (doorleren? waardoor?) |
| 244 | 2 | src/components/PakketUitleg.jsx | Uitleg op 3 niveaus: makkelijk, gewoon en uitgebreid | Uitleg op 3 niveaus: gewoon, simpeler en nog simpeler | Klopt niet met de echte niveaus (basis/simpeler/nog simpeler); 'uitgebreid' bestaat niet |
| 245 | 2 | src/components/PrintHubPage.jsx | Jij leest voor van het ouderblad, je kind schrijft op het invulblad. | Jij leest voor van het voorleesblad, je kind schrijft op het invulblad. | Het blad heet op de dictee-pagina zelf 'voorleesblad'; bovendien huisregel 'ouder' |
| 246 | 2 | src/components/RondleidingPage.jsx | Doorstroomtoets in januari — … | Doorstroomtoets vanaf eind januari — … | Toets loopt 25 jan t/m 12 feb (eigen FAQ op deze pagina zegt 'eind januari, begin februari') |
| 247 | 2 | src/components/RondleidingPage.jsx | …als ze écht begrijpen wat ze doen. … Drie uitleg-niveaus tot je het echt begrijpt. | …als ze écht begrijpen wat ze doen. … Drie uitleg-niveaus, tot ze het echt begrijpen. | Onderwerp springt van 'ze' (kinderen) naar 'je' |
| 248 | 2 | src/components/TafelbladenPage.jsx | Handtekening juf/meester/ouder: | Handtekening juf/meester/ouder/verzorger: | Huisregel: 'ouder' alleen sluit verzorgers uit (diploma-handtekening) |
| 249 | 2 | src/components/TopografieCheck.jsx | … mét uitleg in je mail? Vul je (ouder-)e-mail in. | … mét uitleg in je mail? Vul het e-mailadres van een ouder of verzorger in. | Huisregel: niet alléén 'ouder'; '(ouder-)e-mail' leest bovendien stroef |
| 250 | 2 | src/components/UspDemo.jsx | Snapt je kind iets niet? Wij leggen het op 3 niveaus uit — tot je het echt begrijpt. | Snapt je kind iets niet? Wij leggen het op 3 niveaus uit — tot je kind het echt begrijpt. | Zelfde fout als de welkomstzin: onderwerp springt van 'je kind' naar 'je' |
| 251 | 2 | src/components/ZookwartierGame.jsx | Doe de pagina dan opnieuw (veeg omlaag of druk F5) | Laad de pagina dan opnieuw (veeg omlaag of druk F5) | 'de pagina opnieuw doen' loopt niet |
| 252 | 2 | src/components/ZookwartierGame.jsx | Niet erg — samen oefenen maakt het zo makkelijker. Zullen we? | Niet erg — samen oefenen maakt het een stuk makkelijker. Zullen we? | 'maakt het zo makkelijker' loopt niet |
| 253 | 2 | src/components/ZookwartierGame.jsx | 💛 Voor jou klaargezet door thuis! | 💛 Thuis voor jou klaargezet! | 'klaargezet door thuis' loopt niet |
| 254 | 2 | src/components/ZookwartierGame.jsx | Wil je 'm niet meer delen? Vraag het me dan — we kunnen een nieuwe link maken. | Wil je 'm niet meer delen? Vraag het dan aan de maker via hallo@leerkwartier.app — we kunnen een nieuwe link maken. | 'Vraag het me' — onduidelijk wie 'me' is; geen manier om dat te vragen |
| 255 | 2 | src/components/ZookwartierGame.jsx | 🎲 Verras me met andere | 🎲 Verras me opnieuw | 'met andere' — zin houdt halverwege op |
| 256 | 2 | src/components/ZookwartierGame.jsx | 🎁 Je souvenir een mini-stoomloc 🚂 is vrijgespeeld — zet 'm neer via Bouwen → Dieren ✨ | 🎁 Je souvenir is vrijgespeeld: een mini-stoomloc 🚂 — zet 'm neer via Bouwen → Dieren ✨ | souvenirNaam begint met 'een' → 'Je souvenir een mini-stoomloc is vrijgespeeld' loopt niet |
| 257 | 2 | src/features/account/MijnPagina.jsx | Voor jou klaargezet — wat je juf, meester of ouder voor je klaarzet | Voor jou klaargezet — wat iemand thuis of je juf of meester voor je klaarzet | Niet alleen 'ouder' (kind kan bij voogd/pleegouder wonen); elders op deze pagina 'van thuis' |
| 258 | 2 | src/features/account/MijnPagina.jsx | Van je ouder of leerkracht | Van thuis of school | Niet alleen 'ouder'; het commentaar en de kaart zelf zeggen 'van thuis of school' |
| 259 | 2 | src/features/account/MijnPagina.jsx | Van je ouder of leerkracht | Van thuis of school | Niet alleen 'ouder'; labels in de kaart zijn '💛 van thuis' / '🍎 van je juf of meester' |
| 260 | 2 | src/features/account/MijnPagina.jsx | Heb je hier al eerder geoefend? Vul je naam in, dan halen we jouw voortgang erbij. | Heb je op dit apparaat al eerder geoefend? Vul je naam in, dan halen we jouw voortgang erbij. | Voortgang zonder account staat alleen op dit apparaat; 'hier' wekt de indruk dat het van elk apparaat terugkomt |
| 261 | 2 | src/features/familie/FamilieHub.jsx | ✨ Bèta — gratis om uit te proberen. We verbeteren dit nog; straks onderdeel van het Familie-pakket. | ✨ Bèta — gratis om uit te proberen. We verbeteren dit nog. | Dit ís de Familie-pakket-pagina; 'straks onderdeel van het Familie-pakket' klopt hier niet |
| 262 | 2 | src/features/familie/ouderkaartContent.js | Ouders zoeken naar een sluitende regel die er niet is. | Ouders en verzorgers zoeken vaak naar een sluitende regel die er niet is. | Benoemt de lezer met alleen 'ouders' (huisregel ouder of verzorger) — aanspreektekst, geen lesinhoud |
| 263 | 2 | src/features/kwartiercheck/KwartiercheckPage.jsx | Ontdek in ~15 minuten per onderwerp of jouw kind het beheerst, bijna snapt of nog extra oefening nodig heeft. | Ontdek in ~15 minuten, per onderwerp, of jouw kind het beheerst, bijna snapt of nog extra oefening nodig heeft. | Leest als '15 minuten per onderwerp' (bij max 3 vragen per onderwerp onjuist); komma's maken duidelijk dat de uitslag per onderwerp is |
| 264 | 2 | src/features/learn/KwartierPauze.jsx | Pauze van 5 min, daarna deze prompt weer. | Pauze van 5 min, daarna vraag ik het opnieuw. | 'prompt' is dev-jargon/Engels; kind begrijpt het niet |
| 265 | 2 | src/features/learn/LearnPath.jsx | Overzicht · Terug naar paden · Andere stap kiezen | Overzicht · Terug naar het overzicht · Kies een ander deel | Knop (goOverview) gaat naar het overzicht van dít onderwerp, niet naar een lijst 'paden'; 'paden'/'stap' is bovendien dev-jargon. Zelfde tekst als de nieuwkomer |
| 266 | 2 | src/features/learn/LearnPathsHub.jsx | nog niets voor jouw groep · 5 in andere | nog niets voor jouw groep · 5 in totaal | '5 in andere' loopt niet (andere wat?); bij 0 eigen zijn alle onderwerpen in totaal — sluit aan bij de andere variant |
| 267 | 2 | src/features/learn/VraagUitlegPad.jsx | 💪 Probeer het straks eerst zelf. Hieronder staat hulp … | 💪 Probeer het eerst zelf. Hieronder staat hulp … | 'straks eerst' botst (staat vóór de eerste poging); loopt niet |
| 268 | 2 | src/features/mastery/MasteryCTABanner.jsx | 🔁 Tijd voor refresher, Sara: | 🔁 Tijd om te herhalen, Sara: | Engels woord waar Nederlands kan; 'Tijd voor refresher' mist ook een lidwoord |
| 269 | 2 | src/features/oefenboekje/OefenboekjePagina.jsx | Voor de ouder/begeleider — kijk samen na. | Voor de ouder of verzorger — kijk samen na. | Huisregel 'ouder of verzorger' (consistent met rest van Familie) |
| 270 | 2 | src/features/ouder/Gezinsstart.jsx | Waar wil je bij Sam de eerste twee maanden de nadruk op? | Waar wil je bij Sam de eerste twee maanden de nadruk op leggen? | Werkwoord ontbreekt: 'de nadruk op' → 'de nadruk op leggen' |
| 271 | 2 | src/features/ouder/OuderInzicht.jsx | Meer nodig? Laat het weten via Tips aan maker. | Meer nodig? Mail ons: hallo@leerkwartier.app. | Contact via hallo@leerkwartier.app (huisregel); Mijn pagina zegt ook 'mail ons, zonder meerprijs'; 'Tips aan maker' staat niet op dit scherm |
| 272 | 2 | src/features/ouder/OuderInzicht.jsx | VOOR JOU ALS OUDER | VOOR JOU ALS OUDER OF VERZORGER | Nooit alleen 'ouder' als aanspreking van de lezer |
| 273 | 2 | src/features/ouder/OuderInzicht.jsx | Ouders | Ouders of verzorgers | Nooit alleen 'ouder(s)' als benoeming van de lezer; blok bevat ook 'Tweede ouder of verzorger' |
| 274 | 2 | src/features/practice/PlayQuiz.jsx | ↩️ Keer terug naar vragen | 👉 Door naar volgende vraag | Knop sluit de uitleg én roept goToNext() aan — je gaat dus naar de volgende vraag, niet 'terug naar vragen' (zelfde label als de andere doorgaan-knop) |
| 275 | 2 | src/features/practice/PlayQuiz.jsx | ↩️ Kom terug via de ← terug-knop van je browser | ↩️ Video en melden openen in een nieuw tabblad — sluit dat tabblad om hier verder te gaan | YouTube en Fout melden openen met target=_blank in een nieuw tabblad; de terug-knop van de browser brengt je dan níet terug |
| 276 | 2 | src/features/practice/ResultsPage.jsx | Oefen dit onderdeel vaker om je eindtoets score te verhogen. | Oefen dit onderdeel vaker om je Doorstroomtoets-score te verhogen. | Oude naam 'eindtoets' + losgeschreven samenstelling 'eindtoets score' |
| 277 | 2 | src/features/practice/ResultsPage.jsx | 📬 Stuur resultaat naar leraar/ouder | 📬 Stuur resultaat naar leerkracht, ouder of verzorger | Huisregel: niet alléén 'ouder'; en 'leraar' vs 'leerkracht' (rest van het scherm zegt leerkracht) |
| 278 | 2 | src/features/practice/ResultsPage.jsx | Vraag hulp aan je leerkracht of ouder — niemand hoeft het te weten, jij stuurt het zelf! | Vraag hulp aan je leerkracht, ouder of verzorger — niemand hoeft het te weten, jij stuurt het zelf! | Huisregel: kind niet alléén naar 'ouder' verwijzen |
| 279 | 2 | src/features/teacher/StudentProgress.jsx | Anna, Bo, Cas, Dex, Eva vinden +3 anderen vinden dat je het goed hebt gedaan! | Anna, Bo, Cas, Dex, Eva en 3 anderen vinden dat je het goed hebt gedaan! | Bij meer dan 5 gevers staat 'vinden' dubbel: '… vinden +3 anderen vinden dat …' |
| 280 | 2 | src/features/teacher/TeacherHome.jsx | 🎓 Leerkwartier — Toets klaarstaan! | 🎓 Leerkwartier — Toets staat klaar! | Grammaticaal fout in WhatsApp-bericht naar leerlingen |
| 281 | 2 | src/shared/ui/VoorkennisKeten.jsx | Tik op een stap om naar dat onderwerp te oefenen — daarna terug naar deze vraag. | Tik op een stap om dat onderwerp te oefenen — daarna terug naar deze vraag. | 'naar … te oefenen' loopt niet |
| 282 | 2 | src/shared/usePwaInstall.js | Firefox desktop heeft geen ingebouwde PWA-install. | Firefox op de computer kan een website niet als app installeren. | Dev-jargon (PWA-install, desktop) voor ouders/kinderen |
| 283 | 1 | api/kind-overzicht-mail.js | gem. 72% · top 90% | gem. 72% · beste 90% | Engels 'top' → Nederlands 'beste' |
| 284 | 1 | api/send-weekpakket-code.js | dit pakket is extra post voor abonnees. | dit pakket is extra post voor mail-abonnees. | 'abonnees' klinkt als betaald abonnement; weekpakket-pagina zegt 'mail-abonnees' |
| 285 | 1 | api/send-weekpakket-code.js | dit pakket is extra post voor abonnees. | dit pakket is extra post voor mail-abonnees. | Idem, tekstversie |
| 286 | 1 | index.html | Een rustige bijlesdocent in je broekzak, 15 minuten per dag is genoeg. | Een rustige bijlesdocent in je broekzak. 15 minuten per dag is genoeg. | Kommafout (twee hoofdzinnen); payoff zoals in brand.js |
| 287 | 1 | public/abonnement.html | Pricing-informatie voor Leerkwartier — … | Prijsinformatie voor Leerkwartier — … | Engels woord waar Nederlands kan |
| 288 | 1 | public/begrijpend-lezen-doorstroomtoets.html | …dan verbeter je je hele Cito-score. | …dan verbeter je je hele Doorstroomtoets-score. | FAQ-tekst (zoekresultaat): 'Doorstroomtoets' i.p.v. 'Cito' |
| 289 | 1 | public/begrijpend-lezen-doorstroomtoets.html | Elk heeft een eigen vraag-format. | Elke soort heeft eigen vraagtypen. | 'Elk' hoort bij 'tekstsoorten' (de) + Engels 'format' |
| 290 | 1 | public/begrijpend-lezen-doorstroomtoets.html | 1. Zakelijke tekst — informatieve | 1. Zakelijke tekst — informatief | Bijvoeglijk naamwoord hangt los ('informatieve' zonder zelfstandig naamwoord) |
| 291 | 1 | public/begrijpend-lezen-doorstroomtoets.html | Cito-truc: lees eerst de vraag, dan pas de tekst. | Toetstruc: lees eerst de vraag, dan pas de tekst. | Zichtbare tekst: geen 'Cito' (het is geen truc van Cito) |
| 292 | 1 | public/begrijpend-lezen-doorstroomtoets.html | Vaak bij eind van tekst. | Vaak aan het eind van de tekst. | Lidwoorden ontbreken |
| 293 | 1 | public/begrijpend-lezen-doorstroomtoets.html | Moderne Doorstroomtoets gebruikt veel diverse teksten: … | De moderne Doorstroomtoets gebruikt veel verschillende teksten: … | Lidwoord ontbreekt; 'veel diverse' is dubbelop |
| 294 | 1 | public/begrijpend-lezen-oefenen.html | 'eerst', 'daarna', 'tenslotte' | 'eerst', 'daarna', 'ten slotte' | Spelling: 'ten slotte' (twee woorden) |
| 295 | 1 | public/cito-eindtoets-oefenen.html | …daarom hebben we beide URLs (deze pagina en /doorstroomtoets-oefenen.html). | …daarom hebben we beide pagina's (deze pagina en /doorstroomtoets-oefenen.html). | Engels/vaktaal + spelling (URL's); voor ouders is 'pagina's' duidelijker |
| 296 | 1 | public/cito-eindtoets-oefenen.html | Vraag je leerkracht naar het schooladvies vóórdat de toets wordt afgenomen… | Vraag de leerkracht naar het schooladvies vóórdat de toets wordt afgenomen… | Lezer is ouder of verzorger: 'je leerkracht' klopt niet |
| 297 | 1 | public/cito-eindtoets-oefenen.html | …(Cito-vraag-format herkennen)… Vermijd avond-vóór-de-toets cramming… | …(de vraagvorm van de toets herkennen)… Vermijd stampen op de avond vóór de toets… | Engelse woorden (format, cramming) + 'Cito' in zichtbare tekst |
| 298 | 1 | public/cito-toets-oefenen.html | Reken: alle tafels van 1 t/m 10… | Rekenen: alle tafels van 1 t/m 10… | Kopje-woord onvolledig ('Reken:' naast 'Taal:' en 'Lezen:') |
| 299 | 1 | public/cito-toets-oefenen.html | Reken: redactiesommen met 2 bewerkingen… | Rekenen: redactiesommen met 2 bewerkingen… | Kopje-woord onvolledig |
| 300 | 1 | public/cito-toets-oefenen.html | (Leerling Volg Systeem, juni en januari) | (leerlingvolgsysteem, juni en januari) | Spelling: 'leerlingvolgsysteem' is één woord |
| 301 | 1 | public/cito-toets-oefenen.html | De Cito-LVS (Leerling Volg Systeem) zijn de toetsen… | De Cito-LVS (leerlingvolgsysteem) zijn de toetsen… | Spelling: 'leerlingvolgsysteem' is één woord |
| 302 | 1 | public/cito-toets-oefenen.html | Zo zien ze er uit: | Zo zien ze eruit: | Spelling: 'eruit' aaneen |
| 303 | 1 | public/cito-toets-oefenen.html | gymnasium met latijn/grieks | gymnasium met Latijn/Grieks | Talen met hoofdletter |
| 304 | 1 | public/cito-toets-oefenen.html | …heeft elke jaar opnieuw kans op heroverweging… | …heeft elk jaar opnieuw kans op heroverweging… | 'jaar' is het-woord: 'elk jaar' |
| 305 | 1 | public/cito-toets-oefenen.html | …is de éénmalige toets in groep 8… | …is de eenmalige toets in groep 8… | Spelling: 'eenmalig' zonder klemtoontekens |
| 306 | 1 | public/doorstroomtoets-2027-gids.html | Geüpdatet: 13 mei 2026 | Bijgewerkt: 13 mei 2026 | Engels leenwoord waar Nederlands kan |
| 307 | 1 | public/doorstroomtoets-2027-gids.html | Lees meer over Cito LiB → | Lees meer over Leerling in Beeld → | Onbekende afkorting 'LiB' voor ouders |
| 308 | 1 | public/doorstroomtoets-2027-gids.html | …mag de leerling pauze nemen, water drinken en een korte rust nemen — … | …mag de leerling pauze nemen en water drinken — … | Dubbelop: 'pauze nemen' en 'een korte rust nemen' |
| 309 | 1 | public/doorstroomtoets-2027-gids.html | …dan taal-verzorging. | …dan taalverzorging. | Spelling: 'taalverzorging' aaneen (zoals elders op de pagina) |
| 310 | 1 | public/doorstroomtoets-2027-gids.html | Laatste week — rust + 1-2 mock-toetsen | Laatste week — rust + 1-2 oefentoetsen | Engels woord waar Nederlands kan |
| 311 | 1 | public/doorstroomtoets-2027-gids.html | Vermijd avonddoor-cramming — … | Vermijd stampen tot laat in de avond — … | Engels/verzonnen woord |
| 312 | 1 | public/doorstroomtoets-2027-gids.html | …niet een examen voor de rest van je leven. | …geen examen voor de rest van je leven. | 'niet een' → 'geen' |
| 313 | 1 | public/doorstroomtoets-2027-gids.html | Vermijd ad-hoc-cramming. | Vermijd stampen op het laatste moment. | Engels woord waar Nederlands kan |
| 314 | 1 | public/doorstroomtoets-2027-gids.html | …scoort merkbaar beter dan een ge-cramd kind. | …scoort merkbaar beter dan een kind dat tot het laatst heeft zitten stampen. | Engels/verzonnen woord |
| 315 | 1 | public/doorstroomtoets-2027-gids.html | Slaap en rust werken beter dan cramming. | Slaap en rust werken beter dan stampen. | Engels woord waar Nederlands kan |
| 316 | 1 | public/doorstroomtoets-2027-gids.html | …of concentratie-issues — … | …of concentratieproblemen — … | Engels woord waar Nederlands kan |
| 317 | 1 | public/doorstroomtoets-amn.html | Een mentor-rapport (aparte PDF) die meegestuurd kan worden… | Een mentor-rapport (aparte PDF) dat meegestuurd kan worden… | Verwijzing: 'het rapport' → 'dat' |
| 318 | 1 | public/doorstroomtoets-cito-leerling-in-beeld.html | De Cito-LVS (Leerling Volg Systeem) toetst… | De Cito-LVS (leerlingvolgsysteem) toetst… | Spelling: 'leerlingvolgsysteem' is één woord |
| 319 | 1 | public/doorstroomtoets-dia.html | …kinderen met concentratie-issues… | …kinderen met concentratieproblemen… | Engels woord waar Nederlands kan |
| 320 | 1 | public/doorstroomtoets-dia.html | Het advies van een erkend Doorstroomtoets-aanbieder… | Het advies van een erkende Doorstroomtoets-aanbieder… | 'de aanbieder' → 'erkende' |
| 321 | 1 | public/doorstroomtoets-oefenen-groep-7.html | …opent bij elke fout een uitlegPad op 3 niveaus… | …opent bij elke fout een uitleg op 3 niveaus… | Dev-jargon in FAQ-tekst (zoekresultaat) |
| 322 | 1 | public/doorstroomtoets-oefenen.html | Februari (week voor de toets) — niet meer pushen. | Februari (week voor de toets) — niet meer opjagen. | Engels woord waar Nederlands kan |
| 323 | 1 | public/doorstroomtoets-oefenen.html | …geeft een advies — niet een vonnis. | …geeft een advies — geen vonnis. | 'niet een' → 'geen' |
| 324 | 1 | public/doorstroomtoets-oefenen.html | …beter met realistische framing. | …beter met een realistische kijk. | Engels woord waar Nederlands kan |
| 325 | 1 | public/doorstroomtoets-oefenen.html | …methodetoetsen (CITO-LVS)… | …methodetoetsen (Cito-LVS)… | Schrijfwijze 'Cito' consequent |
| 326 | 1 | public/doorstroomtoets-route-8.html | Maak dat van te voren duidelijk. | Maak dat van tevoren duidelijk. | Spelling: 'tevoren' aaneen |
| 327 | 1 | public/doorstroomtoets-route-8.html | …oefen je dit met 4-keuze MC-vragen waar je kind altijd moet kiezen. | …oefen je dit met meerkeuzevragen met 4 opties waar je kind altijd moet kiezen. | Onbekende afkorting 'MC' |
| 328 | 1 | public/drukwerk/_template-flyer-b1.html | Een oefen-toets maken. | Een oefentoets maken. | Spelling: "oefentoets" is één woord (de nieuwere Buurtgezinnen-varianten hebben het al goed). Sjabloon. |
| 329 | 1 | public/drukwerk/flyer-ALKMAAR2027.html | Een oefen-toets maken. | Een oefentoets maken. | Spelling: "oefentoets" is één woord (de nieuwere Buurtgezinnen-varianten hebben het al goed). Partnerflyer. |
| 330 | 1 | public/drukwerk/flyer-BUURTGEZINNEN2027.template.html | Een oefen-toets maken. | Een oefentoets maken. | Spelling: "oefentoets" is één woord (de nieuwere Buurtgezinnen-varianten hebben het al goed). Sjabloon. |
| 331 | 1 | public/drukwerk/flyer-HAARLEMMERMEER2027-DRUK.html | Een oefen-toets maken. | Een oefentoets maken. | Spelling: "oefentoets" is één woord (de nieuwere Buurtgezinnen-varianten hebben het al goed). Partnerflyer. |
| 332 | 1 | public/drukwerk/flyer-HAARLEMMERMEER2027.html | Een oefen-toets maken. | Een oefentoets maken. | Spelling: "oefentoets" is één woord (de nieuwere Buurtgezinnen-varianten hebben het al goed). Partnerflyer. |
| 333 | 1 | public/drukwerk/flyer-KINDERHULP2027.html | Een oefen-toets maken. | Een oefentoets maken. | Spelling: "oefentoets" is één woord (de nieuwere Buurtgezinnen-varianten hebben het al goed). Partnerflyer. |
| 334 | 1 | public/drukwerk/flyer-SCHOOLSCOOL2027.html | Een oefen-toets maken. | Een oefentoets maken. | Spelling: "oefentoets" is één woord (de nieuwere Buurtgezinnen-varianten hebben het al goed). Partnerflyer. |
| 335 | 1 | public/drukwerk/flyer-ZAANSTREEK2027.html | Een oefen-toets maken. | Een oefentoets maken. | Spelling: "oefentoets" is één woord (de nieuwere Buurtgezinnen-varianten hebben het al goed). Partnerflyer. |
| 336 | 1 | public/drukwerk/nieuwkomers-thuisbrief.html | of tik de code WELKOMNIEUWKOMER | of typ de code WELKOMNIEUWKOMER | Nieuwkomers-thuisbrief (sjabloon): "tik de code" zonder "in" loopt niet; elders op het drukwerk staat steeds "typ". |
| 337 | 1 | public/drukwerk/poster-DONGEN2027-drukwerk.html | Een oefen-toets die op de echte Doorstroomtoets lijkt. | Een oefentoets die op de echte Doorstroomtoets lijkt. | Spelling: "oefentoets" is één woord. Partnerposter. |
| 338 | 1 | public/drukwerk/poster-DONGEN2027.html | Een oefen-toets die op de echte Doorstroomtoets lijkt. | Een oefentoets die op de echte Doorstroomtoets lijkt. | Spelling: "oefentoets" is één woord. Partnerposter. |
| 339 | 1 | public/drukwerk/poster-leerkwartier.html | Een oefen-toets die op de echte Doorstroomtoets lijkt. | Een oefentoets die op de echte Doorstroomtoets lijkt. | Spelling: "oefentoets" is één woord. Sjabloon-poster. |
| 340 | 1 | public/kwartiercheck.html | Deeplinks naar gratis leerpaden op Leerkwartier | Directe links naar gratis oefeningen op Leerkwartier | Engels/vaktaal ('Deeplinks') + dev-jargon |
| 341 | 1 | public/leren-15-minuten.html | …bij fout een uitlegPad op 3 niveaus… | …bij fout een uitleg op 3 niveaus… | Dev-jargon in FAQ-tekst (zoekresultaat) |
| 342 | 1 | public/leren-15-minuten.html | …geen gamification-stressors, geen reclame. | …geen stress van punten en levels, geen reclame. | Engels woord waar Nederlands kan |
| 343 | 1 | public/leren-15-minuten.html | 15 min = sweet spot. | 15 min = precies goed. | Engels woord waar Nederlands kan |
| 344 | 1 | public/leren-15-minuten.html | …niet pushen. | …niet doordrukken. | Engels woord waar Nederlands kan |
| 345 | 1 | public/leren-15-minuten.html | … · tijdslijn · FAQ | … · tijdlijn · FAQ | Spelling: 'tijdlijn' |
| 346 | 1 | public/maak-icoon.html | Icoon generator — Studiebol | Icoon generator — Leerkwartier | Oude merknaam (Studiebol) |
| 347 | 1 | public/maak-icoon.html | Studiebol icoon generator | Leerkwartier icoon generator | Oude merknaam (Studiebol) |
| 348 | 1 | public/nieuwkomers-nederlands-leren.html | soms staat er "groep" waar u "leerjaar" zegt | soms staat er "groep" waar je "leerjaar" zegt | Huisregel: geen 'u' |
| 349 | 1 | public/nieuwkomers-nederlands-leren.html | omhoog en u ziet meteen hoeveel procent | omhoog en je ziet meteen hoeveel procent | Huisregel: geen 'u' |
| 350 | 1 | public/nieuwkomers-nederlands-leren.html | Voor ouders in hun eigen taal | Voor ouders en verzorgers in hun eigen taal | Huisregel: nooit alléén 'ouder' als aanspreking/benoeming van de lezer |
| 351 | 1 | public/onderwijs-begrippen.html | Op je kind's Doorstroomtoets-uitslag zie je | Op de Doorstroomtoets-uitslag van je kind zie je | 'je kind's' is geen Nederlands (Engelse bezits-'s) |
| 352 | 1 | public/onderwijs-begrippen.html | op het einde van de basisschool | aan het einde van de basisschool | Vlaams/onidiomatisch: 'aan het einde' |
| 353 | 1 | public/over.html | voor kinderen in de basisschool (groep 3 t/m 8) | voor kinderen op de basisschool (groep 3 t/m 8) | 'op de basisschool' |
| 354 | 1 | public/over.html | overhoringen en de Cito eindtoets. | overhoringen en de Doorstroomtoets. | Huisregel: Doorstroomtoets i.p.v. Cito in zichtbare tekst |
| 355 | 1 | public/over.html | Studenten in het voortgezet onderwijs | Leerlingen in het voortgezet onderwijs | In het voortgezet onderwijs zijn het leerlingen, geen studenten |
| 356 | 1 | public/over.html | Ouders die hun kind willen helpen oefenen | Ouders en verzorgers die hun kind willen helpen oefenen | Huisregel: 'ouder of verzorger' |
| 357 | 1 | public/over.html | Cito eindtoets voorbereiding | Voorbereiding op de Doorstroomtoets | Huisregel: Doorstroomtoets i.p.v. Cito |
| 358 | 1 | public/over.html | Hoe kan ik de Cito eindtoets oefenen? | Hoe kan ik de Doorstroomtoets (vroeger Cito-eindtoets) oefenen? | Huisregel: Doorstroomtoets; 'Cito' blijft als zoekterm tussen haakjes |
| 359 | 1 | public/park.html | wie getikt wordt kijkt mee vanuit | wie getikt wordt, kijkt mee vanuit | Komma tussen twee persoonsvormen |
| 360 | 1 | public/privacy.html | Voor kinderen: ouder of voogd kan | Voor kinderen: een ouder of voogd kan | Ontbrekend lidwoord |
| 361 | 1 | public/rekenen-doorstroomtoets.html | het BEGRIPpen wat er gevraagd wordt | het BEGRIJPEN wat er gevraagd wordt | Typfout |
| 362 | 1 | public/rekenen-doorstroomtoets.html | Mijn kind kan tafels prima maar struggle't met de toets | Mijn kind kent de tafels prima maar heeft moeite met de toets | Engels woord ('struggle't') in Nederlandse tekst |
| 363 | 1 | public/rekenen-doorstroomtoets.html | "name": "Hoe oefen je het beste voor reken-Cito?" | "name": "Hoe oefen je het beste voor het rekendeel van de Doorstroomtoets?" | Huisregel: Doorstroomtoets i.p.v. Cito |
| 364 | 1 | public/rekenen-doorstroomtoets.html | Hoe oefen je het beste voor reken-Cito? | Hoe oefen je het beste voor het rekendeel van de Doorstroomtoets? | Huisregel: Doorstroomtoets i.p.v. Cito |
| 365 | 1 | public/rekenen-doorstroomtoets.html | week 11-12: mock-Cito's doen in examen-modus. | week 11-12: oefentoetsen doen in examen-modus. | Engels 'mock' + Cito |
| 366 | 1 | public/rekenen-doorstroomtoets.html | Stap 4 (week 11-12): mock-Cito's in examen-modus. | Stap 4 (week 11-12): oefentoetsen in examen-modus. | Engels 'mock' + Cito |
| 367 | 1 | public/spelling-doorstroomtoets.html | De d/t-regel is de grootste struikelblok | De d/t-regel is het grootste struikelblok | 'struikelblok' is een het-woord |
| 368 | 1 | public/spelling-doorstroomtoets.html | Tussenletters: pannenkoek, koningsdag, zonnescherm. | Tussenletters: pannenkoek, Koningsdag, zonnescherm. | Koningsdag is een feestdag: hoofdletter (op een spellingpagina extra pijnlijk) |
| 369 | 1 | public/spelling-doorstroomtoets.html | (pannenkoek, koningsdag) | (pannenkoek, Koningsdag) | Koningsdag met hoofdletter |
| 370 | 1 | public/studievaardigheden-doorstroomtoets.html | maar de hoogste stáaf. | maar de hoogste staaf. | Accent op verkeerde plek ('stáaf') |
| 371 | 1 | public/tafels-oefenen.html | tafels worden voorondersteld | tafels worden verondersteld | Bestaat niet: 'verondersteld' |
| 372 | 1 | public/tafels-oefenen.html | korte herhalingen plant kennis dieper | korte herhalingen planten kennis dieper | Congruentie (meervoud) |
| 373 | 1 | public/tafels-oefenen.html | maar antwoord traag | maar antwoordt traag | d/t-fout (hij antwoordt) |
| 374 | 1 | public/vmbo-examens-downloaden.html | Ideaal voor: laatste examen-mock-week | Ideaal voor: de laatste oefenweek voor het examen | Engels 'mock' |
| 375 | 1 | public/vmbo-examens-downloaden.html | PDF voor de laatste examen-mock-week vlak voor de echte toets. | PDF voor de laatste oefenweek vlak voor het echte examen. | Engels 'mock' |
| 376 | 1 | public/vmbo-examens-downloaden.html | download voor laatste mock-week, | download voor de laatste oefenweek, | Engels 'mock' + ontbrekend lidwoord |
| 377 | 1 | public/voor-leerkrachten.html | Wat doet Charley, de AI-buddy? | Wat doet Charley, het AI-maatje? | Engels woord; elders heet Charley 'maatje' |
| 378 | 1 | public/voor-organisaties.html | met kinderen in de basisschool kunnen | met kinderen op de basisschool kunnen | 'op de basisschool' |
| 379 | 1 | public/voor-organisaties.html | de ouder krijgt een weekplan per e-mail | de ouder of verzorger krijgt een weekplan per e-mail | Huisregel: 'ouder of verzorger' |
| 380 | 1 | public/voor-organisaties.html | het kind geeft gewoon zijn voornaam in | het kind vult gewoon zijn voornaam in | 'ingeven' is Vlaams/onidiomatisch |
| 381 | 1 | public/welkom.html | Cito-oefenen, leerpaden voor groep 3 t/m 8 en VO, en leuke games. | Doorstroomtoets oefenen, leerpaden voor groep 3 t/m 8 en de middelbare school, en leuke spelletjes. | Cito → Doorstroomtoets; 'VO' en 'games' onnodig vakjargon/Engels |
| 382 | 1 | public/welkom.html | Cito-oefenen, leerpaden en leuke games | Doorstroomtoets oefenen, leerpaden en leuke spelletjes | Cito → Doorstroomtoets; Engels 'games' |
| 383 | 1 | public/welkom.html | content="Cito-oefenen, leerpaden voor groep 3 t/m 8 en VO. Gratis te proberen | content="Doorstroomtoets oefenen, leerpaden voor groep 3 t/m 8 en VO. Gratis te proberen | Cito → Doorstroomtoets (og:description) |
| 384 | 1 | public/welkom.html | content="Cito-oefenen + leerpaden | content="Doorstroomtoets oefenen + leerpaden | Cito → Doorstroomtoets (twitter:description) |
| 385 | 1 | public/werkwoordspelling-oefenen.html | dictee met je AI-buddy Charley | dictee met je AI-maatje Charley | Engels woord; elders 'maatje' |
| 386 | 1 | public/werkwoordspelling-oefenen.html | zegt je AI-buddy Charley | zegt je AI-maatje Charley | Engels woord; elders 'maatje' |
| 387 | 1 | public/wie-is-de-imposter.html | Wie getikt wordt is af en kijkt de ronde uit | Wie getikt wordt, is af en kijkt de ronde uit | Komma tussen twee persoonsvormen |
| 388 | 1 | scripts/buildPadLandingsPaginas.mjs | Wil je het antwoord en uitleg op 3 niveaus? | Wil je het antwoord en de uitleg op 3 niveaus? | Ontbrekend lidwoord |
| 389 | 1 | scripts/buildPadLandingsPaginas.mjs | Cito-strategie per tekstsoort. | strategie per tekstsoort voor de Doorstroomtoets. | Huisregel: Doorstroomtoets i.p.v. Cito (zichtbare intro + meta) |
| 390 | 1 | scripts/buildPadLandingsPaginas.mjs | kern-strategie voor Cito-begrijpend-lezen. | kernstrategie voor begrijpend lezen op de Doorstroomtoets. | Huisregel: Doorstroomtoets i.p.v. Cito |
| 391 | 1 | scripts/buildPadLandingsPaginas.mjs | Cito-statistiek groep 6-8 met directe voorbeelden. | statistiek voor de Doorstroomtoets, groep 6-8, met directe voorbeelden. | Huisregel: Doorstroomtoets i.p.v. Cito |
| 392 | 1 | scripts/buildPadLandingsPaginas.mjs | Cito-tijdlijn van jagers-verzamelaars tot nu. | tijdlijn van jagers-verzamelaars tot nu. | Huisregel: geen Cito in zichtbare tekst |
| 393 | 1 | scripts/buildPadLandingsPaginas.mjs | Cito-taal kern met 'on-' truc en context-zin. | kern van de taalvragen op de Doorstroomtoets, met de 'on-'-truc en een zin als context. | Huisregel: Doorstroomtoets i.p.v. Cito; loopt niet |
| 394 | 1 | scripts/buildPadLandingsPaginas.mjs | + Cito-strikvraag-trucs. | + trucs voor strikvragen op de Doorstroomtoets. | Huisregel: Doorstroomtoets i.p.v. Cito |
| 395 | 1 | scripts/buildPadLandingsPaginas.mjs | voor Cito-redactiesommen. | voor redactiesommen op de Doorstroomtoets. | Huisregel: Doorstroomtoets i.p.v. Cito |
| 396 | 1 | scripts/buildPadLandingsPaginas.mjs | voor Cito-meetkunde. | voor meetkunde op de Doorstroomtoets. | Huisregel: Doorstroomtoets i.p.v. Cito |
| 397 | 1 | src/App.jsx | 15 minuten geoefend — je verdiende 🪙 park tokens! | 15 minuten geoefend — je verdiende 🪙 munten voor je park! | Engels woord; in het park heten ze overal 'munten/muntjes' |
| 398 | 1 | src/components/AgeGate.jsx | …vragen we ook of een ouder er bij is. | …vragen we ook of een ouder of verzorger erbij is. | 'erbij' is één woord + huisregel 'ouder of verzorger' |
| 399 | 1 | src/components/AgeGate.jsx | E-mail van ouder (optioneel — helpt ons later contact te zoeken) | E-mail van ouder of verzorger (optioneel — dan kunnen we later contact opnemen) | 'contact zoeken' loopt niet + 'ouder of verzorger' |
| 400 | 1 | src/components/AgeGate.jsx | ✅ Mijn ouder is erbij — verder | ✅ Mijn ouder of verzorger is erbij — verder | Huisregel 'ouder of verzorger' (kind kan bij voogd/pleegouder wonen) |
| 401 | 1 | src/components/BegrijpendLezenPage.jsx | Begrijpend Lezen | Begrijpend lezen | Hoofdletter midden in titel; elders 'Begrijpend lezen' |
| 402 | 1 | src/components/CitoLeerpadToets.jsx | Goede antwoord: … | Goed antwoord: … | Grammatica: zonder lidwoord 'Goed antwoord' (zoals in ResultsPage) |
| 403 | 1 | src/components/CitoLeerpadToets.jsx | 60 minuten countdown (zoals de echte Doorstroomtoets) | 60 minuten met een klok die aftelt (zoals de echte Doorstroomtoets) | Engels woord 'countdown' waar Nederlands kan |
| 404 | 1 | src/components/CitoPage.jsx | Wereld Oriëntatie | Wereldoriëntatie | Spelling: wereldoriëntatie is één woord (info-blok op dezelfde pagina schrijft het al goed) |
| 405 | 1 | src/components/DagkaartGenerator.jsx | Een branded Leerkwartier-kaart van de vraag van de dag… | Een Leerkwartier-kaart in huisstijl van de vraag van de dag… | Engels woord waar Nederlands kan |
| 406 | 1 | src/components/HomePage.jsx | Een kwartier per dag leren, een leven lang slimmer.. Gratis oefenen… | Een kwartier per dag leren, een leven lang slimmer. Gratis oefenen… | Slogan eindigt al op een punt → dubbele punt 'slimmer.. Gratis' |
| 407 | 1 | src/components/HomePage.jsx | 15 minuten per dag leren, een leven lang slimmer. | Een kwartier per dag leren, een leven lang slimmer. | Slogan exact houden (staat in uitgezette onboarding, nu niet zichtbaar) |
| 408 | 1 | src/components/KoppelcodeBanner.jsx | Geen verbinding met de koppel-server. Probeer het zo nog eens. | Even geen verbinding. Probeer het zo nog eens. | Dev-jargon 'koppel-server' in kindertekst |
| 409 | 1 | src/components/learn/PiramideInhoud.jsx | Zijde van de grondvlak: 4 m | Zijde van het grondvlak: 4 m | Lidwoord: het grondvlak (elders in hetzelfde scherm ook 'grondvlak' als het-woord) |
| 410 | 1 | src/components/learn/RekenOefenRonde.jsx | [Check] | [Nakijken] | Engels woord op knop voor jonge kinderen; gewoon Nederlands kan |
| 411 | 1 | src/components/ObliteratorGame.jsx | YES IM SAFE! | YES I'M SAFE! | Apostrof ontbreekt in Engelse uitroep (spel-sfeer blijft) |
| 412 | 1 | src/components/ObliteratorGame.jsx | Skip — speel als Speler | Overslaan — speel als Speler | Engels woord in knop waar Nederlands vanzelfsprekend is |
| 413 | 1 | src/components/ObliteratorGame.jsx | Dubbele — al verzameld | Dubbel — al verzameld | Bijvoeglijk naamwoord zonder zelfstandig naamwoord: 'Dubbel' |
| 414 | 1 | src/components/ObliteratorGame.jsx | ⚡ Ability: Stroomstoot — … | ⚡ Kracht: Stroomstoot — … | Engels label; elders in het spel heet dit 'kracht' |
| 415 | 1 | src/components/ObliteratorGame.jsx | Open fullscreen | Volledig scherm openen | Engelse knop-tooltip; Nederlands is vanzelfsprekend |
| 416 | 1 | src/components/ObliteratorGame.jsx | Anders verschijn je in de high-score als "Speler" | Anders verschijn je in de highscorelijst als "Speler" | 'in de high-score' loopt niet; bedoeld is de lijst |
| 417 | 1 | src/components/ObliteratorGame.jsx | Galapagos eilanden | Galápagoseilanden | Spelling aardrijkskundige naam (één woord, met accent) |
| 418 | 1 | src/components/ParkBezoek.jsx | Loop rond met de joystick (of de pijltjes) en kijk rustig rond — sleep om te draaien, knijp om te zoomen. | Loop rond met de joystick (of de pijltjes) en kijk rustig om je heen — sleep om te draaien, knijp om te zoomen. | 'rond' twee keer in één zin ('Loop rond … kijk rustig rond') |
| 419 | 1 | src/components/RondleidingPage.jsx | Gele bron-banner laat zien welk examen en welke vraag. | Een gele bron-banner laat zien om welk examen en welke vraag het gaat. | Zin mist lidwoord en werkwoord-afsluiting |
| 420 | 1 | src/components/RondleidingPage.jsx | Ouder | Ouder of verzorger | Huisregel: nooit alléén 'ouder' als doelgroep-benoeming |
| 421 | 1 | src/components/SelfStudy.jsx | Handig voor basisschool en VO, maar ook voor MBO- en HBO-studenten … | Handig voor basisschool en middelbare school, maar ook voor MBO- en HBO-studenten … | Afkorting 'VO' onbekend voor kinderen; huisregel: 'VO' → 'middelbare school' |
| 422 | 1 | src/components/SelfStudy.jsx | Basisschool & VO | Basisschool & middelbare school | Afkorting 'VO' onbekend voor kinderen; huisregel: 'VO' → 'middelbare school' |
| 423 | 1 | src/components/StudentHome.jsx | 📩 Laat je ouder je voortgang volgen | 📩 Laat je ouder of verzorger je voortgang volgen | Huisregel 'ouder of verzorger' (kind-tekst) |
| 424 | 1 | src/components/StudentHome.jsx | Andere niveau? Bekijk middelbaar → | Ander niveau? Bekijk middelbaar → | 'het niveau' → 'ander niveau' |
| 425 | 1 | src/components/StudentHome.jsx | Andere niveau? Bekijk basisschool → | Ander niveau? Bekijk basisschool → | 'het niveau' → 'ander niveau' |
| 426 | 1 | src/components/StudentHome.jsx | Kies bovenaan een vak en tik 📚 Leren voor uitleg… | Kies bovenaan een vak en tik op 📚 Leren voor uitleg… | Voorzetsel 'op' ontbreekt |
| 427 | 1 | src/components/TafelbladenPage.jsx | …plus een mix-blad, en een invulbaar tafeldiploma 🏆. | …plus een mix-blad en een invulbaar tafeldiploma 🏆. | Zonder tempo-toets staat er een komma vóór 'en': 'plus een mix-blad, en een invulbaar tafeldiploma' |
| 428 | 1 | src/components/UpdateBanner.jsx | Tik vernieuwen voor de laatste functies | Tik op Vernieuw voor de laatste functies | Woord mist + knop heet 'Vernieuw' |
| 429 | 1 | src/components/ZookwartierGame.jsx | Alle dieren gevoerd — je vond 2 verstopt dieren! ❤️ | Alle dieren gevoerd — je vond 2 verstopte dieren! ❤️ | Meervoud fout: 'je vond 2 verstopt dieren' |
| 430 | 1 | src/components/ZookwartierGame.jsx | Wauw, een echt bot! Die bewaar ik als schat. | Wauw, een echt bot! Dat bewaar ik als schat. | 'het bot' → 'dat', niet 'die' |
| 431 | 1 | src/components/ZookwartierGame.jsx | Dat is niet van jou - je kunt … | Dat is niet van jou — je kunt … | Streepje inconsequent; zelfde melding elders met gedachtestreepje |
| 432 | 1 | src/components/ZookwartierGame.jsx | Welkom Sam! Tik hieronder op 🦊 Dieren … | Welkom, Sam! Tik hieronder op 🦊 Dieren … | Komma voor aanspreeknaam ontbreekt |
| 433 | 1 | src/components/ZookwartierGame.jsx | (vaste kost / dag) | (vaste kosten per dag) | 'vaste kost' is Vlaams; in het Nederlands 'vaste kosten' |
| 434 | 1 | src/constants.js | Alle extra's (Familie én Pro) gratis t/m 31 december 2026 — geen betaling, gewoon proberen. | Alle Familie-extra's gratis t/m 31 december 2026 — geen betaling, gewoon proberen. | 'Pro' bestaat niet meer (tekst staat klaar, nu niet getoond) |
| 435 | 1 | src/features/account/MijnPagina.jsx | Nog 16 weken tot de doorstroomtoets | Nog 16 weken tot de Doorstroomtoets | Eigennaam Doorstroomtoets met hoofdletter (zoals elders in de app) |
| 436 | 1 | src/features/account/MijnPagina.jsx | Oefen in doorstroomtoets-stijl → | Oefen in Doorstroomtoets-stijl → | Eigennaam Doorstroomtoets met hoofdletter |
| 437 | 1 | src/features/account/MijnPagina.jsx | vooral voor oudere leerlingen, ouders en leerkrachten. | vooral voor oudere leerlingen, ouders, verzorgers en leerkrachten. | Niet alleen 'ouders' |
| 438 | 1 | src/features/account/vakkenPerGroep.js | vast onderdeel van de doorstroomtoets (februari!) | vast onderdeel van de Doorstroomtoets (februari!) | Eigennaam Doorstroomtoets met hoofdletter (maand: zie twijfel) |
| 439 | 1 | src/features/dictee/DicteePage.jsx | Schrijf op het woord dat je hoorde. | Schrijf het woord op dat je hoorde. | Woordvolgorde loopt niet ('Schrijf op het woord dat…') |
| 440 | 1 | src/features/dictee/DicteePage.jsx | (vertaalsleutel) | (vertaalsleutel) | Vertaalsleutel meeverhuisd met de herstelde zin (anders valt de vertaling voor nieuwkomers weg). [eindredactie] |
| 441 | 1 | src/features/dictee/WerkwoordenPage.jsx | △ vd | △ v.d. | Inconsequente afkorting naast 't.t.' en 'v.t.' |
| 442 | 1 | src/features/familie/familieFeatures.js | Zit nu in je vrijdag-weekmail: van cijfer naar to-do — … | Zit nu in je vrijdag-weekmail: van cijfer naar takenlijstje — … | Engels woord waar gewoon Nederlands kan |
| 443 | 1 | src/features/familie/paraatheid.js | Taal & lezen ziet er sterk uit — blijf onderhouden. | Taal & lezen ziet er sterk uit — blijf het bijhouden. | 'blijf onderhouden' mist een lijdend voorwerp, loopt niet |
| 444 | 1 | src/features/familie/paraatheid.js | taal & lezen vraagt aandacht — hier valt de meeste winst te halen. | Taal & lezen vraagt aandacht — hier valt de meeste winst te halen. | Zin begint met kleine letter (lowercase label aan zinsbegin), anders dan de groene/oranje zinnen |
| 445 | 1 | src/features/familie/TrotsMomentPagina.jsx | … het eerste moment (foutloos een pad afronden) is live. Meer mijlpalen (streak, onderwerp gehaald) komen erbij. | … het eerste moment (foutloos een onderwerp afronden) is live. Meer mijlpalen (elke dag oefenen, onderwerp gehaald) komen erbij. | Dev-jargon 'pad' en Engels 'streak' in oudertekst |
| 446 | 1 | src/features/learn/BronTekstInteractief.jsx | [Wis alle] | [Wis alles] | Onvolledig: 'Wis alle' mist een woord |
| 447 | 1 | src/features/learn/KwartierPauze.jsx | Ik vraag het niet meer deze sessie. | Ik vraag het deze keer niet meer. | 'sessie' is jargon; woordvolgorde stroef |
| 448 | 1 | src/features/learn/LearnPath.jsx | Niet erg — je kunt dit terug-vinden bij deel 2. | Niet erg — je kunt dit terugvinden bij deel 2. | Spelling: terugvinden is één woord zonder streepje |
| 449 | 1 | src/features/learn/LearnPath.jsx | 📖 Leg uit (officiële uitleg uit correctievoorschrift) | 📖 Leg uit (officiële uitleg uit het correctievoorschrift) | Lidwoord ontbreekt |
| 450 | 1 | src/features/learn/LearnPath.jsx | 📖 Leg uit (officiële uitleg uit correctievoorschrift) | 📖 Leg uit (officiële uitleg uit het correctievoorschrift) | Lidwoord ontbreekt (tweede plek, na fout antwoord) |
| 451 | 1 | src/features/learn/LearnPath.jsx | Je kunt elke stap nog eens herhalen door erop te klikken hieronder. | Je kunt elk deel nog eens herhalen door hieronder erop te klikken. | Woordvolgorde loopt niet ('door erop te klikken hieronder'); 'stap' → 'deel' zoals elders op dit scherm |
| 452 | 1 | src/features/learn/LearnPath.jsx | … klik dan 'Stap voltooid' onderin. | … klik dan hieronder op 'Stap voltooid'. | De knop staat direct onder de melding in dezelfde kaart, niet 'onderin'; 'klik op' ontbrak |
| 453 | 1 | src/features/learn/LearnPathsHub.jsx | Mis je iets? Geef het door via "Tip aan de maker" op de homepage. | Mis je iets? Geef het door via "Tip aan de maker" op de startpagina. | Engels woord waar Nederlands kan |
| 454 | 1 | src/features/learn/MeeBezig.jsx | Jij kan de eerste zijn die zich aanmeldt. | Jij kunt de eerste zijn die zich aanmeldt. | Spelling/stijl: jij kunt |
| 455 | 1 | src/features/learn/WoordHulp.jsx | 📚 Er is een hele les over dit! → Breuken | 📚 Er is een hele les over dit woord! → Breuken | 'over dit!' loopt niet (verwijzing mist zelfstandig naamwoord) |
| 456 | 1 | src/features/mastery/DailyChallengeBanner.jsx | Streak gestart 🎉 | Reeks gestart 🎉 | Engels; de app zegt elders 'reeks' (KwartierPauze, einde-scherm) |
| 457 | 1 | src/features/mastery/DailyChallengeBanner.jsx | STREAK NIET VERBREKEN | REEKS NIET VERBREKEN | Engels; consistent met 'reeks' elders |
| 458 | 1 | src/features/mastery/DailyChallengeBanner.jsx | Een paar vragen om de streak te houden | Een paar vragen om je reeks te houden | Engels; consistent met 'reeks' elders |
| 459 | 1 | src/features/mastery/DailyChallengeBanner.jsx | Begin je streak — een paar vragen, klein en concreet. | Begin je reeks — een paar vragen, klein en concreet. | Engels; consistent met 'reeks' elders |
| 460 | 1 | src/features/mastery/MyMastery.jsx | Hi Sara | Hoi Sara | Engels; elders in de app 'Hoi' |
| 461 | 1 | src/features/oefenboekje/OefenboekjeTrigger.jsx | breuken ging nog niet vlot. Print een oefenboekje op maat … | Het onderwerp breuken ging nog niet vlot. Print een oefenboekje op maat … | Zin begint met kleine letter ('breuken ging…'), meervoud/enkelvoud loopt niet |
| 462 | 1 | src/features/onboarding/StartKwartier.jsx | Klaar voor de doorstroomtoets. | Klaar voor de Doorstroomtoets. | Naam met hoofdletter, zoals overal in de app |
| 463 | 1 | src/features/onboarding/StartKwartier.jsx | In groep 7 en 8 oefen je hier de doorstroomtoets… | In groep 7 en 8 oefen je hier de Doorstroomtoets… | Naam met hoofdletter |
| 464 | 1 | src/features/ouder/Gezinsstart.jsx | Waar ligt de nadruk op? | Waar moet de nadruk op liggen? | Dubbel voorzetsel ('Waar ... op' + 'ligt de nadruk op') |
| 465 | 1 | src/features/ouder/Gezinsstart.jsx | Je gezin zit aan de 3 kinderen. | Je gezin heeft al het maximum van 3 kinderen. | 'zit aan de 3 kinderen' is spreektaal en zegt niet dat het een maximum is |
| 466 | 1 | src/features/ouder/ouderadvies/teksten.js | Staat klaar op dit apparaat. Sam ziet het hier als Sam gaat oefenen. | Staat klaar op dit apparaat. Sam ziet het hier bij de volgende keer oefenen. | Naam twee keer in één zin; 'als' leest als 'in de rol van' |
| 467 | 1 | src/features/ouder/OuderInzicht.jsx | Begrijpend Lezen | Begrijpend lezen | Geen hoofdletter midden in vaknaam; elders 'Begrijpend lezen' |
| 468 | 1 | src/features/ouder/OuderInzicht.jsx | Werkt ook offline (PWA) | Werkt ook offline | Dev-jargon 'PWA' zegt een ouder of verzorger niets |
| 469 | 1 | src/features/ouder/OuderInzicht.jsx | Hoi Sam! Open Leerkwartier (leerkwartier.app) tik op 'Code gekregen?' | Hoi Sam! Open Leerkwartier (leerkwartier.app), tik op 'Code gekregen?' | Komma ontbreekt in WhatsApp-bericht aan kind |
| 470 | 1 | src/features/ouder/OuderInzicht.jsx | Open Leerkwartier (leerkwartier.app) tik op 'Code gekregen?' | Open Leerkwartier (leerkwartier.app), tik op 'Code gekregen?' | Komma ontbreekt in e-mail met koppelcode |
| 471 | 1 | src/features/practice/PlayQuiz.jsx | ✅ GOEDE ANTWOORD | ✅ GOED ANTWOORD | Grammatica: zonder lidwoord 'Goed antwoord' |
| 472 | 1 | src/features/practice/ResultsPage.jsx | Log in om je voortgang en streak bij te houden | Log in om je voortgang en je reeks bij te houden | Engels woord 'streak' in kindertekst; elders in de app heet het '🔥-reeks' |
| 473 | 1 | src/features/practice/ResultsPage.jsx | 💪 Wereld Oriëntatie verdient meer oefening | 💪 Wereldoriëntatie verdient meer oefening | Spelling: wereldoriëntatie is één woord |
| 474 | 1 | src/features/practice/ResultsPage.jsx | Je scoort goed hier! Ga nu Wereld Oriëntatie oefenen. | Je scoort goed hier! Ga nu Wereldoriëntatie oefenen. | Spelling: wereldoriëntatie is één woord |
| 475 | 1 | src/features/practice/TextbookQuiz.jsx | Per onderwerp · zoek topic | Per onderwerp · zoek onderwerp | Engels woord 'topic' waar Nederlands kan |
| 476 | 1 | src/features/teacher/KlasParkcode.jsx | … en het aantal imposters. | … en het aantal bedriegers. | Engels woord; het spel heet zelf 'Wie is de bedrieger?' |
| 477 | 1 | src/features/teacher/StudentProgress.jsx | 🏆 Kijk mijn super resultaat op Leerkwartier! | 🏆 Bekijk mijn superresultaat op Leerkwartier! | 'Kijk mijn' loopt niet; 'superresultaat' is één woord |
| 478 | 1 | src/features/teacher/StudentProgress.jsx | 🎉 Deel je super resultaat! | 🎉 Deel je superresultaat! | 'superresultaat' is één woord |
| 479 | 1 | src/features/teacher/StudentProgress.jsx | 🎉 Deel je super resultaat! | 🎉 Deel je superresultaat! | 'superresultaat' is één woord (tweede plek) |
| 480 | 1 | src/features/teacher/StudentProgress.jsx | kan jij dit verslaan? | kun jij dit verslaan? | Consistent met 'Kun jij mij verslaan?' elders op het scherm |
| 481 | 1 | src/features/teacher/StudentProgress.jsx | Mijn Voortgang | Mijn voortgang | Geen hoofdletter midden in een Nederlandse titel |
| 482 | 1 | src/features/teacher/TeacherComponents.jsx | Mijn Klassen | Mijn klassen | Geen hoofdletter midden in een Nederlandse titel |
| 483 | 1 | src/features/teacher/TeacherComponents.jsx | Nieuwe Toets | Nieuwe toets | Geen hoofdletter midden in een Nederlandse titel |
| 484 | 1 | src/features/teacher/TeacherComponents.jsx | WhatsApp nummer (bijv. 0612345678) | WhatsApp-nummer (bijv. 0612345678) | Samenstelling met koppelteken |
| 485 | 1 | src/features/teacher/TeacherComponents.jsx | WhatsApp nummer (bijv. 0612345678) | WhatsApp-nummer (bijv. 0612345678) | Samenstelling met koppelteken |
| 486 | 1 | src/features/teacher/TeacherComponents.jsx | (* = correct antwoord) | (* = het goede antwoord) | 'correct antwoord' mist buigings-e; elders in de app 'het goede antwoord' |
| 487 | 1 | src/features/teacher/TeacherComponents.jsx | Na aanmaken verschijnt "📧 Mail klas" knop in je dashboard. | Na aanmaken verschijnt de knop "📧 Mail klas" bij je toets. | Lidwoord ontbreekt; 'dashboard' is Engels — de knop staat bij de toets in 'Jouw toetsen' |
| 488 | 1 | src/features/teacher/TeacherHome.jsx | Nieuwe Toets | Nieuwe toets | Geen hoofdletter midden in een Nederlandse knop |
| 489 | 1 | src/features/teacher/TeacherHome.jsx | Mijn Klassen | Mijn klassen | Geen hoofdletter midden in een Nederlandse knop |
| 490 | 1 | src/features/teacher/TeacherHome.jsx | Nieuwe Takenlijst | Nieuwe takenlijst | Geen hoofdletter midden in een Nederlandse knop |
| 491 | 1 | src/features/zoo/buddies.js | Fout gemaakt? Een fenix staat altijd weer op. Wij ook! | Fout gemaakt? Een feniks staat altijd weer op. Wij ook! | Spelling (Groene Boekje): feniks |
| 492 | 1 | src/features/zoo/economieLeermomenten.js | Dit is je hele loon vóórdat er iets af gaat. | Dit is je hele loon vóórdat er iets afgaat. | Spelling: 'afgaat' is één woord |
| 493 | 1 | src/features/zoo/game/ImposterGame.jsx | … die is af en kijkt mee vanuit de zeppelin. Wie uitgestemd wordt ook. | … die is af en kijkt mee vanuit de zeppelin. Wie uitgestemd wordt, ook. | Komma ontbreekt; zin leest nu als 'wordt ook uitgestemd' |
| 494 | 1 | src/features/zoo/game/ImposterGame.jsx | · 👀 stond dichtbij toen iemand af ging | · 👀 stond dichtbij toen iemand afging | Spelling: 'afging' is één woord |
| 495 | 1 | src/features/zoo/game/ImposterGame.jsx | 🏃 Ga dichter naar Mila | 🏃 Ga dichter bij Mila staan | 'dichter naar iemand' loopt niet; 'dichter bij … staan' |
| 496 | 1 | src/features/zoo/leerpadLint.js | Brugklas & examens — landmarks · tot parabolen | Brugklas & examens — bouwwerken · tot parabolen | Engels woord in kindertekst; Nederlands kan gewoon |
| 497 | 1 | src/features/zoo/unlocks.js | Deze dino kun je niet kopen, alleen vrij spelen door te leren. | Deze dino kun je niet kopen, alleen vrijspelen door te leren. | Spelling: werkwoord 'vrijspelen' is één woord (vgl. 'vrijspeel-dino's' elders) |
| 498 | 1 | src/shared/niveauIndicatie.js | …niet als oordeel over uw kind. | …niet als oordeel over je kind. | Huisregel: geen 'u', ouderteksten in je-vorm |
| 499 | 1 | src/shared/usePwaInstall.js | Firefox ondersteunt geen install | Firefox kan dit niet installeren | Engels woord 'install' in kop |
| 500 | 1 | src/subscription/PaywallGate.jsx | … vereist premium | … is een betaalde extra | 'premium' botst met huisregel (geen Premium); schermlezer-tekst |
| 501 | 1 | src/subscription/PaywallGate.jsx | Onbeperkt leerpaden | Onbeperkt oefenen | Loopt niet ('Onbeperkt leerpaden') + dev-jargon; proPlan zegt 'Onbeperkt oefenen per dag' |

### B. Twijfellijst
Volledig in `docs/audit/TWIJFEL-schermen.md` (~301 punten; eerst de eindredactie, dan per groep).

### Pagina-overzicht, testlog en bestandslijst

### B1. App-routes (src/app/routes.js) — kliktocht op vers apparaat, telefoon 390×844

| # | route | pagina-key | tekens tekst | status vóór | na herstel |
|---|---|---|---|---|---|
| 1 | / | home | 1124 | gerenderd | opnieuw gefotografeerd (r01-home.png) |
| 2 | /v2 | home-v2 | 772 | gerenderd | — |
| 3 | /v3 | home-v3 | 771 | gerenderd | — |
| 4 | /leren | learn-paths-hub | 931 | gerenderd | opnieuw gefotografeerd (r02-learn-paths-hub.png) |
| 5 | /leren/pad | learn-path | 931 | gerenderd | — |
| 6 | /leerlijn | curriculum | 99 | ⚠️ (vrijwel) leeg | — |
| 7 | /komt-eraan | learn-meebezig | 147 | ⚠️ (vrijwel) leeg | — |
| 8 | /voortgang | my-mastery | 265 | gerenderd | — |
| 9 | /mijn | mijn-pagina | 1362 | gerenderd | opnieuw gefotografeerd (r03-mijn-pagina.png) |
| 10 | /kampioenen | kampioenen | 471 | gerenderd | — |
| 11 | /scorebord | leaderboard | 334 | gerenderd | — |
| 12 | /voortgang/leerling | student-progress | 240 | gerenderd | — |
| 13 | /voortgang/leerkracht | teacher-progress | 249 | gerenderd | — |
| 14 | /leerling | student-home | 1124 | gerenderd | — |
| 15 | /leerkracht | teacher-home | 3194 | gerenderd | opnieuw gefotografeerd (r04-teacher-home.png) |
| 16 | /ouder | ouder-dashboard | 728 | gerenderd | opnieuw gefotografeerd (r05-ouder-dashboard.png) |
| 17 | /zelfstudie | self-study | 927 | gerenderd | opnieuw gefotografeerd (r06-self-study.png) |
| 18 | /oefenen | textbook | 289 | gerenderd | — |
| 19 | /cito | cito | 2339 | gerenderd | opnieuw gefotografeerd (r07-cito.png) |
| 20 | /examens | examens | 915 | gerenderd | opnieuw gefotografeerd (r08-examens.png) |
| 21 | /herkansing | herkansing | 1490 | gerenderd | — |
| 22 | /doorstroomtoets-oefentoets | cito-leerpad-toets | 685 | gerenderd | opnieuw gefotografeerd (r09-cito-leerpad-toets.png) |
| 23 | /rondleiding | rondleiding | 1790 | gerenderd | opnieuw gefotografeerd (r10-rondleiding.png) |
| 24 | /oefenpakket | oefenpakket | 3449 | gerenderd | opnieuw gefotografeerd (r11-oefenpakket.png) |
| 25 | /leesladder | leesladder | 4092 | gerenderd | opnieuw gefotografeerd (r12-leesladder.png) |
| 26 | /dictee | dictee | 1180 | gerenderd | opnieuw gefotografeerd (r13-dictee.png) |
| 27 | /werkwoorden | werkwoorden | 1383 | gerenderd | opnieuw gefotografeerd (r14-werkwoorden.png) |
| 28 | /vandaag-kwartier | vandaag-kwartier | 223 | gerenderd | opnieuw gefotografeerd (r15-vandaag-kwartier.png) |
| 29 | /printen | printen | 4307 | gerenderd | opnieuw gefotografeerd (r16-printen.png) |
| 30 | /tafelbladen | tafelbladen | 10655 | gerenderd | opnieuw gefotografeerd (r17-tafelbladen.png) |
| 31 | /redactiebladen | redactiebladen | 8311 | gerenderd | opnieuw gefotografeerd (r18-redactiebladen.png) |
| 32 | /dictees | dictees | 9210 | gerenderd | — |
| 33 | /familie | familie | 2868 | gerenderd | opnieuw gefotografeerd (r19-familie.png) |
| 34 | /familie/paraatheid | paraatheid | 1274 | gerenderd | — |
| 35 | /oefenboekje | oefenboekje | 1928 | gerenderd | — |
| 36 | /diploma | diploma | 1610 | gerenderd | opnieuw gefotografeerd (r20-diploma.png) |
| 37 | /ouderkaart | ouderkaart | 2630 | gerenderd | opnieuw gefotografeerd (r21-ouderkaart.png) |
| 38 | /ouderadvies | ouderadvies | 1124 | gerenderd | — |
| 39 | /weekschema | weekschema | 1613 | gerenderd | opnieuw gefotografeerd (r22-weekschema.png) |
| 40 | /trots | trots | 1064 | gerenderd | opnieuw gefotografeerd (r23-trots.png) |
| 41 | /vonk | vonk | 1570 | gerenderd | opnieuw gefotografeerd (r24-vonk.png) |
| 42 | /brugklas | brugklas | 4828 | gerenderd | opnieuw gefotografeerd (r25-brugklas.png) |
| 43 | /dagkaart | dagkaart | 499 | gerenderd | — |
| 44 | /tafels | tafels | 433 | gerenderd | — |
| 45 | /redactiesommen | redactiesommen | 377 | gerenderd | — |
| 46 | /spelling | spelling | 434 | gerenderd | — |
| 47 | /woordenschat | woordenschat | 427 | gerenderd | — |
| 48 | /begrijpend-lezen | begrijpend-lezen | 525 | gerenderd | — |
| 49 | /quiz | play | 1124 | gerenderd | — |
| 50 | /resultaat | results | 1124 | gerenderd | opnieuw gefotografeerd (r26-results.png) |
| 51 | /obliterator | obliteratorPlay | 274 | gerenderd | — |
| 52 | /supporter | supporterGame | 758 | gerenderd | — |
| 53 | /dierentuin | zoo | 1214 | gerenderd | opnieuw gefotografeerd (r27-zoo.png) |
| 54 | /spelletje | spelletje | 219 | gerenderd | opnieuw gefotografeerd (r28-spelletje.png) |
| 55 | /nieuwkomers | nieuwkomers | 3647 | gerenderd | opnieuw gefotografeerd (r29-nieuwkomers.png) |
| 56 | /spelletje/imposter | imposter | 458 | gerenderd | opnieuw gefotografeerd (r30-imposter.png) |
| 57 | /parken | galerij | 406 | gerenderd | opnieuw gefotografeerd (r31-galerij.png) |
| 58 | /maatje | maatje | 402 | gerenderd | opnieuw gefotografeerd (r32-maatje.png) |
| 59 | /leerkracht/werkblad | werkblad | 534 | gerenderd | — |
| 60 | /leerkracht/toets-maken | create-quiz | 794 | gerenderd | — |
| 61 | /leerkracht/toets-preview | quiz-preview | 147 | ⚠️ (vrijwel) leeg | — |
| 62 | /leerkracht/klassen | class-manager | 210 | gerenderd | — |
| 63 | /lobby | lobby | 337 | gerenderd | — |
| 64 | /pro | pro | 3464 | gerenderd | — |
| 65 | /upgrade | upgrade | 99 | ⚠️ (vrijwel) leeg | — |
| 66 | /admin/feedback | admin-feedback | 195 | ⚠️ (vrijwel) leeg | — |
| 67 | /admin/stats | admin-stats | 136 | ⚠️ (vrijwel) leeg | — |
| 68 | /admin/ai-referrers | admin-ai-referrers | 552 | gerenderd | — |
| 69 | /tips | wishes | 1201 | gerenderd | opnieuw gefotografeerd (r33-wishes.png) |
| 70 | /actie | actie | 742 | gerenderd | — |
| 71 | /dank | dank | 635 | gerenderd | — |
| 72 | /vandaag | vandaag | 276 | gerenderd | — |
| 73 | /kwartiercheck | kwartiercheck | 1861 | gerenderd | opnieuw gefotografeerd (r34-kwartiercheck.png) |
| 74 | /start | start-kwartier | 303 | gerenderd | opnieuw gefotografeerd (r35-start-kwartier.png) |
| 75 | /klas | klas | 769 | gerenderd | opnieuw gefotografeerd (r36-klas.png) |
| 76 | /klassikaal | klassikaal | 1259 | gerenderd | — |
| 77 | /klassikaal/bord | digibord | 1259 | gerenderd | — |

### B2. Statische pagina's gelezen (76 in public/ + 43 drukwerk)

- public/abonnement.html — **hersteld**
- public/aftelweken.html — **hersteld**
- public/bedankt.html — gelezen, geen herstel
- public/begrijpend-lezen-doorstroomtoets.html — **hersteld**
- public/begrijpend-lezen-oefenen.html — **hersteld**
- public/cito-eindtoets-oefenen.html — **hersteld**
- public/cito-toets-oefenen.html — **hersteld**
- public/contact.html — **hersteld**
- public/dictee-groep-4.html — gelezen, geen herstel
- public/dictee-groep-5.html — gelezen, geen herstel
- public/dictee-groep-6.html — gelezen, geen herstel
- public/dictee-groep-7.html — gelezen, geen herstel
- public/dictee-groep-8.html — gelezen, geen herstel
- public/dictee-oefenen.html — **hersteld**
- public/doorgeven.html — **hersteld**
- public/doorstroomtoets-2027-gids.html — **hersteld**
- public/doorstroomtoets-amn.html — **hersteld**
- public/doorstroomtoets-cito-leerling-in-beeld.html — **hersteld**
- public/doorstroomtoets-dia.html — **hersteld**
- public/doorstroomtoets-iep.html — **hersteld**
- public/doorstroomtoets-oefenen-groep-7.html — **hersteld**
- public/doorstroomtoets-oefenen.html — **hersteld**
- public/doorstroomtoets-route-8.html — **hersteld**
- public/gratis-alternatief-squla.html — gelezen, geen herstel
- public/gratis-bijles.html — **hersteld**
- public/gratis.html — **hersteld**
- public/klaar-voor-de-brugklas.html — **hersteld**
- public/klassenregels.html — gelezen, geen herstel
- public/klassikaal-digibord.html — **hersteld**
- public/kwartiercheck.html — **hersteld**
- public/leergeld-flyer.html — **hersteld**
- public/leerkracht-takenlijst.html — gelezen, geen herstel
- public/leermaatje.html — **hersteld**
- public/leesladder.html — **hersteld**
- public/leren-15-minuten.html — **hersteld**
- public/maak-icoon.html — **hersteld**
- public/mail-scholen.html — gelezen, geen herstel
- public/nieuwkomers-ar.html — gelezen, geen herstel
- public/nieuwkomers-bg.html — gelezen, geen herstel
- public/nieuwkomers-en.html — gelezen, geen herstel
- public/nieuwkomers-handleiding.html — gelezen, geen herstel
- public/nieuwkomers-nederlands-leren.html — **hersteld**
- public/nieuwkomers-ro.html — gelezen, geen herstel
- public/nieuwkomers-tr.html — gelezen, geen herstel
- public/nieuwkomers-uk.html — gelezen, geen herstel
- public/oefenpakket.html — gelezen, geen herstel
- public/onderwijs-begrippen.html — **hersteld**
- public/over.html — **hersteld**
- public/park.html — **hersteld**
- public/privacy.html — **hersteld**
- public/rekenen-doorstroomtoets.html — **hersteld**
- public/rondleiding.html — gelezen, geen herstel
- public/samen-bouwen.html — gelezen, geen herstel
- public/spelling-doorstroomtoets.html — **hersteld**
- public/squla-alternatief.html — gelezen, geen herstel
- public/start-via-ai.html — gelezen, geen herstel
- public/studievaardigheden-doorstroomtoets.html — **hersteld**
- public/studiezalen.html — gelezen, geen herstel
- public/tafels-oefenen.html — **hersteld**
- public/uitleg-thuis.html — gelezen, geen herstel
- public/vlaanderen.html — gelezen, geen herstel
- public/vmbo-examens-downloaden.html — **hersteld**
- public/vmbo-examens-oefenen.html — **hersteld**
- public/voor-leerkrachten.html — **hersteld**
- public/voor-organisaties.html — **hersteld**
- public/voorbeeld-kinderhulp.html — gelezen, geen herstel
- public/voorlezen.html — gelezen, geen herstel
- public/voorlopig-schooladvies.html — gelezen, geen herstel
- public/voorwaarden-organisaties.html — gelezen, geen herstel
- public/voorwaarden.html — **hersteld**
- public/weekpakket.html — gelezen, geen herstel
- public/welkom.html — **hersteld**
- public/werkwoordspelling-oefenen.html — **hersteld**
- public/wie-is-de-imposter.html — **hersteld**
- public/woordenschat-doorstroomtoets.html — **hersteld**
- public/zomerdip-voorkomen.html — gelezen, geen herstel
- public/drukwerk/_template-flyer-b1.html — **hersteld**
- public/drukwerk/begeleidend-briefje.html — gelezen, geen herstel
- public/drukwerk/dia-VBROTTERDAM2027.html — gelezen, geen herstel
- public/drukwerk/flyer-ALKMAAR2027.html — **hersteld**
- public/drukwerk/flyer-ALMELO2027-logo.html — gelezen, geen herstel
- public/drukwerk/flyer-ALMELO2027.html — gelezen, geen herstel
- public/drukwerk/flyer-BREDA2027.html — **hersteld**
- public/drukwerk/flyer-BUURTGEZINNEN2027-A.html — gelezen, geen herstel
- public/drukwerk/flyer-BUURTGEZINNEN2027-B.html — gelezen, geen herstel
- public/drukwerk/flyer-BUURTGEZINNEN2027-C.html — gelezen, geen herstel
- public/drukwerk/flyer-BUURTGEZINNEN2027.html — gelezen, geen herstel
- public/drukwerk/flyer-BUURTGEZINNEN2027.template.html — **hersteld**
- public/drukwerk/flyer-DONGEN2027-drukwerk.html — **hersteld**
- public/drukwerk/flyer-DONGEN2027.html — **hersteld**
- public/drukwerk/flyer-HAARLEMMERMEER2027-DRUK.html — **hersteld**
- public/drukwerk/flyer-HAARLEMMERMEER2027.html — **hersteld**
- public/drukwerk/flyer-HUMANITAS2027.html — **hersteld**
- public/drukwerk/flyer-ICHTHUS2027.html — **hersteld**
- public/drukwerk/flyer-IMC2027.html — **hersteld**
- public/drukwerk/flyer-JEF2027.html — **hersteld**
- public/drukwerk/flyer-JINC2027.html — **hersteld**
- public/drukwerk/flyer-KINDERHULP2027.html — **hersteld**
- public/drukwerk/flyer-KINDERZWERFBOEK2027.html — **hersteld**
- public/drukwerk/flyer-LEUDAL2027.html — **hersteld**
- public/drukwerk/flyer-OOIEVAAR2027.html — **hersteld**
- public/drukwerk/flyer-ROTTERDAMPAS2027.html — **hersteld**
- public/drukwerk/flyer-SABA2027.html — gelezen, geen herstel
- public/drukwerk/flyer-SAM2027.html — **hersteld**
- public/drukwerk/flyer-SCHOOLSCOOL2027.html — **hersteld**
- public/drukwerk/flyer-VLUCHTELINGEN2027.html — **hersteld**
- public/drukwerk/flyer-ZAANSTREEK2027.html — **hersteld**
- public/drukwerk/flyer-bulk.html — gelezen, geen herstel
- public/drukwerk/folder-enschede.html — **hersteld**
- public/drukwerk/juf-start-A4.html — **hersteld**
- public/drukwerk/nieuwkomers-thuisbrief.html — **hersteld**
- public/drukwerk/poster-DONGEN2027-drukwerk.html — **hersteld**
- public/drukwerk/poster-DONGEN2027.html — **hersteld**
- public/drukwerk/poster-SABA2027.html — gelezen, geen herstel
- public/drukwerk/poster-leerkwartier.html — **hersteld**
- public/drukwerk/stickervel-DONGEN2027.html — gelezen, geen herstel
- public/drukwerk/stickervel-ENSCHEDE2027.html — gelezen, geen herstel
- public/drukwerk/stickervel-PURMEREND2027.html — gelezen, geen herstel
- public/drukwerk/stickervel-SMALLINGERLAND2027.html — gelezen, geen herstel
- public/examen/** (278 gegenereerde pagina's): 3 sjabloonzinnen hersteld via generator + mechanisch op de bestaande pagina's
- public/leerpad/** (38 gegenereerd): via scripts/buildPadLandingsPaginas.mjs (Cito → Doorstroomtoets in de pitches), bij de build opnieuw gemaakt

### C1. Testlog vóór herstel (rollen, fout antwoorden, plaatjes uit)

| stap | wat | url | tekens | JS-fout |
|---|---|---|---|---|
| k-groep4-01 | groep4: naam + niveau ingevuld | / | 324 | Unexpected token '<' |
| k-groep4-02 | groep4: eerste scherm na 'Doorgaan als gast' | /start | 289 |  |
| k-groep4-03-fout1 | Expres fout antwoord (6) — feedback lezen | /start | 390 |  |
| k-groep4-03-fout2 | Expres fout antwoord (Bekijk de leerpaden) — feedback lezen | /leren | 1116 |  |
| k-groep4-04 | groep4: na het start-kwartier | /leren | 1116 |  |
| k-groep4-10 | groep4: /mijn na start | /mijn | 1379 | Unexpected token '<' |
| k-groep4-11 | groep4: /vandaag-kwartier na start | /vandaag-kwartier | 249 | Unexpected token '<' |
| k-groep4-12 | groep4: /leren na start | /leren | 931 | Unexpected token '<' |
| k-groep8-01 | groep8: naam + niveau ingevuld | / | 324 | Unexpected token '<' |
| k-groep8-02 | groep8: eerste scherm na 'Doorgaan als gast' | /start | 326 |  |
| k-groep8-03-fout1 | Expres fout antwoord (heel rustig) — feedback lezen | /start | 450 |  |
| k-groep8-03-fout2 | Expres fout antwoord (Bekijk de leerpaden) — feedback lezen | /leren | 989 |  |
| k-groep8-04 | groep8: na het start-kwartier | /leren | 989 |  |
| k-groep8-10 | groep8: /mijn na start | /mijn | 1379 | Unexpected token '<' |
| k-groep8-11 | groep8: /vandaag-kwartier na start | /vandaag-kwartier | 249 | Unexpected token '<' |
| k-groep8-12 | groep8: /leren na start | /leren | 931 | Unexpected token '<' |
| k-brugklas-01 | brugklas: naam + niveau ingevuld | / | 383 | Unexpected token '<' |
| k-brugklas-02 | brugklas: eerste scherm na 'Doorgaan als gast' | /mijn | 2336 |  |
| k-brugklas-03-fout1 | Expres fout antwoord (Testbrugklas leerling · klas 1) — feedback lezen | /mijn | 2000 |  |
| k-brugklas-04 | brugklas: na het start-kwartier | /mijn | 2000 |  |
| k-brugklas-10 | brugklas: /mijn na start | /mijn | 1380 | Unexpected token '<' |
| k-brugklas-11 | brugklas: /vandaag-kwartier na start | /vandaag-kwartier | 223 | Unexpected token '<' |
| k-brugklas-12 | brugklas: /leren na start | /leren | 931 | Unexpected token '<' |
| g8-toets-01 | Groep 8: Doorstroomtoets-oefentoets | /doorstroomtoets-oefentoets | 685 | Unexpected token '<' |
| g8-toets-02-fout1 | Expres fout antwoord (A.Friet) — feedback lezen | /doorstroomtoets-oefentoets | 358 |  |
| g8-toets-02-fout2 | Expres fout antwoord (A.7) — feedback lezen | /doorstroomtoets-oefentoets | 212 |  |
| g8-toets-02-fout3 | Expres fout antwoord (A.bijvoorbeeld, zoals, onder andere) — feedback lezen | /doorstroomtoets-oefentoets | 424 |  |
| pad-01 | Leren-overzicht | /leren | 931 | Unexpected token '<' |
| ouder-01 | Ouder: tikt 'ouder of verzorger' | /ouder | 728 | Unexpected token '<' |
| ouder-02 | Ouder: /ouder op vers apparaat (niet ingelogd) | /ouder | 728 | Unexpected token '<' |
| ouder-03 | Ouder: Kwartiercheck | /kwartiercheck | 1861 |  |
| nieuwk-01 | Nieuwkomer: na 'Ik ben nieuwkomer' | /nieuwkomers | 3647 | Unexpected token '<' |
| nieuwk-02 | Nieuwkomer: eerste oefening | /nieuwkomers | 6486 |  |
| nieuwk-03-fout1 | Expres fout antwoord (← Terug) — feedback lezen | / | 1124 |  |
| juf-01 | Leerkracht: /klas | /klas | 769 | Unexpected token '<' |
| juf-02 | Leerkracht: /leerkracht | /leerkracht | 3194 | Unexpected token '<' |
| geenplaatjes-1 | Plaatjes geblokkeerd: / | / | 1124 |  |
| geenplaatjes-2 | Plaatjes geblokkeerd: /nieuwkomers | /nieuwkomers | 3647 |  |
| geenplaatjes-3 | Plaatjes geblokkeerd: /tafelbladen | /tafelbladen | 10655 |  |
| geenplaatjes-4 | Plaatjes geblokkeerd: /dierentuin | /dierentuin | 1214 |  |
| geenplaatjes-5 | Plaatjes geblokkeerd: /mijn | /mijn | 1362 |  |

### C2. Testlog na herstel

| stap | wat | url | tekens | JS-fout |
|---|---|---|---|---|
| r01-home | Route / (vers apparaat) | / | 1124 | Unexpected token '<' |
| r02-learn-paths-hub | Route /leren (vers apparaat) | /leren | 942 | Unexpected token '<' |
| r03-mijn-pagina | Route /mijn (vers apparaat) | /mijn | 1382 | Unexpected token '<' |
| r04-teacher-home | Route /leerkracht (vers apparaat) | /leerkracht | 3187 | Unexpected token '<' |
| r05-ouder-dashboard | Route /ouder (vers apparaat) | /ouder | 720 | Unexpected token '<' |
| r06-self-study | Route /zelfstudie (vers apparaat) | /zelfstudie | 927 | Unexpected token '<' |
| r07-cito | Route /cito (vers apparaat) | /cito | 2337 | Unexpected token '<' |
| r08-examens | Route /examens (vers apparaat) | /examens | 915 | Unexpected token '<' |
| r09-cito-leerpad-toets | Route /doorstroomtoets-oefentoets (vers apparaat) | /doorstroomtoets-oefentoets | 685 | Unexpected token '<' |
| r10-rondleiding | Route /rondleiding (vers apparaat) | /rondleiding | 1790 |  |
| r11-oefenpakket | Route /oefenpakket (vers apparaat) | /oefenpakket | 3449 |  |
| r12-leesladder | Route /leesladder (vers apparaat) | /leesladder | 4110 |  |
| r13-dictee | Route /dictee (vers apparaat) | /dictee | 1184 | Unexpected token '<' |
| r14-werkwoorden | Route /werkwoorden (vers apparaat) | /werkwoorden | 1387 | Unexpected token '<' |
| r15-vandaag-kwartier | Route /vandaag-kwartier (vers apparaat) | /vandaag-kwartier | 223 | Unexpected token '<' |
| r16-printen | Route /printen (vers apparaat) | /printen | 4310 | Unexpected token '<' |
| r17-tafelbladen | Route /tafelbladen (vers apparaat) | /tafelbladen | 10662 | Unexpected token '<' |
| r18-redactiebladen | Route /redactiebladen (vers apparaat) | /redactiebladen | 8308 | Unexpected token '<' |
| r19-familie | Route /familie (vers apparaat) | /familie | 2898 | Unexpected token '<' |
| r20-diploma | Route /diploma (vers apparaat) | /diploma | 1610 | Unexpected token '<' |
| r21-ouderkaart | Route /ouderkaart (vers apparaat) | /ouderkaart | 2630 | Unexpected token '<' |
| r22-weekschema | Route /weekschema (vers apparaat) | /weekschema | 1613 | Unexpected token '<' |
| r23-trots | Route /trots (vers apparaat) | /trots | 1080 | Unexpected token '<' |
| r24-vonk | Route /vonk (vers apparaat) | /vonk | 1593 | Unexpected token '<' |
| r25-brugklas | Route /brugklas (vers apparaat) | /brugklas | 4821 | Unexpected token '<' |
| r26-results | Route /resultaat (vers apparaat) | / | 1124 | Unexpected token '<' |
| r27-zoo | Route /dierentuin (vers apparaat) | /dierentuin | 1215 | Unexpected token '<' |
| r28-spelletje | Route /spelletje (vers apparaat) | /spelletje | 219 | Unexpected token '<' |
| r29-nieuwkomers | Route /nieuwkomers (vers apparaat) | /nieuwkomers | 3647 | Unexpected token '<' |
| r30-imposter | Route /spelletje/imposter (vers apparaat) | /spelletje/imposter | 456 | Unexpected token '<' |
| r31-galerij | Route /parken (vers apparaat) | /parken | 426 | Unexpected token '<' |
| r32-maatje | Route /maatje (vers apparaat) | /maatje | 402 | Unexpected token '<' |
| r33-wishes | Route /tips (vers apparaat) | /tips | 1201 | Unexpected token '<' |
| r34-kwartiercheck | Route /kwartiercheck (vers apparaat) | /kwartiercheck | 1880 |  |
| r35-start-kwartier | Route /start (vers apparaat) | /start | 303 | Unexpected token '<' |
| r36-klas | Route /klas (vers apparaat) | /klas | 769 | Unexpected token '<' |
| k-groep4-01 | groep4: naam + niveau ingevuld | / | 324 | Unexpected token '<' |
| k-groep4-02 | groep4: eerste scherm na 'Doorgaan als gast' | /start | 289 |  |
| k-groep4-03-fout1 | Expres fout antwoord (6) — feedback lezen | /start | 390 |  |
| k-groep4-03-fout2 | Expres fout antwoord (Bekijk de leerpaden) — feedback lezen | /leren | 1127 |  |
| k-groep4-04 | groep4: na het start-kwartier | /leren | 1127 |  |
| k-groep4-10 | groep4: /mijn na start | /mijn | 1399 | Unexpected token '<' |
| k-groep4-11 | groep4: /vandaag-kwartier na start | /vandaag-kwartier | 249 | Unexpected token '<' |
| k-groep4-12 | groep4: /leren na start | /leren | 942 | Unexpected token '<' |
| k-groep8-01 | groep8: naam + niveau ingevuld | / | 324 | Unexpected token '<' |
| k-groep8-02 | groep8: eerste scherm na 'Doorgaan als gast' | /start | 326 |  |
| k-groep8-03-fout1 | Expres fout antwoord (heel rustig) — feedback lezen | /start | 450 |  |
| k-groep8-03-fout2 | Expres fout antwoord (Bekijk de leerpaden) — feedback lezen | /leren | 1000 |  |
| k-groep8-04 | groep8: na het start-kwartier | /leren | 1000 |  |
| k-groep8-10 | groep8: /mijn na start | /mijn | 1399 | Unexpected token '<' |
| k-groep8-11 | groep8: /vandaag-kwartier na start | /vandaag-kwartier | 249 | Unexpected token '<' |
| k-groep8-12 | groep8: /leren na start | /leren | 942 | Unexpected token '<' |
| k-brugklas-01 | brugklas: naam + niveau ingevuld | / | 383 | Unexpected token '<' |
| k-brugklas-02 | brugklas: eerste scherm na 'Doorgaan als gast' | /mijn | 2329 |  |
| k-brugklas-03-fout1 | Expres fout antwoord (Testbrugklas leerling · klas 1) — feedback lezen | /mijn | 1993 |  |
| k-brugklas-04 | brugklas: na het start-kwartier | /mijn | 1993 |  |
| k-brugklas-10 | brugklas: /mijn na start | /mijn | 1400 | Unexpected token '<' |
| k-brugklas-11 | brugklas: /vandaag-kwartier na start | /vandaag-kwartier | 223 | Unexpected token '<' |
| k-brugklas-12 | brugklas: /leren na start | /leren | 942 | Unexpected token '<' |
| g8-toets-01 | Groep 8: Doorstroomtoets-oefentoets | /doorstroomtoets-oefentoets | 685 | Unexpected token '<' |
| g8-toets-02-fout1 | Expres fout antwoord (A.7/6) — feedback lezen | /doorstroomtoets-oefentoets | 257 |  |
| g8-toets-02-fout2 | Expres fout antwoord (A.Dinsdag) — feedback lezen | /doorstroomtoets-oefentoets | 367 |  |
| g8-toets-02-fout3 | Expres fout antwoord (A.Ster die uitdooft) — feedback lezen | /doorstroomtoets-oefentoets | 334 |  |
| pad-01 | Leren-overzicht | /leren | 942 | Unexpected token '<' |
| ouder-01 | Ouder: tikt 'ouder of verzorger' | /ouder | 720 | Unexpected token '<' |
| ouder-02 | Ouder: /ouder op vers apparaat (niet ingelogd) | /ouder | 720 | Unexpected token '<' |
| ouder-03 | Ouder: Kwartiercheck | /kwartiercheck | 1880 |  |
| nieuwk-01 | Nieuwkomer: na 'Ik ben nieuwkomer' | /nieuwkomers | 3647 | Unexpected token '<' |
| nieuwk-02 | Nieuwkomer: eerste oefening | /nieuwkomers | 6486 |  |
| nieuwk-03-fout1 | Expres fout antwoord (← Terug) — feedback lezen | / | 1124 |  |
| juf-01 | Leerkracht: /klas | /klas | 769 | Unexpected token '<' |
| juf-02 | Leerkracht: /leerkracht | /leerkracht | 3187 | Unexpected token '<' |
| geenplaatjes-1 | Plaatjes geblokkeerd: / | / | 1124 |  |
| geenplaatjes-2 | Plaatjes geblokkeerd: /nieuwkomers | /nieuwkomers | 3647 |  |
| geenplaatjes-3 | Plaatjes geblokkeerd: /tafelbladen | /tafelbladen | 10662 |  |
| geenplaatjes-4 | Plaatjes geblokkeerd: /dierentuin | /dierentuin | 1215 |  |
| geenplaatjes-5 | Plaatjes geblokkeerd: /mijn | /mijn | 1382 |  |

### D. Bestandslijst

**Gewijzigd (495):**
- api/_guard.js
- api/_lib/bevestig.js
- api/_lib/partner-uitnodiging.js
- api/buddy-chat.js
- api/kind-overzicht-mail.js
- api/kwartiercheck-mail.js
- api/send-doorstroom-countdown.js
- api/send-leesladder-pakket.js
- api/send-oefenblad.js
- api/send-ouder-rapport.js
- api/send-weekly-lesmateriaal.js
- api/send-weekpakket-code.js
- api/unsubscribe.js
- index.html
- public/abonnement.html
- public/aftelweken.html
- public/begrijpend-lezen-doorstroomtoets.html
- public/begrijpend-lezen-oefenen.html
- public/cito-eindtoets-oefenen.html
- public/cito-toets-oefenen.html
- public/contact.html
- public/dictee-oefenen.html
- public/doorgeven.html
- public/doorstroomtoets-2027-gids.html
- public/doorstroomtoets-amn.html
- public/doorstroomtoets-cito-leerling-in-beeld.html
- public/doorstroomtoets-dia.html
- public/doorstroomtoets-iep.html
- public/doorstroomtoets-oefenen-groep-7.html
- public/doorstroomtoets-oefenen.html
- public/doorstroomtoets-route-8.html
- public/drukwerk/_template-flyer-b1.html
- public/drukwerk/flyer-ALKMAAR2027.html
- public/drukwerk/flyer-BREDA2027.html
- public/drukwerk/flyer-BUURTGEZINNEN2027.template.html
- public/drukwerk/flyer-DONGEN2027-drukwerk.html
- public/drukwerk/flyer-DONGEN2027.html
- public/drukwerk/flyer-HAARLEMMERMEER2027-DRUK.html
- public/drukwerk/flyer-HAARLEMMERMEER2027.html
- public/drukwerk/flyer-HUMANITAS2027.html
- public/drukwerk/flyer-ICHTHUS2027.html
- public/drukwerk/flyer-IMC2027.html
- public/drukwerk/flyer-JEF2027.html
- public/drukwerk/flyer-JINC2027.html
- public/drukwerk/flyer-KINDERHULP2027.html
- public/drukwerk/flyer-KINDERZWERFBOEK2027.html
- public/drukwerk/flyer-LEUDAL2027.html
- public/drukwerk/flyer-OOIEVAAR2027.html
- public/drukwerk/flyer-ROTTERDAMPAS2027.html
- public/drukwerk/flyer-SAM2027.html
- public/drukwerk/flyer-SCHOOLSCOOL2027.html
- public/drukwerk/flyer-VLUCHTELINGEN2027.html
- public/drukwerk/flyer-ZAANSTREEK2027.html
- public/drukwerk/folder-enschede.html
- public/drukwerk/juf-start-A4.html
- public/drukwerk/nieuwkomers-thuisbrief.html
- public/drukwerk/poster-DONGEN2027-drukwerk.html
- public/drukwerk/poster-DONGEN2027.html
- public/drukwerk/poster-leerkwartier.html
- public/examen/** (gegenereerd) (278 bestanden)
- public/gratis-bijles.html
- public/gratis.html
- public/klaar-voor-de-brugklas.html
- public/klassikaal-digibord.html
- public/kwartiercheck.html
- public/leergeld-flyer.html
- public/leermaatje.html
- public/leerpad/** (gegenereerd) (38 bestanden)
- public/leesladder.html
- public/leren-15-minuten.html
- public/maak-icoon.html
- public/nieuwkomers-nederlands-leren.html
- public/onderwijs-begrippen.html
- public/over.html
- public/park.html
- public/privacy.html
- public/rekenen-doorstroomtoets.html
- public/sitemap.xml
- public/spelling-doorstroomtoets.html
- public/studievaardigheden-doorstroomtoets.html
- public/tafels-oefenen.html
- public/uitleg-thuis.html
- public/vmbo-examens-downloaden.html
- public/vmbo-examens-oefenen.html
- public/voor-leerkrachten.html
- public/voor-organisaties.html
- public/voorlezen.html
- public/voorwaarden.html
- public/welkom.html
- public/werkwoordspelling-oefenen.html
- public/wie-is-de-imposter.html
- public/woordenschat-doorstroomtoets.html
- scripts/build-examen-set-indexes.mjs
- scripts/buildExamenVraagPaginas.mjs
- scripts/buildPadLandingsPaginas.mjs
- scripts/buildVoorlezen.mjs
- src/App.jsx
- src/app/ErrorBoundary.jsx
- src/components/AgeGate.jsx
- src/components/BegrijpendLezenLadder.jsx
- src/components/BegrijpendLezenPage.jsx
- src/components/BrugklasPage.jsx
- src/components/CharleyHulp.jsx
- src/components/CitoLeerpadToets.jsx
- src/components/CitoPage.jsx
- src/components/CodeBalk.jsx
- src/components/DagkaartGenerator.jsx
- src/components/DeepVraag.jsx
- src/components/ExamensPage.jsx
- src/components/FamilieUitleg.jsx
- src/components/HomePage.jsx
- src/components/HomeV2.jsx
- src/components/HomeV3.jsx
- src/components/KindAcceptBanner.jsx
- src/components/KoppelcodeBanner.jsx
- src/components/LeesladderPage.jsx
- src/components/MetDankAan.jsx
- src/components/ObliteratorGame.jsx
- src/components/OefenpakketPage.jsx
- src/components/PakketUitleg.jsx
- src/components/ParkBezoek.jsx
- src/components/ParkGalerij.jsx
- src/components/PrintHubPage.jsx
- src/components/ProPage.jsx
- src/components/RedactiebladenPage.jsx
- src/components/RondleidingPage.jsx
- src/components/SelfStudy.jsx
- src/components/StudentHome.jsx
- src/components/TafelbladenPage.jsx
- src/components/TopografieCheck.jsx
- src/components/UpdateBanner.jsx
- src/components/UspDemo.jsx
- src/components/ZookwartierGame.jsx
- src/components/learn/PiramideInhoud.jsx
- src/components/learn/RekenOefenRonde.jsx
- src/constants.js
- src/data/appGids.js
- src/features/account/MijnPagina.jsx
- src/features/account/vakkenPerGroep.js
- src/features/dictee/DicteePage.jsx
- src/features/dictee/WerkwoordenPage.jsx
- src/features/familie/FamilieHub.jsx
- src/features/familie/TrotsMomentPagina.jsx
- src/features/familie/VonkPagina.jsx
- src/features/familie/familieFeatures.js
- src/features/familie/ouderkaartContent.js
- src/features/familie/paraatheid.js
- src/features/kwartiercheck/KwartiercheckPage.jsx
- src/features/kwartierplan/Startfoto.jsx
- src/features/learn/BronTekstInteractief.jsx
- src/features/learn/KwartierPauze.jsx
- src/features/learn/LearnPath.jsx
- src/features/learn/LearnPathsHub.jsx
- src/features/learn/MeeBezig.jsx
- src/features/learn/VraagUitlegPad.jsx
- src/features/learn/WoordHulp.jsx
- src/features/mastery/DailyChallengeBanner.jsx
- src/features/mastery/MasteryCTABanner.jsx
- src/features/mastery/MyMastery.jsx
- src/features/oefenboekje/OefenboekjePagina.jsx
- src/features/oefenboekje/OefenboekjeTrigger.jsx
- src/features/onboarding/StartKwartier.jsx
- src/features/ouder/Gezinsstart.jsx
- src/features/ouder/OuderInzicht.jsx
- src/features/ouder/ouderadvies/teksten.js
- src/features/practice/PlayQuiz.jsx
- src/features/practice/ResultsPage.jsx
- src/features/practice/TextbookQuiz.jsx
- src/features/teacher/KlasParkcode.jsx
- src/features/teacher/StudentProgress.jsx
- src/features/teacher/TeacherComponents.jsx
- src/features/teacher/TeacherHome.jsx
- src/features/zoo/buddies.js
- src/features/zoo/economieLeermomenten.js
- src/features/zoo/game/ImposterGame.jsx
- src/features/zoo/leerpadLint.js
- src/features/zoo/unlocks.js
- src/shared/niveauIndicatie.js
- src/shared/ui/VoorkennisKeten.jsx
- src/shared/usePwaInstall.js
- src/subscription/PaywallGate.jsx

**Nieuw (446):**
- docs/audit/TWIJFEL-schermen.md
- docs/audit/VERSLAG-schermen-teksten.md
- docs/audit/fixes-schermen.json
- docs/audit/schermen-fixes/fixes-A.json
- docs/audit/schermen-fixes/fixes-B1.json
- docs/audit/schermen-fixes/fixes-B2.json
- docs/audit/schermen-fixes/fixes-C1.json
- docs/audit/schermen-fixes/fixes-C2.json
- docs/audit/schermen-fixes/fixes-D.json
- docs/audit/schermen-fixes/fixes-E.json
- docs/audit/schermen-fixes/fixes-F1.json
- docs/audit/schermen-fixes/fixes-F2.json
- docs/audit/schermen-fixes/fixes-G.json
- docs/audit/schermen-fixes/fixes-H1.json
- docs/audit/schermen-fixes/fixes-H2.json
- docs/audit/schermen-fixes/fixes-I.json
- docs/audit/schermen-fixes/twijfel-A.md
- docs/audit/schermen-fixes/twijfel-B1.md
- docs/audit/schermen-fixes/twijfel-B2.md
- docs/audit/schermen-fixes/twijfel-C1.md
- docs/audit/schermen-fixes/twijfel-C2.md
- docs/audit/schermen-fixes/twijfel-D.md
- docs/audit/schermen-fixes/twijfel-E.md
- docs/audit/schermen-fixes/twijfel-F1.md
- docs/audit/schermen-fixes/twijfel-F2.md
- docs/audit/schermen-fixes/twijfel-G.md
- docs/audit/schermen-fixes/twijfel-H1.md
- docs/audit/schermen-fixes/twijfel-H2.md
- docs/audit/schermen-fixes/twijfel-I.md
- docs/audit/schermen/** (schermafbeeldingen + tekst) (408 bestanden)
- scripts/audit/schermen/check-fixes.mjs
- scripts/audit/schermen/debug-kind.mjs
- scripts/audit/schermen/haal-teksten.mjs
- scripts/audit/schermen/js-fout.mjs
- scripts/audit/schermen/kliktocht.mjs
- scripts/audit/schermen/maak-bijlagen.mjs
- scripts/audit/schermen/statisch.mjs
- scripts/audit/schermen/verken.mjs
- scripts/audit/schermen/verken2.mjs

> Schermafbeeldingen (209 png, 27 MB) staan niet op main; ze blijven op branch `audit3/schermen-teksten` (map docs/audit/schermen/voor en na).
