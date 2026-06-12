// Inline-markdown renderer voor vraagtekst en uitleg in leerpaden + quiz.
// Ondersteunt zowel `**bold**` (standaard markdown) als `*bold*` (enkele
// asterisken raken niet-spatie aan beide kanten), zodat math-content als
// "2 * 3" of "n*x" niet per ongeluk wordt vetgedrukt.
//
// Gebruik:
//   <MdInline text={currentCheck.q} />

import KatexSpan, { splitMath } from "./KatexSpan.jsx";

// Match eerst dubbele **...**, dan enkele *...* met niet-spatie-grenzen.
const BOLD_RX = /\*\*([^*]+)\*\*|\*(\S(?:[^*]*\S)?)\*/g;

export default function MdInline({ text }) {
  if (text == null) return null;
  const s = String(text);
  // $...$-formules → KaTeX (lazy). De rest gaat door de bold-parser.
  if (s.includes("$")) {
    const segs = splitMath(s);
    if (segs.some((sg) => sg.type === "math")) {
      return segs.map((sg, si) =>
        sg.type === "math"
          ? <KatexSpan key={`m${si}`} tex={sg.tex} />
          : <MdInline key={`t${si}`} text={sg.text} />
      );
    }
  }
  if (!s.includes("*")) return s;

  const parts = [];
  let lastIdx = 0;
  let key = 0;
  BOLD_RX.lastIndex = 0;
  let match;
  while ((match = BOLD_RX.exec(s)) !== null) {
    if (match.index > lastIdx) parts.push(s.slice(lastIdx, match.index));
    const inner = match[1] != null ? match[1] : match[2];
    parts.push(<strong key={key++}>{inner}</strong>);
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < s.length) parts.push(s.slice(lastIdx));
  return <>{parts}</>;
}
