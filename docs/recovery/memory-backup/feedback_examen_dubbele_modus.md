---
name: Examens — leren met uitleg én PDF-inzien beide gelijkwaardig
description: Mark expliciet 2026-05-11. Beide examen-modi zijn kern-feature. Niet één wegmoffelen, ook niet "voor leesbaarheid".
type: feedback
originSessionId: 35c70f04-c959-464d-81e1-52fb1e57c84c
---
Op Leerkwartier zijn er TWEE manieren om met oude examens te werken. Beide zijn een kern-feature en moeten gelijkwaardig zichtbaar blijven:

1. **🎯 Examen-vragen oefenen (USP)** — examen-leerpaden in `src/learnPaths/examen*.js` (Economie 2023-T1 t/m 2025-T2, Engels 2024+2025-T1, Geschiedenis 2025-T1). Echte examenvragen + `voorkennisKeten` + `uitlegPad` + `leerpadLink`. Dit is wat Leerkwartier UNIEK maakt — examenblad.nl heeft geen "begrijp je dit?"-flow.

2. **📄 Oude examens inzien (PDF)** — `ExamensPage` met `EXAMENS`-array (links naar examenblad.nl-PDF's + correctievoorschrift). Lijkt redundant met externe sites maar is sterk in onze app omdat: netjes per vak/jaar geordend, correctievoorschrift erbij, geschikt voor zelfstudie op papier, ouders die meekijken.

**Architectuur** (per 2026-05-11):
- `StudentHome` heeft 2 aparte balken (`onExamens("leren")` en `onExamens("pdf")`).
- `App.jsx` houdt `examenInitialMode` state; ExamensPage scrolt naar de gevraagde sectie.
- `ExamensPage` toont ALTIJD beide secties — modus bepaalt alleen scroll-target.
- `onPickPath` callback in ExamensPage navigeert naar `learn-path` met `learnPathReturnPage="examens"`.

**Why**: Mark zei letterlijk "oude examens inzien is ook een super sterk ding in de app dus mag niet even gemoffeld worden". Eerste plan was om PDF-modus naar 2e-laag te verstoppen — fout. Beide gelijkwaardig zichtbaar.

**How to apply**:
- Voorstel NOOIT om PDF-archief te verbergen, te verkleinen, of weg te zetten "voor leesbaarheid".
- Voorstel NOOIT om alleen examen-leerpaden te tonen "want PDF kan overal".
- Bij nieuwe examens beslis: speelbaar via examen-leerpad (USP) ÉN inzien via PDF (bibliotheek) — beide kanten toevoegen.
- Bij UX-werk op StudentHome of ExamensPage: behoud parity tussen beide modi.
