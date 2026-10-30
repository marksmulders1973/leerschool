// Bouw-stempel (sinds 2 jul 2026, Mark: "zo zie ik of ik naar de laatste versie kijk").
//
// Twee waarden, bij ELKE push allebei bijwerken:
// - BOUW_VERSIE: doorlopend telnummer, alleen intern (events `app_v`, git, logs,
//   dagrapport "sinds v923"). Nooit terugzetten naar 1: een oude versie zou dan
//   nieuwer lijken.
// - BOUW_STEMPEL: wat de bezoeker rechtsboven ziet. Mark 5 okt 2026: "versie 923"
//   leest als "923 keer iets mis" → van 6 t/m 14 okt een datum ("14 okt c"). Mark 14 okt:
//   een datum "kan lijken of de datum niet klopt" → vanaf nu een teller met drie
//   cijfers die bij 001 begint: elke uitrol +1 ("001", "002", …). Nooit terug naar 001.
export const BOUW_VERSIE = 1025;
export const BOUW_STEMPEL = "080";
