// Controle altijd-A-fix vraag van de dag: deterministisch + verdeling A-D.
import { SOCIAL_VRAGEN, getSocialVraag } from "../src/socialVragen.js";

const verdeling = { 0: 0, 1: 0, 2: 0, 3: 0 };
let fouten = 0;
for (const [id, orig] of Object.entries(SOCIAL_VRAGEN)) {
  const a = getSocialVraag(id);
  const b = getSocialVraag(id);
  if (JSON.stringify(a.options) !== JSON.stringify(b.options)) { console.log("NIET DETERMINISTISCH:", id); fouten++; }
  if (a.options[a.answer] !== orig.options[orig.answer]) { console.log("ANTWOORD-REMAP FOUT:", id); fouten++; }
  if (Array.isArray(a.wrongHints) && a.wrongHints[a.answer] !== null) { console.log("WRONGHINT OP JUISTE OPTIE:", id); fouten++; }
  verdeling[a.answer] = (verdeling[a.answer] || 0) + 1;
}
console.log("vragen:", Object.keys(SOCIAL_VRAGEN).length, "| antwoord-verdeling A/B/C/D:", Object.values(verdeling).join(" / "), "| fouten:", fouten);
