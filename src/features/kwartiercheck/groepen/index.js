// Kwartiercheck per groep (Mark 29 sep 2026: "maak de kwartiercheck passend voor de groepen 3 t/m 8").
// Elke groep heeft een eigen bestand met { concepten, vragen } in hetzelfde formaat als
// conceptMapping.js / questions.js. Welke stof bij welke groep hoort: docs/kwartiercheck/CONCEPTEN-PER-GROEP.md
// (SLO-tussendoelen, referentieniveaus; gemeten wordt wat halverwege het schooljaar verwacht wordt).
// Groep 8 hergebruikt de vaste concepten (vragen in questions.js) plus tabellen & grafieken.
import groep3 from "./groep3.js";
import groep4 from "./groep4.js";
import groep5 from "./groep5.js";
import groep6 from "./groep6.js";
import groep7 from "./groep7.js";
import groep8 from "./groep8.js";

export const GROEP_SETS = { "3": groep3, "4": groep4, "5": groep5, "6": groep6, "7": groep7, "8": groep8 };
