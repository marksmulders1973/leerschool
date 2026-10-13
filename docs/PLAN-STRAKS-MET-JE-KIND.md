# Plan: "Straks met je kind" — 1 sessie van ±60 minuten (voorstel 13 okt 2026, wacht op Mark)

## Het zwakste punt
4 van de 5 bezoekers beantwoorden nooit één vraag (28 dagen: 1.296 apparaten → 256 met een vraag).
De grootste groep daarvan komt binnen via een partnercode (vooral de Kinderhulp-nieuwsbrief):

- 265 apparaten zagen het partner-welkomscherm → 96 oefenden (36%) → 52 kwamen terug (20%)
- 2 van de 3 komen **overdag** binnen (8-16 u): daarvan oefent 33%; 's avonds 43%
- piek maandag 12 okt: 13-16 u

Lezing: het is vaak de **ouder** die op het werk of tussendoor de link opent, terwijl het kind
op school zit. De ouder kijkt, vindt het goed, en vergeet het daarna. Er is niets dat de ouder
helpt om het vanavond aan het kind te geven.

## Het idee
Op het partner-welkomscherm (en op de startpagina voor ouders) één rustig blok:

> **Nu niet bij je kind?** Zet het klaar voor straks.
> [📅 Zet in mijn agenda: vanavond 19:00] [💬 Stuur naar mezelf (WhatsApp)]

- **Agenda:** downloadt een .ics-afspraak "Leerkwartier: eerste kwartier met [kind]" om 19:00
  (of morgen 19:00 als het al later is), met de link mét partnercode erin. Werkt op iPhone en
  Android, zonder account, zonder e-mailadres.
- **WhatsApp:** opent WhatsApp met een kant-en-klaar bericht aan jezelf/je partner met dezelfde link.
- Geen gegevens opgeslagen, past bij "geen account nodig".

## Sessie van 60 minuten
| Min | Wat |
|---|---|
| 0-10 | PartnerWelkom.jsx lezen; plek bepalen (onder de proefvraag, klein) |
| 10-30 | Component `StraksMetJeKind.jsx`: .ics maken in de browser + WhatsApp-link; link draagt `?partner=CODE&utm_source=straks` |
| 30-40 | Events `straks_agenda_klik`, `straks_whatsapp_klik`; terugkomst meetbaar via utm_source=straks |
| 40-50 | Test: vitest voor de .ics-tekst (datum/tijdzone), build, audit, kliktest op telefoonformaat |
| 50-60 | Uitrollen, live controleren, regel in dagrapport-cockpit |

## Meten (na 14 dagen)
- % partnerbezoekers dat een van de knoppen tikt (doel ≥ 15%)
- bezoeken met utm_source=straks en of die een vraag beantwoorden
- partner-terugkomst 20% → doel 30%

## Waarom dit kans heeft
Het kost niets, vraagt niets van de partner, en raakt de grootste instroom die we al hebben.
Elke nieuwe nieuwsbrief (zoals 12 okt: 75 nieuwe apparaten op één dag) levert dan meer kinderen op.
