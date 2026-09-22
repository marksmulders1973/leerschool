# 💰 Verdienmodel & kosten — bron voor het dagrapport-blok

> Aangemaakt 20 sep 2026 na de kostprijsanalyse (artifact "Kostprijs per kind":
> https://claude.ai/code/artifact/053c4044-f777-4baf-94b6-1dc469925aed).
> Dit bestand is de **single source of truth** voor het vaste dagrapport-blok
> "💰 Verdienmodel & kosten". Claude werkt het bij zodra een prijs, een tarief of
> een AI-kostenpost verandert. Verschil met KOSTEN-2026.md: dáár staan de
> gemaakte uitgaven voor de belasting; hier staat of het model sluit.

---

## 1. De stand in één tabel

| | Prijs | Netto per kind/jaar | Doel-aantal voor €500/mnd |
|---|---|---|---|
| **Partner (gemeente/stichting)** | €34,50/kind/jaar | €22 – €32 | **239** bij gemiddeld gebruik, 296 worst case |
| Familie (ouder) | €4,95/mnd · **€39/jaar per gezín** | €18 – €50 per gezin/jaar | 131 – 361 gezinnen |
| Bijlesdocent (Pro) | €6,95/mnd · €59/jaar | **+€4,74 tot +€6,50/mnd** (94% marge) | docent-tool, zie §5b |
| School | €99/klas/jaar ⚠️ eenheid onduidelijk | ~94% marge | zie §5b |
| Ooievaarspas Den Haag | **€0, voor altijd** | −€4 tot −€87 | n.v.t. — referentie, geen omzet |

**Stand van het doel (€500/mnd netto = €6.000/jaar):** 0 betalende kinderen. Eerste
betaalde kind verwacht 2027 via Leergeld/kindpakket.

## 2. Wat een kind kost

Gemeten over aug–sep 2026 (25 unieke AI-gebruikers, 37 gebruiker-dagen):

| Scenario | AI-calls/dag | AI/mnd | Totaal/mnd |
|---|---|---|---|
| Laag (mediaan) | 3 | €0,32 | €0,35 |
| Midden (gemiddelde) | 11 | €1,12 | €1,15 |
| Hoog (p95, gemeten) | 74 | €7,25 | €7,29 |
| Plafond (huidige rem) | 120 | €15,84 | €15,88 |

- Alle AI draait op **Claude Haiku 4.5** ($1,00 in / $5,00 out per 1M tokens), Gemini 2.0 Flash als fallback.
- **88% van alle calls is `tutor-chat`** (Charley). Oefenvragen kosten bijna niets: de
  spaar-cascade (vaste content → `ai_question_pool` → AI) hield september op 1.356
  beantwoorde vragen bij 62 generate-calls ooit.
- Vaste infra: Supabase Pro €23 + **Vercel Pro €18,50 (nog niet actief — Hobby is
  niet-commercieel)** = €41,50/mnd. Marginaal per kind: ±€0,03.
- Werkelijk verbruik 15 jun – 19 sep: **1.296 calls ≈ €5,70**. Er is vandaag geen
  kostenprobleem; er is een ongedekt risico bij schaal.

## 3. Wat gratis schaal kost

| Actieve gratis kinderen | Laag | Midden |
|---|---|---|
| 1.000 | €350/mnd | €1.192/mnd |
| 10.000 | €3.500/mnd | €11.650/mnd |
| 100.000 | €35.000/mnd | €115.900/mnd |

🔴 **Ooievaarspas is het grootste open risico.** ~100.000 gezinnen, voor altijd gratis
(Vriend-overeenkomst). Bij 3% activatie = 3.000 kinderen = €1.050–€3.450/mnd uit eigen
zak — twee tot zeven keer het hele doel, met een minteken. Partnercodes zijn ongelimiteerd
(`KINDERHULP2027` = 1.000.000, `OOIEVAAR2027` blijvend) en er is geen techniek die het
AI-verbruik van een gratis gebruiker anders behandelt dan dat van een betalende.

## 4. Het plan — vier ingrepen

| # | Wat | Wie | Wanneer | Effect | Stand |
|---|---|---|---|---|---|
| 1 | **Partnerprijs €25 → €34,50/kind/jaar** | Mark | vóór de oktober-Leergeld-mail | +€2.400/jaar bij 240 kinderen | ✅ besloten 20 sep, vastgelegd in GEMEENTE-BETAALT-PLAN.md |
| 2 | **Prompt caching** op tutor-chat, charley-hulp, buddy-chat | Claude | ✅ **v680, 20 sep** | −48% van de AI-rekening *als de cache pakt* | ✅ gebouwd, **meting loopt** |
| 3 | **Charley praat alleen indien nodig** + pauzeknop; dagbundel als vangnet eronder | Claude | **week van 22 sep** (Mark 20 sep) | slechtste klant van −€62,87 → +€22,01/jaar | 🗓️ ingepland |
| 4 | **Vercel Pro** activeren | Mark | vóór de eerste betaling | +€18,50/mnd kosten, maar Hobby mag niet commercieel | ☐ open |

**Voorwaarde die bij elkaar hoort:** €34,50 zonder ingreep 3 is bij zwaar gebruik nog
steeds verliesgevend (−€62,87/kind/jaar). De prijs alleen lost het niet op.

**Bewust niet doen (nu):** Familie-prijs aanpassen. Die staat op €4,95/mnd · €39/jaar ·
€24,95 Seizoenspas en is gezond: +€18 tot +€50 per gezin per jaar. Eén prijswijziging tegelijk.

🔧 **Correctie 20 sep — ik rekende eerst met prijzen die niet bestaan.** De eerste analyse
gebruikte €1,95/mnd (ouder), €9,95 (leerkracht) en School S/M/L €29/€49/€79, zoals Mark ze
in de vraag noemde. Die staan **nergens** in `config.js`, `proPlan.js` of `PRIJSPLAN.md`. Ik
had dat moeten signaleren vóór ik erop ging rekenen. De echte prijzen staan in §1 en zijn
allemaal gezonder dan de getallen waar ik mee begon. De conclusie "€1,95 is te krap" ging
over een prijs die niet bestaat — bij €39/jaar per gezin (één incasso, dus €0,29 Mollie in
plaats van €3,48) klopt het oudermodel wél.

### 4a. 🔴 Partner per kind vs. Familie per gezin — de eenheden botsen

| | Eenheid | Prijs | Per kind bij 1,5 kind/gezin |
|---|---|---|---|
| Familie | per **gezin** | €39/jaar | €26 |
| Partner | per **kind** | €34,50/jaar | €34,50 |

Een gezin met twee kinderen kost een gemeente €69, terwijl datzelfde gezin zelf €39 betaalt —
bijna het dubbele voor **exact hetzelfde product** (`useSubscription.js` geeft een partnercode
gewoon `parent_pro`, het Familie-niveau).

**Verdedigbaar, maar hebben we een antwoord klaar?** Vóór: Squla doet het ook per kind
(€43,52) en Leergeld koopt dat al in; kindpakket-budgetten zíjn per kind toegekend, dus zo
werkt hun administratie. Tegen: een inkoper kan `abonnement.html` openen en de vraag stellen,
en dat is een ongemakkelijk gesprek als je het ter plekke moet bedenken.

**Te beslissen vóór de oktober-mail:** (a) per kind houden en het verschil kunnen uitleggen
("u financiert een kind, geen gezinsabonnement"), (b) een partner-gezinsprijs ernaast
(bv. €34,50 eerste kind, €15 elk volgend kind uit hetzelfde gezin), of (c) accepteren dat een
enkele inkoper het opmerkt. Mijn voorkeur: (a), met (b) als het gesprek erom vraagt.

## 4b. Is €39 per gezin winstgevend met de juiste Charley-ingrepen? — ja

Marks vraag, 20 sep. Gerekend met 264 actieve dagen/jaar, caching aan (call €0,0023) en
"Charley praat alleen indien nodig" dat het gemiddelde ruwweg halveert. Niet meetbaar hoeveel
kinderen een gezin heeft — er zijn pas **3 gekoppelde ouders, allemaal met één kind** — dus
per gezinsgrootte doorgerekend.

Per kind per jaar: **€3,34** bij normaal gebruik · **€12,14** als de bundel (20/dag) elke dag
volloopt. Omzet €39, Mollie €0,29 (één jaarincasso), infra €0,36/kind.

| Kinderen | Realistisch | Theoretisch maximum |
|---|---|---|
| 1 | **+€35,01** | +€26,21 |
| 2 | **+€31,31** | +€13,71 |
| 3 | **+€27,61** | +€1,21 |
| 4 | **+€23,91** | −€11,29 |

✅ **€39/gezin is winstgevend tot en met 3 kinderen, zelfs in het theoretische maximum** waarin
elk kind 264 dagen lang de bundel volmaakt. Dat gebeurt nooit (de p95 van 74 calls is een
piekdag, geen gewoonte), maar het is de garantie.

🔑 **De bundel is de beslissende ingreep, niet de caching.** Zonder bundel kost één gezin met
twee intensieve kinderen €51,87/jaar — ook mét caching. Caching verlaagt de rekening; de
bundel bepaalt óf er een bovengrens is.

**De bundelhoogte is één draaiknop met een duidelijke betekenis:**
- **20/dag** → dekt gezinnen tot **3 kinderen**
- **15/dag** → dekt gezinnen tot **4 kinderen**

De afweging is dus niet "hoeveel heeft een kind nodig" (de mediaan doet er 3), maar hoeveel
kinderen per gezin je gedekt wilt hebben.

🔴 **Wat hiermee níét is opgelost: Ooievaarspas.** Dezelfde bundel geldt voor pashouders (zij
hebben Familie-niveau), en daar staat geen €39 tegenover.

**Gevoeligheidstabel — 3.000 actieve pashouders, 264 dagen/jaar, caching aan (€0,0023/call),
incl. €0,36/kind/jaar marginale infra:**

| AI-calls per kind per dag | Per kind/jaar | 3.000 kinderen |
|---|---|---|
| 1,5 — mediaan (3), gehalveerd door de Charley-ingreep | €1,27 | **€318/mnd** |
| 3 — mediaan, ingreep werkt niet | €2,18 | €545/mnd |
| 5,5 — gemiddelde (11), gehalveerd | €3,70 | **€925/mnd** |
| 11 — gemiddelde, ingreep werkt niet | €7,04 | €1.760/mnd |
| 20 — bundel elke dag vol | €12,50 | €3.125/mnd |

⚠️ **Twee aannames dragen dit hele bedrag, en geen van beide is gemeten:**
1. **De halvering** door "Charley praat alleen indien nodig" is mijn schatting. Komt die niet
   uit, dan verdubbelt de post (€925 → €1.760). Daarom ná de wijziging *calls per beantwoorde
   oefenvraag* meten (nu 0,3) — dat zegt binnen twee weken of de halvering echt is.
2. **3% activatie** van 100.000 pashouders. Vraag Esther naar hun ervaringscijfer met andere
   digitale aanbieders; dat getal bepaalt de post net zo sterk als het gebruik.

Ter vergelijking: bij middengebruik **zónder** caching en **zónder** de gedragsingreep is het
€3.195/mnd. De twee ingrepen brengen het naar €925 — dat is wat ze waard zijn.

🔧 *Gecorrigeerd 20 sep: eerder stond hier €835/€228; daarin ontbrak de marginale infra
(€0,36/kind/jaar = €90/mnd bij 3.000 kinderen).*

## 4c. Goedkoper model voor Charley? — ja, factor 24, en het staat half in je code

Tarieven opgehaald 20 sep 2026 (ai.google.dev + api-docs.deepseek.com). Per Charley-bericht
gerekend met 3.800 input / 200 output tokens.

| Model | Input /1M | Output /1M | Per bericht | Index |
|---|---|---|---|---|
| **Claude Haiku 4.5** (nu) | $1,00 | $5,00 | €0,0044 | 100 |
| Haiku 4.5 + prompt caching | $0,10 (cache read) | $5,00 | €0,0020 | 45 |
| DeepSeek-Flash (piek) | $0,30 | $1,20 | €0,00127 | 29 |
| DeepSeek-Flash (dal) | $0,15 | $0,60 | €0,00063 | 14 |
| **Gemini 2.5 Flash-Lite** | **$0,10** | **$0,40** | **€0,00042** | **10** |
| Gemini 2.5 Flash-Lite + caching | $0,01 | $0,40 | €0,00018 | **4** |

✅ **Gemini 2.5 Flash-Lite is de goedkoopste optie — goedkoper dan DeepSeek**, ook tegen
DeepSeeks daltarief. En de Gemini-route zit al in `tutor-chat.js` / `buddy-chat.js` als
fallback, dus het is een volgorde-omdraaiing, geen nieuwe integratie.

**Effect op de Ooievaarspas-post** (3.000 actieve pashouders, 5,5 calls/dag):

| | per maand |
|---|---|
| Nu (Haiku, geen caching) | €3.195 |
| Haiku + caching | €925 |
| **Flash-Lite + caching** | **€243** |

Pas met Flash-Lite blijft ook 10.000 actieve pashouders betaalbaar (€808/mnd tegen €3.083
op Haiku+caching).

### 🔴 Twee dingen die eerst moeten

1. ✅ **Opgelost in v680 (20 sep):** `gemini-2.0-flash` → `gemini-2.5-flash-lite` in
   `tutor-chat.js`, `buddy-chat.js`, `charley-hulp.js` en `actuele-vraag.js` (5 plekken).
2. **Kwaliteit is hier een echte kostenpost, geen bijzaak.** Charley-gebruikers halen 2,4×
   vaker het kwartier (§5). Zakt de didactische kwaliteit, de Nederlandse toon of Charleys
   karakter, dan verlies je meer dan je bespaart. Dus: A/B op een deel van het verkeer met de
   **kwartier-ratio als meetlat**, niet alleen een blik op de antwoorden.

### DeepSeek — waarom niet

Niet vanwege een boeterisico (solo-bouwer, eerste AP-stap is een brief), maar **commercieel**:
DeepSeek draait in China. Het school-spoor vraagt om een verwerkersovereenkomst (staat al bij
Ichthus in de agenda), we zijn Vriend van de gemeente Den Haag, en het gaat om gegevens van
basisschoolkinderen. Een school die de DPA opvraagt en kindergegevens naar China ziet gaan,
haakt af — dat kost meer dan de besparing. DeepSeek is open-weight en draait ook bij westerse
hosts (Together/Fireworks/OpenRouter), maar dan betaal je hostingmarge en kom je op
Gemini-niveau uit. Geen reden voor die omweg.

### Aanbevolen volgorde

1. **Caching op Haiku** — risicoloos, −55%, deze week.
2. **Flash-Lite als A/B** op een deel van het chatverkeer, kwartier-ratio meten.
3. **Splitsen naar taak**: Charleys chat naar Flash-Lite, maar `leg-uit` (uitleg ná een fout
   antwoord) op Haiku houden — daar is precisie een halve cent waard.

## 5. Charley — inperken mag, wegsnijden niet

- **Nergens beloofd.** Op `abonnement.html` staat alleen "Dictee met de woorden van school
  (Charley leest ze voor)" — dat draait op `window.speechSynthesis`, de browserstem, en kost
  **niets**. Geen enkele publieke tekst belooft onbeperkte AI-bijles.
- **Maar Charley-gebruikers zijn de beste gebruikers.** Van de 105 apparaten die sinds juli
  ≥1 echte oefenvraag deden: mét Charley 86% kwartier / 64% terug op dag 2; zonder Charley
  35% / 26%. ⚠️ n=14 met Charley, en het blijft selectie (wie een AI-buddy aanspreekt was
  al gemotiveerder). Het bewijst geen oorzaak — het maakt hard wegsnijden wel een gok met
  de Noord-ster als inzet. Daarom: **bundel, geen bijl.**
- 20/dag raakt de mediaan (3/dag) niet en zelfs de gemiddelde AI-gebruiker (11/dag) niet.
- 🔴 De bundel **niet** als verkoopargument richting partners gebruiken ("20 AI-vragen per
  dag" zegt een Leergeld-inkoper niets). In de app als vriendelijke grens.

### 5a. Richting die Mark koos (20 sep) — "Charley praat alleen indien nodig"

Mark, 20 sep: *"volgende week gaan we charley anders maken, met pauzeknop ofzo, charley
moet alleen praten indien nodig."* Dat is een **betere primaire ingreep dan een bundel**, om
drie redenen:

1. **Het verlaagt het gemiddelde in plaats van de uitschieter af te kappen.** Een bundel is
   een muur waar een kind tegenaan loopt; terughoudendheid verlaagt het aantal calls vóór
   de muur in beeld komt. Kostenverlaging zonder afwijzing.
2. **Het is didactisch beter, niet alleen goedkoper.** Het apparaat dat 134 berichten stuurde
   en twee sommen maakte (aanleiding voor de rem in v672) is precies een kind dat aan het
   práten was in plaats van aan het leren. Minder Charley = meer kwartier. Dat is de
   Leerkwartier-test, niet een bezuiniging.
3. **Een pauzeknop geeft het kind de regie**, in plaats van een systeem dat stilletjes
   dichtgaat. Past bij "geen dev-jargon, geen harde muren" uit de UI-conventies.

**Maar de bundel blijft nodig als vangnet eronder.** De twee doen verschillend werk:
terughoudendheid verlaagt de gemiddelde kosten, de bundel begrenst het maximum. Zonder
harde bovengrens blijft één kind een maand kunnen verpesten — dat is precies wat §2 laat
zien. Bouw dus beide: gedrag als hoofdmechanisme, `PER_UID_LIMIT_DAY` als achtervang.

**Meten of het werkt:** na de wijziging de verhouding *AI-calls per beantwoorde oefenvraag*
volgen. Nu is die ±0,3 (404 calls / 1.356 vragen in sep). Zakt die én blijft het
kwartier-aandeel gelijk of stijgt het, dan is de wijziging puur winst. Zakt het
kwartier-aandeel mee, dan was Charley belangrijker dan §5 suggereert — dan terugdraaien.

### 5b. Leerkracht en school: dócent-gereedschap, geen leerlingenlicentie

🔧 **Gecorrigeerd 20 sep** (Mark: *"de leerkracht kosten waren alleen bedoeld voor de leeraar
om eigen examens mee te maken, niet om alle kinderen gratis alles te laten gebruiken; en de
scholen was om in een keer voor bv 30 leraren te betalen, ook niet voor de kinderen"*).
Mijn eerste doorrekening sloeg 30 leerlingen × AI-kosten op het leerkrachtabonnement en
concludeerde dat de tier verliesgevend was. Dat was een verkeerde aanname over wat er verkocht
wordt, niet een bevinding.

**Wat de leerkracht-tier is:** gereedschap voor de dócent — eigen toetsen en examens maken
(`generate-questions`), schooldashboard, eigen logo op toetsen, werkblad-print, rapportage.
De leerlingen zitten in de gratis laag of hebben hun eigen Familie-/partnerplek.

**De echte kosten:** een docent die wekelijks één of twee toetsen maakt doet 4–8
`generate-questions`-calls per maand à €0,012–€0,032 (10 vragen per call).

| Tier | Omzet | AI-kosten | Netto | Marge |
|---|---|---|---|---|
| Bijlesdocent €6,95/mnd | €6,95 | €0,16 (8 calls) | **+€6,50/mnd** | 94% |
| Bijlesdocent €59/jaar | €4,92/mnd | €0,16 | **+€4,74/mnd** | 96% |
| Zware gebruiker, 20 calls/mnd | €6,95 | €0,64 | **+€6,02/mnd** | 87% |
| School, 30 docenten à €79/mnd | €79 | €4,80 (240 calls) | **+€73,91/mnd** | 94% |

✅ **De docent-tiers zijn de gezondste marge in het hele model** — 87–96%, want een toets maken
is een handvol calls, geen honderden chatberichten. Precies omgekeerd aan wat ik eerst schreef.

**Wat wél blijft staan, maar ergens anders thuishoort:** een leerkracht die 30 kinderen
binnenbrengt voegt 30 *gratis* gebruikers toe. Hun AI-kosten vallen in §3 (gratis schaal), niet
in deze tier. Dat is een bewuste keuze — "leerpaden klaarzetten blijft gratis t/m zeker 2031"
staat in CLAUDE.md — en het is de goede soort kostenpost: het is precies de groei die we willen,
en klasgebruik leunt op vaste content. Maar reken die 30 kinderen mee in het gratis-scenario,
niet in de schoolprijs.

🔴 **Wel een echte inconsistentie: de school-eenheid klopt niet.** `proPlan.js` zegt
*"school € 99 per klas p/jaar"*, maar Mark beschrijft het als *"in één keer voor bv 30 leraren
betalen"*. Per klas en per docentenbundel zijn twee verschillende producten met een heel
ander bedrag. Dit moet uitgelijnd worden vóór er een schoolofferte uitgaat — een school die
€99 per klas leest en 30 docenten wil, rekent op €99, niet op €948.

---

## 6. 🔍 Voor Fable — loop dit na

> Mark laat dit t.z.t. door Fable 5.1 reviewen. Hieronder staat **precies wat onzeker is**,
> zodat de review daar begint en niet bij wat al vaststaat. Alles hieronder is door Claude
> (Opus 5) opgesteld op 20 sep 2026 en niet extern geverifieerd.

### A. Cijfers die gemeten zijn (hoge zekerheid — hoef je niet over te doen)
- Call-aantallen per endpoint uit `ai_call_quota` (let op: tel met `endpoint not like 'uid:%'`).
- Gebruikspercentielen (mediaan 3, gem. 10,8, p95 74) uit `events_echt`, aug–sep.
- Promptgroottes in bytes uit `api/*.js` en `src/data/appGids.js`.
- Retentiecijfers Charley: n=105 basis, n=14 met Charley.

### B. Aannames die de uitkomst kunnen kantelen (hier graag kritisch op)
1. **Tokenschatting ±20%.** Ik heb bytes ÷ 3,5 gebruikt, niet `messages.count_tokens`.
   Klopt ~3.800 input / ~200 output voor een gemiddelde `tutor-chat`-call? Meet het echt.
2. **Prompt caching zou ~48% van de rekening schelen.** Twee dingen niet geverifieerd:
   (a) haalt de system-prompt van ±2.950 tokens Haiku's **minimum cacheerbare prefix**
   (512–4096, modelafhankelijk)? Zo niet, valt de besparing weg. (b) Hoe vaak volgen calls
   elkaar binnen de 5-minuten-TTL op? Ik ga ervan uit dat een chatsessie dat doet.
3. **Mollie-tarieven** (€0,29 iDEAL, ±€0,25 SEPA) komen uit mijn kennis, niet van mollie.com.
4. ✅ **Opgelost 20 sep — zie §4c.** Gemini 2.5 Flash-Lite ($0,10/$0,40) is 10× goedkoper
   dan Haiku en goedkoper dan DeepSeek; mét caching factor 24. Modelkeuze is inderdaad de
   grootste hefboom, groter dan de bundel. Wel eerst kwaliteit A/B-testen, en
   `gemini-2.0-flash` in de code is verouderd.
5. **22 actieve dagen/maand.** Een kind dat écht dagelijks oefent zit op 30 → +36% AI-kosten.
6. **Vercel Hobby mag niet commercieel** → Pro à €18,50 nodig vanaf de eerste betaling.
   Check of dat klopt voor dit gebruik (lees de huidige voorwaarden, ze wijzigen).
7. **€0,03 marginale infra per kind** is een grove schatting (±1.500 event-rijen + bandbreedte).
   Bij 10.000 kinderen wordt dit een echte post — dan moet Supabase-tier opnieuw.
8. **Btw bij levering aan gemeente/stichting** is niet uitgezocht. Mag 21% *bovenop* €34,50
   (zij compenseren via het BTW-compensatiefonds) of moet het eruit? Scheelt 21%.
   → vraag bij de KvK-afspraak 28 sep.
9. **Ooievaarspas-activatie van 3%** is een gok. Vraag Den Haag naar hun ervaringscijfer met
   andere digitale aanbieders; dat getal bepaalt het hele risico.

### C. Vragen waar ik geen antwoord op heb
- Is €34,50 de juiste prijs, of laten we nog geld liggen? Squla zit op €43,52. Wat betalen
  Leergeld-stichtingen feitelijk aan vergelijkbare aanbieders (niet wat er op een site staat)?
- Moet de gratis laag überhaupt live AI krijgen, of alleen vaste content + pool? Dat zou het
  100.000-scenario van €35.000 naar ~€130/mnd brengen. Wat kost dat aan retentie?
- Is er een tussenvorm: AI-bijles als **los kwartier-tegoed** (staat al in PRIJSPLAN.md)
  in plaats van een dagbundel? Dan betaalt wie het gebruikt, en is de prijs lager te houden.
- 🔴 **School-eenheid: per klas (€99, staat in proPlan.js) of per docentenbundel (Marks model)?**
  Twee verschillende producten, sterk verschillend bedrag. Moet uitgelijnd vóór de eerste
  schoolofferte. De marge is in beide gevallen gezond (~94%), dus dit is een verkoop- en
  copy-vraag, geen kostenvraag.
- Werkt "Charley praat alleen indien nodig" (§5a) ook echt kostenverlagend, of verschuift het
  alleen naar meer korte berichten? Meet calls-per-oefenvraag vóór en ná.

### D. Hoe je dit naloopt
1. Lees de vier vragen in C — daar zit de meeste waarde.
2. Meet B1 met `messages.count_tokens` op een echte prompt; herbereken de tabel in §2.
3. Zoek B3, B4, B6 op (externe tarieven/voorwaarden) en corrigeer.
4. Reken de leerkracht/school-tiers door (C4). Als die negatief zijn, verandert de strategie.
5. Update dit bestand + het dagrapport-blok; laat staan wat klopt.

---

## 7. Dagrapport-blok — wat er elke dag in moet

Kort blok, 4–6 regels, ná het gemeente-blok:
- **Stand doel:** X betalende kinderen van 239 (€500/mnd netto bij €34,50).
- **AI-kosten deze maand:** €X (uit `ai_call_quota`, calls × €0,0044 resp. €0,025) +
  tegoedstand.
- **Duurste kind deze week:** hoogste calls/dag per uid — vroege waarschuwing voor het
  hoog-scenario. Bij >40/dag melden.
- **Open ingrepen:** welke van de vier uit §4 nog ☐ staan.
- **Alleen bij verandering:** nieuwe prijs, nieuw tarief, of een partner die de prijs afwijst.


## 8. 🔬 Openstaande verificatie — werkt de caching echt? (v680, 20 sep)

Caching is gebouwd, **maar nog niet bewezen**. `api/tutor-chat.js` logt sinds v680 per call:
`[cache] tutor-chat read=… write=… vers=…`.

**Wat je wilt zien:** `read` loopt op zodra een kind een tweede bericht stuurt in hetzelfde
gesprek. Dan kost dat deel van de prompt nog 10%.

**Wat het kan betekenen als `read` 0 blijft:**
- `write` loopt wél op → de prompt haalt Haiku's **minimum cacheerbare prefix** niet
  (512–4096 tokens, modelafhankelijk; onze prompt is ±2.950). Oplossing: het stabiele deel
  van `buildSystemPrompt` naar voren halen en apart cachen, of de prompt iets laten groeien.
- Beide 0 → de calls staan te ver uit elkaar voor de 5-minuten-TTL, of `system` komt niet
  als array aan.

⚠️ **Belangrijke nuance die ik pas bij het bouwen zag:** de system-prompt van tutor-chat is
**volledig variabel** — buddynaam, leeftijd, pad, stap, uitleg en check-vraag zitten erin
verweven. Er is dus geen stabiel blok dat over álle gebruikers heen gedeeld wordt. De cache
werkt alleen **binnen één gesprek over dezelfde stap**. Dat is precies het dure geval (het
kind dat veel berichten stuurt), dus het blijft waardevol — maar de geraamde −48% op de
totale rekening is daarmee een **bovengrens**, geen belofte. `charley-hulp` (APP-GIDS, voor
iedereen identiek) is de schoonste kandidaat en zou als eerste effect moeten tonen.

➡️ **Controleer dit in het dagrapport van ~23 sep**, als er een paar echte gesprekken door
de nieuwe code zijn gegaan. Pas dan weten we wat de caching echt oplevert.


## 9. 🔴 UIT TE WERKEN MET FABLE (week van 21 sep) — prijsanker + aantal lagen

Opgekomen in het gesprek van 20 sep. Mark heeft **nog niets besloten**; alles hieronder is
materiaal voor de sessie, geen keuze.

### 9a. Het Squla-anker klopt niet overal
> **✅ 22 sep 2026 — BEVESTIGD via squla.nl/samenwerken (Fable):** *"Speciaal voor stichtingen en goede doelen bieden we Squla tegen kostprijs aan. Dit betekent € 43,52 voor een jaarlidmaatschap (normale prijs € 131,88)."* Verder: **minimale afname 10 stuks**, codes "onbeperkt houdbaar", geen staffel/volumekorting genoemd, "ruim 90 stichtingen en andere goede doelen". Leergeld Den Haag alleen al: 2.731 kinderen met Squla/WoordExtra in 2021 (jaarverslag; 3.223 in 2020) ≈ €119k/jaar. Ooievaarspas noemt het gratis Squla-abonnement (groep 3-8, via Leergeld Den Haag) als regeling. **Gebruik: alleen intern** (Mark 22 sep: concurrenten niet bij naam naar buiten).

Er lopen drie getallen door de docs, bij verschillende kopers:

| Waar | Getal | Status |
|---|---|---|
| `GEMEENTE-BETAALT-PLAN.md:35,65` · hier §6C | **€43,52/kind/jaar** (stichtingstarief) | ⚠️ **onbevestigd** — staat nergens openbaar, geen bron in het doc |
| `CONCURRENTIE.md:17` · `GROEI-MASTERPLAN-24MND.md:167,315` | **~€132/jaar** (consument) | ✅ klopt |

Openbare Squla-prijzen, gecheckt 20 sep 2026 (squla.nl/shop-bovenbouw), **per kind**:
- jaarabonnement € 10,99/mnd → **€ 131,88/jaar**
- kwartaalabonnement € 16,99/mnd → € 203,88/jaar
- hele basisschoolperiode **€ 389,99** eenmalig
- gezinskorting € 1/mnd per extra kind

**Waarom dit telt:** onze €34,50 wordt nu onderbouwd met "21% onder Squla's €43,52" — een
krappe marge op een getal dat we niet hard kunnen maken. Tegen de openbare €131,88 zitten we
**74% eronder**, en dat is wél controleerbaar.

**Valkuil bij dat sterkere verhaal:** een Leergeld-inkoper weet waarschijnlijk wat zíj
betalen. "74% onder Squla" roepen terwijl zij al een inkoopkorting hebben leest als
opgeklopt (vgl. regel: eerlijke getallen naar buiten). Nette formulering: consumentenprijs
noemen, erbij zetten dat stichtingen korting krijgen, en dat €34,50 bij ons voor iedereen
geldt.

**Actie die het oplost:** vraag één warme stichting (Leergeld Enschede zit al in gesprek)
wat zij per kind per jaar voor Squla-codes betalen. Eén zin, en de aanname wordt een feit.
Deze vraag staat al sinds eerder in §6C open en is nooit beantwoord — ondertussen is €43,52
wél als vaststaand in het gemeenteplan beland.

### 9b. Richting "gratis of Familie" — twee lagen i.p.v. drie?

Marks gedachte 20 sep: alleen Gratis + Familie houden, Pro gratis maken, om het simpel te
maken. Niet besloten. Wat de analyse opleverde:

**Wat er in Pro zit (`PRIJSPLAN.md` §3):**
- leerkracht in loondienst — **is al gratis**, verandert niets
- bijlesdocent/zzp (€6,95/mnd · €59/jaar) — nul klanten, vooral complexiteit
- school (€99/klas/jaar) — dashboard, logo, klasrapportage **én de verwerkersovereenkomst**

🔴 **Het scharnierpunt: de DPA.** `PRIJSPLAN.md:135` stelt dat een DPA wettelijk verplicht is
zodra een school leerlinggegevens structureel via ons laat lopen — de licentie is dus geen
extraatje maar de voorwaarde om het als school te mógen gebruiken. Pro gratis maken geeft
niet €99 weg maar **onbetaald juridisch werk plus aansprakelijkheid**, voor een solo-bouwer.

**Omzet-impact vóór 2027: nul.** Schoolomzet was al pas realistisch sep 2027, Familie start
bij de paywall jan 2027. Dit is puur een besluit over hoe 2027 eruitziet — geen haast, wél
vóór de eerste schoolofferte.

⚠️ **Gat dat de sessie moet oplossen:** wordt Familie het enige betaalde product, dan rust
alles op één prijs die wringt met de kostprijsanalyse van 20 sep. Familie is **per gezin**
(max 3 kinderen) voor €39/jaar → bij 3 kinderen **€13 per kind per jaar**, terwijl
`GEMEENTE-BETAALT-PLAN.md:33` stelt dat zelfs €25 per kind de AI-kosten niet dekt bij
gemiddeld gebruik. Nu vangen de partnerprijs (€34,50/kind) en Pro dat deels op.

**Tussenvorm die op tafel lag (niet gekozen):** naar buiten "Gratis of Familie", achter de
schermen de schoollicentie houden — zzp-Pro schrappen, "Pro" hernoemen naar
"Schoollicentie" en van de ouder-prijzenpagina halen (één regel: "Bent u een school?"),
partnerprijs uitleggen als "Familie, betaald door een stichting". En apart bekijken of de
**drie Familie-smaken** (maand · Seizoenspas · jaar) terug moeten naar één of twee — dáár
zit de complexiteit die een ouder echt ziet, niet in Pro.

### 9c. Wat Fable concreet moet beantwoorden
1. Welk Squla-getal wordt het anker in partner-copy — en hoe formuleren we het eerlijk?
2. Twee lagen of drie? En zo ja, wat gebeurt er met de DPA-verplichting?
3. Dekt €39/gezin/jaar de kosten bij 2-3 kinderen? Zo niet: prijs omhoog, kindlimiet omlaag,
   of AI-gebruik begrenzen?
4. Blijven de drie Familie-smaken, of terug naar één?

## 10. 🔍 Fable-review 22 sep 2026 — gemeten tegen aangenomen

> Uitgevoerd door Fable 5.1 op Marks verzoek ("ChatGPT twijfelt aan het verdienmodel,
> met name de Charley-kosten"). Alles hieronder is gemeten op `events_echt` (apparaat-id
> `props->>'uid'`, nooit `session`) en `ai_call_quota`, stand 22 sep 15:05.

### Wat het document verkeerd aannam

| | Aangenomen (§2/§3) | Gemeten |
|---|---|---|
| Aandeel kinderen dat Charley gebruikt | impliciet 100% (elk kind als AI-gebruiker) | **1,7%** opent Charley (17 van 1.025 apparaten, 28d); 11 apparaten in het AI-grootboek sinds 16 sep |
| Berichten per gebruiker per dag | mediaan 3, p95 74 | mediaan 5, **max 15** (na de rem v672) |
| AI-kosten per actief kind per jaar | €3,34 realistisch · €12,14 worst case | **≈ €0,30** (€2,56 september ÷ 104 terugkomers, × 12) |
| 1.000 gratis kinderen per maand | €350 – €1.192 | **€6 – €20** bij gemeten gedrag |
| 3.000 Ooievaarspas-kinderen per maand | €925 (midden) | **≈ €75** bij gemeten gedrag; ≈ €375 als Charley 5× populairder wordt; ≈ €40 op Flash-Lite |

De fout: §2 rekende de mediaan van de *Charley-gebruikers* door alsof élk kind zo'n
gebruiker is. Charley is een hulpje dat 1 op de 60 kinderen aanraakt; de 1.589 sommen van
september kostten €0. **Leerkwartier is een content-app met een AI-hulpje, geen AI-app.**
Dat is ook wat ChatGPT niet kon zien.

### Wat overeind blijft (en waar ChatGPT gelijk heeft)

1. **De belofte is open** (gratis t/m 2031, Den Haag voor altijd, codes ongelimiteerd) en de
   bovengrens zit nog niet in de techniek: `PER_UID_LIMIT_DAY = 120` is een noodrem, geen bundel.
2. **De roadmap maakt Charley steeds meer de voordeur** (buddy-eerst, Feynman, dictee, Charley-hulp).
   Wordt 1,7% ooit 30%, dan kloppen de sommen van §3 ineens wél (1.000 actief × 30% × 5 × 22 × €0,0044 ≈ €145/mnd op Haiku).
3. **Omzet is €0.** Dat is het echte gat. Vaste infra (€23 nu, €41,50 mét Vercel Pro) is 10× de AI-rekening.
4. Caching (v680) is **nog niet bewezen** — reken de −48% als 0 tot `[cache] read=` in de logs staat.

### Aanbeveling (volgorde)

1. Geen oktober-uren meer aan kostenoptimalisatie van een rekening van €2,56.
2. **Bundel 20/dag nu** (`PER_UID_LIMIT_DAY` 120 → 20): raakt niemand (max 15), sluit het €3.125-scenario af. Pauzeknop + "praat alleen indien nodig" daarna, om didactische redenen.
3. **Charley-penetratie (28d) als vast cockpitcijfer, alarm op 10%.** Onder 10% is dit vraagstuk gesloten; erboven A/B Haiku vs Flash-Lite op kwartier-ratio.
4. **Kostenregel per partnercode** (calls per uid × code) zodat "Ooievaarspas kostte deze maand €X" een getal is.
5. Verkoop: KvK 28 sep, Leergeld-mail 19 okt, Vercel Pro vóór de eerste euro. 15 partnerkinderen dekken de infra; 239 is het doel.

### Antwoorden op §9c

1. ~~Anker = openbare €131,88~~ → **Mark, 22 sep: "Squla wil ik gewoon niet benoemen. Klinkt voor mij een beetje vals en zo wil ik niet zijn."** Besluit: **geen prijsanker, geen vergelijking** in partner-copy of mails; €34,50 staat op zichzelf ("dit is de prijs, voor iedereen"). €43,52 is uit GEMEENTE-BETAALT-PLAN.md gehaald. §9a blijft staan als interne analyse; niet naar buiten gebruiken.
2. ✅ **BESLOTEN 22 sep (Mark: "doe maar"), v683:** twee lagen naar buiten (Gratis / Familie); schoollicentie als apart zakelijk product achter "Bent u een school?", **prijs op aanvraag** (€99/klas uit code en copy); bijlesdocent-Pro geschrapt.
3. **€39/gezin dekt 3 kinderen** — ja, ook in §4b's maximum; op gemeten gedrag met enorme marge. Kindlimiet 3 houden.
4. **Twee Familie-smaken**: jaar €39 + Seizoenspas €24,95; maand schrappen. Marks keuze; Esther één regel bij wijziging.

**Partner per kind vs Familie per gezin (§4a):** per kind houden, met de zin: *"Een gemeente
financiert een kind, een gezin koopt een gezinsabonnement. Kindpakketten worden per kind
toegekend, dus zo sluit het aan op uw administratie."* Geen partner-gezinsprijs bouwen tot
een inkoper erom vraagt.

**School-eenheid (oktober punt 2):** Marks model (bundel per school), "€99 per klas" uit
`proPlan.js`/`abonnement.html`, prijs uit de eerste twee schoolgesprekken laten komen.
Aanleiding om dat gesprek te zoeken: 21 sep zaten er ~68 nieuwe leerling-apparaten in twee
schooluren op de site, bron "direct", zonder code — een klas.

### Dagrapport-blok (§7) — aanvulling
- **Charley-penetratie 28d** (apparaten met `buddy_chat_open` ÷ alle apparaten) — alarm ≥10%.
- **Kosten per partnercode** zodra idee AO gebouwd is.
