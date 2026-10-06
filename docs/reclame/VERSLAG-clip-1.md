# Verslag reclameclip 1 (6 okt 2026)

Branch: `reclame/clip-1` (vanaf `main`, niet gemerged). Scènes en tijdcodes: `docs/reclame/STORYBOARD-clip-1.md`.

## Wat er is gemaakt

| Bestand | Inhoud |
|---|---|
| `public/reclame/clip-v1.mp4` / `clip-v1-stil.mp4` | V1 "Vraag": kortingsvraag (€ 80, 25%), kind kiest € 20, uitleg in 3 stappen, eindkaart |
| `public/reclame/clip-v2.mp4` / `clip-v2-stil.mp4` | V2 "Ouder": drie tekstkaarten, kwartierklok die volloopt, eindkaart |
| `public/reclame/clip-v3.mp4` / `clip-v3-stil.mp4` | V3 "Nieuwkomers": "Mag ik naar de wc?" woord voor woord met Arabische steunregel, eindkaart |
| `public/reclame/clip-vN-eindkaart.png` | Stilstaand beeld van de eindkaart (1080×1920), per variant. De eindkaart is in alle drie gelijk, dus de drie png's zijn ook gelijk. |
| `scripts/reclameclip/maak-clip-1.mjs` | Het script dat alles opnieuw maakt (beeld, muziek, mp4's, png's) |

De oude `scripts/reclameclip/maak-clip.mjs` is niet aangepast. Die gebruikt schermafbeeldingen van de live site en Windows-paden, dus het resultaat is niet steeds hetzelfde. Het nieuwe script staat ernaast en werkt helemaal lokaal.

## Hoe het werkt (deterministisch, zonder externe diensten)
1. Elke variant is één HTML/SVG-pagina met `window.render(t)`. Elk beeld hangt alleen af van de tijd t. Er zijn geen CSS-animaties, geen klok en geen toeval.
2. Headless Chromium (Playwright) maakt 600 png-frames en stuurt ze via een pipe naar ffmpeg (libx264, crf 20, yuv420p, profiel high).
3. Een kleine synth in Node schrijft het deuntje als wav (44,1 kHz stereo). Daarna komt er AAC 160 kbit/s bij. De `-stil`-versie krijgt een stil AAC-spoor (anullsrc), zodat er toch een audiospoor is waar de eigen stem op kan.
4. Lettertypen zijn lokaal: Noto Sans en Noto Sans Arabic. Er zijn geen Google Fonts, geen beelden en geen muziek van internet gebruikt.
5. Controle: hetzelfde frame (V1, t = 8 s) is twee keer los gerenderd en gaf allebei md5 `d4c8d7a1…3b5f`. De render is dus te herhalen.

Rendertijd in deze container: ongeveer 3 minuten per variant (172 / 206 / 191 s).

## Controle met ffprobe

Elk bestand is ook helemaal gedecodeerd met `ffmpeg -f null`. Dat gaf 0 fouten.

| Bestand | Video | Frames | Duur | Audio | Grootte | Volume (gem. / piek) |
|---|---|---|---|---|---|---|
| clip-v1.mp4 | h264 1080×1920, 30 fps | 600 | 20,000 s | aac 44,1 kHz stereo | 1,45 MB | −19,7 / −8,1 dB |
| clip-v1-stil.mp4 | h264 1080×1920, 30 fps | 600 | 20,000 s | aac 44,1 kHz stereo (stil) | 1,07 MB | −91 dB |
| clip-v2.mp4 | h264 1080×1920, 30 fps | 600 | 20,000 s | aac 44,1 kHz stereo | 1,16 MB | −19,7 / −8,1 dB |
| clip-v2-stil.mp4 | h264 1080×1920, 30 fps | 600 | 20,000 s | aac 44,1 kHz stereo (stil) | 0,78 MB | −91 dB |
| clip-v3.mp4 | h264 1080×1920, 30 fps | 600 | 20,000 s | aac 44,1 kHz stereo | 1,24 MB | −19,7 / −8,1 dB |
| clip-v3-stil.mp4 | h264 1080×1920, 30 fps | 600 | 20,000 s | aac 44,1 kHz stereo (stil) | 0,86 MB | −91 dB |

Alle bestanden zijn ruim onder de 15 MB.

## Inhoud nagekeken
- **V1-som**: komt uit `procentenPo.js` (stap 4, eerste vraag; antwoord-index 0 = € 60). Zelf nagerekend: 25% van € 80 = € 20 en € 80 − € 20 = € 60. Ook de foute keuze € 20 en de hint passen bij de wrongHint in de app.
- **V3-zin**: "Mag ik naar de wc?" en het Arabisch komen letterlijk uit `nieuwkomersZinnen.js` (`vertaling.ar`). De zes genoemde steuntalen zijn precies de talen in die `vertaling`-velden.
- **Huisregels**: altijd "je" en nooit "u". Geen emoji's en geen AI-beelden; alleen tekst, vormen, het logo en een zelf getekende klok. Er worden geen concurrenten genoemd. Het logo staat in elke scène in beeld en de slogan + leerkwartier.app + "Gratis, zonder account, zonder reclame." staan op de eindkaart. De onderste 440 px blijven leeg voor ondertitels.

## Let op / open punten
- **Prijzen in V2** (oefenboeken € 30, bijles € 37 per uur) komen uit de opdracht en zijn niet door mij gecontroleerd. In een advertentie moet een prijsvergelijking te onderbouwen zijn. Bewaar dus een bron, bijvoorbeeld een webwinkelprijs van een oefenboek of het gemiddelde uurtarief voor bijles.
- De Mulberry-pictogrammen uit de app (`public/picto/wc.svg`) zijn bewust **niet** gebruikt. Hun licentie (CC BY-SA 4.0) zou een naamsvermelding in de clip nodig maken.
- De mp4's staan in `public/`. Na een merge naar main worden ze dus ook gepubliceerd op leerkwartier.app/reclame/… (samen ~7 MB). Wil je dat niet, verplaats ze dan vóór de merge.
- `BOUW_VERSIE` is niet opgehoogd: er is geen wijziging aan de app en dit is geen push naar main.
- De muziek is alleen technisch gecontroleerd (niveau, geen clipping, fades), niet beluisterd. Luister er even naar voordat je hem plaatst.
