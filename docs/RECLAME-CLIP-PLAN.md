# 🎬 Wekelijkse reclame-clip (~60 sec) — script + pijplijn

> Mark 5 aug 2026: "reclameclip van ~60 sec met die 3D-kubus en alle kernpunten,
> evt. zelf beeldscherm opnemen — en een vast script zodat we wékelijks een korte
> clip kunnen genereren." Status: plan; bouwen = volgende sessie.

## Drie routes (advies: A, met B als opmaak-hulp)

**A. Schermopname-pijplijn (gratis, volledig herhaalbaar) ← ADVIES**
Playwright kan video opnemen terwijl het door de app klikt (echte app-beelden
verkopen beter dan stock). ffmpeg plakt de shots + titelkaarten aan elkaar en
legt de jingle eronder (Leerkwartier-reclamelied.mp3 — standaard onder elke
reclame, recept bestaat al). Uitvoer: 9:16 (Reels/Shorts/TikTok) + 1:1 (feed).
Eén keer bouwen = elke week een verse clip door alleen het thema-slot te wisselen.

**B. Canva via de claude.ai-koppeling (de "omweg" die Mark bedoelt — bestaat al!)**
De Canva-MCP is aan deze omgeving gekoppeld (generate-design + export-design,
video-export als MP4 kan). Goed voor strakke titelkaart-animaties en een
intro/outro-sjabloon; minder geschikt voor echte app-beelden. Combineren met A:
Canva-kaarten als tussenshots.

**C. AI-video (Sora/Veo/Runway)** — mooi maar betaald en minder "echt"; past
niet bij kosten-bewust. Alleen overwegen voor een eenmalige hero-clip.

## Het vaste 60-seconden-script (shot-voor-shot)

| Tijd | Shot | Beeld | Tekst (kaart of voice-over, B1) |
|---|---|---|---|
| 0-5s | Intro | **3D-kubus draait** + logo, jingle start | "Leerkwartier" |
| 5-15s | Probleem | kind + toets-sfeer (app-beeld dagvraag) | "De Doorstroomtoets komt eraan. Veel kinderen oefenen — maar begrijpen het niet écht." |
| 15-32s | Kern-USP | schermopname: vraag → fout → **uitleg op 3 niveaus** → leerpad → terug | "Bij elke fout: uitleg die simpeler wordt tot het kwartje valt." |
| 32-42s | 🔄 **WEEK-SLOT** | wisselt per week: dagvraag van die week / ander vak / nieuwe feature | bv. "Deze week: breuken." |
| 42-52s | Beloning + ouders | park-beelden + weekrapport/Kwartiercheck | "Een kwartier per dag is genoeg. Ouders en verzorgers kijken mee." |
| 52-60s | CTA | logo + QR + jingle-slot | "Gratis oefenen — geen account nodig. **leerkwartier.app**" |

Regels: B1-taal · "gratis oefenen" (nooit kale 100%-gratis-claim) · "ouder of
verzorger" · jingle eronder · geen antwoord-verklap in beeld.

## Bouwstappen (volgende sessie)

1. `scripts/maak-reclameclip.mjs`: Playwright met `recordVideo` doorloopt een
   vast klik-scenario (home → dagvraag → fout → 3 niveaus → leerpad → park) op
   de productie-site; 3D-kubus-shot apart opnemen (component bestaat nog in de
   code, alleen uit de hero gehaald).
2. Titelkaarten: HTML-sjablonen (zelfde huisstijl als dagkaart) → headless
   screenshots → ffmpeg tussenvoegen; jingle + fades met het bestaande
   ffmpeg-recept.
3. Week-slot parametriseren (`--thema breuken`), uitvoer naar
   `Desktop\Leerkwartier-social\clips\clip-<datum>.mp4`.
4. Wekelijks ritueel: clip genereren → zelf posten via Chrome (IG Reel + FB).
5. Optioneel daarna: Canva-intro-sjabloon voor extra glans.
