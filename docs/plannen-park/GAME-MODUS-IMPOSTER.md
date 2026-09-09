# 🎮 Game-modus in het park — "Wie is de imposter?"

*Mark, 9 sep 2026: "ik wil het park in gewone modus en game modus. In game modus kun je met meerdere spelers in je veld (na uitnodiging) imposter. Laat de bots meedoen. Laat als opdracht voor punten de sommen of taken in het park maken. Denk mee, dit gaan we doen."*

## Waarom dit past (en de spanning met "geen nieuwe spellen")
De bevroren keuze "géén nieuwe spellen" ging over spelletjes die het leren vervangen. Hier is het spel de motor en blijft het leren de brandstof: een taak in het spel ís een som of taalvraag op je eigen niveau. Punten en munten krijg je alleen door goed te antwoorden. Leerkwartier-test: helpt een 10-jarige iets beter begrijpen? Ja — elke ronde 15-25 vragen uit de Doorstroomtoets-stof, met de bestaande uitleg bij een fout.

## Twee standen van het park
- **Gewone modus** (zoals nu): bouwen, leren, samen bouwen via parkcode.
- **Game-modus**: ☰ → 🎮 *Wie is de imposter?* Het park wordt een speelveld met taakposten. Bouwen staat uit tijdens een ronde; daarna gewoon verder.

## Regels (kindveilig, zonder chat)
- 6 tot 10 spelers per ronde (Mark 9 sep: max 10): echte spelers (via de parkcode, fase 2) aangevuld met **bots** (blok-maatjes met eigen naam). Eén **imposter** (twee bij 8 spelers); de rest zijn **bouwers**.
- **Bouwers** doen taken: bij een **taakpost** (leerbord in het park) 3 vragen op je eigen groep-niveau. Goed = taak klaar + punten; fout = uitleg, taak blijft open. Alle taken klaar = bouwers winnen.
- **De imposter** doet alsof, en kan een bouwer **tikken** als niemand anders dichtbij is: die is **af** en kijkt de rest van de ronde mee vanuit de **zeppelin** boven het park (Mark 9 sep; eerst was het 15 s bevroren). Wie uitgestemd wordt gaat ook naar de zeppelin. De resterende taken van een af-bouwer vervallen, zodat de bouwers nog kunnen winnen. Geen doden, geen bloed.
- **Vergadering**: wie iets verdachts zag drukt op 🚨 (max 2 per speler), of automatisch elke 2 minuten. Iedereen stemt binnen 20 seconden: wie is de imposter? Geen chat — wel snelle redenen-knoppen ("👀 stond bij een post zonder taak te doen", "❄️ was bij mij toen ik bevroor", "🤷 geen idee"). Meeste stemmen = uitgestemd. Imposter uitgestemd → bouwers winnen. Bouwer uitgestemd → die speelt door maar mag niet meer stemmen; imposter wint bij 2 foute stemrondes of als de tijd om is (5 min).
- **Punten** = 10 per goed antwoord + 50 winstbonus; punten worden **munten** voor het park. De imposter verdient punten met elke bouwer die hij bevriest én met taken die hij "doet" (ook echte vragen — hij moet immers doen alsof, en leert dus mee).

## Bots
- Lopen tussen taakposten, "doen" 8-15 s een taak, gaan naar de volgende. Ontwijken elkaar (bestaande menigte-logica niet nodig: paden zijn los).
- Bot-imposter: zoekt een bouwer die alleen staat (niemand binnen 8 m), tikt, loopt weg. Nooit twee keer dezelfde speler achter elkaar.
- Bots stemmen: de bot-imposter stemt op een willekeurige bouwer; bouwer-bots stemmen op wie ze zagen tikken (60%), anders willekeurig, en 30% onthouden zich. Zo blijft het spannend maar winbaar.

## Fasen
1. **Fase 1 (nu):** solo met bots, in je eigen park of een gedeeld park. Volledige ronde: rolkaart → taken → tikken → vergadering → einde → munten. Engine los van React (`imposterEngine.js`, testbaar), presentatie in `ImposterGame.jsx` (in de 3D-scène, HUD via overlay).
2. ✅ **Fase 2 (LIVE v611, 9 sep):** meerdere echte spelers via de parkcode. Wie op 🎮 drukt is spelleider; iedereen in het park krijgt een uitnodigingsbanner (Meedoen). De spelleider draait engine en bots en stuurt 2×/s een compacte spelstand via het Cloudflare-doorgeefstation (terugval: Supabase-broadcast); medespelers sturen alleen acties. Rollen gaan als los bericht per speler en staan niet in de spelstand tot iemand uitgestemd is of het spel klaar is. Vergadering sluit zodra alle echte spelers stemden.
3. ✅ **Fase 3 (LIVE v612, 9 sep):** klas-variant. De spelleider kiest in de lobby **Vragen uit** (🎲 Alles op niveau / 🔢 Rekenen / ✏️ Taal & spelling / 📖 Begrijpend lezen / 🌍 Wereld & natuur / 🎓 VMBO-examens), het **niveau** (Eigen niveau, groep 4-8, Middelbaar) en **1 of 2 imposters** (max = helft van de spelers min 1). Keuze reist mee in de spelstand, dus elke speler haalt zijn taakvragen uit dezelfde bron (`vragenBron.js`: 3 vragen via buildTopicQuiz uit een willekeurig passend leerpad; terugval start-kwartier-mix). **Klassement per parkcode**: na elke ronde bewaart de spelleider de punten van alle echte spelers (`park_room_scores`, RLS: alleen ingelogd, door = eigen uid); lobby + eindscherm tonen de top van de laatste 60 dagen (RPC `park_room_klassement`). Leerkracht-kaart op /leerkracht legt de klas-game uit.

## Meten
Events `game_start {groep, spelers, bots}`, `game_taak {goed}`, `game_tik`, `game_vergadering {uitkomst}`, `game_einde {gewonnen, rol, punten, duur}`. Taakvragen tellen mee als `question_answered` (pad van de vraag) → weekrapport.

## Technisch
- Taakposten: 6 vaste plekken in een ring rond het parkmidden (r≈32 m), op de grond gezet met `heightRef`; botsing vermeden via `isSolid`.
- Vragen: `bouwStartVragen(level, n)` uit het start-kwartier (paden per groep) — zelfde bron, zelfde uitleg.
- Bots: `CharacterModel` blok-maatjes; positie uit de engine per frame.
- Tikken: afstand ≤ 2,5 m, en geen andere actieve speler binnen 8 m (anders "te veel ogen"). Af-spelers (zeppelin) tellen niet als ogen.
- Zeppelin: géén eigen schip — af-spelers varen mee op het gondeldek van de **bedank-zeppelins** van de partners (Mark 9 sep: "de dank/ere-zeppelins die we al hadden"). `game/Zeppelin.jsx` rekent de plek uit via `zeppelinVlootActief()`/`zeppelinPositie()` uit ParkProps (max 3 per schip, dan het volgende schip); de eigen camera hangt achter dat dek met blik op het park (`onRit` verbergt het poppetje op de grond en zet gids/poort stil).
- Rolverdeling: echte spelers gaan vóór bots bij de imposter-loting (solo blijft echt loten).
