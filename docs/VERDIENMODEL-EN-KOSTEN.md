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
| Ouder (Familie) | €1,95/mnd | €6 – €16 | 414 – 1.062 (en btw-val bij 855) |
| Leerkracht | €9,95/mnd | ⚠️ zie §5b | hangt op klasgebruik |
| School M | €49/mnd | ⚠️ zie §5b | hangt op klasgebruik |
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
| 2 | **Prompt caching** op de tutor-system-prompt | Claude | ~1 uur, kan direct | −48% van de hele AI-rekening | ☐ open |
| 3 | **Charley praat alleen indien nodig** + pauzeknop; dagbundel als vangnet eronder | Claude | **week van 22 sep** (Mark 20 sep) | slechtste klant van −€62,87 → +€22,01/jaar | 🗓️ ingepland |
| 4 | **Vercel Pro** activeren | Mark | vóór de eerste betaling | +€18,50/mnd kosten, maar Hobby mag niet commercieel | ☐ open |

**Voorwaarde die bij elkaar hoort:** €34,50 zonder ingreep 3 is bij zwaar gebruik nog
steeds verliesgevend (−€62,87/kind/jaar). De prijs alleen lost het niet op.

**Bewust niet doen (nu):** ouderprijs €1,95 aanpassen. Te krap en er zit een btw-val bij
855 klanten, maar het model leunt op partners en scholen. Eén prijswijziging tegelijk.

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

### 5b. 🔴 Het gat: leerkracht en school hebben geen AI-dekking

Niet eerder doorgerekend, en het is het zwakste punt van het hele model. Gerekend mét
caching (call = €0,0023), 22 dagen:

| Tier | Leerlingen | Laag gebruik | Midden gebruik |
|---|---|---|---|
| **Leerkracht €9,95/mnd** | 30 | +€5,16 ✅ | **−€7,14** ❌ |
| **School M €49/mnd** | 120 | +€30,71 ✅ | **−€18,49** ❌ |

Bij middengebruik zijn beide tiers **verliesgevend**, en dieper dan de ouderprijs. Een
leerkracht met 30 leerlingen die Charley normaal gebruiken kost €16,80 aan AI tegen €9,95
omzet.

**Waarom het misschien meevalt — maar we weten het niet:** in een klas-context zet de
leerkracht stof klaar en oefent het kind gericht; het lage profiel is dan aannemelijker dan
het middenprofiel. **Maar er is nul meting**: er is nog geen enkele school actief, dus het
klasgebruikspatroon is volledig onbekend.

**Wat dit betekent voor de volgorde:** de school-first-keuze uit het prijsplan staat of valt
hiermee. Vóór er een schoolabonnement verkocht wordt, moet (a) ingreep 3 live zijn, en (b)
één echte klas gemeten worden. Tot die meting er is: **geen schoolprijs naar buiten
communiceren als vaste prijs.** Zie ook C4 hieronder.

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
4. **Gemini 2.0 Flash-tarieven** heb ik bewust *niet* ingevuld. Als Flash inderdaad ~10×
   goedkoper is dan Haiku, verandert de hele som — dan is modelkeuze belangrijker dan de
   bundel. Zoek de actuele prijs op en herbereken.
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
- 🔴 **Leerkracht en school zijn bij middengebruik verliesgevend** (§5b: −€7,14 resp. −€18,49
  per maand, mét caching). Dat is het grootste gat. De vraag die ik niet kan beantwoorden:
  hóé gebruikt een klas de app? Als klasgebruik overwegend uit vaste content komt is het
  lage profiel juist en klopt het; komt Charley er normaal bij, dan moet de leerkrachtprijs
  omhoog of per leerling. **Er is nul meting — geen enkele school is actief.** Reken door
  zodra de eerste klas draait, en bepaal of het per-leerling geprijsd moet worden.
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
