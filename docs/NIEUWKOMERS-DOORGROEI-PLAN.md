# Nieuwkomers — doorgroeimodel + verdienmodel (plan 26 sep 2026)

Mark 26 sep: "kunnen de nieuwkomers een doorgroeimodel krijgen, dat je testjes afneemt en dan doorgroeit
naar de gewone app, dictee … denk mee of dit een extra inkomstenbron kan worden. Gratis moet ook vervangen
worden: gratis minimaal 2028." **Status: in uitvoering — zie § 0 Voortgang.** Mark 26 sep: "alle tekst ok" (gratis t/m 31-12-2028 goedgekeurd).

## 0. Voortgang (bijwerken na elke stap — staat ook in docs/NOG-NALOPEN.md → dagrapport)

**Nu: stap 6 van 7 klaar → stap 7 (klasoverzicht juf, betaald) is 🔒 geblokkeerd tot KvK + verwerkersovereenkomst + 5-10 echte taalklassen. Tussendoor: verfijnen (zie § 8).**

| Stap | Wat | Status |
|---|---|---|
| 1 | Gratis-tekst "t/m 31-12-2028" in LOWAN ronde 2 (ma 28 sep), België (1 okt), /nieuwkomers, landingspagina, llms | ✅ v751 (26 sep) |
| 2 | Trede-indeling op /nieuwkomers + trede-testje trede 1 + diploma | ✅ v752 (26 sep) — lokaal getest (zakt 5/20, slaagt 20/20, diploma, UK/AR-tik); Mark: op telefoon doen |
| 3 | Dictee op nieuwkomer-niveau (klankzuivere woordjes, steuntaal) | ✅ v753 (26 sep) — tegel "Dictee" op /nieuwkomers → /dictee in nieuwkomer-stand (20 woorden t-a-s/oo/aa/oe, zin tikbaar EN/AR/UK/TR, Charley langzamer, terug = /nieuwkomers); lokaal getest. Open: dictee-knoppen/Charley-tekst nog niet tikbaar |
| 4 | Letters en klanken = trede 2 "Letters en woorden" + trede-testje 2 | ✅ v754-755 (27 sep): pad `letters-klanken-nieuwkomers` (klank vooraan · hakken/plakken · aa/oo/oe) + kopje Trede 2 (Letters en klanken + Dictee) + trede-testje 2 (12 vragen uit het pad + 8 "welk woord is goed geschreven?" uit het dictee, afleiders zijn géén echte woorden: tsa/tass). Gehaalde tredes per trede in `lk_nk_tredes` |
| 5 | Instap-testje (bepaalt start-trede) | ✅ v756 (27 sep): blauwe kaart "Nieuw hier?" bovenaan (alleen zolang geen instap/trede gedaan); blok 1 = 6 vragen trede 1 (<5 goed → trede 1), blok 2 = 6 vragen trede 2 (<5 → trede 2, anders Verder oefenen); label "← Hier begin je" + pagina scrollt erheen; niets afgevinkt. `lk_nk_instap`, events nk_instap_*, nieuwkomers.sql blok 10. 3 scenario's lokaal getest |
| 6 | Overstap-knop naar de gewone app (trede 4) | ✅ v757 (27 sep): kaart "Klaar voor de gewone Leerkwartier?" onderaan /nieuwkomers, groep 3-8 kiezen → groep vastgezet (zoals Mijn pagina) → start-kwartier; groen omrand na trede 2 of instap "Verder"; eerlijk: daar geen vertaalknop. Event nk_overstap |
| 7 | Klasoverzicht juf (betaalde kant) | 🔒 pas na KvK + verwerkersovereenkomst + 5-10 echte taalklassen |

Meten: `docs/sql/nieuwkomers.sql` blok 8 (trede-testje: geopend → gestart → klaar → geslaagd → geprint).

## 1. Wat heeft een nieuwkomer nodig? (uit LOWAN-onderzoek 24 sep + concurrentie-onderzoek)

Een nieuwkomerskind (6-12 jaar) doorloopt grofweg 1-2 jaar taalklas en stroomt dan door naar een gewone groep.
In die tijd moet het:
1. **Overleven op school**: schooltaal, vragen aan de juf, gevoelens (staat er al).
2. **Lezen en schrijven in ons schrift**: kinderen uit Syrië, Eritrea, Oekraïne kennen een ánder alfabet.
   Letters/klanken + klankzuivere woordjes (maan, vis, roos) = grootste gat in het pakket nu.
