# 🏗️ Park — Megabouw-advies (22 aug 2026)

> Bron: multi-agent-review "park-megabuild-review". Opdracht Mark: 5 gamedesigners
> + 5 gamers + 1 leerkracht naar het park laten kijken en één megabouw-advies geven.
> **Status van de bron:** 3 van de 11 kijkers rondden af (retentie-designer,
> economie-designer, Sem 8 jaar/gamer); de andere 8 (3 designers, 3 gamers, de
> leerkracht) liepen tegen de account-limiet (reset **25 aug 01:00**). Die worden
> daarna bijgedraaid — dit advies wordt dan aangevuld. Toch al bruikbaar: de 3
> brillen verschillen sterk en op het belangrijkste punt zijn ze het eens.
>
> Alles hieronder respecteert de bevroren regels: **geen nieuwe losse spellen**,
> **geen gok/sociale mechanieken**, park-doel = **binden + leren**, draait op
> goedkope Android. Niets is gebouwd — dit is het advies. Bouw-go per blok = Mark.

---

## 🎯 De kern in één zin

Het park **beloont vandaag** goed (eerlijke munten, leer-exclusieve unlocks,
persoonlijke wandelstops), maar **verkoopt morgen bijna niet**: het dagritueel
laat geen spoor na, het sterkste terugkom-haakje zit verstopt, en de enige
gegarandeerde nacht-verandering kan negatief zijn (weggelopen dier).

---

## 🔴 #1 — Weglopend dier afschaffen (UNANIEM: 3/3 kijkers)

**Het probleem.** In `zooEconomy.js` (`VERWAARLOOS_DAGEN=3`, `verwaarloosCheck`)
loopt een gekocht dier na 3 dagen niet-voeren **definitief weg**. Voor deze
doelgroep — schoolritme, gedeelde goedkope telefoon, weekend/vakantie zonder
scherm — is 3 dagen missen normaal, geen desinteresse. Het kind dat na een lang
weekend terugkomt, opent het park en krijgt als éérste bericht: *je dier is weg*.
Dat is precies het terugkeer-moment dat je wilt belónen. Stapelt bovendien met de
streak-reset (gemist weekend = dubbel gestraft). **Loss aversion werkt bij
dagelijkse spelers; bij haperende spelers is het churn-gif.**

**De bouw.** `verwaarloosCheck` niet meer laten verwijderen, maar **markeren**:
na 3+ dagen wordt het dier *sip/verstopt* (grijs, achter een struik, zoek-icoon
op het verblijf) en levert het 0 inkomsten. **Eén voerbeurt bij terugkomst = dier
komt blij terug** met een mini-viering ("Je vos heeft je gemist!"). De verzorg-les
blijft volledig intact — alleen de churn-machine verdwijnt.

**Effort: laag.** Eén functie in `zooEconomy.js` + één visuele staat.

---

## 🔴 #2 — Wandel-stempelkaart: het dagritueel iets laten opbouwen

**Het probleem (retentie-designer, hoog).** `wandelRoutes.js` gooit de
wandel-voortgang elke nacht weg ("gisteren = weg", r186). Route af = alleen een
popup + track-event. Geen munt, geen bewaard stempel, geen teller. Elke route
heeft al een `stempel`-veld, maar er is geen stempelkaart. **Tien dagen trouw
wandelen ziet er in het park exact hetzelfde uit als één dag.** Dat is de
kern-fout in de retentie: het dagritueel bouwt niets op.

**De bouw.** Eén overlay (bordje bij de ingang + menu) met een stempel per
afgeronde wandeling (datum + routekleur) en een teller. Bij mijlpalen (5/10/25
stempels) verschijnt een klein **blijvend** object in het park (vlaggetje bij de
ingang → bankje → fonteintje). Opslaan in de bestaande `owned`/meta-jsonb (geen
migratie); de `wandel_route_af`-trigger bestaat al. Toon de nieuwe stempel direct
in de wandel-viering.

**Effort: laag.** Hergebruikt route-kleuren + bestaand stempel-veld. "Nog 2
stempels tot mijn vlaggetje" = een concreet morgen-motief.

---

## 🔴 #3 — Volgende-dino zichtbaar maken op de groeiplek

