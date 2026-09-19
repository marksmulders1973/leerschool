# ⚖️ Vastgelegde afspraken — Ooievaarspas Den Haag × Leerkwartier

> **DIT DOCUMENT IS DE BRON VAN WAARHEID VOOR DE OOIEVAARSPAS-AFSPRAKEN.**
> Niets hierin wijzigen zonder een **nieuwe schriftelijke afspraak met bureau
> Ooievaarspas**. Wijzigingen zijn zichtbaar in de git-historie van dit bestand.
> Laatst vastgelegd: **3 augustus 2026.**

## De harde toezegging (getekend)

Leerkwartier heeft op **26 juli 2026** het *"Aanvraagformulier vriend van de
Ooievaarspas"* digitaal ondertekend via ValidSign (status "Gereed").

- **Wat:** het **Familie-abonnement** van Leerkwartier is **blijvend gratis** voor
  houders van een geldige Ooievaarspas — **zonder einddatum** en **zonder
  plekken-/aantallimiet**.
- **Buiten de afspraak:** de **Pro-laag** voor leerkrachten (teacher_pro) en het
  losse **Kwartier-tegoed** (extra AI-bijles) vallen er nadrukkelijk buiten.
- **Bewijs (onwrikbaar):** getekende PDF's in
  `Desktop\Ooievaarspas-aanvraag-getekend\` (juridisch bindend, niet te wijzigen).

## De aanvullende afspraken — beantwoord aan Esther Versluis, 3 aug 2026

Verstuurd per e-mail (Gmail SENT, message-id **19fc824faa1f9635**, thread
**19fc7e1f67bc3765**, cc ooievaarspas.szw@denhaag.nl). Dit zijn de toegezegde
antwoorden op de 8 vragen van accountmanager Esther Versluis:

1. **Kwartier-tegoed (losse AI-bijles):** NIET gratis onder de regeling — alleen
   het Familie-abonnement is gratis. De gratis versie bevat wel een vaste gratis
   basisportie AI-bijles.
2. **Betaling niet-pashouders:** pas vanaf de betaald-lancering (~begin 2027);
   tot dan is alles voor iedereen gratis.
3. **Inhoud Familie-abonnement:** ouder-inzicht (voortgang per vak), weekrapport
   per mail, hele toets oefenen met de klok (examen-simulatie), Kwartierplan.
   Per gezín, niet per kind.
4. **Ouder-inzicht:** valt onder Familie → voor pashouders gratis.
5. **Basisversie:** blijft gratis voor iedereen (alle leerpaden, uitleg op 3
   niveaus, gratis oefentoets, echte examenvragen met uitleg, printbare
   oefenbladen). Met alléén de gratis versie kan een kind zich volledig
   voorbereiden op de Doorstroomtoets.
6. **Maximum aantal gratis Familie voor pashouders:** GEEN maximum, geen limiet.
7. **Aanmelden + verificatie:** via een partner-code die de pashouder op de site
   invoert (zonder account/betaalgegevens); de gemeente verspreidt de code via
   een eigen kanaal, zodat alleen pashouders 'm hebben.
8. **Andere gemeenten:** het gratis aanbod geldt voor **iedere geldige
   Ooievaarspas**, óók houders uit **Leidschendam-Voorburg en Rijswijk**.

## Voorwaarde van bureau Ooievaarspas (Esther, 3 aug 2026)

De vriendschap gaat **pas in op het moment dat het Familie-abonnement niet langer
voor iedereen gratis is** (= bij de betaald-lancering, ~begin 2027). Pas vanaf
dat moment vermeldt de Ooievaarspas de samenwerking op haar kanalen. Communicatie
over de samenwerking gebeurt in overleg met bureau Ooievaarspas.

## Hoe dit in de app is verankerd (niet zomaar wijzigen)

- `src/features/referral/partnerCode.js` → `partnerFamilieTot()` geeft voor
  codes met prefix **`OOIEVAAR`** de waarde `null` = blijvend gratis Familie.
- `src/subscription/useSubscription.js` → `partnerGrant()` honoreert dit zodra de
  paywall aangaat.
- DB: `partner_codes.max_uses` voor `OOIEVAAR2027` staat op **1.000.000** (belofte
  kent geen limiet).
- **Regel:** deze logica NIET inkorten, van einddatum voorzien of limiteren zonder
  een nieuwe schriftelijke afspraak met bureau Ooievaarspas. Zie ook memory
  `project-studiebol-ooievaarspas`.


## 🔎 Geverifieerd 20 sep 2026 — wat er feitelijk is toegezegd

Uitgelezen uit de **getekende** stukken in `Desktop\Leerkwartier-dossiers\Ooievaarspas\getekend\`
(Mark vroeg zich af of er €39,95 p/mnd was genoemd — dat is niet zo):

| Veld in het aanvraagformulier (26-07-2026) | Ingevulde waarde |
|---|---|
| Activiteit | **Familie-abonnement leer-app** |
| Prijs | **€ 39/jaar** |
| Ooievaarspas-prijs / uw aanbod | **Gratis** |

✅ De genoemde normale prijs (€39/jaar) is exact `familie_yearly` uit `src/subscription/config.js`.
Er is **geen maandprijs** toegezegd en **geen prijsgarantie**.

**Twee clausules uit de overeenkomst (26-08-2026) die ertoe doen:**
1. *"De Vriend van de Ooievaarspas informeert de Ooievaarspas tijdig over relevante wijzigingen
   in exploitatie, tenaamstelling, **aanbod** en contactgegevens."* → een prijswijziging mag,
   maar moet **gemeld** worden aan Esther. Informatieplicht, geen toestemmingsplicht.
2. *"De kwaliteit en/of de hoeveelheid van de aangeboden producten moeten minimaal gelijk
   zijn..."* → wat een pashouder krijgt moet **minimaal gelijk** zijn aan het reguliere aanbod.

### 🔴 Gevolg voor de Charley-bundel (bouwen week van 22 sep)

Een Ooievaarspas-kind krijgt `parent_pro` — **Familie-niveau, niet gratis-niveau**
(`useSubscription.js`: `OOIEVAAR`-codes → `familie_tot = null` = blijvend). Twee dingen volgen:

- In `VERDIENMODEL-EN-KOSTEN.md` §3 zijn de Ooievaarspas-gezinnen als *gratis* gebruikers
  gerekend. Dat is te laag: zij vallen in de Familie-bundel.
- Een bundel die betalende Familie méér geeft dan een pashouder botst met clausule 2.

➡️ **Regel vóór het bouwen: de dagbundel is gelijk voor iedereen met Familie-niveau**
(betalend én pashouder); het verschil zit alleen tussen *gratis* en *Familie*. Die ene
bundelhoogte bepaalt daarmee direct de Ooievaarspas-exposure — kies hem bewust.
