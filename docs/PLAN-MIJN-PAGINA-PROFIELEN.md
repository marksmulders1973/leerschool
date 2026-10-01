# Plan — Mijn pagina met profielen ("Wie oefent er?")

Mark, 1 okt 2026: "ik wil 5 (denk ik) profielen met dropdown en blanks of voorbeeld; ik ben leerling, ouder etc. (net als Netflix); wat je het liefst hebt, naam, leeftijd, groep; achtergrond-personalisatie kan uit; zo overzichtelijk en duidelijk mogelijk."
**Status 1 okt 2026: fase 1 deels LIVE (v840)** — "Wie oefent er?" (max 5 tegels, aanmaakkaart, beheren), wissel-knop i.p.v. gezinsrij, achtergrond-thema's uit. Keuzes: 5 profielen, leeftijd→groep, thema's weg, nieuwkomers apart, slotje = fase 2. **Nog open uit fase 1:** leerlingpagina terugbrengen tot 3 blokken (nu nog alle blokken; vraagt eerst een kliktocht wat weg mag).

## 1. Hoe anderen het doen (intern, niet voor naar buiten)

| Dienst | Wat ze goed doen | Wat minder |
|---|---|---|
| Netflix | "Wie kijkt er?" bij openen; max 5 grote tegels; kinderprofiel; slotje (pincode) per profiel | geen leeftijd/groep-info, puur smaak |
| Disney+ | tot 7 profielen; "Junior"-stand; pincode; leeftijdsgrens per profiel | veel instellingen verstopt |
| Spotify Family | ouder beheert kinderaccounts; kind ziet alleen eigen dingen | apart account per persoon nodig |
| Duolingo Family | 1 betaler, 6 leden, ieder eigen voortgang | elk lid heeft een eigen e-mail nodig |
| Khan Academy Kids/ouder | ouder ziet alle kinderen op één scherm, kind kiest eigen plaatje om in te loggen | inloggen met e-mail voor ouder verplicht |
| Grote oefenapps NL | ouderaccount met kindprofielen, kind kiest avatar | eerst account en betaalgegevens |

**Les:** de beste ervaring is "openen → tik op je eigen gezicht → je bent binnen". Geen e-mail, geen wachtwoord voor kinderen. Instellingen kort en pas als het nodig is.

## 2. Hoe het bij ons beter kan
1. **Zonder account** (zoals nu): profielen staan op het apparaat. Wie inlogt als ouder (e-mail), krijgt de profielen later ook op andere apparaten.
2. **Rol bepaalt wat je ziet**: een leerling krijgt direct "Begin je kwartier", een ouder of verzorger ziet zijn kinderen, een leerkracht zijn klas. Geen menu's om te zoeken.
3. **Aanmaken in één scherm** met keuzelijsten en voorbeeldtekst, alles behalve naam en rol mag je overslaan.
4. **Leeftijd → groep voorgesteld** (6 jaar → groep 3), je kunt het aanpassen. Geen geboortedatum (privacy).
5. **Rustig**: geen eigen achtergronden/thema's meer; wel het eigen poppetje (avatar), want daar herkent een kind zichzelf aan.

## 3. Het scherm "Wie oefent er?"
- Verschijnt bij openen van Mijn pagina als er 2+ profielen op het apparaat staan (en via de profielknop rechtsboven).
- Raster van **max 5 grote tegels**: poppetje + naam + rol in woorden ("leerling · groep 6", "ouder of verzorger").
- 6e tegel "+ Profiel toevoegen" (alleen zolang er < 5 zijn). Bij 5: "Wil je er een weghalen?"
- Onderaan klein: "Profielen beheren" (naam wijzigen, weghalen).
- **Waarom 5:** ouder/verzorger + tot 3 kinderen (Familie = tot 3) + 1 extra (opa/oma, bijlesdocent, tweede verzorger).

