import { useEffect, useState } from "react";

// Lazy KaTeX-renderer (gebruikerswens bord 2026-06-11: echte wiskundenotatie).
// KaTeX is ~280 KB — daarom NIET in de hoofdbundle maar pas geladen op het
// moment dat een tekst daadwerkelijk een $...$-formule bevat. Groep 6-8-content
// zonder formules betaalt er dus niets voor.
//
// Gebruik in uitleg/vraag-teksten: "De regel is $a^m \\cdot a^n = a^{m+n}$."
// Zolang KaTeX nog laadt (eenmalig, daarna gecached) tonen we de kale TeX
// als fallback zodat er nooit een gat in de tekst valt.

let katexPromise = null;
function loadKatex() {
  if (!katexPromise) {
    katexPromise = Promise.all([
      import("katex"),
      import("katex/dist/katex.min.css"),
    ]).then(([mod]) => mod.default || mod);
  }
  return katexPromise;
}

export default function KatexSpan({ tex }) {
  const [html, setHtml] = useState(null);
  useEffect(() => {
    let alive = true;
    loadKatex().then((katex) => {
      if (!alive) return;
      try {
        setHtml(katex.renderToString(tex, { throwOnError: false, output: "html" }));
      } catch {
        setHtml(null);
      }
    });
    return () => { alive = false; };
  }, [tex]);

  if (!html) return <span>{tex}</span>;
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

// Splitst een tekst op $...$-formules. Retourneert segmenten:
//   { type: "math", tex } | { type: "text", text }
// Losse dollartekens (prijzen als "$5" of "5$") blijven gewone tekst:
// de match eist dat er géén spatie direct na de open-$ en vóór de sluit-$
// staat en dat de inhoud geen newline bevat.
const MATH_RX = /\$(\S(?:[^$\n]*\S)?)\$/g;

export function splitMath(text) {
  const s = String(text ?? "");
  if (!s.includes("$")) return [{ type: "text", text: s }];
  const out = [];
  let last = 0;
  MATH_RX.lastIndex = 0;
  let m;
  while ((m = MATH_RX.exec(s)) !== null) {
    if (m.index > last) out.push({ type: "text", text: s.slice(last, m.index) });
    out.push({ type: "math", tex: m[1] });
    last = m.index + m[0].length;
  }
  if (last < s.length) out.push({ type: "text", text: s.slice(last) });
  return out;
}
