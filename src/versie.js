<<<<<<< HEAD
// Bouw-stempel (sinds 2 jul 2026, Mark: "zo zie ik of ik naar de laatste versie kijk").
//
// Twee waarden, bij ELKE push allebei bijwerken:
// - BOUW_VERSIE: doorlopend telnummer, alleen intern (events `app_v`, git, logs,
//   dagrapport "sinds v923"). Nooit terugzetten naar 1: een oude versie zou dan
//   nieuwer lijken.
// - BOUW_STEMPEL: wat de bezoeker rechtsboven ziet. Mark 5 okt 2026: "versie 923"
//   leest als "923 keer iets mis" → vanaf 6 okt een datum. Eerste uitrol van een
//   dag = "6 okt", tweede = "6 okt b", derde "6 okt c".
export const BOUW_VERSIE = 925;
export const BOUW_STEMPEL = "6 okt";
=======
// Bouw-versienummer (tijdelijk, tijdens de park-bouwfase — Mark 2 jul).
// Claude hoogt dit bij ELKE push met 1 op en meldt het nummer in de chat;
// het stempeltje rechtsboven toont het. Zo zie je in één oogopslag of je
// naar de laatste versie kijkt. Weghalen na de bouwfase: dit bestand +
// het stempel-blokje in main.jsx.
export const BOUW_VERSIE = 925;
>>>>>>> origin/audit3/rest
