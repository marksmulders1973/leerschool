// node --import ./scripts/meervragen/reg.mjs scripts/meervragen/tel.mjs → per basisschoolpad: stappen < 10 vragen (niet-interactief)
import { manifest, laadPad, mc } from "./laad.mjs";
const rows = [];
for (const e of manifest()) {
  if (!/^(po|groep)/.test(String(e.level)) || /^examen/.test(e.id)) continue;
  let pad; try { ({ pad } = await laadPad(e.id)); } catch (err) { rows.push({ id: e.id, fout: err.message }); continue; }
  const tekort = pad.steps.map((s, i) => (s.interactiveComponent ? 0 : Math.max(0, 10 - mc(s).length)));
  const som = tekort.reduce((a, b) => a + b, 0);
  if (som) rows.push({ id: e.id, subject: e.subject, level: e.level, file: e.file, nodig: som, stappen: tekort.filter(Boolean).length });
}
rows.sort((a, b) => String(a.subject).localeCompare(String(b.subject)) || b.nodig - a.nodig);
for (const r of rows) console.log(r.fout ? `${r.id} FOUT ${r.fout}` : `${r.subject}\t${r.id}\t${r.level}\tnodig ${r.nodig}\tstappen ${r.stappen}\t${r.file}`);
console.log("paden:", rows.length, "totaal nodig:", rows.reduce((a, r) => a + (r.nodig || 0), 0));
