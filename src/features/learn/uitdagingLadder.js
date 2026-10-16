// 🪜 Uitdagingsladder (Mark 16 okt 2026: "als iemand te makkelijk zegt, direct uitdagen …
// zo weten we waar saai overgaat in moeilijk").
//
// Kind tikt "Te makkelijk" → één vraag uit het volgende deel van hetzelfde leerpad,
// dan weer een tik (te makkelijk / precies goed / te moeilijk). Te makkelijk + goed
// antwoord = een tree hoger. Precies goed, te moeilijk of fout = daar ligt de grens.
// Puur en testbaar; het scherm staat in Uitdaging.jsx.

export const MAX_TREDEN = 5;

// Vragen die zonder hun scherm-context niet werken (leestekst, plaatje, filmpje,
// nieuwkomer-steun) of naar iets "hierboven" verwijzen, slaan we over.
const LOS_NIET_TE_SNAPPEN = /hierboven|hieronder|de tekst|de bron|het plaatje|de afbeelding|de tabel|de grafiek|de tekening|het filmpje/i;

export function losBruikbaar(check) {
  if (!check || typeof check !== "object") return false;
  const q = check.q || check.question;
  if (typeof q !== "string" || !q.trim()) return false;
  if (!Array.isArray(check.options) || check.options.length < 2 || check.options.length > 6) return false;
  if (!check.options.every((o) => typeof o === "string" && o.trim())) return false;
  if (!Number.isInteger(check.answer) || check.answer < 0 || check.answer >= check.options.length) return false;
  if (check.bronTekst || check.bronAfbeelding || check.bronVideo || check.svg || check.picto || check.steun || check.steunOpties) return false;
  return !LOS_NIET_TE_SNAPPEN.test(q);
}

/** Treden na `vanafStap`: per volgend deel één losse vraag, hoogstens MAX_TREDEN. */
export function bouwTreden(path, vanafStap, { rng = Math.random, max = MAX_TREDEN } = {}) {
  if (!path || !Array.isArray(path.steps) || !Number.isInteger(vanafStap)) return [];
  const uit = [];
  for (let i = vanafStap + 1; i < path.steps.length && uit.length < max; i++) {
    const kandidaten = (path.steps[i]?.checks || []).filter(losBruikbaar);
    if (!kandidaten.length) continue;
    uit.push({ stapIdx: i, stapTitel: path.steps[i].title || "", check: kandidaten[Math.floor(rng() * kandidaten.length)] });
  }
  return uit;
}

/**
 * Volgende toestand na een trede.
 *   goed=false                     → einde, reden "fout", grens = deze trede
 *   gevoel "goed" / "te-moeilijk"  → einde, reden = gevoel, grens = deze trede
 *   gevoel "te-makkelijk"          → volgende trede, of einde "top" als er geen is
 */
export function naTrede({ trede, aantal, goed, gevoel }) {
  if (!goed) return { klaar: true, reden: "fout", grens: trede };
  if (gevoel === "te-makkelijk") {
    return trede + 1 < aantal ? { klaar: false, volgende: trede + 1 } : { klaar: true, reden: "top", grens: null };
  }
  return { klaar: true, reden: gevoel === "te-moeilijk" ? "te-moeilijk" : "goed", grens: trede };
}
