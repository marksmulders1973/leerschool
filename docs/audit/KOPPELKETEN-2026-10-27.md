# Koppelketen nagekeken — 27 okt 2026 (Mark: "de hele koppelcode, kun je die ook nog nakijken")

Twee onderzoekers (opus): een code-review van de hele keten (ouderkant, kindkant, database-functies, rechten) en een
live kliktest op twee toestellen (ouder ingelogd, kind op een ander toestel), plus de echte cijfers van 14 dagen en het
spoor van een echte ouder uit Apeldoorn (24 okt). Daarna 17 herstellingen in v1015 "070" + migratie `20261027_koppel_privacy.sql`.

## Wat er echt mis was (en nu niet meer)

| # | Gevonden | Ernst | Hersteld |
|---|---|---|---|
| 1 | **Berichten en klaargezet werk van elk gezin waren leesbaar** voor wie het scorebord uitlas: link_id's staan daar openbaar en de kind-functies vroegen alleen link_id + voornaam. | privacy | tabel `koppel_toestellen` + `kind_hoort_bij()`: alleen het toestel dat de code inwisselde (of de ouder zelf). Getest met een vreemde sessie: alles leeg. |
| 2 | Wie alleen een **naam** typte ("Brian") zag het klaargezette werk van die Brian (naam-terugval zonder link_id). | privacy | terugval weg; link_id verplicht |
| 3 | **Ouderprofiel op de server werd overschreven** met naam/groep van het kind (groep kiezen, naam na koppelen). Zo werd Marks account "Olivia/student" en zag het kind "gekoppeld met Olivia". | fout | geen server-upsert als het toestel op het kind staat |
| 4 | **Codebalk op de startpagina claimde met het actieve profiel**: een ouder die de code op de eigen telefoon typte, verbruikte hem op de naam van de ouder. | fout | altijd naar /koppelen, kind kiest zelf de naam |
| 5 | **Naam op de code werd genegeerd** (herstelcode "Brian" + kind typt "Brian S" = nieuw kind). | fout | naam op de code wint; app volgt die naam |
| 6 | **Geen maximum van 3 kinderen** bij een code (ouder-overzicht toonde "4/3"); één-tik-blok gaf wel een 400 maar het scherm zei "Dat lukte niet". | fout | max 3 in `claim_link_code` + echte reden in beeld |
| 7 | **Herhaal-route** (zelfde code binnen 10 min) werkte ook vanaf een ander toestel. | risico | alleen hetzelfde toestel |
| 8 | **"Bij mij opent steeds de koppelpagina"** (Mark): niets in de code opent /koppelen vanzelf, maar een hervatte tab/PWA of herlaad bleef erop staan. | hinder | koud /koppelen zonder code → home, ook de URL |
| 9 | **Een kind op een ander toestel kreeg nooit een berichtje**: "berichtje sturen" zat alleen in de kindkaart voor kinderen op het ouder-toestel. | gat | berichtvak op elke gekoppelde kindkaart op /ouder |
| 10 | De **ballon bij het kind stond 2,5 scherm naar beneden**. | hinder | bovenaan Mijn pagina, ook vóór de groep-poort |
| 11 | **Profielwissel liet het kwartier van broer/zus zien** ("Je bent bezig: Rekenen … 5 gedaan"). | fout | kwartier stopt bij wisselen |
| 12 | **Ouders openen hun eigen WhatsApp-link** (uit de data: 3-7× per toestel, nooit klaar). | hinder | hint op /koppelen voor een ouder met code |
| 13 | "2 van 18 één-tik-kliks gelukt" was een **meetfout**: het event telde ook de knoppen eronder; echt 2 van 2. | meting | eigen event `koppel_blok_knop` |
| 14 | KindOverzicht: "zodra je kind (ingelogd op het gekoppelde account) …" — een kind logt nooit in. | tekst | herschreven |
| 15 | Fout voorstel uit de codebalk bleef de hele sessie vooringevuld. | hinder | gewist bij een fout |

## Echte cijfers (14 dgn vóór de fix)
27 codes gemaakt, 10 gebruikt · 12 nieuwe koppelingen (21 totaal) · koppelen_open 50 (23 toestellen, vuurt per lading), klaar 9, fout 6 ·
één-tik 2 van 2 · Apeldoornse ouder 24 okt: ouder- én kindprofiel op één telefoon, 5× op het koppelblok, strandde op "log eerst in" (magic link).

## Bewust open (voor Mark)
- **Twee ouders, één kind**: oefenwerk krijgt alleen het link_id van de láátste ouder; ouder 1 ziet daarna niets nieuws meer (`koppeling.js`, `kindData.js`). Vraagt een schemawijziging (meerdere link_ids per rij). Apart oppakken.
- **KindOverzicht toont alleen toetsen (leaderboard)**, losse oefenvragen (topic_mastery) niet → ouder ziet "nog geen resultaten" na 5 vragen.
- **Inloggen als ouder = magic link**; dat is waar de Apeldoornse ouder afhaakte. Overweging: Google-knop prominenter in het koppelblok, of de één-tik-koppeling ook zonder account (dan geen weekmail).
  - ✅ **Opgelost 27 okt v1016 "071" (Mark: "ja doe B"):** één-tik koppelen werkt zonder account; weekmail via eigen bevestigd adres (`partner_email`), koppelingen gaan mee bij latere login (`gezin_koppelingen_overnemen`). Live getest incl. mail + bevestig-link.
- Startset-voortgang en "gezien" staan per toestel, niet per kind (broer/zus zien elkaars "5 gedaan").
- `koppel_diagnose` verraadt bij een gebruikte code of die ouder een kind met die naam heeft (klein).
- Typfout-suggestie kan een vrije code van een ándere ouder voorstellen (10/uur-limiet staat erop).

## Testdata
Testaccount test-klaarzet-ouder@leerkwartier.app (profiel Testouder, wachtwoord via SQL gezet voor kliktests). Alle Testkoppel*-koppelingen,
codes, berichten en mastery-rijen zijn na de test verwijderd; "Testkind Klaarzet" (14 okt) staat er nog.