3. **Woordenschat opbouwen**: BAK-lijst (2.000 + 1.000 basiswoorden) + LOWAN-schooltaalwoorden, met herhaling over dagen.
4. **Rekenen mét taal**: de sommen kunnen ze vaak wél, de woorden niet (rekentaal, verhaaltjessommen).
5. **Aansluiten bij de gewone groep**: dictee, begrijpend lezen, groepsniveau — en de steun in de eigen taal langzaam loslaten.

## 2. Het doorgroeimodel: vier treden

| Trede | Naam (voorstel) | Inhoud | Staat er al? |
|---|---|---|---|
| 1 | **Welkom** | In de klas, Woorden 1-5, Hoe voel je je, Rekentaal, Rekenen tot 20 | ✅ grotendeels |
| 2 | **Letters en woorden** | Letters + klanken (voor andere schriften), klankzuivere woordjes, **dictee met Charley op nieuwkomer-niveau** (hoor → typ), eerste 500 BAK-woorden | 🟡 dictee bestaat (g4-8), rest nieuw |
| 3 | **Ik doe mee** | 500-1.500 BAK-woorden, korte zinnen lezen met voorleesknop, verhaaltjessommen, rekenen tot 100/1000, tafels | 🟡 rekenen + tafels bestaan |
| 4 | **Overstap** | Kind gaat naar de gewone app op zijn groepsniveau (start-kwartier, dictee g4-8, werkwoorden, later Doorstroomtoets). Vertaalknopje blijft beschikbaar, maar standaard dicht | ✅ de gewone app |

**Testjes (de motor van het doorgroeien):**
- **Instap-testje** (± 10 min, begint makkelijk, stopt bij 3 fouten op rij) → zegt op welke trede het kind begint.
  Scheelt de juf werk: een kind dat al kan lezen hoeft niet bij trede 1.
- **Trede-testje** aan het eind van elke trede (± 20 vragen, uit alle onderdelen, zonder hints). ≥ 80% goed →
  volgende trede open + **printbaar diploma'tje** ("Trede 2 gehaald!") voor het kind. Minder → het herhaalkaartje
  zet de gemiste woorden klaar, over een week opnieuw.
- Alles blijft "oefentoetsjes". **Nooit** claimen: officieel taalniveau (ERK/A1), NT2-methode, diagnose of plaatsingsadvies.

Past bij de huisregels: blijft binnen /nieuwkomers (geen nieuwe voordeur), Leerkwartier-test = ja
(begrijpen, niet spelletje), steuntaal blijft "alleen om te lezen als je een woord niet kent".

## 3. Wie betaalt? (de eerlijke rekensom)

**Niet de ouders.** Asielgezinnen hebben weinig geld; daar vragen we niets.

**Wél de school (het bestuur).** Scholen krijgen via DUO extra geld per nieuwkomer, vrij te besteden:
asielzoekerskind 1e jaar ± **€15.168**, overige nieuwkomers ± €4.712 (stand 2026, LOWAN/DUO — vóór verkoop
nogmaals checken). Een klaslicentie van een paar honderd euro valt daarin weg. Ter vergelijking: een
digitale methode kost per leerling € 60-75 per jaar, een woordenschatmethode € 2.500-7.000 per school.

**Wat de school koopt = de juf-kant, niet het oefenen:**
- **Klasoverzicht**: per kind (bijnaam of nummer, geen echte naam nodig) op welke trede, welke woorden lastig, hoe vaak geoefend.
- **Overstap-rapportje** (PDF) voor de nieuwe juf in de gewone groep: wat kan dit kind, welke woorden kent het.
- **Eigen woordlijst** toevoegen (thema van de week) + printbare diploma's met schoollogo.
- **Taal op verzoek** (Tigrinya, Dari, Somalisch, Pools) — de school die erom vraagt, betaalt de moedertaal-check mee.

**Prijsidee (rekenvoorbeeld, niet besloten):** € 195 per taalklas/locatie per jaar, of € 12 per leerling (min. 10).
100 locaties × € 195 ≈ **€ 19.500/jaar**. Onze LOWAN-lijst telt nu ± 310 scholen; België komt daar mogelijk bij.

**Andere geldstromen (secundair):**
- **Fondsen voor de bouw** van trede 2-3 (letters, BAK-woorden, extra talen) — maatschappelijk doel past bij o.a.
  Oranje Fonds, Kinderpostzegels, VSBfonds (nog uitzoeken, niets aangevraagd). Eerst KvK (28 sep).
- **Gemeenten met een eigen taalklas-subsidie** (Leiden, Haarlemmermeer): licentie voor alle taalklassen in de gemeente.
- **De lange doorgroei**: het kind dat via trede 4 in de gewone app zit, is in groep 7-8 een Doorstroomtoets-kind →
  daar kan het gezin later (of via een gemeente-/partnercode) Familie gebruiken. Klein bedrag per kind, maar dit is
  de manier waarop nieuwkomers gewone Leerkwartier-gebruikers worden.

