// Centrale wrapper rond DOMPurify voor SVG-content uit drie bronnen:
// 1. learnPath-files (statisch, vertrouwde maker = Mark zelf)
// 2. AI-output (Claude/Gemini, theoretisch beïnvloedbaar via prompt-injection)
// 3. Toekomstige user-uploads (nog niet aanwezig, maar future-proof)
//
// Audit-2 v2 (2026-05-08): security-agent identificeerde 3 plekken
// (`LearnPath.jsx:147+926`, `PlayQuiz.jsx:445`) waar dangerouslySetInnerHTML
// rauwe SVG-strings rendert. Inline `<script>` of `on*=`-attributes binnen
// SVG kunnen XSS opleveren als een prompt-injection ze daar weet te
// plaatsen. DOMPurify met SVG-profile elimineert deze vector.

import DOMPurify from "dompurify";

const SVG_OPTIONS = {
  USE_PROFILES: { svg: true, svgFilters: true },
  // Ook expliciet: geen scripts, geen event-handlers.
  FORBID_TAGS: ["script", "iframe", "object", "embed"],
  FORBID_ATTR: [
    "onload", "onerror", "onclick", "onmouseover",
    "onmouseout", "onfocus", "onblur", "onsubmit",
  ],
};

export function sanitizeSvg(rawSvg) {
  if (typeof rawSvg !== "string") return "";
  if (!rawSvg) return "";
  return DOMPurify.sanitize(rawSvg, SVG_OPTIONS);
}
