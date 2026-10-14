// Voortgang in een leerpad, per vraag i.p.v. per deel (Mark 14 okt 2026:
// "na één beantwoorde vraag staat er nog steeds 0% — zorg dat het kind alles ziet").
// Tot nu toe telde de balk alleen afgeronde delen; een kind dat drie van de vijf vragen
// van deel 1 deed zag 0%. Nu telt het lopende deel naar rato mee.
//
//  afgerondeDelen  - aantal delen dat helemaal af is
//  totaalDelen     - aantal delen in het pad
//  deelIsAf        - is het huidige deel al afgerond (dan niet dubbel tellen)
//  beantwoord      - vragen van het huidige deel die al een antwoord kregen
//  vragenInDeel    - aantal vragen in het huidige deel (0 = deel zonder vragen)
export function voortgangPct({ afgerondeDelen, totaalDelen, deelIsAf, beantwoord, vragenInDeel }) {
  if (!totaalDelen || totaalDelen < 1) return 0;
  let delen = Math.min(afgerondeDelen, totaalDelen);
  if (!deelIsAf && vragenInDeel > 0 && beantwoord > 0) {
    delen += Math.min(beantwoord, vragenInDeel) / vragenInDeel;
  }
  return Math.max(0, Math.min(100, Math.round((delen / totaalDelen) * 100)));
}

// Hoeveel vragen van het huidige deel tellen als "gedaan": de vragen vóór de huidige,
// plus de huidige zodra er een antwoord op is gegeven (goed of fout).
export function beantwoordInDeel(checkIdx, mode) {
  const huidigeHeeftAntwoord = mode === "wrong" || mode === "correctEvidence";
  return checkIdx + (huidigeHeeftAntwoord ? 1 : 0);
}
