# 📮 Flyer-/code-uitgifte-register

> **Wat we hebben uitgegeven** per partner — de "uitgegeven"-kant van de
> Flyer/code-teller in het dagrapport. De scan- en oefen-cijfers komen LIVE uit
> Supabase (`partner_bezoek` / `partner_actief`); dit bestand is de handmatige
> tegenhanger: hoeveel flyers/QR-codes we hebben verspreid, digitaal of print.
>
> Vul `Uitgegeven` in zodra je iets verstuurt (Mark weet dit; Claude vult bij
> als hij een batch verstuurt). Leeg/"?" = onbekend. De meeste flyers zijn
> **digitaal** (1 flyer met 1 code die de partner zélf onder zijn gezinnen deelt) —
> dan is "uitgegeven" niet 1-op-1 een aantal QR-codes maar "digitaal, partner deelt".
> `Plekken` = max_uses uit `partner_codes` (de 2027-garantie-plekken).

## Actieve partners (met code)

| Partner | Code | Uitgegeven | Vorm | Datum | Plekken | Opmerking |
|---|---|---|---|---|---|---|
| Voedselbank Lelystad | LELYSTAD2027 | ? | digitaal | 12 aug | 50 | bestuur akkoord, verspreiding via PR-commissie |
| Ooievaarspas Den Haag | OOIEVAAR2027 | ? | digitaal | 13 jul | ∞ | blijvend gratis; neutrale banner (naam van site) |
| Voedselbank Rotterdam | VBROTTERDAM2027 | scherm | digitaal | 14 jul | 300 | draait op supermarkt-schermen |
| Buurtgezinnen | BUURTGEZINNEN2027 | ? | digitaal | 21 aug | 100 | Froukje (belafspraak do 27 aug) |
| Voedselbank Alkmaar | ALKMAAR2027 | ? | digitaal+print | 18 jul | 100 | verspreidt flyer in september |
| Voedselbank Dongen | DONGEN2027 | ? | digitaal | 14 aug | 50 | vroeg zelf om flyer |
| Voedselbank Zaanstreek | ZAANSTREEK2027 | ? | digitaal | 11 aug | 100 | via uitdeelpunt-medewerkers |
| Leergeld Haarlemmermeer (Spark Fest) | HAARLEMMERMEER2027 | 1000 | print | 23 jul | 1000 | goodybags 18 okt — nog te drukken |
| Queen Wilhelmina Library (Saba) | SABA2027 | 100 | print (post) | 20 aug | 50 | + A3-poster; wacht op adres |
| Voedselbank Smallingerland | SMALLINGERLAND2027 | ? | digitaal | 16 jul | 100 | |
| Voedselbank Breda | BREDA2027 | ? | digitaal | 16 jul | 50 | |
| Voedselbank Purmerend | PURMEREND2027 | ? | digitaal | 14 jul | 50 | |
| Studiezalen (Amsterdam) | STUDIEZALEN2027 | ? | digitaal | 14 jul | 50 | |
| Rotterdampas | ROTTERDAMPAS2027 | ? | digitaal | 13 jul | 50 | |
| Humanitas | HUMANITAS2027 | ? | digitaal | 13 jul | 50 | |
| Jeugdeducatiefonds | JEF2027 | ? | digitaal | 13 jul | 50 | |
| Sam& voor alle kinderen | SAM2027 | ? | digitaal | 13 jul | 50 | |
| JINC | JINC2027 | ? | digitaal | 13 jul | 50 | |
| IMC Weekendschool | IMC2027 | ? | digitaal | 13 jul | 50 | |
| Voedselbank Gorinchem | GORINCHEM2027 | ? | digitaal | 10 jul | 50 | |
| Bibliotheek AanZet (Gorinchem) | AANZET2027 | ? | digitaal | 10 jul | 50 | |
| Leergeld Apeldoorn-Voorst | APELDOORN2027 | ? | digitaal | 10 jul | 50 | |
| De nieuwe bibliotheek (Almere) | ALMERE2027 | ? | digitaal | 10 jul | 50 | |
| Westfriese Bibliotheken | WESTFRIES2027 | ? | digitaal | 10 jul | 50 | |
| Voedselbank Maastricht | MAASTRICHT2027 | ? | digitaal | 10 jul | 50 | |
| Bibliotheek Amstelland | AMSTELLAND2027 | ? | digitaal | 10 jul | 50 | |
| Bibliotheek Rotterdam | ROTTERDAM2027 | ? | digitaal | 10 jul | 50 | |
| Bibliotheek Eindhoven | EINDHOVEN2027 | ? | digitaal | 10 jul | 50 | |
| Voedselbank Nijmegen-Overbetuwe | NIJMEGEN2027 | ? | digitaal | 10 jul | 50 | |
| Leergeld Maastricht en Heuvelland | HEUVELLAND2027 | ? | digitaal | 10 jul | 50 | |
| Voedselbank Enschede-Haaksbergen | ENSCHEDE2027 | ? | digitaal | 10 jul | 50 | |

> **Deel-actie 2027** (DEELACTIE2027) = vrienden-werven, geen partner — buiten deze teller.

## Nieuwe uitgifte loggen
Bij een nieuwe partner/flyer-batch: rij toevoegen (of `Uitgegeven` bijwerken) met
partner · code · aantal · digitaal/print · datum. De teller in het dagrapport
combineert dit automatisch met de live scans.
