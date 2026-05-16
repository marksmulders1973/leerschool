# Examen-bronnen (foto's, kaarten, grafieken)

Lokale opslag van bron-afbeeldingen uit officiële examenblad.nl-PDFs.
Nodig voor examen-leerpaden waar de vraag leunt op een foto, weerkaart,
landschap-afbeelding of grafiek — typisch voor **aardrijkskunde**, sommige
**biologie**-vragen, en de meeste **wiskunde**-meetkunde-vragen.

## Map-structuur

```
public/examens/bronnen/
└── <examen-id>/
    ├── bron-1.png
    ├── bron-2.png
    └── vraag-3.png       # optioneel — als bron specifiek bij 1 vraag hoort
```

Voorbeeld: `public/examens/bronnen/aardrijkskunde-2024-T1/bron-3.png`

## In een examen-leerpad-check verwijzen

Voeg het veld `bronAfbeelding` toe aan een `check`-object:

```js
{
  q: "Welke beschrijving hoort bij foto Q, foto R en foto S?",
  options: ["A: 1-2-3", "B: 2-1-3", "C: 3-2-1", "D: 1-3-2", "E: 2-3-1"],
  answer: 4,  // optie E
  bronAfbeelding: {
    src: "/examens/bronnen/aardrijkskunde-2024-T1/bron-3.png",
    alt: "Drie foto's van Spaanse landschappen — foto Q, R, S",
    caption: "bron 3 — foto's Q, R, S",
    maxHeight: 400,  // optioneel, default 400px
  },
  // bronTekst kan tegelijk aanwezig zijn voor tabel + tekst-context
  bronTekst: { titel: "bron 4", body: "..." },
  wrongHints: [...],
  uitlegPad: {...},
}
```

LearnPath rendert deze automatisch boven de vraag, in dezelfde stijl als
`bronTekst` (oranje accentkleur "📑/🖼️ Bron — ...").

## Hoe bron-afbeeldingen extraheren uit een examen-PDF

`pdftoppm`/`pdfimages` zijn op de huidige dev-omgeving niet beschikbaar
(alleen `pdftotext` zit in mingw64-poppler). Handmatige aanpak:

### Optie A — Schermopname (snel, lo-fi)
1. Open PDF in browser of Adobe Reader.
2. Zoom in op de bron, maak schermopname (Win+Shift+S).
3. Sla op als PNG in deze folder.

### Optie B — Adobe Acrobat / SumatraPDF (kwaliteit)
1. Acrobat: "Export As" → "Image" → PNG per pagina, dan handmatig croppen.
2. SumatraPDF: rechtermuisknop → "Selecteer afbeelding" → kopiëren naar
   Paint → opslaan als PNG.

### Optie C — Online tool (massaal)
- pdf2png.com / smallpdf.com / iLovePDF — upload PDF, extract page-images.
- Croppen per bron met willekeurig image-editor.

## Auteursrecht

Examenblad.nl-PDFs zijn officieel openbaar onderwijsmateriaal — verspreid
door het College voor Toetsen en Examens. Reproductie voor educatief gebruik
binnen Nederland valt typisch onder vrij gebruik. Bij twijfel: link extern
naar de PDF op examenblad.nl via `bronLink` ipv lokale opslag.

## Bestandsformaat-richtlijnen

- **Formaat**: PNG voor scherp lijnwerk (grafieken, kaarten), JPG voor foto's.
- **Resolutie**: max 1200px breed (groter = bandbreedte-verspilling).
- **Bestandsgrootte**: streef <200 kB per afbeelding. Gebruik tinypng.com
  als nodig.
- **Naamgeving**: `bron-N.png` of `vraag-N.png` (lowercase, kebab-case).
