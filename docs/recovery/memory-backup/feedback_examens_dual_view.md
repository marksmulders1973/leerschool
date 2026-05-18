---
name: ExamensPage dual-view = goed patroon voor overzichten met 2 modi
description: Combineer 2 secties (oefenen + inzien/leren + toetsen/etc) per onderwerp in 1 rij ipv 2 aparte secties. Mark akkoord 2026-05-16.
type: feedback
originSessionId: 3617f65a-5b58-4d56-8e41-b5c1ad70ae16
---
Bij feature-overzichten met 2 of meer modi per onderwerp: NIET 2 aparte secties onder elkaar maken. WEL per onderwerp 1 rij met dual-teller in de header + 2 kolommen naast elkaar bij open.

**Why:** Mark feedback 2026-05-16 na ExamensPage-merge: "super goed, dat examen nu, onthoud dat dit de weg is." Eerdere split (Oefenen met uitleg = sectie 1, PDF inzien = sectie 2) dwong scrollen tussen secties om hetzelfde vak te vinden. Gecombineerde view toont per vak meteen alle opties.

**How to apply:**
- Accordion-header: vak-icoon + naam + telling-pill per modus (🎯 8/8 oefen + 📄 8/8 PDF) + chevron
- Bij open: per item (jaar+tijdvak/onderwerp) 1 rij met grid `repeat(auto-fit, minmax(220px, 1fr))` zodat 2 kolommen op desktop maar stacken op mobiel
- Linker kolom = primaire modus (oefenen — groen, USP) — knop indien beschikbaar, dashed placeholder met reden indien niet
- Rechter kolom = secundaire modus (PDF/inzien — paars, ondersteunend)
- Intro-legenda boven met 2 kleurblokjes om kleur-codes uit te leggen
- Geen aparte "ga terug naar sectie 1"-banners meer nodig

Toepasbaar op toekomstige overzicht-features met meerdere modi per onderwerp (bv. Doorstroomtoets-oefenen vs Doorstroomtoets-inzien, of Examen-modus vs Oefen-modus per pad in een vakkenoverzicht).

Anti-patronen om te vermijden:
- 2 aparte secties met SectieKop + scrollIntoView-knoppen tussen secties
- Aparte open/dicht-state per sectie voor hetzelfde vak (dubbel klikken)
- Bridge-counter banners die zeggen "X van deze Y zijn ook beschikbaar als ..." — onnodig als alles al in 1 rij staat
