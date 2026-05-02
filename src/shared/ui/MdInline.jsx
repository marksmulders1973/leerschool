// Inline-markdown renderer voor vraagtekst en uitleg in leerpaden + quiz.
// Ondersteunt alleen `*bold*` (asterisken raken niet-spatie aan beide kanten),
// zodat math-content als "2 * 3" of "n*x" niet per ongeluk wordt vetgedrukt.
//
// Gebruik:
//   <MdInline text={currentCheck.q} />

const BOLD_RX = /\*(\S(?:[^*]*\S)?)\*/g;

export default function MdInline({ text }) {
  if (text == null) return null;
  const s = String(text);
  if (!s.includes("*")) return s;

  const parts = [];
  let lastIdx = 0;
  let key = 0;
  BOLD_RX.lastIndex = 0;
  let match;
  while ((match = BOLD_RX.exec(s)) !== null) {
    if (match.index > lastIdx) parts.push(s.slice(lastIdx, match.index));
    parts.push(<strong key={key++}>{match[1]}</strong>);
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < s.length) parts.push(s.slice(lastIdx));
  return <>{parts}</>;
}
