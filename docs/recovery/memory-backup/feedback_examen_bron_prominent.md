---
name: examenBron-pill moet prominent zijn (geel + groot + bron-link)
description: Bij echte examen-vragen het examenBron-label visueel benadrukken — geen kleine pill maar duidelijke banner met examenblad.nl-link. Geldt voor alle examenvragen in leerpaden.
type: feedback
originSessionId: 35c70f04-c959-464d-81e1-52fb1e57c84c
---
Bij elke examen-vraag die `examenBron`-veld heeft, moet het label in de UI:

- **Geel/gouden banner** (niet 15% maar 30%+ achtergrond + dikkere rand) → moet meteen opvallen
- **Vergroot** (label-fontSize ≥ 15px, niet 11px)
- **Met label "Officiële examen-vraag"** zodat duidelijk is: dit komt UIT echte examens
- **Met link naar examenblad.nl** zodat de leerling/ouder de bron kan checken

**Why:** Mark feedback 2026-05-11: "kun je dit deel accentueren bv geel maken en extra (in dit geval ook vog, vraag 4 vergroten VMBO-GL/TL economie 2023 tijdvak 1, vraag 4. zodat extra duidelijk is dat de vraag komt uit echte examens en waar terug te vinden". Dit is een USP van Leerkwartier: authentieke examenvragen vs Doorstroomtoets-na-aap. Moet zichtbaar in UI, niet een onopvallend grijs pilletje.

**How to apply:** Gebruik **altijd** de shared component `<ExamenBronBanner examenBron={...} />` uit `src/shared/ui/ExamenBronBanner.jsx`. Eén plek wijzigen → overal consistent. Compact-variant *(`compact` prop)* voor lijsten (CitoLeerpadToets fout-uitklap, ResultsPage). Reeds gebruikt in:
- `LearnPath.jsx` (boven de vraag tijdens beantwoorden)
- `CitoLeerpadToets.jsx` (running mode + fout-vragen-uitklap)

**Voor nieuwe UI-plekken**: zie je een check met `examenBron`-veld renderen? → component erbij. Geen inline-styles meer kopiëren.

**Update 2026-05-12**: Mark vroeg expliciet om consistentie over de hele app — daarom shared component i.p.v. losse inline-implementaties. Toekomstige features (ExamensPage detail-view, ResultsPage fout-vragen waar examen-content terugkomt, examen-modus UI) gebruiken dezelfde component.

Bij introductie van Doorstroomtoets-examens (private content): aparte component overwegen *(niet examenblad.nl)*.
