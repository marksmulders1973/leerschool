// Tafel-quiz-generator — kiest random nummer-paren en bouwt 3 wrong-answers
// die op een veelvoud van de tafel zijn (didactisch logische foute keuzes).

export const TAFEL_VIDEOS = {
  1: "https://www.youtube.com/watch?v=1rXBuNLDuM0",
  2: "https://www.youtube.com/watch?v=rnHUjxmFYG4",
  3: "https://www.youtube.com/watch?v=42Qe8ONZfX0",
  4: "https://www.youtube.com/watch?v=aLV9XC0UtC8",
  5: "https://www.youtube.com/watch?v=iNaqcwN7cSs",
  6: "https://www.youtube.com/watch?v=iAHwxUE4ULk",
  7: "https://www.youtube.com/watch?v=rZZzGFhKcas",
  8: "https://www.youtube.com/watch?v=10FO_bwGmqE",
  9: "https://www.youtube.com/watch?v=5bF7n2hXjd0",
  10: "https://www.youtube.com/watch?v=szD6nX6fcHg",
  11: "https://www.youtube.com/results?search_query=tafel+van+11+kinderen",
  12: "https://www.youtube.com/results?search_query=tafel+van+12+kinderen",
};

export function generateTafelQuestions(tafel, count) {
  const makePair = (n, t) => {
    const correct = n * t;
    const wrongs = new Set();
    while (wrongs.size < 3) {
      const steps = Math.floor(Math.random() * 4) + 1;
      const candidate =
        Math.random() < 0.5 ? correct + steps * t : Math.max(t, correct - steps * t);
      if (candidate !== correct && candidate > 0) wrongs.add(candidate);
    }
    const opts = [correct, ...wrongs].sort(() => Math.random() - 0.5);
    return {
      q: `${n} × ${t} = ?`,
      options: opts.map(String),
      answer: opts.indexOf(correct),
      youtubeUrl: TAFEL_VIDEOS[t],
    };
  };
  if (tafel === "mix") {
    const pairs = [];
    for (let t = 1; t <= 12; t++) for (let n = 1; n <= 12; n++) pairs.push([n, t]);
    return pairs
      .sort(() => Math.random() - 0.5)
      .slice(0, count)
      .map(([n, t]) => makePair(n, t));
  }
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return [...nums]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(count, 12))
    .map((n) => makePair(n, tafel));
}
