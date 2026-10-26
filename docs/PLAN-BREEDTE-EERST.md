# 🧭 Plan — breedte eerst, dan diepte (verbeteringen + nieuw ontwerp samen)

Mark 26 okt 2026: *"maak eerst een plan dat de verbeteringen en het nieuwe ontwerp samen pakt. niet alles
hoeft direct. bv bij rekenen krijgen de kinderen eerst 20 vragen; zorg eerst dat alles over de breedte klopt,
dan steeds dieper."*

Dit plan vervangt de losse lijstjes (`PLAN-EENVOUD-KIND.md` stap 3-5, Kwaliteit eerst Q10-Q12 in `NOG-NALOPEN.md`)
door één volgorde. Het dagrapport-blok "Kwaliteit eerst" volgt voortaan dít plan.

## Het principe

**Klopt over de breedte** = voor elke groep (3 t/m 8) en elk vak dat bij die groep hoort (`VAKKEN_PER_GROEP`):

1. het kind ziet het vak als tegel "Rekenen · groep 5" en kan met één tik beginnen;
2. de **eerste 20 vragen** die het kind krijgt zijn een vaste, nagekeken **startset** (twee blinde nakijkers, 0 bekende fouten);
3. de startset past bij de groep (SLO-niveau, geen stof van twee groepen hoger);
4. het Begin-kwartier gebruikt dezelfde startsets, en na 10 vragen ontstaat een cijfer op de tegel;
5. "Werk aan" wijst naar iets dat bestaat en klopt.

Pas als een rij (een groep) over de hele breedte groen is, gaan we bij die groep de diepte in: meer vragen
per onderwerp, leerpaden na een fout, slimmere verbeterpunten. Rekenen heeft nu al 800-2.200 vragen per groep;
dat is diepte die er al is — de breedte-check gaat over de *eerste 20* en over de vakken die nog dun zijn.

## Nulmeting breedte (26 okt 2026, paden met een groep-aanduiding, zonder nieuwkomerspaden)

Vragen per groep × vak (aantal paden tussen haakjes). **—** = niets, 🟡 = dun (1 pad of < 60 vragen).

| vak | g3 | g4 | g5 | g6 | g7 | g8 |
|---|---|---|---|---|---|---|
| rekenen | 117 (2) | 179 (3) | 837 (13) | 1434 (23) | 1616 (28) | 2206 (30) |
| taal & lezen | 🟡 48 (1) | 🟡 44 (1) | 427 (8) | 520 (10) | 853 (19) | 972 (18) |
| spelling | 🟡 43 (1) | 74 (1) | 220 (3) | 220 (3) | 146 (2) | 146 (2) |
| begrijpend lezen | n.v.t. | 🟡 45 (1) | 231 (4) | 491 (12) | 555 (14) | 590 (15) |
| engels | n.v.t. | n.v.t. | **—** | 85 (2) | 85 (2) | 85 (2) |
| natuur & techniek | n.v.t. | **—** | 120 (3) | 504 (13) | 529 (14) | 489 (13) |
| aardrijkskunde | n.v.t. | n.v.t. | 🟡 54 (1) | 312 (6) | 318 (7) | 332 (9) |
| geschiedenis | n.v.t. | n.v.t. | 🟡 43 (1) | 419 (11) | 400 (11) | 400 (11) |
| studievaardigheden | n.v.t. | n.v.t. | n.v.t. | n.v.t. | 217 (6) | 259 (7) |

**Gaten:** engels groep 5 (staat wel in het curriculum), natuur groep 4. **Dun:** groep 3-4 taal/spelling/begrijpend
lezen, groep 5 aardrijkskunde/geschiedenis. Kwaliteit: laatste eindmeting 13 okt 12,5 % fout (basisschool 5,8 %),
4 meldingen open. Groep 3 heeft maar 2 rekenpaden, groep 4 drie: genoeg voor 20, niet voor variatie.

## Fase 1 — Breedte (eerst klaar voor Ooievaarspas 1 nov waar het kan; rest de weken erna)

