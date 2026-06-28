// Takenlijst — Brian's idee (2026-06-28): een leerkracht zet een lijstje taken
// klaar voor de klas (bv. "Week 24: spelling th, werkwoorden, dictee"), de
// leerlingen vinken ze af en krijgen een beloning.
//
// ONTWERP — geen nieuwe tabel/migratie nodig. Een takenlijst wordt opgeslagen in
// de bestaande `quizzes`-tabel (code → data jsonb), met een type-discriminator.
// Zo hergebruiken we de werkende "leerkracht deelt code → leerling vult code in"-
// flow én de beloningslaag (park-tokens na een afgerond kwartier).
//
// data-vorm van een takenlijst (in quizzes.data):
//   {
//     type: "takenlijst",
//     code, id,
//     title: "Week 24 — spelling",
//     intro?: "Maak deze week deze taken.",
//     created_by, created_at,
//     taken: [
//       { id, title: "Werkwoorden -dt", pathId: "werkwoordsspelling-dt", stepCount: 5 },
//       ...
//     ],
//   }
//
// "Afgemaakt" wordt afgeleid uit de bestaande `learn_progress`-tabel: een taak is
// klaar als de leerling de laatste stap van het gekoppelde leerpad heeft gedaan.
// Geen losse afvink-knop → geen vals afvinken; het kind doet de taak écht.

export const TAKENLIJST_TYPE = "takenlijst";

export function isTakenlijst(data) {
  return !!data && data.type === TAKENLIJST_TYPE && Array.isArray(data.taken);
}

// Status van één taak op basis van de gedane stappen (Set van step_idx) van de
// leerling voor het gekoppelde leerpad. → "open" | "bezig" | "klaar".
export function taakStatus(taak, doneSteps) {
  const n = doneSteps ? doneSteps.size : 0;
  if (n === 0) return "open";
  const stepCount = taak?.stepCount || 0;
  // Klaar als de laatste stap is gedaan, of (fallback zonder stepCount) als er
  // minstens evenveel stappen gedaan zijn als de taak verwacht.
  if (stepCount > 0) {
    if (doneSteps.has(stepCount - 1)) return "klaar";
    if (n >= stepCount) return "klaar";
    return "bezig";
  }
  return "bezig";
}

// Hoeveel taken zijn klaar, en is de hele lijst af?
export function takenlijstVoortgang(takenlijst, progressByPath) {
  const taken = takenlijst?.taken || [];
  let klaar = 0;
  for (const t of taken) {
    if (taakStatus(t, progressByPath?.[t.pathId]) === "klaar") klaar++;
  }
  return { klaar, totaal: taken.length, allesAf: taken.length > 0 && klaar === taken.length };
}
