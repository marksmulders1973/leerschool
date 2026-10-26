# 🧒 Plan — eenvoud voor het kind ("Jouw groep 5")

Mark 26 okt 2026: *"waar ik vooral naar op zoek ben is eenvoud. een kind zit in groep 5, daar horen vakken
bij. dat moet hij direct zien, en beginnen, een rapport krijgen en dan werken aan verbeterpunten. tijdens
gewoon werk moet er ook naar leerpaden gegaan kunnen worden maar alles moet natuurlijk overkomen en simpel.
een kind hoeft niet alles te zien direct wat kan omdat teveel is."* Klikbaar voorbeeld: `docs/ontwerp/groep5-voorbeeld.html`
(ook https://claude.ai/artifact/SKvH7oiMEsMyMFr45eWyKb) → Mark: **"ja heel veel beter"**. Aanvulling Mark: groep als
dropdown, en op elke tegel "Rekenen · groep 5".

## De lus
beginnen → oefenen → rapport → verbeterpunt → oefenen. Verder niets op het kinderscherm.

## Stappen (één geteste uitrol per stap)

| # | Stap | Status |
|---|------|--------|
| 1 | **Mijn pagina, kind-weergave:** groep-dropdown in de kop · Begin (vandaag-motor, zonder adviestegels) · "Je vakken · groep 5" als tegels mét rapportcijfer (`VakTegels`) · opmerking van de meester · "📒 bekijk je rapport" (één tik) · "Werk aan" (max 2: zwakste vak < 6, dan meting/intake/klaarzet, dan nieuw) · lege staat "nog niets klaargezet" weg · "Alle vakken" achter Meer · Meer-knop heet "Meer ▼". Code: `src/features/account/JouwGroep.jsx`, `Rapport.jsx` (`rapportRijen`, `MeesterOpmerking`), `MijnPagina.jsx`. | ✅ v999 "054" (26 okt); v1000 "055": cijferkleur rood < 5½ · oranje 5½ · groen ≥ 6 (tegels én rapport) — live getest: dropdown, rapport-toggle, Meer, tegel → Leren op dat vak, Werk aan → vak/pad |
| 2 | **Onderbalk per groep:** groep 1-5 **Begin · Rapport · Spelletje · Meer**; vanaf groep 6 **Toets** erbij. "Rapport" = het papieren rapport als eigen scherm; "Meer" = de Meer-lijst van Mijn pagina. "Leren"-hub blijft voor ouder/leerkracht en via Meer. Code: `BottomNav.jsx` (`kindTabs`), `App.jsx` (routes rapport/meer = MijnPagina met `scherm`), `routes.js` (/rapport, /meer), `snelkoppelingen.js`. | ✅ v1001 "056" (26 okt) — live getest als Testsam: groep 5 = 4 knoppen, groep 8 = 5 (Toets), /rapport en /meer, terug naar Begin zonder "Wie ben jij?" |
| 2b | **Groep verplicht + rapport-venster tikbaar** (Mark 26 okt, na test met Brian: zonder groep zag hij het nieuwe scherm niet). Nieuw kind-profiel zonder groep of klas kan niet "Klaar" (`WieOefentEr.jsx` ProfielKaart); een bestaand kind-profiel zonder groep ziet op Mijn pagina eerst de kaart "In welke groep zit je?" (8 knoppen) en pas daarna Begin/vakken/Werk aan; ouder en leerkracht hoeven geen groep. Tik op de opmerking van de meester opent het rapport (zelfde als "📒 bekijk je rapport"). | ✅ v1003 "058" (26 okt) — live getest: foutmelding zonder groep, met groep 5 direct het nieuwe scherm; tik op opmerking → rapport open, link wordt "rapport dichtdoen" |
| 3 | **Vakscherm:** tik op een tegel → "Rekenen · groep 5" met groot cijfer, "Oefen nu" en alleen de onderwerpen van die groep (nu: de Leren-hub gefilterd op het vak, die toont ook andere groepen). | ⏳ |
| 4 | **Leerpad na een fout:** "Begrijp je dit?" → stappen → "Leer dit stap voor stap" → terug naar je vraag (controleren wat er al is in VraagUitlegPad; M1 = vraag eerst, uitleg bij een fout). | ⏳ |
| 5 | **Meten:** events `mijn_vaktegel`, `mijn_werk_aan`, `mijn_groep_dropdown`, `mijn_rapport_toggle`, `mijn_meer` → na 7 dagen in het dagrapport: worden tegels en Werk aan gebruikt, hoe vaak gaat Meer open? | ⏳ |

## Regels
- Nooit een nieuw blok op het kinderscherm; nieuwe dingen horen in de lus (Begin / vak / rapport / verbeterpunt) of achter Meer.
- Situatie-afhankelijke blokken alleen als ze gelden: klaargezet alleen als er iets staat, Doorstroomtoets-aftelling alleen groep 7-8, schoolstartkaart alleen in de schoolstartperiode.
- Niets weggegooid: alles wat van het scherm verdween staat onder "Meer".
