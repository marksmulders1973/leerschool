# Herinnering: je koppelcode staat nog klaar — CONCEPT (9 nov 2026)

**Status:** ✅ Mark "stuur maar" (9 nov 2026, avond). **Ingepland via Resend voor di 10 nov 16:30** (na schooltijd; om 23:00 versturen had geen zin, het kind moet erbij zijn). 7 ontvangers, 14 codes; in de database gemarkeerd met `link_codes.herinnerd_at` (kolom toegevoegd 9 nov). Afzender hallo@, antwoorden op hallo@. Adressen staan bewust niet in dit bestand.

## Waarom

Doorlichting koppelcode 9 nov (`docs/KOPPELING-GRENZEN.md`): een code wordt binnen een uur gebruikt of
vrijwel nooit meer. Sinds 12 okt: 18 van de 20 gebruikte codes binnen een uur; 17 van de 22 open codes
zijn ouder dan een week. De ouder maakt de code wel, maar het kind komt er niet meer aan toe en niemand
herinnert eraan.

## Wie (stand 9 nov)

- 10 echte ouders (geen huishouden, met mailadres) hebben een open code van ouder dan 24 uur.
- **7 daarvan hebben nog geen enkel gekoppeld kind** → dat is de groep voor deze mail. Codes 4 tot 22 dagen oud.
- De 3 ouders die al een kind gekoppeld hebben, krijgen niets (extra codes kunnen bewust over zijn).

## Regels

- Eén keer per ouder, nooit herhalen.
- Alleen ouders zonder gekoppeld kind, met een open code van minstens 24 uur oud.
- Afzender `Leerkwartier <hallo@leerkwartier.app>`, antwoorden komen op hallo@.
- Geen aanhef met naam: de profielnaam bij een ouder-account is niet betrouwbaar (soms de naam van het kind).

## Tekst

**Onderwerp:** De koppelcode voor je kind staat nog klaar

Hallo,

Je hebt op {datum} een koppelcode gemaakt in Leerkwartier. Die is nog niet gebruikt. De code blijft geldig
tot je kind hem invoert.

Zo koppel je in een minuut:

1. Open deze link op het toestel waarop je kind oefent:
   https://leerkwartier.app/koppelen?code={code}
2. Je kind typt de eigen voornaam en tikt op "Koppel mij".

Daarna staat je kind in je ouder-overzicht.

Oefent je kind op jouw eigen telefoon of tablet? Dan is geen code nodig. Open
https://leerkwartier.app/ouder en tik op "voeg je kind hier toe".

Lukt het niet? Antwoord op deze mail, dan krijg je hulp.

Je krijgt deze herinnering één keer.

Groet,
Leerkwartier
Een kwartier per dag leren, een leven lang slimmer.

### Variant bij meer dan één open code

Regel 1 wordt: "Je hebt op {datum} {n} koppelcodes gemaakt in Leerkwartier. Die zijn nog niet gebruikt.
Elke code is voor één kind en blijft geldig tot hij is ingevoerd." Stap 1 toont per code een eigen link.

## Na "stuur maar"

1. Eenmalig naar de 7 ouders van nu.
2. Daarna vanzelf: één dag na het maken van een code, als er dan nog geen kind gekoppeld is. Bouwen als
   extra stand in een bestaande mailfunctie (Vercel Hobby zit aan het maximum aantal functies), dagelijks
   aangeroepen via een GitHub-workflow zoals het weekrapport; kolom `link_codes.herinnerd_at` zodat een
   ouder hem nooit twee keer krijgt.
3. Meten: codes gebruikt binnen 7 dagen na de herinnering, tegen de nulmeting (na een uur vrijwel 0).

## Meetpunt

Di 17 nov: hoeveel van de 14 gemarkeerde codes zijn gebruikt? Query: `select count(*) filter (where used_at is not null), count(*) from link_codes where herinnerd_at is not null;` Nulmeting: 0 van 14, codes 4 tot 22 dagen oud.
Het automatische vervolg (één dag na het maken van een code) is nog niet gebouwd.
