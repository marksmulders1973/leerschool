# ✨ Magische poorten — plan (park → leerpad)

> Mark 16 aug 2026: *"maak het zo dat je van de piramide naar het leerpad kunt —
> een soort magische poort: 'weet je hoe dat werkt? Loop maar door de magische
> poort.' Dat ook met bomen → fotosynthese. Stuur naar zoveel mogelijk
> leerpaden. Bedenk alleen, maak een rapport."*
> Dit is het denk-mee-plan. **Nog niet bouwen** — eerst Mark's go per fase.

## 1. Het idee in één zin
Elk mooi object in het park krijgt een **glimmende poort**. Loop je erdoorheen,
dan stap je "de wereld van dat onderwerp" binnen en opent het bijbehorende
leerpad. Zo wordt het park een **kaart naar de hele leerstof** — spelen en leren
lopen naadloos in elkaar over.

## 2. De mechaniek (fase 1)
- **Poort-object**: twee stenen/gouden pilaren + een licht trillend, doorschijnend
  vlak (geanimeerde emissive/opacity) + een paar vonkjes. Erboven zweeft de emoji
  + een kort label ("Fotosynthese", "Piramide-wiskunde"). Kleur = per vak-thema.
- **Twee manieren, ze vullen elkaar aan:**
  1. **Tik op het object → "💡 Hoe werkt dit?"** = het bestaande info-paneel
     (praatje + weetje + leer-knop(pen)). *Begrijpen eerst* — Leerkwartier-DNA.
  2. **Loop dóór de poort** = de snelle route: een korte flits *"✨ Je stapt in de
     wereld van …"* → het leerpad opent (`onOpenLeerpad(leerpadId)`).
- **De bots wijzen je erop**: je maatje/de rondlopende gids zegt bij het naderen
  *"Weet je hoe dit werkt? Loop maar door de poort!"* (hergebruikt het bestaande
  `LEERMOMENT_BY_ASSET` + spreek()).
- **Meten**: eigen event `park_poort_door` + de bestaande `park_naar_leren`
  (via = "poort"), zodat het dagrapport de nieuwe park→leren-conversie ziet.
- **Techniek**: nieuw `MagischePoort`-component + een trigger-volume (speler binnen
  ~1,2 m van de poort-cel én lopend = doorgang). Bouwt voort op de al werkende
  piramide-koppeling (leerpadId + optionele leerpadId2). Geen nieuwe dependencies.

## 3. Harde regels (denk-mee)
- **Alleen bestaande leerpaden** (leerpadId moet in `pathManifest` staan) — hieronder
  is elke poort al aan een echt id gekoppeld.
- **Het park moet mooi blijven** ([[feedback_park_doel_binden_leren]]): poorten
  subtiel/smaakvol, niet overal knallend. Overweeg een zachte gloed die pas
  oplicht als je in de buurt komt.
- **Kern-doelgroep = groep 6-8 (Cito)** eerst; een paar VO-pareltjes (piramide,
  Eiffeltoren-driehoeken) mogen als mooie uitdaging.
- **Grootste winst met de minste moeite eerst**: veel *bestaande* objecten kunnen
  meteen een poort worden (dieren, prullenbak, kraam, bomen) — nul nieuw 3D-werk.