**Het probleem (retentie-designer, hoog).** De dino-mijlpalen (10/18/28/40/55
lesjes, `unlocks.js`) zijn een uitstekende ladder, en de hint "nog X lesjes"
bestaat al — maar **alleen diep in bouw-modus > winkel > Dieren-tab**. Een kind
dat gewoon rondloopt ziet hem nooit. Ondertussen staat het dino-verblijf (dé
groeiplek) bijna leeg met sinds v400 een generiek bouwbordje. De data
(`geleerdeStappen` + `DINO_MIJLPALEN`) is al geladen; ze wordt alleen niet
getoond op de plek waar het kind emotioneel al staat.

**De bouw.** Vervang het generieke bouwbordje bij de dino-plek door een bord met
de eerstvolgende mijlpaal-dino: silhouet/emoji + "nog X lesjes, dan stampt de
Stegosaurus hier rond" + een simpel voortgangsbalkje. Zet dezelfde regel als
slotzin in de wandel-viering en het dagoverzicht.

**Effort: laag.** Data geladen, plek bestaat, alleen het bord ontbreekt. (Sluit
mooi aan op de bouwbordjes die 22 aug al zijn neergezet.)

---

## 🟠 #4 — Gouden vormen fase 2: alle zes vormen laten meekleuren

**Het probleem (retentie-designer, middel).** Het stukje-bij-beetje-goud is
didactisch het mooiste mechaniek — leren wordt letterlijk zichtbaar op het object
— maar dekt nu **alleen de kubus** (`leerStappenPerPad={{ ruimtemeetkunde:
inhoudStappen }}`, ZookwartierGame.jsx ~r1995). Piramide, bol, kegel, cilinder en
halve bol blijven dood. Breder: van dag tot dag verandert er niets zichtbaars in
de 3D-wereld → de vraag "wat is er vandaag anders in mijn park?" heeft bijna
altijd als antwoord "niets".

