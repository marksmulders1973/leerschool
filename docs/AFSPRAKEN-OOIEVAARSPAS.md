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
