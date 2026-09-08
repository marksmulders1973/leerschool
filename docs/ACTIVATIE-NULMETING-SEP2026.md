# Activatie-nulmeting september 2026 — wat doen Google-bezoekers ná het account?

Peildatum: 7 september 2026 (laatste 30 dagen, Supabase `profiles`, `events`, `topic_mastery`, `learn_progress`, `progress`).
Aanleiding: Mark 7 sep — "ik krijg bijna geen nieuwe aanmeldingen". Conclusie: instroom is er wél, activatie is het lek.

## Instroom (30 dagen)

| | accounts | ooit geoefend |
|---|---|---|
| Alle nieuwe accounts | 112 | 33 |
| via Google (homepage) | 22 | 7 |
| direct (adres getypt / bookmark) | 21 | 8 |
| bron onbekend (ouder app-versie) | 45 | 5 |
| overig (SEO-pagina's, welkom, deel) | 24 | 13 |

Partner-codes: 2 claims in totaal (ENSCHEDE2027, VBROTTERDAM2027) na ~355 organisatie-mails en ~1.225 flyers.
Actief in laatste 7 dagen: 8 gebruikers. Wachtlijst-inschrijvingen 30d: 10.

## Trechter per kanaal (sessies, 30 dagen)

| kanaal | sessies | rol gekozen | eerste vraag | vraag beantwoord | kwartier gehaald |
|---|---|---|---|---|---|
| Google | 110 | 80 | 17 | 17 | 10 |
| QR-flyer | 21 | 4 | 2 | 2 | 0 |
| ChatGPT-verwijzing | 9 | 7 | 2 | 2 | 0 |
| social (IG/FB/Threads) | 15 | 0 | 0 | 0 | 0 |
| SEO-landingspagina's | 8 | 1 | 1 | 1 | 1 |

Google-bezoekers landen vrijwel allemaal op `/` (homepage), niet op de doorstroomtoets-pagina's.
Google-accounts die oefenen zijn groep 3, 5, 7, 8 (PO). De 4 VO-accounts (gym/mavo/havo/vwo) oefenden geen van allen.

## Het lek: ná "leerling" kiezen belandt men op /mijn en doet daar niets

Van 80 Google-sessies die een rol kozen, haakten 65 af zonder één vraag te zien. Wat die 65 daarna deden (sessies):

- 40 → `/mijn` geopend (personaliseren: avatar 7, thema 6, profiel-wissel 5)
- 21 → in de bottom-nav rondgeklikt op `/mijn`
- 19 → vraag-van-de-dag geladen op `/cito` maar niet beantwoord
- 18 → park geopend (`/dierentuin`), 8 kregen de leer-uitnodiging in het park
- 15 → kwamen terug (autoskip) maar weer geen vraag
- 58 van de 65 hadden rol "leerling"

Lezing: de rol-keuze werkt (73%), maar daarna is er geen dwingende eerste stap. `/mijn` is voor een nieuwkomer een lege etalage, het park is leuk maar leidt niet naar oefenen. De 15 die wél een vraag zagen, beantwoordden hem allemaal — de vraag zelf is niet het probleem, het bereiken ervan wel.

## Voorstel — punt 1 GEBOUWD 7 sep (v602), rest open

1. ✅ **Eerste-bezoek-regel (v602, `src/features/onboarding/`):** nieuwe leerling (naam + groep ingevuld op de homepage, rol leerling) → pagina `/start`: 5 vragen uit bestaande leerpaden op groepsniveau, om-en-om met 4 kaartjes (hulp bij vraag/Vonk, printpakketten, 3D-park met echte Vonk-.glb, doorstroomtoets + echte examens), eindscherm met tegels. Altijd te stoppen (→ /mijn). Eén keer per apparaat (`lk_startkwartier_gedaan`). Antwoorden tellen mee in topic_mastery. Events: `startkwartier_start`, `startkwartier_vraag`, `startkwartier_showcase_klik`, `startkwartier_einde` (hoe=klaar/stop/naar:…). Preview: leerkwartier.app/?go=startkwartier. Oorspronkelijk voorstel: nieuwe sessie + rol "leerling" + groep gekozen → direct de eerste vraag van een kort start-kwartier tonen (3-5 vragen op niveau), pas daarna `/mijn`. Rol-tegels blijven LOCKED; dit is de stap erná.
2. **Vraag-van-de-dag op `/leerling` en `/cito`:** 31 sessies laadden hem, 0 beantwoordden. Knop/kaart te passief; vraag direct open tonen.
3. **Park-leer-uitnodiging:** 8 tonen, 0 doorgeklikt naar leren. Uitnodiging concreter maken ("1 vraag, dan mag je verder").
4. **VO-bezoekers via Google:** 4 accounts, 0 oefenden. Óf VO-startpad bouwen, óf VO-verwachting op de homepage temperen. Niet nu.
5. **Meten:** deze trechter maandelijks herhalen; doel oktober: Google rol→vraag van 21% naar 40%.

## Betekenis voor het gemeente-plan

Voor gemeentegesprekken in november is "8 actieve kinderen per week" te mager. Activatie-fix (punt 1) is de goedkoopste hefboom: de instroom is er al, elke maand ~110 Google-sessies. Zie `docs/GEMEENTE-BETAALT-PLAN.md`.