## 4. Profiel aanmaken — één kaart, met voorbeelden
| Veld | Vorm | Voorbeeld / blank |
|---|---|---|
| Wie ben je? | 3 grote knoppen | Leerling · Ouder of verzorger · Leerkracht |
| Naam | tekstveld | blank met voorbeeld "bv. Sam" (roepnaam, geen achternaam) |
| Leeftijd *(leerling)* | keuzelijst 4–18 | "Kies…" |
| Groep / klas *(leerling)* | keuzelijst, voorgesteld uit leeftijd | groep 1–8, brugklas, klas 2–4 + niveau |
| Wat oefen je het liefst? *(leerling)* | tot 3 knopjes | Rekenen · Taal · Lezen · Spelling · Engels · Doorstroomtoets · Wereld |
| Poppetje | bestaande kiezer | "Later kiezen" mag |
| Ouder: kinderen koppelen | lijst met de leerling-profielen op dit apparaat + "met een code" | bestaande Gezinsstart |
| Leerkracht: welke groep | keuzelijst | groep 1–8 |

Knop: **"Klaar"** (groot). Alles behalve Rol + Naam mag leeg blijven; de app vraagt het later vanzelf als het nodig is.

## 5. Mijn pagina per rol (na kiezen)
- **Leerling:** 1) grote knop "Begin je kwartier" (vandaag-motor, gebruikt de voorkeur), 2) "Hoe gaat het?" (voortgang per vak, simpel), 3) "Mijn profiel" (bewerken). Weg: achtergrond-thema's, goud-thema's, top-blok-keuze.
- **Ouder of verzorger:** de bestaande ouderpagina-volgorde (Ouders → Kinderen → Weekrapport) + Familie-status.
- **Leerkracht:** klas klaarzetten / digibord.
- Bovenaan altijd: poppetje + naam + "Wissel" (terug naar "Wie oefent er?").

## 6. Veiligheid en privacy
- Optioneel **slotje met 4 cijfers** op het ouderprofiel (zoals Netflix), zodat kinderen niet in het ouderdeel komen. Standaard uit.
- Alleen roepnaam, leeftijd, groep, voorkeur — geen achternaam, geen geboortedatum, geen school. Past binnen de bestaande DPIA.
- Profiel weghalen = voortgang van dat profiel op dit apparaat weg (met bevestiging).

## 7. Keuzes voor Mark
1. Max **5** profielen — akkoord?
2. **Leeftijd vragen** (en groep voorstellen) — of alleen groep?
3. **Slotje op het ouderprofiel** aanbieden — ja/nee?
4. **Achtergrond-thema's helemaal weg** (ook bij wie er al een koos) — akkoord?
5. Nieuwkomers krijgen **geen** profielsoort hier (blijft apart via /nieuwkomers, regel 1 okt) — akkoord?

## 8. Bouwen in fasen
- **Fase 1 (~1 sessie):** "Wie oefent er?"-scherm, aanmaakkaart met keuzelijsten, max 5, bestaande namen op het apparaat worden automatisch profielen (migratie), achtergrond-thema's uit, leerling-pagina vereenvoudigd tot 3 blokken.
- **Fase 2:** slotje ouderprofiel; profielen meenemen naar andere apparaten voor ingelogde ouders.
- **Fase 3:** voorkeur per profiel sturen in vandaag-motor en weekrapport (voorkeur.js bestaat al deels).
- **Meten:** profiel_aangemaakt (per rol, hoeveel velden ingevuld), profiel_wissel, setup afgebroken; kliktocht-agents na fase 1.

## Stand 1 okt 2026 (v840-842)
✅ Fase 1 live: "Wie oefent er?" + aanmaakkaart + beheren; thema's uit; leerlingpagina in drie blokken (kwartier, waar je staat, profiel) + "Meer op je pagina". Kliktocht: groep-formaat-bug gevonden en hersteld (v842).
**Open (P2):** overlay verschijnt ook direct na naam invullen op home bij 2+ profielen; oude apparaten kunnen >5 namen hebben (tegels >5, toevoegen verborgen); namen van home/spel tellen niet mee in de 5-grens; browser-terug tijdens overlay → volgende keer weer overlay. Fase 2: slotje ouderprofiel, sync via account.
