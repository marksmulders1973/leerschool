// Open-vraag-antwoord-checker. Gebruikt door PlayQuiz wanneer question.kind === "open".
//
// Format:
//   {
//     q: "Wat is 4 + 4?",
//     kind: "open",
//     acceptedAnswers: ["8", "acht"],
//     caseSensitive: false,    // default false
//     ignoreSpaces: false,     // default false — wel handig bij wiskunde "1/2" vs "1 / 2"
//     numericTolerance: 0.01,  // optioneel — als alle antwoorden numeriek zijn
//   }
//
// Geen AI-grading, geen fuzzy edit-distance — exact match na normalisatie.
// Latere uitbreiding via numericTolerance + synoniem-lijst.

function normalize(s, { caseSensitive, ignoreSpaces }) {
  let v = String(s ?? "").trim();
  if (!caseSensitive) v = v.toLowerCase();
  // Strip diakrieten (é → e, ü → u) zodat 'cafe' ≈ 'café'
  v = v.normalize("NFD").replace(/[̀-ͯ]/g, "");
  // Normaliseer komma → punt voor decimalen ('1,5' ≈ '1.5')
  v = v.replace(/,/g, ".");
  if (ignoreSpaces) v = v.replace(/\s+/g, "");
  else v = v.replace(/\s+/g, " ");
  return v;
}

function tryNumber(s) {
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

export function checkOpenAnswer(userInput, question) {
  if (!question || question.kind !== "open") return false;
  const accepted = Array.isArray(question.acceptedAnswers) ? question.acceptedAnswers : [];
  if (accepted.length === 0) return false;
  const opts = {
    caseSensitive: !!question.caseSensitive,
    ignoreSpaces: !!question.ignoreSpaces,
  };
  const user = normalize(userInput, opts);
  if (!user) return false;

  // Numerieke match met tolerantie
  if (typeof question.numericTolerance === "number") {
    const uNum = tryNumber(user);
    if (uNum !== null) {
      for (const a of accepted) {
        const aNum = tryNumber(normalize(a, opts));
        if (aNum !== null && Math.abs(uNum - aNum) <= question.numericTolerance) return true;
      }
    }
  }

  // String match
  for (const a of accepted) {
    if (normalize(a, opts) === user) return true;
  }
  return false;
}
