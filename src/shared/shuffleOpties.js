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
// - uitleg verwijst soms naar een optieletter ("A.", "Dat is A.", "(=A)") die na
//   schudden niet meer klopt — die vervangen we runtime door de optietekst (data blijft heel).

const POSITIE_VAST = /\b(beide|allebei|geen van|alle (twee|drie|vier)|bovenstaande|onderstaande|[abcd] en [abcd])\b/i;

// 13 okt 2026 (eindmeting: 3 van 200 vragen): de oude regel haalde alleen " A." aan het eind weg.
// Een losse "A.", "Dat is A.", "(=A)" of "antwoord A" bleef staan en wees na het schudden naar een
// andere optie; en "zoek bij de C." (letter als inhoud) werd juist kapotgemaakt. Nu vervangen we de
// letter door de tekst van de optie waar hij (in de oorspronkelijke volgorde) naar wees.
// Zijn de opties zelf letters (alfabet, scheikunde-symbolen), dan blijft de tekst ongemoeid.
export function vervangLetterVerwijzingen(s, opties) {
  if (typeof s !== "string" || !Array.isArray(opties)) return s;
  if (opties.some((o) => typeof o === "string" && /^\s*[A-D]\s*$/.test(o))) return s;
  // Staat de letter zelf in een optie ("Koolstof (C)", "0,12 A", "x³/3 + C", "Trein A"), dan is het
  // inhoud (symbool, eenheid, naam) en geen verwijzing naar een optie: dan niets vervangen.
  const isInhoud = (l) => opties.some((o) => typeof o === "string" && new RegExp(`(^|[^\\p{L}])${l}([^\\p{L}]|$)`, "u").test(o));
  const tekst = (l) => {
    if (isInhoud(l)) return null;
    const o = opties["ABCD".indexOf(l)];
    return typeof o === "string" ? `'${o.replace(/\*\*/g, "").trim()}'` : null;
  };
  const vervang = (m, l, voor = "", na = "") => { const o = tekst(l); return o ? `${voor}${o}${na}` : m; };
  return s
    .replace(/^\s*([A-D])\.?\s*$/, (m, l) => vervang(m, l, "", "."))
    .replace(/\(\s*=\s*([A-D])\s*\)/g, (m, l) => vervang(m, l, "(= ", ")"))
    .replace(/\b(antwoord|optie)\s+([A-D])\b/g, (m, w, l) => vervang(m, l, `${w} `))
    .replace(/\b(Antwoord|Optie)\s+([A-D])\b/g, (m, w, l) => vervang(m, l, `${w} `))
    .replace(/\b(Dat is|dat is|Het is|het is)\s+([A-D])\.?\s*$/, (m, w, l) => vervang(m, l, `${w} `, "."))
    .replace(/\bKies\s+([A-D])\.?\s*$/, (m, l) => vervang(m, l, "Kies ", "."))
    .replace(/→\s*([A-D])\.?\s*$/, (m, l) => vervang(m, l, "→ ", "."));
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

  const v = (s) => vervangLetterVerwijzingen(s, q.options);
  let uitlegPad = q.uitlegPad;
  if (uitlegPad && uitlegPad.niveaus) {
    uitlegPad = {
      ...uitlegPad,
      niveaus: {
        ...uitlegPad.niveaus,
        basis: v(uitlegPad.niveaus.basis),
        simpeler: v(uitlegPad.niveaus.simpeler),
        nogSimpeler: v(uitlegPad.niveaus.nogSimpeler),
      },
    };
  }
  const explanation = v(q.explanation);

  return { ...q, options, answer, wrongHints, ...(uitlegPad !== q.uitlegPad ? { uitlegPad } : {}), ...(explanation !== q.explanation ? { explanation } : {}) };
}
