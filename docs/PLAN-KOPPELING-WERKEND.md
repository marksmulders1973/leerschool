# Plan — van koppel-lijntje naar iets wat werkt (23 okt 2026)

> Mark: "Ik ben ouder, ik zie het lijntje naar Olivia. Dan wil ik op haar klikken en direct
> zien hoe ze ervoor staat, wat ze nog moet doen, en duidelijk in beeld waar ik naar kijk.
> En als een kind op een ouder klikt: 'papa wil dat je werkt aan …'."
>
> Status: **plan, nog niet gebouwd.** Eerst Marks antwoorden op de vragen onderaan.

## Wat er al is (hergebruiken, niet opnieuw bouwen)

| Bouwsteen | Waar | Wat het al kan |
|---|---|---|
| Koppel-plaatje | `WieOefentEr.jsx` + `koppelGraaf` | weet wie met wie gekoppeld is, ook op een ander toestel |
| Kind-detail voor ouders | `KindOverzicht.jsx` | per vak, sterk / nog oefenen, "wat nu?", toetsgeschiedenis, mail |
| Data per kind | `kindData.js` | scores + leerpad-voortgang op `link_id`, werkt over toestellen heen |
| Kind kiezen in ouder-overzicht | `OuderInzicht.jsx` + `lk_ouder_kind` | zet je de sleutel, dan opent dat kind |
| Klaarzetten | `ouderKlaargezet.js` | ouder zet een les klaar, kind ziet "speciaal voor jou", vinkt af |
| Slot (som/pincode) | `ouderadvies/drempel.js` | prototype, nergens aangesloten |

Gaten: geen berichtje van ouder aan kind; niveau-signalen staan alleen op het kind-toestel;
`topic_mastery`/`ref_mastery` worden door de ouder-kant nog niet gelezen; geen "per dag"-samenvatting
die over toestellen heen werkt.

## A. Ouder tikt op een gekoppeld kind → Kindkaart

**Wanneer:** het actieve profiel is een ouder (of leerkracht) en het kind is met dat profiel gekoppeld
(lijntje). Anders blijft tikken = "dit profiel gaat oefenen", zoals nu.

**Kindkaart, van boven naar onder** (één scherm, telefoon eerst):

1. **Kop die zegt waar je naar kijkt:** poppetje + "Je bekijkt de voortgang van **Olivia**", met
   eronder "gekoppeld met jou" en een duidelijke knop **Terug**. Andere achtergrondkleur dan het
   kind-scherm, zodat niemand denkt dat hij in het kind-profiel zit.
2. **Deze week in één regel:** "3 van de 7 dagen geoefend · 52 minuten · 4 kwartieren" + een
   strookje ma t/m zo met bolletjes. Daaronder: "Laatst geoefend: gisteren 19:20".
3. **Nog te doen:** wat jij hebt klaargezet (open / gedaan) + knop **Zet iets klaar**.
4. **Gaat goed / nog oefenen:** maximaal 3 + 3 onderwerpen, in gewone woorden
   ("breuken vergelijken", niet "pad-id").
5. **Tip voor vanavond:** één zin die de ouder kan doen zonder zelf de stof te kennen
   ("Vraag Olivia om uit te leggen hoe zij breuken vergelijkt. Uitleggen = onthouden.").
6. **Alles bekijken →** opent het bestaande ouder-overzicht op dit kind (`KindOverzicht`).
7. Grote knop onderaan: **Laat Olivia nu oefenen** (wisselt naar haar profiel, zoals nu).

**Eerlijk bij weinig data:** heeft het kind na het koppelen nog niet geoefend, dan staat er
"Olivia heeft sinds het koppelen nog niet geoefend. Zodra ze een kwartier doet, zie je het hier."
Geen lege grafieken.

## B. Kind tikt op een ouder (op dit toestel of "op een ander toestel")

**Scherm "Pappa Mark wil dat je werkt aan:"**
- De klaargezette lessen als grote knoppen, met **Start**.
- (fase 2) Het berichtje van de ouder: "Goed bezig met tafels! Vandaag nog breuken? 💛".
- Niets klaargezet? "Pappa Mark heeft nu niets klaargezet. Zal Leerkwartier iets kiezen?" → het
  vandaag-kwartier.
- Het kind ziet **niet** wat de ouder ziet en niet hoe vaak de ouder keek (voelt als controle).

## C. Data die erbij moet

- **RPC `kind_week(link_id)`** — per dag: geoefend ja/nee, minuten, kwartieren, laatste moment;
  uit `leaderboard` + `learn_progress` op `link_id`. Werkt dus ook als het kind een eigen toestel heeft.
- **Sterk / nog oefenen** uit `ref_mastery` + `topic_mastery` (nu ongebruikt door de ouder-kant),
  met de bestaande `leaderboard.detail` als terugval.
- (fase 2) kolom `bericht` (max 140 tekens) bij `ouder_klaargezet`, of een los "bericht van thuis".

## D. Fases

1. **Kindkaart + "wil dat je werkt aan"** met wat er al is: kop, weekregel, laatst geoefend,
   klaargezet, alles bekijken, laat oefenen. Plus de RPC `kind_week`. Meten: `kindkaart_open`,
   `kindkaart_klaarzet`, `ouderblok_open`, `ouderblok_start`.
2. **Berichtje van thuis**, tip voor vanavond, sterk / nog oefenen uit de mastery-tabellen.
3. **Doorstroomtoets-meter** (waar staat mijn kind t.o.v. groep 8), niveau-signalen naar de server,
   eventueel een slot op de ouder-kant.

Elke fase: één geteste uitrol, drie schermformaten, kliktocht, daarna pas de volgende.

## Vragen aan Mark (bepalen het ontwerp)

1. **Tikken als ouder actief is:** meteen de Kindkaart openen (voorstel), of eerst kiezen
   "voortgang bekijken / laten oefenen"?
2. **Slot op de ouder-kant op een gedeeld toestel** (som of pincode)? Voorstel: nu niet (bekijken is
   onschuldig, klaarzetten vraagt al inloggen); later optioneel.
3. **Berichtje van ouder aan kind:** ja? Voorstel: ja, kort, met een paar kant-en-klare zinnen + zelf typen.
4. **Ziet het kind dat de ouder heeft meegekeken?** Voorstel: nee.
