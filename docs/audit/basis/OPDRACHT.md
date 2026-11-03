# Herschrijfronde "eerste hulpstap" (niveaus.basis) — 3 nov 2026

Bij de eindmetingen van 3 nov was de grootste twijfel-categorie: de eerste hulpstap (`niveaus.basis`, of `uitlegPad.niveaus.basis`) geeft alleen het antwoord ("90 (alles optellen).", "dak", "Drenthe."). Een hulpstap die het kind zelf kan openen vóór een nieuwe poging hoort een **denkstap** te zijn, geen antwoord. `scripts/audit/basis-scan.mjs` vond 1.464 van zulke hulpstappen in 114 basisschoolpaden; ze staan in `docs/audit/basis/pakket-NN.json` (per pakket: bestanden + per vraag `waar`, `antwoord`, huidige `basis`).

## Regels
- Je bewerkt ALLEEN de `basis`-tekst van de vragen in jouw pakket (Edit-tool, zoek op de huidige basis-tekst + context). Niets anders: geen vraag, opties, answer, wrongHints, `simpeler`/`nogSimpeler` (die mogen het antwoord geven), geen andere vragen.
- Nieuwe `basis` = één of twee hele Nederlandse zinnen die het kind op weg helpen zónder het antwoord te noemen, te omschrijven of voor te rekenen: de eerste stap van de aanpak, de regel die hier geldt, of een gerichte vraag ("Hoeveel letters krijgt een lange klank?", "Tel eerst de tientallen bij elkaar op.", "Welke kant is het noorden op een kaart?"). Passend bij de groep (groep 3 = 6-7 jaar, groep 8 = 11-12 jaar), je/jij, geen Engels, geen concurrentnamen.
- Bij rekensommen: benoem de methode of de eerste tussenstap in woorden, niet de uitkomst en niet de hele berekening met getallen die het antwoord opleveren.
- Bij woordenschat/spelling: wijs naar de regel, de klank, de woordfamilie of de context, niet naar het woord zelf.
- Staat er in `basis` meer dan alleen het antwoord (een echte uitleg mét het antwoord), haal dan alleen het antwoord-deel eruit en laat de denkstap staan.
- Na elke bestandsbewerking: `node --check <bestand>`. Geen git, geen vitest, geen build. Hulpbestanden alleen in de scratchpad met voorvoegsel basisNN-.
- Schrijf aan het eind `docs/audit/basis/oordeel-NN.json`: `[{ "waar", "hersteld": true|false, "nieuw": "<nieuwe basis>" }]` voor alle vragen in je pakket (hersteld=false met reden in `nieuw` als je bewust niets deed, bv. omdat de basis al een echte hulpstap was).

Eindrapport kort in het Nederlands: aantal herschreven / overgeslagen, welke bestanden.
