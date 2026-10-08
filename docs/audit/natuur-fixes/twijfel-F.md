# Twijfelgevallen deel F (oefenbank PO) — niet gewijzigd

## Niveau-mapping (relevant voor alle twijfels hieronder)
- `SAMPLE_QUESTIONS.natuur.groep3` wordt óók aan **groep 4** aangeboden: `src/data/sampleQuestions.js` (onderaan, "B3.3"-lus) zet `vak.groep4 = vak.groep3` voor elk vak zonder eigen groep4-set; natuur heeft er geen.
- `natuur.groep5` = niveau **"Groep 5-6"** (`src/constants.js` LEVELS: `groep5` label "Groep 5-6"; er bestaat geen `groep6`-id, dus groep 6 krijgt deze pool).
- `natuur.groep7` = niveau **"Groep 7-8"** én zit in de Doorstroomtoets-mixen `cito wereldorientatie` en `cito groep8-wereldorientatie` (`src/data/topics.js` r. 675/730/764/825/832).
- `natuur.groep8` heeft geen eigen LEVELS-id; bereikbaar via o.a. `src/features/mastery/herhaalQuiz.js` (loopt alle SAMPLE_QUESTIONS door). Hoe vaak een kind deze pool echt ziet, heb ik niet kunnen vaststellen.

## 1. natuur.groep7 — veel natuurkunde/scheikunde op VO-niveau (groep 7-8 + Doorstroomtoets-mix)
Duidelijk boven groep-7/8-niveau, maar het is geen biologie en een fix zou een volledig nieuwe vraag zijn (herschrijven, niet corrigeren). Daarom niet aangepast; advies: vervangen door PO-vragen of verhuizen naar `klas1`/`klas3`.
- `Wat is een covalente binding bij moleculen?` (klas 3-4 scheikunde)
- `Wat is het verschil tussen een zwak en sterk zuur?` (klas 4+ scheikunde)
- `Wat is het verschil tussen een kernreactie en een chemische reactie?`
- `Wat is de pH-schaal?`
- `Waaruit bestaat een atoom?` / `Wat is een atoom?` / `Wat is een molecuul?` / `Wat is een element (zoals in het periodiek systeem)?`
- `Wat is het verschil tussen organische en anorganische stoffen?`
- `Wat is een exotherme reactie?`
- `Wat is dichtheid?` (opties "Massa per volume" e.d.)
- `Wat is de Newton (N)?`
- `Wat is diffusie?` en `Wat is osmose?` (biologie klas 1-2; "halfdoorlaatbaar vlies", "concentratie")
- `Wat is mutualisme (een vorm van symbiose)?` (vakwoord als kern)

## 2. natuur.groep7 — `Wat is het verschil tussen fotosynthese en celademhaling?`
Biologisch juist, maar 'celademhaling' + 'glucose' is brugklasstof. Vereenvoudigen kan alleen door de vraag inhoudelijk te veranderen → twijfel. Fotosynthese zelf (eenvoudig) hoort wél in groep 7-8.

## 3. natuur.groep5 — `Hoe verplaatst warmte zich van de zon naar de aarde?` (Convectie / Diffusie / Geleiding / Straling)
Alle vier opties zijn VO-natuurkundetermen; te moeilijk voor groep 5-6. Geen biologie; vervangen vereist nieuwe vraag.

## 4. natuur.groep5 — `Waaruit bestaat lucht voornamelijk?` (Stikstof)
Juist (~78%), maar voor groep 5-6 een strikvraag (bijna elk kind kiest zuurstof). Feit klopt, dus laten staan; overweeg naar groep7 te verplaatsen.

## 5. natuur.groep5 — `Wat hebben planten nodig om te groeien?` (Water, licht en CO2) en `Wat heeft een plant nodig om te groeien?` (Licht, water, CO2 en voedingsstoffen)
Juist, maar 'CO2' als onderdeel van het goede antwoord in groep 5. In de groep3-pool staat dezelfde vraag met 'lucht'. Twijfel of 'CO2' in groep 5-6 al bekend is; niet gewijzigd. Let ook op: twee bijna identieke vragen in één pool.

## 6. natuur.groep5 — `Wat is de rol van de zon in het leven op aarde?` (goed: "Zonlicht is de energie voor alle voedselketens")
'Alle' is strikt genomen te stellig (voedselketens bij hete bronnen in de diepzee draaien op chemische energie). Voor groep 5-6 verdedigbaar; eventueel "bijna alle".

## 7. natuur.groep5 — `Wat is de levenscyclus van een vlinder (metamorfose)?`
'metamorfose' staat in de vraag, maar als extra woord (niet de kern). Kan "(gedaanteverwisseling)" worden; stijlkeuze, niet gewijzigd.

## 8. natuur.groep3 — `Wat is het verschil tussen een vlinder en een mot?` en `Wat is een paddenstoel?` (Een schimmel)
Feitelijk juist, maar abstract voor groep 3 ("dagactief", "schimmel"). Past beter bij groep 4-5. Niet gewijzigd.

## 9. textbookQuestions "naut-meander-brandaan" — `Wat is een melkweg?` uitleg "~200 miljard sterren"
Sampleset groep8 zegt "~100 miljard". Beide liggen binnen de gangbare schatting (100-400 miljard); inconsistent maar niet fout.