## 4. Poorten die er (bijna) gratis zijn — bestaande objecten
| Object (bestaat al) | Poort naar leerpad | Vak | Waarom leuk/leerzaam |
|---|---|---|---|
| 🌳 Boom | `fotosynthese-biologie` | biologie | (Mark's voorbeeld) boom maakt zelf eten |
| 🚂 Stoomtrein | `industriele-revolutie-po` | geschiedenis | al gekoppeld |
| 🎡 Reuzenrad | `oppervlakte-omtrek-po` | rekenen | cirkel/omtrek al gekoppeld |
| 🎢 Achtbaan | `krachten-natuurkunde` | natuurkunde | zwaartekracht/vaart |
| ⛲ Fontein | `waterkringloop-po` | natuur | al gekoppeld |
| 🎠 Draaimolen | `tijd-snelheid-afstand-po` | rekenen | buitenkant sneller |
| 🪁 Zweefmolen | `krachten-natuurkunde` | natuurkunde | middelpuntzoekende kracht |
| 🕐 Station | `dienstregeling-roosters-po` | studievaardigheden | roosters lezen |
| 🔺 Piramide | `ruimtemeetkunde` + `pythagoras` | wiskunde | ✅ al gebouwd 16 aug |
| 🦊 **Elk dier** | `dierenklassen-po` | natuur | zoogdier/vogel/vis indelen — enorme dekking, 0 werk |
| ♻️ Prullenbak/donatie | `recyclen-afval-po` | natuur | afval scheiden, duurzaam |
| 🛒 Marktkraam | `winst-rekenen-po` (+ `geld-rekenen`) | rekenen | kraam heeft al reken-vragen → poort formaliseert het |

## 5. Nieuwe poort-objecten (op rang van waarde) — fase 2/3
*Elk gekoppeld aan een bestaand pad. "2e poort" = optionele tweede leer-knop.*

| # | Nieuw object | Poort → leerpad | 2e poort | Vak | Denk-mee |
|---|---|---|---|---|---|
| 1 | 🗼 **Eiffeltoren** | `topografie-europa-landen-po` (Parijs/Frankrijk) | `vlakke-figuren-po` (waarom zo stevig? allemaal driehoeken!) | aardrijkskunde/rekenen | Mark's voorbeeld; weetje: 324 m, 1889, ijzer. Prachtige blikvanger naast de piramide |
| 2 | 🏛️ **Grieks/Romeins tempeltje** | `oudheid-egyptenaren-grieken-romeinen-po` | — | geschiedenis | vormt met de piramide een "oude wereld"-hoek |
| 3 | 🌍 **Wereldbol** | `topografie-wereld-werelddelen-po` | `continenten-wereld-po` | aardrijkskunde | draaibaar; tik = werelddeel |
| 4 | 🔭 **Sterrenwacht/telescoop** | `sterren-planeten` | `ruimtevaart-po` | natuur | 's avonds sterretjes-effect |
| 5 | 🗿 **Standbeeld** | `bekende-nederlanders-po` | `nederlandse-kunstenaars-po` | geschiedenis | hergebruikt de portretten die we 16 aug toevoegden! |
| 6 | 🧭 **Wegwijzer/kompas-bord** | `kaartlezen-po` | `plattegrond-legenda-po` | studievaardigheden | pure Cito-vaardigheid |
| 7 | 🌾 **Hollandse molen** | `water-erfgoed-nederland-po` | `energiebronnen-po` (windenergie) | aardrijkskunde/natuur | Hollandse sfeer |
| 8 | 🚀 **Raket** | `ruimtevaart-po` | `krachten-natuurkunde` (lancering) | natuur | grote wow voor kinderen |
| 9 | 🐟 **Vijver/aquarium** | `dierenklassen-po` (vissen) | `waterkringloop-po` | natuur | leven in het water |
| 10 | 🎨 **Schildersezel/paviljoen** | `nederlandse-kunstenaars-po` | `klassieke-muziek-po` (muziektent-variant) | geschiedenis/kunst | portretten hergebruikt |
| 11 | 🌋 **Vulkaan** | `platentektoniek-aardrijkskunde` | — | aardrijkskunde (VO) | rook-effect; stretch-onderwerp |
| 12 | 🦕 **Dino-skelet/fossiel** | `evolutie-mens-po` | — | natuur | kinderen zijn dol op dino's |
| 13 | 🥕 **Kas met groenten** | `gezonde-voeding-po` | `fotosynthese-biologie` | natuur | groente groeit |
| 14 | 🌦️ **Weerstation** | `weersvoorspelling-po` | — | natuur | draaiend windvaantje |
| 15 | 🏦 **Spaarpot-huisje/pinautomaat** | `financiele-vorming-po` | `geld-rekenen` | rekenen | geldwijsheid (geen echte bank-UI!) |
| 16 | 📚 **Boekenkraam/bibliotheekje** | `alfabet-woordenboek-po` | `bekende-boeken-literatuur-po` | studievaardigheden | opzoeken |
| 17 | 🏃 **Sportveldje** | `olympische-spelen-po` | `tijd-snelheid-afstand-po` | geschiedenis/rekenen | — |
| 18 | 🌉 **Brug** | `vlakke-figuren-po` (driehoeken) | `krachten-natuurkunde` | rekenen/natuurkunde | constructie |

**Dekking**: hiermee sturen we vanuit het park naar ~25 verschillende leerpaden,
verdeeld over rekenen, natuur, biologie, aardrijkskunde, geschiedenis,
studievaardigheden en wiskunde — precies Mark's "zoveel mogelijk".

## 6. Fasering (Mark's go per fase)
- **Fase 1 — mechaniek (1 sessie):** `MagischePoort`-component + walk-through-trigger
  + gids-prompt, gekoppeld aan de 9 bestaande leermomenten (incl. piramide). Bewijs
  de loop end-to-end; meet `park_poort_door`.
- **Fase 2 — gratis dekking (1 sessie):** poorten op bestaande objecten die nog geen
  leermoment hebben: **elk dier → dierenklassen**, prullenbak → recyclen, kraam →
  winst. Nul/weinig nieuw 3D-werk, grote sprong in dekking.
- **Fase 3 — landmarks (2-3 sessies):** de nieuwe procedurele bouwsels uit §5, op
  rang: Eiffeltoren → tempeltje → wereldbol → telescoop → standbeeld → kompas →
  molen → raket … Elk als attractie in de winkel (zoals de piramide).
- **Fase 4 — polish + retentie:** vak-kleur per poort + vonkjes; **"poort-paspoort"**:
  verzamel welke poorten je al doorliep, zichtbaar op je persoonlijke pagina (sluit
  aan op het sterretjes-lijstje/hub-ster van 16 aug). Optioneel: een streak/beloning.

## 7. Waarom dit strategisch sterk is (denk-mee)
- **Park→leren-funnel wordt de kern**, niet een bijzaak: elke poort is een gemeten
  ingang naar de leerstof ([[project_studiebol_park_benoembaar]] / "cirkel is rond").
- **Hergebruik = hefboom**: dieren/prullenbak/kraam/bomen leveren meteen ~grote
  dekking zonder nieuwe art.
- **Bindt het park aan echt leren** zonder de "mooi park"-belofte te breken (poorten
  subtiel; info-paneel blijft de begrijp-laag).
- **Groei-haak**: "verzamel alle poorten" maakt het park een reden om terug te komen
  (retentie-pijler), en de portretten/piramide die we net bouwden krijgen dubele functie.

## 8. Open keuzes voor Mark
1. Poorten **altijd zichtbaar** (glimmend) of pas oplichtend als je dichtbij komt
   (mooier, rustiger park)?
2. Walk-through = **direct** het leerpad, of eerst 1 tel het info-flitsje?
3. Beginnen we fase 2 (gratis dekking) of fase 3 (Eiffeltoren-landmark) eerst na fase 1?
