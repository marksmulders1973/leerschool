// ══════════════════════════════════════════════════════════════════════
// Oefenboekje "op maat" — pure keuzelogica (Familie-feature 3, Mark 1 aug 2026).
//
// Vertaalt de mastery-records van een kind (uit loadMasteryForPlayer:
// { pathId, attempts, correct, path:{title,subject} }) naar de zwakste
// concepten, zodat het printbare oefenboekje precies die struikelonderwerpen
// kan vullen. Zo wordt "kies een onderwerp" pas écht "op maat uit de
// oefengeschiedenis".
//
// Bewust conservatief: alleen concepten met genoeg pogingen tellen mee (anders
// is één toevallige fout al "zwak"), en examen-paden doen niet mee (authentieke
// vragen printen we niet als los werkblad).
// ══════════════════════════════════════════════════════════════════════

/**
 * Kies de zwakste concepten uit mastery-records.
 * @param {Array<{pathId?:string, attempts:number, correct:number, path?:{id?:string,title?:string,subject?:string}}>} records
 * @param {{maxConcepten?:number, minPogingen?:number, drempelPct?:number}} [opts]
 * @returns {Array<{id:string, title:string, subject:string, attempts:number, pct:number}>}
 *   zwakste eerst (laagste % goed).
 */
export function kiesZwakkeConcepten(records, opts = {}) {
  const { maxConcepten = 4, minPogingen = 4, drempelPct = 80 } = opts;
  const arr = Array.isArray(records) ? records : [];
  return arr
    .map((r) => {
      const id = r?.pathId || r?.path?.id || null;
      const attempts = Number(r?.attempts) || 0;
      const correct = Number(r?.correct) || 0;
      const pct = attempts > 0 ? Math.round((correct / attempts) * 100) : null;
      return { id, title: r?.path?.title || "", subject: r?.path?.subject || "", attempts, pct };
    })
    .filter(
      (r) =>
        r.id &&
        !String(r.id).startsWith("examen-") &&
        r.attempts >= minPogingen &&
        r.pct != null &&
        r.pct < drempelPct
    )
    .sort((a, b) => a.pct - b.pct || b.attempts - a.attempts)
    .slice(0, maxConcepten);
}

/**
 * Verdeel een maximaal aantal opgaven (bv. 12) eerlijk over N concepten.
 * Zwakste concept (eerste in de lijst) krijgt de rest-opgaven mee.
 * @returns {number[]} aantal items per concept, zelfde volgorde als input.
 */
export function verdeelItems(aantalConcepten, maxItems = 12) {
  const n = Math.max(0, Math.floor(aantalConcepten));
  if (n === 0) return [];
  const basis = Math.floor(maxItems / n);
  const rest = maxItems - basis * n;
  return Array.from({ length: n }, (_, i) => basis + (i < rest ? 1 : 0));
}
