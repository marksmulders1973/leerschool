# 🔍 Fable-review — alles op één plek

> Eén vindplek voor wat Fable mag nalopen. Bijgewerkt 17 aug 2026. Nieuwste bovenaan.
> Per item: wát, wáár (bestand), en de concrete review-vragen.

---

## 1. 🏛️ Onderwijskoepels / schoolbesturen — outreach (NIEUW 17 aug)
**Wat:** nieuw outreach-segment. We mailden alleen losse scholen; besturen (die tientallen
scholen tegelijk besturen) waren geen segment = de grootste gemiste hefboom.
**Waar:** `docs/outreach/ONDERWIJSKOEPELS-VOORWERK.md` (volledige rekensom + methode +
mailsjabloon + De Hoeksche School-concept + eigen Fable-checklist onderaan).
**Kern-cijfers:** 841 besturen besturen 5.986 basisscholen (~7/mail); eerste golf ~150 besturen
≈ 2.500–3.500 scholen; buitenland via Stichting NOB ~180–200 NL-scholen wereldwijd. School-
bereik springt van ~660–960 (losse lijsten) naar ~6.000+.
**Fable-review-vragen:** zie §7 in het voorwerk-doc (toon, bereik-aannames, NOB-keuze,
AVG, volgorde/dedup, verzendkanaal).

## 2. 🥇 Gouden-park — leren maakt je park goud (idee #46, fase 1 GEBOUWD v354)
**Wat:** elke inhoud-vorm wordt stukje-bij-beetje goud naarmate je het inhoud-pad beheerst
(piramide-sluitsteen/kubus-bovenlaag/kers goud + teller "nog X lesjes → goud"). Meetbaar
onderbouwd: 0/55 parken haalt het hele 26-staps-pad → drempels bewust laag.
**Waar:** idee #46 in `docs/DAGRAPPORT-KOMPAS.md` (ideeën-tracker); code
`src/features/zoo/UitvindersKabouters.jsx` (vormen + GOUD-tint + GoudDoel/GoudKroon),
`src/features/zoo/AssetRegistry.js` (`goudConfig`, drempels), `src/features/zoo/unlocks.js`
(`telPadStappen`), `src/features/zoo/ZooScene.jsx` (doorgifte goud/goudRest).
**Fable-review-vragen:** (a) kloppen de drempels (kubus 2 / piramide 4 / kegel 6 / bol 8 /
koepel 10 inhoud-lesjes) — te makkelijk/moeilijk? (b) fase 2: goud naar dieren/gebouwen/paden
+ een "% park goud"-teller — welke objecten tellen mee, hoe reken je %, mag een kind terug-
toggelen? (c) de gouden-mannetje-kroon (avatar goud, leer-anker biologie) — de kroon op het geheel.

## 3. 🎨 Interactief-park 3D — bijschaven (deze week gebouwd v349–354)
**Wat:** mooier maken in Fable. Kleuren-kubus (cijfers op alle N²-blokjes + ribbe 2–6 + grootte-
regelaar), piramide (som-op-vlakken + sluitsteen), kegel/bol/halve bol, + HUD-fixes (grootte-
knop botst niet meer met lopen/vliegen op telefoon én laptop).
**Waar:** `src/features/zoo/UitvindersKabouters.jsx` (de vormen) + `src/features/zoo/
ParkLeerobjecten.jsx` (landmarks/poorten). Reset een park (Menu → ♻️ Opnieuw beginnen) voor de
ruime nieuwe indeling.
**Fable-review-vragen:** loop-/kijkgevoel, leesbaarheid van de sommen, of de goud-accenten
mooi genoeg zijn, en of de landmark-poorten kloppen.

---

## 🗓️ Verzend-datum-voorstel — onderwijskoepels (denk-mee, 17 aug)

**Uitgangspunt:** scholen/besturen lezen mail pas als ze terug zijn van de zomervakantie
(regio's eindigen ~16 aug Noord → ~30 aug Zuid); ná ~31 aug/1 sep is iedereen terug. Een mail
die vlak vóór/bij terugkeer aankomt, ligt bóvenaan i.p.v. begraven onder een vakantie-stapel.
Doorstroomtoets = jan–feb 2027, dus besturen die nú hun schooljaar inrichten zijn ontvankelijk.
Verzenden via hallo@leerkwartier.app (Resend), in kleine batches (reputatie + Mark akkoord per batch).

| Wanneer | Wat | Aantal | Waarom deze datum |
|---|---|---|---|
| **ma 31 aug** | **De Hoeksche School** (warm — bekeek LinkedIn 17 aug) | 1 | Eerste werkdag terug → bovenaan de inbox; warme signaal nog vers. (Nu sturen = kans dat 't in de vakantie-stapel verdwijnt.) |
| **wo 3 sep** | **Bestuurs-golf 1a** — top grootste besturen | ~25 | Eerste volle schoolweek, staf terug maar nog niet overladen. Klein = deliverability + leren van de eerste reacties. |
| **vr 5 sep** | **Bestuurs-golf 1b** — volgende grootste besturen | ~25 | Zelfde week, gespreid; na Mark's akkoord op golf 1a. |
| **ma 8 sep** | **Stichting NOB** (buitenland-ingang) | 1 (+evt. regiocoördinatoren) | Aparte toon (terugkeer-naar-NL); NOB-bureau NL terug van vakantie. |
| **wk 15–26 sep** | **Bestuurs-golf 2** — rest top ~150 | ~30–40/batch, 3–4 batches | Ná eerste reacties; tekst evt. bijschaven met wat werkt. Niet botsen met LOWAN-mail (~1 sep) en Leergeld-Midden (~28 aug). |

**Aandachtspunten:**
- **Niet stapelen** op 1 sep (daar staat de LOWAN-mail, 326 voorzieningen, al gepland).
- **Dedup**: besturen kunnen scholen bevatten die we al los mailden → in de bestuur-mail
  "mogelijk kent u ons al via een van uw scholen" (geen dubbele druk).
- **Alternatief De Hoeksche School:** wil Mark het warme signaal meteen pakken, dan kan de mail
  ook déze week al (met risico dat 't tijdens de vakantie blijft liggen). Aanbeveling: 31 aug.
- Alles pas na Mark's **tekst-akkoord per batch** (vaste regel).
