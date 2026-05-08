// Option-shuffler voor meerkeuze-vragen. Audit-2 v2 (2026-05-08)
// code-quality-agent identificeerde 3× duplicate Fisher-Yates +
// indexOf-mapping in App.jsx:558, LearnPath.jsx:254, CitoLeerpadToets.jsx:65.
//
// Gebruik:
//   const shuffled = shuffleOptions(check);
//
// Input  : { options, answer (index), wrongHints?, ... }
// Output : { ...orig, options, answer (nieuwe index), wrongHints (geherorderd) }

function shuffle(arr, rng = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function shuffleOptions(check, rng = Math.random) {
  if (!check || !Array.isArray(check.options)) return check;
  const opts = check.options;
  const hints = Array.isArray(check.wrongHints) ? check.wrongHints : [];
  const order = shuffle(opts.map((_, i) => i), rng);
  const newAnswer = typeof check.answer === "number"
    ? order.indexOf(check.answer)
    : check.answer;
  return {
    ...check,
    options: order.map((i) => opts[i]),
    answer: newAnswer,
    wrongHints: order.map((i) => hints[i] ?? null),
  };
}
