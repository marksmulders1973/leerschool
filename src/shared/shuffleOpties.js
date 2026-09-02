// Schudt de antwoord-opties van één vraag en verlegt answer + wrongHints mee.
//
// Waarom: in de leerpad-data staat het juiste antwoord vrijwel altijd op
// index 0 (auteurs-conventie: wrongHints beginnen met null). In een toets
// zou "altijd A klikken" dan bijna 100% scoren. Daarom schudden we bij het
// bouwen van toets-flows (proef-toets, examen-mix, Doorstroomtoets-mix) per vraag.
//
// Veiligheden:
// - Opties met vaste positie ("geen van beide", "allebei", "A en B", ...)
//   worden niet geschud — hun betekenis hangt aan de plek.
// - uitlegPad-niveaus eindigen soms op een letter-shorthand ("… A.") die na
//   schudden niet meer klopt — die strippen we runtime weg (data blijft heel).

const POSITIE_VAST = /\b(beide|allebei|geen van|alle (twee|drie|vier)|bovenstaande|onderstaande|[abcd] en [abcd])\b/i;

function stripLetterShorthand(s) {
  return typeof s === "string" ? s.replace(/\s[A-D]\.?$/, "") : s;
}

// Deterministische variant: zelfde vraag-id → zelfde volgorde, voor iedereen
// en elke dag. Nodig voor de vraag van de dag / /v/-deeplinks, waar de
// volgorde op de site moet matchen met de geposte social-afbeelding.
export function shuffleOptiesSeeded(q, seedString) {
  let h = 1779033703 ^ String(seedString).length;
  for (const ch of String(seedString)) {
    h = Math.imul(h ^ ch.charCodeAt(0), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let s = h >>> 0;
  const rng = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  return shuffleOpties(q, rng);
}

export function shuffleOpties(q, rng = Math.random) {
  if (!q || !Array.isArray(q.options) || typeof q.answer !== "number") return q;
  // Authentieke examenvragen houden hun officiële optie-volgorde — die
  // volgorde is onderdeel van de bron (beleid: zie buildExamenMix/citoMix).
  if (q.examenBron) return q;
  if (q.options.some((o) => typeof o === "string" && POSITIE_VAST.test(o))) return q;

  const volgorde = q.options.map((_, i) => i);
  for (let i = volgorde.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [volgorde[i], volgorde[j]] = [volgorde[j], volgorde[i]];
  }

  const options = volgorde.map((i) => q.options[i]);
  const answer = volgorde.indexOf(q.answer);
  const wrongHints =
    Array.isArray(q.wrongHints) && q.wrongHints.length === q.options.length
      ? volgorde.map((i) => q.wrongHints[i])
      : q.wrongHints;

  let uitlegPad = q.uitlegPad;
  if (uitlegPad && uitlegPad.niveaus) {
    uitlegPad = {
      ...uitlegPad,
      niveaus: {
        ...uitlegPad.niveaus,
        basis: stripLetterShorthand(uitlegPad.niveaus.basis),
        simpeler: stripLetterShorthand(uitlegPad.niveaus.simpeler),
        nogSimpeler: stripLetterShorthand(uitlegPad.niveaus.nogSimpeler),
      },
    };
  }

  return { ...q, options, answer, wrongHints, ...(uitlegPad !== q.uitlegPad ? { uitlegPad } : {}) };
}
