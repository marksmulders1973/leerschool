// Bouw-stempel (sinds 2 jul 2026, Mark: "zo zie ik of ik naar de laatste versie kijk").
//
// Twee waarden, bij ELKE push allebei bijwerken:
// - BOUW_VERSIE: doorlopend telnummer, alleen intern (events `app_v`, git, logs,
//   dagrapport "sinds v923"). Nooit terugzetten naar 1: een oude versie zou dan
//   nieuwer lijken.
// - BOUW_STEMPEL: wat de bezoeker rechtsboven ziet. Mark 5 okt 2026: "versie 923"
//   leest als "923 keer iets mis" → vanaf 6 okt een datum. Eerste uitrol van een
//   dag = "6 okt", tweede = "6 okt b", derde "6 okt c".
export const BOUW_VERSIE = 935;
export const BOUW_STEMPEL = "8 okt e";
