// Maakt buddy-tekst geschikt voor speechSynthesis. De browserstem leest emoji's
// letterlijk voor ("🐕" → "hond", bug Brian 15 jul 2026) en verhaspelt
// afkortingen als "vs". In de tekstballon blijft de originele tekst staan;
// alleen wat wordt VOORGELEZEN gaat door deze filter.
// ── Meelezen (Mark 15 jul) ──────────────────────────────────────────
// Voor karaoke-meelezen: koppel de GESPROKEN tekst (zonder emoji's/markdown)
// terug aan de GETOONDE woorden. Elk niet-witruimte-token krijgt een
// woord-index; tokens die na schoonmaak leeg zijn (bv. een losse emoji)
// worden niet uitgesproken en dus nooit belicht.
export function maakMeeleesPlan(tekst) {
  const tokens = String(tekst ?? "").split(/(\s+)/);
  let gesproken = "";
  const grenzen = []; // per gesproken woord: { start, eind, woordIdx }
  let woordIdx = -1;
  for (const t of tokens) {
    if (!t || /^\s+$/.test(t)) continue;
    woordIdx += 1;
    const s = schoonVoorSpraak(t);
    if (!s) continue;
    const start = gesproken ? gesproken.length + 1 : 0;
    gesproken = gesproken ? `${gesproken} ${s}` : s;
    grenzen.push({ start, eind: start + s.length, woordIdx });
  }
  return { gesproken, grenzen };
}

// Koppel meelezen aan een utterance: boundary-events sturen per woord de
// highlight; stemmen zonder boundary-events krijgen na 1,2s een tempo-
// schatter. Gebruikt addEventListener zodat bestaande onstart/onend-handlers
// van de beller blijven werken. Geeft een stop-functie terug.
export function koppelMeelezen(u, plan, onWoord) {
  if (!onWoord || !plan || !plan.grenzen.length || !u.addEventListener) return () => {};
  let boundaryGezien = false;
  let timer = null;
  const stop = () => { if (timer) { clearTimeout(timer); timer = null; } };
  u.addEventListener("boundary", (e) => {
    boundaryGezien = true;
    stop();
    onWoord(woordIndexBijChar(plan, e.charIndex || 0));
  });
  u.addEventListener("start", () => {
    setTimeout(() => {
      if (boundaryGezien || !window.speechSynthesis?.speaking) return;
      let g = 0;
      const stap = () => {
        if (boundaryGezien || g >= plan.grenzen.length || !window.speechSynthesis?.speaking) return;
        const grens = plan.grenzen[g];
        onWoord(grens.woordIdx);
        timer = setTimeout(() => { g += 1; stap(); }, 190 + 55 * (grens.eind - grens.start));
      };
      stap();
    }, 1200);
  });
  u.addEventListener("end", stop);
  u.addEventListener("error", stop);
  return stop;
}

// Welk getoond woord hoort bij deze tekenpositie in de gesproken tekst?
// (onboundary geeft charIndex terug in de utterance-tekst.)
export function woordIndexBijChar(plan, charIndex) {
  let res = -1;
  for (const g of plan.grenzen) {
    if (charIndex >= g.start) res = g.woordIdx;
    else break;
  }
  return res;
}

export function schoonVoorSpraak(tekst) {
  return String(tekst ?? "")
    // markdown-tekens (bestond al in de losse speak()-functies)
    .replace(/[*_#`>]/g, "")
    // "vs"/"vs." klinkt als gebrabbel → spreek uit als "of" (reis vs rijst).
    // Alleen kleine letters: hoofdletter-VS = Verenigde Staten, die blijft.
    .replace(/\bvs\b\.?/g, "of")
    // emoji's en pictogrammen (dekt 🐕 😄 ✨ 🎡 enz.)
    .replace(/\p{Extended_Pictographic}/gu, "")
    // restjes: vlag-letters, huidskleur-tonen, keycap, variatie-selector, joiner
    .replace(/[\u{1F1E6}-\u{1F1FF}\u{1F3FB}-\u{1F3FF}⃣️‍]/gu, "")
    .replace(/ {2,}/g, " ")
    .replace(/^[ \t]+|[ \t]+$/gm, "")
    .trim();
}