| # | Stap | Wie | Status |
|---|------|-----|--------|
| B1 | Open meldingen afhandelen + bedanken | Claude | ✅ 26 okt: alle 12 (niet 4) wensenbord-meldingen beantwoord met "Dank van de maker"; 3 begrijpend-lezen-vragen zonder vakwoorden herschreven, breukvraag ⁴⁄₈ uitgelegd, vertaalknop in /start weg na keuze "Nederlands" (v1002 "057") |
| B2 | **Startset van 20 per groep × vak** vastleggen: welke 20 vragen krijgt een kind als eerste (uit de bestaande paden, SLO-passend, oplopend in moeilijkheid). Technisch: een `startset`-lijst per groep × vak in de code, die het Begin-kwartier en "Oefen nu" als eerste gebruiken. | Claude (bouwen), Mark (steekproef op telefoon) | ✅ mechanisme + eerste set live v1003 "058" (26 okt): `src/features/learn/startsetsData.js` (lijsten, puur) + `startsets.js` (vragen via buildTopicQuiz in vaste volgorde, voortgang via gezien-sleutels) + test `startsets.test.js` die elke set naar `docs/audit/STARTSET-<groep>-<vak>.md` schrijft en 20 geldige, unieke vragen eist. **Rekenen groep 5** = tafels 2·5·10 → 3·4 → 6-9 → delen → klok (hele uren t/m minuten) → geld → afronden → redactiesom → eerste breuk; alle 20 nagekeken. Tegel toont "Begin: de eerste 20 vragen →" en daarna "startset: X van 20 →"; Begin-knop pakt de startset als eerste blokje (`bepaalPlan` → `startsetOpen`). Live getest als Testsam: tegel → kwartier "Vraag 1 van 20" in de vaste volgorde, na 2 antwoorden tegel "startset: 2 van 20". Volgende sets: zelfde lijst-formaat, één per vak × groep. **v1005 "060" (26 okt): alle 7 vakken van groep 5 hebben een startset** (rekenen, taal, spelling, begrijpend lezen, natuur, aardrijkskunde, geschiedenis; engels g5 heeft geen pad). Audits in `docs/audit/STARTSET-5-*.md`. |
| B3 | **Startsets nakijken**: elk van de ~40 sets (6 groepen × 5-9 vakken) door twee blinde nakijkers; fouten herstellen; twijfel naar `docs/audit/TWIJFEL-STARTSETS.md`. Eindmeting per groep op de startsets: doel 0 fout van 20. | Claude | 🟡 **groep 5 klaar (26 okt):** 7 sets × 20 = 140 vragen door twee blinde nakijkers (sonnet, los van elkaar): **0 foute antwoorden**. Wel niveau-punten, allemaal verwerkt: woordenschat "vorderde gestaag"/"belachelijk klein" (g7-8) eruit; d/t-inversie "Werk jij hard?" en "rijdt" (g6-7) eruit, alleen "hij speelt" + stam; fotosynthese, eb/vloed, maanlanding en "kernfusie" (g7-8) eruit; dubbele walvis- en trein-vraag weg; schaalsommen 4 → 1; begrijpend lezen eindigt met het echte tekstje. Groep 6-8 volgen. |
| B4 | **Vakscherm (ontwerp stap 3), minimaal**: tik op tegel → "Rekenen · groep 5", groot cijfer, **Oefen nu** (= de startset, daarna de rest), en alleen de onderwerpen van die groep. Geen Leren-hub meer voor het kind. | Claude | ⏳ |
| B5 | **Gaten vullen tot 20**: engels groep 5 (eerste woorden, zinnetjes), natuur groep 4 (seizoenen, dieren en planten). Dunne plekken (groep 3-4 taal/spelling, groep 5 aardrijkskunde/geschiedenis) eerst nakijken, pas daarna aanvullen. 26 okt-bevinding bij het maken van de groep-5-sets: aardrijkskunde g5 heeft alleen `kaartlezen-po` (schaal-vragen zijn eigenlijk groep 6+), geschiedenis g5 alleen `geschiedenis-vroeger-en-nu-g5`; `topografie-nederland` staat op groep 6-8 terwijl de vakkenkaart topografie NL bij groep 5 laat starten → óf het pad een groep-5-stap geven, óf de kaart aanpassen. Engels g5: geen pad, tegel blijft "Begin →" zonder startset. | Claude, elk door 2 nakijkers | ⏳ |
| B6 | **Kliktest als kind** (ontwerp stap 5 + Q10): per groep 3, 5 en 8 op de telefoon: Begin → 3 blokjes → rapport → Werk aan → vak → vraag → fout → uitleg → terug. Verslag met wat niet klopte. | Claude, daarna Mark | ⏳ |
| B7 | **Breedte-tabel in het dagrapport**: per groep × vak 🟢 (startset nagekeken, ≥ 20) / 🟡 / 🔴, tot alles groen is. | Claude | ⏳ |

Gate naar fase 2 (per groep): alle vakken van die groep 🟢 én eindmeting startsets 0/20 fout.

## Fase 2 — Diepte (per groep, zodra die groep breed groen is)

| # | Stap | Status |
|---|------|--------|
| D1 | Leerpad na een fout (ontwerp stap 4): "Begrijp je dit?" → stappen → "Leer dit stap voor stap" → terug naar je vraag; eerst nakijken wat `VraagUitlegPad` al doet. M1 = vraag eerst, uitleg bij een fout. | ⏳ |
| D2 | Na de startset: meer vragen per onderwerp waar het kind zwak is (bestaande diepte van rekenen gebruiken, dunne vakken aanvullen tot ≥ 60 per groep). | ⏳ |
| D3 | "Werk aan" slimmer: niet alleen zwakste vak, maar het zwakste *onderwerp* binnen een vak, met directe oefening. | ⏳ |
| D4 | Middelbare school (klas 1-4): zelfde breedte-check, pas na de basisschool. | ⏳ |

## Fase 3 — Meten en bijsturen (loopt mee)

- Events `mijn_vaktegel`, `mijn_werk_aan`, `mijn_groep_dropdown`, `mijn_rapport_toggle`, `mijn_meer`, `bottomnav_click` → wekelijks in het dagrapport: tikken kinderen op tegels, op Werk aan, hoe vaak gaat Meer open, komt het rapport terug?
- Elke uitrol: één per dag, build + tests + livetest; nooit "goed" zonder getal.
- Elke nieuwe kind-functie moet in de lus passen (Begin / vak / rapport / verbeterpunt / Meer); anders hoort hij er niet.

## Volgorde voor de komende dagen (voorstel)

1. ma 26 / di 27 okt: B1 (meldingen) + B2 (startset-mechanisme bouwen, begin met rekenen groep 5 als voorbeeld, Mark kijkt mee op de telefoon).
2. wo 28 – vr 30 okt: B3 nakijken startsets groep 5-8 (Ooievaarspas-kinderen zitten vooral in 6-8), B4 vakscherm.
3. daarna: B5 gaten, groep 3-4, B6 kliktest, en per groep de diepte in.
