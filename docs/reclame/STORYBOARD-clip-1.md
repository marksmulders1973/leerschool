# Storyboard reclameclip 1 — drie varianten (okt 2026)

Voor Facebook en Instagram Reels. Doelgroep: ouders of verzorgers van kinderen in groep 6, 7 en 8 die zich zorgen maken over de Doorstroomtoets.
Formaat: 20 s, 1080×1920 (9:16), 30 fps. Toon: rustig en eerlijk, taalniveau B1, altijd "je".

**Vast in elke variant**
- Klein logo (`public/logo.jpg`) bovenin van 0,0 tot 15,5 s, daarna groot op de eindkaart.
- **Eindkaart 15,5–20,0 s**: logo (15,6) → slogan "Een kwartier per dag leren, een leven lang slimmer." (16,1) → **leerkwartier.app** (16,8) → "Gratis, zonder account, zonder reclame." (17,4). Blijft staan tot het einde, zonder zwart beeld.
- **Ondertitelzone**: alles onder y = 1480 px (de onderste 440 px) blijft leeg. Daar kunnen de ondertitels van de ingesproken stem komen, en daar zitten ook de knoppen van Reels.
- Muziek: zelf geprogrammeerd deuntje (F-groot, 76 bpm, zachte akkoorden, getokkelde noten, eenvoudige melodie, geen drums). Het faadt in vanaf 0 s en uit vanaf 18,4 s. Piek op −8 dBFS, zodat er ruimte is voor een stem. Elke variant bestaat ook als `-stil`-versie (stil audiospoor).

---

## V1 "Vraag" — `clip-v1.mp4`

Bron: `src/learnPaths/procentenPo.js`, stap 4 "% in de winkel", eerste vraag (pad voor groep 5-8; procenten met korting is stof voor groep 7-8).
Nagerekend: 25% = een kwart → €80 : 4 = €20 korting → €80 − €20 = **€60**. In de app staat ook antwoord 0 (€60). De fout die het kind in de clip kiest (€20) is precies de valkuil waar de app-hint voor waarschuwt: "dat is wat je BESPAART".

| Tijd (s) | Beeld |
|---|---|
| 0,0–0,7 | Label "Rekenen · groep 7 en 8" + vraagkaart: "Een schoen kost normaal **€ 80**. Je krijgt **25% korting**. **Hoeveel betaal je?**" |
| 1,3–2,9 | Vier antwoorden komen één voor één in beeld: € 60 · € 20 · € 40 · € 75 |
| 3,4–4,3 | Tik-cirkel op **€ 20**; het vak kleurt rustig oranje (geen rood kruis, geen "fout!") |
| 4,1 | Hint: "Dat is de korting. Hoeveel betaal je?" |
| 6,0–6,6 | Overgang naar de uitleg; bovenin klein: "€ 80 · 25% korting · hoeveel betaal je?", kop "Zo zit het" |
| 7,2 | Stap 1 "Wat vraagt de som?": wat je **betaalt**, niet hoeveel korting je krijgt. |
| 9,2 | Stap 2 "Reken de korting uit": 25% is een kwart. **€ 80 : 4 = € 20** korting. |
| 11,2 | Stap 3 "Haal de korting eraf": **€ 80 − € 20 = € 60**. Dat betaal je. |
| 13,3 | Groene knop met vinkje: "Het antwoord is € 60" (zachte puls) |
| 15,5–20,0 | Eindkaart |

## V2 "Ouder" — `clip-v2.mp4`

| Tijd (s) | Beeld |
|---|---|
| 0,0 | Kaart 1: "Oefenboeken kosten **€ 30**." |
| 3,1 | Kaart 2 eronder: "Bijles kost **€ 37 per uur**." |
| 5,9 | Kaart 3, groot in limegroen: "**Dit is gratis.**" (zachte puls) |
| 8,6–9,6 | Overgang naar de klok; kop "Elke dag een kwartier." |
| 9,8–13,8 | Kwartierklok loopt vol: de groene taartpunt groeit van 12 naar 3 uur (dezelfde vorm als het logo), teller "0 minuten" → "15 minuten" |
| 14,0 | "Klaar voor vandaag. Morgen weer." |
| 15,5–20,0 | Eindkaart |

## V3 "Nieuwkomers" — `clip-v3.mp4`

Bron: `src/learnPaths/nieuwkomersZinnen.js`, zin `wc` ("Mag ik naar de wc?"), Arabisch uit `vertaling.ar`: هل يمكنني الذهاب إلى الحمّام؟ De talenlijst (Arabisch, Oekraïens, Turks, Engels, Roemeens, Bulgaars) komt uit dezelfde `vertaling`-velden.

| Tijd (s) | Beeld |
|---|---|
| 0,0–0,7 | Label "Zinnen voor in de klas" + witte zinkaart "Mag ik naar de wc?" (woorden nog lichtgrijs) |
| 1,0 | Steunregel verschijnt onder een lijntje: label "Arabisch" + Arabische zin (van rechts naar links) |
| 1,4 / 2,2 / 3,0 / 3,8 / 4,6 | Woord-voor-woord oplichten (groen blok): Mag · ik · naar · de · wc? |
| 6,0 | Hele zin staat er, met een zachte groene onderstreping |
| 6,6 | "Woord voor woord, in je eigen tempo." |
| 9,0–9,6 | Overgang |
| 9,5 | "Ook voor kinderen die **net in Nederland** zijn" |
| 11,2 | "Met steun in het Arabisch, Oekraïens, Turks, Engels, Roemeens en Bulgaars." |
| 15,5–20,0 | Eindkaart |

---

## Voorstel: twee ingesproken zinnen van de maker (per variant)

Rustig inspreken, ongeveer van 1 tot 14 s, zodat de stem klaar is als de eindkaart komt. Naam en woorden mag je natuurlijk aanpassen.

**V1 "Vraag"**
1. "Ik ben Mark. Ik heb Leerkwartier gebouwd voor mijn eigen kinderen."
2. "Een fout antwoord is niet erg: je krijgt uitleg, stap voor stap, tot je het echt snapt."

**V2 "Ouder"**
1. "Ik ben vader, en ik vond dat oefenen voor de Doorstroomtoets niet duur hoeft te zijn."
2. "Daarom heb ik Leerkwartier gemaakt: een kwartier per dag, en het is gratis."

**V3 "Nieuwkomers"**
1. "Ik heb Leerkwartier gebouwd voor mijn kinderen, en voor elk kind dat Nederlands aan het leren is."
2. "Korte zinnen voor in de klas, woord voor woord, met hulp in je eigen taal."

## Opnieuw renderen

```bash
npm i --no-save playwright-core        # of: npm i (playwright staat in devDependencies)
# Linux: apt install fonts-noto-core ffmpeg
node scripts/reclameclip/maak-clip-1.mjs        # alle drie (~3 min per variant)
node scripts/reclameclip/maak-clip-1.mjs v2     # alleen V2
PROEF="2.5,8,19" node scripts/reclameclip/maak-clip-1.mjs v1   # alleen proefbeelden
```

Teksten en tijden staan bovenin elke variant in het script (`V1`, `V2`, `V3`: `html` + `render(t)`).