## 4. Gratis — nieuwe belofte (vervangt "gratis zolang we testen")

**Voorstel:** "Oefenen in het Nieuwkomer-pakket is gratis voor kinderen en leerkrachten, gegarandeerd tot en met
31 december 2028. Komen er daarna extra's voor scholen die geld kosten, dan hoort u dat ruim op tijd."

- Kind-kant (alle treden, testjes, diploma'tje voor thuis, vertaling): gratis t/m 31-12-2028, en naar verwachting
  daarna ook (zelfde lijn als "oefenen gratis t/m 2031" — mag ook meteen t/m 2031, Marks keuze).
- School-kant (klasoverzicht/overstaprapport): **vroege scholen** (die nu al meedoen, vóór 1-1-2027) krijgen dat
  óók gratis t/m 31-12-2028 — zelfde "jullie waren er vroeg bij"-logica als de partnercodes (besluit 23 sep).
  Nieuwe scholen vanaf schooljaar 2027-2028: licentie.
- Altijd de volledige datum erbij (huisregel), nooit "altijd gratis".

**Aanpassen na Marks go** (nog niets veranderd):
- `docs/outreach/LOWAN-NIEUWKOMERPAKKET-RONDE-2.md` regel 38 — ⚠️ gaat ma 28 sep 08:30 automatisch de deur uit.
- `docs/outreach/BELGIE-SCHOLEN-TAALHELDKLAS.md` regel 37 — test do 1 okt 08:30.
- `public/nieuwkomers-nederlands-leren.html` regel 58 (+ FAQ-antwoord) en `NieuwkomersPage.jsx` regel 29/43 ("Gratis.").

## 5. Wat eerst nodig is vóór er ook maar één euro binnenkomt

1. **KvK** (28 sep) + factuur-mogelijkheid — scholen betalen op factuur, niet met iDEAL.
2. **Verwerkersovereenkomst**: een school die leerlinggegevens in ons klasoverzicht zet, móét er een tekenen
   (Model Privacyconvenant Onderwijs). Zonder = geen verkoop. Daarom: klasoverzicht op bijnaam/nummer ontwerpen.
3. **Bewijs van gebruik**: eerst 5-10 taalklassen die het écht gebruiken (meten via docs/sql/nieuwkomers.sql),
   en Erik Geels / LOWAN-scholen vragen wat de juf mist. Nu: nog 0 echte nieuwkomers gezien (26 sep).

## 6. Volgorde van bouwen (voorstel)

| # | Wat | Waarom eerst | Omvang |
|---|---|---|---|
| 1 | ✅ Gratis-tekst vervangen | Maandag gaan 130 mails uit | 15 min |
| 2 | ✅ Trede-indeling zichtbaar op /nieuwkomers + trede-testje voor trede 1 | Laat nu al "doorgroeien" zien | 1 sessie |
| 3 | Dictee op nieuwkomer-niveau (klankzuivere woordjes, steuntaal) | Bestaande dictee hergebruiken | 1 sessie |
| 4 | Letters en klanken (trede 2) | Grootste inhoudelijke gat | 2-3 sessies |
| 5 | Instap-testje | Pas zinvol als er 2+ treden zijn | 1 sessie |
| 6 | Overstap naar de gewone app (trede 4-knop) | Doorgroei naar Leerkwartier | 1 sessie |
| 7 | Klasoverzicht voor de juf (betaalde kant) | Pas na bewijs van gebruik + KvK + verwerkersovereenkomst | 2-3 sessies |

## 7. Open vragen aan Mark
- Gratis-belofte kind-kant: t/m 31-12-2028 (jouw voorstel) of meteen gelijk met oefenen t/m 2031?
- Mogen de vroege scholen het klasoverzicht ook gratis t/m 2028 (zoals partnercodes)?
- Start met bouwstap 2 (treden + trede-testje) of eerst 3 (nieuwkomer-dictee)?

## 8. Verfijnen terwijl stap 7 wacht (Claude, zonder Mark)
- Dictee-scherm (knoppen, Charley-tekst) tikbaar maken in de 4 talen.
- Vertaalknop in de gewone app na de overstap (steuntaal blijft bewaard in `lk_steuntaal`) — ontwerp eerst, is architectuur.
- Moedertaalcheck AR/UK/TR van alle teksten van 26-27 sep (N5) — wacht op een moedertaalspreker.
- Meten: nieuwkomers.sql blok 8-10 + event nk_overstap in het dagrapport; na de eerste echte klas: bijsturen.