**De bouw.** `leerStappenPerPad` is al een map — vul hem met de paden van de
andere vijf vormen (zelfde `telPadStappen`-patroon). De groene wandelroute loopt
er al langs (stops kubus + piramide): gisteren leren = vandaag zichtbaar méér
glans op je route. Dit is de al goedgekeurde fase 2 (Ideeën-tracker #46) — geen
nieuwe scope.

**Effort: middel.** De sterkste "leren-voedt-park"-koppeling die het park kan hebben.

---

## 🟠 #5 — Munt-economie: van vlak naar spaarboog

**Het probleem (economie-designer, 2× hoog).**
- **Passief inkomen schaalt onbegrensd en verslaat het leer-inkomen laat in het
  spel.** `INKOMST_PER_VERBLIJF=2` per object zonder cap: een park met 30 objecten
  verdient 60/dag passief — 2,5× de kwartier-beloning (25) — *zónder te leren*.
  Plus onbegrensde kraam-winst tijdens spelen. Rondhangen wordt economisch beter
  dan leren; dat botst met "leren = de koninklijke route".
- **START_COINS=200 bij prijzen 2-220: sparen bestaat nauwelijks.** Op dag 1 koop
  je al een achtbaan; na 2-3 dagen is zelfs de duurste (spiraal, 220) binnen. Geen
  middellange/lange spaar-boog → een munt voelt nooit waardevol, en "ik spaar voor
  X" (de sterkste terugkom-reden in park-builders) ontbreekt.

**De bouw.**
1. Passief parkinkomen **koppelen aan het dagelijkse kwartier**: alleen (of
   dubbel) uitkeren op dagen dat het kwartier gehaald is, óf hard cappen op ~20/dag.
   UI-zin: "Je park verdient alleen op leerdagen — je bezoekers komen voor jou!"
2. `START_COINS` naar ~60-80. Prijzen licht spreiden tot een echte ladder
   (kort ~3 dagen / middel ~1 week / lang ~3 weken, bv. spiraal naar 400-500).
   Een **spaardoel-pin** in de winkel: kind kiest één item, de teller toont "nog
   X leerdagen tot je 🌀".

**Effort: laag-middel.** Alleen constants + één UI-element. STOPLIST-veilig (geen
nieuw spel). Maakt leren de vermenigvuldiger i.p.v. één van de bronnen.

---

## 🟠 #6 — Leer-ladder verlengen boven 150 stappen

**Het probleem (economie-designer, middel).** De unlock-ladder is onderin dicht
(10/18/28/40/55) maar bovenin dun; na de **draak (150 stappen)** is er geen
leer-verdiend doel meer — precies voor je *beste, meest gebonden* leerlingen.

**De bouw.** De al aangekondigde gouden vormen-familie (#46) koppelen aan
mijlpalen 180/220/275 stappen + 1-2 fabel-varianten (gouden draak op 350).
Hergebruikt `telGeleerdeStappen` + de souvenir-pijplijn — vooral data-regels.

**Effort: laag.** Houdt de doorzetters richting Doorstroomtoets vast.

---

## 🟢 #7 — Het park levendiger voor het jongste kind (Sem, 8 jaar)

Drie kind-eerlijke observaties, alle drie goedkoop op te lossen:

1. **"Als ik op de koe tik, doet ze niks."** In Toca Boca reageert álles op een
   tik; hier niet. **Bouw:** tik op dier = kort geluidje (boe/blaf/hinnik/brul,
   CC0-mp3) + één keer de `Eating`/`Idle_2`-clip die al in de Quaternius-GLB's
   zit. Grootste bind-winst voor jonge kinderen, effort laag.
2. **"Mijn gele route gaat naar een klok, niet naar de dieren."** De route voor
   groep 3-5 loopt langs alle leuke dingen (honden, boerderij, raptor) heen naar
   de meet-tuin. **Bouw:** minstens één **dieren-stop** in de gele route met een
   tel-praatje op groep 3-4-niveau ("Tel de schapen! Hoeveel poten samen?"). De
   route-cellen lopen al vlak langs de verblijven. Effort laag.
3. **"De praatjes op mijn route zijn te moeilijk."** De moestuin praat over
   oppervlakte (l×b, m² = groep 5/6) en het telraam over plaatswaarde/kommagetallen
   — op de groep-3-5-route. **Bouw:** een `praatjeJong`-variant voor groep ≤5
   (klok = hele uren, moestuin = hokjes tellen, telraam = tellen tot 100). Sluit
   aan op PARK-LEERLIJN-G1-G8. Effort middel.
4. **Bonus:** trein instapbaar maken zoals de achtbaan al is (park-taxi over de
   bestaande rail-lus) — lost lange saaie loopstukken op én "bewegend ding waar ik
   in mag" is precies wat een 8-jarige het vetst vindt. Effort middel.

---

## 🗺️ Aanbevolen bouwvolgorde (megabuild)

**Sprint 1 — "morgen kom ik terug" (allemaal effort laag, samen ~1 bouwdag):**
1. #1 Weglopend dier → verstopt-dier *(unaniem, grootste bind-fix)*
2. #3 Volgende-dino-bord op de groeiplek *(data is er al)*
3. #2 Wandel-stempelkaart *(dagritueel bouwt eindelijk iets op)*
4. #7.1 Dieren reageren op een tik *(geluidjes + bestaande clips)*

**Sprint 2 — "leren wordt zichtbaar in het park":**
5. #4 Gouden vormen fase 2 (alle 6 vormen)
6. #5 Spaarboog + parkinkomen aan leren koppelen
7. #7.2/#7.3 Dieren-stop + jong-praatjes op de gele route

**Sprint 3 — "de doorzetters vasthouden + polish":**
8. #6 Leer-ladder verlengen boven 150
9. #7.4 Instapbare trein

---

## ⏳ Nog aan te vullen (na 25 aug)

De 8 niet-afgeronde kijkers draaien we bij via de workflow-resume (de 3 klaar
zijnde komen uit cache): **level-designer** (plattegrond/zichtlijnen),
**onboarding-designer** (eerste 5 min / discoverability), **juice/feel-designer**
(game feel + performance), **Yara 10** (Roblox/verzamelen), **Daan 12** (brugklas
/ "te kleuterig"), **ouder+kind samen** (het kwartier-samen), **Noor 11**
(completionist / 100%-overzicht), en de **leerkracht** (didactische dekking —
o.a. de terechte vraag: waar zijn taal & begrijpend lezen in het park?).
